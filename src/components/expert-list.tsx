import Link from "next/link";
import { Clock, Globe, Mail, Phone, Quote, Stethoscope } from "lucide-react";
import { EXPERT_PROFESSIONS } from "@/server/services/family";
import { Alert, Badge, Card, cx, EmptyState } from "@/components/ui/primitives";

interface Expert { id: string; profession: string; name: string; title: string | null; topics: string; bio: string; phone: string | null; email: string | null; website: string | null; availability: string | null; testimonials: string }

const lines = (s: string) => s.split("\n").map((t) => t.trim()).filter(Boolean);

export function ProfessionFilter({ base, pick }: { base: string; pick: string }) {
  return (
    <nav aria-label="Profession" className="no-scrollbar flex gap-2 overflow-x-auto">
      {[["", "Everyone"], ...Object.entries(EXPERT_PROFESSIONS)].map(([k, l]) => (
        <Link key={k || "all"} prefetch={false} href={k ? `${base}?p=${k}` : base} className={cx("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ring-1", pick === k ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line hover:bg-surface")}>{l}</Link>
      ))}
    </nav>
  );
}

export function ExpertList({ list }: { list: Expert[] }) {
  if (!list.length) return <Card><EmptyState icon={<Stethoscope className="size-6" />} title="No expert listed here yet" description="The school is adding professionals to this page. Please check again soon, or ask the school office." /></Card>;
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {list.map((e) => (
        <Card key={e.id} className="flex flex-col p-5">
          <div className="flex items-start gap-3">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-navy-800 text-base font-extrabold text-gold-400">{e.name.replace(/^(dr|mr|mrs|miss|barr|prof)\.?\s+/i, "").split(" ").map((p) => p[0]).slice(0, 2).join("")}</span>
            <div className="min-w-0">
              <h2 className="font-extrabold text-navy-800">{e.name}</h2>
              {e.title && <p className="text-xs text-muted">{e.title}</p>}
              <Badge tone="blue" className="mt-1">{EXPERT_PROFESSIONS[e.profession as keyof typeof EXPERT_PROFESSIONS] ?? "Professional"}</Badge>
            </div>
          </div>
          {e.topics && (
            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-wide text-gold-600">Can help with</p>
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-navy-800">{lines(e.topics).map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          )}
          {e.bio && <p className="mt-3 text-sm leading-relaxed text-muted">{e.bio}</p>}
          {lines(e.testimonials).length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wide text-gold-600">What people say ({lines(e.testimonials).length})</p>
              {lines(e.testimonials).slice(0, 3).map((t) => <p key={t} className="flex gap-2 rounded-lg bg-surface p-2 text-sm text-navy-800"><Quote className="size-4 shrink-0 text-gold-500" aria-hidden /> {t}</p>)}
            </div>
          )}
          <div className="mt-auto space-y-1.5 border-t border-line pt-4 text-sm">
            {e.phone && <a href={`tel:${e.phone.replace(/[^+0-9]/g, "")}`} className="flex items-center gap-2 font-semibold text-royal-600 hover:underline"><Phone className="size-4" aria-hidden /> {e.phone}</a>}
            {e.email && <a href={`mailto:${e.email}`} className="flex items-center gap-2 font-semibold text-royal-600 hover:underline"><Mail className="size-4" aria-hidden /> {e.email}</a>}
            {e.website && <a href={e.website} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 font-semibold text-royal-600 hover:underline"><Globe className="size-4" aria-hidden /> Website</a>}
            {e.availability && <p className="flex items-center gap-2 text-muted"><Clock className="size-4" aria-hidden /> {e.availability}</p>}
          </div>
        </Card>
      ))}
    </div>
  );
}

export function ExpertNote() {
  return (
    <Alert tone="info">
      <strong>Please note.</strong> The school lists these contacts to help families find qualified help. Each professional or agency is responsible for their own advice and fees; agree these directly with them. Never pay anyone who promises a “guaranteed visa”: only an embassy can grant a visa. In an emergency, go to the nearest hospital or police station.
    </Alert>
  );
}
