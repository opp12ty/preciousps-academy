import { and, asc, desc, eq, gte, inArray, isNull, lte, ne, or, sql, type SQL } from "drizzle-orm";
import { randomBytes } from "node:crypto";
import { z } from "zod";
import {
  buildSnapshot,
  ExamEngineError,
  gradeFor,
  isPastDeadline,
  markResponse,
  normaliseResponse,
  selectQuestionIds,
  shuffle,
  SUBMIT_GRACE_MS,
  summarise,
  toPublicQuestion,
  type AttemptQuestionSnapshot,
  type GradeBand,
  type Rng,
} from "@/core/exam-engine";
import { getDb, type Executor } from "../db";
import { JAMB_SUBJECT_CODES } from "@/core/exam-programmes";
import {
  attemptAnswers,
  attemptEvents,
  attemptQuestions,
  classes,
  departments,
  examinationAttempts,
  examinationQuestions,
  examinations,
  questions,
  results,
  topics,
  students,
  subjects,
  users,
} from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { getSetting } from "../settings";
import { featureWithheld, requireFeature, requirePremiumAccess } from "./access";
import { FEATURE_DENIED } from "@/core/features";
import { loadBankQuestions } from "./questions";
import { resolveSection, sectionCond, studentScope, type StudentScope } from "./scope";
import { SECTIONS, sectionAllows } from "@/core/sections";
import { EXAM_TYPES } from "@/core/question-parser";
import { examTypeAllowsClass } from "@/core/exam-programmes";
import { notifyUser } from "./notifications";

/** CSPRNG in [0,1) for production randomisation. */
export const cryptoRng: Rng = () => randomBytes(4).readUInt32BE(0) / 4294967296;

const uuidOpt = z
  .string()
  .uuid()
  .nullish()
  .or(z.literal("").transform(() => null));
const sectionOpt = z
  .enum(SECTIONS)
  .nullish()
  .or(z.literal("").transform(() => null));
const dateOpt = z
  .union([z.coerce.date(), z.literal("").transform(() => null), z.null()])
  .optional()
  .transform((v) => v ?? null);

export const examInputSchema = z
  .object({
    title: z.string().trim().min(3).max(160),
    description: z.string().trim().max(2000).nullish(),
    subjectId: z.string().uuid("Select a subject."),
    classId: uuidOpt,
    departmentId: uuidOpt,
    level: sectionOpt,
    year: z.coerce.number().int().min(1990).max(2100).nullish(),
    examType: z.enum(EXAM_TYPES),
    questionCount: z.coerce.number().int().min(1).max(500),
    durationMinutes: z.coerce.number().int().min(1).max(600),
    totalMarks: z.coerce.number().positive().max(10000).nullish(),
    passMark: z.coerce.number().min(0).max(100).default(50),
    randomizeQuestions: z.boolean().default(true),
    randomizeOptions: z.boolean().default(true),
    negativeMarking: z.coerce.number().min(0).max(1).default(0),
    startsAt: dateOpt,
    endsAt: dateOpt,
    maxAttempts: z.coerce.number().int().min(1).max(100).default(1),
    requiresAccess: z.boolean().default(true),
    isPremium: z.boolean().default(false),
    resultVisibility: z.enum(["IMMEDIATE", "AFTER_RELEASE", "HIDDEN"]).default("IMMEDIATE"),
    showExplanations: z.boolean().default(true),
    poolFilter: z
      .object({
        years: z.array(z.number().int()).max(40).optional(),
        topicIds: z.array(z.string().uuid()).max(200).optional(),
        difficulties: z.array(z.enum(["EASY", "MEDIUM", "HARD"])).optional(),
        matchClass: z.boolean().optional(),
        /** Draw only questions tagged with these exam types (e.g. JAMB-only tests). */
        examTypes: z.array(z.enum(["JAMB", "WAEC", "NECO", "BECE", "IELTS", "TOEFL", "SAT", "CHECKPOINT", "COMMON_ENTRANCE", "JUPEB", "IJMB", "PreciousPS_EXAM"])).max(12).optional(),
      })
      .nullish(),
  })
  .refine((e) => !e.startsAt || !e.endsAt || e.endsAt > e.startsAt, { path: ["endsAt"], message: "End must be after start." });

export type ExamInput = z.input<typeof examInputSchema>;

export async function createExam(actor: Actor, raw: unknown, ctx: ReqCtx) {
  const e = examInputSchema.parse(raw);
  const db = getDb();
  const [s] = await db.select({ id: subjects.id }).from(subjects).where(and(eq(subjects.id, e.subjectId), eq(subjects.schoolId, actor.schoolId)));
  if (!s) throw new AppError("VALIDATION", "Unknown subject.");
  const level = await resolveSection(actor.schoolId, e.classId, e.level);
  const [row] = await db
    .insert(examinations)
    .values({ ...e, level, schoolId: actor.schoolId, status: "DRAFT", createdBy: actor.id, poolFilter: e.poolFilter ?? null })
    .returning();
  await audit({ actor, action: "exam.created", entityType: "examination", entityId: row.id, summary: row.title }, ctx);
  return row;
}

export async function updateExam(actor: Actor, id: string, raw: unknown, ctx: ReqCtx) {
  const e = examInputSchema.parse(raw);
  const db = getDb();
  const [cur] = await db.select().from(examinations).where(and(eq(examinations.id, id), eq(examinations.schoolId, actor.schoolId)));
  if (!cur) throw new AppError("NOT_FOUND", "Examination not found.");
  // Historical attempts keep their frozen snapshot, so editing is safe (§39).
  const level = await resolveSection(actor.schoolId, e.classId, e.level);
  const [row] = await db
    .update(examinations)
    .set({ ...e, ...((cur.poolFilter as PoolFilter | null)?.allSubjects ? { subjectId: cur.subjectId } : {}), level, poolFilter: handSized(keepExamTypes(e.poolFilter ?? null, cur.poolFilter), e.questionCount !== cur.questionCount), version: cur.version + 1, updatedAt: new Date() })
    .where(eq(examinations.id, id))
    .returning();
  await audit({ actor, action: "exam.edited", entityType: "examination", entityId: id, summary: `${row.title} → v${row.version}` }, ctx);
  return row;
}

export async function setExamStatus(actor: Actor, id: string, status: "DRAFT" | "PUBLISHED" | "ARCHIVED", ctx: ReqCtx) {
  const db = getDb();
  const [cur] = await db.select().from(examinations).where(and(eq(examinations.id, id), eq(examinations.schoolId, actor.schoolId)));
  if (!cur) throw new AppError("NOT_FOUND", "Examination not found.");
  if (status === "PUBLISHED") {
    const size = await poolSize(cur);
    if (size === 0) throw new AppError("VALIDATION", "Cannot publish: this exam has no approved questions yet. Upload or approve some questions first.");
    if (size < cur.questionCount) {
      // A small pool is never a reason to refuse: the paper uses every question there is, with the
      // same time per question as before.
      const minutes = minutesForPaper(size, cur.durationMinutes / cur.questionCount);
      await db.update(examinations).set({ questionCount: size, durationMinutes: minutes, version: cur.version + 1 }).where(eq(examinations.id, id));
      await audit({ actor, action: "exam.resized", entityType: "examination", entityId: id, summary: `${cur.title}: ${cur.questionCount} → ${size} questions, ${cur.durationMinutes} → ${minutes} minutes (pool has ${size})` }, ctx);
      cur.questionCount = size;
      cur.durationMinutes = minutes;
    }
  }
  await db.update(examinations).set({ status, updatedAt: new Date() }).where(eq(examinations.id, id));
  await audit({ actor, action: status === "PUBLISHED" ? "exam.published" : status === "ARCHIVED" ? "exam.archived" : "exam.unpublished", entityType: "examination", entityId: id, summary: cur.title }, ctx);
  if (status === "PUBLISHED" && cur.status !== "PUBLISHED") {
    // Announcement to the targeted audience.
    const { broadcast } = await import("./notifications");
    await broadcast(actor, { category: "EXAM", title: `New examination: ${cur.title}`, body: `${cur.questionCount} questions · ${cur.durationMinutes} minutes.`, link: "/student/exams", audience: { classId: cur.classId, departmentId: cur.departmentId, level: cur.level } }, ctx);
  }
}

type PoolFilter = {
  years?: number[];
  topicIds?: string[];
  difficulties?: string[];
  matchClass?: boolean;
  examTypes?: ("JAMB" | "WAEC" | "NECO" | "BECE" | "IELTS" | "TOEFL" | "SAT" | "CHECKPOINT" | "COMMON_ENTRANCE" | "JUPEB" | "IJMB" | "PreciousPS_EXAM")[];
  /** Draw only questions written for these classes (e.g. JSS1–JSS3 for a BECE paper). */
  classIds?: string[];
  /** With both examTypes and classIds: questions of those types OR of those classes. */
  orClasses?: boolean;
  /** With classIds: questions not tied to any class (but within the exam section) may be drawn too. */
  unclassed?: boolean;
  /** Set on the standard JAMB, BECE and Common Entrance papers the system keeps up to date. */
  standard?: boolean;
  /** False once staff change the question count by hand: the paper then keeps its own size. */
  autoSize?: boolean;
  /** Every subject of the class (Precious PS Examinations): the paper is drawn evenly across subjects. */
  allSubjects?: boolean;
  /** Only questions on topics of these terms. */
  termIds?: string[];
  /** Identifies a Precious PS Examination: "<class code>-<term order>". */
  fodanKey?: string;
};

/** Pool settings the exam form does not show; an edit keeps them. */
const HIDDEN_POOL_KEYS = ["classIds", "orClasses", "unclassed", "standard", "autoSize", "allSubjects", "termIds", "fodanKey"] as const;

/** The exam form does not edit the exam-type, class or standard-paper settings, so an edit must not silently drop them. */
function keepExamTypes(next: PoolFilter | null, current: unknown): PoolFilter | null {
  const cur = (current as PoolFilter | null) ?? {};
  const out: PoolFilter = { ...(next ?? {}) };
  if (!out.examTypes?.length && cur.examTypes?.length) out.examTypes = cur.examTypes;
  for (const k of HIDDEN_POOL_KEYS) if (out[k] === undefined && cur[k] !== undefined) (out as Record<string, unknown>)[k] = cur[k];
  return Object.keys(out).length ? out : next;
}

/** A standard paper whose count was changed by hand stops following the standard size. */
const handSized = (f: PoolFilter | null, changed: boolean) => (changed && f?.standard ? { ...f, autoSize: false } : f);

/** Time allowed for a paper: the same minutes per question whatever the size, never under 5 minutes. */
export const minutesForPaper = (questions: number, perQuestion: number) => Math.max(5, Math.ceil(questions * perQuestion));

function poolConditions(exam: typeof examinations.$inferSelect): SQL[] {
  const f = (exam.poolFilter ?? {}) as PoolFilter;
  const conds: SQL[] = [eq(questions.schoolId, exam.schoolId), eq(questions.status, "APPROVED")];
  if (!f.allSubjects) conds.push(eq(questions.subjectId, exam.subjectId));
  if (f.termIds?.length) conds.push(inArray(questions.topicId, getDb().select({ id: topics.id }).from(topics).where(inArray(topics.termId, f.termIds))));
  if (f.years?.length) conds.push(inArray(questions.year, f.years));
  if (f.topicIds?.length) conds.push(inArray(questions.topicId, f.topicIds));
  if (f.difficulties?.length) conds.push(inArray(questions.difficulty, f.difficulties as ("EASY" | "MEDIUM" | "HARD")[]));
  if (f.matchClass && exam.classId) conds.push(or(eq(questions.classId, exam.classId), isNull(questions.classId))!);
  if (f.examTypes?.length && f.classIds?.length && f.orClasses) conds.push(or(inArray(questions.examType, f.examTypes), inArray(questions.classId, f.classIds))!);
  else {
    if (f.examTypes?.length) conds.push(inArray(questions.examType, f.examTypes));
    if (f.classIds?.length) conds.push(f.unclassed ? or(inArray(questions.classId, f.classIds), isNull(questions.classId))! : inArray(questions.classId, f.classIds));
  }
  // A JSS exam never draws SS questions and vice versa.
  if (exam.level) conds.push(sectionCond(questions.level, exam.level));
  return conds;
}

export async function poolSize(exam: typeof examinations.$inferSelect, db: Executor = getDb()) {
  const fixed = await db.select({ n: sql<number>`count(*)::int` }).from(examinationQuestions).innerJoin(questions, eq(questions.id, examinationQuestions.questionId)).where(and(eq(examinationQuestions.examinationId, exam.id), eq(questions.status, "APPROVED")));
  if (fixed[0].n > 0) return fixed[0].n;
  const [{ n }] = await db.select({ n: sql<number>`count(*)::int` }).from(questions).where(and(...poolConditions(exam)));
  return n;
}

/**
 * Makes an exam fit its question pool: when the pool is smaller than the set count, the paper uses
 * every question there is and keeps the same time per question. False when the pool is empty.
 */
export async function fitExamToPool(exam: typeof examinations.$inferSelect, db: Executor = getDb()) {
  const size = await poolSize(exam, db);
  if (!size) return false;
  if (size < exam.questionCount) await db.update(examinations).set({ questionCount: size, durationMinutes: minutesForPaper(size, exam.durationMinutes / exam.questionCount), version: exam.version + 1 }).where(eq(examinations.id, exam.id));
  return true;
}

/**
 * An all-subjects paper (Precious PS Examination): questions are dealt subject by subject, so every subject
 * the class offers is covered as evenly as the pool allows, then grouped by subject like a real paper.
 */
async function balancedPick(exam: typeof examinations.$inferSelect, db: Executor, count: number, rng: Parameters<typeof shuffle>[1]) {
  const rows = await db
    .select({ id: questions.id, s: questions.subjectId, order: subjects.sortOrder, name: subjects.name })
    .from(questions)
    .innerJoin(subjects, eq(subjects.id, questions.subjectId))
    .where(and(...poolConditions(exam)));
  const bySubject = new Map<string, { order: number; name: string; ids: string[] }>();
  for (const r of rows) {
    const g = bySubject.get(r.s) ?? { order: r.order, name: r.name, ids: [] };
    g.ids.push(r.id);
    bySubject.set(r.s, g);
  }
  const groups = shuffle([...bySubject.values()], rng).map((g) => ({ ...g, ids: shuffle(g.ids, rng), picked: [] as string[] }));
  let left = Math.min(count, rows.length);
  while (left > 0) {
    let moved = false;
    for (const g of groups) {
      if (!left) break;
      const next = g.ids.shift();
      if (!next) continue;
      g.picked.push(next);
      left--;
      moved = true;
    }
    if (!moved) break;
  }
  return groups.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name)).flatMap((g) => g.picked);
}

async function poolIds(exam: typeof examinations.$inferSelect, db: Executor): Promise<string[]> {
  const fixed = await db
    .select({ id: examinationQuestions.questionId })
    .from(examinationQuestions)
    .innerJoin(questions, eq(questions.id, examinationQuestions.questionId))
    .where(and(eq(examinationQuestions.examinationId, exam.id), eq(questions.status, "APPROVED")))
    .orderBy(asc(examinationQuestions.sortOrder));
  if (fixed.length) return fixed.map((r) => r.id);
  // Only ids travel — never the whole bank (§55).
  const rows = await db.select({ id: questions.id }).from(questions).where(and(...poolConditions(exam)));
  return rows.map((r) => r.id);
}

/* ------------------------------------------------------- student surface */

function eligible(exam: typeof examinations.$inferSelect, scope: StudentScope) {
  return (
    (!exam.classId || exam.classId === scope.classId) &&
    (!exam.departmentId || exam.departmentId === scope.departmentId) &&
    sectionAllows(exam.level, scope.level) &&
    // Common Entrance is for Basic 4-6, BECE for JSS2-3, WAEC/NECO/JAMB/JUPEB/IJMB for SS2-3.
    examTypeAllowsClass(exam.examType, scope.classCode)
  );
}

const isJambOnly = (exam: typeof examinations.$inferSelect) => exam.examType === "JAMB" && Boolean((exam.poolFilter as PoolFilter | null)?.examTypes?.includes("JAMB"));

export async function listStudentExams(actor: Actor, filter?: { types?: string[]; jambOnly?: boolean; premium?: boolean }) {
  const db = getDb();
  const scope = await studentScope(actor.id);
  const now = new Date();
  const conds: SQL[] = [eq(examinations.schoolId, actor.schoolId), eq(examinations.status, "PUBLISHED")];
  if (filter?.types?.length) conds.push(inArray(examinations.examType, filter.types as "MOCK"[]));
  // Premium examinations live in their own area and never appear in the ordinary lists.
  conds.push(eq(examinations.isPremium, Boolean(filter?.premium)));
  const exams = await db
    .select({ e: examinations, subject: subjects.name, className: classes.name, department: departments.name })
    .from(examinations)
    .innerJoin(subjects, eq(subjects.id, examinations.subjectId))
    .leftJoin(classes, eq(classes.id, examinations.classId))
    .leftJoin(departments, eq(departments.id, examinations.departmentId))
    .where(and(...conds))
    .orderBy(asc(examinations.startsAt), desc(examinations.createdAt));
  const mine = exams.filter((x) => eligible(x.e, scope) && (!filter?.jambOnly || isJambOnly(x.e)));
  const ids = mine.map((x) => x.e.id);
  const attempts = ids.length
    ? await db
        .select({ examId: examinationAttempts.examinationId, status: examinationAttempts.status, id: examinationAttempts.id, deadlineAt: examinationAttempts.deadlineAt })
        .from(examinationAttempts)
        .where(and(eq(examinationAttempts.userId, actor.id), inArray(examinationAttempts.examinationId, ids)))
    : [];
  return mine.map(({ e, subject, className, department }) => {
    const mineA = attempts.filter((a) => a.examId === e.id && a.status !== "VOIDED");
    const live = mineA.find((a) => a.status === "IN_PROGRESS" && a.deadlineAt > now);
    const window = e.startsAt && e.startsAt > now ? "UPCOMING" : e.endsAt && e.endsAt < now ? "CLOSED" : "OPEN";
    return {
      id: e.id,
      title: e.title,
      description: e.description,
      subject,
      /** Null when the examination is open to every class / department in the section. */
      className,
      department,
      examType: e.examType,
      year: e.year,
      questionCount: e.questionCount,
      durationMinutes: e.durationMinutes,
      passMark: e.passMark,
      maxAttempts: e.maxAttempts,
      attemptsUsed: mineA.filter((a) => a.status !== "IN_PROGRESS" || a.deadlineAt > now).length,
      requiresAccess: e.requiresAccess,
      startsAt: e.startsAt,
      endsAt: e.endsAt,
      window,
      liveAttemptId: live?.id ?? null,
      canStart: window === "OPEN" && (Boolean(live) || mineA.length < e.maxAttempts),
    };
  });
}

/**
 * Starts (or resumes) an attempt. Everything is decided server-side inside one
 * transaction: identity, access, eligibility, window, attempt limits, question
 * selection, option shuffling, immutable storage and the deadline (§34).
 */
export async function startAttempt(actor: Actor, examId: string, clientSessionId: string | null, ctx: ReqCtx, rng: Rng = cryptoRng) {
  if (actor.userType !== "STUDENT") throw new AppError("FORBIDDEN", "Only students can sit examinations.");
  const db = getDb();
  const [exam] = await db.select().from(examinations).where(and(eq(examinations.id, examId), eq(examinations.schoolId, actor.schoolId)));
  if (!exam || exam.status !== "PUBLISHED") throw new AppError("EXAM_UNAVAILABLE", "This examination is not available.");
  const scope = await studentScope(actor.id);
  if (!eligible(exam, scope)) {
    await securityEvent({ type: "UNAUTHORIZED_RESOURCE", userId: actor.id, schoolId: actor.schoolId, detail: { examId } }, ctx);
    throw new AppError("FORBIDDEN", "This examination is not assigned to your class or department.");
  }
  const now = new Date();
  if (exam.startsAt && exam.startsAt > now) throw new AppError("EXAM_UNAVAILABLE", "This examination has not opened yet.");
  if (exam.endsAt && exam.endsAt <= now) throw new AppError("EXAM_UNAVAILABLE", "This examination has closed.");
  if (exam.isPremium) await requirePremiumAccess(actor.id);
  else if (exam.requiresAccess) await requireFeature(actor.id, "CBT");
  // CA tests and term examinations follow the learning path.
  await (await import("./learning-path")).assertPathAllows(actor, exam);

  // Close out any attempt whose time ran out before we decide.
  await sweepExpiredAttempts({ userId: actor.id });

  const out = await db.transaction(async (tx) => {
    await tx.execute(sql`SELECT id FROM users WHERE id = ${actor.id} FOR UPDATE`);
    const prior = await tx
      .select()
      .from(examinationAttempts)
      .where(and(eq(examinationAttempts.examinationId, exam.id), eq(examinationAttempts.userId, actor.id)))
      .orderBy(desc(examinationAttempts.attemptNumber));
    const live = prior.find((a) => a.status === "IN_PROGRESS");
    if (live) {
      // Resume — the assigned set is immutable; never regenerate.
      if (clientSessionId && live.clientSessionId && live.clientSessionId !== clientSessionId) {
        await tx.insert(attemptEvents).values({ attemptId: live.id, type: "NEW_SESSION", detail: { ip: ctx.ip } });
        await tx.update(examinationAttempts).set({ clientSessionId, suspiciousEvents: sql`${examinationAttempts.suspiciousEvents} + 1` }).where(eq(examinationAttempts.id, live.id));
      } else if (clientSessionId && !live.clientSessionId) {
        await tx.update(examinationAttempts).set({ clientSessionId }).where(eq(examinationAttempts.id, live.id));
      }
      await tx.insert(attemptEvents).values({ attemptId: live.id, type: "RESUMED", detail: { ip: ctx.ip } });
      return { attemptId: live.id, resumed: true };
    }
    const used = prior.filter((a) => a.status !== "VOIDED").length;
    if (used >= exam.maxAttempts) throw new AppError("ATTEMPT_LIMIT", `You have used all ${exam.maxAttempts} attempt(s) for this examination.`);

    const ids = await poolIds(exam, tx);
    // If questions were retired after publishing, the attempt uses what is left, timed to match.
    const count = Math.min(exam.questionCount, new Set(ids).size);
    const minutes = count < exam.questionCount ? minutesForPaper(count, exam.durationMinutes / exam.questionCount) : exam.durationMinutes;
    let selected: string[];
    try {
      selected = (exam.poolFilter as PoolFilter | null)?.allSubjects ? await balancedPick(exam, tx, Math.max(1, count), rng) : selectQuestionIds(ids, Math.max(1, count), exam.randomizeQuestions, rng);
      if (!selected.length) throw new ExamEngineError("POOL_TOO_SMALL", "No questions.");
    } catch (e) {
      if (e instanceof ExamEngineError) throw new AppError("EXAM_UNAVAILABLE", "This examination is not ready yet. Please contact the Super Admin.");
      throw e;
    }
    const bank = await loadBankQuestions(selected, tx);
    const byId = new Map(bank.map((q) => [q.id, q]));
    const snaps = selected.map((id) => buildSnapshot(byId.get(id)!, exam.randomizeOptions, rng));

    const durationMs = minutes * 60_000;
    const deadline = new Date(Math.min(now.getTime() + durationMs, exam.endsAt ? exam.endsAt.getTime() : Infinity));
    const attemptNumber = (prior[0]?.attemptNumber ?? 0) + 1;
    const examSnapshot = {
      id: exam.id,
      title: exam.title,
      version: exam.version,
      subjectId: exam.subjectId,
      examType: exam.examType,
      year: exam.year,
      questionCount: count,
      durationMinutes: minutes,
      passMark: exam.passMark,
      negativeMarking: exam.negativeMarking,
      randomizeQuestions: exam.randomizeQuestions,
      randomizeOptions: exam.randomizeOptions,
      resultVisibility: exam.resultVisibility,
      showExplanations: exam.showExplanations,
      totalMarks: exam.totalMarks,
    };
    const [attempt] = await tx
      .insert(examinationAttempts)
      .values({
        schoolId: actor.schoolId,
        examinationId: exam.id,
        examinationVersion: exam.version,
        examSnapshot,
        userId: actor.id,
        attemptNumber,
        status: "IN_PROGRESS",
        startedAt: now,
        deadlineAt: deadline,
        clientSessionId,
        ip: ctx.ip ?? null,
        userAgent: ctx.userAgent?.slice(0, 300) ?? null,
      })
      .returning();
    const aqs = await tx
      .insert(attemptQuestions)
      .values(snaps.map((s, i) => ({ attemptId: attempt.id, position: i + 1, questionId: s.questionId, questionVersion: s.version, snapshot: s, marks: s.marks })))
      .returning({ id: attemptQuestions.id });
    await tx.insert(attemptAnswers).values(aqs.map((a) => ({ attemptQuestionId: a.id, attemptId: attempt.id })));
    await audit({ actor, action: "exam.started", entityType: "attempt", entityId: attempt.id, summary: `${exam.title} — attempt ${attemptNumber}`, metadata: { examId: exam.id, examVersion: exam.version, questions: selected.length } }, ctx, tx);
    return { attemptId: attempt.id, resumed: false };
  });
  return out;
}

async function loadOwnedAttempt(actor: Actor, attemptId: string, ctx: ReqCtx, db: Executor = getDb()) {
  const [a] = await db.select().from(examinationAttempts).where(eq(examinationAttempts.id, attemptId));
  if (!a || a.userId !== actor.id || a.schoolId !== actor.schoolId) {
    if (a) await securityEvent({ type: "IDOR_ATTEMPT", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { attemptId } }, ctx);
    throw new AppError("NOT_FOUND", "Attempt not found.");
  }
  return a;
}

export async function getAttemptView(actor: Actor, attemptId: string, ctx: ReqCtx) {
  let a = await loadOwnedAttempt(actor, attemptId, ctx);
  if (a.status === "IN_PROGRESS" && isPastDeadline(a.deadlineAt, new Date(), SUBMIT_GRACE_MS)) {
    await finaliseAttempt(a.id, "TIMEOUT", ctx);
    a = await loadOwnedAttempt(actor, attemptId, ctx);
  }
  const db = getDb();
  const [u] = await db.select({ firstName: users.firstName, lastName: users.lastName }).from(users).where(eq(users.id, actor.id));
  const snap = a.examSnapshot as { title: string; durationMinutes: number; questionCount: number };
  if (a.status !== "IN_PROGRESS") {
    const [r] = await db.select({ id: results.id }).from(results).where(eq(results.attemptId, a.id));
    return { status: a.status, resultId: r?.id ?? null, examTitle: snap.title } as const;
  }
  const qs = await db.select().from(attemptQuestions).where(eq(attemptQuestions.attemptId, a.id)).orderBy(asc(attemptQuestions.position));
  const ans = await db.select().from(attemptAnswers).where(eq(attemptAnswers.attemptId, a.id));
  const byQ = new Map(ans.map((x) => [x.attemptQuestionId, x]));
  const cfg = await getSetting(actor.schoolId, "examination");
  const [subject] = await db.select({ code: subjects.code }).from(examinations).innerJoin(subjects, eq(subjects.id, examinations.subjectId)).where(eq(examinations.id, a.examinationId));
  const calculatorCodes = cfg.calculatorSubjectCodes.split(/[,\s]+/).map((c) => c.trim().toUpperCase()).filter(Boolean);
  const [{ leaves }] = await db.select({ leaves: sql<number>`count(*)::int` }).from(attemptEvents).where(and(eq(attemptEvents.attemptId, a.id), eq(attemptEvents.type, "SCREEN_LEFT")));
  return {
    status: "IN_PROGRESS" as const,
    lockdown: cfg.lockdown,
    maxScreenLeaves: cfg.maxScreenLeaves,
    returnCountdownSeconds: cfg.returnCountdownSeconds,
    lockdownRules: cfg.lockdownRulesPopup ? cfg.lockdownRules.split("\n").map((r) => r.trim()).filter(Boolean) : [],
    screenLeaves: leaves,
    calculator: cfg.calculatorEnabled && Boolean(subject) && calculatorCodes.includes(subject.code.toUpperCase()),
    attemptId: a.id,
    examTitle: snap.title,
    studentName: `${u.firstName} ${u.lastName}`,
    serverNow: new Date().toISOString(),
    deadlineAt: a.deadlineAt.toISOString(),
    startedAt: a.startedAt.toISOString(),
    durationMinutes: snap.durationMinutes,
    autosaveSeconds: cfg.autosaveSeconds,
    fullscreenGuidance: cfg.fullscreenGuidance,
    questions: qs.map((q) => ({
      attemptQuestionId: q.id,
      position: q.position,
      ...toPublicQuestion(q.snapshot as AttemptQuestionSnapshot),
      response: byQ.get(q.id)?.response ?? null,
      flagged: byQ.get(q.id)?.flagged ?? false,
    })),
  };
}

const saveSchema = z.object({
  clientSessionId: z.string().uuid().nullish(),
  answers: z
    .array(
      z.object({
        attemptQuestionId: z.string().uuid(),
        response: z.unknown().nullable(),
        flagged: z.boolean().optional(),
        responseMs: z.number().int().min(0).max(24 * 3_600_000).optional(),
      }),
    )
    .max(200),
});

/** Autosave. Rejected after the server deadline (plus a small grace for in-flight requests). */
export async function saveAnswers(actor: Actor, attemptId: string, raw: unknown, ctx: ReqCtx) {
  const input = saveSchema.parse(raw);
  const db = getDb();
  const a = await loadOwnedAttempt(actor, attemptId, ctx);
  const now = new Date();
  if (a.status !== "IN_PROGRESS") throw new AppError("ATTEMPT_CLOSED", "This examination has already been submitted.");
  if (isPastDeadline(a.deadlineAt, now, SUBMIT_GRACE_MS)) {
    await finaliseAttempt(a.id, "TIMEOUT", ctx);
    throw new AppError("ATTEMPT_CLOSED", "Time is up. Your examination was submitted automatically.");
  }
  const cfg = await getSetting(actor.schoolId, "examination");
  if (cfg.singleActiveSession && a.clientSessionId && input.clientSessionId && a.clientSessionId !== input.clientSessionId) {
    throw new AppError("CONFLICT", "This examination is open in another window or device. Continue there, or reload this page to take over.");
  }
  if (!input.answers.length) return { saved: 0, serverNow: now.toISOString(), deadlineAt: a.deadlineAt.toISOString() };
  const ids = input.answers.map((x) => x.attemptQuestionId);
  const qs = await db.select().from(attemptQuestions).where(and(eq(attemptQuestions.attemptId, a.id), inArray(attemptQuestions.id, ids)));
  if (qs.length !== new Set(ids).size) {
    await securityEvent({ type: "UNAUTHORIZED_API", severity: "MEDIUM", userId: actor.id, schoolId: actor.schoolId, detail: { attemptId, reason: "foreign_question" } }, ctx);
    throw new AppError("VALIDATION", "Invalid question in answer payload.");
  }
  const byId = new Map(qs.map((q) => [q.id, q]));
  // Validate everything before opening the transaction (no side writes inside it).
  const normalised: { item: (typeof input.answers)[number]; q: (typeof qs)[number]; response: ReturnType<typeof normaliseResponse> }[] = [];
  for (const item of input.answers) {
    const q = byId.get(item.attemptQuestionId)!;
    try {
      normalised.push({ item, q, response: normaliseResponse(q.snapshot as AttemptQuestionSnapshot, item.response) });
    } catch (e) {
      if (e instanceof ExamEngineError) {
        await securityEvent({ type: "UNAUTHORIZED_API", severity: "MEDIUM", userId: actor.id, schoolId: actor.schoolId, detail: { attemptId, reason: e.code } }, ctx);
        throw new AppError("VALIDATION", e.message);
      }
      throw e;
    }
  }
  let saved = 0;
  await db.transaction(async (tx) => {
    for (const { item, q, response } of normalised) {
      await tx
        .update(attemptAnswers)
        .set({
          response: response ?? null,
          ...(item.flagged !== undefined ? { flagged: item.flagged } : {}),
          ...(item.responseMs !== undefined ? { responseMs: item.responseMs } : {}),
          updatedAt: now,
        })
        .where(and(eq(attemptAnswers.attemptQuestionId, q.id), eq(attemptAnswers.attemptId, a.id)));
      saved++;
    }
  });
  return { saved, serverNow: now.toISOString(), deadlineAt: a.deadlineAt.toISOString() };
}

/**
 * Binds the live attempt to this browser window. A different window/device
 * taking over is allowed (network or device changes happen) but is recorded
 * as a session anomaly for the examination office.
 */
export async function claimAttemptSession(actor: Actor, attemptId: string, clientSessionId: string, ctx: ReqCtx) {
  if (!/^[0-9a-f-]{36}$/i.test(clientSessionId)) throw new AppError("VALIDATION", "Invalid session id.");
  const a = await loadOwnedAttempt(actor, attemptId, ctx);
  if (a.status !== "IN_PROGRESS") throw new AppError("ATTEMPT_CLOSED", "This examination has already been submitted.");
  if (a.clientSessionId === clientSessionId) return { takenOver: false };
  const db = getDb();
  const takeover = Boolean(a.clientSessionId);
  await db
    .update(examinationAttempts)
    .set({ clientSessionId, ...(takeover ? { suspiciousEvents: sql`${examinationAttempts.suspiciousEvents} + 1` } : {}) })
    .where(eq(examinationAttempts.id, a.id));
  if (takeover) {
    await db.insert(attemptEvents).values({ attemptId: a.id, type: "NEW_SESSION", detail: { ip: ctx.ip, userAgent: ctx.userAgent?.slice(0, 120) } });
    await securityEvent({ type: "SESSION_ANOMALY", severity: "LOW", userId: actor.id, schoolId: actor.schoolId, detail: { attemptId: a.id, reason: "exam_opened_in_new_window" } }, ctx);
  }
  return { takenOver: takeover };
}

const EVENT_TYPES = ["TAB_HIDDEN", "WINDOW_BLUR", "FULLSCREEN_EXIT", "COPY_ATTEMPT", "PASTE_ATTEMPT", "CONTEXT_MENU", "OFFLINE", "ONLINE", "SCREEN_LEFT", "SCREEN_RETURNED", "AWAY_TIMEOUT"] as const;
/** Network delay allowed on top of the countdown before a late return counts as "did not come back". */
const RETURN_GRACE_MS = 3_000;

/**
 * Records browser-detectable anomalies. We do not claim to prevent physical cheating (§35).
 * SCREEN_LEFT is one "left the examination screen" incident; with lockdown on, the server submits
 * the attempt when the allowed number is reached, so the limit cannot be dodged from the browser.
 */
export async function recordAttemptEvent(actor: Actor, attemptId: string, type: string, ctx: ReqCtx) {
  if (!(EVENT_TYPES as readonly string[]).includes(type)) throw new AppError("VALIDATION", "Unknown event.");
  const a = await loadOwnedAttempt(actor, attemptId, ctx);
  if (a.status !== "IN_PROGRESS") return { recorded: false };
  const db = getDb();
  if (type === "SCREEN_LEFT") {
    const cfg = await getSetting(actor.schoolId, "examination");
    await db.insert(attemptEvents).values({ attemptId: a.id, type });
    await db.update(examinationAttempts).set({ suspiciousEvents: sql`${examinationAttempts.suspiciousEvents} + 1` }).where(eq(examinationAttempts.id, a.id));
    const [{ leaves }] = await db.select({ leaves: sql<number>`count(*)::int` }).from(attemptEvents).where(and(eq(attemptEvents.attemptId, a.id), eq(attemptEvents.type, "SCREEN_LEFT")));
    if (cfg.lockdown && leaves >= cfg.maxScreenLeaves) {
      await db.insert(attemptEvents).values({ attemptId: a.id, type: "LOCKDOWN_SUBMIT", detail: { leaves } });
      await securityEvent({ type: "SUSPICIOUS_EXAM_ACTIVITY", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { attemptId: a.id, reason: "left_exam_screen", leaves } }, ctx);
      const done = await finaliseAttempt(a.id, "TIMEOUT", ctx);
      return { recorded: true, leaves, max: cfg.maxScreenLeaves, submitted: true, resultId: done?.id ?? null };
    }
    return { recorded: true, leaves, max: cfg.maxScreenLeaves, submitted: false };
  }
  if (type === "SCREEN_RETURNED" || type === "AWAY_TIMEOUT") {
    // Timed on the server from the SCREEN_LEFT it recorded, so a paused or edited browser clock does not help.
    const cfg = await getSetting(actor.schoolId, "examination");
    const [left] = await db.select({ at: attemptEvents.createdAt }).from(attemptEvents).where(and(eq(attemptEvents.attemptId, a.id), eq(attemptEvents.type, "SCREEN_LEFT"))).orderBy(desc(attemptEvents.createdAt)).limit(1);
    const [back] = await db.select({ at: attemptEvents.createdAt }).from(attemptEvents).where(and(eq(attemptEvents.attemptId, a.id), eq(attemptEvents.type, "SCREEN_RETURNED"))).orderBy(desc(attemptEvents.createdAt)).limit(1);
    const open = left && (!back || back.at < left.at);
    const awayMs = open ? Date.now() - left.at.getTime() : 0;
    const allowed = cfg.returnCountdownSeconds * 1000;
    const late = cfg.lockdown && open && (type === "AWAY_TIMEOUT" ? awayMs >= allowed - 1500 : awayMs > allowed + RETURN_GRACE_MS);
    await db.insert(attemptEvents).values({ attemptId: a.id, type, detail: { awayMs } });
    if (late) {
      await db.insert(attemptEvents).values({ attemptId: a.id, type: "LOCKDOWN_SUBMIT", detail: { reason: "did_not_return", awayMs } });
      await securityEvent({ type: "SUSPICIOUS_EXAM_ACTIVITY", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { attemptId: a.id, reason: "did_not_return_to_exam", awayMs } }, ctx);
      const done = await finaliseAttempt(a.id, "TIMEOUT", ctx);
      return { recorded: true, submitted: true, resultId: done?.id ?? null };
    }
    return { recorded: true, submitted: false };
  }
  const suspicious = !["ONLINE", "OFFLINE"].includes(type);
  await db.insert(attemptEvents).values({ attemptId: a.id, type });
  if (suspicious) {
    const [row] = await db
      .update(examinationAttempts)
      .set({ suspiciousEvents: sql`${examinationAttempts.suspiciousEvents} + 1` })
      .where(eq(examinationAttempts.id, a.id))
      .returning({ n: examinationAttempts.suspiciousEvents });
    const cfg = await getSetting(actor.schoolId, "examination");
    if (row.n === cfg.suspiciousThreshold) {
      await securityEvent({ type: "SUSPICIOUS_EXAM_ACTIVITY", severity: "MEDIUM", userId: actor.id, schoolId: actor.schoolId, detail: { attemptId: a.id, events: row.n } }, ctx);
    }
  }
  return { recorded: true };
}

export async function submitAttempt(actor: Actor, attemptId: string, ctx: ReqCtx) {
  const a = await loadOwnedAttempt(actor, attemptId, ctx);
  const late = isPastDeadline(a.deadlineAt, new Date(), SUBMIT_GRACE_MS);
  return finaliseAttempt(a.id, late ? "TIMEOUT" : "MANUAL", ctx);
}

/**
 * Scores and closes an attempt exactly once (row lock + status check makes it
 * idempotent under concurrent submit/timeout). Scoring uses only the stored
 * snapshot — client data never contributes (§36, Rule 16).
 */
export async function finaliseAttempt(attemptId: string, method: "MANUAL" | "TIMEOUT" | "ADMIN", ctx: ReqCtx) {
  const db = getDb();
  const out = await db.transaction(async (tx) => {
    const [a] = await tx.select().from(examinationAttempts).where(eq(examinationAttempts.id, attemptId)).for("update");
    if (!a) throw new AppError("NOT_FOUND", "Attempt not found.");
    if (a.status !== "IN_PROGRESS") {
      const [r] = await tx.select().from(results).where(eq(results.attemptId, a.id));
      return { result: r, fresh: false, attempt: a };
    }
    const snap = a.examSnapshot as { title: string; passMark: number; negativeMarking: number; resultVisibility: string; totalMarks: number | null };
    const qs = await tx.select().from(attemptQuestions).where(eq(attemptQuestions.attemptId, a.id)).orderBy(asc(attemptQuestions.position));
    const ans = await tx.select().from(attemptAnswers).where(eq(attemptAnswers.attemptId, a.id));
    const byQ = new Map(ans.map((x) => [x.attemptQuestionId, x]));
    const items = [];
    for (const q of qs) {
      const s = q.snapshot as AttemptQuestionSnapshot;
      const answer = byQ.get(q.id);
      const outcome = markResponse(s, answer?.response ?? null, snap.negativeMarking);
      items.push({ marks: q.marks, outcome });
      await tx.update(attemptAnswers).set({ isCorrect: outcome.answered ? outcome.isCorrect : null, marksAwarded: outcome.marksAwarded }).where(eq(attemptAnswers.attemptQuestionId, q.id));
      // Question analytics (§41)
      await tx
        .update(questions)
        .set({
          timesAttempted: sql`${questions.timesAttempted} + 1`,
          timesCorrect: sql`${questions.timesCorrect} + ${outcome.isCorrect ? 1 : 0}`,
          timesUnanswered: sql`${questions.timesUnanswered} + ${outcome.answered ? 0 : 1}`,
          totalResponseMs: sql`${questions.totalResponseMs} + ${Math.min(answer?.responseMs ?? 0, 3_600_000)}`,
          timesFlagged: sql`${questions.timesFlagged} + ${answer?.flagged ? 1 : 0}`,
        })
        .where(eq(questions.id, s.questionId));
    }
    const summary = summarise(items);
    // Optional scaling to a configured total (e.g. 40 questions scored out of 100).
    const scale = snap.totalMarks && summary.totalMarks > 0 ? snap.totalMarks / summary.totalMarks : 1;
    const score = Math.round(summary.score * scale * 100) / 100;
    const totalMarks = Math.round(summary.totalMarks * scale * 100) / 100;
    const gradingCfg = await getSetting(a.schoolId, "grading", tx);
    const band = gradeFor(summary.percentage, gradingCfg.scale as GradeBand[]);
    const now = new Date();
    const submittedAt = method === "TIMEOUT" && now > a.deadlineAt ? a.deadlineAt : now;
    const timeUsedSec = Math.max(0, Math.round((submittedAt.getTime() - a.startedAt.getTime()) / 1000));
    await tx
      .update(examinationAttempts)
      .set({ status: method === "MANUAL" ? "SUBMITTED" : "AUTO_SUBMITTED", submittedAt, submissionMethod: method })
      .where(eq(examinationAttempts.id, a.id));
    const [r] = await tx
      .insert(results)
      .values({
        schoolId: a.schoolId,
        attemptId: a.id,
        userId: a.userId,
        examinationId: a.examinationId,
        score,
        totalMarks,
        percentage: summary.percentage,
        grade: band.grade,
        passed: summary.percentage >= snap.passMark,
        correctCount: summary.correct,
        incorrectCount: summary.incorrect,
        unansweredCount: summary.unanswered,
        timeUsedSec,
        attemptNumber: a.attemptNumber,
        gradingScale: gradingCfg.scale,
        remarks: band.remark ?? null,
        releasedAt: snap.resultVisibility === "IMMEDIATE" ? now : null,
        verificationCode: randomBytes(9).toString("base64url").toUpperCase().replace(/[^A-Z0-9]/g, "X"),
      })
      .returning();
    await audit(
      {
        actor: { id: a.userId, schoolId: a.schoolId, userType: "STUDENT" },
        action: "exam.submitted",
        entityType: "attempt",
        entityId: a.id,
        summary: `${snap.title}: ${summary.percentage}% (${band.grade}) via ${method}`,
        metadata: { resultId: r.id, method },
      },
      ctx,
      tx,
    );
    await audit({ schoolId: a.schoolId, action: "result.generated", entityType: "result", entityId: r.id }, ctx, tx);
    return { result: r, fresh: true, attempt: a };
  });
  if (out.fresh && out.result.releasedAt) {
    const title = (out.attempt.examSnapshot as { title: string }).title;
    await notifyUser({ schoolId: out.result.schoolId, userId: out.result.userId, category: "RESULT", title: `Result ready: ${title}`, body: `You scored ${out.result.percentage}% (${out.result.grade}).`, link: `/student/results/${out.result.id}` });
  }
  return out.result;
}

/** Auto-submits attempts whose server deadline has passed. Safe to run concurrently. */
export async function sweepExpiredAttempts(opts: { userId?: string; limit?: number } = {}) {
  const db = getDb();
  const cutoff = new Date(Date.now() - SUBMIT_GRACE_MS);
  const rows = await db
    .select({ id: examinationAttempts.id })
    .from(examinationAttempts)
    .where(and(eq(examinationAttempts.status, "IN_PROGRESS"), lte(examinationAttempts.deadlineAt, cutoff), opts.userId ? eq(examinationAttempts.userId, opts.userId) : undefined))
    .limit(opts.limit ?? 200);
  for (const r of rows) await finaliseAttempt(r.id, "TIMEOUT", {});
  return rows.length;
}

/* ---------------------------------------------------------------- results */

export async function getStudentResult(actor: Actor, resultId: string, ctx: ReqCtx) {
  const db = getDb();
  const [row] = await db
    .select({ r: results, a: examinationAttempts, e: examinations, subject: subjects.name })
    .from(results)
    .innerJoin(examinationAttempts, eq(examinationAttempts.id, results.attemptId))
    .innerJoin(examinations, eq(examinations.id, results.examinationId))
    .innerJoin(subjects, eq(subjects.id, examinations.subjectId))
    .where(eq(results.id, resultId));
  if (!row || row.r.userId !== actor.id) {
    if (row) await securityEvent({ type: "IDOR_ATTEMPT", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { resultId } }, ctx);
    throw new AppError("NOT_FOUND", "Result not found.");
  }
  const snap = row.a.examSnapshot as { title: string; resultVisibility: string; showExplanations: boolean; passMark: number };
  if (await featureWithheld(actor.id, "RESULTS")) return { visible: false as const, voided: false, examTitle: snap.title, submittedAt: row.a.submittedAt, message: FEATURE_DENIED };
  const visible = !row.r.isVoided && Boolean(row.r.releasedAt) && snap.resultVisibility !== "HIDDEN";
  if (!visible) {
    return { visible: false as const, voided: row.r.isVoided, examTitle: snap.title, submittedAt: row.a.submittedAt, message: row.r.isVoided ? "This attempt was voided by the examination office." : "Your result will be available once released by the school." };
  }
  const review = await attemptReview(row.a.id, snap.showExplanations);
  return { visible: true as const, result: row.r, examTitle: snap.title, subject: row.subject, examType: row.e.examType, year: row.e.year, submittedAt: row.a.submittedAt, startedAt: row.a.startedAt, submissionMethod: row.a.submissionMethod, passMark: snap.passMark, review };
}

export async function attemptReview(attemptId: string, withExplanations: boolean) {
  const db = getDb();
  const qs = await db.select().from(attemptQuestions).where(eq(attemptQuestions.attemptId, attemptId)).orderBy(asc(attemptQuestions.position));
  const ans = await db.select().from(attemptAnswers).where(eq(attemptAnswers.attemptId, attemptId));
  const byQ = new Map(ans.map((x) => [x.attemptQuestionId, x]));
  return qs.map((q) => {
    const s = q.snapshot as AttemptQuestionSnapshot;
    const a = byQ.get(q.id);
    return {
      position: q.position,
      type: s.type,
      stem: s.stem,
      imageAssetId: s.imageAssetId,
      options: s.options,
      matchTargets: s.matchTargets,
      correctOptionIds: s.correctOptionIds,
      correctPairs: s.correctPairs,
      answerSpec: s.type === "NUMERIC" || s.type === "FILL_BLANK" ? s.answerSpec : undefined,
      explanation: withExplanations ? s.explanation : null,
      response: a?.response ?? null,
      isCorrect: a?.isCorrect ?? null,
      marksAwarded: a?.marksAwarded ?? 0,
      marks: q.marks,
      flagged: a?.flagged ?? false,
      topicId: s.topicId,
    };
  });
}

export async function listStudentResults(actor: Actor) {
  const db = getDb();
  if (await featureWithheld(actor.id, "RESULTS")) return [];
  return db
    .select({
      id: results.id,
      examTitle: examinations.title,
      subject: subjects.name,
      examType: examinations.examType,
      percentage: results.percentage,
      grade: results.grade,
      passed: results.passed,
      score: results.score,
      totalMarks: results.totalMarks,
      attemptNumber: results.attemptNumber,
      releasedAt: results.releasedAt,
      isVoided: results.isVoided,
      createdAt: results.createdAt,
      resultVisibility: examinations.resultVisibility,
    })
    .from(results)
    .innerJoin(examinations, eq(examinations.id, results.examinationId))
    .innerJoin(subjects, eq(subjects.id, examinations.subjectId))
    .where(eq(results.userId, actor.id))
    .orderBy(desc(results.createdAt));
}

/* -------------------------------------------------------- admin results */

export interface ResultFilter {
  search?: string;
  examId?: string;
  subjectId?: string;
  classId?: string;
  departmentId?: string;
  grade?: string;
  from?: string;
  to?: string;
  status?: "released" | "pending" | "voided";
  page?: number;
  pageSize?: number;
}

export function resultConditions(schoolId: string, f: ResultFilter): SQL[] {
  const conds: SQL[] = [eq(results.schoolId, schoolId)];
  if (f.examId) conds.push(eq(results.examinationId, f.examId));
  if (f.subjectId) conds.push(eq(examinations.subjectId, f.subjectId));
  if (f.classId) conds.push(eq(students.classId, f.classId));
  if (f.departmentId) conds.push(eq(students.departmentId, f.departmentId));
  if (f.grade) conds.push(eq(results.grade, f.grade));
  if (f.from) conds.push(gte(results.createdAt, new Date(f.from)));
  if (f.to) conds.push(lte(results.createdAt, new Date(`${f.to}T23:59:59`)));
  if (f.status === "released") conds.push(and(sql`${results.releasedAt} IS NOT NULL`, eq(results.isVoided, false))!);
  if (f.status === "pending") conds.push(and(sql`${results.releasedAt} IS NULL`, eq(results.isVoided, false))!);
  if (f.status === "voided") conds.push(eq(results.isVoided, true));
  if (f.search?.trim()) {
    const s = `%${f.search.trim()}%`;
    conds.push(or(sql`${users.firstName} || ' ' || ${users.lastName} ILIKE ${s}`, sql`${users.email} ILIKE ${s}`, sql`${students.studentNumber} ILIKE ${s}`, sql`${examinations.title} ILIKE ${s}`)!);
  }
  return conds;
}

export function resultsBaseQuery(db: Executor) {
  return db
    .select({
      id: results.id,
      attemptId: results.attemptId,
      studentUserId: users.id,
      studentName: sql<string>`${users.firstName} || ' ' || ${users.lastName}`,
      email: users.email,
      studentNumber: students.studentNumber,
      className: classes.name,
      department: departments.name,
      examTitle: examinations.title,
      subject: subjects.name,
      examType: examinations.examType,
      score: results.score,
      totalMarks: results.totalMarks,
      percentage: results.percentage,
      grade: results.grade,
      passed: results.passed,
      correct: results.correctCount,
      incorrect: results.incorrectCount,
      unanswered: results.unansweredCount,
      timeUsedSec: results.timeUsedSec,
      attemptNumber: results.attemptNumber,
      remarks: results.remarks,
      isVoided: results.isVoided,
      releasedAt: results.releasedAt,
      createdAt: results.createdAt,
      suspiciousEvents: examinationAttempts.suspiciousEvents,
      submissionMethod: examinationAttempts.submissionMethod,
    })
    .from(results)
    .innerJoin(users, eq(users.id, results.userId))
    .innerJoin(examinationAttempts, eq(examinationAttempts.id, results.attemptId))
    .innerJoin(examinations, eq(examinations.id, results.examinationId))
    .innerJoin(subjects, eq(subjects.id, examinations.subjectId))
    .leftJoin(students, eq(students.userId, results.userId))
    .leftJoin(classes, eq(classes.id, students.classId))
    .leftJoin(departments, eq(departments.id, students.departmentId));
}

export async function listResults(actor: Actor, f: ResultFilter) {
  const db = getDb();
  const page = Math.max(1, f.page ?? 1);
  const pageSize = Math.min(100, Math.max(10, f.pageSize ?? 25));
  const where = and(...resultConditions(actor.schoolId, f));
  const rows = await resultsBaseQuery(db).where(where).orderBy(desc(results.createdAt)).limit(pageSize).offset((page - 1) * pageSize);
  const [{ total, avg }] = await db
    .select({ total: sql<number>`count(*)::int`, avg: sql<number | null>`round(avg(${results.percentage})::numeric, 1)::float` })
    .from(results)
    .innerJoin(users, eq(users.id, results.userId))
    .innerJoin(examinations, eq(examinations.id, results.examinationId))
    .leftJoin(students, eq(students.userId, results.userId))
    .where(where);
  return { rows, total, avg, page, pageSize };
}

export async function adminResultDetail(actor: Actor, resultId: string) {
  const db = getDb();
  const [row] = await resultsBaseQuery(db).where(and(eq(results.id, resultId), eq(results.schoolId, actor.schoolId)));
  if (!row) throw new AppError("NOT_FOUND", "Result not found.");
  const events = await db.select().from(attemptEvents).where(eq(attemptEvents.attemptId, row.attemptId)).orderBy(asc(attemptEvents.createdAt));
  const [attempt] = await db.select().from(examinationAttempts).where(eq(examinationAttempts.id, row.attemptId));
  return { ...row, attempt, events, review: await attemptReview(row.attemptId, true) };
}

export async function setResultRemarks(actor: Actor, resultId: string, remarks: string, ctx: ReqCtx) {
  const db = getDb();
  const [r] = await db.update(results).set({ remarks: remarks.trim().slice(0, 500), updatedAt: new Date() }).where(and(eq(results.id, resultId), eq(results.schoolId, actor.schoolId))).returning({ id: results.id });
  if (!r) throw new AppError("NOT_FOUND", "Result not found.");
  await audit({ actor, action: "result.remarks_updated", entityType: "result", entityId: resultId, metadata: { remarks } }, ctx);
}

/** Voids an attempt (e.g. confirmed malpractice). The record stays for audit; it no longer counts. */
export async function voidResult(actor: Actor, resultId: string, reason: string, ctx: ReqCtx) {
  if (reason.trim().length < 5) throw new AppError("VALIDATION", "Record a reason (at least 5 characters).");
  const db = getDb();
  await db.transaction(async (tx) => {
    const [r] = await tx.select().from(results).where(and(eq(results.id, resultId), eq(results.schoolId, actor.schoolId))).for("update");
    if (!r) throw new AppError("NOT_FOUND", "Result not found.");
    if (r.isVoided) throw new AppError("CONFLICT", "Already voided.");
    await tx.update(results).set({ isVoided: true, voidReason: reason, updatedAt: new Date() }).where(eq(results.id, r.id));
    await tx.update(examinationAttempts).set({ status: "VOIDED", voidReason: reason }).where(eq(examinationAttempts.id, r.attemptId));
    await audit({ actor, action: "result.voided", entityType: "result", entityId: r.id, summary: reason, metadata: { attemptId: r.attemptId, previousPercentage: r.percentage } }, ctx, tx);
  });
}

export async function releaseResults(actor: Actor, examId: string, release: boolean, ctx: ReqCtx) {
  const db = getDb();
  const [exam] = await db.select().from(examinations).where(and(eq(examinations.id, examId), eq(examinations.schoolId, actor.schoolId)));
  if (!exam) throw new AppError("NOT_FOUND", "Examination not found.");
  const now = new Date();
  const updated = await db
    .update(results)
    .set({ releasedAt: release ? now : null, updatedAt: now })
    .where(and(eq(results.examinationId, examId), eq(results.isVoided, false), release ? sql`${results.releasedAt} IS NULL` : sql`${results.releasedAt} IS NOT NULL`))
    .returning({ id: results.id, userId: results.userId, percentage: results.percentage, grade: results.grade });
  await db.update(examinations).set({ resultsReleasedAt: release ? now : null }).where(eq(examinations.id, examId));
  await audit({ actor, action: release ? "result.released" : "result.withheld", entityType: "examination", entityId: examId, summary: `${updated.length} result(s)` }, ctx);
  if (release) {
    for (const r of updated) {
      await notifyUser({ schoolId: actor.schoolId, userId: r.userId, category: "RESULT", title: `Result released: ${exam.title}`, body: `You scored ${r.percentage}% (${r.grade}).`, link: `/student/results/${r.id}` });
    }
  }
  return updated.length;
}

export async function listAttempts(actor: Actor, f: { examId?: string; status?: string; suspicious?: boolean; page?: number }) {
  const db = getDb();
  const page = Math.max(1, f.page ?? 1);
  const conds: SQL[] = [eq(examinationAttempts.schoolId, actor.schoolId)];
  if (f.examId) conds.push(eq(examinationAttempts.examinationId, f.examId));
  if (f.status) conds.push(eq(examinationAttempts.status, f.status as "IN_PROGRESS"));
  if (f.suspicious) conds.push(sql`${examinationAttempts.suspiciousEvents} > 0`);
  const rows = await db
    .select({
      id: examinationAttempts.id,
      status: examinationAttempts.status,
      attemptNumber: examinationAttempts.attemptNumber,
      startedAt: examinationAttempts.startedAt,
      deadlineAt: examinationAttempts.deadlineAt,
      submittedAt: examinationAttempts.submittedAt,
      submissionMethod: examinationAttempts.submissionMethod,
      suspiciousEvents: examinationAttempts.suspiciousEvents,
      examTitle: examinations.title,
      studentName: sql<string>`${users.firstName} || ' ' || ${users.lastName}`,
      email: users.email,
      resultId: results.id,
      percentage: results.percentage,
      ip: examinationAttempts.ip,
    })
    .from(examinationAttempts)
    .innerJoin(examinations, eq(examinations.id, examinationAttempts.examinationId))
    .innerJoin(users, eq(users.id, examinationAttempts.userId))
    .leftJoin(results, eq(results.attemptId, examinationAttempts.id))
    .where(and(...conds))
    .orderBy(desc(examinationAttempts.startedAt))
    .limit(50)
    .offset((page - 1) * 50);
  const [{ total }] = await db.select({ total: sql<number>`count(*)::int` }).from(examinationAttempts).where(and(...conds));
  return { rows, total, page, pageSize: 50 };
}

export async function adminForceSubmit(actor: Actor, attemptId: string, ctx: ReqCtx) {
  const [a] = await getDb().select().from(examinationAttempts).where(and(eq(examinationAttempts.id, attemptId), eq(examinationAttempts.schoolId, actor.schoolId)));
  if (!a) throw new AppError("NOT_FOUND", "Attempt not found.");
  if (a.status !== "IN_PROGRESS") throw new AppError("CONFLICT", "Attempt is not in progress.");
  await audit({ actor, action: "exam.force_submitted", entityType: "attempt", entityId: a.id }, ctx);
  return finaliseAttempt(a.id, "ADMIN", ctx);
}

export async function listExamsAdmin(actor: Actor, f: { status?: string; search?: string; level?: string } = {}) {
  const db = getDb();
  const conds: SQL[] = [eq(examinations.schoolId, actor.schoolId)];
  if (f.status) conds.push(eq(examinations.status, f.status as "DRAFT"));
  else conds.push(ne(examinations.status, "ARCHIVED"));
  if (f.search) conds.push(sql`${examinations.title} ILIKE ${`%${f.search}%`}`);
  if (f.level) conds.push(f.level === "ALL" ? isNull(examinations.level) : eq(examinations.level, f.level));
  const rows = await db
    .select({
      e: examinations,
      subject: subjects.name,
      className: classes.name,
      department: departments.name,
      attempts: sql<number>`(SELECT count(*)::int FROM examination_attempts ea WHERE ea.examination_id = ${examinations.id})`,
      avg: sql<number | null>`(SELECT round(avg(r.percentage)::numeric,1)::float FROM results r WHERE r.examination_id = ${examinations.id} AND NOT r.is_voided)`,
    })
    .from(examinations)
    .innerJoin(subjects, eq(subjects.id, examinations.subjectId))
    .leftJoin(classes, eq(classes.id, examinations.classId))
    .leftJoin(departments, eq(departments.id, examinations.departmentId))
    .where(and(...conds))
    .orderBy(desc(examinations.updatedAt));
  const withPool = [];
  for (const r of rows) withPool.push({ ...r, pool: await poolSize(r.e, db) });
  return withPool;
}

/* ------------------------------------------------------------ JAMB tests */

/** The default standard JAMB size; the Super Admin can change it in Settings → Examination. */
export const JAMB_TEST_QUESTIONS = 50;
/** 50 questions in 40 minutes: 48 seconds a question, as in the UTME. */
const JAMB_MINUTES_PER_QUESTION = 0.8;
/** A JAMB test draws only JAMB questions once a subject has this many; below it, standard SS2–SS3 questions join them. */
export const JAMB_ONLY_FROM = 20;

/** One row per subject: how many JAMB-tagged questions it has and the state of its JAMB test. */
export async function jambOverview(actor: Actor) {
  const db = getDb();
  const subs = await db.select({ id: subjects.id, name: subjects.name, code: subjects.code }).from(subjects).where(and(eq(subjects.schoolId, actor.schoolId), isNull(subjects.archivedAt))).orderBy(asc(subjects.name));
  const counts = await db
    .select({ subjectId: questions.subjectId, approved: sql<number>`(count(*) filter (where ${questions.status} = 'APPROVED'))::int`, total: sql<number>`count(*)::int` })
    .from(questions)
    .where(and(eq(questions.schoolId, actor.schoolId), eq(questions.examType, "JAMB"), sectionCond(questions.level, "SENIOR_SECONDARY")))
    .groupBy(questions.subjectId);
  const tests = (await db.select().from(examinations).where(and(eq(examinations.schoolId, actor.schoolId), eq(examinations.examType, "JAMB"), ne(examinations.status, "ARCHIVED"))).orderBy(desc(examinations.createdAt))).filter(isJambOnly);
  return subs.map((s) => {
    const c = counts.find((x) => x.subjectId === s.id);
    const t = tests.find((x) => x.subjectId === s.id);
    return { ...s, approved: c?.approved ?? 0, total: c?.total ?? 0, test: t ? { id: t.id, title: t.title, status: t.status, questionCount: t.questionCount, durationMinutes: t.durationMinutes, mixed: Boolean((t.poolFilter as PoolFilter | null)?.orClasses) } : null };
  });
}

async function classIdsFor(schoolId: string, codes: string[], db: Executor = getDb()) {
  const rows = await db.select({ id: classes.id, code: classes.code }).from(classes).where(and(eq(classes.schoolId, schoolId), isNull(classes.archivedAt)));
  return rows.filter((c) => codes.includes(c.code.toUpperCase().replace(/[^A-Z0-9]/g, ""))).map((c) => c.id);
}

/**
 * Creates (or tops up) one JAMB test per subject. Every attempt draws a fresh random set. A subject
 * with enough JAMB questions gets a JAMB-only test of up to 50; one with fewer also draws its
 * standard SS2–SS3 questions. A small pool is never a reason to wait: the test uses what there is,
 * with 48 seconds a question. Tests the staff have edited keep their settings unless the pool shrank.
 */
export async function setupJambTests(actor: Actor, subjectIds: string[] | "ALL", ctx: ReqCtx) {
  const db = getDb();
  const standardSize = (await getSetting(actor.schoolId, "examination")).jambQuestions ?? JAMB_TEST_QUESTIONS;
  const senior = await classIdsFor(actor.schoolId, ["SS2", "SS3"], db);
  const subjectCodes = subjectIds === "ALL" ? null : new Set(subjectIds);
  const all = await jambOverview(actor);
  const rows = all.filter((r) => (subjectCodes ? subjectCodes.has(r.id) : r.total > 0 || r.test || JAMB_SUBJECT_CODES.includes(r.code)));
  const out = { created: 0, published: 0, waiting: [] as string[] };
  for (const r of rows) {
    // JAMB-only once the subject has enough JAMB questions to fill the standard paper; otherwise its
    // standard SS2–SS3 questions join them so every subject sits a full paper.
    const jambOnly = r.approved >= Math.max(JAMB_ONLY_FROM, standardSize);
    const pool: PoolFilter = jambOnly ? { examTypes: ["JAMB"], standard: true } : { examTypes: ["JAMB"], classIds: senior, orClasses: true, standard: true };

    let row = r.test ? (await db.select().from(examinations).where(eq(examinations.id, r.test.id)))[0] : null;
    if (!row) {
      [row] = await db
        .insert(examinations)
        .values({
          schoolId: actor.schoolId,
          title: `JAMB ${r.name}`,
          description: jambOnly ? `JAMB (UTME) questions in ${r.name}. Every attempt draws a fresh random set.` : `JAMB (UTME) and standard SS2–SS3 questions in ${r.name}. Every attempt draws a fresh random set.`,
          subjectId: r.id,
          level: "SENIOR_SECONDARY",
          examType: "JAMB",
          questionCount: standardSize,
          durationMinutes: minutesForPaper(standardSize, JAMB_MINUTES_PER_QUESTION),
          maxAttempts: 100,
          poolFilter: pool,
          status: "DRAFT",
          createdBy: actor.id,
        })
        .returning();
      await audit({ actor, action: "exam.created", entityType: "examination", entityId: row.id, summary: row.title }, ctx);
      out.created++;
    } else if (Boolean((row.poolFilter as PoolFilter | null)?.orClasses) === jambOnly) {
      // The mix follows the number of JAMB questions: JAMB-only when there are enough, mixed when not.
      const cur = (row.poolFilter as PoolFilter | null) ?? {};
      const next: PoolFilter = jambOnly ? { examTypes: ["JAMB"], standard: true } : { examTypes: ["JAMB"], classIds: senior, orClasses: true, standard: true };
      if (cur.autoSize === false) next.autoSize = false;
      await db.update(examinations).set({ poolFilter: next, description: jambOnly ? `JAMB (UTME) questions in ${r.name}. Every attempt draws a fresh random set.` : `JAMB (UTME) and standard SS2–SS3 questions in ${r.name}. Every attempt draws a fresh random set.` }).where(eq(examinations.id, row.id));
      row = (await db.select().from(examinations).where(eq(examinations.id, row.id)))[0];
    }
    const size = await poolSize(row, db);
    if (!size) {
      out.waiting.push(`${r.name} (no approved questions)`);
      continue;
    }
    // Follow the standard size (growing as questions arrive), or use every question when there are fewer.
    // A test whose count staff set by hand keeps it, shrinking only if its pool shrank.
    const managed = (row.poolFilter as PoolFilter | null)?.autoSize !== false;
    const wanted = Math.min(managed ? standardSize : row.questionCount, size);
    const minutes = managed ? minutesForPaper(wanted, JAMB_MINUTES_PER_QUESTION) : minutesForPaper(wanted, row.durationMinutes / row.questionCount);
    if (wanted !== row.questionCount || (managed && minutes !== row.durationMinutes)) await db.update(examinations).set({ questionCount: wanted, durationMinutes: minutes, updatedAt: new Date() }).where(eq(examinations.id, row.id));
    if (row.status === "PUBLISHED") continue;
    // Published quietly: setting up many subjects at once must not send one announcement per subject.
    await db.update(examinations).set({ status: "PUBLISHED", updatedAt: new Date() }).where(eq(examinations.id, row.id));
    await audit({ actor, action: "exam.published", entityType: "examination", entityId: row.id, summary: `${row.title} (${wanted} questions)` }, ctx);
    out.published++;
  }
  return out;
}

/**
 * The standard BECE (every JSS subject, from JSS1–JSS3 questions) and Common Entrance (every upper
 * primary subject, from Basic 4–6 questions) papers. Each attempt draws a fresh random set. A subject
 * that already has a paper of that type (built-in or made by staff) is left alone, so every paper
 * stays editable in Examinations. Papers are published quietly and sized to the pool.
 */
export async function setupStandardPapers(actor: Actor, ctx: ReqCtx) {
  const db = getDb();
  const cfg = await getSetting(actor.schoolId, "examination");
  const out = { jamb: await setupJambTests(actor, "ALL", ctx), created: 0, published: 0, resized: 0 };
  const specs = [
    { type: "BECE" as const, classes: ["JSS1", "JSS2", "JSS3"], level: "JUNIOR_SECONDARY", size: cfg.beceQuestions ?? 50, perQuestion: 1.2, title: (n: string) => `BECE ${n} Standard Paper`, about: (n: string) => `BECE-style paper drawn at random from the whole JSS1–JSS3 ${n} syllabus. A fresh set every attempt.` },
    { type: "COMMON_ENTRANCE" as const, classes: ["BASIC4", "BASIC5", "BASIC6"], level: "PRIMARY", size: cfg.commonEntranceQuestions ?? 50, perQuestion: 1, title: (n: string) => `Common Entrance ${n} Standard Paper`, about: (n: string) => `Common Entrance-style paper drawn at random from the Basic 4–Basic 6 ${n} syllabus. A fresh set every attempt.` },
  ];
  const subs = await db.select({ id: subjects.id, name: subjects.name }).from(subjects).where(and(eq(subjects.schoolId, actor.schoolId), isNull(subjects.archivedAt)));
  for (const spec of specs) {
    const ids = await classIdsFor(actor.schoolId, spec.classes, db);
    if (!ids.length) continue;
    const papers = await db.select().from(examinations).where(and(eq(examinations.schoolId, actor.schoolId), eq(examinations.examType, spec.type), ne(examinations.status, "ARCHIVED"), eq(examinations.isPremium, false)));
    // Standard papers follow the size set by the Super Admin, unless staff changed one by hand.
    for (const p of papers) {
      const pf = (p.poolFilter as PoolFilter | null) ?? {};
      if (!pf.standard || pf.autoSize === false) continue;
      const size = Math.min(spec.size, await poolSize(p, db));
      if (!size || size === p.questionCount) continue;
      await db.update(examinations).set({ questionCount: size, durationMinutes: minutesForPaper(size, spec.perQuestion), updatedAt: new Date() }).where(eq(examinations.id, p.id));
      out.resized++;
    }
    const have = new Set(papers.map((x) => x.subjectId));
    const counts = await db
      .select({ s: questions.subjectId, n: sql<number>`count(*)::int` })
      .from(questions)
      .where(and(eq(questions.schoolId, actor.schoolId), eq(questions.status, "APPROVED"), or(inArray(questions.classId, ids), and(isNull(questions.classId), eq(questions.level, spec.level)))))
      .groupBy(questions.subjectId);
    for (const sub of subs) {
      const n = counts.find((c) => c.s === sub.id)?.n ?? 0;
      if (!n || have.has(sub.id)) continue;
      const size = Math.min(spec.size, n);
      const [row] = await db
        .insert(examinations)
        .values({ schoolId: actor.schoolId, title: spec.title(sub.name), description: spec.about(sub.name), subjectId: sub.id, level: spec.level, examType: spec.type, questionCount: size, durationMinutes: minutesForPaper(size, spec.perQuestion), maxAttempts: 10, passMark: 50, poolFilter: { classIds: ids, unclassed: true, standard: true } satisfies PoolFilter, status: "PUBLISHED", createdBy: actor.id })
        .returning();
      await audit({ actor, action: "exam.created", entityType: "examination", entityId: row.id, summary: `${row.title} (${size} questions, published)` }, ctx);
      out.created++;
      out.published++;
    }
  }
  return out;
}
