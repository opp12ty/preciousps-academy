import type { Metadata } from "next";
import Link from "next/link";
import { MessagesSquare, Pencil } from "lucide-react";
import { SECTION_SHORT, type Section } from "@/core/sections";
import { BLOCK_MESSAGES, type BlockReason } from "@/core/forum-filter";
import { requireStaffPage } from "@/server/http";
import { getSetting } from "@/server/settings";
import { getCatalog } from "@/server/services/curriculum";
import { FORUM_TOPICS, forumStats, listMessagesAdmin, listRoomsAdmin, listSuspensions } from "@/server/services/forum";
import { listReports, REPORT_REASONS, type ReportReason } from "@/server/services/community";
import { ParentRoomsButton, ReportButtons, DefaultRoomsButton, LiftButton, MessageButtons, RoomForm, RoomStateButtons, StaffPostForm } from "@/components/admin/forum-controls";
import { SettingsForm, type FieldSpec } from "@/components/admin/settings-forms";
import { FilterBar, spRecord } from "@/components/admin/filters";
import { Badge, buttonClass, Card, CardHeader, cx, EmptyState, PageHeader, Stat, StatusBadge, Table, Td, Th } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Student Forum" };

const TABS = [
  ["monitor", "Monitor messages"],
  ["rooms", "Rooms"],
  ["suspensions", "Suspensions"],
  ["reports", "Reports"],
  ["settings", "Rules & settings"],
] as const;
const when = (d: Date) => new Intl.DateTimeFormat("en-NG", { timeZone: "Africa/Lagos", dateStyle: "medium", timeStyle: "short" }).format(d);
const topicOptions = Object.entries(FORUM_TOPICS).map(([value, label]) => ({ value, label }));

export default async function ForumAdmin({ searchParams }: PageProps<"/admin/forum">) {
  const s = await requireStaffPage("forum.manage");
  const sp = spRecord(await searchParams);
  const tab = TABS.some(([k]) => k === sp.tab) ? sp.tab! : "monitor";
  const [stats, rooms] = await Promise.all([forumStats(s.user.schoolId), listRoomsAdmin(s.user.schoolId)]);
  const roomOptions = rooms.map(({ r }) => ({ value: r.id, label: `${r.name} (${r.level ? (SECTION_SHORT[r.level as Section] ?? r.level) : "All"})` }));
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Communication" title="Student forum" description="Read every message, remove what should not be there, suspend students who break the rules, and set the rooms, hours and limits." />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Stat label="In the forum now" value={stats.online} tone="green" />
        <Stat label="Messages (24 hours)" value={stats.today} />
        <Stat label="Blocked by filter (24 hours)" value={stats.blocked} tone="gold" />
        <Stat label="Removed by staff" value={stats.removed} tone="navy" />
        <Stat label="Suspended students" value={stats.suspended} tone="red" />
      </div>
      <nav aria-label="Forum sections" className="no-scrollbar flex gap-1 overflow-x-auto">
        {TABS.map(([k, l]) => (
          <Link key={k} href={`/admin/forum?tab=${k}`} className={cx("whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-semibold", tab === k ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>
            {l}
          </Link>
        ))}
      </nav>

      {tab === "monitor" && <Monitor schoolId={s.user.schoolId} sp={sp} roomOptions={roomOptions} />}

      {tab === "rooms" && <Rooms schoolId={s.user.schoolId} rooms={rooms} />}

      {tab === "suspensions" && <Suspensions schoolId={s.user.schoolId} />}

      {tab === "reports" && <Reports schoolId={s.user.schoolId} />}

      {tab === "settings" && <Settings schoolId={s.user.schoolId} />}
    </div>
  );
}

async function Monitor({ schoolId, sp, roomOptions }: { schoolId: string; sp: Record<string, string | undefined>; roomOptions: { value: string; label: string }[] }) {
  const rows = await listMessagesAdmin(schoolId, { roomId: sp.roomId, status: sp.status, search: sp.search, userId: sp.userId });
  return (
    <>
      <FilterBar
        action="/admin/forum"
        values={{ ...sp, tab: "monitor" }}
        filters={[
          { type: "search", name: "search", placeholder: "Words in the message, or a student's name" },
          { type: "select", name: "roomId", label: "Room", options: roomOptions },
          { type: "select", name: "status", label: "Status", options: [{ value: "VISIBLE", label: "Visible to students" }, { value: "BLOCKED", label: "Blocked by the filter" }, { value: "DELETED", label: "Removed by staff" }] },
        ]}
      />
      {sp.roomId && (
        <Card className="p-4">
          <StaffPostForm roomId={sp.roomId} />
        </Card>
      )}
      <Card>
        {rows.length ? (
          <Table>
            <thead><tr><Th>When</Th><Th>Student</Th><Th>Room</Th><Th>Message</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {rows.map(({ m, room, firstName, lastName, userType, studentNumber, className }) => (
                <tr key={m.id} className="align-top">
                  <Td className="whitespace-nowrap text-xs text-muted">{when(m.createdAt)}</Td>
                  <Td>
                    {userType === "STUDENT" ? (
                      <Link href={`/admin/students/${m.userId}`} className="font-semibold text-navy-800 hover:text-royal-600">{firstName} {lastName}</Link>
                    ) : (
                      <span className="font-semibold text-navy-800">{firstName} {lastName} <Badge tone="gold">Staff</Badge></span>
                    )}
                    <p className="text-xs text-muted">{[className, studentNumber].filter(Boolean).join(" · ")}</p>
                    {userType === "STUDENT" && <Link href={`/admin/forum?tab=monitor&userId=${m.userId}`} className="text-xs font-semibold text-royal-600 hover:underline">All their messages</Link>}
                  </Td>
                  <Td className="text-sm">{room}</Td>
                  <Td className="max-w-md"><p className="whitespace-pre-wrap break-words text-sm">{m.body}</p>{m.reason && <p className="mt-1 text-xs text-danger-600">{m.status === "BLOCKED" ? (BLOCK_MESSAGES[m.reason as BlockReason] ?? m.reason) : m.reason}</p>}</Td>
                  <Td><Badge tone={m.status === "VISIBLE" ? "green" : m.status === "BLOCKED" ? "amber" : "red"}>{m.status === "VISIBLE" ? "Visible" : m.status === "BLOCKED" ? "Blocked" : "Removed"}</Badge></Td>
                  <Td><MessageButtons id={m.id} status={m.status} userId={m.userId} isStudent={userType === "STUDENT"} canSuspend /></Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<MessagesSquare className="size-6" />} title="No messages" description="Messages appear here as students post. Blocked attempts are listed too, though students never saw them." />
        )}
      </Card>
      <p className="text-xs text-muted">Showing the latest 200 messages for the filters chosen. To suspend a student&apos;s whole account (not just the forum), open the student from the Students page.</p>
    </>
  );
}

async function Rooms({ schoolId, rooms }: { schoolId: string; rooms: Awaited<ReturnType<typeof listRoomsAdmin>> }) {
  const cat = await getCatalog(schoolId);
  const classes = cat.classes.map((c) => ({ value: c.id, label: c.name }));
  return (
    <>
      <Card>
        <CardHeader title="Add a room" action={<div className="flex flex-wrap gap-2"><DefaultRoomsButton /><ParentRoomsButton /></div>} description="Starter rooms: four rooms for every class (class discussion, subjects and homework, tests and examinations, teach each other), plus section-wide rooms used when the forum is not class-based." />
        <div className="p-5"><RoomForm classes={classes} topics={topicOptions} /></div>
      </Card>
      <Card>
        {rooms.length ? (
          <Table>
            <thead><tr><Th>Room</Th><Th>Topic</Th><Th>Who can enter</Th><Th>Messages</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
            <tbody>
              {rooms.map(({ r, className, messages }) => (
                <tr key={r.id} className="align-top">
                  <Td className="max-w-sm"><Link href={`/admin/forum?tab=monitor&roomId=${r.id}`} className="font-semibold text-navy-800 hover:text-royal-600">{r.name}</Link><p className="line-clamp-2 text-xs text-muted">{r.description}</p></Td>
                  <Td><Badge tone="navy">{FORUM_TOPICS[r.topic as keyof typeof FORUM_TOPICS] ?? r.topic}</Badge></Td>
                  <Td className="text-sm">{r.audience === "PARENT" ? "Parents only" : className ? `${className} only` : r.level ? `All ${SECTION_SHORT[r.level as Section] ?? r.level} students` : "All students"}</Td>
                  <Td>{messages}</Td>
                  <Td>{r.archivedAt ? <StatusBadge status="ARCHIVED" /> : r.isLocked ? <Badge tone="amber">Read only</Badge> : <Badge tone="green">Open</Badge>}</Td>
                  <Td className="text-right">
                    <div className="flex flex-wrap justify-end gap-1.5">
                      <Link href={`/admin/forum?tab=monitor&roomId=${r.id}`} className={buttonClass("ghost", "sm")}>Read</Link>
                      <details className="relative text-left">
                        <summary className={buttonClass("secondary", "sm", "list-none cursor-pointer")}><Pencil className="size-4" /> Edit</summary>
                        <div className="absolute right-0 z-20 mt-2 w-[min(52rem,92vw)] rounded-2xl border border-line bg-white p-4 shadow-lift"><RoomForm room={r} classes={classes} topics={topicOptions} /></div>
                      </details>
                      <RoomStateButtons id={r.id} isLocked={r.isLocked} archived={Boolean(r.archivedAt)} />
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <EmptyState icon={<MessagesSquare className="size-6" />} title="No rooms yet" description="Press “Create starter rooms”, or add your own above." />
        )}
      </Card>
    </>
  );
}

async function Reports({ schoolId }: { schoolId: string }) {
  const rows = await listReports(schoolId);
  return (
    <Card>
      <CardHeader title="Reported messages" description="Reports from students (student forum) and parents (parent community) that are waiting for a moderator." />
      {rows.length ? (
        <Table>
          <thead><tr><Th>Message</Th><Th>Reason</Th><Th>Room</Th><Th>Reported by</Th><Th className="text-right">Actions</Th></tr></thead>
          <tbody>
            {rows.map(({ r, body, messageStatus, room, audience, reporterFirst, reporterLast }) => (
              <tr key={r.id} className="align-top">
                <Td className="max-w-md text-sm"><p className="whitespace-pre-wrap break-words">{body}</p>{messageStatus !== "VISIBLE" && <Badge className="mt-1">already removed</Badge>}</Td>
                <Td><Badge tone="amber">{REPORT_REASONS[r.reason as ReportReason] ?? r.reason}</Badge>{r.detail && <p className="mt-1 text-xs text-muted">{r.detail}</p>}</Td>
                <Td className="text-sm">{room}<p className="text-xs text-muted">{audience === "PARENT" ? "Parent community" : "Student forum"}</p></Td>
                <Td className="text-sm">{reporterFirst} {reporterLast}<p className="text-xs text-muted">{when(r.createdAt)}</p></Td>
                <Td className="text-right"><ReportButtons id={r.id} messageId={r.messageId} messageStatus={messageStatus} /></Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState title="No open reports" description="Messages reported by members appear here." />
      )}
    </Card>
  );
}

async function Suspensions({ schoolId }: { schoolId: string }) {
  const rows = await listSuspensions(schoolId);
  return (
    <Card>
      {rows.length ? (
        <Table>
          <thead><tr><Th>Student</Th><Th>Reason</Th><Th>From</Th><Th>Until</Th><Th>Status</Th><Th className="text-right">Actions</Th></tr></thead>
          <tbody>
            {rows.map(({ s, firstName, lastName, studentNumber, className, active }) => {
              return (
                <tr key={s.id} className="align-top">
                  <Td><Link href={`/admin/students/${s.userId}`} className="font-semibold text-navy-800 hover:text-royal-600">{firstName} {lastName}</Link><p className="text-xs text-muted">{[className, studentNumber].filter(Boolean).join(" · ")}</p></Td>
                  <Td className="max-w-sm text-sm">{s.reason}{!s.createdBy && <Badge className="ml-1">Automatic</Badge>}</Td>
                  <Td className="whitespace-nowrap text-xs">{when(s.createdAt)}</Td>
                  <Td className="whitespace-nowrap text-xs">{s.until ? when(s.until) : "Until lifted"}</Td>
                  <Td><Badge tone={active ? "red" : "neutral"}>{active ? "Suspended" : s.liftedAt ? "Lifted" : "Ended"}</Badge></Td>
                  <Td className="text-right">{active && <LiftButton id={s.id} />}</Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <EmptyState title="No suspensions" description="To suspend a student, use the Suspend button beside one of their messages under Monitor messages." />
      )}
    </Card>
  );
}

async function Settings({ schoolId }: { schoolId: string }) {
  const cfg = await getSetting(schoolId, "forum");
  const fields: FieldSpec[] = [
    { key: "enabled", label: "Forum switched on", type: "bool", hint: "Switch off to close the forum to every student at once." },
    { key: "blockLinks", label: "Block links", type: "bool", hint: "Refuse messages containing web addresses." },
    { key: "classBased", label: "Class-based forum", type: "bool", hint: "Students enter only the rooms made for their own class. Press “Create starter rooms” on the Rooms tab to give every class its rooms." },
    { key: "openHour", label: "Opens at (hour, 0–23)", type: "number", min: 0, max: 23, hint: "10 = 10am. School time (Africa/Lagos unless changed under Localization)." },
    { key: "closeHour", label: "Closes at (hour, 1–24)", type: "number", min: 1, max: 24, hint: "22 = 10pm." },
    { key: "dailyMinutes", label: "Time allowed per student per day (minutes)", type: "number", min: 5, max: 1440, hint: "120 = 2 hours. Only time with a room open counts." },
    { key: "maxMessageLength", label: "Longest message (characters)", type: "number", min: 50, max: 2000 },
    { key: "slowModeSeconds", label: "Wait between messages (seconds)", type: "number", min: 0, max: 300, hint: "0 = no waiting." },
    { key: "autoSuspendAfter", label: "Suspend automatically after N blocked messages in 24 hours", type: "number", min: 0, max: 100, hint: "0 = never suspend automatically." },
    { key: "autoSuspendDays", label: "Length of automatic suspension (days)", type: "number", min: 1, max: 365 },
    { key: "blockedWords", label: "Blocked words and phrases (separated by commas)", type: "textarea", hint: "Messages containing any of these are refused. Phone numbers, e-mails, addresses, locations and social-media contacts are always refused." },
    { key: "rules", label: "Forum rules shown to students", type: "textarea" },
  ];
  return (
    <Card>
      <CardHeader title="Rules & settings" description="Changes take effect immediately for every student." />
      <div className="p-5"><SettingsForm settingKey="forum" initial={cfg} fields={fields} /></div>
    </Card>
  );
}
