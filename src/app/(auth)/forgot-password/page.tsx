import type { Metadata } from "next";
import Link from "next/link";
import { getBrand } from "@/server/brand";
import { AuthShell } from "@/components/auth-shell";
import { ForgotForm } from "../forms";

export const metadata: Metadata = { title: "Forgot password" };

export default async function ForgotPage() {
  const brand = await getBrand();
  return (
    <AuthShell title="Reset your password" subtitle="Enter the email address on your account and we'll send you a secure reset link.">
      <ForgotForm />
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
