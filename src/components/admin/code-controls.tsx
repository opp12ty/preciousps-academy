"use client";

import { Download, Eye, KeyRound } from "lucide-react";
import { useState } from "react";
import { codeStatusAction, generateCodesAction, revealCodeAction } from "@/app/admin/actions";
import { ActionForm, SubmitButton, TextField } from "../ui/form";
import { ConfirmAction, RevealOnce } from "../ui/interactive";
import { buttonClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

export function GenerateCodes({ defaultDays, maxBulk }: { defaultDays: number; maxBulk: number }) {
  const [result, setResult] = useState<{ batchId: string; codes: string[] } | null>(null);
  return (
    <div className="space-y-4">
      <ActionForm action={generateCodesAction} onSuccess={(r) => r.ok && setResult(r.data as { batchId: string; codes: string[] })} className="grid gap-3 sm:grid-cols-[8rem_9rem_1fr_auto] sm:items-end">
        <TextField label="How many" name="count" type="number" min={1} max={maxBulk} defaultValue="1" required />
        <TextField label="Access days" name="durationDays" type="number" min={1} max={3650} defaultValue={String(defaultDays)} required />
        <TextField label="Note / batch label (optional)" name="note" placeholder="e.g. SS3 Science — October" />
        <SubmitButton pendingText="Generating…">
          <KeyRound className="size-4" /> Generate
        </SubmitButton>
      </ActionForm>
      {result && (
        <div className="space-y-2">
          <RevealOnce title={`${result.codes.length} new code(s) — UNUSED until a student activates`} values={result.codes} note="Codes are stored encrypted. Access starts when a student first activates a code, not now." />
          <a href={`/api/v1/admin/export/codes?batchId=${result.batchId}&reveal=1&format=xlsx`} className={buttonClass("secondary", "sm")}>
            <Download className="size-4" /> Download this batch (Excel)
          </a>
        </div>
      )}
    </div>
  );
}

export function CodeRowActions({ id, status, activated, canReveal }: { id: string; status: string; activated: boolean; canReveal: boolean }) {
  const [code, setCode] = useState<string | null>(null);
  const toast = useToast();
  return (
    <div className="flex flex-wrap justify-end gap-1.5">
      {canReveal && (
        code ? (
          <code className="rounded bg-gold-50 px-2 py-1 font-mono text-xs font-bold text-navy-800 ring-1 ring-gold-400/40">{code}</code>
        ) : (
          <button
            type="button"
            className={buttonClass("ghost", "sm")}
            onClick={async () => {
              const r = await revealCodeAction(id);
              if (r.ok) setCode(r.data as string);
              else toast("error", r.error);
            }}
          >
            <Eye className="size-4" /> Reveal
          </button>
        )
      )}
      {(status === "UNUSED" || status === "ACTIVE") && <ConfirmAction label="Suspend" title="Suspend this code?" description={activated ? "The student's access is suspended until restored." : "The code cannot be activated while suspended."} reason run={({ reason }) => codeStatusAction(id, "SUSPEND", reason)} />}
      {status !== "REVOKED" && status !== "EXPIRED" && <ConfirmAction label="Revoke" variant="danger-outline" title="Revoke this code?" description="Revoking permanently disables the code (and ends access if it was activated)." reason run={({ reason }) => codeStatusAction(id, "REVOKE", reason)} />}
      {(status === "SUSPENDED" || status === "REVOKED") && <ConfirmAction label="Restore" title="Restore this code?" reason confirmVariant="primary" run={({ reason }) => codeStatusAction(id, "RESTORE", reason)} />}
    </div>
  );
}
