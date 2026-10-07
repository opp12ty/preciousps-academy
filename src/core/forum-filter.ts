/**
 * Safety filter for forum messages. Pure and synchronous so it can be unit-tested and reused.
 *
 * It refuses messages that carry personal contact details (phone numbers, e-mail addresses, home
 * addresses, locations, social-media handles, links) or blocked words. No filter is perfect: it is
 * the first line, and staff moderation (delete, suspend) is the second.
 */

export type BlockReason = "PHONE" | "EMAIL" | "LINK" | "SOCIAL" | "ADDRESS" | "BLOCKED_WORD" | "TOO_LONG" | "EMPTY";

export const BLOCK_MESSAGES: Record<BlockReason, string> = {
  PHONE: "Phone numbers cannot be shared in the forum.",
  EMAIL: "E-mail addresses cannot be shared in the forum.",
  LINK: "Links cannot be shared in the forum.",
  SOCIAL: "Social-media contacts and handles cannot be shared in the forum.",
  ADDRESS: "Home addresses and locations cannot be shared in the forum.",
  BLOCKED_WORD: "That message contains words that are not allowed here. Keep the discussion about school work.",
  TOO_LONG: "That message is too long.",
  EMPTY: "Write a message first.",
};

const NUMBER_WORDS = "zero|oh|one|two|three|four|five|six|seven|eight|nine|double|triple";
const SOCIAL = /\b(whats\s*app|watsapp|wa\.me|telegram|snap\s*chat|instagram|insta\b|tik\s*tok|facebook|fb\b|messenger|twitter|discord|imo\b|dm me|inbox me|add me on|my handle|my ig\b|ig\s*[:@-])/i;
const ADDRESS =
  /\b(my (home |house )?address|i (live|stay|reside) (at|in|on|around|near)|where (do|did) you (live|stay)|where is your (house|home)|my (house|home) is (at|in|on|near)|house (no|number)\b|my location|send (me )?(your|ur) (location|address)|share (your|ur) (location|address)|come to my (house|home|place)|meet me (at|in)|let'?s meet|\d{1,4}[,]?\s+[a-z' ]{2,30}\s(street|str|road|rd|avenue|ave|close|crescent|estate|lane|way)\b)/i;

/** Lower-case, strip accents and undo the commonest letter-for-symbol tricks so "s3x" and "s e x" still match. */
function squash(text: string) {
  return text
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[@4]/g, "a")
    .replace(/3/g, "e")
    .replace(/[1!|]/g, "i")
    .replace(/0/g, "o")
    .replace(/[$5]/g, "s")
    .replace(/7/g, "t");
}

export function parseBlockedWords(list: string): string[] {
  return [...new Set(list.split(/[,\n]/).map((w) => w.trim().toLowerCase()).filter((w) => w.length >= 2))];
}

export interface FilterOptions {
  maxLength: number;
  blockedWords: string[];
  blockLinks: boolean;
}

export function checkForumMessage(raw: string, o: FilterOptions): { ok: true; text: string } | { ok: false; reason: BlockReason } {
  const text = raw.replace(/\r/g, "").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
  if (!text) return { ok: false, reason: "EMPTY" };
  if (text.length > o.maxLength) return { ok: false, reason: "TOO_LONG" };

  // E-mail, including "name at gmail dot com".
  if (/[a-z0-9._%+-]+\s*@\s*[a-z0-9.-]+\s*\.\s*[a-z]{2,}/i.test(text)) return { ok: false, reason: "EMAIL" };
  if (/\b(g\s*mail|yahoo|hotmail|outlook|icloud|ymail)\b/i.test(text) && /(\bat\b|\bdot\b|@|\.com)/i.test(text)) return { ok: false, reason: "EMAIL" };

  // Phone: seven or more digits once separators are removed, or the same spelt out in words.
  // Short numbers (years, scores, question numbers) pass.
  // Dates (14/05/2027) are not phone numbers.
  const undated = text.replace(/\b\d{1,2}[-/.]\d{1,2}[-/.]\d{2,4}\b/g, " ");
  for (const run of undated.match(/\+?\d[\d\s().\-_/]{5,}\d/g) ?? []) {
    if (run.replace(/\D/g, "").length >= 7) return { ok: false, reason: "PHONE" };
  }
  if (new RegExp(`(?:\\b(?:${NUMBER_WORDS})\\b[\\s,.-]*){6,}`, "i").test(text)) return { ok: false, reason: "PHONE" };
  // Digits and number words mixed ("080 three four…").
  const mixed = undated.toLowerCase().replace(new RegExp(`\\b(${NUMBER_WORDS})\\b`, "g"), "0");
  for (const run of mixed.match(/\d[\d\s().\-_/,]{5,}\d/g) ?? []) {
    if (run.replace(/\D/g, "").length >= 9) return { ok: false, reason: "PHONE" };
  }

  if (o.blockLinks && /(https?:\/\/|www\.|\b[a-z0-9-]{2,}\.(com|ng|net|org|io|co|me|ly|link|app|xyz|info|tv)\b)/i.test(text)) return { ok: false, reason: "LINK" };
  if (SOCIAL.test(text) || /(^|\s)@[a-z0-9_.]{3,}/i.test(text)) return { ok: false, reason: "SOCIAL" };
  if (ADDRESS.test(text)) return { ok: false, reason: "ADDRESS" };

  if (o.blockedWords.length) {
    const flat = squash(text);
    const words = flat.split(/[^a-z]+/).filter(Boolean);
    const joined = flat.replace(/[^a-z]/g, "");
    // Letters typed one at a time ("s e x") collapse to a run of single letters.
    const spelled = flat.match(/\b(?:[a-z][\s.*_-]+){2,}[a-z]\b/g)?.map((m) => m.replace(/[^a-z]/g, "")) ?? [];
    for (const w of o.blockedWords) {
      const bad = squash(w).replace(/[^a-z ]/g, "");
      if (!bad) continue;
      if (bad.includes(" ") ? flat.replace(/[^a-z]+/g, " ").includes(bad) : words.includes(bad) || spelled.includes(bad) || (bad.length >= 6 && joined.includes(bad))) return { ok: false, reason: "BLOCKED_WORD" };
    }
  }
  return { ok: true, text };
}

/** Whether the forum is open at this moment in the school's time zone, and how the hours read. */
export function forumWindow(now: Date, timezone: string, openHour: number, closeHour: number) {
  let hour: number;
  let minute: number;
  try {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: timezone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(now);
    hour = Number(parts.find((p) => p.type === "hour")?.value);
    minute = Number(parts.find((p) => p.type === "minute")?.value);
  } catch {
    hour = now.getUTCHours();
    minute = now.getUTCMinutes();
  }
  const label = (h: number) => `${h % 12 === 0 ? 12 : h % 12}${h % 24 < 12 ? "am" : "pm"}`;
  return {
    open: openHour < closeHour ? hour >= openHour && hour < closeHour : false,
    /** Seconds until closing time today (0 when closed). */
    secondsToClose: hour >= openHour && hour < closeHour ? (closeHour - hour) * 3600 - minute * 60 : 0,
    hours: `${label(openHour)} to ${label(closeHour)}`,
  };
}

/** Calendar day (YYYY-MM-DD) in the school's time zone — the unit for the daily time allowance. */
export function forumDay(now: Date, timezone: string) {
  try {
    return new Intl.DateTimeFormat("en-CA", { timeZone: timezone, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  } catch {
    return now.toISOString().slice(0, 10);
  }
}
