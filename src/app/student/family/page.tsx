import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { listParentLinks } from "@/server/services/engagement";
import { ParentLinks } from "@/components/student/parent-links";
import { Alert, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parent report" };

export default async function FamilyPage() {
  const s = await requireStudentPage();
  const links = await listParentLinks(s.user.id);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Family" title="Share my progress with a parent" description="Create a private, read-only link so a parent or guardian can follow your results, study streak and weak topics — no account needed." />
      <Alert tone="info" title="You stay in control">
        Links expire automatically, can be revoked at any time, and never show your password, contact details or other students.
      </Alert>
      <Card>
        <CardHeader title="Parent report links" description="Up to 5 active links at a time." />
        <div className="p-5">
          <ParentLinks
            links={links.map((l) => ({
              id: l.id,
              label: l.label,
              expiresAt: l.expiresAt.toISOString(),
              revoked: Boolean(l.revokedAt),
              views: l.views,
              lastViewedAt: l.lastViewedAt?.toISOString() ?? null,
            }))}
          />
        </div>
      </Card>
    </div>
  );
}
