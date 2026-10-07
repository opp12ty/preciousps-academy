import type { TermPlan } from "../types";

/** SS2 Geography — original Precious PS content following the national senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Weathering and mass movement",
        subtopics: ["Denudation and weathering", "Physical weathering", "Chemical and biological weathering", "Mass movement"],
        objectives: ["Define denudation and weathering", "Describe the processes of physical weathering", "Describe chemical and biological weathering", "Describe the types and effects of mass movement"],
        lesson: {
          title: "Breaking Down the Rocks",
          summary: "Describe weathering and mass movement and the landforms they produce.",
          minutes: 40,
          notes: `## Denudation
The wearing down of the land surface. It involves **weathering**, **erosion**, **transportation** and (finally) **deposition**.

## Weathering
The **breaking down and decay of rocks in place (in situ)** by the action of weather, chemicals, plants and animals. Unlike erosion, it involves **no movement** of the material.

## Physical (mechanical) weathering
Rocks are broken into smaller pieces **without any change in chemical composition**.
- **temperature changes (thermal expansion)** — in deserts, rocks expand by day and contract at night; the outer layers peel off like the skins of an onion — **exfoliation** — producing **exfoliation domes**; different minerals expanding at different rates cause **granular disintegration**
- **frost action (freeze–thaw)** — water in cracks freezes, expands by about 9% and wedges the rock apart; angular fragments (**scree**) collect at the foot of slopes. Common in cold and mountain regions
- **pressure release (unloading)** — when overlying rock is removed, the rock below expands and cracks parallel to the surface
- **salt crystallisation** — salts growing in pores prise grains apart
- alternate wetting and drying

## Chemical weathering
Rocks **decompose** through chemical reactions, forming new substances. It is fastest in **hot, wet** climates.
- **solution** — soluble minerals such as rock salt dissolve in water
- **carbonation** — rain water containing carbon dioxide is a weak acid that dissolves **limestone**; it produces **karst** scenery: caves, sinkholes, stalactites and stalagmites
- **oxidation** — oxygen combines with iron minerals; the rock turns reddish-brown and crumbles (rusting)
- **hydration** — minerals absorb water and swell
- **hydrolysis** — water reacts with minerals such as felspar in granite to form **clay** (kaolin)

## Biological weathering
- **roots** grow into cracks and widen them
- **burrowing animals** (earthworms, termites, rodents) loosen rock and soil
- decaying plants produce **humic acids** that attack rock
- **man** — quarrying, mining, farming and road construction

## Factors affecting weathering
- **climate** — physical weathering dominates in deserts and cold lands; chemical in the humid tropics
- **rock type and structure** — hardness, mineral composition, joints and bedding planes
- **relief** — steep slopes expose fresh rock
- **vegetation and living organisms**
- **time**

## Results of weathering
soil formation; **inselbergs**, **tors** and exfoliation domes on granite; scree slopes; deep red lateritic soils in the tropics; karst features in limestone.

## Mass movement (mass wasting)
The **movement of weathered material down a slope under the influence of gravity**, often helped by water as a lubricant.
### Slow movements
- **soil creep** — the very slow, continuous downhill movement of soil; shown by tilted fences, poles and trees and by bulging walls
- **solifluction** — the slow flow of saturated soil over frozen ground
### Rapid movements
- **landslide** — a mass of rock and soil slides suddenly down a steep slope, often after heavy rain or an earthquake
- **rock fall** — rocks drop freely from a cliff
- **mudflow** — saturated soil flows like a liquid
- **slump** — material slips with a backward rotation along a curved surface
- **avalanche** — a sudden fall of snow and ice

### Factors
steepness of slope; heavy rainfall; nature of the rock; earthquakes; removal of vegetation; undercutting by rivers, the sea or road construction.

### Effects
loss of lives and property; roads and railways blocked; farmland destroyed; rivers dammed; exposure of fresh rock.
### Control
planting trees and grass; terracing; retaining walls; proper drainage; avoiding building on steep slopes.`,
          examples: `**Example 1.** Distinguish weathering from erosion. *Answer:* Weathering breaks rock down **in place**; erosion **removes** the broken material.

**Example 2.** Name the type of weathering that forms caves in limestone. *Answer:* **Carbonation** (chemical weathering).

**Example 3.** Give one sign of soil creep. *Answer:* **Tilted fence posts or trees** on a slope.`,
        },
        questions: [
          ["E", "The breaking down of rocks in place by the action of weather is called", "weathering", "erosion", "deposition", "transportation", "No movement of the material is involved."],
          ["E", "The peeling off of the outer layers of a rock like the skins of an onion is", "exfoliation", "carbonation", "oxidation", "solifluction", "It results from repeated heating and cooling."],
          ["E", "The movement of weathered material down a slope under gravity is", "mass movement", "weathering", "carbonation", "deposition", "Soil creep and landslides are examples."],
          ["M", "The type of chemical weathering most active on limestone is", "carbonation", "oxidation", "exfoliation", "frost action", "Weakly acidic rain water dissolves the rock."],
          ["M", "Frost action is most effective in", "cold and mountainous regions", "hot deserts", "equatorial forests", "coastal swamps", "Water freezes and expands in cracks."],
          ["M", "Chemical weathering is most rapid in regions that are", "hot and wet", "cold and dry", "hot and dry", "frozen all year", "Heat and moisture speed up chemical reactions."],
          ["M", "Tilted fence posts and trees on a hillside are evidence of", "soil creep", "rock fall", "exfoliation", "carbonation", "The soil moves downhill very slowly."],
          ["H", "The process by which felspar in granite is changed to clay is", "hydrolysis", "exfoliation", "frost shattering", "pressure release", "Water reacts chemically with the mineral."],
          ["H", "Physical weathering differs from chemical weathering in that physical weathering", "does not change the chemical composition of the rock", "forms new minerals", "occurs only in limestone", "needs carbon dioxide", "The rock is only broken into smaller pieces."],
          ["H", "Landslides are most likely to occur", "on steep slopes after heavy rainfall", "on flat plains in the dry season", "in dense forest on level land", "on sandy beaches", "Water adds weight and lubricates the material."],
        ],
      },
      {
        week: 2,
        title: "Action of running water",
        subtopics: ["River erosion and transportation", "The upper course", "The middle course", "The lower course and river importance"],
        objectives: ["Describe how a river erodes and transports its load", "Describe the features of the upper course", "Describe the features of the middle course", "Describe the features of the lower course and the importance of rivers"],
        lesson: {
          title: "The Work of Rivers",
          summary: "Describe river processes and the landforms of the three courses of a river.",
          minutes: 40,
          notes: `## River terms
**source**, **mouth**, **tributary**, **confluence** (where rivers meet), **drainage basin (catchment)**, **watershed** (the divide between basins), **river regime** (seasonal variation in volume).

## Processes of erosion
- **hydraulic action** — the force of moving water loosens and removes material
- **corrasion (abrasion)** — the load is hurled against the bed and banks, grinding them away
- **attrition** — the fragments of the load collide and are worn smaller and rounder
- **solution (corrosion)** — soluble rocks are dissolved
Erosion is **vertical** (deepening), **lateral** (widening) and **headward** (lengthening at the source).

## Transportation
- **traction** — large boulders rolled along the bed
- **saltation** — smaller pebbles bounced along
- **suspension** — fine silt and clay carried within the water
- **solution** — dissolved minerals
The **load** a river can carry depends on its **volume and velocity**.

## Deposition
Occurs when the river loses energy — where the gradient flattens, the volume falls, the river enters a lake or sea, or the channel widens. The heaviest material is dropped first.

## The upper (youthful) course
Steep gradient; fast flow; **vertical erosion** dominant.
- **V-shaped valley** and **gorge**
- **interlocking spurs**
- **waterfalls** and **rapids** — where a band of hard rock lies across the river; a **plunge pool** forms at the foot. Examples: Victoria Falls, Gurara Falls, Erin-Ijesha Falls
- **pot-holes** — circular hollows drilled in the bed by pebbles swirled by eddies

## The middle (mature) course
Gentler gradient; more volume; **lateral erosion** becomes important.
- a wider valley with a flatter floor
- **meanders** — bends in the river; erosion on the outer (concave) bank forms a **river cliff**; deposition on the inner bank forms a **slip-off slope**
- interlocking spurs are trimmed back into **bluffs**

## The lower (old-age) course
Very gentle gradient; large volume; **deposition** dominant.
- a broad **flood plain** covered with fertile alluvium
- **levees** — raised banks built up by deposition during floods
- pronounced meanders and **ox-bow lakes** — a meander loop cut off when the river breaks through its narrow neck
- **braided channels** — the river splits round sandbanks
- **deferred tributaries** — unable to join because of levees
- a **delta** — a fan-shaped area of sediment at the mouth, crossed by **distributaries**

### Deltas
Types: **arcuate** (fan-shaped: the **Niger** and **Nile**), **bird's-foot** (the Mississippi), **estuarine**.
Conditions: a large load of sediment; a sheltered coast with weak tides and currents; a shallow sea; no large lake upstream to trap the load.
Where strong tides sweep the sediment away, the mouth is a funnel-shaped **estuary**.

## Rejuvenation
A fall in sea level or uplift of the land renews a river's erosive power, producing **river terraces**, **knick points** and **incised meanders**.

## River capture
A river with greater erosive power cuts back by headward erosion and diverts the headwaters of another; evidence: an **elbow of capture**, a **misfit stream** and a **wind gap**.

## Drainage patterns
**dendritic** — on uniform rock; **trellis** — on alternating hard and soft rock; **radial** — from a dome or volcano; **centripetal** — into a basin.

## Importance of rivers
water supply; **irrigation**; **hydro-electric power**; fishing; transport; fertile alluvial soils; sand and gravel; tourism; natural boundaries.
### Problems
flooding; erosion of farmland; barriers to movement; breeding places for disease vectors.`,
          examples: `**Example 1.** Name two features of the upper course of a river. *Answer:* **V-shaped valley** and **waterfalls**.

**Example 2.** How is an ox-bow lake formed? *Answer:* A river **cuts through the neck of a meander**, leaving the loop isolated.

**Example 3.** State two conditions that favour delta formation. *Answer:* A **heavy load of sediment** and a **sheltered coast with weak tides**.`,
        },
        questions: [
          ["E", "The place where a river begins is its", "source", "mouth", "confluence", "delta", "It is usually in a highland."],
          ["E", "A V-shaped valley is characteristic of the", "upper course of a river", "lower course of a river", "delta", "flood plain", "Vertical erosion is dominant there."],
          ["E", "A fan-shaped area of sediment deposited at the mouth of a river is", "a delta", "a levee", "a meander", "a gorge", "It is crossed by distributaries."],
          ["M", "The wearing away of a river's bed and banks by the load it carries is called", "corrasion", "attrition", "solution", "saltation", "It is also known as abrasion."],
          ["M", "The process by which the fragments carried by a river are worn smaller by rubbing against one another is", "attrition", "corrasion", "hydraulic action", "traction", "The load becomes smaller and rounder downstream."],
          ["M", "Fine silt and clay are transported by a river mainly in", "suspension", "traction", "saltation", "solution", "The particles are held within the water."],
          ["M", "Raised banks built up along a river by deposition during floods are called", "levees", "bluffs", "terraces", "spurs", "They are highest next to the channel."],
          ["H", "An ox-bow lake is formed when", "a river cuts through the neck of a meander", "a waterfall retreats upstream", "a river flows over hard rock", "a tributary joins a river", "The abandoned loop is sealed off by deposition."],
          ["H", "A river is likely to form an estuary rather than a delta where", "strong tides and currents remove the sediment", "the sea is shallow and calm", "the river carries a very heavy load", "the coast is sheltered", "The sediment cannot accumulate at the mouth."],
          ["H", "A drainage pattern that develops on alternating bands of hard and soft rock, with tributaries joining at right angles, is", "trellis", "dendritic", "radial", "centripetal", "The pattern looks rectangular."],
        ],
      },
      {
        week: 3,
        title: "Wind action and desert landforms",
        subtopics: ["Deserts and wind processes", "Features of wind erosion", "Features of wind deposition", "Water action in deserts"],
        objectives: ["Describe the types of desert and the processes of wind action", "Describe the features produced by wind erosion", "Describe the features produced by wind deposition", "Describe the landforms produced by water in deserts"],
        lesson: {
          title: "Landforms of Arid Lands",
          summary: "Describe how wind and water shape desert landscapes.",
          minutes: 40,
          notes: `## Deserts
Regions of very low rainfall (under 250 mm a year), with sparse vegetation, great daily ranges of temperature and loose, dry surface material — conditions in which **wind** is an effective agent.
### Types of desert surface
- **erg** — sandy desert (parts of the Sahara)
- **reg** — stony desert covered with gravel and pebbles
- **hamada** — bare rock desert
- **badlands** — land deeply gullied by occasional rainstorms
Hot deserts: Sahara, Kalahari, Namib, Arabian, Atacama, the Australian desert.

## Wind erosion
- **deflation** — the lifting and blowing away of loose, dry particles, lowering the surface
- **abrasion** — wind-borne sand grains blast and polish rock surfaces, mostly within about a metre of the ground
- **attrition** — the particles wear one another down into rounded grains

## Features of wind erosion
| Feature | Description |
|---|---|
| **rock pedestal (mushroom rock)** | a rock undercut near its base by abrasion, leaving a wide cap on a narrow stem |
| **zeugen** | ridges of hard rock capping soft rock, with furrows between, formed where the layers are **horizontal** |
| **yardangs** | long, narrow, steep-sided ridges parallel to the wind, formed where hard and soft rocks stand in **vertical** bands |
| **mesa and butte** | flat-topped remnants of a plateau; a butte is the smaller |
| **inselberg** | an isolated, steep-sided residual hill rising abruptly from a plain |
| **deflation hollow** | a depression scooped out by deflation; if it reaches the water table it forms an **oasis** (the Qattara Depression) |
| **ventifacts (dreikanter)** | pebbles faceted and polished by sand-blast |

## Wind transportation
**suspension** (fine dust carried high and far — the harmattan haze), **saltation** (sand grains bouncing) and **surface creep** (larger grains rolled along).

## Features of wind deposition
- **sand dunes** — hills of sand
  - **barchan** — a **crescent-shaped** dune lying **across** the wind, with horns pointing **downwind**, a gentle windward slope and a steep leeward slope; it migrates forward
  - **seif (longitudinal) dune** — a long ridge of sand lying **parallel** to the prevailing wind
- **loess** — fine yellow dust blown out of deserts and deposited beyond them as thick, fertile, unstratified deposits: northern China, parts of central Europe and the USA

## Water action in deserts
Rain is rare but falls in violent storms, causing **flash floods** that erode rapidly.
- **wadi** — a steep-sided, dry valley that fills briefly after rain
- **alluvial fan** — a cone of sediment where a wadi leaves a highland; fans merge into a **bajada**
- **pediment** — a gently sloping rock surface at the foot of a highland
- **playa (salt lake)** — a temporary lake in an inland basin, drying to a salt flat (**salina**)

## Man and deserts
- **oases** support date palms, farming and settlement; irrigation from rivers (the Nile) and wells
- minerals: petroleum (Sahara, Arabia), nitrates, phosphates
- nomadic herding; tourism; solar energy
### Desertification
The spread of desert conditions into semi-arid lands such as the Sahel, caused by drought, overgrazing, deforestation and over-cultivation. Control: shelter belts and afforestation, controlled grazing, irrigation, sand-dune fixation.`,
          examples: `**Example 1.** What is deflation? *Answer:* The **lifting and removal of loose particles** by wind.

**Example 2.** Describe a barchan. *Answer:* A **crescent-shaped sand dune** with its horns pointing downwind.

**Example 3.** Name two features of water action in deserts. *Answer:* **Wadis** and **alluvial fans**.`,
        },
        questions: [
          ["E", "The removal of loose, dry particles from the ground by wind is called", "deflation", "abrasion", "carbonation", "saltation", "It lowers the land surface."],
          ["E", "A crescent-shaped sand dune is called a", "barchan", "seif", "yardang", "zeugen", "Its horns point downwind."],
          ["E", "A sandy desert is known as", "an erg", "a reg", "a hamada", "a playa", "A reg is stony and a hamada rocky."],
          ["M", "A rock that has been undercut near its base by wind abrasion, leaving a wide top on a narrow stem, is a", "rock pedestal", "barchan", "mesa", "wadi", "It is also called a mushroom rock."],
          ["M", "A steep-sided, dry valley in a desert that carries water only after rain is a", "wadi", "playa", "bajada", "yardang", "It is formed by flash floods."],
          ["M", "Long ridges of sand lying parallel to the direction of the prevailing wind are", "seif dunes", "barchans", "zeugen", "pediments", "They are also called longitudinal dunes."],
          ["M", "Fertile deposits of fine wind-blown dust found beyond the margins of deserts are known as", "loess", "scree", "alluvium", "laterite", "Northern China has thick deposits."],
          ["H", "Yardangs differ from zeugen in that yardangs are formed where bands of hard and soft rock are", "vertical and parallel to the wind", "horizontal", "absent", "under water", "Zeugen form on horizontal layers."],
          ["H", "Wind abrasion is most effective close to the ground because", "the wind carries most of its sand within about a metre of the surface", "the wind is strongest at great heights", "rocks are softer near the ground", "there is more rainfall near the ground", "Sand grains are too heavy to be lifted high."],
          ["H", "An oasis may form in a deflation hollow when", "the hollow is lowered to the water table", "a river floods the desert", "sand dunes migrate into it", "rainfall increases to 2000 mm", "Ground water then reaches the surface."],
        ],
      },
      {
        week: 4,
        title: "Waves and coastal landforms",
        subtopics: ["Waves, tides and currents", "Features of marine erosion", "Features of marine deposition", "Types of coast and coral reefs"],
        objectives: ["Describe waves, tides and currents and how waves erode", "Describe the features of marine erosion", "Describe the features of marine deposition", "Describe types of coast and coral reefs"],
        lesson: {
          title: "The Work of the Sea",
          summary: "Describe how waves shape coasts by erosion and deposition.",
          minutes: 40,
          notes: `## Waves, tides and currents
- **waves** — caused by **wind** blowing over the sea. The **swash** runs up the beach; the **backwash** runs back. **Constructive** waves (strong swash) build beaches; **destructive** waves (strong backwash) erode them
- **tides** — the regular rise and fall of the sea, caused by the gravitational pull of the **moon and sun**; spring tides (highest) occur at new and full moon, neap tides at the quarters
- **currents** — streams of water moving in a definite direction

## Processes of wave erosion
- **hydraulic action** — waves compress air in cracks, shattering the rock
- **corrasion (abrasion)** — waves hurl pebbles against the cliff
- **attrition** — pebbles wear one another down
- **solution** — sea water dissolves limestone and chalk

## Features of erosion
- **cliff** — a steep rock face, undercut at its base to form a **wave-cut notch**
- **wave-cut platform** — the gently sloping rock surface left as a cliff retreats
- **headlands (capes)** and **bays** — resistant rock stands out; softer rock is worn back
- on a headland, in sequence: **cave → arch → stack → stump**. A crack is enlarged into a cave; caves on both sides meet to form an arch; the roof collapses, leaving an isolated pillar, the stack; this is worn down to a stump
- **blow-hole (gloup)** — a vertical shaft from the roof of a cave to the cliff top
- **geo** — a narrow inlet formed when a cave roof collapses

## Transport along the shore
**Longshore drift** — waves approaching the coast at an angle carry material up the beach obliquely; the backwash returns it straight down; material thus zigzags **along** the coast. **Groynes** are built to check it.

## Features of deposition
- **beach** — an accumulation of sand, shingle and pebbles between high and low water marks
- **spit** — a ridge of sand or shingle joined to the land at one end and projecting into the sea, often across a bay or river mouth, with a hooked end
- **bar** — a ridge of sand across a bay or river mouth, or parallel to the coast, enclosing a **lagoon**: the Lagos and Lekki lagoons
- **tombolo** — a bar joining an island to the mainland
- **mud-flats and marine swamps** — in sheltered estuaries, colonised by mangroves
- coastal sand dunes

## Types of coast
### Submerged coasts (a rise in sea level or sinking of the land)
- **ria** — a drowned river valley, funnel-shaped: south-west Ireland, Sierra Leone
- **fiord** — a drowned glaciated valley, long, deep and steep-sided: Norway, New Zealand
- **estuary** — a drowned river mouth: the Gambia
- Dalmatian coast — drowned ridges parallel to the shore
### Emerged coasts (a fall in sea level or uplift)
- **raised beach** — an old beach and cliff line above the present shore
- emergent coastal plain

## Coral reefs
Built by tiny marine animals, **coral polyps**, whose limy skeletons accumulate. They need **warm water** (about 20–30 °C), **shallow**, **clear**, **salty** water with plenty of sunlight and plankton — so they grow in tropical seas, away from muddy river mouths.
- **fringing reef** — attached to the shore, with a narrow, shallow lagoon
- **barrier reef** — some distance offshore, separated by a wide, deep lagoon: the Great Barrier Reef of Australia
- **atoll** — a ring-shaped reef enclosing a lagoon: common in the Pacific and Indian Oceans

## Importance of coasts
harbours and ports; fishing; salt; tourism and recreation; oil and gas offshore; sand for building; sites for settlement.
### Problems
**coastal erosion** (Bar Beach, Lagos); flooding and storm surges; silting of harbours; pollution.
### Protection
sea walls, groynes, breakwaters, beach nourishment, mangrove conservation.`,
          examples: `**Example 1.** List the stages by which a stack is formed. *Answer:* **Crack → cave → arch → stack** (then stump).

**Example 2.** What is longshore drift? *Answer:* The **movement of beach material along the coast** by waves approaching at an angle.

**Example 3.** State three conditions needed for coral growth. *Answer:* **Warm, shallow and clear salt water**.`,
        },
        questions: [
          ["E", "Sea waves are caused mainly by", "wind", "the moon", "earthquakes only", "rivers", "Wind blowing over the water sets it in motion."],
          ["E", "The regular rise and fall of the level of the sea is known as", "the tide", "a current", "the swash", "a wave", "It is caused by the pull of the moon and the sun."],
          ["E", "An accumulation of sand and pebbles between the high and low water marks is a", "beach", "cliff", "stack", "headland", "It is a feature of deposition."],
          ["M", "An isolated pillar of rock standing in the sea off a headland is called a", "stack", "spit", "bar", "tombolo", "It is left when the roof of an arch collapses."],
          ["M", "The movement of beach material along a coast by waves that break at an angle is", "longshore drift", "backwash", "attrition", "tidal flow", "The material follows a zigzag path."],
          ["M", "A ridge of sand joined to the land at one end and projecting into the sea is a", "spit", "stack", "cliff", "fiord", "It often has a hooked end."],
          ["M", "A ring-shaped coral reef enclosing a lagoon is called", "an atoll", "a fringing reef", "a barrier reef", "a tombolo", "Many occur in the Pacific Ocean."],
          ["H", "A drowned glaciated valley with steep sides and deep water, as found in Norway, is a", "fiord", "ria", "lagoon", "delta", "A ria is a drowned river valley."],
          ["H", "Coral reefs are absent near the mouths of large rivers because", "the water is muddy and less salty", "the water is too warm", "the sea is too deep there", "there are no waves", "Polyps need clear, salty water."],
          ["H", "The correct sequence in the erosion of a headland is", "cave, arch, stack, stump", "arch, cave, stump, stack", "stack, arch, cave, stump", "stump, stack, arch, cave", "Each feature results from further erosion of the one before."],
        ],
      },
      {
        week: 5,
        title: "Earthquakes and vulcanicity",
        subtopics: ["Plate tectonics and earth movements", "Earthquakes", "Intrusive volcanic features", "Extrusive volcanic features and their effects"],
        objectives: ["Outline plate tectonics and the types of earth movement", "Describe the causes, measurement and effects of earthquakes", "Describe intrusive volcanic features", "Describe extrusive volcanic features and the effects of vulcanicity"],
        lesson: {
          title: "Forces from Within the Earth",
          summary: "Describe earthquakes, volcanic landforms and their effects on man.",
          minutes: 40,
          notes: `## Plate tectonics
The crust is broken into large, rigid **plates** that move slowly on the semi-molten upper mantle. Most earthquakes, volcanoes and fold mountains occur along **plate boundaries**:
- **divergent (constructive)** — plates move apart; magma rises to form new crust: the Mid-Atlantic Ridge, the East African Rift Valley
- **convergent (destructive)** — plates collide; one sinks beneath the other (subduction) or the crust crumples into fold mountains: the Andes, the Himalayas
- **transform (conservative)** — plates slide past each other: the San Andreas Fault

## Earth movements
- **lateral (horizontal) movements** — compression produces **folds**; tension produces **faults** (normal, reverse and tear faults), rift valleys and block mountains
- **vertical movements** — uplift and subsidence of large areas

## Earthquakes
A sudden shaking of the earth's crust caused by the release of energy when rocks fracture and move along a **fault**; some accompany volcanic eruptions.
- **focus (hypocentre)** — the point of origin within the crust
- **epicentre** — the point on the surface **directly above** the focus, where the shock is strongest
- **seismic waves** — primary (P), secondary (S) and surface (L) waves spread out from the focus
- recorded by a **seismograph**; magnitude is measured on the **Richter scale**, intensity on the Mercalli scale
- an earthquake under the sea may cause a **tsunami** — a series of giant waves

### Earthquake zones
The **Circum-Pacific belt** (the "Ring of Fire"), the **Alpine–Himalayan belt** and the mid-oceanic ridges.
### Effects
loss of life; collapse of buildings, bridges and dams; fires from broken gas pipes; landslides; tsunamis; displacement of land; outbreaks of disease.

## Vulcanicity
The processes by which **magma** (molten rock) is forced into the crust or out on to the surface (as **lava**).

## Intrusive features
Magma solidifies **within** the crust, and is later exposed by erosion.
| Feature | Description |
|---|---|
| **batholith** | a very large dome-shaped mass of granite, forming the root of mountains |
| **laccolith** | a mushroom-shaped mass that arches the overlying strata |
| **lopolith** | a saucer-shaped mass |
| **phacolith** | a lens-shaped mass in the crest of an anticline |
| **sill** | a **horizontal** sheet between bedding planes |
| **dyke** | a **vertical** or steeply inclined wall cutting across the strata |

## Extrusive features
- **volcano** — a cone built round a vent
  - **active** (erupts often: Etna, Stromboli), **dormant** (may erupt again: Mount Cameroon erupts at intervals; Vesuvius), **extinct** (Kilimanjaro, Kenya)
  - **ash and cinder cone** — steep sides
  - **lava cone**: **acid lava** is viscous and builds a steep dome; **basic lava** is fluid and builds a gently sloping **shield volcano** (Mauna Loa)
  - **composite cone (strato-volcano)** — alternate layers of lava and ash (Fuji, Kilimanjaro)
- **crater** — the hollow at the summit; a **caldera** is a very large crater formed by explosion or collapse; either may hold a **crater lake** (Lake Nyos, Lake Toba)
- **lava plateau (plain)** — sheets of fluid basalt from fissures: the Deccan, the Biu Plateau
- **volcanic plug (neck)** — the hardened lava in the vent, left standing after erosion
- minor forms: **hot springs**, **geysers** (hot water and steam thrown out at intervals), fumaroles

## Effects of vulcanicity
### Benefits
- **fertile soils** from weathered lava and ash (Java, the slopes of Mount Cameroon)
- **minerals**: gold, copper, diamonds, sulphur; building stone
- **geothermal energy** (Iceland, Kenya, New Zealand)
- **tourism**; crater lakes for water and fishing
### Hazards
loss of life and property; poisonous gases (Lake Nyos, 1986); destruction of farmland and settlements; ash clouds disrupting air travel; tsunamis.`,
          examples: `**Example 1.** Distinguish the focus from the epicentre of an earthquake. *Answer:* The **focus** is the point of origin underground; the **epicentre** is the point on the surface directly above it.

**Example 2.** Name two intrusive volcanic features. *Answer:* **Batholith** and **dyke** (also sill, laccolith).

**Example 3.** Give two benefits of volcanic activity. *Answer:* **Fertile soils** and **geothermal power**.`,
        },
        questions: [
          ["E", "The instrument used to record earthquake waves is the", "seismograph", "barometer", "anemometer", "hygrometer", "The strength is given on the Richter scale."],
          ["E", "Molten rock that flows out on to the earth's surface is called", "lava", "magma", "ash", "slag", "Below the surface it is called magma."],
          ["E", "A volcano that is not expected to erupt again is described as", "extinct", "active", "dormant", "composite", "A dormant volcano may erupt in future."],
          ["M", "The point on the earth's surface directly above the origin of an earthquake is the", "epicentre", "focus", "crater", "fault", "The shock is strongest there."],
          ["M", "A horizontal sheet of solidified magma lying between layers of rock is a", "sill", "dyke", "batholith", "caldera", "A dyke cuts across the layers."],
          ["M", "A very large mass of granite formed deep within the crust is a", "batholith", "sill", "geyser", "crater", "It often forms the core of mountain ranges."],
          ["M", "The zone round the Pacific Ocean where most volcanoes and earthquakes occur is known as the", "Ring of Fire", "Sahel", "Great Rift Valley", "Mid-Atlantic Ridge", "It follows plate boundaries."],
          ["H", "A shield volcano has gentle slopes because it is built of", "fluid basic lava that spreads far before solidifying", "viscous acid lava", "alternate layers of ash and lava", "cinders only", "Basic lava flows easily."],
          ["H", "A very large depression formed when the top of a volcano is blown off or collapses is a", "caldera", "laccolith", "volcanic plug", "geyser", "It may contain a lake."],
          ["H", "A giant sea wave produced by an earthquake under the ocean floor is called a", "tsunami", "tide", "swash", "current", "It can cause great destruction on coasts."],
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
        title: "Major climatic types of the world",
        subtopics: ["Classification of climates", "Hot climates", "Temperate climates", "Cold and mountain climates"],
        objectives: ["Outline the classification of world climates", "Describe the hot climates and their locations", "Describe the temperate climates and their locations", "Describe the cold and mountain climates"],
        lesson: {
          title: "Climates of the World",
          summary: "Describe the characteristics and distribution of the world's major climates.",
          minutes: 40,
          notes: `## Classification
Climates are grouped mainly by **temperature and rainfall**. The **Greek** classification used three temperature zones (torrid, temperate, frigid). **Köppen's** system uses letters: **A** tropical rainy, **B** dry, **C** warm temperate, **D** cold temperate, **E** polar.

## Hot climates
### Equatorial (hot, wet)
- **location**: within about 5° of the equator — the Amazon basin, the Congo basin, Malaysia and Indonesia, the coast of West Africa
- **temperature**: high all year, about 27 °C; annual range very small (2–3 °C)
- **rainfall**: heavy, over 2000 mm, **in every month**, with two maxima; convectional, in the afternoon, with thunder
- humidity and cloud cover are high

### Tropical continental (Sudan or savanna)
- **location**: between the equatorial and desert belts, about 5°–20° north and south — the Sudan belt of West Africa, East Africa, the Brazilian plateau, northern Australia
- hot all year, hottest just before the rains; annual range about 8–11 °C
- a **wet season** in summer and a **long dry season** in winter; 500–1500 mm

### Tropical monsoon
- **location**: India, Bangladesh, Burma, south China, northern Australia
- winds **reverse** with the seasons: onshore in summer (very heavy rain), offshore in winter (dry)
- three seasons: cool dry, hot dry, hot wet

### Hot desert
- **location**: western sides of continents about 15°–30° north and south — the Sahara, Arabian, Kalahari, Namib, Atacama, Australian deserts
- under 250 mm of rain; very hot days, cool nights — a very large **daily range**; clear skies
- caused by offshore trade winds, descending air and cold ocean currents

## Warm temperate climates
### Mediterranean (western margin)
- **location**: western sides of continents about 30°–45° — round the Mediterranean Sea, California, central Chile, the Cape, south-west Australia
- **hot, dry summers** (offshore trade winds) and **mild, wet winters** (westerlies bringing cyclonic rain); 500–900 mm

### Warm temperate eastern margin (China type)
- south-east USA, south-east China, Natal, south-east Australia, Uruguay
- hot, wet summers; mild winters; rain all year with a summer maximum

## Cool temperate climates
### Western margin (British type)
- north-west Europe, British Columbia, southern Chile, Tasmania, New Zealand
- mild winters, cool summers; rain throughout the year from the westerlies; influenced by warm currents (the North Atlantic Drift)

### Continental (steppe)
- interiors: the prairies, the steppes of Russia, the pampas, the veld
- warm summers, very cold winters — a large annual range; light rain (250–500 mm), mostly in summer

### Eastern margin (Laurentian)
- north-east USA and eastern Canada, north China, Korea, Japan
- cold winters, warm summers; rain or snow all year

## Cold climates
- **cold temperate continental (Siberian or taiga)** — northern Canada, Scandinavia, Siberia: long, very cold winters; short, cool summers; little precipitation, mostly snow
- **tundra (Arctic)** — the northern fringes of North America and Eurasia: the warmest month below 10 °C; the subsoil permanently frozen (**permafrost**)
- **polar (ice cap)** — Antarctica, Greenland: below freezing throughout the year

## Mountain climate
Temperature falls with altitude (about 6.5 °C per 1000 m); rainfall is higher on windward slopes; climate and vegetation change in zones up the mountain: the Andes, Alps, Himalayas, East African highlands.

## Reading climate graphs
- high temperature and rain all year — equatorial
- hot, with summer rain and a marked dry season — tropical continental
- dry summer, wet winter — Mediterranean
- hottest months in December–January — the southern hemisphere`,
          examples: `**Example 1.** Which climate has hot, dry summers and mild, wet winters? *Answer:* The **Mediterranean** climate.

**Example 2.** Give two characteristics of the equatorial climate. *Answer:* **High temperature all year** and **heavy rainfall in every month**.

**Example 3.** A station records its highest temperatures in January. In which hemisphere is it? *Answer:* The **southern** hemisphere.`,
        },
        questions: [
          ["E", "The climate with high temperatures and heavy rainfall throughout the year is the", "equatorial climate", "hot desert climate", "Mediterranean climate", "tundra climate", "It occurs within about 5° of the equator."],
          ["E", "A hot desert receives annual rainfall of less than about", "250 mm", "1000 mm", "2000 mm", "750 mm", "Deserts are regions of very low rainfall."],
          ["E", "The Amazon and Congo basins have", "an equatorial climate", "a Mediterranean climate", "a steppe climate", "a polar climate", "Both lie on the equator."],
          ["M", "Hot, dry summers and mild, wet winters are characteristic of the", "Mediterranean climate", "tropical monsoon climate", "equatorial climate", "Siberian climate", "It occurs on western margins about 30°–45° from the equator."],
          ["M", "The seasonal reversal of winds, bringing very heavy summer rain to India, is typical of the", "tropical monsoon climate", "hot desert climate", "British type of climate", "tundra climate", "Onshore winds blow in summer and offshore winds in winter."],
          ["M", "The tropical continental (Sudan) climate is marked by", "a wet summer and a long dry winter", "rain in every month", "wet winters and dry summers", "no rainfall at all", "It lies between the equatorial and desert belts."],
          ["M", "Permanently frozen subsoil (permafrost) is a feature of the", "tundra", "savanna", "equatorial forest", "Mediterranean lands", "The warmest month is below 10 °C."],
          ["H", "Hot deserts are found mainly on the western sides of continents because of", "offshore trade winds and cold ocean currents", "onshore westerlies", "warm ocean currents", "heavy monsoon rains", "The air reaching these coasts is dry and stable."],
          ["H", "The daily range of temperature in hot deserts is very large because", "clear skies allow rapid heating by day and rapid cooling at night", "the deserts are near the sea", "there is thick cloud cover", "the vegetation is dense", "There is little cloud or moisture to retain heat."],
          ["H", "The mild winters of north-west Europe, compared with other places in the same latitude, are due mainly to", "the warm North Atlantic Drift and onshore westerlies", "its high altitude", "cold polar winds", "the nearness of the Sahara", "A warm current raises the temperature of the winds blowing on shore."],
        ],
      },
      {
        week: 2,
        title: "World vegetation",
        subtopics: ["Factors affecting vegetation", "Forests", "Grasslands", "Desert, tundra and mountain vegetation"],
        objectives: ["Explain the factors that affect vegetation", "Describe the forest types of the world", "Describe the tropical and temperate grasslands", "Describe desert, tundra and mountain vegetation"],
        lesson: {
          title: "Natural Vegetation of the World",
          summary: "Describe the world's vegetation belts, their characteristics and uses.",
          minutes: 40,
          notes: `## Factors affecting vegetation
- **climate** — rainfall (amount and season) and temperature are the most important
- **soil (edaphic)** — fertility, depth, drainage
- **relief** — altitude and slope
- **biotic** — man (clearing, burning, grazing) and animals
Much of the world's natural vegetation has been altered by man.

## Forests
### Tropical (equatorial) rainforest
- **location**: Amazon basin (**selvas**), Congo basin, West African coast, Malaysia and Indonesia
- **evergreen**, very tall trees with **buttress roots**, in **layers**: emergent, canopy, lower layers
- **great variety of species** in mixed stands — so lumbering is difficult
- broad leaves with drip tips; **lianas** (climbers) and **epiphytes**; little undergrowth
- hardwoods: mahogany, iroko, obeche, ebony, teak; also rubber, oil palm, cocoa

### Tropical monsoon forest
India, Burma, Thailand: **deciduous** — trees shed leaves in the dry season; more open; teak, sal, bamboo.

### Mediterranean woodland
Evergreen trees and shrubs adapted to summer drought: small, waxy or leathery leaves, thick bark, long roots — olive, cork oak, vine, citrus; scrub is called **maquis** or chaparral.

### Temperate deciduous forest
North-west Europe, eastern USA, north China: trees shed leaves in **winter**; **pure stands**; hardwoods — oak, beech, ash, elm, maple. Largely cleared for farming.

### Coniferous forest (taiga or boreal forest)
- **location**: a broad belt across northern Canada, Scandinavia and Russia
- **evergreen**, **cone-bearing** trees with **needle-shaped leaves**, conical shape and thick bark, in **pure stands**
- **softwoods**: pine, spruce, fir, larch — the main source of **paper pulp**, timber and matches
- lumbering is easy: pure stands, frozen ground and rivers for transport

## Grasslands
### Tropical grassland (savanna)
- **location**: the Sudan belt of Africa, East Africa, the **llanos** (Venezuela) and **campos** (Brazil), northern Australia
- tall grasses (elephant grass) with **scattered, fire-resistant, drought-resistant trees**: baobab, acacia, shea butter
- trees decrease and grass shortens towards the deserts
- big game: elephant, lion, giraffe, zebra; cattle rearing; grains, cotton, groundnuts

### Temperate grassland
- **location** and names: **prairies** (North America), **steppes** (Eurasia), **pampas** (Argentina), **veld** (South Africa), **downs** (Australia)
- short, nutritious grasses; **treeless**
- fertile black soils; the world's great **wheat** lands and ranching regions

## Desert vegetation
Scanty and **xerophytic** (drought-resistant): cactus, thorn bushes, date palm at oases. Adaptations: long roots, thick fleshy stems storing water, leaves reduced to spines, waxy surfaces; some plants complete their life cycle quickly after rain.

## Tundra vegetation
Mosses, lichens, sedges and dwarf shrubs; no trees, because of cold and frozen subsoil; a short growing season.

## Mountain vegetation
Changes with altitude in zones — forest at the foot, then grassland, then bare rock and snow — like a journey from the equator to the poles.

## Mangrove
Swamp forest of tropical coasts and estuaries, with stilt and breathing roots.

## Importance of vegetation
timber, fuel, paper; food, fruits and medicines; grazing; habitat for wildlife; protection of soil and watersheds; influence on rainfall; tourism; absorption of carbon dioxide.

## Human impact
deforestation, bush burning, overgrazing and desertification; conservation through reserves, afforestation and controlled exploitation.`,
          examples: `**Example 1.** Give the local names of temperate grassland in North America and Argentina. *Answer:* **Prairies** and **pampas**.

**Example 2.** State two characteristics of coniferous forest. *Answer:* **Needle-shaped leaves** and **pure stands of softwood trees**.

**Example 3.** Why is lumbering difficult in tropical rainforest? *Answer:* Valuable trees are **scattered among many other species**.`,
        },
        questions: [
          ["E", "The temperate grasslands of North America are called", "prairies", "pampas", "steppes", "veld", "The pampas are in Argentina."],
          ["E", "Plants that are adapted to very dry conditions are known as", "xerophytes", "epiphytes", "conifers", "lianas", "Cactus is an example."],
          ["E", "The equatorial forest of the Amazon basin is known as the", "selvas", "taiga", "llanos", "steppes", "It is the largest rainforest in the world."],
          ["M", "Trees with needle-shaped leaves that bear cones are typical of the", "coniferous forest", "tropical rainforest", "savanna", "Mediterranean woodland", "They yield softwood."],
          ["M", "Trees that shed their leaves in a particular season are described as", "deciduous", "evergreen", "coniferous", "xerophytic", "They do so in the dry or cold season."],
          ["M", "Tall grasses with scattered, fire-resistant trees describe the", "savanna", "tundra", "taiga", "prairie", "The baobab and acacia are typical trees."],
          ["M", "Mosses and lichens are the main vegetation of the", "tundra", "rainforest", "pampas", "monsoon forest", "It is too cold for trees."],
          ["H", "Softwood lumbering in the coniferous forests is easier than hardwood lumbering in tropical rainforests because the conifers", "grow in pure stands", "are heavier", "have buttress roots", "are mixed with many species", "One kind of tree occupies a large area."],
          ["H", "Mediterranean plants have small, leathery leaves and long roots in order to", "survive the hot, dry summers", "resist frost", "shed heavy snow", "grow in waterlogged soil", "These features reduce water loss and reach deep water."],
          ["H", "Vegetation changes in zones up a high mountain mainly because", "temperature decreases with altitude", "soils become deeper", "rainfall stops completely", "the days become shorter", "Conditions at great heights resemble those of colder latitudes."],
        ],
      },
      {
        week: 3,
        title: "Soils",
        subtopics: ["Soil formation and composition", "Soil properties and the soil profile", "Types of soil", "Soil erosion and conservation"],
        objectives: ["Describe the formation and composition of soil", "Describe soil properties and the soil profile", "Describe the main types of soil", "Explain soil erosion and the methods of conservation"],
        lesson: {
          title: "The Soil",
          summary: "Describe the formation, properties, types and conservation of soil.",
          minutes: 40,
          notes: `## Soil
The thin layer of loose material covering the earth's surface in which plants grow.

## Composition
- **mineral (inorganic) matter** — about 45%: sand, silt and clay from weathered rock
- **organic matter (humus)** — about 5%: decayed plant and animal remains
- **water** — about 25%
- **air** — about 25%
- **living organisms** — bacteria, fungi, earthworms, termites

## Factors of soil formation
- **parent material** — the rock from which the soil is derived determines its minerals and texture
- **climate** — rainfall and temperature control weathering and leaching
- **living organisms** — plants supply humus; animals mix the soil
- **relief (topography)** — thin soils on steep slopes, deep soils in valleys
- **time** — mature soils take thousands of years to form

## Soil properties
- **texture** — the proportions of sand, silt and clay
- **structure** — the way particles are grouped into crumbs
- **colour** — dark with humus; red or yellow with iron oxides; grey when waterlogged
- **porosity** and **permeability** — the spaces between particles and the ease with which water passes
- **pH** — acidity or alkalinity
- **fertility** — the supply of plant nutrients

## Types by texture
| | Sandy soil | Clay soil | Loamy soil |
|---|---|---|---|
| particles | coarse | very fine | mixed, with humus |
| drainage | very rapid | poor; waterlogs | good |
| water retention | low | high | moderate |
| working | light; easy | heavy; sticky when wet, hard when dry | easy |
| fertility | poor (leached) | rich but hard to use | **best for farming** |

## The soil profile
A vertical section through the soil showing its layers (**horizons**):
- **O** — surface litter
- **A horizon (topsoil)** — dark, rich in humus and organisms; nutrients are washed downwards (**leaching**, eluviation)
- **B horizon (subsoil)** — receives the leached minerals (illuviation); less humus
- **C horizon** — weathered parent material
- **D (R)** — bedrock

## Major soil groups
- **zonal soils** — mature soils reflecting climate and vegetation:
  - **laterites and red tropical soils (latosols)** — heavily leached, red, rich in iron and aluminium oxides; poor in humus — hot, wet tropics
  - **chernozems (black earths)** — deep, dark, very fertile soils of the temperate grasslands
  - **podzols** — grey, acidic, leached soils of the coniferous forests
  - **brown forest soils** — under deciduous forest
  - **desert soils** — sandy or stony, saline, little humus
- **intrazonal soils** — reflecting local conditions of drainage or rock: peat, saline soils, hydromorphic (fadama) soils
- **azonal soils** — young soils without clear horizons: alluvial soils, volcanic soils, scree

## Soil erosion
The removal of topsoil by **water** or **wind**.
- **splash erosion** — raindrops dislodge particles
- **sheet erosion** — a thin, even layer is removed over a wide area
- **rill erosion** — small channels
- **gully erosion** — deep channels, as in Anambra, Imo and Enugu States (Agulu–Nanka)
- **wind erosion** — in dry areas with bare soil
### Causes
deforestation; bush burning; overgrazing; over-cultivation and monocropping; ploughing up and down slopes; heavy rainfall on steep slopes; road construction.
### Effects
loss of fertile topsoil and crop yields; gullies destroying farms, roads and houses; silting of rivers and dams; flooding; desertification.

## Soil conservation
- **afforestation** and re-afforestation; **cover crops** and **mulching**
- **contour ploughing** and **terracing** on slopes; **strip cropping**
- **crop rotation**, manure and fertilisers; **bush fallowing**
- **windbreaks (shelter belts)**
- controlled grazing; avoiding bush burning
- check dams and drainage channels in gullies`,
          examples: `**Example 1.** Name the four main components of soil. *Answer:* **Mineral matter, organic matter, water and air**.

**Example 2.** Which soil type is best for farming and why? *Answer:* **Loam** — it holds moisture and nutrients but drains well.

**Example 3.** State three methods of controlling soil erosion. *Answer:* **Terracing, contour ploughing and planting cover crops**.`,
        },
        questions: [
          ["E", "The decayed remains of plants and animals in the soil are called", "humus", "silt", "bedrock", "laterite", "It makes the topsoil dark and fertile."],
          ["E", "The soil with the largest particles is", "sandy soil", "clay soil", "loamy soil", "silt", "Water drains through it rapidly."],
          ["E", "The removal of topsoil by water or wind is", "soil erosion", "leaching", "weathering", "mulching", "It reduces the fertility of the land."],
          ["M", "A vertical section through the soil showing its different layers is the", "soil profile", "soil texture", "soil structure", "water table", "The layers are called horizons."],
          ["M", "The washing of soluble minerals from the topsoil down into the subsoil is known as", "leaching", "gullying", "mulching", "terracing", "It is severe in areas of heavy rainfall."],
          ["M", "The dark, very fertile soils of the temperate grasslands are", "chernozems", "podzols", "laterites", "desert soils", "They are also called black earths."],
          ["M", "The type of erosion that produces deep channels, as in parts of Anambra State, is", "gully erosion", "sheet erosion", "splash erosion", "wind erosion", "Rills deepen and widen into them."],
          ["H", "The red colour and low fertility of many soils in the humid tropics are due to", "heavy leaching that leaves iron and aluminium oxides", "the accumulation of humus", "permanent frost", "deposition of salt by the sea", "Such soils are called laterites or latosols."],
          ["H", "Ploughing across a slope along lines of equal height is called", "contour ploughing", "strip mining", "bush fallowing", "shifting cultivation", "The furrows hold back run-off."],
          ["H", "Alluvial soils are classified as azonal because they", "are young and lack well-developed horizons", "are found only in deserts", "are the oldest soils", "contain no minerals", "They are freshly deposited by rivers."],
        ],
      },
      {
        week: 4,
        title: "Environmental hazards",
        subtopics: ["Meaning and types of environmental hazard", "Drought and desertification", "Flooding and erosion", "Pollution and deforestation"],
        objectives: ["Define and classify environmental hazards", "Explain the causes, effects and control of drought and desertification", "Explain the causes, effects and control of flooding and erosion", "Explain pollution and deforestation and their control"],
        lesson: {
          title: "Dangers in the Environment",
          summary: "Describe natural and man-made environmental hazards, their effects and control.",
          minutes: 40,
          notes: `## Environmental hazards
Events or conditions in the environment that **threaten life, property and human activities**.
- **natural hazards** — drought, flood, earthquakes, volcanic eruptions, storms, landslides, pest invasions
- **man-made hazards** — pollution, deforestation, oil spillage, gas flaring, bush fires, urban waste
Many hazards are natural events made worse by human action.

## Drought
A prolonged period of abnormally low rainfall.
- **causes**: failure or late arrival of the rains; climate change; deforestation
- **effects**: crop failure and **famine**; death of livestock; drying of rivers, wells and lakes (the shrinking of Lake Chad); migration; dust storms; poverty
- **control**: irrigation and dams; drought-resistant crops; boreholes; afforestation; food reserves; early warning

## Desertification (desert encroachment)
The spread of desert-like conditions into formerly productive land — affecting Nigeria's "frontline" states (Sokoto, Katsina, Jigawa, Yobe, Borno and others).
- **causes**: drought; overgrazing; deforestation for fuel wood; over-cultivation; bush burning
- **effects**: loss of farmland and pasture; moving sand dunes burying villages; falling water tables; migration southwards and conflict over land
- **control**: **shelter belts** and afforestation (the Great Green Wall); controlled grazing; alternative fuels; sand-dune fixation; irrigation

## Flooding
The overflowing of water on to land that is normally dry.
- **causes**: heavy or prolonged rainfall; rivers overflowing; **blocked drains** and building on flood plains; release of water from dams; deforestation; rise in sea level and storm surges on the coast
- **effects**: loss of lives and property; destruction of farms, roads and bridges; displacement of people; water-borne diseases (cholera); erosion
- **benefits**: fertile silt on flood plains; recharge of ground water
- **control**: dams, embankments and levees; good drainage; dredging; town planning — no building on flood plains; afforestation; flood warnings

## Erosion
- **soil (gully) erosion** — severe in the south-east; controlled by terracing, cover crops, tree planting and check dams
- **coastal erosion** — the sea removing beaches (Victoria Island, Lagos); controlled by sea walls, groynes and sand filling

## Pollution
The introduction of harmful substances into the environment.
| Type | Sources | Effects |
|---|---|---|
| **air** | vehicle exhausts, industries, **gas flaring**, bush burning, generators | respiratory diseases; **acid rain**; smog; global warming |
| **water** | sewage, industrial effluent, **oil spillage**, fertilisers and pesticides | death of fish; unsafe drinking water; disease; loss of livelihood |
| **land** | refuse, plastics, mine wastes, chemicals | loss of farmland; disease; unsightly surroundings |
| **noise** | traffic, machinery, generators, loudspeakers | stress; hearing damage |
**Control**: laws and enforcement; treatment of wastes; recycling; cleaner fuels and technology; ending gas flaring; public enlightenment; regular environmental sanitation.

## Deforestation
The removal of forest without replacement — for farming, timber, fuel wood, roads and towns.
- **effects**: soil erosion; loss of wildlife and plant species; reduced rainfall; desert encroachment; more carbon dioxide in the air
- **control**: forest reserves; afforestation; laws on logging; alternative energy

## Global hazards
- **global warming (the greenhouse effect)** — gases such as carbon dioxide and methane trap heat; results: melting ice, **rising sea level**, changing rainfall, more extreme weather
- **ozone depletion** — caused by chlorofluorocarbons; more ultraviolet radiation reaches the earth

## Other hazards
windstorms and line squalls; landslides; pest and locust invasions; bush fires.

## Agencies in Nigeria
the National Emergency Management Agency (NEMA); the Nigerian Meteorological Agency (NiMet); the National Environmental Standards and Regulations Enforcement Agency (NESREA); state environmental agencies.`,
          examples: `**Example 1.** Give two man-made causes of flooding in towns. *Answer:* **Blocked drains** and **building on flood plains**.

**Example 2.** State two ways of checking desert encroachment. *Answer:* **Planting shelter belts** and **controlling grazing**.

**Example 3.** What is the greenhouse effect? *Answer:* The **trapping of heat** in the atmosphere by gases such as carbon dioxide.`,
        },
        questions: [
          ["E", "A prolonged period of abnormally low rainfall is called", "drought", "flood", "erosion", "pollution", "Crops fail and rivers dry up."],
          ["E", "The removal of forest without replanting is known as", "deforestation", "afforestation", "irrigation", "conservation", "It exposes the soil to erosion."],
          ["E", "The introduction of harmful substances into the environment is", "pollution", "desertification", "leaching", "weathering", "It may affect air, water or land."],
          ["M", "The spread of desert-like conditions into formerly productive land is called", "desertification", "deflation", "sedimentation", "urbanisation", "Overgrazing and deforestation hasten it."],
          ["M", "A major cause of flooding in Nigerian cities is", "blocked drainage channels", "too many trees", "low rainfall", "gas flaring", "Refuse prevents the free flow of storm water."],
          ["M", "Oil spillage is a serious hazard mainly in the", "Niger Delta", "Sokoto plains", "Jos Plateau", "Chad basin", "It destroys farmland and fishing waters."],
          ["M", "Rows of trees planted to check the advance of the desert are called", "shelter belts", "plantations", "game reserves", "terraces", "They reduce the speed of the wind."],
          ["H", "Global warming is caused mainly by", "the build-up of greenhouse gases such as carbon dioxide", "the depletion of the ozone layer alone", "the rotation of the earth", "ocean tides", "These gases trap heat in the atmosphere."],
          ["H", "A beneficial effect of river flooding is that it", "deposits fertile silt on the flood plain", "spreads cholera", "destroys bridges", "displaces people", "Farmers use the enriched soil after the flood."],
          ["H", "Deforestation contributes to climate change because", "fewer trees remain to absorb carbon dioxide", "trees produce carbon dioxide only", "forests cause acid rain", "bare soil reflects no heat", "Burning the cleared trees also releases the gas."],
        ],
      },
      {
        week: 5,
        title: "World population",
        subtopics: ["Distribution and density of world population", "Population growth and the demographic transition", "Migration", "Population problems and policies"],
        objectives: ["Describe the distribution and density of world population", "Explain population growth and the demographic transition", "Describe types, causes and effects of migration", "Discuss world population problems and policies"],
        lesson: {
          title: "People of the World",
          summary: "Describe the distribution, growth and movement of world population.",
          minutes: 40,
          notes: `## World population
The world's population passed **8 billion** in 2022. It is **very unevenly distributed**: about 60% of people live in **Asia**; China and India each have over 1.4 billion.

## Distribution
### Densely populated regions
- **East Asia** — eastern China, Japan, Korea
- **South Asia** — India, Bangladesh, Pakistan (the Ganges plain)
- **Western and central Europe**
- **north-eastern North America**
- smaller concentrations: the **Nile valley**, Java, coastal West Africa, south-east Brazil
### Sparsely populated regions
- **hot deserts** — Sahara, Arabia, central Australia
- **cold lands** — the tundra, northern Canada, Siberia, Antarctica
- **high mountains** — the Himalayas, the Andes
- **dense equatorial forests** — the Amazon and Congo basins

### Factors affecting distribution
- **physical**: climate (moderate temperature and rainfall favoured); relief (plains and river valleys); fertile soils; water supply; minerals; freedom from disease and pests
- **human**: industry and employment; trade and transport; government policy; history and culture; security

## Population density
- **arithmetic density** = population ÷ total area
- very high: Bangladesh, the Netherlands, Singapore; very low: Mongolia, Australia, Namibia
A country is **overpopulated**, **underpopulated** or at its **optimum** according to the balance between people and resources — not by numbers alone.

## Population growth
**growth = (births − deaths) + (immigrants − emigrants)**
World population grew slowly for thousands of years, then **very rapidly** in the last two centuries as death rates fell — the **population explosion**.
- growth is fastest in **developing countries** (Africa, parts of Asia and Latin America) — high birth rates, falling death rates
- growth is slow or negative in **developed countries** (Europe, Japan) — low birth and death rates, ageing populations

## The demographic transition
| Stage | Birth rate | Death rate | Growth |
|---|---|---|---|
| 1 high stationary | high | high | very slow |
| 2 early expanding | high | **falling** | **rapid** |
| 3 late expanding | falling | low | slowing |
| 4 low stationary | low | low | very slow |
Most African countries are in stage 2; most European countries in stage 4.

## Population structure
Shown by a **population pyramid** (age and sex).
- **broad base**, tapering quickly — a youthful, fast-growing population (Nigeria)
- **narrow base**, wide middle and top — an ageing population (Germany, Japan)
**Dependency ratio** = (people under 15 + people over 64) ÷ working-age population × 100.

## Migration
The movement of people from one place to another to live.
- **internal**: rural–urban, rural–rural, urban–urban, urban–rural
- **international**: **emigration** (leaving) and **immigration** (entering)
- **voluntary** or **forced** (refugees)
### Causes
- **push factors** — unemployment, poverty, drought, famine, war, persecution, lack of amenities
- **pull factors** — jobs, higher wages, education, better services, peace
### Effects
- on the **source**: loss of labour and skills (**brain drain**); less pressure on land; **remittances** sent home
- on the **destination**: more labour and skills; cultural variety; but overcrowding, pressure on housing and services, unemployment, social tension

## Problems
### Of rapid growth
food shortage; unemployment; pressure on housing, schools and health services; poverty; environmental damage; overcrowded cities.
### Of slow growth and ageing
shortage of labour; heavy cost of pensions and care.

## Population policies
family planning and birth control; education, especially of girls; raising the age of marriage; incentives for small (or, in ageing countries, larger) families; controlled immigration; agricultural and industrial development; planned resettlement.`,
          examples: `**Example 1.** Name two densely and two sparsely populated regions of the world. *Answer:* Dense: **East Asia** and **western Europe**; sparse: the **Sahara** and the **Amazon basin**.

**Example 2.** A country has a birth rate of 40 and a death rate of 15 per thousand. Find the rate of natural increase. *Solution:* 40 − 15 = 25 per thousand = **2.5%**.

**Example 3.** Give one push factor and one pull factor in migration. *Answer:* Push: **unemployment**; pull: **higher wages**.`,
        },
        questions: [
          ["E", "The continent with the largest population is", "Asia", "Africa", "Europe", "North America", "About 60% of the world's people live there."],
          ["E", "The movement of people out of a country to live elsewhere is", "emigration", "immigration", "urbanisation", "census", "Immigration is movement into a country."],
          ["E", "Which of these regions is sparsely populated?", "the Sahara Desert", "the Ganges plain", "western Europe", "eastern China", "Lack of water limits settlement."],
          ["M", "Unemployment and famine that drive people away from an area are examples of", "push factors", "pull factors", "remittances", "pyramids", "Pull factors attract people to a new area."],
          ["M", "A country has a birth rate of 40 per thousand and a death rate of 15 per thousand. Its rate of natural increase is", "2.5%", "25%", "5.5%", "0.25%", "25 per thousand is 2.5 per hundred."],
          ["M", "The loss of highly skilled people from a country through emigration is called", "brain drain", "brain gain", "population explosion", "urban sprawl", "Doctors and engineers moving abroad are examples."],
          ["M", "A diagram that shows the age and sex structure of a population is a", "population pyramid", "scatter diagram", "climate graph", "flow chart", "Its shape reveals whether a population is young or ageing."],
          ["H", "In the second stage of the demographic transition", "the birth rate stays high while the death rate falls", "both birth and death rates are low", "the birth rate falls below the death rate", "both rates are high", "Population therefore grows rapidly."],
          ["H", "A population pyramid with a narrow base and a wide top represents", "an ageing population with a low birth rate", "a youthful, fast-growing population", "a population with no old people", "a population of males only", "Developed countries such as Japan show this shape."],
          ["H", "Money sent home by migrants working in other places is known as", "remittances", "subsidies", "tariffs", "royalties", "It benefits the area they came from."],
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
        title: "Agriculture in Nigeria",
        subtopics: ["Types and systems of agriculture", "Food and cash crops and their distribution", "Livestock and fishing", "Importance and problems of agriculture"],
        objectives: ["Describe the types and systems of agriculture in Nigeria", "Describe the distribution of the main food and cash crops", "Describe livestock rearing and fishing", "Explain the importance, problems and solutions of Nigerian agriculture"],
        lesson: {
          title: "Farming in Nigeria",
          summary: "Describe the systems, products, importance and problems of Nigerian agriculture.",
          minutes: 40,
          notes: `## Agriculture
The cultivation of crops and the rearing of animals. It employs more Nigerians than any other activity.

## Types
- **subsistence farming** — production mainly for the farmer's family, on small plots with simple tools
- **commercial farming** — production for sale, on large farms with machinery and hired labour
- **arable (crop) farming**, **pastoral (livestock) farming** and **mixed farming** (crops and animals together)
- **plantation agriculture** — a single cash crop on a large estate: rubber, oil palm, cocoa

## Farming systems
- **shifting cultivation** — land is cleared, farmed for a few years, then abandoned for a new plot
- **bush fallowing (rotational bush fallow)** — land is rested for some years to regain fertility while the farmer stays in the same settlement; the commonest system
- **crop rotation** — different crops in a fixed sequence on the same land
- **mixed cropping (intercropping)** — several crops on one plot
- **irrigation farming** — in the dry north: the Kano River, Bakolori, Hadejia–Jama'are and Chad Basin projects; **fadama** (flood-plain) farming
- **terrace farming** on steep slopes

## Food crops
| Zone | Crops |
|---|---|
| the wet **south** | **root and tuber crops**: yam, cassava, cocoyam; also maize, plantain, rice, vegetables |
| the **Middle Belt** | yam (Benue — the "food basket"), rice, maize, soya beans, sesame |
| the dry **north** | **grains**: guinea corn (sorghum), millet, maize, rice, wheat; also beans (cowpea), onions, tomatoes |

## Cash crops
| Crop | Main areas | Uses |
|---|---|---|
| **cocoa** | Ondo, Osun, Oyo, Ogun, Ekiti, Cross River | beverages, chocolate |
| **oil palm** | the south-east and south-south: Imo, Abia, Akwa Ibom, Rivers, Edo, Delta | palm oil, kernel oil, soap |
| **rubber** | Edo, Delta, Cross River, Ogun | tyres, footwear |
| **groundnuts** | Kano, Katsina, Sokoto, Bauchi | oil, cake |
| **cotton** | Katsina, Zamfara, Kaduna, Gombe | textiles |
| kola nut | the south-west | stimulant; trade with the north |
| **benniseed**, soya beans, ginger | Benue, Nasarawa, Kaduna | oil, export |
| timber | Ondo, Edo, Cross River, Ogun | furniture, construction |
Tree crops need heavy rain and deep soils, so they grow in the south; groundnuts and cotton suit the lighter soils and marked dry season of the north.

## Livestock
- **cattle** — mostly in the north, free from the **tsetse fly**; reared by Fulani herders practising **nomadic herding** and **transhumance** (seasonal movement between wet- and dry-season pastures). Breeds: White Fulani, Sokoto Gudali; the tsetse-resistant N'Dama and Muturu in the south
- sheep and goats — everywhere; pigs — the south and Middle Belt; poultry — nationwide, with large commercial farms near cities
- ranches: Obudu, Mambilla, Mokwa

## Fishing
- **inland**: the Niger and Benue, Lake Chad, Kainji Lake, and fish ponds (aquaculture)
- **coastal and deep-sea**: the lagoons, creeks and the Atlantic; trawlers from Lagos and Port Harcourt
- common fish: tilapia, catfish, croaker, bonga, shrimps

## Importance
food; employment; raw materials for industry; foreign exchange; income; market for manufactured goods.

## Problems
- land tenure and fragmented holdings
- **crude tools** and low mechanisation
- pests and diseases; poor storage; post-harvest losses
- **inadequate credit**; costly fertiliser and improved seeds
- poor rural roads and marketing
- dependence on rainfall; drought, erosion and flooding
- rural–urban migration of young people; ageing farmers
- price fluctuations; insecurity and farmer–herder conflicts
### Solutions
loans and co-operatives; mechanisation; irrigation; improved seeds and extension services; storage and processing; rural roads; land reform; research institutes (IITA in Ibadan; cocoa, rubber and root-crop institutes).`,
          examples: `**Example 1.** Name two cash crops of southern Nigeria and two of northern Nigeria. *Answer:* South: **cocoa** and **oil palm**; north: **groundnuts** and **cotton**.

**Example 2.** What is bush fallowing? *Answer:* **Resting farmland for some years** so that it regains fertility.

**Example 3.** Why are cattle reared mainly in the north? *Answer:* It is largely **free from the tsetse fly** and has open grassland.`,
        },
        questions: [
          ["E", "Farming in which crops are grown mainly to feed the farmer's family is", "subsistence farming", "commercial farming", "plantation farming", "ranching", "Little is left for sale."],
          ["E", "Cocoa is grown mainly in the", "south-western states of Nigeria", "Sokoto plains", "Chad basin", "Jos Plateau", "Ondo State is the leading producer."],
          ["E", "The main food crops of the dry northern part of Nigeria are", "grains such as millet and guinea corn", "yam and cocoyam", "plantain and cassava", "cocoa and rubber", "They need less rainfall than root crops."],
          ["M", "The seasonal movement of herders and their cattle between wet-season and dry-season pastures is called", "transhumance", "shifting cultivation", "crop rotation", "mixed farming", "Fulani herders practise it."],
          ["M", "Cattle rearing is concentrated in northern Nigeria mainly because the area", "is relatively free from the tsetse fly", "has heavy rainfall", "is covered by rainforest", "has many seaports", "The fly transmits a disease fatal to cattle."],
          ["M", "The practice of leaving farmland to rest for some years to regain its fertility is", "bush fallowing", "monocropping", "irrigation", "terracing", "It is the commonest traditional system."],
          ["M", "Oil palm is produced mainly in", "the south-east and south-south of Nigeria", "Kano and Katsina", "Borno and Yobe", "Sokoto and Kebbi", "It needs heavy rainfall."],
          ["H", "Tree crops such as cocoa and rubber are confined to southern Nigeria because they require", "heavy rainfall and a long growing season", "a long dry season", "sandy desert soils", "very low temperatures", "The north is too dry for them."],
          ["H", "Irrigation farming is most important in northern Nigeria because", "the rainy season is short and rainfall is low", "the soils are waterlogged", "there are no rivers", "the land is too steep", "It allows cropping in the dry season."],
          ["H", "Which of the following is a major problem of agriculture in Nigeria?", "inadequate credit and poor storage facilities", "too many tractors", "an excess of farm labour in villages", "too many processing factories", "Many farmers cannot afford inputs, and much produce is lost after harvest."],
        ],
      },
      {
        week: 2,
        title: "Mineral and power resources of Nigeria",
        subtopics: ["Mineral fuels: petroleum, natural gas and coal", "Metallic and non-metallic minerals", "Power resources", "Importance and problems of mining"],
        objectives: ["Describe the occurrence and production of petroleum, gas and coal", "Describe the distribution of other minerals", "Describe the sources of power in Nigeria", "Explain the importance and problems of mining"],
        lesson: {
          title: "Minerals and Energy in Nigeria",
          summary: "Describe Nigeria's mineral and power resources, their importance and problems.",
          minutes: 40,
          notes: `## Minerals
Natural substances obtained from the earth's crust. They are **non-renewable**.
- **mineral fuels**: petroleum, natural gas, coal
- **metallic minerals**: tin, columbite, iron ore, gold, lead, zinc
- **non-metallic minerals**: limestone, marble, clay, salt, gypsum, kaolin

## Petroleum
The mainstay of the Nigerian economy. Oil was first found in commercial quantity at **Oloibiri** (in present-day Bayelsa State) in **1956**; export began in 1958.
- **areas**: the **Niger Delta** — Rivers, Bayelsa, Delta, Akwa Ibom, Edo, Imo, Abia, Ondo — onshore and **offshore**
- **refineries**: Port Harcourt, Warri, Kaduna and the Dangote refinery at Lekki
- **export terminals**: Bonny, Forcados, Escravos, Qua Iboe, Brass
- crude is moved by **pipelines**; Nigeria is a member of **OPEC**
- products: petrol, kerosene, diesel, aviation fuel, lubricants, bitumen, petrochemicals

## Natural gas
Found with petroleum in the Niger Delta. Much was formerly burnt off (**gas flaring**); it is now liquefied at **Bonny (NLNG)** for export, piped to power stations and industries, and sold as cooking gas.

## Coal
Mined on the **Udi escarpment at Enugu** (from 1915), and found at Okaba and Ogboyoga (Kogi), Lafia–Obi and Gombe. Production declined when railways and power stations changed to oil and gas.

## Other minerals
| Mineral | Location | Uses |
|---|---|---|
| **tin** and **columbite** | **Jos Plateau** | tin-plating, alloys; steel for jet engines |
| **limestone** | Ewekoro, Shagamu, Nkalagu, Obajana, Ashaka, Calabar, Sokoto, Gboko | **cement** |
| **iron ore** | **Itakpe**, Agbaja (Kogi) | steel (Ajaokuta, Aladja) |
| **gold** | Ilesha, Zamfara, Niger State | jewellery |
| lead and zinc | Abakaliki, Ogoja | batteries, alloys |
| marble | Igbeti, Jakura | decoration, cement |
| salt | Uburu, Okposi; Awe | food |
| bitumen | Ondo State | road surfacing |
| kaolin and clay | widespread | ceramics |

## Methods of mining
**open-cast (surface)** mining — tin, limestone; **underground (shaft and adit)** mining — coal; **drilling** — petroleum and gas; alluvial (placer) mining — gold and tin.

## Power resources
- **hydro-electric power (HEP)** — **Kainji** and **Jebba** on the Niger, **Shiroro** on the Kaduna river, Zungeru; Mambilla is planned. Renewable and clean, but depends on river levels
- **thermal power** — stations burning **natural gas** (Egbin near Lagos, Afam, Ughelli/Delta, Sapele, Geregu): the largest share of electricity
- **petroleum products** — vehicles and generators
- **fuel wood and charcoal** — still the main domestic fuel in rural areas
- **solar energy** — abundant, especially in the north; increasingly used
- wind, biogas and coal — minor

### Conditions favouring HEP
a large, constant volume of water; a steep fall (waterfall or gorge); hard rock for the dam; space for a reservoir; nearness to markets; capital.

## Importance of minerals and power
- **foreign exchange** — petroleum provides most export earnings
- **government revenue**
- **raw materials and energy** for industry
- **employment**
- development of towns, roads and ports (Port Harcourt, Warri, Jos, Enugu)

## Problems of mining
- **environmental damage**: oil spillage, gas flaring, mine pits and derelict land, polluted water, loss of farmland and fishing
- **over-dependence** on oil; price fluctuations on the world market
- exhaustion of deposits
- dependence on foreign capital and expertise
- pipeline vandalism, oil theft and unrest in producing areas
- illegal mining; accidents
### Solutions
diversifying the economy; enforcing environmental laws and cleaning up spills; ending gas flaring; reclaiming mined land; developing local skills; fair treatment of host communities.`,
          examples: `**Example 1.** Where and when was oil first discovered in commercial quantity in Nigeria? *Answer:* At **Oloibiri** in **1956**.

**Example 2.** Name three hydro-electric power stations in Nigeria. *Answer:* **Kainji, Jebba and Shiroro**.

**Example 3.** State two environmental problems of oil production. *Answer:* **Oil spillage** and **gas flaring**.`,
        },
        questions: [
          ["E", "Nigeria's most important mineral export is", "petroleum", "coal", "tin", "limestone", "It provides most of the country's foreign exchange."],
          ["E", "Tin and columbite are mined on the", "Jos Plateau", "Udi escarpment", "Niger Delta", "Sokoto plains", "Open-cast methods are used."],
          ["E", "Coal was mined in Nigeria mainly at", "Enugu", "Jos", "Ilesha", "Port Harcourt", "The mines are on the Udi escarpment."],
          ["M", "Petroleum was first discovered in commercial quantity in Nigeria at", "Oloibiri", "Warri", "Kaduna", "Bonny", "The discovery was made in 1956."],
          ["M", "Limestone is important in Nigeria mainly as a raw material for", "cement", "steel pipes", "fertiliser only", "jewellery", "Factories are sited at Ewekoro, Obajana and elsewhere."],
          ["M", "Which of the following is a hydro-electric power station?", "Kainji", "Egbin", "Afam", "Sapele", "It is on the River Niger."],
          ["M", "Iron ore for Nigeria's steel industry is found at", "Itakpe", "Enugu", "Ewekoro", "Oloibiri", "The deposit is in Kogi State."],
          ["H", "Coal production in Nigeria declined mainly because", "railways and power stations changed to oil and gas", "the deposits were completely exhausted", "coal became too cheap", "the mines were flooded by the sea", "Demand for coal fell sharply."],
          ["H", "A condition that favours the development of hydro-electric power is", "a large, regular volume of water with a steep fall", "a flat, sandy river bed", "a long dry season", "soft, permeable rock at the dam site", "The falling water turns the turbines."],
          ["H", "The burning off of unwanted natural gas at oil wells is harmful because it", "wastes a resource and pollutes the air", "increases rainfall", "cools the atmosphere", "improves soil fertility", "It releases heat and greenhouse gases."],
        ],
      },
      {
        week: 3,
        title: "Manufacturing industries in Nigeria",
        subtopics: ["Classification of industries", "Factors of industrial location", "Major industries and industrial zones", "Importance and problems of industry"],
        objectives: ["Classify industries", "Explain the factors that influence the location of industries", "Describe the major industries and industrial zones of Nigeria", "Explain the importance and problems of manufacturing"],
        lesson: {
          title: "Industry in Nigeria",
          summary: "Describe the types, location, importance and problems of industry in Nigeria.",
          minutes: 40,
          notes: `## Industry
Any activity that produces goods or services.
### By stage of production
- **primary (extractive)** — taking raw materials from nature: farming, fishing, mining, lumbering, quarrying
- **secondary (manufacturing and construction)** — changing raw materials into finished or semi-finished goods
- **tertiary (services)** — trade, transport, banking, teaching, health
- **quaternary** — information and research

### By size and product
- **heavy industries** — bulky products, large capital: iron and steel, cement, oil refining, shipbuilding
- **light industries** — smaller, lighter goods: textiles, food, shoes, plastics, electronics
- **cottage (craft) industries** — small-scale, at home, with simple tools: weaving (aso-oke, akwete), dyeing (adire), pottery, leather work, blacksmithing, carving

## Factors of industrial location
- **raw materials** — bulky, heavy or perishable materials attract industry to the source: cement at Ewekoro and Obajana; sugar at Bacita and Numan
- **power and fuel**
- **market** — industries making bulky or fragile goods, or goods for everyday use, locate near consumers: breweries, soft drinks, bakeries
- **transport** — roads, railways, ports for imports and exports
- **labour** — skilled and unskilled
- **capital**
- **water supply** — for processing and cooling
- **land** and industrial estates
- **government policy** — incentives, spreading development, political stability
- **industrial inertia** and nearness to related industries

## Major industries
| Industry | Centres |
|---|---|
| **oil refining and petrochemicals** | Port Harcourt (Eleme), Warri, Kaduna, Lekki |
| **iron and steel** | Ajaokuta, Aladja; rolling mills at Jos, Osogbo, Katsina |
| **cement** | Ewekoro, Shagamu, Obajana, Ashaka, Gboko, Calabar, Sokoto, Nkalagu |
| **textiles** | Kaduna, Kano, Lagos, Aba, Asaba |
| **motor assembly** | Lagos, Kaduna, Enugu, Nnewi, Bauchi |
| **food, drinks and tobacco** | Lagos, Ibadan, Kano, Aba, Jos |
| **fertiliser** | Onne (Port Harcourt), Kaduna |
| **paper** | Jebba, Oku Iboku, Iwopin |
| **aluminium** | Ikot Abasi |
| plastics, soap, pharmaceuticals, tyres, leather | Lagos, Aba, Kano |

## Industrial zones
- **Lagos–Ikeja–Otta–Agbara** — the largest: port, market, labour, capital, power
- **Kano–Kaduna–Zaria–Jos**
- **Port Harcourt–Aba–Onitsha–Nnewi–Enugu**
- **Warri–Sapele–Benin**

### Why Lagos leads
seaport and airport; a very large market; skilled labour; banks and capital; road and rail links; early start; former capital.

## Importance of manufacturing
employment; goods for home use, reducing imports (**import substitution**); foreign exchange from exports; use of local raw materials, stimulating farming and mining; government revenue; development of skills, towns and infrastructure; a higher standard of living; diversification of the economy.

## Problems
- **inadequate and unreliable electricity**
- shortage of **capital** and costly loans
- dependence on **imported machinery, spare parts and raw materials**
- shortage of skilled manpower and management
- poor roads, railways and water supply
- competition from cheaper imported goods; smuggling
- small home market and low incomes
- unstable government policies; multiple taxes
- insecurity; industrial pollution

### Solutions
steady power supply; loans and industrial banks; technical education; use of local raw materials; improved transport; protection from dumping; export processing zones; encouraging small-scale industries and foreign investment.

## Industrialisation strategies
import substitution; export promotion; privatisation; free-trade zones (Calabar, Lekki, Onne).`,
          examples: `**Example 1.** Classify farming, textile making and banking. *Answer:* **Primary, secondary and tertiary** industries respectively.

**Example 2.** Why are cement factories located near limestone deposits? *Answer:* Limestone is **bulky and loses weight in processing**, so it is costly to transport.

**Example 3.** State two problems of manufacturing in Nigeria. *Answer:* **Unreliable electricity** and **shortage of capital**.`,
        },
        questions: [
          ["E", "An industry that changes raw materials into finished goods is", "a secondary industry", "a primary industry", "a tertiary industry", "an extractive industry", "Manufacturing belongs to this group."],
          ["E", "Mining and fishing are examples of", "primary industries", "secondary industries", "tertiary industries", "cottage industries only", "They take materials directly from nature."],
          ["E", "The largest industrial zone in Nigeria is centred on", "Lagos", "Sokoto", "Maiduguri", "Yola", "It has a port, a large market and capital."],
          ["M", "Nigeria's integrated iron and steel complex is located at", "Ajaokuta", "Ewekoro", "Onne", "Ikot Abasi", "It is in Kogi State, near the Itakpe iron ore."],
          ["M", "Breweries and soft-drink factories are usually located near", "their markets", "limestone deposits", "seaports only", "coal fields", "Their products are bulky and fragile to distribute."],
          ["M", "Weaving, pottery and blacksmithing carried on at home with simple tools are", "cottage industries", "heavy industries", "extractive industries", "quaternary industries", "They need little capital."],
          ["M", "Banking, transport and teaching are classified as", "tertiary industries", "primary industries", "secondary industries", "heavy industries", "They provide services."],
          ["H", "The most serious obstacle to manufacturing in Nigeria is generally considered to be", "inadequate and unreliable power supply", "an excess of skilled labour", "too many seaports", "the absence of raw materials of any kind", "Factories must rely on costly generators."],
          ["H", "Manufacturing goods locally to replace those formerly brought in from abroad is called", "import substitution", "export promotion", "privatisation", "nationalisation", "It saves foreign exchange."],
          ["H", "Cement factories are sited close to limestone quarries because limestone", "is bulky and costly to transport", "is very light", "is found everywhere", "needs no processing", "The raw material loses weight during manufacture."],
        ],
      },
      {
        week: 4,
        title: "Trade in Nigeria and ECOWAS",
        subtopics: ["Types of trade", "Nigeria's internal and external trade", "ECOWAS: formation, members and objectives", "Achievements and problems of ECOWAS"],
        objectives: ["Distinguish the types of trade", "Describe Nigeria's internal and external trade", "Describe the formation, membership and objectives of ECOWAS", "Assess the achievements and problems of ECOWAS"],
        lesson: {
          title: "Trade and Regional Co-operation",
          summary: "Describe trade in Nigeria and the role of ECOWAS in West Africa.",
          minutes: 40,
          notes: `## Trade
The **buying and selling of goods and services**. It arises because areas differ in resources, climate, skills and needs.
- **home (internal) trade** — within a country: wholesale and retail
- **foreign (international) trade** — between countries: **imports**, **exports** and re-exports
- **bilateral** trade — between two countries; **multilateral** — among many

## Internal trade in Nigeria
Based on the differences between regions:
- from the **north to the south**: cattle, onions, tomatoes, beans, grains, dried fish
- from the **south to the north**: kola nuts, palm oil, gari, yams, plantain, fruits, manufactured goods
Markets may be daily or periodic; major commercial centres are Lagos, Kano, Onitsha, Aba and Ibadan. Trade depends on road transport.

## External trade
### Exports
**crude petroleum** and **natural gas** (the bulk of export earnings); also cocoa, rubber, sesame, cashew, palm kernel, hides and skins, urea and cement.
### Imports
machinery, vehicles, refined petroleum products, wheat, rice, sugar, fish, chemicals, pharmaceuticals, electronics, iron and steel.
### Trading partners
India, the Netherlands, Spain, the USA, China, France, the United Kingdom, and neighbouring West African countries.
### Terms
- **balance of trade** = value of visible exports − value of visible imports; **favourable** when exports exceed imports
- **balance of payments** — the record of all a country's transactions with the rest of the world
- **terms of trade** — the rate at which exports exchange for imports

### Problems of Nigeria's foreign trade
dependence on **one export** (oil) and its fluctuating price; export of raw materials and import of costly manufactures; heavy import bills; smuggling; port congestion; weak currency.
### Solutions
diversifying exports; processing raw materials before export; boosting local production; better ports; regional trade.

## ECOWAS
The **Economic Community of West African States**, founded by the **Treaty of Lagos on 28 May 1975**, largely through the efforts of General Yakubu Gowon of Nigeria and President Gnassingbé Eyadéma of Togo. The headquarters is in **Abuja**.

### Members
Fifteen at its height: Benin, Burkina Faso, Cape Verde, Côte d'Ivoire, The Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Niger, Nigeria, Senegal, Sierra Leone and Togo. (Mauritania, a founder, left in 2000. Mali, Burkina Faso and Niger announced their withdrawal in 2024, effective January 2025.)

### Objectives
- to promote **co-operation and economic integration** leading to an economic union
- to **remove customs duties and trade barriers** among members (a free-trade area)
- to establish a **common external tariff** and a common market
- to allow the **free movement of people, goods, services and capital**
- to harmonise agricultural, industrial, transport and monetary policies
- to raise living standards and maintain economic stability
- to promote peace and security

### Organs
the Authority of Heads of State and Government; the Council of Ministers; the Commission (formerly the Secretariat); the Community Parliament; the Community Court of Justice; the ECOWAS Bank for Investment and Development (Lomé).

### Achievements
- **free movement** — citizens travel visa-free for up to 90 days; the ECOWAS passport
- trade liberalisation scheme and common external tariff
- **ECOMOG** peace-keeping in Liberia, Sierra Leone and The Gambia
- regional roads (the Lagos–Abidjan and trans-West African highways), the West African Gas Pipeline and the power pool
- co-operation in agriculture, health and education

### Problems
- different **currencies** and colonial languages (English, French, Portuguese)
- similar products — little to trade with one another
- political instability and military coups; insecurity
- poor transport and communication links
- loyalty to former colonial powers and to rival groupings
- non-payment of dues; fear of domination by Nigeria
- smuggling; border harassment; slow progress towards a single currency`,
          examples: `**Example 1.** Distinguish imports from exports. *Answer:* **Imports** are goods bought from other countries; **exports** are goods sold to them.

**Example 2.** When and where was ECOWAS founded? *Answer:* On **28 May 1975**, in **Lagos**.

**Example 3.** State two problems facing ECOWAS. *Answer:* **Different currencies** and **political instability**.`,
        },
        questions: [
          ["E", "Goods bought by a country from other countries are called", "imports", "exports", "re-exports", "tariffs", "Exports are goods sold abroad."],
          ["E", "ECOWAS stands for the", "Economic Community of West African States", "Economic Council of West African Societies", "Export Committee of West African States", "Eastern Community of West African States", "It is a regional economic grouping."],
          ["E", "The headquarters of ECOWAS is located in", "Abuja", "Accra", "Lomé", "Dakar", "It is in Nigeria."],
          ["M", "ECOWAS was established by a treaty signed in Lagos in", "1975", "1960", "1963", "1991", "The treaty was signed on 28 May."],
          ["M", "The difference between the value of a country's visible exports and its visible imports is its", "balance of trade", "terms of trade", "national income", "exchange rate", "It is favourable when exports exceed imports."],
          ["M", "Which of these goods moves mainly from northern to southern Nigeria in internal trade?", "cattle", "kola nuts", "palm oil", "plantain", "Livestock are reared mainly in the north."],
          ["M", "One objective of ECOWAS is to", "remove trade barriers among member states", "form a single political party", "abolish all national governments", "stop all movement across borders", "It aims at a free-trade area and common market."],
          ["H", "The peace-keeping force set up by ECOWAS, which served in Liberia and Sierra Leone, is known as", "ECOMOG", "NATO", "OPEC", "UNESCO", "It was the community's monitoring group."],
          ["H", "Trade among West African countries remains small mainly because they", "produce similar primary products", "have no seaports", "use the same currency", "have no borders", "They have little to exchange with one another."],
          ["H", "A weakness of Nigeria's export trade is its", "heavy dependence on a single commodity", "wide range of manufactured exports", "lack of any trading partners", "refusal to import goods", "Earnings fall when the price of oil drops."],
        ],
      },
      {
        week: 5,
        title: "Remote sensing and GIS data",
        subtopics: ["Meaning and types of remote sensing", "Satellites and aerial photographs", "Geo-referencing and data capture", "Uses and limitations of remote sensing"],
        objectives: ["Define remote sensing and describe its types", "Describe satellites and aerial photographs as sources of data", "Explain geo-referencing and the capture of data for GIS", "State the uses and limitations of remote sensing"],
        lesson: {
          title: "Observing the Earth from Above",
          summary: "Explain remote sensing and how its data are prepared for use in GIS.",
          minutes: 40,
          notes: `## Remote sensing
The **science of obtaining information about objects or areas on the earth's surface from a distance, without physical contact** — usually from aircraft or satellites carrying **sensors**.
The sensors record **electromagnetic energy** (visible light, infrared, microwaves) reflected or emitted by features on the ground.

## Process
1. a **source of energy** (the sun, or the sensor itself)
2. the energy travels through the **atmosphere** and strikes the **target**
3. the reflected or emitted energy is recorded by the **sensor**
4. the data are **transmitted** to a ground station
5. they are **processed** into images
6. the images are **interpreted and analysed**
7. the results are **applied**

## Types
- **passive remote sensing** — the sensor records **natural** energy (reflected sunlight or emitted heat): cameras, most satellite scanners. It needs daylight or heat and is hindered by cloud
- **active remote sensing** — the sensor **sends out its own signal** and records what returns: **radar** and lidar. It works by day or night and through cloud

## Platforms
- **ground-based** — hand-held or tower-mounted instruments
- **airborne** — aircraft, helicopters, balloons and **drones**, giving **aerial photographs**
- **space-borne** — **satellites**

## Aerial photographs
- **vertical** — the camera points straight down; map-like; used for mapping
- **oblique** — taken at an angle; show a wider, more natural view; high oblique photographs include the horizon
Overlapping pairs viewed through a **stereoscope** give a three-dimensional picture of relief.

## Satellites
- **geostationary** satellites stay above the same point on the equator at about 36 000 km — weather and communication
- **polar-orbiting (sun-synchronous)** satellites pass over the whole earth at lower altitude — earth observation
Examples: Landsat (USA), SPOT (France), and Nigeria's **NigeriaSat-1** (launched 2003), NigeriaSat-2 and NigeriaSat-X (2011), managed by the **National Space Research and Development Agency (NASRDA)**; NigComSat for communication.
### Resolution
**spatial** resolution — the size of the smallest object that can be seen (the pixel size); **temporal** resolution — how often the same area is imaged.

## Interpreting images
Features are recognised by **tone or colour, shape, size, pattern, texture, shadow and association**: water appears dark; built-up areas grey with a regular pattern; vegetation bright red on false-colour infrared images.

## The Global Positioning System (GPS)
A network of satellites whose signals allow a receiver to calculate its **latitude, longitude and altitude**. It is used to locate features in the field and to check maps and images.

## Geo-referencing
Assigning **real-world coordinates** to an image or scanned map so that it fits its true position on the earth and can be overlaid on other layers. **Ground control points** — features identifiable both on the image and on the ground or a map — are used.

## Capturing data for GIS
- **scanning** — a paper map is converted into a raster image
- **digitising** — features are traced as points, lines and polygons to produce vector data
- **keyboard entry** — attribute data typed into tables
- direct import of GPS readings and satellite images

## Uses of remote sensing
- **weather forecasting** and monitoring of storms
- **mapping and updating maps**, especially of remote areas
- **agriculture** — crop type, health and yield estimates
- **forestry** — monitoring deforestation and bush fires
- **environmental monitoring** — desertification, flooding, erosion, oil spills, the shrinking of Lake Chad
- **urban planning** — tracing the growth of cities
- **mineral and water exploration**
- **disaster management**; **defence and security**; population estimation

## Advantages
covers very large and inaccessible areas quickly; repeated coverage shows change over time; data are already in digital form; cheaper than ground survey for large areas.
## Limitations
costly equipment and expertise; cloud cover obstructs passive sensors; images need skilled interpretation and checking on the ground (**ground truthing**); fine details may not be visible.`,
          examples: `**Example 1.** Define remote sensing. *Answer:* **Obtaining information about the earth's surface from a distance**, without physical contact.

**Example 2.** Distinguish active from passive remote sensing. *Answer:* **Active** sensors send out their own signal (radar); **passive** sensors record natural energy.

**Example 3.** What is geo-referencing? *Answer:* **Assigning real-world coordinates** to an image or scanned map.`,
        },
        questions: [
          ["E", "Obtaining information about the earth's surface from a distance without physical contact is", "remote sensing", "ground surveying", "census taking", "chain surveying", "Sensors on aircraft and satellites are used."],
          ["E", "A photograph of the ground taken from an aircraft is called", "an aerial photograph", "a topographical map", "a sketch", "a cross-section", "It may be vertical or oblique."],
          ["E", "Nigeria's first earth-observation satellite, launched in 2003, was", "NigeriaSat-1", "Landsat", "SPOT", "NigComSat", "It is managed by the national space agency."],
          ["M", "A remote sensing system that sends out its own signal and records what returns is described as", "active", "passive", "manual", "analogue", "Radar is an example."],
          ["M", "An aerial photograph taken with the camera pointing straight down is", "a vertical photograph", "an oblique photograph", "a ground photograph", "a panoramic sketch", "It resembles a map."],
          ["M", "The process of tracing features from a map as points, lines and polygons for use in a GIS is", "digitising", "printing", "scanning only", "plotting contours by hand", "It produces vector data."],
          ["M", "A satellite that remains above the same point on the equator is described as", "geostationary", "polar-orbiting", "oblique", "passive", "Weather and communication satellites are of this kind."],
          ["H", "Assigning real-world coordinates to a scanned map or image so that it fits its true position is called", "geo-referencing", "digitising", "ground truthing", "buffering", "Ground control points are used."],
          ["H", "A limitation of passive remote sensing is that", "cloud cover obstructs the view of the ground", "it works only at night", "it cannot cover large areas", "it requires walking over the area", "It depends on reflected sunlight."],
          ["H", "Checking the interpretation of a satellite image by visiting the area on the ground is known as", "ground truthing", "overlay", "scanning", "transhumance", "It confirms what the features really are."],
        ],
      },
    ],
  },
];
