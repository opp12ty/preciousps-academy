import type { Metadata } from "next";
import Link from "next/link";
import { Scale } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { fmtLagos } from "@/server/services/access";
import { APPEAL_DAYS, listAppeals } from "@/server/services/appeals";
import { AppealDecide } from "@/components/admin/appeal-controls";
import { spRecord } from "@/components/admin/filters";
import { Badge, Card, cx, EmptyState, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Result Appeals" };

const TABS = [["OPEN", "Waiting"], ["UPHELD", "Accepted"], ["REJECTED", "Not accepted"], ["", "All"]] as const;

export default async function AppealsPage({ searchParams }: PageProps<"/admin/appeals">) {
  const s = await requireStaffPage("results.view");
  const sp = spRecord(await searchParams);
  const status = sp.status === undefined ? "OPEN" : sp.status;
  const { rows, counts } = await listAppeals(s.user.schoolId, status || undefined);
  const manage = can(s.actor, "results.manage");
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Assessment" title="Result appeals" description={`A student may appeal a released result once, within ${APPEAL_DAYS} days. Answering an appeal sends your reply to the student; it does not change the score. If a correction is needed, open the result and use the usual tools there (remarks, void, or reset the attempt).`} />
      <nav aria-label="Status" className="no-scrollbar flex gap-2 overflow-x-auto">
        {TABS.map(([k, l]) => (
          <Link key={k || "all"} href={`/admin/appeals?status=${k}`} className={cx("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ring-1", status === k ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line hover:bg-surface")}>
            {l} <span className="opacity-70">{k ? (counts[k] ?? 0) : Object.values(counts).reduce((x, y) => x + y, 0)}</span>
          </Link>
        ))}
      </nav>
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Student</Th><Th>Examination</Th><Th>Score</Th><Th>Appeal</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {rows.map(({ a, firstName, lastName, studentNumber, exam, subject, percentage, grade, isVoided }) => (
                <tr key={a.id} className="align-top">
                  <Td><Link href={`/admin/students/${a.userId}`} className="font-semibold text-navy-800 hover:text-royal-600">{firstName} {lastName}</Link><p className="text-xs text-muted">{studentNumber}</p></Td>
                  <Td><Link href={`/admin/results/${a.resultId}`} className="font-semibold text-royal-600 hover:underline">{exam}</Link><p className="text-xs text-muted">{subject}</p></Td>
                  <Td className="whitespace-nowrap">{Math.round(percentage)}% · {grade}{isVoided && <Badge tone="red" className="ml-1.5">Voided</Badge>}</Td>
                  <Td className="max-w-md">
                    {a.questions && <p className="text-xs font-semibold text-navy-800">Questions: {a.questions}</p>}
                    <p className="whitespace-pre-wrap text-sm">{a.reason}</p>
                    <p className="mt-1 text-xs text-muted">Sent {fmtLagos(a.createdAt)}</p>
                    {a.response && <p className="mt-2 rounded-lg bg-surface px-2.5 py-1.5 text-sm"><span className="font-semibold text-navy-800">Reply:</span> {a.response}</p>}
                  </Td>
                  <Td><Badge tone={a.status === "OPEN" ? "amber" : a.status === "UPHELD" ? "green" : "red"}>{a.status === "OPEN" ? "Waiting" : a.status === "UPHELD" ? "Accepted" : "Not accepted"}</Badge>{a.decidedAt && <p className="mt-1 whitespace-nowrap text-xs text-muted">{fmtLagos(a.decidedAt)}</p>}</Td>
                  <Td className="text-right">{manage && a.status === "OPEN" && <AppealDecide id={a.id} />}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<Scale className="size-6" />} title="No appeals here" description="Appeals appear when a student questions a released result." />
        )}
      </Card>
    </div>
  );
}
