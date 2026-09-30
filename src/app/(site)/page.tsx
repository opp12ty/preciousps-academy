/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Quote, GraduationCap, School, BookOpen, CheckCircle2, ClipboardCheck, KeyRound, LineChart, MonitorCheck, ShieldCheck, Target, UserPlus, Wifi } from "lucide-react";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { Logo } from "@/components/brand";
import { buttonClass } from "@/components/ui/primitives";

const JOURNEY_ICONS = { UserPlus, KeyRound, BookOpen, MonitorCheck } as const;
const ICONS = { BookOpen, MonitorCheck, Target, ClipboardCheck, LineChart, ShieldCheck } as const;

export default async function HomePage() {
  const brand = await getBrand();
  const home = await getContent(brand.schoolId, "home");
  const faq = await getContent(brand.schoolId, "faq");
  return (
    <>
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
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute -right-40 -top-40 size-[34rem] rounded-full bg-royal-600/25 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:pb-24 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-white/[0.06] py-2 pl-2 pr-4 ring-1 ring-white/15">
              <span className="grid size-12 place-items-center overflow-hidden rounded-xl ring-1 ring-white/30">
                <Logo src={brand.markUrl} alt="Precious PS Academy crest" className="size-full" priority />
              </span>
              <span className="text-[0.7rem] font-bold tracking-[0.2em] text-gold-400">{home.heroEyebrow}</span>
            </div>
            <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]">{home.heroHeading}</h1>
            <p className="mt-4 text-xl font-semibold text-gold-400 sm:text-2xl">{home.tagline}</p>
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
            <ul className="mt-8 grid gap-2 text-sm text-white/75 sm:grid-cols-3">
              {home.trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-gold-400" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <img
              src={brand.heroUrl}
              alt={`${brand.schoolName} students in school uniform on campus`}
              width={1280}
              height={720}
              fetchPriority="high"
              decoding="async"
              className="aspect-video w-full rounded-[2rem] bg-navy-700 object-cover shadow-lift ring-4 ring-white/10"
            />
            {/* floating product cards */}
            <div className="absolute -left-2 top-8 hidden rounded-2xl bg-white p-3.5 text-navy-800 shadow-lift sm:block">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-muted">Time remaining</p>
              <p className="font-mono text-xl font-bold tabular-nums text-royal-600">00:42:15</p>
              <div className="mt-2 grid grid-cols-5 gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className={`size-4 rounded ${i < 6 ? "bg-royal-600" : i === 6 ? "bg-gold-500" : "bg-slate-200"}`} />
                ))}
              </div>
            </div>
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

      {/* STATS */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line px-0 sm:px-6 lg:grid-cols-4">
          {home.stats.map((s) => (
            <div key={s.label} className="bg-white px-4 py-7 text-center">
              <p className="text-3xl font-extrabold text-navy-800">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-muted sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">{home.whyEyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">{home.featuresHeading}</h2>
          <p className="mt-3 text-muted">{home.featuresIntro}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {home.features.map((f) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS] ?? BookOpen;
            return (
              <div key={f.title} className="group rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
                <span className="grid size-12 place-items-center rounded-xl bg-navy-800 text-gold-400">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-800">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEVELS */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-800 sm:text-4xl">{home.levelsHeading}</h2>
          <p className="mt-3 text-muted">{home.levelsIntro}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {home.levels.map((l, i) => (
            <Link key={l.title} href={l.href} className="group flex gap-5 rounded-2xl border border-line bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-navy-800 text-gold-400">{i === 0 ? <School className="size-7" aria-hidden /> : <GraduationCap className="size-7" aria-hidden />}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{l.range}</p>
                <h3 className="mt-1 text-xl font-extrabold text-navy-800">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{l.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {home.principal.enabled && home.principal.message && (
        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <figure className="relative rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-10">
            <Quote className="absolute -top-5 left-8 size-10 rounded-full bg-gold-500 p-2 text-navy-900" aria-hidden />
            <figcaption className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{home.principal.heading}</figcaption>
            <blockquote className="mt-3 text-lg leading-relaxed text-navy-800">{home.principal.message}</blockquote>
            <p className="mt-5 font-bold text-navy-800">{home.principal.name}</p>
            <p className="text-sm text-muted">{home.principal.title}</p>
          </figure>
        </section>
      )}

      {/* JOURNEY */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy-800">{home.journeyHeading}</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {home.journey.map((step, i) => ({ ...step, icon: JOURNEY_ICONS[step.icon as keyof typeof JOURNEY_ICONS] ?? BookOpen, n: i })).map((s, i) => (
              <li key={s.title} className="relative rounded-2xl bg-white p-6 shadow-card">
                <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-royal-100">{i + 1}</span>
                <s.icon className="size-7 text-royal-600" aria-hidden />
                <h3 className="mt-4 font-bold text-navy-800">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EXAM PREP */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {home.prepCards.map((c) => (
            <Link key={c.href} href={c.href} className="group flex flex-col justify-between rounded-2xl bg-navy-800 p-6 text-white shadow-card transition hover:bg-navy-700">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">{home.prepLabel}</p>
                <h3 className="mt-2 text-2xl font-extrabold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/75">{c.body}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                Learn more <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-sm text-muted">
          <Wifi className="size-5 shrink-0 text-royal-600" aria-hidden />
          {home.networkNote}
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:py-20">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-800">{home.faqHeading}</h2>
            <p className="mt-3 text-muted">{home.faqIntro}</p>
            <Link href="/faq" className={buttonClass("secondary", "md", "mt-6")}>
              View all FAQs
            </Link>
          </div>
          <div className="divide-y divide-line rounded-2xl border border-line bg-white">
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
        <div className="relative overflow-hidden rounded-[2rem] bg-royal-600 px-6 py-12 text-center text-white sm:px-12">
          <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
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
    </>
  );
}
