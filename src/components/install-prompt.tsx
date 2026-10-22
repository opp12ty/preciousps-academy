"use client";
/* eslint-disable @next/next/no-img-element */

import { Download, Share, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };
const KEY = "preciousps-install-dismissed";

/**
 * "Install as app": offered each time the site is opened in a browser (not once it is installed).
 * Chrome, Edge, Opera, Samsung Internet and other Chromium browsers get a one-tap Install button;
 * iPhone / iPad Safari and browsers without one get the steps for their menu. Closing it hides it
 * until the next visit.
 */
export function InstallPrompt() {
  const [evt, setEvt] = useState<InstallEvent | null>(null);
  const [steps, setSteps] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const busy = /^\/student\/(exams|assignments|classwork)\/[^/]+|\/review$/.test(path ?? "");

  useEffect(() => {
    const standalone = matchMedia("(display-mode: standalone)").matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(KEY) === "1";
    } catch {}
    if (standalone || dismissed) return;
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setEvt(e as InstallEvent);
      setOpen(true);
    };
    const onInstalled = () => setOpen(false);
    addEventListener("beforeinstallprompt", onPrompt);
    addEventListener("appinstalled", onInstalled);
    // Browsers that never send the install event: show the menu steps instead.
    const ua = navigator.userAgent;
    const t = setTimeout(() => {
      if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) setSteps("Tap the Share button, then “Add to Home Screen”.");
      else if (/Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR|Firefox/.test(ua)) setSteps("In the Safari menu, choose File → “Add to Dock”.");
      else if (/Firefox/.test(ua)) setSteps(/Android/.test(ua) ? "Open the ⋮ menu, then “Install”." : "Open this site in Chrome or Edge to install it, or bookmark it for quick access.");
      else setSteps("Open the browser menu (⋮ or …), then “Install app” or “Add to Home screen”.");
      setOpen(true);
    }, 4000);
    return () => {
      clearTimeout(t);
      removeEventListener("beforeinstallprompt", onPrompt);
      removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
  };
  if (!open || busy) return null;
  return (
    <div role="dialog" aria-label="Install Precious PS CBT as an app" className="no-print fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-[60] mx-auto flex max-w-md items-center gap-3 rounded-2xl bg-navy-900 p-3 pr-2 text-white shadow-lift ring-1 ring-gold-400/40 animate-[fadeUp_.35s_ease-out]">
      <img src="/brand/logo-mark-192.png" alt="" width={44} height={44} className="size-11 shrink-0 rounded-xl bg-white p-1" />
      <div className="min-w-0 flex-1 text-sm">
        <p className="font-bold">Install Precious PS CBT</p>
        <p className="text-xs text-white/75">{evt ? "Open it like an app: faster, full screen, uses less data." : steps}</p>
      </div>
      {evt ? (
        <button
          type="button"
          onClick={async () => {
            await evt.prompt();
            await evt.userChoice.catch(() => null);
            setEvt(null);
            close();
          }}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gold-400 px-3 py-2 text-sm font-bold text-navy-950 hover:bg-gold-300"
        >
          <Download className="size-4" aria-hidden /> Install
        </button>
      ) : (
        steps?.includes("Share") && <Share className="size-5 shrink-0 text-gold-400" aria-hidden />
      )}
      <button type="button" onClick={close} aria-label="Not now" className="grid size-9 shrink-0 place-items-center rounded-xl text-white/70 hover:bg-white/10 hover:text-white"><X className="size-4" /></button>
    </div>
  );
}
