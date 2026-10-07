import { and, eq, gt, lte, sql } from "drizzle-orm";
import { NextResponse, type NextRequest } from "next/server";
import { getDb } from "@/server/db";
import { rateLimits, schools, sessions, studentAccessPeriods, users } from "@/server/db/schema";
import { safeEqual } from "@/server/crypto";
import { NEED_PARENT_CODE_MESSAGE, syncExpired } from "@/server/services/access";
import { sweepExpiredAttempts } from "@/server/services/exams";
import { deliverQueued, notifyUser } from "@/server/services/notifications";
import { sendDailyReminders } from "@/server/services/reminders";
import { getSetting } from "@/server/settings";

/**
 * Scheduled maintenance (Vercel Cron, see vercel.json). Protected by CRON_SECRET.
 * - auto-submits expired exam attempts
 * - marks lapsed access periods/codes EXPIRED
 * - sends access-expiry reminders, and reminders for examinations, assignments and study timetables
 * - prunes stale sessions and rate-limit windows
 */
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const got = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!secret || !safeEqual(got, secret)) return new NextResponse("Unauthorized", { status: 401 });
  const db = getDb();
  const submitted = await sweepExpiredAttempts({ limit: 500 });
  const expired = await syncExpired();
  await deliverQueued().catch(() => 0);
  let reminders = 0;
  for (const s of await db.select({ id: schools.id }).from(schools)) {
    const cfg = await getSetting(s.id, "notifications");
    if (!cfg.accessExpiryReminderDays) continue;
    const soon = await db
      .select({ userId: studentAccessPeriods.userId, expiresAt: studentAccessPeriods.currentExpiresAt, userType: users.userType })
      .from(studentAccessPeriods)
      .innerJoin(users, eq(users.id, studentAccessPeriods.userId))
      .where(
        and(
          eq(studentAccessPeriods.schoolId, s.id),
          eq(studentAccessPeriods.status, "ACTIVE"),
          gt(studentAccessPeriods.currentExpiresAt, sql`now() + make_interval(days => ${cfg.accessExpiryReminderDays - 1})`),
          lte(studentAccessPeriods.currentExpiresAt, sql`now() + make_interval(days => ${cfg.accessExpiryReminderDays})`),
        ),
      );
    for (const p of soon) {
      await notifyUser({ schoolId: s.id, userId: p.userId, category: "ACCESS", title: "Your access expires soon", body: `Your access expires on ${p.expiresAt.toUTCString()}. Contact the Super Admin for a new code if you need more time.`, link: p.userType === "PARENT" ? "/parent/access" : "/student" });
      reminders++;
    }
  }
  // Parents still on the free period are told before it ends, and again on the last day.
  const graceEnding = await db
    .select({ id: users.id, schoolId: users.schoolId, until: users.parentGraceUntil })
    .from(users)
    .where(
      and(
        eq(users.userType, "PARENT"),
        sql`${users.deletedAt} IS NULL`,
        sql`(${users.parentGraceUntil} > now() + interval '6 days' AND ${users.parentGraceUntil} <= now() + interval '7 days') OR (${users.parentGraceUntil} > now() AND ${users.parentGraceUntil} <= now() + interval '1 day')`,
        sql`NOT EXISTS (SELECT 1 FROM student_access_periods p WHERE p.user_id = ${users.id} AND p.status = 'ACTIVE' AND p.current_expires_at > now())`,
      ),
    );
  for (const p of graceEnding) {
    await notifyUser({ schoolId: p.schoolId, userId: p.id, category: "ACCESS", title: "Your free period on the parent portal is ending", body: `Parent accounts now need a parent access code. Your free period ends on ${p.until!.toUTCString()}. ${NEED_PARENT_CODE_MESSAGE}`, link: "/parent/access" });
    reminders++;
  }
  reminders += await sendDailyReminders();
  await db.delete(sessions).where(lte(sessions.expiresAt, sql`now() - interval '30 days'`));
  await db.delete(rateLimits).where(lte(rateLimits.windowStart, sql`now() - interval '1 day'`));
  return NextResponse.json({ ok: true, submitted, expired, reminders });
}
