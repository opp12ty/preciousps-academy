import type { TermPlan } from "../types";

/** SS3 Further Mathematics, first term — original Precious PS content. */
export const ss3Term1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Linear inequalities and linear programming",
      subtopics: ["Graphs of linear inequalities in two variables", "Formulating constraints and the objective function", "The feasible region", "Finding the optimum solution"],
      objectives: ["Represent linear inequalities in two variables graphically", "Formulate constraints and an objective function from a word problem", "Identify the feasible region", "Find the maximum or minimum value of the objective function"],
      lesson: {
        title: "Optimising with Linear Programming",
        summary: "Solve linear programming problems graphically.",
        minutes: 40,
        notes: `## Linear inequalities in two variables
An inequality such as $x + y \\le 4$ is satisfied by all points on **one side** of the boundary line $x + y = 4$.
### Drawing the region
1. draw the boundary line — **solid** for $\\le$ or $\\ge$, **broken (dashed)** for $<$ or $>$
2. test a point not on the line (the origin if possible): if it satisfies the inequality, the region containing it is the required one
3. shade the **unwanted** region (or the wanted one — say which)
*Example:* $(1, 2)$ satisfies $x + y \\le 4$ since $3 \\le 4$; $(3, 2)$ does not.

## Linear programming
A method of finding the **maximum or minimum** value of a linear expression — the **objective function** — subject to conditions called **constraints**, which are linear inequalities.
It is used to plan production, transport, diets and the use of resources so as to maximise profit or minimise cost.

### Terms
- **decision variables**: the unknowns $x$ and $y$
- **constraints**: the limiting conditions, including the **non-negativity** conditions $x \\ge 0$, $y \\ge 0$
- **feasible region**: the set of points satisfying **all** the constraints
- **objective function**: $P = ax + by$
- **optimum solution**: the point of the feasible region giving the best value of $P$

### Translating words
| Phrase | Inequality |
|---|---|
| at most 10; not more than 10 | $\\le 10$ |
| at least 5; not less than 5 | $\\ge 5$ |
| fewer than 8 | $< 8$ |
| more than 3 | $> 3$ |
"The total number of items $x$ and $y$ must be at least 5" becomes $x + y \\ge 5$.

## The method
1. define the variables
2. write the constraints and the objective function
3. draw the constraints and identify the feasible region
4. find the **vertices (corner points)** of the region
5. evaluate the objective function at each vertex
**The optimum value always occurs at a vertex of the feasible region.**

## Example 1: maximising
Maximise $P = 3x + 2y$ subject to $x + y \\le 4$, $x \\le 3$, $x \\ge 0$, $y \\ge 0$.
Vertices: $(0, 0)$, $(3, 0)$, $(3, 1)$, $(0, 4)$.
| Vertex | $P = 3x + 2y$ |
|---|---|
| $(0, 0)$ | 0 |
| $(3, 0)$ | 9 |
| $(3, 1)$ | 11 |
| $(0, 4)$ | 8 |
Maximum $P = 11$ at $(3, 1)$.

## Example 2: two resource constraints
Maximise $P = 5x + 4y$ subject to $2x + y \\le 8$, $x + 2y \\le 10$, $x, y \\ge 0$.
The lines meet where $x = 2$, $y = 4$. Vertices: $(0, 0)$, $(4, 0)$, $(2, 4)$, $(0, 5)$, giving $P = 0, 20, 26, 20$. Maximum $P = 26$ at $(2, 4)$.

## Example 3: minimising
Minimise $C = 2x + 3y$ subject to $x + y \\ge 4$, $x \\ge 1$, $y \\ge 1$.
The feasible region is unbounded, with corners $(1, 3)$ and $(3, 1)$: $C = 11$ and $9$. Minimum $C = 9$ at $(3, 1)$.

## The objective line
Alternatively draw a line $ax + by = k$ and slide it parallel to itself; the last vertex it touches as it leaves the region gives the optimum.

## Integer solutions
If the variables must be whole numbers (numbers of buses, people), choose the feasible point with integer coordinates giving the best value.`,
        examples: `**Example 1.** Does the point $(2, 3)$ satisfy $2x + y \\le 6$? *Solution:* $4 + 3 = 7 > 6$ — no.

**Example 2.** Evaluate $P = 4x + 5y$ at $(3, 2)$. *Solution:* $12 + 10 = 22$.

**Example 3.** Maximise $P = x + 2y$ subject to $x + y \\le 5$, $x \\ge 0$, $y \\ge 0$. *Solution:* vertices $(0, 0)$, $(5, 0)$, $(0, 5)$ give $0$, $5$, $10$; maximum 10 at $(0, 5)$.`,
      },
      questions: [
        ["E", "In linear programming, the set of points that satisfy all the constraints is called the", "feasible region", "objective function", "optimum point", "boundary line", "Only points in it are possible solutions."],
        ["E", "The linear expression to be maximised or minimised in a linear programming problem is the", "objective function", "constraint", "feasible region", "decision variable", "It usually represents profit or cost."],
        ["E", "Which of the following points satisfies the inequality $x + y \\le 4$?", "$(1, 2)$", "$(3, 2)$", "$(4, 1)$", "$(5, 0)$", "1 + 2 = 3, which is not more than 4."],
        ["M", "The optimum value of the objective function in a linear programming problem occurs at", "a vertex of the feasible region", "the origin always", "the centre of the feasible region", "any point outside the feasible region", "Only the corner points need to be tested."],
        ["M", "The boundary line of the inequality $2x + y < 6$ is drawn as a", "broken line", "solid line", "curve", "double line", "Points on the line are not included."],
        ["M", "The value of $P = 3x + 2y$ at the point $(2, 3)$ is", "12", "13", "10", "6", "6 + 6. Answer: 12."],
        ["M", "The statement 'the total number of items $x$ and $y$ must be at least 5' is written as", "$x + y \\ge 5$", "$x + y \\le 5$", "$x + y > 5$", "$x + y = 5$", "'At least' means greater than or equal to."],
        ["H", "The maximum value of $P = 3x + 2y$ subject to $x + y \\le 4$, $x \\le 3$, $x \\ge 0$ and $y \\ge 0$ is", "11", "12", "9", "8", "The best vertex is (3, 1)."],
        ["H", "The minimum value of $C = 2x + 3y$ subject to $x + y \\ge 4$, $x \\ge 1$ and $y \\ge 1$ is", "9", "11", "8", "5", "The corners (1, 3) and (3, 1) give 11 and 9."],
        ["H", "The maximum value of $P = 5x + 4y$ subject to $2x + y \\le 8$, $x + 2y \\le 10$, $x \\ge 0$ and $y \\ge 0$ is", "26", "20", "40", "32", "The constraint lines meet at (2, 4)."],
      ],
    },
    {
      week: 2,
      title: "Vectors in three dimensions and the scalar product",
      subtopics: ["Vectors in three dimensions", "The scalar (dot) product", "Angle between two vectors and perpendicularity", "Applications: projection and work done"],
      objectives: ["Operate on vectors in three dimensions", "Calculate the scalar product of two vectors", "Find the angle between two vectors and test for perpendicularity", "Apply the scalar product to projections and work done"],
      lesson: {
        title: "The Dot Product",
        summary: "Work with three-dimensional vectors and apply the scalar product.",
        minutes: 40,
        notes: `## Vectors in three dimensions
With unit vectors $\\mathbf{i}$, $\\mathbf{j}$, $\\mathbf{k}$ along the $x$-, $y$- and $z$-axes:
$\\mathbf{a} = a_1\\mathbf{i} + a_2\\mathbf{j} + a_3\\mathbf{k}$
- magnitude: $|\\mathbf{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$ — for $2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$ it is $\\sqrt{4 + 9 + 36} = 7$
- addition and subtraction by components: $(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) + (\\mathbf{i} - 3\\mathbf{j} + 2\\mathbf{k}) = 3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$
- unit vector: $\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|}$
- $\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$

## The scalar (dot) product
$\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos \\theta$
where $\\theta$ is the angle between the vectors. The result is a **scalar**.
### In components
$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3$
*Examples:*
- $(2\\mathbf{i} + 3\\mathbf{j}) \\cdot (4\\mathbf{i} - \\mathbf{j}) = 8 - 3 = 5$
- $(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}) \\cdot (2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) = 2 - 2 + 3 = 3$

### Unit vectors
$\\mathbf{i} \\cdot \\mathbf{i} = \\mathbf{j} \\cdot \\mathbf{j} = \\mathbf{k} \\cdot \\mathbf{k} = 1$ (parallel, $\\cos 0^\\circ = 1$)
$\\mathbf{i} \\cdot \\mathbf{j} = \\mathbf{j} \\cdot \\mathbf{k} = \\mathbf{k} \\cdot \\mathbf{i} = 0$ (perpendicular, $\\cos 90^\\circ = 0$)

### Properties
- commutative: $\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{a}$
- distributive: $\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}$
- $\\mathbf{a} \\cdot \\mathbf{a} = |\\mathbf{a}|^2$

## Angle between two vectors
$\\cos \\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$
*Example:* $\\mathbf{a} = \\mathbf{i} + \\mathbf{j}$, $\\mathbf{b} = \\mathbf{i}$: $\\cos \\theta = \\frac{1}{\\sqrt{2}}$, so $\\theta = 45^\\circ$.

## Perpendicular vectors
Two non-zero vectors are **perpendicular** if and only if $\\mathbf{a} \\cdot \\mathbf{b} = 0$.
*Example:* $2\\mathbf{i} + k\\mathbf{j}$ is perpendicular to $3\\mathbf{i} - 6\\mathbf{j}$ when $6 - 6k = 0$, that is $k = 1$.

## Projection
The projection (resolved part) of $\\mathbf{a}$ in the direction of $\\mathbf{b}$ is $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{b}|}$.

## Work done
The work done by a constant force $\\mathbf{F}$ in moving a body through displacement $\\mathbf{d}$ is
$W = \\mathbf{F} \\cdot \\mathbf{d}$
*Example:* $\\mathbf{F} = 3\\mathbf{i} + 4\\mathbf{j}$ N, $\\mathbf{d} = 2\\mathbf{i} + \\mathbf{j}$ m: $W = 6 + 4 = 10$ J.

## The vector (cross) product
$\\mathbf{a} \\times \\mathbf{b}$ is a **vector** of magnitude $|\\mathbf{a}||\\mathbf{b}|\\sin \\theta$, perpendicular to both. $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$; $\\mathbf{a} \\times \\mathbf{b} = -\\mathbf{b} \\times \\mathbf{a}$. Its magnitude is the area of the parallelogram formed by the vectors, and it gives the moment of a force.

## Geometry with vectors
In a triangle, $|\\mathbf{a} - \\mathbf{b}|^2 = |\\mathbf{a}|^2 + |\\mathbf{b}|^2 - 2\\mathbf{a} \\cdot \\mathbf{b}$ — the cosine rule.`,
        examples: `**Example 1.** Find $|\\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}|$. *Solution:* $\\sqrt{1 + 4 + 4} = 3$.

**Example 2.** Find $(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) \\cdot (\\mathbf{i} + 4\\mathbf{j} - \\mathbf{k})$. *Solution:* $3 - 4 - 2 = -3$.

**Example 3.** Show that $2\\mathbf{i} + 3\\mathbf{j}$ and $3\\mathbf{i} - 2\\mathbf{j}$ are perpendicular. *Solution:* $6 - 6 = 0$.`,
      },
      questions: [
        ["E", "The value of $\\mathbf{i} \\cdot \\mathbf{j}$ is", "0", "1", "$\\mathbf{k}$", "$-1$", "The unit vectors are perpendicular."],
        ["E", "The value of $\\mathbf{i} \\cdot \\mathbf{i}$ is", "1", "0", "$\\mathbf{i}$", "2", "A unit vector dotted with itself gives its magnitude squared."],
        ["E", "The magnitude of the vector $2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}$ is", "7", "11", "49", "$\\sqrt{11}$", "The square root of 4 + 9 + 36."],
        ["M", "Evaluate $(2\\mathbf{i} + 3\\mathbf{j}) \\cdot (4\\mathbf{i} - \\mathbf{j})$.", "5", "11", "$8\\mathbf{i} - 3\\mathbf{j}$", "8", "8 − 3. Answer: 5."],
        ["M", "Two non-zero vectors are perpendicular if their scalar product is", "zero", "one", "negative", "equal to the product of their magnitudes", "cos 90° is zero."],
        ["M", "Evaluate $(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}) \\cdot (2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$.", "3", "7", "$-3$", "6", "2 − 2 + 3. Answer: 3."],
        ["M", "Simplify $(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) + (\\mathbf{i} - 3\\mathbf{j} + 2\\mathbf{k})$.", "$3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}$", "$3\\mathbf{i} + 4\\mathbf{j} - 3\\mathbf{k}$", "$\\mathbf{i} + 4\\mathbf{j} - 3\\mathbf{k}$", "$3\\mathbf{i} - 2\\mathbf{j} - \\mathbf{k}$", "Add the corresponding components."],
        ["H", "The angle between the vectors $\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{i}$ is", "$45^\\circ$", "$90^\\circ$", "$30^\\circ$", "$60^\\circ$", "cos θ = 1 ÷ root 2."],
        ["H", "The value of $k$ for which $2\\mathbf{i} + k\\mathbf{j}$ is perpendicular to $3\\mathbf{i} - 6\\mathbf{j}$ is", "1", "$-1$", "4", "$-4$", "6 − 6k = 0. Answer: 1."],
        ["H", "A force $\\mathbf{F} = (3\\mathbf{i} + 4\\mathbf{j})$ N moves a body through a displacement $(2\\mathbf{i} + \\mathbf{j})$ m. The work done is", "10 J", "5 J", "24 J", "11 J", "W = F · d = 6 + 4."],
      ],
    },
    {
      week: 3,
      title: "Correlation and regression",
      subtopics: ["Bivariate data and scatter diagrams", "Types and strength of correlation", "Spearman's rank correlation coefficient", "The line of best fit and regression"],
      objectives: ["Draw and interpret scatter diagrams", "Describe the type and strength of correlation", "Calculate Spearman's rank correlation coefficient", "Find and use a line of regression"],
      lesson: {
        title: "Relationships Between Two Variables",
        summary: "Measure correlation and use regression lines for prediction.",
        minutes: 40,
        notes: `## Bivariate data
Data in which **two variables** are measured for each individual — height and weight, marks in two subjects, rainfall and yield.

## Scatter diagram
A graph in which each pair $(x, y)$ is plotted as a point. The pattern shows the relationship.

## Correlation
The degree of **linear relationship** between two variables.
- **positive**: $y$ tends to increase as $x$ increases
- **negative**: $y$ tends to decrease as $x$ increases
- **zero (no) correlation**: no linear pattern

## Correlation coefficient
A number $r$ with $-1 \\le r \\le 1$:
| Value of $r$ | Interpretation |
|---|---|
| $+1$ | perfect positive correlation |
| close to $+1$ | strong positive |
| close to 0 | little or no linear correlation |
| close to $-1$ | strong negative |
| $-1$ | perfect negative correlation |
Correlation does **not** prove that one variable causes the other.

## Spearman's rank correlation coefficient
Rank each variable (1 for the highest, or the lowest — consistently); find the difference $d$ in ranks for each pair.
$r_s = 1 - \\frac{6\\sum d^2}{n(n^2 - 1)}$
Tied values share the average of the ranks they would occupy.
*Examples:*
- $n = 5$, $\\sum d^2 = 4$: $r_s = 1 - \\frac{24}{120} = 0.8$
- $n = 6$, $\\sum d^2 = 14$: $r_s = 1 - \\frac{84}{210} = 0.6$
- ranks exactly reversed for $n = 4$: $d = 3, 1, -1, -3$, $\\sum d^2 = 20$: $r_s = 1 - \\frac{120}{60} = -1$
- identical ranks: $\\sum d^2 = 0$, $r_s = 1$

## Product-moment correlation coefficient
$r = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum (x - \\bar{x})^2 \\sum (y - \\bar{y})^2}}$
It uses the actual values rather than the ranks.

## Line of best fit
A straight line drawn through the scatter of points so that they lie as close to it as possible, with roughly equal numbers on each side. It **passes through the mean point** $(\\bar{x}, \\bar{y})$.

## Regression
The **line of regression of $y$ on $x$** is $y = a + bx$, found by the **method of least squares**:
$b = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sum (x - \\bar{x})^2} = \\frac{n\\sum xy - \\sum x \\sum y}{n\\sum x^2 - (\\sum x)^2}$ and $a = \\bar{y} - b\\bar{x}$
*Example:* a regression line with gradient 1.5 through the mean point $(4, 10)$: $y - 10 = 1.5(x - 4)$, so $y = 1.5x + 4$.

### Prediction
Substitute a value of $x$: with $y = 2x + 3$, when $x = 5$, $y = 13$.
- **interpolation** — predicting within the range of the data — is reliable
- **extrapolation** — predicting outside the range — is risky

## Uses
predicting examination performance, yields, sales and demand; testing whether two measurements are related.`,
        examples: `**Example 1.** For 4 pairs of ranks, $\\sum d^2 = 2$. Find $r_s$. *Solution:* $1 - \\frac{12}{60} = 0.8$.

**Example 2.** Interpret $r = -0.92$. *Solution:* A **strong negative** correlation.

**Example 3.** The regression line is $y = 0.5x + 20$. Estimate $y$ when $x = 30$. *Solution:* $15 + 20 = 35$.`,
      },
      questions: [
        ["E", "A graph in which pairs of values of two variables are plotted as points is called a", "scatter diagram", "histogram", "pie chart", "frequency polygon", "It shows whether the variables are related."],
        ["E", "The value of a correlation coefficient always lies between", "$-1$ and $1$", "0 and 1", "0 and 100", "$-10$ and $10$", "The extremes indicate perfect correlation."],
        ["E", "A correlation coefficient of zero indicates", "no linear correlation", "perfect positive correlation", "perfect negative correlation", "a calculation error", "The variables show no linear relationship."],
        ["M", "A correlation coefficient of 0.95 between two variables indicates", "a strong positive correlation", "a weak positive correlation", "a strong negative correlation", "no correlation", "It is close to +1."],
        ["M", "For 5 pairs of ranked data, $\\sum d^2 = 4$. Spearman's rank correlation coefficient is", "0.8", "0.2", "0.96", "0.6", "1 − 24/120. Answer: 0.8."],
        ["M", "The line of best fit on a scatter diagram passes through the", "mean point $(\\bar{x}, \\bar{y})$", "origin always", "highest point", "first and last points only", "This fixes its position."],
        ["M", "If one variable decreases as the other increases, the correlation is", "negative", "positive", "zero", "perfect", "The points slope downwards from left to right."],
        ["H", "For 6 pairs of ranked data, $\\sum d^2 = 14$. Spearman's rank correlation coefficient is", "0.6", "0.4", "0.86", "0.93", "1 − 84/210. Answer: 0.6."],
        ["H", "A line of regression of $y$ on $x$ has gradient 1.5 and passes through the mean point $(4, 10)$. Its equation is", "$y = 1.5x + 4$", "$y = 1.5x + 10$", "$y = 1.5x - 4$", "$y = 4x + 1.5$", "y − 10 = 1.5(x − 4)."],
        ["H", "Four candidates are ranked by two judges in exactly opposite orders. Spearman's rank correlation coefficient is", "$-1$", "0", "1", "$-0.5$", "The differences 3, 1, −1, −3 give a sum of squares of 20."],
      ],
    },
    {
      week: 4,
      title: "Numerical methods: errors and approximations",
      subtopics: ["Rounding and significant figures", "Absolute, relative and percentage errors", "The trapezium rule", "Linear interpolation and the Newton–Raphson method"],
      objectives: ["Round numbers to a given degree of accuracy", "Calculate absolute, relative and percentage errors", "Estimate definite integrals by the trapezium rule", "Use linear interpolation and the Newton–Raphson method"],
      lesson: {
        title: "Approximate Calculations",
        summary: "Estimate errors and use numerical methods for integrals and roots.",
        minutes: 40,
        notes: `## Rounding
- **decimal places** count digits after the decimal point
- **significant figures** count from the first non-zero digit
$3.14159$ to 3 significant figures is $3.14$; $0.004562$ to 2 significant figures is $0.0046$.

## Errors
No measurement is exact.
- **absolute error** $= |\\text{measured value} - \\text{true value}|$
- **relative error** $= \\frac{\\text{absolute error}}{\\text{true value}}$
- **percentage error** $= \\text{relative error} \\times 100$
*Examples:*
- a length of 5 cm measured as 5.2 cm: absolute error 0.2 cm; percentage error $\\frac{0.2}{5} \\times 100 = 4\\%$
- an error of 0.5 in a true value of 20: relative error $0.025$

### Maximum error of a measurement
A measurement given to the nearest unit may be wrong by **half that unit**. $12.4$ cm (to the nearest 0.1 cm) lies between $12.35$ and $12.45$ cm: maximum absolute error $0.05$ cm.

### Combining errors
- for sums and differences, **absolute** errors add
- for products and quotients, **relative (percentage)** errors add (approximately)
*Example:* a rectangle measured as 4.0 cm by 3.0 cm, each to the nearest 0.1 cm, has area between $3.95 \\times 2.95 = 11.65$ and $4.05 \\times 3.05 = 12.35$ cm².

## The trapezium rule
To estimate $\\int_a^b f(x) \\, dx$, divide the interval into $n$ strips of width $h = \\frac{b - a}{n}$, with ordinates $y_0, y_1, \\dots, y_n$:
$\\int_a^b f(x) \\, dx \\approx \\frac{h}{2}[y_0 + y_n + 2(y_1 + y_2 + \\dots + y_{n-1})]$
*Example:* $\\int_0^2 x^2 \\, dx$ with 2 strips ($h = 1$): ordinates 0, 1, 4:
$\\frac{1}{2}[0 + 4 + 2(1)] = 3$
The exact value is $\\frac{8}{3} \\approx 2.67$; the rule **over-estimates** here because the curve bends upwards. More strips improve the estimate: with 4 strips ($h = 0.5$), ordinates 0, 0.25, 1, 2.25, 4 give $\\frac{0.5}{2}[4 + 2(3.5)] = 2.75$.

## Linear interpolation
To estimate a value between two known values, assume the graph is a straight line between them:
$f(x) \\approx f(x_0) + \\frac{x - x_0}{x_1 - x_0}[f(x_1) - f(x_0)]$
*Example:* $f(2) = 5$ and $f(4) = 11$: $f(3) \\approx 5 + \\frac{1}{2}(6) = 8$.

## Locating roots
If $f(a)$ and $f(b)$ have **opposite signs** and $f$ is continuous, a root of $f(x) = 0$ lies between $a$ and $b$.

## The Newton–Raphson method
Starting from an approximation $x_0$ to a root of $f(x) = 0$, a better one is
$x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$
Repeat until successive values agree to the accuracy required.
*Example:* $f(x) = x^2 - 2$, $f'(x) = 2x$, $x_0 = 1$:
$x_1 = 1 - \\frac{-1}{2} = 1.5$; $x_2 = 1.5 - \\frac{0.25}{3} \\approx 1.4167$ — rapidly approaching $\\sqrt{2} = 1.4142$.

## Iteration
Rearranging $f(x) = 0$ as $x = g(x)$ and using $x_{n+1} = g(x_n)$ may also converge to a root.`,
        examples: `**Example 1.** Round $0.07856$ to 2 significant figures. *Solution:* $0.079$.

**Example 2.** A mass of 50 kg is recorded as 48 kg. Find the percentage error. *Solution:* $\\frac{2}{50} \\times 100 = 4\\%$.

**Example 3.** Use the trapezium rule with 2 strips to estimate $\\int_0^2 (x + 1) \\, dx$. *Solution:* ordinates 1, 2, 3: $\\frac{1}{2}[1 + 3 + 4] = 4$ (exact, since the graph is a straight line).`,
      },
      questions: [
        ["E", "The number 3.14159 correct to 3 significant figures is", "3.14", "3.142", "3.15", "3.1", "Count three digits from the first non-zero digit."],
        ["E", "The absolute error in a measurement is the", "difference between the measured value and the true value", "ratio of the measured value to the true value", "true value multiplied by 100", "sum of the measured and true values", "It is taken as positive."],
        ["E", "The number 0.004562 correct to 2 significant figures is", "0.0046", "0.0045", "0.00", "0.005", "The leading zeros are not significant."],
        ["M", "A length of 5 cm is measured as 5.2 cm. The percentage error is", "4%", "0.2%", "3.8%", "20%", "0.2 ÷ 5 × 100. Answer: 4%."],
        ["M", "A length is recorded as 12.4 cm correct to the nearest 0.1 cm. The maximum absolute error is", "0.05 cm", "0.1 cm", "0.5 cm", "0.01 cm", "Half the unit of measurement."],
        ["M", "An error of 0.5 is made in measuring a quantity whose true value is 20. The relative error is", "0.025", "0.25", "2.5", "10", "0.5 ÷ 20. Answer: 0.025."],
        ["M", "In the trapezium rule, the area under a curve is approximated by a number of", "trapezia of equal width", "rectangles of equal height", "triangles", "circles", "The tops of the strips are taken as straight lines."],
        ["H", "Using the trapezium rule with 2 strips, the approximate value of $\\int_0^2 x^2 \\, dx$ is", "3", "$\\frac{8}{3}$", "4", "2.5", "The ordinates are 0, 1 and 4, with h = 1."],
        ["H", "Using the Newton–Raphson method on $x^2 - 2 = 0$ with first approximation $x_0 = 1$, the next approximation is", "1.5", "1.25", "2", "1.41", "1 − (−1) ÷ 2. Answer: 1.5."],
        ["H", "Given $f(2) = 5$ and $f(4) = 11$, linear interpolation gives $f(3)$ as", "8", "7", "9", "16", "It lies halfway between the two values."],
      ],
    },
    {
      week: 5,
      title: "Differential equations",
      subtopics: ["Order and degree of a differential equation", "Equations solved by direct integration", "Equations with separable variables", "Applications: growth and decay"],
      objectives: ["State the order and degree of a differential equation", "Solve equations by direct integration", "Solve first-order equations with separable variables", "Apply differential equations to growth and decay"],
      lesson: {
        title: "Solving Differential Equations",
        summary: "Solve simple first- and second-order differential equations and apply them.",
        minutes: 40,
        notes: `## Differential equations
A **differential equation** is an equation containing **derivatives** of an unknown function, such as $\\frac{dy}{dx} = 3x$.
- the **order** is that of the highest derivative: $\\frac{dy}{dx} = 3x$ is first order; $\\frac{d^2y}{dx^2} + 3\\frac{dy}{dx} = 0$ is second order
- the **degree** is the power of the highest derivative
- the **general solution** contains arbitrary constants (as many as the order)
- a **particular solution** is obtained using given **initial (boundary) conditions**

## Type 1: direct integration
$\\frac{dy}{dx} = f(x)$ gives $y = \\int f(x) \\, dx + C$.
*Examples:*
- $\\frac{dy}{dx} = 2x$: $y = x^2 + C$ — a family of parabolas
- $\\frac{dy}{dx} = 3x^2$ with $y = 1$ when $x = 0$: $y = x^3 + C$, $C = 1$, so $y = x^3 + 1$

### Second order
Integrate twice, finding a constant each time.
$\\frac{d^2y}{dx^2} = 6x$ with $\\frac{dy}{dx} = 2$ and $y = 1$ when $x = 0$:
$\\frac{dy}{dx} = 3x^2 + 2$; $y = x^3 + 2x + 1$.

## Type 2: separable variables
If $\\frac{dy}{dx} = f(x)g(y)$, **separate** the variables and integrate each side:
$\\int \\frac{dy}{g(y)} = \\int f(x) \\, dx$
*Examples:*
- $\\frac{dy}{dx} = \\frac{x}{y}$: $y \\, dy = x \\, dx$, so $\\frac{y^2}{2} = \\frac{x^2}{2} + c$, that is $y^2 = x^2 + C$
- $\\frac{dy}{dx} = y$: $\\frac{dy}{y} = dx$, so $\\ln y = x + c$ and $y = Ae^x$
- $\\frac{dy}{dx} = 2xy$ with $y = 1$ when $x = 0$: $\\ln y = x^2 + c$; $c = 0$; $y = e^{x^2}$
- $\\frac{dy}{dx} = -2y$ with $y = 5$ when $x = 0$: $y = Ae^{-2x}$, $A = 5$, so $y = 5e^{-2x}$

## Growth and decay
When the rate of change of a quantity is **proportional to the quantity itself**:
$\\frac{dN}{dt} = kN$ gives $N = N_0 e^{kt}$
- $k > 0$: **exponential growth** — populations, bacteria, compound interest
- $k < 0$: **exponential decay** — radioactive decay, cooling, discharge of a capacitor
*Example:* a population doubles in 5 years: $2 = e^{5k}$, so $k = \\frac{\\ln 2}{5} \\approx 0.139$ per year.
The **half-life** of a decaying substance is $\\frac{\\ln 2}{|k|}$.

## Newton's law of cooling
$\\frac{d\\theta}{dt} = -k(\\theta - \\theta_0)$, where $\\theta_0$ is the temperature of the surroundings; the solution is $\\theta - \\theta_0 = Ae^{-kt}$.

## Motion
$\\frac{dv}{dt} = a$ and $\\frac{ds}{dt} = v$ are differential equations. With $a = g$ (constant): $v = u + gt$ and $s = ut + \\frac{1}{2}gt^2$.

## Forming a differential equation
Differentiate and eliminate the constant: from $y = Ax^2$, $\\frac{dy}{dx} = 2Ax = \\frac{2y}{x}$.

## Checking
Substitute the solution into the equation to verify it.`,
        examples: `**Example 1.** Solve $\\frac{dy}{dx} = 4x - 3$ given $y = 2$ when $x = 1$. *Solution:* $y = 2x^2 - 3x + C$; $2 = 2 - 3 + C$, $C = 3$: $y = 2x^2 - 3x + 3$.

**Example 2.** Solve $\\frac{dy}{dx} = 3y$. *Solution:* $\\ln y = 3x + c$, so $y = Ae^{3x}$.

**Example 3.** State the order of $\\frac{d^3y}{dx^3} - y = 0$. *Solution:* Third order.`,
      },
      questions: [
        ["E", "The order of the differential equation $\\frac{dy}{dx} = 3x$ is", "first", "second", "third", "zero", "The highest derivative is the first."],
        ["E", "The general solution of $\\frac{dy}{dx} = 2x$ is", "$y = x^2 + C$", "$y = 2x^2 + C$", "$y = 2 + C$", "$y = x + C$", "Integrate 2x. Answer: $y = x^2 + C$."],
        ["E", "An equation that contains derivatives of an unknown function is called", "a differential equation", "a quadratic equation", "an identity", "a linear inequality", "Solving it means finding the function."],
        ["M", "The solution of $\\frac{dy}{dx} = 3x^2$, given that $y = 1$ when $x = 0$, is", "$y = x^3 + 1$", "$y = x^3$", "$y = 6x + 1$", "$y = 3x^3 + 1$", "The constant of integration is 1."],
        ["M", "The order of the differential equation $\\frac{d^2y}{dx^2} + 3\\frac{dy}{dx} = 0$ is", "2", "1", "3", "0", "The highest derivative is the second."],
        ["M", "The general solution of $\\frac{dy}{dx} = y$ is", "$y = Ae^x$", "$y = x + C$", "$y = \\frac{x^2}{2} + C$", "$y = \\ln x + C$", "Separating gives ln y = x + c."],
        ["M", "The general solution of $\\frac{dy}{dx} = \\frac{x}{y}$ is", "$y^2 = x^2 + C$", "$y = x + C$", "$y^2 = 2x + C$", "$y = \\frac{x^2}{2} + C$", "Separate as y dy = x dx."],
        ["H", "The solution of $\\frac{dy}{dx} = 2xy$, given that $y = 1$ when $x = 0$, is", "$y = e^{x^2}$", "$y = e^{2x}$", "$y = x^2 + 1$", "$y = 2e^{x}$", "ln y = x² + c with c = 0."],
        ["H", "The solution of $\\frac{dy}{dx} = -2y$, given that $y = 5$ when $x = 0$, is", "$y = 5e^{-2x}$", "$y = 5e^{2x}$", "$y = -2x + 5$", "$y = e^{-2x} + 5$", "This is exponential decay with A = 5."],
        ["H", "Given $\\frac{d^2y}{dx^2} = 6x$, with $\\frac{dy}{dx} = 2$ and $y = 1$ when $x = 0$, then $y$ is", "$x^3 + 2x + 1$", "$x^3 + 1$", "$3x^2 + 2x + 1$", "$x^3 + 2x$", "Integrate twice, fixing a constant each time."],
      ],
    },
  ],
};
