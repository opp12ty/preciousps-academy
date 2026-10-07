import type { TermPlan } from "../types";

/**
 * SS3 Mathematics, Third Term — examination revision. The NERDC 2025 scheme ends SS3 teaching in the
 * second term; these revision topics prepare candidates for WAEC, NECO and UTME.
 */
export const ss3t3: TermPlan = {
  classCode: "SS3",
  term: 3,
  topics: [
    {
      week: 1,
      title: "Examination Revision: Number and Numeration",
      subtopics: ["Number bases and modular arithmetic", "Fractions, percentages and approximation", "Indices, logarithms and surds", "Sets, sequences and series"],
      objectives: ["Solve examination problems on number bases and modular arithmetic", "Solve problems on percentages, ratio and approximation", "Simplify expressions involving indices, logarithms and surds", "Solve problems on sets, arithmetic and geometric progressions"],
      lesson: {
        title: "Revising Number and Numeration",
        summary: "Consolidate the number topics most often examined at WAEC, NECO and UTME.",
        minutes: 40,
        notes: `## Number bases
- To base ten: expand in powers of the base. $213_4 = 2(16) + 1(4) + 3 = 39$.
- From base ten: divide repeatedly, read remainders upward.
- Unknown base: form an equation. $32_x = 26_{10} \\Rightarrow 3x + 2 = 26$.

## Modular arithmetic
Reduce to the remainder: $38 \\equiv 3 \\pmod 5$.

## Percentages, ratio and rates
- percentage change $= \\dfrac{\\text{change}}{\\text{original}} \\times 100\\%$
- profit % is on **cost price**: $\\dfrac{SP - CP}{CP} \\times 100\\%$
- to share ₦$N$ in the ratio $a : b$: parts $\\dfrac{a}{a+b}N$ and $\\dfrac{b}{a+b}N$
- **percentage error** $= \\dfrac{\\text{error}}{\\text{true value}} \\times 100\\%$

## Approximation
Significant figures, decimal places, standard form $A \\times 10^n$ with $1 \\le A < 10$.

## Indices
$a^m a^n = a^{m+n}$; $a^m \\div a^n = a^{m-n}$; $(a^m)^n = a^{mn}$; $a^0 = 1$; $a^{-n} = \\dfrac{1}{a^n}$; $a^{m/n} = (\\sqrt[n]{a})^m$.
Indicial equations: equal bases, equate indices.

## Logarithms
$\\log MN = \\log M + \\log N$; $\\log \\dfrac MN = \\log M - \\log N$; $\\log M^n = n\\log M$; $\\log_a a = 1$; $\\log_a 1 = 0$.

## Surds
$\\sqrt{ab} = \\sqrt a\\sqrt b$; rationalise with the conjugate: $\\dfrac{1}{\\sqrt5 - 2} = \\sqrt5 + 2$.

## Sets
- $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$
- for three sets, use a **Venn diagram** and fill from the centre outward
- complement $A'$: elements of the universal set not in $A$
- a set with $n$ elements has $2^n$ subsets

## Sequences and series
| | Arithmetic progression | Geometric progression |
|---|---|---|
| $n$th term | $a + (n-1)d$ | $ar^{n-1}$ |
| sum of $n$ terms | $\\dfrac n2[2a + (n-1)d]$ | $\\dfrac{a(r^n - 1)}{r - 1}$ |
| sum to infinity | — | $\\dfrac{a}{1 - r}$ for $-1 < r < 1$ |
Arithmetic mean of $a$ and $b$: $\\dfrac{a+b}{2}$; geometric mean: $\\sqrt{ab}$.

## Variation
direct $y = kx$; inverse $y = \\dfrac kx$; joint $y = kxz$; partial $y = a + bx$.

## Financial arithmetic
simple interest $\\dfrac{PRT}{100}$; compound amount $P\\left(1 + \\dfrac{r}{100}\\right)^n$; depreciation with a minus sign.

## Examination hints
- read the **units** and the **degree of accuracy** required
- estimate before calculating
- in UTME there is **no working space to waste**: eliminate impossible options first`,
        examples: `**Example 1.** In a class of 40, 25 offer Physics, 20 offer Chemistry and 3 offer neither. How many offer both? *Solution:* $25 + 20 - x = 37$, so $x = \\mathbf{8}$.

**Example 2.** Find the 10th term of the AP 3, 7, 11, … *Solution:* $3 + 9(4) = \\mathbf{39}$.

**Example 3.** Find the sum to infinity of $8 + 4 + 2 + \\dots$ *Solution:* $\\dfrac{8}{1 - \\frac12} = \\mathbf{16}$.`,
      },
      questions: [
        ["E", "Express 0.000456 in standard form.", "$4.56 \\times 10^{-4}$", "$4.56 \\times 10^{-3}$", "$45.6 \\times 10^{-5}$", "$4.56 \\times 10^{4}$", "Move the point four places to the right."],
        ["E", "The 10th term of the arithmetic progression 3, 7, 11, … is", "39", "43", "40", "37", "3 + 9 × 4. Answer: 39."],
        ["E", "A set with 4 elements has how many subsets?", "16", "8", "4", "12", "2 to the power 4."],
        ["M", "In a class of 40, 25 offer Physics, 20 offer Chemistry and 3 offer neither. The number offering both is", "8", "5", "12", "3", "25 + 20 − x = 37."],
        ["M", "The sum to infinity of the geometric series $8 + 4 + 2 + \\dots$ is", "16", "14", "15", "32", "a ÷ (1 − r) with r = 1/2."],
        ["M", "A trader buys an article for ₦800 and sells it for ₦1,000. His percentage profit is", "25%", "20%", "80%", "125%", "200 ÷ 800 × 100."],
        ["M", "A length of 25 cm is measured as 24 cm. The percentage error is", "4%", "4.17%", "1%", "96%", "1 ÷ 25 × 100. Answer: 4%."],
        ["H", "The sum of the first 20 terms of the AP 2, 5, 8, … is", "610", "590", "1220", "59", "10 × (4 + 57). Answer: 610."],
        ["H", "The 6th term of the geometric progression 3, 6, 12, … is", "96", "48", "192", "36", "3 × 2⁵. Answer: 96."],
        ["H", "Simplify $\\dfrac{1}{\\sqrt5 - 2}$.", "$\\sqrt5 + 2$", "$\\sqrt5 - 2$", "$\\frac{\\sqrt5 + 2}{3}$", "$2 - \\sqrt5$", "Multiply by the conjugate; the denominator is 5 − 4."],
      ],
      jamb: [
        ["M", "₦4,500 is shared between two people in the ratio 4 : 5. Find the larger share.", "₦2,500", "₦2,000", "₦3,600", "₦2,250", "5/9 of ₦4,500. Answer: ₦2,500."],
        ["H", "The 3rd and 6th terms of a geometric progression are 12 and 96. Find the first term.", "3", "2", "4", "6", "r³ = 8 so r = 2, and a × 4 = 12."],
      ],
    },
    {
      week: 2,
      title: "Examination Revision: Algebraic Processes",
      subtopics: ["Simplification, factorisation and change of subject", "Linear, simultaneous and quadratic equations", "Inequalities and linear programming", "Graphs, functions and calculus"],
      objectives: ["Simplify and factorise algebraic expressions", "Solve linear, simultaneous and quadratic equations", "Solve linear inequalities and interpret feasible regions", "Solve examination problems on graphs, functions, matrices and calculus"],
      lesson: {
        title: "Revising Algebra",
        summary: "Consolidate the algebra topics most often examined at WAEC, NECO and UTME.",
        minutes: 40,
        notes: `## Expansion and factorisation
- $(a + b)^2 = a^2 + 2ab + b^2$; $(a - b)^2 = a^2 - 2ab + b^2$
- $a^2 - b^2 = (a - b)(a + b)$
- common factor first; then grouping; then quadratic factors

## Algebraic fractions
Find the LCM of the denominators: $\\dfrac{1}{x} + \\dfrac{1}{x+1} = \\dfrac{2x + 1}{x(x+1)}$.
Simplify by factorising: $\\dfrac{x^2 - 9}{x^2 + 3x} = \\dfrac{x - 3}{x}$.
A fraction is **undefined** where its denominator is zero.

## Linear and simultaneous equations
Elimination or substitution; check in both equations.

## Quadratic equations
| Method | When |
|---|---|
| factorisation | factors are easy |
| completing the square | to find a minimum or maximum |
| formula $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ | always works |
**Discriminant** $D = b^2 - 4ac$: $D > 0$ two real roots; $D = 0$ equal roots; $D < 0$ no real roots.
**Sum and product of roots:** $\\alpha + \\beta = -\\dfrac ba$, $\\alpha\\beta = \\dfrac ca$.

## Inequalities
Solve like equations, but **reverse the sign when multiplying or dividing by a negative number**.
$3 - 2x < 7 \\Rightarrow -2x < 4 \\Rightarrow x > -2$.
Quadratic inequality: $x^2 - x - 6 < 0 \\Rightarrow (x - 3)(x + 2) < 0 \\Rightarrow -2 < x < 3$.

## Linear programming
Write the constraints as inequalities, shade the **feasible region**, and test the **vertices** in the objective function.

## Change of subject and variation
Reverse the operations; for variation, find $k$ first.

## Graphs
- straight line $y = mx + c$
- parabola $y = ax^2 + bx + c$: line of symmetry $x = -\\dfrac{b}{2a}$
- solve equations by reading **intersections**

## Functions
$f^{-1}$: make $x$ the subject; $fg(x) = f(g(x))$.

## Binary operations
Evaluate as defined; identity $e$ from $a * e = a$; inverse from $a * a^{-1} = e$.

## Matrices
$\\left|\\begin{matrix} a & b \\\\ c & d \\end{matrix}\\right| = ad - bc$; inverse $\\dfrac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.

## Calculus
$\\dfrac{d}{dx}(ax^n) = anx^{n-1}$; $\\int ax^n\\,dx = \\dfrac{ax^{n+1}}{n+1} + C$; turning points where $\\dfrac{dy}{dx} = 0$.

## Polynomials
**Remainder theorem:** the remainder when $f(x)$ is divided by $(x - a)$ is $f(a)$. **Factor theorem:** $(x - a)$ is a factor if $f(a) = 0$.

## Word problems
Let the unknown be $x$; translate each phrase; solve; check that the answer is sensible.`,
        examples: `**Example 1.** Solve $3 - 2x < 7$. *Solution:* $-2x < 4$, so $x > \\mathbf{-2}$ (the sign reverses).

**Example 2.** Find the sum and product of the roots of $2x^2 - 5x + 3 = 0$. *Solution:* sum $= \\mathbf{\\tfrac52}$; product $= \\mathbf{\\tfrac32}$.

**Example 3.** Find the remainder when $x^3 - 2x + 5$ is divided by $x - 2$. *Solution:* $f(2) = 8 - 4 + 5 = \\mathbf{9}$.`,
      },
      questions: [
        ["E", "Expand $(2x - 5)^2$.", "$4x^2 - 20x + 25$", "$4x^2 + 25$", "$4x^2 - 10x + 25$", "$2x^2 - 20x + 25$","(a + b)² = a² + 2ab + b²."],
        ["E", "Solve $2x + 5 = 17$.", "6", "11", "12", "8.5", "2x = 12. Answer: 6."],
        ["E", "The discriminant of $ax^2 + bx + c = 0$ is", "$b^2 - 4ac$", "$b^2 + 4ac$", "$4ac - b$", "$-\\frac{b}{2a}$", "It decides the nature of the roots."],
        ["M", "Solve the inequality $3 - 2x < 7$.", "$x > -2$", "$x < -2$", "$x > 2$", "$x < 5$", "Dividing by −2 reverses the sign."],
        ["M", "The sum of the roots of $2x^2 - 5x + 3 = 0$ is", "$\\frac52$", "$-\\frac52$", "$\\frac32$", "5", "−b ÷ a. Answer: $\\frac52$."],
        ["M", "Simplify $\\dfrac{x^2 - 9}{x^2 + 3x}$.", "$\\frac{x - 3}{x}$", "$\\frac{x + 3}{x}$", "$\\frac{-3}{x}$", "$x - 3$", "Cancel the common factor (x + 3)."],
        ["M", "Solve $2x + y = 7$ and $x - y = 2$.", "$x = 3$, $y = 1$", "$x = 1$, $y = 5$", "$x = 2$, $y = 3$", "$x = 4$, $y = -1$", "Adding gives 3x = 9."],
        ["H", "The solution set of $x^2 - x - 6 < 0$ is", "$-2 < x < 3$", "$x < -2$ or $x > 3$", "$-3 < x < 2$", "$x > 3$", "The product (x − 3)(x + 2) is negative between the roots."],
        ["H", "The remainder when $x^3 - 2x + 5$ is divided by $x - 2$ is", "9", "5", "1", "17", "f(2) = 8 − 4 + 5."],
        ["H", "For what value of $k$ does $x^2 - 8x + k = 0$ have equal roots?", "16", "8", "64", "4", "64 − 4k = 0. Answer: 16."],
      ],
      jamb: [
        ["M", "Simplify $\\dfrac{1}{x - 1} - \\dfrac{1}{x + 1}$.", "$\\dfrac{2}{x^2 - 1}$", "$\\dfrac{2x}{x^2 - 1}$", "$\\dfrac{-2}{x^2 - 1}$", "0", "(x + 1) − (x − 1) = 2."],
        ["H", "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 5x + 3 = 0$, find $\\alpha^2 + \\beta^2$.", "19", "25", "31", "22", "(α + β)² − 2αβ = 25 − 6."],
      ],
    },
    {
      week: 3,
      title: "Examination Revision: Geometry, Mensuration and Trigonometry",
      subtopics: ["Angles, polygons and circle theorems", "Mensuration of plane and solid shapes", "Trigonometry, bearings and the sine and cosine rules", "Coordinate geometry, longitude and latitude"],
      objectives: ["Apply angle properties of lines, polygons and circles", "Calculate lengths, areas and volumes of plane and solid shapes", "Solve triangles and problems on bearings, elevation and depression", "Solve problems in coordinate geometry and on the earth as a sphere"],
      lesson: {
        title: "Revising Geometry, Mensuration and Trigonometry",
        summary: "Consolidate the geometry and trigonometry topics most often examined.",
        minutes: 40,
        notes: `## Angles and polygons
- angles of a triangle: 180°; exterior angle = sum of interior opposite angles
- interior angles of an $n$-sided polygon: $(n - 2) \\times 180°$; exterior angles: 360°
- regular polygon: each exterior angle $= \\dfrac{360°}{n}$

## Similar and congruent figures
Congruent: SSS, SAS, ASA, RHS. Similar: corresponding sides in the same ratio $k$; areas in ratio $k^2$; volumes in ratio $k^3$.

## Circle theorems
1. The angle at the **centre** is **twice** the angle at the circumference on the same arc.
2. Angles in the **same segment** are equal.
3. The angle in a **semicircle** is 90°.
4. Opposite angles of a **cyclic quadrilateral** add up to 180°.
5. A **tangent** is perpendicular to the radius at the point of contact.
6. Tangents from an external point are **equal**.
7. **Alternate segment:** the angle between a tangent and a chord equals the angle in the alternate segment.
8. The perpendicular from the centre **bisects** a chord.

## Mensuration
| Shape | Formula |
|---|---|
| triangle | $\\tfrac12bh$ or $\\tfrac12ab\\sin C$ |
| trapezium | $\\tfrac12(a + b)h$ |
| circle | $C = 2\\pi r$, $A = \\pi r^2$ |
| arc / sector | $\\dfrac{\\theta}{360}2\\pi r$ / $\\dfrac{\\theta}{360}\\pi r^2$ |
| cylinder | $V = \\pi r^2h$; curved surface $2\\pi rh$ |
| cone | $V = \\tfrac13\\pi r^2h$; curved surface $\\pi rl$ |
| sphere | $V = \\tfrac43\\pi r^3$; surface $4\\pi r^2$ |
| pyramid | $V = \\tfrac13 \\times$ base area × height |

## Trigonometry
- SOH–CAH–TOA; $\\sin^2\\theta + \\cos^2\\theta = 1$
- special angles: $\\sin30° = \\tfrac12$, $\\cos30° = \\tfrac{\\sqrt3}{2}$, $\\tan45° = 1$, $\\tan60° = \\sqrt3$
- **sine rule:** $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$ (two angles and a side, or two sides and a non-included angle)
- **cosine rule:** $a^2 = b^2 + c^2 - 2bc\\cos A$ (two sides and the included angle, or three sides)

## Bearings
Measured **clockwise from north** as three figures (045°, 210°), or as compass bearings (N45°E). The **back bearing** differs by 180°.

## Elevation and depression
Measured from the **horizontal**; equal by alternate angles.

## Coordinate geometry
distance $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$; mid-point; gradient $\\dfrac{y_2-y_1}{x_2-x_1}$; $y = mx + c$; parallel $m_1 = m_2$; perpendicular $m_1m_2 = -1$.

## Longitude and latitude
radius of parallel $R\\cos\\alpha$; arc along a meridian $\\dfrac{\\theta}{360}2\\pi R$; along a parallel $\\dfrac{\\theta}{360}2\\pi R\\cos\\alpha$; 15° = 1 hour.

## Construction and loci
perpendicular bisector; angle bisector; 60°, 90° and their halves; circle of given radius.

## Hints
Always **draw and label a diagram**; state a **reason** for each angle; keep full calculator accuracy until the last step.`,
        examples: `**Example 1.** An angle at the circumference of a circle is 35°. Find the angle at the centre on the same arc. *Solution:* $2 \\times 35° = \\mathbf{70°}$.

**Example 2.** In triangle ABC, $b = 5$, $c = 8$ and $A = 60°$. Find $a$. *Solution:* $a^2 = 25 + 64 - 80(0.5) = 49$, so $a = \\mathbf{7}$.

**Example 3.** The bearing of Q from P is 070°. Find the bearing of P from Q. *Solution:* $70° + 180° = \\mathbf{250°}$.`,
      },
      questions: [
        ["E", "AB is a diameter of a circle and C is a point on the circumference. The size of angle ACB is", "90°", "180°", "45°", "60°","It stands on a diameter."],
        ["E", "Opposite angles of a cyclic quadrilateral add up to", "180°", "360°", "90°", "270°", "They are supplementary."],
        ["E", "The area of a trapezium with parallel sides 6 cm and 10 cm and height 5 cm is", "40 cm²", "80 cm²", "30 cm²", "60 cm²", "Half of 16 × 5."],
        ["M", "An angle at the circumference of a circle is 35°. The angle at the centre standing on the same arc is", "70°", "35°", "17.5°", "145°", "Twice the angle at the circumference."],
        ["M", "The bearing of Q from P is 070°. The bearing of P from Q is", "250°", "110°", "290°", "070°", "Add 180° for the back bearing."],
        ["M", "In triangle ABC, $A = 30°$, $B = 45°$ and $a = 10$ cm. The side $b$ is", "$10\\sqrt2$ cm", "$5\\sqrt2$ cm", "20 cm", "$10\\sqrt3$ cm", "b = 10 sin 45° ÷ sin 30°."],
        ["M", "Two similar triangles have corresponding sides in the ratio 2 : 3. The ratio of their areas is", "4 : 9", "2 : 3", "8 : 27", "6 : 9", "Areas vary as the square of the sides."],
        ["H", "In triangle ABC, $b = 5$ cm, $c = 8$ cm and $A = 60°$. The side $a$ is", "7 cm", "$\\sqrt{129}$ cm", "9 cm", "6 cm", "a² = 25 + 64 − 40."],
        ["H", "A tangent to a circle makes an angle of 50° with a chord drawn from the point of contact. The angle in the alternate segment is", "50°", "40°", "100°", "130°", "The alternate segment theorem."],
        ["H", "A chord of length 16 cm is 6 cm from the centre of a circle. The radius of the circle is", "10 cm", "8 cm", "14 cm", "$\\sqrt{28}$ cm", "√(8² + 6²). Answer: 10 cm."],
      ],
      jamb: [
        ["M", "A ship sails 6 km due north and then 8 km due east. How far is it from its starting point?", "10 km", "14 km", "2 km", "48 km", "A 6-8-10 right-angled triangle."],
        ["H", "In a triangle, the sides are 7 cm, 8 cm and 13 cm. Find the largest angle.", "120°", "60°", "150°", "90°", "cos C = (49 + 64 − 169) ÷ 112 = −1/2."],
      ],
    },
    {
      week: 4,
      title: "Examination Revision: Statistics and Probability",
      subtopics: ["Presentation of data", "Measures of central tendency", "Measures of dispersion", "Probability"],
      objectives: ["Interpret tables, charts and cumulative frequency curves", "Calculate the mean, median and mode of raw and grouped data", "Calculate range, mean deviation, variance and standard deviation", "Calculate probabilities of single and combined events"],
      lesson: {
        title: "Revising Statistics and Probability",
        summary: "Consolidate the statistics and probability topics most often examined.",
        minutes: 40,
        notes: `## Presenting data
- **bar chart** — bars with gaps; discrete data
- **pie chart** — angle $= \\dfrac{\\text{frequency}}{\\text{total}} \\times 360°$
- **histogram** — no gaps; bars on class boundaries
- **frequency polygon** — frequency against class mark
- **ogive** — cumulative frequency against **upper class boundary**

## Measures of central tendency
| Measure | Ungrouped | Grouped |
|---|---|---|
| **mean** | $\\bar x = \\dfrac{\\sum x}{n}$ or $\\dfrac{\\sum fx}{\\sum f}$ | use class marks as $x$ |
| **median** | middle value when ordered | from the ogive at $\\tfrac12N$ |
| **mode** | most frequent value | modal class / histogram |
For an even number of values the median is the mean of the two middle values.

## Quartiles and percentiles (from the ogive)
lower quartile $Q_1$ at $\\tfrac14N$; median at $\\tfrac12N$; upper quartile $Q_3$ at $\\tfrac34N$.
**Interquartile range** $= Q_3 - Q_1$; **semi-interquartile range** $= \\tfrac12(Q_3 - Q_1)$.

## Measures of dispersion
- **range** $=$ highest − lowest
- **mean deviation** $= \\dfrac{\\sum |x - \\bar x|}{n}$
- **variance** $= \\dfrac{\\sum (x - \\bar x)^2}{n}$
- **standard deviation** $= \\sqrt{\\text{variance}}$

*For 2, 4, 6, 8, 10:* mean 6; deviations $-4, -2, 0, 2, 4$; squares 16, 4, 0, 4, 16; variance $= 8$; standard deviation $= 2\\sqrt2 \\approx 2.83$; mean deviation $= \\tfrac{12}{5} = 2.4$.

## Probability
$$P(E) = \\frac{\\text{number of favourable outcomes}}{\\text{total number of equally likely outcomes}}, \\quad 0 \\le P(E) \\le 1$$
- $P(\\text{not } E) = 1 - P(E)$
- **mutually exclusive** events (cannot happen together): $P(A \\text{ or } B) = P(A) + P(B)$
- **independent** events (one does not affect the other): $P(A \\text{ and } B) = P(A) \\times P(B)$
- **with replacement** — probabilities stay the same; **without replacement** — the totals reduce

### Examples
- A fair die: $P(\\text{prime}) = \\tfrac36 = \\tfrac12$.
- Two coins: $P(\\text{two heads}) = \\tfrac14$.
- Bag with 3 red and 5 blue balls, two drawn **without replacement**: $P(\\text{both red}) = \\tfrac38 \\times \\tfrac27 = \\tfrac{3}{28}$.
- Two dice: 36 outcomes; $P(\\text{sum} = 7) = \\tfrac{6}{36} = \\tfrac16$.
- "**At least one**": $1 - P(\\text{none})$.

## Permutations and combinations
- arrangements of $n$ different objects: $n!$
- $^nP_r = \\dfrac{n!}{(n - r)!}$ (order matters); $^nC_r = \\dfrac{n!}{r!(n - r)!}$ (order does not matter)
- letters with repeats: divide by the factorials of the repeats

## Hints
- in a frequency table, **check the total**
- give probabilities as **fractions in lowest terms** unless told otherwise
- draw a **tree diagram** or **sample space** for combined events`,
        examples: `**Example 1.** Find the mean of 4, 7, 9, 10, 15. *Solution:* $\\dfrac{45}{5} = \\mathbf{9}$.

**Example 2.** Find the standard deviation of 2, 4, 6, 8, 10. *Solution:* variance $= 8$; standard deviation $= \\mathbf{2\\sqrt2 \\approx 2.83}$.

**Example 3.** A bag has 3 red and 5 blue balls. Two are drawn without replacement. Find the probability that both are red. *Solution:* $\\tfrac38 \\times \\tfrac27 = \\mathbf{\\tfrac{3}{28}}$.`,
      },
      questions: [
        ["E", "The mean of 4, 7, 9, 10 and 15 is", "9", "10", "45", "8", "45 ÷ 5. Answer: 9."],
        ["E", "The mode of 3, 5, 5, 6, 8, 5, 9 is", "5", "6", "8", "3", "It occurs most often."],
        ["E", "The probability of a certain event is", "1", "0", "0.5", "100", "It must happen."],
        ["M", "The median of 7, 3, 9, 5, 11, 4 is", "6", "5", "7", "6.5", "Ordered: 3, 4, 5, 7, 9, 11; mean of 5 and 7."],
        ["M", "A fair die is thrown once. The probability of getting a prime number is", "$\\frac12$", "$\\frac13$", "$\\frac23$", "$\\frac16$", "The primes are 2, 3 and 5."],
        ["M", "The range of 12, 7, 19, 4, 15 is", "15", "19", "11", "4", "19 − 4. Answer: 15."],
        ["M", "Two fair coins are tossed. The probability of getting two heads is", "$\\frac14$", "$\\frac12$", "$\\frac34$", "$\\frac13$", "One outcome in four."],
        ["H", "The variance of 2, 4, 6, 8, 10 is", "8", "40", "2.83", "6", "40 ÷ 5. Answer: 8."],
        ["H", "A bag contains 3 red and 5 blue balls. Two balls are drawn without replacement. The probability that both are red is", "$\\frac{3}{28}$", "$\\frac{9}{64}$", "$\\frac{3}{8}$", "$\\frac{15}{56}$", "3/8 × 2/7. Answer: $\\frac{3}{28}$."],
        ["H", "Two fair dice are thrown together. The probability that the sum of the scores is 7 is", "$\\frac16$", "$\\frac{7}{36}$", "$\\frac{1}{12}$", "$\\frac{5}{36}$", "Six of the 36 outcomes."],
      ],
      jamb: [
        ["M", "The mean of five numbers is 12. If four of the numbers are 9, 10, 14 and 15, find the fifth.", "12", "10", "13", "8", "60 − 48. Answer: 12."],
        ["H", "In how many ways can a committee of 3 be chosen from 7 people?", "35", "210", "21", "343", "7C3 = 7 × 6 × 5 ÷ 6."],
      ],
    },
  ],
};
