import type { Metadata } from "next";
import Link from "next/link";
import { Award, Crown, Medal, Sparkles, Trophy } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { studentScope } from "@/server/services/scope";
import { LOYALTY_LEVELS, LOYALTY_RULES, listAwards, loyaltyLeaders, syncLoyalty, termWindows } from "@/server/services/records";
import { Ring } from "@/components/charts";
import { Badge, buttonClass, Card, CardHeader, cx, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Rewards & Loyalty" };

export default async function RewardsPage({ searchParams }: PageProps<"/student/rewards">) {
  const s = await requireStudentPage();
  const sp = await searchParams;
  const [scope, cal] = await Promise.all([studentScope(s.user.id), termWindows(s.user.schoolId)]);
  const period = typeof sp.period === "string" ? sp.period : cal.currentTerm;
  const term = period === "session" ? null : (cal.terms.find((t) => t.name === period)?.name ?? cal.currentTerm);
  const [loyalty, mine, hall, leaders] = await Promise.all([
    syncLoyalty(s.user.schoolId, s.user.id),
    listAwards(s.user.schoolId, { userId: s.user.id, publishedOnly: true }),
    scope.classId ? listAwards(s.user.schoolId, { term, publishedOnly: true, classId: scope.classId }) : Promise.resolve([]),
    loyaltyLeaders(s.user.schoolId, scope.classId, 10),
  ]);
  const span = loyalty.next ? loyalty.next.min - loyalty.level.min : 1;
  const pct = loyalty.next ? Math.round(((loyalty.total - loyalty.level.min) / span) * 100) : 100;
  const best = hall.filter((h) => h.a.scope === "CLASS");
  const bySubject = hall.filter((h) => h.a.scope === "SUBJECT");
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Records" title="Rewards & loyalty" description="The best students of your class each term and for the session, and the points you earn for steady work." />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Card className="overflow-hidden">
          <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-royal-700 p-6 text-white">
            <Sparkles className="absolute right-5 top-5 size-16 text-white/10" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Your loyalty level</p>
            <div className="mt-3 flex flex-wrap items-center gap-6">
              <div className="rounded-2xl bg-white p-2"><Ring value={pct} label={loyalty.next ? `to ${loyalty.next.name}` : "Top level"} colour={loyalty.level.colour} size={104} /></div>
              <div>
                <p className="font-display text-4xl font-extrabold">{loyalty.level.name}</p>
                <p className="mt-1 text-lg font-bold text-gold-400">{loyalty.total.toLocaleString()} points</p>
                <p className="mt-1 text-sm text-white/75">{loyalty.next ? `${(loyalty.next.min - loyalty.total).toLocaleString()} more points to reach ${loyalty.next.name}.` : "You have reached the highest level. Well done!"}</p>
              </div>
            </div>
          </div>
          <ol className="grid grid-cols-3 gap-px bg-line sm:grid-cols-6">
            {LOYALTY_LEVELS.map((l) => (
              <li key={l.name} className={cx("bg-white px-2 py-3 text-center", loyalty.total >= l.min ? "" : "opacity-45")}>
                <Medal className="mx-auto size-5" style={{ color: l.colour }} aria-hidden />
                <p className="mt-1 text-xs font-bold text-navy-800">{l.name}</p>
                <p className="text-[0.68rem] text-muted">{l.min.toLocaleString()}+</p>
              </li>
            ))}
          </ol>
        </Card>
        <Card>
          <CardHeader title="How you earn points" description="Points are added by themselves from the work you do." />
          <ul className="divide-y divide-line">
            {LOYALTY_RULES.map((r) => (
              <li key={r.what} className="flex items-center gap-3 px-5 py-2.5 text-sm"><span className="grid h-8 min-w-12 place-items-center rounded-lg bg-gold-100 px-2 text-sm font-extrabold text-gold-600">+{r.points}</span>{r.what}</li>
            ))}
          </ul>
          {loyalty.recent.length > 0 && <p className="border-t border-line px-5 py-3 text-xs text-muted">Latest: {loyalty.recent.slice(0, 3).map((r) => `+${r.points} ${r.reason.toLowerCase()}`).join(" · ")}</p>}
        </Card>
      </div>

      {mine.length > 0 && (
        <Card>
          <CardHeader title="Your awards" description="Every award you have won." />
          <ul className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {mine.map(({ a, subject, className }) => (
              <li key={a.id} className="rounded-2xl border border-gold-400/50 bg-gold-50 p-4">
                <Trophy className="size-6 text-gold-600" aria-hidden />
                <p className="mt-2 font-extrabold text-navy-800">{a.scope === "CLASS" ? `Best student, ${className}` : `Best in ${subject}`}</p>
                <p className="text-xs text-muted">{a.term ?? "Whole session"} · {a.session} · {a.average}%</p>
                {a.reward && <p className="mt-2 text-sm font-semibold text-gold-600">Reward: {a.reward}</p>}
              </li>
            ))}
          </ul>
        </Card>
      )}

      <Card>
        <CardHeader title="Hall of fame: your class" description="Announced by the school at the end of each term and of the session." />
        <nav aria-label="Period" className="no-scrollbar flex gap-2 overflow-x-auto px-5 pt-4">
          {[...cal.terms.map((t) => [t.name, t.name] as const), ["session", "Whole session"] as const].map(([k, l]) => (
            <Link key={k} href={`/student/rewards?period=${encodeURIComponent(k)}`} className={cx("whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold ring-1", (term ?? "session") === k ? "bg-navy-800 text-white ring-navy-800" : "bg-white text-navy-800 ring-line hover:bg-surface")}>{l}</Link>
          ))}
        </nav>
        {hall.length ? (
          <div className="space-y-5 p-5">
            {best.length > 0 && (
              <div className="rounded-2xl bg-gradient-to-r from-gold-100 via-gold-50 to-white p-5">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-600"><Crown className="size-4" aria-hidden /> Best student of the class</p>
                {best.map(({ a, name }) => (
                  <p key={a.id} className="mt-2 flex flex-wrap items-baseline gap-x-3 text-2xl font-extrabold text-navy-800">{name}<span className="text-base font-bold text-gold-600">{a.average}%</span>{a.userId === s.user.id && <Badge tone="gold">That is you!</Badge>}{a.reward && <span className="text-sm font-semibold text-muted">Reward: {a.reward}</span>}</p>
                ))}
              </div>
            )}
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {bySubject.map(({ a, name, subject }) => (
                <li key={a.id} className={cx("rounded-xl border p-3.5", a.userId === s.user.id ? "border-gold-400 bg-gold-50" : "border-line bg-white")}>
                  <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-royal-600"><Award className="size-3.5" aria-hidden /> {subject}</p>
                  <p className="mt-1 font-bold text-navy-800">{name}</p>
                  <p className="text-xs text-muted">{a.average}% average{a.reward ? ` · ${a.reward}` : ""}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <EmptyState icon={<Trophy className="size-6" />} title="Not announced yet" description="The winners for this period appear here when the school announces them." />
        )}
      </Card>

      <Card>
        <CardHeader title="Loyalty leaders in your class" description="The ten classmates with the most points." action={<Link href="/student/report-card" className={buttonClass("secondary", "sm")}>My report card</Link>} />
        {leaders.length ? (
          <ol className="divide-y divide-line">
            {leaders.map((l, i) => (
              <li key={l.userId} className={cx("flex items-center gap-3 px-5 py-2.5 text-sm", l.userId === s.user.id && "bg-royal-50")}>
                <span className={cx("grid size-8 shrink-0 place-items-center rounded-full text-xs font-extrabold", i === 0 ? "bg-gold-400 text-navy-900" : i < 3 ? "bg-navy-800 text-white" : "bg-surface text-navy-800")}>{i + 1}</span>
                <span className="flex-1 font-semibold text-navy-800">{l.name}{l.userId === s.user.id ? " (you)" : ""}</span>
                <span className="font-bold tabular-nums text-gold-600">{l.points.toLocaleString()}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="p-5 text-sm text-muted">No points yet. Finish a test or a lesson to start.</p>
        )}
      </Card>
    </div>
  );
}
