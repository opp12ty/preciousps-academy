import type { PackTopic } from "../types";

/** SS3 Further Mathematics — NERDC 2025 first-term topics (weeks are set in ss3.ts). */
type Topic = Omit<PackTopic, "week">;

export const inequalities: Topic = {
  title: "Quadratic Inequalities and Inequalities in Two Dimensions",
  subtopics: ["Solving quadratic inequalities", "Rational and higher inequalities by sign analysis", "Graphs of linear inequalities in two variables", "Simultaneous inequalities and the feasible region"],
  objectives: ["Solve quadratic inequalities by factorisation and sign analysis", "Solve simple rational and cubic inequalities", "Represent linear inequalities in two variables on a graph", "Identify the region satisfying several inequalities and optimise a linear function over it"],
  lesson: {
    title: "Inequalities in One and Two Variables",
    summary: "Finding the ranges of values that satisfy quadratic inequalities, and the regions that satisfy inequalities in x and y.",
    minutes: 40,
    notes: `## Quadratic inequalities
A **quadratic inequality** has the form $ax^2 + bx + c < 0$ (or $>$, $\\le$, $\\ge$).

### Method
1. Bring every term to one side, leaving zero on the other.
2. **Factorise** and find the **critical values** (roots).
3. Use a **sign table** or a **sketch** of the parabola.

For $a > 0$ and roots $\\alpha < \\beta$:
- $(x - \\alpha)(x - \\beta) < 0 \\Rightarrow \\alpha < x < \\beta$ (**between** the roots)
- $(x - \\alpha)(x - \\beta) > 0 \\Rightarrow x < \\alpha$ or $x > \\beta$ (**outside** the roots)

*Solve $x^2 - x - 6 < 0$.* $(x - 3)(x + 2) < 0$, so $-2 < x < 3$.

*Solve $x^2 \\ge 4x$.* $x(x - 4) \\ge 0$, so $x \\le 0$ or $x \\ge 4$.

### Sign table for $(x - 3)(x + 2)$
| Interval | $x < -2$ | $-2 < x < 3$ | $x > 3$ |
|---|---|---|---|
| $x + 2$ | − | + | + |
| $x - 3$ | − | − | + |
| product | + | − | + |

### Discriminant conditions
$ax^2 + bx + c = 0$ has real roots when $b^2 - 4ac \\ge 0$ and no real roots when $b^2 - 4ac < 0$. Such conditions often lead to a quadratic inequality in a constant $k$.

### Rational inequalities
For $\\dfrac{x - 1}{x + 2} > 0$ the critical values are $1$ and $-2$. Numerator and denominator must have the **same sign**: $x < -2$ or $x > 1$. Never multiply through by an expression whose sign is unknown.

### Three factors
For $(x + 1)(x - 2)(x - 5) < 0$, the critical values $-1, 2, 5$ divide the line into four intervals; the signs alternate: $x < -1$ or $2 < x < 5$.

## Inequalities in two dimensions
A linear inequality such as $2x + 3y \\le 12$ is satisfied by all the points on **one side** of the line $2x + 3y = 12$.

### Method
1. Draw the **boundary line**: **solid** for $\\le$ or $\\ge$; **broken (dashed)** for $<$ or $>$.
2. Choose a **test point** not on the line — usually $(0, 0)$.
3. If the test point satisfies the inequality, the required region is on its side; otherwise it is on the other side.
4. Shade as instructed (often the **unwanted** region is shaded).

### Simultaneous inequalities
The set of points satisfying **all** the inequalities is the **feasible region**. A linear function $P = ax + by$ takes its greatest and least values over the region at a **vertex** (corner).

*Maximise $P = 3x + 2y$ subject to $x + y \\le 4$, $x \\le 3$, $x \\ge 0$, $y \\ge 0$.*
Vertices: $(0, 0), (3, 0), (3, 1), (0, 4)$; $P = 0, 9, 11, 8$. Maximum $P = 11$ at $(3, 1)$.

## Checks
- Test a value from your answer in the original inequality.
- Reverse the inequality sign when multiplying or dividing by a **negative** number.
- Quote "or" for two separate ranges; do not write $4 < x < 0$.`,
    examples: `**Example 1.** Solve $x^2 - 7x + 10 > 0$. *Solution:* $(x - 2)(x - 5) > 0$, so $\\mathbf{x < 2}$ **or** $\\mathbf{x > 5}$.

**Example 2.** Find the range of $k$ for which $x^2 + kx + 4 = 0$ has real roots. *Solution:* $k^2 - 16 \\ge 0$, so $\\mathbf{k \\le -4}$ **or** $\\mathbf{k \\ge 4}$.

**Example 3.** Does $(2, 1)$ satisfy $x + 2y < 6$ and $x - y \\ge 1$? *Solution:* $4 < 6$ and $1 \\ge 1$ — **yes**.`,
  },
  questions: [
    ["E", "Solve the inequality $x^2 - 5x + 6 < 0$.", "$2 < x < 3$", "$x < 2$ or $x > 3$", "$-3 < x < -2$", "$x > 3$", "$(x - 2)(x - 3) < 0$ between the roots. Answer: $2 < x < 3$."],
    ["E", "The boundary line of the region $y > 2x + 1$ is drawn as a", "broken line", "solid line", "curve", "double line", "Points on the line are not included in a strict inequality."],
    ["E", "Solve $x^2 \\ge 9$.", "$x \\le -3$ or $x \\ge 3$", "$-3 \\le x \\le 3$", "$x \\ge 3$ only", "$x \\ge 9$", "$(x - 3)(x + 3) \\ge 0$ outside the roots."],
    ["M", "Solve $x^2 - 2x - 8 > 0$.", "$x < -2$ or $x > 4$", "$-2 < x < 4$", "$x < -4$ or $x > 2$", "$-4 < x < 2$", "$(x - 4)(x + 2) > 0$ outside the roots."],
    ["M", "Solve $2x^2 + 5x - 3 \\le 0$.", "$-3 \\le x \\le \\frac12$", "$x \\le -3$ or $x \\ge \\frac12$", "$-\\frac12 \\le x \\le 3$", "$-3 \\le x \\le 2$", "$(2x - 1)(x + 3) \\le 0$ between the roots."],
    ["M", "Which point satisfies both $2x + 3y < 12$ and $x - y > 1$?", "$(3, 1)$", "$(1, 3)$", "$(4, 2)$", "$(0, 0)$", "$6 + 3 = 9 < 12$ and $3 - 1 = 2 > 1$."],
    ["M", "The range of values of $k$ for which $x^2 + kx + 9 = 0$ has no real roots is", "$-6 < k < 6$", "$k < -6$ or $k > 6$", "$-3 < k < 3$", "$k > 6$", "$k^2 - 36 < 0$."],
    ["H", "Solve $\\dfrac{x - 1}{x + 2} > 0$.", "$x < -2$ or $x > 1$", "$-2 < x < 1$", "$x > 1$ only", "$x > -2$", "Numerator and denominator must have the same sign."],
    ["H", "The number of integers satisfying $x^2 + 2x - 3 < 0$ is", "3", "4", "5", "2", "$-3 < x < 1$ contains $-2, -1, 0$. Answer: 3."],
    ["H", "The maximum value of $3x + 2y$ subject to $x + y \\le 4$, $x \\le 3$, $x \\ge 0$, $y \\ge 0$ is", "11", "12", "9", "8", "At the vertex $(3, 1)$: $9 + 2 = 11$."],
  ],
  jamb: [
    ["M", "Solve $6 - x - x^2 > 0$.", "$-3 < x < 2$", "$x < -3$ or $x > 2$", "$-2 < x < 3$", "$x < -2$ or $x > 3$", "$x^2 + x - 6 < 0$ gives $(x + 3)(x - 2) < 0$."],
    ["H", "Solve $(x + 1)(x - 2)(x - 5) < 0$.", "$x < -1$ or $2 < x < 5$", "$-1 < x < 2$ or $x > 5$", "$-1 < x < 5$", "$x < 2$ or $x > 5$", "The signs alternate across the critical values $-1$, 2 and 5."],
  ],
};

export const matrices: Topic = {
  title: "Matrices, Determinants and Simultaneous Equations",
  subtopics: ["Addition, subtraction and multiplication of matrices", "Determinants of 2×2 and 3×3 matrices", "Inverse of a matrix", "Solving simultaneous equations by matrices and Cramer's rule"],
  objectives: ["Add, subtract and multiply matrices", "Evaluate determinants of order two and three", "Find the inverse of a 2×2 matrix", "Solve simultaneous linear equations in two and three unknowns using matrices"],
  lesson: {
    title: "Matrices and Systems of Equations",
    summary: "Matrix algebra, determinants of order two and three, and their use in solving simultaneous equations.",
    minutes: 80,
    notes: `## Matrices
A **matrix** is a rectangular array of numbers. One with $m$ rows and $n$ columns has **order** $m \\times n$.

- **Addition and subtraction:** only for matrices of the **same order**; combine corresponding elements.
- **Scalar multiplication:** multiply every element by the scalar.
- **Multiplication:** $AB$ exists only if the number of **columns of $A$** equals the number of **rows of $B$**; an $m \\times n$ matrix times an $n \\times p$ matrix gives an $m \\times p$ matrix. Multiply **rows by columns**. In general $AB \\ne BA$.
- **Identity:** $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$; $AI = IA = A$.
- **Transpose** $A^T$: rows and columns interchanged.

## Determinants
### Order two
$$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$

### Order three — expansion by the first row
$$\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{vmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)$$

- The **minor** of an element is the determinant left after deleting its row and column.
- The **cofactor** is the minor with sign $(-1)^{i+j}$: the sign pattern is $+ - +$, $- + -$, $+ - +$.

*Evaluate* $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{vmatrix} = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1$.

### Properties
- Interchanging two rows changes the **sign**.
- Two identical rows give a determinant of **zero**.
- A common factor of a row may be taken outside.
- $|AB| = |A||B|$.
- A matrix with **zero determinant is singular** and has no inverse.

## Inverse of a 2×2 matrix
$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\Rightarrow A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$
For order three, $A^{-1} = \\dfrac{1}{|A|}\\,\\text{adj}\\,A$, where the **adjoint** is the transpose of the matrix of cofactors.

## Simultaneous equations
### Matrix method
Write the system as $AX = B$; then $X = A^{-1}B$.

*Solve $2x + y = 7$, $5x + 3y = 18$.* $|A| = 1$; $A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$; $X = \\begin{pmatrix} 21 - 18 \\\\ -35 + 36 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$.

### Cramer's rule
For $a_1x + b_1y = c_1$, $a_2x + b_2y = c_2$:
$$x = \\frac{D_x}{D}, \\quad y = \\frac{D_y}{D}$$
where $D$ is the determinant of coefficients, and $D_x$, $D_y$ are obtained by replacing the $x$- and $y$-columns in turn by the constants. The same rule extends to three unknowns: $x = \\dfrac{D_x}{D}$, $y = \\dfrac{D_y}{D}$, $z = \\dfrac{D_z}{D}$.

- If $D \\ne 0$ there is a **unique** solution.
- If $D = 0$ there is **no unique** solution (none or infinitely many).

*Solve $x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$.*
$D = 1(1 - 2) - 1(-2 - 1) + 1(4 + 1) = -1 + 3 + 5 = 7$.
$D_z = 1(-2 - 6) - 1(4 - 3) + 6(4 + 1) = -8 - 1 + 30 = 21$, so $z = 3$; similarly $x = 1$, $y = 2$.

## Matrices as transformations
A 2×2 matrix maps the point $(x, y)$ to $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$; the determinant gives the **area scale factor**.`,
    examples: `**Example 1.** Evaluate $\\begin{vmatrix} 4 & 3 \\\\ 2 & 5 \\end{vmatrix}$. *Solution:* $20 - 6 = \\mathbf{14}$.

**Example 2.** Find the inverse of $\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$. *Solution:* determinant $= 1$; inverse $= \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$.

**Example 3.** Use Cramer's rule to solve $2x + 3y = 13$, $x - y = -1$. *Solution:* $D = -5$, $D_x = -10$, $D_y = -15$; $\\mathbf{x = 2, y = 3}$.`,
  },
  questions: [
    ["E", "Evaluate $\\begin{vmatrix} 5 & 3 \\\\ 2 & 4 \\end{vmatrix}$.", "14", "26", "7", "$-14$", "$5 \\times 4 - 3 \\times 2 = 14$."],
    ["E", "A square matrix whose determinant is zero is said to be", "singular", "symmetric", "scalar", "an identity matrix", "A singular matrix has no inverse."],
    ["E", "The product of a $2 \\times 3$ matrix and a $3 \\times 4$ matrix has order", "$2 \\times 4$", "$3 \\times 3$", "$4 \\times 2$", "$2 \\times 3$", "Rows of the first by columns of the second."],
    ["M", "Evaluate $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{vmatrix}$.", "1", "$-1$", "79", "$-79$", "$1(-24) - 2(-20) + 3(-5) = 1$."],
    ["M", "The inverse of $\\begin{pmatrix} 3 & 2 \\\\ 7 & 5 \\end{pmatrix}$ is", "$\\begin{pmatrix} 5 & -2 \\\\ -7 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 2 \\\\ 7 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 2 \\\\ 7 & -5 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ -7 & 5 \\end{pmatrix}$", "The determinant is $15 - 14 = 1$; swap the diagonal and change the signs of the others."],
    ["M", "Using Cramer's rule on $2x + 3y = 13$ and $x - y = -1$, the value of $x$ is", "2", "3", "$-2$", "5", "$D = -5$ and $D_x = -10$, so $x = 2$."],
    ["M", "Find the values of $x$ for which $\\begin{vmatrix} x & 3 \\\\ 2 & x - 1 \\end{vmatrix} = 0$.", "$3$ or $-2$", "$-3$ or $2$", "$6$ or $-1$", "$1$ or $6$", "$x^2 - x - 6 = 0$ gives $(x - 3)(x + 2) = 0$."],
    ["H", "The determinant of $\\begin{pmatrix} 2 & 0 & 1 \\\\ 1 & 3 & 2 \\\\ 1 & 1 & 1 \\end{pmatrix}$ is", "0", "4", "2", "$-2$", "$2(3 - 2) - 0 + 1(1 - 3) = 0$."],
    ["H", "Given $x + y + z = 6$, $2x - y + z = 3$ and $x + 2y - z = 2$, the value of $z$ is", "3", "1", "2", "6", "$D = 7$ and $D_z = 21$, so $z = 3$."],
    ["H", "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, then $A^2 - 5A$ equals", "$2I$", "$-2I$", "$I$", "the zero matrix", "$A^2 = \\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}$; subtracting $5A$ leaves $2I$."],
  ],
  jamb: [
    ["M", "The cofactor of the element 4 in $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{vmatrix}$ is", "4", "$-4$", "16", "$-16$", "Minor $= 6 - 10 = -4$; the sign for row 2, column 3 is negative. Answer: 4."],
    ["H", "Find $k$ if $\\begin{vmatrix} k & 1 & 2 \\\\ 0 & 2 & 1 \\\\ 1 & 0 & 1 \\end{vmatrix} = 5$.", "4", "1", "$-1$", "3", "The determinant is $2k + 1 - 4 = 2k - 3$; $2k - 3 = 5$ gives $k = 4$."],
  ],
};

export const partialFractions: Topic = {
  title: "Partial Fractions: Linear, Repeated and Quadratic Factors",
  subtopics: ["Proper and improper rational functions", "Distinct linear factors", "Repeated linear factors", "Quadratic factors and improper fractions"],
  objectives: ["Distinguish proper from improper rational functions", "Resolve fractions with distinct linear factors", "Resolve fractions with repeated linear factors", "Resolve fractions with an irreducible quadratic factor and improper fractions"],
  lesson: {
    title: "Resolving into Partial Fractions",
    summary: "Splitting a rational function into simpler fractions, for use in integration and series.",
    minutes: 40,
    notes: `## Basic definition
A **rational function** is a quotient of two polynomials, $\\dfrac{f(x)}{g(x)}$. It is **proper** if the degree of $f$ is **less than** the degree of $g$; otherwise it is **improper**.

Resolving into **partial fractions** means writing a fraction as a sum of simpler fractions — the reverse of adding fractions.

$$\\frac{1}{x - 2} - \\frac{1}{x + 3} = \\frac{5}{(x - 2)(x + 3)}$$

## Forms
| Denominator contains | Partial fractions |
|---|---|
| distinct linear factors $(x - a)(x - b)$ | $\\dfrac{A}{x - a} + \\dfrac{B}{x - b}$ |
| repeated linear factor $(x - a)^2$ | $\\dfrac{A}{x - a} + \\dfrac{B}{(x - a)^2}$ |
| irreducible quadratic factor $(x^2 + px + q)$ | $\\dfrac{Ax + B}{x^2 + px + q}$ |

The number of constants equals the **degree of the denominator**.

## Type 1 — distinct linear factors
*Resolve* $\\dfrac{x + 5}{(x - 1)(x + 2)}$.
$x + 5 \\equiv A(x + 2) + B(x - 1)$.
Put $x = 1$: $6 = 3A$, $A = 2$. Put $x = -2$: $3 = -3B$, $B = -1$.
$$\\frac{x + 5}{(x - 1)(x + 2)} = \\frac{2}{x - 1} - \\frac{1}{x + 2}$$

**Cover-up rule:** to find $A$, cover the factor $(x - 1)$ and put $x = 1$ in what remains: $\\dfrac{1 + 5}{1 + 2} = 2$.

## Type 2 — repeated linear factors
*Resolve* $\\dfrac{3x + 5}{(x + 1)^2}$.
$3x + 5 \\equiv A(x + 1) + B$. Coefficient of $x$: $A = 3$. Put $x = -1$: $B = 2$.
$$\\frac{3x + 5}{(x + 1)^2} = \\frac{3}{x + 1} + \\frac{2}{(x + 1)^2}$$

*Resolve* $\\dfrac{1}{x(x + 1)^2} = \\dfrac{A}{x} + \\dfrac{B}{x + 1} + \\dfrac{C}{(x + 1)^2}$.
$1 \\equiv A(x + 1)^2 + Bx(x + 1) + Cx$. $x = 0$: $A = 1$. $x = -1$: $C = -1$. Coefficient of $x^2$: $A + B = 0$, $B = -1$.

## Type 3 — quadratic factor
*Resolve* $\\dfrac{5x + 1}{(x - 1)(x^2 + 1)} = \\dfrac{A}{x - 1} + \\dfrac{Bx + C}{x^2 + 1}$.
$5x + 1 \\equiv A(x^2 + 1) + (Bx + C)(x - 1)$. $x = 1$: $6 = 2A$, $A = 3$. Coefficient of $x^2$: $A + B = 0$, $B = -3$. Constant: $A - C = 1$, $C = 2$.
$$\\frac{5x + 1}{(x - 1)(x^2 + 1)} = \\frac{3}{x - 1} + \\frac{2 - 3x}{x^2 + 1}$$

## Type 4 — improper fractions
**Divide first**, then resolve the proper remainder.
$$\\frac{x^2 + 3}{x^2 - 1} = 1 + \\frac{4}{(x - 1)(x + 1)} = 1 + \\frac{2}{x - 1} - \\frac{2}{x + 1}$$

## Methods of finding the constants
1. **Substitution** of convenient values of $x$ (the roots of the factors).
2. **Equating coefficients** of like powers.
3. A combination of both.

## Uses
- **Integration:** $\\displaystyle\\int \\frac{5}{(x - 2)(x + 3)}\\,dx = \\ln|x - 2| - \\ln|x + 3| + C$.
- Summation of series by the method of differences.
- Binomial expansions of rational functions.

## Check
Recombine the partial fractions, or test with a simple value such as $x = 0$.`,
    examples: `**Example 1.** Resolve $\\dfrac{5}{(x - 2)(x + 3)}$. *Solution:* $A = 1$, $B = -1$: $\\mathbf{\\dfrac{1}{x - 2} - \\dfrac{1}{x + 3}}$.

**Example 2.** State the form of partial fractions for $\\dfrac{2x}{(x - 3)^2}$. *Solution:* $\\dfrac{A}{x - 3} + \\dfrac{B}{(x - 3)^2}$.

**Example 3.** Express $\\dfrac{x^2 + 3}{x^2 - 1}$ in partial fractions. *Solution:* $\\mathbf{1 + \\dfrac{2}{x - 1} - \\dfrac{2}{x + 1}}$.`,
  },
  questions: [
    ["E", "A rational function is proper when the degree of its numerator is", "less than that of the denominator", "equal to that of the denominator", "greater than that of the denominator", "zero", "Otherwise it is improper and must first be divided."],
    ["E", "The correct form of partial fractions for $\\dfrac{1}{(x + 1)(x + 2)}$ is", "$\\dfrac{A}{x + 1} + \\dfrac{B}{x + 2}$", "$\\dfrac{Ax + B}{(x + 1)(x + 2)}$", "$\\dfrac{A}{x + 1} + \\dfrac{B}{(x + 1)^2}$", "$\\dfrac{A}{x} + \\dfrac{B}{x + 2}$", "Each distinct linear factor gives one constant numerator."],
    ["E", "The correct form of partial fractions for $\\dfrac{3x + 1}{(x - 1)^2}$ is", "$\\dfrac{A}{x - 1} + \\dfrac{B}{(x - 1)^2}$", "$\\dfrac{A}{x - 1} + \\dfrac{B}{x + 1}$", "$\\dfrac{Ax + B}{x - 1}$", "$\\dfrac{A}{(x - 1)^2}$ only", "A repeated factor needs a term for each power."],
    ["M", "Resolve $\\dfrac{5}{(x - 2)(x + 3)}$ into partial fractions.", "$\\dfrac{1}{x - 2} - \\dfrac{1}{x + 3}$", "$\\dfrac{1}{x - 2} + \\dfrac{1}{x + 3}$", "$\\dfrac{5}{x - 2} - \\dfrac{5}{x + 3}$", "$\\dfrac{1}{x + 3} - \\dfrac{1}{x - 2}$", "At $x = 2$, $A = 1$; at $x = -3$, $B = -1$."],
    ["M", "Resolve $\\dfrac{2x + 3}{(x + 1)(x + 2)}$ into partial fractions.", "$\\dfrac{1}{x + 1} + \\dfrac{1}{x + 2}$", "$\\dfrac{1}{x + 1} - \\dfrac{1}{x + 2}$", "$\\dfrac{2}{x + 1} + \\dfrac{3}{x + 2}$", "$\\dfrac{3}{x + 1} - \\dfrac{1}{x + 2}$", "At $x = -1$, $A = 1$; at $x = -2$, $B = 1$."],
    ["M", "If $\\dfrac{x + 5}{(x - 1)(x + 2)} = \\dfrac{A}{x - 1} + \\dfrac{B}{x + 2}$, the value of $A$ is", "2", "$-1$", "6", "3", "Cover-up at $x = 1$: $6 \\div 3 = 2$."],
    ["M", "The correct form of partial fractions for $\\dfrac{x^2 + 1}{(x - 1)(x^2 + 4)}$ is", "$\\dfrac{A}{x - 1} + \\dfrac{Bx + C}{x^2 + 4}$", "$\\dfrac{A}{x - 1} + \\dfrac{B}{x^2 + 4}$", "$\\dfrac{A}{x - 1} + \\dfrac{B}{x + 2} + \\dfrac{C}{x - 2}$", "$\\dfrac{Ax + B}{x - 1} + \\dfrac{C}{x^2 + 4}$", "An irreducible quadratic factor takes a linear numerator."],
    ["H", "If $\\dfrac{3x + 5}{(x + 1)^2} = \\dfrac{A}{x + 1} + \\dfrac{B}{(x + 1)^2}$, the value of $B$ is", "2", "3", "5", "$-2$", "$3x + 5 = A(x + 1) + B$; at $x = -1$, $B = 2$."],
    ["H", "If $\\dfrac{1}{x(x + 1)^2} = \\dfrac{A}{x} + \\dfrac{B}{x + 1} + \\dfrac{C}{(x + 1)^2}$, the value of $B$ is", "$-1$", "1", "0", "2", "$A = 1$ and the coefficient of $x^2$ gives $A + B = 0$."],
    ["H", "Express $\\dfrac{x^2 + 3}{(x - 1)(x + 1)}$ in partial fractions.", "$1 + \\dfrac{2}{x - 1} - \\dfrac{2}{x + 1}$", "$\\dfrac{2}{x - 1} - \\dfrac{2}{x + 1}$", "$1 + \\dfrac{2}{x - 1} + \\dfrac{2}{x + 1}$", "$1 - \\dfrac{2}{x - 1} + \\dfrac{2}{x + 1}$", "Divide first: the quotient is 1 and the remainder 4."],
  ],
  jamb: [
    ["M", "Resolve $\\dfrac{7}{(x + 4)(x - 3)}$ into partial fractions.", "$\\dfrac{1}{x - 3} - \\dfrac{1}{x + 4}$", "$\\dfrac{1}{x + 4} - \\dfrac{1}{x - 3}$", "$\\dfrac{1}{x - 3} + \\dfrac{1}{x + 4}$", "$\\dfrac{7}{x - 3} - \\dfrac{7}{x + 4}$", "At $x = 3$ the constant is 1; at $x = -4$ it is $-1$."],
    ["H", "If $\\dfrac{5x + 1}{(x - 1)(x^2 + 1)} = \\dfrac{A}{x - 1} + \\dfrac{Bx + C}{x^2 + 1}$, the value of $C$ is", "2", "3", "$-3$", "$-2$", "$A = 3$; the constant terms give $A - C = 1$, so $C = 2$."],
  ],
};

export const binomialPoisson: Topic = {
  title: "Binomial and Poisson Distributions and the Poisson Approximation",
  subtopics: ["The binomial distribution", "The Poisson distribution", "Poisson approximation to the binomial", "Choosing the appropriate distribution"],
  objectives: ["State the conditions for a binomial distribution and calculate binomial probabilities", "State the conditions for a Poisson distribution and calculate Poisson probabilities", "Use the Poisson distribution to approximate the binomial", "Decide which distribution models a given situation"],
  lesson: {
    title: "Discrete Probability Distributions",
    summary: "Two models for counting: successes in a fixed number of trials, and events in a fixed interval.",
    minutes: 80,
    notes: `## The binomial distribution
### Conditions
1. A **fixed number** $n$ of trials.
2. Each trial has only **two outcomes** — success or failure.
3. The probability of success $p$ is **constant**; $q = 1 - p$.
4. The trials are **independent**.

Then $X$, the number of successes, is written $X \\sim B(n, p)$ and
$$P(X = r) = \\binom{n}{r} p^r q^{\\,n - r}, \\quad r = 0, 1, 2, \\dots, n$$
where $\\dbinom{n}{r} = \\dfrac{n!}{r!(n - r)!}$.

*A fair coin is tossed 4 times. Find the probability of exactly 2 heads.*
$\\dbinom{4}{2}\\left(\\tfrac12\\right)^2\\left(\\tfrac12\\right)^2 = 6 \\times \\tfrac{1}{16} = \\tfrac38$.

**"At least one":** $P(X \\ge 1) = 1 - P(X = 0) = 1 - q^n$.

## The Poisson distribution
The Poisson distribution models the number of occurrences of an event in a fixed **interval of time or space** when events occur
- **singly** and **independently**,
- **at random**,
- at a **constant average rate**.

If the mean number of occurrences is $\\lambda$, then $X \\sim Po(\\lambda)$ and
$$P(X = r) = \\frac{e^{-\\lambda}\\lambda^r}{r!}, \\quad r = 0, 1, 2, \\dots$$

Examples: telephone calls per minute; accidents per week; misprints per page; particles emitted per second.

*Calls arrive at an average of 2 per minute. Find the probability of no call in a minute.* $P(X = 0) = e^{-2} \\approx 0.135$.

*For $\\lambda = 3$:* $P(X = 2) = \\dfrac{e^{-3} \\times 9}{2} \\approx 0.224$.

Useful values: $e^{-1} \\approx 0.368$, $e^{-2} \\approx 0.135$, $e^{-3} \\approx 0.0498$, $e^{-4} \\approx 0.0183$.

If the rate is given per unit, **scale** $\\lambda$ to the interval required: 2 per minute is 6 per three minutes.

The distribution has only **one parameter**, $\\lambda$, and its **mean and variance are both** $\\lambda$.

## Poisson approximation to the binomial
When $n$ is **large** and $p$ is **small** (as a guide, $n > 50$ and $p < 0.1$), $B(n, p)$ is closely approximated by $Po(\\lambda)$ with
$$\\lambda = np$$

*1% of bulbs are defective. Find the probability that a box of 300 has no defective bulb.* $\\lambda = 300 \\times 0.01 = 3$; $P(X = 0) = e^{-3} \\approx 0.050$.

The approximation saves the labour of large binomial coefficients.

## Comparison
| | Binomial | Poisson |
|---|---|---|
| counts | successes in $n$ trials | events in an interval |
| values | $0$ to $n$ | $0, 1, 2, \\dots$ without limit |
| parameters | $n$ and $p$ | $\\lambda$ |
| mean | $np$ | $\\lambda$ |
| variance | $npq$ | $\\lambda$ |

## The normal distribution (link)
For a **continuous** variable, or for large $n$ with $p$ not small, the **normal distribution** $N(\\mu, \\sigma^2)$ is used, standardising with $z = \\dfrac{x - \\mu}{\\sigma}$.`,
    examples: `**Example 1.** $X \\sim B\\left(5, \\tfrac13\\right)$. Find $P(X = 0)$. *Solution:* $\\left(\\tfrac23\\right)^5 = \\mathbf{\\tfrac{32}{243}}$.

**Example 2.** $X \\sim Po(2)$. Find $P(X = 1)$. *Solution:* $2e^{-2} \\approx \\mathbf{0.271}$.

**Example 3.** $X \\sim B(200, 0.02)$. State the approximating Poisson mean. *Solution:* $\\lambda = 200 \\times 0.02 = \\mathbf{4}$.`,
  },
  questions: [
    ["E", "The Poisson distribution is completely specified by", "one parameter", "two parameters", "three parameters", "no parameter", "Only the mean $\\lambda$ is needed."],
    ["E", "A condition for a binomial distribution is that the trials are", "independent with a constant probability of success", "dependent on one another", "infinite in number", "of varying probability", "The number of trials is fixed and each is independent."],
    ["E", "For a Poisson distribution, the variance is equal to the", "mean", "square of the mean", "square root of the mean", "reciprocal of the mean", "Both equal $\\lambda$."],
    ["M", "A fair coin is tossed 4 times. The probability of obtaining exactly 2 heads is", "$\\frac38$", "$\\frac12$", "$\\frac14$", "$\\frac{1}{16}$", "$6 \\times \\frac{1}{16} = \\frac38$."],
    ["M", "If $X$ has a Poisson distribution with mean 2, then $P(X = 0)$ is approximately", "0.135", "0.271", "0.368", "0.500", "$e^{-2} \\approx 0.135$."],
    ["M", "A binomial distribution with $n = 200$ and $p = 0.02$ may be approximated by a Poisson distribution with mean", "4", "0.02", "200", "3.92", "$\\lambda = np = 4$."],
    ["M", "If $X \\sim B\\left(5, \\frac13\\right)$, then $P(X = 0)$ is", "$\\frac{32}{243}$", "$\\frac{1}{243}$", "$\\frac{80}{243}$", "$\\frac{5}{243}$", "$\\left(\\frac23\\right)^5 = \\frac{32}{243}$."],
    ["H", "If $X$ has a Poisson distribution with mean 3, then $P(X = 2)$ is approximately ($e^{-3} = 0.0498$)", "0.224", "0.149", "0.448", "0.050", "$\\frac{9}{2} \\times 0.0498 = 0.224$."],
    ["H", "A fair die is thrown 3 times. The probability of obtaining at least one six is", "$\\frac{91}{216}$", "$\\frac{125}{216}$", "$\\frac{1}{216}$", "$\\frac12$", "$1 - \\left(\\frac56\\right)^3 = \\frac{91}{216}$."],
    ["H", "For a Poisson variable $X$, $P(X = 1) = P(X = 2)$. The mean of $X$ is", "2", "1", "$\\frac12$", "4", "$\\lambda = \\frac{\\lambda^2}{2}$ gives $\\lambda = 2$."],
  ],
  jamb: [
    ["M", "If $X \\sim B\\left(6, \\frac12\\right)$, then $P(X = 3)$ is", "$\\frac{5}{16}$", "$\\frac{1}{2}$", "$\\frac{3}{8}$", "$\\frac{1}{64}$", "$20 \\times \\frac{1}{64} = \\frac{5}{16}$."],
    ["H", "One per cent of items produced by a machine are defective. Using the Poisson approximation, the probability that a sample of 300 contains no defective item is ($e^{-3} = 0.0498$)", "0.050", "0.149", "0.224", "0.003", "$\\lambda = 3$ and $P(X = 0) = e^{-3}$."],
  ],
};

export const distributionMoments: Topic = {
  title: "Mean, Variance and Coefficient of Variation of Distributions",
  subtopics: ["Mean and variance of the binomial distribution", "Mean and variance of the Poisson distribution", "Mean and variance of the normal distribution", "Coefficient of variation"],
  objectives: ["Calculate the mean and variance of a binomial distribution", "State the mean and variance of a Poisson distribution", "Use the mean and variance of a normal distribution to standardise values", "Calculate and interpret the coefficient of variation"],
  lesson: {
    title: "Measuring Centre and Spread of Distributions",
    summary: "The mean, variance and standard deviation of the three standard distributions, and a measure for comparing variability.",
    minutes: 80,
    notes: `## Expectation and variance
For a discrete random variable $X$ taking values $x$ with probabilities $p$:
$$E(X) = \\mu = \\sum xp, \\qquad Var(X) = \\sigma^2 = \\sum x^2p - \\mu^2$$
The **standard deviation** is $\\sigma = \\sqrt{Var(X)}$.

## Binomial distribution $B(n, p)$
$$\\text{mean} = np, \\qquad \\text{variance} = npq, \\qquad \\sigma = \\sqrt{npq}$$
where $q = 1 - p$. Since $q < 1$, the variance is **less than** the mean.

*For $B(20, 0.3)$:* mean $= 6$; variance $= 20 \\times 0.3 \\times 0.7 = 4.2$.

### Finding $n$ and $p$
If mean $= 12$ and variance $= 3$: $q = \\dfrac{npq}{np} = \\dfrac{3}{12} = \\dfrac14$, so $p = \\dfrac34$ and $n = \\dfrac{12}{3/4} = 16$.

## Poisson distribution $Po(\\lambda)$
$$\\text{mean} = \\lambda, \\qquad \\text{variance} = \\lambda, \\qquad \\sigma = \\sqrt{\\lambda}$$
The equality of mean and variance is the hallmark of the Poisson distribution.

## Normal distribution $N(\\mu, \\sigma^2)$
A continuous, **bell-shaped**, symmetric distribution with
$$\\text{mean} = \\mu, \\qquad \\text{variance} = \\sigma^2$$
- mean = median = mode
- about **68%** of values lie within $\\mu \\pm \\sigma$, **95%** within $\\mu \\pm 2\\sigma$ and **99.7%** within $\\mu \\pm 3\\sigma$
- total area under the curve is 1

**Standard score:** $z = \\dfrac{x - \\mu}{\\sigma}$ converts any normal variable to the **standard normal** $N(0, 1)$.

*For $X \\sim N(60, 100)$:* $\\sigma = 10$; the value $x = 75$ has $z = 1.5$.

### Normal approximation to the binomial
For large $n$ (with $np$ and $nq$ both greater than 5), $B(n, p) \\approx N(np, npq)$.

## Coefficient of variation
The **coefficient of variation (CV)** expresses the standard deviation as a percentage of the mean:
$$CV = \\frac{\\sigma}{\\mu} \\times 100\\%$$
It has **no units**, so it can compare the **relative variability** of sets of data with different means or different units. The **larger** the CV, the **more variable** (less consistent) the data.

### For the standard distributions
| Distribution | Mean | Variance | Coefficient of variation |
|---|---|---|---|
| binomial | $np$ | $npq$ | $\\dfrac{\\sqrt{npq}}{np} \\times 100\\%$ |
| Poisson | $\\lambda$ | $\\lambda$ | $\\dfrac{1}{\\sqrt{\\lambda}} \\times 100\\%$ |
| normal | $\\mu$ | $\\sigma^2$ | $\\dfrac{\\sigma}{\\mu} \\times 100\\%$ |

*Binomial, $n = 100$, $p = 0.2$:* mean 20, $\\sigma = \\sqrt{16} = 4$, CV $= 20\\%$.

*Poisson with CV 25%:* $\\dfrac{1}{\\sqrt{\\lambda}} = 0.25$, so $\\lambda = 16$.

### Comparing two groups
Class A: mean 40, standard deviation 8 — CV 20%. Class B: mean 60, standard deviation 9 — CV 15%. Although B has the larger standard deviation, **A is relatively more variable**.

## Summary
> Binomial: $np$, $npq$. Poisson: $\\lambda$, $\\lambda$. Normal: $\\mu$, $\\sigma^2$. CV $= \\dfrac{\\sigma}{\\mu} \\times 100\\%$.`,
    examples: `**Example 1.** Find the mean and standard deviation of $B(50, 0.2)$. *Solution:* mean $= \\mathbf{10}$; variance $= 8$; $\\sigma = \\mathbf{2\\sqrt2 \\approx 2.83}$.

**Example 2.** A Poisson variable has mean 9. Find its coefficient of variation. *Solution:* $\\dfrac{3}{9} \\times 100 = \\mathbf{33.3\\%}$.

**Example 3.** $X \\sim N(50, 25)$. Find the standard score of $x = 60$. *Solution:* $\\dfrac{60 - 50}{5} = \\mathbf{2}$.`,
  },
  questions: [
    ["E", "The mean of the binomial distribution $B(n, p)$ is", "$np$", "$npq$", "$\\sqrt{npq}$", "$nq$", "The expected number of successes is $np$."],
    ["E", "The coefficient of variation is defined as", "$\\dfrac{\\sigma}{\\mu} \\times 100\\%$", "$\\dfrac{\\mu}{\\sigma} \\times 100\\%$", "$\\sigma^2 \\times 100\\%$", "$\\mu - \\sigma$", "It expresses the standard deviation as a percentage of the mean."],
    ["E", "The variance of a Poisson distribution with mean 6 is", "6", "36", "$\\sqrt6$", "3", "Mean and variance are equal."],
    ["M", "The variance of the binomial distribution $B(20, 0.3)$ is", "4.2", "6", "14", "1.8", "$20 \\times 0.3 \\times 0.7 = 4.2$."],
    ["M", "A binomial distribution has mean 12 and variance 3. The number of trials $n$ is", "16", "36", "4", "48", "$q = \\frac{3}{12} = \\frac14$, $p = \\frac34$, $n = 12 \\div \\frac34 = 16$."],
    ["M", "A normal distribution has mean 50 and standard deviation 5. Its coefficient of variation is", "10%", "5%", "25%", "1000%", "$\\frac{5}{50} \\times 100 = 10\\%$."],
    ["M", "The standard deviation of a Poisson distribution with mean 4 is", "2", "4", "16", "$\\frac12$", "$\\sqrt4 = 2$. Answer: 2."],
    ["H", "For a binomial distribution with $n = 100$ and $p = 0.2$, the coefficient of variation is", "20%", "16%", "4%", "80%", "Mean 20, standard deviation 4; $\\frac{4}{20} \\times 100 = 20\\%$."],
    ["H", "The coefficient of variation of a Poisson distribution is 25%. Its mean is", "16", "4", "25", "0.25", "$\\frac{1}{\\sqrt{\\lambda}} = 0.25$ gives $\\lambda = 16$."],
    ["H", "If $X \\sim N(60, 100)$, the standard score corresponding to $x = 75$ is", "1.5", "0.15", "15", "2.5", "$\\sigma = 10$; $z = \\frac{75 - 60}{10} = 1.5$."],
  ],
  jamb: [
    ["M", "A binomial distribution has mean 6 and variance 4. The value of $n$ is", "18", "9", "12", "24", "$q = \\frac46 = \\frac23$, $p = \\frac13$, $n = 6 \\div \\frac13 = 18$."],
    ["H", "Class A has mean 40 and standard deviation 8; Class B has mean 60 and standard deviation 9. Their coefficients of variation are respectively", "20% and 15%", "15% and 20%", "8% and 9%", "5% and 6.7%", "$\\frac{8}{40} \\times 100 = 20\\%$ and $\\frac{9}{60} \\times 100 = 15\\%$."],
  ],
};

export const rankCorrelation: Topic = {
  title: "Rank Correlation and Tied Ranks",
  subtopics: ["Correlation as a measure of relationship", "Scatter diagrams", "Spearman's rank correlation coefficient", "Tied ranks"],
  objectives: ["Explain correlation and interpret scatter diagrams", "Rank data and calculate Spearman's coefficient", "Handle tied ranks correctly", "Interpret the value of a rank correlation coefficient"],
  lesson: {
    title: "Measuring Agreement between Rankings",
    summary: "How to measure the strength of a relationship between two sets of ranked data.",
    minutes: 80,
    notes: `## Correlation
**Correlation** measures the **strength and direction of the relationship** between two variables.
- **positive** — both increase together
- **negative** — one increases as the other decreases
- **zero** — no linear relationship

The coefficient lies between $-1$ and $+1$.

| Value of $r$ | Interpretation |
|---|---|
| $+1$ | perfect positive |
| $0.7$ to $1$ | strong positive |
| $0.3$ to $0.7$ | moderate positive |
| about $0$ | little or none |
| negative values | corresponding negative strength |
| $-1$ | perfect negative |

**Correlation does not prove causation.**

## Scatter diagrams
A **scatter diagram** plots the pairs $(x, y)$ as points.
- points rising from left to right → positive correlation
- points falling → negative correlation
- points scattered at random → none
- points close to a line → strong correlation

A **line of best fit** passes through the mean point $(\\bar x, \\bar y)$.

## Spearman's rank correlation coefficient
Used when data are given as **ranks**, or when only the order matters (judges' placings, examination positions).
$$r_s = 1 - \\frac{6\\sum d^2}{n(n^2 - 1)}$$
where $d$ is the **difference between the two ranks** of each item and $n$ is the number of pairs.

### Steps
1. Rank each variable — 1 for the highest (or lowest), consistently.
2. Find $d$ for each pair; check that $\\sum d = 0$.
3. Square and add to obtain $\\sum d^2$.
4. Substitute in the formula.

### Worked example
Two judges rank five contestants.
| Contestant | A | B | C | D | E |
|---|---|---|---|---|---|
| Judge X | 1 | 2 | 3 | 4 | 5 |
| Judge Y | 3 | 1 | 2 | 5 | 4 |
| $d$ | $-2$ | 1 | 1 | $-1$ | 1 |
| $d^2$ | 4 | 1 | 1 | 1 | 1 |

$\\sum d^2 = 8$; $r_s = 1 - \\dfrac{6 \\times 8}{5 \\times 24} = 1 - 0.4 = 0.6$ — moderate positive agreement.

### Special cases
- $\\sum d^2 = 0 \\Rightarrow r_s = 1$: the rankings are identical.
- Rankings exactly reversed $\\Rightarrow r_s = -1$.

## Tied ranks
When two or more items are **equal**, each is given the **mean of the ranks** they would have occupied.
- Two items tying for 2nd and 3rd places each get $\\dfrac{2 + 3}{2} = 2.5$; the next item is ranked 4.
- Three items tying for 4th, 5th and 6th each get $\\dfrac{4 + 5 + 6}{3} = 5$; the next is ranked 7.

*Scores 70, 65, 65, 50 (highest first) receive ranks* $1, 2.5, 2.5, 4$.

The sum of the ranks is always $\\dfrac{n(n + 1)}{2}$ — a useful check. With many ties the formula is only approximate.

## Finding $\\sum d^2$ from $r_s$
Rearranging: $\\sum d^2 = \\dfrac{(1 - r_s)\\,n(n^2 - 1)}{6}$.
For $n = 8$ and $r_s = 0.5$: $\\sum d^2 = \\dfrac{0.5 \\times 8 \\times 63}{6} = 42$.

## Rank correlation and product-moment correlation
The **product-moment (Pearson) coefficient** uses the actual values and measures **linear** association; **Spearman's** uses ranks and measures whether the relationship is consistently increasing or decreasing. Spearman's is quicker and suits ordinal data.`,
    examples: `**Example 1.** For 5 pairs of ranks, $\\sum d^2 = 4$. Find $r_s$. *Solution:* $1 - \\dfrac{24}{120} = \\mathbf{0.8}$.

**Example 2.** Three candidates tie for 2nd, 3rd and 4th places. What rank does each receive? *Solution:* $\\dfrac{2 + 3 + 4}{3} = \\mathbf{3}$.

**Example 3.** Interpret $r_s = -0.9$. *Solution:* a **strong negative** correlation — high ranks in one go with low ranks in the other.`,
  },
  questions: [
    ["E", "The value of Spearman's rank correlation coefficient lies between", "$-1$ and $+1$", "0 and 1", "0 and 100", "$-10$ and $+10$", "A correlation coefficient cannot exceed 1 in size."],
    ["E", "A graph in which pairs of values of two variables are plotted as points is a", "scatter diagram", "histogram", "pie chart", "frequency polygon", "It shows the pattern of the relationship."],
    ["E", "Two candidates tie for the 2nd and 3rd positions. Each is given the rank", "2.5", "2", "3", "5", "The mean of 2 and 3."],
    ["M", "For 5 pairs of ranks, $\\sum d^2 = 4$. Spearman's rank correlation coefficient is", "0.8", "0.2", "0.6", "0.96", "$1 - \\frac{24}{120} = 0.8$."],
    ["M", "For 10 pairs of ranks, $\\sum d^2 = 33$. Spearman's coefficient is", "0.8", "0.2", "0.67", "0.33", "$1 - \\frac{198}{990} = 0.8$."],
    ["M", "When two judges rank a set of contestants in exactly the same order, the rank correlation coefficient is", "1", "0", "$-1$", "0.5", "$\\sum d^2 = 0$."],
    ["M", "For 6 pairs of ranks, $\\sum d^2 = 70$. Spearman's coefficient is", "$-1$", "1", "0", "$-0.5$", "$1 - \\frac{420}{210} = -1$."],
    ["H", "Judge X ranks five items 1, 2, 3, 4, 5 and Judge Y ranks them 3, 1, 2, 5, 4. Spearman's coefficient is", "0.6", "0.8", "0.4", "0.2", "$\\sum d^2 = 8$; $1 - \\frac{48}{120} = 0.6$."],
    ["H", "Three items tie for the 4th, 5th and 6th positions. The rank given to each is", "5", "4", "6", "4.5", "The mean of 4, 5 and 6."],
    ["H", "For 8 pairs of ranks, Spearman's coefficient is 0.5. The value of $\\sum d^2$ is", "42", "84", "21", "63", "$\\frac{0.5 \\times 8 \\times 63}{6} = 42$."],
  ],
  jamb: [
    ["M", "A rank correlation coefficient of $-0.9$ indicates", "a strong negative relationship", "a strong positive relationship", "no relationship", "a weak positive relationship", "The value is close to $-1$."],
    ["H", "For 7 pairs of ranks, $\\sum d^2 = 14$. Spearman's coefficient is", "0.75", "0.25", "0.5", "0.875", "$1 - \\frac{84}{336} = 0.75$."],
  ],
};
