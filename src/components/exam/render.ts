import { renderBlocks, renderInline } from "../rich-text";
import type { RenderedQuestion } from "./types";

interface PublicLike {
  type: RenderedQuestion["type"];
  stem: string;
  imageAssetId?: string | null;
  marks: number;
  options: { id: string; displayLabel?: string; label?: string; text: string }[];
  matchTargets?: { key: string; text: string }[];
}

/** Server-side: typeset question text once so the client ships no math engine. */
export function renderQuestion(id: string, position: number, q: PublicLike): RenderedQuestion {
  return {
    id,
    position,
    type: q.type,
    stemHtml: renderBlocks(q.stem),
    imageUrl: q.imageAssetId ? `/api/v1/assets/${q.imageAssetId}` : null,
    marks: q.marks,
    options: q.options.map((o, i) => ({ id: o.id, label: o.displayLabel ?? o.label ?? "ABCDEFGH"[i], html: renderInline(o.text) })),
    matchTargets: q.matchTargets?.map((t) => ({ key: t.key, html: renderInline(t.text) })),
  };
}
