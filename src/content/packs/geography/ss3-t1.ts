import type { TermPlan } from "../types";

/** SS3 Geography, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Denudation Processes",
      subtopics: ["Meaning of denudation", "Agents of denudation: running water, wind, ice and waves", "Weathering, erosion, transportation and deposition", "Landforms produced"],
      objectives: ["Define denudation", "Identify the agents of denudation", "Explain the four processes of denudation", "Name landforms produced by each agent"],
      lesson: {
        title: "The Wearing Down of the Land",
        summary: "How the earth's surface is broken up, carried away and laid down elsewhere.",
        minutes: 40,
        notes: `## Meaning
**Denudation** (from Latin *denudare*, "to lay bare") is the **general wearing away and lowering** of the earth's surface by natural agents. Forces from inside the earth (**endogenic** — folding, faulting, vulcanicity) build the land up; forces acting on the surface (**exogenic**) wear it down. Denudation is the work of the exogenic forces.

## The four processes
| Process | Meaning |
|---|---|
| **weathering** | the breaking up and decay of rocks **in situ** — where they are, without movement |
| **erosion** | the **wearing away and removal** of rock material by a moving agent |
| **transportation** | the **carrying** of the eroded material from one place to another |
| **deposition** | the **laying down** of the material when the agent loses energy |

Weathering prepares the material; erosion and transportation remove it; deposition builds new landforms. **Mass movement** — the movement of weathered material downslope under gravity — links weathering to erosion.

## Agents of denudation
### 1. Running water (rivers and rain wash)
The most important agent in humid lands.
- **Erosion** by **hydraulic action** (force of the water), **corrasion / abrasion** (load scraping bed and banks), **attrition** (load particles wearing one another), **solution / corrosion** (dissolving soluble rock).
- **Transportation** by **traction** (rolling boulders), **saltation** (bouncing), **suspension** (silt carried in the water), **solution**.
- **Landforms:** *erosional* — V-shaped valley, gorge, waterfall, rapids, interlocking spurs, pot-holes; *depositional* — flood plain, levees, meanders and ox-bow lakes, delta, alluvial fan.

### 2. Wind
Most effective in **arid** regions, where vegetation is sparse and the ground is dry.
- **Erosion** by **deflation** (lifting and blowing away loose particles), **abrasion** (sand-blasting), **attrition**.
- **Landforms:** *erosional* — rock pedestals (mushroom rocks), zeugen, yardangs, deflation hollows, inselbergs; *depositional* — **sand dunes** (crescent-shaped **barchans**, long **seif** dunes) and **loess**.

### 3. Ice (glaciers)
Acts in high latitudes and high mountains.
- **Erosion** by **plucking** (ice freezes on to rock and pulls pieces away) and **abrasion**.
- **Landforms:** *erosional* — cirque (corrie), arête, pyramidal peak, **U-shaped valley**, hanging valley, fjord; *depositional* — moraines, drumlins, eskers, boulder clay, erratics.

### 4. Waves (the sea)
- **Erosion** by hydraulic action, corrasion, attrition and solution.
- **Transportation** by **longshore drift**.
- **Landforms:** *erosional* — cliff, wave-cut platform, cave, arch, stack, stump, bay and headland; *depositional* — beach, spit, bar, tombolo, lagoon.

### 5. Underground water
Works in **limestone (karst)** regions by **solution (carbonation)**: swallow holes, caves, stalactites and stalagmites, dry valleys.

## Factors affecting the rate of denudation
- **nature of the rock** — hardness, jointing, solubility
- **climate** — rainfall and temperature
- **relief** — steep slopes erode faster
- **vegetation cover** — protects the surface
- **human activity** — deforestation, farming, mining and construction speed it up

## Importance
Denudation forms **soil**, produces fertile **alluvial plains and deltas**, exposes **minerals**, and creates scenery for **tourism**; but it also causes **soil erosion, gullying, silting of rivers and dams**, and loss of farmland.`,
        examples: `**Example 1.** Distinguish weathering from erosion. *Answer:* Weathering breaks rocks down **in situ**; erosion **removes** the broken material by a moving agent.

**Example 2.** Name the process by which wind lifts and removes loose sand. *Answer:* **deflation**.

**Example 3.** Give one erosional and one depositional landform of a river. *Answer:* **waterfall** (erosional); **delta** (depositional).`,
      },
      questions: [
        ["E", "The general wearing away of the earth's surface by natural agents is", "denudation", "vulcanicity", "sedimentation only", "isostasy", "It lays the land bare and lowers it."],
        ["E", "The carrying of eroded material from one place to another is", "transportation", "weathering", "deposition", "compaction", "Rivers, wind, ice and waves transport load."],
        ["E", "Which of these is an agent of denudation?", "Running water", "Earthquake", "Volcanic eruption", "Folding", "The others are internal, land-building forces."],
        ["M", "The process by which wind lifts and blows away loose particles is", "deflation", "plucking", "hydraulic action", "carbonation", "Deflation lowers desert surfaces."],
        ["M", "A U-shaped valley is produced by the erosive work of", "glaciers", "rivers", "wind", "waves", "Ice widens and deepens a former river valley."],
        ["M", "The wearing down of a river's load as particles knock against one another is", "attrition", "corrasion", "solution", "traction", "Attrition makes the load smaller and rounder."],
        ["M", "Which of these landforms results from wave erosion?", "Stack", "Spit", "Barchan", "Moraine", "A stack is left when a sea arch collapses."],
        ["H", "The movement of beach material along a coast by waves approaching at an angle is", "longshore drift", "saltation", "deflation", "plucking", "Swash carries material up obliquely and backwash returns it straight down."],
        ["H", "Crescent-shaped sand dunes with horns pointing downwind are", "barchans", "seifs", "yardangs", "zeugen", "Barchans form where wind blows from one main direction."],
        ["H", "Which of these is a depositional feature of a river?", "Levee", "Gorge", "Pot-hole", "Interlocking spur", "Levees are raised banks built by flood deposits."],
      ],
      jamb: [
        ["M", "Stalactites and stalagmites are features found in", "limestone regions", "desert regions", "glaciated highlands", "coastal lowlands", "They form by deposition of calcium carbonate in caves."],
        ["H", "The transport of small stones along a river bed in a series of hops is known as", "saltation", "traction", "suspension", "solution", "The particles bounce along the bed."],
      ],
    },
    {
      week: 2,
      title: "Weathering",
      subtopics: ["Meaning of weathering", "Mechanical, chemical and biological weathering", "Factors influencing weathering", "Importance and effects of weathering"],
      objectives: ["Define weathering", "Describe the processes of mechanical, chemical and biological weathering", "Explain the factors that influence weathering", "State the importance and effects of weathering on the environment"],
      lesson: {
        title: "How Rocks Break Down",
        summary: "The physical, chemical and biological processes that disintegrate and decompose rocks where they lie.",
        minutes: 40,
        notes: `## Meaning
**Weathering** is the **breaking up (disintegration) and decay (decomposition) of rocks in situ** by the elements of weather and by living things. No transport is involved. The layer of weathered material is the **regolith**.

## Types of weathering
### 1. Mechanical (physical) weathering
Rocks are **broken into smaller pieces** with **no change in chemical composition**.

| Process | How it works | Where |
|---|---|---|
| **exfoliation (onion peeling)** | rocks expand by day and contract at night; the outer layers peel off, leaving rounded **exfoliation domes** | hot deserts; savanna inselbergs |
| **block disintegration** | large daily range of temperature widens joints until blocks break off | deserts |
| **granular disintegration** | minerals of different colours expand at different rates and the rock crumbles into grains | deserts |
| **frost action (freeze-thaw)** | water in cracks freezes and expands by about 9%, wedging the rock apart; produces **scree** | cold and high mountain regions |
| **pressure release (unloading)** | removal of overlying rock lets the rock expand and crack in sheets | granite areas |
| **salt crystallisation** | salts crystallise in pores and prise grains apart | arid areas and coasts |
| **alternate wetting and drying** | clay rocks swell and shrink | humid tropics |

### 2. Chemical weathering
Rocks **decompose** by chemical reactions that **change their minerals**. It needs **water** and is fastest in **hot, wet** climates.

| Process | Explanation |
|---|---|
| **solution** | soluble minerals (rock salt) dissolve in water |
| **carbonation** | rain water containing carbon dioxide (weak carbonic acid) dissolves **limestone**: CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂ — forms karst scenery |
| **oxidation** | oxygen combines with iron minerals to give red-brown iron oxides ("rusting" of rocks) |
| **hydration** | minerals absorb water and swell, weakening the rock |
| **hydrolysis** | water reacts with minerals; feldspar in granite decays to **clay (kaolin)** |

### 3. Biological weathering
Caused by **plants, animals and man**.
- **roots** grow into joints and wedge rocks apart;
- **burrowing animals** (earthworms, termites, rodents) loosen material;
- decaying vegetation yields **humic acids** that attack rocks;
- **lichens and mosses** corrode rock surfaces;
- **man** — quarrying, mining, road building, farming.

## Factors influencing weathering
| Factor | Influence |
|---|---|
| **climate** | hot wet → chemical; hot dry → mechanical (exfoliation); cold → frost action |
| **nature of rock** | mineral composition, hardness, joints and bedding planes, permeability |
| **relief (slope)** | steep slopes shed debris, exposing fresh rock; gentle slopes keep a deep regolith |
| **vegetation and organisms** | protect the surface from temperature change but supply acids |
| **time** | the longer the exposure, the deeper the weathering |
| **human activities** | speed up weathering; acid rain |

## Importance and effects
**Positive**
- produces **soil**, the basis of agriculture
- releases **plant nutrients**
- forms **minerals** — bauxite, kaolin, laterite
- weakens rock, making quarrying and erosion easier
- creates **landforms** that attract tourists — inselbergs, tors, karst caves

**Negative**
- weakens building stone, monuments and foundations
- supplies loose material for **landslides and erosion**
- laterite crusts are infertile
- reduces the life of roads and structures`,
        examples: `**Example 1.** Which type of weathering changes the chemical composition of rock? *Answer:* **chemical weathering**.

**Example 2.** Name the weathering process dominant in limestone areas. *Answer:* **carbonation**.

**Example 3.** Why is exfoliation common in hot deserts? *Answer:* The **large daily range of temperature** makes the outer rock layers expand and contract until they peel off.`,
      },
      questions: [
        ["E", "The breaking down of rocks in situ is known as", "weathering", "erosion", "deposition", "transportation", "No movement of material is involved."],
        ["E", "The peeling off of the outer layers of a rock due to temperature changes is", "exfoliation", "carbonation", "hydrolysis", "oxidation", "It is also called onion peeling."],
        ["E", "The widening of rock cracks by the roots of trees is an example of", "biological weathering", "chemical weathering", "frost action", "solution", "Living organisms cause the break-up."],
        ["M", "Mechanical weathering by exfoliation is most pronounced in", "hot deserts", "equatorial rainforests", "polar ice caps", "coral reefs", "The large daily range of temperature makes rock surfaces expand and contract."],
        ["M", "The weathering process most active in limestone regions is", "carbonation", "exfoliation", "frost shattering", "pressure release", "Carbonic acid dissolves calcium carbonate."],
        ["M", "Frost action is most effective in", "high mountains and cold regions", "hot deserts", "equatorial lowlands", "coral coasts", "Water must freeze and thaw repeatedly."],
        ["M", "The reddish-brown colour of many tropical rocks and soils results from", "oxidation", "hydration", "carbonation", "freeze-thaw", "Iron minerals combine with oxygen."],
        ["H", "The decay of feldspar in granite to form clay is due to", "hydrolysis", "exfoliation", "attrition", "deflation", "Water reacts chemically with the mineral."],
        ["H", "Which of these does NOT involve a change in the chemical composition of rock?", "Block disintegration", "Oxidation", "Carbonation", "Hydrolysis", "It is a mechanical process."],
        ["H", "The layer of loose weathered material overlying solid rock is the", "regolith", "bedrock", "magma", "moraine", "Soil develops from the regolith."],
      ],
      jamb: [
        ["M", "Angular rock fragments that accumulate at the foot of a mountain slope through frost action are called", "scree", "loess", "alluvium", "laterite", "Scree (talus) is the debris of freeze-thaw weathering."],
        ["H", "Which of the following factors least influences the rate of weathering?", "Longitude of the place", "Climate", "Nature of the rock", "Relief", "Longitude has no direct effect on weathering."],
      ],
    },
    {
      week: 3,
      title: "Mass Movements",
      subtopics: ["Definition of mass movement", "Slow movements: soil creep and solifluction", "Rapid movements: landslide, rock fall, mudflow and avalanche", "Causes and effects on human activities"],
      objectives: ["Define mass movement", "Describe the types of mass movement", "Explain the causes of mass movement", "State its effects and ways of reducing them"],
      lesson: {
        title: "Movement of Material Downslope",
        summary: "How weathered material moves down slopes under gravity, and what this means for people.",
        minutes: 40,
        notes: `## Definition
**Mass movement (mass wasting)** is the **movement of weathered rock material (regolith) down a slope under the influence of gravity**, without being carried by a transporting agent such as a river, wind or ice. Water often acts as a **lubricant**.

## Types
### Slow movements
| Type | Description | Evidence |
|---|---|---|
| **soil creep** | very slow, continuous downhill movement of soil — a few millimetres to centimetres a year; occurs even on gentle, vegetated slopes | tilted fence posts, poles and walls; trees with curved trunks; **terracettes**; soil piled behind walls |
| **solifluction** | slow flow of **water-saturated soil** over frozen ground (permafrost) when the surface thaws | lobes and tongues of soil in cold, periglacial regions |

### Rapid movements
| Type | Description |
|---|---|
| **landslide** | sudden sliding of a large mass of rock and soil down a steep slope along a slip plane; a **slump** is a rotational slide on a curved surface |
| **rock fall** | free fall of individual rocks from a cliff or very steep face; produces **scree (talus)** at the base |
| **mudflow** | rapid flow of soil saturated with water down a valley or slope after heavy rain; volcanic mudflows are **lahars** |
| **earthflow** | slower flow of wet clayey soil |
| **avalanche** | sudden, very rapid fall of a mass of **snow and ice** (or rock) down a mountain side |

## Causes
**Natural**
- **steepness of slope** — gravity overcomes friction
- **heavy or prolonged rainfall** — adds weight and lubricates
- **nature of material** — clay over impermeable rock; rock beds dipping downslope
- **earthquakes and volcanic eruptions** — shake material loose
- **undercutting** of the slope base by rivers or waves
- **alternate freezing and thawing**; melting snow
- **lack of vegetation**

**Human**
- **deforestation** and bush burning
- **cultivation** and overgrazing on steep slopes
- **road cuts, quarrying and mining** that steepen or undercut slopes
- **building** on slopes — extra load
- vibration from blasting and heavy traffic

## Effects on human activities
**Negative**
- loss of **lives** and injury
- destruction of **houses, farms, roads, railways, bridges, power lines**
- **blocking of rivers**, forming temporary lakes that may burst and flood
- loss of fertile topsoil; scars on the landscape
- displacement of people; cost of repair
- silting of dams and reservoirs

**Positive**
- may expose minerals and fresh rock
- deposits material that can form fertile soil at the foot of slopes
- landslide-dammed lakes can supply water and fishing

## Control measures
- **afforestation** and keeping vegetation on slopes
- **terracing** and contour ploughing
- **retaining walls**, gabions and rock bolts
- **drainage** of slopes
- controlling building, quarrying and farming on steep slopes
- early-warning systems and land-use planning

## In Nigeria
Landslides and slumps occur on the steep, deeply weathered slopes of the south-east (e.g. around Enugu, Awgu and Nanka gully sites), the Jos Plateau, Obudu and the Mambilla highlands, especially after heavy rains.`,
        examples: `**Example 1.** Which mass movement is the slowest? *Answer:* **soil creep**.

**Example 2.** Give two signs of soil creep. *Answer:* **tilted poles** and **trees with bent trunks**.

**Example 3.** State one way of preventing landslides on a hill slope. *Answer:* **Planting trees** (or building retaining walls / terracing).`,
      },
      questions: [
        ["E", "The main force responsible for mass movement is", "gravity", "wind", "solar heat", "the earth's magnetism", "Material moves downslope under its own weight."],
        ["E", "The slowest form of mass movement is", "soil creep", "rock fall", "mudflow", "avalanche", "It moves only millimetres to centimetres a year."],
        ["E", "A rapid fall of a mass of snow and ice down a mountain side is", "an avalanche", "a mudflow", "soil creep", "a slump", "Avalanches occur in snow-covered mountains."],
        ["M", "Tilted electric poles and trees with curved trunks on a slope are evidence of", "soil creep", "rock fall", "an avalanche", "wind deflation", "The soil has been moving slowly downhill."],
        ["M", "Which of these human activities is most likely to cause landslides?", "Deforestation of steep slopes", "Terracing", "Afforestation", "Contour ploughing", "Roots that hold the soil are removed."],
        ["M", "Water promotes mass movement mainly by", "adding weight and lubricating the material", "hardening the soil", "increasing friction", "cementing the particles", "Saturated material slides more easily."],
        ["M", "A rapid flow of water-saturated soil down a slope after heavy rain is a", "mudflow", "rock fall", "soil creep", "deflation hollow", "The material behaves like a thick liquid."],
        ["H", "The slow flow of saturated soil over frozen ground in cold regions is", "solifluction", "slumping", "saltation", "exfoliation", "The thawed surface layer flows over the permafrost."],
        ["H", "Angular rock debris found at the foot of a cliff after rock falls is", "scree", "alluvium", "loess", "silt", "Scree is also called talus."],
        ["H", "Which of these measures would NOT reduce mass movement on a slope?", "Quarrying at the foot of the slope", "Building retaining walls", "Planting trees", "Draining the slope", "Undercutting the base makes the slope unstable."],
      ],
      jamb: [
        ["M", "Which of the following is a rapid type of mass movement?", "Landslide", "Soil creep", "Solifluction", "Terracette formation", "A landslide is sudden."],
        ["H", "A landslide in which the material moves along a curved slip surface, tilting backwards, is a", "slump", "rock fall", "soil creep", "lahar", "Slumping is rotational sliding."],
      ],
    },
    {
      week: 4,
      title: "Climatic Change",
      subtopics: ["Meaning of climate and climate change", "Evidence of climate change", "Natural and human causes", "Effects and responses"],
      objectives: ["Distinguish weather, climate and climate change", "Describe historical and contemporary evidence of climate change", "Explain the natural and human causes of climate change", "Discuss the effects of climate change and global and local responses"],
      lesson: {
        title: "A Changing Climate",
        summary: "What climate change is, how we know it is happening, why, and what can be done.",
        minutes: 40,
        notes: `## Meaning
- **Weather** — the condition of the atmosphere at a place over a **short** period.
- **Climate** — the **average** weather of a place over a **long** period, about **30–35 years**.
- **Climate change** — a **significant, lasting change** in the average weather patterns of a region or of the world, over decades or longer.
- **Global warming** — the rise in the earth's average surface temperature; one aspect of climate change.

## Evidence
### Historical
- **ice cores** from Antarctica and Greenland — trapped air bubbles record past temperatures and carbon dioxide
- **tree rings** (dendrochronology) — wide rings in warm, wet years
- **pollen** in lake and peat deposits — shows past vegetation
- **glacial landforms** far from present ice — past ice ages
- **fossils** and coal seams in places now too cold or dry
- **old lake shorelines** and rock paintings — a once much larger Lake Chad and a wetter Sahara
- written records and old river levels

### Contemporary
- rising **global average temperature** (about 1.1 °C above pre-industrial levels)
- **retreat of glaciers** and shrinking Arctic sea ice
- **rising sea level**
- more frequent **extreme weather** — floods, droughts, heat waves, stronger storms
- shifting seasons; later onset and earlier end of the rains
- **shrinking of Lake Chad**; southward advance of the Sahel (desertification)
- coral bleaching

## Causes
### Natural
- variations in the earth's **orbit and tilt** (Milankovitch cycles)
- changes in **solar output** (sunspots)
- **volcanic eruptions** — dust and gases cool the earth for a time
- changes in **ocean currents** (El Niño / La Niña)
- continental drift (over very long periods)

### Human (anthropogenic)
- **burning of fossil fuels** (coal, oil, gas) in vehicles, industry and power stations → carbon dioxide
- **deforestation** and bush burning — fewer trees to absorb carbon dioxide
- **gas flaring** in oil-producing areas
- **agriculture** — methane from cattle and rice fields; nitrous oxide from fertilisers
- **industry** — CFCs and other gases
- waste dumps (methane)

### The greenhouse effect
Short-wave solar radiation passes through the atmosphere and warms the earth. The earth re-radiates **long-wave (infra-red)** heat, which **greenhouse gases** — carbon dioxide, methane, nitrous oxide, water vapour, CFCs — **absorb and trap**. The natural effect keeps the earth habitable; the **enhanced** effect from human emissions causes global warming.

## Effects
| On | Effects |
|---|---|
| **environment** | melting ice; sea-level rise and coastal flooding and erosion (e.g. Lagos, Niger Delta); desertification; loss of biodiversity; drying lakes and rivers |
| **agriculture** | unreliable rainfall; crop failure; lower yields; pests and diseases; loss of grazing land; farmer–herder conflicts over land and water |
| **human activities** | water shortage; hunger; spread of diseases (malaria, cholera); damage to homes and roads; migration ("climate refugees"); reduced hydro-electric power |

## Responses
**Mitigation** — reducing the causes; **adaptation** — adjusting to the effects.

### Global
- **UNFCCC** (1992), **Kyoto Protocol** (1997), **Paris Agreement** (2015) — to keep warming well below 2 °C
- **IPCC** — scientific assessments
- shift to **renewable energy** (solar, wind, hydro); energy efficiency
- carbon trading; climate finance

### Local
- **afforestation** — e.g. the Great Green Wall across the Sahel
- ending **gas flaring**; clean cooking stoves
- drought-resistant and early-maturing crops; irrigation
- flood defences, drainage and proper town planning
- public education; early-warning systems (NiMet forecasts)
- recycling and waste management`,
        examples: `**Example 1.** Distinguish weather from climate. *Answer:* **Weather** is the atmospheric condition over a short period; **climate** is the average weather over about 30–35 years.

**Example 2.** Name two greenhouse gases. *Answer:* **carbon dioxide** and **methane**.

**Example 3.** Give one local response to climate change in northern Nigeria. *Answer:* **Tree planting** under the Great Green Wall programme.`,
      },
      questions: [
        ["E", "The average weather condition of a place over a long period is its", "climate", "weather", "season", "humidity", "Climate is assessed over about 30 to 35 years."],
        ["E", "Which of these is a greenhouse gas?", "Carbon dioxide", "Oxygen", "Nitrogen", "Argon", "It traps outgoing long-wave radiation."],
        ["E", "The gradual rise in the earth's average temperature is", "global warming", "the monsoon", "harmattan", "an ice age", "It results from the enhanced greenhouse effect."],
        ["M", "Which of these is a human cause of climate change?", "Burning of fossil fuels", "Volcanic eruptions", "Changes in the earth's orbit", "Variation in sunspots", "The others are natural causes."],
        ["M", "Evidence of past climates can be obtained from", "tree rings and ice cores", "telephone records", "road maps", "population censuses", "They preserve a record of past temperature and rainfall."],
        ["M", "A likely effect of global warming on coastal cities such as Lagos is", "flooding from rising sea level", "increased snowfall", "more earthquakes", "a longer harmattan", "Melting ice and warmer oceans raise sea level."],
        ["M", "Planting trees helps to reduce global warming because trees", "absorb carbon dioxide", "release methane", "reflect all sunlight", "produce CFCs", "Forests are carbon sinks."],
        ["H", "The international agreement of 2015 that aims to keep global warming well below 2 °C is the", "Paris Agreement", "Montreal Protocol", "Lagos Plan of Action", "Treaty of Rome", "It was adopted under the UNFCCC."],
        ["H", "Actions taken to adjust to the effects of climate change, such as building flood defences, are called", "adaptation", "mitigation", "emission", "deforestation", "Mitigation tackles causes; adaptation deals with effects."],
        ["H", "The shrinking of Lake Chad is generally cited as evidence of", "climate change and desertification", "volcanic activity", "sea-level rise", "glaciation", "Reduced rainfall and heavy water use have shrunk the lake."],
      ],
      jamb: [
        ["M", "The greenhouse effect is caused by the absorption of", "outgoing long-wave radiation by atmospheric gases", "incoming ultraviolet rays by the ground", "sound waves by clouds", "sea water by the land", "Gases trap heat radiated by the earth."],
        ["H", "Which of the following is a natural cause of short-term global cooling?", "Major volcanic eruptions", "Gas flaring", "Deforestation", "Use of fertilisers", "Volcanic dust and aerosols reflect sunlight."],
      ],
    },
    {
      week: 6,
      title: "ECOWAS",
      subtopics: ["Formation and member states", "Aims and objectives", "Structure and functions of its institutions", "Achievements, challenges and role in regional integration"],
      objectives: ["Describe the formation and membership of ECOWAS", "State the objectives of ECOWAS", "Describe the institutions of ECOWAS and their functions", "Assess the achievements and challenges of ECOWAS"],
      lesson: {
        title: "The Economic Community of West African States",
        summary: "West Africa's regional economic grouping: why it was formed, how it works, and how far it has succeeded.",
        minutes: 40,
        notes: `## Formation
The **Economic Community of West African States (ECOWAS)** was established by the **Treaty of Lagos**, signed on **28 May 1975**, largely through the efforts of **General Yakubu Gowon** of Nigeria and **President Gnassingbé Eyadéma** of Togo. The treaty was **revised in 1993** (Cotonou). The headquarters (the **ECOWAS Commission**) is in **Abuja, Nigeria**.

## Member states
The fifteen long-standing members are **Benin, Burkina Faso, Cabo Verde, Côte d'Ivoire, The Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Niger, Nigeria, Senegal, Sierra Leone and Togo**. Cabo Verde joined in 1977; **Mauritania withdrew in 2000**. In January 2024 the military governments of **Mali, Burkina Faso and Niger** announced their withdrawal, which took effect in January 2025.

Members include English-, French- and Portuguese-speaking countries.

## Aims and objectives
1. To promote **co-operation and integration** leading to an **economic union** in West Africa.
2. To **remove customs duties** and other barriers to trade among members — a **free trade area**.
3. To establish a **common external tariff** — a customs union.
4. To ensure the **free movement of persons, goods, services and capital**.
5. To **harmonise** agricultural, industrial, transport, energy and monetary policies.
6. To establish a **common currency** (the proposed "eco").
7. To raise the **standard of living** of the people.
8. To maintain **peace, security and stability** in the region.
9. To develop joint projects in transport, communications and energy.

## Structure and functions
| Institution | Function |
|---|---|
| **Authority of Heads of State and Government** | the **supreme** body; takes final decisions; meets at least once a year; chairmanship rotates |
| **Council of Ministers** | ministers from each state; makes recommendations to the Authority; approves budgets and work programmes |
| **ECOWAS Commission** (formerly the Executive Secretariat) | the administrative organ, headed by a **President**; carries out decisions |
| **Community Parliament** | representatives of the peoples; advisory; sits in Abuja |
| **Community Court of Justice** | interprets the treaty; settles disputes; hears human-rights cases |
| **ECOWAS Bank for Investment and Development (EBID)** | formerly the Fund for Co-operation, Compensation and Development; finances projects; based in **Lomé, Togo** |
| **Specialised technical commissions** | trade, agriculture, transport, energy, social affairs |
| **West African Health Organisation (WAHO)** | health matters |

## Achievements
- **Free movement of persons**: citizens may enter member states **without a visa for up to 90 days**; the **ECOWAS passport**.
- **Trade liberalisation scheme** and a **common external tariff** (2015).
- **Peace-keeping** through **ECOMOG** in Liberia, Sierra Leone, Guinea-Bissau, Côte d'Ivoire and The Gambia.
- **Roads**: the Trans-West African coastal highway (Lagos–Dakar) and the Trans-Sahelian highway.
- **Energy**: the **West African Gas Pipeline** (Nigeria–Benin–Togo–Ghana) and the West African Power Pool.
- **Telecommunications** links; the **ECOWAS brown card** motor insurance scheme.
- Community Court, Parliament and EBID established.
- Joint action on health (Ebola), agriculture and drug control.
- Cultural and sporting exchanges.

## Challenges
- **Political instability**, coups and insecurity; withdrawal of Sahel states.
- **Similar products** — members export raw materials and have little to sell to one another.
- **Language and colonial ties**: Anglophone–Francophone divisions; loyalty to France and to rival bodies such as **UEMOA**.
- **Different currencies**; delay of the common currency.
- **Fear of domination** by Nigeria.
- **Non-payment of dues** and weak commitment; decisions not implemented.
- **Poor transport and communication** links.
- **Border harassment**, smuggling and illegal checkpoints.
- Dependence on customs revenue makes states reluctant to cut tariffs.

## Role in regional integration
ECOWAS widens markets, pools resources, strengthens bargaining power with the outside world, and promotes peace and the movement of people across West Africa.`,
        examples: `**Example 1.** When and where was the ECOWAS treaty signed? *Answer:* on **28 May 1975** in **Lagos**.

**Example 2.** Which organ of ECOWAS is the supreme decision-making body? *Answer:* the **Authority of Heads of State and Government**.

**Example 3.** Give one achievement of ECOWAS. *Answer:* **Visa-free movement of citizens** among member states for up to 90 days.`,
      },
      questions: [
        ["E", "ECOWAS was established in", "1975", "1963", "1960", "1991", "The Treaty of Lagos was signed on 28 May 1975."],
        ["E", "The headquarters of ECOWAS is in", "Abuja", "Accra", "Lomé", "Dakar", "The ECOWAS Commission is in Abuja, Nigeria."],
        ["E", "Which of these countries is a member of ECOWAS?", "Ghana", "Cameroon", "Chad", "Kenya", "Cameroon and Chad belong to Central African groupings."],
        ["M", "The supreme organ of ECOWAS is the", "Authority of Heads of State and Government", "Council of Ministers", "Community Parliament", "Community Court of Justice", "It takes the final decisions of the Community."],
        ["M", "The ECOWAS Bank for Investment and Development is located in", "Lomé", "Lagos", "Abidjan", "Banjul", "EBID has its headquarters in Togo."],
        ["M", "The military arm used by ECOWAS for peace-keeping in Liberia and Sierra Leone was", "ECOMOG", "NATO", "UNAMID", "AMISOM", "The ECOWAS Monitoring Group."],
        ["M", "Which of these is an objective of ECOWAS?", "Free movement of persons and goods among members", "Formation of a single political party", "Abolition of national governments", "Promotion of one religion", "It aims at economic integration."],
        ["H", "Trade among ECOWAS members remains low mainly because", "they produce similar primary products", "they share one currency", "there are no borders", "transport links are excellent", "Members have little to sell to one another."],
        ["H", "The country that withdrew from ECOWAS in 2000 was", "Mauritania", "Cabo Verde", "Guinea", "Liberia", "Mauritania left to join the Arab Maghreb Union."],
        ["H", "The West African Gas Pipeline supplies Nigerian gas to", "Benin, Togo and Ghana", "Niger, Mali and Chad", "Cameroon and Gabon", "Senegal and The Gambia", "It runs along the coast from Nigeria to Ghana."],
      ],
      jamb: [
        ["M", "Which of the following is a major problem facing ECOWAS?", "Political instability in member states", "A common currency in use by all members", "Excessive road links", "A single official language", "Coups and insecurity disrupt co-operation."],
        ["H", "The ECOWAS protocol on free movement allows citizens of member states to stay in another member state without a visa for up to", "90 days", "30 days", "180 days", "one year", "The 1979 protocol grants 90 days' visa-free entry."],
      ],
    },
    {
      week: 8,
      title: "Trade",
      subtopics: ["Meaning and types of trade", "Importance of trade", "Trade patterns in Nigeria and West Africa", "Problems of trade"],
      objectives: ["Define trade and distinguish internal from international trade", "Explain the reasons for and importance of trade", "Describe the pattern of trade in Nigeria and West Africa", "Discuss the problems of trade and suggest solutions"],
      lesson: {
        title: "Trade in Nigeria and West Africa",
        summary: "Why places exchange goods, what Nigeria and West Africa buy and sell, and what hinders trade.",
        minutes: 40,
        notes: `## Meaning
**Trade** is the **buying and selling (exchange) of goods and services**.

## Types of trade
### Internal (domestic, home) trade
Trade **within a country**.
- **wholesale** — buying in bulk from producers and selling to retailers
- **retail** — selling in small quantities to consumers
- In Nigeria: **inter-regional trade** — the north sends cattle, onions, tomatoes, beans, groundnuts and grains south; the south sends kola nuts, palm oil, yams, plantain, fish, timber and manufactured goods north.

### International (external, foreign) trade
Trade **between countries**.
- **import** — buying from other countries
- **export** — selling to other countries
- **entrepôt (re-export)** — importing in order to re-export
- **bilateral** trade is between two countries; **multilateral** among many
- **visible trade** is in goods; **invisible trade** is in services (shipping, banking, insurance, tourism)

**Balance of trade** = value of visible exports − value of visible imports. It is **favourable (surplus)** when exports exceed imports and **unfavourable (deficit)** when imports exceed exports. The **balance of payments** covers all transactions, visible and invisible.

## Reasons for trade
- unequal distribution of **natural resources**
- differences in **climate and soil**
- differences in **skill and technology**
- **specialisation** — each area produces what it can produce best (comparative advantage)
- the desire for a higher standard of living

## Importance of trade
- makes available goods that cannot be produced locally
- provides a **market** for surplus produce
- earns **foreign exchange** and government **revenue** (customs duties)
- creates **employment**
- encourages **specialisation** and large-scale production
- spreads ideas and technology
- promotes international friendship and co-operation
- stimulates the growth of towns, ports and transport

## Trade pattern of Nigeria
| | Items | Partners |
|---|---|---|
| **exports** | **crude oil** (the bulk of export earnings), liquefied natural gas; cocoa, rubber, sesame, cashew, palm kernel, hides and skins, cotton, urea fertiliser | India, Spain, the Netherlands, France, the United States, Indonesia, South Africa, Canada |
| **imports** | machinery, vehicles, refined petroleum products, chemicals, wheat, rice, sugar, fish, iron and steel, electronics, pharmaceuticals | China, India, the United States, the Netherlands, Belgium, Germany |

Main ports: **Lagos (Apapa, Tin Can Island), Lekki, Port Harcourt, Onne, Warri, Calabar**.

## Trade pattern of West Africa
- **Exports are mainly primary products**: crude oil (Nigeria); cocoa (Côte d'Ivoire, Ghana); gold (Ghana, Mali, Burkina Faso); bauxite (Guinea); iron ore and rubber (Liberia); diamonds (Sierra Leone); phosphates (Togo, Senegal); cotton (Mali, Burkina Faso, Benin); groundnuts (Senegal, The Gambia); uranium (Niger).
- **Imports are mainly manufactured goods**: machinery, vehicles, chemicals, textiles, food.
- Most trade is with **Europe, Asia and America**, not within West Africa — **intra-regional trade is low**.
- Much cross-border trade is **informal** and unrecorded (grains, livestock, kola, textiles).

## Problems of trade
- **dependence on a few primary exports** whose prices fluctuate
- **unfavourable terms of trade** — cheap raw materials out, costly manufactures in
- **similar products** among neighbouring countries
- **poor transport** and communication; port congestion
- **different currencies** and foreign-exchange shortages
- **tariffs, quotas and border delays**; smuggling
- language and colonial ties
- political instability and insecurity
- inadequate capital and storage
- **dumping** of cheap foreign goods

## Solutions
Diversify exports and process raw materials locally; improve roads, railways and ports; implement **ECOWAS** and **African Continental Free Trade Area (AfCFTA)** agreements; a common currency; encourage local industries; curb smuggling.`,
        examples: `**Example 1.** A country's visible exports are worth ₦850 billion and its visible imports ₦920 billion. State its balance of trade. *Answer:* A **deficit of ₦70 billion** (unfavourable).

**Example 2.** What is Nigeria's leading export? *Answer:* **crude oil**.

**Example 3.** Give one reason why trade among West African countries is low. *Answer:* They **produce similar primary products**.`,
      },
      questions: [
        ["E", "The buying and selling of goods and services is", "trade", "manufacturing", "transportation", "tourism", "Trade is the exchange of goods and services."],
        ["E", "Trade between two countries is", "international trade", "home trade", "retail trade", "barter by region", "It crosses national boundaries."],
        ["E", "Nigeria's major export commodity is", "crude oil", "cotton", "groundnut", "tin", "Petroleum provides most of the export earnings."],
        ["M", "Goods bought from other countries are", "imports", "exports", "re-exports", "invisibles", "Imports come into the country."],
        ["M", "A country has a favourable balance of trade when", "the value of exports exceeds that of imports", "the value of imports exceeds that of exports", "exports equal imports", "it stops trading", "A surplus arises when more is sold than bought."],
        ["M", "The exports of most West African countries consist mainly of", "primary products", "machinery", "electronics", "vehicles", "They export raw minerals and crops."],
        ["M", "Which of these moves mainly from northern to southern Nigeria in internal trade?", "Cattle", "Kola nuts", "Palm oil", "Timber", "Livestock is reared mainly in the north."],
        ["H", "Importing goods in order to export them again is", "entrepôt trade", "bilateral trade", "invisible trade", "wholesale trade", "It is also called re-export trade."],
        ["H", "A country's visible exports are worth ₦40 trillion and its visible imports ₦46 trillion. Its balance of trade is", "a deficit of ₦6 trillion", "a surplus of ₦6 trillion", "a deficit of ₦86 trillion", "balanced", "Imports exceed exports by ₦6 trillion."],
        ["H", "Earnings from shipping, insurance and tourism are part of", "invisible trade", "visible trade", "entrepôt trade", "barter trade", "Invisible trade is in services."],
      ],
      jamb: [
        ["M", "Which of the following West African countries is a leading exporter of cocoa?", "Côte d'Ivoire", "Niger", "Mali", "Mauritania", "Côte d'Ivoire is the world's largest cocoa producer."],
        ["H", "The continental agreement intended to create a single market for goods and services in Africa is the", "AfCFTA", "NAFTA", "OPEC", "ECOMOG", "The African Continental Free Trade Area."],
      ],
    },
    {
      week: 9,
      title: "Tourism",
      subtopics: ["Meaning and importance of tourism", "Types of tourism", "Tourist attractions in Nigeria and West Africa", "Benefits and challenges of tourism"],
      objectives: ["Define tourism and tourist", "Classify the types of tourism", "Locate major tourist attractions in Nigeria and West Africa", "Discuss the benefits and challenges of tourism"],
      lesson: {
        title: "Travel for Leisure",
        summary: "What tourism is, the places that attract visitors in Nigeria and West Africa, and its benefits and problems.",
        minutes: 40,
        notes: `## Meaning
**Tourism** is the **temporary movement of people** away from their usual place of residence for **leisure, recreation, business, education, health or religious** purposes, together with the services provided for them. A **tourist** is a visitor who stays at least **24 hours** (overnight) but less than a year; an **excursionist** returns the same day.

## Types of tourism
| Type | Meaning |
|---|---|
| **domestic tourism** | people touring **within their own country** |
| **international tourism** | travel **across national borders** — inbound and outbound |
| **eco-tourism** | responsible travel to **natural areas** that conserves the environment and benefits local people — game reserves, forests, waterfalls |
| **cultural tourism** | visiting festivals, museums, palaces, crafts, historic sites |
| **religious tourism (pilgrimage)** | visits to holy places — Mecca, Jerusalem; large religious conventions |
| **medical tourism** | travel for treatment |
| **business / conference tourism** | meetings, trade fairs |
| **sports and adventure tourism** | games, mountaineering, safaris |
| **educational tourism** | excursions, study visits |

## Factors that favour tourism
attractive **scenery and climate**; **wildlife**; culture and history; **accessibility** (roads, airports); **accommodation**; **security** and political stability; publicity; income and leisure time; favourable government policy (visas).

## Tourist attractions in Nigeria
| Attraction | Location |
|---|---|
| **Yankari Game Reserve** and Wikki Warm Spring | Bauchi State |
| **Obudu Mountain Resort** (cattle ranch) and cable car | Cross River State |
| **Cross River National Park**; Kainji Lake, Gashaka-Gumti, Old Oyo, Okomu national parks | various |
| **Olumo Rock** | Abeokuta, Ogun State |
| **Zuma Rock** | near Abuja, Niger State |
| **Ikogosi Warm Springs** | Ekiti State |
| **Erin-Ijesha (Olumirin) Waterfalls** | Osun State |
| **Gurara Falls**; **Farin Ruwa Falls**; **Agbokim Falls** | Niger; Nasarawa; Cross River |
| **Osun-Osogbo Sacred Grove** (UNESCO World Heritage Site) | Osun State |
| **Sukur Cultural Landscape** (UNESCO World Heritage Site) | Adamawa State |
| **Idanre Hills** | Ondo State |
| **Mambilla Plateau**; **Jos Plateau** (Shere Hills, wildlife park) | Taraba; Plateau |
| beaches — Bar Beach, Lekki, Badagry; **Badagry slave route** | Lagos State |
| **Argungu Fishing Festival** | Kebbi State |
| **Durbar** festivals | Kano, Katsina, Zaria |
| **Calabar Carnival**; **Eyo** festival; **Ojude Oba** | Calabar; Lagos; Ijebu-Ode |
| museums; Benin moat and bronzes; Kano city walls and dye pits; Lekki Conservation Centre | Benin, Kano, Lagos |

## Tourist attractions elsewhere in West Africa
| Country | Attractions |
|---|---|
| **Ghana** | Cape Coast and Elmina castles; Kakum National Park canopy walk; Mole National Park; Lake Volta |
| **Senegal** | Gorée Island; Djoudj bird sanctuary; Dakar |
| **The Gambia** | beach resorts; Kunta Kinteh Island; River Gambia |
| **Mali** | Timbuktu; Great Mosque of Djenné; Dogon country |
| **Benin** | Ouidah slave route; Abomey palaces; Pendjari National Park |
| **Côte d'Ivoire** | Basilica of Yamoussoukro; Taï National Park |
| **Cabo Verde** | island beaches and volcano (Fogo) |
| **Sierra Leone** | Freetown beaches; Tiwai Island |

## Benefits
- **foreign exchange** and government **revenue**
- **employment** — hotels, transport, guides, crafts
- development of **infrastructure** — roads, airports, electricity
- market for **local crafts and farm produce**
- **conservation** of wildlife and monuments
- preservation and display of **culture**
- international understanding; education and recreation
- growth of rural areas; diversification of the economy

## Challenges
- **insecurity** — banditry, kidnapping, political unrest
- **poor roads**, electricity and water supply
- inadequate and costly **accommodation**
- poor **publicity** and marketing
- low incomes and little leisure culture among residents
- poor **maintenance** of sites; poaching and bush burning
- difficult visa procedures; high air fares
- health fears (malaria, epidemics)
- negative effects: pollution, cultural erosion, crime, rising prices

## Solutions
Improve security and infrastructure; promote sites at home and abroad; private investment; train personnel; conserve attractions; simplify visas.`,
        examples: `**Example 1.** Name the state in which Yankari Game Reserve is located. *Answer:* **Bauchi State**.

**Example 2.** What is eco-tourism? *Answer:* **Responsible travel to natural areas** that conserves the environment and benefits local people.

**Example 3.** Give two benefits of tourism to a country. *Answer:* It earns **foreign exchange** and creates **employment**.`,
      },
      questions: [
        ["E", "Travel by people within their own country for leisure is", "domestic tourism", "international tourism", "emigration", "commuting", "No national border is crossed."],
        ["E", "Yankari Game Reserve is located in", "Bauchi State", "Cross River State", "Ogun State", "Kebbi State", "It contains the Wikki Warm Spring."],
        ["E", "Olumo Rock is found in", "Abeokuta", "Jos", "Calabar", "Enugu", "It is in the capital of Ogun State."],
        ["M", "Responsible travel to natural areas that conserves the environment is", "eco-tourism", "medical tourism", "business tourism", "sports tourism", "It centres on nature and conservation."],
        ["M", "The Argungu Fishing Festival is held in", "Kebbi State", "Kano State", "Lagos State", "Osun State", "It takes place on the Sokoto River at Argungu."],
        ["M", "Which of these is a benefit of tourism?", "Earning of foreign exchange", "Erosion of culture", "Environmental pollution", "Increase in crime", "Tourists spend foreign currency in the country."],
        ["M", "The Obudu Mountain Resort is in", "Cross River State", "Plateau State", "Taraba State", "Ekiti State", "It lies on the Obudu Plateau near the Cameroon border."],
        ["H", "Which of these Nigerian sites is on the UNESCO World Heritage List?", "Osun-Osogbo Sacred Grove", "Zuma Rock", "Ikogosi Warm Springs", "Bar Beach", "Osun-Osogbo and Sukur are Nigeria's two listed sites."],
        ["H", "Cape Coast and Elmina castles are tourist attractions in", "Ghana", "Senegal", "Mali", "The Gambia", "They are former slave-trade forts on Ghana's coast."],
        ["H", "The most serious factor currently limiting international tourism in parts of West Africa is", "insecurity", "excess hotel rooms", "too many airports", "cool climate", "Tourists avoid areas of conflict and kidnapping."],
      ],
      jamb: [
        ["M", "A visitor who travels to a place and returns the same day without staying overnight is", "an excursionist", "a tourist", "a migrant", "a refugee", "A tourist stays at least 24 hours."],
        ["H", "Gorée Island, a historic slave-trade site and tourist centre, is in", "Senegal", "Ghana", "Benin", "Sierra Leone", "It lies off the coast of Dakar."],
      ],
    },
    {
      week: 10,
      title: "Satellite Remote Sensing",
      subtopics: ["Meaning and principles of remote sensing", "Aerial photography and satellite imagery", "Components and process of remote sensing", "Applications in geography"],
      objectives: ["Define remote sensing and explain its principles", "Distinguish aerial photography from satellite imagery", "Describe the stages of the remote-sensing process", "State the applications of remote sensing in mapping, agriculture and environmental monitoring"],
      lesson: {
        title: "Observing the Earth from Above",
        summary: "How information about the earth is collected from aircraft and satellites, and how geographers use it.",
        minutes: 40,
        notes: `## Meaning
**Remote sensing** is the science of obtaining information about objects or areas on the earth's surface **from a distance, without physical contact** — by sensors carried on aircraft, drones or satellites.

## Principles
Everything on the earth's surface **reflects or emits electromagnetic energy** in its own characteristic way — its **spectral signature**. Healthy vegetation reflects strongly in the near infra-red; water absorbs it and appears dark. Sensors record this energy, and the differences allow features to be identified.

### The process
1. **Energy source** — the **sun** (or the sensor itself).
2. Energy passes through the **atmosphere**.
3. It **interacts with the target** — reflected, absorbed or emitted.
4. The **sensor** on a platform records the returning energy.
5. Data are **transmitted** to a **ground receiving station**.
6. Data are **processed** into images.
7. Images are **interpreted and analysed**.
8. Information is **applied** to solve a problem.

### Passive and active sensors
- **Passive** sensors record natural energy — reflected sunlight or emitted heat (cameras, multispectral scanners). They need daylight and clear skies.
- **Active** sensors send out their own energy and record the return — **radar** and **lidar**. They work at night and through cloud.

### Platforms
ground-based (towers); **airborne** (aircraft, balloons, **drones**); **space-borne** (satellites).

### Resolution
- **spatial** — the size of the smallest object that can be seen (e.g. 30 m, 1 m)
- **spectral** — the number of wavebands recorded
- **temporal** — how often the same area is imaged
- **radiometric** — sensitivity to differences in energy

## Types of remote sensing
### Aerial photography
Photographs taken from **aircraft or drones**.
- **vertical** photographs — camera pointing straight down; uniform scale; used for mapping
- **oblique** photographs — camera tilted; **high oblique** shows the horizon, **low oblique** does not
- overlapping pairs viewed through a **stereoscope** give a three-dimensional view

### Satellite imagery
Images recorded by **satellites** orbiting the earth, e.g. **Landsat** (USA), **SPOT** (France), Sentinel (Europe), and **NigeriaSat-1 (2003), NigeriaSat-2 and NigeriaSat-X (2011)**. Weather satellites (Meteosat) are **geostationary**; earth-observation satellites are mostly in **polar, sun-synchronous** orbits.

| | Aerial photography | Satellite imagery |
|---|---|---|
| **altitude** | low (hundreds to thousands of metres) | very high (hundreds to 36 000 km) |
| **coverage** | small area per photograph | very large area |
| **detail** | very high | varies; generally lower |
| **repetition** | only when a flight is made | regular, automatic revisits |
| **cost per area** | high | low |
| **form** | photograph | digital, multispectral data |

## Applications
- **Mapping:** making and **updating topographic maps**; land-use and land-cover maps; road and settlement mapping.
- **Agriculture:** crop inventory and yield forecasting; monitoring crop health and drought; soil mapping; locust monitoring.
- **Environmental monitoring:** deforestation and desertification; flood and erosion mapping; oil spills; bush fires; shrinking of Lake Chad; coastal erosion.
- **Weather and climate:** cloud images, storm tracking, forecasting.
- **Urban planning:** growth of cities, slums, traffic.
- **Mineral and water exploration:** geological structures; groundwater.
- **Disaster management:** damage assessment and relief planning.
- **Population studies and security:** counting dwellings; border surveillance.

## Advantages and limitations
**Advantages:** covers large and inaccessible areas quickly; repeated coverage shows change over time; up to date; cheaper than ground survey over large areas; a permanent record.
**Limitations:** costly equipment and skilled personnel; **cloud cover** obstructs optical sensors; needs **ground truthing** (field checking); small features may be missed.

In Nigeria, remote sensing is co-ordinated by the **National Space Research and Development Agency (NASRDA)** and the National Centre for Remote Sensing, Jos.`,
        examples: `**Example 1.** Define remote sensing. *Answer:* Obtaining information about the earth's surface **from a distance without physical contact**, using sensors on aircraft or satellites.

**Example 2.** Why can radar images be obtained at night and through cloud? *Answer:* Radar is an **active sensor**; it supplies its own energy.

**Example 3.** Give one use of satellite images in environmental studies. *Answer:* **Monitoring deforestation** (or desertification, floods, oil spills).`,
      },
      questions: [
        ["E", "Obtaining information about the earth's surface without physical contact is", "remote sensing", "chain surveying", "field sketching", "levelling", "Sensors on aircraft or satellites collect the data."],
        ["E", "The main source of energy for passive remote sensing is the", "sun", "moon", "satellite battery", "ground station", "Passive sensors record reflected sunlight."],
        ["E", "Photographs of the ground taken from an aircraft are", "aerial photographs", "satellite orbits", "topographic profiles", "cadastral plans", "They may be vertical or oblique."],
        ["M", "A sensor that sends out its own energy and records the return is", "an active sensor", "a passive sensor", "a stereoscope", "a planimeter", "Radar and lidar are active sensors."],
        ["M", "An aerial photograph taken with the camera pointing straight down is", "vertical", "high oblique", "low oblique", "panoramic", "Vertical photographs are used for mapping."],
        ["M", "Compared with aerial photographs, satellite images", "cover much larger areas", "are taken from lower altitudes", "always show more detail", "cannot be repeated", "Satellites view wide areas from great heights."],
        ["M", "Which of these is an earth-observation satellite series?", "Landsat", "Voyager", "Apollo", "Hubble", "Landsat has imaged the earth's surface since 1972."],
        ["H", "The size of the smallest object that can be distinguished on an image is its", "spatial resolution", "temporal resolution", "spectral signature", "swath width", "A 30 m resolution image cannot show objects much smaller than 30 m."],
        ["H", "Checking the interpretation of an image by visiting the area on the ground is", "ground truthing", "geo-coding", "digitising", "rectification", "Field checks confirm what the image shows."],
        ["H", "A high oblique aerial photograph differs from a low oblique one in that it", "shows the horizon", "has a uniform scale", "is taken vertically", "is taken by satellite", "The camera is tilted enough to include the horizon."],
      ],
      jamb: [
        ["M", "Which of the following is a limitation of optical satellite remote sensing in the humid tropics?", "Persistent cloud cover", "Excess ground stations", "Too little vegetation", "Low sun angle all year", "Clouds block the view of optical sensors."],
        ["H", "The characteristic way in which a surface reflects energy in different wavebands is its", "spectral signature", "spatial resolution", "orbital period", "nadir point", "It allows features such as water and vegetation to be told apart."],
      ],
    },
    {
      week: 11,
      title: "GIS Application: Components and Uses",
      subtopics: ["Meaning of GIS", "Components: hardware, software, data, people and methods", "Data models and functions of GIS", "Applications in resource management, planning and environmental studies"],
      objectives: ["Define a geographic information system", "Describe the five components of GIS", "Distinguish raster from vector data and spatial from attribute data", "Explain the applications of GIS in resource management, planning and environmental studies"],
      lesson: {
        title: "Geographic Information Systems in Use",
        summary: "What a GIS is made of, how it handles spatial data, and how it helps in planning and management.",
        minutes: 40,
        notes: `## Meaning
A **geographic information system (GIS)** is a **computer-based system** for **capturing, storing, managing, analysing and displaying** data that are **referenced to locations** on the earth's surface. It answers *where?* and *what is there?* and *what has changed?*

## Components
| Component | Description |
|---|---|
| **hardware** | computers, servers, **digitisers**, scanners, **GPS receivers**, plotters and printers, tablets and phones |
| **software** | programs that store, analyse and display the data — e.g. **ArcGIS**, **QGIS** (free), MapInfo, Google Earth |
| **data** | the most important and costly component: maps, satellite images, aerial photographs, GPS readings, census and survey tables |
| **people** | the trained users — analysts, surveyors, planners, technicians — and those who use the results |
| **methods (procedures)** | the rules, plans and standards an organisation follows in using the GIS |

## Data in a GIS
### Spatial and attribute data
- **Spatial (geographic) data** tell **where** a feature is — its location and shape.
- **Attribute (non-spatial) data** tell **what** it is — name, population, type, ownership.
*Example:* a school is a point at given co-ordinates (spatial); its name, enrolment and number of teachers are attributes.

### Data models
| | Vector | Raster |
|---|---|---|
| **represents features as** | **points, lines and polygons** | a grid of **cells (pixels)** |
| **examples** | wells (points), roads and rivers (lines), farms and states (polygons) | satellite images, scanned maps, elevation and rainfall surfaces |
| **strength** | precise boundaries; small files | suits continuous data and images |

### Layers
Data are organised in **layers (themes)** — relief, rivers, roads, settlements, soils — which can be **overlaid** to reveal relationships.

### Sources of data
existing maps (digitised or scanned); **remote sensing**; **GPS** field surveys; censuses and questionnaires.

## What a GIS does
1. **data capture (input)** — digitising, scanning, GPS
2. **storage and management** — databases
3. **query** — "show all primary schools within 2 km of the river"
4. **analysis** — **overlay**, **buffering** (zones around features), network analysis (shortest route), measurement of distance and area
5. **display (output)** — maps, tables, charts, 3-D views

**GPS** (Global Positioning System) uses signals from at least **four satellites** to fix a position; it supplies location data to a GIS.

## Applications
### Resource management
- mapping **forests, minerals, water and soils**
- **agriculture** — suitability mapping, precision farming, crop monitoring
- wildlife and park management; fisheries
- oil and gas facilities; pipelines

### Planning
- **urban and regional planning** — land use, zoning, growth of towns
- **siting facilities** — schools, hospitals, markets, boreholes
- **transport** — route planning, traffic, navigation
- **utilities** — electricity, water and telecommunication networks
- **land administration** — cadastral records, property tax
- **census and elections** — enumeration areas, polling units
- business location and delivery routing

### Environmental studies
- monitoring **deforestation, desertification and erosion**
- **flood-risk** and landslide-hazard mapping
- pollution and **oil-spill** tracking
- climate-change impact studies
- **disaster management** — evacuation and relief
- disease mapping (malaria, cholera, COVID-19)

### Security
crime mapping; border and pipeline surveillance; emergency response.

## Advantages
Speed and accuracy; easy **updating** of maps; combines many kinds of data; supports better decisions; saves cost over time.

## Problems in Nigeria
High cost of hardware, software and data; shortage of trained personnel; unstable electricity; out-of-date base maps; poor data sharing among agencies.`,
        examples: `**Example 1.** List the five components of GIS. *Answer:* **hardware, software, data, people and methods**.

**Example 2.** A road is stored as a line and a lake as a polygon. Which data model is this? *Answer:* the **vector** model.

**Example 3.** A planner draws a 500 m zone around a river in which building is forbidden. Name the GIS operation. *Answer:* **buffering**.`,
      },
      questions: [
        ["E", "A computer-based system for capturing, storing, analysing and displaying location-referenced data is a", "geographic information system", "global positioning satellite", "weather station", "topographic survey", "This is the definition of GIS."],
        ["E", "Which of these is a hardware component of GIS?", "Digitiser", "QGIS", "Census data", "Analyst", "A digitiser converts paper maps into digital form."],
        ["E", "ArcGIS and QGIS are examples of GIS", "software", "hardware", "data", "procedures", "They are programs for handling spatial data."],
        ["M", "Information describing what a feature is, such as the name and population of a town, is", "attribute data", "spatial data", "raster data", "a buffer", "Attributes describe the characteristics of features."],
        ["M", "In the vector data model, a borehole is represented as a", "point", "line", "polygon", "pixel", "Features with no significant area are points."],
        ["M", "A satellite image stored in a GIS is an example of", "raster data", "vector data", "attribute data", "a network", "It is made up of a grid of pixels."],
        ["M", "The component of GIS generally regarded as the most costly and important is", "data", "the printer", "the keyboard", "the monitor", "Without accurate data the system is useless."],
        ["H", "Placing soil, slope and rainfall layers on top of one another to find suitable farmland is", "overlay analysis", "buffering", "digitising", "geo-referencing", "Overlay combines layers to reveal relationships."],
        ["H", "Creating a zone of a given distance around a feature in GIS is", "buffering", "overlaying", "scanning", "querying", "Buffers show areas within a set distance."],
        ["H", "The minimum number of satellites normally needed by a GPS receiver to fix an accurate three-dimensional position is", "four", "one", "two", "twelve", "Four signals give latitude, longitude, height and time correction."],
      ],
      jamb: [
        ["M", "Which of the following is an application of GIS in urban planning?", "Selecting sites for new schools and hospitals", "Measuring rainfall with a rain gauge", "Drilling boreholes", "Rearing livestock", "GIS analyses population and distance to choose locations."],
        ["H", "In a GIS, a state boundary is best represented in the vector model as a", "polygon", "point", "pixel", "line of latitude", "Areas are stored as closed polygons."],
      ],
    },
  ],
};
