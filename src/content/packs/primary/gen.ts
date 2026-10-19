/**
 * Shared tools for the Primary (Basic 1–Basic 6) reasoning packs. Reasoning questions follow
 * patterns, so each topic is written once as a lesson plus a question maker, and the maker is run
 * with numbers and words suited to each class. The same seed always gives the same questions, so
 * builds are repeatable.
 */
import type { ClassCode, Diff, PackTopic, Q, SubjectPack, TermPlan } from "../types";

export const PRIMARY_CLASSES: ClassCode[] = ["BASIC1", "BASIC2", "BASIC3", "BASIC4", "BASIC5", "BASIC6"];
/** Every class from Primary 1 to SS 3, in order; the compact authoring helpers below work for all of them. */
export const ALL_CLASSES: ClassCode[] = [...PRIMARY_CLASSES, "JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"];

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

export interface Ctx {
  /** Basic 1 = 1 … Basic 6 = 6. */
  g: number;
  /** 1 for Basic 1–2, 2 for Basic 3–4, 3 for Basic 5–6. */
  tier: 1 | 2 | 3;
  int: (a: number, b: number) => number;
  pick: <T>(xs: readonly T[]) => T;
  shuffle: <T>(xs: readonly T[]) => T[];
  /** Question keys already used anywhere in the pack. */
  seen: Set<string>;
}

export function makeCtx(g: number, seed: string, seen: Set<string>): Ctx {
  let a = hash(seed) || 1;
  const next = () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const int = (a0: number, b0: number) => {
    const lo = Math.ceil(a0);
    const hi = Math.max(lo, Math.floor(b0));
    return lo + Math.floor(next() * (hi - lo + 1));
  };
  const shuffle = <T,>(xs: readonly T[]) => {
    const out = [...xs];
    for (let i = out.length - 1; i > 0; i--) {
      const j = int(0, i);
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  };
  return { g, tier: (g <= 2 ? 1 : g <= 4 ? 2 : 3) as 1 | 2 | 3, int, pick: (xs) => xs[int(0, xs.length - 1)], shuffle, seen };
}

/** Three wrong numbers near the right one, all different and never negative. */
export function near(c: Ctx, answer: number): [string, string, string] {
  const out = new Set<number>();
  const spread = Math.max(3, Math.round(answer * 0.15));
  for (let guard = 0; out.size < 3 && guard < 80; guard++) {
    const v = answer + c.int(-spread, spread);
    if (v !== answer && v >= 0) out.add(v);
  }
  for (let v = answer + 1; out.size < 3; v++) out.add(v);
  const [x, y, z] = [...out];
  return [String(x), String(y), String(z)];
}

export const numQ = (c: Ctx, d: Diff, stem: string, answer: number, why: string): Q => [d, stem, String(answer), ...near(c, answer), why];

/** A question with word options; returns null when the options are not four different words. */
export function wordQ(d: Diff, stem: string, answer: string, wrong: string[], why: string, exact = false): Q | null {
  // `exact` keeps options that differ from the answer only in capital letters (punctuation questions).
  const opts = [...new Set(wrong.filter((w) => (exact ? w !== answer : w.toLowerCase() !== answer.toLowerCase())))].slice(0, 3);
  return opts.length === 3 ? [d, stem, answer, opts[0], opts[1], opts[2], why] : null;
}

export interface TopicSpec {
  title: string;
  subtopics: string[];
  objectives: string[];
  summary: string;
  notes: string;
  examples: string;
  /** Makes one question; called until the topic has enough different questions. */
  make: (c: Ctx, i: number) => Q | null;
}
export type Factory = (c: Ctx) => TopicSpec;

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

function questions(c: Ctx, spec: TopicSpec, wanted: number): Q[] {
  const out: Q[] = [];
  for (let i = 0; out.length < wanted && i < wanted * 40; i++) {
    const q = spec.make(c, i);
    if (!q) continue;
    const key = `${norm(q[1])}|${norm(q[2])}`;
    if (c.seen.has(key) || new Set(q.slice(2, 6).map((o) => o.trim())).size !== 4) continue;
    c.seen.add(key);
    // Every explanation should be a full sentence a pupil can learn from.
    if (q[6].length < 20) q[6] = `${q[6]} Work it out again to check.`;
    out.push(q);
  }
  if (out.length < 8) throw new Error(`"${spec.title}" (Basic ${c.g}) produced only ${out.length} questions`);
  return out;
}

/** Twelve topics a class (four a term), built for all six primary classes. */
export function buildPrimaryTerms(code: string, plan: (g: number) => Factory[], perTopic = 10): TermPlan[] {
  const seen = new Set<string>();
  const terms: TermPlan[] = [];
  for (let g = 1; g <= 6; g++) {
    const factories = plan(g);
    if (factories.length !== 12) throw new Error(`${code}: Basic ${g} needs 12 topics`);
    for (let term = 1; term <= 3; term++) {
      const topics: PackTopic[] = factories.slice((term - 1) * 4, term * 4).map((f, i) => {
        const c = makeCtx(g, `${code}-${g}-${term}-${i}`, seen);
        const spec = f(c);
        return {
          week: i * 3 + 1,
          title: spec.title,
          subtopics: spec.subtopics,
          objectives: spec.objectives,
          lesson: { title: spec.title, summary: spec.summary, minutes: g <= 3 ? 20 : g <= 6 ? 30 : 40, notes: spec.notes, examples: spec.examples },
          questions: questions(c, spec, perTopic),
        };
      });
      terms.push({ classCode: PRIMARY_CLASSES[g - 1], term: term as 1 | 2 | 3, topics });
    }
  }
  return terms;
}

/** Largest number a class normally works with. */
export const top = (g: number) => [10, 20, 50, 100, 500, 1000][g - 1];
export const level = (g: number): Diff => (g <= 2 ? "E" : g <= 4 ? "M" : "H");

/* ------------------------------------------------- fact-based (written) topics */

/** [question, answer, wrong, wrong, wrong, explanation (optional)] */
export type Fact = [string, string, string, string, string, string?];
export interface FactTopic {
  title: string;
  summary: string;
  subtopics: string[];
  objectives: string[];
  notes: string;
  examples: string;
  facts: Fact[];
}

/** Twelve written topics for one class: four a term, in the order given. */
export function factTerms(classCode: ClassCode, topics: FactTopic[], footer = ""): TermPlan[] {
  if (topics.length !== 12) throw new Error(`${classCode} needs 12 topics, has ${topics.length}`);
  const g = ALL_CLASSES.indexOf(classCode) + 1;
  return [1, 2, 3].map((term) => ({
    classCode,
    term: term as 1 | 2 | 3,
    topics: topics.slice((term - 1) * 4, term * 4).map((t, i) => ({
      week: i * 3 + 1,
      title: t.title,
      subtopics: t.subtopics,
      objectives: t.objectives,
      lesson: { title: t.title, summary: t.summary, minutes: g <= 3 ? 20 : 30, notes: t.notes + footer, examples: `${t.examples}

**Try it yourself.** Close your book and explain this topic to a friend in your own words. Then answer the practice questions.` },
      questions: t.facts.map(([stem, answer, a, b, c, why], n): Q => {
        const base: Diff = g <= 2 ? "E" : g <= 4 ? "M" : "H";
        const d: Diff = n < 3 ? "E" : n < 6 ? (base === "E" ? "E" : "M") : base;
        return [d, stem, answer, a, b, c, why && why.length >= 15 ? why : `The correct answer is "${answer}". ${why ?? "Read the lesson notes again to see why."}`];
      }),
    })),
  }));
}

/* ------------------------------------------------------------ compact authoring */

const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

/**
 * A written topic in its shortest form: title, one-sentence summary, notes with "## " headings and
 * the facts. Sub-topics and objectives come from the headings; worked examples from the first facts.
 */
export function L(title: string, summary: string, notes: string, facts: Fact[]): FactTopic {
  const heads = [...notes.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  const subtopics = heads.slice(0, 4);
  if (subtopics.length < 2) subtopics.push(...[title, "Lessons from the topic"].slice(0, 2 - subtopics.length));
  const objectives = subtopics.slice(0, 3).map((h) => `Explain ${lower(h.replace(/[?:]$/, ""))}`);
  if (objectives.length < 3) objectives.push("State the main lessons of the topic");
  return {
    title,
    summary,
    subtopics,
    objectives,
    notes,
    examples: facts
      .slice(0, 3)
      .map(([stem, answer, , , , why], i) => `**Example ${i + 1}.** ${stem}${/[?.]$/.test(stem) ? "" : " ..."}\n**${answer}**. ${why ?? ""}`)
      .join("\n\n"),
    facts,
  };
}

/** [word or phrase in the language, its meaning in English] */
export type Word = [string, string];
export interface VocabSpec {
  title: string;
  summary: string;
  /** A paragraph or two in Markdown that introduces the topic. */
  intro: string;
  words: Word[];
  /** Further notes placed after the word table (grammar rule, dialogue, culture). */
  more?: string;
  /** Extra hand-written questions. */
  facts?: Fact[];
}

/**
 * Builds a language topic from a word list: a table for the notes, and questions both ways
 * ("What is the X word for …?" and "… means"). Wrong options are other words of the same topic.
 */
export function vocabTopic(lang: string, v: VocabSpec, seen: Set<string>): FactTopic {
  const { words } = v;
  if (words.length < 8) throw new Error(`${v.title}: at least 8 words are needed`);
  const others = (i: number, pick: (w: Word) => string) => {
    const right = pick(words[i]);
    const out: string[] = [];
    for (let k = 1; k < words.length && out.length < 3; k++) {
      const cand = pick(words[(i + k * 3) % words.length]);
      if (cand !== right && !out.includes(cand)) out.push(cand);
    }
    for (let k = 1; k < words.length && out.length < 3; k++) {
      const cand = pick(words[(i + k) % words.length]);
      if (cand !== right && !out.includes(cand)) out.push(cand);
    }
    return out as [string, string, string];
  };
  const facts: Fact[] = [...(v.facts ?? [])];
  words.forEach(([w, en], i) => {
    const forward = i % 2 === 0;
    const stem = forward ? `What is the ${lang} for "${en}"?` : `In ${lang}, "${w}" means`;
    const key = stem.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    const [a, b, c] = forward ? others(i, (x) => x[0]) : others(i, (x) => x[1]);
    facts.push([stem, forward ? w : en, a, b, c, `"${w}" is the ${lang} for "${en}".`]);
  });
  const notes = `${v.intro}\n\n## Words to learn\n| ${lang} | English |\n|---|---|\n${words.map(([w, en]) => `| **${w}** | ${en} |`).join("\n")}${v.more ? `\n\n${v.more}` : ""}`;
  const heads = [...notes.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim()).slice(0, 4);
  if (heads.length < 2) heads.unshift(v.title);
  return {
    title: v.title,
    summary: v.summary,
    subtopics: heads,
    objectives: [`Say and read the ${lang} words for this topic`, "Give the English meaning of each word", "Use the words in short sentences"],
    notes,
    examples: words
      .slice(0, 4)
      .map(([w, en], i) => `**Example ${i + 1}.** How do we say "${en}" in ${lang}?\n**${w}**.`)
      .join("\n\n"),
    facts: facts.slice(0, 12),
  };
}

/** A whole written subject for the primary classes given, twelve topics a class. */
export function factPack(code: string, name: string, byClass: Partial<Record<ClassCode, FactTopic[]>>, footer: string, entrance = false): SubjectPack {
  const classes = ALL_CLASSES.filter((c) => byClass[c]);
  return { code, name, version: "2026.1", classes, entrance, terms: classes.flatMap((c) => factTerms(c, byClass[c]!, footer)) };
}

/** Shortest way to write a language topic: title, summary, intro (starting with a "## " heading), words, further notes. */
export const V = (title: string, summary: string, intro: string, words: Word[], more?: string): VocabSpec => ({ title, summary, intro, words, more });

export const LANGUAGE_FOOTER =
  "\n\n## How to practise\n- Say each word aloud three times, slowly and clearly.\n- Cover the English column and recall the meaning; then cover the other column and recall the word.\n- Use two of the words in a short sentence of your own.\n- Use what you have learnt to greet or speak to someone at home today.";

/** A whole primary language subject built from word lists, twelve topics a class. */
export function vocabPack(code: string, name: string, lang: string, byClass: Partial<Record<ClassCode, VocabSpec[]>>, footer = LANGUAGE_FOOTER): SubjectPack {
  const seen = new Set<string>();
  const classes = ALL_CLASSES.filter((c) => byClass[c]);
  return { code, name, version: "2026.1", classes, terms: classes.flatMap((c) => factTerms(c, byClass[c]!.map((v) => vocabTopic(lang, v, seen)), footer)) };
}
