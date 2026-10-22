"use client";

import { CheckCircle2, Circle, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { addPlanAction, deletePlanAction, quickPlanAction, togglePlanAction } from "@/app/student/actions";
import { ActionForm, SelectField, SubmitButton, TextField } from "./ui/form";
import { cx } from "./ui/primitives";
import { useToast } from "./ui/toast";

export function PlanForm({ days, subjects, today }: { days: { value: string; label: string }[]; subjects: { id: string; name: string }[]; today: string }) {
  return (
    <ActionForm action={addPlanAction} resetOnSuccess className="grid gap-3 sm:grid-cols-[10rem_12rem_1fr_7rem_auto] sm:items-end">
      <SelectField label="Day" name="day" defaultValue={today} options={days} />
      <SelectField label="Subject" name="subjectId" placeholder="Any" options={subjects.map((s) => ({ value: s.id, label: s.name }))} />
      <TextField label="What will you study?" name="title" required maxLength={140} placeholder="E.g. Revise fractions and do 10 questions" />
      <TextField label="Minutes" name="minutes" type="number" min={5} max={480} defaultValue="30" />
      <SubmitButton pendingText="Adding…"><Plus className="size-4" /> Add</SubmitButton>
    </ActionForm>
  );
}

export function PlanItem({ id, title, subject, minutes, done }: { id: string; title: string; subject: string | null; minutes: number; done: boolean }) {
  const [pending, start] = useTransition();
  const router = useRouter();
  const toast = useToast();
  const run = (fn: () => Promise<{ ok: boolean; error?: string }>) => start(async () => { const r = await fn(); if (!r.ok) toast("error", r.error ?? "Try again."); router.refresh(); });
  return (
    <li className={cx("group flex items-start gap-2 rounded-xl px-2.5 py-2 text-sm ring-1 transition", done ? "bg-success-50 ring-emerald-200" : "bg-white ring-line", pending && "opacity-60")}>
      <button type="button" aria-label={done ? "Mark as not done" : "Mark as done"} onClick={() => run(() => togglePlanAction(id))} className="mt-0.5 shrink-0">{done ? <CheckCircle2 className="size-5 text-success-600" /> : <Circle className="size-5 text-muted" />}</button>
      <span className="min-w-0 flex-1"><span className={cx("block font-semibold", done ? "text-success-600 line-through" : "text-navy-800")}>{title}</span><span className="block text-xs text-muted">{subject ? `${subject} · ` : ""}{minutes} min</span></span>
      <button type="button" aria-label="Remove" onClick={() => run(() => deletePlanAction(id))} className="shrink-0 text-muted opacity-60 hover:text-danger-600 group-hover:opacity-100"><Trash2 className="size-4" /></button>
    </li>
  );
}

export function QuickAdd({ day, title, subjectId }: { day: string; title: string; subjectId: string }) {
  const [pending, start] = useTransition();
  const router = useRouter();
  const toast = useToast();
  return (
    <button type="button" disabled={pending} onClick={() => start(async () => { const r = await quickPlanAction(day, title, subjectId); toast(r.ok ? "success" : "error", r.ok ? "Added to today." : r.error); router.refresh(); })} className="whitespace-nowrap rounded-full bg-gold-50 px-3 py-1.5 text-xs font-semibold text-navy-800 ring-1 ring-gold-400/60 hover:bg-gold-100">
      + {title}
    </button>
  );
}
