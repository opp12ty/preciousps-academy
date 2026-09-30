import {
  Activity,
  BadgeCheck,
  BarChart3,
  Bell,
  BookCopy,
  BookOpen,
  Bot,
  Building2,
  CalendarRange,
  ClipboardCheck,
  ClipboardList,
  FileClock,
  FileQuestion,
  FileUp,
  Flag,
  GraduationCap,
  Home,
  KeyRound,
  LayoutDashboard,
  Layers,
  Library,
  ListTree,
  PackageOpen,
  MonitorCheck,
  NotebookPen,
  Palette,
  School,
  ScrollText,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Timer,
  Trophy,
  UserCog,
  Users,
  UsersRound,
} from "lucide-react";
import { AppShell, type NavGroup, type NavItem } from "@/components/shell/app-shell";
import { can, type Permission, type SuperCapability } from "@/core/permissions";
import { getSession } from "@/server/http";
import { redirect } from "next/navigation";
import { getBrand } from "@/server/brand";
import { unreadCount } from "@/server/services/notifications";
import { logoutAction } from "../(auth)/actions";

type Item = NavItem & { perm?: Permission | SuperCapability };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const s = await getSession();
  if (!s) redirect("/backend");
  if (s.mfaPending) redirect("/backend/verify");
  if (s.user.userType === "STUDENT") redirect("/student");
  const [brand, unread] = await Promise.all([getBrand(), unreadCount(s.user.id, s.user.schoolId)]);
  const a = s.actor;
  const groups: { title?: string; items: Item[] }[] = [
    { items: [{ href: "/admin", label: "Dashboard", icon: <LayoutDashboard /> }] },
    {
      title: "People",
      items: [
        { href: "/admin/students", label: "Students", icon: <Users />, perm: "students.view" },
        { href: "/admin/administrators", label: "Administrators", icon: <UserCog />, perm: "super.admins" },
        { href: "/admin/roles", label: "Roles & Permissions", icon: <ShieldCheck />, perm: "super.roles" },
      ],
    },
    {
      title: "Academics",
      items: [
        { href: "/admin/subjects", label: "Subjects", icon: <BookCopy />, perm: "curriculum.manage" },
        { href: "/admin/departments", label: "Departments", icon: <Building2 />, perm: "curriculum.manage" },
        { href: "/admin/classes", label: "Classes", icon: <School />, perm: "curriculum.manage" },
        { href: "/admin/terms", label: "Terms", icon: <CalendarRange />, perm: "curriculum.manage" },
        { href: "/admin/content-packs", label: "Content Packs", icon: <PackageOpen />, perm: "curriculum.manage" },
        { href: "/admin/curriculum", label: "Curriculum · Topics", icon: <ListTree />, perm: "curriculum.manage" },
        { href: "/admin/lessons", label: "Lessons", icon: <BookOpen />, perm: "curriculum.manage" },
        { href: "/admin/resources", label: "Resources", icon: <Library />, perm: "resources.manage" },
      ],
    },
    {
      title: "Assessment",
      items: [
        { href: "/admin/questions", label: "Question Bank", icon: <FileQuestion />, perm: "questions.view" },
        { href: "/admin/imports", label: "Question Imports", icon: <FileUp />, perm: "questions.import" },
        { href: "/admin/ai", label: "AI Question Generator", icon: <Bot />, perm: "questions.ai" },
        { href: "/admin/examinations", label: "Examinations", icon: <MonitorCheck />, perm: "exams.view" },
        { href: "/admin/attempts", label: "Attempts", icon: <Timer />, perm: "exams.attempts" },
        { href: "/admin/results", label: "Results", icon: <Trophy />, perm: "results.view" },
        { href: "/admin/assignments", label: "Assignments", icon: <ClipboardList />, perm: "assignments.manage" },
        { href: "/admin/classwork", label: "Classwork", icon: <NotebookPen />, perm: "assignments.manage" },
      ],
    },
    {
      title: "Access",
      items: [
        { href: "/admin/access-codes", label: "Access Codes", icon: <KeyRound />, perm: "codes.view" },
        { href: "/admin/access-periods", label: "Access Periods", icon: <FileClock />, perm: "codes.view" },
      ],
    },
    {
      title: "Insight",
      items: [
        { href: "/admin/analytics", label: "Analytics & Reports", icon: <BarChart3 />, perm: "analytics.view" },
        { href: "/admin/notifications", label: "Notifications", icon: <Bell />, badge: unread },
        { href: "/admin/certificates", label: "Certificates", icon: <BadgeCheck />, perm: "super.settings" },
      ],
    },
    {
      title: "Platform",
      items: [
        { href: "/admin/branding", label: "Branding", icon: <Palette />, perm: "super.branding" },
        { href: "/admin/homepage", label: "Homepage & Content", icon: <Home />, perm: "super.content" },
        { href: "/admin/school", label: "School Settings", icon: <GraduationCap />, perm: "super.settings" },
        { href: "/admin/settings", label: "System Settings", icon: <Settings />, perm: "super.settings" },
        { href: "/admin/feature-flags", label: "Feature Flags", icon: <Flag />, perm: "super.settings" },
      ],
    },
    {
      title: "Security",
      items: [
        { href: "/admin/security", label: "My Security", icon: <ShieldCheck /> },
        { href: "/admin/sessions", label: "Sessions", icon: <UsersRound />, perm: "super.security" },
        { href: "/admin/audit-logs", label: "Audit Logs", icon: <ScrollText />, perm: "super.audit" },
        { href: "/admin/security-events", label: "Security Events", icon: <ShieldAlert />, perm: "super.security" },
        { href: "/admin/system", label: "System Health", icon: <Activity />, perm: "super.settings" },
      ],
    },
  ];
  const visible: NavGroup[] = groups
    .map((g) => ({ title: g.title, items: g.items.filter((i) => !i.perm || can(a, i.perm)).map(({ perm: _p, ...rest }) => (void _p, rest)) }))
    .filter((g) => g.items.length);
  void Layers;
  void ClipboardCheck;
  return (
    <AppShell
      groups={visible}
      root="/admin"
      markUrl={brand.markUrl}
      platformName={brand.platformName}
      roleLabel={s.user.userType === "SUPER_ADMIN" ? "SUPER ADMIN" : s.user.userType === "TEACHER" ? "TEACHER" : "ADMINISTRATOR"}
      user={{ name: `${s.user.firstName} ${s.user.lastName}`, email: s.user.email }}
      unread={unread}
      logout={logoutAction}
      searchable
    >
      {children}
    </AppShell>
  );
}
