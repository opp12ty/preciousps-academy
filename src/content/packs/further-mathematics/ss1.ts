import type { TermPlan } from "../types";

/** SS1 Further Mathematics — original Precious PS content following the national senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Sets",
        subtopics: ["Set notation and types of sets", "Operations on sets", "Laws of set algebra", "Venn diagrams and problems on two and three sets"],
        objectives: ["Use set notation and identify types of sets", "Find unions, intersections, complements and differences", "State and apply the laws of set algebra", "Solve problems on two and three sets with Venn diagrams"],
        lesson: {
          title: "The Algebra of Sets",
          summary: "Use set notation, operations and Venn diagrams to solve problems.",
          minutes: 40,
          notes: `## Sets
A **set** is a well-defined collection of objects called **elements** or members. We write $a \\in A$ for "a is a member of A" and $a \\notin A$ otherwise.
A set may be **listed**, as $A = \\{2, 4, 6, 8\\}$, or described in **set-builder** form, as $A = \\{x : x \\text{ is even}, 1 < x < 9\\}$.
The number of elements in $A$ is written $n(A)$.

## Types of sets
- **empty (null) set** $\\emptyset$: no elements
- **finite** and **infinite** sets
- **universal set** $U$: all elements under consideration
- **subset**: $A \\subseteq B$ if every element of $A$ is in $B$; a **proper subset** is not equal to $B$
- **equal sets** have exactly the same elements; **equivalent sets** have the same number
- **disjoint sets** have no common element
- **power set**: the set of all subsets. A set with $n$ elements has $2^n$ subsets and $2^n - 1$ proper subsets

## Operations
| Operation | Symbol | Meaning |
|---|---|---|
| union | $A \\cup B$ | elements in $A$ or $B$ or both |
| intersection | $A \\cap B$ | elements in both $A$ and $B$ |
| complement | $A'$ | elements of $U$ not in $A$ |
| difference | $A - B$ | elements in $A$ but not in $B$ |

*Example:* $U = \\{1, 2, \\dots, 8\\}$, $A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5\\}$:
$A \\cup B = \\{1, 2, 3, 4, 5\\}$; $A \\cap B = \\{3, 4\\}$; $A' = \\{5, 6, 7, 8\\}$; $A - B = \\{1, 2\\}$.

## Laws of set algebra
- **commutative**: $A \\cup B = B \\cup A$; $A \\cap B = B \\cap A$
- **associative**: $(A \\cup B) \\cup C = A \\cup (B \\cup C)$
- **distributive**: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$; $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$
- **identity**: $A \\cup \\emptyset = A$; $A \\cap U = A$
- **complement**: $A \\cup A' = U$; $A \\cap A' = \\emptyset$; $(A')' = A$
- **De Morgan's laws**: $(A \\cup B)' = A' \\cap B'$ and $(A \\cap B)' = A' \\cup B'$

## Two sets
$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$
*Example:* in a class of 40, 25 offer Mathematics, 20 offer Physics and 5 offer neither. Then $n(M \\cup P) = 35$, so both $= 25 + 20 - 35 = 10$.

## Three sets
$n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - n(A \\cap B) - n(A \\cap C) - n(B \\cap C) + n(A \\cap B \\cap C)$
In a Venn diagram, **start from the centre** (the region common to all three) and work outwards, subtracting as you go.
*Example:* $n(A) = 20$, $n(B) = 18$, $n(C) = 15$, pairwise intersections 7, 6 and 5, and all three 3:
$n(A \\cup B \\cup C) = 53 - 18 + 3 = 38$.`,
          examples: `**Example 1.** If $A = \\{1, 3, 5, 7\\}$ and $B = \\{3, 4, 5, 6\\}$, find $A \\cap B$ and $A - B$. *Solution:* $A \\cap B = \\{3, 5\\}$; $A - B = \\{1, 7\\}$.

**Example 2.** How many subsets has a set with 4 elements? *Solution:* $2^4 = 16$.

**Example 3.** $n(A) = 15$, $n(B) = 10$, $n(A \\cup B) = 21$. Find $n(A \\cap B)$. *Solution:* $15 + 10 - 21 = 4$.`,
        },
        questions: [
          ["E", "If $A = \\{1, 2, 3\\}$ and $B = \\{3, 4\\}$, then $A \\cap B$ is", "$\\{3\\}$", "$\\{1, 2, 3, 4\\}$", "$\\{1, 2\\}$", "$\\{4\\}$", "Only 3 belongs to both sets."],
          ["E", "The number of subsets of a set with 3 elements is", "8", "6", "3", "9", "A set with n elements has 2 to the power n subsets."],
          ["E", "If $U = \\{1, 2, \\dots, 10\\}$ and $A$ is the set of even numbers in $U$, then $A'$ is", "$\\{1, 3, 5, 7, 9\\}$", "$\\{2, 4, 6, 8, 10\\}$", "$\\{1, 2, 3, 4, 5\\}$", "$\\emptyset$", "The complement holds the elements of U not in A."],
          ["M", "If $n(A) = 12$, $n(B) = 9$ and $n(A \\cap B) = 4$, then $n(A \\cup B)$ is", "17", "21", "25", "13", "Add the two and subtract the intersection."],
          ["M", "By De Morgan's law, $(A \\cup B)'$ equals", "$A' \\cap B'$", "$A' \\cup B'$", "$A \\cap B$", "$A \\cup B'$", "The complement of a union is the intersection of complements."],
          ["M", "The number of elements in $\\{x : 1 < x < 6, x \\text{ an integer}\\}$ is", "4", "5", "6", "3", "The elements are 2, 3, 4 and 5."],
          ["M", "If $A = \\{a, b, c, d\\}$ and $B = \\{c, d, e\\}$, then $A - B$ is", "$\\{a, b\\}$", "$\\{e\\}$", "$\\{c, d\\}$", "$\\{a, b, e\\}$", "Remove from A the elements that are also in B."],
          ["H", "In a class of 40 students, 25 offer Mathematics, 20 offer Physics and 5 offer neither. The number offering both is", "10", "5", "15", "45", "35 offer at least one, so both = 25 + 20 − 35."],
          ["H", "Given $n(A) = 20$, $n(B) = 18$, $n(C) = 15$, $n(A \\cap B) = 7$, $n(A \\cap C) = 6$, $n(B \\cap C) = 5$ and $n(A \\cap B \\cap C) = 3$, the value of $n(A \\cup B \\cup C)$ is", "38", "35", "53", "32", "53 − 18 + 3 = 38."],
          ["H", "The number of proper subsets of a set with 5 elements is", "31", "32", "25", "10", "It is 2 to the power 5, less the set itself."],
        ],
      },
      {
        week: 2,
        title: "Indices and logarithms",
        subtopics: ["Laws of indices", "Exponential equations", "Laws of logarithms and change of base", "Logarithmic equations"],
        objectives: ["Apply the laws of indices", "Solve exponential equations", "Apply the laws of logarithms and change the base", "Solve logarithmic equations"],
        lesson: {
          title: "Powers and Logarithms",
          summary: "Apply the laws of indices and logarithms and solve related equations.",
          minutes: 40,
          notes: `## Laws of indices
For $a > 0$:
- $a^m \\times a^n = a^{m+n}$
- $a^m \\div a^n = a^{m-n}$
- $(a^m)^n = a^{mn}$
- $a^0 = 1$
- $a^{-n} = \\frac{1}{a^n}$
- $a^{\\frac{1}{n}} = \\sqrt[n]{a}$ and $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$
- $(ab)^n = a^n b^n$

*Examples:* $16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$; $27^{-\\frac{2}{3}} = \\frac{1}{3^2} = \\frac{1}{9}$.

## Exponential equations
### Same base
Express both sides as powers of the same base and equate the indices.
$3^{x+1} = 81 = 3^4$, so $x + 1 = 4$ and $x = 3$.
### Quadratic type
$2^{2x} - 5(2^x) + 4 = 0$. Let $y = 2^x$: $y^2 - 5y + 4 = 0$, so $y = 1$ or $y = 4$, giving $x = 0$ or $x = 2$.
### Different bases
Take logarithms: if $2^x = 7$ then $x = \\frac{\\log 7}{\\log 2} \\approx 2.81$.

## Logarithms
If $a^x = N$ then $\\log_a N = x$ (with $a > 0$, $a \\ne 1$, $N > 0$).
So $\\log_{10} 1000 = 3$ and $\\log_2 8 = 3$.

## Laws of logarithms
- $\\log_a (MN) = \\log_a M + \\log_a N$
- $\\log_a \\frac{M}{N} = \\log_a M - \\log_a N$
- $\\log_a M^p = p \\log_a M$
- $\\log_a a = 1$ and $\\log_a 1 = 0$
- $a^{\\log_a N} = N$

*Examples:* $\\log_{10} 5 + \\log_{10} 20 = \\log_{10} 100 = 2$; $\\log_2 8 + \\log_2 4 = 3 + 2 = 5$.

## Change of base
$\\log_a N = \\frac{\\log_b N}{\\log_b a}$
*Example:* $\\log_4 32 = \\frac{\\log_2 32}{\\log_2 4} = \\frac{5}{2}$.
Also $\\log_a b = \\frac{1}{\\log_b a}$.

## Logarithmic equations
Combine the logarithms, then change to index form — and **check** that every logarithm is of a positive number.
$\\log_3 x + \\log_3 (x - 2) = 1$ gives $x(x - 2) = 3$, so $x^2 - 2x - 3 = 0$ and $x = 3$ or $x = -1$. Since $x$ must be greater than 2, $x = 3$.

## Natural logarithms
Logarithms to the base $e \\approx 2.718$ are written $\\ln x$. Common logarithms use base 10.`,
          examples: `**Example 1.** Evaluate $8^{\\frac{2}{3}}$. *Solution:* $(\\sqrt[3]{8})^2 = 2^2 = 4$.

**Example 2.** Solve $5^{2x-1} = 125$. *Solution:* $2x - 1 = 3$, so $x = 2$.

**Example 3.** Simplify $\\log_2 48 - \\log_2 3$. *Solution:* $\\log_2 16 = 4$.`,
        },
        questions: [
          ["E", "Evaluate $2^3 \\times 2^4$.", "128", "64", "4096", "14", "Add the indices to get 2 to the power 7."],
          ["E", "The value of $\\log_{10} 1000$ is", "3", "100", "10", "30", "10 raised to the power 3 gives 1000."],
          ["E", "Evaluate $27^{\\frac{1}{3}}$.", "3", "9", "81", "13.5", "It is the cube root of 27."],
          ["M", "Evaluate $16^{\\frac{3}{4}}$.", "8", "12", "4", "64", "The fourth root of 16 is 2, and 2 cubed is 8."],
          ["M", "Simplify $\\log_2 8 + \\log_2 4$.", "5", "12", "32", "6", "The two logarithms are 3 and 2."],
          ["M", "Solve $3^{x+1} = 81$.", "$x = 3$", "$x = 4$", "$x = 26$", "$x = 2$", "81 is 3 to the power 4, so x + 1 = 4."],
          ["M", "Evaluate $\\log_{10} 5 + \\log_{10} 20$.", "2", "25", "100", "1", "The sum is the logarithm of 100."],
          ["H", "Solve $2^{2x} - 5(2^x) + 4 = 0$.", "$x = 0$ or $x = 2$", "$x = 1$ or $x = 4$", "$x = 2$ only", "$x = -1$ or $x = 2$", "Putting y for 2 to the power x gives y = 1 or 4."],
          ["H", "Solve $\\log_3 x + \\log_3 (x - 2) = 1$.", "$x = 3$", "$x = -1$", "$x = 3$ or $x = -1$", "$x = 5$", "x(x − 2) = 3, and x must exceed 2."],
          ["H", "Evaluate $\\log_4 32$.", "$\\frac{5}{2}$", "8", "$\\frac{2}{5}$", "3", "Change to base 2: 5 divided by 2."],
        ],
      },
      {
        week: 3,
        title: "Surds",
        subtopics: ["Rational and irrational numbers", "Simplifying surds", "Operations on surds", "Rationalising the denominator and equality of surds"],
        objectives: ["Distinguish rational from irrational numbers", "Reduce surds to basic form", "Add, subtract and multiply surds", "Rationalise denominators and use the equality of surds"],
        lesson: {
          title: "Working with Surds",
          summary: "Simplify, combine and rationalise surds.",
          minutes: 40,
          notes: `## Rational and irrational numbers
A **rational number** can be written as $\\frac{p}{q}$ with $p$, $q$ integers and $q \\ne 0$. An **irrational number** cannot: $\\sqrt{2}$, $\\sqrt{3}$, $\\pi$.
A **surd** is an irrational root of a rational number, such as $\\sqrt{5}$ or $\\sqrt[3]{7}$. ($\\sqrt{9} = 3$ is not a surd.)

## Rules
- $\\sqrt{ab} = \\sqrt{a} \\times \\sqrt{b}$
- $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$
- $\\sqrt{a} \\times \\sqrt{a} = a$
- but $\\sqrt{a + b} \\ne \\sqrt{a} + \\sqrt{b}$

## Basic form
Take out the largest perfect-square factor:
$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$; $\\sqrt{48} = 4\\sqrt{3}$; $\\sqrt{27} = 3\\sqrt{3}$.

## Addition and subtraction
Only **like surds** can be combined:
$2\\sqrt{3} + 5\\sqrt{3} = 7\\sqrt{3}$
$\\sqrt{48} - \\sqrt{27} + \\sqrt{12} = 4\\sqrt{3} - 3\\sqrt{3} + 2\\sqrt{3} = 3\\sqrt{3}$

## Multiplication
$\\sqrt{3} \\times \\sqrt{12} = \\sqrt{36} = 6$
$(2 + \\sqrt{3})^2 = 4 + 4\\sqrt{3} + 3 = 7 + 4\\sqrt{3}$
$(\\sqrt{5} + \\sqrt{2})(\\sqrt{5} - \\sqrt{2}) = 5 - 2 = 3$

## Conjugates
$a + \\sqrt{b}$ and $a - \\sqrt{b}$ are **conjugate surds**; their product $a^2 - b$ is rational.

## Rationalising the denominator
### Single surd
$\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$
### Binomial denominator
Multiply numerator and denominator by the **conjugate**:
$\\frac{1}{3 - \\sqrt{2}} = \\frac{3 + \\sqrt{2}}{9 - 2} = \\frac{3 + \\sqrt{2}}{7}$
$\\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1} = \\frac{(\\sqrt{3} + 1)^2}{3 - 1} = \\frac{4 + 2\\sqrt{3}}{2} = 2 + \\sqrt{3}$

## Equality of surds
If $a + b\\sqrt{n} = c + d\\sqrt{n}$ with $a$, $b$, $c$, $d$ rational and $\\sqrt{n}$ a surd, then $a = c$ and $b = d$.
*Example:* $(3 + \\sqrt{2})^2 = 11 + 6\\sqrt{2}$, so if this equals $a + b\\sqrt{2}$ then $a = 11$ and $b = 6$.

## Square root of a surd expression
To find $\\sqrt{7 + 4\\sqrt{3}}$, let it equal $\\sqrt{x} + \\sqrt{y}$. Squaring: $x + y = 7$ and $xy = 12$, so $x = 4$, $y = 3$, and the root is $2 + \\sqrt{3}$.`,
          examples: `**Example 1.** Simplify $\\sqrt{72}$. *Solution:* $\\sqrt{36 \\times 2} = 6\\sqrt{2}$.

**Example 2.** Rationalise $\\frac{10}{\\sqrt{5}}$. *Solution:* $\\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$.

**Example 3.** Simplify $\\frac{2}{\\sqrt{5} - \\sqrt{3}}$. *Solution:* $\\frac{2(\\sqrt{5} + \\sqrt{3})}{5 - 3} = \\sqrt{5} + \\sqrt{3}$.`,
        },
        questions: [
          ["E", "Simplify $\\sqrt{50}$.", "$5\\sqrt{2}$", "$2\\sqrt{5}$", "$25\\sqrt{2}$", "$10\\sqrt{5}$", "50 is 25 times 2."],
          ["E", "Evaluate $\\sqrt{3} \\times \\sqrt{12}$.", "6", "$\\sqrt{15}$", "36", "$3\\sqrt{2}$", "The product is the square root of 36."],
          ["E", "Simplify $2\\sqrt{3} + 5\\sqrt{3}$.", "$7\\sqrt{3}$", "$7\\sqrt{6}$", "$10\\sqrt{3}$", "21", "Like surds are added like like terms."],
          ["M", "Rationalise the denominator of $\\frac{6}{\\sqrt{3}}$.", "$2\\sqrt{3}$", "$6\\sqrt{3}$", "$3\\sqrt{2}$", "$\\sqrt{2}$", "Multiply top and bottom by root 3."],
          ["M", "Evaluate $(\\sqrt{5} + \\sqrt{2})(\\sqrt{5} - \\sqrt{2})$.", "3", "7", "$\\sqrt{3}$", "$7 - 2\\sqrt{10}$", "It is a difference of two squares: 5 − 2."],
          ["M", "Simplify $\\sqrt{48} - \\sqrt{27} + \\sqrt{12}$.", "$3\\sqrt{3}$", "$\\sqrt{33}$", "$9\\sqrt{3}$", "$5\\sqrt{3}$", "The terms are 4, 3 and 2 times root 3."],
          ["M", "Expand $(2 + \\sqrt{3})^2$.", "$7 + 4\\sqrt{3}$", "$7 + 2\\sqrt{3}$", "7", "$4 + 3\\sqrt{3}$", "4 + 4 root 3 + 3."],
          ["H", "Rationalise the denominator of $\\frac{1}{3 - \\sqrt{2}}$.", "$\\frac{3 + \\sqrt{2}}{7}$", "$\\frac{3 - \\sqrt{2}}{7}$", "$\\frac{3 + \\sqrt{2}}{11}$", "$3 + \\sqrt{2}$", "Multiply by the conjugate; 9 − 2 = 7."],
          ["H", "Simplify $\\frac{\\sqrt{3} + 1}{\\sqrt{3} - 1}$.", "$2 + \\sqrt{3}$", "$2 - \\sqrt{3}$", "$4 + 2\\sqrt{3}$", "$1 + \\sqrt{3}$", "The numerator becomes 4 + 2 root 3 over 2."],
          ["H", "If $(3 + \\sqrt{2})^2 = a + b\\sqrt{2}$, where $a$ and $b$ are rational, the value of $a + b$ is", "17", "11", "6", "13", "The expansion is 11 + 6 root 2."],
        ],
      },
      {
        week: 4,
        title: "Binary operations",
        subtopics: ["Definition and closure", "Commutative and associative properties", "Identity and inverse elements", "Operation tables and modular arithmetic"],
        objectives: ["Define a binary operation and test for closure", "Test an operation for commutativity and associativity", "Find identity and inverse elements", "Use operation tables, including those in modular arithmetic"],
        lesson: {
          title: "Rules for Combining Elements",
          summary: "Evaluate binary operations and investigate their properties.",
          minutes: 40,
          notes: `## Binary operation
A **binary operation** $*$ on a set $S$ is a rule that combines any two elements of $S$ to give a single result. Ordinary addition and multiplication are examples.
*Example:* if $a * b = a + b - 2$, then $3 * 5 = 3 + 5 - 2 = 6$.

## Properties
### Closure
$S$ is **closed** under $*$ if $a * b \\in S$ for all $a, b \\in S$. The integers are closed under addition and subtraction but not under division.

### Commutative
$a * b = b * a$ for all $a$, $b$.
$a * b = a + b + ab$ is commutative; $a * b = a - b$ is not.

### Associative
$(a * b) * c = a * (b * c)$ for all $a$, $b$, $c$.
Subtraction is not associative: $(8 - 3) - 2 = 3$ but $8 - (3 - 2) = 7$.

### Distributive
$*$ is distributive over $\\circ$ if $a * (b \\circ c) = (a * b) \\circ (a * c)$. Multiplication is distributive over addition.

## Identity element
An element $e$ such that $a * e = e * a = a$ for every $a$.
*Example 1:* $a * b = a + b - 2$. Then $a + e - 2 = a$, so $e = 2$.
*Example 2:* $a * b = a + b + ab$. Then $a + e + ae = a$, so $e(1 + a) = 0$ and $e = 0$.

## Inverse element
The inverse $a^{-1}$ of $a$ satisfies $a * a^{-1} = a^{-1} * a = e$.
*Example 1:* under $a * b = a + b - 2$ (identity 2), the inverse of 5 is $x$ where $5 + x - 2 = 2$, so $x = -1$.
*Example 2:* under $a * b = a + b + ab$ (identity 0), the inverse of 2 is $x$ where $2 + x + 2x = 0$, so $x = -\\frac{2}{3}$. In general $a^{-1} = \\frac{-a}{1 + a}$, so $-1$ has no inverse.

## Operation tables
For a finite set, the results are shown in a table (a Cayley table).
- the operation is **commutative** if the table is **symmetrical** about the leading diagonal
- the **identity** is the element whose row and column repeat the headings
- the **inverse** of $a$ is the element that combines with $a$ to give the identity

### Modular arithmetic
Multiplication modulo 5 on $\\{1, 2, 3, 4\\}$:
| $\\times$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 1 | 2 | 3 | 4 |
| **2** | 2 | 4 | 1 | 3 |
| **3** | 3 | 1 | 4 | 2 |
| **4** | 4 | 3 | 2 | 1 |
The identity is 1. Inverses: $2 \\leftrightarrow 3$ (since $2 \\times 3 = 6 \\equiv 1$); 4 is its own inverse. The set is closed.

## Composite evaluation
Work the bracket first. If $a * b = a^2 - b$, then $2 * 1 = 3$ and $3 * (2 * 1) = 3 * 3 = 9 - 3 = 6$.`,
          examples: `**Example 1.** If $a * b = 2a + b$, evaluate $3 * 4$. *Solution:* $6 + 4 = 10$.

**Example 2.** Find the identity element of $a * b = a + b - 5$. *Solution:* $a + e - 5 = a$, so $e = 5$.

**Example 3.** Is $a * b = a^2 + b^2$ commutative? *Solution:* Yes — $a^2 + b^2 = b^2 + a^2$.`,
        },
        questions: [
          ["E", "If $a * b = a + b - 2$, evaluate $3 * 5$.", "6", "8", "10", "13", "3 + 5 − 2. Answer: 6."],
          ["E", "An operation $*$ for which $a * b = b * a$ for all $a$ and $b$ is said to be", "commutative", "associative", "distributive", "closed", "The order of the elements does not matter."],
          ["E", "If $a * b = 2a + b$, evaluate $3 * 4$.", "10", "11", "14", "24", "Twice 3, plus 4."],
          ["M", "The identity element of the operation $a * b = a + b + ab$ is", "0", "1", "$-1$", "2", "a + e + ae = a gives e = 0."],
          ["M", "The identity element of the operation $a * b = a + b - 2$ on the real numbers is", "2", "0", "$-2$", "1", "a + e − 2 = a. Answer: 2."],
          ["M", "Under the operation $a * b = a + b - 2$, the inverse of 5 is", "$-1$", "$-5$", "$\\frac{1}{5}$", "3", "5 + x − 2 must equal the identity, 2."],
          ["M", "If $a * b = a^2 - b$, evaluate $3 * (2 * 1)$.", "6", "5", "8", "0", "2 * 1 = 3, then 3 * 3 = 6."],
          ["H", "Under the operation $a * b = a + b + ab$, the inverse of 2 is", "$-\\frac{2}{3}$", "$-2$", "$\\frac{1}{2}$", "$-\\frac{1}{3}$", "2 + x + 2x = 0."],
          ["H", "The operation $a * b = a - b$ on the real numbers is", "neither commutative nor associative", "commutative but not associative", "associative but not commutative", "both commutative and associative", "Changing the order or the grouping changes the result."],
          ["H", "Under multiplication modulo 5 on the set $\\{1, 2, 3, 4\\}$, the inverse of 3 is", "2", "3", "4", "1", "3 × 2 = 6, which is 1 modulo 5."],
        ],
      },
      {
        week: 5,
        title: "Functions and mappings",
        subtopics: ["Mappings, domain and range", "Types of function", "Composite functions", "Inverse functions"],
        objectives: ["Define a mapping and find its domain and range", "Identify one-to-one and onto functions", "Form composite functions", "Find the inverse of a function"],
        lesson: {
          title: "Functions",
          summary: "Describe functions and find composite and inverse functions.",
          minutes: 40,
          notes: `## Mapping and function
A **mapping** from a set $A$ to a set $B$ pairs elements of $A$ with elements of $B$. It is a **function** if **every** element of $A$ is paired with **exactly one** element of $B$.
We write $f: A \\to B$, $f: x \\to 2x + 3$ or $f(x) = 2x + 3$.
- **domain**: the set $A$ of inputs
- **co-domain**: the set $B$
- **range**: the set of **images** actually obtained
- $f(a)$ is the **image** of $a$

*Example:* $f(x) = 2x + 3$ gives $f(4) = 11$. If $f(x) = x^2$ then $f(-3) = 9$.

## Restrictions on the domain
- a denominator must not be zero: $f(x) = \\frac{1}{x - 2}$ is undefined at $x = 2$
- the expression under a square root must not be negative: $f(x) = \\sqrt{x - 1}$ needs $x \\ge 1$

## Types of function
- **one-to-one (injective)**: different inputs give different images. $f(x) = 2x + 3$ is one-to-one; $f(x) = x^2$ on the real numbers is not, since $f(2) = f(-2) = 4$
- **onto (surjective)**: every element of the co-domain is an image (range = co-domain)
- **one-to-one correspondence (bijective)**: both one-to-one and onto — only such functions have inverses
- **constant** function: $f(x) = c$; **identity** function: $f(x) = x$
- **even** function: $f(-x) = f(x)$; **odd** function: $f(-x) = -f(x)$

### Vertical line test
A graph represents a function if no vertical line meets it more than once.

## Composite functions
$(g \\circ f)(x) = g(f(x))$ — apply $f$ first, then $g$.
*Example:* $f(x) = 3x - 1$, $g(x) = x^2$:
$g(f(2)) = g(5) = 25$; $f(g(2)) = f(4) = 11$.
In general $g \\circ f \\ne f \\circ g$.
If $f(x) = x + 1$ and $g(x) = 2x$, then $f(g(x)) = 2x + 1$ and $g(f(x)) = 2x + 2$.
If $f(x) = 2x - 5$ then $f(f(x)) = 2(2x - 5) - 5 = 4x - 15$.

## Inverse functions
$f^{-1}$ reverses $f$: if $f(a) = b$ then $f^{-1}(b) = a$, and $f^{-1}(f(x)) = x$.
### Method
Write $y = f(x)$; make $x$ the subject; interchange $x$ and $y$.
*Example 1:* $y = 2x + 3$ gives $x = \\frac{y - 3}{2}$, so $f^{-1}(x) = \\frac{x - 3}{2}$.
*Example 2:* $y = \\frac{x + 1}{x - 2}$ gives $y(x - 2) = x + 1$, so $x(y - 1) = 2y + 1$ and $f^{-1}(x) = \\frac{2x + 1}{x - 1}$, $x \\ne 1$.
The graph of $f^{-1}$ is the reflection of the graph of $f$ in the line $y = x$. Also $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$.`,
          examples: `**Example 1.** If $f(x) = 5x - 2$, find $f(3)$. *Solution:* $15 - 2 = 13$.

**Example 2.** Given $f(x) = x + 4$ and $g(x) = 3x$, find $g(f(x))$. *Solution:* $3(x + 4) = 3x + 12$.

**Example 3.** Find the inverse of $f(x) = \\frac{x - 1}{4}$. *Solution:* $x = 4y + 1$, so $f^{-1}(x) = 4x + 1$.`,
        },
        questions: [
          ["E", "If $f(x) = 2x + 3$, find $f(4)$.", "11", "9", "14", "24", "Twice 4, plus 3."],
          ["E", "The set of all permissible inputs of a function is called its", "domain", "range", "image", "co-domain", "The outputs form the range."],
          ["E", "If $f(x) = x^2$, find $f(-3)$.", "9", "$-9$", "6", "$-6$", "The square of a negative number is positive."],
          ["M", "Given $f(x) = 3x - 1$ and $g(x) = x^2$, evaluate $g(f(2))$.", "25", "11", "36", "10", "f(2) = 5 and g(5) = 25."],
          ["M", "The inverse of the function $f(x) = 2x + 3$ is", "$f^{-1}(x) = \\frac{x - 3}{2}$", "$f^{-1}(x) = \\frac{x + 3}{2}$", "$f^{-1}(x) = 2x - 3$", "$f^{-1}(x) = \\frac{1}{2x + 3}$", "Subtract 3, then divide by 2."],
          ["M", "If $f(x) = x + 1$ and $g(x) = 2x$, then $f(g(x))$ is", "$2x + 1$", "$2x + 2$", "$3x + 1$", "$2x^2 + 2x$", "Apply g first to get 2x, then add 1."],
          ["M", "The function $f(x) = \\frac{1}{x - 2}$ is undefined when", "$x = 2$", "$x = 0$", "$x = -2$", "$x = 1$", "The denominator would be zero."],
          ["H", "The inverse of $f(x) = \\frac{x + 1}{x - 2}$, $x \\ne 2$, is", "$f^{-1}(x) = \\frac{2x + 1}{x - 1}$", "$f^{-1}(x) = \\frac{x - 2}{x + 1}$", "$f^{-1}(x) = \\frac{2x - 1}{x + 1}$", "$f^{-1}(x) = \\frac{x - 1}{2x + 1}$", "Make x the subject of y(x − 2) = x + 1."],
          ["H", "The function $f(x) = x^2$ defined on the set of real numbers is not one-to-one because", "$f(2) = f(-2)$", "$f(0) = 0$", "it has no range", "$f(1) = 1$", "Two different inputs share the same image."],
          ["H", "If $f(x) = 2x - 5$, solve $f(f(x)) = 1$.", "$x = 4$", "$x = 3$", "$x = 8$", "$x = -4$", "f(f(x)) = 4x − 15."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Quadratic equations and inequalities",
        subtopics: ["Solving quadratic equations", "The discriminant and nature of roots", "Sum and product of roots", "Quadratic inequalities and maximum or minimum values"],
        objectives: ["Solve quadratic equations by factorisation, completing the square and formula", "Use the discriminant to determine the nature of roots", "Use the sum and product of roots to form new equations", "Solve quadratic inequalities and find maximum or minimum values"],
        lesson: {
          title: "Roots of Quadratic Equations",
          summary: "Analyse quadratic equations through their roots and discriminant.",
          minutes: 40,
          notes: `## Solving $ax^2 + bx + c = 0$
- **factorisation**: $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$, so $x = 2$ or $3$
- **completing the square**: $x^2 - 6x + 11 = (x - 3)^2 + 2$
- **formula**: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$

## The discriminant
$D = b^2 - 4ac$
| Discriminant | Nature of roots |
|---|---|
| $D > 0$ | two distinct real roots (rational if $D$ is a perfect square) |
| $D = 0$ | two equal real roots |
| $D < 0$ | no real roots (complex roots) |
*Examples:* $x^2 + 4x + 4$: $D = 0$ — equal roots. $x^2 + 2x + 5$: $D = 4 - 20 = -16$ — no real roots.
For $x^2 + kx + 9 = 0$ to have equal roots, $k^2 - 36 = 0$, so $k = \\pm 6$.

## Sum and product of roots
If $\\alpha$ and $\\beta$ are the roots of $ax^2 + bx + c = 0$:
$\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$
The equation with roots $\\alpha$, $\\beta$ is
$x^2 - (\\text{sum of roots})x + (\\text{product of roots}) = 0$
*Example:* roots 3 and $-2$: sum 1, product $-6$: $x^2 - x - 6 = 0$.

### Symmetric expressions
- $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$
- $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}$
- $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$
- $\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta)$
*Example:* for $x^2 - 4x + 1 = 0$, $\\alpha + \\beta = 4$, $\\alpha\\beta = 1$, so $\\alpha^2 + \\beta^2 = 16 - 2 = 14$.

### New equations
For $2x^2 - 3x + 1 = 0$: $\\alpha + \\beta = \\frac{3}{2}$, $\\alpha\\beta = \\frac{1}{2}$. The equation with roots $\\frac{1}{\\alpha}$, $\\frac{1}{\\beta}$ has sum $3$ and product $2$: $x^2 - 3x + 2 = 0$.

## Maximum and minimum values
Complete the square: $a(x - h)^2 + k$.
- if $a > 0$ the **minimum** value is $k$, at $x = h$
- if $a < 0$ the **maximum** value is $k$
*Example:* $x^2 - 6x + 11 = (x - 3)^2 + 2$ has minimum value 2 at $x = 3$.
The line of symmetry of the curve is $x = -\\frac{b}{2a}$.

## Quadratic inequalities
Factorise and consider signs (or sketch the curve).
$x^2 - x - 6 < 0$ gives $(x - 3)(x + 2) < 0$, true **between** the roots: $-2 < x < 3$.
$x^2 - x - 6 > 0$ is true **outside** the roots: $x < -2$ or $x > 3$.`,
          examples: `**Example 1.** Find the sum and product of the roots of $3x^2 - 6x + 2 = 0$. *Solution:* sum $= 2$; product $= \\frac{2}{3}$.

**Example 2.** Form the equation whose roots are 4 and $-1$. *Solution:* sum 3, product $-4$: $x^2 - 3x - 4 = 0$.

**Example 3.** Solve $x^2 - 5x + 4 > 0$. *Solution:* $(x - 1)(x - 4) > 0$, so $x < 1$ or $x > 4$.`,
        },
        questions: [
          ["E", "The sum of the roots of $x^2 - 5x + 6 = 0$ is", "5", "$-5$", "6", "$-6$", "It equals minus b over a."],
          ["E", "The product of the roots of $2x^2 + 3x - 8 = 0$ is", "$-4$", "4", "$-\\frac{3}{2}$", "$-8$", "It equals c over a."],
          ["E", "The discriminant of $x^2 + 4x + 4 = 0$ is", "0", "32", "8", "$-16$", "16 − 16 = 0. Answer: 0."],
          ["M", "The equation $x^2 + 2x + 5 = 0$ has", "no real roots", "two equal real roots", "two distinct rational roots", "one positive and one negative real root", "The discriminant is −16."],
          ["M", "The quadratic equation whose roots are 3 and $-2$ is", "$x^2 - x - 6 = 0$", "$x^2 + x - 6 = 0$", "$x^2 - x + 6 = 0$", "$x^2 - 5x - 6 = 0$", "The sum is 1 and the product is −6."],
          ["M", "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 4x + 1 = 0$, the value of $\\alpha^2 + \\beta^2$ is", "14", "16", "18", "15", "The square of the sum, less twice the product."],
          ["M", "The solution of the inequality $x^2 - x - 6 < 0$ is", "$-2 < x < 3$", "$x < -2$ or $x > 3$", "$-3 < x < 2$", "$x > 3$", "The expression is negative between its roots."],
          ["H", "The values of $k$ for which $x^2 + kx + 9 = 0$ has equal roots are", "$\\pm 6$", "$\\pm 3$", "$\\pm 9$", "$\\pm 36$", "Set k squared − 36 equal to zero."],
          ["H", "If $\\alpha$ and $\\beta$ are the roots of $2x^2 - 3x + 1 = 0$, the equation whose roots are $\\frac{1}{\\alpha}$ and $\\frac{1}{\\beta}$ is", "$x^2 - 3x + 2 = 0$", "$x^2 + 3x + 2 = 0$", "$2x^2 - 3x + 1 = 0$", "$x^2 - 2x + 3 = 0$", "The new sum is 3 and the new product is 2."],
          ["H", "The minimum value of $x^2 - 6x + 11$ is", "2", "11", "3", "$-9$", "Completing the square gives (x − 3) squared + 2."],
        ],
      },
      {
        week: 2,
        title: "Sequences and series",
        subtopics: ["Arithmetic progression", "Sum of an arithmetic progression", "Geometric progression", "Sum of a geometric progression and sum to infinity"],
        objectives: ["Find the nth term of an arithmetic progression", "Find the sum of an arithmetic progression", "Find the nth term of a geometric progression", "Find the sum of a geometric progression and its sum to infinity"],
        lesson: {
          title: "Arithmetic and Geometric Progressions",
          summary: "Find terms and sums of arithmetic and geometric progressions.",
          minutes: 40,
          notes: `## Sequences and series
A **sequence** is an ordered list of terms following a rule; a **series** is the sum of the terms.

## Arithmetic progression (AP)
Each term is obtained by adding a constant **common difference** $d$.
$a, \\; a + d, \\; a + 2d, \\dots$
**nth term:** $T_n = a + (n - 1)d$
*Example:* in $3, 7, 11, \\dots$, $a = 3$, $d = 4$, so $T_{10} = 3 + 9(4) = 39$.

### Finding $a$ and $d$
If $T_3 = 10$ and $T_7 = 22$: $a + 2d = 10$ and $a + 6d = 22$. Subtracting, $4d = 12$, so $d = 3$ and $a = 4$. Then $T_{20} = 4 + 19(3) = 61$.

### Sum of the first n terms
$S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}(a + l)$, where $l$ is the last term.
*Example:* for $2, 5, 8, \\dots$, $S_{20} = 10[4 + 19(3)] = 10(61) = 610$.

### Arithmetic mean
The arithmetic mean of $a$ and $b$ is $\\frac{a + b}{2}$. Of 4 and 10 it is 7.

## Geometric progression (GP)
Each term is obtained by multiplying by a constant **common ratio** $r$.
$a, \\; ar, \\; ar^2, \\dots$
**nth term:** $T_n = ar^{n-1}$
*Example:* in $3, 6, 12, \\dots$, $r = 2$, so $T_6 = 3 \\times 2^5 = 96$.

### Sum of the first n terms
$S_n = \\frac{a(r^n - 1)}{r - 1}$ for $r > 1$, or $S_n = \\frac{a(1 - r^n)}{1 - r}$ for $r < 1$.
*Example:* for $2, 6, 18, \\dots$, $S_6 = \\frac{2(3^6 - 1)}{2} = 728$.

### Sum to infinity
If $|r| < 1$ the terms shrink towards zero and
$S_\\infty = \\frac{a}{1 - r}$
*Example:* $8 + 4 + 2 + \\dots = \\frac{8}{1 - \\frac{1}{2}} = 16$.
If $S_\\infty = 12$ and $a = 4$, then $1 - r = \\frac{1}{3}$ and $r = \\frac{2}{3}$.

### Geometric mean
The geometric mean of $a$ and $b$ is $\\sqrt{ab}$. Of 4 and 9 it is 6.

### Recurring decimals
$0.\\dot{3} = 0.3 + 0.03 + \\dots = \\frac{0.3}{1 - 0.1} = \\frac{1}{3}$.

## Useful links
- $T_n = S_n - S_{n-1}$
- three consecutive AP terms: $a - d$, $a$, $a + d$
- three consecutive GP terms: $\\frac{a}{r}$, $a$, $ar$

## Applications
simple interest grows as an AP; compound interest, population growth and depreciation follow a GP.`,
          examples: `**Example 1.** Find the 15th term of the AP $5, 8, 11, \\dots$ *Solution:* $5 + 14(3) = 47$.

**Example 2.** Find the 5th term of the GP $2, 10, 50, \\dots$ *Solution:* $2 \\times 5^4 = 1250$.

**Example 3.** Find the sum to infinity of $9 + 3 + 1 + \\dots$ *Solution:* $\\frac{9}{1 - \\frac{1}{3}} = 13.5$.`,
        },
        questions: [
          ["E", "The 10th term of the arithmetic progression $3, 7, 11, \\dots$ is", "39", "43", "40", "36", "3 + 9 × 4. Answer: 39."],
          ["E", "The common ratio of the geometric progression $2, 6, 18, \\dots$ is", "3", "4", "12", "$\\frac{1}{3}$", "Divide any term by the one before it."],
          ["E", "The arithmetic mean of 4 and 10 is", "7", "14", "6", "$\\sqrt{40}$", "Half of their sum."],
          ["M", "The sum of the first 20 terms of the arithmetic progression $2, 5, 8, \\dots$ is", "610", "590", "1220", "630", "10 × (4 + 57). Answer: 610."],
          ["M", "The 6th term of the geometric progression $3, 6, 12, \\dots$ is", "96", "192", "48", "36", "3 × 2 to the power 5."],
          ["M", "The sum to infinity of the series $8 + 4 + 2 + \\dots$ is", "16", "14", "15", "32", "8 divided by one-half."],
          ["M", "The geometric mean of 4 and 9 is", "6", "6.5", "36", "13", "The square root of their product."],
          ["H", "The 3rd term of an arithmetic progression is 10 and the 7th term is 22. The 20th term is", "61", "64", "58", "70", "d = 3 and a = 4, so 4 + 57."],
          ["H", "The sum of the first 6 terms of the geometric progression $2, 6, 18, \\dots$ is", "728", "486", "1458", "364", "2 × (729 − 1) ÷ 2."],
          ["H", "A geometric progression has first term 4 and sum to infinity 12. Its common ratio is", "$\\frac{2}{3}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "3", "1 − r = 4/12. Answer: $\\frac{2}{3}$."],
        ],
      },
      {
        week: 3,
        title: "Trigonometric ratios and identities",
        subtopics: ["Ratios of acute and special angles", "Angles of any magnitude", "Fundamental identities", "Trigonometric equations and the sine and cosine rules"],
        objectives: ["Find trigonometric ratios of acute and special angles", "Find ratios of angles of any magnitude", "Use the fundamental identities", "Solve simple trigonometric equations and apply the sine and cosine rules"],
        lesson: {
          title: "Trigonometry",
          summary: "Use trigonometric ratios, identities and rules to solve problems.",
          minutes: 40,
          notes: `## Ratios in a right-angled triangle
$\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$, $\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\sin \\theta}{\\cos \\theta}$
**Reciprocal ratios:** $\\text{cosec}\\, \\theta = \\frac{1}{\\sin \\theta}$, $\\sec \\theta = \\frac{1}{\\cos \\theta}$, $\\cot \\theta = \\frac{1}{\\tan \\theta}$
If $\\sin \\theta = \\frac{3}{5}$ ($\\theta$ acute), the sides are 3, 4, 5, so $\\cos \\theta = \\frac{4}{5}$ and $\\tan \\theta = \\frac{3}{4}$.

## Special angles
| | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ | $90^\\circ$ |
|---|---|---|---|---|---|
| $\\sin$ | 0 | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | 1 |
| $\\cos$ | 1 | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | 0 |
| $\\tan$ | 0 | $\\frac{1}{\\sqrt{3}}$ | 1 | $\\sqrt{3}$ | undefined |

## Angles of any magnitude
| Quadrant | Angles | Positive ratios |
|---|---|---|
| 1st | $0^\\circ$ to $90^\\circ$ | all |
| 2nd | $90^\\circ$ to $180^\\circ$ | sine |
| 3rd | $180^\\circ$ to $270^\\circ$ | tangent |
| 4th | $270^\\circ$ to $360^\\circ$ | cosine |
Find the acute angle made with the $x$-axis and attach the correct sign:
$\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$; $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$; $\\tan 225^\\circ = \\tan 45^\\circ = 1$.

## Fundamental identities
- $\\sin^2 \\theta + \\cos^2 \\theta = 1$
- $1 + \\tan^2 \\theta = \\sec^2 \\theta$
- $1 + \\cot^2 \\theta = \\text{cosec}^2 \\theta$
*Example:* $\\frac{1 - \\cos^2 \\theta}{\\sin \\theta \\cos \\theta} = \\frac{\\sin^2 \\theta}{\\sin \\theta \\cos \\theta} = \\tan \\theta$.

## Trigonometric equations
Find the basic acute angle, then all angles in the required range.
$2 \\sin \\theta = 1$ for $0^\\circ \\le \\theta \\le 360^\\circ$: $\\sin \\theta = \\frac{1}{2}$, positive in the 1st and 2nd quadrants, so $\\theta = 30^\\circ$ or $150^\\circ$.

## Graphs
$y = \\sin x$ and $y = \\cos x$ lie between $-1$ and $1$ with period $360^\\circ$; $y = \\tan x$ has period $180^\\circ$.

## Sine rule
$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
Use it with two angles and a side, or two sides and a non-included angle.

## Cosine rule
$c^2 = a^2 + b^2 - 2ab \\cos C$
Use it with two sides and the included angle, or three sides.
*Example:* $a = 7$, $b = 8$, $C = 60^\\circ$: $c^2 = 49 + 64 - 56 = 57$, so $c = \\sqrt{57}$.

## Area of a triangle
$\\text{Area} = \\frac{1}{2}ab \\sin C$`,
          examples: `**Example 1.** If $\\cos \\theta = \\frac{5}{13}$ and $\\theta$ is acute, find $\\sin \\theta$. *Solution:* the sides are 5, 12, 13, so $\\sin \\theta = \\frac{12}{13}$.

**Example 2.** Evaluate $\\sin 210^\\circ$. *Solution:* third quadrant: $-\\sin 30^\\circ = -\\frac{1}{2}$.

**Example 3.** Solve $\\tan \\theta = 1$ for $0^\\circ \\le \\theta \\le 360^\\circ$. *Solution:* $\\theta = 45^\\circ$ or $225^\\circ$.`,
        },
        questions: [
          ["E", "The value of $\\sin 30^\\circ$ is", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "1", "$\\frac{\\sqrt{2}}{2}$", "It is a standard special-angle value."],
          ["E", "The value of $\\tan 45^\\circ$ is", "1", "0", "$\\sqrt{3}$", "$\\frac{1}{2}$", "The opposite and adjacent sides are equal."],
          ["E", "For any angle $\\theta$, $\\sin^2 \\theta + \\cos^2 \\theta$ equals", "1", "0", "$\\tan^2 \\theta$", "2", "This is the Pythagorean identity."],
          ["M", "If $\\sin \\theta = \\frac{3}{5}$ and $\\theta$ is acute, then $\\cos \\theta$ is", "$\\frac{4}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{3}$", "$\\frac{2}{5}$", "The triangle has sides 3, 4 and 5."],
          ["M", "The value of $\\cos 120^\\circ$ is", "$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{2}$", "Cosine is negative in the second quadrant."],
          ["M", "The expression $1 + \\tan^2 \\theta$ is identical to", "$\\sec^2 \\theta$", "$\\text{cosec}^2 \\theta$", "$\\cot^2 \\theta$", "$\\cos^2 \\theta$", "Divide the Pythagorean identity by cos squared."],
          ["M", "If $\\tan \\theta = \\frac{5}{12}$ and $\\theta$ is acute, then $\\sin \\theta$ is", "$\\frac{5}{13}$", "$\\frac{12}{13}$", "$\\frac{5}{17}$", "$\\frac{12}{5}$", "The hypotenuse is 13."],
          ["H", "The solutions of $2 \\sin \\theta = 1$ for $0^\\circ \\le \\theta \\le 360^\\circ$ are", "$30^\\circ$ and $150^\\circ$", "$30^\\circ$ and $330^\\circ$", "$60^\\circ$ and $120^\\circ$", "$30^\\circ$ and $210^\\circ$", "Sine is positive in the first and second quadrants."],
          ["H", "Simplify $\\frac{1 - \\cos^2 \\theta}{\\sin \\theta \\cos \\theta}$.", "$\\tan \\theta$", "$\\cot \\theta$", "$\\sin \\theta$", "$\\sec \\theta$", "The numerator is sin squared."],
          ["H", "In triangle $ABC$, $a = 7$ cm, $b = 8$ cm and angle $C = 60^\\circ$. The length of side $c$ is", "$\\sqrt{57}$ cm", "$\\sqrt{113}$ cm", "$\\sqrt{169}$ cm", "$\\sqrt{15}$ cm", "49 + 64 − 2 × 7 × 8 × ½."],
        ],
      },
      {
        week: 4,
        title: "Coordinate geometry of the straight line",
        subtopics: ["Distance, midpoint and division of a line", "Gradient and equation of a line", "Parallel and perpendicular lines and the angle between lines", "Perpendicular distance and area of a triangle"],
        objectives: ["Find the distance between points, the midpoint and a point of division", "Find the gradient and equation of a straight line", "Use the conditions for parallel and perpendicular lines and find the angle between lines", "Find the perpendicular distance from a point to a line and the area of a triangle"],
        lesson: {
          title: "Lines in the Cartesian Plane",
          summary: "Apply the formulae of coordinate geometry to straight lines.",
          minutes: 40,
          notes: `## Distance and midpoint
For $A(x_1, y_1)$ and $B(x_2, y_2)$:
$AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
Midpoint $= \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$
*Example:* $(1, 2)$ and $(4, 6)$ are $\\sqrt{9 + 16} = 5$ units apart; the midpoint of $(2, 3)$ and $(6, 7)$ is $(4, 5)$.

## Division of a line
The point dividing $AB$ internally in the ratio $m : n$ is
$\\left(\\frac{mx_2 + nx_1}{m + n}, \\frac{my_2 + ny_1}{m + n}\\right)$
*Example:* $(1, 2)$ and $(7, 8)$ in the ratio $1 : 2$: $\\left(\\frac{7 + 2}{3}, \\frac{8 + 4}{3}\\right) = (3, 4)$.

## Gradient
$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan \\theta$, where $\\theta$ is the angle the line makes with the positive $x$-axis.
Through $(1, 2)$ and $(3, 8)$: $m = \\frac{6}{2} = 3$.

## Equation of a line
- gradient–intercept form: $y = mx + c$
- point–gradient form: $y - y_1 = m(x - x_1)$
- two-point form: $\\frac{y - y_1}{x - x_1} = \\frac{y_2 - y_1}{x_2 - x_1}$
- intercept form: $\\frac{x}{a} + \\frac{y}{b} = 1$
- general form: $ax + by + c = 0$, with gradient $-\\frac{a}{b}$
*Example:* through $(1, 3)$ with gradient 2: $y - 3 = 2(x - 1)$, so $y = 2x + 1$.

## Parallel and perpendicular lines
- parallel: $m_1 = m_2$
- perpendicular: $m_1 m_2 = -1$
A line perpendicular to $y = 2x + 1$ has gradient $-\\frac{1}{2}$.

## Angle between two lines
$\\tan \\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|$
*Example:* $y = x$ is inclined at $45^\\circ$ and $y = \\sqrt{3}x$ at $60^\\circ$, so the acute angle between them is $15^\\circ$.

## Perpendicular distance
From $(x_1, y_1)$ to $ax + by + c = 0$:
$d = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}$
*Example:* from $(3, 4)$ to $3x + 4y - 5 = 0$: $\\frac{|9 + 16 - 5|}{5} = 4$.

## Area of a triangle
With vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$:
$\\text{Area} = \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$
*Example:* $(1, 1)$, $(5, 1)$, $(3, 7)$: $\\frac{1}{2}|1(-6) + 5(6) + 3(0)| = 12$ square units.
Three points are **collinear** if the area is zero.

## Intersection of lines
Solve the two equations simultaneously.`,
          examples: `**Example 1.** Find the equation of the line through $(2, 5)$ and $(4, 9)$. *Solution:* $m = 2$; $y - 5 = 2(x - 2)$, so $y = 2x + 1$.

**Example 2.** Find the gradient of $3x + 2y - 6 = 0$. *Solution:* $y = -\\frac{3}{2}x + 3$, so the gradient is $-\\frac{3}{2}$.

**Example 3.** Find the distance from the origin to $5x + 12y - 26 = 0$. *Solution:* $\\frac{26}{13} = 2$.`,
        },
        questions: [
          ["E", "The distance between the points $(1, 2)$ and $(4, 6)$ is", "5 units", "7 units", "25 units", "$\\sqrt{7}$ units", "The square root of 9 + 16."],
          ["E", "The midpoint of the line joining $(2, 3)$ and $(6, 7)$ is", "$(4, 5)$", "$(8, 10)$", "$(2, 2)$", "$(3, 4)$", "Average the coordinates."],
          ["E", "The gradient of the line $y = 3x - 2$ is", "3", "$-2$", "$\\frac{1}{3}$", "2", "It is the coefficient of x."],
          ["M", "The gradient of the line through $(1, 2)$ and $(3, 8)$ is", "3", "$\\frac{1}{3}$", "6", "2", "Rise 6 over run 2."],
          ["M", "The equation of the line through $(1, 3)$ with gradient 2 is", "$y = 2x + 1$", "$y = 2x + 3$", "$y = 2x - 1$", "$y = 3x + 2$", "y − 3 = 2(x − 1)."],
          ["M", "The gradient of a line perpendicular to $y = 2x + 1$ is", "$-\\frac{1}{2}$", "2", "$\\frac{1}{2}$", "$-2$", "The product of the gradients must be −1."],
          ["M", "The point that divides the line joining $(1, 2)$ and $(7, 8)$ internally in the ratio $1 : 2$ is", "$(3, 4)$", "$(5, 6)$", "$(4, 5)$", "$(2, 3)$", "It is one-third of the way from the first point."],
          ["H", "The perpendicular distance from the point $(3, 4)$ to the line $3x + 4y - 5 = 0$ is", "4 units", "5 units", "20 units", "2 units", "|9 + 16 − 5| ÷ 5."],
          ["H", "The acute angle between the lines $y = x$ and $y = \\sqrt{3}x$ is", "$15^\\circ$", "$30^\\circ$", "$45^\\circ$", "$105^\\circ$", "The lines are inclined at 45° and 60°."],
          ["H", "The area of the triangle with vertices $(1, 1)$, $(5, 1)$ and $(3, 7)$ is", "12 square units", "24 square units", "6 square units", "14 square units", "The base is 4 and the height is 6."],
        ],
      },
      {
        week: 5,
        title: "Logical reasoning",
        subtopics: ["Statements and negation", "Conjunction, disjunction and truth tables", "Implication, converse, inverse and contrapositive", "Tautology, equivalence and valid arguments"],
        objectives: ["Identify statements and form their negations", "Construct truth tables for conjunction and disjunction", "Form the converse, inverse and contrapositive of an implication", "Identify tautologies, equivalent statements and valid arguments"],
        lesson: {
          title: "Mathematical Logic",
          summary: "Use the connectives of logic and truth tables to test statements and arguments.",
          minutes: 40,
          notes: `## Statements
A **statement (proposition)** is a sentence that is either **true (T)** or **false (F)**, but not both. "Abuja is in Nigeria" is a statement; "Close the door" and "How old are you?" are not.
Statements are denoted by $p$, $q$, $r$.

## Negation
$\\sim p$ ("not $p$") has the opposite truth value to $p$. The negation of "all students passed" is "at least one student did not pass".

## Connectives
| Name | Symbol | Read as | True when |
|---|---|---|---|
| conjunction | $p \\wedge q$ | $p$ and $q$ | **both** are true |
| disjunction | $p \\vee q$ | $p$ or $q$ | **at least one** is true |
| implication (conditional) | $p \\Rightarrow q$ | if $p$ then $q$ | false **only** when $p$ is true and $q$ is false |
| bi-implication | $p \\Leftrightarrow q$ | $p$ if and only if $q$ | both have the **same** truth value |

## Truth table
| $p$ | $q$ | $p \\wedge q$ | $p \\vee q$ | $p \\Rightarrow q$ | $p \\Leftrightarrow q$ |
|---|---|---|---|---|---|
| T | T | T | T | T | T |
| T | F | F | T | F | F |
| F | T | F | T | T | F |
| F | F | F | F | T | T |
With $n$ simple statements a truth table has $2^n$ rows.

## Implication and related statements
For $p \\Rightarrow q$ ($p$ is the **antecedent**, $q$ the **consequent**):
- **converse**: $q \\Rightarrow p$
- **inverse**: $\\sim p \\Rightarrow \\sim q$
- **contrapositive**: $\\sim q \\Rightarrow \\sim p$
An implication and its **contrapositive are logically equivalent**; the converse and inverse are equivalent to each other but not to the original.
*Example:* "If a number is divisible by 4, then it is even." Converse: "If a number is even, then it is divisible by 4" (false). Contrapositive: "If a number is not even, then it is not divisible by 4" (true).

## Equivalence
Two statements are **logically equivalent** if they have the same truth table.
**De Morgan's laws:**
$\\sim (p \\wedge q) \\equiv \\sim p \\vee \\sim q$ and $\\sim (p \\vee q) \\equiv \\sim p \\wedge \\sim q$
Also $p \\Rightarrow q \\equiv \\sim p \\vee q$.

## Tautology and contradiction
- a **tautology** is always true: $p \\vee \\sim p$
- a **contradiction** is always false: $p \\wedge \\sim p$

## Valid arguments
An argument is **valid** if the conclusion must be true whenever the premises are true.
- **modus ponens**: $p \\Rightarrow q$; $p$; therefore $q$
- **modus tollens**: $p \\Rightarrow q$; $\\sim q$; therefore $\\sim p$
- **chain rule (syllogism)**: $p \\Rightarrow q$; $q \\Rightarrow r$; therefore $p \\Rightarrow r$
*Example:* "If it rains, the ground is wet. The ground is not wet. Therefore it did not rain." — valid (modus tollens).
**Invalid** (fallacy of the converse): "If it rains, the ground is wet. The ground is wet. Therefore it rained."

## Quantifiers
$\\forall$ — "for all"; $\\exists$ — "there exists". The negation of "for all $x$, $P(x)$" is "there exists an $x$ for which $P(x)$ is false".`,
          examples: `**Example 1.** If $p$ is true and $q$ is false, find the truth value of $p \\vee q$. *Solution:* **True** — at least one is true.

**Example 2.** Write the contrapositive of "If I study, then I pass". *Solution:* "If I do not pass, then I did not study."

**Example 3.** Is $p \\wedge \\sim p$ a tautology? *Solution:* No — it is always false, a **contradiction**.`,
        },
        questions: [
          ["E", "The negation of a statement $p$ is written as", "$\\sim p$", "$p \\wedge p$", "$p \\vee p$", "$p \\Rightarrow p$", "It has the opposite truth value."],
          ["E", "The conjunction $p \\wedge q$ is true only when", "both $p$ and $q$ are true", "$p$ is true and $q$ is false", "both are false", "at least one is false", "'And' requires both parts to hold."],
          ["E", "A statement of the form 'if $p$ then $q$' is called", "an implication", "a conjunction", "a disjunction", "a negation", "It is also called a conditional statement."],
          ["M", "The disjunction $p \\vee q$ is false only when", "both $p$ and $q$ are false", "both are true", "$p$ is true and $q$ is false", "$p$ is false and $q$ is true", "'Or' needs at least one true part."],
          ["M", "The converse of $p \\Rightarrow q$ is", "$q \\Rightarrow p$", "$\\sim p \\Rightarrow \\sim q$", "$\\sim q \\Rightarrow \\sim p$", "$p \\wedge q$", "The two parts are interchanged."],
          ["M", "The contrapositive of $p \\Rightarrow q$ is", "$\\sim q \\Rightarrow \\sim p$", "$q \\Rightarrow p$", "$\\sim p \\Rightarrow \\sim q$", "$\\sim p \\vee q$", "Negate both parts and interchange them."],
          ["M", "The implication $p \\Rightarrow q$ is false when", "$p$ is true and $q$ is false", "$p$ is false and $q$ is true", "both are true", "both are false", "A true statement cannot imply a false one."],
          ["H", "The statement $\\sim (p \\wedge q)$ is logically equivalent to", "$\\sim p \\vee \\sim q$", "$\\sim p \\wedge \\sim q$", "$p \\vee q$", "$\\sim p \\Rightarrow q$", "This is one of De Morgan's laws."],
          ["H", "The statement $p \\vee \\sim p$ is", "a tautology", "a contradiction", "an implication", "false when $p$ is true", "It is true for every truth value of p."],
          ["H", "'If it rains, the ground is wet. The ground is not wet. Therefore it did not rain.' This argument is", "valid", "invalid", "a contradiction", "a converse error", "It uses the contrapositive (modus tollens)."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Vectors in a plane",
        subtopics: ["Scalars, vectors and vector notation", "Addition, subtraction and scalar multiplication", "Magnitude, unit vectors and direction", "Position vectors and parallel vectors"],
        objectives: ["Distinguish scalars from vectors and use vector notation", "Add, subtract and multiply vectors by scalars", "Find the magnitude and direction of a vector and unit vectors", "Use position vectors and test vectors for parallelism"],
        lesson: {
          title: "Two-Dimensional Vectors",
          summary: "Represent and combine vectors in component form.",
          minutes: 40,
          notes: `## Scalars and vectors
A **scalar** has magnitude only (mass, time, speed, temperature). A **vector** has **magnitude and direction** (displacement, velocity, force, acceleration).

## Notation
A vector is written $\\mathbf{a}$, $\\overrightarrow{AB}$ or in components:
$\\mathbf{a} = x\\mathbf{i} + y\\mathbf{j}$ or $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$
where $\\mathbf{i}$ and $\\mathbf{j}$ are unit vectors along the $x$- and $y$-axes.

## Magnitude
$|\\mathbf{a}| = \\sqrt{x^2 + y^2}$
*Example:* $|3\\mathbf{i} + 4\\mathbf{j}| = 5$.
If $\\mathbf{p} = 2\\mathbf{i} + k\\mathbf{j}$ and $|\\mathbf{p}| = \\sqrt{13}$, then $4 + k^2 = 13$ and $k = \\pm 3$.

## Direction
The angle $\\theta$ with the positive $x$-axis satisfies $\\tan \\theta = \\frac{y}{x}$ (check the quadrant).

## Operations
Add or subtract corresponding components:
$(2\\mathbf{i} + 3\\mathbf{j}) + (\\mathbf{i} - 5\\mathbf{j}) = 3\\mathbf{i} - 2\\mathbf{j}$
Multiply each component by a scalar: if $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j}$ then $3\\mathbf{a} = 6\\mathbf{i} - 3\\mathbf{j}$.
If $\\mathbf{a} = 3\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} - 2\\mathbf{j}$, then $2\\mathbf{a} - \\mathbf{b} = 5\\mathbf{i} + 4\\mathbf{j}$.

### Triangle and parallelogram laws
$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$. The sum of two or more vectors is their **resultant**.

## Unit vector
A vector of magnitude 1 in the direction of $\\mathbf{a}$:
$\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|}$
*Example:* for $6\\mathbf{i} + 8\\mathbf{j}$ (magnitude 10) it is $\\frac{1}{5}(3\\mathbf{i} + 4\\mathbf{j})$.

## Position vectors
The position vector of $A(x, y)$ is $\\overrightarrow{OA} = x\\mathbf{i} + y\\mathbf{j}$.
$\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}$
*Example:* $A(1, 2)$, $B(4, 6)$: $\\overrightarrow{AB} = 3\\mathbf{i} + 4\\mathbf{j}$.
The **midpoint** of $AB$ has position vector $\\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$: for $\\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j}$ and $\\mathbf{b} = 6\\mathbf{i} - 2\\mathbf{j}$ it is $4\\mathbf{i} + \\mathbf{j}$.

## Special vectors
- **zero vector** $\\mathbf{0}$: magnitude 0
- **equal vectors**: same magnitude and direction
- **negative vector** $-\\mathbf{a}$: same magnitude, opposite direction
- **parallel vectors**: $\\mathbf{b} = k\\mathbf{a}$ for some scalar $k$. $2\\mathbf{i} + 3\\mathbf{j}$ and $4\\mathbf{i} + 6\\mathbf{j}$ are parallel ($k = 2$)
Three points $A$, $B$, $C$ are **collinear** if $\\overrightarrow{AB} = k\\overrightarrow{BC}$.

## Resolving a vector
A vector of magnitude $r$ at angle $\\theta$ to the $x$-axis has components $r\\cos \\theta$ and $r\\sin \\theta$.`,
          examples: `**Example 1.** Find $|5\\mathbf{i} - 12\\mathbf{j}|$. *Solution:* $\\sqrt{25 + 144} = 13$.

**Example 2.** Given $\\mathbf{a} = 4\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{b} = -\\mathbf{i} + 3\\mathbf{j}$, find $\\mathbf{a} + 2\\mathbf{b}$. *Solution:* $2\\mathbf{i} + 7\\mathbf{j}$.

**Example 3.** $P(2, 1)$ and $Q(5, 7)$. Find $\\overrightarrow{PQ}$. *Solution:* $3\\mathbf{i} + 6\\mathbf{j}$.`,
        },
        questions: [
          ["E", "The magnitude of the vector $3\\mathbf{i} + 4\\mathbf{j}$ is", "5", "7", "25", "12", "The square root of 9 + 16."],
          ["E", "Simplify $(2\\mathbf{i} + 3\\mathbf{j}) + (\\mathbf{i} - 5\\mathbf{j})$.", "$3\\mathbf{i} - 2\\mathbf{j}$", "$3\\mathbf{i} + 8\\mathbf{j}$", "$\\mathbf{i} - 2\\mathbf{j}$", "$2\\mathbf{i} - 15\\mathbf{j}$", "Add the corresponding components."],
          ["E", "A quantity that has both magnitude and direction is a", "vector", "scalar", "constant", "coefficient", "Force and velocity are examples."],
          ["M", "If $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{j}$, then $3\\mathbf{a}$ is", "$6\\mathbf{i} - 3\\mathbf{j}$", "$6\\mathbf{i} - \\mathbf{j}$", "$5\\mathbf{i} - 4\\mathbf{j}$", "$2\\mathbf{i} - 3\\mathbf{j}$", "Multiply each component by 3."],
          ["M", "If $A$ is the point $(1, 2)$ and $B$ is $(4, 6)$, the vector $\\overrightarrow{AB}$ is", "$3\\mathbf{i} + 4\\mathbf{j}$", "$5\\mathbf{i} + 8\\mathbf{j}$", "$-3\\mathbf{i} - 4\\mathbf{j}$", "$4\\mathbf{i} + 3\\mathbf{j}$", "Subtract the position vector of A from that of B."],
          ["M", "The unit vector in the direction of $6\\mathbf{i} + 8\\mathbf{j}$ is", "$\\frac{1}{5}(3\\mathbf{i} + 4\\mathbf{j})$", "$\\frac{1}{10}(3\\mathbf{i} + 4\\mathbf{j})$", "$3\\mathbf{i} + 4\\mathbf{j}$", "$\\frac{1}{14}(6\\mathbf{i} + 8\\mathbf{j})$", "Divide the vector by its magnitude, 10."],
          ["M", "Given $\\mathbf{a} = 3\\mathbf{i} + \\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} - 2\\mathbf{j}$, the vector $2\\mathbf{a} - \\mathbf{b}$ is", "$5\\mathbf{i} + 4\\mathbf{j}$", "$5\\mathbf{i}$", "$7\\mathbf{i} + 4\\mathbf{j}$", "$2\\mathbf{i} + 3\\mathbf{j}$", "6i + 2j minus i − 2j."],
          ["H", "If $\\mathbf{p} = 2\\mathbf{i} + k\\mathbf{j}$ and $|\\mathbf{p}| = \\sqrt{13}$, the values of $k$ are", "$\\pm 3$", "$\\pm 9$", "$\\pm \\sqrt{11}$", "$\\pm 11$", "4 + k squared = 13."],
          ["H", "The vectors $2\\mathbf{i} + 3\\mathbf{j}$ and $4\\mathbf{i} + 6\\mathbf{j}$ are", "parallel", "perpendicular", "equal", "unit vectors", "One is a scalar multiple of the other."],
          ["H", "Points $A$ and $B$ have position vectors $2\\mathbf{i} + 4\\mathbf{j}$ and $6\\mathbf{i} - 2\\mathbf{j}$. The position vector of the midpoint of $AB$ is", "$4\\mathbf{i} + \\mathbf{j}$", "$8\\mathbf{i} + 2\\mathbf{j}$", "$2\\mathbf{i} - 3\\mathbf{j}$", "$4\\mathbf{i} + 3\\mathbf{j}$", "Half the sum of the two position vectors."],
        ],
      },
      {
        week: 2,
        title: "Measures of location and dispersion",
        subtopics: ["Mean, median and mode", "Grouped data and the assumed mean", "Range and mean deviation", "Variance and standard deviation"],
        objectives: ["Calculate the mean, median and mode", "Calculate the mean of grouped data", "Calculate the range and mean deviation", "Calculate the variance and standard deviation"],
        lesson: {
          title: "Describing Data",
          summary: "Calculate averages and measures of spread for sets of data.",
          minutes: 40,
          notes: `## Measures of location
### Mean
$\\bar{x} = \\frac{\\sum x}{n}$; for a frequency table $\\bar{x} = \\frac{\\sum fx}{\\sum f}$.
*Example:* the mean of 2, 4, 6, 8, 10 is $\\frac{30}{5} = 6$.
If the mean of 5 numbers is 8, their total is 40; if four of them are 6, 7, 9 and 10 (total 32), the fifth is 8.
### Median
The **middle value** when the data are arranged in order (the mean of the two middle values if $n$ is even). The median of 3, 7, 1, 9, 5 is 5.
### Mode
The value with the **highest frequency**. The mode of 2, 3, 3, 5, 7, 3 is 3.

## Grouped data
Use the **class mark** (mid-value) $x$ of each class: $\\bar{x} = \\frac{\\sum fx}{\\sum f}$.
### Assumed mean
$\\bar{x} = A + \\frac{\\sum fd}{\\sum f}$, where $d = x - A$.
### Median of grouped data
$\\text{Median} = L + \\left(\\frac{\\frac{N}{2} - F}{f}\\right)c$
with $L$ the lower class boundary of the median class, $F$ the cumulative frequency before it, $f$ its frequency and $c$ the class width. It may also be read from an **ogive**.
### Mode of grouped data
$\\text{Mode} = L + \\left(\\frac{d_1}{d_1 + d_2}\\right)c$, where $d_1$ and $d_2$ are the differences between the modal frequency and those of the classes before and after it.

## Quartiles and percentiles
$Q_1$, $Q_2$ (the median) and $Q_3$ divide the data into four equal parts. **Interquartile range** $= Q_3 - Q_1$; semi-interquartile range is half of this.

## Measures of dispersion
### Range
largest value − smallest value. For 4, 9, 2, 15, 7 it is $15 - 2 = 13$.
### Mean deviation
$\\text{M.D.} = \\frac{\\sum |x - \\bar{x}|}{n}$
*Example:* 1, 3, 5, 7, 9 has mean 5; the absolute deviations are 4, 2, 0, 2, 4, so M.D. $= \\frac{12}{5} = 2.4$.
### Variance
$\\sigma^2 = \\frac{\\sum (x - \\bar{x})^2}{n} = \\frac{\\sum x^2}{n} - \\bar{x}^2$
*Example:* 2, 4, 6, 8, 10 has mean 6; squared deviations 16, 4, 0, 4, 16 total 40, so the variance is 8.
### Standard deviation
$\\sigma = \\sqrt{\\text{variance}}$. A variance of 16 gives a standard deviation of 4.
*Example:* 3, 5, 7: mean 5; variance $\\frac{4 + 0 + 4}{3} = \\frac{8}{3}$; standard deviation $\\approx 1.63$.
For a frequency distribution: $\\sigma^2 = \\frac{\\sum f(x - \\bar{x})^2}{\\sum f}$.

## Effect of changing the data
- **adding** a constant $k$ to every value increases the mean by $k$ but leaves the range, variance and standard deviation **unchanged**
- **multiplying** every value by $k$ multiplies the mean and the standard deviation by $k$ and the variance by $k^2$

## Interpreting spread
A small standard deviation means the values are clustered close to the mean; a large one means they are widely scattered.`,
          examples: `**Example 1.** Find the mean and median of 4, 8, 6, 10, 2. *Solution:* mean $= 6$; in order 2, 4, 6, 8, 10 the median is 6.

**Example 2.** Find the variance of 1, 2, 3, 4, 5. *Solution:* mean 3; squared deviations 4, 1, 0, 1, 4; variance $= \\frac{10}{5} = 2$.

**Example 3.** A set of marks has standard deviation 5. Every mark is doubled. Find the new standard deviation. *Solution:* $2 \\times 5 = 10$.`,
        },
        questions: [
          ["E", "The mean of 2, 4, 6, 8 and 10 is", "6", "5", "30", "8", "The total, 30, divided by 5."],
          ["E", "The median of 3, 7, 1, 9 and 5 is", "5", "1", "7", "9", "Arranged in order, the middle value is 5."],
          ["E", "The mode of 2, 3, 3, 5, 7 and 3 is", "3", "5", "7", "2", "It occurs most often."],
          ["M", "The range of 4, 9, 2, 15 and 7 is", "13", "17", "11", "7", "Largest minus smallest."],
          ["M", "The variance of 2, 4, 6, 8 and 10 is", "8", "40", "6", "$\\sqrt{8}$", "The squared deviations total 40."],
          ["M", "A distribution has a variance of 16. Its standard deviation is", "4", "256", "8", "32", "The standard deviation is the square root of the variance."],
          ["M", "The mean deviation of 1, 3, 5, 7 and 9 is", "2.4", "12", "2", "5", "The absolute deviations total 12."],
          ["H", "The mean of five numbers is 8. Four of the numbers are 6, 7, 9 and 10. The fifth number is", "8", "40", "32", "6", "The total must be 40."],
          ["H", "The standard deviation of 3, 5 and 7, correct to two decimal places, is", "1.63", "2.67", "2.00", "1.33", "The variance is 8/3."],
          ["H", "If 3 is added to every value in a set of data, the standard deviation", "remains unchanged", "increases by 3", "is multiplied by 3", "increases by 9", "The spread of the values is not affected."],
        ],
      },
      {
        week: 3,
        title: "Permutations and combinations",
        subtopics: ["The counting principle and factorials", "Permutations", "Permutations with repeated objects and in a circle", "Combinations"],
        objectives: ["Apply the fundamental counting principle and factorial notation", "Calculate permutations", "Arrange objects with repetitions and in a circle", "Calculate combinations and solve selection problems"],
        lesson: {
          title: "Arrangements and Selections",
          summary: "Count arrangements and selections using permutations and combinations.",
          minutes: 40,
          notes: `## The counting principle
If one operation can be done in $m$ ways and a second in $n$ ways, the two together can be done in $m \\times n$ ways.

## Factorials
$n! = n(n - 1)(n - 2) \\dots 3 \\times 2 \\times 1$
$5! = 120$; $0! = 1$ (by definition).
$\\frac{8!}{6!} = 8 \\times 7 = 56$.

## Permutations
A **permutation** is an **arrangement** — order matters.
The number of arrangements of $r$ objects chosen from $n$ different objects is
$^{n}P_{r} = \\frac{n!}{(n - r)!}$
- $^{5}P_{2} = 5 \\times 4 = 20$
- 3 books chosen from 6 and arranged on a shelf: $^{6}P_{3} = 120$
- all $n$ objects: $n!$ — the letters of WORD can be arranged in $4! = 24$ ways

### With repeated objects
If $p$ are alike of one kind, $q$ alike of another, …:
$\\frac{n!}{p! \\, q! \\dots}$
The letters of LEVEL (two L's, two E's): $\\frac{5!}{2! \\, 2!} = 30$.

### In a circle
$n$ different objects can be arranged round a circle in $(n - 1)!$ ways. Five people round a table: $4! = 24$. (For a ring or necklace that can be turned over: $\\frac{(n - 1)!}{2}$.)

### With restrictions
- objects that must be **together** are tied into one unit, then arranged within the unit
- for objects that must **not** be together, subtract the "together" cases from the total

## Combinations
A **combination** is a **selection** — order does not matter.
$^{n}C_{r} = \\frac{n!}{r!(n - r)!}$
- $^{5}C_{2} = 10$
- a committee of 3 from 7 people: $^{7}C_{3} = 35$

### Properties
- $^{n}C_{r} = \\, ^{n}C_{n-r}$
- $^{n}C_{0} = \\, ^{n}C_{n} = 1$
- $^{n}P_{r} = r! \\times \\, ^{n}C_{r}$

### Selections from groups
Multiply the separate selections. A committee of 2 men and 2 women from 4 men and 5 women:
$^{4}C_{2} \\times \\, ^{5}C_{2} = 6 \\times 10 = 60$.
"At least" problems: add the separate cases, or subtract the unwanted cases from the total.

## Permutation or combination?
Ask: **does order matter?** Arranging, lining up, forming numbers or passwords — permutation. Choosing a team, committee or hand of cards — combination.`,
          examples: `**Example 1.** Evaluate $^{7}P_{2}$. *Solution:* $7 \\times 6 = 42$.

**Example 2.** In how many ways can a team of 4 be chosen from 6 players? *Solution:* $^{6}C_{4} = 15$.

**Example 3.** How many arrangements are there of the letters of the word BOOK? *Solution:* $\\frac{4!}{2!} = 12$.`,
        },
        questions: [
          ["E", "The value of $5!$ is", "120", "25", "20", "60", "5 × 4 × 3 × 2 × 1."],
          ["E", "Evaluate $^{5}P_{2}$.", "20", "10", "25", "60", "5 × 4. Answer: 20."],
          ["E", "Evaluate $^{5}C_{2}$.", "10", "20", "5", "7", "20 divided by 2 factorial."],
          ["M", "The number of ways of arranging the letters of the word WORD is", "24", "16", "12", "4", "Four different letters give 4 factorial."],
          ["M", "The number of ways of choosing a committee of 3 from 7 people is", "35", "210", "21", "343", "7 × 6 × 5 divided by 6."],
          ["M", "The number of ways in which 3 books chosen from 6 different books can be arranged on a shelf is", "120", "20", "18", "216", "6 × 5 × 4. Answer: 120."],
          ["M", "Evaluate $\\frac{8!}{6!}$.", "56", "48", "$\\frac{4}{3}$", "2", "8 × 7. Answer: 56."],
          ["H", "The number of different arrangements of the letters of the word LEVEL is", "30", "120", "60", "20", "5 factorial divided by 2! × 2!."],
          ["H", "A committee of 2 men and 2 women is to be chosen from 4 men and 5 women. The number of possible committees is", "60", "16", "126", "20", "6 ways for the men times 10 for the women."],
          ["H", "The number of ways in which 5 people can be seated round a circular table is", "24", "120", "5", "60", "(5 − 1) factorial."],
        ],
      },
      {
        week: 4,
        title: "Probability",
        subtopics: ["Sample space and events", "Addition law and mutually exclusive events", "Multiplication law and independent events", "Conditional probability and selection without replacement"],
        objectives: ["List sample spaces and find simple probabilities", "Apply the addition law", "Apply the multiplication law for independent events", "Find conditional probabilities and probabilities without replacement"],
        lesson: {
          title: "Measuring Chance",
          summary: "Calculate probabilities of single and combined events.",
          minutes: 40,
          notes: `## Basic ideas
- **experiment (trial)**: an action with uncertain result
- **sample space** $S$: the set of all possible outcomes
- **event**: a subset of the sample space
For equally likely outcomes:
$P(E) = \\frac{n(E)}{n(S)}$
with $0 \\le P(E) \\le 1$. $P = 0$ means impossible; $P = 1$ means certain.

*Examples:* a fair coin: $P(\\text{head}) = \\frac{1}{2}$. A fair die: $P(\\text{number greater than 4}) = \\frac{2}{6} = \\frac{1}{3}$. A bag with 3 red and 5 blue balls: $P(\\text{red}) = \\frac{3}{8}$.

## Complement
$P(E') = 1 - P(E)$. If $P(A) = 0.3$, then $P(A') = 0.7$.

## Addition law
$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
### Mutually exclusive events
Events that **cannot happen together**: $P(A \\cap B) = 0$, so
$P(A \\text{ or } B) = P(A) + P(B)$
With $P(A) = 0.2$ and $P(B) = 0.5$, $P(A \\text{ or } B) = 0.7$.

## Multiplication law
### Independent events
The occurrence of one does **not affect** the other:
$P(A \\text{ and } B) = P(A) \\times P(B)$
Two coins: $P(\\text{both heads}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. If $P(A) = \\frac{1}{2}$ and $P(B) = \\frac{1}{3}$, then $P(A \\cap B) = \\frac{1}{6}$.

### Two dice
There are 36 outcomes. A total of 7 arises from $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$: $P = \\frac{6}{36} = \\frac{1}{6}$.

## Conditional probability
The probability of $A$ **given that** $B$ has occurred:
$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$
If $P(A \\cap B) = 0.2$ and $P(B) = 0.4$, then $P(A \\mid B) = 0.5$.
For independent events $P(A \\mid B) = P(A)$.

## With and without replacement
A bag holds 4 red and 6 blue balls; two are drawn.
- **with replacement**: $P(\\text{both red}) = \\frac{4}{10} \\times \\frac{4}{10} = \\frac{4}{25}$
- **without replacement**: $P(\\text{both red}) = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{2}{15}$

## Tree diagrams
Multiply **along** the branches; add the results of the branches that give the required event.
*Example:* $P(\\text{one of each colour, without replacement}) = \\frac{4}{10} \\times \\frac{6}{9} + \\frac{6}{10} \\times \\frac{4}{9} = \\frac{8}{15}$.

## "At least one"
$P(\\text{at least one}) = 1 - P(\\text{none})$.
Three coins: $P(\\text{at least one head}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.

## Using combinations
Choosing 2 from 10 balls: $^{10}C_{2} = 45$ ways; both red: $^{4}C_{2} = 6$ ways; $P = \\frac{6}{45} = \\frac{2}{15}$.`,
          examples: `**Example 1.** A card is drawn from a pack of 52. Find the probability that it is an ace. *Solution:* $\\frac{4}{52} = \\frac{1}{13}$.

**Example 2.** $P(A) = 0.6$, $P(B) = 0.3$ and $A$, $B$ are independent. Find $P(A \\cap B)$. *Solution:* $0.18$.

**Example 3.** Two dice are thrown. Find the probability of a total of 11. *Solution:* $(5,6), (6,5)$: $\\frac{2}{36} = \\frac{1}{18}$.`,
        },
        questions: [
          ["E", "A fair coin is tossed once. The probability of obtaining a head is", "$\\frac{1}{2}$", "1", "$\\frac{1}{4}$", "2", "One favourable outcome out of two."],
          ["E", "A fair die is thrown once. The probability of obtaining a number greater than 4 is", "$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{1}{6}$", "$\\frac{1}{2}$", "Only 5 and 6 are favourable."],
          ["E", "If $P(A) = 0.3$, then $P(A')$ is", "0.7", "0.3", "1.3", "0.09", "The two probabilities add up to 1."],
          ["M", "A bag contains 3 red and 5 blue balls. The probability that a ball drawn at random is red is", "$\\frac{3}{8}$", "$\\frac{3}{5}$", "$\\frac{5}{8}$", "$\\frac{1}{3}$", "3 red balls out of 8."],
          ["M", "Two fair coins are tossed. The probability that both show heads is", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "1", "One-half times one-half."],
          ["M", "$A$ and $B$ are mutually exclusive events with $P(A) = 0.2$ and $P(B) = 0.5$. Then $P(A \\text{ or } B)$ is", "0.7", "0.1", "0.3", "0.6", "Add the probabilities."],
          ["M", "$A$ and $B$ are independent events with $P(A) = \\frac{1}{2}$ and $P(B) = \\frac{1}{3}$. Then $P(A \\text{ and } B)$ is", "$\\frac{1}{6}$", "$\\frac{5}{6}$", "$\\frac{2}{5}$", "$\\frac{1}{5}$", "Multiply the probabilities."],
          ["H", "Two fair dice are thrown together. The probability that the total score is 7 is", "$\\frac{1}{6}$", "$\\frac{7}{36}$", "$\\frac{1}{12}$", "$\\frac{1}{9}$", "Six of the 36 outcomes give a total of 7."],
          ["H", "A bag contains 4 red and 6 blue balls. Two balls are drawn without replacement. The probability that both are red is", "$\\frac{2}{15}$", "$\\frac{4}{25}$", "$\\frac{1}{5}$", "$\\frac{2}{5}$", "4/10 × 3/9. Answer: $\\frac{2}{15}$."],
          ["H", "If $P(A \\cap B) = 0.2$ and $P(B) = 0.4$, the conditional probability $P(A \\mid B)$ is", "0.5", "0.08", "0.6", "0.2", "Divide 0.2 by 0.4."],
        ],
      },
      {
        week: 5,
        title: "Kinematics of motion in a straight line",
        subtopics: ["Displacement, velocity and acceleration", "Equations of uniformly accelerated motion", "Motion graphs", "Vertical motion under gravity"],
        objectives: ["Define displacement, velocity and acceleration", "Apply the equations of uniformly accelerated motion", "Interpret displacement–time and velocity–time graphs", "Solve problems on vertical motion under gravity"],
        lesson: {
          title: "Motion with Constant Acceleration",
          summary: "Apply the equations of motion to bodies moving in a straight line.",
          minutes: 40,
          notes: `## Definitions
- **distance**: length of path (scalar); **displacement**: change of position in a given direction (vector)
- **speed** $= \\frac{\\text{distance}}{\\text{time}}$ (scalar); **velocity** $= \\frac{\\text{displacement}}{\\text{time}}$ (vector)
- **acceleration**: rate of change of velocity, $a = \\frac{v - u}{t}$, in m/s²; a negative acceleration is a **retardation**
- average speed $= \\frac{\\text{total distance}}{\\text{total time}}$
A runner covering 100 m in 20 s has an average speed of 5 m/s. A car going from 10 m/s to 30 m/s in 4 s accelerates at 5 m/s².

## Equations of uniformly accelerated motion
With initial velocity $u$, final velocity $v$, acceleration $a$, time $t$ and displacement $s$:
1. $v = u + at$
2. $s = ut + \\frac{1}{2}at^2$
3. $v^2 = u^2 + 2as$
4. $s = \\frac{1}{2}(u + v)t$
Choose the equation containing the three known quantities and the unknown.

### Worked examples
- from rest, $a = 2$ m/s², $t = 5$ s: $v = 0 + 2(5) = 10$ m/s
- from rest, $a = 4$ m/s², $t = 3$ s: $s = \\frac{1}{2}(4)(9) = 18$ m
- $u = 20$ m/s, brought to rest with $a = -5$ m/s²: $0 = 400 - 10s$, so $s = 40$ m

### Distance in the nth second
$s_n - s_{n-1}$, or $u + \\frac{1}{2}a(2n - 1)$.
With $u = 5$ m/s and $a = 2$ m/s², in the 4th second: $s_4 = 20 + 16 = 36$ m, $s_3 = 15 + 9 = 24$ m, so the distance is 12 m.

## Motion graphs
### Displacement–time graph
gradient = **velocity**. A straight line means uniform velocity; a horizontal line means rest.
### Velocity–time graph
- gradient = **acceleration**
- **area under the graph = displacement**
- a horizontal line means uniform velocity
*Example:* a car accelerates uniformly from rest to 20 m/s in 10 s, travels at that speed for 30 s and comes to rest in a further 5 s. The graph is a trapezium: distance $= \\frac{1}{2}(45 + 30)(20) = 750$ m.

## Vertical motion under gravity
A body falling freely has acceleration $g \\approx 10$ m/s² downwards (air resistance neglected).
- **falling from rest**: $v = gt$, $h = \\frac{1}{2}gt^2$, $v^2 = 2gh$
  A stone dropped from a height of 45 m: $45 = 5t^2$, so $t = 3$ s; it lands at $v = 30$ m/s
- **thrown vertically upwards** with speed $u$ (take $a = -g$):
  - at the highest point $v = 0$
  - time to the top: $t = \\frac{u}{g}$
  - maximum height: $H = \\frac{u^2}{2g}$
  - total time of flight: $\\frac{2u}{g}$; it returns with the speed of projection
  A ball thrown up at 20 m/s rises $\\frac{400}{20} = 20$ m, taking 2 s.

## Sign convention
Choose one direction as positive and keep to it; quantities in the opposite direction are negative.`,
          examples: `**Example 1.** A car starts from rest and accelerates at 3 m/s² for 6 s. Find its final velocity. *Solution:* $v = 0 + 3(6) = 18$ m/s.

**Example 2.** A body moving at 10 m/s accelerates at 2 m/s² over 75 m. Find its final speed. *Solution:* $v^2 = 100 + 300 = 400$, so $v = 20$ m/s.

**Example 3.** A stone is dropped from a cliff and takes 4 s to reach the ground. Find the height ($g = 10$ m/s²). *Solution:* $h = 5(16) = 80$ m.`,
        },
        questions: [
          ["E", "An athlete runs 100 m in 20 s. The average speed is", "5 m/s", "2000 m/s", "0.2 m/s", "80 m/s", "Distance divided by time."],
          ["E", "The rate of change of velocity is called", "acceleration", "speed", "displacement", "momentum", "It is measured in metres per second squared."],
          ["E", "The area under a velocity–time graph represents", "displacement", "acceleration", "speed", "force", "The gradient gives the acceleration."],
          ["M", "A body starts from rest and accelerates at 2 m/s² for 5 s. Its final velocity is", "10 m/s", "25 m/s", "7 m/s", "2.5 m/s", "v = u + at. Answer: 10 m/s."],
          ["M", "A body starts from rest with an acceleration of 4 m/s². The distance covered in 3 s is", "18 m", "12 m", "36 m", "6 m", "Half of 4 times 9."],
          ["M", "A car moving at 20 m/s is brought to rest with a uniform retardation of 5 m/s². The distance travelled while stopping is", "40 m", "80 m", "4 m", "100 m", "0 = 400 − 10s. Answer: 40 m."],
          ["M", "The velocity of a car increases uniformly from 10 m/s to 30 m/s in 4 s. Its acceleration is", "5 m/s²", "10 m/s²", "7.5 m/s²", "80 m/s²", "A change of 20 m/s in 4 s."],
          ["H", "A stone is dropped from a height of 45 m. Taking $g = 10$ m/s², the time it takes to reach the ground is", "3 s", "4.5 s", "9 s", "2 s", "45 = 5 × t squared."],
          ["H", "A ball is thrown vertically upwards with a speed of 20 m/s. Taking $g = 10$ m/s², the greatest height reached is", "20 m", "40 m", "10 m", "2 m", "u squared divided by 2g."],
          ["H", "A body has initial velocity 5 m/s and uniform acceleration 2 m/s². The distance it travels during the 4th second is", "12 m", "36 m", "24 m", "13 m", "The displacement after 4 s less that after 3 s."],
        ],
      },
    ],
  },
];
