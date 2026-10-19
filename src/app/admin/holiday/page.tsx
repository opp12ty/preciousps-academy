import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Sun } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getCatalog } from "@/server/services/curriculum";
import { holidayCalendar, listHolidayTasksAdmin } from "@/server/services/holiday";
import { HOLIDAY_KEYS, HOLIDAYS, TASK_KINDS } from "@/content/holiday";
import { SECTION_LABELS, type Section } from "@/core/sections";
import { SchoolTaskDelete, SchoolTaskForm } from "@/components/holiday";
import { Badge, Card, CardHeader, cx, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Holiday Programme" };

const fmt = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export default async function AdminHoliday({ searchParams }: PageProps<"/admin/holiday">) {
  const s = await requireStaffPage("assignments.manage");
  const sp = await searchParams;
  const now = await holidayCalendar(s.user.schoolId);
  const tab = typeof sp.holiday === "string" && sp.holiday in HOLIDAYS ? sp.holiday : now.key;
  const [{ rows, parentTasks }, cat] = await Promise.all([listHolidayTasksAdmin(s.user.schoolId, tab), getCatalog(s.user.schoolId)]);
  const classes = cat.classes.map((c) => ({ id: c.id, name: c.name }));
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Curriculum" title="Holiday Programme" description="Activities that keep learners busy during the Christmas, Easter and long vacation breaks. Learners also see revision of last term and a preview of next term, built from each class's scheme of work. Parents can add their own tasks for their children." />
      <Card className="border-l-4 border-l-gold-500 p-5">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gold-600"><Sun className="size-4" aria-hidden /> {now.active ? "In progress now" : `Next holiday, in ${now.daysToGo} days`}</p>
        <p className="mt-1 text-lg font-extrabold text-navy-800">{now.label} {now.year}</p>
        <p className="mt-0.5 flex items-center gap-2 text-sm text-muted"><CalendarDays className="size-4" aria-hidden /> {fmt(now.starts)} to {fmt(now.ends)}</p>
        <p className="mt-2 text-sm text-muted">Dates come from the start and end dates in <Link href="/admin/terms" className="font-semibold text-royal-600 hover:underline">Terms</Link>; when those are blank the usual Nigerian calendar is used. Parents have set {parentTasks} task{parentTasks === 1 ? "" : "s"} for their children so far.</p>
      </Card>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
        {HOLIDAY_KEYS.map((k) => (
          <Link key={k} href={`/admin/holiday?holiday=${k}`} className={cx("whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold", tab === k ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>{HOLIDAYS[k].label}</Link>
        ))}
      </div>
      <Card>
        <CardHeader title="Add a holiday task" description="Choose a class, or a whole section, or leave both empty for every learner. Learners are notified when the task is for the current holiday." />
        <div className="p-5 pt-0"><SchoolTaskForm key={tab} classes={classes} defaultHoliday={tab} /></div>
      </Card>
      <Card>
        <CardHeader title={`${HOLIDAYS[tab as keyof typeof HOLIDAYS].label}: ${rows.length} task${rows.length === 1 ? "" : "s"}`} description="The built-in Precious PS activities are listed here too. Edit, switch off or delete any of them." />
        {rows.length ? (
          <ul className="divide-y divide-line border-t border-line">
            {rows.map(({ t, className, finished }) => {
              const kind = TASK_KINDS[t.kind as keyof typeof TASK_KINDS] ?? TASK_KINDS.ACTIVITY;
              return (
                <li key={t.id} className="px-5 py-3">
                  <details>
                    <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-2">
                      <span className="min-w-0">
                        <span className="block font-semibold text-navy-800">{kind.emoji} {t.title}</span>
                        <span className="block text-xs text-muted">{className ?? (t.level ? SECTION_LABELS[t.level as Section] : "Every learner")} · {t.year === 0 ? "every year" : t.year}{t.dueOn ? ` · by ${fmt(t.dueOn)}` : ""} · {finished} finished</span>
                      </span>
                      <span className="flex items-center gap-2">{!t.active && <Badge tone="neutral">Hidden</Badge>}{!t.createdBy && <Badge tone="gold">Precious PS</Badge>}<span className="text-sm font-semibold text-royal-600">Edit</span></span>
                    </summary>
                    <div className="mt-4 space-y-3 rounded-xl bg-surface p-4">
                      <SchoolTaskForm row={t} classes={classes} />
                      <SchoolTaskDelete id={t.id} title={t.title} />
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="p-5 pt-0"><EmptyState icon={<Sun className="size-6" />} title="No tasks for this holiday" description="Add one above." /></div>
        )}
      </Card>
    </div>
  );
}
