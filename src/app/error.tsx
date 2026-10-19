"use client";

import Link from "next/link";
import { RefreshCw, WifiOff } from "lucide-react";
import { buttonClass } from "@/components/ui/primitives";

/** Friendly error boundary: never exposes stack traces to students (§88). */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const offline = typeof navigator !== "undefined" && !navigator.onLine;
  return (
    <main id="main" className="grid min-h-[70dvh] place-items-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-line bg-white p-8 text-center shadow-card">
        <WifiOff className="mx-auto size-10 text-gold-500" aria-hidden />
        <h1 className="mt-3 text-xl font-extrabold text-navy-800">{offline ? "You appear to be offline" : "Something went wrong"}</h1>
        <p className="mt-2 text-sm text-muted">{offline ? "Check your internet connection and try again. Any exam answers already saved are safe." : "We could not load this page. Please try again. If it keeps happening, contact the school."}</p>
        {error.digest && <p className="mt-3 font-mono text-xs text-muted">Reference: {error.digest}</p>}
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={reset} className={buttonClass("primary")}><RefreshCw className="size-4" /> Try again</button>
          <Link href="/" className={buttonClass("secondary")}>Home</Link>
        </div>
      </div>
    </main>
  );
}
