import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getCatalog } from "@/server/services/curriculum";
import { approvedQuestionOptions, topicOptions } from "@/server/services/pickers";
import { AssignmentForm } from "@/components/admin/assignment-form";
import { Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "New assignment" };

export default async function NewAssignmentPage({ searchParams }: PageProps<"/admin/assignments/new">) {
  const s = await requireStaffPage("assignments.manage");
  const { kind } = (await searchParams) as { kind?: string };
  const [cat, topics, questions] = await Promise.all([getCatalog(s.user.schoolId), topicOptions(s.user.schoolId), approvedQuestionOptions(s.user.schoolId, { limit: 1000 })]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  return (
    <>
      <PageHeader breadcrumbs={[{ href: kind === "CLASSWORK" ? "/admin/classwork" : "/admin/assignments", label: kind === "CLASSWORK" ? "Classwork" : "Assignments" }, { label: "New" }]} title={kind === "CLASSWORK" ? "New classwork" : "New assignment"} />
      <Card className="p-5 sm:p-6">
        <AssignmentForm subjects={o(cat.subjects)} classes={o(cat.classes)} departments={o(cat.departments)} topics={topics} questions={questions} defaultKind={kind === "CLASSWORK" ? "CLASSWORK" : "ASSIGNMENT"} />
      </Card>
    </>
  );
}
