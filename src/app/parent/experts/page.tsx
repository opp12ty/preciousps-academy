import type { Metadata } from "next";
import { requireParentPage } from "@/server/http";
import { EXPERT_PROFESSIONS, listExpertsForParent } from "@/server/services/family";
import { PageHeader } from "@/components/ui/primitives";
import { ExpertList, ExpertNote, ProfessionFilter } from "@/components/expert-list";

export const metadata: Metadata = { title: "Meet an Expert" };

export default async function ExpertsPage({ searchParams }: PageProps<"/parent/experts">) {
  const s = await requireParentPage();
  const sp = await searchParams;
  const pick = typeof sp.p === "string" && sp.p in EXPERT_PROFESSIONS ? sp.p : "";
  const list = await listExpertsForParent(s.actor, pick || undefined);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Family" title="Meet an expert" description="Counsellors, doctors, lawyers, travel and visa advisers, study-abroad agencies and other professionals the school can point you to, with what each one helps with, feedback from people they have helped, and how to reach them." />
      <ProfessionFilter base="/parent/experts" pick={pick} />
      <ExpertList list={list} />
      <ExpertNote />
    </div>
  );
}
