import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { JAMB_SUBJECT_CODES } from "@/core/exam-programmes";
import { JAMB_ONLY_FROM, jambOverview } from "@/server/services/exams";
import { getSetting } from "@/server/settings";
import { JambSetupButton } from "@/components/admin/jamb-setup";
import { Badge, buttonClass, Card, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "JAMB Tests" };

export default async function JambAdmin() {
  const s = await requireStaffPage("exams.view");
  const rows = (await jambOverview(s.actor)).filter((r) => r.total > 0 || r.test || JAMB_SUBJECT_CODES.includes(r.code));
  const canPublish = can(s.actor, "exams.publish");
  const JAMB_TEST_QUESTIONS = (await getSetting(s.user.schoolId, "examination")).jambQuestions;
  return (
    <>
      <PageHeader
        eyebrow="Assessment"
        title="JAMB tests"
        description={`One test per UTME subject, shown to SS2 and SS3 students under Test → JAMB Questions. Each attempt draws up to ${JAMB_TEST_QUESTIONS} questions at random, with 48 seconds a question. Tests are set up and refreshed automatically on every update of the platform. The Super Admin can change the standard number in Settings → Examination.`}
        actions={canPublish && rows.length > 0 && <JambSetupButton subjectId="ALL" variant="primary">Set up / refresh all subjects</JambSetupButton>}
      />
      <Card className="mb-6 p-5 text-sm text-muted">
        <p className="font-semibold text-navy-800">How to update the questions</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>
            Add JAMB questions for a subject in <Link href="/admin/imports" className="font-semibold text-royal-600 hover:underline">Question Imports</Link>, <Link href="/admin/content-packs" className="font-semibold text-royal-600 hover:underline">Content Packs</Link> or the <Link href="/admin/questions" className="font-semibold text-royal-600 hover:underline">Question Bank</Link>, with the exam type set to JAMB.
          </li>
          <li>Approve them. Only approved questions are counted and drawn.</li>
          <li>Press “Set up” (or wait for the next platform update). A test is published as soon as it has any approved questions: with fewer than {JAMB_TEST_QUESTIONS}, it uses all of them and the time is shortened to match.</li>
        </ol>
        <p className="mt-2">A subject with enough approved JAMB questions to fill the standard paper ({JAMB_TEST_QUESTIONS}) draws JAMB questions only. Below that, its test also draws the subject’s standard SS2–SS3 questions, so every subject sits a full {JAMB_TEST_QUESTIONS}-question paper. Title, duration, attempts and timing can be changed by opening the test in Examinations.</p>
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
                    <Td><Badge tone={r.approved >= need ? "green" : r.approved >= JAMB_ONLY_FROM ? "gold" : "amber"}>{r.approved}</Badge>{r.test?.mixed && <p className="mt-0.5 text-xs text-muted">+ standard SS2–SS3 questions</p>}</Td>
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
