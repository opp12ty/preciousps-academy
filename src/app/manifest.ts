import type { MetadataRoute } from "next";
import { getBrand } from "@/server/brand";

/** PWA manifest — install to home screen; name comes from Admin → General, icons from the official logo. */
/** Reads branding from the database, so it is rendered per request, never at build time. */
export const dynamic = "force-dynamic";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const b = await getBrand();
  return {
    name: b.platformName,
    short_name: b.platformName.length > 14 ? "Precious PS" : b.platformName,
    description: `${b.tagline} — ${b.schoolName}`,
    start_url: "/student",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: b.colors.navy || "#0b1f4b",
    orientation: "portrait",
    icons: [
      { src: "/brand/logo-mark-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/logo-mark-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/brand/maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/brand/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
