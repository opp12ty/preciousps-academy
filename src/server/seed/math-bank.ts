/**
 * Original, parametrically generated Mathematics questions (Precious PS original
 * content — not copied from any examination body). Answers are computed, so
 * every keyed option is correct by construction.
 */
import { seededRng, shuffle, type Rng } from "@/core/exam-engine";

export interface SeedQ {
  topic: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  stem: string;
  correct: string;
  distractors: string[];
  explanation: string;
  classCode: "SS1" | "SS2" | "SS3";
}

const int = (rng: Rng, a: number, b: number) => a + Math.floor(rng() * (b - a + 1));
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
const frac = (n: number, d: number) => {
  const g = gcd(n, d);
  const [nn, dd] = [n / g, d / g];
  return dd === 1 ? `$${nn}$` : `$\\frac{${nn}}{${dd}}$`;
};
const uniq = (correct: string, ds: string[]) => Array.from(new Set(ds.filter((d) => d !== correct))).slice(0, 3);

type Gen = (rng: Rng) => SeedQ | null;

const gens: Gen[] = [
  // Indices
  (r) => {
    const b = int(r, 2, 7), m = int(r, 2, 6), n = int(r, 2, 6);
    return { topic: "Indices", difficulty: "EASY", classCode: "SS1", stem: `Simplify $${b}^{${m}} \\times ${b}^{${n}}$.`, correct: `$${b}^{${m + n}}$`, distractors: [`$${b}^{${m * n}}$`, `$${b * b}^{${m + n}}$`, `$${b}^{${Math.abs(m - n) || m + n + 1}}$`], explanation: `When multiplying powers of the same base, add the indices: ${m} + ${n} = ${m + n}.` };
  },
  (r) => {
    const b = int(r, 2, 5), m = int(r, 5, 9), n = int(r, 1, 4);
    return { topic: "Indices", difficulty: "EASY", classCode: "SS1", stem: `Evaluate $\\dfrac{${b}^{${m}}}{${b}^{${n}}}$ as a power of ${b}.`, correct: `$${b}^{${m - n}}$`, distractors: [`$${b}^{${m + n}}$`, `$1^{${m - n}}$`, `$${b}^{${Math.round(m / n) === m - n ? m - n + 1 : Math.round(m / n)}}$`], explanation: `Subtract the indices when dividing: ${m} − ${n} = ${m - n}.` };
  },
  (r) => {
    const base = [4, 8, 9, 16, 25, 27, 32, 64][int(r, 0, 7)];
    const map: Record<number, [number, number]> = { 4: [2, 2], 8: [2, 3], 9: [3, 2], 16: [2, 4], 25: [5, 2], 27: [3, 3], 32: [2, 5], 64: [2, 6] };
    const [root, pow] = map[base];
    return { topic: "Indices", difficulty: "MEDIUM", classCode: "SS1", stem: `Evaluate $${base}^{\\frac{1}{${pow}}}$.`, correct: `$${root}$`, distractors: [`$${base / pow}$`, `$${root * 2}$`, `$${base * pow}$`], explanation: `$${base} = ${root}^{${pow}}$, so the ${pow === 2 ? "square" : pow === 3 ? "cube" : `${pow}th`} root is ${root}.` };
  },
  (r) => {
    const a = int(r, 2, 9);
    return { topic: "Indices", difficulty: "EASY", classCode: "SS1", stem: `What is the value of $${a}^{0} + ${a}^{-1}$?`, correct: frac(a + 1, a), distractors: [frac(1, a), `$${a}$`, `$0$`], explanation: `Any non-zero number to the power 0 is 1, and $${a}^{-1} = \\frac{1}{${a}}$. So the sum is $1 + \\frac{1}{${a}} = \\frac{${a + 1}}{${a}}$.` };
  },
  // Logarithms
  (r) => {
    const b = [2, 3, 5, 10][int(r, 0, 3)], k = int(r, 2, 4);
    return { topic: "Logarithms", difficulty: "EASY", classCode: "SS2", stem: `Evaluate $\\log_{${b}} ${b ** k}$.`, correct: `$${k}$`, distractors: [`$${k + 1}$`, `$${b * k}$`, `$${b ** k / b}$`], explanation: `$${b}^{${k}} = ${b ** k}$, so $\\log_{${b}} ${b ** k} = ${k}$.` };
  },
  (r) => {
    const a = int(r, 2, 6), b = int(r, 2, 6);
    return { topic: "Logarithms", difficulty: "MEDIUM", classCode: "SS2", stem: `Simplify $\\log_{10} ${a} + \\log_{10} ${b}$.`, correct: `$\\log_{10} ${a * b}$`, distractors: [`$\\log_{10} ${a + b}$`, `$\\log_{10} ${a}\\cdot\\log_{10} ${b}$`, `$\\log_{20} ${a * b}$`], explanation: `By the product law, $\\log x + \\log y = \\log(xy)$, and ${a} × ${b} = ${a * b}.` };
  },
  // Linear equations
  (r) => {
    const x = int(r, -6, 12), a = int(r, 2, 9), b = int(r, -15, 20);
    const c = a * x + b;
    const bs = b >= 0 ? `+ ${b}` : `- ${-b}`;
    return { topic: "Linear equations", difficulty: "EASY", classCode: "SS1", stem: `Solve for $x$: $${a}x ${bs} = ${c}$.`, correct: `$${x}$`, distractors: [`$${x + 1}$`, `$${-x || 2}$`, `$${(c + b) % a === 0 ? (c + b) / a : x + 2}$`], explanation: `Subtract ${b} from both sides: $${a}x = ${c - b}$, then divide by ${a}: $x = ${x}$.` };
  },
  (r) => {
    const x = int(r, 1, 9), y = int(r, 1, 9);
    const s = x + y, d = x - y;
    return { topic: "Simultaneous equations", difficulty: "MEDIUM", classCode: "SS2", stem: `If $x + y = ${s}$ and $x - y = ${d}$, find $x$.`, correct: `$${x}$`, distractors: [`$${y}$`, `$${s}$`, `$${x + 1 === y ? x + 2 : x + 1}$`], explanation: `Add the equations: $2x = ${s + d}$, so $x = ${x}$.` };
  },
  // Quadratics
  (r) => {
    const p = int(r, 1, 9), q = int(r, 1, 9);
    if (p === q) return null;
    const b = p + q, c = p * q;
    return { topic: "Quadratic equations", difficulty: "MEDIUM", classCode: "SS2", stem: `Find the roots of $x^2 - ${b}x + ${c} = 0$.`, correct: `$x = ${p}$ or $x = ${q}$`, distractors: [`$x = -${p}$ or $x = -${q}$`, `$x = ${p}$ or $x = -${q}$`, `$x = ${b}$ or $x = ${c}$`], explanation: `Factorise: $(x - ${p})(x - ${q}) = 0$, so $x = ${p}$ or $x = ${q}$.` };
  },
  (r) => {
    const p = int(r, 2, 8), q = int(r, 2, 8);
    return { topic: "Quadratic equations", difficulty: "MEDIUM", classCode: "SS2", stem: `What is the sum of the roots of $x^2 - ${p + q}x + ${p * q} = 0$?`, correct: `$${p + q}$`, distractors: [`$${p * q}$`, `$-${p + q}$`, `$${Math.abs(p - q) || p + q + 2}$`], explanation: `For $x^2 + bx + c = 0$ the sum of the roots is $-b$, i.e. ${p + q}.` };
  },
  // Fractions & percentages
  (r) => {
    const pct = [5, 10, 12, 15, 20, 25, 30, 40][int(r, 0, 7)], n = int(r, 4, 40) * 50;
    const ans = (pct * n) / 100;
    return { topic: "Percentages", difficulty: "EASY", classCode: "SS1", stem: `What is ${pct}% of ₦${n.toLocaleString("en-NG")}?`, correct: `₦${ans.toLocaleString("en-NG")}`, distractors: [`₦${(ans * 2).toLocaleString("en-NG")}`, `₦${(ans / 2).toLocaleString("en-NG")}`, `₦${(n - ans).toLocaleString("en-NG")}`], explanation: `${pct}% of ${n} = ${pct}/100 × ${n} = ${ans}.` };
  },
  (r) => {
    const a = int(r, 1, 5), b = int(r, a + 1, 9), c = int(r, 1, 5), d = int(r, c + 1, 9);
    const n = a * d + c * b, den = b * d;
    return { topic: "Fractions", difficulty: "EASY", classCode: "SS1", stem: `Simplify ${frac(a, b)} $+$ ${frac(c, d)}.`, correct: frac(n, den), distractors: [frac(a + c, b + d), frac(a * c, b * d), frac(n + 1, den)], explanation: `Use a common denominator ${den}: $\\frac{${a * d}}{${den}} + \\frac{${c * b}}{${den}} = ${frac(n, den).replace(/\$/g, "")}$.` };
  },
  // Simple interest
  (r) => {
    const P = int(r, 2, 20) * 1000, R = int(r, 2, 12), T = int(r, 2, 5);
    const I = (P * R * T) / 100;
    return { topic: "Simple interest", difficulty: "EASY", classCode: "SS1", stem: `Find the simple interest on ₦${P.toLocaleString("en-NG")} at ${R}% per annum for ${T} years.`, correct: `₦${I.toLocaleString("en-NG")}`, distractors: [`₦${((P * R) / 100).toLocaleString("en-NG")}`, `₦${(I + P).toLocaleString("en-NG")}`, `₦${((P * R * (T + 1)) / 100).toLocaleString("en-NG")}`], explanation: `$I = \\frac{PRT}{100} = \\frac{${P} \\times ${R} \\times ${T}}{100} = ${I}$.` };
  },
  // Surds
  (r) => {
    const k = [2, 3, 5][int(r, 0, 2)], m = int(r, 2, 6);
    return { topic: "Surds", difficulty: "MEDIUM", classCode: "SS1", stem: `Simplify $\\sqrt{${m * m * k}}$.`, correct: `$${m}\\sqrt{${k}}$`, distractors: [`$${k}\\sqrt{${m}}$`, `$${m * k}$`, `$${m * m}\\sqrt{${k}}$`], explanation: `$\\sqrt{${m * m * k}} = \\sqrt{${m * m}}\\times\\sqrt{${k}} = ${m}\\sqrt{${k}}$.` };
  },
  // Arithmetic progression
  (r) => {
    const a = int(r, 1, 12), d = int(r, 2, 7), n = int(r, 6, 20);
    const t = a + (n - 1) * d;
    return { topic: "Sequences and series", difficulty: "MEDIUM", classCode: "SS2", stem: `Find the ${n}th term of the arithmetic progression ${a}, ${a + d}, ${a + 2 * d}, …`, correct: `$${t}$`, distractors: [`$${a + n * d}$`, `$${t - d - 1}$`, `$${a * n}$`], explanation: `$T_n = a + (n-1)d = ${a} + (${n}-1)\\times ${d} = ${t}$.` };
  },
  (r) => {
    const a = int(r, 1, 5), d = int(r, 1, 5), n = int(r, 5, 12);
    const s = (n / 2) * (2 * a + (n - 1) * d);
    return { topic: "Sequences and series", difficulty: "HARD", classCode: "SS2", stem: `Find the sum of the first ${n} terms of the AP whose first term is ${a} and common difference is ${d}.`, correct: `$${s}$`, distractors: [`$${s + d * n}$`, `$${a + (n - 1) * d}$`, `$${n * (a + d)}$`], explanation: `$S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{${n}}{2}[${2 * a} + ${(n - 1) * d}] = ${s}$.` };
  },
  // Probability
  (r) => {
    const red = int(r, 2, 9), blue = int(r, 2, 9), green = int(r, 1, 6);
    const t = red + blue + green;
    return { topic: "Probability", difficulty: "EASY", classCode: "SS2", stem: `A bag contains ${red} red, ${blue} blue and ${green} green balls. A ball is picked at random. What is the probability that it is blue?`, correct: frac(blue, t), distractors: [frac(red, t), frac(blue, t - blue), frac(1, 3)], explanation: `P(blue) = number of blue balls ÷ total = ${blue}/${t}.` };
  },
  (r) => {
    const target = int(r, 3, 11);
    const ways = 6 - Math.abs(7 - target);
    return { topic: "Probability", difficulty: "MEDIUM", classCode: "SS3", stem: `Two fair dice are thrown. What is the probability that the sum of the scores is ${target}?`, correct: frac(ways, 36), distractors: [frac(1, 6), frac(ways + 1, 36), frac(1, target)], explanation: `There are 36 equally likely outcomes and ${ways} of them give a sum of ${target}.` };
  },
  // Statistics
  (r) => {
    const xs = Array.from({ length: 5 }, () => int(r, 2, 20));
    const sum = xs.reduce((a, b) => a + b, 0);
    if (sum % 5) return null;
    const mean = sum / 5;
    const sorted = [...xs].sort((a, b) => a - b);
    return { topic: "Statistics", difficulty: "EASY", classCode: "SS2", stem: `Find the mean of ${xs.join(", ")}.`, correct: `$${mean}$`, distractors: [`$${sorted[2] === mean ? mean + 1 : sorted[2]}$`, `$${sum}$`, `$${mean + 2}$`], explanation: `Mean = sum ÷ number of values = ${sum} ÷ 5 = ${mean}.` };
  },
  (r) => {
    const xs = Array.from({ length: 7 }, () => int(r, 1, 30));
    const s = [...xs].sort((a, b) => a - b);
    const med = s[3];
    return { topic: "Statistics", difficulty: "EASY", classCode: "SS2", stem: `Find the median of ${xs.join(", ")}.`, correct: `$${med}$`, distractors: [`$${xs[3] === med ? s[2] === med ? med + 1 : s[2] : xs[3]}$`, `$${s[4] === med ? med + 2 : s[4]}$`, `$${Math.round(xs.reduce((a, b) => a + b, 0) / 7) === med ? med + 3 : Math.round(xs.reduce((a, b) => a + b, 0) / 7)}$`], explanation: `Arrange in order: ${s.join(", ")}. The middle (4th) value is ${med}.` };
  },
  // Trigonometry
  (r) => {
    const table: [string, string, string[]][] = [
      ["\\sin 30^\\circ", "\\frac{1}{2}", ["\\frac{\\sqrt{3}}{2}", "1", "\\frac{\\sqrt{2}}{2}"]],
      ["\\cos 60^\\circ", "\\frac{1}{2}", ["\\frac{\\sqrt{3}}{2}", "0", "1"]],
      ["\\tan 45^\\circ", "1", ["\\frac{1}{2}", "\\sqrt{3}", "0"]],
      ["\\sin 90^\\circ", "1", ["0", "\\frac{1}{2}", "-1"]],
      ["\\cos 30^\\circ", "\\frac{\\sqrt{3}}{2}", ["\\frac{1}{2}", "\\sqrt{3}", "1"]],
      ["\\tan 60^\\circ", "\\sqrt{3}", ["\\frac{1}{\\sqrt{3}}", "1", "\\frac{\\sqrt{3}}{2}"]],
    ];
    const [f, v, ds] = table[int(r, 0, table.length - 1)];
    return { topic: "Trigonometry", difficulty: "EASY", classCode: "SS2", stem: `Without tables, evaluate $${f}$.`, correct: `$${v}$`, distractors: ds.map((d) => `$${d}$`), explanation: `This is a special angle value: $${f} = ${v}$.` };
  },
  (r) => {
    const [a, b, c] = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10], [7, 24, 25]][int(r, 0, 4)];
    return { topic: "Trigonometry", difficulty: "MEDIUM", classCode: "SS2", stem: `In a right-angled triangle the side opposite angle $\\theta$ is ${a} cm and the hypotenuse is ${c} cm. Find $\\cos\\theta$.`, correct: frac(b, c), distractors: [frac(a, c), frac(a, b), frac(c, b)], explanation: `The adjacent side is $\\sqrt{${c}^2 - ${a}^2} = ${b}$, so $\\cos\\theta = \\frac{${b}}{${c}}$.` };
  },
  // Geometry
  (r) => {
    const n = int(r, 5, 12);
    const each = ((n - 2) * 180) / n;
    if (!Number.isInteger(each)) return null;
    return { topic: "Plane geometry", difficulty: "MEDIUM", classCode: "SS1", stem: `Find the size of each interior angle of a regular polygon with ${n} sides.`, correct: `$${each}^\\circ$`, distractors: [`$${360 / n}^\\circ$`, `$${(n - 2) * 180}^\\circ$`, `$${each + 10}^\\circ$`], explanation: `Sum of interior angles $= (n-2)\\times 180^\\circ = ${(n - 2) * 180}^\\circ$; each angle $= ${(n - 2) * 180} \\div ${n} = ${each}^\\circ$.` };
  },
  (r) => {
    const rad = int(r, 2, 14);
    return { topic: "Mensuration", difficulty: "EASY", classCode: "SS1", stem: `Find the area of a circle of radius ${rad * 7} cm. (Take $\\pi = \\frac{22}{7}$)`, correct: `$${22 * rad * rad * 7}\\text{ cm}^2$`, distractors: [`$${44 * rad}\\text{ cm}^2$`, `$${22 * rad * rad}\\text{ cm}^2$`, `$${11 * rad * rad * 7}\\text{ cm}^2$`], explanation: `$A = \\pi r^2 = \\frac{22}{7}\\times ${rad * 7}^2 = ${22 * rad * rad * 7}\\text{ cm}^2$.` };
  },
  // Matrices
  (r) => {
    const [a, b, c, d] = [int(r, 1, 9), int(r, 1, 9), int(r, 1, 9), int(r, 1, 9)];
    const det = a * d - b * c;
    return { topic: "Matrices and determinants", difficulty: "MEDIUM", classCode: "SS3", stem: `Find the determinant of $\\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$.`, correct: `$${det}$`, distractors: [`$${a * d + b * c}$`, `$${a * b - c * d}$`, `$${-det || 1}$`], explanation: `$\\det = ad - bc = ${a}\\times${d} - ${b}\\times${c} = ${det}$.` };
  },
  // Calculus
  (r) => {
    const a = int(r, 2, 9), n = int(r, 2, 5), b = int(r, 1, 9);
    return { topic: "Differentiation", difficulty: "MEDIUM", classCode: "SS3", stem: `Find $\\dfrac{dy}{dx}$ if $y = ${a}x^{${n}} + ${b}x$.`, correct: `$${a * n}x^{${n - 1}} + ${b}$`, distractors: [`$${a}x^{${n - 1}} + ${b}$`, `$${a * n}x^{${n}} + ${b}$`, `$${a * n}x^{${n - 1}}$`], explanation: `Differentiate term by term: $\\frac{d}{dx}(${a}x^{${n}}) = ${a * n}x^{${n - 1}}$ and $\\frac{d}{dx}(${b}x) = ${b}$.` };
  },
  (r) => {
    const a = int(r, 1, 6), b = int(r, 1, 8);
    const upper = int(r, 1, 3);
    const val = a * upper * upper + b * upper; // ∫(2a x + b) from 0 to upper
    return { topic: "Integration", difficulty: "HARD", classCode: "SS3", stem: `Evaluate $\\displaystyle\\int_0^{${upper}} (${2 * a}x + ${b})\\,dx$.`, correct: `$${val}$`, distractors: [`$${2 * a * upper + b}$`, `$${val + b}$`, `$${a * upper + b}$`], explanation: `$\\int (${2 * a}x + ${b})dx = ${a}x^2 + ${b}x$; at $x=${upper}$ this is ${val}, and at 0 it is 0.` };
  },
  // Number bases
  (r) => {
    const n = int(r, 5, 60);
    const b2 = n.toString(2);
    return { topic: "Number bases", difficulty: "EASY", classCode: "SS1", stem: `Convert $${n}_{10}$ to base two.`, correct: `$${b2}_2$`, distractors: [`$${(n + 1).toString(2)}_2$`, `$${(n - 1).toString(2)}_2$`, `$${b2.split("").reverse().join("") === b2 ? (n + 2).toString(2) : b2.split("").reverse().join("")}_2$`], explanation: `Divide repeatedly by 2 and read the remainders upward: $${n}_{10} = ${b2}_2$.` };
  },
  (r) => {
    const base = int(r, 3, 8), digits = [int(r, 1, base - 1), int(r, 0, base - 1), int(r, 0, base - 1)];
    const val = digits[0] * base * base + digits[1] * base + digits[2];
    return { topic: "Number bases", difficulty: "MEDIUM", classCode: "SS1", stem: `Convert $${digits.join("")}_{${base}}$ to base ten.`, correct: `$${val}$`, distractors: [`$${Number(digits.join(""))}$`, `$${val + base}$`, `$${digits[0] * base + digits[1] * base + digits[2]}$`], explanation: `$${digits[0]}\\times${base}^2 + ${digits[1]}\\times${base} + ${digits[2]} = ${val}$.` };
  },
  // Variation
  (r) => {
    const k = int(r, 2, 9), x1 = int(r, 2, 6), x2 = int(r, 3, 12);
    return { topic: "Variation", difficulty: "MEDIUM", classCode: "SS2", stem: `$y$ varies directly as $x$. If $y = ${k * x1}$ when $x = ${x1}$, find $y$ when $x = ${x2}$.`, correct: `$${k * x2}$`, distractors: [`$${k * x1 + x2}$`, `$${k + x2}$`, `$${x2 * x1}$`], explanation: `$y = kx$ with $k = ${k * x1} \\div ${x1} = ${k}$, so $y = ${k}\\times ${x2} = ${k * x2}$.` };
  },
];

export function generateMathBank(count: number, seed = 20260930): SeedQ[] {
  const rng = seededRng(seed);
  const out: SeedQ[] = [];
  const seen = new Set<string>();
  let guard = 0;
  while (out.length < count && guard++ < count * 40) {
    const g = gens[Math.floor(rng() * gens.length)];
    const q = g(rng);
    if (!q || seen.has(q.stem)) continue;
    const ds = uniq(q.correct, q.distractors);
    if (ds.length < 3) continue;
    seen.add(q.stem);
    out.push({ ...q, distractors: ds });
  }
  return out;
}

/** Deterministic option order for seeding (the exam engine reshuffles per student). */
export function toOptions(q: Pick<SeedQ, "correct" | "distractors">, rng: Rng) {
  return shuffle([{ text: q.correct, isCorrect: true }, ...q.distractors.map((text) => ({ text, isCorrect: false }))], rng);
}
