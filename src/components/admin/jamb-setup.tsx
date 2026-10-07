"use client";

import { Loader2, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition, type ReactNode } from "react";
import { setupJambTestsAction } from "@/app/admin/actions";
import { buttonClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

/** Creates / publishes the JAMB-only test for one subject, or for every subject with JAMB questions ("ALL"). */
export function JambSetupButton({ subjectId, variant = "secondary", children }: { subjectId: string; variant?: "primary" | "secondary"; children: ReactNode }) {
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  return (
    <button
      type="button"
      disabled={pending}
      className={buttonClass(variant, "sm")}
      onClick={() =>
        start(async () => {
          const r = await setupJambTestsAction(subjectId);
          if (!r.ok) return toast("error", r.error);
          const { created, published, waiting } = r.data!;
          const parts = [created && `${created} created`, published && `${published} published`].filter(Boolean);
          if (waiting.length) toast("error", `Not published yet — needs more approved JAMB questions: ${waiting.join(", ")}.`);
          if (parts.length || !waiting.length) toast("success", parts.length ? `JAMB tests: ${parts.join(", ")}.` : "Already up to date.");
          router.refresh();
        })
      }
    >
      {pending ? <Loader2 className="size-4 animate-spin" /> : <RefreshCw className="size-4" />}
      {children}
    </button>
  );
}
