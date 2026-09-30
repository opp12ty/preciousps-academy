import { saveResourceAction } from "@/app/admin/actions";
import { ActionForm, CheckboxField, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { SECTION_CHOICES, sectionFormValue } from "@/core/sections";


type Opt = { value: string; label: string };
export interface ResourceData {
  id: string;
  title: string;
  description: string | null;
  subjectId: string | null;
  departmentId: string | null;
  level?: string | null;
  classId: string | null;
  topicId: string | null;
  resourceType: string;
  url: string | null;
  assetId: string | null;
  thumbnailUrl: string | null;
  platform: string | null;
  durationMinutes: number | null;
  isRecommended: boolean;
  status: string;
}

export function ResourceForm({ r, subjects, classes, departments }: { r?: ResourceData; subjects: Opt[]; classes: Opt[]; departments: Opt[] }) {
  return (
    <ActionForm action={saveResourceAction.bind(null, r?.id ?? null)} resetOnSuccess={!r} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" successMessage="Resource saved.">
      <TextField className="lg:col-span-2" label="Title" name="title" required defaultValue={r?.title} />
      <SelectField label="Type" name="resourceType" defaultValue={r?.resourceType ?? "VIDEO"} options={["VIDEO", "AUDIO", "DOCUMENT", "WEBSITE", "LIBRARY", "PRESENTATION", "OTHER"].map((v) => ({ value: v, label: v.toLowerCase() }))} />
      <TextField className="lg:col-span-2" label="Secure URL (https://)" name="url" type="url" defaultValue={r?.url ?? ""} hint="YouTube, Facebook, Google Drive, online libraries, educational websites…" />
      <TextField label="Platform (auto-detected)" name="platform" defaultValue={r?.platform ?? ""} />
      <SelectField label="Subject" name="subjectId" placeholder="Any" options={subjects} defaultValue={r?.subjectId ?? ""} />
      <SelectField label="Class" name="classId" placeholder="All" options={classes} defaultValue={r?.classId ?? ""} />
      <SelectField label="Department" name="departmentId" placeholder="All" options={departments} defaultValue={r?.departmentId ?? ""} />
      <SelectField label="Section" name="level" required placeholder="Choose section" options={SECTION_CHOICES} defaultValue={r ? sectionFormValue(r.level) : ""} hint="If you pick a class, that class's section is used." />
      <TextField label="Thumbnail URL" name="thumbnailUrl" type="url" defaultValue={r?.thumbnailUrl ?? ""} />
      <TextField label="Duration (minutes)" name="durationMinutes" type="number" defaultValue={r?.durationMinutes?.toString() ?? ""} />
      <SelectField label="Status" name="status" defaultValue={r?.status ?? "PUBLISHED"} options={[{ value: "PUBLISHED", label: "Published" }, { value: "DRAFT", label: "Draft" }, { value: "ARCHIVED", label: "Archived" }]} />
      <TextAreaField className="sm:col-span-2" label="Description" name="description" rows={2} defaultValue={r?.description ?? ""} />
      <div className="flex items-end"><CheckboxField name="isRecommended" label="Recommended" defaultChecked={r?.isRecommended} /></div>
      <input type="hidden" name="assetId" value={r?.assetId ?? ""} />
      <div className="sm:col-span-2 lg:col-span-3"><SubmitButton size="sm">{r ? "Save" : "Add resource"}</SubmitButton></div>
    </ActionForm>
  );
}
