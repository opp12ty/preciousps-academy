import type { TermPlan } from "../types";

/** SS3 Biology — original Precious PS content following the national senior secondary curriculum. */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Cell division: mitosis and meiosis",
        subtopics: ["Chromosomes and the cell cycle", "Mitosis and its stages", "Meiosis and its stages", "Importance and comparison of mitosis and meiosis"],
        objectives: ["Describe chromosomes and distinguish haploid from diploid cells", "Describe the stages of mitosis", "Describe the stages of meiosis", "Compare mitosis with meiosis and state their importance"],
        lesson: {
          title: "How Cells Divide",
          summary: "Describe mitosis and meiosis and explain their importance.",
          minutes: 40,
          notes: `## Chromosomes
Thread-like structures in the nucleus, made of **DNA** and protein, that carry the **genes**. Before a cell divides, each chromosome copies itself to form two identical **chromatids** joined at a **centromere**.
- body (somatic) cells are **diploid (2n)** — they have chromosomes in **homologous pairs**, one of each pair from each parent
- gametes are **haploid (n)** — one chromosome of each pair
In man 2n = 46 and n = 23.

## The cell cycle
**Interphase** (the cell grows, makes new organelles and **replicates its DNA**) followed by division of the nucleus and then of the cytoplasm (**cytokinesis**).

## Mitosis
Division of a nucleus to give **two daughter nuclei with the same number and kind of chromosomes** as the parent. It occurs in **body cells**: growing regions such as root and shoot tips, bone marrow and skin.
| Stage | Events |
|---|---|
| **prophase** | chromosomes shorten, thicken and become visible as pairs of chromatids; the nuclear membrane and nucleolus disappear; the **spindle** forms |
| **metaphase** | chromosomes line up on the **equator** of the spindle, attached by their centromeres |
| **anaphase** | centromeres divide; the chromatids **separate** and move to **opposite poles** |
| **telophase** | chromatids reach the poles; nuclear membranes re-form; the chromosomes uncoil; the cytoplasm divides |
In animal cells the cytoplasm divides by constriction; in plant cells a **cell plate** forms between the nuclei.

### Importance of mitosis
- **growth** of the organism
- **repair** and replacement of worn-out cells
- **asexual reproduction** (binary fission, budding, vegetative propagation)
- keeps the chromosome number **constant** from cell to cell — daughter cells are genetically identical

## Meiosis
A **reduction division** in which a diploid nucleus divides **twice** to give **four haploid** nuclei. It occurs in the **reproductive organs** — testes and ovaries; anthers and ovules — during the formation of **gametes**.

### First meiotic division
- **prophase I** — homologous chromosomes **pair up** (synapsis) to form bivalents; their chromatids exchange segments at points called chiasmata — **crossing over**
- **metaphase I** — pairs line up on the equator
- **anaphase I** — **whole chromosomes** of each pair move to opposite poles (the centromeres do not divide)
- **telophase I** — two cells form, each with **half** the chromosome number

### Second meiotic division
Resembles mitosis: the chromatids of each chromosome separate, giving **four haploid cells**.

### Importance of meiosis
- **halves the chromosome number**, so that at fertilisation the diploid number is restored and remains constant from generation to generation
- produces **gametes**
- produces **variation** through crossing over and the independent assortment of chromosomes

## Comparison
| Mitosis | Meiosis |
|---|---|
| occurs in body cells | occurs in reproductive cells |
| one division | two divisions |
| two daughter cells | four daughter cells |
| daughter cells are **diploid** | daughter cells are **haploid** |
| no pairing of homologous chromosomes; no crossing over | pairing and crossing over occur |
| daughter cells identical to the parent | daughter cells differ genetically |
| for growth, repair and asexual reproduction | for gamete formation |

## Gamete formation
- **spermatogenesis** in the testes — each parent cell gives four sperm
- **oogenesis** in the ovary — each gives one ovum and small polar bodies

## Uncontrolled division
Cells that divide without control form a **tumour**; malignant tumours are **cancer**.`,
          examples: `**Example 1.** A body cell has 16 chromosomes. How many are in each daughter cell after (a) mitosis (b) meiosis? *Answer:* (a) **16** (b) **8**.

**Example 2.** At which stage of mitosis do chromosomes line up at the equator? *Answer:* **Metaphase**.

**Example 3.** Give one way in which meiosis produces variation. *Answer:* **Crossing over** between homologous chromosomes.`,
        },
        questions: [
          ["E", "The type of cell division that produces gametes is", "meiosis", "mitosis", "binary fission", "budding", "It halves the chromosome number."],
          ["E", "The number of chromosomes in a normal human body cell is", "46", "23", "44", "92", "They form 23 pairs."],
          ["E", "Growth and repair of body tissues are brought about by", "mitosis", "meiosis", "fertilisation", "mutation", "The daughter cells are identical to the parent."],
          ["M", "The stage of mitosis in which the chromosomes line up on the equator of the spindle is", "metaphase", "prophase", "anaphase", "telophase", "They are attached by their centromeres."],
          ["M", "A cell with a single set of unpaired chromosomes is described as", "haploid", "diploid", "somatic", "homologous", "Gametes are of this kind."],
          ["M", "The chromatids separate and move to opposite poles during", "anaphase", "metaphase", "interphase", "prophase", "The centromeres divide first."],
          ["M", "The number of daughter cells formed from one cell at the end of meiosis is", "four", "two", "one", "eight", "There are two successive divisions."],
          ["H", "The exchange of segments between chromatids of homologous chromosomes is called", "crossing over", "replication", "cytokinesis", "segregation", "It takes place in prophase of the first meiotic division."],
          ["H", "An organism has a diploid number of 24. The number of chromosomes in each of its gametes is", "12", "24", "48", "6", "Meiosis halves the number."],
          ["H", "The significance of meiosis in sexually reproducing organisms is that it", "keeps the chromosome number constant from generation to generation", "doubles the chromosome number", "produces identical offspring", "repairs damaged tissues", "Haploid gametes fuse to restore the diploid number."],
        ],
      },
      {
        week: 2,
        title: "Reproductive behaviour and development in animals",
        subtopics: ["Courtship behaviour", "Life cycles and metamorphosis in insects", "Development of the toad", "Development in birds and adaptive value of behaviour"],
        objectives: ["Describe courtship behaviours in animals", "Distinguish complete from incomplete metamorphosis", "Describe the stages in the life history of a toad", "Explain the importance of courtship, territoriality and parental care"],
        lesson: {
          title: "Courtship and Growing Up",
          summary: "Describe courtship behaviour and the development of insects, toads and birds.",
          minutes: 40,
          notes: `## Courtship
The **behaviour patterns by which animals attract and prepare mates** before mating.
### Forms of courtship
- **display** — showing off bright colours or special structures: the peacock spreads its tail; the male agama lizard nods its orange head; the male fowl drags a wing round the hen
- **pairing** — a male and female stay together: toads pair in water (amplexus); many birds and fish pair for the breeding season
- **territoriality** — a male marks and **defends an area** against other males of its species: agama lizards, birds, some fish. It secures food, a nesting site and mates, and spreads the population out
- **seasonal migration** — movement to breeding grounds: birds; salmon and eels; some herring swim to shallow water to spawn
- **sound and scent** — croaking of male toads; songs of birds; chirping of crickets; chemical attractants (**pheromones**) of moths
- **courtship dances and nuptial flights** — the winged termites and the queen bee mate in flight

### Importance
- brings the sexes together at the right time
- ensures mating between members of the **same species**
- stimulates readiness to mate and the release of gametes
- reduces aggression between the partners

## Metamorphosis in insects
The **change in form** from the young to the adult.
### Complete metamorphosis
**egg → larva → pupa → adult (imago)** — four stages; the larva looks quite unlike the adult.
| Insect | Larva |
|---|---|
| housefly | maggot |
| butterfly, moth | caterpillar |
| mosquito | wriggler (pupa: tumbler) |
| beetle | grub |
The larva feeds and grows; the **pupa** is an apparently resting stage in which the body is reorganised.
### Incomplete metamorphosis
**egg → nymph → adult** — three stages; the **nymph** resembles the adult but is smaller, wingless and sexually immature. It **moults (ecdysis)** several times; each stage between moults is an instar. Examples: cockroach, grasshopper, termite, dragonfly, bug.

### Life cycle of the mosquito
Eggs are laid on stagnant water (Anopheles singly with floats; Culex in rafts). Larvae hang from the surface film, breathing through a tube or spiracles; the comma-shaped pupae also breathe at the surface; adults emerge and fly off. The whole cycle takes about two weeks. Knowledge of the cycle guides control.

## Development of the toad
1. eggs are laid in water in strings of **spawn**, fertilised externally
2. the **tadpole** hatches with **external gills** and a tail; it clings to weeds
3. the external gills are replaced by **internal gills** covered by an operculum; it feeds on algae
4. **hind limbs** appear, then **fore limbs**
5. **lungs** develop; the tail is **absorbed**; the mouth widens
6. the young toad leaves the water and feeds on insects
The change is controlled by **thyroxine**.

## Development in birds
The egg is fertilised internally and laid with a shell. The embryo grows on the yolk, enclosed in membranes: the **amnion** (fluid cushion), **allantois** (respiration and storage of wastes), **yolk sac** (food) and **chorion**. The eggs are **incubated** (21 days in the domestic fowl). The chick breaks the shell with its egg tooth.

## Parental care
Feeding, protecting and training the young. It is least in fish and amphibians (which lay very many eggs), greater in birds, and greatest in mammals (which have few young). The more care given, the fewer eggs need be produced.

## Other behaviour
- **instinctive (innate)** behaviour is inherited: web-spinning by spiders, nest-building, suckling
- **learned** behaviour is acquired by experience: imprinting in chicks, habituation, trial and error, conditioning`,
          examples: `**Example 1.** List the stages of complete metamorphosis. *Answer:* **Egg, larva, pupa, adult**.

**Example 2.** Give an example of an insect with incomplete metamorphosis. *Answer:* The **cockroach** (or grasshopper).

**Example 3.** State one importance of territoriality. *Answer:* It ensures **enough food and space** for the pair and their young.`,
        },
        questions: [
          ["E", "The behaviour by which animals attract mates before mating is", "courtship", "migration", "hibernation", "predation", "Display and pairing are forms of it."],
          ["E", "The young stage of a toad that lives in water is the", "tadpole", "nymph", "maggot", "pupa", "It breathes with gills."],
          ["E", "The larva of the housefly is called a", "maggot", "caterpillar", "grub", "wriggler", "It hatches in decaying matter."],
          ["M", "The stages in complete metamorphosis are", "egg, larva, pupa, adult", "egg, nymph, adult", "egg, pupa, nymph, adult", "larva, egg, adult", "The larva is quite unlike the adult."],
          ["M", "An insect that undergoes incomplete metamorphosis is the", "cockroach", "housefly", "butterfly", "mosquito", "Its young stage is a nymph."],
          ["M", "The defence of an area by a male animal against others of its species is", "territoriality", "pairing", "display", "imprinting", "The male agama lizard shows it."],
          ["M", "The periodic shedding of the exoskeleton by a growing insect is", "ecdysis", "metamorphosis", "pupation", "amplexus", "It is also called moulting."],
          ["H", "During the development of a tadpole into a toad, the tail is", "absorbed into the body", "shed and left in the water", "changed into hind limbs", "eaten by the tadpole", "Its materials are reused."],
          ["H", "In the developing chick, the membrane concerned with respiration and storage of wastes is the", "allantois", "amnion", "yolk sac", "shell membrane", "The amnion provides a fluid cushion."],
          ["H", "Animals that give much parental care generally produce", "fewer eggs or young", "very many eggs", "eggs without yolk", "no gametes", "More of their offspring survive."],
        ],
      },
      {
        week: 3,
        title: "Genetics: Mendel's laws of inheritance",
        subtopics: ["Terms used in genetics", "Mendel's work and monohybrid inheritance", "Dihybrid inheritance and Mendel's second law", "Test cross, incomplete dominance and probability"],
        objectives: ["Define the terms used in genetics", "Explain monohybrid inheritance and Mendel's first law", "Explain dihybrid inheritance and Mendel's second law", "Explain the test cross, incomplete dominance and probability in genetics"],
        lesson: {
          title: "Heredity",
          summary: "Explain Mendel's laws and work out the results of genetic crosses.",
          minutes: 40,
          notes: `## Genetics
The study of **heredity** (the passing of characters from parents to offspring) and **variation**.

## Terms
| Term | Meaning |
|---|---|
| **gene** | a unit of inheritance; a length of DNA on a chromosome |
| **alleles (allelomorphs)** | alternative forms of a gene, e.g. T (tall) and t (short) |
| **dominant** | the allele that shows its effect even with a different partner |
| **recessive** | the allele that is masked by the dominant one; shows only when both alleles are recessive |
| **genotype** | the genetic make-up, e.g. TT, Tt, tt |
| **phenotype** | the outward appearance, e.g. tall |
| **homozygous (pure-breeding)** | two identical alleles: TT or tt |
| **heterozygous (hybrid)** | two different alleles: Tt |
| **F₁, F₂** | first and second filial generations |
| **locus** | the position of a gene on a chromosome |

## Mendel's work
**Gregor Mendel**, an Austrian monk, the "father of genetics", crossed varieties of the **garden pea**. He chose it because it has clear **contrasting characters** (tall/short, round/wrinkled seeds, yellow/green seeds), is naturally **self-pollinating** but easy to cross, has a **short life cycle** and gives **many offspring**.

## Monohybrid inheritance
A cross involving **one pair** of contrasting characters.
Pure tall (TT) × pure short (tt):
- gametes: T and t
- **F₁: all Tt — all tall**
F₁ selfed, Tt × Tt:
| | T | t |
|---|---|---|
| **T** | TT | Tt |
| **t** | Tt | tt |
- **F₂ phenotypic ratio: 3 tall : 1 short**
- F₂ genotypic ratio: 1 TT : 2 Tt : 1 tt

### Mendel's first law — the law of segregation
*The characters of an organism are controlled by pairs of factors (genes) which separate (segregate) during gamete formation, so that each gamete receives only one of each pair.*

## Dihybrid inheritance
A cross involving **two pairs** of characters. Round yellow (RRYY) × wrinkled green (rryy):
- F₁: all RrYy — round yellow
- F₁ gametes: RY, Ry, rY, ry
- **F₂ ratio: 9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green**

### Mendel's second law — the law of independent assortment
*Each pair of factors segregates independently of other pairs, so that characters are inherited independently of one another.*

## Test cross (back cross)
To find whether an organism showing the dominant character is TT or Tt, cross it with the **homozygous recessive** (tt):
- TT × tt → all tall
- Tt × tt → **1 tall : 1 short**

## Incomplete dominance
Neither allele is dominant; the heterozygote is **intermediate**. In the four o'clock plant, red (RR) × white (WW) gives **pink** (RW); the F₂ ratio is **1 red : 2 pink : 1 white**.
**Codominance**: both alleles show fully, as in blood group AB.

## Probability in genetics
The ratios are **chances**, not certainties. For Tt × Tt, the probability that any one offspring is short is **¼ (25%)**. Each fertilisation is an independent event; ratios are closest when numbers are large.
*Example:* out of 400 F₂ plants from Tt × Tt, about 300 are expected to be tall and 100 short.

## Heritable characters
- in man: height, skin colour, eye colour, blood group, tongue rolling, sickle-cell trait, baldness, intelligence
- in plants: height, seed colour, fruit size, disease resistance
- in animals: coat colour, milk yield, horns`,
          examples: `**Example 1.** A heterozygous tall pea plant is crossed with a short one. What is the phenotypic ratio? *Solution:* Tt × tt → Tt, tt — **1 tall : 1 short**.

**Example 2.** In a cross Tt × Tt, 240 offspring are produced. How many are expected to be short? *Solution:* ¼ × 240 = **60**.

**Example 3.** State Mendel's first law. *Answer:* **Paired factors segregate during gamete formation**, so each gamete carries only one of each pair.`,
        },
        questions: [
          ["E", "The scientist regarded as the father of genetics is", "Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke", "He worked with garden peas."],
          ["E", "The outward appearance of an organism is its", "phenotype", "genotype", "allele", "locus", "It results from the genes and the environment."],
          ["E", "An organism with two identical alleles for a character is", "homozygous", "heterozygous", "a hybrid", "a mutant", "TT and tt are examples."],
          ["M", "When two heterozygous tall plants (Tt) are crossed, the phenotypic ratio of the offspring is", "3 tall : 1 short", "1 tall : 1 short", "all tall", "1 tall : 3 short", "The short character appears in one quarter."],
          ["M", "Alternative forms of the same gene are called", "alleles", "chromosomes", "gametes", "phenotypes", "They occupy the same position on homologous chromosomes."],
          ["M", "An allele whose effect is masked in the heterozygous condition is", "recessive", "dominant", "codominant", "lethal", "It shows only when homozygous."],
          ["M", "The F₂ phenotypic ratio in a dihybrid cross between two pure-breeding parents is", "9 : 3 : 3 : 1", "3 : 1", "1 : 2 : 1", "1 : 1 : 1 : 1", "It illustrates independent assortment."],
          ["H", "A tall pea plant crossed with a short plant gave tall and short offspring in equal numbers. The genotype of the tall parent was", "Tt", "TT", "tt", "TTtt", "A 1 : 1 ratio is the result of a test cross with a heterozygote."],
          ["H", "A cross between red-flowered and white-flowered plants gives pink-flowered offspring. This is an example of", "incomplete dominance", "complete dominance", "sex linkage", "mutation", "Neither allele masks the other."],
          ["H", "From a cross Tt × Tt that produced 400 plants, the number expected to be heterozygous is", "200", "100", "300", "400", "Half the offspring are Tt."],
        ],
      },
      {
        week: 4,
        title: "Chromosomes, DNA and sex-linked inheritance",
        subtopics: ["Chromosomes and the structure of DNA", "Sex determination", "Sex-linked characters", "Mutation"],
        objectives: ["Describe chromosomes and the structure and replication of DNA", "Explain how sex is determined in humans", "Explain the inheritance of sex-linked characters", "Explain mutation, its causes and effects"],
        lesson: {
          title: "The Basis of Heredity",
          summary: "Describe DNA and explain sex determination, sex linkage and mutation.",
          minutes: 40,
          notes: `## Chromosomes and genes
The **chromosome theory of inheritance**: genes are located on chromosomes and are passed on when chromosomes segregate at meiosis. Humans have **23 pairs**: 22 pairs of **autosomes** and one pair of **sex chromosomes**.

## DNA
**Deoxyribonucleic acid** is the hereditary material. Its structure — a **double helix** — was worked out by **Watson and Crick** in 1953.
- built from units called **nucleotides**, each made of a **phosphate**, a sugar (**deoxyribose**) and a **nitrogenous base**
- four bases: **adenine (A)**, **thymine (T)**, **guanine (G)**, **cytosine (C)**
- two strands are held together by base pairs: **A pairs with T; G pairs with C**
- the **sequence of bases** is the genetic code for making proteins
### Replication
The double helix unwinds and the strands separate; each acts as a **template** for a new partner strand, so two identical DNA molecules result. This occurs in interphase.
### RNA
Ribonucleic acid is single-stranded, with ribose sugar and **uracil** in place of thymine. Messenger RNA carries the code from DNA to the ribosomes, where proteins are built.

## Sex determination
- female: **XX** — all eggs carry an **X**
- male: **XY** — half the sperm carry X and half carry Y
| | X (egg) |
|---|---|
| **X (sperm)** | XX — girl |
| **Y (sperm)** | XY — boy |
The **father's sperm determines the sex** of the child. The chance of a boy or a girl at each birth is **50%**.

## Sex-linked characters
Characters controlled by genes on the **sex chromosomes**, mostly on the **X**. Because a male has only one X, a single recessive allele shows in him; a female needs two. Such conditions are therefore **commoner in males**, and a female with one such allele is a **carrier**.
- **red–green colour blindness**
- **haemophilia** — the blood fails to clot
- baldness is sex-influenced; hairy ear rims are linked to the Y chromosome

### Example
Carrier mother (XᴺXⁿ) × normal father (XᴺY):
- daughters: XᴺXᴺ (normal) or XᴺXⁿ (carrier)
- sons: XᴺY (normal) or **XⁿY (colour-blind)**
So half the sons are expected to be colour-blind, and no daughter is.
A colour-blind father passes the allele to **all his daughters** (who become carriers) and to **none of his sons**, since sons receive his Y.

## Linkage
Genes on the same chromosome tend to be inherited together; crossing over may separate them.

## Mutation
A **sudden change in a gene or chromosome** that can be inherited.
- **gene mutation** — a change in the base sequence: sickle-cell anaemia, albinism, haemophilia
- **chromosome mutation** — a change in the number or structure of chromosomes: **Down's syndrome** (an extra chromosome 21, giving 47); polyploidy in plants
### Causes (mutagens)
X-rays, gamma rays and ultraviolet light; chemicals such as mustard gas and some pesticides; errors in replication.
### Effects
Most mutations are harmful or have no effect; a few are beneficial and provide the **raw material for evolution**. Examples of mutants: insects resistant to insecticides, bacteria resistant to antibiotics, seedless fruits, albino animals.
Only mutations in the reproductive cells are passed to offspring.`,
          examples: `**Example 1.** One strand of DNA has the base sequence A–T–G–C. What is the sequence on the partner strand? *Answer:* **T–A–C–G**.

**Example 2.** Which parent determines the sex of a child? *Answer:* The **father** — his sperm carries either X or Y.

**Example 3.** Why is colour blindness commoner in men? *Answer:* A man has **only one X chromosome**, so a single recessive allele shows.`,
        },
        questions: [
          ["E", "The sex chromosomes of a normal human male are", "XY", "XX", "YY", "XO", "The female has two X chromosomes."],
          ["E", "The hereditary material found in chromosomes is", "DNA", "ATP", "glucose", "haemoglobin", "It carries the genetic code."],
          ["E", "A sudden inheritable change in a gene or chromosome is called", "a mutation", "an adaptation", "a variation", "a segregation", "Radiation can cause it."],
          ["M", "In DNA, adenine always pairs with", "thymine", "guanine", "cytosine", "uracil", "Guanine pairs with cytosine."],
          ["M", "The sex of a child is determined by the", "sperm of the father", "egg of the mother", "age of the parents", "diet of the mother", "Sperm carry either an X or a Y chromosome."],
          ["M", "An example of a sex-linked character in man is", "haemophilia", "tongue rolling", "sickle-cell anaemia", "albinism", "Its gene is carried on the X chromosome."],
          ["M", "The double-helix structure of DNA was proposed by", "Watson and Crick", "Mendel and Darwin", "Schleiden and Schwann", "Hooke and Virchow", "They announced it in 1953."],
          ["H", "A carrier woman marries a man with normal colour vision. The probability that a son of theirs is colour-blind is", "one-half", "zero", "one-quarter", "one", "A son receives one of his mother's two X chromosomes."],
          ["H", "Down's syndrome results from", "an extra chromosome, giving 47 in each cell", "a missing sex chromosome", "a recessive gene on the X chromosome", "lack of iodine", "It is a chromosome mutation."],
          ["H", "A colour-blind man cannot pass the condition directly to his sons because", "sons receive his Y chromosome, not his X", "the gene is dominant", "sons receive no chromosomes from him", "the gene is on an autosome", "His X chromosome goes only to daughters."],
        ],
      },
      {
        week: 5,
        title: "Variation",
        subtopics: ["Morphological variation", "Physiological variation", "Continuous and discontinuous variation", "Causes and applications of variation"],
        objectives: ["Describe morphological variations with examples", "Describe physiological variations with examples", "Distinguish continuous from discontinuous variation", "State the causes of variation and its applications"],
        lesson: {
          title: "Differences Among Individuals",
          summary: "Describe the types and causes of variation and its applications.",
          minutes: 40,
          notes: `## Variation
The **differences among individuals of the same species**. No two individuals — except identical twins — have exactly the same genes.

## Morphological variation
Differences in **physical appearance — form, size and structure**.
- **height** and body size
- **weight**
- **skin colour**, hair colour and texture, eye colour
- shape of the head, nose, ears and lips
- **fingerprints**
- in plants: height, leaf size and shape, fruit and seed size, flower colour
- in animals: coat colour, size of horns

## Physiological variation
Differences in the way the body **functions**.
- **blood groups** (A, B, AB, O) and the rhesus factor
- **ability to roll the tongue**
- **ability to taste phenylthiocarbamide (PTC)** — tasters and non-tasters
- behaviour and intelligence
- sickle-cell trait; colour vision
- resistance to disease

## Continuous variation
A character shows a **complete range** from one extreme to the other, with no sharp groups; there are many intermediates.
- examples: **height, weight, skin colour**, intelligence, length of leaves
- controlled by **many genes** (polygenes) and strongly **influenced by the environment**
- a frequency graph gives a **bell-shaped (normal distribution) curve** — most individuals are near the average

## Discontinuous variation
A character falls into **distinct groups** with **no intermediates**.
- examples: **blood groups**, **tongue rolling**, PTC tasting, **fingerprints**, sex, albinism, free or attached ear lobes
- controlled by **one or a few genes**; little affected by the environment
- shown as a **bar chart**

| Continuous | Discontinuous |
|---|---|
| gradual range | distinct categories |
| intermediates present | no intermediates |
| many genes | one or few genes |
| affected by environment | hardly affected |
| normal distribution curve | bar chart |

## Causes of variation
### Genetic (inherited)
- **crossing over** and **independent assortment** in meiosis
- **random fusion of gametes** at fertilisation
- **mutation**
### Environmental (acquired — not inherited)
- food supply, light, temperature, water, soil, disease, exercise, education
- a well-fed child grows taller than its underfed twin; plants in shade grow tall and pale
Phenotype = genotype + environment.

## Applications of variation
### Crime detection
**Fingerprints** — arch, loop, whorl and compound patterns — are unique to each person and do not change through life. Blood groups and **DNA profiling** also help to identify suspects.
### Determining paternity
Blood groups can show that a man **cannot** be the father of a child; DNA tests can confirm who is.
### Blood transfusion
Blood must be matched to avoid clumping.
### Classification of human groups
by features such as skin colour, hair type and facial form — all members of one species.
### Agriculture
Variation is the raw material for **selective breeding** of better crops and livestock.
### Evolution
Variation allows natural selection to act: individuals with favourable variations survive and reproduce.`,
          examples: `**Example 1.** Classify height and blood group as continuous or discontinuous variation. *Answer:* Height is **continuous**; blood group is **discontinuous**.

**Example 2.** Give two physiological variations. *Answer:* **Tongue rolling** and **ability to taste PTC**.

**Example 3.** Why are fingerprints useful in crime detection? *Answer:* They are **unique to each person** and **never change**.`,
        },
        questions: [
          ["E", "Differences among individuals of the same species are called", "variation", "evolution", "adaptation", "mutation only", "No two individuals are exactly alike."],
          ["E", "An example of morphological variation in humans is", "height", "blood group", "ability to taste PTC", "tongue rolling", "It concerns physical appearance."],
          ["E", "The variation most useful in identifying criminals is", "fingerprints", "height", "weight", "skin colour", "Each person's pattern is unique."],
          ["M", "A character that shows a complete range of intermediates between two extremes exhibits", "continuous variation", "discontinuous variation", "mutation", "dominance", "Human height and weight are examples."],
          ["M", "Which of the following is an example of discontinuous variation?", "blood group", "body weight", "skin colour", "length of the foot", "Individuals fall into distinct groups."],
          ["M", "The ability to roll the tongue is an example of", "physiological variation", "morphological variation", "continuous variation", "acquired variation", "It concerns how the body functions."],
          ["M", "A cause of variation that is NOT inherited is", "differences in nutrition", "mutation", "crossing over", "random fertilisation", "It is an environmental effect."],
          ["H", "A frequency graph of the heights of a large number of adults gives", "a bell-shaped curve", "a bar chart with two bars", "a straight line", "an S-shaped curve", "Most people are near the average height."],
          ["H", "Characters showing continuous variation are usually controlled by", "many genes and the environment", "a single gene", "the sex chromosomes only", "mutation alone", "This produces a smooth range of phenotypes."],
          ["H", "Blood group evidence in a paternity dispute can show that a man", "cannot be the father of the child", "is certainly the father", "is related to the mother", "has a rare disease", "It can exclude but not prove fatherhood."],
        ],
      },
    ],
  },
  {
    classCode: "SS3",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Applications of genetics",
        subtopics: ["Genetics in agriculture", "Genetics in medicine", "Sickle-cell anaemia and genetic counselling", "Biotechnology and genetic engineering"],
        objectives: ["Explain how genetics is applied in agriculture", "Explain how genetics is applied in medicine", "Describe the inheritance of sickle-cell anaemia and the value of genetic counselling", "Outline biotechnology and genetic engineering"],
        lesson: {
          title: "Genetics at Work",
          summary: "Describe the uses of genetics in agriculture, medicine and biotechnology.",
          minutes: 40,
          notes: `## In agriculture
The aim is to improve crops and livestock: higher yield, better quality, early maturity, and resistance to disease, pests and drought.
- **selective breeding (artificial selection)** — only individuals with desired qualities are allowed to breed, generation after generation
- **cross-breeding (hybridisation)** — crossing two different varieties or breeds to combine their good qualities. The hybrids often show **hybrid vigour (heterosis)** — they outperform both parents. Example: crossing the hardy, disease-resistant N'Dama with a high-milk exotic breed
- **inbreeding** — mating close relatives to keep a desired character pure; it may expose harmful recessive genes and reduce vigour
- **outbreeding** — mating unrelated individuals; increases variation and vigour
- **artificial insemination** — semen from a superior male is used to fertilise many females
- **introduction** of improved varieties from elsewhere
Results: disease-resistant cassava, early-maturing maize, high-yielding rice, broilers and layers.

## In medicine
- **blood grouping** for safe transfusion and for settling paternity disputes
- knowledge of the **rhesus factor** protects babies
- **genetic counselling**
- diagnosis of hereditary diseases; **DNA tests** in crime detection
- manufacture of **insulin**, growth hormone and vaccines by genetically modified bacteria
- determining the sex of an unborn child and detecting defects

## Hereditary conditions
sickle-cell anaemia, albinism, haemophilia, colour blindness, Down's syndrome.

## Sickle-cell anaemia
A hereditary disease in which the red blood cells contain abnormal haemoglobin (**haemoglobin S**) and become **sickle-shaped** when oxygen is low. The cells carry less oxygen, break easily (anaemia) and block small blood vessels (painful crises).
### Genotypes
| Genotype | Condition |
|---|---|
| **AA** | normal |
| **AS** | **carrier** (sickle-cell trait) — healthy; has some protection against malaria |
| **SS** | **sickle-cell anaemia** (sickler) |
### Crosses
AS × AS:
| | A | S |
|---|---|---|
| **A** | AA | AS |
| **S** | AS | SS |
**25% AA, 50% AS, 25% SS** — at each pregnancy there is a one-in-four chance of a child with the disease.
- AA × AS → 50% AA, 50% AS — no sickler
- AS × SS → 50% AS, 50% SS
- AA × SS → all AS

## Genetic counselling
Advice given to intending couples about their genotypes and the risk of having children with hereditary disorders. People should **know their genotype before marriage**; two carriers (AS and AS) are advised of the risk.

## Albinism
Lack of the pigment melanin, caused by a **recessive** gene. Two normal carrier parents (Aa × Aa) have a ¼ chance of an albino child.

## Biotechnology
The use of living organisms or their products to make useful things.
- **genetic engineering (recombinant DNA technology)** — a gene from one organism is inserted into the DNA of another. The human insulin gene placed in bacteria makes them produce insulin
- **genetically modified (GM) crops** — pest-resistant maize and cotton; vitamin-enriched rice
- **cloning** — producing genetically identical individuals (Dolly the sheep; tissue culture of plants)
- **DNA fingerprinting**; gene therapy
### Concerns
safety of GM foods, effects on the environment, cost of seeds, and ethical questions about cloning.`,
          examples: `**Example 1.** Two carriers of the sickle-cell trait marry. What is the chance that a child of theirs is a sickler? *Solution:* AS × AS → AA, AS, AS, SS — **25%**.

**Example 2.** What is hybrid vigour? *Answer:* The **superior performance of hybrids** over both parents.

**Example 3.** Give one use of genetic engineering in medicine. *Answer:* **Producing human insulin** from genetically modified bacteria.`,
        },
        questions: [
          ["E", "The genotype of a person with sickle-cell anaemia is", "SS", "AS", "AA", "AB", "Both alleles are for the abnormal haemoglobin."],
          ["E", "Allowing only organisms with desired qualities to breed is called", "selective breeding", "mutation", "natural selection", "cloning", "Farmers use it to improve crops and livestock."],
          ["E", "Advice given to intending couples about the risk of hereditary disorders is", "genetic counselling", "family planning", "immunisation", "quarantine", "It is based on their genotypes."],
          ["M", "When two people of genotype AS marry, the probability that a child of theirs has genotype SS is", "25%", "50%", "75%", "0%", "One of the four possible combinations is SS."],
          ["M", "The superior performance of offspring from a cross between two different breeds is known as", "hybrid vigour", "inbreeding depression", "dominance", "linkage", "It is also called heterosis."],
          ["M", "The introduction of semen from a superior male into females by means of instruments is", "artificial insemination", "cross-pollination", "cloning", "hybridisation only", "One male can sire very many offspring."],
          ["M", "Albinism in humans is caused by", "a recessive gene", "a dominant gene", "lack of vitamin A", "a virus", "The skin lacks melanin."],
          ["H", "A man of genotype AA marries a woman of genotype SS. The genotypes of their children will be", "all AS", "all AA", "half AA and half SS", "all SS", "Each child receives A from the father and S from the mother."],
          ["H", "Bacteria are made to produce human insulin by", "inserting the human insulin gene into their DNA", "feeding them on glucose", "exposing them to X-rays", "growing them in human blood", "This is genetic engineering."],
          ["H", "A disadvantage of continued inbreeding is that it", "may bring harmful recessive genes together", "always increases yield", "introduces new genes", "prevents all disease", "Vigour is often reduced."],
        ],
      },
      {
        week: 2,
        title: "Evolution",
        subtopics: ["Meaning of organic evolution", "Lamarck's theory", "Darwin's theory of natural selection", "Evidence of evolution and modern views"],
        objectives: ["Explain the meaning of organic evolution", "State Lamarck's theory and its weaknesses", "Explain Darwin's theory of natural selection", "Describe the evidence of evolution and the modern theory"],
        lesson: {
          title: "Change Over Time",
          summary: "Explain the theories and evidence of organic evolution.",
          minutes: 40,
          notes: `## Organic evolution
The **gradual change in living organisms over very long periods**, by which present-day forms have developed from earlier, simpler forms.

## Lamarck's theory (1809)
Jean-Baptiste Lamarck proposed:
1. **use and disuse** — organs used a great deal become larger and stronger; unused organs weaken and disappear
2. **inheritance of acquired characters** — changes acquired during an organism's life are passed to its offspring
*His example:* the ancestors of the giraffe stretched their necks to reach high leaves; the necks lengthened and the longer neck was inherited.
### Weakness
Characters acquired during life are **not inherited**, because they do not alter the genes in the gametes. The children of a blacksmith are not born with strong arms; mice whose tails are cut off still produce tailed young.

## Darwin's theory (1859)
**Charles Darwin**, after his voyage on HMS Beagle (including the Galápagos Islands), published *On the Origin of Species by Means of Natural Selection*. Alfred Russel Wallace reached similar conclusions.
### Main points
1. **over-production** — organisms produce far more offspring than can survive
2. **struggle for existence** — offspring compete for food, space and mates
3. **variation** — individuals differ, and many differences are inherited
4. **survival of the fittest (natural selection)** — those with favourable variations are better adapted, survive and reproduce
5. favourable characters are **passed on** and accumulate; over many generations a **new species** may arise
*The giraffe:* some giraffes happened to have longer necks; they reached more food, survived and left more offspring.
### Weakness
Darwin could not explain how variations arise or are inherited.

## Modern theory (neo-Darwinism)
Combines natural selection with genetics: **variation arises from mutation** and from the reshuffling of genes in meiosis and fertilisation; natural selection acts on this variation; **isolation** of populations (by mountains, seas, behaviour) allows them to diverge into new species.
### Natural selection in action
- insects becoming **resistant to insecticides**
- bacteria becoming **resistant to antibiotics**
- the peppered moth in industrial England: dark forms became common on soot-covered trees

## Evidence of evolution
- **fossils (palaeontology)** — remains or impressions of ancient organisms in rocks; older rocks hold simpler forms. The fossil record of the horse shows gradual change; *Archaeopteryx* links reptiles and birds
- **comparative anatomy**
  - **homologous structures** — same basic plan and origin, different functions: the **pentadactyl limb** in man's arm, a bat's wing, a whale's flipper — evidence of common ancestry (divergent evolution)
  - **analogous structures** — same function, different origin: wings of insects and birds
  - **vestigial organs** — reduced, apparently functionless structures: the human appendix and tail bone (coccyx); hind-limb bones in whales
- **comparative embryology** — the early embryos of fish, birds and mammals are very alike, with gill slits and tails
- **geographical distribution** — isolated regions have their own species: the marsupials of Australia; Darwin's finches
- **biochemistry and genetics** — all organisms use DNA, the same genetic code and similar proteins; closely related species have very similar DNA
- **comparative physiology** — similar enzymes and hormones

## Trends in evolution
from simple to complex; from water to land; from single-celled to many-celled organisms. The succession fish → amphibians → reptiles → birds and mammals shows increasing adaptation to land.

## Artificial selection
Man chooses which animals or plants breed — much faster than natural selection.`,
          examples: `**Example 1.** State one weakness of Lamarck's theory. *Answer:* **Acquired characters are not inherited**.

**Example 2.** What is meant by "survival of the fittest"? *Answer:* Individuals **best adapted** to the environment survive and reproduce.

**Example 3.** Give an example of a vestigial organ in man. *Answer:* The **appendix**.`,
        },
        questions: [
          ["E", "The theory of natural selection was put forward by", "Charles Darwin", "Jean-Baptiste Lamarck", "Gregor Mendel", "Carolus Linnaeus", "He published it in 1859."],
          ["E", "The remains or impressions of ancient organisms preserved in rocks are", "fossils", "vestiges", "mutants", "hybrids", "They provide evidence of evolution."],
          ["E", "The gradual change in living things over long periods of time is", "organic evolution", "metamorphosis", "succession", "germination", "Present forms developed from earlier ones."],
          ["M", "The theory of use and disuse was proposed by", "Lamarck", "Darwin", "Wallace", "Mendel", "He also believed acquired characters are inherited."],
          ["M", "Lamarck's theory is not accepted mainly because", "acquired characters are not inherited", "organisms do not vary", "there are no fossils", "giraffes have short necks", "Such changes do not alter the genes in gametes."],
          ["M", "The human appendix is an example of", "a vestigial organ", "an analogous structure", "a fossil", "a mutation", "It is reduced and has no clear function."],
          ["M", "According to the modern theory of evolution, new inheritable variations arise mainly by", "mutation", "use and disuse", "exercise", "feeding", "Natural selection then acts on them."],
          ["H", "The arm of man, the wing of a bat and the flipper of a whale are", "homologous structures", "analogous structures", "vestigial structures", "acquired characters", "They share the pentadactyl plan but have different functions."],
          ["H", "The spread of insects that are no longer killed by an insecticide is an example of", "natural selection", "inheritance of acquired characters", "use and disuse", "artificial insemination", "Resistant individuals survive and reproduce."],
          ["H", "The wings of an insect and of a bird are described as analogous because they", "perform the same function but have different origins", "have the same origin but different functions", "are both vestigial", "are made of bone", "They do not indicate close relationship."],
        ],
      },
      {
        week: 3,
        title: "Adaptation for survival: behaviour and social insects",
        subtopics: ["Structural adaptations and adaptive coloration", "Behavioural adaptations", "Social insects: termites", "Social insects: honeybees"],
        objectives: ["Describe structural adaptations and types of adaptive coloration", "Describe behavioural adaptations of animals", "Describe the castes of termites and their functions", "Describe the castes of honeybees and division of labour in the hive"],
        lesson: {
          title: "Surviving Together",
          summary: "Describe adaptive coloration, behaviour and the organisation of social insects.",
          minutes: 40,
          notes: `## Adaptation for survival
Organisms survive the **struggle for existence** through adaptations of structure, colour and behaviour.

## Structural adaptations
- for **food**: mouthparts, beaks, teeth, claws; sticky tongue of the toad and chameleon
- for **defence**: shells, spines, horns, stings, poison
- for **water conservation**: scales, waxy cuticle
- for **attracting mates**: bright plumage of male birds, the comb of the cock
- for **temperature regulation**: fur, feathers, fat, large ears in desert animals

## Adaptive coloration
- **concealing (cryptic) coloration** — blending with the background: green snake in grass, brown moth on bark, chameleon
- **countershading** — a dark back and pale belly make a fish hard to see from above and below
- **disruptive coloration** — stripes or patches break up the outline: zebra, leopard, tiger
- **warning (aposematic) coloration** — bright colours advertising poison or a sting
- **mimicry** — resembling another object or species: the stick insect and leaf insect; harmless flies that look like wasps
- colours for **courtship and recognition**
- in plants: bright flowers and fruits attract pollinators and dispersers

## Behavioural adaptations
- **hibernation** and **aestivation** — dormancy in cold or dry seasons
- **migration** — seasonal movement to better feeding or breeding grounds: birds, wildebeest, locusts, some fish
- **nocturnal** habits; burrowing
- **feigning death**; rolling into a ball (millipede, pangolin); withdrawal into a shell
- **swarming**, schooling of fish and herding — safety in numbers
- **territorial** and courtship behaviour; parental care
- **social life**

## Social animals
Animals of the same species that live together in an organised group with **division of labour**. In **social insects** — termites, honeybees, ants, some wasps — the members belong to **castes**, differ in structure, and cannot survive alone.

## Termites
Live in **termitaria** (mounds) or in wood; feed on wood, with protozoa in their gut digesting the cellulose; some grow fungus gardens.
| Caste | Features | Function |
|---|---|---|
| **queen** | very large, swollen abdomen | **lays eggs** |
| **king** | smaller than the queen; stays with her | fertilises the queen |
| **workers** | small, wingless, blind, sterile; most numerous | build and repair the nest, find food, feed the others, tend eggs and young |
| **soldiers** | large head with powerful mandibles (or a snout that squirts fluid); sterile | **defend** the colony |
| **reproductives (alates)** | winged males and females | fly out in swarms at the start of the rains (**nuptial flight**), shed their wings, pair and found new colonies |
Development is by incomplete metamorphosis. Termites damage wood and crops but also break down dead plant matter and aerate the soil.

## Honeybees
Live in hives of wax **combs** with six-sided cells.
| Caste | Features | Function |
|---|---|---|
| **queen** | one per hive; long abdomen; fertile female | lays eggs; her pheromones hold the colony together |
| **drones** | males, from **unfertilised eggs**; large eyes; no sting | mate with a new queen; then driven out |
| **workers** | sterile females; smallest; have a sting, wax glands and pollen baskets | all the work of the hive |
### Duties of a worker by age
cleaning cells → feeding larvae (nurse bees) → making wax and building comb → guarding the entrance → **foraging** for nectar and pollen.
Larvae fed throughout on **royal jelly** become queens. Workers tell others where food is by the **waggle dance**. When a hive is crowded, the old queen leaves with a **swarm** to start a new colony.
Development is by complete metamorphosis.
### Importance of bees
honey, beeswax, **pollination** of crops.

## Advantages of social life
division of labour and efficiency; defence; care of the young; a constant food supply.`,
          examples: `**Example 1.** Which caste defends a termite colony? *Answer:* The **soldiers**.

**Example 2.** What are drones? *Answer:* **Male bees**, developed from unfertilised eggs, whose function is to mate with the queen.

**Example 3.** Give an example of disruptive coloration. *Answer:* The **stripes of the zebra**.`,
        },
        questions: [
          ["E", "The member of a termite colony that lays eggs is the", "queen", "soldier", "worker", "king", "She has a greatly swollen abdomen."],
          ["E", "Male honeybees are called", "drones", "workers", "soldiers", "nymphs", "Their function is to mate with a queen."],
          ["E", "The seasonal movement of animals from one region to another is", "migration", "hibernation", "mimicry", "swarming", "Many birds do it to feed or breed."],
          ["M", "The caste of termites with large heads and powerful mandibles is the", "soldiers", "workers", "reproductives", "kings", "They defend the colony."],
          ["M", "The stripes of the zebra are an example of", "disruptive coloration", "warning coloration", "countershading", "mimicry of a wasp", "They break up the outline of the animal."],
          ["M", "The collection of nectar and pollen in a beehive is carried out by the", "workers", "drones", "queen", "larvae", "They are sterile females."],
          ["M", "Winged termites that fly out in swarms at the start of the rainy season are the", "reproductives", "soldiers", "workers", "nymphs of soldiers", "They found new colonies."],
          ["H", "In honeybees, drones develop from", "unfertilised eggs", "fertilised eggs fed on royal jelly", "worker larvae", "eggs laid by workers only", "They therefore have a single set of chromosomes."],
          ["H", "A bee larva develops into a queen rather than a worker if it is", "fed on royal jelly throughout its larval life", "hatched from an unfertilised egg", "kept in a small cell", "fed on pollen only", "Diet decides the caste of female larvae."],
          ["H", "Termites are able to feed on wood because", "protozoa in their gut digest the cellulose", "they secrete hydrochloric acid", "wood contains no cellulose", "their mandibles dissolve wood", "This is a symbiotic relationship."],
        ],
      },
      {
        week: 4,
        title: "Blood groups, immunity and transfusion",
        subtopics: ["The ABO blood groups", "The rhesus factor", "Blood transfusion", "Immunity and vaccination"],
        objectives: ["Describe the ABO blood groups and their inheritance", "Explain the rhesus factor and its importance in pregnancy", "State the rules of safe blood transfusion", "Explain the types of immunity and how vaccination works"],
        lesson: {
          title: "Blood Groups and the Body's Defences",
          summary: "Explain blood groups, transfusion and immunity.",
          minutes: 40,
          notes: `## The ABO blood groups
Discovered by **Karl Landsteiner**. Red blood cells may carry **antigens** A and B on their surface; the plasma may contain **antibodies** a (anti-A) and b (anti-B).
| Blood group | Antigen on red cells | Antibody in plasma | Can donate to | Can receive from |
|---|---|---|---|---|
| **A** | A | anti-B | A, AB | A, O |
| **B** | B | anti-A | B, AB | B, O |
| **AB** | A and B | none | AB only | A, B, AB, O — **universal recipient** |
| **O** | none | anti-A and anti-B | A, B, AB, O — **universal donor** | O only |
If the wrong blood is given, the recipient's antibodies make the donor's red cells **clump (agglutinate)**, blocking blood vessels — this can be fatal.

### Inheritance
Three alleles: **A** and **B** are **codominant**; **O** is recessive to both.
| Group | Genotypes |
|---|---|
| A | AA or AO |
| B | BB or BO |
| AB | AB |
| O | OO |
- AO × BO → AB, AO, BO, OO — all four groups are possible
- AB × OO → AO, BO — only groups A and B
- OO × OO → OO only
- A group O child cannot have a group AB parent

## The rhesus factor
An antigen first found in the rhesus monkey. People who have it are **Rh-positive (Rh⁺)** — about 85%; those without it are **Rh-negative (Rh⁻)**. Rh⁺ is dominant.
- an Rh⁻ person given Rh⁺ blood makes anti-Rh antibodies; a second such transfusion causes clumping
### In pregnancy
If an **Rh⁻ mother** carries an **Rh⁺ baby** (the father being Rh⁺), some of the baby's cells may enter her blood at birth and she makes anti-Rh antibodies. The first baby is usually unharmed, but in a **later Rh⁺ pregnancy** the antibodies cross the placenta and destroy the baby's red cells — **haemolytic disease of the newborn**. It is prevented by giving the mother an anti-D injection soon after each such birth.

## Blood transfusion
The transfer of blood from a **donor** to a **recipient** — after accidents, surgery, childbirth or in severe anaemia.
### Rules
- donor and recipient must be **compatible** in ABO and rhesus groups; blood is **cross-matched**
- blood is **screened** for HIV, hepatitis and other infections
- donors should be healthy adults
- blood is stored in a **blood bank** with an anticoagulant (sodium citrate), under refrigeration

## Immunity
The ability of the body to **resist infection**.
### Lines of defence
1. **barriers** — skin; mucus and cilia; tears and saliva (containing an enzyme); stomach acid; clotting
2. **phagocytes** — white blood cells that **engulf and digest** germs
3. **lymphocytes** — produce **antibodies** specific to each **antigen**; antibodies clump germs, neutralise their toxins (antitoxins) or mark them for destruction. **Memory cells** remain, giving a faster response next time

### Types
| | Active immunity | Passive immunity |
|---|---|---|
| how acquired | the body **makes its own** antibodies | **ready-made** antibodies are received |
| natural | after recovering from an infection | from mother to baby across the placenta and in breast milk (colostrum) |
| artificial | **vaccination** | injection of antiserum (e.g. anti-tetanus, anti-snake venom) |
| duration | long-lasting | short-lived |
**Innate (natural) immunity** is inborn.

### Vaccination (immunisation)
A **vaccine** contains dead or weakened pathogens, or their toxins made harmless. It stimulates the production of antibodies and memory cells without causing the disease. Childhood vaccines include BCG (tuberculosis), polio, DPT (diphtheria, whooping cough, tetanus), measles, hepatitis B and yellow fever. Smallpox has been wiped out by vaccination.

### When immunity fails
**HIV** destroys the white blood cells that organise the immune response, leading to **AIDS**; the body cannot resist other infections. **Allergies** are over-reactions; transplanted organs may be **rejected**.`,
          examples: `**Example 1.** Which blood group is the universal donor, and why? *Answer:* **Group O** — its red cells carry **no A or B antigens**.

**Example 2.** What blood groups can the children of AB × O parents have? *Answer:* **A or B only**.

**Example 3.** Distinguish active from passive immunity. *Answer:* In **active** immunity the body makes its own antibodies; in **passive** immunity it receives ready-made ones.`,
        },
        questions: [
          ["E", "The blood group known as the universal donor is", "O", "A", "B", "AB", "Its red cells carry neither antigen A nor B."],
          ["E", "The blood group known as the universal recipient is", "AB", "O", "A", "B", "Its plasma has no anti-A or anti-B antibodies."],
          ["E", "Substances produced by white blood cells to fight specific germs are", "antibodies", "antigens", "enzymes", "hormones", "Lymphocytes make them."],
          ["M", "A person of blood group A has in the plasma", "anti-B antibodies", "anti-A antibodies", "both antibodies", "no antibodies", "They would clump group B cells."],
          ["M", "The clumping together of red blood cells when incompatible blood is transfused is", "agglutination", "clotting", "haemolysis", "phagocytosis", "Antibodies react with antigens on the donor cells."],
          ["M", "Immunity acquired through vaccination is described as", "artificial active immunity", "natural passive immunity", "artificial passive immunity", "innate immunity", "The body makes its own antibodies."],
          ["M", "White blood cells that engulf and digest germs are called", "phagocytes", "lymphocytes", "platelets", "erythrocytes", "The process is phagocytosis."],
          ["H", "A couple of blood groups AB and O can have children of groups", "A and B only", "AB and O only", "A, B, AB and O", "O only", "Each child receives A or B from one parent and O from the other."],
          ["H", "Haemolytic disease of the newborn may occur when", "an Rh-negative mother carries a second Rh-positive baby", "an Rh-positive mother carries an Rh-negative baby", "both parents are Rh-negative", "the mother is of group O", "Antibodies made after the first such birth attack the baby's red cells."],
          ["H", "A baby is protected for its first few months by antibodies received from its mother. This is", "natural passive immunity", "natural active immunity", "artificial active immunity", "artificial passive immunity", "The antibodies cross the placenta and are in breast milk."],
        ],
      },
      {
        week: 5,
        title: "Biology and agriculture: soil, pests and food production",
        subtopics: ["Soil types and soil fertility", "Pests and diseases of crops and livestock", "Effects of agricultural practices on the environment", "Food storage and preservation"],
        objectives: ["Describe soil types and how soil fertility is maintained", "Classify pests and describe their control", "Explain the effects of agricultural practices on the ecosystem", "Describe methods of preserving and storing food"],
        lesson: {
          title: "Biology on the Farm",
          summary: "Relate biology to soil, pests, farming practices and food preservation.",
          minutes: 40,
          notes: `## Soil
### Components
mineral particles, **humus**, water, air, living organisms.
### Types
| | Sandy | Clay | Loam |
|---|---|---|---|
| particles | large | very small | mixture |
| water retention | poor | very high; easily waterlogged | good |
| drainage and air | very good | poor | good |
| capillarity | low | high | moderate |
| fertility | low | holds nutrients but hard to work | **best for crops** |

### Loss of fertility
erosion; **leaching**; continuous cropping; bush burning; overgrazing.
### Maintaining fertility
- **crop rotation** — different crops in sequence, including a legume; it uses nutrients evenly and breaks pest cycles
- **organic manure** (farmyard manure, compost, green manure) and **fertilisers** (N, P, K)
- **bush fallowing (shifting cultivation)** — land is rested
- **cover crops** and **mulching**
- liming acidic soils

## Pests
Organisms that damage crops or livestock.
### Classification
- by type: insects, rodents, birds, nematodes, mites, monkeys
- by feeding habit of insect pests: **biting and chewing** (grasshopper, beetle, caterpillar); **piercing and sucking** (aphid, mealy bug, cotton stainer); **boring** (stem borer, weevil)
- by part attacked: stem borers, root feeders, leaf feeders, fruit and seed feeders
- **field pests** and **storage pests** (weevils, rats)
### Effects
reduced yield and quality; spread of disease (aphids and whiteflies carry viruses); cost of control.
### Control
- **physical**: hand-picking, traps, scarecrows, fencing
- **cultural**: crop rotation, early planting, burning residues, resistant varieties, clean storage
- **chemical**: **pesticides** — insecticides, rodenticides, nematicides
- **biological**: using **natural enemies** — predators or parasites of the pest; cats against rats

## Diseases
| Disease | Cause | Host |
|---|---|---|
| **cassava mosaic** | virus (spread by whitefly) | cassava |
| **maize rust**, **maize smut** | fungi | maize |
| rice blast; black pod of cocoa | fungi | rice; cocoa |
| root knot | nematodes | tomato, yam |
| **Newcastle disease** | virus | poultry |
| **foot-and-mouth disease**, rinderpest | viruses | cattle |
| **trypanosomiasis (nagana)** | protozoan, by tsetse fly | cattle |
| coccidiosis | protozoan | poultry |
Control: resistant varieties, clean planting material, crop rotation, fungicides, vaccination, quarantine and hygiene.

## Agricultural practices and the environment
| Practice | Effect |
|---|---|
| **bush burning** | destroys humus and soil organisms; exposes soil to erosion; adds a little potash |
| **clearing and tillage** | loosens soil but exposes it to erosion |
| **excess fertiliser** | makes soil acidic; run-off causes algal bloom in water |
| **pesticides and herbicides** | kill useful organisms (bees, earthworms); residues enter food chains; pests become resistant |
| **monocropping** | exhausts particular nutrients; encourages pests |
| **overgrazing** | removes cover; causes erosion and desertification |
| **irrigation** | may cause salt build-up and water-borne disease |

## Food shortage and population
Causes: population growth, drought, pests, poor storage, poor roads, conflict. Solutions: improved varieties, irrigation, mechanisation, credit, good storage, family planning.

## Food preservation
Food spoils because of **microorganisms** and the food's own enzymes. Preservation removes the conditions they need.
| Method | Principle | Examples |
|---|---|---|
| **drying** | removes water | grains, fish, pepper, vegetables |
| **salting** and **sugaring** | draws out water by osmosis | fish, meat; jam |
| **smoking** | dries, and adds chemicals that kill microbes | fish, meat |
| **refrigeration and freezing** | low temperature slows or stops growth | meat, fish, vegetables |
| **canning and bottling** | heat kills microbes; sealing keeps out air | tomato paste, sardines |
| **pasteurisation** | moderate heating, then rapid cooling | milk, fruit juice |
| chemical preservatives; pickling in vinegar | make conditions unsuitable | soft drinks; vegetables |
| **irradiation** | radiation kills microbes | spices, yam |
### Storage
grains in silos, rhombus and cribs; tubers in barns; airtight containers; fumigation against weevils.`,
          examples: `**Example 1.** Which soil type is best for crop growth and why? *Answer:* **Loam** — it holds water and nutrients yet is well drained and aerated.

**Example 2.** What is biological control? *Answer:* Using a pest's **natural enemies** to reduce its numbers.

**Example 3.** How does salting preserve fish? *Answer:* Salt **draws water out** of the fish and of microorganisms by osmosis.`,
        },
        questions: [
          ["E", "The soil type that is best for the growth of most crops is", "loam", "sand", "clay", "gravel", "It is a balanced mixture with humus."],
          ["E", "Chemicals used to kill insect pests are called", "insecticides", "herbicides", "fungicides", "fertilisers", "They are a type of pesticide."],
          ["E", "The preservation of milk by moderate heating followed by rapid cooling is", "pasteurisation", "canning", "smoking", "irradiation", "It kills harmful bacteria without spoiling the taste."],
          ["M", "The washing of soluble mineral salts down beyond the reach of roots is", "leaching", "erosion", "weathering", "mulching", "Heavy rain causes it, especially in sandy soil."],
          ["M", "The use of the natural enemies of a pest to reduce its numbers is", "biological control", "chemical control", "cultural control", "physical control", "It avoids the use of pesticides."],
          ["M", "Cassava mosaic disease is caused by a", "virus", "fungus", "bacterium", "nematode", "Whiteflies spread it."],
          ["M", "Planting different crops in a definite sequence on the same land is", "crop rotation", "monocropping", "bush fallowing", "mixed farming", "It maintains soil fertility and breaks pest cycles."],
          ["H", "Salting preserves fish because it", "removes water from the food and microorganisms by osmosis", "raises the temperature", "adds vitamins", "supplies oxygen", "Microbes cannot grow without water."],
          ["H", "A harmful effect of the excessive use of pesticides is that", "useful organisms are killed and residues enter food chains", "soil erosion stops", "the pests become larger", "rainfall increases", "Pests may also become resistant."],
          ["H", "Compared with sandy soil, clay soil has", "higher water retention and poorer drainage", "larger particles", "better aeration", "lower capillarity", "Its tiny particles hold water tightly."],
        ],
      },
    ],
  },
  {
    classCode: "SS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Practical biology: skills and techniques",
        subtopics: ["Using the microscope and preparing slides", "Biological drawing and magnification", "Planning and reporting experiments", "Identifying and comparing specimens"],
        objectives: ["Use a microscope and prepare temporary slides", "Make accurate biological drawings and calculate magnification", "Plan an experiment with a control and report it", "Identify, classify and compare specimens"],
        lesson: {
          title: "Working Like a Biologist",
          summary: "Develop the practical skills needed for the biology practical examination.",
          minutes: 40,
          notes: `## The light microscope
### Parts
eyepiece; body tube; revolving nosepiece with **objective lenses** (low, medium and high power); stage with clips; **coarse** and **fine adjustment** knobs; diaphragm and condenser; mirror or lamp.
### Using it
1. place the slide on the stage and clip it
2. start with the **low-power objective**
3. looking from the side, bring the objective close to the slide; then, looking through the eyepiece, focus **upwards** with the coarse adjustment
4. sharpen with the fine adjustment; adjust the light
5. turn to high power only after focusing on low power; then use the fine adjustment only
Total magnification = eyepiece × objective.

### Preparing a temporary slide
Place a thin specimen (onion epidermis, cheek cells, Spirogyra) in a drop of water or stain on a clean slide; lower a **cover slip** at an angle with a needle to **avoid air bubbles**; blot off excess liquid. **Iodine** stains nuclei and starch; methylene blue stains animal cells.

## Biological drawing
- use a **sharp pencil**; draw **large** (at least half the page)
- lines must be **clean, firm and continuous** — no sketching, **no shading** or colouring
- draw what you **see**, in correct proportion
- give a **title** above or below, stating the view (dorsal, ventral, lateral, transverse or longitudinal section)
- **label lines** are ruled, horizontal where possible, **never crossing**, without arrowheads, touching the part named
- state the **magnification**

### Magnification
**magnification = size of drawing ÷ actual size of specimen**
*Example:* a leaf 6 cm long drawn 18 cm long: magnification = **×3**. A drawing smaller than the specimen has a magnification below 1 (e.g. ×½).

## Experiments
### Planning
- state the **aim**
- change **one factor** (the variable) at a time; keep all others the same
- set up a **control** — identical except for the factor being tested
- repeat for reliability
### Reporting
**Aim → Apparatus and materials → Method (procedure) → Observation (results) → Conclusion → Precautions**. Present results in **tables** and **graphs** (title, labelled axes with units, suitable scale).

### Standard tests
| Substance | Test | Result |
|---|---|---|
| starch | iodine solution | blue-black |
| reducing sugar | Benedict's solution, heat | brick-red precipitate |
| protein | Biuret test | violet |
| fats and oils | Sudan III; or grease spot | red; translucent spot |
| carbon(IV) oxide | limewater | milky |
| water | cobalt(II) chloride paper | blue to pink |

### Common experiments
osmosis with yam or potato; conditions for photosynthesis; conditions for germination; respiration of germinating seeds; transpiration with a potometer; enzyme action of saliva; soil experiments (water retention, capillarity, air and humus content).

## Specimens
You may be asked to **identify**, **classify**, state the **habitat**, **draw and label**, state **observable features** and their **adaptive value**, and **compare** specimens.
### Useful features
- insects: three body divisions, three pairs of legs, wings, antennae
- arachnids: two body divisions, four pairs of legs
- fish: scales, fins, gills, lateral line, streamlined body
- flowers: number of parts, colour, position of ovary — insect- or wind-pollinated
- fruits: type, placentation, agent of dispersal
- bones: identify vertebrae by the neural spine, transverse processes and centrum
- leaves: venation shows monocot or dicot

### Comparing
Use a **table**, matching the **same feature** point by point for each specimen.

### Dichotomous key
A key made of **pairs of contrasting statements**; each choice leads to the next pair until the organism is named.

## Collecting and preserving
sweep nets, pitfall traps, pooters, quadrats; killing jars; preservation in **formalin** or alcohol; pressing and drying plants.

## Safety
handle chemicals and sharp instruments with care; heat ethanol only in a water bath; wash hands after handling specimens.`,
          examples: `**Example 1.** A grasshopper 5 cm long is drawn 15 cm long. Calculate the magnification. *Solution:* 15 ÷ 5 = **×3**.

**Example 2.** State two rules for labelling a biological drawing. *Answer:* Label lines must be **ruled** and must **not cross**.

**Example 3.** What is the purpose of a control in an experiment? *Answer:* To provide a **comparison**, showing that the result is due to the factor tested.`,
        },
        questions: [
          ["E", "When using a microscope, the specimen is first focused with the", "low-power objective", "high-power objective", "fine adjustment only", "diaphragm", "It gives a wider field of view."],
          ["E", "A thin glass placed over a specimen on a microscope slide is a", "cover slip", "stage clip", "condenser", "nosepiece", "It is lowered gently to avoid air bubbles."],
          ["E", "Biological drawings should be made with", "a sharp pencil", "a ballpoint pen", "coloured crayons", "a felt marker", "Lines should be clean and firm."],
          ["M", "A leaf 6 cm long is drawn 18 cm long. The magnification of the drawing is", "×3", "×12", "×24", "×⅓", "Divide the drawing size by the actual size."],
          ["M", "In a good biological drawing, label lines should", "be ruled and not cross one another", "end in arrowheads", "be drawn freehand and curved", "cross for neatness", "Each should touch the part it names."],
          ["M", "A key consisting of pairs of contrasting statements used to identify organisms is", "a dichotomous key", "a food web", "a transect", "a pyramid", "Each choice leads to another pair."],
          ["M", "Specimens of small animals are commonly preserved in", "formalin", "distilled water", "iodine solution", "limewater", "It prevents decay."],
          ["H", "An animal specimen with two body divisions and four pairs of walking legs is", "an arachnid", "an insect", "a crustacean", "a millipede", "Spiders and scorpions belong to the group."],
          ["H", "In an experiment to show that light is needed for photosynthesis, the control is", "a similar leaf left exposed to light", "a leaf covered with foil", "a leaf boiled in water", "a leaf without chlorophyll", "It is treated the same except for the factor tested."],
          ["H", "A specimen 8 cm long is represented by a drawing 4 cm long. The magnification is", "×½", "×2", "×4", "×32", "The drawing is smaller than the specimen."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: the cell, nutrition and physiology",
        subtopics: ["The cell and its processes", "Nutrition in plants and animals", "Transport, respiration and excretion", "Coordination, support and reproduction"],
        objectives: ["Recall the structure and processes of cells", "Summarise nutrition in plants and animals", "Summarise transport, respiration and excretion", "Summarise coordination, support and reproduction"],
        lesson: {
          title: "Revision of Cell Biology and Physiology",
          summary: "Revise the cell and the life processes of plants and animals for the final examinations.",
          minutes: 40,
          notes: `## 1. The cell
- plant cells have a **cell wall, chloroplasts and a large vacuole**; animal cells do not
- nucleus — control; mitochondria — respiration; ribosomes — proteins; chloroplasts — photosynthesis
- **diffusion** (high → low concentration); **osmosis** (water, through a selectively permeable membrane); **active transport** (against the gradient, needs energy)
- plasmolysis in plant cells; haemolysis and crenation in red cells
- levels: cell → tissue → organ → system → organism

## 2. Nutrition
- **photosynthesis**: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂; needs light, chlorophyll, carbon(IV) oxide and water; light reaction (photolysis) then dark reaction
- mineral deficiency: nitrogen and magnesium — chlorosis
- food tests: iodine (starch), Benedict's (reducing sugar), Biuret (protein), Sudan III (fat)
- deficiency diseases: vitamin A — night blindness; C — scurvy; D — rickets; iodine — goitre; iron — anaemia; protein — kwashiorkor
- digestion: starch → maltose → glucose; protein → peptones → amino acids; fat → fatty acids and glycerol
- absorption by **villi** in the ileum; water absorbed in the colon
- modes: holozoic, parasitic, saprophytic, symbiotic

## 3. Transport
- **xylem** — water (transpiration pull); **phloem** — food (translocation)
- transpiration rises with temperature, wind and light; falls with humidity
- blood: red cells (oxygen), white cells (defence), platelets (clotting), plasma
- arteries carry blood from the heart; veins have valves; capillaries exchange materials
- double circulation: pulmonary and systemic

## 4. Respiration
- aerobic: glucose + oxygen → carbon(IV) oxide + water + much energy
- anaerobic: glucose → ethanol + carbon(IV) oxide (yeast) or lactic acid (muscle)
- respiratory surfaces are thin, moist, large and well supplied with blood
- inspiration: diaphragm flattens, ribs rise, volume increases, pressure falls

## 5. Excretion and homeostasis
- kidney: **ultrafiltration** in the glomerulus; **selective reabsorption** in the tubule
- contractile vacuole (Amoeba), flame cells (flatworms), nephridia (earthworm), Malpighian tubules (insects)
- ADH controls water; insulin and glucagon control blood sugar; the skin controls temperature

## 6. Coordination
- cerebrum — thought; cerebellum — balance; medulla — heartbeat and breathing
- reflex arc: receptor → sensory → relay → motor → effector
- eye: cornea and lens focus light on the retina; myopia — concave lens; hypermetropia — convex lens
- ear: cochlea — hearing; semicircular canals — balance
- hormones: thyroxine, insulin, adrenaline, sex hormones; auxins in plants

## 7. Support and movement
- hydrostatic skeleton, exoskeleton, endoskeleton
- cervical 7, thoracic 12, lumbar 5, sacral 5, caudal 4
- hinge, ball-and-socket, pivot and gliding joints; biceps and triceps are antagonistic
- plant support: collenchyma, sclerenchyma, xylem, turgid parenchyma

## 8. Reproduction
- asexual: fission, budding, spores, vegetative propagation
- flower → pollination → fertilisation → ovule becomes seed, ovary becomes fruit
- germination needs water, oxygen and warmth; epigeal or hypogeal
- mammals: fertilisation in the oviduct; implantation in the uterus; the placenta nourishes the foetus

## Answering questions
Read the whole question; note the command word — **state**, **explain**, **describe**, **distinguish**; give the number of points asked for; use correct biological terms and spellings; draw large, neat, labelled diagrams.`,
          examples: `**Example 1.** State three differences between plant and animal cells. *Answer:* Plant cells have a **cell wall**, **chloroplasts** and a **large central vacuole**; animal cells have none of these.

**Example 2.** Trace the path of a reflex action. *Answer:* **Receptor → sensory neurone → relay neurone → motor neurone → effector**.

**Example 3.** Name the two processes by which urine is formed. *Answer:* **Ultrafiltration** and **selective reabsorption**.`,
        },
        questions: [
          ["E", "The organelle that carries out photosynthesis is the", "chloroplast", "mitochondrion", "ribosome", "nucleus", "It contains chlorophyll."],
          ["E", "The deficiency of vitamin D in children causes", "rickets", "scurvy", "goitre", "beriberi", "The bones are soft and bent."],
          ["E", "The blood vessels that possess valves along their length are the", "veins", "arteries", "capillaries", "arterioles", "The valves prevent backflow of blood."],
          ["M", "A plant cell placed in a concentrated salt solution will", "become plasmolysed", "become turgid", "burst", "remain unchanged", "Water leaves the cell by osmosis."],
          ["M", "The first product of the digestion of starch by amylase is", "maltose", "glucose", "sucrose", "amino acid", "Maltase later converts it to glucose."],
          ["M", "The excretory structures of flatworms are", "flame cells", "nephridia", "Malpighian tubules", "kidneys", "Tapeworms and Planaria have them."],
          ["M", "The vertebrae found in the waist region of man are the", "lumbar vertebrae", "cervical vertebrae", "thoracic vertebrae", "caudal vertebrae", "There are five of them."],
          ["H", "A person can read a book held close but cannot see distant road signs clearly. The defect and its correction are", "myopia, corrected with a concave lens", "hypermetropia, corrected with a convex lens", "myopia, corrected with a convex lens", "astigmatism, corrected with a concave lens", "The image of distant objects falls in front of the retina."],
          ["H", "During vigorous exercise the breathing rate remains high for some time afterwards in order to", "repay the oxygen debt", "digest food faster", "cool the lungs", "increase the lactic acid in muscles", "Extra oxygen is needed to remove accumulated lactic acid."],
          ["H", "Which sequence correctly traces blood from the lungs to the body tissues?", "pulmonary vein, left auricle, left ventricle, aorta", "pulmonary artery, right auricle, right ventricle, aorta", "vena cava, left auricle, left ventricle, pulmonary artery", "pulmonary vein, right auricle, right ventricle, aorta", "Oxygenated blood returns to the left side of the heart."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: ecology",
        subtopics: ["Ecological concepts and habitats", "Feeding relationships and energy flow", "Nutrient cycles, populations and succession", "Pollution, conservation and health"],
        objectives: ["Recall ecological terms and the features of habitats", "Summarise food chains, pyramids and energy flow", "Summarise nutrient cycles, population studies and succession", "Summarise pollution, conservation and disease control"],
        lesson: {
          title: "Revision of Ecology",
          summary: "Revise ecology, conservation and health for the final examinations.",
          minutes: 40,
          notes: `## 1. Terms
- **habitat** — where an organism lives; **niche** — its role
- **population** — one species in an area; **community** — all species in an area
- **ecosystem** — community plus non-living environment
- **biosphere** — the zone of life on earth; biomes — large communities with characteristic vegetation
- factors: **biotic** (living); **abiotic** — climatic, edaphic, topographic

## 2. Instruments
thermometer (temperature); rain gauge (rainfall); hygrometer (humidity); anemometer (wind speed); wind vane (direction); barometer (pressure); photometer (light); Secchi disc (turbidity); quadrat and transect (sampling).

## 3. Habitats
| Habitat | Key feature | Typical adaptation |
|---|---|---|
| marine | high, stable salinity; tides | holdfasts, shells, streamlined bodies |
| estuarine | fluctuating salinity; mud | breathing roots, stilt roots |
| freshwater | low salinity | air spaces, contractile vacuoles |
| rainforest | heavy rain; layered trees | buttress roots, drip tips, climbers |
| savanna | grass; dry season; fires | thick bark, underground stems |
| desert | very little rain | spines, succulent stems, concentrated urine |
Nigerian zones from south to north: mangrove swamp → rainforest → Guinea savanna → Sudan savanna → Sahel savanna.

## 4. Feeding relationships
- producer → primary consumer → secondary consumer → tertiary consumer; decomposers recycle
- a **food web** is more stable than a single chain
- **energy** flows one way; about **10%** passes to the next trophic level
- pyramids of numbers, biomass and energy (energy is always upright)
- associations: **symbiosis** (both gain), **commensalism** (one gains, other unaffected), **parasitism** (host harmed), **predation**, **saprophytism**

## 5. Cycles
- **carbon**: removed by photosynthesis; returned by respiration, decay and combustion
- **nitrogen**: fixation (Rhizobium, Azotobacter, lightning) → nitrification (Nitrosomonas, Nitrobacter) → uptake as trioxonitrates(V) → decay → denitrification (Pseudomonas)
- **water**: evaporation, transpiration, condensation, precipitation

## 6. Populations
- density = number ÷ area
- capture–recapture: (first sample × second sample) ÷ marked recaptured
- population rises with births and immigration; falls with deaths and emigration
- **competition**: intraspecific and interspecific
- **succession**: pioneers → … → climax; primary (bare surface) or secondary (cleared land)
- overcrowding leads to competition, disease and emigration
- tolerance range and limiting factors

## 7. Pollution and conservation
- air: carbon(II) oxide, sulphur(IV) oxide (acid rain), smoke, CFCs (ozone)
- water: sewage, oil, fertilisers (algal bloom)
- conservation: forest and game reserves, afforestation, laws, recycling, soil conservation
- deforestation → erosion, desertification, loss of wildlife

## 8. Health
- vectors: Anopheles (malaria), tsetse fly (sleeping sickness), blackfly (river blindness), Aedes (yellow fever), housefly (cholera, typhoid)
- control: destroy breeding sites, safe water, sanitation, vaccination, health education
- beneficial microbes: decomposition, antibiotics, fermentation, nitrogen fixation

## 9. Soil
sand — large particles, drains fast; clay — fine particles, holds water; loam — best. Fertility is maintained by rotation, manure, fallowing and cover crops.

## Tip
In ecology questions, always give **named examples** and link each adaptation to its **function**.`,
          examples: `**Example 1.** Arrange the Nigerian vegetation zones from the coast inland. *Answer:* **Mangrove swamp, rainforest, Guinea savanna, Sudan savanna, Sahel savanna**.

**Example 2.** In a 200 m² field, 10 quadrats of 1 m² gave a total of 30 plants of a species. Estimate the population. *Solution:* 3 per m² × 200 = **600**.

**Example 3.** Distinguish commensalism from parasitism. *Answer:* In commensalism the host is **unaffected**; in parasitism it is **harmed**.`,
        },
        questions: [
          ["E", "All the different populations living together in a habitat form a", "community", "population", "niche", "biosphere", "It includes plants, animals and microorganisms."],
          ["E", "The instrument used to measure relative humidity is the", "hygrometer", "anemometer", "rain gauge", "photometer", "It has wet and dry bulbs."],
          ["E", "An association in which one organism benefits while the other is neither harmed nor helped is", "commensalism", "parasitism", "symbiosis", "predation", "Epiphytes on trees show it."],
          ["M", "In the food chain phytoplankton → zooplankton → tilapia → kingfisher, the primary consumer is", "zooplankton", "phytoplankton", "tilapia", "kingfisher", "It feeds directly on the producer."],
          ["M", "Bacteria that convert ammonium compounds to dioxonitrates(III) in the soil are", "Nitrosomonas", "Rhizobium", "Pseudomonas", "Azotobacter", "Nitrobacter then forms trioxonitrates(V)."],
          ["M", "The Nigerian vegetation zone with the lowest rainfall is the", "Sahel savanna", "Guinea savanna", "rainforest", "mangrove swamp", "It lies in the extreme north-east."],
          ["M", "The vector of yellow fever is the", "Aedes mosquito", "Anopheles mosquito", "tsetse fly", "blackfly", "The disease is caused by a virus."],
          ["H", "Ten throws of a 1 m² quadrat in a field of 500 m² gave a total of 40 plants of a weed. The estimated population of the weed in the field is", "2000", "400", "200", "20 000", "The density is 4 per m²."],
          ["H", "Food chains rarely have more than five links because", "energy is lost at each trophic level", "there are too few species", "decomposers stop the chain", "producers are too small", "Too little energy remains to support further levels."],
          ["H", "An algal bloom in a lake followed by the death of fish is most likely caused by", "fertiliser washed in from farmland", "oil spillage", "acid rain", "noise", "Decay of the algae uses up dissolved oxygen."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: genetics, variation and evolution",
        subtopics: ["Cell division and genetic terms", "Genetic crosses", "Variation, blood groups and applications", "Evolution and adaptation"],
        objectives: ["Recall cell division and the terms of genetics", "Work out monohybrid, sex-linked and blood-group crosses", "Summarise variation and the applications of genetics", "Summarise the theories and evidence of evolution"],
        lesson: {
          title: "Revision of Genetics and Evolution",
          summary: "Revise heredity, variation and evolution for the final examinations.",
          minutes: 40,
          notes: `## 1. Cell division
- **mitosis**: one division, two identical diploid cells — growth, repair, asexual reproduction; stages prophase, metaphase, anaphase, telophase
- **meiosis**: two divisions, four haploid cells — gametes; crossing over gives variation

## 2. Terms
gene; allele; dominant; recessive; genotype; phenotype; homozygous; heterozygous; F₁ and F₂; locus; hybrid.

## 3. Mendel's laws
- **segregation**: paired factors separate at gamete formation
- **independent assortment**: different pairs separate independently

## 4. Setting out a cross
1. state the symbols (capital for dominant)
2. write the **parental phenotypes and genotypes**
3. write the **gametes** (circle them)
4. use a **Punnett square** for the fusion of gametes
5. state the **genotypes and phenotypes of the offspring** and their **ratio**

### Standard results
| Cross | Result |
|---|---|
| TT × tt | all Tt (tall) |
| Tt × Tt | 3 tall : 1 short (1 TT : 2 Tt : 1 tt) |
| Tt × tt | 1 tall : 1 short |
| dihybrid F₂ | 9 : 3 : 3 : 1 |
| incomplete dominance F₂ | 1 : 2 : 1 |

## 5. Sex and sex linkage
- female XX; male XY; the sperm decides the sex; chance of either is ½
- haemophilia and colour blindness are X-linked recessive; commoner in males; females may be carriers
- carrier mother × normal father: half the sons affected, half the daughters carriers

## 6. Blood groups
- A and B codominant; O recessive: genotypes AA, AO, BB, BO, AB, OO
- O is the universal donor; AB the universal recipient
- rhesus: Rh⁻ mother with Rh⁺ foetus is at risk in later pregnancies

## 7. Sickle cell
AA normal; AS carrier; SS sickler. AS × AS gives 25% SS. Know your genotype — genetic counselling.

## 8. DNA and mutation
double helix; A–T and G–C; replication; mutation — a sudden inheritable change; mutagens include radiation and chemicals.

## 9. Variation
- **morphological** — height, weight, colour, fingerprints
- **physiological** — blood group, tongue rolling, PTC tasting
- **continuous** (range; many genes; environment) and **discontinuous** (distinct groups)
- causes: meiosis, fertilisation, mutation, environment
- uses: crime detection, paternity, transfusion, breeding

## 10. Applications
selective breeding, cross-breeding and hybrid vigour, artificial insemination, genetic engineering, cloning.

## 11. Evolution
- **Lamarck**: use and disuse; inheritance of acquired characters — rejected
- **Darwin**: over-production, struggle, variation, survival of the fittest
- modern theory adds mutation and isolation
- **evidence**: fossils, homologous and vestigial structures, embryology, distribution, biochemistry

## 12. Adaptation and behaviour
camouflage, warning colours, mimicry; courtship, territoriality; social insects — termites (queen, king, workers, soldiers) and bees (queen, drones, workers).

## Final advice
Show every step in a genetic cross; never give a ratio without the cross that produced it; state probabilities as fractions or percentages.`,
          examples: `**Example 1.** A man of blood group A (genotype AO) marries a woman of group B (genotype BO). List the possible blood groups of their children. *Answer:* **AB, A, B and O**.

**Example 2.** Brown eyes (B) are dominant to blue (b). Two heterozygous parents have a child. What is the probability that it has blue eyes? *Solution:* Bb × Bb → **¼**.

**Example 3.** State one piece of evidence for evolution from comparative anatomy. *Answer:* **Homologous structures** such as the pentadactyl limb.`,
        },
        questions: [
          ["E", "The genetic make-up of an organism is its", "genotype", "phenotype", "karyotype only", "habitat", "It is shown by letters such as Tt."],
          ["E", "The sex chromosomes of a normal human female are", "XX", "XY", "YY", "XO", "All her eggs carry an X chromosome."],
          ["E", "A unit of inheritance located on a chromosome is a", "gene", "gamete", "zygote", "centromere", "It is a length of DNA."],
          ["M", "A pure-breeding tall plant (TT) is crossed with a short plant (tt). The F₁ offspring are", "all tall", "all short", "half tall and half short", "three tall to one short", "Every offspring is Tt, and tall is dominant."],
          ["M", "A person of genotype AS is described as", "a carrier of the sickle-cell trait", "a sickler", "completely free of the sickle-cell gene", "a haemophiliac", "Such a person is usually healthy."],
          ["M", "The possible genotypes of a person of blood group B are", "BB and BO", "BB only", "AB and BO", "BO and OO", "B is dominant over O."],
          ["M", "In Darwin's theory, the survival and reproduction of the best-adapted individuals is called", "natural selection", "use and disuse", "mutation", "artificial selection", "It is also described as survival of the fittest."],
          ["H", "A man of genotype AO and a woman of genotype BO have a child. The probability that the child is of blood group O is", "one-quarter", "one-half", "three-quarters", "zero", "Only the combination OO gives group O."],
          ["H", "A haemophiliac man marries a woman who has no allele for haemophilia. Their children will be", "normal sons and carrier daughters", "haemophiliac sons and normal daughters", "all haemophiliac", "carrier sons and normal daughters", "Daughters receive his X chromosome; sons receive his Y."],
          ["H", "In a species of plant, red flowers (RR) crossed with white flowers (WW) give pink (RW). When two pink plants are crossed, the proportion of pink offspring is", "one-half", "one-quarter", "three-quarters", "all", "The ratio is 1 red : 2 pink : 1 white."],
        ],
      },
    ],
  },
];
