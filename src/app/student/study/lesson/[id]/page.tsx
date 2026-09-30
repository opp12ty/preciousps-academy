import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, FileText, Headphones, PlayCircle, Target } from "lucide-react";
import { requireStudentPage, reqCtx } from "@/server/http";
import { openLesson } from "@/server/services/study";
import { toPublicError } from "@/server/errors";
import { RichText } from "@/components/rich-text";
import { renderQuestion } from "@/components/exam/render";
import { ObjectiveRunner } from "@/components/exam/objective-runner";
import { CompleteLessonButton } from "@/components/student/complete-lesson";
import { Alert, Badge, buttonClass, Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Lesson" };

function youtubeEmbed(url: string) {
  try {
    const u = new URL(url);
    const id = u.hostname.includes("youtu.be") ? u.pathname.slice(1) : u.searchParams.get("v");
    return id && /^[\w-]{6,20}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

export default async function LessonPage({ params }: PageProps<"/student/study/lesson/[id]">) {
  const s = await requireStudentPage();
  const { id } = await params;
  let v;
  try {
    v = await openLesson(s.actor, id, await reqCtx());
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "NOT_FOUND") notFound();
    return (
      <div className="mx-auto max-w-xl">
        <Alert tone={p.code === "ACCESS_EXPIRED" || p.code === "ACCESS_REQUIRED" ? "warning" : "danger"} title="This lesson is not available">
          {p.message}
        </Alert>
        <Link href="/student/study" className={buttonClass("secondary", "md", "mt-4")}>
          Back to Study Centre
        </Link>
      </div>
    );
  }
  const l = v.lesson;
  const embed = l.videoUrl ? youtubeEmbed(l.videoUrl) : null;
  const done = v.progress?.status === "COMPLETED";
  return (
    <article className="mx-auto max-w-3xl">
      <PageHeader
        breadcrumbs={[{ href: "/student/study", label: "Study Centre" }, { href: `/student/study/${v.subjectId}`, label: v.subject }, { label: l.title }]}
        eyebrow={v.topic}
        title={l.title}
        description={l.summary ?? undefined}
        actions={done ? <Badge tone="green">Completed</Badge> : <Badge tone="blue">{l.estimatedMinutes} min</Badge>}
      />
      <ol className="mb-6 flex flex-wrap gap-2 text-xs font-semibold" aria-label="Learning path">
        {["Lesson", "Study material", "Classwork", "Assessment", "Next lesson"].map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className={`rounded-full px-3 py-1 ${i === 0 || (i <= 3 && done) ? "bg-navy-800 text-white" : "bg-white text-muted ring-1 ring-line"}`}>{step}</span>
            {i < 4 && <span className="text-muted" aria-hidden>→</span>}
          </li>
        ))}
      </ol>

      {embed && (
        <div className="mb-6 aspect-video overflow-hidden rounded-2xl bg-navy-900 shadow-card">
          <iframe src={embed} title={`Video: ${l.title}`} className="size-full" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        </div>
      )}
      <Card className="p-6 sm:p-8">
        <RichText text={l.body} />
        {l.examples && (
          <section className="mt-8 rounded-2xl border border-gold-400/40 bg-gold-50 p-5">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-gold-600">Worked examples</h2>
            <RichText text={l.examples} className="mt-2" />
          </section>
        )}
        {l.audioUrl && (
          <a href={l.audioUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal-600 hover:underline">
            <Headphones className="size-4" /> Listen to the audio lesson <ExternalLink className="size-3.5" />
          </a>
        )}
        {l.videoUrl && !embed && (
          <a href={l.videoUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal-600 hover:underline">
            <PlayCircle className="size-4" /> Watch the video <ExternalLink className="size-3.5" />
          </a>
        )}
      </Card>

      {v.resources.length > 0 && (
        <Card className="mt-6 p-5">
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-muted">Study materials</h2>
          <ul className="mt-3 space-y-2">
            {v.resources.map((r) => (
              <li key={r.id}>
                <a href={r.url ?? `/api/v1/assets/${r.assetId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-surface">
                  <FileText className="size-4 text-royal-600" /> {r.title} <ExternalLink className="ml-auto size-3.5 text-muted" />
                </a>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <section className="mt-8" aria-labelledby="cw">
        <div className="mb-4 flex items-center gap-2">
          <Target className="size-5 text-royal-600" aria-hidden />
          <h2 id="cw" className="text-lg font-extrabold text-navy-800">
            {v.classwork.length ? "Classwork" : "Finish this lesson"}
          </h2>
          {v.classwork.length > 0 && <span className="text-sm text-muted">· pass mark {v.threshold}% · auto-marked</span>}
        </div>
        {v.classwork.length ? (
          <>
            {v.attempts.length > 0 && (
              <p className="mb-3 text-sm text-muted">
                Previous attempts: {v.attempts.map((a) => `${a.percentage}%`).join(", ")} {done && "· You have mastered this lesson."}
              </p>
            )}
            <ObjectiveRunner
              questions={v.classwork.map((q, i) => renderQuestion(q.questionId, i + 1, q))}
              endpoint={`/api/v1/lessons/${l.id}/classwork`}
              passLabel="You have mastered this lesson."
              canRetry={v.allowRetry}
              locked={!v.allowRetry && v.attempts.length > 0 && !done ? "Retries are disabled for this classwork." : undefined}
            />
          </>
        ) : (
          <CompleteLessonButton lessonId={l.id} done={done} />
        )}
      </section>

      <nav className="mt-10 flex justify-between gap-3 border-t border-line pt-6" aria-label="Lesson navigation">
        {v.prev ? (
          <Link href={`/student/study/lesson/${v.prev.id}`} className={buttonClass("secondary")}>
            <ArrowLeft className="size-4" /> {v.prev.title}
          </Link>
        ) : (
          <span />
        )}
        {v.next && (
          <Link href={`/student/study/lesson/${v.next.id}`} className={buttonClass(done ? "primary" : "secondary")}>
            {v.next.title} <ArrowRight className="size-4" />
          </Link>
        )}
      </nav>
    </article>
  );
}
