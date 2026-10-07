import type { TermPlan } from "../types";

/** SS1 Geography — original Precious PS content following the national senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The earth and the solar system",
        subtopics: ["Meaning and branches of geography", "The solar system", "Shape and size of the earth", "Evidence that the earth is spherical"],
        objectives: ["Define geography and name its branches", "Describe the solar system and the position of the earth in it", "State the shape and size of the earth", "Give evidence that the earth is spherical"],
        lesson: {
          title: "Our Planet in Space",
          summary: "Describe the solar system and the shape and size of the earth.",
          minutes: 40,
          notes: `## Geography
**Geography** is the study of the **earth as the home of man** — its physical features, its people and the relationships between them. The word comes from the Greek *geo* (earth) and *graphein* (to describe).
### Branches
- **physical geography** — landforms, climate, soils, vegetation, oceans
- **human geography** — population, settlement, agriculture, industry, transport, trade
- **regional geography** — the study of particular areas (Nigeria, Africa)
- **practical geography** — map reading, surveying, statistics, GIS
### Value
It helps us understand our environment, use resources wisely, plan towns and transport, and prepares for careers in surveying, planning, meteorology, tourism and environmental management.

## The solar system
The **sun** and all the bodies that revolve round it: planets, moons (satellites), asteroids, comets and meteors. The sun is a **star** — a ball of hot gases giving out its own light and heat; it holds the planets in their **orbits** by gravity.

### The planets (in order from the sun)
| Planet | Note |
|---|---|
| **Mercury** | nearest to the sun; smallest; fastest |
| **Venus** | hottest; brightest; the earth's "twin" in size |
| **Earth** | the only planet known to support life |
| **Mars** | the "red planet" |
| **Jupiter** | the largest |
| **Saturn** | has conspicuous rings |
| **Uranus** | spins on its side |
| **Neptune** | farthest from the sun |
Planets give out no light of their own; they **reflect** sunlight. Pluto is now classed as a dwarf planet.

### Why the earth supports life
suitable distance from the sun (moderate temperature); an atmosphere containing oxygen; liquid water; the ozone layer shielding harmful rays.

### The moon
The earth's only natural satellite. It revolves round the earth in about 27⅓ days and shines by reflected sunlight. Its changing appearance gives the **phases of the moon**; with the sun it causes the **tides**.

## Shape of the earth
The earth is a **sphere slightly flattened at the poles and bulging at the equator** — an **oblate spheroid (geoid)**.

## Size of the earth
| Measurement | Approximate value |
|---|---|
| equatorial circumference | 40 075 km |
| polar circumference | 40 008 km |
| equatorial diameter | 12 756 km |
| polar diameter | 12 714 km |
| surface area | 510 million km² |
About **71%** of the surface is water and **29%** land.

## Evidence that the earth is spherical
1. **circumnavigation** — travelling continuously in one direction brings one back to the starting point (Magellan's expedition, 1519–1522)
2. **the circular horizon**, which widens with height
3. **a ship approaching** from the horizon shows its mast first, then the hull
4. **sunrise and sunset** occur at different times in different places — the east sees the sun first
5. **lunar eclipse** — the earth's shadow on the moon is always round
6. **photographs from space**
7. the other planets and the moon are seen to be spherical
8. the **Bedford Level experiment** — the middle of three poles of equal height set along a canal stood above the line of sight between the other two

## Movements of the earth
The earth **rotates** on its axis once in 24 hours and **revolves** round the sun once in 365¼ days.`,
          examples: `**Example 1.** Name the planet nearest to the sun and the largest planet. *Answer:* **Mercury** and **Jupiter**.

**Example 2.** Give two proofs that the earth is spherical. *Answer:* **Circumnavigation** and the **round shadow of the earth during a lunar eclipse**.

**Example 3.** What percentage of the earth's surface is covered by water? *Answer:* About **71%**.`,
        },
        questions: [
          ["E", "The planet nearest to the sun is", "Mercury", "Venus", "Earth", "Mars", "It is also the smallest planet."],
          ["E", "The largest planet in the solar system is", "Jupiter", "Saturn", "Neptune", "Earth", "It is the fifth planet from the sun."],
          ["E", "The shape of the earth is best described as", "an oblate spheroid", "a perfect sphere", "a flat disc", "a cube", "It is slightly flattened at the poles."],
          ["M", "The earth is the third planet from the sun, lying between", "Venus and Mars", "Mercury and Venus", "Mars and Jupiter", "Jupiter and Saturn", "The order begins Mercury, Venus, Earth, Mars."],
          ["M", "The approximate equatorial circumference of the earth is", "40 075 km", "12 756 km", "6400 km", "510 000 km", "The diameter is about 12 756 km."],
          ["M", "The branch of geography that deals with population, settlement and transport is", "human geography", "physical geography", "practical geography", "climatology", "It studies man's activities."],
          ["M", "The moon shines at night because it", "reflects light from the sun", "produces its own light", "is a small star", "burns gases", "It has no light of its own."],
          ["H", "During an eclipse of the moon, the shadow of the earth on the moon is always round. This shows that the earth is", "spherical", "flat", "rotating", "tilted", "Only a sphere casts a circular shadow in every position."],
          ["H", "When a ship approaches from the horizon, an observer on the shore first sees its", "mast, then the hull", "hull, then the mast", "whole body at once", "anchor", "The curved surface hides the lower part at first."],
          ["H", "The earth is able to support life mainly because it has", "moderate temperatures, water and an atmosphere with oxygen", "the largest size of all planets", "rings like Saturn", "no moon", "Its distance from the sun is suitable."],
        ],
      },
      {
        week: 2,
        title: "Rotation and revolution of the earth",
        subtopics: ["Rotation of the earth and its effects", "Revolution of the earth", "The seasons, solstices and equinoxes", "Eclipses and dawn and twilight"],
        objectives: ["Describe the rotation of the earth and state its effects", "Describe the revolution of the earth", "Explain the seasons, solstices and equinoxes", "Explain eclipses, dawn and twilight"],
        lesson: {
          title: "The Earth's Movements",
          summary: "Explain the effects of the earth's rotation and revolution.",
          minutes: 40,
          notes: `## Rotation
The earth **spins on its axis** — an imaginary line through the North and South Poles — from **west to east**, once every **24 hours**. The axis is **tilted at 66½° to the plane of the orbit** (23½° from the vertical).

### Effects of rotation
1. **day and night** — the half facing the sun has day; the other half has night
2. **differences in time** between places on different longitudes — 15° for every hour
3. the **apparent movement of the sun** from east to west; sunrise and sunset
4. **deflection of winds and ocean currents** — to the right in the northern hemisphere and to the left in the southern (the Coriolis effect)
5. the daily rise and fall of the **tides**

## Revolution
The earth travels round the sun in an **elliptical orbit** once in **365¼ days** — a year. Every fourth year is a **leap year** of 366 days. The earth is nearest the sun (perihelion) in early January and farthest (aphelion) in early July.

### Effects of revolution (with the tilt of the axis)
1. the **seasons**
2. **varying lengths of day and night** through the year
3. changes in the **altitude of the midday sun**

## Solstices and equinoxes
| Date | Sun overhead at | Name | Northern hemisphere |
|---|---|---|---|
| **21 March** | the equator | spring (vernal) equinox | day = night everywhere |
| **21 June** | the Tropic of Cancer (23½°N) | summer solstice | longest day |
| **23 September** | the equator | autumnal equinox | day = night everywhere |
| **22 December** | the Tropic of Capricorn (23½°S) | winter solstice | shortest day |
- at an **equinox** day and night are **equal (12 hours each)** all over the world
- on **21 June** the Arctic Circle (66½°N) has 24 hours of daylight — the "**midnight sun**"; the Antarctic Circle has 24 hours of darkness. The reverse occurs on 22 December
- at the **equator** day and night are nearly equal throughout the year
The seasons are **reversed** in the two hemispheres: when it is summer in the north it is winter in the south.

### The four seasons
spring, summer, autumn and winter occur in temperate latitudes. In the tropics, temperature varies little, and the seasons are **wet and dry**.

## Dawn and twilight
**Dawn** is the brief period of diffused light before sunrise; **twilight** follows sunset. They are **short at the equator**, where the sun rises and sets almost vertically, and **long in high latitudes**, where its path is oblique.

## Eclipses
- **eclipse of the sun (solar eclipse)** — the **moon** comes between the sun and the earth and its shadow falls on the earth; it occurs at **new moon**
- **eclipse of the moon (lunar eclipse)** — the **earth** comes between the sun and the moon and its shadow falls on the moon; it occurs at **full moon**
The darkest part of a shadow is the **umbra**; the lighter part is the **penumbra**.

## Altitude of the midday sun
At a place of latitude $L$ when the sun is overhead at latitude $D$: altitude = 90° − (difference in latitude between the place and where the sun is overhead).
*Example:* at latitude 10°N on 21 March the sun is overhead at the equator, so the altitude is 90° − 10° = 80°.`,
          examples: `**Example 1.** In which direction does the earth rotate? *Answer:* From **west to east**.

**Example 2.** On which date is the sun overhead at the Tropic of Cancer? *Answer:* **21 June**.

**Example 3.** Find the noon altitude of the sun at 30°N on 23 September. *Solution:* the sun is overhead at the equator: 90° − 30° = **60°**.`,
        },
        questions: [
          ["E", "The earth completes one rotation on its axis in", "24 hours", "365¼ days", "30 days", "12 hours", "This gives one day and one night."],
          ["E", "The earth rotates from", "west to east", "east to west", "north to south", "south to north", "Hence the sun appears to rise in the east."],
          ["E", "The movement of the earth round the sun is called", "revolution", "rotation", "eclipse", "equinox", "It takes one year."],
          ["M", "Day and night are caused by the", "rotation of the earth", "revolution of the earth", "tilt of the moon", "phases of the moon", "Only the side facing the sun is lit."],
          ["M", "On 21 June the sun is overhead at the", "Tropic of Cancer", "Tropic of Capricorn", "equator", "Arctic Circle", "It is the summer solstice in the northern hemisphere."],
          ["M", "Days and nights are of equal length all over the world on", "21 March and 23 September", "21 June and 22 December", "1 January and 1 July", "21 June and 23 September", "These are the equinoxes."],
          ["M", "An eclipse of the sun occurs when the", "moon comes between the sun and the earth", "earth comes between the sun and the moon", "sun comes between the earth and the moon", "earth stops rotating", "The moon's shadow falls on the earth."],
          ["H", "The seasons are caused by the", "revolution of the earth and the tilt of its axis", "rotation of the earth alone", "distance of the moon", "shape of the earth", "Different latitudes receive the overhead sun at different times of year."],
          ["H", "The noon altitude of the sun at latitude 10°N on 21 March is", "80°", "90°", "66½°", "56½°", "The sun is overhead at the equator, 10° away."],
          ["H", "Twilight is shorter at the equator than in high latitudes because at the equator the sun", "sets almost vertically", "is always overhead", "never sets", "sets obliquely", "It passes quickly below the horizon."],
        ],
      },
      {
        week: 3,
        title: "Latitude, longitude and time",
        subtopics: ["Latitude and the calculation of distance", "Longitude and great circles", "Local time and longitude", "Standard time, time zones and the International Date Line"],
        objectives: ["Define latitude and calculate distances along a meridian", "Define longitude and explain great circles", "Calculate local time from longitude", "Explain standard time, time zones and the International Date Line"],
        lesson: {
          title: "Locating Places and Telling Time",
          summary: "Use latitude and longitude to locate places and calculate distance and time.",
          minutes: 40,
          notes: `## Latitude
The **angular distance of a place north or south of the equator**, measured in degrees from the centre of the earth. Lines of latitude are also called **parallels**.
- the **equator** is 0°; the poles are 90°N and 90°S
- parallels are complete circles, **parallel** to one another, and become **shorter towards the poles**
- important parallels: **Tropic of Cancer (23½°N)**, **Tropic of Capricorn (23½°S)**, **Arctic Circle (66½°N)**, **Antarctic Circle (66½°S)**
- the equator divides the earth into the northern and southern **hemispheres**

### Distance from latitude
**1° of latitude ≈ 111 km** everywhere.
*Example:* two places on the same meridian at 5°N and 15°N are 10° apart: 10 × 111 = **1110 km**.
If they are on opposite sides of the equator, **add** the latitudes: 10°N to 5°S is 15°, or 1665 km.

## Longitude
The **angular distance of a place east or west of the Prime Meridian**. Lines of longitude are called **meridians**.
- the **Prime (Greenwich) Meridian** is 0°; it passes through Greenwich, near London, and through Accra in Ghana
- meridians run from pole to pole, are **semicircles of equal length**, and **converge at the poles**
- they are numbered to 180° east and west
- 1° of longitude is about 111 km at the equator but decreases to zero at the poles

## Great circles
A **great circle** is any circle on the globe whose plane passes through the **centre of the earth**, dividing it into two equal halves. The **equator** is a great circle; every meridian with its opposite meridian forms one. Other parallels are **small circles**.
The **shortest distance** between two points on the earth lies along a great circle — hence the routes of ships and aircraft.

## Longitude and time
The earth turns through **360° in 24 hours**:
- **15° in 1 hour**
- **1° in 4 minutes**
Because it rotates from west to east, places to the **east are ahead** in time and places to the **west are behind** ("East — Gain — Add; West — Lose — Subtract").

### Local time
The time at a place reckoned from the sun's position; all places on the same meridian have the same local time.
*Example 1:* when it is 12 noon at Greenwich, the local time at 45°E is 45 ÷ 15 = 3 hours ahead: **3.00 p.m.**
*Example 2:* at 30°W it is 2 hours behind: **10.00 a.m.**
*Example 3:* it is 8.00 a.m. at 15°E. At 75°E (60° further east, 4 hours ahead) it is **12 noon**.
For places on opposite sides of Greenwich, **add** the longitudes to find the difference.

### Finding longitude from time
If local time is 2 hours ahead of Greenwich, the longitude is 2 × 15 = **30°E**.

## Standard time and time zones
To avoid confusion, a country or region adopts the local time of one chosen meridian as its **standard time**. The world is divided into **24 time zones**, each 15° wide. **Greenwich Mean Time (GMT)** is the standard for the world.
Nigeria uses the time of **15°E**, which is **1 hour ahead of GMT**. Large countries such as the USA and Russia have several time zones.

## The International Date Line
An imaginary line following roughly the **180° meridian**, bent to avoid land.
- a traveller crossing it from **east to west** (towards Asia) **loses a day** — moves the calendar forward
- crossing from **west to east** (towards America) **gains a day** — repeats a date`,
          examples: `**Example 1.** Find the distance between two towns on the same meridian at 4°N and 12°N. *Solution:* 8 × 111 = **888 km**.

**Example 2.** What is the local time at 60°E when it is 9.00 a.m. at Greenwich? *Solution:* 4 hours ahead: **1.00 p.m.**

**Example 3.** The local time at a place is 3 hours behind GMT. What is its longitude? *Solution:* 3 × 15 = **45°W**.`,
        },
        questions: [
          ["E", "The latitude of the equator is", "0°", "90°", "23½°", "180°", "Latitudes are measured north and south of it."],
          ["E", "The Prime Meridian passes through", "Greenwich", "Lagos", "New York", "Cairo", "It is longitude 0°."],
          ["E", "The earth rotates through 15° of longitude in", "1 hour", "4 minutes", "24 hours", "15 minutes", "360° divided by 24 hours."],
          ["M", "The distance between two places on the same meridian at latitudes 5°N and 15°N is about", "1110 km", "111 km", "2220 km", "1665 km", "10° × 111 km. Answer: 1110 km."],
          ["M", "When it is 12 noon at Greenwich, the local time at longitude 45°E is", "3.00 p.m.", "9.00 a.m.", "2.00 p.m.", "12.45 p.m.", "45° east is 3 hours ahead."],
          ["M", "The latitude 23½°N is called the", "Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle", "equator", "The sun is overhead there on 21 June."],
          ["M", "Which of the following is a great circle?", "the equator", "the Tropic of Cancer", "the Arctic Circle", "latitude 45°N", "Its plane passes through the centre of the earth."],
          ["H", "When it is 12 noon at Greenwich, the local time at longitude 30°W is", "10.00 a.m.", "2.00 p.m.", "11.30 a.m.", "9.00 a.m.", "Places to the west are behind in time."],
          ["H", "It is 8.00 a.m. at a town on longitude 15°E. The local time at a town on longitude 75°E is", "12 noon", "4.00 a.m.", "1.00 p.m.", "11.00 a.m.", "The difference of 60° is 4 hours ahead."],
          ["H", "A traveller who crosses the International Date Line from east to west", "loses a day", "gains a day", "gains 12 hours", "experiences no change of date", "The calendar is moved forward by one day."],
        ],
      },
      {
        week: 4,
        title: "Structure of the earth and rocks",
        subtopics: ["The internal structure of the earth", "The outer zones: atmosphere, hydrosphere, lithosphere and biosphere", "Types of rock and their formation", "Characteristics and importance of rocks"],
        objectives: ["Describe the internal structure of the earth", "Describe the outer zones of the earth", "Classify rocks by mode of formation with examples", "State the characteristics and economic importance of rocks"],
        lesson: {
          title: "Inside the Earth and Its Rocks",
          summary: "Describe the layers of the earth and the three classes of rock.",
          minutes: 40,
          notes: `## Internal structure
| Layer | Features |
|---|---|
| **crust (lithosphere)** | the thin, solid outer layer, 5–50 km thick. The **continental crust — sial** (silica and aluminium) — is lighter and granitic; the **oceanic crust — sima** (silica and magnesium) — is denser and basaltic |
| **mantle (mesosphere)** | about 2900 km thick; dense rock rich in iron and magnesium (olivine); partly molten in its upper part |
| **core (barysphere)** | radius about 3500 km; made of **nickel and iron (nife)**; the **outer core** is liquid, the **inner core** solid; very hot and dense |
The boundary between crust and mantle is the **Mohorovičić discontinuity (Moho)**; that between mantle and core is the Gutenberg discontinuity. Temperature and pressure increase with depth.

## Outer zones
- **atmosphere** — the layer of gases: nitrogen (78%), oxygen (21%), others (1%)
- **hydrosphere** — oceans, seas, lakes, rivers
- **lithosphere** — the solid crust
- **biosphere** — the zone where life exists

## Rocks
A **rock** is an aggregate of **minerals** forming part of the earth's crust. Rocks are classified by **mode of formation**.

### 1. Igneous rocks
Formed by the **cooling and solidification of molten magma**.
- **plutonic (intrusive)** — cooled slowly deep in the crust; **large crystals**: **granite**, gabbro, diorite
- **volcanic (extrusive)** — cooled quickly on the surface as lava; **small crystals** or glassy: **basalt**, obsidian, pumice
- hypabyssal — at intermediate depth: dolerite
**Characteristics:** crystalline; hard; **no fossils**; not in layers; resistant to erosion.

### 2. Sedimentary rocks
Formed from **sediments** deposited in **layers (strata)** by water, wind or ice, then compacted and cemented.
- **mechanically formed** — from fragments of other rocks: **sandstone**, shale, clay, conglomerate, breccia
- **organically formed** — from remains of plants and animals: **limestone**, chalk, coral; **coal**, lignite, peat
- **chemically formed** — precipitated from solution: rock salt, gypsum, potash
**Characteristics:** **stratified**; **contain fossils**; non-crystalline; softer; often porous.

### 3. Metamorphic rocks
Formed when existing rocks are **changed by great heat and/or pressure**.
| Original rock | Metamorphic rock |
|---|---|
| limestone | **marble** |
| sandstone | **quartzite** |
| clay, shale | **slate** |
| granite | **gneiss** |
| coal | graphite |
| shale (further change) | schist |
**Characteristics:** harder than the original; often banded (foliated); may be crystalline.

## The rock cycle
Igneous rocks are weathered into sediments, which form sedimentary rocks; heat and pressure change either into metamorphic rocks; melting returns all to magma.

## Importance of rocks
- **building and construction**: granite chippings, limestone for cement, marble for decoration, sand and clay
- **minerals**: tin and columbite in granite; coal, petroleum and limestone in sedimentary rocks; gold and diamonds
- **fuel**: coal, petroleum, natural gas
- **soil formation** by weathering
- **water storage**: porous rocks such as sandstone act as aquifers
- **tourism**: Olumo Rock, Zuma Rock, Idanre Hills
- salt, gypsum and potash for industry

## Rocks in Nigeria
The **Basement Complex** of old igneous and metamorphic rocks covers about half the country (the north-central highlands, the west and parts of the east); **sedimentary** rocks occupy the Niger–Benue trough, the Sokoto and Chad basins and the coastal belt; **volcanic** rocks occur on the Jos and Biu Plateaux.`,
          examples: `**Example 1.** Name the three layers of the earth from the surface inwards. *Answer:* **Crust, mantle and core**.

**Example 2.** Give one example each of igneous, sedimentary and metamorphic rock. *Answer:* **Granite, sandstone and marble**.

**Example 3.** Which class of rock contains fossils? *Answer:* **Sedimentary** rocks.`,
        },
        questions: [
          ["E", "The outermost solid layer of the earth is the", "crust", "mantle", "core", "atmosphere", "It is also called the lithosphere."],
          ["E", "Rocks formed by the cooling of molten magma are", "igneous rocks", "sedimentary rocks", "metamorphic rocks", "organic rocks", "Granite and basalt are examples."],
          ["E", "An example of a sedimentary rock is", "sandstone", "granite", "marble", "basalt", "It is formed from compacted sand grains."],
          ["M", "The core of the earth is composed mainly of", "nickel and iron", "silica and aluminium", "silica and magnesium", "limestone", "It is known as nife."],
          ["M", "Limestone is changed by heat and pressure into", "marble", "slate", "quartzite", "gneiss", "It is a metamorphic rock used for decoration."],
          ["M", "The continental crust, rich in silica and aluminium, is called", "sial", "sima", "nife", "magma", "It is lighter than the oceanic crust."],
          ["M", "A characteristic of sedimentary rocks is that they", "occur in layers and may contain fossils", "are crystalline and contain no fossils", "are formed from magma", "are always very hard", "They are laid down as strata."],
          ["H", "Granite has large crystals because the magma from which it formed", "cooled slowly deep within the crust", "cooled rapidly on the surface", "was deposited in water", "was changed by pressure", "Slow cooling allows crystals to grow."],
          ["H", "Coal is classified as", "an organically formed sedimentary rock", "a volcanic igneous rock", "a chemically formed sedimentary rock", "a plutonic rock", "It was formed from the remains of plants."],
          ["H", "The boundary between the earth's crust and the mantle is known as the", "Mohorovičić discontinuity", "Gutenberg discontinuity", "International Date Line", "water table", "It is often shortened to Moho."],
        ],
      },
      {
        week: 5,
        title: "Mountains, plateaux and plains",
        subtopics: ["Types of mountain and their formation", "Plateaux", "Plains", "Importance of landforms to man"],
        objectives: ["Classify mountains by mode of formation with examples", "Describe the types of plateau", "Describe the types of plain", "Explain the importance of mountains, plateaux and plains to man"],
        lesson: {
          title: "Major Landforms",
          summary: "Describe the formation and importance of mountains, plateaux and plains.",
          minutes: 40,
          notes: `## Mountains
A **mountain** is a large mass of land rising steeply to a great height (usually over 600 m) above the surrounding country. A line of mountains is a **range**.

### 1. Fold mountains
Formed when layers of sedimentary rock are **compressed and folded** by forces within the earth, where crustal plates collide. Upfolds are **anticlines**; downfolds are **synclines**.
- **young fold mountains** — high and rugged: **Himalayas** (Asia), **Alps** (Europe), **Andes** (South America), **Rockies** (North America), **Atlas** (North Africa)
- **old fold mountains** — worn down: Appalachians, Urals, the Cape Ranges
They are associated with earthquakes and volcanoes and are rich in minerals.

### 2. Block mountains (horsts)
Formed by **faulting**: a block of land is left standing or uplifted between two faults, while the land on either side sinks. The sunken block between faults is a **rift valley (graben)**.
Examples: the **Vosges** and **Black Forest** on either side of the Rhine rift valley; Ruwenzori (East Africa); the Sierra Nevada.

### 3. Volcanic mountains (mountains of accumulation)
Built from **lava, ash and cinders** thrown out of a volcano and piled up round the vent.
Examples: **Mount Kilimanjaro** (Tanzania — the highest in Africa), **Mount Cameroon**, Mount Kenya, **Mount Fuji** (Japan), Vesuvius and Etna (Italy), Mauna Loa (Hawaii).

### 4. Residual mountains (mountains of denudation)
The remains of old highlands worn down by weathering and erosion; resistant parts are left standing.
Examples: the Scottish Highlands; **inselbergs** such as Zuma Rock; the Idanre Hills; the Adamawa and Mandara highlands.

## Plateaux
A **plateau** is an extensive, elevated area with a **fairly level surface** and often steep sides — a tableland.
- **tectonic plateaux** — uplifted by earth movements: the Tibetan Plateau, the Deccan, the Bolivian Plateau; **intermont** plateaux lie between mountain ranges
- **volcanic (lava) plateaux** — built by successive flows of fluid basaltic lava: the north-west Deccan, the Columbia–Snake Plateau, the Biu Plateau
- **dissected plateaux** — cut up by rivers into hills and deep valleys: the **Jos Plateau**, the Fouta Djallon

## Plains
A **plain** is an extensive area of **low, level or gently undulating land**, usually below 200 m.
- **structural plains** — formed by horizontally bedded rocks little disturbed by earth movements: the Great Plains of North America, the Russian Platform
- **depositional plains** — built by deposition:
  - **alluvial and flood plains** and **deltas** by rivers: the Niger Delta, the Nile valley, the Indo-Gangetic Plain
  - coastal plains by the sea
  - loess plains by wind: northern China
  - glacial (outwash and till) plains by ice
- **erosional plains** — worn down by agents of denudation: **peneplains** by rivers; **pediplains** by wind in arid areas

## Importance to man
### Mountains
- **sources of rivers**; sites for **hydro-electric power**
- **minerals**: tin on the Jos Plateau; gold, copper
- **climatic barriers** — cause relief rain; rain shadows on the leeward side
- **tourism** and recreation: Obudu Cattle Ranch
- forests and timber; pasture on slopes
- **defence** in the past
- cooler climate suits temperate crops (tea, Irish potatoes on the Jos and Mambilla Plateaux)
- **problems**: barriers to transport and communication; thin soils; landslides; sparse population
### Plateaux
minerals; cattle rearing; cooler, healthier climate; hydro-electric power where rivers fall off the edge.
### Plains
- **fertile soils** for agriculture — the world's main farming regions
- easy construction of **roads, railways and settlements**
- **dense population** and large cities
- navigable rivers
- **problems**: flooding; waterlogging.`,
          examples: `**Example 1.** How are fold mountains formed? *Answer:* By the **compression and folding** of rock layers.

**Example 2.** Give two examples of volcanic mountains in Africa. *Answer:* **Mount Kilimanjaro** and **Mount Cameroon**.

**Example 3.** State two reasons why plains are densely settled. *Answer:* **Fertile soils** and **ease of building** transport routes and settlements.`,
        },
        questions: [
          ["E", "The Himalayas, the Alps and the Andes are examples of", "fold mountains", "block mountains", "volcanic mountains", "residual mountains", "They were formed by compression of rock layers."],
          ["E", "The highest mountain in Africa is", "Mount Kilimanjaro", "Mount Cameroon", "Mount Kenya", "the Ruwenzori", "It is a volcanic mountain in Tanzania."],
          ["E", "An extensive area of low, level land is called a", "plain", "plateau", "mountain", "ridge", "Plains favour farming and settlement."],
          ["M", "Block mountains are formed by", "faulting", "folding", "volcanic eruption", "deposition", "A block is left standing between two faults."],
          ["M", "The upfolded part of a fold is called", "an anticline", "a syncline", "a graben", "a horst", "The downfold is a syncline."],
          ["M", "The Jos Plateau is an example of a", "dissected plateau", "depositional plain", "fold mountain", "rift valley", "Rivers have cut it into hills and valleys."],
          ["M", "The Niger Delta is an example of", "a depositional plain", "a structural plain", "an erosional plain", "a lava plateau", "It was built by sediments laid down by the river."],
          ["H", "A sunken block of land between two parallel faults is called a", "rift valley", "horst", "peneplain", "caldera", "It is also known as a graben."],
          ["H", "The leeward side of a mountain range usually receives little rain because", "the descending air is dry and warming", "it is nearer the sea", "it faces the wind", "it has more vegetation", "It lies in the rain shadow."],
          ["H", "Mountains that are the worn-down remains of ancient highlands are described as", "residual mountains", "fold mountains", "mountains of accumulation", "block mountains", "They are also called mountains of denudation."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Map reading: scale, distance, direction and bearing",
        subtopics: ["Types of map and conventional signs", "Map scales and their conversion", "Measurement of distance and area", "Direction and bearing"],
        objectives: ["Identify types of map and conventional signs", "Express and convert map scales", "Measure distances and calculate areas on maps", "Find direction and bearing on maps"],
        lesson: {
          title: "Basic Map Reading",
          summary: "Use scales, conventional signs, direction and bearing in map reading.",
          minutes: 40,
          notes: `## Maps
A **map** is a representation of the whole or part of the earth's surface, drawn to scale on a flat surface.
### Types
- **topographical maps** — show relief, drainage, settlement and communications in detail
- **atlas maps** — small-scale maps of countries and continents
- **political maps** — boundaries; **distribution maps** — population, crops, minerals
- **plans** — large-scale drawings of small areas (a school, a house)

### Essentials of a good map
title, **scale**, **key (legend)**, **north arrow**, frame and grid.

### Conventional signs
Standard symbols explained in the key: blue for water features; brown lines for contours; green for vegetation; black for settlements, railways and boundaries; red for main roads. Signs save space and make maps easy to read.

## Scale
The **ratio of a distance on the map to the corresponding distance on the ground**.
### Ways of expressing scale
1. **statement** — "2 cm to 1 km" or "1 cm represents ½ km"
2. **linear (graphic) scale** — a line divided into primary and secondary divisions
3. **representative fraction (RF)** — 1 : 50 000 or $\\frac{1}{50\\,000}$, with no units; both sides are in the same unit

### Conversion
1 km = 100 000 cm.
- **1 : 50 000** means 1 cm to 50 000 cm = 1 cm to 0.5 km, or **2 cm to 1 km**
- "1 cm to 2 km" = 1 cm to 200 000 cm = **1 : 200 000**
- 1 : 100 000 = 1 cm to 1 km

### Large and small scales
A **large-scale** map (1 : 10 000) shows a small area in great detail; a **small-scale** map (1 : 1 000 000) shows a large area in little detail.

## Measuring distance
- **straight-line distance** — with a ruler or dividers
- **curved distance** (roads, rivers) — with a piece of thread, the edge of a paper or dividers in short steps
Then convert with the scale.
*Example:* 8 cm on a map of scale 1 : 50 000 = 8 × 0.5 = **4 km**.

## Calculating area
- **regular shapes** — convert the dimensions to ground distances, then multiply
  *Example:* a rectangle 2 cm by 3 cm on a 1 : 50 000 map is 1 km by 1.5 km = **1.5 km²**
- **irregular shapes** — count the grid squares (whole squares plus half the part squares) and multiply by the area each square represents

## Direction
Given by the points of the compass: the four **cardinal points** (N, E, S, W) and the intermediate points (NE, SE, SW, NW; then NNE, ENE and so on, making 16).
To state the direction of B **from** A, stand at A and look towards B.

## Bearing
The direction of one point from another, measured in **degrees clockwise from north**, written with three figures: 045°, 270°.
### To find the bearing of B from A
1. join A and B with a straight line
2. draw a north line through **A**
3. measure the angle **clockwise** from north to the line AB with a protractor
East is 090°, south 180°, west 270°.

### Back bearing
The bearing of A from B. If the forward bearing is less than 180°, **add 180°**; if more, **subtract 180°**.
*Example:* the bearing of B from A is 060°; the back bearing is **240°**.

### Types of north
**true north** (the North Pole), **magnetic north** (shown by a compass) and **grid north** (the grid lines of the map).

## Locating places
By grid references — **eastings before northings** — or by latitude and longitude.`,
          examples: `**Example 1.** Convert the scale "1 cm to 5 km" to a representative fraction. *Solution:* 5 km = 500 000 cm: **1 : 500 000**.

**Example 2.** Two towns are 12 cm apart on a map of scale 1 : 100 000. Find the actual distance. *Solution:* 12 × 1 km = **12 km**.

**Example 3.** The bearing of X from Y is 250°. Find the bearing of Y from X. *Solution:* 250° − 180° = **070°**.`,
        },
        questions: [
          ["E", "The ratio of a distance on a map to the corresponding distance on the ground is the", "scale", "key", "bearing", "contour", "It may be given as a statement, a line or a fraction."],
          ["E", "The part of a map that explains the symbols used is the", "key", "title", "scale", "frame", "It is also called the legend."],
          ["E", "On a map, the bearing of due east is", "090°", "180°", "270°", "045°", "Bearings are measured clockwise from north."],
          ["M", "On a map of scale 1 : 50 000, a distance of 8 cm represents", "4 km", "8 km", "40 km", "0.4 km", "2 cm represent 1 km."],
          ["M", "The scale '1 cm to 2 km' expressed as a representative fraction is", "1 : 200 000", "1 : 20 000", "1 : 2000", "1 : 2 000 000", "2 km is 200 000 cm."],
          ["M", "Which of these scales is the largest?", "1 : 10 000", "1 : 50 000", "1 : 100 000", "1 : 1 000 000", "The smaller the second number, the larger the scale."],
          ["M", "The length of a winding river on a map is best measured with", "a piece of thread", "a protractor", "a set square", "a pair of compasses only", "The thread follows the bends."],
          ["H", "The bearing of town B from town A is 060°. The bearing of A from B is", "240°", "120°", "300°", "060°", "Add 180° to obtain the back bearing."],
          ["H", "A rectangular farm measures 2 cm by 3 cm on a map of scale 1 : 50 000. Its actual area is", "1.5 km²", "6 km²", "3 km²", "0.6 km²", "The sides are 1 km and 1.5 km."],
          ["H", "In giving a grid reference for a point on a map", "the easting is stated before the northing", "the northing is stated before the easting", "only the northing is stated", "the scale is stated first", "Read along the bottom first, then up the side."],
        ],
      },
      {
        week: 2,
        title: "Representation of relief on maps",
        subtopics: ["Methods of showing relief", "Contours and contour patterns of landforms", "Gradient", "Cross-sections and intervisibility"],
        objectives: ["Describe the methods of showing relief on maps", "Recognise landforms from their contour patterns", "Calculate gradient", "Draw a cross-section and determine intervisibility"],
        lesson: {
          title: "Reading Relief from Contours",
          summary: "Interpret contour patterns, calculate gradients and draw cross-sections.",
          minutes: 40,
          notes: `## Methods of showing relief
- **contours** — lines joining places of **equal height above sea level**; the most accurate method
- **spot heights** — a dot with the height written beside it
- **trigonometrical stations** — a triangle with a dot, marking a surveyed point
- **bench marks** — heights marked on buildings or rocks
- **form lines** — approximate contours, drawn broken
- **hachures** — short lines down the slope, thicker on steeper slopes; no heights given
- **hill shading** — slopes shaded as if lit from one corner
- **layer colouring (tinting)** — colours between contours: green for lowland, yellow and brown for higher land

## Contours
- the **vertical interval (VI)** or contour interval is the difference in height between successive contours
- the **horizontal equivalent (HE)** is the ground distance between two contours
- contours **close together** — **steep** slope; **far apart** — **gentle** slope
- **evenly spaced** — uniform slope
- close at the top and wide at the bottom — **concave** slope; wide at the top and close at the bottom — **convex** slope
- contours never cross (except at an overhanging cliff)

## Contour patterns of landforms
| Landform | Contour pattern |
|---|---|
| **conical hill** | concentric, roughly circular contours, heights increasing inwards |
| **ridge** | long, narrow, elongated contours |
| **plateau** | close contours at the edges, few or none on the flat top |
| **valley** | V-shaped contours **pointing towards higher ground** (upstream) |
| **spur** | V-shaped contours **pointing towards lower ground** |
| **interlocking spurs** | spurs from opposite sides alternating along a valley |
| **col (saddle)** | a low area between two hills on a ridge |
| **pass (gap)** | a deeper, narrower gap through a ridge |
| **knoll** | a small isolated hill: one or two small ring contours |
| **escarpment** | a steep **scarp slope** (close contours) on one side, a gentle **dip slope** on the other |
| **cliff** | contours merging into one line |
| **watershed** | the high ground separating two river basins |
| **depression** | closed contours with heights decreasing inwards |

## Gradient
The steepness of a slope:
gradient = **vertical interval ÷ horizontal equivalent** (both in the same unit)
*Example:* two points differ in height by 200 m and are 4 km (4000 m) apart: 200 ÷ 4000 = **1 in 20**.
A gradient of 1 in 10 is steeper than 1 in 50.

## Cross-section (relief profile)
A side view of the land along a line.
1. draw a line AB on the map and lay the straight edge of a paper along it
2. mark each point where a contour crosses, noting its height; also mark rivers and summits
3. draw a base line of the same length with a **vertical scale** on both ends
4. plot each height above its mark and join the points with a **smooth curve**
5. label the features and state the scales

### Vertical exaggeration
The vertical scale is usually larger than the horizontal:
vertical exaggeration = **horizontal scale denominator ÷ vertical scale denominator**
*Example:* horizontal scale 1 : 50 000; vertical scale 1 cm to 100 m = 1 : 10 000. VE = 50 000 ÷ 10 000 = **5 times**.

## Intervisibility
Two points are **intervisible** if one can be seen from the other. Draw the cross-section and join the two points with a straight line of sight: if no land rises above it, they are intervisible. A **convex** slope or an intervening hill blocks the view; across a concave slope or a valley the points are usually intervisible.

## Drainage patterns on maps
**dendritic** (tree-like), **trellis** (rectangular), **radial** (outward from a dome or cone), **centripetal** (inward to a basin).`,
          examples: `**Example 1.** What does it mean when contours are very close together? *Answer:* The slope is **steep**.

**Example 2.** Two points 2 km apart differ in height by 100 m. Find the gradient. *Solution:* 100 ÷ 2000 = **1 in 20**.

**Example 3.** Horizontal scale 1 : 100 000; vertical scale 1 cm to 200 m. Find the vertical exaggeration. *Solution:* 100 000 ÷ 20 000 = **5**.`,
        },
        questions: [
          ["E", "Lines drawn on a map joining places of equal height above sea level are", "contours", "isohyets", "isotherms", "hachures", "They are the most accurate way of showing relief."],
          ["E", "Contour lines that are very close together indicate", "a steep slope", "a gentle slope", "a flat plain", "a lake", "Height changes rapidly over a short distance."],
          ["E", "The difference in height between two successive contours is the", "vertical interval", "horizontal equivalent", "gradient", "spot height", "It is constant on a given map."],
          ["M", "V-shaped contours pointing towards higher ground represent", "a valley", "a spur", "a ridge", "a plateau", "A river normally flows down it."],
          ["M", "A low area between two hills along a ridge is called", "a col", "a spur", "a knoll", "an escarpment", "It is also called a saddle."],
          ["M", "Two points on a map differ in height by 200 m and are 4 km apart on the ground. The gradient between them is", "1 in 20", "1 in 2", "1 in 50", "1 in 200", "200 ÷ 4000. Answer: 1 in 20."],
          ["M", "A landform with a steep slope on one side and a gentle slope on the other is", "an escarpment", "a conical hill", "a plateau", "a depression", "It has a scarp slope and a dip slope."],
          ["H", "A cross-section is drawn with a horizontal scale of 1 : 50 000 and a vertical scale of 1 cm to 100 m. The vertical exaggeration is", "5 times", "50 times", "2 times", "500 times", "50 000 ÷ 10 000."],
          ["H", "Two points on opposite ends of a slope are NOT intervisible when the slope between them is", "convex", "concave", "uniform and gentle", "a valley", "The bulge of the land blocks the line of sight."],
          ["H", "A drainage pattern in which streams flow outwards in all directions from a central highland is", "radial", "dendritic", "trellis", "centripetal", "It develops on domes and volcanic cones."],
        ],
      },
      {
        week: 3,
        title: "The environment and its resources",
        subtopics: ["Meaning and types of environment", "Components of the physical environment", "Environmental resources", "Environmental interaction"],
        objectives: ["Define environment and distinguish its types", "Describe the spheres of the physical environment", "Classify environmental resources as renewable or non-renewable", "Explain interactions within the environment"],
        lesson: {
          title: "Man's Environment",
          summary: "Describe the components and resources of the environment and how they interact.",
          minutes: 40,
          notes: `## Environment
The **total surroundings** of man — everything, living and non-living, that affects his life and activities.
### Types
- **physical (natural) environment** — features not made by man: relief, climate, soil, water, vegetation, animals
- **social and cultural environment** — features created by man: settlements, farms, roads, industries, religion, government

## Components of the physical environment
| Sphere | Description | Importance |
|---|---|---|
| **atmosphere** | the envelope of gases round the earth — nitrogen 78%, oxygen 21%, argon, carbon dioxide and water vapour | oxygen for breathing; carbon dioxide for photosynthesis; weather and rainfall; protection from harmful rays (ozone layer) |
| **lithosphere** | the solid outer layer — rocks and soils | land for farming and building; minerals; soil |
| **hydrosphere** | all water bodies — oceans (about 97% of all water), seas, lakes, rivers, ground water | drinking, irrigation, fishing, transport, power, industry |
| **biosphere** | the zone of life — plants and animals | food, timber, medicine, raw materials |

### Layers of the atmosphere
**troposphere** (lowest; weather occurs here; temperature falls with height), **stratosphere** (contains the ozone layer), mesosphere, thermosphere (ionosphere — reflects radio waves).

## Environmental resources
Anything in the environment that man uses to satisfy his needs.
| Type | Examples |
|---|---|
| **atmospheric** | air, wind, solar energy, rain |
| **land (mineral)** | petroleum, coal, tin, limestone, gold, soil |
| **water** | rivers, lakes, seas, fish, hydro-electric power |
| **vegetation (forest)** | timber, fuel wood, rubber, fruits, medicinal plants |
| **animal** | wildlife, livestock |
| **human** | labour, skills, knowledge |

### Renewable and non-renewable
- **renewable resources** can be replaced or replenish themselves: water, forests, wildlife, solar energy, wind, soil (if well managed)
- **non-renewable resources** are exhausted by use: **petroleum**, natural gas, coal, tin, iron ore, limestone

## Environmental interaction
The parts of the environment depend on and affect one another.
- **within the physical environment**: climate determines vegetation; vegetation protects soil; relief influences rainfall and drainage; the water cycle links atmosphere, hydrosphere and lithosphere
- **between man and the environment**:
  - the environment influences man — where he settles, what he grows, how he builds and dresses
  - man **modifies** the environment — farming, irrigation, dams, mining, road building, reclaiming land, planting and clearing forests

### Ecosystem
A community of plants and animals interacting with one another and with their non-living environment. Energy flows through it from producers (green plants) to consumers and decomposers.

## Environmental balance and its disturbance
In nature there is a balance among the components. Human activity can upset it:
- **deforestation** → soil erosion, loss of wildlife, desert encroachment
- **overgrazing and bush burning** → bare soil
- **mining and oil exploration** → derelict land, oil spills
- **industry and vehicles** → air and water pollution
- **over-fishing and over-hunting** → loss of species

## Wise use (conservation)
afforestation; soil conservation; controlled grazing, hunting and fishing; recycling; laws against pollution; use of renewable energy; environmental education.`,
          examples: `**Example 1.** Name the four spheres of the physical environment. *Answer:* **Atmosphere, lithosphere, hydrosphere and biosphere**.

**Example 2.** Classify petroleum and forest as resources. *Answer:* Petroleum is **non-renewable**; forest is **renewable**.

**Example 3.** Give one way in which man modifies the environment. *Answer:* By **building dams** (or clearing forest for farming).`,
        },
        questions: [
          ["E", "The envelope of gases surrounding the earth is the", "atmosphere", "hydrosphere", "lithosphere", "biosphere", "It contains nitrogen, oxygen and other gases."],
          ["E", "All the water bodies on the earth make up the", "hydrosphere", "atmosphere", "lithosphere", "troposphere", "Oceans hold most of this water."],
          ["E", "An example of a renewable resource is", "forest", "petroleum", "coal", "tin", "It can be replaced by replanting."],
          ["M", "The most abundant gas in the atmosphere is", "nitrogen", "oxygen", "carbon dioxide", "argon", "It makes up about 78%."],
          ["M", "The layer of the atmosphere in which weather occurs is the", "troposphere", "stratosphere", "mesosphere", "thermosphere", "It is the lowest layer."],
          ["M", "Which of the following is a non-renewable resource?", "natural gas", "solar energy", "water", "wildlife", "It is used up and cannot be replaced."],
          ["M", "Features of the environment created by man, such as roads and settlements, form the", "social and cultural environment", "physical environment", "biosphere", "lithosphere", "They are not natural features."],
          ["H", "The ozone layer, which shields the earth from harmful ultraviolet rays, lies in the", "stratosphere", "troposphere", "lithosphere", "hydrosphere", "It is above the layer of weather."],
          ["H", "A likely result of widespread removal of vegetation in an area is", "increased soil erosion", "increased rainfall", "more wildlife", "more fertile soil", "The soil loses its protective cover."],
          ["H", "The statement that 'climate determines the type of vegetation' illustrates", "interaction within the physical environment", "the social environment", "a non-renewable resource", "human modification of the environment", "One natural component influences another."],
        ],
      },
      {
        week: 4,
        title: "Weather and climate",
        subtopics: ["Weather, climate and their elements", "Weather instruments and the weather station", "Factors affecting climate", "Types of rainfall and climatic statistics"],
        objectives: ["Distinguish weather from climate and list their elements", "Describe the instruments used to measure weather elements", "Explain the factors that affect climate", "Describe the types of rainfall and calculate simple climatic statistics"],
        lesson: {
          title: "Elements of Weather and Climate",
          summary: "Describe the elements of weather, how they are measured and what controls climate.",
          minutes: 40,
          notes: `## Weather and climate
- **weather** — the condition of the atmosphere at a place over a **short period**
- **climate** — the **average weather** conditions of a place over a **long period** (about 30–35 years)
The study of weather is **meteorology**; of climate, **climatology**.

## Elements and instruments
| Element | Instrument | Unit | Lines on maps |
|---|---|---|---|
| **temperature** | thermometer; **Six's maximum and minimum thermometer** | °C | **isotherms** |
| **rainfall** | **rain gauge** | mm | **isohyets** |
| **atmospheric pressure** | **barometer** (mercury or aneroid) | millibars | **isobars** |
| **wind direction** | **wind vane** | compass points | — |
| **wind speed** | **anemometer** | km/h or knots | — |
| **relative humidity** | **hygrometer** (wet- and dry-bulb thermometers) | % | — |
| **sunshine** | Campbell–Stokes **sunshine recorder** | hours | **isohels** |
| **cloud cover** | observation | oktas (eighths) | isonephs |

### The weather station
An open space where the instruments are kept. The thermometers are housed in a **Stevenson screen** — a white wooden box with **louvred sides**, standing about **1.2 m above the ground** — so that they record the temperature of the air **in the shade**, with free circulation.
The rain gauge is sunk into the ground with its rim about 30 cm above the surface, away from trees and buildings.

## Temperature statistics
- **daily (diurnal) range** = maximum − minimum
- **mean daily temperature** = (maximum + minimum) ÷ 2
- **mean monthly temperature** = sum of daily means ÷ number of days
- **mean annual temperature** = sum of monthly means ÷ 12
- **annual range** = hottest month − coldest month
*Example:* maximum 32 °C, minimum 22 °C: range **10 °C**; mean **27 °C**.
- **total annual rainfall** = sum of the monthly totals

## Factors affecting climate
1. **latitude** — temperature decreases from the equator to the poles
2. **altitude** — temperature falls about **6.5 °C for every 1000 m** of ascent (the lapse rate), so highlands are cooler
3. **distance from the sea (continentality)** — coastal areas have equable climates; interiors have extremes
4. **ocean currents** — warm currents raise, cold currents lower, coastal temperatures
5. **prevailing winds** — onshore winds bring rain; offshore winds are dry
6. **relief (aspect)** — windward slopes are wet, leeward slopes dry
7. **vegetation and cloud cover**; human activities

## Types of rainfall
- **convectional** — the ground is strongly heated; warm moist air rises, cools and condenses into cumulonimbus clouds; heavy afternoon showers with thunder and lightning; typical of equatorial regions
- **relief (orographic)** — moist air is forced to rise over a highland; rain falls on the **windward** side; the leeward side is a **rain shadow**
- **cyclonic (frontal)** — warm air rises over cold air where the two air masses meet; common in temperate latitudes; in the tropics, tropical cyclones bring violent rain

## Clouds
high (cirrus), medium (alto-), low (stratus), and clouds of great vertical extent (cumulus, cumulonimbus).

## Winds and pressure
Wind blows from **high pressure to low pressure**. Planetary winds: trade winds, westerlies, polar easterlies. Land and sea breezes are local winds; monsoons reverse with the seasons.

## Importance of weather information
farming, aviation, shipping, fishing, flood warnings, planning.`,
          examples: `**Example 1.** Which instrument measures atmospheric pressure? *Answer:* A **barometer**.

**Example 2.** The maximum and minimum temperatures on a day are 34 °C and 24 °C. Find the mean daily temperature. *Solution:* (34 + 24) ÷ 2 = **29 °C**.

**Example 3.** A town at sea level has a temperature of 30 °C. Estimate the temperature on a nearby mountain 2000 m high. *Solution:* 30 − 13 = **17 °C**.`,
        },
        questions: [
          ["E", "The average weather conditions of a place over a long period is its", "climate", "weather", "season", "humidity", "It is based on about 30 to 35 years of records."],
          ["E", "Atmospheric pressure is measured with a", "barometer", "thermometer", "hygrometer", "wind vane", "It may be a mercury or an aneroid type."],
          ["E", "Lines on a map joining places of equal rainfall are called", "isohyets", "isotherms", "isobars", "contours", "Isotherms join places of equal temperature."],
          ["M", "The instrument used to measure relative humidity is the", "hygrometer", "anemometer", "barometer", "rain gauge", "It uses wet- and dry-bulb thermometers."],
          ["M", "The maximum and minimum temperatures recorded on a day were 32 °C and 22 °C. The mean daily temperature was", "27 °C", "10 °C", "54 °C", "32 °C", "Half the sum of the two readings."],
          ["M", "Rainfall caused when moist air is forced to rise over a mountain is called", "relief rainfall", "convectional rainfall", "cyclonic rainfall", "frontal rainfall", "It is also known as orographic rainfall."],
          ["M", "The white louvred box in which thermometers are kept at a weather station is the", "Stevenson screen", "rain gauge", "Campbell–Stokes recorder", "wind sock", "It shades the thermometers while allowing air to circulate."],
          ["H", "Temperature decreases with height at an average rate of about", "6.5 °C per 1000 m", "1 °C per 1000 m", "65 °C per 1000 m", "0.65 °C per 1000 m", "This is the normal lapse rate."],
          ["H", "Coastal areas have a smaller annual range of temperature than inland areas because", "the sea heats up and cools down slowly", "the sea is always cold", "coasts are at higher altitude", "coasts receive less sunshine", "The sea moderates the temperature of nearby land."],
          ["H", "Heavy afternoon showers with thunder and lightning, common in equatorial regions, are typical of", "convectional rainfall", "relief rainfall", "frontal rainfall", "drizzle", "Strong heating causes moist air to rise rapidly."],
        ],
      },
      {
        week: 5,
        title: "Nigeria: location, size, relief and drainage",
        subtopics: ["Location, position and size of Nigeria", "Political divisions", "Relief: highlands and lowlands", "Drainage: rivers and lakes"],
        objectives: ["Describe the location, position and size of Nigeria", "Describe the political divisions of Nigeria", "Describe the highlands and lowlands of Nigeria", "Describe the drainage of Nigeria and its importance"],
        lesson: {
          title: "The Land of Nigeria",
          summary: "Describe the location, size, relief and drainage of Nigeria.",
          minutes: 40,
          notes: `## Location and position
Nigeria lies in **West Africa**, roughly between **latitudes 4°N and 14°N** and **longitudes 3°E and 15°E** — wholly within the tropics.
### Boundaries
- west: **Republic of Benin**
- north: **Niger Republic**
- north-east: **Chad** (across Lake Chad)
- east: **Cameroon**
- south: the **Atlantic Ocean** (Gulf of Guinea), with a coastline of about 850 km

## Size
Area about **923 768 km²**. It stretches about 1100 km from north to south and about 1300 km from west to east. Nigeria is the **most populous country in Africa**.

## Political divisions
A federation of **36 states** and the **Federal Capital Territory (Abuja)**, grouped into six geopolitical zones — North-West, North-East, North-Central, South-West, South-East and South-South — and divided into **774 local government areas**. The capital moved from Lagos to Abuja in 1991.

## Relief
### Highlands
| Highland | Location and notes |
|---|---|
| **North-central highlands** | the high plains of Hausaland and the **Jos Plateau** (about 1200–1800 m; Shere Hills); tin and columbite; cool climate |
| **Eastern highlands** | along the Cameroon border: **Mandara Mountains**, **Adamawa Highlands**, **Mambilla Plateau**, **Obudu Plateau**, Oban Hills. **Chappal Waddi** (about 2419 m) on the Gotel Mountains is the **highest point** in Nigeria |
| **Western uplands** | the Yoruba highlands: Idanre Hills, Ekiti hills; many inselbergs |
| **Eastern scarplands** | the **Udi–Nsukka Plateau** and the Enugu escarpment; coal |
| Biu Plateau | volcanic, in the north-east |

### Lowlands
- the **Niger–Benue trough**
- the **Sokoto plains** in the north-west
- the **Chad basin** (Borno plains) in the north-east
- the **coastal plains** and the **Niger Delta**
- the Cross River basin

## Drainage
### Main rivers
- **River Niger** — rises in the **Fouta Djallon** highlands of Guinea, flows through Mali and Niger, enters Nigeria in the north-west, is joined by the **Benue at Lokoja**, and flows south to the Atlantic through the **Niger Delta**. It is the third-longest river in Africa (about 4180 km)
- **River Benue** — rises in the Adamawa Highlands of Cameroon; the Niger's chief tributary
- tributaries of the Niger: **Sokoto, Kaduna**, Anambra; of the Benue: **Gongola**, Katsina-Ala, Donga, Taraba
- rivers flowing direct to the sea: **Ogun, Osun**, Benin, **Cross River**, Imo, Kwa Iboe
- rivers of **inland drainage** to **Lake Chad**: **Komadugu Yobe**, Hadejia, Ngadda, Yedseram

### Watersheds
The **Jos Plateau** is the main hydrological centre: rivers radiate from it to the Niger, the Benue and Lake Chad. The western uplands and eastern highlands are others.

### Characteristics of Nigerian rivers
seasonal in volume — high in the rainy season, low in the dry season; rapids and waterfalls interrupt navigation; sandbanks and shifting channels; many northern rivers dry up.

### Lakes
- **Lake Chad** — a shallow, shrinking lake of inland drainage shared with Chad, Niger and Cameroon
- **Kainji Lake** — man-made, behind the Kainji Dam on the Niger; others at Jebba, Shiroro (Kaduna river), Tiga and Bakolori
- lagoons along the coast: Lagos Lagoon, Lekki Lagoon

## Importance of rivers
**hydro-electric power** (Kainji, Jebba, Shiroro); **irrigation**; **fishing**; **transport**; domestic and industrial water; fertile flood plains (fadama); tourism (Gurara, Erin-Ijesha and Agbokim falls).
### Problems
flooding; erosion; seasonal flow; water-borne diseases; silting.`,
          examples: `**Example 1.** Name the countries that border Nigeria. *Answer:* **Benin** (west), **Niger** (north), **Chad** (north-east) and **Cameroon** (east).

**Example 2.** At which town does the Benue join the Niger? *Answer:* **Lokoja**.

**Example 3.** Name two rivers that drain into Lake Chad. *Answer:* **Komadugu Yobe** and **Yedseram**.`,
        },
        questions: [
          ["E", "The country that borders Nigeria on the west is", "the Republic of Benin", "Cameroon", "Chad", "Niger Republic", "Cameroon lies to the east."],
          ["E", "The rivers Niger and Benue meet at", "Lokoja", "Onitsha", "Jebba", "Makurdi", "The town is in Kogi State."],
          ["E", "Nigeria is made up of 36 states and", "the Federal Capital Territory", "two capital territories", "six regions only", "four regions only", "Abuja is the federal capital."],
          ["M", "Nigeria lies approximately between latitudes", "4°N and 14°N", "4°S and 14°S", "14°N and 24°N", "0° and 4°N", "It is wholly within the northern tropics."],
          ["M", "The highest point in Nigeria is found on the", "eastern highlands", "Jos Plateau", "western uplands", "Udi Plateau", "Chappal Waddi rises to about 2419 m."],
          ["M", "The River Niger takes its source from the", "Fouta Djallon highlands", "Jos Plateau", "Adamawa Highlands", "Atlas Mountains", "These highlands are in Guinea."],
          ["M", "Which of these rivers flows into Lake Chad?", "Komadugu Yobe", "Ogun", "Cross River", "Kaduna", "It is a river of inland drainage."],
          ["H", "The Jos Plateau is described as a hydrological centre because", "rivers radiate from it in several directions", "it has the largest lake in Nigeria", "it receives no rainfall", "all Nigerian rivers end there", "It is the source of tributaries of the Niger, the Benue and Lake Chad."],
          ["H", "Navigation on many Nigerian rivers is hindered mainly by", "seasonal fluctuation in volume and the presence of rapids", "the great depth of the rivers", "too many bridges", "cold temperatures", "Water levels fall sharply in the dry season."],
          ["H", "The Kainji Dam on the River Niger was built primarily to", "generate hydro-electric power", "supply petroleum", "stop all fishing", "link Nigeria to Chad by road", "Its lake is also used for fishing and irrigation."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Nigeria: climate and vegetation",
        subtopics: ["Air masses and seasons", "Rainfall and temperature distribution", "Vegetation belts", "Importance and problems of climate and vegetation"],
        objectives: ["Explain how air masses control the seasons in Nigeria", "Describe the distribution of rainfall and temperature", "Describe the vegetation belts of Nigeria", "Explain the importance of climate and vegetation and the problems affecting them"],
        lesson: {
          title: "Climate and Vegetation of Nigeria",
          summary: "Describe the seasons, rainfall, temperature and vegetation belts of Nigeria.",
          minutes: 40,
          notes: `## Air masses
Nigeria's climate is controlled by two air masses.
| Air mass | Wind | Source | Character | Season |
|---|---|---|---|---|
| **tropical maritime (mT)** | **south-west** monsoon winds | the Atlantic Ocean | warm and **moist** | **rainy season** |
| **tropical continental (cT)** | **north-east** trade winds | the Sahara Desert | dry and dusty | **dry season** (harmattan) |
They meet along the **Inter-Tropical Discontinuity (ITD)**, also called the Inter-Tropical Convergence Zone. As the overhead sun moves north (March to August), the ITD and the rain belt move north; as it retreats (September onwards), the dry air spreads south.

## Seasons
- **rainy season** — about **March/April to October** in the south; only **June to September** in the far north
- **dry season** — November to March; longest in the north
- the **harmattan** — cold, dry, dusty wind from the Sahara, December to February: haze, dry skin, cold mornings and nights, but relief from humidity
- in the south there are **two rainfall peaks** (about June and September) separated by the short "**August break**"; the north has a single peak

## Rainfall
- **decreases from the coast inland**: over **3000 mm** in parts of the Niger Delta and the south-east coast (Bonny, Calabar) to under **500 mm** in the extreme north-east (near Lake Chad)
- the length of the rainy season also decreases northwards
- highlands such as the Jos and Obudu Plateaux receive more rain than the surrounding lowlands (relief rain)

## Temperature
- high throughout the year: mean about 27 °C in the south, higher in the north
- the **annual and daily ranges increase northwards** — small on the coast (about 3 °C), large in the north (cloudless skies, distance from the sea)
- highest temperatures occur in the north just before the rains (March–May), often above 38 °C
- highlands are cooler

## Vegetation belts
From south to north, following the rainfall:
| Belt | Location | Characteristics |
|---|---|---|
| **mangrove (saltwater) swamp forest** | the coast and Niger Delta | mangrove trees with stilt and breathing roots in brackish mud |
| **freshwater swamp forest** | just inland | raffia palm, reeds |
| **tropical rainforest** | the southern states | tall evergreen trees in layers; climbers; **timber**: iroko, obeche, mahogany; also oil palm, cocoa, rubber |
| **Guinea savanna** | the Middle Belt — the **largest** belt | tall grasses with scattered fire-resistant trees: shea butter, locust bean; gallery forests along rivers |
| **Sudan savanna** | the far north | shorter grasses; baobab, acacia, dum palm; the main grain and cattle zone |
| **Sahel savanna** | the extreme north-east | short, tufted grasses; thorny shrubs; nomadic herding |
| **montane vegetation** | Jos, Mambilla and Obudu Plateaux | grassland, favoured for cattle and temperate crops |
Much of the original forest has been reduced to **derived savanna** by farming and burning.

## Importance
- climate decides the crops: tree crops (cocoa, oil palm, rubber) and roots in the wet south; grains (millet, sorghum), groundnuts and cotton in the drier north
- forests supply timber, fuel, food and medicine
- grasslands support livestock

## Problems
- **deforestation** — logging, farming, fuel wood
- **bush burning** and **overgrazing**
- **desert encroachment** in the far north; drought
- **flooding** and **gully erosion** in the south-east
- irregular rainfall and climate change
### Remedies
afforestation and shelter belts (the Great Green Wall); forest reserves; controlled grazing; irrigation; erosion control.`,
          examples: `**Example 1.** Which wind brings rain to Nigeria? *Answer:* The **south-west (tropical maritime)** wind from the Atlantic.

**Example 2.** How does rainfall change from south to north in Nigeria? *Answer:* It **decreases**, in amount and in the length of the season.

**Example 3.** Name the largest vegetation belt in Nigeria. *Answer:* The **Guinea savanna**.`,
        },
        questions: [
          ["E", "The wind that brings rain to Nigeria blows from the", "south-west", "north-east", "north-west", "south-east", "It comes off the Atlantic Ocean."],
          ["E", "The cold, dry, dusty wind that blows over Nigeria from the Sahara is the", "harmattan", "monsoon", "sea breeze", "westerlies", "It is felt mainly from December to February."],
          ["E", "The vegetation found along the coast and in the Niger Delta is", "mangrove swamp forest", "Sudan savanna", "Sahel savanna", "montane grassland", "The trees have stilt and breathing roots."],
          ["M", "In Nigeria, the amount of rainfall generally", "decreases from south to north", "increases from south to north", "is the same everywhere", "decreases from east to west only", "The moist winds lose moisture as they move inland."],
          ["M", "The vegetation belt that covers the largest area of Nigeria is the", "Guinea savanna", "rainforest", "Sahel savanna", "mangrove swamp", "It occupies the Middle Belt."],
          ["M", "The short dry spell during the rainy season in southern Nigeria is called the", "August break", "harmattan", "dry season", "line squall", "It separates the two rainfall peaks."],
          ["M", "Iroko, obeche and mahogany are trees of the", "tropical rainforest", "Sudan savanna", "mangrove swamp", "Sahel savanna", "They are valued as timber."],
          ["H", "The zone where the tropical maritime and tropical continental air masses meet is the", "Inter-Tropical Discontinuity", "Tropic of Cancer", "International Date Line", "rain shadow", "Its north–south movement controls the seasons."],
          ["H", "The annual range of temperature in northern Nigeria is greater than in the south mainly because the north", "is farther from the sea and has clearer skies", "is nearer the equator", "has more rainfall", "has denser forest", "Land far from the sea heats and cools rapidly."],
          ["H", "Grassland with scattered trees found in parts of southern Nigeria where forest has been destroyed by farming and burning is called", "derived savanna", "montane forest", "Sahel savanna", "mangrove", "It has replaced the original rainforest."],
        ],
      },
      {
        week: 2,
        title: "Population of Nigeria",
        subtopics: ["Size and growth of population", "Population distribution and density", "Population structure and movement", "Population problems and solutions"],
        objectives: ["Describe the size and growth of Nigeria's population", "Explain the distribution and density of population", "Describe the structure and movements of the population", "Discuss population problems and their solutions"],
        lesson: {
          title: "The People of Nigeria",
          summary: "Describe the size, distribution, structure and problems of Nigeria's population.",
          minutes: 40,
          notes: `## Terms
- **population** — the number of people living in an area at a given time
- **census** — the official counting of all the people in a country, with details of age, sex and occupation
- **population density** — the number of people per unit area: density = population ÷ area
- **birth rate** and **death rate** — births or deaths per 1000 people per year
- **natural increase** = birth rate − death rate
- **overpopulation** — more people than the resources can support; **underpopulation** — too few to use the resources fully; **optimum population** — the number that gives the highest standard of living

## Size and growth
Nigeria is the **most populous country in Africa**. Censuses: 1952/53, 1963, 1973 (cancelled), **1991** (about 88.9 million) and **2006** (about 140 million). Current estimates are above 200 million.
Growth is rapid (about 2.5% a year) because of a **high birth rate** (early marriage, polygamy, desire for many children, limited family planning) and a **falling death rate** (better medical care, sanitation and food).
### Problems of census taking
inaccessible areas; illiteracy; inflation of figures for political or economic gain; religious and cultural beliefs; nomadic populations; shortage of funds and trained staff.

## Distribution and density
Population is **uneven**.
### Densely populated areas
- **Lagos** and the south-west (Ibadan, Abeokuta)
- the **south-east** — Anambra, Imo, Abia (among the highest rural densities)
- the **Kano close-settled zone**, Katsina and Sokoto areas
- parts of Akwa Ibom
### Sparsely populated areas
- the **Middle Belt** (Niger, Kwara, Taraba, parts of Benue and Plateau)
- the **Chad basin** (Borno, Yobe)
- the Niger Delta swamps; the Cross River basin
### Factors affecting distribution
- **physical**: climate (adequate rainfall), relief (plains preferred), fertile soils, water supply, absence of pests such as the tsetse fly
- **human**: employment in industry, trade and administration; minerals; transport; history (old kingdoms, the slave trade emptying the Middle Belt); security

## Structure
- **age**: a very **youthful** population — a large proportion under 15 — giving a broad-based **population pyramid** and a high **dependency ratio**
- **sex**: roughly equal numbers of males and females
- **occupation**: agriculture still employs the largest share; services and industry are growing
- over 250 **ethnic groups**; the largest are the Hausa–Fulani, Yoruba and Igbo

## Population movement (migration)
- **rural–urban** — the most important: people move to towns for jobs, education and amenities
- **rural–rural** — farm labourers moving to cocoa or tin areas; nomadic herders
- **urban–rural** — retirement
- **international** — emigration of skilled people (the "brain drain"); immigration from neighbouring countries
### Effects of rural–urban migration
- on towns: overcrowding, slums, unemployment, traffic congestion, crime, pressure on water and electricity
- on villages: loss of young workers, falling food production, an ageing population

## Problems of a large, fast-growing population
pressure on land, food, housing, schools and hospitals; unemployment; environmental degradation; low income per head.
### Advantages
a large market and labour force; a young, active population.
### Solutions
family planning and population education; education of girls; rural development to reduce migration; more jobs; increased food production; new towns and resettlement.`,
          examples: `**Example 1.** A local government area of 500 km² has 150 000 people. Find the population density. *Solution:* 150 000 ÷ 500 = **300 persons per km²**.

**Example 2.** Give two reasons for the dense population of Lagos. *Answer:* **Industrial and commercial employment** and its role as a **port**.

**Example 3.** State two effects of rural–urban migration on cities. *Answer:* **Overcrowding** and **unemployment**.`,
        },
        questions: [
          ["E", "The official counting of all the people in a country is called a", "census", "survey", "referendum", "migration", "It records age, sex and occupation."],
          ["E", "The number of people per unit area of land is the", "population density", "birth rate", "population size", "dependency ratio", "Population divided by area."],
          ["E", "The most populous country in Africa is", "Nigeria", "Egypt", "South Africa", "Ethiopia", "It has over 200 million people."],
          ["M", "The movement of people from villages to towns is known as", "rural–urban migration", "urban–rural migration", "emigration", "transhumance", "People seek jobs and amenities."],
          ["M", "An area of 500 km² has a population of 150 000. Its population density is", "300 persons per km²", "30 persons per km²", "3000 persons per km²", "75 persons per km²", "150 000 ÷ 500. Answer: 300 persons per km²."],
          ["M", "Which of these areas of Nigeria is sparsely populated?", "the Middle Belt", "the Kano close-settled zone", "the Lagos area", "the Anambra–Imo area", "It has large areas with few people."],
          ["M", "Nigeria's population is growing rapidly mainly because of", "a high birth rate and a falling death rate", "a low birth rate", "heavy emigration", "a rising death rate", "Births greatly exceed deaths."],
          ["H", "A population pyramid with a very broad base indicates", "a large proportion of young people", "a large proportion of old people", "a declining population", "more women than men", "It is typical of developing countries."],
          ["H", "A major effect of rural–urban migration on the rural areas is", "a shortage of young farm labour", "overcrowding in villages", "growth of slums in villages", "traffic congestion", "The active young people leave."],
          ["H", "A situation in which the population of a country is too large for its available resources is", "overpopulation", "underpopulation", "optimum population", "population density", "Living standards then tend to fall."],
        ],
      },
      {
        week: 3,
        title: "Settlements",
        subtopics: ["Types of settlement: rural and urban", "Settlement patterns", "Factors affecting the location and growth of settlements", "Functions and interaction of settlements"],
        objectives: ["Distinguish rural from urban settlements", "Describe settlement patterns", "Explain the factors that affect the location and growth of settlements", "Describe the functions of settlements and the interaction between town and country"],
        lesson: {
          title: "Where People Live",
          summary: "Describe the types, patterns, location and functions of settlements.",
          minutes: 40,
          notes: `## Settlement
A place where people live and carry on their activities — from a single homestead to a great city.

## Classification by size
**homestead → hamlet → village → town → city → conurbation**. A **conurbation** forms when neighbouring towns grow into one continuous built-up area; a **megalopolis** is a chain of them.

## Rural and urban settlements
| Rural | Urban |
|---|---|
| small population (in Nigeria, under 20 000) | large population |
| **primary activities**: farming, fishing, hunting, mining | **secondary and tertiary activities**: manufacturing, commerce, administration |
| few social amenities | many amenities: electricity, piped water, hospitals, higher institutions |
| low density of houses, built of local materials | high density; modern, storeyed buildings |
| people of similar culture | people of mixed origin |
| quiet; simple way of life | busy; complex |

## Settlement patterns
- **nucleated (clustered)** — buildings grouped closely together, often round a market, palace, well or road junction; favoured by defence, water supply and communal land ownership. Common in Yorubaland and Hausaland
- **dispersed (scattered)** — isolated homesteads set in their own farmland; common in parts of Igboland and the Tiv area
- **linear** — buildings strung out along a **road, river, coast or ridge**

## Factors affecting location (site)
- **water supply** — near rivers, springs and wells
- **relief** — level, well-drained land; in the past, hilltops for **defence** (Abeokuta, Idanre, Okene)
- **fertile soil** for farming
- **minerals** — Jos (tin), Enugu (coal), Port Harcourt and Warri (oil)
- **transport** — route centres, river crossings (Jebba, Onitsha, Lokoja), ports (Lagos, Calabar)
- **trade** — market centres (Kano, Onitsha, Aba)
- **administration** — capitals (Abuja, state capitals)
- **religion and education** — Ile-Ife, Sokoto; Nsukka, Zaria

## Growth of settlements
A village grows into a town when it gains industries, markets, good roads and administrative status. The growth of towns and the rising share of people living in them is **urbanisation**.

## Functions of settlements
### Rural
farming, fishing, lumbering, mining, craft work; supplying food and raw materials.
### Urban
- **commercial** — Onitsha, Aba, Kano, Lagos
- **industrial** — Lagos, Kaduna, Port Harcourt, Kano
- **administrative** — Abuja and state capitals
- **port** — Lagos, Port Harcourt, Warri, Calabar
- **mining** — Jos, Enugu
- **educational** — Ibadan, Zaria, Nsukka, Ile-Ife
- **religious and cultural** — Ile-Ife, Sokoto, Benin
- **transport (nodal)** — Kaduna, Kafanchan, Lokoja
- **tourist** — Jos, Calabar
Most large towns perform several functions.

## Interaction between settlements
Settlements depend on one another.
- **rural to urban**: food, raw materials, labour
- **urban to rural**: manufactured goods, banking, medical and educational services, markets, administration, employment
A town and the surrounding area it serves form its **sphere of influence (hinterland)**.

## Urban problems
overcrowding and housing shortage; slums; traffic congestion; unemployment; crime; pollution and poor waste disposal; pressure on water, electricity and health services; flooding.
### Solutions
town planning; low-cost housing; improved public transport; waste management; new towns; development of rural areas.`,
          examples: `**Example 1.** Describe a linear settlement. *Answer:* Buildings arranged **in a line along a road, river or coast**.

**Example 2.** Give two functions of Lagos. *Answer:* **Port** and **industrial and commercial centre**.

**Example 3.** State two services that towns provide for villages. *Answer:* **Hospitals** and **markets for farm produce**.`,
        },
        questions: [
          ["E", "A settlement in which most people are engaged in farming and fishing is", "a rural settlement", "an urban settlement", "a conurbation", "an industrial town", "Its activities are mainly primary."],
          ["E", "A settlement with buildings strung out along a road or river has a", "linear pattern", "nucleated pattern", "dispersed pattern", "radial pattern", "It follows the line of the feature."],
          ["E", "Abuja is best described as", "an administrative centre", "a mining town", "a fishing port", "a rural settlement", "It is the federal capital."],
          ["M", "A settlement pattern in which buildings are grouped closely together is described as", "nucleated", "dispersed", "linear", "isolated", "It is also called a clustered pattern."],
          ["M", "Jos and Enugu grew mainly as", "mining towns", "seaports", "religious centres", "fishing settlements", "They developed around tin and coal respectively."],
          ["M", "The correct order of settlements from the smallest to the largest is", "hamlet, village, town, city", "village, hamlet, city, town", "town, village, hamlet, city", "city, town, village, hamlet", "A hamlet is smaller than a village."],
          ["M", "Which of the following is a characteristic of urban settlements?", "a wide range of social amenities", "a small population", "dependence on farming", "houses built mainly of mud and thatch", "Towns offer electricity, hospitals and schools."],
          ["H", "The area surrounding a town that is served by the town is its", "sphere of influence", "conurbation", "site", "central business district", "It is also called the hinterland."],
          ["H", "Early settlements such as Abeokuta and Idanre were sited among hills mainly for", "defence", "mining", "irrigation", "tourism", "Hills gave protection from attack."],
          ["H", "A continuous built-up area formed when neighbouring towns grow and merge is called", "a conurbation", "a hamlet", "a nodal town", "a hinterland", "The Lagos metropolitan area is an example."],
        ],
      },
      {
        week: 4,
        title: "Transportation and communication in Nigeria",
        subtopics: ["Road and rail transport", "Water and air transport", "Pipelines and communication", "Importance and problems of transport"],
        objectives: ["Describe road and rail transport in Nigeria", "Describe water and air transport in Nigeria", "Describe pipelines and modern communication", "Explain the importance and problems of transport"],
        lesson: {
          title: "Moving People, Goods and Information",
          summary: "Describe the modes of transport and communication in Nigeria and their problems.",
          minutes: 40,
          notes: `## Transport and communication
**Transport** is the movement of people and goods from place to place; **communication** is the transmission of information and ideas.

## Road transport
The most widely used mode in Nigeria. Roads are federal (trunk A), state (trunk B) and local.
| Advantages | Disadvantages |
|---|---|
| **door-to-door** service; flexible | traffic congestion and **accidents** |
| reaches remote areas | limited carrying capacity |
| cheap and fast over short distances | costly over long distances; roads damaged by rain and heavy lorries |
| cheaper to build than railways | air pollution |

## Rail transport
The first line was built from **Lagos** (1898), reaching Ibadan, then **Kano** (1912). The **western line** runs Lagos–Ibadan–Kaduna–Kano–Nguru; the **eastern line** runs Port Harcourt–Enugu–Makurdi–Kafanchan–Jos/Maiduguri; the two meet at **Kaduna/Kafanchan**. The old lines are narrow gauge; newer **standard-gauge** lines include Abuja–Kaduna, Lagos–Ibadan and Itakpe–Warri.
| Advantages | Disadvantages |
|---|---|
| carries **bulky goods** cheaply over long distances | very **expensive to build** and maintain |
| safe; not affected by traffic | inflexible — fixed routes; no door-to-door service |
| runs to a timetable | slow on the old single track; affected by steep relief |

## Water transport
- **inland waterways**: the Niger and Benue (river ports: Lokoja, Onitsha, Baro, Makurdi), the creeks and lagoons of the coast
- **ocean transport**: seaports at **Lagos (Apapa and Tin Can Island)**, **Port Harcourt**, **Onne**, **Warri**, **Calabar** and Lekki; Bonny and Forcados are oil terminals
| Advantages | Disadvantages |
|---|---|
| **cheapest** for heavy, bulky goods | **slowest** |
| the way is natural — no construction cost | seasonal rivers; rapids, sandbanks and water weeds |
| carries international trade | ports are costly; risk of storms and piracy |

## Air transport
International airports: **Lagos** (Murtala Muhammed), **Abuja** (Nnamdi Azikiwe), **Kano** (Mallam Aminu Kano), **Port Harcourt** and **Enugu**; many domestic airports.
| Advantages | Disadvantages |
|---|---|
| **fastest**; crosses all barriers | **most expensive** |
| suits passengers, mail and light, valuable or perishable goods | cannot carry bulky goods; affected by weather; accidents are often fatal |

## Pipelines
Carry **crude oil, refined products, natural gas** and water — from oil fields to refineries (Port Harcourt, Warri, Kaduna) and terminals. Cheap to run and continuous, but costly to lay, limited to fluids, and liable to leakage and vandalism.

## Communication
- **telecommunications**: mobile phones (GSM, introduced in 2001), the internet, satellites, fibre-optic cables
- **mass media**: radio, television, newspapers
- **postal and courier services**
Modern communication speeds up business and education, links rural and urban areas, and supports banking and government.

## Importance of transport
- movement of people, raw materials and finished goods
- promotes **trade**, agriculture and industry
- growth of towns; opens up remote areas
- employment and government revenue
- national unity, defence and the spread of ideas
- tourism

## Problems
poor maintenance and bad roads; inadequate funds; few and old vehicles, trains and aircraft; congestion; accidents; difficult relief, rivers and swamps; seasonal rivers; high fuel costs; insecurity; vandalism of rails and pipelines.
### Solutions
regular maintenance; more investment, including private participation; modernising railways and ports; dredging rivers; enforcing traffic rules; developing mass transit.`,
          examples: `**Example 1.** Which mode of transport is cheapest for bulky goods over long distances by land? *Answer:* **Rail**.

**Example 2.** Name three seaports in Nigeria. *Answer:* **Lagos (Apapa), Port Harcourt and Calabar**.

**Example 3.** Give two disadvantages of air transport. *Answer:* It is **very expensive** and **cannot carry bulky goods**.`,
        },
        questions: [
          ["E", "The most widely used means of transport in Nigeria is", "road transport", "rail transport", "air transport", "pipeline", "It provides door-to-door service."],
          ["E", "The fastest means of transport is", "air transport", "water transport", "rail transport", "road transport", "It is also the most expensive."],
          ["E", "Crude oil is moved from oil fields to refineries mainly by", "pipelines", "aeroplanes", "bicycles", "telephone", "They carry fluids continuously."],
          ["M", "The first railway line in Nigeria started from", "Lagos", "Port Harcourt", "Kano", "Enugu", "Construction began in 1898."],
          ["M", "A major advantage of rail transport is that it", "carries bulky goods cheaply over long distances", "gives door-to-door service", "is cheap to construct", "can reach every village", "It suits heavy loads such as cement and minerals."],
          ["M", "Which of the following is an inland river port in Nigeria?", "Lokoja", "Lagos", "Calabar", "Bonny", "It lies at the Niger–Benue confluence."],
          ["M", "The cheapest means of moving heavy and bulky goods between continents is", "ocean transport", "air transport", "road transport", "rail transport", "Ships carry very large loads at low cost."],
          ["H", "Inland water transport in Nigeria is hindered mainly by", "seasonal changes in water level, rapids and sandbanks", "the absence of rivers", "too many seaports", "the great speed of boats", "Rivers are shallow in the dry season."],
          ["H", "The western and eastern railway lines of Nigeria are linked in the area of", "Kaduna and Kafanchan", "Lagos and Ibadan", "Port Harcourt and Aba", "Maiduguri and Nguru", "Kafanchan is the junction for the eastern line."],
          ["H", "Road transport is preferred to rail for the distribution of goods within a city because it", "is flexible and reaches individual premises", "carries heavier loads", "is free from congestion", "needs no fuel", "Vehicles can use many routes."],
        ],
      },
      {
        week: 5,
        title: "Introduction to geographic information systems",
        subtopics: ["Meaning of GIS", "Components of GIS", "Geographic data: spatial and attribute", "Sources of data and uses of GIS"],
        objectives: ["Define a geographic information system", "List the components of GIS", "Distinguish spatial from attribute data and vector from raster data", "State the sources of geographic data and the uses of GIS"],
        lesson: {
          title: "GIS Basics",
          summary: "Explain what a geographic information system is, its components, data and uses.",
          minutes: 40,
          notes: `## Meaning
A **geographic information system (GIS)** is a **computer-based system for capturing, storing, checking, manipulating, analysing and displaying data that are referenced to locations on the earth's surface**.
In simple terms, it links **what** something is with **where** it is, and presents the result as maps, tables and charts.

## Components of GIS
1. **hardware** — the computer and its attachments: scanner, digitiser, GPS receiver, printer and plotter
2. **software** — the programs that store, analyse and display the data (for example ArcGIS, QGIS)
3. **data** — the geographic information itself; the most important and most costly component
4. **people (users)** — the trained personnel who operate the system and interpret the results
5. **procedures (methods)** — the rules and steps followed to get reliable results

## Geographic data
Data that describe features and their locations on the earth.
### Spatial (locational) data
Tell **where** a feature is and what shape it has, using coordinates (latitude and longitude, or grid references).
### Attribute (non-spatial) data
Tell **what** the feature is — its name, type, population, height, ownership. They are stored in tables linked to the spatial data.
*Example:* a school — spatial data: its coordinates; attribute data: its name, number of students and type.

## Data models
### Vector data
Features are represented by
- **points** — wells, schools, towns on a small-scale map
- **lines** — roads, rivers, railways, pipelines
- **polygons (areas)** — lakes, farms, states, forest reserves
Vector data are precise and suit features with clear boundaries.
### Raster data
The area is divided into a grid of small cells (**pixels**), each holding a value. Satellite images, aerial photographs and scanned maps are raster data. They suit features that change gradually, such as rainfall, temperature and elevation.

## Layers
A GIS stores different themes — relief, drainage, roads, settlements, land use — as separate **layers** that can be **overlaid** to study how they relate.

## Sources of geographic data
- **existing maps** (topographical, cadastral) — scanned or digitised
- **field survey** and land surveying
- **Global Positioning System (GPS)** — satellites that give the exact coordinates of a point
- **remote sensing** — satellite images and aerial photographs
- **census and statistical records**; administrative records

## Functions
data **capture (input)**; **storage** and management; **query** (asking questions such as "where is …?" and "what is at …?"); **analysis** (measuring distance and area, overlay, buffering); **display (output)** as maps, charts and reports.

## Uses of GIS
- **urban and regional planning** — land use, siting of schools and hospitals
- **agriculture** — soil and crop mapping
- **transport** — route planning, vehicle tracking, navigation
- **environmental management** — monitoring deforestation, erosion, flooding, oil spills
- **census and population mapping**; delimiting electoral constituencies
- **disaster management** — flood and disease mapping
- **utilities** — electricity, water and telephone networks
- **mineral exploration**; **defence and security**; land administration; business location

## Advantages over paper maps
large amounts of data stored compactly; quick updating and retrieval; easy change of scale; several layers combined; faster and more accurate analysis.
## Limitations
expensive equipment and software; need for trained staff and steady electricity; data may be scarce or outdated.`,
          examples: `**Example 1.** List the five components of GIS. *Answer:* **Hardware, software, data, people and procedures**.

**Example 2.** How would a river be represented in vector data? *Answer:* As a **line**.

**Example 3.** Give two uses of GIS. *Answer:* **Urban planning** and **monitoring of environmental changes**.`,
        },
        questions: [
          ["E", "GIS stands for", "geographic information system", "general information service", "global internet system", "geological instrument set", "It handles data linked to locations on the earth."],
          ["E", "The physical equipment of a GIS, such as the computer and scanner, is the", "hardware", "software", "data", "procedure", "Software refers to the programs."],
          ["E", "In GIS, a well or a school is best represented as a", "point", "line", "polygon", "pixel grid", "It occupies a single location."],
          ["M", "Data that describe what a feature is, such as its name and population, are called", "attribute data", "spatial data", "raster data", "vector data", "They are stored in tables."],
          ["M", "A satellite image is an example of", "raster data", "vector data", "attribute data", "a polygon", "It is made up of pixels."],
          ["M", "In vector data, a lake is represented as a", "polygon", "point", "line", "pixel", "It covers an area with a boundary."],
          ["M", "The satellite-based system used to find the exact coordinates of a place is the", "Global Positioning System", "Stevenson screen", "census", "plotter", "It is a major source of spatial data."],
          ["H", "The component of GIS that is regarded as the most important and most costly to obtain is", "data", "the printer", "the monitor", "the keyboard", "Without reliable data the system gives no useful result."],
          ["H", "Placing maps of roads, rivers and settlements on top of one another in a GIS to study their relationships is called", "overlay", "digitising", "printing", "scanning", "Each theme is stored as a separate layer."],
          ["H", "An advantage of GIS over traditional paper maps is that", "data can be updated and analysed quickly", "it needs no electricity", "it requires no training", "it is cheaper to set up", "Layers can be combined and changed with ease."],
        ],
      },
    ],
  },
];
