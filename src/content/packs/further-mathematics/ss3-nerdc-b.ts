import type { PackTopic } from "../types";

/** SS3 Further Mathematics — NERDC 2025 second-term topics (weeks are set in ss3.ts). */
type Topic = Omit<PackTopic, "week">;

export const integrationApplied: Topic = {
  title: "Integration: Definite Integrals, Kinematics and Area",
  subtopics: ["Integration as the reverse of differentiation", "Integration of polynomials and of 1/x", "Definite integrals", "Applications to kinematics and area under a curve"],
  objectives: ["Integrate algebraic polynomials and functions giving logarithms", "Evaluate definite integrals", "Apply integration to velocity-time and displacement-time problems", "Find the area under a curve and between curves"],
  lesson: {
    title: "Integration and Its Uses",
    summary: "Reversing differentiation, evaluating integrals between limits, and using them for motion and area.",
    minutes: 80,
    notes: `## Integration as the reverse of differentiation
If $\\dfrac{dy}{dx} = f(x)$ then $y = \\displaystyle\\int f(x)\\,dx$.

$$\\int ax^n\\,dx = \\frac{ax^{n+1}}{n + 1} + C \\quad (n \\ne -1)$$

Integrate term by term: $\\displaystyle\\int (6x^2 - 4x + 5)\\,dx = 2x^3 - 2x^2 + 5x + C$.

The constant $C$ is found from a given condition.

### The case $n = -1$
$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C, \\qquad \\int \\frac{f'(x)}{f(x)}\\,dx = \\ln|f(x)| + C$$
So $\\displaystyle\\int \\frac{2x}{x^2 + 1}\\,dx = \\ln(x^2 + 1) + C$.

## Definite integrals
$$\\int_a^b f(x)\\,dx = \\big[F(x)\\big]_a^b = F(b) - F(a)$$
No constant is needed.

$\\displaystyle\\int_1^3 (2x + 1)\\,dx = \\big[x^2 + x\\big]_1^3 = 12 - 2 = 10$.

$\\displaystyle\\int_1^e \\frac{2}{x}\\,dx = \\big[2\\ln x\\big]_1^e = 2$.

### Properties
- $\\displaystyle\\int_a^b f = -\\int_b^a f$
- $\\displaystyle\\int_a^b f + \\int_b^c f = \\int_a^c f$

## Kinematics
For motion in a straight line with displacement $s$, velocity $v$ and acceleration $a$:
$$v = \\frac{ds}{dt}, \\quad a = \\frac{dv}{dt}; \\qquad v = \\int a\\,dt, \\quad s = \\int v\\,dt$$

- The **area under a velocity–time graph** is the **displacement**.
- The **gradient of a displacement–time graph** is the **velocity**.
- A particle is **at rest** when $v = 0$.

*A particle has $v = 3t^2 + 2t$ m/s. Find the distance travelled in the first 2 s.*
$s = \\big[t^3 + t^2\\big]_0^2 = 12$ m.

*$a = 6t$ and $v = 2$ when $t = 0$.* $v = 3t^2 + 2$; at $t = 3$, $v = 29$ m/s.

If the velocity changes sign in the interval, integrate each part separately to obtain the **total distance**.

## Area under a curve
The area between $y = f(x)$, the $x$-axis and the lines $x = a$, $x = b$ is
$$A = \\int_a^b y\\,dx$$
Area below the axis comes out **negative**; take its magnitude.

*Area under $y = x^2$ from 0 to 3:* $\\big[\\tfrac{x^3}{3}\\big]_0^3 = 9$.

*Area enclosed by $y = 4 - x^2$ and the $x$-axis:* the curve meets the axis at $x = \\pm 2$;
$\\displaystyle\\int_{-2}^{2}(4 - x^2)\\,dx = \\big[4x - \\tfrac{x^3}{3}\\big]_{-2}^{2} = \\tfrac{32}{3}$.

### Area between two curves
$$A = \\int_a^b (y_{\\text{upper}} - y_{\\text{lower}})\\,dx$$
*Between $y = x$ and $y = x^2$:* they meet at $x = 0, 1$; $\\displaystyle\\int_0^1 (x - x^2)\\,dx = \\tfrac12 - \\tfrac13 = \\tfrac16$.`,
    examples: `**Example 1.** Evaluate $\\displaystyle\\int_0^2 3x^2\\,dx$. *Solution:* $\\big[x^3\\big]_0^2 = \\mathbf{8}$.

**Example 2.** A particle moves with $v = 12 - 3t^2$. Find the distance travelled before it comes to rest. *Solution:* rest at $t = 2$; $\\big[12t - t^3\\big]_0^2 = \\mathbf{16}$ **m**.

**Example 3.** Find $\\displaystyle\\int \\frac{3}{x}\\,dx$. *Solution:* $\\mathbf{3\\ln|x| + C}$.`,
  },
  questions: [
    ["E", "Find $\\displaystyle\\int (6x^2 - 4x)\\,dx$.", "$2x^3 - 2x^2 + C$", "$12x - 4 + C$", "$3x^3 - 4x^2 + C$", "$2x^3 - 4x^2 + C$", "Raise each power by one and divide by the new power."],
    ["E", "Evaluate $\\displaystyle\\int_0^2 3x^2\\,dx$.", "8", "12", "6", "4", "$[x^3]_0^2 = 8$."],
    ["E", "If $v$ is the velocity of a particle at time $t$, then $\\displaystyle\\int v\\,dt$ gives its", "displacement", "acceleration", "speed squared", "momentum", "Integrating velocity with respect to time gives displacement."],
    ["M", "Evaluate $\\displaystyle\\int_1^3 (2x + 1)\\,dx$.", "10", "12", "8", "14", "$[x^2 + x]_1^3 = 12 - 2 = 10$."],
    ["M", "A particle moves with velocity $v = 3t^2 + 2t$ m/s. The distance it covers in the first 2 seconds is", "12 m", "16 m", "14 m", "8 m", "$[t^3 + t^2]_0^2 = 12$."],
    ["M", "The area under the curve $y = x^2$ from $x = 0$ to $x = 3$ is", "9", "27", "3", "6", "$[\\frac{x^3}{3}]_0^3 = 9$."],
    ["M", "A particle has acceleration $a = 6t$ and velocity 2 m/s when $t = 0$. Its velocity when $t = 3$ is", "29 m/s", "27 m/s", "20 m/s", "56 m/s", "$v = 3t^2 + 2 = 29$."],
    ["H", "The area enclosed by the curve $y = 4 - x^2$ and the $x$-axis is", "$\\frac{32}{3}$", "$\\frac{16}{3}$", "16", "8", "$[4x - \\frac{x^3}{3}]_{-2}^{2} = \\frac{32}{3}$."],
    ["H", "Evaluate $\\displaystyle\\int_1^e \\frac{2}{x}\\,dx$.", "2", "$2e$", "1", "$e - 1$", "$[2\\ln x]_1^e = 2$."],
    ["H", "A particle moves with velocity $v = 12 - 3t^2$ m/s. The distance travelled from $t = 0$ until it comes to rest is", "16 m", "24 m", "12 m", "8 m", "Rest at $t = 2$; $[12t - t^3]_0^2 = 16$."],
  ],
  jamb: [
    ["M", "Evaluate $\\displaystyle\\int_0^1 (4x^3 - 2x)\\,dx$.", "0", "1", "2", "$-1$", "$[x^4 - x^2]_0^1 = 0$."],
    ["H", "The area enclosed between the line $y = x$ and the curve $y = x^2$ is", "$\\frac16$", "$\\frac13$", "$\\frac12$", "$\\frac56$", "$\\int_0^1 (x - x^2)\\,dx = \\frac12 - \\frac13$."],
  ],
};

export const trapezoidalVolume: Topic = {
  title: "Trapezoidal Rule and Volumes of Solids of Revolution",
  subtopics: ["The trapezoidal rule", "Accuracy of the rule", "Volume of revolution about the x-axis", "Volume of revolution about the y-axis"],
  objectives: ["Estimate a definite integral with the trapezoidal rule", "Explain when the rule overestimates or underestimates", "Find the volume generated when a region is rotated about the x-axis", "Find the volume generated by rotation about the y-axis"],
  lesson: {
    title: "Approximate Areas and Volumes of Revolution",
    summary: "A numerical method for areas, and the use of integration to find volumes of rotated regions.",
    minutes: 40,
    notes: `## The trapezoidal rule
When an integral cannot be found exactly, or only a table of values is known, the area is divided into $n$ **strips of equal width** $h$, each treated as a trapezium.

$$\\int_a^b y\\,dx \\approx \\frac{h}{2}\\big[y_0 + y_n + 2(y_1 + y_2 + \\dots + y_{n-1})\\big], \\qquad h = \\frac{b - a}{n}$$

In words: half the width × (first + last + twice the sum of the others).

- $n$ strips need $n + 1$ **ordinates**.

*Ordinates 2, 3, 5, 8, 12 at intervals of 0.5:*
$\\dfrac{0.5}{2}\\big[2 + 12 + 2(3 + 5 + 8)\\big] = 0.25 \\times 46 = 11.5$.

*Estimate $\\displaystyle\\int_0^2 x^2\\,dx$ with 4 strips:* $h = 0.5$; ordinates $0, 0.25, 1, 2.25, 4$;
$0.25\\big[0 + 4 + 2(3.5)\\big] = 2.75$ (exact value $2.667$).

### Accuracy
- More strips give a better estimate.
- If the curve is **concave upwards** (bends upward), the chords lie above it and the rule **overestimates**.
- If the curve is **concave downwards**, it **underestimates**.
- It is exact for straight lines.

## Volumes of solids of revolution
When the region under $y = f(x)$ between $x = a$ and $x = b$ is rotated through $360°$ about the **x-axis**, each thin strip sweeps out a disc of radius $y$ and thickness $dx$:
$$V = \\pi\\int_a^b y^2\\,dx$$

Rotation about the **y-axis** between $y = c$ and $y = d$:
$$V = \\pi\\int_c^d x^2\\,dy$$

### Examples
*$y = x$ from 0 to 3 about the x-axis (a cone):* $\\pi\\displaystyle\\int_0^3 x^2\\,dx = 9\\pi$. Check: $\\tfrac13\\pi r^2h = \\tfrac13\\pi(9)(3) = 9\\pi$.

*$y = 2$ from 0 to 5 (a cylinder):* $\\pi \\times 4 \\times 5 = 20\\pi$.

*$y = x^2$ from 0 to 2:* $\\pi\\displaystyle\\int_0^2 x^4\\,dx = \\dfrac{32\\pi}{5}$.

*$y = \\sqrt{x}$ from 0 to 4:* $\\pi\\displaystyle\\int_0^4 x\\,dx = 8\\pi$.

*$y = x^2$ about the y-axis from $y = 0$ to $y = 4$:* $x^2 = y$; $\\pi\\displaystyle\\int_0^4 y\\,dy = 8\\pi$.

### Region between two curves
$$V = \\pi\\int_a^b (y_1^2 - y_2^2)\\,dx$$
(not $\\pi\\int (y_1 - y_2)^2$).

### The sphere
Rotating $x^2 + y^2 = r^2$ about the x-axis: $V = \\pi\\displaystyle\\int_{-r}^{r}(r^2 - x^2)\\,dx = \\tfrac43\\pi r^3$.`,
    examples: `**Example 1.** Use the trapezoidal rule with ordinates 1, 4, 9 at unit intervals. *Solution:* $\\tfrac12[1 + 9 + 2(4)] = \\mathbf{9}$.

**Example 2.** Find the volume generated when $y = 3x$, from $x = 0$ to $x = 1$, is rotated about the x-axis. *Solution:* $\\pi\\int_0^1 9x^2\\,dx = \\mathbf{3\\pi}$.

**Example 3.** How many strips correspond to 7 ordinates? *Solution:* $\\mathbf{6}$.`,
  },
  questions: [
    ["E", "The volume generated when the region under $y = f(x)$ is rotated completely about the $x$-axis is", "$\\pi\\int y^2\\,dx$", "$\\int y\\,dx$", "$2\\pi\\int y\\,dx$", "$\\pi\\int y\\,dx$", "Each strip sweeps out a disc of area $\\pi y^2$."],
    ["E", "The trapezoidal rule is used to approximate", "the area under a curve", "the gradient of a curve", "the roots of an equation", "the length of a chord", "It estimates a definite integral."],
    ["E", "Five equally spaced ordinates divide an area into", "4 strips", "5 strips", "6 strips", "3 strips", "$n$ strips need $n + 1$ ordinates."],
    ["M", "Using the trapezoidal rule with ordinates 1, 4 and 9 at unit intervals, the area is approximately", "9", "14", "7", "18", "$\\frac12[1 + 9 + 2(4)] = 9$."],
    ["M", "The volume generated when the line $y = x$, from $x = 0$ to $x = 3$, is rotated about the $x$-axis is", "$9\\pi$", "$27\\pi$", "$3\\pi$", "$\\frac92\\pi$", "$\\pi[\\frac{x^3}{3}]_0^3 = 9\\pi$."],
    ["M", "Ordinates 2, 3, 5, 8 and 12 are taken at intervals of 0.5. The trapezoidal estimate of the area is", "11.5", "23", "15", "7.5", "$0.25[2 + 12 + 2(16)] = 11.5$."],
    ["M", "The volume generated when the line $y = 2$, from $x = 0$ to $x = 5$, is rotated about the $x$-axis is", "$20\\pi$", "$10\\pi$", "$50\\pi$", "$4\\pi$", "A cylinder of radius 2 and height 5."],
    ["H", "The volume generated when the curve $y = x^2$, from $x = 0$ to $x = 2$, is rotated about the $x$-axis is", "$\\frac{32\\pi}{5}$", "$\\frac{8\\pi}{3}$", "$16\\pi$", "$\\frac{16\\pi}{5}$", "$\\pi[\\frac{x^5}{5}]_0^2 = \\frac{32\\pi}{5}$."],
    ["H", "The trapezoidal estimate of $\\displaystyle\\int_0^2 x^2\\,dx$ using 4 strips is", "2.75", "2.67", "3.00", "2.50", "$0.25[0 + 4 + 2(0.25 + 1 + 2.25)] = 2.75$."],
    ["H", "The volume generated when the curve $y = \\sqrt{x}$, from $x = 0$ to $x = 4$, is rotated about the $x$-axis is", "$8\\pi$", "$4\\pi$", "$16\\pi$", "$\\frac{16\\pi}{3}$", "$\\pi\\int_0^4 x\\,dx = 8\\pi$."],
  ],
  jamb: [
    ["M", "The trapezoidal rule overestimates the area under a curve that is", "concave upwards", "concave downwards", "a straight line", "below the axis only", "The chords then lie above the curve."],
    ["H", "The volume generated when the line $y = 3x$, from $x = 0$ to $x = 1$, is rotated about the $x$-axis is", "$3\\pi$", "$9\\pi$", "$\\frac32\\pi$", "$\\pi$", "$\\pi\\int_0^1 9x^2\\,dx = 3\\pi$."],
  ],
};

export const conics: Topic = {
  title: "Conic Sections: Parabola, Ellipse and Hyperbola",
  subtopics: ["Definition of conics by focus, directrix and eccentricity", "The parabola", "The ellipse", "The hyperbola"],
  objectives: ["Define a conic in terms of focus, directrix and eccentricity", "State the equation and properties of the parabola", "State the equation and properties of the ellipse", "State the equation and properties of the hyperbola"],
  lesson: {
    title: "The Three Conics in Cartesian Form",
    summary: "The standard equations of the parabola, ellipse and hyperbola, with their foci, directrices and eccentricities.",
    minutes: 40,
    notes: `## Definition
A **conic** is the locus of a point $P$ which moves so that its distance from a fixed point (the **focus** $S$) bears a constant ratio $e$ (the **eccentricity**) to its distance from a fixed line (the **directrix**): $SP = e \\cdot PM$.

| Value of $e$ | Conic |
|---|---|
| $e = 1$ | parabola |
| $0 < e < 1$ | ellipse |
| $e > 1$ | hyperbola |
| $e = 0$ | circle (limiting case) |

## The parabola
$$y^2 = 4ax$$
- vertex $(0, 0)$; **focus** $(a, 0)$; **directrix** $x = -a$
- axis of symmetry: the x-axis
- **latus rectum** (chord through the focus perpendicular to the axis) has length $4a$

For $y^2 = 12x$: $a = 3$; focus $(3, 0)$; directrix $x = -3$.

Other forms: $x^2 = 4ay$ (focus $(0, a)$, directrix $y = -a$); $y^2 = -4ax$ opens to the left.
With vertex $(h, k)$: $(y - k)^2 = 4a(x - h)$.

## The ellipse
$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (a > b)$$
- centre $(0, 0)$; **major axis** $2a$ along the x-axis; **minor axis** $2b$
- $b^2 = a^2(1 - e^2)$, so $e = \\sqrt{1 - \\dfrac{b^2}{a^2}}$
- **foci** $(\\pm ae, 0)$; **directrices** $x = \\pm\\dfrac{a}{e}$
- latus rectum $\\dfrac{2b^2}{a}$
- the sum of the focal distances of any point is $2a$

For $\\dfrac{x^2}{25} + \\dfrac{y^2}{9} = 1$: $a = 5$, $b = 3$, $e = \\dfrac45$, foci $(\\pm 4, 0)$.

## The hyperbola
$$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$$
- two branches; vertices $(\\pm a, 0)$
- $b^2 = a^2(e^2 - 1)$, so $e = \\sqrt{1 + \\dfrac{b^2}{a^2}}$
- **foci** $(\\pm ae, 0)$; **directrices** $x = \\pm\\dfrac{a}{e}$
- **asymptotes** $y = \\pm\\dfrac{b}{a}x$
- the difference of the focal distances is $2a$

For $\\dfrac{x^2}{16} - \\dfrac{y^2}{9} = 1$: $e = \\dfrac54$; foci $(\\pm 5, 0)$; asymptotes $y = \\pm\\dfrac34x$.

A **rectangular hyperbola** has $a = b$, $e = \\sqrt2$ and perpendicular asymptotes; referred to its asymptotes its equation is $xy = c^2$.

## Recognising a conic from its equation
- only one variable squared → parabola
- $x^2$ and $y^2$ with the **same sign**, different coefficients → ellipse (equal coefficients → circle)
- $x^2$ and $y^2$ with **opposite signs** → hyperbola

Reduce to standard form by dividing through and, where necessary, completing the square.
$4x^2 + 9y^2 = 36 \\Rightarrow \\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$.
$y^2 - 4y - 8x + 12 = 0 \\Rightarrow (y - 2)^2 = 8(x - 1)$ — a parabola with vertex $(1, 2)$.`,
    examples: `**Example 1.** Find the focus and directrix of $y^2 = 20x$. *Solution:* $a = 5$; focus $\\mathbf{(5, 0)}$; directrix $\\mathbf{x = -5}$.

**Example 2.** Find the eccentricity of $\\dfrac{x^2}{25} + \\dfrac{y^2}{16} = 1$. *Solution:* $\\sqrt{1 - \\tfrac{16}{25}} = \\mathbf{\\tfrac35}$.

**Example 3.** State the asymptotes of $\\dfrac{x^2}{9} - \\dfrac{y^2}{16} = 1$. *Solution:* $\\mathbf{y = \\pm\\tfrac43x}$.`,
  },
  questions: [
    ["E", "The length of the latus rectum of the parabola $y^2 = 4ax$ is", "$4a$", "$2a$", "$a$", "$8a$", "The chord through the focus perpendicular to the axis has length $4a$."],
    ["E", "The focus of the parabola $y^2 = 12x$ is", "$(3, 0)$", "$(0, 3)$", "$(12, 0)$", "$(-3, 0)$", "$4a = 12$ gives $a = 3$."],
    ["E", "A conic whose eccentricity is greater than 1 is", "a hyperbola", "an ellipse", "a parabola", "a circle", "An ellipse has $e < 1$."],
    ["M", "The directrix of the parabola $y^2 = 20x$ is", "$x = -5$", "$x = 5$", "$y = -5$", "$x = -20$", "$a = 5$, so the directrix is $x = -a$."],
    ["M", "The eccentricity of the ellipse $\\dfrac{x^2}{25} + \\dfrac{y^2}{9} = 1$ is", "$\\frac45$", "$\\frac35$", "$\\frac34$", "$\\frac{16}{25}$", "$\\sqrt{1 - \\frac{9}{25}} = \\frac45$."],
    ["M", "The foci of the ellipse $\\dfrac{x^2}{25} + \\dfrac{y^2}{16} = 1$ are", "$(\\pm 3, 0)$", "$(\\pm 4, 0)$", "$(\\pm 5, 0)$", "$(0, \\pm 3)$", "$e = \\frac35$ and $ae = 3$."],
    ["M", "The asymptotes of the hyperbola $\\dfrac{x^2}{9} - \\dfrac{y^2}{16} = 1$ are", "$y = \\pm\\frac43x$", "$y = \\pm\\frac34x$", "$y = \\pm\\frac{16}{9}x$", "$y = \\pm 4x$", "$y = \\pm\\frac{b}{a}x$ with $a = 3$, $b = 4$."],
    ["H", "The eccentricity of the hyperbola $\\dfrac{x^2}{16} - \\dfrac{y^2}{9} = 1$ is", "$\\frac54$", "$\\frac53$", "$\\frac34$", "$\\frac{\\sqrt7}{4}$", "$\\sqrt{1 + \\frac{9}{16}} = \\frac54$."],
    ["H", "The equation of the parabola with focus $(0, 2)$ and directrix $y = -2$ is", "$x^2 = 8y$", "$y^2 = 8x$", "$x^2 = 2y$", "$x^2 = -8y$", "$a = 2$ in $x^2 = 4ay$."],
    ["H", "The length of the latus rectum of the ellipse $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$ is", "$\\frac83$", "$\\frac43$", "$\\frac92$", "4", "$\\frac{2b^2}{a} = \\frac{8}{3}$."],
  ],
  jamb: [
    ["M", "The length of the major axis of the ellipse $4x^2 + 9y^2 = 36$ is", "6", "4", "9", "3", "Standard form $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ gives $2a = 6$."],
    ["H", "The vertex of the parabola $y^2 - 4y - 8x + 12 = 0$ is", "$(1, 2)$", "$(2, 1)$", "$(-1, 2)$", "$(1, -2)$", "Completing the square gives $(y - 2)^2 = 8(x - 1)$."],
  ],
};

export const parametricConics: Topic = {
  title: "Parametric Equations of Conic Sections",
  subtopics: ["Meaning of a parameter", "Parametric equations of the parabola, ellipse and hyperbola", "Converting between parametric and Cartesian forms", "Gradients, tangents and normals in parametric form"],
  objectives: ["Explain parametric representation of a curve", "State the parametric equations of the conics", "Convert parametric equations to Cartesian form", "Find gradients and equations of tangents using parameters"],
  lesson: {
    title: "Conics in Parametric Form",
    summary: "Describing each conic by a single parameter, and using the parameter to find tangents and normals.",
    minutes: 40,
    notes: `## Parameters
A curve may be described by expressing $x$ and $y$ each in terms of a **third variable** — a **parameter** ($t$ or $\\theta$). Each value of the parameter gives one point on the curve.

To obtain the **Cartesian equation**, **eliminate the parameter**.

## Standard parametric forms
| Conic | Cartesian equation | Parametric equations |
|---|---|---|
| parabola | $y^2 = 4ax$ | $x = at^2$, $y = 2at$ |
| ellipse | $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$ | $x = a\\cos\\theta$, $y = b\\sin\\theta$ |
| hyperbola | $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$ | $x = a\\sec\\theta$, $y = b\\tan\\theta$ |
| rectangular hyperbola | $xy = c^2$ | $x = ct$, $y = \\dfrac{c}{t}$ |
| circle | $x^2 + y^2 = r^2$ | $x = r\\cos\\theta$, $y = r\\sin\\theta$ |

### Checking
- Parabola: $y^2 = 4a^2t^2 = 4a(at^2) = 4ax$.
- Ellipse: $\\cos^2\\theta + \\sin^2\\theta = 1$.
- Hyperbola: $\\sec^2\\theta - \\tan^2\\theta = 1$.

## Eliminating the parameter
*$x = 2t^2$, $y = 4t$:* $t = \\dfrac{y}{4}$, so $x = \\dfrac{y^2}{8}$, i.e. $y^2 = 8x$.

*$x = 4\\cos\\theta$, $y = 3\\sin\\theta$:* $\\dfrac{x^2}{16} + \\dfrac{y^2}{9} = 1$.

*$x = t + 1$, $y = t^2$:* $y = (x - 1)^2$.

## Gradient in parametric form
$$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$$

- Parabola: $\\dfrac{dy}{dx} = \\dfrac{2a}{2at} = \\dfrac{1}{t}$.
- Ellipse: $\\dfrac{dy}{dx} = -\\dfrac{b\\cos\\theta}{a\\sin\\theta}$.
- Rectangular hyperbola: $\\dfrac{dy}{dx} = -\\dfrac{1}{t^2}$.

## Tangent and normal to the parabola at $(at^2, 2at)$
- **Tangent** (gradient $\\tfrac1t$): $ty = x + at^2$
- **Normal** (gradient $-t$): $y + tx = 2at + at^3$

*Tangent to $y^2 = 4x$ at $t = 2$:* $a = 1$, point $(4, 4)$; $2y = x + 4$.

## Tangent to the ellipse at $(a\\cos\\theta, b\\sin\\theta)$
$$\\frac{x\\cos\\theta}{a} + \\frac{y\\sin\\theta}{b} = 1$$

## Why use parameters?
- One variable describes a point, simplifying algebra on chords, tangents and normals.
- They describe **motion**: the parameter is often time.
- Loci of mid-points and intersections are found by eliminating the parameter.

### The chord joining $t_1$ and $t_2$ on the parabola
Gradient $= \\dfrac{2}{t_1 + t_2}$. For a **focal chord**, $t_1t_2 = -1$.`,
    examples: `**Example 1.** Find the point on $y^2 = 8x$ with parameter $t = 3$. *Solution:* $a = 2$; $(at^2, 2at) = \\mathbf{(18, 12)}$.

**Example 2.** Find the Cartesian equation of $x = 3\\sec\\theta$, $y = 2\\tan\\theta$. *Solution:* $\\mathbf{\\dfrac{x^2}{9} - \\dfrac{y^2}{4} = 1}$.

**Example 3.** Find the gradient of the curve $x = at^2$, $y = 2at$ at $t = 2$. *Solution:* $\\dfrac1t = \\mathbf{\\tfrac12}$.`,
  },
  questions: [
    ["E", "The parametric equations $x = at^2$, $y = 2at$ represent the", "parabola $y^2 = 4ax$", "ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$", "circle $x^2 + y^2 = a^2$", "hyperbola $xy = a^2$", "$y^2 = 4a^2t^2 = 4ax$."],
    ["E", "The parametric equations $x = 5\\cos\\theta$, $y = 3\\sin\\theta$ represent", "an ellipse", "a parabola", "a hyperbola", "a straight line", "$\\frac{x^2}{25} + \\frac{y^2}{9} = 1$."],
    ["E", "In parametric equations, the parameter is", "a third variable in terms of which $x$ and $y$ are expressed", "the gradient of the curve", "the eccentricity", "the constant of integration", "Each value of the parameter gives a point on the curve."],
    ["M", "Eliminate $t$ from $x = 2t^2$, $y = 4t$.", "$y^2 = 8x$", "$y^2 = 4x$", "$y = 8x^2$", "$y^2 = 2x$", "$t = \\frac{y}{4}$ gives $x = \\frac{y^2}{8}$."],
    ["M", "The gradient of the curve $x = at^2$, $y = 2at$ at the point where $t = 2$ is", "$\\frac12$", "2", "$\\frac14$", "4", "$\\frac{dy}{dx} = \\frac1t$."],
    ["M", "The Cartesian equation of the curve $x = 4\\cos\\theta$, $y = 3\\sin\\theta$ is", "$\\frac{x^2}{16} + \\frac{y^2}{9} = 1$", "$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$", "$\\frac{x^2}{4} + \\frac{y^2}{3} = 1$", "$x^2 + y^2 = 25$", "Use $\\cos^2\\theta + \\sin^2\\theta = 1$."],
    ["M", "The point on the parabola $y^2 = 8x$ with parameter $t = 3$ is", "$(18, 12)$", "$(9, 6)$", "$(12, 18)$", "$(36, 24)$", "$a = 2$: $(at^2, 2at) = (18, 12)$."],
    ["H", "The Cartesian equation of the curve $x = 3\\sec\\theta$, $y = 2\\tan\\theta$ is", "$\\frac{x^2}{9} - \\frac{y^2}{4} = 1$", "$\\frac{x^2}{9} + \\frac{y^2}{4} = 1$", "$\\frac{x^2}{4} - \\frac{y^2}{9} = 1$", "$xy = 6$", "Use $\\sec^2\\theta - \\tan^2\\theta = 1$."],
    ["H", "The equation of the tangent to the parabola $y^2 = 4x$ at the point with parameter $t = 2$ is", "$2y = x + 4$", "$y = 2x + 4$", "$2y = x - 4$", "$y + 2x = 12$", "$ty = x + at^2$ with $a = 1$."],
    ["H", "For the curve $x = ct$, $y = \\dfrac{c}{t}$, $\\dfrac{dy}{dx}$ equals", "$-\\dfrac{1}{t^2}$", "$\\dfrac{1}{t^2}$", "$-t^2$", "$-\\dfrac{c}{t}$", "$\\frac{dy}{dt} = -\\frac{c}{t^2}$ and $\\frac{dx}{dt} = c$."],
  ],
  jamb: [
    ["M", "The Cartesian equation of the curve $x = t + 1$, $y = t^2$ is", "$y = (x - 1)^2$", "$y = x^2 + 1$", "$y = (x + 1)^2$", "$y^2 = x - 1$", "$t = x - 1$. Answer: $y = (x - 1)^2$."],
    ["H", "The gradient of the curve $x = 2\\cos\\theta$, $y = 3\\sin\\theta$ at $\\theta = \\dfrac{\\pi}{4}$ is", "$-\\frac32$", "$\\frac32$", "$-\\frac23$", "$\\frac23$", "$\\frac{dy}{dx} = \\frac{3\\cos\\theta}{-2\\sin\\theta} = -\\frac32$ when $\\tan\\theta = 1$."],
  ],
};

export const staticsForces: Topic = {
  title: "Statics: Resolution, Equilibrium and Polygon of Forces",
  subtopics: ["Resultant of two forces", "Resolution of forces", "Two and three forces acting at a point", "Triangle and polygon of forces; Lami's theorem"],
  objectives: ["Find the resultant of two forces acting at a point", "Resolve a force into perpendicular components", "Apply the conditions of equilibrium to forces at a point", "Use the triangle and polygon of forces and Lami's theorem"],
  lesson: {
    title: "Forces Acting at a Point",
    summary: "Combining and resolving forces, and the conditions under which a particle remains at rest.",
    minutes: 40,
    notes: `## Force
A **force** is a vector, measured in **newtons (N)**. **Statics** is the study of bodies at rest under the action of forces. Forces whose lines of action pass through one point are **concurrent**; forces in one plane are **coplanar**.

## Resultant of two forces
The **resultant** is the single force with the same effect. For forces $P$ and $Q$ at an angle $\\theta$:
$$R^2 = P^2 + Q^2 + 2PQ\\cos\\theta, \\qquad \\tan\\alpha = \\frac{Q\\sin\\theta}{P + Q\\cos\\theta}$$
where $\\alpha$ is the angle $R$ makes with $P$ (**parallelogram law**).

- $\\theta = 0°$: $R = P + Q$ (greatest)
- $\\theta = 90°$: $R = \\sqrt{P^2 + Q^2}$
- $\\theta = 180°$: $R = P - Q$ (least)

*6 N and 8 N at right angles:* $R = 10$ N.
*7 N and 8 N at 60°:* $R^2 = 49 + 64 + 56 = 169$; $R = 13$ N.

## Resolution of forces
A force $F$ at an angle $\\theta$ to the horizontal has components
$$F_x = F\\cos\\theta, \\qquad F_y = F\\sin\\theta$$

For several forces: $X = \\sum F\\cos\\theta$, $Y = \\sum F\\sin\\theta$; $R = \\sqrt{X^2 + Y^2}$, $\\tan\\alpha = \\dfrac{Y}{X}$.

In vector form, add components: $(3\\mathbf{i} + 4\\mathbf{j}) + (5\\mathbf{i} - 10\\mathbf{j}) = 8\\mathbf{i} - 6\\mathbf{j}$, magnitude 10 N.

## Equilibrium of a particle
A particle is in **equilibrium** when the **resultant force is zero**:
$$\\sum X = 0 \\quad \\text{and} \\quad \\sum Y = 0$$
The **equilibrant** is equal and opposite to the resultant.

### Two forces
They must be **equal, opposite and collinear**.

### Three forces
- **Triangle of forces:** three forces in equilibrium can be represented in magnitude and direction by the **sides of a triangle taken in order**.
- They must be **concurrent** (or parallel) and coplanar.
- **Lami's theorem:** each force is proportional to the sine of the angle between the other two:
$$\\frac{P}{\\sin\\alpha} = \\frac{Q}{\\sin\\beta} = \\frac{R}{\\sin\\gamma}$$

*A weight of 100 N hangs from two strings each inclined at 30° to the horizontal.* Resolving vertically: $2T\\sin 30° = 100$, so $T = 100$ N.

*A weight $W$ hangs from two strings inclined at 60° and 30° to the horizontal (the strings are perpendicular).* Resolving along each string: $T_{60} = W\\sin 60°$, $T_{30} = W\\sin 30°$.

### Polygon of forces
If any number of forces acting at a point are in equilibrium, they can be represented by the sides of a **closed polygon taken in order**. If the polygon does not close, the closing side (reversed) gives the resultant.

## Method for problems
1. Draw a clear **force diagram**.
2. Choose two perpendicular directions.
3. **Resolve** and write the equilibrium equations.
4. Solve.

Common forces: weight $mg$ (downward), tension (along a string, away from the body), normal reaction (perpendicular to a surface), friction (along the surface).`,
    examples: `**Example 1.** Find the resultant of forces of 5 N and 12 N acting at right angles. *Solution:* $\\sqrt{25 + 144} = \\mathbf{13}$ **N**.

**Example 2.** Resolve a force of 20 N at 60° to the horizontal. *Solution:* horizontal $20\\cos 60° = \\mathbf{10}$ **N**; vertical $20\\sin 60° = \\mathbf{10\\sqrt3}$ **N**.

**Example 3.** Forces $2\\mathbf{i} + 3\\mathbf{j}$, $-5\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{F}$ are in equilibrium. Find $\\mathbf{F}$. *Solution:* $\\mathbf{F} = \\mathbf{3i - 4j}$.`,
  },
  questions: [
    ["E", "Forces whose lines of action pass through a single point are said to be", "concurrent", "parallel", "collinear only", "like", "They all meet at one point."],
    ["E", "The horizontal component of a force of 20 N inclined at 60° to the horizontal is", "10 N", "$10\\sqrt3$ N", "20 N", "40 N", "$20\\cos 60° = 10$."],
    ["E", "Three forces acting at a point in equilibrium can be represented by the", "sides of a triangle taken in order", "diagonals of a square", "radii of a circle", "sides of an open polygon", "This is the triangle of forces."],
    ["M", "The resultant of forces of 6 N and 8 N acting at right angles is", "10 N", "14 N", "2 N", "48 N", "$\\sqrt{36 + 64} = 10$."],
    ["M", "The resultant of two forces of 5 N each inclined at 120° to each other is", "5 N", "10 N", "$5\\sqrt3$ N", "0 N", "$R^2 = 25 + 25 - 25 = 25$."],
    ["M", "The vertical component of a force of 50 N inclined at 30° to the horizontal is", "25 N", "$25\\sqrt3$ N", "50 N", "100 N", "$50\\sin 30° = 25$."],
    ["M", "Forces $(3\\mathbf{i} + 4\\mathbf{j})$ N and $(5\\mathbf{i} - 10\\mathbf{j})$ N act on a particle. The magnitude of their resultant is", "10 N", "14 N", "2 N", "$\\sqrt{28}$ N", "Resultant $8\\mathbf{i} - 6\\mathbf{j}$ has magnitude 10."],
    ["H", "A particle is in equilibrium under forces $2\\mathbf{i} + 3\\mathbf{j}$, $-5\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{F}$. The magnitude of $\\mathbf{F}$ is", "5 N", "7 N", "$\\sqrt7$ N", "25 N", "$\\mathbf{F} = 3\\mathbf{i} - 4\\mathbf{j}$."],
    ["H", "A weight of 100 N is supported by two strings each inclined at 30° to the horizontal. The tension in each string is", "100 N", "50 N", "200 N", "$50\\sqrt3$ N", "$2T\\sin 30° = 100$."],
    ["H", "The resultant of forces of 7 N and 8 N inclined at 60° to each other is", "13 N", "15 N", "$\\sqrt{57}$ N", "11 N", "$R^2 = 49 + 64 + 56 = 169$."],
  ],
  jamb: [
    ["M", "A force of 10 N acts due east and a force of 24 N acts due north on a particle. The magnitude of the resultant is", "26 N", "34 N", "14 N", "17 N", "$\\sqrt{100 + 576} = 26$."],
    ["H", "A body of weight 40 N hangs from two strings inclined at 60° and 30° to the horizontal. The tension in the string inclined at 60° is", "$20\\sqrt3$ N", "20 N", "40 N", "$40\\sqrt3$ N", "The strings are perpendicular; $T = 40\\sin 60°$."],
  ],
};

export const staticsMoments: Topic = {
  title: "Statics: Moments, Parallel Forces and Friction",
  subtopics: ["Moment of a force", "Resultant of parallel forces", "Couples and equilibrium of a rigid body", "Friction"],
  objectives: ["Calculate the moment of a force and apply the principle of moments", "Find the resultant of like and unlike parallel forces", "Apply the conditions of equilibrium of a rigid body", "Solve problems on friction on horizontal and inclined planes"],
  lesson: {
    title: "Turning Effects and Friction",
    summary: "Moments and parallel forces on rigid bodies, and the laws of friction.",
    minutes: 40,
    notes: `## Moment of a force
The **moment** of a force about a point is its **turning effect**:
$$\\text{moment} = \\text{force} \\times \\text{perpendicular distance from the point to the line of action}$$
Unit: **newton metre (N m)**. Moments are **clockwise** or **anticlockwise**.

### Principle of moments
For a body in equilibrium, the **sum of clockwise moments about any point equals the sum of anticlockwise moments** about that point.

## Equilibrium of a rigid body
1. The **resultant force is zero** (resolve in two directions).
2. The **resultant moment about any point is zero**.

*A uniform beam AB, 6 m long and of weight 40 N, rests on supports at A and B and carries 60 N at 2 m from A.* Moments about A: $6R_B = 40 \\times 3 + 60 \\times 2 = 240$, so $R_B = 40$ N and $R_A = 100 - 40 = 60$ N.

The weight of a **uniform** body acts at its **mid-point** (centre of gravity).

## Parallel forces
### Like parallel forces (same direction) $P$ and $Q$, distance $d$ apart
- Resultant $R = P + Q$, in the same direction.
- It acts **between** them, dividing $d$ **inversely** as the forces: distance from $P$ is $\\dfrac{Qd}{P + Q}$.

*6 N and 9 N, 5 m apart:* $R = 15$ N at $\\dfrac{9 \\times 5}{15} = 3$ m from the 6 N force.

### Unlike parallel forces (opposite directions), $P > Q$
- Resultant $R = P - Q$, in the direction of the larger.
- It acts **outside** the forces, on the side of the larger, at distance $\\dfrac{Qd}{P - Q}$ from $P$.

*10 N and 4 N, 3 m apart:* $R = 6$ N at $\\dfrac{4 \\times 3}{6} = 2$ m from the 10 N force, on the side away from the 4 N force.

### Couple
Two **equal, unlike, parallel** forces not in the same line form a **couple**. Its resultant force is zero, but it has a turning effect:
$$\\text{moment of couple} = \\text{one force} \\times \\text{perpendicular distance between them}$$
The moment is the same about every point.

## Friction
**Friction** opposes relative motion between surfaces in contact.

### Laws
1. Friction acts **opposite** to the direction in which the body moves or tends to move.
2. Up to a limit, friction is **just sufficient** to prevent motion.
3. **Limiting friction** $F = \\mu R$, where $R$ is the **normal reaction** and $\\mu$ the **coefficient of friction**.
4. Limiting friction is independent of the **area** of contact.
5. Once sliding, friction is slightly less and is independent of speed.

In general $F \\le \\mu R$.

### Angle of friction
The angle $\\lambda$ between the normal reaction and the resultant reaction when friction is limiting: $\\tan\\lambda = \\mu$.

### Horizontal plane
A block of weight $W$: $R = W$; the least horizontal force to move it is $\\mu W$.
*Mass 5 kg, $\\mu = 0.3$, $g = 10$:* $0.3 \\times 50 = 15$ N.

### Inclined plane at angle $\\theta$
$R = W\\cos\\theta$; component down the plane $W\\sin\\theta$. The body is on the point of sliding when
$$W\\sin\\theta = \\mu W\\cos\\theta \\Rightarrow \\mu = \\tan\\theta$$
This angle is the **angle of repose**.

- Least force **up** the plane to move the body up: $W\\sin\\theta + \\mu W\\cos\\theta$.
- Force up the plane to just **support** it: $W\\sin\\theta - \\mu W\\cos\\theta$.`,
    examples: `**Example 1.** Find the moment of a 12 N force about a point 0.5 m from its line of action. *Solution:* $12 \\times 0.5 = \\mathbf{6}$ **N m**.

**Example 2.** A 50 N block rests on a rough horizontal table with $\\mu = 0.4$. Find the limiting friction. *Solution:* $0.4 \\times 50 = \\mathbf{20}$ **N**.

**Example 3.** A body is about to slide on a plane inclined at 30°. Find $\\mu$. *Solution:* $\\tan 30° = \\mathbf{\\tfrac{1}{\\sqrt3} \\approx 0.577}$.`,
  },
  questions: [
    ["E", "The moment of a force about a point is the product of the force and", "its perpendicular distance from the point", "its mass", "the time for which it acts", "the square of its distance from the point", "Moment measures the turning effect."],
    ["E", "Limiting friction is given by", "$F = \\mu R$", "$F = \\dfrac{R}{\\mu}$", "$F = \\mu + R$", "$F = mg\\sin\\theta$ only", "$\\mu$ is the coefficient of friction and $R$ the normal reaction."],
    ["E", "Two equal, unlike, parallel forces whose lines of action do not coincide form", "a couple", "a resultant", "an equilibrant", "a moment arm", "A couple produces rotation only."],
    ["M", "The moment of a force of 12 N about a point at a perpendicular distance of 0.5 m is", "6 N m", "24 N m", "12.5 N m", "0.6 N m", "$12 \\times 0.5 = 6$."],
    ["M", "A uniform beam is pivoted at its centre. A force of 30 N acts 1.5 m to the left of the pivot. The force needed 1 m to the right to balance it is", "45 N", "20 N", "30 N", "15 N", "$30 \\times 1.5 = F \\times 1$."],
    ["M", "A block of weight 50 N rests on a rough horizontal surface with coefficient of friction 0.4. The limiting friction is", "20 N", "125 N", "50.4 N", "12.5 N", "$0.4 \\times 50 = 20$."],
    ["M", "Like parallel forces of 6 N and 9 N act 5 m apart. Their resultant acts at a distance from the 6 N force of", "3 m", "2 m", "2.5 m", "5 m", "$\\frac{9 \\times 5}{15} = 3$."],
    ["H", "A body is on the point of sliding down a rough plane inclined at 30° to the horizontal. The coefficient of friction is", "$\\frac{1}{\\sqrt3}$", "$\\sqrt3$", "$\\frac12$", "$\\frac{\\sqrt3}{2}$", "$\\mu = \\tan 30°$."],
    ["H", "A uniform beam AB of length 6 m and weight 40 N rests on supports at A and B and carries a load of 60 N at 2 m from A. The reaction at B is", "40 N", "60 N", "50 N", "100 N", "Moments about A: $6R_B = 120 + 120$."],
    ["H", "A couple consists of two forces of 8 N whose lines of action are 0.25 m apart. The moment of the couple is", "2 N m", "4 N m", "16 N m", "32 N m", "$8 \\times 0.25 = 2$."],
  ],
  jamb: [
    ["M", "A block of mass 5 kg rests on a rough horizontal table. If the coefficient of friction is 0.3, the least horizontal force that will move it is ($g = 10$ m/s²)", "15 N", "1.5 N", "150 N", "50 N", "$0.3 \\times 50 = 15$."],
    ["H", "Unlike parallel forces of 10 N and 4 N act 3 m apart. Their resultant is", "6 N acting 2 m from the 10 N force, outside the forces", "14 N acting between the forces", "6 N acting midway between the forces", "6 N acting 2 m from the 4 N force, between the forces", "$R = 10 - 4$ and the distance is $\\frac{4 \\times 3}{6} = 2$ m beyond the larger force."],
  ],
};

export const modelling: Topic = {
  title: "Mathematical Modelling",
  subtopics: ["Meaning of mathematical modelling", "Dependent and independent variables", "Construction of mathematical models", "Applications to physical, biological, social and behavioural sciences"],
  objectives: ["Explain what a mathematical model is", "Identify dependent and independent variables and parameters", "Construct simple models from verbal descriptions", "Apply models to problems in the sciences and social sciences"],
  lesson: {
    title: "Describing the Real World with Mathematics",
    summary: "The process of turning a real problem into equations, solving them and testing the results.",
    minutes: 40,
    notes: `## Meaning
A **mathematical model** is a **description of a real-life situation in mathematical terms** — an equation, inequality, function, graph or table. **Mathematical modelling** is the process of building, solving and testing such a description.

## Variables and parameters
- **Independent variable** — the quantity we choose or that changes freely (the input), e.g. time $t$, number of items $x$.
- **Dependent variable** — the quantity whose value **depends** on the independent variable (the output), e.g. cost $C$, population $P$.
- **Parameter (constant)** — a fixed number in the model, e.g. a rate or a fixed charge.

In $C = 500 + 20x$: $x$ is independent, $C$ dependent, and 500 and 20 are parameters.

## The modelling cycle
1. **Identify and define the problem.**
2. **Make assumptions** to simplify it; choose the variables.
3. **Formulate** the model — write the equations.
4. **Solve** the mathematics.
5. **Interpret** the solution in terms of the real problem.
6. **Validate** — compare predictions with real data.
7. **Refine** the model if it does not fit, and repeat.

## Types of model
| Type | Form | Typical use |
|---|---|---|
| **linear** | $y = mx + c$ | cost with fixed and variable parts; uniform motion |
| **quadratic** | $y = ax^2 + bx + c$ | projectile height; revenue and profit |
| **exponential** | $y = Ae^{kt}$ or $A \\cdot b^{t}$ | population growth; radioactive decay; compound interest |
| **inverse** | $y = \\dfrac{k}{x}$ | pressure and volume; time and speed |
| **differential equation** | $\\dfrac{dy}{dt} = ky$ | rates of change |

## Constructing models
### Linear
*A taxi charges ₦300 plus ₦50 per kilometre.* $C = 300 + 50d$. For 12 km, $C = ₦900$.

### Equilibrium (social science)
*Demand $D = 100 - 2p$, supply $S = 20 + 3p$.* At equilibrium $D = S$: $100 - 2p = 20 + 3p$, $p = 16$.

### Optimisation
*Revenue $R = x(50 - x)$.* $\\dfrac{dR}{dx} = 50 - 2x = 0$ gives $x = 25$; maximum $R = 625$.

### Exponential growth (biology)
If the rate of growth is proportional to the size, $\\dfrac{dN}{dt} = kN$, whose solution is $N = N_0e^{kt}$.
*Bacteria double every 3 hours from 500.* $N = 500 \\times 2^{t/3}$; after 12 hours, $500 \\times 2^4 = 8000$.

### Exponential decay (physics)
*A substance halves every 10 days from 80 g.* After 30 days (three half-lives): $80 \\times \\left(\\tfrac12\\right)^3 = 10$ g.

### Newton's law of cooling
$\\dfrac{d\\theta}{dt} = -k(\\theta - \\theta_0)$: the rate of cooling is proportional to the excess temperature.

### Motion (physics)
$s = ut + \\tfrac12at^2$ models displacement under constant acceleration.

### Behavioural science
Learning curves, the spread of a rumour or an epidemic (logistic growth), and queuing can all be modelled.

## Limitations
A model is a **simplification**: it depends on its assumptions, holds only within a certain range, and must be checked against data. "All models are approximations."`,
    examples: `**Example 1.** A plumber charges ₦2,000 call-out fee plus ₦1,500 per hour. Write a model for the cost of $h$ hours. *Solution:* $\\mathbf{C = 2000 + 1500h}$.

**Example 2.** A population is modelled by $P = 2000 \\times 2^{t/5}$. Find $P$ when $t = 15$. *Solution:* $2000 \\times 8 = \\mathbf{16\\,000}$.

**Example 3.** Name the stage at which a model's predictions are compared with real data. *Solution:* **validation**.`,
  },
  questions: [
    ["E", "A description of a real-life situation in mathematical terms is", "a mathematical model", "a theorem", "an identity", "a proof", "Models use equations, functions or graphs."],
    ["E", "In the model $C = 500 + 20x$, the independent variable is", "$x$", "$C$", "500", "20", "$C$ depends on $x$."],
    ["E", "The first step in mathematical modelling is to", "identify and define the problem", "solve the equations", "validate the results", "refine the model", "The problem must be understood before it is formulated."],
    ["M", "A taxi charges a fixed ₦300 plus ₦50 per kilometre. A model for the cost $C$ of a journey of $d$ km is", "$C = 300 + 50d$", "$C = 350d$", "$C = 50 + 300d$", "$C = 300d + 50$", "A fixed charge plus a charge proportional to distance."],
    ["M", "Using the model $C = 300 + 50d$, the cost of a 12 km journey is", "₦900", "₦600", "₦4,200", "₦350", "$300 + 600 = 900$."],
    ["M", "A population is modelled by $P = 2000 \\times 2^{t/5}$, where $t$ is in years. The population after 15 years is", "16 000", "6 000", "8 000", "30 000", "$2^3 = 8$ and $2000 \\times 8 = 16\\,000$."],
    ["M", "Demand is modelled by $D = 100 - 2p$ and supply by $S = 20 + 3p$. The equilibrium price $p$ is", "16", "24", "80", "40", "$100 - 2p = 20 + 3p$ gives $p = 16$."],
    ["H", "The solution of the growth model $\\dfrac{dN}{dt} = kN$ is", "$N = N_0e^{kt}$", "$N = N_0 + kt$", "$N = kt^2$", "$N = \\dfrac{N_0}{kt}$", "A rate proportional to size gives exponential growth."],
    ["H", "A colony of bacteria doubles every 3 hours. Starting from 500, the number after 12 hours is", "8 000", "2 000", "6 000", "4 000", "Four doublings: $500 \\times 16$."],
    ["H", "Revenue is modelled by $R = x(50 - x)$. The value of $x$ that maximises revenue is", "25", "50", "625", "10", "$\\frac{dR}{dx} = 50 - 2x = 0$."],
  ],
  jamb: [
    ["M", "Comparing the predictions of a model with real data is called", "validation", "formulation", "assumption", "substitution", "It tests whether the model is adequate."],
    ["H", "A radioactive substance halves in mass every 10 days. From an initial 80 g, the mass remaining after 30 days is", "10 g", "20 g", "40 g", "26.7 g", "Three half-lives: $80 \\times \\frac18$."],
  ],
};

export const gameTheory: Topic = {
  title: "Game Theory",
  subtopics: ["Introduction and basic terms", "Types of games", "Two-person zero-sum games with pure strategies", "Mixed strategies and matrix games"],
  objectives: ["Explain the basic terms of game theory", "Classify games", "Solve two-person zero-sum games with a saddle point", "Solve 2×2 games without a saddle point using mixed strategies"],
  lesson: {
    title: "The Mathematics of Competition",
    summary: "How to find the best strategies for two competitors whose interests are directly opposed.",
    minutes: 40,
    notes: `## Introduction
**Game theory** is the mathematical study of **decision making in situations of competition or conflict**, where the outcome for each participant depends on the choices of all. It is applied in economics, business, politics, warfare and biology.

## Terms
| Term | Meaning |
|---|---|
| **player** | a competitor (person, firm, nation) |
| **strategy** | a plan of action available to a player |
| **pay-off** | the gain (or loss) resulting from a combination of strategies |
| **pay-off matrix** | a table of pay-offs to the **row player A**; positive entries are gains to A and losses to the **column player B** |
| **pure strategy** | always playing the same single strategy |
| **mixed strategy** | choosing among strategies with fixed probabilities |
| **value of the game** $v$ | the expected pay-off when both play optimally |
| **fair game** | a game whose value is zero |

## Types of games
- by number of players: **two-person**, **n-person**
- **zero-sum** (one player's gain is exactly the other's loss) and **non-zero-sum**
- **co-operative** and **non-co-operative**
- **finite** and infinite
- games of **pure strategy** and of **mixed strategy**

## Two-person zero-sum games — pure strategies
A chooses a row, B a column. A, being cautious, looks at the **worst** outcome of each row and picks the best of these:
- **maximin** = the largest of the **row minima**.

B wants to keep A's gain small; B looks at the largest entry of each column and picks the smallest:
- **minimax** = the smallest of the **column maxima**.

If **maximin = minimax**, the game has a **saddle point**: the entry that is the **smallest in its row and the largest in its column**. Both players use pure strategies and the saddle entry is the **value of the game**.

*Example.* $\\begin{pmatrix} 1 & 7 \\\\ 4 & 5 \\end{pmatrix}$: row minima 1, 4 — maximin 4; column maxima 4, 7 — minimax 4. Saddle point at row 2, column 1; $v = 4$. A plays row 2, B plays column 1.

### Dominance
A row may be deleted if every entry is **less than or equal to** the corresponding entry of another row (A would never use it). A column may be deleted if every entry is **greater than or equal to** that of another column.

## Mixed strategies — 2×2 games without a saddle point
For $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ with no saddle point, let A play row 1 with probability $p$ and B play column 1 with probability $q$.
$$p = \\frac{d - c}{(a + d) - (b + c)}, \\qquad q = \\frac{d - b}{(a + d) - (b + c)}, \\qquad v = \\frac{ad - bc}{(a + d) - (b + c)}$$

These come from making A's expected gain the same whichever column B chooses: $ap + c(1 - p) = bp + d(1 - p)$.

*Example.* $\\begin{pmatrix} 3 & 1 \\\\ 0 & 4 \\end{pmatrix}$: row minima 1, 0 (maximin 1); column maxima 3, 4 (minimax 3) — no saddle point.
$(a + d) - (b + c) = 7 - 1 = 6$.
$p = \\dfrac{4 - 0}{6} = \\dfrac23$; $q = \\dfrac{4 - 1}{6} = \\dfrac12$; $v = \\dfrac{12 - 0}{6} = 2$.
A plays row 1 two-thirds of the time; the value of the game is 2.

*Example.* $\\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}$: $v = \\dfrac{2 - 1}{3 + 2} = \\dfrac15$; $p = \\dfrac{2}{5}$.

## Larger games
Reduce by **dominance** to 2×2 where possible; otherwise use graphical or linear-programming methods.`,
    examples: `**Example 1.** Find the saddle point of $\\begin{pmatrix} 3 & 5 \\\\ 2 & 1 \\end{pmatrix}$. *Solution:* row minima 3, 1 (maximin 3); column maxima 3, 5 (minimax 3); saddle value $\\mathbf{3}$.

**Example 2.** What is a zero-sum game? *Solution:* One in which **one player's gain equals the other's loss**.

**Example 3.** Find the value of the game $\\begin{pmatrix} 3 & 1 \\\\ 0 & 4 \\end{pmatrix}$. *Solution:* $\\dfrac{12 - 0}{7 - 1} = \\mathbf{2}$.`,
  },
  questions: [
    ["E", "A game in which one player's gain is exactly equal to the other player's loss is", "a zero-sum game", "a co-operative game", "a non-zero-sum game", "a fair game only", "The pay-offs of the two players sum to zero."],
    ["E", "The table showing the gains of the row player for every combination of strategies is the", "pay-off matrix", "transition matrix", "identity matrix", "frequency table", "Its entries are the pay-offs."],
    ["E", "The position in a pay-off matrix where the maximin equals the minimax is the", "saddle point", "turning point", "break-even point", "origin", "Its entry is the value of the game."],
    ["M", "For the pay-off matrix $\\begin{pmatrix} 3 & 5 \\\\ 2 & 1 \\end{pmatrix}$, the value of the game is", "3", "5", "2", "1", "Maximin 3 equals minimax 3."],
    ["M", "For the pay-off matrix $\\begin{pmatrix} 1 & 7 \\\\ 4 & 5 \\end{pmatrix}$, the value of the game is", "4", "1", "5", "7", "Row minima 1, 4; column maxima 4, 7; saddle value 4."],
    ["M", "A player who always chooses the same single course of action is using a", "pure strategy", "mixed strategy", "dominated strategy", "random strategy", "No probabilities are involved."],
    ["M", "A game is said to be fair when its value is", "zero", "one", "negative", "equal to the maximin only", "Neither player has an advantage."],
    ["H", "The value of the game with pay-off matrix $\\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}$ is", "$\\frac15$", "$\\frac25$", "1", "$-1$", "$\\frac{(2)(1) - (-1)(-1)}{(2 + 1) - (-1 - 1)} = \\frac15$."],
    ["H", "In the game $\\begin{pmatrix} 3 & 1 \\\\ 0 & 4 \\end{pmatrix}$, the probability with which the row player should play the first row is", "$\\frac23$", "$\\frac13$", "$\\frac12$", "$\\frac34$", "$p = \\frac{4 - 0}{(3 + 4) - (1 + 0)} = \\frac23$."],
    ["H", "In a pay-off matrix for the row player, a row may be deleted by dominance if each of its entries is", "less than or equal to the corresponding entry of another row", "greater than the corresponding entry of every other row", "equal to zero", "the largest in its column", "The row player would never choose an inferior row."],
  ],
  jamb: [
    ["M", "For the pay-off matrix $\\begin{pmatrix} -3 & 4 \\\\ 2 & 6 \\end{pmatrix}$, the value of the game is", "2", "$-3$", "4", "6", "Row minima $-3$, 2; column maxima 2, 6; saddle value 2."],
    ["H", "The value of the game with pay-off matrix $\\begin{pmatrix} 3 & 1 \\\\ 0 & 4 \\end{pmatrix}$ is", "2", "3", "1", "$\\frac23$", "$\\frac{12 - 0}{7 - 1} = 2$."],
  ],
};
