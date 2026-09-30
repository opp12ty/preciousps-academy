import Link from "next/link";
import { Download, Search } from "lucide-react";
import { buttonClass, inputClass } from "../ui/primitives";

export type FilterDef =
  | { type: "search"; name: string; placeholder: string }
  | { type: "select"; name: string; label: string; options: { value: string; label: string }[] }
  | { type: "date"; name: string; label: string };

/** GET-form filter bar: shareable URLs, works without JavaScript (§106 advanced filters). */
export function FilterBar({ filters, values, action, exportHref }: { filters: FilterDef[]; values: Record<string, string | undefined>; action: string; exportHref?: string }) {
  return (
    <form action={action} method="get" className="mb-4 flex flex-col gap-2 rounded-2xl border border-line bg-white p-3 shadow-card lg:flex-row lg:flex-wrap lg:items-end">
      {filters.map((f) =>
        f.type === "search" ? (
          <label key={f.name} className="relative min-w-[14rem] flex-1">
            <span className="sr-only">{f.placeholder}</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
            <input name={f.name} defaultValue={values[f.name] ?? ""} placeholder={f.placeholder} className={`${inputClass} pl-9`} />
          </label>
        ) : f.type === "select" ? (
          <label key={f.name} className="min-w-[10rem]">
            <span className="mb-1 block text-xs font-semibold text-muted">{f.label}</span>
            <select name={f.name} defaultValue={values[f.name] ?? ""} className={inputClass}>
              <option value="">All</option>
              {f.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <label key={f.name} className="min-w-[9rem]">
            <span className="mb-1 block text-xs font-semibold text-muted">{f.label}</span>
            <input type="date" name={f.name} defaultValue={values[f.name] ?? ""} className={inputClass} />
          </label>
        ),
      )}
      <div className="flex gap-2">
        <button className={buttonClass("primary")}>Apply</button>
        <Link href={action} className={buttonClass("ghost")}>
          Reset
        </Link>
        {exportHref && (
          <details className="relative">
            <summary className={buttonClass("secondary", "md", "list-none cursor-pointer")}>
              <Download className="size-4" /> Export
            </summary>
            <div className="absolute right-0 z-20 mt-1 w-40 overflow-hidden rounded-xl border border-line bg-white shadow-lift">
              {(["csv", "xlsx", "pdf"] as const).map((fmt) => (
                <a key={fmt} href={`${exportHref}${exportHref.includes("?") ? "&" : "?"}format=${fmt}`} className="block px-4 py-2.5 text-sm font-semibold text-navy-800 hover:bg-surface">
                  {fmt === "csv" ? "CSV" : fmt === "xlsx" ? "Excel (.xlsx)" : "PDF"}
                </a>
              ))}
            </div>
          </details>
        )}
      </div>
    </form>
  );
}

export function qs(params: Record<string, string | undefined>, patch: Record<string, string | number | undefined> = {}) {
  const u = new URLSearchParams();
  for (const [k, v] of Object.entries({ ...params, ...patch })) if (v !== undefined && v !== "") u.set(k, String(v));
  const s = u.toString();
  return s ? `?${s}` : "";
}

export function spRecord(sp: Record<string, string | string[] | undefined>) {
  return Object.fromEntries(Object.entries(sp).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v])) as Record<string, string | undefined>;
}
