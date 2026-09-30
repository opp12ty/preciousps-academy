import type { Metadata } from "next";
import { desc, eq, isNull, and } from "drizzle-orm";
import { can } from "@/core/permissions";
import { requireStaffPage } from "@/server/http";
import { getDb } from "@/server/db";
import { emailOutbox, notifications } from "@/server/db/schema";
import { getCatalog } from "@/server/services/curriculum";
import { listNotifications, outboxStats } from "@/server/services/notifications";
import { broadcastAction } from "../actions";
import { ActionForm, SelectField, SubmitButton, TextAreaField, TextField } from "@/components/ui/form";
import { SECTION_CHOICES } from "@/core/sections";
import { Alert, Badge, Card, CardHeader, PageHeader, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Notifications" };
const fmt = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d);

export default async function AdminNotifications() {
  const s = await requireStaffPage();
  const canSend = can(s.actor, "notifications.send");
  const db = getDb();
  const [cat, mine, sent, outbox, stats] = await Promise.all([
    getCatalog(s.user.schoolId),
    listNotifications(s.user.id, s.user.schoolId, 20),
    db.select().from(notifications).where(and(eq(notifications.schoolId, s.user.schoolId), isNull(notifications.userId))).orderBy(desc(notifications.createdAt)).limit(20),
    can(s.actor, "super.settings") ? db.select({ id: emailOutbox.id, to: emailOutbox.toEmail, subject: emailOutbox.subject, status: emailOutbox.status, createdAt: emailOutbox.createdAt, error: emailOutbox.error }).from(emailOutbox).where(eq(emailOutbox.schoolId, s.user.schoolId)).orderBy(desc(emailOutbox.createdAt)).limit(20) : Promise.resolve([]),
    outboxStats(s.user.schoolId),
  ]);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Communication" title="Notifications" description="In-app notifications are live. E-mail is queued and delivered when a provider is configured. Push, SMS and WhatsApp are prepared behind feature flags." />
      {canSend && (
        <Card>
          <CardHeader title="Send an announcement" description="Appears in students' notification centre; optionally targeted by section (JSS/SS), class or department." />
          <div className="p-5">
            <ActionForm action={broadcastAction} resetOnSuccess className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <TextField className="sm:col-span-2" label="Title" name="title" required />
              <SelectField label="Category" name="category" options={[{ value: "ANNOUNCEMENT", label: "General announcement" }, { value: "EXAM", label: "Exam announcement" }, { value: "LESSON", label: "New lessons" }, { value: "ASSIGNMENT", label: "Assignments" }, { value: "RESULT", label: "Results" }]} />
              <TextField label="Link (optional)" name="link" placeholder="/student/exams" />
              <SelectField label="Class" name="classId" placeholder="All classes" options={cat.classes.map((c) => ({ value: c.id, label: c.name }))} />
              <SelectField label="Department" name="departmentId" placeholder="All departments" options={cat.departments.map((c) => ({ value: c.id, label: c.name }))} />
              <SelectField label="Section" name="level" options={SECTION_CHOICES} defaultValue="ALL" />
              <TextAreaField className="sm:col-span-2 lg:col-span-4" label="Message" name="body" required rows={3} />
              <div><SubmitButton>Send announcement</SubmitButton></div>
            </ActionForm>
          </div>
        </Card>
      )}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader title="Recent announcements" />
          <ul className="divide-y divide-line">
            {sent.map((n) => (
              <li key={n.id} className="px-5 py-3"><p className="text-sm font-semibold text-navy-800">{n.title} <Badge>{n.category.toLowerCase()}</Badge></p><p className="line-clamp-2 text-xs text-muted">{n.body}</p><p className="text-xs text-muted">{fmt(n.createdAt)}</p></li>
            ))}
            {!sent.length && <li className="px-5 py-4 text-sm text-muted">No announcements yet.</li>}
          </ul>
        </Card>
        <Card>
          <CardHeader title="My notifications" />
          <ul className="divide-y divide-line">
            {mine.map((n) => (
              <li key={n.id} className="px-5 py-3"><p className="text-sm font-semibold text-navy-800">{!n.read && <span className="mr-1.5 inline-block size-2 rounded-full bg-royal-600" />}{n.title}</p><p className="text-xs text-muted">{n.body}</p></li>
            ))}
            {!mine.length && <li className="px-5 py-4 text-sm text-muted">Nothing new.</li>}
          </ul>
        </Card>
      </div>
      {can(s.actor, "super.settings") && (
        <Card>
          <CardHeader title="E-mail outbox" description={`Queued ${stats.QUEUED ?? 0} · Sent ${stats.SENT ?? 0} · Held ${stats.HELD ?? 0} · Failed ${stats.FAILED ?? 0}`} />
          {!process.env.RESEND_API_KEY && <div className="px-5 pt-4"><Alert tone="info">No e-mail provider is configured, so messages are HELD here (not sent). Set RESEND_API_KEY and EMAIL_FROM, then enable e-mail in Settings.</Alert></div>}
          <Table>
            <thead><tr><Th>To</Th><Th>Subject</Th><Th>Status</Th><Th>Created</Th></tr></thead>
            <tbody>
              {outbox.map((m) => (
                <tr key={m.id}><Td className="text-xs">{m.to}</Td><Td className="text-sm">{m.subject}</Td><Td><StatusBadge status={m.status} />{m.error && <p className="text-xs text-danger-600">{m.error}</p>}</Td><Td className="text-xs text-muted">{fmt(m.createdAt)}</Td></tr>
              ))}
              {!outbox.length && <tr><Td colSpan={4} className="text-center text-sm text-muted">No e-mails yet.</Td></tr>}
            </tbody>
          </Table>
        </Card>
      )}
    </div>
  );
}
