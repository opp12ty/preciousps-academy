"use client";

import { FileUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { previewImportAction } from "@/app/admin/actions";
import { ActionForm, Field, SelectField, SubmitButton, TextField } from "../ui/form";
import { SECTION_CHOICES_AUTO } from "@/core/sections";

import { inputClass } from "../ui/primitives";

type Opt = { value: string; label: string };

export function ImportUpload({ subjects, classes, departments, years }: { subjects: Opt[]; classes: Opt[]; departments: Opt[]; years: number[] }) {
  const router = useRouter();
  return (
    <ActionForm action={previewImportAction} onSuccess={(r) => r.ok && router.push(`/admin/imports/${(r.data as { importId: string }).importId}`)} className="space-y-4" encType="multipart/form-data">
      <Field label="File" name="file" required hint="Word (.docx/.doc), Excel (.xlsx/.xls/.csv), PowerPoint (.pptx/.ppt) or PDF. Max size per settings.">
        {(a) => <input {...a} type="file" accept=".doc,.docx,.xls,.xlsx,.csv,.ppt,.pptx,.pdf" className={`${inputClass} file:mr-3 file:rounded-lg file:border-0 file:bg-royal-50 file:px-3 file:py-1.5 file:font-semibold file:text-royal-700`} />}
      </Field>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SelectField label="Subject (for Word/PDF/PPT)" name="subjectId" placeholder="From spreadsheet" options={subjects} />
        <SelectField label="Class" name="classId" placeholder="Any" options={classes} />
        <SelectField label="Department" name="departmentId" placeholder="Any" options={departments} />
        <SelectField label="Section" name="level" required placeholder="Choose section" options={SECTION_CHOICES_AUTO} hint="JSS or SS. Follow the class when every row names its class." />
        <SelectField label="Year" name="year" placeholder="—" options={years.map((y) => ({ value: String(y), label: String(y) }))} />
        <SelectField label="Exam type" name="examType" placeholder="—" options={["PRACTICE", "MOCK", "SCHOOL_EXAM", "CLASS_TEST", "JAMB", "WAEC", "NECO", "BECE"].map((v) => ({ value: v, label: v.replace("_", " ") }))} />
        <SelectField label="Copyright status" name="copyrightStatus" options={[{ value: "ORIGINAL", label: "Original" }, { value: "TEACHER_AUTHORED", label: "Teacher-authored" }, { value: "LICENSED", label: "Licensed" }, { value: "AUTHORIZED", label: "Legally authorised" }]} />
        <TextField label="Source" name="source" placeholder="e.g. SS2 Mathematics — Mrs Bello" />
        <TextField label="Licence details" name="licenseInfo" />
      </div>
      <SubmitButton pendingText="Reading and validating…">
        <FileUp className="size-4" /> Upload & preview
      </SubmitButton>
    </ActionForm>
  );
}
