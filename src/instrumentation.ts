import type { Instrumentation } from "next";

/**
 * Records every server error with the reference number the user sees on the error page, so the
 * cause can be read in Backend → Developer. Recording must never itself break a request.
 */
export const onRequestError: Instrumentation.onRequestError = async (err, request, context) => {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  try {
    const e = err as { message?: string; stack?: string; digest?: string; cause?: { message?: string } };
    const message = `${e?.message ?? String(err)}${e?.cause?.message ? ` — ${e.cause.message}` : ""}`;
    // Redirects and "not found" travel as thrown values; they are not faults.
    if (/NEXT_REDIRECT|NEXT_NOT_FOUND|NEXT_HTTP_ERROR_FALLBACK/.test(`${e?.digest ?? ""} ${message}`)) return;
    const { recordError } = await import("./server/services/developer");
    await recordError({ digest: e?.digest ?? null, message, stack: e?.stack ?? null, path: request.path, method: request.method, routePath: context.routePath, routeType: context.routeType });
  } catch {
    /* nothing more can be done here */
  }
};
