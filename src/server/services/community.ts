import { and, asc, desc, eq, isNull, sql } from "drizzle-orm";
import { BLOCK_MESSAGES, checkForumMessage, parseBlockedWords } from "@/core/forum-filter";
import { getDb } from "../db";
import { forumMessages, forumReports, forumRooms, forumSuspensions, users } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { requireParentAccess } from "./access";
import { getSetting } from "../settings";

/**
 * The parent community. It shares the forum tables with the student forum but is a different
 * audience: every query here is limited to PARENT rooms and every caller must be a parent, while
 * the student forum reads STUDENT rooms only. Neither side can open the other's rooms.
 */

export const REPORT_REASONS = { HARASSMENT: "Harassment or bullying", INAPPROPRIATE: "Inappropriate content", SCAM: "Scam or money request", PRIVACY: "Privacy violation", SUSPICIOUS: "Suspicious behaviour", CHILD_SAFETY: "Child safety concern", SPAM: "Spam", MISLEADING: "Misleading information" } as const;
export type ReportReason = keyof typeof REPORT_REASONS;

/** Extra phrases refused in the parent community, on top of the school's blocked words. */
const PARENT_BLOCKED = "date me, dating, flirt, sexy, beautiful lady, handsome man, hook up, are you single, marry me, i love you, call me, dm me, inbox me, chat me up, my number, whatsapp, telegram, loan, quick money, investment opportunity, forex, crypto, double your money, send me money";

async function parentOnly(actor: Actor) {
  if (actor.userType !== "PARENT") throw new AppError("FORBIDDEN", "The parent community is for parents and guardians only.");
  await requireParentAccess(actor.id);
}

async function suspension(userId: string) {
  const rows = await getDb().select().from(forumSuspensions).where(and(eq(forumSuspensions.userId, userId), isNull(forumSuspensions.liftedAt))).orderBy(desc(forumSuspensions.createdAt)).limit(5);
  return rows.find((s) => !s.until || s.until > new Date()) ?? null;
}

async function state(parent: Actor) {
  const cfg = await getSetting(parent.schoolId, "parents");
  const forum = await getSetting(parent.schoolId, "forum");
  const sus = await suspension(parent.id);
  const blocked = !cfg.communityEnabled ? "The parent community is switched off at the moment." : sus ? `You are suspended from the community. Reason: ${sus.reason}` : null;
  // Same shape as the student forum state, so one room screen serves both.
  return { canUse: !blocked, blocked, hours: "", remainingSeconds: blocked ? 0 : 86_400, dailyMinutes: 0, rules: cfg.communityRules, maxMessageLength: forum.maxMessageLength, suspended: Boolean(sus) };
}

export async function listParentRooms(parent: Actor) {
  await parentOnly(parent);
  const since = new Date(Date.now() - 24 * 3600_000);
  const rooms = await getDb()
    .select({ r: forumRooms, today: sql<number>`(SELECT count(*)::int FROM forum_messages m WHERE m.room_id = ${forumRooms.id} AND m.status = 'VISIBLE' AND m.created_at > ${since})` })
    .from(forumRooms)
    .where(and(eq(forumRooms.schoolId, parent.schoolId), eq(forumRooms.audience, "PARENT"), isNull(forumRooms.archivedAt)))
    .orderBy(asc(forumRooms.sortOrder), asc(forumRooms.name));
  return { state: await state(parent), rooms: rooms.map(({ r, today }) => ({ id: r.id, name: r.name, description: r.description, isLocked: r.isLocked, today })) };
}

async function parentRoom(parent: Actor, roomId: string) {
  await parentOnly(parent);
  if (!/^[0-9a-f-]{36}$/i.test(roomId)) throw new AppError("NOT_FOUND", "Room not found.");
  const [room] = await getDb().select().from(forumRooms).where(and(eq(forumRooms.id, roomId), eq(forumRooms.schoolId, parent.schoolId), eq(forumRooms.audience, "PARENT"), isNull(forumRooms.archivedAt)));
  if (!room) throw new AppError("NOT_FOUND", "Room not found.");
  return room;
}

export async function parentRoomFeed(parent: Actor, roomId: string) {
  const room = await parentRoom(parent, roomId);
  const st = await state(parent);
  const head = { id: room.id, name: room.name, description: room.description, isLocked: room.isLocked };
  if (!st.canUse) return { room: head, state: st, messages: [] };
  const rows = await getDb()
    .select({ m: forumMessages, firstName: users.firstName, lastName: users.lastName, userType: users.userType })
    .from(forumMessages)
    .innerJoin(users, eq(users.id, forumMessages.userId))
    .where(and(eq(forumMessages.roomId, room.id), eq(forumMessages.status, "VISIBLE")))
    .orderBy(desc(forumMessages.createdAt))
    .limit(80);
  return {
    room: head,
    state: st,
    messages: rows.reverse().map(({ m, firstName, lastName, userType }) => ({ id: m.id, body: m.body, at: m.createdAt.toISOString(), mine: m.userId === parent.id, staff: userType !== "PARENT", author: userType !== "PARENT" ? "School" : `${firstName} ${lastName.slice(0, 1)}.`, className: null as string | null })),
  };
}

export async function parentPost(parent: Actor, roomId: string, raw: unknown, ctx: ReqCtx) {
  const room = await parentRoom(parent, roomId);
  const st = await state(parent);
  if (!st.canUse) throw new AppError("FORBIDDEN", st.blocked!);
  if (room.isLocked) throw new AppError("FORBIDDEN", "This room is for notices only. You can read it but not post.");
  const forum = await getSetting(parent.schoolId, "forum");
  const db = getDb();
  const checked = checkForumMessage(typeof raw === "string" ? raw : "", { maxLength: forum.maxMessageLength, blockLinks: true, blockedWords: parseBlockedWords(`${forum.blockedWords}, ${PARENT_BLOCKED}`) });
  if (!checked.ok) {
    if (checked.reason !== "EMPTY" && checked.reason !== "TOO_LONG") {
      // Quarantined for moderators; other parents never see it.
      await db.insert(forumMessages).values({ schoolId: parent.schoolId, roomId: room.id, userId: parent.id, body: String(raw).slice(0, 2000), status: "BLOCKED", reason: checked.reason });
      await audit({ actor: parent, action: "community.message_blocked", entityType: "forum_room", entityId: room.id, summary: `Parent message refused: ${checked.reason}` }, ctx);
    }
    throw new AppError("VALIDATION", `${BLOCK_MESSAGES[checked.reason]} To reach the school, use Contact School Administration.`);
  }
  const [row] = await db.insert(forumMessages).values({ schoolId: parent.schoolId, roomId: room.id, userId: parent.id, body: checked.text }).returning({ id: forumMessages.id });
  return { id: row.id };
}

/** A member reports a message. Students can report only in student rooms, parents only in parent rooms. */
export async function reportMessage(actor: Actor, messageId: string, reason: string, detail: string | undefined, ctx: ReqCtx) {
  if (!(reason in REPORT_REASONS)) throw new AppError("VALIDATION", "Choose a reason for the report.");
  if (!/^[0-9a-f-]{36}$/i.test(messageId)) throw new AppError("NOT_FOUND", "Message not found.");
  const db = getDb();
  const [m] = await db.select({ id: forumMessages.id, audience: forumRooms.audience }).from(forumMessages).innerJoin(forumRooms, eq(forumRooms.id, forumMessages.roomId)).where(and(eq(forumMessages.id, messageId), eq(forumMessages.schoolId, actor.schoolId)));
  const mine = actor.userType === "PARENT" ? "PARENT" : actor.userType === "STUDENT" ? "STUDENT" : null;
  if (!m || m.audience !== mine) {
    await securityEvent({ type: "IDOR_ATTEMPT", severity: "MEDIUM", userId: actor.id, schoolId: actor.schoolId, detail: { messageId, via: "community_report" } }, ctx);
    throw new AppError("NOT_FOUND", "Message not found.");
  }
  await db.insert(forumReports).values({ schoolId: actor.schoolId, messageId, reporterId: actor.id, reason, detail: detail?.trim().slice(0, 500) || null }).onConflictDoNothing();
  await audit({ actor, action: "community.reported", entityType: "forum_message", entityId: messageId, summary: REPORT_REASONS[reason as ReportReason] }, ctx);
}

export async function listReports(schoolId: string, status = "OPEN") {
  return getDb()
    .select({ r: forumReports, body: forumMessages.body, messageStatus: forumMessages.status, authorId: forumMessages.userId, room: forumRooms.name, audience: forumRooms.audience, reporterFirst: users.firstName, reporterLast: users.lastName })
    .from(forumReports)
    .innerJoin(forumMessages, eq(forumMessages.id, forumReports.messageId))
    .innerJoin(forumRooms, eq(forumRooms.id, forumMessages.roomId))
    .innerJoin(users, eq(users.id, forumReports.reporterId))
    .where(and(eq(forumReports.schoolId, schoolId), eq(forumReports.status, status)))
    .orderBy(desc(forumReports.createdAt))
    .limit(200);
}

export async function resolveReport(actor: Actor, id: string, outcome: "RESOLVED" | "DISMISSED", ctx: ReqCtx) {
  const [row] = await getDb().update(forumReports).set({ status: outcome, resolvedBy: actor.id, resolvedAt: new Date() }).where(and(eq(forumReports.id, id), eq(forumReports.schoolId, actor.schoolId))).returning({ id: forumReports.id });
  if (!row) throw new AppError("NOT_FOUND", "Report not found.");
  await audit({ actor, action: `community.report_${outcome.toLowerCase()}`, entityType: "forum_report", entityId: id }, ctx);
}

const PARENT_ROOMS = [
  { name: "Parenting and child development", description: "Share experience and ask questions about raising children and teenagers." },
  { name: "Supporting learning at home", description: "Study habits, homework, reading and examination preparation." },
  { name: "Examinations and admissions", description: "Common Entrance, BECE, WAEC, NECO, JAMB and admissions." },
  { name: "Question of the week", description: "A weekly discussion started by the school." },
];

/** Starter rooms for the parent community; rooms that already exist are left alone. */
export async function createParentRooms(actor: Actor, ctx: ReqCtx) {
  const db = getDb();
  const have = await db.select({ name: forumRooms.name }).from(forumRooms).where(and(eq(forumRooms.schoolId, actor.schoolId), eq(forumRooms.audience, "PARENT")));
  let created = 0;
  for (const [i, r] of PARENT_ROOMS.entries()) {
    if (have.some((h) => h.name === r.name)) continue;
    await db.insert(forumRooms).values({ schoolId: actor.schoolId, name: r.name, description: r.description, topic: "GENERAL", audience: "PARENT", sortOrder: i, createdBy: actor.id });
    created++;
  }
  if (created) await audit({ actor, action: "community.parent_rooms", entityType: "forum_room", entityId: actor.schoolId, summary: `${created} parent rooms created` }, ctx);
  return { created };
}
