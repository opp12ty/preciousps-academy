import type { Metadata } from "next";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { PageHero } from "@/components/site/content-page";
import { RichText } from "@/components/rich-text";

export const metadata: Metadata = { title: "Privacy Policy" };

export default async function PrivacyPage() {
  const brand = await getBrand();
  const p = await getContent(brand.schoolId, "privacy");
  return (
    <>
      <PageHero eyebrow="Legal" title={p.title} intro={`Last updated ${p.updated}`} />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <RichText text={p.body} className="text-[1.02rem] text-ink" />
      </article>
    </>
  );
}
