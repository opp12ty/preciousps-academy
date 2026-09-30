import { describe, expect, it } from "vitest";
import { renderBlocks } from "@/components/rich-text";

describe("lesson renderer", () => {
  it("renders tables with a header row", () => {
    const html = renderBlocks("## Chart\n| Place | Value |\n|---|---|\n| Tens | $10$ |");
    expect(html).toContain("<h2>Chart</h2>");
    expect(html).toContain("<thead><tr><th>Place</th><th>Value</th></tr></thead>");
    expect(html).toMatch(/<td>Tens<\/td><td><span class="katex/);
  });

  it("renders a numbered list that follows a sentence", () => {
    expect(renderBlocks("Steps:\n1. Add\n2. Divide")).toBe("<p>Steps:</p><ol><li>Add</li><li>Divide</li></ol>");
  });

  it("still escapes HTML in every block type", () => {
    const html = renderBlocks("| <script>x</script> |\n\n- <img src=x onerror=alert(1)>");
    expect(html).not.toMatch(/<script|<img/);
    expect(html).toContain("&lt;script&gt;");
  });
});
