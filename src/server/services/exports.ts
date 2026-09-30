import { and, desc, eq } from "drizzle-orm";
import { PDFDocument, rgb, StandardFonts, type PDFFont, type PDFImage, type PDFPage } from "pdf-lib";
import QRCode from "qrcode";
import * as XLSX from "xlsx";
import { getDb } from "../db";
import { exportHistory, results } from "../db/schema";
import { audit, type Actor, type ReqCtx } from "../audit";
import { AppError } from "../errors";
import { rateLimit } from "../rate-limit";
import { getSetting } from "../settings";
import { readAsset } from "./assets";
import { BRAND_LOGO_PNG_BASE64 } from "../brand-logo";
import { resultsBaseQuery } from "./exams";

export type ExportFormat = "csv" | "xlsx" | "pdf";

/** Neutralise spreadsheet formula injection (=, +, -, @, tab, CR). */
function cell(v: unknown): string | number {
  if (v === null || v === undefined) return "";
  if (v instanceof Date) return lagos(v);
  if (typeof v === "number") return v;
  const s = String(v);
  return /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
}

export function lagos(d: Date | string) {
  return new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(new Date(d));
}

export function toCsv(rows: Record<string, unknown>[]): string {
  if (!rows.length) return "";
  const cols = Object.keys(rows[0]);
  const esc = (v: unknown) => {
    const s = String(cell(v));
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return "﻿" + [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\r\n");
}

export function toXlsx(rows: Record<string, unknown>[], sheet = "Export"): Buffer {
  const clean = rows.map((r) => Object.fromEntries(Object.entries(r).map(([k, v]) => [k, cell(v)])));
  const ws = XLSX.utils.json_to_sheet(clean);
  const cols = Object.keys(rows[0] ?? {});
  ws["!cols"] = cols.map((c) => ({ wch: Math.min(48, Math.max(10, c.length + 2, ...clean.slice(0, 200).map((r) => String(r[c] ?? "").length))) }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheet.slice(0, 31));
  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer;
}

/**
 * The built-in PDF fonts only cover WinAnsi. Strip diacritics that fall
 * outside it (e.g. Yoruba ọ, ṣ) instead of failing, and replace anything else.
 */
const COMBINING = new RegExp(`[${String.fromCharCode(0x300)}-${String.fromCharCode(0x36f)}]`, "g");
const WINANSI_EXTRA = new Set([0x20ac, 0x201a, 0x192, 0x201e, 0x2026, 0x2020, 0x2021, 0x2c6, 0x2030, 0x160, 0x2039, 0x152, 0x17d, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2013, 0x2014, 0x2dc, 0x2122, 0x161, 0x203a, 0x153, 0x17e, 0x178]);
export function pdfSafe(input: unknown): string {
  const s = String(input ?? "").normalize("NFD").replace(COMBINING, "").normalize("NFC");
  let out = "";
  for (const ch of s) {
    const c = ch.codePointAt(0)!;
    out += (c >= 0x20 && c <= 0x7e) || (c >= 0xa0 && c <= 0xff) || WINANSI_EXTRA.has(c) ? ch : c === 0x20a6 ? "N" : c === 0x0a || c === 0x09 ? " " : "?";
  }
  return out;
}

const NAVY = rgb(0.043, 0.122, 0.294);
const ROYAL = rgb(0.114, 0.306, 0.847);
const GOLD = rgb(0.784, 0.604, 0.184);
const GREY = rgb(0.39, 0.45, 0.55);

async function logoImage(pdf: PDFDocument, schoolId: string, kind: "resultLogoAssetId" | "certificateLogoAssetId" = "resultLogoAssetId"): Promise<PDFImage> {
  const branding = await getSetting(schoolId, "branding");
  const id = branding[kind] ?? branding.logoAssetId;
  if (id) {
    const a = await readAsset(id);
    if (a?.mimeType === "image/png") return pdf.embedPng(a.data);
    if (a?.mimeType === "image/jpeg") return pdf.embedJpg(a.data);
  }
  return pdf.embedPng(Buffer.from(BRAND_LOGO_PNG_BASE64, "base64"));
}

/** Tabular PDF export (landscape A4) with branded header and page numbers. */
export async function toPdfTable(title: string, rows: Record<string, unknown>[], schoolId: string, subtitle?: string): Promise<Buffer> {
  const pdf = await PDFDocument.create();
  pdf.setTitle(title);
  pdf.setProducer("Precious PS Academy");
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const logo = await logoImage(pdf, schoolId);
  const cols = Object.keys(rows[0] ?? { Info: "" });
  const W = 842,
    H = 595,
    M = 32;
  const colW = (W - 2 * M) / cols.length;
  title = pdfSafe(title);
  subtitle = subtitle === undefined ? undefined : pdfSafe(subtitle);
  const fit = (t: string, f: PDFFont, size: number, max: number) => {
    let s = pdfSafe(t);
    while (s.length > 1 && f.widthOfTextAtSize(s, size) > max) s = s.slice(0, -2) + "…";
    return s;
  };
  let page: PDFPage = pdf.addPage([W, H]);
  let y = 0;
  const header = () => {
    const dims = logo.scaleToFit(40, 40);
    page.drawImage(logo, { x: M, y: H - M - dims.height, width: dims.width, height: dims.height });
    page.drawText("Precious PS Academy", { x: M + 50, y: H - M - 14, size: 13, font: bold, color: NAVY });
    page.drawText("Precious PS Academy", { x: M + 50, y: H - M - 28, size: 8, font, color: GOLD });
    page.drawText(title, { x: M, y: H - M - 60, size: 12, font: bold, color: NAVY });
    if (subtitle) page.drawText(subtitle, { x: M, y: H - M - 74, size: 8, font, color: GREY });
    y = H - M - 92;
    page.drawRectangle({ x: M, y: y - 4, width: W - 2 * M, height: 16, color: NAVY });
    cols.forEach((c, i) => page.drawText(fit(c, bold, 7.5, colW - 6), { x: M + i * colW + 3, y: y + 1, size: 7.5, font: bold, color: rgb(1, 1, 1) }));
    y -= 16;
  };
  header();
  rows.forEach((r, idx) => {
    if (y < M + 20) {
      page = pdf.addPage([W, H]);
      header();
    }
    if (idx % 2 === 0) page.drawRectangle({ x: M, y: y - 4, width: W - 2 * M, height: 14, color: rgb(0.96, 0.97, 0.99) });
    cols.forEach((c, i) => page.drawText(fit(String(cell(r[c])), font, 7.5, colW - 6), { x: M + i * colW + 3, y, size: 7.5, font, color: rgb(0.1, 0.12, 0.2) }));
    y -= 14;
  });
  const pages = pdf.getPages();
  pages.forEach((p, i) => p.drawText(`Generated ${lagos(new Date())} (WAT) · Page ${i + 1} of ${pages.length}`, { x: M, y: 16, size: 7, font, color: GREY }));
  return Buffer.from(await pdf.save());
}

export async function recordExport(actor: Actor, kind: string, format: ExportFormat, rowCount: number, filters: unknown, ctx: ReqCtx) {
  await rateLimit("export", actor.id, ctx);
  await getDb().insert(exportHistory).values({ schoolId: actor.schoolId, kind, format, rowCount, filters: filters ?? null, createdBy: actor.id });
  await audit({ actor, action: "data.exported", entityType: "export", entityId: kind, summary: `${kind} (${format}, ${rowCount} rows)`, metadata: { filters } }, ctx);
}

export async function listExportHistory(schoolId: string) {
  return getDb().select().from(exportHistory).where(eq(exportHistory.schoolId, schoolId)).orderBy(desc(exportHistory.createdAt)).limit(50);
}

/* --------------------------------------------------------- result slip */

/**
 * Official result slip PDF (§38). Ownership / permission is checked by the
 * caller. Includes a verification code and QR link for authenticity checks.
 */
export async function resultSlipPdf(resultId: string, schoolId: string): Promise<{ pdf: Buffer; fileName: string }> {
  const db = getDb();
  const [found] = await resultsBaseQuery(db).where(and(eq(results.id, resultId), eq(results.schoolId, schoolId)));
  if (!found) throw new AppError("NOT_FOUND", "Result not found.");
  const r = {
    ...found,
    studentName: pdfSafe(found.studentName),
    examTitle: pdfSafe(found.examTitle),
    subject: pdfSafe(found.subject),
    className: found.className ? pdfSafe(found.className) : null,
    department: found.department ? pdfSafe(found.department) : null,
    studentNumber: found.studentNumber ? pdfSafe(found.studentNumber) : null,
    remarks: found.remarks ? pdfSafe(found.remarks) : null,
  };
  const [raw] = await db.select({ verificationCode: results.verificationCode }).from(results).where(eq(results.id, resultId));
  const rawBranding = await getSetting(schoolId, "branding");
  const branding = { ...rawBranding, signatoryName: pdfSafe(rawBranding.signatoryName), signatoryTitle: pdfSafe(rawBranding.signatoryTitle) };
  const rawSchool = await getSetting(schoolId, "school");
  const school = { ...rawSchool, name: pdfSafe(rawSchool.name) };

  const pdf = await PDFDocument.create();
  pdf.setTitle(`Result slip — ${r.studentName}`);
  pdf.setProducer("Precious PS Academy");
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const logo = await logoImage(pdf, schoolId);
  const W = 595,
    H = 842,
    M = 48;
  const page = pdf.addPage([W, H]);

  page.drawRectangle({ x: 0, y: H - 8, width: W, height: 8, color: NAVY });
  page.drawRectangle({ x: 0, y: H - 11, width: W, height: 3, color: GOLD });
  const dims = logo.scaleToFit(84, 84);
  page.drawImage(logo, { x: (W - dims.width) / 2, y: H - 40 - dims.height, width: dims.width, height: dims.height });
  const center = (t: string, y: number, size: number, f: PDFFont, color = NAVY) => page.drawText(t, { x: (W - f.widthOfTextAtSize(t, size)) / 2, y, size, font: f, color });
  let y = H - 40 - dims.height - 22;
  center("Precious PS Academy", y, 18, bold);
  y -= 16;
  center(school.name.toUpperCase(), y, 10, bold, GOLD);
  y -= 14;
  center("Learn. Practise. Test. Improve.", y, 8.5, font, GREY);
  y -= 26;
  page.drawRectangle({ x: M, y: y - 6, width: W - 2 * M, height: 24, color: rgb(0.93, 0.95, 1) });
  center("OFFICIAL RESULT SLIP", y + 1, 12, bold, ROYAL);
  y -= 34;

  const row = (label: string, value: string, x: number, yy: number) => {
    page.drawText(label.toUpperCase(), { x, y: yy + 11, size: 7, font: bold, color: GREY });
    page.drawText(value || "—", { x, y: yy, size: 10.5, font, color: rgb(0.08, 0.1, 0.2) });
  };
  const col2 = W / 2 + 6;
  const pairs: [string, string, string, string][] = [
    ["Student name", r.studentName, "Student ID", r.studentNumber ?? "—"],
    ["Class", r.className ?? "—", "Department", r.department ?? "—"],
    ["Examination", r.examTitle, "Subject", r.subject],
    ["Date", lagos(r.createdAt), "Attempt", String(r.attemptNumber)],
  ];
  for (const [a, av, b, bv] of pairs) {
    row(a, av.length > 44 ? `${av.slice(0, 43)}…` : av, M, y);
    row(b, bv, col2, y);
    y -= 34;
  }
  y -= 6;
  // Score panel
  page.drawRectangle({ x: M, y: y - 70, width: W - 2 * M, height: 80, color: NAVY });
  const stat = (label: string, value: string, x: number) => {
    page.drawText(value, { x, y: y - 30, size: 22, font: bold, color: rgb(1, 1, 1) });
    page.drawText(label.toUpperCase(), { x, y: y - 50, size: 7.5, font: bold, color: GOLD });
  };
  const w4 = (W - 2 * M) / 4;
  stat("Score", `${r.score}/${r.totalMarks}`, M + 16);
  stat("Percentage", `${r.percentage}%`, M + 16 + w4);
  stat("Grade", r.grade, M + 16 + 2 * w4);
  stat("Status", r.isVoided ? "VOID" : r.passed ? "PASS" : "FAIL", M + 16 + 3 * w4);
  y -= 100;
  const small = (label: string, value: string, x: number) => {
    page.drawText(value, { x, y, size: 14, font: bold, color: NAVY });
    page.drawText(label.toUpperCase(), { x, y: y - 14, size: 7, font: bold, color: GREY });
  };
  small("Correct", String(r.correct), M);
  small("Incorrect", String(r.incorrect), M + w4);
  small("Unanswered", String(r.unanswered), M + 2 * w4);
  small("Time used", `${Math.floor(r.timeUsedSec / 60)}m ${r.timeUsedSec % 60}s`, M + 3 * w4);
  y -= 44;
  if (r.remarks) {
    page.drawText("REMARKS", { x: M, y, size: 7, font: bold, color: GREY });
    page.drawText(r.remarks.slice(0, 110), { x: M, y: y - 14, size: 10, font, color: rgb(0.08, 0.1, 0.2) });
    y -= 40;
  }
  // Signature & stamp (optional brand assets)
  for (const [assetId, x] of [
    [branding.signatureAssetId, M],
    [branding.stampAssetId, W - M - 110],
  ] as const) {
    if (!assetId) continue;
    const a = await readAsset(assetId);
    if (!a) continue;
    const img = a.mimeType === "image/png" ? await pdf.embedPng(a.data) : a.mimeType === "image/jpeg" ? await pdf.embedJpg(a.data) : null;
    if (img) {
      const d = img.scaleToFit(110, 60);
      page.drawImage(img, { x, y: y - d.height, width: d.width, height: d.height });
    }
  }
  y -= 70;
  page.drawLine({ start: { x: M, y }, end: { x: M + 160, y }, thickness: 0.7, color: GREY });
  page.drawText(branding.signatoryName || "Authorised signatory", { x: M, y: y - 12, size: 8.5, font: bold, color: NAVY });
  page.drawText(branding.signatoryTitle || "", { x: M, y: y - 23, size: 7.5, font, color: GREY });

  // Verification QR
  const base = process.env.APP_URL ?? "";
  const verifyUrl = `${base}/verify/${raw.verificationCode}`;
  const qr = await pdf.embedPng(await QRCode.toBuffer(verifyUrl, { margin: 0, width: 180, color: { dark: "#0b1f4b" } }));
  page.drawImage(qr, { x: W - M - 76, y: 70, width: 76, height: 76 });
  page.drawText("Verify this result", { x: W - M - 76, y: 58, size: 7, font: bold, color: NAVY });
  page.drawText(`Code: ${raw.verificationCode}`, { x: M, y: 84, size: 8, font: bold, color: NAVY });
  page.drawText(base ? verifyUrl : `Verification code: ${raw.verificationCode}`, { x: M, y: 72, size: 7, font, color: GREY });
  page.drawText(`Generated ${lagos(new Date())} (WAT). Results are computed and stored by the Precious PS examination server.`, { x: M, y: 36, size: 7, font, color: GREY });
  page.drawRectangle({ x: 0, y: 0, width: W, height: 6, color: NAVY });

  const safe = r.studentName.replace(/[^A-Za-z0-9]+/g, "_");
  return { pdf: Buffer.from(await pdf.save()), fileName: `PreciousPS_Result_${safe}_${r.attemptNumber}.pdf` };
}

export async function verifyResultCode(code: string) {
  const clean = code.trim().toUpperCase().slice(0, 20);
  if (clean.length < 8) return null;
  const db = getDb();
  const [r] = await resultsBaseQuery(db).where(eq(results.verificationCode, clean));
  if (!r) return null;
  // Minimal disclosure for public verification.
  return { studentName: r.studentName, examTitle: r.examTitle, subject: r.subject, percentage: r.percentage, grade: r.grade, date: r.createdAt, isVoided: r.isVoided, released: Boolean(r.releasedAt) };
}
