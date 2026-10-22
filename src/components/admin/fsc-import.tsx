"use client";

import { Loader2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import { addJambTextAction, deleteFscBookAction, generateFscAction, importFscBookAction, publishAllFscAction } from "@/app/admin/actions";
import { ConfirmAction } from "../ui/interactive";
import { buttonClass, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";
import { HOSTING_LIMIT_MB } from "./material-form";

type Opt = { value: string; label: string };
type Summary = { id: string; title: string; units: number; classwork: number; assignment: number; review: number; notices: string[] };

/**
 * Uploads a Precious PS e-book (Word, PDF or PowerPoint) and turns it into units with Classwork, Assignment and a
 * Term Review CBT. With `bookId` it replaces that book's content and keeps learners' scores.
 */
export function FscImportForm({ classes, subjects, terms, bookId }: { classes: Opt[]; subjects: Opt[]; terms: Opt[]; bookId?: string }) {
  const form = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState("");
  const [pending, start] = useTransition();
  const [done, setDone] = useState<Summary | null>(null);
  const toast = useToast();
  const router = useRouter();

  const submit = () =>
    start(async () => {
      const fd = new FormData(form.current!);
      const file = fd.get("file") as File | null;
      if (!file || !file.size) return toast("error", "Choose the e-book file.");
      if (file.size > HOSTING_LIMIT_MB * 1_048_576) return toast("error", `That file is ${(file.size / 1_048_576).toFixed(1)} MB. The limit is ${HOSTING_LIMIT_MB} MB — save the pictures smaller, or split the book into two files.`);
      const up = new FormData();
      up.set("file", file);
      up.set("kind", "DOCUMENT");
      const r = await fetch("/api/v1/assets", { method: "POST", body: up })
        .then((x) => x.json())
        .catch(() => null);
      if (!r?.ok) return toast("error", r?.error?.message ?? "The file could not be uploaded.");
      const v = (k: string) => String(fd.get(k) ?? "") || undefined;
      const res = await importFscBookAction({ kind: v("kind"), assetId: r.data.id, classId: v("classId"), subjectId: v("subjectId"), termId: v("termId"), title: v("title"), bookId });
      if (!res.ok) return toast("error", res.error);
      setDone(res.data!);
      toast("success", bookId ? "E-book updated." : "E-book imported. Check it, then publish it.");
      form.current?.reset();
      setFileName("");
      router.refresh();
    });

  const field = "block text-sm font-semibold text-navy-800";
  const select = (label: string, name: string, options: Opt[]) => (
    <label className={field}>
      {label}
      <select name={name} defaultValue="" className={`${inputClass} mt-1.5`}>
        <option value="">{bookId ? "Keep as it is" : "Read it from the book"}</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );

  return (
    <div className="space-y-4">
      <form ref={form} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" onSubmit={(e) => { e.preventDefault(); submit(); }}>
        <div className={`${field} sm:col-span-2`}>
          E-book file (Word, PDF or PowerPoint)
          <label className={buttonClass("secondary", "md", "mt-1.5 w-full cursor-pointer justify-start")}>
            <Upload className="size-4 shrink-0" /> <span className="truncate">{fileName || "Choose file"}</span>
            <input type="file" name="file" accept=".docx,.pdf,.pptx,.doc" className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
          </label>
          <span className="mt-1 block text-xs font-normal text-muted">Up to {HOSTING_LIMIT_MB} MB. Word keeps the pictures and tables; PDF and PowerPoint bring the text.</span>
        </div>
        {!bookId && (
          <label className={field}>
            Type
            <select name="kind" defaultValue="EBOOK" className={`${inputClass} mt-1.5`}>
              <option value="EBOOK">Precious PS e-book (units, classwork, CBT)</option>
              <option value="STORY">Precious PS story book (chapters)</option>
            </select>
          </label>
        )}
        {!bookId && (
          <label className={field}>
            Title (optional)
            <input name="title" maxLength={200} placeholder="Read from the book's cover" className={`${inputClass} mt-1.5`} />
          </label>
        )}
        {select("Class", "classId", classes)}
        {select("Subject", "subjectId", subjects)}
        {select("Term", "termId", terms)}
        <div className="flex items-end">
          <button disabled={pending} className={buttonClass("primary", "md", "w-full")}>
            {pending ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />} {pending ? "Reading the e-book…" : bookId ? "Replace content" : "Import e-book"}
          </button>
        </div>
      </form>
      {done && (
        <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-navy-800">
          <p className="font-bold">{done.title}</p>
          <p className="mt-1">{done.units} units · {done.classwork} classwork and {done.assignment} assignment questions · {done.review} Term Review CBT questions.</p>
          {done.notices.length > 0 && <ul className="mt-2 list-disc space-y-1 pl-5 text-amber-800">{done.notices.map((n) => <li key={n}>{n}</li>)}</ul>}
          <a href={`/admin/preciousps-study-centre/${done.id}`} className="mt-2 inline-block font-semibold text-royal-600 hover:underline">Check and publish it →</a>
        </div>
      )}
    </div>
  );
}

/** Deletes an e-book after confirmation, then returns to the list. */
export function FscDeleteButton({ id }: { id: string }) {
  const router = useRouter();
  return (
    <ConfirmAction
      label="Delete"
      title="Delete this e-book?"
      description="The e-book, its units and every learner's scores in it are removed. This cannot be undone."
      confirmLabel="Delete"
      run={() => deleteFscBookAction(id)}
      onDone={(r) => r.ok && router.push("/admin/preciousps-study-centre")}
    />
  );
}

/** Makes Precious PS e-books from the NERDC content packs (drafts), in batches until every class, subject and term has one. */
export function FscGenerateButtons({ classId, drafts }: { classId?: string; drafts: number }) {
  const [pending, start] = useTransition();
  const [note, setNote] = useState("");
  const toast = useToast();
  const router = useRouter();
  const generate = () =>
    start(async () => {
      let total = 0;
      for (let i = 0; i < 40; i++) {
        const r = await generateFscAction();
        if (!r.ok) return toast("error", r.error);
        total += r.data!.created;
        setNote(`${total} e-book(s) made so far…`);
        if (!r.data!.more) break;
      }
      setNote(`${total} new e-book(s) made as drafts. Check them, then publish.`);
      toast("success", `${total} new e-book(s) made.`);
      router.refresh();
    });
  const publish = () =>
    start(async () => {
      if (!confirm(`Publish ${drafts} draft e-book(s)${classId ? " of this class" : ""} to students?`)) return;
      const r = await publishAllFscAction(classId);
      if (!r.ok) return toast("error", r.error);
      toast("success", `${r.data!.published} e-book(s) published.`);
      router.refresh();
    });
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button type="button" disabled={pending} onClick={generate} className={buttonClass("primary", "sm")}>{pending ? <Loader2 className="size-4 animate-spin" /> : null} Make e-books for every class and subject</button>
      <button type="button" disabled={pending || drafts === 0} onClick={publish} title={drafts ? undefined : "No drafts to publish"} className={buttonClass("gold", "sm")}>Publish all{drafts ? ` (${drafts})` : ""}</button>
      {note && <span className="text-xs text-muted">{note}</span>}
    </div>
  );
}

/** Uploads a JAMB prescribed literature text (PDF) with its year, title and author. */
export function JambTextForm({ genres }: { genres: Opt[] }) {
  const form = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState("");
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  const submit = () =>
    start(async () => {
      const fd = new FormData(form.current!);
      const file = fd.get("file") as File | null;
      if (!file || !file.size) return toast("error", "Choose the PDF.");
      if (!/\.pdf$/i.test(file.name)) return toast("error", "Upload the book as a PDF.");
      if (file.size > HOSTING_LIMIT_MB * 1_048_576) return toast("error", `That file is ${(file.size / 1_048_576).toFixed(1)} MB. The limit is ${HOSTING_LIMIT_MB} MB — compress the PDF or split it into parts (e.g. Part 1, Part 2).`);
      const up = new FormData();
      up.set("file", file);
      up.set("kind", "DOCUMENT");
      const r = await fetch("/api/v1/assets", { method: "POST", body: up }).then((x) => x.json()).catch(() => null);
      if (!r?.ok) return toast("error", r?.error?.message ?? "The file could not be uploaded.");
      const res = await addJambTextAction({ assetId: r.data.id, title: String(fd.get("title") ?? ""), author: String(fd.get("author") ?? ""), year: Number(fd.get("year")), genre: String(fd.get("genre") ?? "") });
      if (!res.ok) return toast("error", res.error);
      toast("success", "Book added.");
      form.current?.reset();
      setFileName("");
      router.refresh();
    });
  const field = "block text-sm font-semibold text-navy-800";
  return (
    <form ref={form} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" onSubmit={(e) => { e.preventDefault(); submit(); }}>
      <label className={`${field} lg:col-span-2`}>Title<input name="title" required maxLength={200} className={`${inputClass} mt-1.5`} /></label>
      <label className={field}>Author<input name="author" maxLength={120} className={`${inputClass} mt-1.5`} /></label>
      <label className={field}>JAMB year<input name="year" type="number" min={2000} max={2100} defaultValue={new Date().getFullYear() + 1} required className={`${inputClass} mt-1.5`} /></label>
      <label className={field}>Type<select name="genre" className={`${inputClass} mt-1.5`}>{genres.map((g) => <option key={g.value} value={g.value}>{g.label}</option>)}</select></label>
      <div className={field}>
        PDF
        <label className={buttonClass("secondary", "md", "mt-1.5 w-full cursor-pointer justify-start")}>
          <Upload className="size-4 shrink-0" /> <span className="truncate">{fileName || "Choose PDF"}</span>
          <input type="file" name="file" accept=".pdf" className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
        </label>
      </div>
      <div className="sm:col-span-2 lg:col-span-3"><button disabled={pending} className={buttonClass("primary", "sm")}>{pending && <Loader2 className="size-4 animate-spin" />} Add book</button></div>
    </form>
  );
}
