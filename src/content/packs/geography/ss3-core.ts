import type { TermPlan } from "../types";

/** SS3 Geography — original Precious PS content following the national senior secondary curriculum. */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Interpretation of topographical maps",
        subtopics: ["Describing relief and drainage", "Settlement, communication and land use", "Relationships between physical and human features", "Enlargement and reduction of maps"],
        objectives: ["Describe relief and drainage from a topographical map", "Describe settlement, communication and land use from a map", "Explain the relationships between physical and human features", "Enlarge and reduce maps and state the new scale"],
        lesson: {
          title: "Reading the Whole Map",
          summary: "Interpret physical and human features on topographical maps and change map scale.",
          minutes: 40,
          notes: `## Approach
Study the **title, scale, key, contour interval and north arrow** first. Then describe each element in turn, always giving **evidence from the map** — heights, directions, grid references and names.

## Relief
- state the **highest and lowest** heights and where they occur
- divide the area into **relief regions**: highland, lowland, plateau
- name the landforms: ridges, spurs, valleys, cols, escarpments, isolated hills, plains
- describe the **slopes**: steep (close contours), gentle (wide spacing), concave, convex
- state the general direction of slope

## Drainage
- the **main rivers** and the **direction of flow** — rivers flow from high to low ground; the V of the contours points upstream; tributaries join at an acute angle pointing downstream
- the **drainage pattern**: dendritic, trellis, radial, centripetal
- **drainage density** — many streams suggest impermeable rock or heavy rainfall; few suggest permeable rock or dryness
- the **watershed**; features such as meanders, flood plains, swamps, lakes, waterfalls
- whether streams are perennial or seasonal (broken blue lines)

## Settlement
- **type and size**: hamlets, villages, towns
- **pattern**: nucleated, linear, dispersed
- **distribution** — where settlements are many or few, and why
- **site factors**: water supply, flat or well-drained land, route junctions, river crossings, defence, avoidance of swamps and steep slopes
- **functions**, from the symbols: market, school, church or mosque, hospital, court, post office, railway station

## Communication
- types: main and secondary roads, tracks, footpaths, railways, waterways, airfields
- how routes **relate to relief**: roads and railways follow valleys, gaps and gentle gradients; they avoid steep slopes and swamps; bridges and embankments at river crossings
- **nodal (route) centres**

## Land use and economic activities
Inferred from symbols and names: cultivation and plantations (farming); forest reserves (lumbering); quarries and mines; rivers and lakes (fishing); markets (trade); factories and mills (industry); ranches (livestock).

## Relationships
- settlements avoid steep slopes, swamps and flood plains and cluster near water and routes
- routes follow the easiest relief
- farming occupies gentle slopes and valleys; forest remains on steep ground
- drainage reflects relief and rock type
Always link a human feature to the physical feature that explains it.

## Enlargement and reduction of maps
### Method (by squares)
1. draw a grid of equal squares over the original map (or use its grid)
2. draw a new frame whose sides are **multiplied** (enlargement) or **divided** (reduction) by the given factor, with the same number of squares
3. copy the details square by square
4. give the new map its title, key, north arrow and **new scale**

### The new scale
- **enlargement**: divide the denominator of the scale by the factor
  1 : 50 000 enlarged **2 times** becomes **1 : 25 000**
- **reduction**: multiply the denominator by the factor
  1 : 50 000 reduced to **half** its size becomes **1 : 100 000**

### Size and area
Lengths change by the factor; **area changes by the square of the factor**.
A map 10 cm by 8 cm reduced to half becomes 5 cm by 4 cm — its area falls from 80 cm² to 20 cm², one-quarter.
A map enlarged 3 times has 9 times the area.

## Sketch maps
A simplified drawing from the map showing only selected features — the outline, main relief, rivers, roads and settlements — with a frame, title, key and scale.

## Photographs and maps
A ground or aerial photograph shows the actual appearance of features; a map shows them by symbols, to scale. Compare the two to identify features.`,
          examples: `**Example 1.** A map of scale 1 : 100 000 is enlarged twice. State the new scale. *Solution:* 100 000 ÷ 2: **1 : 50 000**.

**Example 2.** A map measuring 12 cm by 9 cm is reduced to one-third. Find its new dimensions. *Solution:* **4 cm by 3 cm**.

**Example 3.** How can the direction of flow of a river be found from contours? *Answer:* The river flows **from higher to lower contours**; the V-shaped contours point **upstream**.`,
        },
        questions: [
          ["E", "On a contour map, a river flows", "from higher ground to lower ground", "from lower ground to higher ground", "along a single contour only", "always northwards", "The contour values decrease downstream."],
          ["E", "On a topographical map, settlements are usually shown in", "black", "blue", "green", "brown", "Blue is used for water and brown for contours."],
          ["E", "A place where several roads meet is called a", "nodal centre", "watershed", "confluence", "col", "It often grows into a market town."],
          ["M", "A map of scale 1 : 50 000 is enlarged two times. The scale of the new map is", "1 : 25 000", "1 : 100 000", "1 : 50 000", "1 : 200 000", "Divide the denominator by the factor."],
          ["M", "A map of scale 1 : 50 000 is reduced to half its size. The scale of the new map is", "1 : 100 000", "1 : 25 000", "1 : 75 000", "1 : 12 500", "Multiply the denominator by 2."],
          ["M", "On a map, roads and railways in hilly country usually follow", "valleys and gaps", "the highest ridges", "the steepest slopes", "swamps", "They seek the gentlest gradients."],
          ["M", "A large number of streams on a map suggests that the area has", "impermeable rocks or heavy rainfall", "permeable limestone", "a desert climate", "no relief", "Water runs off the surface instead of sinking in."],
          ["H", "A map measuring 10 cm by 8 cm is reduced to half its original size. The area of the new map is", "20 cm²", "40 cm²", "80 cm²", "10 cm²", "The new map is 5 cm by 4 cm."],
          ["H", "When a map is enlarged three times, its area becomes", "nine times as large", "three times as large", "six times as large", "one-third as large", "Area changes by the square of the factor."],
          ["H", "Few settlements are shown on the flood plain of a large river on a map. The most likely reason is", "the risk of flooding", "the lack of water", "the steepness of the land", "the absence of soil", "People build on higher, drier ground nearby."],
        ],
      },
      {
        week: 2,
        title: "Statistical maps and diagrams",
        subtopics: ["Bar and line graphs", "Pie charts and divided rectangles", "Dot, choropleth and isopleth maps", "Flow maps and proportional symbols"],
        objectives: ["Draw and interpret bar and line graphs", "Draw and interpret pie charts and divided rectangles", "Describe dot, choropleth and isopleth maps", "Describe flow maps and proportional symbols"],
        lesson: {
          title: "Presenting Geographical Data",
          summary: "Represent and interpret geographical data with graphs, charts and statistical maps.",
          minutes: 40,
          notes: `## Why use diagrams?
They make figures easy to **see, compare and remember**, show trends and distributions at a glance, and save space.

## Bar graphs
Bars of equal width whose **lengths are proportional to the values**.
- **simple bar graph** — one set of data: monthly rainfall, exports by commodity
- **multiple (group) bar graph** — several bars side by side for comparison
- **compound (component) bar graph** — each bar divided to show the parts of a total
Choose a suitable scale; start the axis at zero; label the axes; give a title and key.

## Line graphs
Points joined by a line to show **continuous change over time**: temperature through the year, population growth, production over several years. A **polygraph** carries several lines.

### Climate graph
Monthly **rainfall as bars** and monthly **temperature as a line** on the same diagram.

## Pie chart (divided circle)
A circle divided into sectors proportional to the components of a total.
**angle of sector = (value ÷ total) × 360°**
*Example:* exports total ₦100 million, of which cocoa is ₦25 million: angle = 25 ÷ 100 × 360° = **90°**.
A percentage is multiplied by 3.6: 40% = 144°.
Start at the top ("12 o'clock") and draw the sectors clockwise in order of size.
- good for showing shares of a whole
- poor when there are many small components, or for showing change over time

## Divided rectangle
A rectangle divided in proportion to the components — an alternative to the pie chart.

## Measures used with the data
**mean** = sum ÷ number of values; **median** — the middle value; **mode** — the most frequent; **range** = highest − lowest.

## Statistical maps
### Dot map
Each **dot represents a fixed quantity** (for example, 1 dot = 1000 people), placed where the item occurs.
- shows **distribution** and density clearly
- but dots may merge where values are high, and exact totals are hard to read

### Choropleth (shading) map
Administrative areas are **shaded or coloured according to the average value** (density) within each — darker for higher values. Used for population density, rainfall, yield per hectare.
- easy to draw and read
- but suggests the value is uniform within each area and changes abruptly at boundaries

### Isopleth (isoline) map
**Lines join places of equal value**: **contours** (height), **isohyets** (rainfall), **isotherms** (temperature), **isobars** (pressure), isohels (sunshine). The lines are interpolated between known points.
- shows gradual change well
- needs many data points

### Flow map (flow-line map)
Lines along routes whose **thickness is proportional to the volume** of movement — traffic, trade, migration.

### Proportional symbols
Circles, squares or bars drawn on a map with **sizes proportional to the quantities** at each place — the population of towns, port tonnage. For proportional circles, the **radius is proportional to the square root of the value**.

## Choosing a method
| Data | Suitable method |
|---|---|
| change over time | line graph |
| comparison of separate items | bar graph |
| parts of a whole | pie chart, divided rectangle, compound bar |
| distribution of a quantity | dot map |
| density by area | choropleth map |
| continuously varying values | isopleth map |
| movement between places | flow map |

## Interpreting
State the **highest and lowest** values, the **trend** (rising, falling, fluctuating), totals and differences, and give **reasons** from your geographical knowledge.`,
          examples: `**Example 1.** In a pie chart of land use, forest covers 30% of the area. Find the angle of its sector. *Solution:* 30 × 3.6 = **108°**.

**Example 2.** Which statistical map uses lines joining places of equal value? *Answer:* An **isopleth map**.

**Example 3.** On a dot map 1 dot represents 500 cattle. How many dots represent 6000 cattle? *Solution:* 6000 ÷ 500 = **12 dots**.`,
        },
        questions: [
          ["E", "A circle divided into sectors to show the components of a total is a", "pie chart", "bar graph", "line graph", "dot map", "The whole circle represents the total."],
          ["E", "A diagram in which the lengths of bars represent the values is a", "bar graph", "pie chart", "flow map", "isopleth map", "The bars have equal widths."],
          ["E", "Lines on a map joining places of equal temperature are", "isotherms", "isohyets", "isobars", "contours", "They are a type of isopleth."],
          ["M", "A country's exports are worth ₦100 million, of which cocoa earns ₦25 million. In a pie chart, cocoa is represented by an angle of", "90°", "25°", "45°", "100°", "25 ÷ 100 × 360°."],
          ["M", "A map on which areas are shaded according to the density of a distribution is", "a choropleth map", "a dot map", "a flow map", "a sketch map", "Darker shading shows higher values."],
          ["M", "The most suitable diagram for showing the change in a town's population over fifty years is", "a line graph", "a pie chart", "a dot map", "a divided rectangle", "It shows continuous change with time."],
          ["M", "On a dot map, one dot represents 500 cattle. The number of dots needed to represent 6000 cattle is", "12", "30", "6", "120", "6000 ÷ 500. Answer: 12."],
          ["H", "A map in which the thickness of lines along routes is proportional to the volume of traffic is", "a flow map", "an isopleth map", "a choropleth map", "a relief map", "It shows movement between places."],
          ["H", "A weakness of the choropleth map is that it", "suggests that values are uniform within each area", "cannot show density", "needs no data", "uses lines of equal value", "Sharp changes appear only at the boundaries."],
          ["H", "In a pie chart, a commodity that makes up 40% of total production is shown by a sector of", "144°", "40°", "72°", "160°", "40 × 3.6. Answer: 144°."],
        ],
      },
      {
        week: 3,
        title: "Elementary surveying",
        subtopics: ["Meaning and types of survey", "Chain surveying: equipment and procedure", "Prismatic compass and traverse surveying", "Errors, precautions and plotting"],
        objectives: ["Explain surveying and its types", "Describe the equipment and procedure of chain surveying", "Describe compass traverse surveying", "State sources of error and precautions, and outline plotting"],
        lesson: {
          title: "Measuring the Land",
          summary: "Describe chain and compass surveying and how survey data are recorded and plotted.",
          minutes: 40,
          notes: `## Surveying
The art of **measuring distances, angles and heights on the land** so that the positions of features can be shown on a plan or map.
### Uses
making maps and plans; fixing boundaries of plots and farms; laying out roads, railways, buildings and canals; settling land disputes.
### Stages
1. **reconnaissance** — a preliminary look at the area to choose stations and plan the work
2. **field measurement** and recording
3. **plotting** in the office

## Chain surveying
The simplest method: only **linear measurements** are taken, and the area is divided into a framework of **triangles**. It suits small, fairly open and level areas.

### Equipment
| Instrument | Use |
|---|---|
| **chain** (20 m or 30 m, of 100 links) or **steel band** | measuring the main lines |
| **measuring tape** (linen or steel) | measuring offsets and short distances |
| **ranging poles** | marking stations and keeping lines straight |
| **arrows (pins)** | marking the end of each chain length |
| **pegs** | marking stations permanently |
| **cross staff** or **optical square** | setting out right angles for offsets |
| **field book** | recording measurements |
| also: plumb bob, mallet, pencil |

### Terms
- **survey stations** — the points at the ends of chain lines
- **base line** — the longest line, running through the middle of the area, on which the framework is built
- **chain (survey) lines** — the lines joining stations
- **offsets** — short measurements **at right angles** from a chain line to features such as buildings, fences and paths
- **tie line** — a line joining points on two chain lines to fix details
- **check line** — a line measured to test the accuracy of the framework

### Procedure
1. reconnoitre and draw a sketch
2. select stations forming well-shaped triangles; mark them with pegs and ranging poles
3. **range** the line (keep it straight) and measure it with the chain, the **leader** pulling the chain and fixing arrows, the **follower** holding the rear end and collecting them
4. take **offsets** to features on either side
5. record in the field book
6. measure check lines

### Booking
The field book has a double line down the centre representing the chain line. Entries begin at the **bottom of the page and work upwards**; chainages go between the lines, and offsets are written on the left or right, as the features lie in the field.

## Prismatic compass (traverse) survey
A **traverse** is a series of connected lines whose **lengths and bearings** are measured.
- **open traverse** — starts and ends at different points: a road, river or path
- **closed traverse** — returns to the starting point, forming a polygon: a farm, school compound or lake
### Equipment
**prismatic compass** (for bearings), tape or chain, ranging poles, arrows, pegs, field book.
### Procedure
At each station, sight the next station and read the **forward bearing**; measure the distance; at the next station read the **back bearing** as a check — it should differ by **180°**.
### Advantages
quick; suits long, narrow or wooded areas where triangles cannot be formed.
### Local attraction
Iron objects and electric cables disturb the compass needle; it is detected when forward and back bearings do not differ by 180°.

## Other methods
- **plane tabling** — the plan is drawn in the field on a board mounted on a tripod, with an alidade
- **levelling** — finding differences in height with a level and staff
- **theodolite** and **total station** surveys; **GPS** surveying

## Errors and precautions
### Sources of error
incorrect length of chain; sagging or twisted chain; poor ranging; miscounting chain lengths; wrong reading or booking; slopes not allowed for; local attraction.
### Precautions
check the chain; keep it straight, horizontal and taut; range carefully; count arrows; book at once and clearly; take forward and back bearings; measure check lines; keep metal away from the compass.

## Plotting
Choose a suitable scale; draw the north line; plot the base line and the triangles (or each traverse leg with a protractor and scale); add offsets and details; in a closed traverse distribute any **closing error**; finish with title, scale, key and north arrow.`,
          examples: `**Example 1.** Name four instruments used in chain surveying. *Answer:* **Chain, ranging poles, arrows and measuring tape**.

**Example 2.** What is an offset? *Answer:* A **short measurement at right angles** from a chain line to a feature.

**Example 3.** The forward bearing of a line is 075°. What should the back bearing be? *Solution:* 075° + 180° = **255°**.`,
        },
        questions: [
          ["E", "The instrument used in chain surveying to keep a survey line straight is the", "ranging pole", "arrow", "field book", "plumb bob", "Poles are lined up by eye along the line."],
          ["E", "Measurements taken during a survey are recorded in the", "field book", "atlas", "log table", "register", "Entries are made as the work proceeds."],
          ["E", "The instrument used to measure bearings in a traverse survey is the", "prismatic compass", "cross staff", "chain", "arrow", "It gives the direction of each line."],
          ["M", "In chain surveying, short measurements taken at right angles from the chain line to features are called", "offsets", "tie lines", "base lines", "bearings", "They fix the positions of details."],
          ["M", "The longest line in a chain survey, on which the framework of triangles is built, is the", "base line", "check line", "offset", "tie line", "It usually runs through the middle of the area."],
          ["M", "A traverse that starts and ends at the same station is", "a closed traverse", "an open traverse", "a base line", "a tie line", "It is used for surveying compounds and farms."],
          ["M", "Arrows are used in chain surveying to", "mark the end of each chain length", "measure angles", "set out right angles", "record measurements", "The follower collects them to count the chains."],
          ["H", "In booking a chain survey, entries in the field book are made", "from the bottom of the page upwards", "from the top of the page downwards", "from right to left", "in any order", "This matches the direction in which the surveyor walks."],
          ["H", "The forward bearing of a traverse line is 075°. If there is no error, the back bearing is", "255°", "105°", "285°", "075°", "The two should differ by 180°."],
          ["H", "The disturbance of a compass needle by nearby iron objects is known as", "local attraction", "closing error", "magnetic north", "ranging", "It makes forward and back bearings disagree."],
        ],
      },
      {
        week: 4,
        title: "The oceans",
        subtopics: ["The oceans and the relief of the ocean floor", "Salinity and temperature of ocean water", "Ocean currents", "Importance of the oceans"],
        objectives: ["Name the oceans and describe the relief of the ocean floor", "Explain variations in salinity and temperature", "Describe the major ocean currents and their effects", "Explain the importance of the oceans to man"],
        lesson: {
          title: "Oceans of the World",
          summary: "Describe the ocean floor, salinity, currents and the uses of the oceans.",
          minutes: 40,
          notes: `## The oceans
Oceans cover about **71%** of the earth's surface. In order of size: **Pacific** (the largest and deepest), **Atlantic**, **Indian**, **Southern (Antarctic)** and **Arctic** (the smallest).

## Relief of the ocean floor
| Feature | Description |
|---|---|
| **continental shelf** | the gently sloping, shallow margin of a continent, to about 200 m deep; rich in fish, oil and gas |
| **continental slope** | the steep descent from the shelf edge to the deep ocean |
| **abyssal (deep-sea) plain** | the broad, flat ocean floor at 3000–6000 m, covered with ooze |
| **mid-oceanic ridge** | a submarine mountain range where plates move apart: the Mid-Atlantic Ridge |
| **ocean deep (trench)** | a long, narrow, very deep trough: the **Mariana Trench** in the Pacific (about 11 000 m) |
| **oceanic islands, seamounts and guyots** | volcanic peaks rising from the floor |

## Salinity
The amount of dissolved salts in sea water, expressed in **parts per thousand (‰)**. The average is about **35‰**; sodium chloride is the chief salt.
### Factors
- **evaporation** — high evaporation raises salinity
- **fresh water added** by rain, rivers and melting ice lowers it
- **degree of mixing** — enclosed seas differ most from the average
### Variation
- highest in hot, dry, enclosed seas: the **Red Sea** (about 40‰), the Persian Gulf; the Dead Sea (a salt lake) is far saltier
- lowest where rivers and melting ice dilute the water: the **Baltic Sea**, river mouths, polar seas
- fairly high in the trade-wind belts; lower at the equator (heavy rain)

## Temperature
Surface temperature **decreases from the equator to the poles** and with **depth**; it is modified by currents.

## Movements of ocean water
**waves**, **tides** and **currents**.

## Ocean currents
Large masses of surface water moving in a definite direction.
### Causes
- **prevailing (planetary) winds** — the main cause
- differences in **temperature and density (salinity)**
- the **rotation of the earth** — deflection to the right in the northern hemisphere, to the left in the southern
- the **shape of the land masses**
The circulation is **clockwise in the northern hemisphere** and **anticlockwise in the southern**.

### Warm and cold currents
- **warm currents** flow from the equator towards the poles, usually along the **eastern** sides of continents
- **cold currents** flow from polar regions towards the equator, usually along the **western** sides
| Ocean | Warm currents | Cold currents |
|---|---|---|
| **Atlantic** | Gulf Stream, **North Atlantic Drift**, Brazil, **Guinea** | **Canaries**, **Benguela**, Labrador, Falkland |
| **Pacific** | Kuroshio (Japan), East Australian | California, **Peru (Humboldt)**, Oyashio |
| **Indian** | Mozambique, Agulhas | West Australian |

### Effects of currents
- **temperature** — warm currents raise, and cold currents lower, the temperature of coasts: the North Atlantic Drift keeps the ports of north-west Europe ice-free in winter
- **rainfall** — winds over warm currents bring rain; winds over cold currents are dry, helping to form coastal **deserts** (Namib beside the Benguela; Atacama beside the Peru Current; Sahara beside the Canaries)
- **fog** — where warm and cold currents meet (off Newfoundland)
- **fishing** — the mixing of warm and cold water, and the upwelling of cold water, bring nutrients for plankton: the Grand Banks, the seas off Japan, Peru and Namibia
- **navigation** — ships gain speed with a current; icebergs carried by cold currents are a danger

## Importance of the oceans
- **food** — fish, shellfish, seaweed
- **transport** — the cheapest route for international trade
- **minerals** — petroleum and natural gas from the continental shelf; salt; sand
- **climate** — moderating temperatures; source of rain
- **power** — tides and waves
- **recreation and tourism**
- defence; employment

## Problems
over-fishing; pollution by oil, sewage and plastics; rising sea level and coastal erosion; piracy.`,
          examples: `**Example 1.** Name the largest ocean. *Answer:* The **Pacific Ocean**.

**Example 2.** Why is the Red Sea saltier than the open ocean? *Answer:* It has **high evaporation**, **little rain** and **few rivers**, and is nearly enclosed.

**Example 3.** Name one warm and one cold current off the coast of West and south-west Africa. *Answer:* The **Guinea Current** (warm) and the **Benguela Current** (cold).`,
        },
        questions: [
          ["E", "The largest and deepest ocean in the world is the", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "It contains the Mariana Trench."],
          ["E", "The average salinity of ocean water is about", "35 parts per thousand", "3.5 parts per thousand", "350 parts per thousand", "100 parts per thousand", "Sodium chloride is the main salt."],
          ["E", "The shallow, gently sloping part of the sea floor bordering a continent is the", "continental shelf", "abyssal plain", "ocean trench", "mid-oceanic ridge", "It is rich in fish, oil and gas."],
          ["M", "The main cause of ocean currents is", "the prevailing winds", "the tides", "earthquakes", "river flow", "Winds drag the surface water along."],
          ["M", "Which of the following is a cold ocean current?", "the Benguela Current", "the Gulf Stream", "the Guinea Current", "the Kuroshio Current", "It flows along the coast of south-west Africa."],
          ["M", "The salinity of the Baltic Sea is low mainly because", "many rivers and melting ice add fresh water", "evaporation is very high", "it lies in the tropics", "it has no outlet", "The fresh water dilutes the salt."],
          ["M", "The warm current that keeps the ports of north-west Europe free of ice in winter is the", "North Atlantic Drift", "Canaries Current", "Labrador Current", "Peru Current", "It is a continuation of the Gulf Stream."],
          ["H", "The Namib Desert on the coast of south-west Africa owes its dryness partly to the", "cold Benguela Current offshore", "warm Mozambique Current", "heavy monsoon winds", "North Atlantic Drift", "Air cooled over cold water brings fog but little rain."],
          ["H", "Rich fishing grounds are often found where warm and cold currents meet because", "the mixing brings nutrients that support plankton", "the water is fresh", "there are no waves", "the sea is very deep", "Fish feed on the abundant plankton."],
          ["H", "In the northern hemisphere, the general circulation of ocean currents is", "clockwise", "anticlockwise", "from north to south only", "from west to east only", "The rotation of the earth deflects moving water to the right."],
        ],
      },
      {
        week: 5,
        title: "World transport and trade",
        subtopics: ["Modes of world transport", "Major ocean routes, canals and ports", "World railways and airways", "International trade"],
        objectives: ["Compare the modes of world transport", "Describe the major ocean routes, canals and ports", "Describe major railways and air routes", "Explain the basis, pattern and problems of international trade"],
        lesson: {
          title: "Linking the World",
          summary: "Describe world transport routes and the pattern of international trade.",
          minutes: 40,
          notes: `## Modes of transport
| Mode | Best for | Limitations |
|---|---|---|
| **road** | short and medium distances; door-to-door delivery | congestion; limited loads |
| **rail** | heavy, bulky goods and many passengers over long distances on land | costly to build; fixed routes |
| **water** | very heavy, bulky cargo over long distances — the cheapest per tonne | slow; needs ports and navigable water |
| **air** | passengers, mail, light, valuable and perishable goods — the fastest | most expensive; small loads |
| **pipeline** | oil, gas, water | fluids only; costly to lay |
**Containerisation** — goods packed in standard steel boxes that move easily between ship, train and lorry — has speeded handling and reduced theft.

## Ocean transport
### Major routes
- the **North Atlantic route** — between western Europe and eastern North America; the **busiest** in the world, linking two highly industrialised regions
- the **Mediterranean–Suez–Asian route** — Europe to the Middle East, India, the Far East and Australia
- the **Cape route** — round southern Africa; used by very large tankers
- the **Panama route** — between the Atlantic and Pacific coasts of the Americas
- the **Pacific routes** — between eastern Asia and western North America
- the South Atlantic route — Europe to South America

### Ship canals
| Canal | Links | Opened | Notes |
|---|---|---|---|
| **Suez Canal** (Egypt) | the **Mediterranean Sea** and the **Red Sea** | 1869 | sea-level canal with no locks; shortens the journey from Europe to Asia by avoiding the Cape |
| **Panama Canal** (Panama) | the **Atlantic** and **Pacific** Oceans | 1914 | uses **locks**; saves the long voyage round Cape Horn |
Others: the Kiel Canal (North Sea–Baltic); the St Lawrence Seaway (the Great Lakes to the Atlantic).

### Ports
- needs: deep, sheltered water; a rich **hinterland**; good land links; handling and storage facilities
- **entrepôt ports** collect and redistribute goods for other countries: **Singapore**, **Rotterdam**, Hong Kong
- great ports: Shanghai, Singapore, Rotterdam, New York, London, Durban, Lagos

## Inland waterways
the **Rhine**, the **Great Lakes–St Lawrence**, the Mississippi, the Yangtze, the Amazon, the Nile; in West Africa, the Niger.

## Railways
- **Trans-Siberian Railway** — Moscow to Vladivostok: the longest in the world (over 9000 km)
- **transcontinental lines** of North America — the Canadian Pacific and the lines linking New York and San Francisco
- dense networks in Europe, eastern North America, India and Japan (high-speed "bullet" trains)
- the Trans-Andean line; the Cape–Cairo dream, never completed
Railways are few in Africa and were mostly built from ports inland to carry minerals and crops.

## Airways
Major routes link North America, Europe and eastern Asia; great hubs include London, New York, Dubai, Singapore, Frankfurt and Atlanta. Air transport is vital for large or roadless countries.

## International trade
### Basis
Countries trade because of differences in **natural resources**, **climate**, **technology and skills**, **capital** and **demand** — each specialising in what it produces best (**comparative advantage**).
### Pattern
- **developed countries** export mainly **manufactured goods** and services
- **developing countries** export mainly **primary products** (minerals, crops) and import manufactures
- most trade is among the developed countries and, increasingly, with China and other Asian exporters
### Terms
visible and invisible trade; balance of trade and of payments; **tariffs** (taxes on imports), **quotas** (limits on quantity), embargoes; free trade and protection.
### Trade groupings
**ECOWAS**, the **European Union (EU)**, the African Continental Free Trade Area (AfCFTA), **OPEC** (oil exporters), the **World Trade Organization (WTO)**.

### Problems of developing countries in trade
dependence on a few primary exports with unstable prices; unfavourable terms of trade; trade barriers in rich countries; heavy debts; weak transport links.
### Remedies
diversification; processing before export; regional co-operation; fairer trade rules.`,
          examples: `**Example 1.** Which two bodies of water does the Suez Canal connect? *Answer:* The **Mediterranean Sea** and the **Red Sea**.

**Example 2.** Why is the North Atlantic the busiest ocean route? *Answer:* It links **two highly industrialised, densely populated regions** — western Europe and eastern North America.

**Example 3.** What is an entrepôt port? *Answer:* A port that **collects goods and redistributes them** to other countries, such as Singapore.`,
        },
        questions: [
          ["E", "The Suez Canal links the Mediterranean Sea with the", "Red Sea", "Black Sea", "Atlantic Ocean", "Baltic Sea", "It is in Egypt."],
          ["E", "The Panama Canal connects the", "Atlantic and Pacific Oceans", "Atlantic and Indian Oceans", "Mediterranean and Red Seas", "North Sea and Baltic Sea", "It cuts across Central America."],
          ["E", "The cheapest means of carrying very heavy and bulky goods over long distances is", "water transport", "air transport", "road transport", "motorcycle", "Ships carry enormous loads at low cost per tonne."],
          ["M", "The busiest ocean trade route in the world is the", "North Atlantic route", "Cape route", "South Atlantic route", "Panama route", "It links western Europe and eastern North America."],
          ["M", "The longest railway in the world is the", "Trans-Siberian Railway", "Canadian Pacific Railway", "Trans-Andean Railway", "Lagos–Kano line", "It runs from Moscow to Vladivostok."],
          ["M", "A port that collects goods and redistributes them to other countries is", "an entrepôt", "a naval port", "a fishing port", "an outport", "Singapore and Rotterdam are examples."],
          ["M", "A tax imposed on goods imported into a country is called", "a tariff", "a quota", "a subsidy", "an embargo", "A quota limits the quantity instead."],
          ["H", "Developing countries are at a disadvantage in world trade mainly because they", "export primary products whose prices are low and unstable", "export too many manufactured goods", "have too many trade routes", "refuse to import machinery", "Their imports of manufactures cost more than their exports earn."],
          ["H", "The Suez Canal is important to world trade because it", "shortens the sea route between Europe and Asia", "links North and South America", "joins the Great Lakes to the Atlantic", "connects the Niger to the Nile", "Ships avoid the long voyage round the Cape."],
          ["H", "Unlike the Suez Canal, the Panama Canal makes use of", "locks to raise and lower ships", "underground tunnels", "railway wagons", "pipelines", "The land it crosses is not at sea level throughout."],
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
        title: "World agriculture",
        subtopics: ["Subsistence systems", "Plantation agriculture", "Extensive commercial grain farming and livestock ranching", "Dairy, mixed and Mediterranean farming"],
        objectives: ["Describe the main subsistence farming systems", "Describe plantation agriculture", "Describe extensive grain farming and livestock ranching", "Describe dairy, mixed and Mediterranean farming"],
        lesson: {
          title: "Farming Systems of the World",
          summary: "Describe the major agricultural systems of the world and where they are practised.",
          minutes: 40,
          notes: `## Factors influencing agriculture
- **physical**: climate (temperature, rainfall, length of growing season), relief, soil
- **human**: capital, labour, market, transport, technology, government policy, land tenure

## Subsistence systems
### Shifting cultivation
Small plots are cleared by slashing and burning, cropped for a few years, then abandoned. Practised in the forests of the Amazon and Congo basins and parts of South-East Asia. Simple tools; low yields; needs much land; suits sparse populations.
### Nomadic herding
Herders move with their animals in search of pasture and water: the Fulani (West Africa), Maasai (East Africa), Bedouin (Arabia), herders of central Asia.
### Intensive subsistence farming
In **monsoon Asia** — China, India, Bangladesh, Japan, Java: tiny, carefully tended plots; much hand labour; terraces and irrigation; heavy manuring; two or three crops a year. **Wet rice (paddy)** is the chief crop. Yields per hectare are high, but output per worker is low.

## Plantation agriculture
The large-scale cultivation of **one cash crop** for export, mainly in the tropics.
- **features**: large estates; heavy capital investment, often foreign; scientific methods; much hired labour; processing on the estate; good transport to ports
- **crops and areas**: **rubber** — Malaysia, Indonesia, Thailand, Liberia; **tea** — India, Sri Lanka, Kenya; **coffee** — Brazil, Colombia, Ethiopia; **cocoa** — Côte d'Ivoire, Ghana; **sugar cane** — Brazil, Cuba, the Caribbean; **oil palm** — Malaysia, Indonesia; bananas — Central America
- **advantages**: high yields and quality; employment; foreign exchange; roads, schools and hospitals
- **problems**: dependence on one crop and on world prices; soil exhaustion; pests and diseases spread quickly; profits may leave the country; food crops are neglected

## Extensive commercial grain farming
In the **temperate grasslands**: the **prairies** (Canada, USA), the **steppes** (Ukraine, Russia), the **pampas** (Argentina), the Australian downs.
- very **large farms**; flat land
- **highly mechanised** — tractors, combine harvesters; few workers
- **wheat** is the main crop
- yield per hectare is low, but output per worker is very high
- storage in grain elevators; export by rail and sea

## Livestock ranching
Extensive rearing of beef cattle or sheep on huge ranches in drier grasslands: the western USA, the Argentine pampas, Australia (sheep for **wool**), New Zealand, South Africa. Scientific breeding; fenced paddocks; refrigerated ships carry meat to distant markets.

## Dairy farming
Rearing cattle for **milk, butter and cheese**, in cool, moist lands with rich pasture near large urban markets: **Denmark**, the **Netherlands**, Switzerland, **New Zealand**, the Great Lakes region of the USA. Intensive, capital-heavy and often co-operative.

## Mixed farming
Crops and livestock on the same farm — much of western Europe and the eastern USA. Animals supply manure; crops supply feed; income is spread across products.

## Mediterranean agriculture
Suited to hot dry summers and mild wet winters: **winter cereals** (wheat, barley); **tree and vine crops** — **olives, grapes, citrus fruits**, figs; sheep and goats; irrigation in summer. Italy, Spain, Greece, California, central Chile.

## Market gardening (horticulture)
Intensive growing of **vegetables, fruits and flowers** near cities, on small plots with heavy use of fertiliser and labour; produce reaches the market fresh. Truck farming does the same at a distance, with fast transport.

## Leading producers
| Product | Leading countries |
|---|---|
| wheat | China, India, Russia, USA |
| rice | China, India, Indonesia, Bangladesh |
| maize | USA, China, Brazil |
| cocoa | Côte d'Ivoire, Ghana |
| coffee | Brazil, Vietnam, Colombia |
| tea | China, India, Kenya, Sri Lanka |
| natural rubber | Thailand, Indonesia |
| wool | Australia, China, New Zealand |

## Problems of world agriculture
drought and floods; pests and diseases; soil erosion and exhaustion; price fluctuations; climate change; unequal access to land, capital and technology.
The **Green Revolution** — high-yielding seeds, fertilisers and irrigation — greatly raised cereal output in Asia.`,
          examples: `**Example 1.** Give two characteristics of plantation agriculture. *Answer:* **Large estates growing a single cash crop** and **heavy capital investment**.

**Example 2.** Where is extensive commercial grain farming practised? *Answer:* In the temperate grasslands — the **prairies, steppes and pampas**.

**Example 3.** Name the chief crop of intensive subsistence farming in monsoon Asia. *Answer:* **Wet rice (paddy)**.`,
        },
        questions: [
          ["E", "The large-scale cultivation of a single cash crop for export is", "plantation agriculture", "shifting cultivation", "mixed farming", "nomadic herding", "Rubber and tea estates are examples."],
          ["E", "The chief crop of intensive subsistence farming in monsoon Asia is", "rice", "wheat", "cocoa", "cotton", "It is grown in flooded paddy fields."],
          ["E", "The rearing of cattle for milk, butter and cheese is", "dairy farming", "ranching", "market gardening", "arable farming", "Denmark and New Zealand are noted for it."],
          ["M", "Extensive commercial grain farming is characteristic of the", "temperate grasslands", "equatorial forests", "hot deserts", "tundra", "The prairies and steppes are the main regions."],
          ["M", "The world's leading producers of cocoa are", "Côte d'Ivoire and Ghana", "Brazil and Colombia", "India and Sri Lanka", "Malaysia and Thailand", "Both are in West Africa."],
          ["M", "Olives, grapes and citrus fruits are typical products of", "Mediterranean agriculture", "tundra farming", "prairie farming", "shifting cultivation", "They withstand hot, dry summers."],
          ["M", "Farming in which crops are grown and animals reared on the same farm is", "mixed farming", "monoculture", "ranching", "plantation farming", "Each enterprise supports the other."],
          ["H", "Compared with intensive rice farming in Asia, extensive wheat farming on the prairies has", "a lower yield per hectare but a higher output per worker", "a higher yield per hectare and more workers", "smaller farms", "no use of machinery", "Large mechanised farms need very few workers."],
          ["H", "A major disadvantage of plantation agriculture to the producing country is", "dependence on one crop whose world price fluctuates", "the low quality of the crop", "the absence of transport", "the small size of the farms", "A fall in price reduces national income sharply."],
          ["H", "Market gardening is located close to large cities mainly because", "its products are perishable and need a ready market", "land is cheapest there", "cities have the best soils", "it needs very large farms", "Vegetables and flowers must reach buyers fresh."],
        ],
      },
      {
        week: 2,
        title: "World manufacturing industries",
        subtopics: ["Factors of industrial location", "Major industrial regions", "Selected industries: iron and steel, textiles and motor vehicles", "Industrialisation in developing countries"],
        objectives: ["Explain the factors that influence industrial location", "Describe the major industrial regions of the world", "Describe the location of selected world industries", "Discuss industrialisation in developing countries"],
        lesson: {
          title: "Industry Around the World",
          summary: "Describe the location and characteristics of the world's major manufacturing regions.",
          minutes: 40,
          notes: `## Factors of industrial location
**raw materials**; **power**; **labour**; **capital**; **market**; **transport**; **water**; land; **government policy**; technology and enterprise. Industries are
- **raw-material oriented** when materials are bulky or lose weight in processing — steel, cement, sugar, paper pulp
- **market oriented** when products are bulky, fragile or perishable — bread, drinks, furniture
- **footloose** when neither dominates — electronics, clothing

## Major industrial regions
### North America
- the **north-eastern USA and the Great Lakes** — Pittsburgh, Chicago, Detroit, Cleveland, New York: iron and steel, motor vehicles, engineering, chemicals. Based on Appalachian coal, Lake Superior iron ore, cheap lake transport and a huge market
- newer centres in California and Texas: aerospace, electronics, oil refining

### Western Europe
- the **Ruhr** (Germany) — coal, steel, chemicals, engineering; served by the Rhine
- the English Midlands and north; north-east France and Belgium; northern Italy (Milan, Turin)
- based on coalfields, ports, skilled labour and dense markets

### Russia and Ukraine
the Moscow region, the Donbas (Donets coal basin), the Urals.

### Eastern Asia
- **Japan** — the Tokyo–Yokohama (Keihin), Osaka–Kobe (Hanshin) and Nagoya regions: steel, ships, vehicles, electronics. Japan has **few raw materials**; it **imports** them and exports high-value goods, relying on skilled labour, advanced technology, good ports and efficient management
- **China** — Shanghai and the Yangtze delta, Guangdong (the Pearl River delta), Beijing–Tianjin, the north-east: now the world's largest manufacturer
- **South Korea**, Taiwan, Singapore; **India** (Mumbai, Kolkata, Jamshedpur)

### Elsewhere
south-east Brazil (São Paulo); South Africa (the Witwatersrand); Egypt (Cairo); Nigeria (Lagos).

## Selected industries
### Iron and steel
Needs **iron ore, coking coal and limestone**, much water and capital. Traditionally sited on coalfields or ore fields, now often at **coastal sites** for imported materials. Leading producers: **China**, India, Japan, the USA, Russia, South Korea.
### Textiles
Cotton, wool, silk and synthetic fibres. Needs fibre, labour, water and power. Leading producers: China, India, Bangladesh, Pakistan, Turkey. It is often the **first industry** of a developing country — it needs modest capital and much labour, and has a ready market.
### Motor vehicles
An **assembly industry**, drawing on steel, rubber, glass and electronics. Leading producers: China, the USA, Japan, Germany, India, South Korea. Sited near markets, skilled labour and suppliers.
### Others
shipbuilding (China, South Korea, Japan); chemicals and petrochemicals; electronics (eastern Asia, California); aircraft (USA, France).

## Characteristics of industrialised countries
large output of manufactured goods; high incomes; most workers in industry and services; advanced technology; dense transport networks; urban populations.

## Industrialisation in developing countries
### Advantages sought
jobs; saving and earning foreign exchange; use of local raw materials; higher incomes; economic independence.
### Obstacles
shortage of capital and skilled labour; poor power supply and transport; small home markets; dependence on imported machinery; competition from established producers; political instability.
### Strategies
**import substitution**; **export-oriented** industries; industrial estates and free-trade zones; foreign investment; technical education; regional markets.
The **newly industrialised countries** — South Korea, Taiwan, Singapore, Malaysia, Brazil, and above all China — grew rapidly by exporting manufactures.

## Problems caused by industry
air and water **pollution**; acid rain; industrial wastes; depletion of resources; overcrowded cities; occupational hazards. Remedies: clean technology, waste treatment, recycling, environmental laws.`,
          examples: `**Example 1.** State three raw materials of the iron and steel industry. *Answer:* **Iron ore, coking coal and limestone**.

**Example 2.** How has Japan become a great industrial nation without many raw materials? *Answer:* By **importing raw materials** and relying on **skilled labour, technology and good ports**.

**Example 3.** Why is the textile industry often the first to develop in a poor country? *Answer:* It needs **little capital**, uses **much labour** and has a **ready market**.`,
        },
        questions: [
          ["E", "The Ruhr is a major industrial region in", "Germany", "Japan", "the USA", "Brazil", "It grew on a large coalfield beside the Rhine."],
          ["E", "The three main raw materials of the iron and steel industry are iron ore, limestone and", "coking coal", "bauxite", "cotton", "crude oil", "Coal is used to smelt the ore."],
          ["E", "The country that is now the world's largest producer of manufactured goods is", "China", "Nigeria", "Egypt", "Argentina", "Its factories export all over the world."],
          ["M", "Japan's industries depend heavily on", "imported raw materials", "large local deposits of iron ore", "abundant petroleum", "unskilled labour only", "The country has few minerals of its own."],
          ["M", "An industry that is not tied to either its raw materials or its market is described as", "footloose", "extractive", "heavy", "primary", "Electronics is an example."],
          ["M", "The Great Lakes industrial region of the USA developed mainly because of", "nearby coal and iron ore and cheap water transport", "tropical climate", "abundant oil palm", "the absence of cities", "Ore from Lake Superior met coal from the Appalachians."],
          ["M", "The textile industry is often the first to be set up in developing countries because it", "needs relatively little capital and much labour", "requires the most advanced technology", "has no market", "uses no raw materials", "Clothing is in demand everywhere."],
          ["H", "Modern iron and steel works are increasingly located on the coast because", "raw materials are imported by sea", "sea water is used to make steel", "coastal land is always cheapest", "ships are made of iron ore", "Bulk carriers bring ore and coal directly to the works."],
          ["H", "A cement works is described as raw-material oriented because", "its raw material is bulky and loses weight in processing", "its product is perishable", "it needs no market", "it uses skilled labour only", "It is cheaper to process limestone where it is quarried."],
          ["H", "The rapid industrial growth of South Korea, Taiwan and Singapore was based mainly on", "manufacturing goods for export", "exporting unprocessed minerals", "subsistence agriculture", "closing their ports to trade", "They are known as newly industrialised countries."],
        ],
      },
      {
        week: 3,
        title: "Africa: relief, drainage, climate and vegetation",
        subtopics: ["Location, size and political divisions", "Relief", "Drainage: rivers and lakes", "Climate and vegetation"],
        objectives: ["Describe the location, size and political divisions of Africa", "Describe the relief of Africa", "Describe the rivers and lakes of Africa", "Describe the climatic and vegetation belts of Africa"],
        lesson: {
          title: "The Physical Setting of Africa",
          summary: "Describe the position, relief, drainage, climate and vegetation of Africa.",
          minutes: 40,
          notes: `## Location and size
Africa is the **second-largest continent** (about 30.3 million km²), lying between about **37°N and 35°S** and **17°W and 51°E**. It is the only continent crossed by the **equator and both tropics**, so most of it is tropical.
### Boundaries
north — the **Mediterranean Sea**; west — the **Atlantic Ocean**; east — the **Indian Ocean** and the **Red Sea**; joined to Asia at the Isthmus of Suez. The largest island is **Madagascar**.
### Political divisions
**54 independent countries**. The largest in area is **Algeria**; the most populous is **Nigeria**. Regional groupings: ECOWAS (west), SADC (south), EAC (east); all belong to the **African Union**, with headquarters in Addis Ababa.

## Relief
Africa is a continent of **plateaux**, higher in the south and east ("High Africa") than in the north and west ("Low Africa"), with narrow coastal plains and few natural harbours.
### Mountains and highlands
- **Atlas Mountains** — young fold mountains in the north-west
- **Ethiopian Highlands** — volcanic; the "roof of Africa"
- **East African highlands** — **Kilimanjaro** (5895 m, the highest peak), Mount Kenya, the Ruwenzori
- **Drakensberg** — in South Africa
- **Cameroon and Adamawa highlands**; the Fouta Djallon; the Jos Plateau
- **Ahaggar and Tibesti** — volcanic massifs in the Sahara
### The Great Rift Valley
A huge trough formed by faulting, running about 6000 km from the Jordan valley through the Red Sea, Ethiopia and East Africa to Mozambique. It has an eastern and a western branch and contains long, narrow, deep lakes.
### Basins
the Congo, Chad, Sudan (Nile), El Djouf (Niger) and Kalahari basins.

## Drainage
| River | Notes |
|---|---|
| **Nile** | the **longest river in Africa** (about 6650 km); the White Nile from Lake Victoria and the Blue Nile from Lake Tana (Ethiopia) join at **Khartoum**; flows north to the Mediterranean through a delta; the Aswan High Dam |
| **Congo** | the **largest volume**; crosses the equator twice; drains to the Atlantic; great hydro-electric potential (Inga) |
| **Niger** | West Africa's chief river; from the Fouta Djallon to the Niger Delta |
| **Zambezi** | flows to the Indian Ocean; the **Victoria Falls**; Kariba and Cahora Bassa dams |
| Orange, Limpopo, Senegal, Volta | others |
African rivers are interrupted by **falls and rapids** where they descend from the plateau, so navigation is limited — but they have great hydro-electric potential.
### Lakes
- **Lake Victoria** — the **largest lake in Africa**; shallow; in a basin between the two rifts
- **rift valley lakes** — **Tanganyika** (the deepest in Africa), **Malawi**, Turkana, Albert
- **Lake Chad** — a shrinking lake of inland drainage
- man-made: Lake Volta, Lake Nasser, Lake Kariba, Kainji Lake

## Climate
Climatic belts are arranged roughly **symmetrically** north and south of the equator:
- **equatorial** — the Congo basin and the Guinea coast
- **tropical continental (savanna)** — broad belts on either side
- **hot desert** — the **Sahara** in the north; the **Kalahari and Namib** in the south
- **Mediterranean** — the north-west coast and the Cape
- **warm temperate eastern margin** — Natal
- **highland climate** — Ethiopia and East Africa
- semi-desert **Sahel** on the southern edge of the Sahara
### Influences
latitude; altitude; ocean currents (cold Canaries and Benguela, warm Mozambique and Guinea); prevailing winds and the movement of the rain belt.

## Vegetation
Following the climate: **tropical rainforest**; **savanna** (the most extensive vegetation); **semi-desert scrub and desert**; **Mediterranean woodland**; **temperate grassland (veld)**; **montane** forest and grassland; **mangrove** on tropical coasts.

## Significance
The plateau character, the deserts and forests, the rapids on rivers and the smooth coastline long hindered movement into the interior; the varied climates allow a wide range of crops; the relief and rivers offer minerals and water power.`,
          examples: `**Example 1.** Name the highest mountain and the longest river in Africa. *Answer:* **Mount Kilimanjaro** and the **River Nile**.

**Example 2.** At which city do the Blue Nile and the White Nile meet? *Answer:* **Khartoum**.

**Example 3.** Why are African rivers of limited use for navigation? *Answer:* They are broken by **falls and rapids** where they descend from the plateau.`,
        },
        questions: [
          ["E", "The longest river in Africa is the", "Nile", "Congo", "Niger", "Zambezi", "It flows north to the Mediterranean Sea."],
          ["E", "The largest lake in Africa is", "Lake Victoria", "Lake Chad", "Lake Tanganyika", "Lake Volta", "It lies between the two branches of the rift valley."],
          ["E", "In size, Africa ranks among the continents as the", "second-largest", "largest", "third-largest", "smallest", "Only Asia is larger."],
          ["M", "The Blue Nile and the White Nile meet at", "Khartoum", "Cairo", "Aswan", "Addis Ababa", "The city is the capital of Sudan."],
          ["M", "The young fold mountains in north-west Africa are the", "Atlas Mountains", "Drakensberg", "Ruwenzori", "Ethiopian Highlands", "They lie in Morocco, Algeria and Tunisia."],
          ["M", "The Victoria Falls are on the River", "Zambezi", "Congo", "Nile", "Orange", "The river flows to the Indian Ocean."],
          ["M", "The most extensive type of vegetation in Africa is", "savanna", "tropical rainforest", "Mediterranean woodland", "mangrove", "It occupies broad belts on both sides of the equator."],
          ["H", "The deepest lake in Africa, lying in the western rift valley, is Lake", "Tanganyika", "Victoria", "Chad", "Nasser", "Rift valley lakes are long, narrow and deep."],
          ["H", "The climatic belts of Africa are arranged roughly symmetrically because", "the equator passes through the middle of the continent", "Africa has no mountains", "the continent is surrounded by cold currents", "it lies wholly in the southern hemisphere", "Similar climates occur at similar latitudes north and south."],
          ["H", "Navigation on most African rivers is restricted because they", "have falls and rapids where they leave the plateau", "are too short", "are always frozen", "have no water in the rainy season", "The same feature gives them great hydro-electric potential."],
        ],
      },
      {
        week: 4,
        title: "Africa: selected economic activities",
        subtopics: ["Irrigation agriculture in the Nile basin", "Plantation agriculture in West and East Africa", "Mining: gold in South Africa and copper in Central Africa", "Lumbering in equatorial Africa"],
        objectives: ["Describe irrigation agriculture in the Nile basin", "Describe plantation agriculture in West and East Africa", "Describe gold mining in South Africa and copper mining in Central Africa", "Describe lumbering in equatorial Africa and its problems"],
        lesson: {
          title: "Case Studies from Africa",
          summary: "Describe selected farming, mining and lumbering activities in Africa.",
          minutes: 40,
          notes: `## Irrigation in the Nile basin
### Egypt
Egypt is almost rainless; its people crowd into the **Nile valley and delta** — "the gift of the Nile".
- formerly **basin irrigation** relied on the annual flood
- **perennial irrigation** now supplies water all year, from barrages and dams, above all the **Aswan High Dam** (completed 1970), which created **Lake Nasser**
- crops: **cotton** (long-staple), rice, maize, wheat, sugar cane, vegetables — two or three crops a year
- **benefits of the High Dam**: year-round irrigation; more farmland; hydro-electric power; flood control; fishing; navigation
- **problems**: silt no longer fertilises the fields, so fertiliser is needed; salinity and waterlogging; erosion of the delta; water-borne diseases; people displaced; evaporation losses

### Sudan: the Gezira scheme
In the plain between the **Blue Nile and the White Nile**, south of Khartoum, watered by gravity from the **Sennar Dam**. **Cotton** is the main cash crop, with sorghum, wheat and groundnuts, grown by tenant farmers in a planned rotation. The Managil extension enlarged it.
Favourable factors: flat land sloping gently; clay soil that holds water; a reliable river; cheap labour.

## Plantation agriculture
### Cocoa in West Africa
**Côte d'Ivoire** and **Ghana** lead the world; also Nigeria and Cameroon. Cocoa needs high temperature, heavy well-distributed rain, deep fertile soil and shade when young. In Ghana it is grown mostly by **small farmers**; the beans are fermented, dried and exported through Tema and Takoradi.
Problems: swollen shoot and black pod diseases; ageing trees; price fluctuations; smuggling.
### Rubber in Liberia; oil palm in Nigeria and Côte d'Ivoire
Large estates and smallholdings.
### Tea and coffee in East Africa
- **tea** — the **Kenya highlands** (Kericho): cool temperatures, heavy rain, acidic well-drained soils on slopes
- **coffee** — Kenya, Uganda, Ethiopia (its original home), Tanzania
- sisal in Tanzania; sugar in Mauritius and Natal; cloves in Zanzibar

## Mining
### Gold in South Africa
Mined on the **Witwatersrand (the Rand)** around **Johannesburg**, and in the Free State. The gold lies in reefs **deep underground** — some mines exceed 3 km — so mining is costly, needing much capital, labour, water and power.
- importance: foreign exchange; employment (including migrant workers from neighbouring countries); growth of Johannesburg and of industry and railways
- problems: great depth, heat and rock bursts; rising costs; falling ore grades; labour disputes
South Africa also mines diamonds (Kimberley), platinum, coal and uranium.

### Copper in Central Africa
The **Copperbelt** of **Zambia** (Kitwe, Ndola, Chingola) and the adjoining **Katanga** region of the **Democratic Republic of Congo** (Lubumbashi, Kolwezi), which also yields cobalt.
- both **open-cast** and underground mining; smelting and refining near the mines
- export by long rail routes to distant ports — Dar es Salaam (the TAZARA railway), Lobito, Durban — because the area is **landlocked**
- problems: dependence on one export; price fluctuations; transport costs; pollution

### Others
petroleum — Nigeria, Algeria, Libya, Angola; bauxite — Guinea; diamonds — Botswana, DRC; phosphates — Morocco; iron ore — Liberia, Mauritania, South Africa.

## Lumbering in equatorial Africa
In the rainforests of **Gabon, the Democratic Republic of Congo, Cameroon, Congo, Ghana, Côte d'Ivoire and Nigeria**.
- trees: **okoumé** (Gabon), mahogany, iroko, obeche, sapele, ebony, teak
- method: selective felling with power saws; logs hauled by tractors and floated down rivers or carried by road and rail to sawmills and ports
- uses: furniture, plywood, construction, export
### Problems
valuable trees are **scattered** among many species; buttress roots; very heavy logs that may not float; dense undergrowth, swamps and poor roads; heavy rain; few pure stands; long distances to ports; shortage of capital and equipment.
### Effects of over-exploitation
deforestation; loss of wildlife; soil erosion; climate change. Remedies: forest reserves, replanting, controlled felling, local processing.

## Other activities
nomadic herding in the Sahel and East Africa; fishing off Morocco, Namibia and Senegal; tourism in Kenya, Tanzania, Egypt and South Africa; the Kariba, Akosombo and Inga power schemes.`,
          examples: `**Example 1.** State two benefits of the Aswan High Dam. *Answer:* **All-year irrigation** and **hydro-electric power**.

**Example 2.** Where is gold mined in South Africa? *Answer:* On the **Witwatersrand**, around **Johannesburg**.

**Example 3.** Give two problems of lumbering in equatorial Africa. *Answer:* **Valuable trees are scattered** and **transport is difficult**.`,
        },
        questions: [
          ["E", "The Aswan High Dam is on the River", "Nile", "Niger", "Congo", "Zambezi", "It created Lake Nasser."],
          ["E", "The main cash crop grown under the Gezira scheme in Sudan is", "cotton", "cocoa", "rubber", "tea", "Water comes from the Sennar Dam."],
          ["E", "Gold mining in South Africa is centred on", "Johannesburg", "Cairo", "Nairobi", "Accra", "The city lies on the Witwatersrand."],
          ["M", "The Copperbelt of Africa lies in", "Zambia and the Democratic Republic of Congo", "Nigeria and Ghana", "Egypt and Sudan", "Kenya and Uganda", "The Katanga region adjoins northern Zambia."],
          ["M", "Tea is grown in the Kenya highlands because the area has", "cool temperatures and heavy rainfall", "a hot desert climate", "permanently flooded land", "saline soils", "Tea needs well-drained, acidic soils on slopes."],
          ["M", "The Gezira scheme lies between the", "Blue Nile and the White Nile", "Niger and the Benue", "Congo and the Ubangi", "Orange and the Vaal", "The plain is south of Khartoum."],
          ["M", "Okoumé is a valuable timber tree exported mainly from", "Gabon", "Egypt", "Botswana", "Morocco", "It is used for plywood."],
          ["H", "A disadvantage of the Aswan High Dam is that", "the fertile silt is trapped behind the dam", "the Nile now floods more often", "it prevents irrigation", "it stopped the generation of electricity", "Farmers must now use fertilisers."],
          ["H", "The export of copper from Zambia is difficult mainly because the country", "is landlocked and far from seaports", "has no railways at all", "lacks copper ore", "is covered by desert", "The ore travels long distances by rail to the coast."],
          ["H", "Gold mining on the Rand is very costly because", "the gold-bearing reefs lie at great depths", "there is no labour", "the gold lies on the surface", "the area has no water or power", "Deep shafts, cooling and pumping are needed."],
        ],
      },
      {
        week: 5,
        title: "Climate change and environmental conservation",
        subtopics: ["Evidence and causes of climate change", "Effects of climate change", "Mitigation and adaptation", "Conservation of resources and sustainable development"],
        objectives: ["Describe the evidence and causes of climate change", "Explain the effects of climate change", "Describe measures of mitigation and adaptation", "Explain conservation and sustainable development"],
        lesson: {
          title: "A Changing Climate",
          summary: "Explain climate change, its effects and how the environment can be conserved.",
          minutes: 40,
          notes: `## Climate change
A **long-term change in the average weather patterns** of the earth or a region. Climate has always varied naturally, but the rapid warming of the last century is caused mainly by human activity.

## Evidence
- rising average **global temperature**
- **melting** glaciers and polar ice caps
- **rising sea level**
- shifting rainfall patterns; more frequent droughts, floods and heat waves
- earlier or later seasons; changes in the ranges of plants and animals
- in Nigeria: the shrinking of **Lake Chad**, the southward advance of the desert, irregular onset of the rains, coastal flooding

## Causes
### Natural
variations in the sun's output; volcanic eruptions; changes in the earth's orbit; ocean circulation (El Niño).
### Human — the enhanced greenhouse effect
**Greenhouse gases** let sunlight in but trap outgoing heat:
- **carbon dioxide** — burning coal, oil and gas; deforestation; bush burning; cement making
- **methane** — rice fields, livestock, landfills, gas leaks
- **nitrous oxide** — fertilisers
- **chlorofluorocarbons (CFCs)** — also destroy the ozone layer
Gas flaring, vehicle exhausts, industry and power stations are major sources.

## Effects
- **rising sea level** — flooding of low-lying coasts and islands (Lagos, the Niger Delta, Bangladesh, the Maldives); coastal erosion; salt water entering farmland
- **agriculture** — changed growing seasons; crop failure; new pests; food insecurity
- **water** — shrinking lakes and rivers; water shortages
- **desertification** and loss of grazing land; conflict over land and water
- **extreme weather** — stronger storms, floods, droughts, heat waves
- **health** — spread of malaria and other diseases; heat stress
- **ecosystems** — loss of species; bleaching of coral reefs
- **migration** of "climate refugees"

## Responses
### Mitigation — reducing the causes
- cutting the use of fossil fuels; **renewable energy** — solar, wind, hydro
- energy efficiency; public transport
- **afforestation** and protection of forests
- ending gas flaring; capturing methane
- international agreements: the **Kyoto Protocol** (1997) and the **Paris Agreement** (2015), which aims to keep warming well below 2 °C
### Adaptation — coping with the effects
- drought-resistant and early-maturing crops; irrigation; water harvesting
- sea walls, drainage and flood defences; planning away from flood plains
- early-warning systems; insurance
- shelter belts; diversifying livelihoods

## Conservation of resources
The **wise use and protection of natural resources** so that they last.
| Resource | Methods |
|---|---|
| **forests** | reserves, afforestation, selective felling, control of bush burning |
| **soil** | terracing, contour ploughing, cover crops, crop rotation |
| **water** | dams, recycling, pollution control, protection of watersheds |
| **wildlife** | game reserves and national parks (Yankari, Serengeti, Kruger), anti-poaching laws |
| **minerals** | recycling, substitutes, efficient use |
| **air** | emission controls, cleaner fuels |

## Sustainable development
Development that **meets the needs of the present without compromising the ability of future generations to meet their own needs**. It balances economic growth, social welfare and environmental protection. The United Nations **Sustainable Development Goals** (2015–2030) include clean energy, climate action and life on land and below water.

## What individuals and communities can do
plant trees; avoid bush burning; reduce, re-use and recycle; save energy and water; dispose of refuse properly; use clean cooking fuels; learn about and spread awareness of the environment.

## Environmental laws and agencies
environmental impact assessment before major projects; national agencies for standards, emergency management and meteorology; the United Nations Environment Programme (UNEP).`,
          examples: `**Example 1.** Name two greenhouse gases. *Answer:* **Carbon dioxide** and **methane**.

**Example 2.** Distinguish mitigation from adaptation. *Answer:* **Mitigation** reduces the causes of climate change; **adaptation** adjusts to its effects.

**Example 3.** Define sustainable development. *Answer:* Development that **meets present needs without endangering the needs of future generations**.`,
        },
        questions: [
          ["E", "A long-term change in the average weather patterns of the earth is called", "climate change", "weather forecasting", "a season", "a tide", "The recent warming is largely due to human activity."],
          ["E", "The main greenhouse gas released by burning coal, oil and gas is", "carbon dioxide", "oxygen", "nitrogen", "argon", "It traps heat in the atmosphere."],
          ["E", "The wise use and protection of natural resources is", "conservation", "exploitation", "pollution", "depletion", "It keeps resources available for the future."],
          ["M", "One effect of global warming on coastal areas is", "a rise in sea level", "a fall in sea level", "the formation of new glaciers", "lower temperatures", "Melting ice and expanding sea water raise the level."],
          ["M", "Planting trees to absorb carbon dioxide is an example of", "mitigation", "adaptation", "pollution", "desertification", "It reduces a cause of climate change."],
          ["M", "The international agreement of 2015 that aims to limit global warming is the", "Paris Agreement", "Treaty of Lagos", "Berlin Conference", "Lomé Convention", "It followed the earlier Kyoto Protocol."],
          ["M", "Which of the following is a renewable source of energy?", "solar energy", "coal", "petroleum", "natural gas", "It does not release greenhouse gases in use."],
          ["H", "Building sea walls and growing drought-resistant crops are examples of", "adaptation to climate change", "causes of climate change", "greenhouse gases", "deforestation", "They help people cope with its effects."],
          ["H", "Development that meets present needs without compromising the needs of future generations is", "sustainable development", "industrialisation", "urbanisation", "globalisation", "It balances growth with care for the environment."],
          ["H", "Livestock rearing and rice fields contribute to climate change mainly by releasing", "methane", "oxygen", "chlorine", "ozone", "It is a powerful greenhouse gas."],
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
        title: "Applications of geographic information systems",
        subtopics: ["GIS analysis: query, buffering and overlay", "Applications in planning, agriculture and transport", "Applications in environment, security and population", "Problems of GIS implementation in Nigeria"],
        objectives: ["Describe the basic analytical functions of GIS", "Explain the applications of GIS in planning, agriculture and transport", "Explain the applications of GIS in environment, security and population studies", "Discuss the problems of implementing GIS in Nigeria and their solutions"],
        lesson: {
          title: "GIS at Work",
          summary: "Describe how GIS is used to solve problems and the challenges of using it in Nigeria.",
          minutes: 40,
          notes: `## What GIS does
A GIS answers questions of
- **location** — what is at this place?
- **condition** — where is such-and-such found?
- **trend** — what has changed over time?
- **pattern** — how are things distributed?
- **modelling** — what will happen if …?

## Analytical functions
- **query (search)** — selecting features that meet a condition: all schools with more than 500 students; all land above 600 m
- **measurement** — distances, perimeters and areas
- **buffering** — drawing a zone of a given width round a feature: all houses within 100 m of a river (at risk of flooding); settlements within 5 km of a hospital
- **overlay** — combining two or more layers to find where conditions coincide: suitable soil **and** gentle slope **and** nearness to a road
- **network analysis** — the shortest or fastest route between places; the area a facility can serve
- **terrain analysis** — slope, aspect and visibility from a **digital elevation model**
- **change detection** — comparing images of different dates

## Applications
### Urban and regional planning
land-use maps; zoning; siting of schools, markets, hospitals and waste dumps; monitoring urban growth and slums; property records.
### Land administration
**cadastral** mapping of plots; land titles and certificates; property taxation; settling boundary disputes.
### Agriculture
mapping soils and crop suitability; estimating yields; planning irrigation; monitoring drought and pests; **precision farming**.
### Transport
planning new roads and railways; route finding and navigation; tracking vehicles and deliveries; managing traffic and accident black spots.
### Environment
monitoring **deforestation**, **desertification**, erosion, oil spills and flooding; managing forest reserves, wetlands and parks; environmental impact assessment.
### Disaster and emergency management
mapping flood-prone areas; planning evacuation routes; directing relief; tracking outbreaks of disease.
### Health
mapping the spread of malaria, cholera and other diseases; locating health facilities where they are most needed.
### Population and elections
drawing **census enumeration areas**; mapping population density; delimiting constituencies and siting polling units.
### Security and defence
crime mapping ("hot spots"); border surveillance; military planning.
### Utilities
managing electricity, water, gas and telecommunication networks; locating faults.
### Mineral and water exploration
combining geological, satellite and survey data to locate deposits and ground water.
### Business
choosing sites for banks, shops and filling stations; planning deliveries.

## Problems of implementing GIS in Nigeria
- **high cost** of hardware, software and satellite data
- **shortage of trained personnel**
- **inadequate and outdated data**; old base maps; data kept in incompatible formats
- **unreliable electricity** and internet access
- poor **funding** and maintenance
- low **awareness** among decision makers
- reluctance of agencies to **share data**; lack of common standards
- weak policy and institutional support

## Solutions
- training in universities, polytechnics and on the job
- adequate funding and public–private partnership
- steady power supply and better internet
- updating national maps; a national **spatial data infrastructure** so that agencies share data
- use of **free and open-source** software
- public enlightenment; clear policies
Nigerian bodies concerned include the Office of the Surveyor-General of the Federation, the National Space Research and Development Agency and the National Population Commission.

## The future
GIS is now built into mobile phones, web maps and vehicle navigation, and is combined with GPS, drones and satellite images to give up-to-date information for everyday decisions.`,
          examples: `**Example 1.** What is buffering in GIS? *Answer:* Creating a **zone of a set distance round a feature**.

**Example 2.** Give two uses of GIS in disaster management. *Answer:* **Mapping flood-prone areas** and **planning evacuation routes**.

**Example 3.** State two problems of GIS implementation in Nigeria. *Answer:* **High cost** and **shortage of trained personnel**.`,
        },
        questions: [
          ["E", "In GIS, selecting all features that meet a stated condition is called", "a query", "printing", "scanning", "ranging", "For example, all towns with over 50 000 people."],
          ["E", "The use of GIS to find the shortest route between two places is an application in", "transport", "soil science", "geology", "climatology", "It is known as network analysis."],
          ["E", "A problem of using GIS in Nigeria is", "the high cost of equipment and software", "too many trained experts", "an excess of electricity", "too much up-to-date data", "Funding is often inadequate."],
          ["M", "Creating a zone of a fixed distance round a map feature in a GIS is known as", "buffering", "overlay", "digitising", "geo-referencing", "It can show all houses within 100 m of a river."],
          ["M", "Combining layers showing soil, slope and roads to find the best site for a farm is an example of", "overlay analysis", "buffering", "scanning", "chain surveying", "It finds where several conditions coincide."],
          ["M", "The mapping of individual plots of land for ownership records is called", "cadastral mapping", "relief mapping", "weather mapping", "choropleth mapping", "It supports land titles and taxation."],
          ["M", "In census work, GIS is used mainly to", "draw enumeration areas and map population density", "count people one by one", "print census forms only", "measure rainfall", "It helps in planning and analysing the count."],
          ["H", "Comparing satellite images of a forest taken in different years to measure its loss is an example of", "change detection", "buffering", "cadastral survey", "ground levelling", "It reveals what has changed over time."],
          ["H", "A national arrangement that allows agencies to share geographic data to common standards is a", "spatial data infrastructure", "weather station", "trade union", "census board", "It reduces duplication and incompatible formats."],
          ["H", "The use of free and open-source software is suggested for GIS in Nigeria mainly to", "reduce the high cost of software", "increase electricity supply", "replace trained personnel", "avoid the use of data", "Commercial packages are expensive."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: physical geography",
        subtopics: ["The earth, rocks and landforms", "Agents of denudation", "Weather, climate and vegetation", "Soils, oceans and environmental issues"],
        objectives: ["Recall facts about the earth, rocks and major landforms", "Summarise the work of rivers, wind, waves and internal forces", "Summarise weather, climate and vegetation", "Summarise soils, oceans and environmental problems"],
        lesson: {
          title: "Revision of Physical Geography",
          summary: "Revise the main ideas of physical geography for the final examinations.",
          minutes: 40,
          notes: `## 1. The earth
- shape: oblate spheroid; proofs: circumnavigation, ships on the horizon, lunar eclipse, photographs from space
- **rotation** (24 hours, west to east): day and night, time differences, deflection of winds
- **revolution** (365¼ days) with the tilted axis: seasons, varying day length
- sun overhead: equator 21 March and 23 September; Tropic of Cancer 21 June; Tropic of Capricorn 22 December
- **15° of longitude = 1 hour**; east ahead, west behind; **1° of latitude ≈ 111 km**
- International Date Line: gain a day going east, lose a day going west

## 2. Rocks and structure
- crust (sial, sima), mantle, core (nife)
- **igneous** (granite, basalt) — crystalline, no fossils; **sedimentary** (sandstone, limestone, coal) — layered, with fossils; **metamorphic** (marble, slate, quartzite, gneiss)
- mountains: fold (Alps, Himalayas), block (Vosges), volcanic (Kilimanjaro), residual
- plateaux: tectonic, lava, dissected; plains: structural, depositional, erosional

## 3. Internal forces
- folding (anticline, syncline); faulting (horst, rift valley)
- earthquakes: focus, epicentre, seismograph, Richter scale
- intrusive features: batholith, laccolith, sill, dyke; extrusive: cones, crater, caldera, lava plateau

## 4. External forces
- **weathering**: physical (exfoliation, frost action), chemical (carbonation, oxidation, hydrolysis), biological
- **mass movement**: soil creep, landslide
- **rivers**: upper course — V-valley, waterfall, gorge; middle — meanders; lower — flood plain, levees, ox-bow lake, delta
- **wind**: deflation, abrasion; rock pedestal, zeugen, yardang, barchan, seif, loess
- **waves**: cliff, cave, arch, stack; beach, spit, bar, lagoon; ria, fiord; coral reefs
- **limestone (karst)**: sinkholes, caves, stalactites, stalagmites, dry valleys

## 5. Weather and climate
- instruments: thermometer, rain gauge, barometer, hygrometer, anemometer, wind vane
- isotherms, isohyets, isobars
- rainfall: convectional, relief, cyclonic
- factors: latitude, altitude (6.5 °C per 1000 m), distance from the sea, currents, winds
- climates: equatorial; tropical continental; monsoon; hot desert; Mediterranean; temperate; tundra

## 6. Vegetation and soils
- rainforest, savanna, desert, Mediterranean, temperate grassland (prairies, steppes, pampas, veld), coniferous forest, tundra
- soil profile: A, B, C horizons; sand, clay, loam; laterite, chernozem, podzol
- erosion: sheet, rill, gully; conservation: terracing, contour ploughing, cover crops

## 7. Oceans
- shelf, slope, abyssal plain, ridge, trench; salinity about 35‰
- warm currents: Gulf Stream, North Atlantic Drift, Guinea, Mozambique; cold: Canaries, Benguela, Peru, Labrador

## 8. Environment
- hazards: drought, desertification, flooding, erosion, pollution, deforestation
- greenhouse effect and climate change; conservation and sustainable development

## Answering physical geography questions
Use **well-labelled diagrams**; explain processes **in sequence**; name **specific examples**; distinguish clearly between erosional and depositional features; show working in calculations of time, distance and temperature.`,
          examples: `**Example 1.** When it is 6.00 a.m. at 30°E, what is the local time at 15°W? *Solution:* 45° west is 3 hours behind: **3.00 a.m.**

**Example 2.** Name three depositional features of a river. *Answer:* **Flood plain, levees and delta**.

**Example 3.** A place at sea level has a temperature of 28 °C. Estimate the temperature at 3000 m. *Solution:* 28 − 19.5 = **8.5 °C**.`,
        },
        questions: [
          ["E", "The sun is overhead at the Tropic of Capricorn on", "22 December", "21 June", "21 March", "23 September", "It is the winter solstice in the northern hemisphere."],
          ["E", "Granite and basalt are examples of", "igneous rocks", "sedimentary rocks", "metamorphic rocks", "organic rocks", "They form from cooled magma."],
          ["E", "The instrument used to measure wind speed is the", "anemometer", "barometer", "hygrometer", "rain gauge", "A wind vane shows direction only."],
          ["M", "When it is 6.00 a.m. at longitude 30°E, the local time at longitude 15°W is", "3.00 a.m.", "9.00 a.m.", "4.00 a.m.", "8.00 a.m.", "The places are 45° apart, and the west is behind."],
          ["M", "Stalactites and stalagmites are features of", "limestone regions", "hot deserts", "river deltas", "glaciated valleys", "They form in caves from dripping lime-rich water."],
          ["M", "The wearing away of rock surfaces by wind-borne sand is called", "abrasion", "deflation", "carbonation", "exfoliation", "It produces rock pedestals and yardangs."],
          ["M", "The climate characterised by a wet summer and a dry winter with tall grass and scattered trees is the", "tropical continental climate", "equatorial climate", "Mediterranean climate", "tundra climate", "It is also called the Sudan type."],
          ["H", "A place at sea level has a temperature of 28 °C. Using the normal lapse rate, the temperature at a height of 3000 m nearby is about", "8.5 °C", "19.5 °C", "47.5 °C", "25 °C", "The fall is 6.5 °C for each 1000 m."],
          ["H", "A river delta and a sand spit are similar in that both are", "features of deposition", "features of erosion", "formed by wind", "found only in deserts", "Each is built from accumulated sediment."],
          ["H", "The local time at a place is 4 hours ahead of Greenwich Mean Time. Its longitude is", "60°E", "60°W", "40°E", "15°E", "4 × 15°, and east because it is ahead."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: map work and practical geography",
        subtopics: ["Scale, distance, area and bearing", "Relief, gradient and cross-sections", "Map interpretation, enlargement and reduction", "Statistical methods, surveying and GIS"],
        objectives: ["Solve problems on scale, distance, area and bearing", "Interpret contours and calculate gradient and vertical exaggeration", "Interpret maps and change their scale", "Recall statistical methods, surveying and GIS"],
        lesson: {
          title: "Revision of Practical Geography",
          summary: "Revise map reading, statistical methods, surveying and GIS for the final examinations.",
          minutes: 40,
          notes: `## 1. Scale
- statement, linear scale, representative fraction
- 1 km = 100 000 cm; 1 : 50 000 is 2 cm to 1 km; 1 : 25 000 is 4 cm to 1 km; 1 : 100 000 is 1 cm to 1 km
- large scale = small denominator = more detail

## 2. Distance and area
- measure with ruler, thread or dividers; convert with the scale
- area: convert each dimension to kilometres, then multiply; or count grid squares

## 3. Direction and bearing
- bearing is measured **clockwise from north**, in three figures, **at the point you are measuring from**
- back bearing = forward bearing ± 180°
- grid references: easting first, then northing

## 4. Relief
- contours close — steep; far apart — gentle
- V pointing uphill — valley; V pointing downhill — spur
- conical hill, ridge, plateau, col, pass, escarpment, knoll
- **gradient = vertical interval ÷ horizontal distance** (same units), written "1 in n"
- **vertical exaggeration = horizontal scale denominator ÷ vertical scale denominator**
- cross-section: mark contours on a paper edge, plot heights, join smoothly, label
- **intervisibility**: no higher ground between the two points on the section

## 5. Interpretation
- relief: highest and lowest points; relief regions; nature of slopes
- drainage: direction of flow, pattern, density
- settlement: type, pattern, site and functions
- communication: types and their relation to relief
- land use from symbols
- always quote evidence from the map

## 6. Enlargement and reduction
- enlarge by n: divide the scale denominator by n
- reduce by n: multiply the denominator by n
- sides change by n; **area by n²**

## 7. Statistical methods
- bar graph — comparison; line graph — change over time
- pie chart: angle = value ÷ total × 360°
- dot map — distribution; choropleth — density shading; isopleth — lines of equal value; flow map — movement
- mean, median, mode, range

## 8. Climate data
- mean annual temperature = sum of monthly means ÷ 12
- annual range = hottest − coldest month
- total annual rainfall = sum of monthly figures
- hottest months in June–August: northern hemisphere; December–February: southern
- identify the climate from the pattern of temperature and rainfall

## 9. Surveying
- chain survey: chain, tape, ranging poles, arrows, cross staff, field book; base line, offsets, tie and check lines; book from the bottom upwards
- compass traverse: open and closed; forward and back bearings differ by 180°
- sources of error and precautions

## 10. GIS and remote sensing
- components: hardware, software, data, people, procedures
- spatial and attribute data; vector (point, line, polygon) and raster (pixels)
- sources: maps, GPS, satellite images, aerial photographs, surveys
- functions: capture, storage, query, analysis (buffering, overlay), display
- uses and problems

## Practical tips
Read the scale and contour interval before anything else; use a sharp pencil; draw frames, titles, keys and north arrows on sketches; show all working; state units; keep to the time allowed.`,
          examples: `**Example 1.** On a map of scale 1 : 25 000, two villages are 14 cm apart. Find the ground distance. *Solution:* 4 cm = 1 km, so 14 ÷ 4 = **3.5 km**.

**Example 2.** A hill top at 500 m and a river at 200 m are 6 km apart. Find the gradient. *Solution:* 300 ÷ 6000 = **1 in 20**.

**Example 3.** Monthly temperatures range from 24 °C in August to 31 °C in March. Find the annual range. *Solution:* 31 − 24 = **7 °C**.`,
        },
        questions: [
          ["E", "On a map of scale 1 : 100 000, 1 cm represents", "1 km", "10 km", "100 km", "0.1 km", "100 000 cm make 1 km."],
          ["E", "Bearings on a map are measured", "clockwise from north", "anticlockwise from north", "clockwise from east", "from south in either direction", "They are written with three figures."],
          ["E", "Widely spaced contours on a map indicate", "a gentle slope", "a steep slope", "a cliff", "a waterfall", "Height changes slowly over the distance."],
          ["M", "On a map of scale 1 : 25 000, two villages are 14 cm apart. The actual distance between them is", "3.5 km", "14 km", "7 km", "35 km", "4 cm represent 1 km."],
          ["M", "A hill top at 500 m and a river at 200 m are 6 km apart. The average gradient between them is", "1 in 20", "1 in 12", "1 in 30", "1 in 50", "300 m in 6000 m."],
          ["M", "The bearing of P from Q is 310°. The bearing of Q from P is", "130°", "050°", "220°", "310°", "Subtract 180° from the forward bearing."],
          ["M", "Monthly mean temperatures at a station range from 24 °C in August to 31 °C in March. The annual range of temperature is", "7 °C", "27.5 °C", "55 °C", "24 °C", "Hottest month minus coldest month."],
          ["H", "A square plot of side 4 cm on a map of scale 1 : 50 000 has an actual area of", "4 km²", "2 km²", "16 km²", "8 km²", "Each side is 2 km on the ground."],
          ["H", "A section is drawn with a horizontal scale of 1 : 100 000 and a vertical scale of 1 cm to 250 m. The vertical exaggeration is", "4 times", "40 times", "2.5 times", "25 times", "100 000 ÷ 25 000."],
          ["H", "A station records its highest temperatures in January and its lowest in July, with rain mainly in winter. It most probably has a", "Mediterranean climate in the southern hemisphere", "Mediterranean climate in the northern hemisphere", "tropical continental climate in the northern hemisphere", "tundra climate", "Seasons are reversed south of the equator, and winter rain is typical of the Mediterranean type."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: human and regional geography",
        subtopics: ["Population and settlement", "Agriculture, mining and industry", "Transport and trade", "Nigeria and Africa"],
        objectives: ["Recall key ideas about population and settlement", "Summarise agriculture, mining and industry", "Summarise transport and trade", "Recall regional facts about Nigeria and Africa"],
        lesson: {
          title: "Revision of Human and Regional Geography",
          summary: "Revise human geography and the regional geography of Nigeria and Africa.",
          minutes: 40,
          notes: `## 1. Population
- density = population ÷ area; natural increase = birth rate − death rate
- dense: East and South Asia, western Europe, north-eastern North America; sparse: deserts, cold lands, high mountains, dense forests
- factors: climate, relief, soil, water, minerals, industry, transport, history
- overpopulation, underpopulation, optimum population
- migration: push and pull factors; rural–urban migration and its effects
- population pyramid: broad base — youthful; narrow base — ageing
- Nigeria: about 140 million in 2006, now over 200 million; dense in Lagos, the south-east and Kano; sparse in the Middle Belt and Chad basin

## 2. Settlement
- rural and urban; hamlet → village → town → city → conurbation
- patterns: nucleated, dispersed, linear
- site factors: water, relief, defence, routes, minerals
- functions: administrative, commercial, industrial, port, mining, educational
- urban problems: congestion, slums, unemployment, pollution

## 3. Agriculture
- subsistence and commercial; shifting cultivation, bush fallowing, plantation, mixed farming, pastoral nomadism, irrigation
- Nigeria: roots and tree crops in the south; grains, groundnuts, cotton and cattle in the north
- world: intensive rice (monsoon Asia); extensive wheat (prairies, steppes); ranching (pampas, Australia); dairying (Denmark, New Zealand); Mediterranean farming
- problems: land tenure, crude tools, credit, storage, pests, transport

## 4. Mining and power
- Nigeria: petroleum and gas (Niger Delta); coal (Enugu); tin and columbite (Jos); limestone (Ewekoro, Obajana); iron ore (Itakpe)
- power: Kainji, Jebba, Shiroro (hydro); Egbin, Afam (thermal)
- Africa: gold (Rand), copper (Zambia, DRC), oil (Nigeria, Algeria, Libya, Angola)
- problems: pollution, dependence on one export, exhaustion

## 5. Manufacturing
- primary, secondary, tertiary; heavy, light, cottage
- location factors: raw materials, power, market, labour, transport, capital, government
- Nigeria: Lagos–Ikeja, Kano–Kaduna, Port Harcourt–Aba, Warri–Benin
- world: north-eastern USA, the Ruhr, Japan, eastern China
- problems in Nigeria: power, capital, imported inputs, skills

## 6. Transport and trade
- road (flexible), rail (bulky goods), water (cheapest, slowest), air (fastest, costliest), pipeline
- Suez Canal (Mediterranean–Red Sea); Panama Canal (Atlantic–Pacific); North Atlantic route
- Nigeria's ports: Lagos, Port Harcourt, Onne, Warri, Calabar
- trade: imports, exports, balance of trade; Nigeria exports mainly crude oil
- **ECOWAS** — 1975, Lagos treaty; headquarters Abuja; free movement and trade

## 7. Nigeria
- 4°N–14°N, 3°E–15°E; about 923 768 km²; 36 states and the FCT
- neighbours: Benin, Niger, Chad, Cameroon
- highlands: Jos Plateau, eastern highlands (Chappal Waddi), western uplands, Udi Plateau
- rivers: Niger and Benue (confluence at Lokoja); Lake Chad
- air masses: tropical maritime (rain) and tropical continental (harmattan)
- vegetation: mangrove → rainforest → Guinea → Sudan → Sahel savanna

## 8. Africa
- second-largest continent; 54 countries
- Kilimanjaro; Nile, Congo, Niger, Zambezi; Lakes Victoria and Tanganyika; the Great Rift Valley
- Sahara, Kalahari and Namib deserts
- Aswan High Dam and the Gezira scheme; cocoa in Ghana and Côte d'Ivoire; tea in Kenya; lumbering in Gabon

## Essay technique
Plan before writing; define key terms; give **named examples and locations**; use sketch maps; balance advantages with problems and solutions; write in clear points.`,
          examples: `**Example 1.** Give three factors that favour dense population. *Answer:* **Fertile soil, adequate rainfall and industrial employment**.

**Example 2.** Name the vegetation belts of Nigeria from south to north. *Answer:* **Mangrove swamp, rainforest, Guinea savanna, Sudan savanna, Sahel savanna**.

**Example 3.** State two aims of ECOWAS. *Answer:* **Free trade among members** and **free movement of people**.`,
        },
        questions: [
          ["E", "The natural increase of a population is the difference between the", "birth rate and the death rate", "numbers of males and females", "numbers of immigrants and emigrants", "urban and rural populations", "Migration is not included."],
          ["E", "Kano and Onitsha are best known as", "commercial centres", "seaports", "mining towns", "hydro-electric stations", "Both have very large markets."],
          ["E", "The harmattan is associated with the", "tropical continental air mass", "tropical maritime air mass", "south-west monsoon", "sea breeze", "It blows from the Sahara in the dry season."],
          ["M", "Which pair of regions is densely populated?", "the Ganges plain and western Europe", "the Sahara and the Amazon basin", "Siberia and the Kalahari", "Greenland and central Australia", "Both have fertile land or industry and a favourable climate."],
          ["M", "Groundnuts and cotton are important cash crops of", "northern Nigeria", "the Niger Delta", "the rainforest belt", "the mangrove swamps", "They suit lighter soils and a marked dry season."],
          ["M", "The Egbin power station near Lagos generates electricity from", "natural gas", "falling water", "coal", "wind", "It is a thermal station."],
          ["M", "The vegetation belt lying immediately north of the rainforest in Nigeria is the", "Guinea savanna", "Sahel savanna", "mangrove swamp", "Sudan savanna", "The belts follow the decreasing rainfall."],
          ["H", "The sparse population of Nigeria's Middle Belt is explained partly by", "the tsetse fly and the effects of past slave raiding", "its nearness to the sea", "its very heavy industries", "its lack of any rivers", "The area was long unhealthy and insecure."],
          ["H", "Lagos became Nigeria's leading industrial centre mainly because of its", "port, large market, capital and labour", "tin and columbite deposits", "cool plateau climate", "central position in the country", "Its early start as capital and port also helped."],
          ["H", "A feature common to cocoa growing in Ghana and gold mining in South Africa is that both", "earn foreign exchange through exports", "are carried out underground", "depend on irrigation", "take place in deserts", "Each is a major export activity of its country."],
        ],
      },
    ],
  },
];
