import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Cog, Lock } from "lucide-react";
import { SCIENCE_HUB_CATEGORIES } from "@/content/science-hub";
import { FEATURE_DENIED } from "@/core/features";
import { AppError } from "@/server/errors";
import { requireStudentPage } from "@/server/http";
import { hubState, listStudentArticles, type HubState } from "@/server/services/hub";
import { HubSessionBar } from "@/components/family-controls";
import { Alert, buttonClass, Card, cx, EmptyState, inputClass, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Knowledge Hub" };

const SCIENCE = new Set<string>(SCIENCE_HUB_CATEGORIES);

export default async function KnowledgeHub({ searchParams }: PageProps<"/student/knowledge">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const q = typeof sp.q === "string" ? sp.q : "";
  const category = typeof sp.category === "string" ? sp.category : "";
  const science = sp.hub === "science";
  const base = science ? "/student/knowledge?hub=science" : "/student/knowledge";
  const link = (c: string) => (c ? `${base}${science ? "&" : "?"}category=${encodeURIComponent(c)}` : base);
  let state: HubState | null = null;
  let denied = "";
  try {
    state = await hubState(s.actor);
  } catch (e) {
    denied = e instanceof AppError ? e.message : FEATURE_DENIED;
  }
  const everything = state?.active ? await listStudentArticles(s.actor, {}) : [];
  const all = science ? everything.filter((a) => SCIENCE.has(a.category)) : everything;
  const categories = science ? SCIENCE_HUB_CATEGORIES.filter((c) => all.some((a) => a.category === c)) : [...new Set(all.map((a) => a.category))];
  const list = all.filter((a) => (!category || a.category === category) && (!q || `${a.title} ${a.summary}`.toLowerCase().includes(q.toLowerCase())));
  return (
    <div className="space-y-5">
      {science ? (
        <PageHeader eyebrow="Knowledge Hub" title="Science & Engineering Hub" description="How things work, mechanically and electrically: vehicles, ships, aeroplanes, the solar system, solar power, plumbing, sewage, computers and machines at home." actions={<Link href="/student/knowledge" className={buttonClass("secondary")}>All Knowledge Hub topics</Link>} />
      ) : (
        <PageHeader eyebrow="Learn more" title="Knowledge Hub" description="History, culture, science, technology, current affairs, study skills and more, chosen for your class." actions={<Link href="/student/knowledge?hub=science" className={buttonClass("secondary")}><Cog className="size-4" aria-hidden /> Science & Engineering Hub</Link>} />
      )}
      {denied ? (
        <Card className="p-6"><div className="flex items-start gap-3"><Lock className="size-6 shrink-0 text-muted" aria-hidden /><div><p className="font-bold text-navy-800">Knowledge Hub is locked</p><p className="mt-1 text-sm text-muted">{denied}</p></div></div></Card>
      ) : !state!.enabled ? (
        <Alert tone="warning">The Knowledge Hub is switched off at the moment.</Alert>
      ) : (
        <>
          <HubSessionBar key={`${state!.active}-${state!.cooldownSeconds > 0}`} secondsLeft={state!.secondsLeft} cooldownSeconds={state!.cooldownSeconds} unlimited={state!.unlimited} sessionMinutes={state!.sessionMinutes} />
          {state!.active && (
            <>
              <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
                <form className="flex flex-col gap-2 sm:flex-row" role="search">
                  {science && <input type="hidden" name="hub" value="science" />}
                  {category && <input type="hidden" name="category" value={category} />}
                  <input name="q" defaultValue={q} placeholder="Search the Knowledge Hub" aria-label="Search" className={inputClass} />
                  <button className={buttonClass("primary")}>Search</button>
                </form>
                <div className="no-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1">
                  {["", ...categories].map((c) => (
                    <Link key={c || "all"} href={link(c)} className={cx("whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold", category === c ? "bg-navy-800 text-white" : "bg-surface text-navy-800 ring-1 ring-line hover:bg-royal-50")}>
                      {c || "All topics"}
                    </Link>
                  ))}
                </div>
              </div>
              {list.length ? (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {list.map((a) => (
                    <Link key={a.id} href={`/student/knowledge/${a.id}`} className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
                      <span className="text-xs font-bold uppercase tracking-wide text-gold-600">{a.category}</span>
                      <h2 className="mt-1 text-base font-bold text-navy-800">{a.title}</h2>
                      <p className="mt-1 line-clamp-3 text-sm text-muted">{a.summary}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                <Card><EmptyState icon={<BookOpen className="size-6" />} title="Nothing found" description="Try another topic or clear the search." /></Card>
              )}
              <p className="text-sm text-muted">Ready to test yourself? Try the <Link href="/student/quiz" className="font-semibold text-royal-600 hover:underline">Quiz Arena and challenges</Link>.</p>
            </>
          )}
        </>
      )}
    </div>
  );
}
