import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/server/http";
import { getBrand } from "@/server/brand";
import { getCatalog } from "@/server/services/curriculum";
import { AuthShell } from "@/components/auth-shell";
import { RegisterForm } from "../forms";

export const metadata: Metadata = { title: "Student Registration" };

export default async function RegisterPage() {
  const s = await getSession();
  if (s && !s.mfaPending) redirect(s.user.userType === "STUDENT" ? "/student" : "/admin");
  const brand = await getBrand();
  const cat = await getCatalog(brand.schoolId);
  return (
    <AuthShell
      wide
      title="Student registration"
      subtitle={
        <>
          Already registered?{" "}
          <Link href="/login" className="font-semibold text-royal-600 hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <RegisterForm classes={cat.classes.map((c) => ({ value: c.id, label: c.name, level: c.level }))} departments={cat.departments.map((d) => ({ value: d.id, label: d.name, level: d.level }))} />
    </AuthShell>
  );
}
