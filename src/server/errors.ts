/**
 * Typed application errors with student-safe messages (§88). Stack traces and
 * internal details never reach the browser.
 */
export type ErrorCode =
  | "UNAUTHENTICATED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "ACCOUNT_SUSPENDED"
  | "ACCOUNT_LOCKED"
  | "INVALID_CREDENTIALS"
  | "INVALID_CODE"
  | "ACCESS_EXPIRED"
  | "ACCESS_REQUIRED"
  | "EXAM_UNAVAILABLE"
  | "ATTEMPT_LIMIT"
  | "ATTEMPT_CLOSED"
  | "IMPORT_ERROR"
  | "DUPLICATE"
  | "MFA_REQUIRED"
  | "PASSWORD_CHANGE_REQUIRED"
  | "NOT_CONFIGURED"
  | "INTERNAL";

const STATUS: Record<ErrorCode, number> = {
  UNAUTHENTICATED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION: 422,
  CONFLICT: 409,
  RATE_LIMITED: 429,
  ACCOUNT_SUSPENDED: 403,
  ACCOUNT_LOCKED: 423,
  INVALID_CREDENTIALS: 401,
  INVALID_CODE: 400,
  ACCESS_EXPIRED: 403,
  ACCESS_REQUIRED: 403,
  EXAM_UNAVAILABLE: 409,
  ATTEMPT_LIMIT: 409,
  ATTEMPT_CLOSED: 409,
  IMPORT_ERROR: 422,
  DUPLICATE: 409,
  MFA_REQUIRED: 401,
  PASSWORD_CHANGE_REQUIRED: 403,
  NOT_CONFIGURED: 503,
  INTERNAL: 500,
};

export class AppError extends Error {
  readonly status: number;
  constructor(
    public readonly code: ErrorCode,
    message: string,
    public readonly fields?: Record<string, string[]>,
  ) {
    super(message);
    this.name = "AppError";
    this.status = STATUS[code];
  }
}

export const NEED_ACCESS_CODE_MESSAGE =
  "Need an Access Code? To get an access code, reach the Super Admin to get your code (08169267383).";

export function toPublicError(e: unknown): { code: ErrorCode; message: string; status: number; fields?: Record<string, string[]> } {
  if (e instanceof AppError) return { code: e.code, message: e.message, status: e.status, fields: e.fields };
  if (e && typeof e === "object" && "name" in e && (e as Error).name === "ZodError") {
    const issues = (e as unknown as { issues: { path: (string | number)[]; message: string }[] }).issues;
    const fields: Record<string, string[]> = {};
    for (const i of issues) (fields[i.path.join(".") || "_"] ??= []).push(i.message);
    return { code: "VALIDATION", message: issues[0]?.message && issues.length === 1 ? issues[0].message : "Please correct the highlighted fields.", status: 422, fields };
  }
  // Unique-violation from Postgres => friendly conflict
  const pg = e as { code?: string; cause?: { code?: string } };
  if (pg?.code === "23505" || pg?.cause?.code === "23505") {
    return { code: "CONFLICT", message: "This record already exists.", status: 409 };
  }
  console.error("[pps] unexpected error", e instanceof Error ? e.message : e);
  return { code: "INTERNAL", message: "Something went wrong on our side. Please try again.", status: 500 };
}
