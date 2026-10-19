import Link from "next/link";
import { ChevronDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { getContent } from "@/server/services/content";
import { getBrand } from "@/server/brand";
import { BrandLockup, Logo } from "../brand";
import { buttonClass } from "../ui/primitives";
import { MobileNav } from "./mobile-nav";
import { t } from "@/i18n";

export const PRIMARY_NAV = [
  { href: "/", label: t("nav.home") },
  { href: "/about", label: t("nav.about") },
  { href: "/subjects", label: t("nav.subjects") },
  { href: "/study-centre", label: t("nav.studyCentre") },
  { href: "/cbt-practice", label: t("nav.cbtPractice") },
  { href: "/mock-exams", label: t("nav.mockExams") },
  { href: "/how-it-works", label: t("nav.howItWorks") },
  { href: "/faq", label: t("nav.faq") },
  { href: "/contact", label: t("nav.contact") },
];
const PREP_NAV = [
  { href: "/bece-preparation", label: "BECE Preparation" },
  { href: "/jamb-preparation", label: "JAMB Preparation" },
  { href: "/waec-preparation", label: "WAEC Preparation" },
  { href: "/neco-preparation", label: "NECO Preparation" },
];

export async function SiteHeader() {
  const brand = await getBrand();
  const navCfg = await getContent(brand.schoolId, "navigation");
  const primaryOn = Boolean(brand.flags.primarySchool);
  const PRIMARY_NAV = navCfg.primary;
  const PREP_NAV = [...navCfg.prepare];
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <BrandLockup markUrl={brand.markUrl} compact />
        <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
          {[...PRIMARY_NAV.filter((l) => l.href !== "/").slice(0, primaryOn ? 6 : 7), ...(primaryOn ? [{ label: "Primary School", href: "/primary-school" }] : [])].map((l) => (
            <Link key={l.href} href={l.href} prefetch={false} className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[0.84rem] font-semibold text-navy-800/85 hover:bg-royal-50 hover:text-royal-700">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-2.5 py-2 text-[0.84rem] font-semibold text-navy-800/85 hover:bg-royal-50 hover:text-royal-700 [&::-webkit-details-marker]:hidden">
              {navCfg.parentsLabel} <ChevronDown className="size-3.5 transition group-open:rotate-180" aria-hidden />
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-52 rounded-xl border border-line bg-white p-1.5 shadow-lift">
              <Link href="/register/parent" className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-royal-50">
                {navCfg.parentRegisterLabel}
              </Link>
              <Link href="/login" className="block rounded-lg px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-royal-50">
                {navCfg.parentLoginLabel}
              </Link>
              <Link href="/for-parents" className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-royal-50">
                About the parent portal
              </Link>
            </div>
          </details>
          <Link href="/login" className={buttonClass("ghost", "sm")}>
            {navCfg.loginLabel}
          </Link>
          <Link href="/register" className={buttonClass("primary", "sm")}>
            {navCfg.registerLabel}
          </Link>
        </div>
        <MobileNav links={[...PRIMARY_NAV, ...(primaryOn ? [{ label: "Primary School", href: "/primary-school" }] : []), { label: navCfg.parentRegisterLabel, href: "/register/parent" }, { label: navCfg.parentLoginLabel, href: "/login" }, ...PREP_NAV, { href: "/for-parents", label: "For Parents" }, { href: "/get-access", label: "Get an Access Code" }, { href: "/privacy", label: "Privacy Policy" }, { href: "/terms", label: "Terms" }]} />
      </div>
    </header>
  );
}

export async function SiteFooter() {
  const brand = await getBrand();
  const foot = await getContent(brand.schoolId, "footer");
  const wa = foot.whatsapp.replace(/\D/g, "");
  const year = new Date().getFullYear();
  return (
    <>
    <footer className="bg-navy-900 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-2xl bg-white p-1.5">
              <Logo src={brand.markUrl} alt="Precious PS Academy crest" className="size-full" />
            </span>
            <div>
              <p className="font-extrabold tracking-wide text-white">{brand.platformName}</p>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-gold-400">{brand.schoolName}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{brand.tagline} {brand.positioning}</p>
        </div>
        <FooterCol title="Learn" links={[{ href: "/study-centre", label: "Study Centre" }, { href: "/subjects", label: "Subjects" }, { href: "/cbt-practice", label: "CBT Practice" }, { href: "/mock-exams", label: "Mock Exams" }]} />
        <FooterCol title="Prepare" links={[...PREP_NAV, { href: "/primary-school", label: "Primary School" }, { href: "/for-parents", label: "For Parents" }, { href: "/get-access", label: "Get an Access Code" }, { href: "/how-it-works", label: "How It Works" }, { href: "/faq", label: "FAQ" }]} />
        <div>
          <p className="text-sm font-bold text-white">Contact</p>
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
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
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
            Backend access
          </Link>
        </div>
      </div>
    </footer>
    {wa.length >= 8 && (
      <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className="fixed bottom-5 right-4 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-[#25d366] px-4 text-sm font-bold text-white shadow-lift hover:brightness-105 sm:right-6">
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
