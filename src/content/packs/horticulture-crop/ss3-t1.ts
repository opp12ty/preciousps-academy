import type { TermPlan } from "../types";

/** SS3 Horticulture and Crop Production, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 2,
      title: "Advanced Greenhouse Technology",
      subtopics: ["Greenhouses and protected cultivation", "Climate control", "Fertigation", "Management and economics"],
      objectives: ["Describe greenhouse structures and their purpose", "Explain how the greenhouse climate is controlled", "Explain fertigation", "State the advantages and limitations of greenhouse production"],
      lesson: {
        title: "Growing under Cover",
        summary: "Structures and systems that give crops the climate, water and nutrients they need all year round.",
        minutes: 40,
        notes: `## Protected cultivation
A **greenhouse** is a **structure covered with transparent material in which crops are grown under controlled or partly controlled conditions**. **Protected cultivation** includes greenhouses, **screen (net) houses**, **shade houses**, **polytunnels** and low tunnels.

### How a greenhouse works
Sunlight passes through the cover and warms the inside; the cover slows the escape of heat — the **greenhouse effect**. In the tropics the main task is **cooling and excluding rain, pests and excess sun**, not heating.

## Structures
| Part | Notes |
|---|---|
| **frame** | galvanised steel, aluminium, timber, bamboo |
| **covering (cladding)** | **UV-stabilised polyethylene film** (commonest), polycarbonate sheets, glass; **insect-proof net** on sides; shade net |
| **shapes** | tunnel (hoop/Quonset), gable, **sawtooth** (roof vents for hot climates), multi-span |
| **floor** | ground beds, raised beds, benches, grow bags, troughs |
| **entrance** | **double door (air lock)** and footbath for biosecurity |

**Site:** level, well drained, full sun, water and power, sheltered from strong wind, good access. **Orientation:** ridge usually north–south for even light.

## Climate control
| Factor | Methods |
|---|---|
| **temperature (cooling)** | **natural ventilation** — roof and side vents; **fans**; **fan-and-pad evaporative cooling**; **fogging / misting**; **shade nets** and whitewash; high roofs |
| **temperature (heating)** | heaters (temperate regions; cold nights) |
| **humidity** | ventilation lowers it; misting raises it; high humidity favours fungal diseases |
| **light** | shade nets (30–50%) reduce intensity; supplementary **grow lights (LED)** extend day length |
| **carbon dioxide** | ventilation; CO₂ enrichment raises photosynthesis in closed houses |
| **air movement** | circulation fans for uniform conditions |

**Sensors and controllers** — thermometers, **hygrometers**, light and CO₂ sensors linked to **automatic controllers** and timers — open vents, start fans and run irrigation. Many can be watched by phone.
Typical targets for tomato: **day 21–27 °C, night 16–18 °C, relative humidity 60–80%**.

## Irrigation and fertigation
**Drip irrigation** delivers water slowly to the root zone through emitters — saves water, keeps leaves dry.
**Fertigation** is the **application of dissolved fertilisers through the irrigation system**.

### Components
water source and tank → **pump** → **filter** → **fertiliser injector** (Venturi, dosing pump or fertiliser tank) → mainline → **drip laterals and emitters**; timer/controller; pressure gauge.

### Managing the nutrient solution
- **water-soluble fertilisers** supplying N, P, K, Ca, Mg, S and micronutrients; stock solutions in separate tanks (**A and B**) so that calcium does not react with sulphates and phosphates
- **EC (electrical conductivity)** — measures the **total concentration of dissolved salts**; adjusted to the crop and stage (about 1.5–3.0 mS/cm for many vegetables)
- **pH** — kept about **5.5–6.5** so that nutrients remain available
- small, frequent applications matched to crop demand

### Advantages of fertigation
nutrients placed **at the roots when needed**; **saves fertiliser, water and labour**; uniform application; less leaching and pollution; higher yield and quality.
### Limitations
cost of equipment; **clogging** of emitters (filter and flush lines); needs soluble fertilisers and skill; salt build-up if mismanaged.

## Crops and practices
**tomato, sweet pepper, cucumber, lettuce, strawberry, herbs, cut flowers, seedlings**. Indeterminate varieties **trellised** on strings; pruning of side shoots; **bumblebees or hand/vibration pollination** for tomato; soilless media (**cocopeat**, perlite, rockwool); **integrated pest management** — sticky traps, nets, biological control; sanitation.

## Advantages of greenhouse production
**year-round production**; higher **yield per unit area** (several times that of the open field); better **quality**; protection from **rain, wind, pests and diseases**; efficient use of **water and fertiliser**; less pesticide; production near cities; off-season supply at high prices.

## Limitations
**high initial cost**; technical skill required; heat build-up in the tropics; disease spreads fast in humid houses; cost of power and maintenance; cover must be replaced every few years; market must justify the cost.`,
        examples: `**Example 1.** What is fertigation? *Answer:* **Applying dissolved fertiliser through the irrigation system**.

**Example 2.** Name two methods of cooling a greenhouse. *Answer:* **Ventilation** and **fan-and-pad evaporative cooling**.

**Example 3.** What does EC measure in a nutrient solution? *Answer:* The **total concentration of dissolved salts** (nutrient strength).`,
      },
      questions: [
        ["E", "A structure covered with transparent material for growing crops under controlled conditions is a", "greenhouse", "silo", "barn", "crib", "It protects crops and allows year-round production."],
        ["E", "Applying dissolved fertiliser through the irrigation system is", "fertigation", "broadcasting", "side dressing", "mulching", "Water and nutrients reach the roots together."],
        ["E", "The commonest covering material for greenhouses is", "polyethylene film", "corrugated iron", "asbestos", "plywood", "It is light, cheap and transmits light."],
        ["M", "The irrigation method that delivers water slowly to the root zone through emitters is", "drip irrigation", "flood irrigation", "furrow irrigation", "basin irrigation", "It saves water and keeps leaves dry."],
        ["M", "The instrument used to measure relative humidity in a greenhouse is the", "hygrometer", "barometer", "anemometer", "lactometer", "Humidity control reduces disease."],
        ["M", "In the tropics, the main climate problem in a greenhouse is", "excess heat", "frost", "snow load", "short days", "Cooling and ventilation are the priority."],
        ["M", "An advantage of greenhouse production is", "year-round production of high-quality crops", "low initial cost", "no need for skill", "no need for water", "Crops are protected from weather and pests."],
        ["H", "The measure of the total concentration of dissolved nutrient salts in a solution is", "EC", "pH", "RH", "PAR", "Electrical conductivity rises with salt concentration."],
        ["H", "Concentrated fertiliser stock solutions are kept in separate A and B tanks in order to", "prevent calcium from reacting to form insoluble deposits", "save water", "increase the pH", "cool the solution", "Calcium precipitates with sulphates and phosphates when concentrated."],
        ["H", "A greenhouse cooling system that draws air through wet pads uses the principle of", "evaporative cooling", "condensation", "radiation", "convection heating", "Evaporating water absorbs heat from the incoming air."],
      ],
    },
    {
      week: 3,
      title: "Hydroponics",
      subtopics: ["Meaning of hydroponics", "Types of hydroponic systems", "Nutrient solution and growing media", "Advantages and disadvantages"],
      objectives: ["Explain hydroponics", "Describe the main types of hydroponic systems", "Explain the management of the nutrient solution and media", "State the advantages and disadvantages of hydroponics"],
      lesson: {
        title: "Growing without Soil",
        summary: "Raising crops in nutrient solution, with or without an inert medium.",
        minutes: 40,
        notes: `## Meaning
**Hydroponics** is the **growing of plants without soil, with their roots supplied by a nutrient solution**. Plants need water, mineral nutrients, air for the roots, light and support — soil is only one way of providing these.

## Requirements
- **nutrient solution** — all essential elements dissolved in water
- **oxygen at the roots** — aeration
- **support** — net pots, strings, inert medium
- **light, suitable temperature**
- clean **water**; reservoir; pump; pipes or channels

## Growing media (substrates)
Inert materials that hold roots, air and moisture: **cocopeat (coir)**, **perlite**, vermiculite, **rockwool**, expanded clay pellets, gravel, sand, rice hulls, sawdust (aged).
A good medium is **inert, clean, well aerated, moisture-retentive, stable and cheap**.

## Types of systems
| System | How it works | Suited to |
|---|---|---|
| **nutrient film technique (NFT)** | a **thin film** of solution flows continuously along sloping channels past bare roots and returns to the tank | lettuce, herbs, leafy greens |
| **deep water culture (DWC) / raft system** | plants float on rafts with roots **suspended in aerated solution** | lettuce, leafy vegetables |
| **wick system** | a **wick** draws solution up into the medium; no pump (passive) | small plants, herbs |
| **ebb and flow (flood and drain)** | the tray is **flooded periodically**, then drained back | seedlings, pot plants |
| **drip system** | solution **dripped** onto each plant in a medium (bags, pots); recirculating or run-to-waste | tomato, pepper, cucumber |
| **Dutch (Bato) bucket** | drip into buckets of perlite or cocopeat | vine crops |
| **Kratky method** | non-circulating; roots partly in solution, partly in air | simple, small scale |
| **aeroponics** | roots misted with solution | high-value crops, seed potato |

**Open (run-to-waste)** systems do not reuse the solution; **closed (recirculating)** systems do — saving water and nutrients but requiring monitoring.

## The nutrient solution
Supplies the **macronutrients** N, P, K, Ca, Mg, S and **micronutrients** Fe, Mn, Zn, Cu, B, Mo (plants obtain C, H, O from air and water).
- **pH 5.5–6.5** — outside this range some nutrients become unavailable (iron deficiency above about 7); adjusted with **pH up / pH down** (alkali / acid)
- **EC** about 1.2–2.5 mS/cm, depending on crop and stage — low EC: deficiency; high EC: salt stress
- **temperature** about 18–24 °C; warm solution holds less oxygen
- **aeration** with air pump and air stones
- **top up** with water as plants use it; **replace** periodically (e.g. every 2–3 weeks)
- keep **light out** of the tank to stop **algae**

### Deficiency signs
nitrogen — pale, yellow older leaves; iron — yellowing between veins of young leaves; calcium — blossom-end rot of tomato, tip burn of lettuce; potassium — scorched leaf margins.

## Advantages
- **no soil needed** — usable in cities, on roofs, on poor or contaminated land
- **faster growth and higher yields** per unit area
- **water saving** — up to about 90% less than field growing in recirculating systems
- **efficient use of fertiliser**
- **no weeds**; fewer **soil-borne** pests and diseases
- **year-round** production; clean produce
- less labour for tillage and weeding
- crops can be stacked — **vertical farming**

## Disadvantages
- **high initial cost**
- needs **technical knowledge** and close monitoring
- dependence on **electricity** — pump failure can kill plants quickly
- **water-borne diseases** (e.g. *Pythium* root rot) spread fast through a shared solution
- limited range of economic crops — unsuited to most staple and tree crops
- cost of soluble fertilisers and testing meters

## Suitable crops
lettuce, spinach, kale, herbs (basil, mint, coriander), tomato, pepper, cucumber, strawberry; **hydroponic fodder** (sprouted maize, barley, sorghum) for livestock.

## Setting up a small NFT unit
PVC pipes with holes for net pots, laid at a slight slope (about 1:40) → reservoir and small pump → return pipe → seedlings raised in cocopeat plugs → nutrient solution mixed and checked for pH and EC → daily checks.`,
        examples: `**Example 1.** Define hydroponics. *Answer:* **Growing plants without soil**, with roots supplied by a nutrient solution.

**Example 2.** Describe the nutrient film technique. *Answer:* A **thin film of nutrient solution flows continuously along channels** past the plant roots and returns to the tank.

**Example 3.** State the pH range suitable for most hydroponic crops. *Answer:* About **5.5–6.5**.`,
      },
      questions: [
        ["E", "Growing plants without soil in a nutrient solution is", "hydroponics", "agroforestry", "mulching", "terracing", "The roots take nutrients from the solution."],
        ["E", "Which of these is a hydroponic growing medium?", "Cocopeat", "Clay loam", "Farmyard manure", "Compost", "It is an inert substrate from coconut husk."],
        ["E", "Hydroponic crops are free from", "weeds", "light", "water", "nutrients", "There is no soil for weed seeds."],
        ["M", "The system in which a thin film of solution flows along channels past the roots is the", "nutrient film technique", "wick system", "deep water culture", "Kratky method", "It is widely used for lettuce."],
        ["M", "A hydroponic system that needs no pump because solution moves up a wick is", "passive", "aeroponic", "recirculating drip", "ebb and flow", "The wick system has no moving parts."],
        ["M", "The pH range suitable for most hydroponic crops is", "5.5–6.5", "2.0–3.0", "8.0–9.0", "10–11", "Nutrients are most available in this slightly acidic range."],
        ["M", "Light is kept out of the nutrient tank in order to prevent the growth of", "algae", "roots", "seedlings", "fish", "Algae compete for nutrients and block pipes."],
        ["H", "A major risk of recirculating hydroponic systems is that", "root diseases spread quickly through the shared solution", "weeds multiply", "soil erosion increases", "the crop needs more water", "Pathogens such as Pythium travel in the water."],
        ["H", "Yellowing between the veins of young leaves in a hydroponic crop growing at high pH indicates deficiency of", "iron", "nitrogen", "potassium", "phosphorus", "Iron becomes unavailable as pH rises."],
        ["H", "Blossom-end rot of hydroponic tomato fruits is associated with a shortage of", "calcium", "sulphur", "molybdenum", "chlorine", "Calcium is needed in developing fruit tissue."],
      ],
    },
    {
      week: 4,
      title: "Aeroponics",
      subtopics: ["Meaning of aeroponics", "Components and method", "Advantages", "Limitations and applications"],
      objectives: ["Explain aeroponics", "Describe the components and operation of an aeroponic system", "State its advantages", "State its limitations and applications"],
      lesson: {
        title: "Roots in the Air",
        summary: "Growing plants with their roots hanging in air and misted with nutrient solution.",
        minutes: 40,
        notes: `## Meaning
**Aeroponics** is the **growing of plants with their roots suspended in air inside a dark chamber and sprayed at intervals with a fine mist of nutrient solution**. No soil or solid medium surrounds the roots. It is regarded as an advanced form of hydroponics.

## Components
| Component | Function |
|---|---|
| **root chamber** (box, tower or trough) | dark, humid enclosure for the roots |
| **plant holders** — net cups, foam collars | support the stem at the lid |
| **reservoir** | holds the nutrient solution |
| **pump** | delivers solution under pressure |
| **misting nozzles** | break the solution into fine droplets |
| **timer / controller** | switches the mist on and off |
| **filter** | prevents nozzle blockage |
| **return drain** | carries unused solution back (recirculation) |
| **sensors** | pH, EC, temperature |

## Types
- **low-pressure aeroponics** — ordinary pump and sprinklers; larger droplets; cheap; common in small units and **tower gardens**
- **high-pressure aeroponics** — high pressure produces a true **mist of about 20–50 microns**; best root absorption; costly
- **ultrasonic (fogponics)** — fog generated by vibrating discs

## The method
1. Raise **seedlings or cuttings** in small plugs (foam, rockwool).
2. Place each in a holder with **roots hanging into the chamber**.
3. Prepare the **nutrient solution** — correct pH (about 5.5–6.5) and EC.
4. The pump sprays the roots for **a few seconds every few minutes** (for example 5 seconds on, several minutes off), keeping them moist but well aerated.
5. Excess solution drains back to the reservoir.
6. **Monitor** pH, EC, nozzles and the timer daily; top up and renew the solution.
7. Provide light, support and pest control; harvest.

## Why it works
Roots hanging in air receive **abundant oxygen**, which increases respiration and nutrient uptake; fine droplets give a large surface for absorption.

## Advantages
- **fastest growth** and high yields — excellent root aeration
- **greatest saving of water** — up to about 95% less than field cropping; less than hydroponics
- **less fertiliser** used
- **no soil; no weeds**; few soil-borne diseases
- **clean, easy harvest** — roots and tubers are visible and accessible
- plants easily **inspected** and replaced; less spread of disease than in a shared pool
- high plant density; suited to **vertical farming** and small spaces
- year-round production

## Limitations
- **high cost** of set-up
- **dependence on electricity** — roots dry out within minutes to hours if the pump or timer fails; needs backup power
- **nozzles clog** with salts — filters and regular cleaning needed
- demands **technical skill** and constant monitoring
- root chamber must stay **dark and clean** — algae and pathogens
- limited to high-value crops

## Applications
- **seed potato (minituber) production** — clean planting material; many more tubers per plant than in soil; harvested in several pickings
- **seed yam** production — vine cuttings rooted in aeroponics give clean mini-tubers, speeding multiplication
- leafy vegetables, herbs, strawberries, tomato
- **rooting of cuttings** (propagation)
- research on roots; space agriculture
- urban and indoor farms

## Comparison
| | Hydroponics | Aeroponics |
|---|---|---|
| **roots** | in solution or wet medium | in air, misted |
| **oxygen at roots** | good with aeration | very high |
| **water use** | low | lowest |
| **risk on power failure** | hours to a day | minutes to hours |
| **cost and skill** | moderate to high | highest |

## Care of the system
flush lines; clean nozzles; disinfect between crops; check timer and pump daily; keep spare nozzles and a backup pump.`,
        examples: `**Example 1.** Define aeroponics. *Answer:* Growing plants with **roots suspended in air and misted with nutrient solution**.

**Example 2.** Why do aeroponic plants grow fast? *Answer:* Their roots receive **abundant oxygen** together with water and nutrients.

**Example 3.** Give one application of aeroponics in Nigeria. *Answer:* Production of **clean seed yam** (or seed potato) mini-tubers.`,
      },
      questions: [
        ["E", "Growing plants with roots hanging in air and sprayed with nutrient mist is", "aeroponics", "aquaponics", "geoponics", "agroforestry", "No solid medium surrounds the roots."],
        ["E", "In an aeroponic system, the solution is broken into fine droplets by", "misting nozzles", "wicks", "rafts", "gravel beds", "The mist wets the hanging roots."],
        ["E", "The root chamber of an aeroponic unit is kept", "dark and humid", "bright and dry", "open to the sun", "filled with soil", "Darkness prevents algae and suits root growth."],
        ["M", "The main reason for the rapid growth of aeroponic plants is", "abundant oxygen at the roots", "heavy soil", "absence of light", "high salt level", "Well-aerated roots absorb nutrients efficiently."],
        ["M", "The greatest risk in aeroponics is", "failure of the pump or power supply", "weed growth", "soil erosion", "waterlogging of soil", "Roots dry out quickly without mist."],
        ["M", "The device that switches the mist on and off at set intervals is the", "timer", "filter", "reservoir", "net cup", "Roots are sprayed for a few seconds every few minutes."],
        ["M", "Nozzle blockage in an aeroponic system is prevented mainly by", "filtering the solution and regular cleaning", "adding soil", "raising the pH to 9", "removing the timer", "Salts and particles clog fine nozzles."],
        ["H", "Aeroponics is used in the production of seed yam and seed potato mainly because it gives", "clean planting material and many mini-tubers", "larger ware tubers for market", "sweeter tubers", "tubers that need no storage", "Disease-free multiplication is rapid."],
        ["H", "Compared with hydroponics, aeroponics uses", "less water", "more water", "the same solid medium", "no nutrients", "Only a fine mist is applied and the excess is recirculated."],
        ["H", "True high-pressure aeroponics produces droplets of about", "20–50 microns", "5–10 millimetres", "1–2 centimetres", "100 millimetres", "Fine droplets give the best absorption by roots."],
      ],
    },
    {
      week: 6,
      title: "Aquaponics",
      subtopics: ["Meaning and principle", "Components and the nitrogen cycle", "Management of fish, plants and water", "Advantages and limitations"],
      objectives: ["Explain aquaponics and its principle", "Describe the components and the role of bacteria", "Explain how the system is managed", "State its advantages and limitations"],
      lesson: {
        title: "Fish and Crops Together",
        summary: "A recirculating system in which fish waste feeds plants and plants clean the water for fish.",
        minutes: 40,
        notes: `## Meaning
**Aquaponics** is the **integration of fish farming (aquaculture) with soilless crop production (hydroponics) in one recirculating system**. **Fish waste supplies nutrients to the plants; the plants and bacteria clean the water, which returns to the fish**.

## The principle — nitrogen cycle
1. Fish excrete **ammonia** (and uneaten feed decays into ammonia) — toxic to fish.
2. ***Nitrosomonas*** bacteria convert **ammonia → nitrite** (also toxic).
3. ***Nitrobacter*** bacteria convert **nitrite → nitrate**.
4. Plants **absorb nitrate** as their nitrogen source.
5. Cleaned water returns to the fish tank.
The conversion of ammonia to nitrate is **nitrification**; the bacteria live on surfaces in the **biofilter** and grow bed.

## Components
| Component | Function |
|---|---|
| **fish tank** | rearing the fish |
| **mechanical (solids) filter / settling tank** | removes faeces and uneaten feed |
| **biofilter** | large surface for nitrifying bacteria |
| **hydroponic unit** | grow beds, rafts or channels for plants |
| **sump** | lowest point; collects water for pumping |
| **water pump** | circulates water |
| **air pump and air stones** | supply dissolved oxygen |
| **pipes and fittings** | connect the parts |

### Hydroponic units used
- **media bed** — gravel or expanded clay; acts as filter and biofilter; flood and drain with a **bell siphon**; best for beginners
- **deep water culture (raft)** — plants on floating rafts; commercial leafy greens
- **NFT** — channels; light crops

## Fish
**Tilapia** (hardy, fast growing, tolerant — most popular), **catfish (*Clarias*)** — very common in Nigeria, tolerant of low oxygen; carp; ornamental fish (koi, goldfish).
**Stocking:** matched to filter capacity and plant area.
**Feeding ratio:** roughly **60–100 g of fish feed per square metre of plant bed per day** for leafy crops — the feed is the main nutrient input.

## Plants
leafy vegetables (lettuce, spinach, ugu, kale, amaranth, pak choi), herbs (basil, mint, scent leaf), then fruiting crops (tomato, pepper, cucumber, okra) in mature, well-stocked systems.

## Water quality
| Parameter | Target |
|---|---|
| **pH** | about **6.5–7.0** — a compromise among fish, plants and bacteria |
| **ammonia and nitrite** | near **0 mg/L** |
| **nitrate** | moderate; removed by plants |
| **dissolved oxygen** | above about 5 mg/L |
| **temperature** | about 25–30 °C for tilapia and catfish |
Test regularly with kits.

### Cycling a new system
**Cycling** is **establishing the nitrifying bacteria before full stocking** — takes about 4–6 weeks; ammonia rises, then nitrite, then nitrate appears.

## Management
- feed fish daily; remove uneaten feed
- check fish behaviour and plant health
- top up water lost to evaporation and plant use (only about 1–3% a day)
- clean solids filter
- **no chemical pesticides or antibiotics** that harm fish or bacteria — use nets, biological and organic controls
- supplement **iron, potassium and calcium** when deficiency shows
- stagger planting and harvesting to keep nutrient uptake steady
- backup power for pumps and aeration

## Advantages
- **two products** — fish and vegetables — from one system and one input (feed)
- **water saving** — recirculating; up to about 90% less than soil farming
- **no chemical fertiliser** needed; waste is recycled
- **no discharge** of polluted fish-pond water
- **no weeds**; no soil-borne diseases
- produce is close to **organic**
- suitable for **urban** areas and poor land
- efficient use of space

## Limitations
- **high set-up cost**
- needs knowledge of **fish, plants and bacteria**
- **dependence on electricity**
- narrow tolerance — a failure in one part affects the whole
- limited choice of pest and disease controls
- fish feed is costly
- some nutrients may be deficient
- takes time to cycle and stabilise

## Compared with integrated fish-cum-crop farming
Traditional integration uses pond water to irrigate soil crops; aquaponics is **soilless and recirculating**.`,
        examples: `**Example 1.** Define aquaponics. *Answer:* The **combination of fish farming and soilless crop production in one recirculating system**.

**Example 2.** Which bacteria convert ammonia to nitrite? *Answer:* ***Nitrosomonas***.

**Example 3.** Why are chemical pesticides avoided in aquaponics? *Answer:* They **harm the fish and the nitrifying bacteria**.`,
      },
      questions: [
        ["E", "Combining fish farming with soilless crop production in one recirculating system is", "aquaponics", "aeroponics", "apiculture", "sericulture", "Fish waste feeds the plants."],
        ["E", "In aquaponics, the main source of nutrients for the plants is", "fish waste", "chemical fertiliser", "compost", "top soil", "It is converted by bacteria into plant food."],
        ["E", "A fish commonly reared in aquaponic systems is", "tilapia", "shark", "mackerel", "stockfish", "It is hardy and fast growing."],
        ["M", "The toxic substance excreted by fish that must be converted by bacteria is", "ammonia", "oxygen", "glucose", "chlorophyll", "It is changed to nitrite, then nitrate."],
        ["M", "The bacteria that convert nitrite to nitrate are", "Nitrobacter", "Nitrosomonas", "Rhizobium", "Lactobacillus", "Nitrosomonas performs the first step."],
        ["M", "The form of nitrogen absorbed by the plants in an aquaponic system is", "nitrate", "nitrite", "ammonia gas", "nitrogen gas", "It is the end product of nitrification."],
        ["M", "The component that provides a large surface for nitrifying bacteria is the", "biofilter", "sump", "air stone", "bell siphon", "Bacteria colonise its surfaces."],
        ["H", "The process of establishing nitrifying bacteria in a new aquaponic system before full stocking is", "cycling", "flushing", "liming", "grading", "It takes several weeks."],
        ["H", "The pH maintained in an aquaponic system is about 6.5–7.0 because it", "suits the fish, plants and bacteria together", "kills all bacteria", "prevents plant growth", "removes all nutrients", "It is a compromise among the three groups of organisms."],
        ["H", "The conversion of ammonia to nitrate by bacteria is known as", "nitrification", "denitrification", "nitrogen fixation", "ammonification", "It makes fish waste safe and useful to plants."],
      ],
    },
    {
      week: 8,
      title: "Precision Agriculture",
      subtopics: ["Meaning of precision agriculture", "ICT tools: GPS, GIS and software", "Drones and sensors", "Benefits and constraints"],
      objectives: ["Explain precision agriculture", "Describe the ICT tools used", "Explain the use of drones and sensors", "State the benefits and constraints of precision agriculture"],
      lesson: {
        title: "Farming by Data",
        summary: "Using positioning, sensing and data to give each part of the farm exactly what it needs.",
        minutes: 40,
        notes: `## Meaning
**Precision agriculture (precision farming)** is the **use of information technology to observe, measure and respond to variation within and between fields**, so that inputs are applied at the **right rate, in the right place, at the right time**.
Traditional farming treats a field as uniform; precision farming recognises that **soil, moisture, pests and yield vary** from spot to spot.

## The cycle
**collect data → analyse → decide → act → evaluate**.

## ICT tools
| Tool | Use |
|---|---|
| **GPS (Global Positioning System)** | gives the **exact location** of machines, samples and observations; guides tractors |
| **GIS (Geographic Information System)** | software that **stores, analyses and maps** location-based data in layers — soil, yield, moisture |
| **remote sensing** | information gathered from a distance by **satellites, aircraft and drones** |
| **farm-management software and apps** | records, maps, alerts, decisions |
| **variable-rate technology (VRT)** | machines that **change the rate** of seed, fertiliser or chemical as they move, following a **prescription map** |
| **auto-steer / guidance** | keeps machinery on exact lines; avoids overlap and gaps |
| **yield monitors** | on harvesters; produce **yield maps** |
| **Internet of Things (IoT)** | networks of field sensors sending data in real time |
| **mobile phones** | advisory messages, weather, market prices, payments |
| **artificial intelligence** | recognises pests and diseases from photographs; predicts yields |

## Drones (unmanned aerial vehicles)
- **mapping and surveying** fields; counting plants; measuring area
- **crop scouting** — cameras reveal stress, pests, disease, nutrient deficiency and water shortage before the eye can see it
- **multispectral imaging** — produces vegetation indices such as **NDVI** (**normalised difference vegetation index**): healthy, dense vegetation gives **high** values; stressed or bare areas give low values
- **spraying** pesticides and foliar fertilisers accurately, including on difficult terrain
- **seeding** and spreading
- monitoring irrigation and drainage; assessing damage for insurance
Operation is subject to aviation rules.

## Sensors
| Sensor | Measures |
|---|---|
| **soil-moisture sensor** | water content — triggers irrigation |
| **soil pH, EC and nutrient sensors** | fertility |
| **temperature and humidity sensors** | microclimate; disease risk |
| **weather station** | rainfall, wind, radiation |
| **leaf / canopy sensors** | chlorophyll and nitrogen status |
| **light sensors** | radiation in greenhouses |
| **pest traps with cameras** | pest counts |

**Smart irrigation:** sensors and controllers apply water only when and where needed.

## Soil sampling and mapping
**Grid or zone sampling** with GPS → laboratory analysis → **soil fertility maps** → **site-specific fertiliser recommendation**.

## Benefits
- **higher yields and quality**
- **reduced input costs** — less seed, fertiliser, pesticide, water and fuel wasted
- **less environmental pollution**
- **early detection** of problems
- **better decisions** based on evidence; accurate records
- **labour saving**
- improved profit; traceability

*If VRT reduces fertiliser use from 200 kg/ha to 160 kg/ha on 50 ha, the saving is* $40 \\times 50 = 2000$ kg.

## Constraints in Nigeria
high cost of equipment; **small, fragmented farms**; poor **internet and electricity** in rural areas; low digital literacy; few service providers and technicians; lack of local data and soil maps; maintenance and spare parts.

## Affordable entry points
smartphone apps for pest identification, weather and prices; **GPS phone mapping** of farms; hand-held soil test kits; simple moisture sensors; **drone services hired** per hectare; SMS advisory services; group use through co-operatives.

## In horticulture
controlled fertigation by EC and pH sensors; climate control; drone scouting of orchards; grading by machine vision; cold-chain monitoring.`,
        examples: `**Example 1.** Define precision agriculture. *Answer:* Using information technology to **apply inputs at the right rate, place and time** according to variation within fields.

**Example 2.** What does GPS provide? *Answer:* The **exact location** of a machine, sample or observation.

**Example 3.** A farm of 30 ha saves 25 kg of fertiliser per hectare with variable-rate application. Find the total saving. *Answer:* $25 \\times 30 = \\mathbf{750}$ **kg**.`,
      },
      questions: [
        ["E", "Using information technology to apply inputs at the right rate, place and time is", "precision agriculture", "shifting cultivation", "subsistence farming", "bush fallowing", "It responds to variation within fields."],
        ["E", "GPS stands for", "Global Positioning System", "General Planting Schedule", "Ground Pest Sensor", "Green Plant Software", "It gives the exact location of points on the earth."],
        ["E", "An unmanned aircraft used for surveying and spraying crops is a", "drone", "combine", "planter", "sprinkler", "It can carry cameras and spray tanks."],
        ["M", "Software that stores, analyses and maps location-based farm data in layers is", "GIS", "GPS", "VRT", "IoT", "Geographic Information System."],
        ["M", "A device placed in the ground to show when irrigation is needed is a", "soil-moisture sensor", "yield monitor", "rain gauge", "wind vane", "It measures the water content of the soil."],
        ["M", "Machinery that changes the amount of fertiliser applied as it moves across a field uses", "variable-rate technology", "broadcasting", "manual calibration", "zero tillage", "It follows a prescription map."],
        ["M", "Gathering information about crops from satellites or drones is", "remote sensing", "soil sampling", "grafting", "roguing", "Data are collected without physical contact."],
        ["H", "On an NDVI map, healthy dense vegetation is shown by", "high index values", "low index values", "zero values", "negative values only", "Healthy leaves reflect much near-infrared light and absorb red light."],
        ["H", "Variable-rate application cuts fertiliser use from 180 kg/ha to 150 kg/ha on 40 ha. The total saving is", "1200 kg", "30 kg", "7200 kg", "120 kg", "30 kg/ha × 40 ha."],
        ["H", "A major constraint to precision agriculture among Nigerian smallholders is", "high cost of equipment and small farm size", "excess rainfall", "too many extension agents", "absence of mobile phones", "Costly technology is hard to justify on small plots."],
      ],
    },
    {
      week: 9,
      title: "Climate Change and Crop Production",
      subtopics: ["Meaning and causes of climate change", "Effects on crop production", "Adaptation strategies", "Mitigation in agriculture"],
      objectives: ["Explain climate change and its causes", "Describe its effects on crop production", "Explain adaptation strategies", "State how agriculture can reduce emissions"],
      lesson: {
        title: "Farming in a Changing Climate",
        summary: "How rising temperatures and unreliable rains affect crops and what farmers can do.",
        minutes: 40,
        notes: `## Meaning
**Climate change** is a **long-term change in average weather conditions** — temperature, rainfall, wind — over decades. **Weather** is the day-to-day state of the atmosphere; **climate** is the average over about 30 years.

## Causes
**Greenhouse gases** — carbon dioxide (CO₂), methane (CH₄), nitrous oxide (N₂O) — trap heat.
- **burning of fossil fuels**; gas flaring
- **deforestation** and bush burning
- agriculture — **methane** from ruminants and flooded rice; **nitrous oxide** from nitrogen fertilisers and manure; land clearing
- industry; waste

## Evidence in Nigeria
later onset and earlier end of rains; **shorter growing season**; dry spells within the season; heavier downpours and **floods**; higher temperatures; **desert encroachment** in the north; shrinking of Lake Chad; coastal erosion and salt-water intrusion.

## Effects on crop production
| Change | Effect |
|---|---|
| **erratic rainfall** | uncertain planting dates; crop failure; replanting costs |
| **drought and dry spells** | wilting, poor grain filling, low yield |
| **floods** | crops submerged; erosion; loss of nutrients; harvest losses |
| **higher temperatures** | **heat stress**; flower and fruit drop (tomato, pepper); faster maturity with lower yield; more evaporation |
| **pests and diseases** | new pests and wider spread — e.g. fall armyworm; more generations a year |
| **soil** | erosion; loss of organic matter; salinity |
| **storage** | greater post-harvest loss |
| **shifts in zones** | crops no longer suit their traditional areas |
| **wind storms** | lodging; damage to plantain and tree crops |
| **CO₂ rise** | may boost growth of some crops but lowers nutritional quality |
Results: **lower yields, food insecurity, higher prices, loss of income**, rural–urban migration, farmer–herder conflict.

## Adaptation strategies
**Adaptation** is **adjusting practices to cope with the effects of climate change**.
1. **Improved varieties** — **drought-tolerant, early-maturing, flood-tolerant, heat-tolerant, pest- and disease-resistant**.
2. **Adjusting planting dates** to the actual onset of rain; staggered planting.
3. **Irrigation** — drip and sprinkler; dry-season (**fadama**) farming.
4. **Water harvesting** — ponds, tanks, zai pits, tied ridges, bunds.
5. **Mulching and cover crops** — conserve moisture, cool the soil.
6. **Conservation agriculture** — **minimum tillage, permanent soil cover, crop rotation**.
7. **Crop diversification, mixed cropping and intercropping** — spread risk.
8. **Agroforestry** — trees for shade, windbreaks and soil improvement; **shelter belts** against desert encroachment.
9. **Soil fertility management** — organic manure, compost.
10. **Protected cultivation** — greenhouses, net houses, shade.
11. **Erosion and flood control** — contour ridges, terraces, drainage channels, planting away from flood plains.
12. **Weather and climate information** — seasonal forecasts (**NiMet**), early-warning systems, mobile advisories.
13. **Crop insurance** — including index-based insurance.
14. **Integrated pest management**.
15. **Improved storage and processing** to cut losses.
16. Livelihood diversification.

**Climate-smart agriculture (CSA)** aims at three things together: **higher productivity, greater resilience (adaptation), and lower emissions (mitigation)**.

## Mitigation in agriculture
**Mitigation** is **reducing greenhouse-gas emissions or increasing their removal**.
- **tree planting**, agroforestry; stopping deforestation and bush burning
- building **soil organic carbon** — compost, residues, cover crops, reduced tillage
- **efficient fertiliser use** — right rate, placement and timing; less nitrous oxide
- **alternate wetting and drying** in rice — less methane
- **renewable energy** — solar pumps and dryers
- composting and biogas from wastes
- reducing food loss and waste

## Roles
farmers adopt practices; **extension services** teach; **research institutes** breed tolerant varieties; **government** provides policy, irrigation, forecasts and insurance; communities manage forests and water.`,
        examples: `**Example 1.** Distinguish adaptation from mitigation. *Answer:* **Adaptation** is adjusting to the effects of climate change; **mitigation** is **reducing the emissions** that cause it.

**Example 2.** Give three adaptation strategies in crop production. *Answer:* **Drought-tolerant varieties, irrigation** and **mulching**.

**Example 3.** Name two greenhouse gases from agriculture. *Answer:* **Methane** and **nitrous oxide**.`,
      },
      questions: [
        ["E", "A long-term change in average weather conditions is", "climate change", "a weather forecast", "a rainy season", "harmattan", "It occurs over decades."],
        ["E", "Which of these is a greenhouse gas?", "Carbon dioxide", "Oxygen", "Nitrogen", "Argon", "It traps heat in the atmosphere."],
        ["E", "Adjusting farming practices to cope with the effects of climate change is", "adaptation", "mitigation", "deforestation", "pollution", "Planting drought-tolerant varieties is an example."],
        ["M", "A suitable variety for an area with a shortened rainy season is one that is", "early maturing", "late maturing", "tall and long-season", "photoperiod-insensitive only", "It completes its life cycle before the rains end."],
        ["M", "Covering the soil with dry grass to conserve moisture is", "mulching", "ridging", "staking", "thinning", "It reduces evaporation and soil temperature."],
        ["M", "The greenhouse gas released mainly from nitrogen fertilisers is", "nitrous oxide", "methane", "ozone", "helium", "Efficient fertiliser use reduces it."],
        ["M", "Rows of trees planted to check desert encroachment and wind erosion are", "shelter belts", "contour bunds", "terraces", "furrows", "They slow the wind and protect soil and crops."],
        ["H", "Climate-smart agriculture aims at higher productivity, greater resilience and", "lower greenhouse-gas emissions", "more bush burning", "larger monocultures", "heavier tillage", "These are its three pillars."],
        ["H", "High temperatures at flowering reduce tomato yield mainly by causing", "flower and fruit drop", "larger fruits", "deeper roots", "thicker stems", "Heat stress interferes with pollination and fruit set."],
        ["H", "Minimum tillage, permanent soil cover and crop rotation are the principles of", "conservation agriculture", "shifting cultivation", "plantation farming", "hydroponics", "They protect soil and conserve moisture."],
      ],
    },
    {
      week: 10,
      title: "Sustainable Horticultural Practices",
      subtopics: ["Meaning of sustainable horticulture", "Organic farming", "Permaculture", "Other sustainable practices"],
      objectives: ["Explain sustainable horticulture", "Describe the principles and practices of organic farming", "Explain permaculture", "Identify other sustainable practices"],
      lesson: {
        title: "Producing without Depleting",
        summary: "Organic farming, permaculture and related practices that keep land productive for the future.",
        minutes: 40,
        notes: `## Sustainable horticulture
**Sustainable horticulture** is the **production of fruits, vegetables and ornamentals in ways that are profitable, protect the environment and remain productive for future generations**. It rests on three pillars — **economic, environmental and social**.

## Problems of conventional intensive production
soil degradation; **pesticide residues** on produce; pollution of water by fertilisers; pest resistance; loss of beneficial insects (**pollinators**) and biodiversity; health risks to farm workers; high input costs.

## Organic farming
**Organic farming** is a **system of production that avoids synthetic fertilisers, pesticides, growth regulators and genetically modified organisms, relying instead on natural processes and inputs**.

### Principles
**health** (of soil, plants, animals and people), **ecology**, **fairness** and **care**.

### Practices
| Area | Practices |
|---|---|
| **soil fertility** | **compost**, farmyard and poultry manure, **green manure** (legumes ploughed in), cover crops, crop rotation, mulching, vermicompost, rock phosphate, wood ash, biofertilisers (*Rhizobium*, mycorrhiza) |
| **pest control** | resistant varieties; rotation; **intercropping** and trap crops; hand-picking; nets and traps; **biological control** (predators, parasitoids); **botanical pesticides** — **neem**, pepper, garlic; soap sprays |
| **weed control** | mulching, hand weeding, cover crops, close spacing, stale seedbed |
| **disease control** | clean seed; sanitation; spacing; rotation; permitted copper or sulphur products |
| **seed** | untreated, non-GM, preferably organic |

### Compost making
layers of plant residues (carbon) and manure or green matter (nitrogen); kept **moist and aerated**; **turned** every one to two weeks; ready in about 2–3 months — dark, crumbly, earthy-smelling.

### Certification
**Organic certification** is **verification by an approved body that produce was grown to organic standards**; it requires a **conversion period** (commonly two to three years), records and inspection. **Participatory guarantee systems** serve local markets.

### Advantages
safer food — no synthetic residues; improved **soil structure and life**; less pollution; biodiversity; **premium prices**; lower input costs; export opportunities.
### Disadvantages
often **lower yields** at first; more **labour**; bulky manures; slower nutrient release; pest outbreaks harder to control; certification cost; limited local market awareness.

## Permaculture
**Permaculture** ("permanent agriculture") is the **design of farming systems that imitate natural ecosystems so that they are self-sustaining**.

### Ethics
**earth care, people care, fair share** (return of surplus).

### Design ideas
- **observe** the site — sun, wind, water, slope — before designing
- **zones** — arrange elements by how often they are visited: **zone 0** the house; **zone 1** kitchen garden and herbs; zone 2 orchard and small livestock; zone 3 field crops; zone 4 pasture and woodlot; **zone 5** wild area
- **each element serves several functions**; each need met by several elements
- **polyculture** and **guilds** — plants that help one another
- **food forest** — layers: canopy trees, small trees, shrubs, herbs, ground cover, roots, climbers
- **catch and store water** — **swales** (level ditches on the contour), ponds, mulch
- **recycle wastes** — compost, greywater; "produce no waste"
- **perennial crops**; minimal tillage
- integrate animals, bees and fish
- use **renewable resources**; start small

## Other sustainable practices
1. **Integrated pest management (IPM)** — combining cultural, biological, physical and, as a last resort, chemical methods, based on monitoring and thresholds.
2. **Integrated nutrient management** — organic and mineral sources together.
3. **Crop rotation and intercropping**.
4. **Conservation tillage; mulching; cover crops**.
5. **Efficient irrigation** — drip; rain-water harvesting.
6. **Agroforestry and alley cropping**.
7. **Use of adapted and indigenous varieties**; seed saving.
8. **Safe pesticide use** — correct dose, protective clothing, **pre-harvest interval**.
9. **Pollinator protection** — flowering borders; no spraying at flowering.
10. **Post-harvest loss reduction** — careful handling, cooling, proper storage.
11. **Renewable energy** — solar pumps and dryers.
12. **Urban and peri-urban horticulture** — home gardens, sack and container gardens.
13. **Good Agricultural Practices (GAP)** and record keeping.

## Benefits
healthy soil; clean water; safe food; stable yields; lower costs; resilience to climate stress; conservation of biodiversity; fair livelihoods.`,
        examples: `**Example 1.** Define organic farming. *Answer:* Production that **avoids synthetic fertilisers, pesticides and GMOs**, relying on natural processes and inputs.

**Example 2.** State the three ethics of permaculture. *Answer:* **Earth care, people care, fair share**.

**Example 3.** Name a botanical pesticide used in organic vegetable production. *Answer:* **Neem** extract.`,
      },
      questions: [
        ["E", "A system of production that avoids synthetic fertilisers and pesticides is", "organic farming", "plantation farming", "mechanised farming", "hydroponics", "It relies on natural inputs and processes."],
        ["E", "Decomposed plant and animal materials used to improve the soil are", "compost", "urea", "lime", "NPK", "It adds organic matter and nutrients."],
        ["E", "A plant widely used to prepare a natural pesticide is", "neem", "maize", "cassava", "sorghum", "Its seeds and leaves contain azadirachtin."],
        ["M", "A legume crop grown and ploughed into the soil to enrich it is", "green manure", "a trap crop", "a nurse crop", "a catch crop only", "It adds nitrogen and organic matter."],
        ["M", "The design of farming systems that imitate natural ecosystems is", "permaculture", "monoculture", "tissue culture", "sericulture", "The word comes from 'permanent agriculture'."],
        ["M", "Using natural enemies such as predators to control pests is", "biological control", "chemical control", "quarantine", "cultural control only", "Ladybirds feeding on aphids are an example."],
        ["M", "In permaculture design, the area nearest the house, used for the kitchen garden, is", "zone 1", "zone 5", "zone 4", "zone 3", "Elements needing frequent attention are placed closest."],
        ["H", "The period during which land is managed organically before its produce can be sold as organic is the", "conversion period", "dormancy period", "pre-harvest interval", "fallow period only", "It commonly lasts two to three years."],
        ["H", "A level ditch dug along the contour to slow and store run-off water is a", "swale", "furrow across the slope", "drain pipe", "ridge end", "Water soaks into the soil instead of running off."],
        ["H", "The time that must pass between the last pesticide application and harvest is the", "pre-harvest interval", "conversion period", "shelf life", "germination period", "It allows residues to fall to safe levels."],
      ],
    },
  ],
};
