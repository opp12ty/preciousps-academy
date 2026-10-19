import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { fmtLagos } from "@/server/services/access";
import { classMembers, listPromotionsAdmin, promotionOverview } from "@/server/services/promotions";
import { BulkPromoteForm, PromotionDecide } from "@/components/promotion-controls";
import { MoveStudentForm } from "@/components/admin/move-student";
import { findStudents } from "@/server/services/guardians";
import { getCatalog } from "@/server/services/curriculum";
import { SettingsForm, type FieldSpec } from "@/components/admin/settings-forms";
import { spRecord } from "@/components/admin/filters";
import { Alert, Badge, buttonClass, Card, CardHeader, cx, EmptyState, inputClass, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Promotion" };

const TABS = [["requests", "Requests"], ["classes", "Promote a class"], ["correct", "Demote or correct a class"], ["settings", "Rules"]] as const;

export default async function PromotionsAdmin({ searchParams }: PageProps<"/admin/promotions">) {
  const s = await requireStaffPage("students.manage");
  const sp = spRecord(await searchParams);
  const tab = TABS.some(([k]) => k === sp.tab) ? sp.tab! : "requests";
  const overview = await promotionOverview(s.user.schoolId);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="People" title="Promotion" description={`Session ${overview.session}. Students move up one class, once in a session, during the promotion period. ${overview.open ? "The promotion period is open now." : "The promotion period is closed now."}`} />
      <nav aria-label="Sections" className="no-scrollbar flex gap-1 overflow-x-auto">
        {TABS.map(([k, l]) => (
          <Link key={k} href={`/admin/promotions?tab=${k}`} className={cx("whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-semibold", tab === k ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>{l}</Link>
        ))}
      </nav>
      {tab === "requests" && <Requests schoolId={s.user.schoolId} status={sp.status ?? "PENDING"} />}
      {tab === "classes" && <Classes schoolId={s.user.schoolId} overview={overview} classId={sp.classId} />}
      {tab === "correct" && <Correct schoolId={s.user.schoolId} q={sp.q ?? ""} />}
      {tab === "settings" && <Settings schoolId={s.user.schoolId} />}
    </div>
  );
}

async function Correct({ schoolId, q }: { schoolId: string; q: string }) {
  const [found, cat] = await Promise.all([findStudents(schoolId, q), getCatalog(schoolId)]);
  const classes = cat.classes.map((c) => ({ id: c.id, name: c.name, level: c.level ?? null }));
  const departments = cat.departments.map((d) => ({ id: d.id, name: d.name, level: d.level ?? null }));
  return (
    <>
      <Alert tone="warning" title="For mistakes only">
        Use this when a student registered in the wrong class, or must be moved down. Only staff can do it; students and parents cannot. When the class changes, the student starts afresh: lesson progress, classwork, assignments, quizzes, timetable and loyalty points are cleared. When a student is moved down or across, results earned in the wrong class are also voided (kept in the records, but no longer counted). <strong>The access code and its remaining days are never changed.</strong>
      </Alert>
      <Card>
        <CardHeader title="Find the student" />
        <div className="space-y-4 p-5">
          <form className="flex flex-col gap-2 sm:flex-row" role="search">
            <input type="hidden" name="tab" value="correct" />
            <input name="q" defaultValue={q} placeholder="Student name, Student ID or e-mail" aria-label="Find a student" className={inputClass} />
            <button className={buttonClass("primary")}>Find student</button>
          </form>
          {q.trim().length >= 2 &&
            (found.length ? (
              <ul className="divide-y divide-line rounded-xl border border-line">
                {found.map((st) => (
                  <li key={st.id} className="space-y-3 p-4">
                    <div>
                      <Link href={`/admin/students/${st.id}`} className="font-semibold text-navy-800 hover:text-royal-600">{st.firstName} {st.lastName}</Link>
                      <p className="text-xs text-muted">Now in {st.className ?? "no class"} · {st.studentNumber}</p>
                    </div>
                    <MoveStudentForm userId={st.id} classes={classes} departments={departments} classId={cat.classes.find((c) => c.name === st.className)?.id ?? null} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted">No student matches “{q}”.</p>
            ))}
        </div>
      </Card>
    </>
  );
}

async function Requests({ schoolId, status }: { schoolId: string; status: string }) {
  const rows = await listPromotionsAdmin(schoolId, status);
  return (
    <Card>
      <CardHeader title="Promotion records" description="A student can only ask for the next class, once in a session. Approve only those the school has truly promoted." />
      <div className="flex flex-wrap gap-2 px-5 pb-3">
        {["PENDING", "APPROVED", "REJECTED", "REPEAT"].map((k) => (
          <Link key={k} href={`/admin/promotions?tab=requests&status=${k}`} className={cx("rounded-full px-3 py-1 text-xs font-semibold", status === k ? "bg-navy-800 text-white" : "bg-surface text-navy-800 ring-1 ring-line")}>{k.toLowerCase()}</Link>
        ))}
      </div>
      {rows.length ? (
        <Table>
          <thead><tr><Th>Student</Th><Th>From</Th><Th>To</Th><Th>Session</Th><Th>Asked</Th><Th>How</Th><Th className="text-right">Actions</Th></tr></thead>
          <tbody>
            {rows.map(({ p, firstName, lastName, studentNumber, joined, from, to, department }) => (
              <tr key={p.id} className="align-top">
                <Td><Link href={`/admin/students/${p.userId}`} className="font-semibold text-navy-800 hover:text-royal-600">{firstName} {lastName}</Link><p className="text-xs text-muted">{studentNumber} · registered {fmtLagos(joined)}</p></Td>
                <Td>{from}</Td>
                <Td>{to}{department && <p className="text-xs text-muted">{department}</p>}</Td>
                <Td>{p.session}</Td>
                <Td className="whitespace-nowrap text-xs">{fmtLagos(p.requestedAt)}</Td>
                <Td><Badge>{p.method === "BULK" ? "class promotion" : p.method === "SELF" ? "self" : "request"}</Badge></Td>
                <Td className="text-right">{p.status === "PENDING" && <PromotionDecide id={p.id} name={`${firstName} ${lastName}`} to={to} />}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState icon={<GraduationCap className="size-6" />} title="Nothing here" description="Requests from students appear here during the promotion period." />
      )}
    </Card>
  );
}

async function Classes({ schoolId, overview, classId }: { schoolId: string; overview: Awaited<ReturnType<typeof promotionOverview>>; classId?: string }) {
  const chosen = overview.classes.find((c) => c.id === classId);
  const members = chosen ? await classMembers(schoolId, chosen.id) : [];
  return (
    <>
      <Alert tone="info">Promote the lowest class last. Start from the top (for example SS2 to SS3, then SS1 to SS2) so that students who have just moved up are not promoted a second time by the next step. A student who already has a record this session is skipped in any case.</Alert>
      <Card>
        <CardHeader title={`Classes in ${overview.session}`} description="“Not yet settled” counts students with no promotion or repeat record for this session." />
        <Table>
          <thead><tr><Th>Class</Th><Th>Next class</Th><Th>Students</Th><Th>Not yet settled</Th><Th className="text-right">Action</Th></tr></thead>
          <tbody>
            {[...overview.classes].reverse().map((c) => (
              <tr key={c.id}>
                <Td className="font-semibold text-navy-800">{c.name}</Td>
                <Td>{c.next ?? "Final class"}</Td>
                <Td>{c.total}</Td>
                <Td>{c.waiting ? <Badge tone="amber">{c.waiting}</Badge> : 0}</Td>
                <Td className="text-right">{c.next && c.total > 0 && <Link href={`/admin/promotions?tab=classes&classId=${c.id}`} className={buttonClass("secondary", "sm")}>Promote this class</Link>}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      {chosen?.next && (
        <Card>
          <CardHeader title={`Promote ${chosen.name}`} description="Students moving into a class with several departments (such as SS1) must choose their department themselves from their Promotion page; you then approve the request." />
          <div className="p-5"><BulkPromoteForm classId={chosen.id} from={chosen.name} to={chosen.next} members={members.map((m) => ({ id: m.id, name: `${m.firstName} ${m.lastName}`, studentNumber: m.studentNumber }))} /></div>
        </Card>
      )}
    </>
  );
}

async function Settings({ schoolId }: { schoolId: string }) {
  const cfg = await getSetting(schoolId, "promotion");
  const fields: FieldSpec[] = [
    { key: "enabled", label: "Promotion switched on", type: "bool" },
    { key: "mode", label: "How students are promoted", type: "select", options: [{ value: "REQUEST", label: "Student asks, the school approves (recommended)" }, { value: "AUTO", label: "Student moves up without approval" }, { value: "ADMIN", label: "Only the school promotes" }], hint: "Whatever you choose, a student can only go to the next class, once in a session." },
    { key: "windowStart", label: "Promotion period opens (month-day)", type: "text", maxLength: 5, hint: "08-01 is 1 August, after third term ends." },
    { key: "windowEnd", label: "Promotion period closes (month-day)", type: "text", maxLength: 5, hint: "10-31 is 31 October, some weeks into first term." },
  ];
  return (
    <Card>
      <CardHeader title="Promotion rules" description="The Nigerian school session runs from September to July. Promotion belongs to the long vacation and the first weeks of the new session." />
      <div className="p-5"><SettingsForm settingKey="promotion" initial={cfg} fields={fields} /></div>
    </Card>
  );
}
