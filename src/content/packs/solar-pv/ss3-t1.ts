import type { TermPlan } from "../types";

/** SS3 Solar Photovoltaic Installation and Maintenance, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 2,
      title: "Advanced PV Technologies",
      subtopics: ["Types of solar cells and modules", "Bifacial panels", "Solar trackers", "Other advances: half-cut cells, PERC, thin film, micro-inverters"],
      objectives: ["Compare the main types of PV modules", "Explain how bifacial panels work", "Describe single- and dual-axis solar trackers", "Identify other recent advances in PV technology"],
      lesson: {
        title: "Beyond the Standard Panel",
        summary: "Newer module designs and tracking systems that capture more energy from the sun.",
        minutes: 40,
        notes: `## The photovoltaic effect — recap
A **solar (photovoltaic, PV) cell** converts **light directly into direct-current (d.c.) electricity**. Cells are joined into **modules (panels)**; modules into **strings** and **arrays**.

## Module types
| Type | Features | Typical efficiency |
|---|---|---|
| **monocrystalline silicon** | single crystal; dark, uniform cells; best performance per area; dearer | about 18–23% |
| **polycrystalline silicon** | many crystals; bluish, speckled; cheaper | about 15–18% |
| **thin film** (amorphous silicon, CdTe, CIGS) | light, flexible; lower efficiency; better in heat and shade | about 10–13% |

**Efficiency** $= \\dfrac{\\text{electrical power out}}{\\text{solar power in}} \\times 100\\%$. A 2 m² module producing 400 W under 1000 W/m² has efficiency $\\dfrac{400}{2000} \\times 100 = 20\\%$.

## Bifacial panels
A **bifacial module** has **cells exposed on both faces** (glass–glass or clear back sheet), so it generates from **direct light on the front** and **reflected light on the back**.
- the extra energy is the **bifacial gain**, typically **5–25%**
- depends on **albedo** — the reflectivity of the ground (white gravel, sand, concrete and light roofs reflect well; grass and dark soil poorly)
- needs **raised mounting** with the back unshaded
- best in **ground-mounted** arrays, carports and with trackers
- dearer and heavier than monofacial modules

## Solar trackers
A **tracker** is a **mount that turns the array to follow the sun**, keeping the light close to perpendicular to the modules.
| Type | Movement | Extra yield |
|---|---|---|
| **single-axis** | rotates east to west through the day | about 15–25% |
| **dual-axis** | follows both daily and seasonal movement | about 30–40% |

**Parts:** motor or actuator, controller, light sensors or astronomical clock, bearings and frame.
**Advantages:** more energy per module. **Disadvantages:** higher cost; moving parts need **maintenance**; more land; wind loading. Fixed mounts remain best for small roof systems.

## Other advances
- **PERC cells** — a reflective rear layer returns unused light into the cell
- **half-cut cells** — lower resistive losses; better shade tolerance
- **TOPCon and heterojunction (HJT)** cells — higher efficiency
- **multi-busbar and shingled** modules
- **micro-inverters and power optimisers** — module-level conversion and **MPPT**, so one shaded panel does not pull down the string
- **lithium (LiFePO₄) batteries** — longer life and deeper discharge than lead–acid
- **building-integrated PV (BIPV)** — solar tiles and glass
- **floating solar** on reservoirs
- **perovskite and tandem cells** — still developing

## Choosing technology
Consider **cost, space, climate (heat and dust), site reflectivity, maintenance skill** and warranty.`,
        examples: `**Example 1.** What is a bifacial panel? *Answer:* A module that **generates electricity from both its front and rear faces**.

**Example 2.** Distinguish single-axis from dual-axis trackers. *Answer:* **Single-axis** follows the sun east to west; **dual-axis** also adjusts for the sun's seasonal height.

**Example 3.** A 1.6 m² module gives 320 W under 1000 W/m². Find its efficiency. *Answer:* $\\tfrac{320}{1600} \\times 100 = \\mathbf{20\\%}$.`,
      },
      questions: [
        ["E", "A device that converts light directly into electricity is a", "solar cell", "transformer", "generator", "rectifier", "It works by the photovoltaic effect."],
        ["E", "A solar module that produces electricity from both faces is", "bifacial", "monofacial", "thin film", "polycrystalline", "The rear face uses reflected light."],
        ["E", "A mount that turns solar panels to follow the sun is a", "tracker", "combiner", "charge controller", "busbar", "It keeps light near perpendicular to the modules."],
        ["M", "The module type with the highest efficiency among these is", "monocrystalline silicon", "amorphous thin film", "polycrystalline silicon", "cadmium telluride", "It is made from single-crystal silicon."],
        ["M", "The reflectivity of the ground beneath a bifacial array is its", "albedo", "azimuth", "irradiance", "tilt", "Bright surfaces give more rear-side energy."],
        ["M", "A tracker that follows the sun from east to west only is a", "single-axis tracker", "dual-axis tracker", "fixed mount", "pole mount", "It rotates about one axis."],
        ["M", "A disadvantage of solar trackers is that they", "have moving parts needing maintenance", "reduce energy yield", "cannot be used on the ground", "work only at night", "Motors and bearings wear and add cost."],
        ["H", "A 2 m² module delivers 360 W when the irradiance is 1000 W/m². Its efficiency is", "18%", "36%", "9%", "72%", "360 ÷ 2000 × 100."],
        ["H", "A device that performs maximum power point tracking for one module, so that shading of one panel does not affect the others, is a", "micro-inverter", "string fuse", "bypass cable", "earth rod", "Conversion is done at module level."],
        ["H", "Bifacial panels perform best when mounted", "raised above a light-coloured surface", "flat against a dark roof", "under trees", "behind a wall", "The rear needs unobstructed reflected light."],
      ],
    },
    {
      week: 3,
      title: "Smart Solar Systems",
      subtopics: ["Meaning of a smart solar system", "IoT integration", "Monitoring apps and data", "Benefits and security"],
      objectives: ["Explain what a smart solar system is", "Describe how the Internet of Things is used in solar systems", "Interpret data from monitoring apps", "State the benefits and risks of smart systems"],
      lesson: {
        title: "Solar Systems that Report on Themselves",
        summary: "Sensors, communication and apps that let owners and technicians watch and control a PV system remotely.",
        minutes: 40,
        notes: `## Meaning
A **smart solar system** is a PV system fitted with **sensors, communication and software** so that it can be **monitored, analysed and controlled remotely** and can respond automatically.

## The Internet of Things (IoT)
The **IoT** is a **network of physical devices fitted with sensors and connected to the internet to exchange data**.

### In a solar system
| Layer | Components |
|---|---|
| **sensing** | voltage and current sensors, energy meters, battery monitors (shunt, BMS), temperature and **irradiance** sensors |
| **control / processing** | smart inverter, smart charge controller, data logger, microcontroller (e.g. Arduino, ESP32) |
| **communication** | Wi-Fi, GSM/4G, Bluetooth, RS-485/Modbus, LoRa |
| **cloud platform** | stores and analyses data |
| **user interface** | phone app or web dashboard |

## What is monitored
- **PV power (W)** and **energy yield (kWh)** — daily, monthly, lifetime
- PV **voltage and current** per string
- **battery state of charge (SoC)**, voltage, temperature
- **load consumption**
- **grid import and export**
- **inverter status**, faults and alarms
- irradiance and module temperature
- **performance ratio**

## Monitoring apps
Most inverter makers provide apps and portals; they show **live power flow**, **graphs**, **history** and **alerts**, and allow settings to be changed (charge priority, battery limits).
**Reading a daily graph:** output rises from sunrise, **peaks around midday** and falls to zero at sunset — a bell-shaped curve; dips show **clouds or shading**; a flat top shows **inverter clipping**; zero at midday signals a **fault**.

## Smart functions
- **remote fault detection** and alerts by SMS or app
- **load management** — switching non-essential loads when the battery is low; running heavy loads at midday
- **smart meters** and **pay-as-you-go (PAYG)** solar — payment by mobile money unlocks the system
- **remote firmware updates** and settings
- **predictive maintenance** from data trends
- integration with **smart homes** and mini-grids

## Benefits
early detection of faults; less downtime; fewer site visits; proof of performance; better energy use; longer battery life; data for billing and planning.

## Limitations and risks
needs **network coverage** and data; extra cost; **cyber-security** risks — change default passwords, update firmware, restrict access; dependence on the maker's cloud; data privacy.`,
        examples: `**Example 1.** What does IoT mean? *Answer:* The **Internet of Things** — devices with sensors **connected to exchange data** over the internet.

**Example 2.** Give three quantities shown on a solar monitoring app. *Answer:* **PV power, battery state of charge** and **load consumption**.

**Example 3.** What does a sudden dip in the midday power curve usually show? *Answer:* **Cloud cover or shading** of the array.`,
      },
      questions: [
        ["E", "IoT stands for", "Internet of Things", "Inverter of Transformers", "Input of Terminals", "Integration of Tools", "Devices are connected to exchange data."],
        ["E", "A PV system that can be monitored and controlled remotely is a", "smart solar system", "stand-alone lantern", "passive system", "manual system", "It uses sensors, communication and software."],
        ["E", "Battery state of charge on a monitoring app is shown in", "per cent", "metres", "litres", "hertz", "It tells how full the battery is."],
        ["M", "Which device measures the sunlight power falling on the array?", "Irradiance sensor", "Shunt", "Thermostat", "Relay", "It reads in watts per square metre."],
        ["M", "On a clear day, the graph of PV power against time is", "bell-shaped, peaking near midday", "a straight horizontal line", "highest at sunrise", "highest at midnight", "Output follows the sun's height."],
        ["M", "A common wireless link used by inverters to send data to the cloud is", "Wi-Fi", "PVC conduit", "MC4", "earth wire", "GSM and Bluetooth are also used."],
        ["M", "Pay-as-you-go solar systems are unlocked by", "mobile payment", "turning the panel", "adding water to the battery", "cleaning the modules", "The controller enables the system when credit is paid."],
        ["H", "Zero PV output at midday on a sunny day most likely indicates", "a fault or disconnection", "normal operation", "a full battery in every case", "high efficiency", "The system should be inspected."],
        ["H", "A good practice for securing a smart inverter against hacking is to", "change the default password", "share the login publicly", "disable all updates", "leave Bluetooth pairing open", "Default credentials are widely known."],
        ["H", "Using trends in monitoring data to service equipment before it fails is", "predictive maintenance", "breakdown maintenance", "commissioning", "load shedding", "It reduces downtime and cost."],
      ],
    },
    {
      week: 4,
      title: "Hybrid Energy Systems",
      subtopics: ["Meaning of a hybrid system", "Solar–diesel, solar–wind and solar–grid combinations", "Components and operation", "Advantages, limitations and sizing ideas"],
      objectives: ["Explain what a hybrid energy system is", "Describe common combinations of solar with other sources", "Identify the components of a hybrid system", "State the advantages and limitations"],
      lesson: {
        title: "Combining Solar with Other Sources",
        summary: "Using two or more energy sources together to give a reliable supply.",
        minutes: 40,
        notes: `## Meaning
A **hybrid energy system** **combines two or more energy sources** — usually with **battery storage** — to supply a load more **reliably and cheaply** than any one source alone.

## Why hybridise?
Solar is **intermittent** — none at night and little in cloud. A second source fills the gaps.

## Common combinations
| System | How it works |
|---|---|
| **solar + battery + grid** | solar first; battery stores surplus; grid tops up or charges battery; backup during outages |
| **solar + diesel/petrol generator** | solar supplies daytime loads; generator runs only when sun and battery are insufficient — big **fuel saving** |
| **solar + wind** | wind often blows at night and in the rainy season when solar is low — the sources **complement** each other |
| **solar + small hydro / biomass** | for rural **mini-grids** |

## System types
- **off-grid (stand-alone)** — not connected to the grid; needs battery
- **grid-tied** — feeds the grid; no battery; **shuts down in an outage (anti-islanding)**
- **hybrid** — grid-connected **with battery**; continues during outages

## Components
- **PV array** and mounting
- **hybrid inverter** — combines **MPPT charge controller, inverter and battery charger**; manages sources by priority
- **battery bank** with **BMS**
- **generator** with **automatic start (AGS)**
- **wind turbine** with its controller and dump load
- **automatic transfer switch (ATS)** / changeover
- **protection:** d.c. and a.c. breakers, fuses, **surge protection devices**, earthing
- **energy meter and monitoring**

## Operating priorities
Typical setting: **solar → battery → grid/generator**.
- daytime: solar feeds loads, surplus charges the battery
- night: battery feeds loads
- battery low: grid or generator starts, supplies loads and recharges

## Coupling
- **d.c.-coupled:** sources feed the battery through charge controllers
- **a.c.-coupled:** sources feed the a.c. bus through their own inverters — common in mini-grids

## Advantages
**reliable, continuous supply**; **lower fuel cost** and generator run-hours; less noise and pollution; smaller battery bank than solar alone; longer generator life; suits hospitals, telecom masts, schools, banks, estates.

## Limitations
higher initial cost; more complex design and control; needs skilled installers; generator still needs fuel and servicing.

## Sizing idea
1. Find the **daily energy demand**: $E = \\sum (P \\times t)$ in Wh.
2. Decide the **solar fraction**.
3. Size the **array**: $\\text{array W} \\approx \\dfrac{E}{\\text{peak sun hours} \\times \\text{system efficiency}}$.
4. Size the **battery** for the night load and autonomy.
5. Size the **inverter** above peak load; the **generator** to carry the peak load plus charging.

*A daily demand of 10 kWh with 5 peak sun hours and efficiency 0.8 needs* $\\dfrac{10\\,000}{5 \\times 0.8} = 2500$ W of modules.`,
        examples: `**Example 1.** Define a hybrid energy system. *Answer:* One that **combines two or more energy sources**, usually with storage.

**Example 2.** Why do solar and wind complement each other? *Answer:* Wind is often available **at night or in cloudy seasons** when solar output is low.

**Example 3.** Daily demand is 6 kWh; peak sun hours 5; system efficiency 0.75. Find the array size. *Answer:* $6000 \\div (5 \\times 0.75) = \\mathbf{1600}$ **W**.`,
      },
      questions: [
        ["E", "A system that combines two or more energy sources is a", "hybrid energy system", "grid-tied system only", "solar lantern", "single-phase system", "The sources back each other up."],
        ["E", "Solar energy is described as intermittent because it", "is not available at night or in heavy cloud", "is too expensive", "is always constant", "produces alternating current", "Output varies with sunlight."],
        ["E", "In a solar–diesel hybrid, the main saving is in", "fuel", "sunlight", "cable", "water", "The generator runs for fewer hours."],
        ["M", "An inverter that combines charge controller, inverter and battery charger is a", "hybrid inverter", "micro-inverter", "string fuse", "rectifier only", "It manages solar, battery and grid or generator."],
        ["M", "The device that automatically switches the load between sources is the", "automatic transfer switch", "bypass diode", "combiner box", "earth rod", "It changes over without manual action."],
        ["M", "A grid-tied system without battery shuts down during a grid outage because of", "anti-islanding protection", "low irradiance", "high temperature", "a full battery", "It protects line workers from back-feed."],
        ["M", "A typical source priority in a hybrid system is", "solar, then battery, then grid or generator", "generator, then grid, then solar", "grid, then generator, then solar", "battery, then generator, then solar", "The cheapest, cleanest source is used first."],
        ["H", "A site needs 8 kWh per day, with 5 peak sun hours and a system efficiency of 0.8. The array size required is", "2000 W", "1600 W", "6400 W", "1000 W", "8000 ÷ (5 × 0.8)."],
        ["H", "A system in which each source feeds the a.c. bus through its own inverter is", "a.c.-coupled", "d.c.-coupled", "uncoupled", "series-coupled", "It is common in mini-grids."],
        ["H", "Solar–wind hybrids are effective mainly because the two sources", "tend to be available at different times", "use the same turbine", "need no storage at all", "produce the same voltage", "They complement each other across day and season."],
      ],
    },
    {
      week: 6,
      title: "Energy Policies in Nigeria",
      subtopics: ["Meaning and need for energy policy", "Renewable energy policy", "Rural electrification policy", "Institutions, incentives and standards"],
      objectives: ["Explain the need for energy policy", "Outline Nigeria's renewable energy policies", "Describe the rural electrification policy and programmes", "Identify the institutions and incentives that affect solar business"],
      lesson: {
        title: "The Rules and Plans behind Nigeria's Energy",
        summary: "Government policies that shape renewable energy and rural electrification, and what they mean for solar installers.",
        minutes: 40,
        notes: `## Meaning and need
An **energy policy** is a **government's plan and set of rules for producing, distributing and using energy**. Nigeria needs one because of **inadequate and unreliable grid supply**, **millions without electricity (especially in rural areas)**, heavy dependence on **petrol and diesel generators**, **climate commitments** and the need to attract **investment**.

## Key policies and laws
| Instrument | Main points |
|---|---|
| **National Energy Policy** | overall framework for all energy sources |
| **National Renewable Energy and Energy Efficiency Policy (NREEEP), 2015** | targets for solar, wind, small hydro, biomass; promotes efficiency |
| **Renewable Energy Master Plan (REMP)** | road map and targets for renewables in the energy mix |
| **Rural Electrification Policy; Rural Electrification Strategy and Implementation Plan** | expanding access through grid extension, **mini-grids** and **solar home systems** |
| **Mini-Grid Regulations** (NERC) | permits and tariffs for small isolated and interconnected grids |
| **feed-in tariff regulations** | fixed price for renewable power sold to the grid |
| **Electricity Act, 2023** | replaced the 2005 Act; allows **states to regulate their own electricity markets**; supports renewables |
| **Energy Transition Plan** | pathway to **net-zero emissions by 2060** |
| **Nationally Determined Contribution** | Nigeria's climate pledge under the Paris Agreement |

## Rural electrification
**Rural electrification** is **bringing electricity to rural and under-served communities**.
The **Rural Electrification Agency (REA)** runs the **Rural Electrification Fund** and programmes such as the **Nigeria Electrification Project** (mini-grids and solar home systems), **Energizing Education** (universities and teaching hospitals) and **Energizing Economies** (markets), with **Solar Power Naija**.
**Benefits:** lighting and study; clinics and vaccine storage; water pumping; small businesses and jobs; less kerosene and firewood use; reduced rural–urban migration.

## Institutions
| Body | Role |
|---|---|
| **Federal Ministry of Power** | policy |
| **Nigerian Electricity Regulatory Commission (NERC)** | regulation, licences, tariffs |
| **Rural Electrification Agency (REA)** | off-grid and rural projects |
| **Energy Commission of Nigeria (ECN)** | energy planning and research |
| **Standards Organisation of Nigeria (SON)** | product standards; checks imported panels and batteries |
| **NEMSA** | inspection, testing and certification of electrical installations |
| **state electricity regulators** | under the 2023 Act |

## Incentives and support
import duty concessions on some solar components; tax holidays (pioneer status); grants and results-based finance for mini-grids; low-interest loans; net-metering provisions.

## Challenges
high initial cost; limited finance; **sub-standard and fake products**; shortage of skilled technicians; weak enforcement; policy inconsistency; low awareness; exchange-rate pressure on imports.

## Meaning for the installer
use **certified products**; follow **wiring regulations and standards**; obtain **certification / licence**; know about **permits for mini-grids**; take advantage of programmes and finance; give honest advice to customers.`,
        examples: `**Example 1.** Which agency is responsible for rural electrification projects in Nigeria? *Answer:* The **Rural Electrification Agency (REA)**.

**Example 2.** State one effect of the Electricity Act, 2023. *Answer:* It allows **states to regulate electricity** within their territory.

**Example 3.** Give two challenges to renewable energy in Nigeria. *Answer:* **High initial cost** and **sub-standard products**.`,
      },
      questions: [
        ["E", "A government's plan and rules for producing and using energy is an", "energy policy", "energy audit", "energy meter", "energy tariff only", "It guides investment and regulation."],
        ["E", "Bringing electricity to villages and under-served communities is", "rural electrification", "load shedding", "net metering", "privatisation", "It uses grid extension, mini-grids and solar home systems."],
        ["E", "REA stands for", "Rural Electrification Agency", "Renewable Energy Authority", "Regional Electricity Association", "Rural Engineering Agency", "It runs off-grid electrification programmes."],
        ["M", "The body that regulates the electricity industry and issues licences in Nigeria is", "NERC", "SON", "NAFDAC", "NCC", "The Nigerian Electricity Regulatory Commission."],
        ["M", "The quality of imported solar panels and batteries is checked by", "SON", "REA", "INEC", "CBN", "The Standards Organisation of Nigeria sets product standards."],
        ["M", "A small local electricity network serving a community, often solar-powered, is a", "mini-grid", "national grid", "transformer", "feeder pillar", "It may be isolated or interconnected."],
        ["M", "Which of these is a benefit of rural electrification?", "Growth of small businesses", "More kerosene use", "Increased rural–urban migration", "Higher generator sales only", "Electricity supports enterprise and services."],
        ["H", "The Electricity Act of 2023 is significant because it", "allows states to regulate their own electricity markets", "bans solar power", "abolished NERC entirely", "ends rural electrification", "It decentralised the power sector."],
        ["H", "A fixed price paid to producers for renewable electricity supplied to the grid is a", "feed-in tariff", "import duty", "tax holiday", "capacity charge", "It guarantees a return to investors."],
        ["H", "Nigeria's Energy Transition Plan targets net-zero emissions by", "2060", "2030", "2040", "2100", "It sets a pathway away from fossil fuels."],
      ],
    },
    {
      week: 8,
      title: "Climate Change and Renewable Energy",
      subtopics: ["Meaning and causes of climate change", "Effects in Nigeria", "Renewable energy sources", "Role of solar in sustainability"],
      objectives: ["Explain climate change and its causes", "Describe its effects", "Identify renewable energy sources", "Explain the role of solar energy in sustainability"],
      lesson: {
        title: "Solar Energy and a Changing Climate",
        summary: "How burning fossil fuels warms the planet and how solar power helps.",
        minutes: 40,
        notes: `## Climate change
**Climate change** is a **long-term change in average weather patterns** — temperature, rainfall, winds — largely caused today by human activity. **Global warming** is the rise in the earth's average temperature.

## The greenhouse effect
**Greenhouse gases** — **carbon dioxide (CO₂)**, **methane (CH₄)**, nitrous oxide, water vapour — **trap heat** radiated from the earth. More of these gases means more heat is retained.

## Causes
- **burning fossil fuels** — coal, oil, gas — in power stations, vehicles, generators
- **gas flaring**
- **deforestation** and bush burning
- agriculture (livestock methane, rice paddies, fertilisers)
- industrial processes; waste dumps

## Effects
rising temperatures and **heat waves**; irregular rainfall — **floods and droughts**; **desertification** in the north; **sea-level rise** and coastal erosion; shrinking of Lake Chad; crop failure and food insecurity; spread of diseases; conflict over land and water; damage to infrastructure.

## Responses
- **mitigation** — reducing emissions: renewable energy, energy efficiency, tree planting, ending gas flaring
- **adaptation** — coping with effects: flood defences, drought-resistant crops

## Renewable energy
**Renewable energy** comes from **sources that are naturally replenished**.
| Source | Use |
|---|---|
| **solar** | PV electricity; solar thermal (water heating, drying) |
| **wind** | turbines |
| **hydro** | dams; small hydro |
| **biomass and biogas** | fuel from plant and animal waste |
| **geothermal; tidal and wave** | heat from the earth; sea energy |

**Non-renewable:** coal, crude oil, natural gas, nuclear fuel.

## Role of solar in sustainability
**Sustainability** means **meeting present needs without compromising the ability of future generations to meet theirs**.
- **no emissions in operation** — replaces generators and grid power from gas
- **abundant** — Nigeria receives about **4–7 kWh/m² per day**
- **inexhaustible** and free fuel
- **energy access** for off-grid communities
- **cleaner air and less noise**
- **jobs** in installation, sales and maintenance
- **energy security** — less dependence on imported fuel
- supports **Sustainable Development Goal 7** (affordable and clean energy) and **SDG 13** (climate action)

## Carbon savings
Each kWh from solar replaces a kWh from fossil fuel. *If a generator emits about 0.8 kg of CO₂ per kWh, a solar system producing 3000 kWh a year avoids about* $3000 \\times 0.8 = 2400$ kg *(2.4 tonnes) of CO₂.*

## Limits
intermittency; battery cost; land use; manufacturing and disposal impacts — so solar must be well designed and responsibly managed.`,
        examples: `**Example 1.** Name two greenhouse gases. *Answer:* **Carbon dioxide** and **methane**.

**Example 2.** Why is solar energy called renewable? *Answer:* Its source, the sun, is **naturally replenished and inexhaustible**.

**Example 3.** A solar system produces 5000 kWh a year, replacing a generator emitting 0.8 kg CO₂ per kWh. How much CO₂ is avoided? *Answer:* $5000 \\times 0.8 = \\mathbf{4000}$ **kg**.`,
      },
      questions: [
        ["E", "A long-term change in average weather patterns is", "climate change", "weather forecast", "a season", "a heat wave only", "It is driven largely by human activity."],
        ["E", "The main greenhouse gas released by burning fossil fuels is", "carbon dioxide", "oxygen", "nitrogen", "helium", "It traps heat in the atmosphere."],
        ["E", "Which of these is a renewable source of energy?", "Solar", "Coal", "Crude oil", "Natural gas", "It is naturally replenished."],
        ["M", "Reducing greenhouse-gas emissions to limit climate change is", "mitigation", "adaptation", "desertification", "flaring", "Using renewable energy is an example."],
        ["M", "An effect of climate change in northern Nigeria is", "desertification", "sea-level rise", "coastal erosion", "more mangrove growth", "The desert advances southwards."],
        ["M", "Solar PV helps the environment mainly because it", "produces no emissions in operation", "uses much water", "burns less diesel than petrol", "needs no materials", "It generates without combustion."],
        ["M", "Meeting present needs without harming the ability of future generations to meet theirs is", "sustainability", "industrialisation", "privatisation", "globalisation", "It balances people, economy and environment."],
        ["H", "A solar system generates 4000 kWh a year in place of a generator emitting 0.75 kg of CO₂ per kWh. The CO₂ avoided each year is", "3000 kg", "5333 kg", "300 kg", "4750 kg", "4000 × 0.75. Answer: 3000 kg."],
        ["H", "The Sustainable Development Goal on affordable and clean energy is", "SDG 7", "SDG 1", "SDG 4", "SDG 16", "SDG 13 covers climate action."],
        ["H", "Building flood defences and planting drought-resistant crops are examples of", "adaptation", "mitigation", "emission", "deforestation", "They help people cope with effects already occurring."],
      ],
    },
    {
      week: 9,
      title: "Environmental Impacts of PV Systems",
      subtopics: ["Life-cycle impacts", "Waste from panels and batteries", "Recycling and safe disposal", "Sustainable practice for installers"],
      objectives: ["Describe the environmental impacts of PV systems over their life cycle", "Identify the wastes produced by solar systems", "Explain recycling and safe disposal", "Apply sustainable practices in installation and maintenance"],
      lesson: {
        title: "The Other Side of Solar",
        summary: "Solar is clean in use, but its manufacture, batteries and end-of-life wastes must be managed.",
        minutes: 40,
        notes: `## Life cycle of a PV system
**raw materials → manufacture → transport → installation → operation (25 years or more) → decommissioning → recycling or disposal**.

## Impacts at each stage
| Stage | Impacts |
|---|---|
| **mining and manufacture** | energy use and emissions; mining of quartz, silver, copper, aluminium, lithium, lead; chemicals and water |
| **transport** | fuel emissions; packaging waste |
| **installation** | land clearing for large plants; packaging, cable off-cuts |
| **operation** | almost none — no emissions or noise; water for cleaning; glare; land use |
| **end of life** | **electronic waste (e-waste)** — panels, batteries, inverters |

**Energy payback time** — the time a module takes to produce the energy used to make it — is about **1–3 years**, against a life of 25 years or more.

## Wastes from solar systems
- **modules:** glass (about 75%), **aluminium** frame, silicon, copper, silver, plastics; some contain **lead** solder or **cadmium**
- **lead–acid batteries:** **lead** and **sulphuric acid** — toxic and corrosive
- **lithium batteries:** fire risk; cobalt, nickel, lithium
- **inverters and controllers:** circuit boards, heavy metals
- cables, packaging

## Dangers of poor disposal
- **lead poisoning** — damages the brain and nerves, especially in children; informal battery breaking contaminates soil and water
- acid burns and soil acidification
- toxic smoke from **burning** cables and boards
- fires from damaged lithium cells
- waste of valuable materials

## Recycling
**Recycling** is **processing waste materials into new products**.
- **lead–acid batteries** are among the most recycled products: lead, plastic and acid are all recovered — return them to **licensed recyclers**
- **modules:** frame and junction box removed; glass, aluminium, copper and silicon recovered
- **lithium batteries:** specialised recovery of metals
- **reuse:** second-life panels and batteries for lighter duties; repair before replacement

## The waste hierarchy
**reduce → reuse → recycle → recover → dispose** (last resort).

## Regulation
**NESREA** regulations on electrical and electronic waste; **extended producer responsibility (EPR)** — makers and importers take back end-of-life products.

## Sustainable practice for installers
1. Sell **quality, certified products** with long life.
2. **Size systems correctly** — avoid premature battery failure.
3. **Maintain** systems to extend life.
4. **Take back** old batteries and panels; deliver to licensed recyclers.
5. Never **burn, bury or dump** batteries; never pour acid on the ground.
6. Wear **PPE** when handling batteries; store them upright in a ventilated place.
7. Collect packaging and off-cuts from site.
8. Minimise tree cutting; consider **agrivoltaics** (farming under panels) and rooftops rather than cleared land.
9. Educate customers.`,
        examples: `**Example 1.** Name two hazardous substances in a lead–acid battery. *Answer:* **Lead** and **sulphuric acid**.

**Example 2.** What is energy payback time? *Answer:* The time a module takes to **generate the energy used to manufacture it** — about 1–3 years.

**Example 3.** What should an installer do with a failed battery? *Answer:* **Return it to a licensed recycler**; never dump or burn it.`,
      },
      questions: [
        ["E", "Discarded panels, batteries and inverters are classed as", "e-waste", "organic waste", "sewage", "compost", "They are electrical and electronic waste."],
        ["E", "Processing waste materials into new products is", "recycling", "dumping", "burning", "burying", "It saves resources and reduces pollution."],
        ["E", "The toxic metal in most conventional solar batteries is", "lead", "gold", "iron", "calcium", "Lead–acid batteries contain lead plates."],
        ["M", "The largest part of a crystalline solar module by weight is", "glass", "silver", "silicon", "copper", "It makes up about three-quarters of the module."],
        ["M", "During operation, a PV system produces", "no emissions or noise", "smoke", "carbon monoxide", "loud noise", "Impacts arise mainly in manufacture and disposal."],
        ["M", "The correct order of the waste hierarchy begins with", "reduce", "dispose", "recycle", "recover", "Avoiding waste is the first choice."],
        ["M", "Old lead–acid batteries should be", "returned to a licensed recycler", "burnt in the open", "buried in the garden", "emptied into a drain", "Lead, plastic and acid can all be recovered safely."],
        ["H", "The time a module takes to generate the energy used to make it is its", "energy payback time", "warranty period", "peak sun hours", "depth of discharge", "It is roughly one to three years."],
        ["H", "A policy that makes producers and importers responsible for taking back end-of-life products is", "extended producer responsibility", "feed-in tariff", "net metering", "pioneer status", "It funds collection and recycling."],
        ["H", "Informal breaking of lead–acid batteries is dangerous mainly because it causes", "lead poisoning of people and soil", "lower battery prices", "over-charging", "shading of panels", "Lead damages the nervous system, especially in children."],
      ],
    },
  ],
};
