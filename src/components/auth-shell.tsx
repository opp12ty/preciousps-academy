import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { getBrand } from "@/server/brand";
import { Logo } from "./brand";

/** Split-screen auth layout with the official logo (login, registration, backend). */
export async function AuthShell({ title, subtitle, children, variant = "student", wide }: { title: string; subtitle?: React.ReactNode; children: React.ReactNode; variant?: "student" | "backend"; wide?: boolean }) {
  const brand = await getBrand();
  return (
    <div className="grid min-h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <aside className="relative hidden overflow-hidden bg-navy-800 text-white lg:block">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute -bottom-40 -left-40 size-[30rem] rounded-full bg-royal-600/30 blur-3xl" aria-hidden />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Link href="/" className="text-sm font-semibold text-white/70 hover:text-white">
            ← Back to website
          </Link>
          <div>
            <div className="mx-auto w-full max-w-[18rem] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-white/20">
              <Logo src={brand.logoUrl} alt="Precious PS Academy logo" className="mx-auto w-full" priority />
            </div>
            <p className="mt-10 text-center font-display text-3xl font-extrabold">Precious PS Academy</p>
            <p className="mt-2 text-center text-lg font-semibold text-gold-400">{brand.tagline}</p>
            <p className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{brand.positioning}</p>
          </div>
          <p className="flex items-center justify-center gap-2 text-xs text-white/60">
            <ShieldCheck className="size-4 text-gold-400" aria-hidden />
            {variant === "backend" ? "Restricted area. All access is logged." : "Your password is encrypted and never visible to anyone."}
          </p>
        </div>
      </aside>
      <main id="main" className="flex flex-col bg-white">
        <div className="flex items-center justify-between px-5 py-4 lg:hidden">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-10 place-items-center overflow-hidden rounded-xl ring-1 ring-line">
              <Logo src={brand.markUrl} alt="" className="size-full" priority />
            </span>
            <span className="text-sm font-extrabold text-navy-800">Precious PS Academy</span>
          </Link>
        </div>
        <div className="flex flex-1 items-start justify-center px-5 pb-12 pt-4 sm:items-center sm:px-8 lg:pt-12">
          <div className={wide ? "w-full max-w-2xl" : "w-full max-w-md"}>
            {variant === "backend" && <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Backend access</p>}
            <h1 className="text-[1.7rem] font-extrabold tracking-tight text-navy-800">{title}</h1>
            {subtitle && <div className="mt-1.5 text-sm text-muted">{subtitle}</div>}
            <div className="mt-7">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
