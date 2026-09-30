"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buttonClass } from "../ui/primitives";

export function CompleteLessonButton({ lessonId, done }: { lessonId: string; done: boolean }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  if (done)
    return (
      <p className="inline-flex items-center gap-2 font-semibold text-success-600">
        <CheckCircle2 className="size-5" /> Lesson completed
      </p>
    );
  return (
    <div>
      <button
        type="button"
        disabled={pending}
        className={buttonClass("primary")}
        onClick={async () => {
          setPending(true);
          const r = await fetch(`/api/v1/lessons/${lessonId}/complete`, { method: "POST" }).then((x) => x.json());
          setPending(false);
          if (r.ok) router.refresh();
          else setError(r.error?.message ?? "Could not save progress.");
        }}
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : <CheckCircle2 className="size-4" />} Mark lesson as complete
      </button>
      {error && <p className="mt-2 text-sm text-danger-600">{error}</p>}
    </div>
  );
}
