import type { TermPlan } from "../types";

/** SS3 Fashion Design and Garment Making, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 2,
      title: "Tailoring Business I: Setting Up a Fashion Workshop",
      subtopics: ["Choosing a location", "Workshop layout", "Equipment and tools", "Registration, staffing and capital"],
      objectives: ["State the factors to consider in locating a fashion workshop", "Plan the layout of a workshop", "List the equipment and tools required", "Explain registration, staffing and sources of capital"],
      lesson: {
        title: "Opening a Fashion Workshop",
        summary: "What it takes to set up a tailoring business: place, layout, machines, people and money.",
        minutes: 40,
        notes: `## The fashion workshop
A **fashion workshop (tailoring shop, atelier)** is a place where **garments are designed, cut, sewn, finished and sold**.

## Choosing a location
- **nearness to customers** — residential areas, markets, schools, offices
- **accessibility** and visibility — good road, easy to find
- **electricity and water** supply
- **security**
- **rent** that the business can afford
- **competition** — number of tailors nearby
- **nearness to suppliers** of fabric and notions
- adequate **space** and good ventilation

## Workshop layout
Arrange work areas so that garments move **in the order of production** without back-tracking:
| Area | Activity |
|---|---|
| **reception / fitting area** | receiving customers, measurements, fitting; mirror and curtain |
| **cutting area** | large, smooth cutting table at waist height; good light |
| **sewing area** | machines in rows near windows or lights |
| **pressing area** | ironing board and iron close to the machines |
| **finishing area** | hand sewing, buttons, trimming |
| **storage and display** | shelves, hangers, mannequins; store for fabrics |

**Requirements:** good **lighting** (daylight and lamps), **ventilation**, enough sockets, tidy floor, fire extinguisher, first-aid box.

## Equipment and tools
| Group | Items |
|---|---|
| **sewing machines** | straight-stitch (hand, treadle, electric), **industrial** lockstitch, **overlock (serger)** for neatening, zigzag, **embroidery machine**, buttonhole and button-sewing machines, weaving ("whipping") machine |
| **measuring** | tape measure, metre rule, L-square, French curve, hip curve |
| **marking** | tailor's chalk, tracing wheel and carbon paper |
| **cutting** | dressmaker's shears, paper scissors, pinking shears, seam ripper, rotary cutter |
| **sewing** | needles, pins, pin cushion, thimble, bobbins, threads |
| **pressing** | electric or steam iron, ironing board, sleeve board, pressing cloth |
| **fitting and display** | dress form (dummy), full-length mirror, hangers |
| **furniture** | cutting table, chairs, shelves, showcase |
| **power backup** | generator or inverter |

## Registration
Register a **business name** with the **Corporate Affairs Commission (CAC)**; obtain local government permits and a **tax identification number**; join the trade association.

## Staffing
owner-designer; cutters; machinists; finishers; apprentices; salesperson or receptionist. Staff need **skill, honesty and neatness**.

## Capital
**Capital** is the **money and assets used to start and run a business**.
- **fixed capital** — machines, furniture, premises
- **working capital** — fabric, thread, wages, rent, power
**Sources:** personal savings; family and friends; **co-operative and thrift (esusu / ajo) contributions**; microfinance and bank loans; government and NGO grants for youth and small enterprises; equipment hire purchase; customers' deposits.

## Steps in setting up
identify the idea and market → acquire skill → write a **business plan** → raise capital → choose location → register → buy equipment → employ staff → advertise and open.`,
        examples: `**Example 1.** Give three factors to consider in locating a tailoring shop. *Answer:* **Nearness to customers, electricity supply** and **affordable rent**.

**Example 2.** Which machine neatens raw edges of seams? *Answer:* The **overlock machine (serger)**.

**Example 3.** Distinguish fixed from working capital. *Answer:* **Fixed capital** buys lasting assets such as machines; **working capital** pays day-to-day costs such as fabric and wages.`,
      },
      questions: [
        ["E", "A place where garments are designed, cut and sewn is a", "fashion workshop", "boutique only", "laundry", "warehouse", "It is also called a tailoring shop."],
        ["E", "The machine used to neaten raw edges of seams is the", "overlock machine", "embroidery machine", "buttonhole machine", "knitting machine", "It trims and oversews the edge."],
        ["E", "Money and assets used to start and run a business are", "capital", "profit", "turnover", "discount", "It may be fixed or working capital."],
        ["M", "Which of these is the most important factor in locating a tailoring shop?", "Nearness to customers", "Nearness to a river", "Distance from all roads", "Absence of electricity", "Customers must reach the shop easily."],
        ["M", "In a workshop layout, the pressing area should be", "close to the sewing machines", "outside the shop", "in the store", "in the reception", "Seams are pressed as sewing proceeds."],
        ["M", "Fabric, thread and wages are paid for from", "working capital", "fixed capital", "share capital only", "reserve fund", "They are day-to-day running costs."],
        ["M", "A business name in Nigeria is registered with the", "Corporate Affairs Commission", "Standards Organisation of Nigeria", "National Orientation Agency", "Nigerian Export Promotion Council", "The CAC keeps the register of businesses."],
        ["H", "A cutting table should be at about waist height mainly to", "prevent strain while cutting", "save fabric", "improve lighting", "reduce noise", "A comfortable height reduces fatigue and errors."],
        ["H", "A rotating savings group from which members take the pooled money in turn is", "esusu", "a bank overdraft", "hire purchase", "a grant", "It is a traditional source of capital."],
        ["H", "Arranging work areas in the order of production helps to", "avoid back-tracking and save time", "increase rent", "reduce the number of customers", "hide the machines", "Garments flow smoothly from cutting to finishing."],
      ],
    },
    {
      week: 3,
      title: "Tailoring Business II: Costing and Pricing Garments",
      subtopics: ["Elements of cost", "Costing a garment", "Pricing methods", "Profit and break-even"],
      objectives: ["Identify the elements of cost in garment making", "Calculate the cost of a garment", "Apply pricing methods", "Calculate profit and break-even point"],
      lesson: {
        title: "What Should a Garment Cost?",
        summary: "Working out materials, labour and overheads, and fixing a price that gives a profit.",
        minutes: 40,
        notes: `## Costing and pricing
**Costing** is **working out the total expense of producing a garment**. **Pricing** is **fixing the amount the customer pays**.

## Elements of cost
| Element | Examples |
|---|---|
| **materials** | fabric, lining, interfacing, thread, zip, buttons, trimmings |
| **labour** | time spent designing, cutting, sewing, finishing × rate per hour |
| **overheads** | rent, electricity and fuel, machine maintenance, transport, packaging, advertising, phone |

$$\\text{total cost} = \\text{materials} + \\text{labour} + \\text{overheads}$$

## Costing a garment — example
A lined dress:
| Item | ₦ |
|---|---|
| fabric: 3 yards at ₦2 500 | 7 500 |
| lining: 2 yards at ₦1 000 | 2 000 |
| zip, thread, buttons | 800 |
| **materials** | **10 300** |
| labour: 5 hours at ₦1 000 | 5 000 |
| overheads (20% of materials and labour) | 3 060 |
| **total cost** | **18 360** |

With a **mark-up of 25%**: profit $= 0.25 \\times 18\\,360 = 4\\,590$; **selling price = ₦22 950** (rounded to ₦23 000).

## Pricing methods
| Method | Meaning |
|---|---|
| **cost-plus (mark-up)** | cost + a percentage for profit |
| **competitive pricing** | based on what other tailors charge |
| **value-based (prestige) pricing** | based on what customers will pay for the brand or design |
| **penetration pricing** | low price to win new customers |
| **discount pricing** | reductions for bulk orders or clearance |

## Factors affecting price
cost of materials; **complexity of style** and time taken; skill and reputation of the designer; type of customer and location; demand and season (festivals, weddings); competition; urgency ("express" orders).

## Profit
- **profit** = selling price − total cost
- **mark-up %** $= \\dfrac{\\text{profit}}{\\text{cost}} \\times 100$
- **profit margin %** $= \\dfrac{\\text{profit}}{\\text{selling price}} \\times 100$
A garment costing ₦8 000 sold at ₦10 000: profit ₦2 000; mark-up 25%; margin 20%.

## Sewing charges only
When the customer brings the fabric: charge = labour + notions + overheads + profit.

## Break-even
The **break-even point** is where **total income equals total cost** — no profit, no loss.
$$\\text{break-even quantity} = \\frac{\\text{fixed costs}}{\\text{price per unit} - \\text{variable cost per unit}}$$
Fixed costs ₦120 000 a month; price ₦10 000; variable cost ₦6 000 → $120\\,000 \\div 4\\,000 = 30$ garments.

## Reducing cost without lowering quality
economical **pattern layout**; buying materials in bulk; avoiding waste and mistakes; maintaining machines; good time management.

## Records
price list; job cards; receipts; cash book.`,
        examples: `**Example 1.** Materials cost ₦6 000, labour ₦3 000 and overheads ₦1 000. Find the total cost. *Answer:* **₦10 000**.

**Example 2.** A garment costing ₦10 000 is priced with a 30% mark-up. Find the selling price. *Answer:* ₦10 000 × 1.3 = **₦13 000**.

**Example 3.** Fixed costs are ₦80 000; price per garment ₦8 000; variable cost ₦4 000. Find the break-even quantity. *Answer:* $80\\,000 \\div 4\\,000 = \\mathbf{20}$ garments.`,
      },
      questions: [
        ["E", "Working out the total expense of producing a garment is", "costing", "fitting", "drafting", "pressing", "It includes materials, labour and overheads."],
        ["E", "Rent and electricity in a tailoring business are classed as", "overheads", "materials", "labour", "profit", "They are indirect running costs."],
        ["E", "Selling price minus total cost gives the", "profit", "overhead", "mark-down", "capital", "A negative result is a loss."],
        ["M", "A garment uses materials of ₦5 000, labour of ₦2 500 and overheads of ₦1 500. Its total cost is", "₦9 000", "₦7 500", "₦6 500", "₦10 500", "Sum of the three elements."],
        ["M", "A dress costs ₦12 000 to make and is sold with a 25% mark-up. The selling price is", "₦15 000", "₦14 400", "₦12 250", "₦16 000", "12 000 × 1.25. Answer: ₦15 000."],
        ["M", "Fixing a price according to what other tailors charge is", "competitive pricing", "cost-plus pricing", "prestige pricing", "break-even pricing", "It follows the market."],
        ["M", "A garment costing ₦8 000 is sold for ₦10 000. The profit margin on selling price is", "20%", "25%", "80%", "125%", "2 000 ÷ 10 000 × 100."],
        ["H", "A workshop has fixed costs of ₦150 000 a month. Each garment sells for ₦12 000 and has a variable cost of ₦7 000. The break-even quantity is", "30 garments", "12.5 garments", "21 garments", "50 garments", "150 000 ÷ (12 000 − 7 000)."],
        ["H", "Which practice reduces the cost of a garment without lowering its quality?", "Economical pattern layout", "Using weaker thread", "Omitting interfacing where needed", "Skipping seam finishing", "It saves fabric."],
        ["H", "A complicated style attracts a higher price mainly because it", "takes more time and skill", "uses less fabric", "needs no pressing", "has no overheads", "Labour cost rises with complexity."],
      ],
    },
    {
      week: 4,
      title: "Customer Relations in Fashion",
      subtopics: ["Communication with customers", "Taking orders and measurements", "Handling complaints", "Keeping customers"],
      objectives: ["Explain the importance of good customer relations", "Describe how to take an order", "Handle customer complaints properly", "State ways of retaining customers"],
      lesson: {
        title: "Serving the Customer Well",
        summary: "Communicating, recording orders accurately and dealing with complaints so that customers return.",
        minutes: 40,
        notes: `## Customer relations
**Customer relations** is the **way a business deals with its customers to satisfy them and keep their goodwill**. In fashion, most new customers come by **recommendation** — satisfied customers are the best advertisement.

## Communication
- **greet warmly**; be polite and patient
- **listen** carefully to what the customer wants
- **ask questions** — occasion, preferred style, fit, budget, date needed
- **advise honestly** on style, fabric and colour to suit **figure type, complexion, age and occasion**
- use **sketches, catalogues, photographs** and fabric samples
- speak clearly; avoid technical jargon
- communicate by phone and messaging promptly and respectfully
- **body language** — smile, eye contact, neat appearance

## Taking an order
1. **Discuss and agree the style** — sketch or picture.
2. **Check the fabric** — type, quantity, flaws, need for pre-shrinking.
3. **Take measurements** accurately and record them.
4. **Agree the price**, **deposit** and **collection date**.
5. **Fill the order form / job card** and give a **receipt**.
6. Attach a **swatch** and label to the fabric.
7. Fix a **fitting date** where needed.

### The order form (job card)
customer's name, phone; date; description and sketch; measurements; fabric swatch; price, deposit, balance; fitting and collection dates; signature.

### Measurements commonly taken
bust/chest, waist, hip, shoulder, across back, nape to waist, sleeve length, round arm, neck, full length, trouser length, thigh, crotch depth. Measure over light clothing, tape snug but not tight; customer standing naturally.

### Customers' measurement book
A permanent record for repeat orders — update when the figure changes.

## Handling complaints
Common complaints: **poor fit, late delivery, wrong style, damaged or missing fabric, poor finishing, price disputes**.
1. **Listen** without interrupting; stay calm.
2. **Apologise** and show understanding.
3. **Examine** the garment; find the cause.
4. **Offer a remedy** — alteration, redo, refund or compensation.
5. **Act quickly** and keep the promise.
6. **Record** and learn from it.
Never argue, blame the customer or the apprentice in front of them.

## Keeping customers (retention)
- **deliver on time** — the commonest failing of tailors
- **quality workmanship** and good fit
- **honesty** — return left-over fabric; fair prices
- **follow-up** calls; reminders before festive seasons
- **discounts and loyalty rewards**
- **neat packaging**
- **confidentiality** about customers' measurements and orders
- clean, welcoming shop

## Difficult customers
the indecisive, the bargain-hunter, the latecomer, the fault-finder — respond with **patience, clear written agreements and firmness**.`,
        examples: `**Example 1.** Why is on-time delivery important? *Answer:* It builds **trust** — late delivery is the commonest cause of losing customers.

**Example 2.** List four items on an order form. *Answer:* **Name, measurements, price and deposit**, and **collection date**.

**Example 3.** What is the first step in handling a complaint? *Answer:* **Listen calmly** to the customer.`,
      },
      questions: [
        ["E", "The way a business deals with its customers to keep their goodwill is", "customer relations", "costing", "pattern drafting", "stock taking", "Satisfied customers return and recommend."],
        ["E", "The record on which a customer's style, measurements and price are written is the", "order form", "price tag", "invoice of supplier", "pattern", "It is also called a job card."],
        ["E", "Money paid in advance when an order is placed is a", "deposit", "discount", "balance", "refund", "The balance is paid on collection."],
        ["M", "In advising a customer on style, the designer should consider the customer's", "figure type and occasion", "house address", "tribe only", "telephone model", "Style should suit the body and the event."],
        ["M", "A small piece of the customer's fabric attached to the order form is a", "swatch", "selvedge", "dart", "facing", "It identifies the fabric for the order."],
        ["M", "When a customer complains about poor fit, the tailor should first", "listen calmly", "argue", "blame the fabric", "refuse to see the garment", "Understanding the complaint comes before a remedy."],
        ["M", "The commonest cause of customers leaving a tailor is", "late delivery", "neat finishing", "fair prices", "good fit", "Broken promises on dates destroy trust."],
        ["H", "Returning left-over fabric to the customer demonstrates", "honesty", "wastefulness", "poor layout", "competition", "It builds confidence in the business."],
        ["H", "A fitting date is fixed for a customer mainly to", "correct faults before the garment is finished", "collect more money", "delay delivery", "choose a new style", "Adjustments are easier before final stitching."],
        ["H", "Keeping customers' measurements and orders private is an example of", "confidentiality", "advertising", "penetration pricing", "branding", "Personal information should not be disclosed."],
      ],
    },
    {
      week: 6,
      title: "Entrepreneurship in Fashion",
      subtopics: ["The fashion entrepreneur", "Branding", "Marketing and promotion", "Sales and distribution"],
      objectives: ["Describe the qualities of a fashion entrepreneur", "Explain branding in fashion", "Describe marketing and promotion methods", "Identify sales channels for fashion products"],
      lesson: {
        title: "Building a Fashion Brand",
        summary: "Turning sewing skill into a business through branding, marketing and selling.",
        minutes: 40,
        notes: `## Entrepreneurship
**Entrepreneurship** is **identifying a business opportunity and organising resources to exploit it, taking the risk for the sake of profit**. A **fashion entrepreneur** creates and sells fashion goods or services.

### Qualities
creativity; skill; risk-taking; hard work and perseverance; self-confidence; good time management; customer focus; financial discipline; willingness to learn; honesty.

### Opportunities
bespoke tailoring; **ready-to-wear** lines; bridal and aso-ebi wear; school and corporate **uniforms**; children's wear; accessories (bags, headgear, beadwork); **adire, batik and tie-dye**; embroidery and monogramming; alterations and repairs; fashion illustration and styling; fashion school or training; fabric retailing; costume making for film.

## Branding
A **brand** is the **identity that distinguishes a business and its products** in customers' minds.
| Element | Example |
|---|---|
| **brand name** | short, memorable, easy to pronounce |
| **logo and colours** | used on labels, bags, signboard |
| **woven label and swing tag** | sewn into every garment |
| **signature style** | a recognisable cut, fabric or detail |
| **packaging** | branded bags and boxes |
| **slogan** | a short phrase |
| **reputation** | quality, service, delivery |

**Benefits:** recognition; customer loyalty; ability to charge higher prices; protection through **trademark registration**.

## Marketing
**Marketing** is **identifying customers' needs and satisfying them profitably**.

### The marketing mix (4 Ps)
| P | In fashion |
|---|---|
| **product** | styles, quality, sizes, fit |
| **price** | affordable to the target market, profitable |
| **place** | shop, boutique, online, markets |
| **promotion** | making the product known |

### Target market
The **group of customers aimed at** — by age, sex, income, occasion, taste (e.g. working women, brides, children).

### Promotion methods
- **word of mouth** and referrals
- **social media** — photographs and videos of work
- **fashion shows and exhibitions**, trade fairs
- signboard, flyers, posters, complimentary cards
- **lookbooks** and catalogues
- models, brand ambassadors and influencers
- **sales promotion** — discounts, festive offers
- window display and mannequins
- radio and television

## Sales and distribution
- **direct sales** from the workshop or own boutique
- **consignment** to boutiques (paid when sold)
- **wholesale** to retailers
- **online** — own website, marketplaces, social-media stores, with delivery
- **pop-up shops**, bazaars and exhibitions
- **export**

### Selling skills
know the product; display attractively; help customers choose; allow fitting; close the sale politely; issue receipts; after-sales service (alterations).

## Challenges
inadequate capital; erratic power; cost of fabrics; competition from imported and second-hand clothing; copying of designs; unreliable workers; customers' debts. **Responses:** planning, quality, innovation, co-operation, record keeping.`,
        examples: `**Example 1.** What is a brand? *Answer:* The **identity that distinguishes a business and its products**.

**Example 2.** List the 4 Ps of marketing. *Answer:* **Product, price, place** and **promotion**.

**Example 3.** Give two ways of promoting a fashion business. *Answer:* **Social media** and **fashion shows**.`,
      },
      questions: [
        ["E", "A person who starts and runs a fashion business, bearing the risk, is a fashion", "entrepreneur", "model", "customer", "apprentice", "The entrepreneur organises resources for profit."],
        ["E", "The identity that distinguishes a business and its products is its", "brand", "pattern", "invoice", "overhead", "It includes name, logo and reputation."],
        ["E", "Garments made in standard sizes for sale to anyone are", "ready-to-wear", "bespoke", "second-hand", "costumes only", "Bespoke garments are made to an individual's measurements."],
        ["M", "Which of these is NOT one of the 4 Ps of marketing?", "Pattern", "Product", "Price", "Promotion", "The fourth P is place."],
        ["M", "The group of customers a fashion business aims to serve is its", "target market", "competitor", "supplier", "overhead", "It is defined by age, income, taste and occasion."],
        ["M", "A label sewn into a garment carrying the maker's name helps in", "branding", "costing", "drafting", "pressing", "It identifies the maker to the wearer."],
        ["M", "Placing garments in a boutique and being paid only when they are sold is", "consignment", "wholesale", "barter", "hire purchase", "Unsold items are returned."],
        ["H", "A fashion brand is legally protected from imitation of its name and logo by", "trademark registration", "a price list", "a lookbook", "sales promotion", "Registration gives exclusive right to the mark."],
        ["H", "A collection of photographs showing a designer's styles for a season is a", "lookbook", "job card", "cash book", "swatch", "It is used for promotion and sales."],
        ["H", "The promotion method that costs least and is most trusted by customers is", "word of mouth", "television advertising", "billboards", "radio jingles", "Recommendations come from satisfied customers."],
      ],
    },
    {
      week: 8,
      title: "ICT in Fashion",
      subtopics: ["Fashion software", "Online marketing and e-commerce", "Digital tools in production", "Benefits and risks"],
      objectives: ["Identify software used in fashion design", "Explain online marketing of fashion products", "Describe digital tools used in garment production", "State the benefits and risks of ICT in fashion"],
      lesson: {
        title: "Fashion in the Digital Age",
        summary: "Software, online platforms and digital machines that are changing how fashion is designed and sold.",
        minutes: 40,
        notes: `## ICT in fashion
**Information and communication technology (ICT)** — computers, phones, software and the internet — is used in fashion for **designing, pattern making, production, marketing, selling and record keeping**.

## Fashion software
| Use | Examples |
|---|---|
| **fashion illustration and sketching** | Adobe Illustrator, CorelDRAW, Procreate, Photoshop |
| **computer-aided design (CAD) — pattern making and grading** | Gerber AccuMark, Lectra, Optitex, TUKAcad, Valentina/Seamly2D (free) |
| **3-D garment simulation** | CLO 3D, Browzwear, Marvelous Designer |
| **marker making (layout planning)** | part of CAD suites — arranges pattern pieces to minimise waste |
| **textile and print design** | Photoshop, NedGraphics |
| **business** | spreadsheets, accounting and invoicing apps, customer databases |

**CAD** means **computer-aided design**; **CAM**, **computer-aided manufacture**.

### Advantages of CAD
speed and accuracy; easy correction; patterns **stored** and reused; automatic **grading** into sizes; fabric saving through efficient markers; 3-D viewing without sewing a sample; easy sharing.

## Digital tools in production
- **computerised sewing and embroidery machines** — programmed stitches and motifs
- **automatic cutting machines** — laser and knife cutters driven by CAD
- **digital textile printing** — prints designs direct onto fabric
- **plotters** — print full-size patterns
- **body scanners** — take measurements in 3-D

## Online marketing
**Online (digital) marketing** is **promoting products through the internet**.
- **social media** pages with clear photographs, videos, prices and contact
- **messaging apps** for orders and updates
- **websites and online stores**
- **e-commerce marketplaces**
- **search and paid advertisements**; **influencers**
- **e-mail and SMS** to existing customers
- **content** — styling tips, behind-the-scenes clips

### Good practice
quality photographs in good light; consistent brand style; size charts; prompt replies; honest descriptions; customer reviews; regular posting; clear delivery and return terms.

## E-commerce
**E-commerce** is **buying and selling over the internet**: display → order → **electronic payment** (transfer, card, payment link, POS) → delivery by dispatch rider or courier.

## Other uses
online **tutorials** and courses; trend research; sourcing fabrics; video fitting consultations; storing customers' measurements; bookkeeping.

## Benefits
wider market — beyond the locality and abroad; low advertising cost; open 24 hours; faster communication; better records; faster, more accurate design and production.

## Risks and challenges
- **design copying** (piracy)
- **online fraud** — fake payment alerts, fake buyers and sellers
- returns because of poor fit — no physical fitting
- cost of devices, data and software; erratic power and network
- need for training
- privacy of customers' data
**Precautions:** confirm payments before delivery; watermark photographs; strong passwords; back up files.`,
        examples: `**Example 1.** What does CAD stand for? *Answer:* **Computer-aided design**.

**Example 2.** Give two advantages of CAD pattern making. *Answer:* **Accuracy** and **automatic grading into sizes**.

**Example 3.** What is e-commerce? *Answer:* **Buying and selling over the internet**.`,
      },
      questions: [
        ["E", "ICT stands for", "information and communication technology", "international clothing trade", "internal cutting technique", "industrial cloth treatment", "It covers computers, phones and the internet."],
        ["E", "Buying and selling over the internet is", "e-commerce", "consignment", "barter", "hawking", "Orders and payments are made online."],
        ["E", "In fashion, CAD software is used for", "designing and pattern making", "washing fabrics", "ironing", "sewing on buttons by hand", "Computer-aided design."],
        ["M", "Producing a pattern in a range of sizes from one base size is", "grading", "pressing", "basting", "hemming", "CAD does this automatically."],
        ["M", "Software that shows how a garment will look on a virtual body before it is sewn is", "3-D garment simulation software", "a spreadsheet", "a word processor", "an e-mail app", "It saves the cost of physical samples."],
        ["M", "A computer-planned arrangement of pattern pieces on fabric to reduce waste is a", "marker", "swatch", "toile", "lookbook", "Efficient markers save fabric."],
        ["M", "Which is a good practice in online marketing of garments?", "Posting clear photographs with size charts", "Hiding prices and contact", "Ignoring enquiries", "Using blurred pictures", "Customers need accurate information to buy."],
        ["H", "A major risk of displaying designs online is", "copying of the designs", "wider market reach", "lower advertising cost", "faster communication", "Others may reproduce the styles."],
        ["H", "Before dispatching a garment sold online, the seller should", "confirm that payment has actually been received", "trust any screenshot", "remove the label", "ignore the address", "Fake payment alerts are a common fraud."],
        ["H", "A machine that prints a full-size pattern from a CAD file is a", "plotter", "serger", "scanner", "loom", "It draws on wide paper."],
      ],
    },
    {
      week: 9,
      title: "Fashion Trends and Globalization",
      subtopics: ["Meaning of fashion terms", "The fashion cycle", "Influences on fashion trends", "Globalization and Nigerian fashion"],
      objectives: ["Define fashion, style, fad, classic and trend", "Describe the stages of the fashion cycle", "Identify the influences on fashion trends", "Discuss the effects of globalization on Nigerian fashion"],
      lesson: {
        title: "How Fashion Moves Round the World",
        summary: "Why styles rise and fall, and how global exchange shapes what Nigerians wear and sell.",
        minutes: 40,
        notes: `## Key terms
| Term | Meaning |
|---|---|
| **fashion** | the style **accepted and worn by many people at a particular time** |
| **style** | a particular design or look with distinct features (e.g. A-line skirt, agbada) |
| **trend** | the **direction in which fashion is moving** |
| **fad** | a fashion that becomes popular quickly and **dies quickly** |
| **classic** | a style that remains acceptable **for a long time** (e.g. shirt, plain wrapper and blouse) |
| **haute couture** | exclusive, made-to-measure high fashion |
| **ready-to-wear (prêt-à-porter)** | factory-made in standard sizes |
| **mass fashion; fast fashion** | cheap, quickly produced copies of current trends |
| **collection** | a group of designs for a season |

## The fashion cycle
1. **introduction** — new style shown by designers; worn by fashion leaders; expensive
2. **rise** — more people adopt it; copies appear
3. **peak (culmination)** — at its most popular; widely available at all prices
4. **decline** — people tire of it; sold at reduced prices
5. **obsolescence (rejection)** — out of fashion

Styles often **return** years later.

## Influences on trends
- **designers and fashion weeks** (Paris, Milan, London, New York; Lagos and other African shows)
- **celebrities, musicians, film stars and influencers**
- **media** — television, films, magazines, social media
- **culture and tradition** — festivals, weddings, aso-ebi
- **religion** — modesty requirements
- **economy** — income and prices
- **technology** — new fabrics, machines, digital printing
- **climate and season**
- **social and political events**; sports
- **youth and street culture**
- **age, occupation and lifestyle**

## Globalization
**Globalization** is the **growing interconnection of the world's economies, cultures and peoples** through trade, travel and communication.

### Effects on Nigerian fashion — positive
- **wider market** — Nigerian designers and fabrics (ankara, adire, aso-oke) sold abroad
- access to **new fabrics, machines, ideas and techniques**
- **fusion styles** — traditional fabrics in Western cuts
- **online learning** and international exposure
- jobs and foreign exchange
- recognition of African fashion worldwide

### Negative
- **competition** from cheap imported and **second-hand clothing** (okrika)
- decline of local **textile mills**
- **loss of cultural identity**; indecent styles
- **copying** of designs
- dependence on imported fabrics
- **fast fashion** — waste and pollution

## Responding to global trends
adapt trends to **local taste, climate and culture**; use local fabrics; emphasise **quality and originality**; protect designs; practise **sustainable fashion** — durable garments, recycling and upcycling, reduced waste.

## Trend forecasting
studying shows, streets, media and sales data to **predict coming colours, fabrics and silhouettes** — useful in planning a collection.`,
        examples: `**Example 1.** Distinguish a fad from a classic. *Answer:* A **fad** is short-lived; a **classic** stays in fashion for a long time.

**Example 2.** Name the stages of the fashion cycle. *Answer:* **Introduction, rise, peak, decline, obsolescence**.

**Example 3.** Give one negative effect of globalization on Nigerian fashion. *Answer:* **Competition from cheap imported and second-hand clothing**.`,
      },
      questions: [
        ["E", "The style accepted and worn by many people at a particular time is", "fashion", "pattern", "costume", "uniform", "It changes with time."],
        ["E", "A fashion that becomes popular quickly and dies quickly is a", "fad", "classic", "tradition", "collection", "It is short-lived."],
        ["E", "A style that remains acceptable for a long time is a", "classic", "fad", "craze", "trend only", "It outlasts changing fashions."],
        ["M", "The stage of the fashion cycle at which a style is most widely worn is the", "peak", "introduction", "decline", "obsolescence", "It is available at all price levels."],
        ["M", "Exclusive, made-to-measure high fashion is known as", "haute couture", "prêt-à-porter", "fast fashion", "okrika", "It is produced for individual clients."],
        ["M", "The growing interconnection of the world's economies and cultures is", "globalization", "urbanization", "industrialization", "localization", "Trade and communication link countries."],
        ["M", "Which of these strongly influences fashion trends among young people?", "Celebrities and social media", "Soil type", "Rainfall", "Road network", "Youth copy the styles they see."],
        ["H", "A negative effect of globalization on the Nigerian clothing industry is", "decline of local textile mills", "wider export market", "access to new machines", "exposure to new ideas", "Cheap imports displaced local production."],
        ["H", "Making new garments or accessories from old clothing is", "upcycling", "grading", "forecasting", "consignment", "It is a sustainable-fashion practice."],
        ["H", "Studying shows, media and sales data to predict coming colours and silhouettes is", "trend forecasting", "pattern grading", "marker making", "costing", "It guides the planning of a collection."],
      ],
    },
    {
      week: 10,
      title: "Business Proposal for a Fashion Line",
      subtopics: ["Meaning and purpose of a business proposal", "Parts of a business plan", "Planning a fashion line", "Financial projections"],
      objectives: ["Explain the purpose of a business proposal", "Outline the parts of a business plan", "Plan a small fashion line", "Prepare simple financial projections"],
      lesson: {
        title: "Writing a Proposal for a Fashion Line",
        summary: "Putting a fashion business idea on paper so that it can be funded and followed.",
        minutes: 80,
        notes: `## Meaning
A **business proposal (business plan)** is a **written document describing a business idea, how it will operate, and how it will make money**. A **fashion line** is a **range of related garments produced under one brand** for a target market.

## Purpose
guides the owner; helps to **obtain loans, grants or investors**; tests whether the idea is **feasible**; sets targets against which progress is measured.

## Parts of the plan
| Section | Content |
|---|---|
| **executive summary** | the whole plan in brief — written last, placed first |
| **business description** | name, location, ownership, vision and mission |
| **products and services** | the line — styles, fabrics, sizes, prices |
| **market analysis** | target customers, demand, competitors |
| **marketing plan** | branding, promotion, sales channels |
| **operations plan** | workshop, equipment, suppliers, production process, staff |
| **management** | who does what |
| **financial plan** | start-up cost, sales forecast, profit, break-even, funding required |
| **risk analysis** | problems expected and solutions |
| **appendices** | sketches, quotations, photographs |

## Planning the line
1. **Concept / theme** — e.g. "ankara office wear for young women".
2. **Target market** — age, income, occasion.
3. **Research** — trends, competitors, prices.
4. **Design** — sketches; **mood board** (pictures, colours, fabric swatches expressing the theme); colour palette.
5. **Range plan** — number and types of pieces (e.g. 4 dresses, 3 tops, 3 skirts, 2 jackets) that **mix and match**.
6. **Fabrics and trims** — sourcing and cost.
7. **Patterns and samples** — make and fit a **prototype (toile / sample)**; correct.
8. **Sizes** — size chart; grading.
9. **Costing and pricing** each piece.
10. **Production plan** — quantities, timeline.
11. **Launch** — photo shoot, lookbook, show, online release.

## SWOT analysis
| | |
|---|---|
| **Strengths** | skill, unique designs |
| **Weaknesses** | little capital |
| **Opportunities** | festive demand, online market |
| **Threats** | competition, power supply |

## Financial projections — example
**Start-up costs:** machines ₦450 000; furniture ₦100 000; rent ₦200 000; first stock of fabric ₦150 000; registration and branding ₦50 000; other ₦50 000 → **₦1 000 000**.

**Monthly forecast:** 40 garments at ₦15 000 = **₦600 000 sales**; variable costs at ₦8 000 each = ₦320 000; fixed costs ₦160 000; **profit = ₦120 000**.

**Break-even** $= 160\\,000 \\div (15\\,000 - 8\\,000) \\approx 23$ garments a month.
**Payback** $= 1\\,000\\,000 \\div 120\\,000 \\approx 8.3$ months.

## Qualities of a good proposal
clear and concise; realistic figures; well researched; neatly presented; shows how the loan will be repaid.`,
        examples: `**Example 1.** What is a fashion line? *Answer:* A **range of related garments produced under one brand** for a target market.

**Example 2.** What does SWOT stand for? *Answer:* **Strengths, weaknesses, opportunities, threats**.

**Example 3.** Sales are ₦500 000, variable costs ₦280 000 and fixed costs ₦120 000. Find the profit. *Answer:* ₦500 000 − ₦400 000 = **₦100 000**.`,
      },
      questions: [
        ["E", "A written document describing a business idea and how it will operate is a", "business plan", "job card", "receipt", "pattern", "It guides the owner and convinces lenders."],
        ["E", "A range of related garments produced under one brand is a", "fashion line", "swatch", "seam", "marker", "The pieces share a theme."],
        ["E", "In SWOT analysis, the letter T stands for", "threats", "targets", "trends", "tools", "Threats are external dangers."],
        ["M", "The section of a business plan that gives the whole plan in brief is the", "executive summary", "appendix", "risk analysis", "operations plan", "It is written last but placed first."],
        ["M", "A board of pictures, colours and fabric swatches expressing the theme of a collection is a", "mood board", "notice board", "cutting board", "sleeve board", "It guides the design of the line."],
        ["M", "A first sample garment made to test a design and its fit is a", "prototype", "lookbook", "marker", "label", "It is also called a toile."],
        ["M", "A business sells 30 garments at ₦12 000 each. Its sales revenue is", "₦360 000", "₦36 000", "₦120 000", "₦42 000", "30 × 12 000. Answer: ₦360 000."],
        ["H", "A start-up cost of ₦900 000 is recovered from a monthly profit of ₦150 000 in", "6 months", "9 months", "15 months", "1.5 months", "900 000 ÷ 150 000."],
        ["H", "A fashion line with monthly fixed costs of ₦140 000, a price of ₦14 000 and a variable cost of ₦7 000 per garment breaks even at", "20 garments", "10 garments", "14 garments", "7 garments", "140 000 ÷ (14 000 − 7 000)."],
        ["H", "Lenders study the financial plan of a proposal mainly to see", "whether the loan can be repaid", "the designer's favourite colours", "the names of the customers", "the brand of sewing machine", "They need evidence of profit and cash flow."],
      ],
    },
  ],
};
