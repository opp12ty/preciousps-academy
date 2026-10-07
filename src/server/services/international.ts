import { and, eq, inArray, sql } from "drizzle-orm";
import { INTERNATIONAL_PROGRAMMES } from "@/content/international";
import { arrange } from "@/content/packs/build";
import { getDb } from "../db";
import { examinations, questions, subjects } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { createQuestion } from "./questions";

const DIFF = { E: "EASY", M: "MEDIUM", H: "HARD" } as const;

/** Each starter programme with the state of its question bank and its Premium examination. */
export async function internationalOverview(schoolId: string) {
  const db = getDb();
  const counts = await db
    .select({ examType: questions.examType, level: questions.level, subjectId: questions.subjectId, n: sql<number>`count(*)::int` })
    .from(questions)
    .where(and(eq(questions.schoolId, schoolId), inArray(questions.examType, ["IELTS", "TOEFL", "SAT", "CHECKPOINT"]), eq(questions.status, "APPROVED")))
    .groupBy(questions.examType, questions.level, questions.subjectId);
  const subs = await db.select({ id: subjects.id, code: subjects.code }).from(subjects).where(eq(subjects.schoolId, schoolId));
  const exams = await db.select().from(examinations).where(and(eq(examinations.schoolId, schoolId), eq(examinations.isPremium, true)));
  return INTERNATIONAL_PROGRAMMES.map((p) => {
    const subjectId = subs.find((s) => s.code === p.subjectCode)?.id ?? null;
    const exam = exams.find((e) => e.title === p.title && e.status !== "ARCHIVED") ?? null;
    return { ...p, questions: undefined, starter: p.questions.length, subjectId, approved: counts.find((c) => c.examType === p.examType && c.level === p.level && c.subjectId === subjectId)?.n ?? 0, exam: exam ? { id: exam.id, status: exam.status, questionCount: exam.questionCount } : null };
  });
}

/**
 * Loads the starter questions for every programme and publishes one Premium examination each.
 * Safe to run again: questions already in the bank are skipped and existing examinations are kept.
 */
export async function setupInternational(actor: Actor, ctx: ReqCtx) {
  const db = getDb();
  const out = { questions: 0, exams: 0 };
  for (const p of await internationalOverview(actor.schoolId)) {
    if (!p.subjectId) continue;
    const prog = INTERNATIONAL_PROGRAMMES.find((x) => x.key === p.key)!;
    for (const q of prog.questions) {
      const { options, correct } = arrange(q);
      try {
        // The starter questions were reviewed when they were written, so they go in approved.
        await createQuestion(
          { ...actor, userType: "SUPER_ADMIN" },
          { subjectId: p.subjectId, level: p.level, examType: p.examType, difficulty: DIFF[q[0]], type: "MCQ", stem: q[1], explanation: q[6], marks: 1, options: options.map((text, i) => ({ text, isCorrect: "ABCD"[i] === correct })), source: "Precious PS Academy original", copyrightStatus: "ORIGINAL", status: "APPROVED" },
          ctx,
          { skipAudit: true },
        );
        out.questions++;
      } catch {
        /* already in the bank */
      }
    }
    if (!p.exam) {
      const count = Math.min(20, prog.questions.length);
      const [row] = await db
        .insert(examinations)
        .values({ schoolId: actor.schoolId, title: p.title, description: p.description, subjectId: p.subjectId, level: p.level, examType: p.examType, questionCount: count, durationMinutes: p.minutes, maxAttempts: 100, isPremium: true, poolFilter: { examTypes: [p.examType] }, status: "PUBLISHED", createdBy: actor.id })
        .returning({ id: examinations.id });
      await audit({ actor, action: "exam.created", entityType: "examination", entityId: row.id, summary: `${p.title} (Premium)` }, ctx);
      out.exams++;
    }
  }
  return out;
}
