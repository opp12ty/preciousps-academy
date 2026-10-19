import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { listStudentExams } from "@/server/services/exams";
import { ExamBrowser } from "@/components/student/exam-browser";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "JAMB Questions" };

export default async function JambPage() {
  const s = await requireStudentPage();
  const [exams, access] = await Promise.all([listStudentExams(s.actor, { jambOnly: true }), getAccessState(s.user.id)]);
  return (
    <>
      <PageHeader eyebrow="JAMB (UTME)" title="JAMB questions" description="UTME-style tests of up to 50 questions in each subject, drawn at random every time. Choose a subject, sit the test against the clock and see your score at once." />
      <ExamBrowser exams={exams} hasAccess={access.status === "ACTIVE"} empty="JAMB tests are for senior secondary students and appear here as each subject is published." />
    </>
  );
}
