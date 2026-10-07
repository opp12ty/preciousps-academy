"use client";

import { Sparkles, Trash2 } from "lucide-react";
import { wordEntryAction, wordEntryDeleteAction, wordStarterAction } from "@/app/admin/actions";
import { SECTION_CHOICES, sectionFormValue } from "@/core/sections";
import { ActionForm, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { ActionButton, ConfirmAction } from "../ui/interactive";

type Opt = { value: string; label: string };
export interface EntryData {
  id: string;
  kind: string;
  term: string;
  partOfSpeech: string | null;
  meaning: string;
  example: string | null;
  picture: string | null;
  level: string | null;
  classId: string | null;
  status: string;
}

export function EntryForm({ kind, entry, classes }: { kind: string; entry?: EntryData; classes: Opt[] }) {
  const word = kind === "WORD";
  return (
    <ActionForm action={wordEntryAction.bind(null, entry?.id ?? null)} resetOnSuccess={!entry} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" successMessage="Saved.">
      <input type="hidden" name="kind" value={kind} />
      <TextField className={word ? "" : "lg:col-span-2"} label={word ? "Word" : "Phrase"} name="term" required maxLength={120} defaultValue={entry?.term} />
      {word && <TextField label="Part of speech" name="partOfSpeech" maxLength={40} placeholder="noun, verb, adjective…" defaultValue={entry?.partOfSpeech ?? ""} />}
      <TextField label="Picture (emoji)" name="picture" maxLength={16} placeholder="🍎" defaultValue={entry?.picture ?? ""} hint="Paste one picture symbol." />
      <SelectField label="Status" name="status" defaultValue={entry?.status ?? "PUBLISHED"} options={[{ value: "PUBLISHED", label: "Published" }, { value: "DRAFT", label: "Draft (hidden)" }, { value: "ARCHIVED", label: "Archived" }]} />
      <TextAreaField className="sm:col-span-2" label="Meaning" name="meaning" rows={2} required maxLength={600} defaultValue={entry?.meaning} />
      <TextAreaField className="sm:col-span-2" label="Example sentence" name="example" rows={2} maxLength={600} defaultValue={entry?.example ?? ""} />
      <SelectField label="Section" name="level" options={SECTION_CHOICES} defaultValue={entry ? sectionFormValue(entry.level) : "ALL"} hint="Who can see it." />
      <SelectField label="One class only (optional)" name="classId" placeholder="Every class in the section" options={classes} defaultValue={entry?.classId ?? ""} hint="Choosing a class shows the entry to that class alone." />
      <div className="flex items-end"><SubmitButton size="sm">{entry ? "Save" : "Add"}</SubmitButton></div>
    </ActionForm>
  );
}

export function DeleteEntry({ id, term }: { id: string; term: string }) {
  return <ConfirmAction label="Delete" icon={<Trash2 className="size-4" />} title={`Delete “${term}”?`} description="Students will no longer see it. This cannot be undone." run={() => wordEntryDeleteAction(id)} />;
}

export function StarterButton() {
  return <ActionButton variant="primary" run={() => wordStarterAction()}><Sparkles className="size-4" /> Add starter collection</ActionButton>;
}
