import type { Metadata } from "next";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { PageHero } from "@/components/site/content-page";
import { RichText } from "@/components/rich-text";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default async function TermsPage() {
  const brand = await getBrand();
  const p = await getContent(brand.schoolId, "terms");
  return (
    <>
      <PageHero eyebrow="Legal" title={p.title} intro={`Last updated ${p.updated}`} />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <RichText text={p.body} className="text-[1.02rem] text-ink" />
      </article>
    </>
  );
}
