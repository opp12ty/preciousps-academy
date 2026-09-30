import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, QrCode } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getSettings } from "@/server/settings";
import { Alert, buttonClass, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Certificates" };

export default async function CertificatesPage() {
  const s = await requireStaffPage("super.settings");
  const st = await getSettings(s.user.schoolId, ["certificates", "featureFlags", "branding"]);
  return (
    <>
      <PageHeader eyebrow="Credentials" title="Certificates & verification" description="Every result slip already carries a unique verification code and QR link. Certificate issuance builds on the same verification system." />
      {!st.featureFlags.certificates && <Alert tone="info" className="mb-6">Certificate issuance is switched off (Feature Flags). Result verification is live today.</Alert>}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader title="Live today" />
          <ul className="space-y-3 p-5 text-sm">
            <li className="flex gap-3"><QrCode className="size-5 shrink-0 text-royal-600" /> Result slips (PDF) with logo, verification code and QR code linking to the public /verify page.</li>
            <li className="flex gap-3"><BadgeCheck className="size-5 shrink-0 text-royal-600" /> Public verification discloses only name, exam, score, grade and date — and flags voided results.</li>
            <li className="flex gap-3"><BadgeCheck className="size-5 shrink-0 text-royal-600" /> Signature and stamp images from Branding are printed on result slips ({st.branding.signatureAssetId ? "signature set" : "no signature yet"}, {st.branding.stampAssetId ? "stamp set" : "no stamp yet"}).</li>
          </ul>
        </Card>
        <Card>
          <CardHeader title="Certificate settings" />
          <dl className="space-y-2 p-5 text-sm">
            <div className="flex justify-between"><dt className="text-muted">Enabled</dt><dd className="font-semibold">{st.certificates.enabled ? "Yes" : "No"}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">Number prefix</dt><dd className="font-mono font-semibold">{st.certificates.numberPrefix}-YYYY-000001</dd></div>
            <div className="flex justify-between"><dt className="text-muted">Minimum percentage</dt><dd className="font-semibold">{st.certificates.minimumPercentage}%</dd></div>
          </dl>
          <div className="flex gap-2 px-5 pb-5">
            <Link href="/admin/settings?section=results" className={buttonClass("secondary", "sm")}>Edit settings</Link>
            <Link href="/admin/branding" className={buttonClass("secondary", "sm")}>Signature & stamp</Link>
          </div>
        </Card>
      </div>
    </>
  );
}
