import type { Metadata } from "next";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { PageHero } from "@/components/site/content-page";

export const metadata: Metadata = { title: "FAQ" };

export default async function FaqPage() {
  const brand = await getBrand();
  const faq = await getContent(brand.schoolId, "faq");
  return (
    <>
      <PageHero eyebrow="Help" title={faq.title} />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
          {faq.items.map((f, i) => (
            <details key={f.q} className="group px-5 py-4 sm:px-6 [&_summary::-webkit-details-marker]:hidden" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[1.02rem] font-semibold text-navy-800">
                {f.q}
                <span className="text-2xl text-royal-600 transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
