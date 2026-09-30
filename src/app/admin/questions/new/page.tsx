import type { Metadata } from "next";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { getCatalog } from "@/server/services/curriculum";
import { topicOptions } from "@/server/services/pickers";
import { getSetting } from "@/server/settings";
import { QuestionEditor } from "@/components/admin/question-editor";
import { Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "New question" };

export default async function NewQuestionPage() {
  const s = await requireStaffPage("questions.create");
  const [cat, topics, cal] = await Promise.all([getCatalog(s.user.schoolId), topicOptions(s.user.schoolId), getSetting(s.user.schoolId, "academicCalendar")]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  return (
    <>
      <PageHeader breadcrumbs={[{ href: "/admin/questions", label: "Question bank" }, { label: "New" }]} title="New question" />
      <Card className="p-5 sm:p-6">
        <QuestionEditor subjects={o(cat.subjects)} classes={o(cat.classes)} departments={o(cat.departments)} topics={topics} years={cal.years} canApprove={can(s.actor, "questions.review")} />
      </Card>
    </>
  );
}
