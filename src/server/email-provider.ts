import "server-only";
import nodemailer from "nodemailer";

export type EmailProvider = "resend" | "smtp";

/** Which delivery provider the environment configures. Resend (API key) or any SMTP mailbox (Gmail app password, host mailbox…). */
export function emailProvider(): EmailProvider | null {
  if (process.env.RESEND_API_KEY) return "resend";
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) return "smtp";
  return null;
}

export const EMAIL_SETUP_HINT = "Set RESEND_API_KEY, or SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS, plus EMAIL_FROM, in the server environment variables, then turn on e-mail in Settings → Notifications.";

export function fromAddress(fromName?: string) {
  return process.env.EMAIL_FROM || `${fromName || "Precious PS Academy"} <${process.env.SMTP_USER ?? "no-reply@example.com"}>`;
}

/** Sends one message; throws on failure so the caller can mark the outbox row FAILED with the reason. */
export async function sendMail(m: { to: string; subject: string; html: string }, fromName?: string) {
  const provider = emailProvider();
  if (provider === "resend") {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: fromAddress(fromName), to: m.to, subject: m.subject, html: m.html }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Resend HTTP ${res.status}: ${(await res.text().catch(() => "")).slice(0, 160)}`);
    return;
  }
  if (provider === "smtp") {
    const port = Number(process.env.SMTP_PORT ?? 465);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 8000,
      socketTimeout: 10000,
    });
    await transport.sendMail({ from: fromAddress(fromName), to: m.to, subject: m.subject, html: m.html });
    return;
  }
  throw new Error("No e-mail provider is configured.");
}
