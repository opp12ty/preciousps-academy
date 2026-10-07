import { and, eq, gt, lte, sql } from "drizzle-orm";
import { getDb } from "../db";
import { assignments, examinations, notifications, schools, studySchedules } from "../db/schema";
import { getSetting } from "../settings";
import { fmtLagos } from "./access";
import { notifyUser } from "./notifications";

/**
 * Daily reminders, sent by the scheduled maintenance job (once a day, early morning):
 *  - an examination that opens in the next 24 hours
 *  - an examination that closes in the next 24 hours
 *  - an assignment or classwork due in the next 24 hours
 *  - the activities a parent put on a student's timetable for today
 * Examination and assignment reminders go to the class as one notice, not one row per student.
 */

type Scope = { classId: string | null; departmentId: string | null; level: string | null };

/** One notice for everyone in scope. The same title and link are never sent twice within three days. */
async function notice(schoolId: string, category: "EXAM" | "ASSIGNMENT", title: string, body: string, link: string, scope: Scope) {
  const db = getDb();
  const [dup] = await db
    .select({ id: notifications.id })
    .from(notifications)
    .where(and(eq(notifications.schoolId, schoolId), eq(notifications.title, title), eq(notifications.link, link), sql`${notifications.userId} IS NULL`, gt(notifications.createdAt, sql`now() - interval '3 days'`)))
    .limit(1);
  if (dup) return 0;
  await db.insert(notifications).values({ schoolId, userId: null, audience: { classId: scope.classId, departmentId: scope.departmentId, level: scope.level, userType: "STUDENT" }, category, title: title.slice(0, 160), body, link });
  return 1;
}

export async function sendDailyReminders() {
  const db = getDb();
  let sent = 0;
  const soon = sql`now() + interval '24 hours'`;
  for (const school of await db.select({ id: schools.id }).from(schools)) {
    const { timezone } = await getSetting(school.id, "localization");
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: timezone }).format(new Date());

    const opening = await db.select().from(examinations).where(and(eq(examinations.schoolId, school.id), eq(examinations.status, "PUBLISHED"), gt(examinations.startsAt, sql`now()`), lte(examinations.startsAt, soon)));
    for (const e of opening) sent += await notice(school.id, "EXAM", `Examination soon: ${e.title}`, `${e.title} opens on ${fmtLagos(e.startsAt!)}. Charge your phone or computer, check your network and be ready on time.`, `/student/exams/${e.id}`, e);

    const closing = await db.select().from(examinations).where(and(eq(examinations.schoolId, school.id), eq(examinations.status, "PUBLISHED"), gt(examinations.endsAt, sql`now()`), lte(examinations.endsAt, soon), sql`(${examinations.startsAt} IS NULL OR ${examinations.startsAt} <= now())`));
    for (const e of closing) sent += await notice(school.id, "EXAM", `Last chance: ${e.title}`, `${e.title} closes on ${fmtLagos(e.endsAt!)}. If you have not taken it, do so before then.`, `/student/exams/${e.id}`, e);

    const due = await db.select().from(assignments).where(and(eq(assignments.schoolId, school.id), eq(assignments.status, "PUBLISHED"), gt(assignments.dueAt, sql`now()`), lte(assignments.dueAt, soon)));
    for (const a of due) sent += await notice(school.id, "ASSIGNMENT", `Due soon: ${a.title}`, `${a.title} is due on ${fmtLagos(a.dueAt!)}. Submit it before the deadline.`, `/student/assignments/${a.id}`, a);

    // Timetable: one message per student listing today's activities that are not yet done.
    const weekday = new Date(`${today}T12:00:00Z`).getUTCDay();
    const items = await db
      .select({ studentUserId: studySchedules.studentUserId, title: studySchedules.title, startTime: studySchedules.startTime, date: studySchedules.date, repeat: studySchedules.repeat })
      .from(studySchedules)
      .where(and(eq(studySchedules.schoolId, school.id), eq(studySchedules.kind, "ACTIVITY"), sql`${studySchedules.status} <> 'COMPLETED'`, lte(studySchedules.date, today)));
    const byStudent = new Map<string, { title: string; startTime: string | null }[]>();
    for (const it of items) {
      const isToday = it.date === today || it.repeat === "DAILY" || (it.repeat === "WEEKLY" && new Date(`${it.date}T12:00:00Z`).getUTCDay() === weekday);
      if (!isToday) continue;
      byStudent.set(it.studentUserId, [...(byStudent.get(it.studentUserId) ?? []), it]);
    }
    for (const [userId, list] of byStudent) {
      const lines = list.sort((a, b) => (a.startTime ?? "").localeCompare(b.startTime ?? "")).slice(0, 8).map((x) => (x.startTime ? `${x.startTime} ${x.title}` : x.title));
      await notifyUser({ schoolId: school.id, userId, category: "LESSON", title: "Today on your study timetable", body: `${lines.join("; ")}.`, link: "/student/timetable" });
      sent++;
    }
  }
  return sent;
}
