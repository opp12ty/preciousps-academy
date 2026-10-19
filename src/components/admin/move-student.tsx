"use client";

import { ArrowLeftRight } from "lucide-react";
import { useState } from "react";
import { moveStudentAction } from "@/app/admin/actions";
import { ActionForm, SelectField, SubmitButton, TextField } from "../ui/form";

type Opt = { id: string; name: string; level: string | null };

/** Staff move one student to another class: down, up or across. The student's work starts afresh. */
export function MoveStudentForm({ userId, classes, departments, classId }: { userId: string; classes: Opt[]; departments: Opt[]; classId: string | null }) {
  const [cls, setCls] = useState("");
  const level = classes.find((c) => c.id === cls)?.level ?? null;
  const deps = departments.filter((d) => !d.level || d.level === level);
  return (
    <ActionForm action={moveStudentAction.bind(null, userId)} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr_auto] lg:items-end">
      <SelectField label="Move to class" name="classId" required placeholder="Choose the correct class" value={cls} onChange={(e) => setCls(e.target.value)} options={classes.filter((c) => c.id !== classId || deps.length > 1).map((c) => ({ value: c.id, label: c.name }))} />
      {deps.length > 1 ? <SelectField key={level ?? "none"} label="Department" name="departmentId" required placeholder="Choose department" options={deps.map((d) => ({ value: d.id, label: d.name }))} /> : <span className="hidden lg:block" />}
      <TextField label="Reason (kept in the audit log)" name="reason" required minLength={5} maxLength={300} placeholder="e.g. Chose SS2 by mistake at registration" />
      <SubmitButton pendingText="Moving…"><ArrowLeftRight className="size-4" aria-hidden /> Change class</SubmitButton>
    </ActionForm>
  );
}
