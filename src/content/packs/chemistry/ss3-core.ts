import type { TermPlan } from "../types";

/** SS3 Chemistry — original Precious PS content following the national senior secondary curriculum. */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Alkanes",
        subtopics: ["Structure and nomenclature of alkanes", "Preparation of methane", "Physical and chemical properties", "Uses of alkanes"],
        objectives: ["Write the formulae and names of the first ten alkanes", "Describe the laboratory preparation of methane", "Describe the physical and chemical properties of alkanes", "State the uses of alkanes"],
        lesson: {
          title: "The Saturated Hydrocarbons",
          summary: "Describe the structure, preparation, reactions and uses of the alkanes.",
          minutes: 40,
          notes: `## The alkanes
The alkanes are **saturated hydrocarbons** with the general formula **CₙH₂ₙ₊₂**. Every carbon atom forms four single covalent bonds arranged tetrahedrally.

| n | Name | Formula | State at room temperature |
|---|---|---|---|
| 1 | methane | CH₄ | gas |
| 2 | ethane | C₂H₆ | gas |
| 3 | propane | C₃H₈ | gas |
| 4 | butane | C₄H₁₀ | gas |
| 5 | pentane | C₅H₁₂ | liquid |
| 6 | hexane | C₆H₁₄ | liquid |
| 7 | heptane | C₇H₁₆ | liquid |
| 8 | octane | C₈H₁₈ | liquid |
| 9 | nonane | C₉H₂₀ | liquid |
| 10 | decane | C₁₀H₂₂ | liquid |
Members with about 18 or more carbon atoms are waxy solids.

## Sources
**Natural gas** (mainly methane) and **petroleum**. Methane is also formed when vegetable matter decays in the absence of air — "marsh gas" and biogas.

## Laboratory preparation of methane
By heating **sodium ethanoate with soda lime** (a mixture of sodium hydroxide and calcium oxide):
CH₃COONa + NaOH → CH₄ + Na₂CO₃
The gas is collected over water. This is **decarboxylation** — the alkane formed has one carbon atom fewer than the salt.

## Physical properties
- colourless and almost odourless
- **insoluble in water**, soluble in organic solvents
- less dense than water
- melting and boiling points **rise** with the number of carbon atoms, because the intermolecular forces grow stronger
- branched isomers boil at lower temperatures than straight-chain isomers

## Chemical properties
Alkanes are **fairly unreactive**: the C–C and C–H bonds are strong and non-polar. They do not react with acids, alkalis or oxidising agents such as potassium tetraoxomanganate(VII).

### 1. Combustion
In plenty of air they burn with a clean blue flame, giving out much heat:
CH₄ + 2O₂ → CO₂ + 2H₂O
2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O
In a limited supply of air, poisonous **carbon(II) oxide** and soot are formed.

### 2. Substitution
In **sunlight or ultraviolet light**, a halogen replaces the hydrogen atoms one at a time:
CH₄ + Cl₂ → CH₃Cl + HCl (chloromethane)
CH₃Cl + Cl₂ → CH₂Cl₂ + HCl (dichloromethane)
then CHCl₃ (trichloromethane, chloroform) and CCl₄ (tetrachloromethane).
**Substitution** — one atom replacing another — is the characteristic reaction of saturated compounds.

### 3. Cracking
Heating large alkanes strongly, or with a catalyst, breaks them into smaller alkanes and alkenes:
C₁₀H₂₂ → C₈H₁₈ + C₂H₄

## Uses
- **fuels**: methane (natural gas), propane and butane (bottled cooking gas), petrol, kerosene, diesel
- making **hydrogen** and carbon black from methane
- **solvents** (hexane)
- raw materials for the petrochemical industry — plastics, detergents
- candles, polishes and lubricants from the higher alkanes
- halogenated alkanes as solvents and anaesthetics`,
          examples: `**Example 1.** Write the formula of the alkane with 7 carbon atoms. *Answer:* **C₇H₁₆** (heptane).

**Example 2.** Name the type of reaction between methane and chlorine in sunlight. *Answer:* **Substitution**.

**Example 3.** What volume of carbon(IV) oxide is formed when 20 cm³ of methane burns completely? *Answer:* **20 cm³** — the mole ratio is 1 : 1.`,
        },
        questions: [
          ["E", "The main constituent of natural gas is", "methane", "ethene", "butane", "ethyne", "It is the first member of the alkanes."],
          ["E", "Alkanes are described as saturated because their molecules contain", "only single bonds between carbon atoms", "carbon–carbon double bonds", "carbon–carbon triple bonds", "oxygen atoms", "No further atoms can be added to them."],
          ["E", "The complete combustion of an alkane produces carbon(IV) oxide and", "water", "hydrogen", "carbon(II) oxide", "soot", "Plenty of air gives complete combustion."],
          ["M", "Methane is prepared in the laboratory by heating soda lime with", "sodium ethanoate", "calcium carbide", "ethanol", "sodium chloride", "The salt loses a carbon atom as trioxocarbonate(IV)."],
          ["M", "The characteristic reaction of alkanes with chlorine in sunlight is", "substitution", "addition", "polymerisation", "neutralisation", "Hydrogen atoms are replaced one at a time."],
          ["M", "The molecular formula of the alkane with six carbon atoms is", "C₆H₁₄", "C₆H₁₂", "C₆H₁₀", "C₆H₆", "Use the general formula with n = 6."],
          ["M", "The compound formed when one hydrogen atom of methane is replaced by chlorine is", "chloromethane", "dichloromethane", "tetrachloromethane", "chloroethane", "Its formula is CH₃Cl."],
          ["H", "The volume of oxygen needed for the complete combustion of 10 cm³ of ethane, 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O, is", "35 cm³", "70 cm³", "20 cm³", "7 cm³", "Two volumes of ethane need seven of oxygen."],
          ["H", "The boiling points of the alkanes rise with the number of carbon atoms because", "the intermolecular forces become stronger", "the covalent bonds become weaker", "the molecules become ionic", "the molecules become more branched", "Larger molecules attract one another more strongly."],
          ["H", "The breaking down of large alkane molecules into smaller alkanes and alkenes by heat is called", "cracking", "reforming", "substitution", "hydrogenation", "It may be thermal or catalytic."],
        ],
      },
      {
        week: 2,
        title: "Alkenes and alkynes",
        subtopics: ["Structure and nomenclature of alkenes", "Preparation and reactions of ethene", "Ethyne: preparation and reactions", "Tests for unsaturation and uses"],
        objectives: ["Write the formulae and names of simple alkenes and alkynes", "Describe the preparation and addition reactions of ethene", "Describe the preparation and reactions of ethyne", "Describe tests for unsaturation and distinguish ethene from ethyne"],
        lesson: {
          title: "The Unsaturated Hydrocarbons",
          summary: "Describe the preparation, addition reactions and uses of ethene and ethyne.",
          minutes: 40,
          notes: `## Alkenes
**Unsaturated** hydrocarbons containing a **carbon–carbon double bond**; general formula **CₙH₂ₙ**.
ethene C₂H₄ (CH₂=CH₂); propene C₃H₆; butene C₄H₈ (but-1-ene and but-2-ene are isomers).

### Laboratory preparation of ethene
By the **dehydration of ethanol** with excess **concentrated tetraoxosulphate(VI) acid at about 170 °C**:
C₂H₅OH → C₂H₄ + H₂O
The gas is passed through sodium hydroxide solution to remove acidic impurities and collected over water. Industrially, ethene is obtained by **cracking** petroleum fractions.

### Properties of ethene
colourless gas with a faint sweet smell; almost insoluble in water; burns with a luminous, slightly smoky flame: C₂H₄ + 3O₂ → 2CO₂ + 2H₂O.

### Addition reactions
The double bond opens and atoms **add** across it — the characteristic reaction of unsaturated compounds.
| Reagent | Product | Remark |
|---|---|---|
| hydrogen (nickel, about 200 °C) | ethane | **hydrogenation** |
| bromine (or bromine water) | 1,2-dibromoethane | red-brown colour is **decolorised** |
| chlorine | 1,2-dichloroethane | |
| hydrogen chloride | chloroethane | |
| steam (phosphoric acid catalyst) | **ethanol** | hydration — industrial manufacture |
| cold dilute acidified potassium tetraoxomanganate(VII) | ethane-1,2-diol | purple colour is **decolorised** |
| itself (high pressure, catalyst) | **poly(ethene)** | addition polymerisation |

### Uses of ethene
making poly(ethene) and other plastics; manufacture of ethanol and ethane-1,2-diol (antifreeze); ripening fruit.

## Alkynes
Unsaturated hydrocarbons containing a **carbon–carbon triple bond**; general formula **CₙH₂ₙ₋₂**.
ethyne C₂H₂ (HC≡CH); propyne C₃H₄.

### Laboratory preparation of ethyne
By the action of **cold water on calcium carbide**:
CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂
The gas is passed through copper(II) tetraoxosulphate(VI) solution to remove phosphine and collected over water.

### Properties of ethyne
colourless gas; burns in air with a **very sooty flame** (high carbon content); in oxygen it gives the very hot **oxy-ethyne flame** (about 3000 °C).
It undergoes **addition** in two stages:
- with hydrogen: ethyne → ethene → ethane
- with bromine: 1,2-dibromoethene, then 1,1,2,2-tetrabromoethane
- with hydrogen chloride: chloroethene (vinyl chloride), the monomer of PVC
It decolorises bromine water and acidified potassium tetraoxomanganate(VII), like ethene.

### Uses of ethyne
oxy-ethyne flame for **welding and cutting** metals; making chloroethene (for PVC), ethanal and ethanoic acid.

## Tests
- **unsaturation**: the compound **decolorises bromine water** (or acidified potassium tetraoxomanganate(VII)); alkanes do not
- **ethyne from ethene**: ethyne gives a **red precipitate** with **ammoniacal copper(I) chloride** and a white precipitate with ammoniacal silver trioxonitrate(V); ethene gives neither

## Comparison
| | Alkanes | Alkenes | Alkynes |
|---|---|---|---|
| general formula | CₙH₂ₙ₊₂ | CₙH₂ₙ | CₙH₂ₙ₋₂ |
| bonding | single | double | triple |
| typical reaction | substitution | addition | addition |
| bromine water | no change | decolorised | decolorised |
| flame | clean | slightly smoky | very sooty |`,
          examples: `**Example 1.** What is observed when ethene is bubbled through bromine water? *Answer:* The **red-brown colour disappears**.

**Example 2.** Write the equation for the preparation of ethyne. *Answer:* **CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂**.

**Example 3.** How would you distinguish ethene from ethyne? *Answer:* Ethyne gives a **red precipitate with ammoniacal copper(I) chloride**; ethene does not.`,
        },
        questions: [
          ["E", "The general formula of the alkenes is", "CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁OH", "Ethene, C₂H₄, is the first member."],
          ["E", "Ethyne is prepared in the laboratory by the action of cold water on", "calcium carbide", "sodium ethanoate", "calcium oxide", "ethanol", "Calcium hydroxide is the other product."],
          ["E", "The feature that makes alkenes unsaturated is the", "carbon–carbon double bond", "carbon–hydrogen bond", "hydroxyl group", "carbon–carbon single bond", "Atoms can add across it."],
          ["M", "Ethene is prepared in the laboratory by the", "dehydration of ethanol with concentrated tetraoxosulphate(VI) acid", "hydrolysis of calcium carbide", "action of soda lime on sodium ethanoate", "fermentation of glucose", "The acid removes the elements of water at about 170 °C."],
          ["M", "The characteristic reactions of the alkenes are", "addition reactions", "substitution reactions", "neutralisation reactions", "displacement reactions", "The double bond opens up."],
          ["M", "Ethene reacts with bromine to form", "1,2-dibromoethane", "bromoethane", "1,1-dibromoethane", "bromoethene", "One bromine atom adds to each carbon atom."],
          ["M", "The polymer obtained from ethene is", "poly(ethene)", "poly(chloroethene)", "nylon", "terylene", "Many ethene molecules add together."],
          ["H", "Ethyne can be distinguished from ethene because only ethyne gives a red precipitate with", "ammoniacal copper(I) chloride", "bromine water", "acidified potassium tetraoxomanganate(VII)", "sodium hydroxide solution", "Both gases decolorise the other two reagents."],
          ["H", "The final product of the complete hydrogenation of ethyne is", "ethane", "ethene", "methane", "ethanol", "Hydrogen adds in two stages."],
          ["H", "Ethyne burns in air with a sootier flame than ethane because ethyne", "has a higher percentage of carbon", "contains oxygen", "has a lower percentage of carbon", "is a saturated compound", "Unburnt carbon appears as soot."],
        ],
      },
      {
        week: 3,
        title: "Aromatic hydrocarbons and petroleum",
        subtopics: ["Benzene: structure and properties", "Origin and composition of petroleum", "Fractional distillation of petroleum", "Cracking, reforming and octane number"],
        objectives: ["Describe the structure and reactions of benzene", "Describe the origin and composition of petroleum", "List the fractions of petroleum and their uses", "Explain cracking, reforming and octane number"],
        lesson: {
          title: "Benzene and Crude Oil",
          summary: "Describe benzene and the refining of petroleum.",
          minutes: 40,
          notes: `## Benzene
**C₆H₆** — the simplest **aromatic** hydrocarbon. Its six carbon atoms form a flat hexagonal ring; six electrons are **delocalised** over the whole ring, which makes the ring unusually **stable**. It is drawn as a hexagon with a circle inside.
Benzene is obtained from coal tar and from petroleum by reforming.

### Properties
- colourless liquid with a characteristic smell; insoluble in water; a good solvent; **toxic** (causes cancer)
- burns with a very **smoky, sooty flame** because of its high carbon content
- although unsaturated in formula, it does **not** decolorise bromine water or potassium tetraoxomanganate(VII)

### Reactions
**Substitution** (preferred, because it keeps the stable ring):
- **halogenation** with chlorine or bromine and an iron or aluminium halide catalyst → chlorobenzene
- **nitration** with concentrated trioxonitrate(V) and tetraoxosulphate(VI) acids → nitrobenzene
- **sulphonation** → benzenesulphonic acid
**Addition** (only under vigorous conditions):
- hydrogen with nickel at high temperature → **cyclohexane**
- chlorine in ultraviolet light → hexachlorocyclohexane

### Uses
solvent; making plastics (polystyrene), nylon, detergents, dyes, drugs and insecticides. Methylbenzene (toluene) is a safer related solvent.

## Petroleum (crude oil)
A dark, viscous liquid mixture of **hydrocarbons** — alkanes, cycloalkanes and aromatic compounds — with small amounts of sulphur, nitrogen and oxygen compounds. It was formed over millions of years from the remains of **marine organisms** buried under sediments and subjected to heat and pressure. It occurs trapped in porous rock, usually with **natural gas** above it.
In Nigeria it is found mainly in the **Niger Delta** and offshore; refineries are at Port Harcourt, Warri, Kaduna and Lekki.

## Fractional distillation
Crude oil is heated to about 400 °C and the vapour passed into a **fractionating tower**. Components condense at different heights according to their **boiling points** — the lightest at the top.

| Fraction | Carbon atoms | Approximate boiling range | Uses |
|---|---|---|---|
| petroleum gases | 1–4 | below 40 °C | cooking gas, petrochemicals |
| petrol (gasoline) | 5–10 | 40–200 °C | fuel for motor cars |
| kerosene | 10–16 | 200–250 °C | stoves, lamps, jet fuel |
| diesel (gas oil) | 14–20 | 250–350 °C | fuel for lorries, buses, generators |
| lubricating oil | 20–35 | 350–500 °C | lubricants, grease, wax, polish |
| bitumen (residue) | over 35 | above 500 °C | road surfacing, roofing |

## Cracking
Breaking large molecules into smaller ones — **thermal** (heat and pressure) or **catalytic** (alumina–silica catalyst).
- increases the yield of **petrol**
- produces **alkenes** (ethene, propene) for the petrochemical industry
- may produce hydrogen

## Reforming
Rearranging straight-chain alkanes into **branched-chain** and **aromatic** compounds, which burn more smoothly.

## Octane number
A measure of the **quality of petrol** — its resistance to **knocking** (premature explosion in the engine).
- **2,2,4-trimethylpentane** (iso-octane): octane number **100**
- **heptane**: octane number **0**
Petrol with an octane number of 90 behaves like a mixture of 90% iso-octane and 10% heptane. Branched and aromatic hydrocarbons raise it. Lead compounds were once added as anti-knock agents but are now banned because lead is poisonous.

## Petrochemicals
Chemicals made from petroleum and natural gas: plastics, synthetic fibres, synthetic rubber, detergents, solvents, fertilisers, insecticides and drugs.

## Environmental concerns
oil spillage, gas flaring, and the carbon(IV) oxide, carbon(II) oxide and sulphur(IV) oxide from burning fuels.`,
          examples: `**Example 1.** Why does benzene not decolorise bromine water? *Answer:* Its **delocalised ring is stable** and resists addition.

**Example 2.** Which petroleum fraction is used to surface roads? *Answer:* **Bitumen**.

**Example 3.** What does an octane number of 95 mean? *Answer:* The petrol knocks like a mixture of **95% 2,2,4-trimethylpentane and 5% heptane**.`,
        },
        questions: [
          ["E", "Crude oil is separated into its fractions by", "fractional distillation", "filtration", "simple evaporation", "chromatography", "The fractions have different boiling ranges."],
          ["E", "The molecular formula of benzene is", "C₆H₆", "C₆H₁₂", "C₆H₁₄", "C₂H₂", "It has a ring of six carbon atoms."],
          ["E", "The petroleum fraction used in stoves, lamps and jet engines is", "kerosene", "bitumen", "petrol", "lubricating oil", "It boils at about 200–250 °C."],
          ["M", "The residue of the fractional distillation of petroleum, used for surfacing roads, is", "bitumen", "diesel", "kerosene", "petrol", "It has the highest boiling point."],
          ["M", "The quality of petrol is expressed by its", "octane number", "atomic number", "boiling point only", "density", "It measures resistance to knocking."],
          ["M", "The hydrocarbon assigned an octane number of 100 is", "2,2,4-trimethylpentane", "heptane", "benzene", "octane", "Heptane is given the value zero."],
          ["M", "Petroleum was formed over millions of years from", "the remains of marine organisms", "volcanic lava", "molten iron in the earth", "limestone rocks", "Heat and pressure acted on the buried remains."],
          ["H", "Benzene undergoes substitution more readily than addition because", "its delocalised ring of electrons is very stable", "it is a saturated compound", "it contains no hydrogen", "it is insoluble in water", "Substitution keeps the ring intact."],
          ["H", "The hydrogenation of benzene with a nickel catalyst produces", "cyclohexane", "hexane", "hexene", "methylbenzene", "Three molecules of hydrogen add to the ring."],
          ["H", "Petroleum fractions are cracked mainly to", "increase the yield of petrol and produce alkenes", "remove sulphur compounds", "make bitumen", "lower the octane number", "Large molecules are broken into smaller ones."],
        ],
      },
      {
        week: 4,
        title: "Alkanols",
        subtopics: ["Classification and nomenclature of alkanols", "Manufacture of ethanol", "Properties and reactions of ethanol", "Uses of alkanols"],
        objectives: ["Classify and name alkanols", "Describe the manufacture of ethanol by fermentation and from ethene", "Describe the properties and reactions of ethanol", "State the uses of alkanols"],
        lesson: {
          title: "The Alcohol Family",
          summary: "Describe the classification, manufacture, reactions and uses of alkanols.",
          minutes: 40,
          notes: `## Alkanols
Organic compounds containing the **hydroxyl group, –OH**, attached to an alkyl group; general formula **CₙH₂ₙ₊₁OH**.
methanol CH₃OH; ethanol C₂H₅OH; propan-1-ol CH₃CH₂CH₂OH; propan-2-ol CH₃CH(OH)CH₃.

## Classification
### By the number of –OH groups
- **monohydric**: one — ethanol
- **dihydric**: two — ethane-1,2-diol (glycol)
- **trihydric**: three — propane-1,2,3-triol (glycerol)
### By the carbon atom carrying the –OH group
| Class | Carbon carrying –OH is joined to | Example |
|---|---|---|
| **primary** | one other carbon atom (or none) | ethanol, propan-1-ol |
| **secondary** | two other carbon atoms | propan-2-ol |
| **tertiary** | three other carbon atoms | 2-methylpropan-2-ol |

## Manufacture of ethanol
### 1. Fermentation
The slow breakdown of sugars by **enzymes in yeast**, in the absence of air:
- starchy materials (cassava, maize, guinea corn, rice) are crushed and treated with malt; the enzyme **diastase** converts starch to **maltose**
- yeast is added at about 30 °C: **maltase** converts maltose to **glucose**; **zymase** converts glucose to ethanol
**C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂**
Fermentation stops at about 12–15% ethanol because the yeast is killed. **Fractional distillation** gives 95% ethanol (rectified spirit); the remaining water is removed with quicklime to give absolute ethanol.
**Palm wine** ferments naturally by wild yeast; local gin is distilled from it. Sugar-cane molasses is another source.
### 2. Hydration of ethene
Ethene and steam at about 300 °C and 60 atmospheres over a phosphoric acid catalyst: C₂H₄ + H₂O → C₂H₅OH.

## Physical properties of ethanol
colourless, volatile liquid with a characteristic smell; boils at 78 °C; **mixes with water in all proportions**; a good solvent. Its boiling point and solubility are high for its molecular mass because of **hydrogen bonding** between –OH groups.

## Chemical properties
1. **combustion**: burns with a pale blue flame — C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O
2. **with sodium**: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂ (sodium ethoxide and **hydrogen**; slower than with water)
3. **oxidation** by warm acidified potassium heptaoxodichromate(VI) (orange → green) or tetraoxomanganate(VII): ethanol → **ethanal** → **ethanoic acid**. Wine left open turns sour for the same reason. (Secondary alkanols give alkanones; tertiary alkanols resist oxidation.)
4. **dehydration** by concentrated tetraoxosulphate(VI) acid: with **excess acid at about 170 °C** → **ethene**; with **excess ethanol at about 140 °C** → **ethoxyethane** (an ether)
5. **esterification**: with an alkanoic acid, in the presence of a little concentrated tetraoxosulphate(VI) acid, to form an **ester** and water
6. with phosphorus(V) chloride: gives chloroethane and steamy fumes of hydrogen chloride — a test for the –OH group
7. the **iodoform test**: warming with iodine and sodium hydroxide gives yellow crystals of tri-iodomethane

## Uses of ethanol
- **solvent** for perfumes, paints, varnishes and drugs
- **fuel** — alone or blended with petrol; methylated spirit
- alcoholic drinks
- antiseptic and hand sanitiser
- making ethanoic acid, esters and other chemicals
- in thermometers for low temperatures

## Other alkanols
**methanol** — very poisonous (causes blindness and death); a solvent and fuel, added to ethanol to make methylated spirit. **Ethane-1,2-diol** — antifreeze; raw material for terylene. **Propane-1,2,3-triol** — a by-product of soap making, used in creams and explosives.

## Effects of excessive drinking
damage to the liver and brain, addiction, accidents and family problems.`,
          examples: `**Example 1.** Classify propan-2-ol. *Answer:* A **secondary** alkanol.

**Example 2.** Write the equation for the fermentation of glucose. *Answer:* **C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂**.

**Example 3.** What is observed when ethanol is warmed with acidified potassium heptaoxodichromate(VI)? *Answer:* The solution turns from **orange to green**.`,
        },
        questions: [
          ["E", "Ethanol is produced from sugars by the process of", "fermentation", "saponification", "cracking", "polymerisation", "Yeast enzymes carry it out."],
          ["E", "The enzyme in yeast that converts glucose into ethanol is", "zymase", "diastase", "pepsin", "lipase", "Carbon(IV) oxide is given off as well."],
          ["E", "The alkanol present in beer, wine and palm wine is", "ethanol", "methanol", "propan-2-ol", "ethane-1,2-diol", "Methanol is poisonous."],
          ["M", "An alkanol in which the carbon atom carrying the –OH group is joined to two other carbon atoms is", "a secondary alkanol", "a primary alkanol", "a tertiary alkanol", "a dihydric alkanol", "Propan-2-ol is an example."],
          ["M", "The gas liberated when sodium is added to ethanol is", "hydrogen", "oxygen", "ethene", "carbon(IV) oxide", "Sodium ethoxide is also formed."],
          ["M", "Ethanol is oxidised by acidified potassium heptaoxodichromate(VI) first to", "ethanal", "ethene", "ethane", "ethyl ethanoate", "Further oxidation gives ethanoic acid."],
          ["M", "The IUPAC name of CH₃CH(OH)CH₃ is", "propan-2-ol", "propan-1-ol", "butan-2-ol", "ethanol", "The –OH group is on the second of three carbon atoms."],
          ["H", "When excess ethanol is heated with concentrated tetraoxosulphate(VI) acid at about 140 °C, the main product is", "ethoxyethane", "ethene", "ethanal", "ethane", "At about 170 °C with excess acid, ethene is formed instead."],
          ["H", "Ethanol boils at a much higher temperature than propane, which has a similar molecular mass, because ethanol molecules", "are held together by hydrogen bonds", "are ionic", "are much heavier", "contain double bonds", "The –OH group allows hydrogen bonding."],
          ["H", "Fermentation alone cannot give a solution containing much more than about 15% ethanol because", "the yeast is killed by higher concentrations of ethanol", "the sugar evaporates", "ethanol turns back into glucose", "carbon(IV) oxide dissolves the ethanol", "Distillation is needed to concentrate it."],
        ],
      },
      {
        week: 5,
        title: "Alkanoic acids, esters, fats and soaps",
        subtopics: ["Alkanoic acids", "Alkanoates (esters)", "Fats and oils", "Soaps and detergents"],
        objectives: ["Describe the preparation and properties of ethanoic acid", "Describe the formation, properties and uses of esters", "Describe fats and oils and their hydrolysis", "Explain how soaps and detergents are made and how they clean"],
        lesson: {
          title: "Acids, Esters and Soap",
          summary: "Describe alkanoic acids, esters, fats and oils, and the making of soap and detergents.",
          minutes: 40,
          notes: `## Alkanoic acids
Organic acids containing the **carboxyl group, –COOH**; general formula CₙH₂ₙ₊₁COOH.
- methanoic acid, HCOOH — in the stings of ants and bees
- **ethanoic acid**, CH₃COOH — in **vinegar**
- propanoic acid, C₂H₅COOH
- long-chain "fatty acids": octadecanoic (stearic) acid, hexadecanoic (palmitic) acid
- ethanedioic acid (oxalic acid) is dibasic

### Preparation of ethanoic acid
complete **oxidation of ethanol** with acidified potassium heptaoxodichromate(VI), under reflux. Vinegar is made when bacteria oxidise the ethanol in wine or palm wine.

### Properties of ethanoic acid
- colourless liquid with a sharp vinegar smell; mixes with water; the pure acid freezes at 17 °C ("glacial" ethanoic acid)
- a **weak acid** — only **partially ionised**: CH₃COOH ⇌ CH₃COO⁻ + H⁺; only the hydrogen of the –COOH group is acidic, so it is **monobasic**
- turns blue litmus red
- with reactive metals: salt + hydrogen — 2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂
- with alkalis: CH₃COOH + NaOH → CH₃COONa + H₂O (sodium ethanoate)
- with trioxocarbonates(IV): liberates **carbon(IV) oxide** — a test that distinguishes it from alkanols
- with alkanols: forms esters

### Uses
vinegar for flavouring and preserving food; making ethanoates, cellulose ethanoate (rayon), drugs (aspirin) and solvents.

## Alkanoates (esters)
Formed by **esterification** — a reversible reaction between an alkanoic acid and an alkanol, catalysed by a little **concentrated tetraoxosulphate(VI) acid**:
CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O
The product is **ethyl ethanoate**. The name comes from the **alkanol first** (alkyl), then the **acid** (alkanoate): methanoic acid + ethanol → ethyl methanoate.
### Properties and uses
- volatile liquids with **sweet, fruity smells**; neutral; almost insoluble in water
- **hydrolysis**: split back to acid and alkanol by dilute acid; alkaline hydrolysis gives the salt of the acid
- uses: **flavourings and perfumes**; **solvents** for glue, nail varnish and paint

## Fats and oils
Natural **esters** of **propane-1,2,3-triol (glycerol)** with long-chain fatty acids.
- **fats** are solid at room temperature (mostly **saturated** chains) — animal fats such as tallow and lard
- **oils** are liquid (more **unsaturated** chains) — palm oil, groundnut oil, palm kernel oil, coconut oil
- **hardening**: hydrogen with a nickel catalyst at about 180 °C converts oils into solid fat — margarine
- sources of energy in food; used to make soap, paints and candles

## Soap
A soap is the **sodium or potassium salt of a long-chain fatty acid**.
### Saponification
The **alkaline hydrolysis of a fat or oil**:
fat or oil + sodium hydroxide → **soap + propane-1,2,3-triol**
The oil is boiled with the alkali; concentrated brine is added to **salt out** the soap, which floats as a curd; it is washed, perfumed and moulded. Potassium hydroxide gives soft soaps. Traditional black soap uses the potash from plantain peel or cocoa-pod ash with palm kernel oil.

### How soap cleans
Each soap ion has a long **hydrocarbon tail** (water-hating, dissolves in grease) and an **ionic head** (water-loving). The tails enter the grease, the heads stay in the water, and the grease is lifted off as tiny droplets (an emulsion) that are rinsed away. Soap also lowers the surface tension of water.

## Soapless (synthetic) detergents
Made from petroleum products: sodium salts of **alkylbenzene sulphonic acids** or alkyl hydrogen tetraoxosulphates(VI).
| | Soap | Soapless detergent |
|---|---|---|
| raw material | fats and oils | petroleum |
| in hard water | forms **scum**; wasted | **no scum** — its calcium and magnesium salts are soluble |
| in acidic water | precipitates fatty acid | still works |
| biodegradable | yes | some are not — may cause foam on rivers |
Phosphates in detergents can cause the overgrowth of water plants.`,
          examples: `**Example 1.** Name the ester formed from ethanoic acid and methanol. *Answer:* **Methyl ethanoate**.

**Example 2.** What are the products of saponification? *Answer:* **Soap and propane-1,2,3-triol (glycerol)**.

**Example 3.** How would you distinguish ethanoic acid from ethanol? *Answer:* Add sodium trioxocarbonate(IV): the **acid effervesces**, giving carbon(IV) oxide; ethanol does not.`,
        },
        questions: [
          ["E", "The acid present in vinegar is", "ethanoic acid", "methanoic acid", "hydrochloric acid", "ethanedioic acid", "It gives vinegar its sharp smell and taste."],
          ["E", "Soap is made by boiling a fat or oil with", "sodium hydroxide solution", "dilute hydrochloric acid", "sodium chloride solution", "ethanol", "An alkali splits the fat."],
          ["E", "The sweet-smelling compounds formed when alkanoic acids react with alkanols are", "esters", "soaps", "alkenes", "salts", "They are used in flavourings and perfumes."],
          ["M", "The alkaline hydrolysis of fats and oils is known as", "saponification", "esterification", "fermentation", "hydrogenation", "Soap is the main product."],
          ["M", "The catalyst used in the preparation of ethyl ethanoate is", "concentrated tetraoxosulphate(VI) acid", "nickel", "manganese(IV) oxide", "yeast", "It also removes the water formed."],
          ["M", "The by-product obtained in the manufacture of soap is", "propane-1,2,3-triol", "ethanol", "ethanoic acid", "sodium chloride", "It is commonly called glycerol."],
          ["M", "Ethanoic acid is described as a weak acid because it", "ionises only partially in water", "is dilute", "is an organic liquid", "does not react with metals", "Most of its molecules remain un-ionised."],
          ["H", "Soapless detergents are better than soap for washing in hard water because", "their calcium and magnesium salts are soluble, so no scum forms", "they are made from fats", "they are always biodegradable", "they precipitate the calcium ions", "Soap is wasted as insoluble scum."],
          ["H", "The ester formed from methanoic acid and ethanol is", "ethyl methanoate", "methyl ethanoate", "ethyl ethanoate", "methyl methanoate", "The alkyl part of the name comes from the alkanol."],
          ["H", "Oils are liquid at room temperature whereas fats are solid mainly because oils", "contain more unsaturated fatty acid chains", "are not esters", "contain no carbon", "have much higher molecular masses", "Hydrogenation of oils gives solid fats."],
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
        title: "Polymers, carbohydrates and proteins",
        subtopics: ["Addition and condensation polymers", "Plastics and rubber", "Carbohydrates", "Proteins"],
        objectives: ["Distinguish addition from condensation polymerisation", "Describe plastics and rubber and their uses", "Classify carbohydrates and describe their tests", "Describe proteins and their tests"],
        lesson: {
          title: "Giant Molecules",
          summary: "Describe synthetic polymers, carbohydrates and proteins.",
          minutes: 40,
          notes: `## Polymers
A **polymer** is a very large molecule built from many small repeating units called **monomers**. The process is **polymerisation**.

## Addition polymerisation
Unsaturated monomers join without the loss of any atoms; the polymer has the same empirical formula as the monomer.
| Polymer | Monomer | Uses |
|---|---|---|
| **poly(ethene)** (polythene) | ethene | bags, bottles, buckets, pipes |
| **poly(chloroethene)** (PVC) | chloroethene | pipes, cable insulation, floor tiles |
| poly(propene) | propene | ropes, crates, chairs |
| poly(phenylethene) (polystyrene) | phenylethene | packaging, disposable cups, insulation |
| poly(tetrafluoroethene) (PTFE) | tetrafluoroethene | non-stick coatings |
| perspex | methyl 2-methylpropenoate | substitute for glass |

## Condensation polymerisation
Monomers with two functional groups join with the **elimination of a small molecule** such as water or hydrogen chloride.
- **nylon** — a polyamide, from a diamine and a dioic acid: ropes, fishing nets, clothing
- **terylene** — a polyester, from ethane-1,2-diol and benzene-1,4-dicarboxylic acid: clothing, sails
- **bakelite**, urea–methanal resins: electrical fittings
- natural condensation polymers: **proteins**, **starch**, **cellulose**

## Plastics
- **thermoplastics** soften on heating and can be remoulded: polythene, PVC, nylon, polystyrene — chains are held by weak forces
- **thermosetting plastics** set hard and cannot be remelted: bakelite, melamine — chains are **cross-linked**
Advantages: light, cheap, strong, easily moulded, resistant to corrosion, good insulators. Disadvantages: most are **non-biodegradable** and cause litter; burning them gives poisonous fumes.

## Rubber
**Natural rubber** is a polymer of 2-methylbuta-1,3-diene (isoprene), obtained as **latex** from the rubber tree. Raw rubber is soft and sticky. **Vulcanisation** — heating with **sulphur** — forms cross-links between the chains, making it harder, stronger and more elastic. Synthetic rubbers (neoprene, SBR) are made from petroleum products. Uses: tyres, tubes, shoe soles, hoses.

## Carbohydrates
Compounds of carbon, hydrogen and oxygen with hydrogen and oxygen in the ratio 2 : 1; general formula Cₓ(H₂O)ᵧ.
| Class | Examples | Formula |
|---|---|---|
| **monosaccharides** (simple sugars) | glucose, fructose, galactose | C₆H₁₂O₆ |
| **disaccharides** | sucrose (cane sugar), maltose, lactose (milk sugar) | C₁₂H₂₂O₁₁ |
| **polysaccharides** | starch, cellulose, glycogen | (C₆H₁₀O₅)ₙ |
- glucose and fructose are isomers
- **hydrolysis**: sucrose → glucose + fructose; maltose → two glucose; starch → maltose → glucose (dilute acid or enzymes)
- concentrated tetraoxosulphate(VI) acid dehydrates sugars to carbon
### Tests
- **reducing sugars** (glucose, fructose, maltose, lactose): warm with **Fehling's** or Benedict's solution — the blue solution gives a **brick-red precipitate** of copper(I) oxide; they also give a silver mirror with Tollens' reagent
- **sucrose** is a **non-reducing** sugar — it gives the test only after hydrolysis
- **starch**: **blue-black** colour with **iodine** solution
### Uses
food and energy; starch for stiffening cloth and making adhesives; cellulose for paper, cotton and rayon; glucose and sucrose in sweets and drinks; fermentation to ethanol.

## Proteins
Condensation polymers of **amino acids**, which contain both an amino group (–NH₂) and a carboxyl group (–COOH). Amino acids join through the **peptide (amide) link, –CO–NH–**, with the loss of water. Proteins contain carbon, hydrogen, oxygen and **nitrogen**, and often sulphur.
- sources: meat, fish, eggs, milk, beans, groundnuts
- **hydrolysis** by acids or enzymes gives amino acids
- **denatured** by heat, acids and heavy-metal ions
### Tests
- **biuret test**: sodium hydroxide solution and a drop of copper(II) tetraoxosulphate(VI) solution give a **violet (purple)** colour
- **Millon's reagent**: a red colour on warming
- concentrated trioxonitrate(V) acid: a yellow colour
### Functions
body building and repair; enzymes; hormones; antibodies.`,
          examples: `**Example 1.** Name the monomer of PVC. *Answer:* **Chloroethene**.

**Example 2.** How is starch tested for? *Answer:* **Iodine solution** turns it **blue-black**.

**Example 3.** What colour does a protein give in the biuret test? *Answer:* **Violet (purple)**.`,
        },
        questions: [
          ["E", "The small molecules that join together to form a polymer are called", "monomers", "isomers", "isotopes", "esters", "Ethene is the monomer of polythene."],
          ["E", "Starch gives a blue-black colour with", "iodine solution", "Fehling's solution", "Millon's reagent", "bromine water", "This is the test for starch."],
          ["E", "Proteins are polymers of", "amino acids", "glucose", "fatty acids", "ethene", "They are joined by peptide links."],
          ["M", "Nylon is formed by", "condensation polymerisation", "addition polymerisation", "fermentation", "cracking", "A small molecule is eliminated at each link."],
          ["M", "The monomer of poly(chloroethene), PVC, is", "chloroethene", "ethene", "chloroethane", "propene", "It contains a double bond and a chlorine atom."],
          ["M", "A sugar that does not reduce Fehling's solution is", "sucrose", "glucose", "maltose", "fructose", "It must first be hydrolysed."],
          ["M", "Plastics that soften on heating and can be remoulded are called", "thermoplastics", "thermosetting plastics", "elastomers", "resins", "Their chains are not cross-linked."],
          ["H", "The linkage that joins amino acid units in a protein is the", "peptide link", "ester link", "glycosidic link", "double bond", "It is an amide group, –CO–NH–."],
          ["H", "The complete hydrolysis of starch produces", "glucose", "sucrose", "fructose only", "amino acids", "Maltose is formed as an intermediate."],
          ["H", "Vulcanisation improves the properties of rubber by", "forming sulphur cross-links between the polymer chains", "breaking the chains into monomers", "removing all the carbon", "adding hydrogen across the double bonds", "The rubber becomes harder and more elastic."],
        ],
      },
      {
        week: 2,
        title: "Metals and their extraction: sodium, calcium and aluminium",
        subtopics: ["Occurrence and principles of extraction", "Sodium and its compounds", "Calcium and its compounds", "Aluminium"],
        objectives: ["Relate the method of extraction of a metal to its reactivity", "Describe the extraction, properties and uses of sodium", "Describe calcium and its important compounds", "Describe the extraction, properties and uses of aluminium"],
        lesson: {
          title: "The Reactive Metals",
          summary: "Explain how metals are extracted and describe sodium, calcium and aluminium.",
          minutes: 40,
          notes: `## Occurrence of metals
Most metals occur combined in **ores** — as oxides, sulphides, trioxocarbonates(IV) or chlorides. Only unreactive metals such as **gold** and platinum occur **native** (uncombined).

## Principles of extraction
Extraction is **reduction** of the metal ion to the metal. The method depends on the **position of the metal in the activity series**:
| Metals | Method |
|---|---|
| K, Na, Ca, Mg, Al | **electrolysis** of the molten compound — too reactive to be reduced by carbon |
| Zn, Fe, Sn, Pb | **reduction of the oxide with carbon** or carbon(II) oxide |
| Cu, Hg | roasting the sulphide ore in air |
| Ag, Au | occur native; separated physically or by cyanide extraction |
General stages: mining; **concentration** of the ore; **roasting** (sulphides and trioxocarbonates(IV) to oxides); **reduction**; **refining**.

## Sodium
### Extraction — the Downs cell
Electrolysis of **molten sodium chloride**. **Calcium chloride** is added to **lower the melting point** from about 800 °C to about 600 °C.
- graphite **anode**: 2Cl⁻ → Cl₂ + 2e⁻
- circular steel **cathode**: Na⁺ + e⁻ → Na
A steel gauze keeps the products apart. Chlorine is a valuable by-product.
### Properties
soft, silvery metal; floats on water; tarnishes quickly; stored under paraffin oil; reacts vigorously with cold water: 2Na + 2H₂O → 2NaOH + H₂; burns with a golden-yellow flame.
### Uses
sodium-vapour street lamps; coolant in nuclear reactors; making sodium peroxide and sodium cyanide; a reducing agent in extracting titanium.
### Compounds
- **sodium hydroxide** (caustic soda) — from the electrolysis of brine; deliquescent; used for soap, paper and rayon
- **sodium trioxocarbonate(IV)** — made by the **Solvay process**; washing soda is the decahydrate, which effloresces; used for glass and softening water
- **sodium hydrogentrioxocarbonate(IV)** — baking powder, antacids
- **sodium chloride** — food, preservation, source of chlorine and sodium hydroxide

## Calcium
Extracted by the electrolysis of **molten calcium chloride**. It reacts steadily with cold water to give calcium hydroxide and hydrogen.
### Compounds
- **calcium trioxocarbonate(IV)** — limestone, marble, chalk; decomposes on heating: CaCO₃ → CaO + CO₂
- **calcium oxide** (quicklime) — a drying agent, especially for ammonia; used in steel making
- **calcium hydroxide** (slaked lime) — CaO + H₂O → Ca(OH)₂, with much heat; used to neutralise acid soils, in mortar, and as limewater
- **calcium tetraoxosulphate(VI)** — gypsum; plaster of Paris for setting broken bones
Uses of limestone: cement, glass, the blast furnace, building stone.

## Aluminium
The most abundant metal in the earth's crust.
### Extraction
The ore is **bauxite**, hydrated aluminium oxide (Al₂O₃·2H₂O).
1. **purification**: bauxite is heated with concentrated sodium hydroxide solution, which dissolves the amphoteric aluminium oxide and leaves iron(III) oxide and other impurities; pure aluminium hydroxide is precipitated and heated to give pure **alumina**, Al₂O₃
2. **electrolysis** (the Hall–Héroult process): alumina is dissolved in **molten cryolite** (Na₃AlF₆), which lowers the working temperature to about 950 °C and improves conductivity
 - carbon lining as **cathode**: Al³⁺ + 3e⁻ → Al
 - carbon **anodes**: 2O²⁻ → O₂ + 4e⁻ — the oxygen **burns the anodes away** to carbon(IV) oxide, so they must be replaced regularly
The process needs a great deal of **electricity**, so smelters are sited near cheap power.
### Properties
light, strong, silvery metal; good conductor of heat and electricity; protected by a thin, tough **oxide layer**, so it resists corrosion; **amphoteric** — reacts with both acids and alkalis; a powerful reducing agent (the thermit reaction: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe).
### Uses
aircraft and vehicle bodies (as alloys such as duralumin); cooking utensils; overhead cables; roofing sheets; foil; window frames.`,
          examples: `**Example 1.** Why is sodium extracted by electrolysis and not by heating its oxide with carbon? *Answer:* Sodium is **too reactive** — carbon cannot reduce its compounds.

**Example 2.** What is the role of cryolite in aluminium extraction? *Answer:* It **dissolves the alumina and lowers the working temperature**.

**Example 3.** Write the cathode reaction in the Downs cell. *Answer:* **Na⁺ + e⁻ → Na**.`,
        },
        questions: [
          ["E", "The ore from which aluminium is extracted is", "bauxite", "haematite", "cassiterite", "galena", "It is hydrated aluminium oxide."],
          ["E", "Very reactive metals such as sodium are extracted by", "electrolysis of their molten compounds", "heating their oxides with carbon", "heating the ore in air only", "washing the ore with water", "Carbon cannot reduce their compounds."],
          ["E", "A metal that occurs uncombined in nature is", "gold", "sodium", "calcium", "aluminium", "It is very unreactive."],
          ["M", "Sodium is extracted industrially in the", "Downs cell", "blast furnace", "Solvay tower", "Kipp's apparatus", "Molten sodium chloride is electrolysed."],
          ["M", "Calcium chloride is added to the sodium chloride in the Downs cell in order to", "lower the melting point of the electrolyte", "increase the yield of chlorine", "act as a catalyst", "prevent the sodium from burning", "Less energy is then needed to keep it molten."],
          ["M", "In the extraction of aluminium, the purified alumina is dissolved in molten", "cryolite", "sodium chloride", "calcium chloride", "bauxite", "Alumina alone has a very high melting point."],
          ["M", "Heating limestone strongly produces carbon(IV) oxide and", "calcium oxide", "calcium hydroxide", "calcium", "calcium chloride", "The solid product is quicklime."],
          ["H", "The carbon anodes used in the extraction of aluminium must be replaced regularly because they", "burn away in the oxygen released at them", "dissolve in the cryolite", "are deposited on the cathode", "melt at the working temperature", "Carbon(IV) oxide is formed."],
          ["H", "Aluminium is not extracted by heating its oxide with carbon because", "aluminium has a greater affinity for oxygen than carbon has", "aluminium oxide is soluble in water", "carbon is too expensive", "aluminium oxide is a gas", "Carbon cannot reduce the oxide of so reactive a metal."],
          ["H", "The quantity of electricity needed to deposit one mole of aluminium from molten alumina is", "3 faradays", "1 faraday", "2 faradays", "6 faradays", "Each aluminium ion gains three electrons."],
        ],
      },
      {
        week: 3,
        title: "Iron, copper, tin, zinc and alloys",
        subtopics: ["Extraction of iron and steel making", "Copper", "Tin and zinc", "Alloys"],
        objectives: ["Describe the extraction of iron in the blast furnace and the making of steel", "Describe the extraction, properties and uses of copper", "Describe the extraction and uses of tin and zinc", "State the composition and uses of common alloys"],
        lesson: {
          title: "The Less Reactive Metals",
          summary: "Describe the extraction and uses of iron, copper, tin and zinc, and the common alloys.",
          minutes: 40,
          notes: `## Iron
### Ores
**haematite** (Fe₂O₃), magnetite (Fe₃O₄), siderite (FeCO₃), iron pyrites (FeS₂). In Nigeria, iron ore occurs at Itakpe and Agbaja in Kogi State; steel plants are at Ajaokuta and Aladja.

### The blast furnace
The **charge** — iron ore, **coke** and **limestone** — is fed in at the top; **hot air** is blown in near the bottom.
1. coke burns: C + O₂ → CO₂ (very exothermic — about 1900 °C)
2. higher up: CO₂ + C → 2CO
3. **reduction** of the ore by **carbon(II) oxide**: **Fe₂O₃ + 3CO → 2Fe + 3CO₂**
4. limestone decomposes: CaCO₃ → CaO + CO₂
5. calcium oxide removes sandy impurities (silica): **CaO + SiO₂ → CaSiO₃** — the **slag**
Molten iron collects at the bottom; the lighter slag floats on it and protects it from oxidation. Both are tapped off separately. Slag is used for road making and cement.

### Types of iron
- **pig iron (cast iron)**: about 4% carbon with other impurities; hard but **brittle**; used for stoves, engine blocks, manhole covers
- **wrought iron**: almost pure iron; soft and malleable; chains, ornamental gates
- **steel**: iron with 0.1–1.5% **carbon**; made by blowing **oxygen** through molten pig iron to burn off impurities, then adding measured amounts of carbon and other metals

### Properties
iron is magnetic; **rusts** in moist air; reacts with steam and dilute acids; forms iron(II) (green) and iron(III) (yellow-brown) compounds.

## Copper
### Extraction
The chief ore is **copper pyrites** (CuFeS₂); also malachite and cuprite. The concentrated ore is roasted in a limited supply of air; iron is removed as slag; copper(I) sulphide is then converted to **blister copper** (about 98% pure):
Cu₂S + O₂ → 2Cu + SO₂
### Refining
By **electrolysis**: impure copper is the **anode**, a thin sheet of pure copper the **cathode**, and acidified copper(II) tetraoxosulphate(VI) the electrolyte. Copper dissolves from the anode and deposits on the cathode; impurities fall as "anode mud", which contains silver and gold.
### Properties and uses
reddish-brown, very ductile, excellent conductor; does not react with dilute acids; turns green slowly in moist air. Used for **electrical wires**, water pipes, coins, cooking vessels and alloys.

## Tin
The ore is **cassiterite (tinstone), SnO₂**, mined around **Jos** in Plateau State. The ore is washed to concentrate it, roasted to remove sulphur and arsenic, and **reduced with carbon**:
SnO₂ + 2C → Sn + 2CO
Tin resists corrosion and is non-toxic: used for **tin-plating** steel food cans, and in solder and bronze.

## Zinc
Ores: **zinc blende (ZnS)** and calamine (ZnCO₃). The sulphide is **roasted** to the oxide — 2ZnS + 3O₂ → 2ZnO + 2SO₂ — which is then **reduced with coke**: ZnO + C → Zn + CO. Zinc vapour distils off and is condensed. (The sulphur(IV) oxide is used to make tetraoxosulphate(VI) acid.)
Uses: **galvanising** iron; dry-cell cases; brass; sacrificial anodes.

## Alloys
An **alloy** is a **mixture of a metal with one or more other elements**, usually metals. Alloys are generally harder, stronger and more resistant to corrosion than the pure metals, and often have lower melting points.
| Alloy | Composition | Uses |
|---|---|---|
| **steel** | iron, carbon | construction, vehicles, tools |
| **stainless steel** | iron, chromium, nickel | cutlery, surgical instruments, sinks |
| **brass** | copper, zinc | ornaments, screws, musical instruments |
| **bronze** | copper, tin | statues, medals, bells |
| **solder** | lead, tin | joining wires and metals |
| **duralumin** | aluminium, copper, magnesium, manganese | aircraft bodies |
| type metal | lead, tin, antimony | printing |
| amalgam | mercury with another metal | dental fillings |
The traditional Benin and Ife "bronzes" are fine examples of alloy casting.`,
          examples: `**Example 1.** Write the equation for the reduction of haematite in the blast furnace. *Answer:* **Fe₂O₃ + 3CO → 2Fe + 3CO₂**.

**Example 2.** What is the composition of brass? *Answer:* **Copper and zinc**.

**Example 3.** Why is pig iron brittle? *Answer:* It contains about **4% carbon** and other impurities.`,
        },
        questions: [
          ["E", "The chief ore of iron is", "haematite", "bauxite", "cassiterite", "zinc blende", "It is iron(III) oxide."],
          ["E", "Bronze is an alloy of copper and", "tin", "zinc", "lead", "iron", "It is used for statues and medals."],
          ["E", "In Nigeria, tin ore is mined mainly around", "Jos", "Enugu", "Port Harcourt", "Sokoto", "The ore is cassiterite."],
          ["M", "The substance that reduces iron(III) oxide to iron in the blast furnace is mainly", "carbon(II) oxide", "limestone", "hot air", "slag", "It is formed when carbon(IV) oxide reacts with hot coke."],
          ["M", "The slag formed in the blast furnace is mainly", "calcium trioxosilicate(IV)", "calcium trioxocarbonate(IV)", "iron(III) oxide", "carbon", "Calcium oxide combines with silica."],
          ["M", "Steel is essentially an alloy of iron and", "carbon", "copper", "tin", "zinc", "The carbon content is carefully controlled."],
          ["M", "Blister copper is purified by", "electrolysis", "distillation", "sublimation", "reduction with carbon", "Pure copper is deposited on the cathode."],
          ["H", "In the electrolytic refining of copper, the impure copper is made the", "anode", "cathode", "electrolyte", "salt bridge", "It dissolves, and pure copper deposits on the cathode."],
          ["H", "Zinc blende is roasted in air before reduction in order to", "convert the sulphide to the oxide, which carbon can reduce", "melt the ore", "remove the zinc as vapour", "make the ore magnetic", "Sulphur(IV) oxide is given off."],
          ["H", "Stainless steel resists rusting because it contains", "chromium and nickel", "lead and tin", "copper and zinc", "extra carbon only", "A protective oxide film forms on its surface."],
        ],
      },
      {
        week: 4,
        title: "Qualitative analysis",
        subtopics: ["Preliminary tests and flame tests", "Tests for cations", "Tests for anions", "Identification of gases"],
        objectives: ["Carry out preliminary and flame tests", "Identify common cations using sodium hydroxide and aqueous ammonia", "Identify common anions", "Identify common gases by their tests"],
        lesson: {
          title: "Identifying Ions and Gases",
          summary: "Describe the tests used to identify common cations, anions and gases.",
          minutes: 40,
          notes: `## Qualitative analysis
The identification of the ions present in a substance. Always record **test, observation and inference**.

## Preliminary tests
- **appearance**: blue or green suggests copper(II); pale green iron(II); yellow-brown iron(III); white suggests none of these
- **solubility** in water
- **action of heat**: note any gas, sublimate or colour change (zinc oxide is yellow when hot and white when cold; lead(II) oxide is reddish-brown when hot and yellow when cold)

## Flame tests
A clean nichrome wire is dipped in concentrated hydrochloric acid, then in the sample, and held in a non-luminous flame.
| Ion | Flame colour |
|---|---|
| sodium | golden yellow |
| potassium | lilac |
| calcium | brick red (orange-red) |
| copper(II) | blue-green |

## Tests for cations
Add the reagent in drops, then in excess.
| Cation | With sodium hydroxide solution | With aqueous ammonia |
|---|---|---|
| **Ca²⁺** | white precipitate, **insoluble** in excess | no precipitate (or a very faint one) |
| **Zn²⁺** | white precipitate, **soluble** in excess | white precipitate, **soluble** in excess |
| **Al³⁺** | white precipitate, **soluble** in excess | white precipitate, **insoluble** in excess |
| **Pb²⁺** | white precipitate, **soluble** in excess | white precipitate, **insoluble** in excess |
| **Cu²⁺** | **blue** precipitate, insoluble in excess | pale blue precipitate, dissolving in excess to a **deep blue** solution |
| **Fe²⁺** | **dirty-green** precipitate, insoluble in excess | dirty-green precipitate, insoluble |
| **Fe³⁺** | **reddish-brown** precipitate, insoluble in excess | reddish-brown precipitate, insoluble |
| **NH₄⁺** | no precipitate; **ammonia** evolved on warming | — |
**Lead(II) and aluminium ions** behave alike with both reagents. Distinguish them with **potassium iodide** solution (a **yellow** precipitate with lead(II)) or dilute hydrochloric acid (a white precipitate with lead(II) that dissolves on heating).

## Tests for anions
| Anion | Test | Observation |
|---|---|---|
| **CO₃²⁻** | add dilute acid | effervescence; gas turns **limewater milky** |
| **SO₄²⁻** | dilute hydrochloric acid, then barium chloride solution | **white precipitate** |
| **SO₃²⁻** | dilute acid, warm | choking gas that turns acidified potassium heptaoxodichromate(VI) green; its barium salt dissolves in dilute acid |
| **Cl⁻** | dilute trioxonitrate(V) acid, then silver trioxonitrate(V) solution | **white precipitate**, soluble in aqueous ammonia |
| **NO₃⁻** | iron(II) tetraoxosulphate(VI) solution, then concentrated tetraoxosulphate(VI) acid down the side | **brown ring** |
| **S²⁻** | dilute acid | gas smelling of rotten eggs; blackens lead(II) ethanoate paper |
The dilute acid is added first to **remove interfering ions** such as trioxocarbonate(IV), which would also give precipitates.

## Identification of gases
| Gas | Test and result |
|---|---|
| hydrogen | lighted splint — "pop" |
| oxygen | rekindles a glowing splint |
| carbon(IV) oxide | turns limewater milky |
| ammonia | pungent; damp red litmus turns blue; white fumes with hydrogen chloride |
| chlorine | greenish-yellow; bleaches damp litmus |
| hydrogen chloride | fumes in moist air; white fumes with ammonia |
| sulphur(IV) oxide | choking; turns acidified potassium heptaoxodichromate(VI) from orange to green |
| hydrogen sulphide | rotten-egg smell; blackens lead(II) ethanoate paper |
| nitrogen(IV) oxide | brown; turns damp blue litmus red |
| water vapour | turns white anhydrous copper(II) tetraoxosulphate(VI) blue, or blue cobalt(II) chloride paper pink |

## Good practice
use small quantities; add reagents drop by drop; never taste; smell gases cautiously by wafting; record observations exactly — "colourless" is not the same as "clear", and a precipitate is not a "solution".`,
          examples: `**Example 1.** A solution gives a reddish-brown precipitate with sodium hydroxide. Which ion is present? *Answer:* **Iron(III), Fe³⁺**.

**Example 2.** How would you confirm a tetraoxosulphate(VI) ion? *Answer:* Add dilute hydrochloric acid and **barium chloride** solution — a **white precipitate** forms.

**Example 3.** Which reagent distinguishes zinc ions from aluminium ions? *Answer:* **Aqueous ammonia in excess** — the zinc hydroxide precipitate dissolves; aluminium hydroxide does not.`,
        },
        questions: [
          ["E", "A compound that colours a non-luminous flame golden yellow contains", "sodium ions", "potassium ions", "calcium ions", "copper(II) ions", "Each of these metals gives its own flame colour."],
          ["E", "The gas evolved when an ammonium salt is warmed with sodium hydroxide solution is", "ammonia", "hydrogen", "nitrogen", "hydrogen chloride", "It turns damp red litmus blue."],
          ["E", "Effervescence with dilute acid, giving a gas that turns limewater milky, shows the presence of a", "trioxocarbonate(IV)", "chloride", "tetraoxosulphate(VI)", "trioxonitrate(V)", "The gas is carbon(IV) oxide."],
          ["M", "A reddish-brown precipitate formed with sodium hydroxide solution indicates the presence of", "Fe³⁺", "Fe²⁺", "Cu²⁺", "Zn²⁺", "Iron(III) hydroxide is insoluble in excess alkali."],
          ["M", "A dirty-green precipitate, insoluble in excess sodium hydroxide solution, indicates", "Fe²⁺", "Fe³⁺", "Al³⁺", "Ca²⁺", "Iron(II) hydroxide is formed."],
          ["M", "A cation that gives a white precipitate soluble in excess of both sodium hydroxide solution and aqueous ammonia is", "Zn²⁺", "Al³⁺", "Ca²⁺", "Pb²⁺", "Zinc hydroxide dissolves in both reagents."],
          ["M", "A lilac flame colour is given by compounds of", "potassium", "sodium", "calcium", "copper", "It is best seen through blue glass."],
          ["H", "A reagent that distinguishes lead(II) ions from aluminium ions in solution is", "potassium iodide solution", "sodium hydroxide solution", "aqueous ammonia", "distilled water", "Lead(II) iodide forms as a yellow precipitate."],
          ["H", "A cation that gives a white precipitate insoluble in excess sodium hydroxide solution, but no precipitate with aqueous ammonia, is", "Ca²⁺", "Zn²⁺", "Al³⁺", "Cu²⁺", "Calcium hydroxide is not amphoteric."],
          ["H", "In testing for a chloride, dilute trioxonitrate(V) acid is added before the silver trioxonitrate(V) in order to", "remove ions such as trioxocarbonate(IV) that would also give a precipitate", "make the precipitate coloured", "dissolve the silver chloride", "oxidise the chloride to chlorine", "Only the halide precipitate then remains."],
        ],
      },
      {
        week: 5,
        title: "Nuclear chemistry",
        subtopics: ["Radioactivity and types of radiation", "Nuclear equations and half-life", "Nuclear fission and fusion", "Uses and hazards of radioactivity"],
        objectives: ["Describe radioactivity and the properties of alpha, beta and gamma radiations", "Balance nuclear equations and solve half-life problems", "Distinguish nuclear fission from nuclear fusion", "State the uses and hazards of radioactivity"],
        lesson: {
          title: "Changes in the Nucleus",
          summary: "Describe radioactivity, nuclear reactions and their applications.",
          minutes: 40,
          notes: `## Radioactivity
The **spontaneous disintegration of an unstable nucleus** with the emission of radiation. It was discovered by Henri Becquerel in 1896 and studied by Marie and Pierre Curie. Naturally radioactive elements include uranium, radium, thorium and polonium.

## Types of radiation
| | Alpha (α) | Beta (β) | Gamma (γ) |
|---|---|---|---|
| nature | helium nucleus, ⁴₂He | fast electron | electromagnetic wave |
| charge | +2 | −1 | 0 |
| mass | 4 units | negligible | none |
| penetrating power | low — stopped by paper | medium — stopped by a few millimetres of aluminium | very high — reduced by thick lead or concrete |
| ionising power | highest | medium | lowest |
| in an electric field | deflected towards the negative plate | deflected (more strongly) towards the positive plate | not deflected |
Radiation is detected by a Geiger–Müller counter, photographic film or a cloud chamber.

## Nuclear equations
Mass numbers and atomic numbers must **balance** on both sides.
- **alpha emission**: mass number falls by **4**, atomic number by **2**
 ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He
- **beta emission**: mass number unchanged, atomic number **rises by 1** (a neutron becomes a proton and an electron)
 ¹⁴₆C → ¹⁴₇N + ⁰₋₁e
- **gamma emission**: no change in either number — the nucleus only loses energy

## Half-life
The **half-life** of a radioactive substance is the **time taken for half of its atoms to decay**. It is constant for a given nuclide and is **not affected** by temperature, pressure or chemical combination.
After n half-lives, the fraction remaining is (½)ⁿ.
*Example:* a 16 g sample with a half-life of 5 days: after 5 days 8 g, 10 days 4 g, 15 days 2 g, 20 days **1 g**.
Half-lives range from fractions of a second to billions of years (carbon-14: about 5730 years; iodine-131: 8 days).

## Artificial transmutation
Changing one element into another by bombarding nuclei with particles: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H (Rutherford, 1919). This is how artificial radioisotopes are made.

## Nuclear fission
The **splitting of a heavy nucleus** into two lighter nuclei of comparable size, with the release of neutrons and a very large amount of energy:
²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + energy
The neutrons released split further nuclei — a **chain reaction**. Controlled in a **nuclear reactor** (to generate electricity); uncontrolled in the atomic bomb.

## Nuclear fusion
The **joining of light nuclei** to form a heavier one, with the release of even more energy:
²₁H + ³₁H → ⁴₂He + ¹₀n + energy
It needs extremely high temperatures. It is the source of the energy of the **sun** and stars, and of the hydrogen bomb.
In both, a small loss of mass appears as energy (E = mc²).

## Nuclear and chemical reactions compared
| Chemical reactions | Nuclear reactions |
|---|---|
| involve the **outer electrons** | involve the **nucleus** |
| no new element is formed | new elements may be formed |
| energy changes are small | energy changes are enormous |
| rate depends on temperature, pressure and catalysts | rate is unaffected by these |

## Uses of radioactivity
- **medicine**: cobalt-60 gamma rays for cancer treatment; iodine-131 for thyroid studies; sterilising instruments
- **agriculture**: tracers to study fertiliser uptake; pest control; preserving food; improved crop varieties
- **industry**: checking welds and the thickness of sheet; detecting leaks in pipes
- **dating**: **carbon-14** for archaeological remains; uranium for rocks
- **energy**: nuclear power stations
- research with tracers

## Hazards
Radiation damages living cells: burns, cancer (including leukaemia), sterility, genetic mutation; contamination from accidents and the disposal of long-lived waste.
**Precautions:** lead shielding and protective clothing; handling with tongs or by remote control; film badges to monitor exposure; storing sources in lead containers.`,
          examples: `**Example 1.** What are the mass number and atomic number of the nucleus formed when ²³⁸₉₂U emits an alpha particle? *Answer:* **234 and 90**.

**Example 2.** A 40 g sample has a half-life of 3 days. How much remains after 9 days? *Solution:* three half-lives — 40 → 20 → 10 → **5 g**.

**Example 3.** Distinguish fission from fusion. *Answer:* **Fission splits a heavy nucleus**; **fusion joins light nuclei**.`,
        },
        questions: [
          ["E", "An alpha particle is identical to the nucleus of", "a helium atom", "a hydrogen atom", "a carbon atom", "an electron", "It has a mass of 4 units and a charge of +2."],
          ["E", "The time taken for half of the atoms in a radioactive sample to decay is its", "half-life", "decay constant", "mass number", "period", "It is constant for a given nuclide."],
          ["E", "The radiation with the greatest penetrating power is", "gamma radiation", "alpha radiation", "beta radiation", "ultraviolet light", "Thick lead is needed to reduce it."],
          ["M", "When a nucleus emits a beta particle, its atomic number", "increases by one", "decreases by one", "decreases by two", "remains unchanged", "A neutron changes into a proton and an electron."],
          ["M", "The splitting of a heavy nucleus into two lighter nuclei with the release of energy is", "nuclear fission", "nuclear fusion", "radioactive dating", "ionisation", "It is used in nuclear reactors."],
          ["M", "The energy of the sun is produced by", "nuclear fusion", "nuclear fission", "combustion of hydrogen in oxygen", "alpha decay", "Light nuclei join at extremely high temperature."],
          ["M", "The radioisotope used to find the age of archaeological remains is", "carbon-14", "cobalt-60", "iodine-131", "uranium-235", "Its half-life is about 5730 years."],
          ["H", "When ²²⁶₈₈Ra emits an alpha particle, the mass number and atomic number of the product are", "222 and 86", "226 and 89", "224 and 86", "222 and 88", "The mass number falls by 4 and the atomic number by 2."],
          ["H", "A radioactive sample of mass 80 g has a half-life of 10 days. The mass remaining undecayed after 30 days is", "10 g", "20 g", "40 g", "5 g", "Three half-lives leave one-eighth of the sample."],
          ["H", "Unlike chemical reactions, nuclear reactions", "involve the nucleus and are unaffected by temperature or catalysts", "involve only the outer electrons", "release very little energy", "never form new elements", "They may change one element into another."],
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
        title: "Chemical industries and the environment",
        subtopics: ["Types of chemical industry and raw materials", "Selected industrial processes", "Factors in siting chemical industries", "Industrial pollution and its control"],
        objectives: ["Classify chemical industries and name their raw materials", "Outline the manufacture of cement, glass and sodium trioxocarbonate(IV)", "State the factors that determine the siting of a chemical industry", "Describe industrial pollution and its control"],
        lesson: {
          title: "Chemistry in Industry",
          summary: "Describe chemical industries, their processes and their effects on the environment.",
          minutes: 40,
          notes: `## The chemical industry
Industries that use chemical reactions to turn **raw materials** into useful products.

### Types
| Type | Products |
|---|---|
| **heavy chemicals** (made in very large tonnage) | tetraoxosulphate(VI) acid, sodium hydroxide, ammonia, sodium trioxocarbonate(IV) |
| **fine chemicals** (smaller quantity, high purity) | drugs, dyes, perfumes, laboratory reagents |
| **fertilisers** | ammonium salts, urea, superphosphate, NPK |
| **petrochemicals and plastics** | polythene, PVC, synthetic fibres, detergents |
| **pharmaceuticals** | drugs and vaccines |
| **cement, glass and ceramics** | cement, bottles, tiles, bricks |
| **soaps, detergents and cosmetics** | toilet and laundry products |
| **metallurgical** | iron and steel, aluminium |
| **food and beverages; paints; paper** | processed foods, drinks, paints, paper |

### Raw materials
air (nitrogen, oxygen); water; **petroleum** and natural gas; coal; limestone; salt (brine); sulphur; metal ores; sand; plant and animal materials.

## Selected processes
### Cement
**Limestone** and **clay** are ground, mixed and heated to about 1500 °C in a long **rotary kiln**. The **clinker** formed is cooled and ground with a little **gypsum**, which **slows the setting**. With water, sand and gravel, cement forms concrete. Nigerian plants: Ewekoro, Obajana, Ashaka, Calabar, Sokoto.
### Glass
**Sand** (silica), **sodium trioxocarbonate(IV)** and **limestone** are melted together at about 1400 °C to give soda-lime glass. Broken glass (cullet) is added to help melting. Metal oxides give colour; boron oxide gives heat-resistant glass.
### Sodium trioxocarbonate(IV) — the Solvay process
Raw materials: brine, limestone and ammonia. Ammoniated brine reacts with carbon(IV) oxide to precipitate **sodium hydrogentrioxocarbonate(IV)**, which is heated to give sodium trioxocarbonate(IV). The ammonia is **recovered and reused**, making the process economical.
### Others (met earlier)
Haber process (ammonia); Contact process (tetraoxosulphate(VI) acid); Ostwald process (trioxonitrate(V) acid); electrolysis of brine (sodium hydroxide, chlorine, hydrogen); saponification (soap).

## Siting a chemical industry
- nearness to **raw materials**
- supply of **power** and **water**
- **transport**: roads, rail, ports
- nearness to **markets**
- availability of **labour**
- **land**, and safe **disposal of waste**
- government policy and security
Example: cement works are sited beside limestone deposits because limestone is bulky and expensive to move.

## Benefits
employment; goods for home use and export; foreign exchange; development of towns and skills.

## Pollution from industry
### Air
- **sulphur(IV) oxide** and **oxides of nitrogen** → **acid rain**, which damages buildings, crops, forests and lakes
- **carbon(IV) oxide** and methane → the **greenhouse effect** and global warming
- **carbon(II) oxide** — poisonous; **smoke, dust and soot** — lung diseases
- **chlorofluorocarbons (CFCs)** → **deplete the ozone layer**, letting in more ultraviolet radiation
- gas flaring in oil-producing areas
### Water
- oil spillage; acids, alkalis and heavy metals (lead, mercury, cadmium) in effluent
- fertilisers and detergents rich in nitrates and phosphates → **eutrophication**: algae multiply, die and decay, using up the dissolved oxygen so that fish die
- hot water (thermal pollution) lowers dissolved oxygen
### Land
- solid wastes, slag heaps and **non-biodegradable** plastics
- **biodegradable** materials (paper, food waste) are broken down by microorganisms; non-biodegradable ones persist

## Control
- treat effluent and sewage before discharge
- fit **scrubbers** and filters to chimneys; use low-sulphur fuels; **catalytic converters** in vehicles change carbon(II) oxide and oxides of nitrogen into carbon(IV) oxide and nitrogen
- **recycle** metals, glass, paper and plastics; use biodegradable materials
- replace CFCs; reduce gas flaring; plant trees
- environmental laws, enforced by regulatory agencies.`,
          examples: `**Example 1.** State two raw materials for cement. *Answer:* **Limestone and clay**.

**Example 2.** Why is the Solvay process economical? *Answer:* The **ammonia is recovered and reused**, and the raw materials (brine, limestone) are cheap.

**Example 3.** What is eutrophication? *Answer:* The **overgrowth of algae** in water enriched with nitrates and phosphates, leading to loss of dissolved oxygen.`,
        },
        questions: [
          ["E", "Cement is manufactured mainly from limestone and", "clay", "salt", "sulphur", "bauxite", "They are heated together in a rotary kiln."],
          ["E", "A material that can be broken down by microorganisms is described as", "biodegradable", "non-biodegradable", "radioactive", "synthetic", "Paper and food waste are examples."],
          ["E", "An example of a heavy chemical is", "tetraoxosulphate(VI) acid", "perfume", "aspirin", "a dye", "It is produced in very large tonnage."],
          ["M", "Sodium trioxocarbonate(IV) is manufactured by the", "Solvay process", "Haber process", "Contact process", "Frasch process", "Brine, limestone and ammonia are the raw materials."],
          ["M", "The main raw materials for making ordinary glass are sand, limestone and", "sodium trioxocarbonate(IV)", "clay", "gypsum", "coke", "They are melted together at about 1400 °C."],
          ["M", "Chlorofluorocarbons are harmful to the environment because they", "deplete the ozone layer", "cause acid rain", "make water hard", "cause eutrophication", "More ultraviolet radiation then reaches the earth."],
          ["M", "Gypsum is added to cement clinker in order to", "slow down the setting of the cement", "colour the cement", "make the cement lighter", "remove limestone", "Without it the cement would set too quickly."],
          ["H", "Excess nitrate and phosphate washed into a lake cause the overgrowth of algae and the death of fish. This is called", "eutrophication", "thermal pollution", "the greenhouse effect", "sedimentation", "Decay of the algae uses up the dissolved oxygen."],
          ["H", "The most important factor in siting a cement factory is nearness to", "limestone deposits", "the sea", "an airport", "a university", "The bulky raw material is costly to transport."],
          ["H", "A catalytic converter in a car exhaust reduces pollution by changing carbon(II) oxide and oxides of nitrogen into", "carbon(IV) oxide and nitrogen", "sulphur(IV) oxide and water", "ozone and hydrogen", "soot and ammonia", "These products are far less harmful."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: physical chemistry",
        subtopics: ["Atomic structure, bonding and the periodic table", "The mole, stoichiometry and volumetric analysis", "Gas laws, energetics, rates and equilibrium", "Redox reactions and electrolysis"],
        objectives: ["Recall the key ideas of atomic structure, bonding and periodicity", "Solve mole, stoichiometry and titration problems", "Apply the gas laws and the principles of energetics, rates and equilibrium", "Solve problems on redox reactions and electrolysis"],
        lesson: {
          title: "Revision of Physical Chemistry",
          summary: "Revise the main ideas and calculations of physical chemistry for the final examinations.",
          minutes: 40,
          notes: `## 1. Atomic structure and bonding
- protons = atomic number; neutrons = mass number − atomic number; in a neutral atom electrons = protons
- **isotopes**: same atomic number, different mass numbers
- shells fill 2, 8, 8 …; the number of valence electrons gives the **group**, the number of shells the **period**
- **ionic** bonding: transfer of electrons (metal + non-metal) — high melting point, conducts when molten or dissolved
- **covalent** bonding: sharing of electrons — low melting point, non-conductor
- also dative, metallic and hydrogen bonding
- across a period: atomic radius decreases; ionisation energy and electronegativity increase

## 2. The mole
- moles = mass ÷ molar mass
- moles of gas = volume ÷ 22.4 dm³ (at s.t.p.)
- particles = moles × 6.02 × 10²³
- moles in solution = concentration × volume in dm³
- **empirical formula**: divide each percentage by the relative atomic mass, then by the smallest result
- **stoichiometry**: balanced equation → mole ratio → required quantity

## 3. Volumetric analysis
- C₁V₁ = C₂V₂ for dilution
- for a titration, (C_A V_A) ÷ (C_B V_B) = n_A ÷ n_B
- mass concentration = molar concentration × molar mass
- methyl orange for strong acid–weak base; phenolphthalein for weak acid–strong base

## 4. Gas laws
- Boyle: P₁V₁ = P₂V₂ (constant temperature)
- Charles: V₁ ÷ T₁ = V₂ ÷ T₂ (T in kelvin = °C + 273)
- general gas equation: P₁V₁ ÷ T₁ = P₂V₂ ÷ T₂
- Graham: rate of diffusion is inversely proportional to the square root of density (or molar mass)
- Dalton: total pressure = sum of partial pressures
- Gay-Lussac and Avogadro: gas volumes react in simple whole-number ratios

## 5. Energetics, rates and equilibrium
- exothermic: ΔH negative; endothermic: ΔH positive
- heat = mass × specific heat capacity × temperature change
- ΔG = ΔH − TΔS; negative ΔG means spontaneous
- rate increases with concentration, temperature, surface area and a catalyst
- **Le Chatelier**: the equilibrium shifts to oppose any change; a catalyst does not shift it; only temperature changes K

## 6. Redox and electrochemistry
- oxidation: loss of electrons, increase in oxidation number
- the oxidising agent is reduced; the reducing agent is oxidised
- oxidation numbers: elements 0; O usually −2; H usually +1; the sum equals the charge
- electrolysis: Q = It; 1 F = 96 500 C; one mole of an ion of charge n needs n faradays
- cell e.m.f. = E°(cathode) − E°(anode)

## 7. Acids, bases, salts and solubility
- pH below 7 acidic, 7 neutral, above 7 alkaline
- basicity = number of replaceable hydrogen ions per molecule
- solubility in mol/dm³ = moles of solute in a saturated solution ÷ volume in dm³

## Examination technique
- write the **equation** and the **formula** before substituting
- convert cm³ to dm³ and °C to kelvin
- show every step and **state the units**
- in objective questions, eliminate impossible options first
- manage time: do not spend too long on one question.`,
          examples: `**Example 1.** Find the empirical formula of a compound containing 40% carbon, 6.7% hydrogen and 53.3% oxygen. *Solution:* 3.33 : 6.7 : 3.33 = 1 : 2 : 1 — **CH₂O**.

**Example 2.** A gas occupies 200 cm³ at 2 atm. Find its volume at 4 atm, at constant temperature. *Solution:* 200 × 2 ÷ 4 = **100 cm³**.

**Example 3.** Find the oxidation number of nitrogen in HNO₃. *Solution:* 1 + x − 6 = 0, so x = **+5**.`,
        },
        questions: [
          ["E", "An element X has the electronic configuration 2, 8, 7. X belongs to Group", "7", "2", "3", "0", "It has seven valence electrons."],
          ["E", "The number of neutrons in an atom of potassium of mass number 39 and atomic number 19 is", "20", "19", "39", "58", "Subtract the atomic number from the mass number."],
          ["E", "A solution with a pH of 2 is", "strongly acidic", "neutral", "weakly alkaline", "strongly alkaline", "Low pH values indicate strong acidity."],
          ["M", "The mass of sodium hydroxide (NaOH = 40) needed to prepare 500 cm³ of a 0.2 mol/dm³ solution is", "4 g", "8 g", "2 g", "40 g", "0.1 mol is required."],
          ["M", "A gas occupies 300 cm³ at 27 °C. At constant pressure, its volume at 127 °C is", "400 cm³", "225 cm³", "1411 cm³", "300 cm³", "Use kelvin: 300 × 400 ÷ 300."],
          ["M", "The oxidation number of sulphur in Na₂S₂O₃ is", "+2", "+4", "+6", "−2", "2 + 2x − 6 = 0."],
          ["M", "For the equilibrium 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), where ΔH is negative, the yield of SO₃ is increased by", "lowering the temperature and raising the pressure", "raising the temperature and lowering the pressure", "adding a catalyst only", "removing the oxygen", "The forward reaction is exothermic and reduces the number of gas molecules."],
          ["H", "20.0 cm³ of 0.1 mol/dm³ H₂SO₄ exactly neutralises 25.0 cm³ of sodium hydroxide solution. The concentration of the alkali is", "0.16 mol/dm³", "0.08 mol/dm³", "0.04 mol/dm³", "0.125 mol/dm³", "0.002 mol of acid reacts with 0.004 mol of alkali."],
          ["H", "A current of 5 A is passed for 386 s through silver trioxonitrate(V) solution (Ag = 108; 1 F = 96 500 C). The mass of silver deposited is", "2.16 g", "1.08 g", "4.32 g", "0.54 g", "1930 C is 0.02 F, which deposits 0.02 mol of silver."],
          ["H", "The volume of carbon(IV) oxide at s.t.p. obtained when 10 g of CaCO₃ (molar mass 100) reacts with excess dilute acid is", "2.24 dm³", "22.4 dm³", "1.12 dm³", "4.48 dm³", "0.1 mol of the salt gives 0.1 mol of gas."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: inorganic chemistry",
        subtopics: ["Non-metals and their compounds", "Metals and their extraction", "Industrial processes", "Periodicity and qualitative analysis"],
        objectives: ["Recall the preparation and properties of the common gases", "Recall the extraction and uses of the common metals", "Summarise the main industrial processes", "Apply periodic trends and identify ions from test results"],
        lesson: {
          title: "Revision of Inorganic Chemistry",
          summary: "Revise the non-metals, metals, industrial processes and analysis for the final examinations.",
          minutes: 40,
          notes: `## 1. Common gases
| Gas | Laboratory preparation | Collection | Key test |
|---|---|---|---|
| hydrogen | zinc + dilute acid | over water | "pop" with a lighted splint |
| oxygen | hydrogen peroxide + manganese(IV) oxide | over water | rekindles a glowing splint |
| carbon(IV) oxide | marble + dilute hydrochloric acid | downward delivery | limewater turns milky |
| chlorine | concentrated hydrochloric acid + manganese(IV) oxide | downward delivery | bleaches damp litmus |
| hydrogen chloride | sodium chloride + concentrated tetraoxosulphate(VI) acid | downward delivery | white fumes with ammonia |
| ammonia | ammonium chloride + calcium hydroxide | upward delivery | damp red litmus turns blue |
| sulphur(IV) oxide | sodium trioxosulphate(IV) + dilute acid | downward delivery | acidified dichromate turns green |
| hydrogen sulphide | iron(II) sulphide + dilute acid | downward delivery | lead(II) ethanoate paper turns black |

### Drying agents
concentrated tetraoxosulphate(VI) acid for most gases — but **not** ammonia or hydrogen sulphide; **calcium oxide** for ammonia; fused calcium chloride for neutral gases.

## 2. Key properties
- **chlorine** bleaches by **oxidation**; **sulphur(IV) oxide** by **reduction**
- concentrated **tetraoxosulphate(VI) acid**: acid, oxidising agent, dehydrating agent, drying agent
- **trioxonitrate(V) acid**: a strong acid and powerful oxidising agent
- **carbon**: allotropes diamond and graphite; carbon(II) oxide is poisonous and a reducing agent
- action of heat on trioxonitrates(V): sodium and potassium → dioxonitrate(III) + oxygen; most others → oxide + nitrogen(IV) oxide + oxygen; silver and mercury → metal
- action of heat on trioxocarbonates(IV): most → oxide + carbon(IV) oxide; those of sodium and potassium are stable

## 3. Industrial processes
| Product | Process | Conditions |
|---|---|---|
| ammonia | Haber | iron; about 450 °C; 200 atm |
| tetraoxosulphate(VI) acid | Contact | vanadium(V) oxide; about 450 °C |
| trioxonitrate(V) acid | Ostwald | platinum–rhodium; about 850 °C |
| sodium trioxocarbonate(IV) | Solvay | brine, limestone, ammonia |
| sulphur | Frasch | superheated water and compressed air |
| chlorine, sodium hydroxide | electrolysis of brine | — |
| oxygen, nitrogen | fractional distillation of liquid air | — |

## 4. Metals
- **sodium**: Downs cell (molten sodium chloride with calcium chloride)
- **aluminium**: electrolysis of alumina (from **bauxite**) in molten cryolite
- **iron**: blast furnace — haematite, coke, limestone; reduced by carbon(II) oxide; slag is calcium trioxosilicate(IV)
- **copper**: from copper pyrites; refined by electrolysis
- **tin**: cassiterite reduced by carbon; **zinc**: zinc blende roasted, then reduced by coke
- alloys: brass (copper + zinc); bronze (copper + tin); solder (lead + tin); steel (iron + carbon)
- rusting needs **air and water**; prevented by painting, galvanising, alloying and sacrificial protection

## 5. Periodicity
- Group 1: reactivity increases down the group
- Group 7: reactivity decreases down the group; a halogen displaces those below it
- Period 3 oxides: basic → amphoteric → acidic
- transition metals: variable oxidation states, coloured ions, catalysts, complex ions

## 6. Analysis in brief
- sodium hydroxide: blue precipitate — Cu²⁺; dirty green — Fe²⁺; reddish-brown — Fe³⁺; white soluble in excess — Zn²⁺, Al³⁺, Pb²⁺; white insoluble — Ca²⁺
- aqueous ammonia in excess: Zn²⁺ dissolves; Cu²⁺ gives a deep blue solution
- anions: barium chloride for SO₄²⁻; silver trioxonitrate(V) for Cl⁻; brown ring for NO₃⁻; dilute acid for CO₃²⁻

## Water
temporary hardness (calcium hydrogentrioxocarbonate(IV)) is removed by boiling; permanent hardness (calcium or magnesium tetraoxosulphate(VI) or chloride) by washing soda or ion exchange.`,
          examples: `**Example 1.** Name the process and catalyst for the manufacture of ammonia. *Answer:* The **Haber process**, with an **iron** catalyst.

**Example 2.** What happens when copper(II) trioxonitrate(V) is heated? *Answer:* It gives black **copper(II) oxide**, brown **nitrogen(IV) oxide** and **oxygen**.

**Example 3.** A solution gives a white precipitate with sodium hydroxide that is insoluble in excess. Name the cation. *Answer:* **Calcium, Ca²⁺**.`,
        },
        questions: [
          ["E", "The gas that turns damp red litmus paper blue and gives white fumes with hydrogen chloride is", "ammonia", "chlorine", "sulphur(IV) oxide", "oxygen", "It is an alkaline gas."],
          ["E", "Bauxite is the chief ore of", "aluminium", "iron", "tin", "copper", "It is hydrated aluminium oxide."],
          ["E", "Brass is an alloy of copper and", "zinc", "tin", "lead", "carbon", "It is used for ornaments and screws."],
          ["M", "The gas produced when dilute hydrochloric acid is added to iron(II) sulphide is", "hydrogen sulphide", "hydrogen", "sulphur(IV) oxide", "chlorine", "It smells of rotten eggs."],
          ["M", "Chlorine is manufactured on a large scale by", "the electrolysis of brine", "heating sodium chloride", "the Contact process", "fractional distillation of liquid air", "Sodium hydroxide and hydrogen are also obtained."],
          ["M", "In the blast furnace, limestone is added in order to", "remove sandy impurities as slag", "reduce the iron ore", "supply oxygen for burning", "raise the melting point of iron", "It decomposes to calcium oxide, which combines with silica."],
          ["M", "A trioxonitrate(V) that leaves the metal itself as residue on strong heating is that of", "silver", "sodium", "lead", "copper", "Silver oxide is unstable to heat."],
          ["H", "A salt gives a pale blue precipitate with aqueous ammonia, dissolving in excess to a deep blue solution, and a white precipitate with acidified barium chloride. The salt is", "copper(II) tetraoxosulphate(VI)", "copper(II) chloride", "iron(II) tetraoxosulphate(VI)", "zinc tetraoxosulphate(VI)", "The first test shows copper(II) ions and the second tetraoxosulphate(VI) ions."],
          ["H", "Which pair of gases can both be dried with concentrated tetraoxosulphate(VI) acid?", "chlorine and hydrogen chloride", "ammonia and chlorine", "hydrogen sulphide and ammonia", "ammonia and hydrogen chloride", "Ammonia and hydrogen sulphide react with the acid."],
          ["H", "Across Period 3 from sodium to chlorine, the oxides of the elements change from", "basic through amphoteric to acidic", "acidic through amphoteric to basic", "neutral to basic", "amphoteric to basic", "Metallic character decreases across the period."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: organic chemistry and practical work",
        subtopics: ["Homologous series and nomenclature", "Reactions of organic compounds", "Organic calculations", "Practical chemistry: titration and analysis"],
        objectives: ["Recall the homologous series, their functional groups and names", "Summarise the reactions of the main organic families", "Solve problems on empirical and molecular formulae and combustion", "Apply good practice in titration and qualitative analysis"],
        lesson: {
          title: "Revision of Organic and Practical Chemistry",
          summary: "Revise organic chemistry and practical skills for the final examinations.",
          minutes: 40,
          notes: `## 1. Homologous series
| Series | General formula | Functional group | Ending |
|---|---|---|---|
| alkanes | CₙH₂ₙ₊₂ | single bonds | -ane |
| alkenes | CₙH₂ₙ | C=C | -ene |
| alkynes | CₙH₂ₙ₋₂ | C≡C | -yne |
| alkanols | CₙH₂ₙ₊₁OH | –OH | -ol |
| alkanoic acids | CₙH₂ₙ₊₁COOH | –COOH | -oic acid |
| alkanoates | RCOOR′ | –COO– | -oate |
Members differ by CH₂, have similar chemical properties and show a gradual change in physical properties.

## 2. Naming
Find the **longest chain**; number from the end nearer the functional group or branch; name the branches with their positions. Isomers share a molecular formula but differ in structure.

## 3. Reactions at a glance
- **alkanes**: combustion; **substitution** with halogens in sunlight; cracking
- **alkenes**: **addition** of hydrogen, halogens, hydrogen halides and water; polymerisation; decolorise bromine water and acidified potassium tetraoxomanganate(VII)
- **alkynes**: addition in two stages; ethyne gives a red precipitate with ammoniacal copper(I) chloride
- **benzene**: mainly substitution; sooty flame
- **alkanols**: with sodium → hydrogen; oxidation → alkanal → alkanoic acid; dehydration → alkene; with acids → esters
- **alkanoic acids**: weak acids; liberate carbon(IV) oxide from trioxocarbonates(IV); esterification
- **esters**: hydrolysis; **fats and oils** + alkali → soap + propane-1,2,3-triol (saponification)

### Preparations
methane — sodium ethanoate + soda lime; ethene — dehydration of ethanol; ethyne — calcium carbide + water; ethanol — fermentation or hydration of ethene; ethyl ethanoate — ethanoic acid + ethanol with concentrated tetraoxosulphate(VI) acid.

## 4. Natural and synthetic polymers
addition polymers (polythene, PVC); condensation polymers (nylon, terylene, proteins, starch). Tests: starch — iodine, blue-black; reducing sugars — Fehling's solution, brick-red precipitate; proteins — biuret test, violet.

## 5. Organic calculations
- **empirical formula** from percentage composition
- **molecular formula** = (empirical formula)ₙ, where n = molar mass ÷ empirical formula mass
- **combustion**: CₓHᵧ + (x + y/4)O₂ → xCO₂ + (y/2)H₂O; gas volumes are in the mole ratio
- vapour density × 2 = relative molecular mass

## 6. Titration practice
- rinse the burette with the solution it will hold, the pipette with the solution it will deliver, and the conical flask with **distilled water only**
- read the **bottom of the meniscus** at eye level; record burette readings to **two decimal places**
- do one rough titration, then at least two **concordant** titres (within 0.20 cm³); average only the concordant values
- tabulate final reading, initial reading and volume used
- state the indicator and the colour change at the end point

## 7. Qualitative analysis practice
- record **test, observation, inference** in a table
- describe what is seen: "white precipitate, soluble in excess", "effervescence; colourless, odourless gas turns limewater milky"
- add reagents drop by drop, then in excess
- name gases only after testing them
- an inference must follow from the observation

## 8. Safety
wear goggles; never pipette by mouth; add acid to water; keep flammable liquids from flames; report accidents; wash hands after practical work.`,
          examples: `**Example 1.** A hydrocarbon has the empirical formula CH₂ and a molar mass of 42. Find its molecular formula. *Solution:* 42 ÷ 14 = 3 — **C₃H₆**.

**Example 2.** Name CH₃CH₂COOH. *Answer:* **Propanoic acid**.

**Example 3.** Titres of 24.60, 24.10 and 24.20 cm³ are obtained. What is the average titre? *Solution:* use the concordant values: (24.10 + 24.20) ÷ 2 = **24.15 cm³**.`,
        },
        questions: [
          ["E", "The first member of the alkene series is", "ethene", "methane", "ethyne", "propene", "An alkene must have at least two carbon atoms."],
          ["E", "The functional group –COOH is characteristic of the", "alkanoic acids", "alkanols", "alkenes", "alkanoates", "It is called the carboxyl group."],
          ["E", "The fermentation of glucose by yeast produces ethanol and", "carbon(IV) oxide", "oxygen", "hydrogen", "water only", "The gas makes the mixture froth."],
          ["M", "Which of these hydrocarbons decolorises bromine water rapidly?", "propene", "propane", "methane", "butane", "It is unsaturated and undergoes addition."],
          ["M", "Ethyl ethanoate is formed when ethanoic acid reacts with", "ethanol", "methanol", "sodium hydroxide", "ethene", "The alkyl part of the ester comes from the alkanol."],
          ["M", "The IUPAC name of CH₃CH₂CH(CH₃)CH₃ is", "2-methylbutane", "3-methylbutane", "pentane", "2-ethylpropane", "Number the four-carbon chain from the end nearer the branch."],
          ["M", "A hydrocarbon contains 80% carbon and 20% hydrogen by mass (C = 12, H = 1). Its empirical formula is", "CH₃", "CH₂", "CH₄", "C₂H₅", "6.67 : 20 simplifies to 1 : 3."],
          ["H", "A hydrocarbon has the empirical formula CH₂ and a relative molecular mass of 56. Its molecular formula is", "C₄H₈", "C₂H₄", "C₃H₆", "C₅H₁₀", "56 ÷ 14 = 4 empirical units."],
          ["H", "The volume of oxygen required for the complete combustion of 10 cm³ of propane, C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, is", "50 cm³", "30 cm³", "15 cm³", "40 cm³", "One volume of propane needs five of oxygen."],
          ["H", "A white solid gives a brick-red flame and effervesces with dilute hydrochloric acid, producing a gas that turns limewater milky. The solid is", "calcium trioxocarbonate(IV)", "sodium trioxocarbonate(IV)", "calcium chloride", "potassium tetraoxosulphate(VI)", "The flame shows calcium and the gas shows a trioxocarbonate(IV)."],
        ],
      },
    ],
  },
];
