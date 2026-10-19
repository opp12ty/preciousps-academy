import { and, eq } from "drizzle-orm";
import * as XLSX from "xlsx";
import { getDb } from "../db";
import { assets, resourceLinks, subjects } from "../db/schema";
import { type Actor } from "../audit";
import { AppError } from "../errors";
import { requireFeature, requirePremiumAccess } from "./access";
import { pdfText, pptxSlides, wordText } from "./imports";
import { materialType } from "./resources";
import { studentScope } from "./scope";
import { sectionAllows } from "@/core/sections";

/**
 * Lets a student read an uploaded study material inside the app. The text of a Word, PowerPoint,
 * Excel or PDF file is taken out on the server and shown as a page, so the file itself never has to
 * be handed to the student's device. Uploading and downloading stay in the backend.
 */
export async function readMaterial(actor: Actor, resourceId: string) {
  if (actor.userType !== "STUDENT") throw new AppError("FORBIDDEN", "This page is for students.");
  if (!/^[0-9a-f-]{36}$/i.test(resourceId)) throw new AppError("NOT_FOUND", "Material not found.");
  await requireFeature(actor.id, "LEARNING_RESOURCES");
  const db = getDb();
  const [row] = await db
    .select({ r: resourceLinks, subject: subjects.name, fileName: assets.fileName, data: assets.data, mimeType: assets.mimeType })
    .from(resourceLinks)
    .leftJoin(subjects, eq(subjects.id, resourceLinks.subjectId))
    .innerJoin(assets, eq(assets.id, resourceLinks.assetId))
    .where(and(eq(resourceLinks.id, resourceId), eq(resourceLinks.schoolId, actor.schoolId), eq(resourceLinks.status, "PUBLISHED")));
  if (!row) throw new AppError("NOT_FOUND", "Material not found.");
  if (row.r.isPremium) await requirePremiumAccess(actor.id);
  const scope = await studentScope(actor.id);
  if ((row.r.classId && row.r.classId !== scope.classId) || !sectionAllows(row.r.level, scope.level)) throw new AppError("NOT_FOUND", "Material not found.");
  const body = await extractSections(row.fileName, row.data as Buffer);
  return { title: row.r.title, description: row.r.description, subject: row.subject, ...body };
}

/** The readable text of an uploaded file, in sections (slides, sheets or paragraphs). */
export async function extractSections(fileName: string, bytes: Buffer) {
  const type = materialType(fileName);
  let sections: { heading: string | null; text: string }[] = [];
  try {
    if (type === "word") sections = [{ heading: null, text: (await wordText(/\.docx$/i.test(fileName) ? "docx" : "doc", bytes)).text }];
    else if (type === "powerpoint") sections = /\.pptx$/i.test(fileName) ? (await pptxSlides(bytes)).map((t, i) => ({ heading: `Slide ${i + 1}`, text: t })) : [];
    else if (type === "pdf") sections = (await pdfText(bytes)).split(/\n{2,}/).reduce<{ heading: string | null; text: string }[]>((acc, t) => (t.trim() ? [...acc, { heading: null, text: t }] : acc), []);
    else if (type === "excel") {
      const wb = XLSX.read(bytes, { type: "buffer" });
      sections = wb.SheetNames.slice(0, 10).map((n) => ({ heading: n, text: XLSX.utils.sheet_to_csv(wb.Sheets[n]).split("\n").slice(0, 200).map((l) => l.replace(/,+$/, "").replace(/,/g, "   ")).filter(Boolean).join("\n") }));
    }
  } catch {
    sections = [];
  }
  const total = sections.reduce((n, s) => n + s.text.length, 0);
  // Keep one page to a readable size; very long documents are cut with a note.
  const LIMIT = 120_000;
  let used = 0;
  const shown = sections.filter((s) => s.text.trim()).filter((s) => (used += s.text.length) <= LIMIT || used === s.text.length);
  return { type, sections: shown, truncated: total > LIMIT, empty: total < 20 };
}
