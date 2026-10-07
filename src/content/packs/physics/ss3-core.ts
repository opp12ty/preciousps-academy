import type { TermPlan } from "../types";

/** SS3 Physics — original Precious PS content following the national senior secondary curriculum, with WAEC revision. */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Electric fields and capacitors",
        subtopics: ["Coulomb's law", "Electric field intensity and potential", "Capacitance and capacitors", "Arrangement of capacitors and energy stored"],
        objectives: ["State Coulomb's law and calculate the force between charges", "Calculate electric field intensity and electric potential", "Define capacitance and state the factors affecting it", "Calculate equivalent capacitance and the energy stored in a capacitor"],
        lesson: {
          title: "Forces and Energy in Electric Fields",
          summary: "Apply Coulomb's law and analyse capacitors.",
          minutes: 40,
          notes: `## Coulomb's law
**The force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.**
$F = \\frac{kQ_1Q_2}{r^2}$
where $k = \\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^{9}$ N m² C⁻². The force is **repulsive** for like charges and **attractive** for unlike charges. Doubling the distance reduces the force to **one-quarter**.

## Electric field intensity
The force per unit positive charge at a point:
$E = \\frac{F}{q}$ (N/C)
Around a point charge $Q$: $E = \\frac{kQ}{r^2}$.
Between two parallel plates with p.d. $V$ and separation $d$ the field is **uniform**:
$E = \\frac{V}{d}$ (V/m)

## Electric potential
The **electric potential** at a point is the work done in bringing a unit positive charge from infinity to that point. Unit: the **volt**.
Around a point charge: $V = \\frac{kQ}{r}$.
The work done in moving a charge $q$ through a potential difference $V$ is
$W = qV$
The **electron-volt (eV)** is the energy gained by an electron moving through 1 V: $1.6 \\times 10^{-19}$ J.

## Capacitors
A **capacitor** stores electric charge and energy. It consists of two conductors (plates) separated by an insulator, the **dielectric**.
$C = \\frac{Q}{V}$
Unit: the **farad (F)**; practical units are µF, nF and pF.

### Factors affecting the capacitance of a parallel-plate capacitor
$C = \\frac{\\varepsilon A}{d}$
- the **area of overlap** of the plates (larger area — larger capacitance)
- the **separation** of the plates (smaller separation — larger capacitance)
- the **dielectric** between them (a material of higher permittivity — larger capacitance)

## Arrangement of capacitors
### In parallel
the p.d. is the same across each; the charges add:
$C = C_1 + C_2 + C_3$
### In series
the charge on each is the same; the p.d.s add:
$\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}$
(Notice that this is the **opposite** of the rule for resistors.)

## Energy stored
$W = \\frac{1}{2}QV = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$
*Example:* a 4 µF capacitor charged to 100 V stores $\\frac{1}{2} \\times 4 \\times 10^{-6} \\times 10^{4} = 0.02$ J.

## Uses of capacitors
tuning circuits in radios; smoothing rectified current; camera flash units; blocking direct current while passing alternating current; preventing sparking at switch contacts; timing circuits.

## Charging and discharging
When connected to a battery through a resistor, a capacitor charges until its p.d. equals the e.m.f.; the current falls to zero. It discharges through a resistor in a time governed by the **time constant** $RC$.`,
          examples: `**Example 1.** Find the force between charges of 2 µC and 3 µC placed 0.3 m apart. *Solution:* $\\frac{9 \\times 10^{9} \\times 2 \\times 10^{-6} \\times 3 \\times 10^{-6}}{0.09} = 0.6$ N.

**Example 2.** A 10 µF capacitor is charged to 12 V. Find the charge stored. *Solution:* $10 \\times 12 = 120$ µC.

**Example 3.** Capacitors of 3 µF and 6 µF are joined in series. Find the combined capacitance. *Solution:* $\\frac{3 \\times 6}{3 + 6} = 2$ µF.`,
        },
        questions: [
          ["E", "A device used for storing electric charge is a", "capacitor", "resistor", "transformer", "rheostat", "It has two plates separated by a dielectric."],
          ["E", "The unit of capacitance is the", "farad", "henry", "ohm", "tesla", "One farad is one coulomb per volt."],
          ["E", "According to Coulomb's law, the force between two charges varies inversely as the", "square of the distance between them", "distance between them", "product of the charges", "sum of the charges", "Doubling the distance quarters the force."],
          ["M", "A 10 µF capacitor is charged to a potential difference of 12 V. The charge stored is", "120 µC", "1.2 µC", "22 µC", "0.83 µC", "Q = CV. Answer: 120 µC."],
          ["M", "Capacitors of 2 µF and 3 µF are connected in parallel. The equivalent capacitance is", "5 µF", "1.2 µF", "6 µF", "1.5 µF", "Capacitances in parallel add."],
          ["M", "The electric field intensity between two parallel plates 0.02 m apart with a potential difference of 100 V is", "5000 V/m", "2 V/m", "0.0002 V/m", "50 V/m", "E = V ÷ d. Answer: 5000 V/m."],
          ["M", "The work done in moving a charge of 2 C through a potential difference of 12 V is", "24 J", "6 J", "14 J", "0.17 J", "W = qV. Answer: 24 J."],
          ["H", "Capacitors of 2 µF and 3 µF are connected in series. The equivalent capacitance is", "1.2 µF", "5 µF", "6 µF", "0.83 µF", "(2 × 3) ÷ (2 + 3)."],
          ["H", "The energy stored in a 4 µF capacitor charged to 100 V is", "0.02 J", "0.04 J", "2 × 10⁻⁴ J", "200 J", "W = ½CV² = ½ × 4 × 10⁻⁶ × 10⁴."],
          ["H", "The force between charges of 2 µC and 3 µC placed 0.3 m apart (k = 9 × 10⁹ N m² C⁻²) is", "0.6 N", "0.18 N", "6 N", "0.06 N", "F = 9 × 10⁹ × 6 × 10⁻¹² ÷ 0.09."],
        ],
      },
      {
        week: 2,
        title: "Current electricity: circuits, energy and measurement",
        subtopics: ["E.m.f., internal resistance and cells", "Resistivity", "Electrical energy and power", "The Wheatstone bridge, potentiometer and conversion of galvanometers"],
        objectives: ["Solve circuit problems involving internal resistance", "Calculate resistance from resistivity", "Calculate electrical energy, power and cost", "Explain the Wheatstone bridge and potentiometer and convert a galvanometer"],
        lesson: {
          title: "Circuits in Depth",
          summary: "Analyse electric circuits, electrical energy and measuring devices.",
          minutes: 40,
          notes: `## E.m.f. and internal resistance
A cell has an **internal resistance** $r$. When it drives a current $I$ through an external resistance $R$:
$E = I(R + r)$
- **terminal p.d.** $V = IR = E - Ir$
- **lost volts** $= Ir$
The terminal p.d. equals the e.m.f. only on open circuit.
*Example:* a cell of e.m.f. 2 V and internal resistance 0.5 Ω connected to 3.5 Ω: $I = \\frac{2}{4} = 0.5$ A; terminal p.d. $= 0.5 \\times 3.5 = 1.75$ V.

## Cells in combination
- **in series**: total e.m.f. $= nE$; total internal resistance $= nr$
- **in parallel** (identical cells): e.m.f. $= E$; internal resistance $= \\frac{r}{n}$ — they last longer and can supply a larger current

## Cells
- **primary cells** (cannot be recharged): the simple cell — with the defects of **polarisation** (hydrogen bubbles on the copper plate; cured by a depolariser) and **local action** (impurities in the zinc; cured by amalgamation); the Leclanché and dry cells; the Daniell cell
- **secondary cells (accumulators)**: lead–acid and alkaline (Nife) cells; can be recharged

## Resistivity
$R = \\frac{\\rho L}{A}$
where $\\rho$ is the **resistivity** of the material (Ω m). Conductivity is its reciprocal. Resistance of a metal **increases** with temperature; that of a semiconductor decreases.

## Electrical energy and power
$W = IVt = I^2Rt = \\frac{V^2t}{R}$
$P = IV = I^2R = \\frac{V^2}{R}$
The commercial unit of energy is the **kilowatt-hour**: energy (kWh) = power (kW) × time (h).
*Example:* a 1 kW heater used for 5 hours at ₦50 per kWh costs ₦250.
The **heating effect** is used in irons, kettles, filament lamps and **fuses** (a fuse wire melts when the current exceeds its rating).

## The Wheatstone bridge
Four resistors P, Q, R, S form a diamond with a galvanometer across it. At **balance** (no deflection):
$\\frac{P}{Q} = \\frac{R}{S}$
The **metre bridge** is its practical form: $\\frac{R_1}{R_2} = \\frac{l_1}{l_2}$.

## The potentiometer
A uniform wire carrying a steady current; the p.d. across any length is proportional to that length. It compares e.m.f.s:
$\\frac{E_1}{E_2} = \\frac{l_1}{l_2}$
It is more accurate than a voltmeter because at balance it draws **no current** from the cell being measured. It is also used to measure internal resistance and to compare resistances.

## Converting a galvanometer
A galvanometer of resistance $R_g$ gives full-scale deflection for a small current $I_g$.
- **to an ammeter**: connect a **low resistance (shunt) in parallel**: $S = \\frac{I_gR_g}{I - I_g}$
- **to a voltmeter**: connect a **high resistance (multiplier) in series**: $R = \\frac{V}{I_g} - R_g$
*Example:* $R_g = 10$ Ω, $I_g = 10$ mA, to read 10 V: $R = \\frac{10}{0.01} - 10 = 990$ Ω.
An ideal ammeter has zero resistance; an ideal voltmeter has infinite resistance.

## Electrolysis
The chemical effect of current. **Faraday's first law**: the mass deposited is proportional to the charge passed, $m = zIt$. Uses: electroplating, purification of metals.`,
          examples: `**Example 1.** A battery of e.m.f. 12 V and internal resistance 1 Ω is connected to a 5 Ω resistor. Find the current. *Solution:* $\\frac{12}{6} = 2$ A.

**Example 2.** Find the resistance of a wire 2 m long, of cross-sectional area $1 \\times 10^{-6}$ m² and resistivity $1 \\times 10^{-6}$ Ω m. *Solution:* $\\frac{1 \\times 10^{-6} \\times 2}{1 \\times 10^{-6}} = 2$ Ω.

**Example 3.** Find the power of an appliance that takes 2 A from a 240 V supply. *Solution:* $240 \\times 2 = 480$ W.`,
        },
        questions: [
          ["E", "The commercial unit of electrical energy is the", "kilowatt-hour", "watt", "volt", "ampere-hour only", "It is the energy used by a 1 kW appliance in one hour."],
          ["E", "A galvanometer is converted to an ammeter by connecting a", "low resistance in parallel with it", "high resistance in series with it", "capacitor in series with it", "cell in parallel with it", "The low resistance is called a shunt."],
          ["E", "A cell that can be recharged is called a", "secondary cell", "primary cell", "simple cell", "dry cell", "The lead–acid accumulator is an example."],
          ["M", "An appliance takes a current of 2 A from a 240 V supply. Its power is", "480 W", "120 W", "242 W", "960 W", "P = IV. Answer: 480 W."],
          ["M", "A cell of e.m.f. 2 V and internal resistance 0.5 Ω is connected to a 3.5 Ω resistor. The current is", "0.5 A", "0.57 A", "4 A", "8 A", "I = E ÷ (R + r) = 2 ÷ 4."],
          ["M", "A wire is 2 m long with cross-sectional area 1 × 10⁻⁶ m² and resistivity 1 × 10⁻⁶ Ω m. Its resistance is", "2 Ω", "0.5 Ω", "2 × 10⁻¹² Ω", "1 Ω", "R = ρL ÷ A. Answer: 2 Ω."],
          ["M", "The defect of a simple cell caused by hydrogen bubbles on the copper plate is", "polarisation", "local action", "amalgamation", "electrolysis", "A depolariser removes the hydrogen."],
          ["H", "A cell of e.m.f. 2 V and internal resistance 0.5 Ω supplies current to a 3.5 Ω resistor. The terminal potential difference is", "1.75 V", "2.0 V", "0.25 V", "1.5 V", "V = IR = 0.5 × 3.5."],
          ["H", "A galvanometer of resistance 10 Ω gives full-scale deflection for 10 mA. To convert it to a voltmeter reading up to 10 V, the series resistance needed is", "990 Ω", "1000 Ω", "100 Ω", "0.1 Ω", "R = V ÷ Ig − Rg = 1000 − 10."],
          ["H", "In a potentiometer experiment, a standard cell of 1.5 V balances at 60 cm and another cell balances at 80 cm. The e.m.f. of the second cell is", "2.0 V", "1.125 V", "1.0 V", "2.5 V", "E₂ = 1.5 × 80 ÷ 60."],
        ],
      },
      {
        week: 3,
        title: "Magnetic fields and the motor effect",
        subtopics: ["Magnets and magnetic materials", "The earth's magnetic field", "Magnetic field of a current", "Force on a current-carrying conductor and its applications"],
        objectives: ["Describe magnets, magnetisation and demagnetisation", "Describe the elements of the earth's magnetic field", "Describe the magnetic field due to a current", "Calculate the force on a conductor in a magnetic field and explain the motor"],
        lesson: {
          title: "Magnetism and Its Uses",
          summary: "Describe magnetic fields and the force they exert on currents.",
          minutes: 40,
          notes: `## Magnets and magnetic materials
- **magnetic (ferromagnetic) materials**: iron, steel, nickel, cobalt
- **soft iron** is easily magnetised and easily loses its magnetism — a **temporary** magnet, used in **electromagnets**, transformer cores and relays
- **steel** is hard to magnetise but retains magnetism — used for **permanent** magnets
The **domain theory**: a magnetic material consists of tiny regions (domains), each a small magnet; in a magnetised bar they are lined up.

### Magnetisation
- **electrical method**: placing the bar in a **solenoid** carrying **direct current** — the best method
- stroking with a magnet (single or divided touch)
- hammering in the earth's field; induction

### Demagnetisation
- placing the magnet in a solenoid carrying **alternating current** and slowly withdrawing it — the best method
- **heating** to red heat; **hammering** or dropping it while lying east–west

## The earth's magnetic field
- **magnetic meridian**: the vertical plane in which a freely suspended magnet sets
- **angle of declination (variation)**: the angle between the **geographic** and **magnetic** meridians
- **angle of dip (inclination)**: the angle between the direction of the earth's field and the horizontal — **0° at the magnetic equator** and **90° at the magnetic poles**
- the earth's field has a horizontal component $H$ and a vertical component $V$: $\\tan(\\text{dip}) = \\frac{V}{H}$

## Magnetic field of a current
A current produces a magnetic field (**Oersted**).
- **straight wire**: concentric circles round the wire; direction by the **right-hand grip rule** (thumb along the current, fingers curl with the field)
- **circular coil** and **solenoid**: the field of a solenoid is like that of a **bar magnet**; its strength increases with the **current**, the **number of turns per unit length** and a **soft-iron core**
An **electromagnet** is used in electric bells, relays, telephone earpieces and cranes for lifting scrap iron.

## Force on a current-carrying conductor (the motor effect)
A conductor carrying a current in a magnetic field experiences a force:
$F = BIL\\sin\\theta$
where $B$ is the **magnetic flux density** in **tesla (T)**. The force is greatest when the conductor is at right angles to the field and zero when parallel to it.
**Fleming's left-hand rule**: First finger — Field; seCond finger — Current; thuMb — Motion (force).

### Force on a moving charge
$F = qvB\\sin\\theta$

### Force between parallel currents
Currents in the **same direction attract**; in **opposite directions** they **repel**. This is used to define the ampere.

## Applications
### The d.c. motor
A coil in a magnetic field experiences a couple and rotates. The **split-ring commutator** reverses the current in the coil every half turn so that it keeps rotating in the same direction. The turning effect increases with more turns, a stronger field, a larger current and a soft-iron core.
### The moving-coil galvanometer
A coil suspended between the poles of a magnet turns against a spring; the deflection is proportional to the current. It is sensitive and has a uniform scale, but measures direct current only.
### The moving-coil loudspeaker
converts varying current into sound.`,
          examples: `**Example 1.** A wire 0.3 m long carrying 2 A lies at right angles to a field of 0.5 T. Find the force on it. *Solution:* $0.5 \\times 2 \\times 0.3 = 0.3$ N.

**Example 2.** What is the angle of dip at the magnetic equator? *Answer:* **0°**.

**Example 3.** Why is soft iron used for the core of an electromagnet? *Answer:* It is **easily magnetised and demagnetised**.`,
        },
        questions: [
          ["E", "Which of these is a magnetic material?", "nickel", "copper", "aluminium", "brass", "Iron, steel and cobalt are others."],
          ["E", "The unit of magnetic flux density is the", "tesla", "weber per second", "henry", "farad", "It appears in F = BIL."],
          ["E", "The core of an electromagnet is made of", "soft iron", "steel", "copper", "carbon", "It is easily magnetised and demagnetised."],
          ["M", "The best method of demagnetising a magnet is by", "withdrawing it slowly from a solenoid carrying alternating current", "placing it in a solenoid carrying direct current", "stroking it with another magnet", "keeping it with soft-iron keepers", "The domains are left in random directions."],
          ["M", "The angle between the geographic meridian and the magnetic meridian is the angle of", "declination", "dip", "incidence", "deviation", "It is also called variation."],
          ["M", "A wire 0.3 m long carries a current of 2 A at right angles to a magnetic field of 0.5 T. The force on the wire is", "0.3 N", "3 N", "0.03 N", "1.2 N", "F = BIL. Answer: 0.3 N."],
          ["M", "The direction of the force on a current-carrying conductor in a magnetic field is given by", "Fleming's left-hand rule", "Fleming's right-hand rule", "the right-hand grip rule", "Lenz's law", "The thumb shows the motion."],
          ["H", "The angle of dip at the earth's magnetic poles is", "90°", "0°", "45°", "180°", "The field there is vertical."],
          ["H", "The function of the split-ring commutator in a d.c. motor is to", "reverse the current in the coil every half revolution", "increase the voltage", "reduce friction", "store charge", "This keeps the coil turning in one direction."],
          ["H", "An electron of charge 1.6 × 10⁻¹⁹ C moves at 2 × 10⁶ m/s at right angles to a magnetic field of 0.5 T. The force on it is", "1.6 × 10⁻¹³ N", "6.4 × 10⁻¹³ N", "1.6 × 10⁻²⁵ N", "4 × 10⁻²⁶ N", "F = qvB. Answer: 1.6 × 10⁻¹³ N."],
        ],
      },
      {
        week: 4,
        title: "Electromagnetic induction",
        subtopics: ["Faraday's and Lenz's laws", "The generator", "The transformer", "Power transmission and eddy currents"],
        objectives: ["State Faraday's and Lenz's laws and calculate induced e.m.f.", "Describe the a.c. and d.c. generators", "Solve problems on transformers and their efficiency", "Explain power transmission and eddy currents"],
        lesson: {
          title: "Electricity from Magnetism",
          summary: "Explain electromagnetic induction and its applications.",
          minutes: 40,
          notes: `## Electromagnetic induction
An e.m.f. is **induced** in a conductor whenever the **magnetic flux linking it changes** — when a magnet is moved into or out of a coil, or a conductor cuts across field lines (**Faraday**).

## Faraday's law
**The magnitude of the induced e.m.f. is directly proportional to the rate of change of magnetic flux linkage.**
$E = -N\\frac{\\Delta\\Phi}{\\Delta t}$
Flux is measured in **webers (Wb)**. The induced e.m.f. is greater with a **stronger magnet**, **faster motion** and **more turns**.

## Lenz's law
**The induced current flows in such a direction as to oppose the change that produces it.**
It is a consequence of the **conservation of energy** — work must be done against the opposing force.
**Fleming's right-hand (dynamo) rule** gives the direction: thuMb — Motion; First finger — Field; seCond finger — induced Current.

## A straight conductor
A conductor of length $L$ moving with velocity $v$ at right angles to a field $B$:
$E = BLv$

## The generator
Converts **mechanical energy to electrical energy**. A coil is rotated in a magnetic field.
- **a.c. generator (alternator)**: the coil ends are joined to two **slip rings**; the output reverses every half turn, $E = E_0\\sin\\omega t$
- **d.c. generator (dynamo)**: a **split-ring commutator** makes the output flow one way
The e.m.f. is increased by more turns, a stronger field, faster rotation and a soft-iron core.

## Mutual and self induction
- **mutual induction**: a changing current in one coil induces an e.m.f. in a neighbouring coil — the basis of the transformer and the **induction coil**
- **self-induction**: a changing current in a coil induces a "back e.m.f." in the same coil; its **inductance** is measured in **henries**; used in chokes

## The transformer
Changes an **alternating** voltage to a higher or lower value. It has a **primary** and a **secondary** coil on a laminated **soft-iron core**.
$\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$
- **step-up**: $N_s > N_p$
- **step-down**: $N_s < N_p$
For an **ideal** transformer, power in = power out: $I_pV_p = I_sV_s$, so the current changes in the inverse ratio.
A transformer does **not** work on steady direct current, because there is no changing flux.

### Efficiency
$\\text{efficiency} = \\frac{V_sI_s}{V_pI_p} \\times 100\\%$

### Energy losses and remedies
| Loss | Remedy |
|---|---|
| **eddy currents** in the core | **laminated** core |
| **hysteresis** (repeated magnetisation) | **soft-iron** core |
| **heat in the windings** ($I^2R$, "copper loss") | thick, low-resistance copper wire |
| **flux leakage** | winding the coils on the same core |

## Power transmission
Electricity is transmitted at **very high voltage and low current** to reduce the heating loss $I^2R$ in the cables. A step-up transformer raises the voltage at the power station (e.g. to 132 kV or 330 kV on the national grid); step-down transformers lower it in stages to 240 V for homes. This is why **alternating current** is used.

## Eddy currents
Currents induced in a solid mass of metal in a changing field. They cause heating (a loss in transformers) but are useful in **induction furnaces**, **damping** of meters, speedometers and electromagnetic brakes.`,
          examples: `**Example 1.** A transformer has 1000 primary turns and 50 secondary turns. If the primary voltage is 240 V, find the secondary voltage. *Solution:* $240 \\times \\frac{50}{1000} = 12$ V.

**Example 2.** A conductor 0.5 m long moves at 10 m/s at right angles to a field of 0.2 T. Find the induced e.m.f. *Solution:* $0.2 \\times 0.5 \\times 10 = 1$ V.

**Example 3.** Why is the core of a transformer laminated? *Answer:* To **reduce eddy currents**.`,
        },
        questions: [
          ["E", "A device that changes an alternating voltage from one value to another is a", "transformer", "generator", "motor", "rectifier", "It works by mutual induction."],
          ["E", "A generator converts", "mechanical energy to electrical energy", "electrical energy to mechanical energy", "chemical energy to electrical energy", "heat energy to light", "A motor does the reverse."],
          ["E", "The law stating that the induced current opposes the change producing it is", "Lenz's law", "Faraday's law", "Ohm's law", "Coulomb's law", "It follows from the conservation of energy."],
          ["M", "A transformer has 1000 turns in the primary and 50 turns in the secondary. If the primary voltage is 240 V, the secondary voltage is", "12 V", "4800 V", "20 V", "120 V", "Vs = Vp × Ns ÷ Np."],
          ["M", "The core of a transformer is laminated in order to reduce", "eddy currents", "hysteresis only", "flux linkage", "the number of turns", "Thin insulated sheets break up the current paths."],
          ["M", "A conductor 0.5 m long moves at 10 m/s at right angles to a magnetic field of 0.2 T. The e.m.f. induced is", "1 V", "0.1 V", "10 V", "25 V", "E = BLv. Answer: 1 V."],
          ["M", "In an a.c. generator the coil is connected to the external circuit through", "slip rings", "a split-ring commutator", "a rheostat", "a fuse", "A d.c. generator uses a commutator."],
          ["H", "A transformer takes 0.5 A from a 240 V supply and delivers 8 A at 12 V. Its efficiency is", "80%", "96%", "125%", "20%", "Output 96 W ÷ input 120 W."],
          ["H", "Electrical power is transmitted over long distances at high voltage in order to", "reduce the current and so the heating loss in the cables", "increase the current", "make it travel faster", "reduce the frequency", "The loss is I²R."],
          ["H", "The flux through a coil of 200 turns changes by 0.05 Wb in 0.1 s. The average e.m.f. induced is", "100 V", "1 V", "10 V", "1000 V", "E = N × ΔΦ ÷ Δt = 200 × 0.5."],
        ],
      },
      {
        week: 5,
        title: "Alternating current circuits",
        subtopics: ["Peak and r.m.s. values", "Resistance, inductance and capacitance in a.c. circuits", "Reactance and impedance", "Resonance and power"],
        objectives: ["Distinguish peak from r.m.s. values", "Describe the phase relationships in R, L and C", "Calculate reactance and impedance", "Explain resonance and calculate power in a.c. circuits"],
        lesson: {
          title: "Circuits with Alternating Current",
          summary: "Analyse simple a.c. circuits containing resistance, inductance and capacitance.",
          minutes: 40,
          notes: `## Alternating current
An **alternating current** reverses its direction periodically:
$I = I_0\\sin\\omega t$ and $V = V_0\\sin\\omega t$, with $\\omega = 2\\pi f$.
Mains frequency in Nigeria is **50 Hz**.

## Peak and r.m.s. values
- $I_0$, $V_0$: **peak (maximum)** values
- the **root-mean-square (r.m.s.)** value is the steady direct current that would give the same heating effect:
$I_{rms} = \\frac{I_0}{\\sqrt{2}} = 0.707I_0$ and $V_{rms} = \\frac{V_0}{\\sqrt{2}}$
The mains "240 V" is an r.m.s. value; its peak is about **339 V**. A.c. meters read r.m.s. values.

## Circuit elements
### Resistor only
Current and voltage are **in phase**. $V = IR$.
### Inductor only
The current **lags** the voltage by **90°**. The opposition is the **inductive reactance**:
$X_L = 2\\pi fL$ (ohms)
It **increases** with frequency; an inductor passes d.c. freely but opposes high-frequency a.c.
### Capacitor only
The current **leads** the voltage by **90°**. The **capacitive reactance** is
$X_C = \\frac{1}{2\\pi fC}$
It **decreases** with frequency; a capacitor **blocks d.c.**

A memory aid: **CIVIL** — in a Capacitor, I leads V; V leads I in an inductor (L).

## Impedance
The total opposition of a circuit to alternating current is its **impedance** $Z$:
- R and L in series: $Z = \\sqrt{R^2 + X_L^2}$
- R and C in series: $Z = \\sqrt{R^2 + X_C^2}$
- R, L and C in series: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$
$I = \\frac{V}{Z}$
The phase angle: $\\tan\\phi = \\frac{X_L - X_C}{R}$.
*Example:* $R = 30$ Ω and $X_L = 40$ Ω: $Z = \\sqrt{900 + 1600} = 50$ Ω.

## Resonance
In a series RLC circuit, **resonance** occurs when $X_L = X_C$:
$f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$
At resonance the impedance is a **minimum** ($Z = R$), the current is a **maximum**, and current and voltage are in phase. Resonance is used in **tuning** radio and television receivers.

## Power in a.c. circuits
Only the **resistance** dissipates power; pure inductors and capacitors store and return energy.
$P = I_{rms}V_{rms}\\cos\\phi = I_{rms}^2R$
$\\cos\\phi = \\frac{R}{Z}$ is the **power factor** — 1 for a pure resistor, 0 for a pure inductor or capacitor.

## Advantages of a.c. over d.c.
easily stepped up or down by transformers; cheaper to transmit; easily converted to d.c. by rectifiers. (D.c. is needed for electrolysis, charging batteries and electronics.)

## Rectification
Converting a.c. to d.c. using **diodes**: half-wave (one diode) and full-wave (bridge of four diodes), smoothed by a capacitor.`,
          examples: `**Example 1.** An alternating current has a peak value of 10 A. Find its r.m.s. value. *Solution:* $\\frac{10}{\\sqrt{2}} = 7.07$ A.

**Example 2.** Find the reactance of a 0.1 H inductor at 50 Hz. *Solution:* $2\\pi \\times 50 \\times 0.1 = 31.4$ Ω.

**Example 3.** A series circuit has R = 6 Ω, $X_L$ = 10 Ω and $X_C$ = 2 Ω. Find its impedance. *Solution:* $\\sqrt{36 + 64} = 10$ Ω.`,
        },
        questions: [
          ["E", "The frequency of the mains supply in Nigeria is", "50 Hz", "60 Hz", "240 Hz", "100 Hz", "The current reverses 100 times each second."],
          ["E", "The total opposition offered by a circuit to alternating current is called", "impedance", "resistance only", "capacitance", "inductance", "It combines resistance and reactance."],
          ["E", "A capacitor in a circuit", "blocks direct current", "blocks alternating current", "passes direct current freely", "produces current", "Its reactance falls as frequency rises."],
          ["M", "An alternating voltage has an r.m.s. value of 240 V. Its peak value is about", "339 V", "170 V", "240 V", "480 V", "Peak = r.m.s. × √2."],
          ["M", "In a purely inductive circuit the current", "lags the voltage by 90°", "leads the voltage by 90°", "is in phase with the voltage", "is zero", "In a capacitor the current leads."],
          ["M", "A resistor of 30 Ω is in series with an inductor of reactance 40 Ω. The impedance of the circuit is", "50 Ω", "70 Ω", "10 Ω", "35 Ω", "Z = √(30² + 40²)."],
          ["M", "The reactance of an inductor of 0.1 H at a frequency of 50 Hz is about", "31.4 Ω", "5 Ω", "500 Ω", "3.14 Ω", "X = 2πfL. Answer: 31.4 Ω."],
          ["H", "A series circuit has resistance 6 Ω, inductive reactance 10 Ω and capacitive reactance 2 Ω. Its impedance is", "10 Ω", "18 Ω", "14 Ω", "6 Ω", "Z = √(6² + (10 − 2)²)."],
          ["H", "At resonance in a series RLC circuit, the", "impedance is a minimum and equal to the resistance", "current is a minimum", "inductive reactance is zero", "power factor is zero", "The reactances cancel each other."],
          ["H", "A circuit has a resistance of 30 Ω and an impedance of 50 Ω. Its power factor is", "0.6", "0.8", "1.67", "0.4", "Power factor = R ÷ Z."],
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
        title: "The gravitational field and satellites",
        subtopics: ["Newton's law of universal gravitation", "Gravitational field strength and potential", "Escape velocity", "Satellites and Kepler's laws"],
        objectives: ["State Newton's law of universal gravitation", "Relate g to the mass and radius of the earth", "Calculate escape velocity", "Describe satellite motion and state Kepler's laws"],
        lesson: {
          title: "Gravity on a Grand Scale",
          summary: "Apply the law of gravitation to planets and satellites.",
          minutes: 40,
          notes: `## Newton's law of universal gravitation
**Every particle in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.**
$F = \\frac{Gm_1m_2}{r^2}$
$G = 6.67 \\times 10^{-11}$ N m² kg⁻² is the **universal gravitational constant** — the same everywhere, unlike $g$.

## Gravitational field strength
For a body of mass $m$ on the surface of the earth (mass $M$, radius $R$), $mg = \\frac{GMm}{R^2}$, so
$g = \\frac{GM}{R^2}$
- $g$ **decreases with height**: at a distance $r$ from the centre, $g' = g\\left(\\frac{R}{r}\\right)^2$. At a height equal to the earth's radius ($r = 2R$) it is $\\frac{g}{4}$.
- $g$ also decreases **below** the surface, becoming zero at the centre
- it varies slightly with latitude

## Gravitational potential
The work done in bringing unit mass from infinity to the point:
$V = -\\frac{GM}{r}$
It is negative because the force is attractive; it is zero at infinity.

## Escape velocity
The **minimum speed** with which a body must be projected to escape completely from the earth's gravitational field:
$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$
For the earth ($R = 6.4 \\times 10^{6}$ m, $g = 10$ m/s²): $v_e = \\sqrt{1.28 \\times 10^{8}} \\approx 1.13 \\times 10^{4}$ m/s — about **11 km/s**. It does **not** depend on the mass of the body.

## Satellites
A satellite in a circular orbit is kept there by gravity, which provides the **centripetal force**:
$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$, so $v = \\sqrt{\\frac{GM}{r}}$
Close to the earth's surface, $v = \\sqrt{gR} \\approx 8$ km/s.
- the **period** $T = \\frac{2\\pi r}{v}$
- a **geostationary (parking-orbit) satellite** has a period of **24 hours**, orbits above the equator in the direction of the earth's rotation, and so stays above one point — used for **communications**, broadcasting and weather observation. Nigeria's **NigComSat** is of this kind.
- astronauts feel **weightless** because they and their craft are in free fall together

## Kepler's laws of planetary motion
1. **Law of orbits**: each planet moves in an **ellipse** with the sun at one focus.
2. **Law of areas**: the line joining a planet to the sun sweeps out **equal areas in equal times** — a planet moves faster when nearer the sun.
3. **Law of periods**: the **square of the period** is proportional to the **cube of the mean distance** from the sun: $T^2 \\propto r^3$.
If the orbital radius is made four times as large, the period becomes $\\sqrt{4^3} = 8$ times as long.

## The solar system
The sun and its planets — Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune — with moons, asteroids and comets, held together by gravitation.

## Comparing gravitational and electric fields
both obey an inverse-square law; but gravitation is always attractive and much weaker, and cannot be shielded.`,
          examples: `**Example 1.** By what factor does the gravitational force change if the distance between two masses is doubled? *Solution:* It becomes **one-quarter**.

**Example 2.** Find g at a height equal to the earth's radius above the surface, given g = 10 m/s² at the surface. *Solution:* $\\frac{10}{4} = 2.5$ m/s².

**Example 3.** What is the period of a geostationary satellite? *Answer:* **24 hours**.`,
        },
        questions: [
          ["E", "The force that keeps the planets in orbit round the sun is", "gravitational force", "magnetic force", "electrostatic force", "frictional force", "It provides the centripetal force."],
          ["E", "The period of a geostationary satellite is", "24 hours", "12 hours", "one month", "one year", "It stays above the same point on the equator."],
          ["E", "According to Kepler's first law, the orbit of a planet is", "an ellipse", "a circle", "a parabola", "a straight line", "The sun is at one focus."],
          ["M", "If the distance between two masses is doubled, the gravitational force between them becomes", "one-quarter", "one-half", "double", "four times", "The force varies inversely as the square of the distance."],
          ["M", "The escape velocity from the earth is approximately", "11 km/s", "8 km/s", "1 km/s", "300 000 km/s", "It equals √(2gR)."],
          ["M", "The universal gravitational constant G has the unit", "N m² kg⁻²", "N kg⁻¹", "m s⁻²", "N m kg⁻¹", "It follows from F = Gm₁m₂/r²."],
          ["M", "Astronauts in an orbiting spacecraft feel weightless because", "they and the craft are in free fall together", "there is no gravity in space", "their mass becomes zero", "the craft is at rest", "Gravity still acts and keeps them in orbit."],
          ["H", "The acceleration due to gravity at the earth's surface is 10 m/s². At a height above the surface equal to the earth's radius it is", "2.5 m/s²", "5 m/s²", "10 m/s²", "1.25 m/s²", "The distance from the centre is doubled."],
          ["H", "If the radius of a planet's orbit is increased to four times its value, its period becomes", "eight times as long", "four times as long", "sixteen times as long", "twice as long", "T² is proportional to r³, and √64 = 8."],
          ["H", "The escape velocity of a body from the earth does not depend on the", "mass of the body", "radius of the earth", "mass of the earth", "value of g", "v = √(2gR) contains no term for the body's mass."],
        ],
      },
      {
        week: 2,
        title: "Electromagnetic waves",
        subtopics: ["Nature and properties of electromagnetic waves", "The electromagnetic spectrum", "Sources, detection and uses", "Hazards"],
        objectives: ["Describe the nature and common properties of electromagnetic waves", "Arrange the electromagnetic spectrum in order", "State the sources, detectors and uses of each type", "State the hazards of electromagnetic radiation"],
        lesson: {
          title: "The Electromagnetic Spectrum",
          summary: "Describe the family of electromagnetic waves and their uses.",
          minutes: 40,
          notes: `## Nature
**Electromagnetic waves** consist of **electric and magnetic fields** vibrating at right angles to each other and to the direction of travel. They are produced by accelerating charges and were predicted by **Maxwell** and demonstrated by **Hertz**.

## Common properties
- they are **transverse** waves and can be **polarised**
- they need **no material medium**
- in a vacuum they all travel at the same speed, $c = 3 \\times 10^{8}$ m/s
- they obey $c = f\\lambda$
- they are reflected, refracted, diffracted and show interference
- they carry energy; they are **not deflected** by electric or magnetic fields (they carry no charge)

## The spectrum
In order of **increasing wavelength** (decreasing frequency and energy):

| Type | Typical wavelength | Source | Detector | Uses |
|---|---|---|---|---|
| **gamma rays** | below $10^{-11}$ m | radioactive nuclei | Geiger–Müller tube, photographic film | radiotherapy; sterilising equipment; detecting flaws in metals |
| **X-rays** | about $10^{-10}$ m | X-ray tube (fast electrons striking a metal target) | photographic film, fluorescent screen | medical imaging; crystallography; airport security |
| **ultraviolet** | $10^{-8}$ m | the sun; mercury-vapour lamps; sparks | fluorescent substances; photographic film | sterilising; detecting forged banknotes; production of vitamin D in the skin |
| **visible light** | $4 \\times 10^{-7}$ to $7 \\times 10^{-7}$ m | the sun, lamps, flames | the eye; film; photocells | vision; photography; photosynthesis |
| **infra-red** | $10^{-5}$ m | all warm bodies | thermopile; blackened thermometer | heating; remote controls; night-vision; thermal imaging |
| **microwaves** | about $10^{-2}$ m | magnetron, klystron | aerials; diodes | radar; satellite and mobile-phone links; microwave ovens |
| **radio waves** | from about 0.1 m to kilometres | oscillating circuits and aerials | aerials | radio and television broadcasting; communication |

A memory aid, shortest wavelength first: **G**amma, **X**, **U**ltraviolet, **V**isible, **I**nfra-red, **M**icrowave, **R**adio.

Within visible light, **violet** has the shortest wavelength and **red** the longest.

## Energy
The energy carried by each quantum is $E = hf$: gamma rays, with the highest frequency, are the most energetic and penetrating.

## The atmosphere
- the **ozone layer** absorbs much of the sun's harmful ultraviolet radiation; damage to it increases the risk of skin cancer
- the **ionosphere** reflects medium- and short-wave radio signals, allowing long-distance broadcasting
- the **greenhouse effect**: gases such as carbon dioxide trap infra-red radiation and warm the earth

## Hazards
- **gamma rays and X-rays** are **ionising**: they damage living cells and can cause cancer and genetic change — workers use lead shielding and limit exposure
- excessive **ultraviolet** causes sunburn, skin cancer and eye damage
- intense **infra-red** burns
- **microwaves** heat body tissue

## Calculation
A radio station broadcasting at $1 \\times 10^{8}$ Hz has wavelength $\\lambda = \\frac{3 \\times 10^{8}}{1 \\times 10^{8}} = 3$ m.`,
          examples: `**Example 1.** Which electromagnetic wave has the shortest wavelength? *Answer:* **Gamma rays**.

**Example 2.** Find the frequency of light of wavelength $6 \\times 10^{-7}$ m. *Solution:* $\\frac{3 \\times 10^{8}}{6 \\times 10^{-7}} = 5 \\times 10^{14}$ Hz.

**Example 3.** Which radiation is used in remote controls? *Answer:* **Infra-red**.`,
        },
        questions: [
          ["E", "All electromagnetic waves travel in a vacuum with the same", "speed", "wavelength", "frequency", "energy", "The speed is 3 × 10⁸ m/s."],
          ["E", "The electromagnetic waves used for cooking in certain ovens and for radar are", "microwaves", "gamma rays", "ultraviolet rays", "X-rays", "They are also used for mobile-phone links."],
          ["E", "The electromagnetic radiation with the longest wavelength is", "radio waves", "gamma rays", "visible light", "X-rays", "Their wavelengths can be kilometres long."],
          ["M", "Which list is in order of increasing wavelength?", "X-rays, ultraviolet, infra-red, radio waves", "radio waves, infra-red, ultraviolet, X-rays", "ultraviolet, X-rays, radio waves, infra-red", "infra-red, X-rays, radio waves, ultraviolet", "X-rays are shortest and radio waves longest in the list."],
          ["M", "The radiation emitted by all warm bodies and used in remote controls is", "infra-red", "ultraviolet", "gamma radiation", "X-radiation", "It is detected as heat."],
          ["M", "The layer of the atmosphere that absorbs most of the sun's ultraviolet radiation is the", "ozone layer", "ionosphere", "troposphere only", "magnetosphere", "Its depletion raises the risk of skin cancer."],
          ["M", "Electromagnetic waves are not deflected by electric or magnetic fields because they", "carry no charge", "have no energy", "are longitudinal", "travel too slowly", "They consist of fields, not charged particles."],
          ["H", "A radio station broadcasts at a frequency of 1 × 10⁸ Hz. The wavelength of the waves is (c = 3 × 10⁸ m/s)", "3 m", "0.33 m", "30 m", "3 × 10¹⁶ m", "λ = c ÷ f. Answer: 3 m."],
          ["H", "Compared with red light, violet light has", "a shorter wavelength and a higher frequency", "a longer wavelength and a lower frequency", "the same wavelength", "a lower speed in a vacuum", "Both travel at the same speed in a vacuum."],
          ["H", "Gamma rays are more penetrating than visible light because they have", "a much higher frequency and therefore greater energy", "a longer wavelength", "a greater speed", "an electric charge", "The energy of a quantum is hf."],
        ],
      },
      {
        week: 3,
        title: "Atomic physics: structure, energy levels and the photoelectric effect",
        subtopics: ["Models of the atom", "Energy levels and spectra", "The photoelectric effect", "X-rays and thermionic emission"],
        objectives: ["Describe the development of models of the atom", "Explain energy levels and the emission of spectra", "Explain the photoelectric effect and apply Einstein's equation", "Describe the production, properties and uses of X-rays"],
        lesson: {
          title: "Inside the Atom",
          summary: "Describe atomic models, energy quantisation and the photoelectric effect.",
          minutes: 40,
          notes: `## Models of the atom
- **Dalton**: atoms are tiny indivisible spheres
- **Thomson** (who discovered the electron): the "**plum-pudding**" model — a sphere of positive charge with electrons embedded in it
- **Rutherford**: from the **alpha-particle scattering** experiment (Geiger and Marsden, using thin gold foil) — most alpha particles passed straight through, a few were deflected through large angles — he concluded that the atom is mostly **empty space** with a tiny, dense, **positively charged nucleus**, around which electrons move
- **Bohr**: electrons move in certain **allowed orbits (energy levels)** without radiating; radiation is emitted or absorbed only when an electron **jumps** between levels
- the modern **wave-mechanical (electron-cloud)** model

## The nucleus
contains **protons** and **neutrons** (nucleons). **Atomic number** $Z$ = number of protons; **mass number** $A$ = protons + neutrons. **Isotopes** are atoms of the same element with different numbers of neutrons.

## Energy levels and spectra
An electron in its lowest level is in the **ground state**; given energy it rises to an **excited state**. When it falls from level $E_2$ to $E_1$ it emits a **photon**:
$hf = E_2 - E_1$
where $h = 6.63 \\times 10^{-34}$ J s is **Planck's constant**.
- because the levels are fixed, each element gives its own **line spectrum** — the basis of spectroscopy
- removing an electron completely is **ionisation**; for hydrogen the ground state is −13.6 eV, so its ionisation energy is 13.6 eV

## The photoelectric effect
The emission of **electrons from a metal surface when light of sufficiently high frequency falls on it**.
### Observations
1. no electrons are emitted below a certain **threshold frequency** $f_0$, however intense the light
2. the **maximum kinetic energy** of the electrons depends on the **frequency**, not the intensity
3. the **number** of electrons emitted per second is proportional to the **intensity**
4. emission is instantaneous
These could not be explained by the wave theory.

### Einstein's explanation
Light consists of packets of energy called **photons**, each of energy $E = hf$. One photon gives all its energy to one electron:
$hf = W_0 + KE_{max}$
where $W_0 = hf_0$ is the **work function** — the minimum energy needed to free an electron.
The **stopping potential** $V_s$ satisfies $eV_s = KE_{max}$.
### Applications
photocells in burglar alarms, automatic doors, light meters, solar cells, the sound track of films.

## Thermionic emission
The emission of electrons from a **heated** metal surface. It is used in the cathode-ray tube and the X-ray tube. **Cathode rays** are streams of fast electrons: they travel in straight lines, are deflected by electric and magnetic fields, and cause fluorescence. The **cathode-ray oscilloscope** displays and measures voltages.

## X-rays
### Production
In an X-ray tube, electrons from a heated filament are accelerated by a high voltage and strike a heavy-metal **target** (tungsten). About 1 per cent of their energy becomes X-rays; the rest becomes heat, so the target is cooled.
- **hard** X-rays (high voltage): very penetrating
- **soft** X-rays: less penetrating
- intensity is controlled by the filament current
### Properties
electromagnetic waves of very short wavelength; travel in straight lines at the speed of light; not deflected by fields; penetrate matter; ionise gases; affect photographic film; cause fluorescence.
### Uses
medical radiography and treatment; inspecting welds and castings; studying crystal structure; security screening.
### Hazards
damage to living tissue — lead aprons and screens are used.`,
          examples: `**Example 1.** Find the energy of a photon of frequency $5 \\times 10^{14}$ Hz. *Solution:* $6.63 \\times 10^{-34} \\times 5 \\times 10^{14} = 3.3 \\times 10^{-19}$ J.

**Example 2.** Light of photon energy $5 \\times 10^{-19}$ J falls on a metal of work function $3 \\times 10^{-19}$ J. Find the maximum kinetic energy of the electrons. *Solution:* $2 \\times 10^{-19}$ J.

**Example 3.** What did the alpha-scattering experiment show? *Answer:* The atom has a **small, dense, positively charged nucleus**.`,
        },
        questions: [
          ["E", "The nucleus of the atom was discovered through an experiment on the scattering of", "alpha particles by gold foil", "electrons by a gas", "light by a prism", "neutrons by lead", "Rutherford interpreted the results."],
          ["E", "A packet of light energy is called a", "photon", "proton", "neutron", "nucleon", "Its energy is hf."],
          ["E", "The emission of electrons from a heated metal surface is called", "thermionic emission", "the photoelectric effect", "radioactivity", "ionisation only", "It is used in the cathode-ray tube."],
          ["M", "The minimum energy needed to remove an electron from a metal surface is the", "work function", "stopping potential", "ionisation potential of hydrogen", "binding energy of the nucleus", "It equals h times the threshold frequency."],
          ["M", "In the photoelectric effect, increasing the intensity of the light increases the", "number of electrons emitted per second", "maximum kinetic energy of the electrons", "threshold frequency", "work function", "The energy of each electron depends on frequency."],
          ["M", "X-rays are produced when", "fast electrons strike a heavy-metal target", "light falls on a metal", "a nucleus emits an alpha particle", "a metal is heated", "Most of the electrons' energy becomes heat."],
          ["M", "The energy of a photon of frequency 5 × 10¹⁴ Hz (h = 6.63 × 10⁻³⁴ J s) is about", "3.3 × 10⁻¹⁹ J", "1.3 × 10⁻⁴⁸ J", "7.5 × 10⁴⁷ J", "3.3 × 10⁻²⁰ J", "E = hf. Answer: 3.3 × 10⁻¹⁹ J."],
          ["H", "Light whose photons have energy 5 × 10⁻¹⁹ J falls on a metal of work function 3 × 10⁻¹⁹ J. The maximum kinetic energy of the emitted electrons is", "2 × 10⁻¹⁹ J", "8 × 10⁻¹⁹ J", "1.5 × 10⁻¹⁹ J", "zero", "KE = hf − W₀. Answer: 2 × 10⁻¹⁹ J."],
          ["H", "An electron in a hydrogen atom falls from the −3.4 eV level to the −13.6 eV level. The energy of the photon emitted is", "10.2 eV", "17.0 eV", "3.4 eV", "13.6 eV", "The difference between the two levels."],
          ["H", "The wave theory of light could not explain why", "no electrons are emitted below a threshold frequency however intense the light", "light is reflected", "light is refracted", "light shows interference", "Einstein's photon theory explained it."],
        ],
      },
      {
        week: 4,
        title: "Radioactivity and nuclear energy",
        subtopics: ["Types and properties of radiation", "Radioactive decay and half-life", "Nuclear reactions: fission and fusion", "Uses and hazards"],
        objectives: ["Describe alpha, beta and gamma radiation", "Write decay equations and solve half-life problems", "Explain nuclear fission, fusion and binding energy", "State the uses and hazards of radioactivity"],
        lesson: {
          title: "The Unstable Nucleus",
          summary: "Explain radioactivity, half-life and nuclear energy.",
          minutes: 40,
          notes: `## Radioactivity
**Radioactivity** is the **spontaneous disintegration of unstable nuclei** with the emission of radiation. It was discovered by **Becquerel** (1896) and studied by **Marie and Pierre Curie**. It is **random** and is unaffected by temperature, pressure or chemical combination.

## The three radiations
| | Alpha (α) | Beta (β) | Gamma (γ) |
|---|---|---|---|
| nature | helium nucleus ($^{4}_{2}He$) | fast electron | electromagnetic wave |
| charge | +2 | −1 | none |
| mass | 4 units | about 1/1840 unit | none |
| penetration | stopped by **paper** or a few cm of air | stopped by a few mm of **aluminium** | reduced by thick **lead** or concrete |
| ionising power | **greatest** | moderate | least |
| in electric / magnetic field | deflected slightly | deflected strongly, the opposite way | **not deflected** |

## Decay equations
- **alpha decay**: mass number falls by 4, atomic number by 2
$^{238}_{92}U \\rightarrow {}^{234}_{90}Th + {}^{4}_{2}He$
- **beta decay**: mass number unchanged, atomic number rises by 1 (a neutron becomes a proton)
$^{14}_{6}C \\rightarrow {}^{14}_{7}N + {}^{0}_{-1}e$
- **gamma emission**: no change in mass or atomic number; the nucleus loses energy

## Half-life
The **half-life** of a radioactive substance is the **time taken for half of the atoms present to decay** (or for the activity to fall to half).
After $n$ half-lives the fraction remaining is $\\left(\\frac{1}{2}\\right)^n$.
*Example:* a sample of 80 g has a half-life of 4 days. After 16 days (4 half-lives): 80 → 40 → 20 → 10 → **5 g**.
The **decay constant** $\\lambda$ is related by $T_{1/2} = \\frac{0.693}{\\lambda}$.

## Detectors
the **Geiger–Müller tube**; the **cloud chamber**; photographic film (badges); scintillation counters; the gold-leaf electroscope.

## Nuclear energy
### Mass defect and binding energy
The mass of a nucleus is slightly **less** than the total mass of its separate nucleons. This **mass defect** appears as the **binding energy** holding the nucleus together:
$E = mc^2$
A mass of 1 g is equivalent to $0.001 \\times (3 \\times 10^{8})^2 = 9 \\times 10^{13}$ J.

### Fission
The **splitting of a heavy nucleus** (uranium-235, plutonium) into two lighter nuclei when struck by a **neutron**, releasing energy and two or three more neutrons, which can cause further fissions — a **chain reaction**.
- uncontrolled: the atomic bomb
- controlled: the **nuclear reactor**, with **moderators** (graphite, heavy water) to slow the neutrons and **control rods** (boron, cadmium) to absorb them

### Fusion
The **joining of light nuclei** (isotopes of hydrogen) to form a heavier nucleus (helium), with the release of even more energy per unit mass. It requires extremely **high temperatures** — it is the source of energy of the **sun and stars**, and of the hydrogen bomb.

## Uses of radioactivity
- **medicine**: radiotherapy for cancer (cobalt-60); tracers; sterilising instruments
- **agriculture**: tracers for fertiliser uptake; pest control; food preservation; improved crop varieties
- **industry**: thickness gauges; detecting leaks and cracks; smoke detectors
- **archaeology**: **carbon-14 dating** of once-living material (half-life about 5700 years)
- power generation

## Hazards and safety
Radiation damages cells — burns, radiation sickness, cancer, sterility and genetic mutation; radioactive waste remains dangerous for long periods.
Precautions: lead and concrete shielding; handling with tongs or by remote control; protective clothing; film badges; limited exposure time; safe storage.`,
          examples: `**Example 1.** A substance has a half-life of 3 days. What fraction remains after 9 days? *Solution:* three half-lives: $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.

**Example 2.** Write the product when $^{226}_{88}Ra$ emits an alpha particle. *Solution:* $^{222}_{86}Rn$.

**Example 3.** Which radiation is not deflected by a magnetic field? *Answer:* **Gamma** radiation.`,
        },
        questions: [
          ["E", "An alpha particle is a", "helium nucleus", "fast electron", "neutron", "photon", "It carries a charge of +2."],
          ["E", "The radiation that is not deflected by electric or magnetic fields is", "gamma radiation", "alpha radiation", "beta radiation", "cathode rays", "It carries no charge."],
          ["E", "The energy of the sun is produced by", "nuclear fusion", "nuclear fission", "combustion of coal", "radioactive decay of uranium", "Hydrogen nuclei combine to form helium."],
          ["M", "The time taken for half the atoms of a radioactive sample to decay is its", "half-life", "decay constant", "mean life only", "period", "It is a characteristic of each isotope."],
          ["M", "When a nucleus emits an alpha particle, its atomic number", "decreases by 2", "increases by 1", "decreases by 4", "remains unchanged", "Its mass number decreases by 4."],
          ["M", "Beta particles can be stopped by", "a few millimetres of aluminium", "a sheet of paper", "nothing at all", "only several metres of lead", "Paper stops alpha particles."],
          ["M", "In a nuclear reactor, the control rods", "absorb neutrons to control the chain reaction", "slow down the neutrons", "produce the neutrons", "cool the reactor", "They are made of boron or cadmium."],
          ["H", "A radioactive sample of mass 80 g has a half-life of 4 days. The mass remaining undecayed after 16 days is", "5 g", "20 g", "10 g", "2.5 g", "Four half-lives leave one-sixteenth."],
          ["H", "The activity of a radioactive source falls from 800 counts per minute to 100 counts per minute in 6 hours. Its half-life is", "2 hours", "3 hours", "1 hour", "6 hours", "800 → 400 → 200 → 100 is three half-lives."],
          ["H", "The energy equivalent of a mass of 1 g (c = 3 × 10⁸ m/s) is", "9 × 10¹³ J", "9 × 10¹⁶ J", "3 × 10⁵ J", "3 × 10⁸ J", "E = mc² with m = 0.001 kg."],
        ],
      },
      {
        week: 5,
        title: "Basic electronics",
        subtopics: ["Conductors, semiconductors and insulators", "Doping: n-type and p-type semiconductors", "The p–n junction diode and rectification", "Transistors and logic gates"],
        objectives: ["Distinguish conductors, semiconductors and insulators", "Explain doping and the two types of extrinsic semiconductor", "Describe the junction diode and its use in rectification", "Describe the transistor and simple logic gates"],
        lesson: {
          title: "Semiconductor Devices",
          summary: "Describe semiconductors, diodes, transistors and logic gates.",
          minutes: 40,
          notes: `## Conductors, semiconductors and insulators
In terms of the **band theory**:
- **conductors** (metals): the valence and conduction bands overlap; many free electrons
- **insulators**: a **wide** energy gap separates the bands; no free carriers
- **semiconductors** (**silicon**, **germanium**): a **narrow** gap; a few electrons can cross it at room temperature
The resistance of a semiconductor **decreases as temperature rises** (more carriers are freed) — the opposite of a metal. Thermistors and light-dependent resistors use this.

## Intrinsic semiconductors
A **pure** semiconductor. Each atom has four valence electrons. When an electron breaks free it leaves a **hole**, which behaves like a positive charge carrier. Electrons and holes exist in equal numbers.

## Doping
Adding a small, controlled amount of impurity to increase conductivity gives an **extrinsic** semiconductor.
- **n-type**: doped with a **pentavalent** element (**phosphorus, arsenic, antimony**) — a **donor**. The extra electron is free: **electrons are the majority carriers**.
- **p-type**: doped with a **trivalent** element (**boron, aluminium, indium**) — an **acceptor**. Each impurity atom creates a hole: **holes are the majority carriers**.
Both types remain electrically **neutral** overall.

## The p–n junction diode
Joining p-type and n-type material forms a junction with a **depletion layer** that has few carriers.
- **forward bias** (p-side to the positive terminal): the depletion layer narrows and the diode **conducts**
- **reverse bias** (p-side to the negative terminal): the layer widens and almost **no current** flows
So the diode passes current in **one direction only**.

### Rectification
Converting alternating current to direct current.
- **half-wave**: one diode passes only half of each cycle
- **full-wave**: a **bridge of four diodes** (or two diodes with a centre-tapped transformer) uses both halves
A **capacitor** across the output **smooths** the pulsating current.

### Other diodes
the **light-emitting diode (LED)**; the **Zener diode** (voltage regulation); the **photodiode**; the **solar cell**.

## The transistor
A **bipolar junction transistor** has three regions — **emitter, base and collector** — and is of two kinds: **n-p-n** and **p-n-p**. A small **base current** controls a much larger **collector current**.
$I_E = I_B + I_C$ and current gain $\\beta = \\frac{I_C}{I_B}$
### Uses
- as an **amplifier** — in radios and hearing aids
- as a **switch** — in alarms and computers

## Integrated circuits
Thousands to billions of transistors, diodes and resistors formed on a single chip of silicon — the basis of computers and phones.

## Logic gates
Circuits whose output is HIGH (1) or LOW (0) depending on the inputs.
| Gate | Output is 1 when |
|---|---|
| **AND** | **all** inputs are 1 |
| **OR** | **at least one** input is 1 |
| **NOT** (inverter) | the input is 0 |
| **NAND** | NOT all inputs are 1 |
| **NOR** | no input is 1 |

## Advantages of semiconductor devices
small, light, cheap, reliable, low power consumption, need no heater and work at low voltages — but they are damaged by excessive heat or voltage.`,
          examples: `**Example 1.** Name the majority carriers in n-type material. *Answer:* **Electrons**.

**Example 2.** A transistor has a base current of 0.1 mA and a collector current of 5 mA. Find the current gain and the emitter current. *Solution:* $\\beta = \\frac{5}{0.1} = 50$; $I_E = 5.1$ mA.

**Example 3.** What is the output of an AND gate with inputs 1 and 0? *Answer:* **0**.`,
        },
        questions: [
          ["E", "Which of these is a semiconductor?", "silicon", "copper", "rubber", "glass", "Germanium is another."],
          ["E", "A diode allows current to flow", "in one direction only", "in both directions equally", "only when heated", "only as alternating current", "It conducts when forward biased."],
          ["E", "The process of converting alternating current to direct current is called", "rectification", "amplification", "modulation", "induction", "Diodes are used for it."],
          ["M", "The majority charge carriers in a p-type semiconductor are", "holes", "electrons", "protons", "ions", "It is doped with a trivalent element."],
          ["M", "An n-type semiconductor is made by doping silicon with", "phosphorus", "boron", "aluminium", "indium", "A pentavalent impurity donates an electron."],
          ["M", "As the temperature of a pure semiconductor rises, its resistance", "decreases", "increases", "stays constant", "becomes infinite", "More charge carriers are set free."],
          ["M", "The three terminals of a bipolar transistor are the emitter, the base and the", "collector", "cathode", "anode", "grid", "A small base current controls the collector current."],
          ["H", "A transistor has a base current of 0.1 mA and a collector current of 5 mA. Its current gain and emitter current are", "50 and 5.1 mA", "50 and 4.9 mA", "0.02 and 5.1 mA", "500 and 5 mA", "β = Ic ÷ Ib and Ie = Ib + Ic."],
          ["H", "The output of an OR gate is 0 only when", "both inputs are 0", "both inputs are 1", "one input is 1", "the inputs are different", "Any high input gives a high output."],
          ["H", "Full-wave rectification is commonly achieved with", "a bridge of four diodes", "a single diode", "one transistor", "a capacitor alone", "Both halves of each cycle are used."],
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
        title: "Wave–particle duality and the uncertainty principle",
        subtopics: ["The quantum theory", "Wave–particle duality of light", "Matter waves", "The uncertainty principle"],
        objectives: ["Explain the idea of energy quantisation", "Explain the dual nature of light", "Calculate the de Broglie wavelength of a particle", "State Heisenberg's uncertainty principle"],
        lesson: {
          title: "Waves and Particles",
          summary: "Explain the dual nature of light and matter.",
          minutes: 40,
          notes: `## The quantum theory
**Planck** (1900) proposed that radiation is emitted and absorbed not continuously but in discrete packets called **quanta**. The energy of one quantum is
$E = hf = \\frac{hc}{\\lambda}$
where $h = 6.63 \\times 10^{-34}$ J s. Energy is therefore **quantised** — it comes in whole multiples of $hf$. The same idea explains the fixed **energy levels** of atoms.

## The dual nature of light
Light shows two kinds of behaviour:
- **wave behaviour**: **interference**, **diffraction** and **polarisation** can be explained only if light is a wave
- **particle behaviour**: the **photoelectric effect** and the **Compton effect** (the scattering of X-rays by electrons with a change of wavelength) can be explained only if light consists of particles — **photons**
Neither picture alone is complete: light has a **wave–particle duality**. A photon has energy $hf$ and momentum
$p = \\frac{h}{\\lambda}$

## Matter waves
**De Broglie** (1924) suggested that, if waves can behave like particles, **particles can behave like waves**. A particle of mass $m$ moving with velocity $v$ has a wavelength
$\\lambda = \\frac{h}{mv} = \\frac{h}{p}$
This was confirmed when **Davisson and Germer** (and G.P. Thomson) showed that **electrons are diffracted** by crystals.
- for an **electron** moving at $1 \\times 10^{6}$ m/s: $\\lambda = \\frac{6.63 \\times 10^{-34}}{9.1 \\times 10^{-31} \\times 10^{6}} \\approx 7.3 \\times 10^{-10}$ m — comparable with the spacing of atoms, so diffraction is observable
- for a **ball** of mass 0.1 kg moving at 6.63 m/s: $\\lambda = 1 \\times 10^{-33}$ m — far too small to detect, which is why everyday objects show no wave behaviour
The **electron microscope** uses the very short wavelength of fast electrons to give much greater resolution than a light microscope.

## The uncertainty principle
**Heisenberg** (1927): it is **impossible to measure simultaneously, with unlimited accuracy, both the position and the momentum of a particle**.
$\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}$
The more precisely the position is known, the less precisely the momentum can be known, and vice versa. A similar relation holds for energy and time: $\\Delta E \\cdot \\Delta t \\geq \\frac{h}{4\\pi}$.
### Consequences
- it is not a fault of instruments but a property of nature
- the electron in an atom cannot be pictured as following a definite orbit; we can speak only of the **probability** of finding it in a region — the electron cloud
- it is unimportant for large objects because $h$ is so small

## Summary of the evidence
| Phenomenon | Shows that |
|---|---|
| interference, diffraction of light | light is a wave |
| photoelectric effect, Compton effect | light is a particle |
| electron diffraction | matter is a wave |
| line spectra | energy is quantised |

## Importance
Quantum ideas underlie lasers, transistors, LEDs, solar cells, magnetic resonance imaging and modern chemistry.`,
          examples: `**Example 1.** Find the energy of a photon of wavelength $6.63 \\times 10^{-7}$ m. *Solution:* $\\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^{8}}{6.63 \\times 10^{-7}} = 3 \\times 10^{-19}$ J.

**Example 2.** Find the de Broglie wavelength of a particle of momentum $3.315 \\times 10^{-24}$ kg m/s. *Solution:* $\\frac{6.63 \\times 10^{-34}}{3.315 \\times 10^{-24}} = 2 \\times 10^{-10}$ m.

**Example 3.** Which experiment showed that electrons have wave properties? *Answer:* **Electron diffraction** (Davisson and Germer).`,
        },
        questions: [
          ["E", "The idea that radiation is emitted in discrete packets of energy was proposed by", "Planck", "Newton", "Faraday", "Ohm", "Each packet is called a quantum."],
          ["E", "The wavelength associated with a moving particle is known as its", "de Broglie wavelength", "threshold wavelength", "critical wavelength", "focal length", "It equals h divided by the momentum."],
          ["E", "The uncertainty principle was stated by", "Heisenberg", "Bohr", "Rutherford", "Einstein", "It concerns position and momentum."],
          ["M", "Which phenomenon shows that light behaves as a wave?", "interference", "the photoelectric effect", "the Compton effect", "thermionic emission", "Diffraction and polarisation also show it."],
          ["M", "Which phenomenon shows that light behaves as a stream of particles?", "the photoelectric effect", "diffraction", "polarisation", "interference", "Each photon ejects one electron."],
          ["M", "The wave nature of electrons was confirmed by", "electron diffraction", "alpha scattering", "the oil-drop experiment", "the photoelectric effect", "Davisson and Germer used a crystal."],
          ["M", "The momentum of a photon of wavelength λ is", "$\\frac{h}{\\lambda}$", "$h\\lambda$", "$\\frac{\\lambda}{h}$", "$hf\\lambda$", "Its energy is hc divided by λ."],
          ["H", "The energy of a photon of wavelength 6.63 × 10⁻⁷ m (h = 6.63 × 10⁻³⁴ J s, c = 3 × 10⁸ m/s) is", "3 × 10⁻¹⁹ J", "1.3 × 10⁻⁴⁸ J", "3 × 10⁻²⁷ J", "4.4 × 10⁻⁴⁰ J", "E = hc ÷ λ. Answer: 3 × 10⁻¹⁹ J."],
          ["H", "A ball of mass 0.1 kg moves at 6.63 m/s. Its de Broglie wavelength (h = 6.63 × 10⁻³⁴ J s) is", "1 × 10⁻³³ m", "1 × 10⁻³⁴ m", "6.63 × 10⁻³⁵ m", "4.4 × 10⁻³⁴ m", "λ = h ÷ mv = 6.63 × 10⁻³⁴ ÷ 0.663."],
          ["H", "Everyday objects do not show observable wave behaviour because their de Broglie wavelengths are", "far too small to be detected", "extremely large", "equal to that of light", "zero exactly", "Planck's constant is very small compared with their momentum."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: mechanics and properties of matter",
        subtopics: ["Units, measurement and vectors", "Motion, forces and momentum", "Work, energy, machines and equilibrium", "Properties of matter"],
        objectives: ["Recall units, dimensions, measurement and vectors", "Solve problems on motion, forces and momentum", "Solve problems on energy, machines and equilibrium", "Recall elasticity, fluids and molecular properties"],
        lesson: {
          title: "Revising Mechanics",
          summary: "Consolidate mechanics and the properties of matter for the senior examinations.",
          minutes: 45,
          notes: `## Key formulae
### Motion
- $v = u + at$; $s = ut + \\frac{1}{2}at^2$; $v^2 = u^2 + 2as$
- free fall: $v = gt$; $h = \\frac{1}{2}gt^2$
- projectile: $T = \\frac{2u\\sin\\theta}{g}$; $H = \\frac{u^2\\sin^2\\theta}{2g}$; $R = \\frac{u^2\\sin 2\\theta}{g}$
- circular: $v = \\omega r$; $a = \\frac{v^2}{r}$; $F = \\frac{mv^2}{r}$
- SHM: $T = 2\\pi\\sqrt{\\frac{l}{g}}$; $T = 2\\pi\\sqrt{\\frac{m}{k}}$

### Forces
- $F = ma$; $p = mv$; impulse $Ft = m(v - u)$
- momentum conserved: $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$
- friction: $F = \\mu R$
- moment = force × perpendicular distance
- gravitation: $F = \\frac{Gm_1m_2}{r^2}$; $g = \\frac{GM}{R^2}$; $v_e = \\sqrt{2gR}$

### Energy and machines
- $W = Fs\\cos\\theta$; $KE = \\frac{1}{2}mv^2$; $PE = mgh$; $P = \\frac{W}{t} = Fv$
- $MA = \\frac{L}{E}$; $VR$ = distance moved by effort ÷ distance moved by load; efficiency $= \\frac{MA}{VR} \\times 100\\%$

### Matter
- $\\rho = \\frac{m}{V}$; $P = \\frac{F}{A}$; $P = h\\rho g$
- Archimedes: upthrust = weight of fluid displaced; flotation
- Hooke: $F = ke$; $E = \\frac{\\text{stress}}{\\text{strain}}$; energy $= \\frac{1}{2}Fe$

## Dimensions
velocity $LT^{-1}$; acceleration $LT^{-2}$; force $MLT^{-2}$; energy $ML^2T^{-2}$; power $ML^2T^{-3}$; pressure $ML^{-1}T^{-2}$; momentum $MLT^{-1}$.

## Instruments
vernier (0.01 cm); micrometer (0.01 mm); zero error — subtract if positive.

## Concepts to state precisely
Newton's three laws; conservation of energy and of momentum; principle of moments; conditions of equilibrium; Archimedes' principle; law of flotation; Hooke's law; Pascal's principle; Kepler's laws.

## Common errors
- forgetting to convert **cm to m**, **g to kg**, **km/h to m/s**
- using the average of speeds instead of total distance ÷ total time
- taking $g$ as positive for upward motion
- confusing **mass** with **weight**, **speed** with **velocity**, **MA** with **VR**
- omitting **units** in the answer

## Practical paper
- plot graphs with labelled axes, units and a sensible scale; draw the line of best fit
- find the **slope** using a large triangle
- state **precautions**: avoid parallax, repeat readings, avoid draughts, ensure firm clamping
- know the simple pendulum, Hooke's law, the principle of moments and density experiments.`,
          examples: `**Example 1.** A body of mass 4 kg moving at 5 m/s is brought to rest in 2 s. Find the force. *Solution:* $F = \\frac{4 \\times 5}{2} = 10$ N.

**Example 2.** A machine of VR 6 is 50% efficient. Find its MA. *Solution:* $0.5 \\times 6 = 3$.

**Example 3.** Find the kinetic energy of a 1000 kg car moving at 20 m/s. *Solution:* $\\frac{1}{2} \\times 1000 \\times 400 = 2 \\times 10^{5}$ J.`,
        },
        questions: [
          ["E", "The product of mass and acceleration gives", "force", "momentum", "work", "power", "This is Newton's second law."],
          ["E", "A quantity that has the dimensions $ML^{2}T^{-2}$ is", "energy", "force", "pressure", "momentum", "Work has the same dimensions."],
          ["E", "The principle that upthrust equals the weight of fluid displaced is due to", "Archimedes", "Pascal", "Hooke", "Boyle", "It applies to bodies immersed in fluids."],
          ["M", "A body of mass 4 kg moving at 5 m/s is brought to rest in 2 s. The retarding force is", "10 N", "40 N", "2.5 N", "20 N", "F = m(v − u) ÷ t."],
          ["M", "The kinetic energy of a car of mass 1000 kg moving at 20 m/s is", "2 × 10⁵ J", "2 × 10⁴ J", "4 × 10⁵ J", "1 × 10⁴ J", "KE = ½mv². Answer: 2 × 10⁵ J."],
          ["M", "A machine with a velocity ratio of 6 has an efficiency of 50%. Its mechanical advantage is", "3", "12", "0.083", "300", "MA = efficiency × VR."],
          ["M", "A spring of force constant 400 N/m is stretched by 0.05 m. The force applied is", "20 N", "8000 N", "8 N", "200 N", "F = ke. Answer: 20 N."],
          ["H", "A stone is thrown vertically upwards at 30 m/s (g = 10 m/s²). The total time it spends in the air before returning to the thrower is", "6 s", "3 s", "9 s", "1.5 s", "T = 2u ÷ g. Answer: 6 s."],
          ["H", "A trolley of mass 3 kg moving at 4 m/s collides with a stationary trolley of mass 1 kg and they move on together. The kinetic energy lost in the collision is", "6 J", "24 J", "18 J", "12 J", "Common velocity 3 m/s: 24 J before, 18 J after."],
          ["H", "A uniform beam 4 m long and weighing 200 N rests on supports at its two ends. A load of 400 N is placed 1 m from one end. The reaction at the support nearer the load is", "400 N", "200 N", "300 N", "500 N", "Taking moments about the far end: R × 4 = 200 × 2 + 400 × 3."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: heat, waves, light and sound",
        subtopics: ["Temperature, expansion and heat transfer", "Heat capacity, latent heat and the gas laws", "Waves and sound", "Light"],
        objectives: ["Recall thermometry, expansion and heat transfer", "Solve problems on heat quantities and the gas laws", "Solve problems on waves and sound", "Solve problems on mirrors, lenses and refraction"],
        lesson: {
          title: "Revising Heat, Waves and Optics",
          summary: "Consolidate heat, waves, sound and light for the senior examinations.",
          minutes: 45,
          notes: `## Heat
- $K = °C + 273$; $\\theta = \\frac{X_\\theta - X_0}{X_{100} - X_0} \\times 100$
- expansion: $\\Delta L = \\alpha L\\Delta\\theta$; $\\beta = 2\\alpha$; $\\gamma = 3\\alpha$; $\\gamma_r = \\gamma_a + \\gamma_{vessel}$
- anomalous expansion of water — densest at 4 °C
- conduction, convection, radiation; the vacuum flask
- $Q = mc\\Delta\\theta$; $Q = mL$; heat lost = heat gained
- evaporation vs boiling; effect of pressure and impurities
- gas laws: $P_1V_1 = P_2V_2$; $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$; $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$; $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$
- kinetic theory: pressure from molecular bombardment; temperature ∝ mean kinetic energy

## Waves
- $v = f\\lambda$; $T = \\frac{1}{f}$
- transverse vs longitudinal; mechanical vs electromagnetic
- reflection, refraction, diffraction, interference, polarisation
- $y = A\\sin(\\omega t - kx)$; stationary waves — node to node $\\frac{\\lambda}{2}$

## Sound
- needs a medium; speed about 340 m/s in air
- echo: $d = \\frac{vt}{2}$
- pitch — frequency; loudness — amplitude; quality — overtones
- strings: $f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$
- closed pipe: $f_0 = \\frac{v}{4L}$, odd harmonics; open pipe: $f_0 = \\frac{v}{2L}$, all harmonics
- resonance; beats $= f_1 - f_2$

## Light
- reflection: $i = r$; plane-mirror image; $n = \\frac{360}{\\theta} - 1$
- mirrors and lenses: $\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$; $m = \\frac{v}{u}$; $f = \\frac{r}{2}$
- refraction: $n = \\frac{\\sin i}{\\sin r} = \\frac{\\text{real depth}}{\\text{apparent depth}}$; $\\sin c = \\frac{1}{n}$
- power $= \\frac{1}{f}$ (dioptres)
- eye defects: short sight — concave lens; long sight — convex lens
- telescope: $M = \\frac{f_o}{f_e}$
- dispersion; primary colours — red, green, blue

## Electromagnetic spectrum
gamma → X-ray → ultraviolet → visible → infra-red → microwave → radio (increasing wavelength).

## Typical pitfalls
- using °C instead of **kelvin** in gas laws
- forgetting the factor of **2** in echo problems
- sign errors with **virtual** images
- confusing **nodes** with **antinodes**; closed with open pipes
- mixing up **real depth** and **apparent depth**

## Practical paper
method of mixtures (stir, lag, read at eye level); mirror and lens experiments by the $u$–$v$ method — plot $\\frac{1}{u}$ against $\\frac{1}{v}$, intercepts give $\\frac{1}{f}$; the resonance tube; the sonometer; the glass block and prism.`,
          examples: `**Example 1.** Find the heat needed to raise 0.5 kg of water from 20 °C to 60 °C (c = 4200 J/(kg K)). *Solution:* $0.5 \\times 4200 \\times 40 = 84\\,000$ J.

**Example 2.** An object is 20 cm from a convex lens of focal length 15 cm. Find the image distance. *Solution:* $\\frac{1}{v} = \\frac{1}{15} - \\frac{1}{20} = \\frac{1}{60}$; $v = 60$ cm.

**Example 3.** Find the fundamental frequency of an open pipe 0.85 m long (v = 340 m/s). *Solution:* $\\frac{340}{1.7} = 200$ Hz.`,
        },
        questions: [
          ["E", "The mode of heat transfer that does not require a material medium is", "radiation", "conduction", "convection", "evaporation", "It is how the sun's heat reaches the earth."],
          ["E", "A converging lens is used to correct", "long sight", "short sight", "astigmatism only", "colour blindness", "It brings the image forward on to the retina."],
          ["E", "The speed of a wave is the product of its frequency and its", "wavelength", "amplitude", "period", "phase", "v = fλ. Answer: wavelength."],
          ["M", "The heat required to raise the temperature of 0.5 kg of water from 20 °C to 60 °C (c = 4200 J/(kg K)) is", "84 000 J", "42 000 J", "168 000 J", "8400 J", "Q = 0.5 × 4200 × 40."],
          ["M", "The fundamental frequency of an open pipe of length 0.85 m (speed of sound 340 m/s) is", "200 Hz", "100 Hz", "400 Hz", "289 Hz", "f = v ÷ 2L. Answer: 200 Hz."],
          ["M", "An object is placed 20 cm from a convex lens of focal length 15 cm. The image distance is", "60 cm", "8.6 cm", "35 cm", "5 cm", "1/v = 1/15 − 1/20 = 1/60."],
          ["M", "A fixed mass of gas at 27 °C is heated at constant pressure until its volume doubles. Its new temperature is", "327 °C", "54 °C", "600 °C", "150 °C", "T₂ = 2 × 300 K = 600 K."],
          ["H", "0.1 kg of ice at 0 °C is completely melted and the water is heated to 20 °C. Taking L = 3.36 × 10⁵ J/kg and c = 4200 J/(kg K), the heat required is", "42 000 J", "33 600 J", "8400 J", "75 600 J", "33 600 J to melt plus 8400 J to warm."],
          ["H", "A ship sends an ultrasonic pulse to the sea bed and receives the echo 0.8 s later. If the speed of sound in sea water is 1500 m/s, the depth of the sea is", "600 m", "1200 m", "1875 m", "300 m", "Depth = 1500 × 0.8 ÷ 2."],
          ["H", "A metal rod of length 5 m expands by 3 mm when heated through 50 K. Its linear expansivity is", "1.2 × 10⁻⁵ K⁻¹", "1.2 × 10⁻² K⁻¹", "3 × 10⁻⁵ K⁻¹", "6 × 10⁻⁴ K⁻¹", "α = 0.003 ÷ (5 × 50)."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: electricity, magnetism and modern physics",
        subtopics: ["Electrostatics and current electricity", "Magnetism and electromagnetic induction", "Alternating current", "Atomic and nuclear physics and electronics"],
        objectives: ["Solve problems on electrostatics and circuits", "Recall magnetism and electromagnetic induction", "Solve problems on a.c. circuits", "Recall atomic and nuclear physics and electronics"],
        lesson: {
          title: "Revising Electricity and Modern Physics",
          summary: "Consolidate electricity, magnetism and modern physics for the senior examinations.",
          minutes: 45,
          notes: `## Electrostatics
- like charges repel; charging by friction, contact, induction; electroscope; point action
- $F = \\frac{kQ_1Q_2}{r^2}$; $E = \\frac{F}{q} = \\frac{V}{d}$; $W = qV$
- $C = \\frac{Q}{V}$; parallel $C = C_1 + C_2$; series $\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$; energy $= \\frac{1}{2}CV^2$

## Current electricity
- $I = \\frac{Q}{t}$; $V = IR$; $E = I(R + r)$
- series $R = R_1 + R_2$; parallel $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$
- $R = \\frac{\\rho L}{A}$
- $P = IV = I^2R = \\frac{V^2}{R}$; energy $= IVt$; kWh
- Wheatstone bridge $\\frac{P}{Q} = \\frac{R}{S}$; potentiometer $\\frac{E_1}{E_2} = \\frac{l_1}{l_2}$
- shunt (parallel, low) for ammeter; multiplier (series, high) for voltmeter

## Magnetism
- magnetic materials; soft iron vs steel; magnetising (d.c. solenoid) and demagnetising (a.c. solenoid)
- declination; dip (0° at equator, 90° at poles)
- $F = BIL\\sin\\theta$; $F = qvB$; Fleming's left-hand rule; d.c. motor

## Electromagnetic induction
- Faraday; Lenz; $E = BLv$; Fleming's right-hand rule
- generator: slip rings (a.c.), commutator (d.c.)
- transformer: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p}$; losses — eddy currents (laminate), hysteresis (soft iron), $I^2R$ (thick wire)
- transmission at high voltage

## Alternating current
- $I_{rms} = \\frac{I_0}{\\sqrt{2}}$
- $X_L = 2\\pi fL$; $X_C = \\frac{1}{2\\pi fC}$; $Z = \\sqrt{R^2 + (X_L - X_C)^2}$
- resonance $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$; power factor $= \\frac{R}{Z}$

## Modern physics
- Rutherford's nucleus; Bohr's levels: $hf = E_2 - E_1$
- photoelectric: $hf = W_0 + KE_{max}$
- X-rays: production, properties, uses
- radioactivity: α, β, γ; half-life; decay equations
- fission and fusion; $E = mc^2$
- $\\lambda = \\frac{h}{mv}$; uncertainty principle
- semiconductors: n-type (electrons), p-type (holes); diode; rectification; transistor

## Constants to remember
$g = 10$ m/s²; $c = 3 \\times 10^{8}$ m/s; $h = 6.63 \\times 10^{-34}$ J s; $e = 1.6 \\times 10^{-19}$ C; $k = 9 \\times 10^{9}$ N m² C⁻²; $G = 6.67 \\times 10^{-11}$ N m² kg⁻².

## Practical paper
- connect the **ammeter in series** and the **voltmeter in parallel**; check polarity
- open the key when not taking readings to avoid heating
- plot $V$ against $I$ — slope gives resistance; for $E$ and $r$, plot $\\frac{1}{I}$ against $R$
- metre bridge and potentiometer: obtain balance near the middle of the wire; avoid sliding the jockey along the wire.

## Final advice
write the formula, substitute with units, then calculate; give answers to a sensible number of significant figures; attempt every objective question.`,
          examples: `**Example 1.** Three 6 Ω resistors are connected in series to a 9 V battery. Find the current. *Solution:* $\\frac{9}{18} = 0.5$ A.

**Example 2.** A lamp is rated 60 W, 240 V. Find its resistance. *Solution:* $\\frac{240^2}{60} = 960$ Ω.

**Example 3.** A sample has a half-life of 10 minutes. What fraction remains after 30 minutes? *Solution:* $\\frac{1}{8}$.`,
        },
        questions: [
          ["E", "A voltmeter is connected", "in parallel with the component", "in series with the component", "across the ammeter only", "between the cell and earth", "It measures the potential difference across the component."],
          ["E", "The particle with the greatest ionising power is the", "alpha particle", "beta particle", "gamma ray", "neutron", "It is also the least penetrating."],
          ["E", "A step-down transformer has", "fewer turns in the secondary than in the primary", "more turns in the secondary than in the primary", "equal turns in both coils", "no core", "The secondary voltage is lower."],
          ["M", "A lamp is rated 60 W, 240 V. Its resistance when working normally is", "960 Ω", "4 Ω", "14 400 Ω", "0.25 Ω", "R = V² ÷ P. Answer: 960 Ω."],
          ["M", "Three resistors of 6 Ω each are connected in series across a 9 V battery of negligible internal resistance. The current is", "0.5 A", "1.5 A", "4.5 A", "2 A", "Total resistance is 18 Ω."],
          ["M", "The electrical energy used by a 2 kW heater in 3 hours is", "6 kWh", "1.5 kWh", "0.67 kWh", "5 kWh", "Energy = power × time."],
          ["M", "A transformer steps 240 V down to 12 V. If the primary has 2000 turns, the secondary has", "100 turns", "40 000 turns", "20 turns", "240 turns", "Ns = Np × Vs ÷ Vp."],
          ["H", "A battery of e.m.f. 12 V and internal resistance 1 Ω is connected to resistors of 3 Ω and 6 Ω in parallel. The current drawn from the battery is", "4 A", "1.2 A", "6 A", "1.33 A", "The parallel pair is 2 Ω; total resistance 3 Ω."],
          ["H", "A radioactive isotope has a half-life of 10 minutes. The fraction of the original sample that has decayed after 30 minutes is", "7/8", "1/8", "1/3", "3/4", "One-eighth remains after three half-lives."],
          ["H", "A capacitor of reactance 30 Ω is in series with a resistor of 40 Ω across a 100 V a.c. supply. The current is", "2 A", "1.43 A", "10 A", "2.5 A", "Z = √(40² + 30²) = 50 Ω."],
        ],
      },
    ],
  },
];
