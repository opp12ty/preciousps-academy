import { redirect } from "next/navigation";
import { requireStaffPage } from "@/server/http";

export const dynamic = "force-dynamic";

/**
 * Fails on purpose, for the Super Admin only. Opening it shows the ordinary error page with a
 * reference number; that reference should then appear in the Developer error log. It proves the
 * log is working on the live site without waiting for a real fault.
 */
export default async function TestErrorPage() {
  const s = await requireStaffPage("super.settings");
  if (s.user.userType !== "SUPER_ADMIN") redirect("/admin?denied=1");
  throw new Error("Developer test error: raised on purpose to check the error log.");
}
