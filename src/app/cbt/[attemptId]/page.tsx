import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { requireStudentPage, reqCtx } from "@/server/http";
import { getBrand } from "@/server/brand";
import { getAttemptView } from "@/server/services/exams";
import { toPublicError } from "@/server/errors";
import { CbtClient } from "@/components/exam/cbt-client";
import { renderQuestion } from "@/components/exam/render";
import type { AnswerValue } from "@/components/exam/types";
import { buttonClass } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "CBT Examination", robots: { index: false } };

export default async function CbtPage({ params }: PageProps<"/cbt/[attemptId]">) {
  const s = await requireStudentPage();
  const { attemptId } = await params;
  const brand = await getBrand();
  let view;
  try {
    view = await getAttemptView(s.actor, attemptId, await reqCtx());
  } catch (e) {
    const p = toPublicError(e);
    return <Closed title="Examination unavailable" message={p.message} />;
  }
  if (view.status !== "IN_PROGRESS") {
    if (view.resultId) redirect(`/student/results/${view.resultId}?submitted=1`);
    return <Closed title="Examination submitted" message="Your examination has been submitted. Results will appear when released by the school." />;
  }
  return (
    <CbtClient
      attemptId={view.attemptId}
      examTitle={view.examTitle}
      studentName={view.studentName}
      markUrl={brand.markUrl}
      platformName={brand.platformName}
      serverNow={view.serverNow}
      deadlineAt={view.deadlineAt}
      autosaveSeconds={view.autosaveSeconds}
      fullscreenGuidance={view.fullscreenGuidance}
      questions={view.questions.map((q) => ({ ...renderQuestion(q.attemptQuestionId, q.position, q), response: (q.response as AnswerValue) ?? null, flagged: q.flagged }))}
    />
  );
}

function Closed({ title, message }: { title: string; message: string }) {
  return (
    <main id="main" className="grid min-h-dvh place-items-center bg-surface p-4">
      <div className="w-full max-w-md rounded-2xl border border-line bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto size-10 text-royal-600" aria-hidden />
        <h1 className="mt-3 text-xl font-extrabold text-navy-800">{title}</h1>
        <p className="mt-2 text-sm text-muted">{message}</p>
        <div className="mt-6 flex justify-center gap-2">
          <Link href="/student/results" className={buttonClass("primary")}>
            My results
          </Link>
          <Link href="/student" className={buttonClass("secondary")}>
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
