import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { promotionState } from "@/server/services/promotions";
import { PromotionRequestForm } from "@/components/promotion-controls";
import { Alert, Badge, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Promotion" };

export default async function PromotionPage() {
  const s = await requireStudentPage();
  const st = await promotionState(s.actor);
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Account" title="Promotion to the next class" description="At the start of each school session you move up one class. Your results and history stay with you." />
      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-4">
          <span className="grid size-12 place-items-center rounded-xl bg-royal-50 text-royal-600"><GraduationCap className="size-6" aria-hidden /></span>
          <div>
            <p className="text-sm text-muted">Session {st.session}</p>
            <p className="text-lg font-extrabold text-navy-800">{st.current?.name ?? "No class"}{st.next ? <span className="font-semibold text-muted"> → {st.next.name}</span> : null}</p>
          </div>
          {st.record && <Badge tone={st.record.status === "APPROVED" ? "green" : st.record.status === "PENDING" ? "amber" : st.record.status === "REPEAT" ? "blue" : "red"}>{st.record.status === "APPROVED" ? "Promoted" : st.record.status === "PENDING" ? "Waiting for the school" : st.record.status === "REPEAT" ? "Repeating" : "Not approved"}</Badge>}
        </div>
      </Card>
      {st.record?.status === "REJECTED" && <Alert tone="warning">Your last request was not approved.{st.record.note ? ` Reason: ${st.record.note}` : ""} Speak to the school before you ask again.</Alert>}
      {st.canRequest && st.next ? (
        <Card>
          <CardHeader title={st.selfService ? `Move to ${st.next.name}` : `Ask to be promoted to ${st.next.name}`} description={st.selfService ? "You can do this once in a session, and only to the next class." : "Your request goes to the school. When it is approved, your lessons, tests and forum rooms change to your new class."} />
          <div className="p-5"><PromotionRequestForm next={st.next.name} departments={st.departments} selfService={st.selfService} /></div>
        </Card>
      ) : (
        <Alert tone="info">{st.reason}</Alert>
      )}
      <p className="text-xs text-muted">Promotion is one class at a time, once in a session, and only during the promotion period ({st.window}, month-day). The school keeps a record of every request.</p>
    </div>
  );
}
