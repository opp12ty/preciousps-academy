import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, CheckCircle2, ClipboardList, Flame, MonitorCheck, Play, Sparkles, Target, TrendingUp, Users } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getBrand } from "@/server/brand";
import { getSetting } from "@/server/settings";
import { getAccessState } from "@/server/services/access";
import { listStudentExams, listStudentResults } from "@/server/services/exams";
import { learningSummary } from "@/server/services/study";
import { listStudentAssignments } from "@/server/services/assignments";
import { recommendedPractice, studentPerformance } from "@/server/services/analytics";
import { studyActivity } from "@/server/services/engagement";
import { listNotifications } from "@/server/services/notifications";
import { AccessCard } from "@/components/student/access-card";
import { TrendChart } from "@/components/charts";
import { Alert, Badge, buttonClass, Card, CardHeader, cx, EmptyState, ProgressBar, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Dashboard" };

const fmtDate = (d: Date | string) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium" }).format(new Date(d));

function GoalRing({ value, goal }: { value: number; goal: number }) {
  const pct = Math.min(1, value / goal);
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 84 84" className="size-24" role="img" aria-label={`${value} of ${goal} study days this week`}>
      <circle cx="42" cy="42" r={r} fill="none" stroke="rgb(255 255 255 / 0.18)" strokeWidth="9" />
      <circle cx="42" cy="42" r={r} fill="none" stroke="#ffcb2e" strokeWidth="9" strokeLinecap="round" strokeDasharray={`${c * pct} ${c}`} transform="rotate(-90 42 42)" />
      <text x="42" y="40" textAnchor="middle" className="fill-white font-display text-[17px] font-bold">
        {value}/{goal}
      </text>
      <text x="42" y="54" textAnchor="middle" className="fill-white/70 text-[8px]">
        days
      </text>
    </svg>
  );
}

export default async function StudentDashboard({ searchParams }: PageProps<"/student">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const learningCfg = await getSetting(s.user.schoolId, "learning");
  const [brand, access, exams, results, learning, assignments, perf, rec, notes, study] = await Promise.all([
    getBrand(),
    getAccessState(s.user.id),
    listStudentExams(s.actor),
    listStudentResults(s.actor),
    learningSummary(s.user.id),
    listStudentAssignments(s.actor),
    studentPerformance(s.user.id),
    recommendedPractice(s.user.id, s.user.schoolId),
    listNotifications(s.user.id, s.user.schoolId, 5),
    studyActivity(s.user.id, learningCfg.weeklyGoalDays),
  ]);
  const hour = Number(new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", hour: "numeric", hour12: false }).format(new Date()));
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const available = exams.filter((e) => e.canStart);
  const released = results.filter((r) => r.releasedAt && !r.isVoided);
  const pending = assignments.filter((a) => a.state === "PENDING" || a.state === "IN_PROGRESS");
  const nextStep = learning.current ? { href: `/student/study/lesson/${learning.current.id}`, label: "Continue learning", sub: learning.current.title } : { href: "/student/study", label: "Open the Study Centre", sub: "Start your first lesson" };

  return (
    <div className="space-y-6">
      {sp.welcome && (
        <Alert tone="success" title="Welcome to Precious PS Academy!">
          Your account is ready. Activate your access code below to unlock CBT, the Study Centre and more.
        </Alert>
      )}

      {/* Hero banner */}
      <section className="relative overflow-hidden rounded-3xl bg-navy-800 p-6 text-white sm:p-8">
        <div className="bg-dots absolute inset-0 opacity-40" aria-hidden />
        <div className="absolute -right-20 -top-24 size-72 rounded-full bg-royal-600/40 blur-3xl" aria-hidden />
        <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold text-gold-400">{greeting},</p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">{s.user.firstName}</h1>
            <p className="mt-2 max-w-xl text-sm text-white/70">{brand.tagline}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link href={nextStep.href} className={buttonClass("gold", "lg")}>
                <Play className="size-4" aria-hidden /> {nextStep.label}
              </Link>
              <Link href="/student/exams" className={buttonClass("outlineLight", "lg")}>
                <MonitorCheck className="size-4" aria-hidden /> Take an exam
              </Link>
            </div>
            <p className="mt-3 truncate text-xs text-white/60">{nextStep.sub}</p>
          </div>
          <div className="flex items-center gap-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
            <GoalRing value={study.activeThisWeek} goal={study.weeklyGoalDays} />
            <div>
              <p className="flex items-center gap-1.5 font-display text-2xl font-bold">
                <Flame className="size-6 text-gold-400" aria-hidden /> {study.streak}
                <span className="text-sm font-semibold text-white/70">day streak</span>
              </p>
              <p className="mt-1 text-xs text-white/65">Best: {study.best} day{study.best === 1 ? "" : "s"} · {study.active30} active in 30 days</p>
              <div className="mt-3 flex gap-1.5" aria-label="Last 7 days">
                {study.week.map((d) => (
                  <span key={d.date} title={d.date} className={cx("grid size-6 place-items-center rounded-md text-[0.6rem] font-bold", d.active ? "bg-gold-500 text-navy-900" : "bg-white/10 text-white/50", d.today && "ring-2 ring-white/60")}>
                    {d.label.slice(0, 1)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <AccessCard initial={access} contact={brand.accessCodeContact} />
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Available exams", value: available.length, icon: MonitorCheck, tone: "bg-royal-50 text-royal-600" },
            { label: "Completed exams", value: released.length, icon: CheckCircle2, tone: "bg-success-50 text-success-600" },
            { label: "Average score", value: perf.overall.avg !== null ? `${perf.overall.avg}%` : "—", icon: TrendingUp, tone: "bg-gold-100 text-gold-600" },
            { label: "Best score", value: perf.overall.best !== null ? `${perf.overall.best}%` : "—", icon: Award, tone: "bg-navy-800 text-gold-400" },
          ].map((k) => (
            <Card key={k.label} className="p-4">
              <span className={cx("grid size-9 place-items-center rounded-lg", k.tone)}>
                <k.icon className="size-[1.1rem]" aria-hidden />
              </span>
              <p className="mt-3 font-display text-[1.7rem] font-bold leading-none text-navy-800">{k.value}</p>
              <p className="mt-1 text-xs text-muted">{k.label}</p>
            </Card>
          ))}
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
            <div>
              <div className="mb-1.5 flex justify-between text-xs font-semibold text-muted">
                <span>Weekly goal</span>
                <span>
                  {study.activeThisWeek}/{study.weeklyGoalDays} days
                </span>
              </div>
              <ProgressBar value={(study.activeThisWeek / study.weeklyGoalDays) * 100} tone="gold" label="Weekly study goal" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-surface p-3">
                <p className="font-display text-2xl font-bold text-navy-800">{learning.completed}</p>
                <p className="text-xs text-muted">Lessons completed</p>
              </div>
              <div className="rounded-xl bg-surface p-3">
                <p className="font-display text-2xl font-bold text-navy-800">
                  {learning.classworkAverage ?? "—"}
                  {learning.classworkAverage !== null && "%"}
                </p>
                <p className="text-xs text-muted">Classwork average</p>
              </div>
            </div>
            <Link href="/student/family" className="flex items-center gap-2 rounded-xl border border-dashed border-gold-400 bg-gold-50 p-3 text-sm font-semibold text-navy-800 hover:bg-gold-100">
              <Users className="size-4 text-gold-600" aria-hidden /> Share a progress report with a parent
            </Link>
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
                    {!n.read && <span className="size-2 rounded-full bg-gold-500" aria-label="Unread" />}
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
              <BookOpen className="size-4" aria-hidden /> Continue your learning journey <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
