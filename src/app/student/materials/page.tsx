import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileSpreadsheet, FileText, Headphones, Presentation, Star } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { FEATURE_DENIED } from "@/core/features";
import { listResources, MATERIAL_TYPES, materialType, type MaterialType } from "@/server/services/resources";
import { mySubjects } from "@/server/services/study";
import { getSetting } from "@/server/settings";
import { MaterialsNav } from "@/components/student/materials-nav";
import { Alert, Badge, buttonClass, Card, cx, EmptyState, inputClass, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Study Materials" };

const LOOK: Record<MaterialType, { icon: typeof FileText; tone: string; short: string }> = {
  pdf: { icon: FileText, tone: "bg-danger-50 text-danger-600", short: "PDF" },
  word: { icon: FileText, tone: "bg-royal-50 text-royal-600", short: "Word" },
  powerpoint: { icon: Presentation, tone: "bg-warn-50 text-warn-600", short: "PowerPoint" },
  excel: { icon: FileSpreadsheet, tone: "bg-success-50 text-success-600", short: "Excel" },
  audio: { icon: Headphones, tone: "bg-gold-100 text-gold-600", short: "Audio" },
};
const size = (bytes: number | null) => (bytes ? (bytes >= 1_048_576 ? `${(bytes / 1_048_576).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`) : "");

export default async function MaterialsPage({ searchParams }: PageProps<"/student/materials">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const one = (v: unknown) => (typeof v === "string" && v ? v : undefined);
  const q = one(sp.q);
  const subjectId = one(sp.subject);
  const fileType = one(sp.type);
  const [access, all, subjects, hub] = await Promise.all([getAccessState(s.user.id), listResources(s.user.schoolId, { kind: "FILE", forUserId: s.user.id, search: q, subjectId, fileType }), mySubjects(s.actor), getSetting(s.user.schoolId, "learningHub")]);
  // Premium materials are listed in the International & Advanced area.
  const list = all.filter((x) => !x.r.isPremium);
  // Open only while a code is running and that code includes Learning Resources.
  const active = access.status === "ACTIVE" && access.features.includes("LEARNING_RESOURCES");
  const href = (type?: string) => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (subjectId) p.set("subject", subjectId);
    if (type) p.set("type", type);
    const qs = p.toString();
    return `/student/materials${qs ? `?${qs}` : ""}`;
  };
  return (
    <>
      <PageHeader eyebrow="Learn more" title="Study materials" description="Notes and files from your teachers, a picture dictionary, idioms, clichés, phrasal verbs and learning games." />
      <MaterialsNav current="files" flags={hub} />
      {!active && <Alert tone="warning" className="mb-6">{access.status === "ACTIVE" ? FEATURE_DENIED : access.message}</Alert>}
      <div className="mb-5 rounded-2xl border border-line bg-white p-4 shadow-card">
        <div className="no-scrollbar -mx-1 mb-3 flex gap-2 overflow-x-auto px-1 pb-1" role="group" aria-label="File type">
          {[{ value: undefined as string | undefined, label: "All files" }, ...(Object.keys(MATERIAL_TYPES) as MaterialType[]).map((k) => ({ value: k as string, label: MATERIAL_TYPES[k].label }))].map((t) => (
            <Link key={t.label} href={href(t.value)} aria-current={fileType === t.value ? "true" : undefined} className={cx("whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold transition", fileType === t.value ? "bg-navy-800 text-white" : "bg-surface text-navy-800 ring-1 ring-line hover:bg-royal-50")}>
              {t.label}
            </Link>
          ))}
        </div>
        <form className="flex flex-col gap-2 sm:flex-row" role="search">
          {fileType && <input type="hidden" name="type" value={fileType} />}
          <input name="q" defaultValue={q} placeholder="Search materials" aria-label="Search materials" className={inputClass} />
          <select name="subject" defaultValue={subjectId ?? ""} aria-label="Filter by subject" className={`${inputClass} sm:max-w-xs`}>
            <option value="">All my subjects</option>
            {subjects.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
          <button className={buttonClass("primary")}>Filter</button>
          {(q || subjectId || fileType) && (
            <Link href="/student/materials" className={buttonClass("ghost")}>
              Clear
            </Link>
          )}
        </form>
      </div>
      {list.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {list.map(({ r, subject, fileName, fileSize }) => {
            const type = materialType(fileName);
            const look = type ? LOOK[type] : { icon: FileText, tone: "bg-surface text-navy-800", short: "File" };
            return (
              <Card key={r.id} className="flex flex-col p-5">
                <div className="flex items-start gap-3">
                  <span className={cx("grid size-12 shrink-0 place-items-center rounded-xl", look.tone)}>
                    <look.icon className="size-6" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-navy-800">{r.title}</h3>
                    <p className="text-xs text-muted">
                      {[subject, look.short, size(fileSize)].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </div>
                {r.isRecommended && (
                  <Badge tone="gold" className="mt-3 w-fit">
                    <Star className="size-3" /> Recommended
                  </Badge>
                )}
                {r.description && <p className="mt-3 line-clamp-3 text-sm text-muted">{r.description}</p>}
                <div className="mt-auto pt-4">
                  {active ? (
type === "audio" ? (
                      <audio controls preload="none" controlsList="nodownload" src={`/api/v1/assets/${r.assetId}`} className="w-full" />
                    ) : (
                      <Link href={`/student/materials/read/${r.id}`} prefetch={false} className={buttonClass("primary", "sm")}>
                        <BookOpen className="size-4" /> Read
                      </Link>
                    )
                  ) : (
                    <Link href="/student#activate" className="text-xs font-semibold text-royal-600 hover:underline">
                      Activate access to open
                    </Link>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <EmptyState icon={<FileText className="size-6" />} title="No study materials found" description={q || subjectId || fileType ? "Nothing matches these filters. Clear them to see everything." : "Materials appear here as your teachers upload them."} />
        </Card>
      )}
    </>
  );
}
