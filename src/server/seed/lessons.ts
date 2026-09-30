/** Original seed lessons (Precious PS teacher-authored). Bodies use light Markdown + $LaTeX$. */
export const LESSONS: {
  subject: string;
  topic: string;
  classCode?: "SS1" | "SS2" | "SS3";
  title: string;
  summary: string;
  minutes: number;
  body: string;
  examples: string;
  videoUrl?: string;
}[] = [
  {
    subject: "MTH",
    topic: "Indices",
    classCode: "SS1",
    title: "Laws of Indices",
    summary: "Multiply, divide and raise powers using the laws of indices, including zero, negative and fractional indices.",
    minutes: 25,
    body: `## What is an index?
In $a^n$, $a$ is the **base** and $n$ is the **index** (or power). It tells us how many times the base is multiplied by itself: $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$.

## The laws
- **Multiplication:** $a^m \\times a^n = a^{m+n}$
- **Division:** $a^m \\div a^n = a^{m-n}$
- **Power of a power:** $(a^m)^n = a^{mn}$
- **Zero index:** $a^0 = 1$ (for $a \\neq 0$)
- **Negative index:** $a^{-n} = \\dfrac{1}{a^n}$
- **Fractional index:** $a^{\\frac{1}{n}} = \\sqrt[n]{a}$ and $a^{\\frac{m}{n}} = \\left(\\sqrt[n]{a}\\right)^m$

## Common mistakes
- Adding indices when the **bases are different** — the laws only apply to the same base.
- Treating $a^{-n}$ as a negative number. $2^{-3} = \\frac{1}{8}$, which is positive.`,
    examples: `**Example 1.** Simplify $3^5 \\times 3^2$.
Add the indices: $3^{5+2} = 3^7$.

**Example 2.** Evaluate $27^{\\frac{2}{3}}$.
$27^{\\frac{1}{3}} = 3$, so $27^{\\frac{2}{3}} = 3^2 = 9$.

**Example 3.** Evaluate $4^{-2}$.
$4^{-2} = \\dfrac{1}{4^2} = \\dfrac{1}{16}$.`,
  },
  {
    subject: "MTH",
    topic: "Linear equations",
    classCode: "SS1",
    title: "Solving Linear Equations",
    summary: "Balance an equation step by step to find the value of the unknown.",
    minutes: 20,
    body: `## The balance method
An equation is like a balanced scale: whatever you do to one side, you must do to the other.

1. Remove brackets and collect like terms.
2. Move terms containing the unknown to one side.
3. Divide both sides by the coefficient of the unknown.

## Checking your answer
Always substitute your answer back into the original equation. Both sides must be equal.`,
    examples: `**Example.** Solve $5x - 7 = 18$.
Add 7 to both sides: $5x = 25$. Divide by 5: $x = 5$.
Check: $5(5) - 7 = 18$ ✓`,
  },
  {
    subject: "MTH",
    topic: "Quadratic equations",
    classCode: "SS2",
    title: "Solving Quadratic Equations by Factorisation",
    summary: "Factorise $x^2 + bx + c$ and use the null-factor law to find both roots.",
    minutes: 30,
    body: `## Standard form
A quadratic equation has the form $ax^2 + bx + c = 0$ with $a \\neq 0$.

## Factorisation (when $a = 1$)
Find two numbers $p$ and $q$ such that $p + q = b$ and $pq = c$. Then
$$x^2 + bx + c = (x + p)(x + q)$$

## Null-factor law
If $(x + p)(x + q) = 0$, then $x + p = 0$ or $x + q = 0$.

## Sum and product of roots
For $x^2 + bx + c = 0$: sum of roots $= -b$, product of roots $= c$.`,
    examples: `**Example.** Solve $x^2 - 5x + 6 = 0$.
Numbers that multiply to 6 and add to −5: −2 and −3.
$(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$.`,
  },
  {
    subject: "MTH",
    topic: "Probability",
    classCode: "SS2",
    title: "Introduction to Probability",
    summary: "Measure how likely an event is using equally likely outcomes.",
    minutes: 20,
    body: `## Definition
$$P(E) = \\frac{\\text{number of favourable outcomes}}{\\text{total number of possible outcomes}}$$

- $0 \\le P(E) \\le 1$
- $P(\\text{not } E) = 1 - P(E)$

## Two dice
When two fair dice are thrown there are $6 \\times 6 = 36$ equally likely outcomes. A table of sums is the easiest way to count favourable outcomes.`,
    examples: `**Example.** A bag has 3 red and 5 blue balls. Find P(red).
$P(\\text{red}) = \\frac{3}{8}$.`,
  },
  {
    subject: "ENG",
    topic: "Concord",
    title: "Subject–Verb Agreement (Concord)",
    summary: "Make verbs agree with their subjects in number, including tricky cases.",
    minutes: 20,
    body: `## The basic rule
A singular subject takes a singular verb; a plural subject takes a plural verb.
- *The boy **runs**.* / *The boys **run**.*

## Tricky cases
- **Neither…nor / Either…or:** the verb agrees with the nearer subject. *Neither the teacher nor the students **were** late.*
- **"The number of"** takes a singular verb; **"A number of"** takes a plural verb.
- **Collective nouns** (team, committee) are usually singular when acting as one unit.
- **Words between subject and verb** do not change the agreement. *The box of pencils **is** on the table.*`,
    examples: `**Choose:** A number of students ___ (has/have) arrived. → **have**
**Choose:** The number of students ___ (has/have) increased. → **has**`,
  },
  {
    subject: "PHY",
    topic: "Motion",
    title: "Speed, Velocity and Acceleration",
    summary: "Distinguish scalar and vector quantities and use the equations of uniformly accelerated motion.",
    minutes: 25,
    body: `## Key quantities
- **Speed** $= \\dfrac{\\text{distance}}{\\text{time}}$ (scalar, m/s)
- **Velocity** is speed in a stated direction (vector)
- **Acceleration** $a = \\dfrac{v - u}{t}$ (m/s²)

## Equations of motion (uniform acceleration)
- $v = u + at$
- $s = ut + \\tfrac{1}{2}at^2$
- $v^2 = u^2 + 2as$`,
    examples: `**Example.** A car accelerates from rest at $3\\text{ m/s}^2$ for 4 s. Find its final velocity.
$v = 0 + 3 \\times 4 = 12\\text{ m/s}$.`,
  },
];
