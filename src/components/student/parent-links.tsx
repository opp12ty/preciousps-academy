"use client";

import { Check, Copy, Link2, Loader2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { createParentLinkAction, revokeParentLinkAction } from "@/app/student/actions";
import { buttonClass, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

export interface LinkView {
  id: string;
  label: string | null;
  expiresAt: string;
  revoked: boolean;
  views: number;
  lastViewedAt: string | null;
}

const fmt = (d: string) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium" }).format(new Date(d));

export function ParentLinks({ links }: { links: LinkView[] }) {
  const [pending, start] = useTransition();
  const [fresh, setFresh] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [label, setLabel] = useState("");
  const [days, setDays] = useState("30");
  const toast = useToast();
  const router = useRouter();

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("error", "Copy failed. Select the link and copy it manually.");
    }
  };

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-[1fr_9rem_auto]">
        <input className={inputClass} placeholder="Who is it for? e.g. Mum" value={label} onChange={(e) => setLabel(e.target.value)} maxLength={60} aria-label="Label" />
        <select className={inputClass} value={days} onChange={(e) => setDays(e.target.value)} aria-label="Valid for">
          {[7, 14, 30, 60, 90].map((d) => (
            <option key={d} value={d}>
              {d} days
            </option>
          ))}
        </select>
        <button
          type="button"
          disabled={pending}
          className={buttonClass("primary")}
          onClick={() =>
            start(async () => {
              const r = await createParentLinkAction(label, Number(days));
              if (r.ok && r.data) {
                setFresh(`${window.location.origin}/report/${(r.data as { token: string }).token}`);
                setLabel("");
                router.refresh();
              } else if (!r.ok) toast("error", r.error);
            })
          }
        >
          {pending ? <Loader2 className="size-4 animate-spin" /> : <Link2 className="size-4" />} Create link
        </button>
      </div>

      {fresh && (
        <div className="rounded-xl border border-gold-400/50 bg-gold-50 p-4">
          <p className="text-sm font-bold text-navy-800">Copy this link now — it is shown only once.</p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <input readOnly value={fresh} onFocus={(e) => e.currentTarget.select()} className={`${inputClass} font-mono text-xs`} aria-label="Parent report link" />
            <button type="button" className={buttonClass("navy", "md")} onClick={() => copy(fresh)}>
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />} {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <p className="mt-2 text-xs text-muted">Send it to your parent or guardian (WhatsApp, SMS). Anyone with the link can see your progress report, so share it only with people you trust.</p>
        </div>
      )}

      <ul className="divide-y divide-line rounded-xl border border-line">
        {links.map((l) => {
          const expired = new Date(l.expiresAt) < new Date();
          return (
            <li key={l.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-navy-800">{l.label || "Parent report link"}</p>
                <p className="text-xs text-muted">
                  {l.revoked ? "Revoked" : expired ? "Expired" : `Active until ${fmt(l.expiresAt)}`} · opened {l.views} time{l.views === 1 ? "" : "s"}
                  {l.lastViewedAt ? ` · last ${fmt(l.lastViewedAt)}` : ""}
                </p>
              </div>
              {!l.revoked && !expired && (
                <button
                  type="button"
                  disabled={pending}
                  className={buttonClass("danger-outline", "sm")}
                  onClick={() =>
                    start(async () => {
                      const r = await revokeParentLinkAction(l.id);
                      if (r.ok) {
                        toast("success", "Link revoked.");
                        router.refresh();
                      } else toast("error", r.error);
                    })
                  }
                >
                  <Trash2 className="size-4" /> Revoke
                </button>
              )}
            </li>
          );
        })}
        {links.length === 0 && <li className="px-4 py-6 text-center text-sm text-muted">No links yet.</li>}
      </ul>
    </div>
  );
}
