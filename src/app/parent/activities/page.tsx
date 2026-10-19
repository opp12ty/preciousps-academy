import type { Metadata } from "next";
import { CalendarDays, MapPin, PartyPopper, Phone, Ticket, Users } from "lucide-react";
import { requireParentPage } from "@/server/http";
import { fmtLagos } from "@/server/services/access";
import { EVENT_KINDS, listEventsForParent } from "@/server/services/family";
import { RichText } from "@/components/rich-text";
import { RsvpForm } from "@/components/parent/rsvp-form";
import { Badge, Card, EmptyState, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Family Activities" };

const COLOUR: Record<string, string> = { PICNIC: "#047857", CINEMA: "#7c3aed", HOLIDAY: "#0ea5e9", GAMES: "#c2410c", HANGOUT: "#be185d", WORKSHOP: "#1d4ed8", OTHER: "#a8841e" };

export default async function ActivitiesPage() {
  const s = await requireParentPage();
  const events = await listEventsForParent(s.actor);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Family" title="Family activities" description="Picnics, cinema days, holiday trips, games and weekend hangouts arranged by the school to help families spend happy time together. Book your places here." />
      {events.length ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {events.map(({ e, booked, mine }) => {
            const left = e.capacity ? Math.max(0, e.capacity - booked) : null;
            return (
              <Card key={e.id} className="flex flex-col overflow-hidden">
                <div className="relative px-5 py-4 text-white" style={{ background: `linear-gradient(120deg, ${COLOUR[e.kind] ?? COLOUR.OTHER}, #0b1f4b)` }}>
                  <PartyPopper className="absolute right-4 top-3 size-12 text-white/15" aria-hidden />
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/80">{EVENT_KINDS[e.kind as keyof typeof EVENT_KINDS] ?? "Activity"}</p>
                  <h2 className="mt-0.5 text-xl font-extrabold">{e.title}</h2>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <dl className="grid gap-2 text-sm sm:grid-cols-2">
                    {e.startsAt && <div className="flex gap-2"><CalendarDays className="mt-0.5 size-4 shrink-0 text-royal-600" aria-hidden /><div><dt className="sr-only">When</dt><dd className="font-semibold text-navy-800">{fmtLagos(e.startsAt)}{e.endsAt ? ` to ${fmtLagos(e.endsAt)}` : ""}</dd></div></div>}
                    {e.venue && <div className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-royal-600" aria-hidden /><div><dt className="sr-only">Where</dt><dd className="font-semibold text-navy-800">{e.venue}</dd></div></div>}
                    {e.cost && <div className="flex gap-2"><Ticket className="mt-0.5 size-4 shrink-0 text-royal-600" aria-hidden /><div><dt className="sr-only">Cost</dt><dd>{e.cost}</dd></div></div>}
                    {e.contact && <div className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0 text-royal-600" aria-hidden /><div><dt className="sr-only">Contact</dt><dd>{e.contact}</dd></div></div>}
                    <div className="flex gap-2"><Users className="mt-0.5 size-4 shrink-0 text-royal-600" aria-hidden /><div><dt className="sr-only">Places</dt><dd>{left === null ? `${booked} booked so far` : `${left} of ${e.capacity} places left`}</dd></div></div>
                  </dl>
                  {e.description && <RichText text={e.description} className="text-sm" />}
                  <div className="mt-auto border-t border-line pt-4">
                    {mine && <p className="mb-2"><Badge tone="green">You booked {mine.adults} adult(s) and {mine.children} child(ren)</Badge></p>}
                    <RsvpForm eventId={e.id} mine={mine ? { adults: mine.adults, children: mine.children, note: mine.note } : null} full={left === 0} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card><EmptyState icon={<PartyPopper className="size-6" />} title="No activity is open at the moment" description="When the school arranges a picnic, cinema day, holiday trip or games day, it appears here and you are notified." /></Card>
      )}
    </div>
  );
}
