import type { StarterArticle } from "./hub";

/**
 * Science and Engineering Hub: how everyday machines and systems work, mechanically and electrically.
 * Original explanations written for Precious PS Academy for students, parents and school accounts.
 * Each guide is published to the student Knowledge Hub and the Parent Learning Hub. Safety notes
 * are general; real repairs on gas, mains electricity, fuel or sewage belong to qualified technicians.
 */

type Part = [heading: string, text: string];

/** The categories that make up the Science and Engineering Hub, in the order they are shown. */
export const SCIENCE_HUB_CATEGORIES = [
  "Vehicles",
  "Ships and boats",
  "Aircraft",
  "Space and the solar system",
  "Electricity and power",
  "Solar energy",
  "Plumbing and sanitation",
  "Computers and phones",
  "Machines at home",
  "Skills acquisition",
  "Art and craft",
] as const;
export type ScienceCategory = (typeof SCIENCE_HUB_CATEGORIES)[number];

const SAFETY = "\n\n## Stay safe\nUnderstanding how a system works is not the same as being trained to repair it. Never open mains electrical boards, gas lines, fuel systems, high-pressure parts or sewage pits yourself. Call a qualified technician and watch from a safe distance.";

const guide = (category: ScienceCategory, title: string, summary: string, parts: Part[], keyPoints: string[], activity: string, safety = true): StarterArticle[] => {
  const body = parts.map(([h, t]) => `## ${h}\n${t}`).join("\n\n") + (safety ? SAFETY : "");
  const base = { category, title, summary, body, keyPoints: keyPoints.join("\n"), activity };
  return [
    { ...base, audience: "STUDENT", section: "KNOWLEDGE" },
    { ...base, audience: "PARENT", section: "LEARNING" },
  ];
};

export const SCIENCE_ARTICLES: StarterArticle[] = [
  /* ------------------------------------------------------------------ vehicles */
  ...guide("Vehicles", "How a car engine works: the four-stroke cycle", "A petrol engine turns small, controlled explosions of fuel and air into the turning force that moves the car.", [
    ["The big idea", "A car engine is an **internal combustion engine**: fuel burns **inside** closed cylinders. Burning fuel and air makes hot gas that expands and pushes a **piston** down. The pistons turn a **crankshaft**, and the crankshaft turns the wheels through the gearbox.\n\n[[diagram: flow Fuel + air -> Burning in cylinder -> Piston pushed down -> Crankshaft turns -> Wheels turn || From fuel to motion]]"],
    ["The four strokes", "Each piston moves up and down inside its cylinder in a repeating cycle of four **strokes**:\n1. **Intake**: the piston moves down and the intake valve opens. A mixture of air and fuel is sucked in.\n2. **Compression**: both valves close and the piston moves up, squeezing the mixture into a small space.\n3. **Power (combustion)**: the **spark plug** fires. The mixture burns and the hot gas forces the piston down hard. This is the only stroke that makes power.\n4. **Exhaust**: the exhaust valve opens and the piston moves up, pushing burnt gases out through the exhaust pipe.\n\n[[diagram: flow Intake -> Compression -> Power -> Exhaust -> Intake || The four-stroke cycle repeats many times every second]]"],
    ["Main parts", "| Part | Job |\n|---|---|\n| **cylinder block** | holds the cylinders |\n| **piston** | moves up and down |\n| **connecting rod** | joins the piston to the crankshaft |\n| **crankshaft** | changes up-and-down motion into turning motion |\n| **camshaft** | opens and closes the valves at the right moment |\n| **spark plug** | makes the spark (petrol engines) |\n| **fuel injector** | sprays fuel in fine droplets |\n| **flywheel** | heavy wheel that keeps the engine turning smoothly |"],
    ["Diesel engines", "A diesel engine has **no spark plug**. It squeezes air so hard that the air becomes very hot; when diesel is sprayed in, it catches fire by itself. This is called **compression ignition**. Diesel engines are strong and economical, so lorries, buses, generators and tractors often use them."],
    ["Keeping the engine healthy", "- **Engine oil** reduces friction between moving metal parts. Check the dipstick and change oil at the recommended distance.\n- **Coolant** in the radiator carries heat away. An engine that overheats can be badly damaged.\n- **Air filter** keeps dust out. **Fuel filter** keeps dirt out of the injectors.\n- Warning lights on the dashboard should never be ignored."],
  ], ["Fuel burns inside the cylinders", "Intake, compression, power, exhaust", "Crankshaft turns up-and-down motion into rotation", "Diesel engines use compression ignition", "Oil reduces friction, coolant removes heat"], "Ask an adult to open a car bonnet with the engine OFF and cool. Find the dipstick, the radiator cap (do not open it), the battery and the air filter box."),

  ...guide("Vehicles", "The electrical system of a car", "The battery, starter, alternator and wiring work together to start the engine and power lights, horn and electronics.", [
    ["The main parts", "| Part | Job |\n|---|---|\n| **battery** (12 V) | stores electrical energy; powers the starter |\n| **starter motor** | turns the engine to start it |\n| **alternator** | a generator driven by the engine; charges the battery and powers the car while running |\n| **ignition system** | makes high voltage for the spark plugs |\n| **fuses and relays** | protect circuits from too much current |\n| **ECU** (engine control unit) | the car's computer; controls fuel and spark using sensors |\n| **wiring harness** | the bundles of wires that link everything |"],
    ["Starting the car", "[[diagram: flow Key or button -> Battery -> Starter motor -> Engine cranks -> Engine runs -> Alternator charges battery || What happens when you start a car]]\nWhen the engine is running, the **alternator** takes over. It is turned by a **belt** from the engine and produces electricity, so the battery is recharged."],
    ["Lights, horn and accessories", "Each device sits in its own **circuit**: battery → fuse → switch → device → back to the battery through the metal body of the car (the **earth** or ground). If a fuse blows, only that circuit stops, which protects the wiring from overheating."],
    ["Sensors and the ECU", "Modern cars have many **sensors**: oxygen sensor, temperature sensor, crankshaft position sensor, speed sensors. The **ECU** reads them hundreds of times a second and adjusts the fuel and spark. A mechanic uses an **OBD scanner** plugged into the car to read fault codes."],
    ["Common faults", "- Engine only clicks when started: weak or flat **battery**, loose or corroded **terminals**.\n- Battery keeps going flat: faulty **alternator** or something left on.\n- One light not working: blown **bulb** or **fuse**.\n- Battery warning light while driving: the alternator is not charging."],
  ], ["Car batteries are 12 volts", "The starter turns the engine", "The alternator charges the battery", "Fuses protect each circuit", "The ECU is the car's computer"], "With an adult, find the fuse box in a car (often under the dashboard or bonnet). Read the label that says which fuse protects which circuit."),

  ...guide("Vehicles", "Gearbox, brakes, steering and suspension", "How a vehicle passes power to its wheels, stops safely, turns and rides smoothly over bumps.", [
    ["The drivetrain", "[[diagram: flow Engine -> Clutch -> Gearbox -> Drive shaft -> Differential -> Wheels || How power reaches the wheels]]\n- The **clutch** connects and disconnects the engine from the gearbox so gears can be changed.\n- The **gearbox** gives low gears for strong pulling from rest and high gears for speed. An **automatic** gearbox changes gears by itself.\n- The **differential** lets the left and right wheels turn at different speeds when the car goes round a bend."],
    ["Brakes", "Pressing the brake pedal pushes **brake fluid** through pipes (a **hydraulic** system). The fluid pressure pushes **brake pads** against a spinning **disc**, or **shoes** against a **drum**. **Friction** changes the car's movement energy into heat.\n\n[[diagram: flow Pedal -> Master cylinder -> Brake fluid -> Calipers -> Pads squeeze disc -> Car slows || Hydraulic brakes]]\n**ABS** (anti-lock braking) stops the wheels from locking so the driver can still steer during hard braking."],
    ["Steering", "Turning the steering wheel turns a **rack and pinion** that moves the front wheels left or right. **Power steering** uses a pump or an electric motor to make turning easier."],
    ["Suspension and tyres", "**Springs** absorb bumps and **shock absorbers** stop the car bouncing. **Tyres** grip the road. Correct **tyre pressure** and good **tread** are vital for safe braking, especially on wet roads."],
  ], ["Clutch, gearbox, differential carry power", "Brakes are hydraulic and use friction", "ABS prevents wheel lock", "Rack and pinion steering", "Tyre pressure and tread save lives"], "Look at a bicycle: find its gears, chain, brake pads and brake cables. Compare them with the parts of a car described here."),

  ...guide("Vehicles", "Electric and hybrid vehicles", "Electric vehicles use batteries and motors instead of fuel engines; hybrids use both.", [
    ["How an electric vehicle works", "[[diagram: flow Charger -> Battery pack -> Inverter -> Electric motor -> Wheels || The electric drivetrain]]\nA large **lithium-ion battery pack** stores energy. The **inverter** changes the battery's direct current (DC) into the alternating current (AC) the motor needs. The **motor** turns the wheels directly, with very few moving parts."],
    ["Regenerative braking", "When an electric car slows down, the motor works as a **generator** and puts some energy back into the battery. This is called **regenerative braking**."],
    ["Hybrids", "A **hybrid** has a petrol engine and an electric motor. The motor helps at low speed and the engine charges the battery, saving fuel. A **plug-in hybrid** can also be charged from the mains."],
    ["Advantages and challenges", "**Advantages**: no exhaust fumes on the road, quiet, cheap to run where electricity is reliable, fewer parts to service.\n**Challenges**: high price, charging points are few in many places, and charging needs steady electricity. **Solar charging** is one answer being tried in Nigeria."],
  ], ["EVs use batteries and electric motors", "The inverter changes DC to AC", "Regenerative braking recovers energy", "Hybrids combine engine and motor"], "List three places in your town where an electric car charging point could be useful, and say how it could be powered."),

  /* ------------------------------------------------------------- ships, planes */
  ...guide("Ships and boats", "How ships float and move", "A steel ship floats because of its shape, and it is pushed along by propellers driven by large engines.", [
    ["Why a heavy ship floats", "When an object is put in water, the water pushes up on it. This push is called **upthrust** (buoyancy). **Archimedes' principle** says the upthrust equals the **weight of water pushed aside (displaced)**.\nA solid block of steel sinks because it displaces only a little water. The same steel shaped into a wide, hollow **hull** displaces a huge amount of water, so the upthrust is big enough to hold it up.\n\n[[diagram: flow Hollow hull -> Displaces much water -> Large upthrust -> Upthrust equals weight -> Ship floats || Archimedes' principle at work]]"],
    ["Staying upright", "Ships carry heavy **ballast** low down to keep their centre of gravity low, so they are **stable** and do not roll over. The **Plimsoll line** painted on the hull shows the safe loading level: overloading is dangerous."],
    ["Moving and steering", "Large **diesel engines** (or turbines) turn a **propeller** at the back. The spinning blades push water backwards, and the water pushes the ship forwards (Newton's third law). A **rudder** behind the propeller turns to steer. Big ships also use **bow thrusters** to move sideways in ports."],
    ["Kinds of vessels", "| Vessel | Use |\n|---|---|\n| container ship | carries goods in metal boxes |\n| oil tanker | carries crude oil (important to Nigeria's economy) |\n| ferry | carries people and vehicles across water, e.g. Lagos waterways |\n| fishing trawler | catches fish |\n| submarine | can sink and rise by filling or emptying **ballast tanks** |"],
    ["Safety on the water", "Always wear a **life jacket** on boats, never board an overloaded boat, and avoid travelling in storms or at night on small boats."],
  ], ["Upthrust equals weight of water displaced", "A hollow hull displaces lots of water", "Ballast keeps ships stable", "Propellers push water back", "Always wear a life jacket"], "Make a small boat from aluminium foil. Add coins one by one and count how many it carries before it sinks. Then roll the same foil into a ball and see what happens."),

  ...guide("Aircraft", "How an aeroplane flies", "Four forces act on every aeroplane: lift, weight, thrust and drag. Flight happens when they are controlled.", [
    ["The four forces", "| Force | Direction | Made by |\n|---|---|---|\n| **lift** | up | the wings |\n| **weight** | down | gravity |\n| **thrust** | forwards | engines |\n| **drag** | backwards | air resistance |\nTo take off, lift must be greater than weight, and thrust greater than drag."],
    ["How wings make lift", "A wing has a special shape called an **aerofoil** and meets the air at a slight upward angle (**angle of attack**). Air flowing over the curved top speeds up and its pressure drops; air below is pushed down. The **pressure difference** and the downward push of air together lift the wing.\n\n[[diagram: flow Engines give thrust -> Plane speeds up -> Air flows over wings -> Lower pressure above -> Lift greater than weight -> Take-off || Getting into the air]]"],
    ["Controlling the plane", "- **Ailerons** on the wings tilt the plane left or right (roll).\n- The **elevator** on the tail moves the nose up or down (pitch).\n- The **rudder** on the tail swings the nose left or right (yaw).\n- **Flaps** extend from the wings to give extra lift at low speed for take-off and landing."],
    ["Jet engines", "A **jet engine** sucks in air, **compresses** it, mixes it with fuel and burns it. The hot gas rushes out of the back, pushing the plane forwards; on the way it spins a **turbine** that drives the compressor.\n\n[[diagram: flow Suck -> Squeeze -> Bang -> Blow || Intake, compression, combustion, exhaust]]"],
    ["Safety in the sky", "Aircraft are checked before every flight, pilots follow checklists, and **air traffic controllers** keep planes apart. In Nigeria the **NCAA** regulates aviation safety."],
  ], ["Lift, weight, thrust, drag", "Wings are aerofoils", "Ailerons roll, elevator pitches, rudder yaws", "Jet engine: suck, squeeze, bang, blow"], "Fold two paper aeroplanes, one with flaps bent up at the back of the wings. Fly both and describe the difference.", false),

  /* ------------------------------------------------------------------- space */
  ...guide("Space and the solar system", "Our solar system", "The Sun and the eight planets, moons, asteroids and comets that move around it.", [
    ["The Sun at the centre", "The **Sun** is a star: a huge ball of hot gas that makes energy by **nuclear fusion**. Its gravity holds the whole solar system together. Light from the Sun takes about **8 minutes** to reach Earth."],
    ["The eight planets", "In order from the Sun: **Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune**. A memory sentence: *My Very Educated Mother Just Served Us Noodles.*\n- The four inner planets are small and **rocky**.\n- The four outer planets are **giants** made mostly of gas and ice.\n- **Jupiter** is the largest; **Saturn** has the most famous rings; **Venus** is the hottest.\n\n[[diagram: flow Mercury -> Venus -> Earth -> Mars -> Jupiter -> Saturn -> Uranus -> Neptune || Planets in order from the Sun]]"],
    ["Day, night, year and seasons", "- Earth **rotates** on its axis once in about **24 hours**: day and night.\n- Earth **revolves** round the Sun once in about **365¼ days**: one year (hence a leap year every four years).\n- Earth's axis is **tilted**, which gives seasons in many countries."],
    ["The Moon and eclipses", "The **Moon** orbits Earth about once a month and shines by reflecting sunlight, so we see **phases**. A **solar eclipse** happens when the Moon passes between the Sun and Earth; a **lunar eclipse** when Earth's shadow falls on the Moon. Never look straight at the Sun, even during an eclipse."],
    ["Other members", "**Dwarf planets** such as Pluto, **asteroids** (rocky bodies, many between Mars and Jupiter), **comets** (icy bodies with glowing tails), and **meteors** (shooting stars that burn up in our atmosphere)."],
  ], ["The Sun is a star", "Eight planets in order", "Rotation gives day and night", "Revolution gives a year", "Never look directly at the Sun"], "On a clear night, look for the Moon and note its shape every night for two weeks. Draw the phases you see.", false),

  ...guide("Space and the solar system", "Rockets and satellites", "How rockets escape gravity and how satellites give us television, GPS, weather forecasts and internet.", [
    ["How a rocket works", "A rocket burns fuel and **oxidiser** and throws hot gas out of the bottom at great speed. By **Newton's third law** the gas pushes the rocket up. Rockets carry their own oxygen, so they work in space where there is no air. Most rockets have **stages** that drop away when their fuel is used, making the rest lighter.\n\n[[diagram: flow Lift-off -> First stage drops away -> Second stage burns -> Orbit reached -> Satellite released || A launch]]"],
    ["Staying in orbit", "A satellite in **orbit** is falling towards Earth all the time, but it moves sideways so fast (about 28 000 km per hour in low orbit) that the ground curves away beneath it. Gravity keeps it going round instead of flying off."],
    ["Uses of satellites", "| Type | Use |\n|---|---|\n| communication | TV, phone, internet links |\n| navigation (GPS) | maps and directions on phones |\n| weather | cloud pictures and forecasts |\n| Earth observation | farming, floods, mapping |\n| science | telescopes in space |\nNigeria has launched satellites such as **NigComSat** (communications) and **NigeriaSat** (Earth observation), managed by **NASRDA**."],
  ], ["Rockets push gas down to go up", "Rockets carry their own oxidiser", "Orbit is continuous falling around Earth", "Satellites give TV, GPS and weather"], "Blow up a balloon and let it go without tying it. Explain its movement using Newton's third law.", false),

  /* -------------------------------------------------------- electricity, solar */
  ...guide("Electricity and power", "How electricity reaches your home", "From the power station through the national grid to the meter, distribution board and sockets in your house.", [
    ["From power station to home", "[[diagram: flow Power station -> Step-up transformer -> High-voltage lines -> Substation step-down -> Distribution transformer -> Meter -> Home || The journey of electricity]]\nElectricity is made in **power stations**: hydro dams (Kainji, Jebba, Shiroro), gas turbines and, increasingly, solar. **Transformers** raise the voltage very high for long-distance lines (less energy is lost) and lower it again near homes to **230 V**."],
    ["Inside the house", "- The **meter** measures energy used in **kilowatt-hours (kWh)**.\n- The **distribution board** has **circuit breakers** (or fuses) for each circuit.\n- **Live**, **neutral** and **earth** wires run to sockets and lights. The earth wire is a safety path that carries fault current away.\n- An **RCD** (residual current device) switches off in a split second if current leaks through a person."],
    ["Power, energy and your bill", "Power is measured in **watts (W)**. Energy = power × time.\nExample: a 100 W bulb used for 10 hours uses 100 × 10 = 1000 Wh = **1 kWh**. Multiply by the tariff to find the cost.\n\n[[diagram: bars Fan=75, Fridge=150, TV=100, Iron=1000, AC=1500 || Typical power ratings in watts]]"],
    ["Generators", "A **generator** turns an engine's motion into electricity: a coil spins inside a magnetic field (**electromagnetic induction**). Always run generators **outside**, far from windows: their exhaust contains **carbon monoxide**, a gas with no smell that kills."],
  ], ["Transformers change voltage", "Homes in Nigeria use about 230 V", "kWh = power in kW × hours", "Earth wire and RCD protect people", "Never run a generator indoors"], "List the electrical appliances in your home with their wattage (check the labels). Work out which one would use the most energy in a day."),

  ...guide("Solar energy", "How a home solar power system works", "Solar panels, a charge controller, batteries and an inverter work together to give steady power from sunlight.", [
    ["The parts", "| Part | Job |\n|---|---|\n| **solar panels (PV modules)** | change sunlight into DC electricity |\n| **charge controller** (PWM or MPPT) | controls charging so batteries are not damaged |\n| **battery bank** | stores energy for night and cloudy days |\n| **inverter** | changes DC from the battery into 230 V AC for appliances |\n| **cables, breakers, earthing** | carry power safely |"],
    ["How the energy flows", "[[diagram: flow Sunlight -> Solar panels -> Charge controller -> Batteries -> Inverter -> Appliances || Daytime charging, night-time use]]\nInside each panel, **silicon cells** release electrons when light hits them: the **photovoltaic effect**."],
    ["Sizing a simple system", "1. List appliances and hours of use; add up the **watt-hours per day**.\n2. Choose a battery that can supply that energy without being fully drained.\n3. Choose panels that can refill the battery in about **5 peak sun hours**.\n4. Choose an inverter bigger than the total power of appliances used at once.\nExample: 400 Wh per day ÷ 5 sun hours = 80 W, so allow about 120 W of panels for losses."],
    ["Care", "Clean panels gently (dust and harmattan haze reduce output), keep them unshaded, keep batteries ventilated, and avoid overloading the inverter."],
  ], ["PV cells turn light into DC", "Charge controller protects batteries", "Inverter makes AC", "Size by watt-hours per day", "Clean, unshaded panels work best"], "Work out the daily watt-hours for a fan (60 W, 8 hours), two bulbs (10 W each, 6 hours) and a phone charger (10 W, 3 hours)."),

  /* ------------------------------------------------------ plumbing, sanitation */
  ...guide("Plumbing and sanitation", "How a toilet cistern works", "Inside the toilet tank, a float valve fills the cistern and a flush valve empties it in one strong rush.", [
    ["The parts in the tank", "| Part | Job |\n|---|---|\n| **fill (float) valve** | lets water in from the supply pipe |\n| **float** | rises with the water and shuts the fill valve when the tank is full |\n| **flush valve / flapper** or **siphon** | releases the water into the pan |\n| **overflow pipe** | stops the tank from overflowing if the fill valve fails |\n| **lever or push button** | lifts the flapper or starts the siphon |"],
    ["One flush, step by step", "[[diagram: flow Press handle -> Flapper lifts -> Water rushes into pan -> Float drops -> Fill valve opens -> Tank refills -> Float rises -> Valve closes || The flush cycle]]\nIn the pan, the rush of water starts a **siphon** in the curved trap, pulling waste away to the drain. The **water seal** left in the trap stops bad smells from the sewer coming back."],
    ["Common faults and simple fixes", "- **Water keeps running**: worn flapper or float set too high. Adjust the float or replace the flapper.\n- **Tank fills slowly**: low pressure or blocked fill valve.\n- **Weak flush**: water level too low or partly blocked pan.\nTurn off the **isolation valve** behind the toilet before touching anything inside."],
    ["Saving water", "A dual-flush button gives a small flush and a full flush. Fixing a running cistern can save thousands of litres a month."],
  ], ["Float valve fills, flush valve empties", "Overflow prevents flooding", "Water seal in the trap blocks smells", "Turn off the isolation valve first"], "With an adult, lift the cistern lid (water only, it is clean) and watch the float rise and stop the water as the tank refills."),

  ...guide("Plumbing and sanitation", "Water supply and plumbing in a building", "How water gets from a borehole or mains to taps, and the tools and pipes plumbers use.", [
    ["Getting the water", "[[diagram: flow Borehole or mains -> Pump -> Overhead tank -> Gravity -> Pipes -> Taps, shower, cistern || A typical Nigerian home supply]]\nMany homes pump water from a **borehole** or well into an **overhead tank**. Gravity then pushes water down through the pipes; the higher the tank, the better the **pressure**."],
    ["Pipes and fittings", "| Item | Use |\n|---|---|\n| **PVC / uPVC pipes** | cold water and waste |\n| **PPR pipes** | hot and cold water (joined by heat welding) |\n| **galvanised steel** | older buildings, strong but rusts |\n| **elbows, tees, sockets, unions** | change direction, branch or join |\n| **gate valve / stop cock** | shut water off |\n| **non-return valve** | stops water flowing back |"],
    ["The plumber's tools", "Pipe wrench, adjustable spanner, hacksaw, pipe cutter, PPR welding machine, thread tape (**PTFE**), solvent cement, spirit level, measuring tape and a plunger."],
    ["Clean water matters", "Clean the overhead tank regularly and keep it covered. Keep boreholes and wells at least about **30 metres** from soakaways and septic tanks so sewage does not reach drinking water."],
  ], ["Overhead tanks use gravity", "PVC for cold water and waste, PPR for hot water", "Valves control flow", "Keep boreholes away from soakaways"], "Trace the water pipes you can see in your home or school, from the tank to the taps. Draw a simple map."),

  ...guide("Plumbing and sanitation", "Sewage, septic tanks and soakaways", "Where waste goes after a flush, and how septic systems and sewage treatment keep communities healthy.", [
    ["Two kinds of waste water", "- **Black water**: from toilets.\n- **Grey water**: from sinks, showers and washing machines.\nBoth carry germs and must be handled safely to prevent diseases such as **cholera**, **typhoid** and **diarrhoea**."],
    ["The septic tank system", "[[diagram: flow Toilet -> Inspection chamber -> Septic tank -> Soakaway pit -> Soil filters water || A septic system]]\nIn the **septic tank**, solids sink to the bottom as **sludge**, oils float as **scum**, and bacteria slowly break the waste down. The liquid flows to a **soakaway**, where the soil filters it. The tank must be **desludged** by an evacuation truck every few years. **Vent pipes** let gases escape safely."],
    ["Central sewage treatment", "In cities with sewers, waste water flows to a **treatment plant**:\n[[diagram: flow Screening -> Settling tanks -> Bacteria treatment -> Settling again -> Disinfection -> Clean water released || Stages of sewage treatment]]"],
    ["Rules for health", "Never open or enter a septic tank or manhole: the gases can kill in seconds. Do not pour oil, nappies or plastics into toilets. Keep soakaways far from wells and boreholes."],
  ], ["Black water and grey water", "Septic tank separates sludge and scum", "Soakaways let soil filter liquid", "Desludge regularly", "Never enter septic tanks or manholes"], "Find out how waste water from your school or home is handled. Is there a septic tank, soakaway or a sewer?"),

  /* --------------------------------------------------------- computers, phones */
  ...guide("Computers and phones", "How a computer works", "Input, processing, storage and output: how a computer follows instructions billions of times a second.", [
    ["The IPO cycle", "[[diagram: flow Input -> Processing -> Output || Every computer works like this, with storage keeping data]]\n- **Input devices**: keyboard, mouse, touch screen, microphone, camera, scanner.\n- **Processing**: the **CPU** (central processing unit) carries out instructions.\n- **Output devices**: screen, printer, speakers.\n- **Storage**: keeps programs and files."],
    ["Inside the box", "| Part | Job |\n|---|---|\n| **motherboard** | the main board that connects every part |\n| **CPU** | the brain: fetches, decodes and executes instructions |\n| **RAM** | fast, temporary memory for work in progress (lost when power goes off) |\n| **SSD or hard disk** | permanent storage |\n| **power supply unit** | changes mains AC to low-voltage DC |\n| **GPU** | draws images on the screen |\n| **fan and heat sink** | keep the CPU cool |"],
    ["Binary", "Computers store everything as **bits**: 0 (off) and 1 (on). 8 bits make a **byte**. Letters, pictures, music and videos are all turned into long patterns of 0s and 1s.\n\n[[diagram: flow Bit -> Byte (8 bits) -> Kilobyte -> Megabyte -> Gigabyte -> Terabyte || Units of storage]]"],
    ["Hardware and software", "**Hardware** is the parts you can touch. **Software** is the instructions: the **operating system** (Windows, Android, Linux) manages the hardware, and **applications** (word processors, browsers, games) do tasks for the user."],
  ], ["Input, process, output, storage", "CPU is the brain; RAM is temporary", "Everything is stored in binary", "Hardware and software work together"], "Write your first name in binary using a letter-to-number table (A = 1 … Z = 26) and convert each number to binary."),

  ...guide("Computers and phones", "How mobile phones and the internet work", "Radio waves, cell towers and data networks carry your calls, messages and videos around the world.", [
    ["Calls and cells", "A phone changes your voice into **digital data** and sends it as **radio waves** to the nearest **base station (mast)**. The area each mast covers is a **cell**; as you move, the call is **handed over** to the next mast. The network then routes the call to the other person.\n\n[[diagram: flow Your phone -> Nearby mast -> Network switching centre -> Other mast -> Friend's phone || A mobile call]]"],
    ["The internet", "The internet is a worldwide network of computers. Data travels in small **packets**, each with an address (the **IP address**). **Routers** pass packets towards their destination, often through **fibre-optic cables** under the sea that land in Lagos. Websites are stored on **servers** in data centres."],
    ["Inside a smartphone", "A smartphone has a **processor (SoC)**, RAM, storage, a **battery**, a touch screen, cameras, microphones, speakers, **antennas** for 4G/5G, Wi-Fi, Bluetooth and GPS, and sensors such as the accelerometer."],
    ["Using data wisely", "Videos use far more data than text. Download over Wi-Fi when possible, lower video quality, and switch off auto-play to save money."],
  ], ["Phones use radio waves to masts", "Cells and handover", "Data travels in packets", "Sea cables link Nigeria to the world"], "Check your phone settings to see which apps used the most data last month. Discuss with a parent how to reduce it."),

  /* ---------------------------------------------------------- home machines */
  ...guide("Machines at home", "How a refrigerator and air conditioner keep things cool", "A refrigerant gas carries heat out of the fridge or room by being compressed and allowed to expand in a loop.", [
    ["The refrigeration cycle", "[[diagram: flow Compressor squeezes gas -> Condenser releases heat outside -> Expansion valve -> Evaporator absorbs heat inside -> Compressor || The cooling loop]]\nWhen a liquid **evaporates**, it takes in heat. A fridge uses this: the **refrigerant** evaporates in pipes inside the fridge (the **evaporator**), taking heat from the food. The **compressor** squeezes the gas, making it hot, and the **condenser** coils at the back give that heat to the room."],
    ["The air conditioner", "A split AC works the same way: the **indoor unit** is the evaporator with a fan blowing cool air into the room; the **outdoor unit** holds the compressor and condenser that throw the heat outside. A **thermostat** switches the compressor on and off to keep the set temperature."],
    ["Saving energy", "Keep fridge doors shut, leave space behind for air, defrost freezers, set ACs to about **24–25 °C**, close windows when the AC is on, and clean filters monthly. Use a **voltage stabiliser** or protector where supply is unstable."],
  ], ["Evaporation absorbs heat", "Compressor, condenser, expansion valve, evaporator", "Heat is moved from inside to outside", "Clean filters and good settings save power"], "Feel (carefully) the warm air from the back of a fridge or an AC outdoor unit. Explain where that heat came from."),

  ...guide("Machines at home", "Simple machines all around us", "Levers, pulleys, wheels, inclined planes, wedges and screws make work easier by changing force and direction.", [
    ["Six simple machines", "| Machine | Example |\n|---|---|\n| **lever** | see-saw, crowbar, wheelbarrow, scissors |\n| **pulley** | flag pole, well bucket, crane |\n| **wheel and axle** | door knob, steering wheel, screwdriver |\n| **inclined plane** | ramp, staircase |\n| **wedge** | knife, axe, nail point |\n| **screw** | bottle lid, car jack |"],
    ["Effort, load and fulcrum", "A lever turns about a **fulcrum** (pivot). The **effort** is the force you apply; the **load** is what you move. A long handle means less effort.\n\n[[diagram: flow Effort -> Lever turns on fulcrum -> Load moves || How a lever helps]]\n**Mechanical advantage** = load ÷ effort. Example: lifting a 600 N load with 200 N effort gives MA = 3."],
    ["Machines that combine them", "A bicycle uses wheels and axles, levers (brakes and pedals), gears and a chain. A car jack uses a screw. A crane uses pulleys and levers. Understanding simple machines is the first step to engineering."],
  ], ["Six simple machines", "Fulcrum, effort, load", "MA = load ÷ effort", "Complex machines combine simple ones"], "Find one example of each of the six simple machines in your home or school and list them.", false),

  ...guide("Machines at home", "How a borehole pump and pressure system work", "Submersible pumps push underground water up to the tank, and pressure pumps keep taps flowing.", [
    ["Borehole basics", "A **borehole** is a narrow, deep hole drilled to reach an **aquifer** (water-bearing rock). It is lined with **casing pipes** and a **screen** that lets water in but keeps sand out."],
    ["The submersible pump", "[[diagram: flow Aquifer -> Screen -> Submersible pump -> Riser pipe -> Overhead tank || Lifting groundwater]]\nThe pump sits deep in the water. An electric **motor** spins **impellers** that push water up the riser pipe. A **float switch** in the tank turns the pump off when the tank is full, saving power and preventing overflow."],
    ["Pressure booster", "Where tanks are not high enough, a **surface pump** with a **pressure tank** keeps water at steady pressure. A **pressure switch** starts the pump when a tap is opened."],
    ["Water quality", "Test borehole water before drinking. Common treatments: **sediment filters**, **activated carbon**, **chlorination** or **UV**, and boiling. Keep the borehole capped and away from soakaways."],
  ], ["Boreholes reach aquifers", "Submersible pumps use impellers", "Float switches prevent overflow", "Test and treat drinking water"], "Ask how water reaches the taps in your school. Is there a borehole, pump and tank? Draw the system."),

  /* ------------------------------------------------------ skills acquisition */
  ...guide("Skills acquisition", "Making liquid soap: a small-business skill", "How liquid soap is made, the safety rules, and how to cost and sell it.", [
    ["What liquid soap is", "Liquid soap is a mixture of a **surfactant** (the part that lifts dirt and grease), **water**, a **thickener**, **colour** and **fragrance**. Many small producers in Nigeria use a ready-made base and mix it with water and additives."],
    ["Safety first", "Some soap chemicals, such as **caustic soda**, burn skin and eyes. Learn only under a trained adult, wear **gloves, goggles and a mask**, work in an airy place, never taste or smell chemicals directly, and keep them away from children. Label every container."],
    ["Process overview", "[[diagram: flow Measure water -> Dissolve thickener -> Add surfactant slowly -> Stir gently -> Add colour and scent -> Rest overnight -> Bottle and label || Typical steps]]"],
    ["Business sense", "Work out the **cost per litre** (materials ÷ litres made), add packaging and transport, then set a price. Keep records of every sale. Quality and clean packaging bring returning customers."],
  ], ["Learn under supervision", "Protective gear always", "Cost per litre guides price", "Label every container"], "With an adult, list the materials and prices for 10 litres of liquid soap and work out the cost per litre."),
  ...guide("Skills acquisition", "Adire tie-dye at home", "A Yoruba textile art you can learn: patterns, steps and care.", [
    ["About adire", "**Adire** is resist-dyed cloth from south-west Nigeria, made famous in **Abeokuta**. Parts of the cloth are tied, stitched or covered with starch so the dye cannot reach them, leaving patterns."],
    ["Steps", "[[diagram: flow Wash cloth -> Tie or fold pattern -> Dip in dye -> Air and dip again -> Rinse -> Untie and dry || Tie-dye steps]]\nUse rubber bands or raffia to tie circles, folds or stripes. Each dip makes the colour deeper."],
    ["Safety and care", "Wear gloves and old clothes; work outside. Wash new adire separately in cold water."],
  ], ["Resist-dyeing makes patterns", "Abeokuta is famous for adire", "More dips, deeper colour"], "Tie-dye an old white T-shirt with an adult and photograph the result."),
  ...guide("Skills acquisition", "Bead making and jewellery", "Design, string and sell beaded bracelets and necklaces.", [
    ["Materials", "Beads (glass, plastic, wood or coral), **nylon thread or wire**, clasps, crimp beads, scissors and pliers."],
    ["Making a bracelet", "1. Measure the wrist and add 2 cm.\n2. Plan a colour pattern.\n3. String the beads.\n4. Attach the clasp with a crimp bead.\n5. Test that it holds."],
    ["Culture and business", "Beads carry deep meaning in many Nigerian cultures (for example coral beads worn by royalty and brides). Sell at school fairs, online or to boutiques; price by materials plus your time."],
  ], ["Plan a pattern", "Secure clasps well", "Price materials plus time"], "Design and make a bracelet in your school colours."),
  ...guide("Skills acquisition", "Baking bread and snacks", "The science of baking and the steps to bake bread and chin-chin safely.", [
    ["The science", "**Yeast** feeds on sugar and gives off carbon dioxide gas, which makes bread dough **rise**. Heat in the oven sets the structure and browns the crust."],
    ["Bread steps", "[[diagram: flow Mix flour, yeast, sugar, salt, water -> Knead 10 minutes -> Rise 1 hour -> Shape -> Rise again -> Bake 25–30 minutes || Bread making]]"],
    ["Kitchen safety and hygiene", "Wash hands, tie hair back, use oven gloves, keep handles turned in and never leave hot oil unattended (chin-chin is fried)."],
  ], ["Yeast makes dough rise", "Knead for strength", "Hygiene and heat safety"], "Bake a small loaf with an adult and record the rising time."),
  ...guide("Skills acquisition", "Build a simple electric circuit", "Learn how circuits work with a safe battery, bulb and switch.", [
    ["Parts", "A **battery** (energy source), **wires** (conductors), a **bulb** or LED (load) and a **switch** (controls the flow)."],
    ["How it works", "[[diagram: flow Battery + -> Switch -> Bulb -> Battery - || A closed circuit lights the bulb]]\nCurrent flows only when the circuit is **closed**. Opening the switch breaks the path and the bulb goes off."],
    ["Series and parallel", "In **series**, bulbs share one path and are dimmer; in **parallel**, each has its own path and stays bright."],
    ["Safety", "Use only small batteries (1.5 V–9 V). **Never** experiment with mains electricity (230 V)."],
  ], ["A circuit must be closed", "Series vs parallel", "Batteries only, never mains"], "Build a series and a parallel circuit with two bulbs and compare their brightness."),
  /* ------------------------------------------------------------ art and craft */
  ...guide("Art and craft", "Drawing basics: line, shape, shading and perspective", "The building blocks every artist and engineer uses.", [
    ["Line and shape", "Every drawing starts with **lines** that form **shapes**: circles, squares and triangles. Sketch lightly first, then darken the lines you keep."],
    ["Shading", "Shading shows **light and shadow** so objects look solid. Press harder for dark areas and lighter for highlights. Practise a **tone scale** from white to black in five steps."],
    ["Perspective", "Objects look smaller as they get further away. In **one-point perspective**, lines meet at a **vanishing point** on the horizon.\n\n[[diagram: flow Horizon line -> Vanishing point -> Lines to the point -> Depth || One-point perspective]]"],
  ], ["Sketch lightly first", "Shading makes forms solid", "Lines meet at the vanishing point"], "Draw a road and trees in one-point perspective."),
  ...guide("Art and craft", "Colour: the colour wheel and painting", "Primary, secondary and complementary colours, and how artists use them.", [
    ["The colour wheel", "**Primary** colours: red, yellow, blue. **Secondary**: orange, green, purple (mix two primaries). **Complementary** colours sit opposite each other (red–green, blue–orange) and make each other look brighter."],
    ["Warm and cool", "Warm colours (red, orange, yellow) feel lively; cool colours (blue, green, purple) feel calm."],
    ["Painting tips", "Mix on a palette, paint large areas first, let layers dry, and clean brushes after use."],
  ], ["Three primaries make all colours", "Complements contrast", "Warm vs cool"], "Paint a colour wheel with 12 colours using only red, yellow and blue."),
  ...guide("Art and craft", "Nigerian art traditions", "Nok, Ife, Benin, Igbo-Ukwu, Uli and modern Nigerian art.", [
    ["Ancient masterpieces", "**Nok** terracotta heads (over 2,000 years old), **Igbo-Ukwu** bronzes (about the 9th century), **Ife** bronze and terracotta heads, and the **Benin** bronzes and ivories."],
    ["Living traditions", "**Uli** body and wall painting (Igbo), **adire** cloth (Yoruba), **Kano dye pits**, leatherwork, pottery (e.g. Ladi Kwali's famous pots) and wood carving."],
    ["Modern artists", "Ben Enwonwu, Bruce Onobrakpeya and many young Nigerian artists exhibit worldwide."],
  ], ["Nigeria has world-famous ancient art", "Traditions are still alive", "Modern Nigerian art is celebrated"], "Visit a museum or gallery, or research one Nigerian artist, and present their work to your class."),
  ...guide("Art and craft", "Clay modelling and pottery", "Shape, dry and fire clay into useful and beautiful objects.", [
    ["Methods", "**Pinch** pots (pressing with fingers), **coil** pots (rolling ropes of clay and stacking them) and **slab** building (flat sheets joined together)."],
    ["Drying and firing", "Dry slowly in the shade to avoid cracks, then **fire** in a kiln or traditional open fire to harden."],
    ["Decoration", "Carve patterns, add impressed designs, or polish (burnish) with a smooth stone."],
  ], ["Pinch, coil and slab", "Dry slowly", "Firing hardens clay"], "Make a small coil pot and decorate it with a pattern from your culture."),
];
