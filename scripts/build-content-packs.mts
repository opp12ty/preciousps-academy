/**
 * Builds the upload-ready content packs into ./content-packs:
 *   PreciousPS_<Subject>_Content_Pack.xlsx   — upload at Admin → Content Packs
 *   PreciousPS_<Subject>_Scheme_of_Work.pdf  — printable scheme of work for teachers
 * Usage: npm run packs:build [-- MTH ENG]   (subject codes; default: all packs)
 */
import fs from "node:fs";
import path from "node:path";
import * as XLSX from "xlsx";
import { PDFDocument, rgb, StandardFonts, type PDFFont, type PDFPage } from "pdf-lib";
import { ALL_PACKS } from "@/content/packs";
import { packFileBase, packStats, packWorkbook, TERM_NAMES } from "@/content/packs/build";
import type { SubjectPack } from "@/content/packs/types";

const OUT = path.resolve("content-packs");
fs.mkdirSync(OUT, { recursive: true });

/** Standard PDF fonts only cover WinAnsi; map common characters and drop the rest. */
const safe = (s: string) =>
  s
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/×/g, "x")
    .replace(/÷/g, "/")
    .replace(/≤/g, "<=")
    .replace(/≥/g, ">=")
    .replace(/≠/g, "!=")
    .replace(/√/g, "sqrt")
    .replace(/π/g, "pi")
    .replace(/θ/g, "theta")
    .replace(/°/g, " deg")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/₦/g, "N")
    .replace(/[^\x20-\x7E\n]/g, "");

function wrap(text: string, font: PDFFont, size: number, width: number) {
  const lines: string[] = [];
  for (const para of safe(text).split("\n")) {
    let line = "";
    for (const word of para.split(/\s+/)) {
      const next = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(next, size) > width && line) {
        lines.push(line);
        line = word;
      } else line = next;
    }
    lines.push(line);
  }
  return lines;
}

async function schemePdf(pack: SubjectPack) {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const navy = rgb(0.06, 0.15, 0.36);
  const grey = rgb(0.35, 0.38, 0.45);
  const W = 842, H = 595, M = 36; // A4 landscape
  const cols = [{ w: 40, k: "Week" }, { w: 170, k: "Topic" }, { w: 230, k: "Subtopics" }, { w: 330, k: "Learning objectives" }];
  let page: PDFPage = pdf.addPage([W, H]);
  let y = H - M;
  let pageNo = 1;
  const footer = () => page.drawText(safe(`Precious PS Academy - ${pack.name} Scheme of Work (v${pack.version}) - page ${pageNo}`), { x: M, y: 18, size: 7, font, color: grey });
  const newPage = () => {
    footer();
    page = pdf.addPage([W, H]);
    pageNo++;
    y = H - M;
  };
  const text = (s: string, x: number, size: number, f = font, color = navy) => page.drawText(safe(s), { x, y, size, font: f, color });

  text("Precious PS Academy", M, 10, bold, grey);
  y -= 22;
  text(`${pack.name} - Scheme of Work`, M, 20, bold);
  y -= 16;
  const st = packStats(pack);
  text(`Classes ${pack.classes.join(", ")} | ${st.topics} topics | ${st.questions} practice questions | version ${pack.version}`, M, 9, font, grey);
  y -= 22;

  for (const c of pack.classes) {
    for (const plan of pack.terms.filter((t) => t.classCode === c).sort((a, b) => a.term - b.term)) {
      if (y < 120) newPage();
      text(`${c} - ${TERM_NAMES[plan.term - 1]}`, M, 13, bold);
      y -= 16;
      let x = M;
      for (const col of cols) {
        page.drawText(col.k, { x, y, size: 8, font: bold, color: grey });
        x += col.w;
      }
      y -= 4;
      page.drawLine({ start: { x: M, y }, end: { x: W - M, y }, thickness: 0.6, color: grey });
      y -= 11;
      for (const t of plan.topics) {
        const cells = [String(t.week), t.title, t.subtopics.map((s) => `- ${s}`).join("\n"), t.objectives.map((o) => `- ${o}`).join("\n")];
        const wrapped = cells.map((cell, i) => wrap(cell, i === 1 ? bold : font, 8, cols[i].w - 8));
        const h = Math.max(...wrapped.map((l) => l.length)) * 10 + 6;
        if (y - h < M) newPage();
        let cx = M;
        wrapped.forEach((lines, i) => {
          lines.forEach((l, j) => page.drawText(l, { x: cx, y: y - j * 10, size: 8, font: i === 1 ? bold : font, color: navy }));
          cx += cols[i].w;
        });
        y -= h;
        page.drawLine({ start: { x: M, y: y + 4 }, end: { x: W - M, y: y + 4 }, thickness: 0.3, color: rgb(0.85, 0.87, 0.9) });
      }
      y -= 12;
    }
  }
  footer();
  return pdf.save();
}

const wanted = process.argv.slice(2).map((s) => s.toUpperCase());
const packs = wanted.length ? ALL_PACKS.filter((p) => wanted.includes(p.code)) : ALL_PACKS;
for (const pack of packs) {
  const base = packFileBase(pack);
  const xlsx = XLSX.write(packWorkbook(pack), { type: "buffer", bookType: "xlsx" }) as Buffer;
  fs.writeFileSync(path.join(OUT, `${base}_Content_Pack.xlsx`), xlsx);
  fs.writeFileSync(path.join(OUT, `${base}_Scheme_of_Work.pdf`), await schemePdf(pack));
  const s = packStats(pack);
  console.log(`✔ ${pack.name}: ${s.topics} topics, ${s.lessons} lessons, ${s.questions} questions, ${s.exams} exams, ${s.assignments} assignments`);
}
