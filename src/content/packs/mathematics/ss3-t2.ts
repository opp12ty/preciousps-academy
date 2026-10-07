import type { TermPlan } from "../types";

/** SS3 Mathematics, Second Term — original Precious PS content following the NERDC 2025 scheme of work. */
export const ss3t2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "Financial Mathematics: Shares, Bonds and Taxes",
      subtopics: ["Shares and dividends", "Bonds and debentures", "Income tax", "Value-added tax"],
      objectives: ["Explain shares, dividends, bonds and debentures", "Calculate dividends and yields on shares", "Calculate income tax from allowances and tax rates", "Calculate value-added tax on goods and services"],
      lesson: {
        title: "Shares, Bonds and Taxation",
        summary: "Solve problems on shares, bonds, debentures, income tax and value-added tax.",
        minutes: 40,
        notes: `## Shares
A **share** is a unit of ownership in a company. Shareholders are **part-owners** and receive a share of the profit called a **dividend**.
- **nominal (par) value** — the value printed on the share
- **market value** — the price at which it is bought or sold on the **stock exchange**; it may be above par (at a **premium**) or below par (at a **discount**)
- **dividend** — usually declared as a **percentage of the nominal value** (or as so many kobo per share)
$$\\text{dividend} = \\text{rate} \\times \\text{nominal value of shares held}$$
$$\\text{yield} = \\frac{\\text{dividend}}{\\text{amount invested (market value)}} \\times 100\\%$$
*500 shares of ₦1 nominal value bought at ₦1.25; dividend 10%.* Cost ₦625; dividend $= 10\\%$ of ₦500 $=$ ₦50; yield $= \\tfrac{50}{625} \\times 100 = 8\\%$.

## Bonds and debentures
- A **bond** is a loan to a **government or company** for a fixed period at a **fixed rate of interest** (the **coupon**). The holder is a **lender**, not an owner.
- A **debenture** is a long-term loan to a **company**, usually secured on its assets, paying fixed interest whether or not a profit is made.
*₦200,000 of a 12% bond pays ₦24,000 interest each year.*
Shares carry more risk and possibly higher returns; bonds and debentures give a steady, lower return.

## Income tax
Tax paid on what a person earns.
1. **Gross income** — total earnings.
2. Subtract **allowances / reliefs** (personal, children, dependants) to get **taxable income**.
3. Apply the **rate(s)** to the taxable income.
4. **Net income** $=$ gross income $-$ tax.

*Gross income ₦1,200,000; allowances ₦300,000; tax at 10%.* Taxable income ₦900,000; tax ₦90,000; net income ₦1,110,000.

### Graduated (banded) tax
*First ₦300,000 at 7%; the rest at 11%.* On taxable income ₦900,000: $21\\,000 + 0.11 \\times 600\\,000 = 21\\,000 + 66\\,000 = ₦87{,}000$.

Tax deducted from salary at source is **PAYE** (Pay As You Earn).

## Value-added tax (VAT)
A tax on **goods and services**, added to the price and paid by the consumer. Take the rate given in the question (Nigeria's standard rate is 7.5%).
$$\\text{VAT} = \\text{rate} \\times \\text{price before tax} \\qquad \\text{selling price} = \\text{price} + \\text{VAT}$$
*A phone priced at ₦40,000 before VAT at 7.5%:* VAT ₦3,000; customer pays ₦43,000.
**Working backwards:** if the VAT-inclusive price is ₦21,500 at 7.5%, the price before VAT is $21\\,500 \\div 1.075 = ₦20{,}000$.

## Using logarithms
Long products and quotients in interest and tax problems may be evaluated with logarithm tables.

## Why it matters
These ideas help citizens to **invest wisely**, understand their **pay slips** and see how government raises **revenue**.`,
        examples: `**Example 1.** A man holds 2,000 shares of nominal value ₦0.50 each. A dividend of 12% is declared. Find his dividend. *Solution:* nominal value ₦1,000; dividend $= 12\\%$ of ₦1,000 $= \\mathbf{₦120}$.

**Example 2.** Gross income ₦1,200,000; allowances ₦300,000; tax rate 10%. Find the tax. *Solution:* taxable income ₦900,000; tax $= \\mathbf{₦90{,}000}$.

**Example 3.** Find the VAT at 7.5% on an article priced ₦40,000. *Solution:* $0.075 \\times 40\\,000 = \\mathbf{₦3{,}000}$.`,
      },
      questions: [
        ["E", "The part of a company's profit paid to its shareholders is called", "dividend", "debenture", "premium", "tax", "It is declared as a percentage of nominal value."],
        ["E", "A tax added to the price of goods and services is", "value-added tax", "income tax", "company tax", "customs duty only", "The consumer pays it."],
        ["E", "A long-term loan to a company at a fixed rate of interest is a", "debenture", "share", "dividend", "relief", "Its holder is a lender, not an owner."],
        ["M", "A man holds 2,000 shares of nominal value ₦0.50 each. If a dividend of 12% is declared, he receives", "₦120", "₦240", "₦60", "₦1,200", "12% of ₦1,000. Answer: ₦120."],
        ["M", "The VAT at 7.5% on an article priced ₦40,000 is", "₦3,000", "₦750", "₦7,500", "₦300", "0.075 × 40 000."],
        ["M", "A person's taxable income is his gross income less", "allowances", "net income", "dividends", "VAT", "Reliefs are deducted before tax is charged."],
        ["M", "A woman earns ₦1,200,000 a year and has allowances of ₦300,000. If tax is 10% of taxable income, she pays", "₦90,000", "₦120,000", "₦30,000", "₦150,000", "10% of ₦900,000."],
        ["H", "500 shares of nominal value ₦1 are bought at ₦1.25 each. A dividend of 10% is declared. The yield on the investment is", "8%", "10%", "12.5%", "25%", "₦50 on ₦625. Answer: 8%."],
        ["H", "Tax is charged at 7% on the first ₦300,000 of taxable income and 11% on the rest. The tax on a taxable income of ₦900,000 is", "₦87,000", "₦99,000", "₦63,000", "₦162,000", "21 000 + 66 000."],
        ["H", "An article costs ₦21,500 inclusive of VAT at 7.5%. Its price before VAT is", "₦20,000", "₦19,887.50", "₦23,112.50", "₦20,500", "21 500 ÷ 1.075."],
      ],
      jamb: [
        ["M", "A man invests ₦150,000 in a bond that pays interest at 12% per annum. What interest does he receive in one year?", "₦18,000", "₦12,000", "₦1,800", "₦15,000", "12% of ₦150,000."],
        ["H", "A company declares a dividend of 15 kobo per share. How much does a shareholder with 8,000 shares receive?", "₦1,200", "₦120", "₦12,000", "₦533", "8000 × ₦0.15. Answer: ₦1,200."],
      ],
    },
    {
      week: 2,
      title: "Coordinate Geometry of a Straight Line",
      subtopics: ["Distance between two points and mid-point", "Gradient and intercepts", "Equation of a straight line", "Parallel and perpendicular lines"],
      objectives: ["Find the distance between two points and the mid-point of a line segment", "Find the gradient and intercepts of a straight line", "Find the equation of a straight line from given information", "Use the conditions for parallel and perpendicular lines"],
      lesson: {
        title: "Lines on the Cartesian Plane",
        summary: "Find distances, mid-points, gradients and equations of straight lines.",
        minutes: 40,
        notes: `## The Cartesian plane
Every point has coordinates $(x, y)$: the **abscissa** $x$ and the **ordinate** $y$.

## Distance between two points
For $A(x_1, y_1)$ and $B(x_2, y_2)$ (Pythagoras):
$$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
*$A(1, 2)$, $B(4, 6)$:* $\\sqrt{9 + 16} = 5$.

## Mid-point
$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$
*Mid-point of $(1, 2)$ and $(5, 8)$ is $(3, 5)$.*

## Gradient
$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}} = \\tan\\theta$$
where $\\theta$ is the angle the line makes with the positive $x$-axis.
- line rising to the right: positive gradient
- line falling to the right: negative gradient
- horizontal line: gradient $0$; vertical line: gradient undefined

## Equation of a straight line
| Form | Equation | Use when you know |
|---|---|---|
| gradient–intercept | $y = mx + c$ | gradient $m$ and $y$-intercept $c$ |
| point–gradient | $y - y_1 = m(x - x_1)$ | a point and the gradient |
| two-point | $\\dfrac{y - y_1}{x - x_1} = \\dfrac{y_2 - y_1}{x_2 - x_1}$ | two points |
| intercept | $\\dfrac xa + \\dfrac yb = 1$ | both intercepts |
| general | $ax + by + c = 0$ | — |

*Line through $(2, 3)$ with gradient 4:* $y - 3 = 4(x - 2) \\Rightarrow y = 4x - 5$.
*Line through $(1, 2)$ and $(3, 8)$:* $m = 3$; $y - 2 = 3(x - 1) \\Rightarrow y = 3x - 1$.

## Reading gradient and intercepts
Rewrite as $y = mx + c$. For $2x + 3y = 12$: $y = -\\tfrac23x + 4$, so $m = -\\tfrac23$, $y$-intercept 4. Put $y = 0$ for the $x$-intercept: $x = 6$.

## Parallel and perpendicular lines
- **parallel:** $m_1 = m_2$
- **perpendicular:** $m_1 m_2 = -1$ (each gradient is the negative reciprocal of the other)
*A line perpendicular to $y = 2x + 1$ has gradient $-\\tfrac12$.*

## Point of intersection
Solve the two equations simultaneously.

## Area and collinearity
Three points are **collinear** if the gradients between pairs are equal.

## Applications
Straight-line graphs model **constant rates**: distance–time at steady speed; cost $=$ fixed charge $+$ rate × quantity; conversion graphs; the "line of best fit" used in business and science. In $y = mx + c$, $m$ is the **rate of change** and $c$ the **starting value**.`,
        examples: `**Example 1.** Find the distance between $A(1, 2)$ and $B(4, 6)$. *Solution:* $\\sqrt{3^2 + 4^2} = \\mathbf{5}$ units.

**Example 2.** Find the equation of the line through $(2, 3)$ with gradient 4. *Solution:* $y - 3 = 4(x - 2)$, so $\\mathbf{y = 4x - 5}$.

**Example 3.** Find the gradient of a line perpendicular to $y = 2x + 1$. *Solution:* $m \\times 2 = -1$, so $m = \\mathbf{-\\tfrac12}$.`,
      },
      questions: [
        ["E", "The gradient of the line $y = 3x - 2$ is", "3", "$-2$", "2", "$-3$", "In y = mx + c, m is the gradient."],
        ["E", "The mid-point of the line joining $(1, 2)$ and $(5, 8)$ is", "(3, 5)", "(6, 10)", "(2, 3)", "(4, 6)", "Average the x- and y-coordinates."],
        ["E", "The $y$-intercept of the line $y = 4x + 7$ is", "7", "4", "$-7$", "$\\frac74$", "The value of y when x = 0."],
        ["M", "The distance between the points $(1, 2)$ and $(4, 6)$ is", "5 units", "7 units", "25 units", "$\\sqrt7$ units", "√(9 + 16). Answer: 5 units."],
        ["M", "The gradient of the line joining $(1, 2)$ and $(3, 8)$ is", "3", "$\\frac13$", "6", "2", "(8 − 2) ÷ (3 − 1)."],
        ["M", "The equation of the line through $(2, 3)$ with gradient 4 is", "$y = 4x - 5$", "$y = 4x + 3$", "$y = 4x - 11$", "$y = 3x + 4$", "y − 3 = 4(x − 2)."],
        ["M", "Two lines are parallel if their gradients are", "equal", "negative reciprocals", "both zero only", "opposite in sign", "Parallel lines have the same slope."],
        ["H", "The gradient of a line perpendicular to $y = 2x + 1$ is", "$-\\frac12$", "$\\frac12$", "$-2$", "2", "The product of the gradients is −1."],
        ["H", "The gradient of the line $2x + 3y = 12$ is", "$-\\frac23$", "$\\frac23$", "$-\\frac32$", "4", "Rearranged: y = −(2/3)x + 4."],
        ["H", "The equation of the line through $(1, 2)$ perpendicular to $y = 3x - 4$ is", "$x + 3y = 7$", "$3x + y = 5$", "$x - 3y = -5$", "$3x - y = 1$", "Gradient −1/3: y − 2 = −(1/3)(x − 1)."],
      ],
      jamb: [
        ["M", "Find the equation of the straight line passing through $(0, 4)$ and $(2, 0)$.", "$y = -2x + 4$", "$y = 2x + 4$", "$y = -\\frac12 x + 4$", "$y = 4x - 2$", "Gradient −2 and y-intercept 4."],
        ["H", "If the lines $3y = 4x - 1$ and $qy = x + 3$ are parallel, find $q$.", "$\\frac34$", "$\\frac43$", "$-\\frac34$", "$4$", "4/3 = 1/q. Answer: $\\frac34$."],
      ],
    },
    {
      week: 3,
      title: "Construction: Loci and Circles of a Triangle",
      subtopics: ["Standard loci", "Circumscribed circle", "Inscribed circle", "Escribed circle"],
      objectives: ["Construct the loci of points equidistant from points and lines", "Construct the circumscribed circle of a triangle", "Construct the inscribed circle of a triangle", "Construct an escribed circle of a triangle"],
      lesson: {
        title: "Loci and the Circles of a Triangle",
        summary: "Construct the standard loci and the circumscribed, inscribed and escribed circles of a triangle.",
        minutes: 40,
        notes: `## Locus
A **locus** is the path of a point that moves so as to satisfy a given condition.

## The standard loci
| Condition | Locus | Construction |
|---|---|---|
| fixed distance $r$ from a point O | **circle**, centre O, radius $r$ | compasses |
| equidistant from two points A, B | **perpendicular bisector** of AB | equal arcs from A and B |
| equidistant from two intersecting lines | **angle bisector(s)** | arcs from the vertex, then from the arms |
| fixed distance from a line | **two parallel lines** | perpendiculars of the given length |
| subtending 90° at a line AB | **circle on AB as diameter** | bisect AB; draw the circle |

A point satisfying **two conditions** is where the two loci **intersect**.

## The circumscribed circle (circumcircle)
The circle that **passes through the three vertices** of a triangle.
1. Construct the **perpendicular bisectors** of any **two sides**.
2. They meet at the **circumcentre** O.
3. With centre O and radius OA, draw the circle through A, B and C.
O is **equidistant from the three vertices**. For an acute triangle O is inside; for a right-angled triangle it is the **mid-point of the hypotenuse**; for an obtuse triangle it is outside.

## The inscribed circle (incircle)
The circle that **touches the three sides** inside the triangle.
1. Construct the **bisectors of any two angles**.
2. They meet at the **incentre** I.
3. From I drop a **perpendicular** to one side, meeting it at P.
4. With centre I and radius IP, draw the circle.
I is **equidistant from the three sides**, and always lies inside the triangle.

## An escribed circle (excircle)
A circle that **touches one side and the other two sides produced**.
1. **Produce** two sides, say AB and AC, beyond B and C.
2. Bisect the **exterior angles** at B and C.
3. The bisectors meet at the **excentre** E.
4. Drop a perpendicular from E to BC; use its length as radius.
A triangle has **three** escribed circles.

## Summary
| Circle | Centre found from | Touches / passes through |
|---|---|---|
| circumscribed | perpendicular bisectors of sides | the three vertices |
| inscribed | bisectors of interior angles | the three sides |
| escribed | bisectors of two exterior angles | one side and two sides produced |

## Useful facts
- Radius of the circumcircle: $R = \\dfrac{a}{2\\sin A}$.
- Radius of the incircle: $r = \\dfrac{\\text{area}}{s}$, where $s$ is half the perimeter.
- For a 3-4-5 triangle: $R = 2.5$, $r = \\dfrac{6}{6} = 1$.

## Examination practice
Draw a sketch first; use a sharp pencil; **leave all arcs**; measure and state the required lengths (usually to the nearest 0.1 cm) and angles (to the nearest degree).`,
        examples: `**Example 1.** Which lines are constructed to find the centre of the circumscribed circle? *Solution:* the **perpendicular bisectors of two sides**.

**Example 2.** Where is the circumcentre of a right-angled triangle? *Solution:* at the **mid-point of the hypotenuse**.

**Example 3.** Find the radius of the inscribed circle of a triangle with sides 3 cm, 4 cm and 5 cm. *Solution:* area $= 6$ cm², $s = 6$ cm; $r = 6 \\div 6 = \\mathbf{1}$ cm.`,
      },
      questions: [
        ["E", "The circle that passes through the three vertices of a triangle is the", "circumscribed circle", "inscribed circle", "escribed circle", "semicircle", "It is also called the circumcircle."],
        ["E", "The circle that touches the three sides of a triangle from inside is the", "inscribed circle", "circumscribed circle", "escribed circle", "concentric circle", "It is also called the incircle."],
        ["E", "The locus of points equidistant from two fixed points is the", "perpendicular bisector of the line joining them", "circle through them", "line joining them", "angle bisector", "Each point on it is the same distance from both."],
        ["M", "The centre of the circumscribed circle of a triangle is found by constructing the", "perpendicular bisectors of the sides", "bisectors of the angles", "medians", "altitudes", "They meet at the circumcentre."],
        ["M", "The centre of the inscribed circle of a triangle is found by constructing the", "bisectors of the angles", "perpendicular bisectors of the sides", "medians", "tangents at the vertices", "They meet at the incentre."],
        ["M", "The circumcentre of a right-angled triangle lies", "at the mid-point of the hypotenuse", "at the right-angled vertex", "outside the triangle", "at the centroid", "The hypotenuse is a diameter of the circumcircle."],
        ["M", "A circle that touches one side of a triangle and the other two sides produced is", "an escribed circle", "an inscribed circle", "a circumscribed circle", "a nine-point circle", "Its centre is an excentre."],
        ["H", "The radius of the inscribed circle of a triangle with sides 3 cm, 4 cm and 5 cm is", "1 cm", "2.5 cm", "2 cm", "1.5 cm", "Area 6 divided by semi-perimeter 6."],
        ["H", "The radius of the circumscribed circle of a triangle with sides 6 cm, 8 cm and 10 cm is", "5 cm", "4 cm", "10 cm", "2 cm", "The hypotenuse 10 cm is a diameter."],
        ["H", "The locus of a point P such that angle APB is 90° for fixed points A and B is", "the circle on AB as diameter", "the perpendicular bisector of AB", "a line parallel to AB", "the bisector of angle A", "The angle in a semicircle is a right angle."],
      ],
      jamb: [
        ["M", "The incentre of a triangle is equidistant from the triangle's", "three sides", "three vertices", "three mid-points only", "three altitudes", "It lies on all three angle bisectors."],
        ["H", "The number of escribed circles that can be drawn to a triangle is", "three", "one", "two", "six", "One opposite each vertex."],
      ],
    },
    {
      week: 4,
      title: "Differentiation of Algebraic Functions I",
      subtopics: ["Idea of a limit", "Differentiation from first principles", "The power rule", "Derivatives of sums, products and quotients"],
      objectives: ["Explain the idea of a limit", "Differentiate simple functions from first principles", "Differentiate polynomials using the power rule", "Apply the product, quotient and chain rules"],
      lesson: {
        title: "Finding Derivatives",
        summary: "Differentiate algebraic functions from first principles and by the standard rules.",
        minutes: 40,
        notes: `## Limits
The **limit** of $f(x)$ as $x$ approaches $a$ is the value $f(x)$ gets closer and closer to.
$$\\lim_{x \\to 2}(3x + 1) = 7 \\qquad \\lim_{x \\to 3}\\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3}(x + 3) = 6$$

## Gradient of a curve
The gradient of a curve **changes** from point to point. The gradient at a point is the gradient of the **tangent** there. It is found as the limit of the gradient of a **chord** as the chord shrinks.

## First principles
$$\\frac{dy}{dx} = \\lim_{h \\to 0}\\frac{f(x + h) - f(x)}{h}$$
For $y = x^2$:
$\\dfrac{(x+h)^2 - x^2}{h} = \\dfrac{2xh + h^2}{h} = 2x + h \\to 2x$ as $h \\to 0$.
So $\\dfrac{dy}{dx} = 2x$.

$\\dfrac{dy}{dx}$, $y'$ and $f'(x)$ all denote the **derivative** (derived function, differential coefficient).

## The power rule
$$\\frac{d}{dx}(ax^n) = anx^{n-1}$$
| $y$ | $\\dfrac{dy}{dx}$ |
|---|---|
| $x^5$ | $5x^4$ |
| $3x^4$ | $12x^3$ |
| $7x$ | $7$ |
| $9$ (constant) | $0$ |
| $\\dfrac1x = x^{-1}$ | $-\\dfrac{1}{x^2}$ |
| $\\sqrt x = x^{1/2}$ | $\\dfrac{1}{2\\sqrt x}$ |

## Sums and differences
Differentiate **term by term**:
$y = 3x^4 - 5x^2 + 7x - 2 \\Rightarrow \\dfrac{dy}{dx} = 12x^3 - 10x + 7$.

## Product rule
If $y = uv$: $\\dfrac{dy}{dx} = u\\dfrac{dv}{dx} + v\\dfrac{du}{dx}$.
$y = (x + 1)(x^2 - 3)$: $(x+1)(2x) + (x^2 - 3)(1) = 3x^2 + 2x - 3$.

## Quotient rule
If $y = \\dfrac uv$: $\\dfrac{dy}{dx} = \\dfrac{v\\dfrac{du}{dx} - u\\dfrac{dv}{dx}}{v^2}$.
$y = \\dfrac{x}{x + 1}$: $\\dfrac{(x+1)(1) - x(1)}{(x+1)^2} = \\dfrac{1}{(x+1)^2}$.

## Chain rule (function of a function)
If $y = f(u)$ and $u = g(x)$: $\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\times \\dfrac{du}{dx}$.
$y = (2x + 1)^5$: $5(2x+1)^4 \\times 2 = 10(2x+1)^4$.

## Gradient at a point
Substitute the $x$-value into the derivative. For $y = x^2 - 4x$ at $x = 3$: $2(3) - 4 = 2$.

## Second derivative
$\\dfrac{d^2y}{dx^2}$ is the derivative of $\\dfrac{dy}{dx}$. For $y = x^3$: $3x^2$, then $6x$.`,
        examples: `**Example 1.** Differentiate $y = 3x^4 - 5x^2 + 7x - 2$. *Solution:* $\\mathbf{12x^3 - 10x + 7}$.

**Example 2.** Find the gradient of $y = x^2 - 4x$ at $x = 3$. *Solution:* $\\dfrac{dy}{dx} = 2x - 4 = \\mathbf{2}$.

**Example 3.** Differentiate $y = (2x + 1)^5$. *Solution:* $5(2x+1)^4 \\times 2 = \\mathbf{10(2x+1)^4}$.`,
      },
      questions: [
        ["E", "The derivative of $x^5$ with respect to $x$ is", "$5x^4$", "$x^4$", "$5x^5$", "$\\frac{x^6}{6}$", "Multiply by the index and reduce it by one."],
        ["E", "The derivative of a constant is", "0", "1", "the constant", "$x$", "A constant does not change."],
        ["E", "$\\dfrac{dy}{dx}$ at a point on a curve gives the", "gradient of the tangent at that point", "area under the curve", "y-intercept", "length of the curve", "It measures the rate of change of y with x."],
        ["M", "Differentiate $y = 3x^4 - 5x^2 + 7x - 2$.", "$12x^3 - 10x + 7$", "$12x^3 - 10x + 5$", "$3x^3 - 5x + 7$", "$12x^4 - 10x^2 + 7$", "Differentiate term by term."],
        ["M", "Evaluate $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$.", "6", "0", "9", "undefined", "Cancel the factor (x − 3) to get x + 3."],
        ["M", "The gradient of the curve $y = x^2 - 4x$ at $x = 3$ is", "2", "$-3$", "6", "$-1$", "2x − 4 at x = 3."],
        ["M", "Differentiate $y = \\dfrac{1}{x}$.", "$-\\frac{1}{x^2}$", "$\\frac{1}{x^2}$", "$-x$", "$\\ln x$", "Write as x to the power −1."],
        ["H", "Differentiate $y = (2x + 1)^5$.", "$10(2x + 1)^4$", "$5(2x + 1)^4$", "$10(2x + 1)^5$", "$5(2x)^4$", "Chain rule: multiply by the derivative of the bracket."],
        ["H", "Differentiate $y = (x + 1)(x^2 - 3)$.", "$3x^2 + 2x - 3$", "$2x^2 + 2x$", "$3x^2 - 3$", "$x^2 + 2x - 3$", "Product rule or expand first."],
        ["H", "Differentiate $y = \\dfrac{x}{x + 1}$.", "$\\frac{1}{(x + 1)^2}$", "$\\frac{-1}{(x + 1)^2}$", "$\\frac{2x + 1}{(x + 1)^2}$", "$1$", "Quotient rule: (x + 1 − x) over (x + 1)²."],
      ],
      jamb: [
        ["M", "If $y = 4x^3 - 2x^2 + x$, find $\\dfrac{dy}{dx}$ at $x = 1$.", "9", "3", "12", "7", "12 − 4 + 1. Answer: 9."],
        ["H", "Find the derivative of $y = \\sqrt{x^2 + 1}$.", "$\\dfrac{x}{\\sqrt{x^2 + 1}}$", "$\\dfrac{1}{2\\sqrt{x^2 + 1}}$", "$\\dfrac{2x}{\\sqrt{x^2 + 1}}$", "$2x\\sqrt{x^2 + 1}$", "Chain rule: half times 2x over the root."],
      ],
    },
    {
      week: 6,
      title: "Differentiation of Algebraic Functions II",
      subtopics: ["Tangents and normals", "Maxima and minima", "Rates of change", "Applications in business"],
      objectives: ["Find the equations of the tangent and normal to a curve", "Find and classify turning points", "Solve problems on rates of change", "Apply differentiation to maximise profit or minimise cost"],
      lesson: {
        title: "Applications of Differentiation",
        summary: "Use derivatives to find tangents, turning points, rates of change and optimal values.",
        minutes: 40,
        notes: `## Tangent and normal
At the point $(x_1, y_1)$ on a curve, the gradient of the **tangent** is $m = \\dfrac{dy}{dx}$ evaluated at $x_1$.
- Tangent: $y - y_1 = m(x - x_1)$
- **Normal** (perpendicular to the tangent): gradient $-\\dfrac1m$

*$y = x^2$ at $(2, 4)$:* $m = 4$. Tangent $y - 4 = 4(x - 2)$, i.e. $y = 4x - 4$. Normal: $y - 4 = -\\tfrac14(x - 2)$.

## Turning (stationary) points
At a **maximum** or **minimum** point the tangent is horizontal:
$$\\frac{dy}{dx} = 0$$
### Method
1. Differentiate and solve $\\dfrac{dy}{dx} = 0$.
2. Find the corresponding $y$-values.
3. Classify using the **second derivative**:
| $\\dfrac{d^2y}{dx^2}$ | Nature |
|---|---|
| negative | **maximum** |
| positive | **minimum** |
| zero | test further (may be a point of inflexion) |

*$y = x^3 - 3x + 2$:* $3x^2 - 3 = 0 \\Rightarrow x = \\pm1$. $\\dfrac{d^2y}{dx^2} = 6x$.
At $x = 1$: positive → **minimum**, $y = 0$. At $x = -1$: negative → **maximum**, $y = 4$.

## Increasing and decreasing functions
$\\dfrac{dy}{dx} > 0$: increasing; $\\dfrac{dy}{dx} < 0$: decreasing.

## Rates of change
$\\dfrac{dy}{dx}$ is the **rate of change of $y$ with respect to $x$**.
- **velocity** $v = \\dfrac{ds}{dt}$; **acceleration** $a = \\dfrac{dv}{dt}$
- *$s = t^3 - 6t^2 + 9t$:* $v = 3t^2 - 12t + 9$; at $t = 2$, $v = -3$ m/s; $a = 6t - 12 = 0$.
- The body is at rest when $v = 0$: $t = 1$ or $3$ s.

### Related rates
*The radius of a circle increases at 0.5 cm/s. Find the rate of increase of the area when $r = 4$ cm.*
$\\dfrac{dA}{dt} = \\dfrac{dA}{dr} \\times \\dfrac{dr}{dt} = 2\\pi r \\times 0.5 = 4\\pi$ cm²/s.

## Optimisation
1. Write the quantity to be maximised or minimised in terms of **one variable**.
2. Differentiate and set equal to zero.
3. Check the nature of the turning point.

*A farmer has 40 m of fencing for a rectangular pen.* Sides $x$ and $20 - x$; $A = 20x - x^2$; $\\dfrac{dA}{dx} = 20 - 2x = 0 \\Rightarrow x = 10$. Greatest area $= 100$ m² (a square).

## Business and capital-market applications
- **Profit** $P(x) = R(x) - C(x)$ is greatest when $\\dfrac{dP}{dx} = 0$, that is when **marginal revenue = marginal cost**.
- **Marginal cost** is $\\dfrac{dC}{dx}$, the cost of one more unit.
*$P = 60x - x^2 - 500$:* $60 - 2x = 0 \\Rightarrow x = 30$ units; maximum profit $= 400$.
- The rate at which the price of a share is changing is the derivative of its price function.`,
        examples: `**Example 1.** Find the turning points of $y = x^3 - 3x + 2$ and their nature. *Solution:* $x = \\pm 1$; **minimum at $(1, 0)$**, **maximum at $(-1, 4)$**.

**Example 2.** A particle moves so that $s = t^3 - 6t^2 + 9t$. Find its velocity when $t = 2$. *Solution:* $v = 3t^2 - 12t + 9 = \\mathbf{-3}$ m/s.

**Example 3.** The profit on $x$ items is $P = 60x - x^2 - 500$. Find $x$ for maximum profit. *Solution:* $60 - 2x = 0$, so $x = \\mathbf{30}$.`,
      },
      questions: [
        ["E", "At a turning point of a curve, $\\dfrac{dy}{dx}$ is", "zero", "positive", "negative", "undefined", "The tangent is horizontal."],
        ["E", "If $s$ is distance and $t$ is time, $\\dfrac{ds}{dt}$ represents", "velocity", "acceleration", "distance", "area", "The rate of change of distance with time."],
        ["E", "A turning point at which $\\dfrac{d^2y}{dx^2}$ is negative is a", "maximum point", "minimum point", "point of inflexion", "y-intercept", "The gradient is decreasing through zero."],
        ["M", "The gradient of the tangent to $y = x^2$ at the point $(2, 4)$ is", "4", "2", "8", "$\\frac14$", "dy/dx = 2x. Answer: 4."],
        ["M", "The $x$-coordinates of the turning points of $y = x^3 - 3x + 2$ are", "1 and −1", "0 and 3", "3 and −3", "2 and −2", "3x² − 3 = 0. Answer: 1 and −1."],
        ["M", "A particle moves so that $s = t^3 - 6t^2 + 9t$. Its velocity when $t = 2$ is", "$-3$ m/s", "3 m/s", "2 m/s", "0 m/s", "3(4) − 24 + 9. Answer: $-3$ m/s."],
        ["M", "The gradient of the normal to a curve at a point where the tangent has gradient 4 is", "$-\\frac14$", "$\\frac14$", "$-4$", "4", "The normal is perpendicular to the tangent."],
        ["H", "The minimum value of $y = x^3 - 3x + 2$ is", "0", "4", "2", "$-2$", "The minimum occurs at x = 1."],
        ["H", "The profit on $x$ items is $P = 60x - x^2 - 500$. The maximum profit is", "400", "900", "30", "1300", "At x = 30: 1800 − 900 − 500."],
        ["H", "The radius of a circle increases at 0.5 cm/s. The rate at which its area increases when the radius is 4 cm is", "$4\\pi$ cm²/s", "$8\\pi$ cm²/s", "$2\\pi$ cm²/s", "$16\\pi$ cm²/s", "2πr × 0.5 with r = 4."],
      ],
      jamb: [
        ["M", "Find the value of $x$ at which the function $y = x^2 - 6x + 5$ has its minimum.", "3", "$-3$", "6", "5", "2x − 6 = 0. Answer: 3."],
        ["H", "A rectangle has a perimeter of 40 m. Find its maximum possible area.", "100 m²", "400 m²", "80 m²", "200 m²", "A = 20x − x² is greatest when x = 10."],
      ],
    },
    {
      week: 8,
      title: "Integration of Algebraic Functions",
      subtopics: ["Integration as the reverse of differentiation", "Standard integrals", "Methods of integration", "Definite integrals and area under a curve"],
      objectives: ["Explain integration as the reverse of differentiation", "Integrate polynomials using the power rule", "Use substitution, integration by parts and partial fractions in simple cases", "Evaluate definite integrals and find the area under a curve"],
      lesson: {
        title: "Integration",
        summary: "Integrate algebraic functions, evaluate definite integrals and find areas under curves.",
        minutes: 40,
        notes: `## The reverse of differentiation
If $\\dfrac{dy}{dx} = f(x)$, then $y = \\int f(x)\\,dx$. Since the derivative of a constant is zero, an **arbitrary constant $C$** must be added to an **indefinite integral**.

## The power rule
$$\\int ax^n\\,dx = \\frac{ax^{n+1}}{n+1} + C \\qquad (n \\ne -1)$$
**Add one to the index and divide by the new index.**
| $f(x)$ | $\\int f(x)\\,dx$ |
|---|---|
| $x^3$ | $\\dfrac{x^4}{4} + C$ |
| $6x^2$ | $2x^3 + C$ |
| $5$ | $5x + C$ |
| $\\dfrac{1}{x^2} = x^{-2}$ | $-\\dfrac1x + C$ |
| $\\sqrt x$ | $\\dfrac23 x^{3/2} + C$ |
For $n = -1$: $\\int \\dfrac1x\\,dx = \\ln x + C$.

## Sums
Integrate **term by term**: $\\int (3x^2 - 4x + 5)\\,dx = x^3 - 2x^2 + 5x + C$.

## Finding the constant
*$\\dfrac{dy}{dx} = 2x + 3$ and $y = 5$ when $x = 1$.* $y = x^2 + 3x + C$; $5 = 1 + 3 + C$, so $C = 1$.

## Methods of integration
### Substitution
For $\\int (2x + 1)^4\\,dx$ let $u = 2x + 1$, $du = 2\\,dx$: $\\tfrac12\\int u^4\\,du = \\dfrac{(2x+1)^5}{10} + C$.
In general $\\int (ax + b)^n\\,dx = \\dfrac{(ax+b)^{n+1}}{a(n+1)} + C$.
### Integration by parts
$$\\int u\\,dv = uv - \\int v\\,du$$
Used for products such as $\\int x(x+1)^3\\,dx$ or $\\int x e^x\\,dx$.
### Partial fractions
Split a fraction first: $\\dfrac{1}{(x-1)(x+1)} = \\dfrac12\\left(\\dfrac{1}{x-1} - \\dfrac{1}{x+1}\\right)$, then integrate each part.

## Definite integrals
$$\\int_a^b f(x)\\,dx = \\big[F(x)\\big]_a^b = F(b) - F(a)$$
No constant is needed.
$\\int_1^3 2x\\,dx = [x^2]_1^3 = 9 - 1 = 8$.

## Area under a curve
The area between $y = f(x)$, the $x$-axis and the lines $x = a$, $x = b$ is $\\int_a^b y\\,dx$.
*Area under $y = x^2$ from $x = 0$ to $x = 3$:* $\\left[\\dfrac{x^3}{3}\\right]_0^3 = 9$ square units.
An area **below** the $x$-axis comes out negative; take its size.

## Kinematics
$v = \\int a\\,dt$ and $s = \\int v\\,dt$.
*$v = 3t^2 + 2$:* distance from $t = 0$ to $t = 2$ is $[t^3 + 2t]_0^2 = 12$ m.

## Business and capital-market applications
- **Total cost** from **marginal cost**: $C = \\int MC\\,dx$ (the constant is the fixed cost).
- **Total revenue** from marginal revenue.
- The area under a rate-of-return curve gives the **total return** over a period.
*$MC = 4x + 10$, fixed cost ₦200:* $C = 2x^2 + 10x + 200$.`,
        examples: `**Example 1.** Find $\\int (3x^2 - 4x + 5)\\,dx$. *Solution:* $\\mathbf{x^3 - 2x^2 + 5x + C}$.

**Example 2.** Evaluate $\\int_1^3 2x\\,dx$. *Solution:* $[x^2]_1^3 = 9 - 1 = \\mathbf{8}$.

**Example 3.** Find the area under $y = x^2$ from $x = 0$ to $x = 3$. *Solution:* $\\left[\\tfrac{x^3}{3}\\right]_0^3 = \\mathbf{9}$ square units.`,
      },
      questions: [
        ["E", "Integration is the reverse process of", "differentiation", "factorisation", "substitution", "multiplication", "It recovers a function from its derivative."],
        ["E", "$\\int x^3\\,dx$ equals", "$\\frac{x^4}{4} + C$", "$3x^2 + C$", "$x^4 + C$", "$\\frac{x^3}{3} + C$", "Add one to the index and divide by the new index."],
        ["E", "The constant added to an indefinite integral is called the", "constant of integration", "coefficient", "limit", "gradient", "It is written C."],
        ["M", "Find $\\int (3x^2 - 4x + 5)\\,dx$.", "$x^3 - 2x^2 + 5x + C$", "$6x - 4 + C$", "$x^3 - 4x^2 + 5 + C$", "$3x^3 - 2x^2 + 5x + C$", "Integrate each term."],
        ["M", "Evaluate $\\int_1^3 2x\\,dx$.", "8", "4", "9", "6", "9 − 1. Answer: 8."],
        ["M", "$\\int 6x^2\\,dx$ equals", "$2x^3 + C$", "$12x + C$", "$6x^3 + C$", "$3x^3 + C$", "6x³ ÷ 3. Answer: $2x^3 + C$."],
        ["M", "If $\\dfrac{dy}{dx} = 2x + 3$ and $y = 5$ when $x = 1$, then $y$ is", "$x^2 + 3x + 1$", "$x^2 + 3x + 5$", "$x^2 + 3x$", "$2x^2 + 3x$", "The constant is found from the given point."],
        ["H", "The area bounded by $y = x^2$, the $x$-axis and the lines $x = 0$ and $x = 3$ is", "9 square units", "27 square units", "3 square units", "6 square units", "x³/3 evaluated from 0 to 3."],
        ["H", "Find $\\int (2x + 1)^4\\,dx$.", "$\\frac{(2x + 1)^5}{10} + C$", "$\\frac{(2x + 1)^5}{5} + C$", "$8(2x + 1)^3 + C$", "$\\frac{(2x + 1)^5}{2} + C$", "Divide by the new index and by the coefficient of x."],
        ["H", "The marginal cost of producing $x$ units is $4x + 10$ and the fixed cost is ₦200. The total cost function is", "$2x^2 + 10x + 200$", "$4x^2 + 10x + 200$", "$2x^2 + 10x$", "$4 + 200x$", "Integrate, then add the fixed cost."],
      ],
      jamb: [
        ["M", "Evaluate $\\int_0^2 (3x^2 + 2x)\\,dx$.", "12", "16", "8", "10", "[x³ + x²] from 0 to 2 = 8 + 4."],
        ["H", "Find the area enclosed by the curve $y = 4 - x^2$ and the $x$-axis.", "$\\frac{32}{3}$ square units", "$\\frac{16}{3}$ square units", "8 square units", "16 square units", "Integrate from −2 to 2: 2(8 − 8/3)."],
      ],
    },
    {
      week: 9,
      title: "Functions and Mapping",
      subtopics: ["Relations and mappings", "Domain, co-domain and range", "Types of function", "Inverse and composite functions"],
      objectives: ["Distinguish a function from a relation", "State the domain, co-domain and range of a function", "Classify functions as one-to-one or onto", "Find inverse and composite functions"],
      lesson: {
        title: "Functions",
        summary: "Describe functions and mappings and find inverse and composite functions.",
        minutes: 40,
        notes: `## Relation and mapping
A **relation** links elements of one set to elements of another. A **mapping (function)** from set $A$ to set $B$ is a rule that assigns to **each element of $A$ exactly one element of $B$**.
$$f : A \\to B \\qquad f : x \\mapsto 2x + 1 \\qquad f(x) = 2x + 1$$

## Domain, co-domain and range
- **domain** — the set $A$ of inputs
- **co-domain** — the set $B$ in which the outputs lie
- **image** of $x$ — the output $f(x)$
- **range** — the set of **actual images**; a subset of the co-domain

*$f(x) = x^2$ on $A = \\{-2, -1, 0, 1, 2\\}$:* range $= \\{0, 1, 4\\}$.

## Is it a function?
- every element of the domain must have an image
- **no element may have two images** (one-to-many is not a function)
On a graph, a **vertical line** must cut the curve at most once.

## Types of mapping
| Type | Meaning |
|---|---|
| **one-to-one (injective)** | different inputs give different outputs |
| **many-to-one** | two or more inputs share an output, e.g. $x^2$ |
| **onto (surjective)** | range $=$ co-domain; every element of $B$ is an image |
| **one-to-one and onto (bijective)** | has an **inverse** |
| **constant** | every input has the same image |
| **identity** | $f(x) = x$ |

## Evaluating
$f(x) = 3x^2 - 2x + 1$: $f(2) = 12 - 4 + 1 = 9$; $f(-1) = 6$.
If $f(x) = 2x - 5$ and $f(a) = 9$, then $a = 7$.

## Inverse function
$f^{-1}$ **undoes** $f$: if $f(a) = b$ then $f^{-1}(b) = a$.
### Method
1. Write $y = f(x)$.
2. Make $x$ the subject.
3. Interchange $x$ and $y$.
*$f(x) = 2x + 3$:* $y = 2x + 3 \\Rightarrow x = \\dfrac{y - 3}{2}$, so $f^{-1}(x) = \\dfrac{x - 3}{2}$.
*$g(x) = \\dfrac{x + 1}{x - 2}$:* $g^{-1}(x) = \\dfrac{2x + 1}{x - 1}$, $x \\ne 1$.
The graph of $f^{-1}$ is the **reflection of the graph of $f$ in the line $y = x$**.

## Composite functions
$fg(x)$ or $f \\circ g(x)$ means **apply $g$ first, then $f$**: $f(g(x))$.
*$f(x) = 2x + 1$, $g(x) = x^2$:*
- $fg(x) = 2x^2 + 1$
- $gf(x) = (2x + 1)^2$
In general $fg \\ne gf$. Also $f f^{-1}(x) = x$.

## Restrictions on the domain
- a denominator must not be zero: $f(x) = \\dfrac{1}{x - 3}$ is undefined at $x = 3$
- the quantity under a square root must not be negative

## Graphs of functions
linear (straight line), quadratic (parabola), cubic, reciprocal (two branches). From a graph, read the range, the zeros (where $f(x) = 0$) and turning points.`,
        examples: `**Example 1.** If $f(x) = 3x^2 - 2x + 1$, find $f(2)$. *Solution:* $12 - 4 + 1 = \\mathbf{9}$.

**Example 2.** Find the inverse of $f(x) = 2x + 3$. *Solution:* $x = \\dfrac{y - 3}{2}$, so $f^{-1}(x) = \\mathbf{\\dfrac{x - 3}{2}}$.

**Example 3.** If $f(x) = 2x + 1$ and $g(x) = x^2$, find $fg(3)$. *Solution:* $g(3) = 9$; $f(9) = \\mathbf{19}$.`,
      },
      questions: [
        ["E", "The set of all inputs of a function is called its", "domain", "range", "co-domain", "image", "The function is defined on it."],
        ["E", "The set of actual images of a function is its", "range", "domain", "inverse", "relation", "It is a subset of the co-domain."],
        ["E", "If $f(x) = 2x + 1$, then $f(3)$ is", "7", "6", "5", "9", "2 × 3 + 1. Answer: 7."],
        ["M", "If $f(x) = 3x^2 - 2x + 1$, find $f(2)$.", "9", "17", "5", "13", "12 − 4 + 1. Answer: 9."],
        ["M", "A mapping in which different inputs always give different outputs is", "one-to-one", "many-to-one", "constant", "a relation only", "It is also called injective."],
        ["M", "The inverse of $f(x) = 2x + 3$ is", "$f^{-1}(x) = \\frac{x - 3}{2}$", "$f^{-1}(x) = \\frac{x + 3}{2}$", "$f^{-1}(x) = 2x - 3$", "$f^{-1}(x) = \\frac{1}{2x + 3}$", "Subtract 3, then divide by 2."],
        ["M", "For $f(x) = x^2$ on the domain $\\{-2, -1, 0, 1, 2\\}$, the range is", "$\\{0, 1, 4\\}$", "$\\{-4, -1, 0, 1, 4\\}$", "$\\{0, 2, 4\\}$", "$\\{1, 4\\}$", "Squares of the inputs, without repetition."],
        ["H", "If $f(x) = 2x + 1$ and $g(x) = x^2$, then $gf(x)$ is", "$(2x + 1)^2$", "$2x^2 + 1$", "$2x^3 + x^2$", "$x^2 + 2x + 1$", "Apply f first, then g."],
        ["H", "The inverse of $g(x) = \\dfrac{x + 1}{x - 2}$ is", "$\\frac{2x + 1}{x - 1}$", "$\\frac{x - 2}{x + 1}$", "$\\frac{2x - 1}{x + 1}$", "$\\frac{x + 2}{x - 1}$", "Make x the subject of y(x − 2) = x + 1."],
        ["H", "The function $f(x) = \\dfrac{1}{x - 3}$ is not defined when $x$ equals", "3", "0", "$-3$", "1", "The denominator would be zero."],
      ],
      jamb: [
        ["M", "If $f(x) = 2x - 5$ and $f(a) = 9$, find $a$.", "7", "2", "13", "4", "2a − 5 = 9. Answer: 7."],
        ["H", "Given $f(x) = x + 2$ and $g(x) = 3x - 1$, find $fg(x) - gf(x)$.", "$-4$", "4", "$6x$", "0", "fg = 3x + 1 and gf = 3x + 5."],
      ],
    },
    {
      week: 10,
      title: "General Review of Calculus",
      subtopics: ["Mixed differentiation", "Mixed integration", "Motion problems", "Applications in science and economics"],
      objectives: ["Differentiate and integrate a mixture of algebraic functions", "Link differentiation and integration", "Solve problems on displacement, velocity and acceleration", "Apply calculus to problems in physics, engineering and economics"],
      lesson: {
        title: "Calculus in Use",
        summary: "Consolidate differentiation and integration through mixed practice and applications.",
        minutes: 40,
        notes: `## The two processes side by side
| | Differentiation | Integration |
|---|---|---|
| rule for $ax^n$ | $anx^{n-1}$ | $\\dfrac{ax^{n+1}}{n+1} + C$ |
| gives | gradient; rate of change | area; total from a rate |
| constant | disappears | must be added |
They are **inverse processes**: $\\dfrac{d}{dx}\\int f(x)\\,dx = f(x)$.

## Quick reference
| $y$ | $\\dfrac{dy}{dx}$ | $\\int y\\,dx$ |
|---|---|---|
| $k$ | $0$ | $kx + C$ |
| $x$ | $1$ | $\\tfrac12x^2 + C$ |
| $x^2$ | $2x$ | $\\tfrac13x^3 + C$ |
| $x^3$ | $3x^2$ | $\\tfrac14x^4 + C$ |
| $(ax+b)^n$ | $an(ax+b)^{n-1}$ | $\\dfrac{(ax+b)^{n+1}}{a(n+1)} + C$ |

## Motion in a straight line
$$s \\xrightarrow{\\ \\text{differentiate}\\ } v \\xrightarrow{\\ \\text{differentiate}\\ } a \\qquad a \\xrightarrow{\\ \\text{integrate}\\ } v \\xrightarrow{\\ \\text{integrate}\\ } s$$
*A body moves with acceleration $a = 6t$ m/s², starting from rest at the origin.*
$v = 3t^2 + C$; $v = 0$ when $t = 0$ gives $C = 0$. $s = t^3$. After 2 s: $v = 12$ m/s, $s = 8$ m.

*A stone thrown upward has height $h = 20t - 5t^2$.* $v = 20 - 10t = 0 \\Rightarrow t = 2$ s; greatest height $= 40 - 20 = 20$ m.

## Curves
- **Gradient** at a point: differentiate and substitute.
- **Turning points:** solve $\\dfrac{dy}{dx} = 0$; test with $\\dfrac{d^2y}{dx^2}$.
- **Equation of a curve from its gradient:** integrate and use a known point to find $C$.
- **Area under the curve:** definite integral between the limits.
- **Area between a line and a curve:** integrate (upper − lower) between the points of intersection.

*Area between $y = x$ and $y = x^2$:* they meet at $x = 0$ and $1$; $\\int_0^1 (x - x^2)\\,dx = \\tfrac12 - \\tfrac13 = \\tfrac16$.

## Physics and engineering
- velocity and acceleration; work done $= \\int F\\,dx$
- rate of flow, rate of cooling, growth and decay
- designing a container of **least surface area** for a given volume

*A closed cylinder of volume $V$ has least surface area when its height equals its diameter.*

## Economics and the capital market
| Idea | Calculus |
|---|---|
| marginal cost / revenue | derivative of total cost / revenue |
| total cost from marginal cost | integral |
| maximum profit | $\\dfrac{dP}{dx} = 0$ with $\\dfrac{d^2P}{dx^2} < 0$ |
| rate of growth of an investment | derivative of its value |
*Revenue $R = 100x - 2x^2$:* marginal revenue $= 100 - 4x$; revenue is greatest when $x = 25$, giving $R = 1250$.

## Checklist
- Did you add $C$ to every indefinite integral?
- Did you use the **second derivative** to classify?
- Are the **units** right (m/s, m/s², square units)?
- For a definite integral: **upper limit minus lower limit**.`,
        examples: `**Example 1.** A body starts from rest with acceleration $a = 6t$ m/s². Find its velocity after 2 s. *Solution:* $v = 3t^2 = \\mathbf{12}$ m/s.

**Example 2.** A stone's height is $h = 20t - 5t^2$. Find its greatest height. *Solution:* $20 - 10t = 0$, $t = 2$; $h = \\mathbf{20}$ m.

**Example 3.** Find the area between $y = x$ and $y = x^2$. *Solution:* $\\int_0^1 (x - x^2)\\,dx = \\tfrac12 - \\tfrac13 = \\mathbf{\\tfrac16}$ square unit.`,
      },
      questions: [
        ["E", "Differentiating a displacement function with respect to time gives", "velocity", "acceleration", "distance", "area", "v = ds/dt. Answer: velocity."],
        ["E", "Integrating an acceleration function with respect to time gives", "velocity", "displacement", "force", "gradient", "v is the integral of a."],
        ["E", "Differentiation and integration are", "inverse processes", "the same process", "unrelated", "both ways of finding area", "Each undoes the other."],
        ["M", "A body starts from rest with acceleration $a = 6t$ m/s². Its velocity after 2 s is", "12 m/s", "6 m/s", "24 m/s", "8 m/s", "v = 3t². Answer: 12 m/s."],
        ["M", "The height of a stone is $h = 20t - 5t^2$ metres. It reaches its greatest height when $t$ equals", "2 s", "4 s", "1 s", "5 s", "20 − 10t = 0. Answer: 2 s."],
        ["M", "The marginal revenue for $R = 100x - 2x^2$ is", "$100 - 4x$", "$100 - 2x$", "$100x - 4$", "$50x^2 - \\frac23x^3$", "Differentiate the revenue function."],
        ["M", "The greatest height reached by a stone whose height is $h = 20t - 5t^2$ metres is", "20 m", "40 m", "10 m", "15 m", "Substitute t = 2."],
        ["H", "The area enclosed between the line $y = x$ and the curve $y = x^2$ is", "$\\frac16$ square unit", "$\\frac13$ square unit", "$\\frac12$ square unit", "1 square unit", "Integrate x − x² from 0 to 1."],
        ["H", "The gradient of a curve is $3x^2 - 2$ and it passes through $(1, 4)$. Its equation is", "$y = x^3 - 2x + 5$", "$y = x^3 - 2x + 4$", "$y = 6x + 4$", "$y = x^3 - 2x - 5$", "4 = 1 − 2 + C gives C = 5."],
        ["H", "The revenue $R = 100x - 2x^2$ is greatest when $x$ equals", "25", "50", "100", "20", "100 − 4x = 0. Answer: 25."],
      ],
      jamb: [
        ["M", "The velocity of a particle is $v = 3t^2 + 2$ m/s. Find the distance covered in the first 2 seconds.", "12 m", "14 m", "8 m", "10 m", "[t³ + 2t] from 0 to 2."],
        ["H", "If $y = x^3 - 3x^2 - 9x + 5$, find the values of $x$ for which $y$ is stationary.", "3 and −1", "−3 and 1", "9 and −3", "1 and 3", "3x² − 6x − 9 = 0 gives (x − 3)(x + 1) = 0."],
      ],
    },
  ],
};
