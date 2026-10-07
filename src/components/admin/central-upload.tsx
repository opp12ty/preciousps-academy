"use client";

import { CheckCircle2, Download, FileUp, Loader2, UploadCloud, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { approvePackAction, centralExtrasAction, centralPreviewAction, commitPackAction, publishPackAction } from "@/app/admin/actions";
import type { CentralReport } from "@/server/services/central";
import { Alert, Badge, buttonClass, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

type Step = "waiting" | "working" | "done" | "failed";
const WORD_LABEL = { WORD: "Dictionary words", IDIOM: "Idioms", CLICHE: "Clichés", PHRASAL_VERB: "Phrasal verbs" } as const;

/**
 * Upload box for the central workbook. Step 1 checks the file; step 2 imports it one subject at
 * a time, so a large workbook never has to finish inside a single request.
 */
export function CentralUpload({ templateHref, templateLabel = "Download the Excel template", note }: { templateHref: string; templateLabel?: string; note?: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [report, setReport] = useState<CentralReport | null>(null);
  const [busy, setBusy] = useState<"" | "check" | "import">("");
  const [error, setError] = useState("");
  const [publish, setPublish] = useState(false);
  const [progress, setProgress] = useState<Record<string, { step: Step; note?: string }>>({});
  const [extras, setExtras] = useState<string>("");
  const [finished, setFinished] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const form = () => {
    const fd = new FormData();
    if (file) fd.set("file", file);
    return fd;
  };

  const check = async () => {
    if (!file) return;
    setBusy("check");
    setError("");
    setReport(null);
    setProgress({});
    setExtras("");
    setFinished(false);
    const r = await centralPreviewAction(form());
    if (r.ok) setReport(r.data as CentralReport);
    else setError(r.error);
    setBusy("");
  };

  const ready = report?.subjects.filter((s) => s.importId && !s.errors.length) ?? [];
  const wordTotal = report ? Object.values(report.words.counts).reduce((a, b) => a + b, 0) : 0;
  const extrasReady = Boolean(report && ((report.words.allowed && wordTotal > 0) || (report.resources.allowed && report.resources.count > 0) || (report.hub.allowed && report.hub.articles + report.hub.questions > 0)));

  const run = async () => {
    if (!report) return;
    setBusy("import");
    for (const s of ready) {
      const mark = (step: Step, note?: string) => setProgress((p) => ({ ...p, [s.ref]: { step, note } }));
      mark("working", "Importing…");
      const c = await commitPackAction(s.importId!);
      if (!c.ok) {
        mark("failed", c.error);
        continue;
      }
      if (publish && report.canReview) {
        mark("working", "Approving questions…");
        const a = await approvePackAction(s.importId!);
        if (!a.ok) {
          mark("failed", `Imported, but the questions could not be approved: ${a.error}`);
          continue;
        }
        mark("working", "Publishing…");
        const p = await publishPackAction(s.importId!);
        mark(p.ok ? "done" : "failed", p.ok ? "Imported, approved and published" : `Imported and approved, but not published: ${p.error}`);
      } else mark("done", "Imported. Approve and publish it on its Content Pack page.");
    }
    if (extrasReady) {
      const r = await centralExtrasAction(form());
      if (r.ok) {
        const d = r.data as { wordsAdded: number; wordsUpdated: number; resourcesAdded: number; resourcesSkipped: number; articlesAdded: number; questionsAdded: number; hubSkipped: number };
        setExtras(`${d.wordsAdded} word(s) and phrase(s) added, ${d.wordsUpdated} updated; ${d.resourcesAdded} resource(s) added${d.resourcesSkipped ? `, ${d.resourcesSkipped} already there or not accepted` : ""}; ${d.articlesAdded} article(s) added for review, ${d.questionsAdded} quiz question(s) added${d.hubSkipped ? `, ${d.hubSkipped} already there` : ""}.`);
      } else setExtras(`Study materials and resources were not imported: ${r.error}`);
    }
    setBusy("");
    setFinished(true);
    toast("success", "Upload finished. See the result beside each line.");
    router.refresh();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <label className="min-w-[16rem] flex-1">
          <span className="mb-1.5 block text-sm font-semibold text-navy-800">Excel workbook (.xlsx)</span>
          <input type="file" accept=".xlsx" onChange={(e) => { setFile(e.target.files?.[0] ?? null); setReport(null); setFinished(false); }} className={`${inputClass} file:mr-3 file:rounded-lg file:border-0 file:bg-royal-50 file:px-3 file:py-1.5 file:font-semibold file:text-royal-700`} />
        </label>
        <button type="button" disabled={!file || Boolean(busy)} onClick={check} className={buttonClass("primary")}>
          {busy === "check" ? <Loader2 className="size-4 animate-spin" /> : <FileUp className="size-4" />} {busy === "check" ? "Checking every row…" : "Upload & check"}
        </button>
        <a href={templateHref} className={buttonClass("secondary")}><Download className="size-4" /> {templateLabel}</a>
      </div>
      {note && <p className="text-xs text-muted">{note}</p>}
      {error && <Alert tone="danger">{error}</Alert>}

      {report && (
        <div className="space-y-4 rounded-2xl border border-line bg-surface p-4">
          {report.empty && <Alert tone="warning">No filled rows were found in this workbook. Check that the sheet names and the column headings are the same as in the template.</Alert>}
          {report.curriculumIssues.length > 0 && <Issues title="Rows that could not be placed" issues={report.curriculumIssues} />}

          {report.subjects.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-bold text-navy-800">Lessons and questions, by subject</p>
              <ul className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
                {report.subjects.map((s) => {
                  const p = progress[s.ref];
                  return (
                    <li key={s.ref} className="p-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-semibold text-navy-800">{s.subject ?? `“${s.ref}” (unknown subject)`}</p>
                        {p ? (
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                            {p.step === "working" && <Loader2 className="size-4 animate-spin text-royal-600" />}
                            {p.step === "done" && <CheckCircle2 className="size-4 text-success-600" />}
                            {p.step === "failed" && <XCircle className="size-4 text-danger-600" />}
                            <span className={p.step === "failed" ? "text-danger-600" : "text-navy-800"}>{p.note}</span>
                          </span>
                        ) : s.errors.length ? (
                          <Badge tone="red">{s.errors.length} problem(s) — will be skipped</Badge>
                        ) : (
                          <Badge tone="green">Ready</Badge>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-muted">
                        {s.counts.topics} topics · {s.counts.lessons} lessons · {s.counts.questions} questions · {s.counts.exams} exams · {s.counts.assignments} assignments{s.warnings ? ` · ${s.warnings} note(s)` : ""}
                        {s.importId && p?.step === "done" && <> · <Link href={`/admin/content-packs/${s.importId}`} className="font-semibold text-royal-600 hover:underline">Open</Link></>}
                      </p>
                      {s.errors.length > 0 && <Issues issues={s.errors} />}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {(wordTotal > 0 || report.words.issues.length > 0) && (
            <div>
              <p className="mb-1 text-sm font-bold text-navy-800">Study materials</p>
              <p className="text-sm text-navy-800">{(Object.keys(WORD_LABEL) as (keyof typeof WORD_LABEL)[]).filter((k) => report.words.counts[k]).map((k) => `${WORD_LABEL[k]}: ${report.words.counts[k]}`).join(" · ") || "No valid rows"}</p>
              {!report.words.allowed && <p className="text-xs font-semibold text-danger-600">Your account cannot change the dictionary, so these rows will be skipped.</p>}
              {report.words.issues.length > 0 && <Issues issues={report.words.issues} />}
            </div>
          )}

          {(report.resources.count > 0 || report.resources.issues.length > 0) && (
            <div>
              <p className="mb-1 text-sm font-bold text-navy-800">Resources (links)</p>
              <p className="text-sm text-navy-800">{report.resources.count} link(s) ready</p>
              {!report.resources.allowed && <p className="text-xs font-semibold text-danger-600">Your account cannot change the Resource Centre, so these rows will be skipped.</p>}
              {report.resources.issues.length > 0 && <Issues issues={report.resources.issues} />}
            </div>
          )}

          {(report.hub.articles + report.hub.questions > 0 || report.hub.issues.length > 0) && (
            <div>
              <p className="mb-1 text-sm font-bold text-navy-800">Knowledge Hub and Parent Learning</p>
              <p className="text-sm text-navy-800">{report.hub.articles} article(s) (they will wait in Review) · {report.hub.questions} quiz question(s)</p>
              {!report.hub.allowed && <p className="text-xs font-semibold text-danger-600">Your account cannot change this content, so these rows will be skipped.</p>}
              {report.hub.issues.length > 0 && <Issues issues={report.hub.issues} />}
            </div>
          )}

          {extras && <Alert tone="info">{extras}</Alert>}

          {!finished && (ready.length > 0 || extrasReady) && (
            <div className="flex flex-wrap items-center gap-4 border-t border-line pt-4">
              {ready.length > 0 && report.canReview && (
                <label className="flex items-start gap-2 text-sm text-navy-800">
                  <input type="checkbox" className="mt-0.5 size-4 accent-royal-600" checked={publish} onChange={(e) => setPublish(e.target.checked)} />
                  <span><strong>Approve and publish straight away.</strong> Students will see the lessons, tests and assignments at once. Leave unticked to review them first.</span>
                </label>
              )}
              <button type="button" disabled={Boolean(busy)} onClick={run} className={buttonClass("primary")}>
                {busy === "import" ? <Loader2 className="size-4 animate-spin" /> : <UploadCloud className="size-4" />} {busy === "import" ? "Importing — keep this page open" : "Import everything that passed"}
              </button>
            </div>
          )}
          {finished && <Alert tone="success">Finished. Lines marked with a problem were left out; correct those rows in the workbook and upload it again. Rows already imported are not duplicated.</Alert>}
        </div>
      )}
    </div>
  );
}

function Issues({ title, issues }: { title?: string; issues: { sheet: string; row: number; message: string }[] }) {
  return (
    <div className="mt-2 rounded-xl border border-danger-600/20 bg-danger-50 p-3">
      {title && <p className="mb-1 text-sm font-bold text-danger-600">{title}</p>}
      <ul className="max-h-48 space-y-0.5 overflow-y-auto text-xs text-danger-600">
        {issues.slice(0, 50).map((x, i) => (
          <li key={i}><strong>{x.sheet}{x.row ? `, row ${x.row}` : ""}:</strong> {x.message}</li>
        ))}
        {issues.length > 50 && <li>…and {issues.length - 50} more.</li>}
      </ul>
    </div>
  );
}
