import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/server/http";
import { AuthShell } from "@/components/auth-shell";
import { LoginForm } from "../forms";
import { Alert } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Sign in" };

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const sp = await searchParams;
  const s = await getSession();
  if (s && !s.mfaPending) redirect(s.user.userType === "STUDENT" ? "/student" : s.user.userType === "PARENT" ? "/parent" : "/admin");
  return (
    <AuthShell
      scene="login"
      title="Sign in"
      subtitle={
        <>
          New here?{" "}
          <Link href="/register" className="font-semibold text-royal-600 hover:underline">
            Create your student account
          </Link>{" "}
          ·{" "}
          <Link href="/register/parent" className="font-semibold text-royal-600 hover:underline">
            Parent / guardian registration
          </Link>{" "}
          ·{" "}
          <Link href="/register/school" className="font-semibold text-royal-600 hover:underline">
            School registration
          </Link>
        </>
      }
    >
      {sp.reset && <Alert tone="success" className="mb-4">Your password has been reset. Sign in with your new password.</Alert>}
      {sp.signedOut && <Alert tone="info" className="mb-4">You have been signed out securely.</Alert>}
      <LoginForm portal="student" next={typeof sp.next === "string" ? sp.next : undefined} />
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          { who: "Students", how: "Student ID, username or e-mail", href: "/register", cta: "Register a student" },
          { who: "Parents", how: "Your e-mail address", href: "/register/parent", cta: "Register a parent" },
          { who: "Schools", how: "School Code, username or e-mail", href: "/register/school", cta: "Register a school" },
        ].map((x) => (
          <div key={x.who} className="rounded-xl border border-line bg-surface p-3 text-xs">
            <p className="text-sm font-extrabold text-navy-800">{x.who}</p>
            <p className="mt-0.5 text-muted">Sign in with: {x.how}</p>
            <Link href={x.href} className="mt-1.5 inline-block font-bold text-royal-600 hover:underline">{x.cta}</Link>
          </div>
        ))}
      </div>
    </AuthShell>
  );
}
