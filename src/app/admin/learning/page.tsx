import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Pencil } from "lucide-react";
import { SECTION_FILTER_OPTIONS, SECTION_SHORT, type Section } from "@/core/sections";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { getCatalog } from "@/server/services/curriculum";
import { listEntriesAdmin, WORD_KIND_KEYS, WORD_KINDS, type WordKind } from "@/server/services/wordbank";
import { DeleteEntry, EntryForm, StarterButton } from "@/components/admin/learning-controls";
import { CentralUpload } from "@/components/admin/central-upload";
import { SettingsForm, type FieldSpec } from "@/components/admin/settings-forms";
import { FilterBar, spRecord } from "@/components/admin/filters";
import { buttonClass, Card, CardHeader, cx, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Dictionary & Games" };

export default async function LearningAdmin({ searchParams }: PageProps<"/admin/learning">) {
  const s = await requireStaffPage("learning.manage");
  const sp = spRecord(await searchParams);
  const tab = sp.tab === "settings" ? "settings" : ((WORD_KIND_KEYS as string[]).includes(sp.tab ?? "") ? (sp.tab as WordKind) : "WORD");
  const cat = await getCatalog(s.user.schoolId);
  const classes = cat.classes.map((c) => ({ value: c.id, label: c.name }));
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Study materials" title="Dictionary, idioms & learning games" description="Everything students see under Study Materials → Picture Dictionary, Idioms, Clichés, Phrasal Verbs and Games. Entries can be for every class, one section or one class." />
      <nav aria-label="Collections" className="no-scrollbar flex gap-1 overflow-x-auto">
        {[...WORD_KIND_KEYS.map((k) => [k, WORD_KINDS[k].label] as const), ["settings", "Games & settings"] as const].map(([k, l]) => (
          <Link key={k} href={`/admin/learning?tab=${k}`} className={cx("whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-semibold", tab === k ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>
            {l}
          </Link>
        ))}
      </nav>
      {tab === "settings" ? <Settings schoolId={s.user.schoolId} /> : <Entries schoolId={s.user.schoolId} kind={tab} sp={sp} classes={classes} />}
    </div>
  );
}

async function Entries({ schoolId, kind, sp, classes }: { schoolId: string; kind: WordKind; sp: Record<string, string | undefined>; classes: { value: string; label: string }[] }) {
  const rows = await listEntriesAdmin(schoolId, { kind, search: sp.search, level: sp.level, classId: sp.classId });
  const one = WORD_KINDS[kind].one;
  return (
    <>
      <Card>
        <CardHeader title={`Add ${kind === "IDIOM" ? "an" : "a"} ${one}`} action={<StarterButton />} description="The starter collection adds ready-made words, idioms, clichés and phrasal verbs; entries you already have are left alone." />
        <div className="p-5"><EntryForm kind={kind} classes={classes} /></div>
      </Card>
      <Card>
        <CardHeader title="Add many at once from Excel" description="Download the template, fill in the Dictionary, Idioms, Cliches or Phrasal Verbs sheet, and upload it. Entries that already exist are updated." />
        <div className="p-5"><CentralUpload templateHref="/api/v1/admin/central-template?only=words" /></div>
      </Card>
      <FilterBar action="/admin/learning" hidden={{ tab: kind }} values={sp} filters={[{ type: "search", name: "search", placeholder: "Word or meaning" }, { type: "select", name: "level", label: "Section", options: SECTION_FILTER_OPTIONS }, { type: "select", name: "classId", label: "Class", options: classes }]} />
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>{kind === "WORD" ? "Word" : "Phrase"}</Th><Th>Meaning</Th><Th>Who sees it</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {rows.map(({ e, className }) => (
                <tr key={e.id} className="align-top">
                  <Td className="whitespace-nowrap"><span className="mr-2 text-xl" aria-hidden>{e.picture}</span><span className="font-semibold text-navy-800">{e.term}</span>{e.partOfSpeech && kind === "WORD" && <span className="ml-1 text-xs italic text-muted">{e.partOfSpeech}</span>}</Td>
                  <Td className="max-w-md text-sm"><p>{e.meaning}</p>{e.example && <p className="text-xs italic text-muted">{e.example}</p>}</Td>
                  <Td className="text-sm">{className ? `${className} only` : e.level ? `All ${SECTION_SHORT[e.level as Section] ?? e.level}` : "Every class"}</Td>
                  <Td><StatusBadge status={e.status} /></Td>
                  <Td className="text-right">
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <details className="relative text-left">
                        <summary className={buttonClass("secondary", "sm", "list-none cursor-pointer")}><Pencil className="size-4" /> Edit</summary>
                        <div className="absolute right-0 z-20 mt-2 w-[min(56rem,92vw)] rounded-2xl border border-line bg-white p-4 shadow-lift"><EntryForm kind={kind} entry={e} classes={classes} /></div>
                      </details>
                      <DeleteEntry id={e.id} term={e.term} />
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<BookOpen className="size-6" />} title="Nothing here yet" description="Press “Add starter collection”, or add your own above." />
        )}
      </Card>
      <p className="text-xs text-muted">{rows.length} shown.</p>
    </>
  );
}

async function Settings({ schoolId }: { schoolId: string }) {
  const cfg = await getSetting(schoolId, "learningHub");
  const fields: FieldSpec[] = [
    { key: "dictionaryEnabled", label: "Show the Picture Dictionary", type: "bool" },
    { key: "idiomsEnabled", label: "Show Idioms", type: "bool" },
    { key: "clichesEnabled", label: "Show Clichés", type: "bool" },
    { key: "phrasalVerbsEnabled", label: "Show Phrasal Verbs", type: "bool" },
    { key: "gamesEnabled", label: "Show Games", type: "bool", hint: "Switch off to hide every game at once." },
    { key: "wordScramble", label: "Game: Word Scramble", type: "bool", hint: "Unscramble a dictionary word from its picture and meaning." },
    { key: "memoryMatch", label: "Game: Memory Match", type: "bool", hint: "Turn over cards to pair each picture with its word." },
    { key: "meaningMatch", label: "Game: Meaning Match", type: "bool", hint: "Choose the meaning of an idiom, cliché or phrasal verb." },
    { key: "mathsSprint", label: "Game: Maths Sprint", type: "bool", hint: "Quick sums pitched at the student's class." },
    { key: "numberPatterns", label: "Game: Number Patterns", type: "bool", hint: "Find the next number in the pattern." },
    { key: "roundQuestions", label: "Questions in a round (5–30)", type: "number", min: 5, max: 30 },
    { key: "secondsPerRound", label: "Seconds for a round (30–900)", type: "number", min: 30, max: 900 },
  ];
  return (
    <Card>
      <CardHeader title="Games and what students see" description="Games draw their words from the collections above and set their difficulty from the student's class." />
      <div className="p-5"><SettingsForm settingKey="learningHub" initial={cfg} fields={fields} /></div>
    </Card>
  );
}
