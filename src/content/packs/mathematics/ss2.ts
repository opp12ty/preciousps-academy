import type { TermPlan } from "../types";

/** SS2 Mathematics — original Precious PS content following the national Senior Secondary structure. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Arithmetic progressions",
        subtopics: ["Sequences and the common difference", "The nth term of an AP", "Sum of an AP", "Problems on arithmetic progressions"],
        objectives: ["Identify an arithmetic progression and its common difference", "Find any term using Tₙ = a + (n − 1)d", "Find the sum of n terms using Sₙ = n/2[2a + (n − 1)d]", "Solve practical problems involving APs"],
        lesson: {
          title: "Arithmetic Progressions (AP)",
          summary: "Find terms and sums of sequences that increase or decrease by a constant difference.",
          minutes: 45,
          notes: `## Definition
An **arithmetic progression** (AP) is a sequence in which each term is obtained by **adding a fixed number**, the **common difference** $d$, to the previous term.
3, 7, 11, 15, … has first term $a = 3$ and $d = 4$. 20, 17, 14, … has $d = -3$.

## The nth term
$T_n = a + (n - 1)d$
The 10th term of 2, 5, 8, … is $2 + 9\\times 3 = 29$.
To find **which term** is a given value, set $T_n$ equal to it and solve for $n$ (which must be a positive whole number).

## Sum of the first n terms
$S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}(a + l)$
where $l$ is the last term. $1 + 2 + \\ldots + 100 = \\frac{100}{2}(1 + 100) = 5050$.

## Two given terms
If $T_3 = 10$ and $T_7 = 22$: $a + 2d = 10$ and $a + 6d = 22$, so $4d = 12$, $d = 3$ and $a = 4$.

## Three terms in AP
Write them as $a - d$, $a$, $a + d$ — their sum is simply $3a$.`,
          examples: `**Example 1.** Which term of 5, 9, 13, … is 81? *Solution:* $5 + 4(n - 1) = 81$, so $n = 20$.

**Example 2.** A salary starts at ₦50,000 and rises by ₦5,000 each year. *Total over 10 years:* $S_{10} = 5(100{,}000 + 45{,}000) = ₦725{,}000$.

**Example 3.** Three numbers in AP have sum 24 and product 440. *Solution:* $3a = 24$, $a = 8$; $8(64 - d^2) = 440$ gives $d = 3$. The numbers are 5, 8, 11.`,
        },
        questions: [
          ["E", "What is the next term of the sequence 3, 7, 11, 15, …?", "19", "18", "22", "21", "The common difference is 4: 15 + 4 = 19."],
          ["E", "What is the common difference of 20, 17, 14, …?", "−3", "3", "17", "−20", "Common difference = second term − first term = 17 − 20 = −3."],
          ["M", "Find the 10th term of the AP 2, 5, 8, …", "29", "32", "30", "26", "T₁₀ = 2 + 9 × 3 = 29."],
          ["M", "Which term of the AP 5, 9, 13, … is 81?", "20th", "19th", "21st", "76th", "5 + 4(n − 1) = 81 gives n − 1 = 19."],
          ["M", "Find the sum of the first 10 terms of the AP 2, 5, 8, …", "155", "145", "290", "29", "S₁₀ = 10/2 × (4 + 27) = 155."],
          ["M", "Find the sum $1 + 2 + 3 + \\ldots + 100$.", "5,050", "5,000", "10,100", "5,100", "S = 100/2 × (1 + 100) = 5,050."],
          ["M", "The 3rd term of an AP is 10 and the 7th term is 22. What is the common difference?", "3", "4", "12", "2", "4d = 22 − 10 = 12."],
          ["H", "The 3rd term of an AP is 10 and the 7th term is 22. What is the first term?", "4", "7", "1", "3", "d = 3 and a + 2d = 10, so a = 4."],
          ["H", "A salary starts at ₦50,000 a year and rises by ₦5,000 each year. What is the total paid in the first 10 years?", "₦725,000", "₦500,000", "₦1,450,000", "₦950,000", "S₁₀ = 10/2 × (100,000 + 9 × 5,000) = ₦725,000."],
          ["H", "Three numbers in AP have a sum of 24 and a product of 440. What is the largest of them?", "11", "10", "8", "13", "3a = 24 gives a = 8; 8(64 − d²) = 440 gives d = 3, so the numbers are 5, 8, 11."],
        ],
      },
      {
        week: 2,
        title: "Geometric progressions",
        subtopics: ["The common ratio", "The nth term of a GP", "Sum of a GP", "Sum to infinity and applications"],
        objectives: ["Identify a geometric progression and its common ratio", "Find any term using Tₙ = arⁿ⁻¹", "Find the sum of n terms of a GP", "Find the sum to infinity when −1 < r < 1 and apply GPs to growth and decay"],
        lesson: {
          title: "Geometric Progressions (GP)",
          summary: "Work with sequences that grow or shrink by a constant ratio, including sums to infinity.",
          minutes: 45,
          notes: `## Definition
A **geometric progression** (GP) is a sequence in which each term is obtained by **multiplying** the previous term by a fixed number, the **common ratio** $r$.
3, 6, 12, 24, … has $a = 3$ and $r = 2$; 81, 27, 9, … has $r = \\frac{1}{3}$.

## The nth term
$T_n = ar^{n-1}$
The 6th term of 2, 6, 18, … is $2\\times 3^5 = 486$.

## Sum of the first n terms
$S_n = \\frac{a(r^n - 1)}{r - 1}$ (convenient when $r > 1$) or $S_n = \\frac{a(1 - r^n)}{1 - r}$ (when $r < 1$)
$1 + 2 + 4 + 8 + 16 = \\frac{1(2^5 - 1)}{2 - 1} = 31$.

## Sum to infinity
When $-1 < r < 1$, the terms get smaller and smaller and the sum approaches
$S_\\infty = \\frac{a}{1 - r}$
$8 + 4 + 2 + \\ldots = \\frac{8}{1 - \\frac{1}{2}} = 16$.

## Growth and decay
Repeated percentage change is a GP: a value that loses 25% each year is multiplied by $r = 0.75$ each year.`,
          examples: `**Example 1.** The 2nd term of a GP is 6 and the 5th term is 162. *Solution:* $ar = 6$, $ar^4 = 162$, so $r^3 = 27$ and $r = 3$.

**Example 2.** Which term of 3, 6, 12, … is 768? *Solution:* $3\\times 2^{n-1} = 768$, $2^{n-1} = 256 = 2^8$, so $n = 9$.

**Example 3.** A car worth ₦4,000,000 loses 25% of its value each year. *After 3 years:* $4{,}000{,}000\\times 0.75^3 = ₦1{,}687{,}500$.`,
        },
        questions: [
          ["E", "What is the common ratio of the GP 3, 6, 12, …?", "2", "3", "$\\frac{1}{2}$", "6", "Each term is the previous term × 2, since 6 ÷ 3 = 2."],
          ["E", "What is the next term of the GP 81, 27, 9, …?", "3", "1", "0", "6", "The common ratio is 1/3: 9 × 1/3 = 3."],
          ["M", "Find the 6th term of the GP 2, 6, 18, …", "486", "162", "1,458", "36", "T₆ = 2 × 3⁵ = 486."],
          ["M", "Find the sum of the first 5 terms of the GP 1, 2, 4, …", "31", "16", "32", "15", "S₅ = (2⁵ − 1) ÷ (2 − 1) = 31."],
          ["M", "Find the sum to infinity of $8 + 4 + 2 + \\ldots$", "16", "14", "15", "There is no finite sum", "S∞ = 8 ÷ (1 − ½) = 16."],
          ["M", "The 2nd term of a GP is 6 and its 5th term is 162. Find the common ratio.", "3", "9", "27", "4", "r³ = 162 ÷ 6 = 27."],
          ["M", "A GP has first term 5 and common ratio 0.5. Find its sum to infinity.", "10", "5", "2.5", "20", "S∞ = 5 ÷ (1 − 0.5) = 10."],
          ["H", "A GP has sum to infinity 12 and first term 4. Find the common ratio.", "$\\frac{2}{3}$", "$\\frac{1}{3}$", "3", "$\\frac{3}{2}$", "4 ÷ (1 − r) = 12 gives 1 − r = 1/3."],
          ["H", "A car worth ₦4,000,000 loses 25% of its value each year. What is it worth after 3 years?", "₦1,687,500", "₦1,000,000", "₦3,000,000", "₦2,250,000", "4,000,000 × 0.75³ = ₦1,687,500."],
          ["H", "Which term of the GP 3, 6, 12, … is 768?", "9th", "8th", "10th", "256th", "3 × 2ⁿ⁻¹ = 768 gives 2ⁿ⁻¹ = 256 = 2⁸."],
        ],
      },
      {
        week: 3,
        title: "Surds",
        subtopics: ["Simplifying surds", "Adding and subtracting surds", "Multiplying surds", "Rationalising the denominator"],
        objectives: ["Simplify surds by removing square factors", "Add and subtract like surds", "Multiply and expand expressions with surds", "Rationalise denominators, including with conjugates"],
        lesson: {
          title: "Working with Surds",
          summary: "Simplify, combine and rationalise expressions involving square roots exactly.",
          minutes: 45,
          notes: `## What is a surd?
A **surd** is an irrational root such as $\\sqrt{2}$ or $\\sqrt{12}$. Leaving answers in surd form keeps them **exact**.

## Rules
$\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ and $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$, and $\\sqrt{a}\\times\\sqrt{a} = a$.
But $\\sqrt{a + b}\\ne\\sqrt{a} + \\sqrt{b}$.

## Simplifying
Take out the largest square factor: $\\sqrt{12} = \\sqrt{4\\times 3} = 2\\sqrt{3}$ and $\\sqrt{18} = 3\\sqrt{2}$.

## Adding and subtracting
Only **like surds** can be combined: $2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$. Simplify first: $\\sqrt{18} + \\sqrt{8} = 3\\sqrt{2} + 2\\sqrt{2} = 5\\sqrt{2}$.

## Multiplying
$\\sqrt{6}\\times\\sqrt{2} = \\sqrt{12} = 2\\sqrt{3}$ and $(2\\sqrt{5})^2 = 4\\times 5 = 20$.

## Rationalising the denominator
- Single surd: multiply top and bottom by that surd. $\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$.
- Binomial: multiply by the **conjugate**, using $(a - b)(a + b) = a^2 - b^2$:
$\\frac{1}{\\sqrt{3} - 1} = \\frac{\\sqrt{3} + 1}{(\\sqrt{3})^2 - 1} = \\frac{\\sqrt{3} + 1}{2}$`,
          examples: `**Example 1.** $\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.

**Example 2.** $(\\sqrt{5} + 2)(\\sqrt{5} - 2) = 5 - 4 = 1$.

**Example 3.** Simplify $\\sqrt{75} - \\sqrt{27}$. *Solution:* $5\\sqrt{3} - 3\\sqrt{3} = 2\\sqrt{3}$.`,
        },
        questions: [
          ["E", "Simplify $\\sqrt{12}$.", "$2\\sqrt{3}$", "$3\\sqrt{2}$", "$4\\sqrt{3}$", "$6\\sqrt{2}$", "√12 = √(4 × 3) = 2√3."],
          ["E", "Evaluate $\\sqrt{3}\\times\\sqrt{3}$.", "3", "9", "6", "$\\sqrt{6}$", "A square root multiplied by itself gives the number: √3 × √3 = 3."],
          ["M", "Simplify $2\\sqrt{3} + 5\\sqrt{3}$.", "$7\\sqrt{3}$", "$7\\sqrt{6}$", "$10\\sqrt{3}$", "7", "Like surds are added like like terms."],
          ["M", "Simplify $\\sqrt{18} + \\sqrt{8}$.", "$5\\sqrt{2}$", "$\\sqrt{26}$", "$13\\sqrt{2}$", "$6\\sqrt{2}$", "3√2 + 2√2 = 5√2."],
          ["M", "Evaluate $(2\\sqrt{5})^2$.", "20", "10", "40", "100", "2² × (√5)² = 4 × 5 = 20."],
          ["M", "Simplify $\\sqrt{6}\\times\\sqrt{2}$.", "$2\\sqrt{3}$", "$\\sqrt{8}$", "12", "$3\\sqrt{2}$", "√6 × √2 = √12 = √(4 × 3) = 2√3."],
          ["M", "Rationalise $\\frac{1}{\\sqrt{2}}$.", "$\\frac{\\sqrt{2}}{2}$", "$\\sqrt{2}$", "$\\frac{1}{2}$", "$2\\sqrt{2}$", "Multiply top and bottom by √2."],
          ["H", "Rationalise and simplify $\\frac{6}{\\sqrt{3}}$.", "$2\\sqrt{3}$", "$6\\sqrt{3}$", "$\\sqrt{3}$", "$3\\sqrt{3}$", "Multiply top and bottom by √3: 6√3/3 = 2√3."],
          ["H", "Evaluate $(\\sqrt{5} + 2)(\\sqrt{5} - 2)$.", "1", "3", "9", "$\\sqrt{5}$", "Difference of two squares: 5 − 4 = 1."],
          ["H", "Rationalise $\\frac{1}{\\sqrt{3} - 1}$.", "$\\frac{\\sqrt{3} + 1}{2}$", "$\\frac{\\sqrt{3} - 1}{2}$", "$\\sqrt{3} + 1$", "$\\frac{\\sqrt{3} + 1}{4}$", "Multiply by the conjugate √3 + 1: the denominator becomes 3 − 1 = 2."],
        ],
      },
      {
        week: 4,
        title: "Simultaneous linear and quadratic equations",
        subtopics: ["Substitution method", "Line and curve intersections", "Word problems with one linear and one quadratic equation", "Tangency condition"],
        objectives: ["Solve a linear and a quadratic equation simultaneously by substitution", "Interpret solutions as intersections of a line and a curve", "Solve word problems leading to such systems", "Use the discriminant to find when a line touches a curve"],
        lesson: {
          title: "One Linear and One Quadratic Equation",
          summary: "Solve pairs of equations where one is linear and one is quadratic, and interpret the results.",
          minutes: 45,
          notes: `## Method: substitution
1. Make one letter the subject of the **linear** equation.
2. Substitute into the quadratic equation.
3. Solve the resulting quadratic (usually two values).
4. Substitute each value back into the **linear** equation to find the partner value.
5. Write the answers as **pairs**.

$x - y = 1$ and $x^2 + y^2 = 13$: $x = y + 1$, so $(y + 1)^2 + y^2 = 13$, giving $y^2 + y - 6 = 0$, $y = 2$ or $-3$. The solutions are $(3, 2)$ and $(-2, -3)$.

## Geometric meaning
The solutions are the points where the **line meets the curve**. A line can meet a parabola at **two points**, **one point** (it is a **tangent**) or **not at all**.

## Tangency
After substituting, a tangent gives a quadratic with **equal roots**, so its discriminant is zero: $b^2 - 4ac = 0$.
$y = x + k$ and $y = x^2$: $x^2 - x - k = 0$, and $1 + 4k = 0$ gives $k = -\\frac{1}{4}$.`,
          examples: `**Example 1.** $y = x + 2$ and $y = x^2$: $x^2 - x - 2 = 0$ gives $x = 2$ or $-1$, i.e. $(2, 4)$ and $(-1, 1)$.

**Example 2.** $x + y = 5$ and $xy = 6$: the solutions are $(2, 3)$ and $(3, 2)$.

**Example 3.** Two numbers add up to 9 and their squares add up to 41. *Solution:* $x^2 + (9 - x)^2 = 41$ gives $x = 4$ or $5$; the numbers are **4 and 5**.`,
        },
        questions: [
          ["E", "At most, how many points can a straight line have in common with a parabola?", "2", "1", "3", "4", "Substitution gives a quadratic, which has at most two roots."],
          ["E", "Solve $y = x^2$ and $y = 4$ for $x$.", "$x = \\pm 2$", "$x = 2$ only", "$x = 16$", "$x = \\pm 4$", "Substitute y = 4: x² = 4, so x = ±2."],
          ["M", "Solve $y = x + 2$ and $y = x^2$.", "$(2, 4)$ and $(-1, 1)$", "$(-2, 4)$ and $(1, 1)$", "$(2, 4)$ only", "$(4, 2)$ and $(1, -1)$", "x² − x − 2 = 0 gives x = 2 or −1."],
          ["M", "Solve $x + y = 5$ and $xy = 6$.", "$(2, 3)$ and $(3, 2)$", "$(1, 6)$ and $(6, 1)$", "$(-2, -3)$ and $(-3, -2)$", "$(5, 0)$ and $(0, 5)$", "x(5 − x) = 6 gives x² − 5x + 6 = 0."],
          ["M", "Solve $x - y = 1$ and $x^2 + y^2 = 13$.", "$(3, 2)$ and $(-2, -3)$", "$(2, 3)$ and $(-3, -2)$", "$(3, 2)$ only", "$(4, 3)$ and $(-1, -2)$", "(y + 1)² + y² = 13 gives y = 2 or −3."],
          ["M", "Where does the line $y = 2x + 1$ meet the curve $y = x^2 + 1$?", "$(0, 1)$ and $(2, 5)$", "$(0, 1)$ only", "$(1, 3)$ and $(2, 5)$", "$(0, 0)$ and $(2, 4)$", "x² + 1 = 2x + 1 gives x(x − 2) = 0."],
          ["M", "Solve $y = 3 - x$ and $y = x^2 - 3x$.", "$(3, 0)$ and $(-1, 4)$", "$(3, 0)$ only", "$(-3, 6)$ and $(1, 2)$", "$(1, 2)$ and $(3, 0)$", "x² − 3x = 3 − x gives x² − 2x − 3 = 0, so x = 3 or −1."],
          ["H", "Solve $2x + y = 7$ and $x^2 + xy = 6$.", "$(1, 5)$ and $(6, -5)$", "$(1, 5)$ only", "$(6, 5)$ and $(1, -5)$", "$(2, 3)$ and $(3, 1)$", "y = 7 − 2x gives x² − 7x + 6 = 0, so x = 1 or 6."],
          ["H", "For what value of $k$ does the line $y = x + k$ touch the curve $y = x^2$ at exactly one point?", "$-\\frac{1}{4}$", "$\\frac{1}{4}$", "1", "−1", "x² − x − k = 0 has equal roots when 1 + 4k = 0."],
          ["H", "Two numbers add up to 9 and the sum of their squares is 41. What are the numbers?", "4 and 5", "3 and 6", "2 and 7", "1 and 8", "x² + (9 − x)² = 41 gives x² − 9x + 20 = 0."],
        ],
      },
      {
        week: 5,
        title: "Graphs of quadratic functions",
        subtopics: ["Tables of values and plotting parabolas", "Roots, intercepts and turning points", "Axis of symmetry and maximum or minimum values", "Solving equations graphically"],
        objectives: ["Draw the graph of a quadratic function from a table of values", "Read roots and the y-intercept from a graph", "Find the axis of symmetry and the turning point", "Use a graph and an added line to solve related equations"],
        lesson: {
          title: "Quadratic Graphs",
          summary: "Draw parabolas, read their key features and use them to solve equations.",
          minutes: 45,
          notes: `## Shape
The graph of $y = ax^2 + bx + c$ is a **parabola**.
- If $a > 0$ it opens **upwards** and has a **minimum** point.
- If $a < 0$ it opens **downwards** and has a **maximum** point.

## Key features
| Feature | How to find it |
|---|---|
| y-intercept | put $x = 0$: the point $(0, c)$ |
| Roots (x-intercepts) | solve $ax^2 + bx + c = 0$ |
| Axis of symmetry | $x = -\\frac{b}{2a}$ (halfway between the roots) |
| Turning point | substitute the axis value into the equation |

For $y = x^2 - 6x + 5$: axis $x = 3$; turning point $(3, 9 - 18 + 5) = (3, -4)$; roots 1 and 5; y-intercept 5.

## Drawing
Make a table of values, plot the points and join them with a **smooth curve** (not straight lines). The curve is symmetrical about its axis.

## Solving equations graphically
- The roots of $ax^2 + bx + c = 0$ are where the graph crosses the **x-axis**.
- To solve $x^2 - 2x - 3 = 5$ using the graph of $y = x^2 - 2x - 3$, draw the line $y = 5$ and read the x-values where it meets the curve.`,
          examples: `**Example 1.** $y = x^2 - 4$ cuts the x-axis at $x = \\pm 2$.

**Example 2.** $y = -x^2 + 4$ opens downwards: its maximum value is 4.

**Example 3.** Maximum value of $y = 5 + 4x - x^2$: $y = 9 - (x - 2)^2$, so the maximum is **9** when $x = 2$.`,
        },
        questions: [
          ["E", "The graph of $y = x^2$ is a", "parabola", "straight line", "circle", "hyperbola", "Every quadratic graph is a parabola."],
          ["E", "Where does $y = x^2 - 4$ cut the x-axis?", "$x = \\pm 2$", "$x = 4$", "$x = -4$", "$x = \\pm 4$", "x² − 4 = 0 gives x = ±2."],
          ["M", "What is the axis of symmetry of $y = x^2 - 6x + 5$?", "$x = 3$", "$x = -3$", "$x = 5$", "$x = 6$", "x = −b/(2a) = 6/2 = 3."],
          ["M", "What is the minimum point of $y = x^2 - 6x + 5$?", "$(3, -4)$", "$(3, 4)$", "$(-3, -4)$", "$(5, 0)$", "At x = 3, y = 9 − 18 + 5 = −4."],
          ["M", "The graph of $y = -x^2 + 4$ has", "a maximum value of 4", "a minimum value of 4", "a maximum value of −4", "a minimum value of −4", "a < 0, so it opens downwards with its highest point at (0, 4)."],
          ["M", "What is the y-intercept of $y = 2x^2 - 3x + 7$?", "7", "2", "−3", "0", "Put x = 0: y = 0 − 0 + 7 = 7."],
          ["M", "Where does $y = x^2 - x - 6$ cut the x-axis?", "$x = 3$ and $x = -2$", "$x = -3$ and $x = 2$", "$x = 6$ and $x = -1$", "$x = 1$ and $x = -6$", "(x − 3)(x + 2) = 0."],
          ["H", "Using the graph of $y = x^2 - 2x - 3$, which line should you draw to solve $x^2 - 2x - 3 = 5$?", "$y = 5$", "$y = -3$", "$y = 2x$", "$x = 5$", "The solutions are where the curve reaches height 5."],
          ["H", "The parabola $y = ax^2 + bx + c$ opens downwards when", "$a < 0$", "$a > 0$", "$c < 0$", "$b < 0$", "The sign of a decides the direction."],
          ["H", "What is the maximum value of $y = 5 + 4x - x^2$?", "9", "5", "4", "2", "y = 9 − (x − 2)², so the maximum is 9 at x = 2."],
        ],
      },
      {
        week: 6,
        title: "Linear inequalities in two variables",
        subtopics: ["Boundary lines: solid or broken", "Shading the required region", "Regions defined by several inequalities", "Introduction to linear programming"],
        objectives: ["Draw boundary lines correctly for strict and non-strict inequalities", "Identify the region that satisfies an inequality", "Find the feasible region for a set of inequalities", "Find the maximum or minimum of a linear expression at the vertices"],
        lesson: {
          title: "Graphing Inequalities and Linear Programming",
          summary: "Show inequalities in two variables as regions and use them to optimise.",
          minutes: 45,
          notes: `## Boundary lines
- For $<$ or $>$, the boundary line is **broken (dashed)** because points on it are **not** included.
- For $\\le$ or $\\ge$, the boundary is **solid** because points on it **are** included.

## Which side?
Test a point not on the line (the origin is easiest if the line does not pass through it). If it satisfies the inequality, that side is the required region.
- $y > 2$ is the region **above** the line $y = 2$.
- $x \\ge 0$ is **on and to the right of** the y-axis.

## Several inequalities
The **feasible region** is where all the inequalities are satisfied at the same time. (Some textbooks shade the **unwanted** regions so the feasible region stays clear.)

## Linear programming
To maximise or minimise an expression such as $P = 2x + 3y$ over a feasible region:
1. Find the **vertices** (corners) of the region.
2. Evaluate $P$ at each vertex.
3. The largest value is the maximum and the smallest is the minimum — the optimum always occurs at a **vertex**.
Vertices $(0, 0)$, $(4, 0)$, $(0, 3)$, $(3, 2)$ give $P = 0, 8, 9, 12$, so the maximum is 12 at $(3, 2)$.`,
          examples: `**Example 1.** Is $(1, 3)$ in the region $y > 2x$? *Answer:* yes, because $3 > 2$.

**Example 2.** Which point satisfies $x + y \\le 4$, $x \\ge 0$, $y \\ge 0$: $(1, 2)$ or $(3, 2)$? *Answer:* $(1, 2)$, since $3 \\le 4$ but $5 > 4$.

**Example 3.** How many points with whole-number coordinates satisfy $x \\ge 1$, $y \\ge 1$ and $x + y \\le 3$? *Answer:* 3: $(1, 1)$, $(1, 2)$, $(2, 1)$.`,
        },
        questions: [
          ["E", "The region $y > 2$ lies", "above the line $y = 2$", "below the line $y = 2$", "to the left of the line $x = 2$", "to the right of the line $x = 2$", "All points above the line have y-coordinates greater than 2."],
          ["E", "The boundary line for $y \\ge x + 1$ is drawn as", "a solid line", "a broken line", "a curve", "no line at all", "Points on the line satisfy ≥, so it is included."],
          ["E", "In linear programming, the optimal value of the objective function occurs", "at a vertex of the feasible region", "at the origin only", "outside the feasible region", "at the centre of the region", "It is checked at the corners."],
          ["M", "Does the point $(1, 3)$ lie in the region $y > 2x$?", "Yes, because 3 > 2", "No, because 3 < 2", "No, because it lies on the line", "Yes, because 1 < 3", "Substitute: 3 > 2 × 1."],
          ["M", "Which point satisfies $x + y \\le 4$, $x \\ge 0$ and $y \\ge 0$?", "$(1, 2)$", "$(3, 2)$", "$(-1, 1)$", "$(5, 0)$", "1 + 2 = 3 ≤ 4 and both coordinates are non-negative."],
          ["M", "The region $x \\ge 0$ lies", "on and to the right of the y-axis", "on and above the x-axis", "to the left of the y-axis", "below the x-axis", "Points to the right of the y-axis have positive x-coordinates."],
          ["M", "The boundary of $y < 3x$ is drawn as a broken line because", "points on the line are not included", "points on the line are included", "the line is curved", "the region is empty", "A strict inequality excludes the boundary."],
          ["H", "A feasible region has vertices $(0, 0)$, $(4, 0)$, $(0, 3)$ and $(3, 2)$. What is the maximum value of $P = 2x + 3y$?", "12", "9", "8", "13", "P = 0, 8, 9 and 12 at the vertices; the maximum is 12 at (3, 2)."],
          ["H", "Which inequality describes the region below the line $y = 2x + 1$, not including the line?", "$y < 2x + 1$", "$y > 2x + 1$", "$y \\le 2x + 1$", "$y \\ge 2x + 1$", "Below means smaller y; 'not including' means strict."],
          ["H", "How many points with whole-number coordinates satisfy $x \\ge 1$, $y \\ge 1$ and $x + y \\le 3$?", "3", "2", "4", "6", "(1, 1), (1, 2) and (2, 1)."],
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
        title: "Chord properties of circles",
        subtopics: ["Parts of a circle revisited", "Perpendicular from the centre to a chord", "Equal chords", "Parallel chords"],
        objectives: ["State that the perpendicular from the centre bisects a chord", "Calculate chord lengths and distances from the centre", "State that equal chords are equidistant from the centre", "Solve problems with parallel chords"],
        lesson: {
          title: "Chords of a Circle",
          summary: "Use the perpendicular-bisector property of chords with Pythagoras' theorem.",
          minutes: 45,
          notes: `## Chords
A **chord** joins two points on a circle. The **diameter** is the longest chord and passes through the centre.

## Key theorem
The **perpendicular from the centre** of a circle to a chord **bisects** the chord (cuts it into two equal halves). Conversely, the line from the centre to the mid-point of a chord is perpendicular to it.

This creates a **right-angled triangle** with:
- hypotenuse = radius $r$,
- one side = distance $d$ from the centre to the chord,
- other side = half the chord.
$r^2 = d^2 + \\left(\\frac{\\text{chord}}{2}\\right)^2$

## Equal chords
Equal chords are **equidistant** from the centre, and chords that are equidistant from the centre are equal.

## Parallel chords
Find the distance of each chord from the centre, then:
- chords on **opposite** sides of the centre: **add** the distances;
- chords on the **same** side: **subtract** them.`,
          examples: `**Example 1.** Radius 5 cm, chord 8 cm. *Distance from centre:* $\\sqrt{25 - 16} = 3$ cm.

**Example 2.** Radius 13 cm, chord 5 cm from the centre. *Half-chord:* $\\sqrt{169 - 25} = 12$, so the chord is **24 cm**.

**Example 3.** A chord of 10 cm subtends a right angle at the centre. *Radius:* the triangle is right-angled isosceles, so $r\\sqrt{2} = 10$ and $r = 5\\sqrt{2}$ cm.`,
        },
        questions: [
          ["E", "A chord that passes through the centre of a circle is called a", "diameter", "radius", "tangent", "sector", "The diameter is the chord through the centre."],
          ["E", "The perpendicular from the centre of a circle to a chord", "bisects the chord", "is equal to the chord", "is a tangent", "doubles the chord", "It divides the chord into two equal parts."],
          ["E", "The longest chord of a circle is the", "diameter", "radius", "tangent", "arc", "It passes through the centre."],
          ["M", "A circle has radius 5 cm and a chord of length 8 cm. How far is the chord from the centre?", "3 cm", "4 cm", "6 cm", "9 cm", "√(5² − 4²) = 3 cm."],
          ["M", "A chord is 5 cm from the centre of a circle of radius 13 cm. How long is the chord?", "24 cm", "12 cm", "18 cm", "8 cm", "Half-chord = √(169 − 25) = 12 cm."],
          ["M", "Two equal chords of a circle are", "equidistant from the centre", "always parallel", "always perpendicular", "at different distances from the centre", "This is a standard chord theorem."],
          ["M", "A circle has radius 10 cm and a chord of length 12 cm. How far is the chord from the centre?", "8 cm", "6 cm", "2 cm", "16 cm", "√(100 − 36) = 8 cm."],
          ["H", "Parallel chords of 6 cm and 8 cm lie on opposite sides of the centre of a circle of radius 5 cm. How far apart are they?", "7 cm", "1 cm", "5 cm", "14 cm", "Their distances from the centre are 4 cm and 3 cm; 4 + 3 = 7 cm."],
          ["H", "Parallel chords of 6 cm and 8 cm lie on the same side of the centre of a circle of radius 5 cm. How far apart are they?", "1 cm", "7 cm", "2 cm", "5 cm", "Distances 4 cm and 3 cm; 4 − 3 = 1 cm."],
          ["H", "A chord of length 10 cm subtends an angle of 90° at the centre. What is the radius?", "$5\\sqrt{2}$ cm", "5 cm", "10 cm", "$10\\sqrt{2}$ cm", "r² + r² = 100, so r = √50 = 5√2 cm."],
        ],
      },
      {
        week: 2,
        title: "Angle properties of circles",
        subtopics: ["Angle at the centre and at the circumference", "Angle in a semicircle", "Angles in the same segment", "Combining circle facts with triangle facts"],
        objectives: ["State that the angle at the centre is twice the angle at the circumference", "Use the angle in a semicircle", "Use the equality of angles in the same segment", "Solve multi-step problems with reasons"],
        lesson: {
          title: "Angles in a Circle",
          summary: "Apply the main circle theorems to calculate angles, giving reasons.",
          minutes: 45,
          notes: `## Angle at the centre
The angle subtended by an arc **at the centre** is **twice** the angle it subtends **at any point on the remaining circumference**.
If the angle at the centre is 110°, the angle at the circumference is 55°.
This also works with a **reflex** angle at the centre: a reflex angle of 260° gives 130° at the circumference.

## Angle in a semicircle
The angle subtended by a **diameter** at the circumference is **90°**. So if AB is a diameter and C is on the circle, triangle ABC is right-angled at C.

## Angles in the same segment
Angles subtended by the **same arc** (or chord) at the circumference, on the same side, are **equal**.

## Isosceles triangles from radii
Two radii and a chord form an **isosceles triangle**, so the angles at the chord are equal: if $\\angle AOB = 100°$, then $\\angle OAB = \\angle OBA = 40°$.

## Giving reasons
Always state the theorem you use, e.g. *(angle at centre = 2 × angle at circumference)*, *(angle in a semicircle)*.`,
          examples: `**Example 1.** AB is a diameter and $\\angle CAB = 40°$. *Then* $\\angle ACB = 90°$, so $\\angle ABC = 50°$.

**Example 2.** An angle at the circumference is 35°. *The angle at the centre on the same arc* is 70°.

**Example 3.** Triangle ABC is inscribed with AB a diameter, AC = 6 and BC = 8. *Then* AB = 10, so the radius is **5**.`,
        },
        questions: [
          ["E", "The angle subtended by an arc at the centre is ___ the angle it subtends at the circumference.", "twice", "equal to", "half", "three times", "This is the angle-at-the-centre theorem."],
          ["E", "The angle in a semicircle is", "90°", "180°", "45°", "60°", "A diameter subtends a right angle at the circumference."],
          ["E", "Angles in the same segment of a circle are", "equal", "supplementary", "complementary", "always 90°", "They are subtended by the same arc."],
          ["M", "The angle at the centre of a circle is 110°. What is the angle subtended by the same arc at the circumference?", "55°", "110°", "220°", "70°", "Half of 110° is 55°."],
          ["M", "An angle at the circumference is 35°. What is the angle at the centre subtended by the same arc?", "70°", "35°", "17.5°", "145°", "Twice 35° is 70°."],
          ["M", "AB is a diameter of a circle and C is a point on the circle. If $\\angle CAB = 40°$, find $\\angle ABC$.", "50°", "40°", "90°", "140°", "∠ACB = 90° (angle in a semicircle), so ∠ABC = 180° − 90° − 40° = 50°."],
          ["M", "One angle in a segment of a circle is 48°. What is another angle in the same segment?", "48°", "132°", "96°", "24°", "Angles in the same segment are equal."],
          ["H", "The reflex angle at the centre of a circle is 260°. What angle does the same (major) arc subtend at the circumference?", "130°", "50°", "100°", "260°", "Half of 260° is 130°."],
          ["H", "O is the centre of a circle and $\\angle AOB = 100°$. Find $\\angle OAB$.", "40°", "50°", "80°", "100°", "OA = OB (radii), so the base angles are (180° − 100°) ÷ 2 = 40°."],
          ["H", "Triangle ABC is inscribed in a circle with AB a diameter. AC = 6 cm and BC = 8 cm. What is the radius of the circle?", "5 cm", "10 cm", "7 cm", "14 cm", "∠C = 90°, so AB = √(36 + 64) = 10 cm and the radius is 5 cm."],
        ],
      },
      {
        week: 3,
        title: "Cyclic quadrilaterals and tangents",
        subtopics: ["Opposite angles of a cyclic quadrilateral", "Exterior angle of a cyclic quadrilateral", "Tangent properties", "The alternate segment theorem"],
        objectives: ["Use the fact that opposite angles of a cyclic quadrilateral add up to 180°", "Use the exterior angle of a cyclic quadrilateral", "Use tangent–radius and equal-tangent properties", "Apply the alternate segment theorem"],
        lesson: {
          title: "Cyclic Quadrilaterals and Tangents",
          summary: "Use the properties of cyclic quadrilaterals and tangents to find angles and lengths.",
          minutes: 45,
          notes: `## Cyclic quadrilaterals
A **cyclic quadrilateral** has all four vertices on a circle.
- **Opposite angles add up to 180°**: if one angle is 75°, the opposite angle is 105°.
- An **exterior angle** equals the **interior opposite angle**.

## Tangents
A **tangent** touches a circle at exactly one point.
- A tangent is **perpendicular to the radius** at the point of contact.
- The two tangents drawn from an external point are **equal in length**.
Tangent from a point 13 cm from the centre of a circle of radius 5 cm: $\\sqrt{169 - 25} = 12$ cm.
If tangents from P touch the circle at A and B, then $\\angle AOB + \\angle APB = 180°$ (because $\\angle OAP = \\angle OBP = 90°$).

## Alternate segment theorem
The angle between a tangent and a chord at the point of contact equals the angle subtended by that chord **in the alternate segment**.
If the tangent–chord angle is 65°, the angle in the alternate segment is also 65°.`,
          examples: `**Example 1.** Opposite angles of a cyclic quadrilateral are $x$ and $2x$. *Then* $3x = 180°$ and $x = 60°$.

**Example 2.** Tangents from P meet the circle at A and B with $\\angle APB = 50°$. *Then* $\\angle AOB = 360° - 90° - 90° - 50° = 130°$.

**Example 3.** An exterior angle of a cyclic quadrilateral is 85°. *The interior opposite angle* is 85°.`,
        },
        questions: [
          ["E", "The opposite angles of a cyclic quadrilateral add up to", "180°", "90°", "360°", "they are equal", "This is the cyclic quadrilateral theorem."],
          ["E", "A tangent to a circle and the radius at the point of contact are", "perpendicular", "parallel", "equal in length", "at 45° to each other", "The tangent meets the radius at 90°."],
          ["E", "The two tangents drawn to a circle from an external point are", "equal in length", "perpendicular to each other", "parallel", "always of different lengths", "Tangents from the same point are equal."],
          ["M", "One angle of a cyclic quadrilateral is 75°. What is the opposite angle?", "105°", "75°", "15°", "285°", "180° − 75° = 105°."],
          ["M", "An exterior angle of a cyclic quadrilateral is equal to", "the interior opposite angle", "the adjacent interior angle", "90°", "half the opposite angle", "Both are supplementary to the same interior angle."],
          ["M", "A point is 13 cm from the centre of a circle of radius 5 cm. How long is a tangent from the point to the circle?", "12 cm", "8 cm", "18 cm", "144 cm", "√(13² − 5²) = 12 cm."],
          ["M", "The opposite angles of a cyclic quadrilateral are $x$ and $2x$. Find $x$.", "60°", "90°", "45°", "120°", "Opposite angles add up to 180°: 3x = 180°, so x = 60°."],
          ["H", "The alternate segment theorem states that the angle between a tangent and a chord equals", "the angle in the alternate segment", "the angle at the centre", "90°", "the exterior angle of the triangle", "This theorem links tangent–chord angles to inscribed angles."],
          ["H", "The angle between a tangent and a chord at the point of contact is 65°. What is the angle subtended by the chord in the alternate segment?", "65°", "25°", "115°", "130°", "By the alternate segment theorem they are equal."],
          ["H", "Two tangents from P touch a circle, centre O, at A and B. If $\\angle APB = 50°$, find $\\angle AOB$.", "130°", "50°", "90°", "100°", "In quadrilateral OAPB, ∠OAP = ∠OBP = 90°, so ∠AOB = 360° − 180° − 50° = 130°."],
        ],
      },
      {
        week: 4,
        title: "Arc length and area of a sector",
        subtopics: ["Length of an arc", "Area of a sector", "Perimeter of a sector", "Segments and cones from sectors"],
        objectives: ["Calculate the length of an arc", "Calculate the area and perimeter of a sector", "Find the angle of a sector from its arc or area", "Find the area of a segment and relate sectors to cones"],
        lesson: {
          title: "Arcs, Sectors and Segments",
          summary: "Calculate lengths and areas of parts of circles and link sectors to cones.",
          minutes: 45,
          notes: `## Fractions of a circle
A sector with angle $\\theta$ is $\\frac{\\theta}{360°}$ of the whole circle.

| Quantity | Formula |
|---|---|
| Arc length | $\\frac{\\theta}{360}\\times 2\\pi r$ |
| Area of sector | $\\frac{\\theta}{360}\\times\\pi r^2$ |
| Perimeter of sector | arc length $+ 2r$ |

## Working backwards
Arc length 22 cm in a circle of radius 21 cm: $22 = \\frac{\\theta}{360}\\times 132$, so $\\theta = 60°$.

## Segments
A **segment** is the region between a chord and its arc:
area of minor segment = area of sector − area of triangle.
For radius 14 cm and a 90° angle: $154 - \\frac{1}{2}\\times 14\\times 14 = 154 - 98 = 56$ cm².

## Sectors folded into cones
When a sector is folded into a cone:
- the **arc length** becomes the **circumference of the base** of the cone;
- the **radius** of the sector becomes the **slant height** of the cone.`,
          examples: `**Example 1.** Arc length for radius 7 cm and angle 90°: $\\frac{1}{4}\\times 44 = 11$ cm; *perimeter of sector* $= 11 + 14 = 25$ cm.

**Example 2.** Area of a 45° sector of radius 14 cm: $\\frac{1}{8}\\times 616 = 77$ cm².

**Example 3.** A 120° sector of radius 21 cm is folded into a cone. *Arc* $= \\frac{1}{3}\\times 132 = 44$ cm $= 2\\pi r$, so the base radius is **7 cm**.`,
        },
        questions: [
          ["E", "Which formula gives the length of an arc with angle θ in a circle of radius r?", "$\\frac{\\theta}{360}\\times 2\\pi r$", "$\\frac{\\theta}{360}\\times\\pi r^2$", "$\\theta\\times r$", "$2\\pi r\\theta$", "An arc is a fraction θ/360 of the circumference."],
          ["E", "Which formula gives the area of a sector with angle θ?", "$\\frac{\\theta}{360}\\times\\pi r^2$", "$\\frac{\\theta}{360}\\times 2\\pi r$", "$\\pi r^2\\theta$", "$\\frac{1}{2}r\\theta$", "A sector is a fraction θ/360 of the area of the circle."],
          ["E", "A sector is bounded by", "two radii and an arc", "a chord and an arc", "two chords", "a tangent and a radius", "It looks like a slice of pie."],
          ["M", "Find the length of an arc of radius 7 cm subtending 90° at the centre. (Take $\\pi = \\frac{22}{7}$.)", "11 cm", "44 cm", "38.5 cm", "22 cm", "¼ × 2 × 22/7 × 7 = 11 cm."],
          ["M", "Find the area of a sector of radius 14 cm and angle 45°. (Take $\\pi = \\frac{22}{7}$.)", "77 cm²", "11 cm²", "154 cm²", "38.5 cm²", "⅛ × 616 = 77 cm²."],
          ["M", "Find the perimeter of a sector of radius 7 cm and angle 90°. (Take $\\pi = \\frac{22}{7}$.)", "25 cm", "11 cm", "18 cm", "32 cm", "Arc 11 cm + two radii 14 cm = 25 cm."],
          ["M", "An arc of length 22 cm lies on a circle of radius 21 cm. What angle does it subtend at the centre? (Take $\\pi = \\frac{22}{7}$.)", "60°", "30°", "45°", "90°", "θ/360 × 132 = 22, so θ = 60°."],
          ["H", "A sector of a circle of radius 14 cm has area 77 cm². What is its angle? (Take $\\pi = \\frac{22}{7}$.)", "45°", "90°", "60°", "30°", "77/616 × 360° = 45°."],
          ["H", "A sector of angle 120° and radius 21 cm is folded to form a cone. What is the radius of the base of the cone? (Take $\\pi = \\frac{22}{7}$.)", "7 cm", "21 cm", "14 cm", "3.5 cm", "Arc = ⅓ × 132 = 44 cm = 2πr, so r = 7 cm."],
          ["H", "Find the area of the minor segment cut off by a chord that subtends 90° at the centre of a circle of radius 14 cm. (Take $\\pi = \\frac{22}{7}$.)", "56 cm²", "154 cm²", "98 cm²", "252 cm²", "Sector 154 cm² − triangle ½ × 14 × 14 = 98 cm²."],
        ],
      },
      {
        week: 5,
        title: "The sine rule",
        subtopics: ["Statement of the sine rule", "Finding sides", "Finding angles", "Area of a triangle using ½ab sin C"],
        objectives: ["State the sine rule", "Use the sine rule to find unknown sides", "Use the sine rule to find unknown angles", "Calculate the area of any triangle using ½ab sin C"],
        lesson: {
          title: "The Sine Rule",
          summary: "Solve triangles that are not right-angled using the sine rule, and find their areas.",
          minutes: 45,
          notes: `## Labelling
In triangle ABC, side $a$ is opposite angle $A$, side $b$ is opposite angle $B$ and side $c$ is opposite angle $C$.

## The sine rule
$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
Use it when you know:
- **two angles and one side**, or
- **two sides and an angle opposite one of them**.

## Finding a side
$A = 30°$, $B = 45°$, $a = 10$: $b = \\frac{10\\sin 45°}{\\sin 30°} = \\frac{10\\times 0.7071}{0.5} = 14.14$.

## Finding an angle
Use the rule "upside down": $\\frac{\\sin A}{a} = \\frac{\\sin B}{b}$.
$a = 5$, $b = 7$, $A = 30°$: $\\sin B = \\frac{7\\times 0.5}{5} = 0.7$.

## Useful facts
- The angles of a triangle add up to 180° — find the third angle first.
- The **largest side** is opposite the **largest angle**.

## Area of any triangle
$\\text{Area} = \\frac{1}{2}ab\\sin C$ (two sides and the **included** angle)
$a = 8$, $b = 10$, $C = 30°$: area $= \\frac{1}{2}\\times 8\\times 10\\times 0.5 = 20$.`,
          examples: `**Example 1.** $a = 8$, $A = 30°$, $B = 90°$. *Then* $b = \\frac{8\\times 1}{0.5} = 16$.

**Example 2.** $a = 12$, $\\sin A = 0.6$, $\\sin B = 0.8$. *Then* $b = \\frac{12\\times 0.8}{0.6} = 16$.

**Example 3.** A 30°–60°–90° triangle has hypotenuse 20. *The shortest side* is opposite 30°: $20\\sin 30° = 10$.`,
        },
        questions: [
          ["E", "Which statement is the sine rule?", "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$", "$a^2 = b^2 + c^2 - 2bc\\cos A$", "$\\frac{a}{\\cos A} = \\frac{b}{\\cos B}$", "$a\\sin A = b\\sin B$", "Each side divided by the sine of its opposite angle is the same."],
          ["E", "In any triangle, the largest side is opposite", "the largest angle", "the smallest angle", "a right angle", "the base", "Larger angles face longer sides."],
          ["E", "In triangle ABC, $A = 40°$ and $B = 60°$. Find $C$.", "80°", "100°", "20°", "60°", "180° − 40° − 60° = 80°."],
          ["M", "In triangle ABC, $A = 30°$, $B = 45°$ and $a = 10$ cm. Find $b$. (Take $\\sin 45° = 0.7071$.)", "14.14 cm", "7.07 cm", "20 cm", "5 cm", "b = 10 × 0.7071 ÷ 0.5 = 14.14 cm."],
          ["M", "In triangle ABC, $a = 8$ cm, $A = 30°$ and $B = 90°$. Find $b$.", "16 cm", "4 cm", "$8\\sqrt{3}$ cm", "13.86 cm", "b = 8 × sin 90° ÷ sin 30° = 8 ÷ 0.5 = 16 cm."],
          ["M", "In triangle ABC, $a = 12$, $\\sin A = 0.6$ and $\\sin B = 0.8$. Find $b$.", "16", "9", "12", "20", "b = 12 × 0.8 ÷ 0.6 = 16."],
          ["M", "The sine rule can be used when you know", "two angles and one side", "three sides only", "two sides and the included angle only", "one side only", "With two angles, the third is known too."],
          ["H", "In triangle ABC, $a = 5$, $b = 7$ and $A = 30°$. Find $\\sin B$.", "0.7", "0.357", "0.5", "1.4", "sin B = 7 × 0.5 ÷ 5 = 0.7."],
          ["H", "A triangle has angles 30°, 60° and 90°, and its longest side is 20 cm. How long is its shortest side?", "10 cm", "17.32 cm", "5 cm", "$\\frac{20}{\\sqrt{3}}$ cm", "The shortest side is opposite 30°: 20 × sin 30° = 10 cm."],
          ["H", "Find the area of a triangle with $a = 8$ cm, $b = 10$ cm and included angle $C = 30°$.", "20 cm²", "40 cm²", "34.6 cm²", "80 cm²", "½ × 8 × 10 × sin 30° = 20 cm²."],
        ],
      },
      {
        week: 6,
        title: "The cosine rule",
        subtopics: ["Statement of the cosine rule", "Finding a side from two sides and the included angle", "Finding an angle from three sides", "Obtuse angles and the sign of cosine"],
        objectives: ["State the cosine rule", "Find a side when two sides and the included angle are known", "Find an angle when three sides are known", "Recognise that a negative cosine means an obtuse angle"],
        lesson: {
          title: "The Cosine Rule",
          summary: "Find unknown sides and angles when the sine rule cannot be used.",
          minutes: 45,
          notes: `## The cosine rule
$a^2 = b^2 + c^2 - 2bc\\cos A$
(and similarly for $b^2$ and $c^2$).
Rearranged to find an angle:
$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$

## When to use it
- **Two sides and the included angle** → find the third side.
- **Three sides** → find any angle.
(Use the sine rule for the other cases.)

## Special case
When $A = 90°$, $\\cos A = 0$ and the rule becomes Pythagoras' theorem: $a^2 = b^2 + c^2$.

## Obtuse angles
If $\\cos A$ is **negative**, angle $A$ is **obtuse** (between 90° and 180°). Sides 3, 5, 7: $\\cos C = \\frac{9 + 25 - 49}{30} = -0.5$, so $C = 120°$.

## Check
The largest angle is always opposite the largest side — find that angle first when you know three sides.`,
          examples: `**Example 1.** $b = 5$, $c = 8$, $A = 60°$: $a^2 = 25 + 64 - 80\\times 0.5 = 49$, so $a = 7$.

**Example 2.** $b = c = 10$, $A = 120°$: $a^2 = 100 + 100 + 100 = 300$, so $a = 10\\sqrt{3}\\approx 17.32$.

**Example 3.** A parallelogram has sides 5 and 8 with an angle of 60°. *Shorter diagonal:* $\\sqrt{25 + 64 - 40} = 7$.`,
        },
        questions: [
          ["E", "Which formula is the cosine rule for side $a$?", "$a^2 = b^2 + c^2 - 2bc\\cos A$", "$a^2 = b^2 + c^2 + 2bc\\cos A$", "$a = b\\cos A + c$", "$\\frac{a}{\\cos A} = \\frac{b}{\\cos B}$", "It generalises Pythagoras' theorem."],
          ["E", "The cosine rule is used to find a side when you know", "two sides and the included angle", "two angles and one side", "one side only", "one angle only", "The angle must be between the two known sides."],
          ["E", "If $\\cos A$ is negative, angle A is", "obtuse", "acute", "a right angle", "zero", "Cosine is negative for angles between 90° and 180°."],
          ["M", "In triangle ABC, $b = 5$, $c = 8$ and $A = 60°$. Find $a$.", "7", "49", "9.4", "13", "a² = 25 + 64 − 2 × 5 × 8 × 0.5 = 49."],
          ["M", "A triangle has sides 3, 5 and 7. What is its largest angle?", "120°", "60°", "90°", "150°", "cos C = (9 + 25 − 49) ÷ 30 = −0.5."],
          ["M", "In triangle ABC, $b = 4$, $c = 6$ and $A = 90°$. Find $a$ to 2 decimal places.", "7.21", "10", "52", "5", "a² = 16 + 36 = 52, so a ≈ 7.21."],
          ["M", "When $A = 90°$, the cosine rule reduces to", "Pythagoras' theorem", "the sine rule", "the area formula", "the angle sum of a triangle", "cos 90° = 0, so the term −2bc cos A disappears and a² = b² + c²."],
          ["H", "A triangle has sides 5, 6 and 7. Find the cosine of the angle opposite the side of length 7.", "0.2", "−0.2", "0.5", "1.2", "(25 + 36 − 49) ÷ 60 = 0.2."],
          ["H", "In triangle ABC, $b = c = 10$ and $A = 120°$. Find $a$ to 2 decimal places.", "17.32", "10", "20", "14.14", "a² = 100 + 100 − 200 × (−0.5) = 300."],
          ["H", "A parallelogram has sides 5 cm and 8 cm and an angle of 60°. How long is its shorter diagonal?", "7 cm", "$\\sqrt{129}$ cm", "13 cm", "9.4 cm", "d² = 25 + 64 − 80 × 0.5 = 49."],
        ],
      },
      {
        week: 7,
        title: "Bearings and distances",
        subtopics: ["Drawing bearing diagrams", "Right-angled bearing problems", "Using the sine and cosine rules with bearings", "Finding bearings from calculated angles"],
        objectives: ["Draw accurate sketches for bearing problems", "Find angles between paths from their bearings", "Solve distance problems using Pythagoras, sine and cosine rules", "Calculate the bearing of one point from another"],
        lesson: {
          title: "Solving Bearing Problems",
          summary: "Combine bearings with trigonometry to find distances and directions.",
          minutes: 45,
          notes: `## Sketch first
Draw a **north line** at every point, mark the bearings clockwise from north, and label the distances. Most errors come from a poor sketch.

## Angles between paths
If two ships leave the same port on bearings 030° and 090°, the angle between their paths is $90° - 30° = 60°$.
At a turning point, use parallel north lines (**co-interior angles add up to 180°**) to find interior angles of the triangle.

## Right angles
Paths on bearings that differ by 90° (e.g. 045° then 135°) meet at a right angle — use **Pythagoras** and **tan**.
300 km on 045° then 400 km on 135°: distance $= \\sqrt{300^2 + 400^2} = 500$ km. The angle at the start is $\\tan^{-1}\\frac{400}{300}\\approx 53.1°$, so the bearing of the end point is about $045° + 53.1° = 098.1°$.

## Other triangles
Use the **cosine rule** (two sides and the included angle) or the **sine rule** (two angles and a side).
Two ships: 8 km on 030° and 6 km on 090°, angle 60° between them:
$d^2 = 64 + 36 - 96\\cos 60° = 52$, so $d\\approx 7.21$ km.`,
          examples: `**Example 1.** The bearing of B from A is 120°. *The angle between AB and due south at A* is 60°.

**Example 2.** 6 km east then 8 km south: *distance from start* = 10 km.

**Example 3.** A is 10 km from B on 060° and C is 10 km from B on 180°. *Angle ABC* = 120°, so $AC^2 = 100 + 100 - 200\\cos 120° = 300$ and $AC\\approx 17.32$ km.`,
        },
        questions: [
          ["E", "The bearing 270° represents", "due west", "due east", "due south", "north-west", "Three quarters of a turn clockwise from north."],
          ["E", "What is the three-figure bearing of north-west?", "315°", "045°", "135°", "225°", "Halfway between west (270°) and north (360°)."],
          ["E", "A ship sails from A to B on a bearing of 070°. What is the bearing of A from B?", "250°", "110°", "290°", "070°", "070° + 180° = 250°."],
          ["M", "A girl walks 6 km due east and then 8 km due south. How far is she from her starting point?", "10 km", "14 km", "2 km", "100 km", "√(6² + 8²) = 10 km."],
          ["M", "Two ships leave a port, one on a bearing of 030° and the other on 090°. What is the angle between their paths?", "60°", "30°", "90°", "120°", "90° − 30° = 60°."],
          ["M", "Two ships leave a port: one sails 8 km on a bearing of 030° and the other 6 km on 090°. How far apart are they, to 2 decimal places?", "7.21 km", "10 km", "14 km", "5 km", "Angle between paths 60°: d² = 64 + 36 − 96 × 0.5 = 52."],
          ["M", "The bearing of B from A is 120°. What is the angle between AB and due south at A?", "60°", "120°", "30°", "240°", "South is 180°; 180° − 120° = 60°."],
          ["H", "A plane flies 300 km on a bearing of 045° and then 400 km on 135°. How far is it from its starting point?", "500 km", "700 km", "100 km", "360 km", "The two legs are at right angles: √(300² + 400²) = 500 km."],
          ["H", "A plane flies 300 km on 045° and then 400 km on 135°. What is the bearing of its final position from the start, to the nearest degree?", "098°", "045°", "135°", "082°", "The angle at the start is tan⁻¹(400/300) ≈ 53°, added to 045°."],
          ["H", "A is 10 km from B on a bearing of 060°, and C is 10 km from B on a bearing of 180°. How far is A from C, to 2 decimal places?", "17.32 km", "10 km", "20 km", "14.14 km", "∠ABC = 120°, so AC² = 100 + 100 − 200 cos 120° = 300."],
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
        title: "Cumulative frequency and quartiles",
        subtopics: ["Cumulative frequency tables", "Drawing the ogive", "Median and quartiles from an ogive", "Interquartile range and percentiles"],
        objectives: ["Build a cumulative frequency table", "Draw an ogive using upper class boundaries", "Estimate the median and quartiles from an ogive", "Calculate the interquartile range and interpret percentiles"],
        lesson: {
          title: "Ogives, Quartiles and Percentiles",
          summary: "Use cumulative frequency curves to estimate medians, quartiles and percentiles.",
          minutes: 45,
          notes: `## Cumulative frequency
The **cumulative frequency** is the running total of the frequencies. Frequencies 4, 7, 9, 5 give cumulative frequencies 4, 11, 20, 25.

## The ogive
Plot cumulative frequency against the **upper class boundary** of each class and join the points with a smooth curve (an S-shape). Start at the lower boundary of the first class with cumulative frequency 0.

## Reading the ogive (for grouped data with total $n$)
| Measure | Position |
|---|---|
| Lower quartile $Q_1$ | $\\frac{n}{4}$ |
| Median $Q_2$ | $\\frac{n}{2}$ |
| Upper quartile $Q_3$ | $\\frac{3n}{4}$ |
Draw across from the position to the curve, then down to read the value. For $n = 80$: $Q_1$ at 20, median at 40, $Q_3$ at 60.

## Spread
- **Interquartile range** = $Q_3 - Q_1$ (the spread of the middle half).
- **Semi-interquartile range** = $\\frac{1}{2}(Q_3 - Q_1)$.

## Percentiles
The $p$th **percentile** is the value below which $p\\%$ of the data lie. If 70 of 100 students scored below 60, then 60 is the **70th percentile**.

## Small ungrouped sets
For $n$ ordered values, $Q_1$ is the $\\frac{n + 1}{4}$th value and $Q_3$ the $\\frac{3(n + 1)}{4}$th value.`,
          examples: `**Example 1.** $Q_1 = 32$ and $Q_3 = 58$. *Interquartile range* = 26; *semi-interquartile range* = 13.

**Example 2.** For 3, 5, 7, 8, 10, 12, 15 ($n = 7$): $Q_1$ is the 2nd value (5) and $Q_3$ the 6th value (12).

**Example 3.** Frequencies 4, 7, 9, 5: the cumulative frequency at the end of the third class is 20.`,
        },
        questions: [
          ["E", "Cumulative frequency is", "the running total of the frequencies", "the highest frequency", "the average frequency", "the difference between frequencies", "Each value adds the next frequency to the total so far."],
          ["E", "On an ogive, cumulative frequency is plotted against", "the upper class boundaries", "the class marks", "the lower class limits", "the frequencies", "Everything below an upper boundary has been counted."],
          ["M", "Classes have frequencies 4, 7, 9 and 5. What is the cumulative frequency at the end of the third class?", "20", "9", "25", "16", "4 + 7 + 9 = 20."],
          ["M", "For grouped data with a total frequency of 80, at what position is the median read from an ogive?", "40th", "40.5th", "20th", "60th", "For grouped data the median is read at n/2 = 80/2 = 40."],
          ["M", "For grouped data with a total frequency of 80, at what position is the lower quartile read from an ogive?", "20th", "40th", "60th", "25th", "The lower quartile is read at n/4 = 80/4 = 20."],
          ["M", "The lower quartile is 32 and the upper quartile is 58. What is the interquartile range?", "26", "90", "13", "45", "Interquartile range = Q₃ − Q₁ = 58 − 32 = 26."],
          ["M", "The lower quartile is 32 and the upper quartile is 58. What is the semi-interquartile range?", "13", "26", "45", "90", "Half of 26 is 13."],
          ["H", "For grouped data with a total frequency of 80, at what position is the upper quartile read from an ogive?", "60th", "40th", "20th", "75th", "The upper quartile is read at 3n/4 = 240/4 = 60."],
          ["H", "An ogive shows that 70 of 100 students scored below 60 marks. The mark 60 is the", "70th percentile", "60th percentile", "30th percentile", "upper quartile", "70% of the students scored below it."],
          ["H", "Find the lower and upper quartiles of 3, 5, 7, 8, 10, 12, 15.", "$Q_1 = 5$, $Q_3 = 12$", "$Q_1 = 3$, $Q_3 = 15$", "$Q_1 = 7$, $Q_3 = 10$", "$Q_1 = 4$, $Q_3 = 13.5$", "n = 7: Q₁ is the 2nd value and Q₃ the 6th value."],
        ],
      },
      {
        week: 2,
        title: "Measures of dispersion",
        subtopics: ["Range", "Mean deviation", "Variance and standard deviation", "Effect of transformations on spread"],
        objectives: ["Calculate the range and mean deviation of data", "Calculate the variance and standard deviation", "Interpret standard deviation as a measure of spread", "Describe how adding or multiplying changes the standard deviation"],
        lesson: {
          title: "Measuring Spread",
          summary: "Describe how spread out data are using range, mean deviation, variance and standard deviation.",
          minutes: 45,
          notes: `## Why measure spread?
Two classes can have the same mean score but very different spreads. Measures of **dispersion** tell us how consistent the data are.

## Range
Range = largest value − smallest value. Easy, but it depends only on the two extreme values.

## Mean deviation
$\\text{MD} = \\frac{\\Sigma|x - \\bar{x}|}{n}$
For 2, 4, 6, 8: mean 5; deviations 3, 1, 1, 3; MD $= \\frac{8}{4} = 2$.

## Variance and standard deviation
$\\text{Variance} = \\frac{\\Sigma(x - \\bar{x})^2}{n}$ and $\\text{Standard deviation} = \\sqrt{\\text{variance}}$
For 2, 4, 6, 8: squared deviations 9, 1, 1, 9; variance $= \\frac{20}{4} = 5$; SD $= \\sqrt{5}\\approx 2.24$.
For grouped data use $\\frac{\\Sigma f(x - \\bar{x})^2}{\\Sigma f}$.

## Interpretation
- A **small** SD means the values are close to the mean (consistent).
- If all values are equal, SD = 0.

## Transformations
- Adding a constant to every value **does not change** the SD.
- Multiplying every value by $k$ multiplies the SD by $k$ (and the variance by $k^2$).`,
          examples: `**Example 1.** Variance of 1, 2, 3, 4, 5: mean 3; $\\frac{4 + 1 + 0 + 1 + 4}{5} = 2$.

**Example 2.** For 8 values, $\\Sigma(x - \\bar{x})^2 = 72$. *SD* $= \\sqrt{\\frac{72}{8}} = 3$.

**Example 3.** The SD of 5, 5, 5, 5 is 0.`,
        },
        questions: [
          ["E", "Find the range of 4, 9, 2 and 11.", "9", "7", "11", "2", "Range = largest value − smallest value = 11 − 2 = 9."],
          ["E", "The standard deviation is the square root of the", "variance", "mean", "range", "median", "SD = √variance."],
          ["M", "Find the mean deviation of 2, 4, 6 and 8.", "2", "5", "2.5", "4", "Mean 5; |deviations| 3, 1, 1, 3 sum to 8; 8 ÷ 4 = 2."],
          ["M", "Find the variance of 2, 4, 6 and 8.", "5", "2", "$\\sqrt{5}$", "20", "Squared deviations 9, 1, 1, 9 sum to 20; 20 ÷ 4 = 5."],
          ["M", "Find the standard deviation of 2, 4, 6 and 8, to 2 decimal places.", "2.24", "5", "2", "20", "SD = √5 ≈ 2.24."],
          ["M", "What is the standard deviation of 5, 5, 5, 5?", "0", "5", "1", "20", "No value differs from the mean."],
          ["H", "Find the variance of 1, 2, 3, 4 and 5.", "2", "$\\sqrt{2}$", "10", "2.5", "Mean 3; (4 + 1 + 0 + 1 + 4) ÷ 5 = 2."],
          ["H", "Every value in a data set is multiplied by 3. The standard deviation is", "multiplied by 3", "multiplied by 9", "unchanged", "increased by 3", "Every deviation from the mean is tripled."],
          ["H", "10 is added to every value in a data set. The standard deviation is", "unchanged", "increased by 10", "multiplied by 10", "decreased by 10", "The whole set shifts; the spread is the same."],
          ["H", "For 8 values, $\\Sigma(x - \\bar{x})^2 = 72$. Find the standard deviation.", "3", "9", "8.49", "2.83", "√(72 ÷ 8) = √9 = 3."],
        ],
      },
      {
        week: 3,
        title: "Probability: addition and multiplication laws",
        subtopics: ["Mutually exclusive events and the addition law", "Independent events and the multiplication law", "With and without replacement", "At-least-one problems"],
        objectives: ["Add probabilities of mutually exclusive events", "Multiply probabilities of independent events", "Calculate probabilities with and without replacement", "Use complementary events for 'at least one' problems"],
        lesson: {
          title: "Combining Probabilities",
          summary: "Use the addition and multiplication laws to find probabilities of combined events.",
          minutes: 45,
          notes: `## Complement
$P(A) + P(\\text{not } A) = 1$

## Addition law ("or")
- If $A$ and $B$ are **mutually exclusive** (cannot happen together): $P(A \\text{ or } B) = P(A) + P(B)$. A die showing 2 or 5: $\\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$.
- If they can overlap: $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. A card that is a king or a heart: $\\frac{4}{52} + \\frac{13}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$.

## Multiplication law ("and")
If $A$ and $B$ are **independent** (one does not affect the other): $P(A \\text{ and } B) = P(A)\\times P(B)$.
Two coins both heads: $\\frac{1}{2}\\times\\frac{1}{2} = \\frac{1}{4}$.

## With and without replacement
A bag has 5 red and 3 blue balls; two are drawn.
- **With** replacement: $P(\\text{both red}) = \\frac{5}{8}\\times\\frac{5}{8} = \\frac{25}{64}$.
- **Without** replacement: $P(\\text{both red}) = \\frac{5}{8}\\times\\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.

## "At least one"
$P(\\text{at least one}) = 1 - P(\\text{none})$. At least one six in two throws: $1 - \\left(\\frac{5}{6}\\right)^2 = \\frac{11}{36}$.

## Two dice
There are 36 equally likely outcomes; a sum of 7 happens in 6 ways, so $P = \\frac{1}{6}$.`,
          examples: `**Example 1.** $P(A) = 0.4$ and $P(B) = 0.5$ for independent events. $P(A \\text{ and } B) = 0.2$.

**Example 2.** Two dice: $P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6}$.

**Example 3.** At least one head in three tosses: $1 - \\frac{1}{8} = \\frac{7}{8}$.`,
        },
        questions: [
          ["E", "What is $P(A) + P(\\text{not } A)$?", "1", "0", "0.5", "2", "An event either happens or it does not."],
          ["E", "Mutually exclusive events are events that", "cannot happen at the same time", "always happen together", "do not affect each other", "have equal probabilities", "For example, a die cannot show 2 and 5 at once."],
          ["E", "Independent events are events where", "one happening does not affect the other", "they cannot happen together", "they always happen together", "their probabilities add to 1", "For example, two separate coin tosses."],
          ["M", "A fair die is thrown. What is the probability of a 2 or a 5?", "$\\frac{1}{3}$", "$\\frac{1}{36}$", "$\\frac{1}{6}$", "$\\frac{2}{3}$", "1/6 + 1/6 = 1/3."],
          ["M", "Two fair coins are tossed. What is the probability of two heads?", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{3}{4}$", "The tosses are independent: ½ × ½ = ¼."],
          ["M", "Two fair dice are thrown. What is the probability that the total is 7?", "$\\frac{1}{6}$", "$\\frac{7}{36}$", "$\\frac{1}{12}$", "$\\frac{1}{7}$", "6 of the 36 outcomes total 7."],
          ["M", "$A$ and $B$ are independent with $P(A) = 0.4$ and $P(B) = 0.5$. Find $P(A \\text{ and } B)$.", "0.2", "0.9", "0.1", "0.45", "0.4 × 0.5 = 0.2."],
          ["H", "A bag has 5 red and 3 blue balls. Two are drawn with replacement. What is the probability that both are red?", "$\\frac{25}{64}$", "$\\frac{5}{14}$", "$\\frac{10}{64}$", "$\\frac{5}{8}$", "5/8 × 5/8 = 25/64."],
          ["H", "A bag has 5 red and 3 blue balls. Two are drawn without replacement. What is the probability that both are red?", "$\\frac{5}{14}$", "$\\frac{25}{64}$", "$\\frac{5}{16}$", "$\\frac{1}{4}$", "5/8 × 4/7 = 20/56 = 5/14."],
          ["H", "A card is drawn from a standard pack of 52. What is the probability that it is a king or a heart?", "$\\frac{4}{13}$", "$\\frac{17}{52}$", "$\\frac{1}{52}$", "$\\frac{1}{4}$", "4/52 + 13/52 − 1/52 (the king of hearts) = 16/52."],
        ],
      },
      {
        week: 4,
        title: "Trigonometric ratios of angles up to 360°",
        subtopics: ["The four quadrants", "Signs of sine, cosine and tangent", "Related acute angles", "Solving simple trigonometric equations"],
        objectives: ["State the sign of each ratio in each quadrant", "Find the related acute angle for any angle up to 360°", "Evaluate trigonometric ratios of angles up to 360°", "Solve equations such as sin θ = 0.5 for 0° ≤ θ ≤ 360°"],
        lesson: {
          title: "Trigonometry Beyond 90°",
          summary: "Extend sine, cosine and tangent to all angles from 0° to 360° using quadrants.",
          minutes: 45,
          notes: `## Quadrants and signs
| Quadrant | Angles | Positive ratio(s) |
|---|---|---|
| 1st | 0°–90° | **All** |
| 2nd | 90°–180° | **Sine** |
| 3rd | 180°–270° | **Tangent** |
| 4th | 270°–360° | **Cosine** |
Memory aid: **A**ll **S**tudents **T**ake **C**hemistry (anticlockwise from the first quadrant).

## Related acute angle
| Quadrant | Related angle |
|---|---|
| 2nd | $180° - \\theta$ |
| 3rd | $\\theta - 180°$ |
| 4th | $360° - \\theta$ |
Find the ratio of the related angle, then attach the correct sign.
- $\\sin 150° = +\\sin 30° = \\frac{1}{2}$
- $\\cos 120° = -\\cos 60° = -\\frac{1}{2}$
- $\\tan 225° = +\\tan 45° = 1$
- $\\sin 240° = -\\sin 60° = -\\frac{\\sqrt{3}}{2}$

## Special values on the axes
$\\sin 0° = 0$, $\\sin 90° = 1$, $\\sin 180° = 0$, $\\sin 270° = -1$; $\\cos 0° = 1$, $\\cos 180° = -1$.

## Solving equations
$\\sin\\theta = 0.5$: the related angle is 30°; sine is positive in the 1st and 2nd quadrants, so $\\theta = 30°$ or $150°$.`,
          examples: `**Example 1.** $\\cos 300° = +\\cos 60° = \\frac{1}{2}$ (4th quadrant: cosine positive).

**Example 2.** Solve $\\cos\\theta = -0.5$ for $0° \\le \\theta \\le 360°$. *Solution:* related angle 60°; cosine negative in the 2nd and 3rd quadrants: $\\theta = 120°$ or $240°$.

**Example 3.** In the 2nd quadrant only sine is positive.`,
        },
        questions: [
          ["E", "In which quadrant are all three trigonometric ratios positive?", "First", "Second", "Third", "Fourth", "Angles between 0° and 90°."],
          ["E", "What is the value of $\\sin 180°$?", "0", "1", "−1", "$\\frac{1}{2}$", "At 180° the point on the unit circle is (−1, 0)."],
          ["M", "What is the value of $\\sin 150°$?", "$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "sin 150° = sin 30° (sine positive in the 2nd quadrant)."],
          ["M", "What is the value of $\\cos 120°$?", "$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "cos 120° = −cos 60°."],
          ["M", "What is the value of $\\tan 225°$?", "1", "−1", "$\\sqrt{3}$", "0", "tan 225° = tan 45° (tangent positive in the 3rd quadrant)."],
          ["M", "In the second quadrant, which ratio is positive?", "Sine", "Cosine", "Tangent", "None of them", "All Students Take Chemistry: S in the second quadrant."],
          ["M", "What is the value of $\\cos 300°$?", "$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "cos 300° = cos 60° (cosine positive in the 4th quadrant)."],
          ["H", "Solve $\\sin\\theta = 0.5$ for $0° \\le \\theta \\le 360°$.", "30° or 150°", "30° or 210°", "30° or 330°", "60° or 120°", "Sine is positive in the 1st and 2nd quadrants."],
          ["H", "What is the value of $\\sin 240°$?", "$-\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{1}{2}$", "$\\frac{1}{2}$", "sin 240° = −sin 60° (sine negative in the 3rd quadrant)."],
          ["H", "Solve $\\cos\\theta = -0.5$ for $0° \\le \\theta \\le 360°$.", "120° or 240°", "60° or 300°", "120° or 300°", "150° or 210°", "Related angle 60°; cosine is negative in the 2nd and 3rd quadrants."],
        ],
      },
      {
        week: 5,
        title: "Graphs of sine and cosine",
        subtopics: ["The graph of y = sin x", "The graph of y = cos x", "Amplitude and period", "Reading solutions from trigonometric graphs"],
        objectives: ["Draw the graphs of y = sin x and y = cos x for 0° ≤ x ≤ 360°", "State the maximum, minimum, amplitude and period of trigonometric graphs", "Describe the effect of y = a sin x and y = sin bx", "Use graphs to solve trigonometric equations"],
        lesson: {
          title: "Sine and Cosine Graphs",
          summary: "Draw and interpret the wave-shaped graphs of sine and cosine.",
          minutes: 45,
          notes: `## y = sin x (0° to 360°)
Starts at 0, rises to a **maximum of 1** at 90°, returns to 0 at 180°, falls to a **minimum of −1** at 270° and returns to 0 at 360°. It crosses the x-axis at 0°, 180° and 360°.

## y = cos x
Starts at its **maximum of 1** at 0°, is 0 at 90°, −1 at 180°, 0 at 270° and 1 again at 360°. It is the sine graph shifted 90° to the left.

## Amplitude and period
- **Amplitude**: the height from the centre line to a peak. For $y = a\\sin x$ it is $a$, so $y = 3\\sin x$ has a maximum of 3.
- **Period**: the length of one complete cycle. For $y = \\sin x$ it is 360°; for $y = \\sin bx$ it is $\\frac{360°}{b}$, so $y = \\sin 2x$ has period 180°.
- Adding a constant moves the graph up or down: $y = 1 + \\sin x$ ranges from 0 to 2.

## Range of values
$y = 4 - 2\\cos x$: since $-1 \\le \\cos x \\le 1$, $y$ lies between $4 - 2 = 2$ and $4 + 2 = 6$.

## Solving with graphs
The solutions of $\\sin x = \\cos x$ in 0°–360° are where the two graphs cross: **45° and 225°**.`,
          examples: `**Example 1.** $y = 2\\cos x$ has amplitude 2.

**Example 2.** The minimum value of $y = 1 + \\sin x$ is $1 - 1 = 0$.

**Example 3.** The period of $y = \\cos 3x$ is $360°\\div 3 = 120°$.

**Example 4.** Solve $\\sin x = 1$ for $0° \\le x \\le 360°$. *Answer:* the sine graph reaches its maximum of 1 only once in this range, at $x = 90°$.`,
        },
        questions: [
          ["E", "What is the maximum value of $y = \\sin x$?", "1", "0", "−1", "90", "Sine never exceeds 1."],
          ["E", "What is the period of $y = \\sin x$?", "360°", "180°", "90°", "720°", "The graph repeats every 360°."],
          ["M", "What is the maximum value of $y = 3\\sin x$?", "3", "1", "−3", "6", "Multiplying by 3 stretches the graph vertically."],
          ["M", "What is the value of $y = \\cos x$ when $x = 0°$?", "1", "0", "−1", "$\\frac{1}{2}$", "The cosine graph starts at its maximum."],
          ["M", "Between 0° and 360° inclusive, $y = \\sin x$ crosses the x-axis at", "0°, 180° and 360°", "90° and 270°", "0° and 90°", "45° and 225°", "sin x = 0 at these angles."],
          ["M", "What is the amplitude of $y = 2\\cos x$?", "2", "1", "4", "360°", "The graph reaches 2 and −2."],
          ["M", "What is the minimum value of $y = 1 + \\sin x$?", "0", "−1", "1", "2", "The least value of sin x is −1."],
          ["H", "What is the period of $y = \\sin 2x$?", "180°", "360°", "720°", "90°", "360° ÷ 2 = 180°."],
          ["H", "For $0° \\le x \\le 360°$, the graphs of $y = \\sin x$ and $y = \\cos x$ cross at", "45° and 225°", "90° and 270°", "0° and 180°", "45° and 135°", "sin x = cos x when tan x = 1."],
          ["H", "What is the range of values of $y = 4 - 2\\cos x$?", "$2 \\le y \\le 6$", "$-2 \\le y \\le 2$", "$4 \\le y \\le 6$", "$2 \\le y \\le 4$", "cos x runs from −1 to 1, so y runs from 2 to 6."],
        ],
      },
    ],
  },
];
