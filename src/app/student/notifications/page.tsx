import type { Metadata } from "next";
import { requireStudentPage } from "@/server/http";
import { getPreferences, listNotifications } from "@/server/services/notifications";
import { NotificationsView } from "@/components/notifications-view";
import { PageHeader } from "@/components/ui/primitives";

export const metadata: Metadata = { title: "Notifications" };

export default async function NotificationsPage() {
  const s = await requireStudentPage();
  const [items, prefs] = await Promise.all([listNotifications(s.user.id, s.user.schoolId, 50), getPreferences(s.user.id)]);
  return (
    <>
      <PageHeader title="Notifications" description="Exam announcements, results, access reminders, new lessons and security alerts." />
      <NotificationsView items={items.map((n) => ({ id: n.id, title: n.title, body: n.body, link: n.link, category: n.category, read: n.read, createdAt: n.createdAt.toISOString() }))} prefs={prefs} />
    </>
  );
}
