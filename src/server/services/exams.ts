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
  SUBMIT_GRACE_MS,
  summarise,
  toPublicQuestion,
  type AttemptQuestionSnapshot,
  type GradeBand,
  type Rng,
} from "@/core/exam-engine";
import { getDb, type Executor } from "../db";
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
    examType: z.enum(["PRACTICE", "MOCK", "SCHOOL_EXAM", "CLASS_TEST", "CONTINUOUS_ASSESSMENT", "JAMB", "WAEC", "NECO", "BECE", "CUSTOM", "IELTS", "TOEFL", "SAT", "CHECKPOINT"]),
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
        examTypes: z.array(z.enum(["JAMB", "WAEC", "NECO", "BECE", "IELTS", "TOEFL", "SAT", "CHECKPOINT"])).max(8).optional(),
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
    .set({ ...e, level, poolFilter: keepExamTypes(e.poolFilter ?? null, cur.poolFilter), version: cur.version + 1, updatedAt: new Date() })
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
    if (size < cur.questionCount)
      throw new AppError("VALIDATION", `Cannot publish: the exam needs ${cur.questionCount} approved questions but the pool has ${size}. Approve more questions or reduce the count.`);
  }
  await db.update(examinations).set({ status, updatedAt: new Date() }).where(eq(examinations.id, id));
  await audit({ actor, action: status === "PUBLISHED" ? "exam.published" : status === "ARCHIVED" ? "exam.archived" : "exam.unpublished", entityType: "examination", entityId: id, summary: cur.title }, ctx);
  if (status === "PUBLISHED" && cur.status !== "PUBLISHED") {
    // Announcement to the targeted audience.
    const { broadcast } = await import("./notifications");
    await broadcast(actor, { category: "EXAM", title: `New examination: ${cur.title}`, body: `${cur.questionCount} questions · ${cur.durationMinutes} minutes.`, link: "/student/exams", audience: { classId: cur.classId, departmentId: cur.departmentId, level: cur.level } }, ctx);
  }
}

type PoolFilter = { years?: number[]; topicIds?: string[]; difficulties?: string[]; matchClass?: boolean; examTypes?: ("JAMB" | "WAEC" | "NECO" | "BECE" | "IELTS" | "TOEFL" | "SAT" | "CHECKPOINT")[] };

/** The exam form does not edit the exam-type restriction, so an edit must not silently drop it. */
function keepExamTypes(next: PoolFilter | null, current: unknown): PoolFilter | null {
  const types = (current as PoolFilter | null)?.examTypes;
  if (!types?.length || next?.examTypes?.length) return next;
  return { ...(next ?? {}), examTypes: types };
}

function poolConditions(exam: typeof examinations.$inferSelect): SQL[] {
  const f = (exam.poolFilter ?? {}) as PoolFilter;
  const conds: SQL[] = [eq(questions.schoolId, exam.schoolId), eq(questions.subjectId, exam.subjectId), eq(questions.status, "APPROVED")];
  if (f.years?.length) conds.push(inArray(questions.year, f.years));
  if (f.topicIds?.length) conds.push(inArray(questions.topicId, f.topicIds));
  if (f.difficulties?.length) conds.push(inArray(questions.difficulty, f.difficulties as ("EASY" | "MEDIUM" | "HARD")[]));
  if (f.matchClass && exam.classId) conds.push(or(eq(questions.classId, exam.classId), isNull(questions.classId))!);
  if (f.examTypes?.length) conds.push(inArray(questions.examType, f.examTypes));
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
  return (!exam.classId || exam.classId === scope.classId) && (!exam.departmentId || exam.departmentId === scope.departmentId) && sectionAllows(exam.level, scope.level);
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
    let selected: string[];
    try {
      selected = selectQuestionIds(ids, exam.questionCount, exam.randomizeQuestions, rng);
    } catch (e) {
      if (e instanceof ExamEngineError) throw new AppError("EXAM_UNAVAILABLE", "This examination is not ready yet. Please contact the Super Admin.");
      throw e;
    }
    const bank = await loadBankQuestions(selected, tx);
    const byId = new Map(bank.map((q) => [q.id, q]));
    const snaps = selected.map((id) => buildSnapshot(byId.get(id)!, exam.randomizeOptions, rng));

    const durationMs = exam.durationMinutes * 60_000;
    const deadline = new Date(Math.min(now.getTime() + durationMs, exam.endsAt ? exam.endsAt.getTime() : Infinity));
    const attemptNumber = (prior[0]?.attemptNumber ?? 0) + 1;
    const examSnapshot = {
      id: exam.id,
      title: exam.title,
      version: exam.version,
      subjectId: exam.subjectId,
      examType: exam.examType,
      year: exam.year,
      questionCount: exam.questionCount,
      durationMinutes: exam.durationMinutes,
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

export const JAMB_TEST_QUESTIONS = 50;
const JAMB_TEST_MINUTES = 40;

/** One row per subject: how many JAMB-tagged questions it has and the state of its JAMB-only test. */
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
    return { ...s, approved: c?.approved ?? 0, total: c?.total ?? 0, test: t ? { id: t.id, title: t.title, status: t.status, questionCount: t.questionCount, durationMinutes: t.durationMinutes } : null };
  });
}

/**
 * Creates the subject's JAMB-only test if it does not exist and publishes it once the subject has
 * enough approved JAMB questions. Safe to run again after more questions are uploaded.
 */
export async function setupJambTests(actor: Actor, subjectIds: string[] | "ALL", ctx: ReqCtx) {
  const db = getDb();
  const rows = (await jambOverview(actor)).filter((r) => (subjectIds === "ALL" ? r.total > 0 || r.test : subjectIds.includes(r.id)));
  const out = { created: 0, published: 0, waiting: [] as string[] };
  for (const r of rows) {
    let test = r.test;
    if (!test) {
      const [row] = await db
        .insert(examinations)
        .values({
          schoolId: actor.schoolId,
          title: `JAMB ${r.name}`,
          description: `${JAMB_TEST_QUESTIONS} JAMB (UTME) questions in ${r.name}. Every attempt draws a fresh set.`,
          subjectId: r.id,
          level: "SENIOR_SECONDARY",
          examType: "JAMB",
          questionCount: JAMB_TEST_QUESTIONS,
          durationMinutes: JAMB_TEST_MINUTES,
          maxAttempts: 100,
          poolFilter: { examTypes: ["JAMB"] } satisfies PoolFilter,
          status: "DRAFT",
          createdBy: actor.id,
        })
        .returning();
      await audit({ actor, action: "exam.created", entityType: "examination", entityId: row.id, summary: row.title }, ctx);
      test = { id: row.id, title: row.title, status: row.status, questionCount: row.questionCount, durationMinutes: row.durationMinutes };
      out.created++;
    }
    if (test.status === "PUBLISHED") continue;
    if (r.approved >= test.questionCount) {
      // Published quietly: setting up many subjects at once must not send one announcement per subject.
      await db.update(examinations).set({ status: "PUBLISHED", updatedAt: new Date() }).where(eq(examinations.id, test.id));
      await audit({ actor, action: "exam.published", entityType: "examination", entityId: test.id, summary: test.title }, ctx);
      out.published++;
    } else out.waiting.push(`${r.name} (${r.approved}/${test.questionCount})`);
  }
  return out;
}
