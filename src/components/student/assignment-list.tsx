import Link from "next/link";
import { ClipboardList } from "lucide-react";
import type { listStudentAssignments } from "@/server/services/assignments";
import { Badge, Card, EmptyState, StatusBadge } from "../ui/primitives";

type Row = Awaited<ReturnType<typeof listStudentAssignments>>[number];
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d) : "No due date");

export function AssignmentList({ rows, empty }: { rows: Row[]; empty: string }) {
  if (!rows.length) return <Card><EmptyState icon={<ClipboardList className="size-6" />} title="Nothing to do here" description={empty} /></Card>;
  return (
    <Card>
      <ul className="divide-y divide-line">
        {rows.map((a) => (
          <li key={a.id}>
            <Link href={`/student/assignments/${a.id}`} className="flex flex-wrap items-center gap-3 px-5 py-4 hover:bg-surface">
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-navy-800">{a.title}</p>
                <p className="text-xs text-muted">
                  {a.subject}
                  {a.topic ? ` · ${a.topic}` : ""} · {a.dueAt ? `Due ${fmt(a.dueAt)}` : "No due date"}
                </p>
              </div>
              {a.best !== null && <Badge tone={a.passed ? "green" : "amber"}>Best {a.best}%</Badge>}
              <span className="text-xs text-muted">
                {a.attemptsUsed}/{a.attemptLimit} attempts
              </span>
              <StatusBadge status={a.state === "DONE" ? "COMPLETED" : a.state} />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
