import { Bell, BookOpen, Cog, KeyRound, LayoutDashboard, MessagesSquare, ShieldCheck, Sun, Trophy, UserPlus } from "lucide-react";
import Link from "next/link";
import { AppShell, type NavGroup } from "@/components/shell/app-shell";
import { requireParentPage } from "@/server/http";
import { getBrand } from "@/server/brand";
import { fmtLagos, getParentAccess } from "@/server/services/access";
import { unreadCount } from "@/server/services/notifications";
import { logoutAction } from "../(auth)/actions";

export default async function ParentLayout({ children }: { children: React.ReactNode }) {
  // The layout also wraps the page where a code is entered, so it must load while the portal is locked.
  const s = await requireParentPage({ allowLocked: true });
  const [brand, unread, access] = await Promise.all([getBrand(), unreadCount(s.user.id, s.user.schoolId), getParentAccess(s.user.id)]);
  const account = [
    { href: "/parent/access", label: "Parent access code", icon: <KeyRound /> },
    { href: "/parent/notifications", label: "Notifications", icon: <Bell />, badge: unread },
    { href: "/parent/security", label: "Password", icon: <ShieldCheck /> },
  ];
  const banner = !access.active ? (
    <div className="border-b border-red-200 bg-danger-50 px-4 py-2.5 text-sm text-danger-600 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-1">
        <KeyRound className="size-4 shrink-0" aria-hidden />
        <span className="font-semibold">The parent portal is locked until you enter a parent access code.</span>
        <Link href="/parent/access" className="font-bold underline underline-offset-2">Enter a code</Link>
      </div>
    </div>
  ) : access.source === "GRACE" || access.endsSoon ? (
    <div className="border-b border-amber-200 bg-warn-50 px-4 py-2.5 text-sm text-warn-600 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-1">
        <KeyRound className="size-4 shrink-0" aria-hidden />
        <span className="font-semibold">{access.source === "GRACE" ? `Parent accounts now need a parent access code. Your free period ends on ${fmtLagos(new Date(access.until!))}.` : `Your parent access ends on ${fmtLagos(new Date(access.until!))}.`}</span>
        <Link href="/parent/access" className="font-bold underline underline-offset-2">{access.source === "GRACE" ? "Enter a code" : "See details"}</Link>
      </div>
    </div>
  ) : undefined;
  const groups: NavGroup[] = !access.active ? [{ title: "Account", items: account }] : [
    { items: [{ href: "/parent", label: "My children", icon: <LayoutDashboard /> }] },
    {
      title: "Learn",
      items: [
        { href: "/parent/learning", label: "Learning Hub", icon: <BookOpen /> },
        { href: "/parent/learning?section=PSYCHOLOGY", label: "Psychology Library", icon: <BookOpen /> },
        { href: "/parent/learning?section=SCIENCE", label: "Science & Engineering", icon: <Cog /> },
        { href: "/parent/games", label: "Parent Challenges", icon: <Trophy /> },
        { href: "/parent/community", label: "Parent Community", icon: <MessagesSquare /> },
        { href: "/parent/ideas", label: "Ideas Box", icon: <Sun /> },
      ],
    },
    {
      title: "Family",
      items: [
        { href: "/parent/holiday", label: "Holiday Programme", icon: <Sun /> },
        { href: "/parent/activities", label: "Family Activities", icon: <Trophy /> },
        { href: "/parent/experts", label: "Meet an Expert", icon: <UserPlus /> },
      ],
    },
    {
      title: "Account",
      items: [
        { href: "/parent#add-child", label: "Add a child", icon: <UserPlus /> },
        ...account,
      ],
    },
  ];
  return (
    <AppShell groups={groups} root="/parent" banner={banner} markUrl={brand.markUrl} platformName={brand.platformName} roleLabel="PARENT PORTAL" user={{ name: `${s.user.firstName} ${s.user.lastName}`, email: s.user.email, avatarUrl: null }} unread={unread} logout={logoutAction}>
      {children}
    </AppShell>
  );
}
