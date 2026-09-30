import { and, asc, desc, eq, inArray, isNull, or, sql } from "drizzle-orm";
import { z } from "zod";
import { buildSnapshot, markResponse, normaliseResponse, summarise, toPublicQuestion, type AttemptQuestionSnapshot } from "@/core/exam-engine";
import { getDb } from "../db";
import {
  classes,
  departmentSubjects,
  learningAttempts,
  learningProgress,
  lessonQuestions,
  lessonResources,
  lessons,
  questions,
  subjects,
  terms,
  topics,
} from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { getSetting } from "../settings";
import { requireActiveAccess } from "./access";
import { loadBankQuestions } from "./questions";
import { sectionCond, studentScope } from "./scope";
import { sectionAllows } from "@/core/sections";

/**
 * Study Centre (§17–§20): Department → Class → Term → Subject → Topic →
 * Subtopic → Lesson → Classwork → Assessment. Guided flow with configurable
 * mastery threshold, prerequisites and retry/remediation.
 */

export async function mySubjects(actor: Actor) {
  const db = getDb();
  const scope = await studentScope(actor.id);
  const subjectRows = await db
    .select({ s: subjects })
    .from(subjects)
    .leftJoin(departmentSubjects, eq(departmentSubjects.subjectId, subjects.id))
    .where(and(eq(subjects.schoolId, actor.schoolId), isNull(subjects.archivedAt), scope.departmentId ? or(eq(departmentSubjects.departmentId, scope.departmentId), isNull(departmentSubjects.departmentId)) : undefined))
    .orderBy(asc(subjects.sortOrder), asc(subjects.name));
  const unique = Array.from(new Map(subjectRows.map((r) => [r.s.id, r.s])).values());
  const stats = await db.execute<{ subject_id: string; total: number; completed: number }>(sql`
    SELECT t.subject_id, count(l.id)::int AS total,
           count(lp.lesson_id) FILTER (WHERE lp.status = 'COMPLETED')::int AS completed
    FROM lessons l
    JOIN topics t ON t.id = l.topic_id
    LEFT JOIN learning_progress lp ON lp.lesson_id = l.id AND lp.user_id = ${actor.id}
    WHERE l.school_id = ${actor.schoolId} AND l.status = 'PUBLISHED' AND t.status = 'PUBLISHED'
      AND (t.class_id IS NULL OR t.class_id = ${scope.classId})
      AND (t.department_id IS NULL OR t.department_id = ${scope.departmentId})
      AND (t.level IS NULL OR t.level = ${scope.level})
    GROUP BY t.subject_id`);
  const byS = new Map(stats.rows.map((r) => [r.subject_id, r]));
  return unique.map((s) => ({
    id: s.id,
    name: s.name,
    code: s.code,
    description: s.description,
    lessons: byS.get(s.id)?.total ?? 0,
    completed: byS.get(s.id)?.completed ?? 0,
  }));
}

export async function subjectOutline(actor: Actor, subjectId: string) {
  await requireActiveAccess(actor.id);
  const db = getDb();
  const scope = await studentScope(actor.id);
  const [subject] = await db.select().from(subjects).where(and(eq(subjects.id, subjectId), eq(subjects.schoolId, actor.schoolId)));
  if (!subject) throw new AppError("NOT_FOUND", "Subject not found.");
  const tps = await db
    .select({ t: topics, term: terms.name, className: classes.name })
    .from(topics)
    .leftJoin(terms, eq(terms.id, topics.termId))
    .leftJoin(classes, eq(classes.id, topics.classId))
    .where(
      and(
        eq(topics.subjectId, subjectId),
        eq(topics.status, "PUBLISHED"),
        scope.classId ? or(isNull(topics.classId), eq(topics.classId, scope.classId)) : undefined,
        scope.departmentId ? or(isNull(topics.departmentId), eq(topics.departmentId, scope.departmentId)) : undefined,
        sectionCond(topics.level, scope.level),
      ),
    )
    .orderBy(asc(terms.sortOrder), asc(topics.sortOrder));
  const topicIds = tps.map((t) => t.t.id);
  const ls = topicIds.length
    ? await db.select().from(lessons).where(and(inArray(lessons.topicId, topicIds), eq(lessons.status, "PUBLISHED"))).orderBy(asc(lessons.sortOrder))
    : [];
  const prog = ls.length
    ? await db.select().from(learningProgress).where(and(eq(learningProgress.userId, actor.id), inArray(learningProgress.lessonId, ls.map((l) => l.id))))
    : [];
  const cfg = await getSetting(actor.schoolId, "learning");
  const done = new Set(prog.filter((p) => p.status === "COMPLETED").map((p) => p.lessonId));
  const doneTopics = new Set(tps.filter((t) => ls.filter((l) => l.topicId === t.t.id && l.isMandatory).every((l) => done.has(l.id))).map((t) => t.t.id));
  return {
    subject,
    masteryThreshold: cfg.masteryThreshold,
    topics: tps.map(({ t, term, className }) => ({
      id: t.id,
      title: t.title,
      description: t.description,
      term,
      className,
      isMandatory: t.isMandatory,
      locked: cfg.enforcePrerequisites && Boolean(t.prerequisiteTopicId && !doneTopics.has(t.prerequisiteTopicId)),
      lessons: ls
        .filter((l) => l.topicId === t.id)
        .map((l) => {
          const p = prog.find((x) => x.lessonId === l.id);
          return {
            id: l.id,
            title: l.title,
            summary: l.summary,
            estimatedMinutes: l.estimatedMinutes,
            isMandatory: l.isMandatory,
            status: p?.status ?? "NOT_STARTED",
            bestPercentage: p?.bestPercentage ?? null,
            locked: lessonLocked(l, done, cfg.enforcePrerequisites),
          };
        }),
    })),
  };
}

function lessonLocked(l: typeof lessons.$inferSelect, done: Set<string>, enforce: boolean) {
  if (l.isLocked) return true;
  return enforce && Boolean(l.prerequisiteLessonId && !done.has(l.prerequisiteLessonId));
}

/** Classwork questions for a lesson — only approved questions ever reach students. */
async function approvedClasswork(lessonId: string) {
  return getDb()
    .select({ questionId: lessonQuestions.questionId })
    .from(lessonQuestions)
    .innerJoin(questions, eq(questions.id, lessonQuestions.questionId))
    .where(and(eq(lessonQuestions.lessonId, lessonId), eq(questions.status, "APPROVED")))
    .orderBy(asc(lessonQuestions.sortOrder));
}

/** Loads a published lesson and enforces the student's class, department and section. */
async function lessonForStudent(actor: Actor, lessonId: string, ctx: ReqCtx) {
  const db = getDb();
  const [l] = await db
    .select({ l: lessons, topic: topics.title, subjectId: topics.subjectId, subject: subjects.name, topicClass: topics.classId, topicDept: topics.departmentId, topicLevel: topics.level })
    .from(lessons)
    .innerJoin(topics, eq(topics.id, lessons.topicId))
    .innerJoin(subjects, eq(subjects.id, topics.subjectId))
    .where(and(eq(lessons.id, lessonId), eq(lessons.schoolId, actor.schoolId), eq(lessons.status, "PUBLISHED")));
  if (!l) throw new AppError("NOT_FOUND", "Lesson not found.");
  const scope = await studentScope(actor.id);
  if ((l.topicClass && l.topicClass !== scope.classId) || (l.topicDept && l.topicDept !== scope.departmentId) || !sectionAllows(l.topicLevel, scope.level)) {
    await securityEvent({ type: "UNAUTHORIZED_RESOURCE", userId: actor.id, schoolId: actor.schoolId, detail: { lessonId } }, ctx);
    throw new AppError("FORBIDDEN", "This lesson is not part of your class or department.");
  }
  return l;
}

export async function openLesson(actor: Actor, lessonId: string, ctx: ReqCtx) {
  await requireActiveAccess(actor.id);
  const db = getDb();
  const l = await lessonForStudent(actor, lessonId, ctx);
  const cfg = await getSetting(actor.schoolId, "learning");
  const doneRows = await db.select({ lessonId: learningProgress.lessonId }).from(learningProgress).where(and(eq(learningProgress.userId, actor.id), eq(learningProgress.status, "COMPLETED")));
  const done = new Set(doneRows.map((d) => d.lessonId));
  if (lessonLocked(l.l, done, cfg.enforcePrerequisites)) throw new AppError("FORBIDDEN", "Complete the previous lesson first to unlock this one.");

  await db
    .insert(learningProgress)
    .values({ userId: actor.id, lessonId, status: "IN_PROGRESS" })
    .onConflictDoNothing();
  const [progress] = await db.select().from(learningProgress).where(and(eq(learningProgress.userId, actor.id), eq(learningProgress.lessonId, lessonId)));
  const resources = await db.select().from(lessonResources).where(eq(lessonResources.lessonId, lessonId)).orderBy(asc(lessonResources.sortOrder));
  const cw = await approvedClasswork(lessonId);
  const bank = await loadBankQuestions(cw.map((c) => c.questionId));
  const byId = new Map(bank.map((q) => [q.id, q]));
  // Classwork shows options in authored order; answers are marked server-side.
  const classwork = cw
    .map((c) => byId.get(c.questionId))
    .filter(Boolean)
    .map((q) => toPublicQuestion(buildSnapshot(q!, false, Math.random)));
  const attempts = await db
    .select({ attemptNumber: learningAttempts.attemptNumber, percentage: learningAttempts.percentage, passed: learningAttempts.passed, createdAt: learningAttempts.createdAt })
    .from(learningAttempts)
    .where(and(eq(learningAttempts.userId, actor.id), eq(learningAttempts.lessonId, lessonId)))
    .orderBy(desc(learningAttempts.createdAt));
  // Next lesson in the same topic, for the guided flow.
  const siblings = await db.select({ id: lessons.id, title: lessons.title, sortOrder: lessons.sortOrder }).from(lessons).where(and(eq(lessons.topicId, l.l.topicId), eq(lessons.status, "PUBLISHED"))).orderBy(asc(lessons.sortOrder), asc(lessons.title));
  const idx = siblings.findIndex((s) => s.id === lessonId);
  return {
    lesson: l.l,
    topic: l.topic,
    subject: l.subject,
    subjectId: l.subjectId,
    progress,
    resources,
    classwork,
    attempts,
    threshold: l.l.masteryThreshold ?? cfg.masteryThreshold,
    allowRetry: cfg.allowRetry,
    next: siblings[idx + 1] ?? null,
    prev: idx > 0 ? siblings[idx - 1] : null,
  };
}

/** Marks lessons without classwork as complete when the student finishes reading. */
export async function completeReading(actor: Actor, lessonId: string, ctx: ReqCtx) {
  await requireActiveAccess(actor.id);
  const db = getDb();
  await lessonForStudent(actor, lessonId, ctx);
  if ((await approvedClasswork(lessonId)).length > 0) throw new AppError("VALIDATION", "Complete the classwork to finish this lesson.");
  await db
    .insert(learningProgress)
    .values({ userId: actor.id, lessonId, status: "COMPLETED", completedAt: new Date() })
    .onConflictDoUpdate({ target: [learningProgress.userId, learningProgress.lessonId], set: { status: "COMPLETED", completedAt: new Date(), updatedAt: new Date() } });
  await audit({ actor, action: "study.lesson_completed", entityType: "lesson", entityId: lessonId }, ctx);
}

const classworkSchema = z.object({
  answers: z.record(z.string().uuid(), z.unknown()),
  timeSpentSec: z.number().int().min(0).max(86_400).optional(),
});

/** Auto-marks classwork on the server; passing at the mastery threshold completes the lesson. */
export async function submitClasswork(actor: Actor, lessonId: string, raw: unknown, ctx: ReqCtx) {
  await requireActiveAccess(actor.id);
  const input = classworkSchema.parse(raw);
  const db = getDb();
  const { l } = await lessonForStudent(actor, lessonId, ctx);
  const cfg = await getSetting(actor.schoolId, "learning");
  const cw = await approvedClasswork(lessonId);
  if (!cw.length) throw new AppError("VALIDATION", "This lesson has no classwork.");
  const bank = await loadBankQuestions(cw.map((c) => c.questionId));
  const threshold = l.masteryThreshold ?? cfg.masteryThreshold;

  return db.transaction(async (tx) => {
    await tx.execute(sql`SELECT id FROM users WHERE id = ${actor.id} FOR UPDATE`);
    const [prev] = await tx.select().from(learningProgress).where(and(eq(learningProgress.userId, actor.id), eq(learningProgress.lessonId, lessonId)));
    if (prev && prev.attempts > 0 && !cfg.allowRetry && prev.status !== "COMPLETED") throw new AppError("ATTEMPT_LIMIT", "Retries are disabled for classwork.");
    const feedback: { questionId: string; isCorrect: boolean; answered: boolean; correctOptionIds: string[]; explanation: string | null; answerSpec?: unknown; correctPairs?: Record<string, string> }[] = [];
    const items = bank.map((q) => {
      const snap = buildSnapshot(q, false, Math.random) as AttemptQuestionSnapshot;
      let resp: unknown = input.answers[q.id] ?? null;
      try {
        resp = normaliseResponse(snap, resp);
      } catch {
        resp = null;
      }
      const outcome = markResponse(snap, resp);
      feedback.push({
        questionId: q.id,
        isCorrect: outcome.isCorrect,
        answered: outcome.answered,
        correctOptionIds: snap.correctOptionIds,
        correctPairs: snap.correctPairs,
        answerSpec: q.type === "NUMERIC" || q.type === "FILL_BLANK" ? q.answerSpec : undefined,
        explanation: q.explanation ?? null,
      });
      return { marks: q.marks, outcome };
    });
    const s = summarise(items);
    const passed = s.percentage >= threshold;
    const attemptNumber = (prev?.attempts ?? 0) + 1;
    await tx.insert(learningAttempts).values({
      userId: actor.id,
      lessonId,
      attemptNumber,
      answers: input.answers,
      score: s.score,
      totalMarks: s.totalMarks,
      percentage: s.percentage,
      passed,
      timeSpentSec: input.timeSpentSec,
      feedback,
    });
    const best = Math.max(prev?.bestPercentage ?? 0, s.percentage);
    const completed = passed || prev?.status === "COMPLETED";
    await tx
      .insert(learningProgress)
      .values({ userId: actor.id, lessonId, status: completed ? "COMPLETED" : "IN_PROGRESS", bestPercentage: best, attempts: attemptNumber, completedAt: passed ? new Date() : null })
      .onConflictDoUpdate({
        target: [learningProgress.userId, learningProgress.lessonId],
        set: { status: completed ? "COMPLETED" : "IN_PROGRESS", bestPercentage: best, attempts: attemptNumber, updatedAt: new Date(), ...(passed && prev?.status !== "COMPLETED" ? { completedAt: new Date() } : {}) },
      });
    await audit({ actor, action: "study.classwork_submitted", entityType: "lesson", entityId: lessonId, summary: `${s.percentage}% (${passed ? "passed" : "not yet"})` }, ctx, tx);
    return { ...s, passed, threshold, attemptNumber, feedback };
  });
}

/** Admin override of prerequisites / completion (§18). */
export async function overrideProgress(actor: Actor, userId: string, lessonId: string, status: "COMPLETED" | "NOT_STARTED", ctx: ReqCtx) {
  const db = getDb();
  const [l] = await db.select({ id: lessons.id }).from(lessons).where(and(eq(lessons.id, lessonId), eq(lessons.schoolId, actor.schoolId)));
  if (!l) throw new AppError("NOT_FOUND", "Lesson not found.");
  if (status === "NOT_STARTED") await db.delete(learningProgress).where(and(eq(learningProgress.userId, userId), eq(learningProgress.lessonId, lessonId)));
  else
    await db
      .insert(learningProgress)
      .values({ userId, lessonId, status: "COMPLETED", completedAt: new Date(), overriddenBy: actor.id })
      .onConflictDoUpdate({ target: [learningProgress.userId, learningProgress.lessonId], set: { status: "COMPLETED", completedAt: new Date(), overriddenBy: actor.id } });
  await audit({ actor, action: "study.progress_overridden", entityType: "lesson", entityId: lessonId, metadata: { userId, status } }, ctx);
}

export async function learningSummary(userId: string) {
  const db = getDb();
  const [p] = await db
    .select({
      completed: sql<number>`count(*) FILTER (WHERE ${learningProgress.status} = 'COMPLETED')::int`,
      inProgress: sql<number>`count(*) FILTER (WHERE ${learningProgress.status} = 'IN_PROGRESS')::int`,
    })
    .from(learningProgress)
    .where(eq(learningProgress.userId, userId));
  const [current] = await db
    .select({ id: lessons.id, title: lessons.title, topic: topics.title })
    .from(learningProgress)
    .innerJoin(lessons, eq(lessons.id, learningProgress.lessonId))
    .innerJoin(topics, eq(topics.id, lessons.topicId))
    .where(and(eq(learningProgress.userId, userId), eq(learningProgress.status, "IN_PROGRESS")))
    .orderBy(desc(learningProgress.updatedAt))
    .limit(1);
  const [avg] = await db.select({ avg: sql<number | null>`round(avg(${learningAttempts.percentage})::numeric,1)::float` }).from(learningAttempts).where(eq(learningAttempts.userId, userId));
  return { completed: p?.completed ?? 0, inProgress: p?.inProgress ?? 0, current: current ?? null, classworkAverage: avg?.avg ?? null };
}
