"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { buttonClass, inputClass } from "@/components/ui/primitives";
import { ActionForm, CheckboxField, NewPasswordPair, PasswordField, SelectField, SubmitButton, TextField } from "@/components/ui/form";
import { backendLoginAction, forgotAction, mfaAction, ownerCheckAction, registerAction, resetAction, setupAction, studentLoginAction } from "./actions";

export function LoginForm({ portal, next }: { portal: "student" | "backend"; next?: string }) {
  return (
    <ActionForm action={portal === "student" ? studentLoginAction : backendLoginAction} className="space-y-4">
      {next && <input type="hidden" name="next" value={next} />}
      <TextField label={portal === "student" ? "Email, Student ID or username" : "Email address"} name="identifier" autoComplete="username" required autoFocus />
      <PasswordField label="Password" name="password" autoComplete="current-password" />
      <div className="flex justify-end">
        <Link href="/forgot-password" className="text-sm font-semibold text-royal-600 hover:underline">
          Forgot password?
        </Link>
      </div>
      <SubmitButton className="w-full" size="lg" pendingText="Signing in…">
        Sign in
      </SubmitButton>
    </ActionForm>
  );
}

export function MfaForm({ next }: { next?: string }) {
  return (
    <ActionForm action={mfaAction} className="space-y-4">
      {next && <input type="hidden" name="next" value={next} />}
      <TextField label="Authentication code" name="code" inputMode="numeric" autoComplete="one-time-code" placeholder="123456" required autoFocus hint="Enter the 6-digit code from your authenticator app, or one of your recovery codes (e.g. 7F3K-9QPA)." />
      <SubmitButton className="w-full" size="lg" pendingText="Verifying…">
        Verify and continue
      </SubmitButton>
    </ActionForm>
  );
}

type LevelledOption = { value: string; label: string; level: string | null };

/**
 * Class first, then department. Only departments offered in the class's section are listed; when
 * there is just one (JSS1–JSS3 → Junior Secondary) it is chosen automatically.
 */
function ClassAndDepartment({ classes, departments }: { classes: LevelledOption[]; departments: LevelledOption[] }) {
  const [classId, setClassId] = useState("");
  const level = classes.find((c) => c.value === classId)?.level ?? null;
  const options = classId ? departments.filter((d) => !d.level || d.level === level) : [];
  return (
    <>
      <SelectField label="Class" name="classId" required placeholder="Select class" options={classes} value={classId} onChange={(e) => setClassId(e.target.value)} />
      {options.length === 1 ? (
        <div>
          <input type="hidden" name="departmentId" value={options[0].value} />
          <p className="text-sm font-semibold text-navy-800">Department</p>
          <p className="mt-1.5 rounded-xl bg-surface px-3.5 py-2.5 text-sm text-navy-800 ring-1 ring-line">{options[0].label}</p>
        </div>
      ) : (
        <SelectField
          key={level ?? "none"}
          label="Department"
          name="departmentId"
          required={options.length > 1}
          disabled={!classId || options.length === 0}
          placeholder={classId ? "Select department" : "Select your class first"}
          options={options.map(({ value, label }) => ({ value, label }))}
        />
      )}
    </>
  );
}

export function RegisterForm({ classes, departments }: { classes: LevelledOption[]; departments: LevelledOption[] }) {
  const [names, setNames] = useState<string[]>([]);
  return (
    <ActionForm action={registerAction} className="space-y-5">
      <fieldset className="space-y-4">
        <legend className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">Personal details</legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <TextField label="First name" name="firstName" autoComplete="given-name" required onBlur={(e) => setNames((n) => [e.target.value, n[1] ?? ""])} />
          <TextField label="Middle name" name="middleName" autoComplete="additional-name" />
          <TextField label="Last name" name="lastName" autoComplete="family-name" required onBlur={(e) => setNames((n) => [n[0] ?? "", e.target.value])} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Email" name="email" type="email" autoComplete="email" required />
          <TextField label="Phone number" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="0803 000 0000" required />
          <TextField label="Date of birth" name="dateOfBirth" type="date" />
          <SelectField label="Gender" name="gender" placeholder="Prefer not to say" options={[{ value: "FEMALE", label: "Female" }, { value: "MALE", label: "Male" }]} />
        </div>
      </fieldset>
      <fieldset className="space-y-4">
        <legend className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">School details</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Student ID" name="studentNumber" required placeholder="e.g. PPS/2026/0142" />
          <TextField label="School" name="schoolName" defaultValue="Precious PS Academy" />
          <ClassAndDepartment classes={classes} departments={departments} />
          <TextField label="State" name="state" autoComplete="address-level1" />
          <TextField label="Country" name="country" defaultValue="Nigeria" autoComplete="country-name" />
        </div>
      </fieldset>
      <fieldset className="space-y-4">
        <legend className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-gold-600">Account security</legend>
        <TextField label="Username (optional)" name="username" autoComplete="username" hint="You can sign in with your email, Student ID or username." />
        <NewPasswordPair context={names} />
      </fieldset>
      <CheckboxField
        name="acceptTerms"
        label={
          <>
            I agree to the{" "}
            <Link href="/terms" className="text-royal-600 underline" target="_blank">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-royal-600 underline" target="_blank">
              Privacy Policy
            </Link>
            .
          </>
        }
      />
      <SubmitButton className="w-full" size="lg" pendingText="Creating your account…">
        Create student account
      </SubmitButton>
    </ActionForm>
  );
}

export function ForgotForm() {
  return (
    <ActionForm action={forgotAction} className="space-y-4" resetOnSuccess successMessage="Check your email.">
      <TextField label="Email address" name="email" type="email" autoComplete="email" required />
      <SubmitButton className="w-full" size="lg">
        Send reset link
      </SubmitButton>
    </ActionForm>
  );
}

export function ResetForm({ token }: { token: string }) {
  return (
    <ActionForm action={resetAction} className="space-y-4">
      <input type="hidden" name="token" value={token} />
      <NewPasswordPair name="newPassword" label="New password" />
      <SubmitButton className="w-full" size="lg">
        Set new password
      </SubmitButton>
    </ActionForm>
  );
}

/**
 * First-run owner setup. Step 1: the owner types their e-mail. Step 2: they paste the one-time
 * setup key (proves they control the server, so nobody else can claim the platform) and create
 * their own password, which is hashed with Argon2id and saved on the server.
 */
export function OwnerSetupForm() {
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  if (!confirmed) {
    return (
      <form
        className="space-y-4"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          setError(null);
          start(async () => {
            const r = await ownerCheckAction(email.trim());
            if (r.ok) setConfirmed(true);
            else setError(r.error);
          });
        }}
      >
        <label className="block text-sm font-semibold text-navy-800">
          Email address
          <input className={`${inputClass} mt-1.5`} type="email" name="email" autoComplete="username" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        {error && <p role="alert" className="rounded-xl border border-red-200 bg-danger-50 px-4 py-3 text-sm text-danger-600">{error}</p>}
        <button type="submit" disabled={pending || !email.trim()} className={buttonClass("primary", "lg", "w-full")}>
          {pending ? "Checking…" : "Continue"}
        </button>
      </form>
    );
  }
  return (
    <ActionForm action={setupAction} className="space-y-4">
      <input type="hidden" name="email" value={email.trim()} />
      <div className="flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-3 text-sm ring-1 ring-line">
        <span className="min-w-0 truncate">
          Setting up <strong className="text-navy-800">{email.trim()}</strong>
        </span>
        <button type="button" className="shrink-0 font-semibold text-royal-600 hover:underline" onClick={() => setConfirmed(false)}>
          Change
        </button>
      </div>
      <PasswordField
        label="Setup key"
        name="setupToken"
        autoComplete="one-time-code"
        hint="Paste the SETUP_TOKEN value from your vercel-secrets.txt file. It is needed only this once, so nobody else can claim your platform."
      />
      <NewPasswordPair label="Create your password" context={[email.split("@")[0]]} />
      <SubmitButton className="w-full" size="lg" pendingText="Creating your account…">
        Create my account and sign in
      </SubmitButton>
    </ActionForm>
  );
}
