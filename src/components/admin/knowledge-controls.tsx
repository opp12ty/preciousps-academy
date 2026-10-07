"use client";

import { History, Trash2 } from "lucide-react";
import { useState } from "react";
import { hubArticleAction, hubArticleDeleteAction, hubArticleRestoreAction, hubArticleStatusAction, hubQuestionAction, hubQuestionDeleteAction } from "@/app/admin/actions";
import { SECTION_CHOICES, sectionFormValue } from "@/core/sections";
import { ActionForm, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { ActionButton, ConfirmAction } from "../ui/interactive";
import { renderBlocksPreview } from "./preview";
import { PictureTools } from "./picture-tools";

const STREAMS = [{ value: "SCIENCE", label: "Science" }, { value: "COMMERCIAL", label: "Commercial" }, { value: "ARTS", label: "Arts" }];
const STATUSES = [{ value: "DRAFT", label: "Draft" }, { value: "REVIEW", label: "In review" }, { value: "APPROVED", label: "Approved" }, { value: "PUBLISHED", label: "Published" }, { value: "ARCHIVED", label: "Archived" }];
const SECTIONS = [{ value: "KNOWLEDGE", label: "Student Knowledge Hub" }, { value: "LEARNING", label: "Parent Learning Hub" }, { value: "PSYCHOLOGY", label: "Parent Psychology Library" }, { value: "TEMPERAMENT", label: "Parent Temperament" }];

export interface ArticleData { id: string; section: string; category: string; title: string; summary: string; body: string; keyPoints: string | null; activity: string | null; sources: string | null; level: string | null; stream: string | null; status: string }

export function ArticleForm({ article, defaultSection }: { article?: ArticleData; defaultSection?: string }) {
  const [body, setBody] = useState(article?.body ?? "");
  const [preview, setPreview] = useState(false);
  return (
    <ActionForm action={hubArticleAction.bind(null, article?.id ?? null)} resetOnSuccess={!article} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" successMessage="Article saved.">
      <SelectField label="Where it appears" name="section" options={SECTIONS} defaultValue={article?.section ?? defaultSection ?? "KNOWLEDGE"} />
      <TextField label="Category" name="category" required maxLength={60} placeholder="e.g. Nigerian History, Study Habits" defaultValue={article?.category} />
      <SelectField label="Section of the school" name="level" options={SECTION_CHOICES} defaultValue={article ? sectionFormValue(article.level) : "ALL"} hint="Students only." />
      <SelectField label="Department" name="stream" placeholder="General" options={STREAMS} defaultValue={article?.stream ?? ""} hint="Students only." />
      <TextField className="sm:col-span-2 lg:col-span-3" label="Title" name="title" required maxLength={160} defaultValue={article?.title} />
      <SelectField label="Status" name="status" options={STATUSES} defaultValue={article?.status ?? "DRAFT"} hint="Only Published articles are shown." />
      <TextAreaField className="sm:col-span-2 lg:col-span-4" label="Summary" name="summary" rows={2} required maxLength={600} defaultValue={article?.summary} />
      <div className="sm:col-span-2 lg:col-span-4">
        <div className="mb-1.5 flex items-center justify-between"><span className="text-sm font-semibold text-navy-800">Main content</span><button type="button" className="text-xs font-semibold text-royal-600" onClick={() => setPreview(!preview)}>{preview ? "Write" : "Preview"}</button></div>
        <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)} rows={12} required className={`block w-full rounded-xl border border-line px-3.5 py-2.5 font-mono text-sm ${preview ? "hidden" : ""}`} placeholder={"## Heading\nText with **bold**, - lists and tables."} />
        {preview && <div className="prose-pps min-h-40 rounded-xl border border-line bg-white p-4" dangerouslySetInnerHTML={{ __html: renderBlocksPreview(body) }} />}
        <PictureTools onInsert={(line) => setBody((b) => `${b.replace(/\s+$/, "")}${b.trim() ? "\n\n" : ""}${line}\n`)} />
      </div>
      <TextAreaField className="sm:col-span-2" label="Key points (one per line)" name="keyPoints" rows={4} maxLength={2000} defaultValue={article?.keyPoints ?? ""} />
      <TextAreaField className="sm:col-span-2" label="Activity or recommended action" name="activity" rows={4} maxLength={1000} defaultValue={article?.activity ?? ""} />
      <TextAreaField className="sm:col-span-2 lg:col-span-3" label="Sources and references" name="sources" rows={2} maxLength={2000} defaultValue={article?.sources ?? ""} hint="List real sources only. Leave blank if the article is original guidance." />
      <div className="flex items-end"><SubmitButton size="sm">{article ? "Save article" : "Add article"}</SubmitButton></div>
    </ActionForm>
  );
}

export function ArticleRowButtons({ id, status, title }: { id: string; status: string; title: string }) {
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      {status === "DRAFT" && <ActionButton run={() => hubArticleStatusAction(id, "REVIEW")}>Send for review</ActionButton>}
      {status === "REVIEW" && <ActionButton run={() => hubArticleStatusAction(id, "APPROVED")}>Approve</ActionButton>}
      {status !== "PUBLISHED" && status !== "ARCHIVED" && <ActionButton variant="primary" run={() => hubArticleStatusAction(id, "PUBLISHED")}>Publish</ActionButton>}
      {status === "PUBLISHED" && <ActionButton run={() => hubArticleStatusAction(id, "DRAFT")}>Unpublish</ActionButton>}
      {status !== "ARCHIVED" ? <ActionButton run={() => hubArticleStatusAction(id, "ARCHIVED")}>Archive</ActionButton> : <ActionButton run={() => hubArticleStatusAction(id, "DRAFT")}>Restore</ActionButton>}
      <ConfirmAction label="Delete" icon={<Trash2 className="size-4" />} title={`Delete “${title}”?`} description="The article and its earlier versions are removed for good." run={() => hubArticleDeleteAction(id)} />
    </div>
  );
}

export function RestoreVersion({ id, version }: { id: string; version: number }) {
  return <ConfirmAction label={`Restore version ${version}`} icon={<History className="size-4" />} title={`Restore version ${version}?`} description="The current text is kept as a new version, and the article goes back to Review." confirmLabel="Restore" run={() => hubArticleRestoreAction(id, version)} />;
}

export interface HubQuestionData { id: string; audience: string; category: string; level: string | null; stream: string | null; difficulty: string; stem: string; options: string[]; answer: number; explanation: string | null; status: string }

export function HubQuestionForm({ q }: { q?: HubQuestionData }) {
  return (
    <ActionForm action={hubQuestionAction.bind(null, q?.id ?? null)} resetOnSuccess={!q} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" successMessage="Question saved.">
      <SelectField label="For" name="audience" options={[{ value: "STUDENT", label: "Students" }, { value: "PARENT", label: "Parents" }]} defaultValue={q?.audience ?? "STUDENT"} />
      <TextField label="Category" name="category" required maxLength={60} placeholder="e.g. Culture, History, Parenting" defaultValue={q?.category} hint="Culture, History and Geography feed the Culture Challenge." />
      <SelectField label="Section of the school" name="level" options={SECTION_CHOICES} defaultValue={q ? sectionFormValue(q.level) : "ALL"} />
      <SelectField label="Department" name="stream" placeholder="General" options={STREAMS} defaultValue={q?.stream ?? ""} />
      <TextAreaField className="sm:col-span-2 lg:col-span-4" label="Question" name="stem" rows={2} required maxLength={600} defaultValue={q?.stem} />
      {["a", "b", "c", "d"].map((k, i) => <TextField key={k} label={`Option ${k.toUpperCase()}`} name={k} required maxLength={300} defaultValue={q?.options[i]} />)}
      <SelectField label="Correct answer" name="answer" options={["A", "B", "C", "D"].map((v) => ({ value: v, label: v }))} defaultValue={q ? "ABCD"[q.answer] : "A"} />
      <SelectField label="Difficulty" name="difficulty" options={["EASY", "MEDIUM", "HARD"].map((v) => ({ value: v, label: v.toLowerCase() }))} defaultValue={q?.difficulty ?? "MEDIUM"} />
      <SelectField label="Status" name="status" options={[{ value: "PUBLISHED", label: "Published" }, { value: "DRAFT", label: "Draft (hidden)" }]} defaultValue={q?.status ?? "PUBLISHED"} />
      <TextAreaField className="sm:col-span-2 lg:col-span-3" label="Explanation shown after answering" name="explanation" rows={2} maxLength={600} defaultValue={q?.explanation ?? ""} />
      <div className="flex items-end"><SubmitButton size="sm">{q ? "Save" : "Add question"}</SubmitButton></div>
    </ActionForm>
  );
}

export function DeleteHubQuestion({ id }: { id: string }) {
  return <ConfirmAction label="Delete" icon={<Trash2 className="size-4" />} title="Delete this question?" description="It will no longer appear in any game." run={() => hubQuestionDeleteAction(id)} />;
}
