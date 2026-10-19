import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Lightbulb } from "lucide-react";
import { requireParentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { HUB_SECTIONS, listParentArticles, parentDaily } from "@/server/services/hub";
import { SCIENCE_HUB_CATEGORIES } from "@/content/science-hub";
import { buttonClass, Card, cx, EmptyState, inputClass, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parent Learning Hub" };

const TABS = [["", "Everything"], ["LEARNING", "Learning Hub"], ["PSYCHOLOGY", "Psychology Library"], ["TEMPERAMENT", "Temperament"], ["SCIENCE", "Science & Engineering"]] as const;
const SCIENCE = new Set<string>(SCIENCE_HUB_CATEGORIES);

export default async function ParentLearning({ searchParams }: PageProps<"/parent/learning">) {
  const s = await requireParentPage();
  const sp = await searchParams;
  const section = typeof sp.section === "string" ? sp.section : "";
  const q = typeof sp.q === "string" ? sp.q : "";
  const { timezone } = await getSetting(s.user.schoolId, "localization");
  const day = new Intl.DateTimeFormat("en-CA", { timeZone: timezone }).format(new Date());
  const [list, daily] = await Promise.all([listParentArticles(s.actor, { section: section === "SCIENCE" ? "LEARNING" : section || undefined, search: q }).then((r) => (section === "SCIENCE" ? r.filter((a) => SCIENCE.has(a.category)) : r)), parentDaily(s.actor, day)]);
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="For parents" title="Parent Learning Hub" description="Free for every parent: practical guidance on parenting, child development, study habits, examinations and digital safety." />
      {daily && (
        <div className="grid gap-4 md:grid-cols-2">
          {daily.tip && <Card className="border-l-4 border-l-gold-500 p-5"><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gold-600"><Lightbulb className="size-4" aria-hidden /> Parent tip of the day</p><p className="mt-2 text-lg font-bold text-navy-800">{daily.tip}</p></Card>}
          <Card className="p-5"><p className="text-xs font-bold uppercase tracking-wide text-royal-600">Recommended today</p><Link href={`/parent/learning/${daily.article.id}`} className="mt-2 block text-lg font-bold text-navy-800 hover:text-royal-600">{daily.article.title}</Link><p className="mt-1 line-clamp-2 text-sm text-muted">{daily.article.summary}</p></Card>
        </div>
      )}
      <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
        <div className="no-scrollbar -mx-1 mb-3 flex gap-2 overflow-x-auto px-1">
          {TABS.map(([k, l]) => (
            <Link key={k || "all"} href={k ? `/parent/learning?section=${k}` : "/parent/learning"} className={cx("whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold", section === k ? "bg-navy-800 text-white" : "bg-surface text-navy-800 ring-1 ring-line hover:bg-royal-50")}>{l}</Link>
          ))}
        </div>
        <form className="flex flex-col gap-2 sm:flex-row" role="search">
          {section && <input type="hidden" name="section" value={section} />}
          <input name="q" defaultValue={q} placeholder="Search articles" aria-label="Search articles" className={inputClass} />
          <button className={buttonClass("primary")}>Search</button>
        </form>
      </div>
      {list.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {list.map((a) => (
            <Link key={a.id} href={`/parent/learning/${a.id}`} className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
              <span className="text-xs font-bold uppercase tracking-wide text-gold-600">{HUB_SECTIONS[a.section as keyof typeof HUB_SECTIONS]?.label} · {a.category}</span>
              <h2 className="mt-1 text-base font-bold text-navy-800">{a.title}</h2>
              <p className="mt-1 line-clamp-3 text-sm text-muted">{a.summary}</p>
            </Link>
          ))}
        </div>
      ) : (
        <Card><EmptyState icon={<BookOpen className="size-6" />} title="Nothing found" description="Try another section or clear the search." /></Card>
      )}
    </div>
  );
}
