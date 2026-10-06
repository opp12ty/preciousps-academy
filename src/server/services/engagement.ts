/**
 * Student engagement and family features: study streak + weekly goal, parent report links
 * (read-only, expiring, revocable) and the public enquiry inbox.
 */
import { sql } from "drizzle-orm";
import { getDb } from "../db";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { hmac, randomToken } from "../crypto";
import { rateLimit } from "../rate-limit";
import { getDefaultSchoolId } from "../settings";

type Row = Record<string, unknown>;
const rows = async <T extends Row>(q: ReturnType<typeof sql>) => (await getDb().execute<T>(q)).rows;

/* ------------------------------------------------------------ study streak */

export interface StudyActivity {
  /** Consecutive active days ending today (or yesterday, so the streak survives until midnight). */
  streak: number;
  best: number;
  /** Last 7 days, oldest first, Africa/Lagos calendar days. */
  week: { date: string; label: string; active: boolean; today: boolean }[];
  activeThisWeek: number;
  weeklyGoalDays: number;
  /** Days of activity in the last 30. */
  active30: number;
}

/** A day counts as active when the student finished a lesson, classwork, an assignment or an exam. */
export async function studyActivity(userId: string, weeklyGoalDays = 5): Promise<StudyActivity> {
  const days = await rows<{ day: string }>(sql`
    SELECT DISTINCT to_char(d, 'YYYY-MM-DD') AS day FROM (
      SELECT (created_at AT TIME ZONE 'Africa/Lagos')::date AS d FROM results WHERE user_id = ${userId} AND NOT is_voided
      UNION ALL SELECT (created_at AT TIME ZONE 'Africa/Lagos')::date FROM learning_attempts WHERE user_id = ${userId}
      UNION ALL SELECT (updated_at AT TIME ZONE 'Africa/Lagos')::date FROM learning_progress WHERE user_id = ${userId}
      UNION ALL SELECT (created_at AT TIME ZONE 'Africa/Lagos')::date FROM assignment_attempts WHERE user_id = ${userId}
    ) t WHERE d > (now() AT TIME ZONE 'Africa/Lagos')::date - 400`);
  const set = new Set(days.map((r) => r.day));
  const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Lagos", year: "numeric", month: "2-digit", day: "2-digit" });
  const label = new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", weekday: "short" });
  const now = new Date();
  const dayOf = (offset: number) => new Date(now.getTime() - offset * 86_400_000);
  const key = (d: Date) => fmt.format(d);
  let streak = 0;
  const start = set.has(key(dayOf(0))) ? 0 : 1; // the streak survives until the day is over
  while (set.has(key(dayOf(start + streak)))) streak++;
  const sorted = [...set].sort();
  let best = 0;
  let run = 0;
  let prev: number | null = null;
  for (const d of sorted) {
    const t = Date.parse(`${d}T00:00:00Z`);
    run = prev !== null && t - prev === 86_400_000 ? run + 1 : 1;
    best = Math.max(best, run);
    prev = t;
  }
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = dayOf(6 - i);
    return { date: key(d), label: label.format(d), active: set.has(key(d)), today: i === 6 };
  });
  const active30 = Array.from({ length: 30 }, (_, i) => key(dayOf(i))).filter((k) => set.has(k)).length;
  return { streak, best, week, activeThisWeek: week.filter((w) => w.active).length, weeklyGoalDays, active30 };
}

/* ------------------------------------------------------------ parent links */

export interface ParentLinkRow {
  id: string;
  label: string | null;
  expiresAt: Date;
  revokedAt: Date | null;
  lastViewedAt: Date | null;
  views: number;
  createdAt: Date;
}

export async function listParentLinks(userId: string): Promise<ParentLinkRow[]> {
  const r = await rows<{ id: string; label: string | null; expires_at: Date; revoked_at: Date | null; last_viewed_at: Date | null; views: number; created_at: Date }>(
    sql`SELECT id, label, expires_at, revoked_at, last_viewed_at, views, created_at FROM parent_links WHERE user_id = ${userId} ORDER BY created_at DESC LIMIT 20`,
  );
  return r.map((x) => ({
    id: x.id,
    label: x.label,
    expiresAt: new Date(x.expires_at),
    revokedAt: x.revoked_at ? new Date(x.revoked_at) : null,
    lastViewedAt: x.last_viewed_at ? new Date(x.last_viewed_at) : null,
    views: x.views,
    createdAt: new Date(x.created_at),
  }));
}

/** Creates a private link a parent can open without an account. The token is shown once and stored only as a keyed hash. */
export async function createParentLink(actor: Actor, input: { label?: string; days?: number }, ctx: ReqCtx) {
  await rateLimit("adminWrite", `parentlink:${actor.id}`, ctx, 20);
  const days = Math.min(90, Math.max(1, Math.round(input.days ?? 30)));
  const [{ n }] = await rows<{ n: number }>(sql`SELECT count(*)::int AS n FROM parent_links WHERE user_id = ${actor.id} AND revoked_at IS NULL AND expires_at > now()`);
  if (n >= 5) throw new AppError("VALIDATION", "You already have 5 active parent links. Revoke one first.");
  const token = randomToken(24);
  const label = (input.label ?? "").trim().slice(0, 60) || null;
  await getDb().execute(
    sql`INSERT INTO parent_links (school_id, user_id, token_hash, label, expires_at) VALUES (${actor.schoolId}, ${actor.id}, ${hmac(`parent:${token}`)}, ${label}, now() + make_interval(days => ${days}))`,
  );
  await audit({ actor, action: "family.parent_link_created", entityType: "user", entityId: actor.id, summary: `Parent report link created (${days} days)` }, ctx);
  return { token };
}

export async function revokeParentLink(actor: Actor, id: string, ctx: ReqCtx) {
  const res = await getDb().execute(sql`UPDATE parent_links SET revoked_at = now() WHERE id = ${id} AND user_id = ${actor.id} AND revoked_at IS NULL`);
  if (!res.rowCount) throw new AppError("NOT_FOUND", "Link not found.");
  await audit({ actor, action: "family.parent_link_revoked", entityType: "user", entityId: actor.id, summary: "Parent report link revoked" }, ctx);
}

/** Resolves a token to the student it reports on (and records the view). Returns null when unknown, expired or revoked. */
export async function resolveParentLink(token: string, ctx: ReqCtx): Promise<{ userId: string; schoolId: string } | null> {
  if (!/^[A-Za-z0-9_-]{20,64}$/.test(token)) return null;
  await rateLimit("login", `parentview:${ctx.ip ?? "unknown"}`, ctx, 120);
  const r = await rows<{ user_id: string; school_id: string }>(
    sql`UPDATE parent_links SET views = views + 1, last_viewed_at = now() WHERE token_hash = ${hmac(`parent:${token}`)} AND revoked_at IS NULL AND expires_at > now() RETURNING user_id, school_id`,
  );
  return r[0] ? { userId: r[0].user_id, schoolId: r[0].school_id } : null;
}

/* --------------------------------------------------------------- enquiries */

export const ENQUIRY_TOPICS = ["GENERAL", "ADMISSION", "ACCESS_CODE", "TECHNICAL", "OTHER"] as const;
export const ENQUIRY_STATUSES = ["NEW", "IN_PROGRESS", "RESOLVED", "SPAM"] as const;

export async function createEnquiry(raw: { name?: string; email?: string; phone?: string; topic?: string; message?: string; website?: string }, ctx: ReqCtx) {
  // Honeypot: real people never fill the hidden "website" field.
  if (raw.website) return { ok: true as const };
  await rateLimit("register", `enquiry:${ctx.ip ?? "unknown"}`, ctx, 15);
  const name = (raw.name ?? "").trim();
  const phone = (raw.phone ?? "").replace(/[^\d+ ]/g, "").trim();
  const email = (raw.email ?? "").trim().toLowerCase();
  const message = (raw.message ?? "").trim();
  const fields: Record<string, string[]> = {};
  if (name.length < 2 || name.length > 80) fields.name = ["Enter your full name."];
  if (phone.replace(/\D/g, "").length < 8 || phone.length > 20) fields.phone = ["Enter a phone number we can call."];
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fields.email = ["Enter a valid e-mail or leave it blank."];
  if (message.length < 10 || message.length > 2000) fields.message = ["Write at least a short sentence (10–2000 characters)."];
  if (Object.keys(fields).length) throw new AppError("VALIDATION", "Please correct the highlighted fields.", fields);
  const topic = (ENQUIRY_TOPICS as readonly string[]).includes(raw.topic ?? "") ? raw.topic! : "GENERAL";
  const schoolId = await getDefaultSchoolId();
  await getDb().execute(sql`INSERT INTO enquiries (school_id, name, email, phone, topic, message, ip) VALUES (${schoolId}, ${name}, ${email || null}, ${phone}, ${topic}, ${message}, ${ctx.ip ?? null})`);
  return { ok: true as const };
}

export interface EnquiryRow {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  topic: string;
  message: string;
  status: string;
  note: string | null;
  createdAt: Date;
  handledAt: Date | null;
}

export async function listEnquiries(schoolId: string, status?: string, limit = 100): Promise<{ items: EnquiryRow[]; counts: Record<string, number> }> {
  const filter = status && (ENQUIRY_STATUSES as readonly string[]).includes(status) ? sql`AND status = ${status}` : sql``;
  const items = await rows<{ id: string; name: string; email: string | null; phone: string; topic: string; message: string; status: string; note: string | null; created_at: Date; handled_at: Date | null }>(
    sql`SELECT id, name, email, phone, topic, message, status, note, created_at, handled_at FROM enquiries WHERE school_id = ${schoolId} ${filter} ORDER BY created_at DESC LIMIT ${limit}`,
  );
  const c = await rows<{ status: string; n: number }>(sql`SELECT status, count(*)::int AS n FROM enquiries WHERE school_id = ${schoolId} GROUP BY status`);
  return {
    items: items.map((r) => ({ id: r.id, name: r.name, email: r.email, phone: r.phone, topic: r.topic, message: r.message, status: r.status, note: r.note, createdAt: new Date(r.created_at), handledAt: r.handled_at ? new Date(r.handled_at) : null })),
    counts: Object.fromEntries(c.map((x) => [x.status, x.n])),
  };
}

export async function updateEnquiry(actor: Actor, id: string, input: { status: string; note?: string }, ctx: ReqCtx) {
  if (!(ENQUIRY_STATUSES as readonly string[]).includes(input.status)) throw new AppError("VALIDATION", "Unknown status.");
  const note = (input.note ?? "").trim().slice(0, 1000) || null;
  const res = await getDb().execute(
    sql`UPDATE enquiries SET status = ${input.status}, note = ${note}, handled_by = ${actor.id}, handled_at = CASE WHEN ${input.status} IN ('RESOLVED','SPAM') THEN now() ELSE NULL END WHERE id = ${id} AND school_id = ${actor.schoolId}`,
  );
  if (!res.rowCount) throw new AppError("NOT_FOUND", "Enquiry not found.");
  await audit({ actor, action: "enquiry.updated", entityType: "enquiry", entityId: id, summary: `Enquiry → ${input.status}` }, ctx);
}

export async function newEnquiryCount(schoolId: string): Promise<number> {
  const [r] = await rows<{ n: number }>(sql`SELECT count(*)::int AS n FROM enquiries WHERE school_id = ${schoolId} AND status = 'NEW'`);
  return r?.n ?? 0;
}
