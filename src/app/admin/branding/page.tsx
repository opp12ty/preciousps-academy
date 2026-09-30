import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { BrandingEditor } from "@/components/admin/branding-editor";
import { Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Branding" };

export default async function BrandingPage() {
  const s = await requireStaffPage("super.branding");
  const b = await getSetting(s.user.schoolId, "branding");
  return (
    <>
      <PageHeader eyebrow="Platform" title="Branding" description="The official Precious PS Academy logo is the default everywhere, including the favicon and PWA icons. Upload replacements and set brand colours here — images are validated and stored securely." />
      <Card>
        <CardHeader title="Logos, imagery, signature & stamp" />
        <div className="p-5">
          <BrandingEditor initial={b as unknown as Record<string, string | null>} />
        </div>
      </Card>
      <p className="mt-4 text-xs text-muted">Browser favicon and app icons are generated at build time from the official logo (npm run brand:assets) so they load instantly on slow networks.</p>
    </>
  );
}
