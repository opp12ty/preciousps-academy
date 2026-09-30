import { sql } from "drizzle-orm";
import { can } from "@/core/permissions";
import { getDb } from "../db";
import type { Actor } from "../audit";

export interface SearchHit {
  type: "Student" | "Administrator" | "Question" | "Exam" | "Result" | "Access code" | "Lesson" | "Assignment" | "Resource";
  id: string;
  title: string;
  subtitle?: string;
  href: string;
}

/** Permission-aware global search (§78): each entity is only searched if the actor may see it. */
export async function globalSearch(actor: Actor, q: string): Promise<SearchHit[]> {
  const term = q.trim();
  if (term.length < 2) return [];
  const like = `%${term.replace(/[%_]/g, (m) => `\\${m}`)}%`;
  const db = getDb();
  const s = actor.schoolId;
  const hits: SearchHit[] = [];
  const run = async <T extends Record<string, unknown>>(query: ReturnType<typeof sql>) => (await db.execute<T>(query)).rows;

  const tasks: Promise<void>[] = [];
  if (can(actor, "students.view")) {
    tasks.push(
      run<{ id: string; name: string; email: string; num: string }>(sql`
        SELECT u.id, u.first_name || ' ' || u.last_name AS name, u.email, st.student_number AS num FROM users u JOIN students st ON st.user_id = u.id
        WHERE u.school_id = ${s} AND u.deleted_at IS NULL AND (u.first_name || ' ' || u.last_name ILIKE ${like} OR u.email ILIKE ${like} OR st.student_number ILIKE ${like} OR u.phone ILIKE ${like})
        LIMIT 6`).then((r) => r.forEach((x) => hits.push({ type: "Student", id: x.id, title: x.name, subtitle: `${x.num} · ${x.email}`, href: `/admin/students/${x.id}` }))),
    );
  }
  if (actor.userType === "SUPER_ADMIN") {
    tasks.push(
      run<{ id: string; name: string; email: string; t: string }>(sql`
        SELECT id, first_name || ' ' || last_name AS name, email, user_type::text AS t FROM users
        WHERE school_id = ${s} AND user_type IN ('ADMIN','TEACHER') AND deleted_at IS NULL AND (first_name || ' ' || last_name ILIKE ${like} OR email ILIKE ${like}) LIMIT 4`).then((r) =>
        r.forEach((x) => hits.push({ type: "Administrator", id: x.id, title: x.name, subtitle: x.email, href: `/admin/administrators#${x.id}` })),
      ),
    );
  }
  if (can(actor, "questions.view")) {
    tasks.push(
      run<{ id: string; ref: string; stem: string; status: string }>(sql`
        SELECT id, ref, left(stem, 90) AS stem, status::text FROM questions WHERE school_id = ${s} AND (ref ILIKE ${like} OR stem ILIKE ${like}) ORDER BY created_at DESC LIMIT 6`).then((r) =>
        r.forEach((x) => hits.push({ type: "Question", id: x.id, title: `${x.ref} — ${x.stem}`, subtitle: x.status, href: `/admin/questions/${x.id}` })),
      ),
    );
  }
  if (can(actor, "exams.view")) {
    tasks.push(
      run<{ id: string; title: string; status: string }>(sql`SELECT id, title, status::text FROM examinations WHERE school_id = ${s} AND title ILIKE ${like} LIMIT 5`).then((r) =>
        r.forEach((x) => hits.push({ type: "Exam", id: x.id, title: x.title, subtitle: x.status, href: `/admin/examinations/${x.id}` })),
      ),
    );
  }
  if (can(actor, "results.view")) {
    tasks.push(
      run<{ id: string; student: string; exam: string; pct: number }>(sql`
        SELECT r.id, u.first_name || ' ' || u.last_name AS student, e.title AS exam, r.percentage::float AS pct FROM results r JOIN users u ON u.id = r.user_id JOIN examinations e ON e.id = r.examination_id
        WHERE r.school_id = ${s} AND (u.first_name || ' ' || u.last_name ILIKE ${like} OR e.title ILIKE ${like} OR r.verification_code ILIKE ${like}) ORDER BY r.created_at DESC LIMIT 5`).then((r) =>
        r.forEach((x) => hits.push({ type: "Result", id: x.id, title: `${x.student} — ${x.exam}`, subtitle: `${x.pct}%`, href: `/admin/results/${x.id}` })),
      ),
    );
  }
  if (can(actor, "codes.view")) {
    tasks.push(
      run<{ id: string; suffix: string; status: string; email: string | null }>(sql`
        SELECT c.id, c.code_suffix AS suffix, c.status::text, u.email FROM activation_codes c LEFT JOIN users u ON u.id = c.activated_by
        WHERE c.school_id = ${s} AND (c.code_suffix ILIKE ${like} OR u.email ILIKE ${like}) LIMIT 5`).then((r) =>
        r.forEach((x) => hits.push({ type: "Access code", id: x.id, title: `…${x.suffix}`, subtitle: `${x.status}${x.email ? ` · ${x.email}` : ""}`, href: `/admin/access-codes?search=${x.suffix}` })),
      ),
    );
  }
  if (can(actor, "curriculum.manage")) {
    tasks.push(
      run<{ id: string; title: string; status: string }>(sql`SELECT id, title, status::text FROM lessons WHERE school_id = ${s} AND title ILIKE ${like} LIMIT 5`).then((r) =>
        r.forEach((x) => hits.push({ type: "Lesson", id: x.id, title: x.title, subtitle: x.status, href: `/admin/lessons/${x.id}` })),
      ),
    );
  }
  if (can(actor, "assignments.manage") || can(actor, "curriculum.manage")) {
    tasks.push(
      run<{ id: string; title: string; kind: string }>(sql`SELECT id, title, kind FROM assignments WHERE school_id = ${s} AND title ILIKE ${like} LIMIT 5`).then((r) =>
        r.forEach((x) => hits.push({ type: "Assignment", id: x.id, title: x.title, subtitle: x.kind, href: `/admin/assignments/${x.id}` })),
      ),
    );
  }
  if (can(actor, "resources.manage")) {
    tasks.push(
      run<{ id: string; title: string; platform: string | null }>(sql`SELECT id, title, platform FROM resource_links WHERE school_id = ${s} AND title ILIKE ${like} LIMIT 5`).then((r) =>
        r.forEach((x) => hits.push({ type: "Resource", id: x.id, title: x.title, subtitle: x.platform ?? undefined, href: `/admin/resources#${x.id}` })),
      ),
    );
  }
  await Promise.all(tasks);
  return hits;
}
