import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, Trash2 } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getLessonAdmin } from "@/server/services/curriculum";
import { approvedQuestionOptions, lessonOptions, topicOptions } from "@/server/services/pickers";
import { toPublicError } from "@/server/errors";
import { addLessonResourceAction, removeLessonResourceAction } from "../../actions";
import { LessonForm } from "@/components/admin/lesson-form";
import { ActionForm, SelectField, SubmitButton, TextField } from "@/components/ui/form";
import { ActionButton } from "@/components/ui/interactive";
import { Badge, Card, CardHeader, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Edit lesson" };

export default async function EditLessonPage({ params }: PageProps<"/admin/lessons/[id]">) {
  const s = await requireStaffPage("curriculum.manage");
  const { id } = await params;
  let l;
  try {
    l = await getLessonAdmin(s.user.schoolId, id);
  } catch (e) {
    if (toPublicError(e).code === "NOT_FOUND") notFound();
    throw e;
  }
  const topics = await topicOptions(s.user.schoolId);
  const subjectId = topics.find((t) => t.id === l.topicId)?.subjectId;
  const [lessons, questions] = await Promise.all([lessonOptions(s.user.schoolId), approvedQuestionOptions(s.user.schoolId, { subjectId })]);
  return (
    <div className="space-y-6">
      <PageHeader breadcrumbs={[{ href: "/admin/lessons", label: "Lessons" }, { label: l.title }]} title={l.title} actions={<><StatusBadge status={l.status} /><Badge>v{l.version}</Badge></>} />
      <Card className="p-5 sm:p-6">
        <LessonForm lesson={l} topics={topics} lessons={lessons} questions={questions} selectedQuestionIds={l.questions.map((q) => q.id)} />
      </Card>
      <Card>
        <CardHeader title="Study materials" description="Videos, audio, documents and external links attached to this lesson." />
        <ul className="divide-y divide-line">
          {l.resources.map((r) => (
            <li key={r.id} className="flex items-center gap-3 px-5 py-3 text-sm">
              <Badge tone="blue">{r.kind.toLowerCase()}</Badge>
              <a href={r.url ?? `/api/v1/assets/${r.assetId}`} target="_blank" rel="noopener noreferrer" className="flex-1 truncate font-semibold text-navy-800 hover:text-royal-600">
                {r.title} <ExternalLink className="inline size-3.5" />
              </a>
              <ActionButton run={removeLessonResourceAction.bind(null, r.id)} variant="ghost"><Trash2 className="size-4" aria-label="Remove" /></ActionButton>
            </li>
          ))}
          {!l.resources.length && <li className="px-5 py-3 text-sm text-muted">No materials yet.</li>}
        </ul>
        <div className="border-t border-line p-5">
          <ActionForm action={addLessonResourceAction.bind(null, l.id)} resetOnSuccess className="grid gap-3 sm:grid-cols-[1fr_10rem_1.4fr_auto] sm:items-end">
            <TextField label="Title" name="title" required />
            <SelectField label="Type" name="kind" options={["VIDEO", "AUDIO", "DOCUMENT", "WEBSITE", "LIBRARY", "PRESENTATION", "OTHER"].map((v) => ({ value: v, label: v.toLowerCase() }))} />
            <TextField label="Secure link (https://)" name="url" type="url" />
            <SubmitButton size="md">Add</SubmitButton>
          </ActionForm>
        </div>
      </Card>
    </div>
  );
}
