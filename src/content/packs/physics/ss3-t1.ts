import type { TermPlan } from "../types";

/** SS3 Physics, First Term — NERDC 2025 scheme (physics in technology). */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Conversion of Energy",
      subtopics: ["Meaning of energy conversion", "Principle of conservation of energy", "Conversions between mechanical, electrical, heat and chemical energy", "Energy converters: electric iron, generator, dynamo and solar panel"],
      objectives: ["Explain energy conversion", "State and apply the principle of conservation of energy", "Identify the energy change in common devices", "Calculate the efficiency of an energy converter"],
      lesson: {
        title: "Energy Conversion and Conservation",
        summary: "Energy is never made or destroyed; devices only change it from one form to another.",
        minutes: 40,
        notes: `## Forms of energy
**Energy** is the capacity to do work, measured in **joules (J)**. Its forms include mechanical (kinetic and potential), heat, light, sound, electrical, chemical and nuclear energy.

## Energy conversion
**Energy conversion (transformation)** is the change of energy from one form to another. A device that does this is an **energy converter** or **transducer**.

## Principle of conservation of energy
> Energy can neither be created nor destroyed; it can only be changed from one form to another. The total energy of an isolated system remains constant.

For a body falling freely from height $h$: potential energy lost = kinetic energy gained,
$$mgh = \\tfrac12 mv^2 \\Rightarrow v = \\sqrt{2gh}$$

## Common conversions
| Device | Energy change |
|---|---|
| **electric iron, heater, kettle** | electrical → heat |
| **electric bulb** | electrical → light and heat |
| **electric motor, fan** | electrical → mechanical |
| **generator, dynamo** | mechanical → electrical |
| **battery (cell) discharging** | chemical → electrical |
| **battery charging, electrolysis** | electrical → chemical |
| **solar panel (photovoltaic cell)** | light → electrical |
| **microphone** | sound → electrical |
| **loudspeaker** | electrical → sound |
| **thermocouple** | heat → electrical |
| **car engine** | chemical → heat → mechanical |
| **hydroelectric station** | potential → kinetic → electrical |
| **photosynthesis** | light → chemical |

### Chains of conversion
A petrol generator lighting a bulb: **chemical → heat → mechanical → electrical → light**.

## Practical demonstrations
- **Electric iron:** current through a high-resistance element produces heat, $H = I^2Rt$.
- **Dynamo:** turning a coil in a magnetic field induces a current that lights a bulb.
- **Solar panel:** light falling on the cells drives a current through a small motor or lamp.

## Efficiency
No converter is perfect: some energy is always "wasted", usually as heat and sound.
$$\\text{efficiency} = \\frac{\\text{useful energy (or power) output}}{\\text{total energy (or power) input}} \\times 100\\%$$
Efficiency is always **less than 100%**.

## Useful formulae
- kinetic energy $= \\tfrac12mv^2$; potential energy $= mgh$
- electrical energy $= IVt = I^2Rt = Pt$
- power $= \\dfrac{\\text{energy}}{\\text{time}}$ (watts)
- 1 kWh $= 3.6 \\times 10^6$ J`,
        examples: `**Example 1.** A 2 kg stone falls from a height of 20 m. Find its speed just before hitting the ground ($g = 10$ m/s²). *Solution:* $v = \\sqrt{2 \\times 10 \\times 20} = \\mathbf{20}$ **m/s**.

**Example 2.** A motor takes 500 J of electrical energy and does 400 J of useful work. Find its efficiency. *Solution:* $\\dfrac{400}{500} \\times 100 = \\mathbf{80\\%}$.

**Example 3.** State the energy change in a solar panel. *Solution:* **light energy to electrical energy**.`,
      },
      questions: [
        ["E", "An electric iron converts electrical energy mainly to", "heat energy", "light energy", "chemical energy", "sound energy", "The heating element becomes hot when current flows."],
        ["E", "A dynamo converts", "mechanical energy to electrical energy", "electrical energy to mechanical energy", "chemical energy to heat energy", "light energy to electrical energy", "Rotation of its coil generates a current."],
        ["E", "The principle of conservation of energy states that energy", "can neither be created nor destroyed", "is always lost as heat", "can be created by machines", "is destroyed when work is done", "Energy only changes from one form to another."],
        ["M", "The energy conversion in a solar panel is", "light to electrical", "heat to chemical", "electrical to light", "chemical to electrical", "Photovoltaic cells produce a current when light falls on them."],
        ["M", "A machine is supplied with 800 J of energy and gives a useful output of 600 J. Its efficiency is", "75%", "25%", "133%", "60%", "600 ÷ 800 × 100. Answer: 75%."],
        ["M", "A body of mass 4 kg is held 5 m above the ground. Its potential energy is ($g = 10$ m/s²)", "200 J", "20 J", "2 J", "50 J", "mgh = 4 × 10 × 5. Answer: 200 J."],
        ["M", "When a torch is switched on, the energy changes are", "chemical → electrical → light", "electrical → chemical → light", "light → electrical → chemical", "mechanical → electrical → light", "The cells store chemical energy."],
        ["H", "A ball is dropped from a height of 45 m. Neglecting air resistance, its speed on reaching the ground is ($g = 10$ m/s²)", "30 m/s", "45 m/s", "90 m/s", "21 m/s", "v = √(2 × 10 × 45) = √900. Answer: 30 m/s."],
        ["H", "A 2 kW heater is 80% efficient. The useful heat it supplies in 10 s is", "16 000 J", "20 000 J", "1 600 J", "25 000 J", "0.8 × 2000 × 10. Answer: 16 000 J."],
        ["H", "The correct sequence of energy changes in a hydroelectric power station is", "potential → kinetic → electrical", "kinetic → potential → electrical", "chemical → heat → electrical", "electrical → kinetic → potential", "Stored water falls, turns the turbine and drives the generator."],
      ],
      jamb: [
        ["M", "Which of the following devices converts sound energy into electrical energy?", "Microphone", "Loudspeaker", "Electric bell", "Thermocouple", "A microphone turns sound vibrations into electrical signals."],
        ["H", "A pump raises 50 kg of water through 12 m in 20 s. If $g = 10$ m/s², the useful power developed is", "300 W", "600 W", "6 000 W", "30 W", "Work = 50 × 10 × 12 = 6000 J; power = 6000 ÷ 20. Answer: 300 W."],
      ],
    },
    {
      week: 2,
      title: "Transmission Systems",
      subtopics: ["Concept of transmission", "Mechanical transmission: gears, pulleys, levers, belt and chain drives", "Electrical transmission: power lines and transformers", "Reducing energy loss in transmission"],
      objectives: ["Explain transmission of energy and power", "Describe mechanical transmission systems and calculate gear ratios", "Explain why electrical power is transmitted at high voltage", "Solve problems on transformers and power loss in cables"],
      lesson: {
        title: "Mechanical and Electrical Transmission",
        summary: "How power is carried from where it is produced to where it is used, with as little loss as possible.",
        minutes: 40,
        notes: `## Concept of transmission
**Transmission** is the transfer of energy or power from its **source** to the point where it is **used**. In a bicycle, power goes from the pedals to the back wheel; in the national grid, from the power station to homes.

## Mechanical transmission systems
| System | How it works | Where used |
|---|---|---|
| **gears** | toothed wheels that mesh; change speed, force and direction | gearbox, clock, grinding machine |
| **belt drive** | a belt round two pulleys; relies on friction | fan belt, sewing machine, grinding mill |
| **chain drive** | a chain round two sprockets; does not slip | bicycle, motorcycle |
| **pulleys** | wheel and rope; change direction of force and multiply it | crane, well, flag pole |
| **levers** | rigid bar turning about a pivot | brake pedal, pliers |
| **shafts** | rotating rod carrying torque | propeller shaft of a vehicle |

### Gears
Two meshing gears turn in **opposite** directions. If the driving gear has $N_1$ teeth and the driven gear $N_2$ teeth:
$$\\text{gear (velocity) ratio} = \\frac{N_2}{N_1} = \\frac{\\text{speed of driving gear}}{\\text{speed of driven gear}}$$
A small gear driving a large one gives **more force, less speed**; a large gear driving a small one gives **more speed, less force**.

For belt drives the speeds are inversely proportional to the pulley diameters: $n_1d_1 = n_2d_2$.

## Electrical transmission
Electricity generated at the station (about 11–25 kV) is **stepped up** to very high voltages (132 kV, 330 kV) for transmission through the **national grid**, then **stepped down** at substations to 33 kV, 11 kV and finally 415/240 V for consumers.

### Why high voltage?
Power sent: $P = IV$. Power lost as heat in cables of resistance $R$:
$$P_{\\text{loss}} = I^2R$$
For the same power, a **higher voltage means a smaller current**, and so a much smaller $I^2R$ loss. Thinner, cheaper cables can also be used.

### Why alternating current?
Only a.c. can be stepped up and down easily with **transformers**.

### The transformer
$$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}; \\qquad \\text{ideal: } V_pI_p = V_sI_s$$
- **step-up:** $N_s > N_p$; **step-down:** $N_s < N_p$
- efficiency $= \\dfrac{V_sI_s}{V_pI_p} \\times 100\\%$

Energy losses in a transformer and their remedies:
| Loss | Remedy |
|---|---|
| **eddy currents** in the core | laminated core |
| **hysteresis** | soft-iron core |
| **heat ($I^2R$)** in the coils | thick, low-resistance copper wire |
| **flux leakage** | winding the coils on the same core |

## Importance of efficient transmission
It saves fuel and cost, delivers adequate voltage to consumers, reduces overheating of cables, and reduces wear in machines (through lubrication and correct belt tension).`,
        examples: `**Example 1.** A driving gear with 20 teeth meshes with a driven gear of 60 teeth. If the driver turns at 900 rev/min, find the speed of the driven gear. *Solution:* ratio $= 3$; speed $= 900 \\div 3 = \\mathbf{300}$ **rev/min**.

**Example 2.** A cable of resistance 5 Ω carries 20 A. Find the power lost. *Solution:* $I^2R = 400 \\times 5 = \\mathbf{2000}$ **W**.

**Example 3.** A transformer has 200 primary turns and 4000 secondary turns. If the input is 12 V, find the output. *Solution:* $12 \\times 20 = \\mathbf{240}$ **V**.`,
      },
      questions: [
        ["E", "Electrical power is transmitted over long distances at", "high voltage and low current", "low voltage and high current", "high voltage and high current", "low voltage and low current", "A low current reduces heating loss in the cables."],
        ["E", "The device used to step voltage up or down in power transmission is the", "transformer", "rectifier", "dynamo", "capacitor", "A transformer changes alternating voltages."],
        ["E", "A bicycle transmits power from the pedals to the rear wheel by means of a", "chain drive", "belt drive", "lever only", "hydraulic press", "The chain runs over two sprockets."],
        ["M", "The power lost as heat in a transmission cable of resistance $R$ carrying a current $I$ is", "$I^2R$", "$IR$", "$\\frac{I}{R}$", "$IR^2$", "Heating power in a resistor is current squared times resistance."],
        ["M", "A driving gear of 15 teeth meshes with a driven gear of 45 teeth. The gear ratio is", "3", "$\\frac13$", "30", "60", "45 ÷ 15. Answer: 3."],
        ["M", "A transformer has 500 turns in the primary and 50 turns in the secondary. With 240 V across the primary, the secondary voltage is", "24 V", "2400 V", "120 V", "48 V", "240 × 50 ÷ 500. Answer: 24 V."],
        ["M", "Thick copper wire is used for the windings of a transformer in order to reduce", "heating ($I^2R$) losses", "eddy currents in the core", "hysteresis loss", "the turns ratio", "Thick wire has low resistance, so less heat is produced."],
        ["H", "A cable of resistance 4 Ω carries a current of 50 A. The power wasted in the cable is", "10 kW", "200 W", "1 kW", "100 kW", "50² × 4 = 10 000 W. Answer: 10 kW."],
        ["H", "A power station delivers 100 kW at 10 000 V through cables of total resistance 5 Ω. The power lost in the cables is", "500 W", "50 W", "5 000 W", "50 000 W", "I = 100 000 ÷ 10 000 = 10 A; loss = 10² × 5. Answer: 500 W."],
        ["H", "A transformer is supplied with 240 V and 2 A and delivers 12 V and 36 A. Its efficiency is", "90%", "80%", "95%", "111%", "Output 432 W ÷ input 480 W × 100. Answer: 90%."],
      ],
      jamb: [
        ["M", "Transformers are used in the transmission of a.c. rather than d.c. because", "only a changing current induces an e.m.f. in the secondary", "d.c. is too dangerous to transmit", "a.c. travels faster than d.c.", "d.c. cannot flow through copper", "A steady current gives no change of flux, so no induced e.m.f."],
        ["H", "Two pulleys of diameters 10 cm and 40 cm are connected by a belt. If the smaller pulley rotates at 1200 rev/min, the larger rotates at", "300 rev/min", "4800 rev/min", "600 rev/min", "120 rev/min", "n₁d₁ = n₂d₂: 1200 × 10 ÷ 40. Answer: 300 rev/min."],
      ],
    },
    {
      week: 3,
      title: "Uses of Machines",
      subtopics: ["Definition and functions of machines", "Mechanical advantage, velocity ratio and efficiency", "Applications: cranes, pulleys, levers, wheel and axle, hydraulic press"],
      objectives: ["Define a machine and state its functions", "Calculate mechanical advantage, velocity ratio and efficiency", "Describe the working of the lever, pulley, wheel and axle and hydraulic press", "State everyday applications of machines"],
      lesson: {
        title: "Machines at Work",
        summary: "How machines make work easier, how their performance is measured, and where they are used.",
        minutes: 40,
        notes: `## What is a machine?
A **machine** is a device by which a force (the **effort**) applied at one point is used to overcome another force (the **load**) at another point. A machine makes work **easier or more convenient**; it does **not** give more work than is put in.

## Functions of machines
- **multiply force** (jack, crowbar, hydraulic press)
- **multiply speed or distance** (bicycle gears, fishing rod)
- **change the direction** of a force (single fixed pulley)
- **transfer** energy from one place to another

## Measuring performance
$$\\text{M.A.} = \\frac{\\text{load}}{\\text{effort}} \\qquad \\text{V.R.} = \\frac{\\text{distance moved by effort}}{\\text{distance moved by load}}$$
$$\\text{efficiency} = \\frac{\\text{work output}}{\\text{work input}} \\times 100\\% = \\frac{\\text{M.A.}}{\\text{V.R.}} \\times 100\\%$$
- M.A. depends on **friction**; V.R. depends only on the **geometry** of the machine.
- In an ideal (frictionless) machine, M.A. = V.R. and efficiency is 100%.
- Real machines: efficiency < 100% because of friction and the weight of moving parts.

## Simple machines and their velocity ratios
| Machine | Velocity ratio | Use |
|---|---|---|
| **lever** | $\\dfrac{\\text{effort arm}}{\\text{load arm}}$ | crowbar, scissors, wheelbarrow, forceps |
| **pulley system (block and tackle)** | number of pulleys / rope sections supporting the load | cranes, lifts, building sites |
| **inclined plane** | $\\dfrac{\\text{length}}{\\text{height}} = \\dfrac{1}{\\sin\\theta}$ | ramp, loading lorries |
| **wheel and axle** | $\\dfrac{R}{r}$ (radius of wheel ÷ radius of axle) | windlass, steering wheel, screwdriver |
| **screw jack** | $\\dfrac{2\\pi a}{p}$ ($a$ = handle length, $p$ = pitch) | lifting vehicles |
| **gears** | $\\dfrac{\\text{teeth on driven}}{\\text{teeth on driver}}$ | gearbox |
| **hydraulic press** | $\\dfrac{R^2}{r^2}$ (ratio of piston areas) | car brakes, jacks, baling |

### Classes of lever
1. **First class** — fulcrum between load and effort: see-saw, crowbar, scissors, pliers.
2. **Second class** — load in the middle: wheelbarrow, nutcracker, bottle opener.
3. **Third class** — effort in the middle: forceps, fishing rod, human forearm (M.A. < 1).

### The hydraulic press
It works on **Pascal's principle**: pressure applied to an enclosed liquid is transmitted equally in all directions.
$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$
A small force on the small piston produces a large force on the large piston.

## Everyday applications
- **cranes** combine pulleys, gears and hydraulics to lift heavy loads
- **wheel and axle** in the well windlass, door knob and steering wheel
- **levers** in tools and in the human body
- **hydraulic press** in vehicle brakes, garage lifts and oil-palm presses`,
        examples: `**Example 1.** A machine lifts a load of 600 N with an effort of 150 N. Find the M.A. *Solution:* $600 \\div 150 = \\mathbf{4}$.

**Example 2.** A pulley system of V.R. 5 has an efficiency of 80%. Find the effort needed to lift 400 N. *Solution:* M.A. $= 0.8 \\times 5 = 4$; effort $= 400 \\div 4 = \\mathbf{100}$ **N**.

**Example 3.** In a hydraulic press, the piston areas are 5 cm² and 100 cm². What load can a 40 N effort lift (ideal)? *Solution:* $40 \\times 20 = \\mathbf{800}$ **N**.`,
      },
      questions: [
        ["E", "A wheelbarrow is an example of a", "second-class lever", "first-class lever", "third-class lever", "pulley", "The load lies between the fulcrum (wheel) and the effort."],
        ["E", "The hydraulic press works on", "Pascal's principle", "Archimedes' principle", "Hooke's law", "Boyle's law", "Pressure is transmitted equally through an enclosed liquid."],
        ["E", "The efficiency of a practical machine is always less than 100% mainly because of", "friction", "gravity alone", "its velocity ratio", "the load", "Work is wasted in overcoming friction."],
        ["M", "A machine of velocity ratio 6 has a mechanical advantage of 4.5. Its efficiency is", "75%", "133%", "27%", "45%", "4.5 ÷ 6 × 100. Answer: 75%."],
        ["M", "A wheel and axle has a wheel of radius 30 cm and an axle of radius 5 cm. Its velocity ratio is", "6", "25", "35", "150", "30 ÷ 5. Answer: 6."],
        ["M", "A ramp used for loading lorries is 12 m long and rises 3 m. Its velocity ratio is", "4", "36", "0.25", "9", "Length ÷ height = 12 ÷ 3. Answer: 4."],
        ["M", "Which of these is a third-class lever?", "A pair of forceps", "A crowbar", "A nutcracker", "A see-saw", "The effort is applied between the fulcrum and the load."],
        ["H", "A block and tackle of 5 pulleys has an efficiency of 60%. The effort required to raise a load of 900 N is", "300 N", "180 N", "540 N", "150 N", "M.A. = 0.6 × 5 = 3; effort = 900 ÷ 3. Answer: 300 N."],
        ["H", "The pistons of a hydraulic press have radii 2 cm and 10 cm. Its velocity ratio is", "25", "5", "20", "100", "(10 ÷ 2)² = 25. Answer: 25."],
        ["H", "An effort of 50 N moves through 8 m to raise a load of 300 N through 1 m. The efficiency of the machine is", "75%", "60%", "37.5%", "133%", "Output 300 J ÷ input 400 J × 100. Answer: 75%."],
      ],
      jamb: [
        ["M", "The velocity ratio of a machine depends on", "the geometry of the machine", "friction between its parts", "the load being lifted", "the effort applied", "It is fixed by the dimensions and arrangement of the parts."],
        ["H", "A screw jack has a pitch of 0.5 cm and a handle of length 35 cm. Its velocity ratio is ($\\pi = \\frac{22}{7}$)", "440", "220", "70", "110", "2π × 35 ÷ 0.5 = 220 ÷ 0.5. Answer: 440."],
      ],
    },
    {
      week: 4,
      title: "Repair and Maintenance of Machines",
      subtopics: ["Meaning of repair and maintenance", "Common faults in machines", "Lubrication, cleaning and routine checks", "Preventive and corrective maintenance"],
      objectives: ["Distinguish between repair and maintenance", "Identify common faults in machines and their causes", "Explain the importance of lubrication, cleaning and routine checks", "Differentiate preventive from corrective maintenance"],
      lesson: {
        title: "Keeping Machines Working",
        summary: "Why machines fail, and how regular care keeps them efficient, safe and long-lasting.",
        minutes: 40,
        notes: `## Meaning
- **Maintenance** is the regular care given to a machine to keep it in **good working condition** and prevent breakdown.
- **Repair** is the work done to **restore** a machine that has already **developed a fault** or broken down.

Maintenance comes *before* failure; repair comes *after*.

## Common faults in machines and their causes
| Fault | Likely cause |
|---|---|
| **overheating** | lack of oil or coolant; overloading; blocked ventilation |
| **excessive noise and vibration** | loose bolts; worn bearings; misalignment |
| **wear of moving parts** | friction; lack of lubrication; dirt |
| **rust and corrosion** | moisture and air acting on iron parts |
| **slipping belts** | loose or worn belt |
| **leakages** | worn seals and gaskets |
| **electrical faults** | blown fuse; loose connection; damaged insulation; worn carbon brushes |
| **failure to start** | flat battery; no fuel; faulty spark plug |
| **reduced efficiency** | friction; blunt tools; clogged filters |

## Physics behind the care of machines
### Friction and lubrication
**Friction** between moving surfaces wastes energy as **heat**, causes **wear**, and lowers **efficiency**. **Lubrication** — applying oil or grease — separates the surfaces with a thin film, so that
- friction and wear are reduced,
- heat is carried away,
- rusting is prevented,
- efficiency rises.
**Ball and roller bearings** replace sliding friction with much smaller rolling friction.

### Cleaning
Dust and grit act as abrasives; dirt blocks air filters and cooling fins. Clean machines run cooler and last longer.

### Preventing rust
Painting, oiling or greasing, galvanising, and keeping machines dry.

### Routine checks
- oil level and quality; coolant (water) level
- tyre pressure; belt tension
- tightness of bolts and nuts
- condition of cables, plugs and fuses
- battery terminals and electrolyte level
- unusual sounds, smells or leaks

## Types of maintenance
| | Preventive maintenance | Corrective maintenance |
|---|---|---|
| **when** | at planned intervals, before failure | after a fault or breakdown |
| **aim** | to prevent breakdown | to restore the machine |
| **examples** | servicing, oil change, lubrication, replacing filters, inspection | replacing a broken shaft, rewinding a burnt motor |
| **cost** | low and regular | often high and unplanned |
| **downtime** | short and scheduled | long and unexpected |

**Predictive maintenance** uses measurements (temperature, vibration) to tell when a part is about to fail.

## Importance of maintenance
- prolongs the **life** of the machine
- keeps **efficiency** high and running costs low
- ensures **safety** of the operator
- reduces **breakdowns** and loss of production
- retains the machine's **value**

## Safety when repairing machines
Switch off and unplug first; let hot parts cool; use the right tools; wear protective clothing; replace guards; never by-pass a fuse with thick wire.`,
        examples: `**Example 1.** State one difference between maintenance and repair. *Solution:* Maintenance is done **before** a fault to prevent it; repair is done **after** a fault to correct it.

**Example 2.** Why does lubrication raise the efficiency of a machine? *Solution:* It **reduces friction**, so less of the input work is wasted as heat.

**Example 3.** Classify: changing engine oil every 5 000 km. *Solution:* **preventive maintenance**.`,
      },
      questions: [
        ["E", "The regular care given to a machine to keep it in good working condition is called", "maintenance", "repair", "overhaul after breakdown", "installation", "Maintenance is done to prevent faults."],
        ["E", "Oil is applied to the moving parts of a machine mainly to", "reduce friction", "increase friction", "increase its weight", "make it noisy", "A film of oil separates the rubbing surfaces."],
        ["E", "Work done to restore a machine that has broken down is", "repair", "preventive maintenance", "lubrication", "routine inspection", "Repair corrects a fault that has already occurred."],
        ["M", "Maintenance carried out at planned intervals before a machine fails is", "preventive maintenance", "corrective maintenance", "breakdown maintenance", "emergency repair", "It aims to prevent failure."],
        ["M", "Which of these is NOT a result of friction in a machine?", "Increase in efficiency", "Wear of moving parts", "Production of heat", "Waste of energy", "Friction lowers efficiency."],
        ["M", "Ball bearings reduce friction because", "rolling friction is less than sliding friction", "they increase the weight on the shaft", "they are made of rubber", "they stop the shaft from turning", "The balls roll between the surfaces."],
        ["M", "Rusting of the iron parts of a machine can be prevented by", "painting or greasing them", "washing them daily with water", "leaving them in damp air", "heating them strongly", "A coating keeps air and moisture away."],
        ["H", "Replacing a burnt-out electric motor winding is an example of", "corrective maintenance", "preventive maintenance", "predictive maintenance", "routine lubrication", "It is done after the fault has occurred."],
        ["H", "An engine that overheats is most likely to have", "insufficient oil or coolant", "too much lubricating oil", "a fully charged battery", "new bearings", "Oil and coolant carry heat away from the engine."],
        ["H", "A machine of velocity ratio 5 required an effort of 250 N to lift 1000 N. After lubrication the effort fell to 220 N. The new efficiency is about", "91%", "80%", "88%", "110%", "M.A. = 1000 ÷ 220 ≈ 4.55; 4.55 ÷ 5 × 100 ≈ 91%."],
      ],
      jamb: [
        ["M", "Which of the following is a disadvantage of friction in machines?", "It causes wear and tear of moving parts", "It enables belts to drive pulleys", "It enables brakes to work", "It allows nuts to grip bolts", "Wear is a harmful effect; the others are useful."],
        ["H", "A machine has an efficiency of 60% before servicing and 75% after. For the same useful output of 300 J, the input energy saved is", "100 J", "45 J", "75 J", "25 J", "Before: 300 ÷ 0.6 = 500 J; after: 300 ÷ 0.75 = 400 J. Answer: 100 J."],
      ],
    },
    {
      week: 6,
      title: "Dams and Energy Production",
      subtopics: ["Types of dams", "Hydroelectric power generation", "Advantages and disadvantages of dams", "Dams in Nigeria: Kainji, Jebba and Shiroro"],
      objectives: ["Describe the types and uses of dams", "Explain the processes in hydroelectric power generation", "Calculate the power available from falling water", "State the advantages and disadvantages of dams and name Nigerian examples"],
      lesson: {
        title: "Hydroelectric Power",
        summary: "How the potential energy of water stored behind a dam becomes electricity.",
        minutes: 40,
        notes: `## What is a dam?
A **dam** is a barrier built across a river to hold back water and form a **reservoir** (artificial lake).

## Types of dams by purpose
| Type | Purpose |
|---|---|
| **hydroelectric dam** | generation of electricity |
| **irrigation dam** | supplying water to farmland |
| **water-supply dam** | domestic and industrial water |
| **flood-control dam** | holding back flood water |
| **multipurpose dam** | several of these together: power, irrigation, fishing, navigation, flood control |

## Hydroelectric power generation
1. Water is stored at a height in the **reservoir** — it has **gravitational potential energy**.
2. Water flows down the **penstock** (large pipe) — potential energy changes to **kinetic energy**.
3. The fast water turns the blades of a **turbine** — kinetic energy of water becomes **rotational kinetic energy**.
4. The turbine shaft turns the **generator (alternator)** — mechanical energy becomes **electrical energy** by electromagnetic induction.
5. A **step-up transformer** raises the voltage for transmission on the national grid.
6. The water leaves through the **tailrace** back to the river.

**Energy chain:** potential → kinetic → mechanical (rotational) → electrical.

## Power from falling water
If a mass $m$ of water falls through height $h$ in time $t$:
$$P = \\frac{mgh}{t}$$
With volume flow rate $Q$ (m³/s) and density $\\rho$ (1000 kg/m³):
$$P = \\rho Q g h$$
Electrical output $=$ efficiency × this power. The dam wall is **thicker at the base** because water pressure, $p = \\rho gh$, increases with depth.

## Advantages of dams
- the source (water) is **renewable** and free
- **no fuel** is burnt, so **no air pollution**
- **low running cost** once built
- output can be changed quickly to meet demand
- the lake supports **fishing, irrigation, water supply, transport and tourism**
- flood control downstream

## Disadvantages
- very **high cost** of construction
- **floods land**; people, farms and wildlife are displaced
- output falls in the **dry season** when the water level is low
- **silting** of the reservoir
- breeding of disease vectors (mosquitoes, snails carrying bilharzia)
- danger of **dam failure** and downstream flooding
- can be built only where there is a suitable river and site

## Hydroelectric dams in Nigeria
| Dam | River | State | Commissioned |
|---|---|---|---|
| **Kainji** | Niger | Niger State | 1968 |
| **Jebba** | Niger | Niger / Kwara boundary | 1985 |
| **Shiroro** | Kaduna | Niger State | 1990 |

Kainji, the first, created Kainji Lake. Other dams, such as Tiga, Goronyo and Bakolori, are used mainly for irrigation and water supply.`,
        examples: `**Example 1.** Water falls through 50 m at a rate of 200 kg/s. Find the power available ($g = 10$ m/s²). *Solution:* $200 \\times 10 \\times 50 = 100\\,000$ W $= \\mathbf{100}$ **kW**.

**Example 2.** If the station in Example 1 is 80% efficient, find the electrical output. *Solution:* $0.8 \\times 100 = \\mathbf{80}$ **kW**.

**Example 3.** On which river is Shiroro Dam? *Solution:* the **River Kaduna**.`,
      },
      questions: [
        ["E", "The form of energy possessed by water stored behind a dam is", "gravitational potential energy", "chemical energy", "nuclear energy", "sound energy", "The water is held at a height."],
        ["E", "Kainji Dam is built on the River", "Niger", "Benue", "Kaduna", "Ogun", "Kainji and Jebba dams are both on the Niger."],
        ["E", "In a hydroelectric station, the falling water turns a", "turbine", "transformer", "boiler", "rectifier", "The turbine drives the generator."],
        ["M", "A dam that provides electricity, irrigation water and fishing is described as", "multipurpose", "single-purpose", "an earth dam only", "a coffer dam", "It serves several purposes at once."],
        ["M", "Water falls through 20 m at the rate of 500 kg/s. The power available is ($g = 10$ m/s²)", "100 kW", "10 kW", "1 000 kW", "25 kW", "500 × 10 × 20 = 100 000 W. Answer: 100 kW."],
        ["M", "The wall of a dam is made thicker at the base because", "pressure in a liquid increases with depth", "water is denser at the surface", "the base is exposed to wind", "pressure is greatest at the surface", "p = ρgh is greatest at the bottom."],
        ["M", "An advantage of hydroelectric power over thermal power is that it", "does not pollute the air", "is cheap to construct", "works without a river", "never varies with the seasons", "No fuel is burnt."],
        ["H", "A hydroelectric plant receives 2 m³ of water per second falling through 40 m. If its efficiency is 75%, the electrical power output is (density of water = 1000 kg/m³, $g = 10$ m/s²)", "600 kW", "800 kW", "60 kW", "1 067 kW", "1000 × 2 × 10 × 40 = 800 kW; 0.75 × 800. Answer: 600 kW."],
        ["H", "Shiroro Dam is located on the River", "Kaduna", "Niger", "Benue", "Sokoto", "Shiroro is on the Kaduna river in Niger State."],
        ["H", "The pressure due to water at the bottom of a reservoir 30 m deep is (density of water = 1000 kg/m³, $g = 10$ m/s²)", "$3.0 \\times 10^5$ Pa", "$3.0 \\times 10^4$ Pa", "$3.0 \\times 10^3$ Pa", "$3.0 \\times 10^6$ Pa", "ρgh = 1000 × 10 × 30. Answer: 3.0 × 10⁵ Pa."],
      ],
      jamb: [
        ["M", "Which of the following is a renewable source of energy?", "Hydroelectric power", "Coal", "Petroleum", "Natural gas", "Water is replaced continually by rainfall."],
        ["H", "A turbine is driven by water falling through 80 m. Neglecting losses, the speed of the water on reaching the turbine is ($g = 10$ m/s²)", "40 m/s", "80 m/s", "28 m/s", "800 m/s", "v = √(2 × 10 × 80) = √1600. Answer: 40 m/s."],
      ],
    },
    {
      week: 8,
      title: "Rockets and Satellites",
      subtopics: ["Principle of rocket propulsion", "Solid-fuel and liquid-fuel rockets", "Types of satellites", "Importance of satellites"],
      objectives: ["Explain rocket propulsion using Newton's third law and conservation of momentum", "Distinguish solid-fuel from liquid-fuel rockets", "Classify satellites by function", "Solve simple problems on orbital motion and escape velocity"],
      lesson: {
        title: "Rocket Propulsion and Artificial Satellites",
        summary: "How rockets move, how satellites stay in orbit, and what satellites do for us.",
        minutes: 40,
        notes: `## Rocket propulsion
A rocket burns fuel and expels hot gases backward at high speed. By **Newton's third law** — *to every action there is an equal and opposite reaction* — the gases push the rocket **forward**.

By **conservation of linear momentum**, the backward momentum of the gases equals the forward momentum gained by the rocket:
$$m_{\\text{gas}}v_{\\text{gas}} = M_{\\text{rocket}}V$$
The **thrust** is
$$F = \\frac{\\Delta m}{\\Delta t} \\times v_{\\text{exhaust}}$$
(mass of gas ejected per second × exhaust speed).

A rocket carries **both fuel and oxidiser**, so it works in the **vacuum of space**, unlike a jet engine, which needs air. Rockets are built in **stages**; each empty stage is dropped to reduce mass.

## Types of rockets
| | Solid-fuel rocket | Liquid-fuel rocket |
|---|---|---|
| **propellant** | fuel and oxidiser mixed as a solid | liquid fuel (e.g. liquid hydrogen, kerosene) and liquid oxygen in separate tanks |
| **control** | once lit, cannot easily be stopped | thrust can be varied, stopped and restarted |
| **design** | simple, easily stored | complex pumps and tanks |
| **use** | boosters, fireworks, missiles | main engines of launch vehicles |

## Satellites
A **satellite** is a body that orbits a larger one. The Moon is the Earth's **natural** satellite; **artificial** satellites are placed in orbit by rockets.

### Why a satellite stays in orbit
Gravity supplies the **centripetal force**:
$$\\frac{GMm}{r^2} = \\frac{mv^2}{r} \\Rightarrow v = \\sqrt{\\frac{GM}{r}}$$
Close to the Earth's surface, $v = \\sqrt{gR} \\approx 8$ km/s. The orbital speed does **not** depend on the mass of the satellite.

Period: $T = \\dfrac{2\\pi r}{v}$.

### Escape velocity
The minimum speed needed to leave the Earth's gravitational field:
$$v_e = \\sqrt{2gR} \\approx 11.2 \\text{ km/s}$$

### Geostationary (parking) orbit
A satellite about **36 000 km** above the equator, moving west to east with a period of **24 hours**, stays above the same point on the Earth. Communication satellites use this orbit.

### Types of satellites by function
| Type | Use |
|---|---|
| **communication** | telephone, television, radio, internet |
| **navigation** | position finding (e.g. GPS) for ships, aircraft, phones |
| **weather (meteorological)** | cloud images, storm tracking, forecasting |
| **earth-observation / remote sensing** | mapping, agriculture, disaster monitoring |
| **military (reconnaissance)** | surveillance and security |
| **scientific** | astronomy and space research |

## Importance of satellites
Global communication and broadcasting; accurate weather forecasts; navigation; mapping and resource surveys; disaster warning and relief; security; scientific research.

## Weightlessness
An astronaut in orbit feels weightless because the astronaut and the spacecraft are both in **free fall** with the same acceleration — not because gravity is absent.`,
        examples: `**Example 1.** A rocket ejects 50 kg of gas per second at 2 000 m/s. Find the thrust. *Solution:* $50 \\times 2000 = \\mathbf{1.0 \\times 10^5}$ **N**.

**Example 2.** Calculate the escape velocity from the Earth ($g = 10$ m/s², $R = 6.4 \\times 10^6$ m). *Solution:* $\\sqrt{2 \\times 10 \\times 6.4 \\times 10^6} = \\sqrt{1.28 \\times 10^8} \\approx \\mathbf{1.13 \\times 10^4}$ **m/s**.

**Example 3.** What is the period of a geostationary satellite? *Solution:* **24 hours**.`,
      },
      questions: [
        ["E", "Rocket propulsion is an application of Newton's", "third law of motion", "first law of motion", "law of cooling", "law of gravitation only", "The expelled gases react on the rocket."],
        ["E", "The natural satellite of the Earth is the", "Moon", "Sun", "planet Mars", "Pole Star", "The Moon orbits the Earth."],
        ["E", "A satellite used for tracking storms and cloud movement is a", "weather satellite", "navigation satellite", "military satellite", "communication satellite", "Meteorological satellites observe the atmosphere."],
        ["M", "A rocket can operate in the vacuum of space because it", "carries its own oxidiser", "pushes against the air", "uses solar wind", "has no need of fuel", "It does not depend on atmospheric oxygen."],
        ["M", "Rockets are built in stages so that", "empty stages can be dropped to reduce mass", "the rocket can carry more passengers", "the fuel burns more slowly", "air resistance is increased", "A lighter rocket gains more speed from the same thrust."],
        ["M", "A rocket expels gas at the rate of 20 kg/s with a speed of 1 500 m/s. The thrust on the rocket is", "$3.0 \\times 10^4$ N", "75 N", "$1.5 \\times 10^3$ N", "$3.0 \\times 10^3$ N", "20 × 1500. Answer: 3.0 × 10⁴ N."],
        ["M", "The force that keeps a satellite in its orbit round the Earth is", "gravitational force", "magnetic force", "frictional force", "the thrust of its engines", "Gravity supplies the centripetal force."],
        ["H", "The escape velocity from the surface of a planet of radius $R$ where the acceleration of free fall is $g$ is", "$\\sqrt{2gR}$", "$\\sqrt{gR}$", "$2gR$", "$\\sqrt{\\frac{g}{R}}$", "Kinetic energy must equal the gravitational potential energy needed to escape."],
        ["H", "The speed of a satellite in a circular orbit close to the Earth's surface is ($g = 10$ m/s², $R = 6.4 \\times 10^6$ m)", "$8.0 \\times 10^3$ m/s", "$1.13 \\times 10^4$ m/s", "$6.4 \\times 10^3$ m/s", "$8.0 \\times 10^6$ m/s", "v = √(gR) = √(6.4 × 10⁷). Answer: 8.0 × 10³ m/s."],
        ["H", "An astronaut in an orbiting spacecraft feels weightless because", "he and the spacecraft are in free fall together", "there is no gravity in space", "his mass becomes zero", "the spacecraft is at rest", "Both have the same acceleration towards the Earth."],
      ],
      jamb: [
        ["M", "The orbital speed of a satellite around the Earth is independent of the", "mass of the satellite", "mass of the Earth", "radius of the orbit", "gravitational constant", "v = √(GM/r) contains no satellite mass."],
        ["H", "A rocket of mass 1 000 kg ejects gas at 40 kg/s with a speed of 500 m/s. Its initial acceleration, neglecting gravity, is", "20 m/s²", "2 m/s²", "200 m/s²", "12.5 m/s²", "Thrust = 40 × 500 = 20 000 N; a = 20 000 ÷ 1000. Answer: 20 m/s²."],
      ],
    },
    {
      week: 9,
      title: "NigeriaSat-1",
      subtopics: ["Background of Nigeria's first satellite", "Objectives of NigeriaSat-1", "Achievements and challenges"],
      objectives: ["Give the background of NigeriaSat-1", "State the objectives of the satellite", "Explain how an earth-observation satellite works", "Discuss the achievements and challenges of NigeriaSat-1"],
      lesson: {
        title: "Nigeria's First Satellite",
        summary: "NigeriaSat-1, launched in 2003, was an earth-observation satellite for monitoring the environment.",
        minutes: 40,
        notes: `## Background
- **NigeriaSat-1** (written *Niger-SAT 1* in the scheme) was **Nigeria's first satellite**.
- It was launched on **27 September 2003** from **Plesetsk, Russia**, aboard a **Kosmos-3M** rocket.
- It was built by **Surrey Satellite Technology Limited (SSTL)** of the United Kingdom, with Nigerian engineers trained alongside.
- It is managed by the **National Space Research and Development Agency (NASRDA)**, Abuja, which was established in 1999.
- It was a **micro-satellite** (about 100 kg) and a member of the international **Disaster Monitoring Constellation (DMC)**.

## Type and orbit
NigeriaSat-1 was an **earth-observation (remote-sensing) satellite**, not a communication satellite. It moved in a **low earth orbit** at a height of roughly **700 km**, in a near-polar, **sun-synchronous** orbit, so that it passed over each place at about the same local time each day.

## How it worked
- An **imaging camera** recorded sunlight reflected from the Earth's surface in several wavebands (green, red and near infra-red) — this is **remote sensing**: obtaining information about an object without touching it.
- **Solar panels** converted sunlight to electricity, which was stored in batteries.
- Images were sent by **radio waves** to the **ground station** in Abuja.
- Its images had a ground resolution of about **32 m** and covered a wide swath, so large areas could be imaged quickly.

### A little physics
In low orbit, $v = \\sqrt{\\dfrac{GM}{r}}$, giving a speed of about 7.5 km/s and a period of about **100 minutes** — some 14 orbits a day.

## Objectives
1. **Environmental monitoring** — desertification in the north, deforestation, erosion, oil spills in the Niger Delta.
2. **Disaster management** — early warning and mapping of floods, fires and other disasters.
3. **Agricultural planning** — land use, crop and vegetation mapping, estimating yields.
4. **Security** — monitoring borders and sensitive areas.
5. **Mapping and planning** — up-to-date maps for population studies, urban planning and water resources.
6. **Capacity building** — training Nigerian scientists and engineers in space technology.

## Achievements
- Put Nigeria among the nations with a satellite in orbit.
- Supplied images for mapping and environmental studies in Nigeria.
- Contributed images for **international disaster relief** through the DMC, for example after the 2004 Indian Ocean tsunami and Hurricane Katrina in 2005.
- Trained a core of Nigerian engineers and led to **NigeriaSat-2** and **NigeriaSat-X**, launched in 2011.
- Outlived its design life of about five years.

## Challenges
- **Dependence on foreign** builders and launch facilities.
- **High cost** and inadequate funding.
- **Medium resolution**: fine details could not be seen.
- **Limited use** of the images by ministries and agencies.
- Shortage of skilled personnel and supporting infrastructure.
- A **limited lifespan**, as with all satellites.`,
        examples: `**Example 1.** In what year was NigeriaSat-1 launched? *Solution:* **2003**.

**Example 2.** What type of satellite was NigeriaSat-1? *Solution:* an **earth-observation (remote-sensing) satellite**.

**Example 3.** A satellite in low orbit has a period of 100 minutes. How many orbits does it make in a day? *Solution:* $\\dfrac{24 \\times 60}{100} = 14.4$, about **14 orbits**.`,
      },
      questions: [
        ["E", "Nigeria's first satellite, NigeriaSat-1, was launched in", "2003", "1999", "2007", "2011", "It was launched on 27 September 2003."],
        ["E", "NigeriaSat-1 was mainly", "an earth-observation satellite", "a communication satellite", "a military missile", "a space station", "It took images of the Earth's surface."],
        ["E", "The agency responsible for Nigeria's space programme is", "NASRDA", "NAFDAC", "NEMA", "NIMASA", "The National Space Research and Development Agency."],
        ["M", "The electrical power for a satellite in orbit is obtained mainly from", "solar panels", "diesel generators", "wind turbines", "dry cells only", "Photovoltaic panels convert sunlight to electricity."],
        ["M", "Obtaining information about the Earth's surface from a satellite without physical contact is called", "remote sensing", "radioactivity", "telemetry of sound", "refraction", "Sensors record reflected radiation from a distance."],
        ["M", "Which of these was NOT an objective of NigeriaSat-1?", "Television broadcasting", "Environmental monitoring", "Disaster management", "Agricultural planning", "Broadcasting is the work of a communication satellite."],
        ["M", "NigeriaSat-1 sent its images to the ground station by means of", "radio waves", "sound waves", "ultraviolet light", "electric cables", "Radio waves travel through space."],
        ["H", "NigeriaSat-1 operated in", "a low earth orbit", "a geostationary orbit", "an orbit round the Moon", "an orbit round the Sun", "It orbited at roughly 700 km above the Earth."],
        ["H", "A satellite makes one orbit of the Earth in 96 minutes. The number of orbits it completes in one day is", "15", "24", "96", "10", "24 × 60 ÷ 96. Answer: 15."],
        ["H", "NigeriaSat-1 belonged to an international group of satellites known as the", "Disaster Monitoring Constellation", "Global Positioning System", "International Space Station", "Hubble Network", "The DMC shares images for disaster relief."],
      ],
      jamb: [
        ["M", "A satellite orbiting closer to the Earth, compared with one farther away, has", "a higher speed and a shorter period", "a lower speed and a longer period", "the same speed and period", "a lower speed and a shorter period", "v = √(GM/r) is larger for smaller r, and the path is shorter."],
        ["H", "A satellite moves in a circular orbit of radius $7.0 \\times 10^6$ m with a speed of $7.5 \\times 10^3$ m/s. Its period is approximately ($\\pi = \\frac{22}{7}$)", "$5.9 \\times 10^3$ s", "$9.3 \\times 10^2$ s", "$3.0 \\times 10^3$ s", "$1.2 \\times 10^4$ s", "T = 2πr ÷ v = 4.4 × 10⁷ ÷ 7.5 × 10³. Answer: about 5.9 × 10³ s."],
      ],
    },
    {
      week: 10,
      title: "NigComSat-1",
      subtopics: ["Launch of NigComSat-1", "Uses in communication, internet and broadcasting", "Challenges: satellite control and failure", "Impact on Nigeria's development"],
      objectives: ["Give the background of NigComSat-1", "Explain how a geostationary communication satellite works", "State the uses of NigComSat-1", "Discuss its failure, replacement and impact on national development"],
      lesson: {
        title: "Nigeria's Communication Satellite",
        summary: "NigComSat-1, launched in 2007, was Nigeria's first communication satellite, placed in geostationary orbit.",
        minutes: 40,
        notes: `## Background
- **NigComSat-1** (written *NICOM-SAT 1* in the scheme) was **Nigeria's first communication satellite**.
- It was launched on **13 May 2007** from the **Xichang** Satellite Launch Centre, **China**, on a **Long March 3B** rocket.
- It was built by the **China Great Wall Industry Corporation** with the China Academy of Space Technology.
- It is operated by **Nigerian Communications Satellite Limited (NIGCOMSAT)**, with ground control in **Abuja**.
- It was a large satellite (about 5 tonnes at launch) with a design life of 15 years.

## Orbit
NigComSat-1 was placed in **geostationary orbit**, about **36 000 km** above the equator, at longitude **42.5° East**.
- period = **24 hours**, the same as the Earth's rotation
- moves west to east above the equator
- appears **fixed** in the sky, so ground dishes need **not** track it
- one satellite covers a very large area (its "footprint")

## How a communication satellite works
1. A ground station sends a signal up to the satellite — the **uplink**.
2. A **transponder** on the satellite receives the signal, **amplifies** it and changes its frequency.
3. The signal is sent back to Earth — the **downlink** — and received by dish antennas.

The signals are **microwaves** (radio waves of very high frequency), which pass through the ionosphere. NigComSat-1 carried transponders in the **C, Ku, Ka and L** bands. A **parabolic dish** reflects the incoming parallel waves to a receiver at its **focus**.

Because of the distance, there is a small **delay**: $t = \\dfrac{2d}{c} = \\dfrac{2 \\times 3.6 \\times 10^7}{3 \\times 10^8} \\approx 0.24$ s for the round trip.

## Uses
- **telecommunication** — telephone links, including remote areas
- **internet and broadband** services
- **broadcasting** — direct-to-home television and radio
- **tele-education, telemedicine and e-government**
- **navigation** support and security communication
- services to other African countries, earning revenue

## Challenges
- **Failure in orbit:** in **November 2008** the satellite lost power because of a fault in its **solar array** and was moved out of service — only about 18 months after launch.
- **Satellite control:** keeping a satellite on station, managing its power and attitude, and responding to faults demand skilled personnel and reliable ground facilities.
- **Dependence on foreign technology** for design, construction and launch.
- **High cost** and long time needed for replacement.
- **Competition** from foreign satellite operators; low patronage.
- Loss of services to customers after the failure.

## Replacement
The satellite was insured. A replacement, **NigComSat-1R**, was built and launched from China in **December 2011** and placed at the same orbital position.

## Impact on Nigeria's development
- stimulated growth in **information and communication technology**
- reduced dependence on foreign satellites for bandwidth
- trained Nigerian engineers in satellite operation
- improved **broadcasting, banking, education and security** communications
- showed the need for **local capacity**, back-up satellites and insurance
- raised Nigeria's standing in space technology in Africa`,
        examples: `**Example 1.** In what year was NigComSat-1 launched, and from which country? *Solution:* **2007**, from **China**.

**Example 2.** Why does a dish pointed at a geostationary satellite not need to move? *Solution:* The satellite has a **24-hour period** and so stays above the **same point** on the Earth.

**Example 3.** Find the time for a signal to travel from the ground to a satellite $3.6 \\times 10^7$ m away ($c = 3 \\times 10^8$ m/s). *Solution:* $\\dfrac{3.6 \\times 10^7}{3 \\times 10^8} = \\mathbf{0.12}$ **s**.`,
      },
      questions: [
        ["E", "NigComSat-1 was launched in the year", "2007", "2003", "2011", "1999", "It was launched on 13 May 2007."],
        ["E", "NigComSat-1 was mainly a", "communication satellite", "weather satellite", "military satellite", "navigation buoy", "It carried transponders for telecommunication and broadcasting."],
        ["E", "NigComSat-1 was launched from", "China", "Russia", "the United States", "Nigeria", "It was launched from Xichang, China."],
        ["M", "The device on a communication satellite that receives, amplifies and retransmits signals is a", "transponder", "transformer", "turbine", "thermistor", "A transponder relays the uplink as a downlink."],
        ["M", "Signals between ground stations and communication satellites are carried by", "microwaves", "sound waves", "X-rays", "water waves", "Microwaves pass through the ionosphere."],
        ["M", "A geostationary satellite appears fixed in the sky because", "its period equals the Earth's period of rotation", "it is not moving", "it is beyond the Earth's gravity", "it moves faster than light", "It turns with the Earth once every 24 hours."],
        ["M", "NigComSat-1 failed in 2008 because of a fault in its", "solar array power system", "launch rocket", "ground dish in Lagos", "camera lens", "The satellite lost electrical power."],
        ["H", "The height of a geostationary orbit above the Earth's surface is about", "36 000 km", "700 km", "3 600 km", "360 000 km", "This height gives a period of 24 hours."],
        ["H", "A signal is sent to a geostationary satellite $3.6 \\times 10^7$ m away and relayed straight back. The total time taken is ($c = 3.0 \\times 10^8$ m/s)", "0.24 s", "0.12 s", "2.4 s", "0.012 s", "2 × 3.6 × 10⁷ ÷ 3.0 × 10⁸. Answer: 0.24 s."],
        ["H", "The satellite launched in 2011 to replace NigComSat-1 was", "NigComSat-1R", "NigeriaSat-1", "NigeriaSat-X", "Sputnik 1", "The replacement was placed in the same orbital position."],
      ],
      jamb: [
        ["M", "A parabolic dish is used to receive satellite signals because it", "brings parallel waves to a focus", "absorbs all the waves", "changes microwaves into sound", "increases the speed of the waves", "Reflection from the curved surface concentrates the signal at the receiver."],
        ["H", "A microwave signal from a satellite has a frequency of $1.2 \\times 10^{10}$ Hz. Its wavelength is ($c = 3.0 \\times 10^8$ m/s)", "2.5 cm", "4.0 cm", "25 cm", "0.4 cm", "λ = c ÷ f = 3.0 × 10⁸ ÷ 1.2 × 10¹⁰ = 0.025 m. Answer: 2.5 cm."],
      ],
    },
  ],
};
