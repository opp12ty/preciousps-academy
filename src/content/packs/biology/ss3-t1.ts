import type { TermPlan } from "../types";

/** SS3 Biology, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Reproductive Behaviours in Animals",
      subtopics: ["Meaning of reproductive behaviour", "Courtship behaviour", "Mating systems: monogamy, polygamy and promiscuity", "Parental care in fishes, amphibians, birds and mammals"],
      objectives: ["Explain reproductive behaviour", "Describe forms of courtship behaviour with examples", "Distinguish the mating systems of animals", "Compare parental care in the vertebrate classes and state its importance"],
      lesson: {
        title: "Courtship, Mating and Parental Care",
        summary: "The behaviours by which animals find mates, breed and protect their young.",
        minutes: 40,
        notes: `## Reproductive behaviour
**Reproductive behaviour** is the set of activities by which animals **find and attract mates, mate, and care for their young**, so that the species continues.

## Courtship
**Courtship** is the behaviour that **precedes mating**. It
- brings the sexes together and helps them **recognise their own species**,
- **stimulates** both partners so that gametes are released at the same time,
- **reduces aggression** between the pair,
- allows the female to **choose** a fit mate.

### Forms of courtship
| Form | Description | Examples |
|---|---|---|
| **pairing** | a male and a female associate for mating, sometimes for life | doves, pigeons, humans; winged termites pair after the nuptial flight |
| **display** | showing bright colours or special movements | peacock spreading its tail; male agama lizard nodding its orange head; male stickleback's red belly and zig-zag dance |
| **territoriality** | a male marks and defends an area in which it feeds, mates and nests | agama lizard, robin, dog (urine marking), tilapia |
| **seasonal migration** | movement to a breeding ground at a particular season | salmon and eels; swallows; herring; toads moving to ponds in the rains |
| **song, call and scent** | sounds or chemicals (pheromones) that attract mates | croaking of male toads, bird song, female moths' pheromones |

## Mating systems
| System | Meaning | Examples |
|---|---|---|
| **monogamy** | one male mates with one female for a season or for life | doves, swans, eagles, gibbons |
| **polygamy — polygyny** | one male mates with several females | lions, baboons, domestic fowl, elephant seals |
| **polygamy — polyandry** | one female mates with several males | queen honeybee, jacana (lily-trotter) |
| **promiscuity** | males and females mate with many partners; no lasting bond | chimpanzees, dogs, many fishes |

## Parental care
**Parental care** is the protection, feeding and training of the young by one or both parents. In general, the **fewer** the eggs or young produced, the **greater** the care.

| Group | Fertilisation | Parental care |
|---|---|---|
| **fishes** | mostly external; very many eggs | usually none; but tilapia is a **mouth-brooder**, the male stickleback builds and guards a nest, the male seahorse carries eggs in a pouch |
| **amphibians** | external; many eggs in jelly | usually none; the male midwife toad carries the eggs on its legs; some frogs guard eggs or carry tadpoles |
| **reptiles** | internal; shelled eggs | little; eggs buried; crocodiles guard nests and carry hatchlings |
| **birds** | internal; few eggs | **nest building, incubation**, feeding the nestlings, protecting them, teaching them to fly |
| **mammals** | internal; few young | development in the **uterus** nourished by the **placenta**; **suckling** with milk; warmth, grooming, protection, training |

Social insects also show care: worker bees and termites feed and clean the larvae.

## Importance of reproductive behaviours
- ensure that mating occurs between members of the **same species**, at the **right time**
- increase the chances of **fertilisation**
- **selection** of strong mates passes on favourable genes
- parental care **raises the survival rate** of the young
- territoriality **spaces out** the population and reduces competition
- overall, they ensure the **survival and continuity of the species**`,
        examples: `**Example 1.** Name the mating system in which one female mates with several males. *Answer:* **polyandry**, as in the queen honeybee.

**Example 2.** Give one example of parental care in fishes. *Answer:* **Tilapia carries its eggs and fry in its mouth** (mouth-brooding).

**Example 3.** State two functions of courtship. *Answer:* It enables **species recognition** and **stimulates both partners** so that gametes are released together.`,
      },
      questions: [
        ["E", "The behaviour of animals that precedes mating is called", "courtship", "hibernation", "aestivation", "moulting", "Courtship brings the sexes together and prepares them to mate."],
        ["E", "The spreading of the colourful tail feathers by a peacock before a peahen is an example of", "display", "migration", "camouflage", "parental care", "Display attracts and stimulates the female."],
        ["E", "Which group of vertebrates feeds its young on milk?", "Mammals", "Birds", "Reptiles", "Amphibians", "Mammary glands are found only in mammals."],
        ["M", "A mating system in which one male mates with several females is", "polygyny", "polyandry", "monogamy", "parthenogenesis", "Lions and domestic fowl are polygynous."],
        ["M", "The male agama lizard chasing other males away from an area of a wall illustrates", "territoriality", "seasonal migration", "mimicry", "pairing", "It defends a territory for feeding and mating."],
        ["M", "Which of these fishes shows parental care by carrying eggs in its mouth?", "Tilapia", "Herring", "Sardine", "Mackerel", "Tilapia is a mouth-brooder."],
        ["M", "Fishes generally produce a very large number of eggs because", "fertilisation is external and little care is given", "the eggs are very large", "they are warm-blooded", "the eggs have hard shells", "Most eggs and fry are lost, so many are needed."],
        ["H", "The mating system of the queen honeybee, which mates with several drones, is", "polyandry", "polygyny", "monogamy", "pairing for life", "One female mates with many males."],
        ["H", "Which of these is NOT a function of courtship behaviour?", "Increasing the number of eggs laid per female", "Recognition of members of the same species", "Synchronising the release of gametes", "Reducing aggression between mates", "Courtship affects mating success, not egg number."],
        ["H", "The movement of salmon from the sea to rivers to spawn is an example of", "seasonal migration", "territorial display", "hibernation", "taxis in protists", "They migrate to breeding grounds at a particular season."],
      ],
      jamb: [
        ["M", "Which of the following animals exhibits nuptial flight as part of its reproductive behaviour?", "Termite", "Agama lizard", "Toad", "Pigeon", "Winged reproductive termites swarm and pair off."],
        ["H", "The degree of parental care among vertebrates generally increases in the order", "fishes → amphibians → reptiles → birds → mammals", "mammals → birds → reptiles → amphibians → fishes", "amphibians → fishes → birds → reptiles → mammals", "reptiles → fishes → mammals → birds → amphibians", "Care increases as the number of offspring falls."],
      ],
    },
    {
      week: 2,
      title: "Biology of Heredity (Genetics I)",
      subtopics: ["Concept of heredity", "Mendel's experiments", "Terminologies in genetics", "Mendel's laws of inheritance"],
      objectives: ["Explain heredity and transmissible characters", "Describe Mendel's work on garden peas", "Define gene, allele, chromosome, genotype, phenotype, homozygous and heterozygous", "State Mendel's laws with examples"],
      lesson: {
        title: "Mendel and the Language of Genetics",
        summary: "How characters pass from parents to offspring, and the terms and laws that describe it.",
        minutes: 40,
        notes: `## Heredity
**Heredity (inheritance)** is the transmission of characters from **parents to offspring**. **Genetics** is the scientific study of heredity and variation.

### Transmissible characters
- **in humans:** height, skin colour, eye colour, hair type, blood group, tongue rolling, shape of nose, sickle-cell condition, albinism, baldness, intelligence
- **in plants:** height, colour of flowers, seed shape and colour, fruit size, taste, resistance to disease
- **in animals:** coat colour, body size, horns, milk yield, egg production

## Gregor Mendel (1822–1884)
Mendel, an Austrian monk, is the **"father of genetics"**. He worked on the **garden pea** (*Pisum sativum*) and published his results in 1866.

### Why the garden pea?
- many **clear, contrasting characters** (tall/dwarf, round/wrinkled seed, yellow/green seed, purple/white flower)
- normally **self-pollinating**, so pure lines are easy to keep; cross-pollination can be done by hand
- **short life cycle**
- produces **many offspring**

### Mendel's method
1. He obtained **pure-breeding** plants by repeated self-pollination.
2. He **crossed** plants with contrasting characters (the **parental generation, P**).
3. He raised the **first filial generation (F₁)** and self-pollinated it to obtain the **F₂**.
4. He **counted** the offspring and worked out ratios.

**Result:** pure tall × pure dwarf gave **all tall** F₁. Selfing the F₁ gave an F₂ of about **3 tall : 1 dwarf**.

## Terminologies
| Term | Meaning |
|---|---|
| **gene** | the unit of inheritance; a length of DNA on a chromosome that controls a character |
| **chromosome** | a thread-like body in the nucleus that carries the genes |
| **allele (allelomorph)** | one of the alternative forms of a gene, e.g. T and t |
| **locus** | the position of a gene on a chromosome |
| **genotype** | the genetic make-up of an organism, e.g. TT, Tt, tt |
| **phenotype** | the observable appearance, e.g. tall, dwarf |
| **dominant** | the character (allele) that shows in the heterozygote |
| **recessive** | the character that is masked in the heterozygote; shows only when homozygous |
| **homozygous** | having two identical alleles: TT or tt (pure-breeding) |
| **heterozygous** | having two different alleles: Tt (**hybrid**) |
| **F₁, F₂** | first and second filial generations |
| **test cross** | crossing with a homozygous recessive to find an unknown genotype |
| **haploid (n), diploid (2n)** | one set and two sets of chromosomes; humans 2n = 46 |

## Mendel's laws
### First law — the law of segregation
> The two members of a pair of genes (alleles) **separate** during gamete formation, so that each gamete receives **only one** of them.

A Tt plant forms gametes T and t in equal numbers.

### Second law — the law of independent assortment
> Each pair of alleles segregates **independently** of other pairs during gamete formation.

A plant RrYy forms four kinds of gametes in equal numbers: RY, Ry, rY, ry. (This holds for genes on different chromosomes.)

## Why Mendel succeeded
He studied **one character at a time**, used pure lines, used large numbers, kept accurate records, and applied mathematics to his results.`,
        examples: `**Example 1.** State the genotype and phenotype of a pea plant with alleles Tt (T = tall). *Answer:* genotype **Tt (heterozygous)**; phenotype **tall**.

**Example 2.** What gametes does a plant of genotype RrYy produce? *Answer:* **RY, Ry, rY and ry**, in equal numbers.

**Example 3.** Give two reasons Mendel chose the garden pea. *Answer:* It has **clear contrasting characters** and a **short life cycle**.`,
      },
      questions: [
        ["E", "The transmission of characters from parents to offspring is", "heredity", "variation", "evolution", "adaptation", "Heredity is also called inheritance."],
        ["E", "Mendel carried out his experiments on", "garden peas", "fruit flies", "maize", "guinea pigs", "He used Pisum sativum."],
        ["E", "The observable appearance of an organism is its", "phenotype", "genotype", "allele", "locus", "The phenotype results from genotype and environment."],
        ["M", "An organism with two different alleles of a gene is described as", "heterozygous", "homozygous", "haploid", "pure-breeding", "A heterozygote such as Tt is a hybrid."],
        ["M", "The alternative forms of a gene controlling one character are called", "alleles", "gametes", "chromatids", "zygotes", "For example T and t."],
        ["M", "Mendel's first law is the law of", "segregation", "independent assortment", "dominance of species", "use and disuse", "Paired alleles separate into different gametes."],
        ["M", "A character that is expressed only in the homozygous condition is", "recessive", "dominant", "co-dominant", "sex-linked only", "It is masked in the heterozygote."],
        ["H", "The number of different kinds of gametes produced by an individual of genotype AaBb is", "4", "2", "8", "16", "AB, Ab, aB and ab."],
        ["H", "A cross used to find out whether a tall pea plant is homozygous or heterozygous is a", "test cross", "dihybrid cross", "reciprocal graft", "self-fertilising clone", "It is crossed with the homozygous recessive."],
        ["H", "Which of these was NOT a reason for Mendel's success?", "He studied many characters together from the start", "He used pure-breeding lines", "He counted large numbers of offspring", "He kept accurate records", "He followed one character at a time first."],
      ],
      jamb: [
        ["M", "The position occupied by a gene on a chromosome is its", "locus", "allele", "centromere", "phenotype", "Each gene has a fixed locus."],
        ["H", "If the diploid number of chromosomes in an organism is 24, the number of chromosomes in each of its gametes is", "12", "24", "48", "6", "Gametes are haploid, with half the diploid number."],
      ],
    },
    {
      week: 3,
      title: "Genetics II: Crosses, Sex Determination and Sex-Linked Traits",
      subtopics: ["Monohybrid and dihybrid crosses", "Punnett square applications", "Sex determination in humans", "Sex-linked traits and the importance of genetics"],
      objectives: ["Work out the results of monohybrid and dihybrid crosses with Punnett squares", "Explain how sex is determined in humans", "Explain the inheritance of haemophilia and colour blindness", "State the importance of genetics in agriculture and medicine"],
      lesson: {
        title: "Genetic Crosses and Sex Linkage",
        summary: "Using Punnett squares to predict offspring, and understanding how sex and sex-linked traits are inherited.",
        minutes: 40,
        notes: `## Monohybrid cross
A cross involving **one pair** of contrasting characters.

**Pure tall (TT) × pure dwarf (tt)**
Gametes: T and t → F₁ all **Tt** (tall).

**F₁ × F₁: Tt × Tt**
| | T | t |
|---|---|---|
| **T** | TT | Tt |
| **t** | Tt | tt |
- **genotypic ratio:** 1 TT : 2 Tt : 1 tt
- **phenotypic ratio:** **3 tall : 1 dwarf**

**Test cross: Tt × tt** → 1 Tt : 1 tt (1 tall : 1 dwarf). If all offspring are tall, the tall parent was TT.

### Probability
Each fertilisation is an independent event. From Tt × Tt the chance of a dwarf offspring is $\\tfrac14$, each time.

## Incomplete dominance and co-dominance
- **Incomplete dominance:** the heterozygote is intermediate. Red (RR) × white (WW) four o'clock flowers → pink (RW); F₂ ratio **1 red : 2 pink : 1 white**.
- **Co-dominance:** both alleles are fully expressed — blood group **AB**.

## Dihybrid cross
A cross involving **two pairs** of characters. Round yellow (RRYY) × wrinkled green (rryy) → F₁ all **RrYy** (round yellow). Selfing the F₁ gives the F₂ ratio

**9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green**

The 16 squares of the Punnett square come from the four gametes RY, Ry, rY, ry on each side.

## Sex determination in humans
Humans have **46 chromosomes**: 22 pairs of **autosomes** and one pair of **sex chromosomes**.
- female: **XX** — all eggs carry X
- male: **XY** — half the sperms carry X, half carry Y

| | X (sperm) | Y (sperm) |
|---|---|---|
| **X (egg)** | XX girl | XY boy |
The sex of a child is determined by the **father's sperm**; the chance of a boy is **50%** at every birth.

## Sex-linked traits
**Sex-linked** genes are carried on the **X chromosome**; the Y carries no corresponding allele. A male needs only **one** recessive allele to show the trait, so these traits are **commoner in males**. A female with one recessive allele is a **carrier**.

Examples: **haemophilia** (blood fails to clot), **red-green colour blindness**.

### Carrier mother (XᴴXʰ) × normal father (XᴴY)
| | Xᴴ | Y |
|---|---|---|
| **Xᴴ** | XᴴXᴴ normal girl | XᴴY normal boy |
| **Xʰ** | XᴴXʰ carrier girl | XʰY haemophiliac boy |
Half of the sons are expected to be affected; no daughter is affected, but half are carriers. An affected father passes the allele to **all his daughters** and to **none of his sons**.

## Blood groups (multiple alleles)
Alleles Iᴬ, Iᴮ (co-dominant) and Iᴼ (recessive). Genotypes: A = IᴬIᴬ or IᴬIᴼ; B = IᴮIᴮ or IᴮIᴼ; AB = IᴬIᴮ; O = IᴼIᴼ.

## Importance of genetics
- **agriculture:** breeding high-yielding, early-maturing, disease-resistant crops and livestock
- **medicine:** genetic counselling (e.g. sickle cell), blood transfusion, diagnosis of hereditary diseases, paternity disputes
- **crime detection:** blood groups and DNA fingerprinting`,
        examples: `**Example 1.** Two heterozygous tall plants are crossed and 240 seeds are obtained. How many are expected to grow into dwarf plants? *Answer:* $\\tfrac14 \\times 240 = \\mathbf{60}$.

**Example 2.** A colour-blind man marries a woman with normal vision who is not a carrier. What are their children? *Answer:* All sons **normal**; all daughters **carriers**.

**Example 3.** Parents are of genotypes IᴬIᴼ and IᴮIᴼ. What blood groups are possible in their children? *Answer:* **A, B, AB and O**.`,
      },
      questions: [
        ["E", "The number of autosomes in a normal human body cell is", "44", "46", "23", "2", "There are 22 pairs of autosomes plus one pair of sex chromosomes."],
        ["E", "A cross involving one pair of contrasting characters is a", "monohybrid cross", "dihybrid cross", "back graft", "polyploid cross", "Only one character is followed."],
        ["E", "Haemophilia is a condition in which", "blood fails to clot normally", "red cells are sickle-shaped", "the skin lacks pigment", "colours cannot be distinguished", "A clotting factor is missing."],
        ["M", "When two heterozygous tall pea plants are crossed, the phenotypic ratio of the offspring is", "3 tall : 1 dwarf", "1 tall : 1 dwarf", "all tall", "1 tall : 2 medium : 1 dwarf", "The cross Tt × Tt gives 1 TT : 2 Tt : 1 tt."],
        ["M", "The sex of a human baby is determined by the", "sperm that fertilises the egg", "egg released by the mother", "age of the mother", "diet of the parents", "A sperm carries either X or Y."],
        ["M", "A cross between a heterozygous tall plant and a dwarf plant gives offspring in the ratio", "1 tall : 1 dwarf", "3 tall : 1 dwarf", "all tall", "all dwarf", "Tt × tt gives Tt and tt in equal numbers."],
        ["M", "Sex-linked characters are more common in males because males", "have only one X chromosome", "have two X chromosomes", "have more genes", "produce more gametes", "A single recessive allele on the X is expressed."],
        ["H", "In the F₂ of a dihybrid cross between pure round yellow and wrinkled green peas, 320 seeds were obtained. The expected number of wrinkled green seeds is", "20", "60", "180", "80", "One-sixteenth of 320."],
        ["H", "A carrier woman for haemophilia marries a normal man. The probability that a son of theirs is haemophiliac is", "$\\frac12$", "$\\frac14$", "0", "1", "Half of the sons receive the Xʰ chromosome."],
        ["H", "A man of blood group AB marries a woman of group O. Their children could be of groups", "A or B only", "AB or O only", "A, B, AB or O", "O only", "Each child receives Iᴬ or Iᴮ from the father and Iᴼ from the mother."],
      ],
      jamb: [
        ["M", "In a cross between red-flowered (RR) and white-flowered (WW) four o'clock plants showing incomplete dominance, the F₂ phenotypic ratio is", "1 red : 2 pink : 1 white", "3 red : 1 white", "1 red : 1 white", "all pink", "The heterozygote RW is pink."],
        ["H", "A colour-blind woman marries a man with normal vision. What proportion of their sons will be colour-blind?", "All", "Half", "None", "A quarter", "Every son receives an X chromosome carrying the allele from his mother."],
      ],
    },
    {
      week: 4,
      title: "Variation and Evolution I",
      subtopics: ["Concept of variation", "Morphological and physiological variation", "Continuous and discontinuous variation", "Causes of variation; adaptive colouration, mimicry and camouflage"],
      objectives: ["Define variation", "Distinguish morphological from physiological variation with examples", "Distinguish continuous from discontinuous variation", "Explain the causes of variation and describe adaptive colouration in animals"],
      lesson: {
        title: "Variation in Populations",
        summary: "Why no two individuals are exactly alike, and how colour helps animals to survive.",
        minutes: 40,
        notes: `## Variation
**Variation** is the **differences** that exist between individuals of the **same species**.

## Types of variation
### Morphological (physical) variation
Differences in **outward appearance**: height, weight, skin and hair colour, shape of nose and ears, size of feet, **fingerprints**, colour of flowers and coats.

### Physiological variation
Differences in the **way the body functions**: **blood groups**, ability to **roll the tongue**, ability to **taste PTC** (phenylthiocarbamide), sickle-cell condition, colour blindness, behaviour and intelligence.

### Continuous and discontinuous variation
| | Continuous | Discontinuous |
|---|---|---|
| **nature** | smooth gradation between extremes; intermediates exist | distinct classes; no intermediates |
| **examples** | height, weight, skin colour, intelligence, leaf length | blood groups, tongue rolling, sex, albinism, fingerprint type, attached ear lobes |
| **control** | many genes (polygenes) | one or a few genes |
| **environment** | strongly affected | little or not affected |
| **graph** | bell-shaped **normal distribution curve** | separate bars (bar chart) |

## Causes of variation
### Genetic (heritable)
- **Meiosis:** crossing-over and independent assortment of chromosomes shuffle the genes.
- **Fertilisation:** random fusion of gametes from two parents gives new combinations.
- **Mutation:** a sudden change in a gene or chromosome — the source of **new** alleles. Caused by **mutagens** (X-rays, ultraviolet light, radioactivity, some chemicals). Examples: albinism, sickle-cell anaemia, Down's syndrome (an extra chromosome 21).

### Environmental (not heritable)
Food, light, temperature, water, soil nutrients, disease, exercise, accidents. Identical twins raised differently may differ in weight.

**Phenotype = genotype + environment.**

## Application of variation
- **crime detection:** fingerprints are unique
- **blood transfusion** and paternity cases: blood groups
- **breeding** better crops and animals
- identification and classification of races

## Adaptive colouration
Colour patterns that help an animal to **survive**.

| Type | Meaning | Examples |
|---|---|---|
| **camouflage (cryptic / concealing colouration)** | the animal blends with its background | green grasshopper and green snake among leaves; **chameleon**; stick insect; **countershading** in fishes — dark above, pale below |
| **warning colouration** | bright colours advertise that the animal is poisonous or distasteful | wasps, bees, ladybirds, the variegated grasshopper (*Zonocerus*), some frogs |
| **mimicry** | a harmless species resembles a harmful or distasteful one (or an object) and is avoided | hoverflies that look like wasps; edible butterflies resembling distasteful species; stick and leaf insects |
| **display (sexual) colouration** | bright colours attract mates | male agama lizard, peacock, many male birds |
| **disruptive colouration** | bold patterns break up the body outline | zebra, tiger, giraffe |

Adaptive colouration helps in **escaping predators**, **capturing prey** and **securing mates**.`,
        examples: `**Example 1.** Classify blood group and height as continuous or discontinuous. *Answer:* Blood group — **discontinuous**; height — **continuous**.

**Example 2.** Name the source of entirely new alleles in a population. *Answer:* **mutation**.

**Example 3.** A harmless fly has the black and yellow bands of a wasp. What is this called? *Answer:* **mimicry**.`,
      },
      questions: [
        ["E", "Differences among individuals of the same species are known as", "variation", "heredity", "mutation only", "adaptation", "Variation makes individuals unique."],
        ["E", "Which of these is a morphological variation?", "Height", "Blood group", "Ability to taste PTC", "Tongue rolling", "It is a difference in physical appearance."],
        ["E", "The ability of a chameleon to blend with its surroundings is", "camouflage", "mimicry", "warning colouration", "courtship display", "Concealing colouration hides it from predators and prey."],
        ["M", "Which of the following shows discontinuous variation?", "Blood group", "Body weight", "Height", "Skin colour", "People fall into distinct groups with no intermediates."],
        ["M", "A graph of the heights of 500 students would give a", "bell-shaped normal distribution curve", "set of two separate bars", "straight horizontal line", "pie chart with four sectors only", "Height varies continuously about a mean."],
        ["M", "A sudden change in the structure of a gene or chromosome is", "a mutation", "segregation", "fertilisation", "dominance", "Mutation produces new alleles."],
        ["M", "Which of these is a physiological variation?", "Ability to roll the tongue", "Length of the arm", "Shape of the head", "Colour of the hair", "It concerns how the body functions."],
        ["H", "The bright colours of wasps and the variegated grasshopper serve as", "warning colouration", "camouflage", "countershading", "mimicry of leaves", "They advertise that the animal is harmful or distasteful."],
        ["H", "Which of these causes of variation is NOT heritable?", "Differences in nutrition", "Gene mutation", "Crossing-over in meiosis", "Random fertilisation", "Environmental effects are not passed to offspring."],
        ["H", "Fingerprints are useful in crime detection because they", "are unique to each individual", "change every year", "are identical in members of a family", "show continuous variation with age", "No two people have the same fingerprints."],
      ],
      jamb: [
        ["M", "A fish that is dark on its upper surface and silvery below shows", "countershading", "mimicry", "warning colouration", "sexual display", "This makes it hard to see from above and from below."],
        ["H", "Continuous variation in a population is usually the result of", "many genes interacting with the environment", "a single gene with two alleles", "sex-linked genes only", "the absence of meiosis", "Polygenic characters show a smooth range of forms."],
      ],
    },
    {
      week: 6,
      title: "Evolution II: Theories and Evidence",
      subtopics: ["Meaning of evolution", "Lamarck's and Darwin's theories", "Modern synthetic theory", "Evidence of evolution; natural selection and adaptation"],
      objectives: ["Define organic evolution", "Compare Lamarck's and Darwin's theories", "Outline the modern synthetic theory", "Describe the evidence for evolution and explain natural selection"],
      lesson: {
        title: "How Living Things Change over Time",
        summary: "The theories that explain evolution and the evidence that supports them.",
        minutes: 40,
        notes: `## Evolution
**Organic evolution** is the **gradual change** in living organisms over many generations, by which present-day complex forms arose from **earlier, simpler** forms.

## Lamarck's theory (1809) — use and disuse
Jean-Baptiste Lamarck proposed that
1. the environment creates a **need**;
2. organs that are **used** develop, and those **not used** waste away;
3. these **acquired characters are inherited** by the offspring.

*Example:* the giraffe's long neck arose from generations of stretching for high leaves.

**Objection:** characters acquired during life do not alter the genes in the gametes and are **not inherited**. Weismann cut off the tails of mice for many generations; the young were still born with tails.

## Darwin's theory (1859) — natural selection
Charles Darwin, after his voyage on HMS *Beagle* (including the Galápagos Islands), published *On the Origin of Species*. Alfred Russel Wallace reached similar conclusions. The theory:
1. **Overproduction:** organisms produce far more offspring than can survive.
2. **Constant numbers:** yet populations stay fairly constant.
3. **Struggle for existence:** offspring compete for food, space and mates.
4. **Variation:** individuals differ; some variations are favourable.
5. **Survival of the fittest:** the best-adapted survive and reproduce — **natural selection**.
6. **Inheritance:** favourable variations are passed on; over many generations a **new species** may arise.

*Giraffe:* among giraffes of varying neck length, the longer-necked reached more food, survived and bred.

**Weakness:** Darwin could not explain how variation arises or is inherited.

## Modern synthetic theory (neo-Darwinism)
Combines natural selection with **genetics**:
- **mutation** and **recombination** (meiosis and fertilisation) produce variation;
- **natural selection** acts on this variation, changing the **frequency of genes** in a population;
- **isolation** (geographical or reproductive) prevents interbreeding, so separated populations diverge into **new species** (speciation);
- **gene flow** and **genetic drift** also change gene frequencies.

## Evidence of evolution
| Evidence | Explanation |
|---|---|
| **fossil records (palaeontology)** | remains or impressions of organisms preserved in **sedimentary rocks**; older rocks hold simpler forms; the horse series; *Archaeopteryx* links reptiles and birds |
| **comparative anatomy** | **homologous structures** — same basic plan, different functions (the **pentadactyl limb** of the human arm, bat wing, whale flipper) — show common ancestry (divergent evolution). **Analogous structures** — same function, different origin (wings of insect and bird) — show convergent evolution |
| **comparative embryology** | early embryos of fish, bird and human are alike, with gill slits and a tail |
| **vestigial structures** | reduced, functionless organs: human appendix, coccyx, ear muscles; hind-limb bones of whales and pythons |
| **geographical distribution** | isolated regions have unique species (marsupials of Australia; Galápagos finches) |
| **biochemistry and genetics** | all organisms share DNA, the genetic code and similar proteins |

## Natural selection in action
- **industrial melanism:** dark peppered moths survived on soot-blackened trees
- **resistance** of bacteria to antibiotics and of insects to insecticides (DDT)
- **sickle-cell trait:** heterozygotes (AS) resist malaria

## Adaptation
An **adaptation** is an inherited feature that fits an organism to its environment; adaptations are the result of natural selection. **Adaptive radiation** is the evolution of many forms from one ancestor to fill different niches — e.g. the beaks of Darwin's finches.`,
        examples: `**Example 1.** State one difference between Lamarck's and Darwin's theories. *Answer:* Lamarck held that **acquired characters are inherited**; Darwin held that **nature selects** among existing inheritable variations.

**Example 2.** The human arm and the bat's wing are built on the same plan. What kind of structures are they? *Answer:* **homologous structures**.

**Example 3.** Give two examples of vestigial structures in humans. *Answer:* the **appendix** and the **coccyx**.`,
      },
      questions: [
        ["E", "The theory of evolution by natural selection was proposed by", "Charles Darwin", "Gregor Mendel", "Jean Lamarck", "Louis Pasteur", "Darwin published it in 1859."],
        ["E", "The remains of ancient organisms preserved in rocks are called", "fossils", "vestiges", "mutants", "embryos", "Fossils are found in sedimentary rocks."],
        ["E", "The theory of use and disuse was put forward by", "Lamarck", "Darwin", "Wallace", "Mendel", "Lamarck held that acquired characters are inherited."],
        ["M", "The phrase 'survival of the fittest' means that", "the best-adapted individuals survive and reproduce", "the largest animals always win", "only the oldest individuals survive", "all offspring survive", "Fitness means suitability to the environment."],
        ["M", "The human appendix is an example of", "a vestigial structure", "an analogous structure", "a fossil", "an acquired character", "It is reduced and has lost its original function."],
        ["M", "The forelimbs of man, bat and whale are described as", "homologous structures", "analogous structures", "vestigial organs", "fossil links", "They share a pentadactyl plan but differ in function."],
        ["M", "Weismann's experiment of cutting off the tails of mice for many generations disproved the idea that", "acquired characters are inherited", "organisms vary", "organisms compete for food", "fossils show change", "The young were still born with tails."],
        ["H", "The wings of a bird and the wings of an insect are", "analogous structures", "homologous structures", "vestigial structures", "pentadactyl limbs", "They do the same job but have different origins."],
        ["H", "According to the modern synthetic theory, the raw material on which natural selection acts is provided by", "mutation and recombination", "use and disuse", "acquired habits", "special creation", "They generate inheritable variation."],
        ["H", "The spread of dark forms of the peppered moth in sooty industrial areas is an example of", "natural selection", "Lamarckian inheritance", "artificial selection", "vestigial development", "Dark moths were better camouflaged from birds."],
      ],
      jamb: [
        ["M", "Which of the following is evidence of evolution from comparative embryology?", "Gill slits in the early embryos of mammals", "The human appendix", "Fossil horses", "Resistance to DDT", "Early vertebrate embryos resemble one another."],
        ["H", "The development of many different species from a common ancestor to occupy different niches is", "adaptive radiation", "convergent evolution", "genetic drift", "industrial melanism", "Darwin's finches are the classic example."],
      ],
    },
    {
      week: 8,
      title: "Human Evolution",
      subtopics: ["Origin of man", "Fossil evidence of human evolution", "Similarities between humans and apes", "Cultural and biological evolution of humans"],
      objectives: ["Outline the origin of man among the primates", "Describe the main fossil forms in human evolution", "State similarities and differences between humans and apes", "Distinguish biological from cultural evolution"],
      lesson: {
        title: "The Origin and Evolution of Man",
        summary: "The fossil record of human ancestry, our relationship to the apes, and the rise of culture.",
        minutes: 40,
        notes: `## Man's place in nature
Man belongs to the class **Mammalia**, order **Primates**, family **Hominidae**, genus *Homo*, species *Homo sapiens*.

**Primates** (lemurs, monkeys, apes, man) share: grasping hands with **opposable thumbs**; nails instead of claws; **forward-facing eyes** with stereoscopic (three-dimensional) vision; a large brain; few young with long parental care.

Scientific evidence indicates that humans and the modern apes (chimpanzee, gorilla, orang-utan, gibbon) evolved from a **common ancestor**; man did **not** descend from present-day apes. The oldest human fossils come from **Africa**, widely regarded as the **cradle of mankind**.

## Fossil evidence
| Form | Approximate age | Features |
|---|---|---|
| ***Australopithecus*** ("southern ape") | about 4–2 million years ago | found in East and South Africa (e.g. "Lucy", the Taung child); **walked upright** (bipedal) but had a **small brain** (about 400–500 cm³) and an ape-like face |
| ***Homo habilis*** ("handy man") | about 2.4–1.5 million years ago | found at Olduvai Gorge, Tanzania, by the Leakeys; brain about 600–750 cm³; made **simple stone tools** |
| ***Homo erectus*** ("upright man") | about 1.8 million – 300 000 years ago | Java man, Peking man; brain about 900–1100 cm³; fully upright; **used fire**; made hand axes; first to spread out of Africa |
| ***Homo neanderthalensis*** (Neanderthal man) | about 300 000 – 40 000 years ago | Europe and western Asia; large brain, heavy brow ridges; **buried their dead** |
| ***Homo sapiens*** ("wise man") | from about 300 000 years ago | modern man (e.g. Cro-Magnon); brain about 1350–1400 cm³; high forehead, chin, small teeth; **speech, art, agriculture** |

### Trends in human evolution
- **bipedalism** — upright walking freed the hands
- increase in **brain size** and intelligence
- flatter face; smaller jaws and teeth; development of a **chin**
- the opening for the spinal cord (foramen magnum) moved **under** the skull
- broader, bowl-shaped pelvis; S-shaped spine; arched feet
- reduction of body hair
- tool-making, fire, speech and social life

## Humans and apes
### Similarities
- no tail
- similar skeleton, teeth (32) and internal organs
- opposable thumbs; nails
- same ABO blood groups; very similar DNA and proteins (chimpanzee DNA differs from human by only a few per cent)
- long gestation, usually one young, prolonged parental care
- similar facial expressions and social behaviour

### Differences
| Feature | Humans | Apes |
|---|---|---|
| posture | fully erect, bipedal | stooping; knuckle-walking |
| brain | about 1400 cm³ | about 400–500 cm³ |
| arms and legs | legs longer than arms | arms longer than legs |
| big toe | not opposable | opposable |
| jaws | small, with chin | large, projecting, no chin |
| body hair | sparse | thick |
| speech | articulate language | none |

## Biological and cultural evolution
- **Biological evolution** is change in the **genes and body** by mutation and natural selection — slow, passed on by inheritance.
- **Cultural evolution** is change in **knowledge, tools, language and ways of life**, passed on by **learning and teaching** — very fast.

### Stages of cultural evolution
hunting and gathering → **Stone Age** tools → control of **fire** → language → **agriculture** and domestication of animals (settled life) → metal working (Bronze and Iron Ages; e.g. the Nok culture in Nigeria) → writing → industry → modern science and technology.

Through culture, man changes his environment instead of only being changed by it — clothing, housing, medicine and farming.`,
        examples: `**Example 1.** Which fossil form is known as "handy man"? *Answer:* ***Homo habilis***, the first maker of stone tools.

**Example 2.** State two similarities between humans and apes. *Answer:* Both have **no tail** and **opposable thumbs**.

**Example 3.** Distinguish biological from cultural evolution. *Answer:* Biological evolution changes **genes** and is inherited; cultural evolution changes **learned behaviour** and is passed on by teaching.`,
      },
      questions: [
        ["E", "The scientific name of modern man is", "Homo sapiens", "Homo erectus", "Homo habilis", "Australopithecus africanus", "Homo sapiens means 'wise man'."],
        ["E", "Man belongs to the order", "Primates", "Rodentia", "Carnivora", "Chiroptera", "Primates include lemurs, monkeys, apes and man."],
        ["E", "The continent regarded as the cradle of mankind is", "Africa", "Europe", "Asia", "Australia", "The oldest human fossils were found in Africa."],
        ["M", "The fossil form credited with the first use of fire is", "Homo erectus", "Australopithecus", "Homo habilis", "Ramapithecus", "Homo erectus used fire and made hand axes."],
        ["M", "Which of these features is common to humans and apes?", "Absence of a tail", "Fully erect posture", "Articulate speech", "A projecting chin", "Neither apes nor humans have a tail."],
        ["M", "The ability to walk upright on two legs is called", "bipedalism", "brachiation", "knuckle-walking", "quadrupedalism", "Bipedalism freed the hands for other uses."],
        ["M", "Australopithecus differed from modern man mainly in having", "a much smaller brain", "no ability to walk upright", "a tail", "no teeth", "It was bipedal but small-brained."],
        ["H", "The correct order of appearance of these forms is", "Australopithecus → Homo habilis → Homo erectus → Homo sapiens", "Homo habilis → Australopithecus → Homo sapiens → Homo erectus", "Homo erectus → Homo habilis → Australopithecus → Homo sapiens", "Homo sapiens → Homo erectus → Homo habilis → Australopithecus", "This is the sequence shown by the fossil record."],
        ["H", "Cultural evolution differs from biological evolution in that it is", "transmitted by learning", "transmitted by genes", "caused by mutation", "extremely slow", "Knowledge and skills are taught, not inherited."],
        ["H", "Which of these is a difference between humans and apes?", "Humans have legs longer than their arms", "Humans have nails instead of claws", "Humans have opposable thumbs", "Humans have forward-facing eyes", "In apes the arms are longer than the legs."],
      ],
      jamb: [
        ["M", "Which of the following is a characteristic of all primates?", "Opposable thumb", "Presence of a tail", "Hoofed feet", "Compound stomach", "A grasping hand is typical of primates."],
        ["H", "An important trend in human evolution was", "an increase in brain size", "an increase in jaw size", "the lengthening of the arms", "the loss of stereoscopic vision", "Cranial capacity rose from about 450 cm³ to about 1400 cm³."],
      ],
    },
    {
      week: 9,
      title: "Application of Genetics and Evolution",
      subtopics: ["Applications in agriculture", "Applications in medicine", "Genetic engineering, cloning and IVF", "Evolution, biodiversity and conservation"],
      objectives: ["Explain selective breeding, hybridisation and genetic engineering", "Describe the applications of genetics in medicine", "Explain cloning and in vitro fertilisation", "Relate evolution to biodiversity and conservation"],
      lesson: {
        title: "Genetics and Evolution at Work",
        summary: "How knowledge of heredity is used on the farm and in the hospital, and why evolution matters for conservation.",
        minutes: 40,
        notes: `## Applications in agriculture
### Selective breeding (artificial selection)
Man chooses parents with desired traits and breeds from them over generations — high-yielding maize, fast-growing broilers, high-milk cattle.

### Hybridisation (cross-breeding)
Crossing two different varieties or breeds to combine their good qualities. The offspring often show **hybrid vigour (heterosis)** — they outperform both parents. *Example:* crossing the hardy, trypanosome-tolerant N'Dama with a high-yielding exotic breed; hybrid maize; improved cassava varieties.

### Inbreeding and outbreeding
- **Inbreeding** (mating close relatives) fixes desirable traits and gives pure lines, but may lead to **inbreeding depression** — reduced vigour and exposure of harmful recessive genes.
- **Outbreeding** introduces new genes and vigour.

### Other techniques
- **artificial insemination:** semen from a superior male is placed in many females
- **polyploidy:** extra sets of chromosomes (induced with colchicine) give larger fruits and seedless varieties
- **induced mutation:** radiation produces new varieties

### Genetic engineering and GMOs
**Genetic engineering (recombinant DNA technology)** is the transfer of a gene from one organism into another. A **genetically modified organism (GMO)** or **transgenic** organism carries a foreign gene.
1. The required gene is cut out with a **restriction enzyme**.
2. It is joined into a **plasmid** (a ring of bacterial DNA) with **ligase**.
3. The plasmid is put into a host cell, which multiplies and expresses the gene.
*Examples:* pest-resistant **Bt cotton** and **Bt cowpea** (approved in Nigeria); vitamin-A "golden rice"; herbicide-tolerant soya.

**Aims of breeding:** higher yield, early maturity, resistance to pests, diseases and drought, better quality, adaptation to climate.

## Applications in medicine
- **Blood transfusion:** donor and recipient ABO and **Rhesus** groups must be compatible. Group **O** is the universal donor; **AB** the universal recipient.
- **Sickle-cell studies:** haemoglobin genotypes **AA** (normal), **AS** (carrier, sickle-cell trait), **SS** (sickle-cell anaemia). AS × AS gives a **1 in 4** chance of an SS child at each birth.
- **Genetic counselling:** advising intending couples on the risk of hereditary disease after genotype tests.
- **Rhesus factor:** an Rh-negative mother carrying an Rh-positive baby may form antibodies that harm later Rh-positive babies; prevented by an anti-D injection.
- **Paternity testing and forensic science:** blood groups and **DNA fingerprinting**.
- **Genetically engineered medicines:** human **insulin**, growth hormone and vaccines made by bacteria and yeast.
- **Gene therapy:** replacing a faulty gene.
- **Cloning:** producing **genetically identical** copies. The nucleus of a body cell is placed in an egg whose nucleus has been removed (Dolly the sheep, 1996). **Therapeutic cloning** aims at producing tissues for treatment. Plants are cloned by **tissue culture**.
- **In vitro fertilisation (IVF):** eggs are fertilised by sperm **outside the body**, and the embryo is placed in the uterus — "test-tube babies", for couples who cannot conceive naturally.

## Evolution, biodiversity and conservation
- **Biodiversity** — the variety of genes, species and ecosystems — is the **product of evolution**.
- **Genetic variation** within a species allows it to adapt to disease and climate change; small populations lose variation and risk **extinction**.
- Evolution explains **resistance** to drugs and pesticides, guiding their careful use.
- **Conservation** protects species and their gene pools: game reserves and national parks (Yankari, Cross River, Kainji Lake), zoos and botanical gardens, **gene banks and seed banks**, laws against poaching and bush burning.
- Wild relatives of crops are sources of useful genes for breeders.`,
        examples: `**Example 1.** Two carriers of the sickle-cell gene (AS) marry. What is the probability that a child is SS? *Answer:* $\\mathbf{\\tfrac14}$ (25%).

**Example 2.** What is hybrid vigour? *Answer:* The **superior performance of a hybrid** over both of its parents.

**Example 3.** Name one medicine produced by genetic engineering. *Answer:* **human insulin**.`,
      },
      questions: [
        ["E", "An organism that carries a gene transferred from another species is", "a genetically modified organism", "a hybrid by grafting", "a fossil", "a mutant twin", "It is also described as transgenic."],
        ["E", "The universal blood donor belongs to group", "O", "AB", "A", "B", "Group O red cells carry neither A nor B antigens."],
        ["E", "Fertilisation of a human egg outside the body is known as", "in vitro fertilisation", "artificial insemination", "cloning", "parthenogenesis", "The embryo is later placed in the uterus."],
        ["M", "The superior performance of offspring over both parents after cross-breeding is", "hybrid vigour", "inbreeding depression", "mutation", "segregation", "It is also called heterosis."],
        ["M", "The production of genetically identical copies of an organism is", "cloning", "hybridisation", "transfusion", "counselling", "A clone has the same genes as its parent."],
        ["M", "A person with the haemoglobin genotype AS is described as", "a carrier of the sickle-cell trait", "a sickle-cell anaemia patient", "a universal donor", "an albino", "The heterozygote is healthy but can pass on the S allele."],
        ["M", "Mating of closely related animals over several generations is", "inbreeding", "outbreeding", "cross-breeding", "upgrading", "It gives pure lines but may reduce vigour."],
        ["H", "A man of genotype AS marries a woman of genotype AA. The probability of their having a child with sickle-cell anaemia is", "0", "$\\frac14$", "$\\frac12$", "1", "No child can receive two S alleles."],
        ["H", "In genetic engineering, the enzymes used to cut DNA at specific points are", "restriction enzymes", "ligases", "amylases", "polymerases only", "Ligase joins the pieces; restriction enzymes cut them."],
        ["H", "Seed banks and gene banks are important because they", "conserve genetic diversity", "produce new mutations", "prevent all evolution", "replace game reserves entirely", "They store genes for future breeding and restoration."],
      ],
      jamb: [
        ["M", "Which of the following is a product of genetic engineering used in medicine?", "Human insulin made by bacteria", "Quinine from cinchona bark", "Penicillin from wild mould", "Iodine tincture", "The human insulin gene is inserted into bacteria."],
        ["H", "A Rhesus-negative woman married to a Rhesus-positive man may have problems with later pregnancies because", "she forms antibodies against the Rhesus antigen of the foetus", "the foetus lacks haemoglobin", "her blood group changes to AB", "the father's blood clots in the foetus", "Antibodies formed after the first Rh-positive baby attack the red cells of later ones."],
      ],
    },
    {
      week: 10,
      title: "Ethical, Social and Economic Implications of Genetics and Evolution",
      subtopics: ["Ethical debates on cloning, stem cells and GMOs", "Advantages and disadvantages", "Conservation of genetic resources", "Relevance to Nigeria's development"],
      objectives: ["Discuss the ethical issues raised by cloning, stem cell research and GMOs", "State advantages and disadvantages of genetic technologies", "Explain the importance of conserving genetic resources", "Relate genetics and biotechnology to Nigeria's development"],
      lesson: {
        title: "Genetics, Society and Development",
        summary: "The benefits, risks and moral questions of modern genetics, and what they mean for Nigeria.",
        minutes: 40,
        notes: `## Why ethics matters
New genetic technologies give man power over life itself. **Bioethics** asks not only *"Can we?"* but *"Should we?"*

## Cloning
| For | Against |
|---|---|
| copies animals with valuable traits | low success rate; many abnormal or short-lived clones |
| may save endangered species | reduces **genetic diversity**; a disease could wipe out identical animals |
| therapeutic cloning may supply tissues for transplant | **human reproductive cloning** is widely regarded as unethical and is banned in many countries |
| | concerns about human dignity and identity; religious objections |

## Stem cell research
**Stem cells** are unspecialised cells that can divide and develop into many cell types. They may be used to repair damaged tissue (bone marrow transplants for leukaemia and, experimentally, sickle-cell disease; nerve and heart repair).
- **Embryonic** stem cells are taken from early embryos, which are destroyed — the main ethical objection.
- **Adult** stem cells (bone marrow, umbilical-cord blood) raise fewer objections.

## Genetically modified organisms
| Advantages | Disadvantages / concerns |
|---|---|
| higher yields; more food | possible unknown long-term effects on health (e.g. allergies) |
| resistance to pests and diseases → less pesticide | genes may spread to wild relatives ("superweeds") |
| tolerance of drought and poor soils | harm to non-target insects; loss of biodiversity |
| improved nutrition (vitamin-A rice) | farmers depend on companies for patented seed each season |
| longer shelf life; lower losses | need for labelling and consumer choice |
| medicines such as insulin | moral objections to "tampering with nature" |

## Other issues
- **Genetic screening and privacy:** who may know a person's genotype — employers, insurers? Risk of **discrimination**.
- **Pre-natal testing and "designer babies":** choosing the sex or traits of children.
- **Eugenics:** attempts to "improve" human populations by controlled breeding — historically abused.
- **Gene patents** and the cost of treatment: who benefits?
- **Misuse of evolution:** ideas such as "social Darwinism" and racial superiority have **no scientific basis** — all humans belong to one species.

## Conservation of genetic resources
**Genetic resources** are the genes in crops, livestock, wild plants, animals and micro-organisms.

**Importance:** raw material for breeding new varieties; sources of medicines; insurance against new pests, diseases and climate change; maintenance of ecosystems; heritage for future generations.

**Threats:** deforestation, bush burning, over-hunting, pollution, replacement of local varieties by a few improved ones (**genetic erosion**).

**Methods:** *in situ* — forest and game reserves, national parks; *ex situ* — seed banks, gene banks, zoos, botanical gardens (e.g. the National Centre for Genetic Resources and Biotechnology, Ibadan; IITA's gene bank).

## Relevance to Nigeria's development
- **Food security:** improved cassava, maize, cowpea and rice varieties; better livestock breeds.
- **Health:** genotype screening and counselling to reduce **sickle-cell disease** (Nigeria has one of the world's highest burdens); vaccine production.
- **Economy:** jobs and income from biotechnology, seed and pharmaceutical industries; reduced imports.
- **Environment:** conservation supports tourism; bioremediation of oil spills.
- **Regulation:** the **National Biosafety Management Agency (NBMA)** regulates GMOs; **NABDA** promotes biotechnology; NAFDAC regulates foods and drugs.

## Balanced view
Benefits are real, but each technology needs **research, regulation, public education and respect for human dignity**.`,
        examples: `**Example 1.** State one ethical objection to embryonic stem cell research. *Answer:* The **embryo is destroyed** when its cells are taken.

**Example 2.** Give one advantage and one disadvantage of GM crops. *Answer:* Advantage — **higher yield / pest resistance**; disadvantage — **genes may spread to wild plants**.

**Example 3.** Distinguish *in situ* from *ex situ* conservation. *Answer:* *In situ* conserves organisms **in their natural habitat** (game reserve); *ex situ* conserves them **outside it** (seed bank, zoo).`,
      },
      questions: [
        ["E", "Unspecialised cells that can develop into many types of cells are", "stem cells", "red blood cells", "gametes only", "guard cells", "Stem cells can divide and differentiate."],
        ["E", "The study of moral questions raised by biological research is", "bioethics", "biometrics", "biochemistry", "biogeography", "It asks whether a procedure ought to be done."],
        ["E", "Which of these is a method of conserving genetic resources?", "Establishing seed banks", "Bush burning", "Over-hunting", "Deforestation", "Seed banks store genes for the future."],
        ["M", "A major ethical objection to embryonic stem cell research is that", "embryos are destroyed", "adult cells are used", "it uses plant tissue", "it is too cheap", "Cells are taken from early human embryos."],
        ["M", "An advantage of genetically modified crops is", "resistance to pests", "spread of genes to weeds", "dependence on patented seed", "loss of local varieties", "Pest-resistant crops need less pesticide."],
        ["M", "Conserving organisms in their natural habitat, as in a game reserve, is", "in situ conservation", "ex situ conservation", "cloning", "genetic erosion", "In situ means 'in the original place'."],
        ["M", "A disadvantage of cloning farm animals is that it", "reduces genetic diversity", "increases variation", "prevents all disease", "is always successful", "Identical animals are equally vulnerable to disease."],
        ["H", "The loss of local crop varieties when farmers plant only a few improved ones is", "genetic erosion", "hybrid vigour", "adaptive radiation", "gene therapy", "The gene pool of the crop becomes narrower."],
        ["H", "Genotype screening and counselling before marriage is especially relevant in Nigeria in reducing", "sickle-cell disease", "malaria transmission by mosquitoes", "cholera", "kwashiorkor", "Two AS partners risk having SS children."],
        ["H", "The use of a person's genetic test results to deny him employment is an issue of", "genetic discrimination and privacy", "hybridisation", "natural selection", "biological evolution", "It concerns who may know and use genetic information."],
      ],
      jamb: [
        ["M", "Which of the following agencies regulates the use of genetically modified organisms in Nigeria?", "National Biosafety Management Agency", "National Drug Law Enforcement Agency", "Nigerian Meteorological Agency", "Federal Road Safety Corps", "The NBMA is responsible for biosafety."],
        ["H", "Maintaining a wide variety of genes within a crop species is important chiefly because it", "provides material for adapting to new diseases and climates", "makes all plants identical", "prevents the crop from reproducing", "removes the need for breeding", "Variation is the raw material for selection and breeding."],
      ],
    },
  ],
};
