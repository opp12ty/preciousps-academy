import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { listStudentExams } from "@/server/services/exams";
import { ExamBrowser } from "@/components/student/exam-browser";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { JAMB_GENRES, listJambTexts } from "@/server/services/jamb-texts";
import { Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "JAMB Questions" };

export default async function JambPage() {
  const s = await requireStudentPage();
  const [exams, access, texts] = await Promise.all([listStudentExams(s.actor, { jambOnly: true }), getAccessState(s.user.id), listJambTexts(s.user.schoolId, true)]);
  const years = [...new Set(texts.map((x) => x.t.year))];
  return (
    <>
      <PageHeader eyebrow="JAMB (UTME)" title="JAMB questions" description="UTME-style tests of up to 50 questions in each subject, drawn at random every time. Choose a subject, sit the test against the clock and see your score at once." />
      {texts.length > 0 && (
        <Card className="mb-6 p-5">
          <p className="mb-3 flex items-center gap-2 text-sm font-extrabold text-navy-800"><BookOpen className="size-5 text-royal-600" aria-hidden /> Literature-in-English texts</p>
          {years.map((y) => (
            <div key={y} className="mt-3 first:mt-0">
              <p className="text-xs font-bold uppercase tracking-wide text-gold-600">JAMB {y}</p>
              <ul className="mt-1.5 grid gap-2 sm:grid-cols-2">
                {texts.filter((x) => x.t.year === y).map(({ t }) => (
                  <li key={t.id}>
                    <Link href={`/student/jamb/texts/${t.id}`} prefetch={false} className="block rounded-xl bg-surface p-3 hover:bg-royal-50">
                      <span className="block font-semibold text-navy-800">{t.title}</span>
                      <span className="text-xs text-muted">{[t.author, JAMB_GENRES[t.genre as keyof typeof JAMB_GENRES]].filter(Boolean).join(" · ")}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Card>
      )}
      <ExamBrowser exams={exams} hasAccess={access.status === "ACTIVE"} empty="JAMB tests are for senior secondary students and appear here as each subject is published." />
    </>
  );
}
