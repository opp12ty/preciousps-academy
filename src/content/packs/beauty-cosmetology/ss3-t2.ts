import type { TermPlan } from "../types";

/** SS3 Beauty and Cosmetology, Second and Third Terms — NERDC 2025 scheme. */
export const ss3t2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "Advanced Spa Services",
      subtopics: ["The spa and its services", "Body scrubs", "Body wraps", "Holistic therapies"],
      objectives: ["Describe a spa and the services it offers", "Explain how body scrubs are given", "Explain body wraps and their benefits", "Describe common holistic therapies and their contra-indications"],
      lesson: {
        title: "Body Treatments in the Spa",
        summary: "Scrubs, wraps and holistic therapies that cleanse, relax and restore the body.",
        minutes: 40,
        notes: `## The spa
A **spa** is an **establishment offering treatments for health, relaxation and beauty**, traditionally using water. Types: **day spa**, hotel/resort spa, destination spa, medical spa.
**Services:** massage; facials; body scrubs and wraps; **hydrotherapy** (baths, steam, sauna, jacuzzi); manicure and pedicure; waxing; aromatherapy.
**Atmosphere:** calm, clean, softly lit, quiet music, pleasant scent, comfortable temperature, privacy.

## Body scrub (exfoliation)
A **body scrub** **removes dead skin cells from the surface of the body** using a mildly abrasive product.
- **scrub materials:** sugar, sea salt, ground coffee, oatmeal, rice powder, crushed seeds, in oil or cream; **black soap and native sponge (kankan)** in traditional practice
- **benefits:** smoother, brighter skin; improved circulation; unclogged pores; better absorption of moisturiser; even tone; prepares for tanning or wraps

### Procedure
1. consultation; check contra-indications
2. client showers or skin is dampened with warm towels
3. apply scrub in **gentle circular movements**, working **towards the heart**; extra attention to elbows, knees, heels
4. rinse or remove with warm towels
5. apply **moisturiser** or oil
6. aftercare advice — drink water; avoid sun and harsh products for a day
Not more than once or twice a week.

## Body wraps
A **body wrap** is a treatment in which a **product is applied to the body, which is then wrapped** (in cloth, plastic film or thermal blanket) for about 20–30 minutes.
| Wrap | Purpose |
|---|---|
| **mud / clay** | draws out impurities; tones; minerals |
| **seaweed (algae)** | mineral-rich; detoxifying; firming |
| **hydrating** — shea butter, cocoa, honey, aloe | moisturises dry skin |
| **herbal** | soothing |
| **slimming / contour** | temporary firming and inch loss (water) — not fat loss |
| **paraffin** | softens; eases stiff joints |

**Procedure:** exfoliate → apply product → wrap and keep warm → rest (scalp or face massage) → unwrap and rinse → moisturise.
**Benefits:** relaxation; soft, hydrated skin; warmth eases muscles; feeling of well-being.

## Holistic therapies
**Holistic** means **treating the whole person — body, mind and spirit**.
| Therapy | Description |
|---|---|
| **Swedish massage** | effleurage (stroking), petrissage (kneading), tapotement (tapping), friction, vibration — relaxes and improves circulation |
| **deep-tissue massage** | firm pressure for muscle tension |
| **aromatherapy** | **essential oils** (lavender — calming; peppermint — refreshing; eucalyptus — clearing) diluted in **carrier oil** for massage, baths or diffusers |
| **hot-stone therapy** | warmed smooth stones on the body |
| **reflexology** | pressure on points of the feet and hands believed to correspond to body areas |
| **hydrotherapy** | water — steam, sauna, baths, jets |
| **Indian head massage; shiatsu; acupressure** | pressure and manipulation |
| **meditation, yoga, breathing** | relaxation of the mind |
| traditional practices | herbal steam baths; **hammam** |

**Essential oils** are highly concentrated — always **dilute** (about 1–3% in carrier oil), patch test, and avoid in pregnancy unless qualified.

## Contra-indications to body treatments
fever; **contagious skin diseases**; open wounds, sunburn, rashes; **high blood pressure and heart conditions** (heat treatments); **pregnancy** (certain treatments and oils); **varicose veins** (no deep massage over them); recent surgery or fractures; thrombosis; allergies (e.g. **iodine/shellfish allergy** with seaweed); diabetes (care with heat and feet); cancer treatment (medical consent).

## Hygiene and safety
clean linen for each client; **disinfect** beds, bowls and tools; wash hands; fresh disposable items; test temperature of stones, wax and water; non-slip floors; client modesty — **draping**; water for the client afterwards; record card.

## The therapist
clean uniform; short nails; no strong perfume; good posture; calm manner; respects boundaries and confidentiality.

## Aftercare
drink water; rest; avoid alcohol, heavy meals and strong sun; report any reaction.`,
        examples: `**Example 1.** What does a body scrub do? *Answer:* It **removes dead skin cells**, leaving the skin smooth and improving circulation.

**Example 2.** Name two materials used for body wraps. *Answer:* **Mud (clay)** and **seaweed**.

**Example 3.** Why must essential oils be diluted? *Answer:* They are **highly concentrated** and can irritate or burn the skin if used neat.`,
      },
      questions: [
        ["E", "An establishment offering treatments for health, relaxation and beauty is a", "spa", "boutique", "pharmacy", "gymnasium only", "Water treatments were its original feature."],
        ["E", "A treatment that removes dead skin cells from the body is a", "body scrub", "body wrap", "pedicure only", "sauna", "It is a form of exfoliation."],
        ["E", "Treating the whole person — body, mind and spirit — is described as", "holistic", "cosmetic", "surgical", "clinical only", "Holistic therapies aim at overall well-being."],
        ["M", "The use of essential oils for relaxation and well-being is", "aromatherapy", "reflexology", "hydrotherapy", "electrolysis", "The oils are diluted in a carrier oil."],
        ["M", "Applying pressure to points on the feet believed to correspond to body areas is", "reflexology", "effleurage", "threading", "microblading", "It is a holistic therapy."],
        ["M", "The stroking movement used at the beginning and end of a massage is", "effleurage", "petrissage", "tapotement", "friction", "It soothes and spreads the oil."],
        ["M", "The use of water in treatments such as steam baths and jacuzzis is", "hydrotherapy", "phototherapy", "thermolysis", "aromatherapy", "Hydro refers to water."],
        ["H", "A seaweed body wrap should not be given to a client who is allergic to", "iodine or shellfish", "wool", "nickel", "dust", "Seaweed is rich in iodine."],
        ["H", "Scrubbing and massage movements on the limbs are directed towards the heart in order to", "assist the return of blood and lymph", "cool the skin", "remove hair", "dry the skin", "This follows the direction of venous and lymphatic flow."],
        ["H", "Heat treatments such as sauna and hot wraps are unsuitable for a client with", "high blood pressure", "dry elbows", "short nails", "oily hair", "Heat places extra strain on the heart and circulation."],
      ],
    },
    {
      week: 2,
      title: "Global Beauty Standards",
      subtopics: ["Meaning of beauty standards", "Cultural perceptions of beauty", "Diversity and inclusion", "Media, body image and ethics"],
      objectives: ["Explain what beauty standards are", "Compare cultural perceptions of beauty", "Explain diversity and inclusion in the beauty industry", "Discuss the influence of media on body image and the ethical issues involved"],
      lesson: {
        title: "Beauty across Cultures",
        summary: "How ideas of beauty differ between cultures and times, and why the industry must serve everyone.",
        minutes: 40,
        notes: `## Beauty standards
**Beauty standards** are the **features and qualities that a society regards as attractive at a particular time**. They are **not fixed** — they differ from culture to culture and change over time.

## Cultural perceptions
| Culture / region | Traditional ideals and practices |
|---|---|
| **Nigeria and West Africa** | well-groomed, plaited or threaded hair; **gele** and head-ties; **tribal marks** (historically); **henna (laali)** designs in the north; **uli** body painting and **nzu** among the Igbo; **tiro (kohl)** on the eyes; beads at the waist; a full figure admired — the Efik **fattening room** (nkuho) prepared brides |
| **East and Southern Africa** | Maasai beadwork and shaved heads; red ochre on Himba skin and hair; lip plates of the Mursi; neck rings of the Ndebele |
| **North Africa and Middle East** | kohl-lined eyes; henna; hammam bathing; fragrance |
| **South Asia** | henna (mehndi) at weddings; bindi; long oiled hair; gold jewellery |
| **East Asia** | clear, luminous skin; elaborate skin-care routines |
| **Europe and America** | changing ideals — slimness, tanned skin, athletic build; great influence through fashion and film |
| **Pacific and others** | tattooing (tā moko of the Māori) as identity |

**Across time:** fuller figures were admired in many periods; pale skin once signalled high status in Europe, later a tan did; hairstyles and makeup change with each decade.

## Common threads
cleanliness and grooming; healthy skin and hair; symmetry; adornment to mark **age, status, marriage and identity**.

## Globalization of beauty
Film, music, fashion and **social media** spread styles worldwide. **Benefits:** exchange of ideas, products and techniques; wider careers; African styles (braids, ankara, natural hair) gain global recognition.
**Problems:** pressure toward a **single narrow ideal**; neglect of local traditions; harmful practices.

## Diversity and inclusion
- **Diversity** — recognising **differences** among people: skin tone, hair texture, facial features, body size, age, sex, ability, culture and religion.
- **Inclusion** — making sure **everyone is welcomed and served well**.

### In practice
- foundation and concealer in a **wide shade range**, including deep tones and all undertones
- skill with **all hair types** — straight to tightly coiled (often classed types 1 to 4)
- products and advice for **albinism, vitiligo, scars and mature skin**
- services for **men**; modest and private services for clients who require them (e.g. hijab-wearing clients)
- **accessible** premises for clients with disabilities
- respectful language; no stereotyping
- models of different looks in advertising

## Colourism and skin bleaching
**Colourism** is **prejudice favouring lighter skin over darker skin**. It drives **skin bleaching**, which is widespread and dangerous.
**Harmful agents:** **mercury**, high-strength **hydroquinone**, potent **steroids**.
**Effects:** thinning and fragile skin, stretch marks, **ochronosis** (blue-black patches), poor wound healing, infections, **kidney and nerve damage**, risk of skin cancer; body odour.
The professional should **discourage bleaching**, promote healthy skin at every shade, and recommend sunscreen and safe brightening for uneven tone under guidance.

## Media and body image
**Body image** is **how a person sees and feels about her own body**. Edited pictures, **filters** and advertising set **unrealistic ideals**, leading to low self-esteem, anxiety, **eating disorders**, bleaching, and risky cosmetic procedures.
**Positive movements:** **body positivity**; the **natural hair** movement; campaigns using unedited images.

## Ethics for the beauty professional
honest advertising — no false claims; no promotion of harmful products; **informed consent**; respect for culture and religion; **enhance, not shame**; refer clients with signs of distress about their bodies; avoid cultural disrespect when borrowing styles; protect clients' images and privacy.

## Trends
clean and "skin-first" beauty; inclusive shade ranges; men's grooming; natural and organic products; sustainability; halal and vegan cosmetics.`,
        examples: `**Example 1.** What are beauty standards? *Answer:* The **features a society regards as attractive at a given time** — they vary by culture and period.

**Example 2.** Define colourism. *Answer:* **Prejudice that favours lighter skin over darker skin**.

**Example 3.** Give one way a makeup brand shows inclusion. *Answer:* By offering **foundation shades for all skin tones**, including deep ones.`,
      },
      questions: [
        ["E", "The features a society regards as attractive at a particular time are its", "beauty standards", "safety regulations", "price lists", "trade unions", "They differ between cultures and change with time."],
        ["E", "Plant dye used for decorative designs on hands and feet in northern Nigeria is", "henna", "kohl", "camwood", "indigo", "It is called laali or lalle."],
        ["E", "How a person sees and feels about her own body is her", "body image", "skin type", "blood group", "hair texture", "It affects confidence and well-being."],
        ["M", "Making sure that every kind of client is welcomed and well served is", "inclusion", "exclusion", "colourism", "stereotyping", "It goes with recognising diversity."],
        ["M", "Prejudice favouring lighter skin over darker skin is", "colourism", "racism only abroad", "tribalism", "ageism", "It drives the demand for bleaching products."],
        ["M", "A harmful substance found in many skin-bleaching creams is", "mercury", "glycerine", "shea butter", "aloe vera", "It damages the kidneys and nerves."],
        ["M", "The traditional Efik practice of preparing a bride with rest, rich food and beauty care is the", "fattening room", "hammam", "sauna", "hair threading", "A full figure was regarded as beautiful."],
        ["H", "Blue-black patches on the skin after long use of hydroquinone are known as", "ochronosis", "vitiligo", "albinism", "eczema", "It is a disfiguring effect of bleaching."],
        ["H", "Edited and filtered images in the media affect young people mainly by", "creating unrealistic ideals that lower self-esteem", "improving their eyesight", "teaching hygiene", "lowering product prices", "Comparison with false images harms body image."],
        ["H", "A beauty brand shows respect for diversity when it", "offers products for all skin tones and hair types", "sells one foundation shade", "advertises bleaching", "serves only one age group", "Its range and service reflect the variety of clients."],
      ],
    },
    {
      week: 3,
      title: "Cosmetic Chemistry II: Preservation, Fragrance and Safety Testing",
      subtopics: ["pH and the skin", "Preservation of cosmetics", "Fragrance", "Safety testing and labelling"],
      objectives: ["Explain pH and its importance in cosmetics", "Explain why and how cosmetics are preserved", "Describe fragrance in cosmetics", "Describe safety testing and the reading of labels"],
      lesson: {
        title: "Keeping Cosmetics Safe and Stable",
        summary: "The chemistry that keeps products free of microbes, pleasant to use and safe on the skin.",
        minutes: 40,
        notes: `## pH
The **pH scale (0–14)** measures **acidity and alkalinity**: below 7 acidic; 7 neutral; above 7 alkaline.
- the skin's surface — the **acid mantle** — has a pH of about **4.5–5.5**; it protects against bacteria
- **hair** is about 4.5–5.5
- **soap** is alkaline (about 9–10) and can dry the skin; **pH-balanced** cleansers are near 5.5
- **relaxers** are strongly alkaline (pH 10–14) — they swell the hair and break bonds; **neutralising shampoo** restores acidity
- **chemical exfoliants** (AHAs) are acidic (about 3–4)
pH is measured with **pH paper** or a **pH meter**.

## Why cosmetics spoil
- **microbial contamination** — bacteria, yeasts and moulds grow in products containing **water**
- **oxidation** — oils turn **rancid**; colours and actives degrade
- **separation** of emulsions; drying out; effect of **heat and light**
Signs: change of smell, colour or texture; separation; mould; gas.

## Preservation
A **preservative** is a **substance added to prevent the growth of microorganisms** in a product.
| Preservative | Notes |
|---|---|
| **parabens** (methyl-, propyl-) | effective, widely used; some consumers avoid them |
| **phenoxyethanol** | common paraben alternative |
| **sodium benzoate; potassium sorbate** | work in acidic products |
| **benzyl alcohol; organic acids** | "natural-positioned" systems |
| **formaldehyde releasers** | effective but increasingly avoided |

- **Anhydrous** (water-free) products — balms, body butters, oils — need **antioxidants** (vitamin E, rosemary extract) rather than preservatives.
- **Broad-spectrum** preservation covers bacteria, yeasts and moulds.
- **Chelating agents** (EDTA) and correct **pH** help preservatives work.
- **Packaging** matters: pumps and tubes are more hygienic than open jars.

### Shelf life
- **expiry date** / "best before"
- **period-after-opening (PAO)** symbol — an open jar marked e.g. **12M** (use within 12 months of opening)
- typical: mascara about 3 months; liquid foundation 6–12 months; lipstick 1–2 years; powders about 2 years

## Fragrance
**Fragrance** gives a pleasant scent and masks the odour of raw materials.
- **natural:** **essential oils** (distilled or expressed from flowers, leaves, peel, wood), absolutes, resins
- **synthetic:** aroma chemicals — consistent and cheaper
- **notes:** **top** (first impression — citrus, light), **middle / heart** (floral, spice), **base** (lasting — musk, wood, vanilla)
- **concentration in alcohol:** **parfum** (about 20–30%) > **eau de parfum** (15–20%) > **eau de toilette** (5–15%) > **eau de cologne** (2–4%)
- **fixatives** slow evaporation
Fragrance is a **common cause of allergy**; "fragrance-free" products suit sensitive skin. Some citrus oils are **phototoxic** (react in sunlight).

## Safety testing
| Test | Purpose |
|---|---|
| **patch test** | checks an individual for **allergic or irritant reaction** — a little product behind the ear or inner elbow, left **24–48 hours** |
| **preservative efficacy (challenge) test** | product is inoculated with microbes to prove the preservative works |
| **microbial limit test** | counts organisms in the finished product |
| **stability test** | storage at different temperatures to check separation, colour and odour |
| **pH test** | suitability for skin or hair |
| **dermatological / clinical tests** | on human volunteers |
| **heavy-metal tests** | lead, mercury, arsenic |
Many countries now restrict **animal testing**; "cruelty-free" products are not tested on animals.

**Reactions:** **irritation** (redness, stinging — can affect anyone) and **allergy / sensitisation** (immune response in susceptible people — itching, swelling, rash). Stop use and seek medical advice for severe reactions.

## Restricted and banned substances
**mercury**; **hydroquinone** above the permitted level; **lead** in colourants; potent steroids in cosmetics; certain dyes.

## Reading a label
**INCI ingredients list** — in **descending order of quantity**; net content; directions; **warnings**; batch number; manufacture and expiry dates or PAO; manufacturer; **NAFDAC registration number**.

## Regulation
**NAFDAC** registers and monitors cosmetics; the **Standards Organisation of Nigeria** sets standards.`,
        examples: `**Example 1.** What is the pH of healthy skin? *Answer:* About **4.5–5.5** — slightly acidic.

**Example 2.** Why does a water-based lotion need a preservative? *Answer:* **Bacteria and moulds grow readily in water**.

**Example 3.** What does "12M" inside an open-jar symbol mean? *Answer:* Use the product **within 12 months of opening**.`,
      },
      questions: [
        ["E", "The scale used to measure acidity and alkalinity is the", "pH scale", "Celsius scale", "Richter scale", "Beaufort scale", "It runs from 0 to 14."],
        ["E", "A substance added to cosmetics to prevent the growth of microorganisms is a", "preservative", "fragrance", "colourant", "humectant", "It extends the life of the product."],
        ["E", "A test in which a little product is applied behind the ear to check for reaction is a", "patch test", "pH test", "stability test", "challenge test", "It is read after 24–48 hours."],
        ["M", "The surface of healthy skin has a pH of about", "5", "9", "12", "1", "The acid mantle is slightly acidic."],
        ["M", "Products that contain no water, such as balms and oils, are described as", "anhydrous", "aqueous", "alkaline", "acidic", "They need antioxidants rather than preservatives."],
        ["M", "The fragrance notes that last longest on the skin are the", "base notes", "top notes", "middle notes", "citrus notes", "Musk, wood and vanilla evaporate slowly."],
        ["M", "On a cosmetic label, ingredients are listed in", "descending order of quantity", "alphabetical order", "order of price", "random order", "The first ingredients are present in the greatest amounts."],
        ["H", "The perfume type with the highest concentration of fragrance oil is", "parfum", "eau de toilette", "eau de cologne", "body mist", "It contains about 20–30% fragrance."],
        ["H", "A test in which a product is deliberately inoculated with microbes to prove the preservative works is the", "challenge test", "patch test", "pH test", "sniff test", "It is also called the preservative efficacy test."],
        ["H", "After a hair relaxer, a neutralising shampoo is used to", "restore the hair's acidic pH", "add more alkali", "bleach the hair", "remove all moisture", "Relaxers are strongly alkaline and must be neutralised."],
      ],
    },
    {
      week: 4,
      title: "Health and Safety Regulations in the Salon",
      subtopics: ["Salon hygiene", "Sterilisation and disinfection", "Hazards and accident prevention", "Government regulations"],
      objectives: ["State the rules of salon hygiene", "Distinguish cleaning, disinfection and sterilisation", "Identify hazards in the salon and how to control them", "Outline the regulations that apply to beauty businesses"],
      lesson: {
        title: "A Safe and Hygienic Salon",
        summary: "Protecting clients and workers from infection, chemicals and accidents, and obeying the law.",
        minutes: 40,
        notes: `## Why health and safety matters
Salons bring people into close contact with **tools, chemicals, heat, water and electricity**. Poor practice spreads **infection** and causes **injury**; it also damages the business and may break the law.

## Infection
Caused by **bacteria** (boils, impetigo), **viruses** (cold sores, warts, **hepatitis B and C, HIV** through blood), **fungi** (**ringworm**, athlete's foot, nail fungus) and **parasites** (**head lice**, scabies).
**Spread by:** direct contact; **contaminated tools, towels and surfaces**; blood from cuts; droplets.
**Cross-infection** is the **transfer of infection from one person to another** through tools, hands or surfaces.

## Levels of decontamination
| Level | Meaning | Methods |
|---|---|---|
| **cleaning (sanitation)** | removes visible dirt and many germs | soap/detergent and water, scrubbing |
| **disinfection** | kills **most** microorganisms (not all spores) on surfaces and tools | **70% alcohol**, **barbicide** (quaternary ammonium), **diluted bleach** (sodium hypochlorite), chlorhexidine |
| **sterilisation** | destroys **all** microorganisms including spores | **autoclave** (steam under pressure, 121 °C), glass-bead steriliser, dry heat; UV cabinets only keep clean tools clean |

**Order:** **clean first, then disinfect or sterilise**. Tools that may draw blood (cuticle nippers, razors, tweezers) need the highest level; **razor blades and needles are single-use**.

## Salon hygiene rules
- wash or sanitise **hands** before and after every client
- **clean towel and cape** for every client; launder hot
- disinfect **combs, brushes, clippers, bowls, foot spas, beds** between clients
- **disposable** items where possible — files, buffers, wax spatulas, mascara wands
- no **double-dipping** in wax or cream
- cover cuts with waterproof dressing; wear **gloves** where blood or chemicals are involved
- do not treat **contagious conditions**
- clean floors, sweep hair at once; covered bins; proper **waste disposal** — sharps in a **sharps container**
- good ventilation; clean water; clean toilets
- personal hygiene and clean uniform

## Hazards and controls
| Hazard | Control |
|---|---|
| **chemicals** — relaxers, dyes, bleach, acetone, acrylic monomer | read labels and **safety data sheets**; gloves; ventilation; correct mixing; **patch/strand tests**; store in labelled closed containers away from heat; never mix bleach with other chemicals |
| **electricity** — dryers, clippers, tongs | dry hands; check cables and plugs; no overloaded sockets; switch off after use; keep away from water |
| **heat** — tongs, wax, steamers, hot water | test temperature; never leave hot tools unattended |
| **slips, trips and falls** | wipe spills at once; tidy cables; non-slip floors |
| **sharp tools** | careful handling; sharps box |
| **fire** | extinguisher; clear exits; flammable products (hairspray, acetone) away from flames; no smoking |
| **posture and strain** | adjustable chairs; breaks; correct height |
| **fumes and dust** | ventilation; masks; dust extraction for nail filing |

**Risk assessment:** identify hazards → decide who may be harmed → evaluate and control → record → review.

## Personal protective equipment (PPE)
gloves, apron, mask, eye protection.

## First aid
a stocked **first-aid box**; a trained first-aider; treat **burns** with cool running water; **chemical in the eye** — rinse with plenty of clean water and seek medical help; **cuts** — pressure, clean dressing; **allergic reaction** — stop, remove product, seek help; **record** accidents in an accident book.

## Regulations in Nigeria
- **business registration** — Corporate Affairs Commission
- **local government / state** permits; **environmental health** inspection of premises; signage and fire-safety requirements
- **NAFDAC** — only registered cosmetics; bans on mercury and other prohibited substances
- **Standards Organisation of Nigeria** — product standards
- **Factories Act / labour laws** — workplace safety and employees' welfare
- **public health laws**; waste disposal rules
- **consumer protection** (FCCPC) — clients' right to safe service and redress
- tax registration
- **insurance** — public liability (recommended)
- professional association codes and **certification**

## Client protection
consultation and record card; consent; contra-indication checks; aftercare advice; confidentiality of records.`,
        examples: `**Example 1.** Distinguish disinfection from sterilisation. *Answer:* **Disinfection** kills most microorganisms; **sterilisation** destroys **all**, including spores.

**Example 2.** What is cross-infection? *Answer:* The **transfer of infection from one person to another** through tools, hands or surfaces.

**Example 3.** What should be done if a chemical splashes into a client's eye? *Answer:* **Rinse with plenty of clean water** and seek medical help.`,
      },
      questions: [
        ["E", "The transfer of infection from one client to another through tools is", "cross-infection", "contra-indication", "consultation", "exfoliation", "Clean, disinfected tools prevent it."],
        ["E", "The process that destroys all microorganisms including spores is", "sterilisation", "cleaning", "dusting", "rinsing", "An autoclave achieves it."],
        ["E", "A fungal infection of the scalp or skin seen in salons is", "ringworm", "hepatitis", "scabies", "impetigo", "Despite its name, it is caused by a fungus."],
        ["M", "The equipment that sterilises metal tools with steam under pressure is the", "autoclave", "UV cabinet", "towel warmer", "hood dryer", "It reaches about 121 °C."],
        ["M", "Used razor blades should be disposed of in a", "sharps container", "towel bin", "open dustbin", "sink", "This prevents injury and infection."],
        ["M", "Before a tool is disinfected, it must first be", "cleaned", "painted", "oiled", "wrapped", "Dirt shields germs from the disinfectant."],
        ["M", "A parasite of the scalp that a hairdresser must look out for is", "head lice", "athlete's foot", "ringworm of the nail", "hepatitis virus", "It spreads by contact and shared combs."],
        ["H", "Blood-borne viruses that can be transmitted by unsterilised sharp tools include", "hepatitis B and HIV", "ringworm and lice", "malaria and typhoid", "cholera and measles", "They pass through contact with infected blood."],
        ["H", "The first step in a risk assessment is to", "identify the hazards", "record the findings", "review the assessment", "buy insurance", "Controls follow once hazards are known."],
        ["H", "Flammable products such as hairspray and acetone should be stored", "away from heat and naked flames", "beside the hot tongs", "in direct sunlight", "next to the steriliser", "They can ignite easily."],
      ],
    },
    {
      week: 6,
      title: "Digital Marketing for Beauty Business",
      subtopics: ["Meaning and tools of digital marketing", "Social media branding", "Online booking systems", "Measuring results and staying safe online"],
      objectives: ["Explain digital marketing", "Build a beauty brand on social media", "Describe online booking and payment systems", "Measure marketing results and observe online safety"],
      lesson: {
        title: "Marketing Beauty Services Online",
        summary: "Using social media, booking tools and online payment to win and keep clients.",
        minutes: 40,
        notes: `## Digital marketing
**Digital marketing** is **promoting a business through the internet and electronic devices**. Beauty is **visual** — pictures and videos of results sell the service.

**Advantages:** low cost; reaches many people; targets specific groups (location, age, interest); open at all hours; direct conversation with clients; results can be **measured**.

## Tools
| Tool | Use |
|---|---|
| **social-media pages** | photographs, short videos, stories, live sessions |
| **messaging apps and business profiles** | enquiries, catalogues, broadcast lists, status updates |
| **website** | services, prices, gallery, booking, contact |
| **online maps / business listing** | location, opening hours, reviews |
| **search engine optimisation (SEO)** | being found in searches (e.g. "makeup artist in Ibadan") |
| **paid advertisements** | promoted posts targeted by location and interest |
| **e-mail and SMS** | reminders, offers |
| **influencer partnerships** | reach through people with many followers |
| **online reviews and testimonials** | social proof |

## Social media branding
A **brand** is the **identity and reputation** of the business.
- **consistent** name, **logo**, colours and tone across platforms
- a clear **profile (bio)** — what you do, where, how to book
- **high-quality content** — good lighting, clean background; **before-and-after** pictures; short process videos; tutorials and tips; client testimonials; behind-the-scenes; price and offer posts
- a **content calendar** — plan regular posts (e.g. three to five a week)
- **hashtags** and location tags so local clients find the page
- **engagement** — reply to comments and messages promptly and politely
- **highlight** covers for services, prices, reviews, booking policy
- **honesty** — no stolen pictures; no heavy editing that misrepresents results; **client consent** before posting

## Online booking systems
An **online booking system** lets clients **choose a service, date and time and confirm an appointment through the internet**.
**Features:** calendar of available slots; service list and prices; automatic **confirmation and reminders**; **deposit payment**; client records; rescheduling and cancellation rules.
**Benefits:** fewer missed appointments ("no-shows"); no double booking; bookings taken at any hour; saves time; professional image; data for planning.
Simple alternatives: booking forms, shared calendars, messaging-app catalogues.

## Online payment
bank transfer; **POS**; payment links; cards; mobile wallets. Confirm receipt in the **bank app**, not from a screenshot. Issue receipts.

## Policies to publish
price list; deposit and cancellation terms; lateness policy; home-service charges; aftercare.

## Measuring results
**Analytics** show how content performs.
| Measure | Meaning |
|---|---|
| **reach / impressions** | how many people saw the post |
| **engagement** | likes, comments, shares, saves |
| **followers** | audience size |
| **click-through** | people who clicked the link |
| **conversion** | people who actually **booked or bought** |
**Engagement rate** $= \\dfrac{\\text{engagements}}{\\text{reach}} \\times 100$; **conversion rate** $= \\dfrac{\\text{bookings}}{\\text{enquiries}} \\times 100$.
*A post reaching 2000 people with 160 engagements has an engagement rate of 8%.*

## Customer retention online
follow-up messages; rebooking reminders; birthday offers; loyalty rewards; referral discounts; responding to reviews — thank the positive, answer the negative calmly.

## Online safety
strong passwords and **two-factor authentication**; beware of **fake payment alerts, phishing links and impersonators**; protect clients' data; back up photographs; watermark work; separate business and personal accounts.

## Offline still counts
signboard, complimentary cards, flyers, referrals and excellent service support online marketing.`,
        examples: `**Example 1.** What is digital marketing? *Answer:* **Promoting a business through the internet and electronic devices**.

**Example 2.** A post reached 1500 people and had 90 engagements. Find the engagement rate. *Answer:* $\\tfrac{90}{1500} \\times 100 = \\mathbf{6\\%}$.

**Example 3.** Give two benefits of an online booking system. *Answer:* **Fewer missed appointments** and **no double booking**.`,
      },
      questions: [
        ["E", "Promoting a business through the internet and electronic devices is", "digital marketing", "door-to-door selling", "hawking", "barter", "Social media is one of its main tools."],
        ["E", "A system that lets clients choose a service and time over the internet is an", "online booking system", "accident book", "autoclave", "appointment card only", "It confirms appointments automatically."],
        ["E", "Pictures showing a client before and after a service are useful for", "promotion", "sterilisation", "costing", "ventilation", "They show the results the business can achieve."],
        ["M", "A plan showing what will be posted on social media and when is a", "content calendar", "price list", "risk assessment", "record card", "It keeps posting regular and consistent."],
        ["M", "Likes, comments, shares and saves on a post are measures of", "engagement", "reach", "cost", "stock", "They show how the audience responds."],
        ["M", "A post reaches 4000 people and receives 200 engagements. The engagement rate is", "5%", "20%", "2%", "50%", "200 ÷ 4000 × 100."],
        ["M", "Before posting a client's photograph online, the beautician must obtain the client's", "consent", "bank details", "home address", "password", "Clients have a right to privacy."],
        ["H", "Out of 80 enquiries received through a page, 20 became bookings. The conversion rate is", "25%", "4%", "60%", "20%", "20 ÷ 80 × 100. Answer: 25%."],
        ["H", "Making a business appear when people search online for services in its area involves", "search engine optimisation", "two-factor authentication", "watermarking", "phishing", "Good listings and keywords help the business to be found."],
        ["H", "Before delivering a service paid for by transfer, the business should confirm payment by", "checking its own bank account or app", "accepting a screenshot", "asking the client's friend", "waiting for a text from an unknown number", "Fake payment alerts are common."],
      ],
    },
    {
      week: 8,
      title: "Job Opportunities in the Beauty Industry",
      subtopics: ["Sectors of the beauty industry", "Specialist careers", "Employment and self-employment", "Training and certification"],
      objectives: ["Outline the sectors of the beauty industry", "Describe specialist careers and their duties", "Compare employment with self-employment", "Identify training and certification routes"],
      lesson: {
        title: "Careers in Beauty",
        summary: "The many jobs open to a trained cosmetologist and how to qualify for them.",
        minutes: 40,
        notes: `## The beauty industry
A large and growing industry covering **hair, skin, nails, makeup, spa and wellness, fragrance, cosmetic manufacturing and retail, education and media**.

## Specialist careers
| Career | Work |
|---|---|
| **cosmetologist** | trained in the care of **hair, skin and nails** — a general beauty professional |
| **makeup artist** | bridal, fashion, editorial, film, television, theatre, special effects |
| **hairstylist / hairdresser** | cutting, styling, braiding, weaving, relaxing, colouring; **wig maker**; **trichologist** (hair and scalp problems) |
| **barber** | men's cuts, shaving, beard grooming |
| **skincare consultant / aesthetician (esthetician)** | skin analysis, facials, advice on products and routines |
| **nail technician** | manicure, pedicure, acrylics, gels, nail art |
| **spa therapist / massage therapist** | massage and body treatments |
| **lash and brow technician** | extensions, lifts, tinting, threading, microblading |
| **beauty therapist** | facials, waxing, body treatments, electrical treatments |
| **cosmetic formulator / chemist** | develops and produces cosmetics |
| **beauty adviser / sales consultant** | counter sales; product demonstration |
| **salon or spa manager** | runs the business — staff, stock, finance, customer service |
| **beauty educator / trainer** | teaches in schools and academies |
| **beauty writer, blogger, content creator** | reviews, tutorials |
| **image consultant / personal stylist** | overall appearance |
| **product distributor / brand representative** | supply and marketing |
| **gele artist; henna artist** | Nigerian specialisms |

## Where they work
salons, barbershops and spas; hotels and resorts; bridal and events; **film (Nollywood), television, theatre, fashion and photography**; cosmetic companies; retail stores; cruise ships; hospitals (camouflage makeup, care of patients); schools; freelance and home service.

## Employment and self-employment
| | Employment | Self-employment / freelancing |
|---|---|---|
| **income** | regular salary; commission | varies; no fixed limit |
| **risk** | low | owner bears the risk |
| **capital** | none needed | tools, products, premises |
| **control** | follows employer's rules and hours | own decisions and hours |
| **learning** | supervision and experience | must seek own training |
| **benefits** | may have leave, insurance | none unless arranged |

Other arrangements: **chair / booth rental** — renting a station in another person's salon; **commission** — a percentage of what the worker brings in; **mobile service**.
*A stylist on 40% commission who brings in ₦300 000 in a month earns* $0.4 \\times 300\\,000 =$ **₦120 000**.

## Qualities employers seek
skill; hygiene; neat appearance; punctuality and reliability; good communication; honesty; teamwork; willingness to learn; sales ability; creativity; stamina.

## Training and certification
- **apprenticeship** in a salon or with an artist
- **beauty academies** and vocational centres
- **technical colleges**; **Trade Test** certificates; **National Skills Qualification (NSQ)**; **NABTEB** craft certificates
- polytechnic and university courses (cosmetic science, chemistry, business)
- **international qualifications** — CIDESCO, CIBTAC, ITEC, City & Guilds, VTCT
- short **masterclasses**; brand training; first-aid certificate
- **continuing professional development** — keeping up with trends and techniques

## Professional associations
bodies of hairdressers, cosmetologists and makeup artists that set standards, train and represent members.

## Growth areas
bridal beauty; natural-hair care; men's grooming; wigs; organic and locally made cosmetics; spa and wellness; lash and brow services; online tutorials and content; training.

## Challenges
competition; power supply; cost of quality products; counterfeit products; unstable income; long hours. Skill, service and good business practice overcome them.`,
        examples: `**Example 1.** Who is an aesthetician? *Answer:* A **skin-care specialist** who analyses skin and gives facials and advice.

**Example 2.** A nail technician on 35% commission brings in ₦200 000. How much does she earn? *Answer:* $0.35 \\times 200\\,000 = $ **₦70 000**.

**Example 3.** Give one advantage of self-employment. *Answer:* **Control over one's own work and unlimited earning potential**.`,
      },
      questions: [
        ["E", "A professional trained in the care of hair, skin and nails is a", "cosmetologist", "pharmacist", "dietitian", "radiographer", "It is the general beauty profession."],
        ["E", "A specialist in manicure, pedicure and nail enhancements is a", "nail technician", "trichologist", "barber", "masseur", "Nail art and gels are part of the work."],
        ["E", "A professional who cuts men's hair and shaves beards is a", "barber", "florist", "tailor", "cobbler", "Barbers work in barbershops."],
        ["M", "A skin-care specialist who gives facials and advises on routines is an", "aesthetician", "optician", "orthodontist", "auditor", "Also called a skincare consultant."],
        ["M", "A specialist in problems of the hair and scalp is a", "trichologist", "podiatrist", "cardiologist", "philatelist", "Trichology is the study of hair and scalp."],
        ["M", "Renting a work station in another person's salon is", "chair rental", "franchising", "wholesaling", "apprenticeship", "The stylist runs her own clients from the rented space."],
        ["M", "A stylist on 30% commission generates ₦400 000 of services in a month. Her commission is", "₦120 000", "₦30 000", "₦280 000", "₦130 000", "0.30 × 400 000."],
        ["H", "An advantage of paid employment over self-employment for a new beautician is", "regular income with lower risk", "unlimited profit", "full control of prices", "no supervision", "The employer bears the business risk."],
        ["H", "Regularly updating one's skills through courses and masterclasses is", "continuing professional development", "chair rental", "commission", "probation", "It keeps a professional current with trends."],
        ["H", "A makeup artist employed in a hospital setting is most likely to provide", "camouflage makeup for scars and skin conditions", "runway makeup", "stage ageing effects", "gele tying", "It helps patients to cope with changes in appearance."],
      ],
    },
    {
      week: 9,
      title: "Career Preparation: CV Writing, Interview Skills and Freelancing",
      subtopics: ["Writing a CV and application letter", "Interview skills", "Freelancing", "Professional image"],
      objectives: ["Write a curriculum vitae and application letter", "Prepare for and attend an interview", "Explain how to work as a freelancer", "Maintain a professional image"],
      lesson: {
        title: "Getting Work in Beauty",
        summary: "Presenting yourself on paper and in person, and working for yourself.",
        minutes: 40,
        notes: `## The curriculum vitae (CV)
A **CV (résumé)** is a **brief written summary of a person's details, education, skills and experience**, presented to an employer or client.

### Contents
1. **name and contact** — phone, e-mail, town; portfolio link
2. **personal profile / career objective** — two or three lines
3. **skills** — bridal makeup, braiding, gel nails, facials, client care, product knowledge
4. **work experience** — most recent first: employer, position, dates, duties and achievements
5. **education and training** — school, academy, certificates
6. **achievements** — competitions, events worked on
7. **interests** (brief)
8. **referees** — two people who can vouch for you, or "available on request"

### Rules
**one to two pages**; clear headings; neat, consistent layout; **truthful**; no spelling errors; tailor it to the job; use action words (styled, managed, trained); attach the **portfolio**.

## Application (cover) letter
A formal letter: your address and date; employer's address; salutation; **heading** (Application for the Post of Makeup Artist); first paragraph — the post and where it was advertised; second — your qualifications and experience; third — why you suit the job and availability for interview; polite close; signature and name.

## Interview skills
An **interview** is a **formal meeting in which an employer assesses a candidate**.
### Before
research the business; read the advertisement again; prepare answers and questions; update the portfolio; prepare your **kit** for a possible **trade test**; plan the route; arrive **10–15 minutes early**.
### Appearance
clean, neat, modest dress; well-groomed hair, nails and makeup — a beautician is her own advertisement.
### During
greet and smile; firm, polite manner; sit when invited; **eye contact**; listen; answer clearly and honestly; give examples of your work; switch off the phone; do not criticise former employers; ask sensible questions; thank the panel.
### Common questions
*Tell us about yourself. Why do you want this job? What are your strengths and weaknesses? How would you handle a dissatisfied client? What hygiene steps do you follow?*
### Trade test
a practical demonstration — work cleanly, safely and to time; explain what you are doing.
### After
send a message of thanks; follow up politely.

## Freelancing
A **freelancer** is a **self-employed person who offers services to different clients without a long-term employer**.
**Requirements:** professional **kit**; **portfolio**; business name and brand; **rate card** (price list); booking form and **contract**; transport; phone and online presence; records.
### Setting rates
$$\\text{rate} = \\text{products used} + \\text{time} + \\text{transport} + \\text{overheads} + \\text{profit}$$
Include a **call-out / travel fee**, early-morning charge and **deposit**.
### Managing the business
keep a **diary** of bookings; issue **invoices and receipts**; record income and expenses; save for slow seasons and tax; replace products; network with planners, photographers and stylists; ask for referrals and reviews.
**Advantages:** flexibility; variety; own prices. **Disadvantages:** irregular income; no paid leave; must find own clients; bears all costs.

*A freelancer charging ₦40 000 a bridal booking with costs of ₦12 000 makes ₦28 000 per job; six bookings in a month give ₦168 000.*

## Professional image
- **appearance** — clean uniform or neat dress; groomed
- **conduct** — punctual, polite, honest, discreet
- **communication** — prompt, courteous replies; proper language in messages
- **online presence** — a professional page; nothing that embarrasses the brand
- **ethics** — confidentiality; no poaching of an employer's clients; honest claims
- **networking** — associations, events, collaboration

## Goal setting
Set **SMART** goals — **specific, measurable, achievable, relevant, time-bound**: e.g. "complete an advanced bridal course and book ten brides by December".`,
        examples: `**Example 1.** What is a CV? *Answer:* A **brief written summary of a person's details, education, skills and experience**.

**Example 2.** Give three things to do during an interview. *Answer:* **Greet politely, maintain eye contact** and **answer honestly**.

**Example 3.** A freelancer does 8 jobs at ₦25 000 each with costs of ₦7 000 per job. Find the month's profit. *Answer:* $8 \\times 18\\,000 = $ **₦144 000**.`,
      },
      questions: [
        ["E", "A brief written summary of a person's education, skills and experience is a", "curriculum vitae", "contract", "receipt", "rate card", "It is presented to employers."],
        ["E", "A formal meeting in which an employer assesses a candidate is an", "interview", "invoice", "internship fee", "inventory", "Preparation and good appearance are important."],
        ["E", "A self-employed person who offers services to different clients is a", "freelancer", "trainee", "referee", "cashier", "There is no long-term employer."],
        ["M", "People named on a CV who can vouch for the applicant are", "referees", "clients", "competitors", "suppliers", "Employers may contact them."],
        ["M", "On a CV, work experience should be listed", "with the most recent first", "in alphabetical order", "oldest first always", "without dates", "Employers look first at current experience."],
        ["M", "A candidate should arrive for an interview", "ten to fifteen minutes early", "exactly on the minute", "half an hour late", "whenever convenient", "Punctuality shows reliability."],
        ["M", "A freelancer's published list of services and prices is a", "rate card", "face chart", "record card", "trade test", "It tells clients what each service costs."],
        ["H", "In the acronym SMART used for goals, the letter M stands for", "measurable", "modern", "marketable", "manual", "Progress towards the goal can be checked."],
        ["H", "A freelancer completes 10 bookings in a month at ₦30 000 each, with costs of ₦9 000 per booking. The month's profit is", "₦210 000", "₦300 000", "₦90 000", "₦390 000", "10 × (30 000 − 9 000)."],
        ["H", "A practical demonstration of skill required of a candidate during recruitment is a", "trade test", "patch test", "challenge test", "stability test", "It shows the employer what the candidate can actually do."],
      ],
    },
  ],
};

export const ss3t3: TermPlan = {
  classCode: "SS3",
  term: 3,
  topics: [
    {
      week: 1,
      title: "Practical Sessions: Makeup, Hair, Nail and Skin Care",
      subtopics: ["Skin care: the facial", "Makeup application", "Hair care and styling", "Manicure and pedicure"],
      objectives: ["Carry out a basic facial", "Apply day and evening makeup", "Carry out basic hair care and styling", "Carry out a manicure and pedicure"],
      lesson: {
        title: "The Core Practical Skills",
        summary: "Step-by-step procedures for the four practical areas of cosmetology.",
        minutes: 80,
        notes: `## General preparation for every service
prepare the work station; sanitise hands and tools; consult the client; check contra-indications; protect clothing; record the service.

## 1. Skin care — the basic facial
**Skin structure:** **epidermis** (outer, with melanin), **dermis** (collagen, elastin, glands, hair follicles), **subcutaneous layer** (fat). **Sebum** from the **sebaceous glands** lubricates the skin.
**Skin analysis:** type (normal, dry, oily, combination, sensitive) and conditions (acne, dehydration, pigmentation, ageing).

### Steps
1. **cleanse** — remove makeup and dirt
2. **analyse** the skin
3. **exfoliate** — scrub or enzyme
4. **steam** — softens and opens pores (about 5–10 minutes)
5. **extraction** of blackheads (if trained; hygienically)
6. **massage** — effleurage and petrissage; relaxes and improves circulation
7. **mask** — clay for oily skin; hydrating for dry skin (10–15 minutes)
8. **tone** — restores pH; refines
9. **moisturise** and apply **sunscreen**
**Daily routine to advise:** cleanse, tone, moisturise, sunscreen by day.

## 2. Makeup
- **day makeup** — light, natural: tinted base, neutral eyes, soft blush, lip tint
- **evening makeup** — stronger: fuller coverage, defined or smoky eyes, lashes, bolder lips, highlight
**Order:** skin prep → primer → brows → eyes → base → conceal → set → cheeks → lips → setting spray.
Match foundation along the **jawline**; blend into neck; balance — strong eyes **or** strong lips.

## 3. Hair
**Structure:** **cuticle** (outer scales), **cortex** (strength, colour), **medulla**; grows from the **follicle**; made of the protein **keratin**.

### Shampoo and conditioning
brush and detangle → wet with warm water → shampoo, massaging the scalp with **finger pads** → rinse → repeat → **conditioner** on lengths → rinse → towel dry.
**Treatments:** deep conditioning, hot oil, protein treatment, scalp treatment for dandruff.

### Styling
- **natural hair:** twists, cornrows, braids, threading, bantu knots, wash-and-go
- **heat styling:** blow-dry, press, tong — always with **heat protectant**
- **setting:** rollers, flexi-rods
- **chemical services:** relaxing (strand test; base the scalp; time carefully; **neutralise**), colouring (**patch test** 48 hours before)
- **extensions:** weaves, wigs, crochet, braids — avoid excessive tension (**traction alopecia**)

## 4. Nails
**Structure:** **nail plate**, **nail bed**, **cuticle**, **matrix** (where the nail grows), **lunula** (half-moon), **free edge**.

### Manicure
1. sanitise hands; remove old polish
2. **file** in one direction to shape (square, oval, almond, round)
3. **soak** fingertips in warm soapy water
4. apply cuticle remover; **push back cuticles** gently with an orange stick; nip only loose skin
5. **massage** hands with lotion
6. wipe the nail plate free of oil
7. **base coat → two coats of colour → top coat**
8. cuticle oil

### Pedicure
soak feet → cut nails **straight across** (prevents ingrown nails) → file → cuticles → remove hard skin with **foot file or pumice** → scrub → massage → polish (toe separators).

### Enhancements
gel polish (cured under UV/LED lamp), acrylics, tips, nail art.

**Nail disorders:** do not work on **fungal infection, paronychia** (infected nail fold) or warts — refer.

## Finishing every service
show the result in the mirror; **aftercare advice**; recommend products; rebook; clean and disinfect the station.`,
        examples: `**Example 1.** Give the order of polish application in a manicure. *Answer:* **Base coat, two coats of colour, top coat**.

**Example 2.** Why are toenails cut straight across? *Answer:* To **prevent ingrown nails**.

**Example 3.** Which protein makes up hair and nails? *Answer:* **Keratin**.`,
      },
      questions: [
        ["E", "The outermost layer of the skin is the", "epidermis", "dermis", "subcutaneous layer", "matrix", "It contains the pigment melanin."],
        ["E", "The protein of which hair and nails are made is", "keratin", "casein", "collagen only", "insulin", "It is a tough fibrous protein."],
        ["E", "The cosmetic care of the hands and fingernails is a", "manicure", "pedicure", "facial", "massage", "A pedicure is for the feet."],
        ["M", "In a facial, steaming is done in order to", "soften the skin and open the pores", "dry the skin", "remove hair", "set the makeup", "It prepares the skin for extraction and masks."],
        ["M", "The part of the nail from which growth takes place is the", "matrix", "free edge", "nail plate", "lunula surface", "Damage to it can deform the nail."],
        ["M", "The first coat applied to the nail before coloured polish is the", "base coat", "top coat", "cuticle oil", "remover", "It protects the nail and helps the polish adhere."],
        ["M", "The outer scaly layer of the hair shaft is the", "cuticle", "cortex", "medulla", "follicle", "It protects the inner layers."],
        ["H", "Hair loss caused by styles that pull too tightly on the hair is", "traction alopecia", "dandruff", "ringworm", "split ends", "Tight braids and weaves cause it along the hairline."],
        ["H", "A clay mask is most suitable for skin that is", "oily", "very dry", "dehydrated", "mature and thin", "Clay absorbs excess sebum."],
        ["H", "A manicure should not be carried out on a client who has", "an infected nail fold", "short nails", "dry cuticles", "ridged nails", "Paronychia is a contra-indication; the client should be referred."],
      ],
    },
    {
      week: 2,
      title: "Field Work and Report Writing",
      subtopics: ["Purpose of field visits", "Planning and conducting a visit", "Observation and data collection", "Writing the report"],
      objectives: ["State the purpose of field visits in beauty education", "Plan and conduct a visit to a salon, spa or cosmetic factory", "Record observations systematically", "Write a field or project report in the proper format"],
      lesson: {
        title: "Learning from the Industry",
        summary: "Visiting beauty establishments and documenting what is learnt.",
        minutes: 80,
        notes: `## Field work
**Field work** is **learning carried out outside the classroom, at real workplaces**: beauty salons, barbershops, spas, makeup studios, cosmetic factories, beauty-supply stores, film sets and training academies.

## Purposes
link theory with practice; see **professional standards**, equipment and organisation; observe **hygiene and safety** in practice; learn about **careers** and business operations; gather information for projects; build contacts for internships.

## Planning a visit
1. choose the place and **objective**
2. obtain **permission** — from the school and the establishment
3. fix date, time, transport and cost
4. prepare an **observation checklist** and **interview questions**
5. assign groups and roles
6. brief on **conduct and dress**
7. take notebook, pen, camera (with permission)

## Conduct during the visit
punctual; neat; polite; listen to the guide; do not touch equipment or products without permission; do not disturb clients; **ask before photographing**; respect clients' privacy; thank the hosts.

## What to observe
| Area | Points |
|---|---|
| **premises** | location, layout, reception, work stations, ventilation, lighting, décor |
| **services and prices** | menu of services; most popular |
| **equipment and products** | types, brands, storage |
| **hygiene and safety** | sterilisation, towels, waste, first-aid box, fire extinguisher |
| **staff** | number, roles, uniform, qualifications |
| **client care** | reception, consultation, record cards, aftercare |
| **business** | booking system, marketing, record keeping, challenges |
| **production (factory)** | raw materials, process flow, quality control, packaging, labelling |

## Methods of collecting data
**observation**; **interview** (owner, manager, staff); **questionnaire**; photographs; brochures and price lists; counting (e.g. clients served in an hour).

## The report
A **report** is a **formal written account of what was done, observed and learnt**.
| Section | Content |
|---|---|
| **title page** | title, name, class, school, date |
| **introduction** | place visited, date, purpose |
| **methodology** | how information was collected |
| **findings / observations** | under headings; tables, photographs, diagrams |
| **discussion** | what the findings mean; comparison with classroom learning |
| **challenges** | problems met |
| **conclusion** | summary of what was learnt |
| **recommendations** | suggestions |
| **acknowledgement; references; appendix** | thanks; sources; checklist, questionnaire |

### Rules of good report writing
clear, simple, formal language; **past tense**; factual and accurate; logical order with headings and numbering; neat presentation; labelled illustrations; proof-read.

## Presenting data
- **tables** for prices, services, counts
- **bar charts** and **pie charts** for comparisons and shares
- **percentages** and **averages**
*A salon served 12, 15, 9, 14 and 10 clients on five days: average* $= \\dfrac{60}{5} = 12$ *clients a day.*

## The project report (mini-business)
introduction and objectives → business description → start-up items and costs → daily **records of services, income and expenses** → profit or loss → customers' feedback → challenges and solutions → lessons learnt → conclusion.

## Evaluating an establishment
Use a checklist with a rating (e.g. 1–5) for hygiene, client care, skill, organisation and safety; give reasons.

## Follow-up
thank-you letter to the hosts; class discussion; apply lessons in practical work.`,
        examples: `**Example 1.** What is field work? *Answer:* **Learning carried out at real workplaces** outside the classroom.

**Example 2.** In which tense is a report written? *Answer:* Mainly the **past tense**.

**Example 3.** A spa had 8, 10, 6 and 12 clients on four days. Find the average. *Answer:* $36 \\div 4 = \\mathbf{9}$ clients a day.`,
      },
      questions: [
        ["E", "Learning carried out at real workplaces outside the classroom is", "field work", "homework", "revision", "theory", "It links classroom learning with practice."],
        ["E", "A formal written account of what was done and observed is a", "report", "receipt", "rate card", "recipe", "It follows a set structure."],
        ["E", "Before visiting a salon for field work, students must first obtain", "permission", "payment", "products", "a discount", "Both the school and the establishment must agree."],
        ["M", "A list of points to look for during a visit is an", "observation checklist", "invoice", "appointment book", "inventory of stock", "It makes observation systematic."],
        ["M", "The section of a report that suggests improvements is the", "recommendations", "introduction", "methodology", "title page", "It follows the conclusion."],
        ["M", "Asking the salon manager questions face to face is the data-collection method of", "interview", "observation", "experiment", "sampling", "Answers are recorded for the report."],
        ["M", "A salon served 20, 16, 24 and 20 clients on four days. The average number per day is", "20", "80", "16", "24", "80 ÷ 4. Answer: 20."],
        ["H", "The section of a report that explains how the information was gathered is the", "methodology", "discussion", "conclusion", "acknowledgement", "It names the methods used."],
        ["H", "The share of each service in a salon's total income is best displayed in a", "pie chart", "paragraph", "title page", "list of references", "A pie chart shows parts of a whole."],
        ["H", "During a field visit, photographing clients without asking is wrong because it", "violates their privacy", "wastes film", "slows the visit", "damages equipment", "Consent is required before taking pictures."],
      ],
    },
    {
      week: 3,
      title: "Independent Project: Running a Supervised Beauty Mini-Business",
      subtopics: ["Planning the mini-business", "Operating and record keeping", "Calculating profit", "Evaluating the project"],
      objectives: ["Plan a small supervised beauty business", "Keep simple business records", "Calculate income, expenses and profit", "Evaluate the project and document the experience"],
      lesson: {
        title: "A Beauty Business in Miniature",
        summary: "Running a small beauty service or product business under supervision and learning from it.",
        minutes: 80,
        notes: `## The project
Individually or in groups, students **run a small beauty business for a set period under the teacher's supervision** — e.g. a nail-care stand, braiding service, makeup for a school event, or the production and sale of lip balm or body butter.

## Planning
1. **choose the service or product** — within your skill and budget
2. **target customers** — fellow students, staff, parents
3. **survey demand** and competitors' prices
4. **list requirements** and cost them
5. **fix prices**
6. **raise start-up funds** — contributions, loan from the school, pre-orders
7. **share roles** — manager, service providers, cashier, record keeper, marketer
8. **draw a timetable**
9. **obtain permission** and arrange a clean, safe space
10. **promote** — posters, announcements, class groups

## Operating
- observe **hygiene and safety** on every client
- consult; check contra-indications; patch test where needed
- serve in order of booking; keep to time
- polite **client care**; aftercare advice
- collect payment and issue a **receipt**
- **record every transaction**
- control stock — note what is used

## Records
| Record | Shows |
|---|---|
| **cash book** | money received and paid, by date |
| **sales / service record** | client, service, amount |
| **expenses record** | items bought and cost |
| **stock record** | products received, used, remaining |
| **appointment book** | bookings |
| **client record cards** | details, service, reactions |
| **receipts and invoices** | evidence |

### A simple cash book
| Date | Details | Money in (₦) | Money out (₦) | Balance (₦) |
|---|---|---|---|---|
| 3 June | start-up contribution | 20 000 | | 20 000 |
| 3 June | polish, files, remover | | 12 000 | 8 000 |
| 5 June | 10 manicures at ₦1 500 | 15 000 | | 23 000 |
| 6 June | cotton, sanitiser | | 2 000 | 21 000 |

## Profit
$$\\text{profit} = \\text{total income} - \\text{total expenses}$$
In the example: income from services ₦15 000; expenses ₦14 000; **profit ₦1 000** after the first week (stock remains for more services).
**Profit margin** $= \\dfrac{\\text{profit}}{\\text{income}} \\times 100$.
*Over the project: income ₦60 000; expenses ₦36 000; profit ₦24 000; margin 40%.*

**Cost per service** = materials used per client + share of other costs; the price must exceed it.

## Customer feedback
short form or verbal: *Were you satisfied? What could be better? Would you return or recommend us?* Count the responses.

## Problems commonly met
few customers; lateness; running out of products; pricing too low; poor records; disagreements in the group. **Solutions:** promotion; appointment system; stock check; proper costing; assigned record keeper; clear roles.

## Evaluation
- Were the **objectives** met?
- **Financial result** — profit or loss; why?
- **Customer satisfaction**
- **Skills** gained — technical, communication, teamwork, money management
- What would be **done differently**?

## Documenting the experience
Write the **project report**: introduction; business description; planning; operation; records and financial summary; feedback; challenges; lessons; conclusion; photographs (with consent).

## From project to real business
register the name; improve skills; build a portfolio and brand; reinvest profits; keep records; obey health and safety rules.`,
        examples: `**Example 1.** Total income is ₦45 000 and total expenses ₦30 000. Find the profit. *Answer:* **₦15 000**.

**Example 2.** What does a cash book record? *Answer:* **All money received and paid out**, with dates and balances.

**Example 3.** Income ₦80 000; profit ₦20 000. Find the profit margin. *Answer:* $\\tfrac{20\\,000}{80\\,000} \\times 100 = \\mathbf{25\\%}$.`,
      },
      questions: [
        ["E", "Total income minus total expenses gives the", "profit", "stock", "capital", "price", "A negative result is a loss."],
        ["E", "The record of all money received and paid out is the", "cash book", "appointment book", "face chart", "portfolio", "It shows the balance in hand."],
        ["E", "A document given to a customer as evidence of payment is a", "receipt", "questionnaire", "checklist", "rate card", "It records the amount paid."],
        ["M", "A mini-business earns ₦50 000 and spends ₦32 000. Its profit is", "₦18 000", "₦82 000", "₦32 000", "₦8 000", "50 000 − 32 000."],
        ["M", "The record that shows products received, used and remaining is the", "stock record", "client card", "cash book", "feedback form", "It prevents running out of materials."],
        ["M", "A group provides 15 braiding services at ₦2 000 each. The income is", "₦30 000", "₦17 000", "₦3 000", "₦15 000", "15 × 2 000. Answer: ₦30 000."],
        ["M", "Asking customers whether they were satisfied provides", "feedback", "capital", "stock", "a deposit", "It guides improvement."],
        ["H", "A project has income of ₦75 000 and a profit of ₦30 000. The profit margin is", "40%", "25%", "60%", "250%", "30 000 ÷ 75 000 × 100."],
        ["H", "A manicure uses materials worth ₦400 and bears ₦300 of other costs. To make a profit of ₦500, the price should be", "₦1 200", "₦700", "₦900", "₦500", "400 + 300 + 500."],
        ["H", "A mini-business that made many sales but ended with a loss most likely", "priced its services below their cost", "kept good records", "had satisfied customers", "promoted itself well", "Each sale then loses money."],
      ],
    },
    {
      week: 8,
      title: "Final Revision: Cosmetology Syllabus and Examination Technique",
      subtopics: ["Science of skin, hair and nails", "Services and procedures", "Business, safety and ethics", "Examination technique"],
      objectives: ["Recall the science underlying cosmetology", "Recall the main services and procedures", "Recall business, safety and ethical principles", "Apply good technique in theory and practical examinations"],
      lesson: {
        title: "The Whole Course in Review",
        summary: "A final summary of the cosmetology syllabus with advice for the examination.",
        minutes: 80,
        notes: `## 1. Science
### Skin
**Functions:** protection, sensation, **heat regulation** (sweating), excretion, secretion (sebum), absorption, **vitamin D** production.
**Layers:** epidermis, dermis, subcutaneous tissue. **Melanin** gives colour and protects against ultraviolet rays. **Glands:** sebaceous (oil), **sudoriferous** (sweat).
**Disorders:** acne, eczema, dermatitis, hyperpigmentation, ringworm, warts — recognise and refer.
### Hair
keratin; cuticle, cortex, medulla; growth cycle — **anagen** (growing), **catagen** (transition), **telogen** (resting). Disorders: dandruff, alopecia, head lice, breakage.
### Nails
plate, bed, matrix, cuticle, lunula, free edge. Disorders: fungal infection, brittle nails, ingrown nails.
### Chemistry
pH; acids and alkalis; emulsions (oil-in-water, water-in-oil); surfactants; preservatives; fragrance; patch testing.

## 2. Services
| Area | Key points |
|---|---|
| **skin care** | cleanse, exfoliate, steam, massage, mask, tone, moisturise, sunscreen |
| **makeup** | skin prep; colour theory; face shapes; day, evening, bridal, editorial; hygiene |
| **hair** | shampoo, conditioning, styling, braiding, weaving, relaxing, colouring, wigs |
| **nails** | manicure, pedicure, polish, gels, acrylics |
| **hair removal** | shaving, tweezing, **threading**, **waxing**, depilatory creams |
| **spa** | massage, scrubs, wraps, hydrotherapy, aromatherapy |

## 3. Tools and equipment
brushes, sponges; combs, clippers, dryers, tongs, steamers; files, buffers, nippers, UV/LED lamp; facial steamer; wax heater; steriliser — their **use, care and sterilisation**.

## 4. Health, safety and ethics
hygiene; cleaning, disinfection, sterilisation; contra-indications; consultation and record cards; first aid; hazards; regulations (NAFDAC, CAC, environmental health); confidentiality; honesty; client consent.

## 5. Business
market survey; business plan; costing and pricing; record keeping; client care; marketing and digital branding; careers; CV and interviews; freelancing.

## 6. Society
cultural beauty practices; diversity and inclusion; dangers of skin bleaching; media and body image.

## Examination technique
### Theory
- read the whole paper; choose questions; plan time by marks
- **define** precisely; **list** in points; **explain** with reasons; give **procedures step by step in order**
- draw and label diagrams — **skin, hair shaft, nail**
- show working in costing questions
### Objective
read all options; eliminate; watch NOT and EXCEPT; answer everything.
### Practical
- arrive with a **complete, clean kit** and a model if required
- **set up** the station neatly; sanitise hands and tools **where the examiner can see**
- carry out **consultation** and protect the client
- follow the correct **sequence**; work to **time**
- observe **safety** throughout
- finish neatly; give aftercare advice; **clear and clean** the station
**Marks are awarded for:** preparation, hygiene, technique, sequence, finish, client care, time management and tidiness.

## Quick self-test
1. State the pH of the skin. 2. List the steps of a facial. 3. Name the parts of the nail. 4. Distinguish disinfection from sterilisation. 5. Give four contra-indications to massage. 6. State the order of makeup application. 7. List the contents of a business plan. 8. Calculate the price of a service given its costs and mark-up.

## Final advice
practise each procedure until it is automatic; revise from diagrams and procedure lists; rest well; present yourself as a professional.`,
        examples: `**Example 1.** Name the three stages of the hair growth cycle. *Answer:* **Anagen, catagen, telogen**.

**Example 2.** State four functions of the skin. *Answer:* **Protection, sensation, heat regulation** and **secretion**.

**Example 3.** What should a candidate do at the end of a practical task? *Answer:* **Give aftercare advice and clean the work station**.`,
      },
      questions: [
        ["E", "The pigment that gives the skin its colour is", "melanin", "keratin", "sebum", "collagen", "It also protects against ultraviolet rays."],
        ["E", "The glands that produce sweat are the", "sudoriferous glands", "sebaceous glands", "salivary glands", "thyroid glands", "Sweating helps to regulate body temperature."],
        ["E", "Removing hair with a twisted cotton thread is", "threading", "waxing", "shaving", "tweezing", "It is common for shaping eyebrows."],
        ["M", "The growing stage of the hair cycle is the", "anagen stage", "catagen stage", "telogen stage", "exogen stage", "Hair is actively produced by the follicle."],
        ["M", "The vitamin produced in the skin on exposure to sunlight is", "vitamin D", "vitamin C", "vitamin K", "vitamin B₁₂", "It is needed for healthy bones."],
        ["M", "In a practical examination, sanitising hands and tools earns marks under", "hygiene", "finish", "creativity", "speed", "Examiners look for visible safe practice."],
        ["M", "The oily substance secreted by the sebaceous glands is", "sebum", "sweat", "lymph", "melanin", "It lubricates the skin and hair."],
        ["H", "An emulsion in which tiny oil droplets are dispersed in water is described as", "oil-in-water", "water-in-oil", "anhydrous", "a suspension of powder", "Most light lotions are of this type."],
        ["H", "The resting stage of the hair growth cycle, after which the hair is shed, is", "telogen", "anagen", "catagen", "keratinisation", "A new hair then begins to grow."],
        ["H", "In describing a procedure in the theory paper, the candidate gains most marks by", "giving the steps in the correct order", "writing one long paragraph", "listing only the tools", "describing the result only", "Sequence is part of the correct method."],
      ],
    },
  ],
};
