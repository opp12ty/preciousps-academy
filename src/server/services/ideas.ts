import { and, desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../db";
import { students, suggestions, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { rateLimit } from "../rate-limit";
import { notifyUser } from "./notifications";

/**
 * The Ideas Box: students, parents and school accounts suggest new features, content or fixes; staff
 * read, reply and mark each idea as planned, done or declined. Replies reach the sender as a notification.
 */

export const IDEA_CATEGORIES = { LEARNING: "Lessons and learning", CONTENT: "New topics or questions", GAMES: "Games and fun", DESIGN: "Look and ease of use", PROBLEM: "Something is not working", OTHER: "Something else" } as const;
export const IDEA_STATUSES = { NEW: "New", PLANNED: "Planned", DONE: "Done", DECLINED: "Not for now" } as const;
type Cat = keyof typeof IDEA_CATEGORIES;
type Status = keyof typeof IDEA_STATUSES;

const ideaSchema = z.object({
  category: z.enum(Object.keys(IDEA_CATEGORIES) as [Cat, ...Cat[]]).default("OTHER"),
  text: z.string().trim().min(10, "Tell us a little more (at least 10 characters).").max(1500),
});

export async function submitIdea(actor: Actor, raw: unknown, ctx: ReqCtx) {
  const d = ideaSchema.parse(raw);
  await rateLimit("upload", actor.id, ctx);
  if (actor.userType !== "STUDENT" && actor.userType !== "PARENT") throw new AppError("FORBIDDEN", "The Ideas Box is for students and parents.");
  let role = actor.userType as string;
  if (role === "STUDENT") {
    const [st] = await getDb().select({ kind: students.accountKind }).from(students).where(eq(students.userId, actor.id));
    if (st?.kind === "SCHOOL") role = "SCHOOL";
  }
  const [row] = await getDb().insert(suggestions).values({ schoolId: actor.schoolId, userId: actor.id, role, category: d.category, text: d.text }).returning();
  await audit({ actor, action: "idea.submitted", entityType: "suggestion", entityId: row.id, summary: d.text.slice(0, 80) }, ctx);
  return row;
}

export async function myIdeas(actor: Actor) {
  return getDb().select().from(suggestions).where(and(eq(suggestions.schoolId, actor.schoolId), eq(suggestions.userId, actor.id))).orderBy(desc(suggestions.createdAt)).limit(50);
}

export async function listIdeasAdmin(schoolId: string, status?: string) {
  const db = getDb();
  const rows = await db
    .select({ s: suggestions, first: users.firstName, last: users.lastName })
    .from(suggestions)
    .leftJoin(users, eq(users.id, suggestions.userId))
    .where(and(eq(suggestions.schoolId, schoolId), status && status in IDEA_STATUSES ? eq(suggestions.status, status) : undefined))
    .orderBy(desc(suggestions.createdAt))
    .limit(300);
  const counts = await db.select({ status: suggestions.status, n: sql<number>`count(*)::int` }).from(suggestions).where(eq(suggestions.schoolId, schoolId)).groupBy(suggestions.status);
  return { rows, counts: Object.fromEntries(counts.map((c) => [c.status, c.n])) as Record<string, number> };
}

export async function answerIdea(actor: Actor, id: string, raw: { status: string; reply?: string }, ctx: ReqCtx) {
  const status = raw.status as Status;
  if (!(status in IDEA_STATUSES)) throw new AppError("VALIDATION", "Choose a status.");
  const reply = raw.reply?.trim().slice(0, 1500) || null;
  const [row] = await getDb()
    .update(suggestions)
    .set({ status, reply, repliedAt: reply ? new Date() : null })
    .where(and(eq(suggestions.id, id), eq(suggestions.schoolId, actor.schoolId)))
    .returning();
  if (!row) throw new AppError("NOT_FOUND", "Idea not found.");
  if (row.userId && (reply || status !== "NEW"))
    await notifyUser({ schoolId: actor.schoolId, userId: row.userId, category: "ANNOUNCEMENT", title: `Your idea: ${IDEA_STATUSES[status]}`, body: reply ?? `Thank you. Your idea is now marked “${IDEA_STATUSES[status]}”.`, link: row.role === "PARENT" ? "/parent/ideas" : "/student/ideas" });
  await audit({ actor, action: "idea.answered", entityType: "suggestion", entityId: id, summary: `${status}${reply ? `: ${reply.slice(0, 60)}` : ""}` }, ctx);
  return row;
}
