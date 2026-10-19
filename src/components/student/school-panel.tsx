"use client";

import { Building2, Repeat } from "lucide-react";
import { useState } from "react";
import { switchSchoolClassAction } from "@/app/student/actions";
import { ActionForm, SelectField, SubmitButton } from "../ui/form";

type ClassOpt = { id: string; name: string; level: string | null };
type DeptOpt = { id: string; name: string; level: string | null };

/** Shown to a school account: its School Code, and the switch between its examination classes. */
export function SchoolPanel({ schoolName, schoolCode, category, classes, departments, classId, departmentId }: { schoolName: string; schoolCode: string; category: string; classes: ClassOpt[]; departments: DeptOpt[]; classId: string | null; departmentId: string | null }) {
  const [cls, setCls] = useState(classId ?? "");
  const level = classes.find((c) => c.id === cls)?.level ?? null;
  const deps = departments.filter((d) => !d.level || d.level === level);
  return (
    <section className="overflow-hidden rounded-2xl border border-line bg-white shadow-card" aria-labelledby="school-h">
      <div className="flex flex-wrap items-center gap-4 bg-navy-800 px-5 py-4 text-white">
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-400"><Building2 className="size-6" aria-hidden /></span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold-400">School account · {category === "PRIMARY" ? "Primary" : "Secondary"}</p>
          <h2 id="school-h" className="truncate text-lg font-extrabold">{schoolName}</h2>
        </div>
        <div className="text-right">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/60">School Code</p>
          <p className="font-mono text-lg font-extrabold tracking-wider text-gold-400">{schoolCode}</p>
        </div>
      </div>
      <div className="p-5">
        <ActionForm action={switchSchoolClassAction} className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <SelectField label="Class you are working with" name="classId" value={cls} onChange={(e) => setCls(e.target.value)} options={classes.map((c) => ({ value: c.id, label: c.name }))} />
          {deps.length > 1 ? <SelectField key={level ?? "none"} label="Department" name="departmentId" defaultValue={departmentId ?? ""} placeholder="Choose department" required options={deps.map((d) => ({ value: d.id, label: d.name }))} /> : <span className="hidden sm:block" />}
          <SubmitButton pendingText="Switching…"><Repeat className="size-4" aria-hidden /> Switch class</SubmitButton>
        </ActionForm>
        <p className="mt-3 text-xs text-muted">A school account works with the examination classes only. Lessons, classwork, tests and examinations change with the class you choose. Sign in with the School Code, your username or your e-mail.</p>
      </div>
    </section>
  );
}
