import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Pencil } from "lucide-react";
import { SECTION_SHORT, type Section } from "@/core/sections";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { fmtLagos } from "@/server/services/access";
import { getArticleAdmin, HUB_SECTIONS, listArticlesAdmin, listArticleVersions, listHubQuestionsAdmin } from "@/server/services/hub";
import { ArticleForm, ArticleRowButtons, DeleteHubQuestion, HubQuestionForm, RestoreVersion } from "@/components/admin/knowledge-controls";
import { CentralUpload } from "@/components/admin/central-upload";
import { SettingsForm, type FieldSpec } from "@/components/admin/settings-forms";
import { FilterBar, spRecord } from "@/components/admin/filters";
import { Badge, buttonClass, Card, CardHeader, cx, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Knowledge & Parent Learning" };

const TABS = [["articles", "Articles"], ["questions", "Quiz questions"], ["settings", "Sessions & settings"]] as const;

export default async function KnowledgeAdmin({ searchParams }: PageProps<"/admin/knowledge">) {
  const s = await requireStaffPage("learning.manage");
  const sp = spRecord(await searchParams);
  const tab = TABS.some(([k]) => k === sp.tab) ? sp.tab! : "articles";
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Content" title="Knowledge Hub & Parent Learning" description="Articles for the student Knowledge Hub, the Parent Learning Hub and the Psychology Library, and the questions used by Quiz Arena, the challenges and the parent games." />
      <nav aria-label="Sections" className="no-scrollbar flex gap-1 overflow-x-auto">
        {TABS.map(([k, l]) => (
          <Link key={k} href={`/admin/knowledge?tab=${k}`} className={cx("whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-semibold", tab === k ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>{l}</Link>
        ))}
      </nav>
      {tab === "articles" && <Articles schoolId={s.user.schoolId} sp={sp} />}
      {tab === "questions" && <Questions schoolId={s.user.schoolId} sp={sp} />}
      {tab === "settings" && <Settings schoolId={s.user.schoolId} />}
    </div>
  );
}

async function Articles({ schoolId, sp }: { schoolId: string; sp: Record<string, string | undefined> }) {
  const editing = sp.edit ? await getArticleAdmin(schoolId, sp.edit) : null;
  if (editing) {
    const versions = await listArticleVersions(editing.id);
    return (
      <>
        <Link href="/admin/knowledge" className="text-sm font-semibold text-royal-600 hover:underline">← All articles</Link>
        <Card>
          <CardHeader title={`Edit: ${editing.title}`} description={`Version ${editing.version} · ${editing.status.toLowerCase()}${editing.publishedAt ? ` · published ${fmtLagos(editing.publishedAt)}` : ""}`} />
          <div className="p-5"><ArticleForm article={editing} /></div>
        </Card>
        <Card>
          <CardHeader title="Earlier versions" description="Each time the title, summary or main content changes, the previous text is kept here." />
          {versions.length ? (
            <ul className="divide-y divide-line">
              {versions.map((v) => (
                <li key={v.id} className="flex flex-wrap items-center justify-between gap-3 p-4">
                  <div><p className="font-semibold text-navy-800">Version {v.version}: {v.title}</p><p className="text-xs text-muted">{fmtLagos(v.createdAt)} · {v.body.length} characters</p></div>
                  <RestoreVersion id={editing.id} version={v.version} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="No earlier versions" description="This article has not been changed since it was created." />
          )}
        </Card>
      </>
    );
  }
  const rows = await listArticlesAdmin(schoolId, { section: sp.section, status: sp.status, search: sp.search });
  return (
    <>
      <Card>
        <CardHeader title="Add an article" description="New articles start as Draft. Send them for review, approve, then publish. Only Published articles reach students or parents." />
        <div className="p-5"><ArticleForm defaultSection={sp.section} /></div>
      </Card>
      <Card>
        <CardHeader title="Add many at once from Excel" description="Use the Articles and Quiz Questions sheets of the template. Imported articles go to Review, never straight to Published." />
        <div className="p-5"><CentralUpload templateHref="/api/v1/admin/central-template?only=hub" /></div>
      </Card>
      <FilterBar action="/admin/knowledge" values={sp} filters={[{ type: "search", name: "search", placeholder: "Title or category" }, { type: "select", name: "section", label: "Where", options: Object.entries(HUB_SECTIONS).map(([value, v]) => ({ value, label: v.label })) }, { type: "select", name: "status", label: "Status", options: ["DRAFT", "REVIEW", "APPROVED", "PUBLISHED", "ARCHIVED"].map((v) => ({ value: v, label: v.toLowerCase() })) }]} />
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Article</Th><Th>Where</Th><Th>Who</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {rows.map((a) => (
                <tr key={a.id} className="align-top">
                  <Td className="max-w-sm"><p className="font-semibold text-navy-800">{a.title}</p><p className="text-xs text-muted">{a.category} · version {a.version}</p></Td>
                  <Td className="text-sm">{HUB_SECTIONS[a.section as keyof typeof HUB_SECTIONS]?.label ?? a.section}</Td>
                  <Td className="text-sm">{a.audience === "PARENT" ? "Parents" : [a.level ? SECTION_SHORT[a.level as Section] : "All classes", a.stream?.toLowerCase()].filter(Boolean).join(" · ")}</Td>
                  <Td><StatusBadge status={a.status} /></Td>
                  <Td className="text-right">
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <Link href={`/admin/knowledge?edit=${a.id}`} className={buttonClass("secondary", "sm")}><Pencil className="size-4" /> Edit</Link>
                      <ArticleRowButtons id={a.id} status={a.status} title={a.title} />
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<BookOpen className="size-6" />} title="No articles" description="Add the first article above." />
        )}
      </Card>
    </>
  );
}

async function Questions({ schoolId, sp }: { schoolId: string; sp: Record<string, string | undefined> }) {
  const rows = await listHubQuestionsAdmin(schoolId, { audience: sp.audience, search: sp.search });
  return (
    <>
      <Card>
        <CardHeader title="Add a quiz question" description="These questions feed Quiz Arena, the Daily and Culture Challenges and the parent games. They are separate from the examination Question Bank." />
        <div className="p-5"><HubQuestionForm /></div>
      </Card>
      <FilterBar action="/admin/knowledge" hidden={{ tab: "questions" }} values={sp} filters={[{ type: "search", name: "search", placeholder: "Question text" }, { type: "select", name: "audience", label: "For", options: [{ value: "STUDENT", label: "Students" }, { value: "PARENT", label: "Parents" }] }]} />
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>Question</Th><Th>Category</Th><Th>For</Th><Th>Answer</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {rows.map((q) => (
                <tr key={q.id} className="align-top">
                  <Td className="max-w-md text-sm"><p className="font-semibold text-navy-800">{q.stem}</p>{q.status !== "PUBLISHED" && <Badge>hidden</Badge>}</Td>
                  <Td className="text-sm">{q.category}<p className="text-xs text-muted">{q.difficulty.toLowerCase()}</p></Td>
                  <Td className="text-sm">{q.audience === "PARENT" ? "Parents" : [q.level ? SECTION_SHORT[q.level as Section] : "All classes", q.stream?.toLowerCase()].filter(Boolean).join(" · ")}</Td>
                  <Td className="text-sm">{q.options[q.answer]}</Td>
                  <Td className="text-right">
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <details className="relative text-left">
                        <summary className={buttonClass("secondary", "sm", "list-none cursor-pointer")}><Pencil className="size-4" /> Edit</summary>
                        <div className="absolute right-0 z-20 mt-2 w-[min(56rem,92vw)] rounded-2xl border border-line bg-white p-4 shadow-lift"><HubQuestionForm q={q} /></div>
                      </details>
                      <DeleteHubQuestion id={q.id} />
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState title="No questions" description="Add the first question above." />
        )}
      </Card>
      <p className="text-xs text-muted">{rows.length} shown (at most 500).</p>
    </>
  );
}

async function Settings({ schoolId }: { schoolId: string }) {
  const cfg = await getSetting(schoolId, "knowledgeHub");
  const fields: FieldSpec[] = [
    { key: "enabled", label: "Knowledge Hub switched on", type: "bool" },
    { key: "showCorrectAnswer", label: "Show the correct answer after a wrong answer", type: "bool" },
    { key: "sessionMinutes", label: "Length of one student session (minutes)", type: "number", min: 5, max: 600, hint: "The default. A single access code can be given a different length, or unlimited access, under Access Codes → Features." },
    { key: "cooldownMinutes", label: "Wait before the next session (minutes)", type: "number", min: 0, max: 1440 },
    { key: "quizQuestions", label: "Questions in a Quiz Arena or parent game (5–50)", type: "number", min: 5, max: 50 },
    { key: "dailyQuestions", label: "Questions in the Daily Challenge (3–20)", type: "number", min: 3, max: 20 },
  ];
  return (
    <Card>
      <CardHeader title="Student sessions and games" description="Session time and cooldown are enforced by the server. Parents are never limited." />
      <div className="p-5"><SettingsForm settingKey="knowledgeHub" initial={cfg} fields={fields} /></div>
    </Card>
  );
}
