import { and, asc, eq, inArray, isNull, or } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "../db";
import { classes, gameSets } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { requireFeature, requireParentAccess } from "./access";
import { sectionCond, studentScope } from "./scope";

/**
 * Games the school adds in the backend. Each one is a short list typed one item per line, so a
 * teacher can make a new game in a minute: a word search or spelling game for this week's
 * vocabulary, a matching game for a topic, or a set of riddles.
 */

export const GAME_KINDS = {
  WORD_SEARCH: { label: "Word search", line: "word", help: "One word per line (3 to 10 letters). A clue after = is optional.", min: 3 },
  HANGMAN: { label: "Spell it", line: "word = clue", help: "One word per line with its clue, e.g. oxygen = the gas we breathe in.", min: 3 },
  MATCH: { label: "Matching pairs", line: "term = meaning", help: "One pair per line, e.g. Abuja = capital of Nigeria.", min: 3 },
  RIDDLE: { label: "Riddles", line: "riddle = answer", help: "One riddle per line with its answer after =.", min: 1 },
} as const;
export type GameKind = keyof typeof GAME_KINDS;

const schema = z.object({
  kind: z.enum(Object.keys(GAME_KINDS) as [GameKind, ...GameKind[]]),
  audience: z.enum(["STUDENT", "PARENT", "BOTH"]).default("STUDENT"),
  title: z.string().trim().min(3, "Give the game a title.").max(80),
  description: z.string().trim().max(200).optional(),
  items: z.string().trim().min(1, "Type the items, one per line.").max(8000),
  level: z.string().trim().max(40).optional(),
  classId: z.string().uuid().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
  sortOrder: z.number().int().min(0).max(9999).default(0),
});

/** Splits the typed lines into pairs. A line with no "=" is a word on its own. */
export function parseGameItems(kind: GameKind, items: string): [string, string][] {
  const out: [string, string][] = [];
  const seen = new Set<string>();
  for (const raw of items.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const at = line.indexOf("=");
    const left = (at < 0 ? line : line.slice(0, at)).trim().slice(0, 200);
    const right = (at < 0 ? "" : line.slice(at + 1)).trim().slice(0, 300);
    if (!left || seen.has(left.toLowerCase())) continue;
    if (kind === "WORD_SEARCH" || kind === "HANGMAN") {
      const word = left.replace(/[^A-Za-z]/g, "");
      if (word.length < 3 || word.length > (kind === "WORD_SEARCH" ? 10 : 14)) continue;
      if (kind === "HANGMAN" && !right) continue;
      out.push([word.toLowerCase(), right || "A word from your lesson"]);
    } else {
      if (!right) continue;
      out.push([left, right]);
    }
    seen.add(left.toLowerCase());
    if (out.length >= 60) break;
  }
  return out;
}

export async function upsertGame(actor: Actor, id: string | null, raw: unknown, ctx: ReqCtx) {
  const d = schema.parse(raw);
  const pairs = parseGameItems(d.kind, d.items);
  const k = GAME_KINDS[d.kind];
  if (pairs.length < k.min) throw new AppError("VALIDATION", `This game needs at least ${k.min} usable line${k.min === 1 ? "" : "s"}. ${k.help}`, { items: [k.help] });
  const db = getDb();
  if (d.classId) {
    const [c] = await db.select({ id: classes.id }).from(classes).where(and(eq(classes.id, d.classId), eq(classes.schoolId, actor.schoolId)));
    if (!c) throw new AppError("VALIDATION", "Choose a valid class.");
  }
  const values = { kind: d.kind, audience: d.audience, title: d.title, description: d.description || null, items: d.items, level: d.level || null, classId: d.classId ?? null, status: d.status, sortOrder: d.sortOrder };
  if (id) {
    const [row] = await db.update(gameSets).set(values).where(and(eq(gameSets.id, id), eq(gameSets.schoolId, actor.schoolId))).returning({ id: gameSets.id });
    if (!row) throw new AppError("NOT_FOUND", "Game not found.");
    await audit({ actor, action: "games.updated", entityType: "game_set", entityId: id, summary: d.title }, ctx);
    return { id, usable: pairs.length };
  }
  const [row] = await db.insert(gameSets).values({ ...values, schoolId: actor.schoolId, createdBy: actor.id }).returning({ id: gameSets.id });
  await audit({ actor, action: "games.created", entityType: "game_set", entityId: row.id, summary: d.title }, ctx);
  return { id: row.id, usable: pairs.length };
}

export async function deleteGame(actor: Actor, id: string, ctx: ReqCtx) {
  const [row] = await getDb().delete(gameSets).where(and(eq(gameSets.id, id), eq(gameSets.schoolId, actor.schoolId))).returning({ title: gameSets.title });
  if (!row) throw new AppError("NOT_FOUND", "Game not found.");
  await audit({ actor, action: "games.deleted", entityType: "game_set", entityId: id, summary: row.title }, ctx);
}

export async function listGamesAdmin(schoolId: string) {
  const rows = await getDb().select({ g: gameSets, className: classes.name }).from(gameSets).leftJoin(classes, eq(classes.id, gameSets.classId)).where(eq(gameSets.schoolId, schoolId)).orderBy(asc(gameSets.sortOrder), asc(gameSets.title)).limit(300);
  return rows.map((r) => ({ ...r, usable: parseGameItems(r.g.kind as GameKind, r.g.items).length }));
}

const toPlayable = (rows: (typeof gameSets.$inferSelect)[]) => rows.map((g) => ({ id: g.id, kind: g.kind as GameKind, title: g.title, description: g.description, pairs: parseGameItems(g.kind as GameKind, g.items) }));

/** Published games for this student's own class and section. Needs the Puzzle Arena on the access code. */
export async function listGamesForStudent(actor: Actor) {
  await requireFeature(actor.id, "PUZZLE_ARENA");
  const scope = await studentScope(actor.id);
  const rows = await getDb()
    .select()
    .from(gameSets)
    .where(and(eq(gameSets.schoolId, actor.schoolId), eq(gameSets.status, "PUBLISHED"), inArray(gameSets.audience, ["STUDENT", "BOTH"]), sectionCond(gameSets.level, scope.level), or(isNull(gameSets.classId), scope.classId ? eq(gameSets.classId, scope.classId) : isNull(gameSets.classId))))
    .orderBy(asc(gameSets.sortOrder), asc(gameSets.title))
    .limit(60);
  return toPlayable(rows);
}

export async function listGamesForParent(actor: Actor) {
  if (actor.userType !== "PARENT") throw new AppError("FORBIDDEN", "This area is for parents and guardians.");
  await requireParentAccess(actor.id);
  const rows = await getDb().select().from(gameSets).where(and(eq(gameSets.schoolId, actor.schoolId), eq(gameSets.status, "PUBLISHED"), inArray(gameSets.audience, ["PARENT", "BOTH"]))).orderBy(asc(gameSets.sortOrder), asc(gameSets.title)).limit(60);
  return toPlayable(rows);
}
