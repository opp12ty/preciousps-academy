import type { TermPlan } from "../types";

/** SS1 Mathematics — original Precious PS content following the national Senior Secondary structure. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Operations in number bases",
        subtopics: ["Addition and subtraction in any base", "Multiplication and division in any base", "Finding an unknown base", "Binary fractions"],
        objectives: ["Add and subtract numbers in bases other than ten", "Multiply and divide numbers in a given base", "Find an unknown base from an equation", "Convert simple binary fractions to base ten"],
        lesson: {
          title: "Arithmetic in Number Bases",
          summary: "Carry out the four operations in any base and solve equations with unknown bases.",
          minutes: 45,
          notes: `## Working directly in base $b$
The digits are $0$ to $b - 1$. Whenever a column reaches $b$ or more, **carry** 1 for every complete group of $b$.
$23_4 + 31_4$: $3 + 1 = 4 = 1\\times 4 + 0$ → write 0, carry 1; $2 + 3 + 1 = 6 = 1\\times 4 + 2$ → write 2, carry 1. Answer: $120_4$.

## Subtraction
When you **borrow**, the borrowed 1 is worth $b$ in the column to its right.
$102_3 - 21_3 = 11_3$ (check in base ten: 11 − 7 = 4).

## Multiplication and division
The safest method is to **convert to base ten, calculate, then convert back**:
$24_5\\times 3_5 = 14\\times 3 = 42 = 1\\times 25 + 3\\times 5 + 2 = 132_5$
$1100_2\\div 11_2 = 12\\div 3 = 4 = 100_2$

## Unknown bases
Expand in terms of $x$ and solve: $31_x = 16_{10} \\Rightarrow 3x + 1 = 16 \\Rightarrow x = 5$. The base must be larger than every digit used.

## Binary fractions
Places after the point are worth $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\ldots$
$0.101_2 = \\frac{1}{2} + \\frac{1}{8} = \\frac{5}{8}$`,
          examples: `**Example 1.** $12_3\\times 2_3 = 5\\times 2 = 10 = 101_3$.

**Example 2.** $110_2\\times 101_2 = 6\\times 5 = 30 = 11110_2$.

**Example 3.** Find $x$ if $13_x = 10_{10}$. *Solution:* $x + 3 = 10$, so $x = 7$.`,
        },
        questions: [
          ["E", "Evaluate $23_4 + 31_4$.", "$120_4$", "$54_4$", "$112_4$", "$102_4$", "11 + 13 = 24 = 1 × 16 + 2 × 4 + 0 = 120₄."],
          ["E", "Convert $33_4$ to base ten.", "15", "12", "33", "7", "3 × 4 + 3 = 15."],
          ["M", "Evaluate $102_3 - 21_3$.", "$11_3$", "$12_3$", "$10_3$", "$111_3$", "102₃ = 11 and 21₃ = 7; 11 − 7 = 4 = 11₃."],
          ["M", "Evaluate $12_3\\times 2_3$.", "$101_3$", "$24_3$", "$110_3$", "$21_3$", "5 × 2 = 10 = 1 × 9 + 0 × 3 + 1 = 101₃."],
          ["M", "Evaluate $24_5\\times 3_5$.", "$132_5$", "$72_5$", "$123_5$", "$142_5$", "14 × 3 = 42 = 1 × 25 + 3 × 5 + 2."],
          ["M", "Find $x$ if $13_x = 10_{10}$.", "7", "10", "3", "13", "x + 3 = 10, so x = 7."],
          ["H", "Evaluate $110_2\\times 101_2$, giving your answer in base two.", "$11110_2$", "$11011_2$", "$10110_2$", "$11100_2$", "6 × 5 = 30 = 16 + 8 + 4 + 2 = 11110₂."],
          ["H", "Find $x$ if $31_x = 16_{10}$.", "5", "4", "6", "3", "3x + 1 = 16, so x = 5."],
          ["H", "Evaluate $1100_2\\div 11_2$.", "$100_2$", "$110_2$", "$11_2$", "$101_2$", "12 ÷ 3 = 4 = 100₂."],
          ["H", "Express $0.101_2$ as a fraction in base ten.", "$\\frac{5}{8}$", "$\\frac{1}{2}$", "$\\frac{3}{8}$", "$\\frac{101}{1000}$", "½ + 0 × ¼ + ⅛ = 5/8."],
        ],
      },
      {
        week: 2,
        title: "Modular arithmetic",
        subtopics: ["Meaning of modulo", "Addition, subtraction and multiplication in modulo n", "Solving simple congruences", "Applications: days, clocks and remainders"],
        objectives: ["Reduce a number to its value in modulo n", "Add, subtract and multiply in modular arithmetic", "Solve simple linear congruences", "Apply modular arithmetic to calendars and clocks"],
        lesson: {
          title: "Clock (Modular) Arithmetic",
          summary: "Work with remainders to solve problems about days, clocks and cycles.",
          minutes: 40,
          notes: `## Meaning
Arithmetic **modulo $n$** uses only the remainders $0, 1, 2, \\ldots, n - 1$. A number is replaced by its **remainder when divided by $n$**:
$17 \\equiv 2 \\pmod 5$ because $17 = 3\\times 5 + 2$.
The symbol $\\equiv$ is read "is congruent to".

## Operations
Calculate normally, then reduce the answer modulo $n$:
- $3 + 4 = 7 \\equiv 2 \\pmod 5$
- $4\\times 3 = 12 \\equiv 5 \\pmod 7$
- $2 - 5 = -3 \\equiv 3 \\pmod 6$ (add 6 to a negative result)

## Solving congruences
Try each value $0, 1, \\ldots, n - 1$:
$3x \\equiv 2 \\pmod 5$: $3\\times 4 = 12 \\equiv 2$, so $x = 4$.

## Applications
- **Days of the week** use modulo 7: 10 days after Monday is $10 \\equiv 3$ days after Monday → **Thursday**.
- **A 12-hour clock** uses modulo 12: 100 hours after 9 o'clock is $100 \\equiv 4$ hours later → **1 o'clock**.

## Large powers
Reduce as you go: $2^3 = 8 \\equiv 1 \\pmod 7$, so $2^{10} = (2^3)^3\\times 2 \\equiv 1\\times 2 = 2 \\pmod 7$.`,
          examples: `**Example 1.** Find $17 \\pmod 5$. *Answer:* 2.

**Example 2.** Solve $x + 3 \\equiv 1 \\pmod 5$. *Solution:* $x \\equiv 1 - 3 = -2 \\equiv 3$, so $x = 3$.

**Example 3.** Which day is 45 days after Friday? *Solution:* $45 \\equiv 3 \\pmod 7$; three days after Friday is **Monday**.`,
        },
        questions: [
          ["E", "What is $17 \\pmod 5$?", "2", "3", "1", "12", "17 = 3 × 5 + 2."],
          ["E", "Today is Monday. What day will it be 10 days from today?", "Thursday", "Wednesday", "Friday", "Tuesday", "10 ≡ 3 (mod 7): three days after Monday."],
          ["E", "Which numbers are used in arithmetic modulo 6?", "0 to 5", "1 to 6", "0 to 6", "1 to 5", "The possible remainders on division by 6 are 0 to 5."],
          ["M", "Evaluate $3 + 4 \\pmod 5$.", "2", "7", "1", "0", "3 + 4 = 7, and 7 = 1 × 5 + 2, so 7 ≡ 2 (mod 5)."],
          ["M", "Evaluate $4\\times 3 \\pmod 7$.", "5", "12", "1", "4", "12 = 1 × 7 + 5."],
          ["M", "Solve $x + 3 \\equiv 1 \\pmod 5$.", "$x = 3$", "$x = 4$", "$x = 2$", "$x = 1$", "3 + 3 = 6 ≡ 1 (mod 5)."],
          ["M", "Evaluate $2 - 5 \\pmod 6$.", "3", "1", "4", "5", "2 − 5 = −3, and −3 + 6 = 3."],
          ["H", "Solve $3x \\equiv 2 \\pmod 5$.", "$x = 4$", "$x = 2$", "$x = 3$", "$x = 1$", "3 × 4 = 12 ≡ 2 (mod 5)."],
          ["H", "What is the remainder when $2^{10}$ is divided by 7?", "2", "1", "4", "3", "2¹⁰ = 1,024 = 146 × 7 + 2."],
          ["H", "A 12-hour clock shows 9 o'clock. What time will it show 100 hours later?", "1 o'clock", "4 o'clock", "5 o'clock", "11 o'clock", "100 ≡ 4 (mod 12); 9 + 4 = 13 ≡ 1."],
        ],
      },
      {
        week: 3,
        title: "Indices and exponential equations",
        subtopics: ["Review of the laws of indices", "Negative and fractional indices", "Equations with the unknown as an index", "Simplifying complex index expressions"],
        objectives: ["Apply all the laws of indices accurately", "Evaluate negative and fractional powers of numbers and fractions", "Solve exponential equations by expressing both sides with the same base", "Simplify expressions involving several laws"],
        lesson: {
          title: "Indices and Exponential Equations",
          summary: "Use the laws of indices fluently and solve equations where the unknown is a power.",
          minutes: 45,
          notes: `## The laws (summary)
$a^m a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$, $a^0 = 1$, $a^{-n} = \\frac{1}{a^n}$, $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$

## Fractions and negative powers
A negative power **flips** a fraction: $\\left(\\frac{1}{2}\\right)^{-2} = 2^2 = 4$ and $\\left(\\frac{27}{8}\\right)^{-\\frac{2}{3}} = \\left(\\frac{8}{27}\\right)^{\\frac{2}{3}} = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.
Decimals: $0.25^{\\frac{1}{2}} = \\sqrt{0.25} = 0.5$.

## Exponential equations
Write both sides as powers of the **same prime base**, then **equate the indices**:
- $3^x = 81 = 3^4 \\Rightarrow x = 4$
- $4^x = 8 \\Rightarrow 2^{2x} = 2^3 \\Rightarrow x = \\frac{3}{2}$
- $9^{x-1} = 27^{x-2} \\Rightarrow 3^{2x-2} = 3^{3x-6} \\Rightarrow 2x - 2 = 3x - 6 \\Rightarrow x = 4$

## Strategy
1. Change every number to a power of 2, 3 or 5 (or 10).
2. Apply the laws to get a single power on each side.
3. Equate the powers and solve.`,
          examples: `**Example 1.** Evaluate $8^{\\frac{2}{3}}$. *Answer:* $(\\sqrt[3]{8})^2 = 2^2 = 4$.

**Example 2.** Solve $2^{x+1} = 16$. *Solution:* $2^{x+1} = 2^4$, so $x + 1 = 4$ and $x = 3$.

**Example 3.** Simplify $a^{\\frac{1}{2}}\\times a^{\\frac{3}{2}}$. *Answer:* $a^{2}$.`,
        },
        questions: [
          ["E", "Evaluate $8^{\\frac{2}{3}}$.", "4", "16", "2", "6", "∛8 = 2 and 2² = 4."],
          ["E", "Evaluate $\\left(\\frac{1}{2}\\right)^{-2}$.", "4", "−4", "$\\frac{1}{4}$", "$-\\frac{1}{4}$", "A negative power flips the fraction: 2² = 4."],
          ["E", "Evaluate $10^0 + 10^1$.", "11", "10", "1", "20", "10⁰ = 1 and 10¹ = 10, so the sum is 11."],
          ["M", "Solve $3^x = 81$.", "$x = 4$", "$x = 27$", "$x = 3$", "$x = 5$", "81 = 3⁴, so x = 4."],
          ["M", "Solve $2^{x+1} = 16$.", "$x = 3$", "$x = 4$", "$x = 7$", "$x = 8$", "16 = 2⁴, so x + 1 = 4."],
          ["M", "Simplify $a^{\\frac{1}{2}}\\times a^{\\frac{3}{2}}$.", "$a^2$", "$a^{\\frac{3}{4}}$", "$a$", "$a^3$", "Add the indices: ½ + 3/2 = 2, giving a²."],
          ["M", "Evaluate $(0.25)^{\\frac{1}{2}}$.", "0.5", "0.05", "0.125", "2", "A power of ½ means the square root: √0.25 = 0.5."],
          ["H", "Solve $4^x = 8$.", "$x = \\frac{3}{2}$", "$x = 2$", "$x = \\frac{2}{3}$", "$x = \\frac{1}{2}$", "2²ˣ = 2³, so 2x = 3."],
          ["H", "Solve $9^{x-1} = 27^{x-2}$.", "$x = 4$", "$x = 2$", "$x = 3$", "$x = -4$", "3^(2x − 2) = 3^(3x − 6), so 2x − 2 = 3x − 6."],
          ["H", "Evaluate $\\left(\\frac{27}{8}\\right)^{-\\frac{2}{3}}$.", "$\\frac{4}{9}$", "$\\frac{9}{4}$", "$\\frac{2}{3}$", "$-\\frac{9}{4}$", "Flip to (8/27)^(2/3) = (2/3)² = 4/9."],
        ],
      },
      {
        week: 4,
        title: "Logarithms",
        subtopics: ["Relationship between indices and logarithms", "Laws of logarithms", "Evaluating logarithms", "Solving logarithmic equations"],
        objectives: ["Convert between index form and logarithmic form", "State and apply the laws of logarithms", "Evaluate logarithmic expressions without tables", "Solve simple logarithmic equations"],
        lesson: {
          title: "Logarithms and Their Laws",
          summary: "Understand logarithms as indices and use their laws to simplify and solve.",
          minutes: 45,
          notes: `## Definition
A logarithm is an **index**:
$\\log_a N = x \\iff a^x = N$
$\\log_2 32 = 5$ because $2^5 = 32$; $\\log_{10} 1000 = 3$ because $10^3 = 1000$.
When no base is written, the base is 10: $\\log 100 = 2$.

## Special values
$\\log_a 1 = 0$ and $\\log_a a = 1$ for any valid base $a$.

## Laws
| Law | Example |
|---|---|
| $\\log_a (MN) = \\log_a M + \\log_a N$ | $\\log 2 + \\log 5 = \\log 10 = 1$ |
| $\\log_a \\frac{M}{N} = \\log_a M - \\log_a N$ | $\\log_3 81 - \\log_3 9 = \\log_3 9 = 2$ |
| $\\log_a M^k = k\\log_a M$ | $2\\log 5 = \\log 25$ |

## Using given values
With $\\log 2 = 0.3010$ and $\\log 3 = 0.4771$: $\\log 6 = \\log 2 + \\log 3 = 0.7781$.

## Solving equations
- $\\log_2 x = 5 \\Rightarrow x = 2^5 = 32$.
- $\\log(x + 3) + \\log x = 1 \\Rightarrow x(x + 3) = 10 \\Rightarrow x^2 + 3x - 10 = 0$, so $x = 2$ or $-5$.
**Reject** any value that makes a logarithm of a negative number or zero: only $x = 2$ is valid.`,
          examples: `**Example 1.** Write $2^5 = 32$ in logarithmic form. *Answer:* $\\log_2 32 = 5$.

**Example 2.** Evaluate $2\\log 5 + \\log 4$. *Solution:* $\\log 25 + \\log 4 = \\log 100 = 2$.

**Example 3.** Evaluate $\\log_2 8 + \\log_3 27$. *Answer:* $3 + 3 = 6$.`,
        },
        questions: [
          ["E", "Evaluate $\\log_{10} 1000$.", "3", "100", "30", "4", "log₁₀ 1000 = 3 because 10³ = 1,000."],
          ["E", "Evaluate $\\log_2 8$.", "3", "4", "16", "2", "2³ = 8, so log₂ 8 = 3."],
          ["E", "Write $2^5 = 32$ in logarithmic form.", "$\\log_2 32 = 5$", "$\\log_5 32 = 2$", "$\\log_{32} 2 = 5$", "$\\log_2 5 = 32$", "log (base) of the number = the index."],
          ["M", "Evaluate $\\log 2 + \\log 5$ (base 10).", "1", "$\\log 7$", "10", "7", "log 2 + log 5 = log 10 = 1."],
          ["M", "Evaluate $\\log_3 81 - \\log_3 9$.", "2", "4", "72", "9", "log₃(81 ÷ 9) = log₃ 9 = 2."],
          ["M", "Evaluate $2\\log_{10} 5 + \\log_{10} 4$.", "2", "1", "$\\log_{10} 14$", "3", "log 25 + log 4 = log 100 = 2."],
          ["M", "What is the value of $\\log_a 1$ for any valid base $a$?", "0", "1", "a", "It is undefined", "a⁰ = 1, so log_a 1 = 0."],
          ["H", "Solve $\\log_2 x = 5$.", "$x = 32$", "$x = 10$", "$x = 25$", "$x = 7$", "log₂ x = 5 means x = 2⁵ = 32."],
          ["H", "Solve $\\log(x + 3) + \\log x = 1$ (base 10).", "$x = 2$", "$x = -5$", "$x = 2$ or $x = -5$", "$x = 5$", "x(x + 3) = 10 gives x = 2 or −5; log of a negative number is undefined, so x = 2."],
          ["H", "Given $\\log 2 = 0.3010$ and $\\log 3 = 0.4771$, find $\\log 6$.", "0.7781", "0.1436", "0.1761", "0.6020", "log 6 = log 2 + log 3."],
        ],
      },
      {
        week: 5,
        title: "Sets",
        subtopics: ["Set notation and types of sets", "Subsets and the power set", "Union, intersection and complement", "Number of elements in a union"],
        objectives: ["Describe sets using listing and set-builder notation", "Identify empty, finite, infinite and universal sets", "Find unions, intersections and complements", "Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B)"],
        lesson: {
          title: "Sets and Set Operations",
          summary: "Describe collections precisely and combine them using union, intersection and complement.",
          minutes: 40,
          notes: `## Describing sets
A **set** is a well-defined collection of objects called **elements**.
- Listing: $A = \\{2, 3, 5, 7, 11\\}$
- Set-builder notation: $A = \\{x : x \\text{ is a prime number less than } 12\\}$
- $n(A)$ is the **number of elements**: here $n(A) = 5$.

## Types of sets
- **Empty set** $\\emptyset$ or $\\{\\}$: no elements.
- **Finite** or **infinite** sets (the multiples of 3 form an infinite set).
- The **universal set** $U$ contains all elements under discussion.

## Subsets
$A\\subseteq B$ means every element of $A$ is in $B$. A set with $n$ elements has $2^n$ subsets: $\\{a, b, c\\}$ has 8.

## Operations
- **Union** $A\\cup B$: elements in $A$ **or** $B$ (or both).
- **Intersection** $A\\cap B$: elements in **both**.
- **Complement** $A'$: elements of $U$ **not** in $A$.
If $A\\subseteq B$ then $A\\cap B = A$.

## Counting
$n(A\\cup B) = n(A) + n(B) - n(A\\cap B)$
The overlap is subtracted because it was counted twice.`,
          examples: `**Example 1.** $A = \\{1, 2, 3\\}$ and $B = \\{2, 3, 4\\}$: $A\\cap B = \\{2, 3\\}$ and $A\\cup B = \\{1, 2, 3, 4\\}$.

**Example 2.** $U = \\{1, 2, \\ldots, 10\\}$ and $A$ = even numbers: $A' = \\{1, 3, 5, 7, 9\\}$.

**Example 3.** $n(A) = 12$, $n(B) = 9$, $n(A\\cap B) = 4$: $n(A\\cup B) = 12 + 9 - 4 = 17$.`,
        },
        questions: [
          ["E", "If $A = \\{1, 2, 3\\}$ and $B = \\{2, 3, 4\\}$, find $A\\cap B$.", "$\\{2, 3\\}$", "$\\{1, 2, 3, 4\\}$", "$\\{1, 4\\}$", "$\\{2\\}$", "The intersection contains the elements common to both sets."],
          ["E", "If $A = \\{1, 2, 3\\}$ and $B = \\{2, 3, 4\\}$, find $A\\cup B$.", "$\\{1, 2, 3, 4\\}$", "$\\{2, 3\\}$", "$\\{1, 4\\}$", "$\\{1, 2, 2, 3, 3, 4\\}$", "The union contains every element in either set, each listed once."],
          ["E", "A set with no elements is called", "the empty set", "the universal set", "a subset", "an infinite set", "It is written ∅ or { }."],
          ["M", "If $A = \\{x : x$ is a prime number less than 12$\\}$, find $n(A)$.", "5", "4", "6", "12", "A = {2, 3, 5, 7, 11}."],
          ["M", "$U = \\{1, 2, \\ldots, 10\\}$ and $A$ is the set of even numbers in $U$. Find $A'$.", "$\\{1, 3, 5, 7, 9\\}$", "$\\{2, 4, 6, 8, 10\\}$", "$\\{1, 2, \\ldots, 10\\}$", "$\\emptyset$", "The complement contains the elements of U not in A."],
          ["M", "How many subsets does $\\{a, b, c\\}$ have?", "8", "6", "3", "9", "A set with n elements has 2ⁿ subsets: 2³ = 8."],
          ["M", "If $A\\subseteq B$, then $A\\cap B$ equals", "A", "B", "∅", "$A\\cup B$", "Every element of A is already in B."],
          ["H", "$n(A) = 12$, $n(B) = 9$ and $n(A\\cap B) = 4$. Find $n(A\\cup B)$.", "17", "21", "25", "13", "12 + 9 − 4 = 17."],
          ["H", "Which of these sets is infinite?", "The set of multiples of 3", "The set of days of the week", "The set of letters of the English alphabet", "The set of factors of 100", "Multiples of 3 go on for ever."],
          ["H", "List the set $\\{x : 2 < x \\le 6, x$ an integer$\\}$.", "$\\{3, 4, 5, 6\\}$", "$\\{2, 3, 4, 5, 6\\}$", "$\\{3, 4, 5\\}$", "$\\{2, 3, 4, 5\\}$", "2 is excluded and 6 is included."],
        ],
      },
      {
        week: 6,
        title: "Venn diagrams and problem solving",
        subtopics: ["Representing sets in Venn diagrams", "Two-set problems", "Three-set problems", "Describing shaded regions"],
        objectives: ["Represent set relationships in Venn diagrams", "Solve word problems involving two sets", "Solve word problems involving three sets", "Describe shaded regions using set notation"],
        lesson: {
          title: "Solving Problems with Venn Diagrams",
          summary: "Fill in Venn diagrams systematically to answer counting problems.",
          minutes: 45,
          notes: `## Venn diagrams
The **rectangle** represents the universal set $U$; **circles** represent the sets inside it. Overlapping regions show intersections. The complement of the universal set is the empty set.

## Two-set problems — work from the middle outwards
1. Put $n(A\\cap B)$ in the overlap.
2. "A only" $= n(A) - n(A\\cap B)$; "B only" $= n(B) - n(A\\cap B)$.
3. "Neither" $= n(U) - n(A\\cup B)$.
40 students: 25 like Maths, 20 like English, 10 like both.
Maths only 15, English only 10, both 10, so $n(M\\cup E) = 35$ and 5 like neither.

## Three-set problems
$n(A\\cup B\\cup C) = n(A) + n(B) + n(C) - n(A\\cap B) - n(A\\cap C) - n(B\\cap C) + n(A\\cap B\\cap C)$
Again start with the **centre** (all three), then the pairs, then the "only" regions.

## Describing regions
- $A\\cap B'$: in A but not in B.
- $(A\\cup B)'$: in neither A nor B.
- $A'\\cap B$: in B only.`,
          examples: `**Example 1.** 18 play football, 12 play volleyball, 5 play both and 3 play neither. *Class size:* $18 + 12 - 5 + 3 = 28$.

**Example 2.** $n(U) = 50$, $n(A) = 30$, $n(B) = 25$ and 5 are in neither. *Then* $n(A\\cup B) = 45$ and $n(A\\cap B) = 30 + 25 - 45 = 10$.

**Example 3.** 100 people: 50 read A, 40 read B, 30 read C; 15 read A and B, 10 A and C, 8 B and C; 5 read all three. *At least one:* $120 - 33 + 5 = 92$; *none:* 8.`,
        },
        questions: [
          ["E", "In a Venn diagram, the rectangle represents", "the universal set", "the empty set", "the intersection", "the complement of A", "All other sets are drawn inside it."],
          ["E", "The complement of the universal set is", "the empty set", "the universal set", "a subset of A", "the number 1", "Nothing lies outside the universal set."],
          ["M", "In a class of 40, 25 like Maths, 20 like English and 10 like both. How many like neither?", "5", "10", "0", "15", "n(M ∪ E) = 25 + 20 − 10 = 35; 40 − 35 = 5."],
          ["M", "In a class of 40, 25 like Maths, 20 like English and 10 like both. How many like Maths only?", "15", "25", "10", "5", "Maths only = all who like Maths − those who like both = 25 − 10 = 15."],
          ["M", "$n(U) = 50$, $n(A) = 30$, $n(B) = 25$ and 5 elements are in neither set. Find $n(A\\cap B)$.", "10", "5", "15", "20", "n(A ∪ B) = 45, so 30 + 25 − 45 = 10."],
          ["M", "In a class, 18 play football, 12 play volleyball, 5 play both and 3 play neither. How many students are in the class?", "28", "30", "35", "25", "18 + 12 − 5 + 3 = 28."],
          ["M", "The region $A\\cap B'$ contains elements that are", "in A but not in B", "in B but not in A", "in both A and B", "in neither A nor B", "B′ means 'not in B'."],
          ["H", "Of 100 people, 50 read paper A, 40 read B and 30 read C; 15 read A and B, 10 read A and C, 8 read B and C, and 5 read all three. How many read at least one paper?", "92", "100", "87", "97", "50 + 40 + 30 − 15 − 10 − 8 + 5 = 92."],
          ["H", "Of 100 people, 50 read paper A, 40 read B and 30 read C; 15 read A and B, 10 read A and C, 8 read B and C, and 5 read all three. How many read none of the papers?", "8", "13", "0", "5", "92 read at least one, so 100 − 92 = 8 read none."],
          ["H", "$n(A\\cup B) = 30$, $n(A) = 18$ and $n(B) = 20$. Find $n(A\\cap B)$.", "8", "2", "12", "38", "18 + 20 − 30 = 8."],
        ],
      },
      {
        week: 7,
        title: "Approximation and errors",
        subtopics: ["Significant figures and decimal places", "Limits of accuracy (bounds)", "Absolute and percentage error", "Estimation"],
        objectives: ["Round numbers to given significant figures and decimal places", "Find upper and lower bounds of measurements", "Calculate absolute and percentage errors", "Estimate the results of calculations"],
        lesson: {
          title: "Accuracy, Bounds and Errors",
          summary: "Round sensibly, find the limits of measurements and measure errors as percentages.",
          minutes: 40,
          notes: `## Rounding
- To **significant figures**, start counting at the first non-zero digit: 0.004 567 8 to 3 s.f. = 0.004 57.
- To **decimal places**, count digits after the point: 3.14159 to 2 d.p. = 3.14.

## Limits of accuracy
A measurement rounded to the nearest unit could be up to **half a unit** above or below:
- 12 (to the nearest whole number) lies between **11.5** and **12.5**.
- 8.5 cm (to the nearest 0.1 cm) lies between **8.45 cm** and **8.55 cm**.
When combining measurements, use the bounds: a square with side 10 cm (nearest cm) has least possible area $9.5^2 = 90.25$ cm².

## Errors
- **Absolute error** = |approximate value − true value|.
- **Percentage error** = $\\frac{\\text{absolute error}}{\\text{true value}}\\times 100\\%$.
A 5 cm line measured as 5.2 cm has absolute error 0.2 cm and percentage error $\\frac{0.2}{5}\\times 100\\% = 4\\%$.

## Estimation
Round each number to 1 significant figure and work mentally:
$\\frac{4.98\\times 20.3}{9.87}\\approx\\frac{5\\times 20}{10} = 10$`,
          examples: `**Example 1.** Round 6,475 to 2 s.f. *Answer:* 6,500.

**Example 2.** A student uses 50 for 48. *Percentage error:* $\\frac{2}{48}\\times 100\\% \\approx 4.17\\%$.

**Example 3.** 9.8 is used instead of 10. *Absolute error:* 0.2.`,
        },
        questions: [
          ["E", "Round 3.141 59 to 3 significant figures.", "3.14", "3.141", "3.142", "3.1", "The fourth significant figure is 1, so round down."],
          ["E", "What is the absolute error when 9.8 is used instead of 10?", "0.2", "2", "0.02", "9.8", "|9.8 − 10| = 0.2."],
          ["M", "A line of true length 5 cm is measured as 5.2 cm. What is the percentage error?", "4%", "3.85%", "2%", "0.2%", "0.2 ÷ 5 × 100% = 4%."],
          ["M", "Round 0.004 567 8 to 3 significant figures.", "0.004 57", "0.0046", "0.004 56", "0.004 568", "The significant figures are 4, 5, 6, (7); round the 6 up."],
          ["M", "Round 6,475 to 2 significant figures.", "6,500", "6,400", "65", "6,480", "The third figure is 7, so 64 rounds up to 65 hundreds."],
          ["M", "A number rounded to the nearest whole number is 12. What is its least possible value?", "11.5", "11", "11.9", "12.5", "Numbers from 11.5 up to (but not including) 12.5 round to 12."],
          ["M", "Estimate $\\frac{4.98\\times 20.3}{9.87}$ by rounding each number to one significant figure.", "10", "100", "1", "20", "5 × 20 ÷ 10 = 10."],
          ["H", "A student approximates 48 as 50. What is the percentage error, to 2 decimal places?", "4.17%", "4%", "2%", "50%", "2 ÷ 48 × 100% ≈ 4.17% (divide by the true value)."],
          ["H", "A length is 8.5 cm, correct to the nearest 0.1 cm. What is its upper bound?", "8.55 cm", "8.6 cm", "8.59 cm", "8.51 cm", "Half of 0.1 cm is 0.05 cm."],
          ["H", "The side of a square is 10 cm, correct to the nearest centimetre. What is the least possible area?", "90.25 cm²", "81 cm²", "90 cm²", "100 cm²", "Least side = 9.5 cm; 9.5² = 90.25 cm²."],
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
        title: "Quadratic equations by factorisation",
        subtopics: ["The zero-product principle", "Solving by factorisation", "Equations that must be rearranged first", "Forming a quadratic equation from its roots"],
        objectives: ["Explain why if ab = 0 then a = 0 or b = 0", "Solve quadratic equations by factorisation", "Rearrange equations into the form ax² + bx + c = 0 before solving", "Form a quadratic equation given its roots"],
        lesson: {
          title: "Solving Quadratics by Factorising",
          summary: "Use the zero-product principle to solve quadratic equations and build equations from roots.",
          minutes: 45,
          notes: `## The zero-product principle
If $A\\times B = 0$, then $A = 0$ or $B = 0$. So if $(x - 2)(x - 3) = 0$, then $x = 2$ or $x = 3$. These values are the **roots** of the equation.

## Method
1. Rearrange so that **one side is 0**: $ax^2 + bx + c = 0$.
2. Factorise the quadratic expression.
3. Set each factor equal to zero and solve.

## Watch out
- $x^2 = 16$ has **two** roots: $x = \\pm 4$.
- Never divide both sides by $x$: in $3x^2 = 12x$ that would lose the root $x = 0$. Instead write $3x^2 - 12x = 0$, i.e. $3x(x - 4) = 0$, so $x = 0$ or $4$.
- $(x - 1)(x + 2) = 4$ is **not** solved by setting each bracket equal to 4. Expand and rearrange: $x^2 + x - 6 = 0$, so $x = -3$ or $2$.

## Forming an equation from roots
If the roots are $\\alpha$ and $\\beta$, the equation is $(x - \\alpha)(x - \\beta) = 0$:
roots 2 and −5 give $(x - 2)(x + 5) = 0$, i.e. $x^2 + 3x - 10 = 0$.`,
          examples: `**Example 1.** Solve $x^2 + x - 12 = 0$. *Solution:* $(x + 4)(x - 3) = 0$, so $x = -4$ or $3$.

**Example 2.** Solve $2x^2 - 7x + 3 = 0$. *Solution:* $(2x - 1)(x - 3) = 0$, so $x = \\frac{1}{2}$ or $3$.

**Example 3.** Solve $6x^2 + x - 2 = 0$. *Solution:* $(3x + 2)(2x - 1) = 0$, so $x = -\\frac{2}{3}$ or $\\frac{1}{2}$.`,
        },
        questions: [
          ["E", "Solve $x^2 - 5x + 6 = 0$.", "$x = 2$ or $x = 3$", "$x = -2$ or $x = -3$", "$x = 1$ or $x = 6$", "$x = -1$ or $x = -6$", "(x − 2)(x − 3) = 0."],
          ["E", "Solve $x^2 = 16$.", "$x = \\pm 4$", "$x = 4$ only", "$x = \\pm 8$", "$x = 16$", "Both 4² and (−4)² equal 16."],
          ["E", "Solve $x(x - 7) = 0$.", "$x = 0$ or $x = 7$", "$x = 7$ only", "$x = 0$ or $x = -7$", "$x = 1$ or $x = 7$", "Either x = 0 or x − 7 = 0."],
          ["M", "Solve $x^2 + x - 12 = 0$.", "$x = -4$ or $x = 3$", "$x = 4$ or $x = -3$", "$x = 4$ or $x = 3$", "$x = -4$ or $x = -3$", "(x + 4)(x − 3) = 0."],
          ["M", "Solve $2x^2 - 7x + 3 = 0$.", "$x = \\frac{1}{2}$ or $x = 3$", "$x = -\\frac{1}{2}$ or $x = -3$", "$x = 2$ or $x = 3$", "$x = \\frac{1}{2}$ or $x = -3$", "(2x − 1)(x − 3) = 0."],
          ["M", "Solve $x^2 - 9x = 0$.", "$x = 0$ or $x = 9$", "$x = 3$", "$x = \\pm 3$", "$x = 9$ only", "Factorise: x(x − 9) = 0, so x = 0 or x = 9."],
          ["M", "Which equation has roots 2 and −5?", "$x^2 + 3x - 10 = 0$", "$x^2 - 3x - 10 = 0$", "$x^2 + 3x + 10 = 0$", "$x^2 - 7x + 10 = 0$", "(x − 2)(x + 5) = x² + 3x − 10."],
          ["H", "Solve $3x^2 = 12x$.", "$x = 0$ or $x = 4$", "$x = 4$ only", "$x = 0$ or $x = -4$", "$x = \\pm 2$", "3x² − 12x = 0 gives 3x(x − 4) = 0; dividing by x would lose x = 0."],
          ["H", "Solve $(x - 1)(x + 2) = 4$.", "$x = -3$ or $x = 2$", "$x = 1$ or $x = -2$", "$x = 3$ or $x = -2$", "$x = 5$ or $x = -2$", "x² + x − 2 = 4 gives x² + x − 6 = 0 = (x + 3)(x − 2)."],
          ["H", "Solve $6x^2 + x - 2 = 0$.", "$x = -\\frac{2}{3}$ or $x = \\frac{1}{2}$", "$x = \\frac{2}{3}$ or $x = -\\frac{1}{2}$", "$x = -2$ or $x = 1$", "$x = \\frac{2}{3}$ or $x = \\frac{1}{2}$", "(3x + 2)(2x − 1) = 0."],
        ],
      },
      {
        week: 2,
        title: "Completing the square",
        subtopics: ["Perfect squares", "Writing quadratics in completed-square form", "Solving equations by completing the square", "Minimum values of quadratics"],
        objectives: ["Find the number needed to complete a square", "Write x² + bx + c in the form (x + p)² + q", "Solve quadratic equations by completing the square", "Use the completed-square form to find minimum values"],
        lesson: {
          title: "Completing the Square",
          summary: "Rewrite quadratics as a perfect square plus a constant to solve them and find their minimum values.",
          minutes: 45,
          notes: `## The key idea
$(x + p)^2 = x^2 + 2px + p^2$. So to complete $x^2 + bx$ into a perfect square, add $\\left(\\frac{b}{2}\\right)^2$:
$x^2 + 6x + 9 = (x + 3)^2$

## Completed-square form
$x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2 + c$
$x^2 + 4x + 1 = (x + 2)^2 - 4 + 1 = (x + 2)^2 - 3$
When the coefficient of $x^2$ is not 1, take it out first:
$2x^2 + 8x + 3 = 2(x^2 + 4x) + 3 = 2[(x + 2)^2 - 4] + 3 = 2(x + 2)^2 - 5$

## Solving equations
1. Make the coefficient of $x^2$ equal to 1.
2. Move the constant to the right-hand side.
3. Add $\\left(\\frac{b}{2}\\right)^2$ to **both** sides.
4. Take square roots (remember **±**) and solve.
$x^2 - 2x - 1 = 0 \\Rightarrow (x - 1)^2 = 2 \\Rightarrow x = 1\\pm\\sqrt{2}$

## Minimum value
Since a square is never negative, $(x - 2)^2 + 3$ has a **minimum value of 3**, when $x = 2$.`,
          examples: `**Example 1.** Solve $x^2 + 6x + 5 = 0$. *Solution:* $(x + 3)^2 = 4$, so $x + 3 = \\pm 2$ and $x = -1$ or $-5$.

**Example 2.** Solve $(x - 3)^2 = 25$. *Solution:* $x - 3 = \\pm 5$, so $x = 8$ or $-2$.

**Example 3.** For which positive $k$ is $x^2 + kx + 16$ a perfect square? *Answer:* $\\left(\\frac{k}{2}\\right)^2 = 16$, so $k = 8$.`,
        },
        questions: [
          ["E", "What number must be added to $x^2 + 6x$ to make a perfect square?", "9", "36", "3", "6", "Halve the coefficient of x and square it: (6 ÷ 2)² = 9."],
          ["E", "Write $x^2 - 10x + 25$ as a perfect square.", "$(x - 5)^2$", "$(x + 5)^2$", "$(x - 25)^2$", "$(x - 10)^2$", "(x − 5)² = x² − 10x + 25."],
          ["E", "Expand $(x + 3)^2$.", "$x^2 + 6x + 9$", "$x^2 + 9$", "$x^2 + 3x + 9$", "$x^2 + 6x + 6$", "(x + 3)(x + 3) = x² + 6x + 9."],
          ["M", "Write $x^2 + 4x + 1$ in the form $(x + p)^2 + q$.", "$(x + 2)^2 - 3$", "$(x + 2)^2 + 1$", "$(x + 4)^2 - 15$", "$(x + 2)^2 - 5$", "(x + 2)² = x² + 4x + 4, so subtract 3."],
          ["M", "Solve $x^2 + 6x + 5 = 0$ by completing the square.", "$x = -1$ or $x = -5$", "$x = 1$ or $x = 5$", "$x = -1$ or $x = 5$", "$x = 1$ or $x = -5$", "(x + 3)² = 4, so x + 3 = ±2."],
          ["M", "What is the minimum value of $x^2 - 4x + 7$?", "3", "7", "2", "−3", "x² − 4x + 7 = (x − 2)² + 3, and the square is never negative."],
          ["M", "Solve $(x - 3)^2 = 25$.", "$x = 8$ or $x = -2$", "$x = 8$ only", "$x = 28$ or $x = -22$", "$x = 2$ or $x = -8$", "Take square roots: x − 3 = ±5, so x = 8 or x = −2."],
          ["H", "Solve $x^2 - 2x - 1 = 0$, leaving your answer in surd form.", "$x = 1\\pm\\sqrt{2}$", "$x = -1\\pm\\sqrt{2}$", "$x = 1\\pm\\sqrt{3}$", "$x = 2\\pm\\sqrt{2}$", "x² − 2x = 1, so (x − 1)² = 2 and x − 1 = ±√2."],
          ["H", "Write $2x^2 + 8x + 3$ in the form $a(x + p)^2 + q$.", "$2(x + 2)^2 - 5$", "$2(x + 2)^2 + 3$", "$2(x + 4)^2 - 29$", "$2(x - 2)^2 - 5$", "2(x² + 4x) + 3 = 2[(x + 2)² − 4] + 3 = 2(x + 2)² − 5."],
          ["H", "For what positive value of $k$ is $x^2 + kx + 16$ a perfect square?", "8", "4", "16", "32", "(k/2)² = 16 gives k/2 = 4."],
        ],
      },
      {
        week: 3,
        title: "The quadratic formula",
        subtopics: ["Deriving the formula", "Using the formula", "The discriminant and the nature of roots", "Sum and product of roots"],
        objectives: ["State the quadratic formula", "Solve quadratic equations using the formula, giving answers to a stated accuracy", "Use the discriminant to describe the nature of the roots", "Find the sum and product of roots from the coefficients"],
        lesson: {
          title: "The Quadratic Formula and the Discriminant",
          summary: "Solve any quadratic equation with the formula and predict the type of roots using the discriminant.",
          minutes: 45,
          notes: `## The formula
For $ax^2 + bx + c = 0$ (with $a\\ne 0$):
$x = \\frac{-b\\pm\\sqrt{b^2 - 4ac}}{2a}$
It comes from completing the square on $ax^2 + bx + c = 0$.

## Using it
1. Write the equation in the form $ax^2 + bx + c = 0$ and identify $a$, $b$, $c$ **with their signs**. In $2x^2 - 3x + 1 = 0$, $b = -3$.
2. Substitute carefully, using brackets for negative values.
3. Work out both roots and round as instructed.
$x^2 - 2x - 4 = 0$: $x = \\frac{2\\pm\\sqrt{4 + 16}}{2} = 1\\pm\\sqrt{5}$, so $x \\approx 3.24$ or $-1.24$.

## The discriminant $D = b^2 - 4ac$
| $D$ | Roots |
|---|---|
| $D > 0$ | two distinct real roots |
| $D = 0$ | two equal (repeated) roots |
| $D < 0$ | no real roots |
A quadratic equation has **at most two** real roots.

## Sum and product of roots
If the roots are $\\alpha$ and $\\beta$: $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$.`,
          examples: `**Example 1.** Discriminant of $2x^2 + 3x - 5$: $9 + 40 = 49 > 0$, so two distinct roots.

**Example 2.** Solve $3x^2 + 5x - 1 = 0$ to 2 d.p. *Solution:* $x = \\frac{-5\\pm\\sqrt{37}}{6}$, giving $x \\approx 0.18$ or $-1.85$.

**Example 3.** Find positive $k$ so that $x^2 + kx + 9 = 0$ has equal roots. *Solution:* $k^2 - 36 = 0$, so $k = 6$.`,
        },
        questions: [
          ["E", "Which is the quadratic formula for $ax^2 + bx + c = 0$?", "$x = \\frac{-b\\pm\\sqrt{b^2 - 4ac}}{2a}$", "$x = \\frac{b\\pm\\sqrt{b^2 - 4ac}}{2a}$", "$x = \\frac{-b\\pm\\sqrt{b^2 + 4ac}}{2a}$", "$x = \\frac{-b\\pm\\sqrt{b - 4ac}}{a}$", "This comes from completing the square."],
          ["E", "In the equation $2x^2 - 3x + 1 = 0$, what is the value of $b$?", "−3", "3", "2", "1", "b is the coefficient of x, including its sign."],
          ["E", "At most how many real roots can a quadratic equation have?", "Two", "Three", "One", "Infinitely many", "A quadratic has at most two real roots."],
          ["M", "Find the discriminant of $x^2 - 4x + 4$.", "0", "16", "8", "32", "b² − 4ac = 16 − 16 = 0."],
          ["M", "If $b^2 - 4ac < 0$, the quadratic equation has", "no real roots", "two equal roots", "two distinct real roots", "one root equal to zero", "The square root of a negative number is not real."],
          ["M", "Solve $x^2 - 2x - 4 = 0$, giving your answers to 2 decimal places.", "3.24 or −1.24", "−3.24 or 1.24", "2.24 or −2.24", "3.24 or 1.24", "x = 1 ± √5 ≈ 1 ± 2.236."],
          ["M", "Find the discriminant of $2x^2 + 3x - 5$.", "49", "−31", "31", "1", "3² − 4(2)(−5) = 9 + 40 = 49."],
          ["H", "Solve $3x^2 + 5x - 1 = 0$, giving your answers to 2 decimal places.", "0.18 or −1.85", "1.85 or −0.18", "0.18 or 1.85", "−0.18 or 1.85", "x = (−5 ± √37) ÷ 6 and √37 ≈ 6.083."],
          ["H", "For what positive value of $k$ does $x^2 + kx + 9 = 0$ have equal roots?", "6", "3", "9", "18", "k² − 36 = 0 gives k = 6."],
          ["H", "What is the sum of the roots of $2x^2 - 8x + 3 = 0$?", "4", "−4", "$\\frac{3}{2}$", "8", "Sum of roots = −b/a = 8/2 = 4."],
        ],
      },
      {
        week: 4,
        title: "Word problems on quadratic equations",
        subtopics: ["Number problems", "Area and dimension problems", "Motion and projectile problems", "Rejecting impossible solutions"],
        objectives: ["Form quadratic equations from word problems", "Solve problems involving areas and dimensions", "Interpret quadratic models of motion", "Reject solutions that do not fit the context"],
        lesson: {
          title: "Problems Leading to Quadratic Equations",
          summary: "Model real situations with quadratic equations and choose the sensible solution.",
          minutes: 45,
          notes: `## Method
1. Let $x$ stand for the unknown (with units).
2. Express the other quantities in terms of $x$.
3. Form an equation and rearrange it to $ax^2 + bx + c = 0$.
4. Solve by factorising or by the formula.
5. **Check both roots against the context** — lengths, times and numbers of people cannot be negative.

## Typical models
- **Consecutive numbers:** $x$ and $x + 1$; product 56 gives $x^2 + x - 56 = 0$.
- **Rectangles:** length $x + 3$ and width $x$ with area 40 gives $x^2 + 3x - 40 = 0$, so $x = 5$ (reject −8).
- **Motion:** a ball's height $h = 20t - 5t^2$. It lands when $h = 0$: $5t(4 - t) = 0$, so $t = 4$ s (reject $t = 0$, the start). Its maximum height is at the halfway time $t = 2$: $h = 20$ m.
- **Paths inside a garden:** the remaining area is $(\\text{length} - 2x)(\\text{width} - 2x)$.

## Sensible answers
If a garden is 8 m wide, a path cannot be 9 m wide — reject it even though it solves the equation.`,
          examples: `**Example 1.** Two numbers differ by 3 and their product is 108. *Solution:* $x(x + 3) = 108$, so $x = 9$; the numbers are **9 and 12**.

**Example 2.** A triangle has base $(x + 2)$ cm, height $x$ cm and area 12 cm². *Solution:* $x^2 + 2x - 24 = 0$, so $x = 4$.

**Example 3.** A 12 m by 8 m garden has a path of width $x$ m around its inside edge, leaving 60 m². *Solution:* $(12 - 2x)(8 - 2x) = 60$ gives $x^2 - 10x + 9 = 0$, so $x = 1$ (9 is impossible).`,
        },
        questions: [
          ["E", "The product of two consecutive positive integers is 56. What are they?", "7 and 8", "6 and 7", "8 and 9", "4 and 14", "x(x + 1) = 56 gives x = 7."],
          ["E", "Which of these is a quadratic equation?", "$x^2 - 3x = 10$", "$3x - 10 = 0$", "$x^3 = 8$", "$\\frac{1}{x} = 2$", "The highest power of x is 2."],
          ["M", "A rectangle's length is 3 m more than its width and its area is 40 m². What is its width?", "5 m", "8 m", "4 m", "10 m", "w(w + 3) = 40 gives (w + 8)(w − 5) = 0; the width is positive."],
          ["M", "The square of a positive number minus twice the number is 15. Find the number.", "5", "3", "15", "7", "x² − 2x − 15 = 0 gives (x − 5)(x + 3) = 0."],
          ["M", "A ball's height after $t$ seconds is $h = 20t - 5t^2$ metres. After how many seconds does it land?", "4", "2", "20", "5", "5t(4 − t) = 0; t = 0 is the start, so it lands at t = 4."],
          ["M", "A ball's height after $t$ seconds is $h = 20t - 5t^2$ metres. What is its maximum height?", "20 m", "40 m", "15 m", "25 m", "The maximum is halfway through the flight, at t = 2: h = 40 − 20 = 20 m."],
          ["M", "The sum of a positive number and its square is 42. Find the number.", "6", "7", "21", "14", "x² + x − 42 = 0 gives (x + 7)(x − 6) = 0."],
          ["H", "A triangle has base $(x + 2)$ cm, height $x$ cm and area 12 cm². Find $x$.", "4", "6", "2", "12", "½x(x + 2) = 12 gives x² + 2x − 24 = 0 = (x + 6)(x − 4)."],
          ["H", "Two positive numbers differ by 3 and their product is 108. What are they?", "9 and 12", "6 and 18", "3 and 36", "12 and 15", "x(x + 3) = 108 gives (x + 12)(x − 9) = 0."],
          ["H", "A path of uniform width $x$ m runs around the inside edge of a 12 m by 8 m garden, leaving 60 m² of lawn. Find $x$.", "1", "9", "2", "1.5", "(12 − 2x)(8 − 2x) = 60 gives x = 1 or 9; a 9 m path is impossible."],
        ],
      },
      {
        week: 5,
        title: "Joint and partial variation",
        subtopics: ["Joint variation", "Combined direct and inverse variation", "Partial variation", "Practical problems on variation"],
        objectives: ["Write equations for joint and combined variation", "Find constants of variation and use them", "Solve partial variation problems with two constants", "Describe the effect of changing one variable on another"],
        lesson: {
          title: "Joint, Combined and Partial Variation",
          summary: "Model quantities that depend on two variables or that have a fixed part and a varying part.",
          minutes: 45,
          notes: `## Joint variation
"$y$ varies jointly as $x$ and $z$" means $y = kxz$.

## Combined variation
"$y$ varies directly as $x$ and inversely as $z$" means $y = \\frac{kx}{z}$.
Example from physics: the force $F$ between two objects varies directly as $m$ and inversely as $d^2$: $F = \\frac{km}{d^2}$. Doubling $d$ multiplies $F$ by $\\frac{1}{4}$.

## Partial variation
"$y$ is partly constant and partly varies as $x$" means
$y = a + bx$
There are **two** constants, so you need **two** pairs of values. Substitute both and solve the simultaneous equations.
Example: the cost of a party is a fixed hall charge plus an amount per guest.

## Method (all types)
1. Write the equation with its constant(s).
2. Substitute the given values to find the constant(s).
3. Write the complete equation.
4. Use it to answer the question.`,
          examples: `**Example 1.** $y$ varies jointly as $x$ and $z$; $y = 24$ when $x = 2$, $z = 3$. *Then* $k = 4$, and when $x = 5$, $z = 2$: $y = 40$.

**Example 2.** $y = a + bx$; $y = 7$ when $x = 1$ and $y = 13$ when $x = 3$. *Solution:* $2b = 6$, so $b = 3$, $a = 4$; when $x = 5$, $y = 19$.

**Example 3.** A party costs ₦50,000 for 20 guests and ₦65,000 for 30 guests. *Solution:* $b = 1{,}500$ per guest, $a = ₦20{,}000$; 40 guests cost ₦80,000.`,
        },
        questions: [
          ["E", "If $y$ varies jointly as $x$ and $z$, then", "$y = kxz$", "$y = \\frac{kx}{z}$", "$y = k(x + z)$", "$y = kx + z$", "Joint variation multiplies the variables."],
          ["E", "'$y$ is partly constant and partly varies as $x$' is written", "$y = a + bx$", "$y = abx$", "$y = \\frac{a}{bx}$", "$y = ax^2$", "A constant part plus a part proportional to x."],
          ["M", "$y$ varies jointly as $x$ and $z$, and $y = 24$ when $x = 2$ and $z = 3$. Find the constant $k$.", "4", "6", "8", "144", "24 = k × 2 × 3, so k = 4."],
          ["M", "$y$ varies jointly as $x$ and $z$, and $y = 24$ when $x = 2$ and $z = 3$. Find $y$ when $x = 5$ and $z = 2$.", "40", "24", "20", "10", "k = 4, so y = 4 × 5 × 2 = 40."],
          ["M", "$y$ varies directly as $x$ and inversely as $z$. $y = 6$ when $x = 4$ and $z = 2$. Find $y$ when $x = 9$ and $z = 3$.", "9", "6", "13.5", "18", "k = 6 × 2 ÷ 4 = 3; y = 3 × 9 ÷ 3 = 9."],
          ["M", "$y = a + bx$, with $y = 7$ when $x = 1$ and $y = 13$ when $x = 3$. Find $b$.", "3", "4", "2", "6", "Subtracting: 2b = 6."],
          ["M", "$y = a + bx$, with $y = 7$ when $x = 1$ and $y = 13$ when $x = 3$. Find $y$ when $x = 5$.", "19", "20", "17", "23", "b = 3 and a = 4, so y = 4 + 15 = 19."],
          ["H", "The cost of a party is partly constant and partly varies as the number of guests. It costs ₦50,000 for 20 guests and ₦65,000 for 30 guests. What is the cost for 40 guests?", "₦80,000", "₦100,000", "₦75,000", "₦85,000", "b = 15,000 ÷ 10 = ₦1,500 per guest and a = ₦20,000; 20,000 + 40 × 1,500 = ₦80,000."],
          ["H", "$F$ varies directly as $m$ and inversely as the square of $d$. If $d$ is doubled and $m$ is unchanged, $F$ is", "divided by 4", "halved", "doubled", "unchanged", "F = km/d²; (2d)² = 4d²."],
          ["H", "$p$ varies directly as $q$ and inversely as the square of $r$. $p = 8$ when $q = 4$ and $r = 1$. Find $p$ when $q = 6$ and $r = 2$.", "3", "12", "6", "1.5", "k = 8 × 1 ÷ 4 = 2; p = 2 × 6 ÷ 4 = 3."],
        ],
      },
      {
        week: 6,
        title: "Logical reasoning",
        subtopics: ["Statements and their truth values", "Negation, conjunction and disjunction", "Implication and its converse, inverse and contrapositive", "Simple truth tables"],
        objectives: ["Identify simple statements and give their truth values", "Form negations, conjunctions and disjunctions", "State the converse and contrapositive of an implication", "Use truth tables to find the truth value of compound statements"],
        lesson: {
          title: "Logic: Statements and Connectives",
          summary: "Combine statements with 'not', 'and', 'or' and 'if…then' and decide when they are true.",
          minutes: 45,
          notes: `## Statements
A **statement** (proposition) is a sentence that is either **true** or **false**, but not both. "Abuja is the capital of Nigeria" is a statement; "Close the door" and "How old are you?" are not.

## Connectives
| Name | Symbol | Meaning | True when |
|---|---|---|---|
| Negation | $\\sim p$ | not $p$ | $p$ is false |
| Conjunction | $p\\wedge q$ | $p$ and $q$ | **both** are true |
| Disjunction | $p\\vee q$ | $p$ or $q$ | **at least one** is true |
| Implication | $p\\Rightarrow q$ | if $p$ then $q$ | false **only** when $p$ is true and $q$ is false |

## Related implications
For "If it rains ($p$), the ground is wet ($q$)":
- **Converse** $q\\Rightarrow p$: If the ground is wet, it rains.
- **Inverse** $\\sim p\\Rightarrow\\sim q$: If it does not rain, the ground is not wet.
- **Contrapositive** $\\sim q\\Rightarrow\\sim p$: If the ground is not wet, it did not rain.
An implication and its **contrapositive** always have the same truth value (they are **logically equivalent**); the converse need not.

## Truth tables
List every combination of T and F for the simple statements, then work out each column step by step.`,
          examples: `**Example 1.** $p$: "$x$ is even", $q$: "$x$ is divisible by 4". For $x = 6$: $p$ is true, $q$ is false, so $p\\wedge q$ is false and $p\\vee q$ is true.

**Example 2.** If $p$ is true and $q$ is false, find the value of $(p\\vee q)\\wedge\\sim q$. *Solution:* $p\\vee q$ = T and $\\sim q$ = T, so the result is **true**.

**Example 3.** The negation of "All students passed" is "**Not all** students passed" (at least one failed).`,
        },
        questions: [
          ["E", "Which of these is a statement (a sentence that is either true or false)?", "Abuja is the capital of Nigeria.", "Close the door.", "How old are you?", "Please sit down.", "Only a declarative sentence has a truth value."],
          ["E", "What is the negation of 'It is raining'?", "It is not raining.", "It is sunny.", "It will rain.", "It rained yesterday.", "The negation simply reverses the truth value."],
          ["M", "Let $p$: '$x$ is even' and $q$: '$x$ is divisible by 4'. For $x = 6$, which is true?", "p is true and q is false", "p and q are both true", "p is false and q is true", "p and q are both false", "6 is even but not divisible by 4."],
          ["M", "The conjunction $p\\wedge q$ is true only when", "both p and q are true", "either p or q is true", "both p and q are false", "p is true and q is false", "'And' requires both parts to be true."],
          ["M", "The disjunction $p\\vee q$ is false only when", "both p and q are false", "both p and q are true", "p is true and q is false", "p is false and q is true", "'Or' is true if at least one part is true."],
          ["M", "The implication $p\\Rightarrow q$ is false only when", "p is true and q is false", "p is false and q is true", "both are false", "both are true", "A true condition leading to a false conclusion breaks the implication."],
          ["M", "What is the converse of 'If it rains, the ground is wet'?", "If the ground is wet, it rains.", "If it does not rain, the ground is not wet.", "If the ground is not wet, it did not rain.", "It rains and the ground is wet.", "The converse swaps the condition and the conclusion."],
          ["H", "The contrapositive of $p\\Rightarrow q$ is", "$\\sim q\\Rightarrow\\sim p$", "$q\\Rightarrow p$", "$\\sim p\\Rightarrow\\sim q$", "$p\\Rightarrow\\sim q$", "Swap and negate both parts."],
          ["H", "Which statement is logically equivalent to $p\\Rightarrow q$?", "$\\sim q\\Rightarrow\\sim p$", "$q\\Rightarrow p$", "$\\sim p\\Rightarrow\\sim q$", "$p\\wedge q$", "An implication always has the same truth value as its contrapositive."],
          ["H", "If $p$ is true and $q$ is false, what is the truth value of $(p\\vee q)\\wedge\\sim q$?", "True", "False", "It cannot be determined", "Both true and false", "p ∨ q is true and ∼q is true, so their conjunction is true."],
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
        title: "Geometrical theorems and proofs",
        subtopics: ["Angle sum and exterior angle of a triangle", "Properties of isosceles triangles", "Properties of parallelograms and rhombuses", "The mid-point theorem"],
        objectives: ["Prove that the angles of a triangle add up to 180°", "Use properties of isosceles triangles to find angles", "State and use properties of parallelograms and rhombuses", "Apply the mid-point theorem"],
        lesson: {
          title: "Proving Basic Geometric Results",
          summary: "Understand why key geometric facts are true and use them to solve problems.",
          minutes: 45,
          notes: `## Proof: angles of a triangle add up to 180°
In triangle ABC draw a line through A **parallel** to BC. The two angles it makes with AB and AC are equal to $\\angle B$ and $\\angle C$ (**alternate angles**). Together with $\\angle A$ they form a straight line, so $\\angle A + \\angle B + \\angle C = 180°$.

## Exterior angle theorem
An exterior angle of a triangle equals the **sum of the two interior opposite angles**.

## Isosceles triangles
If two sides are equal, the angles opposite them (the **base angles**) are equal. If the apex angle is 50°, each base angle is $\\frac{180° - 50°}{2} = 65°$.

## Parallelograms and rhombuses
| Property | Parallelogram | Rhombus |
|---|---|---|
| Opposite sides parallel and equal | ✔ | ✔ |
| Opposite angles equal | ✔ | ✔ |
| Adjacent angles add to 180° | ✔ | ✔ |
| Diagonals bisect each other | ✔ | ✔ |
| Diagonals meet at right angles | ✘ | ✔ |

## Mid-point theorem
The line joining the **mid-points of two sides** of a triangle is **parallel to the third side** and **half its length**.`,
          examples: `**Example 1.** In parallelogram ABCD, $\\angle A = 70°$. *Then* $\\angle B = 180° - 70° = 110°$ (co-interior angles).

**Example 2.** An exterior angle is 115° and one interior opposite angle is 50°. *The other* is $115° - 50° = 65°$.

**Example 3.** M and N are the mid-points of AB and AC, and BC = 14 cm. *By the mid-point theorem* MN = 7 cm.`,
        },
        questions: [
          ["E", "In a parallelogram, opposite angles are", "equal", "supplementary", "complementary", "right angles", "This is a property of every parallelogram."],
          ["E", "The diagonals of a parallelogram", "bisect each other", "are always equal", "are always perpendicular", "bisect the angles", "Each diagonal cuts the other in half."],
          ["E", "The proof that the angles of a triangle add up to 180° uses", "a line through one vertex parallel to the opposite side", "a circle through the vertices", "a right angle at every vertex", "the Pythagoras theorem", "Alternate angles then form a straight line."],
          ["M", "In parallelogram ABCD, $\\angle A = 70°$. Find $\\angle B$.", "110°", "70°", "290°", "20°", "Adjacent angles of a parallelogram add up to 180°."],
          ["M", "An exterior angle of a triangle is 115° and one interior opposite angle is 50°. Find the other interior opposite angle.", "65°", "115°", "15°", "165°", "115° − 50° = 65°."],
          ["M", "The base angles of an isosceles triangle are $2x$ and $(x + 30)°$. Find $x$.", "30", "60", "10", "15", "2x = x + 30, so x = 30."],
          ["M", "The line joining the mid-points of two sides of a triangle is", "parallel to the third side and half its length", "equal to the third side", "perpendicular to the third side", "twice the third side", "This is the mid-point theorem."],
          ["H", "In triangle ABC, M and N are the mid-points of AB and AC. If BC = 14 cm, find MN.", "7 cm", "14 cm", "28 cm", "3.5 cm", "MN is half of BC."],
          ["H", "The diagonals of a rhombus", "bisect each other at right angles", "are always equal", "are parallel", "never meet", "A rhombus is a parallelogram whose diagonals are perpendicular."],
          ["H", "In triangle PQR, PQ = PR and $\\angle P = 50°$. Find $\\angle Q$.", "65°", "50°", "130°", "80°", "The base angles are equal: (180° − 50°) ÷ 2 = 65°."],
        ],
      },
      {
        week: 2,
        title: "Mensuration: spheres, cones and frustums",
        subtopics: ["Surface area and volume of a sphere", "Hemispheres", "Frustum of a cone", "Comparing volumes of related solids"],
        objectives: ["Calculate the surface area and volume of spheres and hemispheres", "Calculate the surface area of cuboids and cubes", "Find the volume of a frustum", "Describe how volume changes when dimensions are scaled"],
        lesson: {
          title: "Spheres, Hemispheres and Frustums",
          summary: "Extend mensuration to spheres, hemispheres and truncated cones.",
          minutes: 45,
          notes: `## Spheres
- Volume: $V = \\frac{4}{3}\\pi r^3$
- Surface area: $A = 4\\pi r^2$

## Hemispheres
- Volume: $V = \\frac{2}{3}\\pi r^3$
- Curved surface area: $2\\pi r^2$; total surface area (with the flat face): $3\\pi r^2$

## Cuboids and cubes
Total surface area of a cuboid: $2(lb + bh + lh)$. A cube of edge $s$ has surface area $6s^2$.

## Frustum of a cone
A **frustum** is what remains when the top of a cone is cut off parallel to its base (like a bucket). With top radius $r$, bottom radius $R$ and height $h$:
$V = \\frac{\\pi h}{3}(R^2 + Rr + r^2)$
(Equivalently: volume of the large cone − volume of the small cone.)

## Relationships
- A cone has **one third** of the volume of a cylinder with the same base and height.
- If every length is multiplied by $k$, the volume is multiplied by $k^3$: doubling the radius of a sphere multiplies its volume by 8.`,
          examples: `**Example 1.** Surface area of a sphere of radius 7 cm: $4\\times\\frac{22}{7}\\times 49 = 616$ cm².

**Example 2.** Volume of a hemisphere of radius 21 cm: $\\frac{2}{3}\\times\\frac{22}{7}\\times 9261 = 19{,}404$ cm³.

**Example 3.** A frustum has radii 6 cm and 3 cm and height 4 cm. $V = \\frac{3.14\\times 4}{3}(36 + 18 + 9)\\approx 263.76$ cm³.`,
        },
        questions: [
          ["E", "Which formula gives the volume of a sphere?", "$\\frac{4}{3}\\pi r^3$", "$4\\pi r^2$", "$\\frac{2}{3}\\pi r^3$", "$\\pi r^3$", "The volume of a sphere of radius r is V = (4/3)πr³."],
          ["E", "Which formula gives the surface area of a sphere?", "$4\\pi r^2$", "$\\frac{4}{3}\\pi r^3$", "$2\\pi r^2$", "$\\pi r^2$", "A sphere's surface area is four times the area of its great circle."],
          ["M", "Find the volume of a sphere of radius 3 cm, to 1 decimal place. (Take $\\pi = \\frac{22}{7}$.)", "113.1 cm³", "37.7 cm³", "84.9 cm³", "339.4 cm³", "4/3 × 22/7 × 27 ≈ 113.1 cm³."],
          ["M", "Find the surface area of a sphere of radius 7 cm. (Take $\\pi = \\frac{22}{7}$.)", "616 cm²", "154 cm²", "1,437.3 cm²", "308 cm²", "4 × 22/7 × 49 = 616 cm²."],
          ["M", "Find the volume of a hemisphere of radius 21 cm. (Take $\\pi = \\frac{22}{7}$.)", "19,404 cm³", "38,808 cm³", "2,772 cm³", "9,702 cm³", "2/3 × 22/7 × 21³ = 19,404 cm³."],
          ["M", "Find the total surface area of a cuboid 6 cm by 4 cm by 3 cm.", "108 cm²", "72 cm²", "54 cm²", "216 cm²", "2(24 + 18 + 12) = 108 cm²."],
          ["M", "A cube has a total surface area of 150 cm². How long is each edge?", "5 cm", "25 cm", "6 cm", "12.25 cm", "6s² = 150, so s² = 25."],
          ["H", "A frustum of a cone has radii 6 cm and 3 cm and height 4 cm. Find its volume. (Take $\\pi = 3.14$.)", "263.76 cm³", "452.16 cm³", "113.04 cm³", "791.28 cm³", "(3.14 × 4 ÷ 3)(36 + 18 + 9) = 263.76 cm³."],
          ["H", "A cylinder and a cone have the same base radius and the same height. What is the ratio of the volume of the cylinder to that of the cone?", "3 : 1", "1 : 3", "2 : 1", "1 : 1", "A cone has one third of the cylinder's volume."],
          ["H", "The radius of a sphere is doubled. By what number is its volume multiplied?", "8", "2", "4", "6", "Volume depends on r³: 2³ = 8."],
        ],
      },
      {
        week: 3,
        title: "Solving right-angled triangles",
        subtopics: ["Trigonometric ratios with a calculator", "Finding unknown sides", "Finding unknown angles", "The identity sin²θ + cos²θ = 1"],
        objectives: ["Find trigonometric ratios of any acute angle using a calculator or tables", "Calculate unknown sides of right-angled triangles", "Calculate unknown angles using inverse ratios", "Use the identity sin²θ + cos²θ = 1"],
        lesson: {
          title: "Trigonometry in Right-Angled Triangles",
          summary: "Use sine, cosine and tangent with a calculator to find any missing side or angle.",
          minutes: 45,
          notes: `## Reminder: SOH CAH TOA
$\\sin\\theta = \\frac{O}{H}$, $\\cos\\theta = \\frac{A}{H}$, $\\tan\\theta = \\frac{O}{A}$
Useful exact values: $\\sin 90° = 1$, $\\cos 0° = 1$, $\\tan 45° = 1$.

## Finding a side
Label the sides, choose the ratio that contains the known side and the unknown side, then rearrange.
- Hypotenuse 20 and angle 40°, opposite side: $x = 20\\sin 40° = 20\\times 0.643 \\approx 12.86$.
- Adjacent 12 and angle 35°, opposite side: $x = 12\\tan 35° = 12\\times 0.700 = 8.4$.

## Finding an angle
Use the **inverse** function ($\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$):
opposite 5 and hypotenuse 13 give $\\theta = \\sin^{-1}\\frac{5}{13}\\approx 22.6°$.

## Identities
- $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$
- $\\sin^2\\theta + \\cos^2\\theta = 1$ (from Pythagoras)
If $\\cos\\theta = \\frac{5}{13}$, then $\\sin\\theta = \\sqrt{1 - \\frac{25}{169}} = \\frac{12}{13}$ (for an acute angle).

## Isosceles triangles
Drop a perpendicular from the apex to split it into two right-angled triangles.`,
          examples: `**Example 1.** An isosceles triangle has equal sides 10 cm and base angles 70°. *Base:* $2\\times 10\\cos 70° = 20\\times 0.342 = 6.84$ cm.

**Example 2.** If $\\tan\\theta = 1$ and θ is acute, then $\\theta = 45°$.

**Example 3.** Adjacent 12, angle 35°: opposite $= 12\\tan 35° \\approx 8.4$.`,
        },
        questions: [
          ["E", "What is the value of $\\sin 90°$?", "1", "0", "$\\frac{1}{2}$", "It is undefined", "At 90° the opposite side equals the hypotenuse."],
          ["E", "What is the value of $\\cos 0°$?", "1", "0", "−1", "$\\frac{1}{2}$", "At 0° the adjacent side equals the hypotenuse."],
          ["E", "$\\tan\\theta$ is equal to $\\sin\\theta$ divided by", "$\\cos\\theta$", "$\\tan\\theta$", "1", "the hypotenuse", "(O/H) ÷ (A/H) = O/A."],
          ["M", "If $\\tan\\theta = 1$ and θ is acute, find θ.", "45°", "30°", "60°", "90°", "tan 45° = 1, because the opposite and adjacent sides are equal."],
          ["M", "A right-angled triangle has hypotenuse 20 cm and an angle of 40°. Find the side opposite the angle. (Take $\\sin 40° = 0.643$.)", "12.86 cm", "15.32 cm", "16.78 cm", "31.10 cm", "20 × 0.643 = 12.86 cm."],
          ["M", "The side adjacent to an angle of 35° is 12 cm. Find the opposite side. (Take $\\tan 35° = 0.700$.)", "8.4 cm", "17.14 cm", "6.88 cm", "9.83 cm", "12 × 0.700 = 8.4 cm."],
          ["M", "The opposite side is 5 cm and the hypotenuse is 13 cm. Find the angle, to 1 decimal place.", "22.6°", "67.4°", "21.0°", "36.9°", "θ = sin⁻¹(5/13) ≈ 22.6°."],
          ["H", "What is the value of $\\sin^2\\theta + \\cos^2\\theta$?", "1", "0", "2", "$\\tan\\theta$", "This identity follows from Pythagoras' theorem."],
          ["H", "If $\\cos\\theta = \\frac{5}{13}$ and θ is acute, find $\\sin\\theta$.", "$\\frac{12}{13}$", "$\\frac{5}{12}$", "$\\frac{13}{12}$", "$\\frac{12}{5}$", "sin θ = √(1 − 25/169) = √(144/169) = 12/13."],
          ["H", "An isosceles triangle has two equal sides of 10 cm and base angles of 70°. Find the length of the base. (Take $\\cos 70° = 0.342$.)", "6.84 cm", "3.42 cm", "18.79 cm", "9.40 cm", "Half the base = 10 cos 70° = 3.42 cm, so the base = 6.84 cm."],
        ],
      },
      {
        week: 4,
        title: "Statistics: presenting grouped data",
        subtopics: ["Class intervals, boundaries and class marks", "Histograms", "Frequency polygons", "Frequency density for unequal classes"],
        objectives: ["Find class boundaries, widths and class marks", "Draw and interpret histograms", "Draw frequency polygons", "Use frequency density when class widths are unequal"],
        lesson: {
          title: "Grouped Data, Histograms and Frequency Polygons",
          summary: "Organise large data sets into classes and present them with histograms and frequency polygons.",
          minutes: 45,
          notes: `## Grouping data
Large data sets are grouped into **classes** such as 10–19, 20–29, 30–39.
- **Class boundaries** remove the gaps between classes: 20–29 has boundaries **19.5** and **29.5**.
- **Class width** = upper boundary − lower boundary = 10.
- **Class mark** (mid-point) = $\\frac{\\text{lower limit} + \\text{upper limit}}{2}$: for 10–19 it is 14.5.
- The **modal class** is the class with the highest frequency.

## Histograms
- Bars are drawn on the **class boundaries**, so they **touch**.
- For equal class widths, bar height = frequency.
- For **unequal** widths, bar height = **frequency density** $= \\frac{\\text{frequency}}{\\text{class width}}$, so that the **area** of each bar represents its frequency.

## Frequency polygons
Join the **mid-points of the tops** of the histogram bars (or plot frequency against class marks) with straight lines.

## Other graphs
An **ogive** is a graph of cumulative frequency (studied later).

## Estimating from grouped data
Because individual values are lost when data are grouped, calculations use the **class marks**, so results are **estimates**.`,
          examples: `**Example 1.** Class 30–39: boundaries 29.5–39.5, width 10, class mark 34.5.

**Example 2.** Classes 0–9, 10–19, 20–29 have frequencies 3, 7, 5. *Modal class:* 10–19.

**Example 3.** Class 10–14 (width 5) has frequency 20. *Frequency density:* $20\\div 5 = 4$.`,
        },
        questions: [
          ["E", "In a histogram, the bars", "touch each other", "have equal gaps between them", "are drawn as circles", "must all have the same height", "Bars are drawn on class boundaries, so there are no gaps."],
          ["E", "What is the class mark (mid-point) of the class 10–19?", "14.5", "15", "14", "29", "(10 + 19) ÷ 2 = 14.5."],
          ["E", "The class 20–29 has class boundaries 19.5 and 29.5. What is its width?", "10", "9", "29", "49", "29.5 − 19.5 = 10."],
          ["M", "What are the class boundaries of the class 30–39?", "29.5 and 39.5", "30 and 39", "30.5 and 38.5", "29 and 40", "Half a unit below 30 and half a unit above 39."],
          ["M", "A frequency polygon is drawn by joining", "the mid-points of the tops of the histogram bars", "the corners of the bars", "the class boundaries on the x-axis", "the cumulative frequencies", "Points are plotted at the class marks."],
          ["M", "Classes 0–9, 10–19 and 20–29 have frequencies 3, 7 and 5. What is the modal class?", "10–19", "20–29", "0–9", "7", "10–19 has the highest frequency."],
          ["M", "An ogive is a graph of", "cumulative frequency", "frequency density", "class marks", "relative frequency only", "It shows running totals of frequency."],
          ["H", "When class widths are unequal, the height of each histogram bar represents", "frequency density", "frequency", "cumulative frequency", "class width", "Then the area of each bar represents the frequency."],
          ["H", "The class 10–14 has width 5 and frequency 20. What is its frequency density?", "4", "20", "100", "0.25", "Frequency density = frequency ÷ class width = 20 ÷ 5 = 4."],
          ["H", "When estimating the mean of grouped data, each class is represented by", "its class mark (mid-point)", "its upper boundary", "its lower limit", "the modal class", "Individual values are unknown, so the mid-point is used."],
        ],
      },
      {
        week: 5,
        title: "Measures of central tendency for grouped data",
        subtopics: ["Estimated mean using class marks", "Median class and median by interpolation", "Mode of grouped data", "Effect of changes to data on averages"],
        objectives: ["Estimate the mean of grouped data", "Identify the median class and estimate the median by interpolation", "Estimate the mode of grouped data", "Describe how adding a constant changes the mean"],
        lesson: {
          title: "Averages of Grouped Data",
          summary: "Estimate the mean, median and mode when data are given in classes.",
          minutes: 45,
          notes: `## Estimated mean
$\\bar{x} = \\frac{\\Sigma fx}{\\Sigma f}$ where $x$ is the **class mark** of each class.
| Class | $f$ | $x$ | $fx$ |
|---|---|---|---|
| 1–5 | 4 | 3 | 12 |
| 6–10 | 6 | 8 | 48 |
| 11–15 | 10 | 13 | 130 |
| Total | 20 | | 190 |
Estimated mean $= \\frac{190}{20} = 9.5$.

## Median
The median is the $\\frac{n}{2}$th value. Use cumulative frequencies to find the **median class**, then interpolate:
$\\text{Median} = L + \\left(\\frac{\\frac{n}{2} - F}{f}\\right)c$
where $L$ = lower boundary of the median class, $F$ = cumulative frequency **before** it, $f$ = its frequency and $c$ = its width.

## Mode
The **modal class** has the highest frequency. An estimate of the mode is
$\\text{Mode} = L + \\left(\\frac{d_1}{d_1 + d_2}\\right)c$
where $d_1$ = modal frequency − previous frequency and $d_2$ = modal frequency − next frequency.

## Changing the data
Adding a constant $k$ to every value adds $k$ to the mean (and the median and mode). Removing a value changes the total and the count.`,
          examples: `**Example 1.** Weights 40–49 (6), 50–59 (10), 60–69 (4). *Estimated mean:* $\\frac{6(44.5) + 10(54.5) + 4(64.5)}{20} = 53.5$.

**Example 2.** Continuous classes 0–10 (5), 10–20 (10), 20–30 (5). *Median:* $n/2 = 10$ lies in 10–20; $10 + \\frac{10 - 5}{10}\\times 10 = 15$.

**Example 3.** The mean of 5 numbers is 12. When 20 is removed, the mean of the rest is $\\frac{60 - 20}{4} = 10$.`,
        },
        questions: [
          ["E", "The estimated mean of grouped data is $\\frac{\\Sigma fx}{\\Sigma f}$, where $x$ is", "the class mark of each class", "the upper limit of each class", "the frequency of each class", "the class width", "Each class is represented by its mid-point."],
          ["E", "The median divides an ordered data set into", "two equal halves", "four equal parts", "ten equal parts", "the largest and smallest values", "Half the values lie below the median."],
          ["M", "Classes 1–5, 6–10 and 11–15 have frequencies 4, 6 and 10. Estimate the mean.", "9.5", "8", "10", "13", "Class marks 3, 8, 13: (12 + 48 + 130) ÷ 20 = 9.5."],
          ["M", "Classes 1–5, 6–10 and 11–15 have frequencies 4, 6 and 10. What is the modal class?", "11–15", "6–10", "1–5", "10", "11–15 has the highest frequency."],
          ["M", "Classes 1–5, 6–10 and 11–15 have frequencies 3, 6 and 11. In which class does the median lie?", "11–15", "6–10", "1–5", "It cannot be found", "Cumulative frequencies are 3, 9, 20, so the 10th and 11th values (the middle of 20) are both in 11–15."],
          ["M", "Weights 40–49, 50–59 and 60–69 kg have frequencies 6, 10 and 4. Estimate the mean weight.", "53.5 kg", "54.5 kg", "52.5 kg", "50 kg", "(6 × 44.5 + 10 × 54.5 + 4 × 64.5) ÷ 20 = 1,070 ÷ 20 = 53.5 kg."],
          ["M", "The mean of five numbers is 12. One of the numbers, 20, is removed. What is the mean of the remaining four?", "10", "12", "8", "11", "Total 60 − 20 = 40; 40 ÷ 4 = 10."],
          ["H", "Continuous classes 0–10, 10–20 and 20–30 have frequencies 5, 10 and 5. Estimate the median by interpolation.", "15", "10", "20", "12.5", "n/2 = 10 lies in 10–20: 10 + (10 − 5)/10 × 10 = 15."],
          ["H", "The modal class 10–20 has frequency 10; the classes before and after it have frequency 5 each. Estimate the mode using $L + \\frac{d_1}{d_1 + d_2}c$.", "15", "10", "20", "12.5", "d₁ = d₂ = 5, so mode = 10 + ½ × 10 = 15."],
          ["H", "If 5 is added to every value in a data set, the mean", "increases by 5", "stays the same", "is multiplied by 5", "increases by 25", "Every value, and so the total ÷ n, rises by 5."],
        ],
      },
    ],
  },
];
