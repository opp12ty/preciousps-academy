"use client";

import { Send } from "lucide-react";
import { submitIdeaAction } from "@/app/ideas-actions";
import { answerIdeaAction } from "@/app/admin/actions";
import { ActionForm, SelectField, SubmitButton, TextAreaField } from "./ui/form";

const CATS = [["LEARNING", "Lessons and learning"], ["CONTENT", "New topics or questions"], ["GAMES", "Games and fun"], ["DESIGN", "Look and ease of use"], ["PROBLEM", "Something is not working"], ["OTHER", "Something else"]] as const;
const STATUSES = [["NEW", "New"], ["PLANNED", "Planned"], ["DONE", "Done"], ["DECLINED", "Not for now"]] as const;

export function IdeaForm() {
  return (
    <ActionForm action={submitIdeaAction} resetOnSuccess className="grid gap-3">
      <SelectField label="What is your idea about?" name="category" defaultValue="LEARNING" options={CATS.map(([value, label]) => ({ value, label }))} />
      <TextAreaField label="Your idea" name="text" rows={4} required maxLength={1500} placeholder="E.g. Please add a game for learning Yoruba words, or more Physics videos for SS2." />
      <div><SubmitButton pendingText="Sending…"><Send className="size-4" aria-hidden /> Send my idea</SubmitButton></div>
    </ActionForm>
  );
}

export function IdeaReply({ id, status, reply }: { id: string; status: string; reply: string | null }) {
  return (
    <ActionForm action={answerIdeaAction.bind(null, id)} className="grid gap-2 sm:grid-cols-[10rem_1fr_auto] sm:items-end">
      <SelectField label="Status" name="status" defaultValue={status} options={STATUSES.map(([value, label]) => ({ value, label }))} />
      <TextAreaField label="Reply to the sender (optional)" name="reply" rows={2} maxLength={1500} defaultValue={reply ?? ""} />
      <SubmitButton size="sm" pendingText="Saving…">Save</SubmitButton>
    </ActionForm>
  );
}
