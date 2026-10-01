import { and, eq, gt, isNull, sql } from "drizzle-orm";
import { z } from "zod";
import { checkPassword } from "@/core/password-policy";
import { getDb } from "../db";
import { passwordResetTokens, recoveryCodes, schools, students, userRoles, users } from "../db/schema";
import { audit, securityEvent, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { decrypt, encrypt, hmac, randomToken } from "../crypto";
import { burnVerify, generateTemporaryPassword, hashPassword, verifyPassword } from "../auth/password";
import { completeMfa, createSession, revokeAllSessions } from "../auth/session";
import { hashRecoveryCode, newRecoveryCodes, newTotpSecret, verifyTotp } from "../auth/totp";
import { rateLimit, resetRateLimit } from "../rate-limit";
import { getDefaultSchoolId, getSetting } from "../settings";
import { emailTemplate, notifyUser, queueEmail } from "./notifications";
import { resolvePlacement } from "./scope";

const email = z.string().trim().toLowerCase().email("Enter a valid email address.").max(160);
const name = z.string().trim().min(1, "Required").max(60).regex(/^[\p{L}\p{M}' .-]+$/u, "Use letters only.");
const optionalName = z
  .string()
  .trim()
  .max(60)
  .regex(/^[\p{L}\p{M}' .-]*$/u, "Use letters only.")
  .optional()
  .transform((v) => v || undefined);
const phone = z
  .string()
  .trim()
  .regex(/^\+?[0-9 ()-]{7,20}$/, "Enter a valid phone number.");

export const registerSchema = z
  .object({
    firstName: name,
    middleName: optionalName,
    lastName: name,
    email,
    phone,
    dateOfBirth: z
      .string()
      .trim()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD.")
      .optional()
      .or(z.literal("").transform(() => undefined)),
    gender: z.enum(["MALE", "FEMALE"]).optional().or(z.literal("").transform(() => undefined)),
    studentNumber: z.string().trim().min(2, "Student ID is required.").max(40).regex(/^[A-Za-z0-9/_-]+$/, "Letters, numbers, / - _ only."),
    schoolName: z.string().trim().max(120).optional(),
    classId: z.string().uuid("Select your class."),
    /** Optional when the class has a single department (e.g. JSS). */
    departmentId: z.string().uuid("Select your department.").optional().or(z.literal("").transform(() => undefined)),
    state: z.string().trim().max(60).optional(),
    country: z.string().trim().max(60).default("Nigeria"),
    username: z
      .string()
      .trim()
      .max(40)
      .regex(/^[A-Za-z0-9._-]*$/, "Letters, numbers, dot, dash and underscore only.")
      .optional()
      .transform((v) => v || undefined),
    password: z.string().min(1, "Password is required.").max(128),
    confirmPassword: z.string(),
    acceptTerms: z.literal(true, { message: "You must accept the Terms and Privacy Policy." }),
  })
  .refine((d) => d.password === d.confirmPassword, { path: ["confirmPassword"], message: "Passwords do not match." });

export type RegisterInput = z.input<typeof registerSchema>;

async function assertPasswordPolicy(schoolId: string, password: string, context: string[]) {
  const policy = await getSetting(schoolId, "passwordPolicy");
  const r = checkPassword(password, policy, context);
  if (!r.ok) throw new AppError("VALIDATION", r.errors[0], { password: r.errors });
}

export async function registerStudent(raw: unknown, ctx: ReqCtx) {
  await rateLimit("register", ctx.ip ?? "unknown", ctx);
  const input = registerSchema.parse(raw);
  const schoolId = await getDefaultSchoolId();
  await assertPasswordPolicy(schoolId, input.password, [input.firstName, input.lastName, input.email.split("@")[0]]);

  const db = getDb();
  // Class & department must belong to this school and to each other (never trust ids blindly).
  const placement = await resolvePlacement(schoolId, input.classId, input.departmentId, db);

  const passwordHash = await hashPassword(input.password);
  let user: { id: string };
  try {
    user = await db.transaction(async (tx) => {
      const [u] = await tx
        .insert(users)
        .values({
          schoolId,
          email: input.email,
          passwordHash,
          userType: "STUDENT",
          firstName: input.firstName,
          middleName: input.middleName,
          lastName: input.lastName,
          phone: input.phone,
          passwordChangedAt: new Date(),
        })
        .returning({ id: users.id });
      await tx.insert(students).values({
        userId: u.id,
        schoolId,
        studentNumber: input.studentNumber,
        username: input.username,
        classId: placement.classId,
        departmentId: placement.departmentId,
        schoolName: input.schoolName,
        dateOfBirth: input.dateOfBirth,
        gender: input.gender,
        state: input.state,
        country: input.country,
      });
      return u;
    });
  } catch (e) {
    // Only the account insert is mapped to "already exists" — matched on the exact unique index that fired.
    const err = e as { code?: string; cause?: { code?: string; constraint?: string }; constraint?: string };
    const constraint = err.constraint ?? err.cause?.constraint ?? "";
    if (err.code === "23505" || err.cause?.code === "23505") {
      if (constraint === "users_email_uq") throw new AppError("DUPLICATE", "An account with this email already exists.", { email: ["This email is already registered."] });
      if (constraint === "students_number_uq") throw new AppError("DUPLICATE", "This Student ID is already registered.", { studentNumber: ["This Student ID is already registered."] });
      if (constraint === "students_username_uq") throw new AppError("DUPLICATE", "This username is taken.", { username: ["This username is taken."] });
      console.error("[pps] registration unique violation on", constraint || "unknown constraint");
      throw new AppError("DUPLICATE", "These details clash with an existing account. Check your Student ID and username.");
    }
    throw e;
  }
  // The account now exists. Audit and the welcome message are best-effort: a failure here must never
  // make a successful registration look like an error (which would push the student to register twice).
  try {
    await audit({ schoolId, action: "auth.register", entityType: "user", entityId: user.id, summary: `Student registered: ${input.email}`, actor: { id: user.id, schoolId, userType: "STUDENT" } }, ctx);
    await notifyUser({
      schoolId,
      userId: user.id,
      category: "ANNOUNCEMENT",
      title: "Welcome to Precious PS Academy",
      body: "Your account is ready. Activate your access code from the dashboard to unlock CBT, the Study Centre and more.",
      link: "/student",
    });
  } catch (e) {
    console.error("[pps] post-registration step failed", (e as Error).message);
  }
  return { userId: user.id, schoolId };
}

/**
 * Signs in the student created by registerStudent() in the same request. The password was just
 * hashed and stored by us, so it is not verified a second time (saves a full Argon2 pass and
 * several database round trips on slow links). Never call this for any other purpose.
 */
export async function signInNewStudent(userId: string, ctx: ReqCtx) {
  const schoolId = await getDefaultSchoolId();
  const auth = await getSetting(schoolId, "authentication");
  const session = await createSession(userId, { hours: auth.studentSessionHours, mfaPending: false, maxSessions: auth.maxStudentSessions }, ctx);
  await getDb().update(users).set({ lastLoginAt: new Date() }).where(eq(users.id, userId));
  return { token: session.token, expiresAt: session.expiresAt };
}

export const loginSchema = z.object({
  identifier: z.string().trim().min(1, "Enter your email or Student ID.").max(160),
  password: z.string().min(1, "Enter your password.").max(128),
});

export type LoginPortal = "student" | "backend";

/**
 * Password login with lockout, uniform errors (no account enumeration) and
 * per-portal separation: students cannot sign in at /backend and vice-versa.
 */
export async function login(raw: unknown, portal: LoginPortal, ctx: ReqCtx) {
  const { identifier, password } = loginSchema.parse(raw);
  const idKey = identifier.toLowerCase();
  await rateLimit("login", `${ctx.ip ?? "unknown"}:${idKey}`, ctx);
  const db = getDb();
  const schoolId = await getDefaultSchoolId();
  const auth = await getSetting(schoolId, "authentication");

  const [u] = await db
    .select({
      id: users.id,
      schoolId: users.schoolId,
      email: users.email,
      firstName: users.firstName,
      passwordHash: users.passwordHash,
      userType: users.userType,
      status: users.status,
      failedLoginCount: users.failedLoginCount,
      lockedUntil: users.lockedUntil,
      totpEnabled: users.totpEnabled,
      mustChangePassword: users.mustChangePassword,
      deletedAt: users.deletedAt,
    })
    .from(users)
    .leftJoin(students, eq(students.userId, users.id))
    .where(
      sql`(lower(${users.email}) = ${idKey} OR lower(${students.studentNumber}) = ${idKey} OR lower(${students.username}) = ${idKey})`,
    )
    .limit(1);

  const invalid = new AppError("INVALID_CREDENTIALS", "The email/Student ID or password is incorrect.");
  if (!u || u.deletedAt) {
    await burnVerify(password);
    await securityEvent({ type: "FAILED_LOGIN", detail: { reason: "unknown_account", portal } }, ctx);
    throw invalid;
  }
  if (u.lockedUntil && u.lockedUntil > new Date()) {
    await securityEvent({ type: "FAILED_LOGIN", userId: u.id, schoolId: u.schoolId, detail: { reason: "locked" } }, ctx);
    throw new AppError("ACCOUNT_LOCKED", "This account is temporarily locked after repeated failed sign-ins. Try again later or contact the Super Admin.");
  }
  const ok = await verifyPassword(u.passwordHash, password);
  if (!ok) {
    const failures = u.failedLoginCount + 1;
    const lock = failures >= auth.maxFailedLogins;
    await db
      .update(users)
      .set({ failedLoginCount: lock ? 0 : failures, lockedUntil: lock ? new Date(Date.now() + auth.lockMinutes * 60_000) : null })
      .where(eq(users.id, u.id));
    await securityEvent({ type: lock ? "ACCOUNT_LOCKED" : "FAILED_LOGIN", severity: lock ? "HIGH" : "LOW", userId: u.id, schoolId: u.schoolId, detail: { failures, portal } }, ctx);
    await audit({ schoolId: u.schoolId, action: "auth.login_failed", entityType: "user", entityId: u.id }, ctx);
    if (lock && u.userType !== "STUDENT") {
      await notifyUser({ schoolId: u.schoolId, userId: u.id, category: "SECURITY", title: "Account temporarily locked", body: "Your account was locked after repeated failed sign-in attempts." });
    }
    throw invalid;
  }
  if (u.status === "SUSPENDED") {
    await audit({ schoolId: u.schoolId, action: "auth.login_blocked_suspended", entityType: "user", entityId: u.id }, ctx);
    throw new AppError("ACCOUNT_SUSPENDED", "This account is suspended. Please contact the Super Admin (08067578112).");
  }
  const isStudent = u.userType === "STUDENT";
  if ((portal === "student") !== isStudent) {
    // Same message as a wrong password — do not reveal which portal an account belongs to.
    await securityEvent({ type: "FAILED_LOGIN", userId: u.id, schoolId: u.schoolId, detail: { reason: "wrong_portal", portal } }, ctx);
    throw invalid;
  }

  const mfaPending = u.totpEnabled;
  const session = await createSession(
    u.id,
    {
      hours: isStudent ? auth.studentSessionHours : auth.adminSessionHours,
      mfaPending,
      maxSessions: isStudent ? auth.maxStudentSessions : undefined,
    },
    ctx,
  );
  await db.update(users).set({ failedLoginCount: 0, lockedUntil: null, ...(mfaPending ? {} : { lastLoginAt: new Date() }) }).where(eq(users.id, u.id));
  await resetRateLimit("login", `${ctx.ip ?? "unknown"}:${idKey}`);
  if (session.evicted > 0) {
    await securityEvent({ type: "CONCURRENT_SESSION", userId: u.id, schoolId: u.schoolId, detail: { evicted: session.evicted } }, ctx);
  }
  if (!mfaPending) {
    await audit({ actor: { id: u.id, schoolId: u.schoolId, userType: u.userType }, action: "auth.login", entityType: "user", entityId: u.id }, ctx);
    if (!isStudent && auth.loginAlerts) {
      await notifyUser({
        schoolId: u.schoolId,
        userId: u.id,
        category: "SECURITY",
        title: "New sign-in to the Precious PS backend",
        body: `A new sign-in to your administrator account occurred from ${ctx.ip ?? "an unknown address"}. If this wasn't you, revoke sessions immediately.`,
        link: "/admin/security",
      });
    }
  }
  return {
    token: session.token,
    expiresAt: session.expiresAt,
    mfaPending,
    mustChangePassword: u.mustChangePassword,
    userType: u.userType,
  };
}

export async function verifyMfa(sessionId: string, userId: string, code: string, ctx: ReqCtx) {
  await rateLimit("mfa", userId, ctx);
  const db = getDb();
  const [u] = await db
    .select({ id: users.id, schoolId: users.schoolId, userType: users.userType, totpSecretEnc: users.totpSecretEnc })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  if (!u?.totpSecretEnc) throw new AppError("VALIDATION", "Two-factor authentication is not set up.");
  let ok = verifyTotp(decrypt(u.totpSecretEnc), code);
  let usedRecovery = false;
  if (!ok && /^[A-Za-z0-9]{4}-?[A-Za-z0-9]{4}$/.test(code.trim())) {
    const normalised = code.trim().toUpperCase().replace(/^(.{4})-?(.{4})$/, "$1-$2");
    const [rc] = await db
      .update(recoveryCodes)
      .set({ usedAt: new Date() })
      .where(and(eq(recoveryCodes.userId, userId), eq(recoveryCodes.codeHash, hashRecoveryCode(normalised)), isNull(recoveryCodes.usedAt)))
      .returning({ id: recoveryCodes.id });
    ok = Boolean(rc);
    usedRecovery = ok;
  }
  if (!ok) {
    await securityEvent({ type: "MFA_FAILED", severity: "MEDIUM", userId, schoolId: u.schoolId }, ctx);
    throw new AppError("INVALID_CREDENTIALS", "That code is not valid. Check your authenticator app and try again.");
  }
  await completeMfa(sessionId);
  await db.update(users).set({ lastLoginAt: new Date() }).where(eq(users.id, userId));
  await audit({ actor: u, action: usedRecovery ? "auth.login_recovery_code" : "auth.login", entityType: "user", entityId: userId, summary: "Signed in with 2FA" }, ctx);
}

export async function changePassword(actor: Actor, raw: unknown, currentSessionId: string, ctx: ReqCtx) {
  const input = z
    .object({ currentPassword: z.string().min(1, "Enter your current password."), newPassword: z.string().max(128), confirmPassword: z.string() })
    .refine((d) => d.newPassword === d.confirmPassword, { path: ["confirmPassword"], message: "Passwords do not match." })
    .refine((d) => d.newPassword !== d.currentPassword, { path: ["newPassword"], message: "Choose a password you have not used just now." })
    .parse(raw);
  const db = getDb();
  const [u] = await db.select({ passwordHash: users.passwordHash, firstName: users.firstName, lastName: users.lastName }).from(users).where(eq(users.id, actor.id));
  if (!u || !(await verifyPassword(u.passwordHash, input.currentPassword))) {
    await securityEvent({ type: "FAILED_LOGIN", userId: actor.id, schoolId: actor.schoolId, detail: { reason: "change_password_wrong_current" } }, ctx);
    throw new AppError("VALIDATION", "Your current password is incorrect.", { currentPassword: ["Your current password is incorrect."] });
  }
  await assertPasswordPolicy(actor.schoolId, input.newPassword, [u.firstName, u.lastName, actor.email.split("@")[0]]);
  await db
    .update(users)
    .set({ passwordHash: await hashPassword(input.newPassword), mustChangePassword: false, passwordChangedAt: new Date(), updatedAt: new Date() })
    .where(eq(users.id, actor.id));
  const revoked = await revokeAllSessions(actor.id, "PASSWORD_CHANGED", currentSessionId);
  await audit({ actor, action: "auth.password_changed", entityType: "user", entityId: actor.id, metadata: { otherSessionsRevoked: revoked } }, ctx);
  await notifyUser({ schoolId: actor.schoolId, userId: actor.id, category: "SECURITY", title: "Your password was changed", body: "If you did not make this change, contact the Super Admin immediately." });
}

/** Self-service reset request. Always responds the same way (no enumeration). */
export async function requestPasswordReset(identifier: string, ctx: ReqCtx) {
  await rateLimit("passwordReset", `${ctx.ip ?? "unknown"}`, ctx);
  const db = getDb();
  const idKey = identifier.trim().toLowerCase();
  const [u] = await db
    .select({ id: users.id, schoolId: users.schoolId, email: users.email, status: users.status })
    .from(users)
    .where(sql`lower(${users.email}) = ${idKey}`)
    .limit(1);
  if (!u || u.status !== "ACTIVE") return;
  const { url } = await issueResetToken(u.id, null, 60);
  await queueEmail(
    u.schoolId,
    u.email,
    "Reset your Precious PS Academy password",
    emailTemplate("Reset your password", "We received a request to reset your password. This link expires in 60 minutes. If you did not request it, you can ignore this email.", url),
  );
  await audit({ schoolId: u.schoolId, action: "auth.password_reset_requested", entityType: "user", entityId: u.id }, ctx);
}

async function issueResetToken(userId: string, createdBy: string | null, minutes: number) {
  const token = randomToken(32);
  await getDb().insert(passwordResetTokens).values({ userId, tokenHash: hmac(`reset:${token}`), createdBy, expiresAt: new Date(Date.now() + minutes * 60_000) });
  return { token, url: `/reset-password?token=${token}` };
}

export async function resetPasswordWithToken(raw: unknown, ctx: ReqCtx) {
  const input = z
    .object({ token: z.string().min(20).max(100), newPassword: z.string().max(128), confirmPassword: z.string() })
    .refine((d) => d.newPassword === d.confirmPassword, { path: ["confirmPassword"], message: "Passwords do not match." })
    .parse(raw);
  await rateLimit("passwordReset", `token:${ctx.ip ?? "unknown"}`, ctx);
  const db = getDb();
  const [t] = await db
    .select({ id: passwordResetTokens.id, userId: passwordResetTokens.userId })
    .from(passwordResetTokens)
    .where(and(eq(passwordResetTokens.tokenHash, hmac(`reset:${input.token}`)), isNull(passwordResetTokens.usedAt), gt(passwordResetTokens.expiresAt, new Date())))
    .limit(1);
  if (!t) throw new AppError("VALIDATION", "This reset link is invalid or has expired. Request a new one.");
  const [u] = await db.select({ id: users.id, schoolId: users.schoolId, userType: users.userType, firstName: users.firstName, lastName: users.lastName, email: users.email }).from(users).where(eq(users.id, t.userId));
  await assertPasswordPolicy(u.schoolId, input.newPassword, [u.firstName, u.lastName, u.email.split("@")[0]]);
  await db.transaction(async (tx) => {
    const used = await tx.update(passwordResetTokens).set({ usedAt: new Date() }).where(and(eq(passwordResetTokens.id, t.id), isNull(passwordResetTokens.usedAt))).returning({ id: passwordResetTokens.id });
    if (!used.length) throw new AppError("VALIDATION", "This reset link has already been used.");
    await tx
      .update(users)
      .set({ passwordHash: await hashPassword(input.newPassword), mustChangePassword: false, passwordChangedAt: new Date(), failedLoginCount: 0, lockedUntil: null })
      .where(eq(users.id, u.id));
  });
  await revokeAllSessions(u.id, "PASSWORD_RESET");
  await audit({ actor: u, action: "auth.password_reset_completed", entityType: "user", entityId: u.id }, ctx);
}

/* ------------------------------------------------- administrative controls */

async function loadTarget(actor: Actor, userId: string) {
  const [u] = await getDb()
    .select({ id: users.id, schoolId: users.schoolId, userType: users.userType, email: users.email, firstName: users.firstName, lastName: users.lastName, status: users.status })
    .from(users)
    .where(and(eq(users.id, userId), eq(users.schoolId, actor.schoolId), isNull(users.deletedAt)))
    .limit(1);
  if (!u) throw new AppError("NOT_FOUND", "User not found.");
  // Only the Super Admin can act on staff accounts; nobody can act on a Super Admin through these controls.
  if (u.userType === "SUPER_ADMIN" && u.id !== actor.id) throw new AppError("FORBIDDEN", "Super Admin accounts cannot be modified here.");
  if (u.userType !== "STUDENT" && actor.userType !== "SUPER_ADMIN") throw new AppError("FORBIDDEN", "Only the Super Admin can manage staff accounts.");
  return u;
}

/** Issues a one-time reset link (shown to the admin once, e-mailed if configured). */
export async function adminIssueResetLink(actor: Actor, userId: string, ctx: ReqCtx) {
  const u = await loadTarget(actor, userId);
  const { url } = await issueResetToken(u.id, actor.id, 24 * 60);
  await getDb().update(users).set({ mustChangePassword: true }).where(eq(users.id, u.id));
  await revokeAllSessions(u.id, "ADMIN_FORCED_RESET");
  await queueEmail(u.schoolId, u.email, "Reset your Precious PS Academy password", emailTemplate("Password reset required", "An administrator has requested that you set a new password. This link expires in 24 hours.", url));
  await audit({ actor, action: "admin.password_reset_link_issued", entityType: "user", entityId: u.id, summary: `Reset link issued for ${u.email}` }, ctx);
  return { url };
}

/**
 * Generates a temporary password when operationally necessary. It is returned
 * ONCE to the caller, stored only as an Argon2id hash, and forces a change at
 * next login.
 */
export async function adminSetTemporaryPassword(actor: Actor, userId: string, reason: string, ctx: ReqCtx) {
  if (reason.trim().length < 5) throw new AppError("VALIDATION", "Record a reason (at least 5 characters).");
  const u = await loadTarget(actor, userId);
  const temp = generateTemporaryPassword();
  await getDb()
    .update(users)
    .set({ passwordHash: await hashPassword(temp), mustChangePassword: true, failedLoginCount: 0, lockedUntil: null, passwordChangedAt: new Date() })
    .where(eq(users.id, u.id));
  await revokeAllSessions(u.id, "ADMIN_TEMP_PASSWORD");
  await audit({ actor, action: "admin.temporary_password_issued", entityType: "user", entityId: u.id, summary: `Temporary password issued for ${u.email}`, metadata: { reason } }, ctx);
  return { temporaryPassword: temp };
}

export async function adminForcePasswordChange(actor: Actor, userId: string, ctx: ReqCtx) {
  const u = await loadTarget(actor, userId);
  await getDb().update(users).set({ mustChangePassword: true }).where(eq(users.id, u.id));
  await audit({ actor, action: "admin.force_password_change", entityType: "user", entityId: u.id }, ctx);
}

export async function adminRevokeSessions(actor: Actor, userId: string, ctx: ReqCtx) {
  const u = await loadTarget(actor, userId);
  const n = await revokeAllSessions(u.id, "ADMIN_REVOKED");
  await audit({ actor, action: "admin.sessions_revoked", entityType: "user", entityId: u.id, metadata: { count: n } }, ctx);
  return n;
}

export async function adminSetAccountStatus(actor: Actor, userId: string, status: "ACTIVE" | "SUSPENDED", reason: string, ctx: ReqCtx) {
  if (reason.trim().length < 3) throw new AppError("VALIDATION", "Record a reason.");
  const u = await loadTarget(actor, userId);
  if (u.id === actor.id) throw new AppError("FORBIDDEN", "You cannot change your own account status.");
  await getDb().update(users).set({ status, updatedAt: new Date(), ...(status === "ACTIVE" ? { failedLoginCount: 0, lockedUntil: null } : {}) }).where(eq(users.id, u.id));
  if (status === "SUSPENDED") await revokeAllSessions(u.id, "ACCOUNT_SUSPENDED");
  await audit({ actor, action: status === "SUSPENDED" ? "admin.account_suspended" : "admin.account_reactivated", entityType: "user", entityId: u.id, summary: `${u.email}: ${reason}`, metadata: { reason } }, ctx);
}

/* ------------------------------------------------------------------- 2FA */

export async function beginTotpEnrolment(actor: Actor) {
  const secret = newTotpSecret();
  // Stored encrypted but not enabled until the user proves possession.
  await getDb().update(users).set({ totpSecretEnc: encrypt(secret), totpEnabled: false }).where(and(eq(users.id, actor.id), eq(users.totpEnabled, false)));
  const [u] = await getDb().select({ enc: users.totpSecretEnc, enabled: users.totpEnabled }).from(users).where(eq(users.id, actor.id));
  if (u.enabled) throw new AppError("CONFLICT", "Two-factor authentication is already enabled.");
  return decrypt(u.enc!);
}

export async function confirmTotpEnrolment(actor: Actor, code: string, ctx: ReqCtx) {
  await rateLimit("mfa", actor.id, ctx);
  const db = getDb();
  const [u] = await db.select({ enc: users.totpSecretEnc, enabled: users.totpEnabled }).from(users).where(eq(users.id, actor.id));
  if (!u?.enc) throw new AppError("VALIDATION", "Start enrolment first.");
  if (u.enabled) throw new AppError("CONFLICT", "Two-factor authentication is already enabled.");
  if (!verifyTotp(decrypt(u.enc), code)) throw new AppError("VALIDATION", "That code did not match. Make sure your phone's time is correct and try again.");
  const { plain, hashes } = newRecoveryCodes();
  await db.transaction(async (tx) => {
    await tx.update(users).set({ totpEnabled: true }).where(eq(users.id, actor.id));
    await tx.delete(recoveryCodes).where(eq(recoveryCodes.userId, actor.id));
    await tx.insert(recoveryCodes).values(hashes.map((codeHash) => ({ userId: actor.id, codeHash })));
  });
  await audit({ actor, action: "security.2fa_enabled", entityType: "user", entityId: actor.id }, ctx);
  return plain;
}

export async function regenerateRecoveryCodes(actor: Actor, ctx: ReqCtx) {
  const db = getDb();
  const [u] = await db.select({ enabled: users.totpEnabled }).from(users).where(eq(users.id, actor.id));
  if (!u?.enabled) throw new AppError("VALIDATION", "Enable two-factor authentication first.");
  const { plain, hashes } = newRecoveryCodes();
  await db.transaction(async (tx) => {
    await tx.delete(recoveryCodes).where(eq(recoveryCodes.userId, actor.id));
    await tx.insert(recoveryCodes).values(hashes.map((codeHash) => ({ userId: actor.id, codeHash })));
  });
  await audit({ actor, action: "security.recovery_codes_regenerated", entityType: "user", entityId: actor.id }, ctx);
  return plain;
}

export async function disableTotp(actor: Actor, password: string, ctx: ReqCtx) {
  if (actor.userType === "SUPER_ADMIN") {
    const cfg = await getSetting(actor.schoolId, "authentication");
    if (cfg.requireSuperAdmin2fa) throw new AppError("FORBIDDEN", "Two-factor authentication is mandatory for the Super Admin.");
  }
  const db = getDb();
  const [u] = await db.select({ hash: users.passwordHash }).from(users).where(eq(users.id, actor.id));
  if (!(await verifyPassword(u.hash, password))) throw new AppError("VALIDATION", "Password is incorrect.");
  await db.update(users).set({ totpEnabled: false, totpSecretEnc: null }).where(eq(users.id, actor.id));
  await db.delete(recoveryCodes).where(eq(recoveryCodes.userId, actor.id));
  await audit({ actor, action: "security.2fa_disabled", entityType: "user", entityId: actor.id }, ctx);
}

/* ------------------------------------------------------ Super Admin setup */

/**
 * Creates the first Super Admin. Only possible while no Super Admin exists and
 * the caller presents SETUP_TOKEN from the server environment.
 */
/** The only e-mail allowed to claim the platform at first-run setup. Override with SUPERADMIN_EMAIL. */
const DEFAULT_OWNER_EMAIL = "folahandaniel@gmail.com";
export function ownerEmail() {
  return process.env.SUPERADMIN_EMAIL?.trim().toLowerCase() || DEFAULT_OWNER_EMAIL;
}

/**
 * First-run step 1: confirms the typed e-mail is the designated owner. Rate-limited per IP; only
 * answers yes/no, so the owner address is never revealed on the public page.
 */
export async function checkOwnerEmail(raw: unknown, ctx: ReqCtx) {
  await rateLimit("login", `setup:${ctx.ip ?? "unknown"}`, ctx);
  if (await superAdminExists()) throw new AppError("CONFLICT", "The platform is already set up. Please sign in.");
  const parsed = email.safeParse(raw);
  if (!parsed.success || parsed.data !== ownerEmail()) {
    throw new AppError("FORBIDDEN", "This e-mail is not the owner account for this platform.");
  }
  return parsed.data;
}

export async function bootstrapSuperAdmin(raw: unknown, ctx: ReqCtx) {
  await rateLimit("login", `setup:${ctx.ip ?? "unknown"}`, ctx);
  const input = z
    .object({
      setupToken: z.string().trim().min(1, "Enter the setup key."),
      // Names are optional at first-run setup; the owner can add them later.
      firstName: z.union([name, z.literal("")]).optional().transform((v) => v || "Super"),
      lastName: z.union([name, z.literal("")]).optional().transform((v) => v || "Admin"),
      email,
      phone: phone.optional().or(z.literal("").transform(() => undefined)),
      password: z.string().max(128),
      confirmPassword: z.string(),
    })
    .refine((d) => d.password === d.confirmPassword, { path: ["confirmPassword"], message: "Passwords do not match." })
    .parse(raw);
  const expected = process.env.SETUP_TOKEN;
  if (!expected || expected.length < 16 || hmac(input.setupToken) !== hmac(expected)) {
    await securityEvent({ type: "PRIVILEGE_ESCALATION", severity: "HIGH", detail: { reason: "bad_setup_token" } }, ctx);
    throw new AppError("FORBIDDEN", "Invalid setup key.");
  }
  if (input.email !== ownerEmail()) {
    await securityEvent({ type: "PRIVILEGE_ESCALATION", severity: "HIGH", detail: { reason: "setup_not_owner_email" } }, ctx);
    throw new AppError("FORBIDDEN", "This e-mail is not the owner account for this platform.");
  }
  const schoolId = await getDefaultSchoolId();
  await assertPasswordPolicy(schoolId, input.password, [input.firstName, input.lastName, input.email.split("@")[0]]);
  const db = getDb();
  const passwordHash = await hashPassword(input.password);
  const result = await db.transaction(async (tx) => {
    // Serialise concurrent setup attempts.
    await tx.execute(sql`SELECT id FROM ${schools} WHERE id = ${schoolId} FOR UPDATE`);
    const [existing] = await tx.select({ id: users.id }).from(users).where(eq(users.userType, "SUPER_ADMIN")).limit(1);
    if (existing) throw new AppError("CONFLICT", "A Super Admin already exists.");
    // The owner e-mail may already belong to another account (e.g. a student account registered while
    // exploring the site). The setup key proves ownership of the platform, so that account is taken over:
    // it becomes the Super Admin with the new password, and its old credentials and student profile go.
    const [taken] = await tx.select().from(users).where(sql`lower(${users.email}) = ${input.email}`).limit(1).for("update");
    if (taken) {
      await tx
        .update(users)
        .set({ schoolId, userType: "SUPER_ADMIN", passwordHash, status: "ACTIVE", mustChangePassword: false, totpEnabled: false, totpSecretEnc: null, failedLoginCount: 0, lockedUntil: null, deletedAt: null, passwordChangedAt: new Date(), updatedAt: new Date() })
        .where(eq(users.id, taken.id));
      await tx.delete(students).where(eq(students.userId, taken.id));
      await tx.delete(userRoles).where(eq(userRoles.userId, taken.id));
      await tx.delete(recoveryCodes).where(eq(recoveryCodes.userId, taken.id));
      await tx.delete(passwordResetTokens).where(eq(passwordResetTokens.userId, taken.id));
      await audit({ actor: { id: taken.id, schoolId, userType: "SUPER_ADMIN" }, action: "security.super_admin_created", entityType: "user", entityId: taken.id, summary: `Super Admin created via secure setup (took over existing ${taken.userType.toLowerCase()} account)` }, ctx, tx);
      return { id: taken.id, converted: true };
    }
    const [u] = await tx
      .insert(users)
      .values({ schoolId, email: input.email, passwordHash, userType: "SUPER_ADMIN", firstName: input.firstName, lastName: input.lastName, phone: input.phone, passwordChangedAt: new Date() })
      .returning({ id: users.id });
    await audit({ actor: { id: u.id, schoolId, userType: "SUPER_ADMIN" }, action: "security.super_admin_created", entityType: "user", entityId: u.id, summary: "Super Admin created via secure setup" }, ctx, tx);
    return { id: u.id, converted: false };
  });
  // Sign the taken-over account out everywhere; the owner signs in fresh with the new password.
  if (result.converted) await revokeAllSessions(result.id, "OWNER_SETUP");
  return result.id;
}

export async function superAdminExists() {
  const [row] = await getDb().select({ id: users.id }).from(users).where(eq(users.userType, "SUPER_ADMIN")).limit(1);
  return Boolean(row);
}
