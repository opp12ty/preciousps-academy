import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { getBrand } from "@/server/brand";
import { BrandLockup, Logo } from "../brand";
import { buttonClass } from "../ui/primitives";
import { MobileNav } from "./mobile-nav";
import { getContent } from "@/server/services/content";


export async function SiteHeader() {
  const brand = await getBrand();
  const nav = await getContent(brand.schoolId, "navigation");
  const PRIMARY_NAV = nav.primary;
  const PREP_NAV = nav.prepare;
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <BrandLockup markUrl={brand.markUrl} name={brand.platformName} subtitle={brand.schoolShort} compact />
        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
          {PRIMARY_NAV.filter((l) => l.href !== "/").slice(0, 7).map((l) => (
            <Link key={l.href} href={l.href} className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.84rem] font-semibold text-navy-800/85 hover:bg-royal-50 hover:text-royal-700">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <Link href="/login" className={buttonClass("ghost", "sm")}>
            {nav.loginLabel}
          </Link>
          <Link href="/register" className={buttonClass("primary", "sm")}>
            {nav.registerLabel}
          </Link>
        </div>
        <MobileNav links={[...PRIMARY_NAV, ...PREP_NAV, { href: "/privacy", label: "Privacy Policy" }, { href: "/terms", label: "Terms" }]} />
      </div>
    </header>
  );
}

export async function SiteFooter() {
  const brand = await getBrand();
  const nav = await getContent(brand.schoolId, "navigation");
  const foot = await getContent(brand.schoolId, "footer");
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center overflow-hidden rounded-2xl ring-1 ring-white/30">
              <Logo src={brand.markUrl} alt="Precious PS Academy crest" className="size-full" />
            </span>
            <div>
              <p className="font-extrabold tracking-wide text-white">{brand.platformName}</p>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-gold-400">{brand.schoolShort}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{foot.about} {brand.positioning}</p>
        </div>
        <FooterCol title={foot.learnTitle} links={[...nav.footerLearn]} />
        <FooterCol title={foot.prepareTitle} links={[...nav.footerPrepare]} />
        <div>
          <p className="text-sm font-bold text-white">{foot.contactTitle}</p>
          <ul className="mt-3 space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-gold-400" aria-hidden />
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {brand.phone}
              </a>
            </li>
            {brand.email && (
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-gold-400" aria-hidden />
                <a href={`mailto:${brand.email}`} className="hover:text-white">
                  {brand.email}
                </a>
              </li>
            )}
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-gold-400" aria-hidden />
              <span>{brand.address}</span>
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs">
            {foot.legalLinks.map((l) => (
              <Link key={l.href + l.label} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-5 text-center text-xs text-white/60 sm:px-6">
          <p>
            © {year} {brand.schoolName}. All rights reserved.
          </p>
          {brand.showPoweredBy && <p className="font-medium text-white/80">{brand.poweredBy}</p>}
          <Link href="/backend" className="mt-0.5 text-[0.62rem] tracking-wide text-white/35 hover:text-white/80">
            {foot.backendLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-sm font-bold text-white">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
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
