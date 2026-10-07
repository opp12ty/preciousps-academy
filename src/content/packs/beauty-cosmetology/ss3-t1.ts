import type { TermPlan } from "../types";

/** SS3 Beauty and Cosmetology, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 2,
      title: "Professional Makeup Artistry I: Portfolio and Signature Style",
      subtopics: ["The professional makeup artist", "The makeup kit and hygiene", "Building a portfolio", "Developing a signature style"],
      objectives: ["Describe the work and qualities of a professional makeup artist", "Assemble and maintain a professional kit", "Build a makeup portfolio", "Develop a recognisable signature style"],
      lesson: {
        title: "Becoming a Professional Makeup Artist",
        summary: "The kit, the body of work and the personal style that mark out a professional.",
        minutes: 40,
        notes: `## The professional makeup artist
A **makeup artist (MUA)** **applies cosmetics to enhance or change a person's appearance** for everyday wear, special occasions, photography, film, stage and fashion.
**Qualities:** creativity; good colour sense; steady hand; **hygiene**; patience and courtesy; punctuality; ability to listen; knowledge of skin types and tones; stamina; discretion.

## Skin knowledge
- **skin types:** normal, **dry**, **oily**, **combination**, sensitive
- **skin tone** (depth: fair to deep) and **undertone** (**warm** — yellow/golden; **cool** — pink/blue; **neutral**)
- **face shapes:** oval, round, square, heart, oblong, diamond — corrected by **contouring** (darker shade to recede) and **highlighting** (lighter shade to bring forward)

## The makeup kit
| Group | Items |
|---|---|
| **skin preparation** | cleanser, toner, moisturiser, **primer** |
| **base** | **foundation** (liquid, cream, powder, stick), **concealer**, colour corrector, setting powder, setting spray |
| **cheeks and sculpting** | blush, bronzer, contour, highlighter |
| **eyes** | brow pencil/pomade, eyeshadow palettes, eyeliner, mascara, false lashes and glue |
| **lips** | lip liner, lipstick, gloss, balm |
| **tools** | brushes (foundation, powder, blending, angled, lip), sponges, lash curler, tweezers, spatula and mixing palette, sharpener |
| **hygiene** | brush cleaner, **70% alcohol**, disposable wands and applicators, tissues, cotton pads, wipes, cape, hand sanitiser |
| **others** | mirror, ring light, chair, kit bag |

## Hygiene in makeup
wash and sanitise hands; **clean brushes** between clients; **never double-dip** — scrape product onto a palette with a spatula; use **disposable mascara wands and lip applicators**; sharpen pencils before each use; do not work on a client with a contagious eye or skin condition (e.g. **conjunctivitis, cold sores**); **patch test** lash glue for allergy; check expiry dates; keep the kit closed and clean.

## Order of application
cleanse and moisturise → primer → brows → eyes → foundation → concealer → powder → contour, bronzer, blush, highlight → lashes → lips → setting spray.

## The portfolio
A **portfolio** is a **collection of an artist's best work, shown to clients and employers**.
### Contents
- **high-quality photographs** — clean, well lit, minimal editing
- **before-and-after** pictures
- **range** — natural/day, evening glam, bridal, editorial, creative, mature skin, **different skin tones**
- close-ups (eyes, lips) and full looks
- short biography; training and certificates; services and contact
- client testimonials; credits (photographer, model)

### Building it
practise on friends and models; collaborate with photographers and stylists on **"time for print" (TFP)** shoots; assist established artists; select only the **best 15–25 images**; update regularly; keep both a **printed book** and an **online** version (website, social-media page).

## Signature style
A **signature style** is the **distinctive look by which an artist's work is recognised** — e.g. flawless "skin-like" complexion, bold cut-crease eyes, soft glam, vivid colour.
**Developing it:** master the basics; study artists and trends; experiment; notice what you do best and what clients request; be **consistent** in finish and presentation; build a **brand** (name, logo, style of photographs).
A professional still adapts to the **client's wishes and features**.

## Professional conduct
consultation before work; written **booking terms** (deposit, timing, travel fee); punctuality; clean appearance; respect for privacy; permission before posting clients' pictures.`,
        examples: `**Example 1.** What is a portfolio? *Answer:* A **collection of an artist's best work** shown to clients and employers.

**Example 2.** Why must a makeup artist never double-dip? *Answer:* It **transfers germs** from the client into the product, contaminating it for others.

**Example 3.** Distinguish contouring from highlighting. *Answer:* **Contouring** uses a darker shade to make an area recede; **highlighting** uses a lighter shade to bring it forward.`,
      },
      questions: [
        ["E", "A person who applies cosmetics professionally to enhance appearance is a", "makeup artist", "manicurist", "barber", "masseur", "Often abbreviated MUA."],
        ["E", "A collection of a makeup artist's best work is a", "portfolio", "palette", "primer", "patch test", "It is shown to clients and employers."],
        ["E", "The product applied to even out the skin tone of the face is", "foundation", "mascara", "eyeliner", "lip gloss", "It forms the base of the makeup."],
        ["M", "A product applied before foundation to smooth the skin and help makeup last is", "primer", "bronzer", "setting spray", "blush", "It prepares the surface of the skin."],
        ["M", "Using a darker shade to make an area of the face appear to recede is", "contouring", "highlighting", "priming", "baking", "It sculpts the features."],
        ["M", "To keep products free of germs, the artist should take cream products from the container with a", "clean spatula", "finger", "used sponge", "client's brush", "The product is placed on a palette."],
        ["M", "Skin with a golden or yellow cast is said to have a", "warm undertone", "cool undertone", "dry type", "sensitive type", "Cool undertones are pink or bluish."],
        ["H", "The distinctive look by which an artist's work is recognised is the artist's", "signature style", "price list", "skin type", "booking form", "It forms part of the artist's brand."],
        ["H", "A makeup artist should decline to apply eye makeup to a client who has", "conjunctivitis", "long lashes", "dry skin", "a round face", "The infection is contagious."],
        ["H", "A portfolio best demonstrates versatility when it shows", "a range of looks on different skin tones", "one look repeated many times", "only heavily edited images", "only the artist's own face", "Clients want evidence that the artist can serve them."],
      ],
    },
    {
      week: 3,
      title: "Professional Makeup Artistry II: High Fashion, Photography and Editorial Makeup",
      subtopics: ["High-fashion and runway makeup", "Makeup for photography", "Editorial makeup", "Film, stage and special effects"],
      objectives: ["Describe high-fashion and runway makeup", "Explain how makeup is adapted for photography", "Describe editorial makeup", "Outline makeup for film, stage and special effects"],
      lesson: {
        title: "Makeup for the Camera and the Runway",
        summary: "How lighting, distance and creative concept change the way makeup is applied.",
        minutes: 40,
        notes: `## Categories of professional makeup
| Category | Purpose and features |
|---|---|
| **beauty / commercial** | clean, flattering, natural-looking — advertisements, catalogues |
| **bridal** | long-lasting, camera-ready, enhancing |
| **high fashion / runway** | follows the **designer's concept**; often bold, artistic or minimal; must read from a distance and be done **fast** backstage |
| **editorial** | for **magazines and campaigns**; tells a story or sets a trend; creative and precise for close-up |
| **avant-garde / creative** | experimental — unusual colours, textures, embellishments |
| **film and television** | natural for **high-definition** cameras; **continuity** between scenes |
| **stage / theatre** | exaggerated features to carry to the back of the hall under strong lights |
| **special effects (SFX)** | wounds, ageing, creatures — latex, wax, prosthetics, fake blood |

## High-fashion and runway makeup
- the artist works to a **brief** from the designer or **key artist**; all models get a consistent look
- **face chart** — a diagram recording the products and placement for the look
- speed and teamwork; touch-ups at the line-up
- complements the garments without overpowering them
- trends are often set here: glossy lids, graphic liner, bare skin, bold lips

## Makeup for photography
### Effect of lighting
- **flash and studio lights** can **wash out** colour — apply slightly stronger blush, contour and lip colour
- **flashback** — a white cast in flash photographs caused by powders containing **silica** or products with high **SPF** (zinc oxide, titanium dioxide); avoid them for flash work
- **shine** shows strongly — control with blotting paper and matte powder on the T-zone
- **natural light** reveals everything — blend thoroughly
- **black-and-white** photography depends on **tone and contrast**, not colour

### Skin and base
excellent skin preparation; thin, well-blended layers; match foundation to **face, neck and chest**; conceal precisely; set lightly.

### High definition (HD)
HD cameras show texture and heavy product — use finely milled **HD foundations and powders**, sparing application and careful blending; no visible lines of demarcation.

### Working on set
understand the **concept, lighting and wardrobe**; check the look on the **monitor**; stay for touch-ups; work with the **photographer, stylist, hairstylist and creative director**.

## Editorial makeup
- begins with a **concept / mood board**
- may be **beauty editorial** (close-up on skin, eyes or lips) or **fashion editorial**
- precision: sharp lines, perfect symmetry, clean edges
- creative elements — colour blocking, gloss, glitter, gems, graphic shapes
- credits in publication build the artist's reputation

## Stage makeup
strong lights flatten the face — define **brows, eyes, cheek hollows and lips** more heavily; use long-wearing, sweat-resistant products.

## Special effects — basics
**bruises** (layered red, purple, green, yellow), **cuts** (scar wax, fake blood), **ageing** (highlight and shadow, stipple), bald caps, prosthetic pieces fixed with adhesive and removed with proper remover.

## Colour theory for makeup
- **primary:** red, yellow, blue; **complementary** colours lie opposite on the wheel and **cancel** each other
- **colour correction:** **green** neutralises redness; **peach / orange** corrects blue-brown dark circles on deeper skin; **lavender** corrects sallowness (yellow)
- warm and cool harmonies; monochromatic looks

## Longevity
primer; thin layers; setting powder and spray; waterproof products; blotting, not rubbing.

## Removal and aftercare
remove with cleansing oil, balm or micellar water; cleanse; moisturise.`,
        examples: `**Example 1.** What is flashback? *Answer:* A **white cast on the face in flash photographs**, caused by silica powders or high-SPF products.

**Example 2.** Which corrector neutralises redness? *Answer:* **Green**.

**Example 3.** Why is stage makeup applied more heavily? *Answer:* **Strong lights and distance flatten the face**, so features must be exaggerated to be seen.`,
      },
      questions: [
        ["E", "Makeup created for magazines and advertising campaigns is", "editorial makeup", "stage makeup", "corrective surgery", "camouflage tattooing", "It tells a story or sets a trend."],
        ["E", "Makeup designed to be seen from a distance under strong theatre lights is", "stage makeup", "bridal makeup", "day makeup", "no-makeup makeup", "Features are exaggerated."],
        ["E", "Creating wounds, scars and ageing with makeup is known as", "special effects", "contouring", "priming", "threading", "Latex, wax and fake blood are used."],
        ["M", "A diagram recording the products and placement for a makeup look is a", "face chart", "mood board", "price list", "consent form", "It lets a team reproduce the same look."],
        ["M", "A white cast on the face in flash photographs is called", "flashback", "fallout", "creasing", "oxidising", "It is caused by silica or high-SPF products."],
        ["M", "The colour corrector used to neutralise redness is", "green", "red", "white", "brown", "Green lies opposite red on the colour wheel."],
        ["M", "In black-and-white photography, makeup depends mainly on", "tone and contrast", "bright colour", "glitter", "scent", "Colours are recorded only as shades of grey."],
        ["H", "High-definition cameras require makeup that is", "finely milled and thinly applied", "thick and heavily powdered", "greasy and unblended", "always glittery", "HD reveals texture and excess product."],
        ["H", "On a film set, keeping an actor's makeup identical from scene to scene is called", "continuity", "contouring", "strobing", "baking", "Scenes are often shot out of order."],
        ["H", "Dark circles with a blue-brown cast on deep skin tones are best corrected with", "peach or orange corrector", "green corrector", "white powder", "lavender corrector", "Orange tones cancel blue."],
      ],
    },
    {
      week: 4,
      title: "Bridal and Event Management in Beauty",
      subtopics: ["Bridal consultation and trial", "Coordinating the bridal look", "Planning the wedding day", "Event styling and team management"],
      objectives: ["Conduct a bridal consultation and trial", "Coordinate makeup, hair, gele and accessories into one look", "Draw up a wedding-day beauty timeline", "Manage a beauty team at an event"],
      lesson: {
        title: "Beauty Services for Weddings and Events",
        summary: "Planning and delivering beauty services for brides and other event clients.",
        minutes: 40,
        notes: `## Bridal beauty
Weddings are the largest market for beauty professionals in Nigeria — **traditional, white (church), nikkah and reception** events, often with several changes of look in a day.

## Consultation
A **consultation** is a **discussion with the client before the service** to learn her wishes and plan the work.
Find out: **date, time and venue**; number of events and looks; **outfits, colours and theme**; hairstyle, **gele**, veil and accessories; skin type, allergies and sensitivities; preferred style (natural, soft glam, bold); number of other people to be attended to (bridesmaids, mothers); photography schedule; budget.
Record on a **consultation / booking form**.

## The trial
A **trial** is a **practice session before the day** to test and agree the look.
- done some weeks ahead; with a picture of the dress and references
- test products for **reaction** and for **wear** over several hours and in photographs
- agree and record the final look on a **face chart** with photographs
- trials are charged separately

## Skin preparation plan
advise the bride to begin **skin care weeks ahead** — cleansing, exfoliation, hydration, facials (not within the last few days), enough water and sleep; brow shaping a few days before; no new products close to the day.

## Coordinating the bridal look
- makeup must harmonise with the **outfit colours, skin tone, hairstyle, headgear and jewellery**
- **traditional looks:** richer colours and bolder lips often suit aso-oke, gele and coral beads; **white wedding:** softer, classic; **nikkah:** elegant and modest with hijab styling
- **longevity:** primer, long-wear and **waterproof** products (tears and heat), setting spray; touch-up kit for the bride (powder, lipstick, blotting paper)
- **gele tying**, veil and tiara placement; hair styled before final lip
- work with the **hairstylist, gele artist, dress stylist and photographer**

## The wedding-day timeline
Work **backwards** from the time the bride must be ready.
| Time | Activity |
|---|---|
| 5:30 | team arrives; set up station |
| 6:00–7:15 | bride: skin prep and makeup |
| 7:15–8:00 | hair, gele or veil |
| 6:30–8:30 | bridesmaids and mothers (assistants) |
| 8:30 | dressing; final touch-ups |
| 9:00 | photographs |
| 10:00 | ceremony |
Allow about **60–90 minutes for the bride** and **30–45 minutes for each other person**, plus a **buffer** for delays.
*Six bridesmaids at 40 minutes each with two artists take* $6 \\times 40 \\div 2 = 120$ *minutes.*

## Bookings and contracts
written **agreement**: services, number of people, date, times, location, **fees, deposit** (non-refundable to hold the date), travel and accommodation, early-morning or change-of-look charges, cancellation terms. Issue receipts.

## Event styling
Beauty services for **photo shoots, pageants, fashion shows, birthdays, corporate events, film sets**:
- understand the **brief**
- prepare a **kit list** and back-ups (lighting, extension cable, chair)
- arrange **transport** and arrive early
- set up a clean, well-lit station
- remain for **touch-ups** if booked

## Team management
assign roles — lead artist, assistants, hairstylist, gele artist; brief the team; uniform or neat dress; keep to time; communicate with the **event planner**; resolve problems calmly; debrief afterwards.

## Common problems and solutions
late start (build in buffer); allergic reaction (patch test, hypoallergenic products); heat and sweat (primer, powder, fan); power failure (rechargeable light); change of mind (trial and signed face chart).`,
        examples: `**Example 1.** What is a bridal trial? *Answer:* A **practice session before the wedding** to test and agree the look.

**Example 2.** Why are waterproof products chosen for brides? *Answer:* The makeup must **withstand tears, heat and a long day**.

**Example 3.** Four bridesmaids need 45 minutes each and one artist is available. How long is needed? *Answer:* $4 \\times 45 = 180$ minutes — **3 hours**.`,
      },
      questions: [
        ["E", "A discussion with the client before a service to learn her wishes is a", "consultation", "contour", "commission", "cancellation", "It guides the planning of the service."],
        ["E", "A practice session held before the wedding to agree the bridal look is a", "trial", "rehearsal dinner", "fitting only", "facial", "Products are tested for wear and reaction."],
        ["E", "The traditional head-tie styled for Nigerian brides and guests is the", "gele", "veil", "tiara", "fascinator", "Gele tying is a specialist skill."],
        ["M", "Money paid in advance to hold the artist for a date is a", "deposit", "tip", "discount", "refund", "It is usually non-refundable."],
        ["M", "The beauty timeline for a wedding day is best planned by", "working backwards from the time the bride must be ready", "starting when the team wakes", "following the reception programme", "guessing on the day", "This ensures every task fits before the deadline."],
        ["M", "A bride should be given a touch-up kit containing", "powder, lipstick and blotting paper", "foundation brushes and palettes", "hair dryer", "nail drill", "Small items maintain the look through the day."],
        ["M", "Extra time added to a schedule to allow for delays is a", "buffer", "deposit", "brief", "trial", "It protects the timetable."],
        ["H", "Five bridesmaids each need 40 minutes of makeup and two artists work at the same time. The time required is", "100 minutes", "200 minutes", "40 minutes", "80 minutes", "5 × 40 ÷ 2. Answer: 100 minutes."],
        ["H", "The safest way to avoid a dispute about the agreed look on the wedding day is to", "record the trial on a face chart with photographs", "change the look on the day", "avoid a trial", "rely on memory", "A recorded, agreed look can be reproduced exactly."],
        ["H", "A facial should not be given to a bride within the last few days before the wedding because it", "may cause redness or breakouts", "removes the foundation", "lightens the hair", "weakens the nails", "The skin needs time to settle."],
      ],
    },
    {
      week: 6,
      title: "Cosmetology Entrepreneurship Project I: Market Survey and Proposal Writing",
      subtopics: ["Business ideas in cosmetology", "Market survey", "Writing a business proposal", "Costing and funding"],
      objectives: ["Identify business ideas in cosmetology", "Conduct a simple market survey", "Write a business proposal", "Estimate costs and identify sources of funds"],
      lesson: {
        title: "Planning a Beauty Business",
        summary: "Researching the market and putting a beauty business idea into a written proposal.",
        minutes: 40,
        notes: `## Business ideas
makeup studio or freelance artistry; **hair salon**, braiding, wig making and revamping; **barbing salon**; **nail studio**; **spa and skin-care clinic**; lash and brow bar; **production of cosmetics** — soaps, body butters, lip balm and gloss, hair oils and creams, perfumes; retail of beauty products; beauty training school; mobile / home-service beauty; bridal packages.

## Market survey
A **market survey** is the **collection of information about customers, competitors and the market** before starting a business.
### What to find out
- **who the customers are** — age, sex, income, location
- **what they want**; how often they buy; what they pay
- **competitors** — number, services, prices, strengths and weaknesses
- **gaps** — needs not being met
- **suppliers** and input prices
- best **location**

### Methods
**questionnaires**; **interviews**; **observation** (visiting salons, counting customers); **focus groups**; online polls; published information.

### A simple questionnaire
5–10 clear questions, mostly closed (tick options): *How often do you visit a salon? What service do you use most? How much do you usually pay? What do you dislike about your present salon?*

### Analysing results
count the responses; express as **percentages**; draw conclusions.
*If 36 of 60 respondents prefer home service:* $\\tfrac{36}{60} \\times 100 = 60\\%$.

## The business proposal
A **business proposal (plan)** is a **written description of the business and how it will succeed**.
| Section | Content |
|---|---|
| **executive summary** | brief overview |
| **business description** | name, location, services, vision |
| **market analysis** | survey findings; target customers; competitors |
| **marketing plan** | pricing, promotion, branding |
| **operations** | premises, equipment, products, suppliers, staff, hygiene |
| **management** | owner's skills; roles |
| **financial plan** | start-up cost, price list, sales forecast, profit, break-even |
| **risks** | and how to handle them |

**SWOT analysis:** **strengths, weaknesses** (internal); **opportunities, threats** (external).

## Costing — a small nail studio
**Start-up:** rent ₦240 000; furniture and décor ₦180 000; equipment (UV lamp, drill, steriliser) ₦150 000; products ₦130 000; registration and branding ₦50 000; contingency ₦50 000 → **₦800 000**.
**Monthly:** 120 clients × ₦6 000 = ₦720 000; materials ₦180 000; rent, power, wages and others ₦340 000; **profit ₦200 000**; payback about **4 months**.

### Pricing a service
$$\\text{price} = \\text{materials} + \\text{labour (time)} + \\text{overheads} + \\text{profit}$$

## Sources of funds
personal savings; family and friends; co-operatives and thrift contributions; microfinance and bank loans; youth and women empowerment grants; small-business programmes (e.g. SMEDAN, Bank of Industry); partnership.

## Registration and regulation
business name with the **CAC**; local government permit; **NAFDAC** registration for cosmetics made for sale; tax identification.

## Qualities of a good proposal
clear; realistic; based on evidence from the survey; neatly presented; shows how money will be used and repaid.`,
        examples: `**Example 1.** What is a market survey? *Answer:* **Collecting information about customers, competitors and the market** before starting a business.

**Example 2.** In a survey of 80 people, 20 use a spa monthly. Express this as a percentage. *Answer:* $\\tfrac{20}{80} \\times 100 = \\mathbf{25\\%}$.

**Example 3.** Name two methods of conducting a market survey. *Answer:* **Questionnaires** and **interviews**.`,
      },
      questions: [
        ["E", "Collecting information about customers and competitors before starting a business is a", "market survey", "patch test", "trial", "facial analysis", "It shows whether there is demand."],
        ["E", "A set of written questions given to respondents is a", "questionnaire", "face chart", "portfolio", "receipt", "It is a common survey tool."],
        ["E", "Cosmetics produced for sale in Nigeria should be registered with", "NAFDAC", "FRSC", "INEC", "NDLEA", "It regulates cosmetics, food and drugs."],
        ["M", "In a survey of 50 people, 30 prefer natural skin-care products. This is", "60%", "30%", "50%", "80%", "30 ÷ 50 × 100. Answer: 60%."],
        ["M", "In a SWOT analysis, competition from a new salon nearby is a", "threat", "strength", "weakness", "opportunity", "It is an external danger."],
        ["M", "The part of a business proposal that sets out start-up cost and expected profit is the", "financial plan", "executive summary", "marketing plan", "business description", "Lenders study it closely."],
        ["M", "Visiting existing salons to count customers and note prices is the survey method of", "observation", "interview", "focus group", "online poll", "Information is gathered by watching."],
        ["H", "A studio serves 100 clients a month at ₦5 000 each, with total monthly costs of ₦380 000. Its monthly profit is", "₦120 000", "₦500 000", "₦880 000", "₦20 000", "Revenue ₦500 000 minus costs."],
        ["H", "A business with start-up costs of ₦900 000 and a monthly profit of ₦150 000 recovers its investment in", "6 months", "9 months", "15 months", "3 months", "900 000 ÷ 150 000."],
        ["H", "A need of customers that no existing business is meeting is a market", "gap", "glut", "share", "price", "It is an opportunity for a new business."],
      ],
    },
    {
      week: 8,
      title: "Cosmetology Entrepreneurship Project II: Practical Product Creation",
      subtopics: ["Cosmetic ingredients", "Good manufacturing practice", "Making simple products", "Packaging, labelling and presenting the project"],
      objectives: ["Identify the main groups of cosmetic ingredients", "Observe hygiene and safety in production", "Produce simple cosmetic products", "Package, label and present a product"],
      lesson: {
        title: "Making a Cosmetic Product",
        summary: "Formulating, producing, packaging and presenting simple beauty products.",
        minutes: 80,
        notes: `## Ingredient groups
| Group | Function | Examples |
|---|---|---|
| **emollients / oils and butters** | soften and smooth | shea butter, cocoa butter, coconut, palm kernel, olive, castor oil |
| **waxes** | give firmness | beeswax, candelilla |
| **humectants** | attract water | glycerine, honey, aloe vera |
| **emulsifiers** | allow oil and water to mix | emulsifying wax, lecithin |
| **surfactants** | cleanse and foam | soap, SLS, coco-glucoside |
| **thickeners** | body | stearic acid, cetyl alcohol, gums |
| **preservatives** | stop microbial growth in water-containing products | phenoxyethanol, sodium benzoate |
| **antioxidants** | stop oils going rancid | vitamin E |
| **fragrance and essential oils** | scent | lavender, citrus, fragrance oils |
| **colourants** | colour | mica, oxides, approved dyes |
| **actives** | special effects | sunscreen agents, exfoliating acids |
| **water** | solvent | distilled water |

## Good manufacturing practice
clean, tidy work area; wash hands; wear **apron, hair net, gloves**; **sterilise** containers and tools (hot water, 70% alcohol); use **distilled water**; **weigh** ingredients accurately on a scale; follow the formula; label everything; record each **batch**; **patch test** before use; store cool and dry; never use banned substances such as **mercury** or **hydroquinone above permitted limits**.

## Formulas by percentage
A formula adds up to **100%**. For a batch:
$$\\text{weight of ingredient} = \\frac{\\text{percentage}}{100} \\times \\text{batch size}$$
*A 500 g batch with 60% shea butter needs* $0.6 \\times 500 = 300$ g.

## Simple products
### 1. Whipped body butter (no water — no preservative needed)
shea butter 60%; coconut oil 25%; liquid oil (almond or olive) 14%; vitamin E 0.5%; fragrance 0.5%.
*Method:* melt butters gently in a **double boiler** → add oils → cool until just setting → **whip** until fluffy → add fragrance → fill jars.

### 2. Lip balm
beeswax 25%; shea or cocoa butter 35%; oil 39%; vitamin E and flavour 1%.
*Method:* melt wax and butter → stir in oil → add flavour → pour into tubes or pots → cool.

### 3. Sugar body scrub
sugar 65%; oil 33%; fragrance and vitamin E 2%. Mix and jar. (Salt may replace sugar for the body; not for the face.)

### 4. Hair oil
blend of carrier oils (coconut, castor, olive) with a few drops of essential oil (rosemary, peppermint).

### 5. Soap (cold process)
**Saponification:** **fat or oil + alkali (lye, sodium hydroxide) → soap + glycerine**.
*Outline:* weigh oils and lye precisely → dissolve lye in water (**add lye to water**, never water to lye; wear goggles and gloves; ventilate) → cool → mix lye solution into oils → blend to **trace** → add scent and colour → pour into mould → cut after a day → **cure 4–6 weeks**.
**Black soap (ose dudu)** uses ash from cocoa pods or plantain skins as the alkali, with palm kernel oil and shea butter.

### 6. Lotion or cream (emulsion)
oil phase + water phase heated separately to about 70 °C, combined with an **emulsifier**, stirred while cooling; **preservative essential** because it contains water.

## Quality checks
appearance, colour, odour, texture; **pH** (skin is about 4.5–5.5; soap is alkaline); stability over time and in heat; **patch test**; shelf-life observation.

## Packaging and labelling
clean, suitable containers (jars, tubes, pump bottles); tamper seal.
**Label:** product name; **net quantity**; **ingredients list**; directions for use; warnings; **batch number**; **manufacture and expiry dates**; maker's name and address; NAFDAC number when registered.

## Costing a product
$$\\text{cost per unit} = \\frac{\\text{ingredients} + \\text{packaging} + \\text{labour} + \\text{overheads}}{\\text{number of units}}$$
*A batch costing ₦24 000 makes 20 jars: ₦1 200 each; with 50% mark-up the price is ₦1 800.*

## Presenting the project
display the product; explain the formula, method, safety, cost and price, target market and results of user feedback; submit a short report.`,
        examples: `**Example 1.** What is saponification? *Answer:* The reaction of **fat or oil with an alkali to form soap and glycerine**.

**Example 2.** A 400 g batch of lip balm contains 25% beeswax. How much beeswax is needed? *Answer:* $0.25 \\times 400 = \\mathbf{100}$ **g**.

**Example 3.** Why does a lotion need a preservative but a body butter does not? *Answer:* The lotion **contains water**, in which microbes grow; the butter is water-free.`,
      },
      questions: [
        ["E", "An ingredient that softens and smooths the skin is an", "emollient", "abrasive", "astringent", "alkali", "Shea butter and oils are examples."],
        ["E", "The reaction between fat or oil and an alkali to form soap is", "saponification", "emulsification", "fermentation", "oxidation", "Glycerine is also produced."],
        ["E", "Which of these is a natural butter widely used in Nigerian cosmetics?", "Shea butter", "Margarine", "Petroleum jelly", "Paraffin wax", "It comes from the nut of the shea tree."],
        ["M", "An ingredient that draws moisture to the skin is a", "humectant", "surfactant", "colourant", "wax", "Glycerine and honey are examples."],
        ["M", "An ingredient that allows oil and water to mix in a lotion is an", "emulsifier", "exfoliant", "antioxidant", "abrasive", "Without it the two phases separate."],
        ["M", "A 600 g batch of body butter contains 25% coconut oil. The weight of coconut oil required is", "150 g", "25 g", "240 g", "450 g", "0.25 × 600. Answer: 150 g."],
        ["M", "Vitamin E is added to oil-based products mainly as an", "antioxidant", "emulsifier", "abrasive", "alkali", "It delays rancidity of the oils."],
        ["H", "When preparing lye solution for soap making, the safe rule is to", "add the lye to the water", "add water to the lye", "heat the lye dry", "mix with bare hands", "Adding water to lye can cause violent spattering."],
        ["H", "A water-containing cream must include a preservative because", "microorganisms grow in water", "oil evaporates", "wax melts", "fragrance fades", "Bacteria and moulds spoil unpreserved emulsions."],
        ["H", "A batch of 25 jars costs ₦30 000 to produce. With a 50% mark-up, the selling price per jar is", "₦1 800", "₦1 200", "₦600", "₦2 400", "Cost per jar ₦1 200 × 1.5."],
      ],
    },
    {
      week: 10,
      title: "Client Care and Psychology",
      subtopics: ["Communication with clients", "Understanding client behaviour", "Counselling and consultation skills", "Client satisfaction and retention"],
      objectives: ["Communicate effectively with clients", "Recognise different client types and needs", "Apply basic counselling and consultation skills", "Explain how to achieve client satisfaction and loyalty"],
      lesson: {
        title: "Caring for the Client",
        summary: "The human side of beauty work: listening, understanding and satisfying clients.",
        minutes: 40,
        notes: `## Client care
**Client care** is **everything done to make the client feel welcome, safe, respected and satisfied** — before, during and after the service. Beauty is a **personal service**: clients buy the experience as well as the result.

## Communication
### Verbal
polite greeting; clear, simple language; a pleasant tone; **open questions** ("What look would you like?") to learn wishes and **closed questions** ("Is the water warm enough?") to confirm; no gossip, arguments or offensive talk.
### Non-verbal
smile; eye contact; open posture; neat appearance; gentle touch; attentive expression.
### Listening
**Active listening** — give full attention; do not interrupt; **repeat back** what the client asked for; ask for clarification; note details.
### Written and digital
booking confirmations, reminders, price lists, aftercare leaflets; prompt, courteous replies.

## Psychology of the client
People seek beauty services for **appearance, confidence, relaxation, special occasions, social acceptance** and sometimes to cope with **stress or low self-esteem**.
- **self-image** — how a person sees herself; **self-esteem** — how she values herself; a good service can lift both
- clients may be **anxious** about a new style, a skin condition or hair loss — reassurance and privacy matter
- **body language** shows discomfort the client may not voice

### Client types
| Type | Approach |
|---|---|
| **talkative** | listen politely; keep working; steer back to the service |
| **quiet / shy** | gentle questions; do not force conversation |
| **indecisive** | show pictures; offer two or three suitable options; advise |
| **demanding / difficult** | stay calm and professional; clarify expectations; be firm but polite |
| **nervous / first-timer** | explain each step; reassure |
| **in a hurry** | be efficient; state the time needed honestly |
| **elderly, pregnant, or with disability** | extra care, comfort and patience |
| **children** | patience; involve the parent |

## Consultation and counselling
A good consultation covers: the client's **wishes**; **lifestyle** and budget; **analysis** of skin, hair or nails; **medical history, allergies and contra-indications**; realistic **advice**; **agreement** on the service and price; a **record card**.
**Counselling skills:** empathy (understanding the client's feelings); respect; **honesty** — say tactfully when a request will not suit or is unsafe; **confidentiality**; knowing one's limits — **refer** medical conditions to a doctor or dermatologist; never diagnose.

**Contra-indication:** a **condition that makes a treatment unsafe or unsuitable** — e.g. infection, open wound, severe acne, recent surgery, allergy.

## During the service
comfort — seating, temperature, protective cape; check pressure, heat and satisfaction; explain what is being done; hygiene visible to the client; privacy.

## Aftercare
**Aftercare advice** tells the client **how to look after the result at home** — products to use, what to avoid, when to return. It protects the result and encourages rebooking.

## Complaints
1. listen without interrupting; 2. stay calm; do not argue; 3. apologise; 4. examine the problem; 5. offer a solution — correction, redo, refund; 6. follow up; 7. record and learn.

## Satisfaction and retention
- **consistent quality** and punctuality
- clean, pleasant environment
- remembering names and preferences (**client records**)
- fair, transparent prices
- **follow-up** messages; birthday greetings
- **loyalty rewards** and referral discounts
- asking for **feedback**
A satisfied client returns and **recommends** others; keeping a client costs less than winning a new one.

## Professional ethics
confidentiality; honesty; respect for all clients without discrimination; no criticism of other professionals; proper boundaries; consent before taking or posting photographs.`,
        examples: `**Example 1.** What is active listening? *Answer:* **Giving full attention**, not interrupting and **repeating back** the client's request to confirm it.

**Example 2.** Define contra-indication. *Answer:* A **condition that makes a treatment unsafe or unsuitable** for the client.

**Example 3.** Why is aftercare advice given? *Answer:* To help the client **maintain the result at home** and to encourage her to return.`,
      },
      questions: [
        ["E", "Everything done to make a client feel welcome, safe and satisfied is", "client care", "contouring", "costing", "curing", "It covers the whole experience of the service."],
        ["E", "Giving full attention to a client and confirming what she has said is", "active listening", "gossiping", "upselling", "patch testing", "It ensures the request is understood."],
        ["E", "Keeping a client's personal information private is", "confidentiality", "consultation", "counselling", "commission", "It is a professional duty."],
        ["M", "A question that invites the client to describe her wishes freely is", "an open question", "a closed question", "a leading question", "a rhetorical question", "Closed questions are answered yes or no."],
        ["M", "A condition that makes a beauty treatment unsafe for a client is a", "contra-indication", "consultation", "complement", "correction", "Infection and open wounds are examples."],
        ["M", "Understanding and sharing the feelings of a client is", "empathy", "apathy", "sympathy card", "authority", "It builds trust."],
        ["M", "Advice on how to look after the result of a treatment at home is", "aftercare", "pre-care", "a trial", "a deposit", "It protects the result and encourages rebooking."],
        ["H", "A client asks for a treatment that would harm her skin. The beautician should", "explain tactfully why it is unsuitable and suggest an alternative", "do it without comment", "mock the request", "refuse to speak to her", "Honest advice protects the client and the business."],
        ["H", "A beautician who notices a suspicious skin lesion on a client should", "advise her to see a doctor", "diagnose it as cancer", "treat it with a facial", "ignore it", "Beauticians must not diagnose but should refer."],
        ["H", "An indecisive client is best helped by", "offering two or three suitable options with pictures", "choosing for her without discussion", "telling her to come back another day", "showing every possible style", "Limited, guided choices make the decision easier."],
      ],
    },
  ],
};
