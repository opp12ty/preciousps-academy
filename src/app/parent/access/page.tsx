import type { Metadata } from "next";
import { requireParentPage } from "@/server/http";
import { fmtLagos, getParentAccess, NEED_PARENT_CODE_MESSAGE } from "@/server/services/access";
import { ParentAccessForm } from "@/components/parent/access-form";
import { Alert, Badge, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parent Access" };

export default async function ParentAccessPage({ searchParams }: PageProps<"/parent/access">) {
  const failed = (await searchParams).code === "failed";
  const s = await requireParentPage({ allowLocked: true });
  const a = await getParentAccess(s.user.id);
  const until = a.until ? fmtLagos(new Date(a.until)) : null;
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Account" title="Parent access" description="The parent portal opens with a parent access code from the school. One code belongs to one parent or guardian account." />
      {failed && !a.active && <Alert tone="warning" title="Your account was created, but the access code was not accepted">Check the code and enter it again below. A parent access code is different from a student access code.</Alert>}
      <Card>
        <CardHeader title="Your access" action={<Badge tone={a.active ? (a.source === "GRACE" ? "amber" : "green") : "red"}>{a.active ? (a.source === "GRACE" ? "Free period" : "Active") : "No active access"}</Badge>} />
        <div className="space-y-4 p-5">
          {a.active && a.source === "CODE" && <p className="text-sm text-navy-800">Your parent access is active until <strong>{until}</strong>. You can enter a new code after it ends.</p>}
          {a.active && a.source === "GRACE" && (
            <Alert tone="warning" title={`Your free period ends on ${until}`}>
              Parent accounts now need a parent access code. Your account stays open until the date above. Enter a code below at any time to continue without a break.
            </Alert>
          )}
          {!a.active && <Alert tone="danger" title="The parent portal is locked">{a.message ?? NEED_PARENT_CODE_MESSAGE}</Alert>}
          {!(a.active && a.source === "CODE") && (
            <>
              <ParentAccessForm />
              <p className="text-xs text-muted">{a.active ? `${NEED_PARENT_CODE_MESSAGE} ` : ""}A student access code does not work here, and a parent access code does not work on a student account.</p>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
