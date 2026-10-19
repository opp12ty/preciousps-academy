import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Bug, CheckCircle2, CircleAlert, GitCommitHorizontal, Rocket, XCircle } from "lucide-react";
import { requireStaffPage } from "@/server/http";
import { fmtLagos } from "@/server/services/access";
import { connections, databaseStats, githubCommits, listErrors, vercelDeployments, type CommitInfo, type DeploymentInfo } from "@/server/services/developer";
import { ClearErrorsButton, DeveloperAssistant, RedeployButton } from "@/components/admin/developer-tools";
import { spRecord } from "@/components/admin/filters";
import { Alert, Badge, buttonClass, Card, CardHeader, EmptyState, inputClass, PageHeader, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Developer" };
export const maxDuration = 60;

const STATE: Record<string, "green" | "red" | "amber" | "neutral"> = { READY: "green", ERROR: "red", BUILDING: "amber", QUEUED: "amber", INITIALIZING: "amber", CANCELED: "neutral" };

export default async function DeveloperPage({ searchParams }: PageProps<"/admin/developer">) {
  const s = await requireStaffPage("super.settings");
  if (s.user.userType !== "SUPER_ADMIN") redirect("/admin?denied=1");
  const sp = spRecord(await searchParams);
  const c = connections();
  const [errors, db, commits, deployments] = await Promise.all([
    listErrors(sp.q, 60),
    databaseStats().catch(() => null),
    c.github ? githubCommits(8).catch((e: Error) => e.message) : Promise.resolve(null),
    c.vercel ? vercelDeployments(8).catch((e: Error) => e.message) : Promise.resolve(null),
  ]);
  const Dot = ({ ok }: { ok: boolean }) => (ok ? <CheckCircle2 className="size-4 text-success-600" aria-label="Connected" /> : <XCircle className="size-4 text-muted" aria-label="Not connected" />);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Platform" title="Developer" description="For the Super Admin: what went wrong and where, what code is live, how deployments are going, and an assistant you can ask in plain language." actions={<RedeployButton ready={c.deployHook} />} />

      <Card>
        <CardHeader title="Now running" description={c.commit ? `Commit ${c.commit}${c.commitMessage ? `: ${c.commitMessage}` : ""}` : "Running outside Vercel, so the commit is not known."} action={<Badge tone="blue">{c.environment ?? "unknown"}{c.region ? ` · ${c.region}` : ""}</Badge>} />
        <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            { ok: c.github, label: "GitHub", need: "GITHUB_TOKEN and GITHUB_REPO" },
            { ok: c.vercel, label: "Vercel", need: "VERCEL_TOKEN and VERCEL_PROJECT_ID" },
            { ok: c.deployHook, label: "Redeploy button", need: "VERCEL_DEPLOY_HOOK_URL" },
            { ok: c.assistant, label: "Assistant", need: "ANTHROPIC_API_KEY" },
          ].map((x) => (
            <li key={x.label} className="flex items-start gap-2.5 bg-white p-4 text-sm">
              <Dot ok={x.ok} />
              <div><p className="font-semibold text-navy-800">{x.label}</p><p className="text-xs text-muted">{x.ok ? "Connected" : `Set ${x.need} in Vercel`}</p></div>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <CardHeader title="Ask the assistant" description="Plain-language questions about errors, the code on GitHub and deployments on Vercel." />
        <div className="p-5"><DeveloperAssistant ready={c.assistant} /></div>
      </Card>

      <Card>
        <CardHeader title="Server error log" description="Every “Something went wrong” page is recorded here with its reference number. Kept for 30 days." action={<span className="flex flex-wrap gap-2"><Link href="/admin/developer/test-error" prefetch={false} className={buttonClass("secondary", "sm")}>Send a test error</Link>{errors.length > 0 && <ClearErrorsButton />}</span>} />
        <form className="flex flex-col gap-2 px-5 pt-4 sm:flex-row" role="search">
          <input name="q" defaultValue={sp.q ?? ""} placeholder="Reference number from the error page, or a word from the message or page" aria-label="Search the error log" className={inputClass} />
          <button className={buttonClass("primary")}>Search</button>
          {sp.q && <Link href="/admin/developer" className={buttonClass("secondary")}>Show all</Link>}
        </form>
        {errors.length ? (
          <Table>
            <thead><tr><Th>When</Th><Th>Reference</Th><Th>Page</Th><Th>What went wrong</Th></tr></thead>
            <tbody>
              {errors.map((e) => (
                <tr key={e.id} className="align-top">
                  <Td className="whitespace-nowrap text-xs">{fmtLagos(e.createdAt)}</Td>
                  <Td className="font-mono text-xs font-bold text-navy-800">{e.digest ?? "—"}</Td>
                  <Td className="text-xs"><span className="font-mono">{e.method} {e.path}</span><p className="text-muted">{e.routePath} · {e.routeType}</p></Td>
                  <Td className="max-w-xl"><p className="text-sm font-semibold text-danger-600">{e.message}</p>{e.stack && <details className="mt-1"><summary className="cursor-pointer text-xs text-royal-600">Technical detail</summary><pre className="mt-1 max-h-60 overflow-auto whitespace-pre-wrap rounded-lg bg-surface p-2 text-[0.68rem] leading-snug text-muted">{e.stack}</pre></details>}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<Bug className="size-6" />} title={sp.q ? "Nothing matches" : "No server error recorded"} description={sp.q ? "Check the reference number, or the error may be older than 30 days." : "When a user sees the error page, the cause appears here."} />
        )}
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Deployments on Vercel" description="Newest first. READY means live; ERROR means the build failed and the previous version is still live." />
          <List value={deployments} empty="Connect Vercel to see deployments." render={(d: DeploymentInfo) => (
            <li key={d.id} className="flex items-start gap-3 px-5 py-3 text-sm">
              <Rocket className="mt-0.5 size-4 shrink-0 text-royal-600" aria-hidden />
              <div className="min-w-0 flex-1"><p className="truncate font-semibold text-navy-800">{d.message ?? "(no message)"}</p><p className="text-xs text-muted">{fmtLagos(new Date(d.created))}{d.commit ? ` · ${d.commit}` : ""}{d.target ? ` · ${d.target}` : ""}</p></div>
              <Badge tone={STATE[d.state] ?? "neutral"}>{d.state}</Badge>
            </li>
          )} />
        </Card>
        <Card>
          <CardHeader title="Latest code on GitHub" description={c.repo ?? "Repository not set."} />
          <List value={commits} empty="Connect GitHub to see commits." render={(m: CommitInfo) => (
            <li key={m.sha} className="flex items-start gap-3 px-5 py-3 text-sm">
              <GitCommitHorizontal className="mt-0.5 size-4 shrink-0 text-royal-600" aria-hidden />
              <div className="min-w-0 flex-1"><p className="truncate font-semibold text-navy-800">{m.message}</p><p className="text-xs text-muted">{fmtLagos(new Date(m.date))} · {m.author}</p></div>
              <span className={m.sha === c.commit ? "rounded-full bg-success-50 px-2 py-0.5 font-mono text-xs font-bold text-success-600" : "font-mono text-xs text-muted"}>{m.sha}{m.sha === c.commit ? " · live" : ""}</span>
            </li>
          )} />
        </Card>
      </div>

      {db && (
        <Card>
          <CardHeader title="Database" description={`Total size ${db.total}. The fifteen largest tables; row counts are estimates.`} />
          <Table>
            <thead><tr><Th>Table</Th><Th>Rows (about)</Th><Th>Size</Th></tr></thead>
            <tbody>{db.tables.map((t) => <tr key={t.table}><Td className="font-mono text-xs">{t.table}</Td><Td className="tabular-nums">{Math.max(0, t.rows).toLocaleString()}</Td><Td>{t.size}</Td></tr>)}</tbody>
          </Table>
        </Card>
      )}

      <Alert tone="info" title="How to connect GitHub and Vercel">
        In Vercel, open the project → Settings → Environment Variables and add: <code>GITHUB_REPO</code> (for example owner/preciousps-cbt-academy) and <code>GITHUB_TOKEN</code> (a fine-grained token with read access to that repository, plus Issues write if you want the assistant to open issues); <code>VERCEL_TOKEN</code> and <code>VERCEL_PROJECT_ID</code> (and <code>VERCEL_TEAM_ID</code> for a team); <code>VERCEL_DEPLOY_HOOK_URL</code> (Settings → Git → Deploy Hooks). Then redeploy. Tokens are read by the server only and are never shown on this page.
      </Alert>
    </div>
  );
}

function List<T>({ value, empty, render }: { value: T[] | string | null; empty: string; render: (x: T) => React.ReactNode }) {
  if (value === null) return <p className="flex items-center gap-2 p-5 text-sm text-muted"><CircleAlert className="size-4" aria-hidden /> {empty}</p>;
  if (typeof value === "string") return <p className="p-5 text-sm text-danger-600">{value}</p>;
  if (!value.length) return <p className="p-5 text-sm text-muted">Nothing yet.</p>;
  return <ul className="divide-y divide-line">{value.map(render)}</ul>;
}
