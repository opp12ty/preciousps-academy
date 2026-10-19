import { and, eq, isNull, or, sql } from "drizzle-orm";
import { getDb } from "../db";
import { wordEntries } from "../db/schema";

/**
 * Today's learning bites: one word, idiom, proverb and common error, the same for everyone on a given
 * day and different every day. Chosen from the school's own published Study Materials, so anything
 * staff add or edit in the backend appears here too.
 */
export interface Bite { kind: string; term: string; meaning: string; example: string | null; picture: string | null; tag: string | null }

export async function dailyBites(schoolId: string, day: string, level: string | null = null): Promise<Bite[]> {
  const db = getDb();
  const pick = async (kind: string) => {
    const [row] = await db
      .select({ kind: wordEntries.kind, term: wordEntries.term, meaning: wordEntries.meaning, example: wordEntries.example, picture: wordEntries.picture, tag: wordEntries.partOfSpeech })
      .from(wordEntries)
      .where(and(eq(wordEntries.schoolId, schoolId), eq(wordEntries.kind, kind), eq(wordEntries.status, "PUBLISHED"), isNull(wordEntries.classId), level ? or(isNull(wordEntries.level), eq(wordEntries.level, level)) : isNull(wordEntries.level)))
      .orderBy(sql`md5(${wordEntries.id}::text || ${day})`)
      .limit(1);
    return row ?? null;
  };
  const rows = await Promise.all(["WORD", "IDIOM", "PROVERB", "COMMON_ERROR"].map(pick));
  return rows.filter((r): r is Bite => Boolean(r));
}

/** Today's date in Lagos, used to choose the daily bites. */
export const lagosDay = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Lagos" }).format(new Date());
