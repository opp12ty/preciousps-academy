import type { Metadata } from "next";
import Link from "next/link";
import { Building2 } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { fmtLagos, getAccessState } from "@/server/services/access";
import { listSchoolAccounts } from "@/server/services/school-accounts";
import { Badge, Card, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "School Accounts" };

export default async function SchoolsAdmin() {
  const s = await requireStaffPage("students.view");
  const rows = await listSchoolAccounts(s.user.schoolId);
  const access = await Promise.all(rows.slice(0, 200).map((r) => getAccessState(r.p.userId)));
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="People" title="School accounts" description="Schools that registered to prepare their examination classes. A school signs in with its School Code, works in the student area for Basic 4 to 6 or JSS 2-3 and SS 2-3, and needs a school access code (Access Codes → For: Schools). To give one school access directly, open it and use “Generate & assign access”." />
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>School</Th><Th>School Code</Th><Th>Type</Th><Th>Administrator and contact</Th><Th>Working class</Th><Th>Access</Th><Th>Last sign-in</Th><Th>Status</Th></tr></thead>
            <tbody>
              {rows.map(({ p, email, phone, status, lastLoginAt, className }, i) => (
                <tr key={p.userId} className="align-top">
                  <Td><Link href={`/admin/students/${p.userId}`} className="font-semibold text-navy-800 hover:text-royal-600">{p.schoolName}</Link><p className="text-xs text-muted">{p.address}</p></Td>
                  <Td className="font-mono text-sm font-bold text-navy-800">{p.schoolCode}</Td>
                  <Td><Badge tone={p.category === "PRIMARY" ? "blue" : "navy"}>{p.category === "PRIMARY" ? "Primary" : "Secondary"}</Badge></Td>
                  <Td className="text-sm">{p.adminName}<p className="text-xs text-muted">{email}<br />{phone}</p></Td>
                  <Td>{className ?? "—"}</Td>
                  <Td>{access[i] ? <><StatusBadge status={access[i].status === "NONE" ? "No code" : access[i].status} />{access[i].status === "ACTIVE" && access[i].expiresAt && <p className="mt-0.5 whitespace-nowrap text-xs text-muted">until {fmtLagos(new Date(access[i].expiresAt!))}</p>}</> : "—"}</Td>
                  <Td className="whitespace-nowrap text-xs">{lastLoginAt ? fmtLagos(lastLoginAt) : "Not yet"}</Td>
                  <Td><StatusBadge status={status} /></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<Building2 className="size-6" />} title="No school has registered yet" description="Schools register from the sign-in page, under “Register a school”." />
        )}
      </Card>
    </div>
  );
}
