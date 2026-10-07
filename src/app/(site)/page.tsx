/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, CalendarDays, CheckCircle2, ClipboardCheck, GraduationCap, LineChart, MonitorCheck, Plus, Quote, School, ShieldCheck, Target, UserPlus, Wifi } from "lucide-react";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { HomeCarousel } from "@/components/site/home-carousel";
import { AnnouncementCarousel } from "@/components/site/announcement-carousel";
import { buttonClass, cx } from "@/components/ui/primitives";

/** Only site paths and web addresses become links; anything else is ignored. */
const safeLink = (v: string) => (/^(\/(?!\/)|https?:\/\/)/.test(v.trim()) ? v.trim() : "");

const FEATURE_ICONS = { BookOpen, MonitorCheck, Target, ClipboardCheck, LineChart, ShieldCheck } as const;
const TILE = ["bg-royal-600 text-white", "bg-gold-500 text-navy-900", "bg-navy-800 text-white", "bg-card text-navy-800 ring-1 ring-line"];

export default async function HomePage() {
  const brand = await getBrand();
  const [home, faq] = await Promise.all([getContent(brand.schoolId, "home"), getContent(brand.schoolId, "faq")]);
  const slides = home.carousel.slides.filter((x) => x.title.trim()).map((x) => ({ ...x, link: safeLink(x.link) }));
  const announcements = home.announcements.items.filter((a) => a.text.trim()).map((a) => ({ ...a, link: safeLink(a.link) }));
  const founder = home.founder;
  const founderPhoto = /^[0-9a-f-]{36}$/i.test(founder.photoAssetId) ? `/api/v1/assets/${founder.photoAssetId}` : null;
  const founderLink = safeLink(founder.ctaLink);
  const marquee = [...home.prepCards.map((c) => c.title), ...home.trust, ...home.stats.map((s) => s.label)];
  return (
    <>
      {home.announcements.enabled && announcements.length > 0 && <AnnouncementCarousel items={announcements} seconds={home.announcements.secondsPerItem} />}
      {home.announcement.enabled && home.announcement.text && (
        <div className="mx-3 mt-3 rounded-xl bg-gold-500 px-4 py-2 text-center text-sm font-bold text-navy-900 sm:mx-5">
          {home.announcement.link ? (
            <Link href={home.announcement.link} className="underline-offset-2 hover:underline">
              {home.announcement.text}
            </Link>
          ) : (
            home.announcement.text
          )}
        </div>
      )}

      {/* HERO — full-bleed school photograph */}
      <section className="relative -mt-[4.5rem] isolate overflow-hidden bg-navy-900 text-white">
        <img src={brand.heroUrl} alt={`${brand.schoolName} school building`} fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 size-full object-cover object-[60%_40%]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,rgb(6_12_36/0.96)_8%,rgb(10_20_50/0.82)_42%,rgb(10_20_50/0.25)_100%)]" aria-hidden />
        <div className="bg-dots absolute inset-0 -z-10 opacity-40" aria-hidden />
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:grid-cols-[1.35fr_1fr] lg:pb-28">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold-400 backdrop-blur">
              <span className="size-1.5 rounded-full bg-gold-400" aria-hidden />
              {home.heroEyebrow}
            </p>
            <h1 className="mt-5 text-[2.7rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.4rem]">{home.heroHeading}</h1>
            <p className="mt-4 text-xl font-semibold text-gold-400 sm:text-2xl">{home.tagline}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{home.heroDescription}</p>
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
          </div>
          <aside className="animate-rise rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md [animation-delay:150ms]" aria-label="Quick start">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-gold-400">{home.journeyHeading}</p>
            <ol className="mt-4 space-y-3.5">
              {home.journey.map((j, i) => (
                <li key={j.title} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-gold-500 font-display text-xs font-bold text-navy-900">{i + 1}</span>
                  <span>
                    <span className="block text-sm font-bold">{j.title}</span>
                    <span className="block text-xs leading-snug text-white/70">{j.body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <ul className="mt-5 grid gap-1.5 border-t border-white/15 pt-4 text-xs text-white/80">
              {home.trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 shrink-0 text-gold-400" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {home.carousel.enabled && slides.length > 0 && <HomeCarousel slides={slides} seconds={home.carousel.secondsPerSlide} dark />}

      {/* TICKER */}
      <div className="overflow-hidden border-y border-line bg-card py-3" aria-hidden>
        <div className="animate-ticker flex w-max gap-10 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-sm font-semibold text-navy-800/70">
              {m}
              <span className="size-1.5 rotate-45 bg-gold-500" />
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.stats.map((s, i) => (
            <div key={s.label} className={cx("rounded-2xl p-6", i === 0 ? "bg-navy-800 text-white" : "border border-line bg-card")}>
              <p className={cx("font-display text-4xl font-extrabold", i === 0 ? "text-gold-400" : "text-royal-600")}>{s.value}</p>
              <p className={cx("mt-2 text-sm", i === 0 ? "text-white/75" : "text-muted")}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES — bento */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">{home.whyEyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">{home.featuresHeading}</h2>
          <p className="mt-3 text-muted">{home.featuresIntro}</p>
        </div>
        <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.features.map((f, i) => {
            const Icon = FEATURE_ICONS[f.icon as keyof typeof FEATURE_ICONS] ?? BookOpen;
            const big = i === 0 || i === 3;
            return (
              <div key={f.title} className={cx("group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-0.5", TILE[i % 4], big && "lg:col-span-2")}>
                <span className={cx("grid size-11 place-items-center rounded-xl", i % 4 === 3 ? "bg-navy-800 text-gold-400" : "bg-white/15")}>
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className={cx("mt-2 text-sm leading-relaxed", i % 4 === 3 ? "text-muted" : "opacity-80")}>{f.body}</p>
                <Icon className="absolute -bottom-6 -right-4 size-28 opacity-[0.07]" aria-hidden />
              </div>
            );
          })}
        </div>
      </section>

      {/* LEVELS */}
      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{home.levelsHeading}</h2>
            <p className="mt-3 text-white/70">{home.levelsIntro}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[...(brand.flags.primarySchool ? [{ title: "Primary School", range: "Basic 1 – Basic 6", body: "Lessons with pictures, short notes, Quantitative and Verbal Reasoning, Common Entrance practice and a safe, simple learning space for young pupils.", href: "/primary-school" }] : []), ...home.levels].map((l, i) => (
              <Link key={l.title} href={l.href} className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-7 transition hover:bg-white/10">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-gold-500 text-navy-900">{i === 0 ? <School className="size-6" aria-hidden /> : <GraduationCap className="size-6" aria-hidden />}</span>
                  <ArrowUpRight className="size-5 text-white/50 transition group-hover:text-gold-400" aria-hidden />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-gold-400">{l.range}</p>
                <h3 className="mt-1 text-2xl font-bold">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{l.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL */}
      {home.principal.enabled && home.principal.message && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <figure className="grid gap-8 rounded-3xl border border-line bg-card p-8 sm:p-12 lg:grid-cols-[auto_1fr]">
            <Quote className="size-16 rounded-2xl bg-gold-500 p-4 text-navy-900" aria-hidden />
            <div>
              <figcaption className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{home.principal.heading}</figcaption>
              <blockquote className="mt-3 font-display text-xl font-semibold leading-snug text-navy-800 sm:text-2xl">{home.principal.message}</blockquote>
              <p className="mt-6 font-bold text-navy-800">{home.principal.name}</p>
              <p className="text-sm text-muted">{home.principal.title}</p>
            </div>
          </figure>
        </section>
      )}

      {founder.enabled && (
        <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <div className={cx("grid items-center gap-8 rounded-3xl border border-line bg-card p-8 sm:p-12", founderPhoto && "lg:grid-cols-[0.7fr_1.3fr]")}>
            {founderPhoto && <img src={founderPhoto} alt={founder.name ? `${founder.name}, ${founder.role}` : founder.role} loading="lazy" decoding="async" className="mx-auto aspect-[4/5] w-full max-w-xs rounded-2xl object-cover object-top" />}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">{founder.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-800">{founder.heading}</h2>
              <div className="mt-4 space-y-3 leading-relaxed text-muted">
                {founder.message.split(/\n\s*\n/).filter((x) => x.trim()).map((x, i) => (
                  <p key={i}>{x.trim()}</p>
                ))}
              </div>
              <div className="mt-5 border-l-4 border-gold-500 pl-4">
                {founder.name && <p className="text-lg font-bold text-navy-800">{founder.name}</p>}
                <p className="text-sm font-semibold text-royal-600">{founder.role}</p>
              </div>
              {founder.highlights.length > 0 && (
                <ul className="mt-5 grid gap-2 text-sm text-muted">
                  {founder.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-royal-600" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {founderLink && founder.ctaLabel && (
                <Link href={founderLink} className={buttonClass("primary", "md", "mt-6")}>
                  {founder.ctaLabel} <ArrowRight className="size-4" aria-hidden />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* EXAM PREP */}
      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.prepCards.map((c, i) => (
            <Link key={c.href} href={c.href} className={cx("group flex min-h-[15rem] flex-col justify-between rounded-2xl p-6 transition hover:-translate-y-1", TILE[(i + 2) % 4])}>
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] opacity-70">{home.prepLabel}</p>
                <h3 className="mt-2 text-2xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm opacity-80">{c.body}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
                Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-3 rounded-xl border border-line bg-card px-5 py-4 text-sm text-muted">
          <Wifi className="size-5 shrink-0 text-royal-600" aria-hidden />
          {home.networkNote}
        </p>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-800">{home.newsHeading}</h2>
            <p className="mt-2 text-muted">{home.newsIntro}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {home.news.map((n) => (
            <article key={n.title} className="rounded-2xl border border-line bg-card p-6">
              <p className="inline-flex items-center gap-1.5 rounded-md bg-gold-100 px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wide text-gold-600">
                <CalendarDays className="size-3.5" aria-hidden />
                {n.date}
              </p>
              <h3 className="mt-3 text-lg font-bold text-navy-800">{n.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{n.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:py-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-800">{home.faqHeading}</h2>
            <p className="mt-3 text-muted">{home.faqIntro}</p>
            <Link href="/faq" className={buttonClass("secondary", "md", "mt-6")}>
              View all FAQs
            </Link>
          </div>
          <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {faq.items.slice(0, 5).map((f) => (
              <details key={f.q} className="group px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-navy-800">
                  {f.q}
                  <Plus className="size-5 shrink-0 text-royal-600 transition group-open:rotate-45" aria-hidden />
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-royal-600 px-6 py-14 text-center text-white sm:px-12">
          <img src={brand.markUrl} alt="" className="absolute -right-16 -top-16 size-72 rounded-full object-cover opacity-10" aria-hidden />
          <div className="bg-dots absolute inset-0 opacity-30" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{home.closingHeading}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">{home.closingBody}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
    </>
  );
}
