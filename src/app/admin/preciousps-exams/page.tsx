import type { Metadata } from "next";
import Link from "next/link";
import { Download, Medal, Trophy } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { fodanRankings, fodanSessions, type Ranked } from "@/server/services/preciousps-exams";
import { FodanSetupButton } from "@/components/admin/preciousps-setup";
import { buttonClass, Card, cx, EmptyState, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Precious PS Examinations" };

const TERM = ["", "First Term", "Second Term", "Third Term"];
const MEDAL = ["", "bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950", "bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900", "bg-gradient-to-br from-orange-300 to-orange-600 text-orange-950"];
const PLACE = ["", "1st", "2nd", "3rd"];

function Podium({ list, note }: { list: Ranked[]; note?: (r: Ranked) => string }) {
  const top = list.filter((r) => r.position <= 3);
  if (!top.length) return <p className="text-sm text-muted">No one has sat this paper yet.</p>;
  return (
    <ol className="space-y-1.5">
      {top.map((r) => (
        <li key={r.userId} className="flex items-center gap-2.5">
          <span className={cx("grid size-8 shrink-0 place-items-center rounded-full text-xs font-extrabold shadow-sm", MEDAL[r.position])}>{PLACE[r.position]}</span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold text-navy-800">{r.name}</span>
            <span className="block text-xs text-muted">{r.studentNumber} · {r.percentage}%{note ? ` · ${note(r)}` : ""}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export default async function FodanExamsPage({ searchParams }: PageProps<"/admin/preciousps-exams">) {
  const s = await requireStaffPage("results.view");
  const sp = await searchParams;
  const sessions = await fodanSessions(s.user.schoolId);
  const session = typeof sp.session === "string" && sessions.includes(sp.session) ? sp.session : sessions[0];
  const { classes } = await fodanRankings(s.user.schoolId, session);
  const cls = typeof sp.class === "string" ? sp.class : "";
  const shown = cls ? classes.filter((c) => c.classId === cls) : classes;
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Assessment"
        title="Precious PS Examinations"
        description="A revision paper for every class (Basic 1 to SS 3) each term, drawn evenly from every subject the class offers. Each learner's first attempt in the session counts for the class places. Sizes are set in Settings → Examination; each paper can be opened and edited in Examinations."
        actions={
          <>
            {can(s.actor, "exams.publish") && <FodanSetupButton />}
            {can(s.actor, "results.export") && <a href={`/api/v1/admin/export/scorebook?session=${encodeURIComponent(session)}`} className={buttonClass("secondary", "sm")}><Download className="size-4" aria-hidden /> Score book (Excel)</a>}
          </>
        }
      />
      <form className="flex flex-wrap items-end gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
        <label className="text-sm font-semibold text-navy-800">Session
          <select name="session" defaultValue={session} className="mt-1 block rounded-xl border border-line px-3 py-2 text-sm">{sessions.map((x) => <option key={x}>{x}</option>)}</select>
        </label>
        <label className="text-sm font-semibold text-navy-800">Class
          <select name="class" defaultValue={cls} className="mt-1 block rounded-xl border border-line px-3 py-2 text-sm"><option value="">All classes</option>{classes.map((c) => <option key={c.classId} value={c.classId}>{c.className}</option>)}</select>
        </label>
        <button className={buttonClass("primary", "sm")}>Show</button>
        <p className="text-xs text-muted">The score book holds every registered learner, every examination score, and the places for the chosen session.</p>
      </form>

      {shown.length ? (
        shown.map((c) => (
          <Card key={c.classId} className="overflow-hidden">
            <div className="flex items-center gap-3 bg-gradient-to-r from-navy-800 to-royal-700 px-5 py-3 text-white">
              <Trophy className="size-5 text-gold-400" aria-hidden />
              <h2 className="text-lg font-extrabold">{c.className}</h2>
              <span className="ml-auto text-xs text-white/75">Session {session}</span>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-4">
              {c.terms.map((t) => (
                <div key={t.examId} className="rounded-xl border border-line p-4">
                  <p className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-gold-600"><span>{TERM[t.term] || t.title}</span><Link href={`/admin/examinations/${t.examId}`} className="normal-case text-royal-600 hover:underline">Open paper</Link></p>
                  <Podium list={t.ranking} />
                  <p className="mt-2 text-xs text-muted">{t.ranking.length} learner{t.ranking.length === 1 ? "" : "s"} sat it.</p>
                </div>
              ))}
              <div className="rounded-xl border-2 border-gold-400 bg-gold-50/40 p-4">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-gold-600"><Medal className="size-4" aria-hidden /> Overall (three terms)</p>
                <Podium list={c.overall} note={(r) => `${(r as Ranked & { terms: number }).terms}/3 terms`} />
              </div>
            </div>
            {c.overall.length > 3 && (
              <details className="border-t border-line">
                <summary className="cursor-pointer px-5 py-3 text-sm font-semibold text-royal-600">Full class order ({c.overall.length})</summary>
                <Table>
                  <thead><tr><Th>Place</Th><Th>Learner</Th><Th>Student ID</Th><Th>Overall %</Th><Th>Terms sat</Th></tr></thead>
                  <tbody>{c.overall.map((r) => <tr key={r.userId}><Td>{r.position}</Td><Td>{r.name}</Td><Td>{r.studentNumber}</Td><Td>{r.percentage}</Td><Td>{r.terms}</Td></tr>)}</tbody>
                </Table>
              </details>
            )}
          </Card>
        ))
      ) : (
        <Card><EmptyState icon={<Trophy className="size-6" />} title="No Precious PS Examinations yet" description="Press “Set up / refresh” to create a paper for every class and term." /></Card>
      )}
    </div>
  );
}
