import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { listEnquiries } from "@/server/services/engagement";
import { EnquiryControls } from "@/components/admin/enquiry-controls";
import { Badge, Card, cx, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Enquiries" };

const FILTERS = [
  ["", "All"],
  ["NEW", "New"],
  ["IN_PROGRESS", "In progress"],
  ["RESOLVED", "Resolved"],
  ["SPAM", "Spam"],
] as const;
const fmt = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d);

export default async function EnquiriesPage({ searchParams }: PageProps<"/admin/enquiries">) {
  const s = await requireStaffPage("students.view");
  const { status = "" } = (await searchParams) as { status?: string };
  const { items, counts } = await listEnquiries(s.user.schoolId, status);
  return (
    <>
      <PageHeader eyebrow="Inbox" title="Enquiries" description="Messages sent from the website contact form. Reply by phone or e-mail, then mark them handled." />
      <div className="mb-4 flex flex-wrap gap-2">
        {FILTERS.map(([v, l]) => (
          <Link key={v} href={v ? `/admin/enquiries?status=${v}` : "/admin/enquiries"} className={cx("rounded-lg px-3 py-1.5 text-sm font-semibold ring-1 ring-inset", status === v ? "bg-navy-800 text-white ring-navy-800" : "bg-card text-navy-800 ring-line hover:bg-gold-50")}>
            {l}
            {v && counts[v] ? <span className="ml-1.5 rounded bg-gold-500 px-1 text-[0.7rem] text-navy-900">{counts[v]}</span> : null}
          </Link>
        ))}
      </div>
      <div className="space-y-3">
        {items.map((e) => (
          <Card key={e.id} className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-bold text-navy-800">{e.name}</p>
                <p className="mt-0.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                  <a href={`tel:${e.phone}`} className="inline-flex items-center gap-1.5 hover:text-royal-600">
                    <Phone className="size-3.5" aria-hidden /> {e.phone}
                  </a>
                  {e.email && (
                    <a href={`mailto:${e.email}`} className="inline-flex items-center gap-1.5 hover:text-royal-600">
                      <Mail className="size-3.5" aria-hidden /> {e.email}
                    </a>
                  )}
                  <span>{fmt(e.createdAt)}</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge tone="blue">{e.topic.replace(/_/g, " ").toLowerCase()}</Badge>
                <Badge tone={e.status === "NEW" ? "amber" : e.status === "RESOLVED" ? "green" : e.status === "SPAM" ? "red" : "blue"}>{e.status.replace(/_/g, " ").toLowerCase()}</Badge>
              </div>
            </div>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink">{e.message}</p>
            <EnquiryControls id={e.id} status={e.status} note={e.note ?? ""} />
          </Card>
        ))}
        {items.length === 0 && (
          <Card>
            <EmptyState title="No enquiries here" description="New messages from the website contact form will appear in this inbox." />
          </Card>
        )}
      </div>
    </>
  );
}
