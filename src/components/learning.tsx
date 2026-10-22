"use client";

import { BookCheck, Loader2, MonitorCheck, Printer } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { markChapterAction, openCaAction } from "@/app/student/actions";
import { buttonClass } from "./ui/primitives";
import { useToast } from "./ui/toast";

/** Opens CA 1 or CA 2 for a subject and term, creating the paper on first use, then goes to it. */
export function CaButton({ subjectId, termId, stage, label, disabled }: { subjectId: string; termId: string; stage: 1 | 2; label: string; disabled?: boolean }) {
  const [pending, start] = useTransition();
  const router = useRouter();
  const toast = useToast();
  return (
    <button type="button" disabled={disabled || pending} className={buttonClass("primary", "sm")} onClick={() => start(async () => {
      const r = await openCaAction(subjectId, termId, stage);
      if (!r.ok) return toast("error", r.error);
      router.push(`/student/exams/${r.data!.examId}`);
    })}>
      {pending ? <Loader2 className="size-4 animate-spin" /> : <MonitorCheck className="size-4" />} {label}
    </button>
  );
}

export function ChapterRead({ topicId, subjectId, read }: { topicId: string; subjectId: string; read: boolean }) {
  const [pending, start] = useTransition();
  const router = useRouter();
  const toast = useToast();
  return (
    <button type="button" disabled={pending} className={buttonClass(read ? "secondary" : "gold", "sm", "no-print")} onClick={() => start(async () => {
      const r = await markChapterAction(topicId, !read, subjectId);
      if (!r.ok) return toast("error", r.error);
      router.refresh();
    })}>
      {pending ? <Loader2 className="size-4 animate-spin" /> : <BookCheck className="size-4" />} {read ? "Read ✓ (tap to undo)" : "I have read this chapter"}
    </button>
  );
}

export function PrintButton() {
  return <button type="button" className={buttonClass("secondary", "sm", "no-print")} onClick={() => window.print()}><Printer className="size-4" /> Print or save as PDF</button>;
}
