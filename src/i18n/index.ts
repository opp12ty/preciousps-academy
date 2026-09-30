/**
 * Internationalisation scaffold (§71). UI strings live in message catalogues
 * keyed by locale; English is complete, other locales fall back to English
 * until translated. Add a locale by adding a catalogue file.
 */
import en from "./en";

export type Locale = "en" | "yo" | "ha" | "ig" | "fr";
export type MessageKey = keyof typeof en;

const catalogues: Partial<Record<Locale, Partial<Record<MessageKey, string>>>> = { en };

export function t(key: MessageKey, locale: Locale = "en", vars?: Record<string, string | number>): string {
  let s = catalogues[locale]?.[key] ?? en[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
  return s;
}

export const LOCALES: { code: Locale; label: string; ready: boolean }[] = [
  { code: "en", label: "English", ready: true },
  { code: "yo", label: "Yorùbá", ready: false },
  { code: "ha", label: "Hausa", ready: false },
  { code: "ig", label: "Igbo", ready: false },
  { code: "fr", label: "Français", ready: false },
];
