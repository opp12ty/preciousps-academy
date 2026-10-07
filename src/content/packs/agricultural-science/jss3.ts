import type { TermPlan } from "../types";

/** JSS3 Agricultural Science — original Precious PS content following the national Basic Education structure. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Environmental factors affecting agricultural production",
        subtopics: ["Climatic factors", "Soil (edaphic) factors", "Biotic factors", "Vegetation zones and crops of Nigeria"],
        objectives: ["Explain how climatic factors affect agriculture", "Explain how soil factors affect agriculture", "Explain how biotic factors affect agriculture", "Relate Nigeria's vegetation zones to the crops and animals produced"],
        lesson: {
          title: "Climate, Soil and Living Things",
          summary: "Explain how the environment influences crop and animal production.",
          minutes: 40,
          notes: `## Climatic factors
| Factor | Effect on agriculture |
|---|---|
| **rainfall** | the most important factor in Nigeria; decides the **type of crops**, planting time and length of growing season; too much causes erosion, leaching and flooding; too little causes drought and crop failure |
| **temperature** | affects germination, growth, flowering and ripening; high temperature increases water loss and reduces animals' appetite |
| **sunlight** | needed for **photosynthesis**; day length affects flowering |
| **relative humidity** | high humidity favours **fungal diseases** and spoilage of stored produce; low humidity (harmattan) helps drying |
| **wind** | helps **pollination** and seed dispersal; strong winds cause **lodging**, fruit drop and erosion |

## Soil (edaphic) factors
**soil texture** and **structure**; **fertility**; **soil pH** (most crops prefer slightly acidic to neutral soils); **soil water** and drainage; **topography** (slope).

## Biotic factors
effects of **living organisms**:
- **pests, parasites and diseases** reduce yield
- **weeds** compete with crops
- **predators** kill farm animals
- **soil organisms** (earthworms, bacteria) improve fertility; **nitrogen-fixing bacteria** in legume nodules add nitrogen
- **pollinators** (bees) help fruit and seed set
- **human activities**: bush burning, deforestation, overgrazing — and also conservation

## Vegetation zones of Nigeria and agriculture
| Zone | Rainfall | Crops and animals |
|---|---|---|
| **mangrove and freshwater swamp** (coast) | very high | swamp rice, raffia, fish, coconut |
| **rainforest** (south) | high | cocoa, oil palm, rubber, kola, timber, yam, cassava, plantain |
| **Guinea savanna** (middle belt) | moderate | yam, maize, rice, sorghum, soya bean, cattle |
| **Sudan savanna** (north) | low | millet, sorghum, groundnut, cotton, cowpea, cattle, sheep, goats |
| **Sahel savanna** (far north-east) | very low | millet, livestock (nomadic herding), dates |
The presence of **tsetse flies** in the humid south limits cattle; **trypanotolerant** breeds (N'Dama, Muturu) are kept there.`,
          examples: `**Example 1.** Which climatic factor is most important for crop production in Nigeria? *Answer:* **rainfall**.

**Example 2.** Why does high humidity encourage crop diseases? *Answer:* It favours the growth of **fungi**.

**Example 3.** In which zone is cocoa mainly grown? *Answer:* the **rainforest** zone.`,
        },
        questions: [
          ["E", "The most important climatic factor affecting crop production in Nigeria is", "rainfall", "wind", "humidity", "day length", "It determines crops and seasons."],
          ["E", "Sunlight is needed by crops mainly for", "photosynthesis", "pollination", "erosion", "lodging", "Plants make food with light."],
          ["E", "Cocoa and oil palm are grown mainly in the", "rainforest zone", "Sahel savanna", "Sudan savanna", "desert", "They need high rainfall."],
          ["M", "Factors relating to the soil are called", "edaphic factors", "biotic factors", "climatic factors", "economic factors", "Edaphic refers to soil."],
          ["M", "The effects of pests, weeds and soil organisms are", "biotic factors", "edaphic factors", "climatic factors", "physical factors", "They involve living things."],
          ["M", "High relative humidity favours the spread of", "fungal diseases", "drought", "wind erosion", "harmattan", "Fungi thrive in moist air."],
          ["M", "Millet, groundnut and cotton are mainly produced in the", "Sudan savanna", "mangrove swamp", "rainforest", "freshwater swamp", "They tolerate low rainfall."],
          ["H", "Strong winds may cause tall crops such as maize to fall over. This is called", "lodging", "leaching", "wilting", "bolting", "The stems bend or break."],
          ["H", "Cattle rearing is limited in the humid southern zone mainly because of", "tsetse flies", "too little grass", "low rainfall", "sandy soils", "They transmit trypanosomiasis."],
          ["H", "Bacteria in the root nodules of legumes benefit the soil by", "fixing nitrogen", "causing disease", "removing water", "making the soil acidic", "They convert air nitrogen to usable forms."],
        ],
      },
      {
        week: 2,
        title: "Crop improvement",
        subtopics: ["Meaning and aims of crop improvement", "Introduction", "Selection", "Hybridisation"],
        objectives: ["Explain crop improvement and its aims", "Describe introduction as a method of crop improvement", "Describe selection", "Describe hybridisation and its advantages"],
        lesson: {
          title: "Developing Better Crops",
          summary: "Describe the aims and methods of crop improvement.",
          minutes: 40,
          notes: `## Meaning
**Crop improvement** is the science of **developing crop varieties that are better** than existing ones. It is done by **plant breeders**.

## Aims
- **higher yield**
- **better quality** (taste, nutrition, size, colour)
- **resistance to pests and diseases**
- **early maturity**
- **adaptation** to climate and soils (drought tolerance)
- resistance to **lodging**
- uniform growth and ripening for easy harvesting
- better storage and processing qualities

## Methods

### 1. Introduction
bringing **improved varieties from another place or country** into a new area. The material must pass through **quarantine** to avoid introducing new pests and diseases.
- advantage: quick way to obtain new varieties
- disadvantage: the variety may not adapt; risk of new pests and diseases

### 2. Selection
choosing the **best plants** from a population and using their seeds for the next planting.
- **mass selection** — seeds from many good plants are mixed and planted
- **pure line selection** — seeds from **one outstanding plant** are multiplied separately
- **pedigree selection** — records of ancestors are kept
- advantage: simple; disadvantage: slow; no new characters are created

### 3. Hybridisation (cross-breeding)
**crossing two different parent plants** with desirable characters to combine them in the offspring (**hybrid**).
- **emasculation** — removing the **anthers** from the flower of the female parent to prevent self-pollination
- pollen from the chosen male parent is transferred, and the flower is **bagged** and labelled
- the offspring often show **hybrid vigour (heterosis)** — better growth and yield than both parents
- example: **tenera** oil palm = **dura × pisifera**; hybrid maize
- disadvantage: hybrid seed is costly and must be bought every season

## Other methods
**mutation breeding**, **tissue culture** (rapid multiplication of disease-free plants) and **genetic engineering**.

## Seed multiplication
improved varieties are multiplied by seed companies and distributed to farmers.`,
          examples: `**Example 1.** Give two aims of crop improvement. *Answer:* **higher yield** and **disease resistance**.

**Example 2.** What is hybridisation? *Answer:* **Crossing two different parents** to combine their good characters.

**Example 3.** Which oil palm is the hybrid of dura and pisifera? *Answer:* **tenera**.`,
        },
        questions: [
          ["E", "Developing crop varieties that are better than existing ones is", "crop improvement", "crop rotation", "crop protection", "crop storage", "Breeders improve crops."],
          ["E", "An aim of crop improvement is to obtain", "higher yield", "more weeds", "later maturity always", "poorer quality", "Farmers want more produce."],
          ["E", "Bringing improved varieties from another country is", "introduction", "selection", "hybridisation", "mutation", "The variety is new to the area."],
          ["M", "Choosing the best plants and using their seeds for the next planting is", "selection", "introduction", "emasculation", "quarantine", "The best are picked."],
          ["M", "Crossing two different parent plants to combine good characters is", "hybridisation", "selection", "introduction", "roguing", "The offspring is a hybrid."],
          ["M", "Introduced planting materials must pass through", "quarantine", "fallow", "mulching", "threshing", "This prevents new pests and diseases."],
          ["M", "Selection in which seeds from many good plants are mixed is", "mass selection", "pure line selection", "pedigree selection", "hybrid selection", "Seeds are bulked together."],
          ["H", "Removing the anthers from a flower before controlled pollination is", "emasculation", "bagging", "selection", "grafting", "It prevents self-pollination."],
          ["H", "The superior performance of hybrids over their parents is called", "hybrid vigour", "dormancy", "mutation", "lodging", "It is also called heterosis."],
          ["H", "The tenera oil palm is obtained by crossing", "dura and pisifera", "dura and dura", "pisifera and pisifera", "tenera and coconut", "It combines thin shell and thick mesocarp."],
        ],
      },
      {
        week: 3,
        title: "Production of cereals and legumes",
        subtopics: ["Maize production", "Rice production", "Cowpea production", "Groundnut production"],
        objectives: ["Describe the production of maize", "Describe the production of rice", "Describe the production of cowpea", "Describe the production of groundnut"],
        lesson: {
          title: "Growing Grains and Pulses",
          summary: "Describe the cultivation of maize, rice, cowpea and groundnut.",
          minutes: 45,
          notes: `## Maize (*Zea mays*)
- **climate and soil**: moderate rainfall, plenty of sunlight; fertile, well-drained **loam**
- **land preparation**: clear, plough, harrow, ridge
- **planting**: by seed at the start of rains; **75 cm × 25 cm** (one seed per hole) or 90 cm × 30 cm (two per hole); depth 2–5 cm
- **cultural practices**: thinning and supplying; weeding 2–3 times; **NPK** at planting and **urea** top dressing
- **pests**: stem borer, army worm, weevil; **diseases**: smut, rust, streak, leaf blight
- **maturity**: about **90–120 days**
- **harvesting**: fresh (green) for boiling/roasting or dry; **storage**: cribs, silos, sacks
- **uses**: food (pap, tuwo, popcorn), livestock feed, corn oil, starch

## Rice (*Oryza sativa*)
- **upland rice** (rain-fed) and **swamp/lowland rice** (flooded fields)
- **soil**: heavy **clay** or loam that holds water
- **planting**: broadcasting, drilling, or **nursery then transplanting** (swamp rice)
- **pests**: quelea birds, stem borers, rodents; **disease**: rice blast
- **maturity**: about 4–6 months
- **processing**: threshing, parboiling, drying, milling

## Cowpea (*Vigna unguiculata*)
- a **legume**; tolerates low rainfall; well-drained sandy loam
- planted late in the rainy season so pods mature in dry weather; spacing about 75 cm × 25 cm
- needs **little nitrogen** fertiliser (fixes its own) but benefits from **phosphorus**
- **pests**: aphids, flower thrips, pod borers, pod-sucking bugs; storage **bruchid**; **insect control is essential**
- **maturity**: about 60–90 days; harvest dry pods
- **uses**: beans, moi-moi, akara; haulms as fodder; improves soil

## Groundnut (*Arachis hypogaea*)
- legume and **oil crop**; light **sandy loam**; grown mainly in the north
- planted by seed; pods develop **underground** from **pegs**; earthing up helps
- **diseases**: **rosette** (virus, spread by aphids), leaf spot
- **maturity**: about 3–4 months; plants are lifted and dried
- **uses**: oil, cake, kuli-kuli, roasted nuts; haulms for livestock`,
          examples: `**Example 1.** What is the botanical name of maize? *Answer:* ***Zea mays***.

**Example 2.** Why does cowpea need little nitrogen fertiliser? *Answer:* It is a **legume that fixes nitrogen**.

**Example 3.** Where do groundnut pods develop? *Answer:* **underground**.`,
        },
        questions: [
          ["E", "The botanical name of maize is", "Zea mays", "Oryza sativa", "Vigna unguiculata", "Arachis hypogaea", "Maize belongs to the grass family."],
          ["E", "The planting material used to establish a maize farm is", "seeds", "cuttings", "suckers", "setts", "Grains are sown directly."],
          ["E", "Swamp rice grows best on", "clay soil that holds water", "dry sandy soil", "rocky soil", "gravel", "Rice needs standing water."],
          ["M", "The botanical name of rice is", "Oryza sativa", "Zea mays", "Manihot esculenta", "Elaeis guineensis", "Rice is a cereal."],
          ["M", "The botanical name of cowpea is", "Vigna unguiculata", "Arachis hypogaea", "Dioscorea rotundata", "Theobroma cacao", "Cowpea is a legume."],
          ["M", "Maize usually matures in about", "90 to 120 days", "10 to 20 days", "2 years", "5 years", "It is an annual crop."],
          ["M", "The main bird pest of rice is the", "quelea bird", "vulture", "duck", "owl", "Quelea feed on grains in flocks."],
          ["H", "Cowpea needs little nitrogen fertiliser because", "it fixes nitrogen through root nodules", "it grows without nutrients", "it has no roots", "it is a cereal", "Legumes host nitrogen-fixing bacteria."],
          ["H", "Groundnut pods develop", "underground from pegs", "on the leaves", "at the tip of the stem", "on the flowers above ground", "Pegs grow down into the soil."],
          ["H", "The virus disease of groundnut spread by aphids is", "rosette", "smut", "blast", "black pod", "Plants become stunted."],
        ],
      },
      {
        week: 4,
        title: "Production of root, tuber and tree crops",
        subtopics: ["Yam production", "Cassava production", "Cocoa production", "Oil palm production"],
        objectives: ["Describe the production of yam", "Describe the production of cassava", "Describe the production of cocoa", "Describe the production of oil palm"],
        lesson: {
          title: "Growing Tubers and Tree Crops",
          summary: "Describe the cultivation of yam, cassava, cocoa and oil palm.",
          minutes: 45,
          notes: `## Yam (*Dioscorea* species)
- types: **white yam** (*D. rotundata*), water yam (*D. alata*), yellow yam (*D. cayenensis*)
- **soil**: deep, fertile, well-drained loam; heavy feeder — first in a rotation
- **planting material**: **yam setts, seed yams or minisetts**; planted on **mounds or ridges**, about 1 m × 1 m, from November to April
- **practices**: **mulching** (capping the mound with dry grass), **staking** the vines, weeding, fertiliser
- **pests**: yam beetle, rodents, nematodes; **diseases**: anthracnose, tuber rot
- **maturity**: **7–10 months**; harvest when leaves yellow and dry
- **storage**: **barns**

## Cassava (*Manihot esculenta*)
- tolerates poor soils and drought; grows on most well-drained soils
- **planting material**: **stem cuttings** 20–25 cm long, planted slanting, about 1 m × 1 m
- **pests**: mealybug, green spider mite, grasshopper; **diseases**: **mosaic** (virus), bacterial blight
- **maturity**: **9–18 months**
- tubers contain **cyanide** (hydrocyanic acid) and must be **processed** (garri, fufu, lafun)

## Cocoa (*Theobroma cacao*)
- needs **high rainfall**, shade when young, deep fertile soil; grown in the south-west (Ondo, Osun, Oyo, Ekiti), Cross River
- raised from **seeds in a nursery** for 5–6 months, then transplanted at 3 m × 3 m under shade (e.g. plantain)
- starts bearing in **3–5 years**
- **pest**: capsid (mirid); **disease**: **black pod** (fungus) and swollen shoot (virus)
- pods harvested with a hooked knife; beans **fermented** for about 5–7 days and **dried**
- **uses**: chocolate, beverages, cocoa butter

## Oil palm (*Elaeis guineensis*)
- high rainfall; southern Nigeria
- **varieties**: **dura** (thick shell), **pisifera** (shell-less), **tenera** (hybrid, thin shell — best)
- seeds **pre-germinated**, raised in pre-nursery and nursery for about a year, then planted **9 m triangular**
- bears in about **3–4 years**
- **products**: **palm oil** (from the mesocarp), **palm kernel oil** and cake (from the kernel), palm wine, brooms, fronds`,
          examples: `**Example 1.** What planting material is used for cassava? *Answer:* **stem cuttings**.

**Example 2.** Why must cassava be processed before eating? *Answer:* It contains **cyanide**.

**Example 3.** From which part of the oil palm fruit is palm oil obtained? *Answer:* the **mesocarp**.`,
        },
        questions: [
          ["E", "Yam is commonly planted on", "mounds or ridges", "flat concrete", "flooded fields", "tree branches", "Loose soil lets tubers expand."],
          ["E", "Cassava is planted using", "stem cuttings", "seeds only", "suckers", "bulbs", "Cuttings of 20–25 cm are used."],
          ["E", "The crop from which chocolate is made is", "cocoa", "cassava", "maize", "yam", "Cocoa beans are processed."],
          ["M", "The botanical name of cassava is", "Manihot esculenta", "Dioscorea rotundata", "Theobroma cacao", "Zea mays", "Cassava is a root crop."],
          ["M", "The botanical name of oil palm is", "Elaeis guineensis", "Theobroma cacao", "Cocos nucifera", "Hevea brasiliensis", "It is native to West Africa."],
          ["M", "Yam vines are supported by", "staking", "pruning", "thinning", "budding", "Stakes expose leaves to sunlight."],
          ["M", "The poisonous substance in cassava tubers is", "cyanide", "caffeine", "nicotine", "starch", "Processing removes it."],
          ["H", "The best oil palm variety, a hybrid with a thin shell, is", "tenera", "dura", "pisifera", "amelonado", "It is dura crossed with pisifera."],
          ["H", "Cocoa beans are fermented after harvest in order to", "develop the chocolate flavour", "increase their size", "kill capsids", "make them germinate", "Fermentation develops flavour."],
          ["H", "Palm kernel oil is obtained from the", "kernel (seed)", "mesocarp", "frond", "trunk", "Palm oil comes from the mesocarp."],
        ],
      },
      {
        week: 5,
        title: "Animal reproduction and improvement",
        subtopics: ["Reproduction terms in farm animals", "Gestation periods", "Methods of animal improvement", "Artificial insemination"],
        objectives: ["Explain reproduction terms used for farm animals", "State the gestation periods of common farm animals", "Describe methods of animal improvement", "Explain artificial insemination and its advantages"],
        lesson: {
          title: "Breeding Better Animals",
          summary: "Explain reproduction terms and methods of improving farm animals.",
          minutes: 40,
          notes: `## Reproduction terms
- **oestrus (heat)** — the period when a female is ready to accept the male
- **mating (service)** — the male deposits sperm in the female
- **fertilisation** — fusion of sperm and egg
- **gestation (pregnancy)** — the period from fertilisation to birth
- **parturition** — the act of giving birth
- **lactation** — milk production
- **weaning** — separating the young from the mother's milk
- **castration** — removing the testes of a male not needed for breeding

## Names for animals and parturition
| Animal | Male | Female | Young | Giving birth | Gestation |
|---|---|---|---|---|---|
| cattle | bull | cow | calf | **calving** | about **283 days** (9 months) |
| sheep | ram | ewe | lamb | **lambing** | about **150 days** (5 months) |
| goat | buck (billy) | doe (nanny) | kid | **kidding** | about **150 days** |
| pig | boar | sow | piglet | **farrowing** | about **114 days** (3 months, 3 weeks, 3 days) |
| rabbit | buck | doe | kit (kitten) | **kindling** | about **31 days** |
| chicken | cock | hen | chick | hatching | incubation **21 days** |

## Animal improvement
developing animals with **better production**: more milk, meat or eggs, faster growth, disease resistance, adaptation.
1. **introduction** — importing **exotic breeds** (e.g. Friesian cattle); they may not adapt and may bring diseases
2. **selection** — choosing the best animals as parents; **culling** poor ones
3. **breeding**:
   - **in-breeding** — mating closely related animals (fixes good traits but may cause weakness)
   - **line-breeding** — mating less closely related animals
   - **cross-breeding** — mating animals of **different breeds** (gives **hybrid vigour**)
   - **out-breeding** — mating unrelated animals of the same breed
   - **upgrading** — repeatedly mating local females with a superior exotic male

## Artificial insemination (AI)
collecting **semen** from a proven male and **placing it in the female** with instruments.
**Advantages:** one bull serves many cows; semen can be transported and stored (frozen); avoids keeping and transporting bulls; controls venereal diseases; allows use of superior sires worldwide.
**Disadvantages:** needs skilled personnel and equipment; heat must be detected accurately.`,
          examples: `**Example 1.** What is the gestation period of a pig? *Answer:* about **114 days** (3 months, 3 weeks, 3 days).

**Example 2.** What is the act of giving birth in goats called? *Answer:* **kidding**.

**Example 3.** Give one advantage of artificial insemination. *Answer:* **One bull can serve many cows**.`,
        },
        questions: [
          ["E", "The period from fertilisation to birth is", "gestation", "lactation", "weaning", "oestrus", "It is the pregnancy period."],
          ["E", "The young of a goat is a", "kid", "lamb", "calf", "piglet", "Goats give birth to kids."],
          ["E", "An adult female pig is a", "sow", "boar", "ewe", "doe", "The male is a boar."],
          ["M", "The act of giving birth in pigs is", "farrowing", "calving", "lambing", "kindling", "Sows farrow piglets."],
          ["M", "The gestation period of a cow is about", "283 days", "114 days", "150 days", "31 days", "It is about nine months."],
          ["M", "The gestation period of a sheep or goat is about", "150 days", "283 days", "21 days", "365 days", "It is about five months."],
          ["M", "Mating animals of different breeds is", "cross-breeding", "in-breeding", "culling", "weaning", "It combines qualities of two breeds."],
          ["H", "The gestation period of a pig is about", "114 days", "150 days", "283 days", "60 days", "Three months, three weeks, three days."],
          ["H", "Placing collected semen into a female using instruments is", "artificial insemination", "natural service", "castration", "upgrading", "No male is physically present."],
          ["H", "Mating closely related animals is called", "in-breeding", "cross-breeding", "out-breeding", "introduction", "It can lead to weakness."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Cattle, sheep and goat production",
        subtopics: ["Breeds of cattle", "Breeds of sheep and goats", "Management of ruminants", "Products and importance"],
        objectives: ["Identify breeds of cattle in Nigeria", "Identify breeds of sheep and goats", "Describe the management of ruminants", "State the products and importance of ruminants"],
        lesson: {
          title: "Rearing Ruminants",
          summary: "Identify breeds of ruminants and describe their management.",
          minutes: 40,
          notes: `## Breeds of cattle
| Breed | Notes |
|---|---|
| **White Fulani (Bunaji)** | white with black ears and muzzle; long horns; the most common; good for beef and milk |
| **Sokoto Gudali** | short horns, large hump; beef and milk |
| **Red Bororo (Rahaji)** | deep red, very long horns |
| **N'Dama** | small, humpless; **trypanotolerant** — kept in the south |
| **Muturu** | small, humpless; trypanotolerant |
| **Kuri** | large bulbous horns; Lake Chad area |
| **exotic**: Friesian (dairy), Jersey (dairy), Hereford (beef) | high producers but less adapted |
- **beef cattle** are kept for meat; **dairy cattle** for milk; **dual-purpose** for both

## Sheep
**Yankasa**, **Uda**, **Balami**, **West African Dwarf (WAD)**.

## Goats
**West African Dwarf** (south; hardy, trypanotolerant), **Red Sokoto (Maradi)** — valued for its **skin** (Morocco leather), **Sahel** goat.

## Management of ruminants
- **housing**: kraals, sheds, pens; dry, ventilated
- **feeding**: grazing on **pasture**; cut forage, hay, silage; crop residues; concentrates and **salt licks**; clean water
- **breeding**: detect heat; ratio of males to females; care of pregnant animals
- **care of the young**: ensure they suck **colostrum** (first milk, rich in antibodies) soon after birth; weaning
- **routine practices**: **identification** (ear tags, branding, tattoo), **castration**, **dehorning**, **hoof trimming**, **dipping/spraying**, **deworming**, **vaccination**, **docking** (cutting tails of lambs)
- **health**: watch for PPR, foot-and-mouth, anthrax, trypanosomiasis, mastitis, worms and ticks

## Pasture
land with grasses and legumes for grazing. Grasses: **guinea grass, elephant grass, giant star grass**; legumes: **centrosema, stylosanthes, pueraria**. Avoid **overgrazing**; practise **rotational grazing**.

## Products
beef, mutton, chevon, **milk**, **hides and skins**, wool, horns, bones, **manure**, farm power (bulls).`,
          examples: `**Example 1.** Name two trypanotolerant cattle breeds. *Answer:* **N'Dama** and **Muturu**.

**Example 2.** Which goat breed is valued for its skin? *Answer:* the **Red Sokoto (Maradi)** goat.

**Example 3.** What is colostrum? *Answer:* The **first milk** after birth, rich in antibodies.`,
        },
        questions: [
          ["E", "The most common cattle breed in Nigeria is the", "White Fulani", "Friesian", "Jersey", "Hereford", "It is also called Bunaji."],
          ["E", "Cattle kept mainly for milk are", "dairy cattle", "beef cattle", "draught cattle", "wild cattle", "Dairy breeds give much milk."],
          ["E", "Land with grasses and legumes for grazing is", "pasture", "barn", "kraal", "paddock house", "Animals graze on pasture."],
          ["M", "A cattle breed that tolerates trypanosomiasis is", "N'Dama", "White Fulani", "Red Bororo", "Friesian", "It survives in tsetse areas."],
          ["M", "The goat breed valued for its high-quality skin is the", "Red Sokoto", "West African Dwarf", "Sahel", "Saanen", "Its skin makes fine leather."],
          ["M", "Yankasa, Uda and Balami are breeds of", "sheep", "goats", "cattle", "pigs", "They are Nigerian sheep breeds."],
          ["M", "The first milk produced after birth, rich in antibodies, is", "colostrum", "whey", "cream", "curd", "It protects the newborn."],
          ["H", "Removing the horns of cattle to prevent injuries is", "dehorning", "docking", "castration", "branding", "Hornless animals are safer to handle."],
          ["H", "A legume commonly grown in pastures is", "centrosema", "guinea grass", "elephant grass", "spear grass", "It adds protein and nitrogen."],
          ["H", "Allowing too many animals to graze an area until the grass is destroyed is", "overgrazing", "rotational grazing", "zero grazing", "paddocking", "It exposes soil to erosion."],
        ],
      },
      {
        week: 2,
        title: "Pig and rabbit production",
        subtopics: ["Breeds of pigs", "Management of pigs", "Breeds of rabbits", "Management of rabbits"],
        objectives: ["Identify breeds of pigs", "Describe the management of pigs", "Identify breeds of rabbits", "Describe the management of rabbits"],
        lesson: {
          title: "Rearing Pigs and Rabbits",
          summary: "Describe the breeds and management of pigs and rabbits.",
          minutes: 40,
          notes: `## Pigs
**Breeds:** **Large White (Yorkshire)**, **Landrace**, **Duroc**, **Hampshire**, Berkshire, and hardy **local pigs**.
**Terms:** boar (male), sow (female), **gilt** (young female that has not farrowed), piglet, **barrow** (castrated male), **litter** (piglets born at one farrowing).

### Advantages of pig production
- very **prolific** — a sow can farrow about **8–12 piglets** twice a year
- **fast growth** and efficient conversion of feed to meat
- **omnivorous** — eat kitchen waste, by-products, grains
- short gestation (**114 days**)
- high **dressing percentage**; dung is good manure

### Management
- **housing**: pens (sties) with concrete floors, good drainage, shade and a **wallow** (pigs have few sweat glands and overheat easily); **farrowing crates** protect piglets from being crushed
- **feeding**: balanced concentrates, clean water; creep feed for piglets
- **piglets**: **iron injection** to prevent **piglet anaemia**; clip needle teeth; wean at about 6–8 weeks
- **health**: African swine fever, worms, mange, lice; deworm and maintain hygiene
- some religions forbid pork, which limits the market in some areas

## Rabbits
**Breeds:** **New Zealand White**, **Californian**, **Chinchilla**, **Flemish Giant**, Dutch.
**Terms:** buck (male), doe (female), **kit/kitten** (young), **kindling** (giving birth).

### Advantages
- **prolific** — gestation about **31 days**; 4–8 kits per litter; several litters a year
- need **little space and capital**
- eat **forage** and kitchen waste
- **white meat** low in fat and cholesterol
- fur and manure; quiet animals suitable for backyards

### Management
- **housing**: **hutches** raised above the ground, dry and well ventilated, safe from predators (dogs, snakes) and rain
- **feeding**: fresh forage (e.g. tridax, potato vines), pellets, clean water
- **breeding**: take the **doe to the buck's hutch**; provide a **nest box** before kindling; wean at 4–6 weeks
- **health**: coccidiosis, ear mange (ear canker), snuffles; keep hutches clean
- handle by holding the loose skin over the shoulders and supporting the hindquarters — **never lift by the ears**`,
          examples: `**Example 1.** Why are piglets given iron injections? *Answer:* To prevent **piglet anaemia**.

**Example 2.** What is the house of a rabbit called? *Answer:* a **hutch**.

**Example 3.** Give one advantage of rabbit production. *Answer:* Rabbits are **prolific** and need little space.`,
        },
        questions: [
          ["E", "The group of piglets born to a sow at one time is a", "litter", "herd", "flock", "brood", "A sow farrows a litter."],
          ["E", "A young rabbit is called a", "kit", "kid", "calf", "lamb", "It is also called a kitten."],
          ["E", "Which of these is a breed of pig?", "Large White", "White Fulani", "Yankasa", "Chinchilla", "It is also called Yorkshire."],
          ["M", "A young female pig that has not yet farrowed is a", "gilt", "sow", "boar", "barrow", "She becomes a sow after farrowing."],
          ["M", "Piglets are given iron injections to prevent", "anaemia", "mange", "swine fever", "worms", "Sow's milk is low in iron."],
          ["M", "The act of giving birth in rabbits is", "kindling", "farrowing", "kidding", "lambing", "Does kindle kits."],
          ["M", "Which of these is a breed of rabbit?", "New Zealand White", "Landrace", "Duroc", "N'Dama", "It is a popular meat rabbit."],
          ["H", "Pigs need shade and a wallow because they", "have few sweat glands and overheat easily", "cannot drink water", "dislike mud", "are ruminants", "They cool themselves in water or mud."],
          ["H", "A farrowing crate is used to", "prevent the sow from crushing her piglets", "castrate boars", "store pig feed", "transport rabbits", "It restricts the sow's movement."],
          ["H", "For mating rabbits, it is recommended to", "take the doe to the buck's hutch", "take the buck to the doe's hutch", "leave them in separate hutches", "mix all rabbits together", "The doe defends her own hutch."],
        ],
      },
      {
        week: 3,
        title: "Snail, bee and grasscutter production",
        subtopics: ["Snail farming", "Bee-keeping", "Grasscutter farming", "Benefits of micro-livestock"],
        objectives: ["Describe snail farming", "Describe bee-keeping", "Describe grasscutter farming", "State the benefits of micro-livestock production"],
        lesson: {
          title: "Small Animals, Big Opportunities",
          summary: "Describe snail, bee and grasscutter production.",
          minutes: 40,
          notes: `## Snail farming (heliculture)
- common species: **Archachatina marginata** (giant West African snail), **Achatina achatina** (giant Ghana/tiger snail), **Achatina fulica**
- snails are **hermaphrodites** (each has male and female organs) but usually mate before laying eggs
- **housing (snailery)**: hutch boxes, trench pens, old tyres or drums, free-range pens — with **loose, moist, humus-rich soil** (not acidic), shade and covers against predators
- **feeding**: pawpaw leaves and fruits, cocoyam leaves, plantain, cabbage, fruit peels; a **calcium** source (eggshell, limestone) for strong shells; clean water
- avoid **salt** — it kills snails
- **predators and pests**: ants, termites, rats, snakes, lizards, birds
- snails are active at night and in wet weather; they **aestivate** (become inactive) in dry conditions
- **uses**: meat rich in protein and iron, low in fat; shells for ornaments and feed

## Bee-keeping (apiculture)
- the honey bee: ***Apis mellifera***
- a colony has **one queen** (lays eggs), **drones** (males) and **workers** (sterile females that gather nectar, build combs and defend the hive)
- **hives**: traditional (clay pots, logs, calabashes), **Kenyan top-bar hive**, **Langstroth hive**
- site the **apiary** near flowering plants and water, away from homes and roads
- **equipment**: bee suit and veil, gloves, **smoker** (calms the bees), hive tool
- **products**: **honey**, **beeswax**, propolis, royal jelly, bee venom
- bees are important **pollinators** of crops

## Grasscutter farming
- the **grasscutter (cane rat)**, *Thryonomys swinderianus*, is a large rodent whose meat is highly valued
- kept in **cages or pens** in **colonies** of one male with several females
- **feeds**: elephant grass, guinea grass, sugar cane, cassava, maize, pellets
- gestation about **5 months**; 2 litters a year

## Benefits of micro-livestock
low capital and space; quick returns; high demand and good prices; nutritious meat; can be done in backyards; reduces hunting pressure on wild populations; employment for youths.`,
          examples: `**Example 1.** What does it mean that snails are hermaphrodites? *Answer:* Each snail has **both male and female** reproductive organs.

**Example 2.** What is the function of the queen bee? *Answer:* She **lays eggs**.

**Example 3.** What is a smoker used for in bee-keeping? *Answer:* To **calm the bees**.`,
        },
        questions: [
          ["E", "Snail farming is called", "heliculture", "apiculture", "sericulture", "aquaculture", "Helix refers to snails."],
          ["E", "The member of a bee colony that lays eggs is the", "queen", "drone", "worker", "soldier", "There is one queen per colony."],
          ["E", "The main product of bee-keeping is", "honey", "milk", "wool", "eggs for eating", "Bees make honey from nectar."],
          ["M", "Snails need a calcium source such as eggshell for", "strong shells", "faster movement", "better eyesight", "colour", "Shells are made of calcium compounds."],
          ["M", "The bees that gather nectar and build combs are the", "workers", "drones", "queens", "larvae", "Workers are sterile females."],
          ["M", "The device used to calm bees during harvesting is the", "smoker", "hive tool", "veil", "extractor", "Smoke makes bees less aggressive."],
          ["M", "A substance that must be kept away from snails because it kills them is", "salt", "water", "calcium", "pawpaw", "Salt dehydrates snails."],
          ["H", "Snails have both male and female reproductive organs, so they are", "hermaphrodites", "ruminants", "marsupials", "rodents", "Each snail is both sexes."],
          ["H", "The grasscutter is a type of", "rodent", "bird", "reptile", "mollusc", "It is also called the cane rat."],
          ["H", "A place where bee hives are kept is an", "apiary", "aviary", "aquarium", "arboretum", "Apis is the honey bee."],
        ],
      },
      {
        week: 4,
        title: "Factors of production and farm management",
        subtopics: ["Land, labour, capital and management", "Rewards of the factors of production", "Functions of a farm manager", "Simple farm planning and budgeting"],
        objectives: ["Explain the factors of agricultural production", "State the reward for each factor", "State the functions of a farm manager", "Prepare a simple farm budget"],
        lesson: {
          title: "Running the Farm as a Business",
          summary: "Explain the factors of production and basic farm management.",
          minutes: 40,
          notes: `## Factors of production
| Factor | Meaning | Reward |
|---|---|---|
| **land** | the natural resource on which production takes place (soil, water, forests) | **rent** |
| **labour** | human effort, physical and mental | **wages / salaries** |
| **capital** | man-made assets used in production — money, tools, machines, buildings, seeds, livestock | **interest** |
| **management (entrepreneur)** | organises the other factors, takes decisions and bears risks | **profit** |

### Land
fixed in supply; immobile; varies in fertility; can appreciate in value.

### Labour
- **family labour**, **hired labour** (permanent, casual), **communal labour**
- **skilled**, semi-skilled and unskilled labour
- labour is **mobile** and can be improved by training

### Capital
- **fixed capital** — lasts long: land, buildings, machines
- **working (circulating) capital** — used up in production: seeds, feed, fertiliser, fuel, wages
- sources: savings, loans, co-operatives, grants

## Functions of a farm manager
**planning** (what, how and how much to produce); **organising** resources; **directing and supervising** workers; **co-ordinating** activities; **controlling** (record keeping, budgeting); **marketing** produce; **evaluating** results; taking **decisions** and bearing **risks**.

## Farm planning and budgeting
A **farm budget** is an **estimate of expected income and expenditure** for a future period.
Example: 1 hectare of maize
| Item | ₦ |
|---|---|
| land preparation | 60,000 |
| seeds | 20,000 |
| fertiliser | 90,000 |
| labour and weeding | 70,000 |
| harvesting and transport | 40,000 |
| **total cost** | **280,000** |
| expected yield 3 tonnes at ₦150,000 per tonne | **450,000** |
| **expected profit** | **170,000** |

## Risks in agriculture
weather, pests and diseases, price changes, theft, fire. Managed by **diversification**, **insurance**, storage, irrigation and good records.`,
          examples: `**Example 1.** What is the reward for capital? *Answer:* **interest**.

**Example 2.** Is fertiliser fixed or working capital? *Answer:* **working capital**.

**Example 3.** Expected income ₦450,000; cost ₦280,000. Find the expected profit. *Answer:* **₦170,000**.`,
        },
        questions: [
          ["E", "The reward for labour is", "wages", "rent", "interest", "profit", "Workers are paid wages."],
          ["E", "The reward for land is", "rent", "wages", "interest", "profit", "Landowners receive rent."],
          ["E", "Human effort used in production is", "labour", "land", "capital", "management", "It may be physical or mental."],
          ["M", "The reward for capital is", "interest", "rent", "wages", "profit", "Lenders earn interest."],
          ["M", "The factor that organises the others and bears risk is", "management", "land", "labour", "capital", "The entrepreneur earns profit."],
          ["M", "Tractors and farm buildings are examples of", "fixed capital", "working capital", "labour", "land", "They last for many years."],
          ["M", "An estimate of expected income and expenditure for a future period is a", "farm budget", "farm diary", "farm inventory", "payroll", "It guides planning."],
          ["H", "Seeds, feed and fertiliser are examples of", "working capital", "fixed capital", "land", "management", "They are used up in production."],
          ["H", "A maize enterprise expected to earn ₦450,000 at a cost of ₦280,000 has an expected profit of", "₦170,000", "₦730,000", "₦280,000", "₦180,000", "450,000 − 280,000."],
          ["H", "Growing several crops and keeping animals to reduce the risk of total loss is", "diversification", "specialisation", "monoculture", "fragmentation", "Risk is spread over enterprises."],
        ],
      },
      {
        week: 5,
        title: "Agriculture and the environment",
        subtopics: ["Effects of farming on the environment", "Climate change and agriculture", "Sustainable agricultural practices", "Irrigation and drainage"],
        objectives: ["Explain the effects of farming practices on the environment", "Explain how climate change affects agriculture", "Describe sustainable agricultural practices", "Describe irrigation and drainage"],
        lesson: {
          title: "Farming Without Harming the Land",
          summary: "Explain sustainable agriculture, irrigation and drainage.",
          minutes: 40,
          notes: `## Effects of farming on the environment
| Practice | Harmful effect |
|---|---|
| **bush burning** | destroys humus, soil organisms and wildlife; air pollution; exposes soil to erosion |
| **deforestation** | erosion, loss of wildlife, reduced rainfall |
| **overgrazing** | removes vegetation cover; erosion and desert encroachment |
| **excess fertiliser** | pollutes streams and makes soil acidic |
| **pesticide misuse** | kills useful insects, poisons water and food |
| **continuous cropping** | exhausts soil nutrients |
| **tillage on slopes** | erosion |

## Climate change
long-term change in **temperature and rainfall patterns**, largely due to **greenhouse gases** (carbon dioxide, methane) from burning fuels, deforestation and some farming activities.
**Effects on agriculture:** unpredictable rains and late onset; **droughts** and **floods**; shorter growing seasons; new pests and diseases; **desertification** in the north and shrinking of **Lake Chad**; heat stress in animals; lower yields.

## Sustainable agricultural practices
farming that meets today's needs **without damaging the land for future generations**:
- **crop rotation**, mixed cropping and cover crops
- **organic manure** and compost; moderate fertiliser use
- **agroforestry** — growing trees with crops (e.g. **alley cropping**)
- **zero or minimum tillage**
- **integrated pest management**
- **erosion control** (contour ridges, terraces)
- **afforestation** and no bush burning
- **drought-tolerant, early-maturing varieties**
- water conservation and controlled grazing

## Irrigation
the **artificial supply of water** to crops.
| Type | Description |
|---|---|
| **surface (flood, furrow, basin)** | water flows over the land or in furrows |
| **sprinkler (overhead)** | water sprayed like rain |
| **drip (trickle)** | water drips slowly at the plant roots — **most water-saving** |
| **sub-surface** | water supplied below the soil surface |
Advantages: dry-season farming; more than one crop a year; higher yield. Problems: cost; **salinity**; water-borne diseases; waterlogging.

## Drainage
the **removal of excess water** from the soil by open ditches or underground pipes; it improves aeration and allows machines to work.`,
          examples: `**Example 1.** Which irrigation method saves the most water? *Answer:* **drip irrigation**.

**Example 2.** Give one effect of climate change on farming. *Answer:* **Unpredictable rainfall** (or droughts, floods).

**Example 3.** What is drainage? *Answer:* The **removal of excess water** from the soil.`,
        },
        questions: [
          ["E", "The artificial supply of water to crops is", "irrigation", "drainage", "erosion", "leaching", "It allows dry-season farming."],
          ["E", "The removal of excess water from the soil is", "drainage", "irrigation", "mulching", "liming", "Waterlogged soil is drained."],
          ["E", "A harmful effect of bush burning is that it", "destroys humus and soil organisms", "adds humus", "increases wildlife", "improves rainfall", "Organic matter is burnt."],
          ["M", "The irrigation method in which water is sprayed like rain is", "sprinkler irrigation", "drip irrigation", "furrow irrigation", "basin irrigation", "It is overhead irrigation."],
          ["M", "The irrigation method that delivers water slowly at the roots and saves water is", "drip irrigation", "flood irrigation", "sprinkler irrigation", "furrow irrigation", "Little water is wasted."],
          ["M", "Growing trees together with crops on the same land is", "agroforestry", "monoculture", "deforestation", "overgrazing", "Alley cropping is an example."],
          ["M", "Gases such as carbon dioxide and methane that warm the earth are", "greenhouse gases", "noble gases", "fertiliser gases", "fumigants", "They trap heat."],
          ["H", "Farming that meets present needs without damaging the land for the future is", "sustainable agriculture", "shifting cultivation", "subsistence farming", "extensive grazing", "It conserves resources."],
          ["H", "A problem that may result from poorly managed irrigation is", "soil salinity", "soil dryness", "less weeds", "lower humidity", "Salts build up in the soil."],
          ["H", "One effect of climate change on agriculture in northern Nigeria is", "desertification", "more forests", "longer rainy seasons", "more swamps", "Drier conditions spread the desert."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "BECE revision: introduction to agriculture and soil",
        subtopics: ["Meaning, branches and forms of agriculture", "Farm tools and machinery", "Soil formation, types and fertility", "Erosion and conservation"],
        objectives: ["Recall the meaning, branches and forms of agriculture", "Recall the uses and maintenance of farm tools and machines", "Recall soil types, composition and fertility management", "Recall types of erosion and conservation methods"],
        lesson: {
          title: "Revising Agriculture and Soil",
          summary: "Consolidate introductory agriculture and soil topics for the BECE.",
          minutes: 45,
          notes: `## Agriculture
art and science of cultivating crops and rearing animals; from *ager* (field) and *cultura* (cultivation). Importance: food, income, employment, raw materials, foreign exchange.
Branches: crop production, horticulture (pomology, olericulture, floriculture), animal production, soil science, agricultural engineering, fisheries, forestry, economics, extension, apiculture.
Forms: subsistence (small, family labour, simple tools) vs commercial (large, machines, for sale). Systems: shifting cultivation, bush fallowing, crop rotation, mixed cropping, mixed farming, nomadic herding.

## Tools and machines
cutlass (clearing), hoe (ridging, weeding), spade (digging), rake (levelling), hand trowel (transplanting), sickle (harvesting rice), pickaxe (hard soil), secateurs (pruning). Maintenance: clean, oil, sharpen, store dry.
Machines: tractor, plough (primary tillage), harrow (secondary tillage), ridger, planter, sprayer, combine harvester. Mechanisation: saves time and labour; costly; unsuitable for small farms.

## Soil
weathering: physical, chemical, biological. Types: sandy (coarse, drains fast), clay (fine, holds water), loam (best). Components: mineral matter, organic matter, water, air, organisms. Profile: topsoil, subsoil, parent rock, bedrock.
Nutrients: macro (N, P, K, Ca, Mg, S), micro (Fe, Zn, Mn, Cu, B, Mo). N — leaf growth (yellowing if lacking); P — roots; K — strong stems (scorched edges if lacking).
Manures: farmyard, compost, green manure. Fertilisers: urea, NPK, SSP, muriate of potash. Application: broadcasting, ring, band, top dressing, foliar.
Loss of fertility: leaching, erosion, continuous cropping, burning.

## Erosion and conservation
splash, sheet, rill, gully; wind erosion. Control: cover crops, mulching, contour ridging, terracing, strip cropping, windbreaks, afforestation.`,
          examples: `**Example 1.** Which soil type is best for crops? *Answer:* **loam**.

**Example 2.** Which implement performs primary tillage? *Answer:* the **plough**.

**Example 3.** Which nutrient deficiency causes yellow leaves? *Answer:* **nitrogen**.`,
        },
        questions: [
          ["E", "A farmer moving tomato seedlings from the nursery to the field needs a", "hand trowel", "axe", "sickle", "pickaxe", "It lifts seedlings with soil."],
          ["E", "The soil type that drains water fastest is", "sandy soil", "clay soil", "loam", "humus", "It has large particles."],
          ["E", "Farming mainly to feed one's family is", "subsistence agriculture", "commercial agriculture", "plantation agriculture", "ranching", "Little is sold."],
          ["M", "The growing of flowers and ornamental plants is", "floriculture", "pomology", "olericulture", "apiculture", "It is part of horticulture."],
          ["M", "The nutrient needed for strong root development is", "phosphorus", "nitrogen", "iron", "magnesium", "Phosphorus supports roots."],
          ["M", "Ridges made across a slope to control erosion are", "contour ridges", "mounds", "terraces only", "furrows down the slope", "They slow running water."],
          ["M", "A fertiliser that contains nitrogen, phosphorus and potassium is", "NPK", "urea", "lime", "SSP", "It is a compound fertiliser."],
          ["H", "The erosion that removes a thin uniform layer of topsoil is", "sheet erosion", "gully erosion", "rill erosion", "wind erosion", "It is difficult to detect."],
          ["H", "Crops and livestock produced together on one farm is", "mixed farming", "mixed cropping", "crop rotation", "monoculture", "Both enterprises are combined."],
          ["H", "Decayed organic matter that improves soil structure and colour is", "humus", "silt", "gravel", "lime", "It is dark and fertile."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: crop production",
        subtopics: ["Classification and propagation of crops", "Cultural practices", "Weeds, pests and diseases", "Processing, storage and marketing"],
        objectives: ["Recall the classification and propagation of crops", "Recall pre-planting, planting and post-planting practices", "Recall weeds, pests, diseases and their control", "Recall processing, storage and marketing of produce"],
        lesson: {
          title: "Revising Crop Production",
          summary: "Consolidate crop production topics for the BECE.",
          minutes: 45,
          notes: `## Classification
life cycle: annual (maize), biennial (onion), perennial (cocoa). Use: cereals, legumes, tubers, vegetables, fruits, oil, beverage, fibre, latex, spice crops. Monocots (maize — parallel veins) vs dicots (cowpea — net veins).

## Propagation
seed (maize, rice, cowpea); vegetative: cuttings (cassava), setts (yam), suckers (plantain), rhizomes (ginger), bulbs (onion), budding and grafting (citrus, mango).

## Botanical names
maize *Zea mays*; rice *Oryza sativa*; cowpea *Vigna unguiculata*; groundnut *Arachis hypogaea*; cassava *Manihot esculenta*; yam *Dioscorea* spp.; cocoa *Theobroma cacao*; oil palm *Elaeis guineensis*.

## Cultural practices
pre-planting: clearing, stumping, ploughing, harrowing, ridging. Planting: spacing, broadcasting, drilling, transplanting. Post-planting: thinning, supplying, weeding, mulching, staking, fertiliser application, pest control. Harvesting.

## Weeds
plants where they are not wanted; spear grass (*Imperata cylindrica*), guinea grass (*Panicum maximum*), siam weed (*Chromolaena odorata*), Striga (parasitic). Control: hand weeding, mulching, cover crops, herbicides, crop rotation.

## Pests
biting and chewing (grasshoppers), piercing and sucking (aphids, mealybugs), borers (stem borers, weevils); birds, rodents, nematodes. Control: physical, cultural, chemical (insecticides), biological, IPM.

## Diseases
fungal: maize smut, black pod, rice blast; viral: cassava mosaic (whitefly), groundnut rosette (aphid); bacterial: cassava blight; nematode: root knot. Control: resistant varieties, clean seed, rotation, roguing, fungicides.

## Crop improvement
introduction, selection, hybridisation (hybrid vigour).

## After harvest
processing (cassava → garri; rice parboiling; cocoa fermenting); storage (crib, silo, barn, rhombus); storage pests (weevils, rats); marketing functions (grading, packaging, transport, storage).`,
          examples: `**Example 1.** Which practice supports climbing yam vines? *Answer:* **staking**.

**Example 2.** Which insect transmits cassava mosaic? *Answer:* the **whitefly**.

**Example 3.** Where are maize cobs stored? *Answer:* in a **crib**.`,
        },
        questions: [
          ["E", "A crop that completes its life cycle in one year is", "an annual crop", "a biennial crop", "a perennial crop", "a tree crop", "Maize is an example."],
          ["E", "Plantain is propagated by", "suckers", "seeds", "cuttings", "bulbs", "Suckers grow from the base."],
          ["E", "Chemicals used to kill weeds are", "herbicides", "insecticides", "rodenticides", "fungicides", "They kill unwanted plants."],
          ["M", "The botanical name of cocoa is", "Theobroma cacao", "Elaeis guineensis", "Zea mays", "Oryza sativa", "It is a beverage crop."],
          ["M", "Removing excess seedlings to avoid overcrowding is", "thinning", "supplying", "mulching", "staking", "It leaves vigorous seedlings."],
          ["M", "Aphids damage crops by", "piercing and sucking sap", "biting and chewing leaves", "boring into stems", "eating roots only", "They have needle-like mouthparts."],
          ["M", "Black pod disease of cocoa is caused by a", "fungus", "virus", "bacterium", "nematode", "Pods rot and blacken."],
          ["H", "A parasitic weed of maize and sorghum is", "Striga", "Tridax", "Sida", "Talinum", "It feeds on the crop's roots."],
          ["H", "Crossing two parent plants to obtain better offspring is", "hybridisation", "selection", "introduction", "thinning", "It may give hybrid vigour."],
          ["H", "The disease of groundnut transmitted by aphids is", "rosette", "smut", "blast", "blight of cassava", "It is a virus disease."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: animal production",
        subtopics: ["Classification and feeding of farm animals", "Management systems and poultry", "Parasites and diseases", "Reproduction, improvement and breeds"],
        objectives: ["Recall classification and feeding of farm animals", "Recall livestock management systems and poultry management", "Recall livestock parasites, diseases and their control", "Recall reproduction terms, improvement methods and breeds"],
        lesson: {
          title: "Revising Animal Production",
          summary: "Consolidate animal production topics for the BECE.",
          minutes: 45,
          notes: `## Classification
ruminants (cattle, sheep, goats — four stomach compartments: rumen, reticulum, omasum, abomasum) vs non-ruminants (pigs, poultry, rabbits). Meat: beef, mutton, chevon, pork. Poultry have a crop and gizzard.

## Feeding
concentrates (maize, groundnut cake, fish meal), roughages (grass, hay, silage), supplements (bone meal, oyster shell, salt lick). Balanced, maintenance and production rations.

## Management systems
extensive (free range — cheap, risky), intensive (confined — productive, costly), semi-intensive. Housing: ventilated, dry, clean, secure.

## Poultry
layers (eggs), broilers (meat, 6–8 weeks); incubation 21 days; brooding (heat for chicks); deep litter and battery cages; debeaking; culling; vaccination.

## Parasites
ecto: ticks, lice, mites, fleas, tsetse fly — control by dipping, spraying. Endo: roundworms, tapeworms, liver fluke (snail host), coccidia — control by deworming, hygiene, rotational grazing.

## Diseases
viral: Newcastle, fowl pox, foot-and-mouth, PPR, African swine fever, rabies. Bacterial: anthrax, brucellosis, tuberculosis, mastitis. Protozoan: trypanosomiasis, coccidiosis. Zoonoses: anthrax, rabies, TB. Control: vaccination, sanitation, quarantine, isolation, vet treatment.

## Reproduction
gestation: cow 283 days; sheep/goat 150; pig 114; rabbit 31. Parturition: calving, lambing, kidding, farrowing, kindling. Colostrum; weaning; castration.
Improvement: introduction, selection, breeding (in-breeding, cross-breeding), artificial insemination.

## Breeds
cattle: White Fulani, Sokoto Gudali, N'Dama, Muturu; sheep: Yankasa, Uda, Balami; goats: West African Dwarf, Red Sokoto; pigs: Large White, Landrace; rabbits: New Zealand White, Chinchilla.

## Others
fish farming (catfish, tilapia; fingerlings; smoking); snails (*Archachatina marginata*); bees (queen, drones, workers; honey).`,
          examples: `**Example 1.** Name the true stomach of a ruminant. *Answer:* the **abomasum**.

**Example 2.** How long is the incubation period of chicken eggs? *Answer:* **21 days**.

**Example 3.** Which parasite has the water snail as intermediate host? *Answer:* the **liver fluke**.`,
        },
        questions: [
          ["E", "Which of these animals chews the cud?", "sheep", "pig", "rabbit", "chicken", "Sheep are ruminants."],
          ["E", "Grass and hay are classified as", "roughages", "concentrates", "supplements", "additives", "They are high in fibre."],
          ["E", "The incubation period of chicken eggs is", "21 days", "31 days", "114 days", "150 days", "Three weeks. Answer: 21 days."],
          ["M", "The first compartment of the ruminant stomach, where fermentation occurs, is the", "rumen", "abomasum", "omasum", "gizzard", "It is the largest compartment."],
          ["M", "Ticks on cattle are controlled by", "dipping or spraying", "deworming", "debeaking", "brooding", "Acaricides kill ticks."],
          ["M", "The act of giving birth in cattle is", "calving", "farrowing", "kindling", "kidding", "Cows give birth to calves."],
          ["M", "A disease that can pass from animals to humans is", "rabies", "Newcastle disease", "coccidiosis of poultry", "African swine fever", "It is a zoonosis."],
          ["H", "The gestation period of a rabbit is about", "31 days", "114 days", "150 days", "283 days", "About one month."],
          ["H", "A cattle breed kept in the humid south because it tolerates trypanosomiasis is", "Muturu", "White Fulani", "Sokoto Gudali", "Red Bororo", "It is small and humpless."],
          ["H", "Feed given to an animal above its maintenance needs for growth or milk is a", "production ration", "maintenance ration", "starter ration only", "roughage ration", "It supports production."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: agricultural economics and mixed practice",
        subtopics: ["Factors of production and farm records", "Marketing, co-operatives and credit", "Extension, forestry and environment", "Mixed practice test"],
        objectives: ["Recall factors of production, farm records and accounts", "Recall marketing, co-operatives and credit", "Recall extension, forestry and environmental issues", "Complete a mixed BECE-style practice test"],
        lesson: {
          title: "Revising Agricultural Economics",
          summary: "Consolidate agricultural economics and practise mixed questions.",
          minutes: 45,
          notes: `## Factors of production
land (rent), labour (wages), capital (interest), management (profit). Fixed capital (buildings, machines) vs working capital (seed, feed).

## Farm records
diary, inventory, production, sales, purchase, labour records, cash book. Profit = income − expenditure. Depreciation; assets and liabilities; budget.

## Marketing
functions: assembling, grading, packaging, transport, storage, financing, risk bearing. Agents: farmers, middlemen, co-operatives. Problems: poor roads, poor storage, price fluctuation, many middlemen.

## Co-operatives and credit
voluntary association; one member, one vote; producers', marketing, consumers', thrift and credit. Credit: short, medium, long term; sources — banks, Bank of Agriculture, co-operatives, money lenders, esusu. Problems: collateral, high interest, diversion. Subsidy.

## Extension
link between research and farmers; individual, group (method and result demonstrations) and mass methods. Programmes: OFN (1976), Green Revolution (1980), RBDAs, ADPs.

## Forestry
products: timber, fuel, food, medicine. Trees: iroko, mahogany, obeche, teak, gmelina. Deforestation → erosion, desertification. Management: regulation, selective felling, afforestation, taungya.

## Environment
climatic (rainfall, temperature, sunlight, humidity, wind), edaphic and biotic factors; vegetation zones; climate change; sustainable practices; irrigation (surface, sprinkler, drip) and drainage.

## Land
uses; land tenure; Land Use Act 1978 (Governor holds land in trust).

## Exam tips
read each question carefully; note words such as **NOT** and **EXCEPT**; eliminate wrong options; answer all questions; shade neatly.`,
          examples: `**Example 1.** What is the reward for management? *Answer:* **profit**.

**Example 2.** Income ₦320,000 and expenditure ₦250,000 give what profit? *Answer:* **₦70,000**.

**Example 3.** Which extension method shows farmers how to do a practice? *Answer:* **method demonstration**.`,
        },
        questions: [
          ["E", "The reward for management (the entrepreneur) is", "profit", "rent", "wages", "interest", "The entrepreneur bears risk."],
          ["E", "A farm record listing all assets is the", "inventory", "diary", "payroll", "sales record", "It shows what the farm owns."],
          ["E", "Planting trees to replace those cut down is", "reafforestation", "deforestation", "lumbering", "overgrazing", "The forest is renewed."],
          ["M", "An income of ₦320,000 and expenditure of ₦250,000 give a profit of", "₦70,000", "₦570,000", "₦250,000", "₦60,000", "320,000 − 250,000."],
          ["M", "The co-operative principle of democratic control means", "one member, one vote", "one share, one vote", "the richest member decides", "government decides", "All members are equal."],
          ["M", "A loan to be repaid within one farming season is", "short-term credit", "long-term credit", "medium-term credit", "a subsidy", "It covers seasonal inputs."],
          ["M", "The programme that urged every Nigerian to grow food, Operation Feed the Nation, began in the year", "1976", "1980", "1986", "1960", "It promoted farming by all."],
          ["H", "Low prices at harvest followed by high prices later is called", "price fluctuation", "price control", "subsidy", "depreciation", "Supply changes through the year."],
          ["H", "Under the Land Use Act of 1978, all land in a state is vested in the", "Governor", "local chief", "President", "farmer", "He holds it in trust for the people."],
          ["H", "The irrigation method that wets only the root zone and saves most water is", "drip irrigation", "flood irrigation", "basin irrigation", "sprinkler irrigation", "Water drips at the roots."],
        ],
      },
    ],
  },
];
