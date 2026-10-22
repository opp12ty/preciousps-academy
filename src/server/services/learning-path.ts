import { and, asc, eq, inArray, isNull, or, sql } from "drizzle-orm";
import { getDb } from "../db";
import { assignmentAttempts, assignments, classes, departmentSubjects, ebookReads, examinations, learningProgress, lessons, results, students, subjects, terms, topics } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { getSetting } from "../settings";
import { studentScope } from "./scope";
import { minutesForPaper, poolSize } from "./exams";

/**
 * The Precious PS learning path, per subject and term, in this order:
 *   1. Study every topic in the Study Centre (lesson and classwork).
 *   2. Do each assignment, read the corrections and redo it until the score is at least the pass mark (80%).
 *   3. CBT Exam Prep: the first CA test.
 *   4. Read every topic's chapter in the e-book (Study Materials).
 *   5. Revision CBT: the second CA test.
 *   6. The term examination opens.
 * Report card: Assignment 10 + CA 30 + Examination 60 (set in Settings → Curriculum & learning).
 * School accounts are not held to the path. The Super Admin can switch the path off.
 */

export type StepKey = "study" | "assignments" | "ca1" | "materials" | "ca2" | "exam";
export const STEPS: { key: StepKey; label: string; hint: string }[] = [
  { key: "study", label: "Study Centre", hint: "Read every lesson and pass its classwork." },
  { key: "assignments", label: "Assignments", hint: "Do each assignment, check the corrections and redo it until you score at least the pass mark." },
  { key: "ca1", label: "CBT Exam Prep (CA 1)", hint: "A timed CBT on the term's topics. It counts as your first CA test." },
  { key: "materials", label: "Study Materials", hint: "Read each topic's chapter in the e-book and mark it as read." },
  { key: "ca2", label: "Revision CBT (CA 2)", hint: "A standard revision test on everything this term. It counts as your second CA test." },
  { key: "exam", label: "Term Examination", hint: "Opens when the steps above are complete." },
];

export interface PathTopic { id: string; title: string; lessons: number; lessonsDone: number; studied: boolean; firstLessonId: string | null; assignment: { id: string; title: string; best: number | null; ok: boolean }[]; read: boolean }
export interface PathGroup {
  subjectId: string;
  subject: string;
  termId: string;
  term: string;
  termOrder: number;
  topics: PathTopic[];
  done: Record<StepKey, boolean>;
  ca1: { examId: string | null; score: number | null };
  ca2: { examId: string | null; score: number | null };
  examIds: string[];
  /** A core subject of the learner's department (shown first). */
  core: boolean;
  next: StepKey | null;
  percent: number;
}

const caKey = (classId: string, subjectId: string, termId: string, stage: 1 | 2) => `${classId}:${subjectId}:${termId}:${stage}`;

export async function learningPath(actor: Actor, opts: { subjectId?: string; termId?: string } = {}): Promise<{ enabled: boolean; passMark: number; classId: string | null; groups: PathGroup[] }> {
  const db = getDb();
  const cfg = await getSetting(actor.schoolId, "learning");
  const scope = await studentScope(actor.id);
  if (!scope.classId) return { enabled: cfg.learningPath, passMark: cfg.assignmentPassMark, classId: null, groups: [] };
  const classId = scope.classId;
  const tps = await db
    .select({ id: topics.id, title: topics.title, subjectId: topics.subjectId, subject: subjects.name, subjectOrder: subjects.sortOrder, termId: topics.termId, term: terms.name, termOrder: terms.sortOrder, sortOrder: topics.sortOrder })
    .from(topics)
    .innerJoin(subjects, eq(subjects.id, topics.subjectId))
    .innerJoin(terms, eq(terms.id, topics.termId))
    .where(
      and(
        eq(topics.schoolId, actor.schoolId),
        eq(topics.classId, classId),
        eq(topics.status, "PUBLISHED"),
        isNull(subjects.archivedAt),
        scope.departmentId ? or(isNull(topics.departmentId), eq(topics.departmentId, scope.departmentId)) : isNull(topics.departmentId),
        opts.subjectId ? eq(topics.subjectId, opts.subjectId) : undefined,
        opts.termId ? eq(topics.termId, opts.termId) : undefined,
      ),
    )
    .orderBy(asc(subjects.sortOrder), asc(subjects.name), asc(terms.sortOrder), asc(topics.sortOrder), asc(topics.title));
  if (!tps.length) return { enabled: cfg.learningPath, passMark: cfg.assignmentPassMark, classId, groups: [] };
  const topicIds = tps.map((t) => t.id);
  const [ls, asg, reads, cas, termExams] = await Promise.all([
    db.select({ id: lessons.id, topicId: lessons.topicId, sortOrder: lessons.sortOrder }).from(lessons).where(and(inArray(lessons.topicId, topicIds), eq(lessons.status, "PUBLISHED"))).orderBy(asc(lessons.sortOrder)),
    db.select({ id: assignments.id, title: assignments.title, topicId: assignments.topicId }).from(assignments).where(and(inArray(assignments.topicId, topicIds), eq(assignments.status, "PUBLISHED"), eq(assignments.kind, "ASSIGNMENT"), or(isNull(assignments.classId), eq(assignments.classId, classId)))),
    db.select({ topicId: ebookReads.topicId }).from(ebookReads).where(and(eq(ebookReads.userId, actor.id), inArray(ebookReads.topicId, topicIds))),
    db.select({ id: examinations.id, key: sql<string>`${examinations.poolFilter}->>'caKey'` }).from(examinations).where(and(eq(examinations.schoolId, actor.schoolId), eq(examinations.examType, "CONTINUOUS_ASSESSMENT"), eq(examinations.classId, classId), sql`${examinations.poolFilter}->>'caKey' IS NOT NULL`)),
    db.select({ id: examinations.id, subjectId: examinations.subjectId, pool: examinations.poolFilter }).from(examinations).where(and(eq(examinations.schoolId, actor.schoolId), eq(examinations.examType, "SCHOOL_EXAM"), eq(examinations.classId, classId), eq(examinations.status, "PUBLISHED"))),
  ]);
  const lessonIds = ls.map((l) => l.id);
  const [prog, atts, caResults] = await Promise.all([
    lessonIds.length ? db.select({ lessonId: learningProgress.lessonId }).from(learningProgress).where(and(eq(learningProgress.userId, actor.id), inArray(learningProgress.lessonId, lessonIds), eq(learningProgress.status, "COMPLETED"))) : [],
    asg.length ? db.select({ assignmentId: assignmentAttempts.assignmentId, best: sql<number>`max(${assignmentAttempts.percentage})` }).from(assignmentAttempts).where(and(eq(assignmentAttempts.userId, actor.id), inArray(assignmentAttempts.assignmentId, asg.map((a) => a.id)))).groupBy(assignmentAttempts.assignmentId) : [],
    cas.length ? db.select({ examId: results.examinationId, pct: sql<number>`max(${results.percentage})` }).from(results).where(and(eq(results.userId, actor.id), inArray(results.examinationId, cas.map((c) => c.id)), eq(results.isVoided, false))).groupBy(results.examinationId) : [],
  ]);
  const coreIds = scope.departmentId ? new Set((await db.select({ id: departmentSubjects.subjectId }).from(departmentSubjects).where(and(eq(departmentSubjects.departmentId, scope.departmentId), eq(departmentSubjects.isCore, true)))).map((r) => r.id)) : new Set<string>();
  const done = new Set(prog.map((p) => p.lessonId));
  const best = new Map(atts.map((a) => [a.assignmentId, Number(a.best)]));
  const readSet = new Set(reads.map((r) => r.topicId));
  const caByKey = new Map(cas.map((c) => [c.key, c.id]));
  const caScore = new Map(caResults.map((r) => [r.examId, Math.round(Number(r.pct) * 10) / 10]));
  const topicTerm = new Map(tps.map((t) => [t.id, t.termId!]));

  const groups = new Map<string, PathGroup>();
  for (const t of tps) {
    const key = `${t.subjectId}|${t.termId}`;
    if (!groups.has(key)) groups.set(key, { subjectId: t.subjectId, subject: t.subject, termId: t.termId!, term: t.term, termOrder: t.termOrder, topics: [], done: { study: false, assignments: false, ca1: false, materials: false, ca2: false, exam: false }, ca1: { examId: null, score: null }, ca2: { examId: null, score: null }, examIds: [], core: coreIds.has(t.subjectId), next: null, percent: 0 });
    const mine = ls.filter((l) => l.topicId === t.id);
    const ta = asg.filter((a) => a.topicId === t.id).map((a) => ({ id: a.id, title: a.title, best: best.get(a.id) ?? null, ok: (best.get(a.id) ?? -1) >= cfg.assignmentPassMark }));
    groups.get(key)!.topics.push({ id: t.id, title: t.title, lessons: mine.length, lessonsDone: mine.filter((l) => done.has(l.id)).length, studied: mine.every((l) => done.has(l.id)), firstLessonId: mine[0]?.id ?? null, assignment: ta, read: readSet.has(t.id) });
  }
  for (const e of termExams) {
    const ids = ((e.pool as { topicIds?: string[] } | null)?.topicIds ?? []).filter((id) => topicTerm.has(id));
    if (!ids.length) continue;
    const term = topicTerm.get(ids[0]);
    groups.get(`${e.subjectId}|${term}`)?.examIds.push(e.id);
  }
  for (const g of groups.values()) {
    const k1 = caByKey.get(caKey(classId, g.subjectId, g.termId, 1)) ?? null;
    const k2 = caByKey.get(caKey(classId, g.subjectId, g.termId, 2)) ?? null;
    g.ca1 = { examId: k1, score: k1 ? (caScore.get(k1) ?? null) : null };
    g.ca2 = { examId: k2, score: k2 ? (caScore.get(k2) ?? null) : null };
    g.done.study = g.topics.every((t) => t.studied);
    g.done.assignments = g.topics.every((t) => t.assignment.every((a) => a.ok));
    g.done.ca1 = g.ca1.score !== null;
    g.done.materials = g.topics.every((t) => t.read);
    g.done.ca2 = g.ca2.score !== null;
    g.done.exam = false;
    g.next = (["study", "assignments", "ca1", "materials", "ca2", "exam"] as StepKey[]).find((s) => !g.done[s]) ?? null;
    g.percent = Math.round((["study", "assignments", "ca1", "materials", "ca2"] as StepKey[]).filter((s) => g.done[s]).length * 20);
  }
  // Core subjects first, then the rest, each in subject order.
  const list = [...groups.values()];
  const ordered = [...list.filter((g) => g.core), ...list.filter((g) => !g.core)];
  return { enabled: cfg.learningPath, passMark: cfg.assignmentPassMark, classId, groups: ordered };
}

const isSchoolAccount = async (userId: string) => (await getDb().select({ k: students.accountKind }).from(students).where(eq(students.userId, userId)))[0]?.k === "SCHOOL";

/** Refuses an attempt that comes before its turn on the learning path. Called when an attempt starts. */
export async function assertPathAllows(actor: Actor, exam: typeof examinations.$inferSelect) {
  if (actor.userType !== "STUDENT") return;
  if (exam.examType !== "CONTINUOUS_ASSESSMENT" && exam.examType !== "SCHOOL_EXAM") return;
  const cfg = await getSetting(actor.schoolId, "learning");
  if (!cfg.learningPath || (await isSchoolAccount(actor.id))) return;
  const pool = (exam.poolFilter ?? {}) as { caKey?: string; topicIds?: string[] };
  if (exam.examType === "CONTINUOUS_ASSESSMENT" && pool.caKey) {
    const [, subjectId, termId, stage] = pool.caKey.split(":");
    const [g] = (await learningPath(actor, { subjectId, termId })).groups;
    if (!g) return;
    if (stage === "1" && !(g.done.study && g.done.assignments)) throw new AppError("FORBIDDEN", `Finish studying every ${g.subject} topic for ${g.term} and score at least ${cfg.assignmentPassMark}% in each assignment first. See My Learning Path.`);
    if (stage === "2" && !(g.done.ca1 && g.done.materials)) throw new AppError("FORBIDDEN", `Take the CBT Exam Prep (CA 1) and read every ${g.subject} chapter in the e-book first. See My Learning Path.`);
    return;
  }
  if (exam.examType === "SCHOOL_EXAM" && pool.topicIds?.length) {
    const scope = await studentScope(actor.id);
    if (exam.classId && exam.classId !== scope.classId) return;
    const [t] = await getDb().select({ termId: topics.termId }).from(topics).where(inArray(topics.id, pool.topicIds.slice(0, 50))).limit(1);
    if (!t?.termId) return;
    const [g] = (await learningPath(actor, { subjectId: exam.subjectId, termId: t.termId })).groups;
    if (g && !g.done.ca2) throw new AppError("FORBIDDEN", `The ${g.term} ${g.subject} examination opens after you finish the learning path: Study Centre, assignments, CA 1, Study Materials and the Revision CBT (CA 2). See My Learning Path.`);
  }
}

/** Opens CA 1 or CA 2 for a subject and term: the paper is created the first time anyone in the class reaches it. */
export async function openCaTest(actor: Actor, subjectId: string, termId: string, stage: 1 | 2, ctx: ReqCtx) {
  const db = getDb();
  const cfg = await getSetting(actor.schoolId, "learning");
  const path = await learningPath(actor, { subjectId, termId });
  const g = path.groups[0];
  if (!g || !path.classId) throw new AppError("NOT_FOUND", "There are no topics for this subject and term yet.");
  if (path.enabled && !(await isSchoolAccount(actor.id))) {
    if (stage === 1 && !(g.done.study && g.done.assignments)) throw new AppError("FORBIDDEN", `First finish the Study Centre topics and score at least ${cfg.assignmentPassMark}% in each assignment.`);
    if (stage === 2 && !(g.done.ca1 && g.done.materials)) throw new AppError("FORBIDDEN", "First take CA 1 and read every chapter in the e-book.");
  }
  const key = caKey(path.classId, subjectId, termId, stage);
  const existing = stage === 1 ? g.ca1.examId : g.ca2.examId;
  if (existing) return existing;
  const [cls] = await db.select().from(classes).where(eq(classes.id, path.classId));
  const size = stage === 1 ? cfg.ca1Questions : cfg.ca2Questions;
  const draft = {
    schoolId: actor.schoolId,
    title: `${g.subject} · ${cls.name} · ${g.term} · ${stage === 1 ? "CBT Exam Prep (CA 1)" : "Revision CBT (CA 2)"}`,
    description: stage === 1 ? `First CA test on ${g.term} ${g.subject}. Counts towards CA on your report card.` : `Standard revision test on all of ${g.term} ${g.subject}. Counts as your second CA test.`,
    subjectId,
    classId: path.classId,
    level: cls.level,
    examType: "CONTINUOUS_ASSESSMENT" as const,
    questionCount: size,
    durationMinutes: minutesForPaper(size, 1),
    maxAttempts: 1,
    poolFilter: { classIds: [path.classId], termIds: [termId], caKey: key, standard: true },
    status: "PUBLISHED" as const,
    createdBy: actor.id,
  };
  const [row] = await db.insert(examinations).values(draft).returning();
  const n = await poolSize(row, db);
  if (!n) {
    await db.delete(examinations).where(eq(examinations.id, row.id));
    throw new AppError("VALIDATION", "There are no approved questions for this term yet. Please tell your teacher.");
  }
  if (n < size) await db.update(examinations).set({ questionCount: n, durationMinutes: minutesForPaper(n, 1) }).where(eq(examinations.id, row.id));
  await audit({ actor, action: "exam.created", entityType: "examination", entityId: row.id, summary: row.title }, ctx);
  return row.id;
}

/** Marks a topic's e-book chapter as read (or not). */
export async function markChapterRead(actor: Actor, topicId: string, read: boolean) {
  const db = getDb();
  if (!read) return void (await db.delete(ebookReads).where(and(eq(ebookReads.userId, actor.id), eq(ebookReads.topicId, topicId))));
  const [t] = await db.select({ id: topics.id }).from(topics).where(and(eq(topics.id, topicId), eq(topics.schoolId, actor.schoolId)));
  if (!t) throw new AppError("NOT_FOUND", "Topic not found.");
  await db.insert(ebookReads).values({ userId: actor.id, topicId }).onConflictDoNothing();
}
