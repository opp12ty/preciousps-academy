"use client";

import { Loader2, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { updateEnquiryAction } from "@/app/admin/actions";
import { buttonClass, inputClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

export function EnquiryControls({ id, status, note }: { id: string; status: string; note: string }) {
  const [st, setSt] = useState(status);
  const [n, setN] = useState(note);
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  return (
    <div className="mt-4 grid gap-2 border-t border-line pt-4 sm:grid-cols-[11rem_1fr_auto]">
      <select className={inputClass} value={st} onChange={(e) => setSt(e.target.value)} aria-label="Status">
        <option value="NEW">New</option>
        <option value="IN_PROGRESS">In progress</option>
        <option value="RESOLVED">Resolved</option>
        <option value="SPAM">Spam</option>
      </select>
      <input className={inputClass} value={n} onChange={(e) => setN(e.target.value)} placeholder="Internal note (optional)" maxLength={1000} aria-label="Internal note" />
      <button
        type="button"
        disabled={pending}
        className={buttonClass("secondary", "md")}
        onClick={() =>
          start(async () => {
            const r = await updateEnquiryAction(id, st, n);
            if (r.ok) {
              toast("success", "Enquiry updated.");
              router.refresh();
            } else toast("error", r.error);
          })
        }
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />} Save
      </button>
    </div>
  );
}
