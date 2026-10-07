import type { Metadata } from "next";
import Link from "next/link";
import { SECTION_SHORT } from "@/core/sections";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { internationalOverview } from "@/server/services/international";
import { InternationalSetupButton } from "@/components/admin/international-setup";
import { SettingsForm, type FieldSpec } from "@/components/admin/settings-forms";
import { Alert, Badge, buttonClass, Card, CardHeader, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "International (Premium)" };

export default async function InternationalAdmin() {
  const s = await requireStaffPage("premium.manage");
  const [rows, cfg] = await Promise.all([internationalOverview(s.user.schoolId), getSetting(s.user.schoolId, "premium")]);
  const fields: FieldSpec[] = [
    { key: "enabled", label: "Show the International & Advanced area to students", type: "bool" },
    { key: "title", label: "Name of the area", type: "text", maxLength: 80 },
    { key: "intro", label: "Introduction", type: "textarea" },
    { key: "lockedMessage", label: "Message for students without a Premium code", type: "textarea" },
    { key: "disclaimer", label: "Note shown under the tests", type: "textarea" },
  ];
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Assessment" title="International & advanced (Premium)" description="Practice for IELTS, TOEFL, SAT and international checkpoint tests, open only to students who activate a Premium access code." />
      <Alert tone="info">
        <strong>How Premium works.</strong> Generate a code of type <em>Premium</em> under <Link href="/admin/access-codes" className="font-semibold underline">Access Codes</Link> and give it to the student. A Premium code gives everything a standard code gives, plus this area. Any examination or study material can be made Premium with its “Premium only” tick box.
      </Alert>
      <Card>
        <CardHeader title="Starter programmes" action={<InternationalSetupButton />} description="Original practice questions written for Precious PS Academy. Pressing the button again is safe: nothing is duplicated." />
        <Table>
          <thead><tr><Th>Programme</Th><Th>Section</Th><Th>Subject</Th><Th>Approved questions</Th><Th>Premium test</Th><Th className="text-right">Actions</Th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key} className="align-top">
                <Td className="max-w-sm"><p className="font-semibold text-navy-800">{r.title}</p><p className="text-xs text-muted">{r.description}</p></Td>
                <Td>{SECTION_SHORT[r.level]}</Td>
                <Td>{r.subjectCode}</Td>
                <Td>{r.approved} <span className="text-xs text-muted">(starter set: {r.starter})</span></Td>
                <Td>{r.exam ? <StatusBadge status={r.exam.status} /> : <Badge>Not created</Badge>}</Td>
                <Td className="text-right">{r.exam && <Link href={`/admin/examinations/${r.exam.id}`} className={buttonClass("secondary", "sm")}>Open test</Link>}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <p className="text-xs text-muted">Add more questions in the Question Bank with Exam type IELTS, TOEFL, SAT or CHECKPOINT; each test draws a fresh set from all approved questions of its type. IELTS, TOEFL, SAT and Cambridge Checkpoint are trademarks of their owners, who are not connected with this platform; no real examination questions are used.</p>
      <Card>
        <CardHeader title="What students see" />
        <div className="p-5"><SettingsForm settingKey="premium" initial={cfg} fields={fields} columns={1} /></div>
      </Card>
    </div>
  );
}
