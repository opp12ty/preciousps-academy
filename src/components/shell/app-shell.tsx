"use client";

/* eslint-disable @next/next/no-img-element */
import { Bell, CornerDownLeft, LogOut, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { cx } from "../ui/primitives";

export interface NavItem {
  href: string;
  label: string;
  /** Server-rendered icon element (keeps the client bundle small). */
  icon: ReactNode;
  badge?: number;
  /** Pinned to the phone bottom bar. */
  mobile?: boolean;
}
export interface NavGroup {
  title?: string;
  items: NavItem[];
}

function isActive(path: string, href: string, root: string) {
  return href === root ? path === root : path === href || path.startsWith(`${href}/`);
}

interface Hit {
  key: string;
  label: string;
  hint?: string;
  href: string;
  icon?: ReactNode;
}

/** Ctrl/⌘ + K: jump to any page, and (for staff) search students, questions, exams, codes… */
function CommandPalette({ open, onClose, groups, searchable }: { open: boolean; onClose: () => void; groups: NavGroup[]; searchable?: boolean }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [remote, setRemote] = useState<Hit[]>([]);
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const pages = useMemo<Hit[]>(() => groups.flatMap((g) => g.items.map((i) => ({ key: i.href, label: i.label, hint: g.title ?? "Page", href: i.href, icon: i.icon }))), [groups]);
  const local = useMemo(() => {
    const t = q.trim().toLowerCase();
    return (t ? pages.filter((p) => p.label.toLowerCase().includes(t) || p.hint?.toLowerCase().includes(t)) : pages).slice(0, 8);
  }, [pages, q]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
  }, [open]);
  useEffect(() => {
    const t = q.trim();
    if (!open || !searchable || t.length < 2) return;
    const ctl = new AbortController();
    const id = setTimeout(async () => {
      try {
        const r = await fetch(`/api/v1/search?q=${encodeURIComponent(t)}`, { signal: ctl.signal });
        const j = (await r.json()) as { ok: boolean; data?: { type: string; id: string; title: string; subtitle?: string; href: string }[] };
        if (j.ok && j.data) setRemote(j.data.slice(0, 8).map((h) => ({ key: `${h.type}:${h.id}`, label: h.title, hint: `${h.type}${h.subtitle ? ` · ${h.subtitle}` : ""}`, href: h.href })));
      } catch {
        /* aborted or offline: keep the page results */
      }
    }, 180);
    return () => {
      clearTimeout(id);
      ctl.abort();
    };
  }, [q, open, searchable]);

  const all = useMemo(() => [...local, ...(q.trim().length >= 2 ? remote : [])], [local, remote, q]);
  const go = useCallback(
    (h: Hit) => {
      onClose();
      setQ("");
      router.push(h.href);
    },
    [onClose, router],
  );
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] grid place-items-start justify-items-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Quick search">
      <button type="button" aria-label="Close search" className="absolute inset-0 bg-navy-950/55 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-card shadow-lift">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="size-5 text-muted" aria-hidden />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setCursor(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setCursor((c) => Math.min(all.length - 1, c + 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setCursor((c) => Math.max(0, c - 1));
              } else if (e.key === "Enter" && all[cursor]) go(all[cursor]);
              else if (e.key === "Escape") onClose();
            }}
            placeholder={searchable ? "Jump to a page or search students, questions, exams…" : "Jump to a page…"}
            className="h-14 flex-1 bg-transparent text-[0.95rem] outline-none placeholder:text-muted"
            aria-label="Search"
          />
          <kbd className="hidden rounded border border-line px-1.5 py-0.5 font-mono text-[0.68rem] text-muted sm:block">Esc</kbd>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
          {all.map((h, i) => (
            <li key={h.key} role="option" aria-selected={i === cursor}>
              <button type="button" onMouseEnter={() => setCursor(i)} onClick={() => go(h)} className={cx("flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left", i === cursor ? "bg-royal-50" : "")}>
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-navy-800/5 text-navy-800 [&>svg]:size-4" aria-hidden>
                  {h.icon ?? <Search className="size-4" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-navy-800">{h.label}</span>
                  {h.hint && <span className="block truncate text-xs text-muted">{h.hint}</span>}
                </span>
                {i === cursor && <CornerDownLeft className="size-4 text-muted" aria-hidden />}
              </button>
            </li>
          ))}
          {all.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted">Nothing matches &ldquo;{q}&rdquo;.</li>}
        </ul>
      </div>
    </div>
  );
}

export function AppShell({
  groups,
  root,
  markUrl,
  platformName,
  user,
  roleLabel,
  unread,
  logout,
  children,
  searchable,
  banner,
}: {
  groups: NavGroup[];
  root: string;
  markUrl: string;
  platformName: string;
  user: { name: string; email: string; avatarUrl?: string | null };
  roleLabel: string;
  unread: number;
  logout: () => Promise<void>;
  children: ReactNode;
  searchable?: boolean;
  banner?: ReactNode;
}) {
  const path = usePathname();
  // Drawer is open "for this path": any navigation closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === path;
  const setOpen = (v: boolean) => setOpenAt(v ? path : null);
  const [palette, setPalette] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const initials = user.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  const flat = groups.flatMap((g) => g.items);
  const pinned = flat.filter((i) => i.mobile);
  const current = flat.find((i) => isActive(path, i.href, root));

  const sidebar = (
    <div className="flex h-full flex-col">
      <Link href={root} className="flex h-[4.5rem] shrink-0 items-center gap-3 px-5">
        <span className="grid size-10 place-items-center overflow-hidden rounded-xl ring-1 ring-navy-800/15">
          <img src={markUrl} alt="" className="size-full object-cover" />
        </span>
        <span className="min-w-0 leading-tight">
          <span className="block truncate font-display text-[0.95rem] font-bold text-navy-800">{platformName}</span>
          <span className="mt-0.5 inline-block rounded bg-gold-100 px-1.5 text-[0.58rem] font-bold tracking-[0.16em] text-gold-600">{roleLabel}</span>
        </span>
      </Link>
      <nav aria-label="Main" className="no-scrollbar flex-1 overflow-y-auto px-3 pb-4">
        {groups.map((g, gi) => (
          <div key={gi} className={cx(gi > 0 && "mt-5")}>
            {g.title && <p className="mb-1 px-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted/80">{g.title}</p>}
            <ul className="space-y-0.5">
              {g.items.map((it) => {
                const active = isActive(path, it.href, root);
                return (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      aria-current={active ? "page" : undefined}
                      className={cx(
                        "group relative flex items-center gap-3 rounded-lg py-2 pl-4 pr-3 text-[0.86rem] font-semibold transition-colors",
                        active ? "bg-navy-800 text-white" : "text-navy-800/80 hover:bg-navy-800/5 hover:text-navy-800",
                      )}
                    >
                      {active && <span aria-hidden className="absolute inset-y-1.5 left-1 w-1 rounded-full bg-gold-500" />}
                      <span aria-hidden className={cx("shrink-0 [&>svg]:size-[1.05rem]", active ? "text-gold-400" : "text-muted group-hover:text-royal-600")}>
                        {it.icon}
                      </span>
                      <span className="flex-1 truncate">{it.label}</span>
                      {it.badge ? <span className="rounded-full bg-gold-500 px-1.5 text-[0.65rem] font-bold text-navy-900">{it.badge > 99 ? "99+" : it.badge}</span> : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="border-t border-line p-3">
        <div className="mb-2 flex items-center gap-3 rounded-lg bg-surface p-2.5">
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt="" className="size-9 rounded-lg object-cover" />
          ) : (
            <span className="grid size-9 place-items-center rounded-lg bg-navy-800 text-xs font-bold text-gold-400">{initials}</span>
          )}
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold text-navy-800">{user.name}</span>
            <span className="block truncate text-[0.7rem] text-muted">{user.email}</span>
          </span>
        </div>
        <form action={logout}>
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[0.86rem] font-semibold text-navy-800/75 hover:bg-danger-50 hover:text-danger-600">
            <LogOut className="size-[1.05rem]" aria-hidden />
            Logout
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-dvh bg-surface">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[16.5rem] border-r border-line bg-card lg:block">{sidebar}</aside>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Close menu" className="absolute inset-0 bg-navy-950/55" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-[18rem] max-w-[88%] bg-card shadow-lift">{sidebar}</aside>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="absolute left-[min(18rem,88%)] top-3 ml-2 grid size-10 place-items-center rounded-lg bg-card text-navy-800">
            <X className="size-5" />
          </button>
        </div>
      )}
      <CommandPalette open={palette} onClose={() => setPalette(false)} groups={groups} searchable={searchable} />
      <div className="lg:pl-[16.5rem]">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-line bg-surface/85 px-4 backdrop-blur-md sm:px-6">
          <button type="button" className="grid size-10 place-items-center rounded-lg bg-card ring-1 ring-line lg:hidden" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Menu className="size-5" />
          </button>
          <p className="hidden min-w-0 truncate font-display text-sm font-semibold text-navy-800 md:block">{current?.label ?? roleLabel}</p>
          <button type="button" onClick={() => setPalette(true)} className="group ml-auto flex h-10 w-full max-w-sm items-center gap-2.5 rounded-lg border border-line bg-card px-3 text-left text-sm text-muted hover:border-royal-500/50 md:ml-6" aria-label="Open quick search">
            <Search className="size-4" aria-hidden />
            <span className="flex-1 truncate">{searchable ? "Search or jump to…" : "Jump to…"}</span>
            <kbd className="hidden rounded border border-line px-1.5 font-mono text-[0.68rem] sm:block">Ctrl K</kbd>
          </button>
          <Link href={`${root}/notifications`} className="relative grid size-10 shrink-0 place-items-center rounded-lg bg-card text-navy-800 ring-1 ring-line hover:bg-gold-50" aria-label={`Notifications${unread ? `, ${unread} unread` : ""}`}>
            <Bell className="size-5" />
            {unread > 0 && <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-gold-500 px-1 text-[0.65rem] font-bold text-navy-900">{unread > 9 ? "9+" : unread}</span>}
          </Link>
        </header>
        {banner}
        <main id="main" className="mx-auto w-full max-w-7xl px-4 py-6 pb-28 sm:px-6 sm:py-8 lg:pb-10">
          {children}
        </main>
      </div>
      {pinned.length > 0 && (
        <nav aria-label="Quick" className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-around rounded-2xl border border-line bg-card/95 p-1.5 shadow-lift backdrop-blur lg:hidden">
          {pinned.slice(0, 4).map((it) => {
            const active = isActive(path, it.href, root);
            return (
              <Link key={it.href} href={it.href} aria-current={active ? "page" : undefined} className={cx("flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 text-[0.62rem] font-bold", active ? "bg-navy-800 text-white" : "text-navy-800/70")}>
                <span aria-hidden className={cx("[&>svg]:size-5", active && "text-gold-400")}>
                  {it.icon}
                </span>
                <span className="truncate">{it.label}</span>
              </Link>
            );
          })}
          <button type="button" onClick={() => setOpen(true)} className="flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 text-[0.62rem] font-bold text-navy-800/70">
            <Menu className="size-5" aria-hidden />
            <span>More</span>
          </button>
        </nav>
      )}
    </div>
  );
}
