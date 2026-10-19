"use client";

import { Loader2, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { saveSettingAction, updateUnusedDurationAction } from "@/app/admin/actions";
import type { SettingKey } from "@/server/settings";
import { buttonClass, cx, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

export type FieldSpec =
  | { key: string; label: string; type: "text" | "email" | "tel" | "url"; hint?: string; maxLength?: number }
  | { key: string; label: string; type: "textarea"; hint?: string }
  | { key: string; label: string; type: "number"; min?: number; max?: number; step?: number; hint?: string }
  | { key: string; label: string; type: "bool"; hint?: string; disabled?: boolean }
  | { key: string; label: string; type: "select"; options: { value: string; label: string }[]; hint?: string }
  | { key: string; label: string; type: "numberList"; hint?: string };

/** Typed editor for one settings section; the server re-validates with Zod. */
export function SettingsForm({ settingKey, initial, fields, columns = 2 }: { settingKey: SettingKey; initial: Record<string, unknown>; fields: FieldSpec[]; columns?: 1 | 2 | 3 }) {
  const [values, setValues] = useState<Record<string, unknown>>(initial);
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const toast = useToast();
  const router = useRouter();
  const set = (k: string, v: unknown) => setValues((x) => ({ ...x, [k]: v }));
  const grid = columns === 1 ? "" : columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        start(async () => {
          setError(null);
          const r = await saveSettingAction(settingKey, values);
          if (r.ok) {
            toast("success", r.message ?? "Saved.");
            router.refresh();
          } else setError(r.error);
        });
      }}
      className="space-y-4"
    >
      <div className={cx("grid gap-4", grid)}>
        {fields.map((f) => {
          const id = `${settingKey}-${f.key}`;
          const v = values[f.key];
          if (f.type === "bool")
            return (
              <label key={f.key} htmlFor={id} className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-white p-3.5">
                <input id={id} type="checkbox" className="mt-0.5 size-5 accent-royal-600" checked={Boolean(v)} disabled={f.disabled} onChange={(e) => set(f.key, e.target.checked)} />
                <span>
                  <span className="block text-sm font-semibold text-navy-800">{f.label}</span>
                  {f.hint && <span className="block text-xs text-muted">{f.hint}</span>}
                </span>
              </label>
            );
          return (
            <label key={f.key} htmlFor={id} className={cx("block", f.type === "textarea" && "sm:col-span-2")}>
              <span className="mb-1.5 block text-sm font-semibold text-navy-800">{f.label}</span>
              {f.type === "textarea" ? (
                <textarea id={id} rows={3} className={inputClass} value={String(v ?? "")} onChange={(e) => set(f.key, e.target.value)} />
              ) : f.type === "select" ? (
                <select id={id} className={inputClass} value={String(v ?? "")} onChange={(e) => set(f.key, e.target.value)}>
                  {f.options.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              ) : f.type === "number" ? (
                <input id={id} type="number" className={inputClass} min={f.min} max={f.max} step={f.step ?? 1} value={v === null || v === undefined ? "" : String(v)} onChange={(e) => set(f.key, e.target.value === "" ? null : Number(e.target.value))} />
              ) : f.type === "numberList" ? (
                <input id={id} className={inputClass} value={Array.isArray(v) ? v.join(", ") : ""} onChange={(e) => set(f.key, e.target.value.split(/[,\s]+/).filter(Boolean).map(Number).filter((n) => !Number.isNaN(n)))} />
              ) : (
                <input id={id} type={f.type} className={inputClass} maxLength={f.maxLength} value={String(v ?? "")} onChange={(e) => set(f.key, e.target.value)} />
              )}
              {f.hint && <span className="mt-1 block text-xs text-muted">{f.hint}</span>}
            </label>
          );
        })}
      </div>
      {error && (
        <p role="alert" className="rounded-xl bg-danger-50 px-4 py-3 text-sm text-danger-600">
          {error}
        </p>
      )}
      <button type="submit" disabled={pending} className={buttonClass("primary")}>
        {pending ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Save
      </button>
    </form>
  );
}

export function DefaultDaysForm({ current, allowMultiple, maxBulk }: { current: number; allowMultiple: boolean; maxBulk: number }) {
  const [days, setDays] = useState(current);
  const [applyUnused, setApplyUnused] = useState(false);
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {[30, 45, 60, 90, 120, 180, 365].map((d) => (
          <button key={d} type="button" onClick={() => setDays(d)} className={buttonClass(days === d ? "primary" : "secondary", "sm")}>
            {d} days
          </button>
        ))}
        <input type="number" min={1} max={3650} value={days} onChange={(e) => setDays(Number(e.target.value))} className={cx(inputClass, "w-28")} aria-label="Custom number of days" />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" className="size-4 accent-royal-600" checked={applyUnused} onChange={(e) => setApplyUnused(e.target.checked)} /> Also apply to all existing <strong>unused</strong> codes
      </label>
      <button
        type="button"
        disabled={pending}
        className={buttonClass("primary")}
        onClick={() =>
          start(async () => {
            const r = await saveSettingAction("accessCodes", { defaultDays: days, allowMultipleActive: allowMultiple, maxBulk });
            if (!r.ok) return toast("error", r.error);
            if (applyUnused) {
              const u = await updateUnusedDurationAction(days);
              if (!u.ok) return toast("error", u.error);
              toast("success", `Default set to ${days} days; ${(u.data as { count: number }).count} unused code(s) updated.`);
            } else toast("success", `Default access period set to ${days} days.`);
            router.refresh();
          })
        }
      >
        {pending && <Loader2 className="size-4 animate-spin" />} Save default
      </button>
    </div>
  );
}
