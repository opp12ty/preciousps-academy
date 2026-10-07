import type { TermPlan } from "../types";

/** SS3 Technical Drawing, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Engineering Designs and Working Drawings",
      subtopics: ["Meaning of design and working drawings", "Types of working drawing", "Contents of a working drawing", "Preparing a working drawing on the drawing table"],
      objectives: ["Explain engineering design and working drawings", "Distinguish detail drawings from assembly drawings", "State the contents of a working drawing", "Prepare a working drawing of a simple component"],
      lesson: {
        title: "From Idea to Working Drawing",
        summary: "The drawings from which components are actually made, and what they must contain.",
        minutes: 80,
        notes: `## Engineering design
**Engineering design** is the process of **planning a product to meet a need** — from the design brief, through sketches and calculations, to drawings from which it can be manufactured.

**Stages:** identify the need → write the **design brief** and specification → generate ideas (freehand sketches) → choose the best solution → develop and analyse → make **working drawings** → build a model or prototype → test and evaluate.

## Working drawings
A **working (production) drawing** gives **all the information needed to make and assemble** a component or product without further instruction.

### Types
| Type | Purpose |
|---|---|
| **detail drawing** | one component, fully dimensioned, with material, finish and tolerances |
| **assembly drawing** | shows how the parts **fit together**; parts are numbered ("ballooned") |
| **sub-assembly drawing** | a group of parts within a larger product |
| **parts list (bill of materials)** | item number, name, number required, material |
| **exploded view** | parts drawn separated along their axes to show the order of assembly |
| **installation / layout drawing** | where the product is fitted |

### Contents
- sufficient **views** in **orthographic projection** — usually front elevation, plan and end elevation; **sectional views** for internal detail
- complete **dimensions**
- **scale** and units
- **materials** and number required
- surface **finish**, **tolerances** and fits
- **notes** and symbols (welding, machining)
- a **title block**: title, drawing number, scale, projection symbol, date, name of draughtsman and checker
- a **border**

## Projection
- **First-angle projection** (European): the view seen from the **left** is drawn on the **right**; the plan is **below** the front elevation.
- **Third-angle projection** (American): each view is drawn on the **same side** from which it is seen; the plan is **above** the front elevation.
The projection used is shown by its **symbol** (a truncated cone and circles) in the title block.

## Lines
| Line | Use |
|---|---|
| **continuous thick** | visible outlines and edges |
| **continuous thin** | dimension, projection, leader and hatching lines |
| **dashed (short dashes)** | hidden detail |
| **chain thin (long-short)** | centre lines |
| **chain thin, thick at ends** | cutting planes |
| **continuous thin irregular** | limits of broken or partial views |

## Dimensioning rules
- dimension each feature **once only**, in the view that shows it best
- place dimensions **outside** the outline where possible
- **smaller dimensions nearer** the outline
- arrowheads touch the extension lines; lines do not cross
- figures read from the **bottom or right** of the sheet
- diameters shown with **Ø**, radii with **R**
- use **millimetres**; give overall sizes
- do not dimension to hidden lines

## Scales
**full size (1:1)**, **reduction** (1:2, 1:5, 1:10, 1:50, 1:100) and **enlargement** (2:1, 5:1).

## Procedure on the drawing table
fix the paper square with the tee-square; draw border and title block; plan the **layout** of views; draw **centre lines**; block in lightly; project between views; complete details; **line in** (circles and arcs first); dimension; letter neatly; check.`,
        examples: `**Example 1.** Distinguish a detail drawing from an assembly drawing. *Answer:* A **detail drawing** shows **one part** fully dimensioned; an **assembly drawing** shows **how parts fit together**.

**Example 2.** Where is the plan placed in first-angle projection? *Answer:* **Below** the front elevation.

**Example 3.** A component 300 mm long is drawn to a scale of 1:5. What length represents it? *Answer:* $300 \\div 5 = \\mathbf{60}$ **mm**.`,
      },
      questions: [
        ["E", "A drawing that gives all the information needed to make a component is a", "working drawing", "freehand sketch", "perspective view", "poster", "It is also called a production drawing."],
        ["E", "A drawing showing how several parts fit together is", "an assembly drawing", "a detail drawing", "a site plan", "a block diagram", "Parts are numbered and listed."],
        ["E", "The line used to show hidden detail is a", "dashed line", "chain line", "continuous thick line", "wavy line", "Short dashes represent edges that cannot be seen."],
        ["M", "In first-angle projection, the plan is drawn", "below the front elevation", "above the front elevation", "to the left of the end view", "on a separate sheet", "This is the European convention."],
        ["M", "The part of a drawing sheet that gives the title, scale and draughtsman's name is the", "title block", "border", "parts list", "margin note", "It is usually at the bottom right."],
        ["M", "Centre lines are drawn as", "thin chain lines", "thick continuous lines", "dashed lines", "zigzag lines", "Long and short dashes alternate."],
        ["M", "A list of the components of an assembly with their materials and quantities is the", "parts list", "legend", "schedule of rates", "index", "It is also called the bill of materials."],
        ["H", "A part 450 mm long is drawn to a scale of 1:5. The length of the line on the drawing is", "90 mm", "2250 mm", "45 mm", "455 mm", "450 ÷ 5 = 90 mm."],
        ["H", "A view in which the parts of an assembly are shown separated along their axes is", "an exploded view", "a sectional view", "an auxiliary view", "a revolved section", "It shows the order of assembly."],
        ["H", "Which of these is a correct rule of dimensioning?", "Each dimension should be given once only", "Dimensions should be repeated on every view", "Dimension lines should cross one another", "Hidden lines should be dimensioned", "Repetition causes confusion and error."],
      ],
    },
    {
      week: 3,
      title: "Screw Threads, Fasteners and Locking Devices",
      subtopics: ["Screw thread terms and forms", "Conventional representation of threads", "Fasteners: bolts, nuts, screws, studs and rivets", "Locking devices"],
      objectives: ["Explain screw thread terms and identify thread forms", "Draw the conventional representation of threads", "Identify and sketch common fasteners and state their uses", "Identify and sketch locking devices"],
      lesson: {
        title: "Threads, Fastenings and Locks",
        summary: "How threaded fasteners work, how they are drawn, and how they are prevented from working loose.",
        minutes: 80,
        notes: `## Screw threads
A **screw thread** is a **helical ridge of uniform section** formed on a cylinder (external thread — bolt) or in a hole (internal thread — nut).

### Terms
| Term | Meaning |
|---|---|
| **crest** | the top of the thread |
| **root** | the bottom of the groove |
| **flank** | the sloping side |
| **major (outside) diameter** | diameter over the crests |
| **minor (root / core) diameter** | diameter at the roots |
| **pitch** | distance between corresponding points on **adjacent threads** |
| **lead** | distance the screw advances axially in **one revolution** |
| **thread angle** | angle between the flanks |
| **depth** | distance from crest to root |
For a **single-start** thread, lead = pitch; for a multi-start thread, **lead = pitch × number of starts**.

A **right-hand** thread advances when turned clockwise; a **left-hand** thread when turned anticlockwise.

### Thread forms
| Form | Angle | Use |
|---|---|---|
| **ISO metric (V)** | 60° | general fastening; written **M10 × 1.5** (10 mm diameter, 1.5 mm pitch) |
| **Whitworth (BSW)** | 55° | older British fastening |
| **Unified (UNC / UNF)** | 60° | American and general |
| **square** | 90° flanks | power transmission — vices, jacks, presses |
| **Acme** | 29° | lathe lead screws |
| **buttress** | one flank perpendicular | force in one direction — vices, gun breeches |
| **knuckle (round)** | rounded | rough use — bottle tops, lamp holders |

### Conventional representation
Threads are not drawn in full.
- **external thread:** crests as a **thick continuous line**; roots as a **thin line**; in the end view the root is a **thin circle broken for about a quarter**
- **internal thread:** drawn hidden, or in section with hatching carried to the minor diameter
- the end of full thread is shown by a thick line across

## Fasteners
A **fastener** holds parts together. **Temporary** fasteners can be removed without damage (bolts, screws, keys, pins); **permanent** ones cannot (rivets, welds, soldered and glued joints).

| Fastener | Description and use |
|---|---|
| **bolt and nut** | a threaded bar with a head (hexagonal or square) used with a nut through clearance holes |
| **stud** | threaded at both ends, with no head; screwed into one part, a nut on the other — cylinder heads |
| **set screw** | threaded for its whole length; screws into a tapped hole |
| **machine screw** | small screw with slotted, cross or socket head — cheese, round, countersunk, pan heads |
| **grub screw** | headless; locks a collar or pulley on a shaft |
| **wood screw** | tapered thread; joins wood; **countersunk** heads fix hinges for doors |
| **self-tapping screw** | cuts its own thread in sheet metal or plastic |
| **coach bolt / coach screw** | heavy timber work |
| **rivet** | permanent; snap, pan, countersunk heads |
| **washer** | spreads load under a nut or head |
| **key; cotter; pin** | secure wheels and pulleys to shafts |

### Proportions of a hexagonal bolt (diameter D)
head thickness about **0.7D**; nut thickness about **0.8D to D**; width across flats about **1.5D + 3 mm**; thread length about 2D.

## Locking devices
Vibration can loosen nuts. **Locking devices** prevent this.
| Device | How it works |
|---|---|
| **lock nut (jam nut)** | a thin second nut tightened against the first |
| **spring washer** | a split, sprung washer that bites and maintains tension |
| **castle (slotted) nut and split pin** | a pin passes through the slots and a hole in the bolt |
| **tab washer** | tabs bent against the nut and the work |
| **self-locking (nylon insert) nut** | a nylon ring grips the thread |
| **locking plate** | plate fitted round the nut and screwed down |
| **wiring** | wire threaded through drilled bolt heads |
| **thread-locking compound** | adhesive on the threads |
**Positive** locking (split pin, tab washer, wire) physically prevents rotation; **frictional** locking (lock nut, spring washer) relies on friction.`,
        examples: `**Example 1.** What does M12 × 1.75 mean? *Answer:* An **ISO metric thread** of **12 mm** major diameter and **1.75 mm pitch**.

**Example 2.** A two-start thread has a pitch of 3 mm. Find its lead. *Answer:* $3 \\times 2 = \\mathbf{6}$ **mm**.

**Example 3.** Name two locking devices. *Answer:* **Spring washer** and **castle nut with split pin**.`,
      },
      questions: [
        ["E", "The distance between corresponding points on adjacent threads is the", "pitch", "lead", "crest", "root", "It is measured parallel to the axis."],
        ["E", "The top surface of a screw thread is the", "crest", "root", "flank", "core", "The root is the bottom of the groove."],
        ["E", "A fastener that holds parts together permanently is the", "rivet", "bolt", "set screw", "stud", "It cannot be removed without destroying it."],
        ["M", "The thread angle of the ISO metric thread is", "60°", "55°", "29°", "90°", "Whitworth threads are 55°."],
        ["M", "In the conventional representation of an external thread, the root is shown by a", "thin continuous line", "thick continuous line", "chain line", "wavy line", "The crest is drawn thick."],
        ["M", "A threaded fastener with no head, threaded at both ends, is a", "stud", "bolt", "rivet", "grub screw", "One end screws into a tapped hole and the other takes a nut."],
        ["M", "A split, sprung ring placed under a nut to prevent loosening is a", "spring washer", "plain washer", "tab washer", "gasket", "It keeps the joint under tension."],
        ["H", "A three-start thread has a pitch of 2 mm. Its lead is", "6 mm", "2 mm", "1.5 mm", "5 mm", "Lead = pitch × number of starts."],
        ["H", "The thread form most suitable for transmitting power in a screw jack is the", "square thread", "metric V-thread", "Whitworth thread", "knuckle thread", "Its flanks are perpendicular to the axis, giving low friction."],
        ["H", "A castle nut is locked in position by", "a split pin through the slots and the bolt", "a second thin nut", "a spring washer", "nylon insert", "The pin positively prevents rotation."],
      ],
    },
    {
      week: 6,
      title: "Engineering Working Drawing: Reading and Machine Assemblies",
      subtopics: ["Reading and interpreting engineering drawings", "Working drawings of simple machine parts to scale", "Coupling simple machine parts", "Producing assembly drawings"],
      objectives: ["Read and interpret engineering drawings", "Prepare working drawings of simple machine parts to scale", "Explain how simple machine parts are assembled", "Produce a working drawing of a machine assembly"],
      lesson: {
        title: "Reading Drawings and Assembling Parts",
        summary: "Interpreting the information on engineering drawings and drawing parts assembled together.",
        minutes: 80,
        notes: `## Reading an engineering drawing
1. Read the **title block** — name, scale, projection, material, units.
2. Identify the **views** and how they relate (first or third angle).
3. Study the **outlines**, then **hidden lines**, **centre lines** and **sections**.
4. Read **dimensions**, **tolerances** and surface-finish symbols.
5. Read **notes**, abbreviations and the **parts list**.
6. Visualise the three-dimensional shape; sketch it in **isometric** if helpful.

### Common abbreviations
| Abbreviation | Meaning |
|---|---|
| **Ø / DIA** | diameter |
| **R / RAD** | radius |
| **CL** | centre line |
| **PCD** | pitch circle diameter |
| **A/F** | across flats |
| **CSK** | countersunk |
| **C'BORE** | counterbore |
| **CHAM** | chamfer |
| **HEX HD** | hexagon head |
| **MS; CI** | mild steel; cast iron |
| **NTS** | not to scale |
| **DRG** | drawing |
| **SQ** | square |
| **THD** | thread |
| **MATL** | material |
| **ASSY** | assembly |

### Machining features
**chamfer** (bevelled edge); **fillet** (rounded internal corner); **countersink** (conical recess for a screw head); **counterbore** (cylindrical recess); **spot face**; **knurling** (roughened grip); **keyway**; **boss**; **web / rib**; **flange**; **bush**; **taper**.

## Tolerances and fits
- **Limits** are the largest and smallest permitted sizes; **tolerance** is their difference.
- **clearance fit** — the shaft is always smaller than the hole (running fit)
- **interference fit** — the shaft is larger; forced or shrunk on
- **transition fit** — may give either

## Working drawings of simple machine parts
Typical components: **bracket, bush, pulley, shaft, flange, bearing block, clamp, pipe joint, coupling, piston, connecting rod**.

**Procedure:** choose the views that show the shape most clearly; choose a **scale** that fits the sheet; set out centre lines; draw the views in projection; add a **section** where internal detail exists; dimension fully; add material and notes.

## Assembly drawings
An **assembly drawing** shows components in their **working positions**.

### Example — a manual air pump (hand tyre pump)
Parts: **barrel (cylinder)**, **piston with leather or rubber cup washer**, **piston rod**, **handle**, **end cap with guide**, **base and foot rest**, **outlet connection with non-return valve**, **hose**.
**Operation:** on the up-stroke air passes the cup washer into the barrel; on the down-stroke the washer seals and the air is forced through the valve to the tyre.

### Other common assemblies
bolt, nut and washer joining two plates; **flanged coupling** of two shafts with keys and bolts; **plummer block (pedestal bearing)**; **stuffing box and gland**; **G-clamp**; **machine vice**; **screw jack**; **pulley and shaft with key**; **tool post**; **stop valve**.

### Procedure
1. Study the detail drawings; note mating dimensions.
2. Decide which part is the **body** and draw it first on the main centre lines.
3. Add each part in the order of **actual assembly**.
4. Show the assembly in **section** to reveal the fit — adjacent parts are **hatched in opposite directions** or at different spacing.
5. Do **not** section shafts, bolts, nuts, keys, pins and rivets cut lengthwise.
6. Omit hidden detail unless needed.
7. Number the parts with **balloons** and leaders; draw up the **parts list**.
8. Give only **overall and assembly dimensions**.

## Coupling parts in the workshop
check sizes; clean and deburr; fit keys and bearings; align; tighten bolts evenly and in sequence; fit locking devices; test movement.`,
        examples: `**Example 1.** What does the abbreviation PCD mean? *Answer:* **Pitch circle diameter** — the diameter of the circle on which holes are spaced.

**Example 2.** In a sectional assembly, how are adjacent parts distinguished? *Answer:* By **hatching in opposite directions** (or at different spacing).

**Example 3.** Which parts are not sectioned when cut lengthwise? *Answer:* **Shafts, bolts, nuts, keys, pins and rivets**.`,
      },
      questions: [
        ["E", "The abbreviation CSK on a drawing means", "countersunk", "cast steel key", "centre square", "chamfer", "It is a conical recess for a screw head."],
        ["E", "The symbol Ø before a dimension indicates", "diameter", "radius", "angle", "depth", "R indicates radius."],
        ["E", "A bevelled edge on a component is a", "chamfer", "fillet", "boss", "web", "A fillet is a rounded internal corner."],
        ["M", "The first step in reading an engineering drawing is to study the", "title block", "hatching", "parts list only", "hidden lines", "It gives the name, scale and projection."],
        ["M", "The difference between the upper and lower limits of size is the", "tolerance", "allowance for paint", "clearance", "pitch", "It is the permitted variation."],
        ["M", "In an assembly drawing, parts are identified by", "balloons and a parts list", "colours only", "full dimensions of every part", "freehand notes on the border", "Each part carries an item number."],
        ["M", "A fit in which the shaft is always smaller than the hole is", "a clearance fit", "an interference fit", "a transition fit", "a shrink fit", "The shaft can rotate or slide freely."],
        ["H", "In a sectional assembly drawing, a shaft cut along its length is", "not hatched", "hatched at 45°", "hatched at 30°", "shown in dashed lines", "Shafts, bolts and keys are shown in outside view."],
        ["H", "In a hand air pump, air is prevented from returning from the tyre by the", "non-return valve", "handle", "foot rest", "barrel cap", "It allows flow in one direction only."],
        ["H", "The abbreviation A/F on a drawing of a hexagonal nut refers to the distance", "across flats", "across corners", "along the face", "around the flange", "It is the spanner size."],
      ],
    },
    {
      week: 8,
      title: "Sections and Sectional Views",
      subtopics: ["Meaning and purpose of sectioning", "Cutting planes and hatching", "Types of section", "Conventions in sectioning"],
      objectives: ["Explain sectioning and its purpose", "Draw cutting planes and hatch sectioned surfaces correctly", "Identify the types of section", "Apply the conventions for parts that are not sectioned"],
      lesson: {
        title: "Seeing Inside an Object",
        summary: "Imagining an object cut through so that its internal features can be drawn clearly.",
        minutes: 80,
        notes: `## Meaning and purpose
A **section** is the view obtained when an object is **imagined to be cut** by a plane and the part nearer the observer removed. **Sectional views** show **internal features clearly**, instead of by confusing hidden lines.

## The cutting plane
- shown in an adjacent view by a **thin chain line, thickened at the ends** and at changes of direction
- **arrows** show the direction of viewing
- labelled with **capital letters**: the view is titled **SECTION A–A**

## Hatching (section lining)
- the surface cut by the plane is covered with **thin, continuous, parallel lines**
- normally at **45°** to the main outline, **evenly spaced** (about 4 mm)
- hatching of the **same part** is in the **same direction** throughout
- **adjacent parts** are hatched in **opposite directions** or at different spacing
- very **thin sections** (gaskets, sheet metal) may be **blacked in**
- hatching stops at the outline and is not carried through dimensions

## Types of section
| Type | Description | Use |
|---|---|---|
| **full section** | the plane passes right through the object | general internal detail |
| **half section** | half in section, half in outside view, divided by a centre line | **symmetrical** objects |
| **offset section** | the plane changes direction to pass through several features | features not in one line |
| **aligned section** | features are rotated into the plane | spokes, holes on a pitch circle |
| **revolved section** | the cross-section is revolved 90° and drawn **on the view** | arms, spokes, bars |
| **removed section** | the cross-section is drawn **away from the view** | shafts with changing section |
| **part (local / broken-out) section** | a small area broken away, bounded by an **irregular line** | a keyway or hole in a solid part |
| **auxiliary section** | on an inclined plane | sloping features |

## Conventions — what is not sectioned
When the cutting plane passes **along the length** of the following, they are shown in **outside view**, not hatched:
- **shafts and spindles**
- **bolts, nuts, studs, screws, washers**
- **rivets, keys, pins, cotters**
- **ribs and webs** (cut parallel to their face)
- **spokes of wheels and gear teeth**
- **ball and roller bearings' balls and rollers**
If cut **across** (transversely), they are sectioned.

## Sections of simple engines and assemblies
In a section through a **single-cylinder engine** one sees the **cylinder block** and **head** (hatched), the **piston**, **gudgeon pin**, **connecting rod** (unhatched), **crankshaft**, **valves**, **sump** and cooling fins. Sectional drawings of pumps, valves, bearings and couplings are read in the same way: different hatching identifies each separate part.

## Sections in building drawing
A **floor plan** is a horizontal section about **1 m above floor level**; a **vertical section** shows foundation, floor, walls, lintels, roof and heights. Materials are shown by **conventional hatching**.

## Steps in drawing a sectional view
1. Decide where the cutting plane will reveal most.
2. Draw the cutting plane and arrows on the adjacent view.
3. Imagine the near part removed; draw what is **cut** and what is **seen beyond**.
4. Hatch the cut surfaces; omit most hidden detail.
5. Label the section.`,
        examples: `**Example 1.** Why are sectional views drawn? *Answer:* To show **internal details clearly** without relying on hidden lines.

**Example 2.** At what angle is hatching normally drawn? *Answer:* **45°** to the main outline.

**Example 3.** Which type of section suits a symmetrical object? *Answer:* A **half section**.`,
      },
      questions: [
        ["E", "A view of an object imagined cut by a plane is a", "sectional view", "pictorial view", "auxiliary view", "perspective", "It reveals internal detail."],
        ["E", "Hatching lines are normally drawn at", "45°", "90°", "15°", "0°", "They are thin, parallel and evenly spaced."],
        ["E", "The purpose of a sectional view is to show", "internal details", "the colour of the object", "the weight of the object", "the cost", "Hidden features become visible."],
        ["M", "The cutting plane is represented by a", "thin chain line thickened at the ends", "thick continuous line", "dashed line", "freehand wavy line", "Arrows show the direction of viewing."],
        ["M", "A section in which half the view is sectioned and half is an outside view is a", "half section", "full section", "removed section", "local section", "It is used for symmetrical parts."],
        ["M", "Adjacent parts in a sectional assembly are hatched", "in opposite directions", "in the same direction and spacing", "with dashed lines", "with thick lines", "This distinguishes one part from the next."],
        ["M", "A cross-section turned through 90° and drawn on the view itself is a", "revolved section", "removed section", "offset section", "full section", "It shows the shape of arms and spokes."],
        ["H", "Which of these is NOT hatched when the cutting plane passes along its length?", "A bolt", "A cast-iron housing", "A bush", "A cover plate", "Bolts, shafts, keys and rivets are shown in outside view."],
        ["H", "A section used to show a small internal feature, bounded by an irregular break line, is", "a part (local) section", "a half section", "an aligned section", "an auxiliary section", "Only a small area is broken away."],
        ["H", "A floor plan of a building is in effect", "a horizontal section taken above floor level", "a vertical section through the roof", "an elevation of the front", "a perspective view", "The cut is taken about one metre above the floor."],
      ],
    },
    {
      week: 9,
      title: "Block Sectioning: Building Plans, Elevations and Roof Structures",
      subtopics: ["Floor plans and sectional views of buildings", "Building elevations", "Hollow blocks and wall construction", "Roof structures and designs"],
      objectives: ["Draw the floor plan and a sectional view of a simple building", "Draw building elevations", "Sketch the internal part of a moulded hollow block", "Recognise different roof designs and roof structures"],
      lesson: {
        title: "Drawing a Simple Building",
        summary: "The plan, elevations and section of a block-built bungalow, with its roof.",
        minutes: 80,
        notes: `## Building drawings
| Drawing | Shows |
|---|---|
| **site plan** | the building on its plot, with boundaries, roads and drains |
| **floor plan** | arrangement of rooms, walls, doors and windows — a **horizontal section about 1 m above the floor** |
| **elevations** | external appearance — front, rear and side |
| **section** | a **vertical cut** showing foundation, floor, walls, openings, roof and heights |
| **roof plan** | the roof from above |
| **details** | enlarged parts — foundation, eaves, stairs |
Common scales: site plan 1:200 or 1:500; plans, elevations and sections **1:50** or **1:100**; details 1:10 or 1:20.

## The floor plan
- walls drawn with **two parallel lines** (external walls 225 mm, internal 150 mm) and hatched or filled
- **doors** shown open with an **arc** for the swing; **windows** as thin lines in the wall
- rooms **named** and **dimensioned**; overall dimensions outside
- cutting plane for the section marked **A–A**
- fittings — WC, bath, sink, wardrobes
- north point, scale and title

## Sectional view of a bungalow (from the ground up)
1. **hardcore** filling, compacted
2. **foundation** — strip concrete footing in a trench
3. **foundation wall** to ground-floor level
4. **damp-proof course (DPC)** at least 150 mm above ground; damp-proof membrane
5. **ground-floor slab** (oversite concrete) and floor **screed**
6. **walls** of sandcrete blocks, rendered
7. **windows** with **sills**; **doors**
8. **lintels** over openings
9. **wall plate** on top of the wall
10. **roof structure** and covering
11. **ceiling**, **fascia board** and **eaves**
Heights: floor to ceiling about **2.7–3.0 m**; door **2.1 m**; window sill about **0.9 m**.

## Elevations
Projected from the plan and section: ground line, plinth, walls, doors, windows, roof outline, fascia; textures shown lightly.

## The moulded hollow block
**Sandcrete blocks** are moulded from cement, sand and water.
- sizes: **450 × 225 × 225 mm** ("9-inch") for external and load-bearing walls; **450 × 225 × 150 mm** ("6-inch") for partitions
- a hollow block has **two (or three) rectangular cavities** separated by a **web**, with outer **shells**
- cavities reduce **weight and material**, improve **heat and sound insulation**, and can take **reinforcement and concrete** or service pipes
- blocks are laid in **stretcher bond** with **mortar joints** about 12–25 mm, vertical joints staggered
A sketch of the block cut across shows the **shells and web hatched** and the **cavities blank**.

## Roof structures
### Types of roof
| Roof | Description |
|---|---|
| **flat** | nearly level; concrete slab or decking |
| **lean-to (mono-pitch)** | one slope |
| **gable (pitched / couple)** | two slopes meeting at a ridge; triangular **gable ends** |
| **hipped** | slopes on all four sides |
| **gambrel; mansard** | two pitches on each side |
| **butterfly** | two slopes falling to a central valley |
| **dome; shell** | curved |

### Members of a timber pitched roof
**wall plate**; **rafters** (common, hip, valley, jack); **ridge board**; **purlins**; **tie beam** (ceiling joist); **king post** and **struts** (in a truss); **noggings**; **fascia board**; **battens**; **eaves** (overhang); **gutter**.
A **roof truss** is a triangulated frame that spans the building.

### Roof coverings
corrugated iron or aluminium sheets (long-span); asbestos-free fibre-cement sheets; clay or concrete tiles; stone-coated steel; thatch; concrete.

### Pitch
$$\\text{pitch} = \\frac{\\text{rise}}{\\text{span}}$$
A roof with a rise of 2 m on a span of 8 m has a pitch of $\\tfrac14$. Steeper pitches shed rain faster.

## Functions of a roof
shelter from rain and sun; security; insulation; appearance.`,
        examples: `**Example 1.** What does a floor plan represent? *Answer:* A **horizontal section** through the building about 1 m above floor level.

**Example 2.** A roof rises 1.5 m over a span of 6 m. Find its pitch. *Answer:* $1.5 \\div 6 = \\mathbf{\\tfrac14}$.

**Example 3.** State two advantages of hollow blocks. *Answer:* They are **lighter** and give **better heat and sound insulation**.`,
      },
      questions: [
        ["E", "The drawing that shows the arrangement of rooms in a building is the", "floor plan", "elevation", "site plan", "roof plan", "It shows walls, doors and windows from above."],
        ["E", "A view showing the external appearance of the front of a building is the", "front elevation", "floor plan", "section", "block plan", "Elevations show the outside faces."],
        ["E", "A roof with a single slope is a", "lean-to roof", "gable roof", "hipped roof", "mansard roof", "It is also called a mono-pitch roof."],
        ["M", "The horizontal member placed over a door or window opening to carry the wall above is the", "lintel", "sill", "wall plate", "plinth", "It spans the opening."],
        ["M", "The layer built into a wall to stop moisture rising from the ground is the", "damp-proof course", "hardcore", "screed", "fascia", "It is placed at least 150 mm above ground."],
        ["M", "A roof that slopes on all four sides is a", "hipped roof", "gable roof", "flat roof", "lean-to roof", "It has no gable ends."],
        ["M", "The standard size of a '9-inch' sandcrete block is", "450 × 225 × 225 mm", "450 × 225 × 150 mm", "300 × 150 × 100 mm", "225 × 112 × 75 mm", "It is used for external walls."],
        ["H", "A roof has a rise of 2 m and a span of 8 m. Its pitch is", "$\\frac14$", "$\\frac12$", "4", "$\\frac18$", "Pitch = rise ÷ span."],
        ["H", "The timber member fixed along the top of a wall to receive the feet of the rafters is the", "wall plate", "ridge board", "purlin", "fascia", "It spreads the roof load on the wall."],
        ["H", "In a sketch of a hollow block cut across, the parts that are hatched are the", "shells and web", "cavities", "mortar joints only", "whole surface", "Only solid material cut by the plane is hatched."],
      ],
    },
  ],
};
