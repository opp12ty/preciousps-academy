import type { Metadata } from "next";
import { Clock, KeyRound, Mail, MapPin, Phone } from "lucide-react";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { PageHero } from "@/components/site/content-page";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage() {
  const brand = await getBrand();
  const c = await getContent(brand.schoolId, "contact");
  const items = [
    { icon: Phone, label: "Phone", value: c.phone, href: `tel:${c.phone.replace(/\s/g, "")}` },
    ...(c.email ? [{ icon: Mail, label: "Email", value: c.email, href: `mailto:${c.email}` }] : []),
    { icon: MapPin, label: "Address", value: c.address },
    { icon: Clock, label: "Office hours", value: c.hours },
  ];
  return (
    <>
      <PageHero eyebrow="Get in touch" title={c.title} intro={c.intro} />
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.label} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-card">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-800 text-gold-400">
              <i.icon className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-muted">{i.label}</p>
              {i.href ? (
                <a href={i.href} className="mt-1 block text-lg font-bold text-navy-800 hover:text-royal-600">
                  {i.value}
                </a>
              ) : (
                <p className="mt-1 text-lg font-bold text-navy-800">{i.value}</p>
              )}
            </div>
          </div>
        ))}
        <div className="flex items-start gap-4 rounded-2xl border border-gold-400/40 bg-gold-50 p-6 md:col-span-2">
          <KeyRound className="mt-0.5 size-6 shrink-0 text-gold-600" aria-hidden />
          <p className="font-semibold text-navy-800">{c.accessNote}</p>
        </div>
      </div>
    </>
  );
}
