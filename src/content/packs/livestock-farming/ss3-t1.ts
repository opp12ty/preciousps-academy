import type { TermPlan } from "../types";

/** SS3 Livestock Farming, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Introduction to Animal Biotechnology",
      subtopics: ["Meaning of animal biotechnology", "Branches and techniques", "Importance in livestock improvement", "Limitations and concerns"],
      objectives: ["Define animal biotechnology", "Identify its main techniques", "Explain its importance in livestock improvement", "State its limitations"],
      lesson: {
        title: "Biotechnology on the Livestock Farm",
        summary: "Using living systems and their molecules to improve animals, their health and their products.",
        minutes: 40,
        notes: `## Meaning
**Biotechnology** is the **use of living organisms, cells or their components to make or improve products**. **Animal biotechnology** applies these techniques to **improve the breeding, feeding, health and products of animals**.

## Traditional and modern
- **traditional:** selective breeding, cross-breeding, fermentation (yoghurt, cheese, silage)
- **modern:** techniques that work at the level of **cells and genes (DNA)**

## Main techniques
| Area | Techniques |
|---|---|
| **reproduction** | artificial insemination, embryo transfer, in-vitro fertilisation, semen and embryo sexing, oestrus synchronisation, cloning |
| **genetics** | **genetic engineering** (transgenic animals), **marker-assisted selection**, genomic selection, DNA testing for parentage and disease genes, gene editing |
| **health** | **vaccines** (including recombinant vaccines), diagnostic kits (ELISA, PCR), antibiotics, monoclonal antibodies |
| **nutrition** | enzymes (phytase), **probiotics**, amino acids, silage inoculants, improved fodder crops |
| **products** | starter cultures for dairy, rennet (chymosin) from microbes, pharmaceuticals produced in milk |
| **conservation** | gene banks — frozen semen and embryos of indigenous breeds |

## Importance in livestock improvement
1. **Faster genetic progress** — superior animals reproduce far more offspring.
2. **Higher productivity** — more milk, meat, eggs; faster growth; better feed conversion.
3. **Disease control** — effective vaccines and rapid diagnosis; breeding for **disease resistance** (e.g. trypanotolerance of N'Dama and Muturu cattle).
4. **Better product quality** — leaner meat, higher milk solids.
5. **Adaptation** — combining the hardiness of local breeds with the yield of exotic breeds.
6. **Conservation** of endangered indigenous breeds.
7. **Reduced cost** of production and of importing live breeding animals.
8. **Lower environmental impact** — less waste per unit of product.

## Limitations and concerns
- **high cost** of equipment, liquid nitrogen and materials
- need for **skilled personnel** and laboratories
- poor **infrastructure** — power, cold chain, roads
- low **awareness** among farmers
- **ethical and religious** objections; animal welfare
- **biosafety** fears about genetically modified organisms
- loss of **genetic diversity** when few sires are used widely
- weak regulation; dependence on foreign technology

## Regulation in Nigeria
The **National Biosafety Management Agency (NBMA)** regulates genetically modified organisms; the **National Biotechnology Research and Development Agency (NBRDA)** and the **National Animal Production Research Institute (NAPRI)** conduct research.`,
        examples: `**Example 1.** Define animal biotechnology. *Answer:* The **application of biological techniques to improve the breeding, health, feeding and products of animals**.

**Example 2.** Give two biotechnology techniques used in animal reproduction. *Answer:* **Artificial insemination** and **embryo transfer**.

**Example 3.** State one limitation of biotechnology in Nigeria. *Answer:* **High cost of equipment** and shortage of skilled personnel.`,
      },
      questions: [
        ["E", "The use of living organisms or their components to make or improve products is", "biotechnology", "mechanisation", "pasteurisation", "irrigation", "It ranges from fermentation to gene technology."],
        ["E", "Which of these is a traditional form of biotechnology?", "Fermentation of milk into yoghurt", "Gene editing", "Cloning", "Embryo sexing", "Microbes have long been used in food processing."],
        ["E", "Substances given to animals to stimulate immunity against a disease are", "vaccines", "probiotics", "enzymes", "hormones", "Biotechnology has produced safer, more effective vaccines."],
        ["M", "Live beneficial microorganisms added to feed to improve gut health are", "probiotics", "antibiotics", "vaccines", "toxins", "They compete with harmful bacteria."],
        ["M", "Storing frozen semen and embryos of indigenous breeds is done in a", "gene bank", "feed mill", "abattoir", "hatchery", "It conserves genetic resources."],
        ["M", "An advantage of animal biotechnology is", "faster genetic improvement", "higher cost of feed", "loss of all records", "slower growth", "Superior genes are spread quickly."],
        ["M", "The Nigerian agency that regulates genetically modified organisms is the", "National Biosafety Management Agency", "Nigerian Ports Authority", "National Orientation Agency", "Federal Road Safety Corps", "It ensures biosafety."],
        ["H", "Using DNA markers linked to useful traits to choose breeding animals is", "marker-assisted selection", "mass selection", "random mating", "culling by colour", "Animals are selected on their genes before they perform."],
        ["H", "A risk of using a few outstanding sires very widely is", "loss of genetic diversity", "higher fertility in all herds", "elimination of all diseases", "lower cost of semen only", "Inbreeding increases as the gene pool narrows."],
        ["H", "An enzyme added to pig and poultry feed to release phosphorus from plant materials is", "phytase", "rennet", "lactase", "pepsin", "It improves nutrient use and reduces pollution."],
      ],
    },
    {
      week: 2,
      title: "Reproductive Technologies",
      subtopics: ["Artificial insemination", "Oestrus detection and synchronisation", "Embryo transfer and in-vitro fertilisation", "Cloning"],
      objectives: ["Describe artificial insemination and its advantages", "Explain oestrus detection and synchronisation", "Describe embryo transfer", "Explain cloning and its limitations"],
      lesson: {
        title: "Assisted Reproduction in Farm Animals",
        summary: "Techniques that multiply the offspring of the best animals.",
        minutes: 40,
        notes: `## Artificial insemination (AI)
**AI** is the **introduction of semen into the female reproductive tract by means other than natural mating**.

### Steps
1. **Semen collection** — artificial vagina, electro-ejaculator, or abdominal massage (poultry).
2. **Evaluation** — volume, colour, **motility**, concentration, abnormal sperm.
3. **Dilution (extension)** — with extender (egg yolk–citrate, milk, glycerol) to increase doses and protect sperm.
4. **Packaging** in **straws**; **storage** — chilled (about 5 °C, short term) or frozen in **liquid nitrogen at −196 °C** (years).
5. **Heat detection** in the female.
6. **Thawing** (about 35–37 °C) and **insemination** with an AI gun (pipette) — in cattle, semen is deposited in the **body of the uterus**, just through the cervix.
7. **Recording** and **pregnancy diagnosis**.

### Advantages
- rapid spread of **superior sires' genes** — one bull can sire thousands of calves a year
- **controls venereal diseases** (brucellosis, vibriosis)
- no need to keep a male — saves cost and danger
- semen is easily **transported** and stored, even after the sire's death
- overcomes differences in size between male and female
- accurate **breeding records**
- allows cross-breeding with exotic breeds without importing animals

### Disadvantages
needs **skilled inseminators** and equipment; accurate **heat detection** required; liquid nitrogen is costly; faults of a sire spread widely; risk of inbreeding; poor technique lowers conception.

## Oestrus (heat)
The period when the female is **receptive to the male** and ovulation occurs.
| Animal | Cycle length | Heat lasts |
|---|---|---|
| cow | 21 days | about 18 hours |
| ewe | 17 days | 24–36 hours |
| doe (goat) | 21 days | 24–48 hours |
| sow | 21 days | 2–3 days |

**Signs:** restlessness, **standing to be mounted**, mounting others, swollen red vulva, clear mucus discharge, bellowing, frequent urination, drop in milk.
**Timing:** cows seen on heat in the morning are inseminated in the evening, and vice versa (the **a.m.–p.m. rule**).

### Oestrus synchronisation
**Bringing a group of females into heat at the same time** using hormones (**prostaglandin**, **progesterone** devices) — allows planned AI, uniform calving and batch management.

## Embryo transfer (ET)
A superior **donor** female is given hormones (FSH) to **superovulate**; she is inseminated; **embryos are flushed** from her uterus about seven days later, examined, and transferred fresh or frozen into **recipient (surrogate)** females synchronised to the same stage.
- **MOET** — multiple ovulation and embryo transfer
- **advantages:** many offspring from an outstanding female; easy transport of genetics as frozen embryos; rapid herd improvement
- **limitations:** costly; skilled work; variable results

## In-vitro fertilisation (IVF)
Eggs collected from the ovary are **fertilised in the laboratory** and the embryos transferred.

## Sexed semen
Sperm sorted to give mostly **female** calves (dairy) or male (beef).

## Cloning
**Cloning** is **producing genetically identical copies of an animal**.
- **embryo splitting** — dividing an early embryo
- **somatic cell nuclear transfer** — the nucleus of a body cell is placed in an egg whose nucleus has been removed; the embryo is implanted in a surrogate. **Dolly the sheep (1996)** was the first mammal cloned from an adult cell.
**Uses:** multiplying elite or transgenic animals; conserving rare breeds.
**Problems:** very low success rate; abnormalities; high cost; ethical objections; reduced genetic variation.`,
        examples: `**Example 1.** Define artificial insemination. *Answer:* The **placing of semen in the female reproductive tract by artificial means**.

**Example 2.** At what temperature is frozen semen stored? *Answer:* **−196 °C** in liquid nitrogen.

**Example 3.** What is a recipient in embryo transfer? *Answer:* The **surrogate female** that carries the transferred embryo to birth.`,
      },
      questions: [
        ["E", "Introducing semen into the female tract by means other than natural mating is", "artificial insemination", "embryo transfer", "cloning", "castration", "It is the most widely used reproductive technology."],
        ["E", "The period when a female animal is receptive to the male is", "oestrus", "gestation", "lactation", "parturition", "It is also called heat."],
        ["E", "Frozen semen is stored in", "liquid nitrogen", "ice blocks", "warm water", "kerosene", "At −196 °C sperm remain viable for years."],
        ["M", "The length of the oestrous cycle of a cow is about", "21 days", "17 days", "28 days", "5 days", "Heat recurs every three weeks if she is not pregnant."],
        ["M", "The most reliable sign of heat in a cow is", "standing to be mounted", "lying down", "increased milk yield", "refusal of water", "Standing heat shows she is ready for service."],
        ["M", "An advantage of artificial insemination is that it", "controls venereal diseases", "needs no skill", "requires no heat detection", "removes the need for records", "There is no physical contact between animals."],
        ["M", "Bringing a group of females into heat at the same time is", "oestrus synchronisation", "superovulation", "flushing only", "weaning", "Hormones such as prostaglandin are used."],
        ["H", "In embryo transfer, the donor cow is treated with hormones to cause", "superovulation", "abortion", "dry period", "moulting", "She releases many eggs instead of one."],
        ["H", "A cow first seen on standing heat in the morning should be inseminated", "the same evening", "three days later", "the following week", "immediately after calving", "The a.m.–p.m. rule places semen close to ovulation."],
        ["H", "Cloning by nuclear transfer involves placing the nucleus of a body cell into", "an egg cell whose nucleus has been removed", "a sperm cell", "a red blood cell", "the uterus directly", "The reconstructed egg develops into a copy of the donor."],
      ],
    },
    {
      week: 3,
      title: "Genetic Improvement of Livestock",
      subtopics: ["Aims of animal improvement", "Selection", "Breeding systems and hybrid vigour", "Genetic modification"],
      objectives: ["State the aims of livestock improvement", "Describe the methods of selection", "Explain breeding systems and hybrid vigour", "Explain genetic modification of animals"],
      lesson: {
        title: "Breeding Better Animals",
        summary: "Choosing parents and mating systems to raise the genetic merit of livestock.",
        minutes: 40,
        notes: `## Aims of improvement
higher **yield** (milk, meat, eggs, wool); faster **growth** and early maturity; better **feed conversion**; **disease and parasite resistance**; **adaptation** to climate; better **fertility**, mothering ability and litter size; better product **quality**; docile temperament.

## Methods of improvement
**introduction, selection** and **breeding**.

### Introduction
Bringing in **improved (exotic) breeds** from elsewhere — e.g. Holstein-Friesian, Jersey cattle; Large White pigs; Rhode Island Red fowl. *Problems:* poor adaptation, new diseases, cost.

### Selection
**Selection** is **choosing the best animals as parents of the next generation** and **culling** the poor ones.
| Type | Basis |
|---|---|
| **mass (individual) selection** | the animal's own performance and appearance |
| **pedigree selection** | performance of ancestors |
| **progeny testing** | performance of offspring — most accurate for sires, but slow |
| **family (sib) selection** | performance of relatives |

**Heritability** is the proportion of variation in a trait due to genes; highly heritable traits (growth rate, carcass quality) respond well to selection; fertility has low heritability.

## Breeding systems
| System | Meaning | Notes |
|---|---|---|
| **inbreeding** | mating **closely related** animals | fixes traits; produces pure lines; but causes **inbreeding depression** — reduced vigour and fertility, defects |
| **line breeding** | mild inbreeding to a notable ancestor | concentrates its genes |
| **outbreeding (out-crossing)** | mating unrelated animals of the **same breed** | maintains vigour |
| **cross-breeding** | mating animals of **different breeds** | produces **hybrid vigour** |
| **upgrading (grading up)** | repeated mating of local females to a pure improved sire | offspring approach the pure breed in about five generations |
| **back-crossing** | crossbred mated to one parent breed | |

## Hybrid vigour (heterosis)
**Hybrid vigour** is the **superiority of crossbred offspring over the average of their parents** — in growth, fertility, survival and yield.
*Examples:* White Fulani × Friesian crosses give more milk than White Fulani and survive better than Friesian; commercial broilers and layers are hybrids.
$$\\text{heterosis \\%} = \\frac{\\text{crossbred mean} - \\text{parental mean}}{\\text{parental mean}} \\times 100$$
Parents average 1500 litres; crossbreds 1800 litres → $\\tfrac{300}{1500} \\times 100 = 20\\%$.

## Basic genetics
**genes** on **chromosomes** control traits; **dominant** and **recessive** alleles; **homozygous** and **heterozygous**; **genotype** (genetic make-up) and **phenotype** (appearance = genotype + environment).

## Genetic modification
**Genetic modification (engineering)** is the **direct alteration of an organism's DNA**, often by inserting a gene from another organism — producing a **transgenic animal**.
**Aims:** faster growth (e.g. fast-growing salmon); disease resistance; milk containing medicines; improved product quality; reduced pollution.
**Gene editing (CRISPR)** makes precise changes without foreign DNA — e.g. hornless cattle, disease-resistant pigs.
**Concerns:** safety of food; animal welfare; ethics; escape into wild populations; cost; public acceptance; regulation.

## Nigerian breeds
**cattle:** White Fulani (Bunaji), Sokoto Gudali, Red Bororo, N'Dama, Muturu; **sheep:** Yankasa, Uda, Balami, West African Dwarf; **goats:** Red Sokoto, Sahel, West African Dwarf; local pigs and fowls.`,
        examples: `**Example 1.** Define selection. *Answer:* **Choosing the best animals as parents** and culling the rest.

**Example 2.** What is hybrid vigour? *Answer:* The **superior performance of crossbred offspring over the average of their parents**.

**Example 3.** Parent breeds average 40 kg at weaning; their crossbreds average 46 kg. Find the heterosis. *Answer:* $\\tfrac{6}{40} \\times 100 = \\mathbf{15\\%}$.`,
      },
      questions: [
        ["E", "Choosing the best animals as parents of the next generation is", "selection", "introduction", "quarantine", "castration", "Poor animals are culled."],
        ["E", "Mating closely related animals is", "inbreeding", "cross-breeding", "out-crossing", "upgrading", "It concentrates genes but lowers vigour."],
        ["E", "Mating animals of two different breeds is", "cross-breeding", "inbreeding", "line breeding", "pure breeding", "It produces hybrid vigour."],
        ["M", "The superiority of crossbred offspring over the average of their parents is", "hybrid vigour", "inbreeding depression", "heritability", "mutation", "It is also called heterosis."],
        ["M", "Selecting a bull on the performance of his daughters is", "progeny testing", "mass selection", "pedigree selection", "random selection", "It is accurate but slow."],
        ["M", "Repeated mating of local females and their daughters to pure improved sires is", "upgrading", "inbreeding", "cloning", "back-yard breeding", "The offspring approach the pure breed after several generations."],
        ["M", "An animal carrying a gene inserted from another organism is", "transgenic", "pedigree", "indigenous", "castrated", "It is produced by genetic modification."],
        ["H", "Two parent breeds average 2000 litres of milk and their crossbreds average 2300 litres. The heterosis is", "15%", "13%", "30%", "115%", "300 ÷ 2000 × 100."],
        ["H", "Reduced fertility and vigour resulting from mating close relatives is", "inbreeding depression", "heterosis", "upgrading", "acclimatisation", "Harmful recessive genes become homozygous."],
        ["H", "A problem commonly met when exotic breeds are introduced into Nigeria is", "poor adaptation to heat and disease", "excessive hardiness", "too little milk potential", "refusal to mate", "They suffer under tropical stress."],
      ],
    },
    {
      week: 4,
      title: "Animal Welfare and Ethics",
      subtopics: ["Meaning of animal welfare and rights", "The five freedoms", "Humane handling and transport", "Slaughtering methods"],
      objectives: ["Explain animal welfare and animal rights", "State the five freedoms", "Describe humane handling and transport", "Compare slaughtering methods"],
      lesson: {
        title: "Treating Farm Animals Humanely",
        summary: "The farmer's duty of care to animals from birth to slaughter.",
        minutes: 40,
        notes: `## Meaning
- **Animal welfare** is the **physical and mental well-being of animals** — how well an animal copes with the conditions in which it lives.
- **Animal rights** is the view that animals have **moral rights not to be used or harmed** by people.
- **Ethics** is the study of **right and wrong conduct**; farm-animal ethics asks how animals ought to be treated.

## The five freedoms
1. **Freedom from hunger and thirst** — ready access to water and a suitable diet.
2. **Freedom from discomfort** — shelter and a comfortable resting area.
3. **Freedom from pain, injury and disease** — prevention, rapid diagnosis and treatment.
4. **Freedom to express normal behaviour** — space, facilities and company of its own kind.
5. **Freedom from fear and distress** — conditions that avoid mental suffering.

## Why welfare matters
- **moral** duty; religious teaching
- **productivity** — stressed animals grow slowly, yield less and fall ill
- **product quality** — stress before slaughter spoils meat (dark, firm, dry beef; pale, soft, watery pork)
- **market access** — export standards and consumer demand
- **law** — cruelty to animals is an offence; standards of the **World Organisation for Animal Health (WOAH)**
- public health and food safety

## Welfare problems on farms
overcrowding; battery cages and tight stalls; lack of water, feed or shade; rough handling and beating; painful procedures without pain relief (castration, dehorning, debeaking, branding); long transport; untreated disease; poor slaughter practice.

## Humane treatment
adequate feed, clean water, housing and space; gentle handling; trained stockmen; health care; painful operations done **young**, skilfully and with pain relief where possible; enrichment (perches, bedding).

### Handling and transport
- use **races, crushes and loading ramps**; no sticks on sensitive parts
- do not overload vehicles; partitions; non-slip floors; ventilation; shade
- rest, feed and water on long journeys; travel in the cool of the day
- separate animals by size and sex; do not transport sick or heavily pregnant animals

## Slaughter
**Humane slaughter** causes **death without avoidable pain or fear**.

### Before slaughter
rest in **lairage**; water; **ante-mortem inspection** by a veterinary officer; calm movement to the slaughter point.

### Methods
| Method | Description |
|---|---|
| **stunning then bleeding** | the animal is made **unconscious** before the throat is cut — **captive-bolt pistol** (cattle), **electrical stunning** (pigs, sheep, poultry), **gas (CO₂)** stunning |
| **religious (ritual) slaughter** — **halal**, **kosher** | a swift cut of the throat with a very sharp knife, severing the blood vessels, with the prescribed invocation; widely practised in Nigeria |
| **poultry** | neck cut by hand or automatic killer after stunning; bleeding in cones |
| **emergency / casualty slaughter** | for injured animals |

**Bleeding (sticking)** must be rapid and complete. Poor practices — hammer blows, slaughter on dirty floors, slaughter in sight of other animals — are inhumane and unhygienic.

### After slaughter
**post-mortem inspection** of carcass and organs to ensure the meat is fit to eat.

## Ethical issues
intensive confinement; use of growth promoters and antibiotics; genetic modification and cloning; use of animals in research; killing of surplus male chicks; balancing cheap food against welfare.`,
        examples: `**Example 1.** What is animal welfare? *Answer:* The **physical and mental well-being** of animals.

**Example 2.** State two of the five freedoms. *Answer:* **Freedom from hunger and thirst**; **freedom from pain, injury and disease**.

**Example 3.** What is the purpose of stunning? *Answer:* To make the animal **unconscious** so that it feels no pain at slaughter.`,
      },
      questions: [
        ["E", "The physical and mental well-being of animals is", "animal welfare", "animal breeding", "animal traction", "animal nutrition", "It concerns how well an animal copes with its conditions."],
        ["E", "Providing clean water and enough feed satisfies freedom from", "hunger and thirst", "fear", "discomfort only", "normal behaviour", "It is the first of the five freedoms."],
        ["E", "Making an animal unconscious before it is bled is", "stunning", "flaying", "evisceration", "branding", "It prevents pain at slaughter."],
        ["M", "The number of freedoms recognised in animal welfare is", "five", "three", "seven", "ten", "They cover hunger, discomfort, pain, behaviour and fear."],
        ["M", "The instrument commonly used to stun cattle is the", "captive-bolt pistol", "burdizzo", "elastrator", "drenching gun", "It delivers a blow to the skull."],
        ["M", "The holding pen where animals rest before slaughter is the", "lairage", "crush", "dip", "paddock", "Rest reduces stress and improves meat quality."],
        ["M", "Inspection of live animals before slaughter is", "ante-mortem inspection", "post-mortem inspection", "meat grading", "carcass dressing", "It detects sick animals."],
        ["H", "Stress in pigs just before slaughter results in pork that is", "pale, soft and watery", "dark, firm and dry", "tough and green", "unchanged", "Rapid acid build-up in warm muscle causes PSE meat."],
        ["H", "Good animal welfare improves farm profit mainly because unstressed animals", "grow and produce better", "eat nothing", "need no housing", "never need vaccination", "Stress lowers growth, yield and resistance to disease."],
        ["H", "When transporting livestock over a long distance, the farmer should", "avoid overloading and provide ventilation", "tie the legs tightly together", "travel only at midday", "mix animals of all sizes", "This reduces injury, heat stress and death."],
      ],
    },
    {
      week: 6,
      title: "Sustainable Livestock Farming",
      subtopics: ["Meaning of sustainable livestock farming", "Organic livestock farming", "Livestock waste and its management", "Environmental impacts and good practice"],
      objectives: ["Explain sustainable livestock farming", "Describe organic livestock production", "Describe methods of managing livestock waste", "State the environmental impacts of livestock and ways of reducing them"],
      lesson: {
        title: "Livestock that Lasts",
        summary: "Producing animal products profitably without damaging the environment or the future.",
        minutes: 40,
        notes: `## Meaning
**Sustainable livestock farming** **meets present needs for animal products while protecting the environment, animal welfare, farmers' livelihoods and the ability of future generations to produce**. Its three pillars: **economic, environmental, social**.

## Organic livestock farming
**Organic farming** produces animals **without synthetic chemicals, routine antibiotics, growth hormones or genetically modified feed**, using natural processes.

### Principles
- **organic feed**; grazing and forage
- **access to outdoors**; low stocking density; natural behaviour
- **no routine antibiotics or growth promoters**; herbal and preventive health care; treated animals observe long withdrawal periods
- **breeds adapted** to local conditions
- manure returned to the land; integration with crops
- **certification** by an approved body

### Advantages
products free of chemical residues; **premium prices**; better welfare; healthier soil; less pollution.
### Disadvantages
lower yields; higher cost; more land and labour; disease control is harder; certification is costly; limited market awareness in Nigeria.

## Livestock waste
**dung and droppings, urine, poultry litter, feed waste, bedding, dead animals, abattoir waste (blood, rumen content, bones, feathers), waste water**.

### Problems of poor waste disposal
odour; **flies and rodents**; spread of **disease**; **water pollution** (nitrates, algal blooms); **greenhouse gases** — methane and nitrous oxide; ammonia; nuisance to neighbours.

### Methods of waste management
| Method | Description | Product |
|---|---|---|
| **composting** | heaping manure with litter and plant residues to decompose aerobically | **organic fertiliser** |
| **direct land application** | spreading on farmland | soil fertility |
| **biogas digestion** | anaerobic fermentation in a digester | **biogas (methane)** for cooking and power; slurry as fertiliser |
| **drying and bagging** | poultry manure | fertiliser for sale |
| **feed use** | dried poultry litter for ruminants; blood meal, bone meal, feather meal | feed ingredients |
| **fish-pond fertilisation** | integrated poultry–fish farming | plankton growth |
| **vermicomposting** | earthworms | vermicompost |
| **lagoons / septic systems** | liquid waste | treated effluent |
| **incineration or deep burial** | carcasses of diseased animals | safe disposal |

## Environmental impacts of livestock
- **greenhouse gases** — **methane** from ruminant digestion and manure
- **overgrazing** → soil erosion and **desertification**
- **deforestation** for pasture
- **water** use and pollution
- **loss of biodiversity**
- farmer–herder conflict over land

## Sustainable practices
1. **Correct stocking rate**; **rotational grazing**; paddocking.
2. **Improved pastures** and fodder banks; **ranching** in place of open grazing.
3. **Integrated crop–livestock (mixed) farming** — residues feed animals; manure feeds crops.
4. **Better feed efficiency** — balanced rations lower methane per unit of product.
5. **Conservation of indigenous breeds**.
6. Efficient **water** use; rain-water harvesting.
7. **Proper waste management** — compost, biogas.
8. **Preventive health care**; prudent use of drugs to avoid **antibiotic resistance**.
9. **Agroforestry / silvopasture** — trees with pasture.
10. Good **records** and planning.`,
        examples: `**Example 1.** What is organic livestock farming? *Answer:* Rearing animals **without synthetic chemicals, routine antibiotics or growth hormones**, using natural methods.

**Example 2.** Name two products of a biogas digester. *Answer:* **Biogas (methane)** and **slurry fertiliser**.

**Example 3.** Give two effects of overgrazing. *Answer:* **Soil erosion** and **desertification**.`,
      },
      questions: [
        ["E", "Producing animals without synthetic chemicals or routine antibiotics is", "organic livestock farming", "intensive battery farming", "feedlot fattening", "factory farming", "It relies on natural processes."],
        ["E", "Decomposing manure and plant residues into fertiliser is", "composting", "incineration", "pasteurisation", "rendering", "It is an aerobic process."],
        ["E", "The gas produced when animal dung ferments without air in a digester is", "biogas", "oxygen", "nitrogen", "chlorine", "It consists mainly of methane."],
        ["M", "The greenhouse gas released in large amounts by ruminants during digestion is", "methane", "ozone", "helium", "sulphur dioxide", "It is formed in the rumen."],
        ["M", "Keeping too many animals on a piece of land for too long causes", "overgrazing", "afforestation", "eutrophication of soil", "salinisation only", "The vegetation cover is destroyed."],
        ["M", "Moving animals from one paddock to another to allow pasture to recover is", "rotational grazing", "zero grazing", "continuous grazing", "tethering", "It maintains pasture and reduces parasites."],
        ["M", "An advantage of organic livestock products is that they", "attract premium prices", "are cheaper to produce", "give higher yields", "need no certification", "Consumers pay more for residue-free products."],
        ["H", "Carcasses of animals that died of infectious disease should be disposed of by", "incineration or deep burial", "feeding to dogs", "sale in the market", "dumping in a stream", "This prevents the spread of infection."],
        ["H", "Using poultry droppings to fertilise fish ponds is an example of", "integrated farming", "monoculture", "nomadism", "organic certification", "The waste of one enterprise is an input for another."],
        ["H", "Indiscriminate use of antibiotics in livestock is discouraged mainly because it leads to", "antibiotic resistance", "faster growth only", "better welfare", "organic status", "Resistant bacteria threaten animal and human health."],
      ],
    },
    {
      week: 8,
      title: "Livestock Business Planning",
      subtopics: ["Meaning and importance of a business plan", "Components of a livestock business plan", "Funding sources", "Simple budgets"],
      objectives: ["Explain the importance of a business plan", "Outline the components of a livestock business plan", "Identify sources of funding", "Prepare a simple enterprise budget"],
      lesson: {
        title: "Planning a Livestock Business",
        summary: "Setting out on paper how a livestock enterprise will be run and financed.",
        minutes: 40,
        notes: `## Meaning
A **business plan** is a **written document describing a business, its goals and how they will be achieved**, with the money required and the expected returns.

## Importance
guides decisions; shows whether the enterprise is **feasible and profitable**; needed to obtain **loans and grants**; sets targets for monitoring; identifies risks in advance.

## Components
| Section | Content |
|---|---|
| **executive summary** | overview of the plan |
| **business description** | name, location, type of enterprise (broilers, layers, pigs, goats, dairy), ownership, objectives |
| **market analysis** | demand, customers, prices, competitors |
| **technical / production plan** | breed, stock size, housing, feeding, health programme, production cycle, labour |
| **marketing plan** | products, pricing, outlets, promotion |
| **management plan** | who runs the farm; records |
| **financial plan** | capital required, operating costs, expected income, profit, cash flow, break-even |
| **risk analysis** | disease, price changes, theft — and safeguards (vaccination, insurance) |

## Costs
- **fixed (capital) costs:** land, buildings, equipment, fencing, borehole
- **variable (operating) costs:** stock (day-old chicks, weaners), **feed** (about 60–70% of the cost of production), drugs and vaccines, labour, litter, fuel, transport

## Enterprise budget — 500 broilers (8 weeks)
| Item | ₦ |
|---|---|
| 500 day-old chicks at ₦800 | 400 000 |
| feed: 4 kg per bird × 500 × ₦700 | 1 400 000 |
| drugs and vaccines | 100 000 |
| litter, fuel, labour, others | 200 000 |
| **total variable cost** | **2 100 000** |
| sales: 475 birds (5% mortality) at ₦6 000 | 2 850 000 |
| **gross margin** | **750 000** |

$$\\text{gross margin} = \\text{total revenue} - \\text{total variable cost}$$
$$\\text{net profit} = \\text{gross margin} - \\text{fixed costs}$$
**Return on investment (%)** $= \\dfrac{\\text{profit}}{\\text{total cost}} \\times 100$.

## Funding sources
- **personal savings**; family and friends
- **co-operative societies** and thrift groups
- **microfinance banks** and commercial banks
- **Bank of Agriculture (BOA)**; **Bank of Industry**
- Central Bank intervention schemes; **NIRSAL** credit guarantees; **Agricultural Credit Guarantee Scheme Fund**
- government and donor **grants**; youth empowerment programmes
- **contract farming / out-grower schemes** — an off-taker supplies inputs and buys the produce
- investors and partnerships; crowd-funding platforms
- input credit from feed millers and hatcheries

### What lenders require
business plan; **collateral** or guarantors; records; registration; evidence of skill and market.

## Problems of agricultural finance
high interest rates; lack of collateral; short repayment periods; risk of disease and price falls; delays; diversion of loans.

## Agricultural insurance
The **Nigerian Agricultural Insurance Corporation (NAIC)** insures livestock against death from disease, fire and other hazards.`,
        examples: `**Example 1.** Which cost item is the largest in poultry production? *Answer:* **Feed** — about 60–70% of the cost.

**Example 2.** Revenue is ₦1 200 000 and variable costs are ₦900 000. Find the gross margin. *Answer:* **₦300 000**.

**Example 3.** Name three sources of farm finance. *Answer:* **Personal savings, co-operatives** and the **Bank of Agriculture**.`,
      },
      questions: [
        ["E", "A written document describing a business, its goals and how to achieve them is a", "business plan", "farm diary", "sales receipt", "vaccination chart", "It guides the owner and lenders."],
        ["E", "The largest single cost in poultry production is", "feed", "litter", "vaccines", "water", "It takes about 60–70% of production cost."],
        ["E", "Which of these is a fixed cost on a livestock farm?", "Poultry house", "Feed", "Vaccines", "Day-old chicks", "It does not vary with the number of birds in a batch."],
        ["M", "Total revenue minus total variable cost gives the", "gross margin", "net worth", "depreciation", "fixed cost", "It measures the contribution of the enterprise."],
        ["M", "A bank established to give credit specifically to farmers in Nigeria is the", "Bank of Agriculture", "Central Bank only", "Nigerian Export–Import Bank", "Federal Mortgage Bank", "It lends to small and medium farmers."],
        ["M", "An asset pledged to a bank as security for a loan is", "collateral", "interest", "dividend", "premium", "It may be seized if the loan is not repaid."],
        ["M", "A farmer earns ₦2 000 000 from pigs with variable costs of ₦1 400 000. The gross margin is", "₦600 000", "₦3 400 000", "₦1 400 000", "₦200 000", "Revenue minus variable costs."],
        ["H", "A broiler batch costs ₦1 500 000 in total and yields a profit of ₦300 000. The return on investment is", "20%", "5%", "25%", "17%", "300 000 ÷ 1 500 000 × 100."],
        ["H", "An arrangement in which a buyer supplies inputs to the farmer and purchases the produce at an agreed price is", "contract farming", "subsistence farming", "pastoralism", "share cropping", "It gives the farmer both finance and a market."],
        ["H", "The body that insures livestock against death from disease in Nigeria is", "NAIC", "NAFDAC", "NIPOST", "NCDC", "The Nigerian Agricultural Insurance Corporation."],
      ],
    },
    {
      week: 9,
      title: "Farm Project Development",
      subtopics: ["Choosing a livestock enterprise", "Site selection and farm layout", "Steps in establishing the enterprise", "Running and evaluating the project"],
      objectives: ["Choose a suitable livestock enterprise", "Select a site and plan the layout", "Outline the practical steps in establishing a livestock enterprise", "Monitor and evaluate a farm project"],
      lesson: {
        title: "Setting Up a Livestock Enterprise",
        summary: "The practical steps from an idea to a working farm.",
        minutes: 40,
        notes: `## Choosing the enterprise
Consider **market demand**; **capital** available; **land and climate**; **skill and experience**; **availability of feed, stock and veterinary services**; **time to returns** (broilers 6–8 weeks; layers about 5 months; pigs 6–8 months; cattle years); **social and religious acceptance** (e.g. pigs); **risk**.

| Enterprise | Notes |
|---|---|
| broilers | quick returns; high feed cost |
| layers | steady daily income; longer start-up |
| pigs | prolific; fast growing; limited by religion in some areas |
| goats and sheep | low capital; hardy; ready market |
| rabbits; snails; grasscutters | small space; low capital |
| dairy / beef cattle | high capital; land; long term |
| fish (with livestock) | integration |

## Site selection
- **accessibility** — good road; near market and inputs
- **water supply** — clean and constant
- **topography and drainage** — gently sloping, well drained, not flood-prone
- **distance from residential areas** — odour and noise; local regulations
- **security**
- **electricity**
- **room for expansion**
- **biosecurity** — away from other farms of the same species
- suitable soil and vegetation for pasture (ruminants)

## Farm layout
- **farmstead:** office, store, feed mill, staff quarters near the gate
- **animal houses:** orientated **east–west** to reduce sun and driving rain; spaced apart; young stock **upwind** of older stock
- **isolation / quarantine pen** away from the main houses
- **footbaths and wheel dips** at entrances
- **waste disposal** area downwind and away from water sources
- fencing; internal roads; water tanks

## Steps in establishing the enterprise
1. **Feasibility study** and **business plan**.
2. **Acquire land**; obtain permits; register the business.
3. **Raise capital**.
4. **Construct housing** to standard — floor space, ventilation, drainage.
5. **Install equipment** — feeders, drinkers, brooders, cages, crates.
6. **Arrange inputs** — feed, drugs, vaccines, litter.
7. **Employ and train labour**.
8. **Clean and disinfect** the house; rest it; lay litter; pre-heat the brooder.
9. **Buy foundation stock** from a **reputable source** — healthy, of the right breed.
10. **Routine management** — feeding, watering, health programme, sanitation.
11. **Record keeping**.
12. **Marketing** — find buyers before the stock is ready.
13. **Evaluate** and reinvest or expand.

### Stocking guides
broilers on deep litter: about **10 birds per m²** (0.1 m² each); layers: about 5–6 per m² on deep litter; weaner pigs about 0.5 m² each; a 20 m × 10 m house (200 m²) holds about **2000 broilers**.

## Records
inventory; **production** (eggs, milk, weights); **feed**; **health and mortality**; breeding; labour; **sales and purchases**; cash book. Records show profit, guide decisions and support loan applications.

## Evaluating the project
| Measure | Formula |
|---|---|
| **mortality %** | deaths ÷ number started × 100 |
| **feed conversion ratio (FCR)** | feed consumed ÷ weight gained |
| **hen-day production %** | eggs laid ÷ hens alive × 100 |
| **profit** | income − costs |
500 chicks, 25 died → mortality 5%. Birds ate 4 kg and weigh 2 kg → FCR 2.0 (lower is better).

## Start small
Begin with a **pilot scale**, learn, then expand.`,
        examples: `**Example 1.** Give three factors in selecting a farm site. *Answer:* **Water supply, accessibility** and **good drainage**.

**Example 2.** Out of 800 chicks, 40 died. Find the mortality. *Answer:* $\\tfrac{40}{800} \\times 100 = \\mathbf{5\\%}$.

**Example 3.** A pig ate 240 kg of feed and gained 80 kg. Find the FCR. *Answer:* $240 \\div 80 = \\mathbf{3.0}$.`,
      },
      questions: [
        ["E", "The livestock enterprise that gives the quickest return is", "broiler production", "beef cattle ranching", "dairy farming", "layer production", "Broilers are sold at six to eight weeks."],
        ["E", "A good site for a livestock farm should be", "well drained with a constant water supply", "flood-prone", "in the middle of a housing estate", "without road access", "Water and drainage are essential."],
        ["E", "Foundation stock should be bought from", "a reputable source", "any roadside seller", "a farm with a disease outbreak", "the cheapest unknown supplier", "Healthy stock of known breed gives a good start."],
        ["M", "Poultry houses are orientated east–west mainly to", "reduce the entry of direct sunlight and driving rain", "increase the heat inside", "save roofing sheets", "make them longer", "The long sides face north and south."],
        ["M", "A pen where newly bought or sick animals are kept apart is the", "isolation pen", "farrowing pen", "brooder house", "milking parlour", "It prevents the spread of disease."],
        ["M", "Out of 1000 chicks stocked, 30 died. The mortality rate is", "3%", "30%", "0.3%", "97%", "30 ÷ 1000 × 100."],
        ["M", "A study carried out to find whether a proposed farm will be workable and profitable is a", "feasibility study", "post-mortem", "progeny test", "stock count", "It precedes the business plan."],
        ["H", "A broiler house measures 15 m by 8 m. At 10 birds per square metre it can hold", "1200 birds", "120 birds", "230 birds", "12 000 birds", "Floor area 120 m² × 10."],
        ["H", "Broilers consumed 3600 kg of feed and gained a total of 1800 kg. Their feed conversion ratio is", "2.0", "0.5", "1.8", "5400", "Feed consumed ÷ weight gained."],
        ["H", "Young stock should be housed upwind of older stock because", "older animals may carry diseases that spread on the wind", "young stock need more wind", "older stock eat more", "it saves fencing", "It is a biosecurity measure."],
      ],
    },
    {
      week: 10,
      title: "Entrepreneurship in Livestock",
      subtopics: ["The livestock entrepreneur", "Opportunities along the value chain", "Success factors", "Challenges and solutions"],
      objectives: ["Describe the qualities of a livestock entrepreneur", "Identify business opportunities in the livestock value chain", "Explain what makes livestock businesses succeed", "Discuss challenges and their solutions"],
      lesson: {
        title: "Making a Business of Livestock",
        summary: "Where the business opportunities lie in livestock, and what it takes to succeed.",
        minutes: 40,
        notes: `## The entrepreneur
An **entrepreneur** **identifies an opportunity, organises resources and bears the risk** of a business for profit.
**Qualities:** vision; risk-taking; hard work; perseverance; technical knowledge; good record keeping; honesty; innovation; ability to manage people and money; readiness to learn.

## The livestock value chain
**inputs → production → processing → marketing → consumption**. Each link offers businesses.

### Opportunities
| Link | Enterprises |
|---|---|
| **inputs** | hatchery (day-old chicks); **feed milling** and feed retail; forage and hay production; veterinary drugs and vaccines shop; equipment fabrication (cages, feeders); breeding stock supply |
| **production** | broilers, layers, turkeys, quail; piggery; goat and sheep fattening; rabbitry; snailery; grasscutter; dairy; beef fattening (feedlot); bee-keeping |
| **services** | veterinary and AI services; farm consultancy; transport and cold-chain logistics; training |
| **processing** | abattoir and meat shop; **dressed and frozen chicken**; sausages, suya, kilishi; **yoghurt, cheese (wara), butter, fura da nono**; egg powder; leather; **blood, bone and feather meal** |
| **by-products** | manure and **compost**; biogas; hides and skins; horns and hooves |
| **marketing** | egg distribution; live-animal trading; online sales; supplying hotels, schools and supermarkets; export |

## Why livestock business is attractive
large and growing **population**; rising demand for **animal protein**; ready market for eggs and meat; products sold all year; many small-scale entry points; government and donor support; by-products give extra income.

## Success factors (lessons from successful farms)
1. **Start small and grow** with experience.
2. **Know the market** before producing; secure buyers.
3. **Good stock** from reliable sources.
4. **Feed management** — quality feed; own milling to cut cost.
5. **Strict biosecurity and vaccination**.
6. **Accurate records** and cost control.
7. **Value addition** — processing and packaging raise income.
8. **Diversification** and integration (poultry + fish + crops).
9. **Reinvestment** of profits.
10. **Networking** — co-operatives and associations (e.g. Poultry Association of Nigeria).
11. **Continuous learning** and use of technology.

## Challenges and solutions
| Challenge | Solution |
|---|---|
| **high cost of feed** | compound own feed; use local alternatives; bulk purchase through co-operatives |
| **disease outbreaks** | biosecurity; vaccination; veterinary supervision; insurance |
| **inadequate capital and credit** | savings, co-operatives, grants, contract farming |
| **poor power supply; lack of cold storage** | solar; shared cold rooms; sell live or process promptly |
| **price fluctuation and glut** | market planning; processing; contracts |
| **poor-quality inputs** | reputable suppliers |
| **theft and insecurity; farmer–herder conflict** | fencing, guards; ranching |
| **poor roads and transport** | siting near markets |
| **competition from imports** | quality, branding |
| **lack of skill** | training, extension services |
| **climate stress** | good housing; heat-tolerant breeds |

## Marketing livestock products
grading and sorting (eggs by size); attractive **packaging and branding**; hygiene and **NAFDAC** registration for processed foods; reliable supply; fair pricing; customer relations; social-media and direct sales.

## Co-operatives
members pool resources to buy inputs in bulk, obtain credit, share equipment and sell jointly.`,
        examples: `**Example 1.** Name the links of the livestock value chain. *Answer:* **Inputs, production, processing, marketing, consumption**.

**Example 2.** Give two businesses at the input stage. *Answer:* **Hatchery** and **feed milling**.

**Example 3.** Suggest a solution to the high cost of feed. *Answer:* **Compounding feed on the farm** using local ingredients.`,
      },
      questions: [
        ["E", "A person who organises resources and bears the risk of a business is an", "entrepreneur", "extension agent", "auditor", "consumer", "The reward for risk is profit."],
        ["E", "A business that produces day-old chicks for sale is a", "hatchery", "feed mill", "tannery", "creamery", "It supplies stock to poultry farmers."],
        ["E", "Processing milk into yoghurt before sale is an example of", "value addition", "subsistence", "overgrazing", "culling", "The processed product earns more."],
        ["M", "The sequence of activities from inputs to the consumer is the", "value chain", "food web", "life cycle", "pedigree", "Each link adds value."],
        ["M", "The most effective protection of a poultry business against disease outbreaks is", "biosecurity and vaccination", "overstocking", "buying cheap feed", "ignoring sick birds", "Prevention is cheaper than cure."],
        ["M", "A by-product of an abattoir used as a protein feed ingredient is", "blood meal", "hay", "molasses", "wheat offal", "Dried blood is rich in protein."],
        ["M", "Farmers who pool resources to buy inputs in bulk and sell jointly form a", "co-operative", "monopoly", "syndicate of buyers", "cartel", "Members gain from lower costs and better prices."],
        ["H", "A fall in prices caused by too many producers selling at the same time is a", "glut", "scarcity", "premium", "subsidy", "Market planning and processing help to avoid it."],
        ["H", "Combining poultry, fish and crop production on one farm is", "integration", "specialisation", "monoculture", "nomadism", "Wastes of one enterprise serve another and risk is spread."],
        ["H", "Processed livestock foods for sale in Nigeria should be registered with", "NAFDAC", "NIMASA", "NERC", "NIMC", "It regulates the safety of food and drugs."],
      ],
    },
  ],
};
