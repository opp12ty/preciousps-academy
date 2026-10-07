import type { TermPlan } from "../types";

/** SS1 Biology — original Precious PS content following the national senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Recognising living things",
        subtopics: ["Biology and its branches", "Characteristics of living things", "Differences between plants and animals", "Levels of organisation of life"],
        objectives: ["Define biology and name its branches", "State the characteristics of living things", "Distinguish plants from animals", "Describe the levels of organisation of life with examples"],
        lesson: {
          title: "What Makes a Thing Alive?",
          summary: "Identify the characteristics of living things and the levels at which life is organised.",
          minutes: 40,
          notes: `## Biology
**Biology** is the scientific study of **living things** (from the Greek *bios*, life, and *logos*, study).
### Branches
- **botany** — plants
- **zoology** — animals
- **ecology** — organisms and their environment
- **genetics** — heredity and variation
- **anatomy / morphology** — internal and external structure
- **physiology** — how the body functions
- **microbiology** — microorganisms
- **cytology** — cells
### Why study biology?
It helps us understand our bodies, improve health and food production, care for the environment, and prepares for careers such as medicine, nursing, pharmacy, agriculture and biotechnology.

## The scientific method
observation → question → **hypothesis** (a testable explanation) → **experiment** (with a **control**) → recording results → conclusion → theory or law.

## Characteristics of living things
Remembered as **MR NIGER D**:
| Letter | Characteristic | Meaning |
|---|---|---|
| M | **movement** | change of position of the whole body or part of it |
| R | **respiration** | release of energy from food in the cells |
| N | **nutrition** | obtaining and using food |
| I | **irritability** | response to changes (stimuli) in the environment |
| G | **growth** | permanent increase in size and mass |
| E | **excretion** | removal of the waste products of metabolism |
| R | **reproduction** | producing new individuals of the same kind |
| D | **death** | life ends; living things have a definite life span |
Living things also show **adaptation** and **competition**. Non-living things show none of these as a set — a car moves and a crystal grows, but neither does all.

## Differences between plants and animals
| Plants | Animals |
|---|---|
| make their own food by **photosynthesis** (autotrophic) | depend on ready-made food (heterotrophic) |
| contain **chlorophyll** | no chlorophyll |
| cells have a **cellulose cell wall** | cells have no cell wall |
| usually fixed in one place | most move from place to place |
| growth is **apical** and continues throughout life | growth is all over the body and stops at maturity |
| respond slowly to stimuli | respond quickly |
| store carbohydrate as **starch** | store carbohydrate as **glycogen** |
| no specialised sense organs or excretory organs | have specialised organs |
Some organisms, such as **Euglena**, show features of both.

## Levels of organisation of life
1. **cell** — the basic unit of life. Single-celled organisms: Amoeba, Paramecium, Euglena, Chlamydomonas
2. **tissue** — a group of similar cells doing the same job. Hydra is at the tissue level; examples of tissues: blood, muscle, xylem
3. **organ** — different tissues working together: heart, kidney, leaf, root. Onion bulbs and other storage organs are examples in plants
4. **system** — organs working together: digestive, circulatory, nervous systems; the shoot and root systems of plants
5. **organism** — all the systems together make a complete living thing

### Complexity
As organisms become more complex, cells become **specialised** and dependent on one another.
**Advantages:** division of labour, greater efficiency, larger size, ability to live in more varied environments.
**Disadvantages:** cells lose independence; damage to one organ can affect the whole body; slower regeneration; need for transport and coordination systems.

### Colonies and filaments
Some simple organisms live as **colonies** (Volvox, Pandorina) or **filaments** (Spirogyra) of similar cells that are only loosely dependent on one another.`,
          examples: `**Example 1.** Which characteristic of living things is shown when a plant bends towards light? *Answer:* **Irritability** (response to a stimulus).

**Example 2.** Give one organism at the tissue level of organisation. *Answer:* **Hydra**.

**Example 3.** State two differences between plants and animals. *Answer:* Plants **make their own food** and have **cell walls**; animals feed on ready-made food and have no cell walls.`,
        },
        questions: [
          ["E", "The scientific study of living things is called", "biology", "geology", "chemistry", "astronomy", "The word comes from the Greek for life and study."],
          ["E", "The removal of the waste products of metabolism from the body is", "excretion", "respiration", "nutrition", "reproduction", "Urine and sweat carry such wastes."],
          ["E", "The branch of biology that deals with the study of plants is", "botany", "zoology", "ecology", "genetics", "Zoology deals with animals."],
          ["M", "The ability of an organism to respond to changes in its environment is", "irritability", "growth", "excretion", "nutrition", "It is also called sensitivity."],
          ["M", "Which of these organisms exists at the tissue level of organisation?", "Hydra", "Amoeba", "Paramecium", "Euglena", "Its body is made of two layers of cells."],
          ["M", "Plants differ from animals in that plants", "manufacture their own food", "move from place to place", "store glycogen", "lack cell walls", "They contain chlorophyll for photosynthesis."],
          ["M", "The correct order of the levels of organisation is", "cell, tissue, organ, system, organism", "tissue, cell, organ, organism, system", "organ, tissue, cell, system, organism", "cell, organ, tissue, organism, system", "Each level is built from the one before it."],
          ["H", "An organism that shows features of both plants and animals is", "Euglena", "Spirogyra", "Hydra", "Rhizopus", "It has chloroplasts but also moves with a flagellum."],
          ["H", "A disadvantage of complexity in higher organisms is that", "individual cells cannot survive on their own", "there is division of labour", "the organism can grow larger", "the organism is more efficient", "Specialised cells depend on other cells."],
          ["H", "In an experiment, the set-up in which the factor being tested is left out is the", "control", "hypothesis", "conclusion", "theory", "It is used for comparison with the test experiment."],
        ],
      },
      {
        week: 2,
        title: "Classification of living things",
        subtopics: ["The need for classification and binomial nomenclature", "The five kingdoms", "The plant kingdom", "The animal kingdom"],
        objectives: ["Explain why organisms are classified and how they are named", "State the features of the five kingdoms", "Outline the main divisions of the plant kingdom", "Outline the main phyla of the animal kingdom"],
        lesson: {
          title: "Sorting Out the Living World",
          summary: "Classify living things into kingdoms and smaller groups and name them scientifically.",
          minutes: 40,
          notes: `## Classification
**Classification (taxonomy)** is the arrangement of living things into groups according to their **similarities and relationships**. It makes study easier, shows evolutionary relationships and gives every organism one accepted name.

### The hierarchy
**Kingdom → Phylum (Division in plants) → Class → Order → Family → Genus → Species**
The **species** is the smallest group: organisms that can **interbreed to produce fertile offspring**.

### Binomial nomenclature
Introduced by **Carolus Linnaeus**. Each organism has **two names**: the **genus** (capital initial) and the **species** (small initial), written in italics or underlined.
*Homo sapiens* (man); *Zea mays* (maize); *Musca domestica* (housefly); *Mangifera indica* (mango); *Elaeis guineensis* (oil palm).

## The five kingdoms
| Kingdom | Features | Examples |
|---|---|---|
| **Monera** | single-celled; **prokaryotic** — no true nucleus or membrane-bound organelles | bacteria, blue-green algae |
| **Protista** | single-celled; **eukaryotic** | Amoeba, Paramecium, Euglena, Plasmodium |
| **Fungi** | eukaryotic; no chlorophyll; body of **hyphae** (mycelium); cell wall of chitin; saprophytic or parasitic; reproduce by spores | Rhizopus, mushroom, yeast |
| **Plantae** | many-celled; chlorophyll; cellulose cell walls | mosses, ferns, flowering plants |
| **Animalia** | many-celled; no cell wall; feed on other organisms | insects, fish, man |
**Viruses** are not placed in any kingdom: they are not cells and reproduce only inside living cells.

## The plant kingdom
- **Thallophyta (algae)** — simple, no true roots, stems or leaves: Spirogyra, Chlamydomonas
- **Bryophyta** — mosses and liverworts; no vascular tissue; need water for fertilisation
- **Pteridophyta** — ferns; true roots, stems and leaves with vascular tissue; reproduce by spores
- **Spermatophyta** — seed plants
  - **gymnosperms** — "naked" seeds borne on cones: pine, cycad
  - **angiosperms** — flowering plants; seeds enclosed in fruits
    - **monocotyledons**: one seed leaf, parallel veins, fibrous roots, floral parts in threes — maize, grasses, palms
    - **dicotyledons**: two seed leaves, net veins, tap root, floral parts in fours or fives — beans, mango, hibiscus

## The animal kingdom
### Invertebrates (no backbone)
| Phylum | Features | Examples |
|---|---|---|
| **Porifera** | pores; no tissues | sponges |
| **Coelenterata (Cnidaria)** | two body layers; one opening; tentacles with stinging cells | Hydra, jellyfish |
| **Platyhelminthes** | flatworms | tapeworm, liver fluke, Planaria |
| **Nematoda** | roundworms, unsegmented | Ascaris, hookworm |
| **Annelida** | segmented worms | earthworm, leech |
| **Mollusca** | soft body, often with a shell | snail, octopus |
| **Arthropoda** | jointed legs; exoskeleton of chitin; segmented body | insects, spiders, crabs, millipedes |
| **Echinodermata** | spiny skin; marine | starfish, sea urchin |
**Classes of arthropods:** Insecta (3 body parts, 6 legs), Arachnida (2 body parts, 8 legs), Crustacea (crabs, prawns), Myriapoda (centipedes, millipedes).

### Vertebrates (phylum Chordata)
| Class | Features | Examples |
|---|---|---|
| **Pisces** | scales, fins, gills; cold-blooded | tilapia, shark |
| **Amphibia** | moist skin; live in water and on land; external fertilisation | toad, frog |
| **Reptilia** | dry scaly skin; lay shelled eggs on land | lizard, snake, tortoise |
| **Aves** | feathers, beak, wings; warm-blooded; lay eggs | pigeon, fowl |
| **Mammalia** | hair; mammary glands; young born alive; warm-blooded | man, rat, bat, whale |`,
          examples: `**Example 1.** Write the scientific name of maize correctly. *Answer:* ***Zea mays*** — genus with a capital, species in small letters.

**Example 2.** To which kingdom do bacteria belong? *Answer:* **Monera**.

**Example 3.** Give two differences between monocotyledons and dicotyledons. *Answer:* Monocots have **one seed leaf and parallel veins**; dicots have **two seed leaves and net veins**.`,
        },
        questions: [
          ["E", "The system of giving each organism two scientific names was introduced by", "Carolus Linnaeus", "Charles Darwin", "Gregor Mendel", "Robert Hooke", "It is called binomial nomenclature."],
          ["E", "Bacteria belong to the kingdom", "Monera", "Protista", "Fungi", "Plantae", "They have no true nucleus."],
          ["E", "Animals with backbones are called", "vertebrates", "invertebrates", "arthropods", "molluscs", "Fish, birds and mammals are examples."],
          ["M", "The smallest unit of classification is the", "species", "genus", "family", "class", "Its members interbreed to give fertile offspring."],
          ["M", "An animal with a segmented body, jointed legs and an exoskeleton belongs to the phylum", "Arthropoda", "Annelida", "Mollusca", "Nematoda", "Insects and crabs are members."],
          ["M", "Which of these is a feature of monocotyledonous plants?", "leaves with parallel veins", "tap root system", "two seed leaves", "net-veined leaves", "Maize and grasses show it."],
          ["M", "Mushrooms and Rhizopus are classified as", "fungi", "algae", "mosses", "protists", "They lack chlorophyll and have hyphae."],
          ["H", "Viruses are not placed in any of the five kingdoms because they", "are not cells and reproduce only inside living cells", "are too large", "have chlorophyll", "have true nuclei", "They show life only within a host cell."],
          ["H", "Which class of vertebrates has a moist skin and lives both in water and on land?", "Amphibia", "Reptilia", "Pisces", "Aves", "Toads and frogs are examples."],
          ["H", "In the scientific name Musca domestica, the word 'domestica' represents the", "species", "genus", "family", "order", "The first name is the genus."],
        ],
      },
      {
        week: 3,
        title: "The cell",
        subtopics: ["The cell theory and history", "Forms in which cells exist", "Cell structure and functions of organelles", "Differences between plant and animal cells"],
        objectives: ["State the cell theory and name the scientists who contributed to it", "Describe the forms in which cells exist", "Describe the structure of a cell and the functions of its parts", "Distinguish plant cells from animal cells"],
        lesson: {
          title: "The Unit of Life",
          summary: "Describe the structure of plant and animal cells and the functions of their organelles.",
          minutes: 40,
          notes: `## The cell
The **cell** is the **structural and functional unit of life** — the smallest unit that can carry out all life processes.

## History
- **Robert Hooke** (1665) — saw box-like "cells" in cork with his microscope and named them
- **Felix Dujardin** (1835) — described the living content, protoplasm
- **Matthias Schleiden** (1838) — all plants are made of cells
- **Theodor Schwann** (1839) — all animals are made of cells
- **Rudolf Virchow** (1855) — all cells come from existing cells

## The cell theory
1. the cell is the structural and functional unit of life
2. all living things are made of one or more cells
3. all cells come from **pre-existing cells**
4. cells contain hereditary information passed on during cell division

## Forms in which cells exist
- as **independent, single-celled organisms**: Amoeba, Paramecium, Euglena, Chlamydomonas
- as a **colony**: Volvox, Pandorina
- as a **filament**: Spirogyra, Oscillatoria
- as part of a **multicellular organism**: cheek cell, onion epidermal cell, muscle cell

## Cell structure
A cell consists of **protoplasm** — the **nucleus** and the **cytoplasm** — bounded by a cell membrane.
| Part | Function |
|---|---|
| **cell membrane** | selectively permeable; controls what enters and leaves |
| **cell wall** (plants) | made of **cellulose**; gives shape, support and protection; fully permeable |
| **cytoplasm** | jelly-like fluid where chemical reactions occur; holds the organelles |
| **nucleus** | controls all cell activities; contains **chromosomes** carrying the genes (DNA) |
| **nucleolus** | makes ribosomes |
| **mitochondria** | sites of **respiration** — the "powerhouse" of the cell |
| **chloroplasts** (plants) | contain chlorophyll; sites of **photosynthesis** |
| **ribosomes** | sites of **protein synthesis** |
| **endoplasmic reticulum** | transports materials within the cell; rough ER carries ribosomes |
| **Golgi bodies** | package and secrete substances |
| **lysosomes** | contain enzymes that digest worn-out parts and foreign bodies |
| **vacuole** | stores cell sap (large and central in plants); small food or contractile vacuoles in some animal cells |
| **centrioles** (animals) | form the spindle during cell division |

## Differences between plant and animal cells
| Plant cell | Animal cell |
|---|---|
| has a **cellulose cell wall** | no cell wall |
| has **chloroplasts** | no chloroplasts |
| one **large central vacuole** | small vacuoles or none |
| regular, definite shape | irregular shape |
| no centrioles | has centrioles |
| stores **starch** | stores **glycogen** |
| nucleus pushed to the side | nucleus usually central |
**Similarities:** both have a cell membrane, cytoplasm, nucleus, mitochondria and ribosomes.

## The microscope
The **light microscope** magnifies up to about 1500 times; the **electron microscope** shows much finer detail.
Total magnification = eyepiece magnification × objective magnification.
To prepare a temporary slide: place a thin specimen in a drop of water (or iodine stain) on a slide and lower a cover slip gently to avoid air bubbles.

## Specialised cells
red blood cell (no nucleus, carries oxygen); nerve cell (long fibre); sperm (tail); root hair cell (long extension for absorption); palisade cell (many chloroplasts); guard cell (controls the stoma).`,
          examples: `**Example 1.** Which organelle is the site of respiration? *Answer:* The **mitochondrion**.

**Example 2.** Name three structures found in plant cells but not in animal cells. *Answer:* **Cell wall, chloroplasts and a large central vacuole**.

**Example 3.** An eyepiece of ×10 is used with an objective of ×40. Find the total magnification. *Solution:* 10 × 40 = **×400**.`,
        },
        questions: [
          ["E", "The structural and functional unit of life is the", "cell", "tissue", "organ", "nucleus", "It can carry out all life processes."],
          ["E", "The scientist who first observed and named cells was", "Robert Hooke", "Theodor Schwann", "Rudolf Virchow", "Louis Pasteur", "He looked at thin slices of cork."],
          ["E", "The part of the cell that controls all its activities is the", "nucleus", "vacuole", "cell wall", "ribosome", "It contains the chromosomes."],
          ["M", "The organelle in which respiration takes place is the", "mitochondrion", "chloroplast", "ribosome", "lysosome", "It is called the powerhouse of the cell."],
          ["M", "Which of these structures is found in plant cells but not in animal cells?", "cellulose cell wall", "cell membrane", "mitochondrion", "nucleus", "It gives the plant cell a definite shape."],
          ["M", "Protein synthesis in the cell occurs on the", "ribosomes", "lysosomes", "Golgi bodies", "centrioles", "They may be attached to the endoplasmic reticulum."],
          ["M", "Spirogyra is an example of an organism that exists as a", "filament", "colony", "single free-living cell", "tissue", "Its cells are joined end to end."],
          ["H", "The statement that all cells arise from pre-existing cells was made by", "Rudolf Virchow", "Matthias Schleiden", "Robert Hooke", "Felix Dujardin", "It completed the cell theory."],
          ["H", "A specimen viewed with a ×10 eyepiece and a ×40 objective is magnified", "400 times", "50 times", "30 times", "4 times", "Multiply the two magnifications."],
          ["H", "The organelles that contain enzymes for digesting worn-out cell parts are", "lysosomes", "ribosomes", "chloroplasts", "centrioles", "They are sometimes called suicide bags."],
        ],
      },
      {
        week: 4,
        title: "The cell and its environment",
        subtopics: ["Diffusion", "Osmosis", "Plasmolysis, turgidity and haemolysis", "Active transport"],
        objectives: ["Define diffusion and state the factors that affect it", "Define osmosis and describe experiments to demonstrate it", "Explain plasmolysis, turgidity, haemolysis and crenation", "Explain active transport and the biological importance of these processes"],
        lesson: {
          title: "How Substances Enter and Leave Cells",
          summary: "Explain diffusion, osmosis and active transport and their importance to living things.",
          minutes: 40,
          notes: `## Diffusion
**Diffusion** is the movement of **molecules or ions** from a region of **higher concentration** to a region of **lower concentration** until they are evenly spread. It occurs in gases and liquids and needs no energy from the cell.
### Factors affecting the rate
- **concentration gradient** — the steeper, the faster
- **temperature** — higher temperature, faster diffusion
- **size of the particles** — small particles diffuse faster
- **state of matter** — fastest in gases
- **surface area** and thickness of the membrane
### Importance
- gaseous exchange in the lungs, gills and leaves
- absorption of digested food in the small intestine
- movement of carbon(IV) oxide into leaves for photosynthesis
- exchange of materials between mother and foetus across the placenta
- removal of waste from cells
- feeding and gas exchange in Amoeba

## Osmosis
**Osmosis** is the movement of **water molecules** from a region of **dilute (weak) solution** to a region of **concentrated (strong) solution** through a **selectively (semi-) permeable membrane**.
### Conditions
two solutions of different concentration, separated by a selectively permeable membrane.
### Demonstration with living tissue
Peel a yam or potato tuber and cut a cavity in it. Half-fill the cavity with strong sugar solution, stand the tuber in a dish of water and mark the level. After some hours the level in the cavity **rises**: water has passed through the living cells into the sugar solution. A **boiled** tuber shows no rise, because its membranes are destroyed.
### Types of solution
- **hypotonic** — more dilute than the cell sap; the cell gains water
- **hypertonic** — more concentrated; the cell loses water
- **isotonic** — the same concentration; no net movement

## Effects on plant cells
- in a hypotonic solution the cell swells and becomes **turgid**; the cell wall prevents bursting. **Turgidity** supports herbaceous plants and opens stomata
- in a hypertonic solution the cytoplasm shrinks away from the cell wall — **plasmolysis**; the plant **wilts**. This is why too much fertiliser "burns" crops

## Effects on animal cells
- red blood cells in a hypotonic solution swell and burst — **haemolysis**
- in a hypertonic solution they shrink and wrinkle — **crenation**

## Importance of osmosis
- absorption of water by **root hairs**
- movement of water from cell to cell
- turgidity and support in plants; opening and closing of stomata
- reabsorption of water in the kidney tubules
- preservation of food with salt or sugar (microorganisms lose water and die)

## Active transport
The movement of substances across a membrane from a region of **lower** concentration to a region of **higher** concentration — **against the concentration gradient** — using **energy** from respiration and carrier molecules in the membrane.
Examples: uptake of **mineral salts** by root hairs; reabsorption of glucose in the kidney; absorption of some digested food.
Anything that stops respiration (lack of oxygen, poisons such as cyanide, low temperature) stops active transport.

## Comparison
| | Diffusion | Osmosis | Active transport |
|---|---|---|---|
| what moves | any molecules or ions | water only | ions and molecules |
| direction | high → low concentration | dilute → concentrated solution | low → high concentration |
| membrane needed | no | yes | yes |
| energy from cell | no | no | yes |`,
          examples: `**Example 1.** What happens to a red blood cell placed in distilled water? *Answer:* It takes in water, swells and bursts — **haemolysis**.

**Example 2.** Name the process by which root hairs absorb mineral salts against a concentration gradient. *Answer:* **Active transport**.

**Example 3.** Why does salting preserve fish? *Answer:* Salt draws water out of microorganisms by **osmosis**, so they cannot grow.`,
        },
        questions: [
          ["E", "The movement of molecules from a region of higher concentration to one of lower concentration is", "diffusion", "osmosis", "active transport", "plasmolysis", "No membrane is required for it."],
          ["E", "Osmosis involves the movement of", "water molecules", "salt particles", "sugar molecules", "protein molecules", "They pass through a selectively permeable membrane."],
          ["E", "A plant cell that is swollen and firm with water is said to be", "turgid", "plasmolysed", "crenated", "haemolysed", "The cell wall prevents it from bursting."],
          ["M", "The shrinking of the cytoplasm away from the cell wall when a plant cell loses water is", "plasmolysis", "turgidity", "haemolysis", "diffusion", "It happens in a concentrated solution."],
          ["M", "The bursting of red blood cells placed in a very dilute solution is called", "haemolysis", "crenation", "plasmolysis", "wilting", "Animal cells have no cell wall to resist swelling."],
          ["M", "Root hairs absorb water from the soil by", "osmosis", "active transport", "transpiration", "photosynthesis", "The cell sap is more concentrated than soil water."],
          ["M", "Which of the following increases the rate of diffusion?", "a rise in temperature", "larger particles", "a thicker membrane", "a smaller concentration difference", "Particles move faster when warmer."],
          ["H", "Active transport differs from diffusion in that active transport", "requires energy from respiration", "moves substances down a concentration gradient", "occurs only in gases", "needs no membrane", "Substances move against the concentration gradient."],
          ["H", "In the yam osmometer experiment, no rise in level occurs with a boiled yam because boiling", "destroys the selectively permeable cell membranes", "removes all the sugar", "makes the water colder", "hardens the cell walls", "Living membranes are needed for osmosis."],
          ["H", "A solution that has the same concentration as the cell sap is described as", "isotonic", "hypotonic", "hypertonic", "saturated", "There is no net movement of water."],
        ],
      },
      {
        week: 5,
        title: "Cell activities: respiration, growth and reproduction",
        subtopics: ["Aerobic and anaerobic respiration", "Excretion in cells", "Growth and its measurement", "Cell reproduction and irritability"],
        objectives: ["Distinguish aerobic from anaerobic respiration", "Describe excretion in single-celled organisms", "Explain growth and how it is measured", "Describe asexual reproduction in cells and responses to stimuli"],
        lesson: {
          title: "The Cell at Work",
          summary: "Describe respiration, excretion, growth, reproduction and irritability at the level of the cell.",
          minutes: 40,
          notes: `## Cellular respiration
The **breakdown of food substances in the cells to release energy**. The energy is stored in **ATP** (adenosine triphosphate), the cell's energy currency.

### Aerobic respiration
Uses **oxygen**; takes place mainly in the **mitochondria**; glucose is completely broken down:
**C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (38 ATP)**

### Anaerobic respiration
Takes place **without oxygen**, in the cytoplasm; glucose is only partly broken down and little energy is released (2 ATP).
- in **yeast** and plants — **alcoholic fermentation**: glucose → **ethanol + carbon(IV) oxide** + energy
- in **animal muscle** — glucose → **lactic acid** + energy. During vigorous exercise lactic acid builds up, causing fatigue and cramp; the extra oxygen needed afterwards to remove it is the **oxygen debt**

| | Aerobic | Anaerobic |
|---|---|---|
| oxygen | required | not required |
| energy released | large | small |
| end products | carbon(IV) oxide and water | ethanol and carbon(IV) oxide, or lactic acid |
| breakdown of glucose | complete | incomplete |

### Stages
**Glycolysis** (in the cytoplasm) splits glucose into pyruvic acid; with oxygen, pyruvic acid enters the **Krebs cycle** in the mitochondria.
### Uses of anaerobic respiration
baking (carbon(IV) oxide raises dough), brewing, making yoghurt and biogas.
### Experiments
Germinating seeds release **heat** (a thermometer in a flask of live seeds reads higher than one with boiled seeds) and **carbon(IV) oxide** (limewater turns milky).

## Excretion in cells
The removal of metabolic wastes. In Amoeba and Paramecium, carbon(IV) oxide and ammonia **diffuse** out through the cell membrane; the **contractile vacuole** removes excess water (**osmoregulation**). Plants store some wastes in leaves and bark as tannins, resins, gums and crystals of calcium oxalate.

## Growth
An **irreversible increase in size, mass and number of cells**. It involves cell division (**mitosis**), cell enlargement and cell differentiation.
- in plants, growth is restricted to **meristems**: apical (tips of shoots and roots), lateral (cambium — increase in girth) and intercalary
- in animals it occurs throughout the body
### Measuring growth
height or length, **dry mass** (most reliable), fresh mass, leaf area, number of leaves. A growth curve is usually **S-shaped (sigmoid)**.
### Factors
nutrients, water, temperature, light, hormones (auxins in plants; growth hormone and thyroxine in animals).

## Cell reproduction
- **asexual**: one parent; offspring identical
  - **binary fission** — Amoeba, Paramecium, bacteria
  - **budding** — yeast, Hydra
  - **spore formation** — Rhizopus
  - **fragmentation** — Spirogyra
  - vegetative propagation in plants
- **sexual**: fusion of two gametes to form a **zygote**; **conjugation** occurs in Spirogyra and Paramecium
Body cells divide by **mitosis** (same chromosome number); gametes are formed by **meiosis** (number halved).

## Irritability
Response to stimuli such as light, touch, chemicals, water and gravity.
- **taxis (tactic movement)** — movement of a **whole organism** towards or away from a stimulus: Euglena swims towards light (positive phototaxis); woodlice move away from light
- **tropism** — **growth** movement of part of a plant, direction determined by the stimulus: shoots grow towards light (positive phototropism); roots grow downwards (positive geotropism); roots towards water (hydrotropism)
- **nastic movement** — response not related to the direction of the stimulus: the folding of Mimosa leaves when touched; opening and closing of flowers

## Movement in cells
by **cilia** (Paramecium), **flagella** (Euglena, sperm) and **pseudopodia** (Amoeba); cytoplasmic streaming (cyclosis) within cells.`,
          examples: `**Example 1.** Write the word equation for anaerobic respiration in yeast. *Answer:* **glucose → ethanol + carbon(IV) oxide + energy**.

**Example 2.** How does Amoeba reproduce? *Answer:* By **binary fission**.

**Example 3.** The folding of Mimosa leaves on being touched is what kind of response? *Answer:* A **nastic movement**.`,
        },
        questions: [
          ["E", "The breakdown of food in cells to release energy is", "respiration", "digestion", "excretion", "photosynthesis", "The energy is stored as ATP."],
          ["E", "Amoeba reproduces asexually by", "binary fission", "budding", "spore formation", "conjugation", "The cell divides into two equal parts."],
          ["E", "Respiration that requires oxygen is described as", "aerobic", "anaerobic", "fermentation", "glycolysis only", "It releases a large amount of energy."],
          ["M", "The end products of anaerobic respiration in yeast are", "ethanol and carbon(IV) oxide", "lactic acid and water", "carbon(IV) oxide and water", "glucose and oxygen", "The process is called alcoholic fermentation."],
          ["M", "The substance that accumulates in human muscles during vigorous exercise is", "lactic acid", "ethanol", "urea", "glycogen", "It causes fatigue and cramp."],
          ["M", "The structure that removes excess water from Amoeba is the", "contractile vacuole", "food vacuole", "nucleus", "pseudopodium", "It carries out osmoregulation."],
          ["M", "The growth of a plant shoot towards light is called", "positive phototropism", "negative geotropism only", "phototaxis", "a nastic movement", "A tropism is a directional growth response."],
          ["H", "The movement of a whole organism such as Euglena towards light is", "phototaxis", "phototropism", "a nastic movement", "hydrotropism", "A taxis involves the whole organism moving."],
          ["H", "The most reliable measure of the growth of a plant is its", "dry mass", "fresh mass", "height", "number of leaves", "It excludes the variable water content."],
          ["H", "Compared with aerobic respiration, anaerobic respiration releases", "less energy because glucose is only partly broken down", "more energy per glucose molecule", "the same amount of energy", "no energy at all", "Only 2 ATP are formed instead of 38."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Tissues and supporting systems",
        subtopics: ["Types of skeleton", "The mammalian skeleton", "Joints and movement", "Supporting tissues in plants"],
        objectives: ["Describe the three types of skeleton", "Identify the main bones of the mammalian skeleton", "Describe the types of joint and how muscles bring about movement", "Describe the supporting tissues in plants"],
        lesson: {
          title: "Support and Movement",
          summary: "Describe skeletons, joints and muscles in animals and the supporting tissues of plants.",
          minutes: 40,
          notes: `## Skeleton
The framework that supports and protects the body of an animal.
### Types
- **hydrostatic skeleton** — fluid under pressure in a body cavity: earthworm, Hydra, sea anemone
- **exoskeleton** — a hard covering outside the body, made of **chitin** in arthropods (insects, crabs) or a shell in snails. Arthropods must **moult (ecdysis)** in order to grow
- **endoskeleton** — inside the body, made of **bone** and **cartilage**: all vertebrates

### Skeletal materials
- **chitin** — tough, light, non-living
- **cartilage** — tough and flexible; found at the ends of bones, in the nose, ear, trachea and between vertebrae; the whole skeleton of sharks
- **bone** — hard and rigid; made of living cells with deposits of **calcium phosphate**

## The mammalian skeleton
### Axial skeleton
- **skull** — cranium protects the brain; jaws carry teeth
- **vertebral column** — 33 vertebrae in man:
| Region | Number | Feature |
|---|---|---|
| **cervical** (neck) | 7 | first is the **atlas** (nodding), second the **axis** (turning the head) |
| **thoracic** (chest) | 12 | long neural spine; carry the ribs |
| **lumbar** (waist) | 5 | large and thick; bear body weight |
| **sacral** | 5, fused | form the sacrum, joined to the hip |
| **caudal** | 4, fused | form the coccyx |
- **ribs** (12 pairs) and **sternum** — the rib cage protects the heart and lungs
### Appendicular skeleton
- **pectoral girdle** — scapula (shoulder blade) and clavicle (collar bone)
- **pelvic girdle** — hip bones
- **fore limb** — humerus; radius and ulna; carpals; metacarpals; phalanges
- **hind limb** — **femur** (the longest bone); tibia and fibula; patella (knee cap); tarsals; metatarsals; phalanges

### Functions of the skeleton
**support**; **protection** of delicate organs; **movement** (attachment for muscles); gives **shape**; **makes blood cells** in the bone marrow; stores calcium and phosphorus; helps in breathing.

## Joints
A **joint** is where two or more bones meet.
- **immovable (fixed)** — sutures of the skull
- **slightly movable** — between vertebrae
- **freely movable (synovial)**:
  - **ball-and-socket** — shoulder, hip: movement in all directions
  - **hinge** — elbow, knee: movement in one plane
  - **pivot** — between atlas and axis: rotation
  - **gliding** — wrist, ankle
A synovial joint has **cartilage** covering the bone ends, **synovial fluid** to lubricate, a synovial membrane, and **ligaments** holding bone to bone. **Tendons** join **muscle to bone**.

## Muscles and movement
Muscles can only **pull** (contract), so they work in **antagonistic pairs**. To bend the arm, the **biceps** (flexor) contracts while the **triceps** relaxes; to straighten it, the triceps (extensor) contracts and the biceps relaxes.

## Supporting tissues in plants
| Tissue | Features | Function |
|---|---|---|
| **parenchyma** | thin-walled living cells | support by turgidity; storage |
| **collenchyma** | living cells thickened at the corners with cellulose | flexible support in young stems and leaf stalks |
| **sclerenchyma** | dead cells with **lignified** walls (fibres and stone cells) | strength and hardness |
| **xylem** | vessels and tracheids with lignified walls | conducts water; main support in woody plants |
| **phloem** | sieve tubes and companion cells | conducts food |
Supporting tissues give plants rigidity, shape, strength and resistance to wind.`,
          examples: `**Example 1.** What type of skeleton does a cockroach have? *Answer:* An **exoskeleton** of chitin.

**Example 2.** Name the type of joint at the elbow. *Answer:* A **hinge joint**.

**Example 3.** Which muscle contracts to bend the arm? *Answer:* The **biceps**.`,
        },
        questions: [
          ["E", "The type of skeleton found in an earthworm is a", "hydrostatic skeleton", "exoskeleton", "endoskeleton", "cartilaginous skeleton", "Fluid under pressure supports the body."],
          ["E", "The longest bone in the human body is the", "femur", "humerus", "tibia", "ulna", "It is the thigh bone."],
          ["E", "The exoskeleton of insects is made of", "chitin", "bone", "cartilage", "cellulose", "It is shed during moulting."],
          ["M", "The joint found at the shoulder and the hip is the", "ball-and-socket joint", "hinge joint", "pivot joint", "gliding joint", "It allows movement in all directions."],
          ["M", "The number of cervical vertebrae in man is", "seven", "five", "twelve", "four", "They are the neck vertebrae."],
          ["M", "The structures that attach muscles to bones are", "tendons", "ligaments", "cartilages", "sutures", "Ligaments join bone to bone."],
          ["M", "The plant tissue made of dead cells with lignified walls, giving strength, is", "sclerenchyma", "parenchyma", "collenchyma", "phloem", "Fibres are an example."],
          ["H", "When the arm is being straightened, the", "triceps contracts and the biceps relaxes", "biceps contracts and the triceps relaxes", "both muscles contract", "both muscles relax", "The two muscles are an antagonistic pair."],
          ["H", "The vertebrae that carry the ribs are the", "thoracic vertebrae", "lumbar vertebrae", "cervical vertebrae", "sacral vertebrae", "There are twelve of them in man."],
          ["H", "The function of synovial fluid in a joint is to", "lubricate the joint and reduce friction", "join bone to bone", "produce blood cells", "attach muscle to bone", "It is secreted by the synovial membrane."],
        ],
      },
      {
        week: 2,
        title: "Nutrition in animals: food substances",
        subtopics: ["Classes of food and their functions", "Balanced diet and deficiency diseases", "Food tests", "Dentition in mammals"],
        objectives: ["List the classes of food, their sources and functions", "Explain a balanced diet and describe deficiency diseases", "Describe the tests for the main food substances", "Describe mammalian teeth and dental formulae"],
        lesson: {
          title: "Food and Teeth",
          summary: "Describe the classes of food, food tests, balanced diet and mammalian dentition.",
          minutes: 40,
          notes: `## Classes of food
| Class | Sources | Functions |
|---|---|---|
| **carbohydrates** | yam, rice, cassava, maize, bread | main source of **energy** |
| **proteins** | meat, fish, eggs, beans, milk | growth, repair, enzymes and hormones |
| **fats and oils (lipids)** | palm oil, groundnut, butter | energy store; insulation; carry fat-soluble vitamins |
| **vitamins** | fruits, vegetables, liver | protect against disease; needed in small amounts |
| **mineral salts** | vegetables, milk, salt, meat | bones, blood, nerves |
| **water** | drinks, food | solvent; transport; temperature control |
| **roughage (fibre)** | vegetables, fruits, whole grains | aids bowel movement; prevents constipation |

### Units
carbohydrates are built from simple sugars (glucose); proteins from **amino acids**; fats from **fatty acids and glycerol**.

### Vitamins
| Vitamin | Source | Deficiency |
|---|---|---|
| **A** | carrots, palm oil, liver | **night blindness** |
| **B₁** | unpolished rice, yeast | **beriberi** |
| B₃ (niacin) | meat, groundnut | pellagra |
| **C** | citrus fruits, fresh vegetables | **scurvy** (bleeding gums) |
| **D** | fish-liver oil; made in skin in sunlight | **rickets** |
| E | green vegetables | reproductive failure |
| **K** | green vegetables | slow clotting of blood |
A, D, E and K are fat-soluble; B and C are water-soluble.

### Minerals
**calcium** and **phosphorus** — bones and teeth; **iron** — haemoglobin (lack causes **anaemia**); **iodine** — thyroxine (lack causes **goitre**); sodium and potassium — nerve impulses; fluorine — tooth enamel.

## Balanced diet
A diet containing **all the classes of food in the correct proportions**. Needs vary with age, sex, occupation and state of health.
- **kwashiorkor** — lack of **protein** in children: swollen belly, thin limbs, discoloured hair
- **marasmus** — general starvation; **obesity** — excess energy foods

## Food tests
| Food | Test | Positive result |
|---|---|---|
| **starch** | add **iodine solution** | blue-black |
| **reducing sugar** (glucose) | heat with **Benedict's** or Fehling's solution | brick-red (orange) precipitate |
| non-reducing sugar (sucrose) | boil with dilute acid, neutralise, then Benedict's test | brick-red precipitate |
| **protein** | **Biuret test** — sodium hydroxide and dilute copper(II) tetraoxosulphate(VI) | violet (purple) |
| protein | **Millon's reagent**, warm | brick-red (pink) |
| **fats and oils** | rub on paper | translucent grease spot |
| fats and oils | **Sudan III** | red stain |

## Dentition
The number, kinds and arrangement of teeth.
| Tooth | Shape | Function |
|---|---|---|
| **incisors** | chisel-shaped | cutting and biting |
| **canines** | pointed | tearing flesh |
| **premolars** | broad with cusps | grinding and crushing |
| **molars** | broad with cusps | grinding and crushing |
- **homodont**: teeth all alike (fish, reptiles); **heterodont**: different types (mammals)
- **milk teeth** (20 in man) are replaced by **permanent teeth** (32)

### Structure of a tooth
**crown**, neck and **root**. **Enamel** (the hardest substance in the body) covers the crown; **dentine** lies beneath; the **pulp cavity** contains blood vessels and nerves; **cement** fixes the root in the jaw.

### Dental formula
Shows the teeth in half of the upper and lower jaws.
- man: i 2/2, c 1/1, pm 2/2, m 3/3 = 32
- dog (carnivore): i 3/3, c 1/1, pm 4/4, m 2/3 = 42 — long canines and **carnassial** teeth for shearing flesh
- rabbit (herbivore): i 2/1, c 0/0, pm 3/2, m 3/3 = 28 — no canines; a gap, the **diastema**
- sheep: no upper incisors — a horny pad instead

### Care of teeth
brush twice daily, limit sugary foods, eat foods rich in calcium, visit the dentist.`,
          examples: `**Example 1.** Which reagent is used to test for starch, and what is the result? *Answer:* **Iodine solution** — it turns **blue-black**.

**Example 2.** What disease results from lack of vitamin C? *Answer:* **Scurvy**.

**Example 3.** How many permanent teeth has an adult human, from the formula i 2/2, c 1/1, pm 2/2, m 3/3? *Solution:* (8 + 8) × 2 = **32**.`,
        },
        questions: [
          ["E", "The class of food that is the main source of energy is", "carbohydrates", "vitamins", "mineral salts", "water", "Yam, rice and cassava are rich in it."],
          ["E", "Lack of vitamin C in the diet causes", "scurvy", "rickets", "beriberi", "night blindness", "The gums bleed."],
          ["E", "The teeth used for cutting and biting food are the", "incisors", "molars", "premolars", "canines", "They are chisel-shaped."],
          ["M", "A blue-black colour with iodine solution shows the presence of", "starch", "glucose", "protein", "fat", "This is the standard test."],
          ["M", "Kwashiorkor in children results from a deficiency of", "protein", "carbohydrate", "vitamin D", "iodine", "The child has a swollen belly and thin limbs."],
          ["M", "The mineral element needed for the formation of haemoglobin is", "iron", "calcium", "iodine", "fluorine", "Its lack causes anaemia."],
          ["M", "A food sample that gives a violet colour in the Biuret test contains", "protein", "starch", "reducing sugar", "oil", "Sodium hydroxide and dilute copper(II) solution are used."],
          ["H", "The gap between the incisors and premolars in the jaw of a rabbit is the", "diastema", "carnassial", "pulp cavity", "crown", "Herbivores such as rabbits have no canines."],
          ["H", "The hardest substance in the mammalian body is", "enamel", "dentine", "cement", "bone", "It covers the crown of a tooth."],
          ["H", "To test for a non-reducing sugar, the sample is first boiled with dilute acid in order to", "hydrolyse it to reducing sugars", "remove the starch", "neutralise it", "colour the solution", "Benedict's solution then gives a positive result."],
        ],
      },
      {
        week: 3,
        title: "Modes of nutrition and feeding mechanisms",
        subtopics: ["Autotrophic nutrition", "Heterotrophic nutrition", "Feeding mechanisms in animals", "Symbiosis, parasitism and saprophytism"],
        objectives: ["Describe autotrophic nutrition", "Describe the types of heterotrophic nutrition", "Describe the feeding mechanisms of selected animals", "Explain symbiosis, parasitism, commensalism and saprophytism with examples"],
        lesson: {
          title: "How Organisms Obtain Food",
          summary: "Describe the modes of nutrition and the feeding mechanisms of different organisms.",
          minutes: 40,
          notes: `## Autotrophic nutrition
**Autotrophs** make their own organic food from simple inorganic substances.
- **photosynthesis** — green plants, algae and some bacteria use **light** energy and chlorophyll to make food from carbon(IV) oxide and water
- **chemosynthesis** — certain bacteria (such as the nitrifying bacteria *Nitrosomonas* and *Nitrobacter*) use energy released from **chemical reactions**

## Heterotrophic nutrition
**Heterotrophs** cannot make their own food; they depend on ready-made organic food.

### 1. Holozoic nutrition
Feeding on solid organic food, which is **ingested, digested, absorbed, assimilated** and the remains **egested**.
- **herbivores** — eat plants: goat, rabbit, grasshopper
- **carnivores** — eat flesh: lion, dog, hawk
- **omnivores** — eat both: man, pig
- **scavengers** — eat dead animals: vulture

### 2. Parasitic nutrition
A **parasite** lives **on or in** another living organism, the **host**, obtains food from it and **harms** it.
- **ectoparasites** live outside: tick, louse, flea, dodder (Cuscuta)
- **endoparasites** live inside: tapeworm, roundworm, liver fluke, Plasmodium
Tapeworms are adapted by having hooks and suckers, a flat body for absorbing digested food, no gut, a thick cuticle resisting digestive enzymes, and enormous numbers of eggs.

### 3. Saprophytic nutrition
**Saprophytes** feed on **dead and decaying organic matter**, digesting it outside the body with enzymes and absorbing the products: **Rhizopus** (bread mould), **mushrooms**, many bacteria. They are the **decomposers** that recycle nutrients.

### 4. Symbiosis (mutualism)
Two organisms live together and **both benefit**.
- **lichen** — an alga (makes food) and a fungus (absorbs water, gives protection)
- **nitrogen-fixing bacteria (Rhizobium)** in the root nodules of legumes
- protozoa in the gut of termites, and bacteria in the rumen of cattle, digest cellulose

### 5. Commensalism
One organism benefits; the other is **neither harmed nor helped**: remora and shark; epiphytes (ferns, orchids) on tree branches.

### 6. Carnivorous (insectivorous) plants
Green plants that also trap and digest insects to obtain **nitrogen**: bladderwort (Utricularia), sundew (Drosera), Venus flytrap, pitcher plant.

## Feeding mechanisms in animals
| Mechanism | Description | Examples |
|---|---|---|
| **absorbing** | digested food absorbed through the body surface | tapeworm |
| **biting and chewing** | strong mandibles cut and grind | grasshopper, cockroach |
| **piercing and sucking** | needle-like proboscis | mosquito, aphid, bed bug |
| **sucking (siphoning)** | long coiled proboscis sucks nectar | butterfly |
| **sponging (lapping)** | saliva dissolves food, then it is mopped up | housefly |
| **grinding** | radula rasps food | snail |
| **filter feeding** | small particles sieved from water | mosquito larva, mussel, whale-bone whale |
| **trapping and absorbing** | tentacles with stinging cells | Hydra |
| **engulfing (phagocytosis)** | pseudopodia surround food | Amoeba |
| **fluid feeding** | suck fluids from hosts | tick, leech |

### Feeding in Amoeba
Pseudopodia flow round the food particle and enclose it in a **food vacuole**; enzymes digest it; soluble products diffuse into the cytoplasm; undigested matter is left behind.

### Feeding in Hydra
Tentacles with **nematocysts** (stinging cells) paralyse small animals and push them through the mouth into the **enteron**, where digestion begins outside the cells and is completed inside them.

### Birds' beaks and feeding
short stout beak — seed-eaters (weaver bird); hooked beak — flesh-eaters (hawk); long slender beak — nectar feeders (sunbird); broad flat beak — ducks sieving mud.`,
          examples: `**Example 1.** Name the mode of nutrition of Rhizopus. *Answer:* **Saprophytic**.

**Example 2.** Give an example of a symbiotic relationship. *Answer:* **Rhizobium bacteria in the root nodules of legumes**.

**Example 3.** What is the feeding mechanism of a mosquito? *Answer:* **Piercing and sucking**.`,
        },
        questions: [
          ["E", "Organisms that manufacture their own food are called", "autotrophs", "heterotrophs", "parasites", "saprophytes", "Green plants are examples."],
          ["E", "An organism that lives in or on another living organism and harms it is a", "parasite", "saprophyte", "commensal", "symbiont", "The other organism is the host."],
          ["E", "An animal that feeds on both plants and animals is", "an omnivore", "a herbivore", "a carnivore", "a scavenger", "Man and the pig are examples."],
          ["M", "Mushrooms obtain their food by", "saprophytic nutrition", "photosynthesis", "holozoic nutrition", "chemosynthesis", "They feed on dead organic matter."],
          ["M", "The association between Rhizobium bacteria and leguminous plants is", "symbiosis", "parasitism", "commensalism", "predation", "Both partners benefit."],
          ["M", "The feeding mechanism of the housefly is described as", "sponging", "biting and chewing", "piercing and sucking", "filter feeding", "Saliva dissolves the food, which is then mopped up."],
          ["M", "Amoeba takes in food by", "engulfing it with pseudopodia", "using tentacles", "absorbing it through a cuticle", "biting with mandibles", "A food vacuole is formed."],
          ["H", "A tapeworm is able to live in the intestine of its host without being digested because it has", "a thick cuticle resistant to enzymes", "a well-developed gut", "strong mandibles", "chlorophyll", "It absorbs digested food through its body surface."],
          ["H", "Insectivorous plants trap insects mainly in order to obtain", "nitrogen compounds", "carbohydrates", "water", "oxygen", "They still make carbohydrates by photosynthesis."],
          ["H", "Bacteria that make food using energy from chemical reactions rather than light carry out", "chemosynthesis", "photosynthesis", "fermentation", "parasitism", "Nitrifying bacteria are examples."],
        ],
      },
      {
        week: 4,
        title: "Nutrition in plants",
        subtopics: ["Photosynthesis: conditions and process", "Experiments on photosynthesis", "Importance of photosynthesis", "Mineral nutrition in plants"],
        objectives: ["Describe the process and conditions of photosynthesis", "Describe experiments showing the conditions necessary for photosynthesis", "State the importance of photosynthesis", "List the mineral elements needed by plants and the effects of their deficiency"],
        lesson: {
          title: "Photosynthesis and Mineral Nutrition",
          summary: "Explain how green plants make food and what mineral elements they need.",
          minutes: 40,
          notes: `## Photosynthesis
The process by which green plants make **organic food (glucose)** from **carbon(IV) oxide and water**, using **light energy** absorbed by **chlorophyll**, and release **oxygen**.
**6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂** (in sunlight and chlorophyll)
It occurs mainly in the **palisade mesophyll** cells of the leaf, inside **chloroplasts**.

### Conditions
- **light** (sunlight)
- **chlorophyll**
- **carbon(IV) oxide** — enters through the **stomata**
- **water** — absorbed by the roots
- a suitable temperature

### The two stages
1. **light reaction** (in the grana): light energy splits water — **photolysis** — into hydrogen and oxygen; the oxygen is released; ATP is formed
2. **dark reaction** (in the stroma): needs no light; carbon(IV) oxide is **reduced** by the hydrogen to form glucose, using enzymes and the ATP
The glucose is converted to **starch** for storage, to sucrose for transport, and to cellulose, oils and proteins.

### How the leaf is adapted
broad, flat lamina; thin; many stomata; palisade cells packed with chloroplasts near the upper surface; air spaces in the spongy mesophyll; a network of veins.

## Experiments
### Testing a leaf for starch
1. boil the leaf in water — kills it and softens it
2. boil it in **ethanol** (over a water bath) — removes the **chlorophyll**
3. dip in hot water — softens it again
4. add **iodine solution** — **blue-black** shows starch
A plant must first be **destarched** by keeping it in the dark for 24–48 hours.

### Light is necessary
Cover part of a destarched leaf with black paper or foil; expose to sunlight; test. Only the uncovered part turns blue-black.
### Chlorophyll is necessary
Use a **variegated** leaf: only the green parts give a positive starch test.
### Carbon(IV) oxide is necessary
Enclose a destarched leaf in a flask containing **sodium hydroxide (or soda lime)**, which absorbs carbon(IV) oxide: no starch forms.
### Oxygen is given off
Place a water plant (Elodea) under an inverted funnel and test tube in sunlight; the gas collected **rekindles a glowing splint**.

## Importance of photosynthesis
- produces **food** for all living things, directly or indirectly
- releases **oxygen** for respiration
- removes carbon(IV) oxide, **purifying the air**
- provides materials — timber, fibres, fuels, drugs

## Mineral nutrition
Plants absorb mineral salts as ions from the soil.
### Macronutrients (needed in large amounts)
| Element | Function | Deficiency |
|---|---|---|
| **nitrogen** | proteins, chlorophyll | stunted growth; **yellow leaves (chlorosis)** |
| **phosphorus** | root growth, ATP, ripening | poor roots; purple leaves |
| **potassium** | enzyme action, strong stems | leaf edges yellow and scorched |
| **magnesium** | part of **chlorophyll** | chlorosis |
| **calcium** | cell walls | stunted roots; death of growing points |
| **sulphur** | proteins | yellow leaves |
| iron (needed in smaller quantity) | formation of chlorophyll | chlorosis |
### Micronutrients (trace elements)
zinc, copper, manganese, boron, molybdenum — needed in very small amounts.

### Water (solution) culture
Plants are grown in a **complete culture solution** containing all the elements, and in solutions each lacking one element, to study deficiency symptoms. The jars are darkened to stop algae growing, and air is bubbled through for the roots.

## Nitrogen cycle link
Plants cannot use nitrogen gas; they absorb **trioxonitrates(V)** produced by nitrogen-fixing and nitrifying bacteria.`,
          examples: `**Example 1.** Why is a leaf boiled in ethanol before testing for starch? *Answer:* To **remove the chlorophyll**, so the colour change with iodine can be seen.

**Example 2.** Which gas is given off in photosynthesis? *Answer:* **Oxygen**.

**Example 3.** Name the mineral element found in chlorophyll. *Answer:* **Magnesium**.`,
        },
        questions: [
          ["E", "The gas released by green plants during photosynthesis is", "oxygen", "carbon(IV) oxide", "nitrogen", "hydrogen", "It comes from the splitting of water."],
          ["E", "The green pigment that absorbs light energy in plants is", "chlorophyll", "haemoglobin", "carotene", "melanin", "It is found in chloroplasts."],
          ["E", "The raw materials for photosynthesis are water and", "carbon(IV) oxide", "oxygen", "glucose", "starch", "The gas enters through the stomata."],
          ["M", "A plant is kept in the dark for two days before a photosynthesis experiment in order to", "remove the starch from its leaves", "kill it", "add chlorophyll", "close its stomata permanently", "This is called destarching."],
          ["M", "In the starch test, the leaf is boiled in ethanol to", "remove the chlorophyll", "kill the cells", "add starch", "soften the leaf", "The colour change can then be seen clearly."],
          ["M", "The splitting of water by light energy during photosynthesis is called", "photolysis", "glycolysis", "hydrolysis", "plasmolysis", "It occurs in the light reaction."],
          ["M", "Yellowing of leaves due to lack of chlorophyll is known as", "chlorosis", "necrosis", "plasmolysis", "etiolation only", "Shortage of nitrogen, magnesium or iron can cause it."],
          ["H", "A variegated leaf is used in an experiment to show that photosynthesis requires", "chlorophyll", "light", "carbon(IV) oxide", "water", "Only the green parts form starch."],
          ["H", "In an experiment on photosynthesis, sodium hydroxide is placed in the flask enclosing a leaf in order to", "absorb carbon(IV) oxide", "supply oxygen", "provide water", "absorb light", "The leaf then forms no starch."],
          ["H", "The dark reaction of photosynthesis involves the", "reduction of carbon(IV) oxide to glucose", "splitting of water", "release of oxygen", "absorption of light by chlorophyll", "It takes place in the stroma and needs no light."],
        ],
      },
      {
        week: 5,
        title: "Enzymes",
        subtopics: ["Nature and characteristics of enzymes", "Factors affecting enzyme action", "Digestive enzymes", "Experiments and uses of enzymes"],
        objectives: ["Define enzymes and state their characteristics", "Explain the factors that affect enzyme action", "Name the digestive enzymes, their substrates and products", "Describe a simple experiment on enzyme action and state uses of enzymes"],
        lesson: {
          title: "Biological Catalysts",
          summary: "Describe enzymes, the factors that affect them and the digestive enzymes.",
          minutes: 40,
          notes: `## Enzymes
**Enzymes** are **organic catalysts**, **protein** in nature, produced by living cells, which **speed up chemical reactions** in the body without being used up.
The substance an enzyme acts on is its **substrate**.

## Characteristics
1. they are **proteins**
2. they are **specific** — each acts on one kind of substrate (the **lock-and-key** idea: the substrate fits the enzyme's **active site**)
3. they are needed in **small amounts** and remain **unchanged** at the end
4. they are **sensitive to temperature** — work best at an **optimum** (about 37–40 °C in man); **denatured** (destroyed) by high temperature; inactive at low temperature
5. they are **sensitive to pH** — each has an optimum pH
6. their action is usually **reversible**
7. they are soluble
8. some need **co-enzymes** (often vitamins) or mineral ions to work
9. they are stopped by **inhibitors** (poisons such as cyanide and mercury)

## Factors affecting enzyme action
- **temperature** — rate rises to the optimum, then falls sharply as the enzyme is denatured
- **pH** — pepsin works in acid (pH about 2); ptyalin near neutral; trypsin in alkaline conditions
- **enzyme concentration** and **substrate concentration**
- inhibitors and activators

## Naming
Most enzymes are named by adding **-ase** to the substrate: **maltase** (maltose), **lipase** (lipids), **sucrase** (sucrose), **protease** (proteins), amylase (starch, from *amylum*).

## Classes
- **hydrolases** — split substrates by adding water (all digestive enzymes)
- **oxidases / dehydrogenases** — respiration
- others build up molecules or transfer groups

## Digestive enzymes in man
| Site | Secretion | Enzyme | Substrate | Product |
|---|---|---|---|---|
| mouth | saliva | **ptyalin (salivary amylase)** | cooked starch | maltose |
| stomach | gastric juice | **pepsin** | proteins | peptones |
| stomach | gastric juice | **rennin** | soluble milk protein | curd (in infants) |
| duodenum | pancreatic juice | **amylase** | starch | maltose |
| duodenum | pancreatic juice | **trypsin** | proteins, peptones | polypeptides |
| duodenum | pancreatic juice | **lipase** | fats and oils | fatty acids and glycerol |
| ileum | intestinal juice | **maltase** | maltose | glucose |
| ileum | intestinal juice | **sucrase** | sucrose | glucose and fructose |
| ileum | intestinal juice | **lactase** | lactose | glucose and galactose |
| ileum | intestinal juice | **erepsin** | polypeptides | amino acids |
**Hydrochloric acid** in the stomach provides the acid medium for pepsin and kills germs. **Bile**, made by the liver, contains **no enzyme**; it **emulsifies fats** and neutralises the acid.

## A simple experiment
Put starch solution in two test tubes. Add fresh saliva to tube A and **boiled** saliva to tube B; keep both at about 37 °C. After 10 minutes, test portions with iodine and with Benedict's solution.
- A: no blue-black with iodine; brick-red precipitate with Benedict's — starch has been changed to reducing sugar
- B: still blue-black — boiling **denatured** the enzyme

## Importance and uses
- digestion, respiration, photosynthesis and all metabolism depend on enzymes
- **brewing and baking** (yeast enzymes)
- **cheese making** (rennin)
- **biological washing powders** (proteases and lipases remove stains)
- tenderising meat (papain from pawpaw)
- medicine and industry.`,
          examples: `**Example 1.** Name the enzyme that digests fats and state the products. *Answer:* **Lipase** — **fatty acids and glycerol**.

**Example 2.** Why does boiled saliva not digest starch? *Answer:* Heat has **denatured** the enzyme ptyalin.

**Example 3.** What is the role of bile in digestion? *Answer:* It **emulsifies fats**; it contains no enzyme.`,
        },
        questions: [
          ["E", "Enzymes are chemically", "proteins", "carbohydrates", "fats", "mineral salts", "They are made by living cells."],
          ["E", "The substance on which an enzyme acts is called its", "substrate", "product", "co-enzyme", "inhibitor", "It fits the active site of the enzyme."],
          ["E", "The enzyme present in saliva is", "ptyalin", "pepsin", "lipase", "trypsin", "It acts on cooked starch."],
          ["M", "The enzyme that digests proteins in the stomach is", "pepsin", "ptyalin", "maltase", "lipase", "It works in an acid medium."],
          ["M", "Lipase converts fats and oils to", "fatty acids and glycerol", "amino acids", "glucose", "maltose", "It is present in pancreatic juice."],
          ["M", "An enzyme heated to a high temperature becomes inactive because it is", "denatured", "saturated", "diluted", "activated", "Its protein structure is destroyed."],
          ["M", "The enzyme that converts maltose to glucose is", "maltase", "sucrase", "lactase", "amylase", "Most enzymes are named after their substrates."],
          ["H", "The specificity of enzymes is explained by the", "lock-and-key hypothesis", "cell theory", "theory of natural selection", "law of segregation", "Only the right substrate fits the active site."],
          ["H", "Bile aids digestion by", "emulsifying fats", "digesting proteins", "converting starch to maltose", "curdling milk", "It contains no enzymes."],
          ["H", "In an experiment, starch mixed with boiled saliva still turned blue-black with iodine after ten minutes. This shows that", "the enzyme was destroyed by heat", "saliva contains no enzyme", "starch cannot be digested", "iodine destroys enzymes", "Unboiled saliva would have digested the starch."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Basic ecological concepts",
        subtopics: ["Ecological terms", "Components of an ecosystem", "Biomes of the world and of Nigeria", "Ecological factors and measuring instruments"],
        objectives: ["Define the basic terms used in ecology", "Describe the biotic and abiotic components of an ecosystem", "Describe the major biomes of the world and of Nigeria", "List the ecological factors and the instruments used to measure them"],
        lesson: {
          title: "Organisms and Their Environment",
          summary: "Define ecological terms and describe ecosystems, biomes and ecological factors.",
          minutes: 40,
          notes: `## Ecology
**Ecology** is the study of the **relationships between living organisms and their environment**.
- **autecology** — the study of a single species and its environment
- **synecology** — the study of groups of different species living together

## Ecological terms
| Term | Meaning |
|---|---|
| **environment** | all the external factors, living and non-living, that affect an organism |
| **biosphere (ecosphere)** | the part of the earth where life exists |
| **lithosphere** | the solid, rocky part of the earth |
| **hydrosphere** | the water part: oceans, rivers, lakes |
| **atmosphere** | the layer of gases surrounding the earth |
| **habitat** | the place where an organism naturally lives |
| **niche** | the role or position of an organism in its habitat — how it feeds, where it lives, what it does |
| **population** | all the members of **one species** living in an area at a given time |
| **community** | all the populations of **different species** living together in an area |
| **ecosystem** | a community of organisms **interacting with** its non-living environment |
| **biome** | a large natural community with a characteristic climate and vegetation |

## Components of an ecosystem
### Biotic (living)
- **producers** — green plants and algae
- **consumers** — animals: primary (herbivores), secondary and tertiary (carnivores)
- **decomposers** — bacteria and fungi
### Abiotic (non-living)
- **climatic** — temperature, rainfall, light, wind, humidity
- **edaphic** — soil type, texture, pH, mineral content
- **topographic** — shape of the land, altitude, slope
- inorganic materials — water, gases, mineral salts

## Types of habitat
- **aquatic** — marine (salt water), estuarine (brackish), freshwater
- **terrestrial** — forest, savanna, desert, marsh
- **arboreal** — in trees

## Local biomes of Nigeria
| Biome | Location | Features |
|---|---|---|
| **mangrove swamp** | coast and Niger Delta | brackish water; trees with stilt and breathing roots |
| **tropical rainforest** | southern states | heavy rainfall; tall trees in layers; evergreen |
| **Guinea savanna** | middle belt | tall grasses with scattered trees; largest zone |
| **Sudan savanna** | far north | shorter grasses; fewer trees such as baobab and acacia |
| **Sahel savanna** | extreme north-east | very short grasses; thorny shrubs; lowest rainfall |

## Major biomes of the world
tropical rainforest; savanna (tropical grassland); desert; temperate grassland; temperate (deciduous) forest; coniferous forest (taiga); tundra; montane vegetation.

## Ecological factors and instruments
| Factor | Instrument |
|---|---|
| temperature | **thermometer** |
| rainfall | **rain gauge** |
| relative humidity | **hygrometer** (wet-and-dry bulb) |
| wind speed | **anemometer** |
| wind direction | **wind vane** |
| atmospheric pressure | **barometer** |
| light intensity | **photometer** (light meter) |
| turbidity of water | **Secchi disc** |
| pH | pH meter or indicator paper |
Collecting tools include sweep nets, pitfall traps, pooters, plankton nets and quadrats.

## Effects of ecological factors
- **rainfall** determines the type of vegetation
- **temperature** affects the rate of metabolism, transpiration and distribution
- **light** affects photosynthesis and the behaviour of animals
- **wind** aids pollination and dispersal and increases transpiration
- **soil pH and salinity** decide which plants can grow.`,
          examples: `**Example 1.** Distinguish between a population and a community. *Answer:* A population is **one species** in an area; a community is **all the species** living together there.

**Example 2.** Which instrument measures relative humidity? *Answer:* A **hygrometer**.

**Example 3.** In which Nigerian biome are trees with breathing roots found? *Answer:* The **mangrove swamp**.`,
        },
        questions: [
          ["E", "The study of the relationships between organisms and their environment is", "ecology", "genetics", "anatomy", "taxonomy", "It covers both living and non-living factors."],
          ["E", "The place where an organism naturally lives is its", "habitat", "niche", "population", "biome", "A pond is one for tilapia."],
          ["E", "The instrument used to measure rainfall is the", "rain gauge", "barometer", "anemometer", "hygrometer", "It collects rain in a measuring cylinder."],
          ["M", "All the members of one species living in an area at a given time form a", "population", "community", "habitat", "biosphere", "A community contains many of these."],
          ["M", "A community of organisms interacting with its non-living environment is", "an ecosystem", "a niche", "a population", "a lithosphere", "It has biotic and abiotic components."],
          ["M", "Soil factors that affect organisms are described as", "edaphic", "climatic", "topographic", "biotic", "They include soil texture and pH."],
          ["M", "The speed of wind is measured with", "an anemometer", "a wind vane", "a thermometer", "a Secchi disc", "A wind vane shows only direction."],
          ["H", "The role of an organism in its habitat, including how it feeds, is its", "niche", "biome", "environment", "population", "Two species with exactly the same one compete strongly."],
          ["H", "The vegetation zone that covers the largest area of Nigeria is the", "Guinea savanna", "mangrove swamp", "Sahel savanna", "tropical rainforest", "It lies in the middle belt."],
          ["H", "The study of a single species in relation to its environment is called", "autecology", "synecology", "taxonomy", "physiology", "Synecology deals with groups of species."],
        ],
      },
      {
        week: 2,
        title: "Functioning ecosystem",
        subtopics: ["Producers, consumers and decomposers", "Food chains and food webs", "Trophic levels and ecological pyramids", "Energy flow in an ecosystem"],
        objectives: ["Explain the roles of producers, consumers and decomposers", "Construct food chains and food webs", "Describe trophic levels and the pyramids of numbers, biomass and energy", "Explain energy flow and energy loss in an ecosystem"],
        lesson: {
          title: "Feeding Relationships and Energy Flow",
          summary: "Describe food chains, food webs, ecological pyramids and the flow of energy.",
          minutes: 40,
          notes: `## Feeding groups
- **producers (autotrophs)** — green plants, algae, phytoplankton: make food by photosynthesis
- **consumers (heterotrophs)**:
  - **primary consumers** — herbivores
  - **secondary consumers** — carnivores that eat herbivores
  - **tertiary consumers** — carnivores that eat other carnivores
- **decomposers** — bacteria and fungi that break down dead organisms and release nutrients to the soil

## Food chain
A **linear feeding relationship** showing the transfer of **energy** from producers through a series of consumers. The arrow means "is eaten by".
- on land: grass → grasshopper → toad → snake → hawk
- on land: guinea grass → antelope → lion
- in water: phytoplankton → zooplankton → tilapia → kingfisher
- in a pond: Spirogyra → tadpole → water beetle → fish
A food chain **always begins with a producer**.

## Food web
A **network of interconnected food chains**. It is more realistic and more **stable** than a single chain, because consumers have alternative foods.

## Trophic levels
Each feeding step is a **trophic level**: level 1 producers; level 2 primary consumers; level 3 secondary consumers; level 4 tertiary consumers.

## Ecological pyramids
- **pyramid of numbers** — the number of organisms at each trophic level; usually decreases upwards, but may be inverted (one tree supports many insects; one host carries many parasites)
- **pyramid of biomass** — the total dry mass at each level; more accurate
- **pyramid of energy** — the energy at each level; **always upright**, the most accurate

## Energy flow
The **sun** is the ultimate source of energy. Plants trap only about 1–5% of the light that reaches them.
- energy flows in **one direction** — it is **not recycled**
- at each transfer only about **10%** passes to the next level; about 90% is lost as **heat from respiration**, in movement, and in excretion and undigested matter
- therefore food chains are **short** (seldom more than four or five links), and there are fewer organisms at the top
- more people can be fed if they eat plants directly than if they eat animals fed on plants

### Example
If producers hold 10 000 kJ, primary consumers receive about 1000 kJ, secondary consumers 100 kJ and tertiary consumers 10 kJ.

## Laws of thermodynamics applied
1. **first law**: energy is neither created nor destroyed but changed from one form to another — light energy becomes chemical energy in food
2. **second law**: at each energy conversion, some energy is lost as heat — so the energy available decreases along a food chain

## Nutrient movement
Unlike energy, **nutrients are recycled**: decomposers return mineral salts from dead bodies to the soil for plants to use again.

## Disturbing a food web
Removing one species affects others: killing snakes may increase rats; overfishing a predator may cause its prey to multiply. Pesticides such as DDT become more concentrated up the chain (bioaccumulation).`,
          examples: `**Example 1.** Construct a food chain with four organisms from a grassland. *Answer:* **grass → grasshopper → lizard → hawk**.

**Example 2.** If producers contain 5000 kJ, about how much energy reaches the secondary consumers? *Solution:* 10% of 10% of 5000 = **50 kJ**.

**Example 3.** Why is a pyramid of energy never inverted? *Answer:* **Energy is lost** at every trophic level, so each level has less than the one below.`,
        },
        questions: [
          ["E", "Green plants in an ecosystem are known as", "producers", "primary consumers", "decomposers", "secondary consumers", "They make food by photosynthesis."],
          ["E", "The ultimate source of energy for all ecosystems is", "the sun", "the soil", "water", "decomposers", "Plants trap its light energy."],
          ["E", "Organisms that break down dead plants and animals are", "decomposers", "producers", "herbivores", "predators", "Bacteria and fungi are examples."],
          ["M", "In the food chain grass → grasshopper → toad → snake, the toad is a", "secondary consumer", "primary consumer", "producer", "tertiary consumer", "It feeds on a herbivore."],
          ["M", "A network of interconnected food chains is called a", "food web", "trophic level", "pyramid of numbers", "niche", "It shows alternative food sources."],
          ["M", "A food chain always begins with a", "producer", "herbivore", "carnivore", "decomposer", "Only producers can trap light energy."],
          ["M", "Each feeding step in a food chain is known as a", "trophic level", "habitat", "biome", "population", "Producers occupy the first."],
          ["H", "The percentage of energy that is passed from one trophic level to the next is about", "10%", "50%", "90%", "100%", "Most is lost as heat in respiration."],
          ["H", "The ecological pyramid that is always upright is the pyramid of", "energy", "numbers", "biomass in all habitats", "parasites", "Energy decreases at every level."],
          ["H", "If producers in a food chain contain 10 000 kJ of energy, the energy available to the tertiary consumers is about", "10 kJ", "100 kJ", "1000 kJ", "9000 kJ", "Only about one-tenth passes on at each of three transfers."],
        ],
      },
      {
        week: 3,
        title: "Nutrient cycling in nature",
        subtopics: ["The carbon cycle", "The oxygen cycle and carbon–oxygen balance", "The nitrogen cycle", "The water cycle and decomposition"],
        objectives: ["Describe the carbon cycle", "Explain the carbon–oxygen balance", "Describe the nitrogen cycle and the roles of bacteria", "Describe the water cycle and the role of decomposers"],
        lesson: {
          title: "The Cycles of Nature",
          summary: "Describe how carbon, oxygen, nitrogen and water circulate in nature.",
          minutes: 40,
          notes: `## Why cycles matter
The supply of materials on earth is limited. Elements needed by living things must be **used again and again**, passing between organisms and the environment.

## The carbon cycle
Carbon is the basis of all organic compounds. The air contains about **0.03%** carbon(IV) oxide.
### Processes that remove carbon(IV) oxide from the air
- **photosynthesis** by green plants
- dissolving in the oceans
### Processes that return carbon(IV) oxide to the air
- **respiration** of plants and animals
- **decay** of dead organisms by decomposers
- **combustion** of wood, coal, petroleum and gas
- volcanic eruptions
Carbon passes from plants to animals by **feeding**. Dead remains buried over millions of years form **fossil fuels**.
Burning fossil fuels and cutting down forests increase carbon(IV) oxide in the air, strengthening the **greenhouse effect** and causing **global warming**.

## The oxygen cycle
Air contains about **21%** oxygen.
- oxygen is **used** in respiration, combustion, decay and rusting
- oxygen is **released** by photosynthesis
### Carbon–oxygen balance
Photosynthesis uses carbon(IV) oxide and releases oxygen; respiration and burning do the reverse. The two sets of processes keep the proportions of the gases roughly constant. Deforestation and excessive burning upset this balance.

## The nitrogen cycle
Air is about **78%** nitrogen, but most organisms cannot use the gas directly. Plants take it in as **trioxonitrates(V)** and use it to make **proteins**.
| Process | What happens | Organisms |
|---|---|---|
| **nitrogen fixation** | nitrogen gas is converted to nitrogen compounds | **Rhizobium** in root nodules of legumes; free-living **Azotobacter** and **Clostridium**; blue-green algae; also **lightning** |
| **decay (ammonification)** | proteins and urea in dead bodies and wastes are changed to ammonium compounds | putrefying bacteria and fungi |
| **nitrification** | ammonium → dioxonitrates(III) → trioxonitrates(V) | **Nitrosomonas**, then **Nitrobacter** |
| **denitrification** | trioxonitrates(V) are changed back to nitrogen gas | **Pseudomonas** and other denitrifying bacteria in waterlogged soil |
Animals obtain nitrogen by eating plants or other animals. Farmers improve soil nitrogen by planting legumes (crop rotation), adding manure and fertilisers, and keeping soil well drained to discourage denitrification.

## The water cycle
- **evaporation** from seas, rivers and soil
- **transpiration** from plants; respiration and excretion by animals
- **condensation** into clouds
- **precipitation** as rain
- **run-off** into rivers and **percolation** into the soil as ground water
### Importance of water to organisms
solvent and medium for chemical reactions; raw material for photosynthesis; transport; cooling; turgidity and support; habitat; germination; dispersal.

## Decomposition
The breakdown of dead organic matter by **decomposers** (saprophytic bacteria and fungi), helped by detritus feeders such as earthworms and termites.
### Stages
dead body → ammonium compounds, carbon(IV) oxide, water, hydrogen sulphide and mineral salts.
### Importance
- releases nutrients for plants (maintains soil fertility)
- removes dead bodies and wastes
- forms **humus**
- basis of compost making, sewage treatment and biogas production`,
          examples: `**Example 1.** Name two processes that return carbon(IV) oxide to the atmosphere. *Answer:* **Respiration** and **combustion** (also decay).

**Example 2.** Which bacteria live in the root nodules of legumes? *Answer:* **Rhizobium**.

**Example 3.** What is denitrification? *Answer:* The conversion of **trioxonitrates(V) back to nitrogen gas** by denitrifying bacteria.`,
        },
        questions: [
          ["E", "The process that removes carbon(IV) oxide from the atmosphere is", "photosynthesis", "respiration", "combustion", "decay", "Green plants use the gas to make food."],
          ["E", "The percentage of nitrogen in the atmosphere is about", "78%", "21%", "0.03%", "1%", "It is the most abundant gas in air."],
          ["E", "Water vapour is returned to the atmosphere from plants by", "transpiration", "precipitation", "condensation", "percolation", "It is lost mainly through the stomata."],
          ["M", "The bacteria found in the root nodules of leguminous plants are", "Rhizobium", "Nitrobacter", "Pseudomonas", "Nitrosomonas", "They fix atmospheric nitrogen."],
          ["M", "The conversion of ammonium compounds to trioxonitrates(V) in the soil is", "nitrification", "denitrification", "nitrogen fixation", "ammonification", "Nitrosomonas and Nitrobacter carry it out."],
          ["M", "Plants absorb nitrogen from the soil mainly in the form of", "trioxonitrates(V)", "nitrogen gas", "proteins", "urea crystals", "They use it to make proteins."],
          ["M", "Which of the following increases the amount of carbon(IV) oxide in the air?", "burning of fossil fuels", "planting of trees", "photosynthesis", "dissolving of the gas in the sea", "Combustion releases the carbon stored in fuels."],
          ["H", "Denitrifying bacteria reduce soil fertility because they convert", "trioxonitrates(V) to nitrogen gas", "nitrogen gas to trioxonitrates(V)", "ammonia to trioxonitrates(V)", "proteins to ammonia", "They are most active in waterlogged soil."],
          ["H", "A free-living nitrogen-fixing bacterium in the soil is", "Azotobacter", "Nitrobacter", "Nitrosomonas", "Pseudomonas", "It does not live in root nodules."],
          ["H", "The balance between oxygen and carbon(IV) oxide in the atmosphere is maintained mainly by", "photosynthesis and respiration", "evaporation and condensation", "nitrification and denitrification", "transpiration and precipitation", "One process uses the gas that the other releases."],
        ],
      },
      {
        week: 4,
        title: "Microorganisms and health",
        subtopics: ["Groups of microorganisms", "Beneficial and harmful effects", "Diseases, vectors and their control", "Public health and immunity"],
        objectives: ["Identify the groups of microorganisms and where they are found", "State the beneficial and harmful effects of microorganisms", "Describe common diseases, their causes, transmission and control", "Explain the measures for maintaining public health"],
        lesson: {
          title: "Microbes, Disease and Public Health",
          summary: "Describe microorganisms, the diseases they cause and how good health is maintained.",
          minutes: 40,
          notes: `## Microorganisms
Organisms too small to be seen with the unaided eye. They are found **everywhere** — in air, water, soil, food, and on and in our bodies.
| Group | Features | Examples |
|---|---|---|
| **viruses** | smallest; multiply only in living cells | HIV, polio virus, measles virus |
| **bacteria** | single-celled; no true nucleus; shapes: cocci (round), bacilli (rods), spirilla (spiral), vibrio (comma) | Salmonella, Vibrio cholerae |
| **fungi** | moulds and yeasts | Rhizopus, ringworm fungus |
| **protozoa** | single-celled animals | Plasmodium, Trypanosoma, Entamoeba |
| some **algae** | simple green organisms | Chlorella |
They can be grown on **nutrient agar** in sterile Petri dishes; each visible spot is a **colony**.

## Beneficial effects
- **decomposition** and recycling of nutrients; soil fertility; nitrogen fixation
- **food**: bread, beer, palm wine, yoghurt, cheese, ogi, iru
- **medicine**: **antibiotics** (penicillin from *Penicillium*), vaccines, insulin
- sewage treatment; biogas; retting of fibres; tanning of leather
- bacteria in the gut make vitamins B and K and help ruminants digest cellulose

## Harmful effects
- cause **diseases** in man, animals and crops
- **spoil food**; cause decay of materials such as wood and cloth
- denitrifying bacteria reduce soil fertility

## Diseases
A **pathogen** is a disease-causing organism; a **vector** is an animal that carries a pathogen from one host to another.
| Disease | Cause | Transmission |
|---|---|---|
| **malaria** | Plasmodium (protozoan) | bite of the female **Anopheles** mosquito |
| **cholera** | Vibrio cholerae (bacterium) | contaminated water and food |
| **typhoid** | Salmonella typhi (bacterium) | contaminated water and food; houseflies |
| **tuberculosis** | bacterium | airborne droplets |
| **AIDS** | HIV (virus) | unprotected sex, infected blood, mother to child |
| **measles, poliomyelitis** | viruses | droplets; contaminated water (polio) |
| **sleeping sickness** | Trypanosoma | **tsetse fly** |
| **river blindness** | Onchocerca worm | **blackfly** (Simulium) |
| **yellow fever** | virus | **Aedes** mosquito |
| **dysentery** | Entamoeba or bacteria | contaminated food and water |
| **ringworm** | fungus | contact |
| gonorrhoea, syphilis | bacteria | sexual contact |

### Modes of transmission
air, water, food, contact, vectors, and body fluids.

### Control of vectors
- **mosquito**: drain stagnant water; spray oil on water to kill larvae; insecticides; treated nets; clear bushes
- **housefly**: cover food; dispose of refuse and faeces properly
- **tsetse fly**: clear bush; traps; insecticides
- **blackfly**: treat fast-flowing streams with insecticide

## Public health
- **refuse disposal**: incineration, burying (landfill), composting, recycling
- **sewage disposal**: pit latrines, water closets with septic tanks, sewage treatment works
- **safe water**: filtration, chlorination, boiling
- **food hygiene**: inspection of food and abattoirs; proper storage
- **immunisation**; health education; quarantine; environmental sanitation
- health organisations: WHO, UNICEF, Red Cross, NAFDAC, the Ministry of Health

## Immunity
The ability of the body to resist disease. **Antibodies** are produced by white blood cells against **antigens**. **Vaccination** introduces weakened or dead pathogens so the body builds up antibodies (active immunity). **Antibiotics** kill bacteria but not viruses; **antiseptics** are used on living tissue and **disinfectants** on non-living surfaces.`,
          examples: `**Example 1.** Name the vector of malaria. *Answer:* The **female Anopheles mosquito**.

**Example 2.** Give two beneficial effects of microorganisms. *Answer:* **Production of antibiotics** and **decomposition of dead matter**.

**Example 3.** State two ways of making water safe to drink. *Answer:* **Boiling** and **chlorination**.`,
        },
        questions: [
          ["E", "Malaria is transmitted by the", "female Anopheles mosquito", "tsetse fly", "housefly", "blackfly", "It injects Plasmodium while feeding on blood."],
          ["E", "A disease-causing organism is called a", "pathogen", "vector", "host", "antibody", "Bacteria and viruses are examples."],
          ["E", "The antibiotic penicillin is obtained from a", "fungus", "virus", "protozoan", "worm", "The mould is called Penicillium."],
          ["M", "Cholera is spread mainly through", "contaminated water and food", "mosquito bites", "airborne droplets", "sexual contact", "The bacterium is passed out in faeces."],
          ["M", "Sleeping sickness is transmitted by the", "tsetse fly", "blackfly", "Aedes mosquito", "louse", "The pathogen is Trypanosoma."],
          ["M", "Which of these diseases is caused by a virus?", "poliomyelitis", "cholera", "malaria", "ringworm", "Vaccination protects against it."],
          ["M", "Spraying oil on stagnant water controls mosquitoes by", "preventing the larvae from breathing", "poisoning the adults", "attracting fish", "warming the water", "The larvae cannot reach air at the surface."],
          ["H", "River blindness is caused by a worm that is transmitted by the", "blackfly", "tsetse fly", "Anopheles mosquito", "housefly", "The fly breeds in fast-flowing streams."],
          ["H", "Vaccination protects against disease because it", "stimulates the body to produce antibodies", "kills all bacteria in the body", "supplies vitamins", "destroys the vector", "Weakened or dead pathogens are introduced."],
          ["H", "Antibiotics are not used to treat measles because", "they do not act on viruses", "measles is caused by a fungus", "they are too expensive", "measles is not infectious", "Antibiotics kill bacteria only."],
        ],
      },
      {
        week: 5,
        title: "Conservation of natural resources",
        subtopics: ["Natural resources: renewable and non-renewable", "Pollution of air, water and land", "Methods of conservation", "Conservation agencies and laws"],
        objectives: ["Classify natural resources as renewable or non-renewable", "Describe the causes and effects of pollution", "Describe methods of conserving forests, wildlife, soil, water and minerals", "Name conservation agencies and state the benefits of conservation"],
        lesson: {
          title: "Caring for the Environment",
          summary: "Explain pollution and the conservation of natural resources.",
          minutes: 40,
          notes: `## Natural resources
Materials provided by nature that are useful to man.
- **renewable** — can be replaced naturally: forests, wildlife, water, soil, air, fish
- **non-renewable** — cannot be replaced once used up: **petroleum**, natural gas, coal, tin, limestone and other minerals

## Conservation
The **planned, wise use and protection** of natural resources so that they continue to be available for future generations.

### Why conserve?
- to prevent the **extinction** of species
- to maintain a steady supply of food, timber, fuel and raw materials
- to preserve the beauty of nature for recreation and tourism
- for research and education
- to maintain the balance of nature

## Pollution
The release of **harmful substances (pollutants)** into the environment.
### Air pollution
| Pollutant | Source | Effect |
|---|---|---|
| carbon(II) oxide | vehicle exhausts, generators | combines with haemoglobin; can kill |
| sulphur(IV) oxide, oxides of nitrogen | burning fuels, industries | **acid rain**; breathing problems |
| smoke, soot, dust | bush burning, factories, quarries | lung diseases; reduces light for plants |
| carbon(IV) oxide (excess) | burning fuels | global warming |
| chlorofluorocarbons | aerosols, old refrigerators | damage the ozone layer |
### Water pollution
- **sewage** — spreads disease; uses up dissolved oxygen
- **oil spillage** — kills aquatic life; ruins farmland and fishing
- industrial wastes, pesticides and fertilisers — poison organisms; cause algal blooms
### Land pollution
refuse, plastics, scrap metal, pesticides.
### Noise pollution
from generators, traffic, loudspeakers, aircraft — causes stress, lack of sleep, hearing loss.
### Control
proper disposal and treatment of wastes; recycling; clean-up of spills; filters on chimneys; laws and enforcement; public education.

## Methods of conservation
### Forests
- laws against indiscriminate felling; **forest reserves**
- **afforestation** (planting new forests) and **reafforestation** (replanting)
- selective logging; alternatives to firewood; control of bush burning
**Effects of deforestation:** erosion, loss of soil fertility, loss of wildlife habitat, desert encroachment, less rainfall.
### Wildlife
- **game reserves and national parks**: Yankari (Bauchi), Kainji Lake (Niger/Kwara), Old Oyo, Cross River, Gashaka-Gumti
- laws against hunting endangered species; closed seasons; zoos and breeding programmes
### Soil
cover crops, mulching, contour ploughing, terracing, crop rotation, wind-breaks; avoiding overgrazing and bush burning.
### Water
dams and reservoirs; treatment and recycling; protecting rivers from pollution; laws against using chemicals and small-mesh nets for fishing.
### Minerals
avoiding wasteful exploitation; **recycling** of metals; use of alternative energy (solar, wind, hydro).

## Agencies
- Federal Ministry of Environment; National Environmental Standards and Regulations Enforcement Agency (NESREA)
- Nigerian Conservation Foundation (NCF)
- National Park Service; Forestry Research Institute of Nigeria
- international: World Wide Fund for Nature (WWF), UNEP

## Problems of conservation
poverty and dependence on firewood, population growth, poor enforcement of laws, poaching, oil exploration, lack of awareness.`,
          examples: `**Example 1.** Classify petroleum and forest as renewable or non-renewable. *Answer:* Petroleum is **non-renewable**; forest is **renewable**.

**Example 2.** State two effects of deforestation. *Answer:* **Soil erosion** and **loss of wildlife habitat**.

**Example 3.** Name one game reserve in Nigeria. *Answer:* **Yankari Game Reserve** in Bauchi State.`,
        },
        questions: [
          ["E", "An example of a non-renewable natural resource is", "petroleum", "forest", "water", "wildlife", "It cannot be replaced once used up."],
          ["E", "The planting of trees on land that had no forest is called", "afforestation", "deforestation", "erosion", "bush burning", "It helps to check desert encroachment."],
          ["E", "The Yankari Game Reserve is located in", "Bauchi State", "Lagos State", "Oyo State", "Cross River State", "It protects elephants and other wildlife."],
          ["M", "The wise use and protection of natural resources for the future is", "conservation", "pollution", "exploitation", "extinction", "It ensures continued supply."],
          ["M", "Carbon(II) oxide is dangerous to man because it", "combines with haemoglobin and reduces oxygen transport", "causes acid rain", "destroys the ozone layer", "makes water hard", "The body is starved of oxygen."],
          ["M", "Oil spillage harms aquatic organisms mainly by", "cutting off oxygen and poisoning them", "increasing the dissolved oxygen", "cooling the water", "adding mineral salts", "The oil film prevents gas exchange."],
          ["M", "Which of the following is a method of conserving soil?", "planting cover crops", "bush burning", "overgrazing", "clean clearing of land", "They protect the soil from erosion."],
          ["H", "A likely long-term effect of widespread deforestation is", "desert encroachment and soil erosion", "increased rainfall", "increase in wildlife", "improved soil fertility", "Trees no longer protect the soil."],
          ["H", "Chlorofluorocarbons pollute the atmosphere by", "damaging the ozone layer", "causing acid rain", "forming soot", "reducing haemoglobin", "More ultraviolet rays then reach the earth."],
          ["H", "Closed seasons for hunting and fishing help conservation because they", "allow the animals to breed and increase", "make the animals tame", "increase the price of meat", "stop the animals from feeding", "Populations recover during the protected period."],
        ],
      },
    ],
  },
];
