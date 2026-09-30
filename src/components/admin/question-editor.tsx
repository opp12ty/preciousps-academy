"use client";

/* eslint-disable @next/next/no-img-element */
import { Loader2, Plus, Trash2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { saveQuestionAction } from "@/app/admin/actions";
import { renderBlocksPreview, renderInlinePreview } from "./preview";
import { ActionForm, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { SECTION_CHOICES_AUTO, sectionFormValue } from "@/core/sections";

import { buttonClass, cx, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

type Opt = { value: string; label: string };
export interface QuestionData {
  id?: string;
  subjectId: string;
  classId: string | null;
  departmentId: string | null;
  level?: string | null;
  topicId: string | null;
  subtopicId: string | null;
  year: number | null;
  examType: string | null;
  difficulty: string;
  type: string;
  stem: string;
  imageAssetId: string | null;
  explanation: string | null;
  marks: number;
  options: { text: string; isCorrect: boolean; matchText: string | null }[];
  answerSpec: { value?: number; tolerance?: number; accepted?: string[] } | null;
  source: string | null;
  copyrightStatus: string;
  licenseInfo: string | null;
  status: string;
}

const TYPES: Opt[] = [
  { value: "MCQ", label: "Multiple choice (one answer)" },
  { value: "TRUE_FALSE", label: "True / False" },
  { value: "MULTI_SELECT", label: "Multiple response" },
  { value: "NUMERIC", label: "Numerical answer" },
  { value: "FILL_BLANK", label: "Fill in the blank" },
  { value: "MATCHING", label: "Matching" },
];

export function QuestionEditor({ initial, subjects, classes, departments, topics, years, canApprove }: { initial?: QuestionData; subjects: Opt[]; classes: Opt[]; departments: Opt[]; topics: { id: string; title: string; subjectId: string }[]; years: number[]; canApprove: boolean }) {
  const router = useRouter();
  const toast = useToast();
  const [type, setType] = useState(initial?.type ?? "MCQ");
  const [subjectId, setSubjectId] = useState(initial?.subjectId ?? "");
  const [stem, setStem] = useState(initial?.stem ?? "");
  const [image, setImage] = useState<string | null>(initial?.imageAssetId ?? null);
  const [uploading, setUploading] = useState(false);
  const [options, setOptions] = useState(
    initial?.options.length
      ? initial.options
      : type === "TRUE_FALSE"
        ? [{ text: "True", isCorrect: false, matchText: null }, { text: "False", isCorrect: false, matchText: null }]
        : Array.from({ length: 4 }, () => ({ text: "", isCorrect: false, matchText: null as string | null })),
  );
  const subjectTopics = useMemo(() => topics.filter((t) => t.subjectId === subjectId), [topics, subjectId]);
  const single = type === "MCQ" || type === "TRUE_FALSE";
  const hasOptions = !["NUMERIC", "FILL_BLANK"].includes(type);

  const changeType = (t: string) => {
    setType(t);
    if (t === "TRUE_FALSE") setOptions([{ text: "True", isCorrect: false, matchText: null }, { text: "False", isCorrect: false, matchText: null }]);
    else if (options.length < 2) setOptions(Array.from({ length: 4 }, () => ({ text: "", isCorrect: false, matchText: null })));
  };

  return (
    <ActionForm
      action={saveQuestionAction.bind(null, initial?.id ?? null)}
      onSuccess={(r) => {
        const id = (r as { data?: { id: string } }).data?.id;
        if (!initial?.id && id) router.push(`/admin/questions/${id}`);
      }}
      className="space-y-6"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SelectField label="Subject" name="subjectId" required placeholder="Select" options={subjects} value={subjectId} onChange={(e) => setSubjectId(e.target.value)} />
        <SelectField label="Topic" name="topicId" placeholder="—" options={subjectTopics.map((t) => ({ value: t.id, label: t.title }))} defaultValue={initial?.topicId ?? ""} key={`topic-${subjectId}`} />
        <SelectField label="Class" name="classId" placeholder="Any" options={classes} defaultValue={initial?.classId ?? ""} />
        <SelectField label="Department" name="departmentId" placeholder="Any" options={departments} defaultValue={initial?.departmentId ?? ""} />
        <SelectField label="Section" name="level" options={SECTION_CHOICES_AUTO} defaultValue={initial ? sectionFormValue(initial.level) : "AUTO"} hint="JSS questions are only used in JSS exams, SS in SS." />
        <SelectField label="Question type" name="type" options={TYPES} value={type} onChange={(e) => changeType(e.target.value)} />
        <SelectField label="Difficulty" name="difficulty" options={["EASY", "MEDIUM", "HARD"].map((v) => ({ value: v, label: v.toLowerCase() }))} defaultValue={initial?.difficulty ?? "MEDIUM"} />
        <SelectField label="Year" name="year" placeholder="—" options={years.map((y) => ({ value: String(y), label: String(y) }))} defaultValue={initial?.year?.toString() ?? ""} />
        <SelectField label="Exam type" name="examType" placeholder="—" options={["PRACTICE", "MOCK", "SCHOOL_EXAM", "CLASS_TEST", "CONTINUOUS_ASSESSMENT", "JAMB", "WAEC", "NECO", "BECE", "CUSTOM"].map((v) => ({ value: v, label: v.replace(/_/g, " ") }))} defaultValue={initial?.examType ?? ""} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <TextAreaField label="Question" name="stem" required rows={6} value={stem} onChange={(e) => setStem(e.target.value)} hint="Use $…$ for maths, e.g. $\frac{3}{4}$, $x^2 + 5x + 6$, $\sqrt{2}$." />
          <div className="mt-2 flex items-center gap-3">
            <label className={buttonClass("secondary", "sm", "cursor-pointer")}>
              {uploading ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />} {image ? "Replace diagram" : "Add image / diagram"}
              <input
                type="file"
                accept="image/png,image/jpeg,image/webp,image/gif"
                className="sr-only"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  setUploading(true);
                  const fd = new FormData();
                  fd.set("file", f);
                  fd.set("kind", "QUESTION_IMAGE");
                  const r = await fetch("/api/v1/assets", { method: "POST", body: fd }).then((x) => x.json());
                  setUploading(false);
                  if (r.ok) setImage(r.data.id);
                  else toast("error", r.error.message);
                }}
              />
            </label>
            {image && <button type="button" className={buttonClass("ghost", "sm")} onClick={() => setImage(null)}>Remove image</button>}
            <input type="hidden" name="imageAssetId" value={image ?? ""} />
          </div>
        </div>
        <div className="rounded-xl border border-line bg-surface p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Student preview</p>
          <div className="prose-pps" dangerouslySetInnerHTML={{ __html: renderBlocksPreview(stem || "*Question text will appear here.*") }} />
          {image && <img src={`/api/v1/assets/${image}`} alt="Diagram" className="mt-2 max-h-48 rounded-lg border border-line" />}
          {hasOptions && (
            <ul className="mt-3 space-y-1.5 text-sm">
              {options.map((o, i) => (
                <li key={i} className={cx("flex gap-2 rounded-lg px-3 py-1.5", o.isCorrect ? "bg-success-50 ring-1 ring-emerald-200" : "bg-white ring-1 ring-line")}>
                  <strong>{"ABCDEFGH"[i]}.</strong> <span dangerouslySetInnerHTML={{ __html: renderInlinePreview(o.text || "…") }} />
                  {type === "MATCHING" && <span className="ml-auto text-muted">→ {o.matchText}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {hasOptions && (
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-navy-800">{type === "MATCHING" ? "Items and their correct matches" : single ? "Options — select the one correct answer" : "Options — tick every correct answer"}</legend>
          <div className="space-y-2">
            {options.map((o, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-6 text-center font-bold text-navy-800">{"ABCDEFGH"[i]}</span>
                {type !== "MATCHING" && (
                  <input
                    type={single ? "radio" : "checkbox"}
                    name="correct"
                    value={String(i)}
                    checked={o.isCorrect}
                    aria-label={`Mark option ${"ABCDEFGH"[i]} correct`}
                    className="size-5 accent-emerald-600"
                    onChange={() => setOptions((x) => x.map((y, j) => (single ? { ...y, isCorrect: j === i } : j === i ? { ...y, isCorrect: !y.isCorrect } : y)))}
                  />
                )}
                <input name="optionText" className={inputClass} value={o.text} readOnly={type === "TRUE_FALSE"} placeholder={`Option ${"ABCDEFGH"[i]}`} onChange={(e) => setOptions((x) => x.map((y, j) => (j === i ? { ...y, text: e.target.value } : y)))} />
                {type === "MATCHING" ? (
                  <input name="optionMatch" className={inputClass} value={o.matchText ?? ""} placeholder="Correct match" onChange={(e) => setOptions((x) => x.map((y, j) => (j === i ? { ...y, matchText: e.target.value } : y)))} />
                ) : (
                  <input type="hidden" name="optionMatch" value="" />
                )}
                {type !== "TRUE_FALSE" && options.length > 2 && (
                  <button type="button" aria-label="Remove option" className={buttonClass("ghost", "sm")} onClick={() => setOptions((x) => x.filter((_, j) => j !== i))}>
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
          {type !== "TRUE_FALSE" && options.length < 8 && (
            <button type="button" className={buttonClass("secondary", "sm", "mt-2")} onClick={() => setOptions((x) => [...x, { text: "", isCorrect: false, matchText: null }])}>
              <Plus className="size-4" /> Add option
            </button>
          )}
        </fieldset>
      )}
      {type === "NUMERIC" && (
        <div className="grid max-w-md gap-4 sm:grid-cols-2">
          <TextField label="Correct numeric answer" name="numericValue" type="number" step="any" required defaultValue={initial?.answerSpec?.value?.toString() ?? ""} />
          <TextField label="Tolerance (±)" name="numericTolerance" type="number" step="any" defaultValue={initial?.answerSpec?.tolerance?.toString() ?? "0"} hint="Fractions like 3/4 are accepted from students." />
        </div>
      )}
      {type === "FILL_BLANK" && <TextField label="Accepted answers (separate with |)" name="accepted" required defaultValue={initial?.answerSpec?.accepted?.join(" | ") ?? ""} hint="Case-insensitive. Example: Abuja | FCT Abuja" />}

      <TextAreaField label="Explanation (shown after marking)" name="explanation" rows={3} defaultValue={initial?.explanation ?? ""} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <TextField label="Marks" name="marks" type="number" step="0.5" min={0.5} defaultValue={String(initial?.marks ?? 1)} />
        <TextField label="Source" name="source" defaultValue={initial?.source ?? ""} placeholder="e.g. Precious PS original, Teacher: Mr Ade" />
        <SelectField label="Copyright status" name="copyrightStatus" defaultValue={initial?.copyrightStatus ?? "ORIGINAL"} options={[{ value: "ORIGINAL", label: "Original" }, { value: "TEACHER_AUTHORED", label: "Teacher-authored" }, { value: "LICENSED", label: "Licensed" }, { value: "AUTHORIZED", label: "Legally authorised" }, { value: "AI_GENERATED", label: "AI-generated" }, { value: "UNKNOWN", label: "Unknown (cannot be approved)" }]} />
        <SelectField label="Status" name="status" defaultValue={initial?.status === "APPROVED" && !canApprove ? "PENDING_REVIEW" : (initial?.status ?? "PENDING_REVIEW")} options={[{ value: "DRAFT", label: "Draft" }, { value: "PENDING_REVIEW", label: "Submit for review" }, ...(canApprove ? [{ value: "APPROVED", label: "Approved" }] : [])]} />
        <TextField className="sm:col-span-2 lg:col-span-4" label="Licence / ownership details" name="licenseInfo" defaultValue={initial?.licenseInfo ?? ""} placeholder="Required for licensed or authorised content" />
      </div>
      <p className="rounded-xl bg-warn-50 px-4 py-3 text-xs text-warn-600">Do not enter copyrighted JAMB, WAEC or NECO questions without authorisation. Record the source and licence for every non-original question.</p>
      <SubmitButton>{initial?.id ? "Save new version" : "Create question"}</SubmitButton>
    </ActionForm>
  );
}
