"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { reviewQuestionsAction } from "@/app/admin/actions";
import { Badge, buttonClass, cx, StatusBadge } from "../ui/primitives";
import { useToast } from "../ui/toast";

interface Row {
  id: string;
  ref: string;
  stem: string;
  type: string;
  status: string;
  difficulty: string;
  year: number | null;
  subject: string;
  topic: string | null;
  aiGenerated: boolean;
  copyrightStatus: string;
  version: number;
  timesAttempted: number;
  timesCorrect: number;
}

/** Question table with multi-select bulk review (approve / reject / archive). */
export function QuestionTable({ rows, canReview, canArchive }: { rows: Row[]; canReview: boolean; canArchive: boolean }) {
  const [sel, setSel] = useState<string[]>([]);
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  const run = (decision: "APPROVED" | "REJECTED" | "ARCHIVED" | "DRAFT") =>
    start(async () => {
      let note: string | undefined;
      if (decision === "REJECTED") {
        note = prompt("Reason for rejection (sent back to the author):") ?? undefined;
        if (!note) return;
      }
      const r = await reviewQuestionsAction(sel, decision, note);
      if (r.ok) {
        toast("success", `${(r.data as { count: number }).count} question(s) updated.`);
        setSel([]);
        router.refresh();
      } else toast("error", r.error);
    });
  const all = rows.length > 0 && sel.length === rows.length;
  return (
    <div>
      {(canReview || canArchive) && (
        <div className={cx("flex flex-wrap items-center gap-2 border-b border-line px-4 py-2.5", sel.length ? "bg-royal-50" : "bg-surface")}>
          <span className="text-sm font-semibold text-navy-800">{sel.length} selected</span>
          {canReview && (
            <>
              <button disabled={!sel.length || pending} onClick={() => run("APPROVED")} className={buttonClass("primary", "sm")}>Approve</button>
              <button disabled={!sel.length || pending} onClick={() => run("REJECTED")} className={buttonClass("danger-outline", "sm")}>Reject</button>
            </>
          )}
          {canArchive && <button disabled={!sel.length || pending} onClick={() => run("ARCHIVED")} className={buttonClass("secondary", "sm")}>Archive</button>}
          {canReview && <button disabled={!sel.length || pending} onClick={() => run("DRAFT")} className={buttonClass("ghost", "sm")}>Restore to draft</button>}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-surface text-xs uppercase tracking-wide text-muted">
              <th className="w-10 px-4 py-2.5"><input type="checkbox" aria-label="Select all" className="size-4 accent-royal-600" checked={all} onChange={() => setSel(all ? [] : rows.map((r) => r.id))} /></th>
              <th className="px-3 py-2.5 font-bold">Question</th>
              <th className="px-3 py-2.5 font-bold">Subject · Topic</th>
              <th className="px-3 py-2.5 font-bold">Meta</th>
              <th className="px-3 py-2.5 font-bold">Accuracy</th>
              <th className="px-3 py-2.5 font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className={cx("border-b border-line align-top", sel.includes(r.id) && "bg-royal-50/50")}>
                <td className="px-4 py-3"><input type="checkbox" aria-label={`Select ${r.ref}`} className="size-4 accent-royal-600" checked={sel.includes(r.id)} onChange={() => setSel((x) => (x.includes(r.id) ? x.filter((y) => y !== r.id) : [...x, r.id]))} /></td>
                <td className="max-w-md px-3 py-3">
                  <Link href={`/admin/questions/${r.id}`} className="font-mono text-xs font-bold text-royal-600 hover:underline">{r.ref}</Link>
                  <p className="line-clamp-2 text-navy-800">{r.stem.replace(/\$/g, "")}</p>
                </td>
                <td className="px-3 py-3 text-xs">{r.subject}<br /><span className="text-muted">{r.topic ?? "—"}</span></td>
                <td className="px-3 py-3">
                  <div className="flex flex-wrap gap-1">
                    <Badge>{r.type.replace("_", " ").toLowerCase()}</Badge>
                    <Badge tone={r.difficulty === "HARD" ? "red" : r.difficulty === "EASY" ? "green" : "amber"}>{r.difficulty.toLowerCase()}</Badge>
                    {r.year && <Badge>{r.year}</Badge>}
                    {r.aiGenerated && <Badge tone="gold">AI</Badge>}
                    {r.copyrightStatus === "UNKNOWN" && <Badge tone="red">© unknown</Badge>}
                  </div>
                </td>
                <td className="px-3 py-3 text-xs tabular-nums">{r.timesAttempted ? `${Math.round((100 * r.timesCorrect) / r.timesAttempted)}% of ${r.timesAttempted}` : "—"}</td>
                <td className="px-3 py-3"><StatusBadge status={r.status} /><p className="mt-1 text-xs text-muted">v{r.version}</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
