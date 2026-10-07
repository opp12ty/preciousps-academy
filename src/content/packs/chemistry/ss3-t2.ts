import type { PackTopic } from "../types";

/** SS3 Chemistry, Second Term — the content topics of the NERDC 2025 scheme (practical work and everyday chemistry). */
export const ss3t2Topics: PackTopic[] = [
  {
    week: 1,
    title: "Practical Chemistry Techniques",
    subtopics: ["Acid-base titration", "Redox titration", "Preparation and collection of gases", "Laboratory safety and accuracy"],
    objectives: ["Describe the correct procedure for an acid-base titration", "Choose a suitable indicator for a titration", "Describe redox titrations with potassium tetraoxomanganate(VII)", "Select the method of collecting and drying a gas from its properties"],
    lesson: {
      title: "Titrations and the Preparation of Gases",
      summary: "The techniques behind accurate volumetric analysis and the preparation of common gases.",
      minutes: 40,
      notes: `## Volumetric analysis
**Titration** finds the volume of one solution that reacts exactly with a known volume of another.

### Apparatus
| Apparatus | Use | Rinse with |
|---|---|---|
| **burette** | delivers variable volumes (usually the acid) | the solution it will contain |
| **pipette** | delivers a fixed volume (20 or 25 cm³) | the solution it will contain |
| **conical flask** | holds the solution being titrated | **distilled water only** |
| **volumetric flask** | prepares standard solutions | distilled water |
| white tile, funnel, retort stand | | |

### Procedure
1. Rinse and fill the burette; remove air bubbles from the tip; record the initial reading. **Remove the funnel.**
2. Pipette the base into the conical flask; add **2–3 drops** of indicator.
3. Run in acid, swirling, until the indicator **just** changes colour — the **end-point**.
4. Read the **bottom of the meniscus** at eye level (to avoid parallax error) to two decimal places.
5. Do one rough and at least two accurate titrations; average the **concordant** titres (within 0.20 cm³).

### Choice of indicator
| Titration | Indicator |
|---|---|
| strong acid – strong base | any (methyl orange, phenolphthalein) |
| strong acid – weak base | **methyl orange** |
| weak acid – strong base | **phenolphthalein** |
| weak acid – weak base | no suitable indicator |

| Indicator | Acid | Alkali |
|---|---|---|
| methyl orange | red (pink) | yellow |
| phenolphthalein | colourless | pink |
| litmus | red | blue |

A **standard solution** has an accurately known concentration. A **primary standard** (e.g. anhydrous Na₂CO₃) is pure, stable and not hygroscopic.

## Redox titration
**Potassium tetraoxomanganate(VII)**, KMnO₄, acidified with dilute H₂SO₄, is put in the burette. It is its **own indicator**: the end-point is the first **permanent pale pink**.
MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺
With ethanedioic acid the flask is warmed to about 70 °C: 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O.
In **iodine–thiosulphate** titrations, **starch** is the indicator (blue-black → colourless).

## Preparation of gases
| Gas | Reagents | Drying agent | Collection |
|---|---|---|---|
| **hydrogen** | Zn + dilute HCl | conc. H₂SO₄ or CaCl₂ | over water; upward delivery |
| **oxygen** | H₂O₂ + MnO₂ | conc. H₂SO₄ | over water |
| **carbon(IV) oxide** | CaCO₃ + dilute HCl | conc. H₂SO₄ | downward delivery |
| **chlorine** | MnO₂ + conc. HCl, heat | conc. H₂SO₄ | downward delivery |
| **ammonia** | Ca(OH)₂ + NH₄Cl, heat | **CaO (quicklime)** | upward delivery |
| **hydrogen chloride** | NaCl + conc. H₂SO₄ | conc. H₂SO₄ | downward delivery |
| **sulphur(IV) oxide** | Na₂SO₃ + dilute HCl | conc. H₂SO₄ | downward delivery |

### Choosing the method of collection
- **over water** — gas is insoluble or only slightly soluble
- **downward delivery** (upward displacement of air) — gas is **denser than air**
- **upward delivery** — gas is **less dense than air**

Ammonia cannot be dried with conc. H₂SO₄ or CaCl₂ because it **reacts** with them. Dilute H₂SO₄ is not used with marble because insoluble CaSO₄ coats the chips and stops the reaction.

## Safety
Wear goggles; add **acid to water**, never water to acid; use a fume cupboard for poisonous gases; never pipette by mouth.`,
      examples: `**Example 1.** Which indicator suits the titration of ethanoic acid with sodium hydroxide? *Answer:* **phenolphthalein** (weak acid – strong base).

**Example 2.** Titres of 24.90, 24.30 and 24.40 cm³ were obtained. Find the average titre. *Answer:* Use the concordant values: $\\dfrac{24.30 + 24.40}{2} = \\mathbf{24.35}$ **cm³**.

**Example 3.** Why is ammonia collected by upward delivery? *Answer:* It is **less dense than air** and very soluble in water.`,
    },
    questions: [
      ["E", "The apparatus used to deliver a fixed volume of solution into a conical flask is the", "pipette", "burette", "measuring cylinder", "beaker", "A pipette measures one accurate volume."],
      ["E", "In alkaline solution, phenolphthalein is", "pink", "colourless", "yellow", "blue", "It is colourless in acid and pink in alkali."],
      ["E", "The point at which the indicator just changes colour in a titration is the", "end-point", "boiling point", "flash point", "melting point", "It marks complete reaction."],
      ["M", "The most suitable indicator for the titration of a strong acid against a weak base is", "methyl orange", "phenolphthalein", "starch", "litmus only", "The end-point lies in the acidic range."],
      ["M", "During titration, the conical flask should be rinsed with", "distilled water only", "the acid", "the base", "the indicator", "Rinsing with a reagent would add extra moles."],
      ["M", "Ammonia gas is dried using", "quicklime", "concentrated H₂SO₄", "fused calcium chloride", "phosphorus(V) oxide", "The others react with ammonia."],
      ["M", "Carbon(IV) oxide is collected by downward delivery because it is", "denser than air", "less dense than air", "insoluble in water", "combustible", "It displaces air upward."],
      ["H", "In titrations with acidified potassium tetraoxomanganate(VII), no indicator is added because", "the reagent acts as its own indicator", "the reaction is too fast", "indicators are destroyed by acids", "the end-point is shown by a precipitate", "The first permanent pink marks the end-point."],
      ["H", "A student obtained titres of 22.80, 22.10, 22.20 and 22.15 cm³. The average titre to be used is", "22.15 cm³", "22.31 cm³", "22.10 cm³", "22.45 cm³", "Average the concordant values 22.10, 22.20 and 22.15."],
      ["H", "Dilute tetraoxosulphate(VI) acid is unsuitable for preparing carbon(IV) oxide from marble because", "insoluble calcium tetraoxosulphate(VI) coats the marble", "the acid is too weak", "no gas is produced at all", "the gas dissolves in the acid", "The coating stops further reaction."],
    ],
    jamb: [
      ["M", "Which of the following gases can be collected over water?", "Oxygen", "Ammonia", "Hydrogen chloride", "Sulphur(IV) oxide", "Oxygen is only slightly soluble in water."],
      ["H", "In the reaction MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺, 20.0 cm³ of 0.02 mol/dm³ KMnO₄ will oxidise what amount of Fe²⁺?", "0.002 mol", "0.0004 mol", "0.00008 mol", "0.02 mol", "Moles of MnO₄⁻ = 0.0004; × 5 = 0.002 mol."],
    ],
  },
  {
    week: 2,
    title: "Chemistry of Cosmetics, Plastics, Soaps and Detergents",
    subtopics: ["Cosmetics", "Plastics and polymers", "Soaps", "Detergents"],
    objectives: ["Identify the chemical components of common cosmetics", "Classify plastics and describe their formation and uses", "Explain the cleansing action of soap", "Compare soaps with soapless detergents"],
    lesson: {
      title: "Everyday Materials",
      summary: "The chemistry of products used daily: cosmetics, plastics, soaps and detergents.",
      minutes: 40,
      notes: `## Cosmetics
**Cosmetics** are substances applied to the body to cleanse, beautify or perfume it.

| Product | Main components |
|---|---|
| **creams and lotions** | emulsions of oil and water with an emulsifier; lanolin, petroleum jelly, glycerol (a humectant) |
| **powders** | talc (magnesium silicate), zinc oxide, perfume |
| **perfumes** | fragrant esters and essential oils dissolved in ethanol |
| **lipstick** | waxes, oils, pigments |
| **nail varnish and remover** | nitrocellulose resin; solvents such as propanone and ethyl ethanoate |
| **toothpaste** | abrasive (CaCO₃), fluoride, detergent, flavour |
| **deodorants / antiperspirants** | aluminium compounds, antibacterial agents |
| **hair relaxers** | sodium hydroxide or other alkalis |
| **hair dyes** | hydrogen peroxide, ammonia, dyes |

**Hazards:** skin-bleaching creams containing **mercury compounds** or **hydroquinone** damage the skin and kidneys; strong alkalis burn the scalp. Check NAFDAC numbers.

## Plastics
**Plastics** are synthetic **polymers** — giant molecules built from small units called **monomers**.

### Addition polymers
Unsaturated monomers join without losing any atoms.
| Polymer | Monomer | Uses |
|---|---|---|
| poly(ethene) | ethene | bags, bottles, buckets |
| poly(propene) | propene | ropes, crates, chairs |
| poly(chloroethene), PVC | chloroethene | pipes, cable insulation |
| polystyrene | phenylethene | packaging, disposable cups |
| PTFE (Teflon) | tetrafluoroethene | non-stick coatings |
| perspex | methyl 2-methylpropenoate | glass substitute |

### Condensation polymers
Monomers join with the **loss of a small molecule** (water or HCl).
| Polymer | Link | Uses |
|---|---|---|
| nylon | amide | ropes, fabrics, fishing lines |
| terylene | ester | clothing, sails |
| bakelite | — | electrical fittings |

### Thermoplastics and thermosets
- **Thermoplastics** soften on heating and can be remoulded (poly(ethene), PVC, nylon).
- **Thermosetting plastics** set hard permanently because of cross-links (bakelite, melamine).

Plastics are light, cheap, durable, corrosion-resistant insulators; but they are **non-biodegradable** and give poisonous fumes when burnt. **Recycling** reduces the problem.

## Soap
Soap is the **sodium or potassium salt of a long-chain fatty acid**, e.g. sodium octadecanoate (stearate), C₁₇H₃₅COONa. It is made by **saponification**:
fat or oil + NaOH → soap + propane-1,2,3-triol (glycerol)

### How soap cleans
A soap ion has a **hydrophilic** (water-loving) ionic head, –COO⁻, and a **hydrophobic** (water-hating) hydrocarbon tail. The tails dissolve in grease; the heads stay in water. Agitation lifts the grease off as tiny droplets (**micelles**), which are rinsed away — **emulsification**. Soap also lowers the **surface tension** of water.

### Soap and hard water
2C₁₇H₃₅COONa + Ca²⁺ → (C₁₇H₃₅COO)₂Ca + 2Na⁺
The insoluble calcium salt is **scum**; soap is wasted.

## Detergents
**Soapless (synthetic) detergents** are sodium salts of **alkylbenzene sulphonic acids** or alkyl sulphates, made from **petroleum** products and concentrated H₂SO₄.

| | Soap | Soapless detergent |
|---|---|---|
| raw material | fats and oils | petroleum |
| in hard water | forms scum | **no scum** (calcium salts soluble) |
| in acidic water | precipitates fatty acid | works well |
| biodegradability | biodegradable | some are not; cause foam |
| effect on environment | mild | phosphates cause eutrophication |`,
      examples: `**Example 1.** Why do soapless detergents lather readily in hard water? *Answer:* Their **calcium and magnesium salts are soluble**, so no scum forms.

**Example 2.** Classify nylon and poly(ethene) as addition or condensation polymers. *Answer:* Nylon — **condensation**; poly(ethene) — **addition**.

**Example 3.** Which part of the soap ion dissolves in grease? *Answer:* the **hydrophobic hydrocarbon tail**.`,
    },
    questions: [
      ["E", "Plastics cause an environmental problem mainly because they are", "non-biodegradable", "soluble in water", "good conductors", "very dense", "Micro-organisms cannot break them down."],
      ["E", "Soap is the sodium or potassium salt of a", "long-chain fatty acid", "mineral acid", "sulphonic acid", "amino acid", "For example, sodium octadecanoate."],
      ["E", "The solvent commonly used in perfumes is", "ethanol", "water only", "benzene", "tetrachloromethane", "Fragrant oils dissolve in ethanol, which evaporates readily."],
      ["M", "The monomer of PVC is", "chloroethene", "ethene", "propene", "phenylethene", "PVC is poly(chloroethene)."],
      ["M", "Which of these is a condensation polymer?", "Nylon", "Poly(ethene)", "Polystyrene", "PVC", "Water is lost as the amide links form."],
      ["M", "The scum formed when soap is used in hard water is", "an insoluble calcium salt of the fatty acid", "undissolved soap", "calcium chloride", "sodium trioxocarbonate(IV)", "Calcium ions precipitate the soap anions."],
      ["M", "Plastics that soften on heating and can be remoulded are", "thermoplastics", "thermosets", "elastomers only", "ceramics", "They have no cross-links between chains."],
      ["H", "In the cleansing action of soap, the hydrocarbon tail of the soap ion is", "hydrophobic and dissolves in grease", "hydrophilic and dissolves in water", "ionic and attracts calcium ions", "acidic and neutralises dirt", "The non-polar tail mixes with oil."],
      ["H", "Soapless detergents are manufactured from", "petroleum products and concentrated H₂SO₄", "palm oil and caustic soda", "wood ash and tallow", "limestone and clay", "Alkylbenzenes are sulphonated and then neutralised."],
      ["H", "A harmful ingredient found in some skin-lightening creams is", "a mercury compound", "glycerol", "lanolin", "talc", "Mercury damages the skin, kidneys and nerves."],
    ],
    jamb: [
      ["M", "Which of the following polymers is thermosetting?", "Bakelite", "Polythene", "Nylon", "Perspex", "Bakelite has permanent cross-links."],
      ["H", "A polymer has the empirical formula CH₂ and a relative molecular mass of 28 000. The number of ethene units in the molecule is [C = 12, H = 1]", "1000", "2000", "500", "14 000", "Ethene, C₂H₄, has a mass of 28; 28 000 ÷ 28 = 1000."],
    ],
  },
  {
    week: 3,
    title: "Practical Chemistry Review: Indicators, Gas Identification and Salt Tests",
    subtopics: ["Use of indicators and pH", "Identification of gases", "Tests for cations", "Tests for anions"],
    objectives: ["Use indicators and the pH scale to classify solutions", "Identify common gases from their tests", "Identify cations using sodium hydroxide and aqueous ammonia", "Identify anions using appropriate reagents"],
    lesson: {
      title: "Qualitative Analysis in Review",
      summary: "The standard tests, observations and inferences for gases, cations and anions.",
      minutes: 40,
      notes: `## Indicators and pH
pH < 7 acidic; pH = 7 neutral; pH > 7 alkaline. **Universal indicator**: red (strong acid) → orange/yellow → green (neutral) → blue → violet (strong alkali).

## Tests for gases
| Gas | Test | Observation |
|---|---|---|
| **H₂** | lighted splint | burns with a "pop" |
| **O₂** | glowing splint | rekindled |
| **CO₂** | lime water | turns milky |
| **NH₃** | moist red litmus; conc. HCl fumes | litmus turns blue; dense white fumes |
| **Cl₂** | moist blue litmus | turns red, then bleached; greenish-yellow gas |
| **HCl** | ammonia fumes; moist blue litmus | dense white fumes; turns red |
| **SO₂** | acidified K₂Cr₂O₇ paper | orange → green; choking smell |
| **H₂S** | lead(II) ethanoate paper | turns black; rotten-egg smell |
| **NO₂** | — | reddish-brown gas; turns moist blue litmus red |
| **water vapour** | anhydrous CuSO₄ / cobalt(II) chloride paper | white → blue / blue → pink |

## Tests for cations
| Cation | NaOH(aq), drops then excess | NH₃(aq), drops then excess |
|---|---|---|
| **Ca²⁺** | white ppt, insoluble | no ppt |
| **Zn²⁺** | white ppt, **soluble** | white ppt, **soluble** |
| **Al³⁺** | white ppt, **soluble** | white ppt, insoluble |
| **Pb²⁺** | white ppt, **soluble** | white ppt, insoluble |
| **Cu²⁺** | blue ppt, insoluble | blue ppt, soluble → **deep blue** solution |
| **Fe²⁺** | dirty-green ppt, insoluble | dirty-green ppt, insoluble |
| **Fe³⁺** | reddish-brown ppt, insoluble | reddish-brown ppt, insoluble |
| **NH₄⁺** | warm: ammonia evolved | — |

**Pb²⁺** is distinguished from Al³⁺ by KI (yellow ppt of PbI₂) or dilute HCl (white ppt soluble on heating).

### Flame tests
Na⁺ golden yellow; K⁺ lilac; Ca²⁺ brick red; Cu²⁺ blue-green.

## Tests for anions
| Anion | Test | Observation |
|---|---|---|
| **CO₃²⁻** | dilute acid | effervescence; gas turns lime water milky |
| **Cl⁻** | dilute HNO₃ + AgNO₃ | **white** ppt, soluble in excess NH₃(aq) |
| **Br⁻** | dilute HNO₃ + AgNO₃ | cream ppt |
| **I⁻** | dilute HNO₃ + AgNO₃ | yellow ppt, insoluble in NH₃(aq) |
| **SO₄²⁻** | dilute HCl + BaCl₂ | white ppt, **insoluble** in acid |
| **SO₃²⁻** | dilute HCl, warm | SO₂ evolved; BaCl₂ ppt **dissolves** in acid |
| **NO₃⁻** | FeSO₄ then conc. H₂SO₄ down the side | **brown ring** at the junction |
| **S²⁻** | dilute HCl | H₂S evolved |

## Recording: test – observation – inference
| Test | Observation | Inference |
|---|---|---|
| Sample + water | dissolves; colourless solution | soluble salt; Cu²⁺, Fe²⁺, Fe³⁺ absent |
| + NaOH(aq) in drops, then excess | white gelatinous ppt; dissolves | Zn²⁺, Al³⁺ or Pb²⁺ present |
| + NH₃(aq) in excess | ppt dissolves | **Zn²⁺** confirmed |
| + dilute HNO₃ + AgNO₃ | white ppt | **Cl⁻** present |
Conclusion: the salt is **zinc chloride**.

## Rules
- Record **what is seen**, not what is expected: colour, precipitate, gas, smell.
- Write "**no visible reaction**" where nothing happens.
- An inference must follow from its observation.

## Solubility rules
All Na⁺, K⁺, NH₄⁺ salts and all trioxonitrates(V) are soluble. Chlorides are soluble except AgCl and PbCl₂. Tetraoxosulphates(VI) are soluble except BaSO₄, PbSO₄ (CaSO₄ slightly). Trioxocarbonates(IV) and hydroxides are insoluble except those of Na⁺, K⁺, NH₄⁺.`,
      examples: `**Example 1.** A solution gives a blue precipitate with aqueous ammonia which dissolves in excess to a deep blue solution. Identify the cation. *Answer:* **Cu²⁺**.

**Example 2.** A gas turns acidified potassium heptaoxodichromate(VI) paper from orange to green. Name it. *Answer:* **sulphur(IV) oxide**.

**Example 3.** How would you confirm SO₄²⁻? *Answer:* Add dilute HCl then BaCl₂: a **white precipitate insoluble in the acid** forms.`,
    },
    questions: [
      ["E", "A gas that burns with a 'pop' sound when a lighted splint is applied is", "hydrogen", "oxygen", "nitrogen", "carbon(IV) oxide", "Hydrogen explodes mildly with air."],
      ["E", "A solution of pH 2 is", "strongly acidic", "neutral", "weakly alkaline", "strongly alkaline", "Low pH values indicate strong acidity."],
      ["E", "The gas that turns lime water milky is", "carbon(IV) oxide", "oxygen", "hydrogen", "ammonia", "Insoluble calcium trioxocarbonate(IV) forms."],
      ["M", "A reddish-brown precipitate with sodium hydroxide solution indicates the presence of", "Fe³⁺", "Fe²⁺", "Cu²⁺", "Zn²⁺", "Iron(III) hydroxide is reddish-brown."],
      ["M", "The brown ring test is used to identify", "NO₃⁻", "SO₄²⁻", "Cl⁻", "CO₃²⁻", "A brown ring forms at the junction with concentrated H₂SO₄."],
      ["M", "A white precipitate formed with acidified silver trioxonitrate(V), soluble in excess aqueous ammonia, indicates", "Cl⁻", "I⁻", "SO₄²⁻", "NO₃⁻", "Silver chloride dissolves in ammonia."],
      ["M", "A gas that turns lead(II) ethanoate paper black is", "hydrogen sulphide", "sulphur(IV) oxide", "chlorine", "ammonia", "Black lead(II) sulphide is formed."],
      ["H", "A cation gives a white precipitate with NaOH(aq), soluble in excess, and a white precipitate with NH₃(aq), also soluble in excess. The cation is", "Zn²⁺", "Al³⁺", "Pb²⁺", "Ca²⁺", "Only zinc hydroxide dissolves in excess of both reagents."],
      ["H", "Which pair of ions can be distinguished using potassium iodide solution?", "Pb²⁺ and Al³⁺", "Na⁺ and K⁺", "Zn²⁺ and Al³⁺", "Ca²⁺ and Na⁺", "Pb²⁺ gives a yellow precipitate of PbI₂; Al³⁺ does not."],
      ["H", "A white precipitate with barium chloride solution which dissolves in dilute HCl with the evolution of a choking gas indicates", "SO₃²⁻", "SO₄²⁻", "Cl⁻", "NO₃⁻", "Barium trioxosulphate(IV) dissolves, releasing SO₂."],
    ],
    jamb: [
      ["M", "The flame colour of sodium compounds is", "golden yellow", "lilac", "brick red", "blue-green", "Sodium gives a persistent golden-yellow flame."],
      ["H", "A salt gives a dirty-green precipitate with NaOH(aq) and a white precipitate with acidified BaCl₂ insoluble in excess acid. The salt is", "FeSO₄", "Fe₂(SO₄)₃", "FeCl₂", "CuSO₄", "Dirty green shows Fe²⁺; the barium test shows SO₄²⁻."],
    ],
  },
  {
    week: 4,
    title: "Data Interpretation and Report Writing",
    subtopics: ["Recording results in tables", "Plotting and analysing graphs", "Drawing valid conclusions", "Sources of error and writing a report"],
    objectives: ["Record experimental results in a suitable table with units", "Plot and interpret graphs of chemical data", "Draw valid conclusions from tables and graphs", "Identify sources of error and write a laboratory report"],
    lesson: {
      title: "Handling Experimental Data",
      summary: "How to record, graph, analyse and report the results of chemistry experiments.",
      minutes: 40,
      notes: `## Recording results
- Draw the **table before** the experiment.
- Head each column with the **quantity and unit**: *Volume of gas / cm³*.
- Record to the **precision of the instrument**: burette 0.05 cm³ (two decimal places), thermometer 0.5 °C, balance 0.01 g.
- Keep the same number of decimal places down a column.

### A titration table
| Burette reading / cm³ | Rough | 1 | 2 |
|---|---|---|---|
| final | 25.60 | 24.90 | 49.75 |
| initial | 0.00 | 0.00 | 24.90 |
| volume of acid used | 25.60 | 24.90 | 24.85 |
Average titre $= \\dfrac{24.90 + 24.85}{2} = 24.88$ cm³ (the rough value is excluded).

## Graphs
1. **Independent variable** (the one you change, e.g. time) on the **x-axis**; **dependent variable** on the **y-axis**.
2. Choose **scales** that fill more than half the grid; use simple multiples.
3. **Label** axes with quantity and unit; give a title.
4. Plot points accurately with small crosses.
5. Draw a **line or smooth curve of best fit** — do not join dot to dot. Ignore **anomalous** points.

### Reading a graph
- **Gradient** = change in y ÷ change in x. On a volume–time graph the gradient is the **rate**.
- **Interpolation**: reading between plotted points. **Extrapolation**: extending the line beyond them.

## Rate curves
In a graph of volume of gas against time:
- the curve is **steepest at the start** (highest concentration, fastest rate)
- it becomes less steep as reactants are used up
- it becomes **horizontal** when the reaction has **stopped**
- a **steeper** curve to the **same final volume** means a faster rate (higher temperature, catalyst, powder)
- **half the amount** of limiting reagent gives **half the final volume**

Average rate $= \\dfrac{\\text{volume of gas produced}}{\\text{time taken}}$

## Solubility curves
A graph of solubility against temperature. For most solids solubility **rises** with temperature. From the curve you can read the solubility at any temperature and the **mass of crystals deposited** on cooling: mass at higher temperature − mass at lower temperature.

## Heating and cooling curves
A **flat portion** shows a change of state at constant temperature: the **melting or boiling point**. A pure substance melts sharply; an impure one melts over a range and at a lower temperature.

## Drawing conclusions
A valid conclusion
- **answers the aim** of the experiment,
- is **supported by the data**,
- states the **relationship**: *"the rate of reaction increases as the temperature increases"*,
- does not go beyond the evidence.

## Errors
| Type | Example | Remedy |
|---|---|---|
| **parallax** | reading the meniscus from above | read at eye level |
| **systematic** | faulty balance; air bubble in burette tip | check apparatus |
| **random** | over-shooting the end-point | repeat and average |
| **heat loss** | in calorimetry | insulate, use a lid |

Percentage error $= \\dfrac{\\text{error}}{\\text{true value}} \\times 100$.

## The laboratory report
**Title → Aim → Apparatus and materials → Procedure (past tense, passive) → Results (tables, graphs) → Calculations → Discussion (errors, precautions) → Conclusion.**

*Precautions* are actions taken to improve accuracy: "the burette was read at eye level"; "the funnel was removed before titrating".`,
      examples: `**Example 1.** In a reaction, 48 cm³ of gas was collected in the first 2 minutes. Find the average rate. *Solution:* $48 \\div 2 = \\mathbf{24}$ **cm³/min**.

**Example 2.** The solubility of a salt is 60 g per 100 g of water at 70 °C and 35 g at 30 °C. What mass crystallises when a saturated solution in 100 g of water is cooled from 70 °C to 30 °C? *Solution:* $60 - 35 = \\mathbf{25}$ **g**.

**Example 3.** On which axis is time plotted in a rate experiment? *Solution:* the **x-axis** — it is the independent variable.`,
    },
    questions: [
      ["E", "In a graph of volume of gas against time, time is plotted on the", "x-axis", "y-axis", "title line", "gradient", "The independent variable goes on the horizontal axis."],
      ["E", "Burette readings should be recorded to", "two decimal places", "the nearest whole number", "one significant figure", "four decimal places", "A burette is read to the nearest 0.05 cm³."],
      ["E", "The part of a laboratory report that states what the experiment sets out to find is the", "aim", "conclusion", "procedure", "apparatus list", "The aim is stated first."],
      ["M", "On a graph of volume of gas against time, the reaction has stopped when the curve", "becomes horizontal", "is steepest", "passes through the origin", "begins to rise", "No more gas is being produced."],
      ["M", "The gradient of a graph of volume of gas produced against time gives the", "rate of reaction", "activation energy", "final volume", "concentration", "Rate is change in volume per unit time."],
      ["M", "Reading the meniscus of a burette from above the liquid level causes", "parallax error", "random heat loss", "systematic contamination", "no error", "The eye must be level with the meniscus."],
      ["M", "60 cm³ of hydrogen was collected in 4 minutes. The average rate of reaction is", "15 cm³/min", "240 cm³/min", "64 cm³/min", "0.07 cm³/min", "60 ÷ 4 = 15 cm³/min."],
      ["H", "The solubility of KNO₃ is 110 g per 100 g of water at 60 °C and 32 g at 20 °C. The mass that crystallises when a saturated solution in 50 g of water is cooled from 60 °C to 20 °C is", "39 g", "78 g", "142 g", "16 g", "In 100 g of water 78 g would deposit; in 50 g, half of that."],
      ["H", "Titres of 21.50, 20.80 and 20.90 cm³ were recorded. The value that should be discarded before averaging is", "21.50 cm³", "20.80 cm³", "20.90 cm³", "none of them", "It is not concordant with the other two."],
      ["H", "A reaction of excess acid with 1 g of marble chips gives curve P. Repeating with 1 g of powdered marble gives a curve that is", "steeper than P and ends at the same volume", "less steep than P and ends at the same volume", "steeper than P and ends at twice the volume", "identical to P", "A larger surface area raises the rate but not the amount of gas."],
    ],
    jamb: [
      ["M", "A flat portion on the heating curve of a pure solid indicates", "a change of state", "a chemical reaction", "an impurity", "a fall in temperature", "Temperature stays constant during melting or boiling."],
      ["H", "A student found the heat of neutralisation to be −52.0 kJ/mol instead of the accepted −57.2 kJ/mol. The percentage error is approximately", "9.1%", "5.2%", "10.0%", "0.9%", "5.2 ÷ 57.2 × 100 ≈ 9.1%."],
    ],
  },
];
