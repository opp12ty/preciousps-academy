import type { Metadata } from "next";
import { requireStaffPage } from "@/server/http";
import { ownSessions } from "@/server/services/people";
import { getSetting } from "@/server/settings";
import { ChangePasswordForm, SessionsList } from "@/components/account";
import { TwoFactorPanel } from "@/components/admin/two-factor";
import { Alert, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "My Security" };

export default async function MySecurityPage({ searchParams }: PageProps<"/admin/security">) {
  const s = await requireStaffPage(undefined, { allowSetup: true });
  const { force } = (await searchParams) as { force?: string };
  const [sessions, auth] = await Promise.all([ownSessions(s.user.id), getSetting(s.user.schoolId, "authentication")]);
  const mandatory = s.user.userType === "SUPER_ADMIN" && auth.requireSuperAdmin2fa;
  const needPassword = s.user.mustChangePassword;
  const need2fa = mandatory && !s.user.totpEnabled;
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Security" title="My account security" description="Strong password, two-factor authentication and device sessions." />
      {(needPassword || force === "password") && (
        <Alert tone="warning" title="Step 1: set a new password">You are using a temporary or initial password. Choose a new strong password to continue.</Alert>
      )}
      {!needPassword && (need2fa || force === "2fa") && (
        <Alert tone="warning" title="Step 2: enable two-factor authentication">Two-factor authentication is required for the Super Admin before the control centre unlocks.</Alert>
      )}
      <Card>
        <CardHeader title="Password" description="Minimum 10 characters with letters, numbers and a symbol. Stored with Argon2id — never visible to anyone." />
        <div className="p-5"><ChangePasswordForm redirectTo={needPassword ? (need2fa ? "/admin/security?force=2fa" : "/admin") : undefined} /></div>
      </Card>
      {!needPassword && (
        <Card>
          <CardHeader title="Two-factor authentication" />
          <div className="p-5"><TwoFactorPanel enabled={s.user.totpEnabled} mandatory={mandatory} /></div>
        </Card>
      )}
      <Card>
        <CardHeader title="Active sessions" description="Sign out devices you don't recognise." />
        <SessionsList currentId={s.sessionId} sessions={sessions.map((x) => ({ id: x.id, createdAt: x.createdAt.toISOString(), lastSeenAt: x.lastSeenAt.toISOString(), ip: x.ip, userAgent: x.userAgent }))} />
      </Card>
    </div>
  );
}
