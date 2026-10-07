import type { TermPlan } from "../types";

/** SS3 Solar PV Installation and Maintenance, Second and Third Terms — NERDC 2025 scheme. */
export const ss3t2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "SSCE Preparation: Review of Key Solar PV Concepts",
      subtopics: ["Basic electrical quantities", "Solar resource and module ratings", "System components", "Series and parallel connection"],
      objectives: ["Recall the basic electrical quantities and laws", "Interpret module ratings and the solar resource", "State the function of each system component", "Calculate voltage and current of series and parallel connections"],
      lesson: {
        title: "The Essentials of Solar PV",
        summary: "A review of the electrical ideas, ratings and components on which every solar design rests.",
        minutes: 80,
        notes: `## Electrical quantities
| Quantity | Symbol | Unit |
|---|---|---|
| voltage | V | volt (V) |
| current | I | ampere (A) |
| resistance | R | ohm (Ω) |
| power | P | watt (W) |
| energy | E | watt-hour (Wh), kWh |
| battery capacity | C | ampere-hour (Ah) |

**Ohm's law:** $V = IR$. **Power:** $P = VI = I^2R$. **Energy:** $E = P \\times t$.
A 12 V lamp drawing 2 A uses $12 \\times 2 = 24$ W; in 5 hours it uses 120 Wh.

**d.c.** flows in one direction (panels, batteries); **a.c.** reverses regularly (grid, 230 V, 50 Hz).

## The solar resource
- **irradiance** — solar power per unit area (W/m²); **1000 W/m²** at standard test conditions (STC)
- **irradiation / insolation** — energy per area per day (kWh/m²/day)
- **peak sun hours (PSH)** — the number of hours at 1000 W/m² equivalent to the day's energy; Nigeria: about **4–6 h**
- **tilt angle** — roughly equal to the **latitude** (about 10–15° in Nigeria, never flat, to shed water and dust); **orientation** — facing **south** in the northern hemisphere
- **shading** greatly reduces output

## Module ratings (at STC: 1000 W/m², 25 °C, AM 1.5)
| Rating | Meaning |
|---|---|
| **Pmax (Wp)** | maximum power |
| **Voc** | open-circuit voltage |
| **Isc** | short-circuit current |
| **Vmp, Imp** | voltage and current at maximum power; $P_{max} = V_{mp} \\times I_{mp}$ |
Output **falls as temperature rises**; current rises with irradiance. **Bypass diodes** limit the effect of shading; **blocking diodes** prevent reverse current at night.

## Components
| Component | Function |
|---|---|
| **PV array** | generates d.c. |
| **charge controller** (PWM or **MPPT**) | regulates charging; prevents over-charge and deep discharge |
| **battery** | stores energy |
| **inverter** | converts d.c. to a.c. |
| **combiner box** | joins strings; holds fuses and surge protection |
| **breakers, fuses, isolators** | protection and switching |
| **cables and MC4 connectors** | carry current |
| **mounting structure** | holds modules at the right tilt |
| **earthing and lightning protection** | safety |

## Series and parallel
- **series** (+ to −): **voltages add**, current stays the same
- **parallel** (+ to +, − to −): **currents add**, voltage stays the same
Two 12 V 100 Ah batteries: series → 24 V 100 Ah; parallel → 12 V 200 Ah. Stored energy either way $= 2400$ Wh.

## Batteries
**lead–acid** (flooded, AGM, gel — tubular for deep cycle) and **lithium (LiFePO₄)**. **Depth of discharge (DoD):** about 50% for lead–acid, 80–90% for lithium. **State of charge (SoC)** = 100% − DoD.

## Safety
isolate before working; d.c. arcs are dangerous; insulated tools; **PPE** (gloves, goggles, harness on roofs); no smoking near batteries (hydrogen); correct polarity.`,
        examples: `**Example 1.** A module has Vmp = 36 V and Imp = 10 A. Find Pmax. *Answer:* $36 \\times 10 = \\mathbf{360}$ **W**.

**Example 2.** Four 12 V 200 Ah batteries are connected in series. State the bank's voltage and capacity. *Answer:* **48 V, 200 Ah**.

**Example 3.** State the function of a charge controller. *Answer:* It **regulates battery charging**, preventing over-charge and deep discharge.`,
      },
      questions: [
        ["E", "The unit of electrical power is the", "watt", "ohm", "ampere-hour", "volt", "Power = voltage × current."],
        ["E", "The component that converts d.c. to a.c. in a solar system is the", "inverter", "charge controller", "battery", "combiner box", "Household appliances use a.c."],
        ["E", "The component that stores electrical energy for use at night is the", "battery", "module", "isolator", "fuse", "It is charged during the day."],
        ["M", "Standard test conditions for PV modules specify an irradiance of", "1000 W/m²", "500 W/m²", "100 W/m²", "2000 W/m²", "With a cell temperature of 25 °C."],
        ["M", "Three modules each of 40 V and 9 A are connected in series. The string output is", "120 V, 9 A", "40 V, 27 A", "120 V, 27 A", "40 V, 9 A", "In series the voltages add."],
        ["M", "Two 12 V 150 Ah batteries in parallel give", "12 V, 300 Ah", "24 V, 150 Ah", "24 V, 300 Ah", "12 V, 150 Ah", "In parallel the capacities add."],
        ["M", "The module rating measured with its terminals not connected to any load is", "Voc", "Isc", "Imp", "Pmax", "Open-circuit voltage is the highest voltage."],
        ["H", "A 24 V appliance draws 5 A for 6 hours. The energy used is", "720 Wh", "120 Wh", "144 Wh", "29 Wh", "24 × 5 × 6. Answer: 720 Wh."],
        ["H", "As the temperature of a PV module rises, its power output", "decreases", "increases greatly", "stays the same", "doubles", "Voltage falls with temperature."],
        ["H", "The diode that allows current to pass round a shaded group of cells is the", "bypass diode", "blocking diode", "zener diode", "light-emitting diode", "It prevents hot spots and large losses."],
      ],
    },
    {
      week: 2,
      title: "Worked Theory Problems: Sizing a Solar PV System",
      subtopics: ["Load assessment", "Battery sizing", "Array sizing", "Inverter, controller and cable sizing"],
      objectives: ["Prepare a load schedule and find the daily energy demand", "Size a battery bank", "Size a PV array", "Select an inverter, charge controller and cable"],
      lesson: {
        title: "Sizing Step by Step",
        summary: "The standard calculations for designing a stand-alone solar system, with worked figures.",
        minutes: 80,
        notes: `## Step 1 — Load assessment
List each appliance, its **power**, **number** and **hours of use**.
| Load | W | No. | h/day | Wh/day |
|---|---|---|---|---|
| LED lamps | 10 | 6 | 5 | 300 |
| fan | 60 | 2 | 8 | 960 |
| TV | 80 | 1 | 5 | 400 |
| laptop | 60 | 1 | 4 | 240 |
| **total** | | | | **1900** |

**Total connected load** $= 60 + 120 + 80 + 60 = 320$ W.
Allow for **losses** (inverter, wiring) — divide by about 0.85: $1900 \\div 0.85 \\approx 2235$ Wh/day.

## Step 2 — System voltage
up to about 1 kW → **12 V**; 1–3 kW → **24 V**; above → **48 V**. Higher voltage means lower current and thinner cables.

## Step 3 — Battery bank
$$\\text{capacity (Ah)} = \\frac{\\text{daily energy} \\times \\text{days of autonomy}}{\\text{system voltage} \\times \\text{DoD}}$$
For 2235 Wh, 1 day, 24 V, DoD 0.5: $\\dfrac{2235}{24 \\times 0.5} \\approx 186$ Ah → use **two 12 V 200 Ah batteries in series**.

## Step 4 — PV array
$$\\text{array (Wp)} = \\frac{\\text{daily energy}}{\\text{PSH} \\times \\text{derating factor}}$$
With PSH 5 and derating 0.75: $\\dfrac{2235}{5 \\times 0.75} = 596$ Wp → **two 300 W modules**.
**Number of modules** = array Wp ÷ module Wp (round **up**).

## Step 5 — Charge controller
$$I_{controller} \\geq 1.25 \\times \\frac{\\text{array Wp}}{\\text{battery voltage}}$$
$600 \\div 24 = 25$ A; $\\times 1.25 = 31$ A → **40 A MPPT**. Check that the array **Voc** (at low temperature) is below the controller's maximum input voltage.

## Step 6 — Inverter
Rated at least **1.25–1.3 × total connected load**, and able to carry **surge** from motors (3–6 × running power). For 320 W: $\\geq 400$ W → a **1 kVA 24 V pure sine-wave** inverter gives room for growth.
**kVA and kW:** $kW = kVA \\times \\text{power factor}$; 1 kVA at 0.8 pf = 800 W.

## Step 7 — Cables and protection
Current $I = P \\div V$. Choose a cable whose **current rating exceeds the design current** and keeps **voltage drop below about 3%**:
$$V_{drop} = \\frac{2 \\times L \\times I \\times \\rho}{A}$$
($L$ = one-way length, $\\rho \\approx 0.0175\\ \\Omega\\,\\text{mm}^2/\\text{m}$ for copper, $A$ = cross-section in mm²). Shorter, thicker cables lose less.
Fuses and breakers are rated about **1.25 × the circuit current**, below the cable's rating.

## Useful checks
- **battery energy (Wh)** = V × Ah; usable = × DoD
- **backup time (h)** = usable battery Wh × inverter efficiency ÷ load W
- a 24 V 200 Ah bank at 50% DoD holds $24 \\times 200 \\times 0.5 = 2400$ Wh usable; with a 300 W load and 0.9 efficiency it lasts $2400 \\times 0.9 \\div 300 = 7.2$ h.

## Common errors
ignoring losses; undersizing the battery; mixing old and new or unequal batteries; exceeding controller Voc; thin cables; counting peak load as daily energy.`,
        examples: `**Example 1.** Five 20 W lamps are used for 6 hours daily. Find the daily energy. *Answer:* $5 \\times 20 \\times 6 = \\mathbf{600}$ **Wh**.

**Example 2.** Daily energy 3000 Wh; PSH 5; derating 0.75; module 400 W. How many modules? *Answer:* $3000 \\div 3.75 = 800$ Wp → **2 modules**.

**Example 3.** Daily energy 2400 Wh; 12 V system; DoD 0.5; one day of autonomy. Find the battery capacity. *Answer:* $2400 \\div (12 \\times 0.5) = \\mathbf{400}$ **Ah**.`,
      },
      questions: [
        ["E", "The first step in sizing a solar system is to", "assess the load", "buy the panels", "dig the earth pit", "mount the inverter", "The design starts from the energy required."],
        ["E", "Energy consumed is found by multiplying power by", "time", "voltage", "resistance", "distance", "E = P × t. Answer: time."],
        ["E", "Four 15 W lamps used for 5 hours a day consume", "300 Wh", "60 Wh", "75 Wh", "20 Wh", "4 × 15 × 5. Answer: 300 Wh."],
        ["M", "A daily energy need of 1200 Wh on a 12 V system with 50% depth of discharge and one day of autonomy requires a battery of", "200 Ah", "100 Ah", "50 Ah", "400 Ah", "1200 ÷ (12 × 0.5)."],
        ["M", "A daily demand of 3000 Wh, with 5 peak sun hours and a derating factor of 0.8, needs an array of", "750 Wp", "600 Wp", "480 Wp", "1200 Wp", "3000 ÷ (5 × 0.8)."],
        ["M", "An array of 1500 Wp is to be built from 300 W modules. The number of modules required is", "5", "3", "15", "50", "1500 ÷ 300. Answer: 5."],
        ["M", "A higher system voltage is chosen for larger systems mainly to", "reduce current and cable size", "increase current", "avoid using batteries", "reduce the number of panels", "For the same power, higher voltage means lower current."],
        ["H", "A 900 W array charges a 24 V battery. With a safety factor of 1.25, the minimum charge-controller rating is about", "47 A", "30 A", "37.5 A", "22 A", "900 ÷ 24 = 37.5 A; × 1.25 ≈ 47 A."],
        ["H", "A 12 V 200 Ah battery discharged to 50% supplies a 240 W load through an inverter of 100% efficiency for", "5 hours", "10 hours", "2.5 hours", "20 hours", "Usable energy 1200 Wh ÷ 240 W."],
        ["H", "A 2 kVA inverter at a power factor of 0.8 can supply a real power of", "1600 W", "2000 W", "2500 W", "800 W", "kW = kVA × power factor."],
      ],
    },
    {
      week: 4,
      title: "Mock Installation Project I: Site Survey and System Design",
      subtopics: ["Site survey", "Shading and orientation analysis", "System design documents", "Bill of quantities and costing"],
      objectives: ["Carry out a site survey for a PV installation", "Assess orientation, tilt and shading", "Prepare a single-line diagram and layout", "Prepare a bill of quantities and quotation"],
      lesson: {
        title: "From Site Visit to Design",
        summary: "The information to collect on site and the documents that make up a complete design.",
        minutes: 80,
        notes: `## The project
Working in groups, design a system for a named client (e.g. a three-bedroom flat, a clinic or a small shop).

## Site survey
A **site survey** is a **visit to collect the information needed for design and installation**.
### What to record
- **client's needs** — appliances, hours, budget, future growth
- **load audit** — nameplate ratings; measure with a clamp meter or energy meter
- **roof or ground:** type (aluminium sheet, concrete, tile), **condition and strength**, area available, **orientation (azimuth)** and **pitch**
- **shading** — trees, parapets, tanks, neighbouring buildings; at different times of day and year
- **location for inverter and batteries** — cool, dry, ventilated, secure, close to array and distribution board
- **cable routes** and distances
- existing **electrical installation** — distribution board, earthing, changeover, grid and generator supply
- **access** for materials and safe working at height
- **environment** — dust, salt air, wind, lightning, theft risk
- site **coordinates** and photographs

### Tools
tape, compass or phone app, **inclinometer**, **solar pathfinder / shading app**, clamp meter, multimeter, camera, ladder, survey form.

## Orientation, tilt and spacing
face **south** (in Nigeria) at a tilt near the **latitude**, minimum about 10°; keep rows far enough apart to avoid **inter-row shading**; leave walkways for cleaning. Even **partial shading of one cell** can cut a string's output sharply.

## Design documents
1. **load schedule** and energy calculation
2. **sizing calculations** — array, battery, controller, inverter, cables, protection
3. **single-line diagram (SLD)** — array → combiner (fuses, SPD) → d.c. isolator → charge controller / hybrid inverter ↔ battery (with fuse) → a.c. breaker → distribution board → loads; earthing shown
4. **array layout** on the roof plan; string configuration
5. **equipment specifications** (data sheets)
6. **bill of quantities** and cost
7. **work plan** and safety plan (risk assessment)

## String design checks
- string **Voc** (cold) below the inverter/controller maximum
- string **Vmp** within the MPPT range
- string current within input limits
- identical modules, tilt and orientation in each string

## Bill of quantities (BoQ)
A **BoQ** lists **every item, its quantity, unit rate and amount**:
modules; mounting rails and clamps; inverter; batteries and rack; controller; combiner box; d.c. and a.c. breakers, fuses, SPDs; cables (d.c., a.c., battery, earth); MC4 connectors; lugs, trunking, conduit; earth rod; consumables; **labour**; transport; **contingency** (5–10%); profit.
$$\\text{quotation} = \\text{materials} + \\text{labour} + \\text{transport} + \\text{contingency} + \\text{profit}$$

*Materials ₦1 800 000, labour ₦200 000, transport ₦50 000, contingency 5% of materials (₦90 000), profit ₦260 000 → quotation ₦2 400 000.*

## Presenting to the client
explain what the system **will and will not power**; backup hours; warranty; maintenance needs; payment terms; **payback** = cost ÷ annual savings.`,
        examples: `**Example 1.** What is a site survey? *Answer:* A **visit to gather the information needed** to design and install the system.

**Example 2.** Name three items recorded about a roof. *Answer:* Its **type, orientation** and **shading**.

**Example 3.** A system costs ₦2 400 000 and saves ₦600 000 a year in fuel. Find the payback period. *Answer:* $2\\,400\\,000 \\div 600\\,000 = \\mathbf{4}$ **years**.`,
      },
      questions: [
        ["E", "A visit to collect information for designing a solar installation is a", "site survey", "commissioning test", "handover", "load shedding", "It comes before design."],
        ["E", "In Nigeria, fixed solar arrays should generally face", "south", "north", "east only", "downwards", "Nigeria lies north of the equator."],
        ["E", "The document listing all items, quantities and prices for a project is the", "bill of quantities", "single-line diagram", "data sheet", "warranty card", "It is the basis of the quotation."],
        ["M", "The instrument used to measure the pitch of a roof is the", "inclinometer", "ammeter", "hydrometer", "megger", "It reads the angle of tilt."],
        ["M", "Batteries and inverters should be located in a place that is", "cool, dry and ventilated", "hot and sealed", "exposed to rain", "in direct sunlight", "Heat shortens their life and gases must escape."],
        ["M", "A simplified drawing showing how the components of the system are connected is the", "single-line diagram", "bill of quantities", "load schedule", "site photograph", "It shows sources, protection and loads."],
        ["M", "An allowance added to a quotation for unforeseen costs is the", "contingency", "discount", "deposit", "tariff", "It is commonly 5–10%."],
        ["H", "A solar system costing ₦3 000 000 saves ₦750 000 a year. The payback period is", "4 years", "2.5 years", "5 years", "0.25 year", "3 000 000 ÷ 750 000."],
        ["H", "When designing a string, the open-circuit voltage at the lowest expected temperature must be", "below the maximum input voltage of the inverter or controller", "above the inverter's maximum voltage", "equal to the battery voltage", "zero", "Voltage rises in the cold and could damage the equipment."],
        ["H", "Rows of ground-mounted modules are spaced apart mainly to", "avoid one row shading another", "use more cable", "increase wind load", "make cleaning harder", "Inter-row shading reduces yield, especially at low sun angles."],
      ],
    },
    {
      week: 6,
      title: "Mock Installation Project II: Installation and Commissioning",
      subtopics: ["Preparation and safety", "Mounting and wiring", "Earthing and protection", "Testing, commissioning and handover"],
      objectives: ["Plan an installation safely", "Describe the steps of mounting and wiring", "Explain earthing and protection", "Carry out commissioning tests and hand over the system"],
      lesson: {
        title: "Installing and Commissioning the System",
        summary: "The safe sequence for building a PV system and proving that it works.",
        minutes: 80,
        notes: `## Preparation
check materials against the BoQ; inspect for damage; **tools:** drill, spanners, torque wrench, **MC4 crimping tool and spanner**, cable cutter and stripper, lug crimper, multimeter, clamp meter, insulation tester, spirit level, ladder.

## Safety
- **risk assessment** and toolbox talk
- **PPE:** helmet, insulated gloves, goggles, safety boots, **harness** for roof work
- **work at height:** secure ladder (1 out for every 4 up), roof ladders, never work in rain or high wind
- modules produce voltage **whenever light falls on them** — cover or keep connectors apart; never disconnect d.c. **under load**
- **batteries:** remove jewellery; insulated tools; ventilate; no sparks; correct lifting
- **lock out and tag out** a.c. supplies
- first-aid kit and fire extinguisher (CO₂ or dry powder) on site

## Installation sequence
1. **Mounting structure** — fix rails to rafters or purlins with roof hooks or brackets; **seal all penetrations** against leaks; level and align.
2. **Modules** — fix with mid and end clamps at the specified points and **torque**; leave an air gap beneath for cooling.
3. **String wiring** — connect modules with MC4 connectors (series/parallel as designed); secure cables with UV-resistant clips, off the roof surface; label strings.
4. **Combiner box / d.c. isolator** — fuses and **surge protection device (SPD)**.
5. **Inverter and controller** — mount on a non-combustible wall with clearance for ventilation, out of direct sun.
6. **Battery bank** — on a rack; connect with correct lugs, equal-length cables, tight terminals; **battery fuse** close to the bank.
7. **A.C. side** — breaker, changeover / ATS, distribution board; separate **solar-backed circuits** if needed.
8. **Earthing** — bond module frames, rails and enclosures; earth rod; a.c. earth.
9. **Labelling** — warning signs, isolator labels, single-line diagram at the board.

**Order of connection:** **battery to controller/inverter first, then the array, then the loads**. Disconnect in the **reverse** order.

## Good workmanship
correct polarity; red for positive, black for negative; tight, crimped terminations; cable glands; drip loops; no joints inside conduit; neat trunking; mixed metals avoided (corrosion).

## Earthing and protection
- **earthing** gives fault current a safe path and protects against shock and lightning; earth resistance preferably **below about 5 Ω**
- **fuses and breakers** protect cables against over-current; d.c.-rated devices on the d.c. side
- **SPDs** divert lightning surges
- **RCD** on a.c. circuits for shock protection

## Commissioning
**Commissioning** is **inspecting, testing and starting up the system to confirm it works as designed**.
### Visual inspection
mounting, cable routes, terminations, labels, ventilation.
### Tests (before energising)
| Test | Purpose |
|---|---|
| **continuity** | of earth and bonding conductors |
| **polarity** | correct + and − on each string |
| **string Voc** | compare with expected (number of modules × Voc) |
| **string Isc** | with a d.c. clamp meter |
| **insulation resistance** | between conductors and earth (megger) |
| **earth resistance** | earth electrode |
| **battery voltage** | each unit and the bank |
### Start-up and functional checks
switch on in the correct sequence; configure battery type and charge settings; confirm charging, inverter output (**230 V, 50 Hz**), changeover operation, load test, monitoring.

## Handover
**documents:** as-built diagram, test results, data sheets and manuals, warranty cards, maintenance schedule; **train the user** — what loads to run, reading the display, isolating in an emergency, cleaning; obtain a signed **completion certificate**.`,
        examples: `**Example 1.** In what order are components connected? *Answer:* **Battery first, then the array, then the loads**.

**Example 2.** A string has four modules each with Voc = 45 V. What open-circuit voltage is expected? *Answer:* $4 \\times 45 = \\mathbf{180}$ **V**.

**Example 3.** What is commissioning? *Answer:* **Inspecting, testing and starting up** the system to confirm it works as designed.`,
      },
      questions: [
        ["E", "The connectors commonly used to join solar modules are", "MC4 connectors", "13 A plugs", "bayonet caps", "RJ45 plugs", "They are weatherproof d.c. connectors."],
        ["E", "A safety harness is required when", "working on a roof", "reading a data sheet", "crimping lugs on the ground", "writing a quotation", "It protects against falls from height."],
        ["E", "By convention, the positive d.c. cable is coloured", "red", "black", "green and yellow", "blue", "Black is used for negative."],
        ["M", "When connecting a charge controller, the first item to be connected is the", "battery", "PV array", "load", "earth rod only", "The controller needs the battery to detect system voltage."],
        ["M", "The instrument used for an insulation-resistance test is the", "insulation tester (megger)", "hydrometer", "inclinometer", "compass", "It applies a high test voltage."],
        ["M", "A device fitted to divert lightning-induced surges to earth is the", "surge protection device", "bypass diode", "charge controller", "MC4 connector", "It protects the inverter and modules."],
        ["M", "Inspecting, testing and starting up a new system to prove it works is", "commissioning", "decommissioning", "sizing", "surveying", "It is followed by handover."],
        ["H", "A string of five modules, each with Voc of 40 V, measures only 160 V. The most likely cause is", "one module not contributing", "too much sunlight", "an oversized battery", "a high earth resistance", "The reading is one module short of the expected 200 V."],
        ["H", "D.C. connectors must not be pulled apart under load because", "a dangerous arc may form", "the battery will overcharge", "the modules will stop working permanently", "the frequency will change", "D.C. arcs do not self-extinguish easily."],
        ["H", "The correct output of a stand-alone inverter for Nigerian appliances is", "230 V, 50 Hz", "110 V, 60 Hz", "415 V, 25 Hz", "12 V d.c.", "This matches the national supply standard."],
      ],
    },
    {
      week: 8,
      title: "Mock Installation Project III: Troubleshooting and Maintenance",
      subtopics: ["Types of maintenance", "Routine maintenance tasks", "Systematic troubleshooting", "Common faults and remedies"],
      objectives: ["Distinguish the types of maintenance", "Carry out routine maintenance on a PV system", "Apply a systematic approach to fault finding", "Diagnose and remedy common faults"],
      lesson: {
        title: "Keeping the System Working",
        summary: "Regular care of a PV system and a methodical way of tracing faults.",
        minutes: 80,
        notes: `## Types of maintenance
| Type | Meaning |
|---|---|
| **preventive (routine)** | scheduled care to prevent failure |
| **corrective (breakdown)** | repair after a fault |
| **predictive** | based on monitoring data and trends |

## Routine maintenance
### Array
- **clean modules** with soft cloth or sponge and clean water, early morning or evening; **no abrasives, detergents or pressure washers**; more often in harmattan
- check for **cracks, hot spots, discolouration, delamination**, bird droppings
- trim trees causing **shading**
- check mounting bolts, clamps and corrosion
- inspect cables, connectors and junction boxes for damage, rodents and loose contacts

### Batteries
- keep **clean, dry and ventilated**
- check **terminals** — tight, free of corrosion; apply petroleum jelly
- **flooded lead–acid:** check electrolyte level and top up with **distilled water** only; check **specific gravity** with a **hydrometer** (about 1.25–1.28 when fully charged)
- measure each battery's **voltage**; a fully charged 12 V lead–acid battery at rest reads about **12.6–12.8 V**
- avoid deep discharge; give **equalisation charge** where recommended
- never mix old and new batteries

### Inverter and controller
- clean dust from vents and fans; check indicators, **error codes** and logs
- check settings; tighten terminals
- ensure clearance and ventilation

### General
test breakers, RCD and SPD indicators; check earthing; keep a **maintenance log**.

## Systematic troubleshooting
1. **Ask the user** — what happened, when, what changed?
2. **Observe** — indicators, error codes, smells, sounds, damage.
3. **Check the simple things first** — switches, breakers, fuses, loose cables.
4. **Divide the system** into sections — array, controller, battery, inverter, loads.
5. **Measure** — compare readings with expected values.
6. **Identify and correct** the fault.
7. **Test** the system; **record** the fault and remedy.

Always work **safely**: isolate before touching; use correctly rated meters.

## Common faults
| Symptom | Possible causes | Remedy |
|---|---|---|
| **low or no PV output** | dirt, shading, loose or burnt MC4, blown string fuse, faulty module or diode, tripped isolator | clean; remove shade; re-terminate; replace |
| **battery not charging** | controller fault or wrong setting, blown fuse, bad connection, low array output | check settings and connections; replace |
| **battery drains quickly** | aged or sulphated battery, overload, undersized bank, deep discharges | test and replace; reduce load |
| **inverter shuts down / alarm** | low battery, **overload**, over-temperature, short circuit | recharge; reduce load; improve ventilation |
| **inverter will not start** | no battery supply, blown fuse, reversed polarity damage | check supply; repair |
| **breaker trips** | overload, short circuit, earth fault | find and clear the fault |
| **hot or melted terminals** | loose connection, undersized cable | re-terminate; upsize |
| **swollen or hot battery** | over-charging, internal fault | isolate; replace; correct settings |
| **low voltage at loads** | long thin cables — voltage drop | shorter or thicker cable |

## Measurements that guide diagnosis
string **Voc** and **Isc** compared with data sheet (adjusted for sunlight); battery voltage under load; a.c. output voltage and frequency; **thermal camera** to find hot spots.

## When to replace
modules — typically warranted to about **80% of rated output after 25 years**; lead–acid batteries about 3–5 years; lithium about 10 years; inverters about 5–10 years.`,
        examples: `**Example 1.** With what should a flooded battery be topped up? *Answer:* **Distilled water** only.

**Example 2.** State two causes of low array output. *Answer:* **Dirt on the modules** and **shading**.

**Example 3.** An inverter alarms and shuts down whenever a pressing iron is plugged in. What is the fault? *Answer:* **Overload** — the load exceeds the inverter's rating.`,
      },
      questions: [
        ["E", "Scheduled care carried out to prevent failure is", "preventive maintenance", "corrective maintenance", "commissioning", "decommissioning", "It is also called routine maintenance."],
        ["E", "Solar modules should be cleaned with", "clean water and a soft cloth", "sandpaper", "a wire brush", "strong acid", "Abrasives scratch the glass."],
        ["E", "Flooded lead–acid batteries are topped up with", "distilled water", "tap water with salt", "acid", "kerosene", "Impurities damage the plates."],
        ["M", "The instrument used to measure the specific gravity of battery electrolyte is the", "hydrometer", "megger", "clamp meter", "inclinometer", "It indicates the state of charge."],
        ["M", "A fully charged 12 V lead–acid battery at rest reads about", "12.7 V", "10.5 V", "11.0 V", "15.5 V", "Readings near 12.6–12.8 V indicate full charge."],
        ["M", "An inverter that shuts down when a heavy appliance is switched on is most likely", "overloaded", "under-loaded", "over-charged", "shaded", "The load exceeds its capacity."],
        ["M", "The first step in systematic troubleshooting is to", "ask the user what happened", "replace the inverter", "remove the modules", "cut the cables", "Information narrows the search."],
        ["H", "A melted battery terminal is most likely caused by", "a loose connection", "low sunlight", "a clean terminal", "an oversized cable", "High resistance at the joint generates heat."],
        ["H", "Low voltage at the loads at the end of a long cable run is due to", "voltage drop", "anti-islanding", "over-charging", "bifacial gain", "Thicker or shorter cables reduce it."],
        ["H", "Modules are best cleaned early in the morning or in the evening because", "cold water on hot glass may crack it and midday output is not lost", "the sun is brighter then", "dust is heavier then", "batteries are empty then", "It avoids thermal shock and loss of generation."],
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
      title: "Comprehensive Revision I: Solar PV Theory",
      subtopics: ["Energy and electricity fundamentals", "PV cells, modules and arrays", "System types and components", "Advanced and smart systems"],
      objectives: ["Recall the fundamentals of energy and electricity", "Explain how PV cells and modules work", "Compare system types and their components", "Summarise advanced, smart and hybrid systems"],
      lesson: {
        title: "The Whole Theory in Outline",
        summary: "A compact revision of the theory examined in solar PV installation and maintenance.",
        minutes: 80,
        notes: `## Energy
**Energy** is the ability to do work; forms — light, heat, electrical, chemical, mechanical. **Renewable** sources: solar, wind, hydro, biomass; **non-renewable:** coal, oil, gas.
The sun's energy reaches the earth by **radiation**; uses — **PV** (electricity) and **solar thermal** (heating, drying, cooking).

## Electricity
conductors (copper, aluminium), insulators (PVC, rubber), **semiconductors** (silicon). $V = IR$; $P = VI$; $E = Pt$. Instruments: **voltmeter** (in parallel), **ammeter** (in series), multimeter, clamp meter.

## The PV cell
Made of **silicon** doped to form **n-type** and **p-type** layers — a **p–n junction**. Light photons free electrons; the junction's field drives them through the external circuit — the **photovoltaic effect**. A silicon cell gives about **0.5–0.6 V**; cells in series form a module (e.g. 36 cells for a "12 V" module, 60/72 or 120/144 half-cells for larger ones).

## Module to array
**cell → module → string (series) → array (strings in parallel)**. Ratings at STC; **I–V curve** with the **maximum power point** at its knee; **fill factor** $= \\dfrac{V_{mp} I_{mp}}{V_{oc} I_{sc}}$.

Factors affecting output: **irradiance, temperature, shading, tilt and orientation, dirt, cable losses**.

## System types
| Type | Features |
|---|---|
| **stand-alone (off-grid)** | array, controller, battery, inverter |
| **grid-tied** | array and grid inverter; no battery; net metering |
| **hybrid** | grid + battery + possibly generator |
| **direct-coupled** | array straight to a d.c. load (e.g. pump) — works only in sun |
| **solar home system; solar street light; solar water pump; mini-grid** | applications |

## Components
**charge controllers:** **PWM** (simple, cheaper; array voltage must match battery) and **MPPT** (tracks the maximum power point; up to about 30% more harvest; allows higher array voltage).
**inverters:** **pure sine wave** (suitable for all loads), modified sine wave, square wave; off-grid, grid-tied, hybrid.
**batteries:** lead–acid (flooded, AGM, gel, tubular) and lithium; **C-rate**, **cycle life**, DoD, SoC.
**balance of system (BOS):** everything except the modules — mounting, cables, protection, controller, inverter, batteries.

## Protection and standards
fuses, breakers, isolators, SPD, RCD, earthing, lightning protection; IEC standards and wiring regulations; **IP ratings** for enclosures (e.g. IP65 — dust-tight and protected against water jets).

## Advanced topics
bifacial modules and albedo; trackers; smart monitoring and IoT; hybrid systems and ATS; energy policy (REA, NERC, Electricity Act 2023); climate change and sustainability; e-waste and recycling.

## Formula sheet
| Purpose | Formula |
|---|---|
| daily energy | $E = \\sum P t$ |
| array size | $E \\div (PSH \\times \\text{derating})$ |
| battery Ah | $E \\times \\text{days} \\div (V \\times DoD)$ |
| controller current | $1.25 \\times \\text{array W} \\div V_{batt}$ |
| efficiency | output ÷ input × 100% |
| backup time | usable Wh ÷ load W |`,
        examples: `**Example 1.** What is the photovoltaic effect? *Answer:* The **production of voltage and current in a material exposed to light**.

**Example 2.** Give one advantage of an MPPT controller over a PWM controller. *Answer:* It **harvests more energy** by operating the array at its maximum power point.

**Example 3.** What does BOS mean? *Answer:* **Balance of system** — all components other than the modules.`,
      },
      questions: [
        ["E", "The material most commonly used to make solar cells is", "silicon", "copper", "aluminium", "carbon steel", "It is a semiconductor."],
        ["E", "An ammeter is connected in a circuit in", "series", "parallel", "reverse only", "shunt with the supply", "It measures the current flowing through the circuit."],
        ["E", "A PV system that is not connected to the public supply is", "off-grid", "grid-tied", "net-metered", "interconnected", "It relies on batteries for storage."],
        ["M", "The voltage produced by a single silicon solar cell is about", "0.5 V", "5 V", "12 V", "50 V", "Many cells are joined in series to form a module."],
        ["M", "The type of inverter output suitable for all appliances is", "pure sine wave", "square wave", "modified square wave", "pulsating d.c.", "It matches grid power quality."],
        ["M", "All the components of a PV system other than the modules are called the", "balance of system", "array", "string", "load", "It includes mounting, cables, inverter and batteries."],
        ["M", "A direct-coupled solar water pump works", "only when the sun shines", "all night", "only with batteries", "only on the grid", "There is no storage in the system."],
        ["H", "A module has Voc = 40 V, Isc = 10 A, Vmp = 32 V and Imp = 9 A. Its fill factor is", "0.72", "0.80", "0.90", "1.39", "(32 × 9) ÷ (40 × 10) = 288 ÷ 400."],
        ["H", "The junction formed between the two doped layers of a solar cell is the", "p–n junction", "busbar", "back sheet", "junction box", "Its electric field separates the charges freed by light."],
        ["H", "An enclosure rated IP65 is", "dust-tight and protected against water jets", "suitable for indoor use only", "not protected against dust", "designed for immersion at depth", "The first digit refers to solids and the second to water."],
      ],
    },
    {
      week: 2,
      title: "Comprehensive Revision II: Solar PV Practical Skills",
      subtopics: ["Tools and instruments", "Practical tasks and procedures", "Measurement and recording", "Safety and workmanship"],
      objectives: ["Identify tools and instruments and their uses", "Describe the procedure for common practical tasks", "Take and record measurements correctly", "Observe safety and good workmanship"],
      lesson: {
        title: "Practical Skills in Review",
        summary: "The tools, procedures and measurements examined in the practical paper.",
        minutes: 80,
        notes: `## Tools and instruments
| Tool | Use |
|---|---|
| **multimeter** | voltage, current, resistance, continuity |
| **clamp meter** | current without breaking the circuit |
| **insulation tester** | insulation resistance |
| **earth tester** | earth-electrode resistance |
| **hydrometer** | specific gravity of electrolyte |
| **irradiance meter (pyranometer)** | sunlight power |
| **compass; inclinometer** | orientation; tilt |
| **MC4 crimper and spanners** | making and opening connectors |
| **wire stripper, cutter, lug crimper** | cable preparation |
| **torque wrench, spanners, screwdrivers, drill** | fixing |
| **spirit level, tape** | alignment and measurement |

## Using a multimeter
- select the correct **function and range** (d.c. V for panels and batteries; a.c. V for inverter output)
- **voltage:** probes **across** the component
- **current:** meter **in series** (or use a clamp meter)
- **resistance and continuity:** circuit **switched off**
- red lead to V/Ω socket; black to COM

## Standard practical tasks
### 1. Measuring a module
In sunlight: measure **Voc** across the terminals; measure **Isc** with the meter on the 10 A d.c. range across the terminals briefly, or with a clamp meter; compare with the label.

### 2. Series and parallel connection
Connect two modules in series and record V and I; then in parallel; state the observation — **series adds voltage, parallel adds current**.

### 3. Making an MC4 connection
strip about 7 mm of insulation → crimp the metal pin → push into the housing until it **clicks** → tighten the gland → check by pulling gently → test polarity.

### 4. Wiring a small stand-alone system
battery → controller (battery terminals) → array → load / inverter; check polarity at each step; fuse near the battery.

### 5. Battery tests
voltage at rest and under load; specific gravity of each cell; inspect terminals.

### 6. Tilt and orientation
set the module facing south with the inclinometer at the required angle.

### 7. Fault finding
given a faulty set-up — observe, measure, locate (open circuit, reversed polarity, blown fuse, loose connector), correct and retest.

## Recording
Use a **table** with headings and **units**; state instrument and range; note the time and weather; write **observations** and a **conclusion**.
| Test | Expected | Measured | Remark |
|---|---|---|---|
| string Voc | 80 V | 78.5 V | satisfactory |

## Workmanship
neat, labelled wiring; correct colours; firm terminations; no exposed conductor; cables supported; components upright and level.

## Safety in the practical
PPE; dry hands; one hand rule on live d.c.; cover modules when wiring; never short a battery; keep the bench tidy; report damage.

## Marking points
correct selection and use of tools; correct procedure; accurate readings with units; safety; neatness; time management; correct conclusions.`,
        examples: `**Example 1.** Which instrument measures current without breaking the circuit? *Answer:* A **clamp meter**.

**Example 2.** How is a voltmeter connected? *Answer:* **Across (in parallel with)** the component.

**Example 3.** Two modules each of 20 V, 5 A are connected in parallel. State the output. *Answer:* **20 V, 10 A**.`,
      },
      questions: [
        ["E", "The instrument that measures voltage, current and resistance is the", "multimeter", "hydrometer", "compass", "spirit level", "It combines several meters in one."],
        ["E", "To measure voltage, the meter probes are placed", "across the component", "in series with the load", "on the earth rod only", "inside the battery", "A voltmeter is connected in parallel."],
        ["E", "The tool used to check that mounting rails are horizontal is the", "spirit level", "clamp meter", "megger", "crimper", "The bubble shows when the rail is level."],
        ["M", "Current can be measured without disconnecting the cable by using a", "clamp meter", "hydrometer", "inclinometer", "pyranometer", "Its jaws sense the magnetic field round the conductor."],
        ["M", "Before measuring resistance or continuity, the circuit must be", "switched off", "fully loaded", "connected to the array", "short-circuited to the battery", "A live circuit gives false readings and may damage the meter."],
        ["M", "Two modules each rated 18 V, 6 A connected in parallel give", "18 V, 12 A", "36 V, 6 A", "36 V, 12 A", "18 V, 6 A", "Parallel connection adds the currents."],
        ["M", "The meter setting used to measure the output of an inverter is", "a.c. volts", "d.c. volts", "ohms", "d.c. milliamps", "The inverter output is alternating."],
        ["H", "After crimping an MC4 pin, the correct seating of the pin in its housing is confirmed by", "a click and a gentle pull test", "heating the connector", "painting the connector", "twisting the cable hard", "The pin locks into the housing."],
        ["H", "The instrument used to measure solar irradiance on site is the", "pyranometer", "megger", "earth tester", "hydrometer", "It reads in W/m²."],
        ["H", "In a results table, every reading should be recorded with its", "unit", "colour", "price", "serial number only", "A number without a unit is incomplete."],
      ],
    },
    {
      week: 3,
      title: "Final Project: Presenting a Solar Project",
      subtopics: ["Choosing and planning a project", "The project report", "Presentation skills", "Evaluation"],
      objectives: ["Select and plan a solar project", "Write a project report in the proper format", "Present a project clearly", "Evaluate a project against set criteria"],
      lesson: {
        title: "Building and Presenting Your Project",
        summary: "How to plan, document and present an individual or group solar project.",
        minutes: 80,
        notes: `## Suitable projects
solar phone-charging station; solar lantern or study lamp; small **solar home system** for a room; solar street or security light with dusk-to-dawn sensor; solar water pump model; solar-powered fan or radio; solar dryer; IoT **monitoring system** with a microcontroller; design proposal for electrifying a school block or clinic.

## Planning
1. **Identify a problem** (e.g. no light for evening study).
2. State the **aim and objectives**.
3. Decide the **scope** and constraints — budget, time, materials.
4. **Design** — load, sizing, circuit diagram.
5. Prepare the **bill of materials** and cost.
6. Draw a **work plan** (timeline) and share **roles** in the group.
7. **Build, test, record**.
8. **Evaluate** and report.

## The project report
| Section | Content |
|---|---|
| **title page** | title, names, school, date |
| **abstract / summary** | the whole project in a paragraph |
| **introduction** | background, problem, aim, objectives, scope |
| **literature / theory** | principles used |
| **materials and method** | components, specifications, design calculations, diagrams, construction steps |
| **testing and results** | tables, graphs, photographs |
| **discussion** | what the results mean; problems met |
| **cost analysis** | bill of materials and total cost |
| **conclusion and recommendations** | achievements; improvements |
| **references; appendices** | sources; data sheets |

Write in clear, simple language; **label** diagrams; give **units**; acknowledge sources.

## Presentation
- **structure:** introduction → problem → design → demonstration → results → cost → conclusion → questions
- use **visual aids** — the working model, charts, slides, photographs
- speak **clearly and audibly**; face the audience; keep to **time**
- every group member takes part
- **demonstrate** the project working
- answer questions honestly; say so if you do not know

## Evaluation criteria
relevance and originality; correctness of design; **functionality** (does it work?); workmanship and safety; cost-effectiveness; quality of report; presentation; teamwork.

## Testing a project
measure **Voc, Isc, battery voltage, load current, running time**; compare with design values; calculate **efficiency** and percentage error:
$$\\text{percentage error} = \\frac{|\\text{measured} - \\text{expected}|}{\\text{expected}} \\times 100\\%$$
*Expected running time 5 h, measured 4.5 h: error* $= \\dfrac{0.5}{5} \\times 100 = 10\\%$.

## Lessons for business
A good project can become a **product or service**: costing, pricing, warranty, after-sales service and customer education.`,
        examples: `**Example 1.** State the first step in planning a project. *Answer:* **Identify the problem** to be solved.

**Example 2.** Which section of a report summarises the whole project briefly? *Answer:* The **abstract**.

**Example 3.** A lamp was designed to run for 8 h but ran for 7 h. Find the percentage error. *Answer:* $\\tfrac{1}{8} \\times 100 = \\mathbf{12.5\\%}$.`,
      },
      questions: [
        ["E", "The first step in planning a project is to", "identify a problem", "write the conclusion", "present to the class", "buy all materials", "The problem defines the aim."],
        ["E", "The list of components and their costs for a project is the", "bill of materials", "abstract", "title page", "reference list", "It gives the total cost."],
        ["E", "During a presentation, the speaker should", "speak clearly and face the audience", "read silently", "turn away from the audience", "exceed the time allowed", "Clear delivery helps the audience follow."],
        ["M", "The section of a report giving a brief summary of the whole project is the", "abstract", "appendix", "discussion", "method", "It comes near the beginning."],
        ["M", "Tables, graphs and photographs of tests belong in the section on", "results", "introduction", "references", "title page", "They present what was measured."],
        ["M", "Suggestions for improving the project are given under", "recommendations", "abstract", "materials", "title", "They follow the conclusion."],
        ["M", "A timeline showing when each task will be done is a", "work plan", "circuit diagram", "data sheet", "load schedule", "It helps the group finish on time."],
        ["H", "A project designed to deliver 60 W actually delivers 54 W. The percentage error is", "10%", "6%", "11.1%", "90%", "6 ÷ 60 × 100. Answer: 10%."],
        ["H", "The most important criterion in judging a constructed project is whether it", "works as intended", "is the largest", "costs the most", "has the longest report", "Functionality shows the design is correct."],
        ["H", "Sources of information used in a report are acknowledged in the", "references", "abstract", "results", "cost analysis", "This gives credit and allows checking."],
      ],
    },
    {
      week: 6,
      title: "Final SSCE Preparation: Careers, Enterprise and Examination Technique",
      subtopics: ["Careers in the solar industry", "Starting a solar business", "Customer service and ethics", "Examination technique"],
      objectives: ["Identify careers in the solar industry", "Outline how to start and run a solar business", "Explain good customer service and professional ethics", "Apply good technique in theory and practical examinations"],
      lesson: {
        title: "From School to the Solar Trade",
        summary: "Where solar skills lead, how to run a small solar business, and how to face the final examination.",
        minutes: 80,
        notes: `## Careers
solar **installer / technician**; system **designer**; maintenance technician; solar **sales and marketing** agent; site surveyor; project supervisor; mini-grid operator; battery and inverter repair technician; energy auditor; trainer; with further study — electrical or renewable-energy **engineer**, researcher, energy consultant.

**Further training:** technical colleges, polytechnics and universities; **National Skills Qualification (NSQ)**; manufacturers' and industry certifications; apprenticeship.

## Starting a solar business
1. **Skills and certification**.
2. **Market survey** — customers (homes, shops, schools, clinics, farmers), competitors, prices.
3. **Business plan** — services, costs, pricing, funding.
4. **Register** the business (CAC); obtain a tax identification number; licences as required.
5. **Capital** — savings, family, co-operatives, microfinance, grants and youth programmes.
6. **Tools and suppliers** — reliable, certified products with warranty.
7. **Marketing** — referrals, signboard, social media, demonstrations.
8. **Records** — quotations, invoices, receipts, job cards, warranties.

### Services
design and installation; maintenance contracts; sales of components; repair; energy audits; phone-charging and solar kiosks; pay-as-you-go distribution.

### Pricing
$$\\text{price} = \\text{materials} + \\text{labour} + \\text{overheads} + \\text{profit}$$
*Materials ₦900 000, labour ₦100 000, overheads ₦50 000, profit 20% of cost (₦210 000) → price ₦1 260 000.*

## Customer service and ethics
- **honest advice** — never promise what the system cannot do
- **genuine products**; no fake ratings
- clear **quotation** and written **warranty**
- **punctuality**; clean, safe work
- **user training** and after-sales support
- respect for customers' property and privacy
- compliance with **standards and regulations**
- responsible **disposal** of old batteries

## Challenges
high cost of components; fake products; customers' limited finance; theft; competition from untrained installers; exchange-rate changes. **Responses:** instalment plans, quality, education, insurance.

## Examination technique
### Theory
- read the instructions; choose questions wisely; plan the time
- **define** terms precisely; **list** in points; **explain** with reasons
- draw **neat, labelled diagrams** (system block diagram, series/parallel, I–V curve)
- in calculations: **formula → substitution → answer with unit**
- check answers for sense (a house does not need a 2 A battery)

### Objective
answer every question; eliminate wrong options; watch units and words such as NOT and EXCEPT.

### Practical
read the task fully; select correct tools; observe **safety** first; follow the procedure; record readings in a table with units; leave the workstation tidy.

## Final check-list
formulae; component functions; series and parallel; sizing steps; installation order; commissioning tests; maintenance tasks; faults and remedies; safety rules; policy and environment.`,
        examples: `**Example 1.** Name three careers in the solar industry. *Answer:* **Installer, system designer** and **sales agent**.

**Example 2.** A job costs ₦500 000 in total and the installer adds 20% profit. Find the price. *Answer:* ₦500 000 × 1.2 = **₦600 000**.

**Example 3.** State the three steps to show in a calculation. *Answer:* **Formula, substitution** and **answer with unit**.`,
      },
      questions: [
        ["E", "A person who fixes and connects solar systems is a solar", "installer", "auditor", "banker", "broker", "Installation is the core trade skill."],
        ["E", "In Nigeria, a business name is registered with the", "Corporate Affairs Commission", "Rural Electrification Agency", "Standards Organisation of Nigeria", "Central Bank of Nigeria", "The CAC registers companies and business names."],
        ["E", "A written promise to repair or replace a faulty product within a period is a", "warranty", "quotation", "receipt", "invoice", "It protects the customer."],
        ["M", "A study of customers, competitors and prices before starting a business is a", "market survey", "site survey", "load audit", "risk assessment", "It shows whether there is demand."],
        ["M", "A job has materials of ₦700 000, labour of ₦80 000 and overheads of ₦20 000. With a profit of ₦160 000, the price is", "₦960 000", "₦800 000", "₦860 000", "₦640 000", "Sum of all costs plus profit."],
        ["M", "Which of these is an ethical practice for a solar installer?", "Giving honest advice on what the system can power", "Selling panels with false ratings", "Dumping old batteries in a drain", "Refusing to give a receipt", "Honesty builds trust and repeat business."],
        ["M", "In a calculation question, the answer should always be stated with its", "unit", "colour", "price", "brand", "The unit completes the answer."],
        ["H", "An installer's total cost for a job is ₦1 500 000 and a profit of 15% of cost is added. The price charged is", "₦1 725 000", "₦1 515 000", "₦1 650 000", "₦2 250 000", "1 500 000 × 1.15."],
        ["H", "A scheme that lets low-income customers afford solar by paying small amounts over time is", "pay-as-you-go", "net metering", "feed-in tariff", "anti-islanding", "Payments unlock continued use of the system."],
        ["H", "The Nigerian framework that certifies practical trade competence at different levels is the", "National Skills Qualification", "National Youth Service", "Unified Tertiary Matriculation Examination", "National Identity Number", "It recognises skills gained in training and at work."],
      ],
    },
  ],
};
