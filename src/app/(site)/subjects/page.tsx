import type { Metadata } from "next";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { getCatalog } from "@/server/services/curriculum";
import { PageHero } from "@/components/site/content-page";

export const metadata: Metadata = { title: "Subjects" };

export default async function SubjectsPage() {
  const brand = await getBrand();
  const page = await getContent(brand.schoolId, "subjects");
  const cat = await getCatalog(brand.schoolId);
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-14 sm:px-6">
        {cat.departments.map((d) => {
          const subs = cat.subjects.filter((s) => s.departmentIds.includes(d.id));
          const junior = d.level === "JUNIOR_SECONDARY";
          return (
            <section key={d.id} aria-labelledby={`dept-${d.code}`}>
              <div className="flex items-baseline justify-between gap-3 border-b border-line pb-3">
                <h2 id={`dept-${d.code}`} className="text-2xl font-extrabold text-navy-800">
                  {junior ? `${d.name} (Basic Education)` : `${d.name} Department`}
                </h2>
                <p className="text-sm text-muted">{subs.length} subjects · {junior ? "JSS 1–JSS 3" : d.level === "SENIOR_SECONDARY" ? "SSS 1–SSS 3" : "All classes"}</p>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {subs.map((s) => (
                  <li key={s.id} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-royal-50 text-xs font-extrabold text-royal-700">{s.code}</span>
                      <p className="font-bold text-navy-800">{s.name}</p>
                    </div>
                    {s.description && <p className="mt-2 text-sm text-muted">{s.description}</p>}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}
