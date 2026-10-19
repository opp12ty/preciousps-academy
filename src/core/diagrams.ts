/**
 * Pictures for lessons, study materials and questions, written as one line of text:
 *
 *   [[diagram: fraction 3/4 || Three quarters shaded]]
 *   [[image: <uploaded picture id or https address> || caption]]
 *
 * The text travels unchanged through the editors, the content-pack workbook and the database; it is
 * drawn as SVG when the page is rendered. Everything an author types is escaped, so a diagram can
 * never inject markup. Pure: no server or browser code.
 */

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const NAVY = "#1e2a5a";
const ROYAL = "#2f5bea";
const GOLD = "#f2b01e";
const SOFT = "#e8eefc";
const PALETTE = [ROYAL, GOLD, "#16a34a", "#dc2626", "#9333ea", "#0891b2", "#ea580c", "#64748b"];

/** One-line help shown to authors (Content Packs page, lesson editor). */
export const DIAGRAM_HELP: { example: string; shows: string }[] = [
  { example: "[[diagram: fraction 3/4]]", shows: "A circle cut into 4 parts with 3 shaded. Add `bar` for a strip; list several fractions to compare." },
  { example: "[[diagram: numberline 0 10 mark 4 jump 4>7]]", shows: "A number line with a dot on 4 and a jump from 4 to 7. Add `step 2` to count in twos." },
  { example: "[[diagram: counters 5 + 3]]", shows: "Two groups of counters to add; use `9 - 4` to cross counters out." },
  { example: "[[diagram: array 3 x 4]]", shows: "3 rows of 4 dots for multiplication." },
  { example: "[[diagram: bond 10 = 6 + ?]]", shows: "A number bond: the whole and its two parts." },
  { example: "[[diagram: placevalue 345]]", shows: "Hundreds, tens and units columns." },
  { example: "[[diagram: sequence 2, 4, 6, ?, 10]]", shows: "A row of boxes for a number or letter pattern." },
  { example: "[[diagram: puzzle triangle 3 4 7 ; 5 2 7 ; 6 3 ?]]", shows: "Reasoning puzzles: the last number of each group sits in the middle. Also `circle`, `box`." },
  { example: "[[diagram: shape rectangle: 8 cm, 3 cm]]", shows: "One labelled shape: square, rectangle, triangle, right-triangle, circle, pentagon, hexagon, octagon, oval, cube, cuboid, cylinder." },
  { example: "[[diagram: shapes circle, square, triangle]]", shows: "A row of named shapes." },
  { example: "[[diagram: clock 3:30]]", shows: "A clock face showing the time." },
  { example: "[[diagram: angle 60]]", shows: "An angle of the given size in degrees." },
  { example: "[[diagram: bars Mon=4, Tue=7, Wed=5]]", shows: "A bar chart. `pie` draws a pie chart from the same list." },
  { example: "[[diagram: tally 7]]", shows: "Tally marks in bundles of five." },
  { example: "[[diagram: flow Evaporation -> Condensation -> Rain]]", shows: "Boxes joined by arrows for steps, cycles and processes." },
  { example: "[[diagram: alphabet]]", shows: "The letters A–Z numbered 1–26." },
  { example: "[[diagram: picture 🍎🍎🍎]]", shows: "Large picture symbols (emoji)." },
  { example: "[[image: PICTURE-ID || caption]]", shows: "An uploaded picture. Use the Add picture button in the editor to upload and insert it." },
];

const svg = (w: number, h: number, body: string, label: string, maxWidth = w) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" style="width:100%;max-width:${maxWidth}px;height:auto" font-family="inherit">${body}</svg>`;
const text = (x: number, y: number, s: string, o: { size?: number; fill?: string; anchor?: string; weight?: number } = {}) =>
  `<text x="${x}" y="${y}" font-size="${o.size ?? 14}" fill="${o.fill ?? NAVY}" text-anchor="${o.anchor ?? "middle"}" font-weight="${o.weight ?? 600}">${esc(s)}</text>`;
const r1 = (n: number) => Math.round(n * 10) / 10;
const num = (s: string) => (/^-?\d+(\.\d+)?$/.test(s.trim()) ? Number(s) : NaN);
const pairs = (s: string) =>
  s
    .split(",")
    .map((p) => p.split("="))
    .filter((p) => p.length === 2 && Number.isFinite(num(p[1])))
    .map(([k, v]) => ({ label: k.trim().slice(0, 14), value: Math.max(0, num(v)) }))
    .slice(0, 8);

function wedge(cx: number, cy: number, r: number, a0: number, a1: number) {
  const p = (a: number) => `${r1(cx + r * Math.sin(a))} ${r1(cy - r * Math.cos(a))}`;
  return `M ${cx} ${cy} L ${p(a0)} A ${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${p(a1)} Z`;
}

function fraction(args: string) {
  const bar = /\bbar\b/.test(args);
  const fr = [...args.matchAll(/(\d+)\s*\/\s*(\d+)/g)].map((m) => ({ n: Number(m[1]), d: Math.min(24, Math.max(1, Number(m[2]))) })).slice(0, 4);
  if (!fr.length) return null;
  const cell = bar ? 200 : 120;
  const h = bar ? 78 : 140;
  const body = fr
    .map(({ n, d }, i) => {
      const x = i * (cell + 20);
      const shaded = Math.min(n, d);
      let g = "";
      if (bar) {
        const w = cell / d;
        for (let k = 0; k < d; k++) g += `<rect x="${r1(x + 4 + k * w)}" y="10" width="${r1(w)}" height="36" fill="${k < shaded ? ROYAL : "#fff"}" stroke="${NAVY}" stroke-width="1.5"/>`;
      } else if (d === 1) g = `<circle cx="${x + 62}" cy="58" r="50" fill="${shaded ? ROYAL : "#fff"}" stroke="${NAVY}" stroke-width="1.5"/>`;
      else for (let k = 0; k < d; k++) g += `<path d="${wedge(x + 62, 58, 50, (2 * Math.PI * k) / d, (2 * Math.PI * (k + 1)) / d)}" fill="${k < shaded ? ROYAL : "#fff"}" stroke="${NAVY}" stroke-width="1.5"/>`;
      return g + text(x + (bar ? cell / 2 + 4 : 62), bar ? 68 : 130, `${n}/${d}`, { size: 15 });
    })
    .join("");
  const w = fr.length * (cell + 20) - 12;
  return svg(w, h, body, `Fraction ${fr.map((f) => `${f.n}/${f.d}`).join(", ")}`);
}

function numberline(args: string) {
  const t = args.split(/\s+/);
  const a = num(t[0] ?? "");
  const b = num(t[1] ?? "");
  if (!Number.isFinite(a) || !Number.isFinite(b) || b <= a) return null;
  let step = 0;
  const marks: number[] = [];
  const jumps: [number, number][] = [];
  let mode = "";
  for (const tok of t.slice(2)) {
    if (["step", "mark", "jump"].includes(tok)) mode = tok;
    else if (mode === "step" && num(tok) > 0) step = num(tok);
    else if (mode === "mark" && Number.isFinite(num(tok))) marks.push(num(tok));
    else if (mode === "jump" && /^-?\d+(\.\d+)?>-?\d+(\.\d+)?$/.test(tok)) jumps.push(tok.split(">").map(Number) as [number, number]);
  }
  if (!step) step = [1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000].find((s) => (b - a) / s <= 20) ?? (b - a) / 10;
  if ((b - a) / step > 40) step = (b - a) / 20;
  const W = 520;
  const x = (v: number) => r1(30 + ((v - a) / (b - a)) * (W - 60));
  let g = `<line x1="14" y1="70" x2="${W - 14}" y2="70" stroke="${NAVY}" stroke-width="2"/><path d="M ${W - 14} 70 l -8 -5 v 10 Z M 14 70 l 8 -5 v 10 Z" fill="${NAVY}"/>`;
  for (let v = a; v <= b + 1e-9; v += step) g += `<line x1="${x(v)}" y1="63" x2="${x(v)}" y2="77" stroke="${NAVY}" stroke-width="1.5"/>` + text(x(v), 96, String(r1(v)), { size: 12 });
  for (const [f, to] of jumps.slice(0, 12)) {
    const x0 = x(f);
    const x1 = x(to);
    g += `<path d="M ${x0} 62 Q ${r1((x0 + x1) / 2)} ${r1(62 - Math.min(48, Math.abs(x1 - x0) * 0.6 + 12))} ${x1} 62" fill="none" stroke="${GOLD}" stroke-width="2.5"/><circle cx="${x1}" cy="62" r="3" fill="${GOLD}"/>`;
  }
  for (const m of marks.slice(0, 12)) if (m >= a && m <= b) g += `<circle cx="${x(m)}" cy="70" r="6" fill="${ROYAL}"/>`;
  return svg(W, 106, g, `Number line from ${a} to ${b}`);
}

function bars(args: string) {
  const d = pairs(args);
  if (!d.length) return null;
  const max = Math.max(...d.map((p) => p.value), 1);
  const bw = 46;
  const W = 40 + d.length * (bw + 18);
  let g = `<line x1="30" y1="10" x2="30" y2="150" stroke="${NAVY}" stroke-width="1.5"/><line x1="30" y1="150" x2="${W - 4}" y2="150" stroke="${NAVY}" stroke-width="1.5"/>`;
  d.forEach((p, i) => {
    const h = (p.value / max) * 120;
    const x = 42 + i * (bw + 18);
    g += `<rect x="${x}" y="${r1(150 - h)}" width="${bw}" height="${r1(h)}" rx="4" fill="${PALETTE[i % PALETTE.length]}"/>` + text(x + bw / 2, r1(150 - h) - 5, String(p.value), { size: 12 }) + text(x + bw / 2, 168, p.label, { size: 12 });
  });
  return svg(W, 176, g, `Bar chart: ${d.map((p) => `${p.label} ${p.value}`).join(", ")}`);
}

function pie(args: string) {
  const d = pairs(args);
  const total = d.reduce((n, p) => n + p.value, 0);
  if (!d.length || !total) return null;
  let a = 0;
  let g = "";
  d.forEach((p, i) => {
    const a1 = a + (p.value / total) * 2 * Math.PI;
    g += d.length === 1 ? `<circle cx="80" cy="80" r="70" fill="${PALETTE[0]}"/>` : `<path d="${wedge(80, 80, 70, a, a1)}" fill="${PALETTE[i % PALETTE.length]}" stroke="#fff" stroke-width="1.5"/>`;
    g += `<rect x="170" y="${14 + i * 20}" width="12" height="12" rx="2" fill="${PALETTE[i % PALETTE.length]}"/>` + text(188, 25 + i * 20, `${p.label} (${p.value})`, { size: 12, anchor: "start" });
    a = a1;
  });
  return svg(330, Math.max(160, 30 + d.length * 20), g, `Pie chart: ${d.map((p) => `${p.label} ${p.value}`).join(", ")}`);
}

const polygon = (n: number, cx: number, cy: number, r: number, rot = 0) =>
  Array.from({ length: n }, (_, i) => `${r1(cx + r * Math.sin(rot + (2 * Math.PI * i) / n))},${r1(cy - r * Math.cos(rot + (2 * Math.PI * i) / n))}`).join(" ");

/** Outline of a named shape inside a 120 × 100 cell whose top-left corner is (x, 0). */
function outline(name: string, x: number) {
  const st = `fill="${SOFT}" stroke="${NAVY}" stroke-width="2" stroke-linejoin="round"`;
  switch (name) {
    case "square": return `<rect x="${x + 25}" y="15" width="70" height="70" ${st}/>`;
    case "rectangle": return `<rect x="${x + 10}" y="25" width="100" height="50" ${st}/>`;
    case "triangle": return `<polygon points="${x + 60},12 ${x + 108},88 ${x + 12},88" ${st}/>`;
    case "right-triangle": return `<polygon points="${x + 20},12 ${x + 105},88 ${x + 20},88" ${st}/><path d="M ${x + 20} 76 h 12 v 12" fill="none" stroke="${NAVY}" stroke-width="1.5"/>`;
    case "circle": return `<circle cx="${x + 60}" cy="50" r="38" ${st}/>`;
    case "oval": return `<ellipse cx="${x + 60}" cy="50" rx="50" ry="30" ${st}/>`;
    case "pentagon": return `<polygon points="${polygon(5, x + 60, 52, 40)}" ${st}/>`;
    case "hexagon": return `<polygon points="${polygon(6, x + 60, 50, 40, Math.PI / 6)}" ${st}/>`;
    case "octagon": return `<polygon points="${polygon(8, x + 60, 50, 40, Math.PI / 8)}" ${st}/>`;
    case "cube": return `<rect x="${x + 22}" y="32" width="56" height="56" ${st}/><polygon points="${x + 22},32 ${x + 42},12 ${x + 98},12 ${x + 78},32" ${st}/><polygon points="${x + 78},32 ${x + 98},12 ${x + 98},68 ${x + 78},88" ${st}/>`;
    case "cuboid": return `<rect x="${x + 8}" y="40" width="80" height="44" ${st}/><polygon points="${x + 8},40 ${x + 28},20 ${x + 108},20 ${x + 88},40" ${st}/><polygon points="${x + 88},40 ${x + 108},20 ${x + 108},64 ${x + 88},84" ${st}/>`;
    case "cylinder": return `<path d="M ${x + 28} 24 v 56 a 32 10 0 0 0 64 0 v -56" ${st}/><ellipse cx="${x + 60}" cy="24" rx="32" ry="10" ${st}/>`;
    default: return null;
  }
}

function shape(args: string) {
  const [nameRaw, labelsRaw = ""] = args.split(":");
  const name = nameRaw.trim().toLowerCase();
  const o = outline(name, 30);
  if (!o) return null;
  const labels = labelsRaw.split(",").map((s) => s.trim().slice(0, 16)).filter(Boolean);
  let g = o;
  if (labels[0]) g += text(90, 112, labels[0], { size: 13 });
  if (labels[1]) g += text(name === "circle" || name === "triangle" ? 166 : 160, 54, labels[1], { size: 13, anchor: "start" });
  if (labels[2]) g += text(22, 54, labels[2], { size: 13, anchor: "end" });
  return svg(240, 122, g, `${name}${labels.length ? ` labelled ${labels.join(", ")}` : ""}`);
}

function shapes(args: string) {
  const items = args.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean).slice(0, 6);
  const drawn = items.map((n, i) => ({ n, o: outline(n, i * 130) }));
  if (!drawn.length || drawn.some((d) => !d.o)) return null;
  return svg(drawn.length * 130 - 10, 122, drawn.map((d, i) => d.o + text(i * 130 + 60, 114, d.n, { size: 13 })).join(""), `Shapes: ${items.join(", ")}`);
}

function clock(args: string) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(args.trim());
  if (!m) return null;
  const h = Number(m[1]) % 12;
  const min = Math.min(59, Number(m[2]));
  let g = `<circle cx="80" cy="80" r="72" fill="#fff" stroke="${NAVY}" stroke-width="3"/>`;
  for (let i = 1; i <= 12; i++) g += text(r1(80 + 58 * Math.sin((i * Math.PI) / 6)), r1(85 - 58 * Math.cos((i * Math.PI) / 6)), String(i), { size: 13 });
  const hand = (angle: number, len: number, w: number, c: string) => `<line x1="80" y1="80" x2="${r1(80 + len * Math.sin(angle))}" y2="${r1(80 - len * Math.cos(angle))}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  g += hand(((h + min / 60) * Math.PI) / 6, 34, 5, NAVY) + hand((min * Math.PI) / 30, 50, 3, ROYAL) + `<circle cx="80" cy="80" r="4" fill="${NAVY}"/>`;
  return svg(160, 160, g, `Clock showing ${args.trim()}`);
}

function array(args: string) {
  const m = /^(\d{1,2})\s*[x×*]\s*(\d{1,2})$/i.exec(args.trim());
  if (!m) return null;
  const rows = Math.min(12, Math.max(1, Number(m[1])));
  const cols = Math.min(12, Math.max(1, Number(m[2])));
  let g = "";
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) g += `<circle cx="${18 + c * 28}" cy="${18 + r * 28}" r="10" fill="${ROYAL}"/>`;
  return svg(cols * 28 + 8, rows * 28 + 8, g, `${rows} rows of ${cols}`);
}

function counters(args: string) {
  const m = /^(\d{1,2})(?:\s*([+\-−])\s*(\d{1,2}))?$/.exec(args.trim());
  if (!m) return null;
  const a = Math.min(30, Number(m[1]));
  const op = m[2] === "+" ? "+" : m[2] ? "-" : "";
  const b = Math.min(30, Number(m[3] ?? 0));
  const dots: { fill: string; cross: boolean; gap: boolean }[] = [];
  for (let i = 0; i < a; i++) dots.push({ fill: ROYAL, cross: op === "-" && i >= a - b, gap: false });
  if (op === "+") for (let i = 0; i < b; i++) dots.push({ fill: GOLD, cross: false, gap: i === 0 });
  const per = 10;
  let g = "";
  let col = 0;
  let row = 0;
  for (const d of dots) {
    if (d.gap && col !== 0) col++;
    if (col >= per + (op === "+" ? 1 : 0)) {
      col = 0;
      row++;
    }
    const x = 18 + col * 30;
    const y = 18 + row * 30;
    g += `<circle cx="${x}" cy="${y}" r="11" fill="${d.fill}" opacity="${d.cross ? 0.35 : 1}"/>`;
    if (d.cross) g += `<path d="M ${x - 9} ${y - 9} L ${x + 9} ${y + 9} M ${x + 9} ${y - 9} L ${x - 9} ${y + 9}" stroke="#dc2626" stroke-width="2.5"/>`;
    col++;
  }
  return svg(Math.min(dots.length + 1, per + 1) * 30 + 8, (row + 1) * 30 + 8, g, op ? `${a} ${op === "+" ? "plus" : "take away"} ${b}` : `${a} counters`);
}

function cells(items: string[], label: string, arrows = false) {
  const w = items.map((s) => Math.max(44, s.length * 9 + 22));
  let x = 4;
  let g = "";
  items.forEach((s, i) => {
    const unknown = s === "?";
    g += `<rect x="${x}" y="8" width="${w[i]}" height="44" rx="8" fill="${unknown ? "#fff7e0" : SOFT}" stroke="${unknown ? GOLD : NAVY}" stroke-width="2"${unknown ? ' stroke-dasharray="5 3"' : ""}/>` + text(x + w[i] / 2, 36, s, { size: 15 });
    x += w[i];
    if (i < items.length - 1) {
      if (arrows) g += `<path d="M ${x + 4} 30 h 16 m -6 -5 l 6 5 l -6 5" fill="none" stroke="${NAVY}" stroke-width="2" stroke-linecap="round"/>`;
      x += arrows ? 28 : 8;
    }
  });
  return svg(x + 4, 60, g, label);
}

const sequence = (args: string) => {
  const items = args.split(",").map((s) => s.trim().slice(0, 12)).filter(Boolean).slice(0, 12);
  return items.length ? cells(items, `Pattern: ${items.join(", ")}`) : null;
};
const flow = (args: string) => {
  const items = args.split("->").map((s) => s.trim().slice(0, 26)).filter(Boolean).slice(0, 7);
  return items.length > 1 ? cells(items, `Steps: ${items.join(", then ")}`, true) : null;
};

function puzzle(args: string) {
  const m = /^(triangle|circle|box)\s+(.+)$/i.exec(args.trim());
  if (!m) return null;
  const kind = m[1].toLowerCase();
  const groups = m[2].split(";").map((g) => g.trim().split(/[\s,]+/).filter(Boolean).map((s) => s.slice(0, 5))).filter((g) => g.length >= 2 && g.length <= 6).slice(0, 5);
  if (!groups.length) return null;
  const st = `fill="${SOFT}" stroke="${NAVY}" stroke-width="2" stroke-linejoin="round"`;
  let out = "";
  groups.forEach((vals, gi) => {
    const cx = 70 + gi * 150;
    const cy = 72;
    const centre = vals[vals.length - 1];
    const around = vals.slice(0, -1);
    out += kind === "triangle" ? `<polygon points="${cx},14 ${cx + 62},118 ${cx - 62},118" ${st}/>` : kind === "circle" ? `<circle cx="${cx}" cy="${cy}" r="58" ${st}/>` : `<rect x="${cx - 58}" y="14" width="116" height="116" rx="8" ${st}/>`;
    const centreY = kind === "triangle" ? 88 : cy;
    out += `<circle cx="${cx}" cy="${centreY}" r="17" fill="${centre === "?" ? "#fff7e0" : "#fff"}" stroke="${centre === "?" ? GOLD : ROYAL}" stroke-width="2"/>` + text(cx, centreY + 5, centre, { size: 15 });
    if (kind === "triangle") {
      const spots = [[cx - 62, 138], [cx + 62, 138], [cx, 8]];
      around.slice(0, 3).forEach((v, i) => (out += text(spots[i][0], spots[i][1] + (i === 2 ? 0 : 0), v, { size: 15, fill: ROYAL })));
    } else {
      around.forEach((v, i) => {
        const a = (2 * Math.PI * i) / around.length - (around.length === 2 ? Math.PI / 2 : 0);
        out += text(r1(cx + 40 * Math.sin(a)), r1(cy + 5 - 40 * Math.cos(a)), v, { size: 15, fill: ROYAL });
      });
    }
  });
  return svg(groups.length * 150 - 10, kind === "triangle" ? 146 : 140, `<g transform="translate(0,${kind === "triangle" ? 6 : 0})">${out}</g>`, `Puzzle: ${groups.map((g) => g.join(" ")).join("; ")}`);
}

function placevalue(args: string) {
  const digits = args.replace(/[\s,]/g, "");
  if (!/^\d{1,7}$/.test(digits)) return null;
  const names = ["U", "T", "H", "Th", "TTh", "HTh", "M"];
  let g = "";
  [...digits].forEach((d, i) => {
    const x = 4 + i * 56;
    g += `<rect x="${x}" y="4" width="56" height="28" fill="${ROYAL}" stroke="${NAVY}" stroke-width="1.5"/>` + text(x + 28, 23, names[digits.length - 1 - i], { size: 13, fill: "#fff" });
    g += `<rect x="${x}" y="32" width="56" height="44" fill="#fff" stroke="${NAVY}" stroke-width="1.5"/>` + text(x + 28, 62, d, { size: 22 });
  });
  return svg(digits.length * 56 + 8, 80, g, `Place value of ${digits}`);
}

function angle(args: string) {
  const deg = num(args.trim().replace(/°$/, ""));
  if (!Number.isFinite(deg) || deg <= 0 || deg > 360) return null;
  const rad = (deg * Math.PI) / 180;
  const ox = 110;
  const oy = 120;
  const ex = r1(ox + 95 * Math.cos(rad));
  const ey = r1(oy - 95 * Math.sin(rad));
  const ax = r1(ox + 30 * Math.cos(rad));
  const ay = r1(oy - 30 * Math.sin(rad));
  const g =
    `<line x1="${ox}" y1="${oy}" x2="${ox + 95}" y2="${oy}" stroke="${NAVY}" stroke-width="2.5" stroke-linecap="round"/><line x1="${ox}" y1="${oy}" x2="${ex}" y2="${ey}" stroke="${NAVY}" stroke-width="2.5" stroke-linecap="round"/>` +
    (deg === 90 ? `<path d="M ${ox + 18} ${oy} v -18 h -18" fill="none" stroke="${ROYAL}" stroke-width="2"/>` : `<path d="M ${ox + 30} ${oy} A 30 30 0 ${deg > 180 ? 1 : 0} 0 ${ax} ${ay}" fill="none" stroke="${ROYAL}" stroke-width="2"/>`) +
    text(r1(ox + 52 * Math.cos(rad / 2)), r1(oy - 52 * Math.sin(rad / 2) + 5), `${deg}°`, { size: 14, fill: ROYAL });
  return svg(220, 230, g, `Angle of ${deg} degrees`, 200);
}

function tally(args: string) {
  const n = Math.min(60, Math.max(0, Math.floor(num(args.trim()))));
  if (!Number.isFinite(n) || n < 1) return null;
  let g = "";
  let x = 8;
  for (let i = 0; i < n; i++) {
    if (i % 5 === 4) {
      g += `<line x1="${x - 46}" y1="38" x2="${x - 2}" y2="10" stroke="${ROYAL}" stroke-width="3" stroke-linecap="round"/>`;
      x += 14;
    } else {
      g += `<line x1="${x}" y1="8" x2="${x}" y2="40" stroke="${NAVY}" stroke-width="3" stroke-linecap="round"/>`;
      x += 11;
    }
  }
  return svg(x + 6, 48, g, `Tally of ${n}`);
}

function bond(args: string) {
  const m = /^(\?|\d{1,5})\s*=\s*(\?|\d{1,5})\s*\+\s*(\?|\d{1,5})$/.exec(args.trim());
  if (!m) return null;
  const node = (x: number, y: number, v: string) => `<circle cx="${x}" cy="${y}" r="26" fill="${v === "?" ? "#fff7e0" : SOFT}" stroke="${v === "?" ? GOLD : NAVY}" stroke-width="2"/>` + text(x, y + 6, v, { size: 17 });
  const g = `<line x1="100" y1="34" x2="46" y2="106" stroke="${NAVY}" stroke-width="2"/><line x1="100" y1="34" x2="154" y2="106" stroke="${NAVY}" stroke-width="2"/>` + node(100, 34, m[1]) + node(46, 106, m[2]) + node(154, 106, m[3]);
  return svg(200, 138, g, `Number bond: ${m[1]} is ${m[2]} and ${m[3]}`, 190);
}

function alphabet() {
  let g = "";
  for (let i = 0; i < 26; i++) {
    const x = 2 + (i % 13) * 40;
    const y = 2 + Math.floor(i / 13) * 62;
    g += `<rect x="${x}" y="${y}" width="40" height="34" fill="${SOFT}" stroke="${NAVY}" stroke-width="1.2"/>` + text(x + 20, y + 23, String.fromCharCode(65 + i), { size: 16 }) + text(x + 20, y + 50, String(i + 1), { size: 12, fill: ROYAL });
  }
  return svg(524, 122, g, "The alphabet A to Z numbered 1 to 26");
}

const picture = (args: string) => (args.trim() ? `<span class="fig-emoji" role="img" aria-label="picture">${esc([...args.trim()].slice(0, 40).join(""))}</span>` : null);

const DRAW: Record<string, (args: string) => string | null> = { fraction, numberline, bars, pie, shape, shapes, clock, array, counters, sequence, flow, puzzle, placevalue, angle, tally, bond, alphabet, picture };

/** Matches one figure token; use with the `g` flag to find them inside running text. */
export const FIGURE_TOKEN = /\[\[(diagram|image|listen):\s*([^\]\n]{1,2000})\]\]/;

/** HTML for one figure token. Unknown or malformed diagrams show their own text, so authors can see and fix them. */
export function renderFigure(kind: string, body: string): string {
  const [spec, captionRaw = ""] = body.split("||");
  const caption = captionRaw.trim() ? `<span class="fig-cap">${esc(captionRaw.trim())}</span>` : "";
  if (kind === "listen") {
    // Spoken by the reader's own device (speech synthesis): no audio file to download.
    const text = spec.trim();
    if (text.length < 3) return `<span class="fig fig-missing">${esc(`[[listen: ${body}]]`)}</span>`;
    return `<span class="listen"><button type="button" class="listen-btn" data-say="${esc(text)}" aria-label="Play the recording">&#128266; Listen</button>${caption}</span>`;
  }
  if (kind === "image") {
    const src = spec.trim();
    const url = /^[0-9a-f]{8}-[0-9a-f-]{27}$/i.test(src) ? `/api/v1/assets/${src}` : /^https:\/\/[^\s"'<>]+$/i.test(src) ? src : null;
    if (!url) return `<span class="fig fig-missing">${esc(`[[image: ${body}]]`)}</span>`;
    return `<span class="fig"><img src="${esc(url)}" alt="${esc(captionRaw.trim() || "Picture")}" loading="lazy" referrerpolicy="no-referrer"/>${caption}</span>`;
  }
  const m = /^\s*([a-z-]+)\s*([\s\S]*)$/i.exec(spec);
  const drawn = m && DRAW[m[1].toLowerCase()] ? DRAW[m[1].toLowerCase()](m[2].trim()) : null;
  if (!drawn) return `<span class="fig fig-missing">${esc(`[[diagram: ${body}]]`)}</span>`;
  return `<span class="fig">${drawn}${caption}</span>`;
}

/** True when the text holds a diagram that cannot be drawn (used by the pack tests and the importer). */
export function brokenFigures(text: string): string[] {
  return [...text.matchAll(new RegExp(FIGURE_TOKEN, "g"))].filter((m) => renderFigure(m[1], m[2]).includes("fig-missing")).map((m) => m[0]);
}
