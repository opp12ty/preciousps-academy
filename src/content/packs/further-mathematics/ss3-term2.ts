import type { TermPlan } from "../types";

/** SS3 Further Mathematics, second term — original Precious PS content. */
export const ss3Term2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "The normal and Poisson distributions",
      subtopics: ["Properties of the normal distribution", "Standard scores and normal probabilities", "The Poisson distribution", "Mean and variance of the Poisson distribution"],
      objectives: ["State the properties of the normal distribution", "Standardise values and find normal probabilities from tables", "Calculate Poisson probabilities", "State the mean and variance of a Poisson distribution and use it to approximate the binomial"],
      lesson: {
        title: "Two Important Distributions",
        summary: "Use the normal and Poisson distributions to calculate probabilities.",
        minutes: 40,
        notes: `## The normal distribution
A **continuous** distribution that models many natural measurements — heights, masses, examination marks, errors of measurement. We write $X \\sim N(\\mu, \\sigma^2)$, with mean $\\mu$ and standard deviation $\\sigma$.

### Properties of the normal curve
- **bell-shaped** and **symmetrical** about the mean
- **mean = median = mode**
- the total **area under the curve is 1**
- the curve approaches but never touches the horizontal axis
- about **68%** of values lie within one standard deviation of the mean, about **95%** within two and about **99.7%** within three

## Standard scores
The **standard normal variable** $Z$ has mean 0 and standard deviation 1. Any normal value is standardised by
$z = \\frac{x - \\mu}{\\sigma}$
*Examples:* with $\\mu = 60$ and $\\sigma = 5$, $x = 70$ gives $z = 2$. With $\\mu = 55$ and $\\sigma = 8$, $x = 43$ gives $z = -1.5$.
A $z$-score tells how many standard deviations a value is above or below the mean, and allows marks in different subjects to be compared.

## Probabilities from tables
Tables give $\\Phi(z) = P(Z < z)$.
| $z$ | 0.5 | 1.0 | 1.5 | 2.0 |
|---|---|---|---|---|
| $\\Phi(z)$ | 0.6915 | 0.8413 | 0.9332 | 0.9772 |
- $P(Z > z) = 1 - \\Phi(z)$
- $\\Phi(-z) = 1 - \\Phi(z)$ (by symmetry)
- $P(a < Z < b) = \\Phi(b) - \\Phi(a)$
*Example:* $X \\sim N(50, 10^2)$. $P(X > 60) = P(Z > 1) = 1 - 0.8413 = 0.1587$.
*Example:* $P(40 < X < 60) = \\Phi(1) - \\Phi(-1) = 0.8413 - 0.1587 = 0.6826$.
In a group of 200 such people, about $0.1587 \\times 200 \\approx 32$ would exceed 60.

## The Poisson distribution
A **discrete** distribution for the number of times an event occurs in a fixed interval of time or space, when events happen **singly, independently and at a constant average rate** $\\lambda$:
$P(X = r) = \\frac{e^{-\\lambda}\\lambda^r}{r!}$, for $r = 0, 1, 2, \\dots$
Typical uses: telephone calls per minute, accidents per week, misprints per page, flaws per metre of cloth.

### Mean and variance
**mean = variance = $\\lambda$**. A Poisson distribution with mean 4 has variance 4 and standard deviation 2.

### Examples with $\\lambda = 2$ ($e^{-2} \\approx 0.1353$)
- $P(X = 0) = e^{-2} \\approx 0.135$
- $P(X = 1) = 2e^{-2} \\approx 0.271$
- $P(X = 2) = \\frac{4e^{-2}}{2} = 2e^{-2} \\approx 0.271$
- $P(X \\ge 1) = 1 - e^{-2} \\approx 0.865$

### Changing the interval
If calls arrive at 3 per minute, the mean for 2 minutes is 6.

## Poisson approximation to the binomial
When $n$ is **large** and $p$ is **small**, $B(n, p)$ is approximately Poisson with $\\lambda = np$.
*Example:* $n = 100$, $p = 0.02$: $\\lambda = 2$.

## Normal approximation to the binomial
When $n$ is large and $p$ is not too close to 0 or 1, $B(n, p)$ is approximately $N(np, npq)$.

## Choosing a distribution
- fixed number of trials, two outcomes: **binomial**
- rare events at a constant rate: **Poisson**
- continuous, symmetrical measurements: **normal**`,
        examples: `**Example 1.** Marks are $N(60, 12^2)$. Find the $z$-score of a mark of 78. *Solution:* $\\frac{78 - 60}{12} = 1.5$.

**Example 2.** Using $\\Phi(2) = 0.9772$, find $P(Z > 2)$. *Solution:* $1 - 0.9772 = 0.0228$.

**Example 3.** $X$ is Poisson with mean 3. Find $P(X = 0)$. *Solution:* $e^{-3} \\approx 0.0498$.`,
      },
      questions: [
        ["E", "The graph of a normal distribution is", "bell-shaped and symmetrical about the mean", "skewed to the right", "rectangular", "a straight line", "Half of the area lies on each side of the mean."],
        ["E", "The total area under a normal curve is", "1", "0.5", "100", "$\\sigma$", "It represents the total probability."],
        ["E", "The variance of a Poisson distribution with mean 4 is", "4", "2", "16", "0.25", "The mean and variance of a Poisson distribution are equal."],
        ["M", "For a normal distribution with mean 60 and standard deviation 5, the standard score of the value 70 is", "2", "10", "0.5", "$-2$", "(70 − 60) ÷ 5. Answer: 2."],
        ["M", "In a normal distribution, the mean, median and mode are", "equal", "all different", "in increasing order", "undefined", "The curve is symmetrical."],
        ["M", "The percentage of values of a normal distribution lying within one standard deviation of the mean is about", "68%", "50%", "95%", "99.7%", "About 95% lie within two standard deviations."],
        ["M", "If $X$ has a Poisson distribution with mean 2, then $P(X = 0)$ is", "$e^{-2}$", "$2e^{-2}$", "$e^{2}$", "$1 - e^{-2}$", "Put r = 0 in the Poisson formula."],
        ["H", "$X$ is normally distributed with mean 50 and standard deviation 10. Given $\\Phi(1) = 0.8413$, the value of $P(X > 60)$ is", "0.1587", "0.8413", "0.3413", "0.6826", "It equals 1 − Φ(1)."],
        ["H", "If $X$ has a Poisson distribution with mean 2, then $P(X = 2)$ is", "$2e^{-2}$", "$4e^{-2}$", "$e^{-2}$", "$\\frac{e^{-2}}{2}$", "4e⁻² divided by 2 factorial."],
        ["H", "A binomial distribution with $n = 100$ and $p = 0.02$ may be approximated by a Poisson distribution with mean", "2", "0.02", "98", "1.96", "λ = np. Answer: 2."],
      ],
    },
    {
      week: 2,
      title: "Work, energy and power",
      subtopics: ["Work done by a force", "Kinetic and potential energy", "Conservation of mechanical energy and the work–energy principle", "Power"],
      objectives: ["Calculate the work done by a constant force", "Calculate kinetic and gravitational potential energy", "Apply the conservation of mechanical energy and the work–energy principle", "Calculate power, including the power of a moving vehicle"],
      lesson: {
        title: "Energy in Mechanics",
        summary: "Calculate work, energy and power and apply the conservation of energy.",
        minutes: 40,
        notes: `## Work
Work is done when a force moves its point of application.
$W = Fs$ (force in the direction of motion)
$W = Fs\\cos \\theta$ (force at angle $\\theta$ to the direction of motion)
The unit is the **joule (J)**: 1 J = 1 N m. Work is a scalar.
*Examples:*
- 10 N moving a body 5 m: $W = 50$ J
- 20 N at $60^\\circ$ to the direction of motion over 10 m: $W = 20 \\times 10 \\times 0.5 = 100$ J
- a force perpendicular to the motion does **no work**
### Work against gravity
Raising a mass $m$ through a height $h$: $W = mgh$.
### Work against friction or resistance
$W = \\text{resistance} \\times \\text{distance}$.

## Energy
**Energy** is the capacity to do work, measured in joules.
### Kinetic energy
Energy due to motion:
$KE = \\frac{1}{2}mv^2$
A 2 kg body moving at 3 m/s has $KE = \\frac{1}{2}(2)(9) = 9$ J.
### Gravitational potential energy
Energy due to position:
$PE = mgh$
A 5 kg body 4 m above the ground has $PE = 5 \\times 10 \\times 4 = 200$ J ($g = 10$ m/s²).
### Elastic potential energy
In a spring or string stretched by $x$: $\\frac{1}{2}kx^2$ (or $\\frac{\\lambda x^2}{2l}$).

## Conservation of mechanical energy
If no external force other than gravity does work (no friction or resistance):
**KE + PE = constant**
*Example:* a body falls from rest through 5 m. Loss of PE = gain of KE: $mgh = \\frac{1}{2}mv^2$, so $v = \\sqrt{2gh} = \\sqrt{100} = 10$ m/s.
*Example:* a pendulum bob released from a height of 0.2 m above its lowest point passes that point at $v = \\sqrt{2 \\times 10 \\times 0.2} = 2$ m/s.

## The work–energy principle
**The work done by the resultant force equals the change in kinetic energy:**
$Fs = \\frac{1}{2}mv^2 - \\frac{1}{2}mu^2$
*Example:* a 2 kg body speeds up from 3 m/s to 5 m/s: work done $= \\frac{1}{2}(2)(25 - 9) = 16$ J.
*Example:* a 1000 kg car moving at 20 m/s is stopped in 50 m. $F \\times 50 = \\frac{1}{2}(1000)(400)$, so the braking force is 4000 N.
With resistance: work done by driving force = gain in KE + gain in PE + work done against resistance.

## Power
**Power** is the rate of doing work:
$P = \\frac{W}{t}$
The unit is the **watt (W)**: 1 W = 1 J/s; 1 kW = 1000 W.
*Example:* 600 J of work done in 20 s: $P = 30$ W.
### Power of a moving vehicle
$P = Fv$
where $F$ is the driving (tractive) force and $v$ the speed.
*Example:* an engine exerting 500 N at 20 m/s develops $500 \\times 20 = 10\\,000$ W = 10 kW.
At **maximum speed** on a level road the acceleration is zero, so the driving force equals the resistance: $P = Rv_{\\max}$.
On an incline, the driving force must also overcome the component of weight $mg\\sin \\theta$.

### Pumps
A pump raising $m$ kg of water per second through $h$ m and delivering it at $v$ m/s works at $mgh + \\frac{1}{2}mv^2$ watts.

## Efficiency
$\\text{efficiency} = \\frac{\\text{useful output}}{\\text{input}} \\times 100\\%$`,
        examples: `**Example 1.** Find the work done in lifting a 20 kg load through 3 m ($g = 10$ m/s²). *Solution:* $20 \\times 10 \\times 3 = 600$ J.

**Example 2.** Find the kinetic energy of a 0.5 kg ball moving at 8 m/s. *Solution:* $\\frac{1}{2}(0.5)(64) = 16$ J.

**Example 3.** A car's engine works at 30 kW when the car moves steadily at 15 m/s. Find the resistance. *Solution:* $R = \\frac{30\\,000}{15} = 2000$ N.`,
      },
      questions: [
        ["E", "The work done when a force of 10 N moves a body 5 m in the direction of the force is", "50 J", "2 J", "15 J", "0.5 J", "Work = force × distance."],
        ["E", "The SI unit of power is the", "watt", "joule", "newton", "pascal", "One watt is one joule per second."],
        ["E", "The kinetic energy of a body of mass $m$ moving with speed $v$ is", "$\\frac{1}{2}mv^2$", "$mv$", "$mgh$", "$\\frac{1}{2}mv$", "It is the energy of motion."],
        ["M", "The kinetic energy of a body of mass 2 kg moving at 3 m/s is", "9 J", "6 J", "18 J", "3 J", "Half of 2 times 9."],
        ["M", "Taking $g = 10$ m/s², the potential energy of a 5 kg mass at a height of 4 m is", "200 J", "20 J", "50 J", "2000 J", "PE = mgh. Answer: 200 J."],
        ["M", "A machine does 600 J of work in 20 s. Its power is", "30 W", "12 000 W", "620 W", "0.03 W", "Power = work ÷ time."],
        ["M", "A force of 20 N acts at $60^\\circ$ to the direction of motion of a body which moves 10 m. The work done by the force is", "100 J", "200 J", "$100\\sqrt{3}$ J", "173 J", "20 × 10 × cos 60°."],
        ["H", "A body falls freely from rest through a height of 5 m. Taking $g = 10$ m/s², its speed at the end of the fall is", "10 m/s", "50 m/s", "5 m/s", "100 m/s", "v = √(2gh). Answer: 10 m/s."],
        ["H", "The engine of a car exerts a driving force of 500 N while the car moves at a steady 20 m/s. The power developed is", "10 kW", "25 kW", "1 kW", "520 W", "P = Fv = 10 000 W."],
        ["H", "The work done in increasing the speed of a 2 kg body from 3 m/s to 5 m/s is", "16 J", "4 J", "34 J", "8 J", "It equals the gain in kinetic energy."],
      ],
    },
    {
      week: 3,
      title: "Linear transformations",
      subtopics: ["Matrices as transformations of the plane", "Reflections and rotations", "Enlargement, stretch and shear", "Composite and inverse transformations"],
      objectives: ["Find the image of a point under a matrix transformation", "Write the matrices of reflections and rotations", "Describe enlargements and the area scale factor", "Combine transformations and find inverse transformations"],
      lesson: {
        title: "Transformations by Matrices",
        summary: "Use 2 × 2 matrices to represent transformations of the plane.",
        minutes: 40,
        notes: `## Transformation by a matrix
A $2 \\times 2$ matrix $M$ maps a point $(x, y)$ to its **image** $(x', y')$:
$\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$
so $x' = ax + by$ and $y' = cx + dy$.
*Example:* under $\\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, the point $(1, 2)$ maps to $(2, 1 + 6) = (2, 7)$.
Such a transformation is **linear**: the origin is fixed, and straight lines map to straight lines.

### Finding the matrix
The **columns** of the matrix are the images of $(1, 0)$ and $(0, 1)$.

## Standard matrices
| Transformation | Matrix |
|---|---|
| identity | $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ |
| reflection in the $x$-axis | $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ |
| reflection in the $y$-axis | $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ |
| reflection in $y = x$ | $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ |
| reflection in $y = -x$ | $\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$ |
| rotation of $90^\\circ$ anticlockwise about $O$ | $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ |
| rotation of $180^\\circ$ about $O$ | $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ |
| rotation of $90^\\circ$ clockwise about $O$ | $\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$ |
| enlargement, scale factor $k$, centre $O$ | $\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$ |
Rotation through $\\theta$ anticlockwise: $\\begin{pmatrix} \\cos \\theta & -\\sin \\theta \\\\ \\sin \\theta & \\cos \\theta \\end{pmatrix}$.

*Examples:*
- reflection in the $x$-axis: $(2, 3) \\to (2, -3)$
- rotation of $90^\\circ$ anticlockwise: $(1, 0) \\to (0, 1)$
- rotation of $180^\\circ$: $(3, 1) \\to (-3, -1)$
- enlargement with scale factor 2: $(1, 3) \\to (2, 6)$

## Stretch and shear
- stretch parallel to the $x$-axis, factor $k$: $\\begin{pmatrix} k & 0 \\\\ 0 & 1 \\end{pmatrix}$
- shear parallel to the $x$-axis: $\\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$ — points on the $x$-axis stay fixed; area is unchanged

## Area scale factor
The area of the image $= |\\det M| \\times$ area of the object.
For $\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$ the determinant is 5, so areas are multiplied by 5. A negative determinant means the figure is turned over (as in a reflection). If the determinant is zero the plane collapses onto a line.

## Composite transformations
If transformation $A$ is followed by $B$, the single equivalent matrix is $BA$ — **the first transformation is written on the right**.
*Example:* reflection in the $x$-axis followed by reflection in the $y$-axis:
$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$ — a **rotation of $180^\\circ$** about the origin.

## Inverse transformations
The inverse matrix $M^{-1}$ maps each image back to its object.
*Example:* which point maps to $(5, 3)$ under $\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$? The determinant is 1 and the inverse is $\\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$, giving $(5 - 3, -5 + 6) = (2, 1)$.
A reflection is its own inverse; the inverse of a rotation through $\\theta$ is a rotation through $-\\theta$.

## Invariant points and lines
An **invariant point** is mapped to itself. The origin is invariant under every linear transformation; every point on the mirror line is invariant under a reflection.`,
        examples: `**Example 1.** Find the image of $(3, -2)$ under reflection in the $y$-axis. *Solution:* $(-3, -2)$.

**Example 2.** Find the image of $(2, 1)$ under $\\begin{pmatrix} 1 & 2 \\\\ 3 & 0 \\end{pmatrix}$. *Solution:* $(2 + 2, 6 + 0) = (4, 6)$.

**Example 3.** A triangle of area 6 cm² is transformed by $\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. Find the area of its image. *Solution:* determinant 6; area $= 36$ cm².`,
      },
      questions: [
        ["E", "The image of the point $(2, 3)$ under reflection in the $x$-axis is", "$(2, -3)$", "$(-2, 3)$", "$(3, 2)$", "$(-2, -3)$", "The y-coordinate changes sign."],
        ["E", "The matrix $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ represents", "the identity transformation", "a reflection in the $x$-axis", "a rotation of $90^\\circ$", "an enlargement of scale factor 2", "Every point is mapped to itself."],
        ["E", "The image of the point $(1, 3)$ under an enlargement of scale factor 2 with centre the origin is", "$(2, 6)$", "$(3, 5)$", "$(2, 3)$", "$(0.5, 1.5)$", "Both coordinates are doubled."],
        ["M", "The image of the point $(1, 2)$ under the transformation $\\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$ is", "$(2, 7)$", "$(2, 6)$", "$(4, 7)$", "$(3, 5)$", "x′ = 2 and y′ = 1 + 6."],
        ["M", "The matrix that represents a reflection in the line $y = x$ is", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$", "The coordinates are interchanged."],
        ["M", "The image of the point $(1, 0)$ under an anticlockwise rotation of $90^\\circ$ about the origin is", "$(0, 1)$", "$(0, -1)$", "$(-1, 0)$", "$(1, 1)$", "It moves from the x-axis to the y-axis."],
        ["M", "Under the transformation $\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$, areas are multiplied by", "5", "7", "6", "1", "The area scale factor is the determinant."],
        ["H", "The image of the point $(3, 1)$ under a rotation of $180^\\circ$ about the origin is", "$(-3, -1)$", "$(-1, 3)$", "$(1, -3)$", "$(3, -1)$", "Both coordinates change sign."],
        ["H", "A reflection in the $x$-axis followed by a reflection in the $y$-axis is equivalent to", "a rotation of $180^\\circ$ about the origin", "a reflection in the line $y = x$", "a rotation of $90^\\circ$ about the origin", "the identity transformation", "The product of the two matrices has −1 on the leading diagonal."],
        ["H", "The point whose image under the transformation $\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$ is $(5, 3)$ is", "$(2, 1)$", "$(13, 8)$", "$(1, 2)$", "$(8, 2)$", "Apply the inverse matrix to (5, 3)."],
      ],
    },
    {
      week: 4,
      title: "Trigonometric equations and the form R cos (x − α)",
      subtopics: ["Graphs and periodicity of trigonometric functions", "Solving trigonometric equations in a given range", "Equations reducible to quadratics", "The expression a cos x + b sin x"],
      objectives: ["Describe the graphs and periods of the trigonometric functions", "Solve trigonometric equations in a given range", "Solve trigonometric equations that reduce to quadratics", "Express a cos x + b sin x in the form R cos (x − α) and use it"],
      lesson: {
        title: "Solving Trigonometric Equations",
        summary: "Solve trigonometric equations and use the form R cos (x − α).",
        minutes: 40,
        notes: `## Graphs and periods
| Function | Period | Range |
|---|---|---|
| $\\sin x$ | $360^\\circ$ | $-1$ to $1$ |
| $\\cos x$ | $360^\\circ$ | $-1$ to $1$ |
| $\\tan x$ | $180^\\circ$ | all real values |
$y = a\\sin bx$ has **amplitude** $a$ and period $\\frac{360^\\circ}{b}$. The greatest value of $3\\sin x$ is 3.
$\\sin x = 0$ at $x = 0^\\circ, 180^\\circ, 360^\\circ$; $\\cos x = 0$ at $x = 90^\\circ, 270^\\circ$.

## Solving basic equations
1. find the **basic (acute) angle** from the positive value of the ratio
2. decide the **quadrants** from the sign (all, sine, tangent, cosine positive in quadrants 1 to 4)
3. write down all solutions in the required range
*Examples for $0^\\circ \\le x \\le 360^\\circ$:*
- $\\cos x = \\frac{1}{2}$: basic angle $60^\\circ$; quadrants 1 and 4: $x = 60^\\circ, 300^\\circ$
- $\\tan x = \\sqrt{3}$: quadrants 1 and 3: $x = 60^\\circ, 240^\\circ$
- $\\sin x = -\\frac{1}{2}$: quadrants 3 and 4: $x = 210^\\circ, 330^\\circ$
- $\\sin x = \\cos x$: $\\tan x = 1$: $x = 45^\\circ, 225^\\circ$

## General solutions
- $\\sin x = \\sin \\alpha$: $x = 180^\\circ n + (-1)^n \\alpha$
- $\\cos x = \\cos \\alpha$: $x = 360^\\circ n \\pm \\alpha$
- $\\tan x = \\tan \\alpha$: $x = 180^\\circ n + \\alpha$

## Multiple angles
For $\\sin 2x = \\frac{1}{2}$ with $0^\\circ \\le x \\le 360^\\circ$, solve for $2x$ between $0^\\circ$ and $720^\\circ$: $2x = 30^\\circ, 150^\\circ, 390^\\circ, 510^\\circ$, so $x = 15^\\circ, 75^\\circ, 195^\\circ, 255^\\circ$.

## Equations reducible to quadratics
*Example:* $2\\sin^2 x - \\sin x - 1 = 0$ factorises as $(2\\sin x + 1)(\\sin x - 1) = 0$.
$\\sin x = 1$ gives $x = 90^\\circ$; $\\sin x = -\\frac{1}{2}$ gives $x = 210^\\circ, 330^\\circ$.
### Using identities
Replace $\\cos^2 x$ by $1 - \\sin^2 x$ (or the reverse) to get one ratio only:
$2\\cos^2 x + \\sin x = 1$ becomes $2\\sin^2 x - \\sin x - 1 = 0$ — the equation above.
Do **not** divide through by a factor that may be zero — factorise instead: $\\sin 2x = \\sin x$ becomes $\\sin x(2\\cos x - 1) = 0$.

## The expression $a\\cos x + b\\sin x$
It can be written as a single cosine:
$a\\cos x + b\\sin x = R\\cos(x - \\alpha)$
where $R = \\sqrt{a^2 + b^2}$ and $\\tan \\alpha = \\frac{b}{a}$ (with $R > 0$, $\\alpha$ acute for positive $a$, $b$).
(Expanding: $R\\cos \\alpha = a$ and $R\\sin \\alpha = b$.)

*Examples:*
- $3\\sin x + 4\\cos x$: $R = 5$ — maximum value 5, minimum $-5$
- $5\\cos x + 12\\sin x$: $R = 13$
- $\\sqrt{3}\\cos x + \\sin x$: $R = 2$, $\\tan \\alpha = \\frac{1}{\\sqrt{3}}$, $\\alpha = 30^\\circ$: $2\\cos(x - 30^\\circ)$

### Maximum and minimum
$R\\cos(x - \\alpha)$ has maximum $R$ (when $x = \\alpha$) and minimum $-R$.

### Solving $a\\cos x + b\\sin x = c$
$\\sqrt{3}\\cos x + \\sin x = 1$ becomes $2\\cos(x - 30^\\circ) = 1$, so $\\cos(x - 30^\\circ) = \\frac{1}{2}$:
$x - 30^\\circ = 60^\\circ$ or $-60^\\circ$ (that is, $300^\\circ$), giving $x = 90^\\circ$ or $330^\\circ$.
Check: at $x = 90^\\circ$, $0 + 1 = 1$.
There are solutions only if $|c| \\le R$.

## Applications
alternating currents, waves, tides and simple harmonic motion are all described by such expressions.`,
        examples: `**Example 1.** Solve $\\sin x = \\frac{\\sqrt{3}}{2}$ for $0^\\circ \\le x \\le 360^\\circ$. *Solution:* $x = 60^\\circ, 120^\\circ$.

**Example 2.** Find the maximum value of $8\\cos x + 6\\sin x$. *Solution:* $R = \\sqrt{64 + 36} = 10$.

**Example 3.** Solve $2\\cos^2 x - \\cos x = 0$ for $0^\\circ \\le x \\le 360^\\circ$. *Solution:* $\\cos x = 0$ or $\\frac{1}{2}$: $x = 60^\\circ, 90^\\circ, 270^\\circ, 300^\\circ$.`,
      },
      questions: [
        ["E", "The period of the function $y = \\sin x$ is", "$360^\\circ$", "$180^\\circ$", "$90^\\circ$", "$720^\\circ$", "The graph repeats after one full turn."],
        ["E", "The greatest value of $3\\sin x$ is", "3", "1", "$-3$", "6", "sin x has a greatest value of 1."],
        ["E", "The values of $x$ between $0^\\circ$ and $360^\\circ$ inclusive for which $\\sin x = 0$ are", "$0^\\circ, 180^\\circ, 360^\\circ$", "$90^\\circ, 270^\\circ$", "$0^\\circ, 90^\\circ, 180^\\circ$", "$45^\\circ, 225^\\circ$", "The sine graph crosses the axis at these angles."],
        ["M", "The solutions of $\\cos x = \\frac{1}{2}$ for $0^\\circ \\le x \\le 360^\\circ$ are", "$60^\\circ$ and $300^\\circ$", "$60^\\circ$ and $120^\\circ$", "$30^\\circ$ and $330^\\circ$", "$60^\\circ$ and $240^\\circ$", "Cosine is positive in the first and fourth quadrants."],
        ["M", "The solutions of $\\tan x = \\sqrt{3}$ for $0^\\circ \\le x \\le 360^\\circ$ are", "$60^\\circ$ and $240^\\circ$", "$60^\\circ$ and $120^\\circ$", "$30^\\circ$ and $210^\\circ$", "$60^\\circ$ and $300^\\circ$", "Tangent is positive in the first and third quadrants."],
        ["M", "The maximum value of $3\\sin x + 4\\cos x$ is", "5", "7", "12", "1", "R is the square root of 9 + 16."],
        ["M", "If $5\\cos x + 12\\sin x = R\\cos(x - \\alpha)$ with $R > 0$, the value of $R$ is", "13", "17", "7", "60", "The square root of 25 + 144."],
        ["H", "The solutions of $2\\sin^2 x - \\sin x - 1 = 0$ for $0^\\circ \\le x \\le 360^\\circ$ are", "$90^\\circ, 210^\\circ, 330^\\circ$", "$90^\\circ, 30^\\circ, 150^\\circ$", "$270^\\circ, 30^\\circ, 150^\\circ$", "$90^\\circ, 210^\\circ$", "sin x = 1 or sin x = −½."],
        ["H", "The expression $\\sqrt{3}\\cos x + \\sin x$ written in the form $R\\cos(x - \\alpha)$ is", "$2\\cos(x - 30^\\circ)$", "$2\\cos(x - 60^\\circ)$", "$4\\cos(x - 30^\\circ)$", "$\\sqrt{2}\\cos(x - 45^\\circ)$", "R = 2 and tan α = 1 ÷ root 3."],
        ["H", "The solutions of $\\sqrt{3}\\cos x + \\sin x = 1$ for $0^\\circ \\le x \\le 360^\\circ$ are", "$90^\\circ$ and $330^\\circ$", "$30^\\circ$ and $90^\\circ$", "$60^\\circ$ and $300^\\circ$", "$90^\\circ$ and $270^\\circ$", "2 cos(x − 30°) = 1 gives x − 30° = ±60°."],
      ],
    },
    {
      week: 5,
      title: "Further techniques of integration",
      subtopics: ["Integrals of exponential and reciprocal functions", "Integration by substitution", "Integration by parts", "Integration using partial fractions"],
      objectives: ["Integrate exponential and reciprocal functions", "Integrate by substitution", "Integrate by parts", "Integrate rational functions using partial fractions"],
      lesson: {
        title: "More Ways to Integrate",
        summary: "Integrate by substitution, by parts and by partial fractions.",
        minutes: 40,
        notes: `## Further standard integrals
- $\\int e^x \\, dx = e^x + C$
- $\\int e^{ax} \\, dx = \\frac{1}{a}e^{ax} + C$ — so $\\int e^{3x} \\, dx = \\frac{1}{3}e^{3x} + C$
- $\\int \\frac{1}{x} \\, dx = \\ln |x| + C$
- $\\int \\frac{1}{ax + b} \\, dx = \\frac{1}{a}\\ln |ax + b| + C$ — so $\\int \\frac{1}{x + 2} \\, dx = \\ln |x + 2| + C$
- $\\int \\sin ax \\, dx = -\\frac{1}{a}\\cos ax + C$; $\\int \\cos ax \\, dx = \\frac{1}{a}\\sin ax + C$

## A useful pattern
When the numerator is the **derivative of the denominator**:
$\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln |f(x)| + C$
*Example:* $\\int \\frac{2x}{x^2 + 1} \\, dx = \\ln (x^2 + 1) + C$.
*Example:* $\\int \\tan x \\, dx = \\int \\frac{\\sin x}{\\cos x} \\, dx = -\\ln |\\cos x| + C$.

## Integration by substitution
Choose $u$ to be an "inside" function whose derivative also appears.
*Example:* $\\int x\\sqrt{x^2 + 1} \\, dx$: let $u = x^2 + 1$, $du = 2x \\, dx$:
$\\frac{1}{2}\\int u^{\\frac{1}{2}} \\, du = \\frac{1}{3}(x^2 + 1)^{\\frac{3}{2}} + C$
*Example:* $\\int \\sin^2 x \\cos x \\, dx$: let $u = \\sin x$: $\\frac{1}{3}\\sin^3 x + C$.
For definite integrals, **change the limits** to the corresponding values of $u$.

### Using identities
$\\int \\sin^2 x \\, dx = \\int \\frac{1}{2}(1 - \\cos 2x) \\, dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$

## Integration by parts
For a product of two different kinds of function:
$\\int u \\, dv = uv - \\int v \\, du$
Choose as $u$ the function that becomes **simpler when differentiated** — in the order: logarithmic, algebraic, trigonometric, exponential.

*Example 1:* $\\int xe^x \\, dx$: $u = x$, $dv = e^x \\, dx$; $du = dx$, $v = e^x$:
$xe^x - \\int e^x \\, dx = xe^x - e^x + C$
Hence $\\int_0^1 xe^x \\, dx = [xe^x - e^x]_0^1 = 0 - (-1) = 1$.

*Example 2:* $\\int x\\cos x \\, dx$: $u = x$, $dv = \\cos x \\, dx$; $v = \\sin x$:
$x\\sin x - \\int \\sin x \\, dx = x\\sin x + \\cos x + C$

*Example 3:* $\\int \\ln x \\, dx$: $u = \\ln x$, $dv = dx$; $du = \\frac{1}{x}dx$, $v = x$:
$x\\ln x - \\int 1 \\, dx = x\\ln x - x + C$

Sometimes the rule must be applied twice, as for $\\int x^2 e^x \\, dx$.

## Integration using partial fractions
Resolve the rational function first, then integrate each part as a logarithm.
*Example:* $\\frac{1}{x(x + 1)} = \\frac{1}{x} - \\frac{1}{x + 1}$, so
$\\int \\frac{1}{x(x + 1)} \\, dx = \\ln |x| - \\ln |x + 1| + C = \\ln \\left|\\frac{x}{x + 1}\\right| + C$
*Example:* $\\int \\frac{5x + 1}{(x - 1)(x + 2)} \\, dx = 2\\ln |x - 1| + 3\\ln |x + 2| + C$.

## Choosing a method
1. is it a standard integral, or can it be simplified to one?
2. is the numerator the derivative of the denominator, or is there an inside function with its derivative present? — **substitution**
3. is it a product of unlike functions? — **parts**
4. is it a rational function with a factorisable denominator? — **partial fractions**

Always check by differentiating the answer.`,
        examples: `**Example 1.** Find $\\int e^{2x} \\, dx$. *Solution:* $\\frac{1}{2}e^{2x} + C$.

**Example 2.** Find $\\int \\frac{3}{3x - 1} \\, dx$. *Solution:* $\\ln |3x - 1| + C$.

**Example 3.** Find $\\int x\\sin x \\, dx$. *Solution:* $u = x$, $v = -\\cos x$: $-x\\cos x + \\sin x + C$.`,
      },
      questions: [
        ["E", "The formula for integration by parts is", "$\\int u \\, dv = uv - \\int v \\, du$", "$\\int u \\, dv = uv + \\int v \\, du$", "$\\int u \\, dv = \\int u \\, du \\int v \\, dv$", "$\\int u \\, dv = u\\frac{dv}{dx} + v\\frac{du}{dx}$", "It comes from the product rule for differentiation."],
        ["E", "Find $\\int e^x \\, dx$.", "$e^x + C$", "$xe^{x-1} + C$", "$\\frac{e^{x+1}}{x + 1} + C$", "$\\ln x + C$", "The exponential function is its own integral."],
        ["E", "Find $\\int \\frac{1}{x} \\, dx$ for $x > 0$.", "$\\ln x + C$", "$-\\frac{1}{x^2} + C$", "$x^0 + C$", "$\\frac{1}{x^2} + C$", "The power rule fails when the index is −1."],
        ["M", "Find $\\int xe^x \\, dx$.", "$xe^x - e^x + C$", "$xe^x + e^x + C$", "$\\frac{x^2}{2}e^x + C$", "$xe^x + C$", "Integrate by parts with u = x."],
        ["M", "Find $\\int \\frac{1}{x + 2} \\, dx$ for $x > -2$.", "$\\ln (x + 2) + C$", "$-\\frac{1}{(x + 2)^2} + C$", "$\\frac{1}{2}\\ln x + C$", "$\\ln x + \\ln 2 + C$", "It is the reciprocal of a linear function with coefficient 1."],
        ["M", "Find $\\int e^{3x} \\, dx$.", "$\\frac{1}{3}e^{3x} + C$", "$3e^{3x} + C$", "$e^{3x} + C$", "$\\frac{1}{3x}e^{3x} + C$", "Divide by the coefficient of x."],
        ["M", "Find $\\int \\frac{2x}{x^2 + 1} \\, dx$.", "$\\ln (x^2 + 1) + C$", "$2\\ln x + C$", "$\\frac{x^2}{x^2 + 1} + C$", "$\\frac{1}{x^2 + 1} + C$", "The numerator is the derivative of the denominator."],
        ["H", "Find $\\int x\\cos x \\, dx$.", "$x\\sin x + \\cos x + C$", "$x\\sin x - \\cos x + C$", "$\\frac{x^2}{2}\\sin x + C$", "$-x\\sin x + \\cos x + C$", "By parts: x sin x minus the integral of sin x."],
        ["H", "Find $\\int \\ln x \\, dx$.", "$x\\ln x - x + C$", "$\\frac{1}{x} + C$", "$x\\ln x + x + C$", "$\\frac{(\\ln x)^2}{2} + C$", "Take u = ln x and dv = dx."],
        ["H", "Find $\\int \\frac{1}{x(x + 1)} \\, dx$ for $x > 0$.", "$\\ln \\frac{x}{x + 1} + C$", "$\\ln x(x + 1) + C$", "$\\ln \\frac{x + 1}{x} + C$", "$-\\frac{1}{x^2(x + 1)^2} + C$", "Use the partial fractions 1/x − 1/(x + 1)."],
      ],
    },
  ],
};
