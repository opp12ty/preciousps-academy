import type { TermPlan } from "../types";

/** JSS2 Agricultural Science — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Soil fertility and plant nutrients",
        subtopics: ["Meaning of soil fertility", "Macro-nutrients and micro-nutrients", "Functions and deficiency symptoms", "Causes of loss of soil fertility"],
        objectives: ["Explain soil fertility", "Classify plant nutrients into macro and micro elements", "State functions and deficiency symptoms of major nutrients", "Identify causes of loss of soil fertility"],
        lesson: {
          title: "Feeding the Soil to Feed the Crop",
          summary: "Explain plant nutrients, their functions and how soil loses fertility.",
          minutes: 40,
          notes: `## Soil fertility
**Soil fertility** is the ability of the soil to **supply plant nutrients in the right amounts and proportions** for good crop growth. A fertile soil is rich in humus, has good structure, enough water and air, and a suitable pH.

## Plant nutrients
Plants need about 16 essential elements. **Carbon, hydrogen and oxygen** come from air and water; the rest come from the soil.
- **macro-nutrients (major elements)** — needed in **large** amounts: **nitrogen (N), phosphorus (P), potassium (K), calcium (Ca), magnesium (Mg), sulphur (S)**
- **micro-nutrients (trace elements)** — needed in **small** amounts: **iron (Fe), zinc (Zn), manganese (Mn), copper (Cu), boron (B), molybdenum (Mo), chlorine (Cl)**
**N, P and K** are the **primary nutrients**.

## Functions and deficiency symptoms
| Nutrient | Functions | Deficiency symptoms |
|---|---|---|
| **nitrogen** | leaf and stem (vegetative) growth; part of chlorophyll and protein | **yellowing of leaves (chlorosis)**, stunted growth |
| **phosphorus** | root development; flowering, fruiting and early maturity | poor roots; **purplish** leaves; delayed maturity |
| **potassium** | strong stems; disease resistance; quality of fruits and tubers | **scorched (burnt) leaf edges**; weak stems; lodging |
| **calcium** | cell walls; root tips | death of growing points |
| **magnesium** | central part of **chlorophyll** | yellowing between leaf veins |
| **iron** | chlorophyll formation | yellowing of young leaves |

## Causes of loss of soil fertility
- **leaching** — nutrients washed down beyond the reach of roots
- **erosion** — topsoil carried away by water or wind
- **continuous cropping** without replacing nutrients
- **crop removal** — nutrients carried away in harvested produce
- **bush burning** — destroys humus and soil organisms
- **overgrazing**
- soil **acidity** or alkalinity

## Maintaining fertility
manures and fertilisers; crop rotation; bush fallowing; cover crops and legumes; mulching; liming acid soils; erosion control.`,
          examples: `**Example 1.** Which nutrient promotes leaf growth? *Answer:* **nitrogen**.

**Example 2.** Maize leaves show burnt edges. Which nutrient is lacking? *Answer:* **potassium**.

**Example 3.** What is leaching? *Answer:* The **washing of nutrients down** beyond the reach of roots.`,
        },
        questions: [
          ["E", "The ability of soil to supply nutrients for good crop growth is", "soil fertility", "soil texture", "soil profile", "soil colour", "Fertile soil feeds crops well."],
          ["E", "The three primary plant nutrients are", "nitrogen, phosphorus and potassium", "iron, zinc and copper", "carbon, hydrogen and oxygen", "calcium, boron and chlorine", "They are N, P and K."],
          ["E", "Nutrients needed by plants in small amounts are", "micro-nutrients", "macro-nutrients", "primary nutrients", "fertilisers", "They are trace elements."],
          ["M", "The nutrient that promotes leafy (vegetative) growth is", "nitrogen", "phosphorus", "potassium", "iron", "It is part of chlorophyll and protein."],
          ["M", "The nutrient that promotes root development and early maturity is", "phosphorus", "nitrogen", "magnesium", "zinc", "Phosphorus aids roots and flowering."],
          ["M", "General yellowing of leaves and stunted growth indicate lack of", "nitrogen", "potassium", "calcium", "boron", "This yellowing is chlorosis."],
          ["M", "Washing of nutrients beyond the reach of plant roots is", "leaching", "erosion", "weathering", "mulching", "Water carries nutrients downward."],
          ["H", "Scorched leaf edges and weak stems indicate lack of", "potassium", "nitrogen", "phosphorus", "iron", "Potassium strengthens stems."],
          ["H", "The element at the centre of the chlorophyll molecule is", "magnesium", "potassium", "phosphorus", "sulphur", "Its lack yellows leaves between veins."],
          ["H", "Bush burning reduces soil fertility mainly because it", "destroys humus and soil organisms", "adds too much nitrogen", "increases soil water", "adds organic matter", "Organic matter is burnt off."],
        ],
      },
      {
        week: 2,
        title: "Manures and fertilisers",
        subtopics: ["Organic manures", "Inorganic fertilisers", "Methods of fertiliser application", "Advantages and disadvantages"],
        objectives: ["Describe types of organic manure", "Classify inorganic fertilisers", "Describe methods of applying fertilisers", "Compare organic manures and inorganic fertilisers"],
        lesson: {
          title: "Adding Nutrients to the Soil",
          summary: "Compare organic manures and inorganic fertilisers and how they are applied.",
          minutes: 40,
          notes: `## Organic manures
materials from **plants and animals** added to the soil.
| Type | Description |
|---|---|
| **farmyard manure (FYM)** | animal dung and urine mixed with bedding (straw) |
| **compost** | decayed plant and kitchen waste made in a heap or pit |
| **green manure** | green crops (especially legumes such as mucuna) ploughed into the soil while still fresh |
| **poultry droppings** | very rich in nitrogen |
**Advantages:** improve soil **structure** and water holding; add humus; feed soil organisms; long-lasting; cheap.
**Disadvantages:** **bulky**; low nutrient content; slow-acting; may carry weed seeds and diseases.

## Inorganic fertilisers
manufactured **chemical** nutrients.
- **straight (single) fertilisers** supply one primary nutrient:
  - nitrogen: **urea** (46% N), **ammonium sulphate**, **calcium ammonium nitrate (CAN)**
  - phosphorus: **single superphosphate (SSP)**, triple superphosphate
  - potassium: **muriate of potash** (potassium chloride)
- **compound (mixed) fertilisers** supply two or more: **NPK 15-15-15**, **NPK 20-10-10**
NPK 15-15-15 means 15% N, 15% phosphorus (as P₂O₅) and 15% potassium (as K₂O).
**Advantages:** high nutrient content; **quick-acting**; easy to carry and apply.
**Disadvantages:** **expensive**; do not improve soil structure; easily leached; can make soil **acidic**; overuse "burns" crops and pollutes water.

## Methods of application
| Method | Description |
|---|---|
| **broadcasting** | spreading evenly over the soil surface |
| **ring method** | placing in a ring around each plant |
| **band (row/side) placement** | in bands beside the rows |
| **top dressing** | applying to a growing crop |
| **drilling** | placing in furrows with a machine |
| **foliar spraying** | spraying dissolved fertiliser on leaves |
| **fertigation** | applying through irrigation water |
Apply at the right **time** and **rate**, and cover with soil to reduce loss.

## Liming
adding **lime** (calcium compounds) reduces soil **acidity**.`,
          examples: `**Example 1.** What does NPK 15-15-15 contain? *Answer:* **15% nitrogen, 15% phosphorus and 15% potassium**.

**Example 2.** Give one advantage of organic manure. *Answer:* It **improves soil structure**.

**Example 3.** Which method places fertiliser in a circle round a plant? *Answer:* the **ring method**.`,
        },
        questions: [
          ["E", "Decayed plant and kitchen waste made in a heap is", "compost", "urea", "lime", "NPK", "It is an organic manure."],
          ["E", "Urea is a fertiliser that supplies mainly", "nitrogen", "phosphorus", "potassium", "calcium", "It contains about 46% nitrogen."],
          ["E", "Spreading fertiliser evenly over the soil surface is", "broadcasting", "ring method", "foliar spraying", "drilling", "It covers the whole plot."],
          ["M", "Green crops ploughed into the soil while still fresh are", "green manure", "farmyard manure", "compost", "inorganic fertiliser", "Legumes are commonly used."],
          ["M", "A fertiliser that supplies two or more primary nutrients is a", "compound fertiliser", "straight fertiliser", "green manure", "lime", "NPK is an example."],
          ["M", "Muriate of potash supplies", "potassium", "nitrogen", "phosphorus", "sulphur", "It is potassium chloride."],
          ["M", "An advantage of inorganic fertilisers is that they", "act quickly", "improve soil structure", "are bulky", "are cheap", "Nutrients are readily available."],
          ["H", "A material added to the soil to reduce acidity is", "lime", "urea", "compost only", "ammonium sulphate", "Lime neutralises acid soils."],
          ["H", "A disadvantage of organic manure is that it is", "bulky and slow-acting", "quick to leach", "expensive to import", "harmful to soil structure", "Large quantities are needed."],
          ["H", "Applying dissolved fertiliser directly to the leaves is", "foliar spraying", "top dressing", "band placement", "broadcasting", "Leaves absorb the nutrients."],
        ],
      },
      {
        week: 3,
        title: "Soil erosion and conservation",
        subtopics: ["Meaning and agents of erosion", "Types of erosion", "Effects of erosion", "Soil conservation methods"],
        objectives: ["Define soil erosion and name its agents", "Describe types of water and wind erosion", "State the effects of erosion", "Describe methods of soil conservation"],
        lesson: {
          title: "Protecting the Topsoil",
          summary: "Describe soil erosion and how to control it.",
          minutes: 40,
          notes: `## Meaning
**Soil erosion** is the **wearing away and removal of topsoil** by **water** or **wind**. Human activities such as bush burning, deforestation, overgrazing and farming on slopes make it worse.

## Types of water erosion
| Type | Description |
|---|---|
| **splash erosion** | raindrops hit bare soil and scatter particles |
| **sheet erosion** | a thin, even layer of topsoil is removed over a wide area — hard to notice |
| **rill erosion** | small channels (rills) form on the surface |
| **gully erosion** | deep, wide channels (gullies) form — common in **south-eastern Nigeria** (e.g. Anambra, Imo) |

## Wind erosion
dry, loose soil is blown away — common in the **dry northern parts** of Nigeria; it contributes to **desert encroachment**.

## Effects of erosion
- loss of fertile **topsoil** and nutrients → low yields
- exposure of plant roots; crops washed away
- **gullies** destroy farmland, roads and houses
- **silting** of rivers and dams; flooding
- desertification

## Soil conservation methods
| Method | How it helps |
|---|---|
| **cover cropping** | plants cover the soil and reduce the impact of rain |
| **mulching** | protects the soil surface |
| **contour ploughing / ridging** | ridges across the slope slow down running water |
| **terracing** | steps cut on steep slopes |
| **strip cropping** | alternate strips of different crops across the slope |
| **crop rotation and mixed cropping** | keep the soil covered |
| **afforestation** | planting trees to hold the soil |
| **windbreaks / shelter belts** | rows of trees reduce wind speed |
| **controlled grazing** | prevents overgrazing |
| **avoiding bush burning** | keeps vegetation cover |
| **check dams and grass waterways** | slow water in gullies |

## Other conservation practices
irrigation and drainage, liming, application of manure, and fallowing also help keep soil productive.`,
          examples: `**Example 1.** Which type of erosion forms deep, wide channels? *Answer:* **gully erosion**.

**Example 2.** How does contour ridging control erosion? *Answer:* Ridges **across the slope slow down running water**.

**Example 3.** Which method controls wind erosion in the north? *Answer:* **windbreaks (shelter belts)**.`,
        },
        questions: [
          ["E", "The wearing away of topsoil by water or wind is", "soil erosion", "soil fertility", "weathering", "leaching", "Topsoil is carried away."],
          ["E", "Deep, wide channels formed by running water are", "gullies", "ridges", "terraces", "windbreaks", "Gully erosion destroys land."],
          ["E", "Planting trees to protect the soil is", "afforestation", "deforestation", "overgrazing", "bush burning", "Tree roots hold the soil."],
          ["M", "The removal of a thin, even layer of topsoil over a wide area is", "sheet erosion", "gully erosion", "rill erosion", "splash erosion", "It is hard to notice."],
          ["M", "Making ridges across a slope to slow running water is", "contour ridging", "strip grazing", "broadcasting", "stumping", "Water is held back by the ridges."],
          ["M", "Rows of trees planted to reduce wind speed are", "windbreaks", "terraces", "check dams", "cover crops", "They are also called shelter belts."],
          ["M", "Wind erosion in Nigeria is most common in the", "dry northern areas", "mangrove swamps", "rainforest", "creeks", "Dry loose soil is easily blown."],
          ["H", "Cutting steps on a steep slope to control erosion is", "terracing", "mulching", "strip cropping", "liming", "Steps break the flow of water."],
          ["H", "Gully erosion is a serious problem especially in", "south-eastern Nigeria", "the Sahel only", "Lagos lagoon", "the Niger Delta creeks only", "Anambra and Imo have large gullies."],
          ["H", "An effect of erosion on rivers and dams is", "silting", "deepening", "purifying", "cooling", "Eroded soil settles in the water."],
        ],
      },
      {
        week: 4,
        title: "Crop rotation",
        subtopics: ["Meaning of crop rotation", "Principles of crop rotation", "A four-year rotation plan", "Advantages of crop rotation"],
        objectives: ["Define crop rotation", "State the principles of crop rotation", "Draw a simple rotation plan", "State the advantages of crop rotation"],
        lesson: {
          title: "Changing Crops in Order",
          summary: "Plan a crop rotation and explain its benefits.",
          minutes: 40,
          notes: `## Meaning
**Crop rotation** is the practice of **growing different crops on the same piece of land in a definite order (sequence)**, season after season, so that the same crop does not follow itself.

## Principles
- **deep-rooted crops** should follow **shallow-rooted crops** (they feed at different depths)
- **legumes** (cowpea, groundnut) should be included to **add nitrogen** through root nodule bacteria
- crops attacked by the **same pests and diseases** should not follow each other
- **heavy feeders** (maize, yam) should be followed by light feeders or legumes
- a **fallow** or cover-crop period may be included
- crops of the same family should not follow one another

## A four-year, four-plot rotation
| Year | Plot A | Plot B | Plot C | Plot D |
|---|---|---|---|---|
| 1 | yam | maize | cowpea | cassava |
| 2 | maize | cowpea | cassava | yam |
| 3 | cowpea | cassava | yam | maize |
| 4 | cassava | yam | maize | cowpea |
Each crop moves to the next plot every year, and each plot grows every crop once in four years.
Order on one plot: **yam (heavy feeder, tuber) → maize (cereal) → cowpea (legume) → cassava (deep-rooted, tolerant of low fertility)**.

## Advantages
- maintains **soil fertility** (legumes add nitrogen)
- controls **pests and diseases** by breaking their life cycles
- controls **weeds**
- makes **full use of soil nutrients** at different depths
- reduces **erosion** (land is always covered)
- spreads **risk** and provides a variety of produce
- spreads labour through the year

## Disadvantages
requires planning and knowledge; needs enough land divided into plots; some crops grown may be less profitable.`,
          examples: `**Example 1.** Why are legumes included in a rotation? *Answer:* They **add nitrogen** to the soil.

**Example 2.** In the plan above, what grows on Plot A in year 3? *Answer:* **cowpea**.

**Example 3.** Give one advantage of crop rotation. *Answer:* It **controls pests and diseases**.`,
        },
        questions: [
          ["E", "Growing different crops on the same land in a definite order is", "crop rotation", "mixed farming", "monoculture", "shifting cultivation", "Crops follow a sequence."],
          ["E", "Legumes are included in crop rotation because they", "add nitrogen to the soil", "use up all nutrients", "attract pests", "need no water", "Nodule bacteria fix nitrogen."],
          ["E", "Which crop is a legume suitable for a rotation?", "cowpea", "maize", "yam", "cassava", "Cowpea fixes nitrogen."],
          ["M", "In a good rotation, deep-rooted crops should follow", "shallow-rooted crops", "other deep-rooted crops", "the same crop", "no crop", "They feed at different depths."],
          ["M", "Crop rotation controls pests because it", "breaks their life cycles", "feeds them", "sprays them", "attracts them", "Pests lose their host."],
          ["M", "In the four-plot plan (yam, maize, cowpea, cassava), the crop that follows maize on a plot is", "cowpea", "yam", "cassava", "maize", "The legume follows the cereal."],
          ["M", "A heavy feeder often placed first in a rotation is", "yam", "cowpea", "groundnut", "mucuna", "Yam needs fertile soil."],
          ["H", "In a four-year rotation with four plots, each plot grows each crop", "once in four years", "every year", "twice a year", "never", "Crops move round the plots."],
          ["H", "Crops attacked by the same pests should not follow each other because", "the pests would build up", "the soil would flood", "the yield would double", "weeds would die", "Pests carry over to the next crop."],
          ["H", "A disadvantage of crop rotation is that it", "requires careful planning and enough land", "destroys soil fertility", "increases pests", "causes erosion", "Plots and sequence must be managed."],
        ],
      },
      {
        week: 5,
        title: "Farm structures and buildings",
        subtopics: ["Meaning of farm structures and buildings", "Types of farm structures", "Types of farm buildings", "Siting and maintenance"],
        objectives: ["Distinguish farm structures from farm buildings", "Identify farm structures and their uses", "Identify farm buildings and their uses", "State factors in siting and maintaining them"],
        lesson: {
          title: "Structures on the Farm",
          summary: "Identify farm structures and buildings and their uses.",
          minutes: 40,
          notes: `## Meaning
- **farm structures** are constructions used for **production, storage and processing** on the farm
- **farm buildings** are roofed structures used for **housing** people, animals, produce and equipment

## Farm structures
| Group | Examples |
|---|---|
| **production structures** | fish ponds, poultry cages, pens, incubators, fences, dips, nursery sheds, greenhouses |
| **storage structures** | **silos** (grains), **cribs** (maize cobs), **rhombus** (grains in the north), **barns** (yam), cold rooms |
| **processing structures** | mills, drying floors, shellers, smoking kilns |
| **utility structures** | roads, bridges, wells, dams, irrigation channels, water tanks |

## Farm buildings
- **farm house / office**
- **livestock buildings**: poultry house, piggery (sty), cattle shed (byre), goat and sheep pens, rabbit hutches
- **stores**: feed store, fertiliser store, produce store, tool shed
- **machinery shed / workshop**
- **processing house**

## Common animal houses
| Animal | House |
|---|---|
| poultry | deep litter house, battery cage |
| pig | sty / pen |
| rabbit | hutch |
| cattle | kraal, byre, paddock |
| bees | hive |
| fish | pond |

## Siting farm buildings
consider: **accessibility** (roads); nearness to **water and electricity**; **topography** and drainage (not flood-prone); **wind direction** (animal houses downwind of living houses); **soil** type; **security**; room for expansion.

## Maintenance
repair leaking roofs and cracked walls; repaint; replace broken doors and fences; clean and disinfect animal houses; clear drains and bushes; fumigate stores; control termites.`,
          examples: `**Example 1.** Which structure stores maize cobs? *Answer:* a **crib**.

**Example 2.** What is a rabbit's house called? *Answer:* a **hutch**.

**Example 3.** Give one factor in siting a poultry house. *Answer:* **good drainage** (or wind direction, nearness to water).`,
        },
        questions: [
          ["E", "A structure used for storing large quantities of grain is a", "silo", "hutch", "sty", "kraal", "Silos keep grains dry."],
          ["E", "The house of a rabbit is a", "hutch", "sty", "byre", "hive", "Rabbits are kept in hutches."],
          ["E", "A pig is housed in a", "sty", "hutch", "kennel", "crib", "A pig pen is called a sty."],
          ["M", "Maize cobs are stored and dried in a", "crib", "pond", "dip", "hutch", "Cribs allow air to pass through."],
          ["M", "Yam tubers are traditionally stored in a", "barn", "silo", "crib", "tank", "Tubers are tied to stakes in a barn."],
          ["M", "A fish pond is an example of a", "production structure", "storage structure", "processing structure", "farm office", "Fish are produced in it."],
          ["M", "Bees are kept in a", "hive", "hutch", "sty", "pen", "Bees build combs in hives."],
          ["H", "Animal houses should be sited downwind of living houses so that", "bad odour is blown away from people", "animals get more rain", "pests increase", "roofs last longer", "Wind carries the smell away."],
          ["H", "A traditional grain storage structure common in northern Nigeria is the", "rhombus", "crib", "barn", "hutch", "It is built of mud and thatch."],
          ["H", "A farm building should not be sited on low, flood-prone land because of poor", "drainage", "accessibility", "security", "wind", "Water would collect around it."],
        ],
      },
      {
        week: 6,
        title: "Farm machinery and mechanisation",
        subtopics: ["Farm machines and implements", "Uses of farm machinery", "Advantages and disadvantages of mechanisation", "Maintenance of farm machinery"],
        objectives: ["Identify farm machines and tractor-drawn implements", "State the uses of farm machinery", "Discuss the advantages and disadvantages of mechanisation", "Describe the maintenance of farm machinery"],
        lesson: {
          title: "Machines on the Farm",
          summary: "Identify farm machines and evaluate mechanisation.",
          minutes: 40,
          notes: `## Farm power
sources: **human** (hand tools), **animal** (oxen, donkeys), **mechanical** (engines, tractors), **electrical**, **solar**, **wind** and **water** power.

## Farm machines and implements
| Machine / implement | Use |
|---|---|
| **tractor** | pulls and powers implements; transport |
| **bulldozer** | land clearing, felling trees |
| **plough** (disc or mouldboard) | **primary tillage** — breaks and turns the soil |
| **harrow** | **secondary tillage** — breaks clods to a fine tilth |
| **ridger** | makes ridges |
| **planter / seed drill** | plants seeds at the right spacing and depth |
| **cultivator** | weeding and loosening soil between rows |
| **sprayer** | applies pesticides and herbicides |
| **fertiliser spreader** | applies fertiliser |
| **combine harvester** | **harvests, threshes and cleans** grains in one operation |
| **sheller / thresher** | removes grains from cobs or stalks |
| **milling machine** | grinds grain |
| **incubator** | hatches eggs |
| **milking machine** | milks cows |
| **irrigation pump** | lifts water |

## Farm mechanisation
the use of **machines** to carry out farm operations.
**Advantages:** saves **time** and **labour**; reduces **drudgery**; large areas can be farmed; **timely** operations; higher output; lower cost per unit on large farms.
**Disadvantages:** **high cost** of machines; **unemployment** of farm labourers; needs **skilled operators**; lack of **spare parts** and fuel; **small, scattered farms** are unsuitable; soil **compaction** and erosion; pollution.

## Maintenance
- **daily checks**: fuel, oil, water, tyre pressure, battery
- **grease** moving parts; change oil and filters as recommended
- tighten loose bolts and nuts
- clean after use; keep under a **shed**
- replace worn parts; follow the **manufacturer's manual**
- trained operators only`,
          examples: `**Example 1.** Which implement is used for primary tillage? *Answer:* the **plough**.

**Example 2.** What does a combine harvester do? *Answer:* It **harvests, threshes and cleans** grains in one operation.

**Example 3.** Give one disadvantage of mechanisation. *Answer:* **High cost** of machines (or unemployment).`,
        },
        questions: [
          ["E", "The machine that pulls and powers most farm implements is the", "tractor", "sheller", "incubator", "sprayer", "It is the main farm power unit."],
          ["E", "The use of machines to carry out farm operations is", "farm mechanisation", "bush fallowing", "crop rotation", "subsistence farming", "Machines replace hand labour."],
          ["E", "The implement used to break and turn the soil is the", "plough", "sprayer", "planter", "sheller", "It does primary tillage."],
          ["M", "The implement used to break soil clods into a fine tilth is the", "harrow", "plough", "ridger", "cultivator", "It does secondary tillage."],
          ["M", "The machine that harvests, threshes and cleans grain in one operation is the", "combine harvester", "seed drill", "bulldozer", "harrow", "It combines several operations."],
          ["M", "The machine used to hatch eggs is the", "incubator", "sheller", "ridger", "sprayer", "It provides warmth for eggs."],
          ["M", "An advantage of farm mechanisation is that it", "saves time and labour", "needs no fuel", "is cheap for small farms", "creates more hand labour", "Machines work faster."],
          ["H", "Mechanisation is difficult on many Nigerian farms because farms are", "small and scattered", "too flat", "too fertile", "always irrigated", "Machines need large open fields."],
          ["H", "Heavy machines passing repeatedly over the soil can cause", "soil compaction", "better drainage", "more humus", "deeper topsoil", "The soil is pressed hard."],
          ["H", "Greasing the moving parts of a machine is done to", "reduce friction and wear", "increase fuel use", "cool the tyres", "paint the body", "Lubrication protects parts."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Animal feeds and feeding",
        subtopics: ["Classes of animal feed", "Feed nutrients and their functions", "Types of ration", "Feeding practices"],
        objectives: ["Classify animal feeds", "State the nutrients in feeds and their functions", "Distinguish maintenance and production rations", "Describe good feeding practices"],
        lesson: {
          title: "Feeding Farm Animals",
          summary: "Classify feeds and explain rations and feeding practices.",
          minutes: 40,
          notes: `## Classes of feed
| Class | Description | Examples |
|---|---|---|
| **concentrates** | low in fibre, high in **energy or protein** | energy: maize, sorghum, cassava chips; protein: groundnut cake, soya bean meal, fish meal, blood meal |
| **roughages** | high in **fibre** | grasses, hay, silage, straw, legumes like centrosema |
| **supplements** | supply **minerals and vitamins** | bone meal, oyster shell, salt lick, premix |
| **water** | essential for all body processes | clean drinking water |
- **basal feeds** — energy-rich feeds; **forage** — fresh grass and legumes
- **hay** — grass **cut and dried**; **silage** — green forage **preserved by fermentation** in a silo

## Nutrients and functions
| Nutrient | Function | Sources |
|---|---|---|
| **carbohydrates** | energy | maize, cassava, grasses |
| **proteins** | growth, repair, milk and egg production | fish meal, groundnut cake, soya bean |
| **fats and oils** | energy, warmth | oil seeds, palm kernel cake |
| **minerals** | bones, teeth, eggshell (calcium, phosphorus) | bone meal, oyster shell, salt |
| **vitamins** | health and normal functioning | green forage, premix |
| **water** | digestion, transport, temperature control | drinking water |

## Rations
A **ration** is the amount of feed given to an animal in a day (24 hours).
- **balanced ration** — contains all nutrients in the **right proportions**
- **maintenance ration** — just enough to keep the animal **alive and healthy** without gaining or losing weight
- **production ration** — extra feed for **growth, milk, eggs, meat, work or pregnancy**

## Poultry feeds
chick mash (starter), growers' mash, **layers' mash** (rich in calcium), **broiler starter** and **finisher**.

## Feeding practices
feed regularly and at the right time; provide **clean water** always; avoid mouldy feed; store feed in a dry, rodent-free place; use feeders that reduce waste; feed according to age and purpose.
**Malnutrition** causes slow growth, low production, disease and death.`,
          examples: `**Example 1.** Is groundnut cake a concentrate or roughage? *Answer:* a **protein concentrate**.

**Example 2.** What is a maintenance ration? *Answer:* Feed that **keeps the animal alive and healthy** without weight change.

**Example 3.** What is silage? *Answer:* Green forage **preserved by fermentation**.`,
        },
        questions: [
          ["E", "Feeds that are high in fibre, such as grass and hay, are", "roughages", "concentrates", "supplements", "premixes", "They are bulky feeds."],
          ["E", "The amount of feed given to an animal in a day is a", "ration", "diet plan only", "supplement", "forage", "It covers 24 hours."],
          ["E", "The nutrient that provides energy for animals is", "carbohydrate", "vitamin", "mineral", "water", "Grains supply carbohydrates."],
          ["M", "Fish meal and groundnut cake are", "protein concentrates", "roughages", "mineral supplements", "energy roughages", "They are rich in protein."],
          ["M", "Grass that is cut and dried for feeding animals is", "hay", "silage", "straw only", "concentrate", "Drying preserves the grass."],
          ["M", "Green forage preserved by fermentation is", "silage", "hay", "bran", "cake", "It is stored in a silo or pit."],
          ["M", "A ration containing all nutrients in the right proportions is a", "balanced ration", "maintenance ration", "poor ration", "basal ration", "No nutrient is lacking."],
          ["H", "The ration given just to keep an animal alive without gaining or losing weight is the", "maintenance ration", "production ration", "balanced supplement", "finisher ration", "It maintains body weight."],
          ["H", "Extra feed given to a cow for milk production is a", "production ration", "maintenance ration", "roughage only", "starvation ration", "It supports production."],
          ["H", "Oyster shell is added to layers' feed mainly to supply", "calcium for eggshells", "protein for meat", "energy", "fibre", "Eggshells are made of calcium compounds."],
        ],
      },
      {
        week: 2,
        title: "Livestock management systems and housing",
        subtopics: ["Extensive system", "Intensive system", "Semi-intensive system", "Housing requirements"],
        objectives: ["Describe the extensive system of livestock management", "Describe the intensive system", "Describe the semi-intensive system", "State the requirements of good livestock housing"],
        lesson: {
          title: "How Farm Animals Are Kept",
          summary: "Compare livestock management systems and housing requirements.",
          minutes: 40,
          notes: `## Extensive system (free range)
animals **roam freely** to find their own food and water, with little or no housing or care.
- examples: village goats and chickens; **nomadic herding** of cattle
- **advantages:** cheap; little labour; animals get exercise and varied feed
- **disadvantages:** animals may be **stolen, lost or killed**; exposure to **diseases, parasites and predators**; **low productivity**; damage to crops; uncontrolled breeding; hard to keep records

## Intensive system
animals are **kept indoors (confined)** all the time and given all feed, water and care.
- examples: poultry in **battery cages** or **deep litter** houses; pigs in pens; zero grazing of dairy cattle
- **advantages:** **high productivity**; easy to control diseases and breeding; protection from thieves and predators; records are easy; less land needed
- **disadvantages:** **expensive** (housing, feed, labour); diseases **spread fast** in crowded houses; vices such as pecking and cannibalism in poultry

## Semi-intensive system
a **combination**: animals are **housed** (especially at night) and also allowed to **graze or run in a fenced area** (paddock or run) during the day.
- moderate cost and productivity; animals get exercise and supplementary feed

## Housing requirements
A good animal house should be:
- **well ventilated** but free from draughts
- **dry** and well drained
- **spacious** (not overcrowded)
- **easy to clean** (concrete floor, good drainage)
- **secure** from thieves and predators
- protective against **rain, sun and wind**
- fitted with **feeders and drinkers**
- sited away from living houses

## Poultry housing
- **deep litter** — birds on a floor covered with wood shavings (litter)
- **battery cage** — birds in rows of wire cages; eggs roll out for collection
- **free range / fold units**`,
          examples: `**Example 1.** Which system allows animals to roam freely? *Answer:* the **extensive (free range)** system.

**Example 2.** Give one advantage of the intensive system. *Answer:* **High productivity** (or easy disease control).

**Example 3.** In the deep litter system, what covers the floor? *Answer:* **wood shavings (litter)**.`,
        },
        questions: [
          ["E", "The system in which animals roam freely to find their food is the", "extensive system", "intensive system", "battery system", "zero grazing", "It is also called free range."],
          ["E", "The system in which animals are kept indoors all the time is the", "intensive system", "extensive system", "nomadic system", "free range", "Animals are confined."],
          ["E", "A good animal house should be", "well ventilated and dry", "dark and damp", "overcrowded", "hard to clean", "Fresh air and dryness keep animals healthy."],
          ["M", "Keeping layers in rows of wire cages is the", "battery cage system", "deep litter system", "free range system", "fold system", "Eggs roll out for collection."],
          ["M", "A disadvantage of the extensive system is that animals", "are exposed to theft and disease", "cost too much to house", "produce too many eggs", "need much labour", "They are unprotected."],
          ["M", "The system that combines housing with grazing in a fenced area is the", "semi-intensive system", "extensive system", "intensive system", "nomadic system", "It mixes both systems."],
          ["M", "An advantage of the intensive system is", "high productivity", "low cost", "free exercise for animals", "no need for feed", "Care and feeding are controlled."],
          ["H", "In crowded intensive houses, a major risk is that", "diseases spread quickly", "animals get lost", "predators attack easily", "breeding is uncontrolled", "Close contact spreads infection."],
          ["H", "In the deep litter system, the floor is covered with", "wood shavings", "wire mesh", "water", "concrete blocks only", "The litter absorbs droppings."],
          ["H", "Feeding cut grass to dairy cattle kept permanently in stalls is", "zero grazing", "free range", "nomadism", "paddocking", "The cattle do not graze outside."],
        ],
      },
      {
        week: 3,
        title: "Poultry production",
        subtopics: ["Types and breeds of poultry", "Brooding of chicks", "Management of layers and broilers", "Poultry products and marketing"],
        objectives: ["Identify types and breeds of poultry", "Describe the brooding of chicks", "Describe the management of layers and broilers", "List poultry products and how they are marketed"],
        lesson: {
          title: "Keeping Chickens for Eggs and Meat",
          summary: "Describe poultry breeds, brooding and management.",
          minutes: 40,
          notes: `## Types of poultry
chickens (domestic fowl), turkeys, ducks, geese, guinea fowl, pigeons, quails.

## Classes of chicken
| Class | Purpose | Examples |
|---|---|---|
| **layers** | **egg** production | White Leghorn, Isa Brown |
| **broilers** | **meat** production; reach market weight in about 6–8 weeks | Cornish, Arbor Acres, Cobb |
| **dual-purpose** | eggs and meat | Rhode Island Red, Plymouth Rock |
| **local (indigenous) chickens** | hardy, small, low output | village fowl |
Terms: **cock** (adult male), **hen** (adult female), **chick** (young), **pullet** (young female before laying), **cockerel** (young male), **capon** (castrated male).

## Hatching
eggs are hatched by a **broody hen** or an **incubator**. Chicken eggs hatch in **21 days**. **Day-old chicks** are bought from hatcheries.

## Brooding
**Brooding** is the care of chicks from **day-old to about 4–8 weeks**, when they need extra **warmth**.
- prepare the **brooder house**: clean, disinfect, spread fresh litter
- provide a **heat source**: kerosene lamp, charcoal stove, electric or gas brooder
- use a **brooder guard** to keep chicks near the heat
- chicks **crowding under the heat** = too cold; **moving far away and panting** = too hot; **evenly spread** = comfortable
- give **chick mash**, clean water, glucose and vitamins on arrival
- **vaccinate** against Newcastle disease, Gumboro and fowl pox as scheduled

## Management of layers
start laying at about **18–22 weeks**; give **layers' mash** and oyster shell; provide **nest boxes** and 14–16 hours of light; collect eggs at least twice daily; **cull** poor layers; **debeak** to prevent pecking and egg eating.

## Management of broilers
give **broiler starter** then **finisher**; feed and water always available; keep litter dry; sell at about **6–8 weeks**.

## Products
eggs, meat, feathers, droppings (manure). Market eggs graded by size in crates; sell birds live or dressed.`,
          examples: `**Example 1.** How long do chicken eggs take to hatch? *Answer:* **21 days**.

**Example 2.** Chicks crowd together under the heat source. What does this show? *Answer:* They are **too cold**.

**Example 3.** Which class of chicken is kept for meat? *Answer:* **broilers**.`,
        },
        questions: [
          ["E", "Chickens kept for egg production are", "layers", "broilers", "capons", "cockerels", "Layers produce table eggs."],
          ["E", "Chickens kept for meat production are", "broilers", "layers", "pullets", "hens", "Broilers grow fast for meat."],
          ["E", "A machine used to hatch eggs is an", "incubator", "brooder guard", "feeder", "drinker", "It keeps eggs warm."],
          ["M", "Chicken eggs hatch after about", "21 days", "7 days", "28 days", "14 days", "Three weeks of incubation."],
          ["M", "The care of chicks from day-old when they need extra warmth is", "brooding", "culling", "debeaking", "candling", "Chicks cannot keep warm alone."],
          ["M", "A young female chicken before it starts laying is a", "pullet", "capon", "cock", "broiler", "Pullets become layers."],
          ["M", "Removing unproductive birds from a flock is", "culling", "brooding", "hatching", "vaccinating", "Poor layers are removed."],
          ["H", "Chicks moving far from the heat source and panting shows that the brooder is", "too hot", "too cold", "comfortable", "too dark", "They try to escape the heat."],
          ["H", "Debeaking is carried out in poultry to prevent", "pecking and egg eating", "laying of eggs", "growth of feathers", "drinking of water", "The beak tip is trimmed."],
          ["H", "Broilers are usually ready for market at about", "6 to 8 weeks", "20 to 24 weeks", "1 year", "2 days", "They grow very quickly."],
        ],
      },
      {
        week: 4,
        title: "Livestock parasites",
        subtopics: ["Meaning of parasites", "Ectoparasites", "Endoparasites", "Control of parasites"],
        objectives: ["Define parasites", "Identify ectoparasites and their effects", "Identify endoparasites and their effects", "Describe methods of controlling livestock parasites"],
        lesson: {
          title: "Parasites of Farm Animals",
          summary: "Identify livestock parasites, their effects and control.",
          minutes: 40,
          notes: `## Meaning
A **parasite** is an organism that **lives on or inside another organism (the host)**, obtaining food from it and causing it harm.

## Ectoparasites (external)
live **on the skin** of the host.
| Parasite | Hosts | Effects |
|---|---|---|
| **ticks** | cattle, sheep, goats, dogs | suck blood; cause anaemia and wounds; **transmit diseases** such as redwater and heartwater |
| **lice** | poultry, pigs, cattle | irritation, restlessness, loss of feathers or hair |
| **mites** | poultry, goats, rabbits | **mange** (scaly skin), itching |
| **fleas** | poultry, dogs | suck blood, irritation |
| **tsetse fly** | cattle | sucks blood and transmits **trypanosomiasis** (nagana) |

## Endoparasites (internal)
live **inside the body** (intestines, liver, lungs, blood).
| Parasite | Hosts | Effects |
|---|---|---|
| **roundworms** (e.g. *Ascaris*) | pigs, poultry, cattle | poor growth, pot belly, diarrhoea |
| **tapeworms** (*Taenia*) | cattle (beef tapeworm), pigs (pork tapeworm) | loss of weight; cysts in meat ("measly" meat) that infect humans |
| **liver fluke** (*Fasciola*) | cattle, sheep | damages the liver; **water snail** is the intermediate host |
| **coccidia** (protozoa) | poultry, rabbits | **coccidiosis** — bloody droppings |
| **trypanosomes** | cattle | trypanosomiasis — fever, weakness, anaemia |

## General effects of parasites
loss of blood and weight; slow growth; low milk, egg and meat production; damage to hides and skins; transmission of diseases; death in heavy infestations; economic loss.

## Control
- **ectoparasites**: **dipping** or **spraying** animals with acaricides/insecticides; dusting poultry; hand-picking ticks; clean housing; rotational grazing; clearing bush
- **endoparasites**: regular **deworming (drenching)** with anthelmintics; clean feed and water; proper disposal of dung; **rotational grazing**; drain swampy areas and control snails (for liver fluke); **meat inspection** and thorough cooking of meat; coccidiostats in poultry feed`,
          examples: `**Example 1.** Is a tick an ectoparasite or an endoparasite? *Answer:* an **ectoparasite**.

**Example 2.** What is the intermediate host of the liver fluke? *Answer:* the **water snail**.

**Example 3.** How are worms in livestock controlled? *Answer:* by regular **deworming (drenching)**.`,
        },
        questions: [
          ["E", "An organism that lives on or in a host and harms it is a", "parasite", "predator", "pathogen only", "scavenger", "It feeds at the host's expense."],
          ["E", "Parasites that live on the skin of animals are", "ectoparasites", "endoparasites", "bacteria", "viruses", "Ecto means outside."],
          ["E", "Ticks and lice are examples of", "ectoparasites", "endoparasites", "protozoa", "fungi", "They live on the skin."],
          ["M", "Tapeworms and roundworms are", "endoparasites", "ectoparasites", "insects", "mites", "They live inside the body."],
          ["M", "The intermediate host of the liver fluke is the", "water snail", "tick", "tsetse fly", "mosquito", "Flukes develop in snails."],
          ["M", "Giving animals drugs to expel worms is", "deworming", "dipping", "debeaking", "dehorning", "Anthelmintics are used."],
          ["M", "Immersing animals in a chemical bath to kill ticks is", "dipping", "drenching", "docking", "culling", "The dip contains acaricide."],
          ["H", "The tsetse fly transmits the disease called", "trypanosomiasis", "coccidiosis", "anthrax", "Newcastle disease", "It is also called nagana in cattle."],
          ["H", "Bloody droppings in poultry are a sign of", "coccidiosis", "fowl pox", "mange", "liver fluke", "It is caused by protozoa."],
          ["H", "Moving animals from one paddock to another to break parasite life cycles is", "rotational grazing", "zero grazing", "overgrazing", "free ranging", "Paddocks are rested in turn."],
        ],
      },
      {
        week: 5,
        title: "Livestock diseases",
        subtopics: ["Meaning and causes of disease", "Viral and bacterial diseases", "Protozoan, fungal and nutritional diseases", "Prevention and control"],
        objectives: ["Define disease and list its causes", "Describe common viral and bacterial diseases", "Describe protozoan, fungal and nutritional diseases", "Describe methods of preventing and controlling livestock diseases"],
        lesson: {
          title: "Keeping Farm Animals Healthy",
          summary: "Identify common livestock diseases and how to prevent them.",
          minutes: 40,
          notes: `## Meaning
A **disease** is any condition that **disturbs the normal functioning** of an animal's body.
**Signs of ill health:** loss of appetite, dullness, rough coat, high temperature, coughing, diarrhoea, discharge from eyes and nose, standing apart from the herd, drop in production.

## Causes
**viruses, bacteria, protozoa, fungi**, parasites and **poor nutrition**.

## Viral diseases
| Disease | Animals | Signs |
|---|---|---|
| **Newcastle disease** | poultry | twisted neck, gasping, greenish diarrhoea, sudden deaths |
| **fowl pox** | poultry | wart-like sores on comb and wattles |
| **Gumboro (infectious bursal disease)** | young chickens | whitish diarrhoea, ruffled feathers |
| **foot-and-mouth disease** | cattle, sheep, goats, pigs | blisters on mouth and feet, salivation, lameness |
| **rinderpest** | cattle (declared eradicated worldwide in 2011) | fever, mouth sores, diarrhoea |
| **PPR (goat plague)** | goats and sheep | fever, discharges, diarrhoea |
| **African swine fever** | pigs | high fever, red skin patches, death |
| **rabies** | dogs, other mammals | aggression, salivation; fatal; affects humans |

## Bacterial diseases
| Disease | Animals | Signs |
|---|---|---|
| **anthrax** | cattle, sheep, goats | sudden death; dark blood from openings; affects humans |
| **brucellosis (contagious abortion)** | cattle, goats, pigs | abortion |
| **tuberculosis** | cattle | coughing, loss of weight |
| **mastitis** | cows, goats | swollen, painful udder; clots in milk |
| **fowl cholera / typhoid** | poultry | diarrhoea, sudden death |

## Other diseases
- **protozoan**: **trypanosomiasis** (tsetse fly), **coccidiosis** (poultry)
- **fungal**: **ringworm**, aspergillosis
- **nutritional**: **rickets** (lack of calcium, vitamin D), **milk fever**

## Zoonoses
diseases that pass **from animals to humans**: anthrax, rabies, tuberculosis, brucellosis.

## Prevention and control
- **vaccination** at the right time
- **sanitation**: clean houses, feeders and drinkers; disinfect
- **quarantine** new animals; **isolate** sick ones
- good **feeding** and clean water
- control parasites and vectors
- prompt treatment by a **veterinary doctor**
- proper **disposal of dead animals** (burn or bury deeply)
- buy healthy stock; avoid overcrowding`,
          examples: `**Example 1.** Which viral disease causes twisted necks in poultry? *Answer:* **Newcastle disease**.

**Example 2.** What is a zoonosis? *Answer:* A disease that passes **from animals to humans**, e.g. rabies.

**Example 3.** Give one way to prevent livestock diseases. *Answer:* **vaccination** (or sanitation, quarantine).`,
        },
        questions: [
          ["E", "A condition that disturbs the normal functioning of an animal's body is a", "disease", "ration", "breed", "vaccine", "Diseases make animals unwell."],
          ["E", "Newcastle disease affects", "poultry", "cattle", "pigs", "fish", "It is a viral disease of birds."],
          ["E", "Giving animals vaccines to protect them from disease is", "vaccination", "castration", "dehorning", "culling", "Vaccines build immunity."],
          ["M", "Newcastle disease is caused by a", "virus", "bacterium", "fungus", "worm", "It spreads fast among birds."],
          ["M", "Anthrax is caused by a", "bacterium", "virus", "protozoan", "fungus", "It causes sudden death in cattle."],
          ["M", "Inflammation of the udder in cows is", "mastitis", "rickets", "ringworm", "rinderpest", "Milk contains clots."],
          ["M", "Keeping newly bought animals apart for some time before mixing them with the herd is", "quarantine", "culling", "brooding", "docking", "It prevents introducing disease."],
          ["H", "Diseases that can pass from animals to humans are called", "zoonoses", "deficiencies", "vectors", "parasites", "Rabies and anthrax are examples."],
          ["H", "Blisters on the mouth and feet with salivation in cattle indicate", "foot-and-mouth disease", "anthrax", "brucellosis", "coccidiosis", "It is a viral disease."],
          ["H", "Contagious abortion in cattle is another name for", "brucellosis", "mastitis", "tuberculosis", "rinderpest", "It causes abortion in cows."],
        ],
      },
      {
        week: 6,
        title: "Fish farming",
        subtopics: ["Meaning and importance of fish farming", "Types of fish and ponds", "Establishing and managing a fish pond", "Harvesting and preservation of fish"],
        objectives: ["Explain fish farming and its importance", "Identify common cultured fish and types of ponds", "Describe how to establish and manage a fish pond", "Describe the harvesting and preservation of fish"],
        lesson: {
          title: "Rearing Fish in Ponds",
          summary: "Describe how fish are farmed, harvested and preserved.",
          minutes: 40,
          notes: `## Meaning
**Fish farming (aquaculture)** is the **rearing of fish in ponds, tanks or cages** under controlled conditions. **Fishery** covers both fish farming and catching fish from rivers, lakes and seas.

## Importance
cheap source of **animal protein**; income and employment; fish meal for livestock feed; fish oil; makes use of swampy land; reduces fish importation; recreation.

## Common cultured fish in Nigeria
- **catfish** (*Clarias gariepinus*) — hardy, fast-growing, most widely farmed
- **tilapia** (*Oreochromis niloticus*) — breeds quickly
- **carp**, *Heterotis* (African bony tongue), *Heterobranchus*
Other aquatic foods: shrimps, crabs, oysters, periwinkles.

## Types of ponds
**earthen ponds**, **concrete tanks**, **plastic/fibreglass tanks**, **tarpaulin tanks**, cages and pens in open water.

## Establishing a pond
1. **site selection** — clay soil that holds water; reliable clean **water supply**; gentle slope; accessible
2. **construction** — dig the pond; build walls (dykes); fit **inlet** (with screen) and **outlet** pipes
3. **liming** — reduces acidity and kills pests
4. **fertilisation** — manure or fertiliser to grow **plankton** (natural fish food)
5. **filling** with water
6. **stocking** — introducing **fingerlings** (young fish) at the right number, preferably early morning or evening

## Management
- **feeding** with pelleted feed twice daily; avoid overfeeding
- maintain **water quality**; change water when dirty; watch oxygen levels
- control **weeds** and **predators** (snakes, birds, frogs)
- **sampling** to check growth; **sorting** to separate big fish (catfish may eat smaller ones)
- keep records

## Harvesting
after about **4–6 months** for catfish; by **draining** the pond, or with **nets** (drag net, cast net), hooks or traps. **Partial harvesting** removes only big fish.

## Preservation
**smoking**, **sun-drying**, **salting**, **freezing/icing**, **canning**, frying. Smoking is the most common in Nigeria.`,
          examples: `**Example 1.** What are young fish used for stocking called? *Answer:* **fingerlings**.

**Example 2.** Why is a pond fertilised? *Answer:* To grow **plankton**, the natural food of fish.

**Example 3.** Name two methods of preserving fish. *Answer:* **smoking** and **freezing**.`,
        },
        questions: [
          ["E", "The rearing of fish in ponds under controlled conditions is", "fish farming", "apiculture", "forestry", "ranching", "It is also called aquaculture."],
          ["E", "Young fish used for stocking ponds are", "fingerlings", "chicks", "calves", "kids", "They are finger-sized fish."],
          ["E", "A common method of preserving fish in Nigeria is", "smoking", "ploughing", "mulching", "debeaking", "Smoke dries and flavours fish."],
          ["M", "The most widely farmed fish in Nigeria is the", "catfish", "shark", "salmon", "whale", "Clarias is hardy and fast-growing."],
          ["M", "Introducing fingerlings into a prepared pond is", "stocking", "liming", "sampling", "harvesting", "The pond is stocked with fish."],
          ["M", "The best soil for an earthen fish pond is", "clay soil", "sandy soil", "gravel", "rocky soil", "Clay holds water."],
          ["M", "A pond is fertilised in order to grow", "plankton", "weeds", "predators", "snails", "Plankton is natural fish food."],
          ["H", "Lime is applied to a fish pond to", "reduce acidity and kill pests", "feed the fish directly", "colour the water", "increase weeds", "It conditions the pond."],
          ["H", "Catfish of different sizes are sorted to prevent", "bigger fish eating smaller ones", "overfeeding", "plankton growth", "water loss", "Catfish can be cannibalistic."],
          ["H", "Removing only the big fish and leaving the rest to grow is", "partial harvesting", "total harvesting", "stocking", "liming", "The pond is not drained fully."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Forestry",
        subtopics: ["Meaning and importance of forests", "Forest trees and products", "Deforestation and its effects", "Forest management"],
        objectives: ["Explain forestry and the importance of forests", "Identify forest trees and products", "Explain the causes and effects of deforestation", "Describe forest management practices"],
        lesson: {
          title: "Forests and Their Uses",
          summary: "Explain the importance of forests and how they are managed.",
          minutes: 40,
          notes: `## Meaning
A **forest** is a large area of land covered with **trees** and other plants. **Forestry** is the science of **planting, managing and using forests**.

## Importance of forests
- **timber** for furniture, building and electric poles
- **fuel**: firewood and charcoal
- **food**: fruits, nuts, vegetables, bush meat, honey, mushrooms
- **medicinal** herbs
- **pulp** for paper
- other products: gum, resin, rubber latex, dyes, ropes, chewing sticks, wrapping leaves
- **home for wildlife** (habitat)
- protect soil from **erosion**; act as **windbreaks**
- improve **rainfall** and climate; absorb carbon dioxide and release oxygen
- protect **watersheds**
- **tourism**, recreation and employment
- revenue for government

## Timber trees in Nigeria
**iroko** (*Milicia excelsa*), **mahogany** (*Khaya*), **obeche** (*Triplochiton scleroxylon*), **afara** (*Terminalia*), **opepe**, **teak** (*Tectona grandis*) and **gmelina** (*Gmelina arborea*) — the last two are common **plantation** species.

## Deforestation
the **removal of forest trees** without replacing them.
**Causes:** lumbering (logging); farming and bush burning; fuel wood collection; road and town building; mining; overgrazing.
**Effects:** soil **erosion**; **desert encroachment**; loss of wildlife; reduced rainfall; climate change; flooding; shortage of timber and fuel.

## Forest management
- **forest regulation** — laws against indiscriminate felling; licences; **forest reserves** and forest guards
- **selective exploration (selective felling)** — cutting only mature trees
- **regeneration** — natural regrowth, or **artificial** planting of seedlings
- **afforestation** — planting trees where there was no forest; **reafforestation** — replanting a cleared forest
- **taungya system** — farmers grow **food crops among young forest trees** and tend the seedlings; they leave when the trees form a canopy
- **deforestation control**, fire tracing and public education`,
          examples: `**Example 1.** What is deforestation? *Answer:* The **removal of forest trees without replacing them**.

**Example 2.** What is the taungya system? *Answer:* Growing **food crops among young forest trees**.

**Example 3.** Name two timber trees. *Answer:* **iroko** and **mahogany**.`,
        },
        questions: [
          ["E", "The science of planting and managing forests is", "forestry", "fishery", "apiculture", "horticulture", "It deals with forest trees."],
          ["E", "Wood obtained from forest trees for building and furniture is", "timber", "latex", "resin", "pulp only", "Timber is sawn wood."],
          ["E", "The removal of forest trees without replacing them is", "deforestation", "afforestation", "regeneration", "taungya", "Forests are destroyed."],
          ["M", "Planting trees on land where there was no forest is", "afforestation", "deforestation", "lumbering", "selective felling", "New forests are created."],
          ["M", "Growing food crops among young forest trees is the", "taungya system", "ley system", "fallow system", "alley system only", "Farmers tend the tree seedlings."],
          ["M", "Which of these is a timber tree?", "iroko", "cowpea", "cassava", "tomato", "Iroko gives hard, durable wood."],
          ["M", "An effect of deforestation is", "soil erosion", "more wildlife", "increased rainfall", "richer topsoil", "Bare soil is washed away."],
          ["H", "Cutting only mature trees while leaving young ones is", "selective felling", "clear felling", "bush burning", "taungya", "It allows the forest to continue."],
          ["H", "Two tree species widely grown in plantations in Nigeria are", "teak and gmelina", "iroko and cowpea", "obeche and cassava", "mahogany and maize", "They grow fast in plantations."],
          ["H", "Forests help to reduce climate change mainly because trees", "absorb carbon dioxide", "release smoke", "use up oxygen only", "block rivers", "They take in carbon dioxide for photosynthesis."],
        ],
      },
      {
        week: 2,
        title: "Processing and storage of farm produce",
        subtopics: ["Meaning and importance of processing", "Processing of common crops", "Storage methods and structures", "Storage pests and their control"],
        objectives: ["Explain processing and its importance", "Describe the processing of common farm produce", "Describe storage methods and structures", "Identify storage pests and how to control them"],
        lesson: {
          title: "After the Harvest",
          summary: "Describe how farm produce is processed and stored.",
          minutes: 40,
          notes: `## Processing
**Processing** is **changing raw farm produce into more useful, safe or longer-lasting forms**.
Importance: prevents **spoilage**; adds **value** and income; makes produce easier to store and transport; removes poisons (cyanide in cassava); provides variety.

## Processing of common produce
| Produce | Products | Main steps |
|---|---|---|
| **cassava** | garri, fufu, flour, starch, chips | peel, wash, grate, ferment and press, sieve, fry (garri) |
| **oil palm fruit** | palm oil, palm kernel oil | sterilise (boil), strip, pound/digest, press, clarify |
| **maize** | corn flour, pap (ogi), corn flakes | dry, shell, mill |
| **rice** | milled rice | thresh, **parboil**, dry, mill, winnow |
| **groundnut** | oil, cake, kuli-kuli | shell, roast, grind, press |
| **cocoa** | cocoa beans → chocolate, beverages | break pods, **ferment**, dry |
| **yam** | yam flour (elubo) | peel, slice, parboil, dry, mill |
| **milk** | butter, cheese (wara), yoghurt | pasteurise, ferment or churn |
Terms: **threshing** (separating grain from stalks), **shelling** (removing grains from cobs or pods), **winnowing** (blowing away chaff), **milling** (grinding), **parboiling** (partly boiling rice in the husk).

## Storage
keeping produce safe until needed.
| Structure | Produce |
|---|---|
| **crib** | maize cobs |
| **rhombus** | grains (north) |
| **silo** | large quantities of dry grain |
| **barn** | yam |
| **sacks / airtight containers** | grains, beans |
| **cold room / refrigerator** | fruits, vegetables, meat, fish |
| **platforms and pits** | cocoyam, potatoes |
Conditions for good storage: produce must be **dry** (low moisture), clean and undamaged; store must be **cool, dry, well ventilated** and pest-proof.

## Storage pests
**weevils** (maize, rice), **bruchids (bean weevils)**, grain borers, **rats and mice**, moulds.
Control: dry produce well; clean and **fumigate** stores; airtight containers; rat guards on cribs; mix grains with ash or dried pepper (traditional); approved storage chemicals used correctly; regular inspection.`,
          examples: `**Example 1.** Why is cassava fermented and pressed during garri making? *Answer:* To **remove water and reduce poisonous cyanide**.

**Example 2.** What is winnowing? *Answer:* **Blowing away chaff** from grain.

**Example 3.** Where are yams stored? *Answer:* in a **barn**.`,
        },
        questions: [
          ["E", "Changing raw farm produce into more useful forms is", "processing", "planting", "weeding", "harvesting", "It adds value to produce."],
          ["E", "Garri is processed from", "cassava", "maize", "rice", "yam", "Cassava is grated and fried."],
          ["E", "Removing grains from maize cobs is", "shelling", "winnowing", "parboiling", "fermenting", "Grains are detached from cobs."],
          ["M", "Blowing away chaff from grain is", "winnowing", "threshing", "milling", "shelling", "Wind carries off the light chaff."],
          ["M", "Partly boiling rice in the husk before milling is", "parboiling", "pasteurising", "fermenting", "winnowing", "It hardens the grains."],
          ["M", "A common insect pest of stored maize is the", "weevil", "locust", "aphid", "capsid", "Weevils bore into the grains."],
          ["M", "Produce should be well dried before storage in order to", "prevent mould and spoilage", "increase its weight", "attract weevils", "make it germinate", "Moisture encourages mould."],
          ["H", "Fresh cocoa beans are fermented mainly to", "develop flavour and remove the pulp", "increase water content", "add sugar", "kill the tree", "Fermentation develops chocolate flavour."],
          ["H", "Treating a store with a poisonous gas to kill storage pests is", "fumigation", "irrigation", "parboiling", "liming", "The gas reaches all the produce."],
          ["H", "Metal guards fitted on the legs of a crib are meant to keep out", "rats", "weevils", "moulds", "birds only", "Rats cannot climb past them."],
        ],
      },
      {
        week: 3,
        title: "Farm records and accounts",
        subtopics: ["Meaning and importance of farm records", "Types of farm records", "Simple farm accounts", "Calculating profit and loss"],
        objectives: ["Explain farm records and their importance", "Identify types of farm records", "Explain simple farm accounts", "Calculate farm profit or loss"],
        lesson: {
          title: "Keeping Track of the Farm",
          summary: "Keep simple farm records and calculate profit or loss.",
          minutes: 40,
          notes: `## Meaning
**Farm records** are **written accounts of all activities and transactions** on a farm.

## Importance
- show whether the farm is making **profit or loss**
- help in **planning and decision-making**
- needed to obtain **loans** from banks
- show the **history** and progress of the farm
- help to detect fraud and waste
- used for **tax** assessment
- help to compare enterprises (e.g. poultry versus maize)

## Types of farm records
| Record | What it shows |
|---|---|
| **farm diary** | daily activities on the farm |
| **farm inventory** | list of all **assets** (land, buildings, tools, animals, stock) and their values |
| **production record** | quantities produced (eggs laid, bags of maize, milk) |
| **input / consumption record** | feed, seed, fertiliser, drugs used |
| **sales record** | items sold, quantities, prices |
| **purchase record** | items bought and their costs |
| **labour record** | workers, work done and wages |
| **payroll** | wages and salaries paid |
| **cash book** | money received and paid out |
| **breeding / health record** | mating, births, vaccinations, treatments |

## Farm accounts
- **income (revenue)** — money received from sales
- **expenditure (cost)** — money spent on inputs, labour, rent
- **profit = total income − total expenditure**; if expenditure is greater, the farm makes a **loss**
- **assets** — what the farm owns; **liabilities** — what it owes
- **depreciation** — loss in value of tools and machines over time

## Worked example
A poultry farmer sold 100 crates of eggs at ₦3,000 each and 50 old layers at ₦4,000 each. He spent ₦250,000 on feed, ₦40,000 on labour and ₦30,000 on drugs.
- income = 100 × 3,000 + 50 × 4,000 = 300,000 + 200,000 = **₦500,000**
- expenditure = 250,000 + 40,000 + 30,000 = **₦320,000**
- profit = 500,000 − 320,000 = **₦180,000**`,
          examples: `**Example 1.** Which record lists all the assets of a farm? *Answer:* the **farm inventory**.

**Example 2.** Income ₦200,000; expenditure ₦150,000. Find the profit. *Answer:* **₦50,000**.

**Example 3.** Give one reason for keeping farm records. *Answer:* To know whether the farm is making **profit or loss**.`,
        },
        questions: [
          ["E", "Written accounts of all activities and transactions on a farm are", "farm records", "farm tools", "farm structures", "farm rations", "They document the farm business."],
          ["E", "The record of daily activities on a farm is the", "farm diary", "inventory", "payroll", "sales record", "Events are noted each day."],
          ["E", "Money received from the sale of farm produce is", "income", "expenditure", "liability", "depreciation", "It is also called revenue."],
          ["M", "A list of all the assets of a farm and their values is the", "farm inventory", "farm diary", "labour record", "production record", "It lists what the farm owns."],
          ["M", "The record showing quantities of eggs laid each day is a", "production record", "purchase record", "payroll", "cash book", "It records output."],
          ["M", "Profit is calculated as", "total income minus total expenditure", "total expenditure minus total income", "income plus expenditure", "assets plus liabilities", "Income must exceed costs."],
          ["M", "With an income of ₦200,000 and expenditure of ₦150,000, the profit is", "₦50,000", "₦350,000", "₦150,000", "₦200,000", "200,000 − 150,000."],
          ["H", "A farmer earned ₦500,000 and spent ₦320,000. The profit is", "₦180,000", "₦820,000", "₦320,000", "₦280,000", "500,000 − 320,000."],
          ["H", "The loss in value of farm machines over time is", "depreciation", "appreciation", "inventory", "liability", "Machines wear out with use."],
          ["H", "A bank is most likely to ask a farmer for farm records in order to", "decide whether to grant a loan", "buy his produce", "employ his workers", "plant his crops", "Records show the farm can repay."],
        ],
      },
      {
        week: 4,
        title: "Agricultural marketing",
        subtopics: ["Meaning and importance of marketing", "Marketing functions", "Marketing channels and agents", "Problems of marketing farm produce"],
        objectives: ["Explain agricultural marketing", "Describe marketing functions", "Identify marketing channels and agents", "Identify problems of marketing farm produce in Nigeria"],
        lesson: {
          title: "Getting Produce to the Consumer",
          summary: "Explain how farm produce is marketed and the problems involved.",
          minutes: 40,
          notes: `## Meaning
**Agricultural marketing** covers all the **activities involved in moving farm produce from the farmer to the final consumer**.

## Importance
gives farmers **income**; makes food available where and when needed; encourages more production; creates jobs; supplies industries with raw materials; earns foreign exchange through exports.

## Marketing functions
| Function | Meaning |
|---|---|
| **assembling** | gathering produce from many farms |
| **sorting and grading** | separating produce by size and quality |
| **processing** | changing the form of produce |
| **packaging** | putting produce in sacks, crates, baskets, tins |
| **transportation** | moving produce to markets |
| **storage** | keeping produce until it is needed |
| **financing** | providing money for the activities |
| **pricing and selling** | fixing prices and making sales |
| **advertising** | informing buyers |
| **risk bearing** | accepting losses from spoilage and price changes |

## Marketing channels
the route produce takes:
**farmer → consumer** (farm gate sales);
**farmer → retailer → consumer**;
**farmer → wholesaler → retailer → consumer**;
**farmer → co-operative / produce buyer → processor or exporter**.

## Marketing agents
**producers (farmers)**, **middlemen** (wholesalers and retailers), **co-operative societies**, **produce buyers and exporters**, **processors**, and government agencies. (Commodity **marketing boards** once bought export crops but were abolished in 1986.)

## Problems of marketing in Nigeria
- **poor roads** and high transport costs
- inadequate **storage** and processing → spoilage, especially of perishable produce
- **price fluctuation** — low prices at harvest (glut), high prices later
- too many **middlemen** who take much of the profit
- lack of **market information**
- lack of standard **weights and measures**
- inadequate **credit**
- **perishability** and bulkiness of produce

## Solutions
good roads; storage and processing facilities; co-operative marketing; market information; standard measures; credit to farmers.`,
          examples: `**Example 1.** What is grading? *Answer:* **Separating produce by size and quality**.

**Example 2.** Give one problem of marketing farm produce in Nigeria. *Answer:* **poor roads** (or price fluctuation).

**Example 3.** Why are prices of farm produce low at harvest time? *Answer:* Because of a **glut** — supply is very high.`,
        },
        questions: [
          ["E", "Moving farm produce from the farmer to the final consumer is", "agricultural marketing", "agricultural extension", "crop rotation", "farm mechanisation", "It links farmers and consumers."],
          ["E", "Separating produce according to size and quality is", "grading", "packaging", "financing", "assembling", "Grades attract different prices."],
          ["E", "Putting produce into sacks, crates or baskets is", "packaging", "pricing", "grading", "advertising", "Packaging protects produce."],
          ["M", "People who buy from farmers and sell to consumers are", "middlemen", "extension workers", "breeders", "labourers", "Wholesalers and retailers are middlemen."],
          ["M", "Gathering produce from many small farms is", "assembling", "grading", "storage", "risk bearing", "Produce is collected in bulk."],
          ["M", "A fall in prices at harvest time because of excess supply is due to a", "glut", "scarcity", "drought", "monopoly", "Too much produce is on the market."],
          ["M", "The marketing channel in which a farmer sells directly to the consumer is", "farm gate sales", "export marketing", "wholesale marketing", "board marketing", "No middlemen are involved."],
          ["H", "Farmers can reduce exploitation by middlemen by", "selling through co-operative societies", "destroying produce", "refusing to harvest", "selling only at night", "Co-operatives sell in bulk for better prices."],
          ["H", "Perishable produce such as tomatoes suffers great losses in marketing mainly because of", "poor storage and transport", "too many buyers", "high rainfall only", "good roads", "It spoils before reaching the market."],
          ["H", "Accepting possible losses from spoilage and price changes is the marketing function of", "risk bearing", "advertising", "grading", "assembling", "Marketers bear such risks."],
        ],
      },
      {
        week: 5,
        title: "Agricultural co-operatives and credit",
        subtopics: ["Meaning of co-operative societies", "Types of agricultural co-operatives", "Sources of farm credit", "Problems of farm credit"],
        objectives: ["Explain agricultural co-operative societies", "Identify types of agricultural co-operatives", "Identify sources of farm credit", "Discuss problems of obtaining farm credit"],
        lesson: {
          title: "Working Together and Financing the Farm",
          summary: "Explain co-operatives and sources of farm finance.",
          minutes: 40,
          notes: `## Co-operative societies
A **co-operative society** is a **voluntary association of people who pool their resources** to promote their common economic interests.
Principles: **voluntary and open membership**; **democratic control** (one member, one vote); sharing of surplus according to patronage; limited interest on capital; education of members.

## Types of agricultural co-operatives
| Type | Function |
|---|---|
| **producers' co-operative** | members produce together and share equipment |
| **marketing co-operative** | sells members' produce in bulk for better prices |
| **consumers' co-operative** | buys goods in bulk and sells cheaply to members |
| **thrift and credit co-operative** | members save and take loans |
| **multipurpose co-operative** | combines several functions |
| **farm supply co-operative** | buys inputs (fertiliser, seeds) in bulk |

## Benefits to farmers
cheap inputs through bulk purchase; easier access to **loans**; better prices for produce; shared use of machines; training and information; stronger voice with government.

## Farm credit
**Agricultural credit** is money **borrowed** for farm use, to be repaid later, usually with **interest**.
- **short-term** (up to about 1 year) — seeds, fertiliser, labour
- **medium-term** (1–5 years) — small machines, livestock
- **long-term** (over 5 years) — land, buildings, tractors, tree crops

## Sources of credit
- **institutional (formal)**: commercial banks, **Bank of Agriculture**, microfinance banks, co-operative societies, government schemes
- **non-institutional (informal)**: personal savings, family and friends, **money lenders**, traditional contribution groups (**esusu/ajo/adashe**)

## Problems of farm credit
lack of **collateral (security)**; **high interest rates**; farmers' lack of **records**; long delays and complicated procedures; risk of crop failure; **diversion** of loans to non-farm uses; poor repayment.

## Subsidy
government paying **part of the cost** of inputs (e.g. fertiliser) so that farmers buy them cheaply.`,
          examples: `**Example 1.** What is the co-operative principle of democratic control? *Answer:* **One member, one vote**.

**Example 2.** Which type of credit suits buying a tractor? *Answer:* **long-term** credit.

**Example 3.** Give one problem farmers face in obtaining loans. *Answer:* **lack of collateral**.`,
        },
        questions: [
          ["E", "A voluntary association of people who pool resources for their common interest is a", "co-operative society", "marketing board", "ministry", "research institute", "Members help one another."],
          ["E", "Money borrowed for farm use to be repaid later is", "agricultural credit", "subsidy", "profit", "inventory", "Credit is a loan."],
          ["E", "The extra money paid on a loan is", "interest", "collateral", "subsidy", "capital", "It is the cost of borrowing."],
          ["M", "A co-operative that sells members' produce in bulk is a", "marketing co-operative", "consumers' co-operative", "thrift co-operative", "producers' union only", "Bulk sales fetch better prices."],
          ["M", "Security pledged by a farmer to obtain a bank loan is", "collateral", "interest", "subsidy", "dividend", "The bank can take it if the loan is unpaid."],
          ["M", "A loan for buying seeds and fertiliser for one season is", "short-term credit", "long-term credit", "medium-term credit", "a grant", "It is repaid after harvest."],
          ["M", "An informal source of farm credit is", "a money lender", "a commercial bank", "the Bank of Agriculture", "a microfinance bank", "Money lenders are non-institutional."],
          ["H", "Government paying part of the cost of fertiliser so farmers buy it cheaply is a", "subsidy", "loan", "tax", "tariff", "It reduces the price of inputs."],
          ["H", "A loan used for establishing a cocoa plantation is best described as", "long-term credit", "short-term credit", "daily credit", "seasonal credit", "Tree crops take years to yield."],
          ["H", "Using a farm loan for a wedding or house building is called", "loan diversion", "loan recovery", "collateral", "subsidy", "The money is not used for farming."],
        ],
      },
      {
        week: 6,
        title: "Agricultural extension and government programmes",
        subtopics: ["Meaning of agricultural extension", "Extension teaching methods", "Role of government in agriculture", "Agricultural programmes in Nigeria"],
        objectives: ["Explain agricultural extension", "Describe extension teaching methods", "State the roles of government in agricultural development", "Identify agricultural programmes and policies in Nigeria"],
        lesson: {
          title: "Bringing New Ideas to Farmers",
          summary: "Explain extension services and government's role in agriculture.",
          minutes: 40,
          notes: `## Agricultural extension
**Agricultural extension** is an **informal, out-of-school education service** that takes **new ideas and improved practices** from research institutes to farmers, and takes farmers' problems back to researchers.
The **extension worker (agent)** is the link between **research** and **farmers**.

## Extension teaching methods
| Group | Methods |
|---|---|
| **individual methods** | farm and home visits, office calls, letters, phone calls |
| **group methods** | **method demonstration** (showing how to do a practice), **result demonstration** (showing the result of a practice), field days, lectures, agricultural shows, excursions |
| **mass methods** | radio, television, posters, leaflets, newspapers, film shows, social media |

## Qualities of a good extension worker
knowledgeable; patient; good communicator; honest; understands farmers' language and culture; hard-working.

## Problems of extension
too few extension workers; poor transport; inadequate funding; illiteracy of farmers; language barriers; farmers' resistance to change.

## Role of government in agriculture
- providing **loans, subsidies and inputs**
- funding **research** and extension
- building **roads, dams, irrigation** and storage
- making **policies and laws** (land use, quarantine)
- training agricultural personnel
- pest and disease control (vaccination campaigns)
- encouraging processing and export

## Agricultural programmes and agencies in Nigeria
- **farm settlement schemes** (1959 onward, Western Region)
- **National Accelerated Food Production Programme (NAFPP)** — 1972
- **Operation Feed the Nation (OFN)** — 1976
- **River Basin Development Authorities (RBDAs)** — irrigation and dams
- **Agricultural Development Projects (ADPs)** — state-level extension and inputs
- **Green Revolution** — 1980
- **Directorate of Food, Roads and Rural Infrastructure (DFRRI)** — 1986
- more recent initiatives include the **Agricultural Transformation Agenda** and the **Anchor Borrowers' Programme** (credit to small farmers)`,
          examples: `**Example 1.** Who links research institutes and farmers? *Answer:* the **extension worker**.

**Example 2.** Showing farmers how to apply fertiliser step by step is a **method demonstration**.

**Example 3.** In what year was Operation Feed the Nation launched? *Answer:* **1976**.`,
        },
        questions: [
          ["E", "The service that takes new farming ideas from research to farmers is", "agricultural extension", "agricultural marketing", "land tenure", "farm inventory", "It educates farmers."],
          ["E", "The link between research institutes and farmers is the", "extension worker", "middleman", "money lender", "retailer", "He carries new ideas to farmers."],
          ["E", "Radio and television are examples of", "mass methods of extension", "individual methods", "group methods", "farm records", "They reach many farmers at once."],
          ["M", "Visiting a farmer on his farm to advise him is", "an individual method", "a mass method", "a group method", "a result demonstration", "One farmer is reached at a time."],
          ["M", "Showing farmers step by step how to carry out a practice is a", "method demonstration", "result demonstration", "farm visit", "mass campaign", "The method is taught."],
          ["M", "Operation Feed the Nation was launched in", "1976", "1960", "1986", "1999", "It encouraged everyone to farm."],
          ["M", "A role of government in agriculture is", "providing loans and subsidies", "destroying farm roads", "banning research", "increasing pests", "Government supports farmers."],
          ["H", "Showing farmers the better yield obtained from an improved practice is a", "result demonstration", "method demonstration", "office call", "leaflet", "The result is displayed."],
          ["H", "The government bodies responsible for dams and irrigation in Nigeria are the", "River Basin Development Authorities", "Marketing Boards", "Customs Service", "Forest Guards", "They develop water resources."],
          ["H", "A major problem of extension in Nigeria is", "too few extension workers", "too many research institutes", "excess funding", "too many good roads", "One agent serves too many farmers."],
        ],
      },
    ],
  },
];
