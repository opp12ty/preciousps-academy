import type { TermPlan } from "../types";

/** SS3 Further Mathematics, third term — original Precious PS content. */
export const ss3Term3: TermPlan = {
  classCode: "SS3",
  term: 3,
  topics: [
    {
      week: 1,
      title: "Calculus of exponential and logarithmic functions",
      subtopics: ["The exponential function and natural logarithm", "Differentiating exponential functions", "Differentiating logarithmic functions", "Integrals and applications"],
      objectives: ["Describe the exponential function and the natural logarithm", "Differentiate exponential functions", "Differentiate logarithmic functions", "Integrate exponential functions and apply the results"],
      lesson: {
        title: "Exponentials and Logarithms in Calculus",
        summary: "Differentiate and integrate exponential and logarithmic functions.",
        minutes: 40,
        notes: `## The number e
$e \\approx 2.71828$ is an irrational number defined by
$e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + \\dots$

## The exponential function
$y = e^x$ is always positive, passes through $(0, 1)$ since $e^0 = 1$, increases ever more rapidly, and approaches the $x$-axis as $x \\to -\\infty$.
$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$

## The natural logarithm
$\\ln x = \\log_e x$ is the **inverse** of $e^x$: $y = e^x \\Leftrightarrow x = \\ln y$.
- $\\ln e = 1$; $\\ln 1 = 0$
- $e^{\\ln x} = x$ and $\\ln e^x = x$
- defined only for $x > 0$
- its graph is the reflection of $y = e^x$ in the line $y = x$
The laws of logarithms apply: $\\ln ab = \\ln a + \\ln b$; $\\ln a^n = n\\ln a$.

## Differentiating exponential functions
| $y$ | $\\frac{dy}{dx}$ |
|---|---|
| $e^x$ | $e^x$ |
| $e^{ax}$ | $ae^{ax}$ |
| $e^{f(x)}$ | $f'(x)e^{f(x)}$ |
| $a^x$ | $a^x \\ln a$ |
$e^x$ is the only function that is its own derivative.
*Examples:*
- $\\frac{d}{dx}(e^{3x}) = 3e^{3x}$
- $\\frac{d}{dx}(e^{x^2}) = 2xe^{x^2}$
- $\\frac{d}{dx}(2^x) = 2^x \\ln 2$
- product rule: $\\frac{d}{dx}(xe^x) = e^x + xe^x = e^x(1 + x)$
- quotient rule: $\\frac{d}{dx}\\left(\\frac{e^x}{x}\\right) = \\frac{xe^x - e^x}{x^2} = \\frac{e^x(x - 1)}{x^2}$

## Differentiating logarithmic functions
| $y$ | $\\frac{dy}{dx}$ |
|---|---|
| $\\ln x$ | $\\frac{1}{x}$ |
| $\\ln (ax + b)$ | $\\frac{a}{ax + b}$ |
| $\\ln f(x)$ | $\\frac{f'(x)}{f(x)}$ |
| $\\log_a x$ | $\\frac{1}{x\\ln a}$ |
*Examples:*
- $\\frac{d}{dx}\\ln (2x + 1) = \\frac{2}{2x + 1}$
- $\\frac{d}{dx}\\ln (x^2 + 1) = \\frac{2x}{x^2 + 1}$
- $\\frac{d}{dx}(x\\ln x) = \\ln x + 1$
Simplify with the laws of logarithms first: $\\ln \\frac{x + 1}{x - 1} = \\ln (x + 1) - \\ln (x - 1)$.

### Logarithmic differentiation
For awkward products or powers, take logarithms first. If $y = x^x$, then $\\ln y = x\\ln x$, so $\\frac{1}{y}\\frac{dy}{dx} = \\ln x + 1$ and $\\frac{dy}{dx} = x^x(\\ln x + 1)$.

## Integrals
- $\\int e^x \\, dx = e^x + C$; $\\int e^{ax} \\, dx = \\frac{1}{a}e^{ax} + C$
- $\\int \\frac{1}{x} \\, dx = \\ln x + C$ for $x > 0$
- $\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$
*Example:* $\\int_0^1 e^x \\, dx = e - 1 \\approx 1.718$.
*Example:* $\\int_1^e \\frac{1}{x} \\, dx = \\ln e - \\ln 1 = 1$.

## Applications
### Growth and decay
$N = N_0 e^{kt}$ has rate of change $\\frac{dN}{dt} = kN$ — proportional to the amount present.
### Stationary points
$y = xe^{-x}$: $\\frac{dy}{dx} = e^{-x}(1 - x) = 0$ at $x = 1$; maximum value $\\frac{1}{e}$.
### Tangents
The gradient of $y = \\ln x$ at $x = 2$ is $\\frac{1}{2}$; the gradient of $y = e^x$ at $x = 0$ is 1.

## Inverse trigonometric functions (for reference)
$\\frac{d}{dx}\\sin^{-1} x = \\frac{1}{\\sqrt{1 - x^2}}$ and $\\frac{d}{dx}\\tan^{-1} x = \\frac{1}{1 + x^2}$.`,
        examples: `**Example 1.** Differentiate $y = e^{5x}$. *Solution:* $5e^{5x}$.

**Example 2.** Differentiate $y = \\ln (3x - 4)$. *Solution:* $\\frac{3}{3x - 4}$.

**Example 3.** Evaluate $\\int_0^2 e^{2x} \\, dx$. *Solution:* $\\left[\\frac{1}{2}e^{2x}\\right]_0^2 = \\frac{1}{2}(e^4 - 1)$.`,
      },
      questions: [
        ["E", "The derivative of $e^x$ with respect to $x$ is", "$e^x$", "$xe^{x-1}$", "$\\frac{1}{x}$", "$e$", "It is the only function equal to its own derivative."],
        ["E", "The derivative of $\\ln x$ with respect to $x$ is", "$\\frac{1}{x}$", "$e^x$", "$x$", "$\\frac{1}{x^2}$", "This is a standard result."],
        ["E", "The value of $\\ln e$ is", "1", "0", "$e$", "2.718", "The natural logarithm has base e."],
        ["M", "Differentiate $e^{3x}$ with respect to $x$.", "$3e^{3x}$", "$e^{3x}$", "$3xe^{3x}$", "$\\frac{1}{3}e^{3x}$", "Multiply by the derivative of 3x."],
        ["M", "Differentiate $\\ln (2x + 1)$ with respect to $x$.", "$\\frac{2}{2x + 1}$", "$\\frac{1}{2x + 1}$", "$\\frac{2}{x}$", "$2\\ln (2x + 1)$", "The derivative of the bracket over the bracket."],
        ["M", "Differentiate $xe^x$ with respect to $x$.", "$e^x(1 + x)$", "$e^x$", "$xe^x$", "$x^2e^x$", "Use the product rule."],
        ["M", "Evaluate $\\int_0^1 e^x \\, dx$.", "$e - 1$", "$e$", "$e + 1$", "1", "e to the power 1 minus e to the power 0."],
        ["H", "Differentiate $\\ln (x^2 + 1)$ with respect to $x$.", "$\\frac{2x}{x^2 + 1}$", "$\\frac{1}{x^2 + 1}$", "$\\frac{2}{x}$", "$2x\\ln (x^2 + 1)$", "f′(x) divided by f(x)."],
        ["H", "Differentiate $e^{x^2}$ with respect to $x$.", "$2xe^{x^2}$", "$e^{x^2}$", "$x^2e^{x^2 - 1}$", "$2e^{x^2}$", "By the chain rule, multiply by 2x."],
        ["H", "Differentiate $2^x$ with respect to $x$.", "$2^x \\ln 2$", "$x2^{x-1}$", "$2^x$", "$\\frac{2^x}{\\ln 2}$", "Write 2 to the power x as e to the power x ln 2."],
      ],
    },
    {
      week: 2,
      title: "WAEC revision: pure mathematics",
      subtopics: ["Algebra: indices, surds, logarithms, polynomials and series", "Coordinate geometry and trigonometry", "Calculus", "Matrices, vectors and logic"],
      objectives: ["Recall and apply the key results of algebra", "Solve problems in coordinate geometry and trigonometry", "Differentiate and integrate standard functions and apply the results", "Solve problems on matrices, vectors and logic"],
      lesson: {
        title: "Revision of Pure Mathematics",
        summary: "Revise the main results of pure mathematics for the final examinations.",
        minutes: 40,
        notes: `## 1. Algebra
- indices: $a^m a^n = a^{m+n}$; $a^{-n} = \\frac{1}{a^n}$; $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$
- logarithms: $\\log MN = \\log M + \\log N$; $\\log M^p = p\\log M$; $\\log_a N = \\frac{\\log_b N}{\\log_b a}$
- surds: rationalise with the conjugate
- quadratics: $\\alpha + \\beta = -\\frac{b}{a}$, $\\alpha\\beta = \\frac{c}{a}$; discriminant $b^2 - 4ac$
- **remainder theorem**: remainder on division by $(x - a)$ is $f(a)$; **factor theorem**: $(x - a)$ is a factor if $f(a) = 0$
- partial fractions: linear, repeated and quadratic factors
- binary operations: closure, commutativity, associativity, identity, inverse
- functions: composite $g(f(x))$; inverse by making $x$ the subject

## 2. Sequences and the binomial theorem
- AP: $T_n = a + (n - 1)d$; $S_n = \\frac{n}{2}[2a + (n - 1)d]$
- GP: $T_n = ar^{n-1}$; $S_n = \\frac{a(r^n - 1)}{r - 1}$; $S_\\infty = \\frac{a}{1 - r}$ for $|r| < 1$
- $(a + b)^n$: general term $^{n}C_{r}a^{n-r}b^r$

## 3. Coordinate geometry
- distance, midpoint, gradient; $m_1 = m_2$ (parallel); $m_1m_2 = -1$ (perpendicular)
- perpendicular distance $\\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}$
- circle $x^2 + y^2 + 2gx + 2fy + c = 0$: centre $(-g, -f)$, radius $\\sqrt{g^2 + f^2 - c}$
- parabola $y^2 = 4ax$: focus $(a, 0)$, directrix $x = -a$; ellipse $b^2 = a^2(1 - e^2)$; hyperbola $b^2 = a^2(e^2 - 1)$

## 4. Trigonometry
- $\\sin^2 \\theta + \\cos^2 \\theta = 1$; $1 + \\tan^2 \\theta = \\sec^2 \\theta$
- $\\sin(A \\pm B)$, $\\cos(A \\pm B)$, $\\tan(A \\pm B)$; $\\sin 2A = 2\\sin A\\cos A$; $\\cos 2A = 1 - 2\\sin^2 A$
- $a\\cos x + b\\sin x = R\\cos(x - \\alpha)$, $R = \\sqrt{a^2 + b^2}$
- radians: $\\pi = 180^\\circ$; $s = r\\theta$; $A = \\frac{1}{2}r^2\\theta$
- sine and cosine rules

## 5. Differentiation
- $\\frac{d}{dx}x^n = nx^{n-1}$; $\\sin x \\to \\cos x$; $\\cos x \\to -\\sin x$; $e^x \\to e^x$; $\\ln x \\to \\frac{1}{x}$
- product, quotient and chain rules
- stationary points: $\\frac{dy}{dx} = 0$; maximum if $\\frac{d^2y}{dx^2} < 0$, minimum if $> 0$
- tangent and normal; rates of change; $v = \\frac{ds}{dt}$, $a = \\frac{dv}{dt}$

## 6. Integration
- $\\int x^n \\, dx = \\frac{x^{n+1}}{n + 1} + C$ ($n \\ne -1$)
- area $= \\int_a^b y \\, dx$; volume of revolution $= \\pi\\int_a^b y^2 \\, dx$
- substitution, parts, partial fractions; the trapezium rule
- differential equations: direct integration and separable variables

## 7. Matrices and transformations
- $|A| = ad - bc$; $A^{-1} = \\frac{1}{|A|}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$; singular if $|A| = 0$
- the columns of a transformation matrix are the images of $(1, 0)$ and $(0, 1)$; area factor $= |\\det|$

## 8. Vectors
- magnitude; unit vector; $\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$
- $\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos \\theta$; perpendicular if the scalar product is zero

## 9. Logic and sets
- $p \\Rightarrow q$ is false only when $p$ is true and $q$ false; the contrapositive is equivalent
- De Morgan's laws for sets and for statements
- $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$

## Examination technique
State the formula; substitute carefully; keep exact forms (surds, fractions, $\\pi$) unless told to round; include the constant of integration; label sketches; check answers by substitution.`,
        examples: `**Example 1.** Find the remainder when $x^3 - 3x + 4$ is divided by $(x + 2)$. *Solution:* $f(-2) = -8 + 6 + 4 = 2$.

**Example 2.** Find the gradient of $y = 2x^3 - 5x$ at $x = 1$. *Solution:* $6x^2 - 5 = 1$.

**Example 3.** Evaluate $\\int_1^2 (3x^2 - 1) \\, dx$. *Solution:* $[x^3 - x]_1^2 = 6 - 0 = 6$.`,
      },
      questions: [
        ["E", "Evaluate $\\log_2 32$.", "5", "16", "4", "6", "2 raised to the power 5 gives 32."],
        ["E", "The sum of the roots of $2x^2 - 8x + 3 = 0$ is", "4", "$-4$", "$\\frac{3}{2}$", "8", "Minus b over a."],
        ["E", "Differentiate $4x^3$ with respect to $x$.", "$12x^2$", "$4x^2$", "$12x^3$", "$x^4$", "4 × 3 × x squared."],
        ["M", "The remainder when $x^3 + 2x^2 - 5$ is divided by $(x - 2)$ is", "11", "$-5$", "3", "21", "f(2) = 8 + 8 − 5."],
        ["M", "Evaluate $\\int_0^2 (2x + 1) \\, dx$.", "6", "5", "4", "10", "x² + x evaluated at 2."],
        ["M", "The 8th term of the arithmetic progression $5, 9, 13, \\dots$ is", "33", "37", "29", "32", "5 + 7 × 4. Answer: 33."],
        ["M", "The determinant of $\\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$ is", "14", "26", "7", "$-14$", "20 − 6. Answer: 14."],
        ["H", "The coefficient of $x^2$ in the expansion of $(2 + x)^5$ is", "80", "40", "10", "32", "10 × 2 cubed. Answer: 80."],
        ["H", "The turning point of the curve $y = 2x^2 - 8x + 3$ is", "$(2, -5)$", "$(2, 3)$", "$(-2, 27)$", "$(4, 3)$", "4x − 8 = 0 gives x = 2."],
        ["H", "The centre and radius of the circle $x^2 + y^2 + 2x - 4y - 4 = 0$ are", "$(-1, 2)$ and 3", "$(1, -2)$ and 3", "$(-1, 2)$ and 9", "$(2, -4)$ and 2", "The radius is the square root of 1 + 4 + 4."],
      ],
    },
    {
      week: 3,
      title: "WAEC revision: statistics and probability",
      subtopics: ["Measures of location and dispersion", "Permutations, combinations and probability", "Probability distributions", "Correlation and regression"],
      objectives: ["Calculate measures of location and dispersion", "Solve counting and probability problems", "Use the binomial, Poisson and normal distributions", "Calculate and interpret correlation coefficients and regression lines"],
      lesson: {
        title: "Revision of Statistics and Probability",
        summary: "Revise statistics and probability for the final examinations.",
        minutes: 40,
        notes: `## 1. Measures of location
- mean $\\bar{x} = \\frac{\\sum fx}{\\sum f}$; with an assumed mean $A$: $\\bar{x} = A + \\frac{\\sum fd}{\\sum f}$
- median: the middle value; for grouped data $L + \\left(\\frac{\\frac{N}{2} - F}{f}\\right)c$
- mode: the most frequent value
- quartiles from the cumulative frequency curve (ogive)

## 2. Measures of dispersion
- range; interquartile range $Q_3 - Q_1$
- mean deviation $\\frac{\\sum |x - \\bar{x}|}{n}$
- variance $\\sigma^2 = \\frac{\\sum (x - \\bar{x})^2}{n} = \\frac{\\sum x^2}{n} - \\bar{x}^2$
- standard deviation $\\sigma = \\sqrt{\\text{variance}}$
Adding a constant to every value changes the mean but not the spread; multiplying by $k$ multiplies both the mean and the standard deviation by $k$.

## 3. Counting
- $n! = n(n - 1) \\dots 1$; $0! = 1$
- permutations (order matters): $^{n}P_{r} = \\frac{n!}{(n - r)!}$
- with repeats: $\\frac{n!}{p!\\,q!}$; in a circle: $(n - 1)!$
- combinations (order does not matter): $^{n}C_{r} = \\frac{n!}{r!(n - r)!}$
- selections from separate groups are multiplied

## 4. Probability
- $P(E) = \\frac{n(E)}{n(S)}$; $P(E') = 1 - P(E)$
- $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
- mutually exclusive: $P(A \\cup B) = P(A) + P(B)$
- independent: $P(A \\cap B) = P(A)P(B)$
- conditional: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$
- without replacement the probabilities change after each draw
- "at least one" $= 1 - P(\\text{none})$
- two dice: 36 outcomes

## 5. Distributions
| Distribution | Formula | Mean | Variance |
|---|---|---|---|
| binomial $B(n, p)$ | $^{n}C_{r}p^rq^{n-r}$ | $np$ | $npq$ |
| Poisson | $\\frac{e^{-\\lambda}\\lambda^r}{r!}$ | $\\lambda$ | $\\lambda$ |
| normal $N(\\mu, \\sigma^2)$ | $z = \\frac{x - \\mu}{\\sigma}$ | $\\mu$ | $\\sigma^2$ |
Expectation of a discrete variable: $E(X) = \\sum xP(X = x)$.

## 6. Correlation and regression
- scatter diagram; positive, negative or no correlation
- Spearman: $r_s = 1 - \\frac{6\\sum d^2}{n(n^2 - 1)}$
- the regression line passes through $(\\bar{x}, \\bar{y})$; use it to predict within the range of the data

## 7. Presenting data
frequency tables, histograms (area represents frequency), frequency polygons, cumulative frequency curves, pie charts and bar charts.

## Common errors
- forgetting to divide by $n$ when finding the variance
- using permutations where the order does not matter
- adding probabilities of events that are not mutually exclusive
- not replacing the changed totals when sampling without replacement
- forgetting to square-root the variance.`,
        examples: `**Example 1.** Find the variance of 4, 6 and 8. *Solution:* mean 6; $\\frac{4 + 0 + 4}{3} = \\frac{8}{3}$.

**Example 2.** In how many ways can the letters of the word NIGERIA be arranged? *Solution:* 7 letters with I repeated twice: $\\frac{7!}{2!} = 2520$.

**Example 3.** $X \\sim B(4, 0.5)$. Find $P(X = 3)$. *Solution:* $^{4}C_{3}(0.5)^4 = \\frac{4}{16} = 0.25$.`,
      },
      questions: [
        ["E", "The probability of an impossible event is", "0", "1", "0.5", "$-1$", "It can never occur."],
        ["E", "The median of 2, 5, 7, 9, 11 and 12 is", "8", "7", "9", "7.67", "The mean of the two middle values, 7 and 9."],
        ["E", "Evaluate $^{6}C_{2}$.", "15", "30", "12", "36", "6 × 5 divided by 2."],
        ["M", "The standard deviation of 3, 5, 7, 9 and 11, correct to two decimal places, is", "2.83", "8.00", "2.00", "3.16", "The variance is 8."],
        ["M", "A bag contains 5 red and 3 green balls. The probability that a ball drawn at random is green is", "$\\frac{3}{8}$", "$\\frac{3}{5}$", "$\\frac{5}{8}$", "$\\frac{1}{3}$", "3 green balls out of 8."],
        ["M", "The number of different arrangements of the letters of the word APPLE is", "60", "120", "24", "20", "5 factorial divided by 2 factorial."],
        ["M", "The variance of a binomial distribution with $n = 50$ and $p = 0.1$ is", "4.5", "5", "0.9", "45", "npq = 50 × 0.1 × 0.9."],
        ["H", "Two fair dice are thrown together. The probability that the total score is 9 is", "$\\frac{1}{9}$", "$\\frac{1}{12}$", "$\\frac{1}{6}$", "$\\frac{1}{4}$", "The four outcomes are (3,6), (4,5), (5,4) and (6,3)."],
        ["H", "For 8 pairs of ranked data, $\\sum d^2 = 21$. Spearman's rank correlation coefficient is", "0.75", "0.25", "0.96", "0.58", "1 − 126/504. Answer: 0.75."],
        ["H", "A committee of 3 is to be chosen from 5 men and 4 women. The number of committees containing exactly 2 women is", "30", "84", "60", "10", "6 ways of choosing the women times 5 for the man."],
      ],
    },
    {
      week: 4,
      title: "WAEC revision: mechanics",
      subtopics: ["Vectors and kinematics", "Statics", "Dynamics: Newton's laws, momentum and energy", "Projectiles"],
      objectives: ["Solve problems on vectors and motion in a straight line", "Solve problems on forces in equilibrium and moments", "Apply Newton's laws, momentum and energy principles", "Solve problems on projectiles"],
      lesson: {
        title: "Revision of Mechanics",
        summary: "Revise statics, kinematics and dynamics for the final examinations.",
        minutes: 40,
        notes: `## 1. Vectors
- scalars: mass, time, speed, energy; vectors: displacement, velocity, acceleration, force, momentum
- magnitude $|x\\mathbf{i} + y\\mathbf{j}| = \\sqrt{x^2 + y^2}$; direction $\\tan \\theta = \\frac{y}{x}$
- resultant: add components; $R^2 = P^2 + Q^2 + 2PQ\\cos \\theta$
- resolving: $F\\cos \\theta$ and $F\\sin \\theta$

## 2. Kinematics
- $v = u + at$; $s = ut + \\frac{1}{2}at^2$; $v^2 = u^2 + 2as$; $s = \\frac{1}{2}(u + v)t$
- velocity–time graph: gradient = acceleration; area = displacement
- with calculus: $v = \\frac{ds}{dt}$, $a = \\frac{dv}{dt}$; $s = \\int v \\, dt$, $v = \\int a \\, dt$
- a particle is **at rest** when $v = 0$
- free fall: $a = g$; thrown up at $u$: greatest height $\\frac{u^2}{2g}$, time up $\\frac{u}{g}$

## 3. Statics
- equilibrium of a particle: the sums of the resolved parts in two perpendicular directions are zero
- **Lami's theorem**: $\\frac{P}{\\sin \\alpha} = \\frac{Q}{\\sin \\beta} = \\frac{R}{\\sin \\gamma}$
- moment = force × perpendicular distance; **principle of moments**: clockwise = anticlockwise
- a uniform beam's weight acts at its midpoint
- friction: $F \\le \\mu R$; limiting when $F = \\mu R$
- smooth plane inclined at $\\theta$: component of weight down the plane $mg\\sin \\theta$; normal reaction $mg\\cos \\theta$

## 4. Dynamics
- **Newton's second law**: $F = ma$ (resultant force)
- acceleration down a smooth incline: $g\\sin \\theta$
- lift: $R = m(g + a)$ going up with acceleration $a$; $R = m(g - a)$ accelerating downwards
- connected particles over a pulley: $a = \\frac{(m_1 - m_2)g}{m_1 + m_2}$, $T = \\frac{2m_1m_2g}{m_1 + m_2}$
- momentum $mv$; impulse $Ft = mv - mu$
- **conservation of momentum**: $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$
- recoil of a gun: $MV = mv$

## 5. Work, energy and power
- $W = Fs\\cos \\theta$; $KE = \\frac{1}{2}mv^2$; $PE = mgh$
- conservation of mechanical energy when there is no resistance
- work done by the resultant force = change in kinetic energy
- $P = \\frac{W}{t} = Fv$

## 6. Projectiles
- components $u\\cos \\theta$ (constant) and $u\\sin \\theta$ (acceleration $-g$)
- time of flight $\\frac{2u\\sin \\theta}{g}$; greatest height $\\frac{u^2\\sin^2 \\theta}{2g}$; range $\\frac{u^2\\sin 2\\theta}{g}$
- maximum range $\\frac{u^2}{g}$ at $45^\\circ$
- horizontal projection from height $h$: $t = \\sqrt{\\frac{2h}{g}}$, $x = ut$

## Approach to mechanics problems
1. draw a **clear diagram** showing all forces
2. choose a positive direction
3. resolve or take moments, or write the equation of motion **for each body separately**
4. state the principle used (Newton's second law, conservation of momentum, …)
5. include **units** in the answer.`,
        examples: `**Example 1.** A particle moves so that $s = t^3 - 6t^2 + 9t$. Find when it is at rest. *Solution:* $v = 3t^2 - 12t + 9 = 3(t - 1)(t - 3) = 0$, so $t = 1$ s and $t = 3$ s.

**Example 2.** A 5 kg body rests on a smooth plane inclined at $30^\\circ$. Find the force parallel to the plane needed to hold it ($g = 10$ m/s²). *Solution:* $50\\sin 30^\\circ = 25$ N.

**Example 3.** A 0.2 kg ball moving at 10 m/s is brought to rest in 0.05 s. Find the average force. *Solution:* $F = \\frac{0.2 \\times 10}{0.05} = 40$ N.`,
      },
      questions: [
        ["E", "The SI unit of force is the", "newton", "joule", "watt", "kilogram", "One newton accelerates 1 kg at 1 m/s²."],
        ["E", "A body moving at 4 m/s accelerates uniformly at 3 m/s² for 2 s. Its final velocity is", "10 m/s", "14 m/s", "9 m/s", "24 m/s", "v = 4 + 3 × 2. Answer: 10 m/s."],
        ["E", "Which of the following is a vector quantity?", "displacement", "mass", "time", "energy", "It has direction as well as magnitude."],
        ["M", "The resultant of forces of 8 N and 6 N acting at right angles is", "10 N", "14 N", "2 N", "48 N", "The square root of 64 + 36."],
        ["M", "The kinetic energy of a body of mass 4 kg moving at 5 m/s is", "50 J", "20 J", "100 J", "10 J", "Half of 4 times 25."],
        ["M", "The maximum horizontal range of a projectile fired with a speed of 20 m/s ($g = 10$ m/s²) is", "40 m", "20 m", "80 m", "400 m", "u squared divided by g."],
        ["M", "A body of mass 3 kg is accelerated uniformly from rest to 12 m/s in 4 s. The resultant force on it is", "9 N", "36 N", "12 N", "1 N", "The acceleration is 3 m/s²."],
        ["H", "A bullet of mass 0.02 kg is fired at 400 m/s from a gun of mass 4 kg. The recoil speed of the gun is", "2 m/s", "8 m/s", "0.5 m/s", "20 m/s", "0.02 × 400 = 4 × V."],
        ["H", "The displacement of a particle is $s = 2t^3 - 9t^2 + 12t$. The particle is momentarily at rest when", "$t = 1$ and $t = 2$", "$t = 0$ and $t = 3$", "$t = 2$ and $t = 3$", "$t = 1.5$ only", "v = 6(t − 1)(t − 2)."],
        ["H", "A body slides down a smooth plane inclined at $30^\\circ$ to the horizontal. Taking $g = 10$ m/s², its acceleration is", "5 m/s²", "10 m/s²", "$5\\sqrt{3}$ m/s²", "2.5 m/s²", "a = g sin 30°. Answer: 5 m/s²."],
      ],
    },
  ],
};
