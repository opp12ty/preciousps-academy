import type { TermPlan } from "../types";

/** Renders a matrix in KaTeX, e.g. m([[1, 2], [3, 4]]). */
const m = (rows: (string | number)[][]) => `$\\begin{pmatrix} ${rows.map((r) => r.join(" & ")).join(" \\\\ ")} \\end{pmatrix}$`;

/** SS3 Mathematics — original Precious PS content following the national Senior Secondary structure (WAEC/NECO/JAMB year). */
export const ss3: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Matrices",
        subtopics: ["Order and types of matrices", "Addition, subtraction and scalar multiplication", "Matrix multiplication", "Transpose and identity matrix"],
        objectives: ["State the order of a matrix and identify special matrices", "Add, subtract and multiply matrices by scalars", "Multiply two matrices when the product is defined", "Find the transpose of a matrix and use the identity matrix"],
        lesson: {
          title: "Matrices and Matrix Operations",
          summary: "Organise numbers in rows and columns and carry out the basic matrix operations.",
          minutes: 45,
          notes: `## What is a matrix?
A **matrix** is a rectangular array of numbers. Its **order** is (number of rows) × (number of columns): $\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$ is a $2\\times 3$ matrix.

## Addition, subtraction and scalar multiplication
- Matrices of the **same order** are added or subtracted entry by entry.
- A **scalar** multiplies every entry: $3\\begin{pmatrix} 2 & -1 \\\\ 0 & 4 \\end{pmatrix} = \\begin{pmatrix} 6 & -3 \\\\ 0 & 12 \\end{pmatrix}$.

## Multiplication
$AB$ is defined only when the **number of columns of A equals the number of rows of B**. If A is $m\\times n$ and B is $n\\times p$, then AB is $m\\times p$.
Each entry is a **row × column** sum:
$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\begin{pmatrix} e \\\\ f \\end{pmatrix} = \\begin{pmatrix} ae + bf \\\\ ce + df \\end{pmatrix}$
In general $AB \\ne BA$.

## Special matrices
- **Identity** $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$: $AI = IA = A$.
- **Transpose** $A^T$: rows become columns.

## Equal matrices
Two matrices are equal when they have the same order and all corresponding entries are equal — use this to find unknowns.`,
          examples: `**Example 1.** $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1(2) + 2(1) \\\\ 3(2) + 4(1) \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 10 \\end{pmatrix}$.

**Example 2.** If A is $2\\times 3$ and B is $3\\times 4$, then AB is $2\\times 4$ (BA is not defined).

**Example 3.** $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$: $A^2 = \\begin{pmatrix} 5 & 5 \\\\ 5 & 10 \\end{pmatrix}$.`,
        },
        questions: [
          ["E", "What is the order of a matrix with 2 rows and 3 columns?", "2 × 3", "3 × 2", "6", "5", "Order is written rows × columns."],
          ["E", `Find ${m([[1, 2], [3, 4]])} + ${m([[5, 6], [7, 8]])}.`, m([[6, 8], [10, 12]]), m([[5, 12], [21, 32]]), m([[6, 8], [10, 11]]), m([[4, 4], [4, 4]]), "Add corresponding entries."],
          ["E", `Find 3 × ${m([[2, -1], [0, 4]])}.`, m([[6, -3], [0, 12]]), m([[5, 2], [3, 7]]), m([[6, -1], [0, 4]]), m([[6, 3], [0, 12]]), "Multiply every entry by 3."],
          ["M", `Find ${m([[1, 2], [3, 4]])}${m([[2], [1]])}.`, m([[4], [10]]), m([[4], [11]]), m([[3], [7]]), m([[2], [4]]), "Row × column: 1(2) + 2(1) = 4 and 3(2) + 4(1) = 10."],
          ["M", `Find ${m([[1, 2], [0, 1]])}${m([[3, 0], [1, 2]])}.`, m([[5, 4], [1, 2]]), m([[3, 0], [0, 2]]), m([[4, 2], [1, 3]]), m([[5, 4], [3, 2]]), "First row: 3 + 2 = 5 and 0 + 4 = 4; second row: 0 + 1 = 1 and 0 + 2 = 2."],
          ["M", "A is a 2 × 3 matrix and B is a 3 × 4 matrix. What is the order of AB?", "2 × 4", "3 × 3", "2 × 3", "AB cannot be found", "The inner numbers match (3), and the outer numbers give the order."],
          ["M", `What is the transpose of ${m([[1, 2], [3, 4]])}?`, m([[1, 3], [2, 4]]), m([[4, 3], [2, 1]]), m([[1, 2], [3, 4]]), m([[2, 1], [4, 3]]), "Rows become columns."],
          ["H", `Find $x$ if ${m([["x", 2], [3, 4]])} + ${m([[1, 0], [0, 1]])} = ${m([[5, 2], [3, 5]])}.`, "4", "5", "6", "1", "Compare the top-left entries: x + 1 = 5, so x = 4."],
          ["H", "Which matrix is the 2 × 2 identity matrix?", m([[1, 0], [0, 1]]), m([[1, 1], [1, 1]]), m([[0, 1], [1, 0]]), m([[0, 0], [0, 0]]), "AI = IA = A for every 2 × 2 matrix A."],
          ["H", `If $A$ = ${m([[2, 1], [1, 3]])}, find $A^2$.`, m([[5, 5], [5, 10]]), m([[4, 1], [1, 9]]), m([[5, 4], [4, 10]]), m([[4, 2], [2, 6]]), "Row × column: 2·2 + 1·1 = 5, 2·1 + 1·3 = 5, 1·2 + 3·1 = 5, 1·1 + 3·3 = 10."],
        ],
      },
      {
        week: 2,
        title: "Determinants and inverse matrices",
        subtopics: ["Determinant of a 2 × 2 matrix", "Singular and non-singular matrices", "Inverse of a 2 × 2 matrix", "Solving simultaneous equations with matrices"],
        objectives: ["Calculate the determinant of a 2 × 2 matrix", "Decide whether a matrix is singular", "Find the inverse of a 2 × 2 matrix", "Solve a pair of simultaneous equations using matrices"],
        lesson: {
          title: "Determinants and Inverses",
          summary: "Find determinants and inverses of 2 × 2 matrices and use them to solve equations.",
          minutes: 45,
          notes: `## Determinant
For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the determinant is
$|A| = ad - bc$
$\\begin{vmatrix} 3 & 2 \\\\ 1 & 4 \\end{vmatrix} = 12 - 2 = 10$

## Singular matrices
If $|A| = 0$, A is **singular** and has **no inverse**.

## Inverse
$A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$
Swap the leading diagonal, change the signs of the other diagonal, and divide by the determinant. Check: $AA^{-1} = I$.
$\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}^{-1} = \\frac{1}{1}\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$

## Solving equations
Write $2x + y = 5$ and $x + y = 3$ as $\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$, then multiply both sides by the inverse:
$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$

## Useful facts
- $|AB| = |A|\\times|B|$.
- The determinant of a transformation matrix is the **area scale factor**.`,
          examples: `**Example 1.** $\\begin{vmatrix} 5 & 3 \\\\ 2 & -1 \\end{vmatrix} = -5 - 6 = -11$.

**Example 2.** Find $x$ if $\\begin{pmatrix} x & 4 \\\\ 2 & 2 \\end{pmatrix}$ is singular. *Solution:* $2x - 8 = 0$, so $x = 4$.

**Example 3.** $\\begin{pmatrix} 4 & 0 \\\\ 0 & 2 \\end{pmatrix}^{-1} = \\begin{pmatrix} \\frac{1}{4} & 0 \\\\ 0 & \\frac{1}{2} \\end{pmatrix}$.`,
        },
        questions: [
          ["E", `Find the determinant of ${m([[3, 2], [1, 4]])}.`, "10", "14", "12", "5", "ad − bc = 3 × 4 − 2 × 1 = 10."],
          ["E", "A square matrix whose determinant is 0 is called", "singular", "an identity matrix", "a transpose", "invertible", "It has no inverse."],
          ["M", `Find the determinant of ${m([[5, 3], [2, -1]])}.`, "−11", "11", "−1", "1", "5 × (−1) − 3 × 2 = −5 − 6 = −11."],
          ["M", `Find the inverse of ${m([[2, 1], [5, 3]])}.`, m([[3, -1], [-5, 2]]), m([[3, 1], [5, 2]]), m([[2, -1], [-5, 3]]), m([[-3, 1], [5, -2]]), "Determinant = 6 − 5 = 1; swap the diagonal and change the signs of the other entries."],
          ["M", `Find $x$ if ${m([["x", 4], [2, 2]])} is singular.`, "4", "2", "−4", "8", "A singular matrix has determinant 0: 2x − 4 × 2 = 0, so x = 4."],
          ["M", `Find the inverse of ${m([[4, 0], [0, 2]])}.`, m([["\\frac{1}{4}", 0], [0, "\\frac{1}{2}"]]), m([[2, 0], [0, 4]]), m([[-4, 0], [0, -2]]), m([["\\frac{1}{2}", 0], [0, "\\frac{1}{4}"]]), "Determinant 8: (1/8) × [[2, 0], [0, 4]]."],
          ["M", `Find the inverse of ${m([[2, 3], [1, 2]])}.`, m([[2, -3], [-1, 2]]), m([[2, 3], [1, 2]]), m([[-2, 3], [1, -2]]), m([[2, -1], [-3, 2]]), "Determinant = 4 − 3 = 1."],
          ["H", "Use matrices to solve $2x + y = 5$ and $x + y = 3$.", "$x = 2, y = 1$", "$x = 1, y = 2$", "$x = 3, y = -1$", "$x = 2, y = 3$", "The inverse of [[2, 1], [1, 1]] is [[1, −1], [−1, 2]]; multiplying by (5, 3) gives (2, 1)."],
          ["H", "If $|A| = 3$ and $|B| = -2$, find $|AB|$.", "−6", "1", "6", "−1", "|AB| = |A| × |B|."],
          ["H", `By what factor does the transformation ${m([[3, 1], [1, 2]])} multiply areas?`, "5", "7", "6", "1", "The area scale factor is the determinant: 6 − 1 = 5."],
        ],
      },
      {
        week: 3,
        title: "Coordinate geometry of straight lines",
        subtopics: ["Gradient, distance and mid-point", "Equation of a straight line", "Parallel and perpendicular lines", "Intercepts"],
        objectives: ["Calculate the gradient, length and mid-point of a line segment", "Find the equation of a line from a point and gradient or from two points", "Use the gradient conditions for parallel and perpendicular lines", "Find the intercepts of a line with the axes"],
        lesson: {
          title: "Coordinate Geometry",
          summary: "Describe straight lines algebraically using gradients, intercepts and equations.",
          minutes: 45,
          notes: `## Key formulae for points $(x_1, y_1)$ and $(x_2, y_2)$
| Quantity | Formula |
|---|---|
| Gradient | $m = \\frac{y_2 - y_1}{x_2 - x_1}$ |
| Distance | $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ |
| Mid-point | $\\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$ |

## Equation of a line
- Gradient–intercept form: $y = mx + c$.
- Through $(x_1, y_1)$ with gradient $m$: $y - y_1 = m(x - x_1)$.
Rearrange other forms to read the gradient: $2y = 6x - 4$ gives $y = 3x - 2$, so $m = 3$.

## Parallel and perpendicular lines
- Parallel lines have **equal gradients**: $m_1 = m_2$.
- Perpendicular lines have gradients whose product is **−1**: $m_1 m_2 = -1$. A line perpendicular to $y = 2x + 5$ has gradient $-\\frac{1}{2}$.

## Intercepts
- x-intercept: put $y = 0$. For $3x + 4y = 12$: $(4, 0)$.
- y-intercept: put $x = 0$: $(0, 3)$.

## Points on a line
A point lies on a line if its coordinates satisfy the equation.`,
          examples: `**Example 1.** The line through $(1, 4)$ and $(3, 8)$: $m = 2$, so $y - 4 = 2(x - 1)$, i.e. $y = 2x + 2$.

**Example 2.** Distance between $(1, 1)$ and $(7, 9)$: $\\sqrt{36 + 64} = 10$.

**Example 3.** If $(k, 5)$ lies on $3x - y = 7$, then $3k - 5 = 7$ and $k = 4$.`,
        },
        questions: [
          ["E", "Find the gradient of the line through $(2, 3)$ and $(6, 11)$.", "2", "$\\frac{1}{2}$", "8", "4", "(11 − 3) ÷ (6 − 2) = 8 ÷ 4 = 2."],
          ["E", "Find the mid-point of $(-2, 5)$ and $(4, 1)$.", "$(1, 3)$", "$(3, 2)$", "$(2, 6)$", "$(-1, 3)$", "((−2 + 4)/2, (5 + 1)/2) = (1, 3)."],
          ["M", "Find the distance between $(1, 1)$ and $(7, 9)$.", "10", "14", "100", "8", "√(6² + 8²) = 10."],
          ["M", "Find the equation of the line with gradient 3 passing through $(1, 2)$.", "$y = 3x - 1$", "$y = 3x + 2$", "$y = 3x + 1$", "$y = x + 3$", "y − 2 = 3(x − 1)."],
          ["M", "What is the gradient of the line $2y = 6x - 4$?", "3", "6", "−2", "2", "Divide by 2 to get y = 3x − 2, which has gradient 3."],
          ["M", "What is the gradient of any line parallel to $y = 2x + 5$?", "2", "−2", "$-\\frac{1}{2}$", "5", "Parallel lines have equal gradients."],
          ["M", "What is the gradient of a line perpendicular to $y = 2x + 5$?", "$-\\frac{1}{2}$", "2", "$\\frac{1}{2}$", "−2", "m₁m₂ = −1, so m₂ = −1/2."],
          ["H", "Find the equation of the line through $(1, 4)$ and $(3, 8)$.", "$y = 2x + 2$", "$y = 2x + 4$", "$y = 4x$", "$y = x + 3$", "m = 2 and y − 4 = 2(x − 1)."],
          ["H", "The point $(k, 5)$ lies on the line $3x - y = 7$. Find $k$.", "4", "2", "−4", "6", "3k − 5 = 7 gives k = 4."],
          ["H", "Where does the line $3x + 4y = 12$ cut the x-axis?", "$(4, 0)$", "$(0, 3)$", "$(3, 0)$", "$(12, 0)$", "Put y = 0: 3x = 12."],
        ],
      },
      {
        week: 4,
        title: "Differentiation",
        subtopics: ["Gradient of a curve and the derived function", "The power rule", "Differentiating sums of terms", "Negative and fractional powers"],
        objectives: ["Explain dy/dx as the gradient of a curve at a point", "Differentiate powers of x using the power rule", "Differentiate polynomials term by term", "Differentiate expressions with negative and fractional indices"],
        lesson: {
          title: "Introduction to Differentiation",
          summary: "Find the gradient of a curve at any point using the rules of differentiation.",
          minutes: 45,
          notes: `## Gradient of a curve
A straight line has one gradient, but the gradient of a curve changes from point to point. The **derivative** $\\frac{dy}{dx}$ gives the gradient of the curve (the gradient of the tangent) at any point.

## The power rule
If $y = ax^n$, then $\\frac{dy}{dx} = nax^{n-1}$ — multiply by the power, then reduce the power by 1.
| $y$ | $\\frac{dy}{dx}$ |
|---|---|
| $x^3$ | $3x^2$ |
| $7x$ | $7$ |
| $5$ (a constant) | $0$ |
| $x^{-1} = \\frac{1}{x}$ | $-x^{-2} = -\\frac{1}{x^2}$ |
| $x^{\\frac{1}{2}} = \\sqrt{x}$ | $\\frac{1}{2}x^{-\\frac{1}{2}} = \\frac{1}{2\\sqrt{x}}$ |

## Sums
Differentiate term by term: $\\frac{d}{dx}(4x^3 - 2x^2 + x) = 12x^2 - 4x + 1$.

## Products and brackets
Expand first: $y = (x + 1)^2 = x^2 + 2x + 1$, so $\\frac{dy}{dx} = 2x + 2$.

## Gradient at a point
Substitute the x-value into $\\frac{dy}{dx}$: for $y = x^2 - 3x$, the gradient at $x = 2$ is $2(2) - 3 = 1$.`,
          examples: `**Example 1.** $\\frac{d}{dx}(3x^{-2}) = -6x^{-3}$.

**Example 2.** $y = x^3 - 6x^2 + 9x$: $\\frac{dy}{dx} = 3x^2 - 12x + 9$; at $x = 1$ this is 0.

**Example 3.** $\\frac{d}{dx}\\left(\\frac{2}{x}\\right) = \\frac{d}{dx}(2x^{-1}) = -2x^{-2} = -\\frac{2}{x^2}$.`,
        },
        questions: [
          ["E", "Differentiate $x^3$ with respect to $x$.", "$3x^2$", "$x^2$", "$3x^3$", "$\\frac{x^4}{4}$", "Multiply by the power and reduce it by 1."],
          ["E", "Differentiate the constant 5 with respect to $x$.", "0", "5", "$5x$", "1", "A constant has zero gradient."],
          ["E", "Differentiate $7x$ with respect to $x$.", "7", "$7x$", "$x$", "0", "The line y = 7x has gradient 7."],
          ["M", "Differentiate $4x^3 - 2x^2 + x$.", "$12x^2 - 4x + 1$", "$12x^2 - 4x$", "$4x^2 - 2x + 1$", "$x^4 - \\frac{2}{3}x^3 + \\frac{1}{2}x^2$", "Differentiate term by term."],
          ["M", "Find $\\frac{dy}{dx}$ if $y = (x + 1)^2$.", "$2x + 2$", "$x + 1$", "$2x + 1$", "$x^2 + 2x$", "Expand: y = x² + 2x + 1."],
          ["M", "Find the gradient of the curve $y = x^2 - 3x$ at $x = 2$.", "1", "−2", "4", "7", "dy/dx = 2x − 3 = 1 at x = 2."],
          ["M", "Differentiate $\\frac{1}{x}$.", "$-\\frac{1}{x^2}$", "$\\frac{1}{x^2}$", "$-\\frac{1}{x}$", "$\\ln x$", "1/x = x⁻¹, whose derivative is −x⁻²."],
          ["H", "If $y = x^3 - 6x^2 + 9x$, find $\\frac{dy}{dx}$ at $x = 1$.", "0", "4", "−9", "12", "3x² − 12x + 9 = 3 − 12 + 9 = 0."],
          ["H", "Differentiate $\\sqrt{x}$.", "$\\frac{1}{2\\sqrt{x}}$", "$2\\sqrt{x}$", "$\\frac{\\sqrt{x}}{2}$", "$\\frac{1}{\\sqrt{x}}$", "√x = x^(1/2); the derivative is ½x^(−1/2)."],
          ["H", "Differentiate $3x^{-2}$.", "$-6x^{-3}$", "$-6x^{-1}$", "$6x^{-3}$", "$-3x^{-3}$", "3 × (−2) = −6 and the power becomes −3."],
        ],
      },
      {
        week: 5,
        title: "Applications of differentiation",
        subtopics: ["Equations of tangents", "Turning points: maxima and minima", "Nature of turning points", "Rates of change and optimisation"],
        objectives: ["Find the equation of a tangent to a curve", "Locate turning points by solving dy/dx = 0", "Determine whether a turning point is a maximum or a minimum", "Solve simple velocity and optimisation problems"],
        lesson: {
          title: "Using Derivatives",
          summary: "Apply differentiation to tangents, maximum and minimum values, and rates of change.",
          minutes: 45,
          notes: `## Tangents
The gradient of the tangent at $x = a$ is the value of $\\frac{dy}{dx}$ at $a$. Then use $y - y_1 = m(x - x_1)$.
Tangent to $y = x^2$ at $(2, 4)$: $m = 2x = 4$, so $y - 4 = 4(x - 2)$, i.e. $y = 4x - 4$.

## Turning points
At a turning point the tangent is horizontal, so $\\frac{dy}{dx} = 0$. Solve this to find $x$, then substitute into $y$.
$y = x^2 - 4x + 1$: $2x - 4 = 0$ gives $x = 2$, $y = -3$; the turning point is $(2, -3)$.

## Maximum or minimum?
Find the second derivative $\\frac{d^2y}{dx^2}$:
- $\\frac{d^2y}{dx^2} > 0$ → **minimum** point;
- $\\frac{d^2y}{dx^2} < 0$ → **maximum** point.

## Rates of change
If $s$ is displacement and $t$ time, **velocity** $v = \\frac{ds}{dt}$ and **acceleration** $a = \\frac{dv}{dt}$.
$s = 5t^2$ gives $v = 10t$; at $t = 3$, $v = 30$ m/s.

## Optimisation
Write the quantity to be maximised or minimised in terms of **one** variable, differentiate, set to zero and solve. A rectangle with perimeter 20 m has greatest area when it is a square: $5\\times 5 = 25$ m².`,
          examples: `**Example 1.** $y = -x^2 + 6x$: $-2x + 6 = 0$, $x = 3$; maximum value $y = 9$.

**Example 2.** $y = x^3 - 3x$: $3x^2 - 3 = 0$ gives $x = \\pm 1$. At $x = 1$, $y = -2$ and $\\frac{d^2y}{dx^2} = 6 > 0$ (minimum); at $x = -1$, $y = 2$ (maximum).

**Example 3.** $V = x^3$: $\\frac{dV}{dx} = 3x^2 = 12$ when $x = 2$.`,
        },
        questions: [
          ["E", "At a turning point of a curve, $\\frac{dy}{dx}$ equals", "0", "1", "−1", "infinity", "The tangent is horizontal there."],
          ["M", "Find the turning point of $y = x^2 - 4x + 1$.", "$(2, -3)$", "$(-2, 13)$", "$(2, 1)$", "$(4, 1)$", "2x − 4 = 0 gives x = 2 and y = 4 − 8 + 1 = −3."],
          ["M", "Find the equation of the tangent to $y = x^2$ at the point $(2, 4)$.", "$y = 4x - 4$", "$y = 2x$", "$y = 4x + 4$", "$y = x + 2$", "Gradient 2x = 4; y − 4 = 4(x − 2)."],
          ["M", "If $\\frac{d^2y}{dx^2} > 0$ at a turning point, the point is", "a minimum", "a maximum", "not a turning point", "the origin", "The gradient is increasing through zero."],
          ["M", "Find the maximum value of $y = -x^2 + 6x$.", "9", "6", "3", "18", "−2x + 6 = 0 gives x = 3; y = −9 + 18 = 9."],
          ["M", "A body moves so that $s = 5t^2$ metres after $t$ seconds. Find its velocity when $t = 3$.", "30 m/s", "45 m/s", "15 m/s", "10 m/s", "v = ds/dt = 10t = 30 m/s."],
          ["H", "At which values of $x$ does $y = x^3 - 3x$ have turning points?", "$x = \\pm 1$", "$x = 0$", "$x = \\pm 3$", "$x = 3$", "3x² − 3 = 0 gives x² = 1."],
          ["H", "What is the minimum value of $y = x^3 - 3x$ at its turning points?", "−2", "2", "0", "−3", "At x = 1, y = 1 − 3 = −2 and d²y/dx² = 6 > 0."],
          ["H", "A rectangle has a perimeter of 20 m. What is its greatest possible area?", "25 m²", "20 m²", "24 m²", "100 m²", "A = x(10 − x); dA/dx = 10 − 2x = 0 gives x = 5, a 5 m square."],
          ["H", "If $V = x^3$, find $\\frac{dV}{dx}$ when $x = 2$.", "12", "8", "6", "3", "dV/dx = 3x² = 12."],
        ],
      },
      {
        week: 6,
        title: "Integration",
        subtopics: ["Integration as the reverse of differentiation", "Indefinite integrals and the constant", "Definite integrals", "Area under a curve"],
        objectives: ["Explain integration as the reverse of differentiation", "Integrate polynomials, including the constant of integration", "Evaluate definite integrals", "Find the area under a curve and a curve's equation from its gradient"],
        lesson: {
          title: "Introduction to Integration",
          summary: "Reverse differentiation to find functions, evaluate definite integrals and find areas.",
          minutes: 45,
          notes: `## Reverse of differentiation
If $\\frac{d}{dx}(x^2) = 2x$, then $\\int 2x\\,dx = x^2 + c$. The **constant of integration** $c$ is needed because constants disappear when you differentiate.

## The power rule for integration
$\\int x^n\\,dx = \\frac{x^{n+1}}{n + 1} + c$ (for $n\\ne -1$) — **increase** the power by 1, then **divide** by the new power.
| Integrand | Integral |
|---|---|
| $5$ | $5x + c$ |
| $3x^2 + 4x$ | $x^3 + 2x^2 + c$ |
| $x^{-2}$ | $-x^{-1} + c$ |

## Definite integrals
$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$ (no constant needed).
$\\int_1^3 2x\\,dx = [x^2]_1^3 = 9 - 1 = 8$

## Area under a curve
For a curve above the x-axis, the area between the curve, the x-axis and the lines $x = a$ and $x = b$ is $\\int_a^b y\\,dx$.
Area under $y = x^2$ from 0 to 3: $\\left[\\frac{x^3}{3}\\right]_0^3 = 9$.

## Finding a curve from its gradient
Integrate, then use a known point to find $c$: $\\frac{dy}{dx} = 2x$ and $y = 5$ when $x = 1$ give $y = x^2 + 4$.`,
          examples: `**Example 1.** $\\int_0^2 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^2 = 2$.

**Example 2.** $\\int_0^1 (x^2 + 1)\\,dx = \\left[\\frac{x^3}{3} + x\\right]_0^1 = \\frac{4}{3}$.

**Example 3.** $\\int (6x^2 - 2)\\,dx = 2x^3 - 2x + c$.`,
        },
        questions: [
          ["E", "Integration is the reverse of", "differentiation", "multiplication", "factorisation", "substitution", "Integrating undoes differentiating."],
          ["E", "Find $\\int 2x\\,dx$.", "$x^2 + c$", "$2 + c$", "$2x^2 + c$", "$x + c$", "Differentiating x² gives 2x."],
          ["E", "Find $\\int 5\\,dx$.", "$5x + c$", "$c$", "$\\frac{5}{x} + c$", "$5x^2 + c$", "Differentiating 5x gives 5."],
          ["M", "Find $\\int (3x^2 + 4x)\\,dx$.", "$x^3 + 2x^2 + c$", "$6x + 4 + c$", "$3x^3 + 4x^2 + c$", "$x^3 + 4x^2 + c$", "Raise each power by 1 and divide by the new power."],
          ["M", "Evaluate $\\int_0^2 x\\,dx$.", "2", "4", "1", "0", "[x²/2] from 0 to 2 = 2 − 0."],
          ["M", "Evaluate $\\int_1^3 2x\\,dx$.", "8", "9", "4", "6", "[x²] from 1 to 3 = 9 − 1."],
          ["M", "Find $\\int x^{-2}\\,dx$.", "$-x^{-1} + c$", "$x^{-1} + c$", "$-2x^{-3} + c$", "$\\frac{x^{-3}}{-3} + c$", "x^(−2+1) ÷ (−1) = −x⁻¹."],
          ["H", "Find the area under the curve $y = x^2$ from $x = 0$ to $x = 3$.", "9 square units", "27 square units", "3 square units", "6 square units", "[x³/3] from 0 to 3 = 27/3 = 9."],
          ["H", "Evaluate $\\int_0^1 (x^2 + 1)\\,dx$.", "$\\frac{4}{3}$", "1", "2", "$\\frac{1}{3}$", "[x³/3 + x] from 0 to 1 = 1/3 + 1."],
          ["H", "The gradient of a curve is $\\frac{dy}{dx} = 2x$ and the curve passes through $(1, 5)$. Find its equation.", "$y = x^2 + 4$", "$y = x^2 + 5$", "$y = 2x + 3$", "$y = x^2 - 4$", "y = x² + c and 5 = 1 + c gives c = 4."],
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
        title: "Longitude and latitude",
        subtopics: ["The earth as a sphere", "Latitude and longitude", "Distances along great circles", "Distances along parallels of latitude"],
        objectives: ["Describe the positions of places using latitude and longitude", "Find differences in latitude and longitude", "Calculate distances along great circles", "Calculate distances along parallels of latitude"],
        lesson: {
          title: "The Earth as a Sphere",
          summary: "Locate places by latitude and longitude and calculate distances on the earth's surface.",
          minutes: 45,
          notes: `## Lines on the globe
- **Lines of longitude (meridians)** run from the North Pole to the South Pole. They are **great circles** (their centre is the centre of the earth). Longitude is measured east or west of the **Greenwich meridian** (0°).
- **Lines of latitude (parallels)** run east–west. The **equator** (0°) is a great circle; other parallels are **small circles**. Latitude is measured north or south of the equator.
Nigeria lies north of the equator and east of Greenwich.

## Differences
- Same side (both N, or both E): **subtract**. 10°N and 40°N differ by 30°.
- Opposite sides: **add**. 20°N and 35°S differ by 55°; 30°W and 45°E differ by 75°.

## Distances on great circles (meridians and the equator)
$d = \\frac{\\theta}{360}\\times 2\\pi R$
where $\\theta$ is the angle at the centre and $R$ is the radius of the earth (take $R = 6400$ km unless told otherwise).

## Distances along a parallel of latitude $\\alpha$
The radius of the parallel is $r = R\\cos\\alpha$, so
$d = \\frac{\\theta}{360}\\times 2\\pi R\\cos\\alpha$
where $\\theta$ is the difference in longitude.

## Time
The earth turns 360° in 24 hours, so **15° of longitude = 1 hour** of time difference.`,
          examples: `**Example 1.** Distance along the equator between 20°E and 50°E ($\\pi = \\frac{22}{7}$): $\\frac{30}{360}\\times 2\\times\\frac{22}{7}\\times 6400\\approx 3352.4$ km.

**Example 2.** The radius of the parallel 60°N is $6400\\cos 60° = 3200$ km.

**Example 3.** Distance along 60°N between 0° and 90°E: $\\frac{90}{360}\\times 2\\times\\frac{22}{7}\\times 3200\\approx 5028.6$ km.`,
        },
        questions: [
          ["E", "What is the latitude of the equator?", "0°", "90°", "180°", "360°", "Latitude is measured from the equator."],
          ["E", "Lines of longitude run", "from the North Pole to the South Pole", "parallel to the equator", "only through Africa", "around the equator", "They are meridians joining the poles."],
          ["E", "In which hemispheres does Nigeria lie?", "Northern and eastern", "Southern and western", "Northern and western", "Southern and eastern", "Nigeria is north of the equator and east of Greenwich."],
          ["M", "What is the difference in longitude between 30°W and 45°E?", "75°", "15°", "45°", "105°", "Opposite sides of Greenwich: add, 30° + 45° = 75°."],
          ["M", "What is the difference in latitude between 20°N and 35°S?", "55°", "15°", "35°", "75°", "Opposite sides of the equator: add, 20° + 35° = 55°."],
          ["M", "The radius of the earth is 6,400 km. What is the radius of the parallel of latitude 60°N?", "3,200 km", "5,542 km", "6,400 km", "1,600 km", "r = R cos 60° = 6,400 × 0.5."],
          ["M", "Find the distance along the equator between longitudes 20°E and 50°E. (Take $R = 6400$ km and $\\pi = \\frac{22}{7}$.)", "3,352.4 km", "1,676.2 km", "6,704.8 km", "30 km", "30/360 × 2 × 22/7 × 6,400 ≈ 3,352.4 km."],
          ["H", "Find the distance along a meridian between latitudes 10°N and 40°N. (Take $R = 6400$ km and $\\pi = \\frac{22}{7}$.)", "3,352.4 km", "1,676.2 km", "6,400 km", "30 km", "The angle is 30°, and a meridian is a great circle."],
          ["H", "Find the distance along the parallel 60°N between longitudes 0° and 90°E. (Take $R = 6400$ km and $\\pi = \\frac{22}{7}$.)", "5,028.6 km", "10,057.1 km", "2,514.3 km", "3,200 km", "r = 3,200 km; 90/360 × 2 × 22/7 × 3,200 ≈ 5,028.6 km."],
          ["H", "Two towns are 15° of longitude apart. What is the difference in their local times?", "1 hour", "15 hours", "4 minutes", "24 hours", "360° corresponds to 24 hours, so 15° corresponds to 1 hour."],
        ],
      },
      {
        week: 2,
        title: "Permutations and combinations",
        subtopics: ["Factorial notation", "Arrangements (permutations)", "Selections (combinations)", "Arrangements with repeated items and restrictions"],
        objectives: ["Evaluate factorials", "Count arrangements using nPr", "Count selections using nCr", "Solve counting problems with repetitions and restrictions"],
        lesson: {
          title: "Counting: Permutations and Combinations",
          summary: "Count arrangements and selections systematically without listing them.",
          minutes: 45,
          notes: `## Factorials
$n! = n\\times(n - 1)\\times\\ldots\\times 2\\times 1$, so $5! = 120$. By definition $0! = 1$.

## The multiplication principle
If one choice can be made in $m$ ways and another in $n$ ways, both can be made in $m\\times n$ ways.
Four-digit codes from the digits 1–6 with no repetition: $6\\times 5\\times 4\\times 3 = 360$.

## Permutations — order matters
The number of ways of **arranging** $r$ objects chosen from $n$:
$^nP_r = \\frac{n!}{(n - r)!}$
$^5P_2 = 5\\times 4 = 20$. The letters of CAT can be arranged in $3! = 6$ ways.

## Combinations — order does not matter
The number of ways of **selecting** $r$ objects from $n$:
$^nC_r = \\frac{n!}{r!(n - r)!}$
A committee of 3 from 7 people: $^7C_3 = 35$. Note $^nC_0 = 1$ and $^nC_r = {}^nC_{n-r}$.

## Repeated letters
Divide by the factorial of each repeat: BOOK has $\\frac{4!}{2!} = 12$ arrangements.

## Restrictions
Deal with the restriction first: arrangements of MATHS beginning with M: fix M, arrange the other 4 letters: $4! = 24$.`,
          examples: `**Example 1.** $^6C_2 = \\frac{6\\times 5}{2\\times 1} = 15$.

**Example 2.** Choose 2 boys from 5 and 2 girls from 4: $^5C_2\\times{}^4C_2 = 10\\times 6 = 60$.

**Example 3.** If $^nC_2 = 28$, then $\\frac{n(n - 1)}{2} = 28$, so $n = 8$.`,
        },
        questions: [
          ["E", "Evaluate $5!$.", "120", "25", "60", "5", "5 × 4 × 3 × 2 × 1 = 120."],
          ["E", "In how many ways can the letters of the word CAT be arranged?", "6", "3", "9", "27", "Three different letters can be arranged in 3! = 3 × 2 × 1 = 6 ways."],
          ["E", "What is the value of $^nC_0$?", "1", "0", "n", "n!", "There is exactly one way to choose nothing."],
          ["M", "Evaluate $^5P_2$.", "20", "10", "25", "60", "⁵P₂ = 5 × 4 = 20 (5 choices for the first place, 4 for the second)."],
          ["M", "Evaluate $^6C_2$.", "15", "30", "12", "36", "6 × 5 ÷ 2 = 15."],
          ["M", "In how many ways can a committee of 3 be chosen from 7 people?", "35", "210", "21", "343", "⁷C₃ = 7 × 6 × 5 ÷ 6 = 35."],
          ["M", "In how many ways can the letters of the word BOOK be arranged?", "12", "24", "6", "4", "4! ÷ 2! because of the two Os."],
          ["M", "How many four-digit codes can be made from the digits 1 to 6 if no digit is repeated?", "360", "1,296", "15", "24", "6 × 5 × 4 × 3 = 360."],
          ["H", "How many arrangements of the letters of MATHS begin with M?", "24", "120", "20", "5", "Fix M and arrange the other four letters: 4! = 24."],
          ["H", "Find $n$ if $^nC_2 = 28$.", "8", "7", "14", "28", "n(n − 1) ÷ 2 = 28 gives n(n − 1) = 56 = 8 × 7."],
        ],
      },
      {
        week: 3,
        title: "Loci",
        subtopics: ["Meaning of a locus", "Standard loci", "Intersecting loci", "Regions defined by loci"],
        objectives: ["Describe the locus of points satisfying a condition", "Construct the four standard loci", "Find points that satisfy two conditions", "Describe regions using loci"],
        lesson: {
          title: "Loci",
          summary: "Describe and construct the path of points that obey a rule.",
          minutes: 45,
          notes: `## What is a locus?
A **locus** (plural *loci*) is the set of all points that satisfy a given condition — often the path traced by a moving point.

## The standard loci
| Condition | Locus |
|---|---|
| A fixed distance $r$ from a point O | a **circle**, centre O, radius $r$ |
| Equidistant from two points A and B | the **perpendicular bisector** of AB |
| A fixed distance from a straight line | **two parallel lines**, one on each side |
| Equidistant from two intersecting lines | the **bisectors of the angles** between them |

## Other useful loci
- Points P for which $\\angle APB = 90°$ (A and B fixed): a **circle with diameter AB** (angle in a semicircle).
- The centre of a wheel rolling on a flat road: a straight line parallel to the road.

## Intersecting loci
Points that satisfy **two** conditions lie where the loci meet. Two circles of radius 3 cm whose centres are 4 cm apart meet at **2** points; if the centres were 8 cm apart they would not meet at all ($3 + 3 < 8$).

## Regions
"Less than 5 cm from A" is the region **inside** the circle of radius 5 cm (boundary drawn broken because it is not included). A goat tied to a post with a 5 m rope can graze the region inside a circle of radius 5 m.`,
          examples: `**Example 1.** The locus of points 3 cm from a straight line is two lines parallel to it, 3 cm on either side.

**Example 2.** The locus of points equidistant from A and B is the perpendicular bisector of AB.

**Example 3.** AB = 4 cm. How many points are 3 cm from both A and B? *Answer:* 2.`,
        },
        questions: [
          ["E", "The locus of points at a fixed distance from a fixed point is", "a circle", "a straight line", "a pair of parallel lines", "an angle bisector", "Every point is the same distance (the radius) from the centre."],
          ["E", "The locus of points equidistant from two fixed points A and B is", "the perpendicular bisector of AB", "a circle with centre A", "the line AB", "a pair of parallel lines", "Every point on it is the same distance from A and B."],
          ["M", "The locus of points equidistant from two intersecting straight lines is", "the pair of bisectors of the angles between them", "a circle", "a line parallel to both", "the perpendicular bisector of the lines", "Points on an angle bisector are equidistant from its arms."],
          ["M", "The locus of points 3 cm from a straight line is", "two lines parallel to it, 3 cm on each side", "a circle of radius 3 cm", "one parallel line 3 cm away", "a perpendicular line", "Points on both sides are 3 cm away."],
          ["M", "A goat is tied to a post with a rope 5 m long. The region it can graze is", "inside a circle of radius 5 m", "a square of side 5 m", "a line 5 m long", "outside a circle of radius 5 m", "It can reach every point within 5 m of the post."],
          ["M", "As a wheel rolls along a flat road, the locus of its centre is", "a straight line parallel to the road", "a circle", "a curve touching the road", "a zigzag", "The centre stays at the same height above the road."],
          ["H", "A and B are fixed points. The locus of points P such that $\\angle APB = 90°$ is", "a circle with AB as diameter", "the perpendicular bisector of AB", "the line AB", "a circle with centre A", "The angle in a semicircle is 90°."],
          ["H", "The region of points less than 5 cm from a point A is", "the inside of a circle of radius 5 cm, with its boundary not included", "the circle of radius 5 cm only", "the outside of a circle of radius 5 cm", "a square of side 10 cm", "The boundary is excluded because the condition is strict."],
          ["H", "Points A and B are 4 cm apart. How many points are exactly 3 cm from both A and B?", "2", "0", "1", "4", "Two circles of radius 3 cm with centres 4 cm apart meet at two points."],
          ["H", "Points A and B are 8 cm apart. How many points are exactly 3 cm from both A and B?", "0", "1", "2", "4", "3 + 3 < 8, so the circles do not meet."],
        ],
      },
      {
        week: 4,
        title: "Taxes, shares and dividends",
        subtopics: ["Income tax and taxable income", "Tax bands", "Shares and dividends", "Yield and profit on shares"],
        objectives: ["Calculate taxable income after allowances", "Calculate tax using one or more tax bands", "Calculate the cost of shares and the dividend received", "Calculate the percentage yield and profit on shares"],
        lesson: {
          title: "Taxes, Shares and Dividends",
          summary: "Apply percentages to income tax and to investments in shares.",
          minutes: 40,
          notes: `## Income tax
- **Gross income** is the total income.
- **Allowances** (reliefs) are amounts on which no tax is paid.
- **Taxable income** = gross income − allowances.
- Tax = rate × taxable income.
Gross ₦1,200,000 with allowances ₦400,000 and tax at 15%: tax $= 0.15\\times 800{,}000 = ₦120{,}000$.

## Tax bands
Many tax systems charge **different rates on different portions** of income. Work band by band and add.
Example bands (for practice only): 7% on the first ₦300,000 and 11% on the next ₦300,000. On ₦600,000: $21{,}000 + 33{,}000 = ₦54{,}000$.
*Actual Nigerian tax rules, bands and reliefs change from time to time — always use the rates given in the question.*

## Shares
A company raises money by selling **shares**. Each share has a **nominal (face) value**, but it is bought at the **market price**.
Cost of shares = number of shares × market price.

## Dividends
A **dividend** is the part of a company's profit paid to shareholders. It is usually a percentage of the **nominal** value: a 10% dividend on 1,000 ₦1 shares is ₦100.

## Yield
$\\text{Yield} = \\frac{\\text{dividend received}}{\\text{amount invested}}\\times 100\\%$
2,000 ₦1 shares bought at ₦1.50 with a 12% dividend: dividend ₦240 on ₦3,000 invested gives a yield of **8%**.`,
          examples: `**Example 1.** Tax at 10% on a taxable income of ₦800,000 is ₦80,000.

**Example 2.** 500 shares at ₦4 each cost ₦2,000.

**Example 3.** 400 shares bought at ₦5 are sold at ₦6.25. *Profit:* $400\\times 1.25 = ₦500$.`,
        },
        questions: [
          ["E", "Income tax is calculated on", "taxable income", "gross income plus allowances", "the allowances only", "the number of dependants", "Taxable income = gross income − allowances."],
          ["E", "The part of a company's profit paid to its shareholders is called a", "dividend", "tax", "commission", "discount", "Shareholders receive dividends."],
          ["M", "A worker's taxable income is ₦800,000 and the tax rate is 10%. How much tax is paid?", "₦80,000", "₦8,000", "₦720,000", "₦800,000", "0.1 × 800,000 = ₦80,000."],
          ["M", "A worker earns ₦1,200,000 a year, has allowances of ₦400,000 and pays 15% tax on the rest. How much tax does she pay?", "₦120,000", "₦180,000", "₦60,000", "₦1,080,000", "Taxable income ₦800,000 × 0.15 = ₦120,000."],
          ["M", "A man buys 500 shares at ₦4 each. How much does he pay?", "₦2,000", "₦125", "₦504", "₦20,000", "500 × 4 = ₦2,000."],
          ["M", "A company pays a 10% dividend on 1,000 shares of nominal value ₦1. What is the total dividend?", "₦100", "₦10", "₦1,000", "₦1,100", "10% of ₦1,000 = ₦100."],
          ["M", "A property is valued at ₦2,000,000 and a rate of 2% is charged on its value. How much is paid?", "₦40,000", "₦4,000", "₦400,000", "₦20,000", "0.02 × 2,000,000 = ₦40,000."],
          ["H", "2,000 shares of nominal value ₦1 are bought at ₦1.50 each and pay a 12% dividend. What is the percentage yield on the money invested?", "8%", "12%", "18%", "6%", "Dividend = ₦240 on ₦3,000 invested: 240 ÷ 3,000 × 100% = 8%."],
          ["H", "Using example tax bands of 7% on the first ₦300,000 and 11% on the next ₦300,000, how much tax is due on ₦600,000?", "₦54,000", "₦42,000", "₦66,000", "₦108,000", "0.07 × 300,000 + 0.11 × 300,000 = 21,000 + 33,000."],
          ["H", "An investor buys 400 shares at ₦5 each and later sells them at ₦6.25 each. What is the profit?", "₦500", "₦2,500", "₦2,000", "₦250", "400 × (6.25 − 5) = ₦500."],
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
        title: "Revision: number and numeration",
        subtopics: ["Number bases, standard form and surds", "Indices and logarithms", "Fractions, percentages and commercial arithmetic", "Sequences and modular arithmetic"],
        objectives: ["Recall and apply the rules of number bases, indices, logarithms and surds", "Solve problems on percentages, interest and commercial arithmetic", "Solve problems on sequences and modular arithmetic", "Work accurately under timed examination conditions"],
        lesson: {
          title: "Revision: Number and Numeration",
          summary: "A compact review of key number facts and methods for WAEC, NECO and UTME.",
          minutes: 60,
          notes: `## Checklist
| Topic | Key fact |
|---|---|
| Bases | expand to convert to base ten; repeated division to convert from base ten |
| Standard form | $A\\times 10^n$ with $1\\le A < 10$ |
| Indices | $a^ma^n = a^{m+n}$, $a^{-n} = \\frac{1}{a^n}$, $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$ |
| Logarithms | $\\log_a(MN) = \\log_a M + \\log_a N$; $\\log_a M^k = k\\log_a M$ |
| Surds | $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$; rationalise with the conjugate |
| Compound interest | $A = P\\left(1 + \\frac{R}{100}\\right)^n$ |
| AP | $T_n = a + (n - 1)d$, $S_n = \\frac{n}{2}[2a + (n - 1)d]$ |
| GP | $T_n = ar^{n-1}$, $S_\\infty = \\frac{a}{1 - r}$ |

## Examination technique
- Read every question twice; underline what is asked.
- Show working for theory papers; for objective papers, estimate first and eliminate impossible options.
- Watch units, signs and the form of the answer (standard form? surd form? nearest whole number?).
- Manage time: about one minute per objective question.

## Common mistakes to avoid
- Treating $\\sqrt{a + b}$ as $\\sqrt{a} + \\sqrt{b}$.
- Forgetting to subtract the principal when asked for compound **interest**.
- Mixing up recurring-decimal denominators (9 for one repeating digit, 99 for two).`,
          examples: `**Example 1.** $\\frac{3}{2 - \\sqrt{3}} = \\frac{3(2 + \\sqrt{3})}{4 - 3} = 6 + 3\\sqrt{3}$.

**Example 2.** $\\log_3 27 + \\log_2 16 = 3 + 4 = 7$.

**Example 3.** The sum of the first 20 terms of the AP with $a = 3$, $d = 4$ is $10(6 + 76) = 820$.`,
        },
        questions: [
          ["E", "Convert $1101_2$ to base ten.", "13", "11", "1,101", "14", "8 + 4 + 0 + 1 = 13."],
          ["E", "Express 0.000 345 in standard form.", "$3.45\\times 10^{-4}$", "$3.45\\times 10^{-3}$", "$34.5\\times 10^{-5}$", "$3.45\\times 10^{4}$", "Move the point 4 places to the right."],
          ["M", "Simplify $(2\\sqrt{3})(3\\sqrt{2})$.", "$6\\sqrt{6}$", "$5\\sqrt{5}$", "$6\\sqrt{5}$", "36", "2 × 3 = 6 and √3 × √2 = √6."],
          ["M", "Evaluate $\\log_3 27 + \\log_2 16$.", "7", "12", "43", "5", "log₃ 27 = 3 and log₂ 16 = 4."],
          ["M", "Evaluate $2\\frac{1}{2}\\div 1\\frac{1}{4}$.", "2", "$3\\frac{1}{8}$", "$\\frac{1}{2}$", "$1\\frac{1}{4}$", "Change to improper fractions and multiply by the reciprocal: 5/2 × 4/5 = 2."],
          ["M", "Find the compound interest on ₦60,000 for 2 years at 5% per annum.", "₦6,150", "₦6,000", "₦66,150", "₦3,000", "60,000 × 1.05² = ₦66,150; interest = ₦6,150."],
          ["M", "Express $0.3636\\ldots$ as a fraction in its lowest terms.", "$\\frac{4}{11}$", "$\\frac{36}{100}$", "$\\frac{9}{25}$", "$\\frac{2}{5}$", "Two repeating digits: 36/99 = 4/11."],
          ["H", "What is the smallest whole number $x$ between 10 and 20 such that $x \\equiv 5 \\pmod 7$?", "12", "5", "19", "14", "12 = 7 + 5, and 12 is the first such number from 10."],
          ["H", "Rationalise $\\frac{3}{2 - \\sqrt{3}}$.", "$6 + 3\\sqrt{3}$", "$6 - 3\\sqrt{3}$", "$\\frac{6 + 3\\sqrt{3}}{7}$", "$3 + \\sqrt{3}$", "Multiply by 2 + √3: the denominator becomes 4 − 3 = 1."],
          ["H", "Find the sum of the first 20 terms of an AP with first term 3 and common difference 4.", "820", "79", "1,640", "800", "S₂₀ = 20/2 × (6 + 19 × 4) = 10 × 82 = 820."],
        ],
      },
      {
        week: 2,
        title: "Revision: algebraic processes",
        subtopics: ["Expressions, factorisation and formulae", "Linear, simultaneous and quadratic equations", "Variation", "Inequalities and exponential equations"],
        objectives: ["Factorise and simplify algebraic expressions accurately", "Solve linear, simultaneous and quadratic equations", "Solve problems on variation", "Solve inequalities and equations involving indices"],
        lesson: {
          title: "Revision: Algebra",
          summary: "A compact review of the algebraic methods most often examined.",
          minutes: 60,
          notes: `## Checklist
| Topic | Key idea |
|---|---|
| Factorising | common factor; grouping; $x^2 + bx + c$; $a^2 - b^2 = (a - b)(a + b)$ |
| Change of subject | use inverse operations in reverse order |
| Simultaneous equations | elimination or substitution; check in both |
| Quadratics | factorise, complete the square or use $x = \\frac{-b\\pm\\sqrt{b^2 - 4ac}}{2a}$ |
| Roots | $\\alpha + \\beta = -\\frac{b}{a}$, $\\alpha\\beta = \\frac{c}{a}$ |
| Variation | write the equation with $k$, find $k$, then answer |
| Inequalities | reverse the sign when multiplying or dividing by a negative |

## Quadratic inequalities
Find the roots, then decide which side is required. $x^2 - 5x + 6 < 0$ means $(x - 2)(x - 3) < 0$, which is true **between** the roots: $2 < x < 3$.

## Equations in disguise
$2^{2x} - 5\\cdot 2^x + 4 = 0$ is a quadratic in $u = 2^x$: $u^2 - 5u + 4 = 0$ gives $u = 1$ or $4$, so $x = 0$ or $2$.

## Examination tips
Substitute the options back into the equation when you are stuck on an objective question — it is often the fastest method.`,
          examples: `**Example 1.** $y\\propto\\frac{1}{x^2}$ and $y = 4$ when $x = 3$: $k = 36$, so when $x = 6$, $y = 1$.

**Example 2.** For $3x^2 - 12x + 5 = 0$: sum of roots $= 4$ and product $= \\frac{5}{3}$.

**Example 3.** Make $r$ the subject of $A = \\pi r^2$: $r = \\sqrt{\\frac{A}{\\pi}}$.`,
        },
        questions: [
          ["E", "Factorise $x^2 - 49$.", "$(x - 7)(x + 7)$", "$(x - 7)^2$", "$(x - 49)(x + 1)$", "$(x + 7)^2$", "Difference of two squares."],
          ["E", "Solve $3x - 7 = 11$.", "$x = 6$", "$x = \\frac{4}{3}$", "$x = 18$", "$x = 5$", "Add 7 to both sides: 3x = 18, so x = 6."],
          ["M", "Solve $x^2 - 3x - 10 = 0$.", "$x = 5$ or $x = -2$", "$x = -5$ or $x = 2$", "$x = 10$ or $x = -1$", "$x = 5$ or $x = 2$", "(x − 5)(x + 2) = 0."],
          ["M", "Make $r$ the subject of $A = \\pi r^2$.", "$r = \\sqrt{\\frac{A}{\\pi}}$", "$r = \\frac{A}{\\pi}$", "$r = \\sqrt{A\\pi}$", "$r = \\frac{\\sqrt{A}}{\\pi}$", "Divide by π, then take the square root."],
          ["M", "Simplify $\\frac{x^2 - 1}{x + 1}$.", "$x - 1$", "$x + 1$", "$x^2$", "$\\frac{x - 1}{x + 1}$", "x² − 1 = (x − 1)(x + 1)."],
          ["M", "Solve $3x + y = 10$ and $x - y = 2$.", "$x = 3, y = 1$", "$x = 1, y = 3$", "$x = 2, y = 4$", "$x = 4, y = 2$", "Adding gives 4x = 12."],
          ["M", "$y$ varies inversely as $x^2$, and $y = 4$ when $x = 3$. Find $y$ when $x = 6$.", "1", "2", "8", "0.5", "k = 4 × 9 = 36; y = 36 ÷ 36 = 1."],
          ["H", "What is the sum of the roots of $3x^2 - 12x + 5 = 0$?", "4", "−4", "$\\frac{5}{3}$", "12", "Sum = −b/a = 12/3 = 4."],
          ["H", "Solve $2^{2x} - 5\\cdot 2^x + 4 = 0$.", "$x = 0$ or $x = 2$", "$x = 1$ or $x = 4$", "$x = 0$ or $x = 4$", "$x = 2$ only", "Let u = 2ˣ: u² − 5u + 4 = 0 gives u = 1 or 4."],
          ["H", "For what values of $x$ is $x^2 - 5x + 6 < 0$?", "$2 < x < 3$", "$x < 2$ or $x > 3$", "$-3 < x < -2$", "$x > 3$", "(x − 2)(x − 3) is negative between its roots."],
        ],
      },
      {
        week: 3,
        title: "Revision: geometry and mensuration",
        subtopics: ["Angles, polygons and circle theorems", "Similarity and Pythagoras", "Lengths, areas and volumes", "Construction and loci"],
        objectives: ["Recall and apply angle and circle theorems", "Use similarity and Pythagoras to find lengths", "Calculate areas and volumes of plane shapes and solids", "Apply geometric facts to multi-step problems"],
        lesson: {
          title: "Revision: Geometry and Mensuration",
          summary: "A compact review of angle facts, circle theorems and mensuration formulae.",
          minutes: 60,
          notes: `## Angle facts
- Interior angles of an $n$-sided polygon: $(n - 2)\\times 180°$; exterior angles add to 360°.
- Parallel lines: corresponding and alternate angles equal; co-interior angles add to 180°.

## Circle theorems
- Angle at the centre = 2 × angle at the circumference.
- Angle in a semicircle = 90°; angles in the same segment are equal.
- Opposite angles of a cyclic quadrilateral add to 180°.
- Tangent ⟂ radius; tangents from a point are equal; alternate segment theorem.
- The perpendicular from the centre bisects a chord.

## Mensuration
| Solid | Volume | Surface area |
|---|---|---|
| Cylinder | $\\pi r^2h$ | $2\\pi rh + 2\\pi r^2$ |
| Cone | $\\frac{1}{3}\\pi r^2h$ | $\\pi rl + \\pi r^2$ |
| Sphere | $\\frac{4}{3}\\pi r^3$ | $4\\pi r^2$ |
| Sector | area $\\frac{\\theta}{360}\\pi r^2$ | arc $\\frac{\\theta}{360}2\\pi r$ |

## Similarity
Lengths scale by $k$, areas by $k^2$ and volumes by $k^3$.

## Tips
Draw a clear diagram, mark every given value and write the theorem beside each step.`,
          examples: `**Example 1.** Each exterior angle of a regular polygon is 24°: $n = 360\\div 24 = 15$ sides.

**Example 2.** Total surface area of a cone with $r = 7$ and $l = 25$: $\\frac{22}{7}\\times 7\\times(7 + 25) = 704$ cm².

**Example 3.** Similar cylinders with heights 4 and 6 have volumes in the ratio $4^3 : 6^3 = 8 : 27$.`,
        },
        questions: [
          ["E", "What is the sum of the interior angles of a heptagon (7 sides)?", "900°", "720°", "1,080°", "1,260°", "(7 − 2) × 180° = 900°."],
          ["E", "A right-angled triangle has shorter sides 9 cm and 12 cm. How long is the hypotenuse?", "15 cm", "21 cm", "13 cm", "225 cm", "√(81 + 144) = 15 cm."],
          ["M", "Find the volume of a cylinder of radius 3.5 cm and height 10 cm. (Take $\\pi = \\frac{22}{7}$.)", "385 cm³", "110 cm³", "770 cm³", "220 cm³", "22/7 × 12.25 × 10 = 385 cm³."],
          ["M", "Find the area of a sector of radius 6 cm and angle 60°. (Take $\\pi = 3.14$.)", "18.84 cm²", "6.28 cm²", "37.68 cm²", "113.04 cm²", "1/6 × 3.14 × 36 = 18.84 cm²."],
          ["M", "An arc subtends 42° at the circumference of a circle. What angle does it subtend at the centre?", "84°", "42°", "21°", "138°", "Angle at the centre = 2 × 42°."],
          ["M", "In cyclic quadrilateral ABCD, $\\angle A = 3x$ and $\\angle C = 2x$. Find $x$.", "36°", "72°", "45°", "18°", "Opposite angles add to 180°: 5x = 180°."],
          ["M", "Each exterior angle of a regular polygon is 24°. How many sides does it have?", "15", "12", "24", "18", "360° ÷ 24° = 15."],
          ["H", "Find the total surface area of a cone with radius 7 cm and slant height 25 cm. (Take $\\pi = \\frac{22}{7}$.)", "704 cm²", "550 cm²", "154 cm²", "1,232 cm²", "πr(r + l) = 22/7 × 7 × 32 = 704 cm²."],
          ["H", "Two similar cylinders have heights 4 cm and 6 cm. What is the ratio of their volumes?", "8 : 27", "2 : 3", "4 : 9", "16 : 36", "Volumes scale by the cube of the length ratio: 2³ : 3³."],
          ["H", "A chord of length 16 cm is drawn in a circle of radius 10 cm. How far is it from the centre?", "6 cm", "8 cm", "12 cm", "4 cm", "√(10² − 8²) = 6 cm."],
        ],
      },
      {
        week: 4,
        title: "Revision: trigonometry, statistics and probability",
        subtopics: ["Trigonometric ratios, sine and cosine rules", "Heights, distances and bearings", "Averages and measures of spread", "Probability"],
        objectives: ["Apply trigonometric ratios and the sine and cosine rules", "Solve elevation, depression and bearing problems", "Calculate and interpret averages and measures of spread", "Solve probability problems using the addition and multiplication laws"],
        lesson: {
          title: "Revision: Trigonometry, Statistics and Probability",
          summary: "A compact review of trigonometry, data handling and probability for the final examinations.",
          minutes: 60,
          notes: `## Trigonometry
- SOH CAH TOA; exact values: $\\sin 30° = \\frac{1}{2}$, $\\cos 60° = \\frac{1}{2}$, $\\tan 45° = 1$, $\\tan 60° = \\sqrt{3}$.
- Sine rule $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$; cosine rule $a^2 = b^2 + c^2 - 2bc\\cos A$; area $\\frac{1}{2}ab\\sin C$.
- Bearings are measured clockwise from north with three figures.

## Statistics
| Measure | Method |
|---|---|
| Mean | $\\frac{\\Sigma fx}{\\Sigma f}$ |
| Median | middle value of ordered data (average of the two middle values if $n$ is even) |
| Mode | most frequent value |
| Standard deviation | $\\sqrt{\\frac{\\Sigma(x - \\bar{x})^2}{n}}$ |

## Probability
- $P(\\text{not } A) = 1 - P(A)$
- Mutually exclusive: $P(A \\text{ or } B) = P(A) + P(B)$
- Independent: $P(A \\text{ and } B) = P(A)P(B)$
- Without replacement, the second fraction changes: both numerator and denominator usually fall by 1.
- "One of each" can happen in two orders — add both.

## Final advice
Practise full timed papers, review every mistake, and learn the formulae that are **not** given on the examination paper.`,
          examples: `**Example 1.** SD of 3, 5, 7: mean 5; variance $\\frac{4 + 0 + 4}{3} = \\frac{8}{3}$; SD $\\approx 1.63$.

**Example 2.** From 50√3 m away the top of a 50 m tower has elevation $\\tan^{-1}\\frac{1}{\\sqrt{3}} = 30°$.

**Example 3.** 4 red and 6 black balls, two drawn without replacement: $P(\\text{one of each}) = 2\\times\\frac{4}{10}\\times\\frac{6}{9} = \\frac{8}{15}$.`,
        },
        questions: [
          ["E", "What is the value of $\\tan 60°$?", "$\\sqrt{3}$", "$\\frac{1}{\\sqrt{3}}$", "1", "$\\frac{\\sqrt{3}}{2}$", "tan 60° = sin 60° ÷ cos 60° = (√3/2) ÷ (1/2)."],
          ["E", "Find the mode of 2, 3, 3, 5, 7, 7, 7, 9.", "7", "3", "5", "9", "7 occurs three times."],
          ["M", "Find the mean of 5, 7, 9, 11 and 13.", "9", "8", "45", "10", "Mean = total ÷ number of values = 45 ÷ 5 = 9."],
          ["M", "Find the median of 12, 5, 9, 20, 15, 7.", "10.5", "9", "12", "11.3", "In order: 5, 7, 9, 12, 15, 20; median = (9 + 12) ÷ 2."],
          ["M", "Two fair dice are thrown. What is the probability of a double?", "$\\frac{1}{6}$", "$\\frac{1}{36}$", "$\\frac{1}{12}$", "$\\frac{1}{3}$", "6 doubles out of 36 outcomes."],
          ["M", "In triangle ABC, $a = 7$ cm, $b = 8$ cm and $C = 60°$. Find $c$ to 2 decimal places.", "7.55 cm", "57 cm", "13 cm", "8.54 cm", "c² = 49 + 64 − 2 × 7 × 8 × 0.5 = 57."],
          ["M", "A and B are mutually exclusive with $P(A) = \\frac{1}{3}$ and $P(B) = \\frac{1}{4}$. Find $P(A \\text{ or } B)$.", "$\\frac{7}{12}$", "$\\frac{1}{12}$", "$\\frac{2}{7}$", "$\\frac{1}{2}$", "1/3 + 1/4 = 7/12."],
          ["H", "Find the standard deviation of 3, 5 and 7, to 2 decimal places.", "1.63", "2.00", "2.67", "1.41", "Mean 5; variance (4 + 0 + 4) ÷ 3 = 8/3; √(8/3) ≈ 1.63."],
          ["H", "A tower is 50 m high. From a point $50\\sqrt{3}$ m from its foot, what is the angle of elevation of its top?", "30°", "60°", "45°", "15°", "tan θ = 50 ÷ 50√3 = 1/√3."],
          ["H", "A bag holds 4 red and 6 black balls. Two are drawn without replacement. What is the probability of getting one of each colour?", "$\\frac{8}{15}$", "$\\frac{4}{15}$", "$\\frac{12}{25}$", "$\\frac{1}{2}$", "P(RB) + P(BR) = 4/10 × 6/9 + 6/10 × 4/9 = 48/90."],
        ],
      },
    ],
  },
];
