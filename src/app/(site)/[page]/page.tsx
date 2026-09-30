import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PAGE_KEYS, type ContentKey, type PageBlock } from "@/content/defaults";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { ContentPage } from "@/components/site/content-page";

const PAGES = PAGE_KEYS.filter((k) => k !== "subjects");

export async function generateMetadata({ params }: PageProps<"/[page]">): Promise<Metadata> {
  const { page } = await params;
  if (!(PAGES as readonly string[]).includes(page)) return {};
  const brand = await getBrand();
  const block = (await getContent(brand.schoolId, page as ContentKey)) as PageBlock;
  return { title: block.title, description: block.intro };
}

export default async function CmsPage({ params }: PageProps<"/[page]">) {
  const { page } = await params;
  if (!(PAGES as readonly string[]).includes(page)) notFound();
  const brand = await getBrand();
  const block = (await getContent(brand.schoolId, page as ContentKey)) as PageBlock;
  return <ContentPage page={block} />;
}
