import type { Metadata } from "next";
import { BadgeCheck, ShieldX } from "lucide-react";
import { verifyResultCode, lagos } from "@/server/services/exports";
import { PageHero } from "@/components/site/content-page";

export const metadata: Metadata = { title: "Verify a result", robots: { index: false } };

/** Public authenticity check for result slips / future certificates (§94). Minimal disclosure. */
export default async function VerifyPage({ params }: PageProps<"/verify/[code]">) {
  const { code } = await params;
  const r = await verifyResultCode(decodeURIComponent(code));
  const valid = r && !r.isVoided && r.released;
  return (
    <>
      <PageHero eyebrow="Verification" title="Result verification" intro="Confirm that a Precious PS Academy result slip is genuine." />
      <div className="mx-auto max-w-xl px-4 py-14 sm:px-6">
        <div className={`rounded-2xl border p-6 ${valid ? "border-emerald-200 bg-success-50" : "border-red-200 bg-danger-50"}`}>
          <div className="flex items-center gap-3">
            {valid ? <BadgeCheck className="size-8 text-success-600" aria-hidden /> : <ShieldX className="size-8 text-danger-600" aria-hidden />}
            <p className={`text-lg font-extrabold ${valid ? "text-success-600" : "text-danger-600"}`}>
              {valid ? "Genuine result" : r?.isVoided ? "This result has been voided" : "No matching released result"}
            </p>
          </div>
          {valid && r && (
            <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted">Student</dt>
                <dd className="font-bold text-navy-800">{r.studentName}</dd>
              </div>
              <div>
                <dt className="text-muted">Examination</dt>
                <dd className="font-bold text-navy-800">{r.examTitle}</dd>
              </div>
              <div>
                <dt className="text-muted">Score</dt>
                <dd className="font-bold text-navy-800">
                  {r.percentage}% · Grade {r.grade}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Date</dt>
                <dd className="font-bold text-navy-800">{lagos(r.date)}</dd>
              </div>
            </dl>
          )}
          <p className="mt-5 font-mono text-xs text-muted">Code: {decodeURIComponent(code).toUpperCase()}</p>
        </div>
      </div>
    </>
  );
}
