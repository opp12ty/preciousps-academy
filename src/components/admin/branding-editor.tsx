"use client";

/* eslint-disable @next/next/no-img-element */
import { Loader2, RotateCcw, Save, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { saveSettingAction } from "@/app/admin/actions";
import { buttonClass, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

type Branding = Record<string, string | null>;
const SLOTS: { key: string; label: string; hint: string; fallback?: string }[] = [
  { key: "logoAssetId", label: "Primary logo", hint: "Used across the website, portals, favicon-sized marks and e-mails. Transparent PNG recommended.", fallback: "/brand/logo-full-480.png" },
  { key: "logoDarkAssetId", label: "Logo for dark backgrounds (optional)", hint: "Optional variant." },
  { key: "heroAssetId", label: "Homepage hero image", hint: "Large photo beside the homepage headline. Wide 16:9 works best (at least 1280 × 720 px, JPG/PNG/WebP); other shapes are cropped from the centre.", fallback: "/brand/hero-school.jpg" },
  { key: "faviconAssetId", label: "Browser favicon", hint: "Square PNG, at least 256 × 256 px. Defaults to the Precious PS Academy emblem.", fallback: "/brand/logo-mark-128.png" },
  { key: "examBannerAssetId", label: "Examination banner", hint: "Optional banner for exam pages." },
  { key: "resultLogoAssetId", label: "Result-slip logo", hint: "Defaults to the primary logo.", fallback: "/brand/logo-full-480.png" },
  { key: "certificateLogoAssetId", label: "Certificate logo", hint: "Defaults to the primary logo.", fallback: "/brand/logo-full-480.png" },
  { key: "signatureAssetId", label: "Signature", hint: "Transparent PNG of the signatory's signature." },
  { key: "stampAssetId", label: "Official stamp", hint: "Transparent PNG." },
];

const MAX_SIDE = 2400;
const PNG_KEEP_BYTES = 2_500_000;

/**
 * Prepares a branding image in the browser before upload: phone photos are scaled to at most
 * 2400 px (keeping them under the hosting request limit) and JPEG/WebP files are re-encoded,
 * which also drops EXIF metadata such as GPS location. Small PNGs (logos with transparency)
 * are uploaded untouched.
 */
async function prepareImage(file: File): Promise<File> {
  if (!/^image\/(jpeg|webp|png)$/.test(file.type)) return file;
  const isPng = file.type === "image/png";
  const bitmap = await createImageBitmap(file).catch(() => null);
  if (!bitmap) return file;
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  if (isPng && scale === 1 && file.size <= PNG_KEEP_BYTES) {
    bitmap.close();
    return file;
  }
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const type = isPng ? "image/png" : "image/jpeg";
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, type, 0.88));
  if (!blob) return file;
  return new File([blob], file.name.replace(/\.[^.]+$/, "") + (isPng ? ".png" : ".jpg"), { type });
}

export function BrandingEditor({ initial }: { initial: Branding }) {
  const [b, setB] = useState<Branding>(initial);
  const [busy, setBusy] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  const upload = async (key: string, file: File) => {
    setBusy(key);
    const fd = new FormData();
    fd.set("file", await prepareImage(file));
    fd.set("kind", "BRAND");
    const r = await fetch("/api/v1/assets", { method: "POST", body: fd }).then((x) => x.json());
    setBusy(null);
    if (r.ok) {
      setB((x) => ({ ...x, [key]: r.data.id }));
      toast("info", "Uploaded — click Save branding to publish.");
    } else toast("error", r.error.message);
  };
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {SLOTS.map((s) => (
          <div key={s.key} className="flex gap-4 rounded-2xl border border-line bg-white p-4">
            <div className="grid size-24 shrink-0 place-items-center overflow-hidden rounded-xl bg-[conic-gradient(#f1f5f9_25%,#fff_0_50%,#f1f5f9_0_75%,#fff_0)] bg-[length:16px_16px] ring-1 ring-line">
              {b[s.key] ? <img src={`/api/v1/assets/${b[s.key]}`} alt="" className="max-h-full max-w-full object-contain" /> : s.fallback ? <img src={s.fallback} alt="" className="max-h-full max-w-full object-contain opacity-80" /> : <span className="text-xs text-muted">None</span>}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-navy-800">{s.label}</p>
              <p className="mt-0.5 text-xs text-muted">{s.hint}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <label className={buttonClass("secondary", "sm", "cursor-pointer")}>
                  {busy === s.key ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />} Upload
                  <input type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" onChange={(e) => e.target.files?.[0] && upload(s.key, e.target.files[0])} />
                </label>
                {b[s.key] && (
                  <button type="button" className={buttonClass("ghost", "sm")} onClick={() => setB((x) => ({ ...x, [s.key]: null }))}>
                    <RotateCcw className="size-4" /> {s.fallback ? "Use official default" : "Remove"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-line bg-white p-4">
        <p className="text-sm font-bold text-navy-800">Brand colours</p>
        <p className="mt-0.5 text-xs text-muted">Leave blank to use the official navy, royal blue and gold. Shades are derived automatically across the whole platform.</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {([["navyColor", "Navy", "#0b1f4b"], ["royalColor", "Royal blue", "#1d4ed8"], ["goldColor", "Gold accent", "#c8a02f"]] as const).map(([k, l, d]) => (
            <label key={k} className="text-sm font-semibold text-navy-800">
              {l}
              <span className="mt-1.5 flex items-center gap-2">
                <input type="color" aria-label={l} className="h-10 w-12 cursor-pointer rounded-lg border border-line bg-white p-1" value={b[k] || d} onChange={(e) => setB((x) => ({ ...x, [k]: e.target.value }))} />
                <input className={inputClass} placeholder={d} value={b[k] ?? ""} onChange={(e) => setB((x) => ({ ...x, [k]: e.target.value }))} />
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy-800">
          Signatory name
          <input className={`${inputClass} mt-1.5`} value={b.signatoryName ?? ""} onChange={(e) => setB((x) => ({ ...x, signatoryName: e.target.value }))} />
        </label>
        <label className="text-sm font-semibold text-navy-800">
          Signatory title
          <input className={`${inputClass} mt-1.5`} value={b.signatoryTitle ?? ""} onChange={(e) => setB((x) => ({ ...x, signatoryTitle: e.target.value }))} />
        </label>
      </div>
      <button
        type="button"
        disabled={pending}
        className={buttonClass("primary")}
        onClick={() =>
          start(async () => {
            const r = await saveSettingAction("branding", b);
            if (r.ok) {
              toast("success", "Branding published across the platform.");
              router.refresh();
            } else toast("error", r.error);
          })
        }
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Save branding
      </button>
    </div>
  );
}
