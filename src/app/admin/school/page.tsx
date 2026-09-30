import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { SettingsForm } from "@/components/admin/settings-forms";
import { Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "School Settings" };

export default async function SchoolSettingsPage() {
  const s = await requireStaffPage("super.settings");
  const school = await getSetting(s.user.schoolId, "school");
  return (
    <>
      <PageHeader eyebrow="Platform" title="School information" description="Used on the website, result slips, certificates and the access-code message shown to students." />
      <Card>
        <CardHeader title="Precious PS Academy" />
        <div className="p-5">
          <SettingsForm
            settingKey="school"
            initial={school}
            fields={[
              { key: "name", label: "School name", type: "text" },
              { key: "shortName", label: "Short name", type: "text" },
              { key: "email", label: "Email", type: "email" },
              { key: "phone", label: "Phone", type: "tel" },
              { key: "accessCodeContact", label: "Access-code contact number", type: "tel", hint: "Shown in: “Need an Access Code? … reach the Super Admin to get your code (…)”" },
              { key: "website", label: "Website", type: "url" },
              { key: "state", label: "State", type: "text" },
              { key: "country", label: "Country", type: "text" },
              { key: "address", label: "Address", type: "textarea" },
            ]}
          />
        </div>
      </Card>
    </>
  );
}
