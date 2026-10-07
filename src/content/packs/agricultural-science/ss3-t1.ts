import type { TermPlan } from "../types";

/** SS3 Agricultural Science, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Crop Improvement",
      subtopics: ["Meaning and objectives of crop improvement", "Methods: introduction, selection and hybridisation", "Advantages and disadvantages of each method", "Importance of genetic improvement"],
      objectives: ["Define crop improvement and state its aims", "Describe introduction, selection and hybridisation", "State the advantages and disadvantages of each method", "Explain the importance of genetic improvement of crops"],
      lesson: {
        title: "Breeding Better Crops",
        summary: "How farmers and scientists develop crop varieties that yield more and resist pests, diseases and drought.",
        minutes: 40,
        notes: `## Meaning
**Crop improvement** is the science of developing crop varieties that are **better** than existing ones in yield, quality and adaptation. It applies the principles of **genetics** (Mendel's laws) to crop plants. The person who does this is a **plant breeder**.

## Aims (objectives)
- higher **yield**
- better **quality** — taste, nutrient content, appearance, storage life
- **resistance** to pests and diseases
- **early maturity**
- **adaptation** to climate and soil — drought, flooding, acidity
- **uniformity** of growth and maturity, suiting mechanical harvesting
- resistance to **lodging** (short, strong stems)
- seeds that **do not shatter**; easy harvesting and processing

## Methods
### 1. Introduction
Bringing in a variety with desirable characters from **another place** — another country or region — where it has done well. Many of our crops were introduced: cocoa and cassava from South America, improved rice from Asia.

The material must first pass **plant quarantine** to make sure no new pest or disease comes with it, and be **tested** in the new environment.

| Advantages | Disadvantages |
|---|---|
| quick and cheap — no breeding needed | may bring in **new pests and diseases** |
| brings new varieties and new genes | may not **adapt** to the new climate and soil |
| enlarges the range of crops grown | may displace hardy local varieties |

### 2. Selection
Picking out the **best plants** from a mixed population and using their seed for the next crop.

| Type | Procedure |
|---|---|
| **mass selection** | seeds of many good-looking plants are harvested and **bulked** together for planting; repeated over seasons |
| **pure-line selection** | seed from a **single** outstanding self-pollinated plant is multiplied; the progeny are uniform |
| **pedigree selection** | individual plants are selected over generations with **records** of their ancestry kept |
| **progeny selection** | parents are judged by the performance of their **offspring** |

| Advantages | Disadvantages |
|---|---|
| simple; needs little skill or equipment | **slow** — many generations |
| uses adapted local material | brings in **no new characters**; limited to variation already present |
| removes poor types | appearance may be due to environment, not genes |

### 3. Hybridisation (cross-breeding)
Crossing two **different** varieties (or species) so that the offspring — the **hybrid** — combines the good qualities of both.

**Steps:** choose parents → **emasculate** the female parent (remove the anthers before they shed pollen) → **bag** the flower → transfer pollen from the male parent → re-bag and **label** → harvest the hybrid seed → test and select.

- **Inbreeding (selfing)** produces pure lines, but vigour may fall (**inbreeding depression**).
- **Crossing two inbred lines** gives offspring with **hybrid vigour (heterosis)** — as in hybrid maize.
- **Backcrossing** — crossing the hybrid back to one parent — transfers a single trait such as disease resistance.

| Advantages | Disadvantages |
|---|---|
| combines desirable characters from two parents | **costly**, slow and needs skill |
| hybrid vigour: higher yield, faster growth | hybrid seed does **not breed true** — fresh seed must be bought each season |
| produces new varieties | undesirable characters may also be combined |

### Other modern methods
**Mutation breeding** (radiation, chemicals), **polyploidy**, **tissue culture**, and **genetic engineering** (e.g. pest-resistant Bt cowpea).

## Importance of genetic improvement
More food and farm income; lower losses to pests and less spending on chemicals; crops for marginal lands; better nutrition (pro-vitamin A cassava and maize); raw materials for industry; food security for a growing population.

Institutes involved include IITA (Ibadan), IAR (Zaria), NRCRI (Umudike), NCRI (Badeggi) and CRIN (Ibadan).`,
        examples: `**Example 1.** Name the method of crop improvement in which a variety is brought from another country. *Answer:* **introduction**.

**Example 2.** Why must hybrid maize seed be bought every season? *Answer:* Hybrids **do not breed true**; seed saved from them gives variable, lower-yielding plants.

**Example 3.** What is emasculation? *Answer:* The **removal of the anthers** of a flower before pollen is shed, to prevent self-pollination.`,
      },
      questions: [
        ["E", "The development of crop varieties that are better than existing ones is", "crop improvement", "crop rotation", "crop protection", "crop processing", "It applies genetics to crop plants."],
        ["E", "Bringing a crop variety from another country for use by local farmers is", "introduction", "selection", "hybridisation", "mutation", "The variety is tested and quarantined first."],
        ["E", "Which of these is an aim of crop improvement?", "Resistance to diseases", "Late maturity", "Lower yield", "Increased lodging", "Breeders aim at resistant, high-yielding, early crops."],
        ["M", "Crossing two different varieties of a crop to combine their good qualities is", "hybridisation", "mass selection", "introduction", "quarantine", "The offspring is a hybrid."],
        ["M", "A major danger of crop introduction is that it may", "bring in new pests and diseases", "reduce the number of varieties", "make breeding unnecessary", "increase soil fertility", "This is why plant quarantine is enforced."],
        ["M", "The removal of anthers from a flower to prevent self-pollination is", "emasculation", "bagging", "budding", "roguing", "It is done on the female parent before crossing."],
        ["M", "In mass selection, the seeds of the selected plants are", "bulked together and planted", "each planted in a separate labelled row", "treated with radiation", "discarded", "Seed from many good plants is mixed."],
        ["H", "The superior performance of a hybrid over both of its parents is known as", "heterosis", "inbreeding depression", "dormancy", "segregation", "Heterosis is also called hybrid vigour."],
        ["H", "A disadvantage of selection as a method of crop improvement is that it", "introduces no new characters", "requires costly laboratories", "always brings in new diseases", "needs emasculation", "Selection works only on variation already present."],
        ["H", "Crossing a hybrid back to one of its parents to transfer a single desirable trait is", "backcrossing", "selfing", "mass selection", "polyploidy", "Repeated backcrosses recover the parent type plus the new trait."],
      ],
      jamb: [
        ["M", "Which of the following agencies ensures that introduced planting materials are free from pests and diseases?", "Plant quarantine service", "Agricultural credit bank", "Marketing board", "Extension service", "Quarantine inspects and holds imported plant materials."],
        ["H", "Continuous self-pollination of a naturally cross-pollinated crop such as maize leads to", "loss of vigour", "hybrid vigour", "polyploidy", "increased variation", "Inbreeding depression reduces vigour and yield."],
      ],
    },
    {
      week: 2,
      title: "Animal Improvement",
      subtopics: ["Meaning and objectives of animal improvement", "Introduction, selection and breeding systems", "Artificial insemination", "Embryo transfer; advantages and limitations"],
      objectives: ["Define animal improvement and state its aims", "Describe inbreeding, line breeding, crossbreeding and outbreeding", "Explain artificial insemination and embryo transfer", "State the advantages and limitations of each method"],
      lesson: {
        title: "Breeding Better Livestock",
        summary: "The methods used to raise the productivity of farm animals.",
        minutes: 40,
        notes: `## Meaning and aims
**Animal improvement** is the development of livestock that perform **better than their parents**.

**Aims:** higher yield of meat, milk, eggs or wool; **faster growth** and early maturity; better **feed conversion**; resistance to **diseases and parasites**; tolerance of heat and local conditions; higher fertility; better quality products.

## Methods
### 1. Introduction
Importing superior breeds from other places — e.g. Friesian cattle, Large White pigs, Rhode Island Red fowls. *Advantage:* quick. *Disadvantages:* may not adapt to the tropics; may bring diseases; costly.

### 2. Selection
Choosing the **best animals as parents** and **culling** the poor ones.
| Type | Basis |
|---|---|
| **mass selection** | the animal's own performance and appearance |
| **progeny selection** | performance of its offspring |
| **family selection** | performance of its relatives |
| **pedigree selection** | records of its ancestors |

### 3. Breeding systems
| System | Meaning | Advantages | Limitations |
|---|---|---|---|
| **inbreeding** | mating **closely related** animals (father–daughter, brother–sister) | produces pure lines; fixes desirable traits; exposes hidden defects | **inbreeding depression**: low vigour, poor fertility, reduced growth |
| **line breeding** | mating less closely related animals (cousins) to keep the traits of an outstanding ancestor | concentrates good genes with less risk | some loss of vigour |
| **crossbreeding** | mating animals of **different breeds** (N'Dama × Friesian) | **hybrid vigour**; combines the hardiness of local breeds with the yield of exotic ones | offspring do not breed true; needs two pure breeds |
| **outbreeding (outcrossing)** | mating **unrelated** animals of the **same breed** | maintains vigour; introduces new genes | less uniformity |
| **upgrading** | repeatedly mating local females with a superior pure-bred male | cheap way to improve a local herd | slow |

### 4. Artificial insemination (AI)
The collection of **semen** from a proven male and its introduction into the female's reproductive tract **by instruments**, not by natural mating.

**Steps:** semen is collected (artificial vagina, massage or electro-ejaculation) → examined → **diluted** with an extender (egg yolk–citrate) → stored (frozen in **liquid nitrogen** at −196 °C) → the female on **heat (oestrus)** is inseminated with a syringe or insemination gun.

| Advantages | Limitations |
|---|---|
| one superior male can serve **thousands** of females | needs **trained** personnel and equipment |
| cheaper than keeping or importing bulls | **heat detection** must be accurate |
| semen can be transported and **stored for years** | costly storage facilities |
| prevents spread of **venereal diseases** | a defective sire spreads faults widely |
| overcomes differences in size between male and female | low conception if poorly timed |
| allows accurate breeding records | |

### 5. Embryo transfer
A superior **donor** female is treated with hormones to produce many eggs (**superovulation**) and is inseminated. The embryos are **flushed out** about a week later and placed in the uteri of ordinary **recipient (surrogate)** females, which carry them to birth.

| Advantages | Limitations |
|---|---|
| many offspring from one superior female each year | very **expensive** |
| embryos can be frozen and transported | needs **high skill** and laboratories |
| rapid genetic improvement | recipients' cycles must be **synchronised** |
| conserves rare breeds | low success rate under field conditions |

## Summary
Improvement combines **good genes** (breeding) with a **good environment** (feeding, housing and health).`,
        examples: `**Example 1.** Define artificial insemination. *Answer:* The **introduction of semen into the female reproductive tract by instruments** instead of natural mating.

**Example 2.** Which breeding system gives hybrid vigour? *Answer:* **crossbreeding**.

**Example 3.** State one disadvantage of inbreeding. *Answer:* **Inbreeding depression** — reduced vigour and fertility.`,
      },
      questions: [
        ["E", "The mating of closely related animals is", "inbreeding", "crossbreeding", "outbreeding", "upgrading", "Examples are father–daughter and brother–sister matings."],
        ["E", "The removal of unproductive animals from a herd is", "culling", "castration", "dipping", "flushing", "Culling leaves only good animals as parents."],
        ["E", "In artificial insemination, semen is introduced into the female by", "instruments", "natural mating", "feeding", "injection into the blood", "A syringe or insemination gun is used."],
        ["M", "Mating a White Fulani cow with a Friesian bull is an example of", "crossbreeding", "inbreeding", "line breeding", "selfing", "The parents belong to different breeds."],
        ["M", "Semen for artificial insemination is stored for long periods in", "liquid nitrogen", "warm water", "kerosene", "dry ice-free air", "It is frozen at −196 °C."],
        ["M", "An advantage of artificial insemination is that", "one male can serve very many females", "no skill is required", "heat detection is unnecessary", "it needs no equipment", "The semen of one sire is diluted into many doses."],
        ["M", "Selection of an animal based on the performance of its offspring is", "progeny selection", "mass selection", "pedigree selection", "family selection", "The parent is judged by its progeny."],
        ["H", "Treating a donor female with hormones so that she releases many eggs is", "superovulation", "oestrus synchronisation only", "parturition", "lactation", "It precedes embryo collection."],
        ["H", "The female that receives and carries a transferred embryo is the", "recipient", "donor", "sire", "dam of the semen", "She acts as a surrogate mother."],
        ["H", "Repeated mating of local females with a superior pure-bred male over generations is", "upgrading", "inbreeding", "embryo transfer", "culling", "The herd gradually approaches the pure breed."],
      ],
      jamb: [
        ["M", "Which of the following is a disadvantage of inbreeding in farm animals?", "Reduced vigour and fertility", "Hybrid vigour", "Introduction of new genes", "Increased heterozygosity", "Inbreeding depression lowers performance."],
        ["H", "Artificial insemination is carried out when the female animal is", "on heat", "pregnant", "lactating only", "weaned", "Conception is possible only during oestrus."],
      ],
    },
    {
      week: 3,
      title: "Animal Health Management",
      subtopics: ["Importance of animal health", "Common diseases of livestock", "Parasites of livestock", "Prevention, control and routine management practices"],
      objectives: ["Explain the importance of animal health", "Classify livestock diseases by their causal organisms", "Describe the symptoms and control of common diseases and parasites", "Outline routine management practices for healthy animals"],
      lesson: {
        title: "Keeping Farm Animals Healthy",
        summary: "The diseases and parasites of livestock, how to recognise them, and how to prevent them.",
        minutes: 40,
        notes: `## Importance of animal health
A **disease** is any departure from the normal state of health. Healthy animals grow fast and produce well; sick animals mean **lower yields, cost of drugs, deaths, poor-quality products** and, with **zoonoses** (anthrax, rabies, tuberculosis, brucellosis), danger to people.

### Signs of ill health
loss of appetite; dullness; rough coat or ruffled feathers; high temperature; discharges from eyes, nose or mouth; diarrhoea; coughing; loss of weight; drop in milk or egg production; isolation from the flock.

## Diseases by causal organism
### Viral
| Disease | Animals | Symptoms | Control |
|---|---|---|---|
| **rinderpest** | cattle | high fever, bloody diarrhoea, mouth sores | vaccination (now eradicated worldwide) |
| **foot-and-mouth** | cattle, sheep, pigs | blisters on mouth and feet, salivation, lameness | vaccination, quarantine |
| **Newcastle disease** | poultry | twisted neck, greenish diarrhoea, gasping, paralysis | vaccination |
| **fowl pox** | poultry | wart-like scabs on comb and wattles | vaccination |
| **African swine fever** | pigs | high fever, skin reddening, sudden death | slaughter, strict sanitation |
| **rabies** | dogs, all mammals | aggression, salivation, paralysis | vaccination |

### Bacterial
| Disease | Animals | Symptoms | Control |
|---|---|---|---|
| **anthrax** | cattle, sheep | sudden death; dark blood from openings | vaccination; burn or deeply bury carcass — never open it |
| **brucellosis** (contagious abortion) | cattle, goats, pigs | abortion, retained placenta | vaccination, test and cull |
| **tuberculosis** | cattle | chronic cough, wasting | test and slaughter |
| **mastitis** | dairy cows | swollen, hot udder; clots in milk | milking hygiene, antibiotics |
| **fowl cholera / typhoid** | poultry | greenish-yellow diarrhoea | sanitation, antibiotics, vaccination |

### Protozoan
| Disease | Vector | Symptoms | Control |
|---|---|---|---|
| **trypanosomiasis (nagana)** | tsetse fly | fever, anaemia, wasting | drugs, clear tsetse habitat, trypanotolerant N'Dama and Muturu |
| **coccidiosis** | none (contaminated litter) | bloody droppings in chicks, rabbits | coccidiostats, dry litter |
| **redwater (babesiosis)** | tick | red urine, fever | dipping |

### Fungal
**Ringworm**; **aspergillosis** (brooder pneumonia) from mouldy litter and feed.

### Nutritional
Rickets (calcium, phosphorus, vitamin D); milk fever (calcium); anaemia in piglets (iron); bloat.

## Parasites
| | Examples | Effects | Control |
|---|---|---|---|
| **ectoparasites** (on the body) | ticks, lice, mites, fleas, tsetse flies | suck blood; irritation; damage hides; transmit diseases | dipping, spraying, dusting |
| **endoparasites** (inside) | tapeworm, roundworm (*Ascaris*), liver fluke | anaemia, pot belly, poor growth, diarrhoea | **deworming** (drenching), rotational grazing, drainage |

The **liver fluke** needs a **water snail** as intermediate host; the tapeworm passes between pig or cattle and man.

## Prevention and control
- **vaccination** against the main diseases
- **quarantine** of new or sick animals; **isolation** of the sick
- **sanitation**: clean, well-ventilated houses; disinfectant foot-baths; proper disposal of dead animals
- **good nutrition** and clean water
- avoid **overcrowding**
- regular **deworming** and **dipping**
- control of vectors and intermediate hosts
- buy stock from **reliable sources**; cull persistently sick animals
- call a **veterinary** officer early

## Routine management practices
deworming; dipping or spraying; vaccination; **debeaking** (poultry); **dehorning**; **castration**; hoof trimming; tail docking; **identification** (ear-tagging, tattooing, branding); weighing and record keeping; cleaning of feeders and drinkers.`,
        examples: `**Example 1.** Name the vector of trypanosomiasis. *Answer:* the **tsetse fly** (*Glossina*).

**Example 2.** How should the carcass of an animal that died of anthrax be disposed of? *Answer:* **Burn or bury it deeply without opening it.**

**Example 3.** Distinguish ectoparasites from endoparasites with one example each. *Answer:* Ectoparasites live **on** the body (tick); endoparasites live **inside** it (tapeworm).`,
      },
      questions: [
        ["E", "A fowl with a twisted neck, greenish diarrhoea and gasping is most likely suffering from", "Newcastle disease", "fowl pox", "coccidiosis", "rickets", "These are the classic signs of this viral disease of poultry."],
        ["E", "Dipping of cattle is carried out mainly to control", "ticks and other ectoparasites", "tapeworms", "liver flukes", "nutritional diseases", "The animals pass through a bath of acaricide."],
        ["E", "The practice of giving animals drugs to expel intestinal worms is", "deworming", "dipping", "debeaking", "dehorning", "Drenching with an anthelmintic removes worms."],
        ["M", "Trypanosomiasis in cattle is transmitted by the", "tsetse fly", "tick", "mosquito", "water snail", "Glossina carries the trypanosome."],
        ["M", "Which of these diseases is caused by a bacterium?", "Anthrax", "Rinderpest", "Newcastle disease", "Coccidiosis", "Anthrax is caused by Bacillus anthracis."],
        ["M", "Blood-stained droppings in young chicks kept on damp litter suggest", "coccidiosis", "fowl pox", "rickets", "mastitis", "The protozoan damages the intestinal wall."],
        ["M", "Keeping newly purchased animals apart for observation before they join the herd is", "quarantine", "culling", "vaccination", "castration", "It prevents the introduction of disease."],
        ["H", "Draining swampy pastures helps to control liver fluke because it", "destroys the habitat of the snail host", "kills adult flukes in the liver", "vaccinates the animals", "removes ticks from the grass", "The fluke's larval stages need a freshwater snail."],
        ["H", "Diseases that can be transmitted from animals to man are called", "zoonoses", "deficiency diseases", "vectors", "antigens", "Examples are anthrax, rabies and tuberculosis."],
        ["H", "A dairy cow has a hot, swollen udder and clots in its milk. The disease is", "mastitis", "brucellosis", "milk fever", "foot-and-mouth disease", "Mastitis is inflammation of the udder."],
      ],
      jamb: [
        ["M", "Which of the following breeds of cattle is tolerant of trypanosomiasis?", "N'Dama", "White Fulani", "Sokoto Gudali", "Friesian", "N'Dama and Muturu are trypanotolerant."],
        ["H", "Which of the following is a viral disease of pigs?", "African swine fever", "Brucellosis", "Anthrax", "Coccidiosis", "It is caused by a virus and has no vaccine in general use."],
      ],
    },
    {
      week: 4,
      title: "Aquaculture",
      subtopics: ["Meaning and scope of aquaculture", "Extensive, semi-intensive and intensive systems", "Common species cultured", "Management practices and importance"],
      objectives: ["Define aquaculture and state its scope", "Compare extensive, semi-intensive and intensive systems", "Name fish species commonly cultured in Nigeria", "Describe pond management practices and the importance of aquaculture"],
      lesson: {
        title: "Fish Farming",
        summary: "The rearing of fish and other aquatic organisms under controlled conditions.",
        minutes: 40,
        notes: `## Meaning and scope
**Aquaculture** is the rearing of **aquatic organisms** — fish, shrimps, prawns, oysters, snails, frogs, seaweeds — under **controlled conditions**. **Fish farming (pisciculture)** is the rearing of fish in ponds, tanks or cages. It differs from **capture fisheries**, where wild fish are caught.

**Scope:** fish farming; shrimp and prawn farming; oyster and mussel culture; **hatchery** production of fingerlings; ornamental fish; integrated fish farming (fish-cum-poultry, fish-cum-rice).

## Systems of aquaculture
| | Extensive | Semi-intensive | Intensive |
|---|---|---|---|
| **stocking density** | low | moderate | very high |
| **feeding** | natural food only | natural food + **supplementary feed**; pond fertilised | complete **formulated feed** |
| **water control** | little; large ponds, dams, lakes | some | full — aeration, flow-through or recirculation; tanks, raceways, cages |
| **capital and labour** | low | moderate | high |
| **yield** | low | moderate | very high |

## Culture facilities
**Earthen ponds**, **concrete tanks**, plastic and tarpaulin tanks, **cages and pens** in open water, raceways.

### Parts of a pond
dykes (walls); inlet with screen; outlet (**monk** or spillway); core trench; harvesting basin.

## Species commonly cultured in Nigeria
| Fish | Notes |
|---|---|
| **catfish** (*Clarias gariepinus*, *Heterobranchus*) | hardy, air-breathing, fast-growing; most popular |
| **tilapia** (*Oreochromis niloticus*) | breeds freely; eats algae |
| **carp** (*Cyprinus carpio*) | tolerates poor water |
| ***Heterotis niloticus*** | plankton feeder |
| **Nile perch** (*Lates*), **snakehead** | predators; used to control tilapia numbers |
| ***Gymnarchus*** (trunk fish) | prized food fish |

### Qualities of a good culture fish
fast growth; hardy; accepts artificial feed; breeds in captivity; tolerates crowding; good taste and market value.

## Establishing a fish pond
1. **Site selection:** reliable clean water; **clay or clay-loam soil** that holds water; gentle slope; nearness to market; security.
2. **Construction:** clear, dig, build dykes, fix inlet and outlet.
3. **Liming:** quicklime or agricultural lime kills pests and corrects acidity.
4. **Fertilisation:** poultry droppings or NPK encourage **plankton** (natural fish food).
5. **Impounding:** fill with water.
6. **Stocking:** introduce healthy **fingerlings** in the cool of the day after **acclimatising** them.

## Management practices
- **feeding** twice daily at a fixed spot; about 3–5% of body weight; feed with 35–45% protein for catfish
- **water quality:** dissolved oxygen, pH (6.5–8.5), temperature; change water when polluted
- **sorting (grading)** to reduce cannibalism
- weed, predator and disease control; screens on inlets
- regular **sampling** to check growth
- **harvesting** — partial (netting) or total (draining) — at table size (about 4–6 months for catfish)
- **record keeping**

**Polyculture** — several species with different feeding habits in one pond — uses the pond more fully than **monoculture**.

## Fish preservation
smoking, salting, sun-drying, freezing, canning.

## Importance
- cheap source of high-quality **animal protein** → **food security**
- **income** and **employment**
- reduces fish imports and pressure on wild stocks
- uses land unsuited to crops
- by-products: fish meal, fish oil
- recreation and research`,
        examples: `**Example 1.** Give two reasons why catfish is widely cultured in Nigeria. *Answer:* It is **hardy** and **grows fast**.

**Example 2.** Why is a pond limed before stocking? *Answer:* To **kill pests and disease organisms** and **correct soil acidity**.

**Example 3.** Which system uses complete formulated feed and high stocking density? *Answer:* the **intensive** system.`,
      },
      questions: [
        ["E", "The rearing of aquatic organisms such as fish and shrimps under controlled conditions is", "aquaculture", "apiculture", "silviculture", "viticulture", "Fish farming is one branch of aquaculture."],
        ["E", "Young fish used for stocking a pond are called", "fingerlings", "poults", "kids", "spawn nets", "Fingerlings are about the length of a finger."],
        ["E", "The most suitable soil for constructing an earthen fish pond is", "clay soil", "sandy soil", "gravel", "stony soil", "Clay retains water."],
        ["M", "A fish pond is fertilised in order to", "encourage the growth of plankton", "kill the fish", "increase water acidity", "remove dissolved oxygen", "Plankton is the natural food of fish."],
        ["M", "The system of aquaculture with the highest stocking density is", "intensive", "extensive", "semi-intensive", "subsistence", "It depends on complete feeds and water control."],
        ["M", "Which of these fishes is most widely cultured in Nigeria?", "Clarias gariepinus", "Sardinella", "Shark", "Mackerel", "The African catfish is hardy and fast-growing."],
        ["M", "The structure used to let water out of a fish pond is the", "monk", "dyke", "inlet screen", "core trench", "The monk controls the water level and drainage."],
        ["H", "Rearing two or more species of fish with different feeding habits in one pond is", "polyculture", "monoculture", "cage culture", "raceway culture", "It makes full use of the food in the pond."],
        ["H", "A predatory fish is sometimes stocked with tilapia in order to", "control overpopulation of tilapia", "fertilise the pond", "raise the pH", "provide plankton", "Tilapia breeds prolifically and becomes stunted."],
        ["H", "Sorting catfish into size groups during rearing mainly reduces", "cannibalism", "plankton growth", "water temperature", "evaporation", "Larger catfish eat smaller ones."],
      ],
      jamb: [
        ["M", "Which of the following is a method of preserving fish?", "Smoking", "Liming", "Stocking", "Impounding", "Smoking dries the fish and adds preservatives from the smoke."],
        ["H", "Fingerlings are acclimatised before release into a pond in order to", "prevent shock from sudden change in water conditions", "increase their appetite", "sort them by sex", "fertilise the pond", "Temperature and pH are allowed to equalise gradually."],
      ],
    },
    {
      week: 6,
      title: "Apiculture (Bee Keeping)",
      subtopics: ["Meaning and importance of apiculture", "Types and castes of bees", "Bee-keeping equipment", "Management practices and products"],
      objectives: ["Define apiculture and state its importance", "Describe the castes of bees in a colony and their duties", "Identify bee-keeping equipment and their uses", "Describe management practices and the products of bee keeping"],
      lesson: {
        title: "Keeping Honeybees",
        summary: "How honeybees live, how they are kept, and what they give the farmer.",
        minutes: 40,
        notes: `## Meaning
**Apiculture** is the keeping and management of **honeybees** for honey and other products. The place where hives are kept is an **apiary**; the keeper is an **apiarist**. The common honeybee is *Apis mellifera* (the African race is *A. m. adansonii*).

## Types of bees
- **indigenous (wild) bees** — live in hollow trees and rocks; aggressive
- **exotic (modern) bees** — bred for gentleness and yield
- **stingless bees** — small; also produce honey

## Castes in a colony
A colony may hold 20 000–80 000 bees.

| Caste | Number | Features and duties |
|---|---|---|
| **queen** | one | the only fertile female; largest; **lays eggs** (up to 2 000 a day); produces pheromones that hold the colony together; lives 2–5 years |
| **drones** | a few hundred | males, from unfertilised eggs; no sting; **mate with the queen** and die; driven out when food is scarce |
| **workers** | thousands | sterile females; smallest; have a sting. They **clean** cells, **nurse** larvae, build comb from **wax**, **guard** the hive, **forage** for nectar, pollen, water and propolis, and make honey; live about six weeks |

Larvae fed on **royal jelly** throughout become queens.

**Swarming:** the old queen leaves with part of the colony to form a new one. **Absconding:** the whole colony deserts the hive because of disturbance, pests or hunger.

## Methods of bee keeping
- **traditional:** hollow logs, clay pots, gourds or baskets hung on trees; honey is taken by burning or smoking heavily — bees and brood are destroyed, and honey is of low quality.
- **modern:** movable-comb hives; the colony is preserved.

### Modern hives
| Hive | Description |
|---|---|
| **Kenya top-bar hive** | a trough with wooden top bars from which bees build comb; cheap; suited to African bees |
| **Langstroth hive** | boxes with movable **frames**; brood chamber below, **honey supers** above, separated by a queen excluder |

## Equipment
| Equipment | Use |
|---|---|
| **hive** | houses the colony |
| **bee suit, veil, gloves, boots** | protect the keeper from stings |
| **smoker** | produces smoke that **calms** the bees |
| **hive tool** | prises apart bars and frames; scrapes wax |
| **bee brush** | sweeps bees gently off combs |
| **queen excluder** | keeps the queen out of the honey chamber |
| **honey extractor** | spins honey out of combs |
| **knife, sieve, buckets** | uncapping and straining |
| **catcher box / bait hive** | attracts a swarm |

## Management practices
1. **Siting the apiary:** away from homes, schools and roads; near **flowering plants** and water; shaded; dry; sheltered from wind; secure from fire and thieves.
2. **Baiting and stocking:** rub the hive with beeswax or lemon grass to attract a swarm, or transfer a colony.
3. **Inspection:** every 2–3 weeks, in the **cool evening**, using smoke.
4. **Feeding** sugar syrup in the dearth period; providing **water**.
5. **Pest control:** ants, wax moths, hive beetles, lizards, termites — stand the hive on greased legs; keep the site clean.
6. **Harvesting:** take only **ripe, capped** combs, at night or late evening; leave brood and some honey for the bees.
7. **Processing:** uncap, extract or press, strain, bottle.

## Products and uses
| Product | Uses |
|---|---|
| **honey** | food and sweetener; medicine (coughs, wounds); confectionery; brewing (mead); cosmetics |
| **beeswax** | candles, polishes, cosmetics, batik, foundation sheets |
| **propolis** (bee glue) | medicinal ointments, varnish |
| **royal jelly** | health supplements, cosmetics |
| **pollen** | protein supplement |
| **bee venom** | treatment of some ailments |

## Importance
Income and employment with **little land and capital**; **pollination** raises yields of crops and fruit trees; nutrition and medicine; raw materials for industry; foreign exchange; encourages conservation of forests.`,
        examples: `**Example 1.** Which caste of bees makes the honey? *Answer:* the **workers**.

**Example 2.** State the function of the smoker. *Answer:* It produces smoke that **calms the bees** during inspection and harvesting.

**Example 3.** Apart from honey, name two products of bee keeping. *Answer:* **beeswax** and **propolis**.`,
      },
      questions: [
        ["E", "The keeping of bees for honey production is", "apiculture", "aquaculture", "sericulture", "horticulture", "The site is an apiary."],
        ["E", "The only fertile female in a bee colony is the", "queen", "worker", "drone", "nurse bee", "She lays all the eggs."],
        ["E", "The tool that produces smoke to calm bees is the", "smoker", "hive tool", "extractor", "queen excluder", "Smoke makes the bees less aggressive."],
        ["M", "The male bees in a colony are called", "drones", "workers", "queens", "soldiers", "Their function is to mate with the queen."],
        ["M", "Which of these is NOT a duty of worker bees?", "Laying fertilised eggs", "Collecting nectar", "Building combs", "Guarding the hive", "Egg laying is the work of the queen."],
        ["M", "The device that prevents the queen from entering the honey chamber is the", "queen excluder", "bee brush", "catcher box", "veil", "Its slots admit workers but not the larger queen."],
        ["M", "An apiary should be sited", "near flowering plants and away from homes", "in the centre of a market", "inside a classroom block", "on bare, windy ground", "Bees need forage and people need safety."],
        ["H", "The departure of the old queen with part of the colony to found a new one is", "swarming", "absconding", "foraging", "supersedure", "In absconding the whole colony leaves."],
        ["H", "A sticky substance collected by bees from plant buds and used to seal the hive is", "propolis", "royal jelly", "beeswax", "nectar", "Propolis is also called bee glue."],
        ["H", "An advantage of the top-bar hive over the traditional log hive is that", "combs can be removed without destroying the colony", "it needs no inspection", "bees never sting", "it requires burning to harvest", "Movable combs allow harvesting while preserving the bees."],
      ],
      jamb: [
        ["M", "Bees are important to crop farmers mainly because they", "pollinate flowers", "fix nitrogen", "control weeds", "improve soil structure", "Pollination increases fruit and seed set."],
        ["H", "A bee larva develops into a queen if it is fed throughout on", "royal jelly", "pollen only", "honey only", "propolis", "Worker larvae receive royal jelly for only a few days."],
      ],
    },
    {
      week: 8,
      title: "Agricultural Finance",
      subtopics: ["Meaning and importance of agricultural finance", "Formal and informal sources of finance", "Problems of agricultural finance", "Role of government and banks in agricultural credit"],
      objectives: ["Define agricultural finance and agricultural credit", "Classify credit by duration and by source", "Explain the problems farmers face in obtaining credit", "Describe the role of government and banks in agricultural credit"],
      lesson: {
        title: "Financing the Farm",
        summary: "Where farmers obtain money for production, the difficulties they meet, and how institutions help.",
        minutes: 40,
        notes: `## Meaning
**Agricultural finance** deals with the **acquisition and use of capital** in agriculture. **Agricultural credit** is money, goods or services lent to a farmer to be repaid later, usually with **interest**. A **subsidy** is government paying part of the cost of an input; a **grant** is money given without repayment.

## Importance
- to buy **inputs** — seeds, fertilisers, chemicals, feeds
- to buy **land, machinery** and build structures
- to pay **labour**
- to **expand** the farm and adopt new technology
- to finance **processing, storage and marketing**
- to tide the farmer over until harvest

## Classes of credit by duration
| Class | Period | Uses |
|---|---|---|
| **short-term** | up to 1 year | seeds, fertilisers, feeds, wages |
| **medium-term** | 1–5 years | small machines, livestock, work bulls |
| **long-term** | over 5 years | land, tractors, buildings, tree-crop plantations |

**Collateral (security)** is an asset pledged against a loan — land with a certificate of occupancy, buildings, machinery.

## Sources of finance
### Informal (non-institutional)
| Source | Remarks |
|---|---|
| **personal savings** | no interest; usually small |
| **friends and relatives** | quick, little or no interest; small and unreliable |
| **moneylenders** | quick, no collateral; **very high interest** |
| **esusu / ajo / adashe** (thrift and credit groups) | members contribute and collect in turn |
| **produce buyers and traders** | advance money against the crop; farmer must sell cheaply to them |

### Formal (institutional)
| Source | Remarks |
|---|---|
| **commercial banks** | large sums; demand collateral; moderate interest; short-term bias |
| **Bank of Agriculture (BOA)** | formerly NACB / NACRDB; specialised agricultural lender |
| **microfinance banks** | small loans to small-scale farmers |
| **co-operative societies** | lend members' pooled savings at low interest |
| **government agencies and programmes** | loans, grants, subsidies, input supply |
| **insurance companies; international agencies** (World Bank, IFAD, FAO) | project funds |

## Problems of agricultural finance
**Farmers' problems:** lack of **collateral**; **high interest rates**; much paperwork and delay; illiteracy; small, scattered farms; diversion of loans to non-farm uses; no farm records.

**Lenders' problems:** agriculture is **risky** (weather, pests, price swings); **high default** rate; long gestation of farm projects; high cost of supervising many small loans; lack of information on borrowers.

## Role of government
- established the **Bank of Agriculture**
- **Agricultural Credit Guarantee Scheme Fund (ACGSF, 1977)**, managed by the Central Bank, guarantees up to **75%** of a bank loan to a farmer in default
- **CBN intervention schemes** such as the Anchor Borrowers' Programme and NIRSAL
- **subsidies** on fertiliser, seeds and tractors
- **Nigerian Agricultural Insurance Corporation (NAIC)** — reduces lenders' risk
- direction of banks to lend to agriculture; **rural banking**
- encouraging **co-operatives**; extension advice on loan use

## Role of banks
Mobilise savings; grant loans and overdrafts; advise on projects; supervise loan use; open rural branches; handle payments for produce.

## Simple interest
$$I = \\frac{P \\times R \\times T}{100}$$
A loan of ₦200,000 at 10% for 2 years attracts interest of ₦40,000; total repayment ₦240,000.

## Making credit work
Borrow only for **productive** purposes; keep **records**; repay promptly; join a co-operative; insure the enterprise.`,
        examples: `**Example 1.** A farmer borrows ₦150,000 at 12% simple interest for 1 year. How much does he repay? *Answer:* interest $= 150\\,000 \\times 0.12 = ₦18,000$; repayment $= \\mathbf{₦168,000}$.

**Example 2.** Classify a loan for buying a tractor. *Answer:* **long-term credit**.

**Example 3.** State one disadvantage of borrowing from moneylenders. *Answer:* They charge **very high interest rates**.`,
      },
      questions: [
        ["E", "Money lent to a farmer to be repaid later with interest is", "agricultural credit", "a subsidy", "a grant", "a premium", "Credit must be repaid; grants need not be."],
        ["E", "An asset pledged as security for a loan is", "collateral", "interest", "premium", "dividend", "The lender may sell it if the borrower defaults."],
        ["E", "Which of these is an informal source of farm credit?", "Moneylenders", "Commercial banks", "Bank of Agriculture", "Microfinance banks", "Informal sources are non-institutional."],
        ["M", "A loan obtained to buy fertilisers and seeds for one season is", "short-term credit", "medium-term credit", "long-term credit", "a mortgage", "It is repaid within a year."],
        ["M", "The scheme under which the Central Bank guarantees a large part of bank loans to farmers is the", "ACGSF", "NAIC", "NAFDAC", "ADP", "The Agricultural Credit Guarantee Scheme Fund began in 1977."],
        ["M", "A major reason banks are reluctant to lend to small-scale farmers is", "lack of collateral", "abundance of farm records", "low risk in farming", "large farm sizes", "Without security the bank cannot recover its money."],
        ["M", "A major disadvantage of moneylenders as a source of credit is", "very high interest rates", "long delays", "demand for collateral documents", "too much paperwork", "They lend quickly but at exorbitant rates."],
        ["H", "A farmer borrows ₦400,000 at 15% simple interest per annum for 2 years. The total amount repaid is", "₦520,000", "₦460,000", "₦120,000", "₦415,000", "Interest is 400,000 × 15 × 2 ÷ 100 = ₦120,000."],
        ["H", "Credit for establishing a cocoa plantation is best classified as", "long-term", "short-term", "medium-term", "seasonal", "Tree crops take many years to yield returns."],
        ["H", "Government payment of part of the cost of fertiliser so that farmers buy it cheaply is a", "subsidy", "loan", "collateral", "tariff", "A subsidy lowers the price paid by the farmer."],
      ],
      jamb: [
        ["M", "Which of the following institutions was set up specifically to provide credit to farmers in Nigeria?", "Bank of Agriculture", "Nigerian Stock Exchange", "Nigeria Deposit Insurance Corporation", "Federal Mortgage Bank", "It was formerly the Nigerian Agricultural and Co-operative Bank."],
        ["H", "The use of a farm loan for a naming ceremony instead of production is an example of", "loan diversion", "loan guarantee", "collateralisation", "loan recovery", "Diversion is a common cause of default."],
      ],
    },
    {
      week: 9,
      title: "Farm Records and Accounts",
      subtopics: ["Meaning and importance of farm records", "Production, financial, inventory and consumption records", "Farm accounts: cash account and profit and loss account", "Valuation and depreciation"],
      objectives: ["Explain the importance of keeping farm records", "Describe the types of farm records", "Prepare a simple farm cash account and profit and loss account", "Calculate depreciation by the straight-line method"],
      lesson: {
        title: "Recording and Accounting on the Farm",
        summary: "The records a farmer keeps and how simple farm accounts are prepared from them.",
        minutes: 40,
        notes: `## Meaning
**Farm records** are written accounts of the **activities and transactions** of a farm. **Farm accounts** are statements of the **money** received and spent, showing whether the farm made a profit or loss.

## Importance
- show whether the farm is making **profit or loss**
- help in **planning and budgeting**
- help in **decision making** — which enterprise to expand or drop
- needed to obtain **loans** and for fair **tax** assessment
- show the **history** and progress of the farm
- help to detect **fraud, theft and waste**
- help in determining prices and in valuing the farm

## Types of farm records
| Record | Contents |
|---|---|
| **farm diary** | daily record of all activities and events |
| **farm inventory** | list of all **assets** (land, buildings, machines, tools, stock) and their values at a date |
| **production records** | crops: field, date planted, inputs used, yield; livestock: births, deaths, eggs or milk per day, feed used |
| **input records** | seeds, fertilisers, feeds, drugs bought and used |
| **labour record** | workers, tasks, hours, wages |
| **sales record** | date, item, quantity, price, buyer |
| **purchases (expenditure) record** | date, item, quantity, cost |
| **consumption record** | produce **eaten by the farm family** or given away |
| **financial records** | cash book, sales and purchases accounts, profit and loss account, balance sheet |

## Farm accounts
### Terms
- **assets** — what the farm owns: **fixed** (land, buildings, machinery) and **current** (cash, crops in store, feed, debtors)
- **liabilities** — what the farm owes: loans, creditors
- **net worth (capital)** = assets − liabilities
- **appreciation / depreciation** — gain / loss in value of an asset
- **salvage value** — value of an asset at the end of its useful life

### Cash account (cash analysis)
Receipts on the **left (debit)**, payments on the **right (credit)**. Balance = receipts − payments.

| Receipts | ₦ | Payments | ₦ |
|---|---|---|---|
| Sale of eggs | 180,000 | Feed | 110,000 |
| Sale of old layers | 60,000 | Drugs | 15,000 |
| | | Wages | 40,000 |
| | | **Balance c/d** | **75,000** |
| **Total** | **240,000** | **Total** | **240,000** |

### Profit and loss account
Prepared at the **end of the year**. **Expenses** (purchases and opening valuation) on the **left**; **income** (sales and closing valuation) on the **right**.
- income > expenses → **net profit**
- expenses > income → **net loss**

*Example:* sales ₦850,000; closing valuation ₦200,000; purchases and expenses ₦600,000; opening valuation ₦150,000.
Profit $= (850\\,000 + 200\\,000) - (600\\,000 + 150\\,000) = ₦300,000$.

### Balance sheet
A statement of **assets and liabilities** on a particular date; it shows the **net worth**.

## Depreciation (straight-line method)
$$\\text{annual depreciation} = \\frac{\\text{cost} - \\text{salvage value}}{\\text{useful life in years}}$$
A tractor bought for ₦5,000,000 with a salvage value of ₦500,000 after 10 years depreciates by ₦450,000 a year.

## Farm budget
An estimate of expected income and expenditure for a future period — a **partial budget** for one change, a **complete budget** for the whole farm.`,
        examples: `**Example 1.** A sprayer costs ₦60,000 and has a salvage value of ₦10,000 after 5 years. Find the annual depreciation. *Answer:* $\\dfrac{60\\,000 - 10\\,000}{5} = \\mathbf{₦10,000}$.

**Example 2.** A farm has assets of ₦2,400,000 and liabilities of ₦900,000. Find its net worth. *Answer:* $\\mathbf{₦1,500,000}$.

**Example 3.** Which record lists all the assets of the farm and their values? *Answer:* the **farm inventory**.`,
      },
      questions: [
        ["E", "A daily record of all activities carried out on a farm is the", "farm diary", "farm inventory", "balance sheet", "sales record", "Events are entered day by day."],
        ["E", "The value of a farm machine at the end of its useful life is its", "salvage value", "net worth", "premium", "opening valuation", "It is deducted from cost when calculating depreciation."],
        ["E", "What a farm owes to others is its", "liabilities", "assets", "net worth", "inventory", "Loans and unpaid bills are liabilities."],
        ["M", "Produce eaten by the farmer's household is entered in the", "consumption record", "sales record", "labour record", "input record", "It accounts for output not sold."],
        ["M", "The loss in value of a farm machine through use and age is", "depreciation", "appreciation", "salvage", "inflation", "It is charged as an annual cost."],
        ["M", "A farm has total assets of ₦3,000,000 and total liabilities of ₦1,200,000. Its net worth is", "₦1,800,000", "₦4,200,000", "₦1,200,000", "₦3,000,000", "Net worth = assets − liabilities."],
        ["M", "The account prepared at the end of the year to show whether a farm gained or lost money is the", "profit and loss account", "farm diary", "inventory", "labour record", "It compares income with expenses."],
        ["H", "A plough bought for ₦240,000 has a useful life of 8 years and a salvage value of ₦40,000. Its annual depreciation is", "₦25,000", "₦30,000", "₦35,000", "₦5,000", "(240,000 − 40,000) ÷ 8."],
        ["H", "A farmer had sales of ₦700,000 and a closing valuation of ₦150,000. Purchases and expenses were ₦520,000 and the opening valuation ₦100,000. The net profit was", "₦230,000", "₦180,000", "₦330,000", "₦130,000", "(700,000 + 150,000) − (520,000 + 100,000)."],
        ["H", "Which of these is a fixed asset on a farm?", "Farm building", "Feed in store", "Cash in hand", "Harvested maize", "Fixed assets last for many years."],
      ],
      jamb: [
        ["M", "Farm records are useful to a farmer seeking a bank loan because they", "show the financial position of the farm", "replace collateral in all cases", "reduce the interest rate to zero", "are a form of insurance", "Lenders judge creditworthiness from records."],
        ["H", "A machine costing ₦900,000 depreciates by ₦80,000 a year. If its salvage value is ₦100,000, its useful life is", "10 years", "8 years", "11.25 years", "9 years", "(900,000 − 100,000) ÷ 80,000."],
      ],
    },
    {
      week: 10,
      title: "Agricultural Marketing: Functions, Channels and Problems",
      subtopics: ["Meaning and importance of agricultural marketing", "Functions of marketing", "Marketing channels and agents", "Problems of agricultural marketing and solutions"],
      objectives: ["Define agricultural marketing and state its importance", "Explain the functions of marketing", "Describe marketing channels and agents", "Discuss the problems of marketing farm produce and suggest solutions"],
      lesson: {
        title: "From Farm Gate to Consumer",
        summary: "The activities that move farm produce from the farmer to the final consumer.",
        minutes: 40,
        notes: `## Meaning
**Agricultural marketing** covers all the activities involved in moving farm produce from the **farm (producer)** to the **final consumer**, in the form, at the time and at the place wanted.

## Importance
- makes produce **available** where and when it is needed
- provides **income** for farmers and traders
- encourages **increased production** and specialisation
- provides **employment**
- supplies raw materials to **industries** and earns **foreign exchange**
- stabilises prices between seasons through storage

## Functions of marketing
| Function | Explanation |
|---|---|
| **assembling** | collecting small lots from scattered farms into bulk |
| **grading and sorting** | separating into quality classes |
| **standardisation** | fixing uniform measures and grades |
| **processing** | changing the form: cassava → gari; groundnut → oil |
| **packaging** | protecting and presenting produce |
| **storage** | keeping until needed (time utility) |
| **transportation** | moving to where it is needed (place utility) |
| **financing** | providing money for the marketing process |
| **risk bearing** | carrying losses from spoilage, theft, price falls |
| **advertising / market information** | prices, supply and demand |
| **buying and selling** | exchange and transfer of ownership |

## Marketing agents
- **producers (farmers)**
- **co-operative societies** — sell members' produce in bulk
- **middlemen:** **wholesalers** (buy in bulk, sell to retailers); **retailers** (sell in small units to consumers); **commission agents / licensed buying agents**
- **commodity (marketing) boards** — formerly bought export crops at fixed prices; abolished in 1986
- **processors and exporters**

## Marketing channels
A **marketing channel** is the path produce takes to the consumer.
1. Farmer → consumer (farm-gate or roadside sales)
2. Farmer → retailer → consumer
3. Farmer → wholesaler → retailer → consumer
4. Farmer → co-operative → wholesaler → retailer → consumer
5. Farmer → licensed buying agent → exporter → foreign consumer

The longer the channel, the higher the final price and the smaller the farmer's share.

### Marketing margin
$$\\text{marketing margin} = \\text{consumer (retail) price} - \\text{farm-gate price}$$
It covers marketing costs and the middlemen's profit.

## Problems
1. **Poor roads and transport** — high costs and spoilage.
2. **Inadequate storage and processing** facilities — gluts at harvest, heavy losses.
3. **Perishability and bulkiness** of produce.
4. **Seasonality** — prices crash at harvest and soar later.
5. **Too many middlemen**.
6. **No standard weights, measures and grades**.
7. **Poor market information**.
8. **Lack of finance**.
9. **Small, scattered farms** — small lots, costly assembly.
10. Multiple levies and extortion on highways.

## Solutions
- build and maintain **rural feeder roads**
- provide **storage** (silos, cribs, cold rooms) and **agro-processing** plants
- form **marketing co-operatives**
- enforce **standard measures and grades**
- provide **market information** through radio, phones and extension
- give **credit** for marketing
- guaranteed minimum prices; commodity exchanges; strategic grain reserves
- encourage **contract farming** and linkage to industries`,
        examples: `**Example 1.** A basket of tomatoes sells for ₦6,000 at the farm gate and ₦10,500 in the city market. Find the marketing margin. *Answer:* $10\\,500 - 6\\,000 = \\mathbf{₦4,500}$.

**Example 2.** Which marketing function creates time utility? *Answer:* **storage**.

**Example 3.** Give one way co-operatives help in marketing. *Answer:* They **bulk members' produce and sell it at better prices**, by-passing some middlemen.`,
      },
      questions: [
        ["E", "All the activities involved in moving farm produce from the producer to the consumer are", "agricultural marketing", "agricultural extension", "farm mechanisation", "crop rotation", "Marketing links the farm to the consumer."],
        ["E", "A trader who buys in bulk and sells to retailers is a", "wholesaler", "consumer", "producer", "farm manager", "Wholesalers break bulk for retailers."],
        ["E", "Separating produce into classes according to quality is", "grading", "assembling", "financing", "advertising", "Grades attract different prices."],
        ["M", "The marketing function that changes cassava into gari is", "processing", "storage", "transportation", "assembling", "Processing changes the form of the produce."],
        ["M", "Prices of farm produce usually fall at harvest because", "supply exceeds demand", "demand exceeds supply", "storage is plentiful", "transport is cheap", "There is a glut at harvest."],
        ["M", "The collection of produce from scattered small farms into large lots is", "assembling", "grading", "retailing", "packaging", "Assembly makes transport and sale economical."],
        ["M", "The difference between the price paid by the consumer and that received by the farmer is the", "marketing margin", "subsidy", "premium", "depreciation", "It covers marketing costs and profits."],
        ["H", "Yams bought at ₦1,200 per tuber at the farm gate are retailed at ₦2,000 in the city. The marketing margin as a percentage of the retail price is", "40%", "60%", "67%", "80%", "800 ÷ 2000 × 100."],
        ["H", "Which of these would most directly reduce post-harvest losses of perishable produce?", "Provision of cold storage facilities", "Increasing the number of middlemen", "Abolishing grading", "Raising market levies", "Cold storage slows spoilage."],
        ["H", "The path through which farm produce passes from the farmer to the final consumer is the", "marketing channel", "marketing margin", "price mechanism", "farm inventory", "It may be short or long."],
      ],
      jamb: [
        ["M", "Marketing boards in Nigeria were mainly concerned with", "buying export crops from farmers", "selling fertilisers only", "training extension agents", "insuring farm animals", "They purchased cocoa, groundnut, cotton and palm produce."],
        ["H", "A farmers' co-operative that sells members' maize directly to a feed mill mainly benefits the farmers by", "reducing the number of middlemen", "lengthening the marketing channel", "increasing perishability", "lowering the farm-gate price", "A shorter channel gives the farmer a larger share."],
      ],
    },
    {
      week: 11,
      title: "Agricultural Insurance: Types, Benefits and Limitations",
      subtopics: ["Meaning and importance of agricultural insurance", "Types: crop, livestock, equipment and produce insurance", "Benefits and limitations", "Role of government and insurance companies"],
      objectives: ["Define agricultural insurance and related terms", "Describe the types of agricultural insurance", "State the benefits and limitations of agricultural insurance", "Explain the role of NAIC, government and insurance companies"],
      lesson: {
        title: "Insuring the Farm Business",
        summary: "How insurance spreads the risks of farming and what stops many farmers from using it.",
        minutes: 40,
        notes: `## Meaning
**Agricultural insurance** is an arrangement in which a farmer pays a small, regular sum — the **premium** — to an insurance company, which undertakes to **compensate (indemnify)** him if he suffers a loss from a **specified risk**.

### Terms
| Term | Meaning |
|---|---|
| **insurer** | the insurance company |
| **insured** | the farmer who takes the cover |
| **premium** | the amount paid for cover |
| **policy** | the written contract |
| **sum insured** | the maximum value covered |
| **indemnity** | compensation that restores the farmer to his position before the loss — no profit |
| **claim** | the farmer's request for compensation |
| **risk / peril** | the event insured against |

## Risks in agriculture
Drought, flood, windstorm, fire, pests and diseases, lightning, theft, accidents to machinery, death of livestock, price fluctuations.

## Importance
Farming depends on weather and living things and is therefore **very risky**; insurance **spreads** the losses of a few over the premiums of many.

## Types of agricultural insurance
| Type | Covers |
|---|---|
| **crop insurance** | loss of crops from fire, flood, drought, windstorm, pests and diseases |
| **livestock insurance** | death of animals (cattle, poultry, pigs, fish) from accident, disease, fire, flood |
| **farm equipment / machinery insurance** | damage to or theft of tractors, implements and vehicles |
| **farm buildings (property) insurance** | fire and storm damage to stores, pens, silos |
| **produce (stock and goods-in-transit) insurance** | loss of harvested produce in store or on the road |
| **life / personal accident insurance** | death or injury of the farmer and workers |
| **index-based (weather) insurance** | pays when rainfall falls below an agreed level |

## Benefits
- **compensates** the farmer; he can **restart** production
- gives **confidence** to invest and adopt new technology
- makes it easier to obtain **bank loans** — insurance serves as extra security
- stabilises farm **income**
- encourages **large-scale** farming and investment
- reduces the burden on government for disaster relief

## Limitations (problems)
- **premiums** may be too high for small-scale farmers
- **ignorance** and illiteracy; distrust of insurers
- **few offices** in rural areas
- difficulty in **assessing losses** on small, scattered, mixed-crop farms
- **delays** in settling claims
- lack of **farm records**
- **fraudulent claims** (moral hazard)
- not all risks are covered (e.g. price falls, negligence)
- **uncertainties** — widespread disasters may hit all policyholders at once

## Role of government
- established the **Nigerian Agricultural Insurance Scheme (1987)**, run by the **Nigerian Agricultural Insurance Corporation (NAIC)**
- **subsidises premiums** — federal and state governments pay part (about half) of the premium for many crops and livestock
- requires insurance for farmers taking **guaranteed loans** (ACGSF)
- regulates insurers through the **National Insurance Commission (NAICOM)**
- public enlightenment through extension services

## Role of insurance companies
Issue policies; collect premiums and **pool risks**; inspect farms and advise on risk reduction; **assess losses** and pay claims promptly; invest funds in the economy.

## Calculating a premium
Premium = rate × sum insured. A maize farm insured for ₦800,000 at 5% pays ₦40,000; with a 50% subsidy the farmer pays ₦20,000.`,
        examples: `**Example 1.** A poultry farm is insured for ₦2,000,000 at a premium rate of 4%. Find the premium. *Answer:* $0.04 \\times 2\\,000\\,000 = \\mathbf{₦80,000}$.

**Example 2.** What is a premium? *Answer:* The **amount paid periodically by the insured** to the insurer for cover.

**Example 3.** Name the corporation that runs agricultural insurance in Nigeria. *Answer:* the **Nigerian Agricultural Insurance Corporation (NAIC)**.`,
      },
      questions: [
        ["E", "The sum paid regularly by a farmer to an insurance company is the", "premium", "indemnity", "claim", "collateral", "It is the price of the cover."],
        ["E", "The written contract between the insurer and the insured is the", "policy", "premium", "receipt", "proposal only", "It states the terms of the cover."],
        ["E", "Insurance against the death of cattle from disease is", "livestock insurance", "crop insurance", "machinery insurance", "produce insurance", "It covers farm animals."],
        ["M", "The body that operates the agricultural insurance scheme in Nigeria is", "NAIC", "NAFDAC", "NDIC", "NBTE", "The Nigerian Agricultural Insurance Corporation."],
        ["M", "The compensation paid to a farmer who suffers an insured loss is the", "indemnity", "premium", "interest", "subsidy", "It restores him to his former position."],
        ["M", "Insurance of harvested cocoa against loss while being carried to the port is", "goods-in-transit insurance", "crop insurance", "livestock insurance", "life insurance", "It covers produce on the road."],
        ["M", "Agricultural insurance helps a farmer to obtain a bank loan because it", "serves as additional security for the lender", "reduces the size of the farm", "increases the premium", "replaces farm records", "The bank is protected if the enterprise fails."],
        ["H", "A cassava farm is insured for ₦1,500,000 at a premium rate of 6%, and government subsidises half of the premium. The farmer pays", "₦45,000", "₦90,000", "₦30,000", "₦750,000", "6% of ₦1,500,000 is ₦90,000; half is ₦45,000."],
        ["H", "Which of these risks is generally NOT covered by agricultural insurance?", "Loss due to the farmer's negligence", "Fire outbreak", "Flood", "Windstorm damage", "Cover excludes losses the farmer causes by carelessness."],
        ["H", "A farmer who sets fire to his own insured store in order to claim compensation illustrates the problem of", "fraudulent claims", "high premium", "delayed settlement", "under-insurance", "This moral hazard makes insurers cautious."],
      ],
      jamb: [
        ["M", "The principle that an insured farmer should be restored to his position before the loss, without profit, is", "indemnity", "subrogation", "contribution", "utmost good faith", "Indemnity prevents gain from insurance."],
        ["H", "The Nigerian Agricultural Insurance Scheme was established in", "1987", "1977", "1960", "1999", "NAIC was set up to implement the scheme."],
      ],
    },
    {
      week: 12,
      title: "Agricultural Extension: Agents, Methods and Problems",
      subtopics: ["Meaning and objectives of agricultural extension", "Role of extension agents", "Individual, group and mass-media methods", "Problems of extension services in Nigeria"],
      objectives: ["Define agricultural extension and state its objectives", "Describe the role and qualities of an extension agent", "Compare individual, group and mass methods of extension", "Discuss the problems of extension services in Nigeria"],
      lesson: {
        title: "Taking Research to the Farmer",
        summary: "How improved farming knowledge reaches farmers, and the obstacles in the way.",
        minutes: 40,
        notes: `## Meaning
**Agricultural extension** is an **informal, out-of-school educational service** that takes **new ideas and improved techniques** from research institutes to farmers, and carries farmers' **problems back** to researchers. It is a **two-way link**.

Research institute ⇄ **extension agent** ⇄ farmer

## Objectives
- teach farmers **improved practices** — new varieties, fertiliser use, pest control
- raise **yields, income** and standard of living
- help farmers **identify and solve** their own problems
- persuade farmers to **adopt innovations**
- train farmers in management, storage, processing and marketing
- convey government **policies** and programmes
- promote co-operatives and youth clubs (e.g. Young Farmers' Clubs)

## The extension agent
### Role
- **teacher and adviser** to farmers
- **link** between research and farmers
- organises **demonstrations, field days** and farmers' groups
- helps farmers obtain **inputs and credit**
- **evaluates** programmes and reports to supervisors

### Qualities
sound **technical knowledge**; ability to **communicate** in the local language; patience and honesty; respect for local **customs**; leadership and initiative; readiness to live and work in rural areas.

## Extension teaching methods
| Method | Examples | Advantages | Disadvantages |
|---|---|---|---|
| **individual** | farm and home visits; office calls; letters; phone calls | personal attention; trust; suits the farmer's own problem | slow; costly; reaches few farmers |
| **group** | **method demonstration** (how to do it); **result demonstration** (showing the outcome); field days; lectures and meetings; excursions; agricultural shows; farmer field schools | reaches more people; farmers learn from one another; "seeing is believing" | individual problems may be missed; needs organisation |
| **mass media** | radio, television, newspapers, posters, leaflets, bulletins, film shows, text messages and social media | reaches very many people **quickly** and cheaply per head; creates awareness | no feedback; illiteracy; lack of electricity, sets and network |

## The adoption process
**Awareness → interest → evaluation → trial → adoption.**

### Categories of adopters
innovators → early adopters → early majority → late majority → **laggards**.

### Factors affecting adoption
cost and profitability of the innovation; its complexity; compatibility with customs; education and age of the farmer; farm size; availability of inputs and credit; contact with extension.

## Extension programmes in Nigeria
**Agricultural Development Projects (ADPs)** in every state; the **Training and Visit (T & V) system**; NAERLS (Zaria); River Basin Development Authorities; Fadama projects.

## Problems of extension services in Nigeria
1. **Too few extension agents** — one agent to thousands of farmers.
2. **Inadequate transport** and bad rural roads.
3. **Poor funding** and low pay; poor motivation.
4. **Illiteracy** and **conservatism** of farmers.
5. **Language barriers**.
6. Inadequate **training** and teaching aids.
7. **Weak research–extension linkage**.
8. Non-availability of **inputs and credit** to apply the advice.
9. Poor rural infrastructure — electricity, network.
10. Unfavourable land tenure and political instability; frequent changes of programme.

## Solutions
Recruit and train more agents; provide motorcycles and allowances; adequate funding; adult literacy; use local languages, radio and phones; supply inputs and credit on time; strengthen research links; involve farmers in planning.`,
        examples: `**Example 1.** Which extension method reaches the largest number of farmers in the shortest time? *Answer:* the **mass-media method** (e.g. radio).

**Example 2.** Distinguish method demonstration from result demonstration. *Answer:* **Method** demonstration shows **how to carry out** a practice; **result** demonstration shows the **outcome** of the practice against the old one.

**Example 3.** List the stages of adoption in order. *Answer:* **awareness, interest, evaluation, trial, adoption**.`,
      },
      questions: [
        ["E", "The service that takes improved farming techniques from research institutes to farmers is", "agricultural extension", "agricultural insurance", "agricultural credit", "agricultural marketing", "It is an informal educational service."],
        ["E", "A farm visit by an extension agent is an example of the", "individual method", "group method", "mass method", "media method", "The agent deals with one farmer."],
        ["E", "Which of these is a mass medium for extension work?", "Radio", "Farm visit", "Method demonstration", "Office call", "Radio reaches many farmers at once."],
        ["M", "Showing farmers step by step how to apply fertiliser is a", "method demonstration", "result demonstration", "field day speech", "mass campaign", "It teaches a skill."],
        ["M", "The first stage in the adoption of an innovation is", "awareness", "trial", "interest", "evaluation", "The farmer first learns that the innovation exists."],
        ["M", "The extension agent is best described as a link between", "research institutes and farmers", "banks and insurers", "farmers and consumers", "wholesalers and retailers", "Information flows both ways through the agent."],
        ["M", "A disadvantage of the individual method of extension is that it", "reaches few farmers", "allows no personal contact", "gives no feedback", "needs electricity", "It is slow and costly per farmer."],
        ["H", "Farmers who are the last to accept a new practice are called", "laggards", "innovators", "early adopters", "early majority", "They adopt only after almost everyone else."],
        ["H", "A major weakness of the mass-media method is", "lack of immediate feedback", "high cost per farmer reached", "slowness of coverage", "limited audience", "Farmers cannot easily ask questions."],
        ["H", "Which of these is a problem of extension services in Nigeria?", "A very high ratio of farmers to extension agents", "Excess transport facilities", "Over-funding", "Too many trained agents", "One agent may serve several thousand farmers."],
      ],
      jamb: [
        ["M", "The state-level bodies chiefly responsible for extension services in Nigeria are the", "Agricultural Development Projects", "Marketing Boards", "River Ports Authorities", "Commodity Exchanges", "ADPs operate the Training and Visit system."],
        ["H", "Comparing a plot planted with an improved maize variety beside a plot with the local variety for farmers to see is a", "result demonstration", "method demonstration", "mass-media campaign", "home visit", "It shows the outcome of the new practice."],
      ],
    },
  ],
};
