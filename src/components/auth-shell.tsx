/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { getBrand } from "@/server/brand";
import { Logo } from "./brand";
import { getContent } from "@/server/services/content";
import { AuthPicture } from "./auth-art";


/** Split-screen layout of every sign-in and registration screen: the school logo beside the school building photograph. */
export async function AuthShell({ title, subtitle, children, variant = "student", wide, scene }: { title: string; subtitle?: React.ReactNode; children: React.ReactNode; variant?: "student" | "backend"; wide?: boolean; scene?: "login" | "register" | "backend" }) {
  const brand = await getBrand();
  const pics = await getContent(brand.schoolId, "auth-pictures");
  const gallery = scene === "register"
    ? [{ art: "library" as const, id: pics.libraryAssetId, cap: pics.libraryCaption }, { art: "literature" as const, id: pics.literatureAssetId, cap: pics.literatureCaption }]
    : scene === "login" || scene === "backend"
      ? [{ art: "library" as const, id: pics.libraryAssetId, cap: pics.libraryCaption }, { art: "commerce" as const, id: pics.commerceAssetId, cap: pics.commerceCaption }, { art: "literature" as const, id: pics.literatureAssetId, cap: pics.literatureCaption }, { art: "refinery" as const, id: pics.refineryAssetId, cap: pics.refineryCaption }]
      : [];
  const isId = (x: string) => /^[0-9a-f-]{36}$/i.test(x);
  const more = ((scene === "register" ? pics.moreRegisterPictures : scene === "login" ? pics.moreLoginPictures : scene === "backend" ? pics.moreAdminLoginPictures : []) ?? []).filter((p) => isId(p.imageAssetId));
  return (
    <div className="grid min-h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <aside className="relative hidden overflow-hidden bg-navy-800 text-white lg:sticky lg:top-0 lg:block lg:h-dvh">
        <div className="mudcloth absolute inset-0 opacity-[0.12]" aria-hidden />
        <div className="kente-band absolute inset-x-0 top-0 h-2" aria-hidden />
        <div className="kente-band absolute inset-x-0 bottom-0 h-2" aria-hidden />
        <div className="absolute -bottom-40 -left-40 size-[30rem] rounded-full bg-royal-600/30 blur-3xl" aria-hidden />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-y-auto p-8 xl:p-10">
          <Link href="/" className="text-sm font-semibold text-white/70 hover:text-white">
            ← Back to website
          </Link>
          <div>
            <div className="mx-auto flex max-w-md items-end justify-center gap-5">
              <div className="w-36 shrink-0 rounded-3xl bg-white p-4 shadow-lift xl:w-44">
                <Logo src={brand.logoUrl} alt="Precious PS Academy logo" className="mx-auto w-full" priority />
              </div>
              <img src={brand.heroUrl} alt={brand.schoolName + ' school building'} decoding="async" className={gallery.length ? "gold-frame h-56 w-40 shrink-0 rounded-3xl object-cover object-top xl:h-64 xl:w-44" : "gold-frame h-72 w-48 shrink-0 rounded-3xl object-cover object-top xl:h-80 xl:w-56"} />
            </div>
            <p className={gallery.length ? "mt-5 text-center font-display text-2xl font-extrabold xl:text-3xl" : "mt-8 text-center font-display text-3xl font-extrabold"}>{brand.platformName}</p>
            <p className="mt-2 text-center text-lg font-semibold text-gold-400">{brand.tagline}</p>
            <p className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{brand.positioning}</p>
            {gallery.length > 0 && (
              <div className={gallery.length === 2 ? "mx-auto mt-6 grid max-w-md grid-cols-2 gap-3" : "mx-auto mt-6 grid max-w-lg grid-cols-4 gap-2.5"}>
                {gallery.map((g) => <AuthPicture key={g.art} art={g.art} assetId={g.id} caption={g.cap} />)}
                {more.map((p) => <AuthPicture key={p.imageAssetId} art="library" assetId={p.imageAssetId} caption={p.caption} />)}
              </div>
            )}
          </div>
          <p className="flex items-center justify-center gap-2 text-xs text-white/60">
            <ShieldCheck className="size-4 text-gold-400" aria-hidden />
            {variant === "backend" ? "Restricted area. All access is logged." : "Your password is encrypted and never visible to anyone."}
          </p>
        </div>
      </aside>
      <main id="main" className="flex flex-col bg-white">
        <div className="flex items-center justify-between gap-3 bg-navy-800 px-5 py-3 text-white lg:hidden">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white p-1">
              <Logo src={brand.markUrl} alt="Precious PS Academy logo" className="size-full object-contain" priority />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-extrabold tracking-wide">{brand.platformName}</span>
              <span className="block truncate text-[0.68rem] font-semibold text-gold-400">{brand.tagline}</span>
            </span>
          </Link>
          <img src={brand.heroUrl} alt="" decoding="async" className="size-12 shrink-0 rounded-full object-cover object-top ring-2 ring-gold-400" />
        </div>
        <div className="kente-band h-1.5 lg:hidden" aria-hidden />
        {gallery.length > 0 && (
          <div className={gallery.length === 2 ? "grid grid-cols-2 gap-2 px-5 pt-4 lg:hidden" : "grid grid-cols-4 gap-1.5 px-5 pt-4 lg:hidden"}>
            {gallery.map((g) => <AuthPicture key={g.art} art={g.art} assetId={g.id} caption={g.cap} />)}
                {more.map((p) => <AuthPicture key={p.imageAssetId} art="library" assetId={p.imageAssetId} caption={p.caption} />)}
          </div>
        )}
        <div className="flex flex-1 items-start justify-center px-5 pb-12 pt-6 sm:items-center sm:px-8 lg:pt-12">
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
