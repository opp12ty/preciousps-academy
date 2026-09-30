import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { ownSessions } from "@/server/services/people";
import { ChangePasswordForm, SessionsList } from "@/components/account";
import { Alert, Card, CardHeader, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Security" };

export default async function SecurityPage({ searchParams }: PageProps<"/student/security">) {
  const s = await requireStudentPage({ allowPasswordChange: true });
  const sp = await searchParams;
  const sessions = await ownSessions(s.user.id);
  const forced = s.user.mustChangePassword;
  return (
    <div className="space-y-6">
      <PageHeader title="Security" description="Keep your account safe. Your password is stored encrypted and can never be seen by anyone — including administrators." />
      {(forced || sp.force) && (
        <Alert tone="warning" title="Please set a new password">
          An administrator has required you to choose a new password before continuing.
        </Alert>
      )}
      <Card>
        <CardHeader title="Change password" description="At least 10 characters, including letters, numbers and a symbol." />
        <div className="p-5">
          <ChangePasswordForm redirectTo={forced ? "/student" : undefined} />
        </div>
      </Card>
      {!forced && (
        <Card>
          <CardHeader title="Active sessions" description="Devices currently signed in to your account. Sign out any you don't recognise." />
          <SessionsList currentId={s.sessionId} sessions={sessions.map((x) => ({ id: x.id, createdAt: x.createdAt.toISOString(), lastSeenAt: x.lastSeenAt.toISOString(), ip: x.ip, userAgent: x.userAgent }))} />
        </Card>
      )}
    </div>
  );
}
