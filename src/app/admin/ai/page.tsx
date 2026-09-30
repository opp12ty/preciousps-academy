import type { Metadata } from "next";
import { desc, eq } from "drizzle-orm";
import { requireStaffPage } from "@/server/http";
import { getDb } from "@/server/db";
import { aiQuestionRequests, users } from "@/server/db/schema";
import { getCatalog } from "@/server/services/curriculum";
import { topicOptions } from "@/server/services/pickers";
import { aiConfigured, PROMPT_VERSION } from "@/server/services/ai";
import { getSettings } from "@/server/settings";
import { AiForm } from "@/components/admin/ai-form";
import { Alert, Card, CardHeader, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "AI Question Generator" };

export default async function AiPage() {
  const s = await requireStaffPage("questions.ai");
  const [cat, topics, st, history] = await Promise.all([
    getCatalog(s.user.schoolId),
    topicOptions(s.user.schoolId),
    getSettings(s.user.schoolId, ["ai", "featureFlags"]),
    getDb().select({ r: aiQuestionRequests, by: users.email }).from(aiQuestionRequests).leftJoin(users, eq(users.id, aiQuestionRequests.createdBy)).where(eq(aiQuestionRequests.schoolId, s.user.schoolId)).orderBy(desc(aiQuestionRequests.createdAt)).limit(20),
  ]);
  const ready = aiConfigured() && st.ai.enabled && st.featureFlags.ai;
  const o = <T extends { id: string; name: string }>(x: T[]) => x.map((y) => ({ value: y.id, label: y.name }));
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Question bank" title="AI question generator" description={`Drafts original questions with explanations. Every item enters PENDING_REVIEW with provider, model (${st.ai.model}), prompt version (${PROMPT_VERSION}), time and requester recorded. AI never replaces human approval.`} />
      {!ready && (
        <Alert tone="warning" title="AI generation is not active">
          {!aiConfigured() ? "Set ANTHROPIC_API_KEY in the server environment. " : ""}
          {!st.ai.enabled || !st.featureFlags.ai ? "Enable it in Settings → AI and Feature Flags." : ""}
        </Alert>
      )}
      <Card>
        <CardHeader title="Generate questions" description="Automatic checks reject malformed items (wrong option count, duplicate options, numeric answer conflicts) before a human ever reviews them." />
        <div className="p-5">
          <AiForm subjects={o(cat.subjects)} classes={o(cat.classes)} topics={topics} max={st.ai.maxQuestionsPerRequest} />
        </div>
      </Card>
      <Card>
        <CardHeader title="Generation history" />
        <Table>
          <thead><tr><Th>When</Th><Th>By</Th><Th>Model</Th><Th>Prompt</Th><Th>Status</Th><Th>Created</Th><Th>Rejected</Th></tr></thead>
          <tbody>
            {history.map(({ r, by }) => (
              <tr key={r.id}>
                <Td className="text-xs">{new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(r.createdAt)}</Td>
                <Td className="text-xs">{by}</Td>
                <Td className="font-mono text-xs">{r.model}</Td>
                <Td className="font-mono text-xs">{r.promptVersion}</Td>
                <Td><StatusBadge status={r.status === "SUCCEEDED" ? "COMPLETED" : "FAILED"} />{r.error && <p className="text-xs text-danger-600">{r.error}</p>}</Td>
                <Td>{r.generatedCount}</Td>
                <Td>{r.rejectedCount}</Td>
              </tr>
            ))}
            {!history.length && <tr><Td colSpan={7} className="text-center text-sm text-muted">No generations yet.</Td></tr>}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
