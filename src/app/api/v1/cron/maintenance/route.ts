import { and, eq, gt, lte, sql } from "drizzle-orm";
import { NextResponse, type NextRequest } from "next/server";
import { getDb } from "@/server/db";
import { rateLimits, schools, sessions, studentAccessPeriods } from "@/server/db/schema";
import { safeEqual } from "@/server/crypto";
import { syncExpired } from "@/server/services/access";
import { sweepExpiredAttempts } from "@/server/services/exams";
import { notifyUser } from "@/server/services/notifications";
import { getSetting } from "@/server/settings";

/**
 * Scheduled maintenance (Vercel Cron, see vercel.json). Protected by CRON_SECRET.
 * - auto-submits expired exam attempts
 * - marks lapsed access periods/codes EXPIRED
 * - sends access-expiry reminders
 * - prunes stale sessions and rate-limit windows
 */
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const got = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (!secret || !safeEqual(got, secret)) return new NextResponse("Unauthorized", { status: 401 });
  const db = getDb();
  const submitted = await sweepExpiredAttempts({ limit: 500 });
  const expired = await syncExpired();
  let reminders = 0;
  for (const s of await db.select({ id: schools.id }).from(schools)) {
    const cfg = await getSetting(s.id, "notifications");
    if (!cfg.accessExpiryReminderDays) continue;
    const soon = await db
      .select({ userId: studentAccessPeriods.userId, expiresAt: studentAccessPeriods.currentExpiresAt })
      .from(studentAccessPeriods)
      .where(
        and(
          eq(studentAccessPeriods.schoolId, s.id),
          eq(studentAccessPeriods.status, "ACTIVE"),
          gt(studentAccessPeriods.currentExpiresAt, sql`now() + make_interval(days => ${cfg.accessExpiryReminderDays - 1})`),
          lte(studentAccessPeriods.currentExpiresAt, sql`now() + make_interval(days => ${cfg.accessExpiryReminderDays})`),
        ),
      );
    for (const p of soon) {
      await notifyUser({ schoolId: s.id, userId: p.userId, category: "ACCESS", title: "Your access expires soon", body: `Your access expires on ${p.expiresAt.toUTCString()}. Contact the Super Admin for a new code if you need more time.`, link: "/student" });
      reminders++;
    }
  }
  await db.delete(sessions).where(lte(sessions.expiresAt, sql`now() - interval '30 days'`));
  await db.delete(rateLimits).where(lte(rateLimits.windowStart, sql`now() - interval '1 day'`));
  return NextResponse.json({ ok: true, submitted, expired, reminders });
}
