import type { TermPlan } from "../types";

/** JSS1 Basic Technology — original Precious PS content following the national Basic Science and Technology structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Understanding technology",
        subtopics: ["Meaning of technology", "Technology and society", "Technological careers", "Benefits and dangers of technology"],
        objectives: ["Explain the meaning of technology", "Describe how technology affects daily life", "Name careers in technology", "Discuss the benefits and dangers of technology"],
        lesson: {
          title: "What Is Technology?",
          summary: "Understand technology and its place in everyday life and work.",
          minutes: 40,
          notes: `## Meaning
**Technology** is the use of scientific knowledge, tools, materials and skills to **solve practical problems** and meet human needs. Science explains *why*; technology applies it to make things *work*.

## Technology in daily life
| Area | Examples |
|---|---|
| communication | mobile phones, internet, radio |
| transport | cars, aeroplanes, trains, motorcycles |
| agriculture | tractors, irrigation pumps, fertilisers |
| health | X-ray machines, vaccines, thermometers |
| home | cookers, fans, refrigerators, water pumps |
| construction | cement, cranes, concrete mixers |

## Traditional and modern technology
- **Traditional**: blacksmithing, pottery, weaving, carving, dyeing (e.g. *adire*).
- **Modern**: electronics, computers, automobiles, robotics.

## Careers in technology
**Professionals**: engineers (civil, mechanical, electrical, computer), architects, quantity surveyors.
**Technologists and technicians**: laboratory technologists, draughtsmen.
**Craftsmen and artisans**: carpenters, welders, bricklayers, electricians, mechanics, plumbers.

## Benefits and dangers
Benefits: faster work, better health care, easier communication, more food, comfort.
Dangers: pollution, accidents, unemployment when machines replace workers, cybercrime, and misuse of weapons.`,
          examples: `**Example 1.** Is a blacksmith's work traditional or modern technology? *Answer:* **traditional technology**.

**Example 2.** Name a career in technology that designs buildings. *Answer:* **architect**.

**Example 3.** Give one danger of technology. *Answer:* **pollution** (e.g. smoke from factories and vehicles).`,
        },
        questions: [
          ["E", "The use of knowledge, tools and skills to solve practical problems is", "technology", "history", "geography", "literature", "Technology applies knowledge to practical needs."],
          ["E", "Which is an example of modern technology?", "mobile phone", "clay pot", "hand-woven cloth", "carved stool", "Mobile phones rely on modern electronics."],
          ["E", "Which is an example of traditional technology?", "blacksmithing", "robotics", "computer programming", "satellite design", "Blacksmithing is an old local craft."],
          ["M", "A professional who designs buildings is", "an architect", "a plumber", "a mechanic", "a welder", "Architects plan and design buildings."],
          ["M", "Which of these is a craftsman in technology?", "carpenter", "civil engineer", "architect", "quantity surveyor", "Carpenters are skilled craftsmen."],
          ["M", "The main difference between science and technology is that technology", "applies knowledge to make things work", "only explains why things happen", "has nothing to do with tools", "is only about computers", "Science explains; technology applies."],
          ["M", "Which is a benefit of technology in agriculture?", "tractors make farming faster", "more pollution", "fewer crops", "more manual labour", "Machines increase productivity."],
          ["H", "Which is a danger of technology?", "pollution from factories and vehicles", "faster communication", "better health care", "improved transport", "Technology can harm the environment."],
          ["H", "Replacing workers with machines can lead to", "unemployment", "more jobs in all cases", "less production", "cleaner air", "Automation may reduce the need for manual workers."],
          ["H", "Adire tie-and-dye is an example of", "traditional technology", "nuclear technology", "space technology", "information technology", "It is an indigenous textile craft."],
        ],
      },
      {
        week: 2,
        title: "Safety in the workshop",
        subtopics: ["Meaning of safety", "Causes of workshop accidents", "Safety rules and protective devices", "First aid in the workshop"],
        objectives: ["Explain the importance of safety", "Identify causes of accidents in the workshop", "State workshop safety rules and protective devices", "Describe basic first aid for common workshop injuries"],
        lesson: {
          title: "Staying Safe in the Workshop",
          summary: "Identify workshop hazards and follow rules that prevent accidents.",
          minutes: 40,
          notes: `## Meaning
**Safety** means freedom from danger, injury or damage. In the workshop it protects **people, tools, machines and materials**.

## Causes of accidents
- carelessness, playing and running
- using blunt or damaged tools
- wrong use of tools and machines
- loose clothing, jewellery or long hair near machines
- oily or cluttered floors
- poor lighting and ventilation
- faulty electrical wiring
- ignorance of safety rules

## Safety rules
1. Never enter or use the workshop without a teacher's permission.
2. Wear the correct protective clothing.
3. Use the right tool for the job and keep tools sharp.
4. Keep floors clean and dry; put tools back after use.
5. Switch off machines before adjusting or cleaning them.
6. Report every accident or damaged equipment immediately.

## Protective devices
| Device | Protects |
|---|---|
| goggles | eyes from flying particles and sparks |
| overall / apron | body and clothes |
| safety boots | feet from falling objects |
| gloves | hands from cuts, heat and chemicals |
| helmet | head |
| ear muffs | ears from loud noise |
| fire extinguisher | property and lives during fire |

## First aid
- **Cuts**: clean with water, press to stop bleeding, cover with a clean dressing.
- **Burns**: cool under running water for several minutes; do not burst blisters.
- **Electric shock**: switch off the power before touching the victim.
- Keep a **first-aid box** in every workshop.`,
          examples: `**Example 1.** Which protective device should be worn when grinding metal? *Answer:* **goggles** — they protect the eyes from sparks and particles.

**Example 2.** Why should a machine be switched off before it is cleaned? *Answer:* To prevent **injury from moving parts**.

**Example 3.** What is the first action for a minor burn? *Answer:* **Cool it under clean running water.**`,
        },
        questions: [
          ["E", "Freedom from danger, injury or damage is called", "safety", "hazard", "accident", "risk", "Safety protects people and property."],
          ["E", "Which device protects the eyes in the workshop?", "goggles", "gloves", "apron", "boots", "Goggles shield the eyes."],
          ["E", "Which is a workshop safety rule?", "Report every accident immediately.", "Run around the workshop.", "Use blunt tools.", "Leave tools on the floor.", "Reporting helps prevent further harm."],
          ["M", "Which is a cause of workshop accidents?", "oily floors", "good lighting", "sharp, well-kept tools", "clean benches", "Oily floors cause slips."],
          ["M", "Safety boots protect the", "feet", "eyes", "ears", "hands", "They shield feet from falling objects."],
          ["M", "Why should loose clothing be avoided near machines?", "It can be caught by moving parts.", "It makes the machine faster.", "It keeps the worker cool.", "It improves accuracy.", "Loose clothing can drag a worker into a machine."],
          ["M", "A box containing materials for treating minor injuries is a", "first-aid box", "tool box", "fuse box", "gear box", "It is essential in every workshop."],
          ["H", "What is the correct first action for a minor burn?", "cool it under clean running water", "burst the blisters", "apply engine oil", "cover it with sand", "Cooling reduces damage and pain."],
          ["H", "Before touching a person receiving an electric shock, you must", "switch off the power supply", "pour water on them", "hold their hand firmly", "shout loudly only", "Otherwise you may also be shocked."],
          ["H", "Machines should be switched off before cleaning or adjusting in order to", "prevent injury from moving parts", "save paper", "make them cooler only", "increase their speed", "Moving parts can cause serious injury."],
        ],
      },
      {
        week: 3,
        title: "Wood as a material",
        subtopics: ["Hardwoods and softwoods", "Nigerian timber and their uses", "Properties of wood", "Manufactured boards"],
        objectives: ["Distinguish hardwoods from softwoods", "Name common Nigerian timbers and their uses", "State the properties of wood", "Describe manufactured boards and their advantages"],
        lesson: {
          title: "Wood and Its Uses",
          summary: "Classify wood and choose suitable timber for different jobs.",
          minutes: 40,
          notes: `## Hardwoods and softwoods
| Hardwood | Softwood |
|---|---|
| from **broad-leaved** (deciduous or tropical) trees | from **cone-bearing** (coniferous) trees with needle-like leaves |
| usually heavy, strong and durable | usually lighter and easier to work |
| slow-growing | fast-growing |
| e.g. iroko, mahogany, obeche, teak, afara | e.g. pine, fir, spruce |
Note: the names describe the tree type, not always the actual hardness — obeche is a hardwood but is soft and light.

## Nigerian timbers
| Timber | Common uses |
|---|---|
| iroko | doors, window frames, furniture, boats (durable, resists insects) |
| mahogany | quality furniture, cabinets |
| obeche (arere) | light furniture, drawers, packing boxes |
| teak | furniture, outdoor work |
| afara | general carpentry |

## Properties of wood
Strength, durability, workability, appearance (grain and colour), weight, resistance to decay and insects. Wood is a poor conductor of heat and electricity.

## Manufactured boards
Made from wood veneers, chips or fibres glued together:
- **plywood** (thin veneers glued with grains at right angles)
- **particle board / chipboard** (wood chips and glue)
- **hardboard** and **fibreboard** (compressed fibres)
Advantages: available in **large sheets**, **stable** (do not warp easily), cheaper, make use of waste wood.`,
          examples: `**Example 1.** Is iroko a hardwood or a softwood? *Answer:* **hardwood** (from a broad-leaved tree).

**Example 2.** Which manufactured board is made of thin layers glued with their grains crossing? *Answer:* **plywood**.

**Example 3.** Give one advantage of manufactured boards. *Answer:* They come in **large sheets** and **resist warping**.`,
        },
        questions: [
          ["E", "Wood obtained from broad-leaved trees is called", "hardwood", "softwood", "plywood", "chipboard", "Broad-leaved trees give hardwoods."],
          ["E", "Which of these is a Nigerian hardwood?", "iroko", "pine", "fir", "spruce", "Iroko grows in West African forests."],
          ["E", "Wood obtained from cone-bearing trees is called", "softwood", "hardwood", "fibreboard", "veneer", "Conifers give softwoods."],
          ["M", "Which manufactured board is made from thin veneers glued with their grains at right angles?", "plywood", "hardboard", "chipboard", "fibreboard", "Crossed grains give plywood strength."],
          ["M", "Which timber is valued for durable doors and window frames?", "iroko", "obeche", "pine", "spruce", "Iroko resists decay and insects."],
          ["M", "Wood is a poor conductor of", "heat and electricity", "sound only", "light", "water only", "This makes wood good for handles."],
          ["M", "Chipboard is made from", "wood chips and glue", "metal sheets", "plastic granules", "clay", "It uses waste wood particles."],
          ["H", "Which is an advantage of manufactured boards over solid timber?", "they are available in large, stable sheets", "they are always heavier", "they cannot be cut", "they rot faster", "Large sheets resist warping."],
          ["H", "Obeche is classified as a hardwood even though it is soft and light because", "it comes from a broad-leaved tree", "it grows in cold countries", "it has needles", "it bears cones", "Classification depends on the tree type."],
          ["H", "The ease with which a material can be cut, shaped and joined is its", "workability", "durability", "conductivity", "density", "Workability describes how easily it is worked."],
        ],
      },
      {
        week: 4,
        title: "Metals as materials",
        subtopics: ["Ferrous and non-ferrous metals", "Alloys", "Properties of metals", "Uses of common metals"],
        objectives: ["Distinguish ferrous from non-ferrous metals", "Define alloys and give examples", "State the properties of metals", "Match common metals to their uses"],
        lesson: {
          title: "Metals and Alloys",
          summary: "Classify metals and relate their properties to their uses.",
          minutes: 40,
          notes: `## Ferrous and non-ferrous metals
- **Ferrous** metals contain **iron**: cast iron, wrought iron, mild steel, high-carbon (tool) steel. Most are **magnetic** and **rust**.
- **Non-ferrous** metals contain **no iron**: copper, aluminium, zinc, lead, tin, gold, silver. They do not rust.

## Alloys
An **alloy** is a mixture of a metal with one or more other elements to improve its properties.
| Alloy | Made from | Uses |
|---|---|---|
| steel | iron + carbon | building, tools, vehicles |
| stainless steel | steel + chromium (+ nickel) | cutlery, sinks, surgical tools |
| brass | copper + zinc | taps, door handles, musical instruments |
| bronze | copper + tin | statues, bearings, medals |
| solder | tin + lead (or tin-based) | joining electrical wires |

## Properties of metals
- **Conductivity**: conduct heat and electricity
- **Malleability**: can be hammered into sheets
- **Ductility**: can be drawn into wires
- **Hardness** and **toughness**
- **Lustre**: shiny surface
- **Tensile strength**: resist being pulled apart

## Uses
- **Copper**: electrical wires (excellent conductor)
- **Aluminium**: pots, window frames, aircraft (light, resists corrosion)
- **Zinc**: galvanising roofing sheets
- **Lead**: batteries
- **Mild steel**: gates, burglary-proof bars, rods for concrete`,
          examples: `**Example 1.** Is aluminium ferrous or non-ferrous? *Answer:* **non-ferrous** (contains no iron).

**Example 2.** Brass is an alloy of which metals? *Answer:* **copper and zinc**.

**Example 3.** Which property allows copper to be drawn into wires? *Answer:* **ductility**.`,
        },
        questions: [
          ["E", "Metals that contain iron are called", "ferrous metals", "non-ferrous metals", "alloys only", "plastics", "Ferrous comes from the Latin for iron."],
          ["E", "Which metal is used for most electrical wires?", "copper", "lead", "iron", "tin", "Copper is an excellent conductor."],
          ["E", "Which of these is a non-ferrous metal?", "aluminium", "mild steel", "cast iron", "wrought iron", "Aluminium contains no iron."],
          ["M", "A mixture of a metal with other elements to improve its properties is", "an alloy", "an ore", "a compound of plastic", "a veneer", "Alloys combine metals and elements."],
          ["M", "Brass is an alloy of", "copper and zinc", "copper and tin", "iron and carbon", "lead and tin", "Brass is used for taps and handles."],
          ["M", "The property that allows a metal to be hammered into sheets is", "malleability", "ductility", "brittleness", "conductivity", "Malleable metals flatten without breaking."],
          ["M", "Stainless steel does not rust easily because it contains", "chromium", "copper", "lead", "carbon only", "Chromium forms a protective layer."],
          ["H", "The property that allows copper to be drawn into thin wires is", "ductility", "malleability", "lustre", "hardness", "Ductile materials can be stretched into wires."],
          ["H", "Roofing sheets are coated with zinc in a process called", "galvanising", "soldering", "forging", "annealing", "Zinc protects steel from rust."],
          ["H", "Aluminium is preferred for aircraft bodies because it is", "light and resists corrosion", "heavy and magnetic", "brittle", "a poor conductor", "Low weight and durability matter in aircraft."],
        ],
      },
      {
        week: 5,
        title: "Plastics, rubber, ceramics and glass",
        subtopics: ["Thermoplastics and thermosetting plastics", "Rubber: natural and synthetic", "Ceramics", "Glass"],
        objectives: ["Distinguish thermoplastics from thermosetting plastics", "Describe natural and synthetic rubber and their uses", "State the properties and uses of ceramics", "State the properties and uses of glass"],
        lesson: {
          title: "Other Engineering Materials",
          summary: "Identify plastics, rubber, ceramics and glass and their uses.",
          minutes: 40,
          notes: `## Plastics
Plastics are **synthetic materials** made mainly from **petroleum** products.
| Type | Behaviour when heated | Examples | Uses |
|---|---|---|---|
| **thermoplastics** | soften when heated and can be **reshaped many times** | polythene, PVC, nylon, acrylic | bags, pipes, bottles, ropes |
| **thermosetting plastics** | set **permanently** once shaped; do not soften again | Bakelite, melamine, epoxy resin | electrical switches, plate handles, adhesives |
Properties: light, waterproof, electrical insulators, easily moulded, do not rust. Disadvantages: some burn easily and are **not biodegradable** (cause pollution).

## Rubber
- **Natural rubber** comes from **latex**, the milky sap of the rubber tree (grown in Edo and Delta States).
- **Synthetic rubber** is made from petroleum products.
- **Vulcanisation**: heating rubber with **sulphur** makes it stronger and more elastic.
Uses: tyres, hoses, shoe soles, gloves, erasers, insulation.

## Ceramics
Made from **clay** shaped and **fired** (baked) at high temperature.
Examples: pottery, tiles, bricks, sinks, toilet bowls, insulators on electric poles.
Properties: hard, brittle, heat-resistant, electrical insulators.

## Glass
Made by melting **sand (silica)**, **soda ash** and **limestone**.
Properties: transparent, hard, brittle, resists chemicals.
Uses: windows, bottles, lenses, mirrors, laboratory apparatus.`,
          examples: `**Example 1.** Is PVC a thermoplastic or thermosetting plastic? *Answer:* **thermoplastic** — it can be softened and reshaped.

**Example 2.** What is vulcanisation? *Answer:* Heating rubber with **sulphur** to make it stronger.

**Example 3.** What are the main raw materials of glass? *Answer:* **sand, soda ash and limestone**.`,
        },
        questions: [
          ["E", "Plastics are made mainly from", "petroleum products", "clay", "iron ore", "sand", "Most plastics come from petrochemicals."],
          ["E", "Natural rubber is obtained from", "latex of the rubber tree", "crude oil only", "clay", "sand", "Latex is tapped from rubber trees."],
          ["E", "Glass is made mainly from", "sand", "wood", "rubber", "latex", "Silica sand is the main ingredient."],
          ["M", "Plastics that soften when heated and can be reshaped are", "thermoplastics", "thermosetting plastics", "ceramics", "alloys", "They can be remelted and remoulded."],
          ["M", "Bakelite, used for electrical switches, is a", "thermosetting plastic", "thermoplastic", "ceramic", "metal", "It sets permanently."],
          ["M", "Ceramics are made by shaping clay and", "firing it at high temperature", "dissolving it in water", "mixing it with oil", "freezing it", "Firing hardens clay."],
          ["M", "Which of these is a ceramic product?", "floor tile", "nylon rope", "car tyre", "copper wire", "Tiles are fired clay."],
          ["H", "Heating rubber with sulphur to make it stronger is called", "vulcanisation", "galvanising", "annealing", "moulding", "Vulcanised rubber is used for tyres."],
          ["H", "A major environmental disadvantage of many plastics is that they", "are not biodegradable", "conduct electricity", "rust quickly", "are too heavy", "Plastic waste persists for many years."],
          ["H", "Ceramic insulators are used on electric poles because ceramics are", "good electrical insulators", "good conductors", "magnetic", "very soft", "They prevent current leaking to the pole."],
        ],
      },
      {
        week: 6,
        title: "Drawing instruments and materials",
        subtopics: ["Drawing board and T-square", "Set squares and protractor", "Compasses and dividers", "Pencils, paper and care of instruments"],
        objectives: ["Identify common drawing instruments", "State the uses of each instrument", "Select pencils of suitable grades", "Explain how to care for drawing instruments"],
        lesson: {
          title: "Tools of Technical Drawing",
          summary: "Identify drawing instruments and use them correctly.",
          minutes: 40,
          notes: `## Drawing instruments
| Instrument | Use |
|---|---|
| **drawing board** | flat, smooth surface to fix the drawing paper |
| **T-square** | drawing **horizontal lines**; guiding set squares |
| **set squares** (45° and 30°–60°) | drawing vertical and inclined lines at 30°, 45°, 60° (and 15°, 75° when combined) |
| **protractor** | measuring and setting out angles |
| **compasses** | drawing **circles and arcs** |
| **dividers** | **transferring measurements** and dividing lines |
| **scale rule** | measuring and drawing to scale |
| **French curves** | drawing irregular curves |
| **eraser** and **erasing shield** | removing unwanted lines neatly |

## Pencils
Graded from soft to hard:
**6B … 2B, B, HB, F, H, 2H … 9H**
- **Soft (B grades)**: dark lines; sketching.
- **HB**: medium; lettering and general work.
- **Hard (H grades, e.g. 2H)**: light, fine construction lines.

## Paper
Standard sizes: **A4** (210 mm × 297 mm), A3, A2, A1, A0. Paper is fixed to the board with drawing clips or masking tape.

## Care of instruments
- Keep instruments clean and in their case.
- Do not use the T-square edge for cutting.
- Keep compass points and pencils sharp.
- Do not drop set squares; avoid bending the T-square blade.`,
          examples: `**Example 1.** Which instrument is used to draw horizontal lines? *Answer:* the **T-square**.

**Example 2.** Which pencil is best for light construction lines: 2B or 2H? *Answer:* **2H** (hard pencil).

**Example 3.** What are the dimensions of A4 paper? *Answer:* **210 mm × 297 mm**.`,
        },
        questions: [
          ["E", "Which instrument is used to draw horizontal lines?", "T-square", "compasses", "dividers", "protractor", "The T-square slides along the board edge."],
          ["E", "Which instrument is used to draw circles?", "compasses", "T-square", "set square", "scale rule", "Compasses draw circles and arcs."],
          ["E", "Which instrument measures angles?", "protractor", "dividers", "T-square", "eraser", "A protractor is marked in degrees."],
          ["M", "Dividers are used mainly for", "transferring measurements", "drawing horizontal lines", "rubbing out lines", "holding paper", "They step off distances."],
          ["M", "Which pencil grade gives light, fine construction lines?", "2H", "2B", "6B", "B", "H grades are hard and light."],
          ["M", "Combining a 45° and a 30°–60° set square can produce an angle of", "75°", "20°", "50°", "85°", "$45° + 30° = 75°$."],
          ["M", "French curves are used for drawing", "irregular curves", "straight lines only", "circles only", "right angles", "They guide non-circular curves."],
          ["H", "The dimensions of A4 drawing paper are", "210 mm × 297 mm", "297 mm × 420 mm", "148 mm × 210 mm", "420 mm × 594 mm", "A4 is the standard office size."],
          ["H", "Which is good care of drawing instruments?", "keeping them clean and in their case", "cutting paper along the T-square edge", "dropping set squares on the floor", "using blunt compass points", "Proper storage prolongs their life."],
          ["H", "Which pencil grade is most suitable for general lettering?", "HB", "9H", "6B", "4H", "HB is medium in hardness."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Board practice: types of lines",
        subtopics: ["Setting up the drawing paper", "Types of lines and their uses", "Line thickness", "Drawing borders and title blocks"],
        objectives: ["Fix drawing paper correctly on the board", "Identify the conventional types of lines", "State the uses of each type of line", "Draw a border and title block"],
        lesson: {
          title: "Lines in Technical Drawing",
          summary: "Use standard line types correctly on a properly set-out drawing sheet.",
          minutes: 45,
          notes: `## Setting up
1. Place the paper near the left edge of the board (for right-handed users).
2. Align its top edge with the **T-square**.
3. Fix the corners with clips or masking tape.
4. Draw a **border** about 10–15 mm from the edges and a **title block** at the bottom (name, class, title, scale, date).

## Types of lines
| Line | Appearance | Use |
|---|---|---|
| **continuous thick** (outline) | dark, bold | visible edges and outlines |
| **continuous thin** | light | construction lines, dimension lines, projection lines, hatching |
| **dashed (hidden)** | short dashes | edges **hidden** from view |
| **chain thin** (long dash–short dash) | — · — · | **centre lines**, lines of symmetry |
| **chain thick at ends** | thin chain with thick ends | cutting planes for sections |
| **freehand wavy** | irregular | break lines, limits of partial views |

## Line quality
- Lines should be **uniform** in thickness and darkness.
- Construction lines are drawn **light** so they can be erased or left faint.
- Outlines are made **dark and bold** at the end.`,
          examples: `**Example 1.** Which line shows an edge that cannot be seen? *Answer:* a **dashed (hidden) line**.

**Example 2.** Which line shows the centre of a circle? *Answer:* a **thin chain line** (centre line).

**Example 3.** Why are construction lines drawn light? *Answer:* So they do not **confuse** the finished drawing and can be erased.`,
        },
        questions: [
          ["E", "Visible outlines of an object are drawn with", "continuous thick lines", "dashed lines", "chain lines", "wavy lines", "Outlines must stand out clearly."],
          ["E", "Hidden edges are shown with", "dashed lines", "continuous thick lines", "freehand lines", "double lines", "Dashes indicate hidden detail."],
          ["E", "The centre of a circle is shown with a", "thin chain line", "thick continuous line", "dashed line", "wavy line", "Chain lines show centres and symmetry."],
          ["M", "Dimension lines are drawn as", "continuous thin lines", "continuous thick lines", "dashed lines", "chain thick lines", "They must not be confused with outlines."],
          ["M", "Construction lines should be drawn", "light and thin", "dark and thick", "in ink only", "with a 6B pencil", "They are guides, not final lines."],
          ["M", "A freehand wavy line is used to show", "a break in an object", "a centre line", "a hidden edge", "an outline", "It marks a break or partial view."],
          ["M", "The box at the bottom of a drawing showing name, title and scale is the", "title block", "border line", "margin", "legend", "It identifies the drawing."],
          ["H", "A thin chain line with thick ends indicates a", "cutting plane", "hidden edge", "centre line only", "break line", "It shows where a section is taken."],
          ["H", "Why are construction lines drawn lightly?", "so they do not confuse the finished drawing", "so they cannot be seen at all", "to save paper", "to make the drawing darker", "Final outlines must stand out."],
          ["H", "Before drawing, the top edge of the paper should be aligned with the", "T-square", "protractor", "compasses", "eraser", "This keeps horizontal lines true."],
        ],
      },
      {
        week: 2,
        title: "Lettering and dimensioning",
        subtopics: ["Lettering styles", "Guidelines for lettering", "Elements of dimensioning", "Rules of dimensioning"],
        objectives: ["Write clear single-stroke letters and numerals", "Use guidelines for lettering", "Identify dimension lines, projection lines and arrowheads", "Apply basic rules of dimensioning"],
        lesson: {
          title: "Lettering and Dimensions",
          summary: "Add neat lettering and correct dimensions to drawings.",
          minutes: 45,
          notes: `## Lettering
Technical drawings use **single-stroke, upper-case (capital)** letters that are clear and uniform.
- Letters may be **vertical** or **inclined** (about 75°).
- Draw faint **guidelines** first to keep letters the same height.
- Common heights: **3–5 mm** for notes, **7–10 mm** for titles.
- Keep even spacing between letters and words.

## Dimensioning
**Dimensioning** shows the size of an object on a drawing.
| Element | Description |
|---|---|
| **projection (extension) lines** | thin lines extending from the object, with a small gap from the outline |
| **dimension line** | thin line with **arrowheads**, drawn parallel to the feature measured |
| **arrowheads** | touch the projection lines; about 3 mm long, filled |
| **dimension figure** | the size, usually in **millimetres** |

## Rules
1. Dimensions are in **millimetres** unless stated; do not write "mm" after every figure.
2. Place figures **above** the dimension line (aligned system) or so they read from the bottom of the sheet (unidirectional system).
3. Do not repeat dimensions.
4. Place dimensions **outside** the view where possible.
5. Smaller dimensions are placed nearer the object; larger ones further out.
6. Circles are dimensioned by **diameter** (⌀); arcs by **radius** (R).`,
          examples: `**Example 1.** In which unit are technical drawings normally dimensioned? *Answer:* **millimetres**.

**Example 2.** How is a circle of diameter 40 mm dimensioned? *Answer:* **⌀40**.

**Example 3.** Should smaller or larger dimensions be placed nearer the object? *Answer:* **smaller** dimensions.`,
        },
        questions: [
          ["E", "Technical drawings are normally dimensioned in", "millimetres", "metres", "kilometres", "inches only", "Millimetres give precise sizes."],
          ["E", "Lettering on technical drawings is usually in", "single-stroke capital letters", "joined handwriting", "decorative fonts", "small letters only", "Capitals are clear and uniform."],
          ["E", "Faint lines drawn to keep letters the same height are", "guidelines", "centre lines", "hidden lines", "cutting lines", "Guidelines control letter height."],
          ["M", "The thin line with arrowheads showing a size is the", "dimension line", "projection line", "centre line", "outline", "The figure is written on or above it."],
          ["M", "Lines extending from the object to the dimension line are", "projection lines", "hidden lines", "break lines", "outlines", "They extend from the feature measured."],
          ["M", "The symbol ⌀ before a dimension means", "diameter", "radius", "depth", "angle", "⌀ indicates diameter."],
          ["M", "An arc is dimensioned using its", "radius", "diameter only", "length only", "area", "The letter R shows radius."],
          ["H", "Which is a correct rule of dimensioning?", "Do not repeat dimensions.", "Write every dimension twice.", "Place all dimensions inside the view.", "Put larger dimensions nearest the object.", "Repetition causes confusion."],
          ["H", "Where should smaller dimensions be placed?", "nearer the object than larger ones", "further from the object than larger ones", "on the title block", "inside the border margin only", "This prevents lines crossing."],
          ["H", "Inclined lettering is usually sloped at about", "75°", "45°", "15°", "90°", "A 75° slope is standard."],
        ],
      },
      {
        week: 3,
        title: "Geometric construction: lines and angles",
        subtopics: ["Bisecting a line", "Constructing perpendiculars", "Constructing angles of 90°, 60°, 45° and 30°", "Bisecting an angle and dividing a line"],
        objectives: ["Bisect a straight line with compasses", "Construct perpendiculars to a line", "Construct standard angles with compasses", "Divide a line into equal parts"],
        lesson: {
          title: "Constructing Lines and Angles",
          summary: "Use compasses and a straightedge to construct lines and angles accurately.",
          minutes: 45,
          notes: `## Bisecting a line AB
1. With centre A and radius more than half AB, draw arcs above and below.
2. Repeat from B with the same radius.
3. Join the two intersections. This line is the **perpendicular bisector**: it cuts AB into two equal parts at 90°.

## Perpendicular from a point on a line
With centre at the point, cut the line on both sides; from these two points draw arcs of equal radius to intersect; join the intersection to the point.

## Constructing angles
- **60°**: with centre O draw an arc cutting the line at P; with the same radius and centre P cut the arc at Q; join OQ. (Equal radii make an **equilateral triangle**.)
- **30°**: **bisect** the 60° angle.
- **90°**: construct a perpendicular (or bisect a straight angle of 180°).
- **45°**: **bisect** the 90° angle.
- **120°**: step the radius twice round the arc from P.

## Bisecting an angle
With centre at the vertex draw an arc cutting both arms; from these points draw equal arcs to intersect; join the vertex to the intersection.

## Dividing a line into equal parts
Draw a line from one end at any convenient angle; step off the required number of equal spaces with dividers; join the last mark to the other end; draw **parallel** lines through the other marks.`,
          examples: `**Example 1.** How is a 30° angle constructed? *Answer:* Construct **60°** and **bisect** it.

**Example 2.** How is a 45° angle constructed? *Answer:* Construct **90°** and **bisect** it.

**Example 3.** What does the perpendicular bisector of AB do? *Answer:* It divides AB into **two equal parts at 90°**.`,
        },
        questions: [
          ["E", "Dividing a line into two equal parts is called", "bisecting", "tracing", "hatching", "projecting", "Bisect means cut into two equal parts."],
          ["E", "A perpendicular line meets another line at", "90°", "45°", "60°", "180°", "Perpendicular means at right angles."],
          ["E", "The instrument used with a straightedge for geometric construction is the", "compasses", "eraser", "sharpener", "French curve", "Compasses draw the arcs."],
          ["M", "A 30° angle is constructed by", "bisecting a 60° angle", "bisecting a 90° angle", "doubling a 45° angle", "bisecting a 45° angle", "Half of 60° is 30°."],
          ["M", "A 45° angle is constructed by", "bisecting a 90° angle", "bisecting a 60° angle", "adding 30° and 60°", "bisecting a 30° angle", "Half of 90° is 45°."],
          ["M", "When constructing 60°, using the same radius throughout forms", "an equilateral triangle", "a square", "a right-angled triangle", "a trapezium", "All sides equal gives 60° angles."],
          ["M", "Bisecting a straight angle of 180° gives", "90°", "60°", "45°", "120°", "Half of 180° is 90°."],
          ["H", "To divide a line into 5 equal parts, after stepping off 5 equal spaces on an inclined line, you should draw", "lines parallel to the line joining the last mark to the end of the given line", "lines perpendicular to the inclined line", "circles at each mark", "random lines to the given line", "Parallel lines divide the given line proportionally."],
          ["H", "To construct 120°, from the point where the arc cuts the base line you step the radius", "twice round the arc", "once round the arc", "three times round the arc", "four times round the arc", "Each step gives 60°."],
          ["H", "When bisecting a line AB, the compass radius must be", "more than half of AB", "less than half of AB", "exactly a quarter of AB", "zero", "Otherwise the arcs will not intersect."],
        ],
      },
      {
        week: 4,
        title: "Plane figures",
        subtopics: ["Triangles", "Quadrilaterals", "Regular polygons", "Circles and their parts"],
        objectives: ["Classify triangles and quadrilaterals", "Construct triangles from given data", "Name regular polygons and their angles", "Identify the parts of a circle"],
        lesson: {
          title: "Plane Figures in Drawing",
          summary: "Identify and construct common plane figures used in technical drawing.",
          minutes: 45,
          notes: `## Triangles
| Type (by sides) | Description |
|---|---|
| equilateral | all sides equal; each angle 60° |
| isosceles | two sides equal; two base angles equal |
| scalene | all sides different |
By angles: **acute-angled**, **right-angled** (one 90°), **obtuse-angled** (one angle more than 90°).
The angles of a triangle add up to **180°**.

## Constructing a triangle given three sides
Draw the base; from each end draw arcs with radii equal to the other two sides; join their intersection to the ends.

## Quadrilaterals (four sides; angles add to 360°)
square, rectangle, rhombus, parallelogram, trapezium, kite.

## Regular polygons
All sides and angles equal.
| Polygon | Sides | Each interior angle |
|---|---|---|
| equilateral triangle | 3 | 60° |
| square | 4 | 90° |
| pentagon | 5 | 108° |
| hexagon | 6 | 120° |
| octagon | 8 | 135° |
Each interior angle $= \\frac{(n - 2) \\times 180°}{n}$.
A regular **hexagon** can be drawn inside a circle by stepping the **radius** round the circumference six times.

## Parts of a circle
centre, radius, diameter, circumference, chord, arc, sector, segment, tangent.`,
          examples: `**Example 1.** What is each interior angle of a regular hexagon? *Answer:* $\\frac{(6-2) \\times 180°}{6} = 120°$.

**Example 2.** How can a regular hexagon be drawn in a circle? *Answer:* Step off the **radius** six times round the circumference and join the points.

**Example 3.** A triangle has angles 90°, 35° and 55°. What type is it? *Answer:* **right-angled triangle**.`,
        },
        questions: [
          ["E", "A triangle with all three sides equal is", "equilateral", "isosceles", "scalene", "right-angled", "Equilateral means equal sides."],
          ["E", "The angles of a triangle add up to", "180°", "360°", "90°", "270°", "This is true for every triangle."],
          ["E", "A four-sided plane figure is a", "quadrilateral", "pentagon", "hexagon", "triangle", "Quad means four."],
          ["M", "A triangle with two equal sides is", "isosceles", "scalene", "equilateral", "obtuse", "Its base angles are equal."],
          ["M", "How many sides does a hexagon have?", "6", "5", "7", "8", "The prefix hex- means six."],
          ["M", "Each interior angle of a regular hexagon is", "120°", "108°", "135°", "90°", "$\\frac{4 \\times 180°}{6} = 120°$."],
          ["M", "A straight line joining two points on a circle's circumference is a", "chord", "radius", "tangent", "sector", "A chord cuts across the circle."],
          ["H", "Each interior angle of a regular pentagon is", "108°", "120°", "72°", "135°", "$\\frac{3 \\times 180°}{5} = 108°$."],
          ["H", "A regular hexagon can be inscribed in a circle by stepping round the circumference with the", "radius", "diameter", "circumference", "chord of any length", "The side of the hexagon equals the radius."],
          ["H", "A line that touches a circle at only one point is a", "tangent", "chord", "diameter", "secant", "Tangents touch without cutting."],
        ],
      },
      {
        week: 5,
        title: "Measuring and marking-out tools",
        subtopics: ["Measuring tools", "Marking-out tools for wood", "Marking-out tools for metal", "Testing tools"],
        objectives: ["Identify measuring tools and their uses", "Identify marking-out tools for wood and metal", "Use testing tools to check squareness and flatness", "Care for measuring and marking-out tools"],
        lesson: {
          title: "Measuring and Marking Out",
          summary: "Choose the right tools to measure, mark and test work accurately.",
          minutes: 40,
          notes: `## Measuring tools
| Tool | Use |
|---|---|
| **steel rule** | accurate short measurements (metal and wood) |
| **measuring tape** | long measurements |
| **folding rule** | carpentry measurements |
| **vernier calliper** | very accurate internal, external and depth measurements |
| **micrometer screw gauge** | very small diameters and thicknesses |

## Marking-out tools for wood
- **pencil** — general marking
- **marking knife** — fine lines across the grain before cutting
- **marking gauge** — lines parallel to an edge
- **mortise gauge** — two parallel lines for mortises
- **try square** — lines at 90° to an edge

## Marking-out tools for metal
- **scriber** — scratches fine lines on metal
- **centre punch** — marks the centre of holes before drilling
- **dot punch** — makes small marks along lines
- **odd-leg calliper (jenny)** — lines parallel to an edge
- **surface plate** and **surface gauge** — flat reference surface and marking at a fixed height

## Testing tools
- **try square** — checks squareness (90°)
- **spirit level** — checks whether surfaces are level or plumb
- **straightedge** — checks flatness

## Care
Keep tools clean and oiled to prevent rust; do not drop rules or squares; store in racks.`,
          examples: `**Example 1.** Which tool marks fine lines on metal? *Answer:* the **scriber**.

**Example 2.** Which tool marks the centre of a hole before drilling? *Answer:* the **centre punch**.

**Example 3.** Which tool checks whether a shelf is level? *Answer:* the **spirit level**.`,
        },
        questions: [
          ["E", "Which tool is used for long measurements?", "measuring tape", "scriber", "centre punch", "try square", "Tapes measure long distances."],
          ["E", "Which tool checks that an edge is at 90° to a face?", "try square", "spirit level", "scriber", "marking gauge", "Try squares test squareness."],
          ["E", "Which tool is used to mark lines on metal?", "scriber", "pencil", "marking knife", "chalk only", "A scriber scratches a fine line."],
          ["M", "Which tool marks a line parallel to the edge of wood?", "marking gauge", "centre punch", "spirit level", "hacksaw", "It has an adjustable stock and spur."],
          ["M", "A centre punch is used to", "mark the centre of a hole before drilling", "cut metal", "measure diameters", "smooth wood", "The dent guides the drill."],
          ["M", "Which tool checks whether a surface is level?", "spirit level", "scriber", "mortise gauge", "steel rule", "The bubble shows level."],
          ["M", "Which tool measures very small diameters accurately?", "micrometer screw gauge", "measuring tape", "folding rule", "straightedge", "It reads to hundredths of a millimetre."],
          ["H", "A mortise gauge differs from a marking gauge because it", "marks two parallel lines at once", "cuts wood", "measures angles", "tests flatness", "It has two spurs."],
          ["H", "Measuring tools made of steel should be kept lightly oiled to", "prevent rust", "make them heavier", "change their readings", "improve their colour", "Rust damages markings."],
          ["H", "The flat reference surface used when marking out metal is the", "surface plate", "drawing board", "try square blade", "bench hook", "It provides a true flat surface."],
        ],
      },
      {
        week: 6,
        title: "Cutting, boring and driving tools",
        subtopics: ["Saws", "Planes and chisels", "Boring tools", "Driving tools and holding devices"],
        objectives: ["Identify saws for wood and metal", "State the uses of planes and chisels", "Describe boring tools", "Identify driving tools and holding devices"],
        lesson: {
          title: "Tools for Cutting and Joining",
          summary: "Identify common workshop tools for cutting, boring, driving and holding.",
          minutes: 40,
          notes: `## Saws
| Saw | Use |
|---|---|
| **rip saw** | cutting wood **along** the grain |
| **cross-cut saw** | cutting wood **across** the grain |
| **tenon (back) saw** | fine, accurate cuts for joints |
| **coping saw** | cutting curves in thin wood |
| **hacksaw** | cutting **metal** and plastic |

## Planes and chisels
- **Jack plane**: smoothing and straightening wood surfaces.
- **Smoothing plane**: final smoothing.
- **Firmer chisel**: general paring and cutting.
- **Mortise chisel**: cutting deep rectangular holes (mortises).
- **Cold chisel**: cutting metal.

## Boring tools
- **Hand drill** and **electric drill** with **twist drill bits** — small holes in wood and metal.
- **Brace and bit** — larger holes in wood.
- **Bradawl** — small starting holes for screws.

## Driving tools
- **Claw hammer**: driving and pulling out nails.
- **Ball-pein hammer**: metalwork (riveting, shaping).
- **Mallet**: striking chisel handles without damage.
- **Screwdrivers**: flat (slotted) and cross-head (Phillips).

## Holding devices
- **Bench vice** (woodwork) and **engineer's vice** (metalwork)
- **G-clamp**: holding work to a bench or glued parts together
- **Pliers**: gripping and bending wire`,
          examples: `**Example 1.** Which saw is used to cut metal? *Answer:* the **hacksaw**.

**Example 2.** Why is a mallet used on chisel handles instead of a hammer? *Answer:* A mallet **does not damage** the handle.

**Example 3.** Which saw cuts wood along the grain? *Answer:* the **rip saw**.`,
        },
        questions: [
          ["E", "Which saw is used for cutting metal?", "hacksaw", "rip saw", "cross-cut saw", "coping saw", "The hacksaw has fine teeth for metal."],
          ["E", "Which tool is used for driving and removing nails?", "claw hammer", "mallet", "screwdriver", "chisel", "The claw pulls out nails."],
          ["E", "Which tool smooths wood surfaces?", "jack plane", "hacksaw", "centre punch", "pliers", "Planes shave wood smooth."],
          ["M", "Which saw cuts wood along the grain?", "rip saw", "cross-cut saw", "hacksaw", "tenon saw", "Rip saw teeth are like small chisels."],
          ["M", "Which saw is best for cutting curves in thin wood?", "coping saw", "rip saw", "hacksaw", "cross-cut saw", "Its thin blade turns easily."],
          ["M", "Chisel handles are struck with a mallet because it", "does not damage the handle", "is heavier than a hammer", "cuts wood", "pulls nails", "Wooden mallets absorb impact."],
          ["M", "Which device holds two glued pieces together while the glue dries?", "G-clamp", "screwdriver", "bradawl", "tenon saw", "Clamps apply steady pressure."],
          ["H", "Which chisel is used for cutting metal?", "cold chisel", "mortise chisel", "firmer chisel", "paring chisel", "Cold chisels are hardened steel."],
          ["H", "A small tool used to make starting holes for screws in wood is the", "bradawl", "mallet", "hacksaw", "jack plane", "It pierces a small hole."],
          ["H", "Which saw gives fine, accurate cuts when making joints?", "tenon saw", "rip saw", "cross-cut saw", "pruning saw", "Its stiff back keeps the blade straight."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Care and maintenance of tools and machines",
        subtopics: ["Meaning of maintenance", "Types of maintenance", "Maintenance of hand tools", "Lubricants and lubrication"],
        objectives: ["Explain the meaning of maintenance", "Distinguish preventive from corrective maintenance", "Describe maintenance of hand tools", "State the types and uses of lubricants"],
        lesson: {
          title: "Looking After Tools and Machines",
          summary: "Keep tools and machines in good working condition through regular maintenance.",
          minutes: 40,
          notes: `## Meaning
**Maintenance** means keeping tools, machines and equipment in good working condition so that they last long, work safely and efficiently.

## Types of maintenance
| Type | Meaning | Example |
|---|---|---|
| **preventive (planned)** | regular care **before** faults occur | oiling a machine weekly; servicing a generator |
| **corrective (breakdown)** | repairs **after** a fault occurs | replacing a broken saw handle |
| **predictive / condition-based** | checks to detect wear early | checking tyre tread |

## Maintenance of hand tools
- Clean tools after use.
- **Sharpen** cutting tools (chisels, plane irons, saws).
- Oil metal parts to prevent **rust**.
- Replace or repair broken handles.
- Store tools properly in racks or boxes.

## Lubrication
**Lubrication** reduces **friction** and **wear** between moving parts, reduces heat and prevents rust.
| Lubricant | Form | Example use |
|---|---|---|
| oil | liquid | engines, sewing machines, door hinges |
| grease | semi-solid | wheel bearings, gears |
| graphite | solid (powder) | locks, where oil would collect dust |

## Benefits of maintenance
Longer life, safety, efficiency, lower repair costs, fewer breakdowns.`,
          examples: `**Example 1.** Oiling a sewing machine every week is what type of maintenance? *Answer:* **preventive maintenance**.

**Example 2.** Which lubricant is suitable for locks? *Answer:* **graphite**.

**Example 3.** Why are chisels sharpened regularly? *Answer:* Sharp tools cut **cleanly and safely**; blunt tools slip and cause accidents.`,
        },
        questions: [
          ["E", "Keeping tools and machines in good working condition is called", "maintenance", "manufacturing", "measurement", "moulding", "Maintenance prolongs tool life."],
          ["E", "Which reduces friction between moving parts?", "lubricant", "sand", "glue", "rust", "Lubricants make parts slide easily."],
          ["E", "Which is good care of hand tools?", "cleaning them after use", "leaving them in the rain", "using them as hammers", "storing them wet", "Cleaning prevents rust and damage."],
          ["M", "Regular care before faults occur is", "preventive maintenance", "corrective maintenance", "breakdown repair", "demolition", "It prevents breakdowns."],
          ["M", "Repairing a machine after it breaks down is", "corrective maintenance", "preventive maintenance", "lubrication only", "calibration", "It corrects an existing fault."],
          ["M", "Grease is a lubricant in", "semi-solid form", "gas form", "powder form only", "liquid form only", "Grease is thick and stays in place."],
          ["M", "Which lubricant is used in locks?", "graphite", "grease", "cooking oil", "water", "Powder does not attract dust like oil."],
          ["H", "Why are blunt cutting tools dangerous?", "They slip and can cause accidents.", "They cut too quickly.", "They are too light.", "They conduct electricity.", "More force is needed, so they slip."],
          ["H", "Which is a benefit of regular maintenance?", "lower repair costs", "more breakdowns", "shorter tool life", "unsafe operation", "Prevention costs less than repair."],
          ["H", "Besides reducing friction, lubricants also help to", "prevent rust and reduce heat", "increase wear", "make parts stick together", "increase noise", "They protect and cool surfaces."],
        ],
      },
      {
        week: 2,
        title: "Freehand sketching",
        subtopics: ["Meaning and uses of sketching", "Sketching straight lines", "Sketching curves and circles", "Sketching simple objects"],
        objectives: ["Explain the uses of freehand sketching", "Sketch straight lines and curves without instruments", "Sketch circles using construction boxes", "Sketch simple objects in proportion"],
        lesson: {
          title: "Sketching Without Instruments",
          summary: "Communicate ideas quickly with neat, proportional freehand sketches.",
          minutes: 40,
          notes: `## Meaning and uses
A **freehand sketch** is a drawing made **without instruments** (except pencil and eraser). It is used to:
- record ideas quickly;
- plan a design before accurate drawing;
- communicate on site or in the workshop;
- take down measurements of existing objects.

## Materials
Soft pencil (**HB or B**), eraser, and plain or squared (grid) paper.

## Sketching lines
- Hold the pencil loosely; draw with the **arm**, not just the fingers.
- Mark the start and end points; draw short, light strokes, then darken.
- Horizontal lines: left to right. Vertical lines: top to bottom.

## Sketching circles
1. Draw a light **square** box with centre lines.
2. Mark the radius on the centre lines (and on diagonals for large circles).
3. Join the marks with smooth light arcs, then darken.

## Proportion
Sketches need not be to exact scale, but parts must be **in proportion**: estimate relative sizes (e.g. the height is about twice the width).

## Sketching objects
Break objects into simple shapes — boxes, cylinders, cones — then add details.`,
          examples: `**Example 1.** Which pencil grade is suitable for freehand sketching? *Answer:* **HB** or **B**.

**Example 2.** How do you sketch a circle accurately freehand? *Answer:* Draw a light **square box with centre lines**, mark the radius and join with arcs.

**Example 3.** Why must a sketch be in proportion? *Answer:* So that it **represents the real object correctly**, even without exact measurements.`,
        },
        questions: [
          ["E", "A drawing made without instruments is a", "freehand sketch", "working drawing", "scale drawing", "blueprint", "Freehand means by hand alone."],
          ["E", "Which pencil grade is suitable for sketching?", "HB", "9H", "6H", "4H", "Softer pencils give easy dark lines."],
          ["E", "Freehand sketches are useful for", "recording ideas quickly", "final accurate manufacture drawings only", "measuring angles exactly", "printing money", "Sketching is fast."],
          ["M", "To sketch a circle, you first draw a light", "square with centre lines", "triangle", "hexagon", "rectangle with no lines", "The box guides the curve."],
          ["M", "A sketch need not be to exact scale but must be", "in proportion", "in ink", "coloured", "dimensioned in metres", "Parts must relate correctly in size."],
          ["M", "When sketching straight lines, you should first", "mark the start and end points", "press very hard", "use a compass", "rub the paper", "Points guide the stroke."],
          ["M", "Squared paper helps sketching because it", "guides line direction and proportion", "prevents erasing", "makes lines thicker", "measures weight", "Grid lines act as guides."],
          ["H", "Complex objects are easier to sketch if you first", "break them into simple shapes like boxes and cylinders", "draw every detail at once", "start with shading", "use only curved lines", "Simple forms build the outline."],
          ["H", "Light first strokes in sketching are useful because", "they can be corrected before darkening", "they cannot be erased", "they use more lead", "they make the drawing smaller", "Errors are easy to fix."],
          ["H", "Taking measurements of an existing object on site is best recorded with a", "dimensioned freehand sketch", "full-size model", "photograph only", "painting", "Sketches capture sizes quickly."],
        ],
      },
      {
        week: 3,
        title: "Oblique drawing",
        subtopics: ["Meaning of pictorial drawing", "Oblique drawing principles", "Cavalier and cabinet oblique", "Drawing simple blocks in oblique"],
        objectives: ["Explain pictorial drawing", "State the principles of oblique drawing", "Distinguish cavalier from cabinet oblique", "Draw simple blocks in oblique projection"],
        lesson: {
          title: "Oblique Pictorial Drawing",
          summary: "Draw three-dimensional objects using oblique projection.",
          minutes: 45,
          notes: `## Pictorial drawing
A **pictorial drawing** shows an object in **three dimensions** (length, width and height) in one view, as it appears to the eye. Types: **oblique**, **isometric** and **perspective**.

## Oblique drawing
- The **front face** is drawn **true shape** (as seen directly).
- The receding (depth) lines are drawn at an angle — usually **45°** (sometimes 30° or 60°) — to the horizontal.
- Place the face with **circles or the most detail** at the front, since circles on the front appear as true circles.

## Cavalier and cabinet oblique
| Type | Receding lines | Appearance |
|---|---|---|
| **cavalier** | drawn **full length** | looks too deep (distorted) |
| **cabinet** | drawn **half length** | looks more realistic |

## Drawing a block (cabinet oblique)
1. Draw the front face true size.
2. From each corner draw 45° lines.
3. Mark **half** the actual depth on each.
4. Join the ends to complete the back edges.
5. Darken visible edges; hidden edges are usually omitted in pictorial drawings.`,
          examples: `**Example 1.** A box is 60 mm long, 40 mm high and 50 mm deep. In cabinet oblique, how long are the receding lines? *Answer:* half of 50 mm = **25 mm**.

**Example 2.** At what angle are receding lines usually drawn in oblique? *Answer:* **45°**.

**Example 3.** Why should circular features be placed on the front face? *Answer:* So they appear as **true circles**, which are easy to draw.`,
        },
        questions: [
          ["E", "A drawing that shows length, width and height in one view is a", "pictorial drawing", "plan only", "section", "title block", "Pictorial means picture-like."],
          ["E", "In oblique drawing, the front face is drawn", "true shape", "at 30°", "half size only", "as an ellipse", "The front face is seen directly."],
          ["E", "Receding lines in oblique drawing are usually drawn at", "45°", "90°", "0°", "120°", "45° is the common oblique angle."],
          ["M", "In cabinet oblique, receding lines are drawn", "half their true length", "full length", "double length", "one-third length", "This reduces distortion."],
          ["M", "In cavalier oblique, receding lines are drawn", "full length", "half length", "a quarter length", "not at all", "This makes objects look too deep."],
          ["M", "Circular features should be placed on the front face in oblique drawing because they then appear as", "true circles", "ellipses", "squares", "straight lines", "Only the front face is true shape."],
          ["M", "Which is a type of pictorial drawing?", "isometric", "orthographic plan", "sectional end view", "title block", "Isometric drawings are pictorial."],
          ["H", "A box is 50 mm deep. In cabinet oblique, its receding lines are drawn", "25 mm long", "50 mm long", "100 mm long", "10 mm long", "Half of 50 mm is 25 mm."],
          ["H", "Cabinet oblique looks more realistic than cavalier because", "the depth is reduced by half", "it uses colour", "it has no front face", "it is drawn at 90°", "Full-length depth looks exaggerated."],
          ["H", "In pictorial drawings, hidden edges are usually", "left out", "drawn as thick lines", "drawn as chain lines", "coloured red", "They would clutter the picture."],
        ],
      },
      {
        week: 4,
        title: "Woodwork joints",
        subtopics: ["Purpose of joints", "Butt and lap joints", "Mortise and tenon joints", "Dovetail and housing joints"],
        objectives: ["Explain why joints are used", "Identify common woodwork joints", "State the uses of each joint", "Select suitable joints for given tasks"],
        lesson: {
          title: "Joining Wood",
          summary: "Identify woodwork joints and choose the right joint for each job.",
          minutes: 40,
          notes: `## Purpose of joints
Joints connect pieces of wood to make larger or stronger structures such as frames, boxes, tables and doors.

## Common joints
| Joint | Description | Uses |
|---|---|---|
| **butt joint** | ends simply placed against each other and nailed/glued | simple boxes; weakest joint |
| **halving (lap) joint** | half the thickness removed from each piece so they overlap flush | frames, crossing rails |
| **mortise and tenon** | a projecting **tenon** fits into a rectangular hole (**mortise**) | doors, tables, chairs — very strong |
| **dovetail joint** | fan-shaped **tails** interlock with **pins** | drawers, quality boxes — resists pulling apart |
| **housing joint** | the end of one piece fits into a groove (**housing**) across another | shelves, bookcases |
| **bridle joint** | an open mortise with a matching tenon | frames, corners |
| **dowel joint** | wooden pegs (**dowels**) fit into matching holes | furniture, edge joining |

## Fixings used with joints
glue (PVA, wood glue), nails, screws, dowels.

## Choosing a joint
Consider **strength required**, **appearance**, **skill and tools available** and **cost**.`,
          examples: `**Example 1.** Which joint is commonly used for drawers? *Answer:* the **dovetail joint**.

**Example 2.** Which joint is used to fix shelves into the sides of a bookcase? *Answer:* the **housing joint**.

**Example 3.** Which is the weakest common joint? *Answer:* the **butt joint**.`,
        },
        questions: [
          ["E", "The simplest woodwork joint, in which pieces are placed end to end, is the", "butt joint", "dovetail joint", "mortise and tenon joint", "bridle joint", "It needs no cutting."],
          ["E", "Which joint is commonly used for drawers?", "dovetail joint", "butt joint", "housing joint", "halving joint", "Tails and pins resist pulling apart."],
          ["E", "Which joint is used to fix shelves into bookcase sides?", "housing joint", "dovetail joint", "butt joint", "bridle joint", "Shelves sit in grooves."],
          ["M", "In a mortise and tenon joint, the tenon", "fits into the mortise", "is a groove", "is a nail", "is a hole in the side", "The projecting tenon enters the hole."],
          ["M", "In a halving joint, how much of each piece's thickness is removed?", "half", "a quarter", "all", "none", "Each piece is cut to half thickness."],
          ["M", "Wooden pegs used to join pieces of wood are", "dowels", "tenons", "tails", "housings", "Dowels fit into drilled holes."],
          ["M", "Which joint is strongest for doors and table frames?", "mortise and tenon", "butt", "dowel only", "lap with no glue", "It provides large gluing surfaces and interlocks."],
          ["H", "Why is the butt joint the weakest joint?", "The pieces only touch at the ends with no interlocking.", "It uses too much glue.", "It is made of metal.", "It has dovetails.", "Nothing locks the pieces together."],
          ["H", "Which factor should be considered when choosing a joint?", "the strength required", "the colour of the teacher's shirt", "the weather forecast", "the size of the classroom", "Strength needed determines the joint."],
          ["H", "The fan-shaped parts of a dovetail joint are called", "tails", "tenons", "dowels", "housings", "Tails interlock with pins."],
        ],
      },
      {
        week: 5,
        title: "Processing of wood",
        subtopics: ["Felling and conversion of trees", "Seasoning of timber", "Defects in timber", "Preservation of wood"],
        objectives: ["Describe how trees are felled and converted into timber", "Explain natural and artificial seasoning", "Identify common defects in timber", "Describe methods of preserving wood"],
        lesson: {
          title: "From Tree to Timber",
          summary: "Explain how trees become usable timber and how timber is protected.",
          minutes: 40,
          notes: `## Felling and conversion
- **Felling**: cutting down mature trees (usually in the dry season when sap content is low).
- **Conversion**: sawing logs into planks and boards. Methods include **plain (through-and-through) sawing** — cheap, little waste — and **quarter sawing** — more stable boards, more waste.

## Seasoning
**Seasoning** is the controlled **removal of moisture** from timber.
| Method | How | Features |
|---|---|---|
| **natural (air) seasoning** | stacked with spacers (stickers) in the open air under a roof | cheap, slow (months to years) |
| **artificial (kiln) seasoning** | dried in a heated chamber (kiln) | fast, controlled, more costly |
Benefits: stronger and lighter timber, less shrinkage and warping, resistance to fungi and insects, better for gluing and finishing.

## Defects in timber
| Defect | Description |
|---|---|
| **knots** | points where branches grew; weaken timber |
| **shakes** | splits along the grain inside the log |
| **warping** (cupping, bowing, twisting) | distortion from uneven drying |
| **checks and splits** | cracks at the ends or surface |
| **fungal decay** (rot) and **insect attack** (termites) | from damp or unprotected wood |

## Preservation
Protecting wood from decay, fungi and insects by applying **preservatives** (creosote, copper-based chemicals) by brushing, spraying, dipping or pressure treatment; also painting and varnishing.`,
          examples: `**Example 1.** What is seasoning? *Answer:* the controlled **removal of moisture** from timber.

**Example 2.** Which seasoning method is faster: air or kiln? *Answer:* **kiln seasoning**.

**Example 3.** Name one timber defect caused by uneven drying. *Answer:* **warping** (e.g. cupping or twisting).`,
        },
        questions: [
          ["E", "Cutting down a mature tree is called", "felling", "seasoning", "planing", "varnishing", "Felling is the first step."],
          ["E", "The controlled removal of moisture from timber is", "seasoning", "conversion", "felling", "sanding", "Seasoning dries timber."],
          ["E", "Which is a timber defect?", "knot", "grain", "veneer", "dowel", "Knots weaken timber."],
          ["M", "Sawing logs into planks and boards is called", "conversion", "felling", "preservation", "seasoning", "Logs are converted into usable sizes."],
          ["M", "Drying timber in a heated chamber is", "kiln seasoning", "air seasoning", "water seasoning", "felling", "Kilns control heat and humidity."],
          ["M", "Which is an advantage of seasoned timber?", "less shrinkage and warping", "heavier weight", "more fungal attack", "weaker joints", "Dry timber is stable."],
          ["M", "Termites and fungi can be controlled by applying", "wood preservatives", "water", "sand", "sugar", "Preservatives protect wood."],
          ["H", "Distortion of timber such as cupping and twisting is caused mainly by", "uneven drying", "painting", "sanding", "planing", "Uneven moisture loss distorts timber."],
          ["H", "Compared with kiln seasoning, air seasoning is", "cheaper but slower", "faster and more costly", "impossible in Nigeria", "done in water", "Air drying takes months."],
          ["H", "Splits along the grain inside a log are called", "shakes", "knots", "dowels", "veneers", "Shakes form inside the timber."],
        ],
      },
      {
        week: 6,
        title: "Introduction to building construction",
        subtopics: ["Stages of building construction", "Building materials", "Parts of a building", "Workers in the building industry"],
        objectives: ["Describe the stages of building a house", "Name common building materials", "Identify the main parts of a building", "Name workers in the building industry and their roles"],
        lesson: {
          title: "How Buildings Are Made",
          summary: "Describe the stages, materials and workers involved in building construction.",
          minutes: 40,
          notes: `## Stages of construction
1. **Planning and design** — drawings by the architect; approval by the planning authority.
2. **Site clearing and setting out** — marking the building's position with pegs and lines.
3. **Foundation** — digging trenches and casting concrete to carry the building's load.
4. **Walling** — laying blocks or bricks with mortar.
5. **Lintels and roofing** — beams over openings; roof frame and covering.
6. **Finishing** — plastering, flooring, doors and windows, plumbing, electrical wiring, painting.

## Building materials
| Material | Use |
|---|---|
| cement | binding material in mortar and concrete |
| sand | fine aggregate |
| gravel/granite | coarse aggregate in concrete |
| sandcrete blocks | walls |
| iron rods | reinforcement in concrete |
| timber | roof frames, doors, formwork |
| roofing sheets / tiles | roof covering |

**Mortar** = cement + sand + water. **Concrete** = cement + sand + gravel + water.

## Parts of a building
foundation, floor, walls, doors and windows, lintels, roof, ceiling.

## Workers
architect (design), civil/structural engineer (strength and stability), quantity surveyor (costs), builder/contractor, bricklayer (mason), carpenter, electrician, plumber, painter, tiler.`,
          examples: `**Example 1.** What is the first stage of building a house? *Answer:* **planning and design**.

**Example 2.** What materials make concrete? *Answer:* **cement, sand, gravel (granite) and water**.

**Example 3.** Which professional estimates the cost of a building? *Answer:* the **quantity surveyor**.`,
        },
        questions: [
          ["E", "The part of a building that carries its load into the ground is the", "foundation", "roof", "ceiling", "window", "Foundations transfer loads to the soil."],
          ["E", "The binding material in mortar and concrete is", "cement", "gravel", "timber", "paint", "Cement binds the other materials."],
          ["E", "Which worker lays blocks to build walls?", "bricklayer", "plumber", "electrician", "painter", "Bricklayers (masons) build walls."],
          ["M", "Mortar is a mixture of", "cement, sand and water", "cement, gravel and water only", "clay and oil", "sand and timber", "It joins blocks together."],
          ["M", "Concrete differs from mortar because concrete also contains", "gravel (coarse aggregate)", "paint", "timber", "glass", "Coarse aggregate gives concrete strength."],
          ["M", "The beam placed over door and window openings is a", "lintel", "foundation", "rafter only", "floor slab", "Lintels carry the wall above openings."],
          ["M", "Iron rods are placed in concrete to", "reinforce it", "colour it", "make it lighter", "keep it wet", "Steel adds tensile strength."],
          ["H", "Which professional estimates the cost of a building project?", "quantity surveyor", "plumber", "tiler", "painter", "Quantity surveyors prepare bills of quantities."],
          ["H", "Marking the position of a building on site with pegs and lines is called", "setting out", "plastering", "roofing", "tiling", "It fixes the building's outline."],
          ["H", "Which stage comes immediately after the foundation?", "walling", "painting", "roofing", "planning", "Walls rise from the foundation."],
        ],
      },
    ],
  },
];
