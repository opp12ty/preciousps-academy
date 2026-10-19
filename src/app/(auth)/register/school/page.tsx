import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/server/http";
import { AuthShell } from "@/components/auth-shell";
import { SchoolRegisterForm } from "../../forms";

export const metadata: Metadata = { title: "School Registration" };

export default async function SchoolRegisterPage() {
  const s = await getSession();
  if (s && !s.mfaPending) redirect(s.user.userType === "STUDENT" ? "/student" : s.user.userType === "PARENT" ? "/parent" : "/admin");
  return (
    <AuthShell
      scene="register"
      wide
      title="School registration"
      subtitle={
        <>
          For schools preparing their examination classes: Basic 4 to 6, JSS 2 and 3, and SS 2 and 3. Already registered?{" "}
          <Link href="/login" className="font-semibold text-royal-600 hover:underline">
            Sign in
          </Link>{" "}
          · Registering one learner?{" "}
          <Link href="/register" className="font-semibold text-royal-600 hover:underline">
            Student registration
          </Link>
        </>
      }
    >
      <SchoolRegisterForm />
    </AuthShell>
  );
}
