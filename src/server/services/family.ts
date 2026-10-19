import { and, asc, desc, eq, inArray, sql } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../db";
import { experts, familyEventRsvps, familyEvents, users } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { requireFeature, requireParentAccess } from "./access";
import { notifyUser } from "./notifications";

/**
 * Two parent services run by the school: family activities (picnic, cinema, holiday, games, weekend
 * hangouts) that parents can book a place on, and "Meet an Expert", a directory of professionals
 * with the topics they help with and how to reach them.
 */

export const EVENT_KINDS = { PICNIC: "Picnic", CINEMA: "Cinema", HOLIDAY: "Holiday trip", GAMES: "Games day", HANGOUT: "Weekend hangout", WORKSHOP: "Workshop", OTHER: "Other activity" } as const;
export const EXPERT_PROFESSIONS = { COUNSELLOR: "Counsellor", DOCTOR: "Doctor", LAWYER: "Lawyer", FINANCE: "Financial adviser", EDUCATION: "Education specialist", TECHNOLOGY: "Technology specialist", TRAVEL: "Travel & visa adviser", AGENCY: "Study-abroad / travel agency", OTHER: "Other professional" } as const;
export const EXPERT_AUDIENCES = { PARENT: "Parents only", STUDENT: "Students only", BOTH: "Parents and students" } as const;
const STATUS = ["DRAFT", "PUBLISHED", "ARCHIVED"] as const;

const eventSchema = z.object({
  kind: z.enum(Object.keys(EVENT_KINDS) as [keyof typeof EVENT_KINDS, ...(keyof typeof EVENT_KINDS)[]]),
  title: z.string().trim().min(3, "Give the activity a title.").max(120),
  description: z.string().trim().max(3000).default(""),
  venue: z.string().trim().max(200).optional(),
  startsAt: z.coerce.date().optional(),
  endsAt: z.coerce.date().optional(),
  cost: z.string().trim().max(120).optional(),
  contact: z.string().trim().max(160).optional(),
  capacity: z.number().int().min(1).max(100_000).optional(),
  status: z.enum(STATUS).default("DRAFT"),
});

const expertSchema = z.object({
  profession: z.enum(Object.keys(EXPERT_PROFESSIONS) as [keyof typeof EXPERT_PROFESSIONS, ...(keyof typeof EXPERT_PROFESSIONS)[]]),
  name: z.string().trim().min(3, "Enter the expert's name.").max(120),
  title: z.string().trim().max(160).optional(),
  topics: z.string().trim().max(1500).default(""),
  bio: z.string().trim().max(3000).default(""),
  phone: z.string().trim().max(40).optional(),
  email: z.string().trim().max(160).optional(),
  availability: z.string().trim().max(200).optional(),
  audience: z.enum(["PARENT", "STUDENT", "BOTH"]).default("PARENT"),
  website: z.string().trim().max(300).regex(/^https?:\/\/\S+$/i, "Enter the full web address, starting with https://").optional(),
  testimonials: z.string().trim().max(4000).default(""),
  sortOrder: z.number().int().min(0).max(9999).default(0),
  status: z.enum(STATUS).default("DRAFT"),
});

const parentOnly = async (actor: Actor) => {
  if (actor.userType !== "PARENT") throw new AppError("FORBIDDEN", "This area is for parents and guardians.");
  await requireParentAccess(actor.id);
};

/* ------------------------------------------------------------------ events */

export async function upsertEvent(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = eventSchema.parse(raw);
  if (d.startsAt && d.endsAt && d.endsAt <= d.startsAt) throw new AppError("VALIDATION", "The end must be after the start.");
  const db = getDb();
  const values = { ...d, venue: d.venue || null, cost: d.cost || null, contact: d.contact || null, startsAt: d.startsAt ?? null, endsAt: d.endsAt ?? null, capacity: d.capacity ?? null };
  if (id) {
    const [before] = await db.select({ status: familyEvents.status }).from(familyEvents).where(and(eq(familyEvents.id, id), eq(familyEvents.schoolId, actor.schoolId)));
    if (!before) throw new AppError("NOT_FOUND", "Activity not found.");
    await db.update(familyEvents).set(values).where(eq(familyEvents.id, id));
    await audit({ actor, action: "family.event_updated", entityType: "family_event", entityId: id, summary: d.title }, ctx);
    return id;
  }
  const [row] = await db.insert(familyEvents).values({ ...values, schoolId: actor.schoolId, createdBy: actor.id }).returning({ id: familyEvents.id });
  await audit({ actor, action: "family.event_created", entityType: "family_event", entityId: row.id, summary: d.title }, ctx);
  return row.id;
}

export async function deleteEvent(actor: Actor, id: string, ctx: ReqCtx) {
  const [row] = await getDb().delete(familyEvents).where(and(eq(familyEvents.id, id), eq(familyEvents.schoolId, actor.schoolId))).returning({ title: familyEvents.title });
  if (!row) throw new AppError("NOT_FOUND", "Activity not found.");
  await audit({ actor, action: "family.event_deleted", entityType: "family_event", entityId: id, summary: row.title }, ctx);
}

const booked = sql<number>`(SELECT coalesce(sum(r.adults + r.children), 0)::int FROM family_event_rsvps r WHERE r.event_id = ${familyEvents.id})`;

export async function listEventsAdmin(schoolId: string) {
  return getDb().select({ e: familyEvents, booked, families: sql<number>`(SELECT count(*)::int FROM family_event_rsvps r WHERE r.event_id = ${familyEvents.id})` }).from(familyEvents).where(eq(familyEvents.schoolId, schoolId)).orderBy(desc(familyEvents.startsAt), desc(familyEvents.createdAt)).limit(200);
}

export async function eventRsvps(schoolId: string, eventId: string) {
  return getDb()
    .select({ r: familyEventRsvps, name: sql<string>`${users.firstName} || ' ' || ${users.lastName}`, email: users.email, phone: users.phone })
    .from(familyEventRsvps)
    .innerJoin(users, eq(users.id, familyEventRsvps.parentUserId))
    .innerJoin(familyEvents, eq(familyEvents.id, familyEventRsvps.eventId))
    .where(and(eq(familyEventRsvps.eventId, eventId), eq(familyEvents.schoolId, schoolId)))
    .orderBy(asc(familyEventRsvps.createdAt));
}

/** Published activities that have not ended, soonest first, with this parent's own booking. */
export async function listEventsForParent(parent: Actor) {
  await parentOnly(parent);
  const db = getDb();
  const rows = await db
    .select({ e: familyEvents, booked })
    .from(familyEvents)
    .where(and(eq(familyEvents.schoolId, parent.schoolId), eq(familyEvents.status, "PUBLISHED"), sql`coalesce(${familyEvents.endsAt}, ${familyEvents.startsAt}, now() + interval '1 day') > now() - interval '1 day'`))
    .orderBy(asc(familyEvents.startsAt))
    .limit(100);
  const mine = await db.select().from(familyEventRsvps).where(eq(familyEventRsvps.parentUserId, parent.id));
  return rows.map((r) => ({ ...r, mine: mine.find((m) => m.eventId === r.e.id) ?? null }));
}

/** Books (or changes) a family's places on an activity. Refused when the places left are not enough. */
export async function rsvpEvent(parent: Actor, eventId: string, raw: { adults: number; children: number; note?: string }, ctx: ReqCtx) {
  await parentOnly(parent);
  const d = z.object({ adults: z.number().int().min(0).max(20), children: z.number().int().min(0).max(20), note: z.string().trim().max(300).optional() }).parse(raw);
  if (d.adults + d.children < 1) throw new AppError("VALIDATION", "Enter how many people are coming.");
  const db = getDb();
  await db.transaction(async (tx) => {
    const [e] = await tx.select().from(familyEvents).where(and(eq(familyEvents.id, eventId), eq(familyEvents.schoolId, parent.schoolId), eq(familyEvents.status, "PUBLISHED"))).for("update");
    if (!e) throw new AppError("NOT_FOUND", "Activity not found.");
    if ((e.endsAt ?? e.startsAt) && (e.endsAt ?? e.startsAt)! < new Date()) throw new AppError("CONFLICT", "This activity has already taken place.");
    if (e.capacity) {
      const [{ others }] = await tx.select({ others: sql<number>`coalesce(sum(${familyEventRsvps.adults} + ${familyEventRsvps.children}), 0)::int` }).from(familyEventRsvps).where(and(eq(familyEventRsvps.eventId, eventId), sql`${familyEventRsvps.parentUserId} <> ${parent.id}`));
      if (others + d.adults + d.children > e.capacity) throw new AppError("CONFLICT", `Only ${Math.max(0, e.capacity - others)} place(s) are left.`);
    }
    await tx.insert(familyEventRsvps).values({ eventId, parentUserId: parent.id, adults: d.adults, children: d.children, note: d.note || null }).onConflictDoUpdate({ target: [familyEventRsvps.eventId, familyEventRsvps.parentUserId], set: { adults: d.adults, children: d.children, note: d.note || null } });
  });
  await audit({ actor: parent, action: "family.rsvp", entityType: "family_event", entityId: eventId, summary: `${d.adults} adult(s), ${d.children} child(ren)` }, ctx);
}

export async function cancelRsvp(parent: Actor, eventId: string) {
  await parentOnly(parent);
  await getDb().delete(familyEventRsvps).where(and(eq(familyEventRsvps.eventId, eventId), eq(familyEventRsvps.parentUserId, parent.id)));
}

/** Tells every parent of the school about a newly published activity (one notice, not one per parent). */
export async function announceEvent(actor: Actor, id: string) {
  const [e] = await getDb().select().from(familyEvents).where(and(eq(familyEvents.id, id), eq(familyEvents.schoolId, actor.schoolId), eq(familyEvents.status, "PUBLISHED")));
  if (!e) throw new AppError("CONFLICT", "Publish the activity first.");
  const parents = await getDb().select({ id: users.id }).from(users).where(and(eq(users.schoolId, actor.schoolId), eq(users.userType, "PARENT"), eq(users.status, "ACTIVE"), sql`${users.deletedAt} IS NULL`)).limit(5000);
  for (const p of parents) await notifyUser({ schoolId: actor.schoolId, userId: p.id, category: "ANNOUNCEMENT", title: `Family activity: ${e.title}`, body: `${EVENT_KINDS[e.kind as keyof typeof EVENT_KINDS] ?? "Activity"}${e.venue ? ` at ${e.venue}` : ""}. Open Family Activities to see the details and book your places.`, link: "/parent/activities" });
  return { told: parents.length };
}

/* ----------------------------------------------------------------- experts */

export async function upsertExpert(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = expertSchema.parse(raw);
  if (d.email && !z.string().email().safeParse(d.email).success) throw new AppError("VALIDATION", "Enter a valid e-mail address, or leave it empty.");
  if (!d.phone && !d.email) throw new AppError("VALIDATION", "Enter a phone number or an e-mail address so that parents can reach the expert.");
  const db = getDb();
  const values = { ...d, title: d.title || null, phone: d.phone || null, email: d.email || null, availability: d.availability || null };
  if (id) {
    const [row] = await db.update(experts).set(values).where(and(eq(experts.id, id), eq(experts.schoolId, actor.schoolId))).returning({ id: experts.id });
    if (!row) throw new AppError("NOT_FOUND", "Expert not found.");
    await audit({ actor, action: "family.expert_updated", entityType: "expert", entityId: id, summary: d.name }, ctx);
    return id;
  }
  const [row] = await db.insert(experts).values({ ...values, schoolId: actor.schoolId, createdBy: actor.id }).returning({ id: experts.id });
  await audit({ actor, action: "family.expert_created", entityType: "expert", entityId: row.id, summary: d.name }, ctx);
  return row.id;
}

export async function deleteExpert(actor: Actor, id: string, ctx: ReqCtx) {
  const [row] = await getDb().delete(experts).where(and(eq(experts.id, id), eq(experts.schoolId, actor.schoolId))).returning({ name: experts.name });
  if (!row) throw new AppError("NOT_FOUND", "Expert not found.");
  await audit({ actor, action: "family.expert_deleted", entityType: "expert", entityId: id, summary: row.name }, ctx);
}

export async function listExpertsAdmin(schoolId: string) {
  return getDb().select().from(experts).where(eq(experts.schoolId, schoolId)).orderBy(asc(experts.sortOrder), asc(experts.name)).limit(300);
}

export async function listExpertsForParent(parent: Actor, profession?: string) {
  await parentOnly(parent);
  return expertsFor(parent.schoolId, ["PARENT", "BOTH"], profession);
}

/** Students see only the experts staff marked for students (travel advisers, education specialists…). */
export async function listExpertsForStudent(student: Actor, profession?: string) {
  if (student.userType !== "STUDENT") throw new AppError("FORBIDDEN", "This area is for students.");
  await requireFeature(student.id, "KNOWLEDGE_HUB");
  return expertsFor(student.schoolId, ["STUDENT", "BOTH"], profession);
}

function expertsFor(schoolId: string, audiences: string[], profession?: string) {
  return getDb()
    .select()
    .from(experts)
    .where(and(eq(experts.schoolId, schoolId), eq(experts.status, "PUBLISHED"), inArray(experts.audience, audiences), profession && profession in EXPERT_PROFESSIONS ? eq(experts.profession, profession) : undefined))
    .orderBy(asc(experts.sortOrder), asc(experts.name))
    .limit(300);
}
