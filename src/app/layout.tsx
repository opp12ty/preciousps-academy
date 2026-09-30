import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";
import { getBrand } from "@/server/brand";

const HEX = /^#[0-9a-fA-F]{6}$/;
/** Brand colours chosen in Admin → Branding; shades are derived so every token follows. */
function themeCss(c: { navy: string; royal: string; gold: string }) {
  const out: string[] = [];
  if (HEX.test(c.navy)) out.push(`--color-navy-800:${c.navy};--color-navy-950:color-mix(in srgb,${c.navy} 40%,black);--color-navy-900:color-mix(in srgb,${c.navy} 70%,black);--color-navy-700:color-mix(in srgb,${c.navy} 82%,white);--color-navy-600:color-mix(in srgb,${c.navy} 65%,white)`);
  if (HEX.test(c.royal)) out.push(`--color-royal-600:${c.royal};--color-royal-700:color-mix(in srgb,${c.royal} 85%,black);--color-royal-500:color-mix(in srgb,${c.royal} 85%,white);--color-royal-100:color-mix(in srgb,${c.royal} 15%,white);--color-royal-50:color-mix(in srgb,${c.royal} 7%,white)`);
  if (HEX.test(c.gold)) out.push(`--color-gold-500:${c.gold};--color-gold-600:color-mix(in srgb,${c.gold} 85%,black);--color-gold-400:color-mix(in srgb,${c.gold} 82%,white);--color-gold-100:color-mix(in srgb,${c.gold} 20%,white);--color-gold-50:color-mix(in srgb,${c.gold} 9%,white)`);
  return out.length ? `:root{${out.join(";")}}` : "";
}

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-playfair", display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const b = await getBrand();
  return {
    metadataBase: new URL(process.env.APP_URL ?? "http://localhost:3000"),
    title: { default: `${b.platformName} — ${b.tagline}`, template: `%s · ${b.platformName}` },
    description: `${b.platformName}: guided lessons, auto-marked classwork, secure computer-based tests and BECE, JAMB, WAEC and NECO preparation for JSS 1–SSS 3 students. ${b.positioning}`,
    applicationName: b.platformName,
    manifest: "/manifest.webmanifest",
    ...(b.faviconUrl ? { icons: { icon: b.faviconUrl, apple: b.faviconUrl } } : {}),
    openGraph: {
      title: b.platformName,
      description: b.tagline,
      siteName: b.platformName,
      images: [{ url: b.logoUrl, width: 480, height: 480, alt: `${b.platformName} logo` }],
      locale: "en_NG",
      type: "website",
    },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b1f4b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Reading the request makes every page dynamic, so Next.js stamps the per-request CSP nonce on its scripts.
  await headers();
  const theme = themeCss((await getBrand()).colors);
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="min-h-dvh">
        {theme && <style dangerouslySetInnerHTML={{ __html: theme }} />}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
