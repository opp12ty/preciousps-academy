import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getCatalog } from "@/server/services/curriculum";
import { topicOptions } from "@/server/services/pickers";
import { getSettings } from "@/server/settings";
import { ExamForm } from "@/components/admin/exam-form";
import { Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "New examination" };

export default async function NewExamPage() {
  const s = await requireStaffPage("exams.manage");
  const [cat, topics, st] = await Promise.all([getCatalog(s.user.schoolId), topicOptions(s.user.schoolId), getSettings(s.user.schoolId, ["examination", "academicCalendar", "results"])]);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  return (
    <>
      <PageHeader breadcrumbs={[{ href: "/admin/examinations", label: "Examinations" }, { label: "New" }]} title="New examination" description="Created as a draft. Publish when the pool has enough approved questions." />
      <Card className="p-5 sm:p-6">
        <ExamForm subjects={o(cat.subjects)} classes={o(cat.classes)} departments={o(cat.departments)} topics={topics} years={st.academicCalendar.years} defaults={{ duration: st.examination.defaultDurationMinutes, count: st.examination.defaultQuestionCount, visibility: st.results.defaultVisibility }} />
      </Card>
    </>
  );
}
