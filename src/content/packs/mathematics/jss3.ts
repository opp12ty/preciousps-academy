import type { TermPlan } from "../types";

/** JSS3 Mathematics — original Precious PS content following the national Basic Education structure (BECE year). */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Number bases other than two",
        subtopics: ["Place values in bases three to nine", "Converting to base ten", "Converting from base ten", "Addition in other bases"],
        objectives: ["State the digits and place values used in a given base", "Convert numbers from any base to base ten", "Convert base ten numbers to any base by repeated division", "Add numbers in a given base"],
        lesson: {
          title: "Working in Any Base",
          summary: "Extend binary skills to bases such as 3, 5 and 8: convert both ways and add.",
          minutes: 40,
          notes: `## Digits and place values
In base $b$ the digits are $0, 1, \\ldots, b - 1$ and the place values are powers of $b$.
| Base | Digits | Place values (right to left) |
|---|---|---|
| 3 | 0, 1, 2 | 1, 3, 9, 27, … |
| 5 | 0–4 | 1, 5, 25, 125, … |
| 8 | 0–7 | 1, 8, 64, 512, … |
So the digit 5 can never appear in base 5, and 8 never appears in base 8.

## To base ten — expand
$144_8 = 1\\times 64 + 4\\times 8 + 4\\times 1 = 100_{10}$

## From base ten — repeated division
Divide by the new base, write the remainders and read them **from the bottom up**.
$45 \\div 5 = 9$ r **0**; $9\\div 5 = 1$ r **4**; $1\\div 5 = 0$ r **1** → $45_{10} = 140_5$.

## Between two other bases
Go **through base ten**: $212_3 = 23_{10} = 43_5$.

## Adding in base $b$
Add column by column; whenever a column total reaches $b$ or more, write the remainder after subtracting $b$ and carry 1.
$34_5 + 23_5$: $4 + 3 = 7 = 1\\times 5 + 2$ → write 2, carry 1; $3 + 2 + 1 = 6 = 1\\times 5 + 1$ → write 1, carry 1. Answer $112_5$ (19 + 13 = 32 ✓).

## Unknown bases
If $24_b = 18_{10}$ then $2b + 4 = 18$, so $b = 7$.`,
          examples: `**Example 1.** Convert $57_8$ to base ten. *Answer:* $5\\times 8 + 7 = 47$.

**Example 2.** Convert $100_{10}$ to base eight. *Solution:* 100 ÷ 8 = 12 r 4; 12 ÷ 8 = 1 r 4; 1 ÷ 8 = 0 r 1 → $144_8$.

**Example 3.** Convert $1011_2$ to base eight. *Solution:* $1011_2 = 11_{10} = 1\\times 8 + 3 = 13_8$.`,
        },
        questions: [
          ["E", "Convert $23_5$ to base ten.", "13", "23", "8", "115", "2 × 5 + 3 = 13."],
          ["E", "What is the largest digit used in base eight?", "7", "8", "9", "6", "Base eight uses the digits 0 to 7."],
          ["E", "Which digit cannot appear in a base five number?", "5", "0", "4", "1", "Base five uses only 0, 1, 2, 3 and 4."],
          ["M", "Convert $45_{10}$ to base five.", "$140_5$", "$104_5$", "$41_5$", "$1400_5$", "45 = 1 × 25 + 4 × 5 + 0."],
          ["M", "Convert $57_8$ to base ten.", "47", "57", "45", "40", "5 × 8 + 7 = 47."],
          ["M", "Convert $100_{10}$ to base eight.", "$144_8$", "$154_8$", "$124_8$", "$441_8$", "100 = 1 × 64 + 4 × 8 + 4."],
          ["M", "Convert $1011_2$ to base eight.", "$13_8$", "$11_8$", "$31_8$", "$12_8$", "1011₂ = 11 = 1 × 8 + 3 = 13₈."],
          ["H", "Find the base $b$ if $24_b = 18_{10}$.", "7", "8", "9", "6", "2b + 4 = 18, so b = 7."],
          ["H", "Evaluate $34_5 + 23_5$, giving your answer in base five.", "$112_5$", "$102_5$", "$111_5$", "$57_5$", "19 + 13 = 32 = 1 × 25 + 1 × 5 + 2 = 112₅."],
          ["H", "Convert $212_3$ to base five.", "$43_5$", "$34_5$", "$23_5$", "$42_5$", "212₃ = 2 × 9 + 1 × 3 + 2 = 23 = 4 × 5 + 3 = 43₅."],
        ],
      },
      {
        week: 2,
        title: "Indices",
        subtopics: ["Multiplication and division laws", "Power of a power", "Zero and negative indices", "Fractional indices and index equations"],
        objectives: ["Apply the laws of indices to simplify expressions", "Evaluate zero and negative indices", "Evaluate fractional indices", "Solve simple equations involving indices"],
        lesson: {
          title: "The Laws of Indices",
          summary: "Simplify and evaluate expressions with positive, zero, negative and fractional indices.",
          minutes: 40,
          notes: `## Index notation
In $a^n$, $a$ is the **base** and $n$ is the **index** (power): $2^5 = 2\\times 2\\times 2\\times 2\\times 2 = 32$.

## The laws
| Law | Example |
|---|---|
| $a^m\\times a^n = a^{m+n}$ | $a^3\\times a^4 = a^7$ |
| $a^m\\div a^n = a^{m-n}$ | $x^8\\div x^2 = x^6$ |
| $(a^m)^n = a^{mn}$ | $(y^3)^2 = y^6$ |
| $a^0 = 1$ (for $a\\ne 0$) | $5^0 = 1$ |
| $a^{-n} = \\frac{1}{a^n}$ | $2^{-3} = \\frac{1}{8}$ |
| $a^{\\frac{1}{n}} = \\sqrt[n]{a}$ | $16^{\\frac{1}{2}} = 4$ |
| $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$ | $27^{\\frac{2}{3}} = 3^2 = 9$ |

The first two laws only work when the **bases are the same**.

## Coefficients
Numbers in front are multiplied normally: $(2a^3)^2 = 4a^6$.

## Index equations
Write both sides as powers of the **same base**, then equate the indices:
$2^x = 32 = 2^5 \\Rightarrow x = 5$.`,
          examples: `**Example 1.** Simplify $3^2\\times 3^3\\div 3^4$. *Answer:* $3^{2+3-4} = 3^1 = 3$.

**Example 2.** Evaluate $27^{\\frac{2}{3}}$. *Solution:* $\\sqrt[3]{27} = 3$ and $3^2 = 9$.

**Example 3.** Simplify $(2a^3)^2\\times a^{-2}$. *Solution:* $4a^6\\times a^{-2} = 4a^4$.`,
        },
        questions: [
          ["E", "Simplify $a^3\\times a^4$.", "$a^7$", "$a^{12}$", "$a$", "$2a^7$", "Add the indices: 3 + 4 = 7."],
          ["E", "Simplify $x^8\\div x^2$.", "$x^6$", "$x^4$", "$x^{10}$", "$x^{16}$", "Subtract the indices: 8 − 2 = 6."],
          ["E", "Simplify $(y^3)^2$.", "$y^6$", "$y^5$", "$y^9$", "$2y^3$", "Multiply the indices: 3 × 2 = 6."],
          ["M", "Evaluate $5^0$.", "1", "0", "5", "$\\frac{1}{5}$", "Any non-zero number to the power 0 is 1."],
          ["M", "Evaluate $2^{-3}$.", "$\\frac{1}{8}$", "−8", "−6", "8", "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$."],
          ["M", "Simplify $3^2\\times 3^3\\div 3^4$.", "3", "9", "27", "$\\frac{1}{3}$", "2 + 3 − 4 = 1, so the answer is 3¹ = 3."],
          ["M", "Evaluate $16^{\\frac{1}{2}}$.", "4", "8", "32", "2", "The power ½ means the square root: √16 = 4."],
          ["H", "Evaluate $27^{\\frac{2}{3}}$.", "9", "18", "3", "6", "∛27 = 3, then 3² = 9."],
          ["H", "Solve $2^x = 32$.", "$x = 5$", "$x = 16$", "$x = 6$", "$x = 4$", "32 = 2⁵, so x = 5."],
          ["H", "Simplify $(2a^3)^2\\times a^{-2}$.", "$4a^4$", "$2a^4$", "$4a^3$", "$4a^8$", "(2a³)² = 4a⁶, and 4a⁶ × a⁻² = 4a⁴."],
        ],
      },
      {
        week: 3,
        title: "Compound interest and depreciation",
        subtopics: ["Simple and compound interest compared", "Year-by-year compound interest", "The compound interest formula", "Depreciation"],
        objectives: ["Distinguish between simple and compound interest", "Calculate compound interest year by year", "Use the formula A = P(1 + R/100)ⁿ", "Calculate the value of an item after depreciation"],
        lesson: {
          title: "Compound Interest",
          summary: "Calculate interest that is added to the principal each year, and values that fall by a percentage each year.",
          minutes: 40,
          notes: `## Simple versus compound
- **Simple interest** is calculated on the original principal only.
- **Compound interest** is calculated on the principal **plus the interest already earned**. The amount at the end of each year becomes the principal for the next year.

## Year by year
₦10,000 at 10% per annum compound interest:
| Year | Principal | Interest | Amount |
|---|---|---|---|
| 1 | 10,000 | 1,000 | 11,000 |
| 2 | 11,000 | 1,100 | 12,100 |
Compound interest $= 12{,}100 - 10{,}000 = ₦2{,}100$ (simple interest would be ₦2,000).

## The formula
$A = P\\left(1 + \\frac{R}{100}\\right)^n$ and compound interest $= A - P$
where $P$ is the principal, $R$ the rate per annum and $n$ the number of years.

## Depreciation
**Depreciation** is the fall in value of items such as cars and machines. On the reducing-balance method the value falls by a fixed percentage of the **current** value each year:
$V = P\\left(1 - \\frac{R}{100}\\right)^n$`,
          examples: `**Example 1.** ₦5,000 at 20% compound interest for 2 years: $A = 5000\\times 1.2^2 = 5000\\times 1.44 = ₦7{,}200$.

**Example 2.** ₦8,000 at 5% for 3 years: $A = 8000\\times 1.05^3 = 8000\\times 1.157625 = ₦9{,}261$.

**Example 3.** A machine worth ₦50,000 depreciates by 20% a year. *After 2 years:* $50{,}000\\times 0.8^2 = ₦32{,}000$.`,
        },
        questions: [
          ["E", "In compound interest, interest is calculated on", "the principal plus the interest already earned", "the original principal only", "the interest only", "the rate only", "Interest is added to the principal each year."],
          ["E", "Find the amount when ₦1,000 is invested for 1 year at 10% compound interest.", "₦1,100", "₦1,010", "₦1,200", "₦100", "1,000 × 1.1 = ₦1,100."],
          ["E", "In compound interest, the amount at the end of the first year becomes", "the principal for the second year", "the interest for the second year", "zero", "the rate for the second year", "Interest is earned on the new, larger amount."],
          ["M", "Find the amount after 2 years when ₦10,000 is invested at 10% compound interest.", "₦12,100", "₦12,000", "₦11,000", "₦2,100", "10,000 × 1.1² = 10,000 × 1.21 = ₦12,100."],
          ["M", "Find the compound interest on ₦10,000 for 2 years at 10% per annum.", "₦2,100", "₦2,000", "₦12,100", "₦1,000", "Amount = ₦12,100, so interest = 12,100 − 10,000 = ₦2,100."],
          ["M", "Find the amount after 2 years when ₦5,000 is invested at 20% compound interest.", "₦7,200", "₦7,000", "₦2,200", "₦6,000", "5,000 × 1.2² = 5,000 × 1.44 = ₦7,200."],
          ["M", "Which formula gives the amount $A$ after $n$ years at $R\\%$ compound interest?", "$A = P\\left(1 + \\frac{R}{100}\\right)^n$", "$A = P\\left(1 + \\frac{Rn}{100}\\right)$", "$A = \\frac{PRn}{100}$", "$A = P\\left(\\frac{R}{100}\\right)^n$", "Each year multiplies the amount by (1 + R/100)."],
          ["H", "Find the amount when ₦8,000 is invested for 3 years at 5% compound interest.", "₦9,261", "₦9,200", "₦9,000", "₦1,261", "8,000 × 1.05³ = 8,000 × 1.157625 = ₦9,261."],
          ["H", "What is the difference between the compound interest and the simple interest on ₦20,000 for 2 years at 10% per annum?", "₦200", "₦0", "₦2,000", "₦420", "Compound interest = ₦4,200 and simple interest = ₦4,000."],
          ["H", "A machine worth ₦50,000 depreciates by 20% of its value each year. What is it worth after 2 years?", "₦32,000", "₦30,000", "₦40,000", "₦18,000", "50,000 × 0.8² = 50,000 × 0.64 = ₦32,000."],
        ],
      },
      {
        week: 4,
        title: "Direct and inverse variation",
        subtopics: ["Direct variation", "Inverse variation", "Finding the constant of variation", "Variation with squares and square roots"],
        objectives: ["Write a statement of variation as an equation", "Find the constant of variation from given values", "Solve problems on direct and inverse variation", "Solve variation problems involving squares and square roots"],
        lesson: {
          title: "Variation",
          summary: "Write relationships between varying quantities as equations and use them to find unknowns.",
          minutes: 40,
          notes: `## Direct variation
"$y$ varies directly as $x$" is written $y\\propto x$, which means
$y = kx$ where $k$ is the **constant of variation**. When $x$ doubles, $y$ doubles.

## Inverse variation
"$y$ varies inversely as $x$" is written $y\\propto\\frac{1}{x}$, which means
$y = \\frac{k}{x}$ (so $xy = k$). When $x$ doubles, $y$ halves.

## Other forms
- $p\\propto q^2 \\Rightarrow p = kq^2$
- $y\\propto\\sqrt{x} \\Rightarrow y = k\\sqrt{x}$

## Method
1. Write the equation with $k$.
2. Substitute the given pair of values to find $k$.
3. Write the equation with the value of $k$.
4. Use it to find the unknown.

## Everyday examples
- Direct: cost and quantity of cloth; distance and time at a fixed speed.
- Inverse: number of workers and time to finish a job; speed and time for a fixed journey.`,
          examples: `**Example 1.** $y\\propto x$ and $y = 12$ when $x = 3$. Find $y$ when $x = 7$.
*Solution:* $k = 4$, so $y = 4x = 28$.

**Example 2.** $y\\propto\\frac{1}{x}$ and $y = 6$ when $x = 4$. Find $y$ when $x = 3$.
*Solution:* $k = 24$, so $y = \\frac{24}{3} = 8$.

**Example 3.** $p\\propto q^2$ and $p = 18$ when $q = 3$. Find $p$ when $q = 5$.
*Solution:* $18 = 9k$, $k = 2$; $p = 2\\times 25 = 50$.`,
        },
        questions: [
          ["E", "If $y$ varies directly as $x$, then", "$y = kx$", "$y = \\frac{k}{x}$", "$y = x + k$", "$xy = 0$", "Direct variation means y is a constant multiple of x."],
          ["E", "$y\\propto x$ and $y = 12$ when $x = 3$. Find the constant $k$.", "4", "36", "9", "15", "k = 12 ÷ 3 = 4."],
          ["E", "If $y$ varies inversely as $x$, what happens to $y$ when $x$ is doubled?", "It is halved", "It is doubled", "It stays the same", "It is multiplied by 4", "y = k/x, so doubling x halves y."],
          ["M", "$y\\propto x$ and $y = 12$ when $x = 3$. Find $y$ when $x = 7$.", "28", "21", "16", "84", "k = 4, so y = 4 × 7 = 28."],
          ["M", "$y$ varies inversely as $x$, and $y = 6$ when $x = 4$. Find the constant $k$.", "24", "1.5", "10", "$\\frac{2}{3}$", "k = xy = 4 × 6 = 24."],
          ["M", "$y\\propto\\frac{1}{x}$ and $y = 6$ when $x = 4$. Find $y$ when $x = 3$.", "8", "4.5", "18", "2", "k = 24, so y = 24 ÷ 3 = 8."],
          ["M", "$p\\propto q^2$ and $p = 18$ when $q = 3$. Find $p$ when $q = 5$.", "50", "30", "25", "10", "18 = 9k gives k = 2; p = 2 × 25 = 50."],
          ["H", "The cost of cloth varies directly as its length. 3 m cost ₦4,500. What do 8 m cost?", "₦12,000", "₦13,500", "₦1,500", "₦9,000", "k = ₦1,500 per metre; 8 × 1,500 = ₦12,000."],
          ["H", "The time taken to finish a job varies inversely as the number of workers. 12 workers take 10 days. How long will 15 workers take?", "8 days", "12.5 days", "13 days", "6 days", "k = 12 × 10 = 120; 120 ÷ 15 = 8 days."],
          ["H", "$y\\propto\\sqrt{x}$ and $y = 12$ when $x = 16$. Find $y$ when $x = 25$.", "15", "18.75", "20", "9", "12 = k × 4 gives k = 3; y = 3 × 5 = 15."],
        ],
      },
      {
        week: 5,
        title: "Hire purchase",
        subtopics: ["Cash price and hire purchase price", "Deposits and instalments", "Interest charged on the balance", "Advantages and disadvantages of hire purchase"],
        objectives: ["Explain the terms deposit, instalment and hire purchase price", "Calculate the hire purchase price of an item", "Calculate instalments when interest is charged", "Compare hire purchase and cash prices"],
        lesson: {
          title: "Buying on Hire Purchase",
          summary: "Work out deposits, instalments and the true cost of buying goods on hire purchase.",
          minutes: 35,
          notes: `## What is hire purchase?
**Hire purchase (HP)** lets a buyer take an item home and use it while paying for it over time.
- The **cash price** is what you pay if you pay everything at once.
- The **deposit** is the first payment, made at the start.
- The **instalments** are the regular (usually monthly) payments that follow.
- The **HP price** = deposit + total of all instalments.

## Calculating
HP price = deposit + (number of instalments × each instalment)
Extra cost = HP price − cash price

## When interest is charged
1. Balance = cash price − deposit.
2. Add interest on the balance.
3. Divide by the number of instalments.
Cash price ₦60,000; 20% deposit = ₦12,000; balance ₦48,000; 10% interest = ₦4,800; total to repay ₦52,800; 8 instalments of ₦6,600.

## Advantages and disadvantages
- ✔ You can use expensive items (fridges, phones, generators) before paying in full.
- ✘ The HP price is higher than the cash price, and goods may be taken back if you stop paying.`,
          examples: `**Example 1.** A TV costs ₦120,000 cash, or ₦30,000 deposit and 12 monthly payments of ₦9,000.
*HP price:* $30{,}000 + 12\\times 9{,}000 = ₦138{,}000$; *extra:* ₦18,000, which is $\\frac{18{,}000}{120{,}000}\\times 100\\% = 15\\%$ more.

**Example 2.** A 25% deposit on ₦80,000 is ₦20,000; the balance of ₦60,000 in 10 equal instalments (no interest) is ₦6,000 each.`,
        },
        questions: [
          ["E", "Hire purchase means", "paying for goods in instalments while using them", "paying the full price at once", "renting goods without ever owning them", "borrowing money with no repayment", "The buyer uses the goods while paying over time."],
          ["E", "In hire purchase, the first payment is called the", "deposit", "balance", "interest", "commission", "The deposit is paid at the start."],
          ["E", "An advantage of hire purchase is that", "you can use the goods before paying in full", "it is always cheaper than paying cash", "no deposit is ever needed", "no interest is ever charged", "The HP price is usually higher, but you get the goods early."],
          ["M", "A TV costs ₦120,000 cash. On hire purchase it costs a deposit of ₦30,000 plus 12 monthly payments of ₦9,000. What is the hire purchase price?", "₦138,000", "₦120,000", "₦108,000", "₦150,000", "30,000 + 12 × 9,000 = ₦138,000."],
          ["M", "A TV costs ₦120,000 cash or ₦138,000 on hire purchase. How much more is paid on hire purchase?", "₦18,000", "₦30,000", "₦9,000", "₦12,000", "138,000 − 120,000 = ₦18,000."],
          ["M", "What is a 25% deposit on an item costing ₦80,000?", "₦20,000", "₦25,000", "₦60,000", "₦8,000", "0.25 × 80,000 = ₦20,000."],
          ["M", "After a 25% deposit on ₦80,000, the balance is paid in 10 equal instalments with no interest. How much is each instalment?", "₦6,000", "₦8,000", "₦2,000", "₦7,500", "Balance = ₦60,000; 60,000 ÷ 10 = ₦6,000."],
          ["H", "The cash price is ₦60,000. A 20% deposit is paid and 10% interest is added to the balance, which is repaid in 8 equal instalments. What is each instalment?", "₦6,600", "₦6,000", "₦7,500", "₦6,750", "Balance 48,000 + interest 4,800 = 52,800; 52,800 ÷ 8 = ₦6,600."],
          ["H", "The cash price is ₦60,000. A 20% deposit is paid and 10% interest is added to the balance, which is repaid in 8 equal instalments. What is the total hire purchase price?", "₦64,800", "₦66,000", "₦60,000", "₦52,800", "Deposit ₦12,000 + ₦52,800 of instalments = ₦64,800."],
          ["H", "A TV costs ₦120,000 cash or ₦138,000 on hire purchase. By what percentage is the hire purchase price higher?", "15%", "18%", "13%", "12%", "18,000 ÷ 120,000 × 100% = 15%."],
        ],
      },
      {
        week: 6,
        title: "Rational and irrational numbers",
        subtopics: ["Rational numbers", "Irrational numbers", "Recurring decimals as fractions", "Simplifying square roots (surds)"],
        objectives: ["Distinguish between rational and irrational numbers", "Convert recurring decimals to fractions", "Identify terminating and recurring decimals", "Simplify square roots by removing square factors"],
        lesson: {
          title: "Rational and Irrational Numbers",
          summary: "Classify real numbers, turn recurring decimals into fractions and simplify square roots.",
          minutes: 40,
          notes: `## Rational numbers
A **rational number** can be written as $\\frac{a}{b}$, where $a$ and $b$ are integers and $b\\ne 0$. This includes whole numbers, negative numbers, fractions, terminating decimals and recurring decimals: $-5$, $\\frac{3}{4}$, $0.375$, $0.333\\ldots$

## Irrational numbers
An **irrational number** cannot be written as a fraction; its decimal goes on forever **without repeating**: $\\sqrt{2}$, $\\sqrt{3}$, $\\pi$. The square root of any whole number that is **not** a perfect square is irrational ($\\sqrt{16} = 4$ is rational).
Rational and irrational numbers together make up the **real numbers**.

## Terminating or recurring?
A fraction in its lowest terms gives a **terminating** decimal only when its denominator has no prime factors other than 2 and 5: $\\frac{3}{8} = 0.375$, but $\\frac{1}{3} = 0.333\\ldots$

## Recurring decimals to fractions
- One repeating digit: $0.444\\ldots = \\frac{4}{9}$
- Two repeating digits: $0.1818\\ldots = \\frac{18}{99} = \\frac{2}{11}$

## Simplifying square roots
Take out the largest square factor: $\\sqrt{50} = \\sqrt{25\\times 2} = 5\\sqrt{2}$.

## Estimating roots
$\\sqrt{50}$ lies between $\\sqrt{49} = 7$ and $\\sqrt{64} = 8$.`,
          examples: `**Example 1.** Is $\\frac{22}{7}$ rational? *Answer:* yes — it is a fraction of integers (it is only an approximation to $\\pi$, which is irrational).

**Example 2.** Write $0.3636\\ldots$ as a fraction. *Answer:* $\\frac{36}{99} = \\frac{4}{11}$.

**Example 3.** Simplify $\\sqrt{72}$. *Answer:* $\\sqrt{36\\times 2} = 6\\sqrt{2}$.`,
        },
        questions: [
          ["E", "Which of these is a rational number?", "$\\frac{3}{4}$", "$\\sqrt{2}$", "$\\pi$", "$\\sqrt{5}$", "3/4 is a fraction of two integers."],
          ["E", "Which of these is irrational?", "$\\sqrt{3}$", "0.5", "$\\frac{7}{9}$", "$\\sqrt{16}$", "3 is not a perfect square, so √3 is irrational; √16 = 4."],
          ["E", "Write $0.333\\ldots$ as a fraction.", "$\\frac{1}{3}$", "$\\frac{3}{10}$", "$\\frac{33}{100}$", "$\\frac{3}{100}$", "One repeating digit 3 gives 3/9 = 1/3."],
          ["M", "Write $0.444\\ldots$ as a fraction.", "$\\frac{4}{9}$", "$\\frac{4}{99}$", "$\\frac{1}{4}$", "$\\frac{2}{5}$", "One repeating digit 4 gives 4/9."],
          ["M", "Write $0.1818\\ldots$ as a fraction in its lowest terms.", "$\\frac{2}{11}$", "$\\frac{18}{100}$", "$\\frac{1}{8}$", "$\\frac{2}{9}$", "Two repeating digits: 18/99 = 2/11."],
          ["M", "Between which two consecutive whole numbers does $\\sqrt{50}$ lie?", "7 and 8", "6 and 7", "8 and 9", "24 and 26", "√49 = 7 and √64 = 8."],
          ["M", "The real numbers consist of", "all rational and irrational numbers", "whole numbers only", "fractions only", "irrational numbers only", "Every real number is either rational or irrational."],
          ["H", "Which of these is NOT a rational number?", "$\\sqrt{7}$", "0.1212…", "−5", "$\\frac{22}{7}$", "7 is not a perfect square, so √7 is irrational."],
          ["H", "Simplify $\\sqrt{50}$.", "$5\\sqrt{2}$", "$25\\sqrt{2}$", "$2\\sqrt{5}$", "$10\\sqrt{5}$", "√50 = √(25 × 2) = 5√2."],
          ["H", "Which fraction gives a terminating decimal?", "$\\frac{3}{8}$", "$\\frac{1}{3}$", "$\\frac{2}{7}$", "$\\frac{5}{6}$", "8 = 2³ has only the prime factor 2, so 3/8 = 0.375 terminates."],
        ],
      },
      {
        week: 7,
        title: "Speed, distance and time",
        subtopics: ["The speed–distance–time formula", "Converting units of speed", "Average speed", "Relative speed problems"],
        objectives: ["Use speed = distance ÷ time and its rearrangements", "Convert speeds between km/h and m/s", "Calculate average speed for a journey with several parts", "Solve problems about objects moving towards each other"],
        lesson: {
          title: "Speed, Distance and Time",
          summary: "Calculate speeds, distances and times, convert units and find average speeds.",
          minutes: 40,
          notes: `## The formula triangle
$\\text{Speed} = \\frac{\\text{distance}}{\\text{time}}$, $\\text{distance} = \\text{speed}\\times\\text{time}$, $\\text{time} = \\frac{\\text{distance}}{\\text{speed}}$

## Units
Speed units combine a distance and a time: km/h, m/s.
- To change km/h to m/s: multiply by $\\frac{1000}{3600} = \\frac{5}{18}$. $72$ km/h $= 20$ m/s.
- To change m/s to km/h: multiply by $\\frac{18}{5} = 3.6$. $5$ m/s $= 18$ km/h.
Times in minutes must be converted to hours when the speed is in km/h: 45 min = $\\frac{3}{4}$ h.

## Average speed
$\\text{Average speed} = \\frac{\\text{total distance}}{\\text{total time}}$
It is **not** the average of the two speeds. 60 km at 30 km/h (2 h) then 60 km at 60 km/h (1 h): average $= \\frac{120}{3} = 40$ km/h, not 45 km/h.

## Moving towards each other
Their distance apart closes at the **sum** of their speeds: two cars 300 km apart at 70 km/h and 80 km/h meet after $\\frac{300}{150} = 2$ hours.`,
          examples: `**Example 1.** A car travels 150 km in 3 hours. *Speed:* 50 km/h.

**Example 2.** How far do you travel in 45 minutes at 80 km/h? *Answer:* $80\\times\\frac{3}{4} = 60$ km.

**Example 3.** A 200 m train passes a pole in 10 s. *Speed:* 20 m/s $= 20\\times 3.6 = 72$ km/h.`,
        },
        questions: [
          ["E", "Which formula gives speed?", "distance ÷ time", "time ÷ distance", "distance × time", "distance + time", "Speed is distance travelled per unit time."],
          ["E", "A car travels 150 km in 3 hours. What is its average speed?", "50 km/h", "450 km/h", "153 km/h", "0.02 km/h", "150 ÷ 3 = 50 km/h."],
          ["E", "Convert 5 m/s to km/h.", "18 km/h", "5 km/h", "1.39 km/h", "50 km/h", "5 × 3.6 = 18 km/h."],
          ["M", "A girl walks at 4 km/h for 2.5 hours. How far does she walk?", "10 km", "6.5 km", "1.6 km", "8 km", "4 × 2.5 = 10 km."],
          ["M", "Convert 72 km/h to m/s.", "20 m/s", "72 m/s", "7.2 m/s", "259.2 m/s", "72 × 5/18 = 20 m/s."],
          ["M", "How long does it take to travel 240 km at 60 km/h?", "4 hours", "3 hours", "5 hours", "0.25 hours", "240 ÷ 60 = 4 hours."],
          ["M", "How far does a bus travel in 45 minutes at 80 km/h?", "60 km", "3,600 km", "106.7 km", "45 km", "45 minutes = 0.75 h; 80 × 0.75 = 60 km."],
          ["H", "A cyclist rides 60 km at 30 km/h and then another 60 km at 60 km/h. What is the average speed for the whole journey?", "40 km/h", "45 km/h", "50 km/h", "90 km/h", "Total 120 km in 2 h + 1 h = 3 h; 120 ÷ 3 = 40 km/h."],
          ["H", "A train 200 m long passes a pole in 10 seconds. What is its speed in km/h?", "72 km/h", "20 km/h", "200 km/h", "36 km/h", "200 ÷ 10 = 20 m/s = 72 km/h."],
          ["H", "Two cars 300 km apart drive towards each other at 70 km/h and 80 km/h. After how long do they meet?", "2 hours", "3 hours", "1.5 hours", "4 hours", "The gap closes at 150 km/h; 300 ÷ 150 = 2 hours."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Factorising quadratic expressions",
        subtopics: ["Quadratic expressions", "Factorising x² + bx + c", "Factorising ax² + bx + c", "Checking by expansion"],
        objectives: ["Recognise a quadratic expression", "Factorise quadratics with leading coefficient 1", "Factorise quadratics with leading coefficient other than 1", "Check factorisations by expanding"],
        lesson: {
          title: "Factorising Quadratics",
          summary: "Write quadratic expressions as the product of two brackets.",
          minutes: 45,
          notes: `## Quadratic expressions
A **quadratic expression** has the form $ax^2 + bx + c$, where the highest power of $x$ is 2.

## When a = 1
To factorise $x^2 + bx + c$, find two numbers that **multiply to give c** and **add to give b**.
$x^2 + 5x + 6$: $2\\times 3 = 6$ and $2 + 3 = 5$, so $(x + 2)(x + 3)$.

## Signs guide
| $c$ | $b$ | Numbers |
|---|---|---|
| positive | positive | both positive |
| positive | negative | both negative |
| negative | either | one positive, one negative |
$x^2 - 7x + 12 = (x - 3)(x - 4)$ and $x^2 + 2x - 15 = (x + 5)(x - 3)$.

## When a ≠ 1 (splitting the middle term)
1. Multiply $a\\times c$.
2. Find two numbers that multiply to $ac$ and add to $b$.
3. Split $bx$ using those numbers and factorise by grouping.
$2x^2 + 7x + 3$: $ac = 6$; $6 + 1 = 7$. $2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$

## Always check
Expand your brackets to make sure you get back the original expression.`,
          examples: `**Example 1.** $x^2 - x - 20 = (x - 5)(x + 4)$ (because $-5\\times 4 = -20$ and $-5 + 4 = -1$).

**Example 2.** $3x^2 - 10x + 8$: $ac = 24$; $-6$ and $-4$. $3x^2 - 6x - 4x + 8 = 3x(x - 2) - 4(x - 2) = (3x - 4)(x - 2)$.

**Example 3.** $6x^2 - x - 2$: $ac = -12$; $-4$ and $3$. $6x^2 - 4x + 3x - 2 = 2x(3x - 2) + 1(3x - 2) = (3x - 2)(2x + 1)$.`,
        },
        questions: [
          ["E", "Factorise $x^2 + 5x + 6$.", "$(x + 2)(x + 3)$", "$(x + 1)(x + 6)$", "$(x + 5)(x + 1)$", "$(x - 2)(x - 3)$", "2 × 3 = 6 and 2 + 3 = 5."],
          ["E", "Factorise $x^2 - 7x + 12$.", "$(x - 3)(x - 4)$", "$(x + 3)(x + 4)$", "$(x - 2)(x - 6)$", "$(x - 1)(x - 12)$", "(−3) × (−4) = 12 and −3 + (−4) = −7."],
          ["E", "Which two numbers have a product of 10 and a sum of 7?", "2 and 5", "1 and 10", "3 and 4", "−2 and −5", "2 × 5 = 10 and 2 + 5 = 7."],
          ["M", "Factorise $x^2 + 2x - 15$.", "$(x + 5)(x - 3)$", "$(x - 5)(x + 3)$", "$(x + 15)(x - 1)$", "$(x + 5)(x + 3)$", "5 × (−3) = −15 and 5 + (−3) = 2."],
          ["M", "Factorise $x^2 - x - 20$.", "$(x - 5)(x + 4)$", "$(x + 5)(x - 4)$", "$(x - 10)(x + 2)$", "$(x - 20)(x + 1)$", "(−5) × 4 = −20 and −5 + 4 = −1."],
          ["M", "Factorise $2x^2 + 7x + 3$.", "$(2x + 1)(x + 3)$", "$(2x + 3)(x + 1)$", "$(2x - 1)(x - 3)$", "$(2x + 7)(x + 3)$", "Split 7x as 6x + x: 2x(x + 3) + 1(x + 3)."],
          ["M", "Factorise $3x^2 - 10x + 8$.", "$(3x - 4)(x - 2)$", "$(3x - 2)(x - 4)$", "$(3x + 4)(x + 2)$", "$(3x - 8)(x - 1)$", "Split −10x as −6x − 4x: 3x(x − 2) − 4(x − 2)."],
          ["H", "Factorise $6x^2 - x - 2$.", "$(3x - 2)(2x + 1)$", "$(3x + 2)(2x - 1)$", "$(6x + 1)(x - 2)$", "$(2x - 2)(3x + 1)$", "ac = −12: use −4 and 3. 2x(3x − 2) + 1(3x − 2)."],
          ["H", "If $x^2 + kx + 12 = (x + 3)(x + 4)$, find $k$.", "7", "12", "1", "3", "(x + 3)(x + 4) = x² + 7x + 12."],
          ["H", "Factorise $x^2 - 8x + 16$.", "$(x - 4)^2$", "$(x + 4)^2$", "$(x - 4)(x + 4)$", "$(x - 8)(x + 2)$", "(−4) × (−4) = 16 and −4 + (−4) = −8."],
        ],
      },
      {
        week: 2,
        title: "Difference of two squares and perfect squares",
        subtopics: ["The difference of two squares", "Perfect square trinomials", "Taking out a common factor first", "Using the difference of two squares in arithmetic"],
        objectives: ["Factorise expressions of the form a² − b²", "Recognise and factorise perfect square trinomials", "Factorise completely by first removing a common factor", "Use factorisation to evaluate numerical expressions quickly"],
        lesson: {
          title: "Special Factorisations",
          summary: "Recognise and factorise differences of two squares and perfect squares.",
          minutes: 40,
          notes: `## Difference of two squares
$a^2 - b^2 = (a - b)(a + b)$
Look for two **perfect squares** separated by a **minus** sign:
- $x^2 - 9 = (x - 3)(x + 3)$
- $4x^2 - 25 = (2x - 5)(2x + 5)$
- $9a^2 - 16b^2 = (3a - 4b)(3a + 4b)$
There is **no** similar factorisation of $a^2 + b^2$.

## Perfect square trinomials
$a^2 + 2ab + b^2 = (a + b)^2$ and $a^2 - 2ab + b^2 = (a - b)^2$
Check: first and last terms are squares, and the middle term is **twice** the product of their roots.
$x^2 + 10x + 25 = (x + 5)^2$ and $x^2 + 6x + 9 = (x + 3)^2$.

## Common factor first
Always take out any common factor before looking for a special pattern:
$3x^2 - 12 = 3(x^2 - 4) = 3(x - 2)(x + 2)$
Keep going until nothing more factorises: $x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$.

## Quick arithmetic
$51^2 - 49^2 = (51 - 49)(51 + 49) = 2\\times 100 = 200$
$999^2 - 1 = (999 - 1)(999 + 1) = 998\\times 1000 = 998{,}000$`,
          examples: `**Example 1.** Factorise $a^2 - b^2$. *Answer:* $(a - b)(a + b)$.

**Example 2.** Factorise $2x^2 - 50$. *Solution:* $2(x^2 - 25) = 2(x - 5)(x + 5)$.

**Example 3.** Is $x^2 - 6x + 9$ a perfect square? *Answer:* yes: $(x - 3)^2$ because $2\\times 3 = 6$.`,
        },
        questions: [
          ["E", "Factorise $x^2 - 9$.", "$(x - 3)(x + 3)$", "$(x - 3)^2$", "$(x - 9)(x + 1)$", "$(x + 3)^2$", "Difference of two squares: x² − 3²."],
          ["E", "Factorise $a^2 - b^2$.", "$(a - b)(a + b)$", "$(a - b)^2$", "$(a + b)^2$", "$a(a - b)$", "This is the difference of two squares."],
          ["E", "Which of these is a perfect square trinomial?", "$x^2 + 6x + 9$", "$x^2 + 6x + 8$", "$x^2 + 9$", "$x^2 - 6x - 9$", "x² + 6x + 9 = (x + 3)²."],
          ["M", "Factorise $4x^2 - 25$.", "$(2x - 5)(2x + 5)$", "$(4x - 5)(x + 5)$", "$(2x - 5)^2$", "$(2x - 25)(2x + 1)$", "(2x)² − 5² = (2x − 5)(2x + 5)."],
          ["M", "Evaluate $51^2 - 49^2$.", "200", "4", "100", "400", "(51 − 49)(51 + 49) = 2 × 100 = 200."],
          ["M", "Factorise $x^2 + 10x + 25$.", "$(x + 5)^2$", "$(x + 25)(x + 1)$", "$(x + 5)(x - 5)$", "$(x + 10)(x + 2.5)$", "5 × 5 = 25 and 5 + 5 = 10."],
          ["M", "Factorise $3x^2 - 12$ completely.", "$3(x - 2)(x + 2)$", "$3(x - 2)^2$", "$(3x - 4)(x + 3)$", "$3(x - 4)(x + 4)$", "3(x² − 4) = 3(x − 2)(x + 2)."],
          ["H", "Evaluate $999^2 - 1$.", "998,000", "998,001", "999,000", "1,000,000", "(999 − 1)(999 + 1) = 998 × 1,000."],
          ["H", "Factorise $9a^2 - 16b^2$.", "$(3a - 4b)(3a + 4b)$", "$(3a - 4b)^2$", "$(9a - 4b)(a + 4b)$", "$(3a - 16b)(3a + b)$", "9a² − 16b² = (3a)² − (4b)², a difference of two squares, so it factorises as (3a − 4b)(3a + 4b)."],
          ["H", "Factorise $x^4 - 16$ completely.", "$(x - 2)(x + 2)(x^2 + 4)$", "$(x^2 - 4)^2$", "$(x - 2)^4$", "$(x - 4)(x + 4)$", "(x² − 4)(x² + 4), and x² − 4 = (x − 2)(x + 2)."],
        ],
      },
      {
        week: 3,
        title: "Algebraic fractions",
        subtopics: ["Simplifying algebraic fractions", "Adding and subtracting algebraic fractions", "Multiplying and dividing algebraic fractions", "Values that make a fraction undefined"],
        objectives: ["Simplify algebraic fractions by cancelling common factors", "Add and subtract algebraic fractions using a common denominator", "Multiply and divide algebraic fractions", "State values for which an algebraic fraction is undefined"],
        lesson: {
          title: "Working with Algebraic Fractions",
          summary: "Simplify, add, subtract, multiply and divide fractions that contain letters.",
          minutes: 40,
          notes: `## Simplifying
Cancel **factors**, never individual terms. Factorise first:
$\\frac{x^2 - 9}{x + 3} = \\frac{(x - 3)(x + 3)}{x + 3} = x - 3$
$\\frac{x^2 + 3x}{x^2 - 9} = \\frac{x(x + 3)}{(x - 3)(x + 3)} = \\frac{x}{x - 3}$
A common mistake is cancelling $x$ in $\\frac{x + 3}{x}$ — you cannot, because $x$ is not a factor of the whole numerator.

## Adding and subtracting
Use a **common denominator** (the LCM), exactly as with number fractions:
$\\frac{x}{2} + \\frac{x}{3} = \\frac{3x + 2x}{6} = \\frac{5x}{6}$
$\\frac{3}{a} - \\frac{2}{b} = \\frac{3b - 2a}{ab}$
$\\frac{x + 1}{2} - \\frac{x - 1}{3} = \\frac{3(x + 1) - 2(x - 1)}{6} = \\frac{x + 5}{6}$

## Multiplying and dividing
Multiply numerators and denominators; to divide, multiply by the reciprocal. Cancel common factors first.
$\\frac{2}{x}\\times\\frac{x^2}{6} = \\frac{x}{3}$

## Undefined values
A fraction is **undefined** when its denominator is zero: $\\frac{5}{x - 2}$ is undefined when $x = 2$.`,
          examples: `**Example 1.** Simplify $\\frac{6x}{9x}$. *Answer:* $\\frac{2}{3}$.

**Example 2.** Simplify $\\frac{4ab}{2a}$. *Answer:* $2b$.

**Example 3.** Simplify $\\frac{a}{3} + \\frac{a}{3}$. *Answer:* $\\frac{2a}{3}$.`,
        },
        questions: [
          ["E", "Simplify $\\frac{6x}{9x}$.", "$\\frac{2}{3}$", "$\\frac{2x}{3}$", "$\\frac{3}{2}$", "$\\frac{x}{3}$", "Cancel the common factor 3x."],
          ["E", "Simplify $\\frac{a}{3} + \\frac{a}{3}$.", "$\\frac{2a}{3}$", "$\\frac{2a}{6}$", "$\\frac{a^2}{3}$", "$\\frac{a}{9}$", "Same denominator: add the numerators."],
          ["E", "Simplify $\\frac{4ab}{2a}$.", "$2b$", "$2ab$", "$4b$", "$2a$", "4 ÷ 2 = 2 and the a cancels."],
          ["M", "Simplify $\\frac{x}{2} + \\frac{x}{3}$.", "$\\frac{5x}{6}$", "$\\frac{2x}{5}$", "$\\frac{x}{6}$", "$\\frac{2x}{6}$", "(3x + 2x) ÷ 6 = 5x/6."],
          ["M", "Simplify $\\frac{x^2 - 9}{x + 3}$.", "$x - 3$", "$x + 3$", "$x - 9$", "$\\frac{x - 3}{x + 3}$", "x² − 9 = (x − 3)(x + 3); cancel (x + 3)."],
          ["M", "Simplify $\\frac{3}{a} - \\frac{2}{b}$.", "$\\frac{3b - 2a}{ab}$", "$\\frac{1}{a - b}$", "$\\frac{3a - 2b}{ab}$", "$\\frac{1}{ab}$", "Common denominator ab: 3b/ab − 2a/ab."],
          ["M", "Simplify $\\frac{2}{x}\\times\\frac{x^2}{6}$.", "$\\frac{x}{3}$", "$\\frac{x^2}{3}$", "$\\frac{3}{x}$", "$\\frac{x}{12}$", "Multiply the fractions to get 2x²/(6x), then cancel 2x: the result is x/3."],
          ["H", "Simplify $\\frac{x + 1}{2} - \\frac{x - 1}{3}$.", "$\\frac{x + 5}{6}$", "$\\frac{x + 1}{6}$", "$\\frac{x - 5}{6}$", "$\\frac{5x + 5}{6}$", "(3x + 3 − 2x + 2) ÷ 6 = (x + 5)/6."],
          ["H", "Simplify $\\frac{x^2 + 3x}{x^2 - 9}$.", "$\\frac{x}{x - 3}$", "$\\frac{x}{x + 3}$", "$\\frac{1}{x - 3}$", "$\\frac{x + 3}{x}$", "x(x + 3) ÷ [(x − 3)(x + 3)] = x/(x − 3)."],
          ["H", "For which value of $x$ is $\\frac{5}{x - 2}$ undefined?", "2", "5", "0", "−2", "The denominator is zero when x = 2."],
        ],
      },
      {
        week: 4,
        title: "Simultaneous linear equations",
        subtopics: ["Meaning of simultaneous equations", "The elimination method", "The substitution method", "Equations with fractions"],
        objectives: ["Explain what it means to solve two equations simultaneously", "Solve simultaneous equations by elimination", "Solve simultaneous equations by substitution", "Check solutions in both equations"],
        lesson: {
          title: "Solving Simultaneous Equations",
          summary: "Find the pair of values that satisfies two linear equations at the same time.",
          minutes: 45,
          notes: `## What does "simultaneous" mean?
Two equations such as $x + y = 10$ and $x - y = 2$ are true **at the same time** for just one pair of values: $x = 6$, $y = 4$.

## Elimination
1. If necessary, multiply one or both equations so that one letter has the **same coefficient** in both.
2. **Add** the equations if the signs are different, **subtract** if they are the same, to eliminate that letter.
3. Solve for the remaining letter, then substitute back to find the other.
$5x + 3y = 21$ and $2x + 5y = 16$: multiply by 5 and 3 to get $25x + 15y = 105$ and $6x + 15y = 48$. Subtract: $19x = 57$, so $x = 3$ and $y = 2$.

## Substitution
1. Make one letter the subject of one equation.
2. Substitute into the other equation and solve.
$y = 2x - 4$ and $x + 2y = 7$: $x + 2(2x - 4) = 7 \\Rightarrow 5x = 15 \\Rightarrow x = 3$, $y = 2$.

## Fractions
Clear fractions first (multiply by the LCM), then solve as usual.

## Check
Substitute **both** values into **both** original equations.`,
          examples: `**Example 1.** $2x + y = 11$ and $x - y = 1$. *Add:* $3x = 12$, $x = 4$, $y = 3$.

**Example 2.** $3x + 2y = 16$ and $x + 2y = 8$. *Subtract:* $2x = 8$, $x = 4$, $y = 2$.

**Example 3.** $\\frac{x}{2} + \\frac{y}{3} = 4$ and $x - y = 3$. *Solution:* $3x + 2y = 24$ and $x = y + 3$, so $5y + 9 = 24$, $y = 3$, $x = 6$.`,
        },
        questions: [
          ["E", "Solve $x + y = 10$ and $x - y = 2$.", "$x = 6, y = 4$", "$x = 4, y = 6$", "$x = 8, y = 2$", "$x = 5, y = 5$", "Adding gives 2x = 12, so x = 6 and y = 4."],
          ["E", "If $x = 3$ and $x + y = 7$, find $y$.", "4", "10", "3", "21", "3 + y = 7, so y = 4."],
          ["E", "In the elimination method, the aim is to", "make the coefficients of one letter equal so that it cancels", "multiply the two equations together", "draw the graphs", "square both equations", "Adding or subtracting then removes one unknown."],
          ["M", "Solve $2x + y = 11$ and $x - y = 1$.", "$x = 4, y = 3$", "$x = 3, y = 4$", "$x = 5, y = 1$", "$x = 3, y = 5$", "Adding gives 3x = 12, so x = 4 and y = 3."],
          ["M", "Solve $y = 2x$ and $x + y = 12$.", "$x = 4, y = 8$", "$x = 8, y = 4$", "$x = 6, y = 6$", "$x = 3, y = 6$", "x + 2x = 12, so x = 4 and y = 8."],
          ["M", "Solve $3x + 2y = 16$ and $x + 2y = 8$.", "$x = 4, y = 2$", "$x = 2, y = 4$", "$x = 4, y = 3$", "$x = 3, y = 2$", "Subtracting gives 2x = 8, so x = 4 and y = 2."],
          ["M", "Solve $x + 2y = 7$ and $2x - y = 4$.", "$x = 3, y = 2$", "$x = 2, y = 3$", "$x = 1, y = 3$", "$x = 3, y = 1$", "y = 2x − 4; x + 4x − 8 = 7, so x = 3 and y = 2."],
          ["H", "Solve $5x + 3y = 21$ and $2x + 5y = 16$.", "$x = 3, y = 2$", "$x = 2, y = 3$", "$x = 3, y = 1$", "$x = 1, y = 3$", "25x + 15y = 105 and 6x + 15y = 48; subtracting gives 19x = 57."],
          ["H", "Solve $\\frac{x}{2} + \\frac{y}{3} = 4$ and $x - y = 3$.", "$x = 6, y = 3$", "$x = 3, y = 6$", "$x = 5, y = 2$", "$x = 6, y = 4$", "3x + 2y = 24 and x = y + 3 give 5y + 9 = 24, so y = 3."],
          ["H", "Solve $4x - 3y = 1$ and $2x + 3y = 11$.", "$x = 2, y = \\frac{7}{3}$", "$x = 2, y = 3$", "$x = 3, y = 2$", "$x = 1, y = 3$", "Adding gives 6x = 12, so x = 2; then 3y = 7."],
        ],
      },
      {
        week: 5,
        title: "Word problems on simultaneous equations",
        subtopics: ["Forming two equations from a problem", "Money and cost problems", "Age and number problems", "Fractions and digits problems"],
        objectives: ["Choose letters for two unknowns and form two equations", "Solve problems about prices and quantities", "Solve problems about ages and numbers", "Interpret and check solutions in the context of the problem"],
        lesson: {
          title: "Problems Leading to Simultaneous Equations",
          summary: "Translate real situations with two unknowns into a pair of equations and solve them.",
          minutes: 40,
          notes: `## Method
1. Choose two letters for the two unknowns and **say what they stand for**.
2. Use **two different facts** from the question to write two equations.
3. Solve by elimination or substitution.
4. Answer in words, with units, and check against the original facts.

## Typical situations
- **Prices:** 3 pens and 2 books cost ₦1,300 → $3p + 2b = 1300$.
- **Tickets:** adults and children → one equation for the number of tickets, one for the money.
- **Ages:** "24 years older" → $f = s + 24$.
- **Two-digit numbers:** a number with tens digit $a$ and units digit $b$ is $10a + b$; reversed it is $10b + a$.
- **Fractions:** an unknown fraction $\\frac{x}{y}$ with conditions on numerator and denominator.

## Checking matters
The answers must make sense: a number of tickets must be a whole number, ages must be positive, and so on.`,
          examples: `**Example 1.** 3 pens and 2 books cost ₦1,300; 1 pen and 2 books cost ₦900.
*Subtract:* $2p = 400$, so a pen costs ₦200 and a book costs ₦350.

**Example 2.** The digits of a two-digit number add up to 9. Reversing the digits increases the number by 27.
*Solution:* $a + b = 9$ and $10b + a = 10a + b + 27$, so $b - a = 3$; $a = 3$, $b = 6$. The number is **36**.

**Example 3.** Adding 1 to the numerator and denominator of a fraction gives $\\frac{1}{2}$; subtracting 1 from both gives $\\frac{1}{3}$. The fraction is $\\frac{3}{7}$.`,
        },
        questions: [
          ["E", "The sum of two numbers is 20 and their difference is 4. What is the larger number?", "12", "8", "16", "10", "x + y = 20 and x − y = 4 give 2x = 24, so x = 12."],
          ["E", "Which pair of values satisfies both $x + y = 5$ and $x - y = 1$?", "$x = 3, y = 2$", "$x = 2, y = 3$", "$x = 4, y = 1$", "$x = 5, y = 0$", "3 + 2 = 5 and 3 − 2 = 1."],
          ["M", "3 pens and 2 books cost ₦1,300, while 1 pen and 2 books cost ₦900. What does one pen cost?", "₦200", "₦350", "₦300", "₦250", "Subtracting gives 2 pens = ₦400."],
          ["M", "3 pens and 2 books cost ₦1,300, while 1 pen and 2 books cost ₦900. What does one book cost?", "₦350", "₦200", "₦450", "₦400", "A pen costs ₦200, so 2 books cost ₦700 and one book costs ₦350."],
          ["M", "Adult tickets cost ₦500 and child tickets cost ₦200. Ten tickets cost ₦3,500. How many adult tickets were bought?", "5", "7", "3", "4", "a + c = 10 and 500a + 200c = 3,500 give 300a = 1,500."],
          ["M", "A father is 24 years older than his son. The sum of their ages is 50. How old is the son?", "13", "26", "37", "12", "s + (s + 24) = 50, so 2s = 26 and s = 13."],
          ["H", "When 1 is added to the numerator and denominator of a fraction it becomes $\\frac{1}{2}$. When 1 is subtracted from both it becomes $\\frac{1}{3}$. Find the fraction.", "$\\frac{3}{7}$", "$\\frac{2}{5}$", "$\\frac{3}{5}$", "$\\frac{4}{9}$", "y = 2x + 1 and y = 3x − 2 give x = 3, y = 7."],
          ["H", "The digits of a two-digit number add up to 9. When the digits are reversed, the number increases by 27. What is the number?", "36", "63", "45", "27", "a + b = 9 and b − a = 3 give a = 3, b = 6."],
          ["H", "2 mangoes and 3 oranges cost ₦270. 3 mangoes and 2 oranges cost ₦280. What does one mango cost?", "₦60", "₦50", "₦70", "₦110", "Adding: 5(m + o) = 550, so m + o = 110; subtracting: m − o = 10; m = 60."],
          ["H", "The sum of two numbers is 25 and one number is 4 times the other. What is the smaller number?", "5", "20", "4", "6.25", "x + 4x = 25, so x = 5."],
        ],
      },
      {
        week: 6,
        title: "Graphical solution of simultaneous equations",
        subtopics: ["Drawing two lines on the same axes", "Reading the point of intersection", "Parallel lines and no solution", "Checking graphical solutions algebraically"],
        objectives: ["Draw the graphs of two linear equations on the same axes", "Read the solution as the point of intersection", "Recognise when simultaneous equations have no solution", "Confirm graphical solutions by algebra"],
        lesson: {
          title: "Solving Simultaneous Equations with Graphs",
          summary: "Find where two straight lines meet and link it to the solution of the equations.",
          minutes: 40,
          notes: `## The idea
Every point on the line $x + y = 6$ satisfies that equation. The point that lies on **both** lines satisfies **both** equations, so the solution of the simultaneous equations is the **point of intersection**.

## Method
1. Rearrange each equation into the form $y = \\ldots$ if helpful.
2. Make a table of values (three points) for each line.
3. Draw both lines on the same axes, using the same scale.
4. Read the coordinates of the crossing point: $x$ is the first value and $y$ the second.

## Special cases
- **Parallel lines** (same gradient, different intercepts), such as $y = 2x + 1$ and $y = 2x - 3$, never meet: there is **no solution**.
- If the two equations give the **same line**, there are infinitely many solutions.

## Accuracy
Graphical answers are only as accurate as the drawing. Check by substituting into both equations or by solving algebraically: $x + 1 = 3 - x$ gives $x = 1$, $y = 2$.`,
          examples: `**Example 1.** $y = x + 1$ and $y = -x + 5$ meet where $x + 1 = -x + 5$, i.e. at $(2, 3)$.

**Example 2.** $x + y = 6$ and $x - y = 2$ meet at $(4, 2)$.

**Example 3.** $2x + y = 7$ and $y = x + 1$: $2x + x + 1 = 7$ gives $(2, 3)$.`,
        },
        questions: [
          ["E", "On a graph, the solution of two simultaneous linear equations is", "the point where the two lines cross", "where each line crosses the x-axis", "the y-intercepts of the lines", "the gradient of the lines", "The crossing point lies on both lines."],
          ["E", "If the graphs of two linear equations are parallel, the equations have", "no solution", "exactly one solution", "exactly two solutions", "infinitely many solutions", "Parallel lines never meet."],
          ["E", "The graph of a linear equation is", "a straight line", "a curve", "a circle", "a parabola", "Linear means 'line'."],
          ["M", "At which point do $y = x + 1$ and $y = -x + 5$ meet?", "$(2, 3)$", "$(3, 2)$", "$(1, 2)$", "$(2, 5)$", "x + 1 = −x + 5 gives x = 2, y = 3."],
          ["M", "At which point do $y = 2x$ and $y = x + 3$ meet?", "$(3, 6)$", "$(6, 3)$", "$(3, 3)$", "$(1, 2)$", "2x = x + 3 gives x = 3, y = 6."],
          ["M", "At which point do $y = 3$ and $y = 2x - 1$ meet?", "$(2, 3)$", "$(3, 2)$", "$(1, 3)$", "$(2, -1)$", "2x − 1 = 3 gives x = 2."],
          ["M", "Which pair of lines has no point of intersection?", "$y = 2x + 1$ and $y = 2x - 3$", "$y = x + 1$ and $y = -x + 1$", "$y = 3x$ and $y = x$", "$y = 2$ and $x = 2$", "The first pair have the same gradient, 2, so they are parallel."],
          ["H", "At which point do the graphs of $x + y = 6$ and $x - y = 2$ meet?", "$(4, 2)$", "$(2, 4)$", "$(3, 3)$", "$(6, 2)$", "Adding: 2x = 8, x = 4, y = 2."],
          ["H", "At which point do $2x + y = 7$ and $y = x + 1$ meet?", "$(2, 3)$", "$(3, 2)$", "$(1, 5)$", "$(2, 5)$", "2x + x + 1 = 7 gives x = 2, y = 3."],
          ["H", "The point $(1, 4)$ lies on both $y = 3x + 1$ and $y = ax + 2$. Find $a$.", "2", "3", "4", "1", "4 = a(1) + 2, so a = 2."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Similar shapes and similar triangles",
        subtopics: ["Similarity and congruence", "Scale factors", "Similar triangles", "Areas of similar shapes"],
        objectives: ["Distinguish between similar and congruent shapes", "Find the scale factor between similar shapes", "Calculate missing sides in similar triangles", "Relate the ratio of areas to the ratio of lengths"],
        lesson: {
          title: "Similarity",
          summary: "Use scale factors to find missing lengths in similar shapes and compare their areas.",
          minutes: 40,
          notes: `## Similar and congruent
- **Similar** shapes have the same shape: corresponding **angles are equal** and corresponding **sides are in the same ratio**.
- **Congruent** shapes are identical in shape **and** size.

## Scale factor
$\\text{Scale factor} = \\frac{\\text{length on the new shape}}{\\text{corresponding length on the original}}$
From 6 cm to 15 cm the scale factor is $\\frac{15}{6} = 2.5$.

## Similar triangles
Two triangles are similar if their angles are equal (two pairs are enough). Then
$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$
When a line **DE** is drawn **parallel to BC** inside triangle ABC, triangle ADE is similar to triangle ABC: $\\frac{AD}{AB} = \\frac{DE}{BC}$.

## Shadows
At the same time of day, objects and their shadows form similar triangles: a 2 m pole with a 3 m shadow means a tree with a 12 m shadow is 8 m tall.

## Areas
If the lengths are multiplied by $k$, the area is multiplied by $k^2$. Doubling the sides of a rectangle multiplies its area by 4.`,
          examples: `**Example 1.** Triangles with sides 3, 4, 5 and 9, 12, $x$ are similar. *Scale factor* 3, so $x = 15$.

**Example 2.** A 10 cm by 15 cm photo is enlarged so the width becomes 25 cm. *Scale factor* 2.5, so the length becomes 37.5 cm.

**Example 3.** In triangle ABC, DE ∥ BC, AD = 4, AB = 10 and DE = 6. *Then* $\\frac{4}{10} = \\frac{6}{BC}$, so BC = 15.`,
        },
        questions: [
          ["E", "Similar shapes always have", "equal corresponding angles and sides in the same ratio", "equal sides", "the same area", "the same perimeter", "Similar shapes are enlargements of each other."],
          ["E", "Congruent shapes are", "identical in shape and size", "the same shape but different sizes", "the same size but different shapes", "always triangles", "Congruent shapes fit exactly on top of each other."],
          ["E", "Two similar triangles are in the ratio 1 : 3. A side of the small triangle is 4 cm. What is the corresponding side of the large triangle?", "12 cm", "7 cm", "1.33 cm", "43 cm", "The large triangle is 3 times the size, so the side is 4 × 3 = 12 cm."],
          ["M", "Two similar triangles have sides 3, 4, 5 and 9, 12, $x$. Find $x$.", "15", "13", "20", "10", "The scale factor is 3, so x = 5 × 3 = 15."],
          ["M", "A 10 cm by 15 cm photograph is enlarged so that its width becomes 25 cm. What is the new length?", "37.5 cm", "30 cm", "40 cm", "50 cm", "Scale factor = 25 ÷ 10 = 2.5; 15 × 2.5 = 37.5 cm."],
          ["M", "What is the scale factor of the enlargement from a side of 6 cm to a side of 15 cm?", "2.5", "9", "0.4", "2", "Scale factor = new length ÷ original length = 15 ÷ 6 = 2.5."],
          ["M", "A 2 m pole casts a 3 m shadow. At the same time a tree casts a 12 m shadow. How tall is the tree?", "8 m", "18 m", "6 m", "10 m", "2/3 = h/12, so h = 8 m."],
          ["H", "The lengths of a shape are multiplied by 3. By what number is its area multiplied?", "9", "3", "6", "27", "Area scale factor = (length scale factor)² = 9."],
          ["H", "Two similar rectangles have lengths in the ratio 1 : 2. The smaller has area 20 cm². What is the area of the larger?", "80 cm²", "40 cm²", "60 cm²", "160 cm²", "Area ratio = 1 : 4; 20 × 4 = 80 cm²."],
          ["H", "In triangle ABC, DE is parallel to BC with D on AB and E on AC. AD = 4 cm, AB = 10 cm and DE = 6 cm. Find BC.", "15 cm", "12 cm", "9 cm", "2.4 cm", "AD/AB = DE/BC gives 4/10 = 6/BC, so BC = 15 cm."],
        ],
      },
      {
        week: 2,
        title: "Pythagoras' theorem",
        subtopics: ["The hypotenuse", "Statement of the theorem", "Finding a missing side", "Applications and Pythagorean triples"],
        objectives: ["Identify the hypotenuse of a right-angled triangle", "State Pythagoras' theorem", "Calculate the length of any missing side of a right-angled triangle", "Apply the theorem to ladders, diagonals and distances on a grid"],
        lesson: {
          title: "Pythagoras' Theorem",
          summary: "Use the relationship between the sides of a right-angled triangle to find missing lengths.",
          minutes: 40,
          notes: `## The hypotenuse
In a right-angled triangle the **hypotenuse** is the side **opposite the right angle**. It is always the **longest** side.

## The theorem
In a right-angled triangle with hypotenuse $c$ and shorter sides $a$ and $b$:
$c^2 = a^2 + b^2$

## Finding the hypotenuse — add
$c = \\sqrt{a^2 + b^2}$. Legs 5 and 12: $c = \\sqrt{25 + 144} = \\sqrt{169} = 13$.

## Finding a shorter side — subtract
$a = \\sqrt{c^2 - b^2}$. Hypotenuse 10 and one leg 6: $a = \\sqrt{100 - 36} = 8$.

## Pythagorean triples
Whole-number sets that fit the theorem: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25) and their multiples such as (6, 8, 10).

## Testing for a right angle
If $c^2 = a^2 + b^2$ for the longest side $c$, the triangle **is** right-angled: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$.

## Applications
Ladders against walls, diagonals of rectangles, and distances between points: the distance from $(1, 2)$ to $(4, 6)$ is $\\sqrt{3^2 + 4^2} = 5$.`,
          examples: `**Example 1.** A 13 m ladder leans against a wall with its foot 5 m from the wall. *Height reached:* $\\sqrt{169 - 25} = 12$ m.

**Example 2.** The diagonal of an 8 cm by 6 cm rectangle is $\\sqrt{64 + 36} = 10$ cm.

**Example 3.** A square has diagonal $10\\sqrt{2}$ cm. *Side:* $s^2 + s^2 = 200$, so $s = 10$ cm.`,
        },
        questions: [
          ["E", "A right-angled triangle has shorter sides 3 cm and 4 cm. What is the hypotenuse?", "5 cm", "7 cm", "25 cm", "12 cm", "√(9 + 16) = √25 = 5 cm."],
          ["E", "In a right-angled triangle with hypotenuse $c$ and other sides $a$ and $b$, Pythagoras' theorem states that", "$c^2 = a^2 + b^2$", "$c = a + b$", "$c^2 = a^2 - b^2$", "$a^2 = b^2 + c^2$", "The square on the hypotenuse equals the sum of the squares on the other two sides."],
          ["E", "The hypotenuse of a right-angled triangle is", "the side opposite the right angle", "the shortest side", "any side", "the base", "It is also the longest side."],
          ["M", "The shorter sides of a right-angled triangle are 5 cm and 12 cm. Find the hypotenuse.", "13 cm", "17 cm", "169 cm", "60 cm", "√(25 + 144) = √169 = 13 cm."],
          ["M", "The hypotenuse of a right-angled triangle is 10 cm and one side is 6 cm. Find the third side.", "8 cm", "4 cm", "16 cm", "64 cm", "√(100 − 36) = √64 = 8 cm."],
          ["M", "A 13 m ladder leans against a wall. Its foot is 5 m from the wall. How high up the wall does it reach?", "12 m", "8 m", "18 m", "144 m", "√(169 − 25) = √144 = 12 m."],
          ["M", "Is a triangle with sides 7 cm, 24 cm and 25 cm right-angled?", "Yes, because 7² + 24² = 25²", "No, because 7 + 24 ≠ 25", "No, because 25 is not the longest side", "It cannot be decided", "49 + 576 = 625 = 25²."],
          ["H", "Find the length of the diagonal of a rectangle 8 cm by 6 cm.", "10 cm", "14 cm", "48 cm", "12 cm", "√(64 + 36) = √100 = 10 cm."],
          ["H", "Find the distance between the points $(1, 2)$ and $(4, 6)$.", "5 units", "7 units", "25 units", "3 units", "Horizontal 3, vertical 4: √(9 + 16) = 5."],
          ["H", "A square has a diagonal of $10\\sqrt{2}$ cm. How long is each side?", "10 cm", "$5\\sqrt{2}$ cm", "20 cm", "5 cm", "s² + s² = (10√2)² = 200, so s² = 100 and s = 10 cm."],
        ],
      },
      {
        week: 3,
        title: "Trigonometric ratios",
        subtopics: ["Naming the sides: opposite, adjacent, hypotenuse", "Sine, cosine and tangent", "Ratios of special angles", "Finding sides using trigonometry"],
        objectives: ["Label the sides of a right-angled triangle relative to an angle", "Define sine, cosine and tangent", "State the ratios of 30°, 45° and 60°", "Calculate unknown sides using trigonometric ratios"],
        lesson: {
          title: "Sine, Cosine and Tangent",
          summary: "Use the three trigonometric ratios to find unknown sides in right-angled triangles.",
          minutes: 45,
          notes: `## Naming the sides
For an acute angle $\\theta$ in a right-angled triangle:
- the **hypotenuse** is opposite the right angle;
- the **opposite** side is opposite $\\theta$;
- the **adjacent** side is next to $\\theta$ (but is not the hypotenuse).

## The ratios — SOH CAH TOA
$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$, $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$

## Special angles
| | 30° | 45° | 60° |
|---|---|---|---|
| sin | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ |
| cos | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ |
| tan | $\\frac{1}{\\sqrt{3}}$ | 1 | $\\sqrt{3}$ |

## Finding a side
1. Label the sides from the given angle.
2. Choose the ratio that links the side you know with the side you want.
3. Substitute and solve.
Hypotenuse 10 cm, angle 30°, opposite side: $\\sin 30° = \\frac{x}{10}$, so $x = 10\\times\\frac{1}{2} = 5$ cm.

## Using a known ratio
If $\\sin\\theta = \\frac{3}{5}$, draw a triangle with opposite 3 and hypotenuse 5; Pythagoras gives adjacent 4, so $\\tan\\theta = \\frac{3}{4}$.`,
          examples: `**Example 1.** In a triangle with opposite 3, adjacent 4 and hypotenuse 5, $\\cos\\theta = \\frac{4}{5}$.

**Example 2.** A ladder makes 60° with the ground; its foot is 2 m from the wall. *Length:* $\\cos 60° = \\frac{2}{L}$, so $L = 4$ m.

**Example 3.** Adjacent side 8 cm and angle 45°: opposite $= 8\\tan 45° = 8$ cm.`,
        },
        questions: [
          ["E", "In a right-angled triangle, $\\sin\\theta$ equals", "opposite ÷ hypotenuse", "adjacent ÷ hypotenuse", "opposite ÷ adjacent", "hypotenuse ÷ opposite", "SOH: sine = opposite over hypotenuse."],
          ["E", "In a right-angled triangle, $\\tan\\theta$ equals", "opposite ÷ adjacent", "adjacent ÷ opposite", "opposite ÷ hypotenuse", "adjacent ÷ hypotenuse", "TOA: tangent = opposite over adjacent."],
          ["E", "A right-angled triangle has opposite side 3, adjacent side 4 and hypotenuse 5 for angle θ. What is $\\cos\\theta$?", "$\\frac{4}{5}$", "$\\frac{3}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{4}$", "cos = adjacent ÷ hypotenuse = 4/5."],
          ["M", "What is the value of $\\sin 30°$?", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "1", "$\\frac{\\sqrt{2}}{2}$", "This is one of the special-angle values."],
          ["M", "What is the value of $\\tan 45°$?", "1", "0", "$\\sqrt{3}$", "$\\frac{1}{2}$", "In a right isosceles triangle opposite = adjacent."],
          ["M", "What is the value of $\\cos 60°$?", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "0", "1", "cos 60° = sin 30° = ½."],
          ["M", "A right-angled triangle has hypotenuse 10 cm and an angle of 30°. How long is the side opposite the 30° angle?", "5 cm", "8.66 cm", "10 cm", "20 cm", "10 × sin 30° = 10 × ½ = 5 cm."],
          ["H", "If $\\sin\\theta = \\frac{3}{5}$ and θ is acute, find $\\tan\\theta$.", "$\\frac{3}{4}$", "$\\frac{4}{3}$", "$\\frac{4}{5}$", "$\\frac{5}{3}$", "Opposite 3, hypotenuse 5, so adjacent = 4 and tan θ = 3/4."],
          ["H", "In a right-angled triangle the side adjacent to a 45° angle is 8 cm. How long is the opposite side?", "8 cm", "4 cm", "16 cm", "$8\\sqrt{2}$ cm", "opposite = 8 × tan 45° = 8 × 1 = 8 cm."],
          ["H", "A ladder makes an angle of 60° with the ground and its foot is 2 m from the wall. How long is the ladder?", "4 m", "$2\\sqrt{3}$ m", "1 m", "3 m", "cos 60° = 2/L, so L = 2 ÷ ½ = 4 m."],
        ],
      },
      {
        week: 4,
        title: "Angles of elevation and depression",
        subtopics: ["Angle of elevation", "Angle of depression", "Solving problems with heights and distances", "Using a clinometer"],
        objectives: ["Distinguish between angles of elevation and depression", "Draw clear diagrams for elevation and depression problems", "Calculate heights and distances using trigonometry", "Explain how a clinometer is used"],
        lesson: {
          title: "Heights and Distances",
          summary: "Apply trigonometry to find heights of buildings and trees and distances across land and water.",
          minutes: 40,
          notes: `## Definitions
- The **angle of elevation** is the angle measured **upwards** from the horizontal to an object above the observer (e.g. the top of a tree).
- The **angle of depression** is the angle measured **downwards** from the horizontal to an object below the observer (e.g. a boat seen from a cliff).
The angle of depression from A to B equals the angle of elevation from B to A (they are alternate angles).

## Method
1. Draw a clear diagram with the **horizontal line** and the right angle.
2. Mark the angle, the known length and the unknown.
3. Choose sin, cos or tan and solve.
4. Add the observer's eye height if needed.

## Useful values
$\\tan 30° \\approx 0.577$, $\\tan 45° = 1$, $\\tan 60° \\approx 1.732$, $\\sin 30° = 0.5$.

## Instruments
A **clinometer** measures angles of elevation and depression; surveyors use a theodolite.`,
          examples: `**Example 1.** From 20 m away, the angle of elevation of a tree top is 45°. *Height:* $20\\tan 45° = 20$ m.

**Example 2.** From the top of a 60 m tower, the angle of depression of a car is 30°. *Distance:* $d = \\frac{60}{\\tan 30°} = \\frac{60}{0.577}\\approx 104$ m.

**Example 3.** A 1.5 m tall student 10 m from a flagpole sees its top at 45°. *Height of pole:* $10 + 1.5 = 11.5$ m.`,
        },
        questions: [
          ["E", "The angle of elevation is measured", "upwards from the horizontal", "downwards from the horizontal", "from the vertical", "along the ground", "You look up at an object above you."],
          ["E", "The angle of depression from A to B is equal to", "the angle of elevation from B to A", "90° minus the angle of elevation", "twice the angle of elevation", "180° minus the angle of elevation", "They are alternate angles between parallel horizontal lines."],
          ["E", "Which instrument is used to measure angles of elevation?", "Clinometer", "Thermometer", "Barometer", "Compass", "A clinometer measures angles of inclination."],
          ["M", "From a point 20 m from the foot of a tree, the angle of elevation of the top is 45°. How tall is the tree?", "20 m", "10 m", "40 m", "$20\\sqrt{2}$ m", "h = 20 × tan 45° = 20 m."],
          ["M", "From a point 30 m from a building, the angle of elevation of the top is 30°. How tall is the building? (Take $\\tan 30° = 0.577$.)", "17.3 m", "15 m", "52 m", "25 m", "30 × 0.577 = 17.3 m."],
          ["M", "A kite string 50 m long makes an angle of 30° with the ground. How high is the kite?", "25 m", "43.3 m", "50 m", "100 m", "h = 50 × sin 30° = 25 m."],
          ["M", "From the top of a 40 m cliff, the angle of depression of a boat is 45°. How far is the boat from the foot of the cliff?", "40 m", "20 m", "56.6 m", "80 m", "tan 45° = 40/d, so d = 40 m."],
          ["H", "From the top of a 60 m tower, the angle of depression of a car is 30°. How far is the car from the foot of the tower? (Take $\\tan 30° = 0.577$.)", "104 m", "34.6 m", "60 m", "120 m", "d = 60 ÷ 0.577 ≈ 104 m."],
          ["H", "A student whose eyes are 1.5 m above the ground stands 10 m from a flagpole and sees its top at an angle of elevation of 45°. How tall is the flagpole?", "11.5 m", "10 m", "8.5 m", "11 m", "10 × tan 45° = 10 m above eye level, plus 1.5 m."],
          ["H", "A pole 6 m high casts a shadow $6\\sqrt{3}$ m long. What is the angle of elevation of the sun?", "30°", "60°", "45°", "90°", "tan θ = 6/(6√3) = 1/√3, so θ = 30°."],
        ],
      },
      {
        week: 5,
        title: "Bearings",
        subtopics: ["Compass directions", "Three-figure bearings", "Back bearings", "Distances using bearings and Pythagoras"],
        objectives: ["Give directions using compass points", "Write and measure three-figure bearings", "Calculate back bearings", "Solve distance problems involving bearings"],
        lesson: {
          title: "Bearings and Directions",
          summary: "Describe directions with three-figure bearings and solve navigation problems.",
          minutes: 40,
          notes: `## Three-figure bearings
A **bearing** is an angle measured **clockwise from north**, written with **three figures**:
| Direction | Bearing |
|---|---|
| North | 000° |
| North-east | 045° |
| East | 090° |
| South-east | 135° |
| South | 180° |
| South-west | 225° |
| West | 270° |
| North-west | 315° |

## Compass (quadrant) bearings
N 30° E means start facing north and turn 30° towards east: **030°**. S 40° W means start facing south and turn 40° towards west: $180° + 40° = $ **220°**.

## Back bearings
The bearing of A from B differs from the bearing of B from A by **180°**:
- if the bearing is less than 180°, **add** 180°;
- if it is 180° or more, **subtract** 180°.
Bearing of B from A = 060°, so bearing of A from B = 240°.

## Distances
When the journey is made of north–south and east–west parts, draw a right-angled triangle and use **Pythagoras**: 3 km north then 4 km east is 5 km from the start.`,
          examples: `**Example 1.** Bearing of Q from P is 135°. *Back bearing:* 315°.

**Example 2.** A ship sails 5 km east then 5 km north. Its bearing from the start is **045°** (equal legs, so 45° from north).

**Example 3.** A is 8 km north of B and C is 6 km east of B. *Distance AC:* $\\sqrt{64 + 36} = 10$ km.`,
        },
        questions: [
          ["E", "Bearings are measured", "clockwise from north", "anticlockwise from north", "clockwise from east", "anticlockwise from south", "This is the standard convention for bearings."],
          ["E", "What is the three-figure bearing of east?", "090°", "180°", "270°", "045°", "East is a quarter turn clockwise from north."],
          ["E", "What is the three-figure bearing of south-west?", "225°", "135°", "315°", "045°", "South (180°) plus 45° towards west."],
          ["M", "The bearing of B from A is 060°. What is the bearing of A from B?", "240°", "120°", "300°", "060°", "060° + 180° = 240°."],
          ["M", "The bearing of Q from P is 135°. What is the bearing of P from Q?", "315°", "045°", "225°", "135°", "135° + 180° = 315°."],
          ["M", "A man walks 3 km due north and then 4 km due east. How far is he from his starting point?", "5 km", "7 km", "1 km", "25 km", "√(3² + 4²) = 5 km."],
          ["M", "Write the direction N 30° E as a three-figure bearing.", "030°", "300°", "060°", "330°", "Turn 30° clockwise from north."],
          ["H", "A ship sails 5 km due east and then 5 km due north. What is its bearing from its starting point?", "045°", "135°", "315°", "225°", "Equal east and north distances give 45° clockwise from north."],
          ["H", "Write S 40° W as a three-figure bearing.", "220°", "140°", "040°", "320°", "From south (180°), turn 40° further clockwise towards west: 220°."],
          ["H", "A is 8 km due north of B, and C is 6 km due east of B. How far is A from C?", "10 km", "14 km", "2 km", "100 km", "√(8² + 6²) = √100 = 10 km."],
        ],
      },
      {
        week: 6,
        title: "Surface area and volume of solids",
        subtopics: ["Prisms and cylinders", "Cones", "Pyramids", "Capacity in litres"],
        objectives: ["Calculate volumes of prisms, cylinders, cones and pyramids", "Calculate curved and total surface areas of cylinders and cones", "Use Pythagoras to find heights and slant heights of cones", "Convert volumes to capacities in litres"],
        lesson: {
          title: "Volumes and Surface Areas of Solids",
          summary: "Measure the space inside and the surface outside everyday solids.",
          minutes: 45,
          notes: `## Prisms and cylinders
A **prism** has the same cross-section all the way along:
$V = \\text{area of cross-section}\\times\\text{length}$
A **cylinder** is a prism with a circular cross-section:
$V = \\pi r^2 h$, curved surface area $= 2\\pi rh$, total surface area $= 2\\pi rh + 2\\pi r^2$

## Cones and pyramids
A pointed solid has **one third** of the volume of the prism with the same base and height:
- Cone: $V = \\frac{1}{3}\\pi r^2 h$, curved surface area $= \\pi r l$ (where $l$ is the slant height)
- Pyramid: $V = \\frac{1}{3}\\times\\text{base area}\\times h$
The height, radius and slant height of a cone form a right-angled triangle: $l^2 = r^2 + h^2$.

## Capacity
$1\\text{ cm}^3 = 1\\text{ ml}$, $1000\\text{ cm}^3 = 1\\text{ litre}$ and $1\\text{ m}^3 = 1000\\text{ litres}$.`,
          examples: `**Example 1.** A cylinder has radius 7 cm and height 10 cm ($\\pi = \\frac{22}{7}$).
$V = \\frac{22}{7}\\times 49\\times 10 = 1540$ cm³; curved area $= 440$ cm²; total area $= 440 + 2\\times 154 = 748$ cm².

**Example 2.** A cone has radius 3 cm and height 7 cm. $V = \\frac{1}{3}\\times\\frac{22}{7}\\times 9\\times 7 = 66$ cm³.

**Example 3.** A cylindrical tank has radius 0.7 m and height 2 m. $V = \\frac{22}{7}\\times 0.49\\times 2 = 3.08$ m³ $= 3{,}080$ litres.`,
        },
        questions: [
          ["E", "Which formula gives the volume of a cylinder?", "$\\pi r^2 h$", "$2\\pi rh$", "$\\frac{\\pi r^2}{h}$", "$2\\pi r(r + h)$", "Volume = base area × height = πr² × h."],
          ["E", "Find the volume of a cylinder of radius 7 cm and height 10 cm. (Take $\\pi = \\frac{22}{7}$.)", "1,540 cm³", "440 cm³", "154 cm³", "3,080 cm³", "22/7 × 49 × 10 = 1,540 cm³."],
          ["E", "A prism has a cross-section of area 12 cm² and length 15 cm. What is its volume?", "180 cm³", "27 cm³", "90 cm³", "360 cm³", "12 × 15 = 180 cm³."],
          ["M", "Find the curved surface area of a cylinder of radius 7 cm and height 10 cm. (Take $\\pi = \\frac{22}{7}$.)", "440 cm²", "1,540 cm²", "220 cm²", "748 cm²", "2 × 22/7 × 7 × 10 = 440 cm²."],
          ["M", "Find the total surface area of a closed cylinder of radius 7 cm and height 10 cm. (Take $\\pi = \\frac{22}{7}$.)", "748 cm²", "594 cm²", "440 cm²", "1,540 cm²", "440 + 2 × 154 = 748 cm²."],
          ["M", "Find the volume of a cone of radius 3 cm and height 7 cm. (Take $\\pi = \\frac{22}{7}$.)", "66 cm³", "198 cm³", "22 cm³", "132 cm³", "⅓ × 22/7 × 9 × 7 = 66 cm³."],
          ["M", "A pyramid has a square base of side 6 cm and a height of 10 cm. What is its volume?", "120 cm³", "360 cm³", "60 cm³", "240 cm³", "⅓ × 36 × 10 = 120 cm³."],
          ["H", "A cylindrical tank of radius 0.7 m and height 2 m is full of water. How many litres does it hold? (Take $\\pi = \\frac{22}{7}$.)", "3,080 litres", "308 litres", "30,800 litres", "3.08 litres", "22/7 × 0.49 × 2 = 3.08 m³ = 3,080 litres."],
          ["H", "A cone has slant height 10 cm and base radius 6 cm. What is its vertical height?", "8 cm", "4 cm", "16 cm", "11.7 cm", "h = √(10² − 6²) = √64 = 8 cm."],
          ["H", "Find the curved surface area of a cone with radius 7 cm and slant height 10 cm. (Take $\\pi = \\frac{22}{7}$.)", "220 cm²", "154 cm²", "374 cm²", "440 cm²", "πrl = 22/7 × 7 × 10 = 220 cm²."],
        ],
      },
      {
        week: 7,
        title: "Statistics: frequency tables and averages",
        subtopics: ["Frequency tables", "Mean from a frequency table", "Median and mode from a frequency table", "Range and cumulative frequency"],
        objectives: ["Construct and read frequency tables", "Calculate the mean using Σfx ÷ Σf", "Find the median and mode from a frequency table", "Calculate the range and cumulative frequencies"],
        lesson: {
          title: "Averages from Frequency Tables",
          summary: "Find the mean, median, mode and range of data arranged in frequency tables.",
          minutes: 45,
          notes: `## Frequency tables
When values repeat, record each value $x$ with its frequency $f$:
| Score ($x$) | 1 | 2 | 3 |
|---|---|---|---|
| Frequency ($f$) | 3 | 7 | 5 |
The total frequency $\\Sigma f = 15$ is the number of items.

## Mean
Add an $fx$ row: $1\\times 3 + 2\\times 7 + 3\\times 5 = 32$.
$\\text{Mean} = \\frac{\\Sigma fx}{\\Sigma f} = \\frac{32}{15}\\approx 2.13$

## Mode
The value with the **highest frequency**: here the mode is **2** (not 7, which is the frequency).

## Median
With $n$ values, the median is the $\\left(\\frac{n + 1}{2}\\right)$th value when they are in order. Use **cumulative frequencies** (running totals: 3, 10, 15). The 8th value falls in the second group, so the median is **2**.

## Range
Range = largest value − smallest value. It measures how **spread out** the data are.

## Finding a missing frequency
If you know the total frequency or the mean, write an equation: e.g. $4 + 6 + x + 2 = 20$ gives $x = 8$.`,
          examples: `**Example 1.** Marks 4, 5, 6 with frequencies 2, 5, 3. *Mean:* $\\frac{8 + 25 + 18}{10} = 5.1$.

**Example 2.** The mean of $x$, $x + 2$ and $x + 4$ is 10. *Solution:* $3x + 6 = 30$, so $x = 8$.

**Example 3.** Goals 0, 1, 2, 3 in 4, 6, 8, 2 matches. *Mean:* $\\frac{0 + 6 + 16 + 6}{20} = 1.4$ goals.`,
        },
        questions: [
          ["E", "A frequency table shows score 1 (frequency 3), score 2 (frequency 7) and score 3 (frequency 5). What is the mode?", "2", "7", "3", "5", "The score 2 has the highest frequency."],
          ["E", "A frequency table shows score 1 (frequency 3), score 2 (frequency 7) and score 3 (frequency 5). How many scores are there altogether?", "15", "6", "7", "32", "3 + 7 + 5 = 15."],
          ["E", "In a frequency table, $\\Sigma fx\\div\\Sigma f$ gives the", "mean", "median", "mode", "range", "Total of all values divided by the number of values."],
          ["M", "A frequency table shows score 1 (frequency 3), score 2 (frequency 7) and score 3 (frequency 5). What is the mean score, to 2 decimal places?", "2.13", "2.00", "2.50", "5.00", "Σfx = 3 + 14 + 15 = 32; 32 ÷ 15 ≈ 2.13."],
          ["M", "A frequency table shows score 1 (frequency 3), score 2 (frequency 7) and score 3 (frequency 5). What is the median score?", "2", "3", "2.5", "7", "The 8th of 15 values is in the score-2 group (cumulative 3, 10, 15)."],
          ["M", "Marks 4, 5 and 6 have frequencies 2, 5 and 3. What is the mean mark?", "5.1", "5", "15", "5.5", "(8 + 25 + 18) ÷ 10 = 5.1."],
          ["M", "Find the range of 12, 7, 19, 3 and 15.", "16", "12", "19", "3", "Range = largest value − smallest value = 19 − 3 = 16."],
          ["H", "The mean of $x$, $x + 2$ and $x + 4$ is 10. Find $x$.", "8", "10", "6", "12", "3x + 6 = 30, so x = 8."],
          ["H", "In 20 matches a team scored 0 goals 4 times, 1 goal 6 times, 2 goals $x$ times and 3 goals twice. What is the mean number of goals per match?", "1.4", "1.5", "1.2", "2", "x = 20 − 12 = 8; Σfx = 0 + 6 + 16 + 6 = 28; 28 ÷ 20 = 1.4."],
          ["H", "Four groups have frequencies 5, 8, 12 and 5. What is the cumulative frequency at the end of the third group?", "25", "12", "30", "20", "5 + 8 + 12 = 25."],
        ],
      },
    ],
  },
];
