import { and, desc, eq, inArray, sql } from "drizzle-orm";
import { gradeFor } from "@/core/exam-engine";
import { getDb } from "../db";
import { awards, certificates, classes, departments, loyaltyPoints, results, students, subjects, terms, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { getSetting } from "../settings";
import { notifyUser } from "./notifications";

/**
 * Academic records built from work already in the system: term report cards (each one carries the
 * terms before it), best-student awards for a term or a session, loyalty points and certificates.
 * Nothing here is typed in by hand except the reward the school attaches to an award.
 */

type Row = Record<string, unknown>;
const rows = async <T extends Row>(q: ReturnType<typeof sql>) => (await getDb().execute<T>(q)).rows;

export interface TermWindow { name: string; index: number; start: Date; end: Date }

/**
 * The three terms of the current session with their dates. Dates entered under Academics → Terms are
 * used when present; otherwise the usual Nigerian calendar applies (September–December,
 * January–April, May–August).
 */
export async function termWindows(schoolId: string): Promise<{ session: string; currentTerm: string; terms: TermWindow[] }> {
  const cal = await getSetting(schoolId, "academicCalendar");
  const y1 = Number(cal.session.match(/(\d{4})/)?.[1] ?? new Date().getFullYear());
  const fallback: [string, string][] = [[`${y1}-09-01`, `${y1}-12-31`], [`${y1 + 1}-01-01`, `${y1 + 1}-04-30`], [`${y1 + 1}-05-01`, `${y1 + 1}-08-31`]];
  const list = (await getDb().select().from(terms).where(eq(terms.schoolId, schoolId))).filter((t) => !t.archivedAt).sort((a, b) => a.sortOrder - b.sortOrder).slice(0, 3);
  const names = list.length ? list : [{ name: "First Term", startsOn: null, endsOn: null }, { name: "Second Term", startsOn: null, endsOn: null }, { name: "Third Term", startsOn: null, endsOn: null }];
  const ok = (d: string | null) => (d && /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : null);
  return {
    session: cal.session,
    currentTerm: cal.currentTerm,
    terms: names.map((t, i) => {
      const f = fallback[Math.min(i, 2)];
      return { name: t.name, index: i, start: new Date(`${ok(t.startsOn) ?? f[0]}T00:00:00+01:00`), end: new Date(`${ok(t.endsOn) ?? f[1]}T23:59:59+01:00`) };
    }),
  };
}

const round1 = (n: number) => Math.round(n * 10) / 10;
const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);

/**
 * Per-subject averages of one student between two moments: term examinations, CA tests (CBT Exam
 * Prep, Revision CBT and class tests) and assignments. Practice, mock, Precious PS and external-style papers
 * are for learning and rewards only and never enter the report card.
 */
async function subjectScores(userId: string, start: Date, end: Date) {
  const [exams, cas, work] = await Promise.all([
    rows<{ subject_id: string; subject: string; papers: number; avg: number; best: number }>(sql`
      SELECT s.id AS subject_id, s.name AS subject, count(*)::int AS papers, avg(r.percentage)::float AS avg, max(r.percentage)::float AS best
      FROM results r JOIN examinations e ON e.id = r.examination_id JOIN subjects s ON s.id = e.subject_id
      WHERE r.user_id = ${userId} AND NOT r.is_voided AND r.released_at IS NOT NULL AND r.created_at >= ${start} AND r.created_at <= ${end}
        AND e.exam_type = 'SCHOOL_EXAM'
      GROUP BY s.id, s.name`),
    rows<{ subject_id: string; subject: string; avg: number }>(sql`
      SELECT s.id AS subject_id, s.name AS subject, avg(r.percentage)::float AS avg
      FROM results r JOIN examinations e ON e.id = r.examination_id JOIN subjects s ON s.id = e.subject_id
      WHERE r.user_id = ${userId} AND NOT r.is_voided AND r.released_at IS NOT NULL AND r.created_at >= ${start} AND r.created_at <= ${end}
        AND e.exam_type IN ('CONTINUOUS_ASSESSMENT', 'CLASS_TEST')
      GROUP BY s.id, s.name`),
    rows<{ subject_id: string; subject: string; n: number; avg: number }>(sql`
      SELECT s.id AS subject_id, s.name AS subject, count(*)::int AS n, avg(t.best)::float AS avg FROM (
        SELECT at.assignment_id, max(at.percentage) AS best FROM assignment_attempts at
        WHERE at.user_id = ${userId} AND at.created_at >= ${start} AND at.created_at <= ${end} GROUP BY at.assignment_id
      ) t JOIN assignments a ON a.id = t.assignment_id JOIN subjects s ON s.id = a.subject_id GROUP BY s.id, s.name`),
  ]);
  type S = { subjectId: string; subject: string; papers: number; exams: number | null; best: number | null; ca: number | null; assignments: number | null; work: number };
  const map = new Map<string, S>();
  const blank = (id: string, name: string): S => ({ subjectId: id, subject: name, papers: 0, exams: null, best: null, ca: null, assignments: null, work: 0 });
  for (const e of exams) map.set(e.subject_id, { ...blank(e.subject_id, e.subject), papers: e.papers, exams: e.avg, best: e.best });
  for (const c of cas) map.set(c.subject_id, { ...(map.get(c.subject_id) ?? blank(c.subject_id, c.subject)), ca: c.avg });
  for (const w of work) map.set(w.subject_id, { ...(map.get(w.subject_id) ?? blank(w.subject_id, w.subject)), assignments: w.avg, work: w.n });
  return map;
}

export interface Weights { assignment: number; ca: number; exam: number }
export const DEFAULT_WEIGHTS: Weights = { assignment: 10, ca: 30, exam: 60 };

/**
 * Term score of a subject out of 100: Assignment 10 + CA 30 + Examination 60 by default. When a part
 * is missing (e.g. the examination has not been written yet) the score is scaled to the parts present.
 */
export function termScore(exams: number | null, assignments: number | null, ca: number | null = null, w: Weights = DEFAULT_WEIGHTS) {
  const parts: [number | null, number][] = [[assignments, w.assignment], [ca, w.ca], [exams, w.exam]];
  const have = parts.filter(([v, wt]) => v !== null && wt > 0) as [number, number][];
  const total = have.reduce((a, [, wt]) => a + wt, 0);
  return total ? have.reduce((a, [v, wt]) => a + v * wt, 0) / total : null;
}

export interface ReportCard {
  student: { id: string; name: string; studentNumber: string; className: string | null; department: string | null; classId: string | null };
  session: string;
  term: TermWindow;
  /** Every term up to and including this one, in order. */
  terms: TermWindow[];
  weights: Weights;
  subjects: { subject: string; byTerm: (number | null)[]; exams: number | null; assignments: number | null; ca: number | null; papers: number; score: number | null; cumulative: number | null; grade: string; remark: string }[];
  termAverage: number | null;
  cumulativeAverage: number | null;
  termAverages: (number | null)[];
  position: { place: number; outOf: number } | null;
  grade: string;
  remark: string;
  generatedAt: string;
}

const REMARKS: [number, string][] = [[75, "Excellent"], [65, "Very good"], [55, "Good"], [45, "Fair"], [0, "Needs more effort"]];
const remarkFor = (n: number | null) => (n === null ? "No work yet" : REMARKS.find(([min]) => n >= min)![1]);

/**
 * The report card of one student for one term. The second-term card shows first-term scores beside
 * it and the third-term card shows all three, with a running session average.
 */
export async function reportCard(schoolId: string, userId: string, termIndex?: number): Promise<ReportCard> {
  const db = getDb();
  const [st] = await db
    .select({ id: users.id, firstName: users.firstName, lastName: users.lastName, studentNumber: students.studentNumber, classId: students.classId, className: classes.name, department: departments.name })
    .from(users)
    .innerJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .leftJoin(departments, eq(departments.id, students.departmentId))
    .where(and(eq(users.id, userId), eq(users.schoolId, schoolId)));
  if (!st) throw new AppError("NOT_FOUND", "Student not found.");
  const cal = await termWindows(schoolId);
  const current = Math.max(0, cal.terms.findIndex((t) => t.name === cal.currentTerm));
  const idx = Number.isInteger(termIndex) && termIndex! >= 0 && termIndex! < cal.terms.length ? termIndex! : current;
  const upTo = cal.terms.slice(0, idx + 1);
  const perTerm = await Promise.all(upTo.map((t) => subjectScores(userId, t.start, t.end)));
  const { scale } = await getSetting(schoolId, "grading");
  const lc = await getSetting(schoolId, "learning");
  const weights: Weights = { assignment: lc.weightAssignment, ca: lc.weightCa, exam: lc.weightExam };
  const ids = [...new Set(perTerm.flatMap((m) => [...m.keys()]))];
  const subjectsOut = ids
    .map((sid) => {
      const byTerm = perTerm.map((m) => {
        const x = m.get(sid);
        return x ? termScore(x.exams, x.assignments, x.ca, weights) : null;
      });
      const now = perTerm[idx].get(sid);
      const score = byTerm[idx];
      const done = byTerm.filter((v): v is number => v !== null);
      const cumulative = mean(done);
      const basis = cumulative ?? score;
      return { subject: (now ?? perTerm.find((m) => m.get(sid))!.get(sid)!).subject, byTerm: byTerm.map((v) => (v === null ? null : round1(v))), exams: now?.exams == null ? null : round1(now.exams), assignments: now?.assignments == null ? null : round1(now.assignments), ca: now?.ca == null ? null : round1(now.ca), papers: now?.papers ?? 0, score: score === null ? null : round1(score), cumulative: cumulative === null ? null : round1(cumulative), grade: basis === null ? "—" : gradeFor(basis, scale).grade, remark: remarkFor(basis) };
    })
    .sort((a, b) => a.subject.localeCompare(b.subject));
  const termAverages = upTo.map((_, i) => {
    const v = mean(subjectsOut.map((s) => s.byTerm[i]).filter((x): x is number => x !== null));
    return v === null ? null : round1(v);
  });
  const termAverage = termAverages[idx];
  const cum = mean(termAverages.filter((x): x is number => x !== null));
  const cumulativeAverage = cum === null ? null : round1(cum);
  const overall = cumulativeAverage ?? termAverage;
  // Position in class for this term, among classmates who have at least one released result in it.
  let position: ReportCard["position"] = null;
  if (st.classId && termAverage !== null) {
    const ranks = await classRanking(schoolId, st.classId, upTo[idx].start, upTo[idx].end);
    const at = ranks.findIndex((r) => r.userId === userId);
    if (at >= 0) position = { place: ranks.filter((r) => r.average > ranks[at].average).length + 1, outOf: ranks.length };
  }
  return { student: { id: st.id, name: `${st.firstName} ${st.lastName}`.trim(), studentNumber: st.studentNumber, className: st.className, department: st.department, classId: st.classId }, session: cal.session, term: upTo[idx], terms: upTo, weights, subjects: subjectsOut, termAverage, cumulativeAverage, termAverages, position, grade: overall === null ? "—" : gradeFor(overall, scale).grade, remark: remarkFor(overall), generatedAt: new Date().toISOString() };
}

/** Classmates ranked by the mean of their subject averages in released examinations. School accounts are left out. */
export async function classRanking(schoolId: string, classId: string, start: Date, end: Date, subjectId?: string) {
  const r = await rows<{ user_id: string; name: string; student_number: string; average: number; papers: number }>(sql`
    SELECT t.user_id, u.first_name || ' ' || u.last_name AS name, st.student_number, avg(t.avg)::float AS average, sum(t.papers)::int AS papers FROM (
      SELECT r.user_id, e.subject_id, avg(r.percentage) AS avg, count(*) AS papers
      FROM results r JOIN examinations e ON e.id = r.examination_id
      WHERE r.school_id = ${schoolId} AND NOT r.is_voided AND r.released_at IS NOT NULL AND r.created_at >= ${start} AND r.created_at <= ${end}
        ${subjectId ? sql`AND e.subject_id = ${subjectId}` : sql``}
      GROUP BY r.user_id, e.subject_id
    ) t JOIN students st ON st.user_id = t.user_id AND st.class_id = ${classId} AND st.account_kind = 'STUDENT'
    JOIN users u ON u.id = t.user_id AND u.deleted_at IS NULL AND u.status = 'ACTIVE'
    GROUP BY t.user_id, u.first_name, u.last_name, st.student_number ORDER BY average DESC, papers DESC`);
  return r.map((x) => ({ userId: x.user_id, name: x.name.trim(), studentNumber: x.student_number, average: round1(x.average), papers: x.papers }));
}

/* ------------------------------------------------------------------ awards */

const periodOf = async (schoolId: string, term: string | null) => {
  const cal = await termWindows(schoolId);
  if (!term) return { session: cal.session, term: null, start: cal.terms[0].start, end: cal.terms[cal.terms.length - 1].end };
  const t = cal.terms.find((x) => x.name === term);
  if (!t) throw new AppError("VALIDATION", "Choose a term.");
  return { session: cal.session, term: t.name, start: t.start, end: t.end };
};

/**
 * Works out the winners for a term (or the whole session when `term` is null): the best student of
 * every class, and the best in every subject of every class. Unpublished winners of the same period
 * are replaced; a reward already written for a winner who wins again is kept.
 */
export async function computeAwards(actor: Actor, term: string | null, ctx: ReqCtx) {
  const db = getDb();
  const p = await periodOf(actor.schoolId, term);
  const periodCond = and(eq(awards.schoolId, actor.schoolId), eq(awards.session, p.session), term ? eq(awards.term, term) : sql`${awards.term} IS NULL`);
  const before = await db.select().from(awards).where(periodCond);
  if (before.some((a) => a.publishedAt)) throw new AppError("CONFLICT", "The winners of this period have already been announced. Awards that are published are not recalculated.");
  const keep = new Map(before.map((a) => [`${a.scope}:${a.classId}:${a.subjectId ?? ""}:${a.userId}`, a.reward]));
  const cls = (await db.select({ id: classes.id }).from(classes).where(eq(classes.schoolId, actor.schoolId))).map((c) => c.id);
  const subs = await rows<{ class_id: string; subject_id: string }>(sql`
    SELECT DISTINCT st.class_id, e.subject_id FROM results r JOIN examinations e ON e.id = r.examination_id JOIN students st ON st.user_id = r.user_id
    WHERE r.school_id = ${actor.schoolId} AND NOT r.is_voided AND r.released_at IS NOT NULL AND r.created_at >= ${p.start} AND r.created_at <= ${p.end} AND st.class_id IS NOT NULL`);
  const out: (typeof awards.$inferInsert)[] = [];
  const add = (scope: "CLASS" | "SUBJECT", classId: string, subjectId: string | null, ranked: Awaited<ReturnType<typeof classRanking>>) => {
    if (!ranked.length) return;
    // Everyone level on the top score shares first place.
    for (const w of ranked.filter((r) => r.average === ranked[0].average)) out.push({ schoolId: actor.schoolId, session: p.session, term: p.term, scope, classId, subjectId, userId: w.userId, position: 1, average: w.average, papers: w.papers, reward: keep.get(`${scope}:${classId}:${subjectId ?? ""}:${w.userId}`) ?? null, createdBy: actor.id });
  };
  for (const classId of cls) {
    add("CLASS", classId, null, await classRanking(actor.schoolId, classId, p.start, p.end));
    for (const s of subs.filter((x) => x.class_id === classId)) add("SUBJECT", classId, s.subject_id, await classRanking(actor.schoolId, classId, p.start, p.end, s.subject_id));
  }
  await db.transaction(async (tx) => {
    await tx.delete(awards).where(periodCond);
    for (let i = 0; i < out.length; i += 200) await tx.insert(awards).values(out.slice(i, i + 200));
  });
  await audit({ actor, action: "awards.computed", entityType: "award", summary: `${out.length} award(s) worked out for ${p.term ?? "the session"} ${p.session}` }, ctx);
  return { count: out.length, session: p.session, term: p.term };
}

export async function setAwardReward(actor: Actor, id: string, reward: string) {
  const [a] = await getDb().update(awards).set({ reward: reward.trim().slice(0, 200) || null }).where(and(eq(awards.id, id), eq(awards.schoolId, actor.schoolId))).returning({ id: awards.id });
  if (!a) throw new AppError("NOT_FOUND", "Award not found.");
}

/** Announces the winners of a period: they appear on the students' Rewards page and each winner is told. */
export async function publishAwards(actor: Actor, term: string | null, ctx: ReqCtx) {
  const db = getDb();
  const p = await periodOf(actor.schoolId, term);
  const done = await db.update(awards).set({ publishedAt: new Date() }).where(and(eq(awards.schoolId, actor.schoolId), eq(awards.session, p.session), term ? eq(awards.term, term) : sql`${awards.term} IS NULL`, sql`${awards.publishedAt} IS NULL`)).returning();
  if (!done.length) throw new AppError("CONFLICT", "There is nothing new to announce. Work out the winners first.");
  for (const uid of new Set(done.map((d) => d.userId))) {
    const n = done.filter((d) => d.userId === uid).length;
    await notifyUser({ schoolId: actor.schoolId, userId: uid, category: "RESULT", title: "Congratulations! You won an award", body: `You have ${n} award${n === 1 ? "" : "s"} for ${p.term ?? "the session"} ${p.session}. Open Rewards & Loyalty to see them.`, link: "/student/rewards" });
    await db.insert(loyaltyPoints).values(done.filter((d) => d.userId === uid).map((d) => ({ schoolId: actor.schoolId, userId: uid, points: 50, reason: "Award won", ref: `award:${d.id}` }))).onConflictDoNothing();
  }
  await audit({ actor, action: "awards.published", entityType: "award", summary: `${done.length} award(s) announced for ${p.term ?? "the session"} ${p.session}` }, ctx);
  return { count: done.length };
}

export async function listAwards(schoolId: string, f: { term?: string | null; publishedOnly?: boolean; classId?: string; userId?: string; session?: string }) {
  const cal = await termWindows(schoolId);
  const db = getDb();
  const conds = [eq(awards.schoolId, schoolId)];
  if (!f.userId) conds.push(eq(awards.session, f.session ?? cal.session));
  if (f.term !== undefined) conds.push(f.term ? eq(awards.term, f.term) : sql`${awards.term} IS NULL`);
  if (f.publishedOnly) conds.push(sql`${awards.publishedAt} IS NOT NULL`);
  if (f.classId) conds.push(eq(awards.classId, f.classId));
  if (f.userId) conds.push(eq(awards.userId, f.userId));
  return db
    .select({ a: awards, name: sql<string>`${users.firstName} || ' ' || ${users.lastName}`, studentNumber: students.studentNumber, className: classes.name, subject: subjects.name })
    .from(awards)
    .innerJoin(users, eq(users.id, awards.userId))
    .leftJoin(students, eq(students.userId, users.id))
    .innerJoin(classes, eq(classes.id, awards.classId))
    .leftJoin(subjects, eq(subjects.id, awards.subjectId))
    .where(and(...conds))
    .orderBy(classes.sortOrder, awards.scope, subjects.name)
    .limit(2000);
}

/* ----------------------------------------------------------------- loyalty */

export const LOYALTY_LEVELS = [
  { name: "Starter", min: 0, colour: "#64748b" },
  { name: "Bronze", min: 100, colour: "#b45309" },
  { name: "Silver", min: 300, colour: "#64748b" },
  { name: "Gold", min: 700, colour: "#c8a02f" },
  { name: "Platinum", min: 1500, colour: "#1d4ed8" },
  { name: "Diamond", min: 3000, colour: "#7c3aed" },
] as const;

export const LOYALTY_RULES = [
  { points: 10, what: "Every examination or test you finish" },
  { points: 10, what: "Extra, when you score 70% or more" },
  { points: 5, what: "Every lesson you complete in the Study Centre" },
  { points: 5, what: "Every assignment or classwork you submit" },
  { points: 3, what: "Every e-book chapter you finish reading" },
  { points: 5, what: "Precious PS Study Centre: every unit's Classwork and every Assignment you submit" },
  { points: 10, what: "Precious PS Study Centre: every Term Review CBT you finish, and 10 more when you score 70% or more" },
  { points: 50, what: "Every award you win" },
];

/** Brings a student's points up to date from work already recorded. Each piece of work counts once. */
export async function syncLoyalty(schoolId: string, userId: string) {
  const db = getDb();
  await db.execute(sql`INSERT INTO loyalty_points (school_id, user_id, points, reason, ref)
    SELECT ${schoolId}::uuid, r.user_id, 10, 'Examination finished', 'result:' || r.id FROM results r WHERE r.user_id = ${userId} AND NOT r.is_voided AND r.released_at IS NOT NULL ON CONFLICT DO NOTHING`);
  await db.execute(sql`INSERT INTO loyalty_points (school_id, user_id, points, reason, ref)
    SELECT ${schoolId}::uuid, r.user_id, 10, 'Scored 70% or more', 'high:' || r.id FROM results r WHERE r.user_id = ${userId} AND NOT r.is_voided AND r.released_at IS NOT NULL AND r.percentage >= 70 ON CONFLICT DO NOTHING`);
  await db.execute(sql`INSERT INTO loyalty_points (school_id, user_id, points, reason, ref)
    SELECT ${schoolId}::uuid, lp.user_id, 5, 'Lesson completed', 'lesson:' || lp.lesson_id FROM learning_progress lp WHERE lp.user_id = ${userId} AND lp.status = 'COMPLETED' ON CONFLICT DO NOTHING`);
  await db.execute(sql`INSERT INTO loyalty_points (school_id, user_id, points, reason, ref)
    SELECT DISTINCT ${schoolId}::uuid, at.user_id, 5, 'Assignment submitted', 'work:' || at.assignment_id FROM assignment_attempts at WHERE at.user_id = ${userId} ON CONFLICT DO NOTHING`);
  await db.execute(sql`INSERT INTO loyalty_points (school_id, user_id, points, reason, ref)
    SELECT ${schoolId}::uuid, er.user_id, 3, 'E-book chapter read', 'ebook:' || er.topic_id FROM ebook_reads er WHERE er.user_id = ${userId} ON CONFLICT DO NOTHING`);
  // Precious PS Study Centre: the first submission of each piece of work earns the points.
  await db.execute(sql`INSERT INTO loyalty_points (school_id, user_id, points, reason, ref)
    SELECT DISTINCT ${schoolId}::uuid, fa.user_id, 5, CASE fa.kind WHEN 'CLASSWORK' THEN 'Precious PS Study Centre classwork' ELSE 'Precious PS Study Centre assignment' END, 'fsc:' || lower(fa.kind) || ':' || fa.unit_id
    FROM fsc_attempts fa WHERE fa.user_id = ${userId} AND fa.unit_id IS NOT NULL ON CONFLICT DO NOTHING`);
  await db.execute(sql`INSERT INTO loyalty_points (school_id, user_id, points, reason, ref)
    SELECT DISTINCT ${schoolId}::uuid, fa.user_id, 10, 'Precious PS Study Centre Term Review', 'fsc:review:' || fa.book_id
    FROM fsc_attempts fa WHERE fa.user_id = ${userId} AND fa.kind = 'REVIEW' ON CONFLICT DO NOTHING`);
  await db.execute(sql`INSERT INTO loyalty_points (school_id, user_id, points, reason, ref)
    SELECT ${schoolId}::uuid, f.user_id, 10, 'Precious PS Study Centre: 70% or more', 'fsc:high:' || f.book_id
    FROM (SELECT DISTINCT ON (book_id) user_id, book_id, percentage FROM fsc_attempts WHERE user_id = ${userId} AND kind = 'REVIEW' ORDER BY book_id, created_at) f
    WHERE f.percentage >= 70 ON CONFLICT DO NOTHING`);
  const [{ total }] = await db.select({ total: sql<number>`coalesce(sum(${loyaltyPoints.points}), 0)::int` }).from(loyaltyPoints).where(eq(loyaltyPoints.userId, userId));
  const level = [...LOYALTY_LEVELS].reverse().find((l) => total >= l.min)!;
  const next = LOYALTY_LEVELS.find((l) => l.min > total) ?? null;
  const recent = await db.select({ points: loyaltyPoints.points, reason: loyaltyPoints.reason, createdAt: loyaltyPoints.createdAt }).from(loyaltyPoints).where(eq(loyaltyPoints.userId, userId)).orderBy(desc(loyaltyPoints.createdAt)).limit(8);
  return { total, level, next, recent };
}

export async function loyaltyLeaders(schoolId: string, classId?: string | null, limit = 10) {
  const r = await rows<{ user_id: string; name: string; class: string | null; points: number }>(sql`
    SELECT lp.user_id, u.first_name || ' ' || u.last_name AS name, c.name AS class, sum(lp.points)::int AS points
    FROM loyalty_points lp JOIN users u ON u.id = lp.user_id AND u.deleted_at IS NULL JOIN students st ON st.user_id = u.id AND st.account_kind = 'STUDENT' LEFT JOIN classes c ON c.id = st.class_id
    WHERE lp.school_id = ${schoolId} ${classId ? sql`AND st.class_id = ${classId}` : sql``}
    GROUP BY lp.user_id, u.first_name, u.last_name, c.name ORDER BY points DESC LIMIT ${limit}`);
  return r.map((x) => ({ userId: x.user_id, name: x.name.trim(), className: x.class, points: x.points }));
}

/* ------------------------------------------------------------ certificates */

/**
 * The certificate for one result. It is issued the first time it is opened, provided the result is
 * released, not voided and at or above the school's minimum percentage.
 */
export async function certificateFor(viewer: { id: string; schoolId: string; staff: boolean }, resultId: string) {
  if (!/^[0-9a-f-]{36}$/i.test(resultId)) throw new AppError("NOT_FOUND", "Certificate not found.");
  const db = getDb();
  const [r] = await rows<{ id: string; user_id: string; percentage: number; grade: string; is_voided: boolean; released_at: Date | null; created_at: Date; verification_code: string; exam: string; subject: string; exam_type: string; name: string; student_number: string | null; class: string | null }>(sql`
    SELECT r.id, r.user_id, r.percentage::float, r.grade, r.is_voided, r.released_at, r.created_at, r.verification_code, e.title AS exam, s.name AS subject, e.exam_type,
           u.first_name || ' ' || u.last_name AS name, st.student_number, c.name AS class
    FROM results r JOIN examinations e ON e.id = r.examination_id JOIN subjects s ON s.id = e.subject_id JOIN users u ON u.id = r.user_id
    LEFT JOIN students st ON st.user_id = u.id LEFT JOIN classes c ON c.id = st.class_id
    WHERE r.id = ${resultId} AND r.school_id = ${viewer.schoolId}`);
  if (!r || (!viewer.staff && r.user_id !== viewer.id)) throw new AppError("NOT_FOUND", "Certificate not found.");
  const cfg = await getSetting(viewer.schoolId, "certificates");
  if (r.is_voided || !r.released_at) throw new AppError("FORBIDDEN", "This result has not been released, so it has no certificate.");
  if (r.percentage < cfg.minimumPercentage) throw new AppError("FORBIDDEN", `A certificate is given for a score of ${cfg.minimumPercentage}% or more.`);
  let [c] = await db.select().from(certificates).where(eq(certificates.resultId, resultId));
  if (!c) {
    const year = new Date(r.created_at).getFullYear();
    for (let attempt = 0; attempt < 5 && !c; attempt++) {
      const [{ n }] = await db.select({ n: sql<number>`count(*)::int` }).from(certificates).where(eq(certificates.schoolId, viewer.schoolId));
      const number = `${cfg.numberPrefix}-${year}-${String(n + 1 + attempt).padStart(6, "0")}`;
      [c] = await db.insert(certificates).values({ schoolId: viewer.schoolId, certificateNumber: number, resultId, userId: r.user_id }).onConflictDoNothing().returning();
      if (!c) [c] = await db.select().from(certificates).where(eq(certificates.resultId, resultId));
    }
  }
  if (!c || c.revokedAt) throw new AppError("FORBIDDEN", "This certificate is not available.");
  return { number: c.certificateNumber, issuedAt: c.issuedAt, name: r.name.trim(), studentNumber: r.student_number, className: r.class, exam: r.exam, subject: r.subject, percentage: Math.round(r.percentage), grade: r.grade, date: r.created_at, verificationCode: r.verification_code, minimum: cfg.minimumPercentage };
}

/** Results of a student that qualify for a certificate. */
export async function certificateEligible(schoolId: string, userId: string) {
  const cfg = await getSetting(schoolId, "certificates");
  const list = await getDb().select({ id: results.id }).from(results).where(and(eq(results.userId, userId), eq(results.isVoided, false), sql`${results.releasedAt} IS NOT NULL`, sql`${results.percentage} >= ${cfg.minimumPercentage}`));
  return new Set(list.map((x) => x.id));
}

export async function awardWinnersCount(schoolId: string, ids: string[]) {
  if (!ids.length) return 0;
  const [{ n }] = await getDb().select({ n: sql<number>`count(*)::int` }).from(awards).where(and(eq(awards.schoolId, schoolId), inArray(awards.userId, ids)));
  return n;
}
