/**
 * Connection string resolution. `DATABASE_URL` wins; the Neon / Vercel Postgres integrations
 * also inject `POSTGRES_URL` (pooled) and `*_NON_POOLING` / `DATABASE_URL_UNPOOLED` (direct),
 * so a one-click integration works without renaming variables.
 */
export function databaseUrl(): string | undefined {
  return process.env.DATABASE_URL || process.env.POSTGRES_URL || undefined;
}

/** Migrations hold a session-level advisory lock, so they need a direct (non-pooled) connection when one exists. */
export function migrationUrl(): string | undefined {
  return process.env.DATABASE_URL_UNPOOLED || process.env.POSTGRES_URL_NON_POOLING || databaseUrl();
}
