import { and, desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../db";
import { examinations, resultAppeals, results, students, subjects, users } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { rateLimit } from "../rate-limit";
import { notifyUser } from "./notifications";

/**
 * Result appeals. A student who believes a released result is wrong may ask the examination office
 * to look at it again, once per result and within a fixed number of days. An appeal never changes a
 * score by itself: staff decide, and use the ordinary result tools if a correction is needed.
 */

export const APPEAL_DAYS = 7;
const DAY_MS = 86_400_000;

const appealSchema = z.object({
  questions: z.string().trim().max(120).optional(),
  reason: z.string().trim().min(20, "Explain the problem in at least 20 characters.").max(1500),
});

export async function appealWindow(result: { releasedAt: Date | null; createdAt: Date; isVoided: boolean }) {
  const from = result.releasedAt ?? result.createdAt;
  const closesAt = new Date(from.getTime() + APPEAL_DAYS * DAY_MS);
  return { open: !result.isVoided && Boolean(result.releasedAt) && closesAt > new Date(), closesAt };
}

/** The student's own appeal on one result, if any. */
export async function appealOfResult(userId: string, resultId: string) {
  const [a] = await getDb().select().from(resultAppeals).where(and(eq(resultAppeals.resultId, resultId), eq(resultAppeals.userId, userId)));
  return a ?? null;
}

export async function submitAppeal(student: Actor, resultId: string, raw: unknown, ctx: ReqCtx) {
  if (student.userType !== "STUDENT") throw new AppError("FORBIDDEN", "Only the student who sat the examination can appeal.");
  if (!/^[0-9a-f-]{36}$/i.test(resultId)) throw new AppError("NOT_FOUND", "Result not found.");
  await rateLimit("upload", `appeal:${student.id}`, ctx);
  const input = appealSchema.parse(raw);
  const db = getDb();
  const [r] = await db.select().from(results).where(eq(results.id, resultId));
  if (!r || r.userId !== student.id) {
    if (r) await securityEvent({ type: "IDOR_ATTEMPT", severity: "HIGH", userId: student.id, schoolId: student.schoolId, detail: { resultId, via: "appeal" } }, ctx);
    throw new AppError("NOT_FOUND", "Result not found.");
  }
  const w = await appealWindow(r);
  if (!w.open) throw new AppError("CONFLICT", r.isVoided || !r.releasedAt ? "This result cannot be appealed." : `The ${APPEAL_DAYS}-day period for appealing this result has ended.`);
  try {
    const [a] = await db.insert(resultAppeals).values({ schoolId: student.schoolId, resultId, userId: student.id, questions: input.questions || null, reason: input.reason }).returning({ id: resultAppeals.id });
    await audit({ actor: student, action: "results.appeal_submitted", entityType: "result", entityId: resultId, summary: "Student appealed a result", metadata: { appealId: a.id } }, ctx);
    return { id: a.id };
  } catch (e) {
    const c = e as { code?: string; cause?: { code?: string } };
    if (c.code === "23505" || c.cause?.code === "23505") throw new AppError("CONFLICT", "You have already appealed this result. Each result can be appealed once.");
    throw e;
  }
}

export async function listAppeals(schoolId: string, status?: string) {
  const db = getDb();
  const rows = await db
    .select({ a: resultAppeals, firstName: users.firstName, lastName: users.lastName, studentNumber: students.studentNumber, exam: examinations.title, subject: subjects.name, percentage: results.percentage, grade: results.grade, isVoided: results.isVoided })
    .from(resultAppeals)
    .innerJoin(results, eq(results.id, resultAppeals.resultId))
    .innerJoin(users, eq(users.id, resultAppeals.userId))
    .leftJoin(students, eq(students.userId, users.id))
    .innerJoin(examinations, eq(examinations.id, results.examinationId))
    .innerJoin(subjects, eq(subjects.id, examinations.subjectId))
    .where(and(eq(resultAppeals.schoolId, schoolId), status ? eq(resultAppeals.status, status) : undefined))
    .orderBy(desc(resultAppeals.createdAt))
    .limit(300);
  const counts = await db.select({ status: resultAppeals.status, n: sql<number>`count(*)::int` }).from(resultAppeals).where(eq(resultAppeals.schoolId, schoolId)).groupBy(resultAppeals.status);
  return { rows, counts: Object.fromEntries(counts.map((c) => [c.status, c.n])) as Record<string, number> };
}

export async function openAppealCount(schoolId: string) {
  const [{ n }] = await getDb().select({ n: sql<number>`count(*)::int` }).from(resultAppeals).where(and(eq(resultAppeals.schoolId, schoolId), eq(resultAppeals.status, "OPEN")));
  return n;
}

/** Staff answer an appeal. The reply is sent to the student; the score itself is not touched here. */
export async function decideAppeal(actor: Actor, id: string, outcome: "UPHELD" | "REJECTED", response: string, ctx: ReqCtx) {
  const text = (response ?? "").trim();
  if (text.length < 5) throw new AppError("VALIDATION", "Write a reply for the student (at least 5 characters).");
  if (outcome !== "UPHELD" && outcome !== "REJECTED") throw new AppError("VALIDATION", "Choose an outcome.");
  const db = getDb();
  const [a] = await db
    .update(resultAppeals)
    .set({ status: outcome, response: text.slice(0, 1500), decidedBy: actor.id, decidedAt: new Date() })
    .where(and(eq(resultAppeals.id, id), eq(resultAppeals.schoolId, actor.schoolId), eq(resultAppeals.status, "OPEN")))
    .returning();
  if (!a) throw new AppError("CONFLICT", "This appeal has already been answered.");
  await audit({ actor, action: outcome === "UPHELD" ? "results.appeal_upheld" : "results.appeal_rejected", entityType: "result", entityId: a.resultId, summary: `Result appeal ${outcome.toLowerCase()}`, metadata: { appealId: a.id, userId: a.userId } }, ctx);
  await notifyUser({ schoolId: actor.schoolId, userId: a.userId, category: "RESULT", title: outcome === "UPHELD" ? "Your result appeal was accepted" : "Your result appeal was not accepted", body: text.slice(0, 400), link: `/student/results/${a.resultId}` });
  return a;
}
