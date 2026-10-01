# Precious PS Academy

**Precious PS Academy** · *Building Brighter Minds for a Greater Tomorrow* · *Smart Assessment. Secure Examination. Better Learning.*

A production-grade learning and computer-based-testing platform for secondary school students — Junior Secondary JSS 1–JSS 3 (Basic Education) and Senior Secondary SSS 1–SSS 3 (Science, Commercial, Arts): guided Study Centre, auto-marked classwork and assignments, randomised server-timed CBT, BECE / JAMB / WAEC / NECO preparation, results and analytics — with a Super Admin control centre that manages everything without a developer.

---

## Contents
1. [What's included](#whats-included)
2. [Architecture](#architecture)
3. [Security model](#security-model)
4. [Local development](#local-development)
5. [Deploying to Vercel](#deploying-to-vercel)
6. [First Super Admin](#first-super-admin)
7. [Testing & verification](#testing--verification)
8. [Honest status: live vs. prepared](#honest-status-live-vs-prepared)
9. [Operations](#operations)

---

## What's included

| Area | Highlights |
|---|---|
| **Public website** | Home (hero, students-in-uniform artwork, CTAs), About, Subjects, CBT Practice, Mock Exams, JAMB/WAEC/NECO pages, Study Centre, How It Works, FAQ, Contact, Privacy, Terms, Register, Login. Every text block is CMS-editable with version history. Footer credit *“Powered by Fodan Softnet Inc (+234 806 757 8112)”* (editable) with a small **Backend access** link. |
| **Branding** | Official logo and school-building hero image by default; Super Admin can replace logo, favicon, hero, banners, result/certificate logos, signature and stamp, and set brand colours — all from Admin → Branding. Menus, footer, principal’s message, class-level cards, exam-prep cards and every page are editable in Admin → Homepage & content (versioned). |
| **Accounts** | Student registration with all specified fields, live password-strength meter, **show/hide on every password field** (one reusable component), Argon2id hashing, lockout, rate limiting, session/device management, forgot/reset password, forced password change. |
| **Sections (JSS & SS)** | Every class belongs to a section: **Junior Secondary** (JSS 1–JSS 3, one Junior Secondary group with the Basic Education subjects — Basic Science, Basic Technology, Social Studies, Security Education, Business Studies, Home Economics, PHE, Cultural & Creative Arts, French, Yoruba/Igbo/Hausa, plus shared Mathematics, English, Civic Education, CRS/IRS, Agriculture, Computer Studies, History) or **Senior Secondary** (SSS 1–SSS 3, Science/Commercial/Arts). Topics, lessons, questions, examinations, assignments, resources and announcements are scoped to a section (or explicitly to all sections), enforced on the server: a JSS student never sees SS content, a JSS exam never draws SS questions, and vice versa. JSS students are placed automatically at registration; moving a student (e.g. JSS3 → SS1) re-validates the department. BECE is a first-class exam type with its own public preparation page. |
| **Super Admin** | Mandatory TOTP 2FA + recovery codes, login alerts, secure first-run setup (no hard-coded credentials). Sees all student data except passwords; can force reset, issue one-time reset links or temporary passwords (shown once), revoke sessions, suspend/reactivate — all audited. |
| **RBAC** | Granular permissions; system roles *Question Bank Administrator*, *Examination Administrator*, *Student/Result Administrator*, *Teacher*; custom roles. Super-Admin capabilities can never be assigned to a role. Enforced on every page, server action and API route. |
| **Access codes** | Cryptographically random, unique, non-sequential codes (`PPS-XXXX-XXXX-XXXX`), HMAC-indexed + AES-GCM encrypted. Access starts at **first activation** (default 30 days, configurable). One code ⇄ one student; one active code at a time; race-safe activation (row locks). Extend/reduce/set duration/set expiry/end/suspend/restore/revoke/reactivate with reasons and full history. Server-authoritative countdown that re-syncs with the server. Expired access blocks CBT/Study Centre/assignments but keeps historical results. Expiry message exactly as specified — no payment details. |
| **Study Centre** | Department → Class → Term → Subject → Topic → Subtopic → Lesson → Classwork → Assessment; prerequisites, mandatory/optional topics, locks, per-lesson mastery threshold (default 70%), retry with explanations, progress tracking, resources, video/audio. |
| **Question bank** | Structured metadata (subject, class, department, year, exam type, topic, subtopic, difficulty, marks, source, copyright, approval status, version, authorship, timestamps); MCQ, True/False, multiple-response, numerical, fill-in-the-blank, matching; images; KaTeX maths. Approval workflow DRAFT → PENDING_REVIEW → APPROVED/REJECTED → ARCHIVED; only APPROVED questions enter exams. Immutable version history; duplicate detection; per-question analytics. |
| **Imports** | Word (.docx/.doc) with the **★ correct-answer convention** (★ stripped; >1 ★ rejected; no ★ never guessed), Excel (.xlsx/.xls/.csv) with downloadable template and row-level validation, PowerPoint (.pptx question extraction, else Study Centre resource), PDF (text extraction; scanned PDFs detected and flagged for OCR). Editable preview before commit; everything imported enters PENDING_REVIEW. |
| **AI** | Claude-powered question generation (subject, class, topic, difficulty, count, type) with schema-constrained output, automatic consistency checks (including numeric answer conflicts), provider/model/prompt-version/requester recorded, always PENDING_REVIEW. |
| **CBT engine** | Random selection from the approved pool, option shuffling with correct key mapping, immutable per-attempt snapshot (no regeneration on refresh), server-authoritative timer and auto-submit, continuous autosave with offline queue and recovery, single-active-window enforcement, anomaly logging (tab switches, focus loss, copy/paste, new windows) — honestly *recorded*, not claimed to be prevented. Question palette (current/answered/unanswered/flagged), flag, clear, review, confirm-before-submit, keyboard shortcuts, excellent mobile layout. |
| **Scoring & results** | 100% server-side scoring, negative marking, optional total-marks scaling, configurable grading (default A 70–100 … F <40), result visibility (immediate / after release / hidden), remarks, voiding, release/withhold, printable result page and branded **PDF result slip with QR verification**, public `/verify/{code}`. |
| **Analytics & reports** | Student performance (subject/topic accuracy, weak/strong areas, trend, response time), question analytics, admin dashboard with charts, 12 reports exportable as CSV/Excel/PDF. |
| **Notifications** | In-app notifications & announcements (targeted by class/department), per-category preferences, e-mail outbox (delivers via Resend when configured, otherwise held — never falsely “sent”). Push/SMS/WhatsApp prepared behind flags. |
| **Audit & security** | Append-only audit log (DB trigger rejects UPDATE/DELETE), security events (failed logins, invalid codes, code reuse, IDOR, privilege escalation, API manipulation, rate-limit, malicious uploads, suspicious exam activity) with resolution workflow, session management, system health page. |
| **Settings** | General, school, branding, authentication, password policy, access codes, examination, grading, curriculum, results, certificates, notifications, AI, uploads, localisation & academic calendar, feature flags. |

## Architecture

```
src/
  core/                 Framework-agnostic domain logic (unit-tested; reusable by a React Native app)
    access-engine.ts    code format, activation/expiry maths, adjustments
    exam-engine.ts      selection, shuffling, snapshots, marking, grading
    question-parser.ts  ★ parser, Excel row validation, duplicate fingerprints
    password-policy.ts  shared by client meter and server enforcement
    permissions.ts      RBAC catalogue & checks
  server/
    db/                 Drizzle schema (PostgreSQL) + client
    services/           Business services (auth, access, exams, questions, imports, study, …)
    auth/               Argon2id, sessions, TOTP
    http.ts             Page guards, server-action wrapper, API wrapper (auth, RBAC, CSRF, errors)
    audit.ts, rate-limit.ts, settings.ts, files.ts, crypto.ts
  app/
    (site)/             Public website          (auth)/  Login, register, backend, setup
    student/            Student portal          admin/   Super Admin / admin control centre
    cbt/[attemptId]     Full-screen CBT         api/v1/  Versioned REST API (cookie or Bearer token)
  components/           Design system (UI primitives, forms, password field, charts, CBT)
drizzle/                SQL migrations (incl. integrity constraints & append-only audit trigger)
tests/                  unit + integration (real PostgreSQL via PGlite, full acceptance sequence)
scripts/                migrate, seed, local DB, brand assets, HTTP smoke test
```

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · PostgreSQL (Drizzle ORM) · Zod · KaTeX · Vitest.
- **API-first:** every student flow (auth, access, exams, attempts, results, classwork, assignments) and key admin operations are exposed under `/api/v1`, accepting `Authorization: Bearer <token>` for future Android/iOS apps (Expo) as well as cookies for the web.
- **Multi-school ready:** every tenant-owned row carries `school_id`; the default school is Precious PS Academy.
- **i18n ready:** UI strings are catalogued in `src/i18n` (English complete; Yorùbá, Hausa, Igbo, French slots).
- **Low bandwidth:** server-rendered pages; maths is typeset on the server so students download no math engine; charts are zero-JS SVG; tiny icon set; autosave batches; PWA manifest.
- **Time:** all timestamps stored in UTC (`timestamptz`), displayed in Africa/Lagos.

## Security model

- The server is authoritative for identity, permission, ownership, access entitlement, exam availability, attempt eligibility, timing and scoring. Client values (scores, timers, IDs, expiry) are never trusted.
- Passwords: Argon2id (19 MiB, t=2). Never logged, never returned, never retrievable; audit metadata is redacted.
- Sessions: random 256-bit tokens, stored as HMAC hashes; `httpOnly`, `Secure`, `SameSite=Lax`, `__Host-` prefix in production; revocable; device limits.
- CSRF: server actions are origin-checked by Next.js; cookie-authenticated API writes must be same-origin.
- Headers: per-request nonce CSP (`strict-dynamic`), HSTS, `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy, Permissions-Policy, COOP.
- Uploads: extension allow-list + magic-byte sniffing, size limits, macro/ActiveX/executable rejection, PDF script/launch rejection, zip-bomb guard, private assets access-controlled.
- Rate limits (Postgres-backed, serverless-safe): login, registration, reset, code activation, MFA, AI, uploads, exam saves, exports.
- Database integrity: unique codes/emails/student IDs/question hashes, one live attempt per exam per student (partial unique index), check constraints, transactions and row locks for activation, exam start/submit, extensions and role changes.

## Local development

Requirements: Node.js 20.9+ (tested on Node 24).

```bash
npm install
cp .env.example .env.local        # then fill AUTH_SECRET, ENCRYPTION_KEY, SETUP_TOKEN
npm run db:local                  # terminal 1 — real PostgreSQL engine (PGlite) on 127.0.0.1:5433
npm run db:migrate                # terminal 2
npm run db:seed                   # structure + original sample content (319 questions, lessons, exams)
npm run dev                       # http://localhost:3000
```

Then open `http://localhost:3000/backend` to create the Super Admin (see below).

## Deploying to Vercel

1. **Database:** in Vercel → *Storage* → create a **Neon Postgres** database (or use any managed PostgreSQL with point-in-time recovery) and connect it to the project. It provides `DATABASE_URL`.
2. **Import the GitHub repository** (`folahandaniel-glitch/preciousps-academy`) into your Vercel project/team.
3. **Environment variables** (Production + Preview): `AUTH_SECRET`, `ENCRYPTION_KEY`, `SETUP_TOKEN`, `CRON_SECRET` (generate each with `node -e "console.log(require('crypto').randomBytes(48).toString('base64url'))"`), plus `DATABASE_URL` (set automatically by the Neon integration; `POSTGRES_URL` / `DATABASE_URL_UNPOOLED` are also understood). `APP_URL` is optional — it defaults to the production domain. Optional: `RESEND_API_KEY`, `EMAIL_FROM`, `ANTHROPIC_API_KEY`. Use **different secrets and databases for Preview and Production**. The build runs `npm run preflight` first and stops with a plain checklist if anything required is missing.
4. **Build:** `vercel.json` runs `npm run vercel-build` = migrations → safe structural seed (`--bare`, no demo content) → `next build`.
5. Deploy a **Preview**, run the smoke test against it, then promote to **Production** and run it again:
   ```bash
   BASE_URL=https://<preview-url> SMOKE_EMAIL=… SMOKE_PASSWORD=… SMOKE_TOTP_SECRET=… node scripts/smoke-http.mjs
   ```
6. Cron: `vercel.json` schedules daily maintenance (auto-submit overdue attempts, expire lapsed codes, reminders, cleanup). On Vercel Pro you may tighten it to every 5 minutes. Expiry and auto-submit also happen lazily on every relevant request, so correctness never depends on the cron.

## First Super Admin

Credentials are never hard-coded. Either:
- visit `/backend`: while no Super Admin exists it shows first-time setup. Enter the owner e-mail (`SUPERADMIN_EMAIL`, default `folahandaniel@gmail.com`), paste the `SETUP_TOKEN` as the setup key, and create your password; you are signed in and taken to two-factor enrolment. Only the owner e-mail can claim the platform, and the form disappears once a Super Admin exists, **or**
- set `SUPERADMIN_EMAIL` + `SUPERADMIN_INITIAL_PASSWORD` for the first deploy (a password change and 2FA enrolment are forced at first sign-in), then remove them.

Sign in at `/backend` (also linked, small, in the website footer). The control centre stays locked until 2FA is enabled.

## Testing & verification

| Command | What it proves |
|---|---|
| `npm run lint` · `npm run typecheck` | 0 errors |
| `npm run test:unit` | 37 tests — password policy, access engine, randomisation, option-shuffle key mapping, marking of all question types, grading, RBAC, ★ parser, Excel validation, JSS question-bank correctness |
| `npm run test:integration` | 37 tests on a real, migrated PostgreSQL engine — the §85 acceptance sequence: secure Super Admin + 2FA, three scoped admins, privilege-escalation blocked, curriculum/questions/approval, 2025 Mathematics exam (40 random questions), code UNUSED→ACTIVE (30 days), code reuse rejected, concurrent activation race, random assignment + refresh recovery, manipulated payloads rejected, server-side scoring, IDOR blocked, server-timeout auto-submit, extension/expiry/renewal with audit, append-only audit, exports + PDF slip, Study Centre classwork, assignments, resources, Word/Excel/PDF imports, malicious uploads, lockout, weak passwords, owner-only first-run setup, sign out other devices, JSS/SS separation (registration placement, exams, question pools, Study Centre, assignments, resources, announcements, JSS3 → SS1 promotion) |
| `npm run build` | production build |
| `node scripts/smoke-http.mjs` | 38 HTTP checks against a running server (headers, CSP nonce, every public page, auth redirects, CSRF, admin login with TOTP, real Word/Excel/PDF uploads, malicious upload) |

The same acceptance flow was also exercised end-to-end through the running production build (setup → 2FA → codes → registration → activation → CBT on mobile → submit → result/PDF → extension → expiry → renewal → exports), with all 44 admin pages and 15 student pages rendering without errors.

## Honest status: live vs. prepared

| Live | Prepared (architecture in place, not yet switched on) | Not implemented by design |
|---|---|---|
| Everything in *What's included* | E-mail delivery (needs `RESEND_API_KEY`; held in outbox until then) · AI generation (needs `ANTHROPIC_API_KEY`) · OCR for scanned PDFs (detected and flagged; upload an OCR'd .docx) · certificates issuance (verification live) · parent portal (guardian link table) · teacher portal (teacher role live) · push/SMS/WhatsApp · multi-school tenancy · additional UI languages · essay/file-upload/rubric grading | Payments (Paystack/Flutterwave) — no payment instructions are shown anywhere. Mobile apps are not built or published; the API is ready for them. |

Backups are provided by the managed PostgreSQL service (e.g. Neon point-in-time restore). This app cannot confirm that they are enabled — check your provider settings.

## Operations

- `/admin/system` — live health (DB, secrets, cron, e-mail, AI, backups reminder) and export history.
- `/api/v1/health` — uptime probe (no sensitive data).
- Rotate `SETUP_TOKEN` out of the environment after the first Super Admin exists.
- Seed demo content only in non-production databases (`npm run db:seed`); production uses `--bare`.

---
Built for Precious PS Academy (JSS 1 – SSS 3). Powered by Fodan Softnet Inc (+234 806 757 8112).
