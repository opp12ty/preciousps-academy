/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { getAccessState } from "@/server/services/access";
import { FEATURE_DENIED } from "@/core/features";
import { kindFromSlug, listEntriesForStudent, WORD_KINDS } from "@/server/services/wordbank";
import { studentScope } from "@/server/services/scope";
import { getCatalog } from "@/server/services/curriculum";
import { MaterialsNav } from "@/components/student/materials-nav";
import { Alert, buttonClass, Card, cx, EmptyState, inputClass, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Study Materials" };

const INTRO = {
  WORD: "Words with pictures, meanings and example sentences.",
  IDIOM: "Idioms are phrases whose meaning is different from the meaning of the separate words.",
  CLICHE: "Clichés are sayings that are used very often. Know what they mean, and use them sparingly in your own writing.",
  PHRASAL_VERB: "A phrasal verb is a verb joined to a small word such as up, off or after, giving a new meaning.",
  PROVERB: "Proverbs are short wise sayings handed down through generations, from Nigeria, Africa and around the world.",
  COMMON_ERROR: "Mistakes people often make in English, the correct form, and why. Read a few every day and you will stop making them.",
} as const;

export default async function WordsPage({ params, searchParams }: PageProps<"/student/materials/[kind]">) {
  const s = await requireStudentPage();
  const { kind: slug } = await params;
  const kind = kindFromSlug(slug);
  if (!kind) notFound();
  const sp = await searchParams;
  const q = typeof sp.q === "string" ? sp.q : "";
  const letter = typeof sp.letter === "string" && /^[A-Z]$/.test(sp.letter) ? sp.letter : "";
  const [access, hub, scope, cat] = await Promise.all([getAccessState(s.user.id), getSetting(s.user.schoolId, "learningHub"), studentScope(s.user.id), getCatalog(s.user.schoolId)]);
  const on = { WORD: hub.dictionaryEnabled, IDIOM: hub.idiomsEnabled, CLICHE: hub.clichesEnabled, PHRASAL_VERB: hub.phrasalVerbsEnabled, PROVERB: hub.proverbsEnabled !== false, COMMON_ERROR: hub.commonErrorsEnabled !== false }[kind];
  if (!on) notFound();
  // Open only while a code is running and that code includes Learning Resources.
  const active = access.status === "ACTIVE" && access.features.includes("LEARNING_RESOURCES");
  const entries = active ? await listEntriesForStudent(s.actor, { kind, search: q, letter }) : [];
  const className = cat.classes.find((c) => c.id === scope.classId)?.name;
  const href = (l: string) => `/student/materials/${slug}${l || q ? `?${new URLSearchParams({ ...(l ? { letter: l } : {}), ...(q ? { q } : {}) })}` : ""}`;
  return (
    <>
      <PageHeader eyebrow={className ? `For ${className}` : "Learn more"} title={WORD_KINDS[kind].label} description={INTRO[kind]} />
      <MaterialsNav current={slug} flags={hub} />
      {!active && <Alert tone="warning" className="mb-6">{access.status === "ACTIVE" ? FEATURE_DENIED : access.message}</Alert>}
      <div className="mb-5 rounded-2xl border border-line bg-white p-4 shadow-card">
        <form className="flex flex-col gap-2 sm:flex-row" role="search">
          {letter && <input type="hidden" name="letter" value={letter} />}
          <input name="q" defaultValue={q} placeholder={`Search ${WORD_KINDS[kind].label.toLowerCase()}`} aria-label="Search" className={inputClass} />
          <button className={buttonClass("primary")}>Search</button>
          {(q || letter) && <Link href={`/student/materials/${slug}`} className={buttonClass("ghost")}>Clear</Link>}
        </form>
        <div className="no-scrollbar -mx-1 mt-3 flex gap-1 overflow-x-auto px-1" role="group" aria-label="First letter">
          {["", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((l) => (
            <Link key={l || "all"} href={href(l)} aria-current={letter === l ? "true" : undefined} className={cx("grid h-8 min-w-8 shrink-0 place-items-center rounded-lg px-2 text-sm font-bold", letter === l ? "bg-navy-800 text-white" : "bg-surface text-navy-800 ring-1 ring-line hover:bg-royal-50")}>
              {l || "All"}
            </Link>
          ))}
        </div>
      </div>
      {entries.length ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {entries.map((e) => (
            <Card key={e.id} className="flex gap-4 p-4">
              <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-royal-50 text-4xl" aria-hidden>
                {e.imageAssetId ? <img src={`/api/v1/assets/${e.imageAssetId}`} alt="" className="size-full object-cover" /> : (e.picture ?? "📘")}
              </div>
              <div className="min-w-0">
                {kind === "COMMON_ERROR" ? (
                  <>
                    {e.partOfSpeech && <p className="text-[0.68rem] font-bold uppercase tracking-wide text-gold-600">{e.partOfSpeech}</p>}
                    <p className="text-sm font-semibold text-danger-600"><span aria-hidden>✗ </span><span className="sr-only">Wrong: </span><span className="line-through decoration-danger-600/60">{e.term}</span></p>
                    {e.example && <p className="mt-1 text-base font-extrabold text-emerald-700"><span aria-hidden>✓ </span><span className="sr-only">Correct: </span>{e.example}</p>}
                    <p className="mt-1 text-sm text-muted">{e.meaning}</p>
                  </>
                ) : (
                  <>
                    <h2 className="text-lg font-extrabold text-navy-800">{e.term}</h2>
                    {e.partOfSpeech && (kind === "WORD" || kind === "PROVERB") && <p className="text-xs font-semibold italic text-royal-600">{e.partOfSpeech}</p>}
                    <p className="mt-1 text-sm text-navy-800">{e.meaning}</p>
                    {e.example && <p className="mt-1.5 border-l-2 border-gold-400 pl-2 text-sm italic text-muted">{e.example}</p>}
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <EmptyState icon={<BookOpen className="size-6" />} title={active ? "Nothing found" : "Activate access to open"} description={active ? (q || letter ? "Nothing matches. Clear the search to see everything." : "Entries appear here as your teachers add them.") : "Enter your access code on your dashboard."} />
        </Card>
      )}
    </>
  );
}
