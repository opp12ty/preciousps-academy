import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { SettingsForm } from "@/components/admin/settings-forms";
import { Alert, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Feature Flags" };

export default async function FeatureFlagsPage() {
  const s = await requireStaffPage("super.settings");
  const flags = await getSetting(s.user.schoolId, "featureFlags");
  return (
    <>
      <PageHeader eyebrow="Platform" title="Feature flags" description="Switch capabilities on as they are rolled out. The data model and APIs for future features already exist." />
      <Alert tone="info" className="mb-6" title="Honest status">
        Flags marked “prepared” have architecture in place (database tables, APIs, settings) but no end-user flows yet. Payment is intentionally not implemented and no payment instructions are shown anywhere.
      </Alert>
      <Card>
        <CardHeader title="Capabilities" />
        <div className="p-5">
          <SettingsForm
            settingKey="featureFlags"
            columns={2}
            initial={flags}
            fields={[
              { key: "ai", label: "AI question generation", type: "bool", hint: "Live (requires ANTHROPIC_API_KEY)." },
              { key: "advancedAnalytics", label: "Advanced analytics", type: "bool", hint: "Live." },
              { key: "certificates", label: "Certificates", type: "bool", hint: "Prepared — verification page and numbering are ready." },
              { key: "teacherPortal", label: "Teacher portal", type: "bool", hint: "Teacher role exists; dedicated portal prepared." },
              { key: "parentPortal", label: "Parent portal", type: "bool", hint: "Prepared — guardian links table in place." },
              { key: "mobile", label: "Mobile apps", type: "bool", hint: "Prepared — /api/v1 supports bearer tokens." },
              { key: "pushNotifications", label: "Push notifications", type: "bool", hint: "Prepared — preference channel exists." },
              { key: "sms", label: "SMS", type: "bool", hint: "Prepared." },
              { key: "whatsapp", label: "WhatsApp", type: "bool", hint: "Prepared." },
              { key: "multiSchool", label: "Multi-school tenancy", type: "bool", hint: "Prepared — every record is scoped by school." },
              { key: "multilingual", label: "Multilingual interface", type: "bool", hint: "Prepared — message catalogues in /src/i18n." },
              { key: "payment", label: "Payments", type: "bool", hint: "Not implemented by design. Keep off." },
            ]}
          />
        </div>
      </Card>
    </>
  );
}
