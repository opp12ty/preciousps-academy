"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { upsertLessonAction } from "@/app/admin/actions";
import { renderBlocksPreview } from "./preview";
import { ActionForm, CheckboxField, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { buttonClass, cx } from "../ui/primitives";
import { QuestionPicker } from "./question-picker";

interface Lesson {
  id: string;
  topicId: string;
  subtopicId: string | null;
  title: string;
  summary: string | null;
  body: string;
  examples: string | null;
  videoUrl: string | null;
  audioUrl: string | null;
  estimatedMinutes: number;
  sortOrder: number;
  isMandatory: boolean;
  prerequisiteLessonId: string | null;
  masteryThreshold: number | null;
  isLocked: boolean;
  status: string;
}

export function LessonForm({
  lesson,
  topics,
  lessons,
  questions,
  selectedQuestionIds,
  defaultTopicId,
}: {
  lesson?: Lesson;
  topics: { id: string; title: string; subject: string }[];
  lessons: { id: string; title: string }[];
  questions: { id: string; ref: string; stem: string; topic: string | null }[];
  selectedQuestionIds?: string[];
  defaultTopicId?: string;
}) {
  const router = useRouter();
  const [body, setBody] = useState(lesson?.body ?? "");
  const [tab, setTab] = useState<"write" | "preview">("write");
  return (
    <ActionForm
      action={upsertLessonAction.bind(null, lesson?.id ?? null)}
      onSuccess={(r) => {
        const id = (r as { data?: { id: string } }).data?.id;
        if (!lesson && id) router.push(`/admin/lessons/${id}`);
      }}
      className="space-y-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="Topic" name="topicId" required placeholder="Select topic" defaultValue={lesson?.topicId ?? defaultTopicId ?? ""} options={topics.map((t) => ({ value: t.id, label: `${t.subject} — ${t.title}` }))} />
        <TextField label="Lesson title" name="title" required defaultValue={lesson?.title} />
        <TextAreaField className="sm:col-span-2" label="Summary" name="summary" rows={2} defaultValue={lesson?.summary ?? ""} />
      </div>
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-sm font-semibold text-navy-800">Lesson notes</span>
          <div className="flex rounded-lg bg-surface p-0.5 text-xs font-semibold">
            {(["write", "preview"] as const).map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} className={cx("rounded-md px-3 py-1", tab === t ? "bg-white text-navy-800 shadow-sm" : "text-muted")}>
                {t === "write" ? "Write" : "Preview"}
              </button>
            ))}
          </div>
        </div>
        <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)} rows={16} className={cx("block w-full rounded-xl border border-line px-3.5 py-2.5 font-mono text-sm", tab === "preview" && "hidden")} placeholder={"## Heading\nText with $x^2$ maths and **bold**.\n- bullet"} />
        {tab === "preview" && <div className="prose-pps min-h-40 rounded-xl border border-line bg-white p-4" dangerouslySetInnerHTML={{ __html: renderBlocksPreview(body) }} />}
        <p className="mt-1 text-xs text-muted">Markdown-style: ## headings, - lists, **bold**, *italic*, $inline maths$, $$display maths$$ (KaTeX).</p>
      </div>
      <TextAreaField label="Worked examples" name="examples" rows={6} defaultValue={lesson?.examples ?? ""} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <TextField label="Video URL (YouTube or https link)" name="videoUrl" type="url" defaultValue={lesson?.videoUrl ?? ""} />
        <TextField label="Audio URL" name="audioUrl" type="url" defaultValue={lesson?.audioUrl ?? ""} />
        <TextField label="Estimated minutes" name="estimatedMinutes" type="number" defaultValue={String(lesson?.estimatedMinutes ?? 20)} />
        <SelectField label="Prerequisite lesson" name="prerequisiteLessonId" placeholder="None" defaultValue={lesson?.prerequisiteLessonId ?? ""} options={lessons.filter((l) => l.id !== lesson?.id).map((l) => ({ value: l.id, label: l.title }))} />
        <TextField label="Mastery threshold % (blank = default)" name="masteryThreshold" type="number" min={1} max={100} defaultValue={lesson?.masteryThreshold?.toString() ?? ""} />
        <TextField label="Order" name="sortOrder" type="number" defaultValue={String(lesson?.sortOrder ?? 0)} />
        <SelectField label="Status" name="status" defaultValue={lesson?.status ?? "DRAFT"} options={[{ value: "DRAFT", label: "Draft" }, { value: "PUBLISHED", label: "Published" }, { value: "ARCHIVED", label: "Archived" }]} />
        <CheckboxField name="isMandatory" label="Mandatory lesson" defaultChecked={lesson?.isMandatory ?? true} />
        <CheckboxField name="isLocked" label="Lock lesson (students cannot open it)" defaultChecked={lesson?.isLocked ?? false} />
      </div>
      <div>
        <p className="mb-1.5 text-sm font-semibold text-navy-800">Classwork questions (auto-marked)</p>
        <QuestionPicker options={questions} initial={selectedQuestionIds} max={50} />
      </div>
      <div className="flex gap-2">
        <SubmitButton>{lesson ? "Save lesson" : "Create lesson"}</SubmitButton>
        <button type="button" className={buttonClass("ghost")} onClick={() => router.back()}>
          Cancel
        </button>
      </div>
    </ActionForm>
  );
}
