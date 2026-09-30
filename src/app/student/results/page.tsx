import type { Metadata } from "next";
import Link from "next/link";
import { Trophy } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { listStudentResults } from "@/server/services/exams";
import { Badge, Card, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Results" };
const fmt = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d);

export default async function ResultsPage() {
  const s = await requireStudentPage();
  const rows = await listStudentResults(s.actor);
  return (
    <>
      <PageHeader eyebrow="Performance" title="My results" description="Results remain available even after your access period ends." />
      <Card>
        {rows.length ? (
          <Table>
            <thead>
              <tr>
                <Th>Examination</Th>
                <Th>Subject</Th>
                <Th>Date</Th>
                <Th>Attempt</Th>
                <Th className="text-right">Score</Th>
                <Th>Grade</Th>
                <Th />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const visible = r.releasedAt && !r.isVoided && r.resultVisibility !== "HIDDEN";
                return (
                  <tr key={r.id} className="hover:bg-surface">
                    <Td className="font-semibold text-navy-800">{r.examTitle}</Td>
                    <Td>{r.subject}</Td>
                    <Td className="whitespace-nowrap text-muted">{fmt(r.createdAt)}</Td>
                    <Td>{r.attemptNumber}</Td>
                    <Td className="text-right font-bold tabular-nums">{visible ? `${r.percentage}%` : "—"}</Td>
                    <Td>{visible ? <Badge tone={r.passed ? "green" : "red"}>{r.grade}</Badge> : <StatusBadge status={r.isVoided ? "VOIDED" : "PENDING_REVIEW"} />}</Td>
                    <Td className="text-right">
                      <Link href={`/student/results/${r.id}`} className="text-sm font-semibold text-royal-600 hover:underline">
                        View
                      </Link>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<Trophy className="size-6" />} title="No results yet" description="Take a practice test or mock examination to see your results here." />
        )}
      </Card>
    </>
  );
}
