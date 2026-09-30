import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { listStudentExams } from "@/server/services/exams";
import { ExamGrid } from "@/components/student/exam-list";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Practice" };

export default async function PracticePage() {
  const s = await requireStudentPage();
  const [exams, access] = await Promise.all([listStudentExams(s.actor, { types: ["PRACTICE", "CLASS_TEST", "CONTINUOUS_ASSESSMENT", "CUSTOM"] }), getAccessState(s.user.id)]);
  return (
    <>
      <PageHeader eyebrow="Practise" title="Practice tests" description="Short, timed tests to build speed and accuracy. Every attempt draws a fresh set of questions." />
      <ExamGrid exams={exams} hasAccess={access.status === "ACTIVE"} empty="Practice tests will appear here." />
    </>
  );
}
