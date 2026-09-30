import type { Metadata } from "next";
import { and, desc, eq, gt, isNull, sql } from "drizzle-orm";
import { requireStaffPage } from "@/server/http";
import { getDb } from "@/server/db";
import { sessions, users } from "@/server/db/schema";
import { RevokeSessionButton } from "@/components/admin/action-wrappers";
import { Badge, Card, CardHeader, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Sessions" };
const fmt = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "short", timeStyle: "short" }).format(d);

export default async function SessionsPage() {
  const s = await requireStaffPage("super.security");
  const rows = await getDb()
    .select({ s: sessions, name: sql<string>`${users.firstName} || ' ' || ${users.lastName}`, email: users.email, userType: users.userType })
    .from(sessions)
    .innerJoin(users, eq(users.id, sessions.userId))
    .where(and(eq(users.schoolId, s.user.schoolId), isNull(sessions.revokedAt), gt(sessions.expiresAt, new Date())))
    .orderBy(desc(sessions.lastSeenAt))
    .limit(300);
  return (
    <>
      <PageHeader eyebrow="Security" title="Active sessions" description={`${rows.length} active session(s) across all users. Revoking signs the device out immediately.`} />
      <Card>
        <CardHeader title="Sessions" />
        <Table>
          <thead><tr><Th>User</Th><Th>Type</Th><Th>IP</Th><Th>Device</Th><Th>Signed in</Th><Th>Last seen</Th><Th /></tr></thead>
          <tbody>
            {rows.map(({ s: x, name, email, userType }) => (
              <tr key={x.id}>
                <Td className="font-semibold">{name}<p className="text-xs font-normal text-muted">{email}</p></Td>
                <Td><Badge tone={userType === "STUDENT" ? "blue" : "gold"}>{userType.toLowerCase().replace("_", " ")}</Badge>{x.mfaPending && <Badge tone="amber" className="ml-1">2FA pending</Badge>}</Td>
                <Td className="font-mono text-xs">{x.ip ?? "—"}</Td>
                <Td className="max-w-xs truncate text-xs text-muted">{x.userAgent}</Td>
                <Td className="text-xs">{fmt(x.createdAt)}</Td>
                <Td className="text-xs">{fmt(x.lastSeenAt)}</Td>
                <Td>{x.id !== s.sessionId ? <RevokeSessionButton sessionId={x.id} /> : <Badge tone="green">You</Badge>}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
