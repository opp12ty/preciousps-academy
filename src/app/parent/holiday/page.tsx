import type { Metadata } from "next";
import { CalendarDays, Sun, Users } from "lucide-react";
import { requireParentPage } from "@/server/http";
import { parentHoliday } from "@/server/services/holiday";
import { TASK_KINDS } from "@/content/holiday";
import { ParentTaskDelete, ParentTaskForm } from "@/components/holiday";
import { Badge, Card, CardHeader, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Holiday Programme" };

const fmt = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function ParentHolidayPage() {
  const s = await requireParentPage();
  const p = await parentHoliday(s.actor);
  const h = p.holiday;
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Family" title="Holiday Programme" description="Keep your children learning during the holidays. See what the school has set, give your own tasks, and follow what they finish." />
      <Card className="border-l-4 border-l-gold-500 p-5">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gold-600"><Sun className="size-4" aria-hidden /> {h.active ? "Holiday in progress" : `Starts in ${h.daysToGo} day${h.daysToGo === 1 ? "" : "s"}`}</p>
        <p className="mt-1 text-lg font-extrabold text-navy-800">{h.label} {h.year}</p>
        <p className="mt-0.5 flex items-center gap-2 text-sm text-muted"><CalendarDays className="size-4" aria-hidden /> {fmt(h.starts)} to {fmt(h.ends)}</p>
        <p className="mt-2 text-sm text-muted">Each child sees revision of last term, a preview of next term and the activities below in their own Holiday Programme page.</p>
      </Card>

      {p.children.length ? (
        <>
          <Card>
            <CardHeader title="Give a holiday task" description="Your child is notified straight away and you are told when it is done." />
            <div className="p-5 pt-0"><ParentTaskForm kids={p.children.map((c) => ({ id: c.id, name: `${c.firstName} ${c.lastName}`.trim() }))} /></div>
          </Card>
          {p.children.map((c) => (
            <Card key={c.id}>
              <CardHeader title={`${c.firstName} ${c.lastName}`.trim()} description={`${c.className ?? "No class yet"} · ${c.finished} of ${c.items.length} holiday tasks done`} />
              {c.items.length ? (
                <ul className="divide-y divide-line border-t border-line">
                  {c.items.map((t) => {
                    const kind = TASK_KINDS[t.kind as keyof typeof TASK_KINDS] ?? TASK_KINDS.ACTIVITY;
                    return (
                      <li key={t.id} className="flex flex-wrap items-start justify-between gap-3 px-5 py-3">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-navy-800">{kind.emoji} {t.title}</p>
                          <p className="text-xs text-muted">{t.setBy === "PARENT" ? (t.createdBy === s.user.id ? "Set by you" : `Set by ${t.setter ?? "a parent"}`) : "Set by the school"}{t.dueOn ? ` · by ${fmt(t.dueOn)}` : ""}</p>
                          {t.done?.note && <p className="mt-1 text-sm italic text-emerald-800">“{t.done.note}”</p>}
                        </div>
                        <div className="flex items-center gap-2">
                          {t.done ? <Badge tone="green">Done</Badge> : <Badge tone="neutral">Not yet</Badge>}
                          {t.setBy === "PARENT" && t.createdBy === s.user.id && <ParentTaskDelete id={t.id} />}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="p-5 pt-0"><EmptyState icon={<Sun className="size-6" />} title="No tasks yet" description="Give a task above." /></div>
              )}
            </Card>
          ))}
        </>
      ) : (
        <Card><EmptyState icon={<Users className="size-6" />} title="No linked child yet" description="Link your child's account from My children first. Then you can give holiday tasks and follow their progress." /></Card>
      )}
    </div>
  );
}
