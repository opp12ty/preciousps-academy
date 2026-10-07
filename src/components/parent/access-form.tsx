"use client";

import { KeyRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { activateParentCodeAction } from "@/app/parent/actions";
import { ActionForm, SubmitButton, TextField } from "../ui/form";

/** Where a parent enters the access code the school generated for the parent portal. */
export function ParentAccessForm() {
  const router = useRouter();
  return (
    <ActionForm action={activateParentCodeAction} resetOnSuccess onSuccess={() => router.push("/parent")} className="flex flex-col gap-3 sm:flex-row sm:items-end">
      <TextField className="flex-1" label="Parent access code" name="code" placeholder="PPS-XXXX-XXXX-XXXX" autoComplete="off" autoCapitalize="characters" spellCheck={false} required />
      <SubmitButton pendingText="Activating…">
        <KeyRound className="size-4" aria-hidden /> Activate
      </SubmitButton>
    </ActionForm>
  );
}
