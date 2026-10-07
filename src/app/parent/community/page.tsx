import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck } from "lucide-react";
import { requireParentPage } from "@/server/http";
import { listParentRooms } from "@/server/services/community";
import { Alert, Badge, Card, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Parent Community" };

export default async function ParentCommunity() {
  const s = await requireParentPage();
  const { state, rooms } = await listParentRooms(s.actor);
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="For parents" title="Parent community" description="An educational community for parents and guardians only. Students cannot enter, and moderators read every message." />
      {!state.canUse && <Alert tone="warning">{state.blocked}</Alert>}
      <Card className="border-l-4 border-l-gold-500 p-4 text-sm text-muted">
        <p className="flex items-center gap-2 font-bold text-navy-800"><ShieldCheck className="size-4 text-success-600" aria-hidden /> Community rules</p>
        <p className="mt-1">{state.rules}</p>
        <p className="mt-2"><Link href="/contact" className="font-semibold text-royal-600 hover:underline">Contact School Administration</Link></p>
      </Card>
      {rooms.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {rooms.map((r) => (
            <Link key={r.id} href={state.canUse ? `/parent/community/${r.id}` : "/parent/community"} className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
              <div className="flex items-start justify-between gap-2"><h2 className="text-base font-bold text-navy-800">{r.name}</h2>{r.isLocked && <Badge tone="amber"><Lock className="size-3" /> Notices only</Badge>}</div>
              {r.description && <p className="mt-1 text-sm text-muted">{r.description}</p>}
              <p className="mt-auto flex items-center justify-between pt-4 text-xs text-muted"><span>{r.today} message{r.today === 1 ? "" : "s"} in the last 24 hours</span><span className="inline-flex items-center gap-1 font-bold text-royal-600">Enter <ArrowRight className="size-3.5" aria-hidden /></span></p>
            </Link>
          ))}
        </div>
      ) : (
        <Card><EmptyState title="No rooms yet" description="The school has not opened the parent community yet." /></Card>
      )}
    </div>
  );
}
