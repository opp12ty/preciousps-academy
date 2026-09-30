import type { Metadata } from "next";
import Link from "next/link";
import { Users } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { listStudents, type StudentFilter } from "@/server/services/people";
import { getCatalog } from "@/server/services/curriculum";
import { FilterBar, qs, spRecord } from "@/components/admin/filters";
import { Card, EmptyState, PageHeader, Pagination, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Students" };
const fmt = (d: Date | null) => (d ? new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium" }).format(new Date(d)) : "—");

export default async function StudentsPage({ searchParams }: PageProps<"/admin/students">) {
  const s = await requireStaffPage("students.view");
  const sp = spRecord(await searchParams);
  const [cat, list] = await Promise.all([
    getCatalog(s.user.schoolId),
    listStudents(s.actor, { search: sp.search, classId: sp.classId, departmentId: sp.departmentId, status: sp.status, access: sp.access as StudentFilter["access"], sort: sp.sort as StudentFilter["sort"], page: Number(sp.page ?? 1) }),
  ]);
  return (
    <>
      <PageHeader eyebrow="People" title="Students" description={`${list.total.toLocaleString()} registered students. Passwords are never visible — use the security controls on a student's profile.`} />
      <FilterBar
        action="/admin/students"
        values={sp}
        exportHref={`/api/v1/admin/export/students${qs(sp, { page: undefined })}`}
        filters={[
          { type: "search", name: "search", placeholder: "Name, email, phone or Student ID" },
          { type: "select", name: "classId", label: "Class", options: cat.classes.map((c) => ({ value: c.id, label: c.name })) },
          { type: "select", name: "departmentId", label: "Department", options: cat.departments.map((d) => ({ value: d.id, label: d.name })) },
          { type: "select", name: "access", label: "Access", options: [{ value: "ACTIVE", label: "Active" }, { value: "EXPIRED", label: "Expired" }, { value: "NONE", label: "No code yet" }] },
          { type: "select", name: "status", label: "Account", options: [{ value: "ACTIVE", label: "Active" }, { value: "SUSPENDED", label: "Suspended" }] },
          { type: "select", name: "sort", label: "Sort", options: [{ value: "newest", label: "Newest" }, { value: "name", label: "Name" }, { value: "lastLogin", label: "Last login" }] },
        ]}
      />
      <Card>
        {list.rows.length ? (
          <Table>
            <thead>
              <tr>
                <Th>Student</Th>
                <Th>Student ID</Th>
                <Th>Class</Th>
                <Th>Department</Th>
                <Th>Access</Th>
                <Th>Account</Th>
                <Th>Last login</Th>
              </tr>
            </thead>
            <tbody>
              {list.rows.map((r) => (
                <tr key={r.id} className="hover:bg-surface">
                  <Td>
                    <Link href={`/admin/students/${r.id}`} className="font-semibold text-navy-800 hover:text-royal-600">
                      {r.firstName} {r.lastName}
                    </Link>
                    <p className="text-xs text-muted">{r.email}</p>
                  </Td>
                  <Td className="font-mono text-xs">{r.studentNumber}</Td>
                  <Td>{r.className ?? "—"}</Td>
                  <Td>{r.department ?? "—"}</Td>
                  <Td>
                    <StatusBadge status={r.access === "NONE" ? "No code" : r.access} />
                    {r.access === "ACTIVE" && r.accessUntil && <p className="mt-0.5 text-xs text-muted">until {fmt(r.accessUntil)}</p>}
                  </Td>
                  <Td>
                    <StatusBadge status={r.status} />
                  </Td>
                  <Td className="whitespace-nowrap text-xs text-muted">{fmt(r.lastLoginAt)}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<Users className="size-6" />} title="No students match" description="Adjust the filters or share the registration link with students." />
        )}
        <Pagination page={list.page} pageSize={list.pageSize} total={list.total} href={(p) => `/admin/students${qs(sp, { page: p })}`} />
      </Card>
    </>
  );
}
