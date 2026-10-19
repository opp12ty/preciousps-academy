"use client";

import { Loader2, Music, Trash2, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { audioBeginAction, audioDeleteAction, audioFinishAction, audioPartAction } from "@/app/admin/actions";
import { ConfirmAction } from "../ui/interactive";
import { Alert, buttonClass, inputClass } from "../ui/primitives";

const mb = (n: number) => `${(n / 1_048_576).toFixed(1)} MB`;

/** Upload and manage the MP3 explanations of one topic. Files go up in small parts with a progress bar. */
export function TopicAudioManager({ topicId, items, maxBytes }: { topicId: string; items: { id: string; title: string; size: number; fileName: string }[]; maxBytes: number }) {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [pct, setPct] = useState<number | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const upload = async () => {
    if (!file) return;
    setError("");
    if (file.size > maxBytes) return setError(`This file is ${mb(file.size)}. The maximum is ${mb(maxBytes)}.`);
    setPct(0);
    const begin = await audioBeginAction({ topicId, title: title || file.name.replace(/\.mp3$/i, ""), fileName: file.name, size: file.size });
    if (!begin.ok) {
      setPct(null);
      return setError(begin.error);
    }
    const { id, partBytes } = begin.data as { id: string; partBytes: number };
    for (let seq = 0, at = 0; at < file.size; seq++, at += partBytes) {
      const fd = new FormData();
      fd.set("id", id);
      fd.set("seq", String(seq));
      fd.set("part", file.slice(at, at + partBytes), "part.bin");
      // One retry per part: a weak network should not lose the whole upload.
      let r = await audioPartAction(fd);
      if (!r.ok) r = await audioPartAction(fd);
      if (!r.ok) {
        setPct(null);
        return setError(r.error);
      }
      setPct(Math.round((Math.min(file.size, at + partBytes) / file.size) * 100));
    }
    const done = await audioFinishAction(id);
    setPct(null);
    if (!done.ok) return setError(done.error);
    setFile(null);
    setTitle("");
    router.refresh();
  };

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-[1.2fr_1fr_auto] sm:items-end">
        <label className="block text-sm font-semibold text-navy-800">
          MP3 file
          <input type="file" accept=".mp3,audio/mpeg" className={inputClass + " mt-1.5"} onChange={(e) => { setFile(e.target.files?.[0] ?? null); setError(""); }} />
        </label>
        <label className="block text-sm font-semibold text-navy-800">
          Title students will see
          <input className={inputClass + " mt-1.5"} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Fractions explained slowly" maxLength={120} />
        </label>
        <button type="button" className={buttonClass("primary")} disabled={!file || pct !== null} onClick={upload}>
          {pct !== null ? <Loader2 className="size-4 animate-spin" /> : <UploadCloud className="size-4" />} Upload
        </button>
      </div>
      {pct !== null && (
        <div role="status">
          <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-royal-600 transition-all" style={{ width: `${pct}%` }} /></div>
          <p className="mt-1 text-xs font-semibold text-navy-800">Uploading… {pct}%. Keep this page open.</p>
        </div>
      )}
      {error && <Alert tone="danger">{error}</Alert>}
      <p className="text-xs text-muted">MP3 only, up to {mb(maxBytes)} each. For clear speech and small files, record in mono at 64 kbps: one hour is then about 29 MB, and ten minutes about 5 MB.</p>
      {items.length ? (
        <ul className="divide-y divide-line rounded-xl border border-line">
          {items.map((a) => (
            <li key={a.id} className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center">
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-2 font-semibold text-navy-800"><Music className="size-4 shrink-0 text-royal-600" aria-hidden /> {a.title}</p>
                <p className="text-xs text-muted">{a.fileName} · {mb(a.size)}</p>
                <audio controls preload="none" src={`/api/v1/audio/${a.id}`} className="mt-2 w-full max-w-md" />
              </div>
              <ConfirmAction label="Remove" icon={<Trash2 className="size-4" />} title={`Remove “${a.title}”?`} description="Students will no longer be able to listen to this recording." run={() => audioDeleteAction(a.id)} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted">No recording under this topic yet.</p>
      )}
    </div>
  );
}
