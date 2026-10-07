"use client";

import { Loader2, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { assignClassAccessAction } from "@/app/admin/actions";
import { Alert, buttonClass, inputClass } from "../ui/primitives";

type Step = { className: string; assigned: number; failed: number; remaining: number };

/**
 * Gives every student of a class who has no access a fresh code, already activated. The work is
 * done a few students at a time, so a large class never has to finish inside a single request.
 */
export function ClassAccess({ classes, departments, defaultDays }: { classes: { id: string; name: string }[]; departments: { id: string; name: string }[]; defaultDays: number }) {
  const [classId, setClassId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [days, setDays] = useState(String(defaultDays));
  const [reason, setReason] = useState("");
  const [busy, setBusy] = useState(false);
  const [total, setTotal] = useState<{ className: string; assigned: number; failed: number } | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const run = async () => {
    setBusy(true);
    setError("");
    const sum = { className: "", assigned: 0, failed: 0 };
    setTotal(null);
    // Stops by itself: each call only picks students who still have no access.
    for (let guard = 0; guard < 200; guard++) {
      const r = await assignClassAccessAction({ classId, departmentId: departmentId || undefined, days: Number(days) || undefined, reason });
      if (!r.ok) {
        setError(r.error);
        break;
      }
      const d = r.data as Step;
      sum.className = d.className;
      sum.assigned += d.assigned;
      sum.failed += d.failed;
      setTotal({ ...sum });
      if (d.remaining <= 0) break;
    }
    setBusy(false);
    router.refresh();
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_7rem_1.4fr_auto] lg:items-end">
        <label className="block text-sm font-semibold text-navy-800">
          Class
          <select className={inputClass + " mt-1.5"} value={classId} onChange={(e) => setClassId(e.target.value)}>
            <option value="">Choose a class</option>
            {classes.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy-800">
          Department (optional)
          <select className={inputClass + " mt-1.5"} value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}>
            <option value="">All departments</option>
            {departments.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy-800">
          Days
          <input className={inputClass + " mt-1.5"} type="number" min={1} max={3650} value={days} onChange={(e) => setDays(e.target.value)} />
        </label>
        <label className="block text-sm font-semibold text-navy-800">
          Reason (kept in the audit log)
          <input className={inputClass + " mt-1.5"} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="e.g. First term fees paid" />
        </label>
        <button type="button" className={buttonClass("navy")} disabled={busy || !classId || reason.trim().length < 3} onClick={run}>
          {busy ? <Loader2 className="size-4 animate-spin" /> : <Users className="size-4" />} Give access
        </button>
      </div>
      <p className="text-xs text-muted">Only students of the class who have no running access are included, so it is safe to run again after new students join. Suspended accounts are skipped. Each student gets a separate code; nobody has to type anything.</p>
      {error && <Alert tone="danger">{error}</Alert>}
      {total && (
        <Alert tone={total.failed ? "warning" : "success"} title={busy ? `Working… ${total.assigned} student(s) done so far. Keep this page open.` : total.assigned + total.failed === 0 ? `Every student in ${total.className} already has access.` : `${total.assigned} student(s) in ${total.className} now have access.`}>
          {total.failed > 0 && `${total.failed} could not be activated; their codes are still unused in the list below.`}
        </Alert>
      )}
    </div>
  );
}
