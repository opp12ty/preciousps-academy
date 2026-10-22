import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, ClipboardList, Download, GraduationCap, ListChecks, NotebookPen } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { AppError } from "@/server/errors";
import { ebookFor, type EbookQuestion } from "@/server/services/ebooks";
import { termWindows } from "@/server/services/records";
import { downloadAccess } from "@/server/services/access";
import { DownloadLocked, PrintLock } from "@/components/download-gate";
import { cx } from "@/components/ui/primitives";
import { RichText } from "@/components/rich-text";
import { ChapterRead, PrintButton } from "@/components/learning";
import { buttonClass, Card } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "E-book" };

/** Questions with the correct option shown with * in front (revision and CBT exam prep). */
function Starred({ qs }: { qs: EbookQuestion[] }) {
  return (
    <ol className="space-y-4">
      {qs.map((q, i) => (
        <li key={i} className="break-inside-avoid">
          <div className="flex gap-2 font-semibold text-navy-800"><span>{i + 1}.</span><RichText text={q.stem} inline /></div>
          <ul className="mt-1 grid gap-0.5 pl-6 text-sm sm:grid-cols-2">
            {q.options.map((o) => <li key={o.label} className={o.correct ? "font-bold text-success-600" : "text-navy-800"}>{o.correct ? "*" : " "}{o.label}. <RichText text={o.text} inline /></li>)}
          </ul>
          {q.explanation && <p className="mt-1 pl-6 text-xs text-muted">Why: <RichText text={q.explanation} inline /></p>}
        </li>
      ))}
    </ol>
  );
}

/** Questions without answers (assignment), or with a hidden answer key (classwork). */
function Questions({ qs, answers }: { qs: EbookQuestion[]; answers?: boolean }) {
  return (
    <>
      <ol className="space-y-3">
        {qs.map((q, i) => (
          <li key={i} className="break-inside-avoid">
            <div className="flex gap-2 font-semibold text-navy-800"><span>{i + 1}.</span><RichText text={q.stem} inline /></div>
            <ul className="mt-1 grid gap-0.5 pl-6 text-sm sm:grid-cols-2">{q.options.map((o) => <li key={o.label}>{o.label}. <RichText text={o.text} inline /></li>)}</ul>
          </li>
        ))}
      </ol>
      {answers && (
        <details className="mt-3 rounded-xl bg-surface p-3 text-sm">
          <summary className="cursor-pointer font-semibold text-royal-600">Check your answers</summary>
          <ol className="mt-2 space-y-1">{qs.map((q, i) => { const c = q.options.find((o) => o.correct); return <li key={i}><strong>{i + 1}. {c?.label}</strong> {c && <RichText text={c.text} inline />}{q.explanation && <span className="text-muted"> · <RichText text={q.explanation} inline /></span>}</li>; })}</ol>
        </details>
      )}
    </>
  );
}

export default async function EbookPage({ params, searchParams }: PageProps<"/student/ebooks/[subjectId]">) {
  const s = await requireStudentPage();
  const { subjectId } = await params;
  const sp = await searchParams;
  if (!/^[0-9a-f-]{36}$/i.test(subjectId)) notFound();
  const id = (v: unknown) => (typeof v === "string" && /^[0-9a-f-]{36}$/i.test(v) ? v : undefined);
  const [cal, dl, dlFiles] = await Promise.all([termWindows(s.user.schoolId).catch(() => null), downloadAccess(s.user, "ebooks"), downloadAccess(s.user, "ebookFiles")]);
  /** Every file can be read in the app; downloading it follows the Admin's Downloads control. */
  const fileLinks = (list: { id: string; title: string; assetId: string }[]) => (
    <ul className="flex flex-wrap gap-2">
      {list.map((f) => (
        <li key={f.id} className="flex flex-wrap gap-1.5">
          <Link href={`/student/materials/read/${f.id}`} prefetch={false} className={buttonClass("secondary", "sm")}><BookOpen className="size-4" /> Read: {f.title}</Link>
          {dlFiles.allowed && <a href={`/api/v1/assets/${f.assetId}`} target="_blank" rel="noopener" className={buttonClass("ghost", "sm")} aria-label={`Download ${f.title}`}><Download className="size-4" /></a>}
        </li>
      ))}
    </ul>
  );
  const part = sp.part === "revision" || sp.part === "external" ? sp.part : undefined;
  const book = await ebookFor(s.actor, subjectId, { termId: id(sp.term), topicId: id(sp.topic), part, currentTerm: cal?.currentTerm }).catch((e) => { if (e instanceof AppError) notFound(); throw e; });
  const t = book.term;
  let n = (t?.firstChapter ?? 1) - 1;
  const href = (termId: string, topicId?: string) => `/student/ebooks/${subjectId}?term=${termId}${topicId ? `&topic=${topicId}` : ""}`;
  const partHref = (termId: string, p: "revision" | "external") => `/student/ebooks/${subjectId}?term=${termId}&part=${p}`;
  return (
    <article className="ebook mx-auto max-w-4xl space-y-6">
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-800 to-royal-700 p-6 text-white shadow-lift sm:p-8">
        <div aria-hidden className="mudcloth absolute inset-0 opacity-[0.12]" />
        <div aria-hidden className="kente-band absolute inset-x-0 bottom-0 h-2" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Precious PS e-book · NERDC scheme · {book.className}</p>
          <h1 className="mt-1 font-display text-3xl font-extrabold sm:text-4xl">{book.subject.name}</h1>
          {book.examLabel && <p className="mt-1 text-sm text-white/80">Includes revision and CBT exam prep for {book.examLabel}.</p>}
          <div className="mt-4 flex flex-wrap items-center gap-2">{dl.allowed ? <PrintButton /> : <><PrintLock phone={dl.phone} /><DownloadLocked phone={dl.phone} needsCode={dl.needsCode} /></>}<Link href="/student/path" className={buttonClass("white", "sm", "no-print")}>My Learning Path</Link></div>
        </div>
      </header>

      {book.wholeBookFiles.length > 0 && (
        <Card className="p-5">
          <p className="mb-2 text-sm font-bold text-navy-800">E-books from your school</p>
          {fileLinks(book.wholeBookFiles)}
        </Card>
      )}

      <nav aria-label="Contents" className="no-print rounded-2xl border border-line bg-white p-5 shadow-card">
        <p className="text-sm font-extrabold text-navy-800">Contents</p>
        <div className="no-scrollbar -mx-1 mt-3 flex gap-2 overflow-x-auto px-1">
          {book.contents.map((c) => <Link key={c.termId} href={href(c.termId)} className={cx("whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold", c.termId === t?.termId ? "bg-navy-800 text-white" : "bg-surface text-navy-800 ring-1 ring-line hover:bg-royal-50")}>{c.name} · {c.chapters.filter((x) => x.read).length}/{c.chapters.length}</Link>)}
        </div>
        {book.contents.filter((c) => c.termId === t?.termId).map((c) => (
          <ol key={c.termId} className="mt-3 grid gap-x-6 text-sm sm:grid-cols-2">
            {c.chapters.map((x) => { const on = t?.chapters[0]?.topicId === x.topicId && !book.nav.part; return <li key={x.topicId}><Link href={href(c.termId, x.topicId)} className={cx("hover:underline", on ? "font-extrabold text-navy-800" : "text-royal-600")}>{x.read ? "✓ " : ""}{x.n}. {x.title}</Link></li>; })}
            {book.nav.hasRevision && <li><Link href={partHref(c.termId, "revision")} className={cx("hover:underline", book.nav.part === "revision" ? "font-extrabold text-navy-800" : "text-[#9a3412]")}>★ Revision and CBT Exam Prep</Link></li>}
            {book.nav.hasExternal && <li><Link href={partHref(c.termId, "external")} className={cx("hover:underline", book.nav.part === "external" ? "font-extrabold text-navy-800" : "text-navy-900")}>★ JAMB, IJMB and JUPEB practice</Link></li>}
          </ol>
        ))}
        <p className="mt-3 text-xs text-muted">Each chapter opens on its own page so the e-book stays quick and light on every phone.</p>
      </nav>

      {t && (
        <section key={t.termId} className="space-y-6">
          <h2 className="rounded-2xl bg-gold-50 px-5 py-3 font-display text-2xl font-extrabold text-navy-800 ring-1 ring-gold-400/50">{t.name}</h2>
          {t.chapters.map((c) => {
            n++;
            return (
              <Card key={c.topicId} id={`topic-${c.topicId}`} className="scroll-mt-24 overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-navy-800 px-5 py-3 text-white">
                  <h3 className="text-lg font-extrabold">Chapter {n}: {c.title}</h3>
                  <ChapterRead topicId={c.topicId} subjectId={book.subject.id} read={c.read} />
                </div>
                <div className="space-y-6 p-5">
                  {c.lessons.length ? c.lessons.map((l) => (
                    <div key={l.id}>
                      <h4 className="text-base font-extrabold text-royal-600">{l.title}</h4>
                      {l.summary && <p className="mt-1 text-sm italic text-muted">{l.summary}</p>}
                      <RichText text={l.body} className="mt-2" />
                      {l.examples && <div className="mt-4 rounded-xl border-l-4 border-gold-500 bg-gold-50/60 p-4"><p className="mb-1 text-xs font-bold uppercase tracking-wide text-gold-600">Worked examples</p><RichText text={l.examples} /></div>}
                    </div>
                  )) : <p className="text-sm text-muted">The lesson for this topic is being prepared.</p>}
                  {c.files.length > 0 && fileLinks(c.files)}
                  {c.classwork.length > 0 && <div className="rounded-xl bg-surface p-4"><p className="mb-2 flex items-center gap-2 font-extrabold text-navy-800"><NotebookPen className="size-5 text-emerald-600" aria-hidden /> Classwork</p><Questions qs={c.classwork} answers /></div>}
                  {c.assignment.length > 0 && <div className="rounded-xl bg-royal-50 p-4"><p className="mb-2 flex items-center gap-2 font-extrabold text-navy-800"><ClipboardList className="size-5 text-royal-600" aria-hidden /> Assignment</p><p className="mb-2 text-xs text-muted">Answer these in your notebook, then do the marked assignment on Precious PS and redo it until you reach the pass mark.</p><Questions qs={c.assignment} /></div>}
                </div>
              </Card>
            );
          })}
          {t.revision.length > 0 && (
            <Card className="overflow-hidden">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#3d1d08] to-[#9a3412] px-5 py-3 text-white"><ListChecks className="size-5 text-gold-400" aria-hidden /><h3 className="text-lg font-extrabold">{t.name}: Revision and CBT Exam Prep ({book.examLabel})</h3></div>
              <div className="p-5"><p className="mb-3 text-xs text-muted">The correct answer has * in front. Cover the answers, attempt each question, then check.</p><Starred qs={t.revision} /></div>
            </Card>
          )}
          {t.external.map((x) => (
            <Card key={x.label} className="overflow-hidden">
              <div className="flex items-center gap-2 bg-navy-900 px-5 py-3 text-white"><GraduationCap className="size-5 text-gold-400" aria-hidden /><h3 className="text-lg font-extrabold">{x.label} practice</h3></div>
              <div className="p-5"><Starred qs={x.questions} /></div>
            </Card>
          ))}
          {(() => {
            const i = book.contents.findIndex((c) => c.termId === t.termId);
            const nextTerm = book.contents[i + 1];
            const { prevTopic, nextTopic, part: p, hasRevision } = book.nav;
            return (
              <div className="no-print flex flex-wrap justify-between gap-2">
                {prevTopic ? <Link href={href(t.termId, prevTopic)} className={buttonClass("secondary", "sm")}>← Previous chapter</Link> : <span />}
                {nextTopic ? <Link href={href(t.termId, nextTopic)} className={buttonClass("primary", "sm")}>Next chapter →</Link>
                  : !p && hasRevision ? <Link href={partHref(t.termId, "revision")} className={buttonClass("gold", "sm")}>Revision and CBT Exam Prep →</Link>
                  : nextTerm ? <Link href={href(nextTerm.termId)} className={buttonClass("primary", "sm")}>{nextTerm.name} →</Link> : null}
              </div>
            );
          })()}
        </section>
      )}
    </article>
  );
}
