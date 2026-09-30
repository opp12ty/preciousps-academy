import { and, asc, desc, eq, ilike, inArray, isNull, or, sql, type SQL } from "drizzle-orm";
import { z } from "zod";
import { ALL_PERMISSIONS, sanitisePermissionList, SYSTEM_ROLES } from "@/core/permissions";
import { checkPassword } from "@/core/password-policy";
import { getDb } from "../db";
import {

  assignmentAttempts,
  auditLogs,
  classes,
  departments,
  learningProgress,
  permissions,
  rolePermissions,
  roles,
  securityEvents,
  sessions,

  students,
  userRoles,
  users,
} from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { generateTemporaryPassword, hashPassword } from "../auth/password";
import { revokeAllSessions } from "../auth/session";
import { getSetting } from "../settings";
import { getAccessHistory, getAccessState } from "./access";
import { learningSummary } from "./study";
import { resolvePlacement } from "./scope";
import { listStudentResults } from "./exams";

/* ============================================================ students */

export interface StudentFilter {
  search?: string;
  classId?: string;
  departmentId?: string;
  status?: string;
  access?: "ACTIVE" | "EXPIRED" | "NONE";
  sort?: "newest" | "name" | "lastLogin";
  page?: number;
  pageSize?: number;
}

export function studentConditions(schoolId: string, f: StudentFilter): SQL[] {
  const conds: SQL[] = [eq(users.schoolId, schoolId), eq(users.userType, "STUDENT"), isNull(users.deletedAt)];
  if (f.classId) conds.push(eq(students.classId, f.classId));
  if (f.departmentId) conds.push(eq(students.departmentId, f.departmentId));
  if (f.status === "ACTIVE" || f.status === "SUSPENDED") conds.push(eq(users.status, f.status));
  if (f.search?.trim()) {
    const s = `%${f.search.trim()}%`;
    conds.push(or(ilike(users.email, s), ilike(users.phone, s), ilike(students.studentNumber, s), sql`${users.firstName} || ' ' || ${users.lastName} ILIKE ${s}`)!);
  }
  if (f.access === "ACTIVE")
    conds.push(sql`EXISTS (SELECT 1 FROM student_access_periods p WHERE p.user_id = ${users.id} AND p.status = 'ACTIVE' AND p.current_expires_at > now())`);
  if (f.access === "EXPIRED")
    conds.push(
      sql`EXISTS (SELECT 1 FROM student_access_periods p WHERE p.user_id = ${users.id}) AND NOT EXISTS (SELECT 1 FROM student_access_periods p WHERE p.user_id = ${users.id} AND p.status = 'ACTIVE' AND p.current_expires_at > now())`,
    );
  if (f.access === "NONE") conds.push(sql`NOT EXISTS (SELECT 1 FROM student_access_periods p WHERE p.user_id = ${users.id})`);
  return conds;
}

export async function listStudents(actor: Actor, f: StudentFilter) {
  const db = getDb();
  const page = Math.max(1, f.page ?? 1);
  const pageSize = Math.min(100, Math.max(10, f.pageSize ?? 25));
  const where = and(...studentConditions(actor.schoolId, f));
  const order = f.sort === "name" ? [asc(users.lastName), asc(users.firstName)] : f.sort === "lastLogin" ? [sql`${users.lastLoginAt} DESC NULLS LAST`] : [desc(users.createdAt)];
  const rows = await db
    .select({
      id: users.id,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      phone: users.phone,
      status: users.status,
      createdAt: users.createdAt,
      lastLoginAt: users.lastLoginAt,
      studentNumber: students.studentNumber,
      className: classes.name,
      department: departments.name,
      accessUntil: sql<Date | null>`(SELECT max(p.current_expires_at) FROM student_access_periods p WHERE p.user_id = ${users.id} AND p.status = 'ACTIVE')`,
      accessStatus: sql<string | null>`(SELECT p.status FROM student_access_periods p WHERE p.user_id = ${users.id} ORDER BY p.current_expires_at DESC LIMIT 1)`,
    })
    .from(users)
    .innerJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .leftJoin(departments, eq(departments.id, students.departmentId))
    .where(where)
    .orderBy(...order)
    .limit(pageSize)
    .offset((page - 1) * pageSize);
  const [{ total }] = await db.select({ total: sql<number>`count(*)::int` }).from(users).innerJoin(students, eq(students.userId, users.id)).where(where);
  const now = new Date();
  return {
    rows: rows.map((r) => ({
      ...r,
      access: r.accessUntil && new Date(r.accessUntil) > now && r.accessStatus === "ACTIVE" ? "ACTIVE" : r.accessStatus === "SUSPENDED" ? "SUSPENDED" : r.accessStatus ? "EXPIRED" : "NONE",
    })),
    total,
    page,
    pageSize,
  };
}

/** Everything the Super Admin may see about a student — never the password (§7). */
export async function studentProfileAdmin(actor: Actor, userId: string) {
  const db = getDb();
  const [row] = await db
    .select({
      u: {
        id: users.id,
        firstName: users.firstName,
        middleName: users.middleName,
        lastName: users.lastName,
        email: users.email,
        phone: users.phone,
        status: users.status,
        mustChangePassword: users.mustChangePassword,
        failedLoginCount: users.failedLoginCount,
        lockedUntil: users.lockedUntil,
        lastLoginAt: users.lastLoginAt,
        passwordChangedAt: users.passwordChangedAt,
        createdAt: users.createdAt,
        avatarAssetId: users.avatarAssetId,
      },
      s: students,
      className: classes.name,
      department: departments.name,
    })
    .from(users)
    .innerJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .leftJoin(departments, eq(departments.id, students.departmentId))
    .where(and(eq(users.id, userId), eq(users.schoolId, actor.schoolId), eq(users.userType, "STUDENT")));
  if (!row) throw new AppError("NOT_FOUND", "Student not found.");
  const studentActor = { ...actor, id: userId };
  const [access, accessHistory, resultsList, learning, sess, sec, activity, assignmentsDone] = await Promise.all([
    getAccessState(userId),
    getAccessHistory(userId),
    listStudentResults(studentActor),
    learningSummary(userId),
    db
      .select({ id: sessions.id, createdAt: sessions.createdAt, lastSeenAt: sessions.lastSeenAt, expiresAt: sessions.expiresAt, revokedAt: sessions.revokedAt, revokedReason: sessions.revokedReason, ip: sessions.ip, userAgent: sessions.userAgent })
      .from(sessions)
      .where(eq(sessions.userId, userId))
      .orderBy(desc(sessions.createdAt))
      .limit(20),
    db.select().from(securityEvents).where(eq(securityEvents.userId, userId)).orderBy(desc(securityEvents.createdAt)).limit(30),
    db
      .select({ action: auditLogs.action, summary: auditLogs.summary, createdAt: auditLogs.createdAt, ip: auditLogs.ip, actorId: auditLogs.actorId })
      .from(auditLogs)
      .where(or(eq(auditLogs.actorId, userId), eq(auditLogs.entityId, userId)))
      .orderBy(desc(auditLogs.createdAt))
      .limit(50),
    db.select({ n: sql<number>`count(*)::int`, avg: sql<number | null>`round(avg(${assignmentAttempts.percentage})::numeric,1)::float` }).from(assignmentAttempts).where(eq(assignmentAttempts.userId, userId)),
  ]);
  const [lp] = await db.select({ total: sql<number>`count(*)::int` }).from(learningProgress).where(eq(learningProgress.userId, userId));
  return {
    ...row.u,
    student: row.s,
    className: row.className,
    department: row.department,
    access,
    accessHistory,
    results: resultsList,
    learning: { ...learning, lessonsTouched: lp.total },
    sessions: sess,
    securityEvents: sec,
    activity,
    assignments: assignmentsDone[0],
  };
}

export const studentEditSchema = z.object({
  firstName: z.string().trim().min(1).max(60),
  middleName: z.string().trim().max(60).nullish(),
  lastName: z.string().trim().min(1).max(60),
  email: z.string().trim().toLowerCase().email().max(160),
  phone: z.string().trim().max(20).nullish(),
  studentNumber: z.string().trim().min(2).max(40),
  classId: z.string().uuid().nullish(),
  departmentId: z.string().uuid().nullish(),
  schoolName: z.string().trim().max(120).nullish(),
  state: z.string().trim().max(60).nullish(),
  country: z.string().trim().max(60).nullish(),
  allowConcurrentCodes: z.boolean().optional(),
});

export async function updateStudentAdmin(actor: Actor, userId: string, raw: unknown, ctx: ReqCtx) {
  const d = studentEditSchema.parse(raw);
  const db = getDb();
  if (d.allowConcurrentCodes !== undefined && actor.userType !== "SUPER_ADMIN") throw new AppError("FORBIDDEN", "Only the Super Admin can allow concurrent access codes.");
  // Moving a student (e.g. JSS3 → SS1) re-checks that the department suits the new class.
  const placement = d.classId ? await resolvePlacement(actor.schoolId, d.classId, d.departmentId, db) : { classId: null, departmentId: d.departmentId ?? null };
  await db.transaction(async (tx) => {
    const res = await tx
      .update(users)
      .set({ firstName: d.firstName, middleName: d.middleName ?? null, lastName: d.lastName, email: d.email, phone: d.phone ?? null, updatedAt: new Date() })
      .where(and(eq(users.id, userId), eq(users.schoolId, actor.schoolId), eq(users.userType, "STUDENT")))
      .returning({ id: users.id });
    if (!res.length) throw new AppError("NOT_FOUND", "Student not found.");
    await tx
      .update(students)
      .set({
        studentNumber: d.studentNumber,
        classId: placement.classId,
        departmentId: placement.departmentId,
        schoolName: d.schoolName ?? null,
        state: d.state ?? null,
        country: d.country ?? null,
        ...(d.allowConcurrentCodes !== undefined ? { allowConcurrentCodes: d.allowConcurrentCodes } : {}),
      })
      .where(eq(students.userId, userId));
    await audit({ actor, action: "admin.student_updated", entityType: "user", entityId: userId, metadata: d }, ctx, tx);
  });
}

/** Student self-service: only non-administrative fields (§74). */
export async function updateOwnProfile(actor: Actor, raw: unknown, ctx: ReqCtx) {
  const d = z
    .object({
      phone: z.string().trim().regex(/^\+?[0-9 ()-]{7,20}$/, "Enter a valid phone number."),
      middleName: z.string().trim().max(60).optional(),
      state: z.string().trim().max(60).optional(),
      schoolName: z.string().trim().max(120).optional(),
      locale: z.enum(["en", "yo", "ha", "ig", "fr"]).optional(),
      avatarAssetId: z.string().uuid().nullish(),
    })
    .parse(raw);
  const db = getDb();
  await db.update(users).set({ phone: d.phone, middleName: d.middleName || null, ...(d.locale ? { locale: d.locale } : {}), ...(d.avatarAssetId !== undefined ? { avatarAssetId: d.avatarAssetId } : {}), updatedAt: new Date() }).where(eq(users.id, actor.id));
  if (actor.userType === "STUDENT") await db.update(students).set({ state: d.state || null, schoolName: d.schoolName || null }).where(eq(students.userId, actor.id));
  await audit({ actor, action: "profile.updated", entityType: "user", entityId: actor.id }, ctx);
}

export async function ownSessions(userId: string) {
  return getDb()
    .select({ id: sessions.id, createdAt: sessions.createdAt, lastSeenAt: sessions.lastSeenAt, expiresAt: sessions.expiresAt, ip: sessions.ip, userAgent: sessions.userAgent, revokedAt: sessions.revokedAt })
    .from(sessions)
    .where(and(eq(sessions.userId, userId), isNull(sessions.revokedAt), sql`${sessions.expiresAt} > now()`))
    .orderBy(desc(sessions.lastSeenAt));
}

export async function revokeOwnSession(actor: Actor, sessionId: string, ctx: ReqCtx) {
  const res = await getDb()
    .update(sessions)
    .set({ revokedAt: new Date(), revokedReason: "USER_REVOKED" })
    .where(and(eq(sessions.id, sessionId), eq(sessions.userId, actor.id), isNull(sessions.revokedAt)))
    .returning({ id: sessions.id });
  if (!res.length) throw new AppError("NOT_FOUND", "Session not found.");
  await audit({ actor, action: "auth.session_revoked", entityType: "session", entityId: sessionId }, ctx);
}

/** Signs out every device except the one making the request. Returns how many sessions were ended. */
export async function revokeOtherOwnSessions(actor: Actor, currentSessionId: string, ctx: ReqCtx) {
  const count = await revokeAllSessions(actor.id, "USER_REVOKED_OTHERS", currentSessionId);
  await audit({ actor, action: "auth.other_sessions_revoked", entityType: "user", entityId: actor.id, metadata: { count } }, ctx);
  return count;
}

/* ======================================================= administrators */

export async function ensurePermissionCatalog() {
  const db = getDb();
  const { PERMISSIONS } = await import("@/core/permissions");
  for (const key of ALL_PERMISSIONS) {
    await db
      .insert(permissions)
      .values({ key, group: PERMISSIONS[key].group, description: PERMISSIONS[key].description })
      .onConflictDoUpdate({ target: permissions.key, set: { group: PERMISSIONS[key].group, description: PERMISSIONS[key].description } });
  }
}

export async function listRoles(schoolId: string) {
  const db = getDb();
  const rs = await db.select().from(roles).where(eq(roles.schoolId, schoolId)).orderBy(desc(roles.isSystem), asc(roles.name));
  const rp = rs.length ? await db.select().from(rolePermissions).where(inArray(rolePermissions.roleId, rs.map((r) => r.id))) : [];
  const members = rs.length
    ? await db.select({ roleId: userRoles.roleId, n: sql<number>`count(*)::int` }).from(userRoles).where(inArray(userRoles.roleId, rs.map((r) => r.id))).groupBy(userRoles.roleId)
    : [];
  return rs.map((r) => ({ ...r, permissions: rp.filter((x) => x.roleId === r.id).map((x) => x.permissionKey), members: members.find((m) => m.roleId === r.id)?.n ?? 0 }));
}

export async function upsertRole(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  if (actor.userType !== "SUPER_ADMIN") {
    await securityEvent({ type: "PRIVILEGE_ESCALATION", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { action: "upsertRole" } }, ctx);
    throw new AppError("FORBIDDEN", "Only the Super Admin can manage roles.");
  }
  const d = z
    .object({ name: z.string().trim().min(3).max(80), description: z.string().trim().max(300).nullish(), permissions: z.array(z.string()).max(100) })
    .parse(raw);
  const perms = sanitisePermissionList(d.permissions);
  const db = getDb();
  return db.transaction(async (tx) => {
    let role;
    if (id) {
      [role] = await tx.select().from(roles).where(and(eq(roles.id, id), eq(roles.schoolId, actor.schoolId)));
      if (!role) throw new AppError("NOT_FOUND", "Role not found.");
      await tx.update(roles).set({ name: d.name, description: d.description ?? null }).where(eq(roles.id, id));
    } else {
      const key = `custom_${d.name.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 40)}_${Date.now().toString(36)}`;
      [role] = await tx.insert(roles).values({ schoolId: actor.schoolId, key, name: d.name, description: d.description ?? null }).returning();
    }
    const before = (await tx.select({ k: rolePermissions.permissionKey }).from(rolePermissions).where(eq(rolePermissions.roleId, role.id))).map((x) => x.k);
    await tx.delete(rolePermissions).where(eq(rolePermissions.roleId, role.id));
    if (perms.length) await tx.insert(rolePermissions).values(perms.map((p) => ({ roleId: role.id, permissionKey: p })));
    await audit({ actor, action: id ? "rbac.role_updated" : "rbac.role_created", entityType: "role", entityId: role.id, summary: d.name, metadata: { before, after: perms } }, ctx, tx);
    return role;
  });
}

export async function deleteRole(actor: Actor, id: string, ctx: ReqCtx) {
  if (actor.userType !== "SUPER_ADMIN") throw new AppError("FORBIDDEN", "Only the Super Admin can manage roles.");
  const db = getDb();
  const [r] = await db.select().from(roles).where(and(eq(roles.id, id), eq(roles.schoolId, actor.schoolId)));
  if (!r) throw new AppError("NOT_FOUND", "Role not found.");
  if (r.isSystem) throw new AppError("FORBIDDEN", "System roles cannot be deleted — edit their permissions instead.");
  await db.delete(roles).where(eq(roles.id, id));
  await audit({ actor, action: "rbac.role_deleted", entityType: "role", entityId: id, summary: r.name }, ctx);
}

export async function ensureSystemRoles(schoolId: string) {
  const db = getDb();
  await ensurePermissionCatalog();
  for (const def of SYSTEM_ROLES) {
    const [existing] = await db.select().from(roles).where(and(eq(roles.schoolId, schoolId), eq(roles.key, def.key)));
    if (existing) continue;
    const [r] = await db.insert(roles).values({ schoolId, key: def.key, name: def.name, description: def.description, isSystem: true }).returning();
    await db.insert(rolePermissions).values(def.permissions.map((p) => ({ roleId: r.id, permissionKey: p })));
  }
}

export async function listAdmins(actor: Actor) {
  const db = getDb();
  const rows = await db
    .select({
      id: users.id,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
      phone: users.phone,
      userType: users.userType,
      status: users.status,
      totpEnabled: users.totpEnabled,
      lastLoginAt: users.lastLoginAt,
      createdAt: users.createdAt,
      mustChangePassword: users.mustChangePassword,
    })
    .from(users)
    .where(and(eq(users.schoolId, actor.schoolId), inArray(users.userType, ["ADMIN", "TEACHER", "SUPER_ADMIN"]), isNull(users.deletedAt)))
    .orderBy(asc(users.userType), asc(users.lastName));
  const ur = rows.length
    ? await db.select({ userId: userRoles.userId, roleId: roles.id, name: roles.name }).from(userRoles).innerJoin(roles, eq(roles.id, userRoles.roleId)).where(inArray(userRoles.userId, rows.map((r) => r.id)))
    : [];
  return rows.map((r) => ({ ...r, roles: ur.filter((x) => x.userId === r.id).map((x) => ({ id: x.roleId, name: x.name })) }));
}

export const adminCreateSchema = z.object({
  firstName: z.string().trim().min(1).max(60),
  lastName: z.string().trim().min(1).max(60),
  email: z.string().trim().toLowerCase().email().max(160),
  phone: z.string().trim().max(20).nullish(),
  userType: z.enum(["ADMIN", "TEACHER"]).default("ADMIN"),
  roleIds: z.array(z.string().uuid()).min(1, "Assign at least one role.").max(10),
  password: z.string().max(128).optional(),
});

/**
 * Creates an administrator. If no password is supplied a temporary one is
 * generated and returned once; the account must change it at first login.
 * Ordinary admins can never be given Super Admin privileges.
 */
export async function createAdmin(actor: Actor, raw: unknown, ctx: ReqCtx) {
  if (actor.userType !== "SUPER_ADMIN") {
    await securityEvent({ type: "PRIVILEGE_ESCALATION", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { action: "createAdmin" } }, ctx);
    throw new AppError("FORBIDDEN", "Only the Super Admin can create administrators.");
  }
  const d = adminCreateSchema.parse(raw);
  const policy = await getSetting(actor.schoolId, "passwordPolicy");
  const temp = d.password ? null : generateTemporaryPassword();
  const password = d.password ?? temp!;
  const check = checkPassword(password, policy, [d.firstName, d.lastName]);
  if (!check.ok) throw new AppError("VALIDATION", check.errors[0], { password: check.errors });
  const db = getDb();
  const validRoles = await db.select({ id: roles.id }).from(roles).where(and(inArray(roles.id, d.roleIds), eq(roles.schoolId, actor.schoolId)));
  if (validRoles.length !== d.roleIds.length) throw new AppError("VALIDATION", "Unknown role.");
  const hash = await hashPassword(password);
  try {
    const id = await db.transaction(async (tx) => {
      const [u] = await tx
        .insert(users)
        .values({ schoolId: actor.schoolId, email: d.email, passwordHash: hash, userType: d.userType, firstName: d.firstName, lastName: d.lastName, phone: d.phone ?? null, mustChangePassword: true, passwordChangedAt: new Date() })
        .returning({ id: users.id });
      await tx.insert(userRoles).values(d.roleIds.map((roleId) => ({ userId: u.id, roleId, assignedBy: actor.id })));
      await audit({ actor, action: "rbac.admin_created", entityType: "user", entityId: u.id, summary: `${d.email} (${d.userType})`, metadata: { roleIds: d.roleIds } }, ctx, tx);
      return u.id;
    });
    return { id, temporaryPassword: temp };
  } catch (e) {
    const err = e as { code?: string; cause?: { code?: string } };
    if (err.code === "23505" || err.cause?.code === "23505") throw new AppError("DUPLICATE", "An account with this email already exists.");
    throw e;
  }
}

export async function setAdminRoles(actor: Actor, userId: string, roleIds: string[], ctx: ReqCtx) {
  if (actor.userType !== "SUPER_ADMIN") {
    await securityEvent({ type: "PRIVILEGE_ESCALATION", severity: "HIGH", userId: actor.id, schoolId: actor.schoolId, detail: { action: "setAdminRoles", target: userId } }, ctx);
    throw new AppError("FORBIDDEN", "Only the Super Admin can assign roles.");
  }
  const db = getDb();
  const [u] = await db.select({ id: users.id, userType: users.userType, email: users.email }).from(users).where(and(eq(users.id, userId), eq(users.schoolId, actor.schoolId)));
  if (!u || (u.userType !== "ADMIN" && u.userType !== "TEACHER")) throw new AppError("NOT_FOUND", "Administrator not found.");
  const valid = roleIds.length ? await db.select({ id: roles.id }).from(roles).where(and(inArray(roles.id, roleIds), eq(roles.schoolId, actor.schoolId))) : [];
  await db.transaction(async (tx) => {
    const before = (await tx.select({ r: userRoles.roleId }).from(userRoles).where(eq(userRoles.userId, userId))).map((x) => x.r);
    await tx.delete(userRoles).where(eq(userRoles.userId, userId));
    if (valid.length) await tx.insert(userRoles).values(valid.map((v) => ({ userId, roleId: v.id, assignedBy: actor.id })));
    await audit({ actor, action: "rbac.roles_assigned", entityType: "user", entityId: userId, summary: u.email, metadata: { before, after: valid.map((v) => v.id) } }, ctx, tx);
  });
  // Permission changes take effect immediately: sessions reload permissions per request.
}

export async function adminActivity(actor: Actor, userId: string) {
  return getDb()
    .select()
    .from(auditLogs)
    .where(and(eq(auditLogs.actorId, userId), eq(auditLogs.schoolId, actor.schoolId)))
    .orderBy(desc(auditLogs.createdAt))
    .limit(100);
}

export async function softDeleteStudent(actor: Actor, userId: string, reason: string, ctx: ReqCtx) {
  if (actor.userType !== "SUPER_ADMIN") throw new AppError("FORBIDDEN", "Only the Super Admin can remove accounts.");
  if (reason.trim().length < 5) throw new AppError("VALIDATION", "Record a reason.");
  const db = getDb();
  const res = await db
    .update(users)
    .set({ deletedAt: new Date(), status: "SUSPENDED" })
    .where(and(eq(users.id, userId), eq(users.schoolId, actor.schoolId), eq(users.userType, "STUDENT"), isNull(users.deletedAt)))
    .returning({ id: users.id });
  if (!res.length) throw new AppError("NOT_FOUND", "Student not found.");
  await revokeAllSessions(userId, "ACCOUNT_REMOVED");
  await audit({ actor, action: "admin.student_removed", entityType: "user", entityId: userId, summary: reason }, ctx);
}

