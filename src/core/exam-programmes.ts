/**
 * External examination programmes and the classes that prepare for them. This is the single rule
 * for "who may see which examination type": the student lists, the start-of-attempt check and the
 * Exam Preparation page all read it, so a class can never be offered another class's examination.
 */

export const PROGRAMMES = {
  COMMON_ENTRANCE: { label: "Common Entrance", long: "Common Entrance Examination", classes: ["BASIC4", "BASIC5", "BASIC6"], blurb: "Timed practice for entry into Junior Secondary School: Mathematics, English, and Quantitative and Verbal Reasoning.", colour: "#0ea5e9" },
  BECE: { label: "BECE", long: "Basic Education Certificate Examination", classes: ["JSS2", "JSS3"], blurb: "Junior secondary papers in the style of the BECE, subject by subject.", colour: "#7c3aed" },
  WAEC: { label: "WAEC", long: "WAEC (WASSCE)", classes: ["SS2", "SS3"], blurb: "Senior secondary objective papers in the style of the West African Senior School Certificate Examination.", colour: "#1d4ed8" },
  NECO: { label: "NECO", long: "NECO (SSCE)", classes: ["SS2", "SS3"], blurb: "Senior secondary objective papers in the style of the NECO Senior School Certificate Examination.", colour: "#047857" },
  JAMB: { label: "JAMB", long: "JAMB (UTME)", classes: ["SS2", "SS3"], blurb: "Computer-based practice for university entry, timed like the real UTME.", colour: "#c2410c" },
  JUPEB: { label: "JUPEB", long: "JUPEB", classes: ["SS2", "SS3"], blurb: "Preparation for the Joint Universities Preliminary Examinations Board programme.", colour: "#be185d" },
  IJMB: { label: "IJMB", long: "IJMB", classes: ["SS2", "SS3"], blurb: "Preparation for the Interim Joint Matriculation Board examination.", colour: "#0f766e" },
  PreciousPS_EXAM: { label: "Precious PS Exam", long: "Precious PS Examination", classes: ["BASIC1", "BASIC2", "BASIC3", "BASIC4", "BASIC5", "BASIC6", "JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"], blurb: "Termly revision examination across every subject of your class. The best three in each class are named every term.", colour: "#a8841e" },
} as const;

export type Programme = keyof typeof PROGRAMMES;

/** Subject codes offered in the UTME. Each gets a standard JAMB test drawn at random from its questions. */
export const JAMB_SUBJECT_CODES = ["ENG", "MTH", "PHY", "CHM", "BIO", "AGR", "ECO", "GOV", "LIT", "CRS", "IRS", "GEO", "COM", "ACC", "HIS", "FRE", "ARB", "HAU", "IGB", "YOR", "CMP", "PHE", "HEC", "VSA", "MUS"];
export const PROGRAMME_KEYS = Object.keys(PROGRAMMES) as Programme[];

/** Classes that sit an external examination: the classes a school account works with. */
export const EXAM_CLASS_CODES = ["BASIC4", "BASIC5", "BASIC6", "JSS2", "JSS3", "SS2", "SS3"] as const;
export const PRIMARY_EXAM_CLASSES = ["BASIC4", "BASIC5", "BASIC6"];
export const SECONDARY_EXAM_CLASSES = ["JSS2", "JSS3", "SS2", "SS3"];

const norm = (code: string | null | undefined) => (code ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");

/** True when this examination type is open to the class. Types that are not programmes are open to all. */
export function examTypeAllowsClass(examType: string, classCode: string | null | undefined): boolean {
  const p = PROGRAMMES[examType as Programme];
  if (!p) return true;
  return (p.classes as readonly string[]).includes(norm(classCode));
}

export function programmesForClass(classCode: string | null | undefined): Programme[] {
  const c = norm(classCode);
  return PROGRAMME_KEYS.filter((k) => (PROGRAMMES[k].classes as readonly string[]).includes(c));
}
