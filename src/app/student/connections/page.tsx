import type { Metadata } from "next";
import { ShieldCheck, Users } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { fmtLagos } from "@/server/services/access";
import { listStudentConnections } from "@/server/services/guardians";
import { ConnectionButtons, LinkRequestButtons } from "@/components/family-controls";
import { Alert, Badge, Card, CardHeader, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parent Connections" };

export default async function ConnectionsPage() {
  const s = await requireStudentPage();
  const [{ pending, active }, cfg] = await Promise.all([listStudentConnections(s.user.id), getSetting(s.user.schoolId, "parents")]);
  const mine = pending.filter((p) => p.childAccepted === null);
  const waiting = pending.filter((p) => p.childAccepted !== null);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Account" title="Parent connections" description="Your parent or guardian can follow your results and learning only after you accept their request here." />
      <Alert tone="info"><ShieldCheck className="mr-1 inline size-4" aria-hidden /> Accept a request only if you know the person is truly your parent or guardian. If you are not sure, reject it or ask your teacher. Nobody can accept for you.</Alert>
      <Card>
        <CardHeader title="Requests waiting for you" />
        {mine.length ? (
          <ul className="divide-y divide-line">
            {mine.map((p) => (
              <li key={p.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-navy-800">{p.firstName} {p.lastName}</p>
                  <p className="text-sm text-muted">{[p.relationship, p.email, `Requested ${fmtLagos(p.requestedAt)}`].filter(Boolean).join(" · ")}</p>
                  <p className="mt-1 text-xs text-muted">This parent has requested to connect with your student account.</p>
                </div>
                <LinkRequestButtons id={p.id} parent={`${p.firstName} ${p.lastName}`} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState icon={<Users className="size-6" />} title="No requests" description="When a parent or guardian asks to connect with your account, the request appears here." />
        )}
        {waiting.length > 0 && <p className="border-t border-line px-4 py-3 text-xs text-muted">{waiting.length} request(s) you accepted are waiting for the school to confirm.</p>}
      </Card>
      <Card>
        <CardHeader title="Connected parents and guardians" />
        {active.length ? (
          <ul className="divide-y divide-line">
            {active.map((p) => (
              <li key={p.parentUserId} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-navy-800">{p.firstName} {p.lastName} <Badge tone="green">Active</Badge></p>
                  <p className="text-sm text-muted">{[p.relationship, `Connected ${fmtLagos(p.since)}`].filter(Boolean).join(" · ")}</p>
                </div>
                <ConnectionButtons parentUserId={p.parentUserId} canRemove={cfg.childCanRemove} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState title="No one is connected" description="No parent or guardian can see your information at the moment." />
        )}
      </Card>
    </div>
  );
}
