import type { TermPlan } from "../types";

/** SS2 Physics — original Precious PS content following the national senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Vectors: resolution and resultant",
        subtopics: ["Resolution of vectors", "The parallelogram and triangle laws", "Resultant of several vectors", "Equilibrant and relative velocity"],
        objectives: ["Resolve a vector into perpendicular components", "Find the resultant of two vectors at an angle", "Find the resultant of several vectors by resolution", "Explain the equilibrant and solve relative-velocity problems"],
        lesson: {
          title: "Working with Vectors",
          summary: "Resolve vectors into components and find resultants.",
          minutes: 40,
          notes: `## Resolution of a vector
**Resolution** is the process of splitting a single vector into two **components**, usually at right angles, which together have the same effect as the vector.
For a vector $F$ making an angle $\\theta$ with the horizontal:
- horizontal component: $F_x = F\\cos\\theta$
- vertical component: $F_y = F\\sin\\theta$
*Example:* a force of 20 N at 30° to the horizontal has components $20\\cos 30° = 17.3$ N horizontally and $20\\sin 30° = 10$ N vertically.

## Resultant of two vectors
### The parallelogram law
If two vectors acting at a point are represented in magnitude and direction by the adjacent sides of a parallelogram, their resultant is represented by the **diagonal** drawn from that point.
$R^2 = A^2 + B^2 + 2AB\\cos\\theta$
where $\\theta$ is the angle between the vectors.

### Special cases
- $\\theta = 0°$: $R = A + B$ (maximum)
- $\\theta = 90°$: $R = \\sqrt{A^2 + B^2}$
- $\\theta = 180°$: $R = A - B$ (minimum)
- two equal forces $F$ at **120°**: $R = F$
- two equal forces $F$ at **60°**: $R = F\\sqrt{3}$

### The triangle law
If two vectors are represented by two sides of a triangle taken **in order**, the third side taken in the **opposite order** represents the resultant.

## Resultant of several vectors
1. resolve each vector into $x$ and $y$ components
2. add the components: $R_x = \\sum F_x$, $R_y = \\sum F_y$
3. $R = \\sqrt{R_x^2 + R_y^2}$
4. direction: $\\tan\\alpha = \\frac{R_y}{R_x}$

## Equilibrant
The **equilibrant** is the single force that **balances** a system of forces — it is **equal in magnitude and opposite in direction** to the resultant.
If three forces acting at a point are in equilibrium, they can be represented by the sides of a triangle taken in order (**triangle of forces**).

## Relative velocity
The velocity of a body as seen from another body.
- same direction: $v_{AB} = v_A - v_B$
- opposite directions: $v_{AB} = v_A + v_B$
### Crossing a river
A boat heading straight across at 4 m/s in a current of 3 m/s moves relative to the bank with the resultant velocity $\\sqrt{4^2 + 3^2} = 5$ m/s, at $\\tan^{-1}\\frac{3}{4} \\approx 37°$ downstream of its heading.

## Why resolution is useful
It turns vector addition into ordinary arithmetic along two directions; it is essential for projectiles, forces on inclined planes and equilibrium problems. On a plane inclined at $\\theta$, the weight $mg$ resolves into $mg\\sin\\theta$ **down the plane** and $mg\\cos\\theta$ **perpendicular** to it.`,
          examples: `**Example 1.** Resolve a force of 50 N acting at 60° to the horizontal. *Solution:* horizontal = $50\\cos 60° = 25$ N; vertical = $50\\sin 60° = 43.3$ N.

**Example 2.** Find the resultant of two forces of 10 N each inclined at 60°. *Solution:* $R = \\sqrt{100 + 100 + 100} = 17.3$ N.

**Example 3.** A body of weight 40 N rests on a plane inclined at 30°. Find the component of the weight down the plane. *Solution:* $40\\sin 30° = 20$ N.`,
        },
        questions: [
          ["E", "The process of splitting a vector into two perpendicular components is called", "resolution", "resultant", "equilibrium", "reflection", "The components together replace the vector."],
          ["E", "The horizontal component of a force F inclined at angle θ to the horizontal is", "$F\\cos\\theta$", "$F\\sin\\theta$", "$F\\tan\\theta$", "$\\frac{F}{\\cos\\theta}$", "The vertical component is F sin θ."],
          ["E", "The single vector that has the same effect as two or more vectors acting together is the", "resultant", "equilibrant", "component", "moment", "It replaces the separate vectors."],
          ["M", "A force of 20 N acts at 30° to the horizontal. Its vertical component is", "10 N", "17.3 N", "20 N", "34.6 N", "20 sin 30° = 20 × 0.5."],
          ["M", "A force of 20 N acts at 60° to the horizontal. Its horizontal component is", "10 N", "17.3 N", "40 N", "8.7 N", "20 cos 60° = 20 × 0.5."],
          ["M", "The force that keeps a system of forces in equilibrium by balancing their resultant is the", "equilibrant", "resultant", "couple", "moment", "It is equal and opposite to the resultant."],
          ["M", "A boat heads straight across a river at 4 m/s while the current flows at 3 m/s. The speed of the boat relative to the bank is", "5 m/s", "7 m/s", "1 m/s", "12 m/s", "The two velocities are at right angles."],
          ["H", "Two forces of 10 N each are inclined at 60° to each other. Their resultant is", "17.3 N", "10 N", "20 N", "14.1 N", "R² = 100 + 100 + 2(100)cos 60°."],
          ["H", "Two forces of 10 N each are inclined at 120° to each other. Their resultant is", "10 N", "17.3 N", "20 N", "zero", "R² = 100 + 100 + 2(100)cos 120° = 100."],
          ["H", "Forces of 6 N due east and 8 N due north act on a body. The resultant makes an angle with the east of about", "53°", "37°", "45°", "60°", "tan α = 8 ÷ 6. Answer: 53°."],
        ],
      },
      {
        week: 2,
        title: "Projectile motion",
        subtopics: ["Nature of projectile motion", "Time of flight, maximum height and range", "Projection at an angle", "Horizontal projection"],
        objectives: ["Describe the motion of a projectile", "Derive and use expressions for time of flight, maximum height and range", "Solve problems on projection at an angle", "Solve problems on bodies projected horizontally"],
        lesson: {
          title: "Bodies Thrown through the Air",
          summary: "Analyse the motion of projectiles.",
          minutes: 40,
          notes: `## What is a projectile?
A **projectile** is a body launched into the air and then allowed to move freely under **gravity** alone: a kicked football, a thrown javelin, a bullet, a stone from a catapult. Air resistance is neglected.

## Nature of the motion
The motion is treated as two independent motions:
- **horizontal**: **constant velocity** — there is no horizontal force, so no horizontal acceleration
- **vertical**: **uniform acceleration** $g$ downwards
The path (**trajectory**) is a **parabola**.

## Projection at an angle
A body is projected with velocity $u$ at angle $\\theta$ to the horizontal.
- horizontal component: $u_x = u\\cos\\theta$ (constant)
- vertical component: $u_y = u\\sin\\theta$

### Time of flight
The total time in the air:
$T = \\frac{2u\\sin\\theta}{g}$
(The time to reach the highest point is half of this.)

### Maximum height
$H = \\frac{u^2\\sin^2\\theta}{2g}$
At the highest point the **vertical velocity is zero**, but the horizontal velocity is still $u\\cos\\theta$.

### Range
The horizontal distance covered:
$R = \\frac{u^2\\sin 2\\theta}{g}$
- the range is **greatest** when $\\sin 2\\theta = 1$, that is, when $\\theta = 45°$: $R_{max} = \\frac{u^2}{g}$
- **complementary angles** (e.g. 30° and 60°, or 20° and 70°) give the **same range**

### Worked example
$u = 20$ m/s, $\\theta = 30°$, $g = 10$ m/s²:
- $T = \\frac{2 \\times 20 \\times 0.5}{10} = 2$ s
- $H = \\frac{400 \\times 0.25}{20} = 5$ m
- $R = \\frac{400 \\times \\sin 60°}{10} = 34.6$ m

## Horizontal projection
A body projected **horizontally** with velocity $u$ from a height $h$:
- initial vertical velocity is zero, so the time of fall is the same as for a body simply dropped: $t = \\sqrt{\\frac{2h}{g}}$
- horizontal range: $R = ut$
- velocity on landing: horizontal $u$, vertical $gt$; resultant $\\sqrt{u^2 + (gt)^2}$
*Example:* thrown horizontally at 15 m/s from a height of 20 m: $t = 2$ s; $R = 30$ m.

## Applications
sports (shot put, long jump, football); artillery and missiles; water from a hose; dropping relief supplies from an aircraft (the package must be released **before** the plane is over the target).

## Key points to remember
- the only acceleration is $g$, acting vertically downwards throughout
- the time of flight depends only on the **vertical** motion
- a bullet fired horizontally and one dropped from the same height at the same instant reach the ground **together**.`,
          examples: `**Example 1.** A ball is kicked at 30 m/s at 30° to the horizontal (g = 10 m/s²). Find the time of flight. *Solution:* $T = \\frac{2 \\times 30 \\times 0.5}{10} = 3$ s.

**Example 2.** Find the maximum range of a projectile launched at 30 m/s (g = 10 m/s²). *Solution:* $\\frac{900}{10} = 90$ m at 45°.

**Example 3.** A stone is thrown horizontally at 10 m/s from a cliff 45 m high. Find its range. *Solution:* $t = \\sqrt{9} = 3$ s; $R = 10 \\times 3 = 30$ m.`,
        },
        questions: [
          ["E", "The path of a projectile is", "a parabola", "a circle", "a straight line", "an ellipse", "It is called the trajectory."],
          ["E", "For a given speed of projection, the range of a projectile is greatest when the angle of projection is", "45°", "30°", "60°", "90°", "sin 2θ is then equal to 1."],
          ["E", "Neglecting air resistance, the horizontal velocity of a projectile", "remains constant", "increases steadily", "decreases to zero", "is always zero", "No horizontal force acts on it."],
          ["M", "A body is projected at 20 m/s at 30° to the horizontal (g = 10 m/s²). Its time of flight is", "2 s", "4 s", "1 s", "3.5 s", "T = 2u sin θ ÷ g."],
          ["M", "A body is projected at 20 m/s at 30° to the horizontal (g = 10 m/s²). The maximum height reached is", "5 m", "10 m", "20 m", "15 m", "H = u² sin²θ ÷ 2g."],
          ["M", "A projectile is fired at 40 m/s at 45° to the horizontal (g = 10 m/s²). Its range is", "160 m", "80 m", "320 m", "113 m", "R = u² sin 2θ ÷ g = 1600 ÷ 10."],
          ["M", "A stone is thrown horizontally from the top of a tower 20 m high (g = 10 m/s²). The time it takes to reach the ground is", "2 s", "4 s", "1 s", "20 s", "t = √(2h ÷ g), the same as for a dropped body."],
          ["H", "A ball is thrown horizontally at 15 m/s from a height of 20 m (g = 10 m/s²). It strikes the ground at a horizontal distance of", "30 m", "15 m", "60 m", "300 m", "It falls for 2 s while moving at 15 m/s."],
          ["H", "A body is projected at 20 m/s at 30° to the horizontal (g = 10 m/s²). Its range is about", "34.6 m", "20 m", "40 m", "17.3 m", "R = 400 × sin 60° ÷ 10."],
          ["H", "Which pair of angles of projection gives the same range for the same speed?", "30° and 60°", "30° and 45°", "45° and 60°", "20° and 60°", "Complementary angles give equal ranges."],
        ],
      },
      {
        week: 3,
        title: "Newton's laws of motion and momentum",
        subtopics: ["Newton's first law and inertia", "Newton's second law, momentum and impulse", "Newton's third law", "Conservation of linear momentum and collisions"],
        objectives: ["State Newton's first law and explain inertia", "State Newton's second law and solve problems on force, momentum and impulse", "State Newton's third law and give examples", "Apply the conservation of linear momentum to collisions and recoil"],
        lesson: {
          title: "The Laws of Motion",
          summary: "State and apply Newton's laws of motion and the conservation of momentum.",
          minutes: 40,
          notes: `## Newton's first law
**A body continues in its state of rest or of uniform motion in a straight line unless it is acted upon by an external force.**
The tendency of a body to remain as it is is called **inertia**; the first law is the law of inertia. **Mass** is a measure of inertia.
*Examples:* passengers jerk forward when a bus stops suddenly — hence **seat belts**; a coin on a card over a glass drops in when the card is flicked away.

## Momentum
The **linear momentum** of a body is the product of its mass and velocity:
$p = mv$
Unit: kg m/s (or N s). It is a **vector**.

## Newton's second law
**The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force.**
$F = \\frac{m(v - u)}{t} = ma$
One **newton** is the force that gives a mass of 1 kg an acceleration of 1 m/s².

## Impulse
$\\text{impulse} = F \\times t = m(v - u)$
The impulse of a force equals the **change in momentum** it produces. Unit: N s.
For a given change of momentum, a **longer time** means a **smaller force**: a cricketer draws his hands back when catching; cars have crumple zones and air bags; jumpers bend their knees.

## Newton's third law
**To every action there is an equal and opposite reaction.**
The two forces act on **different bodies**.
*Examples:* the recoil of a gun; a rocket or jet is pushed forward as hot gases are expelled backwards; walking — the foot pushes the ground back and the ground pushes the walker forward; a swimmer pushes water backwards.

## Conservation of linear momentum
**In a closed system of colliding bodies, the total momentum before collision equals the total momentum after collision, provided no external force acts.**
$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$

### Types of collision
- **elastic**: both momentum and **kinetic energy** are conserved; the bodies separate
- **inelastic**: momentum is conserved but kinetic energy is not (some becomes heat, sound, deformation); in a **perfectly inelastic** collision the bodies **stick together** and move with a common velocity:
$m_1u_1 + m_2u_2 = (m_1 + m_2)v$

### Recoil
A gun of mass $M$ fires a bullet of mass $m$ at velocity $v$. Since the total momentum was zero before firing, the gun recoils with velocity $V$ where $MV = mv$.

## Weight in a lift
A person of mass $m$ standing on a scale in a lift:
- lift at rest or moving at constant velocity: reading $= mg$
- accelerating **upwards** at $a$: reading $= m(g + a)$ — feels heavier
- accelerating **downwards** at $a$: reading $= m(g - a)$ — feels lighter
- in free fall ($a = g$): reading zero — **weightlessness**`,
          examples: `**Example 1.** A force of 30 N acts on a mass of 6 kg. Find the acceleration. *Solution:* $a = \\frac{30}{6} = 5$ m/s².

**Example 2.** A 3 kg trolley moving at 4 m/s collides with and sticks to a stationary 1 kg trolley. Find their common velocity. *Solution:* $12 = 4v$, so $v = 3$ m/s.

**Example 3.** A force of 50 N acts on a body for 0.2 s. Find the change in momentum. *Solution:* $50 \\times 0.2 = 10$ N s.`,
        },
        questions: [
          ["E", "The tendency of a body to remain at rest or in uniform motion is called", "inertia", "momentum", "impulse", "friction", "Newton's first law describes it."],
          ["E", "Linear momentum is the product of mass and", "velocity", "acceleration", "time", "distance", "Its unit is kg m/s."],
          ["E", "The recoil of a gun when it is fired illustrates Newton's", "third law", "first law", "second law", "law of gravitation", "Action and reaction are equal and opposite."],
          ["M", "A force of 20 N acts on a body of mass 5 kg. The acceleration produced is", "4 m/s²", "100 m/s²", "25 m/s²", "0.25 m/s²", "a = F ÷ m. Answer: 4 m/s²."],
          ["M", "The momentum of a body of mass 2 kg moving at 6 m/s is", "12 kg m/s", "3 kg m/s", "36 kg m/s", "8 kg m/s", "p = mv. Answer: 12 kg m/s."],
          ["M", "A force of 10 N acts on a body for 3 s. The impulse is", "30 N s", "3.3 N s", "13 N s", "0.3 N s", "Impulse = force × time."],
          ["M", "In a perfectly inelastic collision the colliding bodies", "stick together after impact", "exchange velocities", "gain kinetic energy", "come to rest always", "Momentum is conserved but kinetic energy is not."],
          ["H", "A body of mass 2 kg moving at 6 m/s collides with a stationary body of mass 4 kg and they move off together. Their common velocity is", "2 m/s", "3 m/s", "6 m/s", "1 m/s", "12 = (2 + 4)v. Answer: 2 m/s."],
          ["H", "A gun of mass 4 kg fires a bullet of mass 0.02 kg with a velocity of 400 m/s. The recoil velocity of the gun is", "2 m/s", "8 m/s", "20 m/s", "0.5 m/s", "4 × V = 0.02 × 400."],
          ["H", "A man of mass 60 kg stands in a lift accelerating upwards at 2 m/s² (g = 10 m/s²). The reaction of the floor on him is", "720 N", "600 N", "480 N", "120 N", "R = m(g + a) = 60 × 12."],
        ],
      },
      {
        week: 4,
        title: "Equilibrium of forces",
        subtopics: ["Moment of a force and the principle of moments", "Conditions for equilibrium", "Couples", "Centre of gravity and stability"],
        objectives: ["Define the moment of a force and apply the principle of moments", "State the conditions for the equilibrium of a rigid body", "Explain a couple and calculate its moment", "Explain centre of gravity and the types of equilibrium"],
        lesson: {
          title: "Balance and Stability",
          summary: "Apply the principle of moments and the conditions for equilibrium.",
          minutes: 40,
          notes: `## Moment of a force
The **moment** of a force about a point is its **turning effect**:
$\\text{moment} = \\text{force} \\times \\text{perpendicular distance from the pivot}$
Unit: **N m**. Moments are **clockwise** or **anticlockwise**.
A long spanner turns a tight nut more easily; a door handle is placed far from the hinge.

## The principle of moments
**When a body is in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about the same point.**
*Example:* a weight of 40 N placed 3 m from the pivot of a see-saw is balanced by a weight $W$ placed 2 m on the other side: $W \\times 2 = 40 \\times 3$, so $W = 60$ N.

## Conditions for equilibrium
A rigid body acted on by parallel coplanar forces is in equilibrium when:
1. the **sum of the forces in one direction equals the sum in the opposite direction** — the resultant force is zero (upward forces = downward forces)
2. the **sum of the clockwise moments about any point equals the sum of the anticlockwise moments** about that point — the resultant moment is zero

### Three non-parallel forces
If three forces keep a body in equilibrium, they act through one point and can be represented by a **triangle of forces**. **Lami's theorem**: each force is proportional to the sine of the angle between the other two.

## Couples
A **couple** consists of two **equal, parallel and opposite forces** whose lines of action do not coincide. It produces **rotation only** — no translation.
$\\text{moment of a couple (torque)} = \\text{one force} \\times \\text{perpendicular distance between the forces}$
*Examples:* turning a steering wheel, a tap, a screwdriver.

## Centre of gravity
The **centre of gravity** of a body is the point through which its **whole weight appears to act**. For a uniform body it is at the geometric centre: the mid-point of a uniform rod, the intersection of the diagonals of a rectangle, the intersection of the medians of a triangle. For an irregular lamina it is found with a **plumb line**, by suspending it from two or more points.

### Finding the mass of a rule
A uniform metre rule is balanced on a knife-edge at the 40 cm mark when a 50 g mass hangs at the 10 cm mark. The rule's weight acts at the 50 cm mark, 10 cm from the pivot:
$50 \\times 30 = m \\times 10$, so $m = 150$ g.

## Types of equilibrium
- **stable**: when slightly displaced, the body returns to its original position; its centre of gravity is **raised** by the displacement (a cone on its base)
- **unstable**: when slightly displaced, it moves further away; its centre of gravity is **lowered** (a cone on its tip)
- **neutral**: it stays in its new position; the centre of gravity stays at the same height (a cone on its side, a ball on a level floor)

## Stability
A body is more stable if it has
- a **low centre of gravity**
- a **wide base**
It topples when the vertical line through its centre of gravity falls **outside** its base. Hence racing cars are low and wide, and buses carry luggage below rather than on the roof.`,
          examples: `**Example 1.** A force of 30 N acts at 0.4 m from a pivot. Find its moment. *Solution:* $30 \\times 0.4 = 12$ N m.

**Example 2.** A 20 N weight hangs 0.6 m from a pivot. Where must a 30 N weight be placed on the other side to balance it? *Solution:* $30d = 20 \\times 0.6$, so $d = 0.4$ m.

**Example 3.** Two forces of 15 N form a couple with arm 0.2 m. Find the torque. *Solution:* $15 \\times 0.2 = 3$ N m.`,
        },
        questions: [
          ["E", "The turning effect of a force about a point is called its", "moment", "momentum", "impulse", "inertia", "It equals force times perpendicular distance."],
          ["E", "The unit of the moment of a force is the", "newton metre", "newton per metre", "kilogram metre", "joule per second", "Force is multiplied by distance."],
          ["E", "The point through which the whole weight of a body appears to act is its", "centre of gravity", "pivot", "fulcrum", "centre of curvature", "For a uniform rod it is the mid-point."],
          ["M", "A force of 20 N acts at a perpendicular distance of 0.5 m from a pivot. Its moment is", "10 N m", "40 N m", "20.5 N m", "0.025 N m", "Moment = force × distance."],
          ["M", "A weight of 40 N placed 3 m from the pivot of a see-saw is balanced by a weight placed 2 m on the other side. The balancing weight is", "60 N", "26.7 N", "120 N", "80 N", "W × 2 = 40 × 3."],
          ["M", "Two equal, parallel and opposite forces whose lines of action do not coincide form a", "couple", "resultant", "moment arm", "lever", "A couple produces rotation only."],
          ["M", "A cone resting on its base is in", "stable equilibrium", "unstable equilibrium", "neutral equilibrium", "no equilibrium", "It returns to its position when slightly tilted."],
          ["H", "A uniform metre rule balances on a knife-edge at the 40 cm mark when a mass of 50 g is hung at the 10 cm mark. The mass of the rule is", "150 g", "50 g", "100 g", "200 g", "50 × 30 = m × 10."],
          ["H", "Two forces of 10 N each form a couple with a perpendicular distance of 0.4 m between them. The moment of the couple is", "4 N m", "8 N m", "20 N m", "2 N m", "One force × the distance between the forces."],
          ["H", "A vehicle is made more stable by", "lowering its centre of gravity and widening its base", "raising its centre of gravity", "narrowing its wheel base", "loading the roof heavily", "The vertical through the centre of gravity must stay within the base."],
        ],
      },
      {
        week: 5,
        title: "Circular motion and simple harmonic motion",
        subtopics: ["Uniform circular motion", "Centripetal acceleration and force", "Simple harmonic motion", "The simple pendulum and the loaded spring"],
        objectives: ["Describe uniform circular motion and relate linear and angular speed", "Calculate centripetal acceleration and force", "Define simple harmonic motion and its terms", "Solve problems on the simple pendulum and the loaded spring"],
        lesson: {
          title: "Motion in Circles and Oscillations",
          summary: "Analyse uniform circular motion and simple harmonic motion.",
          minutes: 40,
          notes: `## Uniform circular motion
A body moving in a circle at **constant speed** is continuously **changing direction**, so its velocity is changing — it is **accelerating**.

### Angular quantities
- **angular displacement** $\\theta$ in radians ($2\\pi$ rad = 360°)
- **angular velocity** $\\omega = \\frac{\\theta}{t}$, in rad/s
- **period** $T$: time for one revolution; **frequency** $f = \\frac{1}{T}$
- $\\omega = 2\\pi f = \\frac{2\\pi}{T}$
- linear speed: $v = \\omega r$

## Centripetal acceleration and force
The acceleration is directed **towards the centre** of the circle:
$a = \\frac{v^2}{r} = \\omega^2 r$
The force that produces it is the **centripetal force**:
$F = \\frac{mv^2}{r} = m\\omega^2 r$
It is always at right angles to the velocity, so it does **no work** and does not change the speed.

### What provides the centripetal force?
- a stone whirled on a string: the **tension**
- a car rounding a bend: **friction** between tyres and road (roads are **banked** to help)
- a planet or satellite: **gravitational** attraction
- an electron round a nucleus: **electrostatic** attraction
If the force is removed, the body moves off along the **tangent**.

## Simple harmonic motion (SHM)
**SHM is the motion of a body whose acceleration is always directed towards a fixed point and is directly proportional to its displacement from that point.**
$a = -\\omega^2 x$
*Examples:* a simple pendulum (small swings), a mass on a spring, a vibrating tuning fork, a loaded test-tube bobbing in water.

### Terms
- **amplitude** $A$: the maximum displacement from the equilibrium position
- **period** $T$: the time for one complete oscillation
- **frequency** $f$: the number of oscillations per second (hertz)
- at the **equilibrium position**: speed is greatest, acceleration is zero
- at the **extreme positions**: speed is zero, acceleration is greatest
- maximum speed $v_{max} = \\omega A$

### Energy
Energy changes continually between **kinetic** (maximum at the centre) and **potential** (maximum at the ends); the total is constant if there is no damping.

## The simple pendulum
$T = 2\\pi\\sqrt{\\frac{l}{g}}$
The period depends on the **length** and on **g** — **not** on the mass of the bob or (for small angles) the amplitude. Quadrupling the length doubles the period. It is used to determine $g$: a graph of $T^2$ against $l$ is a straight line of slope $\\frac{4\\pi^2}{g}$.

## The loaded spring
$T = 2\\pi\\sqrt{\\frac{m}{k}}$
where $k$ is the force constant of the spring.

## Damping, forced vibration and resonance
- **damped** oscillations die away because of friction
- a body made to vibrate by a periodic force undergoes **forced vibration**
- **resonance** occurs when the forcing frequency equals the body's **natural frequency** — the amplitude becomes very large (a swing pushed in time; soldiers break step on a bridge).`,
          examples: `**Example 1.** A pendulum makes 20 oscillations in 40 s. Find its period and frequency. *Solution:* $T = 2$ s; $f = 0.5$ Hz.

**Example 2.** A 2 kg mass moves at 4 m/s in a circle of radius 2 m. Find the centripetal force. *Solution:* $\\frac{2 \\times 16}{2} = 16$ N.

**Example 3.** Find the period of a pendulum of length 0.4 m where g = 10 m/s². *Solution:* $T = 2\\pi\\sqrt{0.04} = 2\\pi \\times 0.2 \\approx 1.26$ s.`,
        },
        questions: [
          ["E", "The force that keeps a body moving in a circular path is the", "centripetal force", "frictional force only", "upthrust", "impulse", "It acts towards the centre of the circle."],
          ["E", "The time taken for one complete oscillation is the", "period", "frequency", "amplitude", "phase", "Frequency is its reciprocal."],
          ["E", "The maximum displacement of a vibrating body from its rest position is the", "amplitude", "period", "wavelength", "frequency", "It is measured from the equilibrium position."],
          ["M", "A pendulum makes 20 complete oscillations in 40 s. Its frequency is", "0.5 Hz", "2 Hz", "800 Hz", "20 Hz", "The period is 2 s, and f = 1 ÷ T."],
          ["M", "A body of mass 2 kg moves at 4 m/s in a circle of radius 2 m. The centripetal force is", "16 N", "4 N", "32 N", "8 N", "F = mv² ÷ r. Answer: 16 N."],
          ["M", "A body moves at 10 m/s in a circle of radius 5 m. Its centripetal acceleration is", "20 m/s²", "2 m/s²", "50 m/s²", "0.5 m/s²", "a = v² ÷ r. Answer: 20 m/s²."],
          ["M", "The period of a simple pendulum does not depend on the", "mass of the bob", "length of the string", "acceleration due to gravity", "place where it is used", "Only length and g affect it."],
          ["H", "If the length of a simple pendulum is increased to four times its value, the period becomes", "twice as long", "four times as long", "half as long", "sixteen times as long", "T is proportional to the square root of the length."],
          ["H", "A wheel makes 120 revolutions per minute. Its angular velocity is", "4π rad/s", "2π rad/s", "120π rad/s", "240π rad/s", "It makes 2 revolutions per second, and ω = 2πf."],
          ["H", "In simple harmonic motion, the acceleration of the body is greatest when it is at", "the extreme positions", "the equilibrium position", "half the amplitude", "rest for ever", "Acceleration is proportional to displacement."],
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
        title: "Machines",
        subtopics: ["Mechanical advantage, velocity ratio and efficiency", "Levers", "Pulleys and the wheel and axle", "The inclined plane, screw and gears"],
        objectives: ["Define mechanical advantage, velocity ratio and efficiency", "Classify levers and solve problems on them", "Solve problems on pulleys and the wheel and axle", "Solve problems on the inclined plane, the screw and gears"],
        lesson: {
          title: "Making Work Easier",
          summary: "Calculate the mechanical advantage, velocity ratio and efficiency of simple machines.",
          minutes: 40,
          notes: `## What is a machine?
A **machine** is a device by which a force (**effort**) applied at one point overcomes another force (**load**) at a different point. It makes work **easier or more convenient** — it does not create energy.

## Terms
- **mechanical advantage**: $MA = \\frac{\\text{load}}{\\text{effort}}$ — depends on friction
- **velocity ratio**: $VR = \\frac{\\text{distance moved by effort}}{\\text{distance moved by load}}$ — depends only on the geometry of the machine
- **efficiency**: $\\frac{\\text{work output}}{\\text{work input}} \\times 100\\% = \\frac{MA}{VR} \\times 100\\%$
No real machine is 100 per cent efficient: some work is done against **friction** and in lifting the moving parts.

## Levers
A lever is a rigid bar that turns about a **pivot (fulcrum)**.
| Class | Arrangement | Examples |
|---|---|---|
| **first** | pivot between load and effort | see-saw, crowbar, scissors, pliers, claw hammer |
| **second** | load between pivot and effort | wheelbarrow, nutcracker, bottle opener |
| **third** | effort between pivot and load | forceps, tongs, fishing rod, the human forearm |
$VR = \\frac{\\text{effort arm}}{\\text{load arm}}$
Third-class levers have $MA < 1$ but give a large movement of the load.

## Pulleys
- **single fixed pulley**: $VR = 1$; it only changes the direction of the effort
- **single movable pulley**: $VR = 2$
- **block and tackle**: $VR$ = the **number of strings supporting the lower (movable) block**, usually equal to the number of pulleys

## Wheel and axle
$VR = \\frac{\\text{radius of wheel}}{\\text{radius of axle}}$
Examples: the windlass, steering wheel, screwdriver, door knob.

## The inclined plane
A load is pushed up a slope of length $l$ to gain a height $h$:
$VR = \\frac{l}{h} = \\frac{1}{\\sin\\theta}$
Examples: ramps, winding hill roads, staircases.

## The screw
A screw is an inclined plane wrapped round a cylinder. The **pitch** $p$ is the distance between successive threads. If the effort is applied at the end of an arm of length $r$:
$VR = \\frac{2\\pi r}{p}$
Examples: the screw jack, the vice, bolts and nuts.

## Gears
$VR = \\frac{\\text{number of teeth on the driven wheel}}{\\text{number of teeth on the driving wheel}}$

## The hydraulic press
$VR = \\frac{\\text{area of load piston}}{\\text{area of effort piston}}$

## Worked example
A block and tackle with 4 pulleys has an efficiency of 75 per cent. Then $VR = 4$ and $MA = 0.75 \\times 4 = 3$; to raise a load of 600 N the effort is $\\frac{600}{3} = 200$ N.

## Improving efficiency
lubricate moving parts; use ball bearings; make moving parts light.`,
          examples: `**Example 1.** A machine lifts a load of 300 N with an effort of 100 N. Find the MA. *Solution:* $300 \\div 100 = 3$.

**Example 2.** A machine has VR 4 and MA 3. Find its efficiency. *Solution:* $\\frac{3}{4} \\times 100 = 75\\%$.

**Example 3.** An inclined plane is 8 m long and rises 2 m. Find its VR. *Solution:* $8 \\div 2 = 4$.`,
        },
        questions: [
          ["E", "The ratio of load to effort in a machine is its", "mechanical advantage", "velocity ratio", "efficiency", "power", "It is affected by friction."],
          ["E", "A wheelbarrow is an example of a lever of the", "second class", "first class", "third class", "fourth class", "The load lies between the pivot and the effort."],
          ["E", "The efficiency of a real machine is always less than 100% because of", "friction", "gravity alone", "the velocity ratio", "the load", "Some work is wasted as heat."],
          ["M", "A machine raises a load of 200 N with an effort of 50 N. Its mechanical advantage is", "4", "0.25", "150", "250", "MA = load ÷ effort."],
          ["M", "A machine has a velocity ratio of 5 and a mechanical advantage of 4. Its efficiency is", "80%", "125%", "20%", "9%", "Efficiency = MA ÷ VR × 100."],
          ["M", "An inclined plane is 10 m long and 2 m high. Its velocity ratio is", "5", "0.2", "20", "8", "VR = length ÷ height."],
          ["M", "A wheel and axle has a wheel of radius 20 cm and an axle of radius 4 cm. Its velocity ratio is", "5", "80", "16", "0.2", "VR = radius of wheel ÷ radius of axle."],
          ["H", "A block and tackle with a velocity ratio of 4 is 75% efficient. The effort needed to raise a load of 600 N is", "200 N", "150 N", "450 N", "800 N", "MA = 0.75 × 4 = 3, so effort = 600 ÷ 3."],
          ["H", "The human forearm, with the biceps providing the effort, is a lever of the", "third class", "first class", "second class", "none of the classes", "The effort lies between the pivot and the load."],
          ["H", "A screw jack has a pitch of 5 mm and is turned by a handle 0.35 m long. Taking π = 22/7, its velocity ratio is", "440", "70", "220", "1750", "VR = 2πr ÷ p = 2 × 22/7 × 350 ÷ 5."],
        ],
      },
      {
        week: 2,
        title: "Heat capacity and latent heat",
        subtopics: ["Heat capacity and specific heat capacity", "The method of mixtures", "Latent heat and change of state", "Evaporation, boiling and the effect of pressure"],
        objectives: ["Define heat capacity and specific heat capacity and use Q = mcΔθ", "Solve problems by the method of mixtures", "Define specific latent heat and use Q = mL", "Distinguish evaporation from boiling and state the effect of pressure and impurities"],
        lesson: {
          title: "Measuring Heat",
          summary: "Calculate quantities of heat involved in temperature change and change of state.",
          minutes: 40,
          notes: `## Heat capacity
The **heat capacity** $C$ of a body is the quantity of heat needed to raise its temperature by **one kelvin**. Unit: J/K.

## Specific heat capacity
The **specific heat capacity** $c$ of a substance is the quantity of heat needed to raise the temperature of **unit mass (1 kg)** by **one kelvin**. Unit: J/(kg K).
$Q = mc\\Delta\\theta$
and $C = mc$.
Water has a very high specific heat capacity — about **4200 J/(kg K)** — so it heats and cools slowly. This makes it a good coolant in car radiators and moderates the climate near the sea.

## The method of mixtures
When hot and cold bodies are mixed and no heat is lost to the surroundings:
**heat lost by the hot body = heat gained by the cold body**
*Example:* 0.2 kg of water at 80 °C is mixed with 0.3 kg of water at 30 °C. Let the final temperature be $\\theta$:
$0.2(80 - \\theta) = 0.3(\\theta - 30)$, giving $\\theta = 50$ °C.
A **calorimeter**, lagged and stirred, is used; its own heat capacity must be included in accurate work.

### Electrical method
A heater of power $P$ running for time $t$ supplies $Pt = mc\\Delta\\theta$.

## Latent heat
During a **change of state** heat is absorbed or given out **without change of temperature**. This is **latent ("hidden") heat**; it is used to overcome the forces between molecules.
The **specific latent heat** $L$ is the heat needed to change the state of **unit mass** without change of temperature. Unit: J/kg.
$Q = mL$
- **specific latent heat of fusion** (solid ⇄ liquid): for ice about $3.36 \\times 10^{5}$ J/kg
- **specific latent heat of vaporisation** (liquid ⇄ gas): for water about $2.26 \\times 10^{6}$ J/kg
Steam at 100 °C scalds worse than water at 100 °C because it gives out its latent heat on condensing.

## Heating curve
When ice below 0 °C is heated steadily, the temperature–time graph shows sloping parts (temperature rising) and **flat parts** at the melting point and the boiling point, where the state is changing.

## Evaporation and boiling
| Evaporation | Boiling |
|---|---|
| occurs at **all temperatures** | occurs at a **fixed temperature** (the boiling point) |
| takes place at the **surface** only | takes place **throughout** the liquid |
| slow, quiet | rapid, with bubbles |
| causes **cooling** | temperature remains constant |
Evaporation is faster with higher temperature, larger surface area, wind and lower humidity. Cooling by evaporation is used in sweating, the porous clay pot and the **refrigerator**.

## Effect of pressure and impurities
- **increased pressure raises the boiling point** (the **pressure cooker**); reduced pressure lowers it (water boils below 100 °C on a mountain)
- **increased pressure lowers the melting point of ice** (**regelation** — a wire passes through a block of ice)
- **dissolved impurities raise the boiling point** and **lower the freezing point** (salt is put on icy roads)

## Vapour pressure and humidity
A liquid boils when its **saturated vapour pressure** equals the external pressure. **Relative humidity** compares the moisture in the air with the maximum it could hold; it is measured with a **hygrometer**.`,
          examples: `**Example 1.** Find the heat needed to raise the temperature of 2 kg of water by 5 K (c = 4200 J/(kg K)). *Solution:* $2 \\times 4200 \\times 5 = 42\\,000$ J.

**Example 2.** Find the heat needed to melt 0.5 kg of ice at 0 °C (L = $3.36 \\times 10^{5}$ J/kg). *Solution:* $0.5 \\times 3.36 \\times 10^{5} = 1.68 \\times 10^{5}$ J.

**Example 3.** Equal masses of water at 20 °C and 60 °C are mixed. Find the final temperature. *Solution:* $\\frac{20 + 60}{2} = 40$ °C.`,
        },
        questions: [
          ["E", "The heat required to raise the temperature of unit mass of a substance by one kelvin is its", "specific heat capacity", "heat capacity", "specific latent heat", "thermal conductivity", "Its unit is J/(kg K)."],
          ["E", "Heat absorbed during a change of state without a change in temperature is called", "latent heat", "specific heat", "radiant heat", "heat capacity", "It overcomes the forces between molecules."],
          ["E", "Evaporation of a liquid takes place", "at all temperatures", "only at the boiling point", "only below 0 °C", "only at 100 °C", "It occurs at the surface of the liquid."],
          ["M", "The heat required to raise the temperature of 2 kg of water by 10 K (c = 4200 J/(kg K)) is", "84 000 J", "8400 J", "840 J", "21 000 J", "Q = mcΔθ = 2 × 4200 × 10."],
          ["M", "The heat capacity of 0.5 kg of copper of specific heat capacity 400 J/(kg K) is", "200 J/K", "800 J/K", "400.5 J/K", "0.00125 J/K", "Heat capacity = mass × specific heat capacity."],
          ["M", "The heat needed to melt 0.2 kg of ice at 0 °C (specific latent heat of fusion 3.36 × 10⁵ J/kg) is", "6.72 × 10⁴ J", "1.68 × 10⁶ J", "3.36 × 10⁵ J", "6.72 × 10⁵ J", "Q = mL = 0.2 × 3.36 × 10⁵."],
          ["M", "A pressure cooker cooks food faster because the increased pressure", "raises the boiling point of water", "lowers the boiling point of water", "reduces the mass of the food", "stops evaporation completely", "The water is hotter than 100 °C."],
          ["H", "0.2 kg of water at 80 °C is mixed with 0.3 kg of water at 30 °C. Neglecting heat losses, the final temperature is", "50 °C", "55 °C", "45 °C", "60 °C", "0.2(80 − θ) = 0.3(θ − 30)."],
          ["H", "A 100 W heater is used for 420 s to heat 0.5 kg of water (c = 4200 J/(kg K)). Neglecting losses, the temperature rise is", "20 K", "10 K", "42 K", "84 K", "42 000 J = 0.5 × 4200 × Δθ."],
          ["H", "Steam at 100 °C causes a more severe burn than water at 100 °C because steam", "gives out latent heat when it condenses", "is at a higher temperature", "has a higher specific heat capacity", "is denser than water", "Extra energy is released on condensing."],
        ],
      },
      {
        week: 3,
        title: "The gas laws and the kinetic theory of gases",
        subtopics: ["Boyle's law", "Charles's law and the absolute scale", "The pressure law and the general gas equation", "The kinetic theory of gases"],
        objectives: ["State Boyle's law and apply it", "State Charles's law and explain absolute zero", "State the pressure law and use the general gas equation", "Explain the gas laws using the kinetic theory"],
        lesson: {
          title: "How Gases Behave",
          summary: "State and apply the gas laws and explain them by the kinetic theory.",
          minutes: 40,
          notes: `## The three quantities
The state of a fixed mass of gas is described by its **pressure** $P$, **volume** $V$ and **temperature** $T$. In all gas-law calculations the temperature must be in **kelvin**: $T = °C + 273$.

## Boyle's law
**The volume of a fixed mass of gas is inversely proportional to its pressure, provided the temperature remains constant.**
$PV = \\text{constant}$, so $P_1V_1 = P_2V_2$
A graph of $P$ against $V$ is a curve; $P$ against $\\frac{1}{V}$ is a straight line through the origin.
*Example:* 200 cm³ at 100 kPa is compressed to 250 kPa: $V_2 = \\frac{100 \\times 200}{250} = 80$ cm³.

## Charles's law
**The volume of a fixed mass of gas is directly proportional to its absolute temperature, provided the pressure remains constant.**
$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$
*Example:* 300 cm³ at 27 °C (300 K) heated to 127 °C (400 K): $V_2 = 300 \\times \\frac{400}{300} = 400$ cm³.

### Absolute zero
A graph of volume against Celsius temperature is a straight line which, produced backwards, meets the axis at **−273 °C**. This is **absolute zero (0 K)** — the temperature at which the volume (and pressure) of an ideal gas would be zero and molecular motion would be least.

## The pressure law
**The pressure of a fixed mass of gas is directly proportional to its absolute temperature, provided the volume remains constant.**
$\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$
This is why a car tyre's pressure rises on a long journey and why aerosol cans must not be heated.

## The general gas equation
Combining the three laws:
$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$
For $n$ moles of an ideal gas: $PV = nRT$.
**Standard temperature and pressure (s.t.p.)**: 273 K and 760 mmHg ($1.01 \\times 10^{5}$ Pa).

## Expansivities of a gas
The volume and pressure expansivities of all gases are the same: $\\frac{1}{273}$ per kelvin.

## The kinetic theory of gases
### Assumptions
1. a gas consists of a very large number of tiny molecules in **rapid random motion**
2. the molecules' own volume is negligible compared with the volume of the container
3. there are **no forces** between molecules except during collisions
4. collisions are **perfectly elastic**
5. the time of a collision is negligible

### Explaining the laws
- **pressure**: caused by molecules **bombarding** the walls of the container
- **Boyle's law**: halving the volume doubles the number of collisions per second on each unit area, so the pressure doubles
- **pressure law**: at higher temperature molecules move faster, hitting the walls **harder and more often**
- **Charles's law**: to keep the pressure constant as the molecules speed up, the volume must increase
- **temperature**: the average kinetic energy of the molecules is proportional to the absolute temperature

## Real gases
Real gases depart from ideal behaviour at **high pressure** and **low temperature**, when the molecules are close together and intermolecular forces matter — which is how gases are liquefied.`,
          examples: `**Example 1.** A gas occupies 400 cm³ at 100 kPa. Find its volume at 200 kPa, temperature constant. *Solution:* $\\frac{100 \\times 400}{200} = 200$ cm³.

**Example 2.** A gas at 27 °C is heated at constant pressure until its volume doubles. Find the new temperature. *Solution:* $T_2 = 2 \\times 300 = 600$ K = 327 °C.

**Example 3.** A gas at 300 K and 100 kPa is heated at constant volume to 360 K. Find the pressure. *Solution:* $100 \\times \\frac{360}{300} = 120$ kPa.`,
        },
        questions: [
          ["E", "Boyle's law relates the pressure of a gas to its", "volume at constant temperature", "temperature at constant volume", "mass at constant volume", "density at constant pressure", "PV is constant."],
          ["E", "In gas-law calculations, temperature must be expressed in", "kelvin", "degrees Celsius", "degrees Fahrenheit", "joules", "Add 273 to the Celsius temperature."],
          ["E", "Absolute zero on the Celsius scale is", "−273 °C", "0 °C", "−100 °C", "273 °C", "It is 0 K. Answer: −273 °C."],
          ["M", "A gas occupies 200 cm³ at a pressure of 100 kPa. At constant temperature, its volume at 250 kPa is", "80 cm³", "500 cm³", "125 cm³", "50 cm³", "P₁V₁ = P₂V₂. Answer: 80 cm³."],
          ["M", "A gas occupies 300 cm³ at 27 °C. At constant pressure, its volume at 127 °C is", "400 cm³", "1411 cm³", "225 cm³", "64 cm³", "Use 300 K and 400 K."],
          ["M", "The pressure of a gas is caused by", "molecules bombarding the walls of the container", "the weight of the container", "attraction between molecules", "the molecules being at rest", "Each collision exerts a small force."],
          ["M", "A gas at 300 K has a pressure of 100 kPa. At constant volume, its pressure at 450 K is", "150 kPa", "67 kPa", "250 kPa", "135 kPa", "Pressure is proportional to absolute temperature."],
          ["H", "A gas occupies 500 cm³ at 27 °C and 750 mmHg. Its volume at s.t.p. is about", "449 cm³", "557 cm³", "542 cm³", "461 cm³", "V = 500 × 750 × 273 ÷ (300 × 760)."],
          ["H", "According to the kinetic theory, the average kinetic energy of the molecules of a gas is proportional to its", "absolute temperature", "pressure only", "volume only", "mass only", "Hotter gas molecules move faster."],
          ["H", "Real gases deviate most from ideal-gas behaviour at", "high pressure and low temperature", "low pressure and high temperature", "low pressure and low density", "s.t.p. only", "The molecules are then close together and attract one another."],
        ],
      },
      {
        week: 4,
        title: "Waves",
        subtopics: ["Nature and types of waves", "Wave terms and the wave equation", "Properties of waves", "The progressive wave equation and stationary waves"],
        objectives: ["Classify waves", "Define wave terms and use v = fλ", "Describe reflection, refraction, diffraction, interference and polarisation", "Interpret the progressive wave equation and describe stationary waves"],
        lesson: {
          title: "Energy on the Move",
          summary: "Describe wave motion, its terms and properties.",
          minutes: 40,
          notes: `## What is a wave?
A **wave** is a disturbance that travels through a medium (or space), **transferring energy** from one place to another **without transferring matter**.

## Types of waves
### By the need for a medium
- **mechanical waves** need a material medium: water waves, sound, waves on a string
- **electromagnetic waves** need no medium and travel at $3 \\times 10^{8}$ m/s in a vacuum: light, radio, X-rays

### By the direction of vibration
- **transverse** waves: the particles vibrate **at right angles** to the direction of travel — water waves, waves on a string, light and all electromagnetic waves. They have **crests** and **troughs**.
- **longitudinal** waves: the particles vibrate **parallel** to the direction of travel — **sound**, waves in a compressed spring. They have **compressions** and **rarefactions**.

### Progressive and stationary
A **progressive** wave travels outward carrying energy; a **stationary (standing)** wave does not travel.

## Wave terms
- **amplitude** $A$: maximum displacement from the rest position
- **wavelength** $\\lambda$: distance between two successive crests (or any two successive points in phase)
- **frequency** $f$: number of complete waves passing a point per second (hertz)
- **period** $T$: time for one complete wave; $T = \\frac{1}{f}$
- **wave speed** $v$: distance travelled by the wave per second
- **wavefront**: a line joining points in the same phase
- **phase**: points moving in step are in phase

## The wave equation
$v = f\\lambda$
*Example:* a wave of frequency 50 Hz and wavelength 2 m travels at 100 m/s.

## Properties of waves
1. **reflection**: bouncing back from a barrier; angle of incidence = angle of reflection
2. **refraction**: change of direction when the wave passes into a medium where its **speed changes**; the frequency stays the same, the wavelength changes
3. **diffraction**: spreading of waves round an obstacle or through a gap; most marked when the gap is about the same size as the wavelength
4. **interference**: the combination of two waves — **constructive** where crest meets crest (larger amplitude), **destructive** where crest meets trough (cancellation). It needs **coherent** sources.
5. **polarisation**: restricting the vibrations to one plane — possible only for **transverse** waves, so it distinguishes them from longitudinal waves
These can be shown in a **ripple tank**.

## The progressive wave equation
$y = A\\sin(\\omega t - kx)$
where $\\omega = 2\\pi f$ and $k = \\frac{2\\pi}{\\lambda}$. Equivalently $y = A\\sin\\frac{2\\pi}{\\lambda}(vt - x)$.
*Example:* for $y = 0.05\\sin(200\\pi t - 4\\pi x)$: $A = 0.05$ m; $f = \\frac{200\\pi}{2\\pi} = 100$ Hz; $\\lambda = \\frac{2\\pi}{4\\pi} = 0.5$ m; $v = 100 \\times 0.5 = 50$ m/s.

## Stationary waves
Formed when two waves of the same frequency and amplitude travel in **opposite directions** and superpose (e.g. a wave and its reflection).
- **nodes**: points of **zero** displacement
- **antinodes**: points of **maximum** displacement
- distance between successive nodes (or antinodes) $= \\frac{\\lambda}{2}$; node to the next antinode $= \\frac{\\lambda}{4}$
Stationary waves are the basis of stringed and wind instruments.`,
          examples: `**Example 1.** A wave has frequency 20 Hz and wavelength 3 m. Find its speed. *Solution:* $20 \\times 3 = 60$ m/s.

**Example 2.** A radio wave of frequency $1.5 \\times 10^{6}$ Hz travels at $3 \\times 10^{8}$ m/s. Find its wavelength. *Solution:* $\\frac{3 \\times 10^{8}}{1.5 \\times 10^{6}} = 200$ m.

**Example 3.** The distance between successive nodes of a stationary wave is 0.4 m. Find the wavelength. *Solution:* $2 \\times 0.4 = 0.8$ m.`,
        },
        questions: [
          ["E", "A wave transfers", "energy without transferring matter", "matter without energy", "both matter and energy", "neither matter nor energy", "The particles of the medium only vibrate."],
          ["E", "Sound is an example of a", "longitudinal wave", "transverse wave", "electromagnetic wave", "stationary wave only", "The particles vibrate along the direction of travel."],
          ["E", "The distance between two successive crests of a wave is its", "wavelength", "amplitude", "frequency", "period", "It is measured in metres."],
          ["M", "A wave has a frequency of 50 Hz and a wavelength of 2 m. Its speed is", "100 m/s", "25 m/s", "52 m/s", "0.04 m/s", "v = fλ. Answer: 100 m/s."],
          ["M", "A sound wave travels at 340 m/s and has a frequency of 170 Hz. Its wavelength is", "2 m", "0.5 m", "510 m", "57 800 m", "λ = v ÷ f. Answer: 2 m."],
          ["M", "A wave has a period of 0.02 s. Its frequency is", "50 Hz", "0.02 Hz", "20 Hz", "500 Hz", "f = 1 ÷ T. Answer: 50 Hz."],
          ["M", "The property that distinguishes transverse waves from longitudinal waves is", "polarisation", "reflection", "refraction", "diffraction", "Only transverse waves can be polarised."],
          ["H", "A progressive wave is represented by y = 0.05 sin(200πt − 4πx), with x in metres and t in seconds. Its wavelength is", "0.5 m", "2 m", "4 m", "0.05 m", "k = 2π ÷ λ = 4π."],
          ["H", "When a wave passes from deep to shallow water, the quantity that remains unchanged is its", "frequency", "wavelength", "speed", "direction in every case", "Speed and wavelength both decrease."],
          ["H", "In a stationary wave, the distance between a node and the next antinode is", "one-quarter of a wavelength", "half a wavelength", "one wavelength", "two wavelengths", "Successive nodes are half a wavelength apart."],
        ],
      },
      {
        week: 5,
        title: "Reflection of light",
        subtopics: ["Light rays and the laws of reflection", "Images in plane mirrors", "Curved mirrors and ray diagrams", "The mirror formula and magnification"],
        objectives: ["State the laws of reflection", "Describe images formed by plane mirrors and inclined mirrors", "Draw ray diagrams for curved mirrors", "Use the mirror formula and calculate magnification"],
        lesson: {
          title: "Mirrors and Images",
          summary: "Apply the laws of reflection to plane and curved mirrors.",
          minutes: 40,
          notes: `## Light
Light travels in **straight lines** (rectilinear propagation) — shown by shadows, eclipses and the pinhole camera. A **ray** is the path of light; a **beam** is a collection of rays (parallel, convergent or divergent). **Luminous** objects give out their own light; **non-luminous** objects are seen by reflected light.

## The laws of reflection
1. the **incident ray, the reflected ray and the normal** at the point of incidence all lie in the **same plane**
2. the **angle of incidence equals the angle of reflection**
**Regular** reflection occurs at smooth surfaces; **diffuse** reflection at rough surfaces.

## Images in a plane mirror
The image is
- **virtual** (cannot be formed on a screen)
- **upright**
- the **same size** as the object
- **as far behind** the mirror as the object is in front
- **laterally inverted** (left and right interchanged)

### Other results
- if a mirror is rotated through an angle $\\theta$, the reflected ray turns through $2\\theta$
- two mirrors inclined at angle $\\theta$ form $n = \\frac{360}{\\theta} - 1$ images: at 90°, three images; at 60°, five
- uses: the periscope, the kaleidoscope, dressing mirrors

## Curved (spherical) mirrors
- **concave (converging)** mirror: reflecting surface curves inward
- **convex (diverging)** mirror: reflecting surface bulges outward
### Terms
**pole** P; **centre of curvature** C; **radius of curvature** $r$; **principal axis**; **principal focus** F; **focal length** $f$.
$f = \\frac{r}{2}$

### Rays used in ray diagrams
1. a ray parallel to the principal axis is reflected **through F** (or appears to come from F for a convex mirror)
2. a ray through F is reflected **parallel** to the axis
3. a ray through C is reflected **back along its own path**

### Images in a concave mirror
| Object position | Image |
|---|---|
| beyond C | between C and F; real, inverted, diminished |
| at C | at C; real, inverted, same size |
| between C and F | beyond C; real, inverted, magnified |
| at F | at infinity |
| between F and P | behind the mirror; **virtual, upright, magnified** |

### Convex mirror
The image is always **virtual, upright and diminished**, giving a **wide field of view**.

## The mirror formula
$\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$
Using the **real-is-positive** convention: distances to real objects and images are positive; to virtual images, negative. $f$ is positive for a concave mirror and negative for a convex one.

## Magnification
$m = \\frac{\\text{image height}}{\\text{object height}} = \\frac{v}{u}$

*Example:* an object 30 cm from a concave mirror of focal length 10 cm: $\\frac{1}{v} = \\frac{1}{10} - \\frac{1}{30} = \\frac{2}{30}$, so $v = 15$ cm (real); $m = 0.5$.

## Uses
- **concave**: shaving and make-up mirrors, dentists' mirrors, reflectors in torches and car headlamps, solar cookers, reflecting telescopes
- **convex**: driving (rear-view) mirrors, security mirrors in shops.`,
          examples: `**Example 1.** A concave mirror has radius of curvature 30 cm. Find its focal length. *Solution:* $f = 15$ cm.

**Example 2.** An object is 15 cm from a concave mirror of focal length 10 cm. Find the image distance. *Solution:* $\\frac{1}{v} = \\frac{1}{10} - \\frac{1}{15} = \\frac{1}{30}$; $v = 30$ cm.

**Example 3.** How many images are formed by two mirrors inclined at 45°? *Solution:* $\\frac{360}{45} - 1 = 7$.`,
        },
        questions: [
          ["E", "The angle of incidence is equal to the angle of", "reflection", "refraction", "deviation", "elevation", "This is the second law of reflection."],
          ["E", "The image formed by a plane mirror is", "virtual and upright", "real and inverted", "real and upright", "virtual and inverted", "It is also laterally inverted."],
          ["E", "The mirror used as a driving mirror in vehicles is the", "convex mirror", "concave mirror", "plane mirror", "parabolic mirror", "It gives a wide field of view."],
          ["M", "A concave mirror has a radius of curvature of 40 cm. Its focal length is", "20 cm", "80 cm", "40 cm", "10 cm", "f = r ÷ 2. Answer: 20 cm."],
          ["M", "The number of images formed by two plane mirrors inclined at 60° is", "five", "six", "three", "seven", "n = 360 ÷ 60 − 1."],
          ["M", "An object is placed 30 cm in front of a concave mirror of focal length 10 cm. The image distance is", "15 cm", "7.5 cm", "20 cm", "40 cm", "1/v = 1/10 − 1/30."],
          ["M", "If a plane mirror is rotated through 15°, the reflected ray turns through", "30°", "15°", "7.5°", "45°", "The reflected ray turns through twice the angle."],
          ["H", "An object is placed 15 cm from a concave mirror of focal length 10 cm. The magnification of the image is", "2", "0.5", "1.5", "3", "v = 30 cm, and m = v ÷ u."],
          ["H", "An object is placed 5 cm in front of a concave mirror of focal length 10 cm. The image is", "virtual, upright and magnified", "real, inverted and magnified", "real, inverted and diminished", "virtual, upright and diminished", "The object lies between the focus and the pole."],
          ["H", "A person stands 2 m in front of a plane mirror and then walks 0.5 m towards it. The distance between the person and the image is now", "3 m", "1.5 m", "2.5 m", "4 m", "The person is 1.5 m from the mirror, and so is the image."],
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
        title: "Refraction of light and lenses",
        subtopics: ["Laws of refraction and refractive index", "Real and apparent depth; total internal reflection", "Lenses and ray diagrams", "The lens formula and power of a lens"],
        objectives: ["State the laws of refraction and calculate refractive index", "Solve problems on apparent depth and critical angle", "Draw ray diagrams for lenses", "Use the lens formula and calculate the power of a lens"],
        lesson: {
          title: "Bending Light",
          summary: "Apply the laws of refraction to plane surfaces and lenses.",
          minutes: 40,
          notes: `## Refraction
**Refraction** is the **bending of light** when it passes from one transparent medium to another, caused by a **change of speed**.
- passing into a **denser** medium (air to glass), light slows and bends **towards the normal**
- passing into a **less dense** medium, it bends **away from the normal**

## Laws of refraction
1. the incident ray, the refracted ray and the normal all lie in the same plane
2. **Snell's law**: $\\frac{\\sin i}{\\sin r}$ is constant for a given pair of media

## Refractive index
$n = \\frac{\\sin i}{\\sin r} = \\frac{\\text{speed of light in air}}{\\text{speed of light in the medium}} = \\frac{\\text{real depth}}{\\text{apparent depth}}$
Typical values: water $\\frac{4}{3}$ (1.33); glass 1.5; diamond 2.4.
For light going from glass to air, the index is the reciprocal of the air-to-glass value: $n_{ga} = \\frac{1}{n_{ag}}$.

### Effects of refraction
a pool looks shallower; a stick partly in water looks bent; the sun is visible just after it has set; stars twinkle.

## Total internal reflection
When light travels from a **denser to a less dense** medium, the angle of refraction is greater than the angle of incidence. The **critical angle** $c$ is the angle of incidence for which the angle of refraction is **90°**:
$\\sin c = \\frac{1}{n}$
If the angle of incidence **exceeds** the critical angle, all the light is reflected back — **total internal reflection**.
### Conditions
1. light must travel from a denser to a less dense medium
2. the angle of incidence must be greater than the critical angle
### Applications
**optical fibres** (telecommunications, endoscopes); **totally reflecting prisms** in periscopes and binoculars; the sparkle of **diamonds**; **mirages**.

## Lenses
- **convex (converging)** lens: thicker in the middle; brings parallel rays to a real **principal focus**
- **concave (diverging)** lens: thinner in the middle; parallel rays appear to diverge from a virtual focus
Terms: **optical centre**, **principal axis**, **principal focus**, **focal length**.

### Rays used in ray diagrams
1. a ray parallel to the axis passes through (or appears to come from) F after refraction
2. a ray through the **optical centre** goes straight on
3. a ray through F emerges parallel to the axis

### Images in a convex lens
| Object position | Image |
|---|---|
| beyond 2F | between F and 2F; real, inverted, diminished (camera) |
| at 2F | at 2F; real, inverted, same size |
| between F and 2F | beyond 2F; real, inverted, magnified (projector) |
| at F | at infinity |
| between F and the lens | same side; **virtual, upright, magnified** (magnifying glass) |
A **concave** lens always gives a virtual, upright, diminished image.

## The lens formula
$\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v}$ and $m = \\frac{v}{u}$
(real is positive; $f$ is positive for a convex lens, negative for a concave lens).
*Example:* object 15 cm from a convex lens of focal length 10 cm: $\\frac{1}{v} = \\frac{1}{10} - \\frac{1}{15} = \\frac{1}{30}$; $v = 30$ cm; $m = 2$.

## Power of a lens
$P = \\frac{1}{f \\text{ (in metres)}}$
Unit: the **dioptre (D)**. A lens of focal length 20 cm has power $\\frac{1}{0.2} = 5$ D.`,
          examples: `**Example 1.** A coin lies at the bottom of a tank of water 16 cm deep (n = 4/3). Find its apparent depth. *Solution:* $16 \\div \\frac{4}{3} = 12$ cm.

**Example 2.** Find the critical angle for a medium of refractive index 2. *Solution:* $\\sin c = 0.5$; $c = 30°$.

**Example 3.** Find the power of a convex lens of focal length 25 cm. *Solution:* $\\frac{1}{0.25} = 4$ D.`,
        },
        questions: [
          ["E", "The bending of light as it passes from one medium to another is called", "refraction", "reflection", "diffraction", "dispersion", "It is caused by a change in speed."],
          ["E", "A lens that is thicker at the middle than at the edges is a", "convex lens", "concave lens", "plane lens", "diverging lens", "It converges parallel rays."],
          ["E", "The unit of the power of a lens is the", "dioptre", "watt", "metre", "candela", "Power is the reciprocal of focal length in metres."],
          ["M", "A pool of water (refractive index 4/3) is 12 cm deep. Its apparent depth is", "9 cm", "16 cm", "12 cm", "8 cm", "Apparent depth = real depth ÷ n."],
          ["M", "The speed of light in glass of refractive index 1.5 is (speed in air = 3 × 10⁸ m/s)", "2 × 10⁸ m/s", "4.5 × 10⁸ m/s", "1.5 × 10⁸ m/s", "3 × 10⁸ m/s", "Divide the speed in air by the refractive index."],
          ["M", "A convex lens has a focal length of 20 cm. Its power is", "5 D", "20 D", "0.05 D", "0.2 D", "P = 1 ÷ 0.2 m. Answer: 5 D."],
          ["M", "For total internal reflection to occur, light must travel from", "a denser to a less dense medium", "a less dense to a denser medium", "air to glass", "air to water", "The angle of incidence must also exceed the critical angle."],
          ["H", "The critical angle for glass of refractive index 1.5 is about", "42°", "30°", "48°", "60°", "sin c = 1 ÷ 1.5 = 0.667."],
          ["H", "An object is placed 15 cm from a convex lens of focal length 10 cm. The image is formed at", "30 cm on the other side of the lens", "6 cm on the same side", "25 cm on the other side", "5 cm on the other side", "1/v = 1/10 − 1/15 = 1/30."],
          ["H", "A ray of light is incident in air on a glass block (n = 1.5) at an angle of incidence of 30°. The angle of refraction is about", "19.5°", "15°", "45°", "48.6°", "sin r = sin 30° ÷ 1.5 = 0.333."],
        ],
      },
      {
        week: 2,
        title: "Optical instruments and dispersion",
        subtopics: ["The human eye and its defects", "The camera and the projector", "Microscopes and telescopes", "Dispersion and colour"],
        objectives: ["Describe the human eye and the correction of its defects", "Compare the camera with the eye and describe the projector", "Describe simple and compound microscopes and the telescope", "Explain dispersion and the mixing of colours"],
        lesson: {
          title: "Seeing Further and Clearer",
          summary: "Describe optical instruments and the dispersion of light.",
          minutes: 40,
          notes: `## The human eye
- **cornea** — transparent front; does most of the refraction
- **iris** — coloured diaphragm controlling the size of the **pupil**, and so the amount of light entering
- **lens** — convex and flexible; fine focusing
- **ciliary muscles** — change the shape (focal length) of the lens: **accommodation**
- **retina** — light-sensitive screen on which a **real, inverted, diminished** image forms; the **yellow spot (fovea)** gives sharpest vision; the **blind spot** is where the optic nerve leaves
- **optic nerve** — carries impulses to the brain
The **near point** of a normal eye is about **25 cm**; the **far point** is at infinity.

## Defects of the eye
| Defect | What happens | Correction |
|---|---|---|
| **short sight (myopia)** | distant objects are focused **in front** of the retina; eyeball too long | **concave (diverging)** lens |
| **long sight (hypermetropia)** | near objects are focused **behind** the retina; eyeball too short | **convex (converging)** lens |
| **presbyopia** | loss of accommodation with age | bifocal lenses |
| **astigmatism** | uneven curvature of the cornea | cylindrical lens |

## The camera
A light-tight box with a **convex lens**, a **diaphragm** (aperture), a **shutter** and a **film or sensor**. It forms a **real, inverted, diminished** image.
| Eye | Camera |
|---|---|
| focuses by changing the **shape** of the lens | focuses by changing the lens-to-film **distance** |
| iris | diaphragm |
| retina | film / sensor |
| eyelid | shutter |

## The projector
Produces a **real, inverted, magnified** image on a screen; the slide is placed between F and 2F of the projection lens and inserted upside down.

## The simple microscope
A convex lens used as a **magnifying glass**: the object is placed **within the focal length**, giving a virtual, upright, magnified image.

## The compound microscope
Two convex lenses: an **objective** of very short focal length forms a real, magnified image, which the **eyepiece** magnifies again. The final image is **virtual, inverted and highly magnified**.

## The astronomical telescope
An **objective** of **long** focal length $f_o$ and an **eyepiece** of **short** focal length $f_e$. In normal adjustment (final image at infinity):
- angular magnification $M = \\frac{f_o}{f_e}$
- length of the telescope $= f_o + f_e$
The image is inverted. The **terrestrial** telescope adds an erecting lens; the **Galilean** telescope uses a concave eyepiece; **reflecting** telescopes use a concave mirror; **prism binoculars** use totally reflecting prisms.

## Dispersion
**Dispersion** is the separation of **white light** into its component colours by a **prism**, because each colour travels at a different speed in glass and is refracted by a different amount. The band of colours is the **spectrum**: **red, orange, yellow, green, blue, indigo, violet**.
- **red** is deviated **least** (longest wavelength); **violet** most
- a **pure spectrum** is produced using a narrow slit and lenses
- a **rainbow** is formed by dispersion and internal reflection in raindrops

## Colour
- **primary colours of light**: **red, green, blue**
- **secondary colours**: yellow (red + green), magenta (red + blue), cyan (green + blue)
- all three primaries give **white**; two colours that give white together are **complementary** (blue and yellow)
- an object appears the colour it **reflects**; a red object in green light looks **black**
- **pigments** mix by subtraction: yellow and blue paints give green.`,
          examples: `**Example 1.** Which lens corrects short sight? *Answer:* A **concave (diverging)** lens.

**Example 2.** A telescope has an objective of focal length 80 cm and an eyepiece of focal length 4 cm. Find its magnification in normal adjustment. *Solution:* $80 \\div 4 = 20$.

**Example 3.** What colour results from mixing red and green light? *Answer:* **Yellow**.`,
        },
        questions: [
          ["E", "The part of the eye on which the image is formed is the", "retina", "cornea", "iris", "pupil", "It is the light-sensitive screen."],
          ["E", "Short sight is corrected with a", "concave lens", "convex lens", "plane mirror", "cylindrical lens", "It diverges the rays before they enter the eye."],
          ["E", "The separation of white light into its component colours is called", "dispersion", "reflection", "diffraction", "polarisation", "A prism produces a spectrum."],
          ["M", "The amount of light entering the eye is controlled by the", "iris", "retina", "optic nerve", "ciliary muscle", "It changes the size of the pupil."],
          ["M", "In the spectrum of white light, the colour that is deviated least by a prism is", "red", "violet", "green", "blue", "It has the longest wavelength."],
          ["M", "Mixing red light and green light produces", "yellow", "magenta", "cyan", "white", "It is a secondary colour."],
          ["M", "The ability of the eye lens to change its focal length is called", "accommodation", "adaptation", "dispersion", "persistence of vision", "The ciliary muscles alter the shape of the lens."],
          ["H", "An astronomical telescope has an objective of focal length 100 cm and an eyepiece of focal length 5 cm. In normal adjustment its magnification and length are", "20 and 105 cm", "20 and 95 cm", "500 and 105 cm", "0.05 and 100 cm", "M = fo ÷ fe and length = fo + fe."],
          ["H", "A long-sighted person cannot see near objects clearly because the image is formed", "behind the retina", "in front of the retina", "on the blind spot", "on the cornea", "A convex lens corrects the defect."],
          ["H", "A red object viewed in pure green light appears", "black", "red", "green", "yellow", "It reflects only red light, and none is falling on it."],
        ],
      },
      {
        week: 3,
        title: "Sound waves",
        subtopics: ["Production and transmission of sound", "Speed of sound and echoes", "Characteristics of musical notes", "Vibrations in strings and pipes; resonance"],
        objectives: ["Explain the production and transmission of sound", "Solve problems on the speed of sound and echoes", "Explain pitch, loudness and quality", "Solve problems on vibrating strings, air columns and resonance"],
        lesson: {
          title: "The Physics of Sound",
          summary: "Explain the nature of sound and the behaviour of vibrating strings and air columns.",
          minutes: 40,
          notes: `## Production and transmission
Sound is produced by **vibrating** bodies — a tuning fork, a drum skin, vocal cords. It travels as a **longitudinal wave** of **compressions and rarefactions**. Sound **needs a material medium**: the bell-jar experiment shows that it cannot pass through a vacuum.

## Speed of sound
- in air about **330–340 m/s**; faster in liquids (about 1500 m/s in water); fastest in **solids** (about 5000 m/s in steel)
- in a gas it **increases with temperature** ($v \\propto \\sqrt{T}$) and with humidity; it is **independent of pressure**
- wind affects the speed relative to the ground

## Echoes
An **echo** is a sound heard after **reflection** from a surface. If the echo returns after time $t$ from a reflector at distance $d$:
$v = \\frac{2d}{t}$
*Example:* an echo heard 2 s after a clap, with $v = 340$ m/s, comes from a wall $\\frac{340 \\times 2}{2} = 340$ m away.
**Reverberation** is the persistence of sound in a hall due to repeated reflections. Echoes are used in **echo-sounding (sonar)** to find the depth of the sea, and by bats.

## Characteristics of notes
- **pitch** — how high or low a note sounds; depends on **frequency**
- **loudness** — depends on **amplitude** (intensity)
- **quality (timbre)** — distinguishes the same note on different instruments; depends on the **overtones (harmonics)** present
A **musical note** has regular vibrations; **noise** has irregular ones.
The human ear hears about **20 Hz to 20 000 Hz**; **ultrasound** lies above this range.

## Vibrating strings
A stretched string fixed at both ends has **nodes at the ends**. In its **fundamental** mode the length is half a wavelength: $\\lambda = 2L$.
$f = \\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}$
where $T$ is the tension and $\\mu$ the mass per unit length. So the frequency is
- inversely proportional to the **length**
- proportional to the square root of the **tension**
- inversely proportional to the square root of the **mass per unit length**
The harmonics are $f_0, 2f_0, 3f_0, \\ldots$ The **sonometer** is used to verify these laws.

## Vibrating air columns
### Closed pipe (closed at one end)
node at the closed end, antinode at the open end. Fundamental: $L = \\frac{\\lambda}{4}$, so $f_0 = \\frac{v}{4L}$. Only **odd harmonics**: $f_0, 3f_0, 5f_0$.
### Open pipe (open at both ends)
antinodes at both ends. Fundamental: $L = \\frac{\\lambda}{2}$, so $f_0 = \\frac{v}{2L}$. **All harmonics**: $f_0, 2f_0, 3f_0$.
An open pipe sounds an **octave higher** than a closed pipe of the same length.

## Resonance
**Resonance** occurs when a body is made to vibrate at its **natural frequency** by another vibrating body, giving a large amplitude. In the **resonance tube**, a tuning fork held over a column of air gives a loud sound when the length is $\\frac{\\lambda}{4}$, then $\\frac{3\\lambda}{4}$. From two successive resonant lengths: $v = 2f(l_2 - l_1)$.

## Beats
Two notes of slightly different frequencies sounded together give a periodic rise and fall in loudness: **beat frequency** $= f_1 - f_2$. Beats are used in tuning instruments.

## Musical instruments
- **stringed**: guitar, violin, piano, *goje*
- **wind**: flute, trumpet, *kakaki*, *oja*
- **percussion**: drums, xylophone, gong.`,
          examples: `**Example 1.** A man hears the echo of his shout 3 s later from a cliff. If the speed of sound is 340 m/s, how far is the cliff? *Solution:* $\\frac{340 \\times 3}{2} = 510$ m.

**Example 2.** Find the fundamental frequency of a closed pipe 0.5 m long (v = 340 m/s). *Solution:* $\\frac{340}{4 \\times 0.5} = 170$ Hz.

**Example 3.** Two forks of 256 Hz and 252 Hz are sounded together. Find the beat frequency. *Solution:* 4 beats per second.`,
        },
        questions: [
          ["E", "Sound cannot travel through", "a vacuum", "water", "steel", "air", "It needs a material medium."],
          ["E", "The pitch of a note depends on its", "frequency", "amplitude", "speed", "quality", "A higher frequency gives a higher pitch."],
          ["E", "A sound heard after reflection from a distant surface is called", "an echo", "a beat", "a harmonic", "resonance", "Repeated reflections cause reverberation."],
          ["M", "A girl hears the echo of her clap 2 s after making it. If the speed of sound is 340 m/s, the reflecting wall is at a distance of", "340 m", "680 m", "170 m", "85 m", "The sound travels to the wall and back."],
          ["M", "The loudness of a sound depends on the", "amplitude of vibration", "frequency of vibration", "wavelength only", "overtones present", "A larger amplitude gives a louder sound."],
          ["M", "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. The number of beats heard per second is", "four", "two", "516", "258", "Beat frequency is the difference of the frequencies."],
          ["M", "The quality (timbre) of a musical note depends on the", "overtones present", "amplitude only", "speed of sound", "length of the room", "It distinguishes one instrument from another."],
          ["H", "The fundamental frequency of a closed pipe of length 0.25 m (speed of sound 340 m/s) is", "340 Hz", "680 Hz", "170 Hz", "85 Hz", "f = v ÷ 4L. Answer: 340 Hz."],
          ["H", "If the tension in a vibrating string is increased to four times its value, the frequency becomes", "twice as great", "four times as great", "half as great", "sixteen times as great", "Frequency is proportional to the square root of the tension."],
          ["H", "A closed pipe can produce", "only odd harmonics", "only even harmonics", "all harmonics", "no harmonics", "It has a node at one end and an antinode at the other."],
        ],
      },
      {
        week: 4,
        title: "Elastic properties of solids",
        subtopics: ["Elasticity and Hooke's law", "The force–extension graph", "Stress, strain and Young's modulus", "Energy stored in a stretched material"],
        objectives: ["Explain elasticity and state Hooke's law", "Interpret the force–extension graph of a wire", "Calculate stress, strain and Young's modulus", "Calculate the energy stored in a stretched spring or wire"],
        lesson: {
          title: "Stretching Materials",
          summary: "Apply Hooke's law and calculate stress, strain, Young's modulus and elastic energy.",
          minutes: 40,
          notes: `## Elasticity
**Elasticity** is the ability of a material to **return to its original shape and size** when the deforming force is removed. Rubber, steel and springs are elastic; a material that stays deformed (plasticine, clay) is **plastic**.

## Hooke's law
**The extension of an elastic material is directly proportional to the applied force, provided the elastic limit is not exceeded.**
$F = ke$
where $e$ is the extension and $k$ the **force constant (stiffness)** of the spring, in N/m.
*Example:* a force of 10 N stretches a spring by 0.05 m: $k = \\frac{10}{0.05} = 200$ N/m.
A **spring balance** works on this principle.

## The force–extension graph for a wire
- **O to P** — a straight line: Hooke's law is obeyed; P is the **limit of proportionality**
- **E, the elastic limit** — just beyond P; up to here the wire returns to its original length when unloaded
- **Y, the yield point** — beyond the elastic limit; the wire stretches a great deal for little extra load and is **permanently deformed** (plastic deformation)
- **the maximum (ultimate) load**, then **B, the breaking point**
A **ductile** material (copper, steel) can be drawn into wires and shows a long plastic region; a **brittle** material (glass, cast iron) breaks just beyond the elastic limit.

## Stress and strain
- **tensile stress** $= \\frac{\\text{force}}{\\text{cross-sectional area}} = \\frac{F}{A}$, in N/m² (Pa)
- **tensile strain** $= \\frac{\\text{extension}}{\\text{original length}} = \\frac{e}{L}$ — a ratio, with **no unit**

## Young's modulus
Within the limit of proportionality, stress is proportional to strain:
$E = \\frac{\\text{stress}}{\\text{strain}} = \\frac{FL}{Ae}$
Unit: N/m² (Pa). It measures the **stiffness of the material** itself; for steel it is about $2 \\times 10^{11}$ Pa.
*Example:* a force of 100 N acts on a wire of cross-sectional area $2 \\times 10^{-6}$ m²: stress $= 5 \\times 10^{7}$ Pa. If a 4 m length extends by 2 mm, strain $= \\frac{0.002}{4} = 5 \\times 10^{-4}$, and $E = \\frac{5 \\times 10^{7}}{5 \\times 10^{-4}} = 1 \\times 10^{11}$ Pa.

## Energy stored
The work done in stretching is stored as **elastic potential energy** — the area under the force–extension graph:
$W = \\frac{1}{2}Fe = \\frac{1}{2}ke^2$
*Example:* a force of 20 N producing an extension of 0.1 m stores $\\frac{1}{2} \\times 20 \\times 0.1 = 1$ J.
This energy drives catapults, bows, clockwork toys and vehicle suspension springs.

## Springs in combination
- in **series**, the extensions add: the combination is **less stiff**
- in **parallel**, the load is shared: the combination is **stiffer**

## Why this matters
Engineers choose materials whose working stress is well below the elastic limit — in bridges, cranes, lift cables and buildings.`,
          examples: `**Example 1.** A spring of force constant 300 N/m carries a load of 15 N. Find the extension. *Solution:* $e = \\frac{15}{300} = 0.05$ m.

**Example 2.** A load of 4 N stretches a spring by 2 cm. Find the extension produced by 10 N, the elastic limit not being exceeded. *Solution:* $\\frac{10}{4} \\times 2 = 5$ cm.

**Example 3.** Find the energy stored in a spring of constant 200 N/m stretched by 0.1 m. *Solution:* $\\frac{1}{2} \\times 200 \\times 0.01 = 1$ J.`,
        },
        questions: [
          ["E", "The ability of a material to regain its original shape after a deforming force is removed is", "elasticity", "plasticity", "ductility", "viscosity", "Rubber and steel show it."],
          ["E", "Hooke's law states that, within the elastic limit, extension is proportional to the", "applied force", "length of the wire", "area of the wire", "temperature", "F = ke. Answer: applied force."],
          ["E", "Strain is the ratio of", "extension to original length", "force to area", "force to extension", "stress to force", "It has no unit."],
          ["M", "A force of 10 N stretches a spring by 0.05 m. The force constant of the spring is", "200 N/m", "0.5 N/m", "2 N/m", "50 N/m", "k = F ÷ e. Answer: 200 N/m."],
          ["M", "A force of 100 N acts on a wire of cross-sectional area 2 × 10⁻⁶ m². The tensile stress is", "5 × 10⁷ Pa", "2 × 10⁻⁴ Pa", "2 × 10⁸ Pa", "5 × 10⁻⁵ Pa", "Stress = force ÷ area."],
          ["M", "A wire 4 m long is stretched by 2 mm. The tensile strain is", "5 × 10⁻⁴", "2 × 10⁻³", "8 × 10⁻³", "0.5", "Strain = 0.002 ÷ 4."],
          ["M", "The point on a force–extension graph beyond which a wire is permanently deformed is the", "elastic limit", "origin", "limit of the scale", "breaking point only", "Up to it the wire returns to its original length."],
          ["H", "A force of 20 N produces an extension of 0.1 m in a spring. The energy stored in the spring is", "1 J", "2 J", "200 J", "0.5 J", "W = ½Fe. Answer: 1 J."],
          ["H", "A wire has a tensile stress of 5 × 10⁷ Pa and a strain of 5 × 10⁻⁴. Its Young's modulus is", "1 × 10¹¹ Pa", "2.5 × 10⁴ Pa", "1 × 10⁻¹¹ Pa", "2.5 × 10¹¹ Pa", "E = stress ÷ strain."],
          ["H", "A load of 4 N extends a spring by 2 cm. If the elastic limit is not exceeded, a load of 10 N will extend it by", "5 cm", "20 cm", "2.5 cm", "8 cm", "Extension is proportional to the load."],
        ],
      },
      {
        week: 5,
        title: "Surface tension, capillarity and viscosity",
        subtopics: ["Molecular explanation of surface tension", "Effects and applications of surface tension", "Adhesion, cohesion and capillarity", "Viscosity"],
        objectives: ["Explain surface tension in terms of molecular forces", "Describe the effects and applications of surface tension", "Explain capillarity in terms of adhesion and cohesion", "Explain viscosity and its applications"],
        lesson: {
          title: "Molecular Forces in Liquids",
          summary: "Explain surface tension, capillarity and viscosity.",
          minutes: 40,
          notes: `## Molecular forces
- **cohesion**: the force of attraction between molecules of the **same** substance
- **adhesion**: the force of attraction between molecules of **different** substances

## Surface tension
A molecule inside a liquid is attracted equally in all directions. A molecule at the **surface** has no liquid molecules above it, so it experiences a **net inward pull**. The surface therefore behaves like a **stretched elastic skin** and tends to have the **smallest possible area**.
**Surface tension** $\\gamma$ is the force per unit length acting in the surface at right angles to a line drawn in it:
$\\gamma = \\frac{F}{L}$
Unit: **N/m**.

### Evidence
- a needle or razor blade can float on water
- insects (pond skaters) walk on water
- small drops of water and mercury are **spherical** (the sphere has the least surface area for a given volume)
- the hairs of a wet brush cling together
- soap bubbles are spherical

### Reducing surface tension
- adding **soap or detergent** — which is how they help water to wet and clean cloth
- **heating** the liquid
- adding oil, kerosene or alcohol — kerosene poured on stagnant water lowers the surface tension so that **mosquito larvae** can no longer hang from the surface

### Increasing it
dissolved salts raise it slightly; waterproofing agents on umbrellas and raincoats prevent wetting.

## The meniscus and wetting
- **water in glass**: adhesion (water–glass) is **greater** than cohesion — water **wets** glass; the meniscus is **concave** (curves upwards at the edges)
- **mercury in glass**: cohesion is **greater** than adhesion — mercury does **not** wet glass; the meniscus is **convex**

## Capillarity
**Capillarity** is the rise or fall of a liquid in a **narrow tube**.
- **water rises** in a capillary tube; the narrower the tube, the **higher** the rise
- **mercury is depressed** below the outside level
The height is given by $h = \\frac{2\\gamma\\cos\\theta}{r\\rho g}$, where $\\theta$ is the angle of contact and $r$ the radius.
### Applications
- kerosene rising in the **wick** of a lamp
- water rising through soil and up the stems of plants
- blotting paper, towels and sponges soaking up liquid
- damp rising in walls (prevented by a damp-proof course)

## Viscosity
**Viscosity** is the **internal friction** between layers of a fluid in relative motion — its resistance to flow.
- thick oil, honey and glycerine are highly viscous; water and petrol are not
- the viscosity of a **liquid decreases** with rising temperature; that of a **gas increases**
- a small sphere falling through a viscous liquid reaches a **terminal velocity** when weight = upthrust + viscous drag (Stokes' law)
### Applications
- **lubricating oils** are chosen for the right viscosity ("grades" of engine oil)
- design of streamlined vehicles and ships
- blood flow; the flow of oil in pipelines
- shock absorbers (dampers)

## Comparing viscosity and friction
both oppose relative motion; but viscous drag **depends on speed and on the area** in contact, whereas solid friction is nearly independent of both.`,
          examples: `**Example 1.** Why can a steel needle float on water? *Answer:* **Surface tension** makes the surface behave like a stretched skin that supports it.

**Example 2.** A force of 0.014 N acts along a line of length 0.2 m in a liquid surface. Find the surface tension. *Solution:* $\\frac{0.014}{0.2} = 0.07$ N/m.

**Example 3.** Why does water rise in a narrow glass tube? *Answer:* **Adhesion** between water and glass exceeds the **cohesion** of water.`,
        },
        questions: [
          ["E", "The force of attraction between molecules of the same substance is called", "cohesion", "adhesion", "friction", "upthrust", "Adhesion is between different substances."],
          ["E", "The rise of kerosene up the wick of a lamp is due to", "capillarity", "evaporation", "diffusion only", "conduction", "The wick has many narrow spaces."],
          ["E", "The resistance of a fluid to flow is called its", "viscosity", "density", "surface tension", "elasticity", "It is the internal friction of the fluid."],
          ["M", "Small drops of mercury on a clean glass plate are spherical because of", "surface tension", "viscosity", "gravity", "adhesion to glass", "A sphere has the least surface area for its volume."],
          ["M", "The surface tension of water can be reduced by", "adding detergent", "cooling the water", "adding common salt", "increasing its depth", "This helps water to wet cloth."],
          ["M", "The meniscus of mercury in a glass tube is convex because", "cohesion of mercury exceeds its adhesion to glass", "adhesion exceeds cohesion", "mercury is a metal", "glass repels all liquids", "Mercury does not wet glass."],
          ["M", "The unit of surface tension is", "newton per metre", "newton metre", "pascal second", "kilogram per cubic metre", "It is force per unit length."],
          ["H", "A force of 0.014 N acts along a line 0.2 m long in the surface of a liquid. The surface tension of the liquid is", "0.07 N/m", "0.0028 N/m", "14 N/m", "0.7 N/m", "γ = F ÷ L. Answer: 0.07 N/m."],
          ["H", "When the temperature of a lubricating oil rises, its viscosity", "decreases", "increases", "remains constant", "becomes zero", "This is true of liquids generally; for gases it increases."],
          ["H", "Kerosene poured on stagnant water kills mosquito larvae mainly because it", "lowers the surface tension so that the larvae cannot hang from the surface", "raises the temperature of the water", "increases the density of the water", "makes the water more viscous", "The larvae sink and cannot breathe."],
        ],
      },
    ],
  },
];
