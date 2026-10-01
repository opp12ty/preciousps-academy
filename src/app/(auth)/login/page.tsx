import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/server/http";
import { AuthShell } from "@/components/auth-shell";
import { LoginForm } from "../forms";
import { Alert } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Student Login" };

/** Server actions run under this limit; hashing plus remote-database round trips can exceed the 10 s default. */
export const maxDuration = 60;

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const sp = await searchParams;
  const s = await getSession();
  if (s && !s.mfaPending) redirect(s.user.userType === "STUDENT" ? "/student" : "/admin");
  return (
    <AuthShell
      title="Student login"
      subtitle={
        <>
          New here?{" "}
          <Link href="/register" className="font-semibold text-royal-600 hover:underline">
            Create your student account
          </Link>
        </>
      }
    >
      {sp.reset && <Alert tone="success" className="mb-4">Your password has been reset. Sign in with your new password.</Alert>}
      {sp.signedOut && <Alert tone="info" className="mb-4">You have been signed out securely.</Alert>}
      <LoginForm portal="student" next={typeof sp.next === "string" ? sp.next : undefined} />
    </AuthShell>
  );
}
