/**
 * The deployment build runs `scripts/seed.ts` with tsx (outside Next.js). Anything the seed imports must not
 * use `import "server-only"`, which throws outside a Server Component and breaks the Vercel build.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? files(join(dir, e.name)) : e.name.endsWith(".ts") ? [join(dir, e.name)] : []));
}

describe("seed/build-script import safety", () => {
  it("keeps server-only out of the modules the seed script loads", () => {
    const allowed = ["brand.ts", "http.ts"]; // only imported by pages, actions and routes, never by scripts
    const offenders = files("src/server").filter((f) => /import\s+["']server-only["']/.test(readFileSync(f, "utf8")) && !allowed.some((a) => f.endsWith(a)));
    expect(offenders).toEqual([]);
  });
});
