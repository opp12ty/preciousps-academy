import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Lock, MessagesSquare, ShieldCheck } from "lucide-react";
import { requireStudentPage } from "@/server/http";
import { getAccessState } from "@/server/services/access";
import { FORUM_TOPICS, forumState, listStudentRooms } from "@/server/services/forum";
import { Alert, Badge, Card, cx, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Student Forum" };

export default async function ForumPage() {
  const s = await requireStudentPage();
  const [access, state, rooms] = await Promise.all([getAccessState(s.user.id), forumState(s.actor), listStudentRooms(s.actor)]);
  const active = access.status === "ACTIVE";
  const mins = Math.floor(state.remainingSeconds / 60);
  return (
    <>
      <PageHeader eyebrow="Community" title="Student forum" description="Discuss admissions, examinations and subjects with students in your section, and teach each other." />
      {!active && <Alert tone="warning" className="mb-5">{access.message}</Alert>}
      {active && state.blocked && <Alert tone={state.suspended ? "danger" : "warning"} className="mb-5">{state.blocked}</Alert>}
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <Card className="flex items-center gap-3 p-4">
          <Clock className="size-6 shrink-0 text-royal-600" aria-hidden />
          <div>
            <p className="text-xs font-semibold text-muted">Open hours</p>
            <p className="font-bold text-navy-800">{state.hours}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-4">
          <MessagesSquare className="size-6 shrink-0 text-royal-600" aria-hidden />
          <div>
            <p className="text-xs font-semibold text-muted">Your time left today</p>
            <p className="font-bold text-navy-800">{state.canUse ? (mins >= 60 ? `${Math.floor(mins / 60)}h ${mins % 60}m` : `${mins} minutes`) : "None"} <span className="text-xs font-medium text-muted">of {state.dailyMinutes} min</span></p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-4">
          <ShieldCheck className="size-6 shrink-0 text-success-600" aria-hidden />
          <div>
            <p className="text-xs font-semibold text-muted">Moderated</p>
            <p className="text-sm font-bold text-navy-800">Staff can read every message</p>
          </div>
        </Card>
      </div>
      <Card className="mb-5 border-l-4 border-l-gold-500 p-4 text-sm text-muted">
        <p className="font-bold text-navy-800">Forum rules</p>
        <p className="mt-1">{state.rules}</p>
      </Card>
      {rooms.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((r) => {
            const open = active && state.canUse;
            const body = (
              <>
                <div className="flex items-start justify-between gap-2">
                  <Badge tone="navy">{FORUM_TOPICS[r.topic] ?? r.topic}</Badge>
                  {r.isLocked ? <Badge tone="amber"><Lock className="size-3" /> Read only</Badge> : r.className ? <Badge>{r.className} only</Badge> : null}
                </div>
                <h3 className="mt-3 text-base font-bold text-navy-800">{r.name}</h3>
                {r.description && <p className="mt-1 line-clamp-3 text-sm text-muted">{r.description}</p>}
                <p className="mt-auto flex items-center justify-between pt-4 text-xs text-muted">
                  <span>{r.today} message{r.today === 1 ? "" : "s"} in the last 24 hours</span>
                  {open && <span className="inline-flex items-center gap-1 font-bold text-royal-600">Enter <ArrowRight className="size-3.5" aria-hidden /></span>}
                </p>
              </>
            );
            return open ? (
              <Link key={r.id} href={`/student/forum/${r.id}`} className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
                {body}
              </Link>
            ) : (
              <div key={r.id} className={cx("flex flex-col rounded-2xl border border-line bg-white p-5 opacity-70 shadow-card")}>{body}</div>
            );
          })}
        </div>
      ) : (
        <Card>
          <EmptyState icon={<MessagesSquare className="size-6" />} title="No rooms yet" description="Rooms appear here when the school opens them for your section." />
        </Card>
      )}
    </>
  );
}
