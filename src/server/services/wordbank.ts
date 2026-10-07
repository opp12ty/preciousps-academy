import { and, asc, eq, ilike, isNull, or, sql } from "drizzle-orm";
import { z } from "zod";
import { SECTIONS } from "@/core/sections";
import { STARTER_CLICHES, STARTER_IDIOMS, STARTER_PHRASAL_VERBS, STARTER_WORDS } from "@/content/wordbank";
import { getDb } from "../db";
import { requireFeature } from "./access";
import { classes, wordEntries } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { resolveSection, sectionCond, studentScope } from "./scope";

/** The four collections under Study Materials. `slug` is the student page address. */
export const WORD_KINDS = {
  WORD: { slug: "dictionary", label: "Picture Dictionary", one: "word" },
  IDIOM: { slug: "idioms", label: "Idioms", one: "idiom" },
  CLICHE: { slug: "cliches", label: "Clichés", one: "cliché" },
  PHRASAL_VERB: { slug: "phrasal-verbs", label: "Phrasal Verbs", one: "phrasal verb" },
} as const;
export type WordKind = keyof typeof WORD_KINDS;
export const WORD_KIND_KEYS = Object.keys(WORD_KINDS) as WordKind[];
export const kindFromSlug = (slug: string) => WORD_KIND_KEYS.find((k) => WORD_KINDS[k].slug === slug) ?? null;

const blank = z.literal("").transform(() => null);
const entrySchema = z.object({
  kind: z.enum(["WORD", "IDIOM", "CLICHE", "PHRASAL_VERB"]),
  term: z.string().trim().min(1).max(120),
  partOfSpeech: z.string().trim().max(40).nullish(),
  meaning: z.string().trim().min(2).max(600),
  example: z.string().trim().max(600).nullish(),
  picture: z.string().trim().max(16).nullish(),
  imageAssetId: z.string().uuid().nullish().or(blank),
  level: z.enum(SECTIONS).nullish().or(blank),
  classId: z.string().uuid().nullish().or(blank),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("PUBLISHED"),
});

export async function upsertEntry(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = entrySchema.parse(raw);
  const level = await resolveSection(actor.schoolId, d.classId, d.level);
  const values = { ...d, level, partOfSpeech: d.partOfSpeech || null, example: d.example || null, picture: d.picture || null };
  const db = getDb();
  try {
    const [row] = id
      ? await db.update(wordEntries).set({ ...values, updatedAt: new Date() }).where(and(eq(wordEntries.id, id), eq(wordEntries.schoolId, actor.schoolId))).returning()
      : await db.insert(wordEntries).values({ ...values, schoolId: actor.schoolId, createdBy: actor.id }).returning();
    if (!row) throw new AppError("NOT_FOUND", "Entry not found.");
    await audit({ actor, action: id ? "wordbank.updated" : "wordbank.created", entityType: "word_entry", entityId: row.id, summary: `${row.kind}: ${row.term}` }, ctx);
    return row;
  } catch (e) {
    const c = e as { code?: string; cause?: { code?: string } };
    if (c.code === "23505" || c.cause?.code === "23505") throw new AppError("DUPLICATE", `“${d.term}” is already in this collection.`, { term: ["Already in this collection."] });
    throw e;
  }
}

export async function deleteEntry(actor: Actor, id: string, ctx: ReqCtx) {
  const [row] = await getDb().delete(wordEntries).where(and(eq(wordEntries.id, id), eq(wordEntries.schoolId, actor.schoolId))).returning({ term: wordEntries.term });
  if (!row) throw new AppError("NOT_FOUND", "Entry not found.");
  await audit({ actor, action: "wordbank.deleted", entityType: "word_entry", entityId: id, summary: row.term }, ctx);
}

export async function listEntriesAdmin(schoolId: string, f: { kind: WordKind; search?: string; level?: string; classId?: string }) {
  const conds = [eq(wordEntries.schoolId, schoolId), eq(wordEntries.kind, f.kind)];
  if (f.search?.trim()) conds.push(or(ilike(wordEntries.term, `%${f.search.trim()}%`), ilike(wordEntries.meaning, `%${f.search.trim()}%`))!);
  if (f.level === "ALL") conds.push(isNull(wordEntries.level));
  else if (f.level) conds.push(eq(wordEntries.level, f.level));
  if (f.classId) conds.push(eq(wordEntries.classId, f.classId));
  return getDb()
    .select({ e: wordEntries, className: classes.name })
    .from(wordEntries)
    .leftJoin(classes, eq(classes.id, wordEntries.classId))
    .where(and(...conds))
    .orderBy(sql`lower(${wordEntries.term})`)
    .limit(1000);
}

/** Published entries for the student's own class: their class, their section, or open to everyone. */
export async function listEntriesForStudent(actor: Actor, f: { kind?: WordKind; search?: string; letter?: string }) {
  await requireFeature(actor.id, "LEARNING_RESOURCES");
  const scope = await studentScope(actor.id);
  const conds = [
    eq(wordEntries.schoolId, actor.schoolId),
    eq(wordEntries.status, "PUBLISHED"),
    sectionCond(wordEntries.level, scope.level),
    or(isNull(wordEntries.classId), scope.classId ? eq(wordEntries.classId, scope.classId) : sql`false`)!,
  ];
  if (f.kind) conds.push(eq(wordEntries.kind, f.kind));
  if (f.search?.trim()) conds.push(or(ilike(wordEntries.term, `%${f.search.trim()}%`), ilike(wordEntries.meaning, `%${f.search.trim()}%`))!);
  if (f.letter && /^[a-z]$/i.test(f.letter)) conds.push(ilike(wordEntries.term, `${f.letter}%`));
  return getDb().select().from(wordEntries).where(and(...conds)).orderBy(asc(sql`lower(${wordEntries.term})`)).limit(1000);
}

/** Adds the starter collection; entries that already exist are left alone. */
export async function loadStarterEntries(schoolId: string, createdBy: string | null) {
  const rows: (typeof wordEntries.$inferInsert)[] = [
    // Picture words suit the primary classes; idioms, clichés and phrasal verbs are for every class.
    ...STARTER_WORDS.map(([picture, term, partOfSpeech, meaning, example]) => ({ schoolId, kind: "WORD", term, partOfSpeech, meaning, example, picture, level: null, createdBy })),
    ...STARTER_IDIOMS.map(([term, meaning, example]) => ({ schoolId, kind: "IDIOM", term, meaning, example, picture: "💬", createdBy })),
    ...STARTER_CLICHES.map(([term, meaning, example]) => ({ schoolId, kind: "CLICHE", term, meaning, example, picture: "🗣️", createdBy })),
    ...STARTER_PHRASAL_VERBS.map(([term, meaning, example]) => ({ schoolId, kind: "PHRASAL_VERB", term, partOfSpeech: "phrasal verb", meaning, example, picture: "🔗", createdBy })),
  ];
  let created = 0;
  const db = getDb();
  for (let i = 0; i < rows.length; i += 100) created += (await db.insert(wordEntries).values(rows.slice(i, i + 100)).onConflictDoNothing().returning({ id: wordEntries.id })).length;
  return { created };
}

export async function loadStarterAction(actor: Actor, ctx: ReqCtx) {
  const r = await loadStarterEntries(actor.schoolId, actor.id);
  await audit({ actor, action: "wordbank.starter", entityType: "word_entry", entityId: actor.schoolId, summary: `${r.created} entries added` }, ctx);
  return r;
}

/** First deploy only: an empty word bank receives the starter collection. */
export async function seedStarterEntriesIfEmpty(schoolId: string) {
  const [{ n }] = await getDb().select({ n: sql<number>`count(*)::int` }).from(wordEntries).where(eq(wordEntries.schoolId, schoolId));
  return n > 0 ? { created: 0 } : loadStarterEntries(schoolId, null);
}

/**
 * The year of schooling a class stands for (Basic 1 = 1 … SS3 = 12), used to pitch the learning
 * games. Classes the school added itself fall back on their section.
 */
export function gradeOf(classCode: string | null, level: string | null) {
  const m = /^(BASIC|JSS|SS)\s*(\d)$/i.exec(classCode ?? "");
  if (m) return Number(m[2]) + (m[1].toUpperCase() === "BASIC" ? 0 : m[1].toUpperCase() === "JSS" ? 6 : 9);
  return level === "PRIMARY" ? 3 : level === "JUNIOR_SECONDARY" ? 8 : 11;
}

/** Everything the learning games need for one student, drawn from that student's class. */
export async function gameData(actor: Actor) {
  const scope = await studentScope(actor.id);
  const [cls] = scope.classId ? await getDb().select({ code: classes.code, name: classes.name }).from(classes).where(eq(classes.id, scope.classId)) : [];
  const all = await listEntriesForStudent(actor, {});
  return {
    grade: gradeOf(cls?.code ?? null, scope.level),
    className: cls?.name ?? null,
    words: all.filter((e) => e.kind === "WORD" && /^[a-z]{3,12}$/i.test(e.term)).map((e) => ({ term: e.term.toLowerCase(), meaning: e.meaning, picture: e.picture ?? "" })),
    phrases: all.filter((e) => e.kind !== "WORD").map((e) => ({ term: e.term, meaning: e.meaning })),
  };
}
