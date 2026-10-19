import type { Metadata } from "next";
import Link from "next/link";
import { requireStaffPage } from "@/server/http";
import { subjectCoverage, type CoverageCell } from "@/server/services/coverage";
import { Alert, Badge, buttonClass, Card, CardHeader, cx, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Subject coverage" };

const LEVELS = [
  ["all", "All classes"],
  ["PRIMARY", "Primary 1–6"],
  ["JUNIOR_SECONDARY", "JSS 1–3"],
  ["SENIOR_SECONDARY", "SS 1–3"],
] as const;

const STYLE: Record<CoverageCell["state"], string> = {
  complete: "bg-emerald-100 text-emerald-800",
  extra: "bg-emerald-50 text-emerald-700",
  partial: "bg-amber-100 text-amber-800",
  missing: "bg-red-100 text-red-700 font-bold",
  none: "text-slate-300",
};

function Cell({ c }: { c: CoverageCell }) {
  if (c.state === "none") return <span aria-label="not taught in this class">·</span>;
  const label = c.state === "missing" ? "No content" : `${c.topics} topics, ${c.lessons} lessons, ${c.questions} questions`;
  return (
    <span title={label} className={cx("inline-flex min-w-14 flex-col items-center rounded-md px-1.5 py-1 text-[11px] leading-tight", STYLE[c.state])}>
      {c.state === "missing" ? "None" : <><strong className="text-xs">{c.lessons}/{c.topics}</strong><span>{c.questions}q</span></>}
    </span>
  );
}

export default async function CoveragePage({ searchParams }: PageProps<"/admin/coverage">) {
  const s = await requireStaffPage("curriculum.manage");
  const sp = await searchParams;
  const level = typeof sp.level === "string" && LEVELS.some(([k]) => k === sp.level) ? sp.level : "all";
  const data = await subjectCoverage(s.user.schoolId);
  const classes = data.classes.filter((c) => level === "all" || c.level === level);
  const rows = data.rows.filter((r) => classes.some((c) => r.cells[c.code].state !== "none"));
  const needs = data.needs.filter((n) => classes.some((c) => c.code === n.classCode));
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Academics"
        title="Subject coverage"
        description="Every subject from Primary 1 to SS 3, class by class: published lessons out of topics, and approved questions. Red means the NERDC scheme expects the subject in that class but there is no content yet; amber means some lessons or questions are missing."
        actions={<Link href="/admin/content-packs" className={buttonClass("secondary", "sm")}>Content packs</Link>}
      />
      <div className="grid gap-3 sm:grid-cols-3">
        <Card className="p-4"><p className="text-xs font-bold uppercase text-muted">Complete</p><p className="text-2xl font-extrabold text-emerald-700">{data.totals.complete}</p><p className="text-xs text-muted">subject–class pairs</p></Card>
        <Card className="p-4"><p className="text-xs font-bold uppercase text-muted">Need more</p><p className="text-2xl font-extrabold text-amber-700">{data.totals.partial}</p><p className="text-xs text-muted">some lessons or questions missing</p></Card>
        <Card className="p-4"><p className="text-xs font-bold uppercase text-muted">No content</p><p className="text-2xl font-extrabold text-red-700">{data.totals.missing}</p><p className="text-xs text-muted">expected but empty</p></Card>
      </div>
      <nav aria-label="Level" className="no-scrollbar flex gap-2 overflow-x-auto">
        {LEVELS.map(([k, l]) => (
          <Link key={k} prefetch={false} href={k === "all" ? "/admin/coverage" : `/admin/coverage?level=${k}`} className={cx("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ring-1", level === k ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line hover:bg-surface")}>{l}</Link>
        ))}
      </nav>
      <Card>
        <CardHeader title="Coverage by class" description="Each box shows published lessons / topics, and approved questions (q). A dot means the subject is not taught in that class." />
        <Table>
          <thead>
            <tr>
              <Th className="sticky left-0 z-10 bg-white">Subject</Th>
              {classes.map((c) => <Th key={c.code} className="text-center">{c.name.replace("Basic ", "P")}</Th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.subjectId}>
                <Td className="sticky left-0 z-10 bg-white font-semibold text-navy-800">{r.name}<span className="block text-xs font-normal text-muted">{r.code}</span></Td>
                {classes.map((c) => <Td key={c.code} className="text-center"><Cell c={r.cells[c.code]} /></Td>)}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <Card>
        <CardHeader title={`Needs update (${needs.length})`} description="Subject and class pairs to work on first. Built-in Precious PS content loads automatically on each deploy; anything still listed here needs your own lessons and questions, or is waiting for the next deploy." />
        {needs.length ? (
          <Table>
            <thead><tr><Th>Subject</Th><Th>Class</Th><Th>State</Th><Th>Topics</Th><Th>Published lessons</Th><Th>Approved questions</Th><Th className="text-right">Fix</Th></tr></thead>
            <tbody>
              {needs.map((n) => (
                <tr key={`${n.code}-${n.classCode}`}>
                  <Td className="font-semibold">{n.subject}</Td>
                  <Td>{n.className}</Td>
                  <Td><Badge tone={n.state === "missing" ? "red" : "amber"}>{n.state === "missing" ? "No content" : "Incomplete"}</Badge></Td>
                  <Td>{n.topics}</Td>
                  <Td>{n.lessons}</Td>
                  <Td className={n.questions < 70 ? "font-bold text-red-700" : undefined}>{n.questions}{n.questions < 70 ? " (under 70)" : ""}</Td>
                  <Td className="text-right"><Link prefetch={false} href="/admin/curriculum" className="text-sm font-semibold text-royal-600 hover:underline">Open curriculum</Link></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="p-5"><Alert tone="success">Every subject has content in every class it is taught in.</Alert></div>
        )}
      </Card>
      {data.empty.length > 0 && (
        <Alert tone="info">
          <strong>Subjects with no topics in any class:</strong> {data.empty.map((e) => e.name).join(", ")}. These have no built-in Precious PS pack; add topics under Curriculum, or archive them under Subjects if the school does not offer them.
        </Alert>
      )}
    </div>
  );
}
