import type { Metadata } from "next";
import { ClearRateLimitsButton } from "@/components/admin/action-wrappers";
import { emailProvider, EMAIL_SETUP_HINT } from "@/server/email-provider";
import Link from "next/link";
import { requireStaffPage } from "@/server/http";
import { getSettings } from "@/server/settings";
import { aiConfigured } from "@/server/services/ai";
import { SettingsForm, type FieldSpec } from "@/components/admin/settings-forms";
import { GradingEditor } from "@/components/admin/grading-editor";
import { Alert, Card, CardHeader, cx, PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "System Settings" };

const SECTIONS = [
  ["general", "General"],
  ["authentication", "Authentication & sessions"],
  ["password", "Password policy"],
  ["access", "Access codes"],
  ["examination", "Examination"],
  ["grading", "Grading"],
  ["learning", "Curriculum & learning"],
  ["results", "Results & certificates"],
  ["notifications", "Notifications & email"],
  ["ai", "AI"],
  ["uploads", "File uploads"],
  ["localization", "Localization & calendar"],
] as const;

export default async function SettingsPage({ searchParams }: PageProps<"/admin/settings">) {
  const s = await requireStaffPage("super.settings");
  const { section = "general" } = (await searchParams) as { section?: string };
  const st = await getSettings(s.user.schoolId, ["general", "authentication", "passwordPolicy", "accessCodes", "examination", "grading", "learning", "results", "certificates", "notifications", "ai", "uploads", "localization", "academicCalendar"]);
  const F = (x: FieldSpec[]) => x;
  return (
    <>
      <PageHeader eyebrow="Platform" title="System settings" description="Every configurable behaviour, validated on the server. Changes are audited." />
      <div className="grid gap-6 lg:grid-cols-[14rem_1fr]">
        <nav aria-label="Settings sections" className="no-scrollbar flex gap-1 overflow-x-auto lg:flex-col">
          {SECTIONS.map(([k, l]) => (
            <Link key={k} href={`/admin/settings?section=${k}`} className={cx("whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold", section === k ? "bg-navy-800 text-white" : "text-navy-800 hover:bg-white")}>
              {l}
            </Link>
          ))}
          <Link href="/admin/school" className="whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-white">School →</Link>
          <Link href="/admin/branding" className="whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-white">Branding →</Link>
          <Link href="/admin/feature-flags" className="whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-navy-800 hover:bg-white">Feature flags →</Link>
        </nav>
        <div className="space-y-6">
          {section === "general" && (
            <Card>
              <CardHeader title="General" description="Platform identity used in the header, footer and e-mails." />
              <div className="p-5">
                <SettingsForm settingKey="general" initial={st.general} fields={F([
                  { key: "platformName", label: "Platform name", type: "text" },
                  { key: "tagline", label: "Tagline", type: "text" },
                  { key: "positioning", label: "Positioning statement", type: "text" },
                  { key: "poweredBy", label: "Footer credit", type: "text", hint: "Shown in the website footer." },
                  { key: "showPoweredBy", label: "Show footer credit", type: "bool" },
                ])} />
              </div>
            </Card>
          )}
          {section === "authentication" && (
            <Card>
              <CardHeader title="Authentication & sessions" />
              <div className="p-5">
                <SettingsForm settingKey="authentication" initial={st.authentication} fields={F([
                  { key: "maxFailedLogins", label: "Lock account after failed sign-ins", type: "number", min: 3, max: 20 },
                  { key: "lockMinutes", label: "Lock duration (minutes)", type: "number", min: 1, max: 1440 },
                  { key: "studentSessionHours", label: "Student session length (hours)", type: "number", min: 1, max: 720 },
                  { key: "adminSessionHours", label: "Admin session length (hours)", type: "number", min: 1, max: 72 },
                  { key: "maxStudentSessions", label: "Max simultaneous devices per student", type: "number", min: 1, max: 10, hint: "Oldest sessions are signed out when exceeded." },
                  { key: "requireSuperAdmin2fa", label: "Require 2FA for the Super Admin", type: "bool", hint: "Strongly recommended — keep on." },
                  { key: "loginAlerts", label: "Login alerts for administrators", type: "bool" },
                  { key: "registerPerIpPerHour", label: "Registrations allowed per IP address per hour", type: "number", min: 5, max: 100000, hint: "Keep this high: a whole class often shares one school or mobile-network IP." },
                  { key: "registerPerEmailPerHour", label: "Registration attempts per e-mail per hour", type: "number", min: 2, max: 1000 },
                ])} />
                <div className="mt-5 border-t border-line pt-4">
                  <p className="mb-2 text-sm text-muted">Someone locked out by &ldquo;Too many attempts&rdquo;? Lift every current block at once.</p>
                  <ClearRateLimitsButton />
                </div>
              </div>
            </Card>
          )}
          {section === "password" && (
            <Card>
              <CardHeader title="Password policy" description="The minimum can be raised but never set below 10 characters with letters, numbers and a symbol." />
              <div className="p-5">
                <SettingsForm settingKey="passwordPolicy" initial={st.passwordPolicy} fields={F([
                  { key: "minLength", label: "Minimum length", type: "number", min: 10, max: 64 },
                  { key: "requireLetter", label: "Require letters", type: "bool", disabled: true },
                  { key: "requireNumber", label: "Require numbers", type: "bool", disabled: true },
                  { key: "requireSymbol", label: "Require a symbol", type: "bool", disabled: true },
                ])} />
              </div>
            </Card>
          )}
          {section === "access" && (
            <Card>
              <CardHeader title="Access codes" />
              <div className="p-5">
                <SettingsForm settingKey="accessCodes" initial={st.accessCodes} fields={F([
                  { key: "defaultDays", label: "Default access period (days)", type: "number", min: 1, max: 3650, hint: "Access starts at first activation." },
                  { key: "maxBulk", label: "Maximum codes per bulk generation", type: "number", min: 1, max: 5000 },
                  { key: "allowMultipleActive", label: "Allow students to hold more than one active code", type: "bool", hint: "Off by default. Per-student exceptions can be set on a student's profile." },
                ])} />
              </div>
            </Card>
          )}
          {section === "examination" && (
            <Card>
              <CardHeader title="Examination" />
              <div className="p-5">
                <SettingsForm settingKey="examination" initial={st.examination} fields={F([
                  { key: "defaultDurationMinutes", label: "Default duration (minutes)", type: "number", min: 1, max: 600 },
                  { key: "defaultQuestionCount", label: "Default number of questions", type: "number", min: 1, max: 500 },
                  { key: "autosaveSeconds", label: "Autosave interval (seconds)", type: "number", min: 3, max: 120 },
                  { key: "suspiciousThreshold", label: "Flag attempt after N anomalies", type: "number", min: 1, max: 100 },
                  { key: "fullscreenGuidance", label: "Show full-screen guidance before exams", type: "bool" },
                  { key: "singleActiveSession", label: "Single active exam window", type: "bool", hint: "Answers from a second window are rejected until the student takes over (recorded)." },
                ])} />
              </div>
            </Card>
          )}
          {section === "grading" && (
            <Card>
              <CardHeader title="Grading scale" description="Applied to new results; historical results keep the scale they were graded with." />
              <div className="p-5">
                <GradingEditor initial={st.grading.scale} />
              </div>
            </Card>
          )}
          {section === "learning" && (
            <Card>
              <CardHeader title="Curriculum & learning" />
              <div className="p-5">
                <SettingsForm settingKey="learning" initial={st.learning} fields={F([
                  { key: "masteryThreshold", label: "Default mastery threshold (%)", type: "number", min: 1, max: 100, hint: "Lessons can override this individually." },
                  { key: "enforcePrerequisites", label: "Enforce prerequisites", type: "bool" },
                  { key: "allowRetry", label: "Allow classwork retries", type: "bool" },
                ])} />
              </div>
            </Card>
          )}
          {section === "results" && (
            <>
              <Card>
                <CardHeader title="Results" />
                <div className="p-5">
                  <SettingsForm settingKey="results" initial={st.results} fields={F([
                    { key: "defaultVisibility", label: "Default result visibility for new exams", type: "select", options: [{ value: "IMMEDIATE", label: "Immediately after submission" }, { value: "AFTER_RELEASE", label: "After release by the school" }, { value: "HIDDEN", label: "Hidden" }] },
                    { key: "showHistoricalAfterExpiry", label: "Students can view past results after access expires", type: "bool" },
                  ])} />
                </div>
              </Card>
              <Card>
                <CardHeader title="Certificates" />
                <div className="p-5">
                  <SettingsForm settingKey="certificates" initial={st.certificates} fields={F([
                    { key: "enabled", label: "Enable certificates", type: "bool" },
                    { key: "numberPrefix", label: "Certificate number prefix", type: "text", maxLength: 10 },
                    { key: "minimumPercentage", label: "Minimum percentage", type: "number", min: 0, max: 100 },
                  ])} />
                </div>
              </Card>
            </>
          )}
          {section === "notifications" && (
            <Card>
              <CardHeader title="Notifications & email" />
              <div className="p-5 space-y-4">
                {!emailProvider() && <Alert tone="info">E-mail delivery provider is not configured. Messages are held in the outbox — nothing is silently dropped or falsely marked as sent. {EMAIL_SETUP_HINT}</Alert>}
                <SettingsForm settingKey="notifications" initial={st.notifications} fields={F([
                  { key: "emailEnabled", label: "Send e-mail notifications", type: "bool" },
                  { key: "fromName", label: "Sender name", type: "text" },
                  { key: "accessExpiryReminderDays", label: "Access expiry reminder (days before)", type: "number", min: 0, max: 30 },
                ])} />
              </div>
            </Card>
          )}
          {section === "ai" && (
            <Card>
              <CardHeader title="AI" description="AI output always enters PENDING_REVIEW and never goes live without human approval." />
              <div className="p-5 space-y-4">
                {!aiConfigured() && <Alert tone="warning">ANTHROPIC_API_KEY is not set in the server environment, so AI generation is unavailable even if enabled here.</Alert>}
                <SettingsForm settingKey="ai" initial={st.ai} fields={F([
                  { key: "enabled", label: "Enable AI question generation", type: "bool" },
                  { key: "model", label: "Model", type: "text", hint: "Default: claude-opus-5-5" },
                  { key: "maxQuestionsPerRequest", label: "Max questions per request", type: "number", min: 1, max: 50 },
                ])} />
              </div>
            </Card>
          )}
          {section === "uploads" && (
            <Card>
              <CardHeader title="File uploads" description="All uploads are type-sniffed, size-limited and scanned for macros/scripts." />
              <div className="p-5">
                <SettingsForm settingKey="uploads" initial={st.uploads} fields={F([
                  { key: "maxFileMb", label: "Max document size (MB)", type: "number", min: 1, max: 25 },
                  { key: "maxImageMb", label: "Max image size (MB)", type: "number", min: 0.1, max: 10, step: 0.1 },
                ])} />
              </div>
            </Card>
          )}
          {section === "localization" && (
            <>
              <Card>
                <CardHeader title="Localization" />
                <div className="p-5">
                  <SettingsForm settingKey="localization" initial={st.localization} fields={F([
                    { key: "defaultLocale", label: "Default language", type: "select", options: [{ value: "en", label: "English" }, { value: "yo", label: "Yorùbá (catalogue pending)" }, { value: "ha", label: "Hausa (catalogue pending)" }, { value: "ig", label: "Igbo (catalogue pending)" }, { value: "fr", label: "Français (catalogue pending)" }] },
                    { key: "timezone", label: "Timezone", type: "text" },
                    { key: "currency", label: "Currency", type: "text", maxLength: 3 },
                  ])} />
                </div>
              </Card>
              <Card>
                <CardHeader title="Academic calendar" />
                <div className="p-5">
                  <SettingsForm settingKey="academicCalendar" initial={st.academicCalendar} fields={F([
                    { key: "session", label: "Current session", type: "text" },
                    { key: "currentTerm", label: "Current term", type: "text" },
                    { key: "years", label: "Examination years offered", type: "numberList", hint: "Comma-separated. Add future years at any time — no database change needed." },
                  ])} />
                </div>
              </Card>
            </>
          )}
        </div>
      </div>
    </>
  );
}
