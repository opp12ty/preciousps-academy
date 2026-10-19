"use client";

import { AlertTriangle, CheckCircle2, Loader2, Pencil, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { commitImportAction, editImportItemAction } from "@/app/admin/actions";
import type { ImportItem } from "@/server/services/imports";
import { renderInlinePreview } from "./preview";
import { Modal } from "../ui/interactive";
import { Badge, buttonClass, cx, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

export function ImportPreview({ importId, items, committed, resource }: { importId: string; items: ImportItem[]; committed: boolean; resource?: { suggestedTitle: string } }) {
  const valid = items.filter((i) => !i.errors.length && !i.duplicateOf);
  const [sel, setSel] = useState<number[]>(valid.map((i) => i.index));
  const [editing, setEditing] = useState<ImportItem | null>(null);
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "valid" | "errors">("all");
  const shown = items.filter((i) => (filter === "valid" ? !i.errors.length && !i.duplicateOf : filter === "errors" ? i.errors.length > 0 : true));

  if (resource)
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted">
          This file will be added to the Resource Centre as <strong className="text-navy-800">“{resource.suggestedTitle}”</strong> in DRAFT, ready for review and publishing.
        </p>
        {!committed && (
          <button
            className={buttonClass("primary")}
            disabled={pending}
            onClick={() => start(async () => {
              const r = await commitImportAction(importId, "ALL_VALID");
              if (r.ok) { toast("success", "Added to the Resource Centre as a draft."); router.push("/admin/resources?status=DRAFT"); } else toast("error", r.error);
            })}
          >
            Add as Study Centre resource
          </button>
        )}
      </div>
    );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="blue">{items.length} found</Badge>
        <Badge tone="green">{valid.length} valid</Badge>
        <Badge tone="red">{items.filter((i) => i.errors.length).length} with errors</Badge>
        <Badge tone="amber">{items.filter((i) => i.duplicateOf).length} duplicates</Badge>
        <div className="ml-auto flex rounded-lg bg-surface p-0.5 text-xs font-semibold">
          {(["all", "valid", "errors"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={cx("rounded-md px-3 py-1 capitalize", filter === f ? "bg-white text-navy-800 shadow-sm" : "text-muted")}>{f}</button>
          ))}
        </div>
      </div>
      <ol className="space-y-3">
        {shown.map((it) => {
          const ok = !it.errors.length && !it.duplicateOf;
          return (
            <li key={it.index} className={cx("rounded-2xl border bg-white p-4", ok ? "border-line" : it.duplicateOf ? "border-amber-200" : "border-red-200")}>
              <div className="flex flex-wrap items-start gap-3">
                {!committed && <input type="checkbox" aria-label={`Include ${it.source}`} disabled={!ok} className="mt-1 size-5 accent-royal-600" checked={sel.includes(it.index)} onChange={() => setSel((x) => (x.includes(it.index) ? x.filter((y) => y !== it.index) : [...x, it.index]))} />}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted">
                    {it.source}
                    {it.subjectName ? ` · ${it.subjectName}` : ""}
                    {it.topicName ? ` · ${it.topicName}` : ""} · {it.difficulty.toLowerCase()} · {it.marks} mark(s)
                  </p>
                  <p className="mt-1 text-sm font-semibold text-navy-800" dangerouslySetInnerHTML={{ __html: renderInlinePreview(it.stem || "(empty)") }} />
                  <ul className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
                    {it.options.map((o) => (
                      <li key={o.label} className={cx("rounded-lg px-2.5 py-1", o.isCorrect ? "bg-success-50 font-semibold text-success-600 ring-1 ring-emerald-200" : "bg-surface")}>
                        {o.label}. <span dangerouslySetInnerHTML={{ __html: renderInlinePreview(o.text) }} /> {o.isCorrect && "✓"}
                      </li>
                    ))}
                  </ul>
                  {it.explanation && <p className="mt-2 text-xs text-muted">Explanation: {it.explanation}</p>}
                  {it.errors.map((e) => (
                    <p key={e} className="mt-2 flex items-start gap-1.5 text-xs font-semibold text-danger-600"><XCircle className="mt-0.5 size-3.5 shrink-0" /> {e}</p>
                  ))}
                  {it.warnings.map((w) => (
                    <p key={w} className="mt-1 flex items-start gap-1.5 text-xs text-warn-600"><AlertTriangle className="mt-0.5 size-3.5 shrink-0" /> {w}</p>
                  ))}
                  {ok && <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-success-600"><CheckCircle2 className="size-3.5" /> Ready to import</p>}
                </div>
                {!committed && <button type="button" onClick={() => setEditing(it)} className={buttonClass("secondary", "sm")}><Pencil className="size-4" /> Correct</button>}
              </div>
            </li>
          );
        })}
      </ol>
      {!committed && (
        <div className="sticky bottom-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-white/95 p-3 shadow-lift backdrop-blur">
          <p className="pl-2 text-sm text-muted">{sel.length} question(s) selected → will be imported as PENDING_REVIEW</p>
          <button
            className={buttonClass("primary")}
            disabled={pending || !sel.length}
            onClick={() => start(async () => {
              const r = await commitImportAction(importId, sel);
              if (r.ok) {
                const d = r.data as { imported: number; skipped: number };
                toast("success", `${d.imported} imported for review${d.skipped ? `, ${d.skipped} skipped` : ""}.`);
                router.push("/admin/questions?status=PENDING_REVIEW");
              } else toast("error", r.error);
            })}
          >
            {pending && <Loader2 className="size-4 animate-spin" />} Import selected
          </button>
        </div>
      )}
      {editing && <EditItem importId={importId} item={editing} onClose={() => setEditing(null)} />}
    </div>
  );
}

function EditItem({ importId, item, onClose }: { importId: string; item: ImportItem; onClose: () => void }) {
  const [stem, setStem] = useState(item.stem);
  const [opts, setOpts] = useState(item.options.length ? item.options : ["A", "B", "C", "D"].map((l) => ({ label: l, text: "", isCorrect: false })));
  const [explanation, setExplanation] = useState(item.explanation ?? "");
  const [difficulty, setDifficulty] = useState(item.difficulty);
  const [marks, setMarks] = useState(item.marks);
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  return (
    <Modal open onClose={onClose} title={`Correct ${item.source}`} wide>
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-navy-800">Question<textarea className={`${inputClass} mt-1`} rows={3} value={stem} onChange={(e) => setStem(e.target.value)} /></label>
        {opts.map((o, i) => (
          <div key={i} className="flex items-center gap-2">
            <input type="radio" name="correct" checked={o.isCorrect} onChange={() => setOpts((x) => x.map((y, j) => ({ ...y, isCorrect: j === i })))} className="size-5 accent-emerald-600" aria-label={`Option ${o.label} correct`} />
            <span className="w-5 font-bold">{o.label}</span>
            <input className={inputClass} value={o.text} onChange={(e) => setOpts((x) => x.map((y, j) => (j === i ? { ...y, text: e.target.value } : y)))} />
          </div>
        ))}
        <label className="block text-sm font-semibold text-navy-800">Explanation<textarea className={`${inputClass} mt-1`} rows={2} value={explanation} onChange={(e) => setExplanation(e.target.value)} /></label>
        <div className="flex gap-3">
          <label className="text-sm font-semibold text-navy-800">Difficulty<select className={`${inputClass} mt-1`} value={difficulty} onChange={(e) => setDifficulty(e.target.value as typeof difficulty)}><option>EASY</option><option>MEDIUM</option><option>HARD</option></select></label>
          <label className="text-sm font-semibold text-navy-800">Marks<input type="number" className={`${inputClass} mt-1 w-24`} value={marks} onChange={(e) => setMarks(Number(e.target.value))} /></label>
        </div>
        {error && <p className="rounded-lg bg-danger-50 px-3 py-2 text-sm text-danger-600">{error}</p>}
        <div className="flex justify-end gap-2">
          <button className={buttonClass("secondary")} onClick={onClose}>Cancel</button>
          <button
            className={buttonClass("primary")}
            disabled={pending}
            onClick={() => start(async () => {
              const r = await editImportItemAction(importId, item.index, { stem, options: opts.filter((o) => o.text.trim()), explanation, difficulty, marks, topicName: item.topicName });
              if (r.ok) { onClose(); router.refresh(); } else setError(r.error);
            })}
          >
            Save & re-validate
          </button>
        </div>
      </div>
    </Modal>
  );
}
