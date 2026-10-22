import Link from "next/link";
import { cx } from "../ui/primitives";

export interface HubFlags {
  dictionaryEnabled: boolean;
  idiomsEnabled: boolean;
  clichesEnabled: boolean;
  phrasalVerbsEnabled: boolean;
  proverbsEnabled?: boolean;
  commonErrorsEnabled?: boolean;
  registersEnabled?: boolean;
  gamesEnabled: boolean;
}

/** Tabs across the top of every Study Materials page. */
export function MaterialsNav({ current, flags }: { current: string; flags: HubFlags }) {
  const tabs = [
    { key: "files", href: "/student/materials", label: "Files", on: true },
    { key: "dictionary", href: "/student/materials/dictionary", label: "Picture Dictionary", on: flags.dictionaryEnabled },
    { key: "idioms", href: "/student/materials/idioms", label: "Idioms", on: flags.idiomsEnabled },
    { key: "cliches", href: "/student/materials/cliches", label: "Clichés", on: flags.clichesEnabled },
    { key: "phrasal-verbs", href: "/student/materials/phrasal-verbs", label: "Phrasal Verbs", on: flags.phrasalVerbsEnabled },
    { key: "proverbs", href: "/student/materials/proverbs", label: "Proverbs", on: flags.proverbsEnabled !== false },
    { key: "common-errors", href: "/student/materials/common-errors", label: "Common Errors", on: flags.commonErrorsEnabled !== false },
    { key: "registers", href: "/student/materials/registers", label: "Registers", on: flags.registersEnabled !== false },
    { key: "ebooks", href: "/student/ebooks", label: "E-books", on: true },
    { key: "games", href: "/student/materials/games", label: "Games", on: flags.gamesEnabled },
  ].filter((t) => t.on);
  return (
    <nav aria-label="Study materials" className="no-scrollbar -mx-1 mb-5 flex gap-2 overflow-x-auto px-1 pb-1">
      {tabs.map((t) => (
        <Link key={t.key} href={t.href} aria-current={current === t.key ? "page" : undefined} className={cx("whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-semibold transition", current === t.key ? "bg-navy-800 text-white" : "bg-white text-navy-800 ring-1 ring-line hover:bg-royal-50")}>
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
