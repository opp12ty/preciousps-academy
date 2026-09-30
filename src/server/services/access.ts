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
import { accessExtensions, activationCodes, studentAccessPeriods, students, users } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError, NEED_ACCESS_CODE_MESSAGE } from "../errors";
import { decrypt, encrypt, hmac } from "../crypto";
import { rateLimit } from "../rate-limit";
import { getSetting } from "../settings";
import { notifyUser } from "./notifications";

const codeHash = (normalised: string) => hmac(`code:${normalised}`);

/* ------------------------------------------------------------ generation */

export async function generateCodes(
  actor: Actor,
  raw: { count: number; durationDays?: number; note?: string },
  ctx: ReqCtx,
): Promise<{ batchId: string; codes: string[] }> {
  const cfg = await getSetting(actor.schoolId, "accessCodes");
  const input = z
    .object({
      count: z.number().int().min(1).max(cfg.maxBulk),
      durationDays: z.number().int().min(1).max(3650).optional(),
      note: z.string().trim().max(200).optional(),
    })
    .parse(raw);
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
      batchId,
      note: input.note,
      createdBy: actor.id,
    });
  }
  // Unique index on code_hash is the final guarantee; chunk to keep statements small.
  await db.transaction(async (tx) => {
    for (let i = 0; i < rows.length; i += 500) await tx.insert(activationCodes).values(rows.slice(i, i + 500));
    await audit(
      { actor, action: "codes.generated", entityType: "code_batch", entityId: batchId, summary: `${input.count} code(s), ${durationDays} days`, metadata: { count: input.count, durationDays, note: input.note } },
      ctx,
      tx,
    );
  });
  return { batchId, codes };
}

/* ------------------------------------------------------------ activation */

export async function activateCode(actor: Actor, rawCode: string, ctx: ReqCtx) {
  if (actor.userType !== "STUDENT") throw new AppError("FORBIDDEN", "Only student accounts can activate access codes.");
  await rateLimit("codeActivation", `${actor.id}`, ctx);
  await rateLimit("codeActivation", `ip:${ctx.ip ?? "unknown"}`, ctx);
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
    if (stillActive.length > 0 && !(cfg.allowMultipleActive || student?.allow)) {
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
      { actor, action: "codes.activated", entityType: "activation_code", entityId: code.id, summary: `Code …${code.codeSuffix} activated for ${code.durationDays} days`, metadata: { periodId: period.id, expiresAt } },
      ctx,
      tx,
    );
    return { period };
  });

  if ("error" in result) {
    switch (result.error) {
      case "INVALID":
        await securityEvent({ type: "INVALID_ACCESS_CODE", userId: actor.id, schoolId: actor.schoolId, detail: { reason: "not_found" } }, ctx);
        throw new AppError("INVALID_CODE", "That access code is not valid. Check it and try again.");
      case "USED_BY_OTHER":
        await securityEvent({ type: "CODE_REUSE_ATTEMPT", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { codeId: result.codeId } }, ctx);
        throw new AppError("INVALID_CODE", "This access code has already been used by another account. Each code belongs to one student.");
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
    body: `Your access is active for ${p.durationDays} days, until ${fmtLagos(p.currentExpiresAt)}.`,
    link: "/student",
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
}

export async function getAccessState(userId: string): Promise<AccessState> {
  const now = new Date();
  const db = getDb();
  const rows = await db
    .select({ p: studentAccessPeriods, codeSuffix: activationCodes.codeSuffix })
    .from(studentAccessPeriods)
    .innerJoin(activationCodes, eq(activationCodes.id, studentAccessPeriods.codeId))
    .where(eq(studentAccessPeriods.userId, userId))
    .orderBy(desc(studentAccessPeriods.currentExpiresAt))
    .limit(20);
  if (!rows.length) return { status: "NONE", serverNow: now.toISOString(), message: NEED_ACCESS_CODE_MESSAGE };

  // Prefer a currently-valid period, then a suspended one, then the latest.
  const pick =
    rows.find((r) => effectiveStatus(r.p, now) === "ACTIVE") ??
    rows.find((r) => r.p.status === "SUSPENDED") ??
    rows[0];
  const status = effectiveStatus(pick.p, now);
  return {
    status,
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
  await notifyUser({
    schoolId: actor.schoolId,
    userId: out.userId,
    category: "ACCESS",
    title: "Your access was updated",
    body:
      out.status === "ACTIVE"
        ? `Your access is active until ${fmtLagos(out.currentExpiresAt)}.`
        : `Your access status is now ${out.status.toLowerCase()}. ${NEED_ACCESS_CODE_MESSAGE}`,
    link: "/student",
  });
  return out;
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
  return activateCode(studentActor, codes[0], ctx);
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
  q: { status?: string; search?: string; batchId?: string; page?: number; pageSize?: number },
) {
  await syncExpired();
  const page = Math.max(1, q.page ?? 1);
  const pageSize = Math.min(100, Math.max(10, q.pageSize ?? 25));
  const conds: SQL[] = [eq(activationCodes.schoolId, actor.schoolId)];
  if (q.status && ["UNUSED", "ACTIVE", "EXPIRED", "REVOKED", "SUSPENDED"].includes(q.status)) conds.push(eq(activationCodes.status, q.status as "UNUSED"));
  if (q.batchId) conds.push(eq(activationCodes.batchId, q.batchId));
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
