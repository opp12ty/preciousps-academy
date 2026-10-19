import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { listStudentExams } from "@/server/services/exams";
import { ExamBrowser } from "@/components/student/exam-browser";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Mock CBT" };

export default async function MockPage() {
  const s = await requireStudentPage();
  const [exams, access] = await Promise.all([listStudentExams(s.actor, { types: ["MOCK", "JAMB", "WAEC", "NECO", "BECE", "SCHOOL_EXAM", "COMMON_ENTRANCE", "JUPEB", "IJMB", "PreciousPS_EXAM"] }), getAccessState(s.user.id)]);
  return (
    <>
      <PageHeader eyebrow="Exam preparation" title="Mock CBT" description="Full-length mock papers for school examinations, JAMB, WAEC and NECO preparation." />
      <ExamBrowser exams={exams} hasAccess={access.status === "ACTIVE"} empty="Mock examinations will appear here when the examination office publishes them." />
    </>
  );
}
