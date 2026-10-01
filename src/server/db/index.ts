import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { databaseUrl } from "./url";

export type DB = NodePgDatabase<typeof schema>;
/** Transaction handle — same query surface as DB. */
export type Tx = Parameters<Parameters<DB["transaction"]>[0]>[0];
export type Executor = DB | Tx;

const globalForDb = globalThis as unknown as { __ppsDb?: DB; __ppsPool?: Pool };

/**
 * Returns the process-wide database handle. Uses a pooled node-postgres client
 * (works with Neon / Vercel Postgres / any managed PostgreSQL). Tests inject a
 * PGlite-backed instance through `setDb`.
 */
export function getDb(): DB {
  if (globalForDb.__ppsDb) return globalForDb.__ppsDb;
  const url = databaseUrl();
  if (!url) {
    throw new Error("DATABASE_URL is not configured. See .env.example and README (Local development).");
  }
  const isLocal = /127\.0\.0\.1|localhost/.test(url);
  const pool = new Pool({
    connectionString: url,
    max: isLocal ? 1 : Number(process.env.DATABASE_POOL_MAX ?? 5),
    idleTimeoutMillis: 20_000,
    connectionTimeoutMillis: 10_000,
    ssl: isLocal || /sslmode=disable/.test(url) ? undefined : true,
  });
  globalForDb.__ppsPool = pool;
  globalForDb.__ppsDb = drizzle(pool, { schema });
  return globalForDb.__ppsDb;
}

export function setDb(db: DB | undefined) {
  globalForDb.__ppsDb = db;
}

export { schema };
