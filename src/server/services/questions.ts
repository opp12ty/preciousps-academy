import { and, asc, desc, eq, ilike, inArray, isNull, or, sql, type SQL } from "drizzle-orm";
import { z } from "zod";
import { can } from "@/core/permissions";
import { questionFingerprint } from "@/core/question-parser";
import type { BankQuestion } from "@/core/exam-engine";
import { SECTIONS } from "@/core/sections";
import { getDb, type Executor } from "../db";
import { classes, departments, questionOptions, questions, questionVersions, subjects, subtopics, topics, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { sha256 } from "../crypto";

const uuidOpt = z
  .string()
  .uuid()
  .nullish()
  .or(z.literal("").transform(() => null));

export const questionInputSchema = z
  .object({
    subjectId: z.string().uuid("Select a subject."),
    classId: uuidOpt,
    departmentId: uuidOpt,
    /** Section; omitted = taken from the class, then the topic. "" = all sections. */
    level: z.enum(SECTIONS).nullish().or(z.literal("").transform(() => null)),
    topicId: uuidOpt,
    subtopicId: uuidOpt,
    year: z.coerce.number().int().min(1990).max(2100).nullish(),
    examType: z.enum(["PRACTICE", "MOCK", "SCHOOL_EXAM", "CLASS_TEST", "CONTINUOUS_ASSESSMENT", "JAMB", "WAEC", "NECO", "BECE", "CUSTOM"]).nullish(),
    difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).default("MEDIUM"),
    type: z.enum(["MCQ", "TRUE_FALSE", "MULTI_SELECT", "NUMERIC", "FILL_BLANK", "MATCHING"]).default("MCQ"),
    stem: z.string().trim().min(3, "Question text is required.").max(8000),
    imageAssetId: uuidOpt,
    explanation: z.string().trim().max(8000).nullish(),
    marks: z.coerce.number().positive().max(100).default(1),
    options: z
      .array(z.object({ text: z.string().trim().min(1, "Option text is required.").max(2000), isCorrect: z.boolean().default(false), matchText: z.string().trim().max(2000).nullish() }))
      .max(8)
      .default([]),
    answerSpec: z
      .object({ value: z.number().optional(), tolerance: z.number().min(0).optional(), accepted: z.array(z.string().trim().min(1).max(200)).max(20).optional(), caseSensitive: z.boolean().optional() })
      .nullish(),
    source: z.string().trim().max(300).nullish(),
    copyrightStatus: z.enum(["ORIGINAL", "TEACHER_AUTHORED", "LICENSED", "AUTHORIZED", "AI_GENERATED", "UNKNOWN"]).default("ORIGINAL"),
    licenseInfo: z.string().trim().max(500).nullish(),
    status: z.enum(["DRAFT", "PENDING_REVIEW", "APPROVED"]).default("PENDING_REVIEW"),
  })
  .superRefine((q, ctx) => {
    const correct = q.options.filter((o) => o.isCorrect).length;
    const need = (msg: string) => ctx.addIssue({ code: "custom", path: ["options"], message: msg });
    switch (q.type) {
      case "MCQ":
        if (q.options.length < 2) need("Add at least two options.");
        if (correct !== 1) need("Mark exactly one correct option.");
        break;
      case "TRUE_FALSE":
        if (q.options.length !== 2) need("True/False questions need exactly two options.");
        if (correct !== 1) need("Mark the correct option.");
        break;
      case "MULTI_SELECT":
        if (q.options.length < 3) need("Add at least three options.");
        if (correct < 1) need("Mark at least one correct option.");
        break;
      case "MATCHING":
        if (q.options.length < 2 || q.options.some((o) => !o.matchText)) need("Each item needs a matching pair.");
        break;
      case "NUMERIC":
        if (typeof q.answerSpec?.value !== "number") ctx.addIssue({ code: "custom", path: ["answerSpec"], message: "Enter the numeric answer." });
        break;
      case "FILL_BLANK":
        if (!q.answerSpec?.accepted?.length) ctx.addIssue({ code: "custom", path: ["answerSpec"], message: "Enter at least one accepted answer." });
        break;
    }
    const texts = q.options.map((o) => o.text.toLowerCase());
    if (new Set(texts).size !== texts.length) need("Two options have identical text.");
  });

export type QuestionInput = z.input<typeof questionInputSchema>;

async function assertScope(schoolId: string, q: z.infer<typeof questionInputSchema>, db: Executor) {
  const [s] = await db.select({ id: subjects.id, code: subjects.code }).from(subjects).where(and(eq(subjects.id, q.subjectId), eq(subjects.schoolId, schoolId)));
  if (!s) throw new AppError("VALIDATION", "Unknown subject.", { subjectId: ["Select a valid subject."] });
  let level: string | null | undefined = q.level;
  if (q.classId) {
    const [c] = await db.select({ id: classes.id, level: classes.level }).from(classes).where(and(eq(classes.id, q.classId), eq(classes.schoolId, schoolId)));
    if (!c) throw new AppError("VALIDATION", "Unknown class.");
    level = c.level;
  }
  if (q.departmentId) {
    const [d] = await db.select({ id: departments.id }).from(departments).where(and(eq(departments.id, q.departmentId), eq(departments.schoolId, schoolId)));
    if (!d) throw new AppError("VALIDATION", "Unknown department.");
  }
  if (q.topicId) {
    const [t] = await db.select({ id: topics.id, subjectId: topics.subjectId, level: topics.level }).from(topics).where(and(eq(topics.id, q.topicId), eq(topics.schoolId, schoolId)));
    if (!t || t.subjectId !== q.subjectId) throw new AppError("VALIDATION", "The topic does not belong to this subject.");
    if (level === undefined) level = t.level;
  }
  if (q.subtopicId) {
    const [st] = await db.select({ topicId: subtopics.topicId }).from(subtopics).where(eq(subtopics.id, q.subtopicId));
    if (!st || st.topicId !== q.topicId) throw new AppError("VALIDATION", "The subtopic does not belong to this topic.");
  }
  return { ...s, level: level ?? null };
}

/** Duplicate fingerprint for a question (subject + normalised stem/options + answer spec). */
export function hashFor(q: { stem: string; options: { text: string }[]; subjectId: string; answerSpec?: unknown }) {
  return sha256(`${q.subjectId}|${questionFingerprint(q.stem, q.options)}|${JSON.stringify(q.answerSpec ?? null)}`);
}

function snapshotOf(q: typeof questions.$inferSelect, opts: (typeof questionOptions.$inferSelect)[]) {
  return {
    ...q,
    options: opts.map((o) => ({ id: o.id, label: o.label, text: o.text, matchText: o.matchText, isCorrect: o.isCorrect, sortOrder: o.sortOrder })),
  };
}

const LABELS = "ABCDEFGH";

/**
 * Creates a question. Status is clamped by permission: only reviewers may
 * create directly as APPROVED; AI output is always PENDING_REVIEW (Rule 14).
 */
export async function createQuestion(
  actor: Actor,
  raw: unknown,
  ctx: ReqCtx,
  opts: { db?: Executor; importId?: string; aiRequestId?: string; skipAudit?: boolean } = {},
) {
  const q = questionInputSchema.parse(raw);
  const db = opts.db ?? getDb();
  const subject = await assertScope(actor.schoolId, q, db);
  let status: "DRAFT" | "PENDING_REVIEW" | "APPROVED" = q.status;
  if (status === "APPROVED" && !can(actor, "questions.review")) status = "PENDING_REVIEW";
  if (opts.aiRequestId || opts.importId || q.copyrightStatus === "AI_GENERATED") status = status === "DRAFT" ? "DRAFT" : "PENDING_REVIEW";
  if (q.copyrightStatus === "UNKNOWN" && status === "APPROVED") status = "PENDING_REVIEW";

  const contentHash = hashFor(q);
  const run = async (tx: Executor) => {
    const [dup] = await tx.select({ id: questions.id, ref: questions.ref }).from(questions).where(and(eq(questions.schoolId, actor.schoolId), eq(questions.contentHash, contentHash)));
    if (dup) throw new AppError("DUPLICATE", `This question already exists in the bank (${dup.ref}).`);
    const seq = await tx.execute<{ n: string }>(sql`SELECT nextval('question_ref_seq')::text AS n`);
    const ref = `${subject.code}-${String(seq.rows[0].n).padStart(6, "0")}`;
    const [row] = await tx
      .insert(questions)
      .values({
        schoolId: actor.schoolId,
        ref,
        subjectId: q.subjectId,
        classId: q.classId ?? null,
        departmentId: q.departmentId ?? null,
        level: subject.level,
        topicId: q.topicId ?? null,
        subtopicId: q.subtopicId ?? null,
        year: q.year ?? null,
        examType: q.examType ?? null,
        difficulty: q.difficulty,
        type: q.type,
        stem: q.stem,
        imageAssetId: q.imageAssetId ?? null,
        explanation: q.explanation ?? null,
        marks: q.marks,
        answerSpec: q.answerSpec ?? null,
        source: q.source ?? null,
        copyrightStatus: q.copyrightStatus,
        licenseInfo: q.licenseInfo ?? null,
        status,
        contentHash,
        aiGenerated: Boolean(opts.aiRequestId) || q.copyrightStatus === "AI_GENERATED",
        aiRequestId: opts.aiRequestId ?? null,
        importId: opts.importId ?? null,
        createdBy: actor.id,
        modifiedBy: actor.id,
        ...(status === "APPROVED" ? { reviewedBy: actor.id, reviewedAt: new Date() } : {}),
      })
      .returning();
    const opts2 = q.options.length
      ? await tx
          .insert(questionOptions)
          .values(q.options.map((o, i) => ({ questionId: row.id, label: LABELS[i], text: o.text, isCorrect: q.type === "MATCHING" ? false : o.isCorrect, matchText: o.matchText ?? null, sortOrder: i })))
          .returning()
      : [];
    await tx.insert(questionVersions).values({ questionId: row.id, version: 1, snapshot: snapshotOf(row, opts2), changedBy: actor.id });
    if (!opts.skipAudit) {
      await audit({ actor, action: "question.created", entityType: "question", entityId: row.id, summary: `${ref} (${status})` }, ctx, tx);
    }
    return row;
  };
  return opts.db ? run(opts.db) : db.transaction(run);
}

export async function updateQuestion(actor: Actor, id: string, raw: unknown, ctx: ReqCtx) {
  const q = questionInputSchema.parse(raw);
  const db = getDb();
  const subject = await assertScope(actor.schoolId, q, db);
  return db.transaction(async (tx) => {
    const [cur] = await tx.select().from(questions).where(and(eq(questions.id, id), eq(questions.schoolId, actor.schoolId))).for("update");
    if (!cur) throw new AppError("NOT_FOUND", "Question not found.");
    if (cur.status === "ARCHIVED") throw new AppError("CONFLICT", "Restore the question before editing it.");
    const contentHash = hashFor(q);
    if (contentHash !== cur.contentHash) {
      const [dup] = await tx.select({ ref: questions.ref }).from(questions).where(and(eq(questions.schoolId, actor.schoolId), eq(questions.contentHash, contentHash)));
      if (dup) throw new AppError("DUPLICATE", `An identical question already exists (${dup.ref}).`);
    }
    const reviewer = can(actor, "questions.review");
    let status = q.status as typeof cur.status;
    if (status === "APPROVED" && !reviewer) status = "PENDING_REVIEW";
    if (cur.status === "APPROVED" && !reviewer) status = "PENDING_REVIEW"; // edits by non-reviewers go back to review
    const version = cur.version + 1;
    const [row] = await tx
      .update(questions)
      .set({
        subjectId: q.subjectId,
        classId: q.classId ?? null,
        departmentId: q.departmentId ?? null,
        level: subject.level,
        topicId: q.topicId ?? null,
        subtopicId: q.subtopicId ?? null,
        year: q.year ?? null,
        examType: q.examType ?? null,
        difficulty: q.difficulty,
        type: q.type,
        stem: q.stem,
        imageAssetId: q.imageAssetId ?? null,
        explanation: q.explanation ?? null,
        marks: q.marks,
        answerSpec: q.answerSpec ?? null,
        source: q.source ?? null,
        copyrightStatus: q.copyrightStatus,
        licenseInfo: q.licenseInfo ?? null,
        status,
        version,
        contentHash,
        modifiedBy: actor.id,
        updatedAt: new Date(),
        ...(status === "APPROVED" && cur.status !== "APPROVED" ? { reviewedBy: actor.id, reviewedAt: new Date() } : {}),
      })
      .where(eq(questions.id, id))
      .returning();
    // Replace options — attempts reference immutable snapshots, not these rows.
    await tx.delete(questionOptions).where(eq(questionOptions.questionId, id));
    const opts = q.options.length
      ? await tx
          .insert(questionOptions)
          .values(q.options.map((o, i) => ({ questionId: id, label: LABELS[i], text: o.text, isCorrect: q.type === "MATCHING" ? false : o.isCorrect, matchText: o.matchText ?? null, sortOrder: i })))
          .returning()
      : [];
    await tx.insert(questionVersions).values({ questionId: id, version, snapshot: snapshotOf(row, opts), changedBy: actor.id });
    await audit({ actor, action: "question.edited", entityType: "question", entityId: id, summary: `${cur.ref} → v${version} (${status})` }, ctx, tx);
    return row;
  });
}

export async function reviewQuestions(actor: Actor, ids: string[], decision: "APPROVED" | "REJECTED" | "ARCHIVED" | "PENDING_REVIEW" | "DRAFT", note: string | undefined, ctx: ReqCtx) {
  if (!ids.length) return 0;
  if (decision === "REJECTED" && !note?.trim()) throw new AppError("VALIDATION", "Give a reason when rejecting questions.");
  const db = getDb();
  const rows = await db.select({ id: questions.id, ref: questions.ref, status: questions.status, copyrightStatus: questions.copyrightStatus }).from(questions).where(and(inArray(questions.id, ids), eq(questions.schoolId, actor.schoolId)));
  if (decision === "APPROVED") {
    const blocked = rows.filter((r) => r.copyrightStatus === "UNKNOWN");
    if (blocked.length) throw new AppError("VALIDATION", `Set a copyright status before approving: ${blocked.map((b) => b.ref).join(", ")}.`);
  }
  const res = await db
    .update(questions)
    .set({ status: decision, reviewNote: note ?? null, reviewedBy: actor.id, reviewedAt: new Date(), updatedAt: new Date() })
    .where(inArray(questions.id, rows.map((r) => r.id)))
    .returning({ id: questions.id });
  const action = { APPROVED: "question.approved", REJECTED: "question.rejected", ARCHIVED: "question.archived", PENDING_REVIEW: "question.sent_to_review", DRAFT: "question.restored" }[decision];
  for (const r of rows) await audit({ actor, action, entityType: "question", entityId: r.id, summary: `${r.ref}: ${r.status} → ${decision}${note ? ` (${note})` : ""}` }, ctx);
  return res.length;
}

export interface QuestionFilter {
  search?: string;
  subjectId?: string;
  classId?: string;
  level?: string;
  topicId?: string;
  status?: string;
  difficulty?: string;
  year?: number;
  examType?: string;
  aiGenerated?: boolean;
  needsReview?: boolean;
  page?: number;
  pageSize?: number;
  sort?: "newest" | "oldest" | "difficulty" | "accuracy";
}

export async function listQuestions(actor: Actor, f: QuestionFilter) {
  const db = getDb();
  const page = Math.max(1, f.page ?? 1);
  const pageSize = Math.min(100, Math.max(10, f.pageSize ?? 25));
  const conds: (SQL | undefined)[] = [eq(questions.schoolId, actor.schoolId)];
  if (f.subjectId) conds.push(eq(questions.subjectId, f.subjectId));
  if (f.classId) conds.push(eq(questions.classId, f.classId));
  if (f.level) conds.push(f.level === "ALL" ? isNull(questions.level) : eq(questions.level, f.level));
  if (f.topicId) conds.push(eq(questions.topicId, f.topicId));
  if (f.status) conds.push(eq(questions.status, f.status as "APPROVED"));
  else conds.push(sql`${questions.status} <> 'ARCHIVED'`);
  if (f.difficulty) conds.push(eq(questions.difficulty, f.difficulty as "EASY"));
  if (f.year) conds.push(eq(questions.year, f.year));
  if (f.examType) conds.push(eq(questions.examType, f.examType as "MOCK"));
  if (f.aiGenerated !== undefined) conds.push(eq(questions.aiGenerated, f.aiGenerated));
  if (f.needsReview) {
    // statistics-based review flags (§41) — never auto-deleted
    conds.push(sql`${questions.timesAttempted} >= 20 AND (${questions.timesCorrect}::float / NULLIF(${questions.timesAttempted},0) < 0.2 OR ${questions.timesFlagged}::float / NULLIF(${questions.timesAttempted},0) > 0.25)`);
  }
  if (f.search?.trim()) conds.push(or(ilike(questions.stem, `%${f.search.trim()}%`), ilike(questions.ref, `%${f.search.trim()}%`)));
  const where = and(...conds);
  const order =
    f.sort === "oldest"
      ? asc(questions.createdAt)
      : f.sort === "accuracy"
        ? asc(sql`${questions.timesCorrect}::float / NULLIF(${questions.timesAttempted},0)`)
        : f.sort === "difficulty"
          ? desc(questions.difficulty)
          : desc(questions.createdAt);
  const rows = await db
    .select({
      id: questions.id,
      ref: questions.ref,
      stem: questions.stem,
      type: questions.type,
      status: questions.status,
      difficulty: questions.difficulty,
      year: questions.year,
      examType: questions.examType,
      marks: questions.marks,
      version: questions.version,
      aiGenerated: questions.aiGenerated,
      copyrightStatus: questions.copyrightStatus,
      subject: subjects.name,
      topic: topics.title,
      timesAttempted: questions.timesAttempted,
      timesCorrect: questions.timesCorrect,
      timesFlagged: questions.timesFlagged,
      createdAt: questions.createdAt,
      updatedAt: questions.updatedAt,
      createdByName: sql<string | null>`${users.firstName} || ' ' || ${users.lastName}`,
    })
    .from(questions)
    .innerJoin(subjects, eq(subjects.id, questions.subjectId))
    .leftJoin(topics, eq(topics.id, questions.topicId))
    .leftJoin(users, eq(users.id, questions.createdBy))
    .where(where)
    .orderBy(order, desc(questions.id))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
  const [{ total }] = await db.select({ total: sql<number>`count(*)::int` }).from(questions).where(where);
  const statusCounts = await db
    .select({ status: questions.status, n: sql<number>`count(*)::int` })
    .from(questions)
    .where(eq(questions.schoolId, actor.schoolId))
    .groupBy(questions.status);
  return { rows, total, page, pageSize, statusCounts: Object.fromEntries(statusCounts.map((s) => [s.status, s.n])) as Record<string, number> };
}

export async function getQuestion(actor: Actor, id: string) {
  const db = getDb();
  const [q] = await db.select().from(questions).where(and(eq(questions.id, id), eq(questions.schoolId, actor.schoolId)));
  if (!q) throw new AppError("NOT_FOUND", "Question not found.");
  const options = await db.select().from(questionOptions).where(eq(questionOptions.questionId, id)).orderBy(asc(questionOptions.sortOrder));
  const versions = await db
    .select({ version: questionVersions.version, createdAt: questionVersions.createdAt, changedBy: questionVersions.changedBy })
    .from(questionVersions)
    .where(eq(questionVersions.questionId, id))
    .orderBy(desc(questionVersions.version));
  return { ...q, options, versions };
}

/** Loads approved questions (with options) for the exam / classwork engines. */
export async function loadBankQuestions(ids: string[], db: Executor = getDb()): Promise<BankQuestion[]> {
  if (!ids.length) return [];
  const qs = await db.select().from(questions).where(inArray(questions.id, ids));
  const opts = await db.select().from(questionOptions).where(inArray(questionOptions.questionId, ids));
  return qs.map((q) => ({
    id: q.id,
    version: q.version,
    type: q.type,
    stem: q.stem,
    imageAssetId: q.imageAssetId,
    explanation: q.explanation,
    marks: q.marks,
    answerSpec: (q.answerSpec as BankQuestion["answerSpec"]) ?? null,
    topicId: q.topicId,
    options: opts
      .filter((o) => o.questionId === q.id)
      .map((o) => ({ id: o.id, label: o.label, text: o.text, matchText: o.matchText, isCorrect: o.isCorrect, sortOrder: o.sortOrder })),
  }));
}

export async function questionTopicsForSubject(schoolId: string, subjectId: string) {
  return getDb()
    .select({ id: topics.id, title: topics.title })
    .from(topics)
    .where(and(eq(topics.schoolId, schoolId), eq(topics.subjectId, subjectId)))
    .orderBy(asc(topics.sortOrder));
}
