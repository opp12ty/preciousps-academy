"use client";

import { Check, CheckCheck, Flag, Play, Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { hubStartAction } from "@/app/hub-actions";
import { removeChildAction, scheduleCreateAction, scheduleDeleteAction } from "@/app/parent/actions";
import { linkRemoveAction, linkReportAction, linkRespondAction, scheduleRespondAction } from "@/app/student/actions";
import { ActionForm, SelectField, SubmitButton, TextField } from "./ui/form";
import { ActionButton, ConfirmAction } from "./ui/interactive";
import { buttonClass } from "./ui/primitives";

/** Student: accept or reject a parent link request. */
export function LinkRequestButtons({ id, parent }: { id: string; parent: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      <ConfirmAction label="Accept" icon={<Check className="size-4" />} variant="primary" confirmVariant="primary" title={`Accept ${parent} as your parent or guardian?`} description="Accepting connects this person to your account. They will be able to see your results, your learning progress and your timetable. Accept only if you know that this is truly your parent or guardian." confirmLabel="Yes, accept" run={() => linkRespondAction(id, true)} />
      <ConfirmAction label="Reject" icon={<X className="size-4" />} title="Reject this request?" description="Nothing about you will be shared with this person." confirmLabel="Reject" run={() => linkRespondAction(id, false)} />
    </div>
  );
}

export function ConnectionButtons({ parentUserId, canRemove }: { parentUserId: string; canRemove: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {canRemove && <ConfirmAction label="Remove" icon={<Trash2 className="size-4" />} title="Remove this connection?" description="This person will no longer see your results or progress." confirmLabel="Remove" run={() => linkRemoveAction(parentUserId)} />}
      <ConfirmAction label="Report to school" icon={<Flag className="size-4" />} title="Report this connection to the school?" description="Use this if you do not know this person or something is wrong. A member of staff will look into it." confirmLabel="Report" run={() => linkReportAction(parentUserId)} />
    </div>
  );
}

export function RemoveChildButton({ studentUserId, name }: { studentUserId: string; name: string }) {
  const router = useRouter();
  return <ConfirmAction label="Remove connection" icon={<Trash2 className="size-4" />} title={`Remove your connection with ${name}?`} description="You will no longer see this child's results or progress. To connect again you must send a new request." confirmLabel="Remove" run={() => removeChildAction(studentUserId)} onDone={() => router.push("/parent")} />;
}

/** Parent: add a timetable activity or a supportive flag for one child. */
export function ScheduleForm({ studentUserId, activities, flags, today }: { studentUserId: string; activities: string[]; flags: string[]; today: string }) {
  const [kind, setKind] = useState("ACTIVITY");
  return (
    <ActionForm action={scheduleCreateAction.bind(null, studentUserId)} resetOnSuccess className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" successMessage="Added. Your child has been notified.">
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-navy-800">Type</span>
        <select name="kind" value={kind} onChange={(e) => setKind(e.target.value)} className="block w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm">
          <option value="ACTIVITY">Timetable activity</option>
          <option value="FLAG">Supportive flag</option>
        </select>
      </label>
      {kind === "ACTIVITY" ? <SelectField label="Activity" name="title" options={activities.map((v) => ({ value: v, label: v }))} defaultValue={activities[0]} /> : <SelectField label="Flag" name="flag" options={flags.map((v) => ({ value: v, label: v }))} defaultValue={flags[0]} />}
      <TextField label="Your own wording (optional)" name="custom" maxLength={120} placeholder="e.g. Read chapter 3 of Basic Science" />
      <TextField label="Date" name="date" type="date" required defaultValue={today} />
      <TextField label="Start time" name="startTime" type="time" />
      <TextField label="End time" name="endTime" type="time" />
      <SelectField label="Priority" name="priority" defaultValue="NORMAL" options={[{ value: "LOW", label: "Low" }, { value: "NORMAL", label: "Normal" }, { value: "HIGH", label: "High" }]} />
      <SelectField label="Repeat" name="repeat" defaultValue="ONCE" options={[{ value: "ONCE", label: "One time" }, { value: "DAILY", label: "Every day" }, { value: "WEEKLY", label: "Every week" }]} />
      <TextField className="sm:col-span-2 lg:col-span-3" label="Note to your child (optional)" name="note" maxLength={300} />
      <div className="flex items-end"><SubmitButton size="sm">Add</SubmitButton></div>
    </ActionForm>
  );
}

export function ScheduleDelete({ id, studentUserId }: { id: string; studentUserId: string }) {
  return <ActionButton run={() => scheduleDeleteAction(id, studentUserId)}><Trash2 className="size-4" /> Remove</ActionButton>;
}

export function ScheduleRespond({ id, status }: { id: string; status: string }) {
  if (status === "COMPLETED") return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {status === "SCHEDULED" && <ActionButton run={() => scheduleRespondAction(id, "ACKNOWLEDGE")}><Check className="size-4" /> I have seen it</ActionButton>}
      <ActionButton variant="primary" run={() => scheduleRespondAction(id, "COMPLETE")}><CheckCheck className="size-4" /> Done</ActionButton>
    </div>
  );
}

/** Student Knowledge Hub: the countdown is only a display; the server ends the session. */
export function HubSessionBar({ secondsLeft, cooldownSeconds, unlimited, sessionMinutes }: { secondsLeft: number | null; cooldownSeconds: number; unlimited: boolean; sessionMinutes: number }) {
  const router = useRouter();
  const [left, setLeft] = useState(secondsLeft ?? 0);
  const [wait, setWait] = useState(cooldownSeconds);
  const active = unlimited || (secondsLeft ?? 0) > 0;
  useEffect(() => {
    if (unlimited) return;
    const id = window.setInterval(() => {
      setLeft((s) => Math.max(0, s - 1));
      setWait((s) => Math.max(0, s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [unlimited]);
  useEffect(() => {
    if (!unlimited && active && left === 0) router.refresh();
  }, [left, active, unlimited, router]);
  const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  if (unlimited) return <p className="rounded-xl bg-success-50 px-4 py-2.5 text-sm font-semibold text-success-600">Unlimited Knowledge Hub access is open on your access code.</p>;
  if (active) return <p className="rounded-xl bg-royal-50 px-4 py-2.5 text-sm font-semibold text-royal-600" aria-live="off">Session remaining: <span className="tabular-nums">{clock(left)}</span></p>;
  if (wait > 0) return <p className="rounded-xl bg-warn-50 px-4 py-2.5 text-sm font-semibold text-warn-600">Your session has ended. The Knowledge Hub opens for you again in <span className="tabular-nums">{clock(wait)}</span>.</p>;
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl bg-surface px-4 py-3">
      <p className="text-sm font-semibold text-navy-800">Each session lasts {sessionMinutes} minutes.</p>
      <ActionButton variant="primary" run={() => hubStartAction()}><Play className="size-4" /> Start a session</ActionButton>
    </div>
  );
}

export const ghostLink = buttonClass("ghost", "sm");
