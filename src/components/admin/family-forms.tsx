"use client";

import { Megaphone, Save, Trash2 } from "lucide-react";
import { expertAction, expertDeleteAction, familyEventAction, familyEventAnnounceAction, familyEventDeleteAction } from "@/app/admin/actions";
import { ActionForm, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { ActionButton, ConfirmAction } from "../ui/interactive";

const STATUS = [{ value: "DRAFT", label: "Draft (hidden from parents)" }, { value: "PUBLISHED", label: "Published" }, { value: "ARCHIVED", label: "Archived" }];
const local = (d: string | null) => (d ? new Date(new Date(d).getTime() + 3_600_000).toISOString().slice(0, 16) : "");

export interface EventData { id: string; kind: string; title: string; description: string; venue: string | null; startsAt: string | null; endsAt: string | null; cost: string | null; contact: string | null; capacity: number | null; status: string }

export function EventForm({ event, kinds }: { event?: EventData; kinds: { value: string; label: string }[] }) {
  return (
    <div className="space-y-3">
      <ActionForm action={familyEventAction.bind(null, event?.id ?? null)} resetOnSuccess={!event} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <TextField className="sm:col-span-2" label="Title" name="title" required defaultValue={event?.title} placeholder="e.g. Family picnic at Agodi Gardens" />
        <SelectField label="Kind" name="kind" defaultValue={event?.kind ?? "PICNIC"} options={kinds} />
        <SelectField label="Status" name="status" defaultValue={event?.status ?? "DRAFT"} options={STATUS} />
        <TextField label="Starts (Nigerian time)" name="startsAt" type="datetime-local" defaultValue={local(event?.startsAt ?? null)} />
        <TextField label="Ends" name="endsAt" type="datetime-local" defaultValue={local(event?.endsAt ?? null)} />
        <TextField label="Venue" name="venue" defaultValue={event?.venue ?? ""} />
        <TextField label="Places available" name="capacity" type="number" min={1} defaultValue={event?.capacity?.toString() ?? ""} hint="Leave empty for no limit." />
        <TextField className="sm:col-span-2" label="Cost" name="cost" defaultValue={event?.cost ?? ""} placeholder="e.g. N3,000 per adult, children free" />
        <TextField className="sm:col-span-2" label="Contact for enquiries" name="contact" defaultValue={event?.contact ?? ""} placeholder="Name and phone number" />
        <TextAreaField className="sm:col-span-2 lg:col-span-4" label="Details" name="description" rows={4} defaultValue={event?.description ?? ""} hint="What will happen, what to bring, transport, payment. Formatting: **bold**, - list item." />
        <div className="sm:col-span-2 lg:col-span-4"><SubmitButton pendingText="Saving…"><Save className="size-4" aria-hidden /> {event ? "Save changes" : "Add activity"}</SubmitButton></div>
      </ActionForm>
      {event && (
        <div className="flex flex-wrap gap-2 border-t border-line pt-3">
          {event.status === "PUBLISHED" && <ConfirmAction label="Tell all parents" icon={<Megaphone className="size-4" />} confirmVariant="primary" confirmLabel="Send notice" title="Tell every parent about this activity?" description="Each parent receives one notification with a link to Family Activities." run={() => familyEventAnnounceAction(event.id)} />}
          <ConfirmAction label="Delete" icon={<Trash2 className="size-4" />} title={`Delete “${event.title}”?`} description="The activity and every booking on it are removed. This cannot be undone." run={() => familyEventDeleteAction(event.id)} />
        </div>
      )}
    </div>
  );
}

export interface ExpertData { id: string; profession: string; name: string; title: string | null; topics: string; bio: string; phone: string | null; email: string | null; availability: string | null; audience: string; website: string | null; testimonials: string; sortOrder: number; status: string }

export function ExpertForm({ expert, professions }: { expert?: ExpertData; professions: { value: string; label: string }[] }) {
  return (
    <div className="space-y-3">
      <ActionForm action={expertAction.bind(null, expert?.id ?? null)} resetOnSuccess={!expert} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <TextField className="sm:col-span-2" label="Name" name="name" required defaultValue={expert?.name} placeholder="e.g. Dr Amina Yusuf" />
        <SelectField label="Profession" name="profession" defaultValue={expert?.profession ?? "COUNSELLOR"} options={professions} />
        <SelectField label="Status" name="status" defaultValue={expert?.status ?? "DRAFT"} options={STATUS} />
        <TextField className="sm:col-span-2" label="Title or qualification" name="title" defaultValue={expert?.title ?? ""} placeholder="e.g. Consultant Paediatrician, UCH Ibadan" />
        <TextField label="Phone" name="phone" type="tel" defaultValue={expert?.phone ?? ""} />
        <TextField label="E-mail" name="email" type="email" defaultValue={expert?.email ?? ""} />
        <TextAreaField className="sm:col-span-2" label="Topics this expert helps with (one per line)" name="topics" rows={4} defaultValue={expert?.topics ?? ""} placeholder={"Child behaviour and discipline\nExamination anxiety\nTeenage counselling"} />
        <TextAreaField className="sm:col-span-2" label="Short profile" name="bio" rows={4} defaultValue={expert?.bio ?? ""} />
        <TextField className="sm:col-span-2" label="When they can be reached" name="availability" defaultValue={expert?.availability ?? ""} placeholder="e.g. Weekdays 4 to 6 p.m., by appointment" />
        <SelectField label="Who can see this expert" name="audience" defaultValue={expert?.audience ?? "PARENT"} options={[{ value: "PARENT", label: "Parents only" }, { value: "STUDENT", label: "Students only" }, { value: "BOTH", label: "Parents and students" }]} />
        <TextField label="Website (optional)" name="website" type="url" defaultValue={expert?.website ?? ""} placeholder="https://" />
        <TextAreaField className="sm:col-span-2 lg:col-span-4" label="Testimonials and feedback (one per line, e.g. “Helped my son get his UK student visa first time.” — Mrs A., Lagos)" name="testimonials" rows={3} defaultValue={expert?.testimonials ?? ""} />
        <TextField label="Order in the list" name="sortOrder" type="number" min={0} defaultValue={String(expert?.sortOrder ?? 0)} />
        <div className="sm:col-span-2 lg:col-span-4"><SubmitButton pendingText="Saving…"><Save className="size-4" aria-hidden /> {expert ? "Save changes" : "Add expert"}</SubmitButton></div>
      </ActionForm>
      {expert && <ActionButton run={() => expertDeleteAction(expert.id)} variant="ghost"><Trash2 className="size-4" /> Remove this expert</ActionButton>}
    </div>
  );
}
