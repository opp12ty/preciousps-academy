import { and, asc, desc, eq, gte } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../db";
import { guardianLinks, studySchedules, users } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { requireParentAccess } from "./access";
import { notifyUser } from "./notifications";

/**
 * Study timetable and supportive flags that a parent sets for a linked child. These are support
 * tools only: they never touch results or any official academic record.
 */

export const ACTIVITIES = ["Mathematics revision", "English revision", "Reading", "Assignment", "CBT practice", "Quiz", "Study Centre session", "Knowledge Hub reading", "Examination preparation", "Rest period", "Other activity"];
export const FLAGS = ["Needs revision", "Assignment pending", "Prepare for CBT", "Review weak topic", "Practise Mathematics", "Read recommended article"];

const time = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Use a time such as 17:00.").nullish().or(z.literal("").transform(() => null));
const scheduleSchema = z.object({
  kind: z.enum(["ACTIVITY", "FLAG"]).default("ACTIVITY"),
  title: z.string().trim().min(2).max(120),
  note: z.string().trim().max(300).nullish(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a date."),
  startTime: time,
  endTime: time,
  priority: z.enum(["LOW", "NORMAL", "HIGH"]).default("NORMAL"),
  repeat: z.enum(["ONCE", "DAILY", "WEEKLY"]).default("ONCE"),
});

/** True only while an authorised parent–child relationship is active. */
export async function isLinked(parentUserId: string, studentUserId: string) {
  const [row] = await getDb().select({ p: guardianLinks.parentUserId }).from(guardianLinks).where(and(eq(guardianLinks.parentUserId, parentUserId), eq(guardianLinks.studentUserId, studentUserId)));
  return Boolean(row);
}

async function requireLink(parent: Actor, studentUserId: string, ctx: ReqCtx) {
  if (parent.userType !== "PARENT" || !(await isLinked(parent.id, studentUserId))) {
    await securityEvent({ type: "IDOR_ATTEMPT", severity: "HIGH", userId: parent.id, schoolId: parent.schoolId, detail: { studentUserId, via: "schedule" } }, ctx);
    throw new AppError("NOT_FOUND", "Child not found.");
  }
  await requireParentAccess(parent.id);
}

export async function createSchedule(parent: Actor, studentUserId: string, raw: unknown, ctx: ReqCtx) {
  await requireLink(parent, studentUserId, ctx);
  const d = scheduleSchema.parse(raw);
  if (d.startTime && d.endTime && d.endTime <= d.startTime) throw new AppError("VALIDATION", "The end time must be after the start time.", { endTime: ["End must be after start."] });
  const [row] = await getDb().insert(studySchedules).values({ ...d, note: d.note || null, startTime: d.startTime ?? null, endTime: d.endTime ?? null, schoolId: parent.schoolId, parentUserId: parent.id, studentUserId }).returning();
  await notifyUser({ schoolId: parent.schoolId, userId: studentUserId, category: "ANNOUNCEMENT", title: d.kind === "FLAG" ? "A note from your parent" : "New activity on your timetable", body: d.kind === "FLAG" ? `Your parent flagged: ${d.title}.` : `Your parent scheduled ${d.title} for ${d.date}${d.startTime ? ` at ${d.startTime}` : ""}.`, link: "/student/timetable" });
  await audit({ actor: parent, action: "schedule.created", entityType: "study_schedule", entityId: row.id, summary: `${d.kind}: ${d.title}` }, ctx);
  return row;
}

export async function deleteSchedule(parent: Actor, id: string, ctx: ReqCtx) {
  const [row] = await getDb().delete(studySchedules).where(and(eq(studySchedules.id, id), eq(studySchedules.parentUserId, parent.id))).returning({ id: studySchedules.id });
  if (!row) throw new AppError("NOT_FOUND", "Activity not found.");
  await audit({ actor: parent, action: "schedule.deleted", entityType: "study_schedule", entityId: id }, ctx);
}

/** A parent's entries for one linked child. */
export async function listSchedulesForParent(parent: Actor, studentUserId: string, ctx: ReqCtx) {
  await requireLink(parent, studentUserId, ctx);
  return getDb().select().from(studySchedules).where(and(eq(studySchedules.parentUserId, parent.id), eq(studySchedules.studentUserId, studentUserId))).orderBy(desc(studySchedules.date), asc(studySchedules.startTime)).limit(100);
}

/** The student's own timetable: this month onwards. */
export async function listSchedulesForStudent(studentUserId: string, today: string) {
  return getDb()
    .select({ s: studySchedules, parentFirst: users.firstName })
    .from(studySchedules)
    .innerJoin(users, eq(users.id, studySchedules.parentUserId))
    .where(and(eq(studySchedules.studentUserId, studentUserId), gte(studySchedules.date, `${today.slice(0, 8)}01`)))
    .orderBy(asc(studySchedules.date), asc(studySchedules.startTime))
    .limit(200);
}

export async function respondToSchedule(student: Actor, id: string, change: "ACKNOWLEDGE" | "COMPLETE", ctx: ReqCtx) {
  if (student.userType !== "STUDENT") throw new AppError("FORBIDDEN", "Only the student can update a timetable activity.");
  const now = new Date();
  const [row] = await getDb()
    .update(studySchedules)
    .set(change === "COMPLETE" ? { status: "COMPLETED", completedAt: now } : { status: "ACKNOWLEDGED", acknowledgedAt: now })
    .where(and(eq(studySchedules.id, id), eq(studySchedules.studentUserId, student.id)))
    .returning();
  if (!row) throw new AppError("NOT_FOUND", "Activity not found.");
  void ctx;
  return row;
}
