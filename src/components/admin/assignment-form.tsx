"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveAssignmentAction } from "@/app/admin/actions";
import { ActionForm, CheckboxField, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { SECTION_CHOICES, sectionFormValue } from "@/core/sections";

import { QuestionPicker } from "./question-picker";
import { toLagosLocal } from "./exam-form";

type Opt = { value: string; label: string };
export interface AssignmentData {
  id?: string;
  title: string;
  instructions: string | null;
  subjectId: string;
  classId: string | null;
  departmentId: string | null;
  level?: string | null;
  topicId: string | null;
  lessonId: string | null;
  kind: string;
  startsAt: string | null;
  dueAt: string | null;
  attemptLimit: number;
  passMark: number;
  showResult: boolean;
  showExplanations: boolean;
  status: string;
}

export function AssignmentForm({ data, subjects, classes, departments, topics, questions, selected, defaultKind = "ASSIGNMENT" }: { data?: AssignmentData; subjects: Opt[]; classes: Opt[]; departments: Opt[]; topics: { id: string; title: string; subjectId: string }[]; questions: { id: string; ref: string; stem: string; topic: string | null; subjectId?: string }[]; selected?: string[]; defaultKind?: string }) {
  const router = useRouter();
  const [subjectId, setSubjectId] = useState(data?.subjectId ?? "");
  return (
    <ActionForm
      action={saveAssignmentAction.bind(null, data?.id ?? null)}
      onSuccess={(r) => {
        const id = (r as { data?: { id: string } }).data?.id;
        if (!data?.id && id) router.push(`/admin/assignments/${id}`);
      }}
      className="space-y-5"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <TextField className="sm:col-span-2" label="Title" name="title" required defaultValue={data?.title} />
        <SelectField label="Type" name="kind" defaultValue={data?.kind ?? defaultKind} options={[{ value: "ASSIGNMENT", label: "Assignment (homework)" }, { value: "CLASSWORK", label: "Classwork" }]} />
        <SelectField label="Subject" name="subjectId" required placeholder="Select" options={subjects} value={subjectId} onChange={(e) => setSubjectId(e.target.value)} />
        <SelectField label="Topic" name="topicId" placeholder="—" options={topics.filter((t) => t.subjectId === subjectId).map((t) => ({ value: t.id, label: t.title }))} defaultValue={data?.topicId ?? ""} key={subjectId} />
        <SelectField label="Class" name="classId" placeholder="All classes" options={classes} defaultValue={data?.classId ?? ""} />
        <SelectField label="Department" name="departmentId" placeholder="All departments" options={departments} defaultValue={data?.departmentId ?? ""} />
        <SelectField label="Section" name="level" required placeholder="Choose section" options={SECTION_CHOICES} defaultValue={data ? sectionFormValue(data.level) : ""} hint="If you pick a class, that class's section is used." />
        <TextField label="Opens (WAT)" name="startsAt" type="datetime-local" defaultValue={toLagosLocal(data?.startsAt ?? null)} />
        <TextField label="Due (WAT)" name="dueAt" type="datetime-local" defaultValue={toLagosLocal(data?.dueAt ?? null)} />
        <TextField label="Attempt limit" name="attemptLimit" type="number" min={1} max={20} defaultValue={String(data?.attemptLimit ?? 1)} />
        <TextField label="Pass mark (%)" name="passMark" type="number" min={0} max={100} defaultValue={String(data?.passMark ?? 50)} />
        <SelectField label="Status" name="status" defaultValue={data?.status ?? "DRAFT"} options={[{ value: "DRAFT", label: "Draft" }, { value: "PUBLISHED", label: "Published (notifies students)" }, { value: "ARCHIVED", label: "Archived" }]} />
        <TextAreaField className="sm:col-span-2 lg:col-span-3" label="Instructions" name="instructions" rows={3} defaultValue={data?.instructions ?? ""} />
        <CheckboxField name="showResult" label="Show score & feedback after submission" defaultChecked={data?.showResult ?? true} />
        <CheckboxField name="showExplanations" label="Show explanations" defaultChecked={data?.showExplanations ?? true} />
      </div>
      <div>
        <p className="mb-1.5 text-sm font-semibold text-navy-800">Questions (auto-marked, from the approved bank)</p>
        <QuestionPicker key={subjectId} options={questions.filter((q) => !subjectId || !q.subjectId || q.subjectId === subjectId)} initial={selected} />
        <p className="mt-1 text-xs text-muted">Essay, file-upload and rubric-based manual grading are prepared in the data model for a future release.</p>
      </div>
      <SubmitButton>{data?.id ? "Save" : "Create"}</SubmitButton>
    </ActionForm>
  );
}
