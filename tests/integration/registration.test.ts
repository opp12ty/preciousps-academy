/**
 * Registration reliability: a whole class registering at once, correct duplicate messages, and
 * direct sign-in after registration — against a real migrated PostgreSQL engine.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { eq } from "drizzle-orm";
import { freshDb } from "../support/db";
import type { DB } from "@/server/db";
import * as S from "@/server/db/schema";
import { AppError } from "@/server/errors";
import { seedPlatform } from "@/server/seed";
import { resolveSessionToken } from "@/server/auth/session";
import { registerStudent, signInNewStudent } from "@/server/services/auth";

const ctx = { ip: "127.0.0.1", userAgent: "vitest" };
const PW = "Harmattan#2026x";
let db: DB;
let close: () => Promise<void>;
let classId: string;

const form = (n: number | string, over: Record<string, unknown> = {}) => ({
  firstName: "Ada",
  lastName: "Student",
  email: `kid${n}@students.test`,
  phone: `0803${String(n).padStart(7, "0")}`,
  studentNumber: `PPS/2026/${n}`,
  classId,
  country: "Nigeria",
  password: PW,
  confirmPassword: PW,
  acceptTerms: true,
  ...over,
});

beforeAll(async () => {
  ({ db, close } = await freshDb());
  await seedPlatform({ sampleContent: false });
  const [c] = await db.select().from(S.classes).where(eq(S.classes.code, "JSS1"));
  classId = c.id;
}, 180_000);
afterAll(async () => close());

describe("student registration", () => {
  it("registers many new students at once without false 'already exists' errors", async () => {
    const results = await Promise.allSettled(Array.from({ length: 12 }, (_, i) => registerStudent(form(100 + i), { ...ctx, ip: `10.0.0.${i}` })));
    const failed = results.filter((r) => r.status === "rejected").map((r) => (r as PromiseRejectedResult).reason?.message);
    expect(failed).toEqual([]);
    const users = await db.select({ id: S.users.id }).from(S.users).where(eq(S.users.userType, "STUDENT"));
    expect(users.length).toBe(12);
  }, 120_000);

  it("signs the new student in directly with a working session", async () => {
    const { userId } = await registerStudent(form(200), ctx);
    const s = await signInNewStudent(userId, ctx);
    const resolved = await resolveSessionToken(s.token);
    expect(resolved?.user.id).toBe(userId);
  });

  it("reports the real clash: e-mail, Student ID and username separately", async () => {
    await registerStudent(form(300, { username: "ada.300" }), ctx);
    const code = async (over: Record<string, unknown>) => registerStudent(form(301, over), ctx).catch((e: AppError) => e);
    const e1 = (await code({ email: "kid300@students.test" })) as AppError;
    expect(e1.fields?.email).toBeTruthy();
    const e2 = (await code({ studentNumber: "PPS/2026/300" })) as AppError;
    expect(e2.message).toMatch(/Student ID/);
    const e3 = (await code({ username: "ADA.300" })) as AppError;
    expect(e3.message).toMatch(/username/);
    // none of the failed attempts left a half-created account behind
    const stray = await db.select().from(S.users).where(eq(S.users.email, "kid301@students.test"));
    expect(stray.length).toBe(0);
  });
});
