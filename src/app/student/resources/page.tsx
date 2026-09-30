import type { Metadata } from "next";
import { ExternalLink, Library, Star } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { listResources } from "@/server/services/resources";
import { getCatalog } from "@/server/services/curriculum";
import { Alert, Badge, buttonClass, Card, EmptyState, inputClass, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Resource Centre" };

export default async function ResourcesPage({ searchParams }: PageProps<"/student/resources">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const q = typeof sp.q === "string" ? sp.q : undefined;
  const subjectId = typeof sp.subject === "string" && sp.subject ? sp.subject : undefined;
  const [access, list, cat] = await Promise.all([getAccessState(s.user.id), listResources(s.user.schoolId, { forUserId: s.user.id, search: q, subjectId }), getCatalog(s.user.schoolId)]);
  const active = access.status === "ACTIVE";
  return (
    <>
      <PageHeader eyebrow="Learn more" title="Resource Centre" description="Curated videos, websites, libraries and documents recommended by your teachers." />
      {!active && <Alert tone="warning" className="mb-6">{access.message}</Alert>}
      <form className="mb-6 flex flex-col gap-2 sm:flex-row" role="search">
        <input name="q" defaultValue={q} placeholder="Search resources" aria-label="Search resources" className={inputClass} />
        <select name="subject" defaultValue={subjectId ?? ""} aria-label="Filter by subject" className={`${inputClass} sm:max-w-xs`}>
          <option value="">All subjects</option>
          {cat.subjects.map((x) => (
            <option key={x.id} value={x.id}>
              {x.name}
            </option>
          ))}
        </select>
        <button className={buttonClass("primary")}>Filter</button>
      </form>
      {list.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {list.map(({ r, subject }) => (
            <Card key={r.id} className="flex flex-col p-5">
              <div className="flex items-center gap-2">
                <Badge tone="blue">{r.resourceType.toLowerCase()}</Badge>
                {r.platform && <Badge>{r.platform}</Badge>}
                {r.isRecommended && (
                  <Badge tone="gold">
                    <Star className="size-3" /> Recommended
                  </Badge>
                )}
              </div>
              <h3 className="mt-3 font-bold text-navy-800">{r.title}</h3>
              {subject && <p className="text-xs text-muted">{subject}</p>}
              {r.description && <p className="mt-2 line-clamp-3 text-sm text-muted">{r.description}</p>}
              <div className="mt-auto pt-4">
                {active ? (
                  <a href={r.url ?? `/api/v1/assets/${r.assetId}`} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary", "sm")}>
                    Open <ExternalLink className="size-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-muted">Activate access to open</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <EmptyState icon={<Library className="size-6" />} title="No resources found" />
        </Card>
      )}
    </>
  );
}
