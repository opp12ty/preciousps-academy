import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { requireParentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { fmtLagos } from "@/server/services/access";
import { listChildren, listParentRequests } from "@/server/services/guardians";
import { AddChildForm } from "@/components/parent/add-child";
import { Alert, Badge, buttonClass, Card, CardHeader, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "My Children" };

export default async function ParentHome({ searchParams }: PageProps<"/parent">) {
  const s = await requireParentPage();
  const sp = await searchParams;
  const [children, cfg, requests] = await Promise.all([listChildren(s.user.id), getSetting(s.user.schoolId, "parents"), listParentRequests(s.user.id)]);
  const STATUS: Record<string, { label: string; tone: "amber" | "red" | "neutral"; text: string }> = {
    PENDING: { label: "Pending", tone: "amber", text: "Your request has been sent. It must be confirmed before academic information becomes available." },
    REJECTED: { label: "Request rejected", tone: "red", text: "The student did not accept this parent connection request." },
    REVOKED: { label: "No longer active", tone: "neutral", text: "This parent–child connection is no longer active." },
    EXPIRED: { label: "Expired", tone: "neutral", text: "This request was not answered in time. You can send it again." },
  };
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Parent / guardian" title={`Welcome, ${s.user.firstName}`} description={cfg.welcome} />
      {sp.welcome && <Alert tone="success">Your account is ready.{" "}If you entered a Student ID, a link request has been sent for your child to accept.</Alert>}
      {children.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {children.map((c) => (
            <Card key={c.id} className="flex flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="text-lg font-extrabold text-navy-800">{c.firstName} {c.lastName}</h2>
                  <p className="text-sm text-muted">{[c.className, c.department, c.studentNumber].filter(Boolean).join(" · ")}</p>
                </div>
                {c.access.status === "ACTIVE" ? <Badge tone={c.access.premium ? "gold" : "green"}>{c.access.premium ? "Premium" : "Active"}</Badge> : <Badge tone="amber">No active access</Badge>}
              </div>
              <dl className="mt-4 space-y-1 text-sm">
                <div className="flex justify-between gap-3"><dt className="text-muted">Last sign-in</dt><dd className="font-semibold text-navy-800">{c.lastLoginAt ? fmtLagos(c.lastLoginAt) : "Not yet"}</dd></div>
                <div className="flex justify-between gap-3"><dt className="text-muted">Access until</dt><dd className="font-semibold text-navy-800">{c.access.status === "ACTIVE" && c.access.expiresAt ? fmtLagos(new Date(c.access.expiresAt)) : "—"}</dd></div>
              </dl>
              <div className="mt-auto pt-4">
                <Link href={`/parent/child/${c.id}`} className={buttonClass("primary", "sm")}>
                  See activity <ArrowRight className="size-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <EmptyState icon={<Users className="size-6" />} title="No child added yet" description="Send a link request below with your child's Student ID or their activated access code. If you have more than one child, send a request for each one." />
        </Card>
      )}
      {requests.length > 0 && (
        <Card>
          <CardHeader title="Link requests" description="Nothing about a student is shown here until the connection is confirmed." />
          <ul className="divide-y divide-line">
            {requests.map((r) => (
              <li key={r.id} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-navy-800">Student ID {r.studentNumber} <Badge tone={STATUS[r.status]?.tone ?? "neutral"}>{STATUS[r.status]?.label ?? r.status}</Badge></p>
                  <p className="text-sm text-muted">{r.status === "PENDING" ? (r.childAccepted ? "Your child has accepted. Waiting for the school to verify." : cfg.linkPolicy === "SCHOOL" ? "Waiting for the school to verify." : "Awaiting child confirmation.") : STATUS[r.status]?.text}</p>
                </div>
                <p className="text-xs text-muted">Sent {fmtLagos(r.requestedAt)}</p>
              </li>
            ))}
          </ul>
        </Card>
      )}
      <Card id="add-child">
        <CardHeader title="Add a child" description="Send a link request with your child's Student ID, or with the access code your child has already activated. Your child sees the request after signing in and must accept it. A new, unused access code will not work here: your child first registers and activates it on their own account." />
        <div className="p-5"><AddChildForm /></div>
      </Card>
    </div>
  );
}
