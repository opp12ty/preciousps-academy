import type { Metadata } from "next";
import Link from "next/link";
import { Trophy } from "lucide-react";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { fmtLagos } from "@/server/services/access";
import { listAwards, loyaltyLeaders, termWindows } from "@/server/services/records";
import { AwardPeriodControls, RewardInput } from "@/components/admin/reward-controls";
import { spRecord } from "@/components/admin/filters";
import { Alert, Badge, Card, CardHeader, cx, EmptyState, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Rewards & Awards" };
export const maxDuration = 60;

export default async function RewardsAdmin({ searchParams }: PageProps<"/admin/rewards">) {
  const s = await requireStaffPage("results.view");
  const sp = spRecord(await searchParams);
  const cal = await termWindows(s.user.schoolId);
  const period = sp.period ?? cal.currentTerm;
  const term = period === "session" ? null : (cal.terms.find((t) => t.name === period)?.name ?? cal.currentTerm);
  const label = term ? `${term}, ${cal.session}` : `the ${cal.session} session`;
  const [list, leaders] = await Promise.all([listAwards(s.user.schoolId, { term }), loyaltyLeaders(s.user.schoolId, null, 20)]);
  const published = list.some((x) => x.a.publishedAt);
  const manage = can(s.actor, "results.manage");
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Insight" title="Rewards & awards" description="Best student in each class and in each subject, every term and for the session. Winners are worked out from released results; you add the reward and announce them." />
      <nav aria-label="Period" className="no-scrollbar flex gap-2 overflow-x-auto">
        {[...cal.terms.map((t) => [t.name, t.name] as const), ["session", "Whole session"] as const].map(([k, l]) => (
          <Link key={k} href={`/admin/rewards?period=${encodeURIComponent(k)}`} className={cx("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ring-1", (term ?? "session") === k ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line hover:bg-surface")}>{l}</Link>
        ))}
      </nav>
      <Card>
        <CardHeader title={`Winners for ${label}`} description={published ? `Announced ${fmtLagos(list.find((x) => x.a.publishedAt)!.a.publishedAt!)}. Rewards can still be edited.` : "Not announced yet. Students cannot see this list."} action={manage && <AwardPeriodControls term={term} label={label} published={published} any={list.length > 0} />} />
        {list.length ? (
          <Table>
            <thead><tr><Th>Class</Th><Th>Award</Th><Th>Winner</Th><Th>Average</Th><Th>Papers</Th><Th>Reward</Th></tr></thead>
            <tbody>
              {list.map(({ a, name, studentNumber, className, subject }) => (
                <tr key={a.id} className="align-middle">
                  <Td className="font-semibold text-navy-800">{className}</Td>
                  <Td>{a.scope === "CLASS" ? <Badge tone="gold">Best student</Badge> : <span className="text-sm">Best in {subject}</span>}</Td>
                  <Td><Link href={`/admin/students/${a.userId}`} className="font-semibold text-royal-600 hover:underline">{name}</Link><p className="text-xs text-muted">{studentNumber}</p></Td>
                  <Td className="font-bold tabular-nums">{a.average}%</Td>
                  <Td className="tabular-nums">{a.papers}</Td>
                  <Td>{manage ? <RewardInput id={a.id} reward={a.reward} /> : (a.reward ?? "—")}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<Trophy className="size-6" />} title="No winners worked out yet" description="Choose “Work out the winners”. Only released results inside this period are counted, and school accounts are left out." />
        )}
      </Card>
      <Alert tone="info">
        <strong>How winners are chosen.</strong> For each class, every student&apos;s average is taken subject by subject from released examinations and tests in the period, then averaged across subjects. The highest wins; students level on the top score share the award. Term dates come from Academics → Terms; where no dates are entered, the usual calendar is used (September–December, January–April, May–August).
      </Alert>
      <Card>
        <CardHeader title="Loyalty leaders" description="The twenty students with the most points across the school. Points are earned automatically for finished tests, completed lessons, submitted assignments and awards." />
        {leaders.length ? (
          <Table>
            <thead><tr><Th>#</Th><Th>Student</Th><Th>Class</Th><Th>Points</Th></tr></thead>
            <tbody>{leaders.map((l, i) => <tr key={l.userId}><Td>{i + 1}</Td><Td><Link href={`/admin/students/${l.userId}`} className="font-semibold text-royal-600 hover:underline">{l.name}</Link></Td><Td>{l.className ?? "—"}</Td><Td className="font-bold tabular-nums">{l.points.toLocaleString()}</Td></tr>)}</tbody>
          </Table>
        ) : (
          <p className="p-5 text-sm text-muted">Points appear after students open their Rewards page.</p>
        )}
      </Card>
    </div>
  );
}
