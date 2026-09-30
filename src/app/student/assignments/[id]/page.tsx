import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireStudentPage, reqCtx } from "@/server/http";
import { openAssignment } from "@/server/services/assignments";
import { toPublicError } from "@/server/errors";
import { RichText } from "@/components/rich-text";
import { renderQuestion } from "@/components/exam/render";
import { ObjectiveRunner } from "@/components/exam/objective-runner";
import { Alert, Badge, buttonClass, Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Assignment" };
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d) : "—");

export default async function AssignmentPage({ params }: PageProps<"/student/assignments/[id]">) {
  const s = await requireStudentPage();
  const { id } = await params;
  let v;
  try {
    v = await openAssignment(s.actor, id, await reqCtx());
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "NOT_FOUND") notFound();
    return (
      <div className="mx-auto max-w-xl">
        <Alert tone="warning" title="Assignment unavailable">{p.message}</Alert>
        <Link href="/student/assignments" className={buttonClass("secondary", "md", "mt-4")}>Back</Link>
      </div>
    );
  }
  const a = v.assignment;
  const now = new Date();
  const closed = (a.dueAt && a.dueAt < now) || (a.startsAt && a.startsAt > now);
  const used = v.attempts.length;
  const left = a.attemptLimit - used;
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        breadcrumbs={[{ href: a.kind === "CLASSWORK" ? "/student/classwork" : "/student/assignments", label: a.kind === "CLASSWORK" ? "Classwork" : "Assignments" }, { label: a.title }]}
        title={a.title}
        actions={<Badge tone="blue">Pass mark {a.passMark}%</Badge>}
      />
      <Card className="mb-6 p-5">
        <dl className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <div><dt className="text-xs text-muted">Due</dt><dd className="font-semibold">{fmt(a.dueAt)}</dd></div>
          <div><dt className="text-xs text-muted">Questions</dt><dd className="font-semibold">{v.questions.length}</dd></div>
          <div><dt className="text-xs text-muted">Attempts</dt><dd className="font-semibold">{used}/{a.attemptLimit}</dd></div>
          <div><dt className="text-xs text-muted">Best score</dt><dd className="font-semibold">{used ? `${Math.max(...v.attempts.map((x) => x.percentage))}%` : "—"}</dd></div>
        </dl>
        {a.instructions && <RichText text={a.instructions} className="mt-4 border-t border-line pt-4 text-sm" />}
      </Card>
      {closed ? (
        <Alert tone="info">{a.startsAt && a.startsAt > now ? "This assignment has not opened yet." : "The due date has passed. Submissions are closed."}</Alert>
      ) : left <= 0 ? (
        <Alert tone="info" title="All attempts used">Your best score has been recorded.</Alert>
      ) : (
        <ObjectiveRunner
          questions={v.questions.map((q, i) => renderQuestion(q.questionId, i + 1, q))}
          endpoint={`/api/v1/assignments/${a.id}/submit`}
          passLabel="You passed this assignment."
          canRetry={left > 1}
          submitLabel={`Submit assignment (${left} attempt${left === 1 ? "" : "s"} left)`}
        />
      )}
    </div>
  );
}
