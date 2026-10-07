import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, FileText, Globe2, Lock } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { getAccessState } from "@/server/services/access";
import { listStudentExams } from "@/server/services/exams";
import { listResources } from "@/server/services/resources";
import { ExamBrowser } from "@/components/student/exam-browser";
import { Alert, buttonClass, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "International & Advanced" };

export default async function InternationalPage() {
  const s = await requireStudentPage();
  const cfg = await getSetting(s.user.schoolId, "premium");
  if (!cfg.enabled) notFound();
  const [access, exams, files] = await Promise.all([getAccessState(s.user.id), listStudentExams(s.actor, { premium: true }), listResources(s.user.schoolId, { forUserId: s.user.id })]);
  const premium = access.status === "ACTIVE" && access.premium;
  const materials = files.filter((x) => x.r.isPremium);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Premium" title={cfg.title} description={cfg.intro} />
      {!premium && (
        <Card className="border-gold-400/50 bg-gold-50 p-5">
          <div className="flex items-start gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-800 text-gold-400"><Lock className="size-5" aria-hidden /></span>
            <div>
              <p className="font-bold text-navy-800">Premium access needed</p>
              <p className="mt-1 text-sm text-navy-800">{cfg.lockedMessage}</p>
              <Link href="/student#activate" className={buttonClass("primary", "sm", "mt-3")}>Enter a Premium code</Link>
            </div>
          </div>
        </Card>
      )}
      <ExamBrowser exams={exams} hasAccess={premium} empty="International practice tests appear here as the school publishes them." />
      {materials.length > 0 && (
        <Card>
          <CardHeader title="Advanced study materials" description="Extra reading and resources for Premium students." />
          <ul className="divide-y divide-line">
            {materials.map(({ r, subject }) => (
              <li key={r.id} className="flex flex-wrap items-center justify-between gap-3 p-4">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-royal-50 text-royal-600">{r.assetId ? <FileText className="size-5" aria-hidden /> : <Globe2 className="size-5" aria-hidden />}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-navy-800">{r.title}</p>
                    <p className="text-xs text-muted">{[subject, r.platform].filter(Boolean).join(" · ")}</p>
                    {r.description && <p className="mt-1 line-clamp-2 text-sm text-muted">{r.description}</p>}
                  </div>
                </div>
                {premium ? (
                  <a href={r.assetId ? `/api/v1/assets/${r.assetId}` : (r.url ?? "#")} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "sm")}><Download className="size-4" /> Open</a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted"><Lock className="size-3.5" /> Premium</span>
                )}
              </li>
            ))}
          </ul>
        </Card>
      )}
      {cfg.disclaimer && <Alert tone="info">{cfg.disclaimer}</Alert>}
    </div>
  );
}
