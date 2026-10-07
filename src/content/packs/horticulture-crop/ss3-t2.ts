import type { TermPlan } from "../types";

/** SS3 Horticulture and Crop Production, Second and Third Terms — NERDC 2025 scheme. */
export const ss3t2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "Export Crops in Nigeria: Cocoa, Cashew and Kola Nut",
      subtopics: ["Meaning and importance of export crops", "Cocoa", "Cashew", "Kola nut"],
      objectives: ["Explain export crops and their importance", "Describe the production and processing of cocoa", "Describe the production and processing of cashew", "Describe the production and processing of kola nut"],
      lesson: {
        title: "Nigeria's Tree Crops for Export",
        summary: "The cultivation, processing and trade of three important tree crops.",
        minutes: 80,
        notes: `## Export (cash) crops
**Export crops** are **crops grown mainly for sale abroad**: cocoa, cashew, sesame, rubber, oil palm products, cotton, ginger, kola, shea, hibiscus.
**Importance:** **foreign exchange**; income for farmers; employment; **raw materials** for industry; government revenue; rural development.

## Cocoa (*Theobroma cacao*)
**Producing areas:** the south-west and south — **Ondo, Cross River, Osun, Oyo, Ekiti, Ogun, Edo**. Nigeria is among the world's leading producers.
**Varieties:** **Amelonado** (Forastero type — hardy, commonest), **Criollo** (fine flavour, low yield), **Trinitario** (hybrid); improved **Amazon** hybrids and CRIN releases.
**Requirements:** rainfall **1150–2000 mm**, well distributed; temperature 18–32 °C; high humidity; **deep, well-drained, fertile loam** rich in organic matter; **shade** when young.

### Cultivation
- **propagation:** seed (beans from ripe pods, sown fresh in polythene bags in a **shaded nursery**); budding and grafting for improved clones
- **nursery:** 4–6 months
- **land preparation:** under-brushing; selective felling leaving shade trees; plantain or cocoyam as **nurse (temporary shade) crops**
- **transplanting:** start of rains; spacing about **3 m × 3 m** (about 1100 stands per hectare)
- **maintenance:** weeding; **pruning** (chupons removed; canopy shaped); shade regulation; mulching; fertiliser; removal of mistletoe
- **maturity:** first pods in **3–5 years** (hybrids 2–3)

### Pests and diseases
- **black pod** (*Phytophthora*) — fungus; pods blacken and rot; control by removing infected pods, pruning for air flow, copper fungicides
- **swollen shoot** — virus spread by **mealybugs**; control by cutting out infected trees, resistant varieties
- **mirids (capsids)** — sap-sucking bugs; insecticides
- pod borers, rodents, squirrels, mistletoe

### Harvesting and processing
1. **harvest** ripe (yellow/orange) pods with a cutlass or go-to-hell knife — do not damage the flower cushions
2. **break pods**; remove wet beans
3. **fermentation** — heap or box covered with banana leaves, **5–7 days**, turned; develops **chocolate flavour and colour**; pulp drains away
4. **drying** — in the sun on raised mats to about **7% moisture**
5. **sorting, grading, bagging** in jute bags; storage
**Products:** cocoa butter, cocoa powder, chocolate, beverages, cocoa cake; pod husk for soap (potash) and feed.

## Cashew (*Anacardium occidentale*)
**Producing areas:** **Kogi, Oyo, Enugu, Kwara, Anambra, Abia, Imo, Benue, Nasarawa** and others.
**Requirements:** hardy; rainfall 800–1600 mm with a **marked dry season** for flowering; grows on **poor sandy soils**; drought tolerant; needs full sun.

### Cultivation
- **propagation:** seed (nuts sown at stake or in polybags); **grafting** for improved, early-bearing types (Brazilian jumbo)
- **spacing:** about 9 m × 9 m or wider; intercropping with food crops in early years
- **maintenance:** weeding, pruning lower branches, fire tracing (fire breaks), fertiliser where needed
- **maturity:** bears in **3–4 years**; full production at 8–10 years

### Pests and diseases
stem and root borers; **tea mosquito bug** (*Helopeltis*); thrips; **anthracnose**; powdery mildew; bush fire.

### Harvesting and processing
The fruit has two parts — the swollen **cashew apple** (false fruit) and the true fruit, the **nut**.
- **nuts are picked from the ground** after they fall; detached from the apple; **sun-dried** 2–3 days to about 8% moisture; stored in jute bags — sold as **raw cashew nuts (RCN)**
- **kernel processing:** steaming or roasting → **shelling** → drying → **peeling** the testa → grading → packaging
- the shell contains **cashew nut shell liquid (CNSL)** — caustic; an industrial raw material (brake linings, paints)
- **apple:** juice, jam, wine

## Kola nut (*Cola nitida* and *Cola acuminata*)
***Cola nitida*** (**gbanja / goro**) — two cotyledons; the main commercial kola. ***Cola acuminata*** (**abata / oji**) — more than two cotyledons; important in ceremonies.
**Producing areas:** the south-west — **Ogun, Osun, Oyo, Ondo, Ekiti** — and parts of the south-east and Kwara; marketed heavily in the north.
**Requirements:** rainfall above about 1200 mm; deep, well-drained fertile soil; forest zone; shade when young.

### Cultivation
- **propagation:** seed (slow, variable — bears in **6–10 years**); **vegetative** — rooted cuttings, budding, grafting, marcotting (bears in about 4 years)
- **spacing:** about 7.5 m × 7.5 m
- **maintenance:** weeding, pruning, mistletoe removal; some trees are self-incompatible — mixed planting aids pollination

### Pests and diseases
**kola weevil** (*Balanogastris kolae*) — the most serious pest of nuts in the field and store; stem borers; fungal rots.

### Harvesting and processing
1. harvest mature pods with a hooked knife (October–December)
2. split pods; remove nuts
3. **ferment / soak** a few days to loosen the white skin (**testa**); wash it off
4. **cure (sweat)** in baskets for some days
5. sort; **store** in baskets lined and covered with fresh leaves (traditionally *Mitragyna* / banana), inspected and re-leafed regularly; nuts keep for months
**Uses:** stimulant (contains **caffeine**); social and ceremonial; flavouring of beverages; dyes; pharmaceuticals.

## Problems of export crops
ageing trees and farmers; pests and diseases; poor quality control; low processing — raw export; price fluctuation; inadequate credit; poor roads.
**Research:** the **Cocoa Research Institute of Nigeria (CRIN), Ibadan** has the mandate for cocoa, kola, cashew, coffee and tea.`,
        examples: `**Example 1.** Why are cocoa beans fermented? *Answer:* To **develop the chocolate flavour and colour** and remove the pulp.

**Example 2.** Name the two commercial species of kola. *Answer:* ***Cola nitida*** and ***Cola acuminata***.

**Example 3.** Which disease of cocoa causes blackening and rotting of pods? *Answer:* **Black pod disease**.`,
      },
      questions: [
        ["E", "Crops grown mainly for sale to other countries are", "export crops", "cover crops", "food crops", "fodder crops", "They earn foreign exchange."],
        ["E", "The Nigerian state best known for cocoa production is", "Ondo", "Sokoto", "Borno", "Kano", "Cocoa grows in the humid south-west."],
        ["E", "The stimulant contained in kola nut is", "caffeine", "nicotine", "quinine", "morphine", "It gives kola its stimulating effect."],
        ["M", "Cocoa beans are fermented for about", "5–7 days", "1–2 hours", "one month", "one day", "Fermentation develops flavour."],
        ["M", "The fungal disease that blackens and rots cocoa pods is", "black pod", "swollen shoot", "mosaic", "smut", "It is caused by Phytophthora and favoured by humidity."],
        ["M", "The swollen, juicy part of the cashew fruit is the", "cashew apple", "kernel", "shell", "testa", "It is a false fruit; the nut is the true fruit."],
        ["M", "The most serious pest of kola nuts in the field and in storage is the", "kola weevil", "cocoa mirid", "variegated grasshopper", "stem borer of maize", "Its larvae bore into the nuts."],
        ["H", "Swollen shoot disease of cocoa is transmitted by", "mealybugs", "mirids", "weevils", "aphids of cowpea", "They carry the virus from tree to tree."],
        ["H", "Cashew differs from cocoa in its requirements because cashew", "tolerates poor sandy soils and a marked dry season", "needs heavy shade throughout life", "requires swampy soil", "cannot stand full sun", "It is a hardy, drought-tolerant crop."],
        ["H", "The research institute with the national mandate for cocoa, kola and cashew is", "CRIN", "NIFOR", "IAR", "NRCRI", "The Cocoa Research Institute of Nigeria, Ibadan."],
      ],
    },
    {
      week: 2,
      title: "Global Trends in Horticulture",
      subtopics: ["Trends in production and consumption", "Organic certification", "Standards and traceability", "Agribusiness and technology trends"],
      objectives: ["Describe current global trends in horticulture", "Explain organic certification", "Explain quality standards and traceability", "Relate global trends to opportunities in Nigeria"],
      lesson: {
        title: "Where Horticulture Is Heading",
        summary: "Consumer demand, standards and technology that are reshaping the world's horticultural trade.",
        minutes: 40,
        notes: `## Horticulture
**Horticulture** is the **branch of agriculture concerned with fruits, vegetables, flowers and ornamental plants**: **pomology** (fruits), **olericulture** (vegetables), **floriculture** (flowers), **landscaping**, nursery production, spices, medicinal and aromatic plants.

## Trends in consumption
- rising demand for **fruits and vegetables** — health awareness, urbanisation, higher incomes
- demand for **safe, residue-free and organic** produce
- **convenience** — washed, cut, packaged, ready-to-eat products
- **year-round supply** and exotic produce
- **functional foods** and "superfoods" — moringa, hibiscus, ginger, turmeric, avocado
- plant-based diets
- interest in **origin** — how and where food was grown
- **ethical and fair-trade** products

## Trends in production
- **protected cultivation** — greenhouses and net houses
- **soilless systems** — hydroponics, aeroponics, aquaponics
- **vertical and urban farming** — stacked layers under LED lights near consumers
- **precision horticulture** — sensors, drones, automation, robotics
- **improved varieties** — hybrids; disease-resistant, long shelf-life types; **tissue culture** for clean planting material (banana, plantain, pineapple)
- **biological control** and reduced pesticide use
- **water-saving irrigation**
- **climate-smart** practices
- **cold chain** and modern post-harvest handling
- **sustainable packaging**

## Organic certification
**Organic certification** is the **process by which an independent body verifies that a farm and its products meet organic standards**.
### Requirements
- no synthetic fertilisers, pesticides or GMOs
- a **conversion period** before produce is sold as organic
- an **organic management plan**
- **buffer zones** separating organic from conventional fields
- **detailed records** of inputs, activities and sales
- **annual inspection** and residue testing
- separation and labelling through handling and processing
### Standards and schemes
**IFOAM – Organics International** (global umbrella); **EU Organic**, **USDA Organic (NOP)**, JAS (Japan); in Nigeria, the **Association of Organic Agriculture Practitioners of Nigeria (NOAN)** and **participatory guarantee systems (PGS)** for local markets.
### Benefits
premium prices; access to export markets; consumer trust; environmental gains. **Costs:** fees, records, lower yield during conversion.

## Other standards
| Standard | Concern |
|---|---|
| **GLOBALG.A.P.** | **Good Agricultural Practices** on the farm — food safety, environment, workers' welfare, traceability |
| **HACCP; ISO 22000** | food-safety management in processing and packing |
| **Fairtrade** | fair prices and conditions for producers |
| **Rainforest Alliance** | sustainability — cocoa, coffee, tea |
| **Codex Alimentarius** | international food standards, including **maximum residue limits (MRLs)** |
| **sanitary and phytosanitary (SPS) measures** | plant health and food safety in trade; **phytosanitary certificate** issued by the **Nigeria Agricultural Quarantine Service (NAQS)** |

**Rejection of exports** — past rejections of Nigerian produce abroad for excessive pesticide residues and poor handling show why standards matter.

## Traceability
**Traceability** is the **ability to follow a product through every stage from farm to consumer** — lot numbers, farm records, barcodes and QR codes, blockchain. It allows **recall** of unsafe products and proves origin.

## Agribusiness trends
- **value addition** — juices, dried fruits and vegetables, pastes, powders, essential oils
- **contract farming / out-grower schemes**
- **supermarkets and e-commerce** — online sale and delivery of fresh produce
- **digital platforms** linking farmers to inputs, finance, advice and markets
- **agri-fintech** — digital credit, insurance, crowd-funding
- producer **co-operatives** and aggregation
- **export of fresh and processed horticultural products**
- agro-tourism; landscaping and ornamental plant business

## Major world players
The **Netherlands** (flowers, greenhouse technology), **Kenya** and **Ethiopia** (cut flowers, vegetables to Europe), Spain, China, India, Israel (irrigation technology).

## Opportunities for Nigeria
large domestic market; favourable climates for many crops; export potential — **ginger, hibiscus (zobo), sesame, cashew, mango, pineapple, chilli, moringa, shea**; **AfCFTA**; youth interest in agritech; reducing imports (tomato paste, fruit concentrates).

## Challenges
post-harvest losses (up to 30–50% for perishables); weak cold chain; poor roads; meeting standards; cost of certification; inadequate finance and power; pests such as ***Tuta absoluta*** on tomato.`,
        examples: `**Example 1.** What is organic certification? *Answer:* **Verification by an independent body** that a farm's products meet organic standards.

**Example 2.** What is traceability? *Answer:* The **ability to follow a product through every stage from farm to consumer**.

**Example 3.** Name the branch of horticulture concerned with vegetables. *Answer:* **Olericulture**.`,
      },
      questions: [
        ["E", "The branch of agriculture concerned with fruits, vegetables and ornamental plants is", "horticulture", "forestry", "apiculture", "agronomy of cereals", "It covers pomology, olericulture and floriculture."],
        ["E", "The branch of horticulture dealing with fruit crops is", "pomology", "olericulture", "floriculture", "silviculture", "Olericulture deals with vegetables."],
        ["E", "The cultivation of flowers and ornamental plants is", "floriculture", "viticulture", "pomology", "pisciculture", "Cut flowers are a major export for some countries."],
        ["M", "Verification by an independent body that produce meets organic standards is", "organic certification", "grading", "branding", "fumigation", "It allows produce to be sold as organic."],
        ["M", "The ability to follow a product through all stages from farm to consumer is", "traceability", "palatability", "viability", "marketability", "It permits recalls and proves origin."],
        ["M", "The international farm-level standard for Good Agricultural Practices is", "GLOBALG.A.P.", "ISO 9001", "CCNA", "OPEC", "It covers food safety, environment and workers' welfare."],
        ["M", "Growing crops in stacked layers under artificial light near consumers is", "vertical farming", "terrace farming", "strip cropping", "alley cropping", "It saves land and transport."],
        ["H", "A strip of land separating an organic field from a conventional one is a", "buffer zone", "fire trace", "head land", "fallow plot", "It prevents drift of prohibited substances."],
        ["H", "The highest amount of pesticide residue legally permitted in a food is the", "maximum residue limit", "economic threshold", "lethal dose", "application rate", "Exports exceeding it are rejected."],
        ["H", "The document certifying that a plant consignment is free of regulated pests for export is the", "phytosanitary certificate", "certificate of origin", "bill of lading", "letter of credit", "It is issued by the agricultural quarantine service."],
      ],
    },
    {
      week: 3,
      title: "Agribusiness Opportunities: The Horticulture Value Chain",
      subtopics: ["Meaning of agribusiness and value chain", "Stages of the horticulture value chain", "Opportunities at each stage", "Value addition and post-harvest handling"],
      objectives: ["Explain agribusiness and the value chain", "Describe the stages of the horticulture value chain", "Identify business opportunities at each stage", "Explain value addition and post-harvest handling"],
      lesson: {
        title: "Business from Seed to Table",
        summary: "The chain of activities that brings horticultural produce to consumers and the businesses along it.",
        minutes: 40,
        notes: `## Agribusiness
**Agribusiness** is the **sum of all business activities involved in the production, processing and distribution of agricultural goods** — from the supply of inputs to the final consumer.

## Value chain
A **value chain** is the **full range of activities that bring a product from input supply through production, processing and marketing to the consumer, with value added at each stage**. The people involved are the **actors**.

## Stages and opportunities
| Stage | Activities | Opportunities |
|---|---|---|
| **1. input supply** | seeds, seedlings, fertilisers, agro-chemicals, tools, irrigation equipment, greenhouses | **seed and seedling nursery**; agro-dealer shop; **compost and organic fertiliser** production; irrigation and greenhouse installation; equipment hire |
| **2. production** | growing fruits, vegetables, flowers, spices | vegetable farms (tomato, pepper, ugu, okra, cucumber, lettuce); orchards (citrus, mango, pawpaw, pineapple, plantain); greenhouse and hydroponic farms; mushroom, herbs, **ornamental plants** |
| **3. harvesting and post-harvest handling** | harvesting, sorting, grading, washing, packing, cooling | **pack house** services; plastic crate rental; cold rooms; aggregation |
| **4. processing** | converting into other products | **tomato paste, dried tomato**; fruit juices and concentrates; jams; **plantain chips and flour**; dried and powdered pepper, ginger, okra; pickles; essential oils |
| **5. storage and transport** | warehousing; cold chain; haulage | cold storage; refrigerated transport; logistics |
| **6. marketing and distribution** | wholesale, retail, export | produce shops; supply to hotels, schools and supermarkets; **online delivery**; export |
| **7. consumption** | households, restaurants, industries | catering; fresh-juice and salad bars |
| **support services** | finance, insurance, extension, research, certification, ICT | consultancy; training; farm apps; soil testing; **landscaping and garden maintenance** |

## Value addition
**Value addition** is **any activity that increases the worth of a product** — cleaning, grading, packaging, processing, branding, storing until prices rise.
*Tomatoes bought at ₦20 000 per basket in the glut and dried or made into paste sell for much more per unit and keep for months.*
**Benefits:** higher income; **longer shelf life**; less waste; jobs; steadier prices; wider markets.

$$\\text{value added} = \\text{selling price of the product} - \\text{cost of raw material and other inputs}$$
*Plantain costing ₦6 000 plus ₦2 000 in oil, packaging and labour, sold as chips for ₦12 000: value added ₦4 000.*

## Post-harvest handling
**Post-harvest losses** of fruits and vegetables are very high — often **30–50%** — because produce is **perishable**: high in water, alive and respiring.

### Causes of loss
harvesting at the wrong stage or time; rough handling and **bruising**; poor packaging (overfilled raffia baskets); heat and delay; pests and rots; poor roads and transport; lack of cold storage; glut.

### Good practice
1. harvest at **correct maturity**, in the **cool of the day**, with clean tools
2. handle gently; keep in the shade
3. **sort and grade** — remove damaged and diseased produce
4. **clean / wash** and dry
5. **pre-cool** to remove field heat
6. pack in **ventilated plastic crates**, not overfilled
7. **cold storage** at the right temperature and humidity (tropical fruits such as banana and tomato suffer **chilling injury** if too cold)
8. careful, quick transport — preferably at night or refrigerated
9. low-cost options — **evaporative coolers** (zero-energy cool chambers, pot-in-pot), shade
10. process surplus — **drying** (solar dryers), paste, juice

**Shelf life** is the **time a product remains acceptable for sale and use**.

## Marketing
- **channels:** farmer → assembler/aggregator → wholesaler → retailer → consumer; shorter channels raise the farmer's share
- **market information** — prices and demand
- **grading and standardisation**; packaging and branding
- **contract farming**; co-operatives for bulk sale
- **farmer's share** $= \\dfrac{\\text{farm-gate price}}{\\text{retail price}} \\times 100$ — produce sold at the farm for ₦300 per kg and retailed at ₦750 gives 40%.

## Constraints
finance; land tenure; poor infrastructure; pests and diseases; price fluctuation; weak standards; inadequate storage; insecurity.

## Success factors
market first; quality; reliable supply; record keeping; value addition; partnerships; technology.`,
        examples: `**Example 1.** Define value chain. *Answer:* The **full range of activities that bring a product from inputs to the consumer**, with value added at each stage.

**Example 2.** Give two ways of adding value to tomatoes. *Answer:* **Drying** and **processing into paste**.

**Example 3.** Raw material and inputs cost ₦9 000; the product sells for ₦15 000. Find the value added. *Answer:* **₦6 000**.`,
      },
      questions: [
        ["E", "All business activities from the supply of farm inputs to the final consumer make up", "agribusiness", "subsistence farming", "land tenure", "extension", "It covers production, processing and distribution."],
        ["E", "Any activity that increases the worth of a farm product is", "value addition", "roguing", "thinning", "weeding", "Processing and packaging are examples."],
        ["E", "A business that raises seedlings for sale belongs to the stage of", "input supply", "processing", "consumption", "export", "It provides planting material to growers."],
        ["M", "Fruits and vegetables suffer high post-harvest losses mainly because they are", "perishable", "dry", "hard", "inedible", "They contain much water and continue to respire."],
        ["M", "The best containers for carrying tomatoes to market are", "ventilated plastic crates", "overfilled raffia baskets", "jute sacks", "sealed drums", "They prevent crushing and allow air flow."],
        ["M", "Removing field heat from freshly harvested produce is", "pre-cooling", "curing of tubers", "blanching", "fermentation", "It slows respiration and decay."],
        ["M", "The time a product remains acceptable for sale and use is its", "shelf life", "gestation", "dormancy", "rotation", "Good handling extends it."],
        ["H", "Plantain bought for ₦8 000 is processed with ₦3 000 of other inputs and sold as chips for ₦16 000. The value added is", "₦5 000", "₦8 000", "₦13 000", "₦11 000", "16 000 − (8 000 + 3 000)."],
        ["H", "Produce is sold at the farm gate for ₦400 per kg and retails at ₦1 000 per kg. The farmer's share of the retail price is", "40%", "60%", "25%", "250%", "400 ÷ 1000 × 100."],
        ["H", "Storing bananas or tomatoes at too low a temperature results in", "chilling injury", "faster ripening", "longer shelf life in all cases", "sweeter fruit", "Tropical produce is damaged by very low temperatures."],
      ],
    },
    {
      week: 4,
      title: "Farm Management: Planning, Budgeting and Record Keeping",
      subtopics: ["Meaning and functions of farm management", "Farm planning", "Budgeting", "Farm records and accounts"],
      objectives: ["Explain farm management and the functions of a farm manager", "Describe farm planning", "Prepare a simple farm budget", "Identify farm records and calculate profit"],
      lesson: {
        title: "Running the Farm as a Business",
        summary: "Organising resources, planning ahead and keeping accounts on a crop farm.",
        minutes: 40,
        notes: `## Farm management
**Farm management** is the **organisation and use of the farm's resources — land, labour, capital and management — to achieve the farmer's goals**, usually maximum profit.

## Factors of production
| Factor | Meaning | Reward |
|---|---|---|
| **land** | soil, water, vegetation | rent |
| **labour** | human effort — family, hired, communal | wages |
| **capital** | money, tools, machines, buildings, inputs | interest |
| **management (entrepreneur)** | organises the others; bears risk | profit |

## Functions of a farm manager
**planning** — deciding what, how and when to produce; **organising** resources; **directing and supervising** workers; **co-ordinating**; **controlling** — checking results against plans; **decision-making**; buying inputs and **marketing** produce; **record keeping**; **evaluating**.

## Farm planning
A **farm plan** is a **statement of what is to be done on the farm, how, when and with what resources**.
**Steps:** set goals → list available resources (**inventory**) → choose enterprises (market, soil, climate, skill, capital) → draw the **farm layout** and **cropping calendar** → estimate inputs and labour → prepare the budget → implement → monitor and review.
A **cropping calendar** shows the dates of land preparation, planting, weeding, fertiliser application and harvest for each crop.

## Budgeting
A **farm budget** is an **estimate of expected income and expenditure** for a future period.
- **complete budget** — the whole farm
- **enterprise budget** — one crop
- **partial budget** — effect of a small change
- **cash-flow budget** — timing of money in and out

### Enterprise budget — 1 ha of fresh tomato
| Item | ₦ |
|---|---|
| land preparation | 60 000 |
| seeds and nursery | 40 000 |
| fertiliser and manure | 120 000 |
| pesticides | 50 000 |
| staking and labour | 180 000 |
| irrigation, harvesting, crates, transport | 150 000 |
| **total variable cost** | **600 000** |
| yield 15 t at ₦100 000 per tonne — **revenue** | **1 500 000** |
| **gross margin** | **900 000** |

$$\\text{gross margin} = \\text{total revenue} - \\text{total variable cost}$$
$$\\text{net farm income} = \\text{gross margin} - \\text{fixed costs}$$
With fixed costs (rent, depreciation of pump and tools) of ₦200 000, net income is ₦700 000.
**Break-even yield** = total cost ÷ price = ₦800 000 ÷ ₦100 000 = **8 tonnes**.

## Costs
**fixed** (rent, depreciation, permanent staff) and **variable** (seed, fertiliser, casual labour).
**Depreciation** (straight line) = (cost − salvage value) ÷ useful life. *A water pump costing ₦250 000 with salvage ₦50 000 over 5 years: ₦40 000 a year.*

## Farm records
| Record | Content |
|---|---|
| **farm diary** | daily activities |
| **inventory** | all assets and their values at a date |
| **production record** | areas planted, dates, yields |
| **input record** | seeds, fertilisers, chemicals used |
| **labour record** | workers, tasks, hours, wages |
| **sales record** | quantity, price, buyer |
| **purchases and expenses record** | items bought |
| **cash book** | money received and paid |
| **field / spray record** | operations and chemicals — needed for certification |

### Importance
show **profit or loss**; guide planning; support **loan** applications; basis for tax and insurance; compare seasons and enterprises; detect waste and theft; required for **traceability**.

## Farm accounts
- **profit and loss account** — income and expenditure for a period
- **balance sheet** — assets and liabilities at a date; **net worth** = assets − liabilities
- **cash analysis**

## Measures of performance
yield per hectare; gross margin per hectare; **return on investment** = profit ÷ total cost × 100; **benefit–cost ratio** = revenue ÷ cost (above 1 is profitable).

## Economic principles
**law of diminishing returns** — beyond a point, each extra unit of fertiliser gives a smaller increase in yield; **opportunity cost**; **scale of production**; **specialisation and diversification** (diversification spreads risk).

## Risks
weather, pests, price falls, theft, illness. **Managing risk:** diversification, irrigation, insurance, contracts, storage, savings.`,
        examples: `**Example 1.** Define a farm budget. *Answer:* An **estimate of expected income and expenditure** for a future period.

**Example 2.** Revenue ₦800 000; variable costs ₦500 000. Find the gross margin. *Answer:* **₦300 000**.

**Example 3.** Total cost ₦450 000; price ₦90 000 per tonne. Find the break-even yield. *Answer:* $450\\,000 \\div 90\\,000 = \\mathbf{5}$ **tonnes**.`,
      },
      questions: [
        ["E", "The reward for land as a factor of production is", "rent", "wages", "interest", "profit", "Wages reward labour; interest rewards capital."],
        ["E", "A record of the daily activities on a farm is the", "farm diary", "inventory", "balance sheet", "sales record", "It is written each day."],
        ["E", "A list of all the assets of a farm and their values at a given date is the", "inventory", "cash book", "labour record", "cropping calendar", "It is taken at the beginning and end of the year."],
        ["M", "A table showing the dates of planting, weeding and harvesting for each crop is a", "cropping calendar", "balance sheet", "price list", "soil map", "It guides the timing of operations."],
        ["M", "A hectare of pepper gives revenue of ₦1 200 000 with variable costs of ₦700 000. The gross margin is", "₦500 000", "₦1 900 000", "₦700 000", "₦58 000", "1 200 000 − 700 000."],
        ["M", "Seeds and fertilisers are examples of", "variable costs", "fixed costs", "sunk costs", "capital assets", "They change with the area cropped."],
        ["M", "Growing several different crops in order to spread risk is", "diversification", "specialisation", "monocropping", "mechanisation", "A failure of one crop is offset by others."],
        ["H", "A crop enterprise has a total cost of ₦600 000 and the produce sells at ₦120 000 per tonne. The break-even yield is", "5 tonnes", "0.2 tonne", "7.2 tonnes", "50 tonnes", "600 000 ÷ 120 000."],
        ["H", "A sprayer costing ₦90 000 has a salvage value of ₦10 000 and a life of 4 years. Annual straight-line depreciation is", "₦20 000", "₦22 500", "₦25 000", "₦80 000", "(90 000 − 10 000) ÷ 4."],
        ["H", "When each additional bag of fertiliser adds less to yield than the bag before it, the farm is experiencing", "diminishing returns", "increasing returns", "economies of scale", "opportunity cost", "Extra input to fixed land eventually gives smaller gains."],
      ],
    },
    {
      week: 6,
      title: "Agricultural Finance",
      subtopics: ["Meaning and need for agricultural finance", "Types of credit", "Sources of credit", "Challenges and solutions"],
      objectives: ["Explain agricultural finance and why farmers need it", "Classify agricultural credit", "Identify sources of agricultural credit", "Discuss the problems of agricultural finance and their solutions"],
      lesson: {
        title: "Money for Farming",
        summary: "Where farmers obtain capital, the kinds of loans available and the difficulties involved.",
        minutes: 40,
        notes: `## Meaning
**Agricultural finance** is the **acquisition and use of capital in agriculture**. **Agricultural credit** is **money or inputs lent to a farmer to be repaid later, usually with interest**.

## Why farmers need finance
buy **inputs** — seeds, fertilisers, chemicals; acquire **land, machines, irrigation and greenhouses**; pay **labour**; build **storage and processing** facilities; **expand** production; adopt **new technology**; meet family needs between planting and harvest; market produce.

## Types of credit
### By duration
| Type | Period | Use |
|---|---|---|
| **short-term** | up to about **1 year** | seeds, fertilisers, labour, chemicals |
| **medium-term** | about **1–5 years** | pumps, small machinery, work animals, tree-crop establishment |
| **long-term** | **over 5 years** | land, buildings, tractors, plantations, irrigation schemes |

### By source
**institutional (formal)** and **non-institutional (informal)**.
### By form
**cash** or **kind** (inputs supplied).
### By security
**secured** (with **collateral**) and **unsecured**.

## Sources
### Informal
- **personal savings**
- **family and friends**
- **esusu / ajo / adashe** — rotating savings and thrift groups
- **money lenders** — quick but with very high interest
- produce buyers and input dealers (credit against the crop)
- age grades, town unions

### Formal
- **co-operative societies** — members' savings and loans at low interest
- **microfinance banks**
- **commercial banks**
- **Bank of Agriculture (BOA)** — government bank for farmers
- **Bank of Industry (BOI)**; development finance institutions
- **Central Bank of Nigeria** schemes: **Agricultural Credit Guarantee Scheme Fund (ACGSF)** — guarantees a large share of bank loans to farmers; Commercial Agriculture Credit Scheme; **Anchor Borrowers' Programme** — input loans to smallholders linked to processors
- **NIRSAL** — shares the risk of agricultural lending
- **government and donor programmes** — grants, youth schemes, FADAMA, IFAD-assisted projects
- **contract farming / out-grower schemes**
- **agri-fintech and crowd-funding platforms**
- insurance: **Nigerian Agricultural Insurance Corporation (NAIC)**

## Interest
**Simple interest:** $I = \\dfrac{P \\times R \\times T}{100}$.
*A loan of ₦500 000 at 9% a year for 2 years: interest* $= \\dfrac{500\\,000 \\times 9 \\times 2}{100} = $ ₦90 000; *total repayment ₦590 000.*

## Requirements of lenders
feasibility study or business plan; **collateral** (land title, building) or **guarantors**; farm records; registration or membership of a group; evidence of experience; bank account and identification; sometimes an equity contribution and insurance.

## The 3 Rs of credit
**returns** (will the loan earn more than it costs?), **repayment capacity**, **risk-bearing ability**.

## Challenges
| Problem | Explanation |
|---|---|
| **lack of collateral** | most farmers have no land title |
| **high interest rates** | especially from money lenders and commercial banks |
| **riskiness of farming** | weather, pests, price changes — banks are reluctant |
| **small, scattered farms** | costly to administer small loans |
| **late disbursement** | loans arrive after planting time |
| **short repayment periods** | mismatch with crop cycles, especially tree crops |
| **bureaucracy** | long procedures and paperwork |
| **poor record keeping; illiteracy** | no evidence of performance |
| **diversion and default** | loans used for other purposes; unpaid |
| **few rural bank branches** | distance |

## Solutions
- form **co-operatives** and groups — **group lending** with joint liability
- **credit guarantee schemes** and risk-sharing
- **low-interest, single-digit** loans
- **timely disbursement**, in kind where suitable
- **agricultural insurance**
- **land titling**; acceptance of movable collateral and warehouse receipts
- **training** in record keeping and business planning
- **mobile and agent banking**
- **supervised credit** — extension officers monitor use
- linking credit to **guaranteed markets**

## Capital
**fixed capital** (land, buildings, machinery) and **working (circulating) capital** (seeds, fertiliser, wages). **Savings** and reinvested profit are the cheapest sources.

## Subsidy
A **subsidy** is **government payment that lowers the cost of inputs** to farmers — fertiliser, seeds, tractors.`,
        examples: `**Example 1.** Classify a loan for buying fertiliser. *Answer:* **Short-term credit**.

**Example 2.** Find the simple interest on ₦300 000 at 10% a year for 2 years. *Answer:* $\\tfrac{300\\,000 \\times 10 \\times 2}{100} = $ **₦60 000**.

**Example 3.** Why do banks hesitate to lend to farmers? *Answer:* Farming is **risky** and many farmers **lack collateral**.`,
      },
      questions: [
        ["E", "Money or inputs lent to a farmer to be repaid later, usually with interest, is", "agricultural credit", "subsidy", "grant", "dividend", "It supplements the farmer's own capital."],
        ["E", "A loan repayable within one year is", "short-term credit", "long-term credit", "medium-term credit", "a mortgage", "It finances seeds, fertiliser and labour."],
        ["E", "An asset pledged as security for a loan is", "collateral", "interest", "premium", "subsidy", "The lender may take it if the loan is not repaid."],
        ["M", "The source of credit that usually charges the highest interest is the", "money lender", "co-operative society", "Bank of Agriculture", "family", "The loan is quick but costly."],
        ["M", "A loan for buying land or establishing a plantation is", "long-term credit", "short-term credit", "seasonal credit", "petty cash", "Repayment extends beyond five years."],
        ["M", "The Central Bank scheme that guarantees a large share of bank loans made to farmers is the", "Agricultural Credit Guarantee Scheme Fund", "National Health Insurance Scheme", "Universal Basic Education programme", "National Housing Fund", "It reduces the risk borne by banks."],
        ["M", "The simple interest on ₦400 000 at 8% a year for 1 year is", "₦32 000", "₦3 200", "₦48 000", "₦320 000", "400 000 × 8 × 1 ÷ 100."],
        ["H", "A farmer borrows ₦600 000 at 10% simple interest a year for 3 years. The total amount to be repaid is", "₦780 000", "₦660 000", "₦180 000", "₦798 000", "Interest ₦180 000 plus principal."],
        ["H", "Group lending with joint liability helps smallholders mainly because it", "replaces the need for individual collateral", "raises the interest rate", "delays disbursement", "removes the need to repay", "Members guarantee one another."],
        ["H", "Government payment that lowers the price of fertiliser to farmers is a", "subsidy", "tariff", "levy", "royalty", "It reduces the cost of production."],
      ],
    },
    {
      week: 8,
      title: "Agricultural Policies in Nigeria",
      subtopics: ["Meaning and objectives of agricultural policy", "Government programmes", "Impacts of the programmes", "Problems and prospects"],
      objectives: ["Explain agricultural policy and its objectives", "Describe major government agricultural programmes", "Assess the impact of the programmes", "Discuss the problems of policy implementation"],
      lesson: {
        title: "Government and Agriculture",
        summary: "The plans and programmes by which governments have tried to develop Nigerian agriculture.",
        minutes: 40,
        notes: `## Meaning
An **agricultural policy** is a **statement of government's intentions and guidelines for the development of agriculture**. **Programmes** are the organised activities that carry the policy out.

## Objectives
**food security** — self-sufficiency in basic foods; **raw materials** for industry; **export and foreign exchange**; **employment**; higher **incomes** and rural development; diversification of the economy away from oil; modernisation of farming; protection of the environment.

## Major programmes
| Programme | Year | Main features |
|---|---|---|
| **National Accelerated Food Production Programme (NAFPP)** | 1972 | improved varieties and packages for rice, maize, cassava, sorghum, millet, wheat; demonstration plots |
| **Agricultural Development Projects (ADPs)** | from 1975 | World Bank-assisted; **extension services** (training and visit system), inputs, rural roads and water; state-wide in every state |
| **Operation Feed the Nation (OFN)** | 1976 | mass mobilisation — everyone encouraged to grow food; school and backyard farms |
| **River Basin Development Authorities (RBDAs)** | 1976 | **dams and irrigation**, water resources, flood control |
| **Green Revolution** | 1980 | replaced OFN; aimed at self-sufficiency through inputs, mechanisation and credit |
| **Directorate of Food, Roads and Rural Infrastructure (DFRRI)** | 1986 | rural feeder roads, water and electricity |
| **National Agricultural Land Development Authority (NALDA)** | 1991 | land clearing and development for small farmers |
| **National Fadama Development Project** (I, II, III) | from 1990s | small-scale **irrigation of low-lying flood plains**; community-driven investment |
| **National Special Programme for Food Security (NSPFS)** | 2002 | with FAO; improved technologies at community sites |
| **Presidential Initiatives** | 2000s | cassava, rice, vegetable oil, tree crops |
| **Agricultural Transformation Agenda (ATA)** | 2011 | agriculture **as a business**; value chains; **Growth Enhancement Support (GES)** — subsidised inputs through the **e-wallet** on mobile phones; staple crop processing zones |
| **Anchor Borrowers' Programme (ABP)** | 2015 | Central Bank; input loans to smallholders linked to **anchor** processors — rice, maize, wheat and others |
| **Agricultural Promotion Policy ("Green Alternative")** | 2016–2020 | building on ATA; closing gaps between demand and supply; quality for export |
| **National Agricultural Technology and Innovation Policy (NATIP)** | 2022–2027 | technology, innovation, mechanisation, digital agriculture |

Related institutions: **Bank of Agriculture**; **ACGSF**; **NAIC**; research institutes (NIHORT — horticulture, CRIN, NRCRI, IAR, NCRI); **land use** legislation (Land Use Act, 1978).

## Other policy instruments
**subsidies** on fertiliser and seeds; **import restrictions and tariffs** to protect local producers; **guaranteed minimum prices**; credit schemes; **extension services**; research funding; **quarantine and quality control**; rural infrastructure; farm settlement and youth schemes; strategic grain reserves.

## Impacts
### Positive
- introduction and spread of **improved varieties** and practices
- **extension** reaching farmers through ADPs
- **irrigation** and dry-season vegetable production (RBDAs, Fadama)
- **rural roads**, water and markets
- increased output of some crops — rice, cassava, maize
- greater **awareness** of agriculture as a business
- input delivery made more transparent (e-wallet)
- credit to smallholders
- jobs and incomes along value chains

### Limitations
many programmes were **short-lived** and replaced with each change of government; gains were not sustained; food imports persisted.

## Problems of implementation
- **policy inconsistency and discontinuity**
- **inadequate and late funding**
- **corruption** and diversion of inputs
- **poor monitoring and evaluation**
- little **involvement of farmers** in planning ("top-down")
- weak **extension** — too few agents
- poor **infrastructure** — roads, power, storage
- **land tenure** problems
- late delivery of inputs
- insecurity in farming areas
- loan default
- political interference

## Prospects and recommendations
continuity of good programmes; adequate, timely funding; farmer participation; strengthening extension and research; rural infrastructure; private-sector partnership; **youth and women** in agriculture; digital tools; security of farms; value-chain approach; honest monitoring.

## Relevance to horticulture
irrigation schemes, Fadama, input subsidies, credit, NIHORT varieties, cold-chain and processing investments and export promotion all shape opportunities for fruit and vegetable growers.`,
        examples: `**Example 1.** What was Operation Feed the Nation? *Answer:* A **1976 programme mobilising all Nigerians to grow food**.

**Example 2.** State the main function of the River Basin Development Authorities. *Answer:* Provision of **dams and irrigation** and development of water resources.

**Example 3.** Give two problems of agricultural programmes in Nigeria. *Answer:* **Policy inconsistency** and **inadequate funding**.`,
      },
      questions: [
        ["E", "A statement of government's intentions and guidelines for developing agriculture is an", "agricultural policy", "enterprise budget", "farm diary", "extension bulletin", "Programmes carry it out."],
        ["E", "Operation Feed the Nation was launched in", "1976", "1960", "1999", "2015", "It mobilised citizens to grow food."],
        ["E", "The bodies established to provide dams and irrigation are the", "River Basin Development Authorities", "Marketing Boards", "Agricultural Development Projects", "Farm Settlements", "They develop water resources."],
        ["M", "The programme that replaced Operation Feed the Nation in 1980 was the", "Green Revolution", "Fadama project", "Anchor Borrowers' Programme", "Agricultural Transformation Agenda", "It aimed at self-sufficiency in food."],
        ["M", "The programme best known for providing extension services with World Bank assistance is the", "Agricultural Development Project", "Operation Feed the Nation", "DFRRI", "NALDA", "ADPs used the training and visit system."],
        ["M", "The project that promotes small-scale irrigation of low-lying flood plains is", "Fadama", "OFN", "NAFPP", "DFRRI", "Fadama means flood plain in Hausa."],
        ["M", "The Anchor Borrowers' Programme is run by the", "Central Bank of Nigeria", "Federal Ministry of Works", "Nigerian Ports Authority", "National Universities Commission", "It gives input loans to smallholders linked to processors."],
        ["H", "Under the Agricultural Transformation Agenda, subsidised inputs reached farmers through", "an electronic wallet on mobile phones", "marketing boards", "town criers", "ration cards", "The Growth Enhancement Support scheme used the e-wallet."],
        ["H", "The agency set up in 1986 to provide rural feeder roads, water and electricity was", "DFRRI", "NALDA", "NAFPP", "NSPFS", "Directorate of Food, Roads and Rural Infrastructure."],
        ["H", "The main reason many Nigerian agricultural programmes failed to sustain their gains is", "policy inconsistency with changes of government", "excessive rainfall", "too many extension agents", "lack of land", "Programmes were abandoned and replaced before maturing."],
      ],
    },
    {
      week: 9,
      title: "Agricultural Marketing Boards",
      subtopics: ["Meaning and history", "Functions and roles", "Limitations and abolition", "Marketing after the boards"],
      objectives: ["Explain marketing boards and their history in Nigeria", "State their functions", "Discuss their limitations and why they were abolished", "Describe the marketing of produce after the boards"],
      lesson: {
        title: "The Marketing Boards",
        summary: "The government agencies that once controlled the buying and export of Nigeria's cash crops.",
        minutes: 40,
        notes: `## Agricultural marketing
**Agricultural marketing** covers **all the activities involved in moving farm produce from the producer to the consumer**: assembling, grading, processing, packaging, storage, transportation, financing, risk bearing, advertising, selling.
**Marketing agents:** producers, **middlemen** (assemblers, wholesalers, retailers), co-operatives, commodity boards, processors, exporters.

## Marketing boards
A **marketing board** was a **government agency with the legal power to buy scheduled export crops from farmers at fixed prices and to sell them abroad**. It had a **monopoly** of the export of those crops.

## History in Nigeria
- **1947:** the **Nigerian Cocoa Marketing Board** was established by the colonial government.
- **1949:** boards for **groundnut, oil palm produce and cotton**.
- **1954:** reorganised into **Regional Marketing Boards** (Western, Eastern, Northern, later Mid-West), each handling all scheduled crops of its region.
- **1977:** replaced by seven national **Commodity Boards** — cocoa, groundnut, cotton, palm produce, rubber, grains, and tuber and root crops.
- **1986:** **abolished** under the **Structural Adjustment Programme (SAP)**; produce marketing was liberalised.

## How they worked
The board announced a **producer price** before each season; **licensed buying agents (LBAs)** bought the crop from farmers at buying stations at that price; produce was **graded** by produce inspectors, stored, and shipped; the board sold on the world market and kept the difference as **trading surplus**.

## Functions and roles
1. **Buying** scheduled crops from farmers at **fixed, guaranteed prices**.
2. **Price stabilisation** — protecting farmers from fluctuations in world prices by paying a steady price.
3. **Providing an assured market**.
4. **Exporting** produce and earning foreign exchange.
5. **Quality control** — grading and standardisation; produce inspection.
6. **Storage** and transportation of produce.
7. **Financing research** on the crops.
8. **Supplying inputs** — improved seedlings, chemicals, sprayers — often subsidised.
9. **Granting loans** and scholarships; funding development.
10. **Revenue for government** — surpluses financed roads, schools, universities and industries (regional development corporations).
11. Licensing and supervising buying agents.
12. Providing market information and extension support.

## Limitations
- **low producer prices** — farmers received far less than world prices; the boards became instruments of **taxation**
- surpluses were **diverted** to non-agricultural projects rather than stabilising prices
- **disincentive to production** — farmers neglected or abandoned cocoa, groundnut and palm
- **smuggling** of produce to neighbouring countries for better prices
- **inefficiency and high overhead costs**
- **corruption** and malpractice by officials and buying agents — under-weighing, cheating on grades, delayed payment
- **monopoly** — no competition; farmers had no alternative buyer
- **late payment** of farmers
- **political interference**
- limited attention to **food crops** before 1977
- inadequate storage and transport; losses
- fixed prices unresponsive to quality differences and market changes

## Abolition and its effects
In 1986 the boards were scrapped; private traders and exporters could buy directly.
**Positive:** higher prices to farmers at first; competition; revival of interest in export crops.
**Negative:** **price instability**; decline in **quality control** — adulteration and loss of the premium for Nigerian cocoa; exploitation by middlemen; no organised input supply or research funding; farmers exposed to world-market risks.

## Marketing after the boards
- **private produce merchants and exporters**; licensed buying agents of companies
- **farmers' co-operatives** — bulk selling
- **commodity associations** — e.g. cocoa, cashew, ginger associations
- **commodity exchanges** — organised trading of graded produce with **warehouse receipts** (e.g. AFEX; the Nigeria Commodity Exchange)
- **Nigerian Export Promotion Council (NEPC)** — promotes non-oil exports
- **Federal Produce Inspection Service; NAQS; SON; NAFDAC** — quality and standards
- **contract farming** and off-take agreements with processors
- calls for new **commodity boards** to guarantee minimum prices without monopoly

## Problems of agricultural marketing today
poor roads and transport; inadequate storage and processing; many middlemen; lack of uniform grades and measures; price fluctuation; poor market information; perishability; inadequate finance.

## Improving marketing
rural roads; storage and cold chain; co-operatives; standard weights and grades; market information systems; processing; guaranteed minimum prices; commodity exchanges.`,
        examples: `**Example 1.** What was a marketing board? *Answer:* A **government agency with monopoly power to buy scheduled export crops at fixed prices** and sell them abroad.

**Example 2.** In which year were Nigeria's commodity boards abolished? *Answer:* **1986**, under the Structural Adjustment Programme.

**Example 3.** Give two limitations of the marketing boards. *Answer:* **Low prices paid to farmers** and **corruption among buying agents**.`,
      },
      questions: [
        ["E", "A government agency that bought export crops from farmers at fixed prices was a", "marketing board", "co-operative society", "commercial bank", "research institute", "It had a monopoly of the export of scheduled crops."],
        ["E", "The first marketing board in Nigeria, set up in 1947, handled", "cocoa", "yam", "rice", "tomato", "Others followed in 1949."],
        ["E", "Nigeria's commodity boards were abolished in", "1986", "1960", "1977", "1999", "Marketing was liberalised under SAP."],
        ["M", "A major function of the marketing boards was", "stabilising prices paid to farmers", "building rural hospitals only", "conducting elections", "importing food", "They announced a fixed producer price each season."],
        ["M", "The firms and individuals appointed to buy produce on behalf of the boards were", "licensed buying agents", "extension agents", "produce inspectors only", "auctioneers", "They bought at the buying stations."],
        ["M", "The exclusive right of the boards to export scheduled crops is described as a", "monopoly", "subsidy", "quota for farmers", "co-operative", "No other body could export those crops."],
        ["M", "Farmers smuggled produce to neighbouring countries during the board era mainly because", "the boards paid low prices", "roads were too good", "there was no demand abroad", "produce was not graded", "Better prices were available across the border."],
        ["H", "The policy under which the commodity boards were scrapped was the", "Structural Adjustment Programme", "Green Revolution", "Operation Feed the Nation", "Land Use Act", "It liberalised trade and removed government monopolies."],
        ["H", "One negative effect of abolishing the boards was", "a decline in quality control of export produce", "the end of all cocoa farming", "lower world prices", "a ban on private exporters", "Unregulated buying led to adulteration and loss of quality premium."],
        ["H", "A modern institution that provides organised trading of graded produce backed by warehouse receipts is a", "commodity exchange", "marketing board", "thrift society", "farm settlement", "It gives transparent prices without a government monopoly."],
      ],
    },
    {
      week: 10,
      title: "Project Planning for the Final Horticultural Project",
      subtopics: ["Choosing a project", "Planning the project", "The project proposal", "Budget and work plan"],
      objectives: ["Choose a suitable crop or horticultural project", "Plan the stages of the project", "Write a project proposal", "Prepare a budget and work plan"],
      lesson: {
        title: "Planning the Final Project",
        summary: "Selecting and planning a practical crop or horticultural project before it begins.",
        minutes: 40,
        notes: `## The project
A **project** is a **planned piece of work with a definite aim, time frame and resources**. The final-year project lets the student apply what has been learnt to a real crop enterprise or investigation.

## Choosing a project
**Criteria:** relevance to horticulture; **feasible** within the term (short-duration crops); affordable; land, water and materials available; safe; measurable results; of interest and benefit to the school or community.

### Suitable projects
- raising a **vegetable crop** from nursery to harvest — tomato, pepper, okra, amaranth, ugu, cucumber, lettuce
- **comparing treatments** — organic manure against NPK; mulched against unmulched plots; different spacings; staked against unstaked tomato
- a **nursery** of ornamental or fruit-tree seedlings; **budding / grafting** of citrus or mango
- a simple **hydroponic (Kratky or NFT)** unit
- **compost** production and testing
- **sack / container** gardening
- **mushroom** cultivation
- **drip irrigation** set-up
- **post-harvest** study — storing tomatoes in an evaporative cooler against ordinary shade
- **value addition** — drying vegetables, plantain chips, zobo
- a **market survey** of vegetable prices
- landscaping a section of the school

## Planning steps
1. **identify the problem or opportunity**
2. state the **aim and objectives** (**SMART** — specific, measurable, achievable, relevant, time-bound)
3. review what is known
4. choose the **site** — sunlight, soil, water, security
5. decide the **design** — plots, treatments, **replication**
6. list **materials** and **cost** them
7. draw the **work plan**
8. decide **what data to collect and how**
9. assign **roles** in the group
10. identify **risks**
11. obtain **approval**

## Simple experimental design
- **treatment** — what is varied (e.g. type of manure)
- **control** — the plot **without the treatment**, for comparison
- **replication** — repeating each treatment on several plots to reduce the effect of chance
- **randomisation** — allocating treatments to plots by chance
- **uniformity** — same variety, spacing, watering and weeding for all plots, so that only the treatment differs
- **variables:** independent (the treatment), dependent (what is measured), controlled (kept constant)

## Data to collect
germination percentage; days to emergence, flowering and harvest; **plant height**; number of leaves and fruits; **yield (weight)**; pest and disease incidence; costs and income; rainfall.
$$\\text{germination \\%} = \\frac{\\text{seeds germinated}}{\\text{seeds sown}} \\times 100$$
**Plant population** per hectare $= \\dfrac{10\\,000\\ \\text{m}^2}{\\text{spacing (m)} \\times \\text{spacing (m)}}$: at 0.6 m × 0.5 m → 33 333 plants.

## The proposal
| Section | Content |
|---|---|
| **title** | e.g. "Effect of poultry manure on the yield of okra" |
| **introduction** | background; statement of the problem |
| **aim and objectives** | what is to be achieved |
| **justification** | why it matters |
| **materials and methods** | site, design, treatments, cultural practices, data collection |
| **work plan** | timetable |
| **budget** | costs |
| **expected results** | |
| **references** | |

## Budget — example (four beds of okra)
seeds ₦1 500; poultry manure ₦4 000; NPK ₦3 000; tools hire ₦2 500; watering cans ₦5 000; twine, pegs, labels ₦1 500; notebook and printing ₦2 500 → ₦20 000; **contingency 10%** ₦2 000 → **₦22 000**.

## Work plan — example
| Week | Activity |
|---|---|
| 1 | proposal, approval, site clearing |
| 2 | bed making, manure application, planting |
| 3–4 | thinning, weeding, watering, first data |
| 5–6 | fertiliser, pest control, data |
| 7–10 | harvesting and weighing |
| 11 | analysis and report |
| 12 | presentation |

## Risks
drought (plan irrigation); pests (monitor; IPM); theft or grazing (fencing, supervision); holidays (watering roster); poor germination (sow extra; test seed).

## Records
**field notebook** — dates, operations, observations, measurements; photographs.

## Ethics and safety
honest data; acknowledgement of sources; safe use of tools and chemicals; protective clothing.`,
        examples: `**Example 1.** What is a control plot? *Answer:* A plot that **receives no treatment**, used for comparison.

**Example 2.** 180 of 200 seeds sown germinated. Find the germination percentage. *Answer:* $\\tfrac{180}{200} \\times 100 = \\mathbf{90\\%}$.

**Example 3.** Find the plant population per hectare at a spacing of 1 m × 0.5 m. *Answer:* $10\\,000 \\div 0.5 = \\mathbf{20\\,000}$ plants.`,
      },
      questions: [
        ["E", "A planned piece of work with a definite aim, time frame and resources is a", "project", "pastime", "routine chore", "holiday", "It has a beginning and an end."],
        ["E", "The plot in an experiment that receives no treatment is the", "control", "replicate", "border", "nursery", "It is the basis for comparison."],
        ["E", "A daily record of field operations and observations is kept in a", "field notebook", "cash register", "seed catalogue", "price list", "It supplies the data for the report."],
        ["M", "Repeating each treatment on several plots is", "replication", "randomisation", "rotation", "rationing", "It reduces the effect of chance differences."],
        ["M", "Out of 250 seeds sown, 200 germinated. The germination percentage is", "80%", "50%", "125%", "20%", "200 ÷ 250 × 100."],
        ["M", "In an experiment comparing poultry manure with NPK on okra, the yield of okra is the", "dependent variable", "independent variable", "controlled variable", "treatment", "It is what is measured."],
        ["M", "A good project objective should be specific, measurable, achievable, relevant and", "time-bound", "technical", "traditional", "theoretical", "The last letter of SMART."],
        ["H", "The plant population per hectare at a spacing of 0.5 m × 0.4 m is", "50 000", "20 000", "5 000", "200 000", "10 000 ÷ (0.5 × 0.4)."],
        ["H", "A project's materials cost ₦30 000 and a 10% contingency is added. The total budget is", "₦33 000", "₦30 300", "₦40 000", "₦27 000", "30 000 × 1.10. Answer: ₦33 000."],
        ["H", "In a manure trial, all plots are given the same variety, spacing and watering so that", "only the treatment differs between plots", "the work is harder", "yields are equal", "no control is needed", "Differences in results can then be attributed to the treatment."],
      ],
    },
  ],
};

export const ss3t3: TermPlan = {
  classCode: "SS3",
  term: 3,
  topics: [
    {
      week: 2,
      title: "Project Execution: Practical Crop and Horticultural Projects",
      subtopics: ["Site preparation and planting", "Crop maintenance", "Field work, demonstrations and data collection", "Harvesting and handling"],
      objectives: ["Prepare a site and establish a crop", "Carry out routine cultural practices", "Collect field data and take part in demonstrations", "Harvest and handle produce correctly"],
      lesson: {
        title: "Carrying Out the Field Project",
        summary: "The field operations of a vegetable project from land preparation to harvest.",
        minutes: 80,
        notes: `## Site preparation
- **clear** the vegetation; remove stumps and debris
- **mark out** plots and beds with pegs, line and tape; leave paths (about 0.5 m)
- **till** — dig or plough; break clods; level
- make **beds** — **raised beds** for the rainy season and heavy soils; **sunken beds** for the dry season and sandy soils
- incorporate **organic manure** one to two weeks before planting
- **label** plots with treatment and date

## Nursery practice
For small-seeded crops (tomato, pepper, garden egg, cabbage, lettuce, onion):
- **seed bed, seed boxes or seed trays** with sterilised, fine soil mix (topsoil : manure : sand)
- sow thinly in drills; cover lightly; **shade**; water gently with a fine rose
- **thin** crowded seedlings; control damping-off (avoid overwatering; sterilise soil)
- **harden off** — gradually reduce shade and water for one to two weeks before transplanting
- ready in about **4–6 weeks** (4–6 true leaves)

## Planting
- **direct sowing** (okra, amaranth, cucumber, ugu, carrot) or **transplanting**
- transplant in the **evening or on a cool, cloudy day**; lift with a ball of earth; plant at the same depth; firm the soil; **water immediately**; shade if needed
- correct **spacing** — tomato about 60 × 45 cm; pepper 60 × 60 cm; okra 60 × 30 cm; cabbage 60 × 45 cm
- **supply** missing stands within a week

## Maintenance (cultural practices)
| Practice | Notes |
|---|---|
| **watering / irrigation** | morning or evening; watering can, hose, drip; avoid waterlogging |
| **thinning** | remove excess seedlings to the required number per stand |
| **weeding** | hand pulling, hoeing; mulching suppresses weeds |
| **mulching** | dry grass or plastic; conserves moisture; keeps fruits clean |
| **fertiliser / manure application** | basal organic manure; **side dressing or ring application** of NPK two to three weeks after planting; top dressing with nitrogen; never on wet leaves |
| **staking and training** | tomato, cucumber, yam, ugu — keeps fruits off the ground; improves light and air |
| **pruning** | removal of side shoots (tomato), diseased leaves |
| **earthing up** | soil drawn round the base |
| **pest and disease control** | regular scouting; IPM — hand picking, nets, neem, resistant varieties, sanitation; chemicals only when necessary, with protective clothing and observing the **pre-harvest interval** |

### Common pests and diseases of vegetables
aphids, whiteflies, fruit worms, leaf miners (*Tuta absoluta* on tomato), flea beetles on okra, cutworms, nematodes; **damping-off**, bacterial wilt, leaf spot, blight, mosaic viruses, powdery mildew.

## Field work and demonstrations
**Demonstrations** show a skill step by step: making a nursery; transplanting; compost making; **budding and grafting**; layering; calibrating a knapsack sprayer; installing drip lines; pruning; soil sampling.
**Field visits:** horticultural farms, research institutes (NIHORT), nurseries, greenhouses, markets, processing plants.

### Propagation demonstrations
- **budding** — a single bud of the desired variety (scion) inserted under the bark of a rootstock (T-budding in citrus)
- **grafting** — a shoot (scion) joined to a rootstock (wedge/cleft grafting in mango)
- **layering / marcotting** — rooting a branch while still attached
- **cuttings** — stem pieces rooted (hibiscus, cassava, sugar cane)
Advantages of vegetative propagation: **true-to-type, earlier fruiting, uniform**.

## Data collection
measure at **regular intervals** on **tagged sample plants** from the middle rows (avoid border plants): plant height (cm), number of leaves, stem girth, days to 50% flowering, number and weight of fruits, pest and disease scores. Record in **tables** with dates and units.
**Mean** = sum of values ÷ number of plants. *Heights 30, 34, 32, 36 cm: mean* $= 132 \\div 4 = 33$ cm.
**Yield per hectare** $= \\dfrac{\\text{plot yield (kg)}}{\\text{plot area (m}^2)} \\times 10\\,000$. *12 kg from a 6 m² bed gives* $20\\,000$ kg/ha $= 20$ t/ha.

## Harvesting
harvest at **correct maturity** (tomato at breaker to red-ripe according to market distance; okra pods young and tender; leafy vegetables before flowering); in the **cool of the morning or evening**; with clean knives or by hand; handle gently; keep in the shade; **weigh and record** each harvest by plot.

## Post-harvest handling
sort, grade, clean, pack in ventilated crates, cool, market promptly or process.

## Safety
proper use of cutlasses and hoes; boots and gloves; care with chemicals — read labels, do not eat or drink while spraying, wash afterwards, store safely.`,
        examples: `**Example 1.** What is hardening off? *Answer:* **Gradually exposing nursery seedlings to sun and less water** before transplanting, to toughen them.

**Example 2.** A 10 m² plot yields 25 kg of okra. Find the yield per hectare. *Answer:* $\\tfrac{25}{10} \\times 10\\,000 = 25\\,000$ kg $= \\mathbf{25}$ **t/ha**.

**Example 3.** When is the best time to transplant seedlings? *Answer:* In the **evening or on a cool, cloudy day**.`,
      },
      questions: [
        ["E", "The best time of day to transplant vegetable seedlings is the", "evening", "hot afternoon", "midday", "mid-morning in full sun", "Cool conditions reduce wilting."],
        ["E", "Removing excess seedlings from a stand is", "thinning", "supplying", "mulching", "staking", "It reduces competition among plants."],
        ["E", "Providing supports for tomato plants is", "staking", "pruning", "earthing up", "thinning", "It keeps fruits off the ground."],
        ["M", "Gradually exposing nursery seedlings to sunlight and less water before transplanting is", "hardening off", "pricking out", "damping off", "topping", "It prepares them for field conditions."],
        ["M", "Raised beds are most suitable for vegetables grown in", "the rainy season on heavy soils", "the dry season on sandy soils", "swamps only", "greenhouses only", "They improve drainage."],
        ["M", "Inserting a single bud of a desired variety under the bark of a rootstock is", "budding", "layering", "cutting", "division", "T-budding is common in citrus."],
        ["M", "Sample plants for measurement should be taken from the", "middle rows of the plot", "border rows", "nursery", "neighbouring plot", "Border plants are affected by edge conditions."],
        ["H", "A bed of 8 m² produced 20 kg of tomatoes. The yield per hectare is", "25 tonnes", "2.5 tonnes", "16 tonnes", "250 tonnes", "20 ÷ 8 × 10 000 = 25 000 kg."],
        ["H", "The heights of five sample plants are 40, 44, 42, 46 and 48 cm. The mean height is", "44 cm", "42 cm", "46 cm", "220 cm", "220 ÷ 5. Answer: 44 cm."],
        ["H", "A nursery disease in which seedlings rot at soil level and fall over is", "damping-off", "blossom-end rot", "leaf curl", "smut", "It is favoured by overwatering and crowded seedlings."],
      ],
    },
    {
      week: 4,
      title: "Project Report Writing and Presentation Skills",
      subtopics: ["Structure of the project report", "Presenting and analysing data", "Oral defence", "Use of ICT in presentation"],
      objectives: ["Write a project report in the proper format", "Present and analyse project data", "Defend the project orally", "Use ICT tools in presenting the project"],
      lesson: {
        title: "Reporting and Defending the Project",
        summary: "Documenting the field project and presenting it to an audience.",
        minutes: 80,
        notes: `## The project report
A **report** is a **formal written account of what was done, how, with what results and conclusions**.

### Structure
| Section | Content |
|---|---|
| **title page** | title, student's name, class, school, date |
| **acknowledgement** | thanks to those who helped |
| **abstract** | brief summary of the whole work |
| **table of contents** | |
| **1. introduction** | background; problem; aim and objectives; justification |
| **2. literature review** | what is known about the crop and the practice studied |
| **3. materials and methods** | location; soil and climate; design, treatments and plot size; variety; cultural practices; data collected and how |
| **4. results** | tables, graphs, photographs |
| **5. discussion** | meaning of the results; comparison with other findings; reasons |
| **6. conclusion and recommendations** | what was found; advice to farmers; further work |
| **references** | sources cited |
| **appendices** | raw data, field layout, cost records |

### Style
clear, simple, formal; **past tense**; **scientific names** in italics (*Abelmoschus esculentus*); **units** (cm, kg, t/ha); numbered headings; labelled tables and figures.

## Presenting data
### Tables
title **above** the table; columns with units.
| Treatment | Mean plant height (cm) | Yield (t/ha) |
|---|---|---|
| control | 42 | 6.0 |
| NPK | 58 | 9.5 |
| poultry manure | 61 | 10.2 |
### Graphs
- **bar chart** — comparing treatments
- **line graph** — growth over time
- **pie chart** — share of cost items
Label the **axes**, units and title; captions **below** figures.

## Analysing data
- **mean** = sum ÷ number
- **percentage increase** $= \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$ — yield rising from 6.0 to 10.2 t/ha is an increase of 70%
- **range** = highest − lowest
- compare treatments with the **control**
- **cost–benefit:** revenue, total cost, **profit**, **benefit–cost ratio** = revenue ÷ cost
*Revenue ₦48 000; cost ₦30 000: profit ₦18 000; ratio 1.6 — profitable.*

## Discussion
explain **why** results came out as they did — nutrient supply, moisture, pests, weather; note problems (drought, pest attack) and their effect; state the limitations.

## Conclusion and recommendations
answer each objective; recommend the best practice; suggest improvements.

## References
author, year, title, publisher or website and date accessed; consistent style; no copying without acknowledgement (**plagiarism**).

## Oral defence
A **presentation to a panel, followed by questions**.
### Structure (about 10 minutes)
title → problem and objectives → methods (with photographs and layout) → results (graphs) → discussion → conclusion and recommendations → questions.
### Delivery
rehearse and time; speak clearly; face the audience; **eye contact**; do not read slides; use the **specimens** — produce, plants, compost; keep to time.
### Answering questions
listen; think; answer directly and honestly; refer to your data; admit what you do not know.
**Likely questions:** *Why this crop? Why this spacing? What was your control? How did you control pests? What challenges did you face? Was it profitable? What would you do differently?*

## Use of ICT
- **word processor** — typing and formatting the report
- **spreadsheet** — data entry, **means, totals and graphs** by formula
- **presentation software** — slides: one idea per slide; few words; large font (not less than about 24 pt); clear photographs and charts; consistent design
- **digital camera / phone** — photographs and short videos of each stage
- **projector**; backup on a flash drive
- **internet** — literature, weather data, market prices
- **farm and mapping apps** — plot area, GPS location

## Assessment criteria
understanding of the work; correctness of method; quality of data and analysis; organisation and neatness of the report; presentation and response to questions; teamwork; originality.

## After the defence
make corrections; submit the final bound copy; share lessons with the school farm.`,
        examples: `**Example 1.** In which section of the report are tables and graphs placed? *Answer:* The **results** section.

**Example 2.** Yield rose from 8 t/ha to 10 t/ha. Find the percentage increase. *Answer:* $\\tfrac{2}{8} \\times 100 = \\mathbf{25\\%}$.

**Example 3.** Revenue ₦60 000; cost ₦40 000. Find the benefit–cost ratio. *Answer:* $60\\,000 \\div 40\\,000 = \\mathbf{1.5}$.`,
      },
      questions: [
        ["E", "A formal written account of a project and its results is a", "report", "proposal only", "receipt", "label", "It documents what was done and found."],
        ["E", "The section of a report that describes the site, design and practices used is", "materials and methods", "abstract", "acknowledgement", "references", "It allows the work to be repeated."],
        ["E", "Growth of plants measured every week is best displayed in a", "line graph", "pie chart", "paragraph", "title page", "It shows change over time."],
        ["M", "The title of a table in a report is placed", "above the table", "below the table", "in the appendix", "on the last page", "Figure captions go below."],
        ["M", "Scientific names of crops in a report are written in", "italics", "capital letters throughout", "quotation marks", "bold red", "The genus begins with a capital letter."],
        ["M", "The yield of a crop increased from 5 t/ha to 7 t/ha. The percentage increase is", "40%", "20%", "28.6%", "140%", "2 ÷ 5 × 100. Answer: 40%."],
        ["M", "Software suitable for calculating means and drawing graphs of project data is a", "spreadsheet", "media player", "web browser", "paint program", "Formulas compute totals and averages."],
        ["H", "A project earns ₦90 000 from produce at a total cost of ₦60 000. The benefit–cost ratio is", "1.5", "0.67", "30 000", "2.5", "90 000 ÷ 60 000."],
        ["H", "The section of a report that explains why the results came out as they did is the", "discussion", "results", "title page", "table of contents", "It interprets the findings."],
        ["H", "In an oral defence, a student asked something he does not know should", "say so honestly and suggest how to find out", "guess confidently", "change the subject", "remain silent", "Honesty shows integrity and understanding of limits."],
      ],
    },
    {
      week: 9,
      title: "Review of Practical Sessions",
      subtopics: ["Tools, implements and their maintenance", "Soil and planting materials", "Identification of specimens", "Practical skills and calculations"],
      objectives: ["Identify farm tools and state their uses and maintenance", "Carry out simple soil tests and identify planting materials", "Identify crops, weeds, pests and fertilisers", "Perform practical skills and calculations"],
      lesson: {
        title: "Hands-On Revision",
        summary: "The specimens, skills and calculations examined in the practical paper.",
        minutes: 80,
        notes: `## Tools and implements
| Tool | Use |
|---|---|
| **cutlass (machete)** | clearing, cutting, harvesting |
| **hoe** (West African, Indian) | tilling, ridging, weeding |
| **spade; shovel** | digging; lifting soil and manure |
| **garden fork** | turning soil and compost |
| **rake** | levelling beds; gathering debris |
| **hand trowel** | transplanting seedlings |
| **hand fork** | loosening soil round plants; light weeding |
| **dibber** | making holes for seeds and seedlings |
| **watering can** | watering nursery and beds |
| **secateurs** | pruning; cutting scions |
| **budding / grafting knife** | budding and grafting |
| **shears** | trimming hedges |
| **pruning saw** | cutting branches |
| **wheelbarrow** | carrying materials |
| **garden line and pegs; measuring tape** | marking out |
| **knapsack sprayer** | applying pesticides and foliar feeds |
| **sickle; harvesting knife; go-to-hell** | harvesting |
| **head pan** | carrying |
**Implements:** plough, harrow, ridger, planter, cultivator; rotavator; mower.

### Maintenance
clean after use; **dry** to prevent rust; **oil or grease** metal parts; **sharpen** cutting edges; replace broken handles; store in a cool, dry tool shed; rinse sprayers three times after use.

## Soil
- **types:** **sandy** (coarse, drains fast, poor in nutrients), **clay** (fine, sticky, holds water, poorly aerated), **loam** (best for crops)
- **feel test:** sandy — gritty, will not form a ball; clay — sticky, forms a ribbon; loam — forms a ball that crumbles
- **sedimentation test:** shake soil in water — gravel and sand settle first, then silt, clay last; humus floats
- **pH:** test paper or meter; most vegetables prefer **6.0–7.0**; **lime** raises pH of acid soils
- **soil profile:** topsoil (A horizon), subsoil (B), parent material (C)
- **soil sampling:** auger; several spots in a zigzag; 0–15 cm; mix into a composite sample

## Planting materials
**seeds** (maize, okra, tomato); **stem cuttings** (cassava, sugar cane, hibiscus); **suckers** (plantain, banana, pineapple); **tubers / setts** (yam); **bulbs** (onion); **rhizomes** (ginger); **corms** (cocoyam); **vines** (sweet potato); **budded and grafted seedlings** (citrus, mango); **crowns and slips** (pineapple); **runners** (strawberry).

### Seed tests
- **viability / germination test:** count seeds germinating on moist paper — percentage
- **flotation test:** good seeds sink
- **seed rate** (kg/ha) $= \\dfrac{\\text{plant population} \\times \\text{seeds per stand} \\times \\text{weight of one seed}}{\\text{germination fraction}}$

## Identification of specimens
- **crops:** by leaves, fruits, seeds — vegetables (leafy, fruit, root), fruits, spices, ornamentals
- **weeds:** **grasses** (spear grass *Imperata*, guinea grass), **sedges** (nut grass *Cyperus* — triangular stem), **broad-leaved** (*Tridax*, siam weed *Chromolaena*, goat weed *Ageratum*, pigweed *Amaranthus spinosus*)
- **pests:** **biting and chewing** (grasshoppers, caterpillars, beetles); **piercing and sucking** (aphids, whiteflies, mealybugs, cotton stainers); **boring** (stem borers, weevils); nematodes; rodents; birds
- **fertilisers:** **urea** (46% N — white granules/prills), **NPK 15-15-15** (compound; grey or mixed granules), **single superphosphate** (P; grey powder/granules), **muriate of potash** (K; reddish or white crystals), **CAN**; organic manures — compost, poultry, farmyard, green manure
- **pesticides:** insecticides, fungicides, herbicides, nematicides, rodenticides — read the **label**: active ingredient, rate, safety colour band, pre-harvest interval

## Practical skills
making a nursery bed; transplanting; **budding and grafting**; **layering**; staking and pruning; compost making (layers; moisture; turning); mulching; **calibrating a sprayer**; preparing a seed box mix; potting; harvesting and grading.

## Calculations
- **plant population** $= \\dfrac{\\text{area}}{\\text{spacing}}$: 1 ha at 1 m × 1 m = 10 000 plants
- **fertiliser needed:** to supply 60 kg N/ha with urea (46% N): $60 \\div 0.46 \\approx 130$ kg urea/ha
- **nutrient in a bag:** a 50 kg bag of NPK 15-15-15 contains $0.15 \\times 50 = 7.5$ kg each of N, P₂O₅ and K₂O
- **germination %**; **yield per hectare**; **gross margin**
- **spray mixing:** label rate 40 ml per 20 litres → a 15-litre sprayer needs 30 ml
- **area:** rectangle = length × breadth; 1 ha = 10 000 m²

## In the practical examination
identify specimens **precisely** (common and scientific name where known); state **uses, features and maintenance**; draw and label neatly; show working; be concise.`,
        examples: `**Example 1.** How much urea (46% N) supplies 46 kg of nitrogen? *Answer:* $46 \\div 0.46 = \\mathbf{100}$ **kg**.

**Example 2.** State two ways of maintaining a cutlass. *Answer:* **Clean and oil it after use** and **sharpen the blade**.

**Example 3.** A label recommends 50 ml of chemical per 20 litres of water. How much is needed for a 16-litre sprayer? *Answer:* $50 \\times \\tfrac{16}{20} = \\mathbf{40}$ **ml**.`,
      },
      questions: [
        ["E", "The tool used for transplanting seedlings is the", "hand trowel", "rake", "pruning saw", "wheelbarrow", "It lifts seedlings with a ball of soil."],
        ["E", "The tool used for pruning small branches and cutting scions is a pair of", "secateurs", "pliers", "shears for hedges only", "tongs", "It makes clean cuts."],
        ["E", "The best soil for most crops is", "loam", "pure sand", "heavy clay", "gravel", "It holds water and nutrients yet drains well."],
        ["M", "Metal farm tools are oiled before storage in order to", "prevent rusting", "make them heavier", "sharpen them", "change their colour", "Oil keeps air and moisture from the metal."],
        ["M", "Plantain and pineapple are commonly propagated by", "suckers", "seeds", "bulbs", "rhizomes", "Suckers grow from the base of the parent plant."],
        ["M", "A weed with a triangular stem, such as nut grass, is a", "sedge", "grass", "broad-leaved weed", "parasitic weed", "Cyperus species are sedges."],
        ["M", "Aphids and whiteflies are classified as", "piercing and sucking insects", "biting and chewing insects", "boring insects", "nematodes", "They suck sap and transmit viruses."],
        ["H", "The quantity of urea (46% N) needed to supply 92 kg of nitrogen is", "200 kg", "42 kg", "100 kg", "46 kg", "92 ÷ 0.46. Answer: 200 kg."],
        ["H", "A 50 kg bag of NPK 20-10-10 contains nitrogen weighing", "10 kg", "20 kg", "5 kg", "2.5 kg", "20% of 50 kg. Answer: 10 kg."],
        ["H", "A pesticide label recommends 60 ml per 20 litres of water. For a 15-litre knapsack sprayer the amount required is", "45 ml", "60 ml", "80 ml", "30 ml", "60 × 15 ÷ 20. Answer: 45 ml."],
      ],
    },
    {
      week: 10,
      title: "WAEC and NECO Preparatory Classes: Key Topics and Examination Technique",
      subtopics: ["Crop production principles", "Horticultural crops and practices", "Modern technologies and agribusiness", "Examination technique"],
      objectives: ["Recall the principles of crop production", "Recall the production of major horticultural crops", "Summarise modern technologies and agribusiness topics", "Apply good technique in the examination"],
      lesson: {
        title: "Final Revision",
        summary: "A summary of the areas most likely to be examined, with advice on answering.",
        minutes: 80,
        notes: `## 1. Principles of crop production
### Classification of crops
- **by life cycle:** **annual** (maize, okra), **biennial** (carrot, cabbage, onion), **perennial** (cocoa, citrus, mango)
- **by use:** cereals, legumes, roots and tubers, vegetables, fruits, oil crops, beverages, spices, fibres, latex, forage
- **horticultural crops:** fruits, vegetables, ornamentals, spices

### Factors affecting production
**climatic** — rainfall, temperature, sunlight, wind, humidity; **edaphic** — soil texture, structure, pH, fertility; **biotic** — pests, diseases, weeds, pollinators; **economic** — capital, market, labour.

### Cultural practices
**pre-planting** (clearing, stumping, tillage, nursery); **planting** (spacing, depth, date, seed rate); **post-planting** (thinning, supplying, weeding, mulching, staking, pruning, fertilising, irrigation, pest control, harvesting).

### Cropping systems
**monocropping; mixed cropping; intercropping; crop rotation** (follow deep feeders with shallow feeders; include a legume; do not follow a crop with one of the same family); relay and alley cropping; mixed farming.

### Soil fertility
macronutrients (N, P, K, Ca, Mg, S) and micronutrients; deficiency symptoms — **N: yellowing of older leaves, stunting; P: purpling, poor roots; K: scorched margins**; organic manures and fertilisers; liming; nutrient cycles.

### Propagation
**sexual** (seed) and **asexual / vegetative** (cuttings, budding, grafting, layering, suckers, tissue culture). Seed **dormancy** broken by scarification, soaking, heat.

## 2. Horticultural crops — key facts
| Crop | Notes |
|---|---|
| **tomato** (*Solanum lycopersicum*) | nursery 4–5 weeks; staking; pests — fruit worm, *Tuta absoluta*; diseases — blight, bacterial wilt, blossom-end rot (calcium) |
| **pepper** (*Capsicum* spp.) | nursery; long harvest period |
| **okra** (*Abelmoschus esculentus*) | direct sown; harvest tender pods every 2–3 days |
| **amaranth, ugu (*Telfairia*), jute mallow** | leafy vegetables; repeated cutting |
| **onion** | bulbs; cool, dry season in the north; curing before storage |
| **citrus** | budded on rootstock (rough lemon); pests — fruit flies, scale; disease — gummosis |
| **mango; avocado; guava** | grafted for early, true-to-type fruiting |
| **pineapple** | suckers, slips, crowns; flowering induced with ethephon or carbide |
| **plantain and banana** | suckers (sword suckers best); desuckering; propping; black sigatoka |
| **pawpaw** | seed; male and female plants; fruits in under a year |
| **ornamentals** | hibiscus, ixora, bougainvillea, croton, lawn grasses; landscaping |

### Nursery and orchard practices
site selection; layout (square, triangular, rectangular, quincunx, contour); pruning; training; mulching; fruit thinning.

## 3. Crop protection
**pests** — by feeding habit; control: **physical, cultural, biological, chemical**; **IPM**. **Diseases** — fungal, bacterial, viral, nematode; control — resistant varieties, clean seed, rotation, sanitation, chemicals. **Weeds** — effects and control (manual, mechanical, cultural, chemical, biological); herbicides — selective and non-selective; pre- and post-emergence. **Safe use of pesticides.**

## 4. Post-harvest
harvesting indices; sorting, grading, packaging; storage — cold storage, evaporative coolers, barns, silos, cribs; processing — drying, canning, juice, paste; causes of loss.

## 5. Modern technologies
greenhouse and **fertigation**; **hydroponics** (NFT, DWC, wick, drip); **aeroponics** (misted roots); **aquaponics** (fish + plants; nitrification); **precision agriculture** (GPS, GIS, drones, sensors); **climate-smart** agriculture; **organic farming** and **permaculture**; tissue culture; biotechnology.

## 6. Agribusiness and economics
export crops — cocoa, cashew, kola; value chain and value addition; farm management, budgeting and records; agricultural finance and credit; policies and programmes — OFN, Green Revolution, ADPs, RBDAs, Fadama, ATA, Anchor Borrowers'; marketing boards — functions and abolition (1986); marketing channels; co-operatives; extension.

## 7. Calculations to practise
plant population; seed rate; fertiliser rates; germination percentage; yield per hectare; gross margin; simple interest; depreciation; percentage increase.

## Examination technique
### Theory / essay
- read all the questions; choose your best; plan time by marks
- obey **command words** — *define, list, state, explain, describe, distinguish, discuss*
- answer in **numbered points**; give **examples** — crop names, programmes, dates
- draw **labelled diagrams** where helpful (budding, NFT system, nitrogen cycle)
- show **working and units** in calculations
### Objective
eliminate wrong options; watch NOT and EXCEPT; do not leave blanks.
### Practical
identify precisely; give uses and maintenance; observe before answering; be brief and exact.

## Final advice
revise from tables and summaries; practise past-type questions under timed conditions; rest; arrive early with the required materials.`,
        examples: `**Example 1.** Classify okra, carrot and mango by life cycle. *Answer:* **Okra — annual; carrot — biennial; mango — perennial**.

**Example 2.** State the deficiency symptom of nitrogen. *Answer:* **Yellowing of the older leaves and stunted growth**.

**Example 3.** Give one rule of crop rotation. *Answer:* A crop should **not be followed by another of the same family**; include a **legume** in the rotation.`,
      },
      questions: [
        ["E", "A crop that completes its life cycle in one growing season is", "an annual", "a biennial", "a perennial", "an ephemeral tree", "Maize and okra are examples."],
        ["E", "Growing different crops in a definite sequence on the same land is", "crop rotation", "monocropping", "shifting cultivation", "bush burning", "It maintains fertility and breaks pest cycles."],
        ["E", "Which of these is a fruit vegetable?", "Tomato", "Amaranth", "Carrot", "Onion", "The fruit is the part eaten."],
        ["M", "Yellowing of the older leaves and stunted growth indicate deficiency of", "nitrogen", "calcium", "boron", "iron", "Nitrogen moves from old leaves to young ones."],
        ["M", "Citrus is commonly propagated by", "budding", "suckers", "bulbs", "corms", "A bud of the desired variety is placed on a rootstock."],
        ["M", "Combining cultural, biological, physical and chemical methods to manage pests is", "integrated pest management", "quarantine", "fumigation", "eradication only", "Chemicals are used only when necessary."],
        ["M", "A herbicide that kills certain weeds without harming the crop is", "selective", "non-selective", "contact for all plants", "a fungicide", "Non-selective herbicides kill all vegetation."],
        ["H", "Factors relating to the soil that affect crop production are described as", "edaphic", "climatic", "biotic", "economic", "They include texture, structure, pH and fertility."],
        ["H", "In a good crop rotation, a deep-rooted crop should be followed by", "a shallow-rooted crop", "another deep-rooted crop of the same family", "the same crop", "a fallow of weeds only", "Crops then draw nutrients from different soil layers."],
        ["H", "Flowering in pineapple can be induced uniformly by applying", "ethephon or calcium carbide", "urea", "lime", "muriate of potash", "They release ethylene or acetylene, which triggers flowering."],
      ],
    },
  ],
};
