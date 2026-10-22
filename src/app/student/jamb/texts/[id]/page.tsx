import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { toPublicError } from "@/server/errors";
import { readJambText } from "@/server/services/jamb-texts";
import { downloadAccess } from "@/server/services/access";
import { DownloadLocked } from "@/components/download-gate";
import { Alert, buttonClass, Card, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "JAMB literature text" };
export const maxDuration = 60;

export default async function JambTextReader({ params }: PageProps<"/student/jamb/texts/[id]">) {
  const s = await requireStudentPage();
  const { id } = await params;
  let m;
  try {
    m = await readJambText(s.actor, id);
  } catch (e) {
    const p = toPublicError(e);
    if (p.code === "NOT_FOUND") notFound();
    return <Alert tone="warning" title="This book is not available">{p.message}</Alert>;
  }
  const dl = await downloadAccess(s.user, "ebookFiles");
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <Link href="/student/jamb" className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 hover:underline"><ArrowLeft className="size-4" /> JAMB</Link>
      <PageHeader
        eyebrow={`JAMB ${m.text.year} literature`}
        title={m.text.title}
        description={m.text.author ?? undefined}
        actions={dl.allowed ? <a href={`/api/v1/assets/${m.text.assetId}`} target="_blank" rel="noopener" className={buttonClass("secondary", "sm")}><Download className="size-4" /> Download PDF</a> : <DownloadLocked phone={dl.phone} needsCode={dl.needsCode} />}
      />
      {m.empty ? (
        <Alert tone="info" title="This PDF has no text to show">It may be scanned pictures. {dl.allowed ? "Download the PDF to read it." : "Ask the Admin for a typed copy."}</Alert>
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
          {m.truncated && <p className="mt-6 rounded-xl bg-surface p-3 text-sm text-muted">This is a long book. The first part is shown here{dl.allowed ? "; download the PDF for the rest." : "."}</p>}
        </Card>
      )}
    </div>
  );
}
