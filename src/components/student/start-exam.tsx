"use client";

import { Loader2, PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buttonClass } from "../ui/primitives";

export function StartExamButton({ examId, label = "Start examination" }: { examId: string; label?: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agree, setAgree] = useState(false);
  return (
    <div className="space-y-3">
      <label className="flex items-start gap-3 text-sm">
        <input type="checkbox" className="mt-0.5 size-5 accent-royal-600" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        <span className="text-navy-800">I have read the instructions and I am ready. I will not seek or give unauthorised help.</span>
      </label>
      {error && (
        <p role="alert" className="rounded-xl bg-danger-50 px-4 py-3 text-sm text-danger-600">
          {error}
        </p>
      )}
      <button
        type="button"
        disabled={!agree || pending}
        className={buttonClass("primary", "lg", "w-full sm:w-auto")}
        onClick={async () => {
          setPending(true);
          setError(null);
          try {
            // This window's exam-session id; the server binds the attempt to it (single active session).
            const clientSessionId = crypto.randomUUID();
            const r = await fetch(`/api/v1/exams/${examId}/start`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ clientSessionId }) });
            const j = await r.json();
            if (!j.ok) throw new Error(j.error?.message ?? "Could not start the examination.");
            sessionStorage.setItem(`pps:cbt-session:${j.data.attemptId}`, clientSessionId);
            router.push(`/cbt/${j.data.attemptId}`);
          } catch (e) {
            setError((e as Error).message);
            setPending(false);
          }
        }}
      >
        {pending ? <Loader2 className="size-5 animate-spin" /> : <PlayCircle className="size-5" />}
        {label}
      </button>
    </div>
  );
}
