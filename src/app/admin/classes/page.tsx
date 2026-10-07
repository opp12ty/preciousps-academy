import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getCatalog, primarySchoolState } from "@/server/services/curriculum";
import { PrimarySchoolSwitch } from "@/components/admin/primary-school-switch";
import { CatalogManager } from "@/components/admin/catalog-manager";
import { PageHeader } from "@/components/ui/primitives";
import { SECTION_LABELS, type Section } from "@/core/sections";

export const metadata: Metadata = { title: "Classes" };

export default async function ClassesAdmin() {
  const s = await requireStaffPage("curriculum.manage");
  const [cat, primary] = await Promise.all([getCatalog(s.user.schoolId, { includeArchived: true }), primarySchoolState(s.user.schoolId)]);
  return (
    <>
      <PageHeader eyebrow="Academics" title="Classes" description="JSS 1–JSS 3 and SSS 1–SSS 3; add primary or international grades at any time without code changes." />
      <PrimarySchoolSwitch exists={primary.exists} enabled={primary.enabled} />
      <CatalogManager kind="class" title="All classes" description="Use a short code such as SS1 or JSS2." rows={cat.classes.map((c) => ({ ...c, extra: SECTION_LABELS[c.level as Section] ?? c.level }))} />
    </>
  );
}
