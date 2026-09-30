import type { Metadata } from "next";
import { sql } from "drizzle-orm";
import { CheckCircle2, CircleAlert, XCircle } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { getDb } from "@/server/db";
import { aiConfigured } from "@/server/services/ai";
import { listExportHistory } from "@/server/services/exports";
import { Card, CardHeader, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "System Health" };

type Row = { label: string; state: "ok" | "warn" | "off"; detail: string };

async function probeDatabase() {
  const started = performance.now();
  try {
    const r = await getDb().execute<{ v: string }>(sql`SELECT version() AS v`);
    return { dbOk: true, version: r.rows[0].v.split(" on ")[0], latency: Math.round(performance.now() - started) };
  } catch {
    return { dbOk: false, version: "", latency: Math.round(performance.now() - started) };
  }
}

export default async function SystemPage() {
  const s = await requireStaffPage("super.settings");
  const db = getDb();
  const { dbOk, version, latency } = await probeDatabase();
  const counts = await db.execute<Record<string, number>>(sql`SELECT
    (SELECT count(*)::int FROM users) AS users, (SELECT count(*)::int FROM questions) AS questions,
    (SELECT count(*)::int FROM examination_attempts) AS attempts, (SELECT count(*)::int FROM audit_logs) AS audit,
    (SELECT count(*)::int FROM sessions WHERE revoked_at IS NULL AND expires_at > now()) AS sessions,
    (SELECT count(*)::int FROM examination_attempts WHERE status = 'IN_PROGRESS' AND deadline_at < now() - interval '1 minute') AS overdue`);
  const c = counts.rows[0];
  const env = (k: string) => Boolean(process.env[k]);
  const rows: Row[] = [
    { label: "Database", state: dbOk ? (latency > 500 ? "warn" : "ok") : "off", detail: dbOk ? `${version} · ${latency} ms` : "Unreachable" },
    { label: "Secrets (AUTH_SECRET / ENCRYPTION_KEY)", state: env("AUTH_SECRET") && env("ENCRYPTION_KEY") ? "ok" : "warn", detail: env("AUTH_SECRET") && env("ENCRYPTION_KEY") ? "Configured" : "Using development fallbacks — set in production" },
    { label: "Scheduled maintenance (CRON_SECRET)", state: env("CRON_SECRET") ? "ok" : "warn", detail: env("CRON_SECRET") ? "Configured (auto-submit, expiry sync, reminders)" : "Not configured — lazy expiry still runs on every request" },
    { label: "Overdue exam attempts", state: c.overdue ? "warn" : "ok", detail: c.overdue ? `${c.overdue} awaiting auto-submit (processed on next access or cron)` : "None" },
    { label: "E-mail delivery", state: env("RESEND_API_KEY") ? "ok" : "off", detail: env("RESEND_API_KEY") ? "Provider configured" : "Not configured — messages held in outbox" },
    { label: "AI provider", state: aiConfigured() ? "ok" : "off", detail: aiConfigured() ? "Anthropic API key present" : "Not configured" },
    { label: "Backups", state: "warn", detail: "Managed by your PostgreSQL provider. Verify point-in-time recovery is enabled there — this app cannot confirm it." },
  ];
  const Icon = ({ s: st }: { s: Row["state"] }) => (st === "ok" ? <CheckCircle2 className="size-5 text-success-600" /> : st === "warn" ? <CircleAlert className="size-5 text-warn-600" /> : <XCircle className="size-5 text-muted" />);
  const exports = await listExportHistory(s.user.schoolId);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Platform" title="System health" description="Live checks. Nothing here is assumed — unconfigured services are reported as such." />
      <Card>
        <ul className="divide-y divide-line">
          {rows.map((r) => (
            <li key={r.label} className="flex items-start gap-3 px-5 py-3.5">
              <Icon s={r.state} />
              <div><p className="text-sm font-semibold text-navy-800">{r.label}</p><p className="text-xs text-muted">{r.detail}</p></div>
            </li>
          ))}
        </ul>
      </Card>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {Object.entries({ Users: c.users, Questions: c.questions, Attempts: c.attempts, "Audit entries": c.audit, "Live sessions": c.sessions }).map(([k, v]) => (
          <Card key={k} className="p-4"><p className="text-xs text-muted">{k}</p><p className="text-xl font-extrabold text-navy-800">{Number(v).toLocaleString()}</p></Card>
        ))}
      </div>
      <Card>
        <CardHeader title="Export history" />
        <Table>
          <thead><tr><Th>When</Th><Th>Export</Th><Th>Format</Th><Th>Rows</Th></tr></thead>
          <tbody>
            {exports.map((e) => (
              <tr key={e.id}><Td className="text-xs">{new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "short", timeStyle: "short" }).format(e.createdAt)}</Td><Td>{e.kind}</Td><Td className="uppercase">{e.format}</Td><Td>{e.rowCount}</Td></tr>
            ))}
            {!exports.length && <tr><Td colSpan={4} className="text-center text-sm text-muted">No exports yet.</Td></tr>}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
