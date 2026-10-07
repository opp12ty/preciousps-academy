"use client";

/* eslint-disable @next/next/no-img-element */
import { ArrowDown, ArrowUp, Loader2, Plus, RotateCcw, Save, Trash2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { saveContentAction } from "@/app/admin/actions";
import type { ContentKey } from "@/content/defaults";
import { buttonClass, cx, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

const LONG = /body|description|intro|answer|^a$|text|about|message/i;
const IMAGE = /AssetId$/;
const label = (k: string) =>
  k
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .replace(/^Q$/, "Question")
    .replace(/^A$/, "Answer")
    .replace(/ Asset Id$/, "")
    .replace(/^Dark Glow Style$/, "Dark glow style (deep navy sections with glowing accents)")
    .replace(/^Animations$/, "Animations (drifting glow, shimmer and sections easing in)");

/** Image slot stored as an uploaded asset id; large photos are scaled down in the browser first. */
function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [busy, setBusy] = useState(false);
  const toast = useToast();
  const upload = async (file: File) => {
    setBusy(true);
    try {
      let out = file;
      const bitmap = await createImageBitmap(file).catch(() => null);
      if (bitmap) {
        const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(bitmap.width * scale);
        canvas.height = Math.round(bitmap.height * scale);
        canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();
        const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.88));
        if (blob) out = new File([blob], file.name.replace(/.[^.]+$/, "") + ".jpg", { type: "image/jpeg" });
      }
      const fd = new FormData();
      fd.set("file", out);
      fd.set("kind", "IMAGE");
      const r = await fetch("/api/v1/assets", { method: "POST", body: fd }).then((x) => x.json());
      if (r.ok) {
        onChange(r.data.id);
        toast("info", "Uploaded — click Publish changes to show it on the site.");
      } else toast("error", r.error.message);
    } catch {
      toast("error", "The picture could not be uploaded. Try a JPG or PNG file.");
    }
    setBusy(false);
  };
  return (
    <div className="flex items-center gap-4 rounded-xl border border-line bg-surface p-3">
      <div className="grid size-24 shrink-0 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-line">
        {value ? <img src={`/api/v1/assets/${value}`} alt="" className="size-full object-cover object-top" /> : <span className="px-2 text-center text-xs text-muted">Default picture in use</span>}
      </div>
      <div className="flex flex-wrap gap-2">
        <label className={buttonClass("secondary", "sm", "cursor-pointer")}>
          {busy ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />} {value ? "Change picture" : "Upload picture"}
          <input type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
        </label>
        {value && (
          <button type="button" className={buttonClass("ghost", "sm")} onClick={() => onChange("")}>
            <RotateCcw className="size-4" /> Use default
          </button>
        )}
      </div>
    </div>
  );
}

/** Renders editable fields from the shape of the stored content (strings, lists, nested groups). */
function Node({ value, onChange, path, template }: { value: Json; onChange: (v: Json) => void; path: string; template?: Json }) {
  if (typeof value === "string") {
    const key = path.split(".").pop() ?? "";
    if (IMAGE.test(key)) return <ImageField value={value} onChange={onChange} />;
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
