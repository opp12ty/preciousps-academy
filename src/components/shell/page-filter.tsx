"use client";

import { Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cx } from "../ui/primitives";

/** What counts as one item of a page: cards in a grid, list items and table rows. */
const ITEMS = ".grid > *, ul > li, ol > li, tbody > tr, [data-filter-item]";
const MIN_ITEMS = 6;

/**
 * "Search this page": filters the cards, list items and table rows of the open page as you type.
 * Nothing is fetched, so it is instant and uses no data. It shows only on pages with enough items,
 * and leaves forms, menus and question papers alone.
 */
export function PageFilter({ className }: { className?: string }) {
  const pathname = usePathname();
  const [q, setQ] = useState("");
  const [count, setCount] = useState(0);
  const [shown, setShown] = useState(0);
  const items = useRef<HTMLElement[]>([]);

  const scan = useCallback(() => {
    const main = document.getElementById("main");
    if (!main) return [];
    const all = [...main.querySelectorAll<HTMLElement>(ITEMS)].filter(
      (el) => !el.closest("form, nav, [data-no-filter], [role=dialog]") && !el.querySelector("input, textarea, select") && (el.textContent ?? "").trim().length > 1,
    );
    // Only the outermost items: a card's own inner list is not filtered separately.
    const set = new Set(all);
    const top = all.filter((el) => {
      for (let p = el.parentElement; p && p !== main; p = p.parentElement) if (set.has(p)) return false;
      return true;
    });
    items.current = top;
    return top;
  }, []);

  useEffect(() => {
    let t = setTimeout(() => {
      setQ("");
      setCount(scan().length);
    }, 400);
    // Pages stream in after their loading placeholder: count again when the content changes.
    const main = document.getElementById("main");
    const watch = main
      ? new MutationObserver(() => {
          clearTimeout(t);
          t = setTimeout(() => setCount(scan().length), 300);
        })
      : null;
    watch?.observe(main!, { childList: true, subtree: true });
    return () => {
      clearTimeout(t);
      watch?.disconnect();
    };
  }, [pathname, scan]);

  const apply = (value: string) => {
    setQ(value);
    const words = value.toLowerCase().split(/\s+/).filter(Boolean);
    const list = words.length ? scan() : items.current;
    let n = 0;
    for (const el of list) {
      const hit = !words.length || words.every((w) => (el.textContent ?? "").toLowerCase().includes(w));
      if (hit) el.style.removeProperty("display");
      else el.style.setProperty("display", "none");
      if (hit) n++;
    }
    setShown(n);
  };

  if (count < MIN_ITEMS) return null;
  return (
    <div role="search" className={cx("relative min-w-0", className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
      <input
        value={q}
        onChange={(e) => apply(e.target.value)}
        onKeyDown={(e) => e.key === "Escape" && apply("")}
        placeholder="Search this page…"
        aria-label="Search this page"
        type="search"
        enterKeyHint="search"
        className="h-10 w-full rounded-xl border border-line bg-surface pl-9 pr-16 text-sm focus:border-royal-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-royal-100"
      />
      {q && (
        <span className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 text-xs text-muted">
          {shown}
          <button type="button" onClick={() => apply("")} aria-label="Clear search" className="grid size-6 place-items-center rounded-md hover:bg-line/60"><X className="size-3.5" /></button>
        </span>
      )}
    </div>
  );
}
