import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AppError } from "@/server/errors";
import { requireStudentPage } from "@/server/http";
import { getStudentArticle, hubState } from "@/server/services/hub";
import { HubSessionBar } from "@/components/family-controls";
import { RichText } from "@/components/rich-text";
import { Card } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Knowledge Hub" };

export default async function ArticlePage({ params }: PageProps<"/student/knowledge/[id]">) {
  const s = await requireStudentPage();
  const { id } = await params;
  let article;
  try {
    article = await getStudentArticle(s.actor, id);
  } catch (e) {
    if (e instanceof AppError && e.code === "NOT_FOUND") notFound();
    redirect("/student/knowledge"); // session over or feature locked: the hub page explains
  }
  const state = await hubState(s.actor);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <Link href="/student/knowledge" className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> Knowledge Hub</Link>
      <HubSessionBar key={`${state.active}-${state.cooldownSeconds > 0}`} secondsLeft={state.secondsLeft} cooldownSeconds={state.cooldownSeconds} unlimited={state.unlimited} sessionMinutes={state.sessionMinutes} />
      <Card className="p-5 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-gold-600">{article.category}</p>
        <h1 className="mt-1 text-2xl font-extrabold text-navy-800">{article.title}</h1>
        <p className="mt-2 text-muted">{article.summary}</p>
        <RichText text={article.body} className="mt-5" />
        {article.keyPoints && (
          <div className="mt-6 rounded-xl bg-royal-50 p-4">
            <p className="font-bold text-navy-800">Key facts</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-navy-800">{article.keyPoints.split("\n").filter(Boolean).map((k) => <li key={k}>{k}</li>)}</ul>
          </div>
        )}
        {article.activity && <p className="mt-4 rounded-xl border-l-4 border-gold-500 bg-gold-50 p-4 text-sm text-navy-800"><strong>Try this:</strong> {article.activity}</p>}
        {article.sources && <p className="mt-4 text-xs text-muted">Source: {article.sources}</p>}
      </Card>
    </div>
  );
}
