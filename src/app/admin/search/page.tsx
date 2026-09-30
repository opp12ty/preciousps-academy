import type { Metadata } from "next";
import Link from "next/link";
import { requireStaffPage } from "@/server/http";
import { globalSearch } from "@/server/services/search";
import { Badge, Card, EmptyState, inputClass, PageHeader, buttonClass } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Search" };

export default async function SearchPage({ searchParams }: PageProps<"/admin/search">) {
  const s = await requireStaffPage();
  const { q } = await searchParams;
  const term = typeof q === "string" ? q : "";
  const hits = term ? await globalSearch(s.actor, term) : [];
  const groups = Array.from(new Set(hits.map((h) => h.type)));
  return (
    <>
      <PageHeader title="Global search" description="Results are limited to what your role is permitted to see." />
      <form className="mb-6 flex gap-2" role="search">
        <input name="q" defaultValue={term} autoFocus placeholder="Name, email, Student ID, question text, code suffix…" className={inputClass} aria-label="Search" />
        <button className={buttonClass("primary")}>Search</button>
      </form>
      {term && !hits.length && (
        <Card>
          <EmptyState title="No matches" description={`Nothing matched “${term}”.`} />
        </Card>
      )}
      <div className="space-y-5">
        {groups.map((g) => (
          <Card key={g}>
            <p className="border-b border-line px-5 py-3 text-xs font-bold uppercase tracking-wide text-muted">{g}s</p>
            <ul className="divide-y divide-line">
              {hits
                .filter((h) => h.type === g)
                .map((h) => (
                  <li key={h.id}>
                    <Link href={h.href} className="flex items-center gap-3 px-5 py-3 hover:bg-surface">
                      <span className="min-w-0 flex-1 truncate text-sm font-semibold text-navy-800">{h.title}</span>
                      {h.subtitle && <Badge>{h.subtitle}</Badge>}
                    </Link>
                  </li>
                ))}
            </ul>
          </Card>
        ))}
      </div>
    </>
  );
}
