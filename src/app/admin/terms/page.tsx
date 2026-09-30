import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getCatalog } from "@/server/services/curriculum";
import { CatalogManager } from "@/components/admin/catalog-manager";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Terms" };

export default async function TermsAdmin() {
  const s = await requireStaffPage("curriculum.manage");
  const cat = await getCatalog(s.user.schoolId, { includeArchived: true });
  return (
    <>
      <PageHeader eyebrow="Academics" title="Terms" description="Academic terms used to organise topics in the Study Centre." />
      <CatalogManager kind="term" title="All terms" description="E.g. First Term, Second Term, Third Term." rows={cat.terms.map((t) => ({ ...t, extra: t.startsOn || t.endsOn ? `${t.startsOn ?? "?"} → ${t.endsOn ?? "?"}` : undefined }))} />
    </>
  );
}
