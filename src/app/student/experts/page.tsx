import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { EXPERT_PROFESSIONS, listExpertsForStudent } from "@/server/services/family";
import { PageHeader } from "@/components/ui/primitives";
import { ExpertList, ExpertNote, ProfessionFilter } from "@/components/expert-list";

export const metadata: Metadata = { title: "Meet an Expert" };

export default async function StudentExpertsPage({ searchParams }: PageProps<"/student/experts">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const pick = typeof sp.p === "string" && sp.p in EXPERT_PROFESSIONS ? sp.p : "";
  const list = await listExpertsForStudent(s.actor, pick || undefined);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Knowledge Hub" title="Meet an expert" description="Trusted professionals and agencies the school recommends: study-abroad and visa advisers, education specialists, counsellors and more. Talk to your parents before you contact anyone." />
      <ProfessionFilter base="/student/experts" pick={pick} />
      <ExpertList list={list} />
      <ExpertNote />
    </div>
  );
}
