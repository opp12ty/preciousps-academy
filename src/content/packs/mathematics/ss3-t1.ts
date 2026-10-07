import type { TermPlan } from "../types";

/** SS3 Mathematics, First Term — original Precious PS content following the NERDC 2025 scheme of work. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Review of Logarithms: Laws and Theory",
      subtopics: ["Laws of logarithms", "Change of base", "Logarithmic equations", "Application to complex calculations"],
      objectives: ["State and apply the laws of logarithms", "Change the base of a logarithm", "Solve equations involving logarithms", "Apply logarithms to complex calculations"],
      lesson: {
        title: "Theory of Logarithms",
        summary: "Revise the laws of logarithms and use them to simplify expressions and solve equations.",
        minutes: 40,
        notes: `## Definition
If $a^x = N$ then $\\log_a N = x$ (with $a > 0$, $a \\ne 1$, $N > 0$).

## The laws
| Law | Statement |
|---|---|
| product | $\\log_a (MN) = \\log_a M + \\log_a N$ |
| quotient | $\\log_a \\dfrac{M}{N} = \\log_a M - \\log_a N$ |
| power | $\\log_a M^n = n\\log_a M$ |
| root | $\\log_a \\sqrt[n]{M} = \\dfrac1n \\log_a M$ |
| unity | $\\log_a a = 1$ |
| zero | $\\log_a 1 = 0$ |
| change of base | $\\log_a N = \\dfrac{\\log_b N}{\\log_b a}$ |

Two useful consequences: $\\log_a b = \\dfrac{1}{\\log_b a}$ and $a^{\\log_a N} = N$.

## What the laws do **not** say
- $\\log(M + N) \\ne \\log M + \\log N$
- $\\dfrac{\\log M}{\\log N} \\ne \\log M - \\log N$

## Simplifying
- $\\log_{10} 25 + \\log_{10} 4 = \\log_{10} 100 = 2$
- $\\log_3 54 - \\log_3 2 = \\log_3 27 = 3$
- $\\dfrac{\\log 8}{\\log 2} = \\dfrac{3\\log 2}{\\log 2} = 3$
- $2\\log 5 + \\log 4 = \\log(25 \\times 4) = \\log 100 = 2$

## Expressing in terms of given logarithms
Given $\\log 2 = 0.3010$ and $\\log 3 = 0.4771$:
$\\log 18 = \\log(2 \\times 3^2) = 0.3010 + 2(0.4771) = 1.2552$.
$\\log 5 = \\log\\dfrac{10}{2} = 1 - 0.3010 = 0.6990$.

## Logarithmic equations
1. Combine the logarithms into a single logarithm on each side.
2. Remove the logarithms (or change to index form).
3. Solve, and **reject** any value that makes a logarithm of a negative number or zero.

$\\log_2 (x + 3) = 4 \\Rightarrow x + 3 = 16 \\Rightarrow x = 13$.
$\\log x + \\log(x - 3) = 1 \\Rightarrow x(x-3) = 10 \\Rightarrow (x-5)(x+2) = 0 \\Rightarrow x = 5$ (reject $-2$).

## Equations with the unknown as an index
Take logarithms of both sides: $2^x = 7 \\Rightarrow x = \\dfrac{\\log 7}{\\log 2} \\approx 2.81$.

## Complex calculations
For $\\sqrt[3]{\\dfrac{a^2 b}{c}}$: $\\log = \\tfrac13(2\\log a + \\log b - \\log c)$, then take the antilogarithm.`,
        examples: `**Example 1.** Simplify $\\log_3 54 - \\log_3 2$. *Solution:* $\\log_3 27 = \\mathbf{3}$.

**Example 2.** Given $\\log 2 = 0.3010$ and $\\log 3 = 0.4771$, find $\\log 18$. *Solution:* $0.3010 + 2(0.4771) = \\mathbf{1.2552}$.

**Example 3.** Solve $\\log_2 (x + 3) = 4$. *Solution:* $x + 3 = 2^4 = 16$, so $x = \\mathbf{13}$.`,
      },
      questions: [
        ["E", "By the product law, $\\log_a (MN)$ equals", "$\\log_a M + \\log_a N$", "$\\log_a M \\times \\log_a N$", "$\\log_a M - \\log_a N$", "$N\\log_a M$", "The logarithm of a product is the sum of the logarithms."],
        ["E", "Simplify $\\log_5 5$.", "1", "0", "5", "25", "Any base raised to the power 1 gives itself."],
        ["E", "Simplify $\\log_{10} 25 + \\log_{10} 4$.", "2", "29", "100", "1", "The sum is log 100."],
        ["M", "Simplify $\\log_3 54 - \\log_3 2$.", "3", "27", "52", "2", "The difference is log of 27 to base 3."],
        ["M", "Simplify $\\dfrac{\\log 8}{\\log 2}$.", "3", "4", "$\\log 4$", "$\\log 6$", "log 8 = 3 log 2."],
        ["M", "Solve $\\log_2 (x + 3) = 4$.", "13", "5", "19", "1", "x + 3 = 16. Answer: 13."],
        ["M", "Given $\\log 2 = 0.3010$ and $\\log 3 = 0.4771$, find $\\log 18$.", "1.2552", "0.7781", "1.0791", "0.9542", "log 2 + 2 log 3."],
        ["H", "Solve $\\log x + \\log (x - 3) = 1$.", "5", "$-2$", "10", "2", "x(x − 3) = 10; the negative root is rejected."],
        ["H", "If $\\log_a 2 = x$ and $\\log_a 3 = y$, then $\\log_a 12$ is", "$2x + y$", "$x + 2y$", "$2xy$", "$x^2 + y$", "12 = 2² × 3. Answer: $2x + y$."],
        ["H", "Evaluate $\\log_8 16$.", "$\\frac43$", "2", "$\\frac34$", "$\\frac12$", "log 16 ÷ log 8 = 4 log 2 ÷ 3 log 2."],
      ],
      jamb: [
        ["M", "Simplify $\\log_2 96 - 2\\log_2 6 + \\log_2 3$.", "3", "2", "8", "4", "96 × 3 ÷ 36 = 8, and log of 8 to base 2 is 3."],
        ["H", "If $\\log_{10} x = \\bar2.3675$ and $\\log_{10} y = 0.9750$, find $\\log_{10} (x \\div y)$.", "$\\bar3.3925$", "$\\bar1.3425$", "$\\bar2.6075$", "$\\bar3.6075$", "−1.6325 − 0.9750 = −2.6075, which is −3 + 0.3925."],
      ],
    },
    {
      week: 2,
      title: "Logic",
      subtopics: ["Simple and compound statements", "Logical operations and truth tables", "Conditional statements and indirect proof", "Equivalence and validity of arguments"],
      objectives: ["Distinguish simple from compound statements", "Construct truth tables for compound statements", "State the converse, inverse and contrapositive of a conditional", "Use truth tables to prove equivalence and test the validity of arguments"],
      lesson: {
        title: "Truth Tables and Valid Arguments",
        summary: "Build truth tables, prove logical equivalence and test arguments for validity.",
        minutes: 40,
        notes: `## Statements
A **statement** is a sentence that is either **true (T)** or **false (F)**, not both. A **compound statement** joins simple statements with connectives.

## Connectives
| Name | Symbol | True when |
|---|---|---|
| negation | $\\sim p$ | $p$ is false |
| conjunction | $p \\wedge q$ | both are true |
| disjunction | $p \\vee q$ | at least one is true |
| conditional | $p \\Rightarrow q$ | in every case **except** $p$ true and $q$ false |
| biconditional | $p \\Leftrightarrow q$ | $p$ and $q$ have the same truth value |

## Building a truth table
1. List all combinations of truth values ($2^n$ rows for $n$ statements).
2. Work out each part in its own column.
3. Combine to reach the final column.

**$(p \\wedge q) \\Rightarrow p$**
| $p$ | $q$ | $p \\wedge q$ | $(p \\wedge q) \\Rightarrow p$ |
|---|---|---|---|
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | T |
The last column is **all true**: the statement is a **tautology**. A statement that is always false is a **contradiction** (e.g. $p \\wedge \\sim p$).

## Equivalence
Two statements are **logically equivalent** ($\\equiv$) if their final columns are identical.
- $p \\Rightarrow q \\equiv \\sim p \\vee q$
- $p \\Rightarrow q \\equiv \\sim q \\Rightarrow \\sim p$ (**contrapositive**)
- **De Morgan:** $\\sim(p \\wedge q) \\equiv \\sim p \\vee \\sim q$; $\\sim(p \\vee q) \\equiv \\sim p \\wedge \\sim q$

## Related conditionals
From $p \\Rightarrow q$: **converse** $q \\Rightarrow p$; **inverse** $\\sim p \\Rightarrow \\sim q$; **contrapositive** $\\sim q \\Rightarrow \\sim p$. The converse and the inverse are equivalent to each other, but not to the original.

## Indirect proof
To prove $p \\Rightarrow q$ **indirectly**, assume $q$ is **false** and show that this leads to $p$ being false or to a contradiction (proof by contrapositive or by contradiction).
*Prove: if $n^2$ is even then $n$ is even.* Suppose $n$ is odd; then $n^2$ is odd — contradicting "$n^2$ is even". Hence $n$ is even.

## Valid arguments
An argument has **premises** and a **conclusion**. It is **valid** if the conclusion is true whenever all the premises are true.
| Form | Premises | Conclusion |
|---|---|---|
| **modus ponens** | $p \\Rightarrow q$; $p$ | $q$ |
| **modus tollens** | $p \\Rightarrow q$; $\\sim q$ | $\\sim p$ |
| **chain rule (syllogism)** | $p \\Rightarrow q$; $q \\Rightarrow r$ | $p \\Rightarrow r$ |
**Fallacies:** from $p \\Rightarrow q$ and $q$, concluding $p$ (affirming the consequent); from $p \\Rightarrow q$ and $\\sim p$, concluding $\\sim q$.

*If it rains, the match is cancelled. The match was not cancelled. Therefore it did not rain.* — valid (modus tollens).`,
        examples: `**Example 1.** Find the truth value of $\\sim p \\vee q$ when $p$ is true and $q$ is false. *Solution:* $\\sim p$ is F and $q$ is F, so the result is **F**.

**Example 2.** State the contrapositive of "If a shape is a square, then it is a rectangle." *Solution:* "**If a shape is not a rectangle, then it is not a square.**"

**Example 3.** "If Ada studies, she passes. Ada studied." What follows? *Solution:* **Ada passes** — a valid argument by modus ponens.`,
      },
      questions: [
        ["E", "A compound statement that is true for every combination of truth values is called a", "tautology", "contradiction", "converse", "fallacy", "Its final column contains only T."],
        ["E", "The number of rows in a truth table for two simple statements is", "4", "2", "8", "6", "2 to the power 2."],
        ["E", "The statement $p \\wedge \\sim p$ is", "a contradiction", "a tautology", "a conditional", "a valid argument", "A statement and its negation cannot both be true."],
        ["M", "When $p$ is true and $q$ is false, the truth value of $\\sim p \\vee q$ is", "false", "true", "undefined", "both", "Both parts are false."],
        ["M", "The statement $p \\Rightarrow q$ is logically equivalent to", "$\\sim p \\vee q$", "$p \\wedge q$", "$q \\Rightarrow p$", "$\\sim p \\Rightarrow \\sim q$", "Their truth-table columns are identical."],
        ["M", "From the premises '$p \\Rightarrow q$' and '$p$', the valid conclusion is", "$q$", "$\\sim q$", "$\\sim p$", "$q \\Rightarrow p$", "This form is modus ponens."],
        ["M", "The inverse of $p \\Rightarrow q$ is", "$\\sim p \\Rightarrow \\sim q$", "$q \\Rightarrow p$", "$\\sim q \\Rightarrow \\sim p$", "$p \\wedge \\sim q$", "Both parts are negated without interchange."],
        ["H", "'If it rains, the match is cancelled. The match was not cancelled.' The valid conclusion is", "It did not rain", "It rained", "The match was played in the rain", "No conclusion is possible", "This is modus tollens."],
        ["H", "'If a number is divisible by 6, it is even. 8 is even. Therefore 8 is divisible by 6.' This argument is", "invalid — it affirms the consequent", "valid by modus ponens", "valid by modus tollens", "valid by the chain rule", "q being true does not prove p."],
        ["H", "By De Morgan's law, $\\sim(p \\vee q)$ is equivalent to", "$\\sim p \\wedge \\sim q$", "$\\sim p \\vee \\sim q$", "$p \\wedge q$", "$\\sim p \\Rightarrow q$", "Negating 'or' gives 'and' of the negations."],
      ],
      jamb: [
        ["M", "If $p$ is true and $q$ is false, which of the following is true?", "$p \\vee q$", "$p \\wedge q$", "$p \\Rightarrow q$", "$p \\Leftrightarrow q$", "A disjunction is true when one part is true."],
        ["H", "From '$p \\Rightarrow q$' and '$q \\Rightarrow r$' one may validly conclude", "$p \\Rightarrow r$", "$r \\Rightarrow p$", "$\\sim p \\Rightarrow \\sim r$", "$p \\wedge r$", "This is the chain rule."],
      ],
    },
    {
      week: 3,
      title: "Application of Surds to Trigonometry",
      subtopics: ["Simplifying surds", "Trigonometric ratios of 30, 45 and 60 degrees in surd form", "Graphs of sine and cosine from 0 to 360 degrees", "Graphical solution of trigonometric equations"],
      objectives: ["Simplify and rationalise surds", "Evaluate expressions involving special angles in surd form", "Draw and interpret graphs of sine and cosine", "Solve trigonometric equations graphically"],
      lesson: {
        title: "Surds and the Special Angles",
        summary: "Use surds to work exactly with trigonometric ratios and solve equations from sine and cosine graphs.",
        minutes: 40,
        notes: `## Surds
A **surd** is an irrational root such as $\\sqrt2$, $\\sqrt3$, $\\sqrt5$.
### Rules
- $\\sqrt{ab} = \\sqrt a \\times \\sqrt b$; $\\sqrt{\\dfrac ab} = \\dfrac{\\sqrt a}{\\sqrt b}$
- **Simplify:** $\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt2$
- **Like surds** add: $3\\sqrt2 + 5\\sqrt2 = 8\\sqrt2$
- $(\\sqrt a + \\sqrt b)(\\sqrt a - \\sqrt b) = a - b$
### Rationalising the denominator
- $\\dfrac{1}{\\sqrt3} = \\dfrac{\\sqrt3}{3}$
- $\\dfrac{1}{2 + \\sqrt3} = \\dfrac{2 - \\sqrt3}{(2+\\sqrt3)(2-\\sqrt3)} = 2 - \\sqrt3$ (multiply by the **conjugate**)

## Special angles in surd form
| Angle | sin | cos | tan |
|---|---|---|---|
| 30° | $\\frac12$ | $\\frac{\\sqrt3}{2}$ | $\\frac{\\sqrt3}{3}$ |
| 45° | $\\frac{\\sqrt2}{2}$ | $\\frac{\\sqrt2}{2}$ | 1 |
| 60° | $\\frac{\\sqrt3}{2}$ | $\\frac12$ | $\\sqrt3$ |
(From the right-angled isosceles triangle $1, 1, \\sqrt2$ and half the equilateral triangle $1, \\sqrt3, 2$.)

## Exact evaluation
- $\\sin60°\\cos30° + \\cos60°\\sin30° = \\tfrac34 + \\tfrac14 = 1$
- $\\dfrac{\\sin45°}{\\cos30°} = \\dfrac{\\sqrt2/2}{\\sqrt3/2} = \\dfrac{\\sqrt2}{\\sqrt3} = \\dfrac{\\sqrt6}{3}$
- $\\tan60° - \\tan30° = \\sqrt3 - \\dfrac{\\sqrt3}{3} = \\dfrac{2\\sqrt3}{3}$
- $\\dfrac{1}{1 - \\sin45°} = \\dfrac{2}{2 - \\sqrt2} = 2 + \\sqrt2$

## Exact lengths
A ladder leaning at 60° with its foot 4 m from the wall has length $\\dfrac{4}{\\cos60°} = 8$ m and reaches $4\\tan60° = 4\\sqrt3$ m.

## Graphs of sine and cosine (0° to 360°)
| $\\theta$ | 0° | 90° | 180° | 270° | 360° |
|---|---|---|---|---|---|
| $\\sin\\theta$ | 0 | 1 | 0 | −1 | 0 |
| $\\cos\\theta$ | 1 | 0 | −1 | 0 | 1 |
Both are smooth waves of **period 360°** and **amplitude 1**. For $y = a\\sin\\theta + b\\cos\\theta$, make a table in steps of 30° and plot.

## Solving equations graphically
- $\\sin\\theta = k$: draw the line $y = k$ and read the $\\theta$-values where it meets the curve.
- $2\\sin\\theta = \\cos\\theta + 1$: draw $y = 2\\sin\\theta$ and $y = \\cos\\theta + 1$ on the same axes; the solutions are the $\\theta$-coordinates of the **points of intersection**.
- Trigonometric and linear: to solve $\\sin\\theta = \\dfrac{\\theta}{180}$, draw the curve and the straight line together.

## Signs in the quadrants
1st: all positive; 2nd: sine; 3rd: tangent; 4th: cosine.
$\\sin\\theta = \\dfrac{\\sqrt3}{2} \\Rightarrow \\theta = 60°$ or $120°$; $\\cos\\theta = -\\dfrac{\\sqrt2}{2} \\Rightarrow \\theta = 135°$ or $225°$.`,
        examples: `**Example 1.** Rationalise $\\dfrac{6}{\\sqrt3}$. *Solution:* $\\dfrac{6\\sqrt3}{3} = \\mathbf{2\\sqrt3}$.

**Example 2.** Evaluate $\\tan 60° - \\tan 30°$ in surd form. *Solution:* $\\sqrt3 - \\dfrac{\\sqrt3}{3} = \\mathbf{\\dfrac{2\\sqrt3}{3}}$.

**Example 3.** Solve $\\cos\\theta = -\\dfrac{\\sqrt2}{2}$ for $0° \\le \\theta \\le 360°$. *Solution:* related angle 45°; second and third quadrants: $\\mathbf{135°}$ and $\\mathbf{225°}$.`,
      },
      questions: [
        ["E", "Simplify $\\sqrt{98}$.", "$7\\sqrt2$", "$2\\sqrt7$", "$49\\sqrt2$", "$14\\sqrt7$", "98 = 49 × 2. Answer: $7\\sqrt2$."],
        ["E", "In surd form, $\\cos 30°$ is", "$\\frac{\\sqrt3}{2}$", "$\\frac12$", "$\\frac{\\sqrt2}{2}$", "$\\sqrt3$", "From the half equilateral triangle."],
        ["E", "Simplify $3\\sqrt2 + 5\\sqrt2$.", "$8\\sqrt2$", "$8\\sqrt4$", "$15\\sqrt2$", "$16$", "Like surds are added like like terms."],
        ["M", "Rationalise $\\dfrac{6}{\\sqrt3}$.", "$2\\sqrt3$", "$6\\sqrt3$", "$\\frac{\\sqrt3}{2}$", "$3\\sqrt2$", "Multiply top and bottom by √3."],
        ["M", "Evaluate $\\sin 60° \\cos 30° + \\cos 60° \\sin 30°$.", "1", "$\\frac{\\sqrt3}{2}$", "$\\frac12$", "$\\frac34$", "3/4 + 1/4. Answer: 1."],
        ["M", "Evaluate $\\tan 60° - \\tan 30°$.", "$\\frac{2\\sqrt3}{3}$", "$\\frac{\\sqrt3}{3}$", "$2\\sqrt3$", "$\\sqrt3$", "√3 − √3/3. Answer: $\\frac{2\\sqrt3}{3}$."],
        ["M", "The solutions of $\\sin\\theta = \\frac{\\sqrt3}{2}$ for $0° \\le \\theta \\le 360°$ are", "60° and 120°", "30° and 150°", "60° and 300°", "120° and 240°", "Sine is positive in the first and second quadrants."],
        ["H", "Simplify $\\dfrac{1}{2 + \\sqrt3}$.", "$2 - \\sqrt3$", "$2 + \\sqrt3$", "$\\frac{2 - \\sqrt3}{7}$", "$\\sqrt3 - 2$", "Multiply by the conjugate; the denominator becomes 1."],
        ["H", "Simplify $\\dfrac{\\sin 45°}{\\cos 30°}$, giving the answer with a rational denominator.", "$\\frac{\\sqrt6}{3}$", "$\\frac{\\sqrt6}{2}$", "$\\frac{\\sqrt2}{3}$", "$\\frac{2\\sqrt3}{3}$", "√2/√3 = √6/3. Answer: $\\frac{\\sqrt6}{3}$."],
        ["H", "To solve $2\\sin\\theta = \\cos\\theta + 1$ graphically, one reads the", "θ-values where the two curves intersect", "highest point of each curve", "points where each curve cuts the vertical axis", "area between the curves", "At an intersection both sides are equal."],
      ],
      jamb: [
        ["M", "Simplify $(\\sqrt5 + \\sqrt3)(\\sqrt5 - \\sqrt3)$.", "2", "8", "$2\\sqrt{15}$", "$\\sqrt2$", "Difference of two squares: 5 − 3."],
        ["H", "If $\\cos\\theta = \\frac{\\sqrt3}{2}$ and $\\theta$ is acute, evaluate $\\dfrac{1 - \\sin\\theta}{\\tan\\theta}$.", "$\\frac{\\sqrt3}{2}$", "$\\frac{\\sqrt3}{6}$", "$\\sqrt3$", "$\\frac12$", "θ = 30°: (1 − 1/2) ÷ (1/√3) = √3/2."],
      ],
    },
    {
      week: 4,
      title: "Matrices and Determinants",
      subtopics: ["Definition, order and types of matrices", "Addition, subtraction and multiplication", "Transpose and determinant", "Solving simultaneous equations with matrices"],
      objectives: ["State the order and type of a matrix", "Add, subtract and multiply matrices", "Find the transpose, determinant and inverse of a 2 by 2 matrix", "Solve simultaneous linear equations using matrices"],
      lesson: {
        title: "Working with Matrices",
        summary: "Carry out matrix operations, find determinants and inverses, and solve simultaneous equations.",
        minutes: 40,
        notes: `## Definition and order
A **matrix** is a rectangular array of numbers in **rows and columns**. A matrix with $m$ rows and $n$ columns has **order $m \\times n$**.
$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix} \\text{ is } 2 \\times 3.$$

## Types
row matrix; column matrix; **square** matrix (rows = columns); **zero (null)** matrix; **diagonal** matrix; **identity (unit)** matrix $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$; **symmetric** matrix ($A^T = A$).

## Addition, subtraction, scalar multiplication
Matrices of the **same order** are added or subtracted element by element. A scalar multiplies every element.

## Multiplication
$AB$ exists only if the **number of columns of $A$ = number of rows of $B$**. An $m \\times n$ matrix times an $n \\times p$ matrix gives an $m \\times p$ matrix. Multiply **row by column**:
$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\begin{pmatrix} p & q \\\\ r & s \\end{pmatrix} = \\begin{pmatrix} ap+br & aq+bs \\\\ cp+dr & cq+ds \\end{pmatrix}$$
In general $AB \\ne BA$; but $AI = IA = A$.

## Transpose
$A^T$ is obtained by **interchanging rows and columns**.

## Determinant of a $2 \\times 2$ matrix
$$\\left|\\begin{matrix} a & b \\\\ c & d \\end{matrix}\\right| = ad - bc$$
If the determinant is **zero**, the matrix is **singular** and has no inverse.

## Determinant of a $3 \\times 3$ matrix
Expand along the first row:
$$\\left|\\begin{matrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{matrix}\\right| = a(ei - fh) - b(di - fg) + c(dh - eg)$$

## Inverse of a $2 \\times 2$ matrix
$$A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$
Swap the leading diagonal, change the signs of the other diagonal, divide by the determinant. $AA^{-1} = I$.

## Simultaneous equations
$2x + y = 7$, $x + 3y = 11$ is $\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix}$.
### Inverse method
$\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\dfrac15\\begin{pmatrix} 3 & -1 \\\\ -1 & 2 \\end{pmatrix}\\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix} = \\dfrac15\\begin{pmatrix} 10 \\\\ 15 \\end{pmatrix}$, so $x = 2$, $y = 3$.
### Cramer's rule
$x = \\dfrac{\\Delta_x}{\\Delta}$, $y = \\dfrac{\\Delta_y}{\\Delta}$, where $\\Delta$ is the determinant of coefficients and $\\Delta_x$, $\\Delta_y$ replace the $x$- or $y$-column by the constants.
$\\Delta = 5$; $\\Delta_x = 7(3) - 1(11) = 10$; $\\Delta_y = 2(11) - 7(1) = 15$.`,
        examples: `**Example 1.** Find the determinant of $\\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$. *Solution:* $3(4) - 2(1) = \\mathbf{10}$.

**Example 2.** Find the inverse of $\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$. *Solution:* determinant $5$; inverse $= \\mathbf{\\dfrac15\\begin{pmatrix} 3 & -1 \\\\ -1 & 2 \\end{pmatrix}}$.

**Example 3.** For what value of $k$ is $\\begin{pmatrix} k & 6 \\\\ 2 & 3 \\end{pmatrix}$ singular? *Solution:* $3k - 12 = 0$, so $k = \\mathbf{4}$.`,
      },
      questions: [
        ["E", "A matrix with 2 rows and 3 columns is of order", "$2 \\times 3$", "$3 \\times 2$", "$6$", "$2 + 3$", "Rows are stated first."],
        ["E", "A matrix whose determinant is zero is called", "singular", "identity", "diagonal", "symmetric", "It has no inverse."],
        ["E", "The transpose of a matrix is obtained by", "interchanging its rows and columns", "multiplying it by itself", "changing the signs of all elements", "dividing by its determinant", "Row 1 becomes column 1, and so on."],
        ["M", "The determinant of $\\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$ is", "10", "14", "5", "$-10$", "3 × 4 − 2 × 1. Answer: 10."],
        ["M", "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 5 \\end{pmatrix}$, the element in the first row and first column of $AB$ is", "4", "2", "3", "10", "1 × 2 + 2 × 1. Answer: 4."],
        ["M", "A $2 \\times 3$ matrix multiplied by a $3 \\times 4$ matrix gives a matrix of order", "$2 \\times 4$", "$3 \\times 3$", "$4 \\times 2$", "$6 \\times 12$", "Outer dimensions of the product."],
        ["M", "The matrix $\\begin{pmatrix} k & 6 \\\\ 2 & 3 \\end{pmatrix}$ is singular when $k$ equals", "4", "9", "1", "$-4$", "3k − 12 = 0. Answer: 4."],
        ["H", "The inverse of $\\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$ is", "$\\frac15\\begin{pmatrix} 3 & -1 \\\\ -1 & 2 \\end{pmatrix}$", "$\\frac15\\begin{pmatrix} 2 & -1 \\\\ -1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -1 \\\\ -1 & 2 \\end{pmatrix}$", "$\\frac17\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$", "Swap the leading diagonal, negate the other, divide by 5."],
        ["H", "Using matrices, the solution of $2x + y = 7$ and $x + 3y = 11$ is", "$x = 2$, $y = 3$", "$x = 3$, $y = 2$", "$x = 1$, $y = 5$", "$x = 4$, $y = -1$", "Δ = 5, Δx = 10, Δy = 15."],
        ["H", "Evaluate $\\left|\\begin{matrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{matrix}\\right|$.", "1", "$-1$", "25", "0", "1(0 − 24) − 2(0 − 20) + 3(0 − 5)."],
      ],
      jamb: [
        ["M", "If $\\left|\\begin{matrix} x & 3 \\\\ 2 & 7 \\end{matrix}\\right| = 15$, find $x$.", "3", "$\\frac97$", "9", "$-3$", "7x − 6 = 15. Answer: 3."],
        ["H", "If $P = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$, find $P^2$.", "$\\begin{pmatrix} 7 & 18 \\\\ 6 & 19 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 9 \\\\ 1 & 16 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 6 \\\\ 18 & 19 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 6 \\\\ 2 & 8 \\end{pmatrix}$", "Multiply row by column: 4+3, 6+12, 2+4, 3+16."],
      ],
    },
    {
      week: 6,
      title: "Linear and Quadratic Equations",
      subtopics: ["Simultaneous linear and quadratic equations by substitution", "Graphical solution", "Interpreting graphs", "Word problems"],
      objectives: ["Solve one linear and one quadratic equation simultaneously by substitution", "Solve them graphically", "Interpret the points of intersection of a line and a curve", "Solve word problems leading to such equations"],
      lesson: {
        title: "One Linear, One Quadratic",
        summary: "Solve simultaneous equations in which one is linear and the other quadratic, algebraically and graphically.",
        minutes: 40,
        notes: `## The algebraic method (substitution)
1. From the **linear** equation, make one variable the subject.
2. **Substitute** into the quadratic equation.
3. Solve the resulting quadratic in one variable.
4. Substitute back into the **linear** equation to find the other variable.
5. Give the answers in **pairs**.

### Example
Solve $y = x + 1$ and $x^2 + y^2 = 25$.
$x^2 + (x+1)^2 = 25 \\Rightarrow 2x^2 + 2x - 24 = 0 \\Rightarrow x^2 + x - 12 = 0 \\Rightarrow (x-3)(x+4) = 0$.
$x = 3, y = 4$ or $x = -4, y = -3$.

### Example
Solve $x + y = 5$ and $xy = 6$.
$y = 5 - x$; $x(5 - x) = 6 \\Rightarrow x^2 - 5x + 6 = 0 \\Rightarrow x = 2$ or $3$. Pairs: $(2, 3)$ and $(3, 2)$.

### Example
Solve $y = 2x - 1$ and $y = x^2 - 4$.
$x^2 - 2x - 3 = 0 \\Rightarrow x = 3$ or $-1$; pairs $(3, 5)$ and $(-1, -3)$.

## The quadratic formula
When the quadratic will not factorise:
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

## The graphical method
Draw the **curve** and the **straight line** on the same axes. The **coordinates of the points of intersection** are the solutions.
- two points of intersection → **two** solutions
- line **touches** the curve (tangent) → **one** repeated solution
- no intersection → **no real** solution
The number of solutions matches the **discriminant** $b^2 - 4ac$ of the combined quadratic: positive, zero or negative.

### Using one graph to solve another equation
With the graph of $y = x^2 - 2x - 3$ drawn, to solve $x^2 - 3x - 1 = 0$: rewrite as $x^2 - 2x - 3 = x - 2$ and draw the line $y = x - 2$. Read the $x$-coordinates of the intersections.

## Word problems
*The sum of two numbers is 9 and the sum of their squares is 41.* $x + y = 9$, $x^2 + y^2 = 41$: $x^2 + (9-x)^2 = 41 \\Rightarrow x^2 - 9x + 20 = 0 \\Rightarrow x = 4$ or $5$. The numbers are 4 and 5.

*A rectangle has perimeter 20 cm and area 24 cm².* $l + b = 10$, $lb = 24$: $l = 6$, $b = 4$.

### Business applications
A firm's revenue $R = 20x - x^2$ and cost $C = 4x + 28$ (in ₦ thousand) are equal at the **break-even** points: $x^2 - 16x + 28 = 0 \\Rightarrow x = 2$ or $14$. Such models are used in analysing prices and returns in the capital market.

## Checks
Substitute each pair into **both** original equations.`,
        examples: `**Example 1.** Solve $x + y = 5$ and $xy = 6$. *Solution:* $x^2 - 5x + 6 = 0$; pairs $\\mathbf{(2, 3)}$ and $\\mathbf{(3, 2)}$.

**Example 2.** Solve $y = x + 1$ and $x^2 + y^2 = 25$. *Solution:* $x^2 + x - 12 = 0$; $\\mathbf{(3, 4)}$ and $\\mathbf{(-4, -3)}$.

**Example 3.** How many solutions are there if a line is a tangent to a curve? *Solution:* **one** (repeated) solution — the line touches the curve at a single point.`,
      },
      questions: [
        ["E", "In solving a linear and a quadratic equation simultaneously, the first step is to", "make one variable the subject of the linear equation", "square both equations", "add the two equations", "differentiate the quadratic", "It is then substituted into the quadratic."],
        ["E", "On a graph, the solutions of a linear and a quadratic equation are the", "points where the line meets the curve", "points where the curve cuts the y-axis", "turning points of the curve", "ends of the line", "Both equations are satisfied there."],
        ["E", "If a straight line does not meet a curve, the simultaneous equations have", "no real solution", "one solution", "two solutions", "infinitely many solutions", "There is no common point."],
        ["M", "Solve $x + y = 5$ and $xy = 6$.", "(2, 3) and (3, 2)", "(1, 6) and (6, 1)", "(2, 3) only", "(−2, −3) and (−3, −2)", "x² − 5x + 6 = 0."],
        ["M", "Solve $y = 2x - 1$ and $y = x^2 - 4$.", "(3, 5) and (−1, −3)", "(3, 5) and (1, 1)", "(−3, −7) and (1, 1)", "(2, 3) and (−2, −5)", "x² − 2x − 3 = 0."],
        ["M", "The sum of two numbers is 9 and the sum of their squares is 41. The numbers are", "4 and 5", "3 and 6", "2 and 7", "1 and 8", "x² − 9x + 20 = 0."],
        ["M", "A line that touches a curve at exactly one point gives", "one repeated solution", "two distinct solutions", "no solution", "three solutions", "The line is a tangent."],
        ["H", "Solve $y = x + 1$ and $x^2 + y^2 = 25$.", "(3, 4) and (−4, −3)", "(4, 5) and (−3, −2)", "(3, 4) and (4, 3)", "(0, 5) and (5, 0)", "x² + x − 12 = 0."],
        ["H", "A rectangle has perimeter 20 cm and area 24 cm². Its dimensions are", "6 cm by 4 cm", "8 cm by 3 cm", "12 cm by 2 cm", "5 cm by 5 cm", "l + b = 10 and lb = 24."],
        ["H", "Given the graph of $y = x^2 - 2x - 3$, the equation $x^2 - 3x - 1 = 0$ is solved by drawing the line", "$y = x - 2$", "$y = 3x + 1$", "$y = -x + 2$", "$y = x + 2$", "x² − 2x − 3 = x − 2 rearranges to the required equation."],
      ],
      jamb: [
        ["M", "If $x - y = 1$ and $x^2 - y^2 = 7$, find $x + y$.", "7", "6", "8", "1", "x² − y² = (x − y)(x + y)."],
        ["H", "Find the values of $x$ for which the line $y = x + 3$ meets the curve $y = x^2 - 3x - 2$.", "5 and −1", "−5 and 1", "3 and −2", "2 and −3", "x² − 4x − 5 = 0."],
      ],
    },
    {
      week: 8,
      title: "Surface Area and Volume of Spheres and Hemispheres",
      subtopics: ["Surface area and volume of a sphere", "Hemispheres", "Hollow spheres", "Word problems"],
      objectives: ["Calculate the surface area and volume of a sphere", "Calculate the surface areas and volume of a hemisphere", "Calculate the volume of material in a hollow sphere", "Solve word problems involving spheres"],
      lesson: {
        title: "Spheres and Hemispheres",
        summary: "Calculate surface areas and volumes of solid and hollow spheres and hemispheres.",
        minutes: 40,
        notes: `## The sphere
A **sphere** is the set of all points in space at a fixed distance (the **radius** $r$) from a fixed point (the centre).
$$\\text{Surface area} = 4\\pi r^2 \\qquad \\text{Volume} = \\tfrac43\\pi r^3$$

*Radius 7 cm ($\\pi = \\tfrac{22}{7}$):* area $= 4 \\times \\tfrac{22}{7} \\times 49 = 616$ cm²; volume $= \\tfrac43 \\times \\tfrac{22}{7} \\times 343 = 1437\\tfrac13$ cm³.

## The hemisphere
Half a sphere.
| Quantity | Formula |
|---|---|
| **curved** surface area | $2\\pi r^2$ |
| **total** surface area (solid, with flat face) | $2\\pi r^2 + \\pi r^2 = 3\\pi r^2$ |
| volume | $\\tfrac23\\pi r^3$ |
A hemispherical **bowl** (open) has only the curved surface $2\\pi r^2$ on the outside.

## Hollow sphere (spherical shell)
With outer radius $R$ and inner radius $r$:
$$\\text{Volume of material} = \\tfrac43\\pi(R^3 - r^3)$$
*$R = 5$ cm, $r = 4$ cm:* $\\tfrac43\\pi(125 - 64) = \\tfrac{244}{3}\\pi \\approx 255.6$ cm³.

## Finding the radius
- Surface area $616$ cm²: $4 \\times \\tfrac{22}{7} r^2 = 616 \\Rightarrow r^2 = 49 \\Rightarrow r = 7$ cm.
- Volume $36\\pi$ cm³: $\\tfrac43 r^3 = 36 \\Rightarrow r^3 = 27 \\Rightarrow r = 3$ cm.

## Scale effects
If the radius is **doubled**, the surface area becomes **4 times** and the volume **8 times** as large.

## Melting and recasting
Volume is conserved.
- *A metal sphere of radius 6 cm is melted into small spheres of radius 2 cm:* number $= \\dfrac{6^3}{2^3} = 27$.
- *A sphere of radius 3 cm is melted into a cylinder of radius 3 cm:* $\\tfrac43\\pi(27) = \\pi(9)h \\Rightarrow h = 4$ cm.

## Displacement
A solid sphere lowered into a cylinder of water raises the level by $h$ where $\\pi R^2 h = \\tfrac43\\pi r^3$.

## Compound solids
- **Cone on a hemisphere** (a toy or ice-cream shape): $\\tfrac13\\pi r^2 h + \\tfrac23\\pi r^3$.
- **Cylinder with hemispherical ends** (a capsule): $\\pi r^2 h + \\tfrac43\\pi r^3$.
- Surface area: add only the **exposed** faces.

## In real life
footballs and globes; domes and water tanks; ball bearings; the earth is approximately a sphere of radius 6400 km.`,
        examples: `**Example 1.** Find the surface area of a sphere of radius 7 cm. ($\\pi = \\tfrac{22}{7}$) *Solution:* $4 \\times \\tfrac{22}{7} \\times 49 = \\mathbf{616}$ cm².

**Example 2.** Find the volume of a hemisphere of radius 3 cm in terms of $\\pi$. *Solution:* $\\tfrac23\\pi(27) = \\mathbf{18\\pi}$ cm³.

**Example 3.** How many spheres of radius 2 cm can be made from a sphere of radius 6 cm? *Solution:* $\\dfrac{6^3}{2^3} = \\mathbf{27}$.`,
      },
      questions: [
        ["E", "The formula for the surface area of a sphere is", "$4\\pi r^2$", "$\\frac43\\pi r^3$", "$2\\pi r^2$", "$\\pi r^2$", "Four times the area of a great circle."],
        ["E", "The formula for the volume of a sphere is", "$\\frac43\\pi r^3$", "$4\\pi r^2$", "$\\frac23\\pi r^3$", "$\\pi r^3$", "Four thirds of π r cubed."],
        ["E", "The curved surface area of a hemisphere is", "$2\\pi r^2$", "$3\\pi r^2$", "$4\\pi r^2$", "$\\pi r^2$", "Half the surface of the sphere."],
        ["M", "The surface area of a sphere of radius 7 cm is ($\\pi = \\frac{22}{7}$)", "616 cm²", "154 cm²", "1232 cm²", "308 cm²", "4 × 22/7 × 49. Answer: 616 cm²."],
        ["M", "The total surface area of a solid hemisphere of radius $r$ is", "$3\\pi r^2$", "$2\\pi r^2$", "$4\\pi r^2$", "$\\frac23\\pi r^2$", "Curved surface plus the flat circular face."],
        ["M", "The volume of a hemisphere of radius 3 cm, in terms of $\\pi$, is", "$18\\pi$ cm³", "$36\\pi$ cm³", "$9\\pi$ cm³", "$27\\pi$ cm³", "Two thirds of π × 27."],
        ["M", "The volume of a sphere is $36\\pi$ cm³. Its radius is", "3 cm", "6 cm", "9 cm", "4 cm", "r³ = 27. Answer: 3 cm."],
        ["H", "If the radius of a sphere is doubled, its volume is multiplied by", "8", "2", "4", "6", "Volume varies as the cube of the radius."],
        ["H", "A solid metal sphere of radius 6 cm is melted and recast into spheres of radius 2 cm. The number of small spheres is", "27", "9", "3", "18", "The ratio of the cubes of the radii."],
        ["H", "A sphere of radius 3 cm is melted and recast into a cylinder of radius 3 cm. The height of the cylinder is", "4 cm", "3 cm", "12 cm", "9 cm", "36π = 9πh. Answer: 4 cm."],
      ],
      jamb: [
        ["M", "Find the volume of a sphere of radius 3.5 cm, correct to the nearest cm³. ($\\pi = \\frac{22}{7}$)", "180 cm³", "154 cm³", "539 cm³", "90 cm³", "4/3 × 22/7 × 42.875 ≈ 179.7."],
        ["H", "A hollow sphere has an outer radius of 5 cm and an inner radius of 4 cm. Find the volume of the material, in terms of $\\pi$.", "$\\frac{244}{3}\\pi$ cm³", "$\\frac43\\pi$ cm³", "$61\\pi$ cm³", "$\\frac{500}{3}\\pi$ cm³", "4/3 π (125 − 64)."],
      ],
    },
    {
      week: 9,
      title: "Longitude and Latitude I",
      subtopics: ["The earth as a sphere", "Poles, equator, meridians and parallels", "Latitude and longitude of a place", "Radius and length of a parallel of latitude"],
      objectives: ["Identify the poles, equator, meridians and parallels of latitude", "State the position of a place by latitude and longitude", "Distinguish great circles from small circles", "Calculate the radius and length of a parallel of latitude"],
      lesson: {
        title: "The Earth as a Sphere",
        summary: "Describe positions on the earth and calculate the radius and length of a parallel of latitude.",
        minutes: 40,
        notes: `## The earth
The earth is taken to be a **sphere of radius $R = 6400$ km**. It rotates about its **axis**, which passes through the **North Pole (N)** and the **South Pole (S)**.

## Great and small circles
- A **great circle** is a circle on the sphere whose **centre is the centre of the earth**; its radius is $R$.
- A **small circle** has its centre elsewhere on the axis; its radius is less than $R$.

## Lines of latitude
- The **equator** is the great circle midway between the poles: **latitude 0°**.
- **Parallels of latitude** are circles **parallel to the equator**. All except the equator are **small circles**.
- **Latitude** is the angle a place makes at the centre of the earth, **north or south of the equator** — from 0° to 90°N or 90°S.

## Lines of longitude
- **Meridians** are **semicircles joining the poles**; every meridian is half of a **great circle**.
- The **Greenwich (prime) meridian** is longitude 0°.
- **Longitude** is the angle **east or west** of the Greenwich meridian — from 0° to 180°E or 180°W.

## Position
A place is located by its latitude and longitude, latitude first: Lagos is near **(6°N, 3°E)**.

## Radius of a parallel of latitude
For latitude $\\alpha$:
$$r = R\\cos\\alpha$$
(In the right-angled triangle formed by the centre of the earth, the centre of the small circle and a point on it, the angle at the earth's centre between the equatorial plane and the radius is $\\alpha$.)
- Latitude 60°: $r = 6400 \\times 0.5 = 3200$ km.
- At the poles ($\\alpha = 90°$), $r = 0$.

## Length (circumference) of a parallel of latitude
$$C = 2\\pi R\\cos\\alpha$$
- Equator: $2 \\times \\tfrac{22}{7} \\times 6400 \\approx 40\\,229$ km.
- Latitude 60°: half of that, about $20\\,114$ km.

## Difference in angle
| Places | Difference |
|---|---|
| same side (both N or both E) | **subtract** |
| opposite sides (N and S, or E and W) | **add** |
- Latitudes 20°N and 50°N: difference 30°.
- Latitudes 15°N and 25°S: difference 40°.
- Longitudes 10°W and 35°E: difference 45°.
If the sum of an east and a west longitude exceeds 180°, the shorter way round is $360°$ minus the sum.

## Facts to remember
- All **meridians** are great (semi)circles; the **equator** is the only parallel that is a great circle.
- Distance **along a meridian** uses $R$; distance **along a parallel** uses $R\\cos\\alpha$.`,
        examples: `**Example 1.** Find the radius of the parallel of latitude 60°N. ($R = 6400$ km) *Solution:* $6400 \\cos 60° = \\mathbf{3200}$ km.

**Example 2.** Find the difference in longitude between (20°N, 10°W) and (20°N, 35°E). *Solution:* opposite sides: $10° + 35° = \\mathbf{45°}$.

**Example 3.** Which parallel of latitude is a great circle? *Solution:* only the **equator**.`,
      },
      questions: [
        ["E", "The latitude of the equator is", "0°", "90°", "180°", "45°", "Latitude is measured from it."],
        ["E", "Lines joining the North and South Poles are called", "meridians", "parallels", "small circles", "tropics", "They are lines of longitude."],
        ["E", "Longitude 0° is the", "Greenwich meridian", "equator", "North Pole", "International Date Line", "It is also called the prime meridian."],
        ["M", "A circle on the earth's surface whose centre is the centre of the earth is a", "great circle", "small circle", "parallel", "tropic", "Its radius equals the radius of the earth."],
        ["M", "The radius of the parallel of latitude $\\alpha$ is", "$R\\cos\\alpha$", "$R\\sin\\alpha$", "$R\\tan\\alpha$", "$\\frac{R}{\\cos\\alpha}$", "It shrinks to zero at the poles."],
        ["M", "The radius of the parallel of latitude 60°N is ($R = 6400$ km)", "3200 km", "5543 km", "6400 km", "1600 km", "6400 × cos 60°."],
        ["M", "The difference in latitude between places at 15°N and 25°S is", "40°", "10°", "25°", "15°", "The places are on opposite sides of the equator."],
        ["H", "The difference in longitude between 10°W and 35°E is", "45°", "25°", "35°", "315°", "East and west longitudes are added."],
        ["H", "The length of the parallel of latitude 60°S, taking the equator as 40 000 km, is", "20 000 km", "34 641 km", "40 000 km", "10 000 km", "Multiply by cos 60°."],
        ["H", "Which of the following is always a great circle?", "a meridian together with its opposite meridian", "the parallel of latitude 30°N", "the Tropic of Cancer", "the Arctic Circle", "Its plane passes through the centre of the earth."],
      ],
      jamb: [
        ["M", "Two places X and Y are on longitudes 160°E and 150°W. The smaller angle between their meridians is", "50°", "310°", "10°", "130°", "160 + 150 = 310, and 360 − 310 = 50."],
        ["H", "Find the latitude on which the radius of the parallel is half the radius of the earth.", "60°", "30°", "45°", "90°", "cos α = 1/2. Answer: 60°."],
      ],
    },
    {
      week: 10,
      title: "Longitude and Latitude II",
      subtopics: ["Distance along a meridian", "Distance along a parallel of latitude", "Nautical miles and knots", "Longitude and time"],
      objectives: ["Calculate the distance between two places on the same meridian", "Calculate the distance between two places on the same parallel of latitude", "Use nautical miles and knots", "Calculate differences in local time from longitude"],
      lesson: {
        title: "Distances and Time on the Earth",
        summary: "Calculate distances along meridians and parallels and work out time differences from longitude.",
        minutes: 40,
        notes: `## Distance along a meridian (great circle)
For two places on the **same longitude** whose latitudes differ by $\\theta$:
$$d = \\frac{\\theta}{360°} \\times 2\\pi R$$
*A (50°N, 20°E) and B (20°N, 20°E):* $\\theta = 30°$; $d = \\tfrac{30}{360} \\times 2 \\times \\tfrac{22}{7} \\times 6400 \\approx 3352$ km.
The same formula serves for two places **on the equator**, with $\\theta$ the difference in longitude.

## Distance along a parallel of latitude
For two places on the **same latitude $\\alpha$** whose longitudes differ by $\\theta$:
$$d = \\frac{\\theta}{360°} \\times 2\\pi R\\cos\\alpha$$
*P (60°N, 10°W) and Q (60°N, 35°E):* $\\theta = 45°$; $d = \\tfrac{45}{360} \\times 2 \\times \\tfrac{22}{7} \\times 6400 \\times 0.5 \\approx 2514$ km.

## Shortest distance
The shortest distance between two places on the earth lies along the **great circle** through them. For two places on the same parallel but on **opposite meridians** (longitudes differing by 180°), the shortest route is **over the pole**: the angle is $180° - 2\\alpha$.

## Nautical miles and knots
- **1 nautical mile** is the length of arc of a great circle subtending **1 minute** ($\\tfrac{1}{60}°$) at the centre of the earth.
- so **1° on a great circle = 60 nautical miles**
- along a parallel of latitude $\\alpha$: distance $= 60\\theta\\cos\\alpha$ nautical miles
- **1 knot** = 1 nautical mile per hour
*30° along a meridian* $= 1800$ nautical miles; at 20 knots this takes 90 hours.

## Longitude and time
The earth turns through **360° in 24 hours**:
$$15° \\text{ in 1 hour} \\qquad 1° \\text{ in 4 minutes}$$
- Places to the **east are ahead** in time; places to the **west are behind**.
- Time difference $= \\dfrac{\\text{difference in longitude}}{15}$ hours.

*When it is 12 noon at Greenwich (0°), what is the local time at 45°E?* $45 \\div 15 = 3$ hours ahead: **3.00 p.m.**
*It is 9.00 a.m. at a place on 30°E. Find the local time at 15°W.* Difference $45°$ = 3 hours; west is behind: **6.00 a.m.**

## Speed of a point on the earth
A point on latitude $\\alpha$ moves round a circle of length $2\\pi R\\cos\\alpha$ in 24 hours.

## Steps for any problem
1. Sketch the earth with the two places.
2. Decide: same **meridian** (use $R$) or same **parallel** (use $R\\cos\\alpha$)?
3. Find the angular difference (add or subtract).
4. Apply the arc-length formula.`,
        examples: `**Example 1.** Find the distance along the meridian between A (50°N, 20°E) and B (20°N, 20°E). ($R = 6400$ km, $\\pi = \\tfrac{22}{7}$) *Solution:* $\\tfrac{30}{360} \\times 2 \\times \\tfrac{22}{7} \\times 6400 \\approx \\mathbf{3352}$ km.

**Example 2.** When it is noon at Greenwich, what is the local time at 45°E? *Solution:* $45 \\div 15 = 3$ h ahead: **3.00 p.m.**

**Example 3.** How many nautical miles is an arc of 30° along a meridian? *Solution:* $30 \\times 60 = \\mathbf{1800}$ nautical miles.`,
      },
      questions: [
        ["E", "The earth rotates through 15° of longitude in", "1 hour", "4 minutes", "24 hours", "15 minutes", "360° in 24 hours."],
        ["E", "The earth rotates through 1° of longitude in", "4 minutes", "1 minute", "15 minutes", "1 hour", "60 minutes ÷ 15."],
        ["E", "Places to the east of Greenwich have local times that are", "ahead of Greenwich time", "behind Greenwich time", "the same as Greenwich time", "exactly 12 hours different", "The sun reaches them earlier."],
        ["M", "The distance between two places on the same meridian whose latitudes differ by $\\theta$ is", "$\\frac{\\theta}{360°} \\times 2\\pi R$", "$\\frac{\\theta}{360°} \\times 2\\pi R\\cos\\alpha$", "$\\frac{\\theta}{180°} \\times \\pi R^2$", "$2\\pi R\\theta$", "A meridian is part of a great circle."],
        ["M", "When it is 12 noon at Greenwich, the local time at longitude 45°E is", "3.00 p.m.", "9.00 a.m.", "12.45 p.m.", "3.00 a.m.", "Three hours ahead."],
        ["M", "An arc of 1° on a great circle of the earth is", "60 nautical miles", "1 nautical mile", "15 nautical miles", "360 nautical miles", "One nautical mile subtends one minute of arc."],
        ["M", "The distance along the meridian between latitudes 50°N and 20°N is ($R = 6400$ km, $\\pi = \\frac{22}{7}$)", "about 3352 km", "about 6705 km", "about 1676 km", "about 2514 km", "30/360 of the circumference 40 229 km."],
        ["H", "P (60°N, 10°W) and Q (60°N, 35°E) lie on the same parallel. The distance PQ along the parallel is ($R = 6400$ km, $\\pi = \\frac{22}{7}$)", "about 2514 km", "about 5029 km", "about 4355 km", "about 1257 km", "45/360 × 2πR × cos 60°."],
        ["H", "It is 9.00 a.m. at a place on longitude 30°E. The local time at a place on longitude 15°W is", "6.00 a.m.", "12 noon", "8.00 a.m.", "10.00 a.m.", "45° is 3 hours, and west is behind."],
        ["H", "A ship sails 30° of latitude due north along a meridian at 20 knots. The journey takes", "90 hours", "30 hours", "60 hours", "150 hours", "1800 nautical miles ÷ 20."],
      ],
      jamb: [
        ["M", "Two towns on the equator are on longitudes 20°E and 50°E. Find the distance between them. ($R = 6400$ km, $\\pi = \\frac{22}{7}$)", "about 3352 km", "about 7822 km", "about 1676 km", "about 5587 km", "30/360 of 40 229 km."],
        ["H", "The local time at town A on longitude 5°W is 2.00 p.m. Find the local time at town B on longitude 40°E.", "5.00 p.m.", "11.00 a.m.", "4.20 p.m.", "5.40 p.m.", "45° is 3 hours, and east is ahead."],
      ],
    },
    {
      week: 11,
      title: "Binary Operations",
      subtopics: ["Definition of a binary operation", "Closure, commutativity and associativity", "Distributivity", "Identity and inverse elements"],
      objectives: ["Define a binary operation and evaluate given operations", "Test an operation for closure, commutativity and associativity", "Test one operation for distributivity over another", "Find the identity element and the inverse of an element"],
      lesson: {
        title: "Operations on Sets",
        summary: "Evaluate binary operations and investigate their properties, identity and inverses.",
        minutes: 40,
        notes: `## Definition
A **binary operation** $*$ on a set $S$ is a rule that combines **any two elements** of $S$ to give a single result. Addition, subtraction and multiplication of real numbers are binary operations.

*If $a * b = 2a + b$, then $3 * 4 = 2(3) + 4 = 10$.*

## Properties
### Closure
$S$ is **closed** under $*$ if $a * b$ is **in $S$** for all $a, b$ in $S$.
- Integers are closed under addition; **not** under division ($1 \\div 2$ is not an integer).

### Commutativity
$*$ is **commutative** if $a * b = b * a$ for all $a, b$.
- $a * b = a + b + ab$: $b * a = b + a + ba$ — commutative.
- $a * b = 2a + b$: $b * a = 2b + a$ — **not** commutative.

### Associativity
$*$ is **associative** if $(a * b) * c = a * (b * c)$.
- Addition and multiplication are associative; subtraction is not: $(8 - 3) - 2 = 3$ but $8 - (3 - 2) = 7$.

### Distributivity
$*$ is **distributive over** $\\circ$ if $a * (b \\circ c) = (a * b) \\circ (a * c)$.
- Multiplication is distributive over addition: $a(b + c) = ab + ac$.

## Identity element
An element $e$ is the **identity** if $a * e = e * a = a$ for every $a$.
- For addition, $e = 0$; for multiplication, $e = 1$.
- For $a * b = a + b - 3$: $a + e - 3 = a \\Rightarrow e = 3$.
- For $a * b = a + b + ab$: $a + e + ae = a \\Rightarrow e(1 + a) = 0 \\Rightarrow e = 0$.

## Inverse element
The **inverse** of $a$, written $a^{-1}$, satisfies $a * a^{-1} = e$.
- For $a * b = a + b - 3$ ($e = 3$): $a + a^{-1} - 3 = 3 \\Rightarrow a^{-1} = 6 - a$; the inverse of 5 is 1.
- For $a * b = a + b + ab$ ($e = 0$): $a + x + ax = 0 \\Rightarrow x = \\dfrac{-a}{1 + a}$; the inverse of 2 is $-\\tfrac23$; $-1$ has no inverse.

## Operation tables
An operation on a small set may be given by a **table**. For multiplication modulo 5 on $\\{1, 2, 3, 4\\}$:
| × | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 1 | 2 | 3 | 4 |
| **2** | 2 | 4 | 1 | 3 |
| **3** | 3 | 1 | 4 | 2 |
| **4** | 4 | 3 | 2 | 1 |
- **closed** — every entry is in the set
- **identity** is 1 (its row and column repeat the headings)
- **commutative** — the table is **symmetric** about the leading diagonal
- inverses: $2^{-1} = 3$, $3^{-1} = 2$, $4^{-1} = 4$

## Real-life examples
mixing two colours; combining two switches in a circuit; arithmetic on a clock.`,
        examples: `**Example 1.** If $a * b = 2a + b$, evaluate $3 * 4$. *Solution:* $2(3) + 4 = \\mathbf{10}$.

**Example 2.** Find the identity element of $a * b = a + b - 3$. *Solution:* $a + e - 3 = a$ gives $e = \\mathbf{3}$.

**Example 3.** For the same operation, find the inverse of 5. *Solution:* $5 + x - 3 = 3$ gives $x = \\mathbf{1}$.`,
      },
      questions: [
        ["E", "If $a * b = 2a + b$, evaluate $3 * 4$.", "10", "11", "14", "24", "2 × 3 + 4. Answer: 10."],
        ["E", "An operation $*$ is commutative if", "$a * b = b * a$", "$a * a = a$", "$a * e = e$", "$(a * b) * c = a$", "The order of the elements does not matter."],
        ["E", "The identity element for multiplication of real numbers is", "1", "0", "$-1$", "the number itself", "a × 1 = a. Answer: 1."],
        ["M", "If $x * y = x^2 - y$, evaluate $4 * 7$.", "9", "23", "45", "1", "16 − 7. Answer: 9."],
        ["M", "The set of integers is NOT closed under", "division", "addition", "subtraction", "multiplication", "1 ÷ 2 is not an integer."],
        ["M", "The identity element of the operation $a * b = a + b - 3$ is", "3", "0", "$-3$", "1", "a + e − 3 = a. Answer: 3."],
        ["M", "Which of the following operations on real numbers is not associative?", "subtraction", "addition", "multiplication", "taking the larger of two numbers", "(8 − 3) − 2 differs from 8 − (3 − 2)."],
        ["H", "Under the operation $a * b = a + b - 3$, the inverse of 5 is", "1", "$-5$", "3", "$-2$", "5 + x − 3 = 3. Answer: 1."],
        ["H", "Under $a * b = a + b + ab$, the inverse of 2 is", "$-\\frac23$", "$-2$", "$\\frac12$", "$\\frac23$", "The identity is 0, so 2 + x + 2x = 0."],
        ["H", "In the table for multiplication modulo 5 on {1, 2, 3, 4}, the inverse of 2 is", "3", "2", "4", "1", "2 × 3 = 6, which is 1 in modulo 5."],
      ],
      jamb: [
        ["M", "A binary operation is defined by $p * q = pq + p - q$. Evaluate $2 * (3 * 1)$.", "7", "5", "12", "10", "3 * 1 = 5; 2 * 5 = 10 + 2 − 5."],
        ["H", "An operation $\\oplus$ is defined on the real numbers by $m \\oplus n = m + n + 2$. Find the inverse of 4.", "$-8$", "$-4$", "$-6$", "$-2$", "The identity is −2, so 4 + x + 2 = −2."],
      ],
    },
    {
      week: 12,
      title: "Arithmetic of Finance",
      subtopics: ["Simple interest", "Compound interest", "Depreciation", "Annuities and amortisation"],
      objectives: ["Calculate simple interest and amount", "Calculate compound interest using the formula", "Calculate the value of an asset after depreciation", "Solve simple problems on annuities and amortisation"],
      lesson: {
        title: "Interest, Depreciation and Annuities",
        summary: "Solve problems on simple and compound interest, depreciation, annuities and amortisation.",
        minutes: 40,
        notes: `## Simple interest
Interest is charged on the **original principal only**.
$$I = \\frac{PRT}{100} \\qquad A = P + I$$
$P$ = principal, $R$ = rate % per annum, $T$ = time in years, $A$ = amount.
*₦20,000 at 5% for 3 years:* $I = \\dfrac{20\\,000 \\times 5 \\times 3}{100} = ₦3{,}000$; $A = ₦23{,}000$.
Rearranged: $P = \\dfrac{100I}{RT}$, $R = \\dfrac{100I}{PT}$, $T = \\dfrac{100I}{PR}$.

## Compound interest
Interest is added to the principal at the end of each period, so **interest earns interest**.
$$A = P\\left(1 + \\frac{r}{100}\\right)^n$$
Compound interest $= A - P$.
*₦10,000 at 10% for 2 years:* $A = 10\\,000(1.1)^2 = ₦12{,}100$; interest ₦2,100 (simple interest would be ₦2,000).
If interest is compounded **half-yearly**, use rate $\\tfrac r2$ and $2n$ periods.

## Depreciation
Assets such as vehicles and machines **lose value** with time.
$$A = P\\left(1 - \\frac{r}{100}\\right)^n$$
*A machine bought for ₦500,000 depreciates at 20% per annum.* After 2 years: $500\\,000(0.8)^2 = ₦320{,}000$.
(Appreciation and inflation use the plus sign.)

## Annuity
An **annuity** is a series of **equal payments at regular intervals** — pensions, insurance premiums, regular savings.
The **amount** of an annuity of $P$ paid at the end of each year for $n$ years at rate $r$ (as a decimal):
$$A = \\frac{P\\left[(1 + r)^n - 1\\right]}{r}$$
*₦10,000 saved at the end of each year for 3 years at 10%:* $A = \\dfrac{10\\,000(1.331 - 1)}{0.1} = ₦33{,}100$.
(Check: $10\\,000(1.21) + 10\\,000(1.1) + 10\\,000 = 33\\,100$.)

## Amortisation
**Amortisation** is the repayment of a loan, with interest, by **equal periodic instalments** — as with mortgages. Each instalment pays the interest due and reduces the principal.
For a loan $L$ at rate $r$ per period over $n$ periods, the instalment is
$$R = \\frac{Lr}{1 - (1 + r)^{-n}}$$
*₦100,000 at 10% repaid in 2 equal yearly instalments:* $R = \\dfrac{10\\,000}{1 - 1/1.21} = \\dfrac{10\\,000 \\times 1.21}{0.21} \\approx ₦57{,}619$.

## Using logarithms
For large $n$, evaluate $(1 + r)^n$ with logarithms: $\\log A = \\log P + n\\log(1 + r)$.

## Why it matters
Banks, co-operatives, pension funds and the capital market all work on these principles; understanding them guards against bad loans and helps in planning savings.`,
        examples: `**Example 1.** Find the simple interest on ₦20,000 at 5% per annum for 3 years. *Solution:* $\\dfrac{20\\,000 \\times 5 \\times 3}{100} = \\mathbf{₦3{,}000}$.

**Example 2.** Find the compound interest on ₦10,000 at 10% per annum for 2 years. *Solution:* $A = 10\\,000(1.1)^2 = ₦12{,}100$; interest $= \\mathbf{₦2{,}100}$.

**Example 3.** A car bought for ₦500,000 depreciates at 20% per annum. Find its value after 2 years. *Solution:* $500\\,000(0.8)^2 = \\mathbf{₦320{,}000}$.`,
      },
      questions: [
        ["E", "The formula for simple interest is", "$I = \\frac{PRT}{100}$", "$I = P(1 + r)^n$", "$I = \\frac{100P}{RT}$", "$I = PRT$", "Principal × rate × time ÷ 100."],
        ["E", "The simple interest on ₦20,000 at 5% per annum for 3 years is", "₦3,000", "₦1,000", "₦23,000", "₦300", "20 000 × 5 × 3 ÷ 100."],
        ["E", "A series of equal payments made at regular intervals is called", "an annuity", "depreciation", "a dividend", "a premium only", "Pensions and regular savings are examples."],
        ["M", "₦10,000 is invested at 10% per annum compound interest. The amount after 2 years is", "₦12,100", "₦12,000", "₦11,000", "₦21,000", "10 000 × 1.1². Answer: ₦12,100."],
        ["M", "The fall in the value of an asset over time is called", "depreciation", "appreciation", "amortisation", "inflation", "Vehicles and machines lose value."],
        ["M", "A principal of ₦8,000 earns ₦1,600 simple interest in 4 years. The rate per annum is", "5%", "4%", "20%", "8%", "100 × 1600 ÷ (8000 × 4)."],
        ["M", "A machine bought for ₦500,000 depreciates at 20% per annum. Its value after 2 years is", "₦320,000", "₦300,000", "₦400,000", "₦200,000", "500 000 × 0.8²."],
        ["H", "₦10,000 is saved at the end of each year for 3 years at 10% compound interest. The amount of the annuity is", "₦33,100", "₦30,000", "₦36,410", "₦33,000", "10 000(1.21 + 1.1 + 1)."],
        ["H", "The repayment of a loan with interest by equal periodic instalments is called", "amortisation", "depreciation", "annuity due", "discounting", "Mortgages are repaid this way."],
        ["H", "The compound interest on ₦40,000 for 1 year at 10% per annum compounded half-yearly is", "₦4,100", "₦4,000", "₦8,400", "₦2,050", "40 000 × 1.05² = 44 100."],
      ],
      jamb: [
        ["M", "Find the principal which amounts to ₦5,500 at simple interest in 5 years at 2% per annum.", "₦5,000", "₦4,950", "₦5,390", "₦4,500", "A = P(1 + 0.10), so P = 5500 ÷ 1.1."],
        ["H", "A sum of money invested at compound interest amounts to ₦6,050 after 2 years at 10% per annum. Find the sum invested.", "₦5,000", "₦5,500", "₦4,840", "₦5,042", "6050 ÷ 1.21. Answer: ₦5,000."],
      ],
    },
  ],
};
