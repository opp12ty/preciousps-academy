import { parseStarQuestions } from "./question-parser";

/**
 * Splits a Precious PS e-book into units for the Precious PS Study Centre. Works on "blocks" (a paragraph, heading,
 * list or table of a Word file, or a line of a PDF / PowerPoint), so the same rules read every format:
 *
 *   UNIT 1 | WEEK 1            → a new unit (next lines: title, subtitle)
 *   Advanced Corner            → the unit's challenge question
 *   Classwork 1 / Assignment 1 → numbered questions
 *   TERM REVIEW                → the CBT, correct option marked with *
 *   ANSWER KEY                 → "Unit 1: …" then Classwork / Assignment / Advanced Corner answers,
 *                                 and "Term Review CBT" letters (1. B 2. C …)
 *
 * A book without UNIT lines is split at its main headings (or Unit / Chapter / Lesson lines).
 */

export interface Block { tag: string; html: string; text: string }
export interface ParsedUnit {
  /** The number printed in the book (later terms carry on from earlier ones, e.g. Unit 9). */
  number: number;
  title: string;
  subtitle: string | null;
  week: string | null;
  html: string[];
  advanced: string | null;
  advancedAnswer: string | null;
  classwork: { q: string; a: string }[];
  assignment: { q: string; a: string }[];
}
export interface ParsedBook {
  title: string | null;
  subtitle: string | null;
  introHtml: string;
  units: ParsedUnit[];
  review: { stem: string; options: { label: string; text: string }[]; answer: string; explanation?: string }[];
  notices: string[];
}

const UNIT_LINE = /^unit\s+(\d+)\b\s*(?:[|:\-–—]\s*(.*))?$/i;
const WEEK = /week\s+([\d\s\-–]+)/i;
const CLASSWORK = /^class\s*work\s*(\d+)?\s*:?\s*$/i;
const ASSIGNMENT = /^(?:assignment|homework)\s*(\d+)?\s*:?\s*$/i;
const ADVANCED = /^advanced\s+corner\s*:?\s*(.*)$/i;
const REVIEW = /^(?:term\s+review(?:\s+cbt)?|revision\s+cbt|cbt\s+practice)\b/i;
const KEY = /^answer\s+key\b/i;
const NUMBERED = /^(\d{1,3})\s*[.)]\s*(.+)$/;
const KEY_UNIT = /^unit\s+(\d+)\s*[:.\-–]/i;
const FALLBACK_SPLIT = /^(?:unit|chapter|lesson|topic|module)\s+(\d+)\b/i;

const lines = (b: Block) => b.text.split("\n").map((l) => l.replace(/\s+/g, " ").trim()).filter(Boolean);
const clean = (s: string) => s.replace(/\s+/g, " ").trim();

export function parseFscBook(blocks: Block[]): ParsedBook {
  const notices: string[] = [];
  const intro: string[] = [];
  const units: ParsedUnit[] = [];
  const reviewLines: string[] = [];
  const keyAnswers = new Map<number, { classwork: string[]; assignment: string[]; advanced: string[] }>();
  const reviewKey = new Map<number, string>();
  let title: string | null = null;
  let subtitle: string | null = null;

  type State = "intro" | "unit" | "classwork" | "assignment" | "review" | "skip" | "key";
  let state: State = "intro";
  let unit: ParsedUnit | null = null;
  let pendingHeader = 0; // PDF / PowerPoint: the unit's title and subtitle come on the next lines
  let pendingAdvanced = false;
  let keyUnit = 0;
  let keySection: "classwork" | "assignment" | "advanced" | "review" | null = null;

  const hasUnitLines = blocks.some((b) => UNIT_LINE.test(lines(b)[0] ?? ""));
  const newUnit = (n: number, t: string, sub: string | null, week: string | null) => {
    unit = { number: n, title: t, subtitle: sub, week, html: [], advanced: null, advancedAnswer: null, classwork: [], assignment: [] };
    units.push(unit);
    state = "unit";
  };
  const addQuestion = (list: { q: string; a: string }[], line: string) => {
    const m = NUMBERED.exec(line);
    if (m) list.push({ q: clean(m[2]), a: "" });
    else if (list.length) list[list.length - 1].q = clean(`${list[list.length - 1].q} ${line}`);
  };

  for (const b of blocks) {
    const ls = lines(b);
    if (!ls.length && !/<img/i.test(b.html)) continue;
    const first = ls[0] ?? "";

    if (KEY.test(first)) {
      state = "key";
      continue;
    }
    if (state === "key") {
      for (const l of ls) {
        const ku = KEY_UNIT.exec(l);
        if (ku) {
          keyUnit = Number(ku[1]);
          keySection = null;
          continue;
        }
        if (REVIEW.test(l)) {
          keySection = "review";
          for (const m of l.matchAll(/(\d{1,3})\s*[.)]\s*\*?([A-Ea-e])\b/g)) reviewKey.set(Number(m[1]), m[2].toUpperCase());
          continue;
        }
        if (CLASSWORK.test(l)) { keySection = "classwork"; continue; }
        if (ASSIGNMENT.test(l)) { keySection = "assignment"; continue; }
        const adv = ADVANCED.exec(l);
        if (adv) {
          keySection = "advanced";
          if (adv[1]) (keyAnswers.get(keyUnit) ?? keyAnswers.set(keyUnit, { classwork: [], assignment: [], advanced: [] }).get(keyUnit)!).advanced.push(adv[1]);
          continue;
        }
        if (keySection === "review") {
          for (const m of l.matchAll(/(\d{1,3})\s*[.)]\s*\*?([A-Ea-e])\b/g)) reviewKey.set(Number(m[1]), m[2].toUpperCase());
          continue;
        }
        if (!keySection || !keyUnit) continue;
        const k = keyAnswers.get(keyUnit) ?? keyAnswers.set(keyUnit, { classwork: [], assignment: [], advanced: [] }).get(keyUnit)!;
        if (keySection === "advanced") {
          k.advanced.push(l);
          continue;
        }
        const list = k[keySection];
        const m = NUMBERED.exec(l);
        if (m) list[Number(m[1]) - 1] = clean(m[2]);
        else if (list.length) list[list.length - 1] = clean(`${list[list.length - 1]} ${l}`);
      }
      continue;
    }

    if (REVIEW.test(first) && state !== "intro") {
      state = "review";
      continue;
    }
    if (state === "review" || state === "skip") {
      if (UNIT_LINE.test(first)) state = "intro"; // a stray review block before more units
      else {
        for (const l of ls) {
          if (/^platform\s+note\b/i.test(l)) state = "skip";
          else if (state === "review") reviewLines.push(l);
        }
        continue;
      }
    }

    const um = hasUnitLines ? UNIT_LINE.exec(first) : null;
    if (um) {
      const week = WEEK.exec(first)?.[1]?.trim() ?? null;
      const rest = ls.slice(1);
      newUnit(Number(um[1]), rest[0] ?? `Unit ${um[1]}`, rest[1] ?? null, week ? `Week ${week}` : null);
      pendingHeader = rest.length ? 0 : 2;
      continue;
    }
    if (!hasUnitLines) {
      const isHeading = /^h[12]$/.test(b.tag) || FALLBACK_SPLIT.test(first);
      if (isHeading && !CLASSWORK.test(first) && !ASSIGNMENT.test(first) && !ADVANCED.test(first) && first.length < 140) {
        newUnit(units.length + 1, first, ls[1] && ls.length === 2 ? ls[1] : null, null);
        continue;
      }
    }

    if (state === "intro") {
      // The cover: "Precious PS COLLEGE | Precious PS CBT", then the subject, then class and term.
      if (intro.length < 4 && (!title || !subtitle)) {
        for (const l of ls.filter((x) => !/(?:fodan|precious\s*ps(?:\s*academy)?)\s+(?:college|cbt|academy)/i.test(x) && x.length < 80)) {
          if (!title) title = l;
          else if (!subtitle) subtitle = l;
        }
      }
      intro.push(b.html);
      continue;
    }
    const u = unit as ParsedUnit | null;
    if (!u) continue;

    if (pendingHeader && ls.length === 1 && first.length < 140 && !CLASSWORK.test(first) && !ASSIGNMENT.test(first)) {
      if (pendingHeader === 2) u.title = first;
      else u.subtitle = first;
      pendingHeader--;
      continue;
    }
    pendingHeader = 0;

    const adv = ADVANCED.exec(first);
    if (adv) {
      u.advanced = clean([adv[1], ...ls.slice(1)].filter(Boolean).join(" ")) || null;
      // PDF / PowerPoint: the question comes on the next line(s).
      pendingAdvanced = !u.advanced;
      continue;
    }
    if (pendingAdvanced && !CLASSWORK.test(first) && !ASSIGNMENT.test(first)) {
      u.advanced = clean([u.advanced ?? "", ...ls].join(" "));
      continue;
    }
    pendingAdvanced = false;
    if (CLASSWORK.test(first)) {
      state = "classwork";
      for (const l of ls.slice(1)) addQuestion(u.classwork, l);
      continue;
    }
    if (ASSIGNMENT.test(first)) {
      state = "assignment";
      for (const l of ls.slice(1)) addQuestion(u.assignment, l);
      continue;
    }
    if (state === "classwork" || state === "assignment") {
      const list = state === "classwork" ? u.classwork : u.assignment;
      if (ls.every((l) => NUMBERED.test(l)) || (b.tag === "p" && list.length && ls.length === 1)) {
        for (const l of ls) addQuestion(list, l);
        continue;
      }
      if (b.tag === "ol") {
        for (const l of ls) list.push({ q: l, a: "" });
        continue;
      }
      state = "unit"; // anything else after the questions is more of the unit
    }
    u.html.push(b.html);
  }

  // Answers from the Answer Key.
  units.forEach((u) => {
    const k = keyAnswers.get(u.number);
    if (!k) return;
    u.classwork.forEach((q, j) => (q.a = k.classwork[j] ?? ""));
    u.assignment.forEach((q, j) => (q.a = k.assignment[j] ?? ""));
    if (k.advanced.length) u.advancedAnswer = clean(k.advanced.join(" "));
  });

  // The Term Review CBT: starred options, or the letters in the Answer Key.
  const start = reviewLines.findIndex((l) => NUMBERED.test(l));
  const parsed = start >= 0 ? parseStarQuestions(reviewLines.slice(start).join("\n")) : [];
  const review = parsed
    .map((q, i) => {
      const n = Number(q.number ?? i + 1);
      const starred = q.options.find((o) => o.isCorrect)?.label;
      const answer = starred ?? reviewKey.get(n) ?? "";
      return { stem: q.stem, options: q.options.map((o) => ({ label: o.label, text: o.text.replace(/^[\s*]+/, "") })), answer, explanation: q.explanation };
    })
    .filter((q) => q.stem && q.options.length >= 2);
  const noAnswer = review.filter((q) => !q.answer).length;

  if (!units.length) notices.push("No units were found. Start each unit with a line such as “UNIT 1 | WEEK 1”, or use headings.");
  const unanswered = units.reduce((n, u) => n + [...u.classwork, ...u.assignment].filter((q) => !q.a).length, 0);
  if (unanswered) notices.push(`${unanswered} classwork / assignment question(s) have no model answer in the Answer Key; they are counted as done when submitted but not marked.`);
  if (!review.length) notices.push("No Term Review CBT was found (a “TERM REVIEW” section with options A–D and * on the correct one).");
  if (noAnswer) notices.push(`${noAnswer} Term Review question(s) have no correct option marked and are left out.`);

  return { title, subtitle, introHtml: intro.join("\n"), units, review: review.filter((q) => q.answer), notices };
}

/* ---------------------------------------------------------------- HTML helpers */

const ALLOWED = new Set(["p", "h1", "h2", "h3", "h4", "h5", "h6", "strong", "b", "em", "i", "u", "s", "sup", "sub", "br", "ul", "ol", "li", "table", "thead", "tbody", "tr", "td", "th", "img", "figure", "figcaption", "blockquote"]);

/** Keeps only plain formatting tags; images only from this site's asset store. */
export function sanitizeHtml(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|iframe|object|embed)[\s\S]*?<\/\1>/gi, "")
    .replace(/<\/?([a-zA-Z0-9]+)([^>]*)>/g, (tag, name: string, attrs: string) => {
      const n = name.toLowerCase();
      if (!ALLOWED.has(n)) return "";
      if (tag.startsWith("</")) return `</${n}>`;
      if (n === "img") {
        const src = /\ssrc="(\/api\/v1\/assets\/[0-9a-f-]{36})"/i.exec(attrs)?.[1];
        const alt = /\salt="([^"<>]*)"/i.exec(attrs)?.[1] ?? "";
        return src ? `<img src="${src}" alt="${alt}" loading="lazy" />` : "";
      }
      if (n === "td" || n === "th") {
        const span = [...attrs.matchAll(/\s(colspan|rowspan)="(\d{1,2})"/gi)].map((m) => ` ${m[1].toLowerCase()}="${m[2]}"`).join("");
        return `<${n}${span}>`;
      }
      return n === "br" ? "<br />" : `<${n}>`;
    });
}

export const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const decode = (s: string) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");

/** The text of an HTML block, one line per paragraph, list item or table cell. */
export function blockText(html: string): string {
  return decode(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|li|td|th|tr|h[1-6])>/gi, "\n")
      .replace(/<[^>]+>/g, ""),
  )
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .join("\n");
}

/** Splits HTML (as mammoth writes it) into its top-level blocks, keeping whole tables and lists together. */
export function htmlBlocks(html: string): Block[] {
  const out: Block[] = [];
  const re = /<(\/?)(p|h[1-6]|table|ul|ol)\b[^>]*>/gi;
  let depth = 0;
  let start = 0;
  let tag = "";
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const name = m[2].toLowerCase();
    if (!m[1]) {
      if (depth === 0) {
        start = m.index;
        tag = name;
      }
      if (depth === 0 || name === tag || ((tag === "table" || tag === "ul" || tag === "ol") && (name === "table" || name === "ul" || name === "ol"))) depth++;
    } else if (depth > 0 && (name === tag || ((tag === "table" || tag === "ul" || tag === "ol") && (name === "table" || name === "ul" || name === "ol")))) {
      depth--;
      if (depth === 0) {
        const chunk = html.slice(start, re.lastIndex);
        out.push({ tag, html: chunk, text: blockText(chunk) });
      }
    }
  }
  return out;
}

/** Plain text (PDF pages, PowerPoint slides) as one block per line. */
export function textBlocks(text: string): Block[] {
  return text
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .map((l) => ({ tag: "p", html: `<p>${escapeHtml(l)}</p>`, text: l }));
}
