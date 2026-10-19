import type { Metadata } from "next";
import { Lightbulb } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { IDEA_CATEGORIES, IDEA_STATUSES, myIdeas } from "@/server/services/ideas";
import { IdeaForm } from "@/components/ideas";
import { Badge, Card, CardHeader, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Ideas Box" };

const TONE = { NEW: "neutral", PLANNED: "blue", DONE: "green", DECLINED: "amber" } as const;

export default async function IdeasPage() {
  const s = await requireStudentPage();
  const mine = await myIdeas(s.actor);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Help us grow" title="Ideas Box" description="Have an idea to make Precious PS better? A new game, a topic you want, something confusing or not working? Tell us. Every idea is read, and you will see our reply here." />
      <Card>
        <CardHeader title={<span className="flex items-center gap-2"><Lightbulb className="size-5 text-gold-500" aria-hidden /> Share an idea</span>} />
        <div className="p-5 pt-0"><IdeaForm /></div>
      </Card>
      <Card>
        <CardHeader title="Your ideas" />
        {mine.length ? (
          <ul className="divide-y divide-line border-t border-line">
            {mine.map((i) => (
              <li key={i.id} className="px-5 py-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-gold-600">{IDEA_CATEGORIES[i.category as keyof typeof IDEA_CATEGORIES] ?? i.category}</span>
                  <Badge tone={TONE[i.status as keyof typeof TONE] ?? "neutral"}>{IDEA_STATUSES[i.status as keyof typeof IDEA_STATUSES] ?? i.status}</Badge>
                </div>
                <p className="mt-1 whitespace-pre-line text-sm text-navy-800">{i.text}</p>
                {i.reply && <p className="mt-2 rounded-xl bg-royal-50 p-3 text-sm text-navy-800"><strong>Precious PS team:</strong> {i.reply}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-5 pt-0"><EmptyState icon={<Lightbulb className="size-6" />} title="No ideas yet" description="Your first idea could be the next big feature." /></div>
        )}
      </Card>
    </div>
  );
}
