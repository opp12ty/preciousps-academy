/**
 * School sections (class levels). Every class belongs to one section; content (topics, questions,
 * examinations, assignments, resources) is either scoped to a section or left open to all
 * sections (null). A student only ever sees content for their own class's section.
 */
export const SECTIONS = ["JUNIOR_SECONDARY", "SENIOR_SECONDARY", "PRIMARY", "OTHER"] as const;
export type Section = (typeof SECTIONS)[number];

export const SECTION_LABELS: Record<Section, string> = {
  JUNIOR_SECONDARY: "Junior Secondary (JSS 1–JSS 3)",
  SENIOR_SECONDARY: "Senior Secondary (SSS 1–SSS 3)",
  PRIMARY: "Primary",
  OTHER: "Other / international",
};

export const SECTION_SHORT: Record<Section, string> = {
  JUNIOR_SECONDARY: "JSS",
  SENIOR_SECONDARY: "SS",
  PRIMARY: "Primary",
  OTHER: "Other",
};

/** Admin form choices. "ALL" = every section; "AUTO" = follow the class / topic. */
export const SECTION_CHOICES = [
  { value: "JUNIOR_SECONDARY", label: SECTION_LABELS.JUNIOR_SECONDARY },
  { value: "SENIOR_SECONDARY", label: SECTION_LABELS.SENIOR_SECONDARY },
  { value: "ALL", label: "All sections (JSS and SS)" },
];
export const SECTION_CHOICES_AUTO = [{ value: "AUTO", label: "Follow the class / topic" }, ...SECTION_CHOICES];

/** Stored value → form value. */
export const sectionFormValue = (level: string | null | undefined) => level ?? "ALL";

export function isSection(v: unknown): v is Section {
  return typeof v === "string" && (SECTIONS as readonly string[]).includes(v);
}

/** Content scoped to a section is visible only to students in that section; null means everyone. */
export function sectionAllows(contentSection: string | null | undefined, studentSection: string | null | undefined) {
  return !contentSection || contentSection === studentSection;
}
