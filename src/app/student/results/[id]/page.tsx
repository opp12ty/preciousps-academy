/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Download, Hourglass } from "lucide-react";
import { requireStudentPage, reqCtx } from "@/server/http";
import { getBrand } from "@/server/brand";
import { getStudentResult } from "@/server/services/exams";
import { toPublicError } from "@/server/errors";
import { ResultReview } from "@/components/result-review";
import { PrintButton } from "@/components/print-button";
import { Alert, Badge, buttonClass, Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Result" };
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "long", timeStyle: "short" }).format(d) : "—");

export default async function ResultPage({ params, searchParams }: PageProps<"/student/results/[id]">) {
  const s = await requireStudentPage();
  const { id } = await params;
  const sp = await searchParams;
  const brand = await getBrand();
  let r;
  try {
    r = await getStudentResult(s.actor, id, await reqCtx());
  } catch (e) {
    if (toPublicError(e).code === "NOT_FOUND") notFound();
    throw e;
  }
  if (!r.visible) {
    return (
      <div className="mx-auto max-w-xl">
        {sp.submitted && <Alert tone="success" className="mb-4" title="Examination submitted">Your answers were recorded securely.</Alert>}
        <Card className="p-8 text-center">
          <Hourglass className="mx-auto size-10 text-gold-500" aria-hidden />
          <h1 className="mt-3 text-xl font-extrabold text-navy-800">{r.examTitle}</h1>
          <p className="mt-2 text-sm text-muted">{r.message}</p>
        </Card>
      </div>
    );
  }
  const res = r.result;
  const minutes = Math.floor(res.timeUsedSec / 60);
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {sp.submitted && (
        <Alert tone="success" title={sp.submitted === "auto" ? "Time is up — your examination was submitted automatically" : "Examination submitted successfully"}>
          Your score was calculated securely on the server.
        </Alert>
      )}
      <div className="no-print">
        <PageHeader
          breadcrumbs={[{ href: "/student/results", label: "Results" }, { label: r.examTitle }]}
          title="Result"
          actions={
            <>
              <PrintButton />
              <a href={`/api/v1/results/${res.id}/slip`} className={buttonClass("primary")} target="_blank" rel="noopener">
                <Download className="size-4" /> Result slip (PDF)
              </a>
            </>
          }
        />
      </div>
      {/* Printable result slip */}
      <Card className="overflow-hidden">
        <div className="flex flex-col items-center gap-2 border-b border-line bg-white px-6 py-6 text-center">
          <img src={brand.logoUrl} alt="Precious PS Academy logo" className="size-24 rounded-xl object-contain" />
          <p className="text-lg font-extrabold tracking-wide text-navy-800">Precious PS Academy</p>
          <p className="text-xs font-bold tracking-[0.18em] text-gold-600">{brand.schoolName}</p>
        </div>
        <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto]">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div><dt className="text-xs uppercase tracking-wide text-muted">Student</dt><dd className="font-bold text-navy-800">{s.user.firstName} {s.user.lastName}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide text-muted">Examination</dt><dd className="font-bold text-navy-800">{r.examTitle}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide text-muted">Subject</dt><dd className="font-semibold">{r.subject}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide text-muted">Date</dt><dd className="font-semibold">{fmt(r.submittedAt)}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide text-muted">Attempt</dt><dd className="font-semibold">{res.attemptNumber}</dd></div>
            <div><dt className="text-xs uppercase tracking-wide text-muted">Submission</dt><dd className="font-semibold">{r.submissionMethod === "TIMEOUT" ? "Auto-submitted (time up)" : "Submitted by student"}</dd></div>
          </dl>
          <div className="flex items-center gap-4 rounded-2xl bg-navy-800 px-6 py-5 text-white">
            <div className="text-center">
              <p className="text-4xl font-extrabold">{res.percentage}%</p>
              <p className="text-xs text-white/70">
                {res.score} / {res.totalMarks} marks
              </p>
            </div>
            <div className="text-center">
              <p className="grid size-16 place-items-center rounded-2xl bg-gold-500 text-3xl font-extrabold text-navy-900">{res.grade}</p>
              <Badge tone={res.passed ? "green" : "red"} className="mt-1.5">
                {res.passed ? "PASS" : "FAIL"}
              </Badge>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-4">
          {[
            { l: "Correct", v: res.correctCount, c: "text-success-600" },
            { l: "Incorrect", v: res.incorrectCount, c: "text-danger-600" },
            { l: "Unanswered", v: res.unansweredCount, c: "text-slate-600" },
            { l: "Time used", v: `${minutes}m ${res.timeUsedSec % 60}s`, c: "text-navy-800" },
          ].map((x) => (
            <div key={x.l} className="bg-white px-4 py-4 text-center">
              <p className={`text-2xl font-extrabold ${x.c}`}>{x.v}</p>
              <p className="text-xs text-muted">{x.l}</p>
            </div>
          ))}
        </div>
        {res.remarks && (
          <p className="border-t border-line px-6 py-4 text-sm">
            <span className="font-semibold text-navy-800">Remarks:</span> {res.remarks}
          </p>
        )}
        <p className="flex items-center gap-2 border-t border-line px-6 py-3 text-xs text-muted">
          <Clock className="size-3.5" aria-hidden /> Verification code <span className="font-mono font-bold text-navy-800">{res.verificationCode}</span> · verify at /verify/{res.verificationCode}
        </p>
      </Card>
      <section aria-labelledby="review-h">
        <h2 id="review-h" className="mb-3 text-lg font-extrabold text-navy-800">
          Answer review
        </h2>
        <ResultReview items={r.review} />
      </section>
    </div>
  );
}
