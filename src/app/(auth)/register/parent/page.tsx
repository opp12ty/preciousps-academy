import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/server/http";
import { getBrand } from "@/server/brand";
import { getSetting } from "@/server/settings";
import { AuthShell } from "@/components/auth-shell";
import { Alert } from "@/components/ui/primitives";
import { ParentRegisterForm } from "../../forms";

export const metadata: Metadata = { title: "Parent / Guardian Registration" };

export default async function ParentRegisterPage() {
  const s = await getSession();
  if (s && !s.mfaPending) redirect(s.user.userType === "STUDENT" ? "/student" : s.user.userType === "PARENT" ? "/parent" : "/admin");
  const brand = await getBrand();
  const cfg = await getSetting(brand.schoolId, "parents");
  return (
    <AuthShell
      wide
      title="Parent / guardian registration"
      subtitle={
        <>
          Already registered?{" "}
          <Link href="/login" className="font-semibold text-royal-600 hover:underline">
            Sign in
          </Link>{" "}
          · Registering a student?{" "}
          <Link href="/register" className="font-semibold text-royal-600 hover:underline">
            Student registration
          </Link>
        </>
      }
    >
      {cfg.registrationOpen ? <ParentRegisterForm /> : <Alert tone="warning">Parent and guardian registration is closed at the moment. Please contact the school.</Alert>}
    </AuthShell>
  );
}
