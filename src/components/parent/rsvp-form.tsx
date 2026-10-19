"use client";

import { CalendarCheck } from "lucide-react";
import { rsvpAction, rsvpCancelAction } from "@/app/parent/actions";
import { ActionForm, SubmitButton, TextField } from "../ui/form";
import { ActionButton } from "../ui/interactive";

/** Book or change a family's places on one activity. */
export function RsvpForm({ eventId, mine, full }: { eventId: string; mine: { adults: number; children: number; note: string | null } | null; full: boolean }) {
  if (full && !mine) return <p className="text-sm font-semibold text-danger-600">All places are taken.</p>;
  return (
    <div className="space-y-2">
      <ActionForm action={rsvpAction.bind(null, eventId)} className="grid grid-cols-2 gap-3 sm:grid-cols-[6rem_6rem_1fr_auto] sm:items-end">
        <TextField label="Adults" name="adults" type="number" min={0} max={20} defaultValue={String(mine?.adults ?? 1)} required />
        <TextField label="Children" name="children" type="number" min={0} max={20} defaultValue={String(mine?.children ?? 1)} required />
        <TextField className="col-span-2 sm:col-span-1" label="Note for the organisers (optional)" name="note" maxLength={300} defaultValue={mine?.note ?? ""} />
        <SubmitButton className="col-span-2 sm:col-span-1" pendingText="Saving…"><CalendarCheck className="size-4" aria-hidden /> {mine ? "Update booking" : "Book places"}</SubmitButton>
      </ActionForm>
      {mine && <ActionButton run={() => rsvpCancelAction(eventId)} variant="ghost">Cancel my booking</ActionButton>}
    </div>
  );
}
