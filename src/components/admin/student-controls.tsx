"use client";

import { Ban, CalendarPlus, KeyRound, Link2, LogOut, RotateCcw, ShieldAlert, Trash2, UserCheck } from "lucide-react";
import { useState } from "react";
import {
  adjustAccessAction,
  assignAccessAction,
  forcePasswordChangeAction,
  issueResetLinkAction,
  removeStudentAction,
  revokeUserSessionsAction,
  setAccountStatusAction,
  tempPasswordAction,
} from "@/app/admin/actions";
import { ConfirmAction, Modal, RevealOnce } from "../ui/interactive";
import { buttonClass, cx, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";
import { useRouter } from "next/navigation";

export function StudentSecurityControls({ userId, status, canSecurity, canManage, isSuper }: { userId: string; status: string; canSecurity: boolean; canManage: boolean; isSuper: boolean }) {
  const [secret, setSecret] = useState<{ title: string; values: string[]; note: string } | null>(null);
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {canSecurity && (
          <>
            <ConfirmAction
              label="Force password reset"
              icon={<Link2 className="size-4" />}
              title="Issue a password reset link?"
              description="All sessions are signed out and the student must set a new password. A one-time link (valid 24h) is shown to you and e-mailed if e-mail is configured."
              confirmVariant="primary"
              confirmLabel="Issue link"
              run={async () => {
                const r = await issueResetLinkAction(userId);
                if (r.ok && r.data) setSecret({ title: "One-time password reset link", values: [`${location.origin}${(r.data as { url: string }).url}`], note: "Give this link to the student through a trusted channel. It works once and expires in 24 hours." });
                return r;
              }}
            />
            <ConfirmAction
              label="Temporary password"
              icon={<KeyRound className="size-4" />}
              title="Generate a temporary password?"
              description="Only when operationally necessary. The password is shown to you once, stored only as a secure hash, and must be changed at the next sign-in. This is recorded in the audit log."
              reason
              confirmVariant="primary"
              confirmLabel="Generate"
              run={async ({ reason }) => {
                const r = await tempPasswordAction(userId, reason);
                if (r.ok && r.data) setSecret({ title: "Temporary password (shown once)", values: [(r.data as { temporaryPassword: string }).temporaryPassword], note: "The student must change it at next sign-in. It cannot be displayed again." });
                return r;
              }}
            />
            <ConfirmAction label="Force change at next login" icon={<RotateCcw className="size-4" />} title="Require a password change?" description="The student keeps their current password but must change it the next time they sign in." confirmVariant="primary" run={() => forcePasswordChangeAction(userId)} />
            <ConfirmAction label="Revoke all sessions" icon={<LogOut className="size-4" />} title="Sign the student out everywhere?" description="Every active session on every device will be ended immediately." run={() => revokeUserSessionsAction(userId)} />
          </>
        )}
        {canManage &&
          (status === "SUSPENDED" ? (
            <ConfirmAction label="Reactivate account" icon={<UserCheck className="size-4" />} title="Reactivate this account?" reason confirmVariant="primary" run={({ reason }) => setAccountStatusAction(userId, "ACTIVE", reason)} />
          ) : (
            <ConfirmAction label="Suspend account" variant="danger-outline" icon={<Ban className="size-4" />} title="Suspend this account?" description="The student is signed out immediately and cannot sign in until reactivated." reason run={({ reason }) => setAccountStatusAction(userId, "SUSPENDED", reason)} />
          ))}
        {isSuper && <ConfirmAction label="Remove" variant="danger-outline" icon={<Trash2 className="size-4" />} title="Remove this student?" description="The account is deactivated and hidden (soft-deleted). Historical results stay in the audit trail." reason run={({ reason }) => removeStudentAction(userId, reason)} />}
      </div>
      {secret && <RevealOnce title={secret.title} values={secret.values} note={secret.note} />}
      <p className="flex items-center gap-1.5 text-xs text-muted">
        <ShieldAlert className="size-3.5" /> Passwords are stored as Argon2id hashes and can never be viewed.
      </p>
    </div>
  );
}

const ACTIONS = [
  { v: "EXTEND", l: "Extend by days", days: true },
  { v: "REDUCE", l: "Reduce by days", days: true },
  { v: "SET_DURATION", l: "Change total days (from activation)", days: true },
  { v: "SET_EXPIRY", l: "Set custom expiry date", date: true },
  { v: "SUSPEND", l: "Suspend access" },
  { v: "RESTORE", l: "Restore suspended access" },
  { v: "END", l: "End access now" },
  { v: "REVOKE", l: "Revoke access" },
  { v: "REACTIVATE", l: "Reactivate revoked/ended access" },
] as const;

export function AdjustAccessButton({ periodId, label = "Adjust access", defaultAction = "EXTEND" }: { periodId: string; label?: string; defaultAction?: (typeof ACTIONS)[number]["v"] }) {
  const [open, setOpen] = useState(false);
  const [act, setAct] = useState<string>(defaultAction);
  const [days, setDays] = useState(30);
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const def = ACTIONS.find((a) => a.v === act)!;
  return (
    <>
      <button type="button" className={buttonClass("secondary", "sm")} onClick={() => setOpen(true)}>
        <CalendarPlus className="size-4" /> {label}
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Adjust access period">
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-navy-800">
            Action
            <select className={cx(inputClass, "mt-1.5")} value={act} onChange={(e) => setAct(e.target.value)}>
              {ACTIONS.map((a) => (
                <option key={a.v} value={a.v}>
                  {a.l}
                </option>
              ))}
            </select>
          </label>
          {"days" in def && def.days && (
            <label className="block text-sm font-semibold text-navy-800">
              Days
              <div className="mt-1.5 flex flex-wrap gap-2">
                {[15, 30, 45, 60, 90, 120, 180, 365].map((d) => (
                  <button key={d} type="button" onClick={() => setDays(d)} className={buttonClass(days === d ? "primary" : "secondary", "sm")}>
                    {d}
                  </button>
                ))}
                <input type="number" min={1} max={3650} value={days} onChange={(e) => setDays(Number(e.target.value))} className={cx(inputClass, "w-28")} aria-label="Custom days" />
              </div>
            </label>
          )}
          {"date" in def && def.date && (
            <label className="block text-sm font-semibold text-navy-800">
              New expiry (WAT)
              <input type="datetime-local" className={cx(inputClass, "mt-1.5")} value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
          )}
          <label className="block text-sm font-semibold text-navy-800">
            Reason (recorded in the audit log)
            <textarea className={cx(inputClass, "mt-1.5")} rows={2} value={reason} onChange={(e) => setReason(e.target.value)} />
          </label>
          {error && <p className="rounded-lg bg-danger-50 px-3 py-2 text-sm text-danger-600">{error}</p>}
          <div className="flex justify-end gap-2">
            <button type="button" className={buttonClass("secondary")} onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button
              type="button"
              disabled={pending || reason.trim().length < 3}
              className={buttonClass("primary")}
              onClick={async () => {
                setPending(true);
                setError(null);
                const payload: Record<string, unknown> = { action: act, reason };
                if ("days" in def && def.days) payload.days = days;
                if ("date" in def && def.date) payload.expiresAt = date ? new Date(`${date}:00+01:00`).toISOString() : "";
                const r = await adjustAccessAction(periodId, payload);
                setPending(false);
                if (r.ok) {
                  toast("success", r.message ?? "Updated.");
                  setOpen(false);
                  router.refresh();
                } else setError(r.error);
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function AssignAccessButton({ userId, defaultDays }: { userId: string; defaultDays: number }) {
  return (
    <ConfirmAction
      label="Generate & assign access"
      variant="primary"
      icon={<KeyRound className="size-4" />}
      title="Assign a new access period"
      description="A new secure code is generated and activated for this student immediately. It is rejected if the student already has active access."
      confirmVariant="primary"
      confirmLabel="Assign access"
      reason
      extra={{ label: "Days", type: "number", defaultValue: String(defaultDays) }}
      run={({ reason, extra }) => assignAccessAction(userId, Number(extra) || undefined, reason)}
    />
  );
}
