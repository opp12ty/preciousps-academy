"use client";

import { ImagePlus, Loader2, Shapes } from "lucide-react";
import { useState } from "react";
import { DIAGRAM_HELP } from "@/core/diagrams";
import { buttonClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

/** Buttons that add an uploaded picture or a ready-made diagram line to lesson text. */
export function PictureTools({ onInsert }: { onInsert: (line: string) => void }) {
  const [busy, setBusy] = useState(false);
  const toast = useToast();
  const upload = async (file: File) => {
    setBusy(true);
    try {
      let out = file;
      const bitmap = await createImageBitmap(file).catch(() => null);
      if (bitmap) {
        const scale = Math.min(1, 1400 / Math.max(bitmap.width, bitmap.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(bitmap.width * scale);
        canvas.height = Math.round(bitmap.height * scale);
        canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();
        const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.86));
        if (blob) out = new File([blob], file.name.replace(/\.[^.]+$/, "") + ".jpg", { type: "image/jpeg" });
      }
      const fd = new FormData();
      fd.set("file", out);
      fd.set("kind", "IMAGE");
      const r = await fetch("/api/v1/assets", { method: "POST", body: fd }).then((x) => x.json());
      if (r.ok) {
        onInsert(`[[image: ${r.data.id} || Describe the picture here]]`);
        toast("info", "Picture added to the notes. Change the caption after the two bars.");
      } else toast("error", r.error.message);
    } catch {
      toast("error", "The picture could not be uploaded. Try a JPG or PNG file.");
    }
    setBusy(false);
  };
  return (
    <div className="mt-2 flex flex-wrap items-start gap-2">
      <label className={buttonClass("secondary", "sm", "cursor-pointer")}>
        {busy ? <Loader2 className="size-4 animate-spin" /> : <ImagePlus className="size-4" />} Add picture
        <input type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
      </label>
      <details className="relative">
        <summary className={buttonClass("secondary", "sm", "list-none cursor-pointer")}><Shapes className="size-4" /> Add diagram</summary>
        <div className="absolute left-0 z-20 mt-2 max-h-96 w-[min(40rem,90vw)] overflow-y-auto rounded-2xl border border-line bg-white p-3 shadow-lift">
          <p className="mb-2 text-xs text-muted">Click one to add it to the notes, then change the numbers or words. Add a caption after two bars: <code>|| caption</code>.</p>
          <ul className="space-y-1">
            {DIAGRAM_HELP.filter((d) => d.example.startsWith("[[diagram")).map((d) => (
              <li key={d.example}>
                <button type="button" onClick={() => onInsert(d.example)} className="block w-full rounded-lg px-2 py-1.5 text-left hover:bg-royal-50">
                  <code className="text-xs font-semibold text-navy-800">{d.example}</code>
                  <span className="block text-xs text-muted">{d.shows}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
}
