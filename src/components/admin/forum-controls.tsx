"use client";

import { Archive, Ban, Lock, RotateCcw, Sparkles, Trash2, Undo2, Unlock } from "lucide-react";
import { parentRoomsAction, reportResolveAction, forumDefaultsAction, forumLiftAction, forumMessageAction, forumPurgeAction, forumRoomAction, forumRoomStateAction, forumStaffPostAction, forumSuspendAction } from "@/app/admin/actions";
import { SECTION_CHOICES, sectionFormValue } from "@/core/sections";
import { ActionForm, CheckboxField, SelectField, SubmitButton, TextAreaField, TextField } from "../ui/form";
import { ActionButton, ConfirmAction } from "../ui/interactive";
import { buttonClass } from "../ui/primitives";

type Opt = { value: string; label: string };
export interface RoomData {
  id: string;
  name: string;
  description: string | null;
  topic: string;
  level: string | null;
  classId: string | null;
  isLocked: boolean;
  sortOrder: number;
}

export function RoomForm({ room, classes, topics }: { room?: RoomData; classes: Opt[]; topics: Opt[] }) {
  return (
    <ActionForm action={forumRoomAction.bind(null, room?.id ?? null)} resetOnSuccess={!room} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" successMessage="Room saved.">
      <TextField label="Room name" name="name" required maxLength={80} defaultValue={room?.name} />
      <SelectField label="Topic" name="topic" options={topics} defaultValue={room?.topic ?? "GENERAL"} />
      <SelectField label="Section" name="level" options={SECTION_CHOICES} defaultValue={room ? sectionFormValue(room.level) : "SENIOR_SECONDARY"} hint="Students only see rooms for their own section." />
      <SelectField label="One class only (optional)" name="classId" placeholder="Whole section" options={classes} defaultValue={room?.classId ?? ""} hint="Choosing a class restricts the room to that class." />
      <TextField label="Order" name="sortOrder" type="number" min={0} max={999} defaultValue={String(room?.sortOrder ?? 0)} />
      <div className="flex items-end"><CheckboxField name="isLocked" label="Read only (students cannot post)" defaultChecked={room?.isLocked} /></div>
      <TextAreaField className="sm:col-span-2 lg:col-span-3" label="Description" name="description" rows={2} maxLength={300} defaultValue={room?.description ?? ""} />
      <div className="sm:col-span-2 lg:col-span-3"><SubmitButton size="sm">{room ? "Save room" : "Add room"}</SubmitButton></div>
    </ActionForm>
  );
}

export function RoomStateButtons({ id, isLocked, archived }: { id: string; isLocked: boolean; archived: boolean }) {
  if (archived) return <ActionButton run={() => forumRoomStateAction(id, "RESTORE")}><Undo2 className="size-4" /> Restore</ActionButton>;
  return (
    <>
      <ActionButton run={() => forumRoomStateAction(id, isLocked ? "UNLOCK" : "LOCK")}>{isLocked ? <><Unlock className="size-4" /> Unlock</> : <><Lock className="size-4" /> Lock</>}</ActionButton>
      <ConfirmAction label="Archive" icon={<Archive className="size-4" />} title="Archive this room?" description="Students will no longer see it. Its messages are kept for your records and it can be restored." run={() => forumRoomStateAction(id, "ARCHIVE")} />
    </>
  );
}

export function DefaultRoomsButton() {
  return <ActionButton variant="primary" run={() => forumDefaultsAction()}><Sparkles className="size-4" /> Create starter rooms</ActionButton>;
}

export function MessageButtons({ id, status, userId, isStudent, canSuspend }: { id: string; status: string; userId: string; isStudent: boolean; canSuspend: boolean }) {
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      {status === "VISIBLE" && <ActionButton run={() => forumMessageAction(id, "DELETE")}><Trash2 className="size-4" /> Delete</ActionButton>}
      {status === "DELETED" && <ActionButton run={() => forumMessageAction(id, "RESTORE")}><RotateCcw className="size-4" /> Restore</ActionButton>}
      {isStudent && canSuspend && (
        <details className="relative text-left">
          <summary className={buttonClass("danger", "sm", "list-none cursor-pointer")}><Ban className="size-4" /> Suspend</summary>
          <div className="absolute right-0 z-20 mt-2 w-80 rounded-2xl border border-line bg-white p-4 shadow-lift">
            <SuspendForm userId={userId} />
            <div className="mt-3 border-t border-line pt-3">
              <ConfirmAction label="Delete all this student's messages" icon={<Trash2 className="size-4" />} title="Remove every message from this student?" description="All their visible messages in every room are removed. You can restore individual messages afterwards." run={() => forumPurgeAction(userId)} />
            </div>
          </div>
        </details>
      )}
    </div>
  );
}

export function SuspendForm({ userId }: { userId: string }) {
  return (
    <ActionForm action={forumSuspendAction.bind(null, userId)} className="grid gap-3" successMessage="Student suspended from the forum.">
      <TextField label="Reason (the student sees this)" name="reason" required minLength={3} maxLength={300} />
      <SelectField label="For how long" name="days" defaultValue="3" options={[{ value: "1", label: "1 day" }, { value: "3", label: "3 days" }, { value: "7", label: "7 days" }, { value: "30", label: "30 days" }, { value: "0", label: "Until I lift it" }]} />
      <SubmitButton size="sm" variant="danger">Suspend from forum</SubmitButton>
    </ActionForm>
  );
}

export function LiftButton({ id }: { id: string }) {
  return <ActionButton run={() => forumLiftAction(id)}><Undo2 className="size-4" /> Lift suspension</ActionButton>;
}

export function StaffPostForm({ roomId }: { roomId: string }) {
  return (
    <ActionForm action={forumStaffPostAction.bind(null, roomId)} resetOnSuccess className="flex flex-col gap-2 sm:flex-row sm:items-end" successMessage="Posted as Moderator.">
      <TextField className="flex-1" label="Post in this room as Moderator" name="body" required maxLength={2000} placeholder="e.g. Reminder: keep the discussion on school work." />
      <SubmitButton size="md">Post</SubmitButton>
    </ActionForm>
  );
}

export function ParentRoomsButton() {
  return <ActionButton run={() => parentRoomsAction()}><Sparkles className="size-4" /> Create parent community rooms</ActionButton>;
}

export function ReportButtons({ id, messageId, messageStatus }: { id: string; messageId: string; messageStatus: string }) {
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      {messageStatus === "VISIBLE" && <ActionButton variant="primary" run={async () => { const r = await forumMessageAction(messageId, "DELETE"); return r.ok ? reportResolveAction(id, "RESOLVED") : r; }}><Trash2 className="size-4" /> Remove message</ActionButton>}
      <ActionButton run={() => reportResolveAction(id, "RESOLVED")}>Mark handled</ActionButton>
      <ActionButton run={() => reportResolveAction(id, "DISMISSED")}>Dismiss</ActionButton>
    </div>
  );
}
