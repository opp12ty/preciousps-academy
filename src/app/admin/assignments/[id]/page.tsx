import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireStaffPage } from "@/server/http";
import { getAssignmentAdmin } from "@/server/services/assignments";
import { getCatalog } from "@/server/services/curriculum";
import { approvedQuestionOptions, topicOptions } from "@/server/services/pickers";
import { toPublicError } from "@/server/errors";
import { AssignmentForm } from "@/components/admin/assignment-form";
import { Badge, Card, CardHeader, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Assignment" };

export default async function AssignmentAdminPage({ params }: PageProps<"/admin/assignments/[id]">) {
  const s = await requireStaffPage("assignments.manage");
  const { id } = await params;
  let a;
  try {
    a = await getAssignmentAdmin(s.user.schoolId, id);
  } catch (e) {
    if (toPublicError(e).code === "NOT_FOUND") notFound();
    throw e;
  }
  const [cat, topics, questions] = await Promise.all([getCatalog(s.user.schoolId), topicOptions(s.user.schoolId), approvedQuestionOptions(s.user.schoolId, { limit: 1000 })]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  return (
    <div className="space-y-6">
      <PageHeader breadcrumbs={[{ href: a.kind === "CLASSWORK" ? "/admin/classwork" : "/admin/assignments", label: a.kind === "CLASSWORK" ? "Classwork" : "Assignments" }, { label: a.title }]} title={a.title} actions={<StatusBadge status={a.status} />} />
      <Card className="p-5 sm:p-6">
        <AssignmentForm
          data={{ ...a, startsAt: a.startsAt?.toISOString() ?? null, dueAt: a.dueAt?.toISOString() ?? null }}
          subjects={o(cat.subjects)}
          classes={o(cat.classes)}
          departments={o(cat.departments)}
          topics={topics}
          questions={questions}
          selected={a.questions.map((q) => q.id)}
        />
      </Card>
      <Card>
        <CardHeader title="Submissions" description={`${a.submissions.length} submission(s)`} />
        <Table>
          <thead><tr><Th>Student</Th><Th>Attempt</Th><Th>Score</Th><Th>Result</Th><Th>Submitted</Th></tr></thead>
          <tbody>
            {a.submissions.map((x) => (
              <tr key={x.id}>
                <Td className="font-semibold">{x.student}</Td>
                <Td>{x.attemptNumber}</Td>
                <Td>{x.percentage}%</Td>
                <Td><Badge tone={x.passed ? "green" : "red"}>{x.passed ? "Pass" : "Fail"}</Badge></Td>
                <Td className="text-xs text-muted">{new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(x.submittedAt)}</Td>
              </tr>
            ))}
            {!a.submissions.length && <tr><Td colSpan={5} className="text-center text-sm text-muted">No submissions yet.</Td></tr>}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
