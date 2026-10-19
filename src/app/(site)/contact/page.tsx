import type { Metadata } from "next";
import { Clock, KeyRound, Mail, MapPin, Phone, Send } from "lucide-react";
import { getBrand } from "@/server/brand";
import { getContent } from "@/server/services/content";
import { ActionForm, SelectField, SubmitButton, TextAreaField, TextField } from "@/components/ui/form";
import { PageHero } from "@/components/site/content-page";
import { sendEnquiryAction } from "./actions";

export const metadata: Metadata = { title: "Contact" };

const TOPICS = [
  { value: "GENERAL", label: "General question" },
  { value: "ADMISSION", label: "Admission" },
  { value: "ACCESS_CODE", label: "Access code" },
  { value: "TECHNICAL", label: "Technical help" },
  { value: "OTHER", label: "Something else" },
];

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
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          {items.map((i) => (
            <div key={i.label} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-500 text-navy-900">
                <i.icon className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wide text-muted">{i.label}</p>
                {i.href ? (
                  <a href={i.href} className="mt-0.5 block text-lg font-bold text-navy-800 hover:text-royal-600">
                    {i.value}
                  </a>
                ) : (
                  <p className="mt-0.5 text-lg font-bold text-navy-800">{i.value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="flex items-start gap-4 rounded-2xl border border-gold-400/50 bg-gold-50 p-5">
            <KeyRound className="mt-0.5 size-6 shrink-0 text-gold-600" aria-hidden />
            <p className="font-semibold text-navy-800">{c.accessNote}</p>
          </div>
        </div>
        <section aria-labelledby="enquiry-title" className="rounded-3xl border border-line bg-white p-6 sm:p-8">
          <h2 id="enquiry-title" className="text-xl font-bold text-navy-800">
            Send us a message
          </h2>
          <p className="mt-1 text-sm text-muted">We read every message and reply by phone or e-mail.</p>
          <ActionForm action={sendEnquiryAction} className="mt-6 space-y-4" resetOnSuccess>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="Full name" name="name" required autoComplete="name" />
              <TextField label="Phone number" name="phone" required type="tel" autoComplete="tel" placeholder="080…" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField label="E-mail (optional)" name="email" type="email" autoComplete="email" />
              <SelectField label="Topic" name="topic" options={TOPICS} defaultValue="GENERAL" />
            </div>
            <TextAreaField label="Your message" name="message" required rows={5} />
            {/* Honeypot: hidden from people, irresistible to bots. */}
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
              <label>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <SubmitButton pendingText="Sending…" className="w-full sm:w-auto">
              <Send className="size-4" aria-hidden /> Send message
            </SubmitButton>
          </ActionForm>
        </section>
      </div>
    </>
  );
}
