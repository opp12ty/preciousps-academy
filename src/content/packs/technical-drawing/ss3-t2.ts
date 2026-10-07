import type { TermPlan } from "../types";

/** SS3 Technical Drawing, Second Term — NERDC 2025 scheme. The third term is examination revision. */
export const ss3t2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "Introduction to Computer in Technical Drawing",
      subtopics: ["Meaning of a computer", "Hardware components and parts of a computer system", "Software for building and engineering design", "Introduction to CAD applications"],
      objectives: ["Explain what a computer is", "Identify the hardware components of a computer system", "Explain how computers and software are used in design", "Name common CAD applications"],
      lesson: {
        title: "The Computer as a Drawing Tool",
        summary: "The parts of a computer system and its use in engineering and building design.",
        minutes: 40,
        notes: `## Meaning
A **computer** is an **electronic machine that accepts data (input), processes it according to stored instructions, and gives out information (output)**, with the ability to store it.

## Parts of a computer system
| Part | Role |
|---|---|
| **hardware** | the physical components |
| **software** | the programs |
| **peopleware** | the users |

### Hardware components
| Group | Devices |
|---|---|
| **input** | keyboard, mouse, **digitiser / graphics tablet**, scanner, light pen, 3-D scanner |
| **processing** | **central processing unit (CPU)**; **graphics card (GPU)** for drawings and 3-D models |
| **memory and storage** | RAM; hard disk or solid-state drive; flash drive; cloud |
| **output** | monitor (large, high-resolution), printer, **plotter** (large-format drawings), 3-D printer |

A CAD workstation needs a fast processor, plenty of RAM, a good graphics card and a large screen.

### Software
- **system software** — the operating system (Windows, macOS, Linux)
- **application software** — word processors, spreadsheets and **CAD programs**

## Using the computer for design
- **drafting** — producing 2-D drawings: plans, elevations, sections, details
- **modelling** — building 3-D models that can be rotated and sectioned
- **rendering and animation** — realistic pictures and walk-throughs
- **analysis** — calculating areas, volumes, loads and stresses
- **documentation** — schedules, bills of quantities, parts lists
- **communication** — sharing drawings by e-mail and cloud
- **manufacturing** — sending data to machines (**CAM**) and 3-D printers

## CAD applications
**CAD** means **computer-aided design (or drafting)**.
| Software | Main use |
|---|---|
| **AutoCAD** | general 2-D drafting and 3-D |
| **Revit; ArchiCAD** | building design (building information modelling, BIM) |
| **SketchUp** | quick 3-D building models |
| **SolidWorks; Autodesk Inventor; Fusion 360** | mechanical parts and assemblies |
| **CATIA** | aircraft and automobile design |
| **FreeCAD; LibreCAD** | free, open-source CAD |
| **Civil 3D** | roads and site works |

## Related terms
**CADD** (computer-aided design and drafting); **CAM** (computer-aided manufacture); **CAE** (computer-aided engineering); **BIM**; **CNC** (computer numerical control) machines.

## Care of the computer
keep it clean and dust-free; use a UPS or stabiliser; shut down properly; save and **back up** work; use antivirus software; avoid food and liquids near it.

## Basic operations
start the computer; open the program; create, save and name a file; open and print a file; shut down.`,
        examples: `**Example 1.** What does CAD stand for? *Answer:* **Computer-aided design** (or drafting).

**Example 2.** Name the output device used for large drawings. *Answer:* A **plotter**.

**Example 3.** Give two CAD programs. *Answer:* **AutoCAD** and **SolidWorks**.`,
      },
      questions: [
        ["E", "An electronic machine that accepts data, processes it and gives out information is a", "computer", "plotter only", "tee-square", "drawing board", "It also stores data and instructions."],
        ["E", "CAD stands for", "computer-aided design", "central analogue device", "common architectural drawing", "computer-assisted data", "The computer is used to produce drawings."],
        ["E", "The physical parts of a computer are its", "hardware", "software", "data", "programs", "They can be seen and touched."],
        ["M", "The output device used to produce large-format technical drawings is the", "plotter", "scanner", "mouse", "digitiser", "It prints on wide sheets."],
        ["M", "Which of these is a CAD program?", "AutoCAD", "Microsoft Word", "Windows", "Google Chrome", "It is used for drafting and modelling."],
        ["M", "An input device used to trace or enter drawings into a computer is the", "digitiser", "monitor", "printer", "speaker", "A graphics tablet converts positions into data."],
        ["M", "The part of the computer that carries out processing is the", "CPU", "keyboard", "monitor", "plotter", "The central processing unit is the 'brain'."],
        ["H", "Software used mainly for designing mechanical parts and assemblies in three dimensions is", "SolidWorks", "Microsoft Excel", "Revit only for roads", "CorelDRAW", "It is a parametric 3-D modelling program."],
        ["H", "Using computer data to control machine tools in making a part is", "CAM", "RAM", "BIM", "DPC", "Computer-aided manufacture."],
        ["H", "A CAD workstation needs a good graphics card mainly to", "display complex drawings and 3-D models smoothly", "connect to the internet", "store the operating system", "print in colour", "The GPU handles graphics processing."],
      ],
    },
    {
      week: 2,
      title: "Arches",
      subtopics: ["Meaning and parts of an arch", "Types of arches", "Construction of arch curves", "Importance and identification of arches in buildings"],
      objectives: ["Explain what an arch is and name its parts", "Identify the types of arches", "Construct simple arch curves geometrically", "State the importance of arches and identify them in buildings"],
      lesson: {
        title: "Arches in Building",
        summary: "Curved structures that span openings: their parts, types and construction.",
        minutes: 80,
        notes: `## Meaning
An **arch** is a **curved structure that spans an opening and supports the load above it**, transferring the load sideways and downwards to its supports.

## Parts of an arch
| Part | Meaning |
|---|---|
| **span** | the clear horizontal distance between the supports |
| **rise** | the vertical height from the springing line to the highest point of the intrados |
| **springing line** | the line from which the arch begins to curve |
| **springer** | the first voussoir at the springing |
| **voussoirs** | the wedge-shaped blocks forming the arch |
| **keystone** | the central voussoir at the crown, which locks the arch |
| **crown** | the highest point |
| **intrados (soffit)** | the inner (under) curve |
| **extrados** | the outer (upper) curve |
| **haunch** | the part between the springing and the crown |
| **abutment / pier** | the support that resists the thrust |
| **impost** | the top of the support on which the arch rests |
| **centre** | the point from which the curve is struck |
| **spandrel** | the triangular space between the arch and the rectangle enclosing it |

## Types of arches
| Type | Description |
|---|---|
| **semicircular (Roman)** | half a circle; centre on the springing line; rise = half the span |
| **segmental** | less than a semicircle; centre below the springing line |
| **flat (camber / jack) arch** | almost level; voussoirs radiate to a centre below |
| **pointed (Gothic)** | two arcs meeting at a point: **equilateral** (radius = span), **lancet** (radius greater than span — tall and narrow), **drop** (radius less than span) |
| **Tudor (four-centred)** | low, wide pointed arch struck from four centres |
| **three-centred (elliptical / basket-handle)** | approximates half an ellipse |
| **semi-elliptical** | half a true ellipse |
| **horseshoe (Moorish)** | more than a semicircle |
| **ogee** | each side a double (S-shaped) curve |
| **stilted** | a semicircle raised on vertical sides |
| **relieving arch** | built above a lintel to take the load off it |

## Geometrical construction
### Semicircular arch
Bisect the span AB at C; with centre C and radius CA draw the semicircle (intrados); with the same centre and a larger radius draw the extrados; draw the voussoir joints as **radial lines** from C.

### Segmental arch (given span and rise)
Draw the span AB; bisect it and mark the rise CD on the bisector; join AD and bisect it to cut the centre line produced at O; with centre O and radius OA draw the arc.

### Equilateral pointed arch
With centres A and B and radius AB, draw arcs to meet above the span.

### Lancet arch
Centres lie on the springing line **outside** the span; **drop arch** — centres **within** the span.

### Tudor arch
Divide the span into four; use two centres on the springing line for the small end arcs and two centres below for the flatter upper arcs.

## Materials
stone, brick, sandcrete block, concrete (plain and reinforced), steel, timber.

## Importance of arches
- **span openings** — doors, windows, gates, bridges
- **carry heavy loads**, since the material is mainly in **compression**
- allow **wider spans** than a simple stone lintel
- give **beauty** and character to buildings
- economical in materials
- used in bridges, culverts, tunnels, dams and vaults

## Identifying arches in buildings
- **semicircular:** verandas, colonial buildings, bridges
- **pointed:** many churches (Gothic style)
- **horseshoe and ogee:** mosques and northern Nigerian palaces
- **segmental and flat:** over doors and windows of houses`,
        examples: `**Example 1.** What is the keystone? *Answer:* The **central wedge-shaped block at the crown** that locks the arch.

**Example 2.** Where is the centre of a semicircular arch? *Answer:* On the **springing line**, at the middle of the span.

**Example 3.** A semicircular arch has a span of 3 m. What is its rise? *Answer:* **1.5 m** (half the span).`,
      },
      questions: [
        ["E", "A curved structure that spans an opening and supports the load above it is", "an arch", "a lintel", "a beam", "a column", "It transfers load to its supports."],
        ["E", "The central wedge-shaped block at the top of an arch is the", "keystone", "springer", "impost", "abutment", "It locks the other voussoirs in place."],
        ["E", "The clear horizontal distance between the supports of an arch is the", "span", "rise", "crown", "haunch", "The rise is the vertical height."],
        ["M", "The wedge-shaped blocks that form an arch are called", "voussoirs", "spandrels", "purlins", "mullions", "They radiate from the centre."],
        ["M", "The inner curve of an arch is the", "intrados", "extrados", "springing", "spandrel", "It is also called the soffit."],
        ["M", "A semicircular arch has a span of 2.4 m. Its rise is", "1.2 m", "2.4 m", "0.6 m", "4.8 m", "The rise equals the radius, half the span."],
        ["M", "An arch whose curve is less than a semicircle is", "a segmental arch", "a horseshoe arch", "a stilted arch", "an equilateral arch", "Its centre is below the springing line."],
        ["H", "In an equilateral pointed arch, the radius of each arc is equal to", "the span", "half the span", "twice the span", "the rise", "The centres are at the two springing points."],
        ["H", "The triangular space between the outer curve of an arch and the enclosing rectangle is the", "spandrel", "haunch", "impost", "soffit", "It is often decorated."],
        ["H", "Arches can carry heavy loads over wide openings mainly because the material is in", "compression", "tension", "torsion", "shear only", "Stone, brick and concrete are strong in compression."],
      ],
    },
    {
      week: 3,
      title: "Roofs",
      subtopics: ["Meaning and functions of a roof", "Types of roofs", "Roof members and trusses", "Roof pitch and design"],
      objectives: ["Explain the meaning and functions of a roof", "Identify the types of roofs", "Name and draw the members of a roof", "Determine roof pitch and identify roof designs in buildings"],
      lesson: {
        title: "Covering the Building",
        summary: "The forms, parts and proportions of roofs, and how they are drawn.",
        minutes: 80,
        notes: `## Meaning and functions
A **roof** is the **uppermost part of a building**, covering and protecting it.
**Functions:** keeps out **rain, sun and wind**; **insulates** against heat and cold; gives **security and privacy**; collects rain water; adds to the **appearance**; braces the walls.

## Qualities of a good roof
strength and stability; weather resistance; durability; good insulation; fire resistance; adequate **drainage** (slope); good appearance; economy.

## Types of roofs
### By slope
- **flat roof** — slope less than about 10°; concrete slab or timber deck with waterproofing
- **pitched (sloping) roof**

### Pitched roofs
| Type | Description |
|---|---|
| **lean-to (mono-pitch)** | one slope, often against a higher wall |
| **couple roof** | pairs of rafters meeting at the ridge; short spans |
| **close-couple roof** | rafters tied at their feet by ceiling joists |
| **collar roof** | rafters tied by a collar higher up |
| **gable roof** | two slopes; triangular walls (gables) at the ends |
| **hipped roof** | slopes on all four sides; no gables |
| **gambrel** | a gable roof with two pitches on each side |
| **mansard** | hipped with two pitches on each side, the lower steeper |
| **butterfly (V-roof)** | two slopes falling inward to a valley |
| **saw-tooth (north-light)** | series of ridges with glazing — factories |
| **pyramid; conical** | over square and round buildings |
| **dome; vault; shell** | curved roofs |

## Roof members
| Member | Function |
|---|---|
| **wall plate** | timber on the wall top receiving the rafters |
| **common rafter** | sloping member from wall plate to ridge |
| **ridge board** | horizontal member at the apex |
| **hip rafter** | at the external corner of a hipped roof |
| **valley rafter** | at the internal angle where two slopes meet |
| **jack rafter** | short rafter from hip or valley |
| **purlin** | horizontal member supporting rafters between wall and ridge |
| **tie beam / ceiling joist** | ties the feet of the rafters; carries the ceiling |
| **king post; queen posts** | vertical members of traditional trusses |
| **strut** | inclined compression member |
| **collar** | tie between a pair of rafters above their feet |
| **batten** | carries tiles or sheets |
| **fascia board** | fixed to rafter ends; carries the gutter |
| **barge board** | finishes the gable edge |
| **eaves** | the lower overhanging edge |
| **soffit** | underside of the eaves |
| **gutter and downpipe** | drainage |

### Roof truss
A **truss** is a **framework of members arranged in triangles** that spans between walls: **king-post truss** (spans to about 8 m), **queen-post truss**, **Fink (W) truss**, **Howe** and **Pratt** trusses; steel and timber.

## Roof pitch
$$\\text{pitch} = \\frac{\\text{rise}}{\\text{span}}; \\qquad \\tan\\theta = \\frac{\\text{rise}}{\\tfrac12 \\times \\text{span}}$$
A roof of span 8 m and rise 2 m has pitch $\\tfrac14$ and slope angle $\\tan^{-1}(0.5) \\approx 27°$.
**Length of common rafter** $= \\sqrt{(\\tfrac12\\,\\text{span})^2 + \\text{rise}^2}$, plus the eaves overhang. For the roof above: $\\sqrt{4^2 + 2^2} \\approx 4.47$ m.

Pitch depends on the **covering** (tiles need steeper slopes than sheets), **rainfall**, span and appearance.

## Roof coverings
corrugated galvanised iron; **aluminium long-span** sheets; stone-coated steel tiles; clay and concrete tiles; fibre-cement sheets; slates; thatch; bituminous felt and concrete for flat roofs.

## Drawing a roof
- **roof plan:** outline with ridge, hips and valleys; arrows showing the fall
- **elevations:** projected from plan using the pitch
- **section:** shows truss members, sizes and fixing

## Identifying roofs in buildings
gable roofs on most bungalows; hipped roofs on many modern houses; flat roofs on offices and "decked" buildings; lean-to on extensions and sheds; domes on mosques and public buildings; saw-tooth on factories.`,
        examples: `**Example 1.** State three functions of a roof. *Answer:* **Protection from rain and sun, insulation** and **security**.

**Example 2.** A roof has a span of 10 m and a rise of 2.5 m. Find the pitch. *Answer:* $2.5 \\div 10 = \\mathbf{\\tfrac14}$.

**Example 3.** Which member runs along the apex of a pitched roof? *Answer:* The **ridge board**.`,
      },
      questions: [
        ["E", "The uppermost covering of a building is the", "roof", "foundation", "plinth", "lintel", "It protects the building from the weather."],
        ["E", "The horizontal member at the apex of a pitched roof is the", "ridge board", "wall plate", "purlin", "fascia", "The rafters meet at it."],
        ["E", "A roof with two slopes and triangular end walls is a", "gable roof", "hipped roof", "flat roof", "butterfly roof", "The end walls are the gables."],
        ["M", "The sloping members that run from the wall plate to the ridge are the", "common rafters", "purlins", "tie beams", "battens", "They carry the roof covering."],
        ["M", "The horizontal member that supports the rafters between the wall plate and the ridge is the", "purlin", "collar", "barge board", "soffit", "It reduces the unsupported length of the rafters."],
        ["M", "The lower overhanging edge of a roof is the", "eaves", "ridge", "hip", "valley", "It throws rain water clear of the wall."],
        ["M", "A framework of roof members arranged in triangles is a", "truss", "lintel", "plinth", "screed", "Triangulation makes it rigid."],
        ["H", "A roof has a span of 6 m and a rise of 4 m. The length of the common rafter, ignoring the overhang, is", "5 m", "7.2 m", "10 m", "3 m", "√(3² + 4²) = 5 m."],
        ["H", "The rafter at the internal angle where two roof slopes meet is the", "valley rafter", "hip rafter", "jack rafter", "common rafter", "Rain water collects along the valley."],
        ["H", "A roof with two pitches on each of its four sides, the lower being steeper, is a", "mansard roof", "gambrel roof", "saw-tooth roof", "lean-to roof", "It gives extra space within the roof."],
      ],
    },
    {
      week: 4,
      title: "Conventional Representation of Materials and Symbols",
      subtopics: ["Need for conventions", "Representation of materials", "Plumbing, electrical and mechanical symbols", "Application in drawings"],
      objectives: ["Explain why conventional representations are used", "Draw the conventional representation of common materials", "Identify and differentiate plumbing, electrical and mechanical symbols", "Apply the conventions in technical drawings"],
      lesson: {
        title: "The Sign Language of Drawing",
        summary: "Standard hatchings and symbols that show materials and fittings without words.",
        minutes: 40,
        notes: `## Why conventions?
**Conventional representations** are **standard, simplified ways of showing materials and components**. They **save time and space**, avoid long notes, make drawings **clear and uniform**, and are **understood everywhere** — they follow national and international standards (BS, ISO).

## Representation of materials (in section)
| Material | Convention |
|---|---|
| **brickwork** | diagonal hatching at 45° (often paired lines) |
| **blockwork** | diagonal hatching, wider spaced, or cross lines |
| **concrete** | small triangles and dots (aggregate) |
| **reinforced concrete** | concrete symbol with diagonal lines or dots for bars |
| **earth (subsoil)** | groups of short diagonal lines at alternating angles |
| **hardcore** | irregular stones / triangles |
| **wood (end grain)** | concentric rings with radial lines |
| **wood (along the grain)** | wavy grain lines |
| **metal** | plain 45° hatching |
| **glass** | short diagonal strokes or a few sloping lines |
| **insulation** | zigzag or looped line |
| **plaster / screed** | fine dots |
| **stone** | irregular broken lines |
| **water / liquid** | horizontal broken lines |
| **sand** | fine dots |
| **damp-proof course** | thick black line |

## Building conventions
doors (leaf with swing arc); windows (parallel thin lines in the wall); stairs (treads with an arrow pointing **up**); north point; levels; grid lines.

## Plumbing and sanitary symbols
| Fitting | Symbol idea |
|---|---|
| **water closet (WC)** | oval pan with a rectangular cistern |
| **wash hand basin (WHB)** | small rectangle or D-shape with a bowl |
| **bath** | long rectangle with rounded inner outline |
| **shower tray** | square with a diagonal cross |
| **sink** | rectangle with bowl and drainer lines |
| **urinal; bidet** | their own outline symbols |
| **gate valve / stop valve** | two triangles point to point ("bow-tie") on the pipe |
| **tap** | short line with a T head |
| **manhole / inspection chamber** | rectangle labelled MH or IC |
| **gully; soakaway; septic tank** | labelled G, SA, ST |
| **cold and hot water pipes** | lines marked CW and HW |
| **soil and vent pipe; rain-water pipe** | SVP; RWP |

## Electrical symbols
| Item | Symbol idea |
|---|---|
| **lamp (lighting point)** | circle with a cross |
| **one-way switch** | small circle with a short stroke |
| **two-way switch** | circle with two strokes |
| **socket outlet** | semicircle on a stem; number of ways marked |
| **fuse** | small rectangle on the line |
| **distribution board / consumer unit** | rectangle, half shaded |
| **earth** | three horizontal lines of decreasing length |
| **cell; battery** | long and short parallel lines |
| **resistor** | rectangle or zigzag |
| **capacitor** | two parallel lines |
| **bell; fan; cooker point** | their own standard symbols |
| **ammeter; voltmeter** | circles marked A and V |

## Mechanical conventions
| Feature | Convention |
|---|---|
| **external and internal threads** | thick and thin parallel lines |
| **springs** | zigzag lines or a simplified outline |
| **gears** | pitch circle as a thin chain line |
| **bearings** | rectangle with a diagonal cross |
| **knurling** | criss-cross or straight lines on part of the surface |
| **square on a shaft** | thin diagonals crossing the flat |
| **break lines** on long members | to shorten the view |
| **splines; holes on a pitch circle; welds; surface finish** | standard symbols |
| **repeated parts** | one drawn in full, the rest by centre lines |

## Differentiating the groups
- **plumbing** symbols show **pipes, valves and sanitary fittings**;
- **electrical** symbols show **points, switches and circuits**;
- **mechanical** conventions show **machine features**.
Each drawing carries a **legend (key)** listing the symbols used.

## Application
Use the same convention **throughout a set of drawings**; keep symbols **to scale and neat**; add a **legend**; follow the standard in force.`,
        examples: `**Example 1.** How is concrete shown in section? *Answer:* By **small triangles and dots** representing aggregate.

**Example 2.** What does the symbol of three horizontal lines of decreasing length represent? *Answer:* An **earth** connection.

**Example 3.** Why are conventional symbols used? *Answer:* They **save time and space** and are **universally understood**.`,
      },
      questions: [
        ["E", "Standard simplified ways of showing materials and fittings on drawings are", "conventional representations", "freehand sketches", "perspective views", "colour codes only", "They follow agreed standards."],
        ["E", "On a building plan, the abbreviation WC stands for", "water closet", "wall cavity", "wash cistern", "window casement", "It is the toilet pan."],
        ["E", "A circle with a cross in it on an electrical layout represents a", "lamp", "switch", "socket", "fuse", "It marks a lighting point."],
        ["M", "Concrete in section is conventionally represented by", "small triangles and dots", "concentric rings", "wavy lines", "horizontal broken lines", "These suggest the aggregate."],
        ["M", "The end grain of wood is shown in section by", "concentric rings with radial lines", "triangles and dots", "plain 45° hatching", "a thick black line", "It imitates the growth rings."],
        ["M", "The electrical symbol consisting of three horizontal lines of decreasing length represents", "earth", "a battery", "a fuse", "a lamp", "It shows connection to earth."],
        ["M", "A list on a drawing that explains the symbols used is the", "legend", "title block", "schedule of doors", "border", "It is also called the key."],
        ["H", "A valve on a pipe is conventionally shown by", "two triangles meeting point to point", "a circle with a cross", "a zigzag line", "concentric rings", "The 'bow-tie' symbol is placed on the pipe line."],
        ["H", "On a mechanical drawing, a flat (square) portion on a round shaft is indicated by", "thin diagonal lines crossing the flat", "heavy hatching", "a chain line circle", "dots", "The crossed diagonals mark a flat surface."],
        ["H", "The main advantage of using standard conventions is that drawings are", "understood uniformly by all who read them", "more colourful", "larger in size", "quicker to print only", "Everyone trained in the standard reads them the same way."],
      ],
    },
    {
      week: 6,
      title: "Blueprint Reading, Reproduction Services and Merchandising",
      subtopics: ["Reading building and engineering drawings", "Methods of reproducing drawings", "Setting up a blueprint reproduction centre", "Sourcing funds and managing the business"],
      objectives: ["Read and interpret building and engineering drawings and blueprints", "Describe the methods of reproducing drawings", "Explain how to set up a reproduction service centre", "Identify methods of sourcing funds and managing the service"],
      lesson: {
        title: "Reading and Reproducing Drawings as a Business",
        summary: "Interpreting drawings, copying them for use on site and in the workshop, and running a reproduction service.",
        minutes: 80,
        notes: `## Blueprints
A **blueprint** is a **reproduced copy of a technical drawing**. The name comes from the old process that gave **white lines on a blue background**; today it is used for any working copy of a plan.

## Reading building drawings
1. **Title block** — project, drawing title, scale, date, drawing number, revision.
2. **Site plan** — orientation (north point), boundaries, setbacks, access.
3. **Floor plans** — room names and sizes; wall thicknesses; doors and windows (tagged D1, W1); levels.
4. **Elevations** — heights, openings, finishes.
5. **Sections** — foundation, floor, wall, lintel and roof construction; heights.
6. **Details** and **schedules** (doors, windows, finishes).
7. **Structural drawings** — foundations, columns, beams, slabs, reinforcement.
8. **Services drawings** — electrical, plumbing, mechanical.
9. **Legend, notes and specifications**.

**Using a scale:** on a drawing at **1:100**, 1 cm represents 1 m; a room measuring 45 mm by 36 mm is **4.5 m by 3.6 m**.

## Reading engineering drawings
title block; projection symbol; views; sections; dimensions, tolerances and finishes; parts list; notes and abbreviations.

## Uses of blueprints
guide **construction and production**; **estimating** quantities and cost; obtaining **approval**; **communication** among client, designer and builder; a **record** for maintenance and legal purposes.

## Methods of reproducing drawings
| Method | Description |
|---|---|
| **tracing** | hand copying on tracing paper |
| **blueprinting (cyanotype)** | original on translucent paper exposed to light over sensitised paper; white lines on blue; now obsolete |
| **diazo (dyeline / whiteprint)** | exposed to ultraviolet light and developed with **ammonia**; dark lines on a white background |
| **photocopying (xerography)** | electrostatic copying, including large-format copiers |
| **plotting / large-format printing** | printing direct from CAD files on a plotter |
| **scanning** | converting paper drawings to digital files |
| **microfilming; digital archiving (PDF)** | storage and retrieval |
| **offset and screen printing** | large runs |

**Qualities of a good copy:** accuracy of scale; clear lines; no distortion; durable.

## Setting up a blueprint reproduction centre
### Services
plan printing and plotting; large-format photocopying and scanning; CAD drafting; binding and laminating; sale of drawing materials.

### Requirements
- **location** — near offices, construction firms, institutions, town-planning offices
- **premises** — secure, ventilated, with reliable **electricity** (generator, inverter)
- **equipment** — computers with CAD software; **plotter**; large-format scanner and copier; A3/A4 printers and photocopier; trimmer; binding and laminating machines
- **materials** — paper rolls, tracing paper, ink and toner
- **skilled staff**
- **registration** of the business; tax
- internet access for receiving files

## Sourcing funds
personal savings; family and friends; co-operatives and thrift groups; microfinance and bank loans; government small-business schemes (e.g. Bank of Industry, SMEDAN programmes); partnership; equipment leasing or hire purchase; grants.

## Merchandising and management
**Merchandising** is the **promotion and sale of goods and services**.
- **pricing** — cost of materials + running costs + profit; price per sheet size (A4 to A0)
- **promotion** — signboard, flyers, visits to firms, online presence, discounts for bulk
- **customer care** — speed, accuracy, **confidentiality** of clients' drawings
- **record keeping** — sales, expenses, stock
- **maintenance** of machines; stock control of paper and ink
- respect for **copyright** in drawings

## Paper sizes
**A0** 841 × 1189 mm; **A1** 594 × 841; **A2** 420 × 594; **A3** 297 × 420; **A4** 210 × 297. Each size is half the one before.`,
        examples: `**Example 1.** On a plan drawn at 1:50, a wall measures 80 mm. What is its actual length? *Answer:* $80 \\times 50 = 4000$ mm $= \\mathbf{4}$ **m**.

**Example 2.** Name two modern methods of reproducing drawings. *Answer:* **Plotting from CAD files** and **large-format photocopying**.

**Example 3.** Give three sources of funds for a reproduction centre. *Answer:* **Personal savings, co-operative loans** and **bank loans**.`,
      },
      questions: [
        ["E", "A reproduced copy of a technical drawing used on site is a", "blueprint", "sketch", "poster", "legend", "It is a working copy of the plan."],
        ["E", "The largest standard drawing sheet in the A series is", "A0", "A4", "A2", "A5", "Sizes halve from A0 downwards."],
        ["E", "Promoting and selling goods and services is", "merchandising", "drafting", "plotting", "tracing", "It covers pricing, promotion and sale."],
        ["M", "The reproduction process that uses ammonia to develop the print is", "diazo (dyeline)", "photocopying", "plotting", "scanning", "It gives dark lines on a white background."],
        ["M", "On a plan at a scale of 1:100, a line 65 mm long represents", "6.5 m", "65 m", "0.65 m", "650 m", "65 × 100 = 6500 mm."],
        ["M", "The machine that prints large drawings directly from CAD files is the", "plotter", "laminator", "trimmer", "digitiser", "It handles sheets up to A0."],
        ["M", "Which of these is a suitable source of funds for starting a blueprint centre?", "Co-operative society loan", "Customs duty", "Road tax", "Examination fees", "Members can borrow at low interest."],
        ["H", "The dimensions of an A3 sheet are", "297 × 420 mm", "210 × 297 mm", "420 × 594 mm", "594 × 841 mm", "A3 is twice the area of A4."],
        ["H", "The most suitable location for a blueprint reproduction centre is near", "construction firms and design offices", "a quiet farm", "a river bank", "a motor park only", "Its customers are builders and designers."],
        ["H", "A reproduction centre must keep clients' drawings confidential because the drawings are", "the client's intellectual property", "printed on thin paper", "always incomplete", "free of charge", "Copying or releasing them without permission breaches copyright and trust."],
      ],
    },
    {
      week: 9,
      title: "Computer-Aided Design (CAD)",
      subtopics: ["Basic skills in using CAD software", "Drawing and editing commands", "Producing technical drawings with CAD", "Manual drawing and CAD compared; advanced applications"],
      objectives: ["Demonstrate basic skills in a CAD program", "Use drawing and editing commands", "Produce a simple technical drawing using CAD", "Compare manual drawing with CAD and describe advanced applications"],
      lesson: {
        title: "Drawing with CAD",
        summary: "The interface, commands and workflow of CAD software, and how it compares with the drawing board.",
        minutes: 80,
        notes: `## The CAD screen
- **drawing area** — where the drawing appears
- **menu bar / ribbon and toolbars** — commands as icons
- **command line** — where commands and values are typed
- **status bar** — toggles such as GRID, SNAP, ORTHO, OSNAP
- **crosshair cursor**; **UCS icon** showing the X and Y axes
- **layers panel**; properties panel

## Setting up
start a new drawing; set **units** (millimetres) and **limits**; create **layers** (outline, centre, hidden, dimension, text) with their colours and line types; save with a clear name.

## Co-ordinate entry
| System | Example | Meaning |
|---|---|---|
| **absolute** | 50,30 | 50 along X and 30 along Y from the origin |
| **relative** | @40,0 | 40 to the right of the last point |
| **polar** | @60<45 | 60 units at 45° from the last point |

## Drawing commands
**LINE**, **POLYLINE**, **CIRCLE**, **ARC**, **RECTANGLE**, **POLYGON**, **ELLIPSE**, **SPLINE**, **HATCH**, **TEXT**.

## Editing (modify) commands
| Command | Action |
|---|---|
| **ERASE** | delete objects |
| **MOVE; COPY** | shift; duplicate |
| **ROTATE; SCALE** | turn; resize |
| **MIRROR** | reflect about a line |
| **OFFSET** | parallel copy at a set distance — walls, concentric circles |
| **TRIM; EXTEND** | cut back to, or lengthen to, a boundary |
| **FILLET; CHAMFER** | round or bevel a corner |
| **ARRAY** | repeat in rows and columns or round a circle |
| **STRETCH; BREAK; JOIN; EXPLODE** | alter objects |
| **UNDO / REDO** | reverse or restore a step |

## Drawing aids
- **GRID** and **SNAP** — visible dots and cursor steps
- **ORTHO** — restricts lines to horizontal and vertical
- **OSNAP (object snap)** — locks to endpoint, midpoint, centre, intersection, tangent, perpendicular
- **ZOOM** and **PAN** — change the view without altering the drawing
- **layers** — switch on or off; control colour, line type and weight
- **blocks** — stored symbols (doors, bolts) inserted when needed

## Annotation and output
**dimensioning** (linear, aligned, radius, diameter, angular); **text**; **title block**; set the **scale** in a layout; **plot / print** to paper or PDF.

## Producing a drawing — workflow
set up → draw centre lines → outlines → edit → hatch sections → dimension and annotate → check → save and plot.

## Manual drawing and CAD compared
| | Manual drawing | CAD |
|---|---|---|
| **tools** | board, tee-square, set squares, pencils | computer and software |
| **accuracy** | depends on skill | very high |
| **speed** | slow, especially repetition | fast; copy, mirror, array |
| **corrections** | erasing; redrawing | easy editing |
| **storage** | bulky paper | compact digital files |
| **reproduction and sharing** | copying, posting | printing, e-mail |
| **3-D and analysis** | difficult | built in |
| **cost** | cheap to start | costly equipment and training |
| **dependence** | none | electricity; risk of data loss |
| **learning** | builds understanding of projection | requires computer skills |

Manual drawing skills remain the **foundation**: CAD does not replace knowledge of projection and standards.

## Advanced applications
- **3-D solid and surface modelling**; assemblies with motion
- **building information modelling (BIM)** — one model yields plans, sections, schedules and costs
- **rendering, animation and walk-throughs**; virtual reality
- **analysis** — stress (finite element), energy and lighting
- **CAM and CNC** machining; **3-D printing** of prototypes
- **parametric design** — changing a dimension updates the whole model
- **collaboration** through the cloud

## Good practice
save often and **back up**; use layers and standards; name files clearly; check scale before plotting.`,
        examples: `**Example 1.** Which command produces a parallel copy of a line at a given distance? *Answer:* **OFFSET**.

**Example 2.** What does the entry @60<45 mean? *Answer:* A point **60 units from the last point at an angle of 45°** (polar co-ordinates).

**Example 3.** Give two advantages of CAD over manual drawing. *Answer:* **Greater accuracy** and **easy editing and storage**.`,
      },
      questions: [
        ["E", "In CAD, the command used to delete objects is", "ERASE", "OFFSET", "ARRAY", "ZOOM", "It removes selected objects from the drawing."],
        ["E", "The CAD command that enlarges or reduces the view of a drawing on screen is", "ZOOM", "SCALE", "STRETCH", "MOVE", "It changes the view, not the size of the objects."],
        ["E", "A CAD drawing aid that restricts lines to horizontal and vertical directions is", "ORTHO", "OSNAP", "GRID", "PAN", "It acts like a tee-square and set square."],
        ["M", "The command that makes a parallel copy of an object at a specified distance is", "OFFSET", "MIRROR", "TRIM", "FILLET", "It is used for wall thicknesses and concentric circles."],
        ["M", "The command that rounds off a corner with an arc is", "FILLET", "CHAMFER", "EXTEND", "ARRAY", "Chamfer gives a bevelled corner instead."],
        ["M", "An advantage of CAD over manual drawing is", "ease of editing and correction", "no need for electricity", "low cost of equipment", "no training required", "Changes are made without redrawing."],
        ["M", "Drawing objects on separate named levels that can be switched on or off uses", "layers", "blocks", "limits", "units", "Each layer has its own colour and line type."],
        ["H", "The co-ordinate entry @40,0 places a point", "40 units to the right of the last point", "at 40 on X from the origin only", "40 units at 0° from the origin", "40 units above the last point", "The @ sign means relative to the previous point."],
        ["H", "The object snap setting that locks the cursor exactly to the end of a line is", "endpoint", "midpoint", "centre", "tangent", "OSNAP modes ensure accurate joins."],
        ["H", "A single 3-D building model from which plans, sections and schedules are generated is a feature of", "building information modelling", "manual drafting", "microfilming", "diazo printing", "BIM links all views to one model."],
      ],
    },
  ],
};

export const ss3t3: TermPlan = {
  classCode: "SS3",
  term: 3,
  topics: [
    {
      week: 1,
      title: "Examination Revision: Plane Geometry",
      subtopics: ["Lines, angles and triangles", "Polygons and circles", "Tangents and loci", "Scales and areas"],
      objectives: ["Carry out basic constructions of lines, angles and triangles", "Construct regular polygons and circles related to triangles", "Construct tangents and common loci", "Construct plain and diagonal scales"],
      lesson: {
        title: "Geometrical Constructions in Review",
        summary: "A revision of the plane geometry constructions required in the examination.",
        minutes: 80,
        notes: `## Drawing instruments
drawing board, tee-square, set squares (45° and 30°/60°), compasses, dividers, protractor, scale rule, French curves, pencils (2H for construction, HB for outlines), eraser.

## Lines and angles
- **bisect a line:** arcs of equal radius (more than half) from each end; join the intersections — the **perpendicular bisector**
- **bisect an angle:** arc across both arms; equal arcs from those points; join the vertex to the intersection
- **perpendicular** from a point on or outside a line
- **parallel** lines with compasses or set squares
- **divide a line** into equal parts: draw an inclined line, step off equal divisions, join the last to the end and draw parallels
- construct **60°, 30°, 90°, 45°, 15°, 75°, 120°** with compasses

## Triangles
Types: **equilateral, isosceles, scalene, right-angled, acute, obtuse**. Constructed from three sides; two sides and the included angle; base, angles; perimeter and ratio of sides.
- **circumscribed circle** — centre where the **perpendicular bisectors of the sides** meet (circumcentre)
- **inscribed circle** — centre where the **angle bisectors** meet (incentre)
- **escribed circle** — touches one side and two sides produced

## Quadrilaterals
square, rectangle, rhombus, parallelogram, trapezium, kite — constructed from sides, diagonals and angles.

## Regular polygons
| Polygon | Sides | Interior angle |
|---|---|---|
| pentagon | 5 | 108° |
| hexagon | 6 | 120° |
| heptagon | 7 | about 128.6° |
| octagon | 8 | 135° |
Interior angle $= \\dfrac{(n - 2) \\times 180°}{n}$; exterior angle $= \\dfrac{360°}{n}$.
- **hexagon** in a circle: step the **radius** round the circumference six times
- **octagon** in a square: arcs from each corner with radius half the diagonal
- **general method** for any polygon on a given side

## Circles
Parts: centre, radius, diameter, chord, arc, sector, segment, tangent, circumference.
- find the centre of a circle (bisect two chords)
- circle through three points
- **tangent** at a point on a circle — perpendicular to the radius
- tangents from an external point
- **external (direct) and internal (transverse) common tangents** to two circles
- arcs **blending** lines and circles (fillet curves): centres found by adding or subtracting radii

## Loci
A **locus** is the **path traced by a point moving under given conditions**.
- **ellipse** — sum of distances from two foci is constant; methods: concentric circles, rectangle, trammel, foci
- **parabola** — equidistant from a focus and a directrix
- **hyperbola**
- **involute** — the end of a taut string unwound from a circle
- **cycloid** — a point on a circle rolling along a line
- **helix; Archimedean spiral**
- loci of **link mechanisms**

## Scales
- **plain scale** — two units (e.g. metres and decimetres)
- **diagonal scale** — three units (e.g. metres, decimetres, centimetres)
- **representative fraction (RF)** $= \\dfrac{\\text{length on drawing}}{\\text{actual length}}$; 20 mm to 1 m gives RF $= \\tfrac{1}{50}$

## Areas
reduce a polygon to a **triangle of equal area**; a triangle to a rectangle; a rectangle to a square; enlarging and reducing figures by ratio of sides or areas.

## Examination hints
leave **construction lines** faint but visible; outline boldly; work accurately with sharp pencils; letter neatly; manage time.`,
        examples: `**Example 1.** Find the interior angle of a regular hexagon. *Answer:* $\\dfrac{(6 - 2) \\times 180°}{6} = \\mathbf{120°}$.

**Example 2.** Where is the centre of the circle inscribed in a triangle? *Answer:* At the **intersection of the bisectors of the angles**.

**Example 3.** A scale of 20 mm to 1 m has what representative fraction? *Answer:* $\\mathbf{\\tfrac{1}{50}}$.`,
      },
      questions: [
        ["E", "A polygon with six equal sides is a regular", "hexagon", "pentagon", "octagon", "heptagon", "Its interior angles are 120° each."],
        ["E", "The instrument used with the drawing board for drawing horizontal lines is the", "tee-square", "protractor", "divider", "French curve", "It slides along the edge of the board."],
        ["E", "A straight line touching a circle at one point only is a", "tangent", "chord", "secant", "diameter", "It is perpendicular to the radius at the point of contact."],
        ["M", "The interior angle of a regular octagon is", "135°", "120°", "108°", "144°", "(8 − 2) × 180° ÷ 8."],
        ["M", "The centre of the circle that passes through the three corners of a triangle is found by bisecting", "the sides", "the angles", "the altitudes", "the medians only", "The perpendicular bisectors meet at the circumcentre."],
        ["M", "The path traced by a point moving so that the sum of its distances from two fixed points is constant is", "an ellipse", "a parabola", "an involute", "a cycloid", "The fixed points are the foci."],
        ["M", "A scale of 10 mm to 1 m has a representative fraction of", "1:100", "1:10", "1:1000", "10:1", "10 mm represents 1000 mm."],
        ["H", "The curve traced by the end of a taut string unwound from a circle is", "an involute", "a cycloid", "a helix", "an ellipse", "Gear-tooth profiles are based on it."],
        ["H", "A diagonal scale is used when measurements are required in", "three units", "one unit", "two units only", "no units", "For example metres, decimetres and centimetres."],
        ["H", "To draw a regular hexagon in a circle, the circumference is stepped off with a distance equal to the", "radius", "diameter", "chord of 90°", "tangent length", "The side of a regular hexagon equals the radius of its circumscribing circle."],
      ],
    },
    {
      week: 2,
      title: "Examination Revision: Orthographic and Pictorial Projection",
      subtopics: ["Orthographic projection", "Isometric projection", "Oblique projection", "Perspective"],
      objectives: ["Draw views in first- and third-angle orthographic projection", "Draw isometric views including circles", "Draw oblique views", "Explain one- and two-point perspective"],
      lesson: {
        title: "Projection in Review",
        summary: "A revision of the methods of representing three-dimensional objects on paper.",
        minutes: 80,
        notes: `## Orthographic projection
A method of showing an object by **separate views seen at right angles** to its faces, with parallel projectors.
- **front elevation**, **plan** and **end elevation**
- planes: **vertical plane (VP)**, **horizontal plane (HP)**, **XY line** where they meet

| | First angle | Third angle |
|---|---|---|
| object position | between observer and plane | plane between observer and object |
| plan | **below** the front elevation | **above** |
| view from the left | drawn on the **right** | drawn on the **left** |
| used in | Europe, Nigeria (traditionally) | America |

**Rules:** views are in line with one another; widths project between plan and end view through a **45° mitre line**; hidden edges are dashed; centre lines are chain lines.

### Auxiliary views
A view projected at right angles to an **inclined face** shows its **true shape**.

### True lengths
A line shows its true length only when **parallel to the plane** of projection; otherwise find it by rotation or auxiliary view.

## Pictorial projection
### Isometric
- three axes at **120°** to one another; receding axes at **30°** to the horizontal
- measurements made **along the isometric axes** only
- **circles appear as ellipses** — drawn by the **four-centre method** or by ordinates
- **isometric scale** shortens lengths to about **0.816** of true size; an **isometric drawing** uses true lengths for convenience
- non-isometric lines are located by co-ordinates

### Oblique
- the **front face is drawn true shape**; receding lines at **45°** (or 30°, 60°)
- **cavalier** — receding lines at **full** length (looks distorted)
- **cabinet** — receding lines at **half** length (more natural)
- circles on the front face remain circles — an advantage for round objects

### Axonometric / planometric
the true plan turned at 45°/45° or 30°/60° with verticals drawn up — used for building interiors.

### Perspective
shows objects **as the eye sees them**: parallel lines converge to **vanishing points** on the **horizon (eye level)**.
- **one-point** (parallel) — one face parallel to the picture plane
- **two-point** (angular) — viewed on a corner
- **three-point** — tall buildings
Terms: station point, picture plane, ground line, horizon line.

## Freehand sketching
proportions by eye; light construction; pictorial sketches from orthographic views and vice versa.

## Common examination tasks
- draw **three views** from a pictorial view (state the angle of projection)
- draw an **isometric** view from orthographic views
- add a **sectional** view
- **dimension** to standard

## Checks
count the edges and hidden lines; make sure views align; show the projection symbol; line in neatly.`,
        examples: `**Example 1.** At what angle are the receding axes of an isometric drawing drawn? *Answer:* **30°** to the horizontal.

**Example 2.** Distinguish cavalier from cabinet oblique projection. *Answer:* In **cavalier** the receding lines are full length; in **cabinet** they are **half** length.

**Example 3.** In third-angle projection, where is the plan drawn? *Answer:* **Above** the front elevation.`,
      },
      questions: [
        ["E", "The view of an object seen from above is the", "plan", "front elevation", "end elevation", "section", "It is projected onto the horizontal plane."],
        ["E", "In isometric drawing, the receding axes make an angle of", "30° with the horizontal", "45° with the horizontal", "60° with the horizontal", "90° with the horizontal", "The third axis is vertical."],
        ["E", "A drawing that shows an object as the eye actually sees it, with converging lines, is", "a perspective drawing", "an orthographic drawing", "an isometric drawing", "an oblique drawing", "Parallel lines meet at vanishing points."],
        ["M", "In third-angle projection, the plan is placed", "above the front elevation", "below the front elevation", "to the right of the end view", "behind the section", "Each view is drawn on the side from which it is seen."],
        ["M", "In oblique projection, the face drawn in its true shape is the", "front face", "top face", "side face", "bottom face", "Receding lines are drawn at an angle, usually 45°."],
        ["M", "Oblique projection in which the receding lines are drawn half full size is", "cabinet", "cavalier", "isometric", "planometric", "It looks less distorted than cavalier."],
        ["M", "In an isometric view, a circle appears as", "an ellipse", "a circle", "a parabola", "a straight line", "It is drawn by the four-centre method."],
        ["H", "The true shape of an inclined surface is obtained by drawing", "an auxiliary view", "a plan", "a cavalier view", "a freehand sketch", "The view is projected at right angles to the inclined face."],
        ["H", "The isometric scale reduces true lengths to approximately", "0.82 of full size", "0.50 of full size", "0.71 of full size", "0.90 of full size", "The ratio is about 0.816."],
        ["H", "A perspective drawing of a building viewed on its corner uses", "two vanishing points", "one vanishing point", "no vanishing point", "four vanishing points", "Each visible face recedes to its own point on the horizon."],
      ],
    },
    {
      week: 3,
      title: "Examination Revision: Developments, Intersections and Machine Drawing",
      subtopics: ["Surface development", "Intersection of solids", "Machine elements", "Sectional assembly drawing"],
      objectives: ["Draw the development of prisms, cylinders, pyramids and cones", "Explain lines of intersection between solids", "Identify and draw common machine elements", "Apply the rules of sectional assembly drawing"],
      lesson: {
        title: "Developments and Machine Drawing in Review",
        summary: "A revision of unfolding surfaces, interpenetration and the drawing of machine parts.",
        minutes: 80,
        notes: `## Solids
**prisms** and **cylinders** (uniform cross-section); **pyramids** and **cones** (taper to an apex); **sphere**. A **frustum** is the part left when the top of a cone or pyramid is cut off parallel to the base; a **truncated** solid is cut by an inclined plane.

## Surface development
The **development** of a solid is its **surface laid out flat** — the pattern from which sheet-metal or card objects are made.
| Solid | Method | Development |
|---|---|---|
| **prism** | parallel-line | rectangles side by side; length = perimeter |
| **cylinder** | parallel-line | a rectangle of length $\\pi D$ and height $h$ |
| **pyramid** | radial-line | triangles radiating from the apex; radius = **true length of slant edge** |
| **cone** | radial-line | a sector of radius = **slant height** $l$; angle $\\theta = \\dfrac{r}{l} \\times 360°$ |
| **transition pieces** | triangulation | square-to-round ducts |

*A cone of base radius 30 mm and slant height 90 mm develops into a sector of angle* $\\dfrac{30}{90} \\times 360° = 120°$.

For **truncated** solids, mark the heights of the cut on each generator and transfer them to the development. Allow for **seams and laps** in practice.

**Applications:** funnels, buckets, ducts, hoppers, chimneys, tins, cartons.

## Intersection (interpenetration)
When two solids meet, the **line (curve) of intersection** is found by plotting points common to both surfaces, using **cutting planes** or generators: cylinder with cylinder (equal and unequal diameters; at right angles or inclined), prism with prism, cylinder with cone. Needed for pipe joints and ductwork.

## Machine elements
- **threads and fasteners** — bolts, nuts, studs, screws, washers, rivets (heads: snap, pan, countersunk)
- **locking devices** — lock nut, spring washer, split pin, tab washer
- **keys** — rectangular, square, **gib-head**, **feather**, **Woodruff**; keyways in shaft and hub
- **cotters and pins**
- **couplings** — muff (sleeve), **flanged**, flexible, universal
- **bearings** — plain (bush), **plummer block**, ball and roller
- **pulleys and belts; gears** — spur, bevel, helical, worm; rack and pinion
- **cams and followers** — convert rotary into reciprocating motion; displacement diagrams
- **welded joints** — butt, lap, fillet, with standard symbols
- **springs** — compression, tension, torsion, leaf

## Riveted joints
**lap joint** and **butt joint** (single or double cover strap); single and double riveted; **chain** and **zigzag** arrangement. Pitch about 3d; margin about 1.5d.

## Sectional assembly drawing
1. Draw the main body on its centre lines.
2. Add parts in order of assembly.
3. Hatch cut surfaces at 45°; **reverse the direction** for adjoining parts.
4. Do **not** hatch shafts, bolts, nuts, keys, pins, rivets, webs and spokes cut lengthwise.
5. Show threads conventionally.
6. Number parts; compile the **parts list**.
7. Add overall dimensions, title and scale.

## Dimensioning and tolerances
functional dimensions; limits and fits (clearance, transition, interference); surface-finish symbols.

## Examination hints
plan the sheet layout; work from centre lines; leave construction lines; allocate time by marks; print titles and notes in neat capitals.`,
        examples: `**Example 1.** What shape is the development of a cylinder? *Answer:* A **rectangle** whose length equals the **circumference** ($\\pi D$).

**Example 2.** A cone has a base radius of 20 mm and a slant height of 80 mm. Find the angle of its development. *Answer:* $\\dfrac{20}{80} \\times 360° = \\mathbf{90°}$.

**Example 3.** Which key is semicircular in shape? *Answer:* The **Woodruff key**.`,
      },
      questions: [
        ["E", "The surface of a solid laid out flat is its", "development", "elevation", "section", "projection plane", "It is the pattern for making the object."],
        ["E", "The development of the curved surface of a cylinder is a", "rectangle", "sector", "triangle", "circle", "Its length equals the circumference."],
        ["E", "A machine element used to prevent a pulley from rotating on its shaft is a", "key", "washer", "rivet", "spring", "It fits in keyways in the shaft and hub."],
        ["M", "The development of a cone is a", "sector of a circle", "rectangle", "square", "trapezium", "Its radius is the slant height of the cone."],
        ["M", "The part of a cone that remains when the top is cut off parallel to the base is a", "frustum", "prism", "sector", "segment", "It has two parallel circular faces."],
        ["M", "A key with a semicircular shape that fits into a curved keyseat is the", "Woodruff key", "gib-head key", "feather key", "saddle key", "It aligns itself in the shaft."],
        ["M", "The device that converts rotary motion into reciprocating motion of a follower is a", "cam", "pulley", "coupling", "bearing", "The follower rises and falls with the cam profile."],
        ["H", "A cone has a base radius of 30 mm and a slant height of 90 mm. The angle of the sector in its development is", "120°", "90°", "60°", "180°", "30 ÷ 90 × 360°."],
        ["H", "The development of a pyramid is drawn by the", "radial-line method", "parallel-line method", "triangulation only", "four-centre method", "The edges radiate from the apex at true length."],
        ["H", "A riveted joint in which two plates overlap each other is a", "lap joint", "butt joint", "fillet weld", "dowel joint", "In a butt joint the plates meet edge to edge with cover straps."],
      ],
    },
    {
      week: 4,
      title: "Examination Revision: Building Drawing and Examination Technique",
      subtopics: ["Building drawings and elements", "Foundations, walls, floors and stairs", "Arches, roofs and services", "Examination technique"],
      objectives: ["Recall the types of building drawings and their scales", "Recall the elements of building construction", "Recall arches, roofs and service symbols", "Apply good technique in the examination"],
      lesson: {
        title: "Building Drawing and the Final Examination",
        summary: "A revision of building drawing, with advice on presentation and timing in the papers.",
        minutes: 80,
        notes: `## Building drawings
site plan; block plan; **floor plan**; **elevations**; **sections**; roof plan; details; working drawings; schedules. Scales: 1:50 and 1:100 for general drawings; 1:10 and 1:20 for details; 1:200 and 1:500 for site plans.

## Elements of a building
### Substructure
- **foundation** — transmits loads to the ground: **strip** (under walls), **pad** (under columns), **raft** (whole building on weak ground), **pile** (deep, poor soils)
- **hardcore**, **oversite concrete**, **damp-proof course and membrane**

### Superstructure
- **walls** — load-bearing and partition; block, brick, concrete; **bonding** (stretcher, English, Flemish)
- **openings** — doors (flush, panelled, ledged-and-braced, louvred), windows (casement, sliding, louvre, fixed); **lintels**, **sills**, frames
- **columns and beams**
- **floors** — solid ground floor; suspended timber and concrete floors; finishes (screed, tiles, terrazzo)
- **stairs** — **tread**, **riser**, **going**, **nosing**, **string**, **landing**, **handrail**, **baluster**; types — straight flight, dog-leg, quarter-turn, spiral; comfortable rule: 2 × riser + going ≈ 600 mm
- **roof** — flat, lean-to, gable, hipped; members; coverings
- **ceilings**, plaster and render, paint

### Arches
semicircular, segmental, flat, pointed (equilateral, lancet, drop), Tudor, three-centred; parts — span, rise, voussoir, keystone, springing, intrados, extrados.

### Services
water supply; drainage — soil and waste pipes, inspection chambers, septic tank and soakaway; electrical — lighting and socket points, distribution board, earthing; symbols and legend.

## Reading a simple plan
identify rooms, sizes and levels; door and window tags; wall thicknesses; section line; orientation; scale.

## Computer and CAD
hardware, software; CAD commands; advantages over manual drawing; plotting; BIM.

## Blueprint and business
reproduction methods; setting up a centre; sources of funds; pricing and customer care.

## Examination technique
### Before drawing
- read **all** questions; choose those you can complete
- note the **marks and time** for each
- plan the **layout** so that the drawing fits the sheet

### While drawing
- sharp pencils: hard (2H) for construction, softer (HB) for outlines
- draw **centre lines first**
- keep **construction lines faint** but do not erase them
- use **correct line types** and thicknesses
- draw **circles and arcs before** straight lines when lining in
- dimension to standard; state **scale** and **projection**
- print in neat, uniform capitals; add a title

### Accuracy and neatness
measure carefully; keep the tee-square against the board edge; keep hands and instruments clean; avoid smudging by working from top to bottom.

### Objective paper
know definitions, conventions, formulae (interior angles, pitch, RF, sector angle) and abbreviations.

### Time
allot time in proportion to marks; leave a few minutes to check for missing lines, dimensions and labels.

## Careers
draughtsman; CAD technician; architect; civil, mechanical and electrical engineer; quantity surveyor; builder; surveyor; product and industrial designer; town planner; technical teacher.`,
        examples: `**Example 1.** Which foundation is used under a row of walls on good ground? *Answer:* A **strip foundation**.

**Example 2.** Name four parts of a staircase. *Answer:* **Tread, riser, landing** and **handrail**.

**Example 3.** Which should be lined in first, arcs or straight lines? *Answer:* **Arcs and circles** — straight lines are then joined to them.`,
      },
      questions: [
        ["E", "The part of a building that transmits its load to the ground is the", "foundation", "roof", "lintel", "ceiling", "It is below ground level."],
        ["E", "The horizontal part of a stair on which the foot is placed is the", "tread", "riser", "baluster", "string", "The riser is the vertical part."],
        ["E", "A person who prepares technical drawings is a", "draughtsman", "mason", "plumber", "welder", "It is a career in technical drawing."],
        ["M", "A foundation consisting of a continuous strip of concrete under walls is a", "strip foundation", "pad foundation", "pile foundation", "raft foundation", "It is the commonest for bungalows."],
        ["M", "A foundation that covers the whole area under a building on weak soil is a", "raft foundation", "strip foundation", "pad foundation", "stepped foundation", "It spreads the load over a large area."],
        ["M", "The vertical member between two treads of a stair is the", "riser", "going", "nosing", "landing", "It sets the height of each step."],
        ["M", "In lining in a drawing, it is best to draw first the", "circles and arcs", "border", "dimension lines", "title", "Straight lines are easier to join to curves than the reverse."],
        ["H", "A stair has risers of 150 mm. Using the rule 2 × riser + going ≈ 600 mm, a suitable going is", "300 mm", "150 mm", "450 mm", "600 mm", "600 − 2 × 150 = 300 mm."],
        ["H", "Deep foundations driven or bored into the ground to reach firm strata are", "pile foundations", "strip foundations", "pad foundations", "raft foundations", "They are used on poor soils and for heavy structures."],
        ["H", "In an examination, construction lines should be", "left faint but visible", "erased completely", "drawn thick and dark", "drawn in ink", "Examiners award marks for the method shown."],
      ],
    },
  ],
};
