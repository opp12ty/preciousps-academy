import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/server/http";
import { AuthShell } from "@/components/auth-shell";
import { MfaForm } from "../../forms";
import { logoutAction } from "../../actions";

export const metadata: Metadata = { title: "Two-factor verification", robots: { index: false } };

export default async function VerifyPage({ searchParams }: PageProps<"/backend/verify">) {
  const sp = await searchParams;
  const s = await getSession();
  if (!s) redirect("/backend");
  if (!s.mfaPending) redirect("/admin");
  return (
    <AuthShell variant="backend" title="Two-factor verification" subtitle={`Signed in as ${s.user.email}.`}>
      <MfaForm next={typeof sp.next === "string" ? sp.next : undefined} />
      <form action={logoutAction} className="mt-4 text-center">
        <button className="text-sm font-semibold text-muted hover:text-navy-800">Cancel and sign out</button>
      </form>
    </AuthShell>
  );
}
