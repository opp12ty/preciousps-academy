import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { JAMB_TEST_QUESTIONS, jambOverview } from "@/server/services/exams";
import { JambSetupButton } from "@/components/admin/jamb-setup";
import { Badge, buttonClass, Card, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "JAMB Tests" };

export default async function JambAdmin() {
  const s = await requireStaffPage("exams.view");
  const rows = (await jambOverview(s.actor)).filter((r) => r.total > 0 || r.test);
  const canPublish = can(s.actor, "exams.publish");
  return (
    <>
      <PageHeader
        eyebrow="Assessment"
        title="JAMB tests"
        description={`One test per subject, shown to senior students under Test → JAMB Questions. Each attempt draws ${JAMB_TEST_QUESTIONS} questions, and only from questions whose exam type is JAMB.`}
        actions={canPublish && rows.length > 0 && <JambSetupButton subjectId="ALL" variant="primary">Set up / refresh all subjects</JambSetupButton>}
      />
      <Card className="mb-6 p-5 text-sm text-muted">
        <p className="font-semibold text-navy-800">How to update the questions</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>
            Add JAMB questions for a subject in <Link href="/admin/imports" className="font-semibold text-royal-600 hover:underline">Question Imports</Link>, <Link href="/admin/content-packs" className="font-semibold text-royal-600 hover:underline">Content Packs</Link> or the <Link href="/admin/questions" className="font-semibold text-royal-600 hover:underline">Question Bank</Link>, with the exam type set to JAMB.
          </li>
          <li>Approve them. Only approved questions are counted and drawn.</li>
          <li>Press “Set up” for the subject. Its test is published as soon as it has at least {JAMB_TEST_QUESTIONS} approved JAMB questions.</li>
        </ol>
        <p className="mt-2">With exactly {JAMB_TEST_QUESTIONS} questions every student sits the same {JAMB_TEST_QUESTIONS}; with more, each attempt draws a different {JAMB_TEST_QUESTIONS}. Duration, attempts and timing can be changed by opening the test.</p>
      </Card>
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Subject</Th><Th>Approved JAMB questions</Th><Th>Awaiting approval</Th><Th>Test</Th><Th>Status</Th><Th></Th></tr></thead>
            <tbody>
              {rows.map((r) => {
                const need = r.test?.questionCount ?? JAMB_TEST_QUESTIONS;
                return (
                  <tr key={r.id} className="hover:bg-surface">
                    <Td><span className="font-semibold text-navy-800">{r.name}</span> <span className="text-xs text-muted">{r.code}</span></Td>
                    <Td><Badge tone={r.approved >= need ? "green" : "red"}>{r.approved} / {need}</Badge></Td>
                    <Td>{r.total - r.approved}</Td>
                    <Td>{r.test ? <Link href={`/admin/examinations/${r.test.id}`} className="font-semibold text-navy-800 hover:text-royal-600">{r.test.title}</Link> : <span className="text-muted">Not set up</span>}{r.test && <p className="text-xs text-muted">{r.test.questionCount} questions · {r.test.durationMinutes} min</p>}</Td>
                    <Td>{r.test ? <StatusBadge status={r.test.status} /> : "—"}</Td>
                    <Td>
                      {canPublish && r.test?.status !== "PUBLISHED" && <JambSetupButton subjectId={r.id}>{r.test ? "Publish" : "Set up"}</JambSetupButton>}
                      {r.test && <Link href={`/admin/examinations/${r.test.id}`} className={buttonClass("ghost", "sm")}>Open</Link>}
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<GraduationCap className="size-6" />} title="No JAMB questions yet" description="Upload questions with the exam type JAMB, approve them, then return here to set up each subject's test." />
        )}
      </Card>
    </>
  );
}
