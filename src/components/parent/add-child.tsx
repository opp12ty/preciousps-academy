"use client";

import { addChildAction } from "@/app/parent/actions";
import { ActionForm, SelectField, SubmitButton, TextField } from "../ui/form";

export function AddChildForm() {
  return (
    <ActionForm action={addChildAction} resetOnSuccess className="grid gap-3 sm:grid-cols-[1fr_12rem_auto] sm:items-end" successMessage="Link request sent. Academic information becomes available only after the connection is confirmed.">
      <TextField label="Child's Student ID or access code" name="code" required placeholder="e.g. PPS/2026/0142" autoComplete="off" hint="Your child's Student ID, username or e-mail, or the access code your child has ALREADY activated on their own account. A code that no student has activated yet cannot identify a child. Your child must then accept the request." />
      <SelectField label="You are the child's" name="relationship" placeholder="Choose" options={["Father", "Mother", "Guardian", "Other relative"].map((v) => ({ value: v, label: v }))} />
      <SubmitButton>Send link request</SubmitButton>
    </ActionForm>
  );
}
