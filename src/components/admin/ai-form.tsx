"use client";

import Link from "next/link";
import { Bot } from "lucide-react";
import { useMemo, useState } from "react";
import { aiGenerateAction } from "@/app/admin/actions";
import { ActionForm, SelectField, SubmitButton, TextField } from "../ui/form";
import { SECTION_CHOICES } from "@/core/sections";
import { Alert } from "../ui/primitives";

type Opt = { value: string; label: string };

export function AiForm({ subjects, classes, topics, max }: { subjects: Opt[]; classes: Opt[]; topics: { id: string; title: string; subjectId: string }[]; max: number }) {
  const [subjectId, setSubjectId] = useState("");
  const [result, setResult] = useState<{ created: number; rejected: { stem: string; reasons: string[] }[] } | null>(null);
  const tps = useMemo(() => topics.filter((t) => t.subjectId === subjectId), [topics, subjectId]);
  return (
    <div className="space-y-4">
      <ActionForm action={aiGenerateAction} onSuccess={(r) => r.ok && setResult(r.data as typeof result)} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SelectField label="Subject" name="subjectId" required placeholder="Select" options={subjects} value={subjectId} onChange={(e) => setSubjectId(e.target.value)} />
        <SelectField label="Class" name="classId" placeholder="Any class in the section" options={classes} />
        <SelectField label="Section" name="level" options={SECTION_CHOICES.filter((o) => o.value !== "ALL")} defaultValue="SENIOR_SECONDARY" hint="Sets the difficulty and wording (JSS or SS). A chosen class overrides it." />
        <SelectField label="Topic" name="topicId" placeholder="Type a topic instead →" options={tps.map((t) => ({ value: t.id, label: t.title }))} key={subjectId} />
        <TextField label="Or topic (free text)" name="topicText" placeholder="e.g. Quadratic equations" />
        <SelectField label="Difficulty" name="difficulty" defaultValue="MEDIUM" options={["EASY", "MEDIUM", "HARD"].map((v) => ({ value: v, label: v.toLowerCase() }))} />
        <SelectField label="Question type" name="type" options={[{ value: "MCQ", label: "Multiple choice (4 options)" }, { value: "TRUE_FALSE", label: "True / False" }]} />
        <TextField label={`Number of questions (max ${max})`} name="count" type="number" min={1} max={max} defaultValue="5" />
        <div className="flex items-end sm:col-span-2">
          <SubmitButton pendingText="Generating — this can take up to a minute…">
            <Bot className="size-4" /> Generate for review
          </SubmitButton>
        </div>
      </ActionForm>
      {result && (
        <Alert tone={result.created ? "success" : "warning"} title={`${result.created} question(s) created in PENDING_REVIEW`}>
          {result.rejected.length > 0 && (
            <>
              <p className="mt-1">{result.rejected.length} rejected by automatic consistency checks:</p>
              <ul className="mt-1 list-disc pl-5">
                {result.rejected.map((r, i) => (
                  <li key={i}>
                    {r.stem} — <em>{r.reasons.join(", ")}</em>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Link href="/admin/questions?status=PENDING_REVIEW&ai=1" className="mt-2 inline-block font-bold underline">
            Review AI questions
          </Link>
        </Alert>
      )}
    </div>
  );
}
