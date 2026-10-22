import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, ChevronLeft, ChevronRight, Flame, Timer } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { lagosToday, plannerWeek } from "@/server/services/planner";
import { learningPath } from "@/server/services/learning-path";
import { mySubjects } from "@/server/services/study";
import { PlanForm, PlanItem, QuickAdd } from "@/components/planner";
import { buttonClass, Card, CardHeader, cx, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "My Study Planner" };

const label = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-NG", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
const STEP_TEXT = { study: "Study", assignments: "Assignment", ca1: "CA 1", materials: "E-book", ca2: "CA 2", exam: "Exam" } as const;

export default async function PlannerPage({ searchParams }: PageProps<"/student/planner">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const today = lagosToday();
  const [week, subjects, path] = await Promise.all([plannerWeek(s.actor, typeof sp.week === "string" ? sp.week : today), mySubjects(s.actor), learningPath(s.actor).catch(() => ({ groups: [] }))]);
  const suggestions = path.groups.filter((g) => g.next && g.next !== "exam").slice(0, 6).map((g) => ({ title: `${STEP_TEXT[g.next as keyof typeof STEP_TEXT]}: ${g.subject} (${g.term})`, subjectId: g.subjectId }));
  const total = week.days.reduce((a, d) => a + d.items.length, 0);
  const done = week.days.reduce((a, d) => a + d.items.filter((i) => i.doneAt).length, 0);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Your companion" title="My Study Planner" description="Plan what you will study each day, tick it off when done, and keep your streak going. Small daily steps build great results." />
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="flex items-center gap-3 p-4"><Flame className="size-8 text-orange-500" aria-hidden /><div><p className="text-2xl font-extrabold text-navy-800">{week.streak} day{week.streak === 1 ? "" : "s"}</p><p className="text-xs text-muted">Study streak</p></div></Card>
        <Card className="flex items-center gap-3 p-4"><Timer className="size-8 text-royal-600" aria-hidden /><div><p className="text-2xl font-extrabold text-navy-800">{Math.round(week.weekMinutes / 6) / 10} h</p><p className="text-xs text-muted">Studied this week</p></div></Card>
        <Card className="flex items-center gap-3 p-4"><CalendarDays className="size-8 text-emerald-600" aria-hidden /><div><p className="text-2xl font-extrabold text-navy-800">{done}/{total}</p><p className="text-xs text-muted">Tasks done this week</p></div></Card>
      </div>
      <Card>
        <CardHeader title="Add to your plan" />
        <div className="space-y-3 p-5 pt-0">
          <PlanForm today={today} days={week.days.map((d) => ({ value: d.day, label: label(d.day) }))} subjects={subjects.map((x) => ({ id: x.id, name: x.name }))} />
          {suggestions.length > 0 && (
            <div>
              <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-gold-600">Suggested from your learning path (adds to today)</p>
              <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">{suggestions.map((x) => <QuickAdd key={x.title} day={today} title={x.title} subjectId={x.subjectId} />)}</div>
            </div>
          )}
        </div>
      </Card>
      <div className="flex items-center justify-between">
        <Link href={`/student/planner?week=${week.prev}`} className={buttonClass("ghost", "sm")}><ChevronLeft className="size-4" /> Last week</Link>
        <p className="text-sm font-bold text-navy-800">Week of {label(week.start)}</p>
        <Link href={`/student/planner?week=${week.next}`} className={buttonClass("ghost", "sm")}>Next week <ChevronRight className="size-4" /></Link>
      </div>
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <ol className="grid min-w-[56rem] grid-cols-7 gap-3">
          {week.days.map((d) => (
            <li key={d.day} className={cx("rounded-2xl p-3", d.day === today ? "bg-gold-50 ring-2 ring-gold-400" : "bg-surface")}>
              <p className={cx("mb-2 text-xs font-bold uppercase tracking-wide", d.day === today ? "text-gold-600" : "text-muted")}>{label(d.day)}{d.day === today ? " · Today" : ""}</p>
              {d.items.length ? <ul className="space-y-2">{d.items.map((i) => <PlanItem key={i.id} id={i.id} title={i.title} subject={i.subject} minutes={i.minutes} done={Boolean(i.doneAt)} />)}</ul> : <p className="text-xs text-muted">Nothing planned.</p>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
