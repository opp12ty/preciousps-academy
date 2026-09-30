import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { listStudentExams } from "@/server/services/exams";
import { ExamGrid } from "@/components/student/exam-list";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Examinations" };

export default async function ExamsPage() {
  const s = await requireStudentPage();
  const [exams, access] = await Promise.all([listStudentExams(s.actor), getAccessState(s.user.id)]);
  return (
    <>
      <PageHeader eyebrow="CBT" title="Examinations" description="All examinations available to your class and department. The timer is controlled by the server and starts when you begin." />
      <ExamGrid exams={exams} hasAccess={access.status === "ACTIVE"} empty="No examinations have been published for your class yet." />
    </>
  );
}
