import type { Metadata } from "next";
import Link from "next/link";
import { Trophy } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { listExamsAdmin, listResults, type ResultFilter } from "@/server/services/exams";
import { getCatalog } from "@/server/services/curriculum";
import { FilterBar, qs, spRecord } from "@/components/admin/filters";
import { Badge, Card, EmptyState, PageHeader, Pagination, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Results" };
const fmt = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d);

export default async function ResultsAdmin({ searchParams }: PageProps<"/admin/results">) {
  const s = await requireStaffPage("results.view");
  const sp = spRecord(await searchParams);
  const [exams, cat, list] = await Promise.all([
    listExamsAdmin(s.actor),
    getCatalog(s.user.schoolId),
    listResults(s.actor, { search: sp.search, examId: sp.examId, classId: sp.classId, departmentId: sp.departmentId, grade: sp.grade, from: sp.from, to: sp.to, status: sp.status as ResultFilter["status"], page: Number(sp.page ?? 1) }),
  ]);
  return (
    <>
      <PageHeader eyebrow="Assessment" title="Results" description={`${list.total.toLocaleString()} results · average ${list.avg ?? "—"}%. Historical results are immutable; voiding keeps the record for audit.`} />
      <FilterBar
        action="/admin/results"
        values={sp}
        exportHref={can(s.actor, "results.export") ? `/api/v1/admin/export/results${qs(sp, { page: undefined })}` : undefined}
        filters={[
          { type: "search", name: "search", placeholder: "Student, email, Student ID, exam or verification code" },
          { type: "select", name: "examId", label: "Examination", options: exams.map((e) => ({ value: e.e.id, label: e.e.title })) },
          { type: "select", name: "classId", label: "Class", options: cat.classes.map((c) => ({ value: c.id, label: c.name })) },
          { type: "select", name: "departmentId", label: "Department", options: cat.departments.map((c) => ({ value: c.id, label: c.name })) },
          { type: "select", name: "grade", label: "Grade", options: ["A", "B", "C", "D", "E", "F"].map((g) => ({ value: g, label: g })) },
          { type: "select", name: "status", label: "Status", options: [{ value: "released", label: "Released" }, { value: "pending", label: "Awaiting release" }, { value: "voided", label: "Voided" }] },
          { type: "date", name: "from", label: "From" },
          { type: "date", name: "to", label: "To" },
        ]}
      />
      <Card>
        {list.rows.length ? (
          <Table>
            <thead><tr><Th>Student</Th><Th>Class</Th><Th>Examination</Th><Th className="text-right">Score</Th><Th>Grade</Th><Th>C / I / U</Th><Th>Date</Th><Th>Status</Th><Th /></tr></thead>
            <tbody>
              {list.rows.map((r) => (
                <tr key={r.id} className="hover:bg-surface">
                  <Td className="font-semibold">{r.studentName}<p className="font-mono text-xs font-normal text-muted">{r.studentNumber}</p></Td>
                  <Td className="text-xs">{r.className ?? "—"}<br /><span className="text-muted">{r.department}</span></Td>
                  <Td className="text-sm">{r.examTitle}<p className="text-xs text-muted">attempt {r.attemptNumber}</p></Td>
                  <Td className="text-right font-bold tabular-nums">{r.percentage}%<p className="text-xs font-normal text-muted">{r.score}/{r.totalMarks}</p></Td>
                  <Td><Badge tone={r.passed ? "green" : "red"}>{r.grade}</Badge></Td>
                  <Td className="text-xs tabular-nums">{r.correct} / {r.incorrect} / {r.unanswered}</Td>
                  <Td className="whitespace-nowrap text-xs text-muted">{fmt(r.createdAt)}</Td>
                  <Td><StatusBadge status={r.isVoided ? "VOIDED" : r.releasedAt ? "PUBLISHED" : "PENDING_REVIEW"} />{r.suspiciousEvents > 0 && <Badge tone="amber" className="ml-1">{r.suspiciousEvents} flags</Badge>}</Td>
                  <Td><Link href={`/admin/results/${r.id}`} className="text-sm font-semibold text-royal-600 hover:underline">Review</Link></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<Trophy className="size-6" />} title="No results match" />
        )}
        <Pagination page={list.page} pageSize={list.pageSize} total={list.total} href={(p) => `/admin/results${qs(sp, { page: p })}`} />
      </Card>
    </>
  );
}
