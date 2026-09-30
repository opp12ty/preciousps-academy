import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { getQuestion } from "@/server/services/questions";
import { getCatalog } from "@/server/services/curriculum";
import { topicOptions } from "@/server/services/pickers";
import { getSetting } from "@/server/settings";
import { toPublicError } from "@/server/errors";
import { QuestionEditor, type QuestionData } from "@/components/admin/question-editor";
import { Alert, Badge, Card, CardHeader, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Question" };

export default async function QuestionPage({ params }: PageProps<"/admin/questions/[id]">) {
  const s = await requireStaffPage("questions.view");
  const { id } = await params;
  let q;
  try {
    q = await getQuestion(s.actor, id);
  } catch (e) {
    if (toPublicError(e).code === "NOT_FOUND") notFound();
    throw e;
  }
  const [cat, topics, cal] = await Promise.all([getCatalog(s.user.schoolId), topicOptions(s.user.schoolId), getSetting(s.user.schoolId, "academicCalendar")]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  const acc = q.timesAttempted ? Math.round((100 * q.timesCorrect) / q.timesAttempted) : null;
  const data: QuestionData = { ...q, answerSpec: (q.answerSpec as QuestionData["answerSpec"]) ?? null, options: q.options.map((x) => ({ text: x.text, isCorrect: x.isCorrect, matchText: x.matchText })) };
  return (
    <div className="space-y-6">
      <PageHeader breadcrumbs={[{ href: "/admin/questions", label: "Question bank" }, { label: q.ref }]} title={q.ref} actions={<><StatusBadge status={q.status} /><Badge>v{q.version}</Badge>{q.aiGenerated && <Badge tone="gold">AI-generated</Badge>}</>} />
      {q.reviewNote && <Alert tone={q.status === "REJECTED" ? "danger" : "info"} title="Reviewer note">{q.reviewNote}</Alert>}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card className="p-4"><p className="text-xs text-muted">Times attempted</p><p className="text-xl font-extrabold text-navy-800">{q.timesAttempted}</p></Card>
        <Card className="p-4"><p className="text-xs text-muted">Correct</p><p className="text-xl font-extrabold text-navy-800">{acc === null ? "—" : `${acc}%`}</p></Card>
        <Card className="p-4"><p className="text-xs text-muted">Flag rate</p><p className="text-xl font-extrabold text-navy-800">{q.timesAttempted ? `${Math.round((100 * q.timesFlagged) / q.timesAttempted)}%` : "—"}</p></Card>
        <Card className="p-4"><p className="text-xs text-muted">Avg. response</p><p className="text-xl font-extrabold text-navy-800">{q.timesAttempted ? `${Math.round(q.totalResponseMs / q.timesAttempted / 1000)}s` : "—"}</p></Card>
      </div>
      <Card className="p-5 sm:p-6">
        {can(s.actor, "questions.edit") ? (
          <QuestionEditor initial={data} subjects={o(cat.subjects)} classes={o(cat.classes)} departments={o(cat.departments)} topics={topics} years={cal.years} canApprove={can(s.actor, "questions.review")} />
        ) : (
          <p className="text-sm text-muted">You can view but not edit questions.</p>
        )}
      </Card>
      <Card>
        <CardHeader title="Version history" description="Examination attempts reference the exact version a student saw, so edits never change past results." />
        <ul className="divide-y divide-line">
          {q.versions.map((v) => (
            <li key={v.version} className="flex justify-between px-5 py-2.5 text-sm">
              <span className="font-semibold text-navy-800">Version {v.version}</span>
              <span className="text-muted">{new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(v.createdAt)}</span>
            </li>
          ))}
        </ul>
      </Card>
      <p className="text-xs text-muted">Source: {q.source ?? "—"} · Copyright: {q.copyrightStatus} · Licence: {q.licenseInfo ?? "—"}</p>
    </div>
  );
}
