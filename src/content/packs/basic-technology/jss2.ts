import type { TermPlan } from "../types";

/** JSS2 Basic Technology — original Precious PS content following the national Basic Science and Technology structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Isometric drawing",
        subtopics: ["Principles of isometric drawing", "Isometric axes", "Drawing blocks in isometric", "Isometric circles"],
        objectives: ["State the principles of isometric drawing", "Draw the isometric axes", "Draw rectangular blocks in isometric projection", "Construct isometric circles using the four-centre method"],
        lesson: {
          title: "Isometric Pictorial Drawing",
          summary: "Draw objects in isometric view using the 30° axes.",
          minutes: 45,
          notes: `## Principles
In **isometric drawing**, the object is drawn resting on one edge so that three faces are seen equally.
- **Vertical** edges are drawn **vertical**.
- **Horizontal** edges are drawn at **30°** to the horizontal (to the left and right).
- All three axes are **120° apart**.
- Measurements along the axes are drawn **true length** (in isometric drawing).

## Drawing a block
1. Draw a vertical line for the front corner (height).
2. From its base draw lines at **30°** left and right for the width and length.
3. Draw verticals at the ends and complete with lines parallel to the 30° axes.
4. Darken visible edges.
A **30°–60° set square** on a **T-square** gives the axes quickly.

## Non-isometric lines
Sloping edges that are not parallel to the axes cannot be measured directly. Locate their **end points** on isometric lines, then join them.

## Isometric circles
Circles appear as **ellipses**. The **four-centre (approximate) method**:
1. Draw an **isometric square (rhombus)** with side equal to the diameter.
2. From the two obtuse corners, draw lines to the midpoints of the opposite sides.
3. The intersections and obtuse corners are the **four centres**; draw arcs to form the ellipse.

## Isometric vs oblique
| Isometric | Oblique |
|---|---|
| no true-shape face | front face true shape |
| receding lines at 30° | receding lines usually at 45° |
| circles appear as ellipses on all faces | circles on the front are true circles |`,
          examples: `**Example 1.** At what angle to the horizontal are isometric axes drawn? *Answer:* **30°**.

**Example 2.** How does a circle appear in isometric drawing? *Answer:* as an **ellipse**.

**Example 3.** Which set square is used to draw isometric axes? *Answer:* the **30°–60° set square**.`,
        },
        questions: [
          ["E", "In isometric drawing, horizontal edges are drawn at", "30° to the horizontal", "45° to the horizontal", "90° to the horizontal", "60° to the vertical only", "Both receding axes are at 30°."],
          ["E", "In isometric drawing, vertical edges are drawn", "vertical", "at 30°", "at 45°", "horizontal", "Vertical lines remain vertical."],
          ["E", "Which set square is used to draw isometric axes?", "30°–60° set square", "45° set square", "adjustable protractor only", "French curve", "It gives the 30° lines."],
          ["M", "The three isometric axes are separated by angles of", "120°", "90°", "60°", "45°", "Three equal angles round a point: 360° ÷ 3."],
          ["M", "In isometric drawing, a circle appears as", "an ellipse", "a true circle", "a square", "a straight line", "Circles on isometric faces are foreshortened."],
          ["M", "A face drawn true shape is a feature of", "oblique drawing", "isometric drawing", "both equally", "neither", "Isometric has no true-shape face."],
          ["M", "Lines that are not parallel to the isometric axes are called", "non-isometric lines", "centre lines", "hidden lines", "dimension lines", "They cannot be measured directly."],
          ["H", "To draw a non-isometric sloping edge, you should", "locate its end points on isometric lines and join them", "measure it directly at 30°", "draw it at 45°", "leave it out", "Only lines parallel to the axes can be measured."],
          ["H", "The four-centre method of drawing isometric circles begins with an isometric", "square (rhombus) of side equal to the diameter", "triangle", "hexagon", "rectangle of any size", "The ellipse fits inside this rhombus."],
          ["H", "Which statement about isometric drawing is correct?", "Measurements along the axes are drawn true length.", "Receding lines are drawn half length.", "The front face is always true shape.", "Axes are drawn at 45°.", "This distinguishes isometric drawing."],
        ],
      },
      {
        week: 2,
        title: "Orthographic projection: introduction",
        subtopics: ["Meaning of orthographic projection", "Principal views: front, end and plan", "First-angle and third-angle projection", "Projecting views from a pictorial drawing"],
        objectives: ["Explain orthographic projection", "Identify the front elevation, end elevation and plan", "Distinguish first-angle from third-angle projection", "Project the three views of simple blocks"],
        lesson: {
          title: "Views of an Object",
          summary: "Represent a solid object in two dimensions using related views.",
          minutes: 45,
          notes: `## Meaning
**Orthographic projection** shows a three-dimensional object as a set of **two-dimensional views**, each seen **straight on** (at 90°) from a different direction.

## The principal views
| View | Seen from | Shows |
|---|---|---|
| **front elevation** | the front | length and height |
| **end elevation** (side view) | the side | width and height |
| **plan** | above | length and width |
The views are **projected** from one another with thin projection lines so that heights and lengths line up.

## First-angle projection (used widely in Nigeria and Britain)
- The **plan** is drawn **below** the front elevation.
- The **left end view** is drawn to the **right** of the front elevation.

## Third-angle projection
- The **plan** is drawn **above** the front elevation.
- The **left end view** is drawn to the **left** of the front elevation.

## Symbols
Each system has a standard symbol (a truncated cone shown in two views) placed near the title block to show which projection is used.

## Hidden detail
Edges that cannot be seen from a view are shown with **dashed lines**.`,
          examples: `**Example 1.** In first-angle projection, where is the plan placed? *Answer:* **below** the front elevation.

**Example 2.** Which view shows length and width? *Answer:* the **plan** (view from above).

**Example 3.** In third-angle projection, where is the plan placed? *Answer:* **above** the front elevation.`,
        },
        questions: [
          ["E", "The view of an object seen from above is the", "plan", "front elevation", "end elevation", "section", "The plan is the top view."],
          ["E", "Showing a solid object in several two-dimensional views is", "orthographic projection", "oblique drawing", "isometric drawing", "perspective drawing", "Orthographic views are flat, true views."],
          ["E", "The view seen from the front is the", "front elevation", "plan", "end elevation", "auxiliary view", "It shows length and height."],
          ["M", "In first-angle projection, the plan is drawn", "below the front elevation", "above the front elevation", "to the left of the plan", "anywhere on the sheet", "This is the first-angle arrangement."],
          ["M", "In third-angle projection, the plan is drawn", "above the front elevation", "below the front elevation", "on the back of the sheet", "inside the front elevation", "This is the third-angle arrangement."],
          ["M", "The end elevation shows the object's", "width and height", "length and width", "length only", "colour", "It is viewed from the side."],
          ["M", "Edges that cannot be seen in a view are shown with", "dashed lines", "thick continuous lines", "chain lines", "no lines at all always", "Hidden detail uses dashes."],
          ["H", "In first-angle projection, the view from the left is placed", "to the right of the front elevation", "to the left of the front elevation", "above the plan", "below the plan", "Views are placed on the opposite side in first angle."],
          ["H", "Why are projection lines used between views?", "to keep corresponding heights and lengths aligned", "to decorate the drawing", "to show hidden edges", "to mark centres", "Views must line up with each other."],
          ["H", "The plan of an object shows its", "length and width", "height and width", "height only", "length and height", "It is seen from directly above."],
        ],
      },
      {
        week: 3,
        title: "Metalwork tools and processes",
        subtopics: ["Marking out metal", "Cutting metal", "Filing", "Drilling and bending metal"],
        objectives: ["Mark out metal accurately", "Cut sheet and bar metal with suitable tools", "Use files correctly", "Drill and bend metal safely"],
        lesson: {
          title: "Working with Metal",
          summary: "Mark, cut, file, drill and bend metal using hand tools.",
          minutes: 45,
          notes: `## Marking out
Coat the surface with **marking blue** (or chalk); use the **scriber**, **steel rule**, **engineer's square**, **odd-leg calliper** and **centre punch**.

## Cutting metal
| Tool | Use |
|---|---|
| **hacksaw** | cutting bars, tubes and thick sheet; teeth point **forward**; cut on the **forward stroke** |
| **tin snips (shears)** | cutting thin sheet metal |
| **cold chisel** | cutting sheet on a vice or cutting rivet heads |
For a hacksaw, use about **3 teeth in contact** with the work: fine blades for thin material.

## Filing
Files remove small amounts of metal and give a smooth finish.
- By **cut**: single-cut, double-cut, rasp (for wood).
- By **grade**: rough, bastard, second cut, smooth, dead smooth.
- By **shape**: flat, hand, half-round, round, square, triangular.
Methods: **cross filing** (removes metal quickly) and **draw filing** (fine finish). Clean clogged files with a **file card**.

## Drilling
Centre-punch first; hold work firmly in a vice or clamp; use a **twist drill** in a hand or pillar drill; use cutting fluid; wear goggles.

## Bending
Hold the metal in a vice, bend with a mallet or hammer over a former; allow for the bend in marking out. Metals may be **annealed** (softened by heating and slow cooling) to bend easily.`,
          examples: `**Example 1.** On which stroke does a hacksaw cut? *Answer:* the **forward** stroke.

**Example 2.** Which tool cuts thin sheet metal? *Answer:* **tin snips**.

**Example 3.** Why is marking blue applied before marking out? *Answer:* So that scribed lines are **clearly visible**.`,
        },
        questions: [
          ["E", "Which tool is used to cut thin sheet metal?", "tin snips", "rip saw", "jack plane", "mortise chisel", "Snips cut like heavy scissors."],
          ["E", "Which tool removes small amounts of metal to give a smooth finish?", "file", "mallet", "scriber", "G-clamp", "Files shape and smooth metal."],
          ["E", "A hacksaw cuts on the", "forward stroke", "backward stroke", "both strokes equally", "upward stroke only", "Its teeth point forward."],
          ["M", "Marking blue is applied to metal so that", "scribed lines are clearly visible", "the metal does not rust", "the metal becomes softer", "drilling is faster", "Lines show clearly on blue."],
          ["M", "Which filing method gives a fine, smooth finish?", "draw filing", "cross filing", "rasping", "chiselling", "The file is drawn sideways along the work."],
          ["M", "A clogged file is cleaned with a", "file card", "hacksaw", "centre punch", "mallet", "Its wire bristles remove filings."],
          ["M", "Before drilling metal, the hole position is marked with a", "centre punch", "scriber only", "try square", "file", "The dent guides the drill."],
          ["H", "Softening metal by heating and slow cooling so it bends easily is", "annealing", "hardening", "galvanising", "tempering to full hardness", "Annealing relieves stresses."],
          ["H", "For cutting thin metal with a hacksaw, you should use a blade with", "fine teeth, keeping about three teeth in contact", "very coarse teeth", "no teeth", "teeth pointing backwards", "Too few teeth in contact can strip the blade."],
          ["H", "A rasp is a coarse file used mainly on", "wood", "hardened steel", "glass", "concrete", "Rasps have individual raised teeth."],
        ],
      },
      {
        week: 4,
        title: "Joining metals",
        subtopics: ["Temporary and permanent joints", "Nuts, bolts and screws", "Riveting", "Soldering and welding"],
        objectives: ["Distinguish temporary from permanent joints", "Describe the use of nuts, bolts and screws", "Describe riveting", "Explain soldering and welding"],
        lesson: {
          title: "Fastening Metal Parts",
          summary: "Choose suitable methods for joining metal parts.",
          minutes: 40,
          notes: `## Temporary and permanent joints
- **Temporary joints** can be taken apart without damage: **nuts and bolts, screws, pins**.
- **Permanent joints** cannot be separated without damage: **rivets, soldering, brazing, welding, adhesives**.

## Nuts, bolts and screws
- A **bolt** passes through holes in both parts and is tightened with a **nut**; a **washer** spreads the load.
- **Machine screws** screw into threaded holes.
- **Self-tapping screws** cut their own thread in sheet metal.
- Tools: **spanners** (open-ended, ring, box), **Allen keys**, screwdrivers.

## Riveting
A **rivet** (soft metal pin with a head) is passed through holes and its tail is hammered to form a second head.
Rivet heads: **snap (round)**, **countersunk**, **flat**. **Pop (blind) rivets** are fixed from one side with a rivet gun. Used in bridges, aircraft, buckets, frames.

## Soldering
Joining metals with a low-melting **solder** (tin alloy) using a **soldering iron**. A **flux** cleans the surface and helps the solder flow. Used in **electrical and electronic** work and tinsmithing. The base metals do **not** melt.

## Brazing
Like soldering but uses a higher-melting **brass (spelter)** filler; stronger.

## Welding
The metals themselves are **melted and fused**, with or without filler metal.
- **Gas (oxy-acetylene) welding**
- **Electric arc welding**
Welders must wear a **welding shield/helmet**, gloves and apron.`,
          examples: `**Example 1.** Is a nut-and-bolt joint temporary or permanent? *Answer:* **temporary**.

**Example 2.** What is the purpose of flux in soldering? *Answer:* It **cleans the surface** and helps solder flow.

**Example 3.** In which joining method do the base metals melt? *Answer:* **welding**.`,
        },
        questions: [
          ["E", "Which is a temporary joint?", "nut and bolt", "welding", "riveting", "soldering", "It can be undone without damage."],
          ["E", "Which method is commonly used to join wires in electronics?", "soldering", "riveting", "forging", "casting", "Solder makes neat electrical joints."],
          ["E", "Which tool is used to tighten nuts?", "spanner", "hacksaw", "scriber", "file", "Spanners grip nuts."],
          ["M", "In welding, the metals being joined", "melt and fuse together", "are only glued", "are bolted", "never get hot", "Welding fuses the base metals."],
          ["M", "Flux is used in soldering to", "clean the surface and help the solder flow", "cool the joint", "colour the metal", "cut the metal", "Oxides prevent solder bonding."],
          ["M", "A washer placed under a nut", "spreads the load", "cuts a thread", "melts the bolt", "replaces the nut", "It protects the surface."],
          ["M", "Rivets that can be fixed from one side only are", "pop (blind) rivets", "snap rivets", "countersunk bolts", "machine screws", "A rivet gun sets them."],
          ["H", "Brazing differs from soldering because brazing", "uses a higher-melting brass filler and gives a stronger joint", "melts the base metals", "uses no heat", "is temporary", "Brazing uses spelter."],
          ["H", "Which protective device is essential for arc welding?", "welding shield/helmet", "ear muffs only", "sunglasses", "a paper mask", "The arc can damage the eyes."],
          ["H", "Screws that cut their own thread in sheet metal are", "self-tapping screws", "machine screws", "wood dowels", "rivets", "They form threads as they are driven."],
        ],
      },
      {
        week: 5,
        title: "Wood finishing",
        subtopics: ["Preparing surfaces", "Abrasives", "Finishes: paint, varnish, polish and stain", "Applying finishes"],
        objectives: ["Explain the need for finishing wood", "Prepare wood surfaces for finishing", "Identify types of wood finishes", "Describe how to apply finishes correctly"],
        lesson: {
          title: "Finishing Woodwork",
          summary: "Prepare and finish wooden articles for protection and appearance.",
          minutes: 40,
          notes: `## Why finish wood?
- **Protection** from moisture, dirt, fungi and insects
- **Appearance**: bring out the grain or add colour
- Easier **cleaning**
- Longer **life**

## Surface preparation
1. Plane or scrape the surface smooth.
2. Fill holes and cracks with **wood filler** or **putty**.
3. Punch nail heads below the surface.
4. **Sand** with abrasive paper, working from **coarse** to **fine**, always **along the grain**.
5. Remove dust with a cloth.

## Abrasives
Glass paper, garnet paper, emery cloth (for metal), sandpaper. Grades: coarse, medium, fine (a higher grit number is finer).

## Types of finish
| Finish | Description |
|---|---|
| **paint** | opaque coloured coating: primer → undercoat → gloss (top) coat |
| **varnish** | clear, hard, glossy film that shows the grain |
| **polish** (wax, French polish) | smooth, shiny surface |
| **wood stain** | changes the colour of the wood while showing grain |
| **lacquer** | quick-drying clear coating |
| **preservatives** | protect against insects and decay |

## Application
Apply with brushes, rags or spray guns in a dust-free, ventilated place; apply thin coats; allow each coat to dry and **lightly sand between coats**. Clean brushes with the right solvent (e.g. kerosene or thinner for oil paints).`,
          examples: `**Example 1.** In which direction should wood be sanded? *Answer:* **along the grain**.

**Example 2.** Which finish protects wood while showing the grain clearly? *Answer:* **varnish**.

**Example 3.** Put in order: gloss coat, primer, undercoat. *Answer:* **primer → undercoat → gloss coat**.`,
        },
        questions: [
          ["E", "Wood should be sanded", "along the grain", "across the grain", "in circles only", "with a hammer", "Sanding across leaves scratches."],
          ["E", "Which finish is a clear, hard film that shows the grain?", "varnish", "gloss paint", "primer", "emulsion paint", "Varnish is transparent."],
          ["E", "Which is a reason for finishing wood?", "protection from moisture", "making it heavier", "making it rot faster", "hiding the teacher's marks", "Finishes seal the surface."],
          ["M", "Holes and cracks in wood are filled with", "wood filler", "paint thinner", "sandpaper", "flux", "Fillers make the surface level."],
          ["M", "When painting wood, the first coat is the", "primer", "gloss coat", "varnish", "stain", "Primers seal and help adhesion."],
          ["M", "A finish that changes the colour of wood but shows the grain is", "wood stain", "gloss paint", "putty", "undercoat", "Stains colour the fibres."],
          ["M", "Abrasive paper should be used", "from coarse to fine grades", "from fine to coarse grades", "in one coarse grade only", "only when wet", "Each finer grade removes previous scratches."],
          ["H", "Why is the surface lightly sanded between coats of varnish?", "to give a smooth surface that the next coat can grip", "to remove all the varnish", "to make it rough permanently", "to colour it", "Light sanding improves adhesion and smoothness."],
          ["H", "Which abrasive is suitable for metal rather than wood?", "emery cloth", "glass paper", "garnet paper", "rasp", "Emery is used on metal."],
          ["H", "Nail heads are punched below the surface before finishing so that", "they can be covered with filler and not show", "they come out easily", "the wood breaks", "the nails rust faster", "A smooth surface looks neat."],
        ],
      },
      {
        week: 6,
        title: "Circles, tangents and arcs",
        subtopics: ["Parts of a circle revisited", "Tangents to a circle", "Joining lines with arcs", "Inscribed and circumscribed circles"],
        objectives: ["Construct a tangent to a circle at a given point", "Join two straight lines with an arc of given radius", "Inscribe a circle in a triangle", "Circumscribe a circle about a triangle"],
        lesson: {
          title: "Constructions with Circles",
          summary: "Construct tangents, arcs and circles related to triangles.",
          minutes: 45,
          notes: `## Tangent at a point P on a circle
A **tangent** touches the circle at one point and is **perpendicular to the radius** at that point.
1. Join the centre O to P and extend.
2. Construct a perpendicular to OP at P. This is the tangent.

## Joining two lines at right angles with an arc of radius R
1. Draw lines parallel to both lines at distance R inside the angle.
2. Their intersection is the **centre** of the arc.
3. From the centre, draw perpendiculars to the lines to find the **tangent points**.
4. Draw the arc between the tangent points.
(This gives rounded corners on drawings of objects.)

## Inscribed circle of a triangle (incircle)
1. **Bisect two angles** of the triangle.
2. The bisectors meet at the **incentre**.
3. The radius is the perpendicular distance from the incentre to any side.
4. Draw the circle touching all three sides.

## Circumscribed circle (circumcircle)
1. Construct the **perpendicular bisectors of two sides**.
2. They meet at the **circumcentre**.
3. Draw the circle passing through all three vertices.`,
          examples: `**Example 1.** At what angle does a tangent meet the radius at the point of contact? *Answer:* **90°**.

**Example 2.** How do you find the centre of the circle inscribed in a triangle? *Answer:* **Bisect two angles**; they meet at the incentre.

**Example 3.** How do you find the centre of the circle through the three corners of a triangle? *Answer:* Draw the **perpendicular bisectors of two sides**.`,
        },
        questions: [
          ["E", "A tangent touches a circle at", "one point", "two points", "three points", "no point", "Tangents touch without cutting."],
          ["E", "A tangent meets the radius at the point of contact at", "90°", "45°", "60°", "180°", "The tangent is perpendicular to the radius."],
          ["E", "A circle drawn inside a triangle touching all three sides is the", "inscribed circle", "circumscribed circle", "tangent circle only", "sector", "It is also called the incircle."],
          ["M", "The centre of the inscribed circle of a triangle is found by", "bisecting two angles", "bisecting two sides", "drawing medians only", "drawing tangents", "Angle bisectors meet at the incentre."],
          ["M", "The centre of the circumscribed circle of a triangle is found by", "drawing the perpendicular bisectors of two sides", "bisecting two angles", "drawing two tangents", "joining two corners", "Perpendicular bisectors meet at the circumcentre."],
          ["M", "The circumscribed circle of a triangle passes through", "all three vertices", "the midpoints of the sides only", "one vertex only", "no vertex", "It surrounds the triangle."],
          ["M", "To draw a tangent at point P on a circle, you construct a line", "perpendicular to OP at P", "parallel to OP", "through the centre", "at 45° to OP", "OP is the radius."],
          ["H", "To join two lines at right angles with an arc of radius R, the arc's centre is found where", "lines drawn parallel to the given lines at distance R intersect", "the two given lines meet", "the diagonals cross", "the tangents meet at 45°", "The centre is R from both lines."],
          ["H", "The radius of the inscribed circle is the", "perpendicular distance from the incentre to a side", "distance from the incentre to a vertex", "length of a side", "half the perimeter", "The circle touches each side."],
          ["H", "Rounded corners on drawings of objects are drawn using", "arcs tangent to the two straight edges", "freehand scribbles", "hidden lines", "chain lines", "The arc joins the lines smoothly."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Building materials: cement, concrete and blocks",
        subtopics: ["Cement and its properties", "Aggregates", "Concrete and mix ratios", "Sandcrete blocks and bricks"],
        objectives: ["Describe cement and how it sets", "Distinguish fine from coarse aggregates", "Explain concrete mix ratios and curing", "Describe how sandcrete blocks are made"],
        lesson: {
          title: "Cement, Concrete and Blocks",
          summary: "Explain how cement-based materials are made and used in building.",
          minutes: 45,
          notes: `## Cement
**Portland cement** is made by heating **limestone** and **clay** in a kiln and grinding the product (clinker) with gypsum. When mixed with water it **sets** and **hardens** (hydration).
Store cement in a **dry** place, off the floor; damp cement forms lumps and is weak.

## Aggregates
- **Fine aggregate**: sharp sand (clean, free from clay and organic matter).
- **Coarse aggregate**: gravel or crushed granite.

## Concrete
**Concrete = cement + fine aggregate + coarse aggregate + water.**
A **mix ratio** gives the proportions by volume: **cement : sand : gravel**.
| Mix | Typical use |
|---|---|
| 1 : 2 : 4 | general structural work (floors, lintels) |
| 1 : 3 : 6 | foundations and mass concrete |
| 1 : 1.5 : 3 | strong work (columns, beams) |
- **Reinforced concrete** contains steel rods to resist bending (tension).
- **Curing**: keeping concrete **moist** (e.g. with wet sacks or water) for about 7 days so it gains full strength.
- **Formwork** holds wet concrete in shape until it sets.

## Sandcrete blocks
Made from **cement, sand and water** compacted in moulds (by hand or machine), then cured.
Common sizes: **225 mm (9-inch)** and **150 mm (6-inch)** blocks.
**Bricks** are made from **clay**, moulded and **fired** in a kiln.`,
          examples: `**Example 1.** In a 1 : 2 : 4 mix, how many parts of gravel are used? *Answer:* **4 parts**.

**Example 2.** Why is concrete cured? *Answer:* To keep it **moist** so it hardens properly and reaches full **strength**.

**Example 3.** How much cement is needed for 14 buckets of a 1 : 2 : 4 mix (dry materials)? *Answer:* $\\frac{1}{7} \\times 14 = 2$ **buckets**.`,
        },
        questions: [
          ["E", "Cement is made mainly from", "limestone and clay", "sand and water", "iron and carbon", "wood and resin", "They are heated together in a kiln."],
          ["E", "Concrete is a mixture of cement, sand, gravel and", "water", "oil", "paint", "timber", "Water starts the setting process."],
          ["E", "Gravel or crushed granite in concrete is called", "coarse aggregate", "fine aggregate", "binder", "admixture only", "It forms the bulk of concrete."],
          ["M", "Keeping concrete moist while it hardens is called", "curing", "mixing", "batching", "plastering", "Curing helps it gain strength."],
          ["M", "In a 1 : 2 : 4 concrete mix, the number 2 refers to", "sand", "cement", "gravel", "water", "The ratio is cement : sand : gravel."],
          ["M", "Sandcrete blocks are made from", "cement, sand and water", "clay fired in a kiln", "timber and nails", "gravel and oil", "They are moulded and cured."],
          ["M", "Steel rods placed in concrete to resist bending make it", "reinforced concrete", "mass concrete", "lean mortar", "precast clay", "Steel resists tension."],
          ["H", "For 14 buckets of dry materials in a 1 : 2 : 4 mix, how many buckets of cement are needed?", "2", "4", "7", "8", "Cement is 1 part out of 7: $14 \\div 7 = 2$."],
          ["H", "Cement should be stored off the floor in a dry place because", "moisture makes it set into weak lumps", "it is too heavy", "it attracts insects", "it melts in heat", "Cement reacts with water."],
          ["H", "Temporary moulds that hold wet concrete in shape are called", "formwork", "lintels", "aggregates", "curing sacks", "Formwork is removed after setting."],
        ],
      },
      {
        week: 2,
        title: "Building construction: walls, floors and roofs",
        subtopics: ["Types of foundation", "Walls and bonding", "Floors", "Roofs and roof coverings"],
        objectives: ["Describe common types of foundations", "Explain the purpose of bonding in walls", "Describe ground-floor construction", "Identify parts of a pitched roof and roof coverings"],
        lesson: {
          title: "Parts of a Building",
          summary: "Describe how foundations, walls, floors and roofs are constructed.",
          minutes: 45,
          notes: `## Foundations
Transfer the building's load safely to firm soil.
- **Strip foundation**: a continuous strip of concrete under walls — common for houses.
- **Pad foundation**: separate pads under columns.
- **Raft foundation**: a concrete slab over the whole area — for weak soil.
- **Pile foundation**: long columns driven deep into the ground — for very weak soils or tall buildings.

## Walls
Walls carry loads, enclose spaces and provide security and privacy.
- **Load-bearing** walls carry roof and floor loads; **partition** walls only divide space.
- **Bonding**: arranging blocks so that vertical joints do **not line up** (staggered). This spreads load and makes the wall stronger.
- A **damp-proof course (DPC)** stops moisture rising from the ground into walls.

## Floors
Ground floors: hardcore (compacted rubble) → blinding (sand) → **damp-proof membrane** → **concrete slab** → screed and finish (tiles, terrazzo).

## Roofs
- **Flat roofs** (slight slope) and **pitched roofs** (sloping).
- Parts of a pitched roof: **wall plate**, **rafters**, **ridge**, **purlins**, **tie beam**, **struts**, **fascia board**, **eaves**.
- Coverings: corrugated iron/aluminium sheets, long-span aluminium, clay or concrete tiles, stone-coated steel.`,
          examples: `**Example 1.** Which foundation is common for ordinary houses? *Answer:* the **strip foundation**.

**Example 2.** Why are blocks bonded (staggered)? *Answer:* To **spread the load** and make the wall **stronger**.

**Example 3.** What is the purpose of a damp-proof course? *Answer:* To stop **moisture rising** from the ground into the wall.`,
        },
        questions: [
          ["E", "The part of a building that transfers its load to the ground is the", "foundation", "roof", "fascia board", "window", "Foundations support the whole building."],
          ["E", "The sloping timbers that support a pitched roof covering are", "rafters", "lintels", "piles", "tiles", "Rafters run from wall plate to ridge."],
          ["E", "Which is a roof covering?", "long-span aluminium sheets", "hardcore", "damp-proof course", "blinding", "It covers and protects the roof."],
          ["M", "A continuous concrete foundation under walls is a", "strip foundation", "pile foundation", "pad foundation", "raft slab only", "It follows the line of the walls."],
          ["M", "Staggering vertical joints in blockwork is called", "bonding", "curing", "plastering", "grouting", "Bonding strengthens walls."],
          ["M", "The layer that stops moisture rising into a wall is the", "damp-proof course", "fascia board", "ridge", "purlin", "DPC prevents rising damp."],
          ["M", "A wall that only divides space and carries no roof load is a", "partition wall", "load-bearing wall", "retaining wall", "foundation wall", "It separates rooms."],
          ["H", "Which foundation is suitable for very weak soil under a tall building?", "pile foundation", "strip foundation", "pad foundation for a shed", "no foundation", "Piles reach firm layers deep below."],
          ["H", "The highest horizontal member of a pitched roof, where rafters meet, is the", "ridge", "wall plate", "fascia", "eaves", "The ridge is at the apex."],
          ["H", "Compacted rubble placed under a ground-floor slab is called", "hardcore", "screed", "blinding", "terrazzo", "Hardcore forms a firm base."],
        ],
      },
      {
        week: 3,
        title: "Motion and mechanisms",
        subtopics: ["Types of motion", "Levers in machines", "Linkages", "Cams and cranks"],
        objectives: ["Identify the four types of motion", "Describe how levers change force and motion", "Explain the use of linkages", "Describe how cams and cranks change motion"],
        lesson: {
          title: "How Mechanisms Move",
          summary: "Identify types of motion and mechanisms that change one motion into another.",
          minutes: 45,
          notes: `## Types of motion
| Motion | Description | Example |
|---|---|---|
| **linear** | in a straight line | a sliding door, a train on a straight track |
| **rotary** | round in a circle | a wheel, a fan blade |
| **reciprocating** | backwards and forwards in a straight line | a saw blade, a pump piston |
| **oscillating** | swinging to and fro in an arc | a pendulum, a swing |

## Mechanisms
A **mechanism** changes one type of motion or force into another.

## Levers
Levers change the size and direction of forces (first, second and third class — see simple machines). Linked levers are used in scissors, pliers, brakes and car jacks.

## Linkages
Rigid bars connected by pivots to transfer motion, e.g. the **reverse-motion linkage** (input and output move in opposite directions), **parallel-motion linkage** (e.g. tool boxes, ironing boards), **bell-crank** (changes direction by 90°, e.g. bicycle brakes).

## Cams and cranks
- **Cam and follower**: a rotating **cam** pushes a **follower** up and down — changes **rotary** to **reciprocating** motion (engine valves, toys). Cam shapes: pear, circular (eccentric), heart-shaped.
- **Crank and slider**: converts **rotary** to **reciprocating** motion or the reverse — as in a car engine (piston ↔ crankshaft) and a sewing machine.
- **Rack and pinion**: converts rotary to linear motion (car steering, gate openers).`,
          examples: `**Example 1.** What type of motion does a hand saw have? *Answer:* **reciprocating**.

**Example 2.** Which mechanism changes rotary motion into linear motion in car steering? *Answer:* **rack and pinion**.

**Example 3.** What type of motion does a clock pendulum have? *Answer:* **oscillating**.`,
        },
        questions: [
          ["E", "Motion round in a circle, like a wheel, is", "rotary", "linear", "reciprocating", "oscillating", "Rotary means turning."],
          ["E", "Motion in a straight line is", "linear", "rotary", "oscillating", "circular", "Linear means along a line."],
          ["E", "The swinging of a pendulum is", "oscillating motion", "linear motion", "rotary motion", "reciprocating motion", "It swings in an arc."],
          ["M", "The backward and forward straight-line motion of a saw is", "reciprocating", "rotary", "oscillating", "random", "It moves to and fro in a line."],
          ["M", "A device that changes one type of motion into another is a", "mechanism", "material", "measurement", "moulding", "Mechanisms transform motion."],
          ["M", "A cam and follower changes", "rotary motion into reciprocating motion", "linear motion into oscillating motion only", "sound into motion", "heat into motion", "The follower rises and falls as the cam turns."],
          ["M", "Which mechanism converts rotary motion into linear motion in car steering?", "rack and pinion", "cam and follower", "bell-crank", "pulley belt", "The pinion drives the straight rack."],
          ["H", "In a car engine, the up-and-down motion of the piston is changed into rotation by the", "crank (crankshaft)", "cam only", "rack", "pendulum", "The crank and slider converts the motion."],
          ["H", "A bell-crank linkage is used to", "change the direction of motion through 90°", "store electricity", "measure temperature", "reduce friction", "It turns a push into a perpendicular pull."],
          ["H", "A parallel-motion linkage is found in", "an ironing board or cantilever tool box", "a pendulum clock", "a car battery", "a thermometer", "Its parts stay parallel as it moves."],
        ],
      },
      {
        week: 4,
        title: "Transmission of power: belts, chains and gears",
        subtopics: ["Pulleys and belts", "Chains and sprockets", "Gears and gear trains", "Speed and velocity ratio"],
        objectives: ["Describe belt, chain and gear drives", "Explain the effect of pulley and gear sizes on speed", "Calculate simple velocity ratios", "State advantages and disadvantages of each drive"],
        lesson: {
          title: "Passing Motion from Shaft to Shaft",
          summary: "Explain how belts, chains and gears transmit power and change speed.",
          minutes: 45,
          notes: `## Belt drives
A belt connects a **driver** pulley to a **driven** pulley.
- **Open belt**: both pulleys turn in the **same direction**.
- **Crossed belt**: pulleys turn in **opposite directions**.
Advantages: quiet, cheap, absorbs shock. Disadvantage: may **slip**.

## Chain drives
A chain connects **sprockets** (toothed wheels), e.g. a bicycle. No slipping; needs lubrication.

## Gears
Toothed wheels that **mesh** directly.
- Two meshing gears turn in **opposite directions**.
- An **idler gear** between them makes the driver and driven turn in the **same direction** without changing the ratio.
- Types: **spur** (parallel shafts), **bevel** (shafts at 90°), **worm and wheel** (large speed reduction), **rack and pinion**.

## Speed and ratio
For pulleys:
$$\\text{velocity ratio} = \\frac{\\text{diameter of driven pulley}}{\\text{diameter of driver pulley}}$$
For gears:
$$\\text{gear ratio} = \\frac{\\text{teeth on driven gear}}{\\text{teeth on driver gear}}$$
A **small driver** turning a **large driven** wheel gives **lower speed** but **more turning force** (torque).
Output speed $= \\frac{\\text{input speed}}{\\text{ratio}}$.`,
          examples: `**Example 1.** A driver gear has 20 teeth and the driven gear has 60 teeth. Find the gear ratio. *Answer:* $\\frac{60}{20} = 3$ (3 : 1).

**Example 2.** If the driver above turns at 300 rev/min, find the speed of the driven gear. *Answer:* $\\frac{300}{3} = 100$ rev/min.

**Example 3.** How can a belt drive make both pulleys turn in opposite directions? *Answer:* Use a **crossed belt**.`,
        },
        questions: [
          ["E", "Toothed wheels that mesh together to transmit motion are", "gears", "pulleys", "belts", "cams", "Gear teeth interlock."],
          ["E", "A bicycle transmits power from pedals to wheel with a", "chain and sprockets", "flat belt", "rack", "cam", "The chain links two sprockets."],
          ["E", "Two meshing gears turn in", "opposite directions", "the same direction", "no direction", "random directions", "Meshing reverses rotation."],
          ["M", "An open belt drive makes both pulleys turn in", "the same direction", "opposite directions", "no direction", "alternating directions", "The belt does not cross."],
          ["M", "A crossed belt drive makes the pulleys turn in", "opposite directions", "the same direction", "reverse only when slipping", "no direction", "Crossing reverses rotation."],
          ["M", "A driver gear has 20 teeth and the driven gear has 60 teeth. What is the gear ratio?", "3 : 1", "1 : 3", "40 : 1", "80 : 1", "$60 \\div 20 = 3$."],
          ["M", "A disadvantage of belt drives is that belts can", "slip", "never slip", "rust quickly", "mesh", "Slipping reduces efficiency."],
          ["H", "A driver gear turns at 300 rev/min with a gear ratio of 3 : 1. What is the speed of the driven gear?", "100 rev/min", "900 rev/min", "303 rev/min", "297 rev/min", "$300 \\div 3 = 100$."],
          ["H", "An idler gear placed between a driver and a driven gear", "makes them turn in the same direction without changing the ratio", "doubles the speed", "stops the motion", "changes the gear ratio greatly", "It only reverses direction."],
          ["H", "Which gear arrangement gives a very large speed reduction?", "worm and wheel", "two equal spur gears", "rack and pinion", "open belt with equal pulleys", "One worm turn moves the wheel one tooth."],
        ],
      },
      {
        week: 5,
        title: "Electrical components and symbols",
        subtopics: ["Sources of electricity", "Circuit components", "Circuit symbols", "Wiring accessories"],
        objectives: ["Identify sources of electrical energy", "State the functions of common circuit components", "Draw standard circuit symbols", "Identify household wiring accessories"],
        lesson: {
          title: "Electrical Components",
          summary: "Identify electrical components, their symbols and wiring accessories.",
          minutes: 40,
          notes: `## Sources of electricity
- **Cells and batteries**: chemical → electrical (d.c.)
- **Generators**: mechanical → electrical (a.c. or d.c.)
- **Solar cells**: light → electrical
- **Public supply (grid)**: power stations (hydro, gas) send a.c. to homes (230 V, 50 Hz in Nigeria).

## Components and functions
| Component | Function |
|---|---|
| cell / battery | provides electrical energy |
| switch | opens or closes the circuit |
| lamp | gives light |
| resistor | limits current |
| variable resistor (rheostat) | adjusts current (e.g. dimmer, volume) |
| fuse | melts to protect a circuit from excess current |
| ammeter | measures current (in series) |
| voltmeter | measures voltage (in parallel) |
| bell / buzzer | produces sound |
| motor | converts electrical energy to motion |

## Circuit symbols
Symbols are **standard** so that circuit diagrams can be read by anyone. Examples: a cell (long and short parallel lines), a lamp (circle with a cross), a resistor (rectangle), a switch (a break with a lever), an ammeter (circle with A), a voltmeter (circle with V).

## Wiring accessories
**Switches**, **socket outlets**, **plugs** (three-pin), **lamp holders**, **ceiling roses**, **fuse boxes/consumer units**, **circuit breakers**, **conduit pipes**, **junction boxes**, **cables** (live — brown/red, neutral — blue/black, earth — green-and-yellow).`,
          examples: `**Example 1.** Which component limits current in a circuit? *Answer:* a **resistor**.

**Example 2.** What is the colour of the earth wire? *Answer:* **green-and-yellow**.

**Example 3.** How is an ammeter connected in a circuit? *Answer:* in **series**.`,
        },
        questions: [
          ["E", "Which component opens or closes a circuit?", "switch", "resistor", "fuse", "voltmeter", "Switches control the current path."],
          ["E", "Which component converts electrical energy into motion?", "motor", "lamp", "resistor", "cell", "A motor turns electrical energy into rotation."],
          ["E", "A battery changes", "chemical energy into electrical energy", "light into sound", "heat into light", "motion into chemical energy", "Batteries store chemical energy."],
          ["M", "Which component limits the current in a circuit?", "resistor", "switch", "ammeter", "bell", "It opposes current flow."],
          ["M", "A variable resistor is used to", "adjust the current", "store charge permanently", "measure voltage", "generate electricity", "It works as a dimmer or volume control."],
          ["M", "An ammeter is connected in", "series", "parallel", "a separate circuit", "the earth wire only", "Current must flow through it."],
          ["M", "The earth wire in a cable is coloured", "green-and-yellow", "brown", "blue", "red only", "This colour is standard."],
          ["H", "The mains supply voltage in Nigerian homes is about", "230 V", "12 V", "1.5 V", "11 000 V", "Homes receive about 230 V a.c."],
          ["H", "Circuit symbols are standardised so that", "anyone can read circuit diagrams correctly", "diagrams look colourful", "circuits become cheaper", "components last longer", "Standard symbols avoid confusion."],
          ["H", "A device that switches off a circuit automatically when current is too high and can be reset is a", "circuit breaker", "fuse wire", "ceiling rose", "lamp holder", "Unlike a fuse, it can be reset."],
        ],
      },
      {
        week: 6,
        title: "Basic electronics",
        subtopics: ["Meaning of electronics", "Resistors and colour codes", "Capacitors", "Diodes and light-emitting diodes"],
        objectives: ["Explain what electronics is", "Read simple resistor colour codes", "State the function of capacitors", "Describe diodes and LEDs and their uses"],
        lesson: {
          title: "Introduction to Electronics",
          summary: "Identify basic electronic components and their functions.",
          minutes: 45,
          notes: `## Meaning
**Electronics** is the branch of technology that controls the flow of **electrons** using components such as resistors, capacitors, diodes and transistors. It is found in phones, radios, TVs, computers and chargers.

## Resistors
Resistors limit current. Their values in **ohms (Ω)** are shown by **colour bands**:
| Colour | Digit |
|---|---|
| black | 0 |
| brown | 1 |
| red | 2 |
| orange | 3 |
| yellow | 4 |
| green | 5 |
| blue | 6 |
| violet | 7 |
| grey | 8 |
| white | 9 |
Band 1 = first digit, band 2 = second digit, band 3 = number of zeros (multiplier), band 4 = tolerance (gold ±5%, silver ±10%).
*Brown, black, red → 1, 0, 00 → 1000 Ω = 1 kΩ.*

## Capacitors
**Store electric charge** temporarily. Unit: **farad (F)** (usually µF). Uses: smoothing power supplies, timing circuits, tuning radios. **Electrolytic** capacitors have polarity (+ and −) and must be connected the right way.

## Diodes
Allow current to flow in **one direction only**. Used in **rectifiers** to change a.c. to d.c. (chargers, adaptors).

## Light-emitting diodes (LEDs)
Diodes that **give out light** when current flows forward. Uses: indicator lights, displays, torches, energy-saving bulbs. They need a **series resistor** to limit current.`,
          examples: `**Example 1.** A resistor has bands red, red, brown. What is its value? *Answer:* 2, 2, one zero → **220 Ω**.

**Example 2.** Which component allows current in one direction only? *Answer:* the **diode**.

**Example 3.** Why is a resistor connected in series with an LED? *Answer:* To **limit the current** and prevent the LED from burning out.`,
        },
        questions: [
          ["E", "Which component allows current to flow in one direction only?", "diode", "resistor", "capacitor", "switch", "Diodes block reverse current."],
          ["E", "Which component stores electric charge temporarily?", "capacitor", "diode", "LED", "fuse", "Capacitors store charge."],
          ["E", "An LED is a diode that", "gives out light", "stores charge", "measures current", "produces sound", "LED means light-emitting diode."],
          ["M", "The unit of capacitance is the", "farad", "ohm", "volt", "ampere", "Capacitance is measured in farads."],
          ["M", "In the resistor colour code, red represents", "2", "1", "5", "8", "Red stands for 2."],
          ["M", "A resistor has bands red, red, brown. Its value is", "220 Ω", "22 Ω", "2200 Ω", "122 Ω", "2, 2 followed by one zero."],
          ["M", "Diodes are used in rectifiers to", "change a.c. to d.c.", "store charge", "increase voltage", "produce light only", "They allow current one way."],
          ["H", "A resistor has bands brown, black, orange. Its value is", "10 000 Ω", "1000 Ω", "103 Ω", "100 Ω", "1, 0 followed by three zeros = 10 kΩ."],
          ["H", "A resistor is connected in series with an LED to", "limit the current through the LED", "increase the LED's brightness without limit", "store charge for the LED", "change a.c. to d.c.", "Too much current would destroy the LED."],
          ["H", "Electrolytic capacitors must be connected", "with the correct polarity", "in any direction", "only in parallel with a diode", "without wires", "Wrong polarity can damage them."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Plastic processing",
        subtopics: ["Sources of plastics", "Moulding processes", "Extrusion and vacuum forming", "Recycling plastics"],
        objectives: ["Describe how plastics are obtained", "Explain injection, compression and blow moulding", "Describe extrusion and vacuum forming", "Discuss the recycling of plastics"],
        lesson: {
          title: "How Plastic Products Are Made",
          summary: "Describe the processes used to shape plastics into useful products.",
          minutes: 40,
          notes: `## Sources
Most plastics are made from **petroleum** and natural gas; some from plant materials (bioplastics).

## Processes
| Process | How it works | Products |
|---|---|---|
| **injection moulding** | molten plastic is forced into a closed mould, cooled and ejected | buckets, chairs, bottle caps, toys |
| **blow moulding** | a hot tube of plastic is inflated with air inside a mould | bottles, jerry cans |
| **compression moulding** | powder or pellets of thermosetting plastic are pressed and heated in a mould | electrical fittings, plates |
| **extrusion** | molten plastic is forced through a shaped opening (die) continuously | pipes, cables, rods, window frames |
| **vacuum forming** | a heated plastic sheet is sucked over a mould by vacuum | trays, packaging, masks |
| **calendering** | plastic is pressed between rollers into sheets | sheets, films |

## Working plastics in the school workshop
Plastics can be cut with saws, shaped with files, bent after heating with a **strip heater**, and joined with **solvent cement** or adhesives.

## Recycling
Plastic waste can be collected, sorted, cleaned, shredded and remelted to make new products. Recycling reduces pollution and creates jobs. Reducing single-use plastics also helps.`,
          examples: `**Example 1.** Which process makes plastic bottles? *Answer:* **blow moulding**.

**Example 2.** Which process makes long plastic pipes? *Answer:* **extrusion**.

**Example 3.** Which process is used for thermosetting plastics such as electrical fittings? *Answer:* **compression moulding**.`,
        },
        questions: [
          ["E", "Most plastics are made from", "petroleum", "iron ore", "sand", "clay", "They are petrochemicals."],
          ["E", "Plastic bottles are made by", "blow moulding", "extrusion", "calendering", "casting in sand", "Air inflates the plastic in a mould."],
          ["E", "Plastic pipes are made by", "extrusion", "blow moulding", "vacuum forming", "injection moulding only", "Plastic is forced through a shaped die."],
          ["M", "Forcing molten plastic into a closed mould is called", "injection moulding", "extrusion", "calendering", "vacuum forming", "Buckets and chairs are made this way."],
          ["M", "Sucking a heated plastic sheet over a mould is", "vacuum forming", "blow moulding", "compression moulding", "extrusion", "A vacuum pulls the sheet down."],
          ["M", "Plastic sheets are produced by passing plastic between rollers in", "calendering", "injection moulding", "blow moulding", "welding", "Rollers press it flat."],
          ["M", "In the school workshop, acrylic can be bent after heating with a", "strip heater", "hacksaw", "file", "mallet only", "The heater softens a line along the sheet."],
          ["H", "Which process is used for thermosetting plastics such as electrical fittings?", "compression moulding", "blow moulding", "extrusion of pipes", "vacuum forming", "Thermosets are pressed and heated once."],
          ["H", "Which is a benefit of recycling plastics?", "it reduces pollution", "it increases litter", "it wastes energy entirely", "it blocks drains", "Waste plastic becomes useful again."],
          ["H", "Plastic pieces can be joined in the workshop with", "solvent cement", "solder", "rivets heated to red heat", "welding rods for steel", "Solvent softens and fuses the surfaces."],
        ],
      },
      {
        week: 2,
        title: "Ceramics and glass processing",
        subtopics: ["Preparing clay", "Shaping clay", "Drying, firing and glazing", "Making glass"],
        objectives: ["Describe how clay is prepared", "Explain methods of shaping clay", "Describe drying, firing and glazing", "Describe the manufacture of glass"],
        lesson: {
          title: "Making Ceramics and Glass",
          summary: "Explain how clay and glass products are made.",
          minutes: 40,
          notes: `## Preparing clay
Clay is dug, soaked, sieved to remove stones and roots, and **wedged/kneaded** to remove air bubbles (air trapped in clay can make it crack or burst during firing).

## Shaping clay
- **Pinch method** — pressing clay with the fingers
- **Coil method** — building with rolled clay ropes
- **Slab method** — joining flat sheets
- **Throwing** on a **potter's wheel**
- **Slip casting** — pouring liquid clay (**slip**) into plaster moulds
- **Pressing/extrusion** — for tiles and bricks

## Drying, firing and glazing
1. **Drying**: slowly in shade to avoid cracks.
2. **Biscuit (first) firing** in a **kiln** — clay becomes hard and permanent.
3. **Glazing**: coating with a glassy layer to make it waterproof and attractive.
4. **Glaze (second) firing**.
Products: pots, tiles, bricks, sanitary ware, insulators.

## Glass manufacture
1. Raw materials: **silica sand**, **soda ash**, **limestone** (plus waste glass, called **cullet**).
2. Melted in a furnace at about 1500 °C.
3. Shaped by **blowing**, **pressing**, **drawing** or the **float process** (floating on molten tin for flat window glass).
4. **Annealed** — cooled slowly to remove stresses so it does not crack.`,
          examples: `**Example 1.** Why is clay wedged before shaping? *Answer:* To **remove air bubbles** that could burst in the kiln.

**Example 2.** What is glazing? *Answer:* Coating fired clay with a **glassy layer** to make it waterproof and attractive.

**Example 3.** Why is glass annealed? *Answer:* To **remove internal stresses** so it does not crack.`,
        },
        questions: [
          ["E", "Clay products are hardened by heating in a", "kiln", "refrigerator", "vice", "lathe", "Firing takes place in a kiln."],
          ["E", "The main raw material of glass is", "silica sand", "clay", "petroleum", "wood", "Sand provides silica."],
          ["E", "Shaping clay on a rotating wheel is called", "throwing", "extrusion of metal", "welding", "forging", "Potters throw pots on a wheel."],
          ["M", "Clay is wedged or kneaded to", "remove air bubbles", "add colour", "make it wetter", "dry it completely", "Air bubbles can burst in firing."],
          ["M", "Coating a fired pot with a glassy layer is called", "glazing", "annealing", "galvanising", "sanding", "Glaze makes it waterproof."],
          ["M", "Building a pot with rolled ropes of clay is the", "coil method", "slab method", "pinch method", "slip casting", "Coils are stacked and smoothed."],
          ["M", "Pouring liquid clay into plaster moulds is", "slip casting", "throwing", "wedging", "calendering", "The plaster absorbs water."],
          ["H", "Glass is annealed after shaping in order to", "remove internal stresses so it does not crack", "colour it", "make it softer permanently", "melt it again", "Slow cooling prevents cracking."],
          ["H", "Flat window glass is produced by floating molten glass on", "molten tin", "water", "oil", "sand", "This is the float process."],
          ["H", "Freshly made clay articles should be dried slowly in the shade to", "prevent cracking", "make them heavier", "change their colour", "glaze them", "Rapid drying causes uneven shrinkage."],
        ],
      },
      {
        week: 3,
        title: "Scale drawing",
        subtopics: ["Meaning of scale", "Full size, reduction and enlargement", "Using the scale rule", "Interpreting scale drawings"],
        objectives: ["Explain the meaning of scale", "Distinguish reduction from enlargement scales", "Draw objects to a given scale", "Calculate real sizes from scale drawings"],
        lesson: {
          title: "Drawing to Scale",
          summary: "Use scales to draw large and small objects accurately on paper.",
          minutes: 45,
          notes: `## Meaning
A **scale** is the ratio of the size on the **drawing** to the **real** size of the object:
$$\\text{scale} = \\text{drawing size} : \\text{real size}$$

## Types of scale
| Scale | Meaning | Use |
|---|---|---|
| **1 : 1** (full size) | drawing = real size | small parts |
| **1 : 2, 1 : 5, 1 : 10, 1 : 50, 1 : 100** | **reduction** | furniture, buildings, maps |
| **2 : 1, 5 : 1, 10 : 1** | **enlargement** | watch parts, electronic components |

## Calculations
- Drawing size $=$ real size $\\times$ scale factor.
- Real size $=$ drawing size $\\div$ scale factor.
*At 1 : 50, a wall 5 m (5000 mm) long is drawn $\\frac{5000}{50} = 100$ mm long.*

## Scale rule
A **scale rule** has several scales marked on it (e.g. 1 : 1, 1 : 5, 1 : 20, 1 : 50, 1 : 100) so that real measurements can be read directly without calculation.

## Rules
- Always **state the scale** in the title block.
- **Dimensions** on a scale drawing show the **real** sizes, not the drawn sizes.`,
          examples: `**Example 1.** A room 4 m long is drawn at 1 : 100. How long is it on the drawing? *Answer:* $4000 \\div 100 = 40$ mm.

**Example 2.** A line 25 mm long on a 1 : 20 drawing represents what real length? *Answer:* $25 \\times 20 = 500$ mm.

**Example 3.** Is 5 : 1 a reduction or an enlargement scale? *Answer:* **enlargement**.`,
        },
        questions: [
          ["E", "A scale of 1 : 1 means the drawing is", "full size", "half size", "twice real size", "ten times smaller", "Drawing size equals real size."],
          ["E", "A scale of 1 : 50 is a", "reduction scale", "enlargement scale", "full-size scale", "time scale", "The drawing is smaller than the object."],
          ["E", "The scale of a drawing should be stated in the", "title block", "border line", "hidden lines", "centre lines", "It tells the reader the ratio."],
          ["M", "A scale of 5 : 1 is used for", "enlarging small parts", "reducing buildings", "maps of countries", "full-size doors", "The drawing is five times bigger."],
          ["M", "A room 4 m long is drawn at 1 : 100. How long is it on the drawing?", "40 mm", "400 mm", "4 mm", "4000 mm", "$4000 \\div 100 = 40$ mm."],
          ["M", "A line 25 mm long on a 1 : 20 drawing represents", "500 mm", "45 mm", "1.25 mm", "5000 mm", "$25 \\times 20 = 500$ mm."],
          ["M", "An instrument with several scales for reading real sizes directly is the", "scale rule", "protractor", "compasses", "T-square", "It avoids calculation."],
          ["H", "A wall 5 m long is drawn at 1 : 50. What is its length on the drawing?", "100 mm", "250 mm", "10 mm", "1000 mm", "$5000 \\div 50 = 100$ mm."],
          ["H", "Dimensions written on a scale drawing show", "the real sizes of the object", "the drawn sizes", "the scale factor only", "the paper size", "Readers need actual sizes."],
          ["H", "A component 3 mm wide is drawn at 10 : 1. Its drawn width is", "30 mm", "0.3 mm", "13 mm", "3 mm", "$3 \\times 10 = 30$ mm."],
        ],
      },
      {
        week: 4,
        title: "Shafts, couplings and bearings",
        subtopics: ["Shafts and axles", "Couplings and clutches", "Bearings", "Lubrication of bearings"],
        objectives: ["Distinguish shafts from axles", "Describe couplings and clutches", "Identify types of bearings", "Explain the need to lubricate bearings"],
        lesson: {
          title: "Parts That Carry Rotation",
          summary: "Describe shafts, couplings and bearings in machines.",
          minutes: 40,
          notes: `## Shafts and axles
- A **shaft** is a rotating rod that **transmits power** (turning force) from one part to another, e.g. a propeller shaft in a car, a motor shaft.
- An **axle** **supports** a rotating wheel; it may be fixed or rotating, e.g. a bicycle wheel axle.

## Couplings
Devices that **join two shafts** end to end so they rotate together.
- **Rigid couplings**: for shafts in exact alignment.
- **Flexible couplings**: allow slight misalignment and absorb shock.
- **Universal joint**: connects shafts at an angle (car propeller shaft).

## Clutches
Couplings that can **connect and disconnect** a driving shaft from a driven shaft while running — e.g. the clutch in a car or motorcycle lets the driver change gears.

## Bearings
**Bearings** support rotating shafts and **reduce friction**.
| Type | Description | Examples |
|---|---|---|
| **plain (bush) bearing** | a smooth sleeve (brass, bronze, nylon) around the shaft | fans, simple machines |
| **ball bearing** | hardened steel balls between two rings (races) | bicycle wheels, electric motors |
| **roller bearing** | cylindrical rollers | heavy loads, vehicle wheels |
| **needle bearing** | very thin rollers | small spaces |

## Lubrication
Bearings need **oil or grease** to reduce friction, wear, heat and noise, and to prevent rust. Sealed bearings are pre-packed with grease.`,
          examples: `**Example 1.** What part joins two shafts end to end? *Answer:* a **coupling**.

**Example 2.** Which device lets a driver disconnect the engine from the gearbox? *Answer:* the **clutch**.

**Example 3.** Why are bearings lubricated? *Answer:* To reduce **friction, wear and heat**.`,
        },
        questions: [
          ["E", "A rotating rod that transmits power is a", "shaft", "bearing", "clutch pedal", "pulley belt", "Shafts carry turning force."],
          ["E", "Bearings are used to", "support shafts and reduce friction", "increase friction", "store electricity", "cut metal", "They allow smooth rotation."],
          ["E", "A device that joins two shafts end to end is a", "coupling", "bearing", "rivet", "chisel", "Couplings connect shafts."],
          ["M", "Which part allows a driver to disconnect the engine from the gearbox?", "clutch", "axle", "bush bearing", "spoke", "Clutches engage and disengage drive."],
          ["M", "A bearing with hardened steel balls between two rings is a", "ball bearing", "plain bearing", "needle bearing", "bush", "The balls roll between races."],
          ["M", "An axle mainly", "supports a rotating wheel", "joins two shafts", "stores oil", "cuts threads", "It carries the wheel."],
          ["M", "A universal joint connects shafts that are", "at an angle to each other", "exactly in line only", "not rotating", "made of plastic", "It transmits motion through an angle."],
          ["H", "Which bearing is best for very heavy loads?", "roller bearing", "needle bearing in a toy", "plastic bush", "ball bearing in a watch", "Rollers spread heavy loads."],
          ["H", "Flexible couplings are used because they", "allow slight misalignment and absorb shock", "lock shafts rigidly", "increase vibration", "stop rotation", "They protect machines from shock."],
          ["H", "A plain (bush) bearing is usually made of", "brass, bronze or nylon", "glass", "rubber bands", "concrete", "These materials slide smoothly on steel."],
        ],
      },
      {
        week: 5,
        title: "Energy in technology",
        subtopics: ["Energy sources for machines", "Fuels and engines", "Renewable energy technologies", "Saving energy in the home and workshop"],
        objectives: ["Identify energy sources used to drive machines", "Describe how petrol and diesel engines use fuel", "Describe solar, wind and hydro technologies", "Suggest ways of saving energy"],
        lesson: {
          title: "Powering Machines",
          summary: "Explain how machines are powered and how energy can be used wisely.",
          minutes: 40,
          notes: `## Energy sources for machines
- **Human and animal power**: hand tools, bicycles, ox-ploughs.
- **Fuels**: petrol, diesel, kerosene, cooking gas, charcoal.
- **Electricity**: from the grid, generators, batteries, solar panels.
- **Water, wind and sunlight**: renewable sources.

## Engines
An **internal combustion engine** burns fuel **inside** a cylinder; hot gases push a **piston**, and the crankshaft turns this into rotation.
- **Petrol engines** use a **spark plug** to ignite the fuel–air mixture.
- **Diesel engines** ignite fuel by **compressing** air until it is very hot (no spark plug).
Most engines work on a **four-stroke cycle**: **induction (suck) → compression (squeeze) → power (bang) → exhaust (blow)**.

## Renewable energy technologies
| Technology | How it works |
|---|---|
| **solar panel** (photovoltaic) | converts sunlight directly into electricity |
| **solar water heater / dryer** | uses the sun's heat |
| **wind turbine** | wind turns blades that drive a generator |
| **hydroelectric power** | falling water turns turbines (e.g. Kainji, Jebba, Shiroro dams) |
| **biogas digester** | animal and plant waste decays to produce methane gas for cooking |

## Saving energy
Switch off unused machines and lights; maintain engines and generators; use energy-efficient bulbs (LEDs); insulate buildings; use solar where possible.`,
          examples: `**Example 1.** Which engine uses a spark plug? *Answer:* the **petrol engine**.

**Example 2.** Name the four strokes of an engine. *Answer:* **induction, compression, power, exhaust**.

**Example 3.** What gas does a biogas digester produce? *Answer:* **methane**.`,
        },
        questions: [
          ["E", "Which device converts sunlight directly into electricity?", "solar panel", "diesel engine", "biogas digester", "windmill pump only", "Photovoltaic cells produce electricity."],
          ["E", "Which is a renewable energy source?", "wind", "diesel", "petrol", "coal", "Wind is continually replaced."],
          ["E", "Kainji and Jebba dams produce", "hydroelectric power", "solar power", "biogas", "nuclear power", "Falling water drives turbines."],
          ["M", "In an internal combustion engine, fuel is burnt", "inside the cylinder", "outside the engine", "in the radiator", "in the tyres", "Combustion is internal."],
          ["M", "Which engine uses a spark plug to ignite its fuel?", "petrol engine", "diesel engine", "steam engine", "wind turbine", "Diesel engines use compression instead."],
          ["M", "The correct order of the four strokes is", "induction, compression, power, exhaust", "power, induction, exhaust, compression", "exhaust, power, compression, induction", "compression, exhaust, induction, power", "Suck, squeeze, bang, blow."],
          ["M", "A biogas digester produces mainly", "methane", "oxygen", "nitrogen", "hydrogen sulphide only", "Decaying waste gives methane."],
          ["H", "A diesel engine ignites its fuel by", "compressing air until it is very hot", "using a spark plug", "using a match", "sunlight", "Hot compressed air ignites the injected fuel."],
          ["H", "Which is the most energy-efficient lighting for homes?", "LED bulbs", "filament bulbs", "kerosene lamps", "candles", "LEDs use far less energy."],
          ["H", "In a wind turbine, the wind turns blades which drive a", "generator", "battery charger only", "spark plug", "cooling fan", "The generator produces electricity."],
        ],
      },
      {
        week: 6,
        title: "Maintenance of household appliances",
        subtopics: ["Common household appliances", "Safe use of appliances", "Simple fault finding", "Routine maintenance"],
        objectives: ["Identify common household appliances", "Use appliances safely", "Identify simple faults and their causes", "Carry out routine maintenance of appliances"],
        lesson: {
          title: "Caring for Appliances at Home",
          summary: "Use, check and maintain household appliances safely.",
          minutes: 40,
          notes: `## Common appliances
electric iron, fan, kettle, refrigerator, blender, television, washing machine, cooker, air conditioner, generator.

## Safe use
- Read the **manufacturer's instructions** (user manual).
- Do not overload sockets or use damaged cords and plugs.
- Keep appliances away from water; never touch them with wet hands.
- Switch off and **unplug** before cleaning or checking.
- Use the correct **fuse** rating.
- Use **stabilisers** or surge protectors where the supply fluctuates.
- Never run a generator indoors (carbon monoxide).

## Simple fault finding
| Fault | Possible cause | Simple check |
|---|---|---|
| appliance not working at all | no power, blown fuse, loose plug | check socket, fuse, plug connections |
| iron not heating | faulty element or thermostat | take to a technician |
| fan noisy | dry bearings, loose blade | lubricate bearings, tighten screws |
| fridge not cooling | door seal damaged, dirty coils, low gas | check seal, clean coils, call technician |
| sparks from socket | loose connection | switch off at mains; call an electrician |

## Routine maintenance
Clean appliances regularly; defrost fridges; descale kettles; oil fan bearings; service generators (oil change, air filter, spark plug); keep vents clear for ventilation.
**Leave repairs of internal electrical parts to qualified technicians.**`,
          examples: `**Example 1.** What should you do before cleaning a blender? *Answer:* **Switch off and unplug** it.

**Example 2.** A fan is noisy. What is a likely cause? *Answer:* **dry bearings** or a loose blade.

**Example 3.** Why should stabilisers be used with some appliances? *Answer:* To **protect them from voltage fluctuations**.`,
        },
        questions: [
          ["E", "Before cleaning an electric appliance, you should", "switch it off and unplug it", "leave it running", "pour water inside it", "increase the voltage", "This prevents electric shock."],
          ["E", "The booklet that explains how to use an appliance is the", "user manual", "title block", "receipt", "timetable", "It gives the manufacturer's instructions."],
          ["E", "Which is a household appliance?", "electric iron", "hacksaw", "mortise chisel", "scriber", "Irons are used at home."],
          ["M", "A likely cause of a noisy fan is", "dry bearings", "too much light", "a full fridge", "a new plug", "Bearings need lubrication."],
          ["M", "An appliance does not work at all. The first thing to check is", "the power supply, plug and fuse", "the colour of the appliance", "the user's shoes", "the paint", "Check the simplest causes first."],
          ["M", "Stabilisers protect appliances from", "voltage fluctuations", "dust only", "insects", "rust", "They keep voltage steady."],
          ["M", "Plugging too many appliances into one socket is dangerous because it", "overloads the socket and can cause fire", "saves electricity", "cools the wires", "improves performance", "Excess current overheats wiring."],
          ["H", "Sparks come from a socket when a plug is inserted. What should you do?", "switch off at the mains and call an electrician", "keep using it", "touch the wires to check", "pour water on it", "Loose connections are a fire risk."],
          ["H", "Internal electrical repairs of appliances should be done by", "qualified technicians", "any student", "children at home", "shop customers", "They require training for safety."],
          ["H", "A refrigerator door seal that is damaged will cause the fridge to", "cool poorly and waste energy", "cool better", "make ice faster", "use less electricity", "Warm air leaks in."],
        ],
      },
    ],
  },
];
