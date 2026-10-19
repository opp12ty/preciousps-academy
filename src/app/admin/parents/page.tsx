import type { Metadata } from "next";
import Link from "next/link";
import { Users } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { fmtLagos } from "@/server/services/access";
import { findStudents, listGuardianCodes, listLinkRequestsAdmin, listParents } from "@/server/services/guardians";
import { can } from "@/core/permissions";
import { AssignParentAccess, GenerateParentCode, LinkDecideButtons, RevokeCode, UnlinkChild } from "@/components/admin/parent-controls";
import { SettingsForm, type FieldSpec } from "@/components/admin/settings-forms";
import { DeleteAccountButton } from "@/components/admin/action-wrappers";
import { spRecord } from "@/components/admin/filters";
import { Badge, buttonClass, Card, CardHeader, cx, EmptyState, inputClass, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parents & Guardians" };

const TABS = [["requests", "Link requests"], ["codes", "School link codes"], ["parents", "Parent accounts"], ["settings", "Settings"]] as const;

export default async function ParentsAdmin({ searchParams }: PageProps<"/admin/parents">) {
  const s = await requireStaffPage("parents.manage");
  const sp = spRecord(await searchParams);
  const tab = TABS.some(([k]) => k === sp.tab) ? sp.tab! : "requests";
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="People" title="Parents & guardians" description="A parent asks to be linked to a child; the link becomes active only when the child accepts and, if your policy requires it, when the school verifies it. Every step is recorded in the audit log." />
      <nav aria-label="Sections" className="no-scrollbar flex gap-1 overflow-x-auto">
        {TABS.map(([k, l]) => (
          <Link key={k} href={`/admin/parents?tab=${k}`} className={cx("whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-semibold", tab === k ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>
            {l}
          </Link>
        ))}
      </nav>
      {tab === "requests" && <Requests schoolId={s.user.schoolId} status={sp.status} />}
      {tab === "codes" && <Codes schoolId={s.user.schoolId} q={sp.q ?? ""} />}
      {tab === "parents" && <Parents schoolId={s.user.schoolId} canAssign={can(s.actor, "codes.generate")} isSuper={s.actor.userType === "SUPER_ADMIN"} />}
      {tab === "settings" && <Settings schoolId={s.user.schoolId} />}
    </div>
  );
}

async function Requests({ schoolId, status }: { schoolId: string; status?: string }) {
  const rows = await listLinkRequestsAdmin(schoolId, status || undefined);
  const tone = (st: string) => (st === "ACCEPTED" ? "green" : st === "PENDING" ? "amber" : st === "REJECTED" || st === "BLOCKED" ? "red" : "neutral");
  const answer = (v: boolean | null) => (v === null ? "Waiting" : v ? "Yes" : "No");
  return (
    <Card>
      <CardHeader title="Parent–child link requests" description="The latest 300. Verify or reject a waiting request here; remove an active link under Parent accounts." />
      <div className="flex flex-wrap gap-2 px-5 pb-3">
        {["", "PENDING", "ACCEPTED", "REJECTED", "REVOKED", "EXPIRED", "BLOCKED"].map((k) => (
          <Link key={k || "all"} href={`/admin/parents?tab=requests${k ? `&status=${k}` : ""}`} className={cx("rounded-full px-3 py-1 text-xs font-semibold", (status ?? "") === k ? "bg-navy-800 text-white" : "bg-surface text-navy-800 ring-1 ring-line")}>{k ? k.toLowerCase() : "all"}</Link>
        ))}
      </div>
      {rows.length ? (
        <Table>
          <thead><tr><Th>Parent</Th><Th>Child</Th><Th>Requested</Th><Th>Child agreed</Th><Th>School verified</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
          <tbody>
            {rows.map(({ r, parentFirst, parentLast, parentEmail, child }) => (
              <tr key={r.id} className="align-top">
                <Td><p className="font-semibold text-navy-800">{parentFirst} {parentLast}</p><p className="text-xs text-muted">{parentEmail}{r.relationship ? ` · ${r.relationship}` : ""}</p></Td>
                <Td>{child ? <><Link href={`/admin/students/${child.id}`} className="font-semibold text-navy-800 hover:text-royal-600">{child.firstName} {child.lastName}</Link><p className="text-xs text-muted">{[child.className, child.studentNumber].filter(Boolean).join(" · ")}</p></> : "—"}</Td>
                <Td className="whitespace-nowrap text-xs">{fmtLagos(r.requestedAt)}</Td>
                <Td>{answer(r.childAccepted)}</Td>
                <Td>{answer(r.adminApproved)}</Td>
                <Td><Badge tone={tone(r.status)}>{r.status.toLowerCase()}</Badge>{r.reason && <p className="mt-1 text-xs text-muted">{r.reason}</p>}</Td>
                <Td className="text-right">{r.status === "PENDING" && r.adminApproved === null && <LinkDecideButtons id={r.id} />}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState icon={<Users className="size-6" />} title="No requests" description="Requests appear here when parents ask to be linked to a student." />
      )}
    </Card>
  );
}

async function Codes({ schoolId, q }: { schoolId: string; q: string }) {
  const [found, codes] = await Promise.all([findStudents(schoolId, q), listGuardianCodes(schoolId)]);
  const now = new Date();
  return (
    <>
      <Card>
        <CardHeader title="Generate a link code for a child" description="Find the student, then generate a code and give it to the parent or guardian. A parent with several children needs one code for each child." />
        <div className="space-y-4 p-5">
          <form className="flex flex-col gap-2 sm:flex-row" role="search">
            <input type="hidden" name="tab" value="codes" />
            <input name="q" defaultValue={q} placeholder="Student name, Student ID or e-mail" aria-label="Find a student" className={inputClass} />
            <button className={buttonClass("primary")}>Find student</button>
          </form>
          {q.trim().length >= 2 &&
            (found.length ? (
              <ul className="divide-y divide-line rounded-xl border border-line">
                {found.map((st) => (
                  <li key={st.id} className="flex flex-col gap-2 p-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-semibold text-navy-800">{st.firstName} {st.lastName}</p>
                      <p className="text-xs text-muted">{[st.className, st.studentNumber].filter(Boolean).join(" · ")}</p>
                    </div>
                    <GenerateParentCode studentUserId={st.id} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted">No student matches “{q}”.</p>
            ))}
        </div>
      </Card>
      <Card>
        <CardHeader title="Codes issued" description="The latest 300 codes." />
        {codes.length ? (
          <Table>
            <thead><tr><Th>Code</Th><Th>Child</Th><Th>Issued</Th><Th>Expires</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {codes.map(({ c, firstName, lastName, studentNumber, className }) => {
                const state = c.usedAt ? "Used" : c.revokedAt ? "Cancelled" : c.expiresAt < now ? "Expired" : "Waiting";
                return (
                  <tr key={c.id}>
                    <Td className="font-mono text-sm font-bold text-navy-800">{c.code}</Td>
                    <Td><Link href={`/admin/students/${c.studentUserId}`} className="font-semibold text-navy-800 hover:text-royal-600">{firstName} {lastName}</Link><p className="text-xs text-muted">{[className, studentNumber].filter(Boolean).join(" · ")}</p></Td>
                    <Td className="whitespace-nowrap text-xs">{fmtLagos(c.createdAt)}</Td>
                    <Td className="whitespace-nowrap text-xs">{fmtLagos(c.expiresAt)}</Td>
                    <Td><Badge tone={state === "Used" ? "green" : state === "Waiting" ? "blue" : "neutral"}>{state}</Badge></Td>
                    <Td className="text-right">{state === "Waiting" && <RevokeCode id={c.id} />}</Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<Users className="size-6" />} title="No codes yet" description="Find a student above and generate the first code." />
        )}
      </Card>
    </>
  );
}

async function Parents({ schoolId, canAssign, isSuper }: { schoolId: string; canAssign: boolean; isSuper?: boolean }) {
  const [parents, cfg] = await Promise.all([listParents(schoolId), getSetting(schoolId, "accessCodes")]);
  return (
    <Card>
      <CardHeader title="Parent accounts" description="A parent uses the portal only while a parent access code is running. Generate parent codes under Access codes (choose “Parents / guardians”), or give access to one account here. Parents registered before codes were introduced have a free period that ends on the date shown." />
      {parents.length ? (
        <Table>
          <thead><tr><Th>Parent / guardian</Th><Th>Contact</Th><Th>Children</Th><Th>Portal access</Th><Th>Last sign-in</Th><Th>Status</Th>{isSuper && <Th className="text-right">Actions</Th>}</tr></thead>
          <tbody>
            {parents.map((p) => (
              <tr key={p.id} className="align-top">
                <Td className="font-semibold text-navy-800">{p.firstName} {p.lastName}</Td>
                <Td className="text-sm">{p.email}<p className="text-xs text-muted">{p.phone}</p></Td>
                <Td>
                  {p.children.length ? (
                    <ul className="space-y-1.5">
                      {p.children.map((c) => (
                        <li key={c.studentUserId} className="flex flex-wrap items-center gap-2 text-sm">
                          <Link href={`/admin/students/${c.studentUserId}`} className="font-semibold text-royal-600 hover:underline">{c.firstName} {c.lastName}</Link>
                          <span className="text-xs text-muted">{c.className}</span>
                          <UnlinkChild parentUserId={p.id} studentUserId={c.studentUserId} child={`${c.firstName} ${c.lastName}`} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-sm text-muted">No child linked yet</span>
                  )}
                </Td>
                <Td>
                  <Badge tone={p.access.active ? (p.access.source === "GRACE" ? "amber" : "green") : "red"}>{p.access.active ? (p.access.source === "GRACE" ? "Free period" : "Active") : p.access.status === "NONE" ? "No code" : p.access.status.toLowerCase()}</Badge>
                  {p.access.until && <p className="mt-1 whitespace-nowrap text-xs text-muted">{p.access.active ? "until" : "ended"} {fmtLagos(new Date(p.access.until))}</p>}
                  {canAssign && !(p.access.active && p.access.source === "CODE") && <div className="mt-1.5"><AssignParentAccess userId={p.id} name={`${p.firstName} ${p.lastName}`} defaultDays={cfg.defaultDays} /></div>}
                </Td>
                <Td className="whitespace-nowrap text-xs">{p.lastLoginAt ? fmtLagos(p.lastLoginAt) : "Not yet"}</Td>
                <Td><StatusBadge status={p.status} /></Td>
                {isSuper && <Td className="text-right"><DeleteAccountButton userId={p.id} name={`${p.firstName} ${p.lastName}`} /></Td>}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState icon={<Users className="size-6" />} title="No parent accounts yet" description="Parents and guardians register from the sign-in page, enter a parent access code, then send a link request for each child." />
      )}
    </Card>
  );
}

async function Settings({ schoolId }: { schoolId: string }) {
  const cfg = await getSetting(schoolId, "parents");
  const fields: FieldSpec[] = [
    { key: "registrationOpen", label: "Parents can register", type: "bool", hint: "Switch off to stop new parent accounts." },
    { key: "showResults", label: "Show test and examination results", type: "bool" },
    { key: "showStudyProgress", label: "Show study progress", type: "bool" },
    { key: "linkPolicy", label: "Who must agree before a parent is linked to a child", type: "select", options: [{ value: "CHILD", label: "The child accepts" }, { value: "CHILD_AND_SCHOOL", label: "The child accepts and the school verifies" }, { value: "SCHOOL", label: "The school verifies (for very young children)" }], hint: "A request made with a school link code counts as verified by the school." },
    { key: "childCanRemove", label: "Students may remove a parent connection themselves", type: "bool" },
    { key: "communityEnabled", label: "Parent community switched on", type: "bool" },
    { key: "communityRules", label: "Parent community rules", type: "textarea" },
    { key: "welcome", label: "Welcome message on the parent's first page", type: "textarea" },
  ];
  return (
    <Card>
      <CardHeader title="Parent portal settings" />
      <div className="p-5"><SettingsForm settingKey="parents" initial={cfg} fields={fields} /></div>
    </Card>
  );
}
