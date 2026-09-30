import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { approvedQuestionOptions, lessonOptions, topicOptions } from "@/server/services/pickers";
import { LessonForm } from "@/components/admin/lesson-form";
import { Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "New lesson" };

export default async function NewLessonPage({ searchParams }: PageProps<"/admin/lessons/new">) {
  const s = await requireStaffPage("curriculum.manage");
  const { topicId } = (await searchParams) as { topicId?: string };
  const topics = await topicOptions(s.user.schoolId);
  const subjectId = topics.find((t) => t.id === topicId)?.subjectId;
  const [lessons, questions] = await Promise.all([lessonOptions(s.user.schoolId), approvedQuestionOptions(s.user.schoolId, { subjectId })]);
  return (
    <>
      <PageHeader breadcrumbs={[{ href: "/admin/lessons", label: "Lessons" }, { label: "New" }]} title="New lesson" description="Save as draft, preview, then publish when ready." />
      <Card className="p-5 sm:p-6">
        <LessonForm topics={topics} lessons={lessons} questions={questions} defaultTopicId={topicId} />
      </Card>
    </>
  );
}
