"use client";

import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { submitAppealAction } from "@/app/student/actions";
import { ActionForm, SubmitButton, TextAreaField, TextField } from "../ui/form";

/** A student asks the examination office to look at one result again. */
export function AppealForm({ resultId }: { resultId: string }) {
  const router = useRouter();
  return (
    <ActionForm action={submitAppealAction.bind(null, resultId)} onSuccess={() => router.refresh()} className="space-y-4">
      <TextField label="Question numbers (optional)" name="questions" placeholder="e.g. 4, 17, 23" maxLength={120} />
      <TextAreaField label="What do you think is wrong?" name="reason" rows={4} required minLength={20} maxLength={1500} hint="Be specific: say which answer you chose and why you believe it is correct." />
      <SubmitButton pendingText="Sending…">
        <Send className="size-4" aria-hidden /> Send appeal
      </SubmitButton>
    </ActionForm>
  );
}
