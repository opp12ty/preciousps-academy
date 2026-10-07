import type { TermPlan } from "../types";

/** SS1 Physics — original Precious PS content following the national senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Fundamental and derived quantities, units and dimensions",
        subtopics: ["Physics and its branches", "Fundamental quantities and SI units", "Derived quantities and units", "Dimensions and prefixes"],
        objectives: ["Explain what Physics is and name its branches", "List the fundamental quantities and their SI units", "Derive the units of common derived quantities", "Write the dimensions of physical quantities and use SI prefixes"],
        lesson: {
          title: "The Language of Measurement",
          summary: "Identify fundamental and derived quantities and express them in units and dimensions.",
          minutes: 40,
          notes: `## What is Physics?
**Physics** is the science that studies **matter, energy** and the interactions between them. Its branches include **mechanics, heat, waves, sound, optics, electricity and magnetism, atomic and nuclear physics**, and electronics. Physics underlies engineering, medicine, communication and energy technology.

## Physical quantities
A **physical quantity** is anything that can be **measured**. It is stated as a **number** together with a **unit**: for example 5 kg.

## Fundamental (base) quantities
These are independent of one another; all others are built from them. The **International System of Units (SI)** has seven:

| Quantity | SI unit | Symbol |
|---|---|---|
| **length** | metre | m |
| **mass** | kilogram | kg |
| **time** | second | s |
| **electric current** | ampere | A |
| **temperature** | kelvin | K |
| **amount of substance** | mole | mol |
| **luminous intensity** | candela | cd |

Length, mass and time are the three used in mechanics.

## Derived quantities
These are obtained by combining fundamental quantities.

| Quantity | Formula | Unit |
|---|---|---|
| area | length × breadth | m² |
| volume | length × breadth × height | m³ |
| density | mass ÷ volume | kg m⁻³ |
| speed, velocity | distance ÷ time | m s⁻¹ |
| acceleration | change in velocity ÷ time | m s⁻² |
| force | mass × acceleration | newton (N) = kg m s⁻² |
| pressure | force ÷ area | pascal (Pa) = N m⁻² |
| work, energy | force × distance | joule (J) = N m |
| power | work ÷ time | watt (W) = J s⁻¹ |
| momentum | mass × velocity | kg m s⁻¹ |

## Dimensions
The **dimensions** of a quantity show how it depends on **mass (M)**, **length (L)** and **time (T)**.
- velocity: $LT^{-1}$
- acceleration: $LT^{-2}$
- force: $MLT^{-2}$
- pressure: $ML^{-1}T^{-2}$
- work and energy: $ML^{2}T^{-2}$
- power: $ML^{2}T^{-3}$
- momentum: $MLT^{-1}$
- density: $ML^{-3}$

### Uses of dimensions
- to **check** whether an equation is correct — every term must have the same dimensions
- to **derive** the unit of a quantity
- to find how one quantity depends on others

## Prefixes
| Prefix | Symbol | Factor |
|---|---|---|
| giga | G | $10^{9}$ |
| mega | M | $10^{6}$ |
| kilo | k | $10^{3}$ |
| centi | c | $10^{-2}$ |
| milli | m | $10^{-3}$ |
| micro | µ | $10^{-6}$ |
| nano | n | $10^{-9}$ |

## Converting units
To change km/h to m/s, multiply by $\\frac{1000}{3600}$, that is, divide by 3.6. So 72 km/h = 20 m/s.`,
          examples: `**Example 1.** Find the dimensions of force. *Solution:* force = mass × acceleration = $M \\times LT^{-2} = MLT^{-2}$.

**Example 2.** Convert 90 km/h to m/s. *Solution:* $90 \\div 3.6 = 25$ m/s.

**Example 3.** Express 5 MW in watts. *Solution:* $5 \\times 10^{6}$ W.`,
        },
        questions: [
          ["E", "The SI unit of mass is the", "kilogram", "gram", "newton", "pound", "It is one of the seven base units."],
          ["E", "Which of the following is a fundamental quantity?", "time", "force", "speed", "density", "The others are derived from base quantities."],
          ["E", "The SI unit of electric current is the", "ampere", "volt", "ohm", "coulomb", "It is a base unit."],
          ["M", "The dimensions of force are", "$MLT^{-2}$", "$ML^{2}T^{-2}$", "$MLT^{-1}$", "$ML^{-1}T^{-2}$", "Force is mass times acceleration."],
          ["M", "The prefix 'micro' represents a factor of", "$10^{-6}$", "$10^{-3}$", "$10^{6}$", "$10^{-9}$", "Milli is ten to the minus three."],
          ["M", "The number of base quantities in the SI system is", "seven", "three", "five", "nine", "They include length, mass and time."],
          ["M", "The derived unit of pressure is the", "pascal", "joule", "watt", "newton", "One pascal is one newton per square metre."],
          ["H", "The dimensions of power are", "$ML^{2}T^{-3}$", "$ML^{2}T^{-2}$", "$MLT^{-2}$", "$MLT^{-3}$", "Power is work divided by time."],
          ["H", "A speed of 72 km/h expressed in m/s is", "20 m/s", "7.2 m/s", "200 m/s", "36 m/s", "Divide by 3.6. Answer: 20 m/s."],
          ["H", "Which quantity has the same dimensions as work?", "kinetic energy", "momentum", "power", "pressure", "Work and energy are both measured in joules."],
        ],
      },
      {
        week: 2,
        title: "Measurement and measuring instruments",
        subtopics: ["Measurement of length", "Measurement of mass, weight, time and volume", "Errors and accuracy", "Significant figures"],
        objectives: ["Read the metre rule, vernier calipers and micrometer screw gauge", "Identify instruments for measuring mass, weight, time and volume", "Distinguish types of error and state how to reduce them", "Express results to a suitable number of significant figures"],
        lesson: {
          title: "Measuring Accurately",
          summary: "Use and read common laboratory measuring instruments and treat errors.",
          minutes: 40,
          notes: `## Measurement of length
| Instrument | Used for | Reads to |
|---|---|---|
| **metre rule** | lengths up to 1 m | 0.1 cm (1 mm) |
| **vernier calipers** | internal and external diameters, depth | 0.01 cm (0.1 mm) |
| **micrometer screw gauge** | diameter of a wire, thickness of paper | 0.01 mm |
| measuring tape | long distances | 1 mm or 1 cm |

### Reading vernier calipers
reading = **main-scale reading** + (vernier division that coincides × 0.01 cm).
*Example:* main scale 2.3 cm; the 6th vernier division coincides: 2.3 + 0.06 = **2.36 cm**.

### Reading a micrometer screw gauge
reading = **sleeve reading** + (thimble reading × 0.01 mm).
*Example:* sleeve 5.5 mm; thimble 28: 5.5 + 0.28 = **5.78 mm**.

### Zero error
If the instrument does not read zero when closed, it has a **zero error**. A **positive** zero error is **subtracted** from the reading; a **negative** one is **added**.

## Mass and weight
- **mass** — the quantity of matter in a body; measured with a **beam balance**, chemical balance or electronic balance; unit **kg**; it is the same everywhere
- **weight** — the force of gravity on a body; measured with a **spring balance**; unit **newton**; $W = mg$; it varies from place to place

## Time
**stopwatch** or stop-clock; the simple pendulum; ticker-timer.

## Volume
- liquids: **measuring cylinder**, burette, pipette — read the **bottom of the meniscus** for water and the top for mercury, with the eye level
- regular solids: by calculation
- irregular solids: by **displacement of water** (overflow can)

## Density
$\\text{density} = \\frac{\\text{mass}}{\\text{volume}}$

## Errors
- **systematic errors** — consistently too high or too low: zero error, wrongly calibrated instrument. Reduced by checking and correcting the instrument.
- **random errors** — vary unpredictably: reaction time, fluctuating conditions. Reduced by **repeating** readings and taking the **average**.
- **parallax error** — caused by viewing a scale from the wrong angle; avoided by placing the eye **directly in line** with the mark.

### Accuracy and precision
**Accuracy** is closeness to the true value; **precision** is the closeness of repeated readings to one another, and depends on the smallest division of the instrument.

### Percentage error
$\\text{percentage error} = \\frac{\\text{error}}{\\text{measured value}} \\times 100$

## Significant figures
- non-zero digits are significant
- zeros between non-zero digits are significant: 2.05 has three
- leading zeros are not: 0.0045 has two
- trailing zeros after a decimal point are: 0.00450 has three
A result should not be quoted to more significant figures than the least precise measurement used.`,
          examples: `**Example 1.** A vernier reads 4.1 cm on the main scale and the 3rd vernier mark coincides. *Solution:* 4.1 + 0.03 = **4.13 cm**.

**Example 2.** A length of 5.0 cm is measured to ± 0.1 cm. Find the percentage error. *Solution:* $\\frac{0.1}{5.0} \\times 100 = 2\\%$.

**Example 3.** A stone of mass 60 g displaces 24 cm³ of water. Find its density. *Solution:* $60 \\div 24 = 2.5$ g/cm³.`,
        },
        questions: [
          ["E", "The most suitable instrument for measuring the diameter of a thin wire is the", "micrometer screw gauge", "metre rule", "measuring tape", "beam balance", "It reads to 0.01 mm."],
          ["E", "The mass of an object is measured with a", "beam balance", "spring balance", "stopwatch", "measuring cylinder", "A spring balance measures weight."],
          ["E", "The error caused by viewing a scale from the wrong angle is", "parallax error", "zero error", "random error", "rounding error", "The eye should be directly in line with the mark."],
          ["M", "A vernier caliper shows 2.3 cm on the main scale and the 6th vernier division coincides. The reading is", "2.36 cm", "2.9 cm", "2.306 cm", "8.3 cm", "Add 6 × 0.01 cm to the main-scale reading."],
          ["M", "A micrometer shows 5.5 mm on the sleeve and 28 on the thimble. The reading is", "5.78 mm", "33.5 mm", "5.528 mm", "8.3 mm", "Add 28 × 0.01 mm to the sleeve reading."],
          ["M", "The number of significant figures in 0.00450 is", "three", "two", "five", "six", "Leading zeros are not significant; the trailing zero is."],
          ["M", "The smallest reading obtainable on standard vernier calipers is", "0.01 cm", "0.1 cm", "1 cm", "0.001 cm", "This equals 0.1 mm."],
          ["H", "A length of 4.0 cm is measured with an uncertainty of 0.1 cm. The percentage error is", "2.5%", "0.25%", "4%", "25%", "0.1 ÷ 4.0 × 100."],
          ["H", "A micrometer has a zero error of +0.03 mm. If it reads 4.57 mm, the correct diameter is", "4.54 mm", "4.60 mm", "4.57 mm", "4.27 mm", "A positive zero error is subtracted."],
          ["H", "A metal block of mass 54 g has a volume of 20 cm³. Its density is", "2.7 g/cm³", "0.37 g/cm³", "1080 g/cm³", "34 g/cm³", "Density is mass divided by volume."],
        ],
      },
      {
        week: 3,
        title: "Position, distance, displacement and vectors",
        subtopics: ["Position and frames of reference", "Distance and displacement", "Scalars and vectors", "Addition of vectors"],
        objectives: ["Locate positions using coordinates", "Distinguish between distance and displacement", "Classify quantities as scalars or vectors", "Find the resultant of two vectors in simple cases"],
        lesson: {
          title: "Where and How Far",
          summary: "Describe position and distinguish scalar from vector quantities.",
          minutes: 40,
          notes: `## Position
The **position** of an object is its location relative to a chosen reference point, the **origin**. A set of axes used to describe position is a **frame of reference**. In a plane we use **Cartesian coordinates** $(x, y)$; in space, $(x, y, z)$.

### Distance between two points
For points $(x_1, y_1)$ and $(x_2, y_2)$:
$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

## Distance and displacement
- **distance** — the total length of the path travelled; it has **magnitude only**
- **displacement** — the distance moved **in a specified direction**; the straight line from the starting point to the end point; it has **magnitude and direction**
A runner who completes one lap of a track covers a distance equal to the length of the track but has **zero displacement**.

## Scalars and vectors
- a **scalar** quantity has magnitude only: **distance, speed, mass, time, temperature, energy, work, power, density, volume**
- a **vector** quantity has both magnitude and direction: **displacement, velocity, acceleration, force, weight, momentum, electric field**

### Representing vectors
A vector is drawn as a straight line with an arrow: the **length** represents the magnitude (to a scale) and the **arrow** shows the direction. Directions may be given as **bearings** (measured clockwise from north) or as compass directions.

## Addition of vectors
The single vector that has the same effect as two or more vectors is their **resultant**.

### Vectors in the same straight line
- same direction: **add** — 7 N and 3 N give 10 N
- opposite directions: **subtract** — 7 N and 3 N give 4 N in the direction of the larger
These are the **greatest** and **least** possible resultants of two vectors.

### Vectors at right angles
Use **Pythagoras' theorem**:
$R = \\sqrt{A^2 + B^2}$
and the direction from $\\tan\\theta = \\frac{B}{A}$.
*Example:* 3 km east followed by 4 km north gives $\\sqrt{9 + 16} = 5$ km, at $\\tan^{-1}\\frac{4}{3} \\approx 53°$ north of east.

### Vectors at any angle
- **triangle law**: draw the vectors head to tail; the resultant closes the triangle
- **parallelogram law**: if two vectors are represented by adjacent sides of a parallelogram, the **diagonal** through their common point represents the resultant
- by scale drawing, or by calculation: $R^2 = A^2 + B^2 + 2AB\\cos\\theta$

## Why the distinction matters
Adding scalars is ordinary arithmetic; adding vectors must take **direction** into account. Two forces of 5 N each can give any resultant from 0 N to 10 N.`,
          examples: `**Example 1.** Find the distance between (2, 1) and (5, 5). *Solution:* $\\sqrt{3^2 + 4^2} = 5$ units.

**Example 2.** A boy walks 8 m east and then 3 m west. *Solution:* distance = 11 m; displacement = 5 m east.

**Example 3.** Find the resultant of forces of 6 N and 8 N at right angles. *Solution:* $\\sqrt{36 + 64} = 10$ N.`,
        },
        questions: [
          ["E", "Which of these is a scalar quantity?", "speed", "velocity", "force", "displacement", "It has magnitude only."],
          ["E", "Which of these is a vector quantity?", "velocity", "mass", "time", "temperature", "It has both magnitude and direction."],
          ["E", "Distance travelled in a specified direction is called", "displacement", "speed", "length", "position", "It is a vector."],
          ["M", "The distance between the points (1, 2) and (4, 6) is", "5 units", "7 units", "25 units", "3.5 units", "Use Pythagoras: √(3² + 4²)."],
          ["M", "A girl walks 6 m east and then 2 m west. Her displacement is", "4 m east", "8 m east", "4 m west", "8 m west", "Opposite displacements are subtracted."],
          ["M", "An athlete runs once round a 400 m track and stops at the starting point. His displacement is", "zero", "400 m", "200 m", "800 m", "He ends where he began."],
          ["M", "A set of axes used to specify the position of an object is called a", "frame of reference", "resultant", "bearing", "scalar field", "Positions are measured from its origin."],
          ["H", "A man walks 3 km east and then 4 km north. The magnitude of his displacement is", "5 km", "7 km", "1 km", "12 km", "The two legs are at right angles."],
          ["H", "Two forces of 5 N and 12 N act at right angles. Their resultant is", "13 N", "17 N", "7 N", "60 N", "√(25 + 144) = 13."],
          ["H", "The greatest and least resultants of forces of 7 N and 3 N are respectively", "10 N and 4 N", "21 N and 4 N", "10 N and 3 N", "7 N and 3 N", "Add when in the same direction; subtract when opposite."],
        ],
      },
      {
        week: 4,
        title: "Motion: speed, velocity and acceleration",
        subtopics: ["Types of motion", "Speed and velocity", "Acceleration", "Motion graphs"],
        objectives: ["Identify the types of motion", "Calculate speed and velocity", "Calculate acceleration and retardation", "Interpret distance–time and velocity–time graphs"],
        lesson: {
          title: "Describing Motion",
          summary: "Define and calculate speed, velocity and acceleration and interpret motion graphs.",
          minutes: 40,
          notes: `## Types of motion
- **random motion** — irregular, with no fixed direction: gas molecules, Brownian motion
- **translational (rectilinear) motion** — the whole body moves from one place to another along a line: a car on a straight road
- **rotational (circular) motion** — a body turns about an axis: a wheel, the blades of a fan
- **oscillatory (vibratory) motion** — to-and-fro motion about a fixed point: a pendulum, a mass on a spring
A body may have more than one type at once — a rolling ball both rotates and translates.

## Speed
$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$
Unit: m/s. Speed is a **scalar**.
- **uniform speed**: equal distances in equal times
- **average speed** $= \\frac{\\text{total distance}}{\\text{total time}}$
- **instantaneous speed**: the speed at a particular moment (the speedometer reading)

## Velocity
$\\text{velocity} = \\frac{\\text{displacement}}{\\text{time}}$
Velocity is a **vector** — speed in a stated direction. A body moving in a circle at constant speed has a **changing velocity** because its direction changes.

## Acceleration
$a = \\frac{v - u}{t}$
where $u$ is the initial velocity, $v$ the final velocity and $t$ the time. Unit: m/s².
- **uniform acceleration**: velocity increases by equal amounts in equal times
- **retardation (deceleration)**: velocity decreasing — a negative acceleration

## Motion graphs
### Distance–time graph
- the **slope (gradient)** gives the **speed**
- a straight sloping line: uniform speed
- a horizontal line: the body is **at rest**
- a curve getting steeper: speeding up

### Velocity–time graph
- the **slope** gives the **acceleration**
- the **area under the graph** gives the **distance travelled**
- a horizontal line: **uniform velocity** (zero acceleration)
- a straight line sloping upwards: uniform acceleration
- a straight line sloping downwards: uniform retardation

*Example:* a body accelerates uniformly from rest to 10 m/s in 4 s. The graph is a triangle of base 4 and height 10, so the distance is $\\frac{1}{2} \\times 4 \\times 10 = 20$ m.

## Average speed for a journey in parts
Always use **total distance ÷ total time** — not the average of the speeds. A car that covers 60 km at 30 km/h and another 60 km at 60 km/h takes 2 h + 1 h = 3 h for 120 km: average speed **40 km/h**.

## Relative velocity
The velocity of one body as seen from another. For bodies moving in the **same direction**, subtract; in **opposite directions**, add.`,
          examples: `**Example 1.** A car travels 150 km in 3 h. Find its average speed. *Solution:* $150 \\div 3 = 50$ km/h.

**Example 2.** A body's velocity rises from 5 m/s to 25 m/s in 4 s. Find the acceleration. *Solution:* $\\frac{25 - 5}{4} = 5$ m/s².

**Example 3.** A body moves at a constant 12 m/s for 5 s. Find the distance from the velocity–time graph. *Solution:* area of rectangle = $12 \\times 5 = 60$ m.`,
        },
        questions: [
          ["E", "The motion of a swinging pendulum is", "oscillatory", "random", "rotational", "translational", "It moves to and fro about a fixed point."],
          ["E", "Speed is defined as", "distance divided by time", "time divided by distance", "distance multiplied by time", "displacement multiplied by time", "Its unit is metres per second."],
          ["E", "The slope of a distance–time graph gives the", "speed", "acceleration", "distance", "time", "A steeper line means a higher speed."],
          ["M", "A car covers 120 km in 2 hours. Its average speed is", "60 km/h", "240 km/h", "118 km/h", "30 km/h", "Divide distance by time."],
          ["M", "A body accelerates from rest to 20 m/s in 5 s. Its acceleration is", "4 m/s²", "100 m/s²", "25 m/s²", "0.25 m/s²", "Change in velocity divided by time."],
          ["M", "The area under a velocity–time graph represents the", "distance travelled", "acceleration", "speed", "force", "The slope represents acceleration."],
          ["M", "The motion of the molecules of a gas is", "random", "oscillatory", "rotational only", "uniform", "They move in all directions."],
          ["H", "A car travels 60 km at 30 km/h and a further 60 km at 60 km/h. Its average speed for the whole journey is", "40 km/h", "45 km/h", "90 km/h", "50 km/h", "Total distance 120 km in total time 3 h."],
          ["H", "A body accelerates uniformly from rest to 10 m/s in 4 s. The distance covered is", "20 m", "40 m", "2.5 m", "14 m", "Area of the triangle: ½ × 4 × 10."],
          ["H", "A train slows uniformly from 30 m/s to 10 m/s in 5 s. Its retardation is", "4 m/s²", "8 m/s²", "6 m/s²", "100 m/s²", "(30 − 10) ÷ 5. Answer: 4 m/s²."],
        ],
      },
      {
        week: 5,
        title: "Equations of uniformly accelerated motion",
        subtopics: ["The equations of motion", "Solving problems with the equations", "Motion under gravity", "Bodies projected vertically upwards"],
        objectives: ["State the equations of uniformly accelerated motion", "Apply the equations to solve problems", "Solve problems on free fall", "Solve problems on bodies thrown vertically upwards"],
        lesson: {
          title: "Motion with Constant Acceleration",
          summary: "Apply the equations of motion to horizontal motion and to motion under gravity.",
          minutes: 40,
          notes: `## The equations of motion
For a body moving in a straight line with **uniform acceleration** $a$, starting with velocity $u$, reaching velocity $v$ after time $t$ and covering distance $s$:

1. $v = u + at$
2. $s = \\frac{(u + v)}{2}t$
3. $s = ut + \\frac{1}{2}at^2$
4. $v^2 = u^2 + 2as$

### Choosing an equation
List the three known quantities and the unknown; pick the equation that contains those four.
- "starts from rest": $u = 0$
- "comes to rest": $v = 0$
- for retardation, $a$ is **negative**

## Worked examples
**A car starts from rest and accelerates at 2 m/s² for 10 s.**
$v = 0 + 2 \\times 10 = 20$ m/s; $s = 0 + \\frac{1}{2} \\times 2 \\times 10^2 = 100$ m.

**A car moving at 20 m/s is brought to rest by a retardation of 5 m/s².**
$0 = 20^2 - 2 \\times 5 \\times s$, so $s = 40$ m.

## Motion under gravity
A body falling freely near the earth's surface has a constant downward acceleration, the **acceleration due to gravity**, $g \\approx 9.8$ m/s² (often taken as **10 m/s²**). In the absence of air resistance, **all bodies fall with the same acceleration**, whatever their mass.

Replace $a$ by $g$ and $s$ by $h$:
- $v = u + gt$
- $h = ut + \\frac{1}{2}gt^2$
- $v^2 = u^2 + 2gh$

### A body dropped from rest
$u = 0$: $v = gt$ and $h = \\frac{1}{2}gt^2$.
After 3 s: $v = 30$ m/s; $h = 45$ m.
Time to fall a height $h$: $t = \\sqrt{\\frac{2h}{g}}$. From 80 m: $t = \\sqrt{16} = 4$ s.

## A body thrown vertically upwards
Take $g$ as **negative** (it opposes the motion).
- at the **highest point** the velocity is **zero**
- maximum height: $H = \\frac{u^2}{2g}$
- time to reach the highest point: $t = \\frac{u}{g}$
- total time of flight (back to the starting level): $T = \\frac{2u}{g}$
- it returns with the **same speed** with which it was thrown

*Example:* thrown up at 20 m/s: $H = \\frac{400}{20} = 20$ m; time up = 2 s; total time = 4 s.

## Determining g
By timing a **free fall** over a measured height, or from the period of a **simple pendulum**.`,
          examples: `**Example 1.** A body starts from rest and accelerates at 3 m/s² for 6 s. Find the distance. *Solution:* $s = \\frac{1}{2} \\times 3 \\times 36 = 54$ m.

**Example 2.** A stone is dropped from a height of 20 m (g = 10 m/s²). Find the time of fall. *Solution:* $t = \\sqrt{\\frac{2 \\times 20}{10}} = 2$ s.

**Example 3.** A ball is thrown upwards at 30 m/s (g = 10 m/s²). Find the maximum height. *Solution:* $H = \\frac{900}{20} = 45$ m.`,
        },
        questions: [
          ["E", "The acceleration due to gravity near the earth's surface is approximately", "10 m/s²", "1 m/s²", "100 m/s²", "0.1 m/s²", "More precisely it is 9.8 m/s²."],
          ["E", "Which of these is an equation of uniformly accelerated motion?", "$v = u + at$", "$v = u \\times at$", "$v = \\frac{u}{at}$", "$v = ut + a$", "It gives the final velocity after time t."],
          ["E", "At the highest point of its path, a body thrown vertically upwards has a velocity of", "zero", "10 m/s", "its initial velocity", "twice its initial velocity", "It is momentarily at rest."],
          ["M", "A car starts from rest and accelerates at 2 m/s² for 10 s. Its final velocity is", "20 m/s", "5 m/s", "12 m/s", "200 m/s", "v = 0 + 2 × 10."],
          ["M", "A car starting from rest accelerates at 2 m/s² for 10 s. The distance covered is", "100 m", "20 m", "200 m", "50 m", "s = ½ × 2 × 10²."],
          ["M", "A stone falls freely from rest for 3 s (g = 10 m/s²). Its velocity is then", "30 m/s", "13 m/s", "3.3 m/s", "45 m/s", "v = gt. Answer: 30 m/s."],
          ["M", "A car moving at 20 m/s is brought to rest with a retardation of 5 m/s². The stopping distance is", "40 m", "4 m", "100 m", "80 m", "Use v² = u² − 2as with v = 0."],
          ["H", "A ball is thrown vertically upwards with a velocity of 20 m/s (g = 10 m/s²). The maximum height reached is", "20 m", "40 m", "2 m", "200 m", "H = u² ÷ 2g = 400 ÷ 20."],
          ["H", "A stone is dropped from a height of 80 m (g = 10 m/s²). The time it takes to reach the ground is", "4 s", "8 s", "16 s", "2 s", "t = √(2h/g) = √16."],
          ["H", "A car accelerates uniformly from 10 m/s to 30 m/s over a distance of 100 m. Its acceleration is", "4 m/s²", "2 m/s²", "8 m/s²", "0.2 m/s²", "a = (900 − 100) ÷ 200."],
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
        title: "Friction",
        subtopics: ["Nature and types of friction", "Laws of solid friction and the coefficient of friction", "Advantages, disadvantages and reduction of friction", "Friction in fluids"],
        objectives: ["Explain the nature and types of friction", "State the laws of friction and calculate the coefficient of friction", "State the advantages and disadvantages of friction and ways of reducing it", "Describe viscosity and terminal velocity"],
        lesson: {
          title: "The Force That Opposes Motion",
          summary: "Explain friction, calculate frictional forces and describe friction in fluids.",
          minutes: 40,
          notes: `## What is friction?
**Friction** is the force that **opposes relative motion** (or the tendency to move) between two surfaces in contact. It acts along the surfaces, in the direction **opposite** to the motion. It arises because surfaces, however smooth they look, are rough on a microscopic scale and their high points interlock.

## Types
- **static friction** — acts when a body is at rest and a force tries to move it; it increases with the applied force up to a maximum, the **limiting friction**
- **kinetic (dynamic or sliding) friction** — acts when the body is moving; it is slightly **less** than limiting friction
- **rolling friction** — much smaller than sliding friction, which is why wheels and ball bearings are used

## Laws of solid friction
1. friction **opposes** motion
2. it depends on the **nature** of the surfaces in contact
3. it is **proportional to the normal reaction** between the surfaces
4. it is **independent of the area** of contact
5. kinetic friction is independent of the relative speed (at moderate speeds)

## Coefficient of friction
$F = \\mu R$
where $F$ is the frictional force, $R$ the **normal reaction** and $\\mu$ the **coefficient of friction**. Since it is a ratio of two forces, $\\mu$ has **no unit**.
On a horizontal surface $R = mg$.

### On an inclined plane
A body resting on a plane inclined at angle $\\theta$ is just about to slide when
$\\mu = \\tan\\theta$
This angle is called the **angle of friction** (or angle of repose).

## Advantages of friction
- enables **walking** without slipping
- **brakes** stop vehicles; tyres grip the road
- nails and screws hold; knots stay tied
- belts drive machines
- matches light; writing with pencil or chalk is possible

## Disadvantages
- causes **wear and tear** of moving parts
- wastes energy as **heat**; reduces the **efficiency** of machines
- makes movement harder

## Reducing friction
- **lubrication** with oil or grease
- **ball or roller bearings**
- **smoothing or polishing** surfaces
- **streamlining** the shape of vehicles, boats and aircraft
- using a cushion of air (hovercraft)

## Friction in fluids: viscosity
**Viscosity** is the internal friction of a fluid — its resistance to flow. Honey is more viscous than water. A liquid's viscosity **decreases** as temperature rises; a gas's increases.

### Terminal velocity
A body falling through a fluid experiences three forces: its **weight** $W$ downwards, and the **upthrust** $U$ and **viscous drag** $F$ upwards. As its speed increases, the drag increases, until
$W = U + F$
The resultant force is then zero and the body falls with a constant speed called the **terminal velocity**. Parachutes work by greatly increasing the drag.`,
          examples: `**Example 1.** A block of mass 5 kg rests on a horizontal table. If μ = 0.4 and g = 10 m/s², find the limiting friction. *Solution:* $R = 50$ N; $F = 0.4 \\times 50 = 20$ N.

**Example 2.** A force of 30 N is just able to move a 10 kg box on a level floor (g = 10 m/s²). Find μ. *Solution:* $\\mu = \\frac{30}{100} = 0.3$.

**Example 3.** A block is about to slide when a plane is tilted to 45°. Find μ. *Solution:* $\\mu = \\tan 45° = 1$.`,
        },
        questions: [
          ["E", "Friction is a force that always", "opposes motion", "assists motion", "acts vertically upwards", "increases speed", "It acts opposite to the direction of motion."],
          ["E", "A common way of reducing friction in machines is by", "lubrication", "roughening the surfaces", "increasing the load", "removing the bearings", "Oil or grease separates the surfaces."],
          ["E", "The coefficient of friction has", "no unit", "the unit newton", "the unit kilogram", "the unit joule", "It is a ratio of two forces."],
          ["M", "A block of mass 5 kg rests on a horizontal surface with coefficient of friction 0.4. Taking g = 10 m/s², the limiting frictional force is", "20 N", "2 N", "12.5 N", "200 N", "F = μR = 0.4 × 50."],
          ["M", "A horizontal force of 30 N just moves a box of mass 10 kg on a level floor (g = 10 m/s²). The coefficient of friction is", "0.3", "3", "0.03", "300", "μ = F ÷ R = 30 ÷ 100."],
          ["M", "Limiting friction is the", "maximum static friction just before motion begins", "friction during uniform motion", "friction between rolling bodies", "friction in a liquid", "It is slightly greater than kinetic friction."],
          ["M", "The frictional force between two solid surfaces does not depend on the", "area of contact", "nature of the surfaces", "normal reaction", "roughness of the surfaces", "This is one of the laws of friction."],
          ["H", "A body on a rough plane is just about to slide when the plane is inclined at 30° to the horizontal. The coefficient of static friction is about", "0.58", "0.50", "0.87", "1.73", "μ = tan 30°. Answer: 0.58."],
          ["H", "A block of mass 8 kg is pulled along a level surface by a horizontal force of 50 N. If the coefficient of kinetic friction is 0.25 and g = 10 m/s², the acceleration is", "3.75 m/s²", "6.25 m/s²", "2.5 m/s²", "8.75 m/s²", "Friction is 20 N, so the net force is 30 N."],
          ["H", "A body falling through a liquid reaches its terminal velocity when", "its weight equals the sum of the upthrust and the viscous drag", "the upthrust becomes zero", "the viscous drag becomes zero", "its weight becomes zero", "The resultant force is then zero."],
        ],
      },
      {
        week: 2,
        title: "Work, energy and power",
        subtopics: ["Work", "Forms of energy; kinetic and potential energy", "Conservation of energy", "Power"],
        objectives: ["Define work and calculate work done", "Calculate kinetic and potential energy", "State and apply the principle of conservation of energy", "Define power and calculate it"],
        lesson: {
          title: "Doing Work and Using Energy",
          summary: "Define and calculate work, energy and power and apply the conservation of energy.",
          minutes: 40,
          notes: `## Work
**Work** is done when a force moves its point of application in the direction of the force.
$W = F \\times s$
Unit: the **joule (J)** — 1 J is the work done when a force of 1 N moves through 1 m.
If the force makes an angle $\\theta$ with the direction of motion:
$W = Fs\\cos\\theta$
No work is done if there is no movement, or if the force is perpendicular to the motion (carrying a load horizontally at constant height).
Work done against gravity in lifting a mass $m$ through height $h$: $W = mgh$.

## Energy
**Energy** is the **capacity to do work**. It is measured in joules.
### Forms
mechanical (kinetic and potential), heat, light, sound, electrical, chemical, nuclear.

### Kinetic energy
The energy a body has because of its **motion**:
$KE = \\frac{1}{2}mv^2$

### Potential energy
The energy a body has because of its **position or state**:
- **gravitational**: $PE = mgh$
- **elastic**: in a stretched spring or bow

## Conservation of energy
**Energy can neither be created nor destroyed; it can only be changed from one form to another.** The total energy of an isolated system is constant.

### Examples of conversion
- a falling body: potential → kinetic
- a pendulum: potential ⇄ kinetic
- electric bulb: electrical → light and heat
- battery: chemical → electrical
- dynamo: mechanical → electrical
- loudspeaker: electrical → sound
- hydroelectric station: potential → kinetic → electrical

### A falling body
Loss in potential energy = gain in kinetic energy:
$mgh = \\frac{1}{2}mv^2$, so $v = \\sqrt{2gh}$
A body falling from 20 m (g = 10 m/s²) reaches $v = \\sqrt{400} = 20$ m/s.

## Power
**Power** is the **rate of doing work**:
$P = \\frac{W}{t}$
Unit: the **watt (W)** = 1 J/s. Also $P = F \\times v$ for a body moving at steady speed.
1 kilowatt = 1000 W; 1 horsepower ≈ 746 W.
The **kilowatt-hour (kWh)** is a unit of **energy**: 1 kWh = $3.6 \\times 10^{6}$ J.

## Sources of energy
- **renewable**: solar, wind, hydro, biomass, tidal, geothermal
- **non-renewable**: coal, petroleum, natural gas, nuclear fuel
Nigeria relies heavily on gas and hydro for electricity; solar power is growing.

## Work–energy relation
The work done on a body by the resultant force equals its **change in kinetic energy**.`,
          examples: `**Example 1.** A force of 40 N moves a box 5 m in its direction. Find the work done. *Solution:* $40 \\times 5 = 200$ J.

**Example 2.** Find the kinetic energy of a 4 kg body moving at 5 m/s. *Solution:* $\\frac{1}{2} \\times 4 \\times 25 = 50$ J.

**Example 3.** A pump does 9000 J of work in 30 s. Find its power. *Solution:* $9000 \\div 30 = 300$ W.`,
        },
        questions: [
          ["E", "The SI unit of work is the", "joule", "watt", "newton", "pascal", "One joule is one newton metre."],
          ["E", "The energy a body possesses because of its motion is", "kinetic energy", "potential energy", "chemical energy", "nuclear energy", "It equals ½mv²."],
          ["E", "Power is defined as the", "rate of doing work", "capacity to do work", "product of force and distance", "product of mass and velocity", "Its unit is the watt."],
          ["M", "A force of 50 N moves a body through 4 m in the direction of the force. The work done is", "200 J", "12.5 J", "54 J", "46 J", "W = F × s. Answer: 200 J."],
          ["M", "The kinetic energy of a body of mass 2 kg moving with a velocity of 3 m/s is", "9 J", "6 J", "18 J", "3 J", "½ × 2 × 3². Answer: 9 J."],
          ["M", "The potential energy of a 5 kg mass raised 10 m above the ground (g = 10 m/s²) is", "500 J", "50 J", "5 J", "5000 J", "PE = mgh. Answer: 500 J."],
          ["M", "A machine does 600 J of work in 12 s. Its power is", "50 W", "7200 W", "612 W", "0.02 W", "P = W ÷ t. Answer: 50 W."],
          ["H", "A body falls freely from a height of 20 m (g = 10 m/s²). Its speed just before hitting the ground is", "20 m/s", "200 m/s", "10 m/s", "40 m/s", "v = √(2gh) = √400."],
          ["H", "A crane lifts a load of mass 200 kg through 3 m in 5 s (g = 10 m/s²). The power developed is", "1200 W", "6000 W", "120 W", "3000 W", "Work is 6000 J, done in 5 s."],
          ["H", "A force of 20 N acts at 60° to the horizontal and moves a body 5 m horizontally. The work done is", "50 J", "100 J", "86.6 J", "25 J", "W = Fs cos 60° = 100 × 0.5."],
        ],
      },
      {
        week: 3,
        title: "Heat and temperature",
        subtopics: ["Heat and temperature distinguished", "Thermometers and thermometric properties", "Temperature scales and fixed points", "Calculating temperature from a thermometric property"],
        objectives: ["Distinguish between heat and temperature", "Describe different thermometers and the properties they use", "Convert between temperature scales", "Calculate temperature from readings of a thermometric property"],
        lesson: {
          title: "Measuring How Hot",
          summary: "Explain temperature and its measurement.",
          minutes: 40,
          notes: `## Heat and temperature
- **heat** is a form of **energy** that flows from a hotter body to a colder one because of the temperature difference; unit: **joule**
- **temperature** is the **degree of hotness or coldness** of a body; it is a measure of the **average kinetic energy** of its molecules; SI unit: **kelvin (K)**
Heat flows until the bodies reach the same temperature — **thermal equilibrium**.

## Thermometers
A **thermometer** measures temperature using a **thermometric property** — a physical property that changes uniformly with temperature.

| Thermometer | Thermometric property |
|---|---|
| **liquid-in-glass** (mercury or alcohol) | volume (length of a liquid column) |
| **constant-volume gas** thermometer | pressure of a gas |
| **resistance** thermometer (platinum) | electrical resistance |
| **thermocouple** | e.m.f. between two junctions of different metals |
| **bimetallic** thermometer | differential expansion of two metals |
| **pyrometer** | radiation from a very hot body |

### Mercury and alcohol compared
- **mercury**: opaque and easily seen; does not wet glass; good conductor; expands uniformly; boils at 357 °C — but freezes at −39 °C and is poisonous
- **alcohol**: freezes at −115 °C, so suited to very cold places; expands more — but boils at 78 °C, wets glass and must be coloured
**Water** is unsuitable: it wets glass, has a small range and expands irregularly.

### The clinical thermometer
Measures body temperature. It has a short range (about **35 °C to 43 °C**), a narrow bore for sensitivity, and a **constriction** that prevents the mercury from flowing back before the reading is taken. Normal body temperature is about **37 °C**.

## Fixed points
- **lower fixed point (ice point)**: the temperature of pure **melting ice** at standard pressure — 0 °C
- **upper fixed point (steam point)**: the temperature of **steam** from pure water boiling at standard pressure — 100 °C
The interval between them is the **fundamental interval**.

## Temperature scales
| Scale | Ice point | Steam point |
|---|---|---|
| Celsius | 0 °C | 100 °C |
| Fahrenheit | 32 °F | 212 °F |
| Kelvin | 273 K | 373 K |

- $K = °C + 273$
- $°F = \\frac{9}{5}°C + 32$
- $°C = \\frac{5}{9}(°F - 32)$
**Absolute zero** (0 K or −273 °C) is the lowest possible temperature.

## Temperature from a thermometric property
If $X_0$, $X_{100}$ and $X_\\theta$ are the values of the property at the ice point, the steam point and the unknown temperature:
$\\theta = \\frac{X_\\theta - X_0}{X_{100} - X_0} \\times 100\\ °C$
*Example:* a mercury thread is 2 cm long at the ice point, 22 cm at the steam point and 12 cm in a liquid. $\\theta = \\frac{12 - 2}{22 - 2} \\times 100 = 50\\ °C$.`,
          examples: `**Example 1.** Convert 27 °C to kelvin. *Solution:* $27 + 273 = 300$ K.

**Example 2.** Convert 50 °C to Fahrenheit. *Solution:* $\\frac{9}{5} \\times 50 + 32 = 122\\ °F$.

**Example 3.** The pressure of a gas thermometer is 80 cmHg at the ice point, 110 cmHg at the steam point and 95 cmHg in a bath. Find the bath temperature. *Solution:* $\\frac{95 - 80}{110 - 80} \\times 100 = 50\\ °C$.`,
        },
        questions: [
          ["E", "The SI unit of temperature is the", "kelvin", "joule", "degree Fahrenheit", "watt", "0 °C corresponds to 273 K."],
          ["E", "The instrument used to measure temperature is the", "thermometer", "barometer", "hydrometer", "ammeter", "It uses a thermometric property."],
          ["E", "The lower fixed point on the Celsius scale is the temperature of", "pure melting ice", "boiling water", "the human body", "a freezing mixture of salt and ice", "It is marked 0 °C."],
          ["M", "A temperature of 27 °C on the Kelvin scale is", "300 K", "246 K", "27 K", "327 K", "Add 273. Answer: 300 K."],
          ["M", "The constriction in a clinical thermometer", "prevents the mercury from flowing back before it is read", "makes the bore wider", "increases the range", "cools the mercury", "The reading can be taken after removal from the body."],
          ["M", "A mercury thread is 2 cm long at the ice point, 22 cm at the steam point and 12 cm in a liquid. The temperature of the liquid is", "50 °C", "60 °C", "12 °C", "45 °C", "(12 − 2) ÷ (22 − 2) × 100."],
          ["M", "The thermometric property used in a thermocouple is", "e.m.f.", "volume", "pressure", "length", "It arises between junctions of two different metals."],
          ["H", "A temperature of 68 °F on the Celsius scale is", "20 °C", "36 °C", "154 °C", "100 °C", "(68 − 32) × 5 ÷ 9."],
          ["H", "The temperature at which the Celsius and Fahrenheit scales give the same reading is", "−40°", "0°", "32°", "100°", "Solving C = 9C/5 + 32 gives −40."],
          ["H", "A resistance thermometer has resistance 20 Ω at the ice point, 28 Ω at the steam point and 23 Ω in a liquid. The temperature of the liquid is", "37.5 °C", "23 °C", "82 °C", "62.5 °C", "(23 − 20) ÷ (28 − 20) × 100."],
        ],
      },
      {
        week: 4,
        title: "Thermal expansion",
        subtopics: ["Expansion of solids", "Linear, area and cubic expansivity", "Applications and consequences of expansion", "Expansion of liquids and the anomalous expansion of water"],
        objectives: ["Explain the expansion of solids in terms of molecular motion", "Calculate linear, area and cubic expansion", "State applications and consequences of expansion", "Explain real and apparent expansion of liquids and the anomalous behaviour of water"],
        lesson: {
          title: "Why Things Expand",
          summary: "Explain and calculate the thermal expansion of solids and liquids.",
          minutes: 40,
          notes: `## Why bodies expand
When a body is heated its molecules gain kinetic energy, vibrate more vigorously and move slightly **further apart**; the body **expands**. On cooling it **contracts**. Gases expand most, liquids less, and solids least.

## Linear expansivity
The **linear expansivity** $\\alpha$ of a material is the **increase in length per unit length per degree rise in temperature**:
$\\alpha = \\frac{L_2 - L_1}{L_1(\\theta_2 - \\theta_1)}$
Unit: per kelvin ($K^{-1}$) or per °C.
Hence the expansion is $\\Delta L = \\alpha L_1 \\Delta\\theta$ and the new length is $L_2 = L_1(1 + \\alpha\\Delta\\theta)$.

Typical values: iron $1.2 \\times 10^{-5}$, brass $1.9 \\times 10^{-5}$, aluminium $2.3 \\times 10^{-5}$ $K^{-1}$; invar (a nickel–steel alloy) is very small.

## Area and cubic expansivity
- **area (superficial) expansivity**: $\\beta = 2\\alpha$
- **cubic (volume) expansivity**: $\\gamma = 3\\alpha$
$\\Delta A = \\beta A_1 \\Delta\\theta$ and $\\Delta V = \\gamma V_1 \\Delta\\theta$.

## Applications
- the **bimetallic strip** — two metals of different expansivity riveted together bend when heated (brass on the outside of the curve); used in **thermostats** of electric irons, fire alarms and flashing indicators
- **shrink fitting** — a steel tyre is heated, slipped on a wheel and grips tightly on cooling; hot **rivets**
- loosening a tight metal lid by warming it
- thermometers

## Consequences to guard against
- **gaps** are left between lengths of **railway line**; bridges rest on **rollers** and have **expansion joints**
- telephone and power **cables sag** more in hot weather and are hung loosely
- thick **glass cracks** when hot liquid is poured in, because the inside expands before the outside (Pyrex has a low expansivity)
- concrete roads are laid in sections

## Expansion of liquids
A liquid has no fixed shape, so only **cubic expansivity** applies. Because the container also expands, we distinguish:
- **apparent cubic expansivity** $\\gamma_a$ — measured without allowing for the vessel
- **real (absolute) cubic expansivity** $\\gamma_r$
$\\gamma_r = \\gamma_a + \\gamma_{\\text{vessel}}$

## The anomalous expansion of water
Most liquids expand steadily when heated. **Water**, however, **contracts** when heated from **0 °C to 4 °C** and expands only above 4 °C. Its **density is greatest at 4 °C**.
### Importance
In cold countries, ponds freeze from the **top**. The densest water, at 4 °C, sinks to the bottom, while ice (less dense) floats and insulates the water below — so **fish and plants survive**. The same property makes water pipes burst when the water in them freezes and expands.`,
          examples: `**Example 1.** A rod 2 m long is heated through 50 K. If α = $1.2 \\times 10^{-5}\\ K^{-1}$, find its expansion. *Solution:* $1.2 \\times 10^{-5} \\times 2 \\times 50 = 1.2 \\times 10^{-3}$ m = 1.2 mm.

**Example 2.** A metal has linear expansivity $2 \\times 10^{-5}\\ K^{-1}$. Find its cubic expansivity. *Solution:* $3 \\times 2 \\times 10^{-5} = 6 \\times 10^{-5}\\ K^{-1}$.

**Example 3.** At what temperature is water most dense? *Solution:* **4 °C**.`,
        },
        questions: [
          ["E", "When a solid is heated, its molecules", "vibrate more and move slightly further apart", "stop moving", "become smaller", "move closer together", "This causes expansion."],
          ["E", "Gaps are left between lengths of railway line in order to", "allow for expansion in hot weather", "save steel", "make the ride noisy", "drain rain water", "Without them the rails would buckle."],
          ["E", "Water has its maximum density at", "4 °C", "0 °C", "100 °C", "37 °C", "This is its anomalous behaviour."],
          ["M", "A rod of length 2 m is heated through 50 K. If its linear expansivity is 1.2 × 10⁻⁵ K⁻¹, the increase in length is", "1.2 × 10⁻³ m", "1.2 × 10⁻⁵ m", "6.0 × 10⁻⁴ m", "1.2 m", "ΔL = αLΔθ. Answer: 1.2 × 10⁻³ m."],
          ["M", "If the linear expansivity of a metal is 2 × 10⁻⁵ K⁻¹, its cubic expansivity is", "6 × 10⁻⁵ K⁻¹", "4 × 10⁻⁵ K⁻¹", "2 × 10⁻⁵ K⁻¹", "8 × 10⁻¹⁵ K⁻¹", "γ = 3α. Answer: 6 × 10⁻⁵ K⁻¹."],
          ["M", "A bimetallic strip bends when heated because the two metals", "expand by different amounts", "have the same expansivity", "melt at the same temperature", "conduct electricity", "The metal that expands more is on the outside of the curve."],
          ["M", "The area expansivity of a solid is related to its linear expansivity α by", "β = 2α", "β = 3α", "β = α", "β = α²", "The cubic expansivity is 3α."],
          ["H", "A steel bridge is 100 m long. If the linear expansivity of steel is 1.1 × 10⁻⁵ K⁻¹, its expansion for a temperature rise of 40 K is", "4.4 cm", "0.44 cm", "44 cm", "1.1 cm", "1.1 × 10⁻⁵ × 100 × 40 = 0.044 m."],
          ["H", "The apparent cubic expansivity of a liquid in a glass vessel is 1.6 × 10⁻⁴ K⁻¹ and the cubic expansivity of glass is 0.3 × 10⁻⁴ K⁻¹. The real cubic expansivity of the liquid is", "1.9 × 10⁻⁴ K⁻¹", "1.3 × 10⁻⁴ K⁻¹", "0.48 × 10⁻⁴ K⁻¹", "5.3 × 10⁻⁴ K⁻¹", "Add the expansivity of the vessel."],
          ["H", "Fish survive in ponds whose surfaces are frozen because", "water at 4 °C, being densest, stays at the bottom", "ice is denser than water", "ice conducts heat well", "water expands steadily on cooling", "Ice floats and insulates the water below."],
        ],
      },
      {
        week: 5,
        title: "Transfer of heat",
        subtopics: ["Conduction", "Convection", "Radiation", "Applications: the vacuum flask and others"],
        objectives: ["Explain conduction and compare conductors and insulators", "Explain convection and its natural effects", "Explain radiation and the behaviour of different surfaces", "Explain how a vacuum flask and other devices control heat transfer"],
        lesson: {
          title: "How Heat Travels",
          summary: "Explain the three modes of heat transfer and their applications.",
          minutes: 40,
          notes: `## Conduction
**Conduction** is the transfer of heat through a material **without the movement of the material as a whole**. Energy is passed from molecule to molecule by vibration; in **metals** it is also carried rapidly by **free electrons**, which is why metals are the best conductors.
- **good conductors**: silver, copper, aluminium, iron
- **poor conductors (insulators)**: wood, plastic, glass, cork, wool, air, water
Liquids and gases are generally poor conductors.
### Applications
cooking pots are made of metal with wooden or plastic handles; woollen clothes and blankets trap air; double walls and ceilings insulate houses; a metal feels colder than wood at the same temperature because it conducts heat away from the hand faster.

## Convection
**Convection** is the transfer of heat in a **fluid** (liquid or gas) by the **actual movement of the heated fluid**. A fluid heated from below expands, becomes **less dense** and **rises**; cooler, denser fluid sinks to take its place, setting up a **convection current**.
### Applications and natural effects
- boiling water in a pot; domestic hot-water systems
- **ventilation**: warm stale air rises and leaves through high openings
- **sea breeze** (day): land heats faster; warm air rises over the land and cool air blows in **from the sea**
- **land breeze** (night): the land cools faster; air blows **from the land to the sea**
- winds, ocean currents; refrigerators have the freezer at the top; heaters are placed low and air conditioners high

## Radiation
**Radiation** is the transfer of heat by **electromagnetic (infra-red) waves**. It **needs no material medium** — this is how heat reaches us from the **sun** through empty space.
### Surfaces
- **dull black** surfaces are the **best absorbers** and the **best emitters** of radiation
- **bright, shiny (silvered)** surfaces are the **poorest absorbers and emitters** — they are good **reflectors**
(Leslie's cube demonstrates this.)
### Applications
white or light-coloured clothes are cooler in hot weather; shiny roofs and kettles; cooling fins on engines are blackened; solar panels have black surfaces; the **greenhouse effect** — short-wave radiation enters glass (or the atmosphere), but the long-wave radiation given off by warm objects is trapped.

## The vacuum (thermos) flask
Keeps hot liquids hot and cold liquids cold by reducing all three modes:
| Feature | Reduces |
|---|---|
| **vacuum** between the double glass walls | conduction and convection |
| **silvered** surfaces of the walls | radiation |
| **cork or plastic stopper** | conduction, convection and evaporation |
| cork supports / air space | conduction |

## Comparing the three
| | Conduction | Convection | Radiation |
|---|---|---|---|
| medium | needed (mainly solids) | needed (fluids) | not needed |
| movement of matter | no | yes | no |
| speed | slow | moderate | speed of light |`,
          examples: `**Example 1.** Why are cooking pots given plastic handles? *Answer:* Plastic is a **poor conductor**, so little heat reaches the hand.

**Example 2.** In which direction does a sea breeze blow? *Answer:* **From the sea to the land**, during the day.

**Example 3.** Which part of a vacuum flask reduces radiation? *Answer:* The **silvered walls**.`,
        },
        questions: [
          ["E", "Heat from the sun reaches the earth by", "radiation", "conduction", "convection", "evaporation", "It travels through empty space."],
          ["E", "Heat is transferred through a metal rod mainly by", "conduction", "convection", "radiation", "reflection", "Free electrons help carry the energy."],
          ["E", "The transfer of heat by the movement of a heated fluid is called", "convection", "conduction", "radiation", "insulation", "It occurs in liquids and gases."],
          ["M", "Metals are good conductors of heat mainly because they contain", "free electrons", "large molecules", "trapped air", "no atoms", "The electrons carry energy quickly."],
          ["M", "The best absorber of radiant heat is a surface that is", "dull black", "shiny silver", "polished white", "transparent", "It is also the best emitter."],
          ["M", "In a vacuum flask, heat loss by radiation is reduced by the", "silvered walls", "vacuum", "cork stopper", "outer case", "Shiny surfaces reflect radiation."],
          ["M", "A sea breeze occurs during the day because", "the land heats up faster than the sea", "the sea heats up faster than the land", "the sun heats only the sea", "air is denser over the land", "Warm air rises over the land and cool air moves in."],
          ["H", "The vacuum between the walls of a thermos flask prevents heat transfer by", "conduction and convection", "radiation only", "radiation and conduction", "evaporation only", "Both need a material medium."],
          ["H", "A metal spoon feels colder than a wooden one at the same room temperature because the metal", "conducts heat away from the hand faster", "is at a lower temperature", "contains less heat", "radiates cold", "Both are actually at the same temperature."],
          ["H", "In the greenhouse effect, heat is trapped because glass", "admits short-wave radiation but hinders the escape of long-wave radiation", "is a good conductor", "reflects all radiation", "produces heat", "The same happens with gases in the atmosphere."],
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
        title: "Electric charges",
        subtopics: ["Production of charges", "The law of charges and the electroscope", "Conductors and insulators", "Distribution of charge and lightning"],
        objectives: ["Explain how bodies are charged by friction, contact and induction", "State the law of charges and describe the gold-leaf electroscope", "Distinguish conductors from insulators", "Describe the distribution of charge on a conductor and the lightning conductor"],
        lesson: {
          title: "Static Electricity",
          summary: "Explain the production, detection and distribution of electric charges.",
          minutes: 40,
          notes: `## Charge
Matter is made of atoms containing **protons** (positive), **electrons** (negative) and **neutrons** (neutral). A neutral body has equal numbers of protons and electrons. A body becomes **negatively charged** when it **gains electrons** and **positively charged** when it **loses electrons**. Only electrons move.
The unit of charge is the **coulomb (C)**. The charge on one electron is $1.6 \\times 10^{-19}$ C.

## Charging a body
### 1. By friction (rubbing)
Electrons are transferred from one material to the other.
- **glass rubbed with silk**: glass becomes **positive**, silk negative
- **ebonite (or polythene) rubbed with fur**: ebonite becomes **negative**, fur positive
### 2. By contact (conduction)
A charged body touches a neutral conductor and shares its charge; the conductor acquires the **same** kind of charge.
### 3. By induction
A charged body is brought **near** (not touching) a conductor, which is then earthed momentarily. The conductor acquires the **opposite** charge, and the charging body loses none of its own.

## The law of charges
**Like charges repel; unlike charges attract.**

## The gold-leaf electroscope
A metal cap joined by a rod to a thin gold leaf, inside an insulated case. Uses:
- to **detect** charge — the leaf diverges
- to find the **sign** of a charge — if a charged electroscope's leaf diverges **more**, the body has the **same** charge; increased divergence is the sure test
- to compare amounts of charge
- to test whether a material is a **conductor or insulator**

## Conductors and insulators
- **conductors** allow charge to flow through them because they have free electrons: metals, graphite, the human body, the earth, salt solutions
- **insulators** do not: rubber, plastic, glass, dry wood, ebonite, dry air
Insulators can be charged by friction because the charge stays where it is produced.

## Distribution of charge on a conductor
- charge resides on the **outside surface** of a hollow conductor (Faraday's ice-pail experiment)
- it is **concentrated at sharp points** and edges; on a sphere it is uniform
- at a sharp point the concentration is so great that the surrounding air is ionised and charge leaks away — **point action** (corona discharge)

## Lightning and the lightning conductor
Thunderclouds become charged by friction between air currents, water droplets and ice. A huge discharge between cloud and earth is **lightning**. A **lightning conductor** is a thick copper strip with **sharp spikes** at the top of a building and its lower end **buried in the earth**. By point action it helps discharge the cloud gently, and if lightning strikes it gives the charge a safe path to earth.

## Electrostatics in daily life
photocopiers, spray painting, dust precipitators in chimneys; hazards — sparks when refuelling aircraft and tankers, which are therefore earthed.`,
          examples: `**Example 1.** What charge does a glass rod acquire when rubbed with silk? *Answer:* **Positive** — it loses electrons to the silk.

**Example 2.** How many electrons make up a charge of $3.2 \\times 10^{-19}$ C? *Solution:* $\\frac{3.2 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 2$ electrons.

**Example 3.** Why does a lightning conductor have sharp points? *Answer:* Charge is **concentrated at points**, allowing it to leak away (point action).`,
        },
        questions: [
          ["E", "Like charges", "repel each other", "attract each other", "neutralise each other", "have no effect on each other", "Unlike charges attract."],
          ["E", "The unit of electric charge is the", "coulomb", "ampere", "volt", "ohm", "One ampere is one coulomb per second."],
          ["E", "An instrument used to detect electric charge is the", "gold-leaf electroscope", "voltmeter", "barometer", "thermometer", "Its leaf diverges when charged."],
          ["M", "When a glass rod is rubbed with silk, the glass becomes", "positively charged", "negatively charged", "neutral", "magnetised", "It loses electrons to the silk."],
          ["M", "A body becomes negatively charged when it", "gains electrons", "loses electrons", "gains protons", "loses neutrons", "Only electrons are transferred."],
          ["M", "A conductor charged by induction acquires a charge that is", "opposite to that of the charging body", "the same as that of the charging body", "always positive", "always zero", "The charging body does not touch it."],
          ["M", "Which of these materials is an electrical insulator?", "rubber", "copper", "graphite", "the human body", "It has no free electrons to carry charge."],
          ["H", "On a charged conductor of irregular shape, the charge is most concentrated at the", "sharp points", "flat parts", "centre", "inside surface", "This gives rise to point action."],
          ["H", "The number of electrons that make up a charge of 3.2 × 10⁻⁶ C is (electron charge = 1.6 × 10⁻¹⁹ C)", "2 × 10¹³", "5 × 10¹²", "5.1 × 10⁻²⁵", "2 × 10²⁵", "Divide the charge by the electronic charge."],
          ["H", "The sure test for the sign of the charge on a body, using a charged electroscope, is", "an increase in the divergence of the leaf", "a decrease in the divergence of the leaf", "no change in the leaf", "the collapse of the leaf", "A decrease can also be caused by an uncharged body."],
        ],
      },
      {
        week: 2,
        title: "Fields: gravitational, electric and magnetic",
        subtopics: ["The concept of a field", "The gravitational field", "The electric field", "The magnetic field"],
        objectives: ["Explain the concept of a field", "Describe the gravitational field and calculate weight", "Describe the electric field and calculate field intensity", "Describe the magnetic field and its lines of force"],
        lesson: {
          title: "Force at a Distance",
          summary: "Describe the properties of gravitational, electric and magnetic fields.",
          minutes: 40,
          notes: `## What is a field?
A **field** is a **region of space in which a force is experienced** without contact. The forces are called **field forces**; contrast them with **contact forces** such as friction, tension and pushes.
- a **scalar field** has magnitude only at each point (e.g. temperature, density)
- a **vector field** has magnitude and direction (gravitational, electric, magnetic)

## The gravitational field
The region around a **mass** in which another mass experiences a force of **attraction**. Gravitational force is always attractive.
- **gravitational field strength** $g$ is the **force per unit mass**: $g = \\frac{F}{m}$, in **N/kg** (the same as m/s²)
- near the earth $g \\approx 10$ N/kg; on the moon about 1.6 N/kg
- **weight** $W = mg$ — it changes with $g$, while mass does not
- $g$ is slightly greater at the **poles** than at the **equator** (the earth is flattened and rotates), and decreases with **height**
- field lines point **towards** the centre of the earth

## The electric field
The region around an **electric charge** in which another charge experiences a force.
- **electric field intensity** $E$ is the **force per unit positive charge**: $E = \\frac{F}{q}$, in **N/C** (or V/m)
- the direction of the field is the direction in which a **positive** test charge would move
### Electric lines of force
- start on **positive** charges and end on **negative** charges
- **never cross**
- are closer together where the field is stronger
- for an isolated positive charge they point radially **outwards**; for a negative charge, **inwards**
- between two parallel charged plates they are parallel and evenly spaced — a **uniform field**

## The magnetic field
The region around a **magnet** (or a current) in which a magnetic force is experienced.
- every magnet has a **north pole** and a **south pole**; like poles repel, unlike poles attract
- magnetic **lines of force** run from the **north pole to the south pole** outside the magnet, never cross, and are densest near the poles
- they can be plotted with **iron filings** or a **plotting compass**
- a **neutral point** is a point where the fields of two magnets (or a magnet and the earth) cancel
- the **earth** behaves like a huge bar magnet; a freely suspended magnet sets north–south

## Comparing the fields
| | Gravitational | Electric | Magnetic |
|---|---|---|---|
| source | mass | charge | magnet / moving charge |
| force | attraction only | attraction or repulsion | attraction or repulsion |
| acts on | masses | charges | magnetic materials, moving charges |
| field strength | N/kg | N/C | tesla |

## Properties common to lines of force
they are imaginary lines showing direction; their density shows strength; they never intersect.`,
          examples: `**Example 1.** Find the weight of a 5 kg mass where g = 10 N/kg. *Solution:* $W = 5 \\times 10 = 50$ N.

**Example 2.** A charge of $2 \\times 10^{-6}$ C experiences a force of $6 \\times 10^{-3}$ N. Find the field intensity. *Solution:* $E = \\frac{6 \\times 10^{-3}}{2 \\times 10^{-6}} = 3000$ N/C.

**Example 3.** In which direction do magnetic field lines run outside a magnet? *Answer:* From the **north pole to the south pole**.`,
        },
        questions: [
          ["E", "A region of space in which a force is experienced is called a", "field", "frame", "vector", "current", "The force acts without contact."],
          ["E", "The gravitational force between two masses is always", "attractive", "repulsive", "zero", "magnetic", "Masses never repel one another."],
          ["E", "Outside a magnet, magnetic lines of force run from the", "north pole to the south pole", "south pole to the north pole", "centre to the poles", "poles to the centre", "They never cross."],
          ["M", "The weight of a body of mass 5 kg where g = 10 N/kg is", "50 N", "5 N", "0.5 N", "500 N", "W = mg. Answer: 50 N."],
          ["M", "The unit of electric field intensity is", "newton per coulomb", "newton per kilogram", "coulomb per second", "joule per second", "It is force per unit charge."],
          ["M", "Electric lines of force", "start on positive charges and end on negative charges", "start on negative charges and end on positive charges", "form closed loops round a charge", "cross one another at right angles", "They show the direction a positive charge would move."],
          ["M", "A point where the resultant magnetic field is zero is called a", "neutral point", "pole", "focus", "node", "The fields there cancel."],
          ["H", "A charge of 2 × 10⁻⁶ C experiences a force of 6 × 10⁻³ N in an electric field. The field intensity is", "3000 N/C", "1.2 × 10⁻⁸ N/C", "3 × 10⁻³ N/C", "12 N/C", "E = F ÷ q. Answer: 3000 N/C."],
          ["H", "A body has a mass of 5 kg on the earth. On the moon, where g = 1.6 N/kg, its mass and weight are", "5 kg and 8 N", "0.8 kg and 8 N", "5 kg and 50 N", "8 kg and 5 N", "Mass is unchanged; weight is mg."],
          ["H", "The value of g is slightly greater at the poles than at the equator because", "the earth is flattened at the poles and rotates", "the poles are colder", "there is more air at the poles", "the earth is hollow there", "The polar radius is smaller and there is no rotational effect."],
        ],
      },
      {
        week: 3,
        title: "Current electricity",
        subtopics: ["Electric current, potential difference and e.m.f.", "Resistance and Ohm's law", "Resistors in series and in parallel", "Simple circuits and measuring instruments"],
        objectives: ["Define electric current, potential difference and e.m.f.", "State Ohm's law and calculate resistance", "Calculate the effective resistance of series and parallel combinations", "Draw simple circuits and use the ammeter and voltmeter correctly"],
        lesson: {
          title: "Charges in Motion",
          summary: "Define the basic quantities of current electricity and apply Ohm's law.",
          minutes: 40,
          notes: `## Electric current
An **electric current** is a **flow of charge**. In a metal the charge carriers are **electrons**.
$I = \\frac{Q}{t}$
Unit: the **ampere (A)** — one coulomb per second. Current is measured with an **ammeter**, connected in **series**.
**Conventional current** flows from the positive terminal to the negative terminal; electrons move the opposite way.

## Potential difference and e.m.f.
- the **potential difference (p.d.)** between two points is the **work done per unit charge** in moving charge between them: $V = \\frac{W}{Q}$. Unit: the **volt (V)** — one joule per coulomb. It is measured with a **voltmeter**, connected in **parallel**.
- the **electromotive force (e.m.f.)** of a cell is the total work done per unit charge in driving charge round a complete circuit, including through the cell itself; it is the p.d. across the terminals when **no current** is flowing.

## Resistance
**Resistance** is the opposition to the flow of current.
$R = \\frac{V}{I}$
Unit: the **ohm (Ω)**.
The resistance of a wire depends on its **length** (longer — more), its **cross-sectional area** (thicker — less), its **material** and its **temperature**.

## Ohm's law
**The current through a metallic conductor is directly proportional to the potential difference across it, provided the temperature and other physical conditions remain constant.**
$V = IR$
A graph of $V$ against $I$ for an **ohmic** conductor is a straight line through the origin. Filament lamps, diodes and electrolytes are **non-ohmic**.

## Resistors in series
- the **same current** flows through each
- the total p.d. is the sum of the separate p.d.s
$R = R_1 + R_2 + R_3$
The effective resistance is **greater** than the largest.

## Resistors in parallel
- the **same p.d.** is across each
- the total current is the sum of the branch currents
$\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$
For two resistors: $R = \\frac{R_1 R_2}{R_1 + R_2}$. The effective resistance is **less** than the smallest. For $n$ equal resistors $r$ in parallel, $R = \\frac{r}{n}$.

## Circuits
A **circuit** needs a source (cell or battery), connecting wires, a load and usually a **switch** (key).
- **closed circuit**: complete path — current flows
- **open circuit**: a break — no current
- **short circuit**: a path of very low resistance across the source — a dangerously large current
A **rheostat** (variable resistor) controls the current; a **fuse** protects the circuit.

## Worked circuit
A 12 V battery is connected to resistors of 2 Ω and 4 Ω in series. Total resistance = 6 Ω; current = $\\frac{12}{6} = 2$ A; p.d. across the 4 Ω = $2 \\times 4 = 8$ V.`,
          examples: `**Example 1.** A current of 2 A flows for 30 s. Find the charge. *Solution:* $Q = It = 2 \\times 30 = 60$ C.

**Example 2.** Find the current when 12 V is applied across 6 Ω. *Solution:* $I = \\frac{12}{6} = 2$ A.

**Example 3.** Find the effective resistance of 4 Ω and 12 Ω in parallel. *Solution:* $\\frac{4 \\times 12}{4 + 12} = 3$ Ω.`,
        },
        questions: [
          ["E", "The unit of electrical resistance is the", "ohm", "volt", "ampere", "watt", "Its symbol is Ω."],
          ["E", "An ammeter is connected in a circuit", "in series", "in parallel", "across the cell only", "to the earth", "It measures the current flowing through it."],
          ["E", "The potential difference across a component is measured with a", "voltmeter", "ammeter", "galvanometer only", "rheostat", "It is connected in parallel."],
          ["M", "A current of 2 A flows for 60 s. The quantity of charge that passes is", "120 C", "30 C", "62 C", "0.03 C", "Q = It. Answer: 120 C."],
          ["M", "A potential difference of 12 V is applied across a 4 Ω resistor. The current is", "3 A", "48 A", "8 A", "0.33 A", "I = V ÷ R. Answer: 3 A."],
          ["M", "Resistors of 2 Ω, 3 Ω and 5 Ω are connected in series. Their effective resistance is", "10 Ω", "30 Ω", "1 Ω", "0.97 Ω", "Add the resistances."],
          ["M", "Resistors of 6 Ω and 3 Ω are connected in parallel. Their effective resistance is", "2 Ω", "9 Ω", "18 Ω", "0.5 Ω", "(6 × 3) ÷ (6 + 3)."],
          ["H", "A 12 V battery of negligible internal resistance is connected to resistors of 2 Ω and 4 Ω in series. The p.d. across the 4 Ω resistor is", "8 V", "4 V", "12 V", "6 V", "The current is 2 A."],
          ["H", "Three resistors of 6 Ω each are connected in parallel. Their effective resistance is", "2 Ω", "18 Ω", "6 Ω", "0.5 Ω", "For n equal resistors in parallel, R = r ÷ n."],
          ["H", "If 24 J of work is done in moving 4 C of charge between two points, the potential difference between them is", "6 V", "96 V", "28 V", "0.17 V", "V = W ÷ Q. Answer: 6 V."],
        ],
      },
      {
        week: 4,
        title: "The particulate nature of matter",
        subtopics: ["Atoms and molecules", "Evidence for the particle theory", "States of matter and the kinetic theory", "Crystalline and amorphous solids"],
        objectives: ["Explain the particle model of matter", "Describe Brownian motion and diffusion as evidence", "Explain the states of matter using the kinetic theory", "Distinguish crystalline from amorphous solids"],
        lesson: {
          title: "Matter Is Made of Particles",
          summary: "Explain the particle theory of matter and use it to account for the states of matter.",
          minutes: 40,
          notes: `## Atoms and molecules
- **matter** is anything that has mass and occupies space
- an **atom** is the smallest particle of an **element** that can take part in a chemical reaction
- a **molecule** is the smallest particle of a substance that can exist on its own and still keep the properties of that substance; it may consist of one or more atoms
- atoms are extremely small — about $10^{-10}$ m across

The size of a molecule can be estimated by the **oil-film experiment**: a drop of oil of known volume spreads on water into a layer one molecule thick; thickness = volume ÷ area.

## Evidence that matter is made of moving particles
### Brownian motion
Smoke particles in air, or pollen grains in water, seen under a microscope, move in a continuous, **random, zig-zag** way. They are being struck unevenly by the much smaller, invisible **molecules** of the air or water, which must therefore be in constant random motion.
### Diffusion
The spreading of particles from a region of **high concentration** to one of low concentration, due to their own motion — a smell spreading across a room; a crystal of potassium permanganate colouring water.
- fastest in **gases**, slower in liquids, very slow in solids
- faster at **higher temperature**
- **lighter** molecules diffuse faster than heavier ones

## The kinetic theory of matter
1. matter is made up of tiny particles (atoms or molecules)
2. the particles are in **constant motion**
3. they exert **forces** on one another — attractive when a little apart, repulsive when very close
4. the higher the **temperature**, the greater their average **kinetic energy**

## The states of matter
| | Solid | Liquid | Gas |
|---|---|---|---|
| arrangement | closely packed, regular | close, irregular | far apart |
| motion | vibrate about fixed positions | move about, slide past each other | move rapidly and randomly |
| forces | strong | weaker | negligible |
| shape | fixed | takes shape of container | fills container |
| volume | fixed | fixed | not fixed |
| compressibility | very low | very low | high |

### Changes of state
melting, freezing, evaporation and boiling, condensation, **sublimation** (solid directly to gas, e.g. iodine, camphor). During a change of state the temperature stays constant: the energy supplied goes to overcoming the forces between particles.

## Crystalline and amorphous solids
- **crystalline** solids have particles arranged in a **regular, repeating pattern** (a lattice); they have flat faces, definite shapes and a **sharp melting point**: common salt, sugar, diamond, quartz, metals
- **amorphous** solids have **no regular arrangement**; they soften over a range of temperature: **glass**, plastics, rubber, wax

## Explaining everyday observations
- gases are easily compressed — large spaces between molecules
- a gas exerts **pressure** — molecules bombard the walls of the container
- heating a gas at constant volume raises its pressure — molecules move faster and hit harder and more often
- evaporation causes cooling — the fastest molecules escape`,
          examples: `**Example 1.** What does Brownian motion show? *Answer:* That the molecules of a fluid are in **constant random motion**.

**Example 2.** An oil drop of volume $1 \\times 10^{-9}$ m³ spreads over 0.5 m². Estimate the size of a molecule. *Solution:* $\\frac{1 \\times 10^{-9}}{0.5} = 2 \\times 10^{-9}$ m.

**Example 3.** Give one difference between crystalline and amorphous solids. *Answer:* Crystalline solids have a **regular arrangement and a sharp melting point**; amorphous solids do not.`,
        },
        questions: [
          ["E", "The smallest particle of an element that can take part in a chemical reaction is", "an atom", "a molecule", "a crystal", "a compound", "Molecules may contain several atoms."],
          ["E", "The spreading of a smell across a room is an example of", "diffusion", "conduction", "radiation", "sublimation", "Particles move from high to low concentration."],
          ["E", "The particles of a solid", "vibrate about fixed positions", "move freely in all directions", "do not move at all", "are far apart", "This gives a solid its fixed shape."],
          ["M", "Brownian motion provides evidence that", "molecules are in constant random motion", "matter is continuous", "atoms have nuclei", "solids expand on heating", "Visible particles are struck by invisible molecules."],
          ["M", "The change of a solid directly into a gas is called", "sublimation", "evaporation", "condensation", "melting", "Iodine and camphor show it."],
          ["M", "Which of the following is an amorphous solid?", "glass", "common salt", "diamond", "sugar", "It has no regular arrangement of particles."],
          ["M", "According to the kinetic theory, raising the temperature of a substance increases the", "average kinetic energy of its particles", "number of its particles", "size of its particles", "mass of its particles", "Temperature measures average kinetic energy."],
          ["H", "A gas exerts pressure on the walls of its container because its molecules", "bombard the walls continuously", "are stationary", "attract the walls", "expand when heated", "Each collision exerts a small force."],
          ["H", "An oil drop of volume 1 × 10⁻⁹ m³ spreads into a film of area 0.5 m². The thickness of the film, an estimate of molecular size, is", "2 × 10⁻⁹ m", "5 × 10⁻¹⁰ m", "5 × 10⁸ m", "2 × 10⁹ m", "Thickness = volume ÷ area."],
          ["H", "The temperature of a substance remains constant while it melts because the heat supplied", "is used to overcome the forces between the particles", "is lost to the surroundings", "makes the particles smaller", "increases the kinetic energy of the particles", "It is latent heat."],
        ],
      },
      {
        week: 5,
        title: "Density, pressure and upthrust",
        subtopics: ["Density and relative density", "Pressure in solids and liquids", "Atmospheric pressure and Pascal's principle", "Archimedes' principle and flotation"],
        objectives: ["Calculate density and relative density", "Calculate pressure exerted by solids and liquids", "Describe atmospheric pressure and apply Pascal's principle", "State and apply Archimedes' principle and the law of flotation"],
        lesson: {
          title: "Fluids at Rest",
          summary: "Calculate density and pressure and apply Archimedes' principle and the law of flotation.",
          minutes: 40,
          notes: `## Density
$\\rho = \\frac{m}{V}$
Unit: kg/m³ (or g/cm³). The density of water is **1000 kg/m³** = 1 g/cm³.

### Relative density
$\\text{R.D.} = \\frac{\\text{density of substance}}{\\text{density of water}} = \\frac{\\text{mass of substance}}{\\text{mass of an equal volume of water}}$
It has **no unit**. It is found with a **density bottle** or a **hydrometer**.

## Pressure
$P = \\frac{F}{A}$
Unit: the **pascal (Pa)** = N/m². For a given force, a **smaller area** gives a **greater pressure** — a sharp knife cuts better; wide tyres and foundations spread the load.

### Pressure in a liquid
$P = h\\rho g$
- it increases with **depth** and with the **density** of the liquid
- at a given depth it acts **equally in all directions**
- it does not depend on the shape or width of the vessel
- a liquid "finds its own level"
Dams are built thicker at the base because the pressure is greatest there.

## Atmospheric pressure
The weight of the air above exerts a pressure of about **$1.01 \\times 10^{5}$ Pa**, equal to that of a column of mercury **760 mm** high (or about 10 m of water). It **decreases with height**.
- measured with a **barometer** (mercury or aneroid)
- demonstrated by the collapsing-can experiment
- used in the drinking straw, syringe, siphon and suction pump
- a **manometer** measures gas pressure by the difference in liquid levels in a U-tube

## Pascal's principle
**Pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid.**
In a **hydraulic press** or brake, a small force on a small piston produces a large force on a large piston:
$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$

## Upthrust
A body in a fluid experiences an upward force, the **upthrust**, because the pressure on its lower surface is greater than on its upper surface. It makes the body seem lighter:
**upthrust = weight in air − weight in fluid** (the apparent loss in weight).

## Archimedes' principle
**When a body is wholly or partly immersed in a fluid, it experiences an upthrust equal to the weight of the fluid displaced.**

### Relative density by Archimedes' principle
$\\text{R.D. of a solid} = \\frac{\\text{weight in air}}{\\text{upthrust in water}}$

## The law of flotation
**A floating body displaces its own weight of the fluid in which it floats.**
- a body floats if its density is **less** than that of the fluid; it sinks if greater
- the fraction of a floating body that is submerged equals $\\frac{\\text{density of body}}{\\text{density of fluid}}$
### Applications
ships (a steel ship floats because its hollow shape displaces a large weight of water), the **Plimsoll line**, submarines (ballast tanks), balloons, the **hydrometer** (which sinks deeper in less dense liquids).`,
          examples: `**Example 1.** A force of 600 N acts on an area of 3 m². Find the pressure. *Solution:* $600 \\div 3 = 200$ Pa.

**Example 2.** Find the pressure due to water at a depth of 5 m (ρ = 1000 kg/m³, g = 10 m/s²). *Solution:* $5 \\times 1000 \\times 10 = 5 \\times 10^{4}$ Pa.

**Example 3.** A stone weighs 12 N in air and 9 N in water. Find its relative density. *Solution:* upthrust = 3 N; R.D. = $12 \\div 3 = 4$.`,
        },
        questions: [
          ["E", "Density is defined as", "mass per unit volume", "weight per unit area", "force per unit area", "volume per unit mass", "Its SI unit is kg/m³."],
          ["E", "The SI unit of pressure is the", "pascal", "newton", "joule", "kilogram", "It equals one newton per square metre."],
          ["E", "Atmospheric pressure is measured with a", "barometer", "hydrometer", "thermometer", "voltmeter", "A mercury column about 760 mm high balances it."],
          ["M", "A force of 500 N acts on an area of 2 m². The pressure exerted is", "250 Pa", "1000 Pa", "502 Pa", "0.004 Pa", "P = F ÷ A. Answer: 250 Pa."],
          ["M", "The pressure due to water at a depth of 10 m (density 1000 kg/m³, g = 10 m/s²) is", "1 × 10⁵ Pa", "1 × 10³ Pa", "1 × 10⁴ Pa", "1 × 10⁶ Pa", "P = hρg. Answer: 1 × 10⁵ Pa."],
          ["M", "An object weighs 10 N in air and 8 N when fully immersed in water. The upthrust on it is", "2 N", "18 N", "80 N", "1.25 N", "Upthrust is the apparent loss in weight."],
          ["M", "The principle used in the hydraulic press is", "Pascal's principle", "Archimedes' principle", "Hooke's law", "Boyle's law", "Pressure is transmitted equally through the liquid."],
          ["H", "A body weighs 10 N in air and 8 N in water. Its relative density is", "5", "1.25", "0.8", "2", "Weight in air divided by upthrust in water."],
          ["H", "A block of wood of density 0.6 g/cm³ floats in water. The fraction of its volume that is submerged is", "0.6", "0.4", "1.0", "1.67", "It equals the ratio of the densities."],
          ["H", "In a hydraulic press a force of 50 N is applied to a piston of area 0.01 m². The force on the larger piston of area 0.5 m² is", "2500 N", "1 N", "250 N", "25 N", "The pressure, 5000 Pa, acts on the larger area."],
        ],
      },
    ],
  },
];
