"use client";

import Link from "next/link";
import { Bell, CheckCheck } from "lucide-react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { markReadAction, setPreferenceAction } from "@/app/student/actions";
import { buttonClass, Card, CardHeader, cx, EmptyState } from "./ui/primitives";

interface N {
  id: string;
  title: string;
  body: string;
  link: string | null;
  category: string;
  read: boolean;
  createdAt: string;
}

export function NotificationsView({ items, prefs }: { items: N[]; prefs: { category: string; label: string; inApp: boolean; email: boolean; locked: boolean }[] }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  return (
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
      <Card>
        <CardHeader
          title="Inbox"
          action={
            <button className={buttonClass("secondary", "sm")} disabled={pending} onClick={() => start(async () => { await markReadAction("all"); router.refresh(); })}>
              <CheckCheck className="size-4" /> Mark all read
            </button>
          }
        />
        {items.length ? (
          <ul className="divide-y divide-line">
            {items.map((n) => (
              <li key={n.id} className={cx("px-5 py-4", !n.read && "bg-royal-50/50")}>
                <div className="flex items-start gap-3">
                  <span className={cx("mt-1.5 size-2 shrink-0 rounded-full", n.read ? "bg-transparent" : "bg-royal-600")} aria-label={n.read ? undefined : "Unread"} />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-gold-600">{n.category.toLowerCase()}</p>
                    <p className="font-semibold text-navy-800">{n.title}</p>
                    <p className="mt-0.5 whitespace-pre-line text-sm text-muted">{n.body}</p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted">
                      <time>{new Date(n.createdAt).toLocaleString("en-NG", { timeZone: "Africa/Lagos" })}</time>
                      {n.link && (
                        <Link href={n.link} className="font-semibold text-royal-600 hover:underline" onClick={() => void markReadAction(n.id)}>
                          Open
                        </Link>
                      )}
                      {!n.read && (
                        <button className="font-semibold hover:text-navy-800" onClick={() => start(async () => { await markReadAction(n.id); router.refresh(); })}>
                          Mark read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState icon={<Bell className="size-6" />} title="You're all caught up" />
        )}
      </Card>
      <Card>
        <CardHeader title="Notification preferences" description="Security alerts are always on." />
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-muted">
              <th className="px-5 py-2 font-bold">Category</th>
              <th className="px-2 py-2 text-center font-bold">In-app</th>
              <th className="px-5 py-2 text-center font-bold">Email</th>
            </tr>
          </thead>
          <tbody>
            {prefs.map((p) => (
              <tr key={p.category} className="border-t border-line">
                <td className="px-5 py-3 font-medium text-navy-800">{p.label}</td>
                {(["inApp", "email"] as const).map((ch) => (
                  <td key={ch} className="px-2 py-3 text-center">
                    <input
                      type="checkbox"
                      className="size-5 accent-royal-600"
                      aria-label={`${p.label} ${ch === "inApp" ? "in-app" : "email"}`}
                      defaultChecked={p[ch]}
                      disabled={(p.locked && ch === "inApp") || pending}
                      onChange={(e) => start(async () => { await setPreferenceAction(p.category, ch, e.target.checked); })}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-5 py-3 text-xs text-muted">Push, SMS and WhatsApp channels are prepared and will appear here when enabled by the school.</p>
      </Card>
    </div>
  );
}
