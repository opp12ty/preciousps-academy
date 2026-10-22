import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck, CalendarDays, Rocket, Sun, Users } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { studentHoliday } from "@/server/services/holiday";
import { TASK_KINDS } from "@/content/holiday";
import { getContent } from "@/server/services/content";
import { HolidayTick } from "@/components/holiday";
import { Badge, Card, CardHeader, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Holiday Programme" };

const fmt = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

type Task = Awaited<ReturnType<typeof studentHoliday>>["school"][number];

function TaskCard({ t }: { t: Task }) {
  const kind = TASK_KINDS[t.kind as keyof typeof TASK_KINDS] ?? TASK_KINDS.ACTIVITY;
  return (
    <li className={`rounded-xl border p-4 ${t.done ? "border-emerald-200 bg-emerald-50/60" : "border-line bg-white"}`}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-wide text-gold-600">{kind.emoji} {kind.label}{t.setter && t.setBy === "PARENT" ? ` · from ${t.setter}` : ""}</p>
          <h3 className="mt-0.5 font-bold text-navy-800">{t.title}</h3>
        </div>
        <div className="flex gap-1.5">
          {t.dueOn && <Badge tone="amber">By {fmt(t.dueOn)}</Badge>}
          {t.done && <Badge tone="green">Done</Badge>}
        </div>
      </div>
      {t.instructions && <p className="mt-1.5 whitespace-pre-line text-sm text-muted">{t.instructions}</p>}
      {t.link && <Link prefetch={false} href={t.link} className="mt-2 inline-block text-sm font-semibold text-royal-600 hover:underline">Open →</Link>}
      {t.done?.note && <p className="mt-2 text-sm italic text-emerald-800">“{t.done.note}”</p>}
      <div className="mt-3"><HolidayTick taskId={t.id} done={Boolean(t.done)} /></div>
    </li>
  );
}

type Groups = Awaited<ReturnType<typeof studentHoliday>>["revision"];

function Group({ g }: { g: Groups[number] }) {
  return (
    <div>
      <p className="text-sm font-bold text-navy-800">{g.subject}</p>
      <ul className="mt-1 space-y-1 text-sm">{g.topics.map((t) => <li key={t.topicId}>{t.lessonId ? <Link prefetch={false} href={`/student/study/lesson/${t.lessonId}`} className="text-royal-600 hover:underline">{t.title}</Link> : <span className="text-muted">{t.title}</span>}</li>)}</ul>
    </div>
  );
}

/** The first subjects (core subjects come first) are open; the rest fold away to keep the page short. */
function TopicGroups({ groups }: { groups: Groups }) {
  const shown = groups.slice(0, 6);
  const more = groups.slice(6);
  return (
    <>
      {shown.map((g) => <Group key={g.subject} g={g} />)}
      {more.length > 0 && (
        <details className="rounded-xl bg-surface p-3">
          <summary className="cursor-pointer text-sm font-semibold text-royal-600">More subjects ({more.length})</summary>
          <div className="mt-3 space-y-4">{more.map((g) => <Group key={g.subject} g={g} />)}</div>
        </details>
      )}
    </>
  );
}

export default async function HolidayPage() {
  const s = await requireStudentPage();
  const p = await studentHoliday(s.actor);
  const special = await getContent(s.user.schoolId, "special-days");
  const h = p.holiday;
  const all = [...p.parents, ...p.school];
  const finished = all.filter((t) => t.done).length;
  const pct = all.length ? Math.round((finished / all.length) * 100) : 0;
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Stay busy, stay ahead" title="Holiday Programme" description="Revise last term, get ready for next term, and enjoy activities chosen by your school and your parents." />
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-royal-700 p-5 text-white shadow-card sm:p-6">
        <Sun className="absolute -right-4 -top-4 size-32 text-white/15" aria-hidden />
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/85">{h.active ? "Holiday in progress" : `Coming up in ${h.daysToGo} day${h.daysToGo === 1 ? "" : "s"}`}</p>
        <h2 className="mt-1 text-2xl font-extrabold">{h.label} {h.year}</h2>
        <p className="mt-1 flex items-center gap-2 text-sm text-white/90"><CalendarDays className="size-4" aria-hidden /> {fmt(h.starts)} to {fmt(h.ends)}{h.active ? ` · ${h.daysLeft} day${h.daysLeft === 1 ? "" : "s"} left` : ""}</p>
        <p className="mt-2 max-w-2xl text-sm text-white/85">{p.blurb}</p>
        {all.length > 0 && (
          <div className="mt-4 max-w-md">
            <div className="flex justify-between text-xs font-semibold"><span>{finished} of {all.length} tasks done</span><span>{pct}%</span></div>
            <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-white/25" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><div className="h-full rounded-full bg-white" style={{ width: `${pct}%` }} /></div>
          </div>
        )}
      </div>

      {p.parents.length > 0 && (
        <Card>
          <CardHeader title={<span className="flex items-center gap-2"><Users className="size-5 text-royal-600" aria-hidden /> From your parents</span>} description="Tasks your parent or guardian set for you. They are told when you finish." />
          <ul className="grid gap-3 p-5 pt-0 lg:grid-cols-2">{p.parents.map((t) => <TaskCard key={t.id} t={t} />)}</ul>
        </Card>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader title={<span className="flex items-center gap-2"><BookOpenCheck className="size-5 text-royal-600" aria-hidden /> Revise last term</span>} description={`Topics you studied in ${p.className ?? "your class"} last term. Read each lesson again and do its classwork.`} />
          <div className="space-y-4 p-5 pt-0">
            {p.revision.length ? <TopicGroups groups={p.revision} /> : <EmptyState icon={<BookOpenCheck className="size-6" />} title="No topics found" description="Your class has no topics for last term yet. Use the Study Centre and Practice tests instead." />}
          </div>
        </Card>
        <Card>
          <CardHeader title={<span className="flex items-center gap-2"><Rocket className="size-5 text-royal-600" aria-hidden /> Get ready for next term</span>} description={`The first topics of next term${p.nextClassName && p.nextClassName !== p.className ? ` in ${p.nextClassName}` : ""}. Reading ahead makes new lessons easier.`} />
          <div className="space-y-4 p-5 pt-0">
            {p.nextTerm.length ? <TopicGroups groups={p.nextTerm} /> : <EmptyState icon={<Rocket className="size-6" />} title="Nothing to preview yet" description={p.isSchool ? "Switch class on your dashboard to preview another class." : "Next term's topics will appear here once they are loaded."} />}
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader title={<span className="flex items-center gap-2"><Sun className="size-5 text-gold-600" aria-hidden /> Holiday activities</span>} description="Set by your school. Tick each one when you have done it." />
        {p.school.length ? <ul className="grid gap-3 p-5 pt-0 lg:grid-cols-2">{p.school.map((t) => <TaskCard key={t.id} t={t} />)}</ul> : <div className="p-5 pt-0"><EmptyState icon={<Sun className="size-6" />} title="No activities yet" description="Your school has not added holiday activities for this break." /></div>}
      </Card>
      <Card>
        <CardHeader title="Special days and festivals" description={special.intro} />
        <ul className="grid gap-3 p-5 pt-0 md:grid-cols-2">
          {special.days.filter((d) => d.name.trim()).map((d) => (
            <li key={d.name} className="rounded-xl border border-line p-4">
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: d.faith === "Islamic" ? "#047857" : d.faith === "Christian" ? "#1d4ed8" : "#a8841e" }}>{d.faith} · {d.when}</p>
              <p className="mt-0.5 font-extrabold text-navy-800">{d.name}</p>
              <p className="mt-1 text-sm text-muted">{d.about}</p>
              <ul className="mt-2 list-disc space-y-0.5 pl-5 text-sm text-navy-800">{d.activities.filter((a) => a.trim()).map((a) => <li key={a}>{a}</li>)}</ul>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
