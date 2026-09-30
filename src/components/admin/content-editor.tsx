"use client";

import { ArrowDown, ArrowUp, Loader2, Plus, Save, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { saveContentAction } from "@/app/admin/actions";
import type { ContentKey } from "@/content/defaults";
import { buttonClass, cx, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

const LONG = /body|description|intro|answer|^a$|text|about/i;
const label = (k: string) =>
  k
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .replace(/^Q$/, "Question")
    .replace(/^A$/, "Answer");

/** Renders editable fields from the shape of the stored content (strings, lists, nested groups). */
function Node({ value, onChange, path, template }: { value: Json; onChange: (v: Json) => void; path: string; template?: Json }) {
  if (typeof value === "string") {
    const key = path.split(".").pop() ?? "";
    const long = LONG.test(key) || value.length > 90;
    return long ? <textarea className={inputClass} rows={Math.min(14, Math.max(3, Math.ceil(value.length / 90)))} value={value} onChange={(e) => onChange(e.target.value)} /> : <input className={inputClass} value={value} onChange={(e) => onChange(e.target.value)} />;
  }
  if (typeof value === "boolean") return <input type="checkbox" className="size-5 accent-royal-600" checked={value} onChange={(e) => onChange(e.target.checked)} />;
  if (typeof value === "number") return <input type="number" className={inputClass} value={value} onChange={(e) => onChange(Number(e.target.value))} />;
  if (Array.isArray(value)) {
    const blank: Json = template ?? (value[0] !== undefined ? (JSON.parse(JSON.stringify(value[0]), (_k, v) => (typeof v === "string" ? "" : v)) as Json) : "");
    return (
      <div className="space-y-3">
        {value.map((item, i) => (
          <div key={i} className="rounded-xl border border-line bg-surface p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wide text-muted">Item {i + 1}</span>
              <div className="flex gap-1">
                <button type="button" aria-label="Move up" disabled={i === 0} className={buttonClass("ghost", "sm")} onClick={() => { const n = [...value]; [n[i - 1], n[i]] = [n[i], n[i - 1]]; onChange(n); }}><ArrowUp className="size-4" /></button>
                <button type="button" aria-label="Move down" disabled={i === value.length - 1} className={buttonClass("ghost", "sm")} onClick={() => { const n = [...value]; [n[i + 1], n[i]] = [n[i], n[i + 1]]; onChange(n); }}><ArrowDown className="size-4" /></button>
                <button type="button" aria-label="Remove item" className={buttonClass("ghost", "sm")} onClick={() => onChange(value.filter((_, j) => j !== i))}><Trash2 className="size-4" /></button>
              </div>
            </div>
            <Node value={item} path={`${path}.${i}`} onChange={(v) => onChange(value.map((x, j) => (j === i ? v : x)))} />
          </div>
        ))}
        <button type="button" className={buttonClass("secondary", "sm")} onClick={() => onChange([...value, JSON.parse(JSON.stringify(blank))])}>
          <Plus className="size-4" /> Add item
        </button>
      </div>
    );
  }
  if (value && typeof value === "object") {
    return (
      <div className="grid gap-3">
        {Object.entries(value).map(([k, v]) => (
          <div key={k} className={cx(typeof v === "boolean" && "flex items-center gap-3")}>
            <p className={cx("text-sm font-semibold text-navy-800", typeof v !== "boolean" && "mb-1.5")}>{label(k)}</p>
            <Node value={v} path={`${path}.${k}`} onChange={(nv) => onChange({ ...value, [k]: nv })} />
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export function ContentEditor({ contentKey, initial }: { contentKey: ContentKey; initial: Json }) {
  const [value, setValue] = useState<Json>(initial);
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  return (
    <div className="space-y-5">
      <p className="text-xs text-muted">Formatting: **bold**, *italic*, “## Heading”, “- list item”, and maths with $x^2$.</p>
      <Node value={value} onChange={setValue} path={contentKey} />
      <div className="sticky bottom-3 flex justify-end">
        <button
          type="button"
          disabled={pending}
          className={buttonClass("primary", "md", "shadow-lift")}
          onClick={() =>
            start(async () => {
              const r = await saveContentAction(contentKey, value);
              if (r.ok) {
                toast("success", "Published. The previous version was saved to history.");
                router.refresh();
              } else toast("error", r.error);
            })
          }
        >
          {pending ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Publish changes
        </button>
      </div>
    </div>
  );
}
