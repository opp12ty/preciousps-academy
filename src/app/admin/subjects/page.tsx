import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getCatalog } from "@/server/services/curriculum";
import { CatalogManager } from "@/components/admin/catalog-manager";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Subjects" };

export default async function SubjectsAdmin() {
  const s = await requireStaffPage("curriculum.manage");
  const cat = await getCatalog(s.user.schoolId, { includeArchived: true });
  const depName = new Map(cat.departments.map((d) => [d.id, d.name]));
  return (
    <>
      <PageHeader eyebrow="Academics" title="Subjects" description="Configure subjects and which departments offer them. Archived subjects keep their history." />
      <CatalogManager
        kind="subject"
        title="All subjects"
        description="Examples: Mathematics, Physics, Financial Accounting, Literature in English."
        departments={cat.departments.filter((d) => !d.archivedAt).map((d) => ({ id: d.id, name: d.name }))}
        rows={cat.subjects.map((x) => ({ ...x, extra: x.departmentIds.map((d) => depName.get(d)).filter(Boolean).join(", ") || "No department" }))}
      />
    </>
  );
}
