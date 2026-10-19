import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { toPublicError } from "@/server/errors";
import { readMaterial } from "@/server/services/material-reader";
import { Alert, Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Study Material" };
export const maxDuration = 60;

export default async function MaterialReader({ params }: PageProps<"/student/materials/read/[id]">) {
  const s = await requireStudentPage();
  const { id } = await params;
  let m;
  try {
    m = await readMaterial(s.actor, id);
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "NOT_FOUND") notFound();
    return <Alert tone="warning" title="This material is not available">{p.message}</Alert>;
  }
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <Link href="/student/materials" className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> Study materials</Link>
      <PageHeader eyebrow={m.subject ?? "Study material"} title={m.title} description={m.description ?? undefined} />
      {m.empty ? (
        <Alert tone="info" title="This file has no text to show">It may be a scanned document or made of pictures only. Please ask your teacher for a typed copy.</Alert>
      ) : (
        <Card className="p-5 sm:p-8">
          {m.sections.map((sec, i) => (
            <section key={i} className={i ? "mt-6 border-t border-line pt-6" : ""}>
              {sec.heading && <h2 className="mb-2 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-gold-600"><FileText className="size-4" aria-hidden /> {sec.heading}</h2>}
              <div className="space-y-3 text-[0.95rem] leading-relaxed text-navy-800">
                {sec.text.split(/\n+/).map((p) => p.trim()).filter(Boolean).map((p, k) => <p key={k} className="whitespace-pre-wrap">{p}</p>)}
              </div>
            </section>
          ))}
          {m.truncated && <p className="mt-6 rounded-xl bg-surface p-3 text-sm text-muted">This is a long document. The first part is shown here.</p>}
        </Card>
      )}
    </div>
  );
}
