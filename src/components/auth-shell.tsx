/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { getBrand } from "@/server/brand";

/** Login / registration / backend layout: school photograph full-bleed with the form on a floating card. */
export async function AuthShell({ title, subtitle, children, variant = "student", wide }: { title: string; subtitle?: React.ReactNode; children: React.ReactNode; variant?: "student" | "backend"; wide?: boolean }) {
  const brand = await getBrand();
  const backend = variant === "backend";
  return (
    <div className="relative isolate min-h-dvh overflow-hidden bg-navy-900">
      <img src={brand.heroUrl} alt="" className="absolute inset-0 -z-20 size-full object-cover object-[55%_40%]" />
      <div className={`absolute inset-0 -z-10 ${backend ? "bg-navy-950/90" : "bg-[linear-gradient(100deg,rgb(6_12_36/0.94)_10%,rgb(10_20_50/0.78)_55%,rgb(10_20_50/0.55)_100%)]"}`} aria-hidden />
      <div className="bg-dots absolute inset-0 -z-10 opacity-30" aria-hidden />
      <div className="mx-auto grid min-h-dvh max-w-6xl items-center gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="hidden text-white lg:block">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">
            <ArrowLeft className="size-4" aria-hidden /> Back to website
          </Link>
          <img src={brand.markUrl} alt={`${brand.platformName} logo`} className="mt-10 size-28 rounded-3xl object-cover shadow-lift ring-1 ring-white/25" />
          <h2 className="mt-8 max-w-md text-4xl font-extrabold leading-tight">{brand.platformName}</h2>
          <p className="mt-3 max-w-md text-lg font-semibold text-gold-400">{brand.tagline}</p>
          <p className="mt-2 max-w-md text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{brand.positioning}</p>
          <p className="mt-10 flex items-center gap-2 text-xs text-white/60">
            <ShieldCheck className="size-4 text-gold-400" aria-hidden />
            {backend ? "Restricted area. All access is logged." : "Your password is encrypted and never visible to anyone."}
          </p>
        </div>
        <main id="main" className="mx-auto w-full">
          <div className="mb-5 flex items-center justify-between lg:hidden">
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <img src={brand.markUrl} alt="" className="size-10 rounded-xl object-cover ring-1 ring-white/25" />
              <span className="font-display text-sm font-bold">{brand.platformName}</span>
            </Link>
            <Link href="/" className="text-xs font-semibold text-white/70">
              ← Website
            </Link>
          </div>
          <div className={`mx-auto w-full rounded-3xl border border-white/20 bg-card p-6 shadow-lift sm:p-9 ${wide ? "max-w-2xl" : "max-w-md"}`}>
            {backend && <p className="mb-2 inline-block rounded-md bg-gold-100 px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold-600">Backend access</p>}
            <h1 className="text-[1.65rem] font-bold tracking-tight text-navy-800">{title}</h1>
            {subtitle && <div className="mt-1.5 text-sm text-muted">{subtitle}</div>}
            <div className="mt-7">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
