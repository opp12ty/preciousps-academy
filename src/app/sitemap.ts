import type { MetadataRoute } from "next";

const PATHS = ["", "/about", "/subjects", "/cbt-practice", "/mock-exams", "/bece-preparation", "/jamb-preparation", "/waec-preparation", "/neco-preparation", "/study-centre", "/how-it-works", "/faq", "/contact", "/privacy", "/terms", "/register", "/login"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.APP_URL ?? "http://localhost:3000";
  return PATHS.map((p) => ({ url: `${base}${p}`, changeFrequency: p ? "monthly" : "weekly", priority: p ? 0.7 : 1 }));
}
