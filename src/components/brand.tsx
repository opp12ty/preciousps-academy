/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { cx } from "./ui/primitives";

/**
 * Official Precious PS Academy logo. Always rendered with its natural aspect ratio (object-contain)
 * and clear space; never replaced by an unrelated icon.
 */
export function Logo({ src, className, alt = "Precious PS Academy logo", priority }: { src: string; className?: string; alt?: string; priority?: boolean }) {
  return <img src={src} alt={alt} className={cx("object-contain", className)} loading={priority ? "eager" : "lazy"} decoding="async" />;
}

export function BrandLockup({ markUrl, name, href = "/", light, compact, subtitle }: { markUrl: string; name: string; href?: string; light?: boolean; compact?: boolean; subtitle?: string }) {
  return (
    <Link href={href} className="group flex min-w-0 items-center gap-2.5" aria-label={`${name} — home`}>
      <span className={cx("grid shrink-0 place-items-center overflow-hidden rounded-xl", light ? "ring-1 ring-white/30" : "ring-1 ring-line", compact ? "size-10" : "size-11")}>
        <Logo src={markUrl} alt="" className="size-full" priority />
      </span>
      <span className="min-w-0 leading-tight">
        <span className={cx("block truncate font-extrabold tracking-[0.02em]", compact ? "text-[0.9rem]" : "text-[0.98rem]", light ? "text-white" : "text-navy-800")}>{name}</span>
        <span className={cx("block truncate text-[0.62rem] font-semibold tracking-[0.18em]", light ? "text-gold-400" : "text-gold-600")}>{subtitle}</span>
      </span>
    </Link>
  );
}
