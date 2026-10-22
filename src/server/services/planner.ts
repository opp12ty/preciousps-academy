import { and, asc, eq, gte, isNotNull, lte } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../db";
import { studyPlans, subjects } from "../db/schema";
import { AppError } from "../errors";
import type { Actor } from "../audit";

/** The learner's own study planner: tasks by day, ticked when done, with a daily streak. */

const DAY = /^\d{4}-\d{2}-\d{2}$/;
export const lagosToday = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Lagos" }).format(new Date());
const addDays = (d: string, n: number) => new Date(new Date(`${d}T12:00:00Z`).getTime() + n * 86_400_000).toISOString().slice(0, 10);
/** Monday of the week that contains the day. */
export const weekStart = (d: string) => addDays(d, -((new Date(`${d}T12:00:00Z`).getUTCDay() + 6) % 7));

const planSchema = z.object({
  day: z.string().regex(DAY, "Choose a day."),
  subjectId: z.string().uuid().optional().or(z.literal("")),
  title: z.string().trim().min(3, "Say what you will study.").max(140),
  minutes: z.coerce.number().int().min(5).max(480).default(30),
});

export async function addPlan(actor: Actor, raw: unknown) {
  const d = planSchema.parse(raw);
  if (actor.userType !== "STUDENT") throw new AppError("FORBIDDEN", "The study planner is for learners.");
  const count = (await getDb().select({ id: studyPlans.id }).from(studyPlans).where(and(eq(studyPlans.userId, actor.id), eq(studyPlans.day, d.day)))).length;
  if (count >= 12) throw new AppError("VALIDATION", "That day is full. Twelve tasks a day is plenty.");
  const [row] = await getDb().insert(studyPlans).values({ userId: actor.id, day: d.day, subjectId: d.subjectId || null, title: d.title, minutes: d.minutes }).returning();
  return row;
}

export async function togglePlan(actor: Actor, id: string) {
  const db = getDb();
  const [p] = await db.select().from(studyPlans).where(and(eq(studyPlans.id, id), eq(studyPlans.userId, actor.id)));
  if (!p) throw new AppError("NOT_FOUND", "Task not found.");
  await db.update(studyPlans).set({ doneAt: p.doneAt ? null : new Date() }).where(eq(studyPlans.id, id));
}

export async function deletePlan(actor: Actor, id: string) {
  await getDb().delete(studyPlans).where(and(eq(studyPlans.id, id), eq(studyPlans.userId, actor.id)));
}

export async function plannerWeek(actor: Actor, start: string) {
  const s = DAY.test(start) ? weekStart(start) : weekStart(lagosToday());
  const end = addDays(s, 6);
  const rows = await getDb()
    .select({ p: studyPlans, subject: subjects.name })
    .from(studyPlans)
    .leftJoin(subjects, eq(subjects.id, studyPlans.subjectId))
    .where(and(eq(studyPlans.userId, actor.id), gte(studyPlans.day, s), lte(studyPlans.day, end)))
    .orderBy(asc(studyPlans.day), asc(studyPlans.createdAt));
  const days = Array.from({ length: 7 }, (_, i) => addDays(s, i)).map((day) => ({ day, items: rows.filter((r) => r.p.day === day).map((r) => ({ ...r.p, subject: r.subject })) }));
  return { start: s, prev: addDays(s, -7), next: addDays(s, 7), days, ...(await streak(actor.id)) };
}

/** Days in a row (ending today or yesterday) with at least one finished task, and minutes studied this week. */
export async function streak(userId: string) {
  const today = lagosToday();
  const rows = await getDb().select({ day: studyPlans.day, minutes: studyPlans.minutes }).from(studyPlans).where(and(eq(studyPlans.userId, userId), isNotNull(studyPlans.doneAt), gte(studyPlans.day, addDays(today, -120))));
  const doneDays = new Set(rows.map((r) => r.day));
  let n = 0;
  let d = doneDays.has(today) ? today : addDays(today, -1);
  while (doneDays.has(d)) {
    n++;
    d = addDays(d, -1);
  }
  const ws = weekStart(today);
  const weekMinutes = rows.filter((r) => r.day >= ws && r.day <= today).reduce((a, r) => a + r.minutes, 0);
  return { streak: n, weekMinutes };
}

export async function todayPlan(actor: Actor) {
  const today = lagosToday();
  const rows = await getDb().select({ p: studyPlans, subject: subjects.name }).from(studyPlans).leftJoin(subjects, eq(subjects.id, studyPlans.subjectId)).where(and(eq(studyPlans.userId, actor.id), eq(studyPlans.day, today))).orderBy(asc(studyPlans.createdAt));
  return { today, items: rows.map((r) => ({ ...r.p, subject: r.subject })), ...(await streak(actor.id)) };
}
