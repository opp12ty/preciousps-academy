"use client";

import { Loader2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { chapterChoicesAction, saveResourceAction } from "@/app/admin/actions";
import { SECTION_CHOICES, sectionFormValue } from "@/core/sections";
import { buttonClass, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

type Opt = { value: string; label: string };
export interface MaterialData {
  id: string;
  title: string;
  description: string | null;
  subjectId: string | null;
  departmentId: string | null;
  classId: string | null;
  level: string | null;
  topicId?: string | null;
  assetId: string | null;
  isRecommended: boolean;
  isPremium?: boolean;
  status: string;
  fileName: string | null;
}

const ACCEPT = ".pdf,.docx,.doc,.pptx,.ppt,.xlsx,.xls,.mp3";
/** The hosting platform refuses requests above about 4.5 MB, whatever the upload setting says. */
export const HOSTING_LIMIT_MB = 4;

/** Uploads a PDF / Word / PowerPoint / Excel file and saves it as a study material (or edits one). */
export function MaterialForm({ m, subjects, classes, departments, maxFileMb }: { m?: MaterialData; subjects: Opt[]; classes: Opt[]; departments: Opt[]; maxFileMb: number }) {
  const form = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState("");
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  const limit = Math.min(maxFileMb, HOSTING_LIMIT_MB);
  const [classId, setClassId] = useState(m?.classId ?? "");
  const [subjectId, setSubjectId] = useState(m?.subjectId ?? "");
  const [chapters, setChapters] = useState<{ value: string; label: string; term: string }[]>([]);
  useEffect(() => {
    let live = true;
    if (!classId || !subjectId) {
      setChapters([]);
      return;
    }
    chapterChoicesAction(classId, subjectId).then((r) => live && setChapters(r.ok ? (r.data ?? []) : []));
    return () => {
      live = false;
    };
  }, [classId, subjectId]);
  const termNames = [...new Set(chapters.map((c) => c.term))];

  const submit = () =>
    start(async () => {
      const fd = new FormData(form.current!);
      const file = fd.get("file") as File | null;
      fd.delete("file");
      let assetId = m?.assetId ?? "";
      let name = m?.fileName ?? "";
      if (file && file.size > 0) {
        if (file.size > limit * 1_048_576) return toast("error", `That file is ${(file.size / 1_048_576).toFixed(1)} MB. The limit is ${limit} MB — compress it or split it into parts.`);
        const up = new FormData();
        up.set("file", file);
        up.set("kind", "DOCUMENT");
        const r = await fetch("/api/v1/assets", { method: "POST", body: up })
          .then((x) => x.json())
          .catch(() => null);
        if (!r?.ok) return toast("error", r?.error?.message ?? "The file could not be uploaded.");
        assetId = r.data.id;
        name = file.name;
      }
      if (!assetId) return toast("error", "Choose a file to upload.");
      fd.set("assetId", assetId);
      fd.set("resourceType", /\.pptx?$/i.test(name) ? "PRESENTATION" : "DOCUMENT");
      fd.set("platform", "Upload");
      const saved = await saveResourceAction(m?.id ?? null, null, fd);
      if (!saved.ok) return toast("error", saved.error);
      toast("success", m ? "Material saved." : "Material added.");
      if (!m) {
        form.current?.reset();
        setFileName("");
      }
      router.refresh();
    });

  const field = "block text-sm font-semibold text-navy-800";
  const select = (label: string, name: string, placeholder: string, options: Opt[], value: string) => (
    <label className={field}>
      {label}
      <select name={name} defaultValue={value} className={`${inputClass} mt-1.5`}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <form
      ref={form}
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <label className={`${field} lg:col-span-2`}>
        Title
        <input name="title" required minLength={2} maxLength={160} defaultValue={m?.title} className={`${inputClass} mt-1.5`} />
      </label>
      <div className={field}>
        File (PDF, Word, PowerPoint or Excel)
        <label className={buttonClass("secondary", "md", "mt-1.5 w-full cursor-pointer justify-start")}>
          <Upload className="size-4 shrink-0" /> <span className="truncate">{fileName || (m?.fileName ? `Replace ${m.fileName}` : "Choose file")}</span>
          <input type="file" name="file" accept={ACCEPT} className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
        </label>
        <span className="mt-1 block text-xs font-normal text-muted">Up to {limit} MB. Files with macros are refused.</span>
      </div>
      <label className={field}>
        Class
        <select name="classId" value={classId} onChange={(e) => setClassId(e.target.value)} className={`${inputClass} mt-1.5`}>
          <option value="">All classes</option>
          {classes.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </label>
      <label className={field}>
        Subject
        <select name="subjectId" value={subjectId} onChange={(e) => setSubjectId(e.target.value)} className={`${inputClass} mt-1.5`}>
          <option value="">Any subject</option>
          {subjects.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </label>
      <label className={field}>
        Place in the e-book
        <select key={`${classId}-${subjectId}-${chapters.length}`} name="topicId" defaultValue={m?.topicId ?? ""} disabled={!classId || !subjectId} className={`${inputClass} mt-1.5`}>
          <option value="">{classId && subjectId ? "Whole book (front of the e-book)" : "Choose a class and subject first"}</option>
          {termNames.map((t) => (
            <optgroup key={t} label={t}>
              {chapters.filter((c) => c.term === t).map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
            </optgroup>
          ))}
        </select>
        <span className="mt-1 block text-xs font-normal text-muted">Pick a term&apos;s chapter to show the file inside that chapter, or leave it as the whole book.</span>
      </label>
      {select("Department", "departmentId", "All departments", departments, m?.departmentId ?? "")}
      <label className={field}>
        Section
        <select name="level" defaultValue={m ? sectionFormValue(m.level) : "ALL"} className={`${inputClass} mt-1.5`}>
          {SECTION_CHOICES.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="mt-1 block text-xs font-normal text-muted">If you pick a class, that class&apos;s section is used.</span>
      </label>
      <label className={field}>
        Status
        <select name="status" defaultValue={m?.status ?? "PUBLISHED"} className={`${inputClass} mt-1.5`}>
          <option value="PUBLISHED">Published (students can see it)</option>
          <option value="DRAFT">Draft (hidden)</option>
          <option value="ARCHIVED">Archived</option>
        </select>
      </label>
      <label className="flex items-end gap-2 pb-2.5 text-sm font-semibold text-navy-800">
        <input type="checkbox" name="isRecommended" defaultChecked={m?.isRecommended} className="size-4 accent-royal-600" /> Recommended
      </label>
      <label className="flex items-end gap-2 pb-2.5 text-sm font-semibold text-navy-800">
        <input type="checkbox" name="isPremium" defaultChecked={m?.isPremium} className="size-4 accent-royal-600" /> Premium only (International &amp; Advanced)
      </label>
      <label className={`${field} sm:col-span-2 lg:col-span-3`}>
        Description
        <textarea name="description" rows={2} maxLength={1000} defaultValue={m?.description ?? ""} className={`${inputClass} mt-1.5`} />
      </label>
      <div className="sm:col-span-2 lg:col-span-3">
        <button disabled={pending} className={buttonClass("primary", "sm")}>
          {pending && <Loader2 className="size-4 animate-spin" />} {m ? "Save" : "Add material"}
        </button>
      </div>
    </form>
  );
}
