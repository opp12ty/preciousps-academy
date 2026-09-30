/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { buttonClass } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-dvh place-items-center bg-surface px-4">
      <div className="w-full max-w-md text-center">
        <img src="/brand/logo-mark-128.png" alt="Precious PS Academy crest" className="mx-auto size-20 object-contain" />
        <p className="mt-6 font-display text-6xl font-extrabold text-navy-800">404</p>
        <h1 className="mt-2 text-xl font-bold text-navy-800">Page not found</h1>
        <p className="mt-2 text-sm text-muted">The page you are looking for does not exist or you do not have access to it.</p>
        <div className="mt-6 flex justify-center gap-2">
          <Link href="/" className={buttonClass("primary")}>Go home</Link>
          <Link href="/login" className={buttonClass("secondary")}>Student login</Link>
        </div>
      </div>
    </main>
  );
}
