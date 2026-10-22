import { and, asc, eq, ilike, isNull, or, sql } from "drizzle-orm";
import { z } from "zod";
import { SECTIONS } from "@/core/sections";
import { STARTER_CLICHES, STARTER_IDIOMS, STARTER_PHRASAL_VERBS, STARTER_WORDS } from "@/content/wordbank";
import { MORE_WORDS } from "@/content/advanced-prep";
import { MORE_CLICHES, MORE_DICTIONARY, MORE_IDIOMS, MORE_PHRASAL_VERBS } from "@/content/wordbank-more";
import { PROVERBS } from "@/content/proverbs";
import { COMMON_ERRORS } from "@/content/common-errors";
import { REGISTERS } from "@/content/registers";
import { ADVANCED_WORDS } from "@/content/dictionary-advanced";
import { getDb } from "../db";
import { requireFeature } from "./access";
import { classes, settings, wordEntries } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { resolveSection, sectionCond, studentScope } from "./scope";

/** The collections under Study Materials. `slug` is the student page address. */
export const WORD_KINDS = {
  WORD: { slug: "dictionary", label: "Picture Dictionary", one: "word" },
  IDIOM: { slug: "idioms", label: "Idioms", one: "idiom" },
  CLICHE: { slug: "cliches", label: "Clichés", one: "cliché" },
  PHRASAL_VERB: { slug: "phrasal-verbs", label: "Phrasal Verbs", one: "phrasal verb" },
  PROVERB: { slug: "proverbs", label: "Proverbs", one: "proverb" },
  COMMON_ERROR: { slug: "common-errors", label: "Common Errors", one: "common error" },
  REGISTER: { slug: "registers", label: "Registers (Professions)", one: "register term" },
} as const;
export type WordKind = keyof typeof WORD_KINDS;
export const WORD_KIND_KEYS = Object.keys(WORD_KINDS) as WordKind[];
export const kindFromSlug = (slug: string) => WORD_KIND_KEYS.find((k) => WORD_KINDS[k].slug === slug) ?? null;

const blank = z.literal("").transform(() => null);
const entrySchema = z.object({
  kind: z.enum(["WORD", "IDIOM", "CLICHE", "PHRASAL_VERB", "PROVERB", "COMMON_ERROR", "REGISTER"]),
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

/**
 * Adds the further dictionary words, once. A marker is saved so that a word the school later removes
 * never comes back; words the school already has are left exactly as they are.
 */
export async function seedMoreWords(schoolId: string) {
  const db = getDb();
  const MARK = "seed:more-words-v1";
  const [done] = await db.select({ key: settings.key }).from(settings).where(and(eq(settings.schoolId, schoolId), eq(settings.key, MARK)));
  if (done) return 0;
  const rows = MORE_WORDS.map(([picture, term, partOfSpeech, meaning, example]) => ({ schoolId, kind: "WORD", term, partOfSpeech, meaning, example, picture, level: null, createdBy: null }));
  const added = (await db.insert(wordEntries).values(rows).onConflictDoNothing().returning({ id: wordEntries.id })).length;
  await db.insert(settings).values({ schoolId, key: MARK, value: { added, at: new Date().toISOString() } }).onConflictDoNothing();
  return added;
}

/**
 * Adds the proverbs, common errors and further idioms, clichés, phrasal verbs and words, once per
 * release of the built-in collection. Entries the school already has (same kind and wording) are
 * left exactly as they are.
 */
export async function seedWordbankMore(schoolId: string) {
  const db = getDb();
  const total = PROVERBS.length + COMMON_ERRORS.length + MORE_IDIOMS.length + MORE_CLICHES.length + MORE_PHRASAL_VERBS.length + MORE_DICTIONARY.length + REGISTERS.length + ADVANCED_WORDS.length;
  const MARK = `seed:wordbank-more-v1:${total}`;
  const [done] = await db.select({ key: settings.key }).from(settings).where(and(eq(settings.schoolId, schoolId), eq(settings.key, MARK)));
  if (done) return 0;
  const rows: (typeof wordEntries.$inferInsert)[] = [
    ...PROVERBS.map(([term, origin, meaning, example]) => ({ schoolId, kind: "PROVERB", term, partOfSpeech: `${origin} proverb`.slice(0, 40), meaning, example, picture: "🦉", createdBy: null })),
    ...COMMON_ERRORS.map(([wrong, right, why, group]) => ({ schoolId, kind: "COMMON_ERROR", term: wrong.slice(0, 120), partOfSpeech: group, meaning: why, example: right, picture: "✏️", createdBy: null })),
    ...MORE_IDIOMS.map(([term, meaning, example]) => ({ schoolId, kind: "IDIOM", term, meaning, example, picture: "💬", createdBy: null })),
    ...MORE_CLICHES.map(([term, meaning, example]) => ({ schoolId, kind: "CLICHE", term, meaning, example, picture: "🗣️", createdBy: null })),
    ...MORE_PHRASAL_VERBS.map(([term, meaning, example]) => ({ schoolId, kind: "PHRASAL_VERB", term, partOfSpeech: "phrasal verb", meaning, example, picture: "🔗", createdBy: null })),
    ...MORE_DICTIONARY.map(([picture, term, partOfSpeech, meaning, example]) => ({ schoolId, kind: "WORD", term, partOfSpeech, meaning, example, picture, level: null, createdBy: null })),
    ...ADVANCED_WORDS.map(([picture, term, partOfSpeech, meaning, example, level]) => ({ schoolId, kind: "WORD", term, partOfSpeech, meaning, example, picture, level, createdBy: null })),
    ...REGISTERS.map(([profession, term, meaning, example]) => ({ schoolId, kind: "REGISTER", term, partOfSpeech: profession.slice(0, 40), meaning, example, picture: "💼", level: null, createdBy: null })),
  ];
  let added = 0;
  for (let i = 0; i < rows.length; i += 200) added += (await db.insert(wordEntries).values(rows.slice(i, i + 200)).onConflictDoNothing().returning({ id: wordEntries.id })).length;
  await db.insert(settings).values({ schoolId, key: MARK, value: { added, at: new Date().toISOString() } }).onConflictDoNothing();
  return added;
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

/** A small random sample of common errors and proverbs for the Game Zone (only what one game round needs). */
export async function gameExtras(schoolId: string) {
  const db = getDb();
  const pick = (kind: string, n: number) => db.select({ term: wordEntries.term, meaning: wordEntries.meaning, example: wordEntries.example }).from(wordEntries).where(and(eq(wordEntries.schoolId, schoolId), eq(wordEntries.kind, kind), eq(wordEntries.status, "PUBLISHED"))).orderBy(sql`random()`).limit(n);
  const [errors, proverbs] = await Promise.all([pick("COMMON_ERROR", 30), pick("PROVERB", 30)]);
  return {
    errors: errors.filter((e) => e.example && e.example.toLowerCase() !== e.term.toLowerCase()).map((e) => ({ wrong: e.term, right: e.example!, why: e.meaning })),
    proverbs: proverbs.map((p) => ({ text: p.term, meaning: p.meaning })),
  };
}

/** Everything the learning games need for one student, drawn from that student's class. */
export async function gameData(actor: Actor) {
  const scope = await studentScope(actor.id);
  const [cls] = scope.classId ? await getDb().select({ code: classes.code, name: classes.name }).from(classes).where(eq(classes.id, scope.classId)) : [];
  const all = await listEntriesForStudent(actor, {}).catch(() => []);
  return {
    grade: gradeOf(cls?.code ?? null, scope.level),
    className: cls?.name ?? null,
    words: all.filter((e) => e.kind === "WORD" && /^[a-z]{3,12}$/i.test(e.term)).map((e) => ({ term: e.term.toLowerCase(), meaning: e.meaning, picture: e.picture ?? "" })),
    phrases: all.filter((e) => e.kind !== "WORD" && e.kind !== "COMMON_ERROR" && e.kind !== "REGISTER").map((e) => ({ term: e.term, meaning: e.meaning })),
  };
}
