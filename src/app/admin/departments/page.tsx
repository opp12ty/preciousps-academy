import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getCatalog } from "@/server/services/curriculum";
import { CatalogManager } from "@/components/admin/catalog-manager";
import { PageHeader } from "@/components/ui/primitives";
import { SECTION_LABELS, type Section } from "@/core/sections";

export const metadata: Metadata = { title: "Departments" };

export default async function DepartmentsAdmin() {
  const s = await requireStaffPage("curriculum.manage");
  const cat = await getCatalog(s.user.schoolId, { includeArchived: true });
  return (
    <>
      <PageHeader eyebrow="Academics" title="Departments" description="Science, Commercial and Arts for SSS 1–SSS 3; one Junior Secondary group for JSS 1–JSS 3. Fully configurable." />
      <CatalogManager kind="department" title="All departments" description="Departments control which subjects, lessons and exams students see." rows={cat.departments.map((d) => ({ ...d, extra: d.level ? SECTION_LABELS[d.level as Section] ?? d.level : "All sections" }))} />
    </>
  );
}
