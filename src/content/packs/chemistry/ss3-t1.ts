import type { TermPlan } from "../types";

/** SS3 Chemistry, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Food Chemistry",
      subtopics: ["Carbohydrates: classes, properties and tests", "Proteins: structure, properties and tests", "Fats and oils: structure, properties and reactions", "Importance of food substances"],
      objectives: ["Classify carbohydrates and describe their properties and reactions", "Describe the structure, hydrolysis and tests of proteins", "Describe the structure and reactions of fats and oils", "State the importance of carbohydrates, proteins and fats"],
      lesson: {
        title: "Carbohydrates, Proteins and Fats",
        summary: "The chemistry of the three main classes of food: their structures, reactions, tests and importance.",
        minutes: 40,
        notes: `## Carbohydrates
Carbohydrates are compounds of **carbon, hydrogen and oxygen** with the general formula **Cₓ(H₂O)ᵧ**; hydrogen and oxygen are present in the ratio 2 : 1, as in water.

| Class | Examples | Formula | Notes |
|---|---|---|---|
| **monosaccharides** (simple sugars) | glucose, fructose, galactose | C₆H₁₂O₆ | sweet, soluble, crystalline; reducing sugars |
| **disaccharides** | sucrose, maltose, lactose | C₁₂H₂₂O₁₁ | two monosaccharide units; sucrose is non-reducing |
| **polysaccharides** | starch, cellulose, glycogen | (C₆H₁₀O₅)ₙ | not sweet, insoluble, non-crystalline |

Glucose and fructose are **isomers**.

### Reactions
- **Hydrolysis:** C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ + C₆H₁₂O₆ (sucrose → glucose + fructose, with dilute acid or the enzyme sucrase). Starch is hydrolysed by dilute acid to glucose, and by the enzyme amylase (diastase) to maltose.
- **Fermentation:** C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (enzyme **zymase** in yeast).
- **Dehydration:** concentrated H₂SO₄ removes the elements of water, leaving a black mass of carbon: C₁₂H₂₂O₁₁ → 12C + 11H₂O.
- **Combustion / respiration:** C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy.

### Tests
| Substance | Test | Positive result |
|---|---|---|
| **reducing sugar** | warm with Fehling's or Benedict's solution | brick-red precipitate of copper(I) oxide |
| **reducing sugar** | warm with Tollens' reagent | silver mirror |
| **starch** | add iodine solution | blue-black colour |

## Proteins
Proteins are **polymers of amino acids** containing **C, H, O and N** (and often S and P). An amino acid has an amino group and a carboxyl group: H₂N–CHR–COOH. Amino acids join by **peptide (amide) links**, –CO–NH–, with loss of water (**condensation**).

- **Hydrolysis** (acid or enzymes) breaks proteins into amino acids.
- **Denaturation:** heat, acids or alkalis destroy the structure — egg white coagulates on heating.
- Amino acids are **amphoteric**: they react with both acids and bases.

### Tests
| Test | Result |
|---|---|
| **Biuret** (NaOH then a few drops of CuSO₄) | violet / purple |
| **Millon's reagent**, warm | brick-red / pink precipitate |
| **xanthoproteic** (conc. HNO₃) | yellow, turning orange with ammonia |

## Fats and oils
Fats and oils are **esters** of **propane-1,2,3-triol (glycerol)** and long-chain **alkanoic (fatty) acids**. **Fats** are solid at room temperature (mainly saturated acids); **oils** are liquid (mainly unsaturated).

- **Saponification:** fat/oil + NaOH → soap (sodium salt of the fatty acid) + glycerol.
- **Hydrolysis:** with steam or enzymes (lipase) → fatty acids + glycerol.
- **Hydrogenation (hardening):** oil + H₂ with **nickel** catalyst at about 180 °C → solid fat (**margarine**).
- **Rancidity:** oxidation or hydrolysis gives an unpleasant smell.
- Test: a **translucent grease spot** on paper; Sudan III stains fat red.

## Importance
| Food | Importance |
|---|---|
| carbohydrates | main source of energy; cellulose gives fibre; starch for adhesives; sugar for ethanol |
| proteins | growth and repair of tissues; enzymes, hormones, antibodies |
| fats and oils | concentrated energy store; insulation; solvents for vitamins A, D, E, K; soap and margarine manufacture |`,
        examples: `**Example 1.** Write the equation for the fermentation of glucose. *Answer:* **C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂**.

**Example 2.** A food sample gives a violet colour with sodium hydroxide and copper(II) tetraoxosulphate(VI). What does it contain? *Answer:* **protein** (Biuret test).

**Example 3.** Name the process by which vegetable oil is converted to margarine. *Answer:* **hydrogenation**, using a nickel catalyst.`,
      },
      questions: [
        ["E", "The general formula of carbohydrates is", "Cₓ(H₂O)ᵧ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₊₁OH", "CₙH₂ₙ", "Hydrogen and oxygen are in the ratio 2 : 1, as in water."],
        ["E", "Glucose and fructose have the same molecular formula and are therefore", "isomers", "isotopes", "allotropes", "polymers", "Both are C₆H₁₂O₆ with different structures."],
        ["E", "The element present in all proteins but absent from carbohydrates and fats is", "nitrogen", "carbon", "hydrogen", "oxygen", "Amino acids contain the –NH₂ group."],
        ["M", "Which of these sugars is a non-reducing sugar?", "Sucrose", "Glucose", "Fructose", "Maltose", "Sucrose does not reduce Fehling's solution until hydrolysed."],
        ["M", "The enzyme that converts glucose to ethanol in yeast is", "zymase", "amylase", "lipase", "pepsin", "Zymase catalyses fermentation."],
        ["M", "Fats and oils are", "esters of glycerol and fatty acids", "polymers of amino acids", "salts of alkanoic acids", "polymers of glucose", "They are triesters of propane-1,2,3-triol."],
        ["M", "The linkage between amino acid units in a protein is the", "peptide link", "ester link", "glycosidic link", "ionic bond", "It is the –CO–NH– group."],
        ["H", "The catalyst used in the hardening of vegetable oils to margarine is", "nickel", "iron", "vanadium(V) oxide", "platinum-rhodium", "Finely divided nickel catalyses hydrogenation."],
        ["H", "When concentrated tetraoxosulphate(VI) acid is added to sucrose, a black mass forms because the acid is", "a dehydrating agent", "an oxidising agent only", "a strong base", "a bleaching agent", "It removes the elements of water, leaving carbon."],
        ["H", "The complete hydrolysis of starch by dilute acid yields", "glucose", "sucrose", "fructose only", "ethanol", "Starch is a polymer of glucose units."],
      ],
      jamb: [
        ["M", "The reagent used in the Biuret test for proteins is", "NaOH(aq) and CuSO₄(aq)", "iodine solution", "Fehling's solution", "concentrated HNO₃", "A violet colour shows protein."],
        ["H", "The mass of ethanol obtained from the complete fermentation of 90 g of glucose is [C = 12, H = 1, O = 16]", "46 g", "92 g", "23 g", "45 g", "90 g is 0.5 mol of glucose, giving 1 mol of ethanol (46 g)."],
      ],
    },
    {
      week: 2,
      title: "Drugs and Their Effects",
      subtopics: ["Meaning and classification of drugs", "Medicinal uses of drugs", "Harmful chemicals", "Drug abuse and its effects"],
      objectives: ["Define a drug and classify drugs by their effects", "State the medicinal uses of common classes of drugs", "Identify harmful chemicals in everyday use", "Explain drug abuse, its effects and its prevention"],
      lesson: {
        title: "Drugs, Medicines and Drug Abuse",
        summary: "What drugs are, how they are classified and used in medicine, and the dangers of misuse.",
        minutes: 40,
        notes: `## What is a drug?
A **drug** is any chemical substance, natural or synthetic, which when taken into the body **alters its functions**. A drug used to prevent, treat or cure disease is a **medicine**. The study of drugs is **pharmacology**; the use of chemicals to treat disease is **chemotherapy**.

## Sources of drugs
- **plants** — quinine (cinchona bark), morphine (opium poppy), artemisinin
- **micro-organisms** — penicillin from the mould *Penicillium*
- **animals** — insulin
- **synthesis** — aspirin, paracetamol, chloroquine

## Classification by effect
| Class | Action | Examples |
|---|---|---|
| **analgesics** | relieve pain | aspirin, paracetamol, morphine |
| **antipyretics** | reduce fever | paracetamol, aspirin |
| **antibiotics** | kill or stop the growth of bacteria | penicillin, tetracycline, ampicillin |
| **antimalarials** | treat malaria | quinine, chloroquine, artemisinin combinations |
| **antacids** | neutralise excess stomach acid | Mg(OH)₂, Al(OH)₃, NaHCO₃ |
| **antiseptics** | kill germs on living tissue | iodine, hydrogen peroxide, methylated spirit |
| **disinfectants** | kill germs on non-living surfaces | phenols, chlorine bleach |
| **anaesthetics** | remove sensation | ether, chloroform, lidocaine |
| **sedatives / tranquillisers** | calm; induce sleep | diazepam, barbiturates |
| **stimulants** | increase alertness | caffeine, nicotine, cocaine, amphetamines |
| **depressants** | slow the nervous system | alcohol, barbiturates |
| **narcotics** | dull the senses, relieve severe pain; addictive | morphine, heroin, codeine |
| **hallucinogens** | distort perception | Indian hemp (cannabis), LSD |
| **antihistamines** | relieve allergies | chlorpheniramine |

### Chemistry notes
- **Aspirin** is 2-ethanoyloxybenzoic acid — both an **acid** and an **ester**.
- **Antacids** work by **neutralisation**: Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O; NaHCO₃ + HCl → NaCl + H₂O + CO₂.
- **Ethanol** (C₂H₅OH) is a depressant; **methanol** is poisonous and can cause blindness.

## Harmful chemicals
| Chemical | Source | Harm |
|---|---|---|
| **carbon(II) oxide** | incomplete combustion, generator fumes | combines with haemoglobin; suffocation |
| **lead compounds** | old paints, leaded petrol, batteries | brain and nerve damage |
| **mercury** | thermometers, some skin-lightening creams | kidney and nerve damage |
| **nicotine and tar** | tobacco | addiction, lung cancer |
| **pesticides** (e.g. DDT) | farming | accumulate in food chains |
| **benzene, asbestos** | solvents, old roofing | cancer |
| **calcium carbide** used to ripen fruit | markets | contains toxic impurities |
| **potassium trioxobromate(V)** in bread | banned additive | suspected carcinogen |

## Drug abuse
**Drug abuse** is the use of a drug **without medical need**, in the **wrong dose**, or for a purpose other than that intended. **Misuse** includes self-medication and not completing a prescribed course. **Addiction (dependence)** is a compulsive need for a drug; **tolerance** means larger doses are needed for the same effect.

### Effects
damage to the brain, liver, kidneys and lungs; mental illness; poor school performance; accidents; crime and violence; family breakdown; death by overdose. Incomplete antibiotic courses cause **drug resistance**.

### Prevention and control
Drug education; taking drugs only on prescription and completing the dose; checking **expiry dates** and **NAFDAC registration numbers**; counselling and rehabilitation; enforcement by **NDLEA** (illegal drugs) and **NAFDAC** (fake and unregistered drugs).`,
        examples: `**Example 1.** Classify paracetamol. *Answer:* an **analgesic** and **antipyretic**.

**Example 2.** Write an equation showing how magnesium hydroxide acts as an antacid. *Answer:* **Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O**.

**Example 3.** Why is carbon(II) oxide poisonous? *Answer:* It combines with **haemoglobin**, preventing the blood from carrying oxygen.`,
      },
      questions: [
        ["E", "Drugs that relieve pain are called", "analgesics", "antibiotics", "antacids", "antiseptics", "Aspirin and paracetamol are analgesics."],
        ["E", "Penicillin is an example of an", "antibiotic", "analgesic", "antacid", "anaesthetic", "It kills bacteria."],
        ["E", "The agency that regulates and registers drugs and foods in Nigeria is", "NAFDAC", "NDLEA", "NEMA", "NNPC", "The National Agency for Food and Drug Administration and Control."],
        ["M", "An antacid relieves indigestion by", "neutralising excess acid in the stomach", "killing bacteria in the stomach", "producing more acid", "reducing fever", "Antacids are weak bases."],
        ["M", "Which of the following is a stimulant?", "Caffeine", "Diazepam", "Ethanol", "Morphine", "Caffeine increases alertness."],
        ["M", "Carbon(II) oxide is poisonous because it", "combines with haemoglobin in the blood", "dissolves the lungs", "is strongly acidic", "burns in the body", "Carboxyhaemoglobin cannot carry oxygen."],
        ["M", "Quinine, used against malaria, is obtained from", "the bark of the cinchona tree", "a mould", "the pancreas of animals", "crude oil", "It is a plant-derived drug."],
        ["H", "Substances that kill germs on living tissue are", "antiseptics", "disinfectants", "analgesics", "sedatives", "Disinfectants are used on non-living surfaces."],
        ["H", "The equation for the action of sodium hydrogentrioxocarbonate(IV) as an antacid is", "NaHCO₃ + HCl → NaCl + H₂O + CO₂", "NaHCO₃ + NaOH → Na₂CO₃ + H₂O", "2NaHCO₃ → Na₂CO₃ + H₂O + CO₂", "NaHCO₃ + H₂O → NaOH + H₂CO₃", "It neutralises the hydrochloric acid of the stomach."],
        ["H", "Failure to complete a prescribed course of antibiotics may lead to", "drug resistance", "immediate addiction", "neutralisation", "hallucination", "Surviving bacteria become resistant."],
      ],
      jamb: [
        ["M", "Which of the following drugs is a narcotic?", "Morphine", "Paracetamol", "Chloroquine", "Penicillin", "Morphine dulls the senses and is addictive."],
        ["H", "The volume of carbon(IV) oxide at s.t.p. released when 4.2 g of NaHCO₃ reacts completely with stomach acid is [Na = 23, H = 1, C = 12, O = 16; molar volume = 22.4 dm³]", "1.12 dm³", "2.24 dm³", "0.56 dm³", "11.2 dm³", "4.2 ÷ 84 = 0.05 mol; 0.05 × 22.4 = 1.12 dm³."],
      ],
    },
    {
      week: 3,
      title: "Chemistry in Industry and Everyday Life",
      subtopics: ["Chemistry in food and medicine", "Chemistry in agriculture", "Chemistry in textiles and construction", "Household products"],
      objectives: ["Describe the applications of chemistry in food processing and preservation", "Explain the role of chemistry in agriculture", "Describe chemical materials used in textiles and construction", "Identify the chemicals in common household products"],
      lesson: {
        title: "Applications of Chemistry",
        summary: "How chemistry supplies the food, medicines, farm inputs, clothing, buildings and household products we depend on.",
        minutes: 40,
        notes: `## Food
| Application | Chemistry |
|---|---|
| **preservation** | salting and sugaring (osmosis); smoking; refrigeration; sodium benzoate, sulphur(IV) oxide, vinegar (ethanoic acid) |
| **additives** | flavour enhancers (monosodium glutamate), colourings, sweeteners, antioxidants (vitamin C) |
| **baking** | NaHCO₃ decomposes: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂; the gas makes dough rise |
| **brewing** | fermentation of sugars to ethanol |
| **margarine** | hydrogenation of oils |
| **packaging** | aluminium foil, tin-plated cans, plastics |

## Medicine
Synthesis of drugs; antiseptics and disinfectants; anaesthetics; **radioisotopes** (cobalt-60 in cancer treatment, iodine-131 for the thyroid); plaster of Paris (CaSO₄·½H₂O) for fractures; barium meal (BaSO₄) for X-rays.

## Agriculture
### Fertilisers supply N, P and K
| Fertiliser | Formula |
|---|---|
| ammonium tetraoxosulphate(VI) | (NH₄)₂SO₄ |
| ammonium trioxonitrate(V) | NH₄NO₃ |
| urea | CO(NH₂)₂ |
| superphosphate | Ca(H₂PO₄)₂ |
| potassium chloride | KCl |

Ammonia for fertilisers comes from the **Haber process**: N₂ + 3H₂ ⇌ 2NH₃ (iron catalyst, about 450 °C, 200 atm).

- **Liming:** CaO, Ca(OH)₂ or CaCO₃ neutralises acidic soil. Lime must not be applied together with ammonium fertilisers — ammonia is lost.
- **Pesticides:** insecticides, herbicides, fungicides (e.g. Bordeaux mixture: CuSO₄ + Ca(OH)₂).

## Textiles
| Fibre | Type | Chemistry |
|---|---|---|
| cotton, linen | natural | cellulose |
| wool, silk | natural | protein |
| nylon | synthetic | polyamide (condensation polymer) |
| terylene (polyester) | synthetic | polyester (condensation polymer) |
| rayon | regenerated | modified cellulose |
**Dyes** colour fabrics; **mordants** (e.g. alum) fix dyes; **bleaches** (chlorine, hydrogen peroxide) remove colour by oxidation.

## Construction
| Material | Chemistry |
|---|---|
| **cement** | made by heating limestone with clay; mainly calcium silicates and aluminates |
| **concrete** | cement + sand + gravel + water; **reinforced** with steel rods |
| **mortar** | cement or slaked lime + sand + water |
| **glass** | sand (SiO₂) + Na₂CO₃ + CaCO₃ fused together |
| **steel** | iron alloyed with carbon; roofing sheets are **galvanised** (zinc-coated) |
| **aluminium** | roofing sheets, window frames — protected by its oxide layer |
| **paints** | pigment + binder + solvent; protect against corrosion |
| **PVC** | poly(chloroethene) pipes |

## Household products
| Product | Active chemical |
|---|---|
| table salt | NaCl |
| baking soda | NaHCO₃ |
| washing soda | Na₂CO₃·10H₂O |
| vinegar | dilute CH₃COOH |
| bleach | sodium oxochlorate(I), NaOCl |
| soap | sodium or potassium salt of a fatty acid |
| detergent | sodium alkylbenzene sulphonate |
| caustic soda | NaOH |
| cooking gas | propane and butane |
| methylated spirit | ethanol with methanol added |
| toothpaste | CaCO₃ abrasive, fluoride |
| matches | potassium trioxochlorate(V), phosphorus sulphide |`,
        examples: `**Example 1.** Why does baking powder make dough rise? *Answer:* On heating, NaHCO₃ releases **carbon(IV) oxide**, which expands the dough.

**Example 2.** Calculate the percentage of nitrogen in urea, CO(NH₂)₂ [C = 12, O = 16, N = 14, H = 1]. *Answer:* $\\dfrac{28}{60} \\times 100 = \\mathbf{46.7\\%}$.

**Example 3.** Name the fibre that is a polyamide. *Answer:* **nylon**.`,
      },
      questions: [
        ["E", "The chemical name of common table salt is", "sodium chloride", "sodium trioxocarbonate(IV)", "calcium chloride", "sodium hydroxide", "Its formula is NaCl."],
        ["E", "Vinegar is a dilute solution of", "ethanoic acid", "hydrochloric acid", "ethanol", "methanoic acid", "Vinegar contains about 5% CH₃COOH."],
        ["E", "Which of these is a nitrogenous fertiliser?", "Urea", "Superphosphate", "Potassium chloride", "Quicklime", "Urea, CO(NH₂)₂, supplies nitrogen."],
        ["M", "Lime is added to soil in order to", "reduce its acidity", "increase its acidity", "supply nitrogen", "kill weeds", "Calcium compounds neutralise soil acids."],
        ["M", "Glass is manufactured by fusing sand with", "sodium trioxocarbonate(IV) and limestone", "clay and gypsum", "coke and iron ore", "sulphur and carbon", "Soda-lime glass contains silicates of sodium and calcium."],
        ["M", "Nylon is classified as a", "polyamide", "polyester", "polysaccharide", "polyalkene", "Its units are joined by amide links."],
        ["M", "The gas that makes dough rise during baking is", "carbon(IV) oxide", "oxygen", "nitrogen", "hydrogen", "It is released when NaHCO₃ decomposes."],
        ["H", "The percentage by mass of nitrogen in ammonium trioxonitrate(V), NH₄NO₃, is [N = 14, H = 1, O = 16]", "35%", "17.5%", "28%", "46.7%", "28 ÷ 80 × 100 = 35%."],
        ["H", "Lime should not be applied to soil together with ammonium fertilisers because", "ammonia gas is liberated and lost", "the soil becomes too acidic", "the lime dissolves the crops", "nitrogen is fixed too quickly", "Alkalis displace ammonia from ammonium salts."],
        ["H", "The active ingredient in household liquid bleach is", "sodium oxochlorate(I)", "sodium chloride", "sodium trioxochlorate(V)", "sodium hydroxide only", "NaOCl bleaches by oxidation."],
      ],
      jamb: [
        ["M", "Which of the following fibres is a natural protein?", "Wool", "Cotton", "Nylon", "Terylene", "Wool and silk are proteins; cotton is cellulose."],
        ["H", "Which of these fertilisers contains the highest percentage of nitrogen? [N = 14, H = 1, O = 16, S = 32, C = 12]", "CO(NH₂)₂", "NH₄NO₃", "(NH₄)₂SO₄", "NaNO₃", "Urea has 46.7% N, more than NH₄NO₃ (35%), (NH₄)₂SO₄ (21.2%) and NaNO₃ (16.5%)."],
      ],
    },
    {
      week: 4,
      title: "Environmental Chemistry",
      subtopics: ["Air pollution", "Water and soil pollution", "Noise pollution", "Control and remediation of pollution"],
      objectives: ["Define pollution and classify pollutants", "State the sources and effects of air, water, soil and noise pollution", "Explain acid rain, the greenhouse effect and ozone depletion", "Describe methods of controlling and remediating pollution"],
      lesson: {
        title: "Pollution and Its Control",
        summary: "The chemical causes and effects of pollution of air, water and soil, and how the damage can be reduced.",
        minutes: 40,
        notes: `## Pollution
**Pollution** is the release into the environment of substances or energy in quantities that are **harmful** to living things. A **pollutant** is the harmful substance. Pollutants are **biodegradable** (broken down by micro-organisms, e.g. sewage, paper) or **non-biodegradable** (e.g. plastics, glass, heavy metals).

## Air pollution
| Pollutant | Source | Effect |
|---|---|---|
| **carbon(II) oxide, CO** | incomplete combustion; exhausts, generators | poisonous; combines with haemoglobin |
| **carbon(IV) oxide, CO₂** | burning fuels, bush burning | greenhouse effect; global warming |
| **sulphur(IV) oxide, SO₂** | burning coal and oil; smelting of sulphide ores | acid rain; respiratory disease |
| **oxides of nitrogen** | vehicle engines, power stations | acid rain; smog |
| **hydrocarbons, soot, dust** | exhausts, gas flaring, industries | smog; lung disease |
| **lead compounds** | leaded petrol | brain damage |
| **chlorofluorocarbons (CFCs)** | aerosols, old refrigerators | deplete the ozone layer |
| **hydrogen sulphide** | refineries, decaying matter | poisonous; tarnishes metals |

### Acid rain
SO₂ + H₂O → H₂SO₃; 2SO₂ + O₂ + 2H₂O → 2H₂SO₄; 4NO₂ + O₂ + 2H₂O → 4HNO₃
Acid rain corrodes metals and limestone buildings, acidifies lakes and soil, and damages plants.

### Greenhouse effect
CO₂, methane, water vapour and CFCs **trap heat** radiated from the Earth, raising its temperature (**global warming**): melting ice, rising sea level, changing climate.

### Ozone depletion
Ozone (O₃) in the upper atmosphere absorbs harmful **ultraviolet radiation**. Chlorine atoms from CFCs destroy ozone, leading to more skin cancer and eye cataracts.

## Water pollution
| Pollutant | Effect |
|---|---|
| **sewage** | water-borne diseases (cholera, typhoid); uses up dissolved oxygen |
| **fertilisers (nitrates, phosphates)** | **eutrophication**: rapid growth of algae, then decay removes oxygen and fish die |
| **detergents** | foam; phosphates cause eutrophication |
| **crude-oil spillage** | cuts off oxygen; kills aquatic life; ruins farmland and fishing |
| **industrial effluents (Hg, Pb, Cd)** | poison food chains |
| **hot water** (thermal pollution) | lowers dissolved oxygen |
**Biochemical oxygen demand (BOD)** measures organic pollution: the higher the BOD, the more polluted the water.

## Soil pollution
Refuse and non-biodegradable plastics; excess fertilisers and pesticides; oil spills; mining wastes; acid rain.

## Noise pollution
Unwanted loud sound from generators, traffic, aircraft, factories and loudspeakers. Effects: hearing loss, stress, loss of sleep, poor concentration. Loudness is measured in **decibels (dB)**.

## Control and remediation
- **catalytic converters** in exhausts: 2CO + 2NO → 2CO₂ + N₂
- **scrubbers** remove SO₂ from flue gases with lime; **electrostatic precipitators** remove dust
- unleaded petrol; low-sulphur fuels; ending gas flaring
- replacing CFCs
- **sewage treatment**: screening, sedimentation, biological oxidation, chlorination
- treating industrial effluents before discharge
- **bioremediation**: micro-organisms break down spilled oil; booms, skimmers and dispersants
- **recycling**, re-use and biodegradable materials; sanitary landfill; incineration
- tree planting (afforestation)
- silencers, sound-proofing and zoning against noise
- legislation and enforcement (e.g. NESREA)`,
        examples: `**Example 1.** Name two gases responsible for acid rain. *Answer:* **sulphur(IV) oxide** and **nitrogen(IV) oxide**.

**Example 2.** Explain eutrophication. *Answer:* Excess nitrates and phosphates cause **algae to multiply**; when they die, decay **uses up dissolved oxygen** and aquatic animals die.

**Example 3.** Write the equation for the reaction in a catalytic converter. *Answer:* **2CO + 2NO → 2CO₂ + N₂**.`,
      },
      questions: [
        ["E", "The gas mainly responsible for the greenhouse effect is", "carbon(IV) oxide", "oxygen", "nitrogen", "hydrogen", "It traps heat radiated from the Earth."],
        ["E", "Which of these materials is non-biodegradable?", "Plastic", "Paper", "Sewage", "Food remains", "Plastics are not broken down by micro-organisms."],
        ["E", "Noise level is measured in", "decibels", "pascals", "moles", "kelvins", "The decibel is the unit of loudness."],
        ["M", "Acid rain is caused mainly by", "oxides of sulphur and nitrogen", "carbon(II) oxide and methane", "ozone and CFCs", "dust and soot", "They dissolve in rain to form acids."],
        ["M", "The ozone layer is depleted by", "chlorofluorocarbons", "carbon(IV) oxide", "sulphur(IV) oxide", "water vapour", "Chlorine atoms from CFCs destroy ozone."],
        ["M", "The excessive growth of algae in a pond caused by fertiliser run-off is called", "eutrophication", "sedimentation", "chlorination", "bioremediation", "Nitrates and phosphates feed the algae."],
        ["M", "The ozone layer protects living things from", "ultraviolet radiation", "infra-red radiation", "acid rain", "noise", "Ozone absorbs harmful UV rays from the Sun."],
        ["H", "In a catalytic converter, carbon(II) oxide and nitrogen(II) oxide are converted to", "carbon(IV) oxide and nitrogen", "carbon and nitrogen(IV) oxide", "carbon(IV) oxide and ammonia", "soot and oxygen", "2CO + 2NO → 2CO₂ + N₂."],
        ["H", "A river with a high biochemical oxygen demand (BOD) is", "heavily polluted with organic matter", "very pure", "rich in dissolved oxygen", "free of bacteria", "Decay of organic matter consumes dissolved oxygen."],
        ["H", "The use of micro-organisms to break down spilled crude oil is known as", "bioremediation", "incineration", "eutrophication", "scrubbing", "Bacteria digest the hydrocarbons."],
      ],
      jamb: [
        ["M", "Which of the following pollutants combines with haemoglobin more readily than oxygen?", "Carbon(II) oxide", "Carbon(IV) oxide", "Sulphur(IV) oxide", "Nitrogen(IV) oxide", "CO forms stable carboxyhaemoglobin."],
        ["H", "The pollutant from the smelting of sulphide ores that leads to acid rain is", "SO₂", "CO", "H₂S", "CH₄", "Roasting sulphide ores releases sulphur(IV) oxide."],
      ],
    },
    {
      week: 6,
      title: "Industrial Chemistry: Chemical Industries in Nigeria",
      subtopics: ["Classification of chemical industries", "Petroleum and petrochemicals", "Cement, soap and paint", "Textiles and beverages"],
      objectives: ["Classify chemical industries and their products", "Describe petroleum refining and petrochemical production", "Outline the manufacture of cement, soap and paint", "State the factors that determine the siting of a chemical industry"],
      lesson: {
        title: "Chemical Industries in Nigeria",
        summary: "The main chemical industries, their raw materials, processes and products.",
        minutes: 40,
        notes: `## Chemical industries
A **chemical industry** converts **raw materials** into more useful products by chemical processes.

| Class | Scale | Examples |
|---|---|---|
| **heavy chemicals** | very large quantities, low cost | H₂SO₄, NaOH, NH₃, Na₂CO₃ |
| **fine chemicals** | small quantities, high purity | drugs, dyes, perfumes, laboratory reagents |
| **fertilisers** | | urea, NPK |
| **plastics, soaps, paints, cement, glass, textiles, food and beverages** | | |

### Factors in siting an industry
nearness to **raw materials**; **power** and **water** supply; **transport**; **market**; **labour**; **capital**; land and waste disposal; government policy.

## Petroleum
Crude oil is a mixture of hydrocarbons, separated by **fractional distillation**.

| Fraction | Use |
|---|---|
| refinery gas (C₁–C₄) | cooking gas |
| petrol (C₅–C₁₀) | motor fuel |
| kerosene | cooking, jet fuel |
| diesel (gas oil) | lorries, generators |
| lubricating oil | lubricants |
| bitumen | road surfacing |

- **Cracking** breaks large molecules into petrol and alkenes; **reforming** raises the **octane number**.
- **Petrochemicals** — ethene, propene, benzene — give plastics, detergents, synthetic rubber, solvents.
- Refineries: **Port Harcourt, Warri, Kaduna**, and the Dangote refinery at Lekki; petrochemicals at Eleme.

## Cement
**Raw materials:** limestone (CaCO₃) and clay or shale. They are ground, mixed and heated to about **1500 °C** in a **rotary kiln**: CaCO₃ → CaO + CO₂. The **clinker** (calcium silicates and aluminates) is ground with a little **gypsum** (CaSO₄·2H₂O), which **slows the setting**.
Plants: Ewekoro, Sagamu, Obajana, Ashaka, Nkalagu, Calabar.

## Soap
Fat or oil (palm oil, palm-kernel oil) is boiled with **NaOH** or **KOH** — **saponification**:
fat/oil + alkali → soap + glycerol
Brine is added to precipitate the soap (**salting out**). NaOH gives hard soap; KOH gives soft soap.
**Detergents** (soapless) are made from petroleum products and do **not** form scum with hard water.

## Paint
| Component | Function |
|---|---|
| **pigment** | colour and opacity (TiO₂ white, Fe₂O₃ red-brown, carbon black) |
| **binder (vehicle)** | forms the film and holds the pigment (resins, linseed oil) |
| **solvent (thinner)** | makes the paint spreadable; evaporates (water, white spirit) |
| **additives** | driers, anti-fungal agents |
Paint decorates and protects against corrosion and weathering.

## Textiles
Cotton is ginned, spun, woven, **bleached**, **dyed** and finished. Mills grew up in Kaduna, Kano and Lagos. Synthetic fibres come from petrochemicals.

## Beverages
- **Beer:** malting of grain (starch → maltose), mashing, boiling with hops, **fermentation** by yeast, maturing, filtering.
- **Soft drinks:** water, sugar, flavouring and **CO₂ dissolved under pressure** (carbonic acid, H₂CO₃).
- **Spirits:** fermentation followed by **distillation**.

## Other industries
Fertiliser (Onne); iron and steel (Ajaokuta, Aladja); aluminium smelting (Ikot Abasi); glass; paper; sugar; salt.

## Benefits and problems
Employment, foreign exchange, useful products and technology — but also **pollution** from effluents, fumes and gas flaring, which must be controlled.`,
        examples: `**Example 1.** Why is gypsum added to cement clinker? *Answer:* To **slow down the setting** of the cement.

**Example 2.** Name the process used to separate crude oil into fractions. *Answer:* **fractional distillation**.

**Example 3.** State the three main components of paint. *Answer:* **pigment, binder and solvent**.`,
      },
      questions: [
        ["E", "Which of these towns in Nigeria has a petroleum refinery?", "Warri", "Ewekoro", "Ajaokuta", "Obajana", "Refineries are at Port Harcourt, Warri and Kaduna."],
        ["E", "The main raw materials for making cement are", "limestone and clay", "sand and soda ash", "coke and iron ore", "palm oil and caustic soda", "They are heated together in a rotary kiln."],
        ["E", "Soap is manufactured by boiling fats or oils with", "an alkali", "a mineral acid", "brine only", "ethanol", "The process is saponification."],
        ["M", "The component of paint that gives it colour is the", "pigment", "binder", "solvent", "drier", "Pigments such as TiO₂ provide colour and opacity."],
        ["M", "Gypsum is added to cement clinker to", "slow down setting", "give a grey colour", "increase hardness of the kiln", "remove carbon(IV) oxide", "It prevents the cement from setting too quickly."],
        ["M", "Which of these is a heavy chemical?", "Tetraoxosulphate(VI) acid", "A perfume", "A drug", "A dye", "It is produced in very large quantities."],
        ["M", "The petroleum fraction used for surfacing roads is", "bitumen", "kerosene", "diesel", "petrol", "Bitumen is the residue of distillation."],
        ["H", "The addition of brine to the reaction mixture in soap making is called", "salting out", "saponification", "hydrolysis", "esterification", "Soap is less soluble in brine and separates."],
        ["H", "The process of converting large hydrocarbon molecules into petrol-sized molecules is", "cracking", "polymerisation", "vulcanisation", "hydrogenation", "Cracking increases the yield of petrol."],
        ["H", "Soapless detergents are preferred to soap in hard water because they", "do not form scum", "are made from fats", "are cheaper to make from palm oil", "contain no sodium", "Their calcium and magnesium salts are soluble."],
      ],
      jamb: [
        ["M", "The fizz in bottled soft drinks is due to dissolved", "carbon(IV) oxide", "oxygen", "nitrogen", "hydrogen", "CO₂ is dissolved under pressure."],
        ["H", "The mass of calcium oxide obtained by heating 50 tonnes of pure limestone in a cement kiln is [Ca = 40, C = 12, O = 16]", "28 tonnes", "22 tonnes", "56 tonnes", "44 tonnes", "CaCO₃ (100) gives CaO (56): 50 × 56 ÷ 100 = 28 tonnes."],
      ],
    },
    {
      week: 8,
      title: "Revision of Organic Chemistry",
      subtopics: ["Hydrocarbons", "Functional groups and homologous series", "Reactions of organic compounds", "Isomerism and nomenclature"],
      objectives: ["Name organic compounds by the IUPAC system", "Identify functional groups and homologous series", "Write equations for the characteristic reactions of each series", "Distinguish between classes of compounds by chemical tests"],
      lesson: {
        title: "Organic Chemistry in Review",
        summary: "A compact review of the homologous series, their functional groups, reactions and tests.",
        minutes: 40,
        notes: `## Homologous series
A **homologous series** is a family of compounds with the **same functional group** and general formula, in which successive members differ by **–CH₂–** (14 mass units), show similar chemical properties and a gradual change in physical properties.

| Series | General formula | Functional group | Example |
|---|---|---|---|
| alkanes | CₙH₂ₙ₊₂ | C–C single bonds | ethane, C₂H₆ |
| alkenes | CₙH₂ₙ | C=C | ethene, C₂H₄ |
| alkynes | CₙH₂ₙ₋₂ | C≡C | ethyne, C₂H₂ |
| alkanols | CₙH₂ₙ₊₁OH | –OH | ethanol, C₂H₅OH |
| alkanoic acids | CₙH₂ₙ₊₁COOH | –COOH | ethanoic acid, CH₃COOH |
| alkanoates (esters) | RCOOR′ | –COO– | ethyl ethanoate |
| alkanals | RCHO | –CHO | ethanal |
| alkanones | RCOR′ | C=O | propanone |
| amines | RNH₂ | –NH₂ | methylamine |

## Naming (IUPAC)
1. Find the **longest carbon chain** containing the functional group.
2. **Number** from the end nearest the functional group or branch.
3. Name branches (methyl, ethyl) and halogens with their positions.
CH₃CH(CH₃)CH₂CH₃ is **2-methylbutane**; CH₃CH=CHCH₃ is **but-2-ene**; CH₃CH(OH)CH₃ is **propan-2-ol**.

## Isomerism
**Isomers** have the same molecular formula but different structures. C₄H₁₀: butane and 2-methylpropane. C₂H₆O: ethanol and methoxymethane.

## Key reactions
| Class | Reaction |
|---|---|
| **alkanes** | combustion; **substitution** with halogens in sunlight: CH₄ + Cl₂ → CH₃Cl + HCl |
| **alkenes** | **addition**: C₂H₄ + Br₂ → C₂H₄Br₂; + H₂ (Ni) → C₂H₆; + H₂O → C₂H₅OH; **polymerisation** → poly(ethene) |
| **alkynes** | addition (two stages); ethyne from CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂ |
| **benzene** | substitution (nitration, halogenation) — stable ring |
| **alkanols** | with Na → H₂; **oxidation** to alkanal then alkanoic acid; **dehydration** (conc. H₂SO₄, 170 °C) → alkene; **esterification** |
| **alkanoic acids** | weak acids; with Na₂CO₃ → CO₂; with alkanols → esters |
| **esters** | **hydrolysis** to acid and alkanol; alkaline hydrolysis = saponification |

**Esterification:** CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (conc. H₂SO₄ catalyst) — ethyl ethanoate, a sweet-smelling liquid.

## Distinguishing tests
| Test | Observation | Shows |
|---|---|---|
| bromine water | decolourised | unsaturation (alkene, alkyne) |
| acidified KMnO₄ | decolourised | unsaturation |
| ammoniacal AgNO₃ or CuCl | precipitate | terminal alkyne (ethyne) |
| Na₂CO₃ or NaHCO₃ | effervescence (CO₂) | alkanoic acid |
| sodium metal | H₂ evolved | –OH group |
| acidified K₂Cr₂O₇, warm | orange → green | primary or secondary alkanol |

## Classes of alkanols
**Primary** (–CH₂OH) oxidise to alkanals then acids; **secondary** oxidise to alkanones; **tertiary** resist oxidation.

## Polymers
- **addition:** poly(ethene), poly(chloroethene) (PVC), polystyrene
- **condensation:** nylon, terylene, proteins, starch
- **vulcanisation:** heating rubber with sulphur to harden it

## Empirical formula from combustion data
Find moles of C (from CO₂) and H (from H₂O), then the simplest ratio.`,
        examples: `**Example 1.** Name CH₃CH₂CH(CH₃)CH₃. *Answer:* **2-methylbutane**.

**Example 2.** How would you distinguish ethane from ethene? *Answer:* Ethene **decolourises bromine water**; ethane does not.

**Example 3.** Name the ester formed from ethanoic acid and methanol. *Answer:* **methyl ethanoate**, CH₃COOCH₃.`,
      },
      questions: [
        ["E", "Propanone, CH₃COCH₃, belongs to the homologous series of", "alkanones", "alkanals", "alkanols", "alkanoates", "Its carbonyl group lies between two alkyl groups."],
        ["E", "Successive members of a homologous series differ by", "–CH₂–", "–CH₃", "–OH", "–CH–", "Each member has one more carbon and two more hydrogens."],
        ["E", "The general formula CₙH₂ₙ represents the", "alkenes", "alkanes", "alkynes", "alkanols", "Alkenes contain one carbon–carbon double bond."],
        ["M", "The IUPAC name of CH₃CH=CHCH₃ is", "but-2-ene", "but-1-ene", "butane", "2-methylpropene", "The double bond starts at the second carbon of a four-carbon chain."],
        ["M", "Ethene decolourises bromine water by", "addition", "substitution", "esterification", "dehydration", "Bromine adds across the double bond."],
        ["M", "Ethanol reacts with ethanoic acid in the presence of concentrated H₂SO₄ to form", "ethyl ethanoate", "ethyl methanoate", "methyl ethanoate", "ethoxyethane", "The alkyl part comes from the alkanol."],
        ["M", "How many structural isomers has C₄H₁₀?", "2", "3", "4", "1", "Butane and 2-methylpropane."],
        ["H", "Which of the following alkanols is resistant to oxidation by acidified K₂Cr₂O₇?", "2-methylpropan-2-ol", "propan-1-ol", "propan-2-ol", "ethanol", "It is a tertiary alkanol with no hydrogen on the carbinol carbon."],
        ["H", "A hydrocarbon contains 85.7% carbon by mass. Its empirical formula is [C = 12, H = 1]", "CH₂", "CH", "CH₃", "CH₄", "85.7 ÷ 12 = 7.14 and 14.3 ÷ 1 = 14.3, a ratio of 1 : 2."],
        ["H", "The gas produced when water is added to calcium carbide is", "ethyne", "ethene", "methane", "ethane", "CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂."],
      ],
      jamb: [
        ["M", "Which of these compounds will liberate carbon(IV) oxide from sodium hydrogentrioxocarbonate(IV)?", "CH₃COOH", "C₂H₅OH", "CH₃COOC₂H₅", "C₂H₄", "Only the alkanoic acid is acidic enough."],
        ["H", "The dehydration of ethanol with excess concentrated H₂SO₄ at 170 °C gives", "ethene", "ethane", "ethoxyethane", "ethanal", "Water is eliminated to form C₂H₄."],
      ],
    },
    {
      week: 9,
      title: "Revision of Inorganic Chemistry",
      subtopics: ["The periodic table and periodic trends", "Properties of selected non-metals and their compounds", "Properties of selected metals and their compounds", "Extraction of metals and industrial processes"],
      objectives: ["Explain trends across periods and down groups", "Describe the properties of selected non-metals and their compounds", "Describe the properties of selected metals and their compounds", "Relate the method of extraction of a metal to its reactivity"],
      lesson: {
        title: "Inorganic Chemistry in Review",
        summary: "A compact review of periodicity, the common elements and their compounds, and industrial processes.",
        minutes: 40,
        notes: `## The periodic table
Elements are arranged in order of **atomic number**. **Groups** (vertical) have the same number of outer electrons; **periods** (horizontal) have the same number of shells.

### Trends
| Property | Across a period (→) | Down a group (↓) |
|---|---|---|
| atomic radius | decreases | increases |
| ionisation energy | increases | decreases |
| electronegativity | increases | decreases |
| metallic character | decreases | increases |

### Families
- **Group 1 (alkali metals):** soft, very reactive; reactivity increases down the group; form M⁺.
- **Group 2 (alkaline-earth metals):** form M²⁺.
- **Group 7 (halogens):** diatomic; reactivity **decreases** down the group; a halogen displaces one below it: Cl₂ + 2KBr → 2KCl + Br₂.
- **Group 0 (noble gases):** unreactive, full outer shells.
- **Transition metals:** variable oxidation states, coloured ions, catalysts, complex ions.

### Oxides across period 3
Na₂O, MgO (basic) → Al₂O₃ (**amphoteric**) → SiO₂, P₄O₁₀, SO₃, Cl₂O₇ (acidic).

## Non-metals
| Element / compound | Key points |
|---|---|
| **hydrogen** | Zn + 2HCl → ZnCl₂ + H₂; burns with a "pop"; reducing agent |
| **oxygen** | 2H₂O₂ → 2H₂O + O₂ (MnO₂ catalyst); rekindles a glowing splint |
| **chlorine** | greenish-yellow; bleaches damp litmus; MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂ |
| **nitrogen / ammonia** | NH₃ is the only common alkaline gas; **Haber process** |
| **HNO₃** | **Ostwald process**; strong oxidising agent |
| **sulphur / H₂SO₄** | allotropes rhombic and monoclinic; **Contact process** (V₂O₅ catalyst); acid, oxidising and dehydrating agent |
| **carbon** | allotropes diamond and graphite; CO is neutral and reducing; CO₂ is acidic |

## Metals
### Reactivity series
K, Na, Ca, Mg, Al, Zn, Fe, Sn, Pb, (H), Cu, Hg, Ag, Au

### Extraction depends on reactivity
| Metals | Method |
|---|---|
| K, Na, Ca, Mg, Al | **electrolysis** of the molten compound |
| Zn, Fe, Sn, Pb | **reduction** of the oxide with carbon or CO |
| Cu, Hg | roasting the sulphide |
| Ag, Au | found native |

- **Iron (blast furnace):** Fe₂O₃ + 3CO → 2Fe + 3CO₂; limestone removes silica as slag (CaSiO₃).
- **Aluminium:** electrolysis of purified bauxite (Al₂O₃) dissolved in molten **cryolite**.
- **Sodium:** Downs cell — electrolysis of molten NaCl.

### Action of heat
| Compound | K, Na | Ca → Cu | Hg, Ag |
|---|---|---|---|
| trioxocarbonate(IV) | stable | oxide + CO₂ | — |
| trioxonitrate(V) | dioxonitrate(III) + O₂ | oxide + NO₂ + O₂ | metal + NO₂ + O₂ |
| hydroxide | stable | oxide + H₂O | — |

### Rusting
Iron + oxygen + water → hydrated iron(III) oxide. Prevent by painting, oiling, galvanising, tin-plating, alloying (stainless steel) or sacrificial protection.

### Alloys
brass (Cu + Zn); bronze (Cu + Sn); steel (Fe + C); solder (Pb + Sn); duralumin (Al + Cu + Mg).

## Hardness of water
**Temporary** — Ca(HCO₃)₂, removed by boiling. **Permanent** — CaSO₄, MgSO₄, removed by washing soda or ion exchange.`,
        examples: `**Example 1.** Why is aluminium extracted by electrolysis and iron by reduction with carbon? *Answer:* Aluminium is **more reactive than carbon**, so carbon cannot reduce its oxide.

**Example 2.** What is observed when chlorine is bubbled into potassium iodide solution? *Answer:* The solution turns **brown** as iodine is displaced.

**Example 3.** Which oxide of period 3 is amphoteric? *Answer:* **aluminium oxide**, Al₂O₃.`,
      },
      questions: [
        ["E", "Elements in the same group of the periodic table have the same number of", "outer-shell electrons", "electron shells", "neutrons", "isotopes", "This gives them similar chemical properties."],
        ["E", "The only common gas that turns moist red litmus paper blue is", "ammonia", "chlorine", "hydrogen chloride", "sulphur(IV) oxide", "Ammonia is alkaline."],
        ["E", "Solder is an alloy of lead and", "tin", "zinc", "copper", "iron", "Solder melts easily and joins metals."],
        ["M", "Down a group of the periodic table, the first ionisation energy", "decreases", "increases", "remains constant", "doubles at each period", "The outer electron is farther from the nucleus and better shielded."],
        ["M", "Nitric acid, HNO₃, is manufactured industrially by the", "Ostwald process", "Haber process", "Contact process", "Solvay process", "Ammonia is catalytically oxidised to give the acid."],
        ["M", "Aluminium is extracted from its purified ore by", "electrolysis", "reduction with coke", "roasting in air", "heating alone", "It is too reactive to be reduced by carbon."],
        ["M", "Which of these oxides is amphoteric?", "Al₂O₃", "MgO", "SO₃", "Na₂O", "It reacts with both acids and alkalis."],
        ["H", "When lead(II) trioxonitrate(V) is heated, the products are", "PbO, NO₂ and O₂", "Pb(NO₂)₂ and O₂", "Pb, NO₂ and O₂", "PbO and N₂O", "Trioxonitrates(V) of moderately reactive metals give the oxide."],
        ["H", "In the blast furnace, limestone is added in order to", "remove silica as slag", "reduce the iron ore", "supply oxygen", "lower the furnace temperature", "CaO combines with SiO₂ to form CaSiO₃."],
        ["H", "When chlorine is bubbled through potassium iodide solution, the solution turns brown because", "iodine is displaced", "chlorine dissolves unchanged", "potassium is liberated", "hydrogen iodide forms", "Chlorine oxidises iodide ions to iodine."],
      ],
      jamb: [
        ["M", "Which of the following metals is extracted by the electrolysis of its molten chloride?", "Sodium", "Iron", "Zinc", "Copper", "Sodium is obtained in the Downs cell."],
        ["H", "Permanent hardness of water can be removed by", "adding washing soda", "boiling", "filtration", "adding chlorine", "Na₂CO₃ precipitates calcium and magnesium ions."],
      ],
    },
    {
      week: 10,
      title: "Revision of Physical Chemistry",
      subtopics: ["Rates of reaction", "Chemical equilibrium", "The gas laws", "Energetics"],
      objectives: ["Explain the factors affecting reaction rates using collision theory", "Apply Le Chatelier's principle to systems in equilibrium", "Solve problems using the gas laws", "Interpret energy changes and calculate heats of reaction"],
      lesson: {
        title: "Physical Chemistry in Review",
        summary: "A compact review of kinetics, equilibrium, the gas laws and energy changes.",
        minutes: 40,
        notes: `## Rates of reaction
**Rate** = change in concentration (or mass, or volume of gas) per unit time.

**Collision theory:** particles react only when they collide with energy at least equal to the **activation energy** and with the right orientation.

| Factor | Effect |
|---|---|
| **concentration** (pressure for gases) | more collisions → faster |
| **temperature** | more particles exceed the activation energy → faster (roughly doubles per 10 °C) |
| **surface area** | powder reacts faster than lumps |
| **catalyst** | provides a path of **lower activation energy**; unchanged at the end |
| **light** | speeds some reactions (H₂ + Cl₂; photosynthesis) |
| **nature of reactants** | ionic reactions are faster than covalent |

## Chemical equilibrium
In a closed system, a reversible reaction reaches **dynamic equilibrium** when the forward and backward rates are **equal** and concentrations stay constant.

For aA + bB ⇌ cC + dD: $K_c = \\dfrac{[C]^c[D]^d}{[A]^a[B]^b}$

**Le Chatelier's principle:** if a system in equilibrium is disturbed, it shifts so as to oppose the change.

| Change | Shift |
|---|---|
| increase concentration of a reactant | forward |
| increase pressure | to the side with **fewer gas molecules** |
| increase temperature | in the **endothermic** direction |
| catalyst | **no shift**; equilibrium reached sooner |
Only **temperature** changes the value of K.

*Haber process:* N₂ + 3H₂ ⇌ 2NH₃, ΔH negative. High pressure and low temperature favour ammonia; a moderate 450 °C with an iron catalyst gives a reasonable rate.

## The gas laws
| Law | Statement |
|---|---|
| **Boyle** | $P_1V_1 = P_2V_2$ (constant T) |
| **Charles** | $\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$ (constant P; T in kelvin) |
| **general gas equation** | $\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}$ |
| **ideal gas equation** | $PV = nRT$ |
| **Dalton** | $P_{total} = P_1 + P_2 + \\dots$ |
| **Graham** | $\\dfrac{R_1}{R_2} = \\sqrt{\\dfrac{M_2}{M_1}}$ |
| **Gay-Lussac** | gases react in simple ratios by volume |
| **Avogadro** | equal volumes of gases at the same T and P contain equal numbers of molecules |
K = °C + 273. s.t.p.: 273 K and 760 mmHg (1 atm). Molar volume at s.t.p. = 22.4 dm³.

## Energetics
- **Exothermic:** heat given out; ΔH **negative** (combustion, neutralisation).
- **Endothermic:** heat absorbed; ΔH **positive** (thermal decomposition, dissolving NH₄Cl).
- ΔH = H(products) − H(reactants).
- Heat change: $q = mc\\Delta T$.
- **Heat of neutralisation** of a strong acid by a strong base ≈ −57 kJ/mol.
- **Bond energies:** ΔH = energy to break bonds − energy released in forming bonds.
- **Hess's law:** the total enthalpy change is independent of the route.
- **Spontaneity:** ΔG = ΔH − TΔS; a reaction is feasible when ΔG is **negative**. **Entropy** (S) measures disorder: gas > liquid > solid.

## Electrochemistry reminders
Oxidation is loss of electrons; reduction is gain. **Faraday's first law:** mass deposited ∝ quantity of electricity, $Q = It$; 1 faraday = 96 500 C deposits 1 mole of a univalent ion.`,
        examples: `**Example 1.** A gas occupies 300 cm³ at 27 °C. Find its volume at 127 °C, pressure constant. *Solution:* $V_2 = 300 \\times \\dfrac{400}{300} = \\mathbf{400}$ **cm³**.

**Example 2.** For 2SO₂ + O₂ ⇌ 2SO₃ (ΔH negative), what is the effect of raising the pressure? *Solution:* The equilibrium shifts **to the right** (fewer gas molecules), giving more SO₃.

**Example 3.** Calculate the heat needed to warm 200 g of water by 10 °C ($c = 4.2$ J/g/K). *Solution:* $200 \\times 4.2 \\times 10 = \\mathbf{8400}$ **J**.`,
      },
      questions: [
        ["E", "A catalyst increases the rate of a reaction by", "lowering the activation energy", "raising the activation energy", "increasing the heat of reaction", "shifting the equilibrium position", "It provides an alternative pathway."],
        ["E", "A reaction in which heat is given out to the surroundings is", "exothermic", "endothermic", "reversible", "catalytic", "ΔH is negative."],
        ["E", "At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure. This is", "Boyle's law", "Charles' law", "Graham's law", "Dalton's law", "PV is constant."],
        ["M", "Powdered marble reacts faster with acid than marble chips because the powder has", "a larger surface area", "a higher concentration", "a lower activation energy", "a higher temperature", "More particles are exposed for collision."],
        ["M", "A gas occupies 200 cm³ at 2 atm. At constant temperature, its volume at 4 atm is", "100 cm³", "400 cm³", "800 cm³", "50 cm³", "200 × 2 ÷ 4 = 100 cm³."],
        ["M", "For N₂ + 3H₂ ⇌ 2NH₃, an increase in pressure", "shifts the equilibrium to the right", "shifts the equilibrium to the left", "has no effect", "stops the reaction", "The right-hand side has fewer gas molecules."],
        ["M", "The addition of a catalyst to a system in equilibrium", "does not change the equilibrium position", "increases the yield of products", "decreases the yield of products", "changes the value of K", "It speeds both directions equally."],
        ["H", "A gas occupies 546 cm³ at 273 °C and 380 mmHg. Its volume at s.t.p. is", "136.5 cm³", "273 cm³", "546 cm³", "1092 cm³", "546 × 380 × 273 ÷ (760 × 546) = 136.5 cm³."],
        ["H", "If hydrogen diffuses four times as fast as gas X, the relative molecular mass of X is [H = 1]", "32", "8", "16", "64", "√(M ÷ 2) = 4, so M = 32."],
        ["H", "A reaction has ΔH = −120 kJ and ΔS = −200 J/K. At 300 K, ΔG is", "−60 kJ", "−180 kJ", "+60 kJ", "−120.2 kJ", "ΔG = −120 − 300(−0.2) = −60 kJ."],
      ],
      jamb: [
        ["M", "For an exothermic reaction at equilibrium, an increase in temperature will", "decrease the yield of products", "increase the yield of products", "have no effect on the yield", "increase the value of K", "The equilibrium shifts in the endothermic (backward) direction."],
        ["H", "The heat evolved when 50 cm³ of 1.0 mol/dm³ HCl is neutralised by 50 cm³ of 1.0 mol/dm³ NaOH, raising the temperature by 6.8 °C, is (specific heat capacity = 4.2 J/g/K; density = 1 g/cm³)", "2856 J", "1428 J", "28.56 J", "5712 J", "q = 100 × 4.2 × 6.8 = 2856 J."],
      ],
    },
    {
      week: 11,
      title: "Chemical Calculations Practice",
      subtopics: ["Moles and molar mass", "Empirical and molecular formulae", "Stoichiometry of reactions", "Titration calculations"],
      objectives: ["Convert between mass, moles, particles and gas volume", "Determine empirical and molecular formulae", "Calculate reacting masses and volumes from equations", "Calculate concentrations from titration results"],
      lesson: {
        title: "Mastering Chemical Calculations",
        summary: "Worked methods for the mole, formulae, reacting quantities and volumetric analysis.",
        minutes: 40,
        notes: `## The mole
A **mole** is the amount of substance containing **6.02 × 10²³** particles (the Avogadro constant).

$$n = \\frac{\\text{mass}}{\\text{molar mass}} \\qquad n = \\frac{\\text{volume of gas}}{22.4 \\text{ dm}^3} \\text{ (s.t.p.)} \\qquad n = CV$$
number of particles $= n \\times 6.02 \\times 10^{23}$

**Molar mass** = sum of relative atomic masses in grams. H₂SO₄: 2 + 32 + 64 = 98 g/mol.

## Percentage composition
% of element $= \\dfrac{\\text{mass of element in 1 mole}}{\\text{molar mass}} \\times 100$

## Empirical and molecular formulae
- **Empirical formula:** simplest whole-number ratio of atoms.
- **Molecular formula:** actual number of atoms = (empirical formula)ₙ, where $n = \\dfrac{\\text{molar mass}}{\\text{empirical formula mass}}$.

**Method:** divide each percentage (or mass) by the atomic mass → divide by the smallest → round to whole numbers.

*A compound contains 40.0% C, 6.7% H and 53.3% O; molar mass 60.*
C: 40 ÷ 12 = 3.33; H: 6.7 ÷ 1 = 6.7; O: 53.3 ÷ 16 = 3.33 → ratio 1 : 2 : 1 → **CH₂O** (30); n = 2 → **C₂H₄O₂**.

## Stoichiometry
1. Write the **balanced equation**.
2. Convert the given quantity to **moles**.
3. Use the **mole ratio**.
4. Convert to the required unit.

*What mass of CaO is obtained from 25 g of CaCO₃?* CaCO₃ → CaO + CO₂; 25 ÷ 100 = 0.25 mol → 0.25 mol CaO = 0.25 × 56 = **14 g**.

### Limiting reagent
The reactant that is **used up first** fixes the amount of product.

### Percentage yield and purity
% yield $= \\dfrac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100$; % purity $= \\dfrac{\\text{mass of pure substance}}{\\text{mass of sample}} \\times 100$

### Gas volumes
By Gay-Lussac's law, volumes of gases react in the ratio of the coefficients: 2H₂ + O₂ → 2H₂O(g); 20 cm³ of H₂ needs 10 cm³ of O₂.

## Concentration
- mol/dm³ = moles ÷ volume in dm³
- g/dm³ = mol/dm³ × molar mass
- **dilution:** $C_1V_1 = C_2V_2$

## Titration
$$\\frac{C_AV_A}{C_BV_B} = \\frac{n_A}{n_B}$$
where $n_A$ and $n_B$ are the mole coefficients of acid and base in the equation.

*25.0 cm³ of NaOH required 20.0 cm³ of 0.10 mol/dm³ H₂SO₄.* H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O.
$\\dfrac{0.10 \\times 20.0}{C_B \\times 25.0} = \\dfrac12 \\Rightarrow C_B = \\mathbf{0.16}$ mol/dm³.

## Other applications
- **water of crystallisation:** moles of water ÷ moles of anhydrous salt
- **solubility:** mol/dm³ of solute in a saturated solution at a given temperature
- **electrolysis:** $Q = It$; moles of electrons = Q ÷ 96 500

## Good practice
Show the equation, state units, keep three significant figures, and use **concordant titres** only when averaging.`,
        examples: `**Example 1.** How many moles are in 4.9 g of H₂SO₄? *Solution:* $4.9 \\div 98 = \\mathbf{0.05}$ **mol**.

**Example 2.** What volume of CO₂ at s.t.p. is produced by heating 10 g of CaCO₃? *Solution:* 0.1 mol → $0.1 \\times 22.4 = \\mathbf{2.24}$ **dm³**.

**Example 3.** What volume of water must be added to 50 cm³ of 2.0 mol/dm³ HCl to make it 0.5 mol/dm³? *Solution:* $V_2 = \\dfrac{2.0 \\times 50}{0.5} = 200$ cm³, so add $\\mathbf{150}$ **cm³**.`,
      },
      questions: [
        ["E", "The number of moles in 20 g of sodium hydroxide, NaOH, is [Na = 23, O = 16, H = 1]", "0.5", "2", "0.2", "5", "20 ÷ 40 = 0.5 mol."],
        ["E", "The molar mass of calcium trioxocarbonate(IV), CaCO₃, is [Ca = 40, C = 12, O = 16]", "100 g/mol", "68 g/mol", "84 g/mol", "124 g/mol", "40 + 12 + 48 = 100."],
        ["E", "The volume occupied by 2 moles of a gas at s.t.p. is [molar volume = 22.4 dm³]", "44.8 dm³", "11.2 dm³", "22.4 dm³", "2.0 dm³", "2 × 22.4 = 44.8 dm³."],
        ["M", "The mass of sodium hydroxide needed to prepare 250 cm³ of a 0.1 mol/dm³ solution is [NaOH = 40]", "1.0 g", "4.0 g", "10 g", "0.1 g", "0.1 × 0.25 = 0.025 mol; 0.025 × 40 = 1.0 g."],
        ["M", "A compound has the empirical formula CH₂O and a molar mass of 180 g/mol. Its molecular formula is [C = 12, H = 1, O = 16]", "C₆H₁₂O₆", "C₃H₆O₃", "C₂H₄O₂", "C₁₂H₂₂O₁₁", "180 ÷ 30 = 6. Answer: C₆H₁₂O₆."],
        ["M", "The mass of magnesium oxide formed when 12 g of magnesium burns completely in oxygen is [Mg = 24, O = 16]", "20 g", "40 g", "16 g", "28 g", "0.5 mol Mg gives 0.5 mol MgO = 0.5 × 40 = 20 g."],
        ["M", "The percentage by mass of oxygen in water is [H = 1, O = 16]", "88.9%", "11.1%", "66.7%", "33.3%", "16 ÷ 18 × 100 = 88.9%."],
        ["H", "25.0 cm³ of sodium hydroxide solution neutralised 20.0 cm³ of 0.10 mol/dm³ H₂SO₄. The concentration of the alkali is", "0.16 mol/dm³", "0.08 mol/dm³", "0.04 mol/dm³", "0.32 mol/dm³", "Moles of acid = 0.002; moles of NaOH = 0.004; 0.004 ÷ 0.025 = 0.16."],
        ["H", "An oxide of iron contains 70% iron by mass. Its empirical formula is [Fe = 56, O = 16]", "Fe₂O₃", "FeO", "Fe₃O₄", "FeO₂", "70 ÷ 56 = 1.25 and 30 ÷ 16 = 1.875, a ratio of 2 : 3."],
        ["H", "In the reaction N₂ + 3H₂ → 2NH₃, the volume of ammonia formed from 30 cm³ of hydrogen and excess nitrogen is", "20 cm³", "30 cm³", "60 cm³", "10 cm³", "Three volumes of hydrogen give two of ammonia."],
      ],
      jamb: [
        ["M", "What volume of 0.5 mol/dm³ HCl contains 0.02 mole of the acid?", "40 cm³", "25 cm³", "10 cm³", "100 cm³", "V = 0.02 ÷ 0.5 = 0.04 dm³ = 40 cm³."],
        ["H", "6.5 g of zinc reacts with excess dilute H₂SO₄. If 1.8 dm³ of hydrogen is collected at s.t.p., the percentage yield is [Zn = 65; molar volume = 22.4 dm³]", "80.4%", "90.0%", "40.2%", "18.0%", "Theoretical yield is 0.1 × 22.4 = 2.24 dm³; 1.8 ÷ 2.24 × 100 = 80.4%."],
      ],
    },
  ],
};
