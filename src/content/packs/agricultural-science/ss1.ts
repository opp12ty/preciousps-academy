import type { TermPlan } from "../types";

/** SS1 Agricultural Science — original Precious PS content aligned to the senior secondary syllabus (WAEC/NECO). */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Development of agriculture in Nigeria",
        subtopics: ["Stages in the development of agriculture", "Role of science and technology", "Roles of government and non-governmental organisations", "Problems and solutions"],
        objectives: ["Trace the stages in the development of agriculture", "Explain the role of science and technology in agricultural development", "Describe the roles of government and NGOs", "Analyse the problems of agricultural development and their solutions"],
        lesson: {
          title: "From Hunting and Gathering to Agribusiness",
          summary: "Trace how agriculture developed and what drives or limits its progress in Nigeria.",
          minutes: 45,
          notes: `## Stages in the development of agriculture
1. **hunting and gathering** — early people collected wild fruits and hunted animals
2. **domestication** — taming animals and planting useful crops near settlements
3. **subsistence farming** — shifting cultivation and bush fallowing with simple tools
4. **cash-crop and plantation agriculture** — cocoa, oil palm, rubber, groundnut and cotton grown for export in the colonial period
5. **commercial and mechanised agriculture** — improved varieties, fertilisers, machines, irrigation
6. **agribusiness** — production linked to processing, marketing, finance and export

## Role of science and technology
- **improved varieties and breeds** (high-yielding, early-maturing, disease-resistant)
- **agro-chemicals**: fertilisers, pesticides, herbicides, vaccines and drugs
- **mechanisation**: tractors, harvesters, processing machines
- **irrigation** technology for dry-season farming
- **biotechnology**: tissue culture, artificial insemination, embryo transfer
- **storage and processing** technology that reduces post-harvest losses
- **information technology**: weather forecasts, market prices by phone, drones and satellite mapping

## Role of government
agricultural **policies and programmes**; **credit and subsidies**; **research institutes** and extension services; **infrastructure** (roads, dams, electricity, storage); **quarantine** services; **agricultural education**; land reforms; price stabilisation; vaccination and pest-control campaigns.

## Role of non-governmental organisations
NGOs and international bodies (e.g. **FAO**, **IFAD**, the **World Bank**, **IITA**, farmer co-operatives) provide **funding, training, improved inputs, research** and technical advice; they support women and youth farmers and promote sustainable practices.

## Problems of agricultural development
land tenure and fragmentation; inadequate finance; poor infrastructure and storage; crude tools; pests and diseases; illiteracy; poor extension; unstable policies; insecurity; climate variability; poor marketing; ageing farm population.

## Solutions
land reform and consolidation; affordable credit; rural roads and storage; mechanisation services; improved inputs; farmer education; stable policies; irrigation; insurance; encouraging youth through agribusiness.`,
          examples: `**Example 1.** Name two contributions of science to agriculture. *Answer:* **improved crop varieties** and **agro-chemicals**.

**Example 2.** Give one role of NGOs in agriculture. *Answer:* They provide **training and funding** to farmers.

**Example 3.** Which stage links farm production with processing, finance and marketing? *Answer:* **agribusiness**.`,
        },
        questions: [
          ["E", "The earliest stage in the development of agriculture was", "hunting and gathering", "mechanised farming", "plantation agriculture", "agribusiness", "People first collected wild food."],
          ["E", "Taming wild animals and planting useful crops near settlements is", "domestication", "mechanisation", "fragmentation", "quarantine", "It began settled farming."],
          ["E", "An example of biotechnology in animal production is", "artificial insemination", "hand weeding", "bush fallowing", "hoe making", "It applies science to breeding."],
          ["M", "During the colonial period, crops such as cocoa and groundnut were grown mainly for", "export", "subsistence only", "fodder", "fuel", "They were cash crops."],
          ["M", "A United Nations agency that supports agriculture worldwide is the", "FAO", "FIFA", "WHO only", "OPEC", "Food and Agriculture Organization."],
          ["M", "Which is a role of government in agricultural development?", "funding research and extension", "increasing land fragmentation", "reducing rural roads", "banning credit", "Government supports farmers."],
          ["M", "Technology that reduces post-harvest losses is mainly concerned with", "storage and processing", "land clearing", "planting dates", "weeding", "Losses occur after harvest."],
          ["H", "The linking of production with processing, marketing and finance is described as", "agribusiness", "subsistence farming", "shifting cultivation", "pastoralism", "Agriculture is run as a business chain."],
          ["H", "An ageing farm population is a problem because", "young people are not replacing older farmers", "old farmers use too many machines", "it increases rainfall", "it raises soil fertility", "Farm labour and innovation decline."],
          ["H", "Use of drones and satellite maps on farms is an application of", "information technology", "bush fallowing", "land tenure", "manual labour", "ICT guides farm decisions."],
        ],
      },
      {
        week: 2,
        title: "Land tenure and agricultural laws",
        subtopics: ["Types of land tenure", "Advantages and disadvantages of each system", "The Land Use Act", "Other agricultural laws and reforms"],
        objectives: ["Describe the systems of land tenure in Nigeria", "Evaluate the land tenure systems", "Explain the provisions of the Land Use Act", "Identify other laws that affect agriculture"],
        lesson: {
          title: "Who Owns and Uses the Land?",
          summary: "Evaluate land tenure systems and the Land Use Act.",
          minutes: 45,
          notes: `## Land tenure
**Land tenure** is the system of **ownership and rights to use land**.

| System | Description | Advantages | Disadvantages |
|---|---|---|---|
| **communal tenure** | land belongs to the **community or family**; the head allocates it | every member has access; no landlessness | no individual title, so land cannot be used as **collateral**; little incentive to improve it; fragmentation |
| **tenure by inheritance** | land passes from parents to children | secure ownership; can be collateral | **fragmentation** into small plots; disputes among heirs |
| **leasehold** | land used for an agreed period on payment of **rent** | land fully used during the lease; owner earns rent | tenant may not make long-term improvements; cannot plant permanent crops near expiry |
| **freehold (purchase)** | land bought outright | full security; long-term investment; collateral | expensive; land may be hoarded by the rich |
| **tenancy at the will of government (state ownership)** | land held and allocated by government | large schemes possible | bureaucracy; compensation issues |
| **gift / pledge** | land given freely, or pledged as security for a loan | access without purchase | ownership disputes; insecure |

## The Land Use Act (Decree) of 1978
- all land in each state is **vested in the Governor**, who holds it **in trust** for the people
- individuals hold land by **statutory right of occupancy** (granted by the Governor, in urban areas) or **customary right of occupancy** (granted by the Local Government, in rural areas)
- a **Certificate of Occupancy (C of O)** is evidence of the right
- consent is needed to **transfer or mortgage** land
- government may take land for public purposes and pay **compensation** for improvements
- aims: make land available for development, reduce disputes and speculation
- criticisms: slow, costly procedures; power concentrated in government

## Other laws and reforms
**plant and animal quarantine** laws; **forest laws** (reserves, licences); **fishing regulations** (mesh sizes, closed seasons); laws controlling **bush burning** and **grazing**; **seed and pesticide regulations** (NAFDAC, seed certification); **land consolidation** and farm settlement reforms.`,
          examples: `**Example 1.** Under which tenure system is land allocated by the family or community head? *Answer:* **communal tenure**.

**Example 2.** Who grants a customary right of occupancy? *Answer:* the **Local Government**.

**Example 3.** State one disadvantage of tenure by inheritance. *Answer:* **Fragmentation** of land into small plots.`,
        },
        questions: [
          ["E", "The system of ownership and rights to use land is", "land tenure", "land survey", "land reclamation", "land degradation", "It decides who may use land."],
          ["E", "Land owned by a whole community is under", "communal tenure", "freehold", "leasehold", "pledge", "The community head allocates it."],
          ["E", "Payment made by a tenant for the use of land is", "rent", "interest", "wages", "premium", "Rent is paid to the landowner."],
          ["M", "A major disadvantage of tenure by inheritance is", "fragmentation of land", "lack of ownership", "high rent", "government control", "Land is divided among heirs."],
          ["M", "Using land for an agreed period on payment of rent is", "leasehold", "freehold", "communal tenure", "inheritance", "The lease has a fixed term."],
          ["M", "Under the Land Use Act, land in each state is vested in the", "Governor", "traditional ruler", "Minister of Agriculture", "family head", "He holds it in trust."],
          ["M", "The document that is evidence of a right of occupancy is the", "Certificate of Occupancy", "farm inventory", "land receipt only", "survey beacon", "It is called the C of O."],
          ["H", "Communal land is difficult to use as collateral because", "there is no individual title to it", "it is too fertile", "it is always leased", "it belongs to the bank", "Banks need individual titles."],
          ["H", "In rural areas, a customary right of occupancy is granted by the", "Local Government", "Governor only", "President", "court", "The Governor grants statutory rights."],
          ["H", "A tenant on a short lease is unlikely to plant tree crops because", "the lease may expire before the crops yield", "tree crops need no land", "rent is free", "trees cannot grow on leased land", "Tree crops take years to bear."],
        ],
      },
      {
        week: 3,
        title: "Agricultural ecology",
        subtopics: ["Ecological terms", "Components of the farm ecosystem", "Interactions in the ecosystem", "Land use systems as ecosystems"],
        objectives: ["Define basic ecological terms", "Identify the biotic and abiotic components of a farm ecosystem", "Describe interactions among organisms on the farm", "Compare mono-cropping, mixed cropping and mixed farming as ecosystems"],
        lesson: {
          title: "The Farm as an Ecosystem",
          summary: "Apply ecological ideas to farm ecosystems.",
          minutes: 45,
          notes: `## Ecological terms
- **ecology** — the study of the relationships between living organisms and their environment
- **autecology** — study of a single species; **synecology** — study of groups of species
- **habitat** — the place where an organism lives
- **population** — organisms of the same species in an area
- **community** — all the populations living together in an area
- **ecosystem** — a community interacting with its non-living environment
- **agro-ecosystem** — an ecosystem managed for agricultural production
- **biosphere** — the part of the earth where life exists

## Components of a farm ecosystem
- **abiotic (non-living)**: sunlight, temperature, rainfall, wind, soil, air, minerals
- **biotic (living)**:
  - **producers** — green plants (crops, pasture, weeds)
  - **consumers** — primary (herbivores: cattle, grasshoppers), secondary (carnivores: birds that eat insects, cats), tertiary
  - **decomposers** — bacteria and fungi that break down dead matter and release nutrients

## Interactions
| Interaction | Meaning | Farm example |
|---|---|---|
| **competition** | organisms struggle for the same resources | weeds and crops |
| **parasitism** | one benefits, the host is harmed | ticks on cattle; Striga on maize |
| **predation** | one kills and eats another | ladybird and aphids |
| **symbiosis (mutualism)** | both benefit | *Rhizobium* in legume nodules; rumen microbes |
| **commensalism** | one benefits, the other is unaffected | cattle egrets feeding beside cattle |
| **saprophytism** | feeding on dead organic matter | fungi decomposing crop residues |

## Food chains and webs
**grass → grasshopper → lizard → hawk**. Energy passes from producers to consumers, with loss at each level.

## Land use systems as ecosystems
- **mono-cropping / monoculture**: simple ecosystem; easy to mechanise; pests build up; nutrients depleted
- **mixed cropping**: more diverse; better cover; insurance against failure; harder to mechanise
- **mixed farming**: crops feed animals; **animal manure fertilises crops** — nutrients are recycled; diversified income
- **alley cropping and agroforestry**: trees recycle nutrients and protect soil`,
          examples: `**Example 1.** Give a farm example of symbiosis. *Answer:* ***Rhizobium* bacteria in the root nodules of legumes**.

**Example 2.** What is an agro-ecosystem? *Answer:* An **ecosystem managed for agricultural production**.

**Example 3.** Which organisms release nutrients from dead matter? *Answer:* **decomposers** (bacteria and fungi).`,
        },
        questions: [
          ["E", "The study of relationships between organisms and their environment is", "ecology", "pathology", "entomology", "pedology", "It examines organisms and surroundings."],
          ["E", "Green plants in an ecosystem are the", "producers", "consumers", "decomposers", "parasites", "They make food by photosynthesis."],
          ["E", "The place where an organism lives is its", "habitat", "population", "community", "niche only", "It is the organism's home."],
          ["M", "Bacteria and fungi that break down dead matter are", "decomposers", "producers", "herbivores", "predators", "They recycle nutrients."],
          ["M", "The relationship between Rhizobium and a legume is", "symbiosis", "parasitism", "predation", "competition", "Both partners benefit."],
          ["M", "The relationship between weeds and crops is mainly", "competition", "mutualism", "commensalism", "predation", "They need the same resources."],
          ["M", "Sunlight, rainfall and soil are", "abiotic components", "biotic components", "consumers", "decomposers", "They are non-living factors."],
          ["H", "Cattle egrets feeding on insects disturbed by grazing cattle, without affecting the cattle, illustrate", "commensalism", "parasitism", "competition", "predation of cattle", "One benefits and the other is unaffected."],
          ["H", "In mixed farming, nutrients are recycled mainly because", "animal manure fertilises the crops", "crops are burnt", "animals are sold", "weeds are removed", "Dung returns nutrients to the soil."],
          ["H", "The study of a single species in relation to its environment is", "autecology", "synecology", "agronomy", "taxonomy", "Auto refers to one species."],
        ],
      },
      {
        week: 4,
        title: "Rocks and soil formation",
        subtopics: ["Igneous rocks", "Sedimentary rocks", "Metamorphic rocks", "Factors and processes of soil formation"],
        objectives: ["Describe igneous rocks and give examples", "Describe sedimentary rocks and give examples", "Describe metamorphic rocks and give examples", "Explain the factors and processes of soil formation"],
        lesson: {
          title: "Parent Materials of Soil",
          summary: "Classify rocks and explain how they weather into soil.",
          minutes: 45,
          notes: `## Types of rocks
| Type | Formation | Features | Examples |
|---|---|---|---|
| **igneous** | **cooling and solidification of molten magma** | hard, crystalline, no layers, no fossils | **granite** (plutonic/intrusive — cooled slowly underground, large crystals); **basalt** (volcanic/extrusive — cooled quickly on the surface, fine crystals); diorite, gabbro |
| **sedimentary** | **deposition and cementing of sediments** in layers by water, wind or ice | in **layers (strata)**; may contain **fossils**; softer | **sandstone, limestone, shale, conglomerate**, coal |
| **metamorphic** | existing rocks **changed by heat and pressure** | hard, often banded | **marble** (from limestone), **slate** (from shale), **quartzite** (from sandstone), **gneiss** (from granite) |

Soils from **granite** tend to be sandy; from **basalt**, clayey and fertile; from **sandstone**, sandy; from **shale**, clayey.

## Factors of soil formation
| Factor | Role |
|---|---|
| **parent material** | determines texture, mineral content and colour |
| **climate** | rainfall and temperature control the rate of weathering and leaching |
| **living organisms (biotic)** | roots, earthworms, termites, micro-organisms and humans break rocks and add humus |
| **topography (relief)** | slopes lose soil by erosion; valleys accumulate deep soil |
| **time** | mature soils with clear horizons take very long to form |

## Processes of weathering
- **physical**: temperature changes (expansion and contraction — exfoliation), frost action, abrasion by wind and water, pressure release
- **chemical**: **hydrolysis** (reaction with water), **oxidation** (with oxygen — reddish iron oxides), **carbonation** (carbonic acid dissolving limestone), **hydration**, **solution**
- **biological**: roots widening cracks, burrowing animals, organic acids from lichens and decaying matter, human activities

## Soil profile development
weathered material is acted on by **humification** (formation of humus), **leaching/eluviation** (washing out of the A horizon) and **illuviation** (deposition in the B horizon), giving distinct **horizons**: O (litter), A (topsoil), B (subsoil), C (weathered parent material), R (bedrock).`,
          examples: `**Example 1.** Which rock type is formed from cooled magma? *Answer:* **igneous** rock.

**Example 2.** Marble is formed from which rock? *Answer:* **limestone**.

**Example 3.** Which chemical weathering process dissolves limestone? *Answer:* **carbonation**.`,
        },
        questions: [
          ["E", "Rocks formed by the cooling of molten magma are", "igneous rocks", "sedimentary rocks", "metamorphic rocks", "organic rocks", "Magma solidifies into rock."],
          ["E", "Granite is an example of", "an igneous rock", "a sedimentary rock", "a metamorphic rock", "a fossil", "It cools slowly underground."],
          ["E", "Rocks formed in layers from deposited sediments are", "sedimentary rocks", "igneous rocks", "volcanic rocks", "plutonic rocks", "They occur in strata."],
          ["M", "Marble is a metamorphic rock formed from", "limestone", "granite", "shale", "sandstone", "Heat and pressure change limestone."],
          ["M", "Slate is formed from", "shale", "limestone", "basalt", "sandstone", "Shale changes into slate."],
          ["M", "Fossils are most likely to be found in", "sedimentary rocks", "igneous rocks", "basalt", "granite", "Remains are buried in sediments."],
          ["M", "The factor of soil formation that determines the mineral content of a soil is", "parent material", "time", "topography", "wind", "Soil inherits minerals from the rock."],
          ["H", "The chemical weathering process in which carbonic acid dissolves limestone is", "carbonation", "oxidation", "hydrolysis", "exfoliation", "Rain water with carbon dioxide forms the acid."],
          ["H", "The deposition of leached materials in the B horizon is", "illuviation", "eluviation", "humification", "exfoliation", "Materials wash into the subsoil."],
          ["H", "Basalt differs from granite because basalt", "cooled quickly on the surface and has fine crystals", "cooled slowly and has large crystals", "contains fossils", "is formed from shale", "It is an extrusive rock."],
        ],
      },
      {
        week: 5,
        title: "Physical properties of soil",
        subtopics: ["Soil texture", "Soil structure", "Soil porosity, water and air", "Soil temperature and colour"],
        objectives: ["Explain soil texture and its determination", "Describe types of soil structure", "Explain soil porosity and the forms of soil water", "Explain the importance of soil temperature and colour"],
        lesson: {
          title: "Texture, Structure and Water",
          summary: "Describe the physical properties of soil and their importance.",
          minutes: 45,
          notes: `## Soil texture
**Texture** is the **relative proportion of sand, silt and clay** particles in a soil.
| Particle | Diameter (international system) |
|---|---|
| gravel | above 2.0 mm |
| coarse sand | 2.0 – 0.2 mm |
| fine sand | 0.2 – 0.02 mm |
| silt | 0.02 – 0.002 mm |
| clay | below 0.002 mm |
Determination: **feel method** (rubbing moist soil between the fingers), **sedimentation**, **sieving** (mechanical analysis). Textural classes include sand, loamy sand, sandy loam, loam, clay loam and clay.
Importance: affects water retention, drainage, aeration, ease of tillage and fertility.

## Soil structure
**Structure** is the **arrangement of soil particles into aggregates (peds)**.
Types: **single-grained** (loose sand), **crumb / granular** (best for crops), **platy**, **blocky**, **prismatic**, **columnar**.
Structure is **improved** by adding organic matter, liming, crop rotation and cover cropping; it is **destroyed** by over-tillage, heavy machinery, bush burning and overgrazing.

## Porosity
the proportion of **pore spaces** in the soil. **Macropores** hold air and drain water; **micropores** hold water. Sand has large pores but low total water holding; clay has many tiny pores and holds much water.

## Soil water
- **gravitational water** — drains away under gravity; not available to plants
- **capillary water** — held in micropores; the **main water available to plants**
- **hygroscopic water** — held tightly as a thin film round particles; not available
- **field capacity** — water held after excess has drained
- **wilting point** — water content at which plants wilt permanently
- **available water = field capacity − wilting point**

## Soil air
needed for root and microbial respiration; waterlogging drives it out.

## Soil temperature
affects germination, root growth, microbial activity and decomposition; modified by mulching, shading and irrigation.

## Soil colour
dark — rich in humus; red or brown — well drained with iron oxides; grey or bluish — waterlogged.`,
          examples: `**Example 1.** What is soil texture? *Answer:* The **relative proportion of sand, silt and clay**.

**Example 2.** Which form of soil water is available to plants? *Answer:* **capillary water**.

**Example 3.** Field capacity is 30% and wilting point is 12%. Find the available water. *Answer:* 30 − 12 = **18%**.`,
        },
        questions: [
          ["E", "The relative proportion of sand, silt and clay in a soil is its", "texture", "structure", "porosity", "colour", "Texture depends on particle sizes."],
          ["E", "The arrangement of soil particles into aggregates is soil", "structure", "texture", "profile", "pH", "Aggregates are called peds."],
          ["E", "A dark soil colour usually indicates", "high humus content", "waterlogging", "high salt content", "pure sand", "Humus darkens soil."],
          ["M", "Soil particles with a diameter below 0.002 mm are", "clay", "silt", "fine sand", "gravel", "Clay is the finest fraction."],
          ["M", "The soil water most available to plants is", "capillary water", "gravitational water", "hygroscopic water", "flood water", "It is held in small pores."],
          ["M", "The soil structure considered best for crop growth is", "crumb structure", "platy structure", "single-grained structure", "columnar structure", "It allows air and water movement."],
          ["M", "Water that drains away from the soil under the pull of gravity is", "gravitational water", "capillary water", "hygroscopic water", "available water", "Plants cannot use it."],
          ["H", "If field capacity is 30% and wilting point is 12%, the available water is", "18%", "42%", "12%", "30%", "Available water is the difference."],
          ["H", "A grey or bluish subsoil colour suggests that the soil is", "waterlogged", "rich in humus", "well drained", "very sandy", "Iron is in a reduced state."],
          ["H", "Soil structure is destroyed by", "over-tillage and heavy machinery", "adding organic matter", "cover cropping", "liming", "Aggregates are broken and compacted."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Soil pH and chemical properties",
        subtopics: ["Meaning of soil pH", "Causes of soil acidity and alkalinity", "Liming and correction of pH", "Cation exchange and soil fertility"],
        objectives: ["Explain soil pH and the pH scale", "State the causes of soil acidity and alkalinity", "Describe liming and other ways of correcting soil pH", "Explain cation exchange capacity"],
        lesson: {
          title: "Soil Reaction",
          summary: "Explain soil pH, its causes, effects and correction.",
          minutes: 45,
          notes: `## Soil pH
**Soil pH** is the degree of **acidity or alkalinity** of the soil, measured on a scale of **0 to 14**.
- **below 7** — acidic; **7** — neutral; **above 7** — alkaline
- most crops grow best between **pH 6.0 and 7.0**
- measured with a **pH meter**, **indicator solution/paper** or soil test kit

## Why pH matters
- controls the **availability of nutrients**: in very acid soils phosphorus is fixed, and aluminium and manganese may become toxic; in alkaline soils iron, zinc and manganese become unavailable
- affects **soil micro-organisms** (nitrifying and nitrogen-fixing bacteria prefer near-neutral soils)
- determines which **crops** can be grown (tea and pineapple tolerate acid soils; cotton and date palm tolerate alkaline soils)

## Causes of soil acidity
- **leaching** of basic cations (calcium, magnesium) by heavy rainfall
- continuous use of **acid-forming fertilisers** such as ammonium sulphate
- **acidic parent rock**
- decomposition of organic matter producing organic acids
- removal of bases in harvested crops
- acid rain

## Causes of alkalinity
low rainfall with high evaporation that leaves **salts** at the surface; parent materials rich in lime; poor-quality irrigation water.

## Correcting acidity — liming
materials: **limestone (calcium carbonate)**, **quicklime (calcium oxide)**, **slaked lime (calcium hydroxide)**, **dolomite** (calcium–magnesium carbonate), **wood ash**, basic slag.
Benefits of liming: raises pH; supplies calcium (and magnesium); improves structure of clay soils (flocculation); increases microbial activity and nutrient availability.
Lime should be applied **some weeks before planting** and not mixed with ammonium fertilisers or fresh manure (nitrogen is lost as ammonia).

## Correcting alkalinity
apply **sulphur**, **ammonium sulphate**, **gypsum**, organic matter; leach salts with good-quality water and improve drainage.

## Cation exchange capacity (CEC)
the ability of soil **colloids (clay and humus)** to hold and exchange positively charged nutrients such as calcium, magnesium, potassium and ammonium. High CEC soils (clay, humus-rich) hold nutrients well; sandy soils have low CEC and leach easily.`,
          examples: `**Example 1.** A soil has a pH of 5. Is it acidic or alkaline? *Answer:* **acidic**.

**Example 2.** Name two liming materials. *Answer:* **limestone** and **slaked lime**.

**Example 3.** Why should lime not be mixed with ammonium sulphate? *Answer:* **Nitrogen is lost as ammonia gas**.`,
        },
        questions: [
          ["E", "The degree of acidity or alkalinity of a soil is its", "pH", "texture", "porosity", "structure", "It is measured on a 0–14 scale."],
          ["E", "A soil with a pH of 7 is", "neutral", "acidic", "alkaline", "saline", "Seven is the neutral point."],
          ["E", "The practice of adding calcium compounds to reduce soil acidity is", "liming", "mulching", "leaching", "fallowing", "Lime neutralises acids."],
          ["M", "Most crops grow best at a soil pH of about", "6.0 to 7.0", "2.0 to 3.0", "9.0 to 10.0", "12.0 to 13.0", "Slightly acid to neutral soils suit most crops."],
          ["M", "Heavy rainfall makes soils acidic mainly by", "leaching basic cations", "adding lime", "raising evaporation", "depositing salts", "Calcium and magnesium are washed out."],
          ["M", "A fertiliser that tends to make soil acidic is", "ammonium sulphate", "limestone", "wood ash", "dolomite", "It is acid-forming."],
          ["M", "A material that can be applied to reduce soil alkalinity is", "sulphur", "quicklime", "wood ash", "slaked lime", "Sulphur forms acid in the soil."],
          ["H", "In strongly acid soils, the element most likely to become unavailable through fixation is", "phosphorus", "nitrogen gas", "carbon", "hydrogen", "It is fixed by iron and aluminium."],
          ["H", "The ability of clay and humus to hold and exchange nutrient ions is", "cation exchange capacity", "field capacity", "wilting point", "bulk density", "Colloids hold positively charged ions."],
          ["H", "Lime should not be mixed with ammonium fertilisers because", "nitrogen is lost as ammonia", "the lime becomes acidic", "phosphorus is released", "the soil becomes waterlogged", "A reaction releases ammonia gas."],
        ],
      },
      {
        week: 2,
        title: "Nutrient cycles",
        subtopics: ["The nitrogen cycle", "The carbon cycle", "The water cycle", "Importance of nutrient cycles to agriculture"],
        objectives: ["Describe the nitrogen cycle and the organisms involved", "Describe the carbon cycle", "Describe the water cycle", "Explain the importance of the cycles to agriculture"],
        lesson: {
          title: "How Nature Recycles Nutrients",
          summary: "Describe the nitrogen, carbon and water cycles.",
          minutes: 45,
          notes: `## The nitrogen cycle
Nitrogen makes up about **78%** of the air, but plants absorb it mainly as **nitrates** (and ammonium).

### Processes
| Process | What happens | Agents |
|---|---|---|
| **nitrogen fixation** | atmospheric nitrogen is converted to compounds plants can use | **symbiotic**: *Rhizobium* in legume root nodules; **non-symbiotic (free-living)**: *Azotobacter* (aerobic), *Clostridium* (anaerobic), blue-green algae; **lightning** (electrical fixation); industrial fertiliser manufacture |
| **ammonification** | proteins in dead organisms and excreta are decomposed to **ammonia/ammonium** | putrefying bacteria and fungi |
| **nitrification** | ammonium → **nitrite** → **nitrate** | ***Nitrosomonas*** (ammonium to nitrite); ***Nitrobacter*** (nitrite to nitrate) |
| **denitrification** | nitrates are converted back to **nitrogen gas**, which is lost to the air | denitrifying bacteria (e.g. *Pseudomonas*) in waterlogged, poorly aerated soils |

### Gains and losses of soil nitrogen
gains: fixation, manures and fertilisers, rain. Losses: **leaching**, **denitrification**, **crop removal**, **erosion**, **burning**, volatilisation of ammonia.

## The carbon cycle
- plants take in **carbon dioxide** for **photosynthesis** and build carbohydrates
- animals obtain carbon by feeding on plants
- carbon dioxide returns to the air by **respiration**, **decay (decomposition)** and **combustion** (burning of wood and fossil fuels)
- some carbon is stored in humus, peat, coal and oil
Importance: supplies carbon for all organic matter; keeps the balance of oxygen and carbon dioxide; soil organic matter depends on it.

## The water cycle
**evaporation** from seas, rivers and soil → **transpiration** from plants → **condensation** into clouds → **precipitation** (rain) → **infiltration and percolation** into the soil, **run-off** into streams → back to the sea.
Importance: supplies **soil water** for crops; recharges groundwater for irrigation; run-off causes erosion.

## Importance to agriculture
legumes in rotation add nitrogen; good drainage and aeration favour nitrification and reduce denitrification; returning residues maintains organic matter; conserving water sustains crops.`,
          examples: `**Example 1.** Which bacteria convert ammonium to nitrite? *Answer:* ***Nitrosomonas***.

**Example 2.** What is denitrification? *Answer:* The conversion of **nitrates to nitrogen gas**, which is lost to the air.

**Example 3.** Name two ways carbon dioxide returns to the atmosphere. *Answer:* **respiration** and **burning**.`,
        },
        questions: [
          ["E", "Plants absorb nitrogen from the soil mainly as", "nitrates", "nitrogen gas", "proteins", "nitrites only", "Nitrate is the main available form."],
          ["E", "Bacteria that fix nitrogen in the root nodules of legumes are", "Rhizobium", "Nitrobacter", "Nitrosomonas", "Pseudomonas", "They live symbiotically in nodules."],
          ["E", "Plants take in carbon dioxide for", "photosynthesis", "respiration only", "transpiration", "nitrification", "Carbon is built into carbohydrates."],
          ["M", "The conversion of ammonium to nitrite is carried out by", "Nitrosomonas", "Nitrobacter", "Rhizobium", "Azotobacter", "It is the first step of nitrification."],
          ["M", "The conversion of nitrite to nitrate is carried out by", "Nitrobacter", "Nitrosomonas", "Clostridium", "Rhizobium", "It completes nitrification."],
          ["M", "The breakdown of proteins in dead organisms to ammonia is", "ammonification", "nitrification", "denitrification", "fixation", "Putrefying organisms do it."],
          ["M", "A free-living, aerobic nitrogen-fixing bacterium is", "Azotobacter", "Rhizobium", "Nitrobacter", "Pseudomonas", "It needs no host plant."],
          ["H", "Denitrification is most likely to occur in soils that are", "waterlogged and poorly aerated", "well drained and aerated", "freshly limed", "sandy and dry", "The bacteria act where oxygen is scarce."],
          ["H", "Which of these is a loss of nitrogen from the soil?", "leaching of nitrates", "nitrogen fixation", "application of manure", "lightning", "Nitrates wash below the root zone."],
          ["H", "The process by which water vapour is lost from plant leaves is", "transpiration", "condensation", "precipitation", "percolation", "It is part of the water cycle."],
        ],
      },
      {
        week: 3,
        title: "Sources of farm power",
        subtopics: ["Human and animal power", "Mechanical power", "Electrical, solar, wind and water power", "Comparing sources of farm power"],
        objectives: ["Describe human and animal power and their limitations", "Describe mechanical power", "Describe electrical, solar, wind, water and biogas power", "Compare the sources of farm power"],
        lesson: {
          title: "Energy for Farm Work",
          summary: "Compare the sources of farm power and their uses.",
          minutes: 45,
          notes: `## Meaning
**Farm power** is the **energy or force used to carry out farm operations**.

## Sources
| Source | Uses | Advantages | Disadvantages |
|---|---|---|---|
| **human power** | hand tools: clearing, planting, weeding, harvesting | readily available; can do skilled, selective work; needs no fuel | low output (about 0.1 horsepower); tires easily; slow; affected by health; cannot handle large farms |
| **animal power** (bullocks, donkeys, horses, camels) | ploughing, ridging, carting, transport | cheaper than tractors; animals reproduce and give manure; suited to small farms | slower than machines; animals fall sick; limited by tsetse fly in the south; need feed and care |
| **mechanical power** (engines, tractors) | all field operations, processing, transport | fast; timely; handles large areas; reduces drudgery | high cost; fuel and spare parts; skilled operators; pollution; soil compaction |
| **electrical power** | pumps, incubators, milking machines, mills, lighting, cold stores | clean, quiet, efficient, easy to control | irregular supply; installation cost; risk of shock; not available in many rural areas |
| **solar power** | drying crops, solar pumps, lighting, electric fences | free, renewable, clean | depends on sunshine; high initial cost of panels |
| **wind power** | windmills for pumping water, grinding; winnowing | free, renewable | unreliable; site-specific |
| **water power** | water wheels and turbines for mills and electricity (hydro-electric) | renewable; cheap to run | needs rivers and dams; high construction cost |
| **biogas** | cooking, heating, lighting, small engines | uses farm waste; produces fertiliser slurry | needs a digester and regular feeding |

## Units
**horsepower (hp)** — about 746 watts; **kilowatt (kW)**.

## Choosing a power source
consider farm size, type of operation, cost, availability of fuel and skills, and environmental effects.`,
          examples: `**Example 1.** Give one disadvantage of human power. *Answer:* **Low output** — people tire easily.

**Example 2.** Which power source runs incubators and milking machines? *Answer:* **electrical power**.

**Example 3.** Why is animal power limited in southern Nigeria? *Answer:* Because of the **tsetse fly** (trypanosomiasis).`,
        },
        questions: [
          ["E", "The energy used to carry out farm operations is", "farm power", "farm budget", "farm labour law", "farm layout", "Power does the work."],
          ["E", "The use of bullocks to plough land is", "animal power", "mechanical power", "electrical power", "solar power", "Draught animals pull implements."],
          ["E", "Drying crops in the sun uses", "solar power", "wind power", "biogas", "water power", "Energy comes from the sun."],
          ["M", "A disadvantage of human power is that it", "has low output and tires easily", "needs much fuel", "pollutes the air", "compacts the soil", "Humans work slowly."],
          ["M", "The power source used for incubators and milking machines is", "electrical power", "animal power", "wind power", "human power", "Electric motors drive them."],
          ["M", "Windmills on farms are used mainly for", "pumping water", "ploughing", "harvesting cocoa", "spraying", "Wind turns the pump."],
          ["M", "One horsepower is approximately", "746 watts", "100 watts", "10 watts", "7,460 watts", "It is a unit of power."],
          ["H", "Biogas as a source of farm power is produced from", "decomposing farm waste in a digester", "burning coal", "flowing rivers", "solar panels", "Bacteria release methane from waste."],
          ["H", "An advantage of animal power over mechanical power is that animals", "also provide manure and reproduce", "work faster than tractors", "need no care", "are unaffected by disease", "They give additional benefits."],
          ["H", "A major limitation of electrical power on Nigerian farms is", "irregular supply in rural areas", "its noise", "its smoke", "its need for animal feed", "Many rural areas lack steady electricity."],
        ],
      },
      {
        week: 4,
        title: "The tractor and its implements",
        subtopics: ["The internal combustion engine", "Systems of the tractor", "Tractor-coupled implements", "Maintenance and safety"],
        objectives: ["Explain the four-stroke cycle of an engine", "Describe the main systems of a tractor", "Describe tractor-coupled implements and their functions", "Describe tractor maintenance and safety precautions"],
        lesson: {
          title: "The Farm Tractor",
          summary: "Explain how a tractor works and how implements are used and maintained.",
          minutes: 45,
          notes: `## The internal combustion engine
A tractor is powered by an **internal combustion engine** (usually **diesel**), in which fuel burns **inside the cylinders**.

### The four-stroke cycle
1. **induction (intake)** — piston moves down; air (or air–fuel mixture) is drawn in
2. **compression** — piston moves up, compressing the charge
3. **power (ignition)** — fuel burns; expanding gases push the piston down
4. **exhaust** — piston moves up, pushing out burnt gases
In a **diesel engine**, fuel is ignited by the **heat of compression** (no spark plug); in a **petrol engine**, by a **spark plug**.

## Systems of a tractor
| System | Function |
|---|---|
| **fuel system** | stores, filters and delivers fuel (tank, filters, injector pump, injectors) |
| **cooling system** | prevents overheating (radiator, water pump, fan) |
| **lubrication system** | reduces friction and wear (oil sump, pump, filter) |
| **electrical system** | starting and lighting (battery, alternator, starter) |
| **transmission system** | transmits power to the wheels (clutch, gearbox, differential) |
| **hydraulic system** | lifts and lowers implements through the **three-point linkage** |
| **power take-off (PTO) shaft** | drives implements such as mowers, sprayers and shellers |
| **drawbar** | pulls trailed implements |

## Tractor-coupled implements
- **primary tillage**: **disc plough**, **mouldboard plough** (cut, invert and break the soil)
- **secondary tillage**: **harrows** (disc, spike-tooth, spring-tine) — break clods, level the seedbed
- **ridger** — makes ridges
- **planter / seed drill** — opens a furrow, drops seed at the set spacing, covers it
- **cultivator** — inter-row weeding
- **boom sprayer**, **fertiliser spreader**, **mower**, **baler**, **trailer**

## Maintenance
**daily**: check fuel, engine oil, radiator water, tyre pressure, battery electrolyte; clean the air filter; grease nipples.
**periodic**: change engine oil and filters; service injectors; adjust clutch and brakes; tighten bolts.
Store under a shed; follow the operator's manual.

## Safety
only trained operators; no passengers; disengage the PTO before servicing; never refuel a running engine; drive slowly on slopes; use guards and a roll-over protective frame.`,
          examples: `**Example 1.** Name the four strokes of an engine in order. *Answer:* **induction, compression, power, exhaust**.

**Example 2.** Which system lifts implements? *Answer:* the **hydraulic system** (three-point linkage).

**Example 3.** How is fuel ignited in a diesel engine? *Answer:* By the **heat of compression**.`,
        },
        questions: [
          ["E", "An engine in which fuel burns inside the cylinders is an", "internal combustion engine", "external combustion engine", "electric motor", "water turbine", "Tractors use such engines."],
          ["E", "The tractor system that prevents the engine from overheating is the", "cooling system", "fuel system", "transmission system", "hydraulic system", "It includes the radiator."],
          ["E", "The tractor system that reduces friction between moving parts is the", "lubrication system", "electrical system", "cooling system", "fuel system", "Oil lubricates the parts."],
          ["M", "The correct order of the four strokes of an engine is", "induction, compression, power, exhaust", "compression, induction, exhaust, power", "power, exhaust, compression, induction", "exhaust, power, induction, compression", "Intake comes first and exhaust last."],
          ["M", "The shaft that transmits engine power to drive implements such as mowers is the", "power take-off shaft", "drawbar", "crankcase", "radiator", "It is called the PTO."],
          ["M", "The system that raises and lowers mounted implements is the", "hydraulic system", "fuel system", "cooling system", "ignition system", "It works the three-point linkage."],
          ["M", "The implement used for primary tillage is the", "disc plough", "disc harrow", "ridger", "cultivator", "It first breaks the soil."],
          ["H", "In a diesel engine, the fuel is ignited by", "the heat of compression", "a spark plug", "a carburettor", "the battery directly", "Compressed air becomes very hot."],
          ["H", "The stroke during which the piston is pushed down by expanding gases is the", "power stroke", "induction stroke", "compression stroke", "exhaust stroke", "It produces the work."],
          ["H", "For safety, the power take-off should be disengaged before", "servicing the implement", "starting to plough", "driving on the road only", "checking the weather", "A turning shaft can cause injury."],
        ],
      },
      {
        week: 5,
        title: "Husbandry of cereals and fibre crops",
        subtopics: ["Sorghum and millet", "Rice husbandry in detail", "Cotton", "Common husbandry principles"],
        objectives: ["Describe the husbandry of sorghum and millet", "Describe upland and lowland rice husbandry", "Describe the husbandry of cotton", "Apply common principles of crop husbandry"],
        lesson: {
          title: "Growing Savanna Grains and Cotton",
          summary: "Describe the husbandry of sorghum, millet, rice and cotton.",
          minutes: 45,
          notes: `## Headings for describing crop husbandry
botanical name; varieties; climatic and soil requirements; land preparation; planting (date, method, spacing, seed rate); cultural practices; pests and diseases; maturity and harvesting; processing and storage; uses.

## Sorghum (guinea corn) — *Sorghum bicolor*
- drought-tolerant cereal of the **Guinea and Sudan savanna**
- soil: well-drained sandy loam to clay loam
- planting: by seed at the onset of rains, on ridges or flat; about 75 cm × 30 cm; thin to 2 plants per stand
- pests: stem borers, **quelea birds**, head bugs; the parasitic weed **Striga**; diseases: **smut**, downy mildew
- maturity: 4–6 months; heads are cut, dried and threshed
- uses: tuwo, pap, kunu, burukutu, malting for brewing, livestock feed, stalks for fencing

## Pearl millet — *Pennisetum glaucum*
- the most **drought-resistant** cereal; grown in the Sudan and Sahel savanna on light sandy soils
- matures in **about 2.5–4 months**
- pests: birds, stem borers; disease: downy mildew, smut
- uses: fura, tuwo, kunu

## Rice — *Oryza sativa* and *Oryza glaberrima* (African rice)
- **upland rice**: rain-fed on well-drained land; sown by drilling or dibbling
- **lowland/swamp rice**: grown in **flooded, bunded fields (paddies)**; seedlings raised in a **nursery** for about 3–4 weeks and **transplanted** at about 20 cm × 20 cm
- water is drained before harvest
- pests: birds, stem borers, African rice gall midge, rodents; diseases: **blast**, brown spot
- processing: threshing, **parboiling**, drying, milling, polishing

## Cotton — *Gossypium hirsutum*
- a **fibre and oil-seed** crop of the northern savanna; needs a dry period at harvest
- sown by seed on ridges in June–July; about 90 cm × 45 cm
- pests: **bollworms**, **cotton stainers** (*Dysdercus*), aphids — regular spraying is needed; disease: bacterial blight
- **bolls** open in about 5–6 months; seed cotton is **hand-picked**
- **ginning** separates **lint** (fibre) from **seed**; seeds give cotton-seed oil and cake
- crop residues are uprooted and burnt after harvest to break pest cycles (a "closed season")`,
          examples: `**Example 1.** Give the botanical name of sorghum. *Answer:* ***Sorghum bicolor***.

**Example 2.** What is ginning? *Answer:* **Separating cotton lint from the seed**.

**Example 3.** Which cereal is the most drought-resistant? *Answer:* **pearl millet**.`,
        },
        questions: [
          ["E", "Guinea corn is another name for", "sorghum", "maize", "millet", "rice", "It is a savanna cereal."],
          ["E", "The fibre obtained from cotton is called", "lint", "latex", "bran", "husk", "Lint is spun into yarn."],
          ["E", "Swamp rice is grown in flooded fields called", "paddies", "barns", "cribs", "paddocks", "The fields are bunded."],
          ["M", "The botanical name of sorghum is", "Sorghum bicolor", "Pennisetum glaucum", "Oryza sativa", "Gossypium hirsutum", "It is guinea corn."],
          ["M", "The most drought-resistant cereal grown in Nigeria is", "pearl millet", "rice", "maize", "wheat", "It thrives in the Sahel."],
          ["M", "The process of separating cotton lint from the seed is", "ginning", "threshing", "parboiling", "winnowing", "It is done in a ginnery."],
          ["M", "A parasitic weed that seriously attacks sorghum is", "Striga", "Tridax", "guinea grass", "siam weed", "It attaches to sorghum roots."],
          ["H", "The botanical name of cotton is", "Gossypium hirsutum", "Sorghum bicolor", "Hibiscus esculentus", "Corchorus olitorius", "Cotton belongs to the mallow family."],
          ["H", "Lowland rice seedlings are usually transplanted from the nursery after about", "3 to 4 weeks", "1 to 2 days", "6 months", "1 year", "Young seedlings establish best."],
          ["H", "Cotton residues are uprooted and burnt after harvest in order to", "break the life cycles of pests", "add lint to the soil", "increase bollworms", "improve ginning", "It gives a closed season."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "The digestive system of farm animals",
        subtopics: ["Digestive system of monogastric animals", "Digestive system of ruminants", "Digestive system of poultry", "Digestion and absorption"],
        objectives: ["Describe the digestive system of a monogastric animal", "Describe the digestive system of a ruminant", "Describe the digestive system of poultry", "Explain digestion and absorption of food"],
        lesson: {
          title: "How Farm Animals Digest Food",
          summary: "Compare the digestive systems of pigs, ruminants and poultry.",
          minutes: 45,
          notes: `## Monogastric animals (e.g. pig)
**mouth** (teeth chew; saliva with amylase begins starch digestion) → **oesophagus** → **simple stomach** (hydrochloric acid; **pepsin** digests protein; **rennin** curdles milk in young animals) → **small intestine** — **duodenum** (receives **bile** from the liver, which emulsifies fats, and **pancreatic juice** with trypsin, amylase and lipase), **jejunum** and **ileum** (absorption through **villi**) → **large intestine** (caecum, colon — water absorbed) → **rectum** → **anus**.

## Ruminants (cattle, sheep, goats)
have no upper incisors; a **dental pad** is used with the tongue to graze.
| Compartment | Function |
|---|---|
| **rumen** | largest; fermentation vat where **bacteria and protozoa digest cellulose**, producing volatile fatty acids; micro-organisms also synthesise protein and B vitamins |
| **reticulum** | honeycomb lining; forms the **cud** for regurgitation; traps foreign objects |
| **omasum** | leaf-like folds; absorbs water; grinds |
| **abomasum** | **true stomach** — gastric juice digests protein, including microbes |
**Rumination**: swallowing roughage hastily, later **regurgitating**, re-chewing, re-salivating and re-swallowing it. In young calves the **oesophageal groove** channels milk straight to the abomasum.

## Poultry
**beak** (no teeth) → **oesophagus** → **crop** (stores and moistens feed) → **proventriculus** (glandular stomach; secretes gastric juice) → **gizzard** (muscular stomach; **grinds** feed with grit) → **small intestine** (digestion and absorption) → two **caeca** (some fibre digestion) → large intestine → **cloaca** (common opening for faeces, urine and eggs) → **vent**.

## Digestion and absorption
- **carbohydrates → glucose** (simple sugars)
- **proteins → amino acids**
- **fats and oils → fatty acids and glycerol**
End products are absorbed in the small intestine into the blood; undigested material is passed out as faeces.

## Comparison
ruminants use roughage efficiently because of rumen microbes; monogastrics need more digestible, concentrated feeds.`,
          examples: `**Example 1.** Which organ grinds food in poultry? *Answer:* the **gizzard**.

**Example 2.** What are proteins digested into? *Answer:* **amino acids**.

**Example 3.** What is rumination? *Answer:* **Regurgitating, re-chewing and re-swallowing** food (chewing the cud).`,
        },
        questions: [
          ["E", "The end products of protein digestion are", "amino acids", "fatty acids", "glucose", "glycerol", "Proteins break down to amino acids."],
          ["E", "The glandular stomach of a bird is the", "proventriculus", "gizzard", "crop", "cloaca", "It secretes gastric juice."],
          ["E", "Absorption of digested food takes place mainly in the", "small intestine", "mouth", "oesophagus", "rectum", "Villi absorb nutrients."],
          ["M", "The enzyme in the stomach that digests protein is", "pepsin", "amylase", "lipase", "maltase", "It works in acid conditions."],
          ["M", "Bile is produced by the", "liver", "pancreas", "stomach", "gizzard", "It emulsifies fats."],
          ["M", "The part of the ruminant stomach with a honeycomb lining is the", "reticulum", "rumen", "omasum", "abomasum", "It forms the cud."],
          ["M", "The common opening for faeces, urine and eggs in birds is the", "cloaca", "crop", "caecum", "gizzard", "It opens at the vent."],
          ["H", "In young calves, milk passes directly to the abomasum through the", "oesophageal groove", "bile duct", "caecum", "dental pad", "It bypasses the rumen."],
          ["H", "The main products of cellulose fermentation in the rumen are", "volatile fatty acids", "amino acids only", "glycerol", "starch grains", "Microbes ferment cellulose."],
          ["H", "Ruminants graze without upper incisors by using the", "dental pad and tongue", "gizzard", "canine teeth", "beak", "The lower incisors press against the pad."],
        ],
      },
      {
        week: 2,
        title: "Circulatory, respiratory and reproductive systems",
        subtopics: ["The circulatory system", "The respiratory system", "The male reproductive system", "The female reproductive system"],
        objectives: ["Describe the circulatory system of farm animals", "Describe the respiratory system", "Describe the male reproductive organs and their functions", "Describe the female reproductive organs and their functions"],
        lesson: {
          title: "Body Systems of Farm Animals",
          summary: "Describe circulation, respiration and reproduction in farm animals.",
          minutes: 45,
          notes: `## Circulatory system
made up of the **heart**, **blood vessels** and **blood**.
- the mammalian **heart** has **four chambers**: two **auricles (atria)** and two **ventricles**
- **arteries** carry blood **away** from the heart (usually oxygenated); **veins** carry blood **to** the heart; **capillaries** link them and exchange materials with tissues
- **blood**: **plasma** (liquid; carries nutrients, hormones, wastes), **red blood cells** (carry oxygen using haemoglobin), **white blood cells** (defence), **platelets** (clotting)
- functions: transport of oxygen, food, hormones and wastes; defence; temperature regulation

## Respiratory system
**nostrils → nasal cavity → larynx → trachea → bronchi → bronchioles → alveoli** in the **lungs**, where oxygen enters the blood and carbon dioxide leaves. Breathing is aided by the **diaphragm** and rib muscles.
In **birds**, the lungs are connected to **air sacs**; there is no true diaphragm. **Fish** use **gills**.

## Male reproductive system
| Organ | Function |
|---|---|
| **testes** (in the **scrotum**) | produce **sperm** and the hormone **testosterone** |
| **epididymis** | stores and matures sperm |
| **vas deferens (sperm duct)** | carries sperm to the urethra |
| **accessory glands** (seminal vesicles, prostate, Cowper's gland) | add fluids to form **semen** |
| **urethra / penis** | deposits semen in the female |
The scrotum keeps the testes slightly cooler than body temperature.

## Female reproductive system
| Organ | Function |
|---|---|
| **ovaries** | produce **ova (eggs)** and the hormones **oestrogen** and **progesterone** |
| **oviducts (Fallopian tubes)** | site of **fertilisation**; carry the ovum to the uterus |
| **uterus (womb)** | where the embryo/foetus develops |
| **cervix** | neck of the uterus; closes during pregnancy |
| **vagina** | receives the penis; birth canal |
| **vulva** | external opening |

## The hen
only the **left ovary and oviduct** are functional. Parts of the oviduct: **infundibulum** (receives the yolk; fertilisation), **magnum** (albumen added), **isthmus** (shell membranes), **uterus/shell gland** (shell formed — the longest stage), **vagina**, **cloaca**. An egg takes about **25 hours** to form.`,
          examples: `**Example 1.** Where does fertilisation occur in a cow? *Answer:* in the **oviduct (Fallopian tube)**.

**Example 2.** Which organ produces sperm? *Answer:* the **testes**.

**Example 3.** In which part of the hen's oviduct is the shell formed? *Answer:* the **uterus (shell gland)**.`,
        },
        questions: [
          ["E", "Blood vessels that carry blood away from the heart are", "arteries", "veins", "capillaries", "ducts", "They leave the heart."],
          ["E", "The organs that produce sperm are the", "testes", "ovaries", "kidneys", "epididymides", "They also produce testosterone."],
          ["E", "The foetus develops in the", "uterus", "ovary", "vagina", "cervix", "It is also called the womb."],
          ["M", "The number of chambers in the heart of a mammal is", "four", "two", "three", "one", "Two auricles and two ventricles."],
          ["M", "Sperm are stored and matured in the", "epididymis", "prostate", "urethra", "scrotum wall", "It lies on the testis."],
          ["M", "Fertilisation in mammals takes place in the", "oviduct", "uterus", "vagina", "cervix", "The ovum is met in the Fallopian tube."],
          ["M", "The blood cells that carry oxygen are the", "red blood cells", "white blood cells", "platelets", "plasma cells", "They contain haemoglobin."],
          ["H", "In the hen, the albumen (egg white) is added in the", "magnum", "infundibulum", "isthmus", "uterus", "It is the longest part of the oviduct."],
          ["H", "The testes are housed in the scrotum outside the body in order to", "keep them cooler than body temperature", "protect them from sunlight", "store urine", "produce milk", "Sperm production needs a lower temperature."],
          ["H", "Birds differ from mammals in respiration because birds have", "air sacs connected to the lungs", "gills", "a larger diaphragm", "no lungs", "Air sacs aid breathing and lightness."],
        ],
      },
      {
        week: 3,
        title: "Pasture and forage crops",
        subtopics: ["Meaning and types of pasture", "Common grasses and legumes", "Establishment of pasture", "Management and conservation of forage"],
        objectives: ["Explain pasture and its types", "Identify common pasture grasses and legumes with botanical names", "Describe how to establish a pasture", "Describe pasture management and forage conservation"],
        lesson: {
          title: "Feed from Grassland",
          summary: "Identify forage crops and describe pasture establishment and management.",
          minutes: 45,
          notes: `## Meaning
A **pasture** is an area of land covered with **forage grasses and legumes** grazed by livestock. **Forage crops** are plants grown or managed for feeding animals.

## Types
- **natural pasture (rangeland)** — grows on its own; low quality; uncontrolled; contains weeds; cheap
- **artificial (established/sown) pasture** — deliberately planted with selected species; high yield and quality; managed; costly

## Common species
| Grasses | Botanical name |
|---|---|
| elephant grass | *Pennisetum purpureum* |
| guinea grass | *Panicum maximum* |
| giant star grass | *Cynodon plectostachyus* |
| gamba grass | *Andropogon gayanus* |
| carpet grass | *Axonopus compressus* |
| spear grass (poor quality) | *Imperata cylindrica* |

| Legumes | Botanical name |
|---|---|
| centro | *Centrosema pubescens* |
| stylo | *Stylosanthes gracilis* |
| tropical kudzu | *Pueraria phaseoloides* |
| calopo | *Calopogonium mucunoides* |
| mucuna | *Mucuna utilis* |
Legumes raise the **protein** content of the pasture and **fix nitrogen**. A **grass–legume mixture** gives a balanced feed.

## Factors affecting pasture
rainfall, temperature, soil fertility, grazing pressure, burning, pests and diseases.

## Establishment
choose a site; clear, plough and harrow; plant by **seeds** (broadcast or drilled) or **vegetative parts** (stem cuttings, rhizomes, splits); apply fertiliser; control weeds; allow the sward to establish before grazing.

## Management
- **controlled grazing**: **rotational grazing** in **paddocks**, **strip grazing**, zero grazing
- correct **stocking rate** — avoid **overgrazing** and undergrazing
- **fertiliser** and manure; **irrigation** in the dry season
- **weed control**, reseeding bare patches
- controlled burning to remove old growth; fire breaks

## Conservation
- **hay** — forage cut at the early flowering stage and **dried** to about 15–20% moisture
- **silage** — green forage chopped, compacted and **fermented anaerobically** in a silo or pit
- **straw** and crop residues
Conserved forage feeds animals in the **dry season**.`,
          examples: `**Example 1.** Give the botanical name of elephant grass. *Answer:* ***Pennisetum purpureum***.

**Example 2.** Why are legumes included in pastures? *Answer:* They add **protein** and **fix nitrogen**.

**Example 3.** What is silage? *Answer:* Green forage **fermented without air** and stored for dry-season feeding.`,
        },
        questions: [
          ["E", "Land covered with grasses and legumes grazed by livestock is a", "pasture", "plantation", "orchard", "nursery", "Animals graze on it."],
          ["E", "Forage cut and dried for later feeding is", "hay", "silage", "straw only", "pellets", "It is dried to low moisture."],
          ["E", "A pasture that grows without being planted is a", "natural pasture", "sown pasture", "ley", "paddock house", "It is also called rangeland."],
          ["M", "A tall bunch grass widely sown in pastures, known as guinea grass, is botanically", "Panicum maximum", "Pennisetum purpureum", "Andropogon gayanus", "Axonopus compressus", "It is a tall bunch grass."],
          ["M", "The botanical name of centro is", "Centrosema pubescens", "Stylosanthes gracilis", "Pueraria phaseoloides", "Mucuna utilis", "It is a twining legume."],
          ["M", "Legumes are mixed with grasses in pastures mainly to", "increase protein and fix nitrogen", "reduce feed quality", "increase weeds", "dry the soil", "They enrich feed and soil."],
          ["M", "Dividing a pasture into paddocks grazed in turn is", "rotational grazing", "zero grazing", "continuous grazing", "overgrazing", "Each paddock is rested."],
          ["H", "Silage is preserved by", "anaerobic fermentation", "sun-drying", "salting", "smoking", "Air is excluded from the silo."],
          ["H", "The number of animals a pasture can carry without damage is its", "stocking rate", "seed rate", "growth rate", "conversion rate", "Too many animals cause overgrazing."],
          ["H", "The botanical name of gamba grass is", "Andropogon gayanus", "Cynodon plectostachyus", "Imperata cylindrica", "Panicum maximum", "It is a savanna grass."],
        ],
      },
      {
        week: 4,
        title: "Farm surveying and planning",
        subtopics: ["Meaning and importance of farm surveying", "Surveying equipment", "Farmstead planning", "Principles of farm layout"],
        objectives: ["Explain farm surveying and its importance", "Identify surveying equipment and their uses", "Explain farmstead planning", "Apply principles of siting farm structures"],
        lesson: {
          title: "Measuring and Laying Out the Farm",
          summary: "Identify surveying equipment and plan a farmstead.",
          minutes: 45,
          notes: `## Farm surveying
**Farm surveying** is the **measurement and mapping** of farmland to determine its size, shape, boundaries and features.

## Importance
- shows the **area** of the farm for planning inputs, yields and stocking
- fixes **boundaries**, reducing disputes
- guides the **layout** of plots, roads, buildings, irrigation and drainage
- shows **topography** for erosion control
- provides a **farm map (plan)**
- needed for land **registration**, valuation and loans

## Surveying equipment
| Equipment | Use |
|---|---|
| **ranging poles** | mark stations and keep survey lines straight |
| **measuring tape** | measures distances |
| **Gunter's chain** | measures distances; 22 yards (about 20.12 m) long, made of **100 links** |
| **arrows (pins)** | mark the end of each chain or tape length |
| **pegs** | mark stations and corners |
| **beacons (pillars)** | permanent concrete marks at boundary corners |
| **prismatic compass** | measures **bearings** (directions) of lines |
| **theodolite** | measures horizontal and vertical **angles** accurately |
| **offset staff / cross staff** | measures short offsets; sets out right angles |
| **plumb bob** | checks vertical alignment |
| **spirit level / dumpy level** | determines levels and slopes |

## Methods
**chain surveying** (triangulation with offsets), **compass traversing**, levelling. Modern surveys use **GPS** and total stations.

## Units of area
1 **hectare** = 10,000 m² (100 m × 100 m) ≈ 2.47 acres; 1 acre ≈ 0.405 ha.

## Farmstead planning
the **farmstead** is the area containing the farm house, stores, animal houses and workshops. **Farm planning** arranges all enterprises and structures for efficient, economical use.

## Principles of siting structures
- **accessibility** to roads and fields
- nearness to **water** and power
- **topography and drainage** — firm, well-drained ground
- **wind direction** — animal houses and manure pits **downwind** of the dwelling
- **soil type** — do not build on the best arable land
- **security** and supervision — stores near the office
- room for **expansion**
- separation of animal houses to reduce disease spread`,
          examples: `**Example 1.** Which instrument measures bearings? *Answer:* the **prismatic compass**.

**Example 2.** How many square metres make one hectare? *Answer:* **10,000 m²**.

**Example 3.** A plot is 200 m by 150 m. Find its area in hectares. *Answer:* 30,000 m² ÷ 10,000 = **3 ha**.`,
        },
        questions: [
          ["E", "The measurement and mapping of farmland is", "farm surveying", "farm budgeting", "farm mechanisation", "farm tenancy", "It determines size and boundaries."],
          ["E", "The poles used to mark stations and keep survey lines straight are", "ranging poles", "beacons", "arrows", "plumb bobs", "They are painted in bands."],
          ["E", "One hectare is equal to", "10,000 square metres", "1,000 square metres", "100 square metres", "100,000 square metres", "A square of 100 m by 100 m."],
          ["M", "The instrument used to measure bearings is the", "prismatic compass", "Gunter's chain", "ranging pole", "spirit level", "It gives directions of lines."],
          ["M", "A Gunter's chain is made up of", "100 links", "50 links", "22 links", "1,000 links", "It measures 22 yards."],
          ["M", "Permanent concrete marks at the corners of a surveyed farm are", "beacons", "arrows", "offsets", "pegs only", "They mark boundaries permanently."],
          ["M", "A plot measuring 200 m by 150 m has an area of", "3 hectares", "30 hectares", "0.3 hectare", "35 hectares", "30,000 m² divided by 10,000."],
          ["H", "The instrument used to measure horizontal and vertical angles accurately is the", "theodolite", "measuring tape", "cross staff", "plumb bob", "It is a precise angle instrument."],
          ["H", "A piggery should be sited downwind of the farm house so that", "odours are carried away from the house", "pigs receive more rain", "it is closer to the road", "the soil is more fertile", "Wind blows smell away."],
          ["H", "An important reason for surveying a farm before seeking a bank loan is that it", "establishes the size and boundaries of the land", "increases soil fertility", "reduces rainfall", "controls pests", "Banks need proof of the land."],
        ],
      },
      {
        week: 5,
        title: "Irrigation and drainage systems",
        subtopics: ["Need for irrigation", "Irrigation systems compared", "Problems of irrigation", "Drainage systems"],
        objectives: ["Explain the need for irrigation", "Compare surface, sprinkler, drip and sub-surface irrigation", "Analyse the problems associated with irrigation", "Describe surface and sub-surface drainage"],
        lesson: {
          title: "Managing Water on the Farm",
          summary: "Compare irrigation and drainage systems and their problems.",
          minutes: 45,
          notes: `## Irrigation
the **artificial application of water** to the soil for crop growth.
**Need:** low or unreliable rainfall; **dry-season** production; multiple cropping; higher yields and quality; leaching of salts; softening soil for tillage.
**Sources of water:** rivers, streams, lakes, **dams** and reservoirs, wells and **boreholes**.

## Systems
| System | Description | Advantages | Disadvantages |
|---|---|---|---|
| **surface irrigation** — flood, **basin**, **border**, **furrow** | water flows over the land by gravity | cheap; simple | wastes water; needs level land; erosion; waterlogging; salinity |
| **sprinkler (overhead)** | water pumped through pipes and sprayed like rain | suits uneven land and most soils; even application | costly equipment; wind drift; evaporation loss; encourages leaf diseases |
| **drip (trickle)** | water delivered slowly through emitters at the root zone | **highest water-use efficiency**; fewer weeds; fertiliser can be applied with the water (fertigation) | high initial cost; emitters clog |
| **sub-surface** | water supplied below the surface through perforated pipes or a raised water table | little evaporation loss | expensive; salts may accumulate |
| traditional: **shadoof**, watering cans, calabashes, **fadama** (flood-plain) farming | | cheap | labour-intensive; small areas |

## Problems of irrigation
high cost; **waterlogging**; **salinisation** (salt build-up); erosion; spread of **water-borne diseases** (bilharzia, malaria); silting of dams and canals; conflicts over water; displacement of communities by dams.

## Drainage
the **removal of excess water** from the soil.
**Importance:** improves aeration; warms the soil; allows timely tillage and machinery use; removes salts; increases root depth; reduces diseases.
| System | Description |
|---|---|
| **surface drainage** | open ditches, channels and furrows |
| **sub-surface (underground) drainage** | buried tile or perforated pipes, mole drains |
Disadvantages of open drains: take up land, obstruct machines, harbour weeds and need maintenance.

## River Basin Development Authorities
manage dams and irrigation schemes in Nigeria (e.g. Kano River, Bakolori, South Chad projects).`,
          examples: `**Example 1.** Which irrigation system is most efficient in water use? *Answer:* **drip irrigation**.

**Example 2.** Give one problem caused by irrigation. *Answer:* **salinisation** (or waterlogging).

**Example 3.** State one benefit of drainage. *Answer:* It **improves soil aeration**.`,
        },
        questions: [
          ["E", "The artificial application of water to crops is", "irrigation", "drainage", "evaporation", "percolation", "It supplements rainfall."],
          ["E", "Open ditches used to remove excess water are a form of", "surface drainage", "drip irrigation", "sprinkler irrigation", "sub-irrigation", "They carry water away."],
          ["E", "A source of water for irrigation is", "a dam", "a silo", "a crib", "a kraal", "Dams store water."],
          ["M", "The irrigation system in which water is sprayed like rain is", "sprinkler irrigation", "furrow irrigation", "basin irrigation", "drip irrigation", "Water is pumped through nozzles."],
          ["M", "The irrigation system with the highest water-use efficiency is", "drip irrigation", "flood irrigation", "border irrigation", "furrow irrigation", "Water goes directly to the roots."],
          ["M", "The build-up of salts in irrigated soil is", "salinisation", "nitrification", "eluviation", "humification", "Evaporation leaves salts behind."],
          ["M", "A traditional water-lifting device used for irrigation is the", "shadoof", "theodolite", "baler", "ridger", "It is a counter-weighted lever."],
          ["H", "A disadvantage of sprinkler irrigation is that it", "may encourage leaf diseases and loses water to wind", "needs perfectly level land", "cannot be used on sandy soil", "wastes fertiliser only", "Wet leaves favour disease."],
          ["H", "Applying fertiliser through the irrigation water is called", "fertigation", "fumigation", "foliar dusting", "broadcasting", "Nutrients travel with the water."],
          ["H", "A health problem associated with irrigation schemes is the spread of", "bilharzia", "rickets", "scurvy", "anthrax", "Snails in canals carry the parasite."],
        ],
      },
    ],
  },
];
