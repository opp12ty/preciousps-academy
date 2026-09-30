"use client";

import { useMemo, useState } from "react";
import { cx, inputClass } from "../ui/primitives";

/** Searchable multi-select of approved questions; submits `name` fields in chosen order. */
export function QuestionPicker({ options, initial = [], name = "questionIds", max = 100 }: { options: { id: string; ref: string; stem: string; topic?: string | null }[]; initial?: string[]; name?: string; max?: number }) {
  const [chosen, setChosen] = useState<string[]>(initial);
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    return (t ? options.filter((o) => o.stem.toLowerCase().includes(t) || o.ref.toLowerCase().includes(t) || (o.topic ?? "").toLowerCase().includes(t)) : options).slice(0, 200);
  }, [q, options]);
  const toggle = (id: string) => setChosen((c) => (c.includes(id) ? c.filter((x) => x !== id) : c.length >= max ? c : [...c, id]));
  return (
    <div className="rounded-xl border border-line">
      {chosen.map((id) => (
        <input key={id} type="hidden" name={name} value={id} />
      ))}
      <div className="flex items-center gap-2 border-b border-line p-2">
        <input className={inputClass} placeholder="Search approved questions by text, ref or topic" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search questions" />
        <span className="shrink-0 rounded-lg bg-royal-50 px-2.5 py-1 text-xs font-bold text-royal-700">{chosen.length} selected</span>
      </div>
      <ul className="max-h-72 divide-y divide-line overflow-y-auto">
        {filtered.map((o) => (
          <li key={o.id}>
            <label className={cx("flex cursor-pointer items-start gap-3 px-3 py-2 text-sm hover:bg-surface", chosen.includes(o.id) && "bg-royal-50/60")}>
              <input type="checkbox" className="mt-0.5 size-4 accent-royal-600" checked={chosen.includes(o.id)} onChange={() => toggle(o.id)} />
              <span className="min-w-0 flex-1">
                <span className="font-mono text-xs text-muted">{o.ref}</span> {o.topic && <span className="text-xs text-gold-600">· {o.topic}</span>}
                <span className="block truncate text-navy-800">{o.stem.replace(/\$/g, "")}</span>
              </span>
            </label>
          </li>
        ))}
        {!filtered.length && <li className="px-3 py-4 text-sm text-muted">No approved questions match.</li>}
      </ul>
    </div>
  );
}
