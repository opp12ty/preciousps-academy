"use client";

import { CheckCircle2, Download, FileUp, Loader2, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { studentImportPreviewAction, studentImportRowsAction } from "@/app/admin/actions";
import type { StudentImportPreview, StudentImportResult } from "@/server/services/student-import";
import { Alert, buttonClass, inputClass } from "../ui/primitives";

const BATCH = 10;
const TEMPLATE_HREF = "/api/v1/admin/student-template";

/**
 * Registers many students from one Excel sheet. Step 1 checks every row and creates nothing;
 * step 2 creates the accounts a few at a time, so a long list never has to finish in one request.
 */
export function StudentImport() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<StudentImportPreview | null>(null);
  const [busy, setBusy] = useState<"" | "check" | "import">("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(0);
  const [result, setResult] = useState<StudentImportResult | null>(null);
  const router = useRouter();

  const check = async () => {
    if (!file) return;
    setBusy("check");
    setError("");
    setPreview(null);
    setResult(null);
    setDone(0);
    const fd = new FormData();
    fd.set("file", file);
    const r = await studentImportPreviewAction(fd);
    if (r.ok) setPreview(r.data as StudentImportPreview);
    else setError(r.error);
    setBusy("");
  };

  const run = async () => {
    if (!preview) return;
    setBusy("import");
    setError("");
    const all: StudentImportResult = { created: [], failed: [] };
    for (let i = 0; i < preview.ready.length; i += BATCH) {
      const batch = preview.ready.slice(i, i + BATCH);
      const r = await studentImportRowsAction(batch);
      if (r.ok) {
        const d = r.data as StudentImportResult;
        all.created.push(...d.created);
        all.failed.push(...d.failed);
      } else all.failed.push(...batch.map((b) => ({ row: b.row, name: `${b.firstName} ${b.lastName}`, error: r.error })));
      setDone(Math.min(preview.ready.length, i + BATCH));
      setResult({ created: [...all.created], failed: [...all.failed] });
    }
    setBusy("");
    setPreview(null);
    router.refresh();
  };

  const download = () => {
    if (!result) return;
    const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const lines = [["Name", "Class", "Student ID", "Sign in with", "Temporary password"], ...result.created.map((c) => [c.name, c.className, c.studentNumber, c.login, c.temporaryPassword])];
    const blob = new Blob(["﻿" + lines.map((l) => l.map(esc).join(",")).join("\r\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "PreciousPS_new_students_login_slips.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="block flex-1 text-sm font-semibold text-navy-800">
          Excel file (.xlsx) or CSV
          <input type="file" accept=".xlsx,.csv" className={inputClass + " mt-1.5"} onChange={(e) => { setFile(e.target.files?.[0] ?? null); setPreview(null); setError(""); }} />
        </label>
        <button type="button" className={buttonClass("primary")} disabled={!file || busy !== ""} onClick={check}>
          {busy === "check" ? <Loader2 className="size-4 animate-spin" /> : <UploadCloud className="size-4" />} Upload &amp; check
        </button>
        <a href={TEMPLATE_HREF} className={buttonClass("secondary")}>
          <Download className="size-4" /> Template
        </a>
      </div>
      {error && <Alert tone="danger">{error}</Alert>}

      {preview && (
        <div className="space-y-4">
          <Alert tone={preview.ready.length ? "success" : "warning"} title={`${preview.ready.length} student(s) ready · ${preview.problems.length} row(s) with problems`}>
            Nothing has been created yet. {preview.problems.length > 0 && "Rows with problems are left out: correct them in the file and upload it again later for those students only. "}
            {preview.autoIds ? "Student IDs are given automatically." : "Student IDs are taken from the file."}
          </Alert>
          {preview.problems.length > 0 && (
            <div className="overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="bg-surface text-xs uppercase tracking-wide text-muted"><tr><th className="px-3 py-2">Row</th><th className="px-3 py-2">Student</th><th className="px-3 py-2">What to correct</th></tr></thead>
                <tbody className="divide-y divide-line">
                  {preview.problems.slice(0, 200).map((p) => (
                    <tr key={p.row} className="align-top"><td className="px-3 py-2 font-mono text-xs">{p.row}</td><td className="px-3 py-2 font-semibold text-navy-800">{p.name}</td><td className="px-3 py-2 text-danger-600">{p.issues.join(" ")}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {preview.ready.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" className={buttonClass("navy")} disabled={busy !== ""} onClick={run}>
                {busy === "import" ? <Loader2 className="size-4 animate-spin" /> : <FileUp className="size-4" />} Create {preview.ready.length} account(s)
              </button>
              {busy === "import" && <p className="text-sm font-semibold text-navy-800" role="status">{done} of {preview.ready.length} done. Keep this page open.</p>}
            </div>
          )}
        </div>
      )}

      {result && busy === "" && (
        <div className="space-y-3">
          <Alert tone={result.failed.length ? "warning" : "success"} title={`${result.created.length} account(s) created${result.failed.length ? ` · ${result.failed.length} failed` : ""}`}>
            <span className="inline-flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden /> The temporary passwords below are shown once only. Download the list now and give each student their own line. Every student must choose a new password at first sign-in.</span>
          </Alert>
          {result.created.length > 0 && (
            <>
              <button type="button" className={buttonClass("primary", "sm")} onClick={download}><Download className="size-4" /> Download login slips (CSV)</button>
              <div className="scroll-75 overflow-x-auto rounded-xl border border-gold-400/40 bg-gold-50">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead className="text-xs uppercase tracking-wide text-muted"><tr><th className="px-3 py-2">Student</th><th className="px-3 py-2">Class</th><th className="px-3 py-2">Student ID</th><th className="px-3 py-2">Sign in with</th><th className="px-3 py-2">Temporary password</th></tr></thead>
                  <tbody className="divide-y divide-gold-400/30">
                    {result.created.map((c) => (
                      <tr key={c.row}><td className="px-3 py-2 font-semibold text-navy-800">{c.name}</td><td className="px-3 py-2">{c.className}</td><td className="px-3 py-2 font-mono text-xs">{c.studentNumber}</td><td className="px-3 py-2 font-mono text-xs">{c.login}</td><td className="px-3 py-2 font-mono text-xs font-bold">{c.temporaryPassword}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {result.failed.length > 0 && (
            <ul className="space-y-1 rounded-xl border border-red-200 bg-danger-50 p-3 text-sm text-danger-600">
              {result.failed.map((f) => <li key={f.row}>Row {f.row}, {f.name}: {f.error}</li>)}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
