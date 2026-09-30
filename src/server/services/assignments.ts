import { and, asc, desc, eq, inArray, isNull, or, sql } from "drizzle-orm";
import { z } from "zod";
import { buildSnapshot, markResponse, normaliseResponse, summarise, toPublicQuestion } from "@/core/exam-engine";
import { getDb } from "../db";
import { assignmentAttempts, assignmentQuestions, assignments, classes, departments, questions, subjects, topics, users } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { requireActiveAccess } from "./access";
import { broadcast } from "./notifications";
import { resolveSection, sectionCond, studentScope } from "./scope";
import { SECTIONS, sectionAllows } from "@/core/sections";
import { loadBankQuestions } from "./questions";

const uuidOpt = z
  .string()
  .uuid()
  .nullish()
  .or(z.literal("").transform(() => null));
const dateOpt = z
  .union([z.coerce.date(), z.literal("").transform(() => null), z.null()])
  .optional()
  .transform((v) => v ?? null);

export const assignmentSchema = z
  .object({
    title: z.string().trim().min(3).max(160),
    instructions: z.string().trim().max(8000).nullish(),
    subjectId: z.string().uuid(),
    classId: uuidOpt,
    departmentId: uuidOpt,
    level: z.enum(SECTIONS).nullish().or(z.literal("").transform(() => null)),
    topicId: uuidOpt,
    lessonId: uuidOpt,
    kind: z.enum(["ASSIGNMENT", "CLASSWORK"]).default("ASSIGNMENT"),
    startsAt: dateOpt,
    dueAt: dateOpt,
    attemptLimit: z.coerce.number().int().min(1).max(20).default(1),
    passMark: z.coerce.number().min(0).max(100).default(50),
    autoMark: z.boolean().default(true),
    showResult: z.boolean().default(true),
    showExplanations: z.boolean().default(true),
    status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
    questionIds: z.array(z.string().uuid()).min(1, "Add at least one question.").max(100),
  })
  .refine((a) => !a.startsAt || !a.dueAt || a.dueAt > a.startsAt, { path: ["dueAt"], message: "Due date must be after the start date." });

export async function upsertAssignment(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = assignmentSchema.parse(raw);
  const db = getDb();
  const [s] = await db.select({ id: subjects.id }).from(subjects).where(and(eq(subjects.id, d.subjectId), eq(subjects.schoolId, actor.schoolId)));
  if (!s) throw new AppError("VALIDATION", "Unknown subject.");
  const { questionIds, ...rest } = d;
  const fields = { ...rest, level: await resolveSection(actor.schoolId, d.classId, d.level) };
  const valid = await db.select({ id: questions.id }).from(questions).where(and(inArray(questions.id, questionIds), eq(questions.schoolId, actor.schoolId), eq(questions.status, "APPROVED")));
  if (valid.length !== new Set(questionIds).size) throw new AppError("VALIDATION", "Only approved questions from the bank can be used.");
  const out = await db.transaction(async (tx) => {
    let row;
    if (id) {
      [row] = await tx.update(assignments).set({ ...fields, updatedAt: new Date() }).where(and(eq(assignments.id, id), eq(assignments.schoolId, actor.schoolId))).returning();
      if (!row) throw new AppError("NOT_FOUND", "Assignment not found.");
    } else {
      [row] = await tx.insert(assignments).values({ ...fields, schoolId: actor.schoolId, createdBy: actor.id }).returning();
    }
    await tx.delete(assignmentQuestions).where(eq(assignmentQuestions.assignmentId, row.id));
    await tx.insert(assignmentQuestions).values(questionIds.map((q, i) => ({ assignmentId: row.id, questionId: q, sortOrder: i })));
    await audit({ actor, action: id ? "assignment.updated" : "assignment.created", entityType: "assignment", entityId: row.id, summary: `${row.title} (${row.status})` }, ctx, tx);
    return row;
  });
  if (out.status === "PUBLISHED") {
    await broadcast(actor, { category: "ASSIGNMENT", title: `New ${out.kind === "CLASSWORK" ? "classwork" : "assignment"}: ${out.title}`, body: out.dueAt ? `Due ${out.dueAt.toUTCString()}` : "Open it from your dashboard.", link: `/student/assignments/${out.id}`, audience: { classId: out.classId, departmentId: out.departmentId, level: out.level } }, ctx);
  }
  return out;
}

export async function listAssignmentsAdmin(schoolId: string, kind?: string) {
  const db = getDb();
  return db
    .select({
      a: assignments,
      subject: subjects.name,
      className: classes.name,
      department: departments.name,
      questions: sql<number>`(SELECT count(*)::int FROM assignment_questions aq WHERE aq.assignment_id = ${assignments.id})`,
      submissions: sql<number>`(SELECT count(DISTINCT user_id)::int FROM assignment_attempts at WHERE at.assignment_id = ${assignments.id})`,
      avg: sql<number | null>`(SELECT round(avg(percentage)::numeric,1)::float FROM assignment_attempts at WHERE at.assignment_id = ${assignments.id})`,
    })
    .from(assignments)
    .innerJoin(subjects, eq(subjects.id, assignments.subjectId))
    .leftJoin(classes, eq(classes.id, assignments.classId))
    .leftJoin(departments, eq(departments.id, assignments.departmentId))
    .where(and(eq(assignments.schoolId, schoolId), kind ? eq(assignments.kind, kind) : undefined))
    .orderBy(desc(assignments.createdAt));
}

export async function getAssignmentAdmin(schoolId: string, id: string) {
  const db = getDb();
  const [a] = await db.select().from(assignments).where(and(eq(assignments.id, id), eq(assignments.schoolId, schoolId)));
  if (!a) throw new AppError("NOT_FOUND", "Assignment not found.");
  const qs = await db
    .select({ id: questions.id, ref: questions.ref, stem: questions.stem })
    .from(assignmentQuestions)
    .innerJoin(questions, eq(questions.id, assignmentQuestions.questionId))
    .where(eq(assignmentQuestions.assignmentId, id))
    .orderBy(asc(assignmentQuestions.sortOrder));
  const subs = await db
    .select({ id: assignmentAttempts.id, student: sql<string>`${users.firstName} || ' ' || ${users.lastName}`, attemptNumber: assignmentAttempts.attemptNumber, percentage: assignmentAttempts.percentage, passed: assignmentAttempts.passed, submittedAt: assignmentAttempts.submittedAt })
    .from(assignmentAttempts)
    .innerJoin(users, eq(users.id, assignmentAttempts.userId))
    .where(eq(assignmentAttempts.assignmentId, id))
    .orderBy(desc(assignmentAttempts.submittedAt));
  return { ...a, questions: qs, submissions: subs };
}

export async function listStudentAssignments(actor: Actor, kind?: "ASSIGNMENT" | "CLASSWORK") {
  const db = getDb();
  const scope = await studentScope(actor.id);
  const rows = await db
    .select({ a: assignments, subject: subjects.name, topic: topics.title })
    .from(assignments)
    .innerJoin(subjects, eq(subjects.id, assignments.subjectId))
    .leftJoin(topics, eq(topics.id, assignments.topicId))
    .where(
      and(
        eq(assignments.schoolId, actor.schoolId),
        eq(assignments.status, "PUBLISHED"),
        kind ? eq(assignments.kind, kind) : undefined,
        or(isNull(assignments.classId), scope.classId ? eq(assignments.classId, scope.classId) : undefined),
        or(isNull(assignments.departmentId), scope.departmentId ? eq(assignments.departmentId, scope.departmentId) : undefined),
        sectionCond(assignments.level, scope.level),
      ),
    )
    .orderBy(asc(assignments.dueAt));
  const ids = rows.map((r) => r.a.id);
  const atts = ids.length
    ? await db.select().from(assignmentAttempts).where(and(eq(assignmentAttempts.userId, actor.id), inArray(assignmentAttempts.assignmentId, ids)))
    : [];
  const now = new Date();
  return rows.map(({ a, subject, topic }) => {
    const mine = atts.filter((x) => x.assignmentId === a.id);
    const best = mine.reduce<number | null>((m, x) => (m === null || x.percentage > m ? x.percentage : m), null);
    return {
      id: a.id,
      title: a.title,
      kind: a.kind,
      subject,
      topic,
      dueAt: a.dueAt,
      startsAt: a.startsAt,
      attemptLimit: a.attemptLimit,
      attemptsUsed: mine.length,
      best,
      passed: mine.some((x) => x.passed),
      state: a.startsAt && a.startsAt > now ? "UPCOMING" : a.dueAt && a.dueAt < now ? "CLOSED" : mine.length >= a.attemptLimit ? "DONE" : mine.length ? "IN_PROGRESS" : "PENDING",
    };
  });
}

async function loadForStudent(actor: Actor, id: string, ctx: ReqCtx) {
  const db = getDb();
  const [a] = await db.select().from(assignments).where(and(eq(assignments.id, id), eq(assignments.schoolId, actor.schoolId), eq(assignments.status, "PUBLISHED")));
  if (!a) throw new AppError("NOT_FOUND", "Assignment not found.");
  const scope = await studentScope(actor.id);
  if ((a.classId && a.classId !== scope.classId) || (a.departmentId && a.departmentId !== scope.departmentId) || !sectionAllows(a.level, scope.level)) {
    await securityEvent({ type: "UNAUTHORIZED_RESOURCE", userId: actor.id, schoolId: actor.schoolId, detail: { assignmentId: id } }, ctx);
    throw new AppError("NOT_FOUND", "Assignment not found.");
  }
  return a;
}

export async function openAssignment(actor: Actor, id: string, ctx: ReqCtx) {
  await requireActiveAccess(actor.id);
  const a = await loadForStudent(actor, id, ctx);
  const db = getDb();
  const qids = await db.select({ id: assignmentQuestions.questionId }).from(assignmentQuestions).where(eq(assignmentQuestions.assignmentId, id)).orderBy(asc(assignmentQuestions.sortOrder));
  const bank = await loadBankQuestions(qids.map((q) => q.id));
  const byId = new Map(bank.map((q) => [q.id, q]));
  const attempts = await db.select().from(assignmentAttempts).where(and(eq(assignmentAttempts.assignmentId, id), eq(assignmentAttempts.userId, actor.id))).orderBy(desc(assignmentAttempts.submittedAt));
  return {
    assignment: a,
    questions: qids.map((q) => byId.get(q.id)).filter(Boolean).map((q) => toPublicQuestion(buildSnapshot(q!, false, Math.random))),
    attempts: attempts.map((x) => ({ id: x.id, attemptNumber: x.attemptNumber, percentage: x.percentage, passed: x.passed, submittedAt: x.submittedAt, feedback: a.showResult ? x.feedback : null })),
  };
}

export async function submitAssignment(actor: Actor, id: string, raw: unknown, ctx: ReqCtx) {
  await requireActiveAccess(actor.id);
  const input = z.object({ answers: z.record(z.string().uuid(), z.unknown()) }).parse(raw);
  const a = await loadForStudent(actor, id, ctx);
  const now = new Date();
  if (a.startsAt && a.startsAt > now) throw new AppError("EXAM_UNAVAILABLE", "This assignment has not opened yet.");
  if (a.dueAt && a.dueAt < now) throw new AppError("EXAM_UNAVAILABLE", "The due date has passed.");
  const db = getDb();
  const qids = await db.select({ id: assignmentQuestions.questionId }).from(assignmentQuestions).where(eq(assignmentQuestions.assignmentId, id));
  const bank = await loadBankQuestions(qids.map((q) => q.id));
  return db.transaction(async (tx) => {
    await tx.execute(sql`SELECT id FROM users WHERE id = ${actor.id} FOR UPDATE`);
    const [{ n }] = await tx.select({ n: sql<number>`count(*)::int` }).from(assignmentAttempts).where(and(eq(assignmentAttempts.assignmentId, id), eq(assignmentAttempts.userId, actor.id)));
    if (n >= a.attemptLimit) throw new AppError("ATTEMPT_LIMIT", `You have used all ${a.attemptLimit} attempt(s).`);
    const feedback: { questionId: string; isCorrect: boolean; answered: boolean; correctOptionIds: string[]; explanation: string | null }[] = [];
    const items = bank.map((q) => {
      const snap = buildSnapshot(q, false, Math.random);
      let resp: unknown = input.answers[q.id] ?? null;
      try {
        resp = normaliseResponse(snap, resp);
      } catch {
        resp = null;
      }
      const outcome = markResponse(snap, resp);
      feedback.push({ questionId: q.id, isCorrect: outcome.isCorrect, answered: outcome.answered, correctOptionIds: snap.correctOptionIds, explanation: a.showExplanations ? (q.explanation ?? null) : null });
      return { marks: q.marks, outcome };
    });
    const s = summarise(items);
    const passed = s.percentage >= a.passMark;
    const [row] = await tx
      .insert(assignmentAttempts)
      .values({ assignmentId: id, userId: actor.id, attemptNumber: n + 1, answers: input.answers, score: s.score, totalMarks: s.totalMarks, percentage: s.percentage, passed, feedback })
      .returning();
    await audit({ actor, action: "assignment.submitted", entityType: "assignment", entityId: id, summary: `${s.percentage}%` }, ctx, tx);
    return { id: row.id, ...s, passed, attemptNumber: n + 1, feedback: a.showResult ? feedback : null, showResult: a.showResult };
  });
}
