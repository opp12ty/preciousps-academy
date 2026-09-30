"use client";

/* eslint-disable @next/next/no-img-element */
import { Loader2, ShieldCheck, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { beginTotpAction, confirmTotpAction, disableTotpAction, regenerateRecoveryAction } from "@/app/admin/actions";
import { ConfirmAction, RevealOnce } from "../ui/interactive";
import { Badge, buttonClass, inputClass } from "../ui/primitives";

export function TwoFactorPanel({ enabled, mandatory }: { enabled: boolean; mandatory: boolean }) {
  const [setup, setSetup] = useState<{ secret: string; qr: string } | null>(null);
  const [code, setCode] = useState("");
  const [codes, setCodes] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const router = useRouter();

  if (codes)
    return (
      <div className="space-y-3">
        <RevealOnce title="Recovery codes — save them now" values={codes} note="Each code works once if you lose your phone. Store them somewhere safe (not on the same phone). They will not be shown again." />
        <button className={buttonClass("primary")} onClick={() => { setCodes(null); router.refresh(); }}>I have saved my codes</button>
      </div>
    );

  if (enabled)
    return (
      <div className="space-y-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-success-600"><ShieldCheck className="size-5" /> Two-factor authentication is on.</p>
        <div className="flex flex-wrap gap-2">
          <ConfirmAction label="Regenerate recovery codes" title="Replace your recovery codes?" description="Your old recovery codes will stop working immediately." confirmVariant="primary" run={async () => { const r = await regenerateRecoveryAction(); if (r.ok) setCodes((r.data as { recoveryCodes: string[] }).recoveryCodes); return r; }} />
          {!mandatory && <ConfirmAction label="Turn off 2FA" variant="danger-outline" title="Disable two-factor authentication?" description="Your account will be protected by password only." extra={{ label: "Confirm your password", type: "password" }} run={({ extra }) => disableTotpAction(extra)} />}
        </div>
        {mandatory && <p className="text-xs text-muted">2FA is mandatory for the Super Admin and cannot be turned off.</p>}
      </div>
    );

  return (
    <div className="space-y-4">
      {!setup ? (
        <>
          <p className="text-sm text-muted">Use an authenticator app (Google Authenticator, Microsoft Authenticator, Authy, 1Password…) to generate 6-digit codes.</p>
          <button className={buttonClass("primary")} disabled={pending} onClick={() => start(async () => { const r = await beginTotpAction(); if (r.ok) setSetup(r.data as { secret: string; qr: string }); else setError(r.error); })}>
            {pending ? <Loader2 className="size-4 animate-spin" /> : <Smartphone className="size-4" />} Set up two-factor authentication
          </button>
        </>
      ) : (
        <div className="grid gap-5 sm:grid-cols-[auto_1fr]">
          <img src={setup.qr} alt="QR code for your authenticator app" className="size-48 rounded-xl border border-line bg-white p-2" />
          <div className="space-y-3">
            <p className="text-sm">1. Scan the QR code with your authenticator app, or enter this key manually:</p>
            <code className="block break-all rounded-lg bg-surface px-3 py-2 font-mono text-sm font-bold text-navy-800">{setup.secret.replace(/(.{4})/g, "$1 ").trim()}</code>
            <p className="text-sm">2. Enter the 6-digit code shown in the app:</p>
            <div className="flex gap-2">
              <input className={`${inputClass} max-w-40 font-mono text-lg tracking-widest`} inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} aria-label="Authentication code" />
              <button className={buttonClass("primary")} disabled={pending || code.length !== 6} onClick={() => start(async () => { const r = await confirmTotpAction(code); if (r.ok) setCodes((r.data as { recoveryCodes: string[] }).recoveryCodes); else setError(r.error); })}>
                Verify & enable
              </button>
            </div>
          </div>
        </div>
      )}
      {error && <p className="rounded-lg bg-danger-50 px-3 py-2 text-sm text-danger-600">{error}</p>}
      <Badge tone="amber">Not enabled</Badge>
    </div>
  );
}
