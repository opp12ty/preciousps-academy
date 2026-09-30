import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getDb } from "@/server/db";

/** Liveness + database health for monitoring (§82). No sensitive data. */
export async function GET() {
  const started = Date.now();
  try {
    await getDb().execute(sql`SELECT 1`);
    return NextResponse.json({ status: "ok", database: "ok", latencyMs: Date.now() - started, time: new Date().toISOString() }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ status: "degraded", database: "unreachable", time: new Date().toISOString() }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
