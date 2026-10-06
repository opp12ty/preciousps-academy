/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { buttonClass } from "../ui/primitives";
import { MobileNav } from "./mobile-nav";

export async function SiteHeader() {
  const brand = await getBrand();
  const nav = await getContent(brand.schoolId, "navigation");
  const links = nav.primary.filter((l) => l.href !== "/").slice(0, 6);
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-2xl border border-line bg-card/90 pl-2.5 pr-2 shadow-[0_10px_30px_-18px_rgb(10_20_50/0.5)] backdrop-blur-md">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${brand.platformName} — home`}>
          <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-lg ring-1 ring-navy-800/15">
            <img src={brand.markUrl} alt="" className="size-full object-cover" />
          </span>
          <span className="min-w-0 truncate font-display text-[0.95rem] font-bold text-navy-800">{brand.platformName}</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="whitespace-nowrap rounded-lg px-3 py-2 text-[0.84rem] font-semibold text-navy-800/80 hover:bg-navy-800/5 hover:text-navy-800">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className={buttonClass("ghost", "sm")}>
            {nav.loginLabel}
          </Link>
          <Link href="/register" className={buttonClass("gold", "sm")}>
            {nav.registerLabel}
          </Link>
        </div>
        <MobileNav links={[...nav.primary, ...nav.prepare, { href: "/privacy", label: "Privacy Policy" }, { href: "/terms", label: "Terms" }]} />
      </div>
    </header>
  );
}

export async function SiteFooter() {
  const brand = await getBrand();
  const nav = await getContent(brand.schoolId, "navigation");
  const foot = await getContent(brand.schoolId, "footer");
  const year = new Date().getFullYear();
  const wa = foot.whatsapp.replace(/\D/g, "");
  return (
    <>
      <footer className="mt-10 bg-navy-900 text-white/80">
        <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="grid size-14 place-items-center overflow-hidden rounded-xl ring-1 ring-white/25">
                  <img src={brand.markUrl} alt="" className="size-full object-cover" />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold text-white">{brand.platformName}</span>
                  <span className="block text-[0.68rem] font-semibold tracking-[0.16em] text-gold-400">{brand.schoolShort}</span>
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">{foot.about} {brand.positioning}</p>
            </div>
            <FooterCol title={foot.learnTitle} links={[...nav.footerLearn]} />
            <FooterCol title={foot.prepareTitle} links={[...nav.footerPrepare]} />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">{foot.contactTitle}</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-2.5">
                  <Phone className="size-4 text-gold-400" aria-hidden />
                  <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {brand.phone}
                  </a>
                </li>
                {brand.email && (
                  <li className="flex items-center gap-2.5">
                    <Mail className="size-4 text-gold-400" aria-hidden />
                    <a href={`mailto:${brand.email}`} className="hover:text-white">
                      {brand.email}
                    </a>
                  </li>
                )}
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
                  <span>{brand.address}</span>
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                {foot.legalLinks.map((l) => (
                  <Link key={l.href + l.label} href={l.href} className="inline-flex items-center gap-0.5 hover:text-white">
                    {l.label} <ArrowUpRight className="size-3 opacity-60" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-12 select-none overflow-hidden whitespace-nowrap text-center font-display text-[clamp(2.2rem,10vw,7.5rem)] font-extrabold leading-none tracking-tight text-white/[0.06]" aria-hidden>
            {brand.platformName.toUpperCase()}
          </p>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-5 text-center text-xs text-white/55 sm:px-6">
            <p>
              © {year} {brand.schoolName}. All rights reserved.
            </p>
            {brand.showPoweredBy && <p className="font-medium text-white/80">{brand.poweredBy}</p>}
            <Link href="/backend" className="mt-0.5 text-[0.62rem] tracking-wide text-white/30 hover:text-white/80">
              {foot.backendLabel}
            </Link>
          </div>
        </div>
      </footer>
      {wa.length >= 8 && (
        <a
          href={`https://wa.me/${wa}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-5 right-4 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-[#25d366] px-4 text-sm font-bold text-white shadow-lift hover:brightness-105 sm:right-6"
        >
          <MessageCircle className="size-5" aria-hidden />
          <span className="hidden sm:inline">{foot.whatsappLabel}</span>
        </a>
      )}
    </>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-400">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
