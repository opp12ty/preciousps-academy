import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, CheckCircle2, ClipboardList, MonitorCheck, Sparkles, Target, TrendingUp } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getBrand } from "@/server/brand";
import { getAccessState } from "@/server/services/access";
import { listStudentExams, listStudentResults } from "@/server/services/exams";
import { learningSummary } from "@/server/services/study";
import { listStudentAssignments } from "@/server/services/assignments";
import { recommendedPractice, studentPerformance } from "@/server/services/analytics";
import { listNotifications } from "@/server/services/notifications";
import { AccessCard } from "@/components/student/access-card";
import { TrendChart } from "@/components/charts";
import { Alert, Badge, buttonClass, Card, CardHeader, EmptyState, Stat, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Dashboard" };

const fmtDate = (d: Date | string) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium" }).format(new Date(d));

export default async function StudentDashboard({ searchParams }: PageProps<"/student">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const [brand, access, exams, results, learning, assignments, perf, rec, notes] = await Promise.all([
    getBrand(),
    getAccessState(s.user.id),
    listStudentExams(s.actor),
    listStudentResults(s.actor),
    learningSummary(s.user.id),
    listStudentAssignments(s.actor),
    studentPerformance(s.user.id),
    recommendedPractice(s.user.id, s.user.schoolId),
    listNotifications(s.user.id, s.user.schoolId, 5),
  ]);
  const hour = Number(new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", hour: "numeric", hour12: false }).format(new Date()));
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const available = exams.filter((e) => e.canStart);
  const released = results.filter((r) => r.releasedAt && !r.isVoided);
  const pending = assignments.filter((a) => a.state === "PENDING" || a.state === "IN_PROGRESS");

  return (
    <div className="space-y-6">
      {sp.welcome && (
        <Alert tone="success" title="Welcome to Precious PS Academy!">
          Your account is ready. Activate your access code below to unlock CBT, the Study Centre and more.
        </Alert>
      )}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold text-gold-600">{greeting},</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-navy-800 sm:text-3xl">{s.user.firstName} 👋</h1>
        <p className="text-sm text-muted">{brand.tagline} Here&apos;s your learning at a glance.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <AccessCard initial={access} contact={brand.accessCodeContact} />
        <div className="grid grid-cols-2 gap-4">
          <Stat label="Available exams" value={available.length} icon={<MonitorCheck className="size-5" />} />
          <Stat label="Completed exams" value={released.length} icon={<CheckCircle2 className="size-5" />} tone="green" />
          <Stat label="Average score" value={perf.overall.avg !== null ? `${perf.overall.avg}%` : "—"} icon={<TrendingUp className="size-5" />} tone="gold" />
          <Stat label="Best score" value={perf.overall.best !== null ? `${perf.overall.best}%` : "—"} icon={<Award className="size-5" />} tone="navy" />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Performance trend" description="Your released examination scores over time" action={<Link href="/student/performance" className="text-sm font-semibold text-royal-600 hover:underline">Details</Link>} />
          <div className="p-5">
            <TrendChart label="Score trend" points={perf.trend.map((t) => ({ x: t.date, y: t.percentage }))} />
          </div>
        </Card>
        <Card>
          <CardHeader title="Learning progress" />
          <div className="space-y-4 p-5">
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-surface p-3">
                <p className="text-2xl font-extrabold text-navy-800">{learning.completed}</p>
                <p className="text-xs text-muted">Lessons completed</p>
              </div>
              <div className="rounded-xl bg-surface p-3">
                <p className="text-2xl font-extrabold text-navy-800">{learning.classworkAverage ?? "—"}{learning.classworkAverage !== null && "%"}</p>
                <p className="text-xs text-muted">Classwork average</p>
              </div>
            </div>
            {learning.current ? (
              <Link href={`/student/study/lesson/${learning.current.id}`} className="block rounded-xl border border-royal-100 bg-royal-50 p-4 hover:bg-royal-100/60">
                <p className="text-xs font-bold uppercase tracking-wide text-royal-700">Continue learning</p>
                <p className="mt-1 font-bold text-navy-800">{learning.current.title}</p>
                <p className="text-xs text-muted">{learning.current.topic}</p>
              </Link>
            ) : (
              <Link href="/student/study" className={buttonClass("secondary", "md", "w-full")}>
                <BookOpen className="size-4" /> Open the Study Centre
              </Link>
            )}
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader title="Available exams" action={<Link href="/student/exams" className="text-sm font-semibold text-royal-600 hover:underline">All</Link>} />
          {available.length ? (
            <ul className="divide-y divide-line">
              {available.slice(0, 5).map((e) => (
                <li key={e.id} className="flex items-center justify-between gap-3 px-5 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-navy-800">{e.title}</p>
                    <p className="text-xs text-muted">
                      {e.questionCount} questions · {e.durationMinutes} min
                    </p>
                  </div>
                  <Link href={`/student/exams/${e.id}`} className={buttonClass(e.liveAttemptId ? "gold" : "primary", "sm")}>
                    {e.liveAttemptId ? "Resume" : "Start"}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="No exams available" description={access.status === "ACTIVE" ? "New examinations will appear here." : "Activate your access code to take examinations."} />
          )}
        </Card>
        <Card>
          <CardHeader title="Recent results" action={<Link href="/student/results" className="text-sm font-semibold text-royal-600 hover:underline">All</Link>} />
          {results.length ? (
            <ul className="divide-y divide-line">
              {results.slice(0, 5).map((r) => (
                <li key={r.id}>
                  <Link href={`/student/results/${r.id}`} className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-surface">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-navy-800">{r.examTitle}</p>
                      <p className="text-xs text-muted">{fmtDate(r.createdAt)}</p>
                    </div>
                    {r.releasedAt && !r.isVoided ? (
                      <span className="text-right">
                        <span className="block text-sm font-extrabold text-navy-800">{r.percentage}%</span>
                        <Badge tone={r.passed ? "green" : "red"}>Grade {r.grade}</Badge>
                      </span>
                    ) : (
                      <StatusBadge status={r.isVoided ? "VOIDED" : "PENDING_REVIEW"} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="No results yet" description="Your results will appear here after your first exam." />
          )}
        </Card>
        <Card>
          <CardHeader title="Pending assignments" action={<Link href="/student/assignments" className="text-sm font-semibold text-royal-600 hover:underline">All</Link>} />
          {pending.length ? (
            <ul className="divide-y divide-line">
              {pending.slice(0, 5).map((a) => (
                <li key={a.id}>
                  <Link href={`/student/assignments/${a.id}`} className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-surface">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-navy-800">{a.title}</p>
                      <p className="text-xs text-muted">{a.dueAt ? `Due ${fmtDate(a.dueAt)}` : a.subject}</p>
                    </div>
                    <ClipboardList className="size-4 text-muted" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="All caught up" description="No pending assignments." />
          )}
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Recommended practice" description="Based on your weakest topics" />
          <div className="p-5">
            {rec.weak.length ? (
              <ul className="space-y-3">
                {rec.weak.map((w) => (
                  <li key={w.topic_id} className="flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-navy-800">{w.topic}</p>
                      <p className="text-xs text-muted">{w.subject}</p>
                    </div>
                    <Badge tone={w.accuracy < 40 ? "red" : "amber"}>{w.accuracy}% accuracy</Badge>
                  </li>
                ))}
                {rec.lessons.map((l) => (
                  <li key={l.id}>
                    <Link href={`/student/study/lesson/${l.id}`} className="flex items-center gap-2 text-sm font-semibold text-royal-600 hover:underline">
                      <Sparkles className="size-4" aria-hidden /> Revise: {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex items-center gap-3 text-sm text-muted">
                <Target className="size-5 text-royal-600" aria-hidden />
                Take a practice test and we&apos;ll recommend exactly what to revise.
              </div>
            )}
          </div>
        </Card>
        <Card>
          <CardHeader title="Notifications" action={<Link href="/student/notifications" className="text-sm font-semibold text-royal-600 hover:underline">All</Link>} />
          {notes.length ? (
            <ul className="divide-y divide-line">
              {notes.map((n) => (
                <li key={n.id} className="px-5 py-3">
                  <p className="flex items-center gap-2 text-sm font-semibold text-navy-800">
                    {!n.read && <span className="size-2 rounded-full bg-royal-600" aria-label="Unread" />}
                    {n.title}
                  </p>
                  <p className="line-clamp-2 text-xs text-muted">{n.body}</p>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="No notifications" />
          )}
          <div className="border-t border-line px-5 py-3">
            <Link href="/student/study" className="inline-flex items-center gap-1 text-sm font-semibold text-royal-600">
              Continue your learning journey <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
