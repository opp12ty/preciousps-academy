import type { Metadata } from "next";
import Link from "next/link";
import { PartyPopper, Stethoscope } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { fmtLagos } from "@/server/services/access";
import { EVENT_KINDS, EXPERT_PROFESSIONS, eventRsvps, listEventsAdmin, listExpertsAdmin } from "@/server/services/family";
import { EventForm, ExpertForm } from "@/components/admin/family-forms";
import { spRecord } from "@/components/admin/filters";
import { Badge, Card, CardHeader, cx, EmptyState, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Family Activities & Experts" };

const kinds = Object.entries(EVENT_KINDS).map(([value, label]) => ({ value, label }));
const professions = Object.entries(EXPERT_PROFESSIONS).map(([value, label]) => ({ value, label }));

export default async function FamilyAdmin({ searchParams }: PageProps<"/admin/family">) {
  const s = await requireStaffPage("parents.manage");
  const sp = spRecord(await searchParams);
  const tab = sp.tab === "experts" ? "experts" : "events";
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="People" title="Family activities & experts" description="Arrange picnics, cinema days, holiday trips, games and weekend hangouts for families, and keep the list of professionals parents can contact under “Meet an Expert”." />
      <nav aria-label="Sections" className="flex gap-2">
        {[["events", "Family activities"], ["experts", "Meet an Expert"]].map(([k, l]) => (
          <Link key={k} href={`/admin/family?tab=${k}`} className={cx("rounded-xl px-3.5 py-2 text-sm font-semibold", tab === k ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>{l}</Link>
        ))}
      </nav>
      {tab === "events" ? <Events schoolId={s.user.schoolId} open={sp.open} /> : <Experts schoolId={s.user.schoolId} />}
    </div>
  );
}

async function Events({ schoolId, open }: { schoolId: string; open?: string }) {
  const list = await listEventsAdmin(schoolId);
  const bookings = open && /^[0-9a-f-]{36}$/i.test(open) ? await eventRsvps(schoolId, open) : [];
  return (
    <>
      <Card>
        <CardHeader title="Add an activity" description="Save as a draft first; parents see it only when it is published." />
        <div className="p-5"><EventForm kinds={kinds} /></div>
      </Card>
      {list.length ? (
        list.map(({ e, booked, families }) => (
          <Card key={e.id}>
            <CardHeader title={e.title} description={`${EVENT_KINDS[e.kind as keyof typeof EVENT_KINDS] ?? "Activity"}${e.startsAt ? ` · ${fmtLagos(e.startsAt)}` : ""}${e.venue ? ` · ${e.venue}` : ""}`} action={<span className="flex flex-wrap items-center gap-2"><StatusBadge status={e.status} /><Badge tone="blue">{booked} booked{e.capacity ? ` of ${e.capacity}` : ""} · {families} families</Badge></span>} />
            <details className="px-5 py-4">
              <summary className="cursor-pointer text-sm font-semibold text-royal-600">Edit this activity</summary>
              <div className="mt-4"><EventForm kinds={kinds} event={{ id: e.id, kind: e.kind, title: e.title, description: e.description, venue: e.venue, startsAt: e.startsAt?.toISOString() ?? null, endsAt: e.endsAt?.toISOString() ?? null, cost: e.cost, contact: e.contact, capacity: e.capacity, status: e.status }} /></div>
            </details>
            <div className="border-t border-line px-5 py-3">
              {open === e.id ? (
                bookings.length ? (
                  <Table>
                    <thead><tr><Th>Parent</Th><Th>Contact</Th><Th>Adults</Th><Th>Children</Th><Th>Note</Th><Th>Booked</Th></tr></thead>
                    <tbody>{bookings.map(({ r, name, email, phone }) => <tr key={r.parentUserId}><Td className="font-semibold text-navy-800">{name}</Td><Td className="text-xs">{email}<br />{phone}</Td><Td>{r.adults}</Td><Td>{r.children}</Td><Td className="text-xs">{r.note ?? "—"}</Td><Td className="whitespace-nowrap text-xs">{fmtLagos(r.createdAt)}</Td></tr>)}</tbody>
                  </Table>
                ) : (
                  <p className="text-sm text-muted">No booking yet.</p>
                )
              ) : (
                <Link href={`/admin/family?tab=events&open=${e.id}`} className="text-sm font-semibold text-royal-600 hover:underline">Show the {families} booking(s)</Link>
              )}
            </div>
          </Card>
        ))
      ) : (
        <Card><EmptyState icon={<PartyPopper className="size-6" />} title="No activity yet" description="Add the first picnic, cinema day or games day above." /></Card>
      )}
    </>
  );
}

async function Experts({ schoolId }: { schoolId: string }) {
  const list = await listExpertsAdmin(schoolId);
  return (
    <>
      <Card>
        <CardHeader title="Add an expert" description="Only list professionals who have agreed to be contacted by parents. A phone number or an e-mail address is required." />
        <div className="p-5"><ExpertForm professions={professions} /></div>
      </Card>
      {list.length ? (
        list.map((e) => (
          <Card key={e.id}>
            <CardHeader title={e.name} description={[EXPERT_PROFESSIONS[e.profession as keyof typeof EXPERT_PROFESSIONS], e.audience === "BOTH" ? "Parents and students" : e.audience === "STUDENT" ? "Students" : "Parents", e.title, e.phone, e.email].filter(Boolean).join(" · ")} action={<StatusBadge status={e.status} />} />
            <details className="px-5 py-4">
              <summary className="cursor-pointer text-sm font-semibold text-royal-600">Edit</summary>
              <div className="mt-4"><ExpertForm professions={professions} expert={{ id: e.id, profession: e.profession, name: e.name, title: e.title, topics: e.topics, bio: e.bio, phone: e.phone, email: e.email, availability: e.availability, audience: e.audience, website: e.website, testimonials: e.testimonials, sortOrder: e.sortOrder, status: e.status }} /></div>
            </details>
          </Card>
        ))
      ) : (
        <Card><EmptyState icon={<Stethoscope className="size-6" />} title="No expert listed yet" description="Add counsellors, doctors, lawyers and other professionals above." /></Card>
      )}
    </>
  );
}
