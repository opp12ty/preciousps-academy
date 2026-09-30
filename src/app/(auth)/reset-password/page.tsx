import type { Metadata } from "next";
import { AuthShell } from "@/components/auth-shell";
import { Alert } from "@/components/ui/primitives";
import { ResetForm } from "../forms";

export const metadata: Metadata = { title: "Set a new password", robots: { index: false } };

export default async function ResetPage({ searchParams }: PageProps<"/reset-password">) {
  const { token } = await searchParams;
  return (
    <AuthShell title="Set a new password" subtitle="Choose a strong password you have not used before.">
      {typeof token === "string" && token.length > 20 ? <ResetForm token={token} /> : <Alert tone="danger">This reset link is invalid. Request a new one from the login page.</Alert>}
    </AuthShell>
  );
}
