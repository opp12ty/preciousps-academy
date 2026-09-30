import type { Metadata } from "next";
import Link from "next/link";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { listAttempts, listExamsAdmin } from "@/server/services/exams";
import { FilterBar, qs, spRecord } from "@/components/admin/filters";
import { ForceSubmitButton } from "@/components/admin/action-wrappers";
import { Badge, Card, EmptyState, PageHeader, Pagination, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Attempts" };
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "short", timeStyle: "medium" }).format(d) : "—");

export default async function AttemptsPage({ searchParams }: PageProps<"/admin/attempts">) {
  const s = await requireStaffPage("exams.attempts");
  const sp = spRecord(await searchParams);
  const [exams, list] = await Promise.all([listExamsAdmin(s.actor), listAttempts(s.actor, { examId: sp.examId, status: sp.status, suspicious: sp.suspicious === "1", page: Number(sp.page ?? 1) })]);
  return (
    <>
      <PageHeader eyebrow="Assessment" title="Examination attempts" description="Live and completed attempts with browser-detectable anomalies (tab switches, focus loss, copy/paste, new windows). Physical cheating outside the browser cannot be detected." />
      <FilterBar
        action="/admin/attempts"
        values={sp}
        filters={[
          { type: "select", name: "examId", label: "Examination", options: exams.map((e) => ({ value: e.e.id, label: e.e.title })) },
          { type: "select", name: "status", label: "Status", options: ["IN_PROGRESS", "SUBMITTED", "AUTO_SUBMITTED", "VOIDED"].map((v) => ({ value: v, label: v.replace("_", " ").toLowerCase() })) },
          { type: "select", name: "suspicious", label: "Anomalies", options: [{ value: "1", label: "With anomalies only" }] },
        ]}
      />
      <Card>
        {list.rows.length ? (
          <Table>
            <thead><tr><Th>Student</Th><Th>Examination</Th><Th>Status</Th><Th>Started</Th><Th>Deadline / submitted</Th><Th>Score</Th><Th>Anomalies</Th><Th /></tr></thead>
            <tbody>
              {list.rows.map((r) => (
                <tr key={r.id}>
                  <Td className="font-semibold">{r.studentName}<p className="text-xs font-normal text-muted">{r.email} · {r.ip ?? ""}</p></Td>
                  <Td className="text-sm">{r.examTitle} <span className="text-muted">#{r.attemptNumber}</span></Td>
                  <Td><StatusBadge status={r.status} />{r.submissionMethod && <p className="text-xs text-muted">{r.submissionMethod.toLowerCase()}</p>}</Td>
                  <Td className="text-xs">{fmt(r.startedAt)}</Td>
                  <Td className="text-xs">{r.submittedAt ? fmt(r.submittedAt) : `due ${fmt(r.deadlineAt)}`}</Td>
                  <Td>{r.percentage !== null ? `${r.percentage}%` : "—"}</Td>
                  <Td>{r.suspiciousEvents > 0 ? <Badge tone={r.suspiciousEvents >= 5 ? "red" : "amber"}>{r.suspiciousEvents}</Badge> : <span className="text-muted">0</span>}</Td>
                  <Td className="text-right">
                    {r.resultId && can(s.actor, "results.view") && <Link href={`/admin/results/${r.resultId}`} className="text-sm font-semibold text-royal-600 hover:underline">Review</Link>}
                    {r.status === "IN_PROGRESS" && <ForceSubmitButton attemptId={r.id} />}
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState title="No attempts found" />
        )}
        <Pagination page={list.page} pageSize={list.pageSize} total={list.total} href={(p) => `/admin/attempts${qs(sp, { page: p })}`} />
      </Card>
    </>
  );
}
