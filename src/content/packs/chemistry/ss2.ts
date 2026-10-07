import type { TermPlan } from "../types";

/** SS2 Chemistry — original Precious PS content following the national senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The periodic table and periodicity",
        subtopics: ["Development and structure of the periodic table", "Periodic trends", "Trends in Groups 1 and 7", "Period 3 and the transition metals"],
        objectives: ["Describe the development and structure of the periodic table", "Explain the trends in atomic size, ionisation energy and electronegativity", "Describe the trends in Groups 1 and 7", "Describe the trend across Period 3 and the properties of transition metals"],
        lesson: {
          title: "Patterns among the Elements",
          summary: "Explain periodic trends in the properties of the elements.",
          minutes: 40,
          notes: `## Development
- **Mendeleev** (1869) arranged the elements in order of increasing **atomic mass**, left gaps for undiscovered elements and predicted their properties
- **Moseley** (1913) showed that the correct basis is **atomic number**
**The modern periodic law:** the properties of the elements are a periodic function of their **atomic numbers**.

## Structure
- **groups** (vertical): same number of valence electrons
- **periods** (horizontal): same number of shells
- **blocks**: s-block (Groups 1, 2), p-block (Groups 3–0), d-block (transition metals), f-block (lanthanides and actinides)
- metals on the left, non-metals on the right, **metalloids** (B, Si, Ge, As) along the dividing line

## Periodic trends
| Property | Across a period (left → right) | Down a group |
|---|---|---|
| **atomic radius** | **decreases** (more protons pull the same shell closer) | **increases** (more shells) |
| **ionisation energy** | **increases** | **decreases** |
| **electronegativity** | **increases** | **decreases** |
| **electron affinity** | generally increases | generally decreases |
| **metallic character** | **decreases** | **increases** |

- **ionisation energy**: the energy needed to remove one electron from each atom in a mole of gaseous atoms
- **electronegativity**: the power of an atom to attract the electrons of a bond; fluorine is the most electronegative element
- **electron affinity**: the energy change when a gaseous atom gains an electron
- a cation is **smaller** than its atom; an anion is **larger**

## Group 1: the alkali metals (Li, Na, K …)
soft, low density, low melting points; one valence electron; form **+1 ions**; strong **reducing agents**; react vigorously with cold water to form alkalis and hydrogen. **Reactivity increases down the group**, because the outer electron is further from the nucleus and more easily lost.

## Group 2: the alkaline-earth metals (Be, Mg, Ca …)
two valence electrons; form **+2 ions**; less reactive than Group 1; reactivity increases down the group.

## Group 7: the halogens
| Element | State at room temperature | Colour |
|---|---|---|
| fluorine | gas | pale yellow |
| chlorine | gas | greenish-yellow |
| bromine | liquid | reddish-brown |
| iodine | solid | black (violet vapour) |
diatomic non-metals; seven valence electrons; form **−1 ions**; strong **oxidising agents**. **Reactivity decreases down the group**: a halogen displaces a less reactive one from its salt — Cl₂ + 2KBr → 2KCl + Br₂.

## Group 0: the noble gases
complete outer shells; monatomic; very unreactive.

## Across Period 3
| Element | Na | Mg | Al | Si | P | S | Cl | Ar |
|---|---|---|---|---|---|---|---|---|
| character | metal | metal | metal | metalloid | non-metal | non-metal | non-metal | noble gas |
| oxide | Na₂O | MgO | Al₂O₃ | SiO₂ | P₄O₁₀ | SO₃ | Cl₂O₇ | — |
| nature of oxide | basic | basic | **amphoteric** | acidic | acidic | acidic | acidic | — |
The oxides change from **basic through amphoteric to acidic**; bonding changes from ionic to covalent.

## The transition metals
(Fe, Cu, Zn, Mn, Cr, Ni …)
- hard, dense metals with high melting points
- **variable oxidation states**: Fe²⁺ / Fe³⁺; Cu⁺ / Cu²⁺
- **coloured ions**: Cu²⁺ blue, Fe²⁺ green, Fe³⁺ yellow-brown, MnO₄⁻ purple
- act as **catalysts**: iron (Haber process), vanadium(V) oxide (Contact process), nickel (hydrogenation)
- form **complex ions**: [Cu(NH₃)₄]²⁺

## Diagonal relationship
Some pairs placed diagonally (Li and Mg; Be and Al) resemble each other.`,
          examples: `**Example 1.** How does atomic radius change across a period? *Answer:* It **decreases**, as the increasing nuclear charge pulls the electrons closer.

**Example 2.** Which is more reactive, sodium or potassium? *Answer:* **Potassium** — reactivity increases down Group 1.

**Example 3.** Which Period 3 oxide is amphoteric? *Answer:* **Aluminium oxide**.`,
        },
        questions: [
          ["E", "In the modern periodic table, the elements are arranged in order of increasing", "atomic number", "atomic mass", "density", "number of neutrons", "Moseley established this basis."],
          ["E", "The most electronegative element is", "fluorine", "oxygen", "chlorine", "sodium", "It attracts bonding electrons most strongly."],
          ["E", "At room temperature bromine is a", "reddish-brown liquid", "greenish-yellow gas", "black solid", "colourless gas", "It is the only liquid non-metal."],
          ["M", "Across a period from left to right, atomic radius", "decreases", "increases", "remains constant", "first increases then decreases", "The nuclear charge increases while the shell stays the same."],
          ["M", "Down Group 1, the reactivity of the metals", "increases", "decreases", "stays the same", "disappears", "The outer electron is lost more easily."],
          ["M", "The energy needed to remove an electron from a gaseous atom is called", "ionisation energy", "electron affinity", "electronegativity", "lattice energy", "It increases across a period."],
          ["M", "Which oxide of the Period 3 elements is amphoteric?", "aluminium oxide", "sodium oxide", "sulphur(VI) oxide", "magnesium oxide", "It reacts with both acids and alkalis."],
          ["H", "Chlorine displaces bromine from potassium bromide solution because chlorine is", "a stronger oxidising agent than bromine", "a weaker oxidising agent than bromine", "less electronegative than bromine", "a larger atom than bromine", "Reactivity of the halogens decreases down the group."],
          ["H", "A property characteristic of transition metals is that they", "form coloured ions and show variable oxidation states", "are all gases", "have complete outer shells", "form only colourless compounds", "They also act as catalysts."],
          ["H", "The first ionisation energy decreases down a group because", "the outer electron is further from the nucleus and more shielded", "the nuclear charge decreases", "the atoms become smaller", "the number of valence electrons increases", "Less energy is needed to remove it."],
        ],
      },
      {
        week: 2,
        title: "Stoichiometry: mass and volume relationships",
        subtopics: ["Calculations from equations: reacting masses", "Mass–volume and volume–volume relationships", "Limiting reagent", "Percentage yield and purity"],
        objectives: ["Calculate reacting masses from balanced equations", "Calculate volumes of gases involved in reactions", "Identify the limiting reagent", "Calculate percentage yield and percentage purity"],
        lesson: {
          title: "Calculations from Equations",
          summary: "Use balanced equations to calculate masses and volumes of reactants and products.",
          minutes: 40,
          notes: `## Stoichiometry
**Stoichiometry** is the calculation of the quantities of reactants and products from a **balanced equation**. The coefficients give the **mole ratio**.
(H = 1, C = 12, N = 14, O = 16, Mg = 24, S = 32, Cl = 35.5, Ca = 40, Zn = 65; molar volume at s.t.p. = 22.4 dm³)

## Steps
1. write the **balanced equation**
2. convert the given quantity to **moles**
3. use the **mole ratio** to find the moles of the required substance
4. convert to the required unit (mass, volume or number of particles)

## Reacting masses
**CaCO₃ → CaO + CO₂**
100 g of CaCO₃ gives 56 g of CaO and 44 g of CO₂. So 50 g of CaCO₃ gives **28 g** of CaO.

**2Mg + O₂ → 2MgO**
48 g of Mg gives 80 g of MgO. So 12 g of Mg gives **20 g** of MgO.

**2H₂ + O₂ → 2H₂O**
4 g of hydrogen gives **36 g** of water.

## Mass–volume relationships
**Zn + 2HCl → ZnCl₂ + H₂**
65 g of zinc gives 1 mol (22.4 dm³) of hydrogen at s.t.p. So 6.5 g of zinc (0.1 mol) gives **2.24 dm³**.

**CaCO₃ → CaO + CO₂**
25 g of CaCO₃ (0.25 mol) gives 0.25 × 22.4 = **5.6 dm³** of CO₂ at s.t.p.

## Volume–volume relationships
For gases at the same temperature and pressure, volume ratio = mole ratio (Gay-Lussac's and Avogadro's laws).
**N₂ + 3H₂ → 2NH₃**: 10 cm³ of nitrogen reacts with 30 cm³ of hydrogen to give 20 cm³ of ammonia.
**CH₄ + 2O₂ → CO₂ + 2H₂O**: 20 cm³ of methane needs 40 cm³ of oxygen.

## Limiting reagent
The **limiting reagent** is the reactant that is **completely used up** first; it determines the amount of product. The other is **in excess**.
*Example:* 4 g of hydrogen (2 mol) and 16 g of oxygen (0.5 mol) are mixed. 2H₂ + O₂ → 2H₂O: 0.5 mol of O₂ needs only 1 mol of H₂. **Oxygen is limiting**; water formed = 1 mol = 18 g; 1 mol (2 g) of hydrogen remains.

## Percentage yield
$\\text{percentage yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$
*Example:* if the theoretical yield is 20 g but 15 g is obtained, the yield is **75%**.
Yields fall below 100% because of incomplete reaction, side reactions and losses in handling.

## Percentage purity
$\\text{percentage purity} = \\frac{\\text{mass of pure substance}}{\\text{mass of impure sample}} \\times 100$
*Example:* 10 g of impure limestone gives 1.12 dm³ of CO₂ at s.t.p. Moles of CO₂ = 0.05, so pure CaCO₃ = 5 g: purity **50%**.

## Number of particles
1 mol contains 6.02 × 10²³ particles: 2.24 dm³ of any gas at s.t.p. contains 6.02 × 10²² molecules.

## Why it matters
Industry uses these calculations to decide how much raw material to buy and how much product to expect.`,
          examples: `**Example 1.** What mass of calcium oxide is obtained from 25 g of CaCO₃? *Solution:* 0.25 mol → 0.25 × 56 = **14 g**.

**Example 2.** What volume of hydrogen at s.t.p. is produced when 13 g of zinc reacts with excess acid? *Solution:* 0.2 mol → **4.48 dm³**.

**Example 3.** A reaction should give 50 g of product but gives 40 g. Find the percentage yield. *Solution:* **80%**.`,
        },
        questions: [
          ["E", "The reactant that is completely used up first in a reaction is the", "limiting reagent", "excess reagent", "catalyst", "product", "It determines how much product is formed."],
          ["E", "The coefficients in a balanced equation give the ratio of", "moles of reactants and products", "masses of reactants and products", "densities of the substances", "temperatures of the substances", "They are used in stoichiometric calculations."],
          ["E", "The calculation of quantities of reactants and products from equations is called", "stoichiometry", "chromatography", "electrolysis", "titration", "It relies on the mole ratio."],
          ["M", "The mass of calcium oxide obtained when 50 g of CaCO₃ is completely decomposed (Ca = 40, C = 12, O = 16) is", "28 g", "56 g", "22 g", "44 g", "0.5 mol of CaCO₃ gives 0.5 mol of CaO."],
          ["M", "The mass of magnesium oxide formed when 12 g of magnesium burns completely in oxygen (Mg = 24, O = 16) is", "20 g", "40 g", "28 g", "16 g", "0.5 mol of Mg gives 0.5 mol of MgO."],
          ["M", "The volume of oxygen required for the complete combustion of 20 cm³ of methane, CH₄ + 2O₂ → CO₂ + 2H₂O, is", "40 cm³", "20 cm³", "10 cm³", "60 cm³", "The mole ratio is one to two."],
          ["M", "A reaction with a theoretical yield of 20 g produces 15 g of product. The percentage yield is", "75%", "133%", "25%", "5%", "Actual ÷ theoretical × 100."],
          ["H", "The volume of hydrogen at s.t.p. produced when 6.5 g of zinc reacts with excess dilute acid (Zn = 65; molar volume 22.4 dm³) is", "2.24 dm³", "22.4 dm³", "4.48 dm³", "1.12 dm³", "0.1 mol of zinc gives 0.1 mol of hydrogen."],
          ["H", "4 g of hydrogen is mixed with 16 g of oxygen and ignited (H = 1, O = 16). The mass of water formed is", "18 g", "20 g", "36 g", "9 g", "Oxygen (0.5 mol) is the limiting reagent."],
          ["H", "10 g of impure limestone gives 1.12 dm³ of carbon(IV) oxide at s.t.p. on strong heating (CaCO₃ = 100). The percentage purity of the limestone is", "50%", "11.2%", "25%", "89%", "0.05 mol of CO₂ comes from 5 g of pure CaCO₃."],
        ],
      },
      {
        week: 3,
        title: "Volumetric analysis",
        subtopics: ["Concentration of solutions", "Standard solutions and dilution", "Acid–base titration and choice of indicator", "Titration calculations"],
        objectives: ["Calculate molar and mass concentrations", "Describe the preparation of a standard solution and calculate dilutions", "Describe an acid–base titration and choose a suitable indicator", "Solve titration problems"],
        lesson: {
          title: "Titration",
          summary: "Calculate concentrations and solve acid–base titration problems.",
          minutes: 40,
          notes: `## Concentration
- **molar concentration (molarity)**: moles of solute per dm³ of solution
$C = \\frac{n}{V}$ (mol/dm³), with $V$ in dm³ (1 dm³ = 1000 cm³)
- **mass concentration**: grams of solute per dm³
**mass concentration (g/dm³) = molar concentration × molar mass**

### Examples
- 4 g of NaOH (molar mass 40) in 250 cm³: 0.1 mol ÷ 0.25 dm³ = **0.4 mol/dm³**
- 0.5 mol/dm³ H₂SO₄ (molar mass 98) contains **49 g/dm³**
- moles in 25 cm³ of 0.1 mol/dm³ solution = 0.1 × 0.025 = **0.0025 mol**

## Standard solutions
A **standard solution** is one whose **concentration is accurately known**. A **primary standard** can be weighed out directly because it is pure, stable and not hygroscopic: anhydrous **sodium trioxocarbonate(IV)**, ethanedioic acid. (Sodium hydroxide is unsuitable — it is deliquescent and absorbs carbon(IV) oxide.)
### Preparation
weigh the solute accurately; dissolve it in a little distilled water in a beaker; transfer with rinsings into a **volumetric flask**; make up to the mark; stopper and shake.
*Example:* to make 250 cm³ of 0.1 mol/dm³ Na₂CO₃ (molar mass 106): 0.025 mol × 106 = **2.65 g**.

## Dilution
The amount of solute is unchanged:
$C_1V_1 = C_2V_2$
*Example:* to dilute 100 cm³ of 2 mol/dm³ acid to 0.5 mol/dm³, the final volume is 400 cm³ — add **300 cm³** of water.

## Titration
A method of finding the volume of one solution needed to react exactly with a known volume of another.
### Procedure
1. rinse the **burette** with the acid and fill it; note the initial reading
2. rinse the **pipette** with the alkali; deliver 25.0 cm³ into a **conical flask** (rinsed with distilled water only)
3. add two or three drops of **indicator**
4. run in the acid, swirling, until the indicator **just changes colour** — the **end point**
5. repeat until two **concordant** titres (within 0.2 cm³) are obtained; average them
### Precautions
remove the funnel from the burette; read the bottom of the meniscus at eye level; no air bubbles in the burette tip; use a white tile; do not blow out the last drop from the pipette.

## Choice of indicator
| Titration | Suitable indicator |
|---|---|
| strong acid – strong base | methyl orange or phenolphthalein |
| strong acid – **weak base** (e.g. HCl with Na₂CO₃ or NH₃) | **methyl orange** |
| **weak acid** – strong base (e.g. ethanoic acid with NaOH) | **phenolphthalein** |
| weak acid – weak base | no suitable indicator |

## Titration calculations
$\\frac{C_AV_A}{C_BV_B} = \\frac{n_A}{n_B}$
where $n_A$ and $n_B$ are the numbers of moles of acid and base in the balanced equation.
### Example 1
25.0 cm³ of 0.1 mol/dm³ NaOH is neutralised by 20.0 cm³ of HCl. (HCl + NaOH: 1 : 1)
$C_A = \\frac{0.1 \\times 25}{20} = 0.125$ mol/dm³
### Example 2
What volume of 0.1 mol/dm³ H₂SO₄ neutralises 25.0 cm³ of 0.2 mol/dm³ NaOH? (H₂SO₄ + 2NaOH: 1 : 2)
moles of NaOH = 0.005; moles of acid = 0.0025; volume = 0.0025 ÷ 0.1 = 0.025 dm³ = **25.0 cm³**

## Other uses
finding percentage purity, molar mass, water of crystallisation and the solubility of substances.`,
          examples: `**Example 1.** Find the molarity of a solution containing 10 g of NaOH in 500 cm³. *Solution:* 0.25 mol ÷ 0.5 dm³ = **0.5 mol/dm³**.

**Example 2.** 20 cm³ of 0.5 mol/dm³ HCl is diluted to 100 cm³. Find the new concentration. *Solution:* 0.5 × 20 ÷ 100 = **0.1 mol/dm³**.

**Example 3.** Which indicator suits the titration of ethanoic acid with sodium hydroxide? *Answer:* **Phenolphthalein**.`,
        },
        questions: [
          ["E", "A solution whose concentration is accurately known is called a", "standard solution", "saturated solution", "dilute solution", "buffer solution", "It is used in titration."],
          ["E", "In a titration, the acid is usually delivered from a", "burette", "pipette", "beaker", "measuring cylinder", "It allows variable volumes to be measured accurately."],
          ["E", "The point in a titration at which the indicator just changes colour is the", "end point", "boiling point", "saturation point", "starting point", "It shows that the reaction is complete."],
          ["M", "The molar concentration of a solution containing 4 g of NaOH (molar mass 40) in 250 cm³ of solution is", "0.4 mol/dm³", "0.1 mol/dm³", "1.6 mol/dm³", "0.025 mol/dm³", "0.1 mol ÷ 0.25 dm³."],
          ["M", "The mass concentration of 0.5 mol/dm³ H₂SO₄ (molar mass 98) is", "49 g/dm³", "196 g/dm³", "98 g/dm³", "24.5 g/dm³", "Multiply the molarity by the molar mass."],
          ["M", "The indicator suitable for titrating hydrochloric acid against sodium trioxocarbonate(IV) solution is", "methyl orange", "phenolphthalein", "litmus paper only", "starch", "It is a strong acid – weak base titration."],
          ["M", "The mass of anhydrous Na₂CO₃ (molar mass 106) needed to prepare 250 cm³ of 0.1 mol/dm³ solution is", "2.65 g", "10.6 g", "26.5 g", "1.06 g", "0.025 mol × 106."],
          ["H", "25.0 cm³ of 0.1 mol/dm³ NaOH is neutralised by 20.0 cm³ of hydrochloric acid. The concentration of the acid is", "0.125 mol/dm³", "0.08 mol/dm³", "0.25 mol/dm³", "0.1 mol/dm³", "The mole ratio is 1 : 1, so 0.1 × 25 ÷ 20."],
          ["H", "The volume of 0.1 mol/dm³ H₂SO₄ needed to neutralise 25.0 cm³ of 0.2 mol/dm³ NaOH is", "25.0 cm³", "50.0 cm³", "12.5 cm³", "100 cm³", "One mole of acid reacts with two moles of alkali."],
          ["H", "What volume of water must be added to 100 cm³ of 2 mol/dm³ acid to make it 0.5 mol/dm³?", "300 cm³", "400 cm³", "200 cm³", "100 cm³", "The final volume must be 400 cm³."],
        ],
      },
      {
        week: 4,
        title: "Oxidation and reduction",
        subtopics: ["Definitions of oxidation and reduction", "Oxidising and reducing agents", "Tests for oxidising and reducing agents", "Half-equations and balancing redox equations"],
        objectives: ["Define oxidation and reduction in four ways", "Identify oxidising and reducing agents in a reaction", "Describe tests for oxidising and reducing agents", "Write half-equations and balance redox equations"],
        lesson: {
          title: "Redox Reactions",
          summary: "Explain oxidation and reduction and identify oxidising and reducing agents.",
          minutes: 40,
          notes: `## Definitions
| | Oxidation | Reduction |
|---|---|---|
| oxygen | **gain** of oxygen | **loss** of oxygen |
| hydrogen | **loss** of hydrogen | **gain** of hydrogen |
| electrons | **loss** of electrons | **gain** of electrons |
| oxidation number | **increase** | **decrease** |
A memory aid: **OIL RIG** — Oxidation Is Loss, Reduction Is Gain (of electrons).
Oxidation and reduction always occur **together**: a **redox** reaction.

### Examples
- 2Mg + O₂ → 2MgO: magnesium gains oxygen — oxidised
- CuO + H₂ → Cu + H₂O: copper(II) oxide loses oxygen — reduced; hydrogen is oxidised
- H₂S + Cl₂ → 2HCl + S: hydrogen sulphide loses hydrogen — oxidised
- Zn + Cu²⁺ → Zn²⁺ + Cu: zinc loses electrons (0 → +2) — oxidised; copper(II) ions gain electrons (+2 → 0) — reduced
- 2Fe²⁺ + Cl₂ → 2Fe³⁺ + 2Cl⁻: iron(II) is oxidised; chlorine is reduced

## Oxidising and reducing agents
- an **oxidising agent** brings about oxidation; it **accepts electrons** and is itself **reduced**
- a **reducing agent** brings about reduction; it **donates electrons** and is itself **oxidised**

| Oxidising agents | Reducing agents |
|---|---|
| oxygen, chlorine | hydrogen, carbon, carbon(II) oxide |
| acidified **potassium tetraoxomanganate(VII)**, KMnO₄ | hydrogen sulphide, sulphur(IV) oxide |
| acidified **potassium heptaoxodichromate(VI)**, K₂Cr₂O₇ | iron(II) salts |
| hydrogen peroxide | potassium iodide |
| concentrated HNO₃ and H₂SO₄ | reactive metals (Na, Mg, Zn) |
Some substances, such as hydrogen peroxide and sulphur(IV) oxide, can act as either.

## Tests
### For an oxidising agent
- it liberates **iodine** from potassium iodide solution — a brown colour, turning **starch blue-black**
- it turns pale green **iron(II)** solution **yellow-brown** (iron(III))
- it gives a yellow deposit of **sulphur** with hydrogen sulphide
### For a reducing agent
- it **decolorises** purple acidified **KMnO₄**
- it turns orange acidified **K₂Cr₂O₇ green**
- it turns yellow-brown iron(III) solution green

## Oxidation numbers in redox
Find the oxidation number of each element before and after:
MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂
Mn: +4 → +2 (reduced); Cl: −1 → 0 (oxidised). So MnO₂ is the oxidising agent and HCl the reducing agent.

## Half-equations
A redox reaction can be split into an oxidation half and a reduction half:
- oxidation: Zn → Zn²⁺ + 2e⁻
- reduction: Cu²⁺ + 2e⁻ → Cu
- overall: Zn + Cu²⁺ → Zn²⁺ + Cu
### Balancing in acid solution
1. write the two half-equations
2. balance atoms other than O and H
3. balance O with H₂O, then H with H⁺
4. balance charge with electrons
5. multiply so that electrons lost = electrons gained; add
*Example:* MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O and Fe²⁺ → Fe³⁺ + e⁻ give
**MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O**

## Disproportionation
A reaction in which the **same substance is both oxidised and reduced**: Cl₂ + H₂O → HCl + HOCl (chlorine goes from 0 to −1 and +1).

## Redox in everyday life
combustion, respiration, rusting, bleaching, extraction of metals, batteries and photography.`,
          examples: `**Example 1.** In Zn + Cu²⁺ → Zn²⁺ + Cu, what is oxidised? *Answer:* **Zinc** — it loses two electrons.

**Example 2.** What colour change shows that a gas is a reducing agent with acidified K₂Cr₂O₇? *Answer:* **Orange to green**.

**Example 3.** Identify the oxidising agent in 2KI + Cl₂ → 2KCl + I₂. *Answer:* **Chlorine** — it gains electrons.`,
        },
        questions: [
          ["E", "In terms of electrons, oxidation is the", "loss of electrons", "gain of electrons", "sharing of electrons", "pairing of electrons", "Reduction is the gain of electrons."],
          ["E", "A substance that brings about oxidation and is itself reduced is", "an oxidising agent", "a reducing agent", "a catalyst", "an indicator", "It accepts electrons."],
          ["E", "A reaction in which oxidation and reduction occur together is called", "a redox reaction", "neutralisation", "hydrolysis", "precipitation only", "One substance loses the electrons that another gains."],
          ["M", "In the reaction CuO + H₂ → Cu + H₂O, the substance reduced is", "copper(II) oxide", "hydrogen", "water", "copper", "It loses oxygen."],
          ["M", "A reducing agent turns acidified potassium heptaoxodichromate(VI) solution from orange to", "green", "purple", "colourless", "blue", "Chromium(VI) is reduced to chromium(III)."],
          ["M", "An oxidising agent liberates iodine from potassium iodide; with starch the colour produced is", "blue-black", "green", "pink", "white", "This is a test for oxidising agents."],
          ["M", "In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, the oxidising agent is", "Cu²⁺", "Zn", "Zn²⁺", "Cu", "It gains electrons and is reduced."],
          ["H", "In the reaction MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂, the oxidation number of manganese changes from", "+4 to +2", "+2 to +4", "+7 to +2", "+4 to 0", "Manganese is reduced."],
          ["H", "The number of moles of iron(II) ions oxidised by one mole of MnO₄⁻ in acid solution is", "5", "1", "2", "8", "MnO₄⁻ gains five electrons; each Fe²⁺ loses one."],
          ["H", "The reaction Cl₂ + H₂O → HCl + HOCl is described as disproportionation because", "chlorine is both oxidised and reduced", "water is decomposed", "no electrons are transferred", "chlorine is only reduced", "Chlorine goes from 0 to −1 and to +1."],
        ],
      },
      {
        week: 5,
        title: "Electrolysis",
        subtopics: ["Electrolytes and the terms of electrolysis", "Factors affecting the discharge of ions", "Electrolysis of selected electrolytes", "Faraday's laws and applications"],
        objectives: ["Define electrolysis and its terms", "State the factors that determine which ions are discharged", "Describe the electrolysis of selected electrolytes", "State Faraday's laws, solve problems and list the uses of electrolysis"],
        lesson: {
          title: "Chemical Change by Electricity",
          summary: "Explain electrolysis, predict its products and apply Faraday's laws.",
          minutes: 40,
          notes: `## Terms
- **electrolysis**: the **chemical decomposition of a compound** (molten or in solution) by the passage of an **electric current**
- **electrolyte**: a compound that conducts electricity when molten or dissolved and is decomposed by it
  - **strong** electrolytes ionise completely: strong acids and alkalis, salts
  - **weak** electrolytes ionise partly: ethanoic acid, aqueous ammonia, water
  - **non-electrolytes**: sugar, ethanol, kerosene
- **electrodes**: the **anode** (positive) and the **cathode** (negative)
- **anions** (negative ions) move to the anode and are **oxidised**; **cations** (positive ions) move to the cathode and are **reduced**

## Factors affecting preferential discharge
1. **position in the electrochemical series** — the ion lower in the series is discharged in preference
 - cations: K⁺, Na⁺, Ca²⁺, Mg²⁺, Al³⁺, Zn²⁺, Fe²⁺, Pb²⁺, **H⁺**, Cu²⁺, Ag⁺ (ease of discharge increases →)
 - anions: SO₄²⁻, NO₃⁻, Cl⁻, Br⁻, I⁻, **OH⁻** (ease of discharge increases →)
2. **concentration** — a much more concentrated ion may be discharged instead (Cl⁻ rather than OH⁻ in concentrated brine)
3. **nature of the electrode** — an active electrode may take part (copper anode dissolves; a mercury cathode discharges sodium)

## Examples
| Electrolyte | Electrodes | Cathode | Anode | Remarks |
|---|---|---|---|---|
| **acidified water** (dilute H₂SO₄) | platinum | **hydrogen** (2 volumes) | **oxygen** (1 volume) | acid becomes more concentrated |
| **concentrated brine** (NaCl) | carbon | **hydrogen** | **chlorine** | **sodium hydroxide** remains in solution |
| dilute NaCl | carbon | hydrogen | oxygen | effectively electrolysis of water |
| **copper(II) tetraoxosulphate(VI)** | platinum or carbon | **copper** deposited | **oxygen** | blue colour fades; solution becomes acidic |
| copper(II) tetraoxosulphate(VI) | **copper** | copper deposited | **anode dissolves** | colour unchanged; used to purify copper |
| molten NaCl | carbon / steel | sodium | chlorine | |

### Half-equations
- cathode: 2H⁺ + 2e⁻ → H₂; Cu²⁺ + 2e⁻ → Cu
- anode: 4OH⁻ → 2H₂O + O₂ + 4e⁻; 2Cl⁻ → Cl₂ + 2e⁻; Cu → Cu²⁺ + 2e⁻

## Faraday's laws
**First law:** the mass of a substance liberated at an electrode is **directly proportional to the quantity of electricity** passed.
$m \\propto Q$, where $Q = It$ (coulombs = amperes × seconds).
**Second law:** when the same quantity of electricity passes through different electrolytes, the masses liberated are proportional to their **chemical equivalents** (molar mass ÷ charge on the ion).
**One faraday (F) = 96 500 C** = the charge on one mole of electrons. It liberates one mole of a univalent ion (Ag⁺, H⁺), half a mole of a divalent ion (Cu²⁺) and one-third of a mole of a trivalent ion (Al³⁺).

### Worked examples
- 2 A for 965 s through copper(II) tetraoxosulphate(VI) (Cu = 63.5): Q = 1930 C = 0.02 F; Cu²⁺ + 2e⁻ → Cu, so 0.01 mol = **0.635 g**
- 0.5 A for 1930 s through silver trioxonitrate(V) (Ag = 108): Q = 965 C = 0.01 F → 0.01 mol = **1.08 g**
- 0.2 F through acidified water: 2H⁺ + 2e⁻ → H₂ gives 0.1 mol = **2.24 dm³** of hydrogen at s.t.p.

## Applications
- **electroplating**: the article is the **cathode**, the plating metal the **anode**, in a solution of a salt of that metal — for protection and appearance (silver, chromium, nickel)
- **purification of metals** such as copper: impure copper anode, pure copper cathode
- **extraction of reactive metals**: sodium (Downs cell), aluminium (from bauxite in molten cryolite), calcium, magnesium
- **manufacture** of sodium hydroxide, chlorine and hydrogen from brine
- **anodising** aluminium.`,
          examples: `**Example 1.** What are the products of electrolysing acidified water? *Answer:* **Hydrogen at the cathode** and **oxygen at the anode**, in the ratio 2 : 1 by volume.

**Example 2.** Find the quantity of electricity when 3 A flows for 10 minutes. *Solution:* 3 × 600 = **1800 C**.

**Example 3.** In electroplating a spoon with silver, what is the spoon? *Answer:* The **cathode**.`,
        },
        questions: [
          ["E", "The decomposition of a compound by the passage of an electric current is called", "electrolysis", "hydrolysis", "electroplating only", "ionisation", "It occurs in molten or dissolved electrolytes."],
          ["E", "The positive electrode in electrolysis is the", "anode", "cathode", "electrolyte", "anion", "Negative ions move towards it."],
          ["E", "Which of these substances is a non-electrolyte?", "sugar solution", "sodium chloride solution", "dilute tetraoxosulphate(VI) acid", "copper(II) tetraoxosulphate(VI) solution", "It contains no ions."],
          ["M", "In the electrolysis of acidified water, the gas produced at the cathode is", "hydrogen", "oxygen", "chlorine", "sulphur(IV) oxide", "Its volume is twice that of the oxygen at the anode."],
          ["M", "During the electrolysis of concentrated brine, the gas liberated at the anode is", "chlorine", "oxygen", "hydrogen", "nitrogen", "Chloride ions are discharged because of their high concentration."],
          ["M", "The quantity of electricity carried by one mole of electrons is", "96 500 C", "22.4 C", "6.02 × 10²³ C", "1 C", "This is one faraday."],
          ["M", "In electroplating an iron spoon with silver, the spoon is made the", "cathode", "anode", "electrolyte", "salt bridge", "Silver ions are discharged on it."],
          ["H", "A current of 2 A is passed for 965 s through copper(II) tetraoxosulphate(VI) solution (Cu = 63.5; 1 F = 96 500 C). The mass of copper deposited is", "0.635 g", "1.27 g", "0.318 g", "6.35 g", "0.02 F deposits 0.01 mol of copper."],
          ["H", "When copper(II) tetraoxosulphate(VI) solution is electrolysed with copper electrodes, the", "anode dissolves and the solution stays blue", "blue colour fades", "solution becomes acidic", "oxygen is given off at the anode", "Copper passes from the anode to the cathode."],
          ["H", "The volume of hydrogen at s.t.p. liberated when 0.2 F of electricity is passed through acidified water (molar volume 22.4 dm³) is", "2.24 dm³", "4.48 dm³", "1.12 dm³", "22.4 dm³", "Two faradays liberate one mole of hydrogen gas."],
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
        title: "Energy changes in chemical reactions",
        subtopics: ["Exothermic and endothermic reactions", "Heats of reaction", "Bond energies and energy profiles", "Entropy and free energy"],
        objectives: ["Distinguish exothermic from endothermic reactions", "Define and calculate heats of reaction", "Explain energy changes in terms of bond breaking and bond making", "Explain entropy and free energy and predict spontaneity"],
        lesson: {
          title: "Energetics",
          summary: "Explain and calculate the energy changes that accompany chemical reactions.",
          minutes: 40,
          notes: `## Heat content and enthalpy change
Every substance has a **heat content (enthalpy), H**. The **enthalpy change** of a reaction is
**ΔH = H(products) − H(reactants)**, measured in **kJ/mol**.

## Exothermic and endothermic reactions
| Exothermic | Endothermic |
|---|---|
| heat is **given out** to the surroundings | heat is **absorbed** from the surroundings |
| temperature of the surroundings **rises** | temperature of the surroundings **falls** |
| **ΔH is negative** | **ΔH is positive** |
| products have less energy than reactants | products have more energy than reactants |
**Exothermic:** combustion; neutralisation; respiration; dissolving sodium hydroxide or concentrated tetraoxosulphate(VI) acid in water; the Haber and Contact processes; rusting.
**Endothermic:** thermal decomposition of calcium trioxocarbonate(IV); photosynthesis; dissolving ammonium chloride or ammonium trioxonitrate(V) in water; the formation of nitrogen(II) oxide; water gas production.

## Heats of reaction
- **heat of formation**: the heat change when **one mole** of a compound is formed from its **elements** in their standard states
- **heat of combustion**: the heat **evolved** when one mole of a substance is **burnt completely** in oxygen
- **heat of neutralisation**: the heat evolved when one mole of **water** is formed from H⁺ and OH⁻; for a strong acid and strong base it is about **−57 kJ/mol**, whatever the acid or base, because the reaction is always H⁺ + OH⁻ → H₂O. It is smaller for weak acids or bases.
- **heat of solution**: the heat change when one mole of a substance dissolves in so much water that further dilution causes no heat change

### Measuring heat changes
$\\text{heat} = mc\\Delta T$
with $c = 4.2$ J/(g K) for water. 100 g of water warmed through 10 K absorbs 100 × 4.2 × 10 = 4200 J = **4.2 kJ**. A **calorimeter** (bomb calorimeter for combustion) is used.
If 0.5 mol of a fuel releases 400 kJ, its heat of combustion is **−800 kJ/mol**.

## Bond energies
- **bond breaking absorbs** energy (endothermic)
- **bond making releases** energy (exothermic)
ΔH = energy absorbed in breaking bonds − energy released in forming bonds
If more energy is released than absorbed, the reaction is exothermic.

## Energy profile diagrams
The **activation energy (Eₐ)** is the minimum energy the reactants must have before they can react — the "energy barrier". A **catalyst** lowers the activation energy but does **not** change ΔH.

## Hess's law
**The total enthalpy change of a reaction is the same whatever route is taken**, provided the initial and final conditions are the same. It lets us calculate heats that cannot be measured directly.

## Entropy
**Entropy (S)** is a measure of the **disorder or randomness** of a system. Entropy increases (ΔS positive) when a solid melts, a liquid vaporises, a solid dissolves, or the number of gas molecules increases. Gases have the highest entropy, solids the lowest.

## Free energy
The **Gibbs free energy** change decides whether a reaction can occur by itself:
**ΔG = ΔH − TΔS** (T in kelvin)
- **ΔG negative**: the reaction is **spontaneous** (feasible)
- **ΔG positive**: not spontaneous
- **ΔG = 0**: the system is at **equilibrium**
*Example:* ΔH = −100 kJ, ΔS = +0.1 kJ/K at 300 K: ΔG = −100 − (300 × 0.1) = **−130 kJ** — spontaneous.
A reaction with ΔH negative and ΔS positive is spontaneous at all temperatures.

## Fuels
A good fuel has a high heat of combustion, burns cleanly, is cheap, safe and easy to store.`,
          examples: `**Example 1.** Is the dissolving of ammonium chloride in water exothermic or endothermic? *Answer:* **Endothermic** — the solution becomes cold.

**Example 2.** Calculate the heat absorbed when 200 g of water is warmed through 5 K. *Solution:* 200 × 4.2 × 5 = **4200 J**.

**Example 3.** For a reaction, ΔH = +50 kJ and TΔS = +80 kJ. Is it spontaneous? *Solution:* ΔG = 50 − 80 = **−30 kJ** — yes.`,
        },
        questions: [
          ["E", "A reaction that gives out heat to the surroundings is", "exothermic", "endothermic", "reversible", "catalytic", "Its enthalpy change is negative."],
          ["E", "For an endothermic reaction, ΔH is", "positive", "negative", "zero", "always −57 kJ", "Heat is absorbed from the surroundings."],
          ["E", "A measure of the disorder of a system is its", "entropy", "enthalpy", "activation energy", "free energy", "It is greatest for gases."],
          ["M", "The heat evolved when one mole of a substance is burnt completely in oxygen is the heat of", "combustion", "formation", "neutralisation", "solution", "It is always exothermic."],
          ["M", "The heat absorbed when 100 g of water is warmed through 10 K (specific heat capacity 4.2 J/(g K)) is", "4.2 kJ", "42 kJ", "420 J", "0.42 kJ", "100 × 4.2 × 10 = 4200 J."],
          ["M", "The minimum energy that reacting particles must possess before they can react is the", "activation energy", "bond energy", "heat of reaction", "lattice energy", "A catalyst lowers it."],
          ["M", "Which of the following processes is endothermic?", "thermal decomposition of calcium trioxocarbonate(IV)", "combustion of methane", "neutralisation of an acid by an alkali", "respiration", "Heat must be supplied continuously."],
          ["H", "The heat of neutralisation of any strong acid by any strong base is nearly constant because", "the reaction is always H⁺ + OH⁻ → H₂O", "all acids have the same formula", "the salts formed are identical", "water has a high specific heat", "Strong acids and bases are fully ionised."],
          ["H", "For a reaction at 300 K, ΔH = −100 kJ and ΔS = +0.1 kJ/K. The value of ΔG is", "−130 kJ", "−70 kJ", "+130 kJ", "−100.1 kJ", "ΔG = ΔH − TΔS = −100 − 30."],
          ["H", "A catalyst affects a reaction by", "lowering the activation energy without changing ΔH", "making ΔH more negative", "increasing the energy of the products", "raising the activation energy", "It provides an alternative reaction path."],
        ],
      },
      {
        week: 2,
        title: "Rates of chemical reactions",
        subtopics: ["Meaning and measurement of reaction rate", "The collision theory", "Factors affecting rate", "Rate curves and catalysts"],
        objectives: ["Define reaction rate and describe how it is measured", "Explain the collision theory", "Explain the factors that affect the rate of a reaction", "Interpret rate curves and describe the action of catalysts"],
        lesson: {
          title: "How Fast?",
          summary: "Explain the factors that affect how fast a chemical reaction goes.",
          minutes: 40,
          notes: `## Rate of reaction
The **rate of a reaction** is the **change in the concentration of a reactant or product per unit time**:
rate = change in amount ÷ time taken
Some reactions are very fast (precipitation, explosions, neutralisation); others are slow (rusting, fermentation, weathering).

### Measuring rate
Follow a property that changes with time:
- the **volume of gas** evolved (gas syringe)
- the **loss in mass** of the reaction vessel
- a **colour change** or the formation of a precipitate (the time for a cross to disappear in the thiosulphate–acid reaction)
- change in pH, conductivity or pressure

## The collision theory
For a reaction to occur, particles must **collide**. Not every collision leads to reaction. An **effective collision** requires
1. energy equal to or greater than the **activation energy**, and
2. the correct **orientation**.
The rate depends on the **frequency of effective collisions**.

## Factors affecting rate
### 1. Nature of the reactants
Ionic reactions in solution are fast; reactions between covalent molecules are usually slow. Reactive metals react faster than less reactive ones.
### 2. Concentration (and pressure for gases)
Higher concentration → more particles per unit volume → **more frequent collisions** → faster rate. Raising the pressure of a gas has the same effect.
### 3. Temperature
Raising the temperature makes particles move faster: they collide more often and, more importantly, **more of them have the activation energy**. A rise of **10 °C roughly doubles** the rate of many reactions.
### 4. Surface area
Powdered solids react faster than lumps because a **larger surface area** is exposed. Hence flour dust and coal dust can explode.
### 5. Catalyst
A **catalyst** alters the rate of a reaction but is **chemically unchanged** at the end. A **positive** catalyst provides an alternative pathway of **lower activation energy**; an **inhibitor** (negative catalyst) slows a reaction.
### 6. Light
Some reactions are speeded up by light: photosynthesis, the decomposition of silver halides (photography), hydrogen and chlorine.

## Rate curves
In a graph of volume of gas against time:
- the curve is **steepest at the start** (highest concentration)
- it becomes less steep as the reactants are used up
- it becomes **horizontal** when the reaction is **complete**
- a faster reaction gives a steeper curve but the **same final volume** if the amounts are the same
- the rate at any moment is the **gradient of the tangent**

## Catalysts
### Characteristics
- unchanged in mass and chemical composition at the end
- needed in small amounts
- **specific** in action
- do **not** change the amount of product or the position of equilibrium
- can be "poisoned" by impurities
### Examples
| Reaction | Catalyst |
|---|---|
| decomposition of hydrogen peroxide | manganese(IV) oxide |
| Haber process | iron |
| Contact process | vanadium(V) oxide |
| hydrogenation of oils | nickel |
| oxidation of ammonia | platinum–rhodium |
| reactions in living things | **enzymes** (biological catalysts) |

## Applications
food is kept in refrigerators to slow decay; pressure cookers speed cooking; industry chooses temperature, pressure and catalyst for an economic rate; catalytic converters clean exhaust gases.`,
          examples: `**Example 1.** Why does powdered marble react faster with acid than marble chips? *Answer:* It has a **larger surface area**, so there are more collisions.

**Example 2.** 60 cm³ of gas is collected in 20 s. Find the average rate. *Solution:* 60 ÷ 20 = **3 cm³/s**.

**Example 3.** Which catalyst is used to decompose hydrogen peroxide? *Answer:* **Manganese(IV) oxide**.`,
        },
        questions: [
          ["E", "A substance that alters the rate of a reaction but remains chemically unchanged is", "a catalyst", "a reactant", "a product", "an indicator", "It is not used up."],
          ["E", "Increasing the temperature of a reaction mixture generally makes the reaction", "faster", "slower", "stop", "reverse", "More particles have the activation energy."],
          ["E", "Biological catalysts are called", "enzymes", "hormones", "vitamins", "inhibitors", "They speed up reactions in living things."],
          ["M", "Powdered calcium trioxocarbonate(IV) reacts faster with acid than lumps of it because the powder has", "a larger surface area", "a higher mass", "a lower concentration", "more activation energy", "More particles are exposed to collision."],
          ["M", "According to the collision theory, a reaction occurs only when colliding particles", "have at least the activation energy", "are all of the same kind", "move very slowly", "are in the solid state", "They must also be correctly oriented."],
          ["M", "The catalyst used in the decomposition of hydrogen peroxide is", "manganese(IV) oxide", "iron", "vanadium(V) oxide", "nickel", "It is a black powder."],
          ["M", "60 cm³ of gas is produced in the first 20 s of a reaction. The average rate over that time is", "3 cm³/s", "1200 cm³/s", "0.33 cm³/s", "40 cm³/s", "Divide the volume by the time."],
          ["H", "Raising the temperature increases reaction rate mainly because", "a larger fraction of the particles have the activation energy", "the activation energy is raised", "the particles become larger", "the concentration increases", "More collisions are then effective."],
          ["H", "A graph of volume of gas against time becomes horizontal when", "the reaction is complete", "the reaction is fastest", "a catalyst is added", "the temperature is raised", "No more gas is being produced."],
          ["H", "If the same mass of marble is used as powder instead of chips with excess acid, the rate curve will", "be steeper but reach the same final volume", "reach a higher final volume", "be less steep", "start at a higher volume", "Surface area affects rate, not the amount of product."],
        ],
      },
      {
        week: 3,
        title: "Chemical equilibrium",
        subtopics: ["Reversible reactions and dynamic equilibrium", "Le Chatelier's principle", "The equilibrium constant", "Industrial applications: the Haber and Contact processes"],
        objectives: ["Explain reversible reactions and dynamic equilibrium", "State Le Chatelier's principle and predict the effect of changes", "Write the equilibrium constant expression", "Explain the conditions chosen for the Haber and Contact processes"],
        lesson: {
          title: "Reactions That Go Both Ways",
          summary: "Explain chemical equilibrium and apply Le Chatelier's principle.",
          minutes: 40,
          notes: `## Reversible reactions
A **reversible reaction** can proceed in **both directions**; it is shown with the sign ⇌.
- N₂ + 3H₂ ⇌ 2NH₃
- CaCO₃ ⇌ CaO + CO₂ (in a closed vessel)
- CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O
- NH₄Cl ⇌ NH₃ + HCl

## Dynamic equilibrium
In a **closed system**, a reversible reaction reaches a state in which the **rate of the forward reaction equals the rate of the backward reaction**. This is **dynamic equilibrium**.
### Features
- both reactions **continue**, at equal rates
- the **concentrations** of reactants and products remain **constant** (not necessarily equal)
- it can be reached from **either direction**
- it is attained only in a **closed system**
- a **catalyst** does not change the position of equilibrium; it only shortens the time to reach it

## Le Chatelier's principle
**If a system in equilibrium is subjected to a change (in concentration, pressure or temperature), the position of equilibrium shifts so as to oppose the change.**

### Concentration
- adding a reactant or removing a product shifts the equilibrium to the **right**
- adding a product shifts it to the **left**

### Pressure (gaseous systems only)
- **increasing** pressure favours the side with **fewer gas molecules**
- decreasing pressure favours the side with more
- if the number of gas molecules is the same on both sides (H₂ + I₂ ⇌ 2HI), pressure has **no effect**

### Temperature
- **increasing** temperature favours the **endothermic** direction
- decreasing temperature favours the **exothermic** direction

### Catalyst
no effect on the position of equilibrium.

## The equilibrium constant
For aA + bB ⇌ cC + dD:
$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$
- a large K means the equilibrium lies to the right
- K changes **only with temperature**
For N₂ + 3H₂ ⇌ 2NH₃: $K_c = \\frac{[NH_3]^2}{[N_2][H_2]^3}$

## The Haber process (ammonia)
**N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ**
- 4 volumes of gas give 2 — so **high pressure** favours ammonia: about **200 atmospheres**
- the forward reaction is exothermic — so a **low temperature** favours the yield; but the rate would be too slow, so a **compromise** temperature of about **450 °C** is used
- **finely divided iron** catalyst
- the ammonia is liquefied and removed; unreacted gases are **recycled**

## The Contact process (tetraoxosulphate(VI) acid)
**2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH negative**
- catalyst: **vanadium(V) oxide**
- temperature about **450 °C** (compromise)
- pressure: just above atmospheric — the yield is already high, so high pressure is not economical
- excess air (oxygen) pushes the equilibrium to the right
- sulphur(VI) oxide is absorbed in concentrated acid to form **oleum**, which is then diluted

## Other equilibria
the limekiln (CaCO₃ ⇌ CaO + CO₂ — carbon(IV) oxide is swept away so decomposition goes to completion); the ionisation of water and weak acids; carbonated drinks.`,
          examples: `**Example 1.** What happens to the equilibrium N₂ + 3H₂ ⇌ 2NH₃ when the pressure is increased? *Answer:* It shifts to the **right** — towards fewer gas molecules.

**Example 2.** How does a rise in temperature affect an exothermic equilibrium? *Answer:* It shifts to the **left**, lowering the yield.

**Example 3.** Write K_c for H₂ + I₂ ⇌ 2HI. *Answer:* $K_c = \\frac{[HI]^2}{[H_2][I_2]}$.`,
        },
        questions: [
          ["E", "A reaction that can proceed in both the forward and backward directions is", "reversible", "irreversible", "exothermic only", "catalytic", "It is shown with a double arrow."],
          ["E", "At dynamic equilibrium, the rates of the forward and backward reactions are", "equal", "zero", "unequal", "always increasing", "Both reactions continue."],
          ["E", "The catalyst used in the Haber process is", "iron", "vanadium(V) oxide", "nickel", "platinum", "It is used in a finely divided form."],
          ["M", "According to Le Chatelier's principle, increasing the pressure on a gaseous equilibrium favours the side with", "fewer gas molecules", "more gas molecules", "more heat", "the catalyst", "The system opposes the increase in pressure."],
          ["M", "Raising the temperature of a system at equilibrium favours the", "endothermic reaction", "exothermic reaction", "forward reaction always", "reaction with fewer molecules", "The system absorbs the added heat."],
          ["M", "A catalyst added to a system at equilibrium", "does not change the position of equilibrium", "shifts the equilibrium to the right", "shifts the equilibrium to the left", "increases the equilibrium constant", "It speeds up both reactions equally."],
          ["M", "The catalyst used in the Contact process is", "vanadium(V) oxide", "iron", "manganese(IV) oxide", "nickel", "It converts sulphur(IV) oxide to sulphur(VI) oxide."],
          ["H", "In the Haber process a temperature of about 450 °C is used rather than a lower one because", "the reaction would be too slow at low temperature", "a low temperature reduces the yield", "the catalyst melts at low temperature", "ammonia decomposes at low temperature", "It is a compromise between yield and rate."],
          ["H", "For the equilibrium H₂(g) + I₂(g) ⇌ 2HI(g), an increase in pressure", "has no effect on the position of equilibrium", "shifts the equilibrium to the right", "shifts the equilibrium to the left", "decomposes the hydrogen iodide", "There are equal numbers of gas molecules on both sides."],
          ["H", "The value of the equilibrium constant of a reaction changes only when the", "temperature is changed", "pressure is changed", "concentration is changed", "catalyst is changed", "Other changes shift the position without altering K."],
        ],
      },
      {
        week: 4,
        title: "Hydrogen and oxygen",
        subtopics: ["Preparation and properties of hydrogen", "Uses of hydrogen", "Preparation and properties of oxygen", "Oxides and their classification"],
        objectives: ["Describe the preparation and properties of hydrogen", "State the uses of hydrogen", "Describe the preparation and properties of oxygen", "Classify oxides"],
        lesson: {
          title: "Two Important Gases",
          summary: "Describe the preparation, properties and uses of hydrogen and oxygen and classify oxides.",
          minutes: 40,
          notes: `## Hydrogen
The lightest and most abundant element in the universe; on earth it occurs combined, in water and organic compounds. It has three isotopes: protium, deuterium and tritium.

### Laboratory preparation
By the action of **dilute hydrochloric or tetraoxosulphate(VI) acid on zinc**:
Zn + H₂SO₄ → ZnSO₄ + H₂
(A little copper(II) tetraoxosulphate(VI) speeds it up.) It is collected over water or by **upward delivery** (it is much less dense than air). It can be dried with concentrated tetraoxosulphate(VI) acid or calcium chloride.
Other methods: reactive metals with cold water (Na, Ca); steam on heated magnesium or iron.

### Industrial preparation
- from **natural gas**: CH₄ + H₂O → CO + 3H₂ (steam reforming)
- from **water gas** (the Bosch process): CO + H₂ + H₂O → CO₂ + 2H₂, with the carbon(IV) oxide removed
- **electrolysis of brine** or acidified water

### Properties
- colourless, odourless, tasteless; **neutral** to litmus; almost insoluble in water
- **burns** in air with a pale blue flame to form **water**: 2H₂ + O₂ → 2H₂O; a mixture with air explodes
- **test**: a lighted splint gives a "**pop**" sound
- a **reducing agent**: CuO + H₂ → Cu + H₂O (black to reddish-brown)
- combines with chlorine (HCl), nitrogen (NH₃) and reactive metals (hydrides)

### Uses
- manufacture of **ammonia** (Haber process) and hydrochloric acid
- **hydrogenation** of vegetable oils to make **margarine** (nickel catalyst)
- **fuel** — rocket fuel, fuel cells, the oxy-hydrogen flame for welding
- making methanol; filling weather balloons

## Oxygen
The most abundant element in the earth's crust; about 21% of air.

### Laboratory preparation
- **decomposition of hydrogen peroxide** with manganese(IV) oxide catalyst: 2H₂O₂ → 2H₂O + O₂
- heating **potassium trioxochlorate(V)** with manganese(IV) oxide: 2KClO₃ → 2KCl + 3O₂
It is collected over water.

### Industrial preparation
**fractional distillation of liquid air**.

### Properties
- colourless, odourless; slightly soluble in water (enough for aquatic life); neutral
- **supports combustion** but does not itself burn
- **test**: **rekindles a glowing splint**
- combines with most elements to form **oxides**: sodium burns with a yellow flame, magnesium with a brilliant white light, sulphur with a blue flame, carbon with a glow

### Uses
respiration aid in hospitals, for divers and climbers; **oxy-ethyne** flame for cutting and welding; steel making; rocket fuel oxidant; sewage treatment.

## Oxides
| Type | Description | Examples |
|---|---|---|
| **acidic** | oxides of non-metals; react with alkalis; dissolve in water to give acids | CO₂, SO₂, SO₃, NO₂, P₄O₁₀ |
| **basic** | oxides of metals; react with acids to form salt and water | Na₂O, CaO, MgO, CuO |
| **amphoteric** | react with **both** acids and alkalis | Al₂O₃, ZnO, PbO |
| **neutral** | react with neither | CO, N₂O, NO, H₂O |
| **peroxides** | contain more oxygen than expected; give hydrogen peroxide with dilute acids | Na₂O₂, H₂O₂, BaO₂ |
| **mixed (compound)** | behave as mixtures of two oxides | Pb₃O₄ (red lead), Fe₃O₄ |

## Ozone
O₃, an allotrope of oxygen; a powerful oxidising agent. The **ozone layer** in the upper atmosphere absorbs harmful ultraviolet radiation.

## Hydrogen peroxide
A colourless liquid that decomposes readily to water and oxygen; an oxidising agent used as a **bleach** and **antiseptic**.`,
          examples: `**Example 1.** How is hydrogen tested for? *Answer:* A lighted splint gives a **"pop"** sound.

**Example 2.** Classify zinc oxide. *Answer:* **Amphoteric** — it reacts with both acids and alkalis.

**Example 3.** Write the equation for the catalytic decomposition of hydrogen peroxide. *Answer:* **2H₂O₂ → 2H₂O + O₂**.`,
        },
        questions: [
          ["E", "A gas that rekindles a glowing splint is", "oxygen", "hydrogen", "nitrogen", "carbon(IV) oxide", "It supports combustion."],
          ["E", "A lighted splint gives a 'pop' sound with", "hydrogen", "oxygen", "chlorine", "ammonia", "The gas burns explosively with air."],
          ["E", "Oxygen is obtained industrially by", "fractional distillation of liquid air", "heating potassium trioxochlorate(V)", "electrolysis of brine", "the Haber process", "Nitrogen is obtained at the same time."],
          ["M", "Hydrogen is prepared in the laboratory by the action of dilute acid on", "zinc", "copper", "silver", "gold", "Zinc is above hydrogen in the activity series."],
          ["M", "The use of hydrogen in making margarine is called", "hydrogenation", "hydrolysis", "dehydration", "fermentation", "Nickel is the catalyst."],
          ["M", "Which of the following is a neutral oxide?", "carbon(II) oxide", "carbon(IV) oxide", "calcium oxide", "zinc oxide", "It reacts with neither acids nor alkalis."],
          ["M", "When hydrogen is passed over heated copper(II) oxide, the hydrogen acts as", "a reducing agent", "an oxidising agent", "a catalyst", "a drying agent", "It removes oxygen from the oxide."],
          ["H", "An oxide that reacts with both acids and alkalis is described as", "amphoteric", "neutral", "basic", "a peroxide", "Aluminium oxide and zinc oxide are examples."],
          ["H", "Hydrogen is collected by upward delivery because it is", "less dense than air", "denser than air", "soluble in water", "poisonous", "It is the lightest gas."],
          ["H", "Trilead tetraoxide, Pb₃O₄, is classified as", "a mixed oxide", "a peroxide", "an acidic oxide", "a neutral oxide", "It behaves like a mixture of two oxides of lead."],
        ],
      },
      {
        week: 5,
        title: "The halogens: chlorine and hydrogen chloride",
        subtopics: ["The halogen family", "Preparation and properties of chlorine", "Uses of chlorine and the halogens", "Hydrogen chloride, hydrochloric acid and tests for halides"],
        objectives: ["Describe the general properties of the halogens", "Describe the preparation and properties of chlorine", "State the uses of chlorine and the other halogens", "Describe hydrogen chloride and the tests for halide ions"],
        lesson: {
          title: "Group 7 Elements",
          summary: "Describe chlorine, hydrogen chloride and the tests for halides.",
          minutes: 40,
          notes: `## The halogen family
Fluorine, chlorine, bromine, iodine and astatine — Group 7. "Halogen" means "salt former".
- seven valence electrons; exist as **diatomic molecules**; form **−1 ions** (halides)
- physical state and depth of colour increase down the group: F₂ (pale yellow gas), Cl₂ (greenish-yellow gas), Br₂ (reddish-brown liquid), I₂ (black solid, violet vapour)
- **oxidising power and reactivity decrease down the group**
- **displacement**: a halogen displaces a less reactive one from its salt solution
  - Cl₂ + 2KBr → 2KCl + Br₂ (solution turns orange-brown)
  - Cl₂ + 2KI → 2KCl + I₂ (solution turns brown)
  - Br₂ + 2KI → 2KBr + I₂

## Chlorine
### Laboratory preparation
By **oxidising concentrated hydrochloric acid**:
- heating with **manganese(IV) oxide**: MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂
- or, without heat, using **potassium tetraoxomanganate(VII)**
The gas is passed through **water** (to remove hydrogen chloride) and **concentrated tetraoxosulphate(VI) acid** (to dry it), and collected by **downward delivery** — it is **denser than air**.

### Industrial preparation
**Electrolysis of brine** (concentrated sodium chloride solution).

### Physical properties
greenish-yellow gas with a choking smell; **poisonous**; denser than air; fairly soluble in water.

### Chemical properties
- with water: Cl₂ + H₂O → HCl + **HOCl** — "chlorine water" contains **oxochlorate(I) acid**, which **bleaches** by **oxidation**; chlorine therefore bleaches only in the presence of **moisture**
- **test**: turns damp **blue litmus red, then bleaches it**; turns damp **starch-iodide paper blue-black**
- combines directly with metals: 2Fe + 3Cl₂ → 2FeCl₃; and with hydrogen (explosively in sunlight) to form hydrogen chloride
- a strong **oxidising agent**: oxidises iron(II) to iron(III); hydrogen sulphide to sulphur
- with cold dilute alkali: Cl₂ + 2NaOH → NaCl + NaOCl + H₂O (**bleach**); with hot concentrated alkali it gives the trioxochlorate(V)
- with slaked lime it gives **bleaching powder**

### Uses
**sterilising water**; bleaching cotton, linen and wood pulp; making **hydrochloric acid**, plastics (**PVC**), solvents, insecticides and disinfectants.

### Uses of other halogens
fluorine — toothpaste, non-stick coatings; bromine — photography (silver bromide), fuel additives; iodine — antiseptic (tincture of iodine), essential for the thyroid gland.

## Hydrogen chloride
### Preparation
Concentrated tetraoxosulphate(VI) acid on **sodium chloride**:
NaCl + H₂SO₄ → NaHSO₄ + HCl
Dried with concentrated tetraoxosulphate(VI) acid; collected by downward delivery.
### Properties
- colourless gas with a sharp smell; **fumes in moist air**
- **very soluble in water** (the **fountain experiment**), forming **hydrochloric acid**
- turns damp blue litmus red
- with **ammonia** gives **dense white fumes** of ammonium chloride: NH₃ + HCl → NH₄Cl
- the dry gas (or its solution in methylbenzene) does **not** behave as an acid — it ionises only in water

### Hydrochloric acid
a strong monobasic acid; reacts with metals, bases and trioxocarbonates(IV). Used for pickling steel, in the stomach for digestion, and in making chlorides.

## Tests for halide ions
Add dilute trioxonitrate(V) acid, then **silver trioxonitrate(V)** solution:
| Ion | Precipitate | In aqueous ammonia |
|---|---|---|
| **chloride** | **white** | soluble |
| **bromide** | **cream** (pale yellow) | sparingly soluble |
| **iodide** | **yellow** | insoluble |`,
          examples: `**Example 1.** Why does dry chlorine not bleach dry litmus paper? *Answer:* Bleaching is done by **oxochlorate(I) acid**, formed only when chlorine reacts with **water**.

**Example 2.** What is seen when chlorine is bubbled into potassium iodide solution? *Answer:* The solution turns **brown** — iodine is displaced.

**Example 3.** How is a chloride ion tested for? *Answer:* Dilute HNO₃ and **silver trioxonitrate(V)** give a **white precipitate** soluble in aqueous ammonia.`,
        },
        questions: [
          ["E", "Chlorine is a gas that is", "greenish-yellow", "colourless", "reddish-brown", "violet", "It has a choking smell."],
          ["E", "The halogens belong to Group", "7", "1", "2", "0", "They have seven valence electrons."],
          ["E", "Chlorine is added to town water in order to", "kill germs", "soften it", "colour it", "remove salt", "It is a disinfectant."],
          ["M", "Chlorine is prepared in the laboratory by heating concentrated hydrochloric acid with", "manganese(IV) oxide", "zinc", "sodium chloride", "calcium oxide", "The acid is oxidised to chlorine."],
          ["M", "Chlorine is collected by downward delivery because it is", "denser than air", "lighter than air", "insoluble in water", "colourless", "It displaces air upwards."],
          ["M", "The effect of chlorine on damp blue litmus paper is that the paper", "turns red and is then bleached", "remains blue", "turns red only", "turns green", "Chlorine water is acidic and bleaches."],
          ["M", "Hydrogen chloride gas reacts with ammonia gas to give", "dense white fumes", "a brown gas", "a blue precipitate", "a colourless liquid", "Solid ammonium chloride is formed."],
          ["H", "Chlorine bleaches by", "oxidation, through the oxochlorate(I) acid it forms with water", "reduction", "dehydration", "neutralisation", "Dry chlorine does not bleach."],
          ["H", "When acidified silver trioxonitrate(V) is added to a solution of an iodide, the precipitate formed is", "yellow and insoluble in aqueous ammonia", "white and soluble in aqueous ammonia", "cream and soluble in aqueous ammonia", "blue and soluble in excess", "Silver iodide is the least soluble of the silver halides."],
          ["H", "A solution of hydrogen chloride in methylbenzene does not turn blue litmus red because", "the gas does not ionise in that solvent", "methylbenzene is alkaline", "the gas is insoluble in it", "the litmus dissolves", "Acidic properties depend on hydrogen ions formed in water."],
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
        title: "Nitrogen and its compounds",
        subtopics: ["Nitrogen and the nitrogen cycle", "Ammonia", "Trioxonitrate(V) acid", "Trioxonitrates(V) and the oxides of nitrogen"],
        objectives: ["Describe nitrogen and the nitrogen cycle", "Describe the preparation, properties and uses of ammonia", "Describe the preparation and properties of trioxonitrate(V) acid", "Describe the action of heat on trioxonitrates(V) and the test for them"],
        lesson: {
          title: "Nitrogen Chemistry",
          summary: "Describe nitrogen, ammonia, trioxonitrate(V) acid and its salts.",
          minutes: 40,
          notes: `## Nitrogen
About 78% of air. It is obtained industrially by the **fractional distillation of liquid air**; in the laboratory by heating **ammonium dioxonitrate(III)**: NH₄NO₂ → N₂ + 2H₂O.
- colourless, odourless, neutral gas; slightly soluble in water
- **very unreactive** because of its strong **triple bond**
- combines with hydrogen (Haber process), with burning magnesium (magnesium nitride) and with oxygen at very high temperature (lightning)
- uses: ammonia manufacture; inert atmosphere for food packaging and welding; liquid nitrogen as a coolant

## The nitrogen cycle
- **fixation**: by lightning; by **nitrogen-fixing bacteria** in the root nodules of legumes (Rhizobium) and in the soil; by the Haber process
- **nitrification**: ammonium compounds → dioxonitrates(III) → trioxonitrates(V) by nitrifying bacteria
- plants absorb trioxonitrates(V) and make **proteins**; animals eat plants
- **decay** returns ammonium compounds to the soil
- **denitrification**: denitrifying bacteria return nitrogen to the air

## Ammonia
### Laboratory preparation
Heating an **ammonium salt with an alkali**:
2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃
It is dried with **calcium oxide (quicklime)** — not concentrated tetraoxosulphate(VI) acid or calcium chloride, which react with it — and collected by **upward delivery**, since it is less dense than air.
### Industrial preparation
The **Haber process**: N₂ + 3H₂ ⇌ 2NH₃ (iron catalyst, about 450 °C, 200 atm).
### Properties
- colourless gas with a **pungent, choking smell**
- **extremely soluble** in water (the **fountain experiment**), giving an alkaline solution of aqueous ammonia
- the **only common alkaline gas** — turns **damp red litmus blue**
- forms dense **white fumes** with hydrogen chloride
- burns in oxygen (not in air); oxidised catalytically to nitrogen(II) oxide
- a reducing agent: 3CuO + 2NH₃ → 3Cu + 3H₂O + N₂
- aqueous ammonia precipitates insoluble hydroxides; the blue precipitate with copper(II) ions dissolves in excess to give a **deep blue** solution
### Uses
**fertilisers** (ammonium tetraoxosulphate(VI), ammonium trioxonitrate(V), urea); manufacture of trioxonitrate(V) acid; refrigerant; household cleaners; softening water.

## Trioxonitrate(V) acid
### Laboratory preparation
Heating potassium (or sodium) trioxonitrate(V) with concentrated tetraoxosulphate(VI) acid in an all-glass retort: KNO₃ + H₂SO₄ → KHSO₄ + HNO₃.
### Industrial preparation — the Ostwald process
1. catalytic oxidation of ammonia over **platinum–rhodium** gauze at about 850 °C: 4NH₃ + 5O₂ → 4NO + 6H₂O
2. 2NO + O₂ → 2NO₂
3. 4NO₂ + O₂ + 2H₂O → 4HNO₃
### Properties
- a strong acid — but with metals it rarely gives hydrogen, because it is also a powerful **oxidising agent**
- with copper: **concentrated** acid gives brown **nitrogen(IV) oxide**; **dilute** acid gives **nitrogen(II) oxide**
- oxidises carbon to carbon(IV) oxide, sulphur to tetraoxosulphate(VI) acid, iron(II) to iron(III)
- decomposes in light, turning yellow — stored in dark bottles
- renders iron and aluminium **passive**
### Uses
fertilisers; explosives (TNT, dynamite); dyes; drugs; etching metals.

## Trioxonitrates(V)
All are **soluble** in water.
### Action of heat
| Metal | Products |
|---|---|
| **sodium, potassium** | **dioxonitrate(III) + oxygen** |
| calcium to copper (most metals) | **metal oxide + nitrogen(IV) oxide + oxygen** |
| **silver, mercury** | **metal + nitrogen(IV) oxide + oxygen** |
| ammonium | dinitrogen(I) oxide + water |
2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂ (brown fumes; the crystals decrepitate)

### Test
The **brown ring test**: add freshly prepared iron(II) tetraoxosulphate(VI) solution, then pour concentrated tetraoxosulphate(VI) acid carefully down the side — a **brown ring** forms at the junction.

## Oxides of nitrogen
dinitrogen(I) oxide, N₂O — "laughing gas", an anaesthetic; nitrogen(II) oxide, NO — colourless, turns brown in air; nitrogen(IV) oxide, NO₂ — brown, acidic, poisonous.`,
          examples: `**Example 1.** Why is ammonia not dried with concentrated tetraoxosulphate(VI) acid? *Answer:* Ammonia is **alkaline** and would **react** with the acid.

**Example 2.** What is formed when lead(II) trioxonitrate(V) is heated? *Answer:* **Lead(II) oxide, nitrogen(IV) oxide and oxygen**.

**Example 3.** Name the industrial process for making trioxonitrate(V) acid. *Answer:* The **Ostwald process**.`,
        },
        questions: [
          ["E", "The only common gas that is alkaline is", "ammonia", "chlorine", "hydrogen chloride", "sulphur(IV) oxide", "It turns damp red litmus blue."],
          ["E", "Ammonia is manufactured industrially by the", "Haber process", "Contact process", "Ostwald process", "Solvay process", "Nitrogen and hydrogen combine over an iron catalyst."],
          ["E", "Nitrogen is unreactive mainly because its molecule has a strong", "triple bond", "ionic bond", "single bond", "metallic bond", "Much energy is needed to break it."],
          ["M", "The drying agent used for ammonia is", "calcium oxide", "concentrated tetraoxosulphate(VI) acid", "calcium chloride", "phosphorus(V) oxide", "The others react with ammonia."],
          ["M", "Ammonia is prepared in the laboratory by heating ammonium chloride with", "calcium hydroxide", "hydrochloric acid", "sodium chloride", "water", "An alkali liberates ammonia from an ammonium salt."],
          ["M", "The industrial manufacture of trioxonitrate(V) acid from ammonia is the", "Ostwald process", "Haber process", "Frasch process", "Contact process", "Ammonia is oxidised over platinum–rhodium."],
          ["M", "Concentrated trioxonitrate(V) acid reacts with copper to give a brown gas, which is", "nitrogen(IV) oxide", "nitrogen(II) oxide", "hydrogen", "dinitrogen(I) oxide", "The dilute acid gives nitrogen(II) oxide."],
          ["H", "When sodium trioxonitrate(V) is heated strongly, the products are", "sodium dioxonitrate(III) and oxygen", "sodium oxide, nitrogen(IV) oxide and oxygen", "sodium, nitrogen(IV) oxide and oxygen", "sodium oxide and nitrogen", "Sodium and potassium salts behave differently from most others."],
          ["H", "The brown ring test is used to detect", "trioxonitrate(V) ions", "chloride ions", "tetraoxosulphate(VI) ions", "ammonium ions", "Iron(II) solution and concentrated acid are used."],
          ["H", "Trioxonitrate(V) acid seldom liberates hydrogen with metals because it", "is a powerful oxidising agent", "is a weak acid", "does not ionise", "is insoluble in water", "Any hydrogen is oxidised to water."],
        ],
      },
      {
        week: 2,
        title: "Sulphur and its compounds",
        subtopics: ["Sulphur: extraction, allotropes and uses", "Sulphur(IV) oxide and hydrogen sulphide", "The Contact process", "Properties and uses of tetraoxosulphate(VI) acid"],
        objectives: ["Describe the extraction, allotropes and uses of sulphur", "Describe sulphur(IV) oxide and hydrogen sulphide", "Describe the Contact process", "State the properties and uses of tetraoxosulphate(VI) acid"],
        lesson: {
          title: "Sulphur Chemistry",
          summary: "Describe sulphur, its oxides and tetraoxosulphate(VI) acid.",
          minutes: 40,
          notes: `## Sulphur
A yellow non-metallic solid found free underground and combined in sulphide ores, petroleum and natural gas.

### Extraction — the Frasch process
Three concentric pipes are sunk into the deposit:
- **superheated water** (about 170 °C, under pressure) is pumped down the outer pipe to **melt** the sulphur
- hot **compressed air** is blown down the innermost pipe
- molten sulphur is forced up the middle pipe as a froth
Sulphur is also recovered from petroleum and natural gas.

### Allotropes
- **rhombic (α) sulphur** — octahedral crystals; stable below **96 °C**
- **monoclinic (β) sulphur** — needle-shaped crystals; stable above 96 °C (the **transition temperature**)
- **amorphous** and **plastic** sulphur (made by pouring boiling sulphur into cold water)
The molecule is an S₈ ring.

### Properties and uses
insoluble in water, soluble in carbon disulphide; burns with a blue flame to sulphur(IV) oxide; combines with metals to form sulphides (Fe + S → FeS).
**Uses:** manufacture of **tetraoxosulphate(VI) acid**; **vulcanisation** of rubber; fungicides and ointments; matches, gunpowder and fireworks.

## Sulphur(IV) oxide
### Preparation
dilute hydrochloric acid on sodium trioxosulphate(IV): Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂; or heating copper with concentrated tetraoxosulphate(VI) acid.
### Properties
- colourless, choking, poisonous gas; denser than air; very soluble in water, giving **trioxosulphate(IV) acid** — an **acidic oxide**
- a **reducing agent**: **decolorises** acidified potassium tetraoxomanganate(VII); turns acidified potassium heptaoxodichromate(VI) from **orange to green**
- **bleaches by reduction** in the presence of water — the colour may return on exposure to air
- acts as an oxidising agent towards hydrogen sulphide, depositing sulphur
### Uses
making tetraoxosulphate(VI) acid; bleaching wool, straw and paper; preserving food; fumigant. It is a major **air pollutant** — the main cause of **acid rain**.

## Hydrogen sulphide
- prepared from **iron(II) sulphide** and dilute hydrochloric acid (Kipp's apparatus): FeS + 2HCl → FeCl₂ + H₂S
- colourless gas with the smell of **rotten eggs**; very **poisonous**
- a weak dibasic acid in water; a strong **reducing agent**
- precipitates coloured metal sulphides (black with copper and lead ions)
- **test**: turns **lead(II) ethanoate paper black**

## The Contact process
1. **burning** sulphur (or roasting sulphide ores): S + O₂ → SO₂
2. the gas is **purified** (dust and arsenic compounds would poison the catalyst), dried and mixed with excess air
3. **catalytic oxidation**: 2SO₂ + O₂ ⇌ 2SO₃ — **vanadium(V) oxide** catalyst, about **450 °C**, slightly above atmospheric pressure
4. the sulphur(VI) oxide is **absorbed in concentrated tetraoxosulphate(VI) acid** to form **oleum**: SO₃ + H₂SO₄ → H₂S₂O₇ — it is not dissolved directly in water, because that would produce a mist of acid droplets
5. oleum is **diluted** with water: H₂S₂O₇ + H₂O → 2H₂SO₄

## Tetraoxosulphate(VI) acid
A dense, oily, colourless liquid — "oil of vitriol".
### Properties
1. as a **strong dibasic acid** (dilute): reacts with metals, bases and trioxocarbonates(IV); forms normal and acid salts
2. as an **oxidising agent** (hot, concentrated): Cu + 2H₂SO₄ → CuSO₄ + 2H₂O + SO₂; oxidises carbon and sulphur
3. as a **dehydrating agent**: removes the elements of water — sugar is charred to black **carbon**; blue copper(II) tetraoxosulphate(VI) crystals turn **white**; ethanol gives ethene
4. as a **drying agent** for gases (not ammonia or hydrogen sulphide)
5. it **displaces more volatile acids** from their salts (hydrogen chloride; trioxonitrate(V) acid)
It has a great affinity for water; dilution gives out much heat — always add **acid to water**.
### Uses
**fertilisers** (superphosphate, ammonium tetraoxosulphate(VI)); detergents; paints and pigments; car batteries; refining petroleum; cleaning metals; explosives, dyes and drugs.

## Test for tetraoxosulphate(VI) ions
Add dilute hydrochloric acid, then **barium chloride** solution: a **white precipitate** insoluble in the acid.`,
          examples: `**Example 1.** By what process is sulphur extracted from underground deposits? *Answer:* The **Frasch process**.

**Example 2.** What is observed when concentrated tetraoxosulphate(VI) acid is added to sugar? *Answer:* The sugar turns to a **black mass of carbon** — the acid acts as a **dehydrating agent**.

**Example 3.** How is hydrogen sulphide tested for? *Answer:* It turns **lead(II) ethanoate paper black**.`,
        },
        questions: [
          ["E", "Sulphur is extracted from underground deposits by the", "Frasch process", "Haber process", "Contact process", "Bosch process", "Superheated water melts the sulphur."],
          ["E", "The gas with the smell of rotten eggs is", "hydrogen sulphide", "sulphur(IV) oxide", "ammonia", "chlorine", "It is also poisonous."],
          ["E", "Tetraoxosulphate(VI) acid is manufactured by the", "Contact process", "Haber process", "Ostwald process", "Frasch process", "Sulphur(IV) oxide is oxidised to sulphur(VI) oxide."],
          ["M", "The allotrope of sulphur that is stable below 96 °C is", "rhombic sulphur", "monoclinic sulphur", "plastic sulphur", "colloidal sulphur", "96 °C is the transition temperature."],
          ["M", "Sulphur(IV) oxide bleaches by", "reduction", "oxidation", "dehydration", "neutralisation", "The colour may return in air."],
          ["M", "In the Contact process, sulphur(VI) oxide is first absorbed to form a fuming liquid called", "oleum", "brine", "aqua regia", "oil of vitriol", "Oleum is then diluted with water to give the acid."],
          ["M", "Hydrogen sulphide turns lead(II) ethanoate paper", "black", "blue", "red", "white", "Lead(II) sulphide is formed."],
          ["H", "In the Contact process, sulphur(VI) oxide is absorbed in concentrated tetraoxosulphate(VI) acid rather than water because", "dissolving it directly in water produces a mist of acid droplets", "it is insoluble in water", "water would poison the catalyst", "the acid is cheaper than water", "Oleum is formed and then diluted."],
          ["H", "When concentrated tetraoxosulphate(VI) acid is added to sugar, it acts as", "a dehydrating agent", "a reducing agent", "a catalyst", "a base", "It removes the elements of water, leaving carbon."],
          ["H", "A white precipitate insoluble in dilute hydrochloric acid is formed with barium chloride solution by", "tetraoxosulphate(VI) ions", "chloride ions", "trioxonitrate(V) ions", "trioxocarbonate(IV) ions", "Barium tetraoxosulphate(VI) is insoluble in acids."],
        ],
      },
      {
        week: 3,
        title: "Solutions, solubility and colloids",
        subtopics: ["Types of solutions", "Solubility and factors affecting it", "Solubility curves and calculations", "Suspensions and colloids"],
        objectives: ["Distinguish unsaturated, saturated and supersaturated solutions", "Define solubility and state the factors affecting it", "Interpret solubility curves and solve problems", "Distinguish true solutions, suspensions and colloids"],
        lesson: {
          title: "Dissolving",
          summary: "Explain solubility and distinguish solutions, suspensions and colloids.",
          minutes: 40,
          notes: `## Solutions
A **solution** is a **homogeneous mixture** of a **solute** dissolved in a **solvent**. Water is the commonest solvent; others include ethanol, propanone, kerosene and tetrachloromethane. "**Like dissolves like**": polar and ionic substances dissolve in polar solvents; non-polar substances in non-polar solvents.

### Types
- **unsaturated**: can dissolve more solute at that temperature
- **saturated**: contains as much solute as it can dissolve at that temperature **in the presence of undissolved solute**
- **supersaturated**: contains more solute than a saturated solution at that temperature; it is unstable — adding a crystal ("seeding") or shaking causes the excess to crystallise

## Solubility
The **solubility** of a solute in a solvent at a given temperature is the **maximum amount** of the solute, in **moles (or grams)**, that will dissolve in **1 dm³** (or 100 g) of the solvent to form a saturated solution at that temperature.

### Factors affecting solubility
- **temperature**: the solubility of most **solids increases** with temperature; that of **gases decreases**
- **nature of solute and solvent**
- **pressure**: the solubility of a **gas increases** with pressure (fizzy drinks)

## Solubility curves
A graph of solubility against temperature.
- **potassium trioxonitrate(V)**: rises steeply
- **sodium chloride**: almost constant
- calcium tetraoxosulphate(VI) and calcium hydroxide: decrease slightly
### Uses
- to find the solubility at any temperature
- to find the mass of crystals deposited on cooling
- to choose conditions for **fractional crystallisation**

## Calculations
### Solubility from an experiment
20 g of a salt saturates 50 g of water at 30 °C: solubility = 20 × 100 ÷ 50 = **40 g per 100 g of water**.
### In mol/dm³
25 g of a salt of molar mass 100 dissolves in 250 cm³ of water to give a saturated solution: moles = 0.25; solubility = 0.25 ÷ 0.25 = **1.0 mol/dm³**.
### Crystals deposited on cooling
A salt has solubility 80 g per 100 g of water at 60 °C and 30 g at 20 °C. A saturated solution containing 100 g of water, cooled from 60 °C to 20 °C, deposits 80 − 30 = **50 g** of crystals.

## Applications of solubility
purification by recrystallisation; extraction of salt from brine; manufacture of drugs and drinks; dissolved oxygen for aquatic life (thermal pollution reduces it); removal of stains with suitable solvents.

## True solutions, colloids and suspensions
| | True solution | Colloid | Suspension |
|---|---|---|---|
| particle size | very small (ions, molecules) | intermediate | large |
| appearance | clear | cloudy or opalescent | opaque |
| settling | does not settle | does not settle | settles on standing |
| filtration | passes through filter paper | passes through filter paper | particles are retained |
| light | no scattering | **scatters light — Tyndall effect** | — |
| example | salt solution | milk, starch solution, fog | muddy water, chalk in water |

### Types of colloid
- **sol**: solid in liquid — starch solution, paint
- **gel**: liquid trapped in solid — jelly
- **emulsion**: liquid in liquid — milk, mayonnaise
- **aerosol**: liquid or solid in gas — fog, smoke
- **foam**: gas in liquid — lather, whipped cream
Colloidal particles show **Brownian movement** and carry charges; adding an electrolyte makes them **coagulate** — as when alum clears muddy water, or a river forms a delta on meeting the sea.`,
          examples: `**Example 1.** 15 g of a salt saturates 25 g of water at 40 °C. Find its solubility in g per 100 g of water. *Solution:* 15 × 100 ÷ 25 = **60 g**.

**Example 2.** How does the solubility of a gas change as temperature rises? *Answer:* It **decreases**.

**Example 3.** What is the Tyndall effect? *Answer:* The **scattering of light** by colloidal particles.`,
        },
        questions: [
          ["E", "A solution that cannot dissolve any more solute at a given temperature is", "saturated", "unsaturated", "dilute", "colloidal", "It is in contact with undissolved solute."],
          ["E", "The substance that dissolves in a solvent is the", "solute", "solution", "residue", "filtrate", "The solvent does the dissolving."],
          ["E", "Milk is an example of", "an emulsion", "a true solution", "a suspension", "an aerosol", "Liquid fat is dispersed in a watery liquid."],
          ["M", "As temperature rises, the solubility of a gas in water", "decreases", "increases", "remains constant", "doubles", "This is why warm water holds less dissolved oxygen."],
          ["M", "The scattering of light by colloidal particles is called the", "Tyndall effect", "Brownian movement", "greenhouse effect", "photoelectric effect", "True solutions do not show it."],
          ["M", "20 g of a salt saturates 50 g of water at 30 °C. Its solubility in g per 100 g of water is", "40", "10", "70", "250", "20 × 100 ÷ 50. Answer: 40."],
          ["M", "A supersaturated solution can be made to crystallise by", "adding a small crystal of the solute", "adding more water", "heating it", "filtering it", "This is called seeding."],
          ["H", "A salt has a solubility of 80 g per 100 g of water at 60 °C and 30 g at 20 °C. A saturated solution in 100 g of water cooled from 60 °C to 20 °C deposits", "50 g of crystals", "30 g of crystals", "80 g of crystals", "110 g of crystals", "The difference between the two solubilities."],
          ["H", "25 g of a salt of molar mass 100 g/mol dissolves in 250 cm³ of water to give a saturated solution. Its solubility is", "1.0 mol/dm³", "0.25 mol/dm³", "0.1 mol/dm³", "4.0 mol/dm³", "0.25 mol ÷ 0.25 dm³."],
          ["H", "Alum clears muddy water because it", "causes the charged colloidal particles to coagulate and settle", "dissolves the mud", "kills the germs", "raises the temperature", "An electrolyte neutralises the charges on the particles."],
        ],
      },
      {
        week: 4,
        title: "Electrochemical cells and corrosion",
        subtopics: ["The electrochemical series and electrode potentials", "Electrochemical cells", "Primary, secondary and fuel cells", "Corrosion and its prevention"],
        objectives: ["Explain electrode potentials and the electrochemical series", "Describe an electrochemical cell and calculate its e.m.f.", "Describe primary, secondary and fuel cells", "Explain corrosion as an electrochemical process and state methods of prevention"],
        lesson: {
          title: "Electricity from Chemical Reactions",
          summary: "Explain electrochemical cells and the corrosion of metals.",
          minutes: 40,
          notes: `## Electrode potentials
When a metal dips into a solution of its ions, an equilibrium is set up — M ⇌ Mⁿ⁺ + ne⁻ — and a potential difference arises. It is measured against the **standard hydrogen electrode**, which is given the value **0.00 V**. The result is the **standard electrode potential, E°** (measured at 25 °C, 1 mol/dm³ and 1 atmosphere).

## The electrochemical series
Elements arranged in order of their standard electrode potentials:
**K, Na, Ca, Mg, Al, Zn, Fe, Sn, Pb, (H), Cu, Hg, Ag, Au**
| Half-cell | E° (V) |
|---|---|
| Mg²⁺ / Mg | −2.37 |
| Zn²⁺ / Zn | −0.76 |
| Fe²⁺ / Fe | −0.44 |
| H⁺ / H₂ | 0.00 |
| Cu²⁺ / Cu | +0.34 |
| Ag⁺ / Ag | +0.80 |
- metals at the **top** (most negative E°) lose electrons most readily — they are the strongest **reducing agents** and most reactive
- a metal **displaces** any metal below it from solution
- metals above hydrogen displace it from dilute acids
- the further apart two metals are, the greater the e.m.f. of the cell they form

## Electrochemical (galvanic) cells
A cell converts **chemical energy into electrical energy** through a spontaneous redox reaction.
### The Daniell cell
A zinc rod in zinc tetraoxosulphate(VI) solution and a copper rod in copper(II) tetraoxosulphate(VI) solution, joined by a **salt bridge** (or porous pot).
- at the **zinc** electrode (the **anode**, negative): **oxidation** — Zn → Zn²⁺ + 2e⁻
- at the **copper** electrode (the **cathode**, positive): **reduction** — Cu²⁺ + 2e⁻ → Cu
- electrons flow through the wire from **zinc to copper**
- the **salt bridge** completes the circuit and keeps the solutions electrically neutral
- cell notation: Zn | Zn²⁺ || Cu²⁺ | Cu

### E.m.f. of a cell
**E°(cell) = E°(cathode) − E°(anode)**
- zinc–copper: 0.34 − (−0.76) = **1.10 V**
- magnesium–silver: 0.80 − (−2.37) = **3.17 V**
A positive e.m.f. means the reaction is spontaneous.

## Electrolytic and electrochemical cells compared
| | Electrolytic cell | Electrochemical cell |
|---|---|---|
| energy change | electrical → chemical | chemical → electrical |
| reaction | not spontaneous | spontaneous |
| anode | positive | negative |
| cathode | negative | positive |
In both, **oxidation occurs at the anode** and reduction at the cathode.

## Kinds of cell
- **primary cells** (not rechargeable): the **Leclanché dry cell** — zinc case (negative), carbon rod (positive), ammonium chloride paste, with **manganese(IV) oxide** as depolariser; about 1.5 V
- **secondary cells** (rechargeable): the **lead–acid accumulator** — lead and lead(IV) oxide plates in tetraoxosulphate(VI) acid, about 2 V per cell; nickel–cadmium and lithium-ion batteries
- **fuel cells**: hydrogen and oxygen combine to give electricity and water

## Corrosion
The **rusting of iron** is an electrochemical process. On a wet iron surface, some regions act as anodes — Fe → Fe²⁺ + 2e⁻ — while at others oxygen is reduced — O₂ + 2H₂O + 4e⁻ → 4OH⁻. The iron(II) hydroxide formed is oxidised to **hydrated iron(III) oxide** — rust. Dissolved salts and acids speed it up.

### Prevention
- **barrier methods**: painting, oiling, greasing, plastic coating, tin-plating
- **galvanising** — coating with zinc, which protects even when scratched
- **sacrificial (cathodic) protection** — a more reactive metal (zinc, magnesium) is attached to ships' hulls and underground pipes and corrodes instead
- **alloying** — stainless steel (iron with chromium and nickel)
- **electroplating**
Aluminium resists corrosion because of a thin, tough **oxide layer**.`,
          examples: `**Example 1.** Find the e.m.f. of a cell made from zinc (−0.76 V) and copper (+0.34 V). *Solution:* 0.34 − (−0.76) = **1.10 V**.

**Example 2.** In the Daniell cell, which electrode is the anode? *Answer:* **Zinc** — it is oxidised.

**Example 3.** Why does galvanised iron not rust even when scratched? *Answer:* Zinc is **more reactive** than iron and corrodes in preference (sacrificial protection).`,
        },
        questions: [
          ["E", "A device that converts chemical energy into electrical energy is", "an electrochemical cell", "an electrolytic cell", "a transformer", "a rheostat", "A spontaneous redox reaction drives it."],
          ["E", "The standard hydrogen electrode is assigned a potential of", "0.00 V", "1.00 V", "−0.76 V", "+0.34 V", "Other electrode potentials are measured against it."],
          ["E", "A cell that can be recharged is called a", "secondary cell", "primary cell", "dry cell", "Daniell cell", "The lead–acid accumulator is an example."],
          ["M", "In the Daniell cell, the electrode at which oxidation occurs is", "zinc", "copper", "carbon", "platinum", "Zinc atoms lose electrons."],
          ["M", "The function of the salt bridge in an electrochemical cell is to", "complete the circuit and maintain electrical neutrality", "supply electrons", "increase the temperature", "act as a catalyst", "Ions move through it."],
          ["M", "The depolariser in the Leclanché dry cell is", "manganese(IV) oxide", "zinc", "ammonium chloride", "carbon", "It removes hydrogen from the carbon rod."],
          ["M", "Coating iron with zinc to prevent rusting is known as", "galvanising", "tin-plating", "anodising", "alloying", "Zinc protects iron even when scratched."],
          ["H", "The e.m.f. of a cell made from the half-cells Zn²⁺/Zn (−0.76 V) and Cu²⁺/Cu (+0.34 V) is", "1.10 V", "0.42 V", "−1.10 V", "0.76 V", "E(cell) = E(cathode) − E(anode)."],
          ["H", "The e.m.f. of a cell made from Mg²⁺/Mg (−2.37 V) and Ag⁺/Ag (+0.80 V) is", "3.17 V", "1.57 V", "−3.17 V", "2.37 V", "0.80 − (−2.37)."],
          ["H", "A block of magnesium attached to an underground iron pipe protects the pipe because magnesium", "is more reactive and corrodes in place of the iron", "is less reactive than iron", "forms a paint on the pipe", "absorbs water from the soil", "This is sacrificial protection."],
        ],
      },
      {
        week: 5,
        title: "Introduction to organic chemistry",
        subtopics: ["The uniqueness of carbon", "Classification and homologous series", "Functional groups and IUPAC nomenclature", "Isomerism"],
        objectives: ["Explain why carbon forms so many compounds", "Classify organic compounds and describe homologous series", "Identify functional groups and name simple organic compounds", "Explain structural isomerism"],
        lesson: {
          title: "The Chemistry of Carbon Compounds",
          summary: "Introduce the classification, naming and isomerism of organic compounds.",
          minutes: 40,
          notes: `## Organic chemistry
The study of the **compounds of carbon** — other than its oxides, trioxocarbonates(IV) and a few others. There are millions of them: fuels, plastics, drugs, dyes, foods, fibres.

## Why carbon forms so many compounds
1. **tetravalency**: each carbon atom forms **four covalent bonds**
2. **catenation**: carbon atoms join to one another in long **chains**, **branched chains** and **rings**
3. it forms **single, double and triple** bonds
4. it bonds strongly with hydrogen, oxygen, nitrogen and the halogens
5. **isomerism** multiplies the number of compounds

## Characteristics of organic compounds
mostly covalent; low melting and boiling points; many are insoluble in water but soluble in organic solvents; they burn; reactions are slow and often need catalysts.

## Classification
- **hydrocarbons** — compounds of **carbon and hydrogen only**
  - **aliphatic**: open chains — alkanes, alkenes, alkynes
  - **alicyclic**: rings of the same kind — cyclohexane
  - **aromatic**: containing the benzene ring
- **saturated** compounds have only **single** carbon–carbon bonds (alkanes); **unsaturated** compounds have **double or triple** bonds (alkenes, alkynes)

## Homologous series
A **family** of organic compounds with the same functional group.
### Characteristics
1. the members can be represented by a **general formula**
2. successive members differ by **–CH₂–** (relative molecular mass 14)
3. they have the same **functional group** and so **similar chemical properties**
4. their **physical properties change gradually** with increasing molecular mass (boiling point rises)
5. they can be prepared by similar methods

| Series | General formula | Functional group | Example |
|---|---|---|---|
| **alkanes** | CₙH₂ₙ₊₂ | C–C single bonds | methane, CH₄ |
| **alkenes** | CₙH₂ₙ | C=C | ethene, C₂H₄ |
| **alkynes** | CₙH₂ₙ₋₂ | C≡C | ethyne, C₂H₂ |
| **alkanols** | CₙH₂ₙ₊₁OH | –OH (hydroxyl) | ethanol, C₂H₅OH |
| **alkanoic acids** | CₙH₂ₙ₊₁COOH | –COOH (carboxyl) | ethanoic acid, CH₃COOH |
| **alkanoates (esters)** | RCOOR′ | –COO– | ethyl ethanoate |
| alkanals | RCHO | –CHO | ethanal |
| alkanones | RCOR′ | C=O | propanone |
| amines | RNH₂ | –NH₂ | methylamine |

## IUPAC nomenclature
### Root names by number of carbon atoms
1 **meth-**, 2 **eth-**, 3 **prop-**, 4 **but-**, 5 **pent-**, 6 **hex-**, 7 **hept-**, 8 **oct-**, 9 **non-**, 10 **dec-**
### Endings
**-ane** (alkane), **-ene** (alkene), **-yne** (alkyne), **-anol** (alkanol), **-anoic acid**
### Rules
1. choose the **longest continuous carbon chain** containing the functional group
2. **number** the chain from the end that gives the functional group or branches the **lowest numbers**
3. name branches as **alkyl groups** (methyl, CH₃–; ethyl, C₂H₅–), with their positions; use di-, tri- for repeats
*Examples:* CH₃CH(CH₃)CH₃ is **2-methylpropane**; CH₃CH=CHCH₃ is **but-2-ene**; CH₃CH₂CH₂OH is **propan-1-ol**; CH₃CHClCH₃ is **2-chloropropane**.

## Kinds of formula
- **empirical**: simplest ratio (CH₂)
- **molecular**: actual numbers of atoms (C₂H₄)
- **structural**: how the atoms are joined (CH₂=CH₂)

## Isomerism
**Isomers** are compounds with the **same molecular formula but different structural formulae** — and therefore different properties.
- **C₄H₁₀** has **two** isomers: butane and 2-methylpropane
- **C₅H₁₂** has **three**: pentane, 2-methylbutane, 2,2-dimethylpropane
- C₂H₆O: ethanol and methoxymethane (functional-group isomers)
Branched isomers have lower boiling points than straight-chain ones.

## Sources of organic compounds
**petroleum** and natural gas; **coal**; plants and animals.`,
          examples: `**Example 1.** Give the general formula of the alkanes and the formula of the member with 5 carbon atoms. *Answer:* **CₙH₂ₙ₊₂**; **C₅H₁₂**.

**Example 2.** Name CH₃CH₂CH₂CH₃. *Answer:* **Butane**.

**Example 3.** How many structural isomers has C₄H₁₀? *Answer:* **Two** — butane and 2-methylpropane.`,
        },
        questions: [
          ["E", "Compounds that contain carbon and hydrogen only are called", "hydrocarbons", "carbohydrates", "alkanols", "esters", "Alkanes, alkenes and alkynes are examples."],
          ["E", "The ability of carbon atoms to join together in long chains is called", "catenation", "isomerism", "polymerisation", "hydrogenation", "It accounts for the huge number of carbon compounds."],
          ["E", "The general formula of the alkanes is", "CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁OH", "Methane, CH₄, is the first member."],
          ["M", "Successive members of a homologous series differ by", "CH₂", "CH₃", "CH", "C₂H₄", "This is a relative molecular mass of 14."],
          ["M", "The functional group of the alkanols is", "–OH", "–COOH", "–CHO", "C=C", "It is the hydroxyl group."],
          ["M", "Compounds with the same molecular formula but different structural formulae are called", "isomers", "isotopes", "allotropes", "polymers", "They have different properties."],
          ["M", "The IUPAC name of the alkane with four carbon atoms in a straight chain is", "butane", "propane", "pentane", "ethane", "The root for four carbon atoms is but-."],
          ["H", "The IUPAC name of CH₃CH(CH₃)CH₃ is", "2-methylpropane", "butane", "1-methylpropane", "2-methylbutane", "The longest chain has three carbon atoms with a methyl branch on carbon 2."],
          ["H", "The number of structural isomers of C₅H₁₂ is", "three", "two", "four", "five", "Pentane, 2-methylbutane and 2,2-dimethylpropane."],
          ["H", "An organic compound described as unsaturated contains", "carbon–carbon double or triple bonds", "only single bonds", "no hydrogen", "oxygen atoms only", "Alkenes and alkynes are unsaturated."],
        ],
      },
    ],
  },
];
