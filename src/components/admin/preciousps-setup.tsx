"use client";

import { Loader2, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setupFodanExamsAction } from "@/app/admin/actions";
import { buttonClass } from "../ui/primitives";
import { useToast } from "../ui/toast";

/** Creates any missing Precious PS Examination (every class and term) and brings sizes in line with Settings. */
export function FodanSetupButton() {
  const [pending, start] = useTransition();
  const toast = useToast();
  const router = useRouter();
  return (
    <button
      type="button"
      disabled={pending}
      className={buttonClass("primary", "sm")}
      onClick={() =>
        start(async () => {
          const r = await setupFodanExamsAction();
          if (!r.ok) return toast("error", r.error);
          const { created, published, resized, empty } = r.data!;
          toast("success", created + published + resized ? `Precious PS Examinations: ${created} created, ${published} published, ${resized} resized.` : "Already up to date.");
          if (empty.length) toast("error", `No questions yet for: ${empty.slice(0, 6).join(", ")}${empty.length > 6 ? "…" : ""}`);
          router.refresh();
        })
      }
    >
      {pending ? <Loader2 className="size-4 animate-spin" /> : <RefreshCw className="size-4" />}
      Set up / refresh
    </button>
  );
}
