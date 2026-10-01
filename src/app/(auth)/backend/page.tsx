import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/server/http";
import { superAdminExists } from "@/server/services/auth";
import { AuthShell } from "@/components/auth-shell";
import { Alert } from "@/components/ui/primitives";
import { LoginForm, OwnerSetupForm } from "../forms";

export const metadata: Metadata = { title: "Backend access", robots: { index: false, follow: false } };

/** Server actions run under this limit; hashing plus remote-database round trips can exceed the 10 s default. */
export const maxDuration = 60;

export default async function BackendLoginPage({ searchParams }: PageProps<"/backend">) {
  const sp = await searchParams;
  const s = await getSession();
  if (s?.mfaPending) redirect("/backend/verify");
  if (s && s.user.userType !== "STUDENT") redirect("/admin");
  if (!(await superAdminExists())) {
    const configured = Boolean(process.env.SETUP_TOKEN && process.env.SETUP_TOKEN.length >= 16);
    return (
      <AuthShell variant="backend" title="Set up your Super Admin account" subtitle="First-time setup. Enter the owner e-mail address, then create your password.">
        {configured ? (
          <OwnerSetupForm />
        ) : (
          <Alert tone="danger" title="Setup key not configured">
            Add SETUP_TOKEN (16+ characters) to the server environment variables and redeploy, then reload this page.
          </Alert>
        )}
      </AuthShell>
    );
  }
  return (
    <AuthShell variant="backend" title="Administrator sign in" subtitle="For the Super Admin and authorised administrators only.">
      {sp.signedOut && <Alert tone="info" className="mb-4">You have been signed out.</Alert>}
      <LoginForm portal="backend" next={typeof sp.next === "string" ? sp.next : undefined} />
    </AuthShell>
  );
}
