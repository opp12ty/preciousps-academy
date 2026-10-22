import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { AppError } from "@/server/errors";
import { getCatalog } from "@/server/services/curriculum";
import { fscBookAdmin, theoryToText } from "@/server/services/preciousps-study-centre";
import { fscStatusAction, updateFscBookAction, updateFscUnitAction } from "../../actions";
import { FscDeleteButton, FscImportForm } from "@/components/admin/fsc-import";
import { RichText } from "@/components/rich-text";
import { ActionForm, SelectField, SubmitButton, TextAreaField, TextField } from "@/components/ui/form";
import { ActionButton } from "@/components/ui/interactive";
import { Alert, Card, CardHeader, PageHeader, StatusBadge } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Precious PS e-book" };

const reviewText = (qs: { stem: string; options: { label: string; text: string }[]; answer: string }[]) =>
  qs.map((q, i) => [`${i + 1}. ${q.stem}`, ...q.options.map((o) => `${o.label}. ${o.label === q.answer ? "*" : ""}${o.text}`)].join("\n")).join("\n\n");

export default async function FscBookAdmin({ params }: PageProps<"/admin/preciousps-study-centre/[id]">) {
  const s = await requireStaffPage("curriculum.manage");
  const { id } = await params;
  const data = await fscBookAdmin(s.user.schoolId, id).catch((e) => { if (e instanceof AppError) notFound(); throw e; });
  const cat = await getCatalog(s.user.schoolId);
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  const { book, units } = data;
  return (
    <div className="space-y-6">
      <Link href="/admin/preciousps-study-centre" className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> Precious PS e-books</Link>
      <PageHeader
        eyebrow="Precious PS Study Centre"
        title={book.title}
        description={`${units.length} units · ${book.review.length} Term Review CBT questions · from ${book.sourceName ?? "an upload"}`}
        actions={
          <>
            <StatusBadge status={book.status} />
            {book.status !== "PUBLISHED" ? <ActionButton run={fscStatusAction.bind(null, book.id, "PUBLISHED")} variant="primary">Publish</ActionButton> : <ActionButton run={fscStatusAction.bind(null, book.id, "DRAFT")}>Unpublish</ActionButton>}
            <FscDeleteButton id={book.id} />
          </>
        }
      />
      {book.notices.length > 0 && <Alert tone="warning" title="Check these points from the import"><ul className="list-disc space-y-1 pl-5">{book.notices.map((n) => <li key={n}>{n}</li>)}</ul></Alert>}

      <Card>
        <CardHeader title="Details and Term Review CBT" description="Students see this e-book only when it is published and matches their class. Term Review: one question per block, options A–D, * before the correct option." />
        <ActionForm action={updateFscBookAction.bind(null, book.id)} className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4" successMessage="E-book saved.">
          <TextField label="Title" name="title" defaultValue={book.title} required className="sm:col-span-2 lg:col-span-4" />
          <SelectField label="Class" name="classId" defaultValue={book.classId ?? ""} options={o(cat.classes)} placeholder="Every class" />
          <SelectField label="Subject" name="subjectId" defaultValue={book.subjectId ?? ""} options={o(cat.subjects)} placeholder="No subject" />
          <SelectField label="Term" name="termId" defaultValue={book.termId ?? ""} options={o(cat.terms)} placeholder="No term" />
          <div />
          <TextAreaField label="Term Review CBT" name="review" defaultValue={reviewText(book.review)} rows={12} className="sm:col-span-2 lg:col-span-4 font-mono text-xs" />
          <div className="sm:col-span-2 lg:col-span-4"><SubmitButton size="sm">Save details</SubmitButton></div>
        </ActionForm>
      </Card>

      <Card>
        <CardHeader title="Replace with a corrected file" description="Upload the corrected e-book. Units are replaced in order and learners keep the scores they already have." />
        <div className="p-5"><FscImportForm classes={o(cat.classes)} subjects={o(cat.subjects)} terms={o(cat.terms)} bookId={book.id} /></div>
      </Card>

      <section className="space-y-3">
        <h2 className="text-lg font-extrabold text-navy-800">Units</h2>
        {units.map((u) => (
          <details key={u.id} className="rounded-2xl border border-line bg-white shadow-card">
            <summary className="cursor-pointer px-5 py-3">
              <span className="font-bold text-navy-800">{u.position}. {u.title}</span>
              <span className="ml-2 text-xs text-muted">{u.week ?? ""} · {u.classwork.length} classwork · {u.assignment.length} assignment · {[...u.classwork, ...u.assignment].filter((q) => !q.a).length} without a model answer</span>
            </summary>
            <div className="grid gap-5 border-t border-line p-5 lg:grid-cols-2">
              {u.bodyMd ? <div className="max-h-[32rem] overflow-y-auto rounded-xl bg-surface p-4"><RichText text={u.bodyMd} /></div> : <div className="fsc-body max-h-[32rem] overflow-y-auto rounded-xl bg-surface p-4" dangerouslySetInnerHTML={{ __html: u.bodyHtml }} />}
              <ActionForm action={updateFscUnitAction.bind(null, u.id)} className="space-y-3" successMessage="Unit saved.">
                <TextField label="Unit title" name="title" defaultValue={u.title} required />
                <TextField label="Subtitle" name="subtitle" defaultValue={u.subtitle ?? ""} />
                <TextAreaField label="Advanced Corner" name="advanced" defaultValue={u.advanced ?? ""} rows={2} />
                <TextAreaField label="Advanced Corner model answer" name="advancedAnswer" defaultValue={u.advancedAnswer ?? ""} rows={2} />
                <TextAreaField label="Classwork" name="classwork" defaultValue={theoryToText(u.classwork)} rows={8} hint="One question per line (1. …); the model answer under it, starting with =" className="font-mono text-xs" />
                <TextAreaField label="Assignment" name="assignment" defaultValue={theoryToText(u.assignment)} rows={8} className="font-mono text-xs" />
                <SubmitButton size="sm">Save unit</SubmitButton>
              </ActionForm>
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}
