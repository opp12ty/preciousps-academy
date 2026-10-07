import { and, desc, eq, gt, ilike, inArray, lte, or, sql, type SQL } from "drizzle-orm";
import { randomBytes, randomUUID } from "node:crypto";
import { z } from "zod";
import {
  adjustExpiry,
  computeExpiry,
  DAY_MS,
  effectiveStatus,
  formatCode,
  isPlausibleCode,
  normaliseCode,
  remaining,
} from "@/core/access-engine";
import { getDb } from "../db";
import { accessExtensions, activationCodes, classes, studentAccessPeriods, students, users } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError, NEED_ACCESS_CODE_MESSAGE } from "../errors";
import { decrypt, encrypt, hmac } from "../crypto";
import { rateLimit } from "../rate-limit";
import { can } from "@/core/permissions";
import { FEATURE_DENIED, featuresOfCode, sanitiseFeatures, type Feature } from "@/core/features";
import { getSetting } from "../settings";
import { notifyUser } from "./notifications";

const codeHash = (normalised: string) => hmac(`code:${normalised}`);

/* ------------------------------------------------------------ generation */

export async function generateCodes(
  actor: Actor,
  raw: { count: number; durationDays?: number; note?: string; tier?: string; audience?: string; features?: string[] | null; hubSessionMinutes?: number | null; hubCooldownMinutes?: number | null; hubUnlimited?: boolean },
  ctx: ReqCtx,
): Promise<{ batchId: string; codes: string[] }> {
  const cfg = await getSetting(actor.schoolId, "accessCodes");
  const input = z
    .object({
      count: z.number().int().min(1).max(cfg.maxBulk),
      durationDays: z.number().int().min(1).max(3650).optional(),
      note: z.string().trim().max(200).optional(),
      tier: z.enum(["STANDARD", "PREMIUM"]).default("STANDARD"),
      audience: z.enum(["STUDENT", "PARENT"]).default("STUDENT"),
      hubSessionMinutes: z.number().int().min(5).max(600).nullish(),
      hubCooldownMinutes: z.number().int().min(0).max(1440).nullish(),
      hubUnlimited: z.boolean().default(false),
    })
    .parse(raw);
  const forParent = input.audience === "PARENT";
  // A parent code opens the parent portal only: no tier, features or Knowledge Hub limits apply to it.
  if (forParent) Object.assign(input, { tier: "STANDARD", hubSessionMinutes: null, hubCooldownMinutes: null, hubUnlimited: false });
  if (input.tier === "PREMIUM" && !can(actor, "premium.manage")) throw new AppError("FORBIDDEN", "You do not have permission to generate Premium codes.");
  const durationDays = input.durationDays ?? cfg.defaultDays;
  const batchId = randomUUID();
  const db = getDb();
  const codes: string[] = [];
  const rows: (typeof activationCodes.$inferInsert)[] = [];
  const seen = new Set<string>();
  while (rows.length < input.count) {
    const code = formatCode((n) => [...randomBytes(n)]);
    const norm = normaliseCode(code);
    if (seen.has(norm)) continue;
    seen.add(norm);
    codes.push(code);
    rows.push({
      schoolId: actor.schoolId,
      codeHash: codeHash(norm),
      codeEnc: encrypt(code),
      codeSuffix: code.slice(-4),
      status: "UNUSED",
      durationDays,
      tier: input.tier,
      audience: input.audience,
      features: forParent ? null : sanitiseFeatures(raw.features),
      hubSessionMinutes: input.hubSessionMinutes ?? null,
      hubCooldownMinutes: input.hubCooldownMinutes ?? null,
      hubUnlimited: input.hubUnlimited,
      batchId,
      note: input.note,
      createdBy: actor.id,
    });
  }
  // Unique index on code_hash is the final guarantee; chunk to keep statements small.
  await db.transaction(async (tx) => {
    for (let i = 0; i < rows.length; i += 500) await tx.insert(activationCodes).values(rows.slice(i, i + 500));
    await audit(
      { actor, action: "codes.generated", entityType: "code_batch", entityId: batchId, summary: `${input.count} ${forParent ? "parent " : input.tier === "PREMIUM" ? "Premium " : ""}code(s), ${durationDays} days`, metadata: { count: input.count, durationDays, note: input.note, tier: input.tier, audience: input.audience } },
      ctx,
      tx,
    );
  });
  return { batchId, codes };
}

/* ------------------------------------------------------------ activation */

/**
 * `byStaff` is set only by the admin "give access" functions in this file: the attempt limits protect
 * against guessing codes, and staff activating codes they have just generated are not guessing.
 */
export async function activateCode(actor: Actor, rawCode: string, ctx: ReqCtx, opts: { byStaff?: boolean } = {}) {
  if (actor.userType !== "STUDENT" && actor.userType !== "PARENT") throw new AppError("FORBIDDEN", "Only student and parent accounts can activate access codes.");
  const audience = actor.userType === "PARENT" ? "PARENT" : "STUDENT";
  if (!opts.byStaff) {
    await rateLimit("codeActivation", `${actor.id}`, ctx);
    await rateLimit("codeActivation", `ip:${ctx.ip ?? "unknown"}`, ctx);
  }
  if (!isPlausibleCode(rawCode ?? "")) {
    await securityEvent({ type: "INVALID_ACCESS_CODE", userId: actor.id, schoolId: actor.schoolId, detail: { reason: "format" } }, ctx);
    throw new AppError("INVALID_CODE", "That access code is not valid. Check it and try again.");
  }
  const norm = normaliseCode(rawCode);
  const db = getDb();
  const cfg = await getSetting(actor.schoolId, "accessCodes");
  const now = new Date(); // server clock — never the device clock

  const result = await db.transaction(async (tx) => {
    // Serialise activations for this student, then lock the code row.
    await tx.execute(sql`SELECT id FROM users WHERE id = ${actor.id} FOR UPDATE`);
    const [code] = await tx
      .select()
      .from(activationCodes)
      .where(and(eq(activationCodes.codeHash, codeHash(norm)), eq(activationCodes.schoolId, actor.schoolId)))
      .for("update")
      .limit(1);

    if (!code) return { error: "INVALID" as const };
    if (code.audience !== audience) return { error: "WRONG_AUDIENCE" as const };
    if (code.activatedBy && code.activatedBy !== actor.id) return { error: "USED_BY_OTHER" as const, codeId: code.id };
    if (code.activatedBy === actor.id) return { error: "ALREADY_YOURS" as const };
    if (code.status === "REVOKED" || code.status === "SUSPENDED") return { error: "DISABLED" as const, status: code.status };
    if (code.status !== "UNUSED") return { error: "INVALID" as const };

    const [student] = await tx.select({ allow: students.allowConcurrentCodes }).from(students).where(eq(students.userId, actor.id));
    const live = await tx
      .select()
      .from(studentAccessPeriods)
      .where(and(eq(studentAccessPeriods.userId, actor.id), eq(studentAccessPeriods.status, "ACTIVE")))
      .for("update");
    const stillActive = live.filter((p) => p.currentExpiresAt > now);
    // A Premium code may be added on top of standard access: it is an upgrade, not a second copy.
    const premiumNow = stillActive.length
      ? (await tx.select({ id: activationCodes.id }).from(activationCodes).where(and(inArray(activationCodes.id, stillActive.map((p) => p.codeId)), eq(activationCodes.tier, "PREMIUM")))).length > 0
      : false;
    const upgrade = code.tier === "PREMIUM" && !premiumNow;
    if (stillActive.length > 0 && !upgrade && !(cfg.allowMultipleActive || student?.allow)) {
      return { error: "HAS_ACTIVE" as const, until: stillActive[0].currentExpiresAt };
    }
    // Close out lapsed periods so status stays truthful.
    for (const p of live.filter((x) => x.currentExpiresAt <= now)) {
      await tx.update(studentAccessPeriods).set({ status: "EXPIRED", updatedAt: now }).where(eq(studentAccessPeriods.id, p.id));
      await tx.update(activationCodes).set({ status: "EXPIRED", statusChangedAt: now }).where(eq(activationCodes.id, p.codeId));
    }

    const expiresAt = computeExpiry(now, code.durationDays);
    await tx.update(activationCodes).set({ status: "ACTIVE", activatedBy: actor.id, activatedAt: now, statusChangedAt: now }).where(eq(activationCodes.id, code.id));
    const [period] = await tx
      .insert(studentAccessPeriods)
      .values({
        schoolId: actor.schoolId,
        userId: actor.id,
        codeId: code.id,
        status: "ACTIVE",
        activatedAt: now,
        originalExpiresAt: expiresAt,
        currentExpiresAt: expiresAt,
        durationDays: code.durationDays,
      })
      .returning();
    await audit(
      { actor, action: "codes.activated", entityType: "activation_code", entityId: code.id, summary: `${code.tier === "PREMIUM" ? "Premium code" : "Code"} …${code.codeSuffix} activated for ${code.durationDays} days`, metadata: { periodId: period.id, expiresAt } },
      ctx,
      tx,
    );
    return { period, tier: code.tier };
  });

  if ("error" in result) {
    switch (result.error) {
      case "INVALID":
        await securityEvent({ type: "INVALID_ACCESS_CODE", userId: actor.id, schoolId: actor.schoolId, detail: { reason: "not_found" } }, ctx);
        throw new AppError("INVALID_CODE", "That access code is not valid. Check it and try again.");
      case "WRONG_AUDIENCE":
        throw new AppError("INVALID_CODE", audience === "PARENT" ? "This is a student access code. It must be activated on the student's own account. Ask the school for a parent access code." : "This is a parent access code. It only works on a parent or guardian account.");
      case "USED_BY_OTHER":
        await securityEvent({ type: "CODE_REUSE_ATTEMPT", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { codeId: result.codeId } }, ctx);
        throw new AppError("INVALID_CODE", "This access code has already been used by another account. Each code belongs to one account.");
      case "ALREADY_YOURS":
        throw new AppError("CONFLICT", "You have already activated this code.");
      case "DISABLED":
        throw new AppError("INVALID_CODE", `This access code has been ${result.status!.toLowerCase()}. ${NEED_ACCESS_CODE_MESSAGE}`);
      case "HAS_ACTIVE":
        throw new AppError("CONFLICT", `You already have active access until ${fmtLagos(result.until!)}. You can activate a new code after it expires.`);
    }
  }
  const p = result.period;
  await notifyUser({
    schoolId: actor.schoolId,
    userId: actor.id,
    category: "ACCESS",
    title: "Access activated",
    body: `Your ${result.tier === "PREMIUM" ? "Premium " : ""}access is active for ${p.durationDays} days, until ${fmtLagos(p.currentExpiresAt)}.${result.tier === "PREMIUM" ? " The International & Advanced area is now open to you." : ""}`,
    link: audience === "PARENT" ? "/parent" : "/student",
  });
  return p;
}

export function fmtLagos(d: Date) {
  return new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d);
}

/* ----------------------------------------------------------- student view */

export interface AccessState {
  status: "ACTIVE" | "EXPIRED" | "SUSPENDED" | "REVOKED" | "ENDED" | "NONE";
  serverNow: string;
  activatedAt?: string;
  originalExpiresAt?: string;
  expiresAt?: string;
  durationDays?: number;
  remaining?: { totalMs: number; days: number; hours: number; minutes: number };
  codeSuffix?: string;
  message?: string;
  /** True while a Premium code is active: opens the international and advanced programmes. */
  premium: boolean;
  /** Features opened by the student's active central access code(s). Empty when there is no active access. */
  features: Feature[];
  /** Knowledge Hub limits set on the code; null = use the school's default. */
  hub: { sessionMinutes: number | null; cooldownMinutes: number | null; unlimited: boolean };
}

export async function getAccessState(userId: string): Promise<AccessState> {
  const now = new Date();
  const db = getDb();
  const rows = await db
    .select({ p: studentAccessPeriods, codeSuffix: activationCodes.codeSuffix, tier: activationCodes.tier, features: activationCodes.features, hubSessionMinutes: activationCodes.hubSessionMinutes, hubCooldownMinutes: activationCodes.hubCooldownMinutes, hubUnlimited: activationCodes.hubUnlimited })
    .from(studentAccessPeriods)
    .innerJoin(activationCodes, eq(activationCodes.id, studentAccessPeriods.codeId))
    .where(eq(studentAccessPeriods.userId, userId))
    .orderBy(desc(studentAccessPeriods.currentExpiresAt))
    .limit(20);
  if (!rows.length) return { status: "NONE", serverNow: now.toISOString(), message: NEED_ACCESS_CODE_MESSAGE, premium: false, features: [], hub: { sessionMinutes: null, cooldownMinutes: null, unlimited: false } };

  // Prefer a currently-valid period, then a suspended one, then the latest.
  const pick =
    rows.find((r) => effectiveStatus(r.p, now) === "ACTIVE") ??
    rows.find((r) => r.p.status === "SUSPENDED") ??
    rows[0];
  const status = effectiveStatus(pick.p, now);
  const live = rows.filter((r) => effectiveStatus(r.p, now) === "ACTIVE");
  const features = [...new Set(live.flatMap((r) => featuresOfCode(r)))];
  const mins = (pick: (r: (typeof live)[number]) => number | null) => live.map(pick).filter((v): v is number => v !== null);
  return {
    status,
    features,
    hub: { sessionMinutes: mins((r) => r.hubSessionMinutes).length ? Math.max(...mins((r) => r.hubSessionMinutes)) : null, cooldownMinutes: mins((r) => r.hubCooldownMinutes).length ? Math.min(...mins((r) => r.hubCooldownMinutes)) : null, unlimited: live.some((r) => r.hubUnlimited) },
    premium: features.includes("INTERNATIONAL"),
    serverNow: now.toISOString(),
    activatedAt: pick.p.activatedAt.toISOString(),
    originalExpiresAt: pick.p.originalExpiresAt.toISOString(),
    expiresAt: pick.p.currentExpiresAt.toISOString(),
    durationDays: pick.p.durationDays,
    remaining: remaining(pick.p.currentExpiresAt, now),
    codeSuffix: pick.codeSuffix,
    message:
      status === "ACTIVE"
        ? undefined
        : status === "SUSPENDED"
          ? `Your access is currently suspended. ${NEED_ACCESS_CODE_MESSAGE}`
          : status === "REVOKED"
            ? `Your access has been revoked. ${NEED_ACCESS_CODE_MESSAGE}`
            : `Your access has expired. ${NEED_ACCESS_CODE_MESSAGE}`,
  };
}

export async function getAccessHistory(userId: string) {
  const db = getDb();
  const periods = await db
    .select({ p: studentAccessPeriods, codeSuffix: activationCodes.codeSuffix })
    .from(studentAccessPeriods)
    .innerJoin(activationCodes, eq(activationCodes.id, studentAccessPeriods.codeId))
    .where(eq(studentAccessPeriods.userId, userId))
    .orderBy(desc(studentAccessPeriods.activatedAt));
  const ids = periods.map((r) => r.p.id);
  const ext = ids.length
    ? await db.select().from(accessExtensions).where(inArray(accessExtensions.periodId, ids)).orderBy(desc(accessExtensions.createdAt))
    : [];
  const now = new Date();
  return periods.map((r) => ({
    ...r.p,
    codeSuffix: r.codeSuffix,
    effective: effectiveStatus(r.p, now),
    extensions: ext.filter((e) => e.periodId === r.p.id),
  }));
}

/** Throws unless the student currently holds valid access (Rule 8). */
export async function requireActiveAccess(userId: string) {
  const s = await getAccessState(userId);
  if (s.status === "ACTIVE") return s;
  throw new AppError(s.status === "NONE" ? "ACCESS_REQUIRED" : "ACCESS_EXPIRED", s.message ?? NEED_ACCESS_CODE_MESSAGE);
}

export const NEED_PREMIUM_MESSAGE = "This is for Premium students. Ask the school for a Premium access code and enter it on your dashboard.";

/**
 * The student who activated this access code, if any. Used only to identify whom a parent's link
 * request is addressed to; it never links anyone, and an unused code identifies nobody.
 */
export async function studentOfAccessCode(schoolId: string, rawCode: string) {
  if (!isPlausibleCode(rawCode ?? "")) return null;
  const [c] = await getDb().select({ activatedBy: activationCodes.activatedBy }).from(activationCodes).where(and(eq(activationCodes.codeHash, codeHash(normaliseCode(rawCode))), eq(activationCodes.schoolId, schoolId), eq(activationCodes.audience, "STUDENT")));
  return c?.activatedBy ?? null;
}

/** Server-side gate for one feature of the central access code. Hiding a menu item is never enough. */
export async function requireFeature(userId: string, feature: Feature) {
  const s = await requireActiveAccess(userId);
  if (!s.features.includes(feature)) throw new AppError("ACCESS_REQUIRED", FEATURE_DENIED);
  return s;
}

/**
 * True when the student's running code leaves this feature out. Used for features that stay partly
 * open without any access (past results remain visible after expiry): only a code that was set up
 * without the feature closes them.
 */
export async function featureWithheld(userId: string, feature: Feature) {
  const s = await getAccessState(userId);
  return s.status === "ACTIVE" && !s.features.includes(feature);
}

/** Changes what an existing code opens. Works on unused and active codes alike; every change is audited. */
export async function updateCodeEntitlements(actor: Actor, codeId: string, raw: { features?: string[] | null; hubSessionMinutes?: number | null; hubCooldownMinutes?: number | null; hubUnlimited?: boolean }, ctx: ReqCtx) {
  const d = z.object({ hubSessionMinutes: z.number().int().min(5).max(600).nullish(), hubCooldownMinutes: z.number().int().min(0).max(1440).nullish(), hubUnlimited: z.boolean().default(false) }).parse(raw);
  const features = sanitiseFeatures(raw.features);
  const db = getDb();
  const [before] = await db.select().from(activationCodes).where(and(eq(activationCodes.id, codeId), eq(activationCodes.schoolId, actor.schoolId)));
  if (!before) throw new AppError("NOT_FOUND", "Access code not found.");
  if (features?.includes("INTERNATIONAL") && !can(actor, "premium.manage")) throw new AppError("FORBIDDEN", "You do not have permission to open the International & Advanced area.");
  const after = { features, hubSessionMinutes: d.hubSessionMinutes ?? null, hubCooldownMinutes: d.hubCooldownMinutes ?? null, hubUnlimited: d.hubUnlimited };
  await db.update(activationCodes).set(after).where(eq(activationCodes.id, codeId));
  await audit({ actor, action: "codes.entitlements_changed", entityType: "activation_code", entityId: codeId, summary: `Features of code …${before.codeSuffix} changed`, metadata: { before: { features: before.features, hubSessionMinutes: before.hubSessionMinutes, hubCooldownMinutes: before.hubCooldownMinutes, hubUnlimited: before.hubUnlimited }, after } }, ctx);
}

export async function requirePremiumAccess(userId: string) {
  const s = await requireActiveAccess(userId);
  if (!s.premium) throw new AppError("ACCESS_REQUIRED", NEED_PREMIUM_MESSAGE);
  return s;
}

/* ---------------------------------------------------------- admin control */

export const adjustSchema = z.discriminatedUnion("action", [
  z.object({ action: z.literal("EXTEND"), days: z.number().int().min(1).max(3650), reason: z.string().trim().min(3).max(300) }),
  z.object({ action: z.literal("REDUCE"), days: z.number().int().min(1).max(3650), reason: z.string().trim().min(3).max(300) }),
  z.object({ action: z.literal("SET_DURATION"), days: z.number().int().min(1).max(3650), reason: z.string().trim().min(3).max(300) }),
  z.object({ action: z.literal("SET_EXPIRY"), expiresAt: z.coerce.date(), reason: z.string().trim().min(3).max(300) }),
  z.object({ action: z.literal("END"), reason: z.string().trim().min(3).max(300) }),
  z.object({ action: z.literal("SUSPEND"), reason: z.string().trim().min(3).max(300) }),
  z.object({ action: z.literal("RESTORE"), reason: z.string().trim().min(3).max(300) }),
  z.object({ action: z.literal("REVOKE"), reason: z.string().trim().min(3).max(300) }),
  z.object({ action: z.literal("REACTIVATE"), reason: z.string().trim().min(3).max(300) }),
]);

/**
 * Every change to a student's access period: recalculated on the server,
 * stored with before/after values and a reason, and audited (§13).
 */
export async function adjustAccess(actor: Actor, periodId: string, raw: unknown, ctx: ReqCtx) {
  const input = adjustSchema.parse(raw);
  const now = new Date();
  const db = getDb();
  const out = await db.transaction(async (tx) => {
    const [p] = await tx
      .select()
      .from(studentAccessPeriods)
      .where(and(eq(studentAccessPeriods.id, periodId), eq(studentAccessPeriods.schoolId, actor.schoolId)))
      .for("update")
      .limit(1);
    if (!p) throw new AppError("NOT_FOUND", "Access period not found.");
    const prev = p.currentExpiresAt;
    let next = prev;
    let status = p.status;
    let durationDays = p.durationDays;
    let deltaDays: number | null = null;

    switch (input.action) {
      case "EXTEND":
        next = adjustExpiry(p, { kind: "EXTEND", days: input.days }, now);
        deltaDays = input.days;
        if (status === "EXPIRED" || status === "ENDED") status = "ACTIVE";
        break;
      case "REDUCE":
        next = adjustExpiry(p, { kind: "REDUCE", days: input.days }, now);
        deltaDays = -input.days;
        break;
      case "SET_DURATION":
        next = computeExpiry(p.activatedAt, input.days);
        deltaDays = input.days - p.durationDays;
        durationDays = input.days;
        if (next > now && (status === "EXPIRED" || status === "ENDED")) status = "ACTIVE";
        break;
      case "SET_EXPIRY":
        next = adjustExpiry(p, { kind: "SET_EXPIRY", expiresAt: input.expiresAt }, now);
        deltaDays = Math.round((next.getTime() - prev.getTime()) / DAY_MS);
        if (next > now && (status === "EXPIRED" || status === "ENDED")) status = "ACTIVE";
        break;
      case "END":
        next = adjustExpiry(p, { kind: "END" }, now);
        status = "ENDED";
        break;
      case "SUSPEND":
        if (status !== "ACTIVE") throw new AppError("CONFLICT", "Only active access can be suspended.");
        status = "SUSPENDED";
        break;
      case "RESTORE":
        if (status !== "SUSPENDED") throw new AppError("CONFLICT", "Only suspended access can be restored.");
        status = "ACTIVE";
        break;
      case "REVOKE":
        if (status === "REVOKED") throw new AppError("CONFLICT", "Access is already revoked.");
        status = "REVOKED";
        break;
      case "REACTIVATE":
        if (status !== "REVOKED" && status !== "ENDED" && status !== "EXPIRED") throw new AppError("CONFLICT", "Access is not revoked, ended or expired.");
        status = "ACTIVE";
        if (next <= now) throw new AppError("VALIDATION", "Extend or set a future expiry first — the period has already lapsed.");
        break;
    }
    if (status === "ACTIVE" && next <= now) status = "EXPIRED";

    // Reactivating must not create a second simultaneously active period.
    if (status === "ACTIVE" && p.status !== "ACTIVE") {
      const cfg = await getSetting(actor.schoolId, "accessCodes", tx);
      const others = await tx
        .select({ id: studentAccessPeriods.id })
        .from(studentAccessPeriods)
        .where(and(eq(studentAccessPeriods.userId, p.userId), eq(studentAccessPeriods.status, "ACTIVE"), gt(studentAccessPeriods.currentExpiresAt, now), sql`${studentAccessPeriods.id} <> ${p.id}`));
      const [s] = await tx.select({ allow: students.allowConcurrentCodes }).from(students).where(eq(students.userId, p.userId));
      if (others.length && !(cfg.allowMultipleActive || s?.allow)) throw new AppError("CONFLICT", "The student already has another active access period.");
    }

    const [updated] = await tx
      .update(studentAccessPeriods)
      .set({ currentExpiresAt: next, status, durationDays, updatedAt: now })
      .where(eq(studentAccessPeriods.id, p.id))
      .returning();
    const codeStatus = status === "ACTIVE" ? "ACTIVE" : status === "SUSPENDED" ? "SUSPENDED" : status === "REVOKED" ? "REVOKED" : "EXPIRED";
    await tx.update(activationCodes).set({ status: codeStatus, statusChangedAt: now, statusReason: input.reason }).where(eq(activationCodes.id, p.codeId));
    await tx.insert(accessExtensions).values({ periodId: p.id, action: input.action, previousExpiresAt: prev, newExpiresAt: next, deltaDays, reason: input.reason, adminId: actor.id });
    await audit(
      {
        actor,
        action: `access.${input.action.toLowerCase()}`,
        entityType: "access_period",
        entityId: p.id,
        summary: `${input.action} — ${input.reason}`,
        metadata: { userId: p.userId, previousExpiresAt: prev, newExpiresAt: next, previousStatus: p.status, newStatus: status, deltaDays },
      },
      ctx,
      tx,
    );
    return updated;
  });
  const parent = await isParent(out.userId);
  await notifyUser({
    schoolId: actor.schoolId,
    userId: out.userId,
    category: "ACCESS",
    title: "Your access was updated",
    body:
      out.status === "ACTIVE"
        ? `Your access is active until ${fmtLagos(out.currentExpiresAt)}.`
        : `Your access status is now ${out.status.toLowerCase()}. ${parent ? NEED_PARENT_CODE_MESSAGE : NEED_ACCESS_CODE_MESSAGE}`,
    link: parent ? "/parent/access" : "/student",
  });
  return out;
}

const isParent = async (userId: string) => (await getDb().select({ t: users.userType }).from(users).where(eq(users.id, userId)))[0]?.t === "PARENT";

/* ----------------------------------------------------------- parent portal */

export const NEED_PARENT_CODE_MESSAGE = "The parent portal needs a parent access code. To get one, reach the Super Admin (08067578112), then enter it here.";

export interface ParentAccess {
  active: boolean;
  /** CODE: a parent access code is running. GRACE: the free period given to parents registered before codes were introduced. */
  source: "CODE" | "GRACE" | "NONE";
  until: string | null;
  /** True in the last seven days, so the portal can remind the parent. */
  endsSoon: boolean;
  status: AccessState["status"];
  message?: string;
}

/** Whether this parent may use the parent portal now. Read on the server for every page and action. */
export async function getParentAccess(userId: string): Promise<ParentAccess> {
  const [st, [u]] = await Promise.all([getAccessState(userId), getDb().select({ grace: users.parentGraceUntil }).from(users).where(eq(users.id, userId))]);
  const now = new Date();
  const soon = (d: Date) => d.getTime() - now.getTime() <= 7 * DAY_MS;
  if (st.status === "ACTIVE") return { active: true, source: "CODE", until: st.expiresAt ?? null, endsSoon: st.expiresAt ? soon(new Date(st.expiresAt)) : false, status: st.status };
  if (st.status !== "SUSPENDED" && st.status !== "REVOKED" && u?.grace && u.grace > now) return { active: true, source: "GRACE", until: u.grace.toISOString(), endsSoon: soon(u.grace), status: st.status };
  const why = st.status === "SUSPENDED" ? "Your parent access is currently suspended. " : st.status === "REVOKED" ? "Your parent access has been revoked. " : st.status === "NONE" && !u?.grace ? "" : "Your parent access has expired. ";
  return { active: false, source: "NONE", endsSoon: false, until: st.expiresAt ?? u?.grace?.toISOString() ?? null, status: st.status, message: `${why}${NEED_PARENT_CODE_MESSAGE}` };
}

/** Throws unless the parent holds a running access code (or is still inside the free period). */
export async function requireParentAccess(userId: string) {
  const a = await getParentAccess(userId);
  if (!a.active) throw new AppError(a.status === "NONE" ? "ACCESS_REQUIRED" : "ACCESS_EXPIRED", a.message ?? NEED_PARENT_CODE_MESSAGE);
  return a;
}

/** Admin gives a parent access in one step: a fresh parent code is generated and activated for them. */
export async function assignAccessToParent(actor: Actor, parentUserId: string, days: number | undefined, reason: string, ctx: ReqCtx) {
  if (reason.trim().length < 3) throw new AppError("VALIDATION", "Record a reason.");
  const [u] = await getDb()
    .select({ id: users.id, schoolId: users.schoolId, userType: users.userType, email: users.email, firstName: users.firstName, lastName: users.lastName })
    .from(users)
    .where(and(eq(users.id, parentUserId), eq(users.schoolId, actor.schoolId)));
  if (!u || u.userType !== "PARENT") throw new AppError("NOT_FOUND", "Parent account not found.");
  const { codes } = await generateCodes(actor, { count: 1, durationDays: days, audience: "PARENT", note: `Assigned directly: ${reason}`.slice(0, 200) }, ctx);
  const parentActor: Actor = { id: u.id, schoolId: u.schoolId, userType: "PARENT", permissions: new Set(), name: `${u.firstName} ${u.lastName}`, email: u.email };
  return activateCode(parentActor, codes[0], ctx, { byStaff: true });
}

/** Admin assigns & activates a fresh code for a student in one step. */
export async function assignAccessToStudent(actor: Actor, studentUserId: string, days: number | undefined, reason: string, ctx: ReqCtx) {
  const [u] = await getDb()
    .select({ id: users.id, schoolId: users.schoolId, userType: users.userType, email: users.email, firstName: users.firstName, lastName: users.lastName })
    .from(users)
    .where(and(eq(users.id, studentUserId), eq(users.schoolId, actor.schoolId)));
  if (!u || u.userType !== "STUDENT") throw new AppError("NOT_FOUND", "Student not found.");
  const { codes } = await generateCodes(actor, { count: 1, durationDays: days, note: `Assigned directly: ${reason}`.slice(0, 200) }, ctx);
  const studentActor: Actor = { id: u.id, schoolId: u.schoolId, userType: "STUDENT", permissions: new Set(), name: `${u.firstName} ${u.lastName}`, email: u.email };
  return activateCode(studentActor, codes[0], ctx, { byStaff: true });
}

export async function setCodeStatus(actor: Actor, codeId: string, action: "SUSPEND" | "REVOKE" | "RESTORE", reason: string, ctx: ReqCtx) {
  if (reason.trim().length < 3) throw new AppError("VALIDATION", "Record a reason.");
  const db = getDb();
  const [code] = await db.select().from(activationCodes).where(and(eq(activationCodes.id, codeId), eq(activationCodes.schoolId, actor.schoolId)));
  if (!code) throw new AppError("NOT_FOUND", "Code not found.");
  if (code.activatedBy) {
    const [p] = await db.select({ id: studentAccessPeriods.id }).from(studentAccessPeriods).where(eq(studentAccessPeriods.codeId, code.id));
    const map = { SUSPEND: "SUSPEND", REVOKE: "REVOKE", RESTORE: code.status === "REVOKED" ? "REACTIVATE" : "RESTORE" } as const;
    return adjustAccess(actor, p.id, { action: map[action], reason }, ctx);
  }
  const next = action === "RESTORE" ? "UNUSED" : action === "SUSPEND" ? "SUSPENDED" : "REVOKED";
  if (action === "RESTORE" && code.status === "UNUSED") throw new AppError("CONFLICT", "Code is already usable.");
  await db.update(activationCodes).set({ status: next, statusChangedAt: new Date(), statusReason: reason }).where(eq(activationCodes.id, code.id));
  await audit({ actor, action: `codes.${action.toLowerCase()}`, entityType: "activation_code", entityId: code.id, summary: `Code …${code.codeSuffix}: ${reason}` }, ctx);
}

export async function updateUnusedCodeDuration(actor: Actor, codeIds: string[] | "ALL_UNUSED", days: number, ctx: ReqCtx) {
  if (!Number.isInteger(days) || days < 1 || days > 3650) throw new AppError("VALIDATION", "Days must be 1–3650.");
  const where = and(
    eq(activationCodes.schoolId, actor.schoolId),
    eq(activationCodes.status, "UNUSED"),
    codeIds === "ALL_UNUSED" ? undefined : inArray(activationCodes.id, codeIds),
  );
  const res = await getDb().update(activationCodes).set({ durationDays: days }).where(where).returning({ id: activationCodes.id });
  await audit({ actor, action: "codes.duration_changed", entityType: "activation_code", summary: `${res.length} unused code(s) set to ${days} days` }, ctx);
  return res.length;
}

/** Reveal a code for re-issue/export. Audited every time. */
export async function revealCode(actor: Actor, codeId: string, ctx: ReqCtx) {
  const [c] = await getDb().select().from(activationCodes).where(and(eq(activationCodes.id, codeId), eq(activationCodes.schoolId, actor.schoolId)));
  if (!c) throw new AppError("NOT_FOUND", "Code not found.");
  await audit({ actor, action: "codes.revealed", entityType: "activation_code", entityId: c.id }, ctx);
  return decrypt(c.codeEnc);
}

/** Marks lapsed ACTIVE periods/codes as EXPIRED (idempotent; run lazily and via cron). */
export async function syncExpired() {
  const now = new Date();
  const db = getDb();
  const lapsed = await db
    .update(studentAccessPeriods)
    .set({ status: "EXPIRED", updatedAt: now })
    .where(and(eq(studentAccessPeriods.status, "ACTIVE"), lte(studentAccessPeriods.currentExpiresAt, now)))
    .returning({ codeId: studentAccessPeriods.codeId });
  if (lapsed.length) {
    await db
      .update(activationCodes)
      .set({ status: "EXPIRED", statusChangedAt: now })
      .where(inArray(activationCodes.id, lapsed.map((l) => l.codeId)));
  }
  return lapsed.length;
}

export async function listCodes(
  actor: Actor,
  q: { status?: string; search?: string; batchId?: string; audience?: string; page?: number; pageSize?: number },
) {
  await syncExpired();
  const page = Math.max(1, q.page ?? 1);
  const pageSize = Math.min(100, Math.max(10, q.pageSize ?? 25));
  const conds: SQL[] = [eq(activationCodes.schoolId, actor.schoolId)];
  if (q.status && ["UNUSED", "ACTIVE", "EXPIRED", "REVOKED", "SUSPENDED"].includes(q.status)) conds.push(eq(activationCodes.status, q.status as "UNUSED"));
  if (q.batchId) conds.push(eq(activationCodes.batchId, q.batchId));
  if (q.audience === "STUDENT" || q.audience === "PARENT") conds.push(eq(activationCodes.audience, q.audience));
  if (q.search?.trim()) {
    const s = q.search.trim();
    const norm = normaliseCode(s);
    const or1 = or(
      ilike(activationCodes.codeSuffix, `%${s.slice(-4)}%`),
      ilike(users.email, `%${s}%`),
      ilike(users.lastName, `%${s}%`),
      isPlausibleCode(s) ? eq(activationCodes.codeHash, codeHash(norm)) : undefined,
    );
    if (or1) conds.push(or1);
  }
  const db = getDb();
  const where = and(...conds);
  const rows = await db
    .select({
      id: activationCodes.id,
      suffix: activationCodes.codeSuffix,
      status: activationCodes.status,
      durationDays: activationCodes.durationDays,
      tier: activationCodes.tier,
      audience: activationCodes.audience,
      features: activationCodes.features,
      hubSessionMinutes: activationCodes.hubSessionMinutes,
      hubCooldownMinutes: activationCodes.hubCooldownMinutes,
      hubUnlimited: activationCodes.hubUnlimited,
      batchId: activationCodes.batchId,
      note: activationCodes.note,
      createdAt: activationCodes.createdAt,
      activatedAt: activationCodes.activatedAt,
      studentId: users.id,
      studentName: sql<string | null>`${users.firstName} || ' ' || ${users.lastName}`,
      studentEmail: users.email,
      expiresAt: studentAccessPeriods.currentExpiresAt,
      originalExpiresAt: studentAccessPeriods.originalExpiresAt,
      periodId: studentAccessPeriods.id,
    })
    .from(activationCodes)
    .leftJoin(users, eq(users.id, activationCodes.activatedBy))
    .leftJoin(studentAccessPeriods, eq(studentAccessPeriods.codeId, activationCodes.id))
    .where(where)
    .orderBy(desc(activationCodes.createdAt))
    .limit(pageSize)
    .offset((page - 1) * pageSize);
  const [{ total }] = await db
    .select({ total: sql<number>`count(*)::int` })
    .from(activationCodes)
    .leftJoin(users, eq(users.id, activationCodes.activatedBy))
    .where(where);
  const counts = await db
    .select({ status: activationCodes.status, n: sql<number>`count(*)::int` })
    .from(activationCodes)
    .where(eq(activationCodes.schoolId, actor.schoolId))
    .groupBy(activationCodes.status);
  return { rows, total, page, pageSize, counts: Object.fromEntries(counts.map((c) => [c.status, c.n])) as Record<string, number> };
}

/* ------------------------------------------------- transfer and class access */

/**
 * Moves a running access period to another student, for a code activated on the wrong account.
 * The remaining time moves as it is; nothing is added. The first student loses access at once.
 */
export async function transferAccess(actor: Actor, periodId: string, toIdentifier: string, reason: string, ctx: ReqCtx) {
  if (reason.trim().length < 3) throw new AppError("VALIDATION", "Record a reason.");
  const idKey = (toIdentifier ?? "").trim().toLowerCase();
  if (idKey.length < 2) throw new AppError("VALIDATION", "Enter the Student ID, username or e-mail of the student who should receive the access.");
  const db = getDb();
  const [target] = await db
    .select({ id: users.id, firstName: users.firstName, lastName: users.lastName, allow: students.allowConcurrentCodes })
    .from(users)
    .innerJoin(students, eq(students.userId, users.id))
    .where(and(eq(users.schoolId, actor.schoolId), eq(users.userType, "STUDENT"), sql`${users.deletedAt} IS NULL`, sql`(lower(${students.studentNumber}) = ${idKey} OR lower(${students.username}) = ${idKey} OR lower(${users.email}) = ${idKey})`));
  if (!target) throw new AppError("NOT_FOUND", "No student matches that Student ID, username or e-mail.");
  const now = new Date();
  const moved = await db.transaction(async (tx) => {
    const [p] = await tx.select().from(studentAccessPeriods).where(and(eq(studentAccessPeriods.id, periodId), eq(studentAccessPeriods.schoolId, actor.schoolId))).for("update").limit(1);
    if (!p) throw new AppError("NOT_FOUND", "Access period not found.");
    if (p.userId === target.id) throw new AppError("CONFLICT", "That student already holds this access.");
    if (p.status !== "ACTIVE" || p.currentExpiresAt <= now) throw new AppError("CONFLICT", "Only access that is still running can be transferred.");
    const [code] = await tx.select({ audience: activationCodes.audience, suffix: activationCodes.codeSuffix }).from(activationCodes).where(eq(activationCodes.id, p.codeId));
    if (code?.audience !== "STUDENT") throw new AppError("CONFLICT", "A parent access code cannot be transferred to a student.");
    const others = await tx.select({ id: studentAccessPeriods.id }).from(studentAccessPeriods).where(and(eq(studentAccessPeriods.userId, target.id), eq(studentAccessPeriods.status, "ACTIVE"), gt(studentAccessPeriods.currentExpiresAt, now)));
    const cfg = await getSetting(actor.schoolId, "accessCodes", tx);
    if (others.length && !(cfg.allowMultipleActive || target.allow)) throw new AppError("CONFLICT", "The receiving student already has active access.");
    await tx.update(studentAccessPeriods).set({ userId: target.id, updatedAt: now }).where(eq(studentAccessPeriods.id, p.id));
    await tx.update(activationCodes).set({ activatedBy: target.id, statusChangedAt: now, statusReason: reason }).where(eq(activationCodes.id, p.codeId));
    await tx.insert(accessExtensions).values({ periodId: p.id, action: "TRANSFER", previousExpiresAt: p.currentExpiresAt, newExpiresAt: p.currentExpiresAt, deltaDays: 0, reason, adminId: actor.id });
    await audit({ actor, action: "access.transfer", entityType: "access_period", entityId: p.id, summary: `Access …${code.suffix} transferred to ${target.firstName} ${target.lastName} — ${reason}`, metadata: { fromUserId: p.userId, toUserId: target.id, expiresAt: p.currentExpiresAt } }, ctx, tx);
    return { fromUserId: p.userId, expiresAt: p.currentExpiresAt };
  });
  await notifyUser({ schoolId: actor.schoolId, userId: moved.fromUserId, category: "ACCESS", title: "Your access was moved", body: `The school has moved the access code on your account to another student. ${NEED_ACCESS_CODE_MESSAGE}`, link: "/student" });
  await notifyUser({ schoolId: actor.schoolId, userId: target.id, category: "ACCESS", title: "Access activated", body: `The school has given you access until ${fmtLagos(moved.expiresAt)}.`, link: "/student" });
  return { to: `${target.firstName} ${target.lastName}`, expiresAt: moved.expiresAt };
}

const CLASS_BATCH = 20;

/**
 * Gives access to the students of one class who have none. Works through the class a few students
 * at a time: call it again while `remaining` is above zero. Each student gets their own fresh code.
 */
export async function assignAccessToClass(actor: Actor, raw: { classId: string; departmentId?: string | null; days?: number; reason: string }, ctx: ReqCtx) {
  const input = z.object({ classId: z.string().uuid("Choose a class."), departmentId: z.string().uuid().nullish(), days: z.number().int().min(1).max(3650).optional(), reason: z.string().trim().min(3, "Record a reason.").max(200) }).parse(raw);
  const db = getDb();
  const [cls] = await db.select({ id: classes.id, name: classes.name }).from(classes).where(and(eq(classes.id, input.classId), eq(classes.schoolId, actor.schoolId)));
  if (!cls) throw new AppError("NOT_FOUND", "Class not found.");
  const waiting = await db
    .select({ id: users.id, email: users.email, firstName: users.firstName, lastName: users.lastName })
    .from(users)
    .innerJoin(students, eq(students.userId, users.id))
    .where(
      and(
        eq(users.schoolId, actor.schoolId),
        eq(users.userType, "STUDENT"),
        eq(users.status, "ACTIVE"),
        sql`${users.deletedAt} IS NULL`,
        eq(students.classId, cls.id),
        input.departmentId ? eq(students.departmentId, input.departmentId) : undefined,
        sql`NOT EXISTS (SELECT 1 FROM student_access_periods p WHERE p.user_id = ${users.id} AND p.status IN ('ACTIVE','SUSPENDED') AND p.current_expires_at > now())`,
      ),
    )
    .orderBy(users.lastName, users.firstName)
    .limit(CLASS_BATCH + 1);
  const batch = waiting.slice(0, CLASS_BATCH);
  if (!batch.length) return { className: cls.name, assigned: 0, failed: 0, remaining: 0 };
  const { codes } = await generateCodes(actor, { count: batch.length, durationDays: input.days, note: `${cls.name}: ${input.reason}`.slice(0, 200) }, ctx);
  let assigned = 0;
  let failed = 0;
  for (const [i, u] of batch.entries()) {
    try {
      await activateCode({ id: u.id, schoolId: actor.schoolId, userType: "STUDENT", permissions: new Set(), name: `${u.firstName} ${u.lastName}`, email: u.email }, codes[i], ctx, { byStaff: true });
      assigned++;
    } catch {
      failed++; // the unused code stays in the batch and can be given out by hand
    }
  }
  // A student who failed would be picked again for ever, so the caller stops when nothing was assigned.
  return { className: cls.name, assigned, failed, remaining: assigned === 0 ? 0 : Math.max(0, waiting.length - batch.length) };
}
