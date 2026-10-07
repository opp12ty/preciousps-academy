import type { Metadata } from "next";
import Link from "next/link";
import { getBrand } from "@/server/brand";
import { getDefaultSchoolId } from "@/server/settings";
import { emailReady } from "@/server/services/notifications";
import { Alert } from "@/components/ui/primitives";
import { AuthShell } from "@/components/auth-shell";
import { ForgotForm } from "../forms";

export const metadata: Metadata = { title: "Forgot password" };

export default async function ForgotPage() {
  const brand = await getBrand();
  const canMail = await emailReady(await getDefaultSchoolId());
  return (
    <AuthShell title="Reset your password" subtitle={canMail ? "Enter the email address on your account and we'll send you a secure reset link." : "Password reset by e-mail is not available at the moment."}>
      {canMail ? (
        <ForgotForm />
      ) : (
        <Alert tone="warning" title="Ask the school to reset your password">
          Reset links cannot be sent by e-mail right now. Contact the Super Admin on <strong>{brand.phone}</strong> with your name and Student ID. You will be given a temporary password and asked to choose a new one when you sign in.
        </Alert>
      )}
      <p className="mt-6 rounded-xl bg-surface px-4 py-3 text-sm text-muted">
        No access to your email? Contact the Super Admin on <strong className="text-navy-800">{brand.phone}</strong>. For your security, administrators can reset your password but can never see it.
      </p>
      <p className="mt-4 text-center text-sm">
        <Link href="/login" className="font-semibold text-royal-600 hover:underline">
          Back to sign in
        </Link>
      </p>
    </AuthShell>
  );
}
