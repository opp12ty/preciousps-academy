/**
 * Original Junior Secondary (JSS1–JSS3) seed content for Precious PS Academy — written for this
 * platform, not copied from BECE, Common Entrance or any examination body. Mathematics answers are
 * computed, so every keyed option is correct by construction and no distractor equals the answer.
 */
import { seededRng, type Rng } from "@/core/exam-engine";

export type JssClass = "JSS1" | "JSS2" | "JSS3";

export interface JssQ {
  topic: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  stem: string;
  correct: string;
  distractors: string[];
  explanation: string;
  classCode: JssClass;
}

const int = (rng: Rng, a: number, b: number) => a + Math.floor(rng() * (b - a + 1));
const pick = <T,>(rng: Rng, xs: readonly T[]) => xs[Math.floor(rng() * xs.length)];
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
const lcm = (a: number, b: number) => (a * b) / gcd(a, b);
const fmt = (n: number) => n.toLocaleString("en-NG");
const frac = (n: number, d: number) => {
  const g = gcd(n, d);
  const [nn, dd] = [n / g, d / g];
  return dd === 1 ? `$${nn}$` : `$\\frac{${nn}}{${dd}}$`;
};

/** Keeps numeric distractors that differ from the answer and from each other. */
function numeric(correct: number, candidates: number[], render: (n: number) => string = (n) => fmt(n)) {
  const seen = new Set<number>([correct]);
  const out: string[] = [];
  for (const c of candidates) {
    if (!Number.isFinite(c) || seen.has(c)) continue;
    seen.add(c);
    out.push(render(c));
  }
  return { correct: render(correct), distractors: out.slice(0, 3) };
}

/** Same for fractions: compares by value so an unreduced twin of the answer is never offered. */
function fractions(correct: [number, number], candidates: [number, number][]) {
  const val = ([n, d]: [number, number]) => n / d;
  const seen = [val(correct)];
  const out: string[] = [];
  for (const c of candidates) {
    if (c[1] === 0 || c[0] <= 0 || seen.some((v) => Math.abs(v - val(c)) < 1e-9)) continue;
    seen.push(val(c));
    out.push(frac(c[0], c[1]));
  }
  return { correct: frac(correct[0], correct[1]), distractors: out.slice(0, 3) };
}

type Gen = (r: Rng) => JssQ | null;

const gens: Gen[] = [
  // Whole numbers and place value (JSS1)
  (r) => {
    const digits = [int(r, 1, 9), int(r, 0, 9), int(r, 0, 9), int(r, 0, 9), int(r, 0, 9)];
    const pos = int(r, 1, 3); // 1 = hundreds, 2 = thousands, 3 = ten thousands
    const place = [100, 1000, 10000][pos - 1];
    const d = digits[4 - (pos + 1)];
    if (d === 0 || digits.filter((x) => x === d).length > 1) return null;
    const n = Number(digits.join(""));
    const o = numeric(d * place, [d * place * 10, d * place / 10, d, d * place * 100]);
    return { topic: "Whole numbers and place value", difficulty: "EASY", classCode: "JSS1", stem: `What is the value of the digit ${d} in ${fmt(n)}?`, ...o, explanation: `The ${d} is in the ${["hundreds", "thousands", "ten thousands"][pos - 1]} place, so its value is ${d} × ${fmt(place)} = ${fmt(d * place)}.` };
  },
  // Factors, HCF and LCM (JSS1)
  (r) => {
    const g = int(r, 2, 9), m = int(r, 2, 7), n = int(r, 2, 7);
    if (m === n || gcd(m, n) !== 1) return null;
    const a = g * m, b = g * n;
    const o = numeric(g, [lcm(a, b), g * Math.min(m, n), Math.abs(a - b), a + b]);
    return { topic: "Factors, HCF and LCM", difficulty: "EASY", classCode: "JSS1", stem: `Find the HCF (highest common factor) of ${a} and ${b}.`, ...o, explanation: `${a} = ${g} × ${m} and ${b} = ${g} × ${n}. Since ${m} and ${n} share no common factor, the HCF is ${g}.` };
  },
  (r) => {
    const a = int(r, 4, 15), b = int(r, 4, 15);
    if (a === b || a % b === 0 || b % a === 0) return null;
    const L = lcm(a, b);
    const o = numeric(L, [a * b, gcd(a, b), a + b, L * 2]);
    return { topic: "Factors, HCF and LCM", difficulty: "MEDIUM", classCode: "JSS1", stem: `Find the LCM (lowest common multiple) of ${a} and ${b}.`, ...o, explanation: `LCM = (${a} × ${b}) ÷ HCF = ${a * b} ÷ ${gcd(a, b)} = ${L}.` };
  },
  // Fractions (JSS1)
  (r) => {
    const b = int(r, 2, 9), d = int(r, 2, 9);
    const a = int(r, 1, b - 1), c = int(r, 1, d - 1);
    if (b === d) return null;
    const num = a * d + c * b, den = b * d;
    const o = fractions([num, den], [[a + c, b + d], [a * c, b * d], [Math.abs(a * d - c * b), den], [a + c, den]]);
    return { topic: "Fractions", difficulty: "EASY", classCode: "JSS1", stem: `Simplify ${frac(a, b)} + ${frac(c, d)}.`, ...o, explanation: `Use a common denominator of ${den}: $\\frac{${a * d}}{${den}} + \\frac{${c * b}}{${den}} = \\frac{${num}}{${den}}$, which simplifies to ${frac(num, den)}.` };
  },
  (r) => {
    const b = int(r, 2, 9), d = int(r, 2, 9);
    const a = int(r, 1, b - 1), c = int(r, 1, d - 1);
    const o = fractions([a * c, b * d], [[a + c, b + d], [a * d, b * c], [a * d + c * b, b * d]]);
    return { topic: "Fractions", difficulty: "MEDIUM", classCode: "JSS1", stem: `Evaluate ${frac(a, b)} × ${frac(c, d)}.`, ...o, explanation: `Multiply numerators and denominators: $\\frac{${a} \\times ${c}}{${b} \\times ${d}} = \\frac{${a * c}}{${b * d}}$, which simplifies to ${frac(a * c, b * d)}.` };
  },
  // Percentages (JSS1–JSS2)
  (r) => {
    const p = pick(r, [10, 20, 25, 40, 50, 75] as const), n = int(r, 2, 30) * 20;
    const ans = (p * n) / 100;
    const o = numeric(ans, [n - ans, (p * n) / 10, p + n, ans * 2], (x) => `₦${fmt(x)}`);
    return { topic: "Percentages", difficulty: "EASY", classCode: "JSS1", stem: `Find ${p}% of ₦${fmt(n)}.`, ...o, explanation: `${p}% of ₦${fmt(n)} = ${p}/100 × ${fmt(n)} = ₦${fmt(ans)}.` };
  },
  (r) => {
    const cost = int(r, 4, 40) * 100, p = pick(r, [10, 20, 25, 50] as const);
    const sell = cost + (cost * p) / 100;
    const o = numeric(sell, [cost - (cost * p) / 100, (cost * p) / 100, cost + p, sell + cost], (x) => `₦${fmt(x)}`);
    return { topic: "Percentages", difficulty: "MEDIUM", classCode: "JSS2", stem: `A trader buys an item for ₦${fmt(cost)} and sells it at a profit of ${p}%. What is the selling price?`, ...o, explanation: `Profit = ${p}% of ₦${fmt(cost)} = ₦${fmt((cost * p) / 100)}. Selling price = ₦${fmt(cost)} + ₦${fmt((cost * p) / 100)} = ₦${fmt(sell)}.` };
  },
  // Simple equations (JSS2)
  (r) => {
    const a = int(r, 2, 9), x = int(r, 1, 12), b = int(r, 1, 20);
    const c = a * x + b;
    const o = numeric(x, [c - b, x + 1, x + 2, Math.max(1, x - 1)]);
    return { topic: "Simple equations", difficulty: "MEDIUM", classCode: "JSS2", stem: `Solve for $x$: $${a}x + ${b} = ${c}$.`, ...o, explanation: `Subtract ${b} from both sides: $${a}x = ${c - b}$. Divide by ${a}: $x = ${x}$.` };
  },
  // Perimeter and area (JSS1–JSS2)
  (r) => {
    const l = int(r, 4, 20), w = int(r, 2, 15);
    if (l === w) return null;
    const o = numeric(2 * (l + w), [l * w, l + w, 2 * l + w, 4 * l], (n) => `${n} cm`);
    return { topic: "Perimeter and area", difficulty: "EASY", classCode: "JSS1", stem: `A rectangle is ${l} cm long and ${w} cm wide. Find its perimeter.`, ...o, explanation: `Perimeter = 2(l + w) = 2(${l} + ${w}) = ${2 * (l + w)} cm.` };
  },
  (r) => {
    const b = int(r, 2, 12) * 2, h = int(r, 3, 15);
    const o = numeric((b * h) / 2, [b * h, b + h, (b * h) / 4, 2 * (b + h)], (n) => `${n} cm²`);
    return { topic: "Perimeter and area", difficulty: "MEDIUM", classCode: "JSS2", stem: `Find the area of a triangle with base ${b} cm and height ${h} cm.`, ...o, explanation: `Area = ½ × base × height = ½ × ${b} × ${h} = ${(b * h) / 2} cm².` };
  },
  // Angles (JSS2)
  (r) => {
    const a = int(r, 25, 80), b = int(r, 25, 80);
    const c = 180 - a - b;
    if (c <= 5) return null;
    const o = numeric(c, [360 - a - b, a + b, c + 10, c - 5], (n) => `${n}°`);
    return { topic: "Angles", difficulty: "EASY", classCode: "JSS2", stem: `Two angles of a triangle are ${a}° and ${b}°. Find the third angle.`, ...o, explanation: `Angles in a triangle add up to 180°: 180° − ${a}° − ${b}° = ${c}°.` };
  },
  // Simple interest (JSS3)
  (r) => {
    const P = int(r, 2, 40) * 1000, R = pick(r, [2, 4, 5, 8, 10] as const), T = int(r, 2, 5);
    const I = (P * R * T) / 100;
    const o = numeric(I, [P * R * T, P + I, (P * R) / 100, I * 2], (x) => `₦${fmt(x)}`);
    return { topic: "Simple interest", difficulty: "MEDIUM", classCode: "JSS3", stem: `Find the simple interest on ₦${fmt(P)} for ${T} years at ${R}% per annum.`, ...o, explanation: `I = PRT ÷ 100 = ${fmt(P)} × ${R} × ${T} ÷ 100 = ₦${fmt(I)}.` };
  },
  // Statistics — mean (JSS3)
  (r) => {
    const mean = int(r, 5, 30);
    const xs = [mean - 3, mean + 1, mean + 4, mean - 2, mean];
    const shuffled = xs.slice().sort(() => r() - 0.5);
    const total = xs.reduce((s, x) => s + x, 0);
    const o = numeric(mean, [total, 7, mean + 1, mean - 1]);
    return { topic: "Statistics", difficulty: "EASY", classCode: "JSS3", stem: `Find the mean of these scores: ${shuffled.join(", ")}.`, ...o, explanation: `Mean = total ÷ number of scores = ${total} ÷ 5 = ${mean}.` };
  },
  // Number bases (JSS1)
  (r) => {
    const n = int(r, 5, 31);
    const b = (x: number) => x.toString(2);
    const reversed = parseInt(b(n).split("").reverse().join(""), 2);
    const candidates = [n + 1, n - 1, reversed, n + 2].filter((x, i, arr) => x !== n && arr.indexOf(x) === i).slice(0, 3);
    return { topic: "Number bases", difficulty: "MEDIUM", classCode: "JSS1", stem: `Convert $${n}_{10}$ to base two.`, correct: `$${b(n)}_2$`, distractors: candidates.map((x) => `$${b(x)}_2$`), explanation: `Divide by 2 repeatedly and read the remainders from the bottom up: $${n}_{10} = ${b(n)}_2$.` };
  },
  // Directed numbers (JSS1)
  (r) => {
    const a = int(r, 3, 15), b = int(r, 2, 20);
    const ans = -a + b;
    const o = numeric(ans, [a + b, -a - b, a - b], (x) => `$${x}$`);
    return { topic: "Directed numbers", difficulty: "EASY", classCode: "JSS1", stem: `Simplify $(-${a}) + ${b}$.`, ...o, explanation: `Start at −${a} on the number line and move ${b} steps to the right: ${ans}.` };
  },
  // Ratio and proportion (JSS2)
  (r) => {
    const a = int(r, 1, 5), b = int(r, 2, 7), k = int(r, 2, 20) * 100;
    if (a === b || gcd(a, b) !== 1) return null;
    const total = (a + b) * k;
    const o = numeric(Math.max(a, b) * k, [Math.min(a, b) * k, total / 2, total - k, Math.max(a, b) * 100], (x) => `₦${fmt(x)}`);
    return { topic: "Ratio and proportion", difficulty: "MEDIUM", classCode: "JSS2", stem: `Share ₦${fmt(total)} between Ade and Bisi in the ratio ${a} : ${b}. What is the larger share?`, ...o, explanation: `Total parts = ${a + b}. One part = ₦${fmt(total)} ÷ ${a + b} = ₦${fmt(k)}. Larger share = ${Math.max(a, b)} × ₦${fmt(k)} = ₦${fmt(Math.max(a, b) * k)}.` };
  },
  // Squares and square roots (JSS1)
  (r) => {
    const n = int(r, 4, 25);
    const o = numeric(n, [n * n, n * 2, n + 1, n - 1]);
    return { topic: "Squares and square roots", difficulty: "EASY", classCode: "JSS1", stem: `Find $\\sqrt{${n * n}}$.`, ...o, explanation: `${n} × ${n} = ${n * n}, so $\\sqrt{${n * n}} = ${n}$.` };
  },
];

export function generateJssMathBank(count: number, seed = 20261001): JssQ[] {
  const rng = seededRng(seed);
  const out: JssQ[] = [];
  const seen = new Set<string>();
  let guard = 0;
  while (out.length < count && guard++ < count * 60) {
    const q = gens[Math.floor(rng() * gens.length)](rng);
    if (!q || seen.has(q.stem) || q.distractors.length < 3) continue;
    seen.add(q.stem);
    out.push(q);
  }
  return out;
}

/** Teacher-style items: [topic, difficulty, stem, correct, d1, d2, d3, explanation]. */
type Row = [string, "EASY" | "MEDIUM" | "HARD", string, string, string, string, string, string];

export const JSS_SUBJECT_BANK: Record<string, Row[]> = {
  BSC: [
    ["Living and non-living things", "EASY", "Which of these is a living thing?", "mushroom", "stone", "plastic bottle", "water", "A mushroom feeds, grows and reproduces; the others do not."],
    ["Living and non-living things", "EASY", "The process by which living things produce young ones of their own kind is called ___", "reproduction", "respiration", "excretion", "nutrition", "Reproduction keeps a species from dying out."],
    ["Living and non-living things", "MEDIUM", "The removal of waste products of body processes from a living thing is called ___", "excretion", "digestion", "ingestion", "irritability", "Excretion removes wastes such as carbon dioxide and urea."],
    ["Matter", "EASY", "Which state of matter has a definite volume but no definite shape?", "liquid", "solid", "gas", "vapour", "A liquid keeps its volume but takes the shape of its container."],
    ["Matter", "MEDIUM", "The change of a solid directly into a gas, without first becoming a liquid, is called ___", "sublimation", "evaporation", "condensation", "melting", "Naphthalene (camphor) balls sublime."],
    ["Energy", "EASY", "The main source of energy for the Earth is the ___", "sun", "moon", "wind", "ocean", "Energy from the sun drives weather and plant growth."],
    ["Energy", "MEDIUM", "A torch battery changes chemical energy into ___", "electrical energy", "sound energy", "nuclear energy", "wind energy", "A battery converts stored chemical energy into electrical energy."],
    ["Plants", "MEDIUM", "Green plants make their own food by the process of ___", "photosynthesis", "respiration", "transpiration", "germination", "Chlorophyll traps light energy to make food from carbon dioxide and water."],
    ["Human body", "EASY", "Which organ pumps blood round the body?", "heart", "lungs", "kidney", "liver", "The heart is a muscular pump."],
    ["Measurement", "EASY", "The SI unit of length is the ___", "metre", "kilogram", "second", "litre", "Length is measured in metres (m)."],
    ["Health", "MEDIUM", "Malaria parasites are passed to humans by the bite of the female ___ mosquito.", "Anopheles", "Culex", "Aedes", "Mansonia", "The female Anopheles mosquito carries the malaria parasite."],
    ["Environment", "MEDIUM", "Planting trees on land where there were no trees before is called ___", "afforestation", "deforestation", "erosion", "irrigation", "Afforestation helps to check erosion and desert encroachment."],
  ],
  BTE: [
    ["Safety", "EASY", "On a safety sign, the colour red usually means ___", "stop or prohibited", "safe condition", "information", "first aid", "Red is used for prohibition and stop signs."],
    ["Materials", "EASY", "Which of these materials is a metal?", "copper", "rubber", "glass", "wood", "Copper is a metal that conducts heat and electricity well."],
    ["Drawing instruments", "EASY", "Which instrument is used to draw circles and arcs?", "pair of compasses", "T-square", "set square", "protractor", "A pair of compasses draws circles and arcs."],
    ["Drawing instruments", "MEDIUM", "A protractor is used to measure ___", "angles", "lengths", "masses", "temperatures", "A protractor measures angles in degrees."],
    ["Woodwork tools", "MEDIUM", "Which tool is used to drive nails into wood?", "claw hammer", "screwdriver", "hacksaw", "spanner", "A claw hammer drives in and pulls out nails."],
    ["Energy", "MEDIUM", "Which of these is a renewable source of energy?", "solar energy", "petrol", "coal", "kerosene", "Solar energy is replaced naturally; fossil fuels are not."],
  ],
  SOS: [
    ["The family", "EASY", "A family made up of a father, a mother and their children only is called a ___", "nuclear family", "extended family", "clan", "community", "The nuclear family is the smallest family unit."],
    ["Culture", "EASY", "The total way of life of a group of people is called their ___", "culture", "language", "religion", "occupation", "Culture includes language, food, dress, beliefs and customs."],
    ["Socialisation", "MEDIUM", "The process by which a child learns the values and norms of society is called ___", "socialisation", "urbanisation", "migration", "industrialisation", "The family, school and peer group are agents of socialisation."],
    ["National symbols", "EASY", "The colours of the Nigerian flag are ___", "green and white", "green and red", "white and blue", "green and yellow", "The flag has two green bands and one white band."],
    ["Marriage", "MEDIUM", "A marriage between one man and one woman is called ___", "monogamy", "polygamy", "polyandry", "courtship", "Monogamy means one husband and one wife."],
    ["Transport", "MEDIUM", "Which means of land transport is best for carrying heavy goods over long distances at low cost?", "rail", "motorcycle", "bicycle", "wheelbarrow", "Trains carry bulky goods cheaply over long distances."],
    ["Population", "MEDIUM", "The official counting of all the people in a country at a particular time is called a ___", "census", "election", "survey", "register", "A census counts the whole population."],
    ["Environment", "EASY", "Which of these is a man-made feature of the environment?", "bridge", "river", "mountain", "forest", "Bridges are built by people."],
  ],
  ENG: [
    ["Parts of speech", "EASY", "In the sentence 'The boy ran quickly', the word 'boy' is a ___", "noun", "verb", "adverb", "adjective", "'Boy' names a person, so it is a noun."],
    ["Plurals", "EASY", "What is the plural of 'child'?", "children", "childs", "childes", "childrens", "'Child' has the irregular plural 'children'."],
    ["Tenses", "EASY", "Choose the correct option: Yesterday, Ada ___ to the market.", "went", "go", "goes", "going", "'Went' is the past tense of 'go'."],
    ["Antonyms", "EASY", "Choose the word opposite in meaning to 'ancient'.", "modern", "old", "early", "historic", "'Ancient' means very old; its opposite is 'modern'."],
    ["Synonyms", "MEDIUM", "Choose the word nearest in meaning to 'huge'.", "enormous", "tiny", "narrow", "weak", "'Huge' and 'enormous' both mean very large."],
    ["Pronouns", "MEDIUM", "Choose the correct option: Chinedu and ___ are going to school.", "I", "me", "myself", "mine", "Use the subject pronoun 'I' because it is part of the subject."],
    ["Spelling", "MEDIUM", "Which word is spelt correctly?", "necessary", "neccessary", "necesary", "nessecary", "The correct spelling is 'necessary'."],
    ["Punctuation", "EASY", "Which punctuation mark ends a direct question?", "question mark", "full stop", "comma", "colon", "A direct question ends with a question mark (?)."],
  ],
  CIV: [
    ["Values", "EASY", "Telling the truth at all times shows the value of ___", "honesty", "greed", "laziness", "pride", "Honesty means being truthful and fair."],
    ["Citizenship", "EASY", "A person who is a legal member of a country is called a ___", "citizen", "tourist", "visitor", "stranger", "A citizen has full rights and duties in a country."],
    ["Rights and duties", "MEDIUM", "Which of these is a duty of a good citizen?", "obeying the laws of the country", "refusing to pay tax", "damaging public property", "disrespecting elders", "Good citizens obey the law."],
    ["Road safety", "EASY", "Pedestrians should cross a busy road at the ___", "zebra crossing", "roundabout", "road bend", "middle of a junction", "Zebra crossings are marked for pedestrians to cross safely."],
  ],
};

/** Original JSS lessons (light Markdown + $LaTeX$), used with auto-marked classwork. */
export const JSS_LESSONS: { subject: string; topic: string; classCode?: JssClass; title: string; summary: string; minutes: number; body: string; examples: string; videoUrl?: string }[] = [
  {
    subject: "MTH",
    topic: "Fractions",
    classCode: "JSS1",
    title: "Adding and Multiplying Fractions",
    summary: "Add fractions with different denominators and multiply fractions, then simplify the answer.",
    minutes: 20,
    body: `## Parts of a fraction
In $\\frac{3}{4}$, the **numerator** is 3 (the parts taken) and the **denominator** is 4 (the equal parts in the whole).

## Adding fractions
1. Find a **common denominator** (the LCM of the denominators).
2. Change each fraction to an equivalent fraction with that denominator.
3. Add the numerators and keep the denominator.
4. Simplify.

## Multiplying fractions
Multiply the numerators together and the denominators together, then simplify:
$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$`,
    examples: `**Example 1.** $\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$

**Example 2.** $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$`,
  },
  {
    subject: "BSC",
    topic: "Living and non-living things",
    title: "Living and Non-living Things",
    summary: "Tell living things from non-living things using the characteristics of life.",
    minutes: 15,
    body: `## What makes something alive?
Living things show **all** of these characteristics (remember **MR NIGER D**):
- **M**ovement
- **R**espiration — releasing energy from food
- **N**utrition — feeding
- **I**rritability — responding to changes around them
- **G**rowth
- **E**xcretion — removing wastes
- **R**eproduction — producing young ones
- **D**eath

## Non-living things
Stones, water, air and a plastic bottle may move or change, but they do not feed, grow or reproduce on their own.`,
    examples: `**Example.** A seed is living: when planted it takes in water, grows and becomes a new plant. A stone never grows or reproduces, so it is non-living.`,
  },
];
