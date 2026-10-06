import type { Metadata } from "next";
import { eq } from "drizzle-orm";
import { Award, Flame, ShieldCheck, TrendingUp } from "lucide-react";
import { getDb } from "@/server/db";
import { classes, departments, students, users } from "@/server/db/schema";
import { reqCtx } from "@/server/http";
import { getBrand } from "@/server/brand";
import { getSetting } from "@/server/settings";
import { getAccessState } from "@/server/services/access";
import { recommendedPractice, studentPerformance } from "@/server/services/analytics";
import { resolveParentLink, studyActivity } from "@/server/services/engagement";
import { learningSummary } from "@/server/services/study";
import { TrendChart } from "@/components/charts";
import { Badge, Card, CardHeader, ProgressBar } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Progress report", robots: { index: false, follow: false } };

const fmt = (d: Date | string) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium" }).format(new Date(d));

/** Public, read-only progress report for a parent. Only the link's token grants access; no personal contact data is shown. */
export default async function ParentReport({ params }: PageProps<"/report/[token]">) {
  const { token } = await params;
  const link = await resolveParentLink(token, await reqCtx());
  const brand = await getBrand();
  if (!link) {
    return (
      <main id="main" className="grid min-h-dvh place-items-center bg-surface px-4">
        <div className="max-w-md rounded-2xl border border-line bg-card p-8 text-center">
          <ShieldCheck className="mx-auto size-10 text-gold-600" aria-hidden />
          <h1 className="mt-4 text-xl font-bold text-navy-800">This report link is not available</h1>
          <p className="mt-2 text-sm text-muted">It may have expired or been switched off by the student. Please ask them to create a new link.</p>
        </div>
      </main>
    );
  }
  const db = getDb();
  const [u] = await db.select({ first: users.firstName, last: users.lastName }).from(users).where(eq(users.id, link.userId));
  const [st] = await db
    .select({ cls: classes.name, dept: departments.name })
    .from(students)
    .leftJoin(classes, eq(classes.id, students.classId))
    .leftJoin(departments, eq(departments.id, students.departmentId))
    .where(eq(students.userId, link.userId));
  const learning = await getSetting(link.schoolId, "learning");
  const [perf, rec, study, learn, access] = await Promise.all([
    studentPerformance(link.userId),
    recommendedPractice(link.userId, link.schoolId),
    studyActivity(link.userId, learning.weeklyGoalDays),
    learningSummary(link.userId),
    getAccessState(link.userId),
  ]);
  return (
    <main id="main" className="min-h-dvh bg-surface pb-16">
      <header className="bg-navy-800 text-white">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-6 sm:px-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={brand.markUrl} alt="" className="size-14 rounded-xl object-cover ring-1 ring-white/25" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Parent progress report</p>
            <h1 className="text-2xl font-bold">
              {u.first} {u.last}
            </h1>
            <p className="text-sm text-white/70">
              {[st?.cls, st?.dept].filter(Boolean).join(" · ")} · {brand.platformName}
            </p>
          </div>
        </div>
      </header>
      <div className="mx-auto mt-6 max-w-4xl space-y-6 px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Average score", value: perf.overall.avg !== null ? `${perf.overall.avg}%` : "—", icon: TrendingUp },
            { label: "Best score", value: perf.overall.best !== null ? `${perf.overall.best}%` : "—", icon: Award },
            { label: "Study streak", value: `${study.streak} day${study.streak === 1 ? "" : "s"}`, icon: Flame },
            { label: "Lessons completed", value: String(learn.completed), icon: ShieldCheck },
          ].map((k) => (
            <Card key={k.label} className="p-4">
              <k.icon className="size-5 text-gold-600" aria-hidden />
              <p className="mt-2 font-display text-2xl font-bold text-navy-800">{k.value}</p>
              <p className="text-xs text-muted">{k.label}</p>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader title="This week" description={`${study.activeThisWeek} of ${study.weeklyGoalDays} study days · access ${access.status === "ACTIVE" ? "active" : access.status.toLowerCase()}`} />
          <div className="space-y-3 p-5">
            <ProgressBar value={(study.activeThisWeek / study.weeklyGoalDays) * 100} tone="gold" label="Weekly study goal" />
            <div className="flex justify-between">
              {study.week.map((d) => (
                <span key={d.date} className="text-center text-xs text-muted">
                  <span className={`mx-auto mb-1 block size-7 rounded-full ${d.active ? "bg-gold-500" : "bg-navy-800/10"}`} />
                  {d.label}
                </span>
              ))}
            </div>
          </div>
        </Card>
        <Card>
          <CardHeader title="Examination scores over time" />
          <div className="p-5">
            <TrendChart label="Score trend" points={perf.trend.map((t) => ({ x: t.date, y: t.percentage }))} />
          </div>
        </Card>
        <Card>
          <CardHeader title="Topics that need more practice" description="Based on the student's answers so far" />
          <ul className="divide-y divide-line">
            {rec.weak.map((w) => (
              <li key={w.topic_id} className="flex items-center justify-between gap-3 px-5 py-3">
                <span>
                  <span className="block text-sm font-semibold text-navy-800">{w.topic}</span>
                  <span className="block text-xs text-muted">{w.subject}</span>
                </span>
                <Badge tone={w.accuracy < 40 ? "red" : "amber"}>{w.accuracy}% accuracy</Badge>
              </li>
            ))}
            {rec.weak.length === 0 && <li className="px-5 py-6 text-center text-sm text-muted">No weak topics identified yet.</li>}
          </ul>
        </Card>
        <p className="text-center text-xs text-muted">Generated {fmt(new Date())}. This page is private to people who hold the link and shows progress only.</p>
      </div>
    </main>
  );
}
