import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CONTENT_DEFAULTS, type ContentKey } from "@/content/defaults";
import { requireStaffPage } from "@/server/http";
import { contentHistory, getContent } from "@/server/services/content";
import { ContentEditor } from "@/components/admin/content-editor";
import { ContentHistory } from "@/components/admin/content-history";
import { buttonClass, Card, CardHeader, cx, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Homepage & Content" };

const LABELS: Record<ContentKey, { label: string; path: string }> = {
  home: { label: "Homepage", path: "/" },
  about: { label: "About", path: "/about" },
  subjects: { label: "Subjects page", path: "/subjects" },
  "cbt-practice": { label: "CBT Practice", path: "/cbt-practice" },
  "mock-exams": { label: "Mock Exams", path: "/mock-exams" },
  "bece-preparation": { label: "BECE Preparation", path: "/bece-preparation" },
  "jamb-preparation": { label: "JAMB Preparation", path: "/jamb-preparation" },
  "waec-preparation": { label: "WAEC Preparation", path: "/waec-preparation" },
  "neco-preparation": { label: "NECO Preparation", path: "/neco-preparation" },
  "study-centre": { label: "Study Centre", path: "/study-centre" },
  "how-it-works": { label: "How It Works", path: "/how-it-works" },
  faq: { label: "FAQ", path: "/faq" },
  contact: { label: "Contact", path: "/contact" },
  privacy: { label: "Privacy Policy", path: "/privacy" },
  terms: { label: "Terms", path: "/terms" },
  footer: { label: "Footer", path: "/" },
  navigation: { label: "Menus & navigation", path: "/" },
};

export default async function HomepageContentPage({ searchParams }: PageProps<"/admin/homepage">) {
  const s = await requireStaffPage("super.content");
  const { block = "home" } = (await searchParams) as { block?: string };
  const key = (block in CONTENT_DEFAULTS ? block : "home") as ContentKey;
  const [value, history] = await Promise.all([getContent(s.user.schoolId, key), contentHistory(s.user.schoolId, key)]);
  return (
    <>
      <PageHeader eyebrow="Content management" title="Homepage & content" description="Edit every public page without a developer. Each publish is versioned and can be restored." />
      <div className="grid gap-6 lg:grid-cols-[13rem_1fr]">
        <nav aria-label="Content blocks" className="no-scrollbar flex gap-1 overflow-x-auto lg:flex-col">
          {(Object.keys(LABELS) as ContentKey[]).map((k) => (
            <Link key={k} href={`/admin/homepage?block=${k}`} className={cx("whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold", k === key ? "bg-navy-800 text-white" : "text-navy-800 hover:bg-white")}>
              {LABELS[k].label}
            </Link>
          ))}
        </nav>
        <div className="grid gap-6 xl:grid-cols-[1fr_18rem]">
          <Card>
            <CardHeader
              title={LABELS[key].label}
              action={
                <a href={LABELS[key].path} target="_blank" rel="noopener" className={buttonClass("secondary", "sm")}>
                  View live <ExternalLink className="size-3.5" />
                </a>
              }
            />
            <div className="p-5">
              <ContentEditor key={key} contentKey={key} initial={JSON.parse(JSON.stringify(value))} />
            </div>
          </Card>
          <Card className="h-fit">
            <CardHeader title="Version history" />
            <ContentHistory contentKey={key} versions={history.map((h) => ({ version: h.version, createdAt: h.createdAt.toISOString() }))} />
          </Card>
        </div>
      </div>
    </>
  );
}
