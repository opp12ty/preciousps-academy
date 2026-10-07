import type { TermPlan } from "../types";

/** SS2 Agricultural Science — original Precious PS content aligned to the senior secondary syllabus (WAEC/NECO). */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Insect pests of crops in detail",
        subtopics: ["Life cycles of insects", "Field pests and their damage", "Storage pests", "Economic importance of insect pests"],
        objectives: ["Distinguish complete and incomplete metamorphosis", "Describe important field pests and the damage they cause", "Describe important storage pests", "Explain the economic importance of insect pests"],
        lesson: {
          title: "Know Your Insect Pests",
          summary: "Describe the life cycles, damage and importance of major insect pests.",
          minutes: 45,
          notes: `## Life cycles
- **complete metamorphosis**: **egg → larva → pupa → adult** — butterflies and moths (larvae are caterpillars), beetles and weevils (grubs), flies (maggots). The **larva** is usually the damaging stage.
- **incomplete metamorphosis**: **egg → nymph → adult** — grasshoppers, locusts, aphids, cotton stainers, mirids, termites. Nymphs resemble small adults and feed in the same way.

## Important field pests
| Pest | Crop | Damage |
|---|---|---|
| **maize stem borer** (*Busseola fusca*) | maize, sorghum | larvae bore into stems causing "dead heart" and lodging |
| **army worm** (*Spodoptera*) | maize, cereals | caterpillars defoliate plants |
| **variegated grasshopper** (*Zonocerus variegatus*) | cassava, vegetables | chews leaves and bark |
| **cassava mealybug** (*Phenacoccus manihoti*) | cassava | sucks sap; bunchy top; stunting |
| **yam beetle** (*Heteroligus meles*) | yam | adults bore holes in tubers |
| **cocoa mirid (capsid)** (*Sahlbergella singularis*) | cocoa | sucks sap from pods and shoots; lesions and die-back |
| **cotton stainer** (*Dysdercus* species) | cotton | sucks sap from bolls; stains lint |
| **cotton bollworm** | cotton | larvae bore into bolls |
| **aphids** (*Aphis craccivora*) | cowpea, groundnut | suck sap; transmit rosette virus |
| **pod borer** (*Maruca*) | cowpea | larvae feed on flowers and pods |
| **whitefly** (*Bemisia tabaci*) | cassava, tomato | sucks sap; transmits mosaic and leaf curl viruses |
| **rhinoceros beetle** | oil palm, coconut | bores into the growing point |

## Storage pests
| Pest | Produce |
|---|---|
| **maize weevil** (*Sitophilus zeamais*) | maize, rice |
| **cowpea bruchid** (*Callosobruchus maculatus*) | cowpea |
| **larger grain borer** | maize, dried cassava |
| **flour beetle** (*Tribolium*) | flour, milled products |

## Economic importance
- reduce **yield** and **quality**; lower market value
- reduce **viability** of seeds
- **transmit diseases** (vectors)
- increase **cost of production** through control measures
- cause total crop failure and **famine** in outbreaks (locusts)
- damaged produce may contain toxins and frass
- some insects are **beneficial**: bees and butterflies **pollinate**; ladybirds and wasps are **natural enemies**; silkworms and bees give products`,
          examples: `**Example 1.** Name the stages of complete metamorphosis. *Answer:* **egg, larva, pupa, adult**.

**Example 2.** Which insect is the main storage pest of cowpea? *Answer:* the **cowpea bruchid** (*Callosobruchus maculatus*).

**Example 3.** Which stage of the stem borer damages maize? *Answer:* the **larva**.`,
        },
        questions: [
          ["E", "The stages egg, larva, pupa and adult describe", "complete metamorphosis", "incomplete metamorphosis", "asexual reproduction", "moulting only", "There are four stages."],
          ["E", "The young stage of a grasshopper that resembles the adult is the", "nymph", "larva", "pupa", "grub", "Grasshoppers have incomplete metamorphosis."],
          ["E", "Insects that carry disease organisms from plant to plant are", "vectors", "predators", "pollinators", "parasitoids", "They transmit pathogens."],
          ["M", "The storage pest of cowpea is", "Callosobruchus maculatus", "Sitophilus zeamais", "Busseola fusca", "Zonocerus variegatus", "It is the cowpea bruchid."],
          ["M", "The maize weevil is", "Sitophilus zeamais", "Bemisia tabaci", "Heteroligus meles", "Aphis craccivora", "It bores into stored grains."],
          ["M", "The insect that bores holes in yam tubers is the", "yam beetle", "mealybug", "aphid", "whitefly", "Heteroligus meles attacks tubers."],
          ["M", "In insects with complete metamorphosis, the stage that usually causes most damage is the", "larva", "egg", "pupa", "adult wing", "Larvae feed heavily."],
          ["H", "The variegated grasshopper that attacks cassava is", "Zonocerus variegatus", "Sahlbergella singularis", "Phenacoccus manihoti", "Spodoptera exempta", "It chews leaves and bark."],
          ["H", "The insect that transmits cassava mosaic virus is the", "whitefly", "weevil", "termite", "stem borer", "Bemisia tabaci is the vector."],
          ["H", "An example of an insect that is beneficial to crops is the", "honey bee", "bollworm", "army worm", "bruchid", "Bees pollinate flowers."],
        ],
      },
      {
        week: 2,
        title: "Diseases of crops in detail",
        subtopics: ["Disease-causing organisms", "Fungal diseases", "Viral and bacterial diseases", "Principles of disease control"],
        objectives: ["Identify the groups of organisms that cause crop diseases", "Describe major fungal diseases and their causal organisms", "Describe major viral and bacterial diseases", "Explain the principles of disease control"],
        lesson: {
          title: "Causes and Control of Crop Diseases",
          summary: "Describe major crop diseases, their causal organisms and control.",
          minutes: 45,
          notes: `## Terms
- **pathogen** — disease-causing organism; **host** — the plant attacked
- **symptom** — visible sign of disease; **vector** — carrier of a pathogen
- **inoculum** — the pathogen material that starts infection

## Fungal diseases
| Disease | Crop | Causal organism | Symptoms | Control |
|---|---|---|---|---|
| **black pod** | cocoa | *Phytophthora palmivora* | brown to black rotting pods | remove infected pods; reduce shade and humidity; copper fungicides |
| **maize smut** | maize | *Ustilago maydis* | black sooty galls on cobs and tassels | resistant varieties; seed dressing; burn infected plants |
| **maize rust** | maize | *Puccinia* species | reddish-brown pustules on leaves | resistant varieties; rotation |
| **rice blast** | rice | *Pyricularia oryzae* | spindle-shaped lesions; neck rot | resistant varieties; avoid excess nitrogen; fungicides |
| **leaf spot (Cercospora)** | groundnut | *Cercospora* species | brown spots with yellow halo; defoliation | rotation; fungicides; resistant varieties |
| **damping-off** | vegetable seedlings | *Pythium*, *Rhizoctonia* | seedlings rot at soil level | sterilise nursery soil; avoid overwatering; seed dressing |
| **coffee leaf rust** | coffee | *Hemileia vastatrix* | orange powdery spots under leaves | copper fungicides; resistant varieties |

## Viral diseases
| Disease | Crop | Vector | Symptoms |
|---|---|---|---|
| **cassava mosaic** | cassava | whitefly | mottled, distorted leaves; stunting |
| **groundnut rosette** | groundnut | aphid | stunting, rosette of small leaves |
| **maize streak** | maize | leafhopper | yellow streaks along leaves |
| **cocoa swollen shoot** | cocoa | mealybug | swollen stems and roots; die-back |
Viruses cannot be cured; control the **vector**, plant **resistant varieties** and **clean cuttings**, and **rogue** infected plants.

## Bacterial diseases
**cassava bacterial blight** (*Xanthomonas*), **bacterial wilt** of tomato, **black arm** of cotton, **soft rots**.

## Nematode disease
**root knot** (*Meloidogyne*) — galls on roots; control by rotation, resistant varieties, nematicides.

## Principles of disease control
- **exclusion** — quarantine, clean planting materials
- **eradication** — roguing, burning residues, rotation, soil sterilisation
- **protection** — fungicides, seed dressing
- **resistance** — resistant varieties
- good **cultural practices**: spacing, drainage, weeding, timely planting`,
          examples: `**Example 1.** What organism causes black pod of cocoa? *Answer:* ***Phytophthora palmivora*** (a fungus).

**Example 2.** What is the vector of maize streak virus? *Answer:* the **leafhopper**.

**Example 3.** Which control principle does quarantine apply? *Answer:* **exclusion**.`,
        },
        questions: [
          ["E", "An organism that causes disease is a", "pathogen", "host", "vector", "symptom", "Pathogens infect hosts."],
          ["E", "The plant attacked by a pathogen is the", "host", "vector", "inoculum", "antigen", "The host suffers the disease."],
          ["E", "Black pod disease attacks", "cocoa", "maize", "cassava", "groundnut", "Pods rot and blacken."],
          ["M", "Black pod of cocoa is caused by", "Phytophthora palmivora", "Ustilago maydis", "Pyricularia oryzae", "Hemileia vastatrix", "It is a fungus."],
          ["M", "Maize smut is caused by", "Ustilago maydis", "Puccinia sorghi", "Cercospora", "Xanthomonas", "It forms sooty galls."],
          ["M", "Maize streak virus is transmitted by", "leafhoppers", "whiteflies", "aphids", "mealybugs", "Leafhoppers carry the virus."],
          ["M", "Rice blast is caused by a", "fungus", "virus", "bacterium", "nematode", "Pyricularia oryzae is the cause."],
          ["H", "Cocoa swollen shoot virus is transmitted by", "mealybugs", "leafhoppers", "whiteflies", "thrips", "Mealybugs feed on cocoa stems."],
          ["H", "Preventing the entry of a pathogen into an area by quarantine is the principle of", "exclusion", "eradication", "protection", "resistance", "The pathogen is kept out."],
          ["H", "The causal organism of root knot disease is", "Meloidogyne", "Pythium", "Phytophthora", "Ustilago", "It is a nematode."],
        ],
      },
      {
        week: 3,
        title: "Weed science and herbicides",
        subtopics: ["Classification of weeds", "Weed dispersal", "Classification of herbicides", "Safe and effective herbicide use"],
        objectives: ["Classify weeds by life cycle and form", "Explain how weeds are dispersed", "Classify herbicides by selectivity, timing and mode of action", "Describe safe and effective use of herbicides"],
        lesson: {
          title: "Managing Weeds Scientifically",
          summary: "Classify weeds and herbicides and apply safe herbicide practices.",
          minutes: 45,
          notes: `## Classification of weeds
- **by life cycle**: **annual** (*Tridax procumbens*, *Ageratum conyzoides*), **biennial**, **perennial** (*Imperata cylindrica*, *Cyperus rotundus*, *Chromolaena odorata*)
- **by form**: **grasses** (narrow leaves — *Imperata*, *Panicum*), **sedges** (triangular stems — *Cyperus*), **broad-leaved weeds** (*Tridax*, *Sida acuta*, *Euphorbia*)
- **by habitat**: arable, pasture, aquatic (**water hyacinth**), parasitic (***Striga***, dodder)

## Why perennial weeds are hard to control
they regenerate from **rhizomes, stolons, tubers and bulbs**; cutting stimulates regrowth; deep storage organs escape hoeing.

## Dispersal of weed seeds
**wind** (light, hairy or winged seeds — *Tridax*, *Chromolaena*); **water**; **animals** (hooked seeds sticking to fur; seeds passing through the gut); **explosive mechanism**; **humans** — contaminated crop seeds, tools, machinery, manure.

## Classification of herbicides
| Basis | Classes | Examples |
|---|---|---|
| **selectivity** | **selective** — kill some plants, spare the crop; **non-selective** — kill all green plants | 2,4-D (kills broad-leaved weeds in cereals); glyphosate (non-selective) |
| **time of application** | **pre-planting**, **pre-emergence**, **post-emergence** | atrazine (pre-emergence in maize) |
| **mode of action** | **contact** — kill only tissue touched; **systemic (translocated)** — absorbed and moved throughout the plant, killing roots and rhizomes | paraquat (contact); glyphosate (systemic) |
Systemic herbicides are best for **perennial weeds**.

## Effective use
identify the weed and crop; choose the correct herbicide; **calibrate** the sprayer; apply the **recommended rate** at the right growth stage; spray in calm, dry weather; use clean water.

## Safety
read the **label**; wear **protective clothing** (overalls, gloves, goggles, mask, boots); do not eat, drink or smoke while spraying; do not spray against the wind; wash equipment away from water sources; store chemicals locked away; dispose of containers properly; observe re-entry and harvest intervals.

## Problems of herbicides
cost; crop injury from wrong use; residues; pollution; herbicide-resistant weeds; health hazards.`,
          examples: `**Example 1.** Is *Imperata cylindrica* annual or perennial? *Answer:* **perennial**.

**Example 2.** Which herbicide type is best for perennial weeds? *Answer:* **systemic** herbicides.

**Example 3.** How are *Tridax* seeds dispersed? *Answer:* by **wind**.`,
        },
        questions: [
          ["E", "Weeds that live for more than two years are", "perennial weeds", "annual weeds", "biennial weeds", "seasonal weeds", "They regrow from storage organs."],
          ["E", "A herbicide that kills all green plants it touches is", "non-selective", "selective", "pre-emergence only", "biological", "It does not spare crops."],
          ["E", "Light, hairy weed seeds are dispersed mainly by", "wind", "water", "explosion", "birds only", "They float in the air."],
          ["M", "Weeds with triangular stems, such as Cyperus, are", "sedges", "grasses", "broad-leaved weeds", "ferns", "Sedges have three-sided stems."],
          ["M", "A herbicide absorbed and moved throughout the plant is", "systemic", "contact", "pre-planting", "non-chemical", "It reaches roots and rhizomes."],
          ["M", "A selective herbicide used against broad-leaved weeds in cereals is", "2,4-D", "glyphosate", "paraquat", "diesel", "It spares grasses."],
          ["M", "An aquatic weed that blocks waterways is", "water hyacinth", "spear grass", "goat weed", "siam weed", "It floats on water."],
          ["H", "Perennial weeds are difficult to control because they", "regenerate from rhizomes and tubers", "produce no seeds", "die after one season", "cannot spread", "Underground organs survive."],
          ["H", "Adjusting a sprayer to deliver the correct rate of chemical is", "calibration", "fumigation", "emulsification", "translocation", "It ensures the right dose."],
          ["H", "A problem arising from repeated use of one herbicide is the development of", "resistant weeds", "more pollinators", "better soil structure", "higher rainfall", "Weeds adapt to the chemical."],
        ],
      },
      {
        week: 4,
        title: "Horticulture",
        subtopics: ["Branches of horticulture", "Nursery practices", "Vegetable production", "Fruit and ornamental crops"],
        objectives: ["Describe the branches of horticulture", "Explain nursery practices", "Describe the production of common vegetables", "Describe the establishment and uses of fruit and ornamental crops"],
        lesson: {
          title: "Fruits, Vegetables and Ornamentals",
          summary: "Describe nursery practices and the production of horticultural crops.",
          minutes: 45,
          notes: `## Branches
**olericulture** (vegetables), **pomology** (fruits), **floriculture** (flowers and ornamentals), **landscape horticulture** (design of grounds).

## Nursery practices
A **nursery** is a place where seedlings are raised and cared for before transplanting.
- **site**: near water, well-drained, sheltered, fertile
- **nursery beds, seed boxes/trays or polythene bags** filled with sterilised topsoil mixed with manure
- **sowing**: in drills; lightly covered
- **shading** against sun and heavy rain; **watering** morning and evening
- **pricking out** — moving crowded seedlings to wider spacing
- **thinning**, weeding, pest control
- **hardening off** — gradually reducing shade and water to prepare seedlings for field conditions
- **transplanting** in the evening or cloudy weather with a ball of soil
Advantages: better care of young plants; selection of vigorous seedlings; saves seed; shortens time in the field.

## Vegetables
| Group | Examples |
|---|---|
| **leaf vegetables** | amaranthus, fluted pumpkin (*Telfairia occidentalis*), water leaf, lettuce, cabbage, bitter leaf, jute mallow (*Corchorus olitorius*, ewedu) |
| **fruit vegetables** | tomato (*Solanum lycopersicum*), okra (*Abelmoschus esculentus*), pepper (*Capsicum*), garden egg, cucumber |
| **root vegetables** | carrot, radish |
| **bulb vegetables** | onion (*Allium cepa*), garlic |
### Tomato
nursery 3–4 weeks; transplant at about 60 cm × 45 cm; **staking** and **pruning**; pests: fruit worm, whitefly; diseases: wilt, blight, leaf curl, root knot; harvest from about 8–10 weeks after transplanting; highly **perishable**.

## Fruits
citrus (*Citrus sinensis*, sweet orange), mango (*Mangifera indica*), pawpaw (*Carica papaya*), pineapple (*Ananas comosus*), banana and plantain (*Musa*), guava, cashew (*Anacardium occidentale*).
Propagated by **budding** (citrus), **grafting** (mango), **suckers** (pineapple, banana) and seeds (pawpaw). An **orchard** is a fruit garden.

## Ornamentals
**flowers** (hibiscus, rose, ixora, bougainvillea), **hedges** (duranta), **lawn grasses** (carpet grass, Bahama grass), shade and avenue trees.
Uses: **beautification**, shade, hedges and boundaries, erosion control, windbreaks, income, festivals and ceremonies.`,
          examples: `**Example 1.** What is hardening off? *Answer:* **Gradually exposing seedlings** to field conditions before transplanting.

**Example 2.** Give the botanical name of fluted pumpkin. *Answer:* ***Telfairia occidentalis***.

**Example 3.** How is citrus usually propagated? *Answer:* by **budding**.`,
        },
        questions: [
          ["E", "A place where seedlings are raised before transplanting is a", "nursery", "barn", "silo", "paddock", "Young plants receive special care."],
          ["E", "A garden of fruit trees is an", "orchard", "apiary", "arboretum only", "aquarium", "Fruits are grown there."],
          ["E", "Tomato and okra are", "fruit vegetables", "leaf vegetables", "root vegetables", "bulb vegetables", "Their fruits are eaten."],
          ["M", "Gradually preparing nursery seedlings for field conditions is", "hardening off", "pricking out", "thinning", "budding", "Shade and water are reduced."],
          ["M", "Moving crowded seedlings to wider spacing in the nursery is", "pricking out", "hardening off", "staking", "pruning", "It gives seedlings room."],
          ["M", "The botanical name of onion is", "Allium cepa", "Solanum lycopersicum", "Abelmoschus esculentus", "Carica papaya", "It is a bulb vegetable."],
          ["M", "Citrus is commonly propagated by", "budding", "suckers", "rhizomes", "bulbs", "A bud is joined to a rootstock."],
          ["H", "The botanical name of fluted pumpkin (ugu) is", "Telfairia occidentalis", "Corchorus olitorius", "Amaranthus hybridus", "Talinum triangulare", "It is a leaf vegetable."],
          ["H", "The botanical name of mango is", "Mangifera indica", "Anacardium occidentale", "Ananas comosus", "Citrus sinensis", "Mango is a tree fruit."],
          ["H", "An advantage of raising seedlings in a nursery is that it", "allows selection of vigorous seedlings", "wastes seed", "delays maturity greatly", "exposes seedlings to pests", "Only healthy seedlings are transplanted."],
        ],
      },
      {
        week: 5,
        title: "Forest management and agroforestry",
        subtopics: ["Forest regulations and regeneration", "Silvicultural practices", "Agroforestry systems", "Wildlife conservation"],
        objectives: ["Explain forest regulations and methods of regeneration", "Describe silvicultural practices", "Describe agroforestry systems and their benefits", "Explain wildlife conservation"],
        lesson: {
          title: "Managing Forests and Trees on Farms",
          summary: "Describe forest management, agroforestry and wildlife conservation.",
          minutes: 45,
          notes: `## Forest management
the application of scientific and business methods to **maintain and improve forest resources**.

### Forest regulation
laws that create **forest reserves**, require **permits** for felling, set **minimum girth** for felling, prohibit bush burning and farming in reserves, and provide forest guards.

### Regeneration
- **natural regeneration** — the forest regrows from seeds, coppice shoots and root suckers; cheap; slow; uneven stocking
- **artificial regeneration** — seedlings raised in nurseries and planted; faster; uniform; allows choice of species (teak, gmelina, pine); costly

### Other practices
**selective exploration (felling)**; **afforestation** and **reafforestation**; **deforestation control**; **taungya**.

## Silvicultural practices
**nursery management**; **planting out** at correct spacing; **weeding / tending**; **beating up** (replacing dead seedlings); **thinning** (removing some trees to reduce competition); **pruning** of lower branches for clean timber; **fire protection** (fire tracing/breaks); **pest and disease control**; **rotation** (felling age).

## Agroforestry
the deliberate **growing of trees with crops and/or livestock** on the same land.
| System | Description |
|---|---|
| **taungya** | food crops grown among young forest trees |
| **alley cropping** | crops grown in alleys between rows of leguminous trees or shrubs (*Leucaena*, *Gliricidia*), whose prunings serve as mulch and fodder |
| **silvo-pastoral** | trees with pasture and livestock |
| **agri-silviculture** | trees with crops |
| **windbreaks / shelter belts** | rows of trees protecting crops |
| **home gardens** | mixed trees, crops and small animals around the house |
**Benefits:** soil fertility (nitrogen fixation, leaf litter); erosion control; fodder, fuel wood, fruits and timber; shade; extra income; diversified output; improved micro-climate.

## Wildlife conservation
- **wildlife** — animals living in their natural habitat
- importance: bush meat, tourism, research, ecological balance, cultural value
- threats: **poaching**, habitat destruction, bush burning
- conservation: **game reserves** and **national parks** (e.g. **Yankari**, **Kainji Lake**, **Cross River**, **Old Oyo**, **Gashaka-Gumti**); hunting laws and **closed seasons**; game ranching; public education`,
          examples: `**Example 1.** What is alley cropping? *Answer:* Growing **crops between rows of leguminous trees or shrubs**.

**Example 2.** What is "beating up" in forestry? *Answer:* **Replacing dead seedlings** after planting.

**Example 3.** Name one Nigerian national park or game reserve. *Answer:* **Yankari** (or Kainji Lake, Cross River).`,
        },
        questions: [
          ["E", "Growing trees together with crops or livestock on the same land is", "agroforestry", "monoculture", "deforestation", "lumbering", "Trees are combined with farming."],
          ["E", "Illegal hunting of wild animals is", "poaching", "ranching", "conservation", "thinning", "It threatens wildlife."],
          ["E", "A forest regrowing on its own from seeds and coppice shoots is", "natural regeneration", "artificial regeneration", "afforestation", "taungya", "No planting is done."],
          ["M", "Replacing dead seedlings in a forest plantation is", "beating up", "thinning", "pruning", "fire tracing", "Gaps are refilled."],
          ["M", "Removing some trees in a plantation to reduce competition is", "thinning", "beating up", "coppicing", "tending", "Remaining trees grow better."],
          ["M", "Growing crops between rows of leguminous trees is", "alley cropping", "taungya", "silvo-pasture", "ranching", "Prunings mulch the crops."],
          ["M", "A leguminous tree commonly used in alley cropping is", "Leucaena", "teak", "iroko", "obeche", "It fixes nitrogen and gives fodder."],
          ["H", "An advantage of artificial regeneration over natural regeneration is that it", "allows choice of species and uniform stands", "costs nothing", "needs no nursery", "is always slower", "Planting is planned."],
          ["H", "Yankari and Kainji Lake are examples of", "game reserves and national parks", "forest plantations", "research institutes", "irrigation dams only", "They conserve wildlife."],
          ["H", "A cleared strip made round a forest to stop the spread of fire is a", "fire break", "paddock", "contour bund", "alley", "Fire cannot cross bare ground."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Animal nutrition and ration formulation",
        subtopics: ["Classes of feedstuffs", "Nutrient requirements", "Ration formulation with the Pearson square", "Nutritional disorders"],
        objectives: ["Classify feedstuffs by nutrient content", "Explain the nutrient requirements of farm animals", "Formulate a simple ration using the Pearson square", "Identify nutritional disorders and their prevention"],
        lesson: {
          title: "Formulating Animal Feeds",
          summary: "Classify feedstuffs and formulate rations with the Pearson square.",
          minutes: 45,
          notes: `## Classes of feedstuffs
- **energy concentrates (basal feeds)**: maize, sorghum, millet, cassava chips, wheat offal, rice bran — high in carbohydrate, low in fibre
- **protein concentrates**: plant — **groundnut cake**, **soya bean meal**, cotton-seed cake, palm kernel cake; animal — **fish meal**, blood meal, meat and bone meal
- **roughages**: **succulent** (fresh grass, silage) and **dry** (hay, straw) — high in fibre
- **mineral supplements**: bone meal, oyster shell, limestone, salt
- **vitamin supplements / premixes**
- **feed additives**: antibiotics, coccidiostats, enzymes, flavourings

## Terms
- **crude protein (CP)** — total protein estimated from nitrogen content
- **digestibility** — the proportion of feed absorbed by the animal
- **feed conversion ratio (FCR)** = feed eaten ÷ weight gained (lower is better)
- **malnutrition** — wrong amounts or balance of nutrients

## Nutrient requirements
depend on **species, age, weight, physiological state** (growth, pregnancy, lactation, laying) and **level of production**. Examples: chicks and broilers need high protein; layers need extra calcium.

## The Pearson square
used to mix **two feedstuffs** to a required crude protein level.
**Example:** make a **20% CP** ration from **maize (10% CP)** and **groundnut cake (45% CP)**.
1. write the required % (20) in the centre of a square
2. write maize (10) at the top left and groundnut cake (45) at the bottom left
3. subtract diagonally: 45 − 20 = **25 parts maize**; 20 − 10 = **10 parts groundnut cake**
4. total = **35 parts**
5. maize = 25 ÷ 35 × 100 = **71.4%**; groundnut cake = 10 ÷ 35 × 100 = **28.6%**
For 100 kg of feed: about **71.4 kg maize** and **28.6 kg groundnut cake**.
The required value must lie **between** the values of the two feedstuffs.

## Nutritional disorders
| Disorder | Cause |
|---|---|
| **rickets / osteomalacia** | lack of calcium, phosphorus or vitamin D |
| **milk fever** | low blood calcium after calving |
| **anaemia** | lack of iron (piglets) |
| **night blindness** | lack of vitamin A |
| **bloat** | gas build-up in the rumen from lush legumes |
| **grass tetany** | lack of magnesium |
| **ketosis** | energy deficiency in early lactation |`,
          examples: `**Example 1.** Using maize (10% CP) and groundnut cake (45% CP) for a 20% CP ration, how many parts of maize are needed? *Answer:* 45 − 20 = **25 parts**.

**Example 2.** A broiler ate 4 kg of feed and gained 2 kg. Find the FCR. *Answer:* 4 ÷ 2 = **2**.

**Example 3.** Which disorder is caused by lack of magnesium? *Answer:* **grass tetany**.`,
        },
        questions: [
          ["E", "Fish meal is a", "protein concentrate", "roughage", "energy concentrate", "mineral supplement", "It is rich in animal protein."],
          ["E", "The proportion of feed that an animal absorbs is its", "digestibility", "palatability", "crude fibre", "bulk", "Undigested feed is passed out."],
          ["E", "Maize and sorghum are mainly", "energy concentrates", "protein concentrates", "roughages", "vitamin premixes", "They are rich in carbohydrate."],
          ["M", "The feed conversion ratio is calculated as", "feed eaten divided by weight gained", "weight gained divided by feed eaten", "feed cost times weight", "feed eaten minus weight gained", "A lower value is better."],
          ["M", "A broiler that eats 4 kg of feed and gains 2 kg has a feed conversion ratio of", "2", "0.5", "8", "6", "4 divided by 2."],
          ["M", "The Pearson square method is used to", "formulate rations from two feedstuffs", "measure farm land", "calculate depreciation", "determine soil pH", "It balances protein level."],
          ["M", "Milk fever in cows is caused by low blood", "calcium", "iron", "sodium", "iodine", "It occurs after calving."],
          ["H", "To make a 20% crude protein ration from maize (10%) and groundnut cake (45%), the parts of groundnut cake needed are", "10", "25", "35", "20", "20 minus 10. Answer: 10."],
          ["H", "In that 20% ration, the percentage of maize in the mixture is about", "71.4%", "28.6%", "50%", "35%", "25 parts out of 35."],
          ["H", "Gas build-up in the rumen after grazing lush legumes is", "bloat", "ketosis", "rickets", "anaemia", "The rumen swells with gas."],
        ],
      },
      {
        week: 2,
        title: "Reproduction in farm animals",
        subtopics: ["Reproductive hormones", "Oestrus cycle and heat detection", "Mating, gestation and parturition", "Egg formation in poultry"],
        objectives: ["Explain the roles of reproductive hormones", "Describe the oestrus cycle and signs of heat", "Describe mating, gestation and parturition", "Describe egg formation in the hen"],
        lesson: {
          title: "The Science of Animal Reproduction",
          summary: "Explain hormones, the oestrus cycle, pregnancy and egg formation.",
          minutes: 45,
          notes: `## Reproductive hormones
| Hormone | Source | Function |
|---|---|---|
| **FSH** (follicle-stimulating hormone) | pituitary gland | stimulates growth of ovarian follicles; sperm production in males |
| **LH** (luteinising hormone) | pituitary | causes **ovulation**; stimulates testosterone production |
| **oestrogen** | ovary (follicles) | brings about **heat (oestrus)**; female characters |
| **progesterone** | corpus luteum of the ovary | **maintains pregnancy** |
| **testosterone** | testes | male characters and sex drive |
| **oxytocin** | pituitary | **milk let-down**; uterine contractions at birth |
| **prolactin** | pituitary | **milk production** |
| **relaxin** | ovary/placenta | relaxes the pelvic ligaments at birth |

## The oestrus cycle
the interval from one heat period to the next.
| Animal | Length of cycle | Duration of heat |
|---|---|---|
| cow | about **21 days** | about 18 hours |
| ewe | about **17 days** | about 1–2 days |
| doe (goat) | about **21 days** | about 2 days |
| sow | about **21 days** | 2–3 days |

## Signs of heat
restlessness; **mounting** other animals and standing to be mounted; swollen, reddened **vulva** with clear mucus discharge; frequent urination; bellowing or bleating; reduced appetite and milk yield.
Mating or insemination is timed towards the **later part of heat**, close to ovulation.

## Mating, gestation and parturition
- **natural mating**: hand mating, pen mating, flock mating; or **artificial insemination**
- **fertilisation** occurs in the oviduct; the embryo **implants** in the uterus and is nourished through the **placenta** and **umbilical cord**
- gestation: cow 283 days; ewe and doe 150; sow 114; rabbit 31
- **signs of approaching parturition**: enlarged udder, swollen vulva, restlessness, relaxed pelvic ligaments, isolation, nest-making (sows, rabbits)
- care: clean bedding; assist only if necessary; ensure the newborn breathes and takes **colostrum**; disinfect the navel

## Egg formation in the hen
| Part of oviduct | What is added | Time (approx.) |
|---|---|---|
| **infundibulum** | receives the yolk; fertilisation | 15 minutes |
| **magnum** | **albumen** (egg white) | 3 hours |
| **isthmus** | **shell membranes** | 1¼ hours |
| **uterus (shell gland)** | **shell** and pigment | about 20 hours |
| **vagina / cloaca** | egg is laid | minutes |
Total: about **25 hours**. Hens lay without a cock, but such eggs are **infertile**.`,
          examples: `**Example 1.** Which hormone maintains pregnancy? *Answer:* **progesterone**.

**Example 2.** How long is the oestrus cycle of a cow? *Answer:* about **21 days**.

**Example 3.** Where is the egg shell formed? *Answer:* in the **uterus (shell gland)**.`,
        },
        questions: [
          ["E", "The hormone that maintains pregnancy is", "progesterone", "oxytocin", "testosterone", "prolactin", "It is produced by the corpus luteum."],
          ["E", "The period when a female animal accepts the male is", "oestrus", "gestation", "lactation", "weaning", "It is also called heat."],
          ["E", "The hormone responsible for male characters is", "testosterone", "oestrogen", "relaxin", "progesterone", "It is produced by the testes."],
          ["M", "The hormone that causes milk let-down is", "oxytocin", "prolactin", "FSH", "LH", "It also contracts the uterus."],
          ["M", "The hormone that causes ovulation is", "LH", "FSH", "progesterone", "relaxin", "Luteinising hormone releases the ovum."],
          ["M", "The length of the oestrus cycle of a cow is about", "21 days", "17 days", "5 days", "30 days", "Three weeks. Answer: 21 days."],
          ["M", "A sign of heat in a cow is", "standing to be mounted by other animals", "refusing to stand", "profuse sweating", "loss of the tail", "Standing heat is the best sign."],
          ["H", "The length of the oestrus cycle of a ewe is about", "17 days", "21 days", "28 days", "7 days", "It is shorter than a cow's."],
          ["H", "In the hen's oviduct, the shell membranes are added in the", "isthmus", "magnum", "infundibulum", "uterus", "The egg spends about an hour there."],
          ["H", "The developing foetus is nourished in the uterus through the", "placenta", "cervix", "oviduct", "corpus luteum", "It links mother and foetus."],
        ],
      },
      {
        week: 3,
        title: "Management of ruminants and pigs",
        subtopics: ["Management from birth to weaning", "Management of growers and breeders", "Routine management practices", "Dairy and beef management"],
        objectives: ["Describe the care of young animals from birth to weaning", "Describe the management of growing and breeding stock", "Explain routine management practices", "Outline dairy and beef management"],
        lesson: {
          title: "Raising Livestock from Birth to Market",
          summary: "Describe livestock management at each stage of life.",
          minutes: 45,
          notes: `## Birth to weaning
- clean mucus from the nostrils; ensure breathing; allow the dam to lick the young
- cut and **disinfect the navel** cord with iodine
- ensure intake of **colostrum** within the first hours — it supplies **antibodies**, is rich in protein and vitamins and acts as a mild laxative
- keep the young warm and dry
- piglets: **iron injection** at about 3 days; clip needle teeth; provide a **creep area** and creep feed
- identification: ear tags, ear notching (pigs), tattoo, branding
- **weaning**: calves at about 6–8 months (earlier in dairy systems); lambs and kids at 3–4 months; piglets at 6–8 weeks; done gradually to reduce stress

## Growers
adequate balanced feed; clean water; vaccination and deworming; separation by sex and age; selection of replacement breeding stock; fattening of the rest for market.

## Breeders
- select healthy, well-grown animals with good records
- **flushing** — giving extra feed to females before mating to increase ovulation
- **steaming up** — extra feed in late pregnancy to build reserves for lactation
- observe heat; mate at the right time; keep breeding records
- isolate females close to parturition

## Routine management practices
| Practice | Purpose |
|---|---|
| **castration** | prevents unwanted breeding; makes males docile; improves meat quality (methods: knife, **burdizzo**, rubber ring/elastrator) |
| **dehorning / disbudding** | prevents injuries; saves space |
| **docking** | cutting tails of lambs for hygiene |
| **hoof trimming** | prevents lameness |
| **dipping / spraying** | controls ticks and other ectoparasites |
| **drenching (deworming)** | controls internal parasites |
| **vaccination** | prevents diseases |
| **shearing** | removing wool from sheep |
| **culling** | removing unproductive animals |

## Dairy management
high-quality feed and water; **regular milking** (hand or machine) twice daily in a clean parlour; wash the udder; test for **mastitis**; cool the milk quickly; **dry off** the cow about 2 months before the next calving.

## Beef management
calves grow on milk and pasture; steers are **fattened** on pasture or in **feedlots** with concentrates and sold at market weight.`,
          examples: `**Example 1.** Why is colostrum important? *Answer:* It supplies **antibodies** that protect the newborn.

**Example 2.** What is flushing? *Answer:* Giving **extra feed before mating** to increase ovulation.

**Example 3.** Name an instrument used for bloodless castration. *Answer:* the **burdizzo**.`,
        },
        questions: [
          ["E", "The first milk a newborn animal should receive is", "colostrum", "whey", "skim milk", "cream", "It contains antibodies."],
          ["E", "Separating young animals from their mother's milk is", "weaning", "culling", "flushing", "docking", "They move to solid feed."],
          ["E", "Removing the testes of a male animal is", "castration", "dehorning", "docking", "shearing", "It prevents unwanted breeding."],
          ["M", "The navel cord of a newborn animal is treated with iodine to", "prevent infection", "increase growth", "stop breathing", "remove colostrum", "Germs can enter through the navel."],
          ["M", "Giving extra feed to females shortly before mating is", "flushing", "steaming up", "creep feeding", "drying off", "It increases ovulation rate."],
          ["M", "Giving extra feed to a female in late pregnancy is", "steaming up", "flushing", "weaning", "culling", "It prepares her for lactation."],
          ["M", "An instrument used for bloodless castration is the", "burdizzo", "trocar", "drenching gun", "hoof knife", "It crushes the spermatic cords."],
          ["H", "A dairy cow is dried off before the next calving in order to", "rest the udder and build body reserves", "increase mastitis", "wean the calf early", "reduce her feed permanently", "The udder tissue recovers."],
          ["H", "A special feeding area that only piglets can enter is a", "creep area", "feedlot", "wallow", "paddock", "The sow cannot reach the creep feed."],
          ["H", "Fattening cattle intensively on concentrates in confined yards is done in a", "feedlot", "dip", "crush", "hatchery", "Animals gain weight quickly."],
        ],
      },
      {
        week: 4,
        title: "Animal health management",
        subtopics: ["Disease-causing organisms and transmission", "Major diseases and their causal organisms", "Parasites and their life cycles", "Prevention, control and treatment"],
        objectives: ["Explain how livestock diseases are transmitted", "Match major diseases with their causal organisms", "Describe the life cycles of important parasites", "Explain the principles of disease prevention and control"],
        lesson: {
          title: "Keeping Herds and Flocks Healthy",
          summary: "Relate livestock diseases and parasites to their causes, life cycles and control.",
          minutes: 45,
          notes: `## Transmission of diseases
**contact** with sick animals; **contaminated feed and water**; **air** (droplets); **vectors** (ticks, tsetse flies); **wounds**; from **dam to offspring**; contaminated equipment, vehicles and people; carrier animals.
**Predisposing factors:** poor nutrition, overcrowding, poor sanitation, stress and extreme weather.

## Diseases and causal organisms
| Disease | Cause | Animals | Key signs |
|---|---|---|---|
| **anthrax** | bacterium *Bacillus anthracis* | cattle, sheep | sudden death; dark, unclotted blood from openings — carcass must **not** be opened |
| **brucellosis** | *Brucella abortus* | cattle | abortion in late pregnancy; retained placenta |
| **tuberculosis** | *Mycobacterium bovis* | cattle | chronic cough, emaciation |
| **mastitis** | several bacteria | dairy cows | swollen udder; clots in milk |
| **Newcastle disease** | virus | poultry | respiratory and nervous signs; twisted neck |
| **foot-and-mouth** | virus | cloven-hoofed animals | blisters on mouth and feet |
| **PPR** | virus | goats, sheep | fever, discharges, diarrhoea |
| **African swine fever** | virus | pigs | fever, skin haemorrhages, high mortality |
| **trypanosomiasis** | protozoan *Trypanosoma*; vector **tsetse fly (*Glossina*)** | cattle | intermittent fever, anaemia, emaciation |
| **coccidiosis** | protozoan *Eimeria* | poultry, rabbits | bloody diarrhoea |
| **aspergillosis (brooder pneumonia)** | fungus *Aspergillus fumigatus* | poultry | gasping |
| **ringworm** | fungus | cattle, goats | circular scaly patches |

## Parasites
- **tapeworm** (*Taenia saginata* in cattle; *Taenia solium* in pigs): adult in the **human intestine** → eggs passed in faeces → eaten by cattle or pigs → **bladder worms (cysts)** form in muscle ("measly meat") → humans infected by eating undercooked meat. Control: latrines, meat inspection, thorough cooking, deworming.
- **liver fluke** (*Fasciola gigantica / hepatica*): eggs in dung → miracidium enters a **water snail** → cercariae leave the snail and encyst on grass → eaten by cattle or sheep → flukes in the **liver**. Control: drain marshes, kill snails, deworm, avoid wet grazing.
- **roundworm** (*Ascaris*): eggs swallowed with feed; larvae migrate through liver and lungs; adults in the intestine.
- **tick**: a blood-sucking ectoparasite with one-, two- or three-host life cycles; transmits redwater, heartwater and anaplasmosis.

## Prevention and control
**vaccination**; **quarantine** of new stock; **isolation** of the sick; **sanitation and disinfection**; good **nutrition**; vector and parasite control (dipping, deworming, rotational grazing); proper **carcass disposal** (burning or deep burial); breeding **resistant** animals; **notification** of outbreaks to veterinary authorities; prompt treatment with antibiotics or other drugs under veterinary advice, observing **withdrawal periods** before sale of milk or meat.`,
          examples: `**Example 1.** What organism causes anthrax? *Answer:* ***Bacillus anthracis*** (a bacterium).

**Example 2.** How do humans get tapeworm from cattle? *Answer:* By eating **undercooked beef containing cysts**.

**Example 3.** What is the vector of trypanosomiasis? *Answer:* the **tsetse fly (*Glossina*)**.`,
        },
        questions: [
          ["E", "Trypanosomiasis is transmitted by the", "tsetse fly", "housefly", "tick", "mosquito", "Glossina carries the trypanosomes."],
          ["E", "Coccidiosis in poultry is caused by a", "protozoan", "virus", "bacterium", "fungus", "Eimeria is the organism."],
          ["E", "Keeping sick animals away from healthy ones is", "isolation", "vaccination", "flushing", "culling only", "It limits the spread."],
          ["M", "Anthrax is caused by", "Bacillus anthracis", "Brucella abortus", "Mycobacterium bovis", "Eimeria", "It forms resistant spores."],
          ["M", "Abortion in late pregnancy in cattle is the main sign of", "brucellosis", "anthrax", "mastitis", "ringworm", "Brucella abortus is the cause."],
          ["M", "Aspergillosis in poultry is caused by a", "fungus", "virus", "protozoan", "worm", "Mouldy litter is the source."],
          ["M", "The beef tapeworm is", "Taenia saginata", "Taenia solium", "Fasciola gigantica", "Ascaris suum", "Cattle are the intermediate host."],
          ["H", "The carcass of an animal that died of anthrax should not be opened because", "the bacteria form spores that contaminate the environment", "the meat is too tough", "the blood has clotted", "it attracts tsetse flies", "Spores survive for years."],
          ["H", "In the life cycle of the liver fluke, the stage that leaves the snail and encysts on grass is the", "cercaria", "miracidium", "egg", "adult fluke", "Animals eat the cysts on grass."],
          ["H", "The period after drug treatment during which milk or meat must not be sold is the", "withdrawal period", "gestation period", "incubation period", "dry period", "Drug residues must clear first."],
        ],
      },
      {
        week: 5,
        title: "Aquaculture and apiculture",
        subtopics: ["Fish biology and culture systems", "Pond management and fish feeding", "Fishing methods and regulations", "Bee-keeping practice"],
        objectives: ["Describe fish culture systems", "Explain pond management and fish feeding", "Describe fishing methods and regulations", "Describe modern bee-keeping practice"],
        lesson: {
          title: "Fish and Bees as Enterprises",
          summary: "Describe aquaculture systems, fishing regulations and bee-keeping.",
          minutes: 45,
          notes: `## Fish classification
- **bony fish**: tilapia, catfish, carp, mullet; **cartilaginous fish**: sharks, rays
- **fresh-water** fish (tilapia, *Clarias*, *Heterotis*, Nile perch) and **marine** fish (sardine, mackerel, croaker)
- **shellfish**: shrimps, prawns, crabs, lobsters, oysters, periwinkles

## Culture systems
- **extensive**: natural food only; low stocking; low yield
- **semi-intensive**: fertilised ponds plus supplementary feed
- **intensive**: high stocking; complete feeds; aeration and water exchange; tanks or raceways
- **monoculture** (one species) and **polyculture** (several species with different feeding habits)
- **integrated fish farming**: fish with poultry, pigs or rice — animal droppings fertilise the pond

## Pond management
site with clay soil and reliable water; **dykes**, **inlet** and **outlet (monk)** with screens; **liming** and **fertilisation** to produce **plankton**; stock **fingerlings** at the right density; feed **pellets** at about 3–5% of body weight daily; monitor **dissolved oxygen**, pH and temperature; control weeds, predators and diseases; sample growth; harvest by draining or netting.
**Hatchery**: brood stock are spawned (often with hormone injection in catfish); eggs hatch into **fry**, which grow to **fingerlings**.

## Fishing methods
hooks and lines; **cast nets, gill nets, seine/drag nets, trawl nets**; traps and baskets. **Illegal** methods: poisons and explosives.

## Fishing regulations
- **minimum mesh size** so that young fish escape
- **closed seasons** to protect breeding fish
- ban on poisons and explosives; licences for fishing vessels
- protection of spawning grounds; control of **overfishing** and water pollution

## Preservation
smoking, sun-drying, salting, icing and freezing, canning.

## Apiculture
- colony: **queen**, **drones**, **workers**
- hives: **Kenyan top-bar** and **Langstroth** (movable frames allow harvesting without destroying the colony)
- **baiting** hives with wax or honey attracts a swarm
- inspect in the cool evening with a **smoker**, bee suit, veil and gloves
- harvest ripe (capped) combs; leave brood combs; extract honey by pressing or a centrifugal **extractor**
- products: honey, beeswax, propolis, royal jelly, pollen
- bees **pollinate** crops and increase yields`,
          examples: `**Example 1.** What is polyculture in fish farming? *Answer:* Rearing **several species** with different feeding habits in one pond.

**Example 2.** Why is a minimum mesh size prescribed for nets? *Answer:* So that **young fish can escape** and grow.

**Example 3.** Which hive type has movable frames? *Answer:* the **Langstroth** hive.`,
        },
        questions: [
          ["E", "Very young fish that have just hatched are called", "fry", "kids", "kits", "lambs", "Fry grow into fingerlings."],
          ["E", "Sharks and rays are", "cartilaginous fish", "bony fish", "shellfish", "amphibians", "Their skeleton is cartilage."],
          ["E", "An illegal method of fishing is the use of", "poisons and explosives", "hooks and lines", "cast nets", "traps", "They destroy all aquatic life."],
          ["M", "Rearing several fish species together in one pond is", "polyculture", "monoculture", "hatchery culture", "cage culture only", "Species use different food."],
          ["M", "A period when fishing is forbidden to protect breeding fish is a", "closed season", "dry season", "harvest season", "stocking season", "Fish are allowed to spawn."],
          ["M", "Fish ponds are fertilised to encourage the growth of", "plankton", "water hyacinth", "frogs", "snails", "Plankton is natural food."],
          ["M", "Keeping fish together with poultry so that droppings fertilise the pond is", "integrated fish farming", "extensive ranching", "zero grazing", "transhumance", "Enterprises support each other."],
          ["H", "A minimum mesh size is prescribed for fishing nets so that", "young fish can escape and grow", "nets last longer", "more fish are caught", "water flows faster", "It prevents overfishing of juveniles."],
          ["H", "A hive with movable frames that can be harvested without destroying the colony is the", "Langstroth hive", "clay pot hive", "log hive", "calabash hive", "Frames are lifted out."],
          ["H", "In a fish pond, the structure that controls the outflow of water is the", "monk", "dyke", "inlet screen", "spillway roof", "The monk is the outlet."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Environmental physiology of farm animals",
        subtopics: ["Climate and animal production", "Effects of temperature", "Effects of rainfall, humidity and light", "Reducing environmental stress"],
        objectives: ["Explain how climate affects animal production", "Describe the effects of high temperature on performance", "Describe the effects of rainfall, humidity and light", "Suggest ways of reducing environmental stress"],
        lesson: {
          title: "Climate and Animal Performance",
          summary: "Explain how climatic factors affect farm animals and how to reduce stress.",
          minutes: 45,
          notes: `## Climate and animals
Climate affects animals **directly** (body comfort, feed intake, reproduction) and **indirectly** (quality of pasture, water supply, parasites and diseases).

## Temperature
Animals are **homeotherms**; they try to keep body temperature constant.
Effects of **high temperature (heat stress)**:
- reduced **feed intake** and slower **growth**
- increased water intake; panting and sweating
- lower **milk yield** and milk fat
- fewer, smaller, **thin-shelled eggs**
- reduced **fertility**: poor semen quality, weak heat signs, early embryo death
- in severe cases, heat stroke and death
Low temperature: more feed used to keep warm; chilling and death of young animals.

## Rainfall
- determines **pasture growth** and water supply
- wet season: lush pasture but more **worms, ticks, foot rot** and tsetse flies
- dry season: scarce, poor-quality forage; animals **lose weight**; long trekking for water (transhumance)

## Relative humidity
high humidity with high temperature worsens heat stress (sweating and panting are less effective), favours **fungal and respiratory diseases**, and makes litter damp in poultry houses.

## Light
- **day length** affects breeding in some species; **extra light (14–16 hours)** stimulates **egg production** in layers
- sunlight helps form **vitamin D**; too much causes sunburn in pale-skinned pigs

## Wind
moderate wind cools animals; strong, cold winds chill young stock and spread disease organisms.

## Adaptations
indigenous breeds (e.g. zebu cattle with humps, loose skin and sweat glands; West African Dwarf goats) tolerate heat and disease better than exotic breeds.

## Reducing environmental stress
- well-ventilated, **shaded** housing with high roofs and correct orientation (long axis east–west)
- plenty of cool, clean **water**
- feed during cooler hours; adjust rations
- avoid overcrowding; plant shade trees; provide **wallows** for pigs
- use fans and foggers where affordable
- choose or **cross-breed** adapted animals
- conserve hay and silage for the dry season`,
          examples: `**Example 1.** Give two effects of heat stress on layers. *Answer:* **Fewer eggs** and **thin shells**.

**Example 2.** Why do animals lose weight in the dry season? *Answer:* Forage is **scarce and of poor quality**.

**Example 3.** How does extra light affect layers? *Answer:* It **stimulates egg production**.`,
        },
        questions: [
          ["E", "High environmental temperature causes farm animals to", "eat less feed", "eat more feed", "grow faster", "lay more eggs", "Heat depresses appetite."],
          ["E", "In the dry season, grazing animals usually", "lose weight", "gain weight rapidly", "produce more milk", "need no water", "Forage is scarce."],
          ["E", "Extra hours of light in a layer house help to", "stimulate egg production", "reduce feed intake", "cause moulting only", "stop laying", "Light stimulates the hen's hormones."],
          ["M", "Animals that keep a constant body temperature are", "homeotherms", "poikilotherms", "ruminants only", "herbivores", "Farm mammals and birds are warm-blooded."],
          ["M", "A wet-season problem in grazing animals is an increase in", "worms and ticks", "feed scarcity", "dust", "water shortage", "Parasites thrive in moist conditions."],
          ["M", "High humidity combined with high temperature", "worsens heat stress", "cools the animals", "dries the litter", "improves fertility", "Evaporative cooling is less effective."],
          ["M", "Heat stress in laying hens results in", "thin-shelled eggs", "thicker shells", "larger eggs", "more fertile eggs", "Calcium use is disturbed."],
          ["H", "Poultry houses in the tropics are built with the long axis east–west in order to", "reduce direct sunlight entering the house", "increase rainfall", "trap heat", "block all wind", "The sun passes over the roof."],
          ["H", "Zebu cattle tolerate heat better than exotic breeds because they have", "loose skin and many sweat glands", "thick long hair", "no sweat glands", "larger rumens only", "They lose heat efficiently."],
          ["H", "The seasonal movement of herders with cattle in search of pasture and water is", "transhumance", "zero grazing", "paddocking", "ranching", "Herds move with the seasons."],
        ],
      },
      {
        week: 2,
        title: "Genetics and animal improvement",
        subtopics: ["Basic genetic terms", "Mendel's laws", "Monohybrid and dihybrid crosses", "Breeding systems"],
        objectives: ["Define basic genetic terms", "State Mendel's laws of inheritance", "Work out simple monohybrid crosses", "Evaluate breeding systems used in animal improvement"],
        lesson: {
          title: "Inheritance and Breeding",
          summary: "Apply Mendel's laws and compare breeding systems.",
          minutes: 45,
          notes: `## Basic terms
- **gene** — unit of inheritance on a chromosome; **allele** — alternative form of a gene
- **dominant** allele — expressed even when only one copy is present (written with a capital letter, e.g. T); **recessive** — expressed only when two copies are present (t)
- **genotype** — the genetic make-up (TT, Tt, tt); **phenotype** — the observable character (tall, short)
- **homozygous** — two identical alleles (TT or tt); **heterozygous** — two different alleles (Tt)
- **F₁** — first filial generation; **F₂** — second
- **hybrid** — offspring of genetically different parents

## Mendel's laws
**Gregor Mendel** worked with the garden pea (*Pisum sativum*).
1. **Law of segregation** — the two alleles of a gene **separate** during gamete formation, so each gamete carries only one.
2. **Law of independent assortment** — alleles of different genes are inherited **independently** of one another.

## Monohybrid cross
Pure tall (TT) × pure short (tt):
- **F₁**: all **Tt** — all tall
- F₁ × F₁ (Tt × Tt) gives **F₂**: **1 TT : 2 Tt : 1 tt**
- **phenotypic ratio 3 tall : 1 short**; genotypic ratio 1 : 2 : 1
Example: from 400 F₂ plants, about **300 tall** and **100 short** are expected.
**Test cross**: crossing with the homozygous recessive to find out whether an individual is TT or Tt.

## Dihybrid cross
F₂ phenotypic ratio **9 : 3 : 3 : 1**.

## Application in livestock
polled (hornless) is dominant over horned in cattle; coat colours; sex is determined by X and Y chromosomes in mammals (XX female, XY male).

## Breeding systems
| System | Meaning | Remarks |
|---|---|---|
| **in-breeding** | mating close relatives | fixes desirable traits; produces pure lines; causes **in-breeding depression** (reduced vigour and fertility) |
| **line-breeding** | mild in-breeding to concentrate the genes of an outstanding ancestor | |
| **out-breeding (out-crossing)** | mating unrelated animals of the same breed | maintains vigour |
| **cross-breeding** | mating different breeds | **hybrid vigour (heterosis)**; combines traits, e.g. Friesian × White Fulani |
| **upgrading (grading up)** | repeated back-crossing of local females to a superior breed | gradually raises the level of superior blood |
**Selection** methods: mass selection, progeny testing (judging a sire by its offspring), pedigree and family selection.`,
          examples: `**Example 1.** What is the phenotypic ratio in the F₂ of a monohybrid cross? *Answer:* **3 : 1**.

**Example 2.** What is the genotype of a heterozygous tall plant? *Answer:* **Tt**.

**Example 3.** Out of 400 F₂ plants, how many are expected to be short? *Answer:* a quarter = **100**.`,
        },
        questions: [
          ["E", "The unit of inheritance is the", "gene", "cell wall", "hormone", "enzyme", "Genes are carried on chromosomes."],
          ["E", "The observable character of an organism is its", "phenotype", "genotype", "allele", "gamete", "It is what we see."],
          ["E", "The scientist regarded as the father of genetics is", "Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke", "He worked on garden peas."],
          ["M", "An individual with two different alleles for a trait is", "heterozygous", "homozygous", "recessive", "pure-breeding", "For example Tt."],
          ["M", "The phenotypic ratio in the F₂ generation of a monohybrid cross is", "3 : 1", "1 : 1", "9 : 3 : 3 : 1", "1 : 2 : 1", "Three dominant to one recessive."],
          ["M", "Mating animals of two different breeds is", "cross-breeding", "in-breeding", "line-breeding", "selfing", "It produces hybrid vigour."],
          ["M", "The law stating that the two alleles of a gene separate during gamete formation is the law of", "segregation", "independent assortment", "dominance only", "linkage", "It is Mendel's first law."],
          ["H", "From a cross of Tt × Tt producing 400 offspring, the expected number of short (tt) plants is", "100", "300", "200", "400", "One quarter are recessive."],
          ["H", "Reduced vigour and fertility resulting from mating close relatives is", "in-breeding depression", "hybrid vigour", "heterosis", "upgrading", "Harmful recessive genes are expressed."],
          ["H", "Judging the breeding value of a bull by the performance of its offspring is", "progeny testing", "mass selection", "pedigree selection", "test crossing", "Offspring reveal the sire's genes."],
        ],
      },
      {
        week: 3,
        title: "Range and pasture management",
        subtopics: ["Rangeland and its importance", "Characteristics of rangeland", "Range improvement", "Grazing systems"],
        objectives: ["Explain rangeland and its importance", "State the characteristics of rangeland", "Describe methods of range improvement", "Compare grazing systems"],
        lesson: {
          title: "Managing Grazing Land",
          summary: "Describe rangeland, its improvement and grazing systems.",
          minutes: 45,
          notes: `## Rangeland
**Rangeland** is an extensive area of **natural vegetation** (grasses, legumes, shrubs) used for **grazing and browsing** by livestock and wildlife. Most Nigerian rangeland is in the **savanna**.

## Importance
cheapest source of **feed** for ruminants; habitat for **wildlife**; watershed protection and erosion control; source of thatch, herbs and fuel wood; recreation and tourism.

## Characteristics of rangeland
- **low and erratic rainfall**
- **natural, mixed vegetation** of varying quality
- **extensive** in area; low carrying capacity
- communal ownership and **uncontrolled grazing**
- **seasonal** changes in quantity and quality of forage (abundant in the rains, scarce and fibrous in the dry season)
- frequent **bush fires**
- selective grazing leads to dominance of unpalatable species

## Problems
**overgrazing**; bush burning; erosion and **desertification**; water scarcity; encroachment by farms; poisonous plants; tsetse flies and ticks; farmer–herder conflicts.

## Range improvement
- **controlled stocking** — matching animal numbers to **carrying capacity**
- **rotational grazing** and **deferred grazing** (resting areas to allow seeding)
- **reseeding** with improved grasses and legumes
- **controlled burning** early in the dry season to remove dead material and stimulate regrowth
- **fertiliser** application
- **water points** (boreholes, earth dams) spread across the range
- **bush control** and removal of poisonous plants
- **fire breaks**
- **grazing reserves** and stock routes; **ranching**
- pest and parasite control

## Grazing systems
| System | Description |
|---|---|
| **continuous grazing** | animals stay on one area all the time; simple but leads to overgrazing |
| **rotational grazing** | pasture divided into paddocks grazed in turn; allows regrowth; breaks parasite cycles |
| **strip grazing** | animals given a fresh strip daily using movable (often electric) fences; highly efficient |
| **deferred grazing** | part of the range is rested for a season |
| **zero grazing (soilage)** | forage is cut and carried to confined animals |
| **nomadism / transhumance** | herders move with stock in search of pasture and water |
**Carrying capacity** — the number of animals a unit of land can support for a period without damage.`,
          examples: `**Example 1.** What is carrying capacity? *Answer:* The **number of animals** a unit of land can support without damage.

**Example 2.** Give one method of range improvement. *Answer:* **reseeding** with improved species (or controlled stocking).

**Example 3.** In which system is a fresh strip of pasture given daily? *Answer:* **strip grazing**.`,
        },
        questions: [
          ["E", "An extensive area of natural vegetation used for grazing is", "rangeland", "an orchard", "a plantation", "a nursery", "It is natural grazing land."],
          ["E", "Too many animals grazing an area until the vegetation is destroyed is", "overgrazing", "deferred grazing", "strip grazing", "reseeding", "The range is damaged."],
          ["E", "Cutting forage and carrying it to confined animals is", "zero grazing", "continuous grazing", "nomadism", "strip grazing", "Animals do not graze outside."],
          ["M", "The number of animals a unit of land can support without damage is its", "carrying capacity", "stocking density only", "seed rate", "yield gap", "It guides stocking."],
          ["M", "Resting part of a range for a season to allow plants to seed is", "deferred grazing", "continuous grazing", "zero grazing", "overstocking", "Grazing is delayed."],
          ["M", "Planting improved grasses and legumes on degraded range is", "reseeding", "burning", "overgrazing", "fencing only", "It restores the sward."],
          ["M", "A characteristic of rangeland is", "low and erratic rainfall", "intensive fertiliser use", "small fenced plots", "irrigated crops", "Rainfall is unreliable."],
          ["H", "Giving animals a fresh narrow area of pasture each day using movable fences is", "strip grazing", "continuous grazing", "deferred grazing", "nomadism", "Pasture is used efficiently."],
          ["H", "Controlled early burning of rangeland is done to", "remove dead material and stimulate fresh regrowth", "destroy all the grass roots", "increase tsetse flies", "cause erosion", "Old growth is cleared."],
          ["H", "A disadvantage of continuous grazing is that it", "encourages overgrazing and parasite build-up", "needs many paddocks", "requires electric fences", "wastes labour", "The land is never rested."],
        ],
      },
      {
        week: 4,
        title: "Processing of livestock products",
        subtopics: ["Meat processing", "Milk processing", "Egg handling and processing", "Hides, skins and by-products"],
        objectives: ["Describe the processing and preservation of meat", "Describe the processing of milk", "Describe egg handling, grading and preservation", "Describe the processing of hides, skins and by-products"],
        lesson: {
          title: "From Farm Animal to Product",
          summary: "Describe the processing of meat, milk, eggs, hides and by-products.",
          minutes: 45,
          notes: `## Meat
- animals are rested, inspected (**ante-mortem inspection**), slaughtered humanely in an **abattoir**, bled, flayed (skinned) or scalded, eviscerated and split
- **post-mortem meat inspection** detects diseases and parasites (e.g. tapeworm cysts, tuberculosis)
- **dressing percentage** = carcass weight ÷ live weight × 100; e.g. a 300 kg bull giving a 165 kg carcass has **55%**
- preservation: **chilling and freezing**, **smoking**, **sun-drying** (e.g. **kilishi**), **salting/curing** (bacon, ham), **canning**, frying
- products: fresh meat, sausages, corned beef, suya, kilishi

## Milk
- composition: about 87% water, with fat, protein (casein), lactose, minerals and vitamins
- **pasteurisation** — heating to about **72 °C for 15 seconds** (or 63 °C for 30 minutes) and rapid cooling to kill disease organisms
- **sterilisation / UHT** — higher temperatures for long-life milk
- **homogenisation** — breaking fat globules so cream does not separate
- products: **butter** (churned cream), **cheese** (curdled casein; local **wara**), **yoghurt** and **nono** (fermented milk), **ghee**, evaporated, condensed and powdered milk, ice cream
- hygiene: clean utensils, healthy cows, quick cooling

## Eggs
- collect at least twice daily; store in a cool place, **broad end up**
- **candling** — examining an egg against a light to check the air cell, cracks, blood spots and (in hatcheries) fertility
- **grading** by weight and quality
- preservation: refrigeration, oiling the shell, drying into egg powder
- structure: shell, shell membranes, air cell, albumen, chalazae, yolk, germinal disc

## Hides and skins
- **hide** — from large animals (cattle); **skin** — from small animals (sheep, goats)
- **flaying** (removal), **curing** by salting or drying, then **tanning** to make leather
- defects: brand marks, tick bites, knife cuts
- Red Sokoto goat skin gives high-quality "Morocco" leather

## By-products
**blood meal**, **bone meal**, **meat and bone meal**, **feather meal**, horns and hooves (buttons, glue), fat (tallow, soap), manure and poultry droppings (fertiliser, biogas), wool and hair.`,
          examples: `**Example 1.** A 300 kg bull gives a 165 kg carcass. Find the dressing percentage. *Answer:* 165 ÷ 300 × 100 = **55%**.

**Example 2.** What is pasteurisation? *Answer:* **Heating milk** to about 72 °C for 15 seconds and cooling it quickly to kill disease organisms.

**Example 3.** What is candling? *Answer:* **Examining an egg against a light** to check its quality.`,
        },
        questions: [
          ["E", "A place where animals are slaughtered and inspected is an", "abattoir", "apiary", "hatchery", "orchard", "Meat is processed there."],
          ["E", "Examining eggs against a light to check quality is", "candling", "grading only", "flaying", "curing", "Light shows the inside."],
          ["E", "The skin of cattle used for leather is called a", "hide", "pelt of rabbit", "fleece", "fur", "Hides come from large animals."],
          ["M", "Heating milk to about 72 °C for 15 seconds and cooling it quickly is", "pasteurisation", "homogenisation", "churning", "fermentation", "It kills disease organisms."],
          ["M", "Butter is made by", "churning cream", "curdling casein", "drying milk", "fermenting whey", "Fat globules clump together."],
          ["M", "The conversion of hides and skins into leather is", "tanning", "flaying", "candling", "rendering", "Tannins preserve the hide."],
          ["M", "A dried, spiced meat product of northern Nigeria is", "kilishi", "wara", "nono", "ghee", "It is sun-dried beef."],
          ["H", "A 300 kg bull that gives a 165 kg carcass has a dressing percentage of", "55%", "45%", "65%", "182%", "165 divided by 300, times 100."],
          ["H", "Breaking up the fat globules in milk so that cream does not separate is", "homogenisation", "pasteurisation", "sterilisation", "candling", "Fat is evenly dispersed."],
          ["H", "Post-mortem meat inspection is important mainly because it", "detects diseases and parasites harmful to consumers", "increases carcass weight", "tenderises the meat", "replaces refrigeration", "Unsafe meat is condemned."],
        ],
      },
      {
        week: 5,
        title: "Agricultural finance",
        subtopics: ["Meaning and need for agricultural finance", "Classes and sources of credit", "Agricultural finance institutions in Nigeria", "Capital market and problems of finance"],
        objectives: ["Explain agricultural finance and why farmers need it", "Classify credit and identify its sources", "Describe agricultural finance institutions and schemes in Nigeria", "Analyse problems of farmers and lenders"],
        lesson: {
          title: "Financing the Farm Business",
          summary: "Explain agricultural credit, its sources, institutions and problems.",
          minutes: 45,
          notes: `## Meaning
**Agricultural finance** is the **acquisition and use of capital** in the farm business. **Credit** is borrowed capital repaid with **interest**; a **subsidy** is a government payment that reduces the cost of inputs; a **grant** need not be repaid.

## Why farmers need finance
to buy land, machinery and inputs; pay labour; expand; adopt new technology; process and store produce; meet expenses before harvest income arrives.

## Classes of credit
| Basis | Classes |
|---|---|
| **period** | **short-term** (under about 1 year — seeds, fertiliser); **medium-term** (1–5 years — livestock, small machines); **long-term** (over 5 years — land, buildings, tree crops) |
| **source** | **institutional (formal)** and **non-institutional (informal)** |
| **purpose** | production, marketing, consumption credit |
| **security** | secured (with collateral) and unsecured |

## Sources
- **institutional**: commercial banks, **Bank of Agriculture (BOA)**, microfinance banks, co-operative societies, government agencies, insurance companies
- **non-institutional**: personal savings, relatives and friends, **money lenders** (high interest), esusu/ajo, produce buyers who advance cash

## Institutions and schemes in Nigeria
- **Bank of Agriculture** — the specialised agricultural development bank (formerly the Nigerian Agricultural, Co-operative and Rural Development Bank)
- **Agricultural Credit Guarantee Scheme Fund (ACGSF)** — set up in **1977**, managed by the **Central Bank**, guarantees a large part of banks' agricultural loans against default
- **Nigerian Agricultural Insurance Corporation (NAIC)** — insures crops and livestock
- **NIRSAL** — shares the risk of agricultural lending
- **Anchor Borrowers' Programme** — links small farmers to processors with input loans
- **co-operatives** and microfinance banks for small loans

## Simple interest
**Interest = principal × rate × time ÷ 100**.
A loan of ₦200,000 at 10% per year for 2 years: interest = 200,000 × 10 × 2 ÷ 100 = **₦40,000**; total repayment = **₦240,000**.

## Problems of farmers in getting credit
lack of **collateral**; high interest; no records; small, scattered farms; ignorance of procedures; late release of loans; uncertainty of yields.

## Problems of lenders
high **risk** of crop failure; **default**; **diversion** of loans; high cost of supervising many small loans; lack of insurance cover; natural disasters.`,
          examples: `**Example 1.** Calculate the simple interest on ₦200,000 at 10% per year for 2 years. *Answer:* **₦40,000**.

**Example 2.** Which scheme guarantees banks' agricultural loans? *Answer:* the **ACGSF** (1977).

**Example 3.** Give one problem lenders face. *Answer:* **loan default** (or diversion).`,
        },
        questions: [
          ["E", "Borrowed capital that is repaid with interest is", "credit", "subsidy", "grant", "savings", "It is a loan. Answer: credit."],
          ["E", "A government payment that reduces the cost of farm inputs is a", "subsidy", "loan", "premium", "tax", "Farmers pay less for inputs."],
          ["E", "A loan for buying land or establishing tree crops is", "long-term credit", "short-term credit", "seasonal credit", "consumption credit", "It is repaid over many years."],
          ["M", "The specialised agricultural development bank in Nigeria is the", "Bank of Agriculture", "Central Bank only", "Bank of Industry", "Mortgage Bank", "It lends to farmers."],
          ["M", "The Agricultural Credit Guarantee Scheme Fund was set up in", "1977", "1960", "1990", "2005", "It is managed by the CBN."],
          ["M", "The simple interest on ₦200,000 at 10% per year for 2 years is", "₦40,000", "₦20,000", "₦4,000", "₦240,000", "200,000 × 10 × 2 ÷ 100."],
          ["M", "A non-institutional source of farm credit is", "relatives and friends", "commercial banks", "microfinance banks", "the Bank of Agriculture", "It is informal."],
          ["H", "The total repayment on ₦500,000 borrowed at 12% simple interest for 3 years is", "₦680,000", "₦560,000", "₦180,000", "₦620,000", "Interest is 180,000 plus the principal."],
          ["H", "The ACGSF encourages banks to lend to farmers by", "guaranteeing a large part of the loan against default", "giving free seeds", "fixing crop prices", "buying farm produce", "Banks' risk is reduced."],
          ["H", "A problem faced by lenders of agricultural credit is", "diversion of loans to non-farm uses", "too much collateral", "very low risk", "too few borrowers", "Loans may not be used for farming."],
        ],
      },
    ],
  },
];
