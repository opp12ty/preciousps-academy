import { randomInt } from "node:crypto";
import { and, eq, inArray, isNull } from "drizzle-orm";
import { z } from "zod";
import { PRIMARY_EXAM_CLASSES, SECONDARY_EXAM_CLASSES } from "@/core/exam-programmes";
import { checkPassword } from "@/core/password-policy";
import { getDb } from "../db";
import { classes, schoolProfiles, students, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { hashPassword } from "../auth/password";
import { AppError } from "../errors";
import { rateLimit } from "../rate-limit";
import { getDefaultSchoolId, getSetting } from "../settings";
import { activateCode } from "./access";
import { notifyUser } from "./notifications";
import { resolvePlacement } from "./scope";

/**
 * School accounts. A school registers once and works in the student area for its examination
 * classes only (Basic 4-6, or JSS 2-3 and SS 2-3). It is a learner account with a class it can
 * switch between, so every lesson, test and report works unchanged; it cannot be linked to a parent
 * and it opens only with a school access code.
 */

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const newSchoolCode = () => `FSC-${Array.from({ length: 6 }, () => ALPHABET[randomInt(ALPHABET.length)]).join("")}`;
const norm = (c: string) => c.toUpperCase().replace(/[^A-Z0-9]/g, "");

export const schoolRegisterSchema = z
  .object({
    schoolName: z.string().trim().min(3, "Enter the school's name.").max(120),
    address: z.string().trim().min(5, "Enter the school's address.").max(240),
    email: z.string().trim().toLowerCase().email("Enter a valid email address.").max(160),
    phone: z.string().trim().regex(/^\+?[0-9 ()-]{7,20}$/, "Enter a valid phone number."),
    adminName: z.string().trim().min(3, "Enter the school administrator's name.").max(80).regex(/^[\p{L}\p{M}' .-]+$/u, "Use letters only."),
    category: z.enum(["PRIMARY", "SECONDARY"], { message: "Choose Primary or Secondary." }),
    username: z.string().trim().min(3, "Choose a username of at least 3 characters.").max(40).regex(/^[A-Za-z0-9._-]+$/, "Letters, numbers, dot, dash and underscore only."),
    accessCode: z.string().trim().max(40).optional(),
    password: z.string().min(1, "Password is required.").max(128),
    confirmPassword: z.string(),
    acceptTerms: z.literal(true, { message: "You must accept the Terms and Privacy Policy." }),
  })
  .refine((d) => d.password === d.confirmPassword, { path: ["confirmPassword"], message: "Passwords do not match." });

/** The examination classes a school of this category may work in, in school order. */
export async function examClassesFor(schoolId: string, category: string) {
  const wanted = category === "PRIMARY" ? PRIMARY_EXAM_CLASSES : SECONDARY_EXAM_CLASSES;
  const rows = await getDb().select({ id: classes.id, name: classes.name, code: classes.code, level: classes.level, sortOrder: classes.sortOrder }).from(classes).where(and(eq(classes.schoolId, schoolId), isNull(classes.archivedAt)));
  return rows.filter((c) => wanted.includes(norm(c.code))).sort((a, b) => wanted.indexOf(norm(a.code)) - wanted.indexOf(norm(b.code)));
}

export async function registerSchool(raw: unknown, ctx: ReqCtx) {
  await rateLimit("register", ctx.ip ?? "unknown", ctx);
  const input = schoolRegisterSchema.parse(raw);
  const schoolId = await getDefaultSchoolId();
  const policy = checkPassword(input.password, await getSetting(schoolId, "passwordPolicy"), [input.schoolName, input.username, input.email.split("@")[0]]);
  if (!policy.ok) throw new AppError("VALIDATION", policy.errors[0] ?? "Choose a stronger password.", { password: policy.errors });
  const available = await examClassesFor(schoolId, input.category);
  if (!available.length) throw new AppError("VALIDATION", "The examination classes for this category are not set up yet. Please contact Precious PS.");
  // Start in the final class of the category; the school can switch class at any time.
  const start = available[available.length - 1];
  const db = getDb();
  const deps = await resolvePlacement(schoolId, start.id, undefined).catch(() => null);
  const passwordHash = await hashPassword(input.password);
  for (let attempt = 0; ; attempt++) {
    const schoolCode = newSchoolCode();
    try {
      const userId = await db.transaction(async (tx) => {
        const [u] = await tx.insert(users).values({ schoolId, email: input.email, passwordHash, userType: "STUDENT", firstName: input.schoolName.slice(0, 60), lastName: "", phone: input.phone, passwordChangedAt: new Date() }).returning({ id: users.id });
        await tx.insert(students).values({ userId: u.id, schoolId, studentNumber: schoolCode, username: input.username, classId: start.id, departmentId: deps?.departmentId ?? null, schoolName: input.schoolName, country: "Nigeria", accountKind: "SCHOOL" });
        await tx.insert(schoolProfiles).values({ userId: u.id, schoolId, schoolCode, schoolName: input.schoolName, address: input.address, adminName: input.adminName, category: input.category });
        return u.id;
      });
      const actor: Actor = { id: userId, schoolId, userType: "STUDENT", permissions: new Set(), name: input.schoolName, email: input.email };
      await audit({ actor, action: "auth.register_school", entityType: "user", entityId: userId, summary: `School registered: ${input.schoolName} (${schoolCode})` }, ctx);
      await notifyUser({ schoolId, userId, category: "ANNOUNCEMENT", title: "Welcome to Precious PS Academy", body: `Your school account is ready. Your School Code is ${schoolCode}. Sign in with the School Code, your username (${input.username}) or your e-mail. Enter a school access code on the dashboard to open tests and lessons.`, link: "/student" });
      let accessError: string | null = null;
      if (input.accessCode) {
        try {
          await activateCode(actor, input.accessCode, ctx);
        } catch (e) {
          accessError = e instanceof AppError ? e.message : "The access code could not be used.";
        }
      }
      return { userId, schoolCode, accessError };
    } catch (e) {
      const c = e as { code?: string; cause?: { code?: string; constraint?: string }; constraint?: string };
      if (c.code !== "23505" && c.cause?.code !== "23505") throw e;
      const constraint = c.constraint ?? c.cause?.constraint ?? "";
      if (constraint.includes("email")) throw new AppError("DUPLICATE", "An account with this email already exists.", { email: ["This email is already registered."] });
      if (constraint.includes("username")) throw new AppError("DUPLICATE", "This username is taken.", { username: ["This username is taken."] });
      if (attempt >= 5) throw e; // the school code collided: draw another
    }
  }
}

/** The school profile of this account, or null for an ordinary student. */
export async function schoolProfileOf(userId: string) {
  const [p] = await getDb().select().from(schoolProfiles).where(eq(schoolProfiles.userId, userId));
  return p ?? null;
}

export async function isSchoolAccount(userId: string) {
  const [s] = await getDb().select({ kind: students.accountKind }).from(students).where(eq(students.userId, userId));
  return s?.kind === "SCHOOL";
}

/** A school moves its account to another of its examination classes (and department, for SS). */
export async function switchSchoolClass(actor: Actor, classId: string, departmentId: string | undefined, ctx: ReqCtx) {
  const profile = await schoolProfileOf(actor.id);
  if (!profile) throw new AppError("FORBIDDEN", "Only a school account can switch class.");
  const allowed = await examClassesFor(actor.schoolId, profile.category);
  if (!allowed.some((c) => c.id === classId)) throw new AppError("FORBIDDEN", "A school account works with its examination classes only.");
  const placement = await resolvePlacement(actor.schoolId, classId, departmentId || undefined);
  await getDb().update(students).set({ classId: placement.classId, departmentId: placement.departmentId }).where(eq(students.userId, actor.id));
  await audit({ actor, action: "school.class_switched", entityType: "user", entityId: actor.id, summary: "School account switched class", metadata: { classId, departmentId: placement.departmentId } }, ctx);
}

export async function listSchoolAccounts(schoolId: string) {
  const db = getDb();
  const rows = await db
    .select({ p: schoolProfiles, email: users.email, phone: users.phone, status: users.status, lastLoginAt: users.lastLoginAt, className: classes.name })
    .from(schoolProfiles)
    .innerJoin(users, eq(users.id, schoolProfiles.userId))
    .leftJoin(students, eq(students.userId, users.id))
    .leftJoin(classes, eq(classes.id, students.classId))
    .where(and(eq(schoolProfiles.schoolId, schoolId), isNull(users.deletedAt)));
  return rows;
}

/** User ids of school accounts among the given ids: used to keep them out of student rankings. */
export async function schoolAccountIds(ids: string[]) {
  if (!ids.length) return new Set<string>();
  const rows = await getDb().select({ id: students.userId }).from(students).where(and(inArray(students.userId, ids), eq(students.accountKind, "SCHOOL")));
  return new Set(rows.map((r) => r.id));
}
