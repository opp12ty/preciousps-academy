import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { adminResultDetail } from "@/server/services/exams";
import { toPublicError } from "@/server/errors";
import { remarksAction } from "../../actions";
import { ResultReview } from "@/components/result-review";
import { PrintButton } from "@/components/print-button";
import { VoidResultButton } from "@/components/admin/action-wrappers";
import { ActionForm, SubmitButton, TextAreaField } from "@/components/ui/form";
import { Alert, Badge, buttonClass, Card, CardHeader, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Result review" };
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "medium" }).format(d) : "—");

export default async function AdminResultPage({ params }: PageProps<"/admin/results/[id]">) {
  const s = await requireStaffPage("results.view");
  const { id } = await params;
  let r;
  try {
    r = await adminResultDetail(s.actor, id);
  } catch (e) {
    if (toPublicError(e).code === "NOT_FOUND") notFound();
    throw e;
  }
  const manage = can(s.actor, "results.manage");
  return (
    <div className="space-y-6">
      <PageHeader
        breadcrumbs={[{ href: "/admin/results", label: "Results" }, { label: `${r.studentName} — ${r.examTitle}` }]}
        title={`${r.studentName}`}
        description={`${r.examTitle} · attempt ${r.attemptNumber} · ${r.className ?? ""} ${r.department ?? ""}`}
        actions={
          <>
            <PrintButton />
            <a href={`/api/v1/results/${r.id}/slip`} target="_blank" rel="noopener" className={buttonClass("primary")}><Download className="size-4" /> PDF slip</a>
          </>
        }
      />
      {r.isVoided && <Alert tone="danger" title="This attempt has been voided">It no longer counts towards the student&apos;s attempts or results. The record is retained for audit.</Alert>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Card className="p-4"><p className="text-xs text-muted">Score</p><p className="text-2xl font-extrabold text-navy-800">{r.percentage}%</p><p className="text-xs text-muted">{r.score}/{r.totalMarks}</p></Card>
        <Card className="p-4"><p className="text-xs text-muted">Grade</p><p className="text-2xl font-extrabold text-navy-800">{r.grade}</p><Badge tone={r.passed ? "green" : "red"}>{r.passed ? "Pass" : "Fail"}</Badge></Card>
        <Card className="p-4"><p className="text-xs text-muted">Correct / Incorrect / Blank</p><p className="text-xl font-extrabold text-navy-800">{r.correct} / {r.incorrect} / {r.unanswered}</p></Card>
        <Card className="p-4"><p className="text-xs text-muted">Time used</p><p className="text-xl font-extrabold text-navy-800">{Math.floor(r.timeUsedSec / 60)}m {r.timeUsedSec % 60}s</p><p className="text-xs text-muted">{r.submissionMethod?.toLowerCase()}</p></Card>
        <Card className="p-4"><p className="text-xs text-muted">Anomalies recorded</p><p className="text-xl font-extrabold text-navy-800">{r.suspiciousEvents}</p><p className="text-xs text-muted">IP {r.attempt.ip ?? "—"}</p></Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Remarks" />
          <div className="p-5">
            {manage ? (
              <ActionForm action={remarksAction.bind(null, r.id)} className="space-y-3">
                <TextAreaField label="Remarks (shown on the result slip)" name="remarks" defaultValue={r.remarks ?? ""} rows={3} />
                <SubmitButton size="sm">Save remarks</SubmitButton>
              </ActionForm>
            ) : (
              <p className="text-sm">{r.remarks ?? "—"}</p>
            )}
            {manage && !r.isVoided && (
              <div className="mt-5 border-t border-line pt-4">
                <VoidResultButton resultId={r.id} />
              </div>
            )}
          </div>
        </Card>
        <Card>
          <CardHeader title="Attempt timeline" description="Browser-detectable events only" />
          <ul className="max-h-72 divide-y divide-line overflow-y-auto text-sm">
            <li className="px-5 py-2.5"><strong>Started</strong> · {fmt(r.attempt.startedAt)}</li>
            {r.events.map((e) => (
              <li key={e.id} className="flex justify-between px-5 py-2.5">
                <span><StatusBadge status={e.type === "RESUMED" || e.type === "ONLINE" ? "OPEN" : e.type === "NEW_SESSION" ? "HIGH" : "IN_PROGRESS"} /> <span className="ml-1 font-semibold">{e.type.replace(/_/g, " ").toLowerCase()}</span></span>
                <span className="text-xs text-muted">{fmt(e.createdAt)}</span>
              </li>
            ))}
            <li className="px-5 py-2.5"><strong>Submitted</strong> · {fmt(r.attempt.submittedAt)} (deadline {fmt(r.attempt.deadlineAt)})</li>
          </ul>
        </Card>
      </div>
      <section>
        <h2 className="mb-3 text-lg font-extrabold text-navy-800">Answers</h2>
        <ResultReview items={r.review} />
      </section>
      <Link href={`/admin/students/${r.studentUserId}`} className="text-sm font-semibold text-royal-600 hover:underline">Open student profile →</Link>
    </div>
  );
}
