import Link from "next/link";
import {
  Bell,
  BookMarked,
  BookOpen,
  ClipboardCheck,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  Library,
  LineChart,
  MonitorCheck,
  NotebookPen,
  ShieldCheck,
  Target,
  Trophy,
  UserRound,
} from "lucide-react";
import { AppShell, type NavGroup } from "@/components/shell/app-shell";
import { requireStudentPage } from "@/server/http";
import { getBrand } from "@/server/brand";
import { getAccessState } from "@/server/services/access";
import { unreadCount } from "@/server/services/notifications";
import { logoutAction } from "../(auth)/actions";
import { t } from "@/i18n";

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const s = await requireStudentPage({ allowPasswordChange: true });
  const [brand, access, unread] = await Promise.all([getBrand(), getAccessState(s.user.id), unreadCount(s.user.id, s.user.schoolId)]);
  const groups: NavGroup[] = [
    { items: [{ href: "/student", label: t("student.dashboard"), icon: <LayoutDashboard /> }] },
    {
      title: "Learn",
      items: [
        { href: "/student/study", label: t("student.studyCentre"), icon: <BookOpen /> },
        { href: "/student/subjects", label: t("student.subjects"), icon: <BookMarked /> },
        { href: "/student/classwork", label: t("student.classwork"), icon: <NotebookPen /> },
        { href: "/student/assignments", label: t("student.assignments"), icon: <ClipboardList /> },
        { href: "/student/resources", label: t("student.resources"), icon: <Library /> },
      ],
    },
    {
      title: "Test",
      items: [
        { href: "/student/practice", label: t("student.practice"), icon: <Target /> },
        { href: "/student/mock", label: t("student.mock"), icon: <MonitorCheck /> },
        { href: "/student/exams", label: t("student.exams"), icon: <ClipboardCheck /> },
        { href: "/student/results", label: t("student.results"), icon: <Trophy /> },
        { href: "/student/performance", label: t("student.performance"), icon: <LineChart /> },
      ],
    },
    {
      title: "Account",
      items: [
        { href: "/student/notifications", label: t("student.notifications"), icon: <Bell />, badge: unread },
        { href: "/student/profile", label: t("student.profile"), icon: <UserRound /> },
        { href: "/student/security", label: t("student.security"), icon: <ShieldCheck /> },
      ],
    },
  ];
  const banner =
    access.status !== "ACTIVE" ? (
      <div className="border-b border-amber-200 bg-warn-50 px-4 py-2.5 text-sm text-warn-600 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-3 gap-y-1">
          <GraduationCap className="size-4 shrink-0" aria-hidden />
          <span className="font-semibold">{access.status === "NONE" ? "Activate an access code to unlock CBT, the Study Centre and more." : access.message}</span>
          <Link href="/student#activate" className="font-bold underline underline-offset-2">
            Activate a code
          </Link>
        </div>
      </div>
    ) : null;
  return (
    <AppShell
      groups={groups}
      root="/student"
      markUrl={brand.markUrl}
      platformName={brand.platformName}
      roleLabel="STUDENT PORTAL"
      user={{ name: `${s.user.firstName} ${s.user.lastName}`, email: s.user.email, avatarUrl: s.user.avatarAssetId ? `/api/v1/assets/${s.user.avatarAssetId}` : null }}
      unread={unread}
      logout={logoutAction}
      banner={banner}
    >
      {children}
    </AppShell>
  );
}
