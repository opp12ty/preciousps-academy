import { and, desc, eq, isNull, or, sql } from "drizzle-orm";
import { getDb, type Executor } from "../db";
import { emailOutbox, notificationPreferences, notificationReads, notifications, users } from "../db/schema";
import { getSetting } from "../settings";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { sectionAllows } from "@/core/sections";
import { studentScope } from "./scope";

export const NOTIFICATION_CATEGORIES = [
  { key: "EXAM", label: "Exam announcements" },
  { key: "RESULT", label: "Results" },
  { key: "ACCESS", label: "Access & expiry" },
  { key: "LESSON", label: "New lessons" },
  { key: "ASSIGNMENT", label: "Assignments" },
  { key: "ANNOUNCEMENT", label: "General announcements" },
  { key: "SECURITY", label: "Security alerts" },
] as const;
export type NotificationCategory = (typeof NOTIFICATION_CATEGORIES)[number]["key"];

export interface Audience {
  classId?: string | null;
  departmentId?: string | null;
  /** Section (class level); null/absent = every section. */
  level?: string | null;
  userType?: "STUDENT" | "ADMIN";
}

async function prefFor(userId: string, category: string, db: Executor) {
  const [p] = await db
    .select()
    .from(notificationPreferences)
    .where(and(eq(notificationPreferences.userId, userId), eq(notificationPreferences.category, category)))
    .limit(1);
  // Security alerts cannot be switched off in-app.
  return {
    inApp: category === "SECURITY" ? true : (p?.inApp ?? true),
    email: p?.email ?? true,
  };
}

/** In-app notification to one user, plus e-mail when enabled and preferred. */
export async function notifyUser(
  input: { schoolId: string; userId: string; category: NotificationCategory; title: string; body: string; link?: string; createdBy?: string },
  db: Executor = getDb(),
) {
  const pref = await prefFor(input.userId, input.category, db);
  if (pref.inApp) {
    await db.insert(notifications).values({
      schoolId: input.schoolId,
      userId: input.userId,
      category: input.category,
      title: input.title,
      body: input.body,
      link: input.link,
      createdBy: input.createdBy,
    });
  }
  if (pref.email) {
    const [u] = await db.select({ email: users.email }).from(users).where(eq(users.id, input.userId)).limit(1);
    if (u) await queueEmail(input.schoolId, u.email, input.title, emailTemplate(input.title, input.body, input.link), db);
  }
}

/** Broadcast announcement visible to an audience (no per-user fan-out rows). */
export async function broadcast(
  actor: Actor,
  input: { category: NotificationCategory; title: string; body: string; link?: string; audience: Audience },
  ctx: ReqCtx,
) {
  if (!input.title.trim() || !input.body.trim()) throw new AppError("VALIDATION", "Title and message are required.");
  const db = getDb();
  const [n] = await db
    .insert(notifications)
    .values({
      schoolId: actor.schoolId,
      userId: null,
      audience: input.audience,
      category: input.category,
      title: input.title.trim().slice(0, 160),
      body: input.body.trim().slice(0, 4000),
      link: input.link,
      createdBy: actor.id,
    })
    .returning({ id: notifications.id });
  await audit({ actor, action: "notification.broadcast", entityType: "notification", entityId: n.id, summary: input.title }, ctx);
  return n.id;
}

export async function listNotifications(userId: string, schoolId: string, limit = 30) {
  const db = getDb();
  const s = await studentScope(userId, db);
  const rows = await db
    .select({
      id: notifications.id,
      userId: notifications.userId,
      category: notifications.category,
      title: notifications.title,
      body: notifications.body,
      link: notifications.link,
      readAt: notifications.readAt,
      audience: notifications.audience,
      createdAt: notifications.createdAt,
      broadcastRead: notificationReads.readAt,
    })
    .from(notifications)
    .leftJoin(notificationReads, and(eq(notificationReads.notificationId, notifications.id), eq(notificationReads.userId, userId)))
    .where(and(eq(notifications.schoolId, schoolId), or(eq(notifications.userId, userId), isNull(notifications.userId))))
    .orderBy(desc(notifications.createdAt))
    .limit(limit * 2);
  return rows
    .filter((r) => {
      if (r.userId) return true;
      const a = (r.audience ?? {}) as Audience;
      if (a.userType === "ADMIN") return false;
      if (a.classId && a.classId !== s.classId) return false;
      if (a.departmentId && a.departmentId !== s.departmentId) return false;
      if (!sectionAllows(a.level, s.level)) return false;
      return true;
    })
    .slice(0, limit)
    .map((r) => ({ ...r, read: Boolean(r.readAt ?? r.broadcastRead) }));
}

export async function unreadCount(userId: string, schoolId: string) {
  const list = await listNotifications(userId, schoolId, 50);
  return list.filter((n) => !n.read).length;
}

export async function markRead(userId: string, notificationId: string | "all", schoolId: string) {
  const db = getDb();
  const list = await listNotifications(userId, schoolId, 100);
  const targets = notificationId === "all" ? list.filter((n) => !n.read) : list.filter((n) => n.id === notificationId);
  for (const n of targets) {
    if (n.userId) await db.update(notifications).set({ readAt: new Date() }).where(and(eq(notifications.id, n.id), eq(notifications.userId, userId)));
    else await db.insert(notificationReads).values({ notificationId: n.id, userId }).onConflictDoNothing();
  }
}

export async function getPreferences(userId: string) {
  const rows = await getDb().select().from(notificationPreferences).where(eq(notificationPreferences.userId, userId));
  return NOTIFICATION_CATEGORIES.map((c) => {
    const r = rows.find((x) => x.category === c.key);
    return { category: c.key, label: c.label, inApp: c.key === "SECURITY" ? true : (r?.inApp ?? true), email: r?.email ?? true, locked: c.key === "SECURITY" };
  });
}

export async function setPreference(userId: string, category: string, channel: "inApp" | "email", value: boolean) {
  if (!NOTIFICATION_CATEGORIES.some((c) => c.key === category)) throw new AppError("VALIDATION", "Unknown category.");
  if (category === "SECURITY" && channel === "inApp" && !value) throw new AppError("VALIDATION", "Security alerts cannot be disabled.");
  await getDb()
    .insert(notificationPreferences)
    .values({ userId, category, [channel]: value })
    .onConflictDoUpdate({ target: [notificationPreferences.userId, notificationPreferences.category], set: { [channel]: value } });
}

/* ------------------------------------------------------------------ e-mail */

export function emailTemplate(title: string, body: string, link?: string) {
  const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  const base = process.env.APP_URL ?? "";
  return `<!doctype html><html><body style="margin:0;background:#f4f6fb;font-family:Segoe UI,Arial,sans-serif;color:#0b1f4b">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px">
<table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden">
<tr><td style="background:#0b1f4b;padding:20px 24px;color:#fff">
${base ? `<img src="${base}/brand/logo-mark-128.png" width="40" height="40" alt="Precious PS" style="vertical-align:middle;margin-right:10px">` : ""}
<strong style="font-size:16px;letter-spacing:.04em">Precious PS Academy</strong><br><span style="font-size:12px;color:#d4af37">Precious PS Academy</span></td></tr>
<tr><td style="padding:24px"><h1 style="font-size:18px;margin:0 0 12px">${esc(title)}</h1>
<p style="font-size:14px;line-height:1.6;white-space:pre-line">${esc(body)}</p>
${link ? `<p><a href="${esc(base + link)}" style="display:inline-block;background:#1d4ed8;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none">Open Precious PS Academy</a></p>` : ""}
</td></tr><tr><td style="padding:16px 24px;font-size:11px;color:#64748b;border-top:1px solid #e2e8f0">Learn. Practise. Test. Improve.</td></tr>
</table></td></tr></table></body></html>`;
}

/**
 * Queues an e-mail. Delivery runs through the configured provider (RESEND_API_KEY);
 * without one, messages are HELD in the outbox for Super Admin review — never
 * silently dropped and never claimed as sent.
 */
export async function queueEmail(schoolId: string, to: string, subject: string, html: string, db: Executor = getDb()) {
  const cfg = await getSetting(schoolId, "notifications", db);
  const status = cfg.emailEnabled && process.env.RESEND_API_KEY ? "QUEUED" : "HELD";
  const [row] = await db.insert(emailOutbox).values({ schoolId, toEmail: to, subject, html, status }).returning({ id: emailOutbox.id });
  if (status === "QUEUED") await deliver(row.id, db).catch(() => undefined);
}

async function deliver(id: string, db: Executor) {
  const [m] = await db.select().from(emailOutbox).where(eq(emailOutbox.id, id)).limit(1);
  if (!m || m.status !== "QUEUED") return;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.EMAIL_FROM ?? "Precious PS Academy <no-reply@example.com>", to: m.toEmail, subject: m.subject, html: m.html }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await db.update(emailOutbox).set({ status: "SENT", sentAt: new Date() }).where(eq(emailOutbox.id, id));
  } catch (e) {
    await db.update(emailOutbox).set({ status: "FAILED", error: (e as Error).message.slice(0, 300) }).where(eq(emailOutbox.id, id));
  }
}

export async function outboxStats(schoolId: string) {
  const rows = await getDb()
    .select({ status: emailOutbox.status, n: sql<number>`count(*)::int` })
    .from(emailOutbox)
    .where(eq(emailOutbox.schoolId, schoolId))
    .groupBy(emailOutbox.status);
  return Object.fromEntries(rows.map((r) => [r.status, r.n]));
}
