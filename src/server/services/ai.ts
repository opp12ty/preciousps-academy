import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../db";
import { aiQuestionRequests, classes, subjects, topics } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { rateLimit } from "../rate-limit";
import { getSetting } from "../settings";
import { createQuestion } from "./questions";
import { SECTIONS } from "@/core/sections";

/**
 * AI question generation (§42). Output is schema-constrained, validated for
 * internal consistency, and ALWAYS saved as PENDING_REVIEW (Rule 14) with the
 * provider, model, prompt version, time and requesting administrator recorded.
 */
export const PROMPT_VERSION = "qgen-2026-10-v2";

const GeneratedSchema = z.object({
  questions: z.array(
    z.object({
      stem: z.string(),
      options: z.array(z.string()),
      correct_index: z.number().int(),
      explanation: z.string(),
      topic: z.string(),
      difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
      numeric_check: z.string().nullable(),
    }),
  ),
});

export const aiRequestSchema = z.object({
  subjectId: z.string().uuid(),
  classId: z.string().uuid().nullish().or(z.literal("").transform(() => null)),
  /** Section when no class is chosen. */
  level: z.enum(SECTIONS).nullish().or(z.literal("").transform(() => null)),
  topicId: z.string().uuid().nullish().or(z.literal("").transform(() => null)),
  topicText: z.string().trim().max(160).optional(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).default("MEDIUM"),
  count: z.coerce.number().int().min(1).max(50),
  type: z.enum(["MCQ", "TRUE_FALSE"]).default("MCQ"),
});

export function aiConfigured() {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

/** Consistency checks that catch obvious answer conflicts before a human ever reviews. */
export function validateGenerated(q: z.infer<typeof GeneratedSchema>["questions"][number], type: "MCQ" | "TRUE_FALSE"): string[] {
  const errs: string[] = [];
  const opts = q.options.map((o) => o.trim());
  if (q.stem.trim().length < 8) errs.push("stem too short");
  if (type === "MCQ" && opts.length !== 4) errs.push("MCQ needs exactly 4 options");
  if (type === "TRUE_FALSE" && (opts.length !== 2 || !/^true$/i.test(opts[0]) || !/^false$/i.test(opts[1]))) errs.push("True/False options must be [True, False]");
  if (q.correct_index < 0 || q.correct_index >= opts.length) errs.push("correct_index out of range");
  if (new Set(opts.map((o) => o.toLowerCase())).size !== opts.length) errs.push("duplicate options");
  if (opts.some((o) => !o)) errs.push("empty option");
  if (/all of the above|none of the above/i.test(opts.join("|"))) errs.push("uses all/none of the above");
  // Numeric self-check: when the model supplies a computed value, it must match the keyed option.
  if (q.numeric_check && q.correct_index >= 0 && q.correct_index < opts.length) {
    const n = Number(q.numeric_check.replace(/[^0-9.\-/]/g, ""));
    const keyed = Number(opts[q.correct_index].replace(/[$\\{}a-z ]/gi, ""));
    if (Number.isFinite(n) && Number.isFinite(keyed) && Math.abs(n - keyed) > 1e-6) errs.push("numeric check disagrees with keyed answer");
    const others = opts.filter((_, i) => i !== q.correct_index).map((o) => Number(o.replace(/[$\\{}a-z ]/gi, "")));
    if (Number.isFinite(n) && others.some((x) => Number.isFinite(x) && Math.abs(x - n) < 1e-9)) errs.push("another option equals the computed answer");
  }
  return errs;
}

export async function generateQuestions(actor: Actor, raw: unknown, ctx: ReqCtx) {
  const input = aiRequestSchema.parse(raw);
  const flags = await getSetting(actor.schoolId, "featureFlags");
  const cfg = await getSetting(actor.schoolId, "ai");
  if (!flags.ai || !cfg.enabled) throw new AppError("NOT_CONFIGURED", "AI generation is switched off. The Super Admin can enable it in Settings → AI.");
  if (!aiConfigured()) throw new AppError("NOT_CONFIGURED", "AI generation needs ANTHROPIC_API_KEY to be set in the server environment.");
  if (input.count > cfg.maxQuestionsPerRequest) throw new AppError("VALIDATION", `Request at most ${cfg.maxQuestionsPerRequest} questions at a time.`);
  await rateLimit("ai", actor.id, ctx);

  const db = getDb();
  const [subject] = await db.select().from(subjects).where(and(eq(subjects.id, input.subjectId), eq(subjects.schoolId, actor.schoolId)));
  if (!subject) throw new AppError("VALIDATION", "Unknown subject.");
  const [cls] = input.classId ? await db.select().from(classes).where(eq(classes.id, input.classId)) : [];
  const [topic] = input.topicId ? await db.select().from(topics).where(and(eq(topics.id, input.topicId), eq(topics.subjectId, subject.id))) : [];
  const topicName = topic?.title ?? input.topicText ?? "any topic in the syllabus";
  const section = cls?.level ?? input.level ?? topic?.level ?? "SENIOR_SECONDARY";
  const junior = section === "JUNIOR_SECONDARY";
  const audience = junior
    ? "Nigerian junior secondary students (JSS 1–JSS 3, Basic Education curriculum). Keep language simple and age-appropriate (about 10–14 years). Never reproduce or paraphrase past BECE or Common Entrance questions. "
    : "Nigerian senior secondary students (SSS 1–SSS 3). Never reproduce or paraphrase past JAMB, WAEC or NECO questions. ";

  const client = new Anthropic();
  const system =
    "You write ORIGINAL objective questions for " +
    audience +
    "Each question must have exactly one unambiguous correct answer, plausible distractors, and a concise explanation a student can learn from. " +
    "Write mathematics in LaTeX between single dollar signs, e.g. $\\frac{1}{2}$. Avoid 'all of the above' and 'none of the above'. " +
    "For calculation questions, set numeric_check to the computed numeric answer; otherwise null.";
  const user =
    `Subject: ${subject.name}\nClass: ${cls?.name ?? (junior ? "JSS 1–JSS 3" : "SSS 1–SSS 3")}\nTopic: ${topicName}\nDifficulty: ${input.difficulty}\n` +
    `Question type: ${input.type === "MCQ" ? "multiple choice with exactly 4 options" : "True/False with options exactly [\"True\", \"False\"]"}\n` +
    `Number of questions: ${input.count}\ncorrect_index is the 0-based index of the correct option.`;

  let parsed: z.infer<typeof GeneratedSchema> | null = null;
  let error: string | null = null;
  try {
    const response = await client.messages.parse({
      model: cfg.model || "claude-opus-5-5",
      max_tokens: 16000,
      output_config: { effort: "medium", format: zodOutputFormat(GeneratedSchema) },
      system,
      messages: [{ role: "user", content: user }],
    });
    if (response.stop_reason === "refusal") error = "The AI provider declined this request.";
    else if (response.stop_reason === "max_tokens") error = "The response was cut off. Request fewer questions.";
    else parsed = response.parsed_output ?? null;
    if (!parsed && !error) error = "The AI response could not be parsed.";
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) error = "The AI provider is busy (rate limited). Try again shortly.";
    else if (e instanceof Anthropic.AuthenticationError) error = "The AI provider rejected the API key.";
    else if (e instanceof Anthropic.APIError) error = `AI provider error (${e.status ?? "network"}).`;
    else throw e;
  }

  const [reqRow] = await db
    .insert(aiQuestionRequests)
    .values({
      schoolId: actor.schoolId,
      provider: "anthropic",
      model: cfg.model || "claude-opus-5-5",
      promptVersion: PROMPT_VERSION,
      params: { ...input, topicName },
      status: error ? "FAILED" : "SUCCEEDED",
      error,
      createdBy: actor.id,
    })
    .returning({ id: aiQuestionRequests.id });
  if (error || !parsed) {
    await audit({ actor, action: "ai.generation_failed", entityType: "ai_request", entityId: reqRow.id, summary: error ?? "unknown" }, ctx);
    throw new AppError("INTERNAL", error ?? "AI generation failed.");
  }

  const created: string[] = [];
  const rejected: { stem: string; reasons: string[] }[] = [];
  for (const q of parsed.questions.slice(0, input.count)) {
    const reasons = validateGenerated(q, input.type);
    if (reasons.length) {
      rejected.push({ stem: q.stem.slice(0, 120), reasons });
      continue;
    }
    try {
      const row = await createQuestion(
        actor,
        {
          subjectId: subject.id,
          classId: input.classId ?? null,
          level: cls ? undefined : (input.level ?? undefined),
          topicId: topic?.id ?? null,
          difficulty: q.difficulty,
          type: input.type,
          stem: q.stem,
          explanation: q.explanation,
          marks: 1,
          options: q.options.map((text, i) => ({ text, isCorrect: i === q.correct_index })),
          source: `AI (${cfg.model}, ${PROMPT_VERSION})`,
          copyrightStatus: "AI_GENERATED",
          status: "PENDING_REVIEW",
        },
        ctx,
        { aiRequestId: reqRow.id },
      );
      created.push(row.id);
    } catch (e) {
      rejected.push({ stem: q.stem.slice(0, 120), reasons: [(e as Error).message] });
    }
  }
  await db.update(aiQuestionRequests).set({ generatedCount: created.length, rejectedCount: rejected.length }).where(eq(aiQuestionRequests.id, reqRow.id));
  await audit({ actor, action: "ai.questions_generated", entityType: "ai_request", entityId: reqRow.id, summary: `${created.length} question(s) → PENDING_REVIEW, ${rejected.length} rejected` }, ctx);
  return { requestId: reqRow.id, created: created.length, rejected };
}
