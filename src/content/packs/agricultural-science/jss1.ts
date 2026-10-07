import type { TermPlan } from "../types";

/** JSS1 Agricultural Science — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and importance of agriculture",
        subtopics: ["Meaning of agriculture", "Importance to the individual and family", "Importance to the nation", "Problems of agriculture in Nigeria"],
        objectives: ["Define agriculture", "State the importance of agriculture to individuals and families", "State the importance of agriculture to the nation", "Identify problems facing agriculture in Nigeria"],
        lesson: {
          title: "Why Agriculture Matters",
          summary: "Define agriculture and explain its importance.",
          minutes: 40,
          notes: `## Meaning
**Agriculture** is the **art and science of cultivating crops and rearing animals** for human use. The word comes from two Latin words: **ager** (field) and **cultura** (cultivation). It also includes processing, storage and marketing of farm produce.

## Importance to the individual and family
- provides **food** (yam, rice, maize, meat, eggs, milk, fish)
- provides **income** from the sale of produce
- provides **employment** for farmers, processors and traders
- provides materials for **shelter** (timber, thatch, bamboo)
- provides **clothing** materials (cotton, wool, hides and skins)

## Importance to the nation
- **food security** for the population
- **raw materials** for industries: cocoa (beverages), cotton (textiles), rubber (tyres), oil palm (soap and vegetable oil), sugar cane (sugar), timber (furniture)
- **foreign exchange** from exports such as cocoa, sesame, cashew, rubber
- **employment** for a large part of the labour force
- **revenue** for government through taxes and duties
- market for industrial goods (fertilisers, tractors, chemicals)
- development of rural areas

## Problems of agriculture in Nigeria
- use of **crude tools** (hoes and cutlasses)
- poor **storage and processing** facilities, causing wastage
- poor **roads** and transport
- inadequate **finance** and credit for farmers
- **pests and diseases**
- **land tenure** problems (land fragmentation)
- unpredictable **weather** and climate change
- **insecurity** and farmer–herder conflicts
- shortage of **extension workers**
- young people leaving farming for cities (**rural–urban migration**)

## Possible solutions
loans and subsidies; mechanisation; good roads; storage facilities; improved seeds; extension services; agricultural education.`,
          examples: `**Example 1.** From which language does the word agriculture come? *Answer:* **Latin** — *ager* (field) and *cultura* (cultivation).

**Example 2.** Name one industry and the crop that supplies its raw material. *Answer:* the **textile** industry uses **cotton**.

**Example 3.** Give one problem of agriculture in Nigeria. *Answer:* **poor storage facilities** (or crude tools, poor roads).`,
        },
        questions: [
          ["E", "The art and science of cultivating crops and rearing animals is", "agriculture", "geography", "commerce", "mining", "It produces food and raw materials."],
          ["E", "The Latin word 'ager' means", "field", "water", "animal", "seed", "Ager refers to a field."],
          ["E", "Which of these is a food obtained from farm animals?", "milk", "cotton", "rubber", "timber", "Milk comes from cattle and goats."],
          ["M", "The crop that supplies raw material for the textile industry is", "cotton", "cocoa", "rubber", "oil palm", "Cotton lint is spun into cloth."],
          ["M", "The crop that supplies raw material for tyre manufacturing is", "rubber", "cotton", "groundnut", "cassava", "Latex from rubber trees is used."],
          ["M", "Money earned by a country from exporting cocoa is called", "foreign exchange", "subsidy", "land rent", "capital flight", "Exports earn foreign currency."],
          ["M", "The movement of young people from villages to cities is", "rural–urban migration", "land tenure", "crop rotation", "mechanisation", "It reduces farm labour."],
          ["H", "Which problem leads to large losses of harvested produce in Nigeria?", "poor storage and processing facilities", "too many tractors", "excess extension workers", "too many good roads", "Produce spoils before it is sold."],
          ["H", "Agriculture provides a market for industrial goods because farmers buy", "fertilisers and machinery", "cocoa beans", "raw cotton", "fresh milk", "Industries sell inputs to farmers."],
          ["H", "The Latin word 'cultura' means", "cultivation", "harvest", "market", "animal rearing", "It refers to tilling or cultivating."],
        ],
      },
      {
        week: 2,
        title: "Branches of agriculture",
        subtopics: ["Crop production", "Animal production", "Soil science and agricultural engineering", "Other branches"],
        objectives: ["List the branches of agriculture", "Describe crop and animal production", "Explain soil science and agricultural engineering", "Describe other branches such as fisheries, forestry and economics"],
        lesson: {
          title: "Areas of Study in Agriculture",
          summary: "Identify the branches of agriculture and what each studies.",
          minutes: 40,
          notes: `## Branches of agriculture
| Branch | What it studies |
|---|---|
| **crop production (agronomy)** | growing field crops such as maize, rice, yam and cassava |
| **horticulture** | growing **fruits, vegetables and ornamental plants (flowers)** |
| **animal production (animal husbandry)** | rearing farm animals such as cattle, sheep, goats, pigs and poultry |
| **soil science** | soil formation, properties, fertility and conservation |
| **agricultural engineering** | farm machines, tools, irrigation, buildings and processing equipment |
| **fisheries (fish farming / aquaculture)** | rearing and catching fish and other aquatic animals |
| **forestry** | growing and managing forest trees for timber and other products |
| **agricultural economics** | farm business, costs, prices and marketing of produce |
| **agricultural extension** | teaching farmers new and improved methods |
| **veterinary medicine** | health and treatment of animals |
| **apiculture** | bee-keeping for honey and wax |
| **snailery (heliculture)** | rearing snails |

## Divisions of horticulture
- **pomology** — fruit growing
- **olericulture** — vegetable growing
- **floriculture** — flower growing

## Other terms
- **poultry** — rearing birds such as chickens, turkeys and ducks
- **piggery** — rearing pigs
- **silviculture** — planting and tending forest trees
- **sericulture** — rearing silkworms

## Why branches matter
specialisation allows experts to solve particular problems, and gives students many **career choices**.`,
          examples: `**Example 1.** Which branch deals with bee-keeping? *Answer:* **apiculture**.

**Example 2.** Which branch teaches farmers improved methods? *Answer:* **agricultural extension**.

**Example 3.** What does horticulture study? *Answer:* **fruits, vegetables and ornamental plants**.`,
        },
        questions: [
          ["E", "The branch of agriculture that deals with rearing farm animals is", "animal production", "agronomy", "forestry", "soil science", "It is also called animal husbandry."],
          ["E", "The rearing of fish is called", "fisheries (aquaculture)", "apiculture", "forestry", "horticulture", "Fish are raised in ponds."],
          ["E", "Bee-keeping is known as", "apiculture", "sericulture", "snailery", "pomology", "Bees produce honey and wax."],
          ["M", "The branch that deals with fruits, vegetables and flowers is", "horticulture", "agronomy", "forestry", "fisheries", "It covers garden crops."],
          ["M", "The branch that deals with farm machines and irrigation is", "agricultural engineering", "agricultural economics", "soil science", "extension", "Engineers design farm equipment."],
          ["M", "The branch that teaches farmers new farming methods is", "agricultural extension", "veterinary medicine", "forestry", "apiculture", "Extension workers advise farmers."],
          ["M", "The branch concerned with the marketing and pricing of farm produce is", "agricultural economics", "agronomy", "horticulture", "fisheries", "It deals with the farm business."],
          ["H", "The growing of vegetables is specifically called", "olericulture", "pomology", "floriculture", "silviculture", "It is a division of horticulture."],
          ["H", "The growing of fruits is specifically called", "pomology", "olericulture", "floriculture", "apiculture", "Pomology deals with fruit crops."],
          ["H", "The planting and tending of forest trees is", "silviculture", "sericulture", "heliculture", "olericulture", "It is a part of forestry."],
        ],
      },
      {
        week: 3,
        title: "Forms of agriculture",
        subtopics: ["Subsistence agriculture", "Commercial agriculture", "Farming systems", "Comparing subsistence and commercial farming"],
        objectives: ["Describe subsistence agriculture", "Describe commercial agriculture", "Identify common farming systems", "Compare subsistence and commercial agriculture"],
        lesson: {
          title: "Farming for the Family and for the Market",
          summary: "Compare subsistence and commercial agriculture and farming systems.",
          minutes: 40,
          notes: `## Subsistence agriculture
farming in which the farmer produces food mainly **to feed the family**, with little or nothing left to sell.
Features: **small** farms; **crude tools** (hoe, cutlass); **family labour**; low capital; low yields; mixed cropping; little use of fertilisers and improved seeds.

## Commercial agriculture
farming on a **large scale** mainly **for sale** and profit.
Features: **large** farms; **machines** (tractors, harvesters); **hired and skilled labour**; high capital; improved seeds, fertilisers and chemicals; high yields; produce is processed and marketed; proper records are kept.

## Comparison
| Feature | Subsistence | Commercial |
|---|---|---|
| purpose | family consumption | sale and profit |
| farm size | small | large |
| tools | simple | machines |
| labour | family | hired, skilled |
| capital | low | high |
| yield | low | high |

## Farming systems
| System | Description |
|---|---|
| **shifting cultivation** | farming a plot for a few years, then moving to a new plot when the soil is exhausted |
| **bush fallowing** | leaving land to rest for some years to regain fertility, then returning to it |
| **mono-cropping (sole cropping)** | growing one type of crop on a piece of land at a time |
| **mixed cropping** | growing two or more crops on the same land at the same time |
| **crop rotation** | growing different crops in a planned sequence on the same land |
| **mixed farming** | growing crops **and** rearing animals on the same farm |
| **pastoral farming** | rearing animals that graze; **nomadic herding** involves moving with animals in search of pasture and water |
| **monoculture** | growing the same crop on the same land year after year |`,
          examples: `**Example 1.** A farmer grows yam and cassava only for his family. What form of agriculture is this? *Answer:* **subsistence agriculture**.

**Example 2.** Growing crops and rearing animals on the same farm is **mixed farming**.

**Example 3.** Give one feature of commercial agriculture. *Answer:* **use of machines** (or large farms, high capital).`,
        },
        questions: [
          ["E", "Farming mainly to feed the farmer's family is", "subsistence agriculture", "commercial agriculture", "plantation farming", "ranching", "Little is left to sell."],
          ["E", "Farming on a large scale mainly for sale is", "commercial agriculture", "subsistence agriculture", "shifting cultivation", "bush fallowing", "The aim is profit."],
          ["E", "Growing crops and rearing animals on the same farm is", "mixed farming", "mixed cropping", "mono-cropping", "crop rotation", "Crops and livestock are combined."],
          ["M", "Which is a feature of subsistence agriculture?", "use of simple tools", "use of tractors", "large farm size", "hired skilled labour", "Hoes and cutlasses are used."],
          ["M", "Growing two or more crops on the same land at the same time is", "mixed cropping", "mixed farming", "monoculture", "bush fallowing", "Several crops share one plot."],
          ["M", "Leaving land to rest for some years to regain fertility is", "bush fallowing", "crop rotation", "mono-cropping", "ranching", "The land lies fallow."],
          ["M", "Moving with animals in search of pasture and water is", "nomadic herding", "mixed farming", "crop rotation", "sole cropping", "Herders migrate with livestock."],
          ["H", "Growing different crops in a planned sequence on the same land is", "crop rotation", "shifting cultivation", "mixed cropping", "monoculture", "Crops follow one another in order."],
          ["H", "Compared with subsistence farming, commercial farming requires", "more capital", "less capital", "no labour", "smaller land", "Machines and inputs are costly."],
          ["H", "Farming a plot for a few years and then abandoning it for a new plot is", "shifting cultivation", "crop rotation", "mixed farming", "mono-cropping", "The farmer shifts to fresh land."],
        ],
      },
      {
        week: 4,
        title: "Classification of crops",
        subtopics: ["Classification by life cycle", "Classification by use", "Classification by form", "Examples of Nigerian crops"],
        objectives: ["Classify crops by life cycle", "Classify crops by their uses", "Distinguish monocotyledons from dicotyledons", "Give Nigerian examples of each class of crop"],
        lesson: {
          title: "Grouping Crop Plants",
          summary: "Classify crops by life cycle, use and form.",
          minutes: 40,
          notes: `## By life cycle
| Class | Meaning | Examples |
|---|---|---|
| **annual crops** | complete their life cycle within **one year** | maize, rice, cowpea, groundnut, yam, tomato |
| **biennial crops** | take **two years** | onion, carrot, cabbage, ginger |
| **perennial crops** | live for **more than two years** | cocoa, oil palm, rubber, mango, citrus, kola |

## By use
| Class | Examples |
|---|---|
| **cereals (grains)** | maize, rice, millet, sorghum (guinea corn), wheat |
| **legumes (pulses)** | cowpea (beans), groundnut, soya bean, bambara nut |
| **root and tuber crops** | yam, cassava, cocoyam, sweet potato, Irish potato |
| **vegetables** | tomato, okra, pepper, amaranthus (green), fluted pumpkin (ugu), onion |
| **fruits** | orange, mango, pawpaw, pineapple, banana, guava |
| **oil crops** | oil palm, groundnut, coconut, sesame (benniseed), shea |
| **beverage crops** | cocoa, coffee, tea, kola |
| **fibre crops** | cotton, jute, kenaf, sisal |
| **latex crops** | rubber |
| **spices** | ginger, pepper, garlic, curry |
| **sugar crops** | sugar cane |
| **forage crops** | elephant grass, guinea grass, centrosema |

## By form (number of seed leaves)
- **monocotyledons** — **one** seed leaf; narrow leaves with **parallel veins**; **fibrous roots**: maize, rice, millet, oil palm, grasses
- **dicotyledons** — **two** seed leaves; broad leaves with **net veins**; **tap roots**: cowpea, groundnut, mango, cocoa, tomato

## Note
some crops belong to more than one class: groundnut is both a **legume** and an **oil crop**.`,
          examples: `**Example 1.** Is cocoa an annual or perennial crop? *Answer:* **perennial**.

**Example 2.** Give two examples of cereals. *Answer:* **maize** and **rice**.

**Example 3.** Is maize a monocotyledon or a dicotyledon? *Answer:* a **monocotyledon** (one seed leaf, parallel veins).`,
        },
        questions: [
          ["E", "Crops that complete their life cycle within one year are", "annual crops", "biennial crops", "perennial crops", "tree crops", "Maize and cowpea are examples."],
          ["E", "Maize and rice belong to the group called", "cereals", "legumes", "tubers", "fibres", "They are grain crops."],
          ["E", "Yam and cassava are", "root and tuber crops", "cereals", "beverage crops", "latex crops", "They store food underground."],
          ["M", "Cocoa and oil palm are examples of", "perennial crops", "annual crops", "biennial crops", "cereals", "They live for many years."],
          ["M", "Cowpea and groundnut are", "legumes", "cereals", "fibre crops", "spices", "They bear seeds in pods."],
          ["M", "Cotton and jute are", "fibre crops", "oil crops", "beverage crops", "sugar crops", "Their fibres make cloth and sacks."],
          ["M", "Cocoa, coffee and tea are", "beverage crops", "latex crops", "cereals", "forage crops", "They are used to make drinks."],
          ["H", "A plant with one seed leaf, parallel veins and fibrous roots is a", "monocotyledon", "dicotyledon", "legume", "tuber", "Maize is an example."],
          ["H", "Onion and carrot, which take two years to complete their life cycle, are", "biennial crops", "annual crops", "perennial crops", "forage crops", "Bi means two. Answer: biennial crops."],
          ["H", "Groundnut can be classified as both", "a legume and an oil crop", "a cereal and a fibre crop", "a tuber and a spice", "a latex and a beverage crop", "It has pods and yields oil."],
        ],
      },
      {
        week: 5,
        title: "Simple farm tools",
        subtopics: ["Types of simple farm tools", "Uses of simple farm tools", "Maintenance of farm tools", "Safety with farm tools"],
        objectives: ["Identify simple farm tools", "State the uses of each tool", "Describe the maintenance of farm tools", "Apply safety rules when using farm tools"],
        lesson: {
          title: "Tools for the Small Farmer",
          summary: "Identify, use and maintain simple farm tools.",
          minutes: 40,
          notes: `## Simple farm tools and their uses
| Tool | Uses |
|---|---|
| **cutlass (machete)** | clearing bush, cutting, harvesting, light digging |
| **hoe** | tilling, making ridges and mounds, weeding |
| **spade** | digging, turning soil, lifting soil, mixing manure |
| **shovel** | lifting and moving soil, sand, manure |
| **garden fork** | loosening soil, turning manure and compost |
| **hand fork** | loosening soil around seedlings, light weeding |
| **hand trowel** | transplanting seedlings, applying manure in small quantities |
| **rake** | levelling soil, gathering stones and rubbish |
| **pickaxe / mattock** | breaking hard soil, digging out stumps and roots |
| **axe** | felling trees, cutting logs |
| **sickle** | harvesting rice, wheat and grasses |
| **watering can** | watering seedlings and nursery beds |
| **wheelbarrow** | carrying loads such as manure, tools and produce |
| **head pan** | carrying soil, manure and harvested crops |
| **shears / secateurs** | trimming hedges; pruning branches |
| **dibber** | making holes for planting seeds and seedlings |
| **go-to-hell (harvesting hook)** | harvesting cocoa pods and fruits from tall trees |
| **file / sharpening stone** | sharpening blades |

## Maintenance of farm tools
- **clean** tools after use (wash off soil and dry)
- **oil or grease** metal parts to prevent **rust**
- **sharpen** blunt edges regularly
- replace broken or loose **handles**
- **store** in a cool, dry tool shed
- paint wooden handles or keep them dry to prevent rot and termites

## Safety
use the right tool for the job; do not leave tools lying on the ground; carry sharp tools with the edge pointing down; wear boots and gloves; keep tools away from children.`,
          examples: `**Example 1.** Which tool is used for transplanting seedlings? *Answer:* the **hand trowel**.

**Example 2.** Why are metal parts of tools oiled? *Answer:* To **prevent rusting**.

**Example 3.** Which tool is used for harvesting rice? *Answer:* the **sickle**.`,
        },
        questions: [
          ["E", "The tool used mainly for clearing bush is the", "cutlass", "rake", "hand trowel", "watering can", "Its blade cuts vegetation."],
          ["E", "The tool used for making ridges and weeding is the", "hoe", "axe", "sickle", "shears", "Hoes till and weed the soil."],
          ["E", "The tool used for carrying loads on the farm is the", "wheelbarrow", "dibber", "garden fork", "file", "It has one wheel and two handles."],
          ["M", "The tool used for transplanting seedlings is the", "hand trowel", "pickaxe", "axe", "spade", "It lifts seedlings with soil."],
          ["M", "The tool used for levelling soil and gathering rubbish is the", "rake", "hoe", "sickle", "mattock", "Its teeth gather debris."],
          ["M", "The tool used for harvesting rice is the", "sickle", "spade", "shovel", "watering can", "Its curved blade cuts stalks."],
          ["M", "Metal parts of farm tools are oiled to prevent", "rusting", "sharpening", "breaking of handles", "termite attack", "Oil keeps out moisture and air."],
          ["H", "The tool used for breaking hard soil and digging out stumps is the", "pickaxe", "hand fork", "rake", "dibber", "It has a pointed heavy head."],
          ["H", "The tool used for pruning branches of trees and shrubs is", "secateurs", "a shovel", "a head pan", "a sickle", "They cut small branches cleanly."],
          ["H", "Cocoa pods on tall trees are harvested with a", "go-to-hell (harvesting hook)", "hand trowel", "garden fork", "rake", "It is a hooked knife on a long pole."],
        ],
      },
      {
        week: 6,
        title: "Land and its uses",
        subtopics: ["Meaning of land", "Agricultural uses of land", "Non-agricultural uses of land", "Factors affecting land availability"],
        objectives: ["Define land", "State agricultural uses of land", "State non-agricultural uses of land", "Explain factors affecting the availability of land for agriculture"],
        lesson: {
          title: "Land as a Farm Resource",
          summary: "Explain the uses of land and factors affecting its availability.",
          minutes: 40,
          notes: `## Meaning
**Land** is the **solid part of the earth's surface** on which farming and other human activities take place. In agriculture it includes the **soil, water, forests and minerals** on it. Land is a **free gift of nature**; its supply is **fixed**.

## Agricultural uses of land
- **crop production** — arable crops and plantations
- **livestock production** — grazing land, ranches, poultry houses
- **fisheries** — fish ponds
- **forestry** — forest reserves and timber
- **wildlife conservation** — game reserves and national parks

## Non-agricultural uses of land
- **housing** and residential estates
- **industries** and factories
- **roads, railways and airports**
- **schools, hospitals, markets**, places of worship
- **mining** of minerals
- **recreation** — stadiums, parks
- **dams** and power stations

## Factors affecting land availability for agriculture
| Factor | Effect |
|---|---|
| **population pressure** | more people need land for housing, reducing farmland |
| **land tenure system** | ownership rules (communal, inheritance) may fragment land or deny access |
| **topography** | steep, hilly or rocky land is hard to farm |
| **soil type and fertility** | infertile, sandy or waterlogged soils limit farming |
| **climate** | low rainfall (deserts) limits crops |
| **urbanisation and industrialisation** | towns and factories take over farmland |
| **cultural and religious beliefs** | sacred forests and taboos keep land unused |
| **pests and diseases** | tsetse fly limits cattle rearing in some forest areas |
| **erosion and desert encroachment** | destroy farmland |

## Land tenure
the system of **land ownership and use**: communal ownership, inheritance, leasehold, rent, gift, purchase (freehold). Under the **Land Use Act (1978)**, land in each state is held in trust by the **Governor**.`,
          examples: `**Example 1.** Give one agricultural use of land. *Answer:* **crop production** (or livestock, forestry, fisheries).

**Example 2.** How does population pressure affect farmland? *Answer:* More land is used for **housing**, leaving less for farming.

**Example 3.** Who holds land in trust in each state under the Land Use Act? *Answer:* the **Governor**.`,
        },
        questions: [
          ["E", "The solid part of the earth's surface used for farming is", "land", "water", "air", "labour", "It is a gift of nature."],
          ["E", "Which is an agricultural use of land?", "crop production", "building factories", "mining", "road construction", "Crops are grown on land."],
          ["E", "Which is a non-agricultural use of land?", "housing", "fish ponds", "grazing", "forestry", "Houses take up land."],
          ["M", "The supply of land is said to be", "fixed", "unlimited", "increasing yearly", "man-made", "Nature provides a fixed amount."],
          ["M", "The system of land ownership and use is called", "land tenure", "land rotation", "land fallow", "land survey", "It decides who may use land."],
          ["M", "Steep and rocky land is difficult to farm because of its", "topography", "population", "tenure", "religion", "The shape of the land matters."],
          ["M", "The growth of towns and cities onto farmland is", "urbanisation", "irrigation", "fallowing", "afforestation", "Cities take over farmland."],
          ["H", "Under the Land Use Act of 1978, land in each state is held in trust by the", "Governor", "President", "traditional ruler only", "local farmer", "The Governor allocates land."],
          ["H", "Cattle rearing is limited in some forest areas mainly by the", "tsetse fly", "housefly", "mosquito", "grasshopper", "It transmits trypanosomiasis."],
          ["H", "Sharing family land among many children over generations leads to", "land fragmentation", "land consolidation", "mechanisation", "ranching", "Plots become too small."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Soil formation and types",
        subtopics: ["Meaning of soil", "Factors and processes of soil formation", "Types of soil", "Properties of soil types"],
        objectives: ["Define soil", "Explain how soil is formed", "Identify sandy, clay and loamy soils", "Compare the properties of the soil types"],
        lesson: {
          title: "How Soil Is Made",
          summary: "Explain soil formation and compare soil types.",
          minutes: 40,
          notes: `## Meaning
**Soil** is the **loose top layer of the earth's crust** in which plants grow. It is formed from the breakdown of rocks and the decay of plant and animal remains.

## Soil formation (weathering)
**Weathering** is the breaking down of rocks into small particles.
- **physical weathering** — by **temperature changes**, wind, running water, ice and pressure
- **chemical weathering** — by reactions of rock minerals with **water, oxygen and carbon dioxide** (hydrolysis, oxidation, carbonation, solution)
- **biological weathering** — by **plant roots**, burrowing animals, micro-organisms and human activities

## Factors of soil formation
**parent material** (the rock), **climate** (rainfall and temperature), **living organisms**, **topography** (slope) and **time**.

## Types of soil
| Property | Sandy soil | Clay soil | Loamy soil |
|---|---|---|---|
| particle size | **large**, coarse | **very fine** | mixture of sand, silt and clay with humus |
| feel | gritty | sticky when wet, hard when dry | soft, crumbly |
| air spaces | large, well aerated | small, poorly aerated | moderate |
| water holding | **poor** — drains quickly | **high** — easily waterlogged | **good** — holds enough water and drains well |
| fertility | low; nutrients leach | rich but hard to work | **most fertile** |
| ease of working | easy (light soil) | difficult (heavy soil) | easy |
| crops | groundnut, cassava, millet | rice, sugar cane | most crops |
**Loam** is the **best soil for farming**. **Silt** particles are finer than sand but coarser than clay.

## Improving soils
- sandy soil: add **organic manure** and compost; mulch
- clay soil: add organic matter and sand; drain; apply lime if acidic`,
          examples: `**Example 1.** Which soil is best for most crops? *Answer:* **loamy soil**.

**Example 2.** Which soil drains water fastest? *Answer:* **sandy soil**.

**Example 3.** What is weathering? *Answer:* The **breaking down of rocks** into small particles.`,
        },
        questions: [
          ["E", "The loose top layer of the earth's crust in which plants grow is", "soil", "rock", "water", "air", "Plants anchor their roots in it."],
          ["E", "The best soil for growing most crops is", "loamy soil", "sandy soil", "clay soil", "gravel", "It is fertile and drains well."],
          ["E", "The breaking down of rocks into small particles is", "weathering", "leaching", "erosion only", "irrigation", "Rocks break down to form soil."],
          ["M", "The soil with the largest particles is", "sandy soil", "clay soil", "loamy soil", "silt", "Sand feels gritty."],
          ["M", "The soil that is sticky when wet and hard when dry is", "clay soil", "sandy soil", "loamy soil", "humus", "Its particles are very fine."],
          ["M", "Weathering caused by plant roots and burrowing animals is", "biological weathering", "chemical weathering", "physical weathering", "leaching", "Living things break the rock."],
          ["M", "The rock from which a soil is formed is its", "parent material", "humus", "topography", "climate", "Soil inherits minerals from it."],
          ["H", "Sandy soil is poor in nutrients mainly because", "water drains quickly and washes nutrients away", "it holds too much water", "it has very fine particles", "it is sticky", "Nutrients are leached downwards."],
          ["H", "Rice grows well on clay soil because clay", "holds a lot of water", "drains very fast", "has large air spaces", "is always sandy", "Swamp rice needs standing water."],
          ["H", "Sandy soil can be improved by adding", "organic manure", "more sand", "stones", "salt", "Manure binds particles and holds water."],
        ],
      },
      {
        week: 2,
        title: "Soil composition and profile",
        subtopics: ["Components of soil", "Importance of each component", "Soil profile", "Simple soil experiments"],
        objectives: ["List the components of soil", "Explain the importance of each soil component", "Describe the layers of a soil profile", "Carry out simple experiments on soil"],
        lesson: {
          title: "What Soil Contains",
          summary: "Describe the components of soil and the soil profile.",
          minutes: 40,
          notes: `## Components of soil
| Component | Approximate share by volume | Importance |
|---|---|---|
| **mineral (inorganic) matter** | about 45% | sand, silt and clay from rocks; supplies mineral nutrients |
| **organic matter (humus)** | about 5% | decayed plant and animal remains; improves fertility, structure and water holding; gives a dark colour |
| **soil water** | about 25% | dissolves nutrients so roots can absorb them; needed for germination |
| **soil air** | about 25% | supplies **oxygen** for roots and soil organisms |
| **living organisms** | — | earthworms, termites, bacteria and fungi decompose organic matter and aerate the soil |

## The soil profile
A **soil profile** is a **vertical section** through the soil showing its layers (**horizons**).
- **A horizon (topsoil)** — dark, rich in humus and living organisms; most roots are found here; most important for crops
- **B horizon (subsoil)** — lighter, more compact; contains materials washed down from the topsoil; little humus
- **C horizon** — weathered parent rock, partly broken
- **bedrock (D or R horizon)** — solid unweathered rock

## Simple experiments
1. **Sedimentation** — shake soil with water in a jar and allow it to settle: **gravel and sand settle first**, then **silt**, then **clay**; **humus floats** on top.
2. **Air in soil** — drop a lump of dry soil into water: **bubbles** show that air is present.
3. **Water in soil** — heat fresh soil gently in a test tube: water droplets form on the cooler parts.
4. **Organic matter** — heat dry soil strongly: it smokes and loses mass as humus burns.
5. **Drainage** — pour equal water through sand, clay and loam in funnels: sand drains fastest, clay slowest.`,
          examples: `**Example 1.** Which soil layer is richest in humus? *Answer:* the **topsoil (A horizon)**.

**Example 2.** In the sedimentation experiment, which particles settle last? *Answer:* **clay** (humus floats).

**Example 3.** Why is soil air important? *Answer:* It supplies **oxygen** for roots and soil organisms.`,
        },
        questions: [
          ["E", "Decayed plant and animal remains in the soil are called", "humus", "silt", "gravel", "bedrock", "Humus makes soil dark and fertile."],
          ["E", "The top layer of the soil profile is the", "topsoil", "subsoil", "bedrock", "parent rock", "It is the A horizon."],
          ["E", "Soil air is important because it supplies", "oxygen for roots", "sand for plants", "light for leaves", "humus for worms", "Roots respire using oxygen."],
          ["M", "A vertical section through the soil showing its layers is a", "soil profile", "soil texture", "soil map", "soil sample", "It shows the horizons."],
          ["M", "The layer beneath the topsoil is the", "subsoil", "bedrock", "humus layer", "surface litter", "It is the B horizon."],
          ["M", "When soil is shaken with water and left to settle, the first to settle is", "gravel and sand", "clay", "humus", "silt", "Heavy particles sink first."],
          ["M", "Bubbles seen when a lump of dry soil is dropped into water show the presence of", "air", "humus", "clay", "minerals", "Air is displaced by water."],
          ["H", "Earthworms improve the soil mainly by", "aerating it and mixing organic matter", "eating crop roots", "removing all water", "hardening the soil", "Their burrows let in air and water."],
          ["H", "Most crop roots are found in the topsoil because it", "is rich in humus and nutrients", "is solid rock", "contains no water", "has no air", "Nutrients are concentrated there."],
          ["H", "Heating dry soil strongly until it smokes shows that soil contains", "organic matter", "only sand", "only water", "bedrock", "Humus burns away."],
        ],
      },
      {
        week: 3,
        title: "Farm animals and their classification",
        subtopics: ["Meaning of farm animals", "Classification by habitat", "Classification by size and use", "Products from farm animals"],
        objectives: ["Define farm animals", "Classify farm animals by habitat", "Classify farm animals by size and use", "List products obtained from farm animals"],
        lesson: {
          title: "Animals Kept on Farms",
          summary: "Classify farm animals and list their products.",
          minutes: 40,
          notes: `## Meaning
**Farm animals (livestock)** are animals **reared by people** for food, income, work and other purposes.

## By habitat
- **terrestrial (land) animals** — cattle, sheep, goats, pigs, rabbits, poultry
- **aquatic (water) animals** — fish (tilapia, catfish), shrimps, crabs

## By size
- **large animals** — cattle, horses, camels, donkeys
- **small animals** — sheep, goats, pigs, rabbits, poultry, snails

## By use
| Group | Examples |
|---|---|
| **work (draught) animals** | bulls (oxen), donkeys, horses, camels — ploughing, carrying loads, transport |
| **dairy animals** | dairy cattle, goats — milk |
| **meat animals** | beef cattle, sheep, goats, pigs, rabbits, broilers |
| **egg producers** | layers (hens), ducks |
| **guard animals** | dogs |
| **pets** | dogs, cats, rabbits |

## Other groupings
- **poultry** — domestic birds: chickens, turkeys, ducks, guinea fowl, geese
- **micro-livestock** — snails, grasscutters, rabbits, bees
- **mammals** suckle their young; **birds** lay eggs

## Products from farm animals
| Animal | Products |
|---|---|
| cattle | **beef**, milk, hides, horns, bones, manure |
| sheep | **mutton**, wool, skin, manure |
| goat | **chevon**, milk, skin |
| pig | **pork**, bacon, lard, bristles |
| poultry | meat, **eggs**, feathers, droppings (manure) |
| rabbit | meat, fur |
| fish | meat, fish oil, fish meal |
| bee | honey, beeswax |

## Importance
food rich in **protein**; income; raw materials (hides for leather); **farm power**; **manure**; employment; social uses (festivals, bride price).`,
          examples: `**Example 1.** What is the meat of a goat called? *Answer:* **chevon**.

**Example 2.** Name two work animals. *Answer:* **bulls (oxen)** and **donkeys**.

**Example 3.** Give two products from poultry. *Answer:* **eggs** and **meat**.`,
        },
        questions: [
          ["E", "Animals reared by people for food and income are", "farm animals", "wild animals", "pests", "predators", "They are also called livestock."],
          ["E", "The meat of cattle is called", "beef", "pork", "mutton", "chevon", "Beef comes from cattle."],
          ["E", "Domestic birds such as chickens and turkeys are called", "poultry", "ruminants", "rodents", "pests", "Poultry are kept for eggs and meat."],
          ["M", "The meat of a pig is called", "pork", "beef", "mutton", "venison", "Pork comes from pigs."],
          ["M", "The meat of a sheep is called", "mutton", "chevon", "pork", "beef", "Mutton comes from sheep."],
          ["M", "Animals used for ploughing and carrying loads are", "work animals", "dairy animals", "pets", "poultry", "They provide farm power."],
          ["M", "Fish and shrimps are classified by habitat as", "aquatic animals", "terrestrial animals", "work animals", "poultry", "They live in water."],
          ["H", "The meat of a goat is called", "chevon", "mutton", "beef", "pork", "Chevon is goat meat."],
          ["H", "Hides and skins from cattle and goats are raw materials for the", "leather industry", "textile industry only", "tyre industry", "sugar industry", "Leather makes shoes and bags."],
          ["H", "Snails, grasscutters and rabbits are grouped as", "micro-livestock", "large ruminants", "draught animals", "aquatic animals", "They are small farm animals."],
        ],
      },
      {
        week: 4,
        title: "Ruminant and non-ruminant animals",
        subtopics: ["Meaning of ruminants", "The ruminant stomach", "Non-ruminant animals", "Feeding habits of farm animals"],
        objectives: ["Define ruminant animals", "Name the four compartments of the ruminant stomach", "Describe non-ruminant animals", "Compare the feeding of ruminants and non-ruminants"],
        lesson: {
          title: "Animals That Chew the Cud",
          summary: "Distinguish ruminants from non-ruminants by their stomachs and feeding.",
          minutes: 40,
          notes: `## Ruminants
**Ruminants** are animals that **chew the cud** and have a **complex stomach with four compartments**. Examples: **cattle, sheep and goats**.
They eat mainly **grass and other roughage**, swallow it quickly and later bring it back to the mouth for thorough chewing — **rumination**.

## The four stomach compartments
| Compartment | Function |
|---|---|
| **rumen** | the **largest** chamber; food is stored and **fermented by bacteria** that digest cellulose |
| **reticulum (honeycomb)** | forms food into **cud**, which is returned to the mouth; traps foreign objects |
| **omasum (many plies)** | absorbs **water**; grinds food further |
| **abomasum** | the **true stomach**; digestive enzymes act on the food |
Path of food: mouth → rumen → reticulum → mouth (cud chewed) → omasum → abomasum → small intestine.

## Non-ruminants (monogastric animals)
have a **simple stomach with one compartment** and do not chew the cud. Examples: **pigs, poultry, rabbits, horses**.
- they cannot digest much cellulose, so they need **concentrate feeds** (grains, cakes)
- **poultry** have a **crop** (stores food) and a **gizzard** (grinds food with grit) because they have **no teeth**
- **rabbits and horses** have a large **caecum** where some fibre is digested

## Comparison
| Feature | Ruminants | Non-ruminants |
|---|---|---|
| stomach | four compartments | one compartment |
| chewing the cud | yes | no |
| main feed | grass, hay, silage | concentrates, grains |
| digestion of cellulose | good (by rumen microbes) | poor |
| examples | cattle, sheep, goats | pigs, poultry, rabbits |

## Feeding terms
- **herbivores** eat plants (cattle, goats, rabbits)
- **omnivores** eat plants and animals (pigs, poultry)
- **carnivores** eat flesh (dogs, cats)`,
          examples: `**Example 1.** Name the four stomach compartments of a ruminant. *Answer:* **rumen, reticulum, omasum, abomasum**.

**Example 2.** Is a pig a ruminant? *Answer:* **No** — it has a simple one-compartment stomach.

**Example 3.** Which organ grinds food in poultry? *Answer:* the **gizzard**.`,
        },
        questions: [
          ["E", "Animals that chew the cud are called", "ruminants", "non-ruminants", "carnivores", "poultry", "They have four stomach compartments."],
          ["E", "Which of these is a ruminant?", "goat", "pig", "chicken", "rabbit", "Goats chew the cud."],
          ["E", "Which of these is a non-ruminant?", "pig", "cattle", "sheep", "goat", "Pigs have a simple stomach."],
          ["M", "The largest compartment of the ruminant stomach is the", "rumen", "omasum", "abomasum", "reticulum", "Food is fermented there."],
          ["M", "The true stomach of a ruminant is the", "abomasum", "rumen", "reticulum", "omasum", "Digestive enzymes act there."],
          ["M", "The organ that grinds food in poultry is the", "gizzard", "crop", "rumen", "caecum", "Grit helps grinding."],
          ["M", "Animals that feed on both plants and animals are", "omnivores", "herbivores", "carnivores", "ruminants", "Pigs and poultry are examples."],
          ["H", "The compartment of the ruminant stomach that absorbs water from food is the", "omasum", "rumen", "abomasum", "gizzard", "It is called the many plies."],
          ["H", "Ruminants can digest grass well because", "bacteria in the rumen break down cellulose", "they have a gizzard", "they have no stomach", "they swallow stones", "Rumen microbes ferment fibre."],
          ["H", "Poultry have a gizzard because they", "have no teeth for chewing", "chew the cud", "eat only grass", "have four stomachs", "The gizzard does the grinding."],
        ],
      },
      {
        week: 5,
        title: "Weeds",
        subtopics: ["Meaning of weeds", "Characteristics of weeds", "Common weeds in Nigeria", "Effects of weeds"],
        objectives: ["Define weeds", "State the characteristics of weeds", "Identify common weeds in Nigeria", "Explain the harmful and useful effects of weeds"],
        lesson: {
          title: "Plants Out of Place",
          summary: "Identify weeds and explain their effects on crops.",
          minutes: 40,
          notes: `## Meaning
A **weed** is any plant **growing where it is not wanted**. Even a crop plant can be a weed — maize growing in a cowpea plot is a weed there.

## Characteristics of weeds
- produce **very many seeds**
- seeds remain **alive (viable)** in the soil for a long time
- **grow and spread quickly**
- can survive **harsh conditions** (drought, poor soil)
- have efficient ways of **dispersal** (wind, water, animals, people)
- many reproduce both by **seeds** and by **vegetative parts** (rhizomes, stolons)
- are **difficult to eradicate**

## Common weeds in Nigeria
| Common name | Botanical name |
|---|---|
| **spear grass** | *Imperata cylindrica* |
| **elephant grass** | *Pennisetum purpureum* |
| **guinea grass** | *Panicum maximum* |
| **goat weed** | *Ageratum conyzoides* |
| **siam weed** | *Chromolaena odorata* |
| **tridax (coat buttons)** | *Tridax procumbens* |
| **wild sunflower / water leaf** | *Aspilia africana* / *Talinum triangulare* |
| **pigweed (green)** | *Amaranthus spinosus* |
| **sida (broom weed)** | *Sida acuta* |
| **witchweed** | *Striga* species — a **parasitic** weed on maize and sorghum |
| **sensitive plant** | *Mimosa pudica* |
| **nut grass** | *Cyperus rotundus* |

## Harmful effects
- **compete** with crops for **nutrients, water, light and space**, reducing yield
- **harbour pests and diseases**
- increase the **cost of production** (labour for weeding)
- reduce the **quality** of produce (weed seeds in grains)
- some are **poisonous** to livestock; some are parasitic
- block irrigation channels and make harvesting difficult

## Useful effects
cover the soil and **reduce erosion**; add **organic matter**; serve as **forage** for animals (guinea grass); some are **vegetables** (water leaf) or **medicinal**; used for **mulching** and compost.`,
          examples: `**Example 1.** What is a weed? *Answer:* A **plant growing where it is not wanted**.

**Example 2.** Give the botanical name of spear grass. *Answer:* ***Imperata cylindrica***.

**Example 3.** Name one way weeds reduce crop yield. *Answer:* They **compete for nutrients, water and light**.`,
        },
        questions: [
          ["E", "A plant growing where it is not wanted is a", "weed", "crop", "pest", "seedling", "It competes with crops."],
          ["E", "Weeds compete with crops for", "nutrients, water and light", "farmers", "tools", "markets", "This reduces crop yield."],
          ["E", "Which of these is a common weed?", "spear grass", "cocoa", "yam", "oil palm", "Spear grass is hard to control."],
          ["M", "One characteristic of weeds is that they", "produce many seeds", "grow very slowly", "die easily in drought", "produce no seeds", "Many seeds help them spread."],
          ["M", "The botanical name of spear grass is", "Imperata cylindrica", "Panicum maximum", "Tridax procumbens", "Sida acuta", "Its rhizomes are sharp."],
          ["M", "The botanical name of guinea grass is", "Panicum maximum", "Imperata cylindrica", "Chromolaena odorata", "Mimosa pudica", "It is also a forage grass."],
          ["M", "A useful effect of weeds is that they", "reduce soil erosion by covering the soil", "increase the cost of weeding", "harbour pests", "reduce yield", "Their cover protects the soil."],
          ["H", "A parasitic weed that attacks maize and sorghum is", "Striga (witchweed)", "guinea grass", "goat weed", "water leaf", "It attaches to crop roots."],
          ["H", "The botanical name of siam weed is", "Chromolaena odorata", "Ageratum conyzoides", "Cyperus rotundus", "Amaranthus spinosus", "It spreads rapidly on fallow land."],
          ["H", "Maize growing in a cowpea plot is regarded as a weed because", "it is not wanted there", "it is poisonous", "it is a grass", "it has no use", "Any unwanted plant is a weed."],
        ],
      },
      {
        week: 6,
        title: "Control of weeds",
        subtopics: ["Physical and mechanical control", "Cultural control", "Chemical control", "Biological control"],
        objectives: ["Describe physical and mechanical weed control", "Describe cultural methods of weed control", "Explain chemical weed control and safety", "Explain biological weed control"],
        lesson: {
          title: "Keeping Weeds Down",
          summary: "Describe methods of controlling weeds and their advantages.",
          minutes: 40,
          notes: `## Physical and mechanical control
- **hand pulling (roguing)** — uprooting weeds by hand
- **hoeing** and **slashing** with a cutlass
- **mowing** and **ploughing/harrowing** with machines
- **burning** and **flooding**
Advantage: no chemical residue. Disadvantage: **labour-intensive** and slow; may damage crop roots.

## Cultural control
farming practices that reduce weeds:
- **crop rotation**
- **mulching** — covering the soil to block light from weeds
- **cover cropping** — planting crops like mucuna or melon that smother weeds
- **close spacing** of crops
- **timely planting** and use of **clean seeds**
- **bush fallowing**
- proper **tillage**

## Chemical control
use of chemicals called **herbicides** to kill weeds.
- **selective herbicides** kill some plants (e.g. broad-leaved weeds) but not the crop
- **non-selective herbicides** kill all plants they touch
- **pre-emergence** herbicides are applied **before** weeds or crops emerge; **post-emergence** are applied **after** emergence
- **contact** herbicides kill the parts touched; **systemic** herbicides are absorbed and move through the plant
Advantages: fast, covers large areas, saves labour. Disadvantages: costly, may **pollute** soil and water, may harm crops, people and useful organisms; requires skill.
**Safety:** read the label; wear gloves, mask and boots; do not spray against the wind; do not eat or smoke while spraying; wash after use; store away from food and children.

## Biological control
use of **living organisms** to control weeds: grazing animals (sheep, goats), insects or fungi that feed on particular weeds, and cover crops.
Advantage: environmentally friendly. Disadvantage: slow; the control agent may become a pest.

## Integrated weed management
combining two or more methods for effective, safe and economical control.`,
          examples: `**Example 1.** What are chemicals used to kill weeds called? *Answer:* **herbicides**.

**Example 2.** Covering the soil with dry grass to suppress weeds is **mulching**.

**Example 3.** Give one safety rule when spraying herbicides. *Answer:* **Wear protective clothing** (or do not spray against the wind).`,
        },
        questions: [
          ["E", "Chemicals used to kill weeds are called", "herbicides", "insecticides", "fungicides", "fertilisers", "Herb refers to plants."],
          ["E", "Uprooting weeds by hand is", "hand pulling", "mulching", "spraying", "fallowing", "It is a physical method."],
          ["E", "Covering the soil with dry grass to suppress weeds is", "mulching", "hoeing", "burning", "flooding", "Mulch blocks light from weeds."],
          ["M", "Using goats and sheep to graze on weeds is", "biological control", "chemical control", "mechanical control", "cultural mulching", "Living organisms are used."],
          ["M", "A herbicide that kills some plants but not the crop is", "selective", "non-selective", "systemic only", "contact only", "It selects what to kill."],
          ["M", "A herbicide applied before weeds emerge is", "pre-emergence", "post-emergence", "contact", "biological", "It acts on germinating weeds."],
          ["M", "A disadvantage of hand weeding is that it is", "labour-intensive and slow", "polluting to water", "very fast", "harmful to soil organisms", "Much labour is needed."],
          ["H", "Planting crops such as mucuna or melon to smother weeds is", "cover cropping", "mono-cropping", "roguing", "chemical control", "The cover crop shades out weeds."],
          ["H", "A disadvantage of chemical weed control is that it", "may pollute soil and water", "needs many labourers", "is very slow", "cannot cover large areas", "Residues can harm the environment."],
          ["H", "Combining several weed control methods is called", "integrated weed management", "monoculture", "shifting cultivation", "selective spraying only", "It is effective and economical."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Crop pests",
        subtopics: ["Meaning of pests", "Classes of crop pests", "Insect pests by feeding habit", "Damage caused by pests"],
        objectives: ["Define crop pests", "Classify crop pests", "Group insect pests by their feeding habits", "Describe the damage caused by pests"],
        lesson: {
          title: "Enemies of Crops",
          summary: "Classify crop pests and describe the damage they cause.",
          minutes: 40,
          notes: `## Meaning
A **pest** is any organism that **damages crops** (in the field or in storage) and reduces their yield or quality.

## Classes of crop pests
| Class | Examples | Damage |
|---|---|---|
| **insects** | grasshoppers, stem borers, aphids, weevils, army worms | eat leaves, bore stems, suck sap, destroy stored grains |
| **birds** | weaver birds (quelea), parrots | eat grains of rice, millet, sorghum |
| **rodents** | rats, grasscutters, squirrels | eat tubers, grains, seedlings |
| **mammals** | monkeys, bush pigs, stray goats and cattle | eat and trample crops |
| **nematodes (eelworms)** | root-knot nematodes | cause swellings (galls) on roots |
| **molluscs** | snails, slugs | eat leaves of vegetables |
| **mites** | red spider mite | suck sap |

## Insect pests by feeding habit
| Group | Mouthparts | Examples |
|---|---|---|
| **biting and chewing** | strong jaws (mandibles) | grasshoppers, locusts, caterpillars, beetles, termites |
| **piercing and sucking** | needle-like stylets | aphids, mealybugs, cotton stainers, whiteflies, capsids |
| **boring** | bore into stems, fruits, seeds | stem borers, weevils, yam beetles |

## Important pests of Nigerian crops
- **maize**: stem borer, army worm, weevil (in storage)
- **cowpea**: aphids, pod borer, bean weevil (bruchid)
- **yam**: yam beetle
- **cassava**: mealybug, green spider mite, variegated grasshopper
- **cocoa**: capsid (mirid)
- **cotton**: bollworm, cotton stainer
- **rice**: quelea birds, stem borer

## Damage caused by pests
reduce **yield** and **quality**; destroy leaves, reducing photosynthesis; **transmit diseases** (aphids and whiteflies carry viruses); increase the **cost of production**; cause total crop failure in severe attacks; reduce the farmer's income.`,
          examples: `**Example 1.** Give two examples of piercing and sucking insects. *Answer:* **aphids** and **mealybugs**.

**Example 2.** Which pest causes galls on plant roots? *Answer:* **nematodes**.

**Example 3.** Name a storage pest of maize. *Answer:* the **maize weevil**.`,
        },
        questions: [
          ["E", "An organism that damages crops is a", "pest", "weed only", "manure", "cover crop", "Pests reduce yield and quality."],
          ["E", "Grasshoppers damage crops by", "biting and chewing leaves", "sucking sap", "boring into roots only", "spreading pollen", "They have strong jaws."],
          ["E", "Rats and squirrels are classified as", "rodents", "insects", "nematodes", "birds", "They gnaw tubers and grains."],
          ["M", "Aphids and mealybugs are", "piercing and sucking insects", "biting and chewing insects", "boring insects", "rodents", "They suck plant sap."],
          ["M", "Tiny worms that cause swellings on plant roots are", "nematodes", "weevils", "aphids", "termites", "They are also called eelworms."],
          ["M", "The birds that destroy rice and millet grains in large flocks are", "quelea (weaver) birds", "vultures", "owls", "ducks", "They feed on ripening grains."],
          ["M", "A common storage pest of maize grains is the", "weevil", "grasshopper", "aphid", "mealybug", "Weevils bore into stored grains."],
          ["H", "Aphids and whiteflies are especially harmful because they also", "transmit virus diseases", "fix nitrogen", "pollinate crops", "improve soil", "They carry viruses between plants."],
          ["H", "The major insect pest of cocoa in Nigeria is the", "capsid (mirid)", "yam beetle", "bollworm", "quelea bird", "It sucks sap from pods and shoots."],
          ["H", "Insects such as stem borers damage maize by", "boring into the stem", "sucking sap from leaves only", "eating flowers only", "cutting roots only", "The larvae tunnel inside the stem."],
        ],
      },
      {
        week: 2,
        title: "Control of crop pests",
        subtopics: ["Physical control", "Cultural control", "Chemical control", "Biological and integrated control"],
        objectives: ["Describe physical methods of pest control", "Describe cultural methods of pest control", "Explain chemical pest control and its dangers", "Explain biological and integrated pest management"],
        lesson: {
          title: "Protecting Crops from Pests",
          summary: "Describe methods of controlling crop pests safely.",
          minutes: 40,
          notes: `## Physical control
- **hand-picking** and killing insects
- setting **traps** for rodents
- **scarecrows**, noise makers and nets against birds
- **fencing** against large animals
- burning infested crop remains

## Cultural control
- **crop rotation** to break pest life cycles
- **early or timely planting** to escape pest build-up
- planting **resistant varieties**
- **farm sanitation** — removing crop residues and weeds that harbour pests
- **proper spacing** and **regular weeding**
- **bush fallowing**
- drying grains well before storage

## Chemical control
use of **pesticides**:
| Pesticide | Kills |
|---|---|
| **insecticides** | insects |
| **rodenticides** | rodents |
| **nematicides** | nematodes |
| **avicides** | birds |
| **molluscicides** | snails and slugs |
| **fungicides** | fungi (diseases) |
Applied as **sprays, dusts, granules, baits** or **fumigants** (gases for stores).
Advantages: quick and effective over large areas. Dangers: **poisonous** to people and animals; kill **useful insects** (bees, ladybirds); **residues** in food; **pollution**; pests may become **resistant**.
**Never use pesticides to preserve food or fish, and observe the waiting period before harvest.**

## Biological control
use of **natural enemies**: **predators** (ladybird beetles eat aphids; cats catch rats), **parasites/parasitoids** (tiny wasps that attack mealybugs) and **pathogens**. The cassava mealybug in Africa was controlled with a parasitic wasp.

## Integrated pest management (IPM)
combining cultural, biological, physical and **minimal chemical** methods to keep pests below damaging levels while protecting the environment.

## Quarantine
laws and inspection that **prevent the entry of foreign pests and diseases** through imported plant materials.`,
          examples: `**Example 1.** Which pesticide kills rodents? *Answer:* a **rodenticide**.

**Example 2.** Ladybird beetles eating aphids is an example of **biological control**.

**Example 3.** What does IPM stand for? *Answer:* **integrated pest management**.`,
        },
        questions: [
          ["E", "Chemicals used to kill insect pests are", "insecticides", "herbicides", "fungicides", "fertilisers", "They target insects."],
          ["E", "A scarecrow is used to control", "birds", "nematodes", "aphids", "fungi", "It frightens birds away."],
          ["E", "Setting traps for rats is a", "physical control method", "chemical control method", "biological control method", "quarantine measure", "No chemicals are used."],
          ["M", "Chemicals used to kill rodents are", "rodenticides", "nematicides", "avicides", "molluscicides", "They target rats and mice."],
          ["M", "Using ladybird beetles to feed on aphids is", "biological control", "chemical control", "cultural control", "physical control", "A natural enemy is used."],
          ["M", "Crop rotation controls pests by", "breaking their life cycles", "feeding them", "spraying them", "trapping them", "Pests lose their host crop."],
          ["M", "A danger of using pesticides is that they", "can poison people and useful insects", "always improve soil", "increase pest numbers at once", "are harmless", "They are toxic chemicals."],
          ["H", "Laws that prevent the entry of foreign pests through imported plants are called", "quarantine", "rotation", "sanitation", "fumigation", "Imports are inspected and restricted."],
          ["H", "Gaseous pesticides used to treat stored grains in sealed stores are", "fumigants", "baits", "dusts", "granules", "The gas penetrates the stored produce."],
          ["H", "Integrated pest management aims to", "combine methods and use minimal chemicals", "use only chemicals", "ignore pests", "destroy all insects", "It protects the environment."],
        ],
      },
      {
        week: 3,
        title: "Crop diseases",
        subtopics: ["Meaning of disease", "Causes of crop diseases", "Common crop diseases in Nigeria", "Control of crop diseases"],
        objectives: ["Define crop disease", "Identify the causes of crop diseases", "Describe common crop diseases and their symptoms", "Describe methods of controlling crop diseases"],
        lesson: {
          title: "When Crops Fall Sick",
          summary: "Identify common crop diseases, their causes and control.",
          minutes: 40,
          notes: `## Meaning
A **crop disease** is any **abnormal condition** that interferes with the normal growth and functioning of a plant. The organisms that cause diseases are called **pathogens**.

## Causes
- **fungi** — the most common cause (rusts, smuts, mildews, blights)
- **bacteria** — wilts, blights, soft rots
- **viruses** — mosaics, leaf curl, rosette; spread by insects (vectors)
- **nematodes** — root knot
- **nutrient deficiency** (non-pathogenic) — e.g. yellowing from lack of nitrogen

## Common crop diseases in Nigeria
| Disease | Crop | Cause | Symptoms |
|---|---|---|---|
| **maize smut** | maize | fungus | black powdery masses (galls) on cobs and tassels |
| **maize rust** | maize | fungus | reddish-brown spots on leaves |
| **rice blast** | rice | fungus | spindle-shaped spots on leaves; broken necks |
| **black pod** | cocoa | fungus | pods turn brown then black and rot |
| **cassava mosaic** | cassava | virus (spread by whiteflies) | yellow and green patches; twisted, small leaves |
| **groundnut rosette** | groundnut | virus (spread by aphids) | stunted plants, yellow mottled leaves |
| **cassava bacterial blight** | cassava | bacterium | wilting, leaf spots, die-back |
| **damping-off** | seedlings of tomato, pepper | fungus | seedlings rot at soil level and fall |
| **tomato wilt** | tomato | bacterium/fungus | sudden wilting |
| **root knot** | tomato, okra | nematode | swellings (galls) on roots |
| **leaf spot** | groundnut, cowpea | fungus | brown spots on leaves |

## How diseases spread
wind, rain splash, insects, infected seeds and cuttings, tools, soil and people.

## Control
- plant **resistant varieties** and **disease-free seeds/cuttings**
- **seed dressing** with fungicides
- **crop rotation** and **farm sanitation**
- **rogue** (remove and burn) infected plants
- control insect **vectors**
- spray **fungicides** (e.g. copper-based for black pod)
- proper spacing and drainage
- **quarantine**`,
          examples: `**Example 1.** What causes cassava mosaic? *Answer:* a **virus**, spread by **whiteflies**.

**Example 2.** Which disease turns cocoa pods black? *Answer:* **black pod** disease (fungus).

**Example 3.** Give one method of controlling crop diseases. *Answer:* planting **resistant varieties**.`,
        },
        questions: [
          ["E", "Organisms that cause diseases in crops are", "pathogens", "predators", "pollinators", "legumes", "They include fungi and bacteria."],
          ["E", "Black pod is a disease of", "cocoa", "maize", "yam", "rice", "Cocoa pods rot and turn black."],
          ["E", "Cassava mosaic is caused by a", "virus", "fungus", "nematode", "bird", "It is spread by whiteflies."],
          ["M", "Maize smut is caused by a", "fungus", "virus", "bacterium", "nematode", "It forms black powdery galls."],
          ["M", "Groundnut rosette virus is transmitted by", "aphids", "weevils", "grasshoppers", "rats", "Aphids are the vector."],
          ["M", "The disease that makes seedlings rot at soil level and fall over is", "damping-off", "rosette", "smut", "mosaic", "It attacks nursery seedlings."],
          ["M", "Removing and burning infected plants is called", "roguing", "mulching", "staking", "thinning only", "It removes the source of infection."],
          ["H", "The symptom of yellow and green patches with twisted leaves on cassava indicates", "cassava mosaic disease", "black pod", "rice blast", "maize rust", "The virus causes mottling."],
          ["H", "Treating seeds with fungicide before planting is", "seed dressing", "roguing", "quarantine", "fallowing", "It protects seeds from soil fungi."],
          ["H", "Controlling whiteflies helps to control cassava mosaic because whiteflies are its", "vector", "host crop", "symptom", "cure", "They carry the virus between plants."],
        ],
      },
      {
        week: 4,
        title: "Crop propagation",
        subtopics: ["Propagation by seed", "Vegetative propagation", "Planting materials of common crops", "Advantages and disadvantages"],
        objectives: ["Explain propagation by seed", "Explain vegetative propagation and its methods", "Match crops with their planting materials", "Compare sexual and vegetative propagation"],
        lesson: {
          title: "Multiplying Crop Plants",
          summary: "Describe how crops are propagated by seeds and vegetative parts.",
          minutes: 40,
          notes: `## Meaning
**Propagation** is the **multiplication of plants**. There are two types: **sexual** (by seed) and **asexual or vegetative** (by plant parts).

## Propagation by seed (sexual)
used for maize, rice, cowpea, groundnut, tomato, okra, cocoa, oil palm.
- **direct sowing** — seeds planted where they will grow (maize, cowpea)
- **nursery and transplanting** — seeds raised in a nursery, then seedlings moved to the field (tomato, pepper, cocoa, oil palm, rice)
Good seeds are **viable**, mature, healthy, whole and pure.
**Advantages:** easy to store, handle and transport; cheap; produces new varieties.
**Disadvantages:** offspring may differ from parents; some take long to mature; some seeds have **dormancy**.

## Vegetative propagation (asexual)
| Method | Crops |
|---|---|
| **stem cuttings** | cassava, sugar cane, sweet potato (vines) |
| **tubers / setts / minisetts** | yam, Irish potato |
| **suckers** | banana, plantain, pineapple |
| **corms and cormels** | cocoyam |
| **rhizomes** | ginger |
| **bulbs** | onion, garlic |
| **runners / stolons** | strawberry, some grasses |
| **budding** | citrus, rubber |
| **grafting** | mango, citrus, avocado |
| **layering** | kola, coffee, some ornamentals |
In **budding and grafting**, a **scion** (desired variety) is joined to a **rootstock**.
**Advantages:** offspring are **identical to the parent** (true to type); **earlier maturity**; used for crops that produce few or no seeds (banana, pineapple).
**Disadvantages:** planting materials are **bulky**, hard to store and transport; **diseases** of the parent are passed on; no new varieties.`,
          examples: `**Example 1.** How is cassava propagated? *Answer:* by **stem cuttings**.

**Example 2.** What planting material is used for plantain? *Answer:* **suckers**.

**Example 3.** Give one advantage of vegetative propagation. *Answer:* Offspring are **identical to the parent** and mature earlier.`,
        },
        questions: [
          ["E", "The multiplication of plants is called", "propagation", "pollination", "irrigation", "harvesting", "New plants are produced."],
          ["E", "Cassava is propagated by", "stem cuttings", "seeds", "suckers", "bulbs", "Cuttings are planted in ridges."],
          ["E", "Maize is propagated by", "seeds", "suckers", "cuttings", "tubers", "Grains are sown directly."],
          ["M", "Plantain and banana are propagated by", "suckers", "stem cuttings", "seeds", "bulbs", "Suckers grow from the base."],
          ["M", "Ginger is propagated by", "rhizomes", "suckers", "seeds", "bulbs", "Rhizomes are underground stems."],
          ["M", "Onion is propagated vegetatively by", "bulbs", "corms", "rhizomes", "suckers", "Bulbs store food in leaf bases."],
          ["M", "Raising seedlings in a nursery and moving them to the field is", "transplanting", "direct sowing", "budding", "layering", "Tomato is treated this way."],
          ["H", "In grafting, the part of the desired variety joined to the rootstock is the", "scion", "sucker", "sett", "corm", "The scion grows the shoot."],
          ["H", "A disadvantage of vegetative propagation is that", "diseases of the parent are passed on", "plants mature late", "offspring differ from parents", "seeds are small", "Planting materials carry infections."],
          ["H", "An advantage of propagation by seed is that seeds", "are easy to store and transport", "always resemble the parent", "mature earlier than cuttings", "carry no dormancy", "They are small and light."],
        ],
      },
      {
        week: 5,
        title: "Cultural practices",
        subtopics: ["Pre-planting operations", "Planting operations", "Post-planting operations", "Harvesting and storage"],
        objectives: ["Describe pre-planting operations", "Describe planting operations", "Describe post-planting operations", "Explain harvesting, processing and storage"],
        lesson: {
          title: "From Land Clearing to Harvest",
          summary: "Describe the cultural practices in crop production.",
          minutes: 40,
          notes: `## Meaning
**Cultural practices** are all the **farm operations** carried out from land preparation to harvesting and storage.

## Pre-planting operations
1. **site selection** — fertile, well-drained land near water and roads
2. **land clearing** — cutting bush and felling trees
3. **stumping** — removing tree stumps
4. **tillage** — **ploughing** (breaking the soil), **harrowing** (breaking clods into fine tilth), **ridging** (making ridges, mounds or beds)
5. **farm layout** and nursery preparation

## Planting operations
- **seed selection and treatment** (dressing)
- **planting date** — at the start of steady rains
- **spacing** — the distance between plants (e.g. maize 75 cm × 25 cm)
- **seed rate** and **planting depth**
- **sowing** methods: **broadcasting** (scattering seeds), **drilling** (in rows), **dibbling** (in holes)
- **transplanting** seedlings in the evening or on cool days

## Post-planting operations
| Practice | Meaning |
|---|---|
| **thinning** | removing weak, excess seedlings so that the rest grow well |
| **supplying** | replanting where seeds failed to germinate |
| **weeding** | removing weeds |
| **mulching** | covering the soil with dry grass or leaves to conserve moisture, suppress weeds and reduce heat |
| **fertiliser/manure application** | supplying nutrients |
| **watering / irrigation** | supplying water |
| **staking** | supporting climbing or weak-stemmed crops (yam, tomato) |
| **pruning** | removing excess branches |
| **earthing up** | heaping soil around the base of plants |
| **pest and disease control** | protecting the crop |

## Harvesting and after
**harvesting** at maturity by hand or machine; **processing** (drying, threshing, shelling, winnowing, milling); **storage** in cribs, rhombus, silos, barns and sacks; **marketing**.`,
          examples: `**Example 1.** What is thinning? *Answer:* **Removing excess, weak seedlings** so the rest grow well.

**Example 2.** Which crops are staked? *Answer:* **yam** and **tomato**.

**Example 3.** Name the three tillage operations. *Answer:* **ploughing, harrowing and ridging**.`,
        },
        questions: [
          ["E", "The first operation in preparing a farm after choosing the site is", "land clearing", "harvesting", "thinning", "staking", "Bush is cut before tilling."],
          ["E", "Removing weeds from a farm is", "weeding", "thinning", "supplying", "pruning", "Weeds compete with crops."],
          ["E", "Supporting yam vines with sticks is", "staking", "mulching", "thinning", "ridging", "Stakes hold up climbing vines."],
          ["M", "Removing weak and excess seedlings from a stand is", "thinning", "supplying", "pruning", "earthing up", "It reduces overcrowding."],
          ["M", "Replanting where seeds failed to germinate is", "supplying", "thinning", "mulching", "harrowing", "Gaps are filled."],
          ["M", "Covering the soil with dry grass to conserve moisture is", "mulching", "stumping", "broadcasting", "drilling", "It also suppresses weeds."],
          ["M", "Scattering seeds over the land by hand is", "broadcasting", "drilling", "dibbling", "transplanting", "Seeds are not placed in rows."],
          ["H", "Breaking soil clods into a fine tilth after ploughing is", "harrowing", "ridging", "stumping", "thinning", "It prepares a fine seedbed."],
          ["H", "Seedlings are best transplanted in the evening because", "it is cooler and water loss is reduced", "pests are asleep", "the soil is dry", "there is more sunlight", "Seedlings suffer less shock."],
          ["H", "Removing tree stumps from cleared land is", "stumping", "pruning", "roguing", "winnowing", "It allows machines to work."],
        ],
      },
      {
        week: 6,
        title: "Careers in agriculture",
        subtopics: ["Careers in crop and animal production", "Careers in agricultural services", "Agricultural institutions", "Skills for agricultural careers"],
        objectives: ["Identify careers in crop and animal production", "Identify careers in agricultural services", "Name institutions that train agriculturists", "State the skills needed for careers in agriculture"],
        lesson: {
          title: "Working in Agriculture",
          summary: "Explore careers and training opportunities in agriculture.",
          minutes: 40,
          notes: `## Careers in production
| Career | Work |
|---|---|
| **crop farmer / agronomist** | grows and improves field crops |
| **horticulturist** | grows fruits, vegetables and flowers |
| **livestock farmer / animal scientist** | rears and improves farm animals |
| **poultry farmer** | keeps birds for eggs and meat |
| **fish farmer (aquaculturist)** | rears fish in ponds |
| **forester** | manages forests and plantations |
| **bee-keeper (apiarist)** | keeps bees for honey |

## Careers in agricultural services
| Career | Work |
|---|---|
| **veterinary doctor** | treats and prevents animal diseases |
| **agricultural extension officer** | teaches farmers improved practices |
| **soil scientist** | tests and advises on soils |
| **agricultural engineer** | designs and maintains farm machines and irrigation |
| **agricultural economist** | advises on farm business and marketing |
| **food scientist / processor** | processes and preserves food |
| **plant breeder** | develops improved crop varieties |
| **agricultural teacher / lecturer / researcher** | teaches and carries out research |
| **agro-dealer** | sells seeds, fertilisers and chemicals |
| **farm manager** | runs a farm business |

## Institutions
- **universities** with faculties of agriculture; universities of agriculture (e.g. in **Abeokuta, Makurdi, Umudike**)
- **colleges of agriculture** and polytechnics
- **research institutes**: **IITA** (Ibadan), **NCRI** (cereals, Badeggi), **NRCRI** (root crops, Umudike), **CRIN** (cocoa, Ibadan), **NIFOR** (oil palm, Benin), **RRIN** (rubber), **IAR** (Zaria), **NAPRI** (animal production, Zaria), **NIHORT** (horticulture, Ibadan), **FRIN** (forestry, Ibadan)

## Skills needed
interest in plants and animals; hard work; science knowledge (Biology, Chemistry); record keeping; business skills; use of technology; patience and observation.

## Agriculture as a business
young people can start small agribusinesses: vegetable gardens, poultry, fish ponds, snail farms, processing and packaging.`,
          examples: `**Example 1.** Who treats sick farm animals? *Answer:* a **veterinary doctor**.

**Example 2.** Which research institute works on cocoa? *Answer:* **CRIN** (Cocoa Research Institute of Nigeria), Ibadan.

**Example 3.** Who teaches farmers new farming methods? *Answer:* an **agricultural extension officer**.`,
        },
        questions: [
          ["E", "A professional who treats sick farm animals is a", "veterinary doctor", "forester", "agronomist", "plant breeder", "Vets care for animal health."],
          ["E", "A person who rears fish in ponds is a", "fish farmer", "forester", "bee-keeper", "poultry farmer", "Fish are raised in ponds."],
          ["E", "A person who keeps bees for honey is a", "bee-keeper", "horticulturist", "soil scientist", "veterinarian", "Bees are kept in hives."],
          ["M", "The officer who teaches farmers improved practices is the", "extension officer", "food scientist", "agro-dealer", "forester", "Extension links research and farmers."],
          ["M", "A scientist who develops improved crop varieties is a", "plant breeder", "veterinary doctor", "soil scientist", "farm manager", "Breeders improve crops."],
          ["M", "A professional who designs farm machines and irrigation systems is an", "agricultural engineer", "agricultural economist", "agronomist", "apiarist", "Engineers handle machinery."],
          ["M", "The research institute for cocoa in Nigeria is", "CRIN", "NIFOR", "NCRI", "FRIN", "Cocoa Research Institute of Nigeria."],
          ["H", "The research institute for oil palm in Nigeria is", "NIFOR", "CRIN", "RRIN", "NAPRI", "It is located near Benin City."],
          ["H", "The research institute for root crops such as cassava and yam is", "NRCRI, Umudike", "NIHORT, Ibadan", "NAPRI, Zaria", "FRIN, Ibadan", "National Root Crops Research Institute."],
          ["H", "The international research institute for tropical agriculture located in Ibadan is", "IITA", "IAR", "NCRI", "RRIN", "International Institute of Tropical Agriculture."],
        ],
      },
    ],
  },
];
