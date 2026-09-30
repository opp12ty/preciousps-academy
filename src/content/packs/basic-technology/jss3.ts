import type { TermPlan } from "../types";

/** JSS3 Basic Technology — original Precious PS content; Term 3 is structured BECE revision. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Orthographic projection in first angle",
        subtopics: ["Arrangement of views in first angle", "Projecting views of stepped and cut blocks", "Showing hidden detail and centre lines", "Reading orthographic drawings"],
        objectives: ["Arrange the three views correctly in first-angle projection", "Project views of stepped and cut blocks", "Show hidden detail and centre lines correctly", "Interpret orthographic drawings of simple objects"],
        lesson: {
          title: "Drawing Three Views in First Angle",
          summary: "Produce and read complete first-angle orthographic drawings.",
          minutes: 45,
          notes: `## Arrangement (first angle)
- **Front elevation (FE)**: top left of the sheet.
- **End elevation (EE)**: to the **right** of the FE if viewed from the **left** (views are placed on the side **opposite** the viewing direction).
- **Plan**: directly **below** the FE.
Heights are projected **horizontally** between FE and EE; lengths are projected **vertically** between FE and plan; widths are transferred between plan and EE with a **45° mitre line** or compasses.

## Procedure
1. Choose the direction of viewing for the FE (usually showing the most detail).
2. Draw the FE lightly.
3. Project across for the EE and down for the plan.
4. Use the 45° line to transfer widths.
5. Add **hidden detail** (dashed lines) and **centre lines** (chain lines) for holes and curves.
6. Darken outlines; add dimensions and the **first-angle symbol**.

## Reading drawings
To imagine the object, compare corresponding points in all three views: a line in one view may represent an edge, a surface seen edge-on, or the limit of a curved surface.

## Common errors
Views not aligned; wrong placement of views; missing hidden lines; outlines and construction lines of the same darkness.`,
          examples: `**Example 1.** In first angle, a view from the left of the FE is placed where? *Answer:* to the **right** of the front elevation.

**Example 2.** How are widths transferred between the plan and the end elevation? *Answer:* using a **45° mitre line** (or compasses).

**Example 3.** How is a hole that cannot be seen in the plan shown? *Answer:* with **dashed (hidden) lines** and a centre line.`,
        },
        questions: [
          ["E", "In first-angle projection, the plan is placed", "below the front elevation", "above the front elevation", "to the left of the plan", "on another sheet", "This is the first-angle layout."],
          ["E", "Hidden edges in orthographic views are shown with", "dashed lines", "thick continuous lines", "chain lines", "wavy lines", "Dashes show hidden detail."],
          ["E", "The centre of a hole is shown with a", "chain line", "dashed line", "thick line", "wavy line", "Centre lines are thin chain lines."],
          ["M", "In first angle, the view from the left is placed", "to the right of the front elevation", "to the left of the front elevation", "above the plan", "below the plan", "Views go opposite the viewing direction."],
          ["M", "Heights are projected between the front elevation and end elevation", "horizontally", "vertically", "at 45°", "freehand", "Heights line up across the sheet."],
          ["M", "Widths are transferred between the plan and end elevation using a", "45° mitre line", "French curve", "protractor only", "scale of 2 : 1", "The mitre line turns widths through 90°."],
          ["M", "The front elevation is usually chosen to show", "the most detail of the object", "the least detail", "only hidden edges", "the underside", "It is the main view."],
          ["H", "Which is a common error in orthographic drawing?", "views that are not aligned with each other", "using chain lines for centres", "darkening outlines", "adding a title block", "Views must be in projection."],
          ["H", "A symbol near the title block showing a truncated cone in two views indicates", "the method of projection used", "the scale", "the paper size", "the date", "It shows first or third angle."],
          ["H", "Lengths are projected between the front elevation and the plan", "vertically", "horizontally", "at 30°", "in circles", "The plan is directly below the FE."],
        ],
      },
      {
        week: 2,
        title: "Sectional drawing",
        subtopics: ["Purpose of sections", "Cutting planes", "Hatching", "Full and half sections"],
        objectives: ["Explain why sectional views are used", "Show cutting planes correctly", "Apply correct hatching", "Draw full and half sections of simple objects"],
        lesson: {
          title: "Showing the Inside of Objects",
          summary: "Use sectional views to show internal details clearly.",
          minutes: 45,
          notes: `## Purpose
A **section** shows an object as if it had been **cut through** by an imaginary **cutting plane** and the front part removed. It reveals **internal details** clearly, replacing confusing hidden lines.

## Cutting plane
- Shown in the adjacent view by a **thin chain line with thick ends**.
- **Arrows** show the viewing direction.
- Labelled with letters, e.g. **A–A**; the sectional view is titled **"SECTION A–A"**.

## Hatching
Cut surfaces are shown by **hatching**: thin parallel lines, usually at **45°**, about **3–4 mm** apart.
- Different parts in an assembly are hatched in **different directions** or spacing.
- Hatching of the same part must be **consistent** in all areas.
- Hidden lines are usually **omitted** in sectional views.
- **Not sectioned** even when cut lengthwise: shafts, bolts, nuts, pins, keys, ribs and webs.

## Types of section
- **Full section**: the cutting plane passes right through the object.
- **Half section**: a quarter is removed; one half shows the outside and the other half the inside (for symmetrical objects).
- **Part (broken-out) section**: only a small area is cut to show a detail, bounded by a freehand wavy line.
- **Revolved section**: the cross-section is rotated and drawn on the view (e.g. spokes, beams).`,
          examples: `**Example 1.** At what angle is hatching usually drawn? *Answer:* **45°**.

**Example 2.** Why are sectional views used? *Answer:* To show **internal details** clearly instead of many hidden lines.

**Example 3.** Is a bolt hatched when the cutting plane passes along its length? *Answer:* **No** — bolts, shafts and pins are not sectioned lengthwise.`,
        },
        questions: [
          ["E", "A sectional view shows an object as if it had been", "cut through", "painted", "enlarged", "rotated only", "Sections reveal internal parts."],
          ["E", "Cut surfaces in a section are shown by", "hatching", "dashed lines", "chain lines", "shading with colour only", "Thin parallel lines show cut surfaces."],
          ["E", "Hatching lines are usually drawn at", "45°", "90°", "10°", "0°", "45° is standard."],
          ["M", "A cutting plane is shown by a", "thin chain line with thick ends", "thick continuous line", "dashed line", "freehand wavy line", "Arrows show the viewing direction."],
          ["M", "In a sectional view, hidden lines are usually", "omitted", "doubled", "drawn thick", "coloured", "The section already shows the inside."],
          ["M", "A section in which the cutting plane passes right through the object is a", "full section", "half section", "part section", "revolved section", "The whole object is cut."],
          ["M", "A half section is suitable for objects that are", "symmetrical", "irregular", "very thin", "transparent", "One half shows outside, one half inside."],
          ["H", "Which part is NOT sectioned when cut along its length?", "a bolt", "a casting body", "a pulley rim", "a housing", "Shafts, bolts and pins are left unhatched."],
          ["H", "Two different parts in an assembly section are hatched", "in different directions or spacing", "exactly the same way", "without lines", "with dashed lines", "This distinguishes the parts."],
          ["H", "A part section is bounded by a", "freehand wavy line", "thick chain line", "centre line", "dimension line", "It shows a small cut-away area."],
        ],
      },
      {
        week: 3,
        title: "Development of surfaces",
        subtopics: ["Meaning of development", "Development of prisms", "Development of cylinders", "Development of pyramids and cones"],
        objectives: ["Explain the meaning of surface development", "Develop the surfaces of prisms and cylinders", "Develop the surfaces of pyramids and cones", "State the uses of developments"],
        lesson: {
          title: "Unfolding Solids",
          summary: "Draw flat patterns that fold up into solid shapes.",
          minutes: 45,
          notes: `## Meaning
A **development** (net) is the **surface of a solid unfolded** onto a flat sheet. When cut out and folded, it forms the solid.

## Uses
Making boxes, cartons, ducts, funnels, buckets, cans, chimneys, and sheet-metal and packaging work.

## Prisms
The development of a prism consists of its **rectangular side faces** in a row plus its two **end faces**.
- Cube: 6 equal squares.
- Rectangular box: 6 rectangles in matching pairs.
- **Tabs** (flaps) are added for gluing or joining.

## Cylinders
The curved surface unrolls into a **rectangle**:
- height = height of the cylinder
- length = **circumference** $= \\pi d$
Add two circles for the ends.

## Pyramids
Draw the **true length** of a sloping edge as a radius; step off the base edges round the arc and join them to the apex.

## Cones
The curved surface develops into a **sector** of a circle:
- radius = **slant height** $l$
- sector angle $= \\frac{r}{l} \\times 360°$, where $r$ is the base radius.

## Truncated solids
If a solid is cut at an angle, find the true lengths of the cut edges from the elevation and transfer them to the development.`,
          examples: `**Example 1.** A cylinder has diameter 70 mm and height 100 mm. What rectangle forms its curved surface? *Answer:* 100 mm by $\\pi \\times 70 \\approx 220$ mm (using $\\pi = \\frac{22}{7}$).

**Example 2.** A cone has base radius 30 mm and slant height 90 mm. Find the sector angle. *Answer:* $\\frac{30}{90} \\times 360 = 120$ degrees.

**Example 3.** How many faces are in the development of a cube? *Answer:* **6 squares**.`,
        },
        questions: [
          ["E", "The surface of a solid unfolded onto a flat sheet is its", "development", "section", "elevation", "plan", "Developments are nets of solids."],
          ["E", "The development of a cube consists of", "6 squares", "4 squares", "8 triangles", "2 circles only", "A cube has six square faces."],
          ["E", "Developments are used in making", "cartons and sheet-metal containers", "concrete foundations", "electric cables", "wood joints only", "They give flat patterns."],
          ["M", "The curved surface of a cylinder develops into a", "rectangle", "sector", "triangle", "square always", "It unrolls into a rectangle."],
          ["M", "The length of the rectangle in a cylinder's development equals the cylinder's", "circumference", "radius", "height only", "diameter", "It wraps round once."],
          ["M", "The curved surface of a cone develops into a", "sector of a circle", "rectangle", "square", "trapezium", "Its radius is the slant height."],
          ["M", "Small flaps added to a development for joining are called", "tabs", "hatches", "lintels", "sprockets", "Tabs are glued or fixed."],
          ["H", "A cylinder has diameter 70 mm. Using $\\pi = \\frac{22}{7}$, the length of its development is", "220 mm", "110 mm", "70 mm", "440 mm", "$\\frac{22}{7} \\times 70 = 220$."],
          ["H", "A cone has base radius 30 mm and slant height 90 mm. What is the sector angle of its development?", "120°", "30°", "90°", "270°", "$\\frac{30}{90} \\times 360 = 120$."],
          ["H", "To develop a pyramid, the radius used for the arc is the", "true length of a sloping edge", "base width", "vertical height", "diagonal of the base", "Sloping edges must be drawn true length."],
        ],
      },
      {
        week: 4,
        title: "Building drawing",
        subtopics: ["Types of building drawings", "Floor plans", "Elevations and sections of buildings", "Building symbols and scales"],
        objectives: ["Identify the drawings used in building construction", "Draw a simple floor plan to scale", "Interpret elevations and sections of buildings", "Use common building drawing symbols"],
        lesson: {
          title: "Drawings for Buildings",
          summary: "Read and draw simple building plans, elevations and sections.",
          minutes: 45,
          notes: `## Types of building drawings
| Drawing | Shows |
|---|---|
| **site plan** | the plot, building position, boundaries, roads, north point |
| **floor plan** | a horizontal section about 1 m above the floor: rooms, walls, doors, windows |
| **elevations** | external views: front, rear and sides |
| **sections** | vertical cuts showing foundations, floor, walls, roof heights |
| **roof plan** | roof shape and slopes |
| **details** | enlarged views of special parts |

## Scales
- Site plans: 1 : 200 or 1 : 500
- Floor plans, elevations, sections: **1 : 50** or **1 : 100**
- Details: 1 : 5, 1 : 10, 1 : 20

## Floor plan conventions
- Walls: two parallel thick lines (e.g. 225 mm external, 150 mm internal walls).
- **Doors**: a gap with a line showing the leaf and an **arc** showing the swing.
- **Windows**: thin lines across the wall opening.
- Rooms labelled with names and dimensions.
- **North point** shown.

## Other symbols
Staircases (with an arrow showing "up"), sanitary fittings (WC, basin, bath), kitchen sink, electrical points.

## Professionals
Building drawings are prepared by **architects** and **draughtsmen**, and used by builders, engineers and quantity surveyors. Approval from the planning authority is required before building.`,
          examples: `**Example 1.** Which drawing shows the arrangement of rooms? *Answer:* the **floor plan**.

**Example 2.** How is the swing of a door shown on a plan? *Answer:* with an **arc**.

**Example 3.** A room 4 m by 3 m is drawn at 1 : 100. What size is it on paper? *Answer:* **40 mm by 30 mm**.`,
        },
        questions: [
          ["E", "The drawing showing the arrangement of rooms in a building is the", "floor plan", "front elevation", "site plan", "roof plan", "It is a horizontal section."],
          ["E", "External views of a building are called", "elevations", "floor plans", "details", "sections", "Front, rear and side elevations."],
          ["E", "Building drawings are mainly prepared by", "architects and draughtsmen", "plumbers", "painters", "farmers", "They design and draw buildings."],
          ["M", "A common scale for floor plans is", "1 : 100", "1 : 1", "10 : 1", "1 : 10 000", "1 : 50 or 1 : 100 is typical."],
          ["M", "On a floor plan, the swing of a door is shown by", "an arc", "a dashed line", "a hatched area", "a chain line", "The arc shows the opening path."],
          ["M", "The drawing that shows the plot, boundaries and position of the building is the", "site plan", "section", "elevation", "detail", "It locates the building on the land."],
          ["M", "A vertical cut through a building showing foundations and roof heights is a", "section", "floor plan", "site plan", "roof plan", "Sections show vertical construction."],
          ["H", "A room 4 m by 3 m is drawn at 1 : 100. Its drawn size is", "40 mm by 30 mm", "400 mm by 300 mm", "4 mm by 3 mm", "4000 mm by 3000 mm", "Divide the real sizes in mm by 100."],
          ["H", "A floor plan is taken as a horizontal section at about", "1 m above the floor", "ground level", "roof level", "foundation level", "This cuts through doors and windows."],
          ["H", "Which symbol on a site plan shows the orientation of the building?", "north point", "door arc", "hatching", "centre line", "It shows compass direction."],
        ],
      },
      {
        week: 5,
        title: "Domestic electrical installation",
        subtopics: ["Components of house wiring", "Lighting and power circuits", "Protective devices and earthing", "Electrical safety rules"],
        objectives: ["Identify components of domestic wiring", "Distinguish lighting circuits from power circuits", "Explain the functions of fuses, breakers and earthing", "Apply electrical safety rules at home and school"],
        lesson: {
          title: "Wiring a Home",
          summary: "Describe domestic electrical installations and how they are protected.",
          minutes: 45,
          notes: `## Components
- **Service cable** from the supply company to the building.
- **Energy meter** (prepaid or postpaid) records energy used in kWh.
- **Main switch** and **consumer unit (distribution board)** containing **circuit breakers** or fuses for each circuit.
- **Cables** in **conduit** pipes or trunking.
- **Switches, sockets, lamp holders, ceiling roses, junction boxes**.

## Circuits
| Circuit | Use | Typical protection |
|---|---|---|
| **lighting circuit** | lamps | smaller cable, lower-rated breaker (e.g. 6 A) |
| **power (socket) circuit** | sockets for appliances | thicker cable, higher-rated breaker (e.g. 16–20 A) |
| **cooker / water heater circuit** | heavy appliances | separate high-rated circuit |
All outlets are connected in **parallel** so each receives full voltage.

## Protective devices
- **Fuse**: a thin wire that **melts** when the current is too high.
- **Miniature circuit breaker (MCB)**: switches off automatically on overload; can be **reset**.
- **Residual current device (RCD)**: switches off quickly if current leaks to earth (protects people from shock).
- **Earthing**: connects metal parts of appliances to the ground so that fault current flows safely away and trips the protective device.

## Wire colours (current standard)
live — **brown**; neutral — **blue**; earth — **green-and-yellow** (older installations: red, black, green).

## Safety rules
Switches must be on the **live** wire; never overload sockets; replace damaged cables; use qualified electricians; switch off the mains before any work.`,
          examples: `**Example 1.** Which device can be reset after it trips? *Answer:* a **circuit breaker (MCB)**.

**Example 2.** Why are switches placed on the live wire? *Answer:* So that the appliance is **dead (safe)** when switched off.

**Example 3.** Why are socket outlets wired in parallel? *Answer:* So each receives the **full voltage** and works independently.`,
        },
        questions: [
          ["E", "The device that records the electrical energy used in a house is the", "energy meter", "fuse", "ceiling rose", "junction box", "Meters measure kWh."],
          ["E", "The live wire in current standard colours is", "brown", "blue", "green-and-yellow", "white", "Brown marks the live conductor."],
          ["E", "Cables in buildings are often run inside", "conduit pipes", "water pipes", "gas pipes", "drain pipes", "Conduit protects cables."],
          ["M", "Which protective device melts when the current is too high?", "fuse", "circuit breaker", "switch", "socket", "The fuse wire melts."],
          ["M", "A circuit breaker differs from a fuse because it", "can be reset after tripping", "melts", "never trips", "increases the current", "No replacement is needed."],
          ["M", "Socket outlets are connected in", "parallel", "series", "a single loop with lamps in series", "no particular way", "Each gets full voltage."],
          ["M", "The neutral wire in current standard colours is", "blue", "brown", "green-and-yellow", "red", "Blue is neutral."],
          ["H", "Switches are placed on the live wire so that", "the appliance is not live when switched off", "the bulb is brighter", "less cable is used", "the meter runs faster", "Breaking the live makes the appliance safe."],
          ["H", "A device that switches off quickly when current leaks to earth is the", "residual current device (RCD)", "ceiling rose", "energy meter", "lamp holder", "It protects people from shock."],
          ["H", "Earthing the metal case of an appliance ensures that", "fault current flows safely to the ground and trips the protection", "the appliance uses less power", "the case becomes live", "the fuse never blows", "It prevents the case staying live."],
        ],
      },
      {
        week: 6,
        title: "Electronics: transistors and simple circuits",
        subtopics: ["The transistor", "The transistor as a switch", "Sensors: LDRs and thermistors", "Integrated circuits"],
        objectives: ["Identify the terminals of a transistor", "Explain how a transistor acts as a switch", "Describe light- and temperature-sensing circuits", "State the advantages of integrated circuits"],
        lesson: {
          title: "Transistors and Sensors",
          summary: "Explain how transistors and sensors make circuits respond automatically.",
          minutes: 45,
          notes: `## The transistor
A **transistor** is a semiconductor device with three terminals: **base (B)**, **collector (C)** and **emitter (E)**. Common types: **NPN** and **PNP**.
A **small current into the base** controls a **much larger current** between collector and emitter.

## Uses
- **Switch**: turns a lamp, buzzer, motor or relay on and off automatically.
- **Amplifier**: increases the strength of weak signals (radios, microphones, speakers).

## The transistor as a switch
- Base current **off** → transistor **off** → no collector current → output off.
- Base current **on** (above about 0.7 V at the base for silicon) → transistor **on** → output on.

## Sensors
| Sensor | Behaviour | Circuit use |
|---|---|---|
| **LDR** (light-dependent resistor) | resistance **falls** as light increases | automatic street lights, burglar alarms |
| **thermistor** | resistance changes with temperature (usually falls as temperature rises) | fire alarms, thermostats |
| **moisture sensor** | conducts when wet | rain alarms, plant watering |
A sensor in a **potential divider** with a resistor controls the base voltage of the transistor.

## Integrated circuits (ICs)
An **IC ("chip")** contains many transistors, resistors and other components on a tiny piece of silicon. Examples: the **555 timer**, microprocessors, memory chips.
Advantages: very small, cheap in quantity, reliable, low power.`,
          examples: `**Example 1.** Name the three terminals of a transistor. *Answer:* **base, collector, emitter**.

**Example 2.** What happens to the resistance of an LDR in bright light? *Answer:* It **falls**.

**Example 3.** Which sensor would you use in a circuit that switches on a light at night? *Answer:* an **LDR**.`,
        },
        questions: [
          ["E", "The three terminals of a transistor are", "base, collector and emitter", "anode, cathode and grid", "live, neutral and earth", "positive, negative and neutral", "They are labelled B, C and E."],
          ["E", "A transistor can be used as a switch or an", "amplifier", "fuse", "battery", "resistor colour code", "It can amplify signals."],
          ["E", "A chip containing many components on a small piece of silicon is an", "integrated circuit", "LDR", "fuse", "ceiling rose", "ICs combine many components."],
          ["M", "The resistance of an LDR in bright light", "falls", "rises", "stays the same", "becomes infinite", "More light, lower resistance."],
          ["M", "Which sensor is used in a circuit that switches on a light at night?", "LDR", "thermistor only", "microphone", "loudspeaker", "It responds to light level."],
          ["M", "A thermistor responds to changes in", "temperature", "light", "sound", "magnetism", "Its resistance varies with heat."],
          ["M", "In a transistor, a small base current controls a", "larger collector current", "smaller emitter voltage only", "battery charge", "fuse rating", "This is transistor action."],
          ["H", "A silicon transistor switches on when the base voltage exceeds about", "0.7 V", "12 V", "230 V", "0.01 V", "About 0.7 V is needed."],
          ["H", "Which circuit would use a thermistor?", "a fire alarm", "a street light that responds to darkness", "a rain alarm", "a doorbell push", "Temperature rise triggers the alarm."],
          ["H", "An advantage of integrated circuits is that they are", "small, reliable and cheap in quantity", "very large", "unreliable", "made only of wood", "Miniaturisation is their strength."],
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
        title: "Forging, casting and heat treatment",
        subtopics: ["Forging and forging tools", "Sand casting", "Hardening and tempering", "Annealing and normalising"],
        objectives: ["Describe forging processes and tools", "Describe sand casting", "Explain hardening and tempering of steel", "Explain annealing and normalising"],
        lesson: {
          title: "Shaping and Treating Metals with Heat",
          summary: "Explain how metals are forged, cast and heat-treated.",
          minutes: 45,
          notes: `## Forging
Shaping **hot metal** by hammering or pressing. The **blacksmith** uses:
- **hearth (forge)** with a blower to heat metal
- **anvil** on which metal is hammered
- **tongs** for holding hot metal
- **sledge hammer** and **hand hammer**
- **swage** and **fuller** for shaping
Forging processes: **drawing down** (lengthening and thinning), **upsetting** (thickening), **bending**, **twisting**, **punching**. Forged parts are **strong** because the grain follows the shape.

## Sand casting
1. Make a **pattern** (a copy of the object, slightly larger to allow for shrinkage).
2. Ram moulding sand around the pattern in a **moulding box** (cope and drag).
3. Remove the pattern to leave a cavity; cut a **runner** and **riser**.
4. Pour **molten metal**; allow to cool.
5. Break the mould (**fettling**) and clean the casting.
Used for engine blocks, pots, machine bases. Aluminium pots made by local artisans are sand-cast.

## Heat treatment of steel
| Process | Method | Result |
|---|---|---|
| **hardening** | heat to red heat, then **quench** quickly in water or oil | very hard but brittle |
| **tempering** | reheat hardened steel to a lower temperature, then cool | reduces brittleness; tough |
| **annealing** | heat, then cool **very slowly** (in the furnace or ashes) | soft, easy to work |
| **normalising** | heat, then cool in **still air** | refines grain; removes stresses |
Tempering colours (straw, brown, purple, blue) indicate temperature on polished steel.`,
          examples: `**Example 1.** Which heat treatment makes steel very hard? *Answer:* **hardening** (heating and quenching).

**Example 2.** Why is hardened steel tempered? *Answer:* To **reduce brittleness** and make it tough.

**Example 3.** Why is a casting pattern made slightly larger than the object? *Answer:* To allow for **shrinkage** as the metal cools.`,
        },
        questions: [
          ["E", "Shaping hot metal by hammering is called", "forging", "casting", "soldering", "filing", "Blacksmiths forge metal."],
          ["E", "The heavy block on which hot metal is hammered is the", "anvil", "tongs", "hearth", "riser", "The anvil supports the work."],
          ["E", "Pouring molten metal into a mould is called", "casting", "forging", "annealing", "turning", "Castings take the shape of the mould."],
          ["M", "Heating steel and quenching it quickly is", "hardening", "annealing", "normalising", "galvanising", "Rapid cooling hardens steel."],
          ["M", "Reheating hardened steel to reduce brittleness is", "tempering", "hardening", "casting", "upsetting", "Tempering adds toughness."],
          ["M", "Heating metal and cooling it very slowly to soften it is", "annealing", "hardening", "quenching", "forging", "Slow cooling softens metal."],
          ["M", "Tongs are used in forging to", "hold hot metal", "heat the metal", "measure temperature", "cut threads", "They grip hot work safely."],
          ["H", "A casting pattern is made slightly larger than the finished object to allow for", "shrinkage of the metal on cooling", "painting", "rusting", "filing marks only", "Metal contracts as it cools."],
          ["H", "Making a bar thicker and shorter by forging is called", "upsetting", "drawing down", "punching", "fettling", "Upsetting increases thickness."],
          ["H", "Normalising involves heating steel and cooling it", "in still air", "very slowly in the furnace", "quickly in water", "in molten tin", "Air cooling refines the grain."],
        ],
      },
      {
        week: 2,
        title: "Woodwork machines",
        subtopics: ["Circular saw", "Band saw and jigsaw", "Planing and thicknessing machines", "Wood lathe and safety"],
        objectives: ["Identify common woodwork machines", "State the uses of each machine", "Describe the safety guards and rules for machines", "Compare hand tools with machines"],
        lesson: {
          title: "Machines in the Woodwork Shop",
          summary: "Identify woodwork machines, their uses and safe practices.",
          minutes: 40,
          notes: `## Common woodwork machines
| Machine | Use |
|---|---|
| **circular saw** | ripping and cross-cutting timber and boards quickly |
| **band saw** | cutting curves and straight cuts with a continuous blade |
| **jigsaw** (portable) | cutting curves and shapes in boards |
| **surface planer** | planing the face and edge of timber flat and square |
| **thicknesser** | planing timber to an even thickness |
| **mortiser** | cutting mortises |
| **drill press** | accurate drilling |
| **wood lathe** | turning round objects: legs, bowls, handles |
| **sanding machine** | smoothing surfaces |
| **router** | cutting grooves and decorative edges |

## Safety with machines
- Only use machines with the **teacher's permission** and after training.
- Keep **guards** in place; use **push sticks** to feed small pieces into saws.
- Wear goggles and ear protection; tie back long hair; no loose clothing.
- Never reach over a moving blade; wait for machines to **stop completely**.
- Switch off at the **isolator** before changing blades or cleaning.
- Keep the floor around machines clear; ensure good lighting.

## Hand tools vs machines
Machines are **faster**, more **accurate** for repetitive work and less tiring, but are **expensive**, need electricity and maintenance, and are **more dangerous** if misused.`,
          examples: `**Example 1.** Which machine is used for turning chair legs? *Answer:* the **wood lathe**.

**Example 2.** Why are push sticks used on a circular saw? *Answer:* To keep the **hands away from the blade**.

**Example 3.** Which machine planes timber to an even thickness? *Answer:* the **thicknesser**.`,
        },
        questions: [
          ["E", "Which machine is used for turning round objects like chair legs?", "wood lathe", "circular saw", "thicknesser", "mortiser", "The lathe rotates the work."],
          ["E", "Which machine cuts curves with a continuous blade?", "band saw", "thicknesser", "surface planer", "drill press", "The band saw's loop blade can follow curves."],
          ["E", "Machine guards should be", "kept in place", "removed for speed", "painted only", "stored in a cupboard", "Guards protect the operator."],
          ["M", "Push sticks are used on a circular saw to", "keep hands away from the blade", "sharpen the blade", "measure the wood", "clean the table", "They feed small pieces safely."],
          ["M", "Which machine planes timber to an even thickness?", "thicknesser", "band saw", "jigsaw", "router", "It sets a uniform thickness."],
          ["M", "Which machine cuts decorative edges and grooves?", "router", "anvil", "band saw only", "mortiser", "Routers shape edges."],
          ["M", "Before changing a saw blade, the operator must", "switch off at the isolator", "increase the speed", "remove the guard while running", "wet the blade", "The machine must be dead."],
          ["H", "Which is a disadvantage of machines compared with hand tools?", "they are expensive and dangerous if misused", "they are slower", "they are less accurate", "they need no maintenance", "Cost and risk are higher."],
          ["H", "The surface planer is used to", "make the face and edge of timber flat and square", "cut mortises", "turn bowls", "drill holes", "It prepares true reference surfaces."],
          ["H", "Why must you wait for a machine to stop completely before clearing waste?", "moving parts can cause injury", "waste is hot", "to save electricity", "the wood may rot", "Blades keep spinning after switch-off."],
        ],
      },
      {
        week: 3,
        title: "The motor vehicle",
        subtopics: ["Main parts of a motor vehicle", "The engine and fuel system", "Transmission and steering", "Braking, cooling and lubrication systems"],
        objectives: ["Identify the main systems of a motor vehicle", "Describe the functions of the engine and fuel system", "Explain the transmission and steering systems", "Describe the braking, cooling and lubrication systems"],
        lesson: {
          title: "How a Car Works",
          summary: "Identify the main systems of a motor vehicle and their functions.",
          minutes: 45,
          notes: `## Main systems
| System | Main parts | Function |
|---|---|---|
| **engine** | cylinders, pistons, crankshaft, valves | produces power from fuel |
| **fuel system** | tank, pump, filter, injectors/carburettor | supplies fuel |
| **ignition system** (petrol) | battery, coil, spark plugs | ignites the fuel–air mixture |
| **transmission** | clutch, gearbox, propeller shaft, differential | carries power to the wheels and changes speed/torque |
| **steering** | steering wheel, column, rack and pinion | changes direction |
| **braking** | pedal, master cylinder, brake pads/shoes, discs/drums | slows and stops the vehicle |
| **cooling** | radiator, water pump, fan, thermostat | removes excess engine heat |
| **lubrication** | oil sump, oil pump, oil filter | reduces friction and wear |
| **electrical** | battery, alternator, lights, starter motor | provides electrical power |
| **suspension** | springs, shock absorbers | gives a smooth ride |

## Transmission
- **Clutch**: connects and disconnects the engine and gearbox.
- **Gearbox**: gives different speeds and more pulling force in low gears.
- **Differential**: lets the driving wheels turn at **different speeds** when cornering.

## Brakes
Most cars use **hydraulic brakes**: pressing the pedal pushes brake fluid, which forces the pads or shoes against the discs or drums. The **handbrake** is mechanical.

## Daily checks (the car owner)
Engine oil level, coolant level, brake fluid, tyre pressure and condition, lights and battery terminals.`,
          examples: `**Example 1.** Which part keeps the engine from overheating? *Answer:* the **radiator** (cooling system).

**Example 2.** What does the differential do? *Answer:* It allows the driving wheels to turn at **different speeds** when the car turns.

**Example 3.** Name one daily check on a car. *Answer:* **engine oil level** (or tyre pressure, coolant).`,
        },
        questions: [
          ["E", "Which part of a car produces power from fuel?", "engine", "radiator", "steering wheel", "brake pad", "The engine burns fuel."],
          ["E", "Which system slows and stops a vehicle?", "braking system", "cooling system", "fuel system", "lighting system", "Brakes create friction."],
          ["E", "The radiator is part of the", "cooling system", "fuel system", "steering system", "braking system", "It removes engine heat."],
          ["M", "The clutch is used to", "connect and disconnect the engine from the gearbox", "cool the engine", "store fuel", "steer the wheels", "It allows gear changes."],
          ["M", "In a petrol engine, the fuel–air mixture is ignited by the", "spark plugs", "radiator", "oil filter", "shock absorbers", "Spark plugs produce the spark."],
          ["M", "Shock absorbers and springs belong to the", "suspension system", "braking system", "fuel system", "ignition system", "They smooth the ride."],
          ["M", "The oil sump, oil pump and oil filter belong to the", "lubrication system", "cooling system", "steering system", "exhaust system", "They circulate engine oil."],
          ["H", "The differential allows the driving wheels to", "turn at different speeds when cornering", "turn at the same speed always", "stop the engine", "cool the brakes", "The outer wheel travels farther on a bend."],
          ["H", "Most car foot brakes work by", "hydraulic pressure of brake fluid", "air in the tyres", "engine oil pressure", "radiator water", "Fluid transmits pedal force."],
          ["H", "The part that charges the battery while the engine runs is the", "alternator", "starter motor", "carburettor", "thermostat", "It generates electricity."],
        ],
      },
      {
        week: 4,
        title: "Metalwork machine tools",
        subtopics: ["Drilling machines", "The centre lathe", "Grinding machines", "Machine safety"],
        objectives: ["Describe the parts and uses of drilling machines", "Identify the main parts and operations of a centre lathe", "State the uses of grinding machines", "Apply safety rules for metalwork machines"],
        lesson: {
          title: "Machines for Metalwork",
          summary: "Describe drilling machines, lathes and grinders and their safe use.",
          minutes: 45,
          notes: `## Drilling machines
- **Pillar (pedestal) drill** and **bench drill**: the drill bit is held in a **chuck** and fed down with a lever. The work is held in a **machine vice**, never by hand.
- Use the correct **speed**: large drills and hard metals need **slower** speeds.
- Use **cutting fluid** to cool and lubricate.

## The centre lathe
Used to make **cylindrical** parts (bolts, shafts, pins).
Main parts: **headstock** (with the chuck and spindle), **tailstock**, **bed**, **carriage** with **tool post**, **lead screw**.
Operations:
| Operation | Result |
|---|---|
| **facing** | a flat end surface |
| **parallel (plain) turning** | reduces the diameter evenly |
| **taper turning** | a cone shape |
| **drilling** (from the tailstock) | holes along the axis |
| **knurling** | a patterned grip (e.g. on handles) |
| **thread cutting** | screw threads |
| **parting off** | cuts the finished part from the bar |

## Grinding machines
The **bench/pedestal grinder** uses abrasive wheels to sharpen tools (chisels, drills, punches) and remove small amounts of metal. Keep the **tool rest** close to the wheel; wear goggles.

## Safety
Wear goggles; no loose clothing, rings or long hair near rotating parts; remove the **chuck key** before starting the lathe; never measure work while it is rotating; clear swarf (chips) with a brush, not the hand; stop the machine before making adjustments.`,
          examples: `**Example 1.** Which lathe operation produces a flat end surface? *Answer:* **facing**.

**Example 2.** Why must the chuck key be removed before starting the lathe? *Answer:* It can **fly out** and cause serious injury.

**Example 3.** Should a large drill run faster or slower than a small one? *Answer:* **slower**.`,
        },
        questions: [
          ["E", "Which machine is used to make cylindrical parts such as bolts and shafts?", "centre lathe", "band saw", "thicknesser", "anvil", "The lathe turns work against a tool."],
          ["E", "On a drilling machine, the drill bit is held in the", "chuck", "tailstock only", "anvil", "tongs", "The chuck grips the bit."],
          ["E", "A bench grinder is mainly used to", "sharpen tools", "cut wood", "weld metal", "measure diameters", "Abrasive wheels sharpen edges."],
          ["M", "Which lathe operation produces a flat end surface?", "facing", "knurling", "taper turning", "parting off", "Facing squares the end."],
          ["M", "Knurling on a lathe produces", "a patterned grip surface", "a screw thread", "a hole", "a flat end", "It gives a textured grip."],
          ["M", "Work being drilled on a pillar drill should be held", "in a machine vice", "by hand", "between the knees", "with pliers loosely", "Spinning work can injure hands."],
          ["M", "Cutting chips produced by machining are called", "swarf", "slag", "sawdust only", "flux", "Swarf is sharp and hot."],
          ["H", "The chuck key must be removed before starting a lathe because", "it can fly out and cause injury", "it slows the lathe", "it cuts the metal", "it cools the chuck", "It would be thrown out at speed."],
          ["H", "Compared with small drills, large drills should be run at", "slower speeds", "faster speeds", "the same speed always", "no speed", "Large diameters have higher surface speeds."],
          ["H", "Cutting the finished part off the bar on a lathe is called", "parting off", "facing", "knurling", "taper turning", "A parting tool separates the part."],
        ],
      },
      {
        week: 5,
        title: "Maintenance of vehicles and generators",
        subtopics: ["Routine vehicle maintenance", "Servicing a generator", "Tyres and batteries", "Safe handling of fuels"],
        objectives: ["Describe routine checks and servicing of vehicles", "Describe how to service a small generator", "Explain the care of tyres and batteries", "Handle fuels safely"],
        lesson: {
          title: "Keeping Engines Running",
          summary: "Carry out routine checks on vehicles and generators safely.",
          minutes: 40,
          notes: `## Routine vehicle checks
- **Engine oil**: check with the **dipstick**; change at intervals stated by the manufacturer.
- **Coolant** level in the radiator reservoir (check only when the engine is **cold**).
- **Brake fluid** and **power-steering fluid** levels.
- **Tyres**: pressure, tread depth, cuts and bulges.
- **Lights**, horn, wipers and mirrors.
- **Fan belt** tension and condition.
- Regular **servicing**: oil and filter change, air filter, spark plugs, brakes.

## Servicing a small generator
1. Check and top up the **engine oil** before starting; change it regularly.
2. Clean or replace the **air filter**.
3. Clean or replace the **spark plug** (petrol generators).
4. Use clean fuel; drain old fuel if stored for long.
5. Keep cooling fins and vents clean.
6. Run it on a level surface, **outdoors**, away from windows (carbon monoxide danger).
7. Never refuel while the generator is **running** or hot.

## Tyres
Correct pressure improves safety, fuel economy and tyre life. Under-inflation causes overheating and wear on the edges; over-inflation causes wear in the centre and poor grip.

## Batteries
Keep terminals clean and tight (remove white corrosion with warm water and baking soda); keep the battery secure; top up distilled water in non-sealed batteries.

## Fuel safety
Store fuel in approved containers, away from heat and sparks; no smoking; keep a fire extinguisher nearby.`,
          examples: `**Example 1.** How is engine oil level checked? *Answer:* with the **dipstick**.

**Example 2.** Why should a generator never be used indoors? *Answer:* Its exhaust contains poisonous **carbon monoxide**.

**Example 3.** Why should the radiator cap not be opened when the engine is hot? *Answer:* **Hot coolant under pressure** can spray out and scald.`,
        },
        questions: [
          ["E", "Engine oil level is checked with the", "dipstick", "spark plug", "fan belt", "radiator cap", "The dipstick shows the oil level."],
          ["E", "A generator should be operated", "outdoors away from windows", "in the bedroom", "in a closed kitchen", "under the bed", "This avoids carbon monoxide poisoning."],
          ["E", "Fuel should be stored", "in approved containers away from heat", "in open buckets near a fire", "in drinking bottles", "under direct sunlight", "Fuel is highly flammable."],
          ["M", "Why should a generator not be refuelled while running?", "Fuel may catch fire on hot parts.", "It uses more fuel.", "It becomes noisy.", "The oil changes colour.", "Hot engines can ignite spilled fuel."],
          ["M", "Under-inflated tyres cause", "overheating and extra wear on the edges", "better grip always", "wear only in the centre", "lower fuel use", "Low pressure flexes the sidewalls."],
          ["M", "White corrosion on battery terminals can be cleaned with", "warm water and baking soda", "engine oil", "petrol", "sand and cement", "Baking soda neutralises the acid."],
          ["M", "In a petrol generator, which part should be cleaned or replaced during servicing to ensure good ignition?", "spark plug", "tyre", "radiator", "brake pad", "Spark plugs wear with use."],
          ["H", "Why should the radiator cap not be opened when the engine is hot?", "hot coolant under pressure can scald", "the coolant freezes", "the engine stops", "the battery discharges", "Pressure releases hot liquid."],
          ["H", "Correct tyre pressure improves", "safety, fuel economy and tyre life", "engine noise", "exhaust smoke", "oil consumption", "Proper inflation benefits several areas."],
          ["H", "Which is the main danger of generator exhaust?", "carbon monoxide poisoning", "too much oxygen", "rusting of walls", "excess light", "Carbon monoxide is odourless and deadly."],
        ],
      },
      {
        week: 6,
        title: "Technology and entrepreneurship",
        subtopics: ["Design process", "Costing a project", "Marketing technical products", "Opportunities for self-employment"],
        objectives: ["Describe the stages of the design process", "Estimate the cost of a simple project", "Explain basic marketing of products", "Identify self-employment opportunities in technology"],
        lesson: {
          title: "From Idea to Business",
          summary: "Design, cost and market a simple technical product.",
          minutes: 45,
          notes: `## The design process
1. **Identify the need/problem** — e.g. students need a portable book stand.
2. **Design brief** — a short statement of what is to be made.
3. **Research/investigation** — sizes, materials, existing products.
4. **Generate ideas** — sketches of several possible solutions.
5. **Select and develop** the best idea — working drawings.
6. **Plan and make** — list of materials, tools and steps.
7. **Test and evaluate** — does it meet the brief? What could be improved?

## Costing a project
Total cost = **materials** + **labour** + **overheads** (electricity, tool wear, transport).
Selling price = total cost + **profit**.
*Example: materials ₦4000, labour ₦2000, overheads ₦1000 → total ₦7000. With 20% profit: $7000 \\times 1.2 = 8400$ naira.*

## Marketing
- Know your **customers** and their needs.
- Set a fair **price**.
- **Advertise**: posters, social media, word of mouth.
- Provide good **quality** and after-sales service.

## Self-employment opportunities
carpentry and furniture making, welding and fabrication, auto mechanics, electrical installation, phone and computer repair, solar installation, tiling, plumbing, block making, aluminium window fabrication, 3D printing.
Skills needed: technical competence, record keeping, customer relations, honesty and reliability.`,
          examples: `**Example 1.** Materials cost ₦4000, labour ₦2000 and overheads ₦1000. What is the total cost? *Answer:* **₦7000**.

**Example 2.** What is a design brief? *Answer:* a **short statement** of what is to be designed and made.

**Example 3.** Name one self-employment opportunity in technology. *Answer:* **solar installation** (or welding, phone repair, carpentry).`,
        },
        questions: [
          ["E", "The first stage of the design process is to", "identify the need or problem", "sell the product", "paint the product", "evaluate the finished product", "Design starts with a need."],
          ["E", "A short statement of what is to be designed and made is a", "design brief", "receipt", "title block", "cutting list only", "The brief guides the design."],
          ["E", "Which is a self-employment opportunity in technology?", "welding and fabrication", "being a student", "sleeping", "watching television", "It is a technical trade."],
          ["M", "Checking whether a finished product meets the design brief is called", "evaluation", "research", "marketing", "costing", "Evaluation judges success."],
          ["M", "The total cost of a project includes materials, labour and", "overheads", "profit only", "advertising only", "the design brief", "Overheads are indirect costs."],
          ["M", "Materials cost ₦4000, labour ₦2000 and overheads ₦1000. What is the total cost?", "₦7000", "₦6000", "₦5000", "₦8000", "₦4000 + ₦2000 + ₦1000 = ₦7000."],
          ["M", "Advertising products through posters and social media is part of", "marketing", "forging", "casting", "seasoning", "Marketing reaches customers."],
          ["H", "A product costs ₦7000 to make. What is the selling price if 20% profit is added?", "₦8400", "₦7200", "₦7020", "₦9000", "$7000 \\times 1.2 = 8400$ naira."],
          ["H", "Drawing several sketches of possible solutions is the stage of", "generating ideas", "evaluation", "costing", "marketing", "Many ideas are explored first."],
          ["H", "Which quality is most important for sustaining a small technical business?", "reliability and good workmanship", "charging the highest possible price", "ignoring customers' complaints", "using poor materials", "Satisfied customers return."],
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
        title: "BECE revision: materials and processes",
        subtopics: ["Wood and manufactured boards", "Metals and alloys", "Plastics, rubber, ceramics and glass", "Processes: joining, finishing and heat treatment"],
        objectives: ["Recall properties and uses of engineering materials", "Classify materials correctly", "Revise joining and finishing processes", "Answer BECE-style questions on materials"],
        lesson: {
          title: "BECE Revision: Materials",
          summary: "Revise engineering materials and processes for the BECE.",
          minutes: 45,
          notes: `## Quick facts
- **Hardwoods** (broad-leaved trees): iroko, mahogany, obeche. **Softwoods** (conifers): pine, fir.
- **Seasoning** removes moisture; air seasoning is slow, kiln seasoning is fast.
- Manufactured boards: plywood, chipboard, hardboard.
- **Ferrous** metals contain iron (steel, cast iron); **non-ferrous** do not (copper, aluminium, zinc).
- **Alloys**: brass (copper + zinc), bronze (copper + tin), steel (iron + carbon), solder (tin-based).
- **Thermoplastics** can be reshaped (PVC, polythene); **thermosets** cannot (Bakelite, melamine).
- Rubber is **vulcanised** with sulphur.
- Ceramics: clay, shaped and **fired**; glass: sand + soda ash + limestone, then **annealed**.

## Processes
- Joining wood: butt, halving, mortise and tenon, dovetail, housing, dowel.
- Joining metal: nuts and bolts (temporary); rivets, soldering, brazing, welding (permanent).
- Finishing: sanding along the grain; primer → undercoat → top coat; varnish, stain, polish.
- Heat treatment: **hardening** (quench), **tempering** (reduce brittleness), **annealing** (slow cool, soften).

## Common BECE errors
Confusing malleability (sheets) with ductility (wires); confusing brass and bronze; thinking obeche is a softwood.`,
          examples: `**Example 1.** *Bronze is an alloy of:* **copper and tin**.

**Example 2.** *Which plastic can be softened and reshaped: Bakelite or PVC?* *Answer:* **PVC** (thermoplastic).

**Example 3.** *Which joint is used for drawers?* *Answer:* **dovetail joint**.`,
        },
        questions: [
          ["E", "Bronze is an alloy of", "copper and tin", "copper and zinc", "iron and carbon", "lead and zinc", "Brass is copper and zinc."],
          ["E", "Which of these is a thermoplastic?", "PVC", "Bakelite", "melamine", "epoxy resin", "PVC can be reshaped when heated."],
          ["E", "Mahogany is a", "hardwood", "softwood", "manufactured board", "metal", "It comes from a broad-leaved tree."],
          ["M", "Which is a permanent method of joining metals?", "welding", "nut and bolt", "machine screw", "wing nut", "Welded joints cannot be undone."],
          ["M", "The property that allows metal to be drawn into wires is", "ductility", "malleability", "brittleness", "hardness", "Ductile metals stretch into wires."],
          ["M", "Kiln seasoning differs from air seasoning because it is", "faster and controlled", "slower and cheaper", "done in water", "done without heat", "Kilns speed up drying."],
          ["M", "Glass is annealed to", "remove stresses and prevent cracking", "colour it", "harden it by quenching", "make it opaque", "Slow cooling relieves stresses."],
          ["H", "Heating steel to red heat and quenching it in water", "hardens it", "softens it", "tempers it", "anneals it", "Quenching produces hardness."],
          ["H", "Which pair consists of non-ferrous metals only?", "copper and aluminium", "steel and copper", "cast iron and zinc", "wrought iron and lead", "Neither contains iron."],
          ["H", "Which joint is used to fix shelves into the sides of a bookcase?", "housing joint", "butt joint", "dovetail joint", "halving joint", "Shelves slot into housings."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: technical drawing",
        subtopics: ["Instruments and lines", "Geometric construction", "Pictorial drawing", "Orthographic projection, sections and scale"],
        objectives: ["Recall drawing instruments, lines and conventions", "Revise geometric constructions", "Distinguish oblique and isometric drawings", "Answer BECE-style questions on projection and scale"],
        lesson: {
          title: "BECE Revision: Drawing",
          summary: "Revise technical drawing conventions and constructions for the BECE.",
          minutes: 45,
          notes: `## Instruments and lines
- T-square: horizontal lines; set squares: 30°, 45°, 60°; compasses: circles; dividers: transferring measurements.
- Pencils: H grades (hard, light), HB (lettering), B grades (soft, dark).
- Lines: thick continuous (outlines), thin continuous (dimensions, construction), dashed (hidden), thin chain (centre lines), chain with thick ends (cutting plane), wavy (breaks).

## Constructions
- 60°: equal radii; 30°: bisect 60°; 90°: perpendicular; 45°: bisect 90°.
- Hexagon in a circle: step the radius six times.
- Incircle: bisect angles; circumcircle: perpendicular bisectors of sides.
- Each interior angle of a regular polygon: $\\frac{(n-2) \\times 180}{n}$ degrees.

## Pictorial drawing
| Oblique | Isometric |
|---|---|
| front face true shape | no true-shape face |
| receding lines usually 45° | axes at 30° |
| cabinet: depth halved | lengths true along the axes |

## Orthographic projection
First angle: plan **below** FE; left view on the **right**. Third angle: plan **above** FE.
Sections show internal details; hatching at 45°; bolts and shafts are not sectioned lengthwise.

## Scale
Reduction (1 : 50), full size (1 : 1), enlargement (2 : 1). Dimensions always show **real** sizes.

## Developments
Cylinder → rectangle of length $\\pi d$; cone → sector of radius equal to the slant height.`,
          examples: `**Example 1.** *In first-angle projection, the plan is placed:* **below the front elevation**.

**Example 2.** *Each interior angle of a regular octagon is:* $\\frac{6 \\times 180}{8} = 135$ degrees.

**Example 3.** *Hidden edges are shown by:* **dashed lines**.`,
        },
        questions: [
          ["E", "Which instrument is used for drawing circles?", "compasses", "T-square", "set square", "protractor", "Compasses draw arcs and circles."],
          ["E", "Hidden edges are shown by", "dashed lines", "thick continuous lines", "chain lines", "wavy lines", "Dashes indicate hidden detail."],
          ["E", "In isometric drawing, horizontal edges are drawn at", "30°", "45°", "60°", "90°", "The isometric axes are at 30°."],
          ["M", "Each interior angle of a regular octagon is", "135°", "120°", "108°", "144°", "$\\frac{6 \\times 180}{8} = 135$."],
          ["M", "A 45° angle is constructed by", "bisecting a right angle", "bisecting a 60° angle", "stepping the radius twice", "bisecting a 30° angle", "Half of 90° is 45°."],
          ["M", "In third-angle projection, the plan is placed", "above the front elevation", "below the front elevation", "to the right of the end view always", "on the title block", "Third angle puts the plan on top."],
          ["M", "In cabinet oblique drawing, receding lines are drawn", "half their true length", "full length", "twice their length", "at 30°", "This reduces distortion."],
          ["H", "A line 30 mm long on a drawing at 1 : 50 represents a real length of", "1500 mm", "80 mm", "0.6 mm", "150 mm", "$30 \\times 50 = 1500$."],
          ["H", "The centre of a circle passing through all three corners of a triangle is found by", "bisecting two sides perpendicularly", "bisecting two angles", "drawing medians only", "extending the sides", "Perpendicular bisectors meet at the circumcentre."],
          ["H", "The development of the curved surface of a cone is a", "sector of a circle", "rectangle", "square", "hexagon", "Its radius is the slant height."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: tools, machines and safety",
        subtopics: ["Workshop safety", "Hand tools for wood and metal", "Machines and mechanisms", "Maintenance"],
        objectives: ["Recall workshop safety rules and protective devices", "Identify hand tools and their uses", "Revise motion, mechanisms and power transmission", "Answer BECE-style questions on tools and machines"],
        lesson: {
          title: "BECE Revision: Tools and Machines",
          summary: "Revise tools, machines, mechanisms and safety for the BECE.",
          minutes: 45,
          notes: `## Safety
Goggles (eyes), gloves (hands), safety boots (feet), overalls (body), ear muffs (ears), helmet (head). Switch off machines before cleaning or adjusting; report accidents; remove the chuck key before starting a lathe.

## Hand tools
| Task | Wood | Metal |
|---|---|---|
| marking | pencil, marking knife, marking gauge | scriber, centre punch, odd-leg calliper |
| cutting | rip saw, cross-cut saw, tenon saw, coping saw | hacksaw, tin snips, cold chisel |
| smoothing | jack plane, glass paper | file, emery cloth |
| testing | try square, spirit level | engineer's square, straightedge |
| driving | claw hammer, mallet, screwdriver | ball-pein hammer, spanner |
| holding | bench vice, G-clamp | engineer's vice, tongs (hot metal) |

## Motion and mechanisms
Linear, rotary, reciprocating, oscillating. Cam and follower (rotary → reciprocating); crank and slider (engines); rack and pinion (rotary → linear).

## Power transmission
Open belt: same direction; crossed belt: opposite directions; meshing gears: opposite directions; idler gear: same direction.
Gear ratio $= \\frac{\\text{driven teeth}}{\\text{driver teeth}}$; output speed $= \\frac{\\text{input speed}}{\\text{ratio}}$.

## Maintenance and lubrication
Preventive (before faults) and corrective (after faults). Oil, grease and graphite reduce friction and wear.`,
          examples: `**Example 1.** *Which tool cuts metal?* **hacksaw**.

**Example 2.** *A driver gear of 15 teeth turns a driven gear of 45 teeth. Gear ratio?* *Answer:* $\\frac{45}{15} = 3$ (3 : 1).

**Example 3.** *Which mechanism changes rotary motion into reciprocating motion?* *Answer:* **cam and follower**.`,
        },
        questions: [
          ["E", "Which tool is used to mark the centre of a hole in metal before drilling?", "centre punch", "pencil", "chalk line", "mallet", "The punch mark guides the drill."],
          ["E", "Which protective device protects the ears?", "ear muffs", "goggles", "gloves", "apron", "They reduce noise."],
          ["E", "The swinging motion of a pendulum is", "oscillating", "rotary", "linear", "reciprocating", "It swings in an arc."],
          ["M", "A driver gear of 15 teeth turns a driven gear of 45 teeth. The gear ratio is", "3 : 1", "1 : 3", "30 : 1", "60 : 1", "$45 \\div 15 = 3$."],
          ["M", "A crossed belt makes the two pulleys turn in", "opposite directions", "the same direction", "no direction", "random directions", "Crossing reverses rotation."],
          ["M", "Which mechanism changes rotary motion into reciprocating motion?", "cam and follower", "rack and pinion", "open belt", "idler gear", "The follower moves up and down."],
          ["M", "Which tool checks that an edge is at 90° to a face in woodwork?", "try square", "spirit level", "marking gauge", "coping saw", "Try squares test squareness."],
          ["H", "A driver pulley turning at 600 rev/min drives a pulley with a velocity ratio of 3. What is the speed of the driven pulley?", "200 rev/min", "1800 rev/min", "603 rev/min", "597 rev/min", "$600 \\div 3 = 200$."],
          ["H", "Oiling a machine every week before any fault occurs is", "preventive maintenance", "corrective maintenance", "breakdown repair", "demolition", "It is planned care."],
          ["H", "Why are push sticks used on circular saws?", "to keep hands away from the blade", "to sharpen the blade", "to cool the motor", "to measure timber", "They protect the fingers."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: building, electricity and energy",
        subtopics: ["Building materials and construction", "Electrical components and wiring", "Electronics", "Energy and engines"],
        objectives: ["Recall building materials and construction stages", "Revise electrical components, wiring and safety", "Revise basic electronic components", "Answer BECE-style questions on energy and engines"],
        lesson: {
          title: "BECE Revision: Building, Electricity and Energy",
          summary: "Revise building, electrical, electronic and energy technology for the BECE.",
          minutes: 45,
          notes: `## Building
- Stages: planning → setting out → foundation → walling → lintels and roof → finishing.
- Mortar = cement + sand + water; concrete = cement + sand + gravel + water.
- Mix ratio 1 : 2 : 4 = cement : sand : gravel. Concrete is **cured** by keeping it moist.
- Foundations: strip, pad, raft, pile. DPC stops rising damp. Bonding staggers joints.
- Professionals: architect (design), engineer (structure), quantity surveyor (cost).

## Electricity
- Components: switch, fuse, resistor, lamp, motor, ammeter (series), voltmeter (parallel).
- House wiring: meter, consumer unit, circuit breakers; sockets in **parallel**; switch on the **live** wire.
- Colours: live brown, neutral blue, earth green-and-yellow.
- Fuse melts; circuit breaker trips and can be reset; RCD protects against earth leakage.

## Electronics
Resistor (limits current; colour code), capacitor (stores charge), diode (one-way current), LED (light), transistor (switch/amplifier: base, collector, emitter), LDR (resistance falls in light), thermistor (temperature), IC (chip).

## Energy and engines
- Renewable: solar, wind, hydro, biogas. Non-renewable: petrol, diesel, coal, gas.
- Four-stroke cycle: induction, compression, power, exhaust.
- Petrol engines use spark plugs; diesel engines use compression ignition.
- Never run generators indoors (carbon monoxide).`,
          examples: `**Example 1.** *In a 1 : 2 : 4 mix, what does 4 represent?* *Answer:* **gravel** (coarse aggregate).

**Example 2.** *A resistor has bands yellow, violet, red. Value?* *Answer:* 4, 7, two zeros = **4700 Ω**.

**Example 3.** *Which component allows current in one direction only?* *Answer:* **diode**.`,
        },
        questions: [
          ["E", "Concrete is kept moist while it hardens. This is called", "curing", "bonding", "setting out", "plastering", "Curing develops strength."],
          ["E", "The earth wire is coloured", "green-and-yellow", "brown", "blue", "black", "This is the standard earth colour."],
          ["E", "Which is a renewable source of energy?", "sunlight", "diesel", "coal", "petrol", "Solar energy is replenished."],
          ["M", "In a 1 : 2 : 4 concrete mix, the number 4 represents", "gravel", "cement", "sand", "water", "The ratio is cement : sand : gravel."],
          ["M", "Socket outlets in a house are connected in", "parallel", "series", "a single loop with the meter only", "no particular way", "Each gets full voltage."],
          ["M", "A resistor has bands yellow, violet, red. Its value is", "4700 Ω", "470 Ω", "47 Ω", "47 000 Ω", "4, 7 followed by two zeros."],
          ["M", "The four strokes of an engine in order are", "induction, compression, power, exhaust", "power, exhaust, induction, compression", "compression, induction, exhaust, power", "exhaust, induction, power, compression", "Suck, squeeze, bang, blow."],
          ["H", "The professional who ensures that a building is structurally stable is the", "civil/structural engineer", "painter", "tiler", "estate agent", "Engineers design for strength."],
          ["H", "An LDR in a street-light circuit switches the light on at night because its resistance", "rises in darkness", "falls in darkness", "stays constant", "becomes zero", "Less light means higher resistance."],
          ["H", "Why is the switch placed on the live wire in house wiring?", "so the appliance is safe when switched off", "to save cable", "to make lamps brighter", "because the neutral carries no current", "Breaking the live isolates the appliance."],
        ],
      },
    ],
  },
];
