import type { Metadata } from "next";
import Link from "next/link";
import { Bot, FileQuestion, FileUp, Plus } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { listQuestions } from "@/server/services/questions";
import { getCatalog } from "@/server/services/curriculum";
import { getSetting } from "@/server/settings";
import { QuestionTable } from "@/components/admin/question-bulk";
import { FilterBar, qs, spRecord } from "@/components/admin/filters";
import { buttonClass, Card, cx, EmptyState, PageHeader, Pagination } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Question Bank" };

export default async function QuestionsPage({ searchParams }: PageProps<"/admin/questions">) {
  const s = await requireStaffPage("questions.view");
  const sp = spRecord(await searchParams);
  const [cat, cal, list] = await Promise.all([
    getCatalog(s.user.schoolId),
    getSetting(s.user.schoolId, "academicCalendar"),
    listQuestions(s.actor, { search: sp.search, subjectId: sp.subjectId, classId: sp.classId, level: sp.level, status: sp.status, difficulty: sp.difficulty, year: sp.year ? Number(sp.year) : undefined, examType: sp.examType, needsReview: sp.flagged === "1", aiGenerated: sp.ai === "1" ? true : undefined, sort: sp.sort as "newest", page: Number(sp.page ?? 1) }),
  ]);
  const a = s.actor;
  const tabs: [string, string][] = [["", "All active"], ["PENDING_REVIEW", "Pending review"], ["APPROVED", "Approved"], ["DRAFT", "Draft"], ["REJECTED", "Rejected"], ["ARCHIVED", "Archived"]];
  return (
    <>
      <PageHeader
        eyebrow="Assessment"
        title="Question bank"
        description="Only APPROVED questions enter examination pools. AI and imported questions always start in PENDING_REVIEW."
        actions={
          <>
            {can(a, "questions.import") && <Link href="/admin/imports" className={buttonClass("secondary")}><FileUp className="size-4" /> Import</Link>}
            {can(a, "questions.ai") && <Link href="/admin/ai" className={buttonClass("secondary")}><Bot className="size-4" /> AI generate</Link>}
            {can(a, "questions.create") && <Link href="/admin/questions/new" className={buttonClass("primary")}><Plus className="size-4" /> New question</Link>}
          </>
        }
      />
      <nav className="no-scrollbar mb-4 flex gap-2 overflow-x-auto" aria-label="Status">
        {tabs.map(([v, l]) => (
          <Link key={v || "all"} href={`/admin/questions${qs({ ...sp, status: v || undefined, page: undefined })}`} className={cx("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ring-1", (sp.status ?? "") === v ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line")}>
            {l} {v && <span className="opacity-70">{list.statusCounts[v] ?? 0}</span>}
          </Link>
        ))}
        <Link href={`/admin/questions${qs({ flagged: "1" })}`} className={cx("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ring-1", sp.flagged ? "bg-gold-500 text-navy-900 ring-gold-500" : "bg-white text-navy-800 ring-line")}>Needs review (stats)</Link>
      </nav>
      <FilterBar
        action="/admin/questions"
        values={sp}
        exportHref={can(a, "questions.view") ? `/api/v1/admin/export/questions${qs({ status: sp.status, subjectId: sp.subjectId, search: sp.search })}` : undefined}
        filters={[
          { type: "search", name: "search", placeholder: "Question text or reference" },
          { type: "select", name: "subjectId", label: "Subject", options: cat.subjects.map((x) => ({ value: x.id, label: x.name })) },
          { type: "select", name: "level", label: "Section", options: [{ value: "JUNIOR_SECONDARY", label: "JSS" }, { value: "SENIOR_SECONDARY", label: "SS" }, { value: "ALL", label: "All sections" }] },
          { type: "select", name: "classId", label: "Class", options: cat.classes.map((x) => ({ value: x.id, label: x.name })) },
          { type: "select", name: "difficulty", label: "Difficulty", options: ["EASY", "MEDIUM", "HARD"].map((v) => ({ value: v, label: v.toLowerCase() })) },
          { type: "select", name: "year", label: "Year", options: cal.years.map((y) => ({ value: String(y), label: String(y) })) },
          { type: "select", name: "sort", label: "Sort", options: [{ value: "newest", label: "Newest" }, { value: "oldest", label: "Oldest" }, { value: "accuracy", label: "Lowest accuracy" }] },
        ]}
      />
      <Card>
        {list.rows.length ? <QuestionTable rows={list.rows} canReview={can(a, "questions.review")} canArchive={can(a, "questions.archive")} /> : <EmptyState icon={<FileQuestion className="size-6" />} title="No questions match" />}
        <Pagination page={list.page} pageSize={list.pageSize} total={list.total} href={(p) => `/admin/questions${qs(sp, { page: p })}`} />
      </Card>
      <p className="mt-3 text-xs text-muted">“Needs review (stats)” lists questions with ≥20 attempts and under 20% accuracy or over 25% flag rate — potentially difficult or ambiguous. Statistics never delete questions automatically.</p>
    </>
  );
}
