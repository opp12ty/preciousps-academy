"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { saveExamAction } from "@/app/admin/actions";
import { ActionForm, CheckboxField, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { SECTION_CHOICES, sectionFormValue } from "@/core/sections";


type Opt = { value: string; label: string };
export interface ExamData {
  id?: string;
  title: string;
  description: string | null;
  subjectId: string;
  classId: string | null;
  departmentId: string | null;
  level?: string | null;
  year: number | null;
  examType: string;
  questionCount: number;
  durationMinutes: number;
  totalMarks: number | null;
  passMark: number;
  randomizeQuestions: boolean;
  randomizeOptions: boolean;
  negativeMarking: number;
  startsAt: string | null;
  endsAt: string | null;
  maxAttempts: number;
  requiresAccess: boolean;
  resultVisibility: string;
  showExplanations: boolean;
  poolFilter: { years?: number[]; topicIds?: string[]; difficulties?: string[]; matchClass?: boolean } | null;
}

/** ISO → value for <input type="datetime-local"> in Africa/Lagos. */
export function toLagosLocal(iso: string | null) {
  if (!iso) return "";
  const d = new Date(new Date(iso).getTime() + 60 * 60_000);
  return d.toISOString().slice(0, 16);
}

export function ExamForm({ exam, subjects, classes, departments, topics, years, defaults }: { exam?: ExamData; subjects: Opt[]; classes: Opt[]; departments: Opt[]; topics: { id: string; title: string; subjectId: string }[]; years: number[]; defaults: { duration: number; count: number; visibility: string } }) {
  const router = useRouter();
  const [subjectId, setSubjectId] = useState(exam?.subjectId ?? "");
  const tps = useMemo(() => topics.filter((t) => t.subjectId === subjectId), [topics, subjectId]);
  const pf = exam?.poolFilter ?? {};
  return (
    <ActionForm
      action={saveExamAction.bind(null, exam?.id ?? null)}
      onSuccess={(r) => {
        const id = (r as { data?: { id: string } }).data?.id;
        if (!exam?.id && id) router.push(`/admin/examinations/${id}`);
      }}
      className="space-y-6"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <TextField className="sm:col-span-2" label="Title" name="title" required defaultValue={exam?.title} placeholder="e.g. 2025 Mathematics Examination" />
        <SelectField label="Examination type" name="examType" defaultValue={exam?.examType ?? "MOCK"} options={["PRACTICE", "MOCK", "SCHOOL_EXAM", "CLASS_TEST", "CONTINUOUS_ASSESSMENT", "JAMB", "WAEC", "NECO", "BECE", "CUSTOM"].map((v) => ({ value: v, label: v.replace(/_/g, " ") }))} />
        <SelectField label="Subject" name="subjectId" required placeholder="Select" options={subjects} value={subjectId} onChange={(e) => setSubjectId(e.target.value)} />
        <SelectField label="Class" name="classId" placeholder="All classes" options={classes} defaultValue={exam?.classId ?? ""} />
        <SelectField label="Department" name="departmentId" placeholder="All departments" options={departments} defaultValue={exam?.departmentId ?? ""} />
        <SelectField label="Section" name="level" required placeholder="Choose section" options={SECTION_CHOICES} defaultValue={exam ? sectionFormValue(exam.level) : ""} hint="If you pick a class, that class's section is used." />
        <SelectField label="Year" name="year" placeholder="—" options={years.map((y) => ({ value: String(y), label: String(y) }))} defaultValue={exam?.year?.toString() ?? ""} />
        <TextAreaField className="sm:col-span-2" label="Description / instructions" name="description" rows={2} defaultValue={exam?.description ?? ""} />
      </div>
      <fieldset className="grid gap-4 rounded-2xl border border-line p-4 sm:grid-cols-2 lg:grid-cols-4">
        <legend className="px-1 text-sm font-bold text-navy-800">Scoring & timing</legend>
        <TextField label="Number of questions" name="questionCount" type="number" min={1} max={500} required defaultValue={String(exam?.questionCount ?? defaults.count)} />
        <TextField label="Duration (minutes)" name="durationMinutes" type="number" min={1} max={600} required defaultValue={String(exam?.durationMinutes ?? defaults.duration)} />
        <TextField label="Total marks (optional scaling)" name="totalMarks" type="number" min={1} defaultValue={exam?.totalMarks?.toString() ?? ""} hint="e.g. 40 questions scored out of 100" />
        <TextField label="Pass mark (%)" name="passMark" type="number" min={0} max={100} defaultValue={String(exam?.passMark ?? 50)} />
        <TextField label="Negative marking (fraction per wrong answer)" name="negativeMarking" type="number" step="0.05" min={0} max={1} defaultValue={String(exam?.negativeMarking ?? 0)} hint="0 = off; 0.25 = −¼ mark" />
        <TextField label="Maximum attempts" name="maxAttempts" type="number" min={1} max={100} defaultValue={String(exam?.maxAttempts ?? 1)} />
        <TextField label="Opens (WAT)" name="startsAt" type="datetime-local" defaultValue={toLagosLocal(exam?.startsAt ?? null)} />
        <TextField label="Closes (WAT)" name="endsAt" type="datetime-local" defaultValue={toLagosLocal(exam?.endsAt ?? null)} />
      </fieldset>
      <fieldset className="grid gap-3 rounded-2xl border border-line p-4 sm:grid-cols-2 lg:grid-cols-3">
        <legend className="px-1 text-sm font-bold text-navy-800">Randomisation, access & results</legend>
        <CheckboxField name="randomizeQuestions" label="Randomise question selection & order" defaultChecked={exam?.randomizeQuestions ?? true} />
        <CheckboxField name="randomizeOptions" label="Randomise option order" defaultChecked={exam?.randomizeOptions ?? true} hint="Answer keys stay correct automatically." />
        <CheckboxField name="requiresAccess" label="Requires an active access code" defaultChecked={exam?.requiresAccess ?? true} />
        <CheckboxField name="showExplanations" label="Show explanations in review" defaultChecked={exam?.showExplanations ?? true} />
        <SelectField label="Result visibility" name="resultVisibility" defaultValue={exam?.resultVisibility ?? defaults.visibility} options={[{ value: "IMMEDIATE", label: "Immediately after submission" }, { value: "AFTER_RELEASE", label: "After release by the school" }, { value: "HIDDEN", label: "Hidden from students" }]} />
      </fieldset>
      <fieldset className="space-y-3 rounded-2xl border border-line p-4">
        <legend className="px-1 text-sm font-bold text-navy-800">Question pool (optional filters)</legend>
        <p className="text-xs text-muted">By default the pool is every APPROVED question of the subject. Narrow it by year, topic or difficulty.</p>
        <div className="flex flex-wrap gap-2">
          {years.map((y) => (
            <label key={y} className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-sm">
              <input type="checkbox" name="poolYears" value={y} defaultChecked={pf.years?.includes(y)} className="size-4 accent-royal-600" /> {y}
            </label>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["EASY", "MEDIUM", "HARD"].map((d) => (
            <label key={d} className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-sm">
              <input type="checkbox" name="poolDifficulties" value={d} defaultChecked={pf.difficulties?.includes(d)} className="size-4 accent-royal-600" /> {d.toLowerCase()}
            </label>
          ))}
          <label className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-sm">
            <input type="checkbox" name="poolMatchClass" defaultChecked={pf.matchClass} className="size-4 accent-royal-600" /> Only questions for the selected class
          </label>
        </div>
        {tps.length > 0 && (
          <div className="flex max-h-40 flex-wrap gap-2 overflow-y-auto">
            {tps.map((t) => (
              <label key={t.id} className="flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-sm">
                <input type="checkbox" name="poolTopicIds" value={t.id} defaultChecked={pf.topicIds?.includes(t.id)} className="size-4 accent-royal-600" /> {t.title}
              </label>
            ))}
          </div>
        )}
      </fieldset>
      <SubmitButton>{exam?.id ? "Save changes (new version)" : "Create examination"}</SubmitButton>
    </ActionForm>
  );
}
