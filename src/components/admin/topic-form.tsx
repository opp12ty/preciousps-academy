import { upsertTopicAction } from "@/app/admin/actions";
import { ActionForm, CheckboxField, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { SECTION_CHOICES, sectionFormValue } from "@/core/sections";


type Opt = { value: string; label: string };
export interface TopicRow {
  id: string;
  subjectId: string;
  classId: string | null;
  termId: string | null;
  departmentId: string | null;
  level?: string | null;
  title: string;
  description: string | null;
  syllabusRef: string | null;
  sortOrder: number;
  isMandatory: boolean;
  prerequisiteTopicId: string | null;
  status: string;
}

export function TopicForm({ topic, subjects, classes, terms, departments, topics, defaultSubjectId }: { topic?: TopicRow; subjects: Opt[]; classes: Opt[]; terms: Opt[]; departments: Opt[]; topics: Opt[]; defaultSubjectId?: string }) {
  return (
    <ActionForm action={upsertTopicAction.bind(null, topic?.id ?? null)} resetOnSuccess={!topic} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" successMessage="Topic saved.">
      <SelectField label="Subject" name="subjectId" required options={subjects} defaultValue={topic?.subjectId ?? defaultSubjectId ?? ""} placeholder="Select subject" />
      <TextField label="Topic title" name="title" required defaultValue={topic?.title} className="lg:col-span-2" />
      <SelectField label="Class" name="classId" options={classes} placeholder="All classes" defaultValue={topic?.classId ?? ""} />
      <SelectField label="Term" name="termId" options={terms} placeholder="Any term" defaultValue={topic?.termId ?? ""} />
      <SelectField label="Department" name="departmentId" options={departments} placeholder="All departments" defaultValue={topic?.departmentId ?? ""} />
      <SelectField label="Section" name="level" required placeholder="Choose section" options={SECTION_CHOICES} defaultValue={topic ? sectionFormValue(topic.level) : ""} hint="If you pick a class, that class's section is used." />
      <SelectField label="Prerequisite topic" name="prerequisiteTopicId" options={topics.filter((t) => t.value !== topic?.id)} placeholder="None" defaultValue={topic?.prerequisiteTopicId ?? ""} />
      <TextField label="Syllabus reference" name="syllabusRef" defaultValue={topic?.syllabusRef ?? ""} />
      <TextField label="Order" name="sortOrder" type="number" defaultValue={String(topic?.sortOrder ?? 0)} />
      <SelectField label="Status" name="status" defaultValue={topic?.status ?? "PUBLISHED"} options={[{ value: "PUBLISHED", label: "Published" }, { value: "DRAFT", label: "Draft (hidden)" }, { value: "ARCHIVED", label: "Archived" }]} />
      <TextAreaField label="Description" name="description" defaultValue={topic?.description ?? ""} rows={2} className="sm:col-span-2" />
      <div className="flex items-end">
        <CheckboxField name="isMandatory" label="Mandatory topic" defaultChecked={topic?.isMandatory ?? true} />
      </div>
      <div className="sm:col-span-2 lg:col-span-3">
        <SubmitButton size="sm">{topic ? "Save topic" : "Add topic"}</SubmitButton>
      </div>
    </ActionForm>
  );
}
