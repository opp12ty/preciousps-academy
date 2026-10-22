/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, KeyRound, LineChart, MonitorCheck, Quote, ShieldCheck, Target, UserPlus, Wifi } from "lucide-react";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { Logo } from "@/components/brand";
import { HomeCarousel } from "@/components/site/home-carousel";
import { AnnouncementCarousel } from "@/components/site/announcement-carousel";
import { buttonClass, cx } from "@/components/ui/primitives";

const ICONS = { BookOpen, MonitorCheck, Target, ClipboardCheck, LineChart, ShieldCheck } as const;

/** Founder portrait shown until a replacement is uploaded in Homepage & Content → Homepage → Founder. */
import { HomeExtras } from "@/components/site/home-extras";
import { AfricanCulture, AfricanValues, EducationSystem, KenteBand } from "@/components/site/home-africa";
import { LiveClock } from "@/components/site/live-clock";


/** Only site paths and web addresses become links; anything else is ignored. */
const safeLink = (v: string) => (/^(\/(?!\/)|https?:\/\/)/.test(v.trim()) ? v.trim() : "");

export default async function HomePage() {
  const brand = await getBrand();
  const home = await getContent(brand.schoolId, "home");
  const faq = await getContent(brand.schoolId, "faq");
  const af = await getContent(brand.schoolId, "home-africa");
  const vals = await getContent(brand.schoolId, "african-values");
  const slides = home.carousel.slides.filter((s) => s.title.trim()).map((s) => ({ ...s, link: safeLink(s.link) }));
  const dark = home.appearance.darkGlowStyle;
  const announcements = home.announcements.items.filter((a) => a.text.trim()).map((a) => ({ ...a, link: safeLink(a.link) }));
  const founder = home.founder;
  const founderPhoto = /^[0-9a-f-]{36}$/i.test(founder.photoAssetId) ? `/api/v1/assets/${founder.photoAssetId}` : brand.heroUrl;
  const founderLink = safeLink(founder.ctaLink);
  return (
    <div className={cx(home.appearance.animations && "fx")}>
      {home.announcements.enabled && announcements.length > 0 && <AnnouncementCarousel items={announcements} seconds={home.announcements.secondsPerItem} />}
      {home.announcement.enabled && home.announcement.text && (
        <div className="bg-gold-500 px-4 py-2 text-center text-sm font-semibold text-navy-900">
          {home.announcement.link ? (
            <Link href={home.announcement.link} className="underline-offset-2 hover:underline">
              {home.announcement.text}
            </Link>
          ) : (
            home.announcement.text
          )}
        </div>
      )}

      {/* HERO */}
      <section className={cx("relative overflow-hidden text-white", dark ? "bg-gradient-to-b from-navy-950 via-navy-900 to-navy-900" : "bg-navy-800")}>
        <div className="mudcloth absolute inset-0 opacity-[0.12]" aria-hidden />
        <div className="glow-orb -right-40 -top-40 size-[34rem] bg-royal-600/30" aria-hidden />
        {dark && <div className="glow-orb -left-32 bottom-0 size-[26rem] bg-gold-500/15" aria-hidden />}
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.08fr_1fr] lg:pb-24 lg:pt-20">
          <div className="rise">
            <div className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-white/[0.06] py-2 pl-2 pr-4 ring-1 ring-white/15">
              <span className="grid size-12 place-items-center rounded-xl bg-white p-1">
                <Logo src={brand.markUrl} alt="Precious PS Academy crest" className="size-full" priority />
              </span>
              <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold-400">{home.heroEyebrow}</span>
            </div>
            <h1 className={cx("font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]", dark && "text-gold-gradient")}>{home.heroHeading}</h1>
            <p className={cx("mt-4 text-xl font-semibold sm:text-2xl", dark ? "text-white" : "text-gold-400")}>{home.tagline}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">{home.positioning}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{home.heroDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/register" className={buttonClass("gold", "lg")}>
                <UserPlus className="size-5" aria-hidden />
                {home.ctaRegister}
              </Link>
              <Link href="/login" className={buttonClass("white", "lg")}>
                {home.ctaLogin}
              </Link>
              <Link href="/login?next=/student/exams" className={buttonClass("outlineLight", "lg")}>
                <MonitorCheck className="size-5" aria-hidden />
                {home.ctaCbt}
              </Link>
            </div>
            <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/80">
              <span className="font-semibold">{home.parentPrompt}</span>
              <Link href="/register/parent" className="rounded-lg bg-white/15 px-3 py-1.5 font-bold text-white ring-1 ring-white/25 hover:bg-white/25">
                {home.ctaParentRegister}
              </Link>
              <Link href="/login" className="rounded-lg px-3 py-1.5 font-bold text-gold-400 ring-1 ring-gold-400/60 hover:bg-gold-400/10">
                {home.ctaParentLogin}
              </Link>
            </p>
            <ul className="mt-8 grid gap-2 text-sm text-white/75 sm:grid-cols-3">
              {home.trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-gold-400" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rise relative mx-auto w-full max-w-lg">
            <img
              src={brand.heroUrl}
              alt={`${brand.schoolName} students in school uniform on campus`}
              width={1024}
              height={1024}
              fetchPriority="high"
              decoding="async"
              className={cx("aspect-square w-full rounded-[2rem] bg-navy-700 object-cover", dark ? "gold-frame" : "shadow-lift ring-4 ring-white/10")}
            />
            {/* live Lagos time and date, top right, clear of the school name */}
            <LiveClock className="absolute -right-2 -top-4 rounded-2xl bg-white px-3.5 py-2.5 text-right shadow-lift ring-2 ring-gold-400 sm:-right-4" />
            <div className="absolute -right-1 bottom-10 hidden rounded-2xl bg-white p-3.5 shadow-lift sm:block">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-muted">Mathematics Mock</p>
              <div className="mt-1 flex items-end gap-2">
                <p className="text-3xl font-extrabold text-navy-800">82%</p>
                <span className="mb-1 rounded-full bg-success-50 px-2 py-0.5 text-xs font-bold text-success-600">Grade A</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KenteBand />

      {home.carousel.enabled && slides.length > 0 && <HomeCarousel slides={slides} seconds={home.carousel.secondsPerSlide} dark={dark} />}

      {/* STATS */}
      <section className={dark ? "bg-navy-900" : "border-b border-line bg-white"}>
        <div className={cx("mx-auto grid max-w-7xl grid-cols-2 gap-px px-0 sm:px-6 lg:grid-cols-4", dark ? "bg-white/10" : "bg-line")}>
          {home.stats.map((s) => (
            <div key={s.label} className={cx("px-4 py-7 text-center", dark ? "bg-navy-900" : "bg-white")}>
              <p className={cx("text-3xl font-extrabold", dark ? "text-gold-gradient" : "text-navy-800")}>{s.value}</p>
              <p className={cx("mt-1 text-xs font-medium sm:text-sm", dark ? "text-white/65" : "text-muted")}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <EducationSystem pictureId={af.educationPictureAssetId} caption={af.educationCaption} text={{ eyebrow: af.educationEyebrow, heading: af.educationHeading, intro: af.educationIntro }} stages={af.stages} />
      <KenteBand />

      {/* FEATURES */}
      <section className={cx("relative overflow-hidden", dark && "bg-gradient-to-b from-navy-900 to-navy-950")}>
        {dark && <div className="glow-orb left-1/2 top-24 size-[30rem] -translate-x-1/2 bg-royal-600/20" aria-hidden />}
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className={cx("text-xs font-bold uppercase tracking-[0.2em]", dark ? "text-gold-400" : "text-gold-600")}>Why Precious PS</p>
            <h2 className={cx("mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl", dark ? "text-white" : "text-navy-800")}>{home.featuresHeading}</h2>
            <p className={cx("mt-3", dark ? "text-white/70" : "text-muted")}>{home.featuresIntro}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {home.features.map((f) => {
              const Icon = ICONS[f.icon as keyof typeof ICONS] ?? BookOpen;
              return (
                <div key={f.title} className={cx("reveal glow-card rounded-2xl p-6", dark ? "glass" : "border border-line bg-white shadow-card")}>
                  <span className={cx("grid size-12 place-items-center rounded-xl", dark ? "bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950" : "bg-navy-800 text-gold-400")}>
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className={cx("mt-4 text-lg font-bold", dark ? "text-white" : "text-navy-800")}>{f.title}</h3>
                  <p className={cx("mt-2 text-sm leading-relaxed", dark ? "text-white/70" : "text-muted")}>{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXAM PREP */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/bece-preparation", t: "BECE (JSS3)", d: "Basic Education Certificate Examination practice and mock papers for JSS3." },
            { href: "/jamb-preparation", t: "JAMB (UTME)", d: "CBT-first practice for the Unified Tertiary Matriculation Examination." },
            { href: "/waec-preparation", t: "WAEC (WASSCE)", d: "Topic mastery and objective-paper practice for the WASSCE." },
            { href: "/neco-preparation", t: "NECO (SSCE)", d: "Guided revision and full mock papers for the NECO SSCE." },
          ].map((c) => (
            <Link key={c.href} href={c.href} className={cx("reveal glow-card group flex flex-col justify-between rounded-2xl p-6 text-white shadow-card", dark ? "bg-gradient-to-br from-navy-800 to-navy-950" : "bg-navy-800 hover:bg-navy-700")}>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Preparation</p>
                <h3 className="mt-2 text-2xl font-extrabold">{c.t}</h3>
                <p className="mt-2 text-sm text-white/75">{c.d}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                Learn more <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-sm text-muted">
          <Wifi className="size-5 shrink-0 text-royal-600" aria-hidden />
          Built for Nigerian networks: small downloads, continuous autosave and safe recovery if your connection drops mid-exam.
        </div>
      </section>

      <KenteBand />
      <div className="cv-auto"><AfricanCulture dark={dark} pictureId={af.culturePictureAssetId} caption={af.cultureCaption} text={{ eyebrow: af.cultureEyebrow, heading: af.cultureHeading, intro: af.cultureIntro }} cards={af.cultureCards} /></div>
      <KenteBand />
      <div className="cv-auto"><AfricanValues pictureId={af.farmPictureAssetId} caption={af.farmCaption} text={{ eyebrow: af.valuesEyebrow, heading: af.valuesHeading, intro: af.valuesIntro }} values={vals.values} /></div>
      <KenteBand />

      <div className="cv-auto"><HomeExtras dark={dark} /></div>

      {/* FOUNDER */}
      {founder.enabled && (
        <section className={cx("relative overflow-hidden", dark ? "bg-navy-950 text-white" : "bg-surface")}>
          {dark && <div className="glow-orb -right-24 top-10 size-[28rem] bg-gold-500/15" aria-hidden />}
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:py-24">
            <div className="reveal mx-auto w-full max-w-sm">
              <img src={founderPhoto} alt={founder.name ? `${founder.name}, ${founder.role}` : founder.role} width={1024} height={1536} loading="lazy" decoding="async" className={cx("aspect-[4/5] w-full rounded-[2rem] object-cover object-top", dark ? "gold-frame" : "shadow-lift ring-1 ring-line")} />
            </div>
            <div className="reveal">
              <p className={cx("text-xs font-bold uppercase tracking-[0.2em]", dark ? "text-gold-400" : "text-gold-600")}>{founder.eyebrow}</p>
              <h2 className={cx("mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl", dark ? "text-white" : "text-navy-800")}>{founder.heading}</h2>
              <Quote className={cx("mt-6 size-8", dark ? "text-gold-400/70" : "text-royal-600/50")} aria-hidden />
              <div className={cx("mt-3 space-y-4 text-base leading-relaxed", dark ? "text-white/80" : "text-muted")}>
                {founder.message
                  .split(/\n\s*\n/)
                  .filter((p) => p.trim())
                  .map((p, i) => (
                    <p key={i}>{p.trim()}</p>
                  ))}
              </div>
              <div className={cx("mt-6 border-l-4 pl-4", dark ? "border-gold-400" : "border-royal-600")}>
                {founder.name && <p className={cx("text-lg font-extrabold", dark ? "text-white" : "text-navy-800")}>{founder.name}</p>}
                <p className={cx("text-sm font-semibold", dark ? "text-gold-400" : "text-royal-600")}>{founder.role}</p>
              </div>
              {founder.highlights.length > 0 && (
                <ul className={cx("mt-6 grid gap-2 text-sm", dark ? "text-white/75" : "text-muted")}>
                  {founder.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <CheckCircle2 className={cx("mt-0.5 size-4 shrink-0", dark ? "text-gold-400" : "text-royal-600")} aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {founderLink && founder.ctaLabel && (
                <Link href={founderLink} className={buttonClass(dark ? "gold" : "primary", "md", "mt-7")}>
                  {founder.ctaLabel} <ArrowRight className="size-4" aria-hidden />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* JOURNEY */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="reveal text-center text-3xl font-extrabold tracking-tight text-navy-800">{home.journeyHeading}</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { icon: UserPlus, title: "Register", body: "Create your student account in minutes." },
              { icon: KeyRound, title: "Activate your code", body: `Access starts when you activate. Codes: Super Admin (${brand.accessCodeContact}).` },
              { icon: BookOpen, title: "Study & practise", body: "Lessons, classwork and assignments at your pace." },
              { icon: MonitorCheck, title: "Sit CBT & improve", body: "Mock exams, instant results and analytics." },
            ].map((s, i) => (
              <li key={s.title} className="reveal relative rounded-2xl bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
                <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-royal-100">{i + 1}</span>
                <s.icon className="size-7 text-royal-600" aria-hidden />
                <h3 className="mt-4 font-bold text-navy-800">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:py-20">
          <div className="reveal">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-800">Questions, answered</h2>
            <p className="mt-3 text-muted">Everything students and parents ask most often.</p>
            <Link href="/faq" className={buttonClass("secondary", "md", "mt-6")}>
              View all FAQs
            </Link>
          </div>
          <div className="reveal divide-y divide-line rounded-2xl border border-line bg-white">
            {faq.items.slice(0, 4).map((f) => (
              <details key={f.q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-navy-800">
                  {f.q}
                  <span className="text-xl text-royal-600 transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className={cx("reveal relative overflow-hidden rounded-[2rem] px-6 py-12 text-center text-white sm:px-12", dark ? "bg-gradient-to-br from-navy-950 via-navy-800 to-royal-700" : "bg-royal-600")}>
          <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
          {dark && <div className="glow-orb -bottom-24 left-1/2 size-80 -translate-x-1/2 bg-gold-500/25" aria-hidden />}
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{home.closingHeading}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">{home.closingBody}</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/register" className={buttonClass("gold", "lg")}>
                {home.ctaRegister}
              </Link>
              <Link href="/login" className={buttonClass("outlineLight", "lg")}>
                {home.ctaLogin}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
