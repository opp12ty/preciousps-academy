import Link from "next/link";
import { ClipboardList } from "lucide-react";
import type { listAssignmentsAdmin } from "@/server/services/assignments";
import { Badge, Card, EmptyState, StatusBadge, Table, Td, Th } from "../ui/primitives";

type Row = Awaited<ReturnType<typeof listAssignmentsAdmin>>[number];

export function AdminAssignmentTable({ rows }: { rows: Row[] }) {
  return (
    <Card>
      {rows.length ? (
        <Table>
          <thead><tr><Th>Title</Th><Th>Subject</Th><Th>Audience</Th><Th>Questions</Th><Th>Due</Th><Th>Submissions</Th><Th>Average</Th><Th>Status</Th></tr></thead>
          <tbody>
            {rows.map(({ a, subject, className, department, questions, submissions, avg }) => (
              <tr key={a.id} className="hover:bg-surface">
                <Td><Link href={`/admin/assignments/${a.id}`} className="font-semibold text-navy-800 hover:text-royal-600">{a.title}</Link> <Badge>{a.kind.toLowerCase()}</Badge></Td>
                <Td>{subject}</Td>
                <Td className="text-xs">{className ?? "All classes"} · {department ?? "All departments"}</Td>
                <Td>{questions}</Td>
                <Td className="text-xs">{a.dueAt ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(a.dueAt) : "—"}</Td>
                <Td>{submissions}</Td>
                <Td>{avg !== null ? `${avg}%` : "—"}</Td>
                <Td><StatusBadge status={a.status} /></Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState icon={<ClipboardList className="size-6" />} title="Nothing created yet" />
      )}
    </Card>
  );
}
