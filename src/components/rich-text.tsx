import katex from "katex";
import { FIGURE_TOKEN, renderFigure } from "@/core/diagrams";
import { cx } from "./ui/primitives";

/**
 * Safe renderer for lesson/question text (§49). All user text is HTML-escaped;
 * only our own tags and KaTeX output (trust: false) are emitted, so stored
 * content can never inject script (XSS-safe by construction).
 */
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function math(tex: string, display: boolean) {
  try {
    return katex.renderToString(tex, { displayMode: display, throwOnError: false, trust: false, strict: "ignore", output: "html", maxSize: 20, maxExpand: 500 });
  } catch {
    return `<code>${esc(tex)}</code>`;
  }
}

export function renderInline(src: string): string {
  // Tokenise math first so markdown markers inside formulas are untouched.
  const parts: string[] = [];
  // Group 1–2: a [[diagram: …]] / [[image: …]] picture; 3: display maths; 4: inline maths.
  const re = new RegExp(`${FIGURE_TOKEN.source}|\\$\\$([\\s\\S]+?)\\$\\$|\\$([^$\\n]+?)\\$`, "g");
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    parts.push(fmt(src.slice(last, m.index)));
    parts.push(m[1] !== undefined ? renderFigure(m[1], m[2]) : m[3] !== undefined ? math(m[3], true) : math(m[4], false));
    last = re.lastIndex;
  }
  parts.push(fmt(src.slice(last)));
  return parts.join("");
}

function fmt(text: string) {
  return esc(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, "$1<em>$2</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br/>");
}

const BULLET = /^\s*[-*]\s+/;
const NUMBERED = /^\s*\d+[.)]\s+/;
const TABLE_ROW = /^\s*\|.*\|\s*$/;
const TABLE_RULE = /^\s*\|[\s:|-]+\|\s*$/;
const FIGURE_LINE = new RegExp(`^\\s*${FIGURE_TOKEN.source}\\s*$`);

const list = (tag: "ul" | "ol", lines: string[], marker: RegExp) => `<${tag}>${lines.map((l) => `<li>${renderInline(l.replace(marker, ""))}</li>`).join("")}</${tag}>`;

/** | a | b | rows, with an optional |---|---| rule under the header row. */
function table(lines: string[]) {
  const cells = (l: string) => l.trim().slice(1, -1).split("|").map((c) => c.trim());
  const head = lines.length > 1 && TABLE_RULE.test(lines[1]) ? cells(lines[0]) : null;
  const body = lines.slice(head ? 2 : 0).filter((l) => !TABLE_RULE.test(l)).map(cells);
  const thead = head ? `<thead><tr>${head.map((c) => `<th>${renderInline(c)}</th>`).join("")}</tr></thead>` : "";
  return `<div class="table-wrap"><table>${thead}<tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${renderInline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

export function renderBlocks(src: string): string {
  const out: string[] = [];
  const blocks = src.replace(/\r\n?/g, "\n").split(/\n{2,}/);
  for (const raw of blocks) {
    const b = raw.trim();
    if (!b) continue;
    if (/^\$\$[\s\S]+\$\$$/.test(b)) {
      out.push(math(b.slice(2, -2), true));
      continue;
    }
    const lines = b.split("\n");
    if (lines.every((l) => TABLE_ROW.test(l))) {
      out.push(table(lines));
      continue;
    }
    if (lines.every((l) => BULLET.test(l))) {
      out.push(list("ul", lines, BULLET));
      continue;
    }
    if (lines.every((l) => NUMBERED.test(l))) {
      out.push(list("ol", lines, NUMBERED));
      continue;
    }
    // Headings may be followed by content in the same block.
    const h = /^(#{2,3})\s+(.+)$/.exec(lines[0]);
    if (h) {
      out.push(`<h${h[1].length}>${renderInline(h[2])}</h${h[1].length}>`);
      const rest = lines.slice(1).join("\n").trim();
      if (rest) out.push(renderBlocks(rest));
      continue;
    }
    // Mixed block: runs of table rows, bullets, numbered items and plain text, in any order.
    const kind = (l: string) => (FIGURE_LINE.test(l) ? "fig" : TABLE_ROW.test(l) ? "table" : BULLET.test(l) ? "ul" : NUMBERED.test(l) ? "ol" : "p");
    const runs: { kind: string; lines: string[] }[] = [];
    for (const l of lines) {
      const k = kind(l);
      const run = runs[runs.length - 1];
      if (run && run.kind === k) run.lines.push(l);
      else runs.push({ kind: k, lines: [l] });
    }
    for (const run of runs) {
      if (run.kind === "fig") out.push(...run.lines.map((l) => renderInline(l.trim())));
      else if (run.kind === "table") out.push(table(run.lines));
      else if (run.kind === "ul") out.push(list("ul", run.lines, BULLET));
      else if (run.kind === "ol") out.push(list("ol", run.lines, NUMBERED));
      else out.push(`<p>${renderInline(run.lines.join("\n"))}</p>`);
    }
  }
  return out.join("");
}

export function RichText({ text, className, inline }: { text: string; className?: string; inline?: boolean }) {
  if (inline) return <span className={className} dangerouslySetInnerHTML={{ __html: renderInline(text) }} />;
  return <div className={cx("prose-pps", className)} dangerouslySetInnerHTML={{ __html: renderBlocks(text) }} />;
}
