import type { Metadata } from "next";
import { requireParentPage } from "@/server/http";
import { ChangePasswordForm, DeleteOwnAccountForm } from "@/components/account";
import { Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Password" };

export default async function ParentSecurity() {
  await requireParentPage({ allowLocked: true });
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Account" title="Password" description="Change the password you use to sign in." />
      <Card>
        <CardHeader title="Change password" />
        <div className="p-5"><ChangePasswordForm /></div>
      </Card>
      <Card>
        <CardHeader title="Delete my account" description="Permanently close your parent or guardian account. Your children's accounts are not affected." />
        <div className="p-5"><DeleteOwnAccountForm /></div>
      </Card>
    </div>
  );
}
