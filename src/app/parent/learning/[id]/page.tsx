import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { requireParentPage } from "@/server/http";
import { getParentArticle, HUB_SECTIONS } from "@/server/services/hub";
import { RichText } from "@/components/rich-text";
import { Card } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parent Learning Hub" };

export default async function ParentArticle({ params }: PageProps<"/parent/learning/[id]">) {
  const s = await requireParentPage();
  const { id } = await params;
  const a = await getParentArticle(s.actor, id).catch(() => null);
  if (!a) notFound();
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <Link href="/parent/learning" className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> Parent Learning Hub</Link>
      <Card className="p-5 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-gold-600">{HUB_SECTIONS[a.section as keyof typeof HUB_SECTIONS]?.label} · {a.category}</p>
        <h1 className="mt-1 text-2xl font-extrabold text-navy-800">{a.title}</h1>
        <p className="mt-2 text-muted">{a.summary}</p>
        <RichText text={a.body} className="mt-5" />
        {a.keyPoints && (
          <div className="mt-6 rounded-xl bg-royal-50 p-4">
            <p className="font-bold text-navy-800">Key points</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-navy-800">{a.keyPoints.split("\n").filter(Boolean).map((k) => <li key={k}>{k}</li>)}</ul>
          </div>
        )}
        {a.activity && <p className="mt-4 rounded-xl border-l-4 border-gold-500 bg-gold-50 p-4 text-sm text-navy-800"><strong>Try this with your child:</strong> {a.activity}</p>}
        {a.sources && <p className="mt-4 text-xs text-muted">Source: {a.sources}</p>}
      </Card>
    </div>
  );
}
