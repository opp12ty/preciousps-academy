import type { TermPlan } from "../types";

/** JSS2 Mathematics — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Standard form",
        subtopics: ["Writing large numbers in standard form", "Writing small numbers in standard form", "Converting standard form to ordinary numbers", "Multiplying and dividing numbers in standard form"],
        objectives: ["Write large and small numbers in standard form", "Convert numbers from standard form to ordinary form", "Multiply and divide numbers given in standard form", "Use standard form for measurements in science and daily life"],
        lesson: {
          title: "Standard Form (Scientific Notation)",
          summary: "Write very large and very small numbers compactly as A × 10ⁿ and calculate with them.",
          minutes: 40,
          notes: `## What is standard form?
A number is in **standard form** when it is written as
$A\\times 10^n$ where $1\\le A < 10$ and $n$ is a whole number (positive, negative or zero).
Examples: $4.5\\times 10^4$ and $6.2\\times 10^{-4}$. But $45\\times 10^3$ is **not** in standard form because 45 is not between 1 and 10.

## Large numbers
Move the decimal point to the **left** until one non-zero digit remains in front of it. The number of places moved is the **positive** power of 10.
$36\\,800\\,000 = 3.68\\times 10^7$ (7 places)

## Small numbers
Move the decimal point to the **right** past the first non-zero digit. The number of places moved is the **negative** power of 10.
$0.000\\,62 = 6.2\\times 10^{-4}$ (4 places)

## Back to ordinary numbers
A positive power moves the point to the right; a negative power moves it to the left.
$3.2\\times 10^3 = 3200$ and $2.05\\times 10^{-3} = 0.002\\,05$.

## Calculating
- Multiply: multiply the numbers and **add** the powers. $(3\\times 10^4)\\times(2\\times 10^3) = 6\\times 10^7$
- Divide: divide the numbers and **subtract** the powers. $(8\\times 10^6)\\div(4\\times 10^2) = 2\\times 10^4$
- If the result is not in standard form, adjust it: $20\\times 10^5 = 2\\times 10^6$.`,
          examples: `**Example 1.** Write 150,000,000 km (distance from Earth to the Sun) in standard form. *Answer:* $1.5\\times 10^8$ km.

**Example 2.** Write $7.04\\times 10^{-5}$ as a decimal. *Answer:* 0.000 070 4.

**Example 3.** Simplify $(5\\times 10^3)\\times(4\\times 10^2)$.
*Solution:* $20\\times 10^5 = 2.0\\times 10^1\\times 10^5 = 2\\times 10^6$.`,
        },
        questions: [
          ["E", "Write 45,000 in standard form.", "$4.5\\times 10^4$", "$45\\times 10^3$", "$4.5\\times 10^3$", "$0.45\\times 10^5$", "Move the point 4 places left: 4.5, so the power of 10 is 4. 45 × 10³ is not standard form."],
          ["E", "Write $3.2\\times 10^3$ as an ordinary number.", "3,200", "320", "32,000", "0.0032", "Multiplying by 10³ moves the decimal point 3 places to the right."],
          ["E", "Which of these numbers is in standard form?", "$7.1\\times 10^5$", "$71\\times 10^4$", "$0.71\\times 10^6$", "$10.5\\times 10^2$", "In standard form the first number must be at least 1 and less than 10."],
          ["M", "Write 0.000 62 in standard form.", "$6.2\\times 10^{-4}$", "$6.2\\times 10^{-3}$", "$62\\times 10^{-5}$", "$6.2\\times 10^{4}$", "Move the point 4 places to the right to get 6.2, so the power is −4."],
          ["M", "Write $2.05\\times 10^{-3}$ as a decimal.", "0.002 05", "0.020 5", "0.000 205", "2,050", "A power of −3 moves the decimal point 3 places to the left."],
          ["M", "Express 36,800,000 in standard form.", "$3.68\\times 10^7$", "$3.68\\times 10^6$", "$36.8\\times 10^6$", "$3.68\\times 10^8$", "The point moves 7 places to the left."],
          ["M", "Evaluate $(3\\times 10^4)\\times(2\\times 10^3)$ in standard form.", "$6\\times 10^7$", "$6\\times 10^{12}$", "$5\\times 10^7$", "$6\\times 10^1$", "Multiply 3 × 2 = 6 and add the powers: 4 + 3 = 7."],
          ["H", "Evaluate $(8\\times 10^6)\\div(4\\times 10^2)$.", "$2\\times 10^4$", "$2\\times 10^3$", "$4\\times 10^4$", "$2\\times 10^8$", "Divide 8 ÷ 4 = 2 and subtract the powers: 6 − 2 = 4."],
          ["H", "Evaluate $(5\\times 10^3)\\times(4\\times 10^2)$, giving your answer in standard form.", "$2\\times 10^6$", "$2\\times 10^5$", "$9\\times 10^5$", "$2\\times 10^7$", "5 × 4 = 20 and 10³ × 10² = 10⁵; 20 × 10⁵ = 2 × 10⁶."],
          ["H", "The Earth is about 150,000,000 km from the Sun. Write this in standard form.", "$1.5\\times 10^8$ km", "$1.5\\times 10^7$ km", "$15\\times 10^7$ km", "$1.5\\times 10^9$ km", "Move the point 8 places left to get 1.5."],
        ],
      },
      {
        week: 2,
        title: "Squares and square roots",
        subtopics: ["Perfect squares", "Square roots by prime factorisation", "Square roots of fractions and decimals", "Problems on squares and square roots"],
        objectives: ["Recognise perfect squares", "Find square roots using prime factors", "Find square roots of fractions and decimals", "Solve problems involving areas of squares"],
        lesson: {
          title: "Squares and Square Roots",
          summary: "Find squares and square roots of whole numbers, fractions and decimals using prime factors.",
          minutes: 40,
          notes: `## Squares
The **square** of a number is the number multiplied by itself: $15^2 = 15\\times 15 = 225$.
Numbers such as 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, … are **perfect squares**.

## Square roots
The **square root** of a number is the number which, when squared, gives it: $\\sqrt{144} = 12$ because $12^2 = 144$.

## Square roots by prime factors
1. Write the number as a product of prime factors.
2. Group the factors in **pairs**.
3. Take **one** factor from each pair and multiply.
$\\sqrt{196} = \\sqrt{2\\times 2\\times 7\\times 7} = 2\\times 7 = 14$
If a factor is left without a partner, the number is **not** a perfect square. To make it one, multiply by the unpaired factor(s): $72 = 2^3\\times 3^2$, so $72\\times 2 = 144 = 12^2$.

## Fractions and decimals
- $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$, so $\\sqrt{\\frac{49}{64}} = \\frac{7}{8}$. Change mixed numbers to improper fractions first.
- For decimals, write as a fraction: $\\sqrt{0.09} = \\sqrt{\\frac{9}{100}} = \\frac{3}{10} = 0.3$.

## Areas of squares
If a square has area $A$, its side is $\\sqrt{A}$.`,
          examples: `**Example 1.** Find $\\sqrt{900}$. *Solution:* $900 = 2^2\\times 3^2\\times 5^2$, so $\\sqrt{900} = 2\\times 3\\times 5 = 30$.

**Example 2.** Find $\\sqrt{6\\frac{1}{4}}$. *Solution:* $\\sqrt{\\frac{25}{4}} = \\frac{5}{2} = 2\\frac{1}{2}$.

**Example 3.** A square garden has area 324 m². How long is each side? *Answer:* $\\sqrt{324} = 18$ m.`,
        },
        questions: [
          ["E", "Find $15^2$.", "225", "30", "150", "125", "Squaring means multiplying the number by itself: 15 × 15 = 225."],
          ["E", "Find $\\sqrt{144}$.", "12", "14", "72", "16", "√144 = 12 because 12 × 12 = 144."],
          ["E", "Which of these is a perfect square?", "81", "50", "72", "90", "81 = 9 × 9; the others are not squares of whole numbers."],
          ["M", "Find $\\sqrt{900}$.", "30", "300", "90", "45", "√900 = 30 because 30 × 30 = 900."],
          ["M", "Find $\\sqrt{\\frac{49}{64}}$.", "$\\frac{7}{8}$", "$\\frac{7}{64}$", "$\\frac{49}{8}$", "$\\frac{8}{7}$", "Take the square root of the numerator and of the denominator."],
          ["M", "Find $\\sqrt{0.09}$.", "0.3", "0.03", "0.9", "0.003", "0.09 = 9/100 and √(9/100) = 3/10 = 0.3."],
          ["M", "Use prime factors to find $\\sqrt{196}$.", "14", "13", "16", "98", "196 = 2 × 2 × 7 × 7; take one factor from each pair: 2 × 7 = 14."],
          ["H", "Find $\\sqrt{6\\frac{1}{4}}$.", "$2\\frac{1}{2}$", "$6\\frac{1}{2}$", "$3\\frac{1}{8}$", "$2\\frac{1}{4}$", "$6\\frac{1}{4} = \\frac{25}{4}$ and $\\sqrt{\\frac{25}{4}} = \\frac{5}{2} = 2\\frac{1}{2}$."],
          ["H", "The area of a square is 324 cm². What is the length of one side?", "18 cm", "81 cm", "16 cm", "162 cm", "Side = √324 = 18 cm."],
          ["H", "What is the smallest whole number by which 72 must be multiplied to give a perfect square?", "2", "3", "6", "8", "72 = 2³ × 3². One 2 is unpaired, so multiply by 2: 144 = 12²."],
        ],
      },
      {
        week: 3,
        title: "Percentage increase and decrease",
        subtopics: ["Increasing a quantity by a percentage", "Decreasing a quantity by a percentage", "Finding the percentage change", "Reverse percentages"],
        objectives: ["Increase or decrease a quantity by a given percentage", "Use multipliers for percentage change", "Calculate percentage increase and decrease", "Find the original quantity after a percentage change"],
        lesson: {
          title: "Percentage Change",
          summary: "Increase and decrease amounts by percentages, find percentage changes and work backwards to original values.",
          minutes: 40,
          notes: `## Multipliers
- To **increase** by $p\\%$, multiply by $\\frac{100 + p}{100}$. A 15% increase uses the multiplier 1.15.
- To **decrease** by $p\\%$, multiply by $\\frac{100 - p}{100}$. A 25% decrease uses the multiplier 0.75.
$₦500$ increased by 10% $= 500\\times 1.1 = ₦550$.

## Percentage change
$\\text{Percentage change} = \\frac{\\text{change}}{\\text{original value}}\\times 100\\%$
Always divide by the **original** value.
A price rising from ₦2,000 to ₦2,500 is an increase of $\\frac{500}{2000}\\times 100\\% = 25\\%$.

## Reverse percentages
If you know the value **after** the change, divide by the multiplier to get the original.
After a 20% rise the price is ₦6,000, so the original price was $6000\\div 1.2 = ₦5000$.
(Do **not** just take 20% off ₦6,000 — that gives ₦4,800, which is wrong.)

## Successive changes
Changes are applied one after the other, so multiply the multipliers: a 10% rise followed by a 10% fall gives $1.1\\times 0.9 = 0.99$ — an overall **1% decrease**, not "no change".`,
          examples: `**Example 1.** A population of 12,000 falls by 5%. *Answer:* $12{,}000\\times 0.95 = 11{,}400$.

**Example 2.** A salary rises from ₦45,000 to ₦50,400. Find the percentage increase.
*Solution:* $\\frac{5400}{45000}\\times 100\\% = 12\\%$.

**Example 3.** A car worth ₦2,000,000 loses 15% of its value in a year. *Answer:* $2{,}000{,}000\\times 0.85 = ₦1{,}700{,}000$.`,
        },
        questions: [
          ["E", "Increase ₦500 by 10%.", "₦550", "₦510", "₦450", "₦600", "₦500 × 1.1 = ₦550."],
          ["E", "Decrease 80 kg by 25%.", "60 kg", "55 kg", "100 kg", "20 kg", "25% of 80 is 20, so 80 − 20 = 60 kg."],
          ["E", "To increase an amount by 15%, multiply it by", "1.15", "0.15", "15", "0.85", "100% + 15% = 115% = 1.15."],
          ["M", "A price rises from ₦2,000 to ₦2,500. What is the percentage increase?", "25%", "20%", "50%", "5%", "Increase = ₦500; 500 ÷ 2,000 × 100% = 25%."],
          ["M", "A town's population of 12,000 falls by 5%. What is the new population?", "11,400", "11,940", "600", "12,600", "12,000 × 0.95 = 11,400."],
          ["M", "A salary of ₦45,000 is increased by 12%. What is the new salary?", "₦50,400", "₦5,400", "₦45,012", "₦57,000", "45,000 × 1.12 = ₦50,400."],
          ["M", "A value falls from 250 to 200. What is the percentage decrease?", "20%", "25%", "50%", "80%", "Decrease = 50; 50 ÷ 250 × 100% = 20% (divide by the original value)."],
          ["H", "After a 20% increase, the price of a bag is ₦6,000. What was the original price?", "₦5,000", "₦4,800", "₦7,200", "₦5,800", "Original × 1.2 = 6,000, so original = 6,000 ÷ 1.2 = ₦5,000."],
          ["H", "A price is increased by 10% and then the new price is decreased by 10%. What is the overall change?", "A 1% decrease", "No change", "A 1% increase", "A 20% decrease", "1.1 × 0.9 = 0.99, which is 99% of the original — a 1% decrease."],
          ["H", "A car worth ₦2,000,000 loses 15% of its value in one year. What is it worth after the year?", "₦1,700,000", "₦300,000", "₦2,300,000", "₦1,985,000", "2,000,000 × 0.85 = ₦1,700,000."],
        ],
      },
      {
        week: 4,
        title: "Arithmetic in base two",
        subtopics: ["Addition of binary numbers", "Subtraction of binary numbers", "Multiplication of binary numbers", "Checking binary answers in base ten"],
        objectives: ["Add binary numbers, carrying correctly", "Subtract binary numbers, borrowing correctly", "Multiply binary numbers", "Check binary calculations by converting to base ten"],
        lesson: {
          title: "Adding, Subtracting and Multiplying in Base Two",
          summary: "Carry out arithmetic directly in binary and check the answers in base ten.",
          minutes: 40,
          notes: `## The binary facts
| Addition | Result |
|---|---|
| $0 + 0$ | $0$ |
| $0 + 1$ | $1$ |
| $1 + 1$ | $10_2$ (write 0, carry 1) |
| $1 + 1 + 1$ | $11_2$ (write 1, carry 1) |

## Addition
Add column by column from the **right**, carrying 1 whenever a column adds up to 2 or 3.
$1101_2 + 1011_2 = 11000_2$ (check: 13 + 11 = 24).

## Subtraction
When you subtract 1 from 0 you must **borrow** from the next column. A borrowed 1 is worth **two** in the column you borrow into.
$10000_2 - 1_2 = 1111_2$ (check: 16 − 1 = 15).

## Multiplication
Multiply as in base ten using $0\\times 1 = 0$ and $1\\times 1 = 1$, then **add** the partial products in binary.
$111_2\\times 11_2$: partial products $111$ and $1110$; their sum is $10101_2$ (check: 7 × 3 = 21).

## Always check
Convert the numbers and your answer to base ten to make sure they agree.`,
          examples: `**Example 1.** $101_2 + 11_2$. Right column: 1 + 1 = 10 (write 0, carry 1). Next: 0 + 1 + 1 = 10 (write 0, carry 1). Next: 1 + 1 = 10. *Answer:* $1000_2$ (5 + 3 = 8 ✓).

**Example 2.** $1101_2 - 110_2 = 111_2$ (13 − 6 = 7 ✓).

**Example 3.** $11_2\\times 101_2$: partial products $11$ and $1100$; sum $1111_2$ (3 × 5 = 15 ✓).`,
        },
        questions: [
          ["E", "What is $1_2 + 1_2$?", "$10_2$", "$2_2$", "$11_2$", "$0_2$", "1 + 1 = 2, which is written 10 in base two."],
          ["E", "Which of these is NOT a valid base two number?", "$1021_2$", "$1011_2$", "$111_2$", "$10000_2$", "Base two uses only the digits 0 and 1."],
          ["E", "Evaluate $101_2 + 11_2$.", "$1000_2$", "$112_2$", "$110_2$", "$1001_2$", "5 + 3 = 8 = 1000₂."],
          ["M", "Evaluate $1101_2 + 1011_2$.", "$11000_2$", "$10110_2$", "$11100_2$", "$10100_2$", "13 + 11 = 24 = 11000₂."],
          ["M", "Evaluate $1101_2 - 110_2$.", "$111_2$", "$101_2$", "$1011_2$", "$110_2$", "13 − 6 = 7 = 111₂."],
          ["M", "Evaluate $10000_2 - 1_2$.", "$1111_2$", "$11111_2$", "$1110_2$", "$1000_2$", "16 − 1 = 15 = 1111₂."],
          ["M", "Evaluate $11_2\\times 101_2$.", "$1111_2$", "$1101_2$", "$10111_2$", "$1011_2$", "3 × 5 = 15 = 1111₂."],
          ["H", "Evaluate $111_2\\times 11_2$.", "$10101_2$", "$11101_2$", "$10111_2$", "$1110_2$", "7 × 3 = 21 = 10101₂."],
          ["H", "Find $x$ if $101_2 + x = 1100_2$.", "$111_2$", "$110_2$", "$1001_2$", "$101_2$", "1100₂ = 12 and 101₂ = 5, so x = 7 = 111₂."],
          ["H", "What is $1010_2 + 110_2$ in base ten?", "16", "18", "14", "10,110", "1010₂ = 10 and 110₂ = 6; 10 + 6 = 16."],
        ],
      },
      {
        week: 5,
        title: "Multiplication and division of directed numbers",
        subtopics: ["Sign rules for multiplication", "Sign rules for division", "Powers of negative numbers", "Substitution with negative numbers"],
        objectives: ["State and apply the sign rules for multiplying directed numbers", "Divide directed numbers correctly", "Evaluate powers of negative numbers", "Substitute negative values into expressions"],
        lesson: {
          title: "Multiplying and Dividing Directed Numbers",
          summary: "Use the sign rules to multiply, divide and raise negative numbers to powers.",
          minutes: 35,
          notes: `## The sign rules
| Signs | Result |
|---|---|
| $(+)\\times(+)$ or $(+)\\div(+)$ | positive |
| $(-)\\times(-)$ or $(-)\\div(-)$ | positive |
| $(+)\\times(-)$ or $(-)\\div(+)$ | negative |
| $(-)\\times(+)$ or $(+)\\div(-)$ | negative |

**Same signs give a positive answer; different signs give a negative answer.**

## Several factors
Count the negative signs: an **even** number of negatives gives a positive product; an **odd** number gives a negative product.
$(-3)\\times(-2)\\times(-5) = -30$ (three negatives).

## Powers
$(-2)^2 = (-2)\\times(-2) = 4$ but $(-2)^3 = -8$. Even powers of a negative number are positive; odd powers are negative.
Note: $-2^2$ means $-(2^2) = -4$, which is different from $(-2)^2 = 4$.

## Substitution
Put negative values in **brackets** when substituting: if $x = -2$, then $x^2 - 3x = (-2)^2 - 3(-2) = 4 + 6 = 10$.`,
          examples: `**Example 1.** $(-36)\\div(-9) = 4$ (same signs).

**Example 2.** $(-2)^2\\times(-3) = 4\\times(-3) = -12$.

**Example 3.** $\\frac{(-12)\\times 3}{-4} = \\frac{-36}{-4} = 9$.

**Example 4.** The temperature falls 3 °C every hour for 5 hours from 4 °C: $4 + 5\\times(-3) = -11$ °C.`,
        },
        questions: [
          ["E", "Evaluate $(-4)\\times(-5)$.", "20", "−20", "9", "−9", "Same signs give a positive product."],
          ["E", "Evaluate $(-24)\\div 6$.", "−4", "4", "−18", "−30", "Different signs give a negative quotient: 24 ÷ 6 = 4, so −4."],
          ["E", "The product of two negative numbers is always", "positive", "negative", "zero", "equal to 1", "(−) × (−) = (+)."],
          ["M", "Evaluate $(-36)\\div(-9)$.", "4", "−4", "−45", "27", "Same signs give a positive answer: 36 ÷ 9 = 4."],
          ["M", "Evaluate $(-2)^3$.", "−8", "8", "−6", "6", "(−2) × (−2) × (−2) = 4 × (−2) = −8."],
          ["M", "Evaluate $(-3)\\times(-2)\\times(-5)$.", "−30", "30", "−10", "10", "Three negative signs (an odd number) give a negative product: 3 × 2 × 5 = 30."],
          ["M", "Evaluate $(-2)^2\\times(-3)$.", "−12", "12", "−36", "36", "(−2)² = 4 and 4 × (−3) = −12."],
          ["H", "Evaluate $\\frac{(-12)\\times 3}{-4}$.", "9", "−9", "−12", "12", "(−12) × 3 = −36, and −36 ÷ −4 = 9."],
          ["H", "Find the value of $x^2 - 3x$ when $x = -2$.", "10", "−2", "2", "−10", "(−2)² − 3(−2) = 4 + 6 = 10."],
          ["H", "The temperature is 4 °C and falls by 3 °C every hour for 5 hours. What is the final temperature?", "−11 °C", "−15 °C", "19 °C", "−19 °C", "4 + 5 × (−3) = 4 − 15 = −11 °C."],
        ],
      },
      {
        week: 6,
        title: "Direct and inverse proportion",
        subtopics: ["Direct proportion", "Inverse proportion", "Increasing and decreasing in a given ratio", "Rates and time problems"],
        objectives: ["Distinguish between direct and inverse proportion", "Solve direct proportion problems", "Solve inverse proportion problems", "Increase or decrease quantities in a given ratio"],
        lesson: {
          title: "Direct and Inverse Proportion",
          summary: "Recognise and solve problems where quantities change together or in opposite directions.",
          minutes: 40,
          notes: `## Direct proportion
Two quantities are in **direct proportion** when they increase or decrease **together** at the same rate: doubling one doubles the other.
Examples: cost and number of items; distance and fuel used.
*Method:* find the value of **one** unit, then multiply.

## Inverse proportion
Two quantities are in **inverse proportion** when one **increases** as the other **decreases**: doubling one halves the other. Their **product stays the same**.
Examples: number of workers and time to finish a job; speed and time for a fixed journey.
*Method:* find the total "work" (product), then divide.
6 men take 10 days, so the job is $6\\times 10 = 60$ man-days; 4 men take $60\\div 4 = 15$ days.

## Changing in a ratio
- To **increase** 45 in the ratio 5 : 3, multiply by $\\frac{5}{3}$: $45\\times\\frac{5}{3} = 75$.
- To **decrease** 120 in the ratio 2 : 3, multiply by $\\frac{2}{3}$: $120\\times\\frac{2}{3} = 80$.

## Ask yourself
"If one quantity goes up, does the other go up (direct) or down (inverse)?" This decides whether you multiply or divide.`,
          examples: `**Example 1.** A car uses 8 litres for 96 km. How far will it go on 30 litres?
*Solution:* 1 litre → 12 km, so 30 litres → **360 km** (direct).

**Example 2.** Food lasts 20 students for 12 days. How long will it last 24 students?
*Solution:* $20\\times 12 = 240$ student-days; $240\\div 24 = $ **10 days** (inverse).

**Example 3.** A journey takes 3 hours at 60 km/h. How long at 90 km/h? *Solution:* distance 180 km; $180\\div 90 = $ **2 hours**.`,
        },
        questions: [
          ["E", "If 3 books cost ₦2,700, how much do 5 books cost?", "₦4,500", "₦4,000", "₦13,500", "₦900", "One book costs ₦900, so 5 books cost ₦4,500."],
          ["E", "Which of these is an example of inverse proportion?", "More workers take less time to finish a job", "More pens cost more money", "A longer journey uses more fuel", "More hours worked earns more pay", "As the number of workers increases, the time decreases."],
          ["E", "Share 45 in the ratio 4 : 5. What is the larger part?", "25", "20", "36", "9", "One part = 45 ÷ 9 = 5; the larger part is 5 × 5 = 25."],
          ["M", "6 men can build a wall in 10 days. How long would 4 men take at the same rate?", "15 days", "$6\\frac{2}{3}$ days", "20 days", "12 days", "The job is 60 man-days; 60 ÷ 4 = 15 days."],
          ["M", "A car uses 8 litres of fuel for 96 km. How far can it travel on 30 litres?", "360 km", "256 km", "320 km", "300 km", "96 ÷ 8 = 12 km per litre; 12 × 30 = 360 km."],
          ["M", "Increase 45 in the ratio 5 : 3.", "75", "27", "50", "53", "To increase in the ratio 5 : 3, multiply by 5/3: 45 × 5/3 = 75."],
          ["M", "Decrease 120 in the ratio 2 : 3.", "80", "180", "60", "100", "120 × 2/3 = 80."],
          ["H", "8 pumps can empty a tank in 9 hours. How many pumps are needed to empty it in 6 hours?", "12", "6", "11", "10", "8 × 9 = 72 pump-hours; 72 ÷ 6 = 12 pumps."],
          ["H", "Food lasts 20 students for 12 days. If 4 more students join, how long will it last?", "10 days", "14 days", "8 days", "16 days", "20 × 12 = 240 student-days; 240 ÷ 24 = 10 days."],
          ["H", "A journey takes 3 hours at 60 km/h. How long does it take at 90 km/h?", "2 hours", "4.5 hours", "1.5 hours", "2.5 hours", "Distance = 180 km; 180 ÷ 90 = 2 hours."],
        ],
      },
      {
        week: 7,
        title: "Commission, discount and VAT",
        subtopics: ["Commission", "Discount and sale price", "Value Added Tax (VAT)", "Combined problems"],
        objectives: ["Calculate commission earned on sales", "Calculate discounts and sale prices", "Calculate VAT and prices including VAT", "Work backwards from a final price to the original price"],
        lesson: {
          title: "Commission, Discount and VAT",
          summary: "Apply percentages to commission, discounts and Value Added Tax in real transactions.",
          minutes: 40,
          notes: `## Commission
A **commission** is payment to an agent or salesperson calculated as a percentage of the value of goods sold.
5% commission on sales of ₦80,000 = $\\frac{5}{100}\\times 80{,}000 = ₦4{,}000$.

## Discount
A **discount** is a reduction in the marked (list) price.
Sale price = marked price − discount = marked price × $\\frac{100 - d}{100}$.
A 15% discount on ₦12,000 gives $12{,}000\\times 0.85 = ₦10{,}200$.

## Value Added Tax (VAT)
**VAT** is a tax added to the price of many goods and services. In Nigeria the VAT rate has been **7.5%** since 2020.
Price including VAT = price × 1.075. On ₦8,000: $8000\\times 1.075 = ₦8{,}600$.

## Working backwards
If ₦4,300 **includes** 7.5% VAT, the price before VAT is $4300\\div 1.075 = ₦4{,}000$.

## Order matters in combined problems
Apply each step to the **result of the previous step**: a 10% discount on ₦10,000 gives ₦9,000; then 7.5% VAT gives $9000\\times 1.075 = ₦9{,}675$.`,
          examples: `**Example 1.** A salesman earns ₦2,500 commission at 5%. What was the value of his sales?
*Solution:* $2500\\div 0.05 = ₦50{,}000$.

**Example 2.** Commission is 3% on the first ₦100,000 of sales and 5% on the rest. Find the commission on sales of ₦250,000.
*Solution:* $3000 + 0.05\\times 150{,}000 = 3000 + 7500 = ₦10{,}500$.

**Example 3.** A trader's cost is ₦5,000. She wants a 20% profit even after giving a 20% discount. What should the marked price be?
*Solution:* selling price = ₦6,000 = 80% of the marked price, so marked price = $6000\\div 0.8 = ₦7{,}500$.`,
        },
        questions: [
          ["E", "An agent earns 5% commission on sales of ₦80,000. How much commission does he earn?", "₦4,000", "₦400", "₦40,000", "₦16,000", "5% of 80,000 = 0.05 × 80,000 = ₦4,000."],
          ["E", "What is 7.5% VAT on ₦2,000?", "₦150", "₦15", "₦750", "₦1,500", "0.075 × 2,000 = ₦150."],
          ["E", "A reduction in the marked price of an item is called", "a discount", "a commission", "VAT", "interest", "Discounts reduce the price the customer pays."],
          ["M", "An item costs ₦8,000 before 7.5% VAT is added. What is the total price?", "₦8,600", "₦8,075", "₦600", "₦7,400", "8,000 × 1.075 = ₦8,600."],
          ["M", "An item marked ₦12,000 is sold at a 15% discount. What is the sale price?", "₦10,200", "₦1,800", "₦13,800", "₦11,850", "12,000 × 0.85 = ₦10,200."],
          ["M", "A salesman receives ₦2,500 commission at a rate of 5%. What is the value of the goods he sold?", "₦50,000", "₦12,500", "₦125,000", "₦5,000", "2,500 ÷ 0.05 = ₦50,000."],
          ["M", "An item marked ₦10,000 is given a 10% discount, and then 7.5% VAT is charged on the discounted price. What does the customer pay?", "₦9,675", "₦9,750", "₦9,000", "₦10,750", "10,000 × 0.9 = 9,000; 9,000 × 1.075 = ₦9,675."],
          ["H", "A trader buys goods for ₦5,000. She wants to give a 20% discount and still make a 20% profit. What should the marked price be?", "₦7,500", "₦7,200", "₦6,000", "₦8,000", "Required selling price = ₦6,000 = 80% of the marked price; 6,000 ÷ 0.8 = ₦7,500."],
          ["H", "Commission is paid at 3% on the first ₦100,000 of sales and 5% on the remainder. What is the commission on sales of ₦250,000?", "₦10,500", "₦12,500", "₦7,500", "₦8,000", "3% of 100,000 = 3,000 and 5% of 150,000 = 7,500; total ₦10,500."],
          ["H", "The price of a phone including 7.5% VAT is ₦4,300. What was the price before VAT?", "₦4,000", "₦3,977.50", "₦4,622.50", "₦3,800", "4,300 ÷ 1.075 = ₦4,000."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Expansion of algebraic expressions",
        subtopics: ["Multiplying a bracket by a term", "Multiplying two binomials", "Squares of binomials", "Using expansion in calculations"],
        objectives: ["Expand a bracket multiplied by a single term", "Expand the product of two binomials", "Expand perfect squares and the difference of two squares", "Use expansions to simplify numerical calculations"],
        lesson: {
          title: "Expanding Brackets",
          summary: "Multiply out single and double brackets and recognise special products.",
          minutes: 40,
          notes: `## One bracket
Multiply **every** term inside by the term outside: $2a(3a - 4) = 6a^2 - 8a$.

## Two binomials
Each term in the first bracket multiplies each term in the second (four products — remember **F**irst, **O**uter, **I**nner, **L**ast):
$(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$
$(2x + 1)(x - 3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3$

## Special products
- $(a + b)^2 = a^2 + 2ab + b^2$
- $(a - b)^2 = a^2 - 2ab + b^2$
- $(a + b)(a - b) = a^2 - b^2$ (the **difference of two squares**)
A common mistake is writing $(a + b)^2 = a^2 + b^2$ — the middle term $2ab$ must not be forgotten.

## Using expansions in arithmetic
$101^2 = (100 + 1)^2 = 10000 + 200 + 1 = 10201$
$98\\times 102 = (100 - 2)(100 + 2) = 10000 - 4 = 9996$`,
          examples: `**Example 1.** Expand $(x - 4)(x + 2)$. *Solution:* $x^2 + 2x - 4x - 8 = x^2 - 2x - 8$.

**Example 2.** Expand $(3x - 2)(3x + 2)$. *Solution:* difference of two squares: $9x^2 - 4$.

**Example 3.** Find the coefficient of $x$ in $(2x - 3)(x + 4)$. *Solution:* $8x - 3x = 5x$, so the coefficient is **5**.`,
        },
        questions: [
          ["E", "Expand $5(2p - q)$.", "$10p - 5q$", "$10p - q$", "$7p - 5q$", "$10p + 5q$", "Multiply both terms by 5."],
          ["E", "Expand $(x + 3)(x + 5)$.", "$x^2 + 8x + 15$", "$x^2 + 15$", "$x^2 + 8x + 8$", "$2x + 8$", "x² + 5x + 3x + 15 = x² + 8x + 15."],
          ["E", "Expand $2a(3a - 4)$.", "$6a^2 - 8a$", "$6a^2 - 4$", "$5a^2 - 8a$", "$6a - 8$", "2a × 3a = 6a² and 2a × (−4) = −8a."],
          ["M", "Expand $(x - 4)(x + 2)$.", "$x^2 - 2x - 8$", "$x^2 + 2x - 8$", "$x^2 - 6x - 8$", "$x^2 - 2x + 8$", "x² + 2x − 4x − 8 = x² − 2x − 8."],
          ["M", "Expand $(2x + 1)(x - 3)$.", "$2x^2 - 5x - 3$", "$2x^2 - 7x - 3$", "$2x^2 - 5x + 3$", "$2x^2 + 5x - 3$", "2x² − 6x + x − 3 = 2x² − 5x − 3."],
          ["M", "Expand $(a + b)^2$.", "$a^2 + 2ab + b^2$", "$a^2 + b^2$", "$a^2 + ab + b^2$", "$2a + 2b$", "(a + b)(a + b) = a² + ab + ab + b²."],
          ["M", "Expand $(x - 5)^2$.", "$x^2 - 10x + 25$", "$x^2 - 25$", "$x^2 + 25$", "$x^2 - 10x - 25$", "(x − 5)(x − 5) = x² − 5x − 5x + 25."],
          ["H", "Expand $(3x - 2)(3x + 2)$.", "$9x^2 - 4$", "$9x^2 + 4$", "$9x^2 - 12x - 4$", "$6x^2 - 4$", "This is a difference of two squares: (3x)² − 2² = 9x² − 4."],
          ["H", "What is the coefficient of $x$ in the expansion of $(2x - 3)(x + 4)$?", "5", "−5", "11", "8", "The x terms are 8x and −3x, which give 5x."],
          ["H", "Use the expansion of $(100 + 1)^2$ to find $101^2$.", "10,201", "10,101", "10,001", "10,020", "(100 + 1)² = 10,000 + 200 + 1 = 10,201."],
        ],
      },
      {
        week: 2,
        title: "Factorisation of simple expressions",
        subtopics: ["Highest common factor of terms", "Factorising by taking out common factors", "Factorisation by grouping", "Using factorisation to simplify calculations"],
        objectives: ["Find the HCF of algebraic terms", "Factorise expressions completely by taking out the HCF", "Factorise four-term expressions by grouping", "Use factorisation to simplify expressions and calculations"],
        lesson: {
          title: "Factorising Expressions",
          summary: "Reverse expansion by taking out common factors and by grouping.",
          minutes: 40,
          notes: `## Factorising is the reverse of expanding
Expanding: $3(2x + 3) = 6x + 9$. Factorising: $6x + 9 = 3(2x + 3)$.

## Taking out the HCF
1. Find the **HCF** of the numbers and of the letters in every term.
2. Write the HCF outside the bracket.
3. Divide each term by the HCF to get what goes inside.
$12a^2b - 8ab^2 = 4ab(3a - 2b)$
**Factorise completely** means the bracket contains no further common factor. $2(2x^2 - 3x)$ is not complete; $2x(2x - 3)$ is.

## Grouping (four terms)
Group the terms in pairs that share a factor, factorise each pair, then take out the common bracket:
$xy + 3x + 2y + 6 = x(y + 3) + 2(y + 3) = (x + 2)(y + 3)$
$2ax - 6ay + bx - 3by = 2a(x - 3y) + b(x - 3y) = (2a + b)(x - 3y)$

## Check by expanding
Multiply your answer out — it must give the original expression.

## Numerical shortcuts
$47\\times 13 + 47\\times 7 = 47(13 + 7) = 47\\times 20 = 940$`,
          examples: `**Example 1.** Factorise $4x^2 - 6x$. *Answer:* $2x(2x - 3)$.

**Example 2.** Factorise $ab + ac$. *Answer:* $a(b + c)$.

**Example 3.** Simplify $\\frac{6x^2 + 9x}{3x}$. *Solution:* $\\frac{3x(2x + 3)}{3x} = 2x + 3$.`,
        },
        questions: [
          ["E", "Factorise $6x + 9$.", "$3(2x + 3)$", "$6(x + 3)$", "$3(2x + 9)$", "$9(x + 1)$", "The HCF of 6x and 9 is 3."],
          ["E", "Factorise $ab + ac$.", "$a(b + c)$", "$ab(1 + c)$", "$b(a + c)$", "$a(bc)$", "a is common to both terms."],
          ["E", "What is the HCF of $8x$ and $12$?", "4", "2", "$8x$", "24", "The largest number dividing both 8 and 12 is 4; x is not in both terms."],
          ["M", "Factorise $4x^2 - 6x$ completely.", "$2x(2x - 3)$", "$2x(2x - 6)$", "$4x(x - 6)$", "$2(x - 3)$", "The HCF is 2x: 4x² ÷ 2x = 2x and 6x ÷ 2x = 3."],
          ["M", "Factorise $12a^2b - 8ab^2$ completely.", "$4ab(3a - 2b)$", "$4ab(3a + 2b)$", "$2ab(6a - 2b)$", "$4ab(3b - 2a)$", "The HCF is 4ab: 12a²b ÷ 4ab = 3a and 8ab² ÷ 4ab = 2b."],
          ["M", "Factorise $xy + 3x + 2y + 6$.", "$(x + 2)(y + 3)$", "$(x + 3)(y + 2)$", "$(x + 6)(y + 1)$", "$(x + 1)(y + 6)$", "x(y + 3) + 2(y + 3) = (x + 2)(y + 3)."],
          ["M", "Factorise $p^2 - pq$.", "$p(p - q)$", "$p(1 - q)$", "$q(p - q)$", "$p^2(1 - q)$", "p is common: p × p − p × q."],
          ["H", "Factorise $2ax - 6ay + bx - 3by$.", "$(2a + b)(x - 3y)$", "$(2a - b)(x + 3y)$", "$(2a + b)(x + 3y)$", "$(a + b)(2x - 3y)$", "2a(x − 3y) + b(x − 3y) = (2a + b)(x − 3y)."],
          ["H", "Simplify $\\frac{6x^2 + 9x}{3x}$.", "$2x + 3$", "$2x + 9$", "$6x + 3$", "$3x + 3$", "6x² + 9x = 3x(2x + 3); dividing by 3x leaves 2x + 3."],
          ["H", "Use factorisation to evaluate $47\\times 13 + 47\\times 7$.", "940", "611", "329", "1,034", "47(13 + 7) = 47 × 20 = 940."],
        ],
      },
      {
        week: 3,
        title: "Linear equations involving fractions",
        subtopics: ["Clearing fractions with the LCM", "Equations with one fraction", "Equations with fractions on both sides", "Word problems with fractions"],
        objectives: ["Multiply through by the LCM of the denominators to clear fractions", "Solve linear equations with fractional terms", "Solve equations with fractions on both sides", "Form and solve equations from word problems involving fractions"],
        lesson: {
          title: "Equations with Fractions",
          summary: "Clear fractions using the LCM and solve the resulting linear equations.",
          minutes: 40,
          notes: `## Clear the fractions first
Multiply **every term on both sides** by the **LCM of the denominators**. The fractions disappear and you are left with an ordinary linear equation.

$\\frac{x}{2} + \\frac{x}{3} = 10$
LCM of 2 and 3 is 6: $3x + 2x = 60$, so $5x = 60$ and $x = 12$.

## Brackets are important
When a numerator has more than one term, keep it in a bracket:
$\\frac{2x + 3}{4} - \\frac{x - 1}{3} = 2$
Multiply by 12: $3(2x + 3) - 4(x - 1) = 24$
$6x + 9 - 4x + 4 = 24 \\Rightarrow 2x = 11 \\Rightarrow x = 5.5$
Notice that $-4(x - 1) = -4x + 4$: the minus sign affects **both** terms.

## Fractions on both sides
Cross-multiplying is a quick way to multiply by both denominators:
$\\frac{x + 1}{2} = \\frac{x - 1}{3} \\Rightarrow 3(x + 1) = 2(x - 1) \\Rightarrow x = -5$

## Check
Substitute your answer back into the **original** equation.`,
          examples: `**Example 1.** Solve $\\frac{2x - 1}{5} = 3$. *Solution:* $2x - 1 = 15$, $2x = 16$, $x = 8$.

**Example 2.** Solve $\\frac{3x}{4} - \\frac{x}{6} = 7$. *Solution:* × 12: $9x - 2x = 84$, $7x = 84$, $x = 12$.

**Example 3.** Half of a number added to a third of it gives 15. Find the number.
*Solution:* $\\frac{x}{2} + \\frac{x}{3} = 15 \\Rightarrow 5x = 90 \\Rightarrow x = 18$.`,
        },
        questions: [
          ["E", "Solve $\\frac{x}{5} = 3$.", "$x = 15$", "$x = \\frac{3}{5}$", "$x = 8$", "$x = 2$", "Multiply both sides by 5."],
          ["E", "Solve $\\frac{x + 2}{3} = 4$.", "$x = 10$", "$x = 12$", "$x = 14$", "$x = 2$", "x + 2 = 12, so x = 10."],
          ["E", "To clear the fractions in $\\frac{x}{3} + \\frac{x}{4} = 7$, multiply every term by", "12", "7", "3", "4", "12 is the LCM of 3 and 4."],
          ["M", "Solve $\\frac{x}{2} + \\frac{x}{3} = 10$.", "$x = 12$", "$x = 60$", "$x = 6$", "$x = 2$", "× 6: 3x + 2x = 60, so 5x = 60 and x = 12."],
          ["M", "Solve $\\frac{2x - 1}{5} = 3$.", "$x = 8$", "$x = 7$", "$x = 16$", "$x = 2$", "2x − 1 = 15, 2x = 16, x = 8."],
          ["M", "Solve $\\frac{x}{4} - 1 = 2$.", "$x = 12$", "$x = 4$", "$x = 8$", "$x = 3$", "x/4 = 3, so x = 12."],
          ["M", "Solve $\\frac{x + 1}{2} = \\frac{x - 1}{3}$.", "$x = -5$", "$x = 5$", "$x = -1$", "$x = 1$", "3(x + 1) = 2(x − 1) gives 3x + 3 = 2x − 2, so x = −5."],
          ["H", "Solve $\\frac{3x}{4} - \\frac{x}{6} = 7$.", "$x = 12$", "$x = 7$", "$x = 84$", "$x = 14$", "× 12: 9x − 2x = 84, so 7x = 84 and x = 12."],
          ["H", "Solve $\\frac{2x + 3}{4} - \\frac{x - 1}{3} = 2$.", "$x = 5.5$", "$x = 5$", "$x = 6.5$", "$x = 11$", "× 12: 3(2x + 3) − 4(x − 1) = 24, so 2x + 13 = 24 and x = 5.5."],
          ["H", "Half of a number added to a third of the number gives 15. What is the number?", "18", "30", "9", "90", "x/2 + x/3 = 15 gives 5x/6 = 15, so x = 18."],
        ],
      },
      {
        week: 4,
        title: "Linear inequalities",
        subtopics: ["Inequality symbols", "Showing inequalities on a number line", "Solving linear inequalities", "Double inequalities and integer solutions"],
        objectives: ["Read and use the symbols <, >, ≤ and ≥", "Represent inequalities on a number line", "Solve linear inequalities, reversing the sign when multiplying or dividing by a negative", "List integer values that satisfy an inequality"],
        lesson: {
          title: "Solving Inequalities",
          summary: "Solve linear inequalities, show their solutions on a number line and list whole-number solutions.",
          minutes: 40,
          notes: `## Inequality symbols
| Symbol | Meaning |
|---|---|
| $<$ | less than |
| $>$ | greater than |
| $\\le$ | less than or equal to |
| $\\ge$ | greater than or equal to |

## Number lines
- An **open circle** means the end value is **not** included ($<$ or $>$).
- A **closed (shaded) circle** means the end value **is** included ($\\le$ or $\\ge$).
- The arrow shows the direction of the solutions: $x > 2$ is an open circle at 2 with an arrow to the right.

## Solving
Solve like an equation — add, subtract, multiply or divide both sides — with **one important rule**:
**When you multiply or divide both sides by a negative number, reverse the inequality sign.**
$-2x > 8 \\Rightarrow x < -4$ (dividing by −2 reverses $>$ to $<$).

## Double inequalities
Do the same thing to all three parts:
$-3 \\le 2x + 1 < 7 \\Rightarrow -4 \\le 2x < 6 \\Rightarrow -2 \\le x < 3$

## Integer solutions
List the whole numbers in the range: $2 < x \\le 5$ gives $x = 3, 4, 5$.`,
          examples: `**Example 1.** Solve $3x - 2 \\le 10$. *Solution:* $3x \\le 12$, so $x \\le 4$.

**Example 2.** Solve $5 - x \\ge 2$. *Solution:* $-x \\ge -3$; dividing by −1 reverses the sign: $x \\le 3$.

**Example 3.** Find the largest integer $x$ such that $3x + 1 < 20$. *Solution:* $3x < 19$, $x < 6\\frac{1}{3}$, so the largest integer is **6**.`,
        },
        questions: [
          ["E", "Which symbol means 'greater than or equal to'?", "$\\ge$", "$\\le$", "$>$", "$\\ne$", "The line under > includes 'equal to'."],
          ["E", "Solve $x + 4 > 9$.", "$x > 5$", "$x > 13$", "$x < 5$", "$x \\ge 5$", "Subtract 4 from both sides."],
          ["E", "On a number line, $x > 2$ is shown by", "an open circle at 2 with an arrow to the right", "a closed circle at 2 with an arrow to the right", "an open circle at 2 with an arrow to the left", "a closed circle at 2 with an arrow to the left", "2 is not included (open circle) and the solutions are larger than 2 (to the right)."],
          ["M", "Solve $3x - 2 \\le 10$.", "$x \\le 4$", "$x \\le \\frac{8}{3}$", "$x \\ge 4$", "$x < 4$", "3x ≤ 12, so x ≤ 4."],
          ["M", "Solve $-2x > 8$.", "$x < -4$", "$x > -4$", "$x > 4$", "$x < 4$", "Dividing by −2 reverses the inequality sign."],
          ["M", "Which whole numbers satisfy $2 < x \\le 5$?", "3, 4, 5", "2, 3, 4, 5", "3, 4", "2, 3, 4", "2 is excluded (<) and 5 is included (≤)."],
          ["M", "Solve $5 - x \\ge 2$.", "$x \\le 3$", "$x \\ge 3$", "$x \\le -3$", "$x \\ge 7$", "−x ≥ −3; multiplying by −1 reverses the sign: x ≤ 3."],
          ["H", "Solve $2(x - 1) < x + 4$.", "$x < 6$", "$x > 6$", "$x < 2$", "$x < 3$", "2x − 2 < x + 4, so x < 6."],
          ["H", "What is the largest integer $x$ such that $3x + 1 < 20$?", "6", "7", "5", "19", "3x < 19 gives x < 6⅓, so the largest integer is 6."],
          ["H", "Solve $-3 \\le 2x + 1 < 7$.", "$-2 \\le x < 3$", "$-2 < x \\le 3$", "$-1 \\le x < 3$", "$-2 \\le x < 4$", "Subtract 1 from all parts: −4 ≤ 2x < 6; divide by 2: −2 ≤ x < 3."],
        ],
      },
      {
        week: 5,
        title: "The Cartesian plane",
        subtopics: ["Axes, origin and quadrants", "Plotting and reading coordinates", "Distances along grid lines", "Midpoints and simple shapes on a grid"],
        objectives: ["Draw and label the x- and y-axes", "Plot and read points in all four quadrants", "Find horizontal and vertical distances between points", "Find the midpoint of a line segment and areas of simple shapes on a grid"],
        lesson: {
          title: "Coordinates on the Cartesian Plane",
          summary: "Locate points using ordered pairs in all four quadrants and measure simple distances on a grid.",
          minutes: 40,
          notes: `## The Cartesian plane
Two perpendicular number lines: the horizontal **x-axis** and the vertical **y-axis**. They cross at the **origin** $O(0, 0)$ and divide the plane into four **quadrants**:
| Quadrant | Signs |
|---|---|
| First (top right) | $(+, +)$ |
| Second (top left) | $(-, +)$ |
| Third (bottom left) | $(-, -)$ |
| Fourth (bottom right) | $(+, -)$ |

## Coordinates
A point is written as an **ordered pair** $(x, y)$: go **along** the x-axis first, then **up or down**. In $(3, -2)$, 3 is the x-coordinate and −2 the y-coordinate. $(3, -2)$ and $(-2, 3)$ are different points.
- Points on the **x-axis** have $y = 0$; points on the **y-axis** have $x = 0$.

## Distances along grid lines
If two points have the same x-coordinate, the distance between them is the difference of their y-coordinates: $(2, 3)$ to $(2, 9)$ is 6 units.

## Midpoint
$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$ — average the x's and average the y's.

## Reflections
Reflecting in the x-axis changes the sign of $y$: $(4, -3) \\to (4, 3)$. Reflecting in the y-axis changes the sign of $x$.`,
          examples: `**Example 1.** In which quadrant is $(-4, 5)$? *Answer:* the second quadrant.

**Example 2.** Find the midpoint of $(2, 4)$ and $(8, 10)$. *Answer:* $(5, 7)$.

**Example 3.** $A(1, 1)$, $B(5, 1)$ and $C(5, 4)$ form a right-angled triangle. $AB = 4$, $BC = 3$, so its area is $\\frac{1}{2}\\times 4\\times 3 = 6$ square units.`,
        },
        questions: [
          ["E", "In the point $(3, -2)$, the number 3 is the", "x-coordinate", "y-coordinate", "origin", "gradient", "The first number of an ordered pair is the x-coordinate."],
          ["E", "What are the coordinates of the origin?", "$(0, 0)$", "$(1, 1)$", "$(0, 1)$", "$(1, 0)$", "The axes cross at (0, 0)."],
          ["E", "In which quadrant does $(-4, 5)$ lie?", "Second", "First", "Third", "Fourth", "x is negative and y is positive: the second quadrant."],
          ["M", "What is the distance between $(2, 3)$ and $(2, 9)$?", "6 units", "12 units", "5 units", "11 units", "The x-coordinates are equal, so the distance is 9 − 3 = 6."],
          ["M", "Find the midpoint of $(2, 4)$ and $(8, 10)$.", "$(5, 7)$", "$(6, 6)$", "$(10, 14)$", "$(3, 3)$", "((2 + 8)/2, (4 + 10)/2) = (5, 7)."],
          ["M", "Which point lies on the y-axis?", "$(0, -3)$", "$(-3, 0)$", "$(3, 3)$", "$(1, -3)$", "Points on the y-axis have x = 0."],
          ["M", "Given $A(1, 1)$ and $B(5, 1)$, what is the length of AB?", "4 units", "3 units", "5 units", "6 units", "Same y-coordinate: 5 − 1 = 4."],
          ["H", "Find the area of the triangle with vertices $A(1, 1)$, $B(5, 1)$ and $C(5, 4)$.", "6 square units", "12 square units", "7 square units", "10 square units", "Base AB = 4, height BC = 3, area = ½ × 4 × 3 = 6."],
          ["H", "The point $(3, k)$ lies on the line $y = 2x - 1$. Find $k$.", "5", "7", "1", "2", "k = 2(3) − 1 = 5."],
          ["H", "The point $(4, -3)$ is reflected in the x-axis. What are the coordinates of its image?", "$(4, 3)$", "$(-4, -3)$", "$(-4, 3)$", "$(3, -4)$", "Reflection in the x-axis changes the sign of the y-coordinate."],
        ],
      },
      {
        week: 6,
        title: "Graphs of linear equations",
        subtopics: ["Tables of values", "Plotting straight-line graphs", "Intercepts with the axes", "Gradient and intersection of lines"],
        objectives: ["Complete a table of values for a linear equation", "Draw the graph of a linear equation", "Find where a line crosses the axes", "Find the gradient of a line and the point where two lines meet"],
        lesson: {
          title: "Straight-Line Graphs",
          summary: "Draw graphs of linear equations from tables of values and read intercepts, gradients and intersections.",
          minutes: 45,
          notes: `## Table of values
Choose some values of $x$, substitute into the equation and calculate $y$. For $y = 2x + 1$:
| $x$ | −1 | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|
| $y$ | −1 | 1 | 3 | 5 | 7 |

## Plotting
Plot each pair $(x, y)$ and join the points with a **ruler**. At least two points fix a straight line; a third point is a useful check.

## Intercepts
- The **y-intercept** is where the line crosses the y-axis: put $x = 0$. For $y = 3x - 2$ it is $(0, -2)$.
- The **x-intercept** is where the line crosses the x-axis: put $y = 0$. For $y = 2x - 6$: $0 = 2x - 6$, so $(3, 0)$.

## Gradient
The **gradient** measures steepness:
$m = \\frac{\\text{change in } y}{\\text{change in } x} = \\frac{y_2 - y_1}{x_2 - x_1}$
In $y = mx + c$, $m$ is the gradient and $c$ is the y-intercept.

## Special lines
$y = 3$ is a **horizontal** line; $x = 3$ is a **vertical** line.

## Where two lines meet
Read the point of intersection from the graph, or set the two expressions for $y$ equal: $x + 1 = 3 - x$ gives $x = 1$, $y = 2$.`,
          examples: `**Example 1.** Find the gradient of the line through $(1, 2)$ and $(3, 8)$. *Answer:* $\\frac{8 - 2}{3 - 1} = 3$.

**Example 2.** Write the equation of the line with gradient 2 passing through $(0, 1)$. *Answer:* $y = 2x + 1$.

**Example 3.** For $y = 4 - x$, find $y$ when $x = -1$. *Answer:* $4 - (-1) = 5$.`,
        },
        questions: [
          ["E", "For $y = 2x + 1$, find $y$ when $x = 3$.", "7", "6", "5", "9", "Substitute x = 3: y = 2(3) + 1 = 7."],
          ["E", "Which point lies on the line $y = x + 2$?", "$(1, 3)$", "$(3, 1)$", "$(2, 2)$", "$(0, -2)$", "When x = 1, y = 1 + 2 = 3."],
          ["E", "How many points are needed, at least, to draw a straight line?", "2", "1", "5", "10", "Two points fix a straight line; a third is a useful check."],
          ["M", "Where does the line $y = 3x - 2$ cross the y-axis?", "$(0, -2)$", "$(0, 3)$", "$(-2, 0)$", "$(\\frac{2}{3}, 0)$", "Put x = 0: y = −2."],
          ["M", "Where does the line $y = 2x - 6$ cross the x-axis?", "$(3, 0)$", "$(-6, 0)$", "$(0, -6)$", "$(-3, 0)$", "Put y = 0: 2x = 6, so x = 3."],
          ["M", "For $y = 4 - x$, what is $y$ when $x = -1$?", "5", "3", "−5", "−3", "Substitute x = −1: y = 4 − (−1) = 4 + 1 = 5."],
          ["M", "The graph of $y = 3$ is", "a horizontal line", "a vertical line", "a line through the origin", "a curve", "y is 3 for every value of x."],
          ["H", "Find the gradient of the line through $(1, 2)$ and $(3, 8)$.", "3", "2", "$\\frac{1}{3}$", "6", "(8 − 2) ÷ (3 − 1) = 6 ÷ 2 = 3."],
          ["H", "At which point do the lines $y = x + 1$ and $y = 3 - x$ meet?", "$(1, 2)$", "$(2, 1)$", "$(0, 1)$", "$(1, 0)$", "x + 1 = 3 − x gives x = 1, and y = 2."],
          ["H", "Which equation describes a line with gradient 2 passing through $(0, 1)$?", "$y = 2x + 1$", "$y = x + 2$", "$y = 2x - 1$", "$y = -2x + 1$", "y = mx + c with m = 2 and c = 1."],
        ],
      },
      {
        week: 7,
        title: "Formulae and change of subject",
        subtopics: ["Substituting into formulae", "Formulae from science and everyday life", "Changing the subject of a formula", "Formulae involving squares and fractions"],
        objectives: ["Evaluate a formula by substituting values", "Use common formulae for area, speed and temperature", "Change the subject of a simple formula", "Rearrange formulae involving fractions and squares"],
        lesson: {
          title: "Working with Formulae",
          summary: "Substitute into formulae and rearrange them to make a different letter the subject.",
          minutes: 40,
          notes: `## Formulae
A **formula** is a rule, written with letters, connecting quantities. Examples:
- Area of a rectangle: $A = lb$
- Perimeter of a rectangle: $P = 2(l + b)$
- Velocity: $v = u + at$
- Temperature: $F = \\frac{9C}{5} + 32$
The letter on its own on one side is the **subject** of the formula.

## Substitution
Replace each letter by its value (use brackets for negatives) and follow BODMAS.
$v = u + at$ with $u = 5$, $a = 2$, $t = 3$: $v = 5 + 2\\times 3 = 11$.

## Changing the subject
Treat the formula like an equation and use **inverse operations** to get the new subject on its own. Undo operations in the **reverse order** to that in which they were done to the letter.
$v = u + at$: subtract $u$, then divide by $a$ → $t = \\frac{v - u}{a}$
$C = 2\\pi r$: divide by $2\\pi$ → $r = \\frac{C}{2\\pi}$
$V = \\frac{1}{3}\\pi r^2 h$: multiply by 3, then divide by $\\pi r^2$ → $h = \\frac{3V}{\\pi r^2}$

## Check
Put numbers into the original and the rearranged formula — both must agree.`,
          examples: `**Example 1.** $F = \\frac{9C}{5} + 32$. Find $F$ when $C = 25$. *Answer:* $45 + 32 = 77$.

**Example 2.** $C = \\frac{5(F - 32)}{9}$. Find $C$ when $F = 212$. *Answer:* $\\frac{5\\times 180}{9} = 100$.

**Example 3.** Make $a$ the subject of $A = \\frac{1}{2}(a + b)h$.
*Solution:* $2A = (a + b)h \\Rightarrow \\frac{2A}{h} = a + b \\Rightarrow a = \\frac{2A}{h} - b$.`,
        },
        questions: [
          ["E", "If $A = lb$, find $A$ when $l = 8$ and $b = 5$.", "40", "13", "26", "3", "A = 8 × 5 = 40."],
          ["E", "Make $x$ the subject of $y = x + 7$.", "$x = y - 7$", "$x = y + 7$", "$x = 7 - y$", "$x = 7y$", "Subtract 7 from both sides."],
          ["E", "In the formula $P = 2(l + b)$, P stands for", "the perimeter of a rectangle", "the area of a rectangle", "the volume of a box", "the diagonal of a rectangle", "2(l + b) adds up all four sides."],
          ["M", "Make $r$ the subject of $C = 2\\pi r$.", "$r = \\frac{C}{2\\pi}$", "$r = 2\\pi C$", "$r = C - 2\\pi$", "$r = \\frac{2\\pi}{C}$", "Divide both sides by 2π."],
          ["M", "Given $v = u + at$, find $v$ when $u = 5$, $a = 2$ and $t = 3$.", "11", "21", "10", "13", "v = 5 + 2 × 3 = 11."],
          ["M", "Make $t$ the subject of $v = u + at$.", "$t = \\frac{v - u}{a}$", "$t = \\frac{v + u}{a}$", "$t = v - u - a$", "$t = a(v - u)$", "Subtract u, then divide by a."],
          ["M", "Given $F = \\frac{9C}{5} + 32$, find $F$ when $C = 25$.", "77", "45", "57", "13", "9 × 25 ÷ 5 = 45 and 45 + 32 = 77."],
          ["H", "Make $h$ the subject of $V = \\frac{1}{3}\\pi r^2 h$.", "$h = \\frac{3V}{\\pi r^2}$", "$h = \\frac{V}{3\\pi r^2}$", "$h = 3V\\pi r^2$", "$h = \\frac{\\pi r^2}{3V}$", "Multiply both sides by 3, then divide by πr²."],
          ["H", "Given $C = \\frac{5(F - 32)}{9}$, find $C$ when $F = 212$.", "100", "212", "180", "120", "5 × (212 − 32) ÷ 9 = 5 × 180 ÷ 9 = 100."],
          ["H", "Make $a$ the subject of $A = \\frac{1}{2}(a + b)h$.", "$a = \\frac{2A}{h} - b$", "$a = 2A - bh$", "$a = \\frac{2A - b}{h}$", "$a = \\frac{A}{2h} - b$", "2A = (a + b)h, so a + b = 2A/h and a = 2A/h − b."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Angles formed by parallel lines",
        subtopics: ["Parallel lines and transversals", "Corresponding angles", "Alternate angles", "Co-interior (allied) angles"],
        objectives: ["Identify pairs of angles formed when a transversal cuts parallel lines", "State that corresponding and alternate angles are equal", "State that co-interior angles add up to 180°", "Calculate unknown angles and give reasons"],
        lesson: {
          title: "Angles and Parallel Lines",
          summary: "Use corresponding, alternate and co-interior angles to find unknown angles.",
          minutes: 40,
          notes: `## Parallel lines and a transversal
**Parallel lines** never meet and stay the same distance apart. A **transversal** is a line that crosses them, forming eight angles.

## Angle pairs
| Pair | Shape | Rule |
|---|---|---|
| Corresponding angles | **F** shape | equal |
| Alternate angles | **Z** shape | equal |
| Co-interior (allied) angles | **C** (or U) shape | add up to 180° |
| Vertically opposite angles | **X** shape | equal |

## Using the rules
1. Identify the pair of angles and name the rule.
2. Write an equation.
3. Solve and state the reason, e.g. "$x = 65°$ (alternate angles)".

## Testing for parallel lines
The rules also work in reverse: if corresponding (or alternate) angles are equal, or co-interior angles add up to 180°, then the lines **are parallel**.`,
          examples: `**Example 1.** Two co-interior angles are $3x$ and $2x$. Find $x$. *Solution:* $5x = 180°$, so $x = 36°$.

**Example 2.** Alternate angles are $(2x + 10)°$ and $(3x - 20)°$. Find $x$. *Solution:* $2x + 10 = 3x - 20$, so $x = 30$.

**Example 3.** Co-interior angles are $(x + 30)°$ and $2x°$. Find both. *Solution:* $3x + 30 = 180$, $x = 50$; the angles are 80° and 100°.`,
        },
        questions: [
          ["E", "When a transversal cuts parallel lines, corresponding angles are", "equal", "supplementary", "complementary", "reflex", "Corresponding angles (F shape) are equal."],
          ["E", "Alternate angles form which letter shape?", "Z", "F", "C", "X", "Alternate angles lie in a Z shape."],
          ["E", "Co-interior (allied) angles add up to", "180°", "90°", "360°", "they are equal", "Co-interior angles are supplementary."],
          ["M", "An angle of 65° and angle $x$ are alternate angles between parallel lines. Find $x$.", "65°", "115°", "25°", "295°", "Alternate angles are equal."],
          ["M", "One of two co-interior angles is 110°. What is the other?", "70°", "110°", "250°", "20°", "Co-interior angles add up to 180°: 180° − 110° = 70°."],
          ["M", "A transversal cuts two parallel lines. One angle is 48°. What is its corresponding angle?", "48°", "132°", "42°", "312°", "Corresponding angles are equal."],
          ["M", "Two co-interior angles are $3x$ and $2x$. Find $x$.", "36°", "18°", "72°", "45°", "5x = 180°, so x = 36°."],
          ["H", "Alternate angles are $(2x + 10)°$ and $(3x - 20)°$. Find $x$.", "30", "38", "10", "34", "2x + 10 = 3x − 20, so x = 30."],
          ["H", "Co-interior angles are $(x + 30)°$ and $2x°$. What is the larger angle?", "100°", "80°", "50°", "150°", "3x + 30 = 180 gives x = 50; the angles are 80° and 100°."],
          ["H", "Two lines are cut by a transversal and a pair of alternate angles are equal. What can you conclude?", "The lines are parallel", "The lines are perpendicular", "The lines meet at 45°", "Nothing can be concluded", "Equal alternate angles show that the lines are parallel."],
        ],
      },
      {
        week: 2,
        title: "Angles in triangles and polygons",
        subtopics: ["Angle sum of a triangle", "Exterior angle of a triangle", "Interior angle sum of polygons", "Exterior angles of regular polygons"],
        objectives: ["Use the angle sum of a triangle to find unknown angles", "Apply the exterior angle property of a triangle", "Calculate the interior angle sum of any polygon", "Find the number of sides of a regular polygon from its angles"],
        lesson: {
          title: "Angle Sums of Triangles and Polygons",
          summary: "Find unknown angles in triangles and polygons using angle-sum facts.",
          minutes: 40,
          notes: `## Triangles
- The angles of a triangle add up to **180°**.
- An **exterior angle** equals the **sum of the two interior opposite angles**.
- In an isosceles triangle the base angles are equal: if the apex angle is 40°, each base angle is $\\frac{180° - 40°}{2} = 70°$.

## Interior angles of polygons
A polygon with $n$ sides can be split into $(n - 2)$ triangles from one vertex, so
$\\text{Sum of interior angles} = (n - 2)\\times 180°$
| Polygon | $n$ | Sum |
|---|---|---|
| Quadrilateral | 4 | 360° |
| Pentagon | 5 | 540° |
| Hexagon | 6 | 720° |
| Octagon | 8 | 1080° |

## Exterior angles
The exterior angles of **any** convex polygon add up to **360°**.
For a **regular** polygon: each exterior angle $= \\frac{360°}{n}$ and each interior angle $= 180° - $ exterior angle.

## Finding the number of sides
$n = \\frac{360°}{\\text{exterior angle}}$. An exterior angle of 30° gives $n = 12$.`,
          examples: `**Example 1.** Each interior angle of a regular pentagon: $540°\\div 5 = 108°$.

**Example 2.** Each exterior angle of a regular octagon: $360°\\div 8 = 45°$.

**Example 3.** A pentagon has angles $x$, $2x$, 100°, 110° and 120°. Find $x$.
*Solution:* $3x + 330° = 540°$, so $x = 70°$.`,
        },
        questions: [
          ["E", "The angles of a triangle add up to", "180°", "360°", "90°", "540°", "This is the angle sum of a triangle."],
          ["E", "The interior angles of a quadrilateral add up to", "360°", "180°", "540°", "720°", "(4 − 2) × 180° = 360°."],
          ["E", "The exterior angles of any convex polygon add up to", "360°", "180°", "540°", "a total that depends on the number of sides", "Walking once round any convex polygon turns you through 360°."],
          ["M", "What is the sum of the interior angles of a hexagon?", "720°", "540°", "1,080°", "360°", "(6 − 2) × 180° = 720°."],
          ["M", "What is each interior angle of a regular pentagon?", "108°", "72°", "120°", "90°", "540° ÷ 5 = 108°."],
          ["M", "What is each exterior angle of a regular octagon?", "45°", "135°", "40°", "60°", "360° ÷ 8 = 45°."],
          ["M", "An exterior angle of a triangle is equal to", "the sum of the two interior opposite angles", "the adjacent interior angle", "180°", "half the sum of the other two angles", "This is the exterior angle property."],
          ["H", "Each exterior angle of a regular polygon is 30°. How many sides does it have?", "12", "6", "10", "30", "n = 360° ÷ 30° = 12."],
          ["H", "The apex angle of an isosceles triangle is 40°. What is each base angle?", "70°", "40°", "140°", "80°", "(180° − 40°) ÷ 2 = 70°."],
          ["H", "The interior angles of a pentagon are $x$, $2x$, 100°, 110° and 120°. Find $x$.", "70°", "60°", "90°", "105°", "3x + 330° = 540°, so x = 70°."],
        ],
      },
      {
        week: 3,
        title: "Area of trapeziums and composite figures",
        subtopics: ["Area of a trapezium", "Area of a rhombus and a kite", "Areas of composite shapes", "Paths and borders"],
        objectives: ["Calculate the area of a trapezium", "Find the area of a rhombus or kite from its diagonals", "Split composite shapes into simple shapes to find their areas", "Solve problems involving paths and borders"],
        lesson: {
          title: "More Areas",
          summary: "Find areas of trapeziums, rhombuses, kites and shapes made from several parts.",
          minutes: 40,
          notes: `## Trapezium
A trapezium has one pair of parallel sides, $a$ and $b$, a distance $h$ apart:
$A = \\frac{1}{2}(a + b)h$
("half the sum of the parallel sides times the height").

## Rhombus and kite
If the diagonals are $d_1$ and $d_2$:
$A = \\frac{1}{2}d_1 d_2$

## Composite shapes
1. Split the shape into rectangles, triangles, trapeziums …
2. Find each area.
3. **Add** the parts — or **subtract** a part that has been cut away.
An L-shape made from a 10 cm by 8 cm rectangle with a 4 cm by 3 cm corner removed has area $80 - 12 = 68$ cm².

## Paths and borders
Area of path = area of outer rectangle − area of inner rectangle.
A 1 m wide path around a 10 m by 6 m garden: outer rectangle 12 m by 8 m; path area $= 96 - 60 = 36$ m².

## Units
Areas are always in **square units**; convert lengths to the same unit first.`,
          examples: `**Example 1.** A trapezium has parallel sides 6 cm and 10 cm and height 4 cm. *Area:* $\\frac{1}{2}(16)(4) = 32$ cm².

**Example 2.** A trapezium of area 45 cm² has parallel sides 7 cm and 8 cm. Find the height.
*Solution:* $45 = \\frac{1}{2}(15)h \\Rightarrow h = 6$ cm.

**Example 3.** A kite has diagonals 12 cm and 7 cm. *Area:* $\\frac{1}{2}\\times 12\\times 7 = 42$ cm².`,
        },
        questions: [
          ["E", "Which is the formula for the area of a trapezium with parallel sides $a$ and $b$ and height $h$?", "$\\frac{1}{2}(a + b)h$", "$(a + b)h$", "$\\frac{1}{2}ab$", "$a\\times b\\times h$", "Half the sum of the parallel sides times the height."],
          ["E", "Find the area of a trapezium with parallel sides 6 cm and 10 cm and height 4 cm.", "32 cm²", "64 cm²", "20 cm²", "240 cm²", "½ × (6 + 10) × 4 = 32 cm²."],
          ["E", "If lengths are measured in metres, area is measured in", "square metres", "metres", "cubic metres", "centimetres", "Area has square units."],
          ["M", "A trapezium has area 45 cm² and parallel sides 7 cm and 8 cm. What is its height?", "6 cm", "3 cm", "15 cm", "5 cm", "45 = ½ × 15 × h, so h = 6 cm."],
          ["M", "A rhombus has diagonals 10 cm and 8 cm. What is its area?", "40 cm²", "80 cm²", "18 cm²", "20 cm²", "½ × 10 × 8 = 40 cm²."],
          ["M", "A 4 cm by 3 cm rectangle is cut from the corner of a 10 cm by 8 cm rectangle. What area is left?", "68 cm²", "92 cm²", "80 cm²", "56 cm²", "80 − 12 = 68 cm²."],
          ["M", "Find the area of the triangle with vertices $(0, 0)$, $(6, 0)$ and $(0, 4)$.", "12 square units", "24 square units", "10 square units", "20 square units", "It is right-angled with legs 6 and 4: ½ × 6 × 4 = 12."],
          ["H", "A path 1 m wide runs around the outside of a rectangular garden 10 m by 6 m. What is the area of the path?", "36 m²", "32 m²", "16 m²", "34 m²", "Outer rectangle 12 m × 8 m = 96 m²; 96 − 60 = 36 m²."],
          ["H", "A trapezium has parallel sides $x$ cm and $(x + 4)$ cm, height 5 cm and area 40 cm². Find $x$.", "6", "8", "4", "10", "½(2x + 4)(5) = 40 gives 5(x + 2) = 40, so x = 6."],
          ["H", "A kite has diagonals of 12 cm and 7 cm. What is its area?", "42 cm²", "84 cm²", "19 cm²", "38 cm²", "½ × 12 × 7 = 42 cm²."],
        ],
      },
      {
        week: 4,
        title: "Circles: circumference and area",
        subtopics: ["Circumference and area revision", "Semicircles and quadrants", "The annulus (ring)", "Wheels and revolutions"],
        objectives: ["Calculate circumferences and areas of circles", "Find perimeters and areas of semicircles and quadrants", "Calculate the area of a ring (annulus)", "Solve problems involving wheels and revolutions"],
        lesson: {
          title: "Circles in Practice",
          summary: "Apply circumference and area formulae to semicircles, quadrants, rings and wheels.",
          minutes: 40,
          notes: `## The formulae
- Circumference: $C = 2\\pi r = \\pi d$
- Area: $A = \\pi r^2$
Use $\\pi = \\frac{22}{7}$ when the radius is a multiple of 7, otherwise 3.14.

## Parts of circles
| Shape | Area | Perimeter |
|---|---|---|
| Semicircle | $\\frac{1}{2}\\pi r^2$ | $\\pi r + 2r$ |
| Quadrant | $\\frac{1}{4}\\pi r^2$ | $\\frac{1}{2}\\pi r + 2r$ |
Remember to add the straight edges when finding perimeters.

## Annulus (ring)
The area between two circles with the same centre:
$A = \\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)$

## Working backwards
- From the area: $r = \\sqrt{\\frac{A}{\\pi}}$. An area of 154 cm² gives $r = 7$ cm.
- From the circumference: $r = \\frac{C}{2\\pi}$.

## Wheels
In one revolution a wheel travels a distance equal to its **circumference**.
Distance travelled $=$ circumference $\\times$ number of revolutions.`,
          examples: `**Example 1.** Perimeter of a semicircle of diameter 14 cm: $\\frac{22}{7}\\times 7 + 14 = 22 + 14 = 36$ cm.

**Example 2.** A ring has outer radius 7 cm and inner radius 3.5 cm. *Area:* $\\frac{22}{7}(49 - 12.25) = 115.5$ cm².

**Example 3.** A wheel of radius 35 cm makes 100 revolutions. *Distance:* $2\\times\\frac{22}{7}\\times 35 = 220$ cm per turn; $220\\times 100 = 22{,}000$ cm $= 220$ m.`,
        },
        questions: [
          ["E", "Find the circumference of a circle of radius 14 cm. (Take $\\pi = \\frac{22}{7}$.)", "88 cm", "44 cm", "616 cm", "176 cm", "2 × 22/7 × 14 = 88 cm."],
          ["E", "Find the area of a circle of radius 14 cm. (Take $\\pi = \\frac{22}{7}$.)", "616 cm²", "88 cm²", "1,232 cm²", "308 cm²", "22/7 × 14 × 14 = 616 cm²."],
          ["E", "Which value is a common approximation for $\\pi$?", "3.142", "2.718", "1.414", "4", "π ≈ 3.142 (or 22/7)."],
          ["M", "Find the area of a semicircle of radius 7 cm. (Take $\\pi = \\frac{22}{7}$.)", "77 cm²", "154 cm²", "22 cm²", "38.5 cm²", "Half of 22/7 × 7 × 7 = half of 154 = 77 cm²."],
          ["M", "Find the perimeter of a semicircle of diameter 14 cm. (Take $\\pi = \\frac{22}{7}$.)", "36 cm", "22 cm", "44 cm", "29 cm", "Curved part = 22 cm; add the diameter 14 cm: 36 cm."],
          ["M", "Find the area of a ring with outer radius 7 cm and inner radius 3.5 cm. (Take $\\pi = \\frac{22}{7}$.)", "115.5 cm²", "154 cm²", "38.5 cm²", "192.5 cm²", "154 − 38.5 = 115.5 cm²."],
          ["M", "The area of a circle is 154 cm². What is its radius? (Take $\\pi = \\frac{22}{7}$.)", "7 cm", "14 cm", "49 cm", "22 cm", "r² = 154 × 7/22 = 49, so r = 7 cm."],
          ["H", "A wheel of radius 35 cm makes 100 complete turns. How far does it travel? (Take $\\pi = \\frac{22}{7}$.)", "220 m", "22 m", "2,200 m", "110 m", "One turn = 220 cm; 100 turns = 22,000 cm = 220 m."],
          ["H", "The circumference of a circle is 44 cm. What is its area? (Take $\\pi = \\frac{22}{7}$.)", "154 cm²", "616 cm²", "88 cm²", "308 cm²", "r = 44 ÷ (2 × 22/7) = 7 cm; area = 154 cm²."],
          ["H", "Find the area of a quadrant (quarter circle) of radius 14 cm. (Take $\\pi = \\frac{22}{7}$.)", "154 cm²", "616 cm²", "308 cm²", "44 cm²", "¼ × 616 = 154 cm²."],
        ],
      },
      {
        week: 5,
        title: "Scale drawing",
        subtopics: ["Meaning of scale", "Scales written as ratios", "Finding real and drawing lengths", "Maps and areas on scale drawings"],
        objectives: ["Explain what a scale drawing is", "Write a scale as a ratio in the form 1 : n", "Convert between drawing lengths and real lengths", "Use map scales to find distances and areas"],
        lesson: {
          title: "Scale Drawings and Maps",
          summary: "Use scales to move between drawings or maps and real-life lengths and areas.",
          minutes: 40,
          notes: `## What is a scale drawing?
A **scale drawing** has the same **shape** as the real object but is smaller (or larger). Angles are unchanged; every length is multiplied by the same scale factor.

## Ways of writing a scale
- In words: *1 cm represents 5 m*.
- As a ratio: *1 : 500* (1 cm on the drawing is 500 cm, i.e. 5 m, in real life). Both parts are in the **same unit** and the ratio has no units.

## Converting
- Real length = drawing length × scale number (then change units).
- Drawing length = real length ÷ scale number.
With a scale of 1 : 25,000, 8 cm on the map is $8\\times 25{,}000 = 200{,}000$ cm $= 2$ km.

## Unit reminders
100 cm = 1 m; 1,000 m = 1 km; so 100,000 cm = 1 km.

## Areas on maps
If 1 cm represents $k$ km, then 1 cm² represents $k^2$ km². At 1 : 200,000, 1 cm = 2 km and 1 cm² = 4 km², so 3 cm² represents 12 km².`,
          examples: `**Example 1.** A room 6 m by 4 m is drawn at 1 cm to 2 m. *Drawing:* 3 cm by 2 cm.

**Example 2.** Two towns are 45 km apart and 9 cm apart on a map. Find the scale.
*Solution:* 9 cm : 4,500,000 cm = **1 : 500,000**.

**Example 3.** A model car is built to a scale of 1 : 20 and is 18 cm long. *Real length:* 360 cm = 3.6 m.`,
        },
        questions: [
          ["E", "A scale drawing uses 1 cm to represent 5 m. What does a 4 cm line represent?", "20 m", "9 m", "1.25 m", "45 m", "Each centimetre represents 5 m, so 4 cm represents 4 × 5 = 20 m."],
          ["E", "On a map with scale 1 : 50,000, 1 cm represents", "50,000 cm (0.5 km)", "50,000 km", "5 km", "50 m", "Both parts are in the same unit: 50,000 cm = 500 m = 0.5 km."],
          ["E", "Which statement about a scale drawing is true?", "It has the same shape as the real object", "It must be the same size as the object", "Its angles are changed by the scale", "It shows no measurements", "Only the size changes; angles and shape stay the same."],
          ["M", "The scale is 1 cm to 500 m. How long on the drawing is a real distance of 3 km?", "6 cm", "1.5 cm", "60 cm", "0.6 cm", "3 km = 3,000 m; 3,000 ÷ 500 = 6 cm."],
          ["M", "On a map with scale 1 : 25,000, two places are 8 cm apart. How far apart are they really?", "2 km", "20 km", "0.2 km", "200 km", "8 × 25,000 = 200,000 cm = 2 km."],
          ["M", "A room 6 m by 4 m is drawn to a scale of 1 cm to 2 m. What are the dimensions on the drawing?", "3 cm by 2 cm", "12 cm by 8 cm", "6 cm by 4 cm", "1.5 cm by 1 cm", "6 ÷ 2 = 3 and 4 ÷ 2 = 2."],
          ["M", "A model car is made to a scale of 1 : 20. The model is 18 cm long. How long is the real car?", "3.6 m", "38 cm", "0.9 m", "36 m", "18 × 20 = 360 cm = 3.6 m."],
          ["H", "On a plan, 5 cm represents 20 m. Write the scale as a ratio in the form 1 : n.", "1 : 400", "1 : 4", "1 : 40", "1 : 4,000", "20 m = 2,000 cm, so 5 : 2,000 = 1 : 400."],
          ["H", "Two towns 45 km apart are 9 cm apart on a map. What is the scale of the map?", "1 : 500,000", "1 : 5", "1 : 50,000", "1 : 5,000,000", "45 km = 4,500,000 cm; 9 : 4,500,000 = 1 : 500,000."],
          ["H", "A map has scale 1 : 200,000. A field covers 3 cm² on the map. What is its real area?", "12 km²", "6 km²", "600,000 km²", "1.2 km²", "1 cm = 2 km, so 1 cm² = 4 km² and 3 cm² = 12 km²."],
        ],
      },
      {
        week: 6,
        title: "Pie charts",
        subtopics: ["Angles of sectors", "Drawing pie charts", "Reading pie charts", "Finding totals and missing sectors"],
        objectives: ["Calculate sector angles from frequencies", "Draw an accurate pie chart", "Interpret pie charts to find quantities", "Find missing angles and totals from pie charts"],
        lesson: {
          title: "Drawing and Reading Pie Charts",
          summary: "Show how a whole is shared out using the sectors of a circle.",
          minutes: 40,
          notes: `## What a pie chart shows
A **pie chart** is a circle divided into **sectors** that show how a whole is shared among categories. It is best for comparing **parts of a whole**.

## Sector angles
The whole circle is **360°**.
$\\text{Angle} = \\frac{\\text{frequency}}{\\text{total frequency}}\\times 360°$
If 9 out of 36 students walk to school, the angle is $\\frac{9}{36}\\times 360° = 90°$.
A percentage converts directly: 25% of 360° = 90°.

## Drawing
1. Calculate every angle and check that they add up to 360°.
2. Draw a circle and a radius.
3. Measure each angle with a protractor, starting from the previous line.
4. Label each sector (or give a key) and add a title.

## Reading
$\\text{Quantity} = \\frac{\\text{angle}}{360°}\\times\\text{total}$
With a total of 60 people, a 120° sector represents $\\frac{120}{360}\\times 60 = 20$ people.

## One degree
Each degree represents $\\frac{\\text{total}}{360}$ items. For 720 items, $1° = 2$ items.`,
          examples: `**Example 1.** A family budget of ₦48,000 has a food sector of 150°. *Food:* $\\frac{150}{360}\\times 48{,}000 = ₦20{,}000$.

**Example 2.** Sectors A = 80°, B = 100°, C = $x$, D = $2x$. Find $x$. *Solution:* $180 + 3x = 360$, so $x = 60°$.

**Example 3.** Frequencies 10, 20 and 30: the angles are 60°, 120° and 180°.`,
        },
        questions: [
          ["E", "All the angles in a pie chart add up to", "360°", "180°", "100°", "90°", "A full circle is 360°."],
          ["E", "A sector representing 25% of the data has an angle of", "90°", "25°", "45°", "120°", "25% of 360° = 90°."],
          ["E", "Pie charts are most useful for showing", "how a whole is divided into parts", "how a value changes over time", "exact large values", "the link between two variables", "Each sector is a share of the whole."],
          ["M", "In a class of 36 students, 9 walk to school. What angle represents them in a pie chart?", "90°", "9°", "36°", "45°", "9/36 × 360° = 90°."],
          ["M", "In a pie chart of 60 people, a sector has angle 120°. How many people does it represent?", "20", "12", "40", "30", "120/360 × 60 = 20."],
          ["M", "A family budget of ₦48,000 is shown in a pie chart. The food sector is 150°. How much is spent on food?", "₦20,000", "₦15,000", "₦7,200", "₦24,000", "150/360 × 48,000 = ₦20,000."],
          ["M", "The frequencies of three groups are 10, 20 and 30. What is the angle for the group of 30?", "180°", "30°", "120°", "90°", "30/60 × 360° = 180°."],
          ["H", "A pie chart has sectors A = 80°, B = 100°, C = $x$ and D = $2x$. Find $x$.", "60°", "45°", "90°", "120°", "80 + 100 + 3x = 360, so 3x = 180 and x = 60°."],
          ["H", "A pie chart of 90 people has sectors A = 80°, B = 100°, C = 60° and D = 120°. How many people are in group D?", "30", "120", "40", "20", "120/360 × 90 = 30."],
          ["H", "In a pie chart showing 720 items, how many items does each degree represent?", "2", "720", "360", "0.5", "The whole circle (360°) represents 720 items, so 1° represents 720 ÷ 360 = 2 items."],
        ],
      },
      {
        week: 7,
        title: "Probability",
        subtopics: ["Language of chance", "Experimental probability", "Theoretical probability", "Probability of an event not happening"],
        objectives: ["Describe the likelihood of events using the probability scale", "Calculate experimental probability from results", "Calculate theoretical probability for equally likely outcomes", "Use P(not A) = 1 − P(A)"],
        lesson: {
          title: "Chance and Probability",
          summary: "Measure how likely events are, from experiments and from equally likely outcomes.",
          minutes: 40,
          notes: `## The probability scale
Probability measures how likely an event is, on a scale from **0** to **1**:
- 0 means **impossible** (a die showing 7);
- 1 means **certain** (a die showing a number less than 7);
- ½ means an **even chance** (a fair coin showing a head).
Probabilities can be written as fractions, decimals or percentages, but never less than 0 or more than 1.

## Theoretical probability
When all outcomes are **equally likely**:
$P(\\text{event}) = \\frac{\\text{number of favourable outcomes}}{\\text{total number of possible outcomes}}$
A fair die: $P(6) = \\frac{1}{6}$; $P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2}$.

## Experimental probability
Based on the results of an experiment or survey:
$\\text{Relative frequency} = \\frac{\\text{number of times the event happened}}{\\text{number of trials}}$
28 heads in 50 tosses gives $\\frac{28}{50} = 0.56$. The more trials, the closer this gets to the theoretical value.

## The event not happening
$P(\\text{not A}) = 1 - P(\\text{A})$. If $P(\\text{rain}) = 0.3$, then $P(\\text{no rain}) = 0.7$.`,
          examples: `**Example 1.** A bag has 3 red and 5 blue beads. $P(\\text{red}) = \\frac{3}{8}$.

**Example 2.** A letter is picked from MATHEMATICS (11 letters, M appears twice). $P(M) = \\frac{2}{11}$.

**Example 3.** A bag holds 4 red, 6 green and 5 yellow balls. $P(\\text{not green}) = \\frac{9}{15} = \\frac{3}{5}$.`,
        },
        questions: [
          ["E", "What is the probability of an impossible event?", "0", "1", "0.5", "−1", "Impossible events have probability 0."],
          ["E", "A fair coin is tossed. What is the probability of a head?", "$\\frac{1}{2}$", "1", "0", "2", "Two equally likely outcomes, one of them a head."],
          ["E", "A fair die is rolled. What is the probability of getting a 6?", "$\\frac{1}{6}$", "$\\frac{1}{2}$", "6", "$\\frac{5}{6}$", "One favourable outcome out of six."],
          ["M", "A bag contains 3 red and 5 blue beads. One bead is picked at random. What is the probability that it is red?", "$\\frac{3}{8}$", "$\\frac{3}{5}$", "$\\frac{5}{8}$", "$\\frac{1}{3}$", "3 red out of 8 beads."],
          ["M", "A fair die is rolled. What is the probability of an even number?", "$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{2}{3}$", "2, 4 and 6 are even: 3/6 = 1/2."],
          ["M", "The probability that an event happens is 0.3. What is the probability that it does not happen?", "0.7", "0.3", "1.3", "0", "P(not A) = 1 − 0.3 = 0.7."],
          ["M", "A letter is chosen at random from the word MATHEMATICS. What is the probability that it is M?", "$\\frac{2}{11}$", "$\\frac{1}{11}$", "$\\frac{2}{9}$", "$\\frac{1}{5}$", "M appears 2 times among 11 letters."],
          ["H", "A fair die is rolled. What is the probability of a number greater than 4?", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{1}{6}$", "5 and 6 are greater than 4: 2/6 = 1/3."],
          ["H", "A coin is tossed 50 times and shows 28 heads. What is the experimental probability of a head?", "0.56", "0.5", "0.28", "0.44", "28 ÷ 50 = 0.56."],
          ["H", "A bag holds 4 red, 6 green and 5 yellow balls. What is the probability that a ball picked at random is not green?", "$\\frac{3}{5}$", "$\\frac{2}{5}$", "$\\frac{1}{3}$", "$\\frac{2}{3}$", "9 of the 15 balls are not green: 9/15 = 3/5."],
        ],
      },
    ],
  },
];
