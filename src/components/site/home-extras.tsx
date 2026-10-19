import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Headphones, HeartHandshake, Medal, ScrollText, Users } from "lucide-react";
import { PROGRAMMES, PROGRAMME_KEYS } from "@/core/exam-programmes";
import { cx } from "../ui/primitives";

const CLASS_LABEL: Record<string, string> = { BASIC4: "Basic 4", BASIC5: "Basic 5", BASIC6: "Basic 6", JSS2: "JSS 2", JSS3: "JSS 3", SS2: "SSS 2", SS3: "SSS 3" };
const span = (codes: readonly string[]) => (codes.length > 3 ? "Basic 4 to SSS 3 examination classes" : codes.length === 1 ? CLASS_LABEL[codes[0]] : `${CLASS_LABEL[codes[0]]} to ${CLASS_LABEL[codes[codes.length - 1]]}`);

const PORTALS = [
  { icon: GraduationCap, title: "Students", body: "Lessons with pictures and sound, classwork, timed tests, report cards and rewards, from Basic 1 to SSS 3.", href: "/register", cta: "Register as a student", tint: "#1d4ed8" },
  { icon: HeartHandshake, title: "Parents and guardians", body: "See your child's lessons, results and report card, plan study time, learn about parenting and family life, and meet experts.", href: "/register/parent", cta: "Create a parent account", tint: "#be185d" },
  { icon: Building2, title: "Schools", body: "Prepare your examination classes for Common Entrance, BECE, WAEC, NECO and JAMB with one school account and School Code.", href: "/register/school", cta: "Register a school", tint: "#047857" },
];

const EXTRAS = [
  { icon: Headphones, title: "Listen and learn", body: "Teachers' recorded explanations under each topic, played with very little data." },
  { icon: ScrollText, title: "Term report cards", body: "First, second and third term, each one carrying the terms before it." },
  { icon: Medal, title: "Rewards and loyalty", body: "Best student in every class and subject each term, and points for steady work." },
  { icon: Users, title: "Family activities", body: "Picnics, cinema days, games and holiday outings arranged for families." },
];

/** Two graphic sections of the home page: the examination programmes by class, and the three kinds of account. */
export function HomeExtras({ dark }: { dark: boolean }) {
  return (
    <>
      <section className={cx("relative overflow-hidden", dark ? "bg-navy-950" : "bg-white")}>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className={cx("text-xs font-bold uppercase tracking-[0.2em]", dark ? "text-gold-400" : "text-gold-600")}>Examination preparation</p>
            <h2 className={cx("mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl", dark ? "text-white" : "text-navy-800")}>The right examination for every class</h2>
            <p className={cx("mt-3", dark ? "text-white/70" : "text-muted")}>Each learner sees only the examinations meant for their own class, so practice is always at the right level.</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMME_KEYS.map((k) => {
              const p = PROGRAMMES[k];
              return (
                <li key={k} className={cx("reveal glow-card relative overflow-hidden rounded-2xl p-5", dark ? "glass" : "border border-line bg-white shadow-card")}>
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1.5" style={{ background: p.colour }} />
                  <div className="flex items-center gap-3">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl text-sm font-extrabold text-white" style={{ background: p.colour }}>{p.label.slice(0, 2).toUpperCase()}</span>
                    <div>
                      <h3 className={cx("text-lg font-extrabold", dark ? "text-white" : "text-navy-800")}>{p.label}</h3>
                      <p className={cx("text-xs font-semibold", dark ? "text-gold-400" : "text-gold-600")}>{span(p.classes)}</p>
                    </div>
                  </div>
                  <p className={cx("mt-3 text-sm leading-relaxed", dark ? "text-white/70" : "text-muted")}>{p.blurb}</p>
                </li>
              );
            })}
          </ul>
          <ul className={cx("mt-10 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4", dark ? "bg-white/10" : "bg-line")}>
            {EXTRAS.map((x) => (
              <li key={x.title} className={cx("reveal p-5", dark ? "bg-navy-900" : "bg-surface")}>
                <x.icon className={cx("size-6", dark ? "text-gold-400" : "text-royal-600")} aria-hidden />
                <h3 className={cx("mt-2 font-bold", dark ? "text-white" : "text-navy-800")}>{x.title}</h3>
                <p className={cx("mt-1 text-sm leading-relaxed", dark ? "text-white/65" : "text-muted")}>{x.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={cx("relative overflow-hidden", dark ? "bg-gradient-to-b from-navy-950 to-navy-900" : "bg-surface")}>
        {dark && <div className="glow-orb -left-24 top-10 size-[26rem] bg-royal-600/20" aria-hidden />}
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className={cx("text-xs font-bold uppercase tracking-[0.2em]", dark ? "text-gold-400" : "text-gold-600")}>Three ways to join</p>
            <h2 className={cx("mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl", dark ? "text-white" : "text-navy-800")}>One academy for the learner, the family and the school</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PORTALS.map((p) => (
              <div key={p.title} className={cx("reveal glow-card flex flex-col rounded-2xl p-6", dark ? "glass" : "border border-line bg-white shadow-card")}>
                <span className="grid size-14 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${p.tint}, #0b1f4b)` }}><p.icon className="size-7" aria-hidden /></span>
                <h3 className={cx("mt-4 text-xl font-extrabold", dark ? "text-white" : "text-navy-800")}>{p.title}</h3>
                <p className={cx("mt-2 flex-1 text-sm leading-relaxed", dark ? "text-white/70" : "text-muted")}>{p.body}</p>
                <Link href={p.href} prefetch={false} className={cx("mt-5 inline-flex items-center gap-1.5 text-sm font-bold", dark ? "text-gold-400 hover:text-gold-500" : "text-royal-600 hover:text-royal-700")}>
                  {p.cta} <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
