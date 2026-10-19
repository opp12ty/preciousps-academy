import { sql } from "drizzle-orm";
import { ALL_PACKS } from "@/content/packs";
import { getDb } from "../db";

/**
 * Subject coverage, Primary 1 to SS 3: for every subject and class, how many topics, published lessons
 * and approved questions the school has, compared with the classes the NERDC scheme (as carried by the
 * built-in Precious PS content packs) expects. Used by the backend "Subject coverage" page.
 */
export type CoverageState = "complete" | "partial" | "missing" | "extra" | "none";

export interface CoverageCell { topics: number; lessons: number; questions: number; expected: boolean; state: CoverageState }
export interface CoverageRow { subjectId: string; code: string; name: string; cells: Record<string, CoverageCell> }

const expectedClasses = new Map<string, Set<string>>();
for (const p of ALL_PACKS) {
  const set = expectedClasses.get(p.code) ?? new Set<string>();
  p.classes.forEach((c) => set.add(c));
  expectedClasses.set(p.code, set);
}

/** Every subject should have at least this many approved questions per class, so tests are drawn at random from a real pool. */
export const MIN_QUESTIONS = 70;

const stateOf = (c: Omit<CoverageCell, "state">): CoverageState => {
  if (!c.topics) return c.expected ? "missing" : "none";
  const good = c.lessons >= Math.ceil(c.topics * 0.8) && c.questions >= Math.max(MIN_QUESTIONS, c.topics * 5);
  if (!c.expected) return good ? "extra" : "partial";
  return good ? "complete" : "partial";
};

export async function subjectCoverage(schoolId: string) {
  const db = getDb();
  const classes = (await db.execute<{ id: string; code: string; name: string; level: string }>(sql`SELECT id, code, name, level FROM classes WHERE school_id = ${schoolId} ORDER BY sort_order, code`)).rows;
  const subjects = (await db.execute<{ id: string; code: string; name: string }>(sql`SELECT id, code, name FROM subjects WHERE school_id = ${schoolId} AND archived_at IS NULL ORDER BY sort_order, name`)).rows;
  const counts = (
    await db.execute<{ subject_id: string; class_id: string; topics: number; lessons: number; questions: number }>(sql`
      SELECT t.subject_id, t.class_id,
        count(DISTINCT t.id)::int AS topics,
        (SELECT count(*)::int FROM lessons l JOIN topics t2 ON t2.id = l.topic_id WHERE t2.subject_id = t.subject_id AND t2.class_id = t.class_id AND l.status = 'PUBLISHED') AS lessons,
        (SELECT count(*)::int FROM questions q WHERE q.school_id = ${schoolId} AND q.subject_id = t.subject_id AND q.class_id = t.class_id AND q.status = 'APPROVED') AS questions
      FROM topics t
      WHERE t.school_id = ${schoolId} AND t.class_id IS NOT NULL
      GROUP BY t.subject_id, t.class_id`)
  ).rows;
  const byKey = new Map(counts.map((c) => [`${c.subject_id}|${c.class_id}`, c]));

  const rows: CoverageRow[] = subjects.map((s) => {
    const cells: Record<string, CoverageCell> = {};
    for (const c of classes) {
      const n = byKey.get(`${s.id}|${c.id}`);
      const base = { topics: n?.topics ?? 0, lessons: n?.lessons ?? 0, questions: n?.questions ?? 0, expected: expectedClasses.get(s.code)?.has(c.code) ?? false };
      cells[c.code] = { ...base, state: stateOf(base) };
    }
    return { subjectId: s.id, code: s.code, name: s.name, cells };
  });

  const needs = rows.flatMap((r) =>
    classes
      .filter((c) => r.cells[c.code].state === "missing" || r.cells[c.code].state === "partial")
      .map((c) => ({ subject: r.name, code: r.code, className: c.name, classCode: c.code, ...r.cells[c.code] })),
  );
  const totals = { complete: 0, partial: 0, missing: 0 };
  for (const r of rows) for (const c of Object.values(r.cells)) if (c.state === "complete" || c.state === "extra") totals.complete++;
  else if (c.state === "partial") totals.partial++;
  else if (c.state === "missing") totals.missing++;
  const active = rows.filter((r) => Object.values(r.cells).some((c) => c.state !== "none"));
  const empty = rows.filter((r) => !active.includes(r)).map((r) => ({ code: r.code, name: r.name }));
  return { classes, rows: active, needs, totals, empty };
}
