import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { IDEA_CATEGORIES, IDEA_STATUSES, listIdeasAdmin } from "@/server/services/ideas";
import { IdeaReply } from "@/components/ideas";
import { Badge, Card, cx, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Ideas Box" };

const fmt = (d: Date) => d.toLocaleString("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" });

export default async function AdminIdeas({ searchParams }: PageProps<"/admin/ideas">) {
  const s = await requireStaffPage("content.manage");
  const sp = await searchParams;
  const status = typeof sp.status === "string" ? sp.status : "";
  const { rows, counts } = await listIdeasAdmin(s.user.schoolId, status || undefined);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Platform" title="Ideas Box" description="Suggestions from students, school accounts and parents. Reply and set a status; the sender is notified and sees your reply in their Ideas Box." />
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
        {[["", "All"], ...Object.entries(IDEA_STATUSES)].map(([k, l]) => (
          <Link key={k || "all"} href={k ? `/admin/ideas?status=${k}` : "/admin/ideas"} className={cx("whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-semibold", status === k ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>{l}{k ? ` (${counts[k] ?? 0})` : ""}</Link>
        ))}
      </div>
      {rows.length ? (
        <div className="space-y-4">
          {rows.map(({ s: i, first, last }) => (
            <Card key={i.id} className="p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <Badge tone={i.role === "PARENT" ? "gold" : i.role === "SCHOOL" ? "navy" : "blue"}>{i.role === "PARENT" ? "Parent" : i.role === "SCHOOL" ? "School account" : "Student"}</Badge>
                <span className="font-bold uppercase tracking-wide text-gold-600">{IDEA_CATEGORIES[i.category as keyof typeof IDEA_CATEGORIES] ?? i.category}</span>
                <span className="text-muted">{first ? `${first} ${last ?? ""}`.trim() : "Deleted account"} · {fmt(i.createdAt)}</span>
              </div>
              <p className="mt-2 whitespace-pre-line text-sm text-navy-800">{i.text}</p>
              <div className="mt-3 rounded-xl bg-surface p-3"><IdeaReply id={i.id} status={i.status} reply={i.reply} /></div>
            </Card>
          ))}
        </div>
      ) : (
        <Card><EmptyState icon={<Lightbulb className="size-6" />} title="No ideas here yet" description="Ideas from students and parents will appear here." /></Card>
      )}
    </div>
  );
}
