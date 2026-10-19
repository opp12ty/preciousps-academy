import { and, asc, eq, gte, inArray, isNull, lt, sql } from "drizzle-orm";
import * as XLSX from "xlsx";
import { getDb } from "../db";
import { classes, departments, examinations, results, students, subjects, terms, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { getSetting } from "../settings";
import { minutesForPaper, poolSize } from "./exams";

/**
 * Precious PS Examinations: one termly revision paper per class (Basic 1 to SS 3) and term, drawn evenly
 * from every subject the class offers, medium questions first. Each attempt draws a fresh set. The
 * first attempt of each learner in the academic session decides the First, Second and Third places
 * of the class. Sizes are set by the Super Admin in Settings → Examination; every paper stays
 * editable in Examinations.
 */

export const PreciousPS_SUBJECT_CODE = "FDX";
const TERM_NAMES = ["First Term", "Second Term", "Third Term"];

/** The academic session a date falls in (sessions start on 1 September), e.g. 2026/2027. */
export function sessionOf(d = new Date()) {
  const y = d.getUTCMonth() >= 8 ? d.getUTCFullYear() : d.getUTCFullYear() - 1;
  return { label: `${y}/${y + 1}`, start: new Date(Date.UTC(y, 8, 1)), end: new Date(Date.UTC(y + 1, 8, 1)), year: y };
}
export const sessionFromLabel = (label: string | undefined) => {
  const y = Number(label?.slice(0, 4));
  return Number.isInteger(y) && y > 2000 && y < 2200 ? sessionOf(new Date(Date.UTC(y, 9, 1))) : sessionOf();
};

const sizeFor = (code: string, cfg: { fodanLowerPrimary: number; fodanUpperPrimary: number; fodanJunior: number; fodanSenior: number }) => {
  const c = code.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (/^BASIC[123]$/.test(c)) return { size: cfg.fodanLowerPrimary, perQuestion: 1.5 };
  if (/^BASIC[456]$/.test(c)) return { size: cfg.fodanUpperPrimary, perQuestion: 1.2 };
  if (c.startsWith("JSS")) return { size: cfg.fodanJunior, perQuestion: 1 };
  return { size: cfg.fodanSenior, perQuestion: 1 };
};

/** The hidden subject that Precious PS Examinations are filed under ("All subjects"). */
async function fodanSubject(schoolId: string) {
  const db = getDb();
  const [have] = await db.select({ id: subjects.id }).from(subjects).where(and(eq(subjects.schoolId, schoolId), eq(subjects.code, PreciousPS_SUBJECT_CODE)));
  if (have) return have.id;
  // Archived so it never appears as a subject to study; examinations still show its name.
  const [row] = await db.insert(subjects).values({ schoolId, code: PreciousPS_SUBJECT_CODE, name: "All subjects", description: "Precious PS Examinations across every subject of a class.", sortOrder: 999, archivedAt: new Date() }).onConflictDoNothing().returning({ id: subjects.id });
  return row?.id ?? (await db.select({ id: subjects.id }).from(subjects).where(and(eq(subjects.schoolId, schoolId), eq(subjects.code, PreciousPS_SUBJECT_CODE))))[0].id;
}

/**
 * Creates the Precious PS Examination for every class and term that is missing one, and keeps sizes in
 * step with the settings (papers whose count staff changed by hand keep theirs). Medium questions
 * are used first; hard ones join only when a class has too few medium questions for that term.
 */
export async function setupFodanExams(actor: Actor, ctx: ReqCtx) {
  const db = getDb();
  const cfg = await getSetting(actor.schoolId, "examination");
  const subjectId = await fodanSubject(actor.schoolId);
  const cls = await db.select().from(classes).where(and(eq(classes.schoolId, actor.schoolId), isNull(classes.archivedAt))).orderBy(asc(classes.sortOrder));
  const trs = await db.select().from(terms).where(and(eq(terms.schoolId, actor.schoolId), isNull(terms.archivedAt))).orderBy(asc(terms.sortOrder));
  const existing = await db.select().from(examinations).where(and(eq(examinations.schoolId, actor.schoolId), eq(examinations.examType, "PreciousPS_EXAM")));
  const byKey = new Map(existing.map((e) => [String((e.poolFilter as { fodanKey?: string } | null)?.fodanKey ?? ""), e]));
  const out = { created: 0, published: 0, resized: 0, empty: [] as string[] };
  for (const c of cls) {
    const { size, perQuestion } = sizeFor(c.code, cfg);
    for (const [i, t] of trs.slice(0, 3).entries()) {
      const key = `${c.code}-${i + 1}`;
      const name = `Precious PS Examination: ${c.name} ${TERM_NAMES[i]} Revision`;
      let exam = byKey.get(key);
      if (!exam) {
        const pool = { allSubjects: true, classIds: [c.id], termIds: [t.id], difficulties: ["MEDIUM"], standard: true, fodanKey: key };
        [exam] = await db
          .insert(examinations)
          .values({ schoolId: actor.schoolId, title: name, description: `Revision of ${TERM_NAMES[i]} across every subject of ${c.name}. Medium questions drawn at random; the best three in the class are named.`, subjectId, classId: c.id, level: c.level, examType: "PreciousPS_EXAM", questionCount: size, durationMinutes: minutesForPaper(size, perQuestion), maxAttempts: 2, passMark: 50, poolFilter: pool, status: "DRAFT", createdBy: actor.id })
          .returning();
        await audit({ actor, action: "exam.created", entityType: "examination", entityId: exam.id, summary: name }, ctx);
        out.created++;
      }
      const pf = (exam.poolFilter ?? {}) as { difficulties?: string[]; autoSize?: boolean };
      // Too few medium questions for the size: hard questions join (never easy ones).
      let available = await poolSize(exam, db);
      if (available < size && pf.difficulties?.length === 1) {
        const next = { ...(exam.poolFilter as object), difficulties: ["MEDIUM", "HARD"] };
        await db.update(examinations).set({ poolFilter: next }).where(eq(examinations.id, exam.id));
        exam = { ...exam, poolFilter: next };
        available = await poolSize(exam, db);
      }
      // Classes whose questions are all graded easy (e.g. Basic 1–2): the paper uses every difficulty.
      if (available < size && (exam.poolFilter as { difficulties?: string[] }).difficulties?.length) {
        const { difficulties: _drop, ...rest } = exam.poolFilter as { difficulties?: string[] };
        void _drop;
        await db.update(examinations).set({ poolFilter: rest }).where(eq(examinations.id, exam.id));
        exam = { ...exam, poolFilter: rest };
        available = await poolSize(exam, db);
      }
      if (!available) {
        out.empty.push(`${c.name} ${TERM_NAMES[i]}`);
        continue;
      }
      const wanted = Math.min(pf.autoSize === false ? exam.questionCount : size, available);
      const minutes = pf.autoSize === false ? minutesForPaper(wanted, exam.durationMinutes / exam.questionCount) : minutesForPaper(wanted, perQuestion);
      if (wanted !== exam.questionCount || minutes !== exam.durationMinutes) {
        await db.update(examinations).set({ questionCount: wanted, durationMinutes: minutes, updatedAt: new Date() }).where(eq(examinations.id, exam.id));
        out.resized++;
      }
      if (exam.status === "DRAFT") {
        await db.update(examinations).set({ status: "PUBLISHED", updatedAt: new Date() }).where(eq(examinations.id, exam.id));
        out.published++;
      }
    }
  }
  return out;
}

export interface Ranked { userId: string; name: string; studentNumber: string; percentage: number; score: number; total: number; timeUsedSec: number; position: number; takenAt: Date }

/** Ranks the first attempt of every learner (school accounts excluded). Ties share a place. */
function rank(rows: Omit<Ranked, "position">[]): Ranked[] {
  const sorted = rows.sort((a, b) => b.percentage - a.percentage || a.timeUsedSec - b.timeUsedSec || a.takenAt.getTime() - b.takenAt.getTime());
  let pos = 0;
  return sorted.map((r, i) => {
    if (i === 0 || r.percentage !== sorted[i - 1].percentage || r.timeUsedSec !== sorted[i - 1].timeUsedSec) pos = i + 1;
    return { ...r, position: pos };
  });
}

/** First, Second and Third (and the full order) in every class for each term and overall, for one session. */
export async function fodanRankings(schoolId: string, sessionLabel?: string, classId?: string) {
  const db = getDb();
  const session = sessionFromLabel(sessionLabel);
  const exams = await db
    .select({ e: examinations, className: classes.name, classOrder: classes.sortOrder })
    .from(examinations)
    .leftJoin(classes, eq(classes.id, examinations.classId))
    .where(and(eq(examinations.schoolId, schoolId), eq(examinations.examType, "PreciousPS_EXAM"), classId ? eq(examinations.classId, classId) : undefined))
    .orderBy(asc(classes.sortOrder));
  const ids = exams.map((x) => x.e.id);
  const rows = ids.length
    ? await db
        .select({ examId: results.examinationId, userId: results.userId, percentage: results.percentage, score: results.score, total: results.totalMarks, time: results.timeUsedSec, at: results.createdAt, first: users.firstName, last: users.lastName, num: students.studentNumber, kind: students.accountKind, attempt: results.attemptNumber })
        .from(results)
        .innerJoin(users, eq(users.id, results.userId))
        .innerJoin(students, eq(students.userId, results.userId))
        .where(and(inArray(results.examinationId, ids), eq(results.isVoided, false), gte(results.createdAt, session.start), lt(results.createdAt, session.end), isNull(users.deletedAt)))
        .orderBy(asc(results.createdAt))
    : [];
  // Each learner's first attempt in the session is the one that counts.
  const firsts = new Map<string, (typeof rows)[number]>();
  for (const r of rows) if (r.kind !== "SCHOOL" && !firsts.has(`${r.examId}|${r.userId}`)) firsts.set(`${r.examId}|${r.userId}`, r);
  const byClass = new Map<string, { className: string; order: number; terms: { term: number; examId: string; title: string; ranking: Ranked[] }[] }>();
  for (const x of exams) {
    const key = (x.e.poolFilter as { fodanKey?: string } | null)?.fodanKey;
    const term = Number(key?.split("-").pop() ?? 0);
    const classId = x.e.classId ?? "none";
    const g = byClass.get(classId) ?? { className: x.className ?? "All classes", order: x.classOrder ?? 999, terms: [] };
    const entries = [...firsts.values()].filter((r) => r.examId === x.e.id).map((r) => ({ userId: r.userId, name: `${r.first} ${r.last}`.trim(), studentNumber: r.num, percentage: Math.round(r.percentage * 10) / 10, score: r.score, total: r.total, timeUsedSec: r.time, takenAt: r.at }));
    g.terms.push({ term, examId: x.e.id, title: x.e.title, ranking: rank(entries) });
    byClass.set(classId, g);
  }
  const out = [...byClass.entries()].map(([classId, g]) => {
    // Overall: the three terms added together (a term not sat counts as 0), out of 300.
    const totals = new Map<string, Omit<Ranked, "position"> & { terms: number }>();
    for (const t of g.terms)
      for (const r of t.ranking) {
        const cur = totals.get(r.userId) ?? { ...r, percentage: 0, score: 0, total: 0, timeUsedSec: 0, terms: 0 };
        cur.percentage += r.percentage;
        cur.score += r.score;
        cur.total += r.total;
        cur.timeUsedSec += r.timeUsedSec;
        cur.terms++;
        totals.set(r.userId, cur);
      }
    const overall = rank([...totals.values()].map((r) => ({ ...r, percentage: Math.round((r.percentage / 3) * 10) / 10 }))).map((r) => ({ ...r, terms: totals.get(r.userId)!.terms }));
    return { classId, className: g.className, order: g.order, terms: g.terms.sort((a, b) => a.term - b.term), overall };
  });
  return { session: session.label, classes: out.sort((a, b) => a.order - b.order) };
}

/** Sessions that have Precious PS results, newest first (always including the current one). */
export async function fodanSessions(schoolId: string) {
  const rows = await getDb().execute<{ y: number }>(sql`
    SELECT DISTINCT (CASE WHEN extract(month FROM r.created_at) >= 9 THEN extract(year FROM r.created_at) ELSE extract(year FROM r.created_at) - 1 END)::int AS y
    FROM results r JOIN examinations e ON e.id = r.examination_id
    WHERE e.school_id = ${schoolId} AND e.exam_type = 'PreciousPS_EXAM'`);
  const years = new Set([sessionOf().year, ...rows.rows.map((r) => Number(r.y))]);
  return [...years].sort((a, b) => b - a).map((y) => `${y}/${y + 1}`);
}

/**
 * The score book: one workbook with every registered learner, every examination result, and the
 * Precious PS places for the session. Written fresh on each download, so it always includes the newest scores.
 */
export async function scoreBook(schoolId: string, sessionLabel?: string): Promise<{ buffer: Buffer; rows: number }> {
  const db = getDb();
  const learners = await db
    .select({ id: users.id, first: users.firstName, last: users.lastName, email: users.email, num: students.studentNumber, cls: classes.name, order: classes.sortOrder, dep: departments.name, kind: students.accountKind, registered: users.createdAt })
    .from(students)
    .innerJoin(users, eq(users.id, students.userId))
    .leftJoin(classes, eq(classes.id, students.classId))
    .leftJoin(departments, eq(departments.id, students.departmentId))
    .where(and(eq(students.schoolId, schoolId), isNull(users.deletedAt)))
    .orderBy(asc(classes.sortOrder), asc(users.lastName), asc(users.firstName));
  const all = await db
    .select({ userId: results.userId, title: examinations.title, type: examinations.examType, subject: subjects.name, score: results.score, total: results.totalMarks, pct: results.percentage, grade: results.grade, passed: results.passed, attempt: results.attemptNumber, time: results.timeUsedSec, voided: results.isVoided, at: results.createdAt })
    .from(results)
    .innerJoin(examinations, eq(examinations.id, results.examinationId))
    .innerJoin(subjects, eq(subjects.id, examinations.subjectId))
    .where(eq(results.schoolId, schoolId))
    .orderBy(asc(results.createdAt));
  const byUser = new Map<string, typeof all>();
  for (const r of all) byUser.set(r.userId, [...(byUser.get(r.userId) ?? []), r]);
  const wat = (d: Date) => d.toLocaleString("en-NG", { timeZone: "Africa/Lagos" });

  const summary = learners.map((l) => {
    const mine = (byUser.get(l.id) ?? []).filter((r) => !r.voided);
    const avg = mine.length ? Math.round((mine.reduce((s, r) => s + r.pct, 0) / mine.length) * 10) / 10 : "";
    return { "Student ID": l.num, Name: `${l.first} ${l.last}`.trim(), Class: l.cls ?? "", Department: l.dep ?? "", Account: l.kind === "SCHOOL" ? "School" : "Student", "Exams taken": mine.length, "Average %": avg, "Best %": mine.length ? Math.max(...mine.map((r) => Math.round(r.pct * 10) / 10)) : "", "Passed": mine.filter((r) => r.passed).length, "Last exam": mine.length ? wat(mine[mine.length - 1].at) : "", Email: l.email, Registered: wat(l.registered) };
  });
  const names = new Map(learners.map((l) => [l.id, l]));
  const scores = all.filter((r) => names.has(r.userId)).map((r) => {
    const l = names.get(r.userId)!;
    return { "Student ID": l.num, Name: `${l.first} ${l.last}`.trim(), Class: l.cls ?? "", Examination: r.title, Type: r.type.replace(/_/g, " "), Subject: r.subject, Score: r.score, "Out of": r.total, "%": Math.round(r.pct * 10) / 10, Grade: r.grade, Passed: r.passed ? "Yes" : "No", Attempt: r.attempt, "Time used (min)": Math.round(r.time / 6) / 10, Status: r.voided ? "Void" : "Valid", Date: wat(r.at) };
  });
  const ranks = await fodanRankings(schoolId, sessionLabel);
  const places: Record<string, unknown>[] = [];
  for (const c of ranks.classes) {
    for (const t of c.terms) for (const r of t.ranking) places.push({ Session: ranks.session, Class: c.className, Term: TERM_NAMES[t.term - 1] ?? "", Position: r.position, "Student ID": r.studentNumber, Name: r.name, "%": r.percentage, Score: `${r.score}/${r.total}` });
    for (const r of c.overall) places.push({ Session: ranks.session, Class: c.className, Term: "Overall (three terms)", Position: r.position, "Student ID": r.studentNumber, Name: r.name, "%": r.percentage, Score: `${r.terms} term(s) sat` });
  }
  const wb = XLSX.utils.book_new();
  const add = (rows: Record<string, unknown>[], name: string, empty: string) => {
    const ws = XLSX.utils.json_to_sheet(rows.length ? rows : [{ Info: empty }]);
    const keys = Object.keys(rows[0] ?? { Info: "" });
    ws["!cols"] = keys.map((k) => ({ wch: Math.min(48, Math.max(10, k.length + 2, ...rows.slice(0, 200).map((r) => String(r[k] ?? "").length + 1))) }));
    XLSX.utils.book_append_sheet(wb, ws, name);
  };
  add(summary, "Students", "No registered students yet.");
  add(scores, "All scores", "No examination has been taken yet.");
  add(places, `Precious PS places ${ranks.session.replace("/", "-")}`, "No Precious PS Examination results in this session yet.");
  return { buffer: XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer, rows: scores.length };
}

/** The top three of one class for the dashboard: overall if anyone has sat a paper, shown as first name and initial. */
export async function classChampions(schoolId: string, classId: string | null, me: string) {
  if (!classId) return null;
  const { session, classes: list } = await fodanRankings(schoolId, undefined, classId);
  const c = list[0];
  if (!c) return null;
  const latest = [...c.terms].reverse().find((t) => t.ranking.length);
  const source = c.terms.filter((t) => t.ranking.length).length > 1 ? { title: `Overall, ${session}`, list: c.overall } : latest ? { title: `${TERM_NAMES[latest.term - 1] ?? ""} ${session}`, list: latest.ranking } : null;
  if (!source) return null;
  const short = (n: string) => { const [a, ...rest] = n.split(" "); return rest.length ? `${a} ${rest[rest.length - 1][0]}.` : a; };
  return { className: c.className, title: source.title, top: source.list.filter((r) => r.position <= 3).slice(0, 5).map((r) => ({ name: short(r.name), position: r.position, me: r.userId === me })) };
}
