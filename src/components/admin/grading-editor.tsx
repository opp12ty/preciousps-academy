"use client";

import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { saveSettingAction } from "@/app/admin/actions";
import { validateGradingScale, type GradeBand } from "@/core/exam-engine";
import { buttonClass, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

export function GradingEditor({ initial }: { initial: GradeBand[] }) {
  const [bands, setBands] = useState<GradeBand[]>([...initial].sort((a, b) => b.min - a.min));
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  const errors = validateGradingScale(bands);
  const upd = (i: number, patch: Partial<GradeBand>) => setBands((b) => b.map((x, j) => (j === i ? { ...x, ...patch } : x)));
  return (
    <div className="space-y-4">
      <table className="w-full max-w-xl text-sm">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-muted">
            <th className="py-2">Grade</th>
            <th className="py-2">Minimum %</th>
            <th className="py-2">Remark</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {bands.map((b, i) => (
            <tr key={i}>
              <td className="py-1 pr-2"><input aria-label="Grade" className={inputClass} value={b.grade} maxLength={4} onChange={(e) => upd(i, { grade: e.target.value.toUpperCase() })} /></td>
              <td className="py-1 pr-2"><input aria-label="Minimum percentage" type="number" min={0} max={100} className={inputClass} value={b.min} onChange={(e) => upd(i, { min: Number(e.target.value) })} /></td>
              <td className="py-1 pr-2"><input aria-label="Remark" className={inputClass} value={b.remark ?? ""} onChange={(e) => upd(i, { remark: e.target.value })} /></td>
              <td className="py-1"><button type="button" aria-label="Remove band" className={buttonClass("ghost", "sm")} onClick={() => setBands((x) => x.filter((_, j) => j !== i))}><Trash2 className="size-4" /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-muted">Preview: {[...bands].sort((a, b) => b.min - a.min).map((b, i, arr) => `${b.grade} = ${b.min}–${i === 0 ? 100 : arr[i - 1].min - 1}`).join(" · ")}</p>
      {errors.length > 0 && <ul className="rounded-xl bg-danger-50 px-4 py-3 text-sm text-danger-600">{errors.map((e) => <li key={e}>{e}</li>)}</ul>}
      <div className="flex gap-2">
        <button type="button" className={buttonClass("secondary")} onClick={() => setBands((b) => [...b, { grade: "", min: 0, remark: "" }])}><Plus className="size-4" /> Add band</button>
        <button
          type="button"
          disabled={pending || errors.length > 0}
          className={buttonClass("primary")}
          onClick={() => start(async () => {
            const r = await saveSettingAction("grading", { scale: bands });
            if (r.ok) { toast("success", "Grading scale saved."); router.refresh(); } else toast("error", r.error);
          })}
        >
          Save grading scale
        </button>
      </div>
    </div>
  );
}
