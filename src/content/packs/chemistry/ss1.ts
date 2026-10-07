import type { TermPlan } from "../types";

/** SS1 Chemistry — original Precious PS content following the national senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Introduction to Chemistry and laboratory practice",
        subtopics: ["Meaning, branches and importance of Chemistry", "The scientific method", "Laboratory apparatus", "Safety in the laboratory"],
        objectives: ["Define Chemistry and name its branches and careers", "Describe the steps of the scientific method", "Identify common apparatus and their uses", "State laboratory safety rules"],
        lesson: {
          title: "Chemistry and the Laboratory",
          summary: "Introduce Chemistry, the scientific method and safe laboratory practice.",
          minutes: 40,
          notes: `## What is Chemistry?
**Chemistry** is the branch of science that studies the **composition, structure and properties of matter** and the **changes** it undergoes.

### Branches
- **physical chemistry** — energy changes, rates, equilibria, the structure of matter
- **inorganic chemistry** — the elements and their compounds (other than most carbon compounds)
- **organic chemistry** — compounds of carbon
- **analytical chemistry** — identifying substances and measuring their amounts
- **biochemistry**, industrial and environmental chemistry

### Importance
Chemistry gives us **medicines**, **fertilisers** and pesticides, **fuels**, **plastics** and fibres, soaps and detergents, paints, cement, glass and metals; it helps us to purify water, preserve food and control pollution.
**Careers:** medicine, pharmacy, nursing, engineering (chemical, petroleum, metallurgical), agriculture, food technology, laboratory science, teaching, forensic science.

### Adverse effects
pollution of air, water and land; drug abuse; chemical weapons; corrosion.

## The scientific method
1. **observation** of a phenomenon
2. stating the **problem**
3. forming a **hypothesis** — a reasonable, testable guess
4. **experiment** — a controlled test, with measurements
5. recording and **analysing** results
6. **conclusion** — the hypothesis is accepted, modified or rejected
A hypothesis supported by many experiments becomes a **theory** (an explanation); a statement of what always happens under stated conditions is a **law**.

## Laboratory apparatus
| Apparatus | Use |
|---|---|
| **beaker**, **conical flask** | holding, mixing and heating liquids |
| **measuring cylinder** | measuring approximate volumes |
| **burette** | delivering accurately measured, variable volumes (titration) |
| **pipette** | delivering one fixed, accurate volume |
| **volumetric (standard) flask** | preparing standard solutions |
| **Bunsen burner** | heating |
| **tripod stand** and **wire gauze** | supporting vessels during heating |
| **crucible**; **evaporating dish** | strong heating of solids; evaporating solutions |
| **retort stand and clamp** | holding apparatus |
| **desiccator** | keeping substances dry |
| **Kipp's apparatus** | intermittent supply of a gas |
| **separating funnel** | separating immiscible liquids |
| **test-tube**, **boiling tube** | small-scale reactions |

### The Bunsen flame
- **air hole closed**: a **luminous** flame — yellow, unsteady, sooty and less hot (incomplete combustion)
- **air hole open**: a **non-luminous** flame — blue, steady, clean and hotter (complete combustion); it is used for heating

## Safety in the laboratory
- do not enter or work without the teacher's permission
- wear a laboratory coat and, when necessary, goggles and gloves
- **never taste** chemicals; do not eat or drink in the laboratory
- smell gases cautiously by **wafting** them towards the nose
- point the mouth of a heated test-tube away from people
- add **acid to water**, never water to concentrated acid
- read labels twice; do not return unused chemicals to stock bottles
- keep flammable liquids away from flames
- report all accidents and breakages; wash spills with plenty of water
- know the position of the fire extinguisher, sand bucket and first-aid box
- wash your hands after practical work
**Hazard symbols** warn that a substance is toxic, corrosive, flammable, oxidising, explosive or harmful.`,
          examples: `**Example 1.** Which apparatus delivers exactly 25.0 cm³ of a solution? *Answer:* A **pipette**.

**Example 2.** What is a hypothesis? *Answer:* A **reasonable, testable guess** made to explain an observation.

**Example 3.** Which Bunsen flame is used for heating, and why? *Answer:* The **non-luminous** flame — it is hotter and does not deposit soot.`,
        },
        questions: [
          ["E", "Chemistry is the study of", "the composition, properties and changes of matter", "living organisms only", "the stars and planets", "forces and motion only", "It deals with what substances are made of and how they change."],
          ["E", "The apparatus used to deliver a fixed, accurate volume of liquid is the", "pipette", "beaker", "measuring cylinder", "conical flask", "A burette delivers variable volumes."],
          ["E", "The branch of chemistry that deals with compounds of carbon is", "organic chemistry", "inorganic chemistry", "physical chemistry", "analytical chemistry", "Most carbon compounds belong to it."],
          ["M", "A reasonable, testable guess made to explain an observation is called a", "hypothesis", "law", "theory", "conclusion", "It is tested by experiment."],
          ["M", "A non-luminous Bunsen flame is obtained when the", "air hole is fully open", "air hole is closed", "gas tap is closed", "burner is tilted", "Enough air gives complete combustion."],
          ["M", "The apparatus used for keeping substances dry is the", "desiccator", "crucible", "burette", "retort stand", "It contains a drying agent."],
          ["M", "Kipp's apparatus is used for", "the intermittent supply of a gas", "measuring volumes of liquids", "heating solids strongly", "separating immiscible liquids", "The gas is produced only when needed."],
          ["H", "When diluting a concentrated acid, the correct procedure is to", "add the acid slowly to water", "add water quickly to the acid", "heat the acid first", "mix them in a closed bottle", "Adding water to acid causes violent spurting."],
          ["H", "A luminous Bunsen flame deposits soot on apparatus because", "the gas undergoes incomplete combustion", "it is too hot", "it contains too much oxygen", "the gas is impure", "Unburnt carbon particles glow and settle."],
          ["H", "A scientific law differs from a theory in that a law", "states what always happens while a theory explains why", "is only a guess", "has never been tested", "applies only to living things", "Theories give explanations; laws summarise observations."],
        ],
      },
      {
        week: 2,
        title: "The nature of matter",
        subtopics: ["States of matter and changes of state", "Physical and chemical changes", "Elements, compounds and mixtures", "Purity of substances"],
        objectives: ["Describe the states of matter and the changes between them", "Distinguish physical from chemical changes", "Distinguish elements, compounds and mixtures", "State the criteria of purity"],
        lesson: {
          title: "What Matter Is Made Of",
          summary: "Classify matter and the changes it undergoes.",
          minutes: 40,
          notes: `## Matter
**Matter** is anything that has **mass** and **occupies space**. It exists as **solid**, **liquid** or **gas**.
| | Solid | Liquid | Gas |
|---|---|---|---|
| shape | fixed | takes the shape of the container | none |
| volume | fixed | fixed | fills the container |
| particles | closely packed, vibrating | close, moving about | far apart, moving rapidly |
| compressibility | negligible | slight | high |

### Changes of state
melting, freezing, boiling/evaporation, condensation, **sublimation** (solid ⇌ gas directly: iodine, ammonium chloride, camphor, solid carbon(IV) oxide). These changes involve energy but form **no new substance**.

## Physical and chemical changes
| Physical change | Chemical change |
|---|---|
| **no new substance** is formed | a **new substance** is formed |
| easily **reversible** | usually **not easily reversible** |
| no change in the mass of the substance | mass of the individual substance changes |
| little heat change | considerable **heat change** |
**Physical:** melting of ice, boiling of water, dissolving salt or sugar, magnetising iron, sublimation of iodine, breaking glass.
**Chemical:** **rusting** of iron, **burning** of wood or candle, souring of milk, fermentation, digestion of food, cooking an egg, adding acid to a carbonate.

## Elements
An **element** is a substance that **cannot be split into simpler substances** by ordinary chemical means. There are about 118, of which about 90 occur naturally. They are **metals** (iron, copper, sodium), **non-metals** (oxygen, sulphur, carbon) and a few **metalloids** (silicon).
Each has a **symbol**: H, O, C, N; some from Latin names — **Na** (natrium, sodium), **K** (kalium, potassium), **Fe** (ferrum, iron), **Cu** (cuprum, copper), **Ag** (argentum, silver), **Au** (aurum, gold), **Pb** (plumbum, lead), **Hg** (hydrargyrum, mercury).

## Compounds
A **compound** is formed when two or more elements are **chemically combined** in a **fixed proportion by mass**: water (H₂O), common salt (NaCl), carbon(IV) oxide (CO₂), limestone (CaCO₃).

## Mixtures
A **mixture** contains two or more substances **physically** mixed in **any proportion**: air, sea water, soil, crude oil, blood, milk, brass.
- **homogeneous**: uniform throughout (salt solution, air)
- **heterogeneous**: not uniform (sand and water)

## Differences between compounds and mixtures
| Compound | Mixture |
|---|---|
| components chemically combined | components physically mixed |
| fixed composition by mass | variable composition |
| properties differ from those of its elements | components keep their own properties |
| separated only by chemical means | separated by physical means |
| formation involves heat change | little or no heat change |
| has a chemical formula | has no formula |
*Example:* iron filings and sulphur can be separated with a magnet; when heated together they form **iron(II) sulphide**, which is not attracted by a magnet.

## Purity
A **pure substance** has a **sharp, fixed melting point and boiling point** and a definite density. **Impurities lower the melting point and raise the boiling point**, and make the substance melt over a range. Chromatography showing a single spot also indicates purity.`,
          examples: `**Example 1.** Is the rusting of iron a physical or chemical change? *Answer:* **Chemical** — a new substance (hydrated iron(III) oxide) is formed.

**Example 2.** Classify air, water and copper. *Answer:* **Mixture, compound and element**.

**Example 3.** How does an impurity affect the boiling point of water? *Answer:* It **raises** it.`,
        },
        questions: [
          ["E", "Anything that has mass and occupies space is called", "matter", "energy", "volume", "an element", "It exists as solid, liquid or gas."],
          ["E", "Which of the following is a chemical change?", "rusting of iron", "melting of ice", "dissolving sugar in water", "boiling of water", "A new substance is formed."],
          ["E", "Water is classified as", "a compound", "an element", "a mixture", "a solution", "Hydrogen and oxygen are chemically combined in it."],
          ["M", "The chemical symbol for potassium is", "K", "P", "Po", "Pt", "It comes from the Latin name kalium."],
          ["M", "Which of the following is a mixture?", "air", "sodium chloride", "water", "carbon(IV) oxide", "Its components are not chemically combined."],
          ["M", "A substance that changes directly from solid to gas on heating is said to", "sublime", "evaporate", "condense", "melt", "Iodine and ammonium chloride behave this way."],
          ["M", "A pure solid is recognised by its", "sharp melting point", "colour", "smell", "large crystals", "Impure solids melt over a range of temperature."],
          ["H", "A compound differs from a mixture in that a compound", "has a fixed composition by mass", "can be separated by physical means", "has variable composition", "retains the properties of its components", "Its elements combine in a definite ratio."],
          ["H", "The presence of an impurity in a liquid", "raises its boiling point", "lowers its boiling point", "has no effect on its boiling point", "makes its boiling point sharper", "It also lowers the freezing point."],
          ["H", "When iron filings and sulphur are heated together, the product cannot be separated with a magnet because", "a new compound, iron(II) sulphide, has been formed", "the sulphur has evaporated", "iron loses its mass", "the mixture has cooled", "The properties of a compound differ from those of its elements."],
        ],
      },
      {
        week: 3,
        title: "Separation techniques",
        subtopics: ["Separating solids from liquids", "Separating liquids", "Sublimation, magnetism and other methods", "Chromatography and choice of method"],
        objectives: ["Describe filtration, evaporation, crystallisation and decantation", "Describe simple and fractional distillation and the separating funnel", "Describe sublimation, magnetic separation and precipitation", "Explain chromatography and choose a suitable method"],
        lesson: {
          title: "Separating Mixtures",
          summary: "Describe the common methods of separating mixtures and choose the right one.",
          minutes: 40,
          notes: `## Why separate?
To obtain a pure substance or a useful component. The method depends on a **difference in physical properties** — particle size, solubility, boiling point, density, magnetic property.

## Solid from liquid
- **decantation**: carefully pouring off the liquid after a dense insoluble solid has settled
- **filtration**: separating an **insoluble solid** from a liquid using filter paper; the solid left is the **residue**, the liquid passing through is the **filtrate** — e.g. sand from water
- **centrifugation**: spinning at high speed so that suspended particles settle — e.g. blood cells from plasma
- **evaporation (to dryness)**: recovering a **soluble solid** that is not decomposed by heat — e.g. salt from brine
- **crystallisation**: obtaining pure crystals of a salt, especially one that would decompose or lose its water of crystallisation on strong heating: evaporate to saturation, cool, filter and dry. **Fractional crystallisation** separates two soluble salts of different solubility.

## Liquids
- **simple distillation**: recovering a **solvent** from a solution — e.g. pure water from sea water. The liquid is boiled and its vapour condensed in a **Liebig condenser**.
- **fractional distillation**: separating **miscible liquids** whose boiling points are close, using a **fractionating column** — ethanol (78 °C) and water (100 °C); **crude oil** into its fractions; **liquid air** into nitrogen and oxygen. The liquid with the **lower boiling point distils first**.
- **separating funnel**: separating **immiscible liquids** of different density — kerosene and water, oil and water. The denser liquid is run off from the bottom.

## Other methods
- **sublimation**: separating a solid that sublimes from one that does not — **iodine** or **ammonium chloride** from sodium chloride
- **magnetic separation**: removing a magnetic substance — iron filings from sulphur; used in recycling and ore dressing
- **sieving**: solids of different particle size — garri, sand and gravel
- **precipitation**: making a dissolved substance insoluble, e.g. by adding another solvent
- **froth flotation**: concentrating ores
- **winnowing**: grain from chaff

## Chromatography
Separates the components of a mixture of dissolved substances — **dyes in ink**, **plant pigments**, amino acids — because they travel at different speeds over an absorbent material (paper) as a **solvent** moves through it. The more soluble (less strongly adsorbed) component travels further.
- **Rf value** = distance moved by the substance ÷ distance moved by the solvent front
- a **pure** substance gives **one spot**
- used to identify substances, test purity, and in medicine and forensic science

## Choosing a method
| Mixture | Method |
|---|---|
| sand and water | filtration |
| salt solution (to get salt) | evaporation |
| salt solution (to get water) | simple distillation |
| sand and salt | add water, filter, evaporate the filtrate |
| ethanol and water | fractional distillation |
| oil and water | separating funnel |
| iodine and sand | sublimation |
| iron and sulphur | magnet |
| coloured dyes | chromatography |
| crude oil | fractional distillation |

## Purification in daily life and industry
water treatment; refining of petroleum and sugar; extraction of salt from sea water at salt pans; distilling of spirits.`,
          examples: `**Example 1.** How would you separate a mixture of sand and common salt? *Answer:* **Dissolve in water, filter** off the sand, then **evaporate** the filtrate to obtain the salt.

**Example 2.** Which method separates ethanol from water? *Answer:* **Fractional distillation**.

**Example 3.** A dye spot moves 6 cm while the solvent front moves 10 cm. Find its Rf value. *Solution:* 6 ÷ 10 = **0.6**.`,
        },
        questions: [
          ["E", "An insoluble solid is separated from a liquid by", "filtration", "evaporation", "sublimation", "chromatography", "The solid remains on the filter paper as residue."],
          ["E", "The liquid that passes through the filter paper during filtration is called the", "filtrate", "residue", "distillate", "solute", "The solid left behind is the residue."],
          ["E", "Kerosene and water are best separated by using a", "separating funnel", "filter paper", "magnet", "sieve", "They are immiscible liquids of different density."],
          ["M", "The components of crude oil are separated by", "fractional distillation", "simple distillation", "filtration", "crystallisation", "They have different boiling points."],
          ["M", "A mixture of iodine and sodium chloride is best separated by", "sublimation", "filtration", "decantation", "distillation", "Iodine sublimes on heating; sodium chloride does not."],
          ["M", "The technique used to separate the coloured components of ink is", "chromatography", "centrifugation", "evaporation", "sieving", "The dyes move at different speeds on paper."],
          ["M", "Pure water can be obtained from sea water by", "simple distillation", "filtration", "decantation", "magnetic separation", "The water is boiled off and condensed."],
          ["H", "In the fractional distillation of an ethanol–water mixture, ethanol distils first because it", "has the lower boiling point", "is denser than water", "is less soluble", "has larger molecules", "Ethanol boils at about 78 °C."],
          ["H", "In a chromatogram, a substance moved 6 cm from the origin while the solvent front moved 10 cm. Its Rf value is", "0.6", "1.67", "4", "60", "Divide the distance moved by the substance by that of the solvent."],
          ["H", "Crystallisation rather than evaporation to dryness is used to obtain copper(II) tetraoxosulphate(VI) crystals because", "strong heating would drive off the water of crystallisation", "the salt is insoluble", "the salt sublimes", "water cannot be evaporated", "The blue crystals would turn to a white powder."],
        ],
      },
      {
        week: 4,
        title: "Atoms, molecules and atomic structure",
        subtopics: ["Dalton's atomic theory", "Atoms, molecules and ions", "Sub-atomic particles", "Atomic number, mass number and isotopes"],
        objectives: ["State Dalton's atomic theory and its modifications", "Distinguish atoms, molecules and ions", "Describe the proton, neutron and electron", "Explain atomic number, mass number, isotopes and relative atomic mass"],
        lesson: {
          title: "The Building Blocks of Matter",
          summary: "Describe the structure of the atom and explain isotopes.",
          minutes: 40,
          notes: `## Dalton's atomic theory (1808)
1. all matter is made up of tiny, indivisible particles called **atoms**
2. atoms can neither be created nor destroyed
3. atoms of the **same element are alike** in every respect and differ from atoms of other elements
4. atoms combine in **simple whole-number ratios** to form compounds

### Modifications
- atoms are **divisible** — they contain protons, neutrons and electrons
- atoms can be changed in **nuclear reactions**
- atoms of the same element may differ in mass — **isotopes**
- in large organic molecules the ratios are not always simple

## Atoms, molecules and ions
- an **atom** is the smallest particle of an element that can take part in a chemical reaction
- a **molecule** is the smallest particle of a substance that can exist alone and retain the properties of that substance
  - **atomicity**: the number of atoms in one molecule of an element — **monatomic** (He, Ne, Ar), **diatomic** (H₂, O₂, N₂, Cl₂), **triatomic** (O₃), P₄, S₈
- an **ion** is an atom or group of atoms carrying an **electric charge**: a **cation** is positive (Na⁺, Ca²⁺, NH₄⁺), an **anion** is negative (Cl⁻, SO₄²⁻)

## Sub-atomic particles
| Particle | Relative mass | Charge | Position | Discovered by |
|---|---|---|---|---|
| **proton** | 1 | +1 | nucleus | Rutherford |
| **neutron** | 1 | 0 | nucleus | Chadwick |
| **electron** | 1/1840 | −1 | shells round the nucleus | J.J. Thomson |
The **nucleus** is tiny, dense and positively charged; it contains almost all the mass of the atom (**Rutherford's** alpha-scattering experiment). **Bohr** proposed that electrons move in fixed energy levels (shells).
An atom is **electrically neutral**: number of protons = number of electrons.

## Atomic number and mass number
- **atomic number (Z)** = number of **protons** — it identifies the element
- **mass number (A)** = number of **protons + neutrons**
- number of neutrons = A − Z
An atom is written with A above and Z below the symbol: sodium, with A = 23 and Z = 11, has 11 protons, 11 electrons and 12 neutrons.

### Ions
- Na (11 electrons) loses one electron → **Na⁺** with 10 electrons
- Cl (17 electrons) gains one electron → **Cl⁻** with 18 electrons

## Isotopes
**Isotopes** are atoms of the **same element** (same atomic number) with **different mass numbers** because they have different numbers of **neutrons**. They have the same chemical properties but slightly different physical properties.
- hydrogen: protium (¹H), deuterium (²H), tritium (³H)
- carbon: ¹²C, ¹³C, ¹⁴C
- chlorine: ³⁵Cl and ³⁷Cl
- oxygen: ¹⁶O, ¹⁷O, ¹⁸O

## Relative atomic mass
The **relative atomic mass (Aᵣ)** of an element is the average mass of its atoms compared with **one-twelfth of the mass of an atom of carbon-12**. It is a weighted average of the isotopes, which is why it is often not a whole number.
*Example:* chlorine is 75% ³⁵Cl and 25% ³⁷Cl:
Aᵣ = (75 × 35 + 25 × 37) ÷ 100 = **35.5**

The **relative molecular mass** is the sum of the relative atomic masses of the atoms in a molecule: H₂O = 2 + 16 = 18.`,
          examples: `**Example 1.** An atom has atomic number 17 and mass number 35. How many neutrons has it? *Solution:* 35 − 17 = **18**.

**Example 2.** How many electrons are in a Ca²⁺ ion (Z = 20)? *Solution:* 20 − 2 = **18**.

**Example 3.** An element has isotopes of mass 10 (20%) and 11 (80%). Find its relative atomic mass. *Solution:* (20 × 10 + 80 × 11) ÷ 100 = **10.8**.`,
        },
        questions: [
          ["E", "The particle in the nucleus of an atom that carries a positive charge is the", "proton", "electron", "neutron", "ion", "Its relative mass is 1."],
          ["E", "The atomic number of an element is the number of", "protons in the nucleus", "neutrons in the nucleus", "protons and neutrons", "shells in the atom", "It identifies the element."],
          ["E", "An atom or group of atoms carrying an electric charge is called", "an ion", "a molecule", "an isotope", "a neutron", "Cations are positive and anions negative."],
          ["M", "The number of neutrons in an atom of sodium with mass number 23 and atomic number 11 is", "12", "11", "23", "34", "Subtract the atomic number from the mass number."],
          ["M", "Atoms of the same element that have different numbers of neutrons are called", "isotopes", "isomers", "allotropes", "ions", "They have the same atomic number."],
          ["M", "The neutron was discovered by", "Chadwick", "Thomson", "Dalton", "Bohr", "He identified it in 1932."],
          ["M", "The number of electrons in a sodium ion, Na⁺ (atomic number 11), is", "10", "11", "12", "23", "The atom loses one electron to form the ion."],
          ["H", "Chlorine consists of 75% of an isotope of mass 35 and 25% of an isotope of mass 37. Its relative atomic mass is", "35.5", "36.0", "35.0", "36.5", "(75 × 35 + 25 × 37) ÷ 100."],
          ["H", "Which statement of Dalton's atomic theory is contradicted by the existence of isotopes?", "atoms of the same element are alike in every respect", "atoms combine in simple ratios", "matter is made of atoms", "atoms of different elements differ", "Isotopes of one element differ in mass."],
          ["H", "An ion X²⁻ contains 18 electrons and 16 neutrons. The mass number of X is", "32", "34", "18", "36", "The atom has 16 protons, so A = 16 + 16."],
        ],
      },
      {
        week: 5,
        title: "Electronic configuration and the periodic table",
        subtopics: ["Arrangement of electrons in shells", "Sub-shells and orbitals", "The periodic table: groups and periods", "Families of elements"],
        objectives: ["Write the electronic configuration of the first twenty elements", "Write configurations using s, p and d notation", "Relate an element's configuration to its group and period", "Describe the main families of elements"],
        lesson: {
          title: "Electrons and the Periodic Table",
          summary: "Write electronic configurations and relate them to the periodic table.",
          minutes: 40,
          notes: `## Electron shells
Electrons occupy **energy levels (shells)** round the nucleus, labelled **K, L, M, N** (n = 1, 2, 3, 4). The maximum number of electrons in a shell is **2n²**: K — 2, L — 8, M — 18, N — 32. For the first twenty elements the pattern is **2, 8, 8, 2**.

### The first twenty elements
| Z | Element | Configuration | | Z | Element | Configuration |
|---|---|---|---|---|---|---|
| 1 | H | 1 | | 11 | Na | 2, 8, 1 |
| 2 | He | 2 | | 12 | Mg | 2, 8, 2 |
| 3 | Li | 2, 1 | | 13 | Al | 2, 8, 3 |
| 4 | Be | 2, 2 | | 14 | Si | 2, 8, 4 |
| 5 | B | 2, 3 | | 15 | P | 2, 8, 5 |
| 6 | C | 2, 4 | | 16 | S | 2, 8, 6 |
| 7 | N | 2, 5 | | 17 | Cl | 2, 8, 7 |
| 8 | O | 2, 6 | | 18 | Ar | 2, 8, 8 |
| 9 | F | 2, 7 | | 19 | K | 2, 8, 8, 1 |
| 10 | Ne | 2, 8 | | 20 | Ca | 2, 8, 8, 2 |

The electrons in the outermost shell are the **valence electrons**; they decide the chemical behaviour of the element.

## Sub-shells and orbitals
Each shell contains **sub-shells**: **s** (holds 2 electrons), **p** (6), **d** (10), **f** (14). An **orbital** is a region where there is a high probability of finding an electron; each orbital holds at most **two electrons** with opposite spins. An s sub-shell has one orbital (spherical); a p sub-shell has three (dumb-bell shaped).

### Order of filling
1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p …
- **Aufbau principle**: electrons enter the lowest available energy level first
- **Pauli exclusion principle**: no two electrons in an atom can have the same four quantum numbers — an orbital holds at most two electrons with opposite spins
- **Hund's rule**: electrons occupy orbitals of equal energy singly before pairing

### Examples
- Na (11): 1s² 2s² 2p⁶ 3s¹
- Cl (17): 1s² 2s² 2p⁶ 3s² 3p⁵
- Ca (20): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s²

## The periodic table
Elements are arranged in order of **increasing atomic number**. The **periodic law**: the properties of the elements are a periodic function of their atomic numbers.
- **groups** — vertical columns; elements in the same group have the **same number of valence electrons** and similar chemical properties
- **periods** — horizontal rows; the **period number** equals the **number of electron shells**
*Example:* sulphur, 2, 8, 6, is in **Group 6** and **Period 3**.

## Families
| Group | Name | Valence electrons | Examples |
|---|---|---|---|
| 1 | **alkali metals** | 1 | Li, Na, K |
| 2 | **alkaline-earth metals** | 2 | Be, Mg, Ca |
| 7 | **halogens** | 7 | F, Cl, Br, I |
| 0 (8) | **noble (rare) gases** | 8 (He has 2) | He, Ne, Ar |
Between Groups 2 and 3 lie the **transition metals** (Fe, Cu, Zn).

## Stability and ion formation
Noble gases have a complete outer shell (an **octet**, or a duplet for helium) and are very unreactive. Other atoms tend to attain a noble-gas configuration:
- metals **lose** valence electrons, forming **positive** ions: Na → Na⁺ (2, 8)
- non-metals **gain** electrons, forming **negative** ions: Cl → Cl⁻ (2, 8, 8)
The **valency** of an element is related to the number of electrons lost, gained or shared.`,
          examples: `**Example 1.** Write the electronic configuration of magnesium (Z = 12). *Answer:* **2, 8, 2**.

**Example 2.** An element has the configuration 2, 8, 5. State its group and period. *Answer:* **Group 5, Period 3**.

**Example 3.** Write the s, p notation for oxygen (Z = 8). *Answer:* **1s² 2s² 2p⁴**.`,
        },
        questions: [
          ["E", "The maximum number of electrons that the first shell (K) can hold is", "2", "8", "18", "1", "The formula is 2n² with n = 1."],
          ["E", "The electronic configuration of sodium (atomic number 11) is", "2, 8, 1", "2, 9", "2, 8, 2", "8, 3", "It has one valence electron."],
          ["E", "The horizontal rows of the periodic table are called", "periods", "groups", "families", "blocks", "The vertical columns are groups."],
          ["M", "An element with the electronic configuration 2, 8, 7 belongs to Group", "7", "2", "3", "0", "The group number equals the number of valence electrons."],
          ["M", "Elements in the same group of the periodic table have the same number of", "valence electrons", "protons", "neutrons", "electron shells", "This gives them similar chemical properties."],
          ["M", "The s, p notation for the electronic configuration of chlorine (atomic number 17) is", "1s² 2s² 2p⁶ 3s² 3p⁵", "1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁵ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s¹ 3p⁶", "The third shell holds seven electrons."],
          ["M", "The elements of Group 7 are known as the", "halogens", "alkali metals", "noble gases", "transition metals", "They include fluorine and chlorine."],
          ["H", "An element with atomic number 16 is found in", "Group 6, Period 3", "Group 3, Period 6", "Group 2, Period 4", "Group 6, Period 2", "Its configuration is 2, 8, 6."],
          ["H", "The rule that electrons occupy orbitals of equal energy singly before pairing is", "Hund's rule", "the Aufbau principle", "the Pauli exclusion principle", "the periodic law", "It minimises repulsion between electrons."],
          ["H", "The 4s sub-shell is filled before the 3d sub-shell because", "it is at a lower energy level", "it holds more electrons", "it is further from the nucleus in every atom", "d orbitals cannot hold electrons", "Electrons enter the lowest available energy level first."],
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
        title: "Chemical symbols, formulae and IUPAC nomenclature",
        subtopics: ["Valency and radicals", "Writing chemical formulae", "Oxidation numbers", "IUPAC naming of inorganic compounds"],
        objectives: ["State the valencies of common elements and radicals", "Write the formulae of compounds", "Calculate oxidation numbers", "Name inorganic compounds by the IUPAC system"],
        lesson: {
          title: "The Language of Chemistry",
          summary: "Write formulae and name compounds systematically.",
          minutes: 40,
          notes: `## Valency
The **valency** of an element is its **combining power** — the number of hydrogen atoms that one atom of it combines with or displaces.
| Valency | Elements / ions |
|---|---|
| 1 | H, Na, K, Ag, Cl, Br, I |
| 2 | Mg, Ca, Zn, Ba, O, S, Cu(II), Fe(II), Pb(II) |
| 3 | Al, Fe(III), N |
| 4 | C, Si |
Some elements show **variable valency**: iron (2, 3), copper (1, 2), lead (2, 4).

## Radicals
A **radical** is a group of atoms that behaves as a single unit and carries a charge.
| Radical | Formula | Valency |
|---|---|---|
| ammonium | NH₄⁺ | 1 |
| hydroxide | OH⁻ | 1 |
| trioxonitrate(V) (nitrate) | NO₃⁻ | 1 |
| hydrogentrioxocarbonate(IV) (hydrogencarbonate) | HCO₃⁻ | 1 |
| tetraoxosulphate(VI) (sulphate) | SO₄²⁻ | 2 |
| trioxocarbonate(IV) (carbonate) | CO₃²⁻ | 2 |
| trioxosulphate(IV) (sulphite) | SO₃²⁻ | 2 |
| tetraoxophosphate(V) (phosphate) | PO₄³⁻ | 3 |

## Writing formulae
1. write the symbols of the two parts, positive part first
2. write their valencies
3. **exchange** the valencies and write them as subscripts; simplify; use brackets for a radical taken more than once
- calcium chloride: Ca (2), Cl (1) → **CaCl₂**
- aluminium oxide: Al (3), O (2) → **Al₂O₃**
- aluminium tetraoxosulphate(VI): Al (3), SO₄ (2) → **Al₂(SO₄)₃**
- sodium trioxocarbonate(IV): Na (1), CO₃ (2) → **Na₂CO₃**
- ammonium tetraoxosulphate(VI): **(NH₄)₂SO₄**

## Oxidation numbers
The **oxidation number (state)** is the charge an atom would have if all its bonds were ionic.
### Rules
1. a free element has oxidation number **0**
2. a simple ion: equal to its **charge**
3. **hydrogen** is +1 (−1 in metal hydrides)
4. **oxygen** is −2 (−1 in peroxides)
5. Group 1 metals are +1; Group 2 metals are +2
6. the sum of oxidation numbers in a **neutral compound is 0**; in a radical it equals the **charge**
### Examples
- S in H₂SO₄: 2(+1) + x + 4(−2) = 0 → x = **+6**
- Mn in KMnO₄: +1 + x − 8 = 0 → x = **+7**
- Cr in K₂Cr₂O₇: 2 + 2x − 14 = 0 → x = **+6**
- N in NO₃⁻: x − 6 = −1 → x = **+5**

## IUPAC nomenclature
The oxidation number of the element is shown in Roman numerals.
| Formula | IUPAC name | Common name |
|---|---|---|
| FeCl₂ | iron(II) chloride | ferrous chloride |
| FeCl₃ | iron(III) chloride | ferric chloride |
| CuO | copper(II) oxide | cupric oxide |
| CO | carbon(II) oxide | carbon monoxide |
| CO₂ | carbon(IV) oxide | carbon dioxide |
| SO₂ | sulphur(IV) oxide | sulphur dioxide |
| H₂SO₄ | tetraoxosulphate(VI) acid | sulphuric acid |
| HNO₃ | trioxonitrate(V) acid | nitric acid |
| H₂CO₃ | trioxocarbonate(IV) acid | carbonic acid |
| Na₂CO₃ | sodium trioxocarbonate(IV) | sodium carbonate |
| CuSO₄ | copper(II) tetraoxosulphate(VI) | copper sulphate |
| KMnO₄ | potassium tetraoxomanganate(VII) | potassium permanganate |
| KClO₃ | potassium trioxochlorate(V) | potassium chlorate |
Binary compounds end in **-ide**: sodium chloride, calcium oxide, hydrogen sulphide.`,
          examples: `**Example 1.** Write the formula of magnesium hydroxide. *Solution:* Mg (2), OH (1) → **Mg(OH)₂**.

**Example 2.** Find the oxidation number of sulphur in SO₃²⁻. *Solution:* x − 6 = −2 → **+4**.

**Example 3.** Give the IUPAC name of PbO₂. *Answer:* **Lead(IV) oxide**.`,
        },
        questions: [
          ["E", "The combining power of an element is its", "valency", "atomicity", "mass number", "isotope", "It shows how many bonds an atom can form."],
          ["E", "The formula of calcium chloride is", "CaCl₂", "CaCl", "Ca₂Cl", "CaCl₃", "Calcium has valency 2 and chlorine 1."],
          ["E", "The formula of the ammonium radical is", "NH₄⁺", "NH₃", "NO₃⁻", "NH₂⁻", "It has a valency of 1."],
          ["M", "The formula of aluminium tetraoxosulphate(VI) is", "Al₂(SO₄)₃", "AlSO₄", "Al₃(SO₄)₂", "Al(SO₄)₃", "Exchange the valencies 3 and 2."],
          ["M", "The oxidation number of sulphur in H₂SO₄ is", "+6", "+4", "−2", "+2", "2(+1) + x + 4(−2) = 0."],
          ["M", "The IUPAC name of FeCl₃ is", "iron(III) chloride", "iron(II) chloride", "iron trichlorate", "iron chlorine", "Iron has an oxidation number of +3."],
          ["M", "The IUPAC name of HNO₃ is", "trioxonitrate(V) acid", "dioxonitrate(III) acid", "tetraoxonitrate(VI) acid", "nitrogen(V) oxide", "Nitrogen has an oxidation number of +5."],
          ["H", "The oxidation number of manganese in KMnO₄ is", "+7", "+5", "+4", "+2", "1 + x + 4(−2) = 0."],
          ["H", "The oxidation number of chromium in K₂Cr₂O₇ is", "+6", "+7", "+3", "+12", "2 + 2x − 14 = 0."],
          ["H", "The IUPAC name of KClO₃ is", "potassium trioxochlorate(V)", "potassium chloride", "potassium tetraoxochlorate(VII)", "potassium oxochlorate(I)", "Chlorine has an oxidation number of +5."],
        ],
      },
      {
        week: 2,
        title: "Chemical equations and the laws of chemical combination",
        subtopics: ["Writing and balancing equations", "Types of chemical reaction", "The law of conservation of mass", "The laws of definite and multiple proportions"],
        objectives: ["Write and balance chemical equations with state symbols", "Classify chemical reactions", "State and illustrate the law of conservation of mass", "State and illustrate the laws of definite and multiple proportions"],
        lesson: {
          title: "Equations and the Laws of Combination",
          summary: "Balance equations and apply the laws of chemical combination.",
          minutes: 40,
          notes: `## Chemical equations
A **chemical equation** represents a reaction using symbols and formulae: **reactants → products**.
### Steps
1. write the word equation
2. write the correct formulae
3. **balance** — make the number of atoms of each element the same on both sides by adjusting the **coefficients** (never the subscripts)
4. add **state symbols**: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution
### Examples
- 2H₂(g) + O₂(g) → 2H₂O(l)
- N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
- CaCO₃(s) → CaO(s) + CO₂(g)
- Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)
- 2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)

### What an equation tells us
the reactants and products; their states; the **mole ratio** in which they react; the masses and gas volumes involved. It does not show the rate or the conditions unless they are written in.

### Ionic equations
Show only the ions that take part; **spectator ions** are omitted.
Ag⁺(aq) + Cl⁻(aq) → AgCl(s)
H⁺(aq) + OH⁻(aq) → H₂O(l)

## Types of reaction
- **combination (synthesis)**: 2Mg + O₂ → 2MgO
- **decomposition**: 2KClO₃ → 2KCl + 3O₂ — thermal decomposition is brought about by heat
- **displacement**: Zn + CuSO₄ → ZnSO₄ + Cu — a more reactive element displaces a less reactive one
- **double decomposition (precipitation)**: AgNO₃ + NaCl → AgCl↓ + NaNO₃
- **neutralisation**: NaOH + HCl → NaCl + H₂O
- **redox**: oxidation and reduction occurring together
- **reversible** reactions; **catalytic** reactions; combustion

## The law of conservation of mass
**Matter is neither created nor destroyed in a chemical reaction** — the total mass of the reactants equals the total mass of the products (**Lavoisier**).
*Illustration:* solutions of silver trioxonitrate(V) and sodium chloride in a stoppered flask have the same total mass before and after they are mixed and a precipitate forms.
*Calculation:* 10 g of calcium trioxocarbonate(IV) gives 5.6 g of calcium oxide; the mass of carbon(IV) oxide evolved is 10 − 5.6 = **4.4 g**.

## The law of definite proportions (constant composition)
**All pure samples of a compound contain the same elements combined in the same proportion by mass**, however the compound is prepared (**Proust**).
*Illustration:* copper(II) oxide made by heating copper in air, by heating the trioxonitrate(V), or by heating the trioxocarbonate(IV) always contains the same percentage of copper (about 80%).

## The law of multiple proportions
**If two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other are in a simple whole-number ratio** (**Dalton**).
*Illustration:* in carbon(II) oxide, 12 g of carbon combines with 16 g of oxygen; in carbon(IV) oxide, 12 g of carbon combines with 32 g of oxygen. The masses of oxygen, 16 : 32, are in the ratio **1 : 2**.
Other pairs: H₂O and H₂O₂; FeCl₂ and FeCl₃; the oxides of nitrogen.

## The law of reciprocal proportions
The masses of two elements that separately combine with a fixed mass of a third are in the ratio (or a simple multiple of it) in which they combine with each other.`,
          examples: `**Example 1.** Balance: Al + O₂ → Al₂O₃. *Answer:* **4Al + 3O₂ → 2Al₂O₃**.

**Example 2.** 5.0 g of a metal carbonate leaves 2.8 g of oxide on heating. Find the mass of gas given off. *Solution:* 5.0 − 2.8 = **2.2 g**.

**Example 3.** Which law is illustrated by CO and CO₂? *Answer:* The **law of multiple proportions**.`,
        },
        questions: [
          ["E", "In a balanced chemical equation, the number of atoms of each element on both sides is", "equal", "doubled on the right", "halved on the right", "unrelated", "This follows from the conservation of mass."],
          ["E", "The state symbol (aq) means", "dissolved in water", "a gas", "a pure liquid", "a solid", "It stands for aqueous."],
          ["E", "The law which states that matter is neither created nor destroyed in a chemical reaction is the law of", "conservation of mass", "definite proportions", "multiple proportions", "reciprocal proportions", "Lavoisier established it."],
          ["M", "When the equation N₂ + H₂ → NH₃ is balanced, the coefficient of H₂ is", "3", "2", "1", "6", "N₂ + 3H₂ → 2NH₃."],
          ["M", "The reaction Zn + CuSO₄ → ZnSO₄ + Cu is an example of", "displacement", "neutralisation", "decomposition", "double decomposition", "Zinc is more reactive than copper."],
          ["M", "The reaction AgNO₃ + NaCl → AgCl + NaNO₃ is an example of", "double decomposition", "combination", "displacement", "thermal decomposition", "An insoluble precipitate is formed."],
          ["M", "10 g of calcium trioxocarbonate(IV) decomposes on heating to give 5.6 g of calcium oxide. The mass of carbon(IV) oxide given off is", "4.4 g", "15.6 g", "5.6 g", "2.2 g", "Total mass is conserved."],
          ["H", "The fact that all pure samples of copper(II) oxide contain the same percentage of copper illustrates the law of", "definite proportions", "multiple proportions", "conservation of mass", "combining volumes", "The composition of a compound is constant."],
          ["H", "In two oxides of carbon, 12 g of carbon combines with 16 g and 32 g of oxygen respectively. This illustrates the law of", "multiple proportions", "definite proportions", "conservation of mass", "reciprocal proportions", "The masses of oxygen are in the ratio 1 : 2."],
          ["H", "When the equation Al + O₂ → Al₂O₃ is balanced with the smallest whole numbers, the sum of all the coefficients is", "9", "6", "5", "7", "4Al + 3O₂ → 2Al₂O₃."],
        ],
      },
      {
        week: 3,
        title: "Chemical bonding",
        subtopics: ["Why atoms combine", "Electrovalent (ionic) bonding", "Covalent and dative bonding", "Metallic bonding, intermolecular forces and shapes of molecules"],
        objectives: ["Explain why atoms form bonds", "Describe ionic bonding and the properties of ionic compounds", "Describe covalent and dative bonding and the properties of covalent compounds", "Describe metallic bonding, hydrogen bonding and simple molecular shapes"],
        lesson: {
          title: "How Atoms Join Together",
          summary: "Describe the types of chemical bond and the properties they give.",
          minutes: 40,
          notes: `## Why atoms combine
Atoms combine to attain a **stable electronic configuration** — that of the nearest **noble gas** (an octet, or a duplet for hydrogen). They do so by **transferring** or **sharing** valence electrons.

## Electrovalent (ionic) bonding
Formed by the **transfer of electrons** from a **metal** to a **non-metal**. The metal becomes a positive ion, the non-metal a negative ion, and the ions are held by **strong electrostatic attraction**.
- **sodium chloride**: Na (2, 8, 1) loses one electron → Na⁺ (2, 8); Cl (2, 8, 7) gains it → Cl⁻ (2, 8, 8)
- **magnesium oxide**: Mg loses two electrons to O → Mg²⁺ O²⁻
- **calcium chloride**: Ca gives one electron to each of two Cl atoms → CaCl₂

### Properties of ionic compounds
- **crystalline solids** with **high melting and boiling points**
- usually **soluble in water**, insoluble in organic solvents
- **conduct electricity when molten or in solution** (ions are free to move) but not when solid
- reactions in solution are fast

## Covalent bonding
Formed by the **sharing of electrons** between **non-metal** atoms; each atom contributes one electron to a shared pair.
- **single bond**: H₂, Cl₂, HCl, H₂O, NH₃, CH₄
- **double bond** (two shared pairs): O₂, CO₂
- **triple bond** (three shared pairs): N₂
Pairs not used in bonding are **lone pairs**: water has two, ammonia one.

### Properties of covalent compounds
- often gases, volatile liquids or low-melting solids — **low melting and boiling points**
- usually **insoluble in water**, soluble in organic solvents
- **do not conduct electricity** (no ions)
- reactions are generally slow
(**Giant covalent** structures such as diamond and silicon(IV) oxide are very hard with very high melting points.)

## Dative (coordinate) covalent bonding
A shared pair in which **both electrons come from one atom** — the donor, which must have a lone pair.
- **ammonium ion**: NH₃ + H⁺ → NH₄⁺
- **hydroxonium ion**: H₂O + H⁺ → H₃O⁺
- complex ions such as [Cu(NH₃)₄]²⁺
Once formed, a dative bond is like any other covalent bond.

## Metallic bonding
In a metal, the valence electrons are **delocalised** — a "**sea of electrons**" moving among fixed positive ions. This explains why metals **conduct electricity and heat**, are **malleable and ductile**, and have lustre.

## Intermolecular forces
- **van der Waals forces**: weak attractions between all molecules; they increase with molecular size (so iodine is a solid, chlorine a gas)
- **hydrogen bonding**: a stronger attraction between a hydrogen atom bonded to a small, highly electronegative atom (**N, O or F**) and a lone pair on a neighbouring molecule. It explains the **unexpectedly high boiling point of water**, the solubility of ethanol and ammonia in water, and why ice is less dense than water.

## Electronegativity and polarity
**Electronegativity** is the power of an atom to attract shared electrons. In H–Cl the shared pair lies nearer chlorine: the bond is **polar**. Water is a **polar** molecule; tetrachloromethane is non-polar.

## Shapes of simple molecules
| Molecule | Shape | Bond angle |
|---|---|---|
| CO₂, BeCl₂ | linear | 180° |
| BF₃ | trigonal planar | 120° |
| CH₄ | tetrahedral | 109.5° |
| NH₃ | trigonal pyramidal | 107° |
| H₂O | V-shaped (bent) | 104.5° |
Lone pairs repel more strongly than bonding pairs, squeezing the bond angle.`,
          examples: `**Example 1.** What type of bond is formed between sodium and chlorine? *Answer:* **Electrovalent (ionic)** — by transfer of an electron.

**Example 2.** How many shared pairs of electrons are in a nitrogen molecule? *Answer:* **Three** — a triple bond.

**Example 3.** Why does water have a higher boiling point than hydrogen sulphide? *Answer:* Because of **hydrogen bonding** between water molecules.`,
        },
        questions: [
          ["E", "The bond formed by the transfer of electrons from a metal to a non-metal is", "electrovalent", "covalent", "metallic", "dative", "Oppositely charged ions attract each other."],
          ["E", "A covalent bond is formed by the", "sharing of electrons", "transfer of electrons", "loss of protons", "gain of neutrons", "Each atom contributes one electron to the shared pair."],
          ["E", "Which of the following compounds is ionic?", "sodium chloride", "methane", "water", "carbon(IV) oxide", "It is formed between a metal and a non-metal."],
          ["M", "The number of shared pairs of electrons in a molecule of nitrogen is", "three", "one", "two", "four", "Nitrogen atoms are joined by a triple bond."],
          ["M", "A bond in which both shared electrons are donated by one atom is called a", "dative bond", "metallic bond", "hydrogen bond", "ionic bond", "It occurs in the ammonium ion."],
          ["M", "Ionic compounds conduct electricity when molten because", "their ions are free to move", "they contain free electrons", "they are covalent", "they have low melting points", "In the solid the ions are fixed."],
          ["M", "Metals conduct electricity because they contain", "delocalised electrons", "free ions in the solid", "lone pairs", "hydrogen bonds", "The valence electrons form a mobile sea."],
          ["H", "The unusually high boiling point of water is due to", "hydrogen bonding", "ionic bonding", "dative bonding", "metallic bonding", "Hydrogen is bonded to a small, highly electronegative atom."],
          ["H", "The shape of the methane molecule is", "tetrahedral", "linear", "trigonal planar", "V-shaped", "Its bond angle is 109.5°."],
          ["H", "The bond angle in water is smaller than that in methane because", "lone pairs repel more strongly than bonding pairs", "water has fewer electrons", "oxygen is smaller than carbon", "water is ionic", "The two lone pairs squeeze the bonding pairs together."],
        ],
      },
      {
        week: 4,
        title: "The mole concept",
        subtopics: ["The mole and Avogadro's constant", "Molar mass and mole calculations", "Percentage composition", "Empirical and molecular formulae"],
        objectives: ["Define the mole and Avogadro's constant", "Calculate molar mass and convert between mass, moles and particles", "Calculate percentage composition by mass", "Determine empirical and molecular formulae"],
        lesson: {
          title: "Counting Particles by Weighing",
          summary: "Use the mole in chemical calculations.",
          minutes: 40,
          notes: `## The mole
The **mole** is the amount of substance that contains as many elementary particles (atoms, molecules, ions) as there are atoms in exactly **12 g of carbon-12**. This number is **Avogadro's constant**:
**Nₐ = 6.02 × 10²³ particles per mole**

## Molar mass
The **molar mass** is the mass of **one mole** of a substance, in **g/mol**. Numerically it equals the relative atomic or molecular mass.
(H = 1, C = 12, N = 14, O = 16, Na = 23, Mg = 24, S = 32, Cl = 35.5, Ca = 40)
- H₂O = 2 + 16 = **18**
- CO₂ = 12 + 32 = **44**
- NaOH = 23 + 16 + 1 = **40**
- H₂SO₄ = 2 + 32 + 64 = **98**
- CaCO₃ = 40 + 12 + 48 = **100**

## Mole calculations
**number of moles = mass ÷ molar mass**
**number of particles = number of moles × 6.02 × 10²³**
- 9 g of water = 9 ÷ 18 = **0.5 mol**
- 0.5 mol of water contains 0.5 × 6.02 × 10²³ = **3.01 × 10²³ molecules**
- mass of 2 mol of NaOH = 2 × 40 = **80 g**

## Percentage composition
**% of an element = (mass of the element in one mole ÷ molar mass) × 100**
- calcium in CaCO₃: 40 ÷ 100 × 100 = **40%**
- nitrogen in NH₄NO₃ (molar mass 80): 28 ÷ 80 × 100 = **35%**
- water of crystallisation in CuSO₄·5H₂O (molar mass 250): 90 ÷ 250 × 100 = **36%**
Percentage composition is used to compare fertilisers and ores.

## Empirical formula
The **empirical formula** shows the **simplest whole-number ratio** of the atoms in a compound.
### Steps
1. write the percentage (or mass) of each element
2. divide each by its relative atomic mass
3. divide all the results by the smallest
4. convert to whole numbers
*Example:* a compound contains 40.0% C, 6.67% H and 53.33% O.
| | C | H | O |
|---|---|---|---|
| ÷ Aᵣ | 40 ÷ 12 = 3.33 | 6.67 ÷ 1 = 6.67 | 53.33 ÷ 16 = 3.33 |
| ÷ smallest | 1 | 2 | 1 |
Empirical formula: **CH₂O**.

## Molecular formula
The **molecular formula** shows the **actual number** of each kind of atom in a molecule. It is a whole-number multiple of the empirical formula:
**n = molar mass ÷ empirical formula mass**
If the compound above has a molar mass of 180: empirical mass = 30; n = 6; molecular formula **C₆H₁₂O₆**.

## Reacting masses
A balanced equation gives the mole ratio:
CaCO₃ → CaO + CO₂
100 g of CaCO₃ gives 56 g of CaO and 44 g of CO₂; so 25 g gives 14 g of CaO.

## Why the mole matters
It links the masses we can weigh to the numbers of particles that actually react — the basis of all quantitative chemistry.`,
          examples: `**Example 1.** Find the number of moles in 20 g of NaOH. *Solution:* 20 ÷ 40 = **0.5 mol**.

**Example 2.** Find the percentage of oxygen in water. *Solution:* 16 ÷ 18 × 100 = **88.9%**.

**Example 3.** A compound has empirical formula CH₂ and molar mass 56. Find its molecular formula. *Solution:* 56 ÷ 14 = 4 → **C₄H₈**.`,
        },
        questions: [
          ["E", "The number of particles in one mole of a substance is", "6.02 × 10²³", "6.02 × 10⁻²³", "22.4", "96 500", "It is called Avogadro's constant."],
          ["E", "The molar mass of water (H = 1, O = 16) is", "18 g/mol", "17 g/mol", "16 g/mol", "20 g/mol", "Two hydrogens and one oxygen: 2 + 16."],
          ["E", "The formula that shows the simplest whole-number ratio of atoms in a compound is the", "empirical formula", "molecular formula", "structural formula", "ionic formula", "The molecular formula is a multiple of it."],
          ["M", "The number of moles in 9 g of water (H = 1, O = 16) is", "0.5", "2", "9", "162", "Moles = mass ÷ molar mass = 9 ÷ 18."],
          ["M", "The molar mass of calcium trioxocarbonate(IV), CaCO₃ (Ca = 40, C = 12, O = 16), is", "100 g/mol", "68 g/mol", "84 g/mol", "124 g/mol", "40 + 12 + 48. Answer: 100 g/mol."],
          ["M", "The percentage by mass of calcium in CaCO₃ (Ca = 40, C = 12, O = 16) is", "40%", "12%", "48%", "20%", "40 ÷ 100 × 100."],
          ["M", "The mass of 2 moles of sodium hydroxide, NaOH (Na = 23, O = 16, H = 1), is", "80 g", "40 g", "20 g", "160 g", "Mass = moles × molar mass."],
          ["H", "A compound contains 40.0% carbon, 6.67% hydrogen and 53.33% oxygen (C = 12, H = 1, O = 16). Its empirical formula is", "CH₂O", "CHO", "C₂H₄O", "CH₄O", "The mole ratio C : H : O is 1 : 2 : 1."],
          ["H", "A compound has the empirical formula CH₂O and a molar mass of 180 g/mol. Its molecular formula is", "C₆H₁₂O₆", "C₃H₆O₃", "C₂H₄O₂", "CH₂O", "180 ÷ 30 = 6. Answer: C₆H₁₂O₆."],
          ["H", "The percentage by mass of nitrogen in NH₄NO₃ (N = 14, H = 1, O = 16) is", "35%", "17.5%", "28%", "45%", "Two nitrogen atoms: 28 ÷ 80 × 100."],
        ],
      },
      {
        week: 5,
        title: "The kinetic theory and the gas laws",
        subtopics: ["The kinetic theory of matter", "Boyle's law, Charles's law and the general gas equation", "Gay-Lussac's law and Avogadro's law", "Graham's law and Dalton's law"],
        objectives: ["State the kinetic theory and use it to explain the behaviour of gases", "Apply Boyle's law, Charles's law and the general gas equation", "Apply Gay-Lussac's law of combining volumes and Avogadro's law", "Apply Graham's law of diffusion and Dalton's law of partial pressures"],
        lesson: {
          title: "The Behaviour of Gases",
          summary: "State and apply the gas laws in chemistry.",
          minutes: 40,
          notes: `## The kinetic theory
1. matter is made up of tiny particles in **constant motion**
2. the particles of a gas are far apart; their own volume is negligible
3. there are negligible forces between gas molecules
4. collisions are **perfectly elastic**
5. the **average kinetic energy** of the particles is proportional to the **absolute temperature**
It explains diffusion, Brownian motion, gas pressure, evaporation and changes of state.

## Boyle's law
At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure:
**P₁V₁ = P₂V₂**
*Example:* 500 cm³ at 760 mmHg; at 380 mmHg the volume is 500 × 760 ÷ 380 = **1000 cm³**.

## Charles's law
At constant pressure, the volume of a fixed mass of gas is directly proportional to its **absolute (Kelvin) temperature**:
**V₁/T₁ = V₂/T₂**, where T (K) = °C + 273.

## The general gas equation
**P₁V₁/T₁ = P₂V₂/T₂**
**Standard temperature and pressure (s.t.p.)**: 273 K and 760 mmHg (1 atmosphere, 1.01 × 10⁵ N/m²).
The **ideal gas equation**: PV = nRT.

## Gay-Lussac's law of combining volumes
**When gases react, they do so in volumes that bear a simple whole-number ratio to one another and to the volumes of the gaseous products, all measured at the same temperature and pressure.**
2H₂(g) + O₂(g) → 2H₂O(g): 2 volumes + 1 volume → 2 volumes.
So 20 cm³ of hydrogen needs **10 cm³** of oxygen.
N₂ + 3H₂ → 2NH₃: 1 volume + 3 volumes → 2 volumes.

## Avogadro's law
**Equal volumes of all gases at the same temperature and pressure contain the same number of molecules.**
Consequences:
- the **molar volume**: one mole of any gas occupies **22.4 dm³ at s.t.p.** (about 24 dm³ at room temperature)
- relative molecular mass = 2 × **vapour density**
*Example:* 0.5 mol of any gas at s.t.p. occupies **11.2 dm³**; 4.4 g of CO₂ (0.1 mol) occupies **2.24 dm³**.

## Graham's law of diffusion
**The rate of diffusion of a gas is inversely proportional to the square root of its density (or relative molecular mass).**
R₁/R₂ = √(M₂/M₁)
Lighter gases diffuse faster. Hydrogen (M = 2) diffuses **four times** as fast as oxygen (M = 32), since √(32 ÷ 2) = 4. Ammonia (17) diffuses faster than hydrogen chloride (36.5): in a long tube the white ring of ammonium chloride forms nearer the hydrogen chloride end.

## Dalton's law of partial pressures
**The total pressure of a mixture of gases that do not react is the sum of the partial pressures of the individual gases.**
P(total) = P₁ + P₂ + P₃ + …
For a gas **collected over water**: pressure of dry gas = total pressure − saturated vapour pressure of water.
*Example:* total 760 mmHg, water vapour 20 mmHg → dry gas **740 mmHg**.

## Real and ideal gases
An **ideal gas** obeys the gas laws exactly. Real gases deviate at **high pressure** and **low temperature**, where molecular volume and attractions matter.`,
          examples: `**Example 1.** Find the volume of 0.25 mol of oxygen at s.t.p. *Solution:* 0.25 × 22.4 = **5.6 dm³**.

**Example 2.** What volume of oxygen reacts completely with 30 cm³ of hydrogen? *Solution:* 2H₂ + O₂ → 2H₂O: **15 cm³**.

**Example 3.** Compare the rates of diffusion of methane (M = 16) and sulphur(IV) oxide (M = 64). *Solution:* √(64 ÷ 16) = 2: methane diffuses **twice as fast**.`,
        },
        questions: [
          ["E", "One mole of any gas at s.t.p. occupies", "22.4 dm³", "2.24 dm³", "224 dm³", "24.2 dm³", "This is the molar volume."],
          ["E", "The law which states that equal volumes of gases at the same temperature and pressure contain equal numbers of molecules is", "Avogadro's law", "Boyle's law", "Charles's law", "Graham's law", "It leads to the idea of molar volume."],
          ["E", "Standard temperature is", "273 K", "298 K", "100 K", "0 K", "It is equal to 0 °C."],
          ["M", "A gas occupies 500 cm³ at 760 mmHg. At constant temperature its volume at 380 mmHg is", "1000 cm³", "250 cm³", "500 cm³", "760 cm³", "P₁V₁ = P₂V₂. Answer: 1000 cm³."],
          ["M", "The volume of oxygen needed to react completely with 20 cm³ of hydrogen to form steam is", "10 cm³", "20 cm³", "40 cm³", "5 cm³", "2H₂ + O₂ → 2H₂O: two volumes to one."],
          ["M", "The volume occupied by 0.5 mole of a gas at s.t.p. is", "11.2 dm³", "44.8 dm³", "22.4 dm³", "5.6 dm³", "0.5 × 22.4. Answer: 11.2 dm³."],
          ["M", "A gas is collected over water at a total pressure of 760 mmHg. If the saturated vapour pressure of water is 20 mmHg, the pressure of the dry gas is", "740 mmHg", "780 mmHg", "760 mmHg", "38 mmHg", "Subtract the vapour pressure of water."],
          ["H", "How many times faster does hydrogen (M = 2) diffuse than oxygen (M = 32) under the same conditions?", "4 times", "16 times", "2 times", "8 times", "The ratio is √(32 ÷ 2)."],
          ["H", "The volume occupied by 4.4 g of carbon(IV) oxide at s.t.p. (C = 12, O = 16) is", "2.24 dm³", "22.4 dm³", "4.48 dm³", "1.12 dm³", "4.4 g is 0.1 mol."],
          ["H", "When ammonia and hydrogen chloride are released at opposite ends of a long tube, the white ring forms nearer the hydrogen chloride end because", "ammonia is lighter and diffuses faster", "hydrogen chloride is lighter", "the two gases diffuse at equal rates", "ammonia is denser", "Rate is inversely proportional to the square root of molar mass."],
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
        title: "Air and air pollution",
        subtopics: ["Composition of air", "Air as a mixture and the separation of its components", "Combustion and rusting", "Air pollution"],
        objectives: ["State the composition of air", "Show that air is a mixture and describe how its components are separated", "Explain combustion and the rusting of iron", "Identify air pollutants, their effects and control"],
        lesson: {
          title: "The Air Around Us",
          summary: "Describe the composition of air, combustion, rusting and air pollution.",
          minutes: 40,
          notes: `## Composition of air (by volume)
| Gas | Percentage |
|---|---|
| **nitrogen** | about **78%** |
| **oxygen** | about **21%** |
| **noble gases** (mainly argon) | about 0.93% |
| **carbon(IV) oxide** | about 0.03–0.04% |
| water vapour | variable |
with traces of dust and other gases.

### Finding the percentage of oxygen
- passing a known volume of air repeatedly over heated **copper** turnings: copper removes the oxygen (2Cu + O₂ → 2CuO); the volume falls by about **one-fifth**
- burning **phosphorus** in a bell jar over water: the water rises about one-fifth of the way

### Tests for the other components
- **carbon(IV) oxide** turns **limewater milky**
- **water vapour** turns white anhydrous copper(II) tetraoxosulphate(VI) **blue**

## Air is a mixture
- its composition **varies** slightly from place to place
- its components can be **separated by physical means**
- it has **no chemical formula**
- no heat change occurs when its components are mixed
- each component keeps its own properties

## Separating the components
**Fractional distillation of liquid air**: air is freed from dust, carbon(IV) oxide and water, compressed and cooled until it liquefies (about −200 °C). On warming, **nitrogen** (boiling point −196 °C) boils off first, then argon, then **oxygen** (−183 °C).
- **nitrogen**: making ammonia and fertilisers; inert atmosphere; refrigeration
- **oxygen**: respiration aid in hospitals; oxy-ethyne welding; steel making
- **argon**: filling electric bulbs; **neon**: advertising signs; **helium**: balloons

## Combustion
**Combustion** is burning — a chemical reaction with oxygen in which **heat and light** are given out. It needs a **fuel**, **oxygen** and a temperature above the **ignition point** (the fire triangle). Removing any one puts a fire out. Substances gain mass when they burn in air because they combine with oxygen.

## Rusting
**Rusting** is the slow oxidation of iron to **hydrated iron(III) oxide**, Fe₂O₃·xH₂O. It requires **both oxygen and water**; salt and acids speed it up.
### Prevention
painting; oiling and greasing; **galvanising** (coating with zinc); tin-plating; electroplating (chromium); alloying (stainless steel); **sacrificial protection** with a more reactive metal such as zinc or magnesium.
### Comparison
Rusting and burning are both oxidations that use oxygen and release heat, but rusting is slow and gives out no light.

## Air pollution
| Pollutant | Main source | Effect |
|---|---|---|
| **carbon(II) oxide** | incomplete combustion in engines and generators | poisonous — combines with haemoglobin |
| **sulphur(IV) oxide** | burning coal and oil; smelting | **acid rain**; breathing problems |
| **oxides of nitrogen** | vehicle exhausts; furnaces | acid rain; smog |
| **carbon(IV) oxide** | burning of fuels; bush burning | **greenhouse effect** — global warming |
| **chlorofluorocarbons (CFCs)** | old refrigerators and aerosols | **depletion of the ozone layer** |
| **particulates** (smoke, soot, dust), lead | industry, exhausts, gas flaring | lung disease; reduced visibility |
| hydrogen sulphide | decay; refineries | poisonous; foul smell |

### Control
catalytic converters and unleaded petrol; filters and electrostatic precipitators in chimneys; desulphurising fuels; ending gas flaring; planting trees; renewable energy; laws and enforcement.`,
          examples: `**Example 1.** What fraction of air is used up when phosphorus burns in an enclosed volume? *Answer:* About **one-fifth** — the oxygen.

**Example 2.** Which gas is obtained first when liquid air is warmed? *Answer:* **Nitrogen**, because it has the lower boiling point.

**Example 3.** Name two conditions needed for rusting. *Answer:* **Oxygen (air) and water**.`,
        },
        questions: [
          ["E", "The most abundant gas in air is", "nitrogen", "oxygen", "carbon(IV) oxide", "argon", "It makes up about 78% by volume."],
          ["E", "The percentage of oxygen in air by volume is about", "21%", "78%", "0.03%", "50%", "It is about one-fifth of the air."],
          ["E", "The rusting of iron requires", "oxygen and water", "oxygen only", "water only", "nitrogen and water", "Both must be present."],
          ["M", "The components of air are separated industrially by", "fractional distillation of liquid air", "filtration", "chromatography", "electrolysis", "They have different boiling points."],
          ["M", "Coating iron with zinc to prevent rusting is called", "galvanising", "tin-plating", "alloying", "electrolysis", "Zinc is more reactive than iron and protects it."],
          ["M", "The gas mainly responsible for acid rain is", "sulphur(IV) oxide", "oxygen", "argon", "hydrogen", "It dissolves in rain water to form an acid."],
          ["M", "Which gas turns limewater milky?", "carbon(IV) oxide", "oxygen", "nitrogen", "hydrogen", "Insoluble calcium trioxocarbonate(IV) is formed."],
          ["H", "When liquid air is allowed to warm up, nitrogen distils before oxygen because nitrogen", "has a lower boiling point", "is denser", "is more reactive", "is less abundant", "Nitrogen boils at −196 °C and oxygen at −183 °C."],
          ["H", "Carbon(II) oxide is poisonous because it", "combines with haemoglobin and prevents it from carrying oxygen", "is acidic", "dissolves the lungs", "is denser than air", "It forms carboxyhaemoglobin."],
          ["H", "One piece of evidence that air is a mixture and not a compound is that", "its components can be separated by physical means", "it has a fixed composition", "it has a chemical formula", "heat is evolved when it is formed", "Fractional distillation separates them."],
        ],
      },
      {
        week: 2,
        title: "Water: properties, hardness and treatment",
        subtopics: ["Sources and properties of water", "Treatment of water for town supply", "Hardness of water and its removal", "Water of crystallisation; efflorescence and deliquescence"],
        objectives: ["State the sources and properties of water and its chemical tests", "Describe the treatment of water for town supply", "Explain the causes and removal of hardness", "Explain water of crystallisation, efflorescence, deliquescence and hygroscopy"],
        lesson: {
          title: "Water in Chemistry",
          summary: "Describe the properties, treatment and hardness of water.",
          minutes: 40,
          notes: `## Sources
**rain** water (the purest natural water), **spring** and **well** water, **river** and **lake** water, **sea** water (which contains most dissolved salts).

## Properties of water
- colourless, odourless, tasteless liquid
- boils at **100 °C** and freezes at **0 °C** at standard pressure
- maximum density (1 g/cm³) at **4 °C**
- **neutral** to litmus
- an excellent solvent — the "universal solvent"
- a covalent, polar molecule with hydrogen bonding
### Chemical tests
- turns **white anhydrous copper(II) tetraoxosulphate(VI) blue**
- turns **blue cobalt(II) chloride paper pink**
These show the presence of water; **purity** is confirmed by a boiling point of exactly 100 °C.

### Reactions
- with metals: sodium and potassium react violently with cold water; calcium steadily; magnesium and iron react with **steam**
- with non-metal oxides to form acids, and with metal oxides to form alkalis

## Treatment of water for town supply
1. **screening** — removes large floating objects
2. **coagulation / sedimentation** — **alum** (potassium aluminium tetraoxosulphate(VI)) is added to make fine suspended particles clump and settle
3. **filtration** — through beds of **sand and gravel**
4. **chlorination** — **chlorine** is added to **kill germs** (disinfection)
5. sometimes **aeration** (to remove odours), addition of lime (to adjust acidity) and **fluoride** (to protect teeth)
6. storage and distribution
At home, water can be made safe by **boiling**, filtering or adding chlorine tablets.

## Hardness of water
**Hard water** does not readily form lather with soap; it forms a **scum**. Hardness is caused by dissolved **calcium and magnesium ions** (Ca²⁺, Mg²⁺).

### Temporary hardness
Caused by dissolved **calcium (or magnesium) hydrogentrioxocarbonate(IV)**, formed when rain water containing carbon(IV) oxide passes over limestone.
**Removed by:**
- **boiling**: Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂
- adding a calculated amount of **slaked lime**, Ca(OH)₂

### Permanent hardness
Caused by dissolved **tetraoxosulphate(VI)** and **chlorides** of calcium and magnesium. It is **not removed by boiling**.
**Removed by** (these also remove temporary hardness):
- adding **washing soda**, Na₂CO₃: CaSO₄ + Na₂CO₃ → CaCO₃↓ + Na₂SO₄
- **ion exchange** (permutit / zeolite, or resins)
- **distillation**

### Advantages of hard water
better taste; supplies **calcium** for bones and teeth; good for brewing; helps snails and crabs make shells; forms a coating in lead pipes that prevents lead poisoning.
### Disadvantages
**wastes soap**; scum stains clothes; **furs kettles** and blocks boiler pipes (wasting fuel); unsuitable for dyeing and tanning.

## Water of crystallisation
A definite amount of water chemically combined in some crystals: CuSO₄·5H₂O (blue), Na₂CO₃·10H₂O (washing soda), FeSO₄·7H₂O, MgSO₄·7H₂O. Such salts are **hydrated**; heating gives the **anhydrous** salt.

## Efflorescence, deliquescence and hygroscopy
- **efflorescent** substances **lose** water of crystallisation to the air: washing soda, Na₂CO₃·10H₂O
- **deliquescent** substances **absorb** so much moisture that they **dissolve** in it: sodium hydroxide, calcium chloride, iron(III) chloride, magnesium chloride
- **hygroscopic** substances absorb moisture **without dissolving**: concentrated tetraoxosulphate(VI) acid, calcium oxide, anhydrous copper(II) tetraoxosulphate(VI), silica gel
Deliquescent and hygroscopic substances are used as **drying agents**.

## Water pollution
sewage, refuse, industrial effluent, oil spills, fertiliser and pesticide run-off — causing disease, death of aquatic life and eutrophication.`,
          examples: `**Example 1.** Which ions cause hardness of water? *Answer:* **Calcium and magnesium** ions.

**Example 2.** Why is chlorine added to town water? *Answer:* To **kill germs**.

**Example 3.** Classify NaOH pellets left in air. *Answer:* **Deliquescent** — they absorb moisture and dissolve.`,
        },
        questions: [
          ["E", "Hardness of water is caused by dissolved ions of", "calcium and magnesium", "sodium and potassium", "iron and copper", "hydrogen and oxygen", "They react with soap to form scum."],
          ["E", "In water treatment, chlorine is added in order to", "kill germs", "remove hardness", "improve the colour", "remove suspended particles", "This step is called chlorination."],
          ["E", "Water turns white anhydrous copper(II) tetraoxosulphate(VI)", "blue", "red", "green", "black", "This is a chemical test for water."],
          ["M", "Temporary hardness of water can be removed by", "boiling", "filtration", "chlorination", "adding sodium chloride", "The hydrogentrioxocarbonate(IV) decomposes."],
          ["M", "Temporary hardness is caused by the presence of calcium", "hydrogentrioxocarbonate(IV)", "tetraoxosulphate(VI)", "chloride", "trioxonitrate(V)", "It forms when rain water passes over limestone."],
          ["M", "The substance added during water treatment to make suspended particles settle is", "alum", "chlorine", "fluoride", "washing soda", "It causes coagulation."],
          ["M", "A substance that absorbs moisture from the air and dissolves in it is described as", "deliquescent", "efflorescent", "hygroscopic", "anhydrous", "Sodium hydroxide pellets behave this way."],
          ["H", "Permanent hardness can be removed by adding", "washing soda", "slaked lime only", "alum", "chlorine", "It precipitates the calcium ions as the trioxocarbonate(IV)."],
          ["H", "Washing soda crystals left exposed to air turn to a white powder because they are", "efflorescent", "deliquescent", "hygroscopic", "insoluble", "They lose water of crystallisation."],
          ["H", "One advantage of hard water is that it", "supplies calcium for the formation of bones and teeth", "lathers easily with soap", "prevents the furring of kettles", "is good for dyeing", "It also tastes better."],
        ],
      },
      {
        week: 3,
        title: "Acids, bases and the pH scale",
        subtopics: ["Acids: definition, strength and basicity", "Properties and uses of acids", "Bases and alkalis", "Indicators and the pH scale"],
        objectives: ["Define an acid and classify acids by strength and basicity", "State the properties and uses of acids", "Define bases and alkalis and state their properties and uses", "Use indicators and the pH scale"],
        lesson: {
          title: "Acids and Bases",
          summary: "Describe acids and bases and measure acidity with indicators and pH.",
          minutes: 40,
          notes: `## Acids
An **acid** is a substance that produces **hydrogen ions (H⁺)** — more exactly hydroxonium ions, H₃O⁺ — **as the only positive ions** when dissolved in water (**Arrhenius**). In the Brønsted–Lowry view an acid is a **proton donor**.

### Strong and weak acids
- **strong acids** ionise **completely** in water: hydrochloric acid (HCl), tetraoxosulphate(VI) acid (H₂SO₄), trioxonitrate(V) acid (HNO₃)
- **weak acids** ionise only **partially**: ethanoic acid (CH₃COOH), trioxocarbonate(IV) acid (H₂CO₃), citric acid
Strength is not the same as **concentration** (dilute or concentrated), which depends on the amount of water.

### Basicity
The **basicity** of an acid is the number of **replaceable hydrogen ions** per molecule:
- **monobasic**: HCl, HNO₃, CH₃COOH
- **dibasic**: H₂SO₄, H₂CO₃
- **tribasic**: H₃PO₄

### Organic acids in nature
citric acid — citrus fruits; **ethanoic acid** — vinegar; **lactic acid** — sour milk; tartaric acid — grapes; **methanoic acid** — ant stings; fatty acids — fats and oils.

### Properties of acids
1. **sour** taste
2. turn **blue litmus red**
3. react with reactive **metals** to give a salt and **hydrogen**: Zn + 2HCl → ZnCl₂ + H₂
4. react with **trioxocarbonates(IV)** to give a salt, water and **carbon(IV) oxide**: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂
5. react with **bases** to give a **salt and water only** — **neutralisation**
6. conduct electricity in solution
7. concentrated acids are **corrosive**

### Uses
H₂SO₄ — fertilisers, car batteries, detergents; HCl — cleaning metals (pickling), in the stomach for digestion; HNO₃ — fertilisers, explosives, dyes; ethanoic acid — preserving food; boric acid — mild antiseptic.

## Bases and alkalis
A **base** is a substance that **neutralises an acid** to form a salt and water only; it is a **proton acceptor**. Bases are oxides and hydroxides of metals: CuO, MgO, Ca(OH)₂.
An **alkali** is a **base that is soluble in water**, producing **hydroxide ions (OH⁻)**: sodium hydroxide (NaOH), potassium hydroxide (KOH), calcium hydroxide (slightly), aqueous ammonia.
- **strong alkalis**: NaOH, KOH; **weak**: aqueous NH₃

### Properties of alkalis
1. **bitter** taste and **soapy** (slippery) feel
2. turn **red litmus blue**
3. neutralise acids
4. liberate **ammonia** when warmed with ammonium salts
5. precipitate insoluble hydroxides from solutions of metal salts
6. concentrated alkalis are **caustic**

### Uses
NaOH — soap, paper; Ca(OH)₂ — neutralising acid soils, mortar, limewater; Mg(OH)₂ — antacid; ammonia — fertilisers, cleaning.

## Indicators
| Indicator | In acid | In alkali |
|---|---|---|
| **litmus** | red | blue |
| **methyl orange** | red (pink) | yellow |
| **phenolphthalein** | colourless | pink |
| **universal indicator** | red → orange | blue → violet |

## The pH scale
**pH** is a measure of the hydrogen-ion concentration: pH = −log[H⁺]. The scale runs from **0 to 14**.
- pH **below 7**: acidic — the lower, the more acidic
- pH **7**: neutral (pure water)
- pH **above 7**: alkaline
Examples: stomach acid about 2; vinegar 3; rain 5.6; blood 7.4; sea water 8; limewater 12.
pH is measured with **universal indicator** or a **pH meter**. It matters in agriculture (soil), medicine, food and water treatment.`,
          examples: `**Example 1.** What is the basicity of H₂SO₄? *Answer:* **Two** — it is dibasic.

**Example 2.** A solution turns phenolphthalein pink. Is it acidic or alkaline? *Answer:* **Alkaline**.

**Example 3.** Which is more acidic: pH 2 or pH 5? *Answer:* **pH 2**.`,
        },
        questions: [
          ["E", "An acid turns blue litmus", "red", "green", "blue", "colourless", "This is a simple test for acids."],
          ["E", "The pH of a neutral solution is", "7", "0", "14", "1", "Pure water has this value."],
          ["E", "A base that is soluble in water is called", "an alkali", "a salt", "an acid", "an indicator", "It produces hydroxide ions."],
          ["M", "The basicity of tetraoxosulphate(VI) acid, H₂SO₄, is", "2", "1", "3", "4", "It has two replaceable hydrogen ions."],
          ["M", "The colour of phenolphthalein in an alkaline solution is", "pink", "colourless", "yellow", "red-orange", "In acid it is colourless."],
          ["M", "Which of the following is a weak acid?", "ethanoic acid", "hydrochloric acid", "trioxonitrate(V) acid", "tetraoxosulphate(VI) acid", "It ionises only partially in water."],
          ["M", "The gas given off when an acid reacts with a trioxocarbonate(IV) is", "carbon(IV) oxide", "hydrogen", "oxygen", "ammonia", "It turns limewater milky."],
          ["H", "A strong acid differs from a weak acid in that a strong acid", "ionises completely in water", "is always concentrated", "has a higher basicity", "contains more hydrogen atoms", "Strength refers to the degree of ionisation."],
          ["H", "The reaction between an acid and a base to form a salt and water only is called", "neutralisation", "hydrolysis", "esterification", "precipitation", "The ionic equation is H⁺ + OH⁻ → H₂O."],
          ["H", "The acid found in vinegar is", "ethanoic acid", "citric acid", "lactic acid", "methanoic acid", "Vinegar is a dilute solution of it."],
        ],
      },
      {
        week: 4,
        title: "Carbon and its inorganic compounds",
        subtopics: ["Allotropes of carbon", "Coal and its destructive distillation", "The oxides of carbon", "Trioxocarbonates(IV) and the carbon cycle"],
        objectives: ["Describe the allotropes of carbon and relate their properties to structure", "Describe coal and the products of its destructive distillation", "Compare carbon(II) oxide and carbon(IV) oxide", "Describe trioxocarbonates(IV) and the carbon cycle"],
        lesson: {
          title: "The Chemistry of Carbon",
          summary: "Describe the allotropes of carbon and its oxides and trioxocarbonates(IV).",
          minutes: 40,
          notes: `## Allotropy
**Allotropy** is the existence of an element in **two or more different forms in the same physical state**. The forms are **allotropes**. Carbon, sulphur, phosphorus and oxygen show it.

## Allotropes of carbon
### Diamond
- each carbon atom is bonded covalently to **four** others in a **tetrahedral** giant structure
- the **hardest** natural substance; very high melting point; transparent and sparkling
- does **not conduct electricity** (no free electrons)
- uses: jewellery; cutting and drilling tools; glass cutters

### Graphite
- atoms are arranged in flat **hexagonal layers**; each atom is bonded to **three** others, leaving one **free electron**; the layers are held by weak forces and **slide** over one another
- soft, greasy, black and opaque
- **conducts electricity**
- uses: **pencil** "leads"; dry **lubricant**; **electrodes**; moderator in nuclear reactors

### Amorphous carbon
charcoal (wood, animal, sugar), **coke**, **soot (lampblack)**, carbon black. **Activated charcoal** adsorbs gases and colours — used in gas masks and in decolorising sugar.
(Fullerenes are another form.)

## Chemical properties of carbon
- burns in excess air to give carbon(IV) oxide; in limited air, carbon(II) oxide
- a **reducing agent**: 2CuO + C → 2Cu + CO₂ — used to extract metals such as iron and zinc

## Coal
Formed from buried plant remains over millions of years. Types, in order of increasing carbon content: **peat, lignite, bituminous coal, anthracite**. Nigeria has coal at **Enugu**.
### Destructive distillation of coal
Heating coal strongly **in the absence of air** gives:
- **coke** — a solid residue; fuel and reducing agent in the blast furnace
- **coal tar** — a source of benzene, phenol, dyes and drugs
- **ammoniacal liquor** — used to make fertiliser
- **coal gas** — a fuel (hydrogen, methane, carbon(II) oxide)

### Fuel gases
- **producer gas**: carbon(II) oxide + nitrogen (air passed over hot coke)
- **water gas**: carbon(II) oxide + hydrogen (steam passed over white-hot coke)

## Carbon(II) oxide, CO
- formed by incomplete combustion
- colourless, odourless and **very poisonous** — it combines with haemoglobin
- **neutral** oxide; insoluble in water
- burns with a **blue flame** to form carbon(IV) oxide
- a strong **reducing agent**: Fe₂O₃ + 3CO → 2Fe + 3CO₂

## Carbon(IV) oxide, CO₂
### Laboratory preparation
dilute hydrochloric acid on marble chips: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. It is collected by **downward delivery** because it is **denser than air**.
### Properties
colourless, odourless; **acidic** oxide — dissolves slightly in water to form trioxocarbonate(IV) acid; turns **limewater milky**; does **not support combustion** (burning magnesium continues to burn in it).
### Uses
**fire extinguishers**; fizzy drinks; **dry ice** (solid CO₂) as a refrigerant; photosynthesis; making sodium trioxocarbonate(IV) (the Solvay process) and urea.

## Trioxocarbonates(IV)
- all are insoluble in water except those of **sodium, potassium and ammonium**
- they react with dilute acids to give carbon(IV) oxide
- **action of heat**: the trioxocarbonates(IV) of sodium and potassium are **not decomposed**; others give the **oxide and carbon(IV) oxide** — CaCO₃ → CaO + CO₂; copper(II) trioxocarbonate(IV) changes from green to black
- hydrogentrioxocarbonates(IV) decompose on heating: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂ (baking powder)
- calcium trioxocarbonate(IV) occurs as **limestone, marble and chalk**; used for cement, lime and glass

## The carbon cycle
Carbon(IV) oxide is **removed** from the air by **photosynthesis** and by dissolving in the oceans; it is **returned** by **respiration**, **combustion** of fuels, **decay**, and the heating of limestone. The balance is being upset by heavy burning of fossil fuels and deforestation, increasing the **greenhouse effect**.`,
          examples: `**Example 1.** Why does graphite conduct electricity while diamond does not? *Answer:* Each carbon atom in graphite has **one free electron**; in diamond all four are used in bonding.

**Example 2.** Name the solid residue from the destructive distillation of coal. *Answer:* **Coke**.

**Example 3.** What is formed when calcium trioxocarbonate(IV) is heated strongly? *Answer:* **Calcium oxide and carbon(IV) oxide**.`,
        },
        questions: [
          ["E", "The existence of an element in different forms in the same physical state is called", "allotropy", "isotopy", "isomerism", "polymerism", "Diamond and graphite are examples for carbon."],
          ["E", "The hardest naturally occurring substance is", "diamond", "graphite", "coke", "charcoal", "Each carbon atom is bonded to four others."],
          ["E", "Carbon(IV) oxide is used in fire extinguishers because it", "does not support combustion", "is poisonous", "is lighter than air", "burns readily", "It also blankets the fire because it is denser than air."],
          ["M", "Graphite is used as a lubricant because its", "layers slide over one another", "atoms are tetrahedrally bonded", "structure is very hard", "particles are ionic", "The layers are held by weak forces."],
          ["M", "The solid residue obtained from the destructive distillation of coal is", "coke", "coal tar", "ammoniacal liquor", "coal gas", "It is used as a fuel and reducing agent."],
          ["M", "Carbon(II) oxide burns in air with a", "blue flame", "yellow sooty flame", "green flame", "red flame", "It forms carbon(IV) oxide."],
          ["M", "Which trioxocarbonate(IV) is not decomposed by heat?", "sodium trioxocarbonate(IV)", "calcium trioxocarbonate(IV)", "copper(II) trioxocarbonate(IV)", "zinc trioxocarbonate(IV)", "Those of sodium and potassium are stable to heat."],
          ["H", "Graphite conducts electricity whereas diamond does not because", "each carbon atom in graphite has a free electron", "graphite contains ions", "diamond has free electrons", "graphite is a metal", "In diamond all four valence electrons are used in bonding."],
          ["H", "Water gas is a mixture of", "carbon(II) oxide and hydrogen", "carbon(II) oxide and nitrogen", "carbon(IV) oxide and hydrogen", "methane and oxygen", "It is made by passing steam over white-hot coke."],
          ["H", "The process that removes carbon(IV) oxide from the atmosphere is", "photosynthesis", "respiration", "combustion", "decay", "Green plants use it to make food."],
        ],
      },
      {
        week: 5,
        title: "Salts",
        subtopics: ["Types of salts", "Preparation of soluble salts", "Preparation of insoluble salts and solubility rules", "Hydrolysis and uses of salts"],
        objectives: ["Define a salt and classify salts", "Describe methods of preparing soluble salts", "Apply the solubility rules and describe the preparation of insoluble salts", "Explain the hydrolysis of salts and state their uses"],
        lesson: {
          title: "Making and Using Salts",
          summary: "Classify salts, describe how they are prepared and state their uses.",
          minutes: 40,
          notes: `## What is a salt?
A **salt** is a compound formed when **all or part of the ionisable hydrogen of an acid is replaced by a metal or ammonium ion**.

## Types of salts
- **normal salts**: all the replaceable hydrogen has been replaced — NaCl, Na₂SO₄, CaCO₃
- **acid salts**: only part has been replaced; they still contain replaceable hydrogen — **NaHSO₄**, **NaHCO₃**
- **basic salts**: contain hydroxide ions as well — Zn(OH)Cl, Mg(OH)Cl
- **double salts**: two salts crystallised together, giving both sets of ions in solution — **potash alum**, KAl(SO₄)₂·12H₂O; ammonium iron(II) tetraoxosulphate(VI)
- **complex salts**: contain complex ions — K₄Fe(CN)₆; [Cu(NH₃)₄]SO₄

## Solubility rules
| Soluble | Insoluble |
|---|---|
| all **sodium, potassium and ammonium** salts | — |
| all **trioxonitrates(V)** | — |
| all **chlorides** except | **silver chloride** and **lead(II) chloride** |
| all **tetraoxosulphates(VI)** except | **barium** and **lead(II)** (calcium is only slightly soluble) |
| trioxocarbonates(IV) of Na, K, NH₄ | all other **trioxocarbonates(IV)** |
| hydroxides of Na, K (and Ca slightly) | all other **hydroxides** |

## Preparation of soluble salts
1. **acid + reactive metal** → salt + hydrogen
 Zn + H₂SO₄ → ZnSO₄ + H₂
2. **acid + insoluble base (metal oxide)** → salt + water
 CuO + H₂SO₄ → CuSO₄ + H₂O — add excess oxide to warm acid, filter, crystallise
3. **acid + trioxocarbonate(IV)** → salt + water + carbon(IV) oxide
4. **acid + alkali (neutralisation by titration)** → salt + water — used for **sodium, potassium and ammonium** salts, since both reactants are soluble
 NaOH + HCl → NaCl + H₂O
In methods 1–3 the solid is added **in excess** to make sure all the acid is used up; the excess is filtered off and the filtrate is evaporated to crystallise.

## Preparation of insoluble salts
By **double decomposition (precipitation)**: mix solutions of two soluble salts, one containing the required positive ion and the other the negative ion; filter, wash and dry the precipitate.
- Pb(NO₃)₂ + 2NaCl → **PbCl₂**↓ + 2NaNO₃
- BaCl₂ + Na₂SO₄ → **BaSO₄**↓ + 2NaCl
- AgNO₃ + NaCl → **AgCl**↓ + NaNO₃

## Direct combination
Some salts are made by heating the elements together: 2Fe + 3Cl₂ → 2FeCl₃; Fe + S → FeS.

## Hydrolysis of salts
Some salts react with water to give solutions that are not neutral.
| Salt of | Example | Solution |
|---|---|---|
| strong acid + strong base | NaCl, KNO₃ | **neutral** |
| strong acid + weak base | NH₄Cl, FeCl₃ | **acidic** |
| weak acid + strong base | Na₂CO₃, CH₃COONa | **alkaline** |

## Uses of salts
- **sodium chloride** — seasoning and preserving food; making chlorine and sodium hydroxide
- **calcium trioxocarbonate(IV)** — cement, lime
- **sodium trioxocarbonate(IV)** — glass, softening water
- **sodium hydrogentrioxocarbonate(IV)** — baking powder, antacid
- **ammonium salts and trioxonitrates(V)** — fertilisers
- **calcium tetraoxosulphate(VI)** — plaster of Paris
- **magnesium tetraoxosulphate(VI)** (Epsom salt) — laxative
- **copper(II) tetraoxosulphate(VI)** — fungicide
- **potassium trioxonitrate(V)** — gunpowder; **silver halides** — photography`,
          examples: `**Example 1.** Classify NaHCO₃. *Answer:* An **acid salt**.

**Example 2.** How would you prepare lead(II) chloride? *Answer:* By **double decomposition** — mix lead(II) trioxonitrate(V) and sodium chloride solutions, filter, wash and dry.

**Example 3.** Is a solution of sodium trioxocarbonate(IV) acidic, neutral or alkaline? *Answer:* **Alkaline** — it is the salt of a weak acid and a strong base.`,
        },
        questions: [
          ["E", "A salt is formed when the hydrogen of an acid is replaced by", "a metal or ammonium ion", "a non-metal", "water", "oxygen", "The replacement may be complete or partial."],
          ["E", "Which of the following is an acid salt?", "NaHSO₄", "NaCl", "Na₂SO₄", "CaCO₃", "It still contains replaceable hydrogen."],
          ["E", "Sodium chloride is commonly used for", "seasoning and preserving food", "making cement", "softening water", "making gunpowder", "It is common table salt."],
          ["M", "Which of the following salts is insoluble in water?", "barium tetraoxosulphate(VI)", "sodium tetraoxosulphate(VI)", "potassium trioxonitrate(V)", "ammonium chloride", "Most tetraoxosulphates(VI) are soluble, but not this one."],
          ["M", "An insoluble salt is best prepared by", "double decomposition", "titration", "the action of an acid on a metal", "direct combination only", "A precipitate forms when two solutions are mixed."],
          ["M", "The most suitable method of preparing sodium chloride in the laboratory is by", "titrating sodium hydroxide with hydrochloric acid", "adding sodium to hydrochloric acid", "precipitation", "heating sodium in air", "Both reactants are soluble, so an indicator is used."],
          ["M", "Potash alum is an example of", "a double salt", "an acid salt", "a basic salt", "a complex salt", "It contains potassium and aluminium ions."],
          ["H", "An aqueous solution of ammonium chloride is acidic because it is the salt of a", "strong acid and a weak base", "weak acid and a strong base", "strong acid and a strong base", "weak acid and a weak base", "It undergoes hydrolysis in water."],
          ["H", "In preparing copper(II) tetraoxosulphate(VI) from copper(II) oxide and dilute acid, the oxide is added in excess in order to", "make sure all the acid is used up", "speed up crystallisation", "make the salt insoluble", "colour the solution", "The excess solid is then filtered off."],
          ["H", "Which pair of solutions gives a precipitate when mixed?", "silver trioxonitrate(V) and sodium chloride", "sodium chloride and potassium trioxonitrate(V)", "sodium hydroxide and hydrochloric acid", "ammonium chloride and sodium trioxonitrate(V)", "Insoluble silver chloride is formed."],
        ],
      },
    ],
  },
];
