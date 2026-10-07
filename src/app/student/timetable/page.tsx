import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { listSchedulesForStudent } from "@/server/services/schedules";
import { ScheduleRespond } from "@/components/family-controls";
import { Badge, Card, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "My Timetable" };

export default async function TimetablePage() {
  const s = await requireStudentPage();
  const { timezone } = await getSetting(s.user.schoolId, "localization");
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: timezone }).format(new Date());
  const rows = await listSchedulesForStudent(s.user.id, today);
  const tone = (st: string) => (st === "COMPLETED" ? "green" : st === "ACKNOWLEDGED" ? "blue" : "amber");
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Plan" title="My timetable" description="Study activities and reminders set by your parent or guardian. Tell them you have seen each one, and mark it done when you finish." />
      {rows.length ? (
        <div className="grid gap-3">
          {rows.map(({ s: x, parentFirst }) => (
            <Card key={x.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold text-navy-800">{x.title} {x.kind === "FLAG" && <Badge tone="gold">Flag</Badge>} {x.priority === "HIGH" && <Badge tone="red">High priority</Badge>}</p>
                <p className="text-sm text-muted">{[x.date === today ? "Today" : x.date, x.startTime && `${x.startTime}${x.endTime ? `–${x.endTime}` : ""}`, x.repeat !== "ONCE" && (x.repeat === "DAILY" ? "every day" : "every week"), `from ${parentFirst}`].filter(Boolean).join(" · ")}</p>
                {x.note && <p className="mt-1 text-sm text-navy-800">{x.note}</p>}
              </div>
              <div className="flex items-center gap-3">
                <Badge tone={tone(x.status)}>{x.status === "COMPLETED" ? "Done" : x.status === "ACKNOWLEDGED" ? "Seen" : "New"}</Badge>
                <ScheduleRespond id={x.id} status={x.status} />
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card><EmptyState icon={<CalendarClock className="size-6" />} title="Nothing scheduled" description="When your parent or guardian adds a study activity, it appears here." /></Card>
      )}
    </div>
  );
}
