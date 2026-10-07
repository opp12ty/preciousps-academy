"use client";

import { Download, Eye, KeyRound } from "lucide-react";
import { useState } from "react";
import { codeEntitlementsAction, codeStatusAction, generateCodesAction, revealCodeAction } from "@/app/admin/actions";
import { FEATURES, FEATURE_KEYS, STANDARD_FEATURES, type Feature } from "@/core/features";
import { ActionForm, SubmitButton, TextField, SelectField } from "../ui/form";
import { ConfirmAction, RevealOnce } from "../ui/interactive";
import { buttonClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

export function GenerateCodes({ defaultDays, maxBulk, canPremium }: { defaultDays: number; maxBulk: number; canPremium?: boolean }) {
  const [result, setResult] = useState<{ batchId: string; codes: string[] } | null>(null);
  const [audience, setAudience] = useState("STUDENT");
  const [made, setMade] = useState("STUDENT");
  const forParent = audience === "PARENT";
  return (
    <div className="space-y-4">
      <ActionForm action={generateCodesAction} onSuccess={(r) => { if (r.ok) { setMade(audience); setResult(r.data as { batchId: string; codes: string[] }); } }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[10rem_7rem_8rem_11rem_1fr_auto] lg:items-end">
        <SelectField label="For" name="audience" value={audience} onChange={(e) => setAudience(e.target.value)} options={[{ value: "STUDENT", label: "Students" }, { value: "PARENT", label: "Parents / guardians" }]} />
        <TextField label="How many" name="count" type="number" min={1} max={maxBulk} defaultValue="1" required />
        <TextField label="Access days" name="durationDays" type="number" min={1} max={3650} defaultValue={String(defaultDays)} required />
        {forParent ? <input type="hidden" name="tier" value="STANDARD" /> : <SelectField label="Type" name="tier" defaultValue="STANDARD" options={[{ value: "STANDARD", label: "Standard" }, ...(canPremium ? [{ value: "PREMIUM", label: "Premium (international)" }] : [])]} />}
        <TextField label="Note / batch label (optional)" name="note" placeholder="e.g. SS3 Science — October" />
        <SubmitButton pendingText="Generating…">
          <KeyRound className="size-4" /> Generate
        </SubmitButton>
        {forParent ? <p className="col-span-full text-xs text-muted">A parent code opens the parent portal for the number of days above, starting when the parent enters it. One code, one parent account. It cannot be used on a student account.</p> : <div className="col-span-full"><FeaturePicker canPremium={canPremium} /></div>}
      </ActionForm>
      {result && (
        <div className="space-y-2">
          <RevealOnce title={`${result.codes.length} new ${made === "PARENT" ? "parent " : ""}code(s) — UNUSED until a ${made === "PARENT" ? "parent" : "student"} activates`} values={result.codes} note={`Codes are stored encrypted. Access starts when a ${made === "PARENT" ? "parent" : "student"} first activates a code, not now.`} />
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

/**
 * Feature ticks for one central access code. Left on "standard set", a code opens every ordinary
 * feature (this is how all earlier codes behave); ticking "choose features" limits it to those ticked.
 */
export function FeaturePicker({ initial, hub, canPremium }: { initial?: string[] | null; hub?: { session: number | null; cooldown: number | null; unlimited: boolean }; canPremium?: boolean }) {
  const [custom, setCustom] = useState(Boolean(initial));
  const on = (f: Feature) => (initial ? initial.includes(f) : STANDARD_FEATURES.includes(f));
  return (
    <details className="rounded-xl border border-line bg-surface p-3" open={Boolean(initial)}>
      <summary className="cursor-pointer text-sm font-semibold text-navy-800">Features this code opens{custom ? "" : " (standard set)"}</summary>
      <label className="mt-3 flex items-center gap-2 text-sm font-semibold text-navy-800">
        <input type="checkbox" name="customFeatures" checked={custom} onChange={(e) => setCustom(e.target.checked)} className="size-4 accent-royal-600" /> Choose the features myself
      </label>
      <div className="mt-2 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURE_KEYS.filter((f) => f !== "INTERNATIONAL" || canPremium).map((f) => (
          <label key={f} className={`flex items-start gap-2 rounded-lg bg-white p-2 text-sm ring-1 ring-line ${custom ? "" : "opacity-60"}`} title={FEATURES[f].description}>
            <input type="checkbox" name="features" value={f} defaultChecked={on(f)} disabled={!custom} className="mt-0.5 size-4 accent-royal-600" />
            <span><span className="font-semibold text-navy-800">{FEATURES[f].label}</span><span className="block text-xs text-muted">{FEATURES[f].group}</span></span>
          </label>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <TextField label="Knowledge Hub session (minutes)" name="hubSessionMinutes" type="number" min={5} max={600} placeholder="School default" defaultValue={hub?.session?.toString() ?? ""} />
        <TextField label="Knowledge Hub cooldown (minutes)" name="hubCooldownMinutes" type="number" min={0} max={1440} placeholder="School default" defaultValue={hub?.cooldown?.toString() ?? ""} />
        <label className="flex items-end gap-2 pb-2.5 text-sm font-semibold text-navy-800"><input type="checkbox" name="hubUnlimited" defaultChecked={hub?.unlimited} className="size-4 accent-royal-600" /> Unlimited Knowledge Hub</label>
      </div>
    </details>
  );
}

export function CodeFeaturesForm({ id, features, hub, canPremium }: { id: string; features: string[] | null; hub: { session: number | null; cooldown: number | null; unlimited: boolean }; canPremium?: boolean }) {
  return (
    <ActionForm action={codeEntitlementsAction.bind(null, id)} className="space-y-3" successMessage="Features updated.">
      <FeaturePicker initial={features} hub={hub} canPremium={canPremium} />
      <SubmitButton size="sm">Save features</SubmitButton>
    </ActionForm>
  );
}
