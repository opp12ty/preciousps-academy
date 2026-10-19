import type { StarterArticle } from "./hub";

/**
 * "Travelling abroad" guides for the Knowledge Hub (students) and the Parent Learning Hub.
 * Written for Precious PS Academy as general education about the usual process Nigerians and other
 * Africans follow to study, visit or settle in the USA, Canada, the UK and Europe. Rules, fees and
 * processing times change often, so every guide sends the reader to the official government site.
 * Staff can edit or replace all of it in the backend.
 */

type Part = [heading: string, text: string];

const CATEGORY = "Travel & study abroad";
const OFFICIAL = "\n\n## Always check the official source\nVisa rules, fees and processing times change, sometimes several times a year. Before paying for anything, confirm the current rules on the official government website named above. This guide is general education, not legal or immigration advice.";

const guide = (title: string, summary: string, parts: Part[], keyPoints: string[], activity: string): StarterArticle[] => {
  const body = parts.map(([h, t]) => `## ${h}\n${t}`).join("\n\n") + OFFICIAL;
  const base = { category: CATEGORY, title, summary, body, keyPoints: keyPoints.join("\n"), activity };
  return [
    { ...base, audience: "STUDENT", section: "KNOWLEDGE" },
    { ...base, audience: "PARENT", section: "LEARNING" },
  ];
};

export const TRAVEL_ARTICLES: StarterArticle[] = [
  ...guide("Travelling abroad: the standard process, step by step", "Every country is different, but almost every journey abroad follows the same ten steps.", [
    ["The ten steps", "1. **Decide why you are going**: study, a visit, work, or joining family. The purpose decides the visa.\n2. **Get or renew your international passport.** It should be valid for at least six months beyond your planned stay.\n3. **Research the country and the route** on the official immigration website, not on social media.\n4. **Secure the reason to travel**: an admission letter, a job offer, an invitation letter, or a hotel and tour plan.\n5. **Gather documents**: birth certificate, school results, bank statements, sponsor's letter, and English test results if needed.\n6. **Show the money.** Every embassy wants proof that you can pay fees and living costs without working illegally.\n7. **Apply online** on the official portal and pay the official fee.\n8. **Biometrics and interview**: fingerprints and photograph at a visa centre, and for some countries an interview.\n9. **Wait for the decision**, and do not book non-refundable flights before the visa is in your passport.\n10. **Prepare to arrive**: accommodation, health insurance, money for the first weeks, and copies of every document."],
    ["The picture in one line", "Purpose → Passport → Admission or invitation → Documents → Proof of funds → Online application → Biometrics / interview → Decision → Travel → Arrival and registration."],
    ["Why applications fail", "- Bank statements with large, sudden deposits that cannot be explained.\n- Documents that do not match (different spellings of a name, different dates of birth).\n- Fake or altered documents. This can lead to a ban of up to ten years in some countries.\n- Weak reasons to return home, for visit visas.\n- Missing the English test score or the deadline."],
  ], ["Purpose decides the visa", "Passport valid six months beyond the stay", "Official websites only", "Proof of funds is central", "Never use false documents"], "Draw the ten steps as a flow chart in your notebook and tick the ones you could already do today."),

  ...guide("Getting or renewing a Nigerian international passport", "The passport is the first document every embassy asks for.", [
    ["Where to apply", "Apply through the Nigeria Immigration Service (NIS) online portal, pay the official fee online, then attend a passport office for photograph and fingerprints. Official site: **immigration.gov.ng**. Nigerians abroad apply through the Nigerian embassy or high commission in their country."],
    ["What you usually need", "- National Identification Number (NIN). The name and date of birth must match your other documents exactly.\n- Birth certificate or declaration of age.\n- For children under 18: a parent's consent letter and the parent's passport or ID.\n- Recent passport photograph to the stated size."],
    ["Good habits", "- Apply early: delays are common before holidays.\n- Check the spelling of your name on every document before submission.\n- Do not pay touts or \"connection men\" at passport offices. Pay only on the official portal.\n- Renew well before the passport has six months left."],
  ], ["Apply on the official NIS portal", "NIN must match other documents", "Children need parental consent", "Avoid touts"], "Check the names and dates of birth on your birth certificate, NIN slip and school records. Are they exactly the same?"),

  ...guide("Studying in the United States (USA)", "Admission to a certified school, the I-20 form, then the F-1 student visa.", [
    ["The route", "1. Apply to a US college or university certified by the Student and Exchange Visitor Program (SEVP).\n2. After admission and proof of funds, the school sends a **Form I-20**.\n3. Pay the **SEVIS I-901 fee** online.\n4. Complete the **DS-160** online visa application and pay the visa fee.\n5. Book and attend the interview at the US Embassy in Abuja or the Consulate in Lagos.\n6. If approved, the visa is printed in your passport."],
    ["Tests and money", "Most universities ask for SAT or ACT for undergraduate study (some are \"test-optional\"), and TOEFL, IELTS or Duolingo English Test for English. You must show funds for at least the first year's tuition and living costs. Many US universities offer scholarships and financial aid; search early."],
    ["At the interview", "Be honest and brief. Know your course, your school, who is paying, and your plans after study. Officers want to see that you are a genuine student."],
    ["Official sites", "**travel.state.gov** (visas) and **studyinthestates.dhs.gov** (student rules). EducationUSA advising centres in Nigeria give free, official guidance."],
  ], ["Certified school → I-20", "Pay SEVIS fee, then DS-160", "Interview in Abuja or Lagos", "Show at least one year of funds", "EducationUSA advice is free"], "Visit the EducationUSA website and list three US universities that offer your favourite course, with their English test requirement."),

  ...guide("Studying in Canada", "A letter of acceptance from a designated school, then a study permit.", [
    ["The route", "1. Get a **letter of acceptance** from a Designated Learning Institution (DLI).\n2. Most students now also need a **provincial or territorial attestation letter (PAL/TAL)**, which the school helps you obtain.\n3. Apply online for a **study permit** on the official Immigration, Refugees and Citizenship Canada (IRCC) website.\n4. Give biometrics at a visa application centre, and do a medical examination with an approved doctor if asked.\n5. If approved, you receive a letter of introduction; the permit itself is issued when you land in Canada."],
    ["Money", "You must prove you can pay the first year's tuition plus a set amount for living costs. Many applicants use a Guaranteed Investment Certificate (GIC) from a participating Canadian bank to show living funds."],
    ["Good to know", "Canada sets a yearly cap on new study permits, so apply early. Some programmes allow graduates to apply for a work permit after study; check which ones before you choose a course."],
    ["Official site", "**canada.ca/immigration** (IRCC). Only use authorised representatives: licensed consultants or lawyers, who can be checked on the official register."],
  ], ["Designated school only", "Attestation letter for most students", "Biometrics and medicals", "GIC for living funds", "Check licensed consultants"], "Find the official IRCC page on study permits and write down the documents it lists."),

  ...guide("Studying in the United Kingdom (UK)", "An unconditional offer, a CAS number, then the Student visa.", [
    ["The route", "1. Get an **unconditional offer** from a licensed student sponsor (most UK universities).\n2. The university issues a **Confirmation of Acceptance for Studies (CAS)** number.\n3. Take a **tuberculosis (TB) test** at an approved clinic. This is required for Nigerian applicants staying more than six months.\n4. Apply online for the **Student visa**, pay the fee and the **Immigration Health Surcharge**.\n5. Give biometrics at the visa centre, or use the UK ID check app where allowed."],
    ["Money and English", "You must show tuition plus living costs, and the money must have been in the account for at least 28 consecutive days before you apply. English is proved by an approved test (such as IELTS for UKVI) or by the university's own assessment, depending on the course."],
    ["Good to know", "Most dependants can no longer join students on taught courses, so families should check the current rules before planning. After graduating, some students may apply for the Graduate route."],
    ["Official site", "**gov.uk/student-visa**. Search for scholarships such as Chevening (postgraduate) and university bursaries."],
  ], ["Offer → CAS number", "TB test for Nigerian applicants", "Funds held 28 days", "Health surcharge paid with the visa", "Check dependant rules"], "Make a 28-day calendar and mark the first and last day money must stay in the account."),

  ...guide("Europe: study, visits and the Schengen visa", "Many countries, one short-stay visa, and different national rules for study.", [
    ["Schengen short stays", "Most of mainland Europe is in the **Schengen Area**. One Schengen visa lets you visit for up to 90 days in any 180-day period. Apply at the embassy of the country where you will spend most time (or enter first if the times are equal), usually through its visa centre, up to six months and at least 15 days before travel."],
    ["Studying in Europe", "Long courses need a **national (type D) visa** or residence permit from that country. Many public universities in Germany, France, Norway and elsewhere charge low or no tuition for some programmes, and many courses are taught in English. Germany, for example, usually asks students to show living funds in a blocked bank account."],
    ["Not Schengen", "The UK and Ireland have their own visa systems. A Schengen visa does not let you enter them."],
    ["Official sites", "**home-affairs.ec.europa.eu** (Schengen rules) and the official site of each embassy, for example the German Academic Exchange Service (DAAD) for study in Germany and Campus France for France."],
  ], ["90 days in 180 for Schengen visits", "Apply at the main destination's embassy", "Study needs a national visa", "Low tuition in many public universities", "UK and Ireland are separate"], "Choose one European country and find its official study website. Is tuition free, low or high for international students?"),

  ...guide("Choosing an agent and avoiding visa scams", "A good agent saves time; a fake one can cost you money and a travel ban.", [
    ["What a genuine agent or adviser does", "- Explains the options and the real costs before you pay.\n- Gives a written contract and official receipts.\n- Lets **you** see and sign your own application.\n- Is registered where required (for Canada, licensed consultants are listed on an official register; many UK and US universities publish lists of their approved agents)."],
    ["Warning signs", "- \"Guaranteed visa\" or \"100% approval\". Only the embassy decides.\n- Asking you to pay into a personal account, or in cash with no receipt.\n- Offering to \"arrange\" bank statements, admission letters or job offers.\n- Pressure to pay today, or a job abroad that asks you to pay for the job.\n- Contacts only on social media, with no office address."],
    ["How to check", "Ask for references and talk to them yourself. Check the agency on the university's list of approved agents. Search the agency's name with the word \"scam\". Use the school's **Meet an Expert** page, where staff list professionals and agencies they trust, with feedback from families."],
    ["If you have been cheated", "Keep every message and receipt and report to the police and the Economic and Financial Crimes Commission (EFCC). Report fake job offers abroad to the National Agency for the Prohibition of Trafficking in Persons (NAPTIP)."],
  ], ["No one can guarantee a visa", "Written contract and official receipts", "Never buy documents", "Check approved-agent lists", "Report fraud to EFCC or NAPTIP"], "With your parent, read three online reviews of an agency and decide together whether it shows any warning signs."),

  ...guide("Preparing to travel and the first weeks abroad", "A calm arrival starts with a checklist made weeks before you leave.", [
    ["Before you leave", "- Passport with visa, admission or invitation letter, and printed copies of everything.\n- Original certificates and transcripts in a folder in your hand luggage.\n- Health: vaccination records, the yellow fever card, any prescribed medicine with the doctor's letter.\n- Money: a card that works abroad, plus a small amount of the local currency.\n- Accommodation booked for at least the first nights.\n- Emergency contacts written on paper, not only in the phone."],
    ["When you arrive", "- Keep documents ready for the border officer and answer questions simply and truthfully.\n- Register with your school, and with the police or local authority if the country requires it.\n- Open a local bank account and get a local SIM.\n- Register with a doctor or the school health service.\n- Learn the local emergency number."],
    ["Settling in", "Homesickness is normal. Join student societies and the African or Nigerian association, keep a budget, and call home regularly. Ask the international student office for help early."],
  ], ["Copies of every document", "Certificates in hand luggage", "Yellow fever card and medicines", "Register on arrival", "Ask for help early"], "Write your own travel checklist with three columns: document, where it is, and done."),
];
