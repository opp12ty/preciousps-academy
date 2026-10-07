import { and, asc, desc, eq, gt, gte, ilike, inArray, isNull, or, sql, type SQL } from "drizzle-orm";
import { z } from "zod";
import { BLOCK_MESSAGES, checkForumMessage, forumDay, forumWindow, parseBlockedWords } from "@/core/forum-filter";
import { SECTIONS, sectionAllows } from "@/core/sections";
import { getDb } from "../db";
import { classes, forumMessages, forumRooms, forumSuspensions, forumUsage, students, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { getSetting, getSettings } from "../settings";
import { requireFeature } from "./access";
import { notifyUser } from "./notifications";
import { studentScope } from "./scope";

/** A poll or post within this gap counts as continuous presence; a longer gap is time away. */
const PRESENCE_GAP_MS = 45_000;
const FEED_SIZE = 80;

export const FORUM_TOPICS = { ADMISSIONS: "Admissions", EXAMINATIONS: "Examinations", SUBJECTS: "Subjects", STUDY_HELP: "Study help", GENERAL: "General" } as const;
export type ForumTopic = keyof typeof FORUM_TOPICS;

const cfgFor = async (schoolId: string) => {
  const s = await getSettings(schoolId, ["forum", "localization"]);
  return { ...s.forum, timezone: s.localization.timezone };
};

async function activeSuspension(userId: string, now: Date) {
  const [s] = await getDb()
    .select()
    .from(forumSuspensions)
    .where(and(eq(forumSuspensions.userId, userId), isNull(forumSuspensions.liftedAt), or(isNull(forumSuspensions.until), gt(forumSuspensions.until, now))))
    .orderBy(desc(forumSuspensions.createdAt))
    .limit(1);
  return s ?? null;
}

/** Adds the time since the student was last seen (if they were here continuously) to today's total. */
async function touchUsage(userId: string, day: string, now: Date, count: boolean) {
  const db = getDb();
  const [cur] = await db.select().from(forumUsage).where(and(eq(forumUsage.userId, userId), eq(forumUsage.day, day)));
  if (!cur) {
    if (count) await db.insert(forumUsage).values({ userId, day, seconds: 0, lastSeenAt: now }).onConflictDoNothing();
    return 0;
  }
  if (!count) return cur.seconds;
  const gap = now.getTime() - cur.lastSeenAt.getTime();
  const add = gap > 0 && gap <= PRESENCE_GAP_MS ? Math.round(gap / 1000) : 0;
  await db.update(forumUsage).set({ seconds: cur.seconds + add, lastSeenAt: now }).where(and(eq(forumUsage.userId, userId), eq(forumUsage.day, day)));
  return cur.seconds + add;
}

/**
 * Everything that decides whether this student may use the forum right now. `count` is true only
 * while a room is open on screen, so browsing the room list does not use up the daily allowance.
 */
export async function forumState(actor: Actor, opts: { count?: boolean; now?: Date } = {}) {
  const now = opts.now ?? new Date();
  const cfg = await cfgFor(actor.schoolId);
  const win = forumWindow(now, cfg.timezone, cfg.openHour, cfg.closeHour);
  const suspension = await activeSuspension(actor.id, now);
  const allowed = cfg.dailyMinutes * 60;
  const usable = cfg.enabled && win.open && !suspension;
  const used = await touchUsage(actor.id, forumDay(now, cfg.timezone), now, Boolean(opts.count) && usable);
  const remainingSeconds = Math.max(0, Math.min(allowed - used, win.secondsToClose));
  const blocked = !cfg.enabled
    ? "The forum is switched off at the moment."
    : suspension
      ? `You are suspended from the forum${suspension.until ? ` until ${new Intl.DateTimeFormat("en-NG", { timeZone: cfg.timezone, dateStyle: "medium", timeStyle: "short" }).format(suspension.until)}` : ""}. Reason: ${suspension.reason}`
      : !win.open
        ? `The forum is open from ${win.hours} only. Come back then.`
        : used >= allowed
          ? `You have used your ${cfg.dailyMinutes >= 60 && cfg.dailyMinutes % 60 === 0 ? `${cfg.dailyMinutes / 60} hour${cfg.dailyMinutes === 60 ? "" : "s"}` : `${cfg.dailyMinutes} minutes`} of forum time for today. Come back tomorrow.`
          : null;
  return { canUse: !blocked, blocked, hours: win.hours, remainingSeconds: blocked ? 0 : remainingSeconds, dailyMinutes: cfg.dailyMinutes, rules: cfg.rules, maxMessageLength: cfg.maxMessageLength, suspended: Boolean(suspension) };
}

function roomVisible(room: { level: string | null; classId: string | null; archivedAt: Date | null }, scope: { classId: string | null; level: string | null }, classBased = false) {
  if (room.archivedAt || !sectionAllows(room.level, scope.level)) return false;
  // Class-based forum: a student enters only the rooms made for their own class.
  return classBased ? Boolean(room.classId) && room.classId === scope.classId : !room.classId || room.classId === scope.classId;
}

/** Rooms the student may enter: their own class's (or, when the forum is not class-based, their section's too). */
export async function listStudentRooms(actor: Actor) {
  const db = getDb();
  const { classBased } = await getSetting(actor.schoolId, "forum");
  const scope = await studentScope(actor.id);
  const since = new Date(Date.now() - 24 * 3600_000);
  const rooms = await db
    .select({
      r: forumRooms,
      className: classes.name,
      today: sql<number>`(SELECT count(*)::int FROM forum_messages m WHERE m.room_id = ${forumRooms.id} AND m.status = 'VISIBLE' AND m.created_at > ${since})`,
      lastAt: sql<Date | null>`(SELECT max(m.created_at) FROM forum_messages m WHERE m.room_id = ${forumRooms.id} AND m.status = 'VISIBLE')`,
    })
    .from(forumRooms)
    .leftJoin(classes, eq(classes.id, forumRooms.classId))
    .where(and(eq(forumRooms.schoolId, actor.schoolId), eq(forumRooms.audience, "STUDENT"), isNull(forumRooms.archivedAt)))
    .orderBy(asc(forumRooms.sortOrder), asc(forumRooms.name));
  return rooms.filter((x) => roomVisible(x.r, scope, classBased)).map(({ r, className, today, lastAt }) => ({ id: r.id, name: r.name, description: r.description, topic: r.topic as ForumTopic, className, isLocked: r.isLocked, today, lastAt: lastAt ? new Date(lastAt) : null }));
}

async function studentRoom(actor: Actor, roomId: string) {
  if (!/^[0-9a-f-]{36}$/i.test(roomId)) throw new AppError("NOT_FOUND", "Room not found.");
  const [room] = await getDb().select().from(forumRooms).where(and(eq(forumRooms.id, roomId), eq(forumRooms.schoolId, actor.schoolId)));
  // Parent rooms do not exist as far as a student is concerned.
  if (!room || room.audience !== "STUDENT" || !roomVisible(room, await studentScope(actor.id), (await getSetting(actor.schoolId, "forum")).classBased)) throw new AppError("NOT_FOUND", "Room not found.");
  return room;
}

const shortName = (first: string, last: string) => `${first} ${last.slice(0, 1)}.`.trim();

/** The room as the student sees it: recent visible messages only, authors by first name and class. */
export async function roomFeed(actor: Actor, roomId: string) {
  if (actor.userType !== "STUDENT") throw new AppError("FORBIDDEN", "The forum is for students.");
  await requireFeature(actor.id, "COMMUNITY");
  const room = await studentRoom(actor, roomId);
  const state = await forumState(actor, { count: true });
  if (!state.canUse) return { room: { id: room.id, name: room.name, description: room.description, isLocked: room.isLocked }, state, messages: [] };
  const rows = await getDb()
    .select({ m: forumMessages, firstName: users.firstName, lastName: users.lastName, userType: users.userType, className: classes.name })
    .from(forumMessages)
    .innerJoin(users, eq(users.id, forumMessages.userId))
    .leftJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .where(and(eq(forumMessages.roomId, room.id), eq(forumMessages.status, "VISIBLE")))
    .orderBy(desc(forumMessages.createdAt))
    .limit(FEED_SIZE);
  return {
    room: { id: room.id, name: room.name, description: room.description, isLocked: room.isLocked },
    state,
    messages: rows.reverse().map(({ m, firstName, lastName, userType, className }) => ({
      id: m.id,
      body: m.body,
      at: m.createdAt.toISOString(),
      mine: m.userId === actor.id,
      staff: userType !== "STUDENT",
      author: userType !== "STUDENT" ? "Moderator" : shortName(firstName, lastName),
      className: userType !== "STUDENT" ? null : className,
    })),
  };
}

export async function postMessage(actor: Actor, roomId: string, raw: unknown, ctx: ReqCtx) {
  if (actor.userType !== "STUDENT") throw new AppError("FORBIDDEN", "The forum is for students.");
  await requireFeature(actor.id, "COMMUNITY");
  const room = await studentRoom(actor, roomId);
  const state = await forumState(actor, { count: true });
  if (!state.canUse) throw new AppError("FORBIDDEN", state.blocked!);
  if (room.isLocked) throw new AppError("FORBIDDEN", "This room is locked. You can read it but not post.");
  const db = getDb();
  const cfg = await cfgFor(actor.schoolId);
  const now = new Date();
  if (cfg.slowModeSeconds > 0) {
    const [last] = await db.select({ at: forumMessages.createdAt }).from(forumMessages).where(and(eq(forumMessages.userId, actor.id), eq(forumMessages.status, "VISIBLE"))).orderBy(desc(forumMessages.createdAt)).limit(1);
    if (last && now.getTime() - last.at.getTime() < cfg.slowModeSeconds * 1000) throw new AppError("VALIDATION", `Wait ${cfg.slowModeSeconds} seconds between messages.`);
  }
  const checked = checkForumMessage(typeof raw === "string" ? raw : "", { maxLength: cfg.maxMessageLength, blockLinks: cfg.blockLinks, blockedWords: parseBlockedWords(cfg.blockedWords) });
  if (!checked.ok) {
    if (checked.reason !== "EMPTY" && checked.reason !== "TOO_LONG") {
      // Kept for moderators only, so repeat offenders can be seen and dealt with.
      await db.insert(forumMessages).values({ schoolId: actor.schoolId, roomId: room.id, userId: actor.id, body: String(raw).slice(0, 2000), status: "BLOCKED", reason: checked.reason });
      await autoSuspend(actor, cfg, now);
    }
    throw new AppError("VALIDATION", BLOCK_MESSAGES[checked.reason]);
  }
  const [row] = await db.insert(forumMessages).values({ schoolId: actor.schoolId, roomId: room.id, userId: actor.id, body: checked.text }).returning({ id: forumMessages.id });
  void ctx;
  return { id: row.id };
}

async function autoSuspend(actor: Actor, cfg: Awaited<ReturnType<typeof cfgFor>>, now: Date) {
  if (cfg.autoSuspendAfter <= 0) return;
  const db = getDb();
  const dayStart = new Date(now.getTime() - 24 * 3600_000);
  const [{ n }] = await db.select({ n: sql<number>`count(*)::int` }).from(forumMessages).where(and(eq(forumMessages.userId, actor.id), eq(forumMessages.status, "BLOCKED"), gte(forumMessages.createdAt, dayStart)));
  if (n < cfg.autoSuspendAfter || (await activeSuspension(actor.id, now))) return;
  const until = new Date(now.getTime() + cfg.autoSuspendDays * 86_400_000);
  const reason = `Automatic: ${n} messages refused by the safety filter within 24 hours.`;
  await db.insert(forumSuspensions).values({ schoolId: actor.schoolId, userId: actor.id, reason, until });
  await notifyUser({ schoolId: actor.schoolId, userId: actor.id, category: "SECURITY", title: "Suspended from the forum", body: `You have been suspended from the student forum for ${cfg.autoSuspendDays} day(s) for repeatedly trying to post content that is not allowed.`, link: "/student/forum" });
}

/* ------------------------------------------------------------ moderation */

const uuidOpt = z.string().uuid().nullish().or(z.literal("").transform(() => null));
const roomSchema = z.object({
  name: z.string().trim().min(2).max(80),
  description: z.string().trim().max(300).nullish(),
  topic: z.enum(Object.keys(FORUM_TOPICS) as [ForumTopic, ...ForumTopic[]]),
  level: z.enum(SECTIONS).nullish().or(z.literal("").transform(() => null)),
  classId: uuidOpt,
  isLocked: z.boolean().default(false),
  sortOrder: z.coerce.number().int().min(0).max(999).default(0),
});

export async function upsertRoom(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = roomSchema.parse(raw);
  const db = getDb();
  let level: string | null = d.level ?? null;
  if (d.classId) {
    const [c] = await db.select({ level: classes.level }).from(classes).where(and(eq(classes.id, d.classId), eq(classes.schoolId, actor.schoolId)));
    if (!c) throw new AppError("VALIDATION", "Unknown class.");
    level = c.level;
  }
  const values = { ...d, level, description: d.description || null };
  const row = id
    ? (await db.update(forumRooms).set(values).where(and(eq(forumRooms.id, id), eq(forumRooms.schoolId, actor.schoolId))).returning())[0]
    : (await db.insert(forumRooms).values({ ...values, schoolId: actor.schoolId, createdBy: actor.id }).returning())[0];
  if (!row) throw new AppError("NOT_FOUND", "Room not found.");
  await audit({ actor, action: id ? "forum.room.updated" : "forum.room.created", entityType: "forum_room", entityId: row.id, summary: row.name }, ctx);
  return row;
}

export async function setRoomState(actor: Actor, id: string, change: "LOCK" | "UNLOCK" | "ARCHIVE" | "RESTORE", ctx: ReqCtx) {
  const set = change === "LOCK" ? { isLocked: true } : change === "UNLOCK" ? { isLocked: false } : change === "ARCHIVE" ? { archivedAt: new Date() } : { archivedAt: null };
  const [row] = await getDb().update(forumRooms).set(set).where(and(eq(forumRooms.id, id), eq(forumRooms.schoolId, actor.schoolId))).returning();
  if (!row) throw new AppError("NOT_FOUND", "Room not found.");
  await audit({ actor, action: `forum.room.${change.toLowerCase()}`, entityType: "forum_room", entityId: id, summary: row.name }, ctx);
}

/** A starter set of rooms for each section; skips any name that already exists for that section. */
export async function createDefaultRooms(actor: Actor, ctx: ReqCtx) {
  const db = getDb();
  const defaults: { name: string; topic: ForumTopic; description: string; senior?: boolean; junior?: boolean; primary?: boolean }[] = [
    { name: "Homework help", topic: "STUDY_HELP", description: "Ask for help with your homework and help a classmate with theirs.", primary: true },
    { name: "Reading and spelling", topic: "SUBJECTS", description: "New words, spelling, stories and reading practice.", primary: true },
    { name: "Numbers and reasoning", topic: "SUBJECTS", description: "Mathematics, Quantitative Reasoning and Verbal Reasoning questions.", primary: true },
    { name: "Common Entrance", topic: "EXAMINATIONS", description: "Getting ready for the Common Entrance examination and secondary school.", primary: true },
    { name: "Admissions", topic: "ADMISSIONS", description: "University, polytechnic and college admissions: requirements, cut-off marks, courses and deadlines.", senior: true },
    { name: "JAMB (UTME)", topic: "EXAMINATIONS", description: "Preparing for the UTME: subjects, timing, CBT practice and tips.", senior: true },
    { name: "WAEC and NECO", topic: "EXAMINATIONS", description: "WASSCE and SSCE preparation, timetables and how to answer questions.", senior: true },
    { name: "BECE", topic: "EXAMINATIONS", description: "Preparing for the Basic Education Certificate Examination.", junior: true },
    { name: "Mathematics and Sciences", topic: "SUBJECTS", description: "Ask and answer questions in Mathematics and the sciences.", senior: true, junior: true },
    { name: "English, Arts and Commercial subjects", topic: "SUBJECTS", description: "Ask and answer questions in English, arts and commercial subjects.", senior: true, junior: true },
    { name: "Teach each other", topic: "STUDY_HELP", description: "Explain a topic you understand, or ask a classmate to explain one.", senior: true, junior: true },
    { name: "General", topic: "GENERAL", description: "Useful school information and study tips.", senior: true, junior: true, primary: true },
  ];
  const existing = await db.select({ name: forumRooms.name, level: forumRooms.level }).from(forumRooms).where(eq(forumRooms.schoolId, actor.schoolId));
  let created = 0;
  for (const [i, d] of defaults.entries()) {
    for (const level of [d.senior && "SENIOR_SECONDARY", d.junior && "JUNIOR_SECONDARY", d.primary && "PRIMARY"].filter(Boolean) as string[]) {
      if (existing.some((e) => e.name === d.name && e.level === level)) continue;
      await db.insert(forumRooms).values({ schoolId: actor.schoolId, name: d.name, description: d.description, topic: d.topic, level, sortOrder: i, createdBy: actor.id });
      created++;
    }
  }
  // A set of rooms for every class, so each class talks among itself.
  const perClass: { name: string; topic: ForumTopic; description: string }[] = [
    { name: "Class discussion", topic: "GENERAL", description: "Useful school information and study tips for this class." },
    { name: "Subjects and homework", topic: "SUBJECTS", description: "Ask and answer questions on this class's subjects and homework." },
    { name: "Tests and examinations", topic: "EXAMINATIONS", description: "Preparing for this class's tests and examinations." },
    { name: "Teach each other", topic: "STUDY_HELP", description: "Explain a topic you understand, or ask a classmate to explain one." },
  ];
  const classRows = await db.select({ id: classes.id, name: classes.name, level: classes.level, sortOrder: classes.sortOrder }).from(classes).where(and(eq(classes.schoolId, actor.schoolId), isNull(classes.archivedAt)));
  const classRooms = await db.select({ name: forumRooms.name, classId: forumRooms.classId }).from(forumRooms).where(eq(forumRooms.schoolId, actor.schoolId));
  for (const c of classRows) {
    for (const [i, d] of perClass.entries()) {
      const name = `${c.name} — ${d.name}`;
      if (classRooms.some((e) => e.name === name && e.classId === c.id)) continue;
      await db.insert(forumRooms).values({ schoolId: actor.schoolId, name, description: d.description, topic: d.topic, level: c.level, classId: c.id, sortOrder: 100 + c.sortOrder * 10 + i, createdBy: actor.id });
      created++;
    }
  }
  await audit({ actor, action: "forum.rooms.defaults", entityType: "forum_room", entityId: actor.schoolId, summary: `${created} rooms created` }, ctx);
  return { created };
}

export async function listRoomsAdmin(schoolId: string) {
  return getDb()
    .select({
      r: forumRooms,
      className: classes.name,
      messages: sql<number>`(SELECT count(*)::int FROM forum_messages m WHERE m.room_id = ${forumRooms.id} AND m.status = 'VISIBLE')`,
    })
    .from(forumRooms)
    .leftJoin(classes, eq(classes.id, forumRooms.classId))
    .where(eq(forumRooms.schoolId, schoolId))
    .orderBy(asc(forumRooms.level), asc(forumRooms.sortOrder), asc(forumRooms.name));
}

/** Every message, including removed and filter-blocked ones, with the author's real identity. */
export async function listMessagesAdmin(schoolId: string, f: { roomId?: string; status?: string; search?: string; userId?: string } = {}) {
  const conds: SQL[] = [eq(forumMessages.schoolId, schoolId)];
  if (f.roomId) conds.push(eq(forumMessages.roomId, f.roomId));
  if (f.status && ["VISIBLE", "DELETED", "BLOCKED"].includes(f.status)) conds.push(eq(forumMessages.status, f.status));
  if (f.userId) conds.push(eq(forumMessages.userId, f.userId));
  if (f.search?.trim()) conds.push(or(ilike(forumMessages.body, `%${f.search.trim()}%`), ilike(users.firstName, `%${f.search.trim()}%`), ilike(users.lastName, `%${f.search.trim()}%`))!);
  return getDb()
    .select({ m: forumMessages, room: forumRooms.name, firstName: users.firstName, lastName: users.lastName, userType: users.userType, studentNumber: students.studentNumber, className: classes.name })
    .from(forumMessages)
    .innerJoin(forumRooms, eq(forumRooms.id, forumMessages.roomId))
    .innerJoin(users, eq(users.id, forumMessages.userId))
    .leftJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .where(and(...conds))
    .orderBy(desc(forumMessages.createdAt))
    .limit(200);
}

export async function moderateMessage(actor: Actor, id: string, change: "DELETE" | "RESTORE", reason: string | null, ctx: ReqCtx) {
  const db = getDb();
  const [m] = await db.select().from(forumMessages).where(and(eq(forumMessages.id, id), eq(forumMessages.schoolId, actor.schoolId)));
  if (!m) throw new AppError("NOT_FOUND", "Message not found.");
  if (m.status === "BLOCKED") throw new AppError("VALIDATION", "That message was refused by the filter and was never shown to students.");
  await db
    .update(forumMessages)
    .set(change === "DELETE" ? { status: "DELETED", reason: reason?.slice(0, 300) || null, moderatedBy: actor.id, moderatedAt: new Date() } : { status: "VISIBLE", reason: null, moderatedBy: actor.id, moderatedAt: new Date() })
    .where(eq(forumMessages.id, id));
  await audit({ actor, action: change === "DELETE" ? "forum.message.deleted" : "forum.message.restored", entityType: "forum_message", entityId: id, summary: m.body.slice(0, 120) }, ctx);
}

/** Removes every visible message a student has posted (used when suspending a serious offender). */
export async function deleteAllByStudent(actor: Actor, userId: string, ctx: ReqCtx) {
  const rows = await getDb()
    .update(forumMessages)
    .set({ status: "DELETED", reason: "All messages removed by a moderator", moderatedBy: actor.id, moderatedAt: new Date() })
    .where(and(eq(forumMessages.userId, userId), eq(forumMessages.schoolId, actor.schoolId), eq(forumMessages.status, "VISIBLE")))
    .returning({ id: forumMessages.id });
  await audit({ actor, action: "forum.messages.purged", entityType: "user", entityId: userId, summary: `${rows.length} messages removed` }, ctx);
  return { removed: rows.length };
}

export async function postStaffMessage(actor: Actor, roomId: string, body: string, ctx: ReqCtx) {
  const text = body.trim().slice(0, 2000);
  if (!text) throw new AppError("VALIDATION", "Write a message first.");
  const db = getDb();
  const [room] = await db.select().from(forumRooms).where(and(eq(forumRooms.id, roomId), eq(forumRooms.schoolId, actor.schoolId)));
  if (!room) throw new AppError("NOT_FOUND", "Room not found.");
  const [row] = await db.insert(forumMessages).values({ schoolId: actor.schoolId, roomId, userId: actor.id, body: text }).returning({ id: forumMessages.id });
  await audit({ actor, action: "forum.message.staff", entityType: "forum_message", entityId: row.id, summary: `${room.name}: ${text.slice(0, 100)}` }, ctx);
}

const suspendSchema = z.object({ userId: z.string().uuid(), reason: z.string().trim().min(3).max(300), days: z.coerce.number().int().min(0).max(3650) });

/** `days` 0 = until a moderator lifts it. */
export async function suspendStudent(actor: Actor, raw: unknown, ctx: ReqCtx) {
  const d = suspendSchema.parse(raw);
  const db = getDb();
  const [u] = await db.select({ id: users.id, userType: users.userType }).from(users).where(and(eq(users.id, d.userId), eq(users.schoolId, actor.schoolId)));
  if (!u || u.userType !== "STUDENT") throw new AppError("NOT_FOUND", "Student not found.");
  const now = new Date();
  await db.update(forumSuspensions).set({ liftedAt: now, liftedBy: actor.id }).where(and(eq(forumSuspensions.userId, d.userId), isNull(forumSuspensions.liftedAt)));
  const until = d.days > 0 ? new Date(now.getTime() + d.days * 86_400_000) : null;
  const [row] = await db.insert(forumSuspensions).values({ schoolId: actor.schoolId, userId: d.userId, reason: d.reason, until, createdBy: actor.id }).returning();
  await audit({ actor, action: "forum.student.suspended", entityType: "user", entityId: d.userId, summary: `${d.days ? `${d.days} day(s)` : "indefinitely"}: ${d.reason}` }, ctx);
  await notifyUser({ schoolId: actor.schoolId, userId: d.userId, category: "SECURITY", title: "Suspended from the forum", body: `You have been suspended from the student forum${d.days ? ` for ${d.days} day(s)` : ""}. Reason: ${d.reason}`, link: "/student/forum", createdBy: actor.id });
  return row;
}

export async function liftSuspension(actor: Actor, id: string, ctx: ReqCtx) {
  const [row] = await getDb().update(forumSuspensions).set({ liftedAt: new Date(), liftedBy: actor.id }).where(and(eq(forumSuspensions.id, id), eq(forumSuspensions.schoolId, actor.schoolId), isNull(forumSuspensions.liftedAt))).returning();
  if (!row) throw new AppError("NOT_FOUND", "Suspension not found.");
  await audit({ actor, action: "forum.student.reinstated", entityType: "user", entityId: row.userId }, ctx);
  await notifyUser({ schoolId: actor.schoolId, userId: row.userId, category: "SECURITY", title: "Forum access restored", body: "Your suspension from the student forum has been lifted. Please keep to the forum rules.", link: "/student/forum", createdBy: actor.id });
}

export async function listSuspensions(schoolId: string) {
  const now = Date.now();
  const rows = await getDb()
    .select({ s: forumSuspensions, firstName: users.firstName, lastName: users.lastName, studentNumber: students.studentNumber, className: classes.name })
    .from(forumSuspensions)
    .innerJoin(users, eq(users.id, forumSuspensions.userId))
    .leftJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .where(eq(forumSuspensions.schoolId, schoolId))
    .orderBy(desc(forumSuspensions.createdAt))
    .limit(200);
  return rows.map((r) => ({ ...r, active: !r.s.liftedAt && (!r.s.until || r.s.until.getTime() > now) }));
}

export async function forumStats(schoolId: string) {
  const db = getDb();
  const since = new Date(Date.now() - 24 * 3600_000);
  const [m] = await db
    .select({
      today: sql<number>`(count(*) filter (where ${forumMessages.status} = 'VISIBLE' and ${forumMessages.createdAt} > ${since}))::int`,
      blocked: sql<number>`(count(*) filter (where ${forumMessages.status} = 'BLOCKED' and ${forumMessages.createdAt} > ${since}))::int`,
      removed: sql<number>`(count(*) filter (where ${forumMessages.status} = 'DELETED'))::int`,
    })
    .from(forumMessages)
    .where(eq(forumMessages.schoolId, schoolId));
  const now = new Date();
  const [s] = await db.select({ n: sql<number>`count(*)::int` }).from(forumSuspensions).where(and(eq(forumSuspensions.schoolId, schoolId), isNull(forumSuspensions.liftedAt), or(isNull(forumSuspensions.until), gt(forumSuspensions.until, now))));
  const [a] = await db.select({ n: sql<number>`count(*)::int` }).from(forumUsage).where(gt(forumUsage.lastSeenAt, new Date(now.getTime() - 60_000)));
  return { today: m?.today ?? 0, blocked: m?.blocked ?? 0, removed: m?.removed ?? 0, suspended: s.n, online: a.n };
}

/** Used by the student list so moderators can see who is currently barred. */
export async function suspendedUserIds(schoolId: string, userIds: string[]) {
  if (!userIds.length) return new Set<string>();
  const now = new Date();
  const rows = await getDb().select({ userId: forumSuspensions.userId }).from(forumSuspensions).where(and(eq(forumSuspensions.schoolId, schoolId), inArray(forumSuspensions.userId, userIds), isNull(forumSuspensions.liftedAt), or(isNull(forumSuspensions.until), gt(forumSuspensions.until, now))));
  return new Set(rows.map((r) => r.userId));
}
