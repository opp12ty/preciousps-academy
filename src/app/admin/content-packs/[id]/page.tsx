import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { getPack } from "@/server/services/content-packs";
import { PackActions } from "@/components/admin/content-pack";
import { Alert, Badge, Card, CardHeader, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Content Pack" };
/** Importing a full subject pack can take longer than the default serverless limit. */
export const maxDuration = 60;

export default async function ContentPackPage({ params }: PageProps<"/admin/content-packs/[id]">) {
  const s = await requireStaffPage("curriculum.manage");
  const { id } = await params;
  const { imp, report, status } = await getPack(s.actor, id);
  const c = report.counts;
  const counts = `${c.topics} topics (${c.subtopics} subtopics), ${c.lessons} lessons, ${c.questions} questions, ${c.exams} exams and ${c.assignments} assignments`;
  const stage = report.publishedAt ? "PUBLISHED" : imp.status;
  const cr = report.created;
  return (
    <div className="space-y-6">
      <Link href="/admin/content-packs" className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline">
        <ArrowLeft className="size-4" /> All content packs
      </Link>
      <PageHeader eyebrow="Content pack" title={report.subject ? `${report.subject.name}` : imp.fileName} description={`${imp.fileName}${report.version ? ` · version ${report.version}` : ""}`} actions={<StatusBadge status={stage} />} />

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {[
          ["Topics", c.topics],
          ["Subtopics", c.subtopics],
          ["Lessons", c.lessons],
          ["Questions", c.questions],
          ["Exams", c.exams],
          ["Assignments", c.assignments],
        ].map(([k, v]) => (
          <Card key={k} className="p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">{k}</p>
            <p className="mt-1 text-2xl font-extrabold text-navy-800">{v}</p>
          </Card>
        ))}
      </div>

      {imp.status === "PREVIEW" && (
        <Card>
          <CardHeader title="Step 2 — Import" description="Nothing has been created yet." />
          <div className="space-y-4 p-5">
            {report.errors.length ? (
              <Alert tone="danger" title={`${report.errors.length} error(s) must be fixed`}>Correct the rows listed below in the workbook, then upload it again. Nothing was imported.</Alert>
            ) : (
              <>
                <Alert tone="success" title="The pack passed every check">{`Importing creates ${counts}.`}</Alert>
                <PackActions id={id} stage="PREVIEW" canReview={can(s.actor, "questions.review")} pending={0} counts={counts} />
              </>
            )}
          </div>
        </Card>
      )}

      {cr && status && (
        <Card>
          <CardHeader title="Steps 3 & 4 — Review, approve and publish" description="Review the questions in the Question Bank (filter by subject and Pending review), approve them, then publish." />
          <div className="space-y-4 p-5">
            <ul className="grid gap-2 text-sm sm:grid-cols-2">
              <li>Topics created: <b>{cr.topicIds.length}</b>{cr.reusedTopics ? ` (${cr.reusedTopics} already existed and were reused)` : ""}</li>
              <li>Lessons: <b>{cr.lessonIds.length}</b> · still draft: <b>{status.draftLessons}</b></li>
              <li>Questions: <b>{cr.questionIds.length}</b> · pending review: <b>{status.pendingQuestions}</b> · approved: <b>{status.approvedQuestions}</b></li>
              <li>Examinations: <b>{cr.examIds.length}</b> · still draft: <b>{status.draftExams}</b></li>
              <li>Assignments: <b>{cr.assignmentIds.length}</b> · still draft: <b>{status.draftAssignments}</b></li>
              <li>Skipped: <b>{cr.skippedDuplicates}</b> duplicate question(s), <b>{cr.skippedExisting}</b> existing lesson/exam/assignment title(s)</li>
            </ul>
            <PackActions id={id} stage="COMMITTED" canReview={can(s.actor, "questions.review")} pending={status.pendingQuestions} counts={counts} />
            {report.publishReport && (
              <Alert tone={report.publishReport.notPublished.length ? "warning" : "success"} title={`Published ${report.publishReport.lessons} lessons, ${report.publishReport.exams} exams and ${report.publishReport.assignments} assignments`}>
                {report.publishReport.notPublished.length ? (
                  <ul className="mt-1 list-disc pl-5">
                    {report.publishReport.notPublished.slice(0, 30).map((n) => <li key={n}>{n}</li>)}
                  </ul>
                ) : (
                  "Everything in this pack is live."
                )}
              </Alert>
            )}
          </div>
        </Card>
      )}

      {(report.errors.length > 0 || report.warnings.length > 0) && (
        <Card>
          <CardHeader title="Checks" description={`${report.errors.length} error(s) · ${report.warnings.length} warning(s)`} />
          <Table>
            <thead><tr><Th>Type</Th><Th>Sheet</Th><Th>Row</Th><Th>Message</Th></tr></thead>
            <tbody>
              {[...report.errors.map((e) => ({ ...e, t: "error" })), ...report.warnings.map((w) => ({ ...w, t: "warning" }))].slice(0, 300).map((x, i) => (
                <tr key={i}>
                  <Td><Badge tone={x.t === "error" ? "red" : "gold"}>{x.t}</Badge></Td>
                  <Td>{x.sheet}</Td>
                  <Td>{x.row || "—"}</Td>
                  <Td className="text-sm">{x.message}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      )}
    </div>
  );
}
