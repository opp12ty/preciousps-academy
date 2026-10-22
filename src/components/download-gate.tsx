import { Lock } from "lucide-react";
import { buttonClass, cx } from "./ui/primitives";

const tel = (phone: string) => phone.replace(/[^\d+]/g, "");

/** Shown in place of a download or print button when the Admin has locked that kind of download. */
export function DownloadLocked({ phone, needsCode = false, className }: { phone: string; needsCode?: boolean; className?: string }) {
  return (
    <span className={cx("no-print inline-flex flex-wrap items-center gap-2", className)}>
      <a href={`tel:${tel(phone)}`} className={buttonClass("secondary", "sm")}>
        <Lock className="size-4" /> Download
      </a>
      <span className="text-xs opacity-80">
        To download, contact Admin on <a href={`tel:${tel(phone)}`} className="font-bold underline">{phone}</a>{needsCode ? " to get an access code for it" : ""}.
      </span>
    </span>
  );
}

/** Stops printing and "save as PDF" of the page while downloads are locked. */
export function PrintLock({ phone }: { phone: string }) {
  const safe = phone.replace(/[^\d+ ]/g, "");
  return <style>{`@media print{body *{visibility:hidden!important}body::before{visibility:visible;display:block;padding:2rem;font:16px sans-serif;content:"To download or print this page, contact Admin on ${safe}."}}`}</style>;
}
