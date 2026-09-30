import type { Metadata } from "next";
import Link from "next/link";
import { and, eq, sql } from "drizzle-orm";
import { requireStudentPage } from "@/server/http";
import { getDb } from "@/server/db";
import { learningProgress, lessons, topics, subjects } from "@/server/db/schema";
import { listStudentAssignments } from "@/server/services/assignments";
import { AssignmentList } from "@/components/student/assignment-list";
import { Badge, Card, CardHeader, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Classwork" };

export default async function ClassworkPage() {
  const s = await requireStudentPage();
  const db = getDb();
  const [cw, lessonCw] = await Promise.all([
    listStudentAssignments(s.actor, "CLASSWORK"),
    db
      .select({ id: lessons.id, title: lessons.title, topic: topics.title, subject: subjects.name, status: learningProgress.status, best: learningProgress.bestPercentage })
      .from(lessons)
      .innerJoin(topics, eq(topics.id, lessons.topicId))
      .innerJoin(subjects, eq(subjects.id, topics.subjectId))
      .leftJoin(learningProgress, and(eq(learningProgress.lessonId, lessons.id), eq(learningProgress.userId, s.user.id)))
      .where(and(eq(lessons.schoolId, s.user.schoolId), eq(lessons.status, "PUBLISHED"), sql`EXISTS (SELECT 1 FROM lesson_questions lq WHERE lq.lesson_id = ${lessons.id})`))
      .orderBy(subjects.name, topics.sortOrder, lessons.sortOrder),
  ]);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Practise what you learn" title="Classwork" description="Auto-marked classwork attached to lessons, plus classwork set by your teachers." />
      <Card>
        <CardHeader title="Lesson classwork" description="Complete the lesson, then pass the classwork to master it." />
        {lessonCw.length ? (
          <ul className="divide-y divide-line">
            {lessonCw.map((l) => (
              <li key={l.id}>
                <Link href={`/student/study/lesson/${l.id}#cw`} className="flex items-center gap-3 px-5 py-3.5 hover:bg-surface">
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-navy-800">{l.title}</p>
                    <p className="text-xs text-muted">
                      {l.subject} · {l.topic}
                    </p>
                  </div>
                  {l.best !== null && <span className="text-sm font-bold text-navy-800">{l.best}%</span>}
                  <Badge tone={l.status === "COMPLETED" ? "green" : l.status ? "amber" : "blue"}>{l.status === "COMPLETED" ? "Mastered" : l.status ? "In progress" : "Not started"}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState title="No lesson classwork yet" />
        )}
      </Card>
      <div>
        <h2 className="mb-3 text-base font-bold text-navy-800">Teacher-set classwork</h2>
        <AssignmentList rows={cw} empty="No classwork has been set for your class yet." />
      </div>
    </div>
  );
}
