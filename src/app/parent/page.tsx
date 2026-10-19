import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Users } from "lucide-react";
import { dailyBites, lagosDay } from "@/server/services/daily";
import { holidayCalendar } from "@/server/services/holiday";
import { DailyBites, HolidayBanner } from "@/components/daily-bites";
import { requireParentPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { fmtLagos } from "@/server/services/access";
import { listChildren, listParentRequests } from "@/server/services/guardians";
import { AddChildForm } from "@/components/parent/add-child";
import { PromoCarousel } from "@/components/parent/promo-carousel";
import { getContent } from "@/server/services/content";
import { Alert, Badge, buttonClass, Card, CardHeader, EmptyState} from "@/components/ui/primitives";

export const metadata: Metadata = { title: "My Children" };

export default async function ParentHome({ searchParams }: PageProps<"/parent">) {
  const s = await requireParentPage();
  const sp = await searchParams;
  const [children, cfg, requests, promo, bites, holiday] = await Promise.all([listChildren(s.user.id), getSetting(s.user.schoolId, "parents"), listParentRequests(s.user.id), getContent(s.user.schoolId, "parent-promo"), dailyBites(s.user.schoolId, lagosDay()).catch(() => []), holidayCalendar(s.user.schoolId).catch(() => null)]);
  const STATUS: Record<string, { label: string; tone: "amber" | "red" | "neutral"; text: string }> = {
    PENDING: { label: "Pending", tone: "amber", text: "Your request has been sent. It must be confirmed before academic information becomes available." },
    REJECTED: { label: "Request rejected", tone: "red", text: "The student did not accept this parent connection request." },
    REVOKED: { label: "No longer active", tone: "neutral", text: "This parent–child connection is no longer active." },
    EXPIRED: { label: "Expired", tone: "neutral", text: "This request was not answered in time. You can send it again." },
  };
  return (
    <div className="space-y-6">
      {promo.enabled && <PromoCarousel slides={promo.slides.map((x) => ({ ...x }))} seconds={Number(promo.seconds) || 6} />}
      <section className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-card sm:gap-6 sm:p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo-mark-128.png" alt="School crest" width={128} height={128} loading="lazy" decoding="async" className="h-28 w-20 shrink-0 rounded-2xl object-cover object-top ring-2 ring-gold-400 sm:h-36 sm:w-24" />
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Parent / guardian</p>
          <h1 className="text-2xl font-extrabold tracking-tight text-navy-800 sm:text-3xl">Welcome, {s.user.firstName}</h1>
          <p className="mt-1 text-sm leading-relaxed text-muted">{cfg.welcome}</p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
            <Link href="/parent/learning" className="text-royal-600 hover:underline">Learning Hub</Link>
            <Link href="/parent/activities" className="text-royal-600 hover:underline">Family Activities</Link>
            <Link href="/parent/experts" className="text-royal-600 hover:underline">Meet an Expert</Link>
          </p>
        </div>
      </section>
      {holiday && <HolidayBanner label={holiday.label} active={holiday.active} daysToGo={holiday.daysToGo} daysLeft={holiday.daysLeft} href="/parent/holiday" />}
      <Link prefetch={false} href="/parent/games" className="pop flex items-center gap-4 rounded-2xl bg-gradient-to-r from-navy-800 via-royal-700 to-royal-600 p-4 text-white shadow-card transition hover:shadow-lift">
        <Brain className="float size-10 shrink-0 text-gold-400" aria-hidden />
        <span className="min-w-0">
          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-gold-400">New for parents</span>
          <span className="block text-lg font-extrabold">General Knowledge Exam: 50 fresh questions every time →</span>
          <span className="block text-sm text-white/80">Nigeria, Africa, the world, health, money, history and more. Free, with explanations.</span>
        </span>
      </Link>
      <DailyBites bites={bites} />
      {sp.welcome && <Alert tone="success">Your account is ready.{" "}If you entered a Student ID, a link request has been sent for your child to accept.</Alert>}
      {children.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {children.map((c) => (
            <Card key={c.id} className="flex flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="text-lg font-extrabold text-navy-800">{c.firstName} {c.lastName}</h2>
                  <p className="text-sm text-muted">{[c.className, c.department, c.studentNumber].filter(Boolean).join(" · ")}</p>
                </div>
                {c.access.status === "ACTIVE" ? <Badge tone={c.access.premium ? "gold" : "green"}>{c.access.premium ? "Premium" : "Active"}</Badge> : <Badge tone="amber">No active access</Badge>}
              </div>
              <dl className="mt-4 space-y-1 text-sm">
                <div className="flex justify-between gap-3"><dt className="text-muted">Last sign-in</dt><dd className="font-semibold text-navy-800">{c.lastLoginAt ? fmtLagos(c.lastLoginAt) : "Not yet"}</dd></div>
                <div className="flex justify-between gap-3"><dt className="text-muted">Access until</dt><dd className="font-semibold text-navy-800">{c.access.status === "ACTIVE" && c.access.expiresAt ? fmtLagos(new Date(c.access.expiresAt)) : "—"}</dd></div>
              </dl>
              <div className="mt-auto pt-4">
                <Link href={`/parent/child/${c.id}`} className={buttonClass("primary", "sm")}>
                  See activity <ArrowRight className="size-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <EmptyState icon={<Users className="size-6" />} title="No child added yet" description="Send a link request below with your child's Student ID or their activated access code. If you have more than one child, send a request for each one." />
        </Card>
      )}
      {requests.length > 0 && (
        <Card>
          <CardHeader title="Link requests" description="Nothing about a student is shown here until the connection is confirmed." />
          <ul className="divide-y divide-line">
            {requests.map((r) => (
              <li key={r.id} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-navy-800">Student ID {r.studentNumber} <Badge tone={STATUS[r.status]?.tone ?? "neutral"}>{STATUS[r.status]?.label ?? r.status}</Badge></p>
                  <p className="text-sm text-muted">{r.status === "PENDING" ? (r.childAccepted ? "Your child has accepted. Waiting for the school to verify." : cfg.linkPolicy === "SCHOOL" ? "Waiting for the school to verify." : "Awaiting child confirmation.") : STATUS[r.status]?.text}</p>
                </div>
                <p className="text-xs text-muted">Sent {fmtLagos(r.requestedAt)}</p>
              </li>
            ))}
          </ul>
        </Card>
      )}
      <Card id="add-child">
        <CardHeader title="Add a child" description="Send a link request with your child's Student ID, or with the access code your child has already activated. Your child sees the request after signing in and must accept it. A new, unused access code will not work here: your child first registers and activates it on their own account." />
        <div className="p-5"><AddChildForm /></div>
      </Card>
    </div>
  );
}
