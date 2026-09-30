import type { TermPlan } from "../types";

/** JSS3 Basic Science — original Precious PS content; Term 3 is structured BECE revision. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Heredity and variation",
        subtopics: ["Meaning of heredity", "Inherited and acquired characteristics", "Variation among organisms", "Genes and chromosomes"],
        objectives: ["Define heredity and variation", "Distinguish inherited from acquired traits", "Give examples of continuous and discontinuous variation", "Describe genes and chromosomes in simple terms"],
        lesson: {
          title: "Why We Look Like Our Parents",
          summary: "Explain how traits pass from parents to offspring and why individuals differ.",
          minutes: 45,
          notes: `## Heredity
**Heredity** is the passing of characteristics (**traits**) from parents to their offspring.

## Genes and chromosomes
- Traits are controlled by **genes**, found on **chromosomes** in the **nucleus** of cells.
- Humans have **46 chromosomes** (23 pairs) in each body cell; half come from the **mother** (egg) and half from the **father** (sperm).
- Chromosomes are made of **DNA**.
- The sex chromosomes are **XX** in females and **XY** in males. The father's sperm (X or Y) determines the baby's sex.

## Inherited and acquired traits
| Inherited (passed on by genes) | Acquired (developed during life; not inherited) |
|---|---|
| eye colour, blood group, skin colour, height tendency, sickle-cell trait, tongue rolling | scars, language spoken, skills such as driving, muscles built by exercise |

## Variation
**Variation** means the differences among individuals of the same species.
- **Continuous variation**: a range of values with many intermediates — **height, weight**.
- **Discontinuous variation**: clear-cut groups — **blood group (A, B, AB, O)**, **tongue rolling**, **sex**.

## Applications
Genotype testing before marriage (e.g. AA, AS, SS) helps prevent **sickle-cell disease**; blood grouping for safe transfusion; improving crops and livestock by breeding.`,
          examples: `**Example 1.** Is a scar from an injury inherited? *Answer:* **No** — it is **acquired**.

**Example 2.** Is blood group continuous or discontinuous variation? *Answer:* **discontinuous** — clear groups A, B, AB, O.

**Example 3.** Which parent determines the sex of a child? *Answer:* the **father** — his sperm carries X or Y.`,
        },
        questions: [
          ["E", "The passing of traits from parents to offspring is", "heredity", "variation", "pollination", "digestion", "Heredity transmits traits."],
          ["E", "Traits are controlled by", "genes", "vitamins", "muscles", "hormones only", "Genes carry hereditary information."],
          ["E", "Which characteristic is acquired, not inherited?", "a scar from an injury", "eye colour", "blood group", "skin colour", "Scars result from life events."],
          ["M", "How many chromosomes are in a normal human body cell?", "46", "23", "44", "92", "Humans have 23 pairs."],
          ["M", "Differences among individuals of the same species are called", "variation", "heredity", "mutation only", "adaptation", "Variation describes differences."],
          ["M", "Which is an example of continuous variation?", "height", "blood group", "tongue rolling", "sex", "Height shows a range of values."],
          ["M", "The sex chromosomes of a human male are", "XY", "XX", "YY", "XO", "Males have one X and one Y."],
          ["H", "Which parent determines the sex of a child?", "the father", "the mother", "both equally", "neither", "Sperm carries X or Y."],
          ["H", "Blood group is an example of", "discontinuous variation", "continuous variation", "an acquired trait", "a learned skill", "There are distinct groups."],
          ["H", "Genotype testing before marriage helps to prevent", "sickle-cell disease", "malaria", "cholera", "tuberculosis", "It identifies carriers of the sickle-cell gene."],
        ],
      },
      {
        week: 2,
        title: "Reproduction in flowering plants",
        subtopics: ["Parts of a flower", "Pollination", "Fertilisation and seed formation", "Seed dispersal and germination"],
        objectives: ["Name the parts of a flower and their functions", "Distinguish self-pollination from cross-pollination", "Describe fertilisation and fruit formation", "Explain methods of seed dispersal and conditions for germination"],
        lesson: {
          title: "How Flowering Plants Reproduce",
          summary: "Follow sexual reproduction in plants from flower to germinating seed.",
          minutes: 45,
          notes: `## Parts of a flower
| Part | Function |
|---|---|
| **sepals** | protect the flower in the bud |
| **petals** | attract insects (colour, scent) |
| **stamen** (anther + filament) | **male** part; anther produces **pollen grains** |
| **carpel/pistil** (stigma, style, ovary) | **female** part; stigma receives pollen; ovary contains **ovules** |

## Pollination
The transfer of pollen from the **anther** to the **stigma**.
- **Self-pollination**: to the stigma of the same flower or plant.
- **Cross-pollination**: to a flower on another plant of the same kind.
Agents: **insects** (bright, scented flowers with nectar), **wind** (small, dull flowers with light pollen, e.g. maize), water, birds.

## Fertilisation
A **pollen tube** grows down the style to the ovule; the male nucleus fuses with the egg. Then:
- the **ovule** becomes the **seed**;
- the **ovary** becomes the **fruit**.

## Seed dispersal
| Method | Features | Example |
|---|---|---|
| wind | light, winged or hairy | cotton, silk cotton |
| water | floats (fibrous) | coconut |
| animals | juicy, edible or hooked | mango, pawpaw, goose grass |
| explosive (self) | pods split | pride of Barbados, beans |

## Germination
Conditions: **water, oxygen (air) and suitable warmth**. Light is not required for germination itself.`,
          examples: `**Example 1.** Which part of the flower produces pollen? *Answer:* the **anther**.

**Example 2.** After fertilisation, what does the ovary become? *Answer:* the **fruit**.

**Example 3.** How is coconut dispersed? *Answer:* by **water** — its fibrous husk floats.`,
        },
        questions: [
          ["E", "The male part of a flower is the", "stamen", "carpel", "sepal", "petal", "The stamen produces pollen."],
          ["E", "Pollen grains are produced in the", "anther", "stigma", "ovary", "sepal", "Anthers release pollen."],
          ["E", "Bright, scented petals help to", "attract insects", "protect the bud", "store water", "make seeds", "Insects carry pollen."],
          ["M", "The transfer of pollen from anther to stigma is", "pollination", "fertilisation", "germination", "dispersal", "Pollination precedes fertilisation."],
          ["M", "After fertilisation, the ovule develops into the", "seed", "fruit", "flower", "leaf", "The ovary becomes the fruit."],
          ["M", "After fertilisation, the ovary develops into the", "fruit", "seed", "stem", "root", "Fruits develop from ovaries."],
          ["M", "Coconut is dispersed mainly by", "water", "wind", "explosion", "birds", "Its fibrous husk floats."],
          ["H", "Which condition is NOT necessary for germination?", "light", "water", "oxygen", "suitable warmth", "Seeds germinate in the dark."],
          ["H", "Maize flowers are pollinated mainly by wind. Which feature supports this?", "light, abundant pollen", "large bright petals", "sweet nectar", "strong scent", "Wind-pollinated flowers produce light pollen."],
          ["H", "Transfer of pollen to a flower on a different plant of the same kind is", "cross-pollination", "self-pollination", "germination", "fertilisation", "Cross-pollination involves two plants."],
        ],
      },
      {
        week: 3,
        title: "Photosynthesis",
        subtopics: ["Meaning of photosynthesis", "Raw materials and conditions", "Products of photosynthesis", "Importance of photosynthesis"],
        objectives: ["Define photosynthesis", "State the raw materials and conditions needed", "Write the word equation for photosynthesis", "Explain the importance of photosynthesis to life"],
        lesson: {
          title: "How Plants Make Food",
          summary: "Explain photosynthesis and why it is essential to life on Earth.",
          minutes: 40,
          notes: `## Meaning
**Photosynthesis** is the process by which **green plants** make their own food (glucose) from **carbon dioxide** and **water**, using **light energy** absorbed by **chlorophyll**.

## Word equation
**carbon dioxide + water → glucose + oxygen** (in light, with chlorophyll)
$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

## Requirements
| Requirement | Source |
|---|---|
| carbon dioxide | air, through **stomata** on leaves |
| water | soil, through **roots** and **xylem** |
| light | sunlight |
| chlorophyll | green pigment in **chloroplasts** |

## Products
- **Glucose** — used for energy, or stored as **starch**.
- **Oxygen** — released through the stomata.

## Testing a leaf for starch
Boil the leaf in water (kills cells), then in alcohol (removes chlorophyll), rinse, add **iodine solution**: a **blue-black** colour shows starch is present.

## Importance
- Produces **food** for almost all living things.
- Releases **oxygen** for respiration.
- Removes **carbon dioxide** from the air.
- Source of fuels such as wood (and, long ago, coal and petroleum).`,
          examples: `**Example 1.** Which gas do plants absorb for photosynthesis? *Answer:* **carbon dioxide**.

**Example 2.** What colour shows the presence of starch with iodine? *Answer:* **blue-black**.

**Example 3.** Why do plants in a dark cupboard stop making starch? *Answer:* **No light** — photosynthesis cannot take place.`,
        },
        questions: [
          ["E", "Photosynthesis is carried out by", "green plants", "animals", "fungi", "viruses", "Green plants contain chlorophyll."],
          ["E", "The green pigment that absorbs light in leaves is", "chlorophyll", "haemoglobin", "melanin", "starch", "Chlorophyll traps light energy."],
          ["E", "Which gas is released during photosynthesis?", "oxygen", "carbon dioxide", "nitrogen", "hydrogen", "Oxygen is a product."],
          ["M", "Which gas do plants take in for photosynthesis?", "carbon dioxide", "oxygen", "nitrogen", "helium", "Carbon dioxide is a raw material."],
          ["M", "Carbon dioxide enters the leaf through the", "stomata", "roots", "xylem", "flowers", "Stomata are tiny pores in leaves."],
          ["M", "Which is the correct word equation for photosynthesis?", "carbon dioxide + water → glucose + oxygen", "glucose + oxygen → carbon dioxide + water", "oxygen + water → glucose + carbon dioxide", "starch + water → glucose", "This summarises the process."],
          ["M", "Iodine solution turns blue-black in the presence of", "starch", "glucose only", "protein", "fat", "Iodine is the starch test."],
          ["H", "In testing a leaf for starch, the leaf is boiled in alcohol to", "remove chlorophyll", "add starch", "kill germs only", "make the leaf green", "Removing the green colour shows the iodine result clearly."],
          ["H", "A plant kept in a dark cupboard for two days has no starch in its leaves because", "photosynthesis needs light", "the plant absorbed too much water", "chlorophyll was added", "the leaves were too big", "No light means no photosynthesis."],
          ["H", "Why is photosynthesis important to animals?", "It provides food and oxygen", "It produces carbon dioxide for animals", "It removes oxygen from the air", "It makes animals green", "Animals depend on plants for food and oxygen."],
        ],
      },
      {
        week: 4,
        title: "Resources from living and non-living things",
        subtopics: ["Resources from plants", "Resources from animals", "Mineral resources in Nigeria", "Conservation of resources"],
        objectives: ["Identify resources obtained from plants and animals", "Name major mineral resources and where they are found in Nigeria", "Explain the need for conservation", "Suggest methods of conserving natural resources"],
        lesson: {
          title: "Natural Resources and Conservation",
          summary: "Identify Nigeria's natural resources and explain how to conserve them.",
          minutes: 40,
          notes: `## Resources from plants
Food (yam, cassava, maize, fruits), timber and wood, fibres (cotton), medicine (neem, dogonyaro), rubber, oils (palm oil, groundnut oil), cocoa, fuel wood.

## Resources from animals
Meat, milk, eggs, leather (hides and skins), wool, honey, manure, transport and draught (donkeys, camels).

## Mineral resources in Nigeria
| Mineral | Main location(s) | Use |
|---|---|---|
| crude oil and natural gas | Niger Delta (Rivers, Delta, Bayelsa) | fuel, petrochemicals |
| coal | Enugu | fuel |
| tin | Jos Plateau | coating cans, alloys |
| limestone | Ogun, Cross River, Benue | cement |
| iron ore | Itakpe (Kogi) | steel |
| gold | Zamfara, Osun | jewellery |
| bitumen | Ondo | road construction |

## Conservation
**Conservation** is the careful use and protection of natural resources so that they last and are available for future generations.
Methods:
- **afforestation** and **reforestation** (planting trees);
- game reserves and national parks (e.g. Yankari, Kainji Lake);
- laws against illegal hunting and logging;
- recycling and reusing materials;
- control of bush burning and pollution;
- responsible mining that restores land.`,
          examples: `**Example 1.** Where is coal mined in Nigeria? *Answer:* **Enugu**.

**Example 2.** Name one resource obtained from animals. *Answer:* **leather** (or milk, eggs, wool).

**Example 3.** What is reforestation? *Answer:* **Replanting trees** where forests have been cut down.`,
        },
        questions: [
          ["E", "Which of these is obtained from plants?", "timber", "leather", "wool", "honey", "Timber comes from trees."],
          ["E", "Which of these is obtained from animals?", "leather", "cotton", "rubber", "cocoa", "Leather is made from hides."],
          ["E", "Crude oil in Nigeria is found mainly in the", "Niger Delta", "Jos Plateau", "Sahara", "Sokoto plains", "The Niger Delta holds most oil reserves."],
          ["M", "Tin is mined mainly on the", "Jos Plateau", "Niger Delta", "Lagos coast", "Enugu hills", "The Jos Plateau is famous for tin."],
          ["M", "Limestone is used mainly for making", "cement", "petrol", "jewellery", "glass lenses", "Cement factories use limestone."],
          ["M", "Planting trees where forests have been cut down is called", "reforestation", "deforestation", "erosion", "mining", "It restores forests."],
          ["M", "Yankari is an example of a", "game reserve", "oil field", "coal mine", "cement factory", "It protects wildlife."],
          ["H", "Iron ore for steel production in Nigeria is mined at", "Itakpe", "Enugu", "Jos", "Port Harcourt", "Itakpe in Kogi State has iron ore."],
          ["H", "The main aim of conservation is to", "use resources carefully so they last for the future", "use up resources quickly", "stop all farming", "sell all resources abroad", "Conservation ensures sustainability."],
          ["H", "Which practice harms conservation?", "illegal logging", "recycling", "reforestation", "creating national parks", "Illegal logging destroys forests."],
        ],
      },
      {
        week: 5,
        title: "Chemical reactions and rusting",
        subtopics: ["Signs of chemical reactions", "Word equations", "Rusting of iron", "Prevention of rusting"],
        objectives: ["Identify signs that a chemical reaction has occurred", "Write word equations for simple reactions", "State the conditions necessary for rusting", "Describe methods of preventing rusting"],
        lesson: {
          title: "Chemical Reactions and Rusting",
          summary: "Recognise chemical reactions and explain how to prevent rusting.",
          minutes: 40,
          notes: `## Signs of a chemical reaction
- a new substance is formed
- colour change
- gas given off (fizzing, bubbles)
- heat or light given out or taken in
- precipitate (solid) formed in a solution

## Word equations
A **word equation** names the **reactants** (starting substances) and **products** (new substances):
- **carbon + oxygen → carbon dioxide** (burning charcoal)
- **magnesium + oxygen → magnesium oxide** (bright white flame)
- **zinc + hydrochloric acid → zinc chloride + hydrogen**
- **glucose + oxygen → carbon dioxide + water + energy** (respiration)

## Rusting
**Rusting** is the corrosion of **iron** to form **rust** (hydrated iron(III) oxide), a reddish-brown, flaky solid.
**iron + oxygen + water → rust**
Both **air (oxygen)** and **water** are needed. Salt and acid rain **speed up** rusting (cars rust faster near the sea).

## Experiment
Three nails: (A) in water and air; (B) in boiled water with an oil layer (no air); (C) with a drying agent (no water). **Only A rusts.**

## Prevention
Painting; oiling or greasing; **galvanising** (coating with zinc); tin-plating (food cans); plastic coating; **alloying** (stainless steel); keeping iron dry.`,
          examples: `**Example 1.** Write the word equation for burning magnesium. *Answer:* **magnesium + oxygen → magnesium oxide**.

**Example 2.** What two substances are needed for rusting? *Answer:* **oxygen (air) and water**.

**Example 3.** Why do bicycle chains get oiled? *Answer:* Oil keeps out **air and water**, preventing rust (and reduces friction).`,
        },
        questions: [
          ["E", "Rusting occurs in", "iron", "gold", "plastic", "glass", "Rust forms on iron and steel."],
          ["E", "The substances that react in a chemical reaction are called", "reactants", "products", "catalysts", "mixtures", "Reactants are the starting substances."],
          ["E", "Which is a sign of a chemical reaction?", "a gas is given off", "a change of shape", "breaking into pieces", "dissolving sugar", "Gas production indicates a reaction."],
          ["M", "Rusting requires", "oxygen and water", "oxygen only", "water only", "heat only", "Both are necessary."],
          ["M", "Coating iron with zinc to prevent rusting is called", "galvanising", "painting", "tin-plating", "alloying", "Zinc protects the iron."],
          ["M", "Which is the correct word equation for burning charcoal (carbon)?", "carbon + oxygen → carbon dioxide", "carbon dioxide → carbon + oxygen", "carbon + water → oxygen", "oxygen + water → carbon", "Carbon combines with oxygen."],
          ["M", "Cars rust faster near the sea because", "salt speeds up rusting", "sea air has no oxygen", "the sun is hotter", "sand protects cars", "Salt accelerates corrosion."],
          ["H", "Three iron nails: A in water and air; B in boiled water under oil; C with a drying agent. Which nail rusts?", "A", "B", "C", "all three", "Only A has both air and water."],
          ["H", "Zinc reacts with hydrochloric acid to give zinc chloride and", "hydrogen", "oxygen", "carbon dioxide", "water only", "The fizzing gas is hydrogen."],
          ["H", "Why is boiled water covered with oil used in rusting experiments?", "To exclude air (oxygen)", "To add salt", "To heat the nail", "To remove the iron", "Boiling removes dissolved air; oil stops it re-entering."],
        ],
      },
      {
        week: 6,
        title: "Crude oil and petrochemicals",
        subtopics: ["Formation of crude oil", "Fractional distillation", "Uses of petroleum products", "Effects of oil exploration"],
        objectives: ["Describe how crude oil was formed", "Explain fractional distillation of crude oil", "State uses of petroleum products", "Discuss the environmental effects of oil exploration in Nigeria"],
        lesson: {
          title: "Crude Oil and Its Products",
          summary: "Explain how crude oil is formed, refined and used.",
          minutes: 40,
          notes: `## Formation
Crude oil (petroleum) formed over **millions of years** from the remains of tiny sea plants and animals buried under layers of sediment and changed by **heat and pressure**. It is a **fossil fuel** and **non-renewable**.

## Composition
Crude oil is a **mixture** of many **hydrocarbons** (compounds of hydrogen and carbon).

## Fractional distillation
Crude oil is heated; its fractions **separate by boiling point** in a tall **fractionating column**. Lighter fractions with low boiling points rise higher.
| Fraction | Use |
|---|---|
| refinery gas (LPG) | cooking gas |
| petrol | fuel for cars |
| kerosene | lamps, stoves, jet fuel |
| diesel | lorries, generators |
| lubricating oil | reducing friction in engines |
| bitumen | road surfacing, roofing |

## Petrochemicals
Products made from petroleum: **plastics**, synthetic fibres, detergents, fertilisers, paints, insecticides.

## Nigerian refineries
Port Harcourt, Warri and Kaduna (government); the large Dangote refinery at Lekki (private).

## Effects of oil exploration
Benefits: revenue, jobs, fuel. Problems: **oil spills** (water and land pollution), **gas flaring** (air pollution), loss of farmland and fishing, conflict in host communities.`,
          examples: `**Example 1.** How are the fractions of crude oil separated? *Answer:* by **fractional distillation** — they have different boiling points.

**Example 2.** Which fraction is used for surfacing roads? *Answer:* **bitumen**.

**Example 3.** Name one petrochemical. *Answer:* **plastics** (or detergents, synthetic fibres).`,
        },
        questions: [
          ["E", "Crude oil is a", "fossil fuel", "renewable fuel", "type of food", "metal", "It formed from ancient organisms."],
          ["E", "Crude oil is a mixture of", "hydrocarbons", "metals", "salts", "vitamins", "Hydrocarbons contain hydrogen and carbon."],
          ["E", "Which petroleum fraction is used for cooking gas?", "refinery gas (LPG)", "bitumen", "diesel", "lubricating oil", "LPG is bottled cooking gas."],
          ["M", "Crude oil is separated into fractions by", "fractional distillation", "filtration", "magnetism", "sieving", "Fractions have different boiling points."],
          ["M", "Which fraction is used for surfacing roads?", "bitumen", "petrol", "kerosene", "refinery gas", "Bitumen is thick and sticky."],
          ["M", "Plastics and detergents are examples of", "petrochemicals", "minerals", "renewable fuels", "food additives", "They are made from petroleum."],
          ["M", "Which fraction is used to run most lorries and generators?", "diesel", "bitumen", "refinery gas", "lubricating oil", "Diesel engines power them."],
          ["H", "In the fractionating column, fractions with low boiling points", "rise to the top", "collect at the bottom", "do not separate", "become solids", "Lighter fractions condense higher up."],
          ["H", "Which is an environmental problem of oil exploration in the Niger Delta?", "oil spills destroying farmland and fishing waters", "increase in rainfall", "more fertile soil", "cleaner air", "Spills pollute land and water."],
          ["H", "Crude oil is described as non-renewable because", "it takes millions of years to form", "it is liquid", "it is black", "it is found underground", "Reserves cannot be replaced quickly."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Electrical circuits: series and parallel",
        subtopics: ["Series circuits", "Parallel circuits", "Ohm's law", "Resistance and resistors"],
        objectives: ["Compare series and parallel circuits", "State Ohm's law", "Calculate current, voltage and resistance", "Explain why household wiring is in parallel"],
        lesson: {
          title: "Series and Parallel Circuits",
          summary: "Compare circuit arrangements and apply Ohm's law.",
          minutes: 45,
          notes: `## Series circuits
Components are connected **one after another** in a single loop.
- The **same current** flows through every component.
- If one bulb breaks, **all go off**.
- Adding more bulbs makes each **dimmer**.

## Parallel circuits
Components are connected on **separate branches**.
- Each branch receives the **full voltage**.
- If one bulb breaks, the others **stay on**.
- Bulbs stay bright; the total current is shared between branches.
**Household wiring is in parallel** so each appliance can be switched independently and gets full voltage.

## Resistance
**Resistance** opposes the flow of current. Unit: **ohm (Ω)**. Long, thin wires have more resistance than short, thick ones.

## Ohm's law
The current through a conductor is **directly proportional** to the voltage across it, provided temperature is constant:
$$V = IR$$
where $V$ is voltage (V), $I$ is current (A) and $R$ is resistance (Ω).

## Resistors in series and parallel
- Series: $R = R_1 + R_2$
- Parallel (two resistors): $R = \\frac{R_1 R_2}{R_1 + R_2}$`,
          examples: `**Example 1.** A 12 V battery drives a current through a 4 Ω resistor. Find the current. *Answer:* $I = \\frac{V}{R} = \\frac{12}{4} = 3\\text{ A}$.

**Example 2.** Find the total resistance of 3 Ω and 6 Ω in series. *Answer:* $3 + 6 = 9\\ \\Omega$.

**Example 3.** Find the total resistance of 3 Ω and 6 Ω in parallel. *Answer:* $\\frac{3 \\times 6}{3 + 6} = \\frac{18}{9} = 2\\ \\Omega$.`,
        },
        questions: [
          ["E", "In a series circuit, if one bulb breaks,", "all the bulbs go off", "the others get brighter", "only that bulb goes off", "the battery charges", "There is only one path for current."],
          ["E", "The unit of resistance is the", "ohm", "volt", "ampere", "watt", "Resistance is measured in ohms."],
          ["E", "Household wiring is connected in", "parallel", "series", "a single loop", "no particular way", "Appliances work independently."],
          ["M", "Ohm's law is expressed as", "$V = IR$", "$V = I/R$", "$I = VR$", "$R = VI$", "Voltage equals current times resistance."],
          ["M", "A 12 V battery drives current through a 4 Ω resistor. What is the current?", "3 A", "48 A", "8 A", "16 A", "$I = 12 \\div 4 = 3\\text{ A}$."],
          ["M", "What is the total resistance of 3 Ω and 6 Ω in series?", "9 Ω", "2 Ω", "18 Ω", "3 Ω", "Series resistances add."],
          ["M", "In a parallel circuit, each branch receives", "the full voltage", "half the voltage", "no voltage", "double the voltage", "Parallel branches share the same voltage."],
          ["H", "What is the total resistance of 3 Ω and 6 Ω in parallel?", "2 Ω", "9 Ω", "18 Ω", "4.5 Ω", "$\\frac{3 \\times 6}{3 + 6} = 2\\ \\Omega$."],
          ["H", "A current of 2 A flows through a 5 Ω resistor. What is the voltage across it?", "10 V", "2.5 V", "7 V", "3 V", "$V = IR = 2 \\times 5 = 10\\text{ V}$."],
          ["H", "Adding more bulbs in series to a circuit makes each bulb", "dimmer", "brighter", "equally bright as before", "explode", "Total resistance increases, so current falls."],
        ],
      },
      {
        week: 2,
        title: "Electrical energy, power and safety",
        subtopics: ["Electrical power", "Energy consumption and the kilowatt-hour", "Cost of electricity", "Electrical safety"],
        objectives: ["Calculate electrical power", "Calculate energy used in kilowatt-hours", "Calculate the cost of electricity", "State rules for safe use of electricity"],
        lesson: {
          title: "Paying for and Using Electricity Safely",
          summary: "Calculate power, energy and cost, and use electricity safely.",
          minutes: 45,
          notes: `## Electrical power
$$P = VI$$
Unit: **watt (W)**. A bulb labelled "60 W, 240 V" uses 60 J of energy each second when connected to 240 V.

## Energy consumed
$$E = Pt$$
Electricity companies measure energy in **kilowatt-hours (kWh)**, often called **units**:
$$\\text{kWh} = \\text{power in kW} \\times \\text{time in hours}$$
$1\\text{ kWh} = 3\\,600\\,000\\text{ J}$.

## Cost
$$\\text{cost} = \\text{number of kWh} \\times \\text{price per kWh}$$

## Electrical safety
- Never touch switches or appliances with wet hands.
- Do not overload sockets with many plugs.
- Replace worn or damaged cables.
- Use the correct **fuse** rating and install circuit breakers.
- **Earth** metal-cased appliances (the earth wire carries fault current safely away).
- Switch off the mains before repairs; call a qualified electrician.
- Keep children away from sockets; use socket covers.
- In case of electric shock: **switch off** the power first, or push the victim away with a **dry wooden** object — never touch them directly.`,
          examples: `**Example 1.** A 2 kW heater is used for 3 h. How many units are used? *Answer:* $2 \\times 3 = 6\\text{ kWh}$.

**Example 2.** If one unit costs ₦200, what is the cost of the 6 kWh above? *Answer:* $6 \\times 200 = 1200$, so the cost is **₦1200**.

**Example 3.** A lamp takes 0.5 A from a 240 V supply. What is its power? *Answer:* $P = 240 \\times 0.5 = 120\\text{ W}$.`,
        },
        questions: [
          ["E", "The unit of electrical power is the", "watt", "ohm", "volt", "kilogram", "Power is measured in watts."],
          ["E", "Electricity companies charge for energy in", "kilowatt-hours", "newtons", "amperes", "ohms", "One kWh is one 'unit'."],
          ["E", "Which is a safe practice?", "never touching switches with wet hands", "overloading sockets", "using damaged cables", "repairing live wires", "Water conducts electricity."],
          ["M", "Electrical power is calculated with", "$P = VI$", "$P = V/I$", "$P = I/V$", "$P = V + I$", "Power equals voltage times current."],
          ["M", "A 2 kW heater is used for 3 h. How many kWh are used?", "6 kWh", "5 kWh", "1.5 kWh", "0.67 kWh", "$2 \\times 3 = 6\\text{ kWh}$."],
          ["M", "A lamp takes 0.5 A from a 240 V supply. What is its power?", "120 W", "480 W", "240.5 W", "60 W", "$P = 240 \\times 0.5 = 120\\text{ W}$."],
          ["M", "The earth wire in an appliance", "carries fault current safely away", "supplies the energy", "switches the appliance on", "measures the current", "It protects users from shocks."],
          ["H", "If one unit costs ₦200, how much does it cost to use 6 kWh?", "₦1200", "₦206", "₦33", "₦600", "$6 \\times 200 = 1200$ naira."],
          ["H", "A 100 W bulb is left on for 10 hours. How many kWh does it use?", "1 kWh", "10 kWh", "1000 kWh", "0.1 kWh", "$0.1\\text{ kW} \\times 10\\text{ h} = 1\\text{ kWh}$."],
          ["H", "What should you do FIRST when someone is receiving an electric shock?", "switch off the power supply", "pull the person with your bare hands", "pour water on the person", "run away", "Cutting the power is safest."],
        ],
      },
      {
        week: 3,
        title: "Electromagnetism",
        subtopics: ["Magnetic effect of an electric current", "Electromagnets", "Factors affecting the strength of an electromagnet", "Uses of electromagnets"],
        objectives: ["Describe the magnetic effect of a current", "Construct and describe a simple electromagnet", "State factors that increase the strength of an electromagnet", "Describe devices that use electromagnets"],
        lesson: {
          title: "Electricity and Magnetism Together",
          summary: "Explain how electric currents produce magnetism and how electromagnets are used.",
          minutes: 40,
          notes: `## Magnetic effect of a current
A wire carrying an electric current produces a **magnetic field** around it. A compass needle placed near the wire is **deflected**. Reversing the current reverses the direction of deflection.

## Electromagnets
An **electromagnet** is made by winding insulated wire (a coil or **solenoid**) round a **soft iron core** and passing current through it.
- It is magnetic **only while current flows**.
- Soft iron is used because it magnetises and **demagnetises easily**.

## Increasing the strength
1. Increase the **current**.
2. Increase the **number of turns** of the coil.
3. Use a **soft iron core**.

## Uses
| Device | How the electromagnet is used |
|---|---|
| electric bell | the electromagnet pulls a striker repeatedly |
| scrapyard crane | lifts and releases iron scrap |
| relay | a small current switches a large current |
| loudspeaker and electric motor | interaction of magnetic fields produces motion |
| magnetic door locks | hold doors shut while powered |

## Electromagnetic induction (introduction)
Moving a magnet into a coil **induces** a current — the principle of the **generator** and **transformer**.`,
          examples: `**Example 1.** Why is soft iron used for the core of an electromagnet? *Answer:* It **magnetises and demagnetises easily**.

**Example 2.** Give two ways to make an electromagnet stronger. *Answer:* **increase the current** and **increase the number of turns**.

**Example 3.** Why can a scrapyard crane drop the scrap when needed? *Answer:* Switching **off** the current removes the magnetism.`,
        },
        questions: [
          ["E", "A wire carrying an electric current produces a", "magnetic field", "sound wave", "chemical change", "light beam only", "Current has a magnetic effect."],
          ["E", "The core of an electromagnet is usually made of", "soft iron", "copper", "plastic", "wood", "Soft iron magnetises easily."],
          ["E", "An electromagnet is magnetic", "only while current flows", "permanently", "only when heated", "never", "Switching off removes magnetism."],
          ["M", "Which increases the strength of an electromagnet?", "increasing the number of turns", "reducing the current", "removing the iron core", "using a plastic core", "More turns strengthen the field."],
          ["M", "A compass needle near a current-carrying wire", "is deflected", "stays still", "melts", "loses its magnetism", "The wire's field affects the needle."],
          ["M", "Which device uses an electromagnet to strike a gong repeatedly?", "electric bell", "thermometer", "electric iron", "torch bulb", "The striker is attracted and released."],
          ["M", "Soft iron is used for electromagnet cores because it", "magnetises and demagnetises easily", "is non-magnetic", "does not conduct heat", "keeps its magnetism permanently", "Quick switching needs soft iron."],
          ["H", "Scrapyard cranes use electromagnets because", "the magnetism can be switched off to drop the load", "they are permanent magnets", "they attract plastics", "they need no electricity", "Control is the key advantage."],
          ["H", "Moving a magnet into a coil connected to a meter produces a current. This is called", "electromagnetic induction", "electrolysis", "static charging", "conduction", "It is the basis of generators."],
          ["H", "A device in which a small current switches a large current on is a", "relay", "fuse", "thermometer", "resistor", "Relays use electromagnets."],
        ],
      },
      {
        week: 4,
        title: "Simple machines",
        subtopics: ["Meaning and types of simple machines", "Levers and their classes", "Mechanical advantage, velocity ratio and efficiency", "Pulleys, inclined planes and screws"],
        objectives: ["Define a machine and name simple machines", "Classify levers with examples", "Calculate mechanical advantage, velocity ratio and efficiency", "Describe pulleys, inclined planes, wheels and axles, and screws"],
        lesson: {
          title: "Machines That Make Work Easier",
          summary: "Classify simple machines and calculate how much they help.",
          minutes: 45,
          notes: `## Meaning
A **machine** is a device that makes work easier by allowing a small **effort** to overcome a large **load**, or by changing the direction of a force.

## Simple machines
lever, pulley, inclined plane, wheel and axle, screw, wedge.

## Levers
A lever turns about a **fulcrum (pivot)**.
| Class | Arrangement | Examples |
|---|---|---|
| first | fulcrum **between** effort and load | see-saw, scissors, crowbar, pliers |
| second | load between fulcrum and effort | wheelbarrow, bottle opener, nutcracker |
| third | effort between fulcrum and load | forearm, tweezers, fishing rod, broom |

## Key quantities
$$\\text{M.A.} = \\frac{\\text{load}}{\\text{effort}} \\qquad \\text{V.R.} = \\frac{\\text{distance moved by effort}}{\\text{distance moved by load}}$$
$$\\text{efficiency} = \\frac{\\text{M.A.}}{\\text{V.R.}} \\times 100\\%$$
Efficiency is always **less than 100%** because of **friction** and the weight of moving parts.

## Other simple machines
- **Pulley**: a wheel with a rope. A single fixed pulley changes the direction of effort (V.R. = 1). For a pulley system, V.R. = number of rope sections supporting the load.
- **Inclined plane**: a slope; V.R. $= \\frac{\\text{length of slope}}{\\text{height}}$.
- **Wheel and axle**: steering wheel, doorknob.
- **Screw**: an inclined plane wound round a cylinder (car jack).`,
          examples: `**Example 1.** A load of 400 N is lifted with an effort of 100 N. Find the M.A. *Answer:* $\\frac{400}{100} = 4$.

**Example 2.** If the V.R. of the machine above is 5, find its efficiency. *Answer:* $\\frac{4}{5} \\times 100\\% = 80\\%$.

**Example 3.** What class of lever is a wheelbarrow? *Answer:* **second class** — the load is between the fulcrum (wheel) and the effort.`,
        },
        questions: [
          ["E", "A device that makes work easier is a", "machine", "force", "fulcrum only", "load", "Machines reduce the effort needed."],
          ["E", "The pivot of a lever is called the", "fulcrum", "effort", "load", "pulley", "The lever turns about the fulcrum."],
          ["E", "A see-saw is an example of a", "first-class lever", "second-class lever", "third-class lever", "pulley", "The fulcrum is between the effort and the load."],
          ["M", "A wheelbarrow is a", "second-class lever", "first-class lever", "third-class lever", "screw", "The load is between the fulcrum and the effort."],
          ["M", "A load of 400 N is lifted with an effort of 100 N. What is the mechanical advantage?", "4", "300", "500", "0.25", "$\\text{M.A.} = 400 \\div 100 = 4$."],
          ["M", "The human forearm acts as a", "third-class lever", "first-class lever", "second-class lever", "wedge", "The effort (biceps) is between the fulcrum and the load."],
          ["M", "A screw is an inclined plane", "wound round a cylinder", "that is perfectly flat", "made of rope", "with no slope", "Its thread is a spiral slope."],
          ["H", "A machine has M.A. 4 and V.R. 5. What is its efficiency?", "80%", "125%", "20%", "90%", "$\\frac{4}{5} \\times 100\\% = 80\\%$."],
          ["H", "The efficiency of a real machine is always less than 100% because of", "friction and the weight of moving parts", "too much effort", "high velocity ratio", "the load being light", "Some energy is wasted."],
          ["H", "A slope 6 m long rises through a height of 1.5 m. What is its velocity ratio?", "4", "9", "7.5", "0.25", "$\\text{V.R.} = 6 \\div 1.5 = 4$."],
        ],
      },
      {
        week: 5,
        title: "Pressure",
        subtopics: ["Pressure in solids", "Pressure in liquids", "Atmospheric pressure", "Applications of pressure"],
        objectives: ["Define pressure and calculate it", "Explain factors affecting pressure in liquids", "Describe evidence and effects of atmospheric pressure", "Explain everyday applications of pressure"],
        lesson: {
          title: "Pressure in Solids, Liquids and Gases",
          summary: "Calculate pressure and explain its effects in everyday life.",
          minutes: 45,
          notes: `## Pressure in solids
**Pressure** is **force per unit area**:
$$P = \\frac{F}{A}$$
Unit: **pascal (Pa)**, where $1\\text{ Pa} = 1\\text{ N/m}^2$.
- A **smaller area** gives **greater pressure**: sharp knives cut easily; nails have pointed ends.
- A **larger area** gives **smaller pressure**: tractors have wide tyres; camels have broad feet for sand; snowshoes.

## Pressure in liquids
- Increases with **depth**: water spurts farthest from the lowest hole in a can; dam walls are thicker at the bottom.
- Increases with **density** of the liquid.
- Acts **equally in all directions** at a given depth.
- $P = h\\rho g$ (depth × density × gravitational field strength).

## Atmospheric pressure
The pressure exerted by the **weight of the air** above us (about **100 000 Pa** at sea level). It **decreases with altitude**.
Evidence: a collapsing can when air is pumped out; drinking through a straw; a glass of water covered with a card and turned upside down.
Measured with a **barometer**.

## Applications
Syringes, drinking straws, suction pads, hydraulic brakes and jacks (pressure transmitted through liquids).`,
          examples: `**Example 1.** A force of 200 N acts on an area of 4 m². Find the pressure. *Answer:* $P = \\frac{200}{4} = 50\\text{ Pa}$.

**Example 2.** Why are dam walls thicker at the base? *Answer:* Water pressure **increases with depth**.

**Example 3.** Why do tractors have wide tyres? *Answer:* A **larger area** reduces pressure, so they do not sink into soft soil.`,
        },
        questions: [
          ["E", "Pressure is defined as", "force per unit area", "mass per unit volume", "work per unit time", "distance per unit time", "Pressure is force divided by area: $P = F/A$."],
          ["E", "The SI unit of pressure is the", "pascal", "newton", "joule", "watt", "$1\\text{ Pa} = 1\\text{ N/m}^2$."],
          ["E", "Atmospheric pressure is measured with a", "barometer", "thermometer", "ammeter", "stopwatch", "Barometers measure air pressure."],
          ["M", "A force of 200 N acts on an area of 4 m². What is the pressure?", "50 Pa", "800 Pa", "204 Pa", "196 Pa", "$200 \\div 4 = 50\\text{ Pa}$."],
          ["M", "A sharp knife cuts better than a blunt one because it", "exerts greater pressure over a smaller area", "is heavier", "has a larger area", "reduces the force", "Small area means high pressure."],
          ["M", "Pressure in a liquid increases with", "depth", "height above the liquid", "colour of the liquid", "width of the container", "Deeper points have more liquid above them."],
          ["M", "Atmospheric pressure", "decreases as altitude increases", "increases as altitude increases", "is zero at sea level", "does not change", "There is less air above at high altitude."],
          ["H", "Dam walls are made thicker at the base because", "water pressure is greatest at the bottom", "the top gets more rain", "fish live at the bottom", "the base is hotter", "Pressure increases with depth."],
          ["H", "A box of weight 600 N rests on an area of 0.5 m². What pressure does it exert?", "1200 Pa", "300 Pa", "600.5 Pa", "3000 Pa", "$600 \\div 0.5 = 1200\\text{ Pa}$."],
          ["H", "Drinking through a straw works because", "atmospheric pressure pushes the liquid up when air in the straw is reduced", "the straw pulls the liquid", "liquids rise naturally", "gravity pushes the liquid up", "Reduced pressure inside lets outside air push the drink up."],
        ],
      },
      {
        week: 6,
        title: "Ecological balance and environmental hazards",
        subtopics: ["Balance in nature", "Deforestation and desertification", "Erosion and flooding", "Climate change"],
        objectives: ["Explain ecological balance", "Describe causes and effects of deforestation and desertification", "Explain causes and control of erosion and flooding", "Discuss the causes and effects of climate change"],
        lesson: {
          title: "Keeping Nature in Balance",
          summary: "Explain environmental hazards and how to reduce them.",
          minutes: 45,
          notes: `## Ecological balance
A state in which organisms and their environment remain **stable** — birth and death rates balance, nutrients are recycled, and food chains remain intact. Human activities can upset this balance.

## Deforestation
Clearing forests for farming, timber, fuel wood and buildings.
Effects: loss of wildlife habitats, soil erosion, less rainfall, more carbon dioxide in the air.

## Desertification
The spread of desert-like conditions into formerly fertile land — a serious problem in **northern Nigeria** (e.g. Sokoto, Borno, Yobe).
Causes: overgrazing, deforestation, bush burning, drought.
Control: shelterbelts of trees (Great Green Wall), controlled grazing, irrigation.

## Erosion
The removal of topsoil by **water** or **wind**. Gully erosion is severe in parts of the south-east (e.g. Anambra).
Control: planting cover crops and trees, contour ploughing, terracing, building drainage channels.

## Flooding
Causes: heavy rainfall, blocked drains, building on flood plains, release of water from dams.
Control: clear drains, proper waste disposal, avoid building in waterways, build dams and embankments.

## Climate change
Long-term change in global weather patterns, mainly due to **greenhouse gases** (carbon dioxide, methane) from burning fossil fuels, gas flaring and deforestation.
Effects: rising temperatures, irregular rainfall, droughts and floods, rising sea levels.
Responses: renewable energy, tree planting, energy efficiency, reduced gas flaring.`,
          examples: `**Example 1.** Name a cause of desertification in northern Nigeria. *Answer:* **overgrazing** (or deforestation, drought).

**Example 2.** How can gully erosion be controlled? *Answer:* **planting trees and cover crops** and building drainage channels.

**Example 3.** Which gas is mainly responsible for global warming? *Answer:* **carbon dioxide**.`,
        },
        questions: [
          ["E", "Clearing forests without replanting is called", "deforestation", "afforestation", "irrigation", "conservation", "Trees are removed."],
          ["E", "The removal of topsoil by water or wind is", "erosion", "germination", "photosynthesis", "pollination", "Erosion carries soil away."],
          ["E", "Which gas is mainly responsible for global warming?", "carbon dioxide", "oxygen", "nitrogen", "hydrogen", "It traps heat in the atmosphere."],
          ["M", "The spread of desert-like conditions into fertile land is", "desertification", "flooding", "reforestation", "irrigation", "It affects northern Nigeria."],
          ["M", "Which practice helps to control erosion?", "planting cover crops", "bush burning", "overgrazing", "removing all trees", "Plant roots hold the soil."],
          ["M", "Blocked drains in cities can cause", "flooding", "desertification", "drought", "earthquakes", "Water cannot flow away."],
          ["M", "Overgrazing by cattle contributes to", "desertification", "more forests", "higher soil fertility", "cleaner rivers", "Vegetation cover is lost."],
          ["H", "Planting belts of trees across northern Nigeria to stop the desert is an example of", "a shelterbelt", "deforestation", "gully erosion", "gas flaring", "Trees reduce wind and sand movement."],
          ["H", "Which human activity contributes to climate change?", "burning fossil fuels", "planting trees", "using solar energy", "recycling waste", "It releases greenhouse gases."],
          ["H", "Ecological balance is upset when", "a key species in a food chain is wiped out", "nutrients are recycled", "birth and death rates balance", "forests are protected", "Removing species disrupts food chains."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "BECE revision: living things and the environment",
        subtopics: ["Characteristics and classification of living things", "Habitats, food chains and ecology", "Reproduction and heredity", "Environmental problems"],
        objectives: ["Recall key facts on living things and classification", "Apply knowledge of habitats and food chains", "Revise reproduction and heredity", "Answer BECE-style questions on the environment"],
        lesson: {
          title: "BECE Revision: Life and Environment",
          summary: "Revise living things, ecology and environmental issues for the BECE.",
          minutes: 45,
          notes: `## Quick facts
- Characteristics of life: **MRS GREN** (movement, respiration, sensitivity, growth, reproduction, excretion, nutrition).
- Plants make food by **photosynthesis**; animals depend on plants.
- **Vertebrates** have backbones (fish, amphibians, reptiles, birds, mammals); **invertebrates** do not.
- A **habitat** is an organism's home; **adaptations** help survival.
- Food chains start with **producers** (green plants); arrows show **energy flow**.
- **Decomposers** (bacteria, fungi) recycle nutrients.
- The **ovule** becomes the seed; the **ovary** becomes the fruit.
- **Heredity** passes traits through **genes**; humans have **46 chromosomes**.
- Pollution types: **air, water, land, noise**.
- Environmental hazards: **erosion, flooding, desertification, deforestation, climate change**.

## Common BECE errors
- Confusing **excretion** (metabolic waste) with **egestion** (undigested food).
- Thinking the moon is luminous.
- Forgetting that germination needs **water, air and warmth**, not light.
- Mixing up herbivores (primary consumers) and carnivores.

## Technique
Read each option carefully; eliminate clearly wrong answers; watch for words like **NOT** and **EXCEPT** in questions.`,
          examples: `**Example 1.** *Which of the following is NOT a characteristic of living things: growth, excretion, rusting, respiration?* *Answer:* **rusting**.

**Example 2.** *In a food chain grass → goat → lion, the goat is a:* **primary consumer** (herbivore).

**Example 3.** *Which of these is an invertebrate: frog, snail, pigeon, lizard?* *Answer:* **snail**.`,
        },
        questions: [
          ["E", "Which of the following is NOT a characteristic of living things?", "rusting", "growth", "excretion", "respiration", "Rusting is a chemical change in iron."],
          ["E", "In the food chain grass → goat → lion, the goat is a", "primary consumer", "producer", "decomposer", "secondary consumer", "It eats the producer."],
          ["E", "Which of these is an invertebrate?", "earthworm", "frog", "pigeon", "lizard", "Earthworms have no backbone."],
          ["M", "Which organisms return nutrients from dead matter to the soil?", "decomposers", "producers", "herbivores", "carnivores", "Bacteria and fungi decompose matter."],
          ["M", "After fertilisation in a flower, the seed develops from the", "ovule", "ovary", "petal", "anther", "Ovules become seeds."],
          ["M", "Which is an adaptation of fish to aquatic life?", "gills for breathing", "lungs for breathing air only", "fur for warmth", "wings", "Gills extract dissolved oxygen."],
          ["M", "Which environmental problem is common in the far north of Nigeria?", "desertification", "coastal erosion by the sea", "mangrove destruction", "oil spills", "Dry conditions and overgrazing cause desertification."],
          ["H", "The removal of undigested food from the body is", "egestion", "excretion", "ingestion", "absorption", "Excretion refers to metabolic wastes."],
          ["H", "Which pair of traits are both inherited?", "blood group and eye colour", "a scar and a skill", "language and blood group", "a tan and muscle size from exercise", "Both are controlled by genes."],
          ["H", "In the food chain maize → grasshopper → lizard → hawk, which organism would be most affected if grasshoppers were removed?", "lizard", "maize", "hawk only", "none", "The lizard loses its direct food supply."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: the human body and health",
        subtopics: ["Body systems", "Nutrition and deficiency diseases", "Communicable diseases", "Drug abuse and personal hygiene"],
        objectives: ["Recall the functions of the major body systems", "Relate nutrients to deficiency diseases", "Revise causes and prevention of communicable diseases", "Answer BECE-style questions on health"],
        lesson: {
          title: "BECE Revision: The Body and Health",
          summary: "Revise body systems, nutrition and disease for the BECE.",
          minutes: 45,
          notes: `## Body systems at a glance
| System | Main organs | Main function |
|---|---|---|
| skeletal | bones, joints | support, protection, movement |
| digestive | mouth, stomach, intestines, liver | breaking down and absorbing food |
| respiratory | nose, trachea, lungs | gas exchange |
| circulatory | heart, blood vessels, blood | transport |
| excretory | kidneys, skin, lungs, liver | removing metabolic wastes |
| nervous | brain, spinal cord, nerves | control and coordination |

## Nutrition
Carbohydrates (energy), proteins (growth and repair), fats (energy, warmth), vitamins and minerals (protection, health), water, roughage.
Deficiencies: **kwashiorkor** (protein), **scurvy** (vitamin C), **rickets** (vitamin D/calcium), **night blindness** (vitamin A), **anaemia** (iron), **goitre** (iodine).

## Communicable diseases
Malaria (mosquito), cholera and typhoid (dirty water), tuberculosis (air), measles (virus). Prevention: immunisation, clean water, nets, hygiene.

## Drug abuse
Using drugs without prescription or illegal drugs; effects include addiction, organ damage and crime. Agency: **NDLEA**.`,
          examples: `**Example 1.** *Which organ pumps blood?* *Answer:* the **heart**.

**Example 2.** *Bleeding gums indicate lack of:* **vitamin C**.

**Example 3.** *Which disease is spread by contaminated water: malaria, cholera, measles, tuberculosis?* *Answer:* **cholera**.`,
        },
        questions: [
          ["E", "Which organ pumps blood round the body?", "heart", "lungs", "kidneys", "liver", "The heart is the circulatory pump."],
          ["E", "Which disease is spread by contaminated water?", "cholera", "malaria", "measles", "tuberculosis", "Cholera bacteria live in dirty water."],
          ["E", "The main function of carbohydrates is to", "provide energy", "build muscles", "prevent goitre", "form teeth", "They are energy foods."],
          ["M", "Gas exchange in humans takes place in the", "alveoli", "stomach", "kidneys", "heart", "Alveoli are in the lungs."],
          ["M", "Which organ filters blood to produce urine?", "kidney", "liver", "lung", "heart", "Kidneys remove urea and water."],
          ["M", "Swelling of the neck due to lack of iodine is", "goitre", "rickets", "scurvy", "kwashiorkor", "Iodine is needed by the thyroid gland."],
          ["M", "Which body system controls and coordinates body activities?", "nervous system", "digestive system", "excretory system", "skeletal system", "The brain and nerves control the body."],
          ["H", "Bent legs in children are caused by lack of", "vitamin D and calcium", "vitamin C", "protein", "iron", "This condition is rickets."],
          ["H", "Most absorption of digested food occurs in the", "small intestine", "stomach", "large intestine", "oesophagus", "Villi increase the absorbing surface."],
          ["H", "Which is the best way to prevent measles in children?", "immunisation", "sleeping under nets", "boiling water", "taking antibiotics daily", "Measles vaccine gives immunity."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: matter and chemical science",
        subtopics: ["States and changes of matter", "Elements, compounds and mixtures", "Separation techniques", "Acids, bases and chemical reactions"],
        objectives: ["Recall facts about matter and its changes", "Classify substances and choose separation methods", "Revise acids, bases and indicators", "Answer BECE-style chemistry questions"],
        lesson: {
          title: "BECE Revision: Matter and Chemistry",
          summary: "Revise matter, mixtures, acids and chemical reactions for the BECE.",
          minutes: 45,
          notes: `## Matter
- States: **solid, liquid, gas**; particles are closest in solids and farthest apart in gases.
- Changes: melting, freezing, evaporation, condensation, sublimation.
- **Physical change**: no new substance (melting ice). **Chemical change**: new substance (burning, rusting).

## Elements, compounds and mixtures
- Element: one kind of atom (O, Fe, Na).
- Compound: elements chemically combined ($\\text{H}_2\\text{O}$, NaCl).
- Mixture: substances not chemically combined (air, sea water).
- Atom: protons (+) and neutrons in the nucleus; electrons (−) around it.

## Separation methods
filtration (sand from water), evaporation (salt from solution), distillation (pure water from salt water), magnetism (iron from sand), sieving (garri), winnowing (rice chaff), chromatography (ink dyes), decantation.

## Acids and bases
- Acids: sour, turn blue litmus red, pH < 7.
- Alkalis: soapy, turn red litmus blue, pH > 7.
- Neutral: pH 7.
- **acid + base → salt + water** (neutralisation).

## Reactions
Rusting needs **air and water**; prevented by painting, oiling, galvanising.`,
          examples: `**Example 1.** *Which method separates salt from salt solution?* *Answer:* **evaporation**.

**Example 2.** *A solution has pH 12. It is:* **strongly alkaline**.

**Example 3.** *Which is a chemical change: melting wax, dissolving sugar, burning wood, breaking glass?* *Answer:* **burning wood**.`,
        },
        questions: [
          ["E", "Which method separates salt from salt solution?", "evaporation", "filtration", "sieving", "magnetism", "Water evaporates, leaving salt."],
          ["E", "Which is a chemical change?", "burning wood", "melting wax", "dissolving sugar", "breaking glass", "Burning produces new substances."],
          ["E", "Which is a compound?", "water", "air", "oxygen", "sea water", "Water is chemically combined hydrogen and oxygen."],
          ["M", "A solution has pH 12. It is", "strongly alkaline", "strongly acidic", "neutral", "weakly acidic", "High pH means strong alkali."],
          ["M", "The particle of the atom with no charge is the", "neutron", "proton", "electron", "nucleus", "Neutrons are neutral."],
          ["M", "Which method separates the dyes in a sample of ink?", "chromatography", "decantation", "winnowing", "evaporation", "Dyes travel at different rates."],
          ["M", "The change from gas directly to solid, or solid directly to gas, is associated with", "sublimation", "condensation", "melting", "freezing", "Sublimation skips the liquid state."],
          ["H", "An atom has 17 protons and 18 neutrons. What is its mass number?", "35", "17", "18", "1", "Mass number = protons + neutrons = 35."],
          ["H", "Which pair of substances is needed for rusting?", "oxygen and water", "nitrogen and water", "oxygen and salt only", "carbon dioxide and heat", "Both air and water are essential."],
          ["H", "Acid + base → salt + water describes", "neutralisation", "rusting", "sublimation", "distillation", "The acid and base neutralise each other."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: energy and physical science",
        subtopics: ["Energy forms and conversions", "Force, work, power and machines", "Heat, light and sound", "Electricity and magnetism"],
        objectives: ["Recall key facts and formulae in physical science", "Solve simple calculations on work, power, pressure and electricity", "Revise heat, light and sound", "Answer BECE-style physics questions"],
        lesson: {
          title: "BECE Revision: Energy and Physics",
          summary: "Revise energy, forces, waves and electricity with key formulae for the BECE.",
          minutes: 45,
          notes: `## Key formulae
| Quantity | Formula | Unit |
|---|---|---|
| work | $W = Fd$ | joule (J) |
| power | $P = \\frac{W}{t}$ | watt (W) |
| pressure | $P = \\frac{F}{A}$ | pascal (Pa) |
| potential energy | $mgh$ | joule |
| Ohm's law | $V = IR$ | volt, ampere, ohm |
| electrical power | $P = VI$ | watt |
| mechanical advantage | $\\frac{\\text{load}}{\\text{effort}}$ | no unit |
| efficiency | $\\frac{\\text{M.A.}}{\\text{V.R.}} \\times 100\\%$ | % |

## Facts to remember
- Energy is conserved; it only changes form.
- Renewable: sun, wind, water. Non-renewable: petroleum, coal, gas.
- Heat transfer: **conduction** (solids), **convection** (fluids), **radiation** (no medium).
- Light travels in straight lines; angle of incidence = angle of reflection.
- Sound needs a medium; it cannot travel in a vacuum; echoes are reflected sound.
- Like magnetic poles repel; unlike poles attract.
- Series: one path; parallel: separate branches (used in homes).
- $0\\,°\\text{C} = 273\\text{ K}$.`,
          examples: `**Example 1.** *A force of 50 N moves an object 4 m. Work done?* *Answer:* $50 \\times 4 = 200\\text{ J}$.

**Example 2.** *A 6 V battery drives 2 A through a resistor. Resistance?* *Answer:* $R = \\frac{V}{I} = \\frac{6}{2} = 3\\ \\Omega$.

**Example 3.** *Heat from the sun reaches the Earth by:* **radiation**.`,
        },
        questions: [
          ["E", "Which method of heat transfer needs no medium?", "radiation", "conduction", "convection", "evaporation", "Radiation can cross empty space."],
          ["E", "Like magnetic poles", "repel each other", "attract each other", "have no effect on each other", "cancel out", "N–N and S–S repel."],
          ["E", "Which is a renewable source of energy?", "wind", "coal", "petroleum", "natural gas", "Wind is continually replenished."],
          ["M", "A force of 50 N moves an object 4 m. What is the work done?", "200 J", "12.5 J", "54 J", "46 J", "$W = 50 \\times 4 = 200\\text{ J}$."],
          ["M", "A 6 V battery drives 2 A through a resistor. What is the resistance?", "3 Ω", "12 Ω", "8 Ω", "4 Ω", "$R = 6 \\div 2 = 3\\ \\Omega$."],
          ["M", "Which of these is produced by vibrating objects and needs a medium to travel?", "sound", "light", "radio waves", "heat radiation", "Sound cannot cross a vacuum."],
          ["M", "A machine lifts a 300 N load with a 100 N effort. What is its mechanical advantage?", "3", "200", "400", "0.33", "$300 \\div 100 = 3$."],
          ["H", "A girl does 1200 J of work in 60 s. What is her power?", "20 W", "72 000 W", "1260 W", "1140 W", "$1200 \\div 60 = 20\\text{ W}$."],
          ["H", "A force of 100 N acts on an area of 0.2 m². What is the pressure?", "500 Pa", "20 Pa", "100.2 Pa", "2000 Pa", "$100 \\div 0.2 = 500\\text{ Pa}$."],
          ["H", "Why are household appliances connected in parallel?", "Each works independently and gets the full voltage.", "It uses less wire.", "All appliances switch off together.", "It reduces the voltage to each appliance.", "Parallel branches are independent."],
        ],
      },
    ],
  },
];
