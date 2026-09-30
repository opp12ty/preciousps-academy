/** Client-safe question shape with server-rendered HTML (math already typeset). */
export interface RenderedQuestion {
  id: string; // attemptQuestionId (CBT) or questionId (classwork/assignments)
  position: number;
  type: "MCQ" | "TRUE_FALSE" | "MULTI_SELECT" | "NUMERIC" | "FILL_BLANK" | "MATCHING";
  stemHtml: string;
  imageUrl: string | null;
  marks: number;
  options: { id: string; label: string; html: string }[];
  matchTargets?: { key: string; html: string }[];
}

export type AnswerValue =
  | { optionId: string }
  | { optionIds: string[] }
  | { value: string }
  | { text: string }
  | { pairs: Record<string, string> }
  | null;

export function isAnswered(v: AnswerValue | undefined): boolean {
  if (!v) return false;
  if ("optionId" in v) return Boolean(v.optionId);
  if ("optionIds" in v) return v.optionIds.length > 0;
  if ("value" in v) return v.value.trim() !== "";
  if ("text" in v) return v.text.trim() !== "";
  if ("pairs" in v) return Object.keys(v.pairs).length > 0;
  return false;
}
