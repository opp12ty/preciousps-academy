import type { TermPlan } from "../types";

/** SS2 Further Mathematics — original Precious PS content following the national senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Polynomials: remainder and factor theorems",
        subtopics: ["Operations on polynomials", "The remainder theorem", "The factor theorem and factorisation", "Roots of cubic equations"],
        objectives: ["Add, subtract, multiply and divide polynomials", "Apply the remainder theorem", "Apply the factor theorem to factorise polynomials", "Relate the roots and coefficients of a cubic equation"],
        lesson: {
          title: "Polynomials",
          summary: "Use the remainder and factor theorems to analyse polynomials.",
          minutes: 40,
          notes: `## Polynomials
A **polynomial** in $x$ is an expression of the form
$a_n x^n + a_{n-1}x^{n-1} + \\dots + a_1 x + a_0$
where the powers are non-negative integers. The highest power is the **degree**: $3x^4 - 2x^2 + 7$ has degree 4.
Degree 1 — linear; 2 — quadratic; 3 — cubic; 4 — quartic.

## Operations
Add or subtract **like terms**. To multiply, multiply every term of one by every term of the other:
$(x + 2)(x^2 - x + 3) = x^3 - x^2 + 3x + 2x^2 - 2x + 6 = x^3 + x^2 + x + 6$

### Division
$f(x) = (\\text{divisor}) \\times Q(x) + R$
where $Q$ is the quotient and $R$ the remainder. Long division or synthetic division may be used.

## The remainder theorem
**When $f(x)$ is divided by $(x - a)$, the remainder is $f(a)$.**
(When divided by $(ax - b)$ the remainder is $f\\left(\\frac{b}{a}\\right)$.)
*Example:* $f(x) = x^3 - 2x^2 + 3x - 1$ divided by $(x - 2)$: $f(2) = 8 - 8 + 6 - 1 = 5$.
*Example:* if $2x^3 + ax^2 - 3x + 1$ leaves remainder 6 when divided by $(x + 1)$, then $f(-1) = -2 + a + 3 + 1 = 6$, so $a = 4$.

## The factor theorem
**$(x - a)$ is a factor of $f(x)$ if and only if $f(a) = 0$.**
*Example:* for $f(x) = x^3 - 6x^2 + 11x - 6$, $f(1) = 1 - 6 + 11 - 6 = 0$, so $(x - 1)$ is a factor. Dividing: $f(x) = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$.
*Example:* if $(x - 1)$ is a factor of $x^3 + kx^2 - x - 2$, then $1 + k - 1 - 2 = 0$ and $k = 2$.

### Finding factors
Try the factors of the constant term ($\\pm 1, \\pm 2, \\dots$) until $f(a) = 0$; divide out the factor and factorise the quotient.

## Zeros of a polynomial
The values of $x$ for which $f(x) = 0$. The zeros of $x^3 - 7x + 6$ are found from $f(1) = 0$: $(x - 1)(x^2 + x - 6) = (x - 1)(x - 2)(x + 3)$, so $x = 1, 2, -3$.

## Roots and coefficients of a cubic
If $\\alpha$, $\\beta$, $\\gamma$ are the roots of $ax^3 + bx^2 + cx + d = 0$:
- $\\alpha + \\beta + \\gamma = -\\frac{b}{a}$
- $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a}$
- $\\alpha\\beta\\gamma = -\\frac{d}{a}$
For $x^3 - 7x + 6 = 0$: sum $= 0$, product $= -6$ — consistent with roots $1$, $2$, $-3$.

## Identities
Two polynomials are identical if the coefficients of like powers are equal — the basis of the method of **equating coefficients**.`,
          examples: `**Example 1.** Find the remainder when $x^3 + 2x - 5$ is divided by $(x - 1)$. *Solution:* $f(1) = 1 + 2 - 5 = -2$.

**Example 2.** Show that $(x + 2)$ is a factor of $x^3 + 3x^2 - 4$. *Solution:* $f(-2) = -8 + 12 - 4 = 0$.

**Example 3.** Factorise $x^3 - x^2 - 4x + 4$. *Solution:* $f(1) = 0$; $(x - 1)(x^2 - 4) = (x - 1)(x - 2)(x + 2)$.`,
        },
        questions: [
          ["E", "The degree of the polynomial $3x^4 - 2x^2 + 7$ is", "4", "3", "2", "7", "It is the highest power of x."],
          ["E", "If $f(x) = x^2 + 3x - 4$, the value of $f(2)$ is", "6", "14", "2", "0", "4 + 6 − 4. Answer: 6."],
          ["E", "By the remainder theorem, when $f(x)$ is divided by $(x - a)$ the remainder is", "$f(a)$", "$f(-a)$", "$f(0)$", "$a$", "Substitute the value that makes the divisor zero."],
          ["M", "The remainder when $x^3 - 2x^2 + 3x - 1$ is divided by $(x - 2)$ is", "5", "$-23$", "1", "0", "f(2) = 8 − 8 + 6 − 1."],
          ["M", "Which of the following is a factor of $x^3 - 6x^2 + 11x - 6$?", "$(x - 1)$", "$(x + 1)$", "$(x - 4)$", "$(x + 2)$", "f(1) = 0. Answer: $(x - 1)$."],
          ["M", "If $(x - 1)$ is a factor of $x^3 + kx^2 - x - 2$, the value of $k$ is", "2", "$-2$", "4", "0", "1 + k − 1 − 2 = 0."],
          ["M", "Expand $(x + 2)(x^2 - x + 3)$.", "$x^3 + x^2 + x + 6$", "$x^3 - x^2 + 3x + 6$", "$x^3 + 3x^2 + 5x + 6$", "$x^3 + x^2 - x + 6$", "Multiply each term and collect like terms."],
          ["H", "The complete factorisation of $x^3 - 6x^2 + 11x - 6$ is", "$(x - 1)(x - 2)(x - 3)$", "$(x + 1)(x + 2)(x + 3)$", "$(x - 1)(x + 2)(x - 3)$", "$(x - 1)(x - 6)(x + 1)$", "Divide by (x − 1), then factorise the quadratic."],
          ["H", "When $2x^3 + ax^2 - 3x + 1$ is divided by $(x + 1)$ the remainder is 6. The value of $a$ is", "4", "6", "10", "$-4$", "f(−1) = −2 + a + 3 + 1."],
          ["H", "The roots of the equation $x^3 - 7x + 6 = 0$ are", "$1, 2, -3$", "$-1, -2, 3$", "$1, -2, 3$", "$1, 2, 3$", "The roots must add up to zero and multiply to −6."],
        ],
      },
      {
        week: 2,
        title: "Rational functions and partial fractions",
        subtopics: ["Proper and improper rational functions", "Distinct linear factors", "Repeated linear factors", "Quadratic factors and improper fractions"],
        objectives: ["Distinguish proper from improper rational functions", "Resolve fractions with distinct linear factors", "Resolve fractions with repeated linear factors", "Resolve fractions with irreducible quadratic factors and improper fractions"],
        lesson: {
          title: "Partial Fractions",
          summary: "Resolve rational functions into partial fractions.",
          minutes: 40,
          notes: `## Rational functions
A **rational function** is the ratio of two polynomials, $\\frac{P(x)}{Q(x)}$, $Q(x) \\ne 0$.
- **proper**: the degree of the numerator is **less than** that of the denominator
- **improper**: otherwise — divide first

Adding fractions: $\\frac{1}{x} + \\frac{1}{x + 1} = \\frac{2x + 1}{x(x + 1)}$. **Resolving into partial fractions** is the reverse process.

## Type 1: distinct linear factors
$\\frac{px + q}{(x - a)(x - b)} \\equiv \\frac{A}{x - a} + \\frac{B}{x - b}$
*Example:* $\\frac{5x + 1}{(x - 1)(x + 2)} \\equiv \\frac{A}{x - 1} + \\frac{B}{x + 2}$
Multiply through: $5x + 1 \\equiv A(x + 2) + B(x - 1)$.
- put $x = 1$: $6 = 3A$, so $A = 2$
- put $x = -2$: $-9 = -3B$, so $B = 3$
Result: $\\frac{2}{x - 1} + \\frac{3}{x + 2}$.

*Example:* $\\frac{1}{x(x + 1)} \\equiv \\frac{1}{x} - \\frac{1}{x + 1}$.

### Cover-up rule
To find $A$, cover the factor $(x - a)$ in the original fraction and substitute $x = a$ in what remains.

## Type 2: repeated linear factor
$\\frac{px + q}{(x - a)^2} \\equiv \\frac{A}{x - a} + \\frac{B}{(x - a)^2}$
*Example:* $\\frac{2x + 3}{(x - 1)^2}$: $2x + 3 \\equiv A(x - 1) + B$. Put $x = 1$: $B = 5$. Coefficient of $x$: $A = 2$.
Result: $\\frac{2}{x - 1} + \\frac{5}{(x - 1)^2}$.

## Type 3: irreducible quadratic factor
A quadratic factor that cannot be factorised takes a **linear numerator**:
$\\frac{1}{(x + 1)(x^2 + 1)} \\equiv \\frac{A}{x + 1} + \\frac{Bx + C}{x^2 + 1}$
Multiply through: $1 \\equiv A(x^2 + 1) + (Bx + C)(x + 1)$.
$x = -1$: $A = \\frac{1}{2}$. Coefficient of $x^2$: $A + B = 0$, so $B = -\\frac{1}{2}$. Constant: $A + C = 1$, so $C = \\frac{1}{2}$.

## Type 4: improper fractions
Divide first to get a polynomial plus a proper fraction.
$\\frac{x^2 + 1}{x^2 - 1} = 1 + \\frac{2}{x^2 - 1} = 1 + \\frac{1}{x - 1} - \\frac{1}{x + 1}$

## Methods for the constants
- **substitution** of convenient values of $x$
- **equating coefficients** of like powers

## Uses
Partial fractions make it possible to **integrate** rational functions and to **sum series**:
$\\frac{1}{r(r + 1)} = \\frac{1}{r} - \\frac{1}{r + 1}$, so $\\sum_{r=1}^{n} \\frac{1}{r(r + 1)} = 1 - \\frac{1}{n + 1}$.`,
          examples: `**Example 1.** Resolve $\\frac{3}{(x - 1)(x + 2)}$. *Solution:* $A = 1$, $B = -1$: $\\frac{1}{x - 1} - \\frac{1}{x + 2}$.

**Example 2.** Resolve $\\frac{x + 5}{(x + 1)(x + 3)}$. *Solution:* $x = -1$: $A = 2$; $x = -3$: $B = -1$: $\\frac{2}{x + 1} - \\frac{1}{x + 3}$.

**Example 3.** State the form of the partial fractions of $\\frac{x}{(x + 2)^2}$. *Solution:* $\\frac{A}{x + 2} + \\frac{B}{(x + 2)^2}$.`,
        },
        questions: [
          ["E", "A rational function is the ratio of two", "polynomials", "surds", "matrices", "logarithms", "The denominator must not be zero."],
          ["E", "A rational function is proper when the degree of the numerator is", "less than that of the denominator", "greater than that of the denominator", "equal to that of the denominator", "zero", "Otherwise it must first be divided out."],
          ["E", "Express $\\frac{1}{x} + \\frac{1}{x + 1}$ as a single fraction.", "$\\frac{2x + 1}{x(x + 1)}$", "$\\frac{2}{2x + 1}$", "$\\frac{1}{x(x + 1)}$", "$\\frac{x + 1}{x}$", "Use the common denominator x(x + 1)."],
          ["M", "Resolve $\\frac{5x + 1}{(x - 1)(x + 2)}$ into partial fractions.", "$\\frac{2}{x - 1} + \\frac{3}{x + 2}$", "$\\frac{3}{x - 1} + \\frac{2}{x + 2}$", "$\\frac{2}{x - 1} - \\frac{3}{x + 2}$", "$\\frac{5}{x - 1} + \\frac{1}{x + 2}$", "Put x = 1 and x = −2 in turn."],
          ["M", "Express $\\frac{1}{x(x + 1)}$ in partial fractions.", "$\\frac{1}{x} - \\frac{1}{x + 1}$", "$\\frac{1}{x} + \\frac{1}{x + 1}$", "$\\frac{1}{x + 1} - \\frac{1}{x}$", "$\\frac{2}{x} - \\frac{1}{x + 1}$", "A = 1 and B = −1."],
          ["M", "If $\\frac{3x + 5}{(x + 1)(x + 3)} \\equiv \\frac{A}{x + 1} + \\frac{B}{x + 3}$, the value of $A$ is", "1", "2", "3", "$-1$", "Putting x = −1 gives 2 = 2A."],
          ["M", "The correct form of the partial fractions of $\\frac{2x + 3}{(x - 1)^2}$ is", "$\\frac{A}{x - 1} + \\frac{B}{(x - 1)^2}$", "$\\frac{A}{x - 1} + \\frac{B}{x + 1}$", "$\\frac{Ax + B}{(x - 1)^2}$ only", "$\\frac{A}{(x - 1)^2}$ only", "A repeated factor needs a term for each power."],
          ["H", "Resolve $\\frac{2x + 3}{(x - 1)^2}$ into partial fractions.", "$\\frac{2}{x - 1} + \\frac{5}{(x - 1)^2}$", "$\\frac{5}{x - 1} + \\frac{2}{(x - 1)^2}$", "$\\frac{2}{x - 1} + \\frac{3}{(x - 1)^2}$", "$\\frac{2}{x - 1} - \\frac{5}{(x - 1)^2}$", "2x + 3 = A(x − 1) + B gives A = 2, B = 5."],
          ["H", "The correct form of the partial fractions of $\\frac{1}{(x + 1)(x^2 + 1)}$ is", "$\\frac{A}{x + 1} + \\frac{Bx + C}{x^2 + 1}$", "$\\frac{A}{x + 1} + \\frac{B}{x^2 + 1}$", "$\\frac{A}{x + 1} + \\frac{B}{x - 1} + \\frac{C}{x + 1}$", "$\\frac{Ax + B}{x + 1} + \\frac{C}{x^2 + 1}$", "An irreducible quadratic factor takes a linear numerator."],
          ["H", "Express $\\frac{x^2 + 1}{x^2 - 1}$ in partial fractions.", "$1 + \\frac{1}{x - 1} - \\frac{1}{x + 1}$", "$\\frac{1}{x - 1} - \\frac{1}{x + 1}$", "$1 + \\frac{1}{x - 1} + \\frac{1}{x + 1}$", "$1 - \\frac{1}{x - 1} + \\frac{1}{x + 1}$", "Divide first to get 1 + 2/(x² − 1)."],
        ],
      },
      {
        week: 3,
        title: "The binomial theorem",
        subtopics: ["Pascal's triangle", "The binomial expansion for a positive integer index", "The general term and particular terms", "Approximations and expansion for other indices"],
        objectives: ["Use Pascal's triangle to expand binomials", "Apply the binomial theorem for a positive integer index", "Find particular terms and coefficients", "Use the expansion for approximations and for negative or fractional indices"],
        lesson: {
          title: "Binomial Expansion",
          summary: "Expand powers of binomial expressions and find particular terms.",
          minutes: 40,
          notes: `## Pascal's triangle
The coefficients in the expansion of $(a + b)^n$:
| $n$ | Coefficients |
|---|---|
| 0 | 1 |
| 1 | 1  1 |
| 2 | 1  2  1 |
| 3 | 1  3  3  1 |
| 4 | 1  4  6  4  1 |
| 5 | 1  5  10  10  5  1 |
Each number is the sum of the two above it.
$(1 + x)^3 = 1 + 3x + 3x^2 + x^3$

## The binomial theorem
For a positive integer $n$:
$(a + b)^n = a^n + \\, ^{n}C_{1}a^{n-1}b + \\, ^{n}C_{2}a^{n-2}b^2 + \\dots + b^n$
### Features
- there are $n + 1$ terms — $(a + b)^5$ has 6 terms
- the powers of $a$ decrease from $n$ to 0; those of $b$ increase from 0 to $n$
- the powers in every term add up to $n$
- the coefficients are symmetrical

## General term
The $(r + 1)$th term is
$T_{r+1} = \\, ^{n}C_{r} \\, a^{n-r} b^r$
*Examples:*
- third term of $(a + b)^6$: $^{6}C_{2}a^4b^2 = 15a^4b^2$
- coefficient of $x^2$ in $(1 + x)^4$: $^{4}C_{2} = 6$
- coefficient of $x^3$ in $(1 + 2x)^5$: $^{5}C_{3}(2)^3 = 10 \\times 8 = 80$
- coefficient of $x$ in $(2 + x)^4$: $^{4}C_{1}(2)^3 = 32$
- coefficient of $x^2$ in $(1 - 3x)^4$: $^{4}C_{2}(-3)^2 = 54$

### Term independent of x
In $\\left(x + \\frac{1}{x}\\right)^6$, $T_{r+1} = \\, ^{6}C_{r} \\, x^{6-r} x^{-r} = \\, ^{6}C_{r} \\, x^{6-2r}$. The power is zero when $r = 3$: the term is $^{6}C_{3} = 20$.

## Approximations
$(1.02)^5 = (1 + 0.02)^5 \\approx 1 + 5(0.02) + 10(0.02)^2 = 1 + 0.1 + 0.004 = 1.104$
For small $x$, $(1 + x)^n \\approx 1 + nx$.

## Negative and fractional indices
For any real $n$ and $|x| < 1$:
$(1 + x)^n = 1 + nx + \\frac{n(n - 1)}{2!}x^2 + \\frac{n(n - 1)(n - 2)}{3!}x^3 + \\dots$
The series is **infinite**.
- $(1 + x)^{-1} = 1 - x + x^2 - x^3 + \\dots$
- $(1 + x)^{\\frac{1}{2}} = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\dots$
For $(a + x)^n$, first write it as $a^n\\left(1 + \\frac{x}{a}\\right)^n$.

## Sum of coefficients
Putting $a = b = 1$: the coefficients of $(a + b)^n$ add up to $2^n$.`,
          examples: `**Example 1.** Expand $(1 + x)^4$. *Solution:* $1 + 4x + 6x^2 + 4x^3 + x^4$.

**Example 2.** Find the coefficient of $x^2$ in $(1 + 3x)^5$. *Solution:* $^{5}C_{2}(3)^2 = 90$.

**Example 3.** Use the first three terms to estimate $(0.99)^4$. *Solution:* $1 - 0.04 + 6(0.0001) = 0.9606$.`,
        },
        questions: [
          ["E", "The number of terms in the expansion of $(a + b)^5$ is", "6", "5", "10", "4", "There is always one more term than the index."],
          ["E", "The coefficient of $x^2$ in the expansion of $(1 + x)^4$ is", "6", "4", "12", "1", "From the row 1, 4, 6, 4, 1."],
          ["E", "The row of Pascal's triangle giving the coefficients of $(a + b)^3$ is", "1, 3, 3, 1", "1, 2, 1", "1, 4, 6, 4, 1", "1, 3, 1", "Each entry is the sum of the two above it."],
          ["M", "The expansion of $(1 + x)^3$ is", "$1 + 3x + 3x^2 + x^3$", "$1 + x^3$", "$1 + 3x + x^3$", "$1 + 3x + 3x^2 + 3x^3$", "Use the coefficients 1, 3, 3, 1."],
          ["M", "The coefficient of $x^3$ in the expansion of $(1 + 2x)^5$ is", "80", "10", "40", "20", "10 × 2 cubed. Answer: 80."],
          ["M", "The third term in the expansion of $(a + b)^6$ is", "$15a^4b^2$", "$6a^5b$", "$20a^3b^3$", "$15a^2b^4$", "It is the term with r = 2."],
          ["M", "The coefficient of $x$ in the expansion of $(2 + x)^4$ is", "32", "8", "16", "4", "4 × 2 cubed. Answer: 32."],
          ["H", "The term independent of $x$ in the expansion of $\\left(x + \\frac{1}{x}\\right)^6$ is", "20", "15", "6", "1", "The power of x vanishes when r = 3."],
          ["H", "Using the first three terms of the binomial expansion, the value of $(1.02)^5$ is approximately", "1.104", "1.100", "1.010", "1.204", "1 + 0.1 + 0.004."],
          ["H", "The coefficient of $x^2$ in the expansion of $(1 - 3x)^4$ is", "54", "$-54$", "18", "$-12$", "6 × (−3) squared."],
        ],
      },
      {
        week: 4,
        title: "Circular measure and compound angles",
        subtopics: ["Radian measure", "Arc length and area of a sector", "Compound angle formulae", "Double angle formulae"],
        objectives: ["Convert between degrees and radians", "Calculate arc lengths and areas of sectors in radians", "Apply the compound angle formulae", "Apply the double angle formulae"],
        lesson: {
          title: "Radians and Compound Angles",
          summary: "Use radian measure and the compound and double angle formulae.",
          minutes: 40,
          notes: `## Radian measure
One **radian** is the angle subtended at the centre of a circle by an arc equal in length to the radius.
$\\pi \\text{ radians} = 180^\\circ$
- degrees to radians: multiply by $\\frac{\\pi}{180}$
- radians to degrees: multiply by $\\frac{180}{\\pi}$
| Degrees | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ | $90^\\circ$ | $180^\\circ$ | $360^\\circ$ |
|---|---|---|---|---|---|---|
| Radians | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ | $\\pi$ | $2\\pi$ |
$\\frac{3\\pi}{4}$ radians $= 135^\\circ$. One radian $\\approx 57.3^\\circ$.

## Arc and sector (θ in radians)
- arc length: $s = r\\theta$
- area of sector: $A = \\frac{1}{2}r^2\\theta$
- area of segment: $\\frac{1}{2}r^2(\\theta - \\sin \\theta)$
*Examples:* $r = 5$ cm, $\\theta = 2$ rad: $s = 10$ cm. $r = 4$ cm, $\\theta = 1.5$ rad: $A = \\frac{1}{2}(16)(1.5) = 12$ cm².

## Compound angle formulae
- $\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$
- $\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$
- $\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$

*Example:* $\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$
*Example:* if $\\tan A = \\frac{1}{2}$ and $\\tan B = \\frac{1}{3}$, then $\\tan(A + B) = \\frac{\\frac{5}{6}}{1 - \\frac{1}{6}} = 1$, so $A + B = 45^\\circ$.

## Double angle formulae
Put $B = A$:
- $\\sin 2A = 2 \\sin A \\cos A$
- $\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A$
- $\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}$
*Example:* if $\\sin A = \\frac{3}{5}$ ($A$ acute), then $\\cos 2A = 1 - 2\\left(\\frac{9}{25}\\right) = \\frac{7}{25}$ and $\\sin 2A = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}$.

## Half-angle results
$\\cos^2 A = \\frac{1}{2}(1 + \\cos 2A)$ and $\\sin^2 A = \\frac{1}{2}(1 - \\cos 2A)$ — useful in integration.

## Factor formulae
- $\\sin P + \\sin Q = 2\\sin\\frac{P + Q}{2}\\cos\\frac{P - Q}{2}$
- $\\sin P - \\sin Q = 2\\cos\\frac{P + Q}{2}\\sin\\frac{P - Q}{2}$
- $\\cos P + \\cos Q = 2\\cos\\frac{P + Q}{2}\\cos\\frac{P - Q}{2}$
- $\\cos P - \\cos Q = -2\\sin\\frac{P + Q}{2}\\sin\\frac{P - Q}{2}$

## Small angles
For small $\\theta$ in radians: $\\sin \\theta \\approx \\theta$, $\\tan \\theta \\approx \\theta$, $\\cos \\theta \\approx 1 - \\frac{1}{2}\\theta^2$.`,
          examples: `**Example 1.** Convert $150^\\circ$ to radians. *Solution:* $150 \\times \\frac{\\pi}{180} = \\frac{5\\pi}{6}$.

**Example 2.** Find the area of a sector of radius 6 cm and angle $\\frac{\\pi}{3}$. *Solution:* $\\frac{1}{2}(36)\\frac{\\pi}{3} = 6\\pi$ cm².

**Example 3.** Evaluate $\\cos 15^\\circ$. *Solution:* $\\cos(45^\\circ - 30^\\circ) = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.`,
        },
        questions: [
          ["E", "An angle of $180^\\circ$ expressed in radians is", "$\\pi$", "$2\\pi$", "$\\frac{\\pi}{2}$", "$180\\pi$", "This is the basic conversion fact."],
          ["E", "An angle of $60^\\circ$ expressed in radians is", "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{6}$", "$\\frac{\\pi}{4}$", "$\\frac{2\\pi}{3}$", "60 is one-third of 180."],
          ["E", "The length of an arc of a circle of radius 5 cm subtending an angle of 2 radians at the centre is", "10 cm", "2.5 cm", "25 cm", "7 cm", "s = rθ. Answer: 10 cm."],
          ["M", "The area of a sector of a circle of radius 4 cm with angle 1.5 radians is", "12 cm²", "6 cm²", "24 cm²", "3 cm²", "Half of 16 times 1.5."],
          ["M", "The expansion of $\\sin(A + B)$ is", "$\\sin A \\cos B + \\cos A \\sin B$", "$\\sin A \\sin B + \\cos A \\cos B$", "$\\sin A \\cos B - \\cos A \\sin B$", "$\\sin A + \\sin B$", "This is the compound angle formula for sine."],
          ["M", "The expression $2 \\sin A \\cos A$ is identical to", "$\\sin 2A$", "$\\cos 2A$", "$\\tan 2A$", "$\\sin^2 A$", "Put B = A in sin(A + B)."],
          ["M", "An angle of $\\frac{3\\pi}{4}$ radians expressed in degrees is", "$135^\\circ$", "$120^\\circ$", "$270^\\circ$", "$75^\\circ$", "Three-quarters of 180."],
          ["H", "The exact value of $\\sin 75^\\circ$ is", "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$", "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$", "$\\frac{\\sqrt{3} + 1}{2}$", "$\\frac{\\sqrt{3} + \\sqrt{2}}{4}$", "Write 75° as 45° + 30°."],
          ["H", "If $\\sin A = \\frac{3}{5}$ and $A$ is acute, the value of $\\cos 2A$ is", "$\\frac{7}{25}$", "$\\frac{24}{25}$", "$\\frac{8}{5}$", "$-\\frac{7}{25}$", "1 − 2 × 9/25. Answer: $\\frac{7}{25}$."],
          ["H", "If $\\tan A = \\frac{1}{2}$ and $\\tan B = \\frac{1}{3}$, the value of $\\tan(A + B)$ is", "1", "$\\frac{5}{6}$", "$\\frac{1}{6}$", "$\\frac{5}{7}$", "(5/6) ÷ (1 − 1/6)."],
        ],
      },
      {
        week: 5,
        title: "Coordinate geometry of the circle",
        subtopics: ["Equation of a circle with given centre and radius", "The general equation of a circle", "Position of a point and length of a tangent", "Equations of tangents and normals"],
        objectives: ["Write the equation of a circle with given centre and radius", "Find the centre and radius from the general equation", "Determine the position of a point relative to a circle and the length of a tangent", "Find the equations of tangents and normals"],
        lesson: {
          title: "The Circle",
          summary: "Find equations of circles, tangents and normals.",
          minutes: 40,
          notes: `## Standard equation
A circle with centre $(a, b)$ and radius $r$:
$(x - a)^2 + (y - b)^2 = r^2$
With centre at the origin: $x^2 + y^2 = r^2$.
*Examples:* $(x - 2)^2 + (y + 3)^2 = 16$ has centre $(2, -3)$ and radius 4; $x^2 + y^2 = 25$ has radius 5; the circle with centre the origin and radius 3 is $x^2 + y^2 = 9$.
*Example:* centre $(1, 2)$ passing through $(4, 6)$: $r = \\sqrt{9 + 16} = 5$, so $(x - 1)^2 + (y - 2)^2 = 25$.

## General equation
$x^2 + y^2 + 2gx + 2fy + c = 0$
- centre: $(-g, -f)$
- radius: $\\sqrt{g^2 + f^2 - c}$
A second-degree equation represents a circle if the coefficients of $x^2$ and $y^2$ are **equal** and there is **no $xy$ term**.
*Example:* $x^2 + y^2 - 4x + 6y - 3 = 0$: $g = -2$, $f = 3$; centre $(2, -3)$; radius $\\sqrt{4 + 9 + 3} = 4$.
Alternatively, complete the squares: $(x - 2)^2 + (y + 3)^2 = 16$.

## Circle on a diameter
If $(x_1, y_1)$ and $(x_2, y_2)$ are the ends of a diameter:
$(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$
*Example:* ends $(0, 0)$ and $(6, 8)$: $x(x - 6) + y(y - 8) = 0$, that is $x^2 + y^2 - 6x - 8y = 0$ (centre $(3, 4)$, radius 5).

## Circle through three points
Substitute each point into the general equation and solve the three equations for $g$, $f$ and $c$.

## Position of a point
Substitute the point into $S = x^2 + y^2 + 2gx + 2fy + c$:
- $S < 0$: inside the circle
- $S = 0$: on the circle
- $S > 0$: outside the circle
$(3, 4)$ lies **on** $x^2 + y^2 = 25$ since $9 + 16 = 25$.

## Length of a tangent
From an external point $(x_1, y_1)$ the length of the tangent is $\\sqrt{S_1}$.
*Example:* from $(7, 1)$ to $x^2 + y^2 = 25$: $\\sqrt{49 + 1 - 25} = 5$.

## Tangent and normal
The tangent at a point is **perpendicular to the radius** at that point; the **normal** passes through the centre.
### Tangent to $x^2 + y^2 = r^2$ at $(x_1, y_1)$
$xx_1 + yy_1 = r^2$
*Example:* at $(3, 4)$ on $x^2 + y^2 = 25$: $3x + 4y = 25$. The normal is $y = \\frac{4}{3}x$.
### For the general circle
$xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0$
or find the gradient of the radius, take the negative reciprocal, and use the point–gradient form.

## Line and circle
Substitute the line into the circle to get a quadratic: two roots — the line cuts the circle; equal roots — it is a **tangent**; no real roots — it misses the circle.
A line $ax + by + c = 0$ touches a circle if the perpendicular distance from the centre equals the radius.`,
          examples: `**Example 1.** Find the centre and radius of $x^2 + y^2 + 6x - 8y = 0$. *Solution:* centre $(-3, 4)$; radius $\\sqrt{9 + 16} = 5$.

**Example 2.** Write the equation of the circle with centre $(-1, 2)$ and radius 3. *Solution:* $(x + 1)^2 + (y - 2)^2 = 9$.

**Example 3.** Find the tangent to $x^2 + y^2 = 13$ at $(2, 3)$. *Solution:* $2x + 3y = 13$.`,
        },
        questions: [
          ["E", "The centre of the circle $(x - 2)^2 + (y + 3)^2 = 16$ is", "$(2, -3)$", "$(-2, 3)$", "$(2, 3)$", "$(4, 4)$", "Compare with the standard form."],
          ["E", "The radius of the circle $x^2 + y^2 = 25$ is", "5", "25", "12.5", "$\\sqrt{5}$", "The right-hand side is the radius squared."],
          ["E", "The equation of the circle with centre at the origin and radius 3 is", "$x^2 + y^2 = 9$", "$x^2 + y^2 = 3$", "$x^2 + y^2 = 6$", "$x + y = 9$", "x² + y² equals the radius squared."],
          ["M", "The centre of the circle $x^2 + y^2 - 4x + 6y - 3 = 0$ is", "$(2, -3)$", "$(-2, 3)$", "$(-4, 6)$", "$(4, -6)$", "The centre is (−g, −f)."],
          ["M", "The radius of the circle $x^2 + y^2 - 4x + 6y - 3 = 0$ is", "4", "16", "$\\sqrt{10}$", "3", "The square root of 4 + 9 + 3."],
          ["M", "The equation of the circle with centre $(1, 2)$ which passes through the point $(4, 6)$ is", "$(x - 1)^2 + (y - 2)^2 = 25$", "$(x - 1)^2 + (y - 2)^2 = 5$", "$(x + 1)^2 + (y + 2)^2 = 25$", "$(x - 4)^2 + (y - 6)^2 = 25$", "The radius is the distance between the points, 5."],
          ["M", "Relative to the circle $x^2 + y^2 = 25$, the point $(3, 4)$ lies", "on the circle", "inside the circle", "outside the circle", "at the centre", "9 + 16 equals 25."],
          ["H", "The equation of the tangent to the circle $x^2 + y^2 = 25$ at the point $(3, 4)$ is", "$3x + 4y = 25$", "$4x - 3y = 0$", "$3x + 4y = 5$", "$4x + 3y = 25$", "Use xx₁ + yy₁ = r²."],
          ["H", "The length of the tangent from the point $(7, 1)$ to the circle $x^2 + y^2 = 25$ is", "5 units", "$\\sqrt{50}$ units", "25 units", "$\\sqrt{75}$ units", "The square root of 49 + 1 − 25."],
          ["H", "The equation of the circle on the line joining $(0, 0)$ and $(6, 8)$ as diameter is", "$x^2 + y^2 - 6x - 8y = 0$", "$x^2 + y^2 + 6x + 8y = 0$", "$x^2 + y^2 - 3x - 4y = 0$", "$x^2 + y^2 = 100$", "x(x − 6) + y(y − 8) = 0."],
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
        title: "Limits and differentiation",
        subtopics: ["Limits of functions", "Differentiation from first principles", "Rules of differentiation", "Derivatives of trigonometric functions and the chain rule"],
        objectives: ["Evaluate limits of functions", "Differentiate from first principles", "Apply the sum, product and quotient rules", "Differentiate trigonometric and composite functions"],
        lesson: {
          title: "The Derivative",
          summary: "Evaluate limits and differentiate functions using the standard rules.",
          minutes: 40,
          notes: `## Limits
$\\lim_{x \\to a} f(x) = L$ means $f(x)$ approaches $L$ as $x$ approaches $a$.
- by direct substitution: $\\lim_{x \\to 2} (3x + 1) = 7$
- if substitution gives $\\frac{0}{0}$, **factorise and cancel**:
$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$
- as $x \\to \\infty$, divide by the highest power: $\\lim_{x \\to \\infty} \\frac{2x + 1}{x - 3} = 2$

## Differentiation from first principles
The **derivative** (gradient function) of $y = f(x)$ is
$\\frac{dy}{dx} = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$
*Example:* $f(x) = x^2$: $\\frac{(x + h)^2 - x^2}{h} = 2x + h \\to 2x$.
It measures the **gradient of the tangent** and the **rate of change** of $y$ with respect to $x$.

## Standard results
| $y$ | $\\frac{dy}{dx}$ |
|---|---|
| $c$ (constant) | 0 |
| $x^n$ | $nx^{n-1}$ |
| $ax^n$ | $anx^{n-1}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\sec^2 x$ |
*Examples:* $\\frac{d}{dx}(x^5) = 5x^4$; $\\frac{d}{dx}(3x^2) = 6x$; $\\frac{d}{dx}(x^3 - 4x^2 + 7x - 2) = 3x^2 - 8x + 7$.
The gradient of $y = x^2$ at $x = 3$ is $2(3) = 6$.
Rewrite roots and reciprocals as powers: $\\frac{d}{dx}\\left(\\frac{1}{x}\\right) = -\\frac{1}{x^2}$; $\\frac{d}{dx}(\\sqrt{x}) = \\frac{1}{2\\sqrt{x}}$.

## Rules
### Sum and difference
Differentiate term by term.
### Product rule
$\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}$
*Example:* $\\frac{d}{dx}(x^2 \\sin x) = x^2 \\cos x + 2x \\sin x$.
### Quotient rule
$\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$
*Example:* $\\frac{d}{dx}\\left(\\frac{x}{x + 1}\\right) = \\frac{(x + 1) - x}{(x + 1)^2} = \\frac{1}{(x + 1)^2}$.
### Chain rule (function of a function)
$\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}$
*Example:* $y = (2x + 1)^4$: let $u = 2x + 1$; $\\frac{dy}{dx} = 4u^3 \\times 2 = 8(2x + 1)^3$.
*Example:* $\\frac{d}{dx}(\\sin 3x) = 3\\cos 3x$.

## Implicit differentiation
Differentiate each term with respect to $x$, treating $y$ as a function of $x$: from $x^2 + y^2 = 25$, $2x + 2y\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{x}{y}$.

## Higher derivatives
$\\frac{d^2y}{dx^2}$ is the derivative of $\\frac{dy}{dx}$. For $y = x^3$: $\\frac{dy}{dx} = 3x^2$, $\\frac{d^2y}{dx^2} = 6x$.`,
          examples: `**Example 1.** Differentiate $y = 4x^3 - 5x + 9$. *Solution:* $12x^2 - 5$.

**Example 2.** Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$. *Solution:* $\\lim (x + 3) = 6$.

**Example 3.** Differentiate $y = (3x - 2)^5$. *Solution:* $5(3x - 2)^4 \\times 3 = 15(3x - 2)^4$.`,
        },
        questions: [
          ["E", "Differentiate $x^5$ with respect to $x$.", "$5x^4$", "$x^4$", "$5x^5$", "$\\frac{x^6}{6}$", "Multiply by the power and reduce the power by one."],
          ["E", "The derivative of a constant is", "0", "1", "the constant itself", "$x$", "A constant does not change."],
          ["E", "Differentiate $3x^2$ with respect to $x$.", "$6x$", "$3x$", "$6x^2$", "$x^3$", "3 × 2 × x. Answer: $6x$."],
          ["M", "Differentiate $x^3 - 4x^2 + 7x - 2$ with respect to $x$.", "$3x^2 - 8x + 7$", "$3x^2 - 4x + 7$", "$x^2 - 8x + 7$", "$3x^2 - 8x - 2$", "Differentiate term by term."],
          ["M", "Evaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.", "4", "0", "2", "undefined", "Factorise and cancel to get x + 2."],
          ["M", "The derivative of $\\sin x$ with respect to $x$ is", "$\\cos x$", "$-\\cos x$", "$-\\sin x$", "$\\sec^2 x$", "This is a standard result."],
          ["M", "The gradient of the curve $y = x^2$ at the point where $x = 3$ is", "6", "9", "3", "5", "dy/dx = 2x. Answer: 6."],
          ["H", "Differentiate $(2x + 1)^4$ with respect to $x$.", "$8(2x + 1)^3$", "$4(2x + 1)^3$", "$8(2x + 1)^4$", "$2(2x + 1)^3$", "The chain rule gives 4u³ × 2."],
          ["H", "Differentiate $\\frac{x}{x + 1}$ with respect to $x$.", "$\\frac{1}{(x + 1)^2}$", "$\\frac{2x + 1}{(x + 1)^2}$", "$\\frac{-1}{(x + 1)^2}$", "$\\frac{1}{x + 1}$", "The quotient rule gives (x + 1 − x) over (x + 1)²."],
          ["H", "Differentiate $x^2 \\sin x$ with respect to $x$.", "$2x \\sin x + x^2 \\cos x$", "$2x \\cos x$", "$2x \\sin x - x^2 \\cos x$", "$x^2 \\cos x$", "Use the product rule."],
        ],
      },
      {
        week: 2,
        title: "Applications of differentiation",
        subtopics: ["Tangents and normals", "Stationary points: maxima and minima", "Rates of change", "Velocity, acceleration and optimisation"],
        objectives: ["Find equations of tangents and normals to curves", "Locate and classify stationary points", "Solve problems on rates of change", "Apply differentiation to motion and to optimisation problems"],
        lesson: {
          title: "Using the Derivative",
          summary: "Apply differentiation to tangents, turning points, rates and motion.",
          minutes: 40,
          notes: `## Tangent and normal
At a point on a curve, the gradient of the **tangent** is the value of $\\frac{dy}{dx}$ there; the **normal** is perpendicular to the tangent, with gradient $-\\frac{1}{m}$.
*Example:* $y = x^2$ at $(1, 1)$: $m = 2$. Tangent: $y - 1 = 2(x - 1)$, so $y = 2x - 1$. Normal: $y - 1 = -\\frac{1}{2}(x - 1)$.

## Stationary points
Points where $\\frac{dy}{dx} = 0$.
### Classifying
| | Maximum | Minimum | Point of inflexion |
|---|---|---|---|
| second derivative | $\\frac{d^2y}{dx^2} < 0$ | $\\frac{d^2y}{dx^2} > 0$ | $\\frac{d^2y}{dx^2} = 0$ (check signs) |
| sign of gradient | $+$ then $-$ | $-$ then $+$ | no change |

*Example 1:* $y = x^2 - 4x + 5$: $\\frac{dy}{dx} = 2x - 4 = 0$ at $x = 2$; second derivative $2 > 0$ — a **minimum** at $(2, 1)$.
*Example 2:* $y = 6x - x^2$: $6 - 2x = 0$ at $x = 3$; maximum value $18 - 9 = 9$.
*Example 3:* $y = x^3 - 3x$: $3x^2 - 3 = 0$ at $x = \\pm 1$. $\\frac{d^2y}{dx^2} = 6x$: at $x = -1$ it is negative — **maximum** at $(-1, 2)$; at $x = 1$ positive — **minimum** at $(1, -2)$.

## Increasing and decreasing functions
A function is increasing where $\\frac{dy}{dx} > 0$ and decreasing where $\\frac{dy}{dx} < 0$.

## Rates of change
$\\frac{dy}{dx}$ is the rate of change of $y$ with respect to $x$.
*Example:* $A = \\pi r^2$: $\\frac{dA}{dr} = 2\\pi r$; at $r = 3$ it is $6\\pi$.
### Connected rates
Use the chain rule: $\\frac{dA}{dt} = \\frac{dA}{dr} \\times \\frac{dr}{dt}$.
*Example:* if the radius of a circle increases at 0.5 cm/s, then when $r = 4$ cm, $\\frac{dA}{dt} = 8\\pi \\times 0.5 = 4\\pi$ cm²/s.

## Small changes
$\\delta y \\approx \\frac{dy}{dx} \\delta x$

## Motion in a straight line
If $s$ is the displacement at time $t$:
- velocity $v = \\frac{ds}{dt}$
- acceleration $a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$
*Example:* $s = t^3 - 3t^2$: $v = 3t^2 - 6t$, $a = 6t - 6$. At $t = 2$: $v = 0$ (momentarily at rest), $a = 6$.

## Optimisation
1. express the quantity to be maximised or minimised in terms of **one variable**
2. differentiate and set the derivative to zero
3. check the nature of the stationary point
*Example:* a rectangle has perimeter 20 cm. If one side is $x$, the other is $10 - x$ and $A = 10x - x^2$. $\\frac{dA}{dx} = 10 - 2x = 0$ gives $x = 5$: maximum area **25 cm²** (a square).

## Curve sketching
Find the intercepts, the stationary points and their nature, and the behaviour for large $x$.`,
          examples: `**Example 1.** Find the gradient of $y = x^3 - 2x$ at $x = 2$. *Solution:* $3(4) - 2 = 10$.

**Example 2.** Find the minimum value of $y = x^2 + 2x + 5$. *Solution:* $2x + 2 = 0$ at $x = -1$; $y = 4$.

**Example 3.** $s = 2t^2 + 3t$. Find the velocity at $t = 4$. *Solution:* $v = 4t + 3 = 19$.`,
        },
        questions: [
          ["E", "At a turning point of a curve, the value of $\\frac{dy}{dx}$ is", "0", "1", "$-1$", "undefined", "The tangent there is horizontal."],
          ["E", "If $s$ is displacement and $t$ is time, $\\frac{ds}{dt}$ represents", "velocity", "acceleration", "distance", "force", "It is the rate of change of displacement."],
          ["E", "The gradient of the tangent to a curve at a point is given by", "the value of $\\frac{dy}{dx}$ at that point", "the $y$-coordinate of the point", "the $x$-coordinate of the point", "the area under the curve", "The derivative is the gradient function."],
          ["M", "The curve $y = x^2 - 4x + 5$ has its turning point where", "$x = 2$", "$x = 4$", "$x = -2$", "$x = 5$", "2x − 4 = 0. Answer: $x = 2$."],
          ["M", "The displacement of a particle is $s = t^3 - 3t^2$. Its velocity when $t = 2$ is", "0", "$-4$", "6", "12", "v = 3t² − 6t. Answer: 0."],
          ["M", "The equation of the tangent to the curve $y = x^2$ at the point $(1, 1)$ is", "$y = 2x - 1$", "$y = 2x + 1$", "$y = x$", "$y = 2x$", "The gradient at x = 1 is 2."],
          ["M", "For a circle of area $A = \\pi r^2$, the rate of change of $A$ with respect to $r$ when $r = 3$ is", "$6\\pi$", "$9\\pi$", "$3\\pi$", "$2\\pi$", "dA/dr = 2πr. Answer: $6\\pi$."],
          ["H", "The maximum value of $y = 6x - x^2$ is", "9", "3", "6", "18", "The turning point is at x = 3."],
          ["H", "The maximum point of the curve $y = x^3 - 3x$ is", "$(-1, 2)$", "$(1, -2)$", "$(0, 0)$", "$(1, 2)$", "The second derivative, 6x, is negative at x = −1."],
          ["H", "A rectangle has a perimeter of 20 cm. Its greatest possible area is", "25 cm²", "20 cm²", "100 cm²", "24 cm²", "A = 10x − x² is greatest when x = 5."],
        ],
      },
      {
        week: 3,
        title: "Integration",
        subtopics: ["Integration as the reverse of differentiation", "Standard integrals", "Definite integrals", "Integration by substitution"],
        objectives: ["Explain integration as the reverse of differentiation", "Integrate polynomial and simple trigonometric functions", "Evaluate definite integrals", "Integrate simple functions by substitution"],
        lesson: {
          title: "The Integral",
          summary: "Integrate standard functions and evaluate definite integrals.",
          minutes: 40,
          notes: `## Integration
**Integration** is the **reverse of differentiation**. If $\\frac{d}{dx}F(x) = f(x)$, then
$\\int f(x) \\, dx = F(x) + C$
where $C$ is the **arbitrary constant of integration** — needed because the derivative of any constant is zero. This is an **indefinite integral**.

## Standard integrals
| $f(x)$ | $\\int f(x) \\, dx$ |
|---|---|
| $k$ (constant) | $kx + C$ |
| $x^n$ ($n \\ne -1$) | $\\frac{x^{n+1}}{n + 1} + C$ |
| $\\cos x$ | $\\sin x + C$ |
| $\\sin x$ | $-\\cos x + C$ |
| $\\sec^2 x$ | $\\tan x + C$ |
| $\\frac{1}{x}$ ($x > 0$) | $\\ln x + C$ |
*Examples:*
- $\\int x^3 \\, dx = \\frac{x^4}{4} + C$
- $\\int 5 \\, dx = 5x + C$
- $\\int (3x^2 + 2x) \\, dx = x^3 + x^2 + C$
- $\\int \\frac{1}{x^2} \\, dx = \\int x^{-2} \\, dx = -\\frac{1}{x} + C$

## Rules
- $\\int kf(x) \\, dx = k\\int f(x) \\, dx$
- integrate sums and differences **term by term**
- expand products and divide out quotients first: $\\int (x + 1)^2 \\, dx = \\int (x^2 + 2x + 1) \\, dx$

## Finding the constant
If $\\frac{dy}{dx} = 2x + 3$ and $y = 5$ when $x = 1$: $y = x^2 + 3x + C$; $5 = 1 + 3 + C$, so $C = 1$ and $y = x^2 + 3x + 1$.

## Definite integrals
$\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a)$
The constant cancels.
*Examples:*
- $\\int_1^3 2x \\, dx = [x^2]_1^3 = 9 - 1 = 8$
- $\\int_0^1 (x^2 + 1) \\, dx = \\left[\\frac{x^3}{3} + x\\right]_0^1 = \\frac{4}{3}$
### Properties
- $\\int_a^b f(x) \\, dx = -\\int_b^a f(x) \\, dx$
- $\\int_a^b f(x) \\, dx + \\int_b^c f(x) \\, dx = \\int_a^c f(x) \\, dx$

## Integration by substitution
For a function of a linear expression:
$\\int (ax + b)^n \\, dx = \\frac{(ax + b)^{n+1}}{a(n + 1)} + C$
*Example:* $\\int (2x + 1)^3 \\, dx$: let $u = 2x + 1$, $du = 2 \\, dx$: $\\frac{1}{2}\\int u^3 \\, du = \\frac{(2x + 1)^4}{8} + C$.
*Example:* $\\int \\cos 3x \\, dx = \\frac{1}{3}\\sin 3x + C$.
*Example:* $\\int 2x(x^2 + 1)^4 \\, dx$: let $u = x^2 + 1$, $du = 2x \\, dx$: $\\frac{(x^2 + 1)^5}{5} + C$.
With a definite integral, change the limits to values of $u$ or return to $x$ before substituting.`,
          examples: `**Example 1.** Find $\\int (4x^3 - 6x + 2) \\, dx$. *Solution:* $x^4 - 3x^2 + 2x + C$.

**Example 2.** Evaluate $\\int_0^2 3x^2 \\, dx$. *Solution:* $[x^3]_0^2 = 8$.

**Example 3.** Find $\\int (3x - 1)^4 \\, dx$. *Solution:* $\\frac{(3x - 1)^5}{15} + C$.`,
        },
        questions: [
          ["E", "Find $\\int x^3 \\, dx$.", "$\\frac{x^4}{4} + C$", "$3x^2 + C$", "$x^4 + C$", "$\\frac{x^3}{3} + C$", "Raise the power by one and divide by the new power."],
          ["E", "Find $\\int 5 \\, dx$.", "$5x + C$", "$5 + C$", "$0$", "$\\frac{5x^2}{2} + C$", "The integral of a constant k is kx."],
          ["E", "Integration is the reverse process of", "differentiation", "factorisation", "substitution", "expansion", "Differentiating the integral returns the function."],
          ["M", "Find $\\int (3x^2 + 2x) \\, dx$.", "$x^3 + x^2 + C$", "$6x + 2 + C$", "$3x^3 + 2x^2 + C$", "$x^3 + 2x^2 + C$", "Integrate term by term."],
          ["M", "Evaluate $\\int_1^3 2x \\, dx$.", "8", "4", "9", "10", "x² from 1 to 3 gives 9 − 1."],
          ["M", "Find $\\int \\cos x \\, dx$.", "$\\sin x + C$", "$-\\sin x + C$", "$-\\cos x + C$", "$\\tan x + C$", "The derivative of sin x is cos x."],
          ["M", "Find $\\int \\frac{1}{x^2} \\, dx$.", "$-\\frac{1}{x} + C$", "$\\frac{1}{x} + C$", "$-\\frac{2}{x^3} + C$", "$\\ln x^2 + C$", "Write it as x to the power −2."],
          ["H", "Evaluate $\\int_0^1 (x^2 + 1) \\, dx$.", "$\\frac{4}{3}$", "$\\frac{1}{3}$", "2", "$\\frac{2}{3}$", "One-third plus one."],
          ["H", "Given that $\\frac{dy}{dx} = 2x + 3$ and $y = 5$ when $x = 1$, then $y$ is", "$x^2 + 3x + 1$", "$x^2 + 3x + 5$", "$x^2 + 3x$", "$2x^2 + 3x$", "The constant satisfies 5 = 1 + 3 + C."],
          ["H", "Find $\\int (2x + 1)^3 \\, dx$.", "$\\frac{(2x + 1)^4}{8} + C$", "$\\frac{(2x + 1)^4}{4} + C$", "$6(2x + 1)^2 + C$", "$\\frac{(2x + 1)^4}{2} + C$", "Divide by the new power and by the coefficient of x."],
        ],
      },
      {
        week: 4,
        title: "Applications of integration",
        subtopics: ["Area under a curve", "Area between two curves", "Volume of a solid of revolution", "Kinematics and the trapezium rule"],
        objectives: ["Find the area under a curve", "Find the area between two curves", "Find the volume of a solid of revolution", "Apply integration to motion and estimate areas with the trapezium rule"],
        lesson: {
          title: "Areas, Volumes and Motion",
          summary: "Apply integration to areas, volumes of revolution and kinematics.",
          minutes: 40,
          notes: `## Area under a curve
The area between the curve $y = f(x)$, the $x$-axis and the lines $x = a$ and $x = b$ is
$A = \\int_a^b y \\, dx$
*Examples:*
- under $y = 2$ from 0 to 3: $\\int_0^3 2 \\, dx = 6$ (a rectangle)
- under $y = 2x$ from 0 to 4: $[x^2]_0^4 = 16$ (a triangle)
- under $y = x^2$ from 0 to 3: $\\left[\\frac{x^3}{3}\\right]_0^3 = 9$

### Area below the axis
Where the curve lies below the $x$-axis the integral is **negative**; take its magnitude. If a curve crosses the axis, find the parts separately and add the magnitudes.

### Area enclosed with the x-axis
$y = 4 - x^2$ meets the axis at $x = \\pm 2$:
$\\int_{-2}^{2} (4 - x^2) \\, dx = \\left[4x - \\frac{x^3}{3}\\right]_{-2}^{2} = 2\\left(8 - \\frac{8}{3}\\right) = \\frac{32}{3}$

### Area with the y-axis
$A = \\int_c^d x \\, dy$

## Area between two curves
$A = \\int_a^b (y_{\\text{upper}} - y_{\\text{lower}}) \\, dx$
where $a$ and $b$ are the $x$-coordinates of the points of intersection.
*Example:* $y = x$ and $y = x^2$ meet at $x = 0$ and $x = 1$; between them the line is above the curve:
$\\int_0^1 (x - x^2) \\, dx = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$

## Volume of revolution
When the area under $y = f(x)$ from $a$ to $b$ is rotated through $360^\\circ$ about the $x$-axis:
$V = \\pi \\int_a^b y^2 \\, dx$
About the $y$-axis: $V = \\pi \\int_c^d x^2 \\, dy$.
*Example:* $y = x$ from 0 to 3 gives a cone: $V = \\pi \\int_0^3 x^2 \\, dx = \\pi[\\frac{x^3}{3}]_0^3 = 9\\pi$. (Check: $\\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(9)(3) = 9\\pi$.)

## Kinematics
- $v = \\int a \\, dt$
- $s = \\int v \\, dt$
The distance travelled between $t_1$ and $t_2$ is $\\int_{t_1}^{t_2} v \\, dt$.
*Example:* $v = 3t^2$: distance in the first 2 s is $[t^3]_0^2 = 8$ m.
*Example:* $a = 6t$, with $v = 2$ when $t = 0$: $v = 3t^2 + 2$.

## The trapezium rule
For an area that cannot be integrated exactly, divide it into $n$ strips of width $h$:
$A \\approx \\frac{h}{2}[y_0 + y_n + 2(y_1 + y_2 + \\dots + y_{n-1})]$
More strips give a better estimate.

## Mean value
The mean value of $f(x)$ over $a \\le x \\le b$ is $\\frac{1}{b - a}\\int_a^b f(x) \\, dx$.`,
          examples: `**Example 1.** Find the area under $y = 3x^2$ from $x = 1$ to $x = 2$. *Solution:* $[x^3]_1^2 = 7$ square units.

**Example 2.** Find the volume generated when $y = 2x$ from 0 to 1 is rotated about the $x$-axis. *Solution:* $\\pi \\int_0^1 4x^2 \\, dx = \\frac{4\\pi}{3}$.

**Example 3.** $v = 4t + 1$. Find the distance covered between $t = 0$ and $t = 3$. *Solution:* $[2t^2 + t]_0^3 = 21$ m.`,
        },
        questions: [
          ["E", "The definite integral $\\int_a^b f(x) \\, dx$ of a positive function gives the", "area under the curve between $x = a$ and $x = b$", "gradient of the curve at $x = b$", "length of the curve", "maximum value of the function", "It sums thin strips of area."],
          ["E", "If $v$ is the velocity of a particle at time $t$, then $\\int v \\, dt$ gives its", "displacement", "acceleration", "force", "momentum", "Velocity is the derivative of displacement."],
          ["E", "Evaluate $\\int_0^3 2 \\, dx$.", "6", "2", "3", "9", "A rectangle of height 2 and width 3."],
          ["M", "The area under the curve $y = x^2$ from $x = 0$ to $x = 3$ is", "9 square units", "27 square units", "3 square units", "6 square units", "x cubed over 3, evaluated at 3."],
          ["M", "The area under the line $y = 2x$ from $x = 0$ to $x = 4$ is", "16 square units", "8 square units", "32 square units", "4 square units", "x² evaluated at 4."],
          ["M", "A particle moves with velocity $v = 3t^2$ m/s. The distance it covers in the first 2 seconds is", "8 m", "12 m", "6 m", "24 m", "t cubed evaluated at 2."],
          ["M", "The volume generated when the area under $y = f(x)$ is rotated completely about the $x$-axis is given by", "$\\pi \\int y^2 \\, dx$", "$\\int y \\, dx$", "$2\\pi \\int y \\, dx$", "$\\pi \\int y \\, dx$", "Each thin disc has volume πy² dx."],
          ["H", "The area enclosed between the line $y = x$ and the curve $y = x^2$ is", "$\\frac{1}{6}$ square unit", "$\\frac{1}{3}$ square unit", "$\\frac{1}{2}$ square unit", "$\\frac{5}{6}$ square unit", "Integrate x − x² from 0 to 1."],
          ["H", "The volume generated when the region under $y = x$ from $x = 0$ to $x = 3$ is rotated through $360^\\circ$ about the $x$-axis is", "$9\\pi$ cubic units", "$27\\pi$ cubic units", "$3\\pi$ cubic units", "$\\frac{9\\pi}{2}$ cubic units", "π times x cubed over 3 at x = 3."],
          ["H", "The area enclosed by the curve $y = 4 - x^2$ and the $x$-axis is", "$\\frac{32}{3}$ square units", "$\\frac{16}{3}$ square units", "16 square units", "8 square units", "Integrate from −2 to 2."],
        ],
      },
      {
        week: 5,
        title: "Matrices and determinants",
        subtopics: ["Types and order of matrices", "Addition, scalar multiplication and matrix multiplication", "Determinants and inverses of 2 × 2 matrices", "Determinants of 3 × 3 matrices and simultaneous equations"],
        objectives: ["State the order and type of a matrix", "Add and multiply matrices", "Find the determinant and inverse of a 2 × 2 matrix", "Evaluate 3 × 3 determinants and solve simultaneous equations by matrices"],
        lesson: {
          title: "Matrix Algebra",
          summary: "Carry out matrix operations and use determinants and inverses.",
          minutes: 40,
          notes: `## Matrices
A **matrix** is a rectangular array of numbers. A matrix with $m$ rows and $n$ columns has **order** $m \\times n$.
### Types
- **row** and **column** matrices
- **square** matrix: rows = columns
- **zero (null)** matrix: every element 0
- **diagonal** matrix; **identity (unit)** matrix $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$
- **transpose** $A^T$: rows and columns interchanged — the transpose of $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ is $\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$
- **symmetric** matrix: $A^T = A$

## Addition and scalar multiplication
Matrices of the **same order** are added element by element:
$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 2 & 0 \\\\ 1 & 5 \\end{pmatrix} = \\begin{pmatrix} 3 & 2 \\\\ 4 & 9 \\end{pmatrix}$
A scalar multiplies every element.

## Matrix multiplication
$AB$ exists only if the number of **columns of $A$** equals the number of **rows of $B$**. An $m \\times n$ matrix times an $n \\times p$ matrix gives an $m \\times p$ matrix. Multiply **rows by columns**:
$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 7 \\end{pmatrix}$
In general $AB \\ne BA$; but $AI = IA = A$.

## Determinant of a 2 × 2 matrix
For $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$: $|A| = ad - bc$.
$\\begin{vmatrix} 3 & 1 \\\\ 2 & 4 \\end{vmatrix} = 12 - 2 = 10$
A matrix is **singular** if its determinant is **zero** — it then has no inverse.
$\\begin{pmatrix} x & 2 \\\\ 3 & 6 \\end{pmatrix}$ is singular when $6x - 6 = 0$, that is $x = 1$.

## Inverse of a 2 × 2 matrix
$A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$, and $AA^{-1} = I$.
*Example:* $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$: $|A| = 1$, so $A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$.

## Determinant of a 3 × 3 matrix
Expand along the first row, with signs $+ \\; - \\; +$:
$\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{vmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)$
*Example:* $\\begin{vmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 4 & 0 & 5 \\end{vmatrix} = 1(15 - 0) - 0 + 2(0 - 12) = -9$
The small determinants are **minors**; with their signs they are **cofactors**.

## Simultaneous equations
$2x + y = 5$ and $x - y = 1$ can be written $\\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}$, so $X = A^{-1}B$.
$|A| = -3$; $A^{-1} = -\\frac{1}{3}\\begin{pmatrix} -1 & -1 \\\\ -1 & 2 \\end{pmatrix}$, giving $x = 2$, $y = 1$.
### Cramer's rule
$x = \\frac{\\Delta_x}{\\Delta}$, $y = \\frac{\\Delta_y}{\\Delta}$, where $\\Delta$ is the determinant of the coefficients and $\\Delta_x$, $\\Delta_y$ are formed by replacing the $x$ or $y$ column with the constants.`,
          examples: `**Example 1.** Find the determinant of $\\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$. *Solution:* $20 - 6 = 14$.

**Example 2.** Find $\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$. *Solution:* $\\begin{pmatrix} 10 \\\\ 6 \\end{pmatrix}$.

**Example 3.** Find the inverse of $\\begin{pmatrix} 4 & 3 \\\\ 1 & 1 \\end{pmatrix}$. *Solution:* determinant 1; inverse $\\begin{pmatrix} 1 & -3 \\\\ -1 & 4 \\end{pmatrix}$.`,
        },
        questions: [
          ["E", "A matrix with 2 rows and 3 columns has order", "$2 \\times 3$", "$3 \\times 2$", "$2 \\times 2$", "6", "Rows are stated before columns."],
          ["E", "The determinant of $\\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$ is", "10", "14", "5", "$-10$", "3 × 4 − 1 × 2. Answer: 10."],
          ["E", "The $2 \\times 2$ identity matrix is", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$", "It has ones on the leading diagonal and zeros elsewhere."],
          ["M", "Evaluate $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 2 & 0 \\\\ 1 & 5 \\end{pmatrix}$.", "$\\begin{pmatrix} 3 & 2 \\\\ 4 & 9 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ 3 & 20 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 2 & 9 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 10 \\\\ 10 & 20 \\end{pmatrix}$", "Add the corresponding elements."],
          ["M", "Evaluate $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$.", "$\\begin{pmatrix} 3 \\\\ 7 \\end{pmatrix}$", "$\\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ 12 \\end{pmatrix}$", "Multiply each row by the column."],
          ["M", "A square matrix is singular when its determinant is", "zero", "one", "negative", "positive", "A singular matrix has no inverse."],
          ["M", "The transpose of $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ is", "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$", "Interchange the rows and columns."],
          ["H", "The inverse of $\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$ is", "$\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 1 \\\\ 5 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$", "The determinant is 1; swap a and d and change the signs of b and c."],
          ["H", "The value of $x$ for which $\\begin{pmatrix} x & 2 \\\\ 3 & 6 \\end{pmatrix}$ is singular is", "1", "4", "$-1$", "9", "6x − 6 = 0. Answer: 1."],
          ["H", "Evaluate $\\begin{vmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 4 & 0 & 5 \\end{vmatrix}$.", "$-9$", "15", "39", "$-24$", "1(15) − 0 + 2(0 − 12)."],
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
        title: "Conic sections",
        subtopics: ["Conics and eccentricity", "The parabola", "The ellipse", "The hyperbola"],
        objectives: ["Define a conic in terms of focus, directrix and eccentricity", "Find the focus and directrix of a parabola", "Find the axes, eccentricity and foci of an ellipse", "Find the eccentricity, foci and asymptotes of a hyperbola"],
        lesson: {
          title: "Parabola, Ellipse and Hyperbola",
          summary: "Describe the conic sections and find their key features.",
          minutes: 40,
          notes: `## Conic sections
Curves obtained when a plane cuts a double cone. A **conic** is the locus of a point $P$ that moves so that its distance from a fixed point (the **focus** $S$) bears a constant ratio $e$ (the **eccentricity**) to its distance from a fixed line (the **directrix**).
| Eccentricity | Conic |
|---|---|
| $e = 0$ | circle |
| $0 < e < 1$ | ellipse |
| $e = 1$ | parabola |
| $e > 1$ | hyperbola |

## The parabola ($e = 1$)
Standard equation: $y^2 = 4ax$
- vertex: $(0, 0)$
- focus: $(a, 0)$
- directrix: $x = -a$
- axis of symmetry: the $x$-axis
- **latus rectum** (the chord through the focus perpendicular to the axis): length $4a$
*Examples:* $y^2 = 8x$: $a = 2$; focus $(2, 0)$; directrix $x = -2$; latus rectum 8. $y^2 = 12x$: $a = 3$; directrix $x = -3$.
Other forms: $y^2 = -4ax$ (opens left); $x^2 = 4ay$ (opens upward, focus $(0, a)$, directrix $y = -a$). For $x^2 = 8y$ the focus is $(0, 2)$.
Parametric form: $x = at^2$, $y = 2at$.

## The ellipse ($e < 1$)
Standard equation: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, with $a > b$
- centre: $(0, 0)$
- **major axis** length $2a$ (along the $x$-axis); **minor axis** length $2b$
- $b^2 = a^2(1 - e^2)$, so $e = \\frac{c}{a}$ where $c^2 = a^2 - b^2$
- foci: $(\\pm ae, 0) = (\\pm c, 0)$
- directrices: $x = \\pm \\frac{a}{e}$
- the sum of the distances from any point on the ellipse to the two foci is $2a$
*Example:* $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$: $a = 5$, $b = 3$; major axis 10; $c = 4$; $e = \\frac{4}{5}$; foci $(\\pm 4, 0)$.
*Example:* $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$: $c^2 = 9$; foci $(\\pm 3, 0)$; $e = \\frac{3}{5}$.

## The hyperbola ($e > 1$)
Standard equation: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$
- vertices: $(\\pm a, 0)$
- $b^2 = a^2(e^2 - 1)$, so $c^2 = a^2 + b^2$ and $e = \\frac{c}{a}$
- foci: $(\\pm c, 0)$
- **asymptotes**: $y = \\pm \\frac{b}{a}x$ — lines the curve approaches but never meets
- the difference of the distances from any point to the two foci is $2a$
*Example:* $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$: $a = 3$, $b = 4$, $c = 5$; $e = \\frac{5}{3}$; foci $(\\pm 5, 0)$; asymptotes $y = \\pm \\frac{4}{3}x$.
A **rectangular hyperbola** has perpendicular asymptotes: $xy = c^2$.

## Recognising a conic
From $Ax^2 + By^2 + \\dots = 0$ (no $xy$ term):
- $A = B$: circle
- $A$ and $B$ of the same sign but unequal: ellipse
- $A$ and $B$ of opposite signs: hyperbola
- only one squared term: parabola

## Applications
parabolic reflectors (headlamps, satellite dishes) and the paths of projectiles; elliptical orbits of planets; hyperbolic paths of some comets and the shape of cooling towers.`,
          examples: `**Example 1.** Find the focus and directrix of $y^2 = 16x$. *Solution:* $a = 4$: focus $(4, 0)$; directrix $x = -4$.

**Example 2.** Find the eccentricity of $\\frac{x^2}{16} + \\frac{y^2}{7} = 1$. *Solution:* $c^2 = 9$, $c = 3$; $e = \\frac{3}{4}$.

**Example 3.** Find the asymptotes of $\\frac{x^2}{4} - \\frac{y^2}{9} = 1$. *Solution:* $y = \\pm \\frac{3}{2}x$.`,
        },
        questions: [
          ["E", "The eccentricity of a parabola is", "1", "0", "less than 1", "greater than 1", "Its points are equidistant from the focus and the directrix."],
          ["E", "The focus of the parabola $y^2 = 8x$ is", "$(2, 0)$", "$(8, 0)$", "$(0, 2)$", "$(-2, 0)$", "4a = 8, so a = 2."],
          ["E", "A conic whose eccentricity lies between 0 and 1 is", "an ellipse", "a parabola", "a hyperbola", "a pair of straight lines", "A circle has eccentricity zero."],
          ["M", "The directrix of the parabola $y^2 = 12x$ is", "$x = -3$", "$x = 3$", "$y = -3$", "$x = -12$", "a = 3, and the directrix is x = −a."],
          ["M", "The length of the major axis of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ is", "10", "5", "6", "25", "It is 2a with a = 5."],
          ["M", "The eccentricity of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ is", "$\\frac{4}{5}$", "$\\frac{3}{5}$", "$\\frac{5}{4}$", "$\\frac{9}{25}$", "c = 4 and a = 5."],
          ["M", "The focus of the parabola $x^2 = 8y$ is", "$(0, 2)$", "$(2, 0)$", "$(0, 8)$", "$(0, -2)$", "This parabola opens upwards along the y-axis."],
          ["H", "The foci of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ are", "$(\\pm 3, 0)$", "$(\\pm 4, 0)$", "$(\\pm 5, 0)$", "$(0, \\pm 3)$", "c² = 25 − 16 = 9."],
          ["H", "The eccentricity of the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ is", "$\\frac{5}{3}$", "$\\frac{4}{3}$", "$\\frac{3}{5}$", "$\\frac{5}{4}$", "c² = 9 + 16, so c = 5."],
          ["H", "The asymptotes of the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ are", "$y = \\pm \\frac{4}{3}x$", "$y = \\pm \\frac{3}{4}x$", "$y = \\pm \\frac{16}{9}x$", "$y = \\pm \\frac{5}{3}x$", "They are y = ±(b/a)x."],
        ],
      },
      {
        week: 2,
        title: "Probability distributions: the binomial distribution",
        subtopics: ["Random variables and probability distributions", "Expectation and variance", "The binomial distribution", "Mean and variance of the binomial distribution"],
        objectives: ["Define a discrete random variable and its probability distribution", "Calculate the expectation and variance of a discrete random variable", "Calculate binomial probabilities", "Find the mean and variance of a binomial distribution"],
        lesson: {
          title: "Discrete Probability Distributions",
          summary: "Calculate expectations and binomial probabilities.",
          minutes: 40,
          notes: `## Random variables
A **random variable** $X$ takes numerical values determined by the outcome of an experiment. It is **discrete** if it takes separate values (number of heads, number of defective items) and **continuous** if it can take any value in a range (height, time).
A **probability distribution** lists each value $x$ with its probability $P(X = x)$; the probabilities add up to 1.

## Expectation and variance
- **expectation (mean):** $E(X) = \\sum x \\, P(X = x)$
- **variance:** $\\text{Var}(X) = E(X^2) - [E(X)]^2$
*Example:* for a fair die, $E(X) = \\frac{1 + 2 + \\dots + 6}{6} = 3.5$.
*Example:*
| $x$ | 0 | 1 | 2 |
|---|---|---|---|
| $P(X = x)$ | 0.2 | 0.5 | 0.3 |
$E(X) = 0 + 0.5 + 0.6 = 1.1$; $E(X^2) = 0.5 + 1.2 = 1.7$; variance $= 1.7 - 1.21 = 0.49$.

## The binomial distribution
It applies when
1. there is a **fixed number $n$ of trials**
2. each trial has only **two outcomes** — "success" and "failure"
3. the probability of success $p$ is **the same** in every trial ($q = 1 - p$)
4. the trials are **independent**
Then
$P(X = r) = \\, ^{n}C_{r} \\, p^r q^{n-r}$
for $r = 0, 1, 2, \\dots, n$. We write $X \\sim B(n, p)$.

### Examples
- a coin tossed 3 times, exactly 2 heads: $^{3}C_{2}\\left(\\frac{1}{2}\\right)^2\\left(\\frac{1}{2}\\right) = \\frac{3}{8}$
- no head in 3 tosses: $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$
- a die thrown 3 times, exactly one six: $^{3}C_{1}\\left(\\frac{1}{6}\\right)\\left(\\frac{5}{6}\\right)^2 = \\frac{75}{216} = \\frac{25}{72}$
- $n = 5$, $p = 0.4$: $P(X = 2) = 10(0.4)^2(0.6)^3 = 10(0.16)(0.216) = 0.3456$

### "At least" and "at most"
$P(X \\ge 1) = 1 - P(X = 0)$
At least one head in 4 tosses: $1 - \\left(\\frac{1}{2}\\right)^4 = \\frac{15}{16}$.
$P(X \\le 1) = P(0) + P(1)$.

## Mean and variance
For $X \\sim B(n, p)$:
- mean $= np$
- variance $= npq$
- standard deviation $= \\sqrt{npq}$
*Examples:* $n = 10$, $p = 0.5$: mean 5. $n = 20$, $p = 0.5$: variance $20 \\times 0.5 \\times 0.5 = 5$. $n = 100$, $p = 0.2$: variance 16, standard deviation 4.

### Finding n and p
If the mean is 6 and the variance 4.2, then $q = \\frac{4.2}{6} = 0.7$, $p = 0.3$ and $n = 20$.

## Where it applies
tossing coins, quality control (defective or not), multiple-choice guessing, survival or death, male or female births.`,
          examples: `**Example 1.** A fair coin is tossed 4 times. Find the probability of exactly 2 heads. *Solution:* $^{4}C_{2}\\left(\\frac{1}{2}\\right)^4 = \\frac{6}{16} = \\frac{3}{8}$.

**Example 2.** $X \\sim B(8, 0.25)$. Find the mean and variance. *Solution:* mean $= 2$; variance $= 8 \\times 0.25 \\times 0.75 = 1.5$.

**Example 3.** 10% of bulbs are defective. Find the probability that none of 3 chosen bulbs is defective. *Solution:* $(0.9)^3 = 0.729$.`,
        },
        questions: [
          ["E", "In a binomial experiment, each trial has", "two possible outcomes", "three possible outcomes", "one possible outcome", "infinitely many outcomes", "They are called success and failure."],
          ["E", "The mean of a binomial distribution with $n = 10$ and $p = 0.5$ is", "5", "2.5", "10", "0.5", "The mean is np."],
          ["E", "The probabilities in a probability distribution must add up to", "1", "0", "100", "the number of values", "One of the outcomes is certain to occur."],
          ["M", "A fair coin is tossed 3 times. The probability of obtaining exactly 2 heads is", "$\\frac{3}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{8}$", "$\\frac{1}{2}$", "3 × (½)² × ½. Answer: $\\frac{3}{8}$."],
          ["M", "The variance of a binomial distribution with $n = 20$ and $p = 0.5$ is", "5", "10", "2.5", "20", "The variance is npq."],
          ["M", "A fair coin is tossed 3 times. The probability of obtaining no head is", "$\\frac{1}{8}$", "$\\frac{3}{8}$", "$\\frac{1}{3}$", "$\\frac{7}{8}$", "(½) cubed. Answer: $\\frac{1}{8}$."],
          ["M", "The standard deviation of a binomial distribution with $n = 100$ and $p = 0.2$ is", "4", "16", "20", "8", "The square root of 100 × 0.2 × 0.8."],
          ["H", "A fair die is thrown 3 times. The probability of obtaining exactly one six is", "$\\frac{25}{72}$", "$\\frac{1}{6}$", "$\\frac{25}{216}$", "$\\frac{5}{72}$", "3 × (1/6) × (5/6)²."],
          ["H", "A fair coin is tossed 4 times. The probability of obtaining at least one head is", "$\\frac{15}{16}$", "$\\frac{1}{16}$", "$\\frac{3}{4}$", "$\\frac{1}{4}$", "One minus the probability of no head."],
          ["H", "If $X \\sim B(5, 0.4)$, then $P(X = 2)$ is", "0.3456", "0.2304", "0.0768", "0.1600", "10 × 0.16 × 0.216."],
        ],
      },
      {
        week: 3,
        title: "Statics: forces, equilibrium and moments",
        subtopics: ["Resultant of forces", "Resolution of forces", "Equilibrium of a particle and Lami's theorem", "Moments and equilibrium of rigid bodies"],
        objectives: ["Find the resultant of two or more forces", "Resolve a force into components", "Apply the conditions of equilibrium and Lami's theorem", "Apply the principle of moments"],
        lesson: {
          title: "Forces in Equilibrium",
          summary: "Find resultants and apply the conditions of equilibrium and the principle of moments.",
          minutes: 40,
          notes: `## Force
A **force** is a push or pull, measured in **newtons (N)**. It is a vector. The **weight** of a body of mass $m$ is $mg$.

## Resultant
The single force having the same effect as two or more forces.
- same direction: add — 6 N and 8 N give 14 N
- opposite directions: subtract
- at right angles: $R = \\sqrt{P^2 + Q^2}$ — 3 N and 4 N give 5 N
- at angle $\\theta$ (parallelogram law): $R^2 = P^2 + Q^2 + 2PQ\\cos \\theta$
*Example:* two forces of 5 N at $60^\\circ$: $R^2 = 25 + 25 + 25 = 75$, so $R = 5\\sqrt{3}$ N.

## Resolution
A force $F$ at angle $\\theta$ to the horizontal has
- horizontal component $F\\cos \\theta$
- vertical component $F\\sin \\theta$
*Example:* 20 N at $30^\\circ$: horizontal $= 20\\cos 30^\\circ = 10\\sqrt{3}$ N; vertical $= 10$ N.
### Resultant of several forces
Resolve each in two perpendicular directions; sum to get $X$ and $Y$; then $R = \\sqrt{X^2 + Y^2}$ and $\\tan \\alpha = \\frac{Y}{X}$.

## Equilibrium of a particle
A particle is in **equilibrium** when the **resultant force is zero**: $\\sum X = 0$ and $\\sum Y = 0$. The force that balances a system is the **equilibrant** — equal and opposite to the resultant.

### Triangle of forces
Three forces in equilibrium can be represented by the sides of a triangle taken in order.

### Lami's theorem
If three forces $P$, $Q$, $R$ acting at a point are in equilibrium:
$\\frac{P}{\\sin \\alpha} = \\frac{Q}{\\sin \\beta} = \\frac{R}{\\sin \\gamma}$
where $\\alpha$, $\\beta$, $\\gamma$ are the angles **opposite** each force (between the other two).
*Example:* a weight of 100 N hangs from two strings, each inclined at $30^\\circ$ to the horizontal. Resolving vertically: $2T\\sin 30^\\circ = 100$, so $T = 100$ N.

## Friction
Friction opposes motion. Limiting friction $F = \\mu R$, where $\\mu$ is the coefficient of friction and $R$ the normal reaction. On a rough plane inclined at $\\theta$, a body is about to slip when $\\tan \\theta = \\mu$.

## Moments
The **moment** of a force about a point is
$\\text{moment} = \\text{force} \\times \\text{perpendicular distance}$
measured in **N m**. A force of 10 N at 2 m from a pivot has a moment of 20 N m.

### Principle of moments
For a body in equilibrium, **the sum of the clockwise moments about any point equals the sum of the anticlockwise moments** about that point.
*Example:* a weight of 30 N at 2 m from the pivot of a see-saw balances $W$ at 3 m: $30 \\times 2 = 3W$, so $W = 20$ N.

### Conditions for equilibrium of a rigid body
1. the resultant force is zero
2. the resultant moment about any point is zero

### Beam problems
A uniform beam's weight acts at its **midpoint**.
*Example:* a uniform beam $AB$ of length 4 m and weight 60 N rests on supports at $A$ and $B$, with a load of 40 N at 1 m from $A$. Moments about $A$: $4R_B = 60 \\times 2 + 40 \\times 1 = 160$, so $R_B = 40$ N. Then $R_A = 100 - 40 = 60$ N.

## Couples
Two equal, opposite, parallel forces not in the same line form a **couple**; its moment is force × distance between them, and it produces rotation only.

## Centre of gravity
The point through which the weight of a body acts.`,
          examples: `**Example 1.** Find the resultant of forces of 5 N and 12 N at right angles. *Solution:* $\\sqrt{25 + 144} = 13$ N.

**Example 2.** Find the vertical component of a force of 50 N inclined at $30^\\circ$ to the horizontal. *Solution:* $50\\sin 30^\\circ = 25$ N.

**Example 3.** A force of 15 N acts 0.4 m from a pivot. Find its moment. *Solution:* $15 \\times 0.4 = 6$ N m.`,
        },
        questions: [
          ["E", "The resultant of forces of 3 N and 4 N acting at right angles is", "5 N", "7 N", "1 N", "12 N", "The square root of 9 + 16."],
          ["E", "The SI unit of the moment of a force is the", "newton metre", "newton", "joule per second", "kilogram metre", "It is force multiplied by distance."],
          ["E", "A particle is in equilibrium when the resultant force on it is", "zero", "a maximum", "equal to its weight", "upward", "The forces balance one another."],
          ["M", "The moment of a force of 10 N about a point 2 m from its line of action is", "20 N m", "5 N m", "12 N m", "8 N m", "Force times perpendicular distance."],
          ["M", "Two forces of 6 N and 8 N act on a particle in the same direction. Their resultant is", "14 N", "10 N", "2 N", "48 N", "Forces in the same direction are added."],
          ["M", "A force of 20 N acts at $30^\\circ$ to the horizontal. Its horizontal component is", "$10\\sqrt{3}$ N", "10 N", "$20\\sqrt{3}$ N", "$\\frac{20}{\\sqrt{3}}$ N", "20 cos 30°. Answer: $10\\sqrt{3}$ N."],
          ["M", "A weight of 30 N placed 2 m from the pivot of a see-saw is balanced by a weight $W$ placed 3 m from the pivot on the other side. The value of $W$ is", "20 N", "45 N", "60 N", "10 N", "30 × 2 = W × 3."],
          ["H", "Two forces, each of 5 N, act at a point at an angle of $60^\\circ$ to each other. The magnitude of their resultant is", "$5\\sqrt{3}$ N", "10 N", "5 N", "$5\\sqrt{2}$ N", "R² = 25 + 25 + 25."],
          ["H", "A weight of 100 N is supported by two strings, each inclined at $30^\\circ$ to the horizontal. The tension in each string is", "100 N", "50 N", "$50\\sqrt{3}$ N", "200 N", "2T sin 30° = 100."],
          ["H", "A uniform beam $AB$, 4 m long and of weight 60 N, rests on supports at $A$ and $B$. A load of 40 N is placed 1 m from $A$. The reaction at $B$ is", "40 N", "60 N", "50 N", "100 N", "Taking moments about A: 4R = 120 + 40."],
        ],
      },
      {
        week: 4,
        title: "Dynamics: Newton's laws and momentum",
        subtopics: ["Newton's laws of motion", "Motion of connected particles and lifts", "Momentum and impulse", "Conservation of linear momentum"],
        objectives: ["State and apply Newton's laws of motion", "Solve problems on connected particles and lifts", "Calculate momentum and impulse", "Apply the principle of conservation of linear momentum"],
        lesson: {
          title: "Force and Motion",
          summary: "Apply Newton's laws and the conservation of momentum.",
          minutes: 40,
          notes: `## Newton's laws of motion
1. **First law (inertia):** a body remains at rest or in uniform motion in a straight line unless acted on by a resultant external force.
2. **Second law:** the rate of change of momentum is proportional to the resultant force and takes place in its direction: $F = ma$.
3. **Third law:** to every action there is an equal and opposite reaction.

### Using $F = ma$
$F$ is the **resultant** force in newtons, $m$ the mass in kg, $a$ in m/s².
- a force of 20 N on a 4 kg mass: $a = 5$ m/s²
- to give 5 kg an acceleration of 2 m/s²: $F = 10$ N
- weight $W = mg$: a mass of 5 kg weighs 50 N ($g = 10$ m/s²)
With friction or resistance $R$: $F - R = ma$.

## Motion on an inclined plane
On a smooth plane inclined at $\\theta$, the component of weight down the plane is $mg\\sin \\theta$, so $a = g\\sin \\theta$. The normal reaction is $mg\\cos \\theta$.

## Lifts
A person of mass $m$ in a lift; the floor exerts a reaction $R$:
- accelerating **upwards** at $a$: $R - mg = ma$, so $R = m(g + a)$
- accelerating **downwards**: $R = m(g - a)$
- at rest or uniform velocity: $R = mg$
*Example:* a 60 kg man in a lift accelerating upwards at 2 m/s²: $R = 60(10 + 2) = 720$ N.

## Connected particles
Two masses $m_1 > m_2$ joined by a light inextensible string over a smooth pulley:
- for $m_1$: $m_1 g - T = m_1 a$
- for $m_2$: $T - m_2 g = m_2 a$
Adding: $a = \\frac{(m_1 - m_2)g}{m_1 + m_2}$ and $T = \\frac{2m_1 m_2 g}{m_1 + m_2}$.
*Example:* 3 kg and 2 kg: $a = \\frac{10}{5} = 2$ m/s²; $T = \\frac{2 \\times 3 \\times 2 \\times 10}{5} = 24$ N.

## Momentum
$\\text{momentum} = mv$, in kg m/s — a vector. A 4 kg body moving at 3 m/s has momentum 12 kg m/s.

## Impulse
$\\text{impulse} = Ft = mv - mu$
Impulse equals the **change in momentum**; unit N s. A force of 10 N acting for 3 s gives an impulse of 30 N s.

## Conservation of linear momentum
**In a system of colliding bodies, the total momentum before collision equals the total momentum after collision**, provided no external force acts.
$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$
*Example:* a 2 kg body moving at 6 m/s strikes a stationary 4 kg body and they move on together: $12 = 6v$, so $v = 2$ m/s.
Take one direction as positive; a body moving the other way has negative velocity.

### Types of collision
- **elastic**: kinetic energy is also conserved
- **inelastic**: kinetic energy is lost (as heat and sound); bodies that stick together are perfectly inelastic
*Example:* in the collision above, kinetic energy falls from $\\frac{1}{2}(2)(36) = 36$ J to $\\frac{1}{2}(6)(4) = 12$ J.

### Recoil
A gun of mass $M$ firing a bullet of mass $m$ at speed $v$ recoils at $V = \\frac{mv}{M}$.`,
          examples: `**Example 1.** Find the force needed to accelerate a 12 kg mass at 3 m/s². *Solution:* $F = 36$ N.

**Example 2.** A 0.5 kg ball's velocity changes from 4 m/s to 10 m/s. Find the impulse. *Solution:* $0.5(10 - 4) = 3$ N s.

**Example 3.** A 3 kg trolley at 4 m/s collides with and sticks to a stationary 1 kg trolley. Find the common velocity. *Solution:* $12 = 4v$, so $v = 3$ m/s.`,
        },
        questions: [
          ["E", "The force required to give a mass of 5 kg an acceleration of 2 m/s² is", "10 N", "2.5 N", "7 N", "0.4 N", "F = ma. Answer: 10 N."],
          ["E", "The momentum of a body is the product of its mass and its", "velocity", "acceleration", "weight", "displacement", "It is a vector quantity."],
          ["E", "Newton's first law of motion is also known as the law of", "inertia", "gravitation", "action and reaction", "conservation of energy", "A body resists changes to its state of motion."],
          ["M", "The momentum of a body of mass 4 kg moving at 3 m/s is", "12 kg m/s", "7 kg m/s", "0.75 kg m/s", "36 kg m/s", "Mass times velocity."],
          ["M", "A resultant force of 20 N acts on a body of mass 4 kg. Its acceleration is", "5 m/s²", "80 m/s²", "16 m/s²", "0.2 m/s²", "a = F ÷ m. Answer: 5 m/s²."],
          ["M", "A force of 10 N acts on a body for 3 s. The impulse of the force is", "30 N s", "3.3 N s", "13 N s", "0.3 N s", "Impulse = force × time."],
          ["M", "Taking $g = 10$ m/s², the weight of a body of mass 5 kg is", "50 N", "5 N", "0.5 N", "15 N", "W = mg. Answer: 50 N."],
          ["H", "A body of mass 2 kg moving at 6 m/s collides with a stationary body of mass 4 kg and they move on together. Their common velocity is", "2 m/s", "3 m/s", "4 m/s", "1 m/s", "12 = 6v. Answer: 2 m/s."],
          ["H", "A man of mass 60 kg stands in a lift accelerating upwards at 2 m/s². Taking $g = 10$ m/s², the reaction of the floor on him is", "720 N", "480 N", "600 N", "120 N", "R = m(g + a). Answer: 720 N."],
          ["H", "Masses of 3 kg and 2 kg are connected by a light string passing over a smooth fixed pulley. Taking $g = 10$ m/s², the acceleration of the system is", "2 m/s²", "10 m/s²", "5 m/s²", "1 m/s²", "(3 − 2) × 10 ÷ 5."],
        ],
      },
      {
        week: 5,
        title: "Projectiles",
        subtopics: ["Horizontal and vertical components of motion", "Time of flight and greatest height", "Horizontal range and maximum range", "Horizontal projection from a height"],
        objectives: ["Resolve the velocity of projection into components", "Calculate the time of flight and greatest height", "Calculate the range and the angle for maximum range", "Solve problems on bodies projected horizontally from a height"],
        lesson: {
          title: "Motion of a Projectile",
          summary: "Analyse the motion of a body projected under gravity.",
          minutes: 40,
          notes: `## Projectile
A body thrown into the air and then moving freely under **gravity alone** (air resistance neglected). Its path — the **trajectory** — is a **parabola**.

## Two independent motions
For speed of projection $u$ at angle $\\theta$ to the horizontal:
| | Horizontal | Vertical |
|---|---|---|
| initial velocity | $u\\cos \\theta$ | $u\\sin \\theta$ |
| acceleration | **zero** | $-g$ |
| velocity at time $t$ | $u\\cos \\theta$ (constant) | $u\\sin \\theta - gt$ |
| displacement at time $t$ | $x = (u\\cos \\theta)t$ | $y = (u\\sin \\theta)t - \\frac{1}{2}gt^2$ |
*Example:* 40 m/s at $60^\\circ$: horizontal component $40\\cos 60^\\circ = 20$ m/s; vertical component $20\\sqrt{3}$ m/s.

## Standard results
### Time to greatest height
Vertical velocity is zero: $t = \\frac{u\\sin \\theta}{g}$
### Time of flight
$T = \\frac{2u\\sin \\theta}{g}$
### Greatest height
$H = \\frac{u^2\\sin^2 \\theta}{2g}$
### Horizontal range
$R = (u\\cos \\theta)T = \\frac{u^2\\sin 2\\theta}{g}$

### Worked example
$u = 20$ m/s, $\\theta = 30^\\circ$, $g = 10$ m/s²:
- $T = \\frac{2(20)(0.5)}{10} = 2$ s
- $H = \\frac{400(0.25)}{20} = 5$ m
- $R = \\frac{400\\sin 60^\\circ}{10} = 20\\sqrt{3}$ m

## Maximum range
$R$ is greatest when $\\sin 2\\theta = 1$, that is $\\theta = 45^\\circ$:
$R_{\\max} = \\frac{u^2}{g}$
With $u = 30$ m/s: $R_{\\max} = \\frac{900}{10} = 90$ m.
### Complementary angles
Angles $\\theta$ and $90^\\circ - \\theta$ (for example $30^\\circ$ and $60^\\circ$) give the **same range**, since $\\sin 2\\theta$ is the same.

## At the highest point
The vertical velocity is zero, but the body still moves **horizontally** with speed $u\\cos \\theta$; its acceleration is still $g$ downwards.

## Velocity at any instant
Speed $= \\sqrt{v_x^2 + v_y^2}$; direction $\\tan \\alpha = \\frac{v_y}{v_x}$. The body lands with the speed of projection at the same angle below the horizontal.

## Equation of the trajectory
Eliminating $t$:
$y = x\\tan \\theta - \\frac{gx^2}{2u^2\\cos^2 \\theta}$
— a quadratic in $x$, hence a parabola.

## Horizontal projection from a height
A body projected horizontally with speed $u$ from height $h$:
- vertically it falls from rest: $h = \\frac{1}{2}gt^2$, so $t = \\sqrt{\\frac{2h}{g}}$
- horizontally: $x = ut$
*Example:* thrown horizontally at 15 m/s from a height of 20 m: $t = \\sqrt{4} = 2$ s; it lands $15 \\times 2 = 30$ m from the foot of the building. Its vertical speed on landing is 20 m/s, so its speed is $\\sqrt{225 + 400} = 25$ m/s.

## Applications
throwing the javelin and shot, kicking a ball, water from a hose, artillery.`,
          examples: `**Example 1.** A ball is kicked at 30 m/s at $30^\\circ$ to the ground. Find the time of flight ($g = 10$ m/s²). *Solution:* $T = \\frac{2(30)(0.5)}{10} = 3$ s.

**Example 2.** Find the greatest height in Example 1. *Solution:* $H = \\frac{900(0.25)}{20} = 11.25$ m.

**Example 3.** Find the maximum range of a projectile fired at 50 m/s. *Solution:* $\\frac{2500}{10} = 250$ m.`,
        },
        questions: [
          ["E", "The path of a projectile under gravity is", "a parabola", "a straight line", "a circle", "an ellipse", "Air resistance is neglected."],
          ["E", "For a given speed of projection, the horizontal range is greatest when the angle of projection is", "$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$", "sin 2θ is then equal to 1."],
          ["E", "The horizontal acceleration of a projectile, neglecting air resistance, is", "zero", "$g$", "$2g$", "$g\\cos \\theta$", "No horizontal force acts on it."],
          ["M", "A projectile is fired at 20 m/s at $30^\\circ$ to the horizontal. Taking $g = 10$ m/s², the time of flight is", "2 s", "4 s", "1 s", "$2\\sqrt{3}$ s", "T = 2u sin θ ÷ g."],
          ["M", "A projectile is fired at 20 m/s at $30^\\circ$ to the horizontal. Taking $g = 10$ m/s², the greatest height reached is", "5 m", "10 m", "20 m", "15 m", "400 × 0.25 ÷ 20."],
          ["M", "The maximum horizontal range of a projectile fired with a speed of 30 m/s ($g = 10$ m/s²) is", "90 m", "45 m", "180 m", "30 m", "u² ÷ g. Answer: 90 m."],
          ["M", "A body is projected at 40 m/s at $60^\\circ$ to the horizontal. The horizontal component of its velocity is", "20 m/s", "$20\\sqrt{3}$ m/s", "40 m/s", "80 m/s", "40 cos 60°. Answer: 20 m/s."],
          ["H", "A projectile is fired at 20 m/s at $30^\\circ$ to the horizontal. Taking $g = 10$ m/s², its horizontal range is", "$20\\sqrt{3}$ m", "20 m", "40 m", "$40\\sqrt{3}$ m", "400 × sin 60° ÷ 10."],
          ["H", "A stone is thrown horizontally at 15 m/s from the top of a building 20 m high. Taking $g = 10$ m/s², it strikes the ground at a horizontal distance of", "30 m", "15 m", "60 m", "300 m", "It falls for 2 s while moving at 15 m/s horizontally."],
          ["H", "Two projectiles are fired with the same speed at $30^\\circ$ and $60^\\circ$ to the horizontal. Their horizontal ranges are", "equal", "in the ratio 1 : 2", "in the ratio 1 : 3", "in the ratio 2 : 1", "sin 60° equals sin 120°."],
        ],
      },
    ],
  },
];
