/* eslint-disable @next/next/no-img-element */
import { PrintButton } from "./print-button";

const fmt = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "long" }).format(new Date(d));

export interface CertificateData {
  kind: string;
  name: string;
  line: string;
  detail: string;
  number?: string;
  date: Date;
  verificationCode?: string;
  seal: string;
}

/** A colourful landscape certificate drawn with CSS and SVG only, so it stays sharp when printed. */
export function CertificateView({ c, brand }: { c: CertificateData; brand: { logoUrl: string; schoolName: string } }) {
  return (
    <div className="mx-auto max-w-5xl space-y-4">
      <div className="no-print flex justify-end"><PrintButton label="Print / save as PDF" /></div>
      <article className="print-card relative overflow-hidden rounded-2xl bg-white shadow-lift" style={{ aspectRatio: "1.414 / 1", minHeight: "26rem", background: "linear-gradient(135deg,#fffdf5 0%,#ffffff 45%,#eef3ff 100%)" }}>
        {/* frame */}
        <div aria-hidden className="absolute inset-2 rounded-xl sm:inset-3" style={{ border: "6px solid transparent", background: "linear-gradient(#fff0,#fff0) padding-box, linear-gradient(120deg,#c8a02f,#1d4ed8,#7c3aed,#047857,#c8a02f) border-box" }} />
        <div aria-hidden className="absolute inset-5 rounded-lg border border-gold-400/60 sm:inset-6" />
        {/* corner ribbons */}
        <svg aria-hidden viewBox="0 0 200 200" className="absolute -left-6 -top-6 size-40 opacity-90 sm:size-56"><path d="M0 0h200L0 200z" fill="#0b1f4b" /><path d="M0 0h150L0 150z" fill="#1d4ed8" /><path d="M0 0h95L0 95z" fill="#d8b650" /></svg>
        <svg aria-hidden viewBox="0 0 200 200" className="absolute -bottom-6 -right-6 size-40 rotate-180 opacity-90 sm:size-56"><path d="M0 0h200L0 200z" fill="#0b1f4b" /><path d="M0 0h150L0 150z" fill="#7c3aed" /><path d="M0 0h95L0 95z" fill="#d8b650" /></svg>
        <svg aria-hidden viewBox="0 0 400 60" className="absolute inset-x-0 bottom-0 w-full opacity-20"><path d="M0 40c60-30 120 20 200 0s140-30 200-5v25H0z" fill="#1d4ed8" /></svg>
        <div className="relative flex h-full flex-col items-center justify-center px-8 py-10 text-center sm:px-16">
          <img src={brand.logoUrl} alt="" className="h-14 w-auto object-contain sm:h-20" />
          <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-gold-600 sm:text-xs">{brand.schoolName} · Precious PS Academy</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl" style={{ background: "linear-gradient(100deg,#0b1f4b,#1d4ed8 45%,#7c3aed)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>{c.kind}</h1>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted sm:text-sm">This is proudly presented to</p>
          <p className="mt-2 border-b-2 border-gold-400 px-6 pb-1 font-display text-2xl font-extrabold text-navy-800 sm:text-4xl">{c.name}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-800 sm:text-base">{c.line}</p>
          <p className="mt-1 text-xs text-muted sm:text-sm">{c.detail}</p>
          <div className="mt-6 flex w-full max-w-3xl items-end justify-between gap-4">
            <div className="text-left text-[0.65rem] text-muted sm:text-xs">
              <p className="border-t border-navy-800 pt-1 font-semibold text-navy-800">Date: {fmt(c.date)}</p>
              {c.number && <p className="mt-1 font-mono">No. {c.number}</p>}
            </div>
            <div aria-hidden className="relative grid size-20 shrink-0 place-items-center sm:size-28">
              <svg viewBox="0 0 120 120" className="absolute inset-0 size-full">
                <g fill="#d8b650">{Array.from({ length: 16 }, (_, i) => <path key={i} d="M60 4l7 16h-14z" transform={`rotate(${i * 22.5} 60 60)`} />)}</g>
                <circle cx="60" cy="60" r="42" fill="#0b1f4b" /><circle cx="60" cy="60" r="36" fill="none" stroke="#d8b650" strokeWidth="2" strokeDasharray="3 3" />
              </svg>
              <span className="relative px-2 text-center text-[0.6rem] font-extrabold uppercase leading-tight tracking-wide text-gold-400 sm:text-xs">{c.seal}</span>
            </div>
            <div className="text-right text-[0.65rem] text-muted sm:text-xs">
              <p className="border-t border-navy-800 pt-1 font-semibold text-navy-800">Head of school</p>
              {c.verificationCode && <p className="mt-1">Verify: /verify/{c.verificationCode}</p>}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
