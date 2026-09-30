/**
 * Access-code & access-period rules (§11–§15, Rules 1–8). Pure functions; the
 * server supplies `now` from its own clock — never from the browser.
 */

export const DAY_MS = 86_400_000;

/** Unambiguous alphabet (no 0/O, 1/I/L) for human-typed codes. */
export const CODE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

/**
 * Format: PPS-XXXX-XXXX-XXXX (12 random symbols ≈ 59 bits of entropy).
 * `randomInts` must be a CSPRNG source in production.
 */
export function formatCode(randomInts: (n: number) => number[]): string {
  const n = CODE_ALPHABET.length;
  // rejection sampling to avoid modulo bias
  const out: string[] = [];
  while (out.length < 12) {
    for (const v of randomInts(16)) {
      if (v < 256 - (256 % n) && out.length < 12) out.push(CODE_ALPHABET[v % n]);
    }
  }
  return `PPS-${out.slice(0, 4).join("")}-${out.slice(4, 8).join("")}-${out.slice(8, 12).join("")}`;
}

/** Normalise user input: uppercase, strip spaces/dashes and the optional PPS prefix. */
export function normaliseCode(input: string): string {
  const compact = input.toUpperCase().replace(/[\s\-_.]/g, "");
  return compact.length === 15 && compact.startsWith("PPS") ? compact.slice(3) : compact;
}

export function isPlausibleCode(input: string): boolean {
  const n = normaliseCode(input);
  return n.length === 12 && [...n].every((c) => CODE_ALPHABET.includes(c));
}

export function computeExpiry(activatedAt: Date, days: number): Date {
  if (!Number.isInteger(days) || days < 1 || days > 3650) throw new Error("Access period must be 1–3650 days.");
  return new Date(activatedAt.getTime() + days * DAY_MS);
}

export type EffectiveAccess = "ACTIVE" | "EXPIRED" | "SUSPENDED" | "REVOKED" | "ENDED" | "NONE";

export interface PeriodLike {
  status: "ACTIVE" | "EXPIRED" | "SUSPENDED" | "REVOKED" | "ENDED";
  activatedAt: Date;
  currentExpiresAt: Date;
}

export function effectiveStatus(p: PeriodLike | null | undefined, now: Date): EffectiveAccess {
  if (!p) return "NONE";
  if (p.status !== "ACTIVE") return p.status;
  return p.currentExpiresAt.getTime() > now.getTime() ? "ACTIVE" : "EXPIRED";
}

export interface Remaining {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
}

export function remaining(expiresAt: Date, now: Date): Remaining {
  const totalMs = Math.max(0, expiresAt.getTime() - now.getTime());
  return {
    totalMs,
    days: Math.floor(totalMs / DAY_MS),
    hours: Math.floor((totalMs % DAY_MS) / 3_600_000),
    minutes: Math.floor((totalMs % 3_600_000) / 60_000),
  };
}

export type AdjustAction =
  | { kind: "EXTEND"; days: number }
  | { kind: "REDUCE"; days: number }
  | { kind: "SET_EXPIRY"; expiresAt: Date }
  | { kind: "END" };

/**
 * Computes the new expiry for an administrative adjustment.
 * EXTEND on an already-expired period extends from *now* so the student
 * actually receives the extra days.
 */
export function adjustExpiry(current: PeriodLike, action: AdjustAction, now: Date): Date {
  switch (action.kind) {
    case "EXTEND": {
      if (!Number.isInteger(action.days) || action.days < 1 || action.days > 3650)
        throw new Error("Extension must be 1–3650 days.");
      const base = Math.max(current.currentExpiresAt.getTime(), now.getTime());
      return new Date(base + action.days * DAY_MS);
    }
    case "REDUCE": {
      if (!Number.isInteger(action.days) || action.days < 1) throw new Error("Reduction must be at least 1 day.");
      const next = current.currentExpiresAt.getTime() - action.days * DAY_MS;
      return new Date(Math.max(next, current.activatedAt.getTime()));
    }
    case "SET_EXPIRY": {
      if (action.expiresAt.getTime() < current.activatedAt.getTime())
        throw new Error("Expiry cannot be before the activation date.");
      return action.expiresAt;
    }
    case "END":
      return new Date(Math.max(now.getTime(), current.activatedAt.getTime()));
  }
}
