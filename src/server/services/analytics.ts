import { sql } from "drizzle-orm";
import { getDb } from "../db";

/**
 * Analytics are computed with set-based SQL on indexed columns so they scale
 * to large result tables without loading rows into memory (§40, §41, §77, §80).
 */

type Row = Record<string, unknown>;
const rows = async <T extends Row>(q: ReturnType<typeof sql>) => (await getDb().execute<T>(q)).rows;

export async function studentPerformance(userId: string) {
  const [overall] = await rows<{ exams: number; avg: number | null; best: number | null; passed: number }>(sql`
    SELECT count(*)::int AS exams, round(avg(percentage)::numeric,1)::float AS avg, max(percentage)::float AS best,
           count(*) FILTER (WHERE passed)::int AS passed
    FROM results WHERE user_id = ${userId} AND NOT is_voided AND released_at IS NOT NULL`);
  const bySubject = await rows<{ subject: string; exams: number; avg: number; best: number }>(sql`
    SELECT s.name AS subject, count(*)::int AS exams, round(avg(r.percentage)::numeric,1)::float AS avg, max(r.percentage)::float AS best
    FROM results r JOIN examinations e ON e.id = r.examination_id JOIN subjects s ON s.id = e.subject_id
    WHERE r.user_id = ${userId} AND NOT r.is_voided AND r.released_at IS NOT NULL
    GROUP BY s.name ORDER BY avg DESC`);
  const trend = await rows<{ date: string; percentage: number; title: string }>(sql`
    SELECT to_char(r.created_at AT TIME ZONE 'Africa/Lagos', 'YYYY-MM-DD') AS date, r.percentage::float AS percentage, e.title
    FROM results r JOIN examinations e ON e.id = r.examination_id
    WHERE r.user_id = ${userId} AND NOT r.is_voided AND r.released_at IS NOT NULL
    ORDER BY r.created_at ASC LIMIT 30`);
  // Topic accuracy from exam answers (released results only) + classwork feedback.
  const topics = await rows<{ topic: string; subject: string; answered: number; correct: number; accuracy: number; avg_ms: number | null }>(sql`
    SELECT t.title AS topic, s.name AS subject, count(*)::int AS answered,
           count(*) FILTER (WHERE aa.is_correct)::int AS correct,
           round(100.0 * count(*) FILTER (WHERE aa.is_correct) / NULLIF(count(*),0), 1)::float AS accuracy,
           round(avg(NULLIF(aa.response_ms,0)))::int AS avg_ms
    FROM attempt_answers aa
    JOIN attempt_questions aq ON aq.id = aa.attempt_question_id
    JOIN examination_attempts ea ON ea.id = aa.attempt_id
    JOIN results r ON r.attempt_id = ea.id AND NOT r.is_voided AND r.released_at IS NOT NULL
    JOIN topics t ON t.id = (aq.snapshot->>'topicId')::uuid
    JOIN subjects s ON s.id = t.subject_id
    WHERE ea.user_id = ${userId} AND aa.is_correct IS NOT NULL
    GROUP BY t.title, s.name HAVING count(*) >= 2
    ORDER BY accuracy ASC`);
  const [accuracy] = await rows<{ answered: number; correct: number; avg_ms: number | null }>(sql`
    SELECT count(*) FILTER (WHERE aa.is_correct IS NOT NULL)::int AS answered, count(*) FILTER (WHERE aa.is_correct)::int AS correct,
           round(avg(NULLIF(aa.response_ms,0)))::int AS avg_ms
    FROM attempt_answers aa JOIN examination_attempts ea ON ea.id = aa.attempt_id
    JOIN results r ON r.attempt_id = ea.id AND NOT r.is_voided AND r.released_at IS NOT NULL
    WHERE ea.user_id = ${userId}`);
  const [practice] = await rows<{ attempts: number; avg: number | null }>(sql`
    SELECT count(*)::int AS attempts, round(avg(percentage)::numeric,1)::float AS avg FROM learning_attempts WHERE user_id = ${userId}`);
  const [assign] = await rows<{ attempts: number; avg: number | null }>(sql`
    SELECT count(*)::int AS attempts, round(avg(percentage)::numeric,1)::float AS avg FROM assignment_attempts WHERE user_id = ${userId}`);
  const [study] = await rows<{ completed: number; started: number }>(sql`
    SELECT count(*) FILTER (WHERE status = 'COMPLETED')::int AS completed, count(*)::int AS started FROM learning_progress WHERE user_id = ${userId}`);
  const weak = topics.filter((t) => t.accuracy < 50).slice(0, 5);
  const strong = [...topics].sort((a, b) => b.accuracy - a.accuracy).filter((t) => t.accuracy >= 70).slice(0, 5);
  const improvement = trend.length >= 4 ? avgOf(trend.slice(-3).map((t) => t.percentage)) - avgOf(trend.slice(0, 3).map((t) => t.percentage)) : null;
  return {
    overall: { ...overall, accuracy: accuracy.answered ? Math.round((1000 * accuracy.correct) / accuracy.answered) / 10 : null, avgResponseMs: accuracy.avg_ms },
    bySubject,
    trend,
    topics,
    weak,
    strong,
    improvement: improvement === null ? null : Math.round(improvement * 10) / 10,
    practice,
    assignments: assign,
    study,
  };
}

const avgOf = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / Math.max(1, xs.length);

export async function recommendedPractice(userId: string, schoolId: string) {
  // Weakest topics first; fall back to lessons in progress.
  const weak = await rows<{ topic_id: string; topic: string; subject: string; accuracy: number }>(sql`
    SELECT t.id AS topic_id, t.title AS topic, s.name AS subject,
           round(100.0 * count(*) FILTER (WHERE aa.is_correct) / NULLIF(count(*),0), 1)::float AS accuracy
    FROM attempt_answers aa
    JOIN attempt_questions aq ON aq.id = aa.attempt_question_id
    JOIN examination_attempts ea ON ea.id = aa.attempt_id AND ea.user_id = ${userId}
    JOIN topics t ON t.id = (aq.snapshot->>'topicId')::uuid AND t.school_id = ${schoolId}
    JOIN subjects s ON s.id = t.subject_id
    WHERE aa.is_correct IS NOT NULL
    GROUP BY t.id, t.title, s.name HAVING count(*) >= 2
    ORDER BY accuracy ASC LIMIT 3`);
  const lessons = weak.length
    ? await rows<{ id: string; title: string; topic: string }>(sql`
        SELECT l.id, l.title, t.title AS topic FROM lessons l JOIN topics t ON t.id = l.topic_id
        WHERE l.status = 'PUBLISHED' AND l.topic_id IN (${sql.join(weak.map((w) => sql`${w.topic_id}::uuid`), sql`, `)})
        ORDER BY l.sort_order LIMIT 4`)
    : [];
  return { weak, lessons };
}

export async function adminDashboard(schoolId: string) {
  const [s] = await rows<Record<string, number>>(sql`
    SELECT
      (SELECT count(*)::int FROM users WHERE school_id = ${schoolId} AND user_type = 'STUDENT' AND deleted_at IS NULL) AS students,
      (SELECT count(DISTINCT user_id)::int FROM student_access_periods WHERE school_id = ${schoolId} AND status = 'ACTIVE' AND current_expires_at > now()) AS active_students,
      (SELECT count(DISTINCT p.user_id)::int FROM student_access_periods p WHERE p.school_id = ${schoolId}
         AND NOT EXISTS (SELECT 1 FROM student_access_periods q WHERE q.user_id = p.user_id AND q.status = 'ACTIVE' AND q.current_expires_at > now())) AS expired_students,
      (SELECT count(*)::int FROM activation_codes WHERE school_id = ${schoolId} AND status = 'ACTIVE') AS active_codes,
      (SELECT count(*)::int FROM activation_codes WHERE school_id = ${schoolId} AND status = 'UNUSED') AS unused_codes,
      (SELECT count(*)::int FROM activation_codes WHERE school_id = ${schoolId} AND status = 'EXPIRED') AS expired_codes,
      (SELECT count(*)::int FROM examinations WHERE school_id = ${schoolId} AND status = 'PUBLISHED') AS exams,
      (SELECT count(*)::int FROM questions WHERE school_id = ${schoolId} AND status = 'APPROVED') AS questions,
      (SELECT count(*)::int FROM questions WHERE school_id = ${schoolId} AND status = 'PENDING_REVIEW') AS pending_reviews,
      (SELECT count(*)::int FROM assignments WHERE school_id = ${schoolId} AND status = 'PUBLISHED') AS assignments,
      (SELECT count(*)::int FROM examination_attempts WHERE school_id = ${schoolId} AND status = 'IN_PROGRESS' AND deadline_at > now()) AS live_attempts,
      (SELECT coalesce(round(avg(percentage)::numeric,1),0)::float FROM results WHERE school_id = ${schoolId} AND NOT is_voided AND created_at > now() - interval '30 days') AS avg_30d,
      (SELECT count(*)::int FROM learning_progress lp JOIN lessons l ON l.id = lp.lesson_id WHERE l.school_id = ${schoolId} AND lp.updated_at > now() - interval '7 days') AS study_7d,
      (SELECT count(*)::int FROM security_events WHERE (school_id = ${schoolId} OR school_id IS NULL) AND severity IN ('HIGH','CRITICAL') AND resolved_at IS NULL AND created_at > now() - interval '7 days') AS security_alerts`);
  const daily = await rows<{ day: string; results: number; avg: number | null }>(sql`
    SELECT to_char(d.day, 'YYYY-MM-DD') AS day, count(r.id)::int AS results, round(avg(r.percentage)::numeric,1)::float AS avg
    FROM generate_series((now() AT TIME ZONE 'Africa/Lagos')::date - 13, (now() AT TIME ZONE 'Africa/Lagos')::date, interval '1 day') AS d(day)
    LEFT JOIN results r ON (r.created_at AT TIME ZONE 'Africa/Lagos')::date = d.day AND r.school_id = ${schoolId} AND NOT r.is_voided
    GROUP BY d.day ORDER BY d.day`);
  const gradeDist = await rows<{ grade: string; n: number }>(sql`
    SELECT grade, count(*)::int AS n FROM results WHERE school_id = ${schoolId} AND NOT is_voided GROUP BY grade ORDER BY grade`);
  const recentResults = await rows<{ id: string; student: string; exam: string; percentage: number; grade: string; created_at: Date }>(sql`
    SELECT r.id, u.first_name || ' ' || u.last_name AS student, e.title AS exam, r.percentage::float, r.grade, r.created_at
    FROM results r JOIN users u ON u.id = r.user_id JOIN examinations e ON e.id = r.examination_id
    WHERE r.school_id = ${schoolId} ORDER BY r.created_at DESC LIMIT 8`);
  const recentActivity = await rows<{ action: string; summary: string | null; created_at: Date; actor: string | null }>(sql`
    SELECT a.action, a.summary, a.created_at, u.first_name || ' ' || u.last_name AS actor
    FROM audit_logs a LEFT JOIN users u ON u.id = a.actor_id
    WHERE a.school_id = ${schoolId} AND a.actor_type IN ('SUPER_ADMIN','ADMIN','TEACHER')
    ORDER BY a.created_at DESC LIMIT 8`);
  return { stats: s, daily, gradeDist, recentResults, recentActivity };
}

export async function questionAnalytics(schoolId: string, limit = 50) {
  return rows<{ id: string; ref: string; stem: string; subject: string; attempted: number; correct_pct: number | null; unanswered_pct: number | null; flag_pct: number | null; avg_ms: number | null; status: string }>(sql`
    SELECT q.id, q.ref, left(q.stem, 140) AS stem, s.name AS subject, q.status, q.times_attempted AS attempted,
      round(100.0 * q.times_correct / NULLIF(q.times_attempted,0), 1)::float AS correct_pct,
      round(100.0 * q.times_unanswered / NULLIF(q.times_attempted,0), 1)::float AS unanswered_pct,
      round(100.0 * q.times_flagged / NULLIF(q.times_attempted,0), 1)::float AS flag_pct,
      (q.total_response_ms / NULLIF(q.times_attempted,0))::int AS avg_ms
    FROM questions q JOIN subjects s ON s.id = q.subject_id
    WHERE q.school_id = ${schoolId} AND q.times_attempted > 0
    ORDER BY (q.times_correct::float / NULLIF(q.times_attempted,0)) ASC NULLS LAST, q.times_attempted DESC
    LIMIT ${limit}`);
}

export type ReportKind =
  | "student-performance"
  | "exam-performance"
  | "subject-performance"
  | "department-performance"
  | "question-performance"
  | "learning-progress"
  | "assignment-performance"
  | "code-utilisation"
  | "expired-accounts"
  | "active-students"
  | "admin-activity"
  | "security-activity";

export const REPORTS: { kind: ReportKind; title: string; description: string }[] = [
  { kind: "student-performance", title: "Student performance", description: "Average, best and attempts per student." },
  { kind: "exam-performance", title: "Examination performance", description: "Candidates, average, pass rate and grade spread per exam." },
  { kind: "subject-performance", title: "Subject performance", description: "Average score and pass rate per subject." },
  { kind: "department-performance", title: "Department performance", description: "Results aggregated by department." },
  { kind: "question-performance", title: "Question performance", description: "Accuracy, flag rate and response time per question." },
  { kind: "learning-progress", title: "Learning progress", description: "Lessons completed and classwork averages per student." },
  { kind: "assignment-performance", title: "Assignment performance", description: "Submissions, averages and pass rates per assignment." },
  { kind: "code-utilisation", title: "Access-code utilisation", description: "Codes by status and batch." },
  { kind: "expired-accounts", title: "Expired accounts", description: "Students whose access has lapsed." },
  { kind: "active-students", title: "Active students", description: "Students with currently valid access." },
  { kind: "admin-activity", title: "Administrative activity", description: "Actions taken by administrators (last 90 days)." },
  { kind: "security-activity", title: "Security activity", description: "Security events by type and severity (last 90 days)." },
];

export async function runReport(schoolId: string, kind: ReportKind): Promise<Record<string, unknown>[]> {
  switch (kind) {
    case "student-performance":
      return rows(sql`SELECT u.first_name || ' ' || u.last_name AS student, st.student_number AS "Student ID", c.name AS class, d.name AS department,
        count(r.id)::int AS exams, round(avg(r.percentage)::numeric,1)::float AS average, max(r.percentage)::float AS best
        FROM users u JOIN students st ON st.user_id = u.id LEFT JOIN classes c ON c.id = st.class_id LEFT JOIN departments d ON d.id = st.department_id
        LEFT JOIN results r ON r.user_id = u.id AND NOT r.is_voided
        WHERE u.school_id = ${schoolId} AND u.deleted_at IS NULL GROUP BY u.id, st.student_number, c.name, d.name ORDER BY average DESC NULLS LAST LIMIT 5000`);
    case "exam-performance":
      return rows(sql`SELECT e.title AS examination, s.name AS subject, e.exam_type AS type, count(r.id)::int AS candidates,
        round(avg(r.percentage)::numeric,1)::float AS average, round(100.0*count(*) FILTER (WHERE r.passed)/NULLIF(count(r.id),0),1)::float AS "pass rate %",
        count(*) FILTER (WHERE r.grade='A')::int AS "A", count(*) FILTER (WHERE r.grade='F')::int AS "F"
        FROM examinations e JOIN subjects s ON s.id = e.subject_id LEFT JOIN results r ON r.examination_id = e.id AND NOT r.is_voided
        WHERE e.school_id = ${schoolId} GROUP BY e.id, s.name ORDER BY e.created_at DESC`);
    case "subject-performance":
      return rows(sql`SELECT s.name AS subject, count(r.id)::int AS results, round(avg(r.percentage)::numeric,1)::float AS average,
        round(100.0*count(*) FILTER (WHERE r.passed)/NULLIF(count(r.id),0),1)::float AS "pass rate %"
        FROM subjects s LEFT JOIN examinations e ON e.subject_id = s.id LEFT JOIN results r ON r.examination_id = e.id AND NOT r.is_voided
        WHERE s.school_id = ${schoolId} GROUP BY s.id ORDER BY average DESC NULLS LAST`);
    case "department-performance":
      return rows(sql`SELECT coalesce(d.name,'Unassigned') AS department, count(r.id)::int AS results, round(avg(r.percentage)::numeric,1)::float AS average,
        round(100.0*count(*) FILTER (WHERE r.passed)/NULLIF(count(r.id),0),1)::float AS "pass rate %"
        FROM results r JOIN students st ON st.user_id = r.user_id LEFT JOIN departments d ON d.id = st.department_id
        WHERE r.school_id = ${schoolId} AND NOT r.is_voided GROUP BY d.name ORDER BY average DESC`);
    case "question-performance":
      return (await questionAnalytics(schoolId, 2000)) as unknown as Record<string, unknown>[];
    case "learning-progress":
      return rows(sql`SELECT u.first_name || ' ' || u.last_name AS student, st.student_number AS "Student ID",
        count(lp.lesson_id) FILTER (WHERE lp.status='COMPLETED')::int AS "lessons completed", count(lp.lesson_id)::int AS "lessons started",
        (SELECT round(avg(percentage)::numeric,1)::float FROM learning_attempts la WHERE la.user_id = u.id) AS "classwork average"
        FROM users u JOIN students st ON st.user_id = u.id LEFT JOIN learning_progress lp ON lp.user_id = u.id
        WHERE u.school_id = ${schoolId} AND u.deleted_at IS NULL GROUP BY u.id, st.student_number ORDER BY "lessons completed" DESC LIMIT 5000`);
    case "assignment-performance":
      return rows(sql`SELECT a.title, a.kind, s.name AS subject, count(DISTINCT at.user_id)::int AS students, count(at.id)::int AS submissions,
        round(avg(at.percentage)::numeric,1)::float AS average, round(100.0*count(*) FILTER (WHERE at.passed)/NULLIF(count(at.id),0),1)::float AS "pass rate %"
        FROM assignments a JOIN subjects s ON s.id = a.subject_id LEFT JOIN assignment_attempts at ON at.assignment_id = a.id
        WHERE a.school_id = ${schoolId} GROUP BY a.id, s.name ORDER BY a.created_at DESC`);
    case "code-utilisation":
      return rows(sql`SELECT coalesce(batch_id::text,'—') AS batch, min(created_at) AS created, duration_days AS days,
        count(*)::int AS total, count(*) FILTER (WHERE status='UNUSED')::int AS unused, count(*) FILTER (WHERE status='ACTIVE')::int AS active,
        count(*) FILTER (WHERE status='EXPIRED')::int AS expired, count(*) FILTER (WHERE status IN ('REVOKED','SUSPENDED'))::int AS disabled
        FROM activation_codes WHERE school_id = ${schoolId} GROUP BY batch_id, duration_days ORDER BY min(created_at) DESC`);
    case "expired-accounts":
      return rows(sql`SELECT u.first_name || ' ' || u.last_name AS student, u.email, u.phone, st.student_number AS "Student ID", max(p.current_expires_at) AS "expired on"
        FROM users u JOIN students st ON st.user_id = u.id JOIN student_access_periods p ON p.user_id = u.id
        WHERE u.school_id = ${schoolId} AND NOT EXISTS (SELECT 1 FROM student_access_periods q WHERE q.user_id = u.id AND q.status='ACTIVE' AND q.current_expires_at > now())
        GROUP BY u.id, st.student_number ORDER BY max(p.current_expires_at) DESC`);
    case "active-students":
      return rows(sql`SELECT u.first_name || ' ' || u.last_name AS student, u.email, st.student_number AS "Student ID", p.activated_at AS activated, p.current_expires_at AS "expires"
        FROM users u JOIN students st ON st.user_id = u.id JOIN student_access_periods p ON p.user_id = u.id AND p.status='ACTIVE' AND p.current_expires_at > now()
        WHERE u.school_id = ${schoolId} ORDER BY p.current_expires_at ASC`);
    case "admin-activity":
      return rows(sql`SELECT a.created_at AS "when", u.first_name || ' ' || u.last_name AS administrator, a.action, a.summary, a.ip
        FROM audit_logs a JOIN users u ON u.id = a.actor_id
        WHERE a.school_id = ${schoolId} AND a.actor_type IN ('SUPER_ADMIN','ADMIN','TEACHER') AND a.created_at > now() - interval '90 days'
        ORDER BY a.created_at DESC LIMIT 5000`);
    case "security-activity":
      return rows(sql`SELECT type, severity::text, count(*)::int AS events, max(created_at) AS "last seen"
        FROM security_events WHERE (school_id = ${schoolId} OR school_id IS NULL) AND created_at > now() - interval '90 days'
        GROUP BY type, severity ORDER BY events DESC`);
  }
}
