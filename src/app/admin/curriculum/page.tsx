import type { Metadata } from "next";
import Link from "next/link";
import { Pencil, X } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getCatalog, listTopics } from "@/server/services/curriculum";
import { deleteSubtopicAction, upsertSubtopicAction } from "../actions";
import { TopicForm } from "@/components/admin/topic-form";
import { FilterBar, spRecord } from "@/components/admin/filters";
import { ActionForm, SubmitButton, TextField } from "@/components/ui/form";
import { ActionButton } from "@/components/ui/interactive";
import { Badge, buttonClass, Card, CardHeader, EmptyState, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Curriculum" };

export default async function CurriculumPage({ searchParams }: PageProps<"/admin/curriculum">) {
  const s = await requireStaffPage("curriculum.manage");
  const sp = spRecord(await searchParams);
  const [cat, topics] = await Promise.all([getCatalog(s.user.schoolId), listTopics(s.user.schoolId, { subjectId: sp.subjectId, classId: sp.classId, includeDrafts: true })]);
  const opt = <T extends { id: string; name: string }>(xs: T[]) => xs.map((x) => ({ value: x.id, label: x.name }));
  const topicOpts = topics.map((t) => ({ value: t.t.id, label: `${t.subject} — ${t.t.title}` }));
  const common = { subjects: opt(cat.subjects), classes: opt(cat.classes), terms: opt(cat.terms), departments: opt(cat.departments), topics: topicOpts };
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Academics"
        title="Curriculum"
        description="Department → Class → Term → Subject → Topic → Subtopic → Lesson → Classwork → Assessment. Define order, prerequisites and mandatory topics."
        actions={<Link href="/admin/lessons/new" className={buttonClass("primary")}>New lesson</Link>}
      />
      <Card>
        <CardHeader title="Add a topic" />
        <div className="p-5">
          <TopicForm {...common} defaultSubjectId={sp.subjectId} />
        </div>
      </Card>
      <FilterBar
        action="/admin/curriculum"
        values={sp}
        filters={[
          { type: "select", name: "subjectId", label: "Subject", options: common.subjects },
          { type: "select", name: "classId", label: "Class", options: common.classes },
        ]}
      />
      {topics.length === 0 ? (
        <Card><EmptyState title="No topics yet" description="Add the first topic above." /></Card>
      ) : (
        <div className="space-y-3">
          {topics.map(({ t, subject, className, term, lessonCount, questionCount, subtopics }) => (
            <Card key={t.id} className="p-5">
              <div className="flex flex-wrap items-start gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-gold-600">
                    {subject} · {className ?? "All classes"} · {term ?? "Any term"} · order {t.sortOrder}
                  </p>
                  <p className="text-base font-bold text-navy-800">{t.title}</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    <StatusBadge status={t.status} />
                    <Badge tone={t.isMandatory ? "navy" : "neutral"}>{t.isMandatory ? "Mandatory" : "Optional"}</Badge>
                    {t.prerequisiteTopicId && <Badge tone="amber">Has prerequisite</Badge>}
                    <Badge tone="blue">{lessonCount} lessons</Badge>
                    <Badge tone="green">{questionCount} approved questions</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/lessons/new?topicId=${t.id}`} className={buttonClass("secondary", "sm")}>Add lesson</Link>
                  <details className="relative">
                    <summary className={buttonClass("secondary", "sm", "list-none cursor-pointer")}><Pencil className="size-4" /> Edit</summary>
                    <div className="absolute right-0 z-20 mt-2 w-[min(52rem,92vw)] rounded-2xl border border-line bg-white p-4 shadow-lift">
                      <TopicForm {...common} topic={t} />
                    </div>
                  </details>
                </div>
              </div>
              <div className="mt-4 border-t border-line pt-3">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Subtopics</p>
                <div className="flex flex-wrap items-center gap-2">
                  {subtopics.map((st) => (
                    <span key={st.id} className="inline-flex items-center gap-1 rounded-full bg-surface py-1 pl-3 pr-1 text-xs font-semibold text-navy-800 ring-1 ring-line">
                      {st.title}
                      <ActionButton run={deleteSubtopicAction.bind(null, st.id)} variant="ghost" className="!h-6 !px-1.5">
                        <X className="size-3.5" aria-label={`Remove ${st.title}`} />
                      </ActionButton>
                    </span>
                  ))}
                  <ActionForm action={upsertSubtopicAction.bind(null, t.id)} resetOnSuccess className="flex items-end gap-2" successMessage="Subtopic added.">
                    <TextField label={<span className="sr-only">New subtopic</span>} name="title" placeholder="New subtopic" className="w-48" />
                    <SubmitButton size="sm" variant="secondary">Add</SubmitButton>
                  </ActionForm>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
