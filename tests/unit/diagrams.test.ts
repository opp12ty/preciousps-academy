import { describe, expect, it } from "vitest";
import { brokenFigures, DIAGRAM_HELP, renderFigure } from "@/core/diagrams";
import { renderBlocks, renderInline } from "@/components/rich-text";

describe("diagrams", () => {
  it("draws every documented example", () => {
    for (const d of DIAGRAM_HELP.filter((x) => x.example.startsWith("[[diagram"))) expect(brokenFigures(d.example), d.example).toEqual([]);
  });

  it("draws figures in lesson text and inside question text", () => {
    const html = renderBlocks("## Halves\nLook at the picture.\n[[diagram: fraction 1/2 || One half]]\n- one part is shaded");
    expect(html).toContain("<svg");
    expect(html).toContain("One half");
    expect(html).toContain("<li>");
    expect(renderInline("Which number is missing? [[diagram: sequence 2, 4, ?, 8]]")).toContain("<svg");
  });

  it("escapes author text and shows broken diagrams as text", () => {
    expect(renderFigure("diagram", "flow <script>alert(1)</script> -> B")).not.toContain("<script>");
    expect(renderFigure("diagram", "nonsense 1 2")).toContain("fig-missing");
    expect(renderFigure("image", "javascript:alert(1)")).toContain("fig-missing");
    expect(renderFigure("image", "https://example.com/a.png || A map")).toContain('alt="A map"');
    expect(brokenFigures("ok [[diagram: clock 3:30]] bad [[diagram: clock 99]]")).toEqual(["[[diagram: clock 99]]"]);
  });
});

describe("automatic lesson illustrations", () => {
  it("every built-in illustration can be drawn", async () => {
    const { AUTO_FIGURE_SPECS, autoFigure } = await import("@/core/auto-figure");
    const { brokenFigures } = await import("@/core/diagrams");
    for (const spec of AUTO_FIGURE_SPECS) expect(brokenFigures(`[[diagram: ${spec}]]`), spec).toEqual([]);
    expect(autoFigure("Adding fractions", "Fractions", "Plain notes.")?.spec).toBe("fraction 3/4");
    expect(autoFigure("The water cycle", null, "Notes")?.spec).toContain("Evaporation");
    // A lesson that already has a figure of its own is left alone, and so is a topic with no match.
    expect(autoFigure("Adding fractions", null, "See [[diagram: fraction 1/2]]")).toBeNull();
    expect(autoFigure("Nouns and pronouns", "Parts of speech", "Notes")).toBeNull();
  });
});

describe("Listening recordings", () => {
  it("turns [[listen: …]] into a safe Listen button", async () => {
    const { renderInline } = await import("@/components/rich-text");
    const html = renderInline('Question one [[listen: The shop opens at "ten" <b>sharp</b>. || Play twice]]');
    expect(html).toContain('class="listen-btn"');
    expect(html).toContain("data-say=\"The shop opens at &quot;ten&quot; &lt;b&gt;sharp&lt;/b&gt;.\"");
    expect(html).toContain("Play twice");
    expect(html).not.toContain("<b>");
  });
});
