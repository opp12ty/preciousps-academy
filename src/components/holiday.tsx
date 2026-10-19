"use client";

import { CheckCircle2, Send, Trash2 } from "lucide-react";
import { holidayDoneAction, holidayUndoAction } from "@/app/student/actions";
import { holidayTaskAction, holidayTaskDeleteAction } from "@/app/parent/actions";
import { holidaySchoolTaskAction, holidaySchoolTaskDeleteAction } from "@/app/admin/actions";
import { HOLIDAY_KEYS, HOLIDAYS, TASK_KINDS } from "@/content/holiday";
import { SECTION_LABELS, SECTIONS } from "@/core/sections";
import { ActionForm, CheckboxField, SelectField, SubmitButton, TextAreaField, TextField } from "./ui/form";
import { ActionButton, ConfirmAction } from "./ui/interactive";

const KIND_OPTIONS = Object.entries(TASK_KINDS).map(([value, k]) => ({ value, label: `${k.emoji} ${k.label}` }));

/** A learner ticks a holiday task off, with an optional note for the parent or teacher. */
export function HolidayTick({ taskId, done }: { taskId: string; done: boolean }) {
  if (done) return <ActionButton run={() => holidayUndoAction(taskId)} variant="ghost">Undo</ActionButton>;
  return (
    <ActionForm action={holidayDoneAction.bind(null, taskId)} className="flex flex-col gap-2 sm:flex-row sm:items-end">
      <TextField className="flex-1" label="What did you do? (optional)" name="note" maxLength={1000} placeholder="E.g. I read 3 chapters and wrote a summary" />
      <SubmitButton size="sm" pendingText="Saving…"><CheckCircle2 className="size-4" aria-hidden /> Mark as done</SubmitButton>
    </ActionForm>
  );
}

/** A parent sets a holiday task for one of their children. */
export function ParentTaskForm({ kids }: { kids: { id: string; name: string }[] }) {
  return (
    <ActionForm action={holidayTaskAction} resetOnSuccess className="grid gap-3 sm:grid-cols-2">
      <SelectField label="Child" name="studentUserId" required options={kids.map((k) => ({ value: k.id, label: k.name }))} />
      <SelectField label="Type of task" name="kind" options={KIND_OPTIONS} defaultValue="REVISION" />
      <TextField className="sm:col-span-2" label="Task" name="title" required maxLength={120} placeholder="E.g. Do 20 fractions questions and show me your work" />
      <TextAreaField className="sm:col-span-2" label="Instructions (optional)" name="instructions" rows={3} maxLength={2000} />
      <TextField label="Finish by (optional)" name="dueOn" type="date" />
      <div className="flex items-end"><SubmitButton className="w-full" pendingText="Sending…"><Send className="size-4" aria-hidden /> Give this task</SubmitButton></div>
    </ActionForm>
  );
}

export function ParentTaskDelete({ id }: { id: string }) {
  return <ActionButton run={() => holidayTaskDeleteAction(id)} variant="ghost"><Trash2 className="size-4" aria-hidden /> Remove</ActionButton>;
}

export interface SchoolTaskRow { id: string; holiday: string; year: number; kind: string; title: string; instructions: string | null; link: string | null; classId: string | null; level: string | null; dueOn: string | null; active: boolean }

/** Backend form: add or edit a school holiday task (built-in Precious PS activities are edited the same way). */
export function SchoolTaskForm({ row, classes, defaultHoliday }: { row?: SchoolTaskRow; classes: { id: string; name: string }[]; defaultHoliday?: string }) {
  return (
    <ActionForm action={holidaySchoolTaskAction.bind(null, row?.id ?? null)} resetOnSuccess={!row} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <SelectField label="Holiday" name="holiday" defaultValue={row?.holiday ?? defaultHoliday ?? "CHRISTMAS"} options={HOLIDAY_KEYS.map((k) => ({ value: k, label: HOLIDAYS[k].label }))} />
      <SelectField label="Type" name="kind" defaultValue={row?.kind ?? "ACTIVITY"} options={KIND_OPTIONS} />
      <TextField label="Finish by (optional)" name="dueOn" type="date" defaultValue={row?.dueOn ?? ""} />
      <TextField className="sm:col-span-2 lg:col-span-3" label="Title" name="title" required maxLength={120} defaultValue={row?.title ?? ""} />
      <TextAreaField className="sm:col-span-2 lg:col-span-3" label="Instructions" name="instructions" rows={3} maxLength={4000} defaultValue={row?.instructions ?? ""} />
      <SelectField label="Class (optional)" name="classId" defaultValue={row?.classId ?? ""} placeholder="Every class" options={classes.map((c) => ({ value: c.id, label: c.name }))} />
      <SelectField label="Section (when no class)" name="level" defaultValue={row?.level ?? ""} placeholder="Every section" options={SECTIONS.map((s) => ({ value: s, label: SECTION_LABELS[s] }))} />
      <TextField label="Link (optional)" name="link" maxLength={300} placeholder="/student/practice or https://…" defaultValue={row?.link ?? ""} />
      <CheckboxField label="Repeat every year" name="everyYear" defaultChecked={row ? row.year === 0 : true} />
      <CheckboxField label="Show to learners" name="active" defaultChecked={row ? row.active : true} />
      <div className="flex items-end"><SubmitButton className="w-full" pendingText="Saving…">{row ? "Save changes" : "Add task"}</SubmitButton></div>
    </ActionForm>
  );
}

export function SchoolTaskDelete({ id, title }: { id: string; title: string }) {
  return <ConfirmAction label={<><Trash2 className="size-4" aria-hidden /> Delete</>} title="Delete this holiday task?" description={`"${title}" will be removed for every learner, with the record of who finished it.`} confirmLabel="Delete" variant="ghost" run={() => holidaySchoolTaskDeleteAction(id)} />;
}
