import type { TermPlan } from "../types";

/** JSS1 Mathematics — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Whole numbers and place value",
        subtopics: ["Counting in millions and billions", "Place value and value of a digit", "Reading and writing large numbers", "Comparing and ordering whole numbers"],
        objectives: ["State the place value of any digit in a number up to billions", "Read and write large numbers in figures and in words", "Find the value of a digit in a given number", "Arrange whole numbers in ascending and descending order"],
        lesson: {
          title: "Place Value in Large Numbers",
          summary: "Understand how the position of a digit gives it its value, and read, write and order numbers up to billions.",
          minutes: 35,
          notes: `## Our number system
We write numbers with ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. The **position** of a digit tells us how much it is worth. Each place is **ten times** the place on its right.

## The place value chart
| Billions | Hundred millions | Ten millions | Millions | Hundred thousands | Ten thousands | Thousands | Hundreds | Tens | Units |
|---|---|---|---|---|---|---|---|---|---|

- **Place value** is the name of the position, e.g. *thousands*.
- **Value** is how much the digit is worth in that position: in 4,572,318 the 7 is in the ten-thousands place, so its value is 70,000.

## Reading and writing large numbers
Group the digits in threes from the right: **units period**, **thousands period**, **millions period**, **billions period**. Read each group, then say the name of the period.
- 3,048,205 is read as *three million, forty-eight thousand, two hundred and five*.
- To write a number from words, fill every place; use **0** for any place that is empty. Two million and nine is 2,000,009.

## Comparing and ordering
1. The number with **more digits** is larger.
2. If they have the same number of digits, compare from the **left**; the first place where the digits differ decides.
- *Ascending order* means from smallest to largest; *descending order* means from largest to smallest.`,
          examples: `**Example 1.** Give the place value and value of 5 in 2,358,904.
*Solution:* 5 is in the ten-thousands place. Value = 5 × 10,000 = **50,000**.

**Example 2.** Write 7,060,015 in words.
*Solution:* 7 | 060 | 015 → *seven million, sixty thousand and fifteen*.

**Example 3.** Arrange 38,402; 38,240; 38,420 in descending order.
*Solution:* All start 38, then compare hundreds: 4, 2, 4. Compare tens for the two with 4: 0 and 2. Order: **38,420; 38,402; 38,240**.`,
        },
        questions: [
          ["E", "What is the place value of the digit 7 in 4,572,318?", "Ten thousands", "Thousands", "Hundred thousands", "Millions", "Reading from the right: 8 units, 1 tens, 3 hundreds, 2 thousands, 7 ten thousands."],
          ["E", "In the number 60,318, which digit is in the thousands place?", "0", "6", "3", "1", "6 is in the ten-thousands place, 0 in the thousands place and 3 in the hundreds place."],
          ["E", "Write 3,048,205 in words.", "Three million, forty-eight thousand, two hundred and five", "Three million, four hundred and eight thousand, two hundred and five", "Three billion, forty-eight thousand, two hundred and five", "Three million, forty-eight thousand, two hundred and fifty", "Group as 3 | 048 | 205: three million, forty-eight thousand, two hundred and five."],
          ["E", "Write 'two million, six hundred thousand and nine' in figures.", "2,600,009", "2,060,009", "2,600,090", "26,000,009", "Two million = 2,000,000; six hundred thousand = 600,000; nine = 9. Total 2,600,009."],
          ["M", "What is the value of the digit 9 in 2,950,000?", "900,000", "90,000", "9,000,000", "9,000", "9 is in the hundred-thousands place, so its value is 9 × 100,000 = 900,000."],
          ["M", "Which of these numbers is the largest?", "1,100,001", "1,010,101", "1,001,110", "1,011,000", "All have seven digits. Compare from the left: the hundred-thousands digit is 1 only in 1,100,001."],
          ["M", "Arrange 45,302; 45,230; 45,320 and 45,023 in ascending order.", "45,023; 45,230; 45,302; 45,320", "45,320; 45,302; 45,230; 45,023", "45,023; 45,302; 45,230; 45,320", "45,230; 45,023; 45,302; 45,320", "Ascending means smallest first. Comparing the hundreds digits (0, 2, 3, 3) and then the tens gives 45,023; 45,230; 45,302; 45,320."],
          ["M", "How many thousands make one million?", "1,000", "100", "10,000", "1,000,000", "1,000,000 ÷ 1,000 = 1,000."],
          ["H", "Which number is 10,000 more than 1,995,400?", "2,005,400", "1,996,400", "2,095,400", "1,995,410", "Adding 10,000 increases the ten-thousands digit by 1: 1,995,400 + 10,000 = 2,005,400."],
          ["H", "What is the sum of the values of the two 5s in 5,305?", "5,005", "10", "505", "5,050", "The first 5 is worth 5,000 and the last 5 is worth 5. Their sum is 5,005."],
        ],
      },
      {
        week: 2,
        title: "Number bases (binary numbers)",
        subtopics: ["Counting in base two", "Converting base ten numbers to base two", "Converting base two numbers to base ten", "Uses of binary numbers in computers"],
        objectives: ["Explain the meaning of a number base", "Convert whole numbers from base ten to base two", "Convert binary numbers to base ten", "State where binary numbers are used in everyday life"],
        lesson: {
          title: "Binary Numbers",
          summary: "Count in twos, and convert numbers between base ten (denary) and base two (binary).",
          minutes: 35,
          notes: `## What is a number base?
A **base** is the number of different digits used for counting. Everyday numbers are in **base ten** (digits 0–9). **Base two** (binary) uses only the digits **0 and 1**, and its place values are powers of 2:

| … | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|---|---|---|---|---|---|---|---|

We write the base as a small subscript: $1011_2$ is a binary number, $11_{10}$ is a base-ten number.

## Base ten to base two — repeated division
Divide by 2 again and again, writing down the **remainder** each time, until the quotient is 0. Read the remainders **from the bottom up**.

## Base two to base ten — expanded form
Multiply each digit by its place value and add:
$1011_2 = 1\\times 8 + 0\\times 4 + 1\\times 2 + 1\\times 1 = 11_{10}$

## Why binary matters
Computers and phones store all information as binary digits (**bits**), because an electronic switch has two states: **on (1)** and **off (0)**.`,
          examples: `**Example 1.** Convert $13_{10}$ to base two.
*Solution:* 13 ÷ 2 = 6 r **1**; 6 ÷ 2 = 3 r **0**; 3 ÷ 2 = 1 r **1**; 1 ÷ 2 = 0 r **1**. Reading upwards: $13_{10} = 1101_2$.

**Example 2.** Convert $10110_2$ to base ten.
*Solution:* $1\\times 16 + 0\\times 8 + 1\\times 4 + 1\\times 2 + 0\\times 1 = 16 + 4 + 2 = 22_{10}$.`,
        },
        questions: [
          ["E", "Which digits are used in base two?", "0 and 1 only", "0 to 9", "1 and 2 only", "0, 1 and 2", "Base two has exactly two digits: 0 and 1."],
          ["E", "Convert $6_{10}$ to base two.", "$110_2$", "$101_2$", "$111_2$", "$100_2$", "6 = 4 + 2 = 1×4 + 1×2 + 0×1, so $6_{10} = 110_2$."],
          ["E", "What is $101_2$ in base ten?", "5", "3", "6", "101", "1×4 + 0×2 + 1×1 = 5."],
          ["M", "Convert $19_{10}$ to base two.", "$10011_2$", "$11001_2$", "$10101_2$", "$10010_2$", "19 = 16 + 2 + 1, giving digits 1, 0, 0, 1, 1 for the places 16, 8, 4, 2, 1."],
          ["M", "Convert $11100_2$ to base ten.", "28", "14", "56", "30", "1×16 + 1×8 + 1×4 + 0×2 + 0×1 = 28."],
          ["M", "What is the place value of the leftmost digit in $100000_2$?", "32", "16", "64", "100", "Binary place values from the right are 1, 2, 4, 8, 16, 32; the sixth place is 32."],
          ["M", "Which base ten number is written as $1111_2$?", "15", "11", "16", "4", "8 + 4 + 2 + 1 = 15."],
          ["H", "The binary number $1\\square 01_2$ equals $13_{10}$. What is the missing digit?", "1", "0", "2", "3", "13 = 8 + 4 + 1, so the digits are 1, 1, 0, 1. The missing (4s) digit is 1."],
          ["H", "How many binary digits (bits) are needed to write $40_{10}$?", "6", "5", "7", "4", "32 ≤ 40 < 64, so the largest place needed is 32 (the sixth place): $40_{10} = 101000_2$."],
          ["E", "Why do computers use binary numbers?", "Electronic switches have two states, on and off", "Binary numbers are always larger", "Computers cannot count beyond ten", "Binary uses all ten digits", "Each switch is either on (1) or off (0), which matches the two binary digits."],
        ],
      },
      {
        week: 3,
        title: "Factors, multiples and prime numbers",
        subtopics: ["Factors of whole numbers", "Multiples of whole numbers", "Prime and composite numbers", "Prime factorisation"],
        objectives: ["List all the factors of a whole number", "Write the first few multiples of a number", "Distinguish between prime and composite numbers", "Express a number as a product of its prime factors"],
        lesson: {
          title: "Factors, Multiples and Primes",
          summary: "Find factors and multiples, recognise prime numbers and break a number into its prime factors.",
          minutes: 35,
          notes: `## Factors
A **factor** of a number divides it exactly, leaving no remainder. Factors come in pairs: $12 = 1\\times 12 = 2\\times 6 = 3\\times 4$, so the factors of 12 are **1, 2, 3, 4, 6 and 12**.

## Multiples
A **multiple** of a number is the result of multiplying it by a whole number. Multiples of 4: **4, 8, 12, 16, 20, …** A number has a limited number of factors but an unlimited number of multiples.

## Prime and composite numbers
- A **prime number** has exactly two factors: 1 and itself. The primes below 30 are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.
- A **composite number** has more than two factors, e.g. 9 (1, 3, 9).
- **1 is neither prime nor composite**, and **2 is the only even prime**.

## Prime factorisation
Divide repeatedly by the smallest prime that works (a *factor tree* or *repeated division*), then write the number as a product of primes, using index notation for repeated factors:
$72 = 2\\times 2\\times 2\\times 3\\times 3 = 2^3\\times 3^2$`,
          examples: `**Example 1.** List the factors of 30.
*Solution:* 1×30, 2×15, 3×10, 5×6 → **1, 2, 3, 5, 6, 10, 15, 30**.

**Example 2.** Express 90 as a product of prime factors.
*Solution:* 90 ÷ 2 = 45; 45 ÷ 3 = 15; 15 ÷ 3 = 5; 5 ÷ 5 = 1. So $90 = 2\\times 3^2\\times 5$.

**Example 3.** Is 51 prime?
*Solution:* 51 ÷ 3 = 17, so 51 has factors 1, 3, 17, 51. It is **composite**.`,
        },
        questions: [
          ["E", "Which of these is a factor of 18?", "6", "4", "5", "8", "18 ÷ 6 = 3 exactly; 4, 5 and 8 leave remainders."],
          ["E", "Which of these numbers is prime?", "13", "15", "21", "27", "13 has only the factors 1 and 13. 15 = 3×5, 21 = 3×7 and 27 = 3×9."],
          ["E", "What is the fifth multiple of 7?", "35", "28", "42", "12", "The multiples of 7 are 7, 14, 21, 28, 35 …; the fifth is 7 × 5 = 35."],
          ["M", "How many factors does 24 have?", "8", "6", "7", "4", "The factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24 — eight in all."],
          ["M", "Express 60 as a product of prime factors.", "$2^2\\times 3\\times 5$", "$2\\times 3\\times 10$", "$2^3\\times 3\\times 5$", "$4\\times 3\\times 5$", "60 = 2 × 2 × 3 × 5 = $2^2 \\times 3 \\times 5$. 10 and 4 are not prime."],
          ["M", "Which statement is true?", "2 is the only even prime number", "1 is a prime number", "9 is a prime number", "Every odd number is prime", "1 has only one factor, 9 = 3×3, and odd numbers such as 15 are composite."],
          ["M", "What is the sum of all the prime numbers between 10 and 20?", "60", "49", "56", "72", "The primes between 10 and 20 are 11, 13, 17 and 19; their sum is 60."],
          ["H", "Which number has exactly three factors?", "25", "12", "15", "21", "25 has factors 1, 5 and 25. Numbers with exactly three factors are squares of primes."],
          ["H", "If $2^a \\times 3^b = 72$, find $a + b$.", "5", "6", "4", "7", "72 = 8 × 9 = $2^3 \\times 3^2$, so a = 3, b = 2 and a + b = 5."],
          ["E", "Which of these is a multiple of both 3 and 4?", "24", "18", "20", "30", "24 = 3 × 8 = 4 × 6. 18 and 30 are not multiples of 4; 20 is not a multiple of 3."],
        ],
      },
      {
        week: 4,
        title: "LCM and HCF",
        subtopics: ["Common factors and the HCF", "Common multiples and the LCM", "Finding LCM and HCF by prime factors", "Word problems on LCM and HCF"],
        objectives: ["Find the highest common factor (HCF) of two or three numbers", "Find the lowest common multiple (LCM) of two or three numbers", "Use prime factorisation to find the LCM and HCF", "Solve everyday problems involving LCM and HCF"],
        lesson: {
          title: "Lowest Common Multiple and Highest Common Factor",
          summary: "Find the HCF and LCM by listing and by prime factors, and use them to solve real problems.",
          minutes: 40,
          notes: `## Highest Common Factor (HCF)
The **HCF** is the largest number that divides two or more numbers exactly.
- *Listing:* factors of 18 are 1, 2, 3, 6, 9, 18; factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. The common factors are 1, 2, 3, 6, so **HCF = 6**.
- *Prime factors:* multiply the primes that appear in **every** number, each to the **lowest** power.

## Lowest Common Multiple (LCM)
The **LCM** is the smallest number that is a multiple of two or more numbers.
- *Listing:* multiples of 4 are 4, 8, 12, 16, 20, 24…; multiples of 6 are 6, 12, 18, 24… so **LCM = 12**.
- *Prime factors:* multiply **every** prime that appears, each to the **highest** power.

## A useful check
For two numbers $a$ and $b$: $\\text{HCF}\\times\\text{LCM} = a\\times b$.

## When to use which
- **HCF** answers "largest equal groups / longest equal pieces" questions (sharing, cutting).
- **LCM** answers "when will they happen together again" questions (bells, buses, timetables).`,
          examples: `**Example 1.** Find the HCF and LCM of 36 and 48.
*Solution:* $36 = 2^2\\times 3^2$ and $48 = 2^4\\times 3$.
HCF = $2^2\\times 3 = 12$. LCM = $2^4\\times 3^2 = 144$. Check: 12 × 144 = 1,728 = 36 × 48.

**Example 2.** Two bells ring every 8 minutes and every 12 minutes. They ring together at 9:00 a.m. When next?
*Solution:* LCM of 8 and 12 = 24, so they ring together again at **9:24 a.m.**

**Example 3.** Ropes of 45 m and 60 m are cut into equal pieces that are as long as possible. How long is each piece?
*Solution:* HCF of 45 and 60 = **15 m**.`,
        },
        questions: [
          ["E", "Find the HCF of 12 and 18.", "6", "3", "36", "2", "Factors of 12: 1, 2, 3, 4, 6, 12; of 18: 1, 2, 3, 6, 9, 18. The highest common factor is 6."],
          ["E", "Find the LCM of 4 and 6.", "12", "24", "2", "10", "Multiples of 4: 4, 8, 12…; multiples of 6: 6, 12… The lowest common multiple is 12."],
          ["E", "Find the LCM of 3, 4 and 5.", "60", "12", "20", "120", "3, 4 and 5 share no common factor, so the LCM is 3 × 4 × 5 = 60."],
          ["M", "Find the HCF of 36 and 60.", "12", "6", "18", "180", "36 = $2^2\\times 3^2$, 60 = $2^2\\times 3\\times 5$. HCF = $2^2\\times 3 = 12$."],
          ["M", "Find the LCM of 18 and 24.", "72", "144", "36", "6", "18 = $2\\times 3^2$, 24 = $2^3\\times 3$. LCM = $2^3\\times 3^2 = 72$."],
          ["M", "The HCF of two numbers is 4 and their product is 96. What is their LCM?", "24", "384", "92", "100", "HCF × LCM = product of the numbers, so LCM = 96 ÷ 4 = 24."],
          ["M", "Two buses leave a park together. One returns every 15 minutes and the other every 20 minutes. After how many minutes will they next leave together?", "60 minutes", "35 minutes", "5 minutes", "300 minutes", "LCM of 15 and 20 = 60."],
          ["H", "Chalk boxes of 24 and 36 sticks are shared into equal bundles with none left over. What is the largest possible bundle size?", "12", "6", "72", "18", "The largest equal group size is the HCF of 24 and 36, which is 12."],
          ["H", "Find the HCF of $2^3\\times 3^2\\times 5$ and $2^2\\times 3^3$.", "36", "180", "12", "1,080", "Take each common prime to its lowest power: $2^2\\times 3^2 = 36$. (5 is not common.)"],
          ["H", "What is the smallest number greater than 1 that leaves a remainder of 1 when divided by 2, 3 or 4?", "13", "12", "25", "7", "The LCM of 2, 3 and 4 is 12, so 12 + 1 = 13 leaves remainder 1 in each case."],
        ],
      },
      {
        week: 5,
        title: "Fractions: types and equivalence",
        subtopics: ["Proper, improper fractions and mixed numbers", "Equivalent fractions", "Simplifying fractions to lowest terms", "Comparing and ordering fractions"],
        objectives: ["Identify proper fractions, improper fractions and mixed numbers", "Convert between improper fractions and mixed numbers", "Write fractions in their lowest terms", "Compare and order fractions using a common denominator"],
        lesson: {
          title: "Understanding Fractions",
          summary: "Name the types of fractions, simplify them, find equivalent fractions and put fractions in order.",
          minutes: 35,
          notes: `## What a fraction means
A fraction such as $\\frac{3}{5}$ describes 3 parts out of 5 equal parts. The top number is the **numerator**; the bottom number is the **denominator**.

## Types of fractions
- **Proper fraction:** numerator smaller than denominator, e.g. $\\frac{2}{7}$.
- **Improper fraction:** numerator equal to or larger than the denominator, e.g. $\\frac{9}{4}$.
- **Mixed number:** a whole number and a proper fraction, e.g. $2\\frac{1}{4}$.
To change $\\frac{9}{4}$ to a mixed number: 9 ÷ 4 = 2 remainder 1, so $\\frac{9}{4} = 2\\frac{1}{4}$. To go back: $2\\frac{1}{4} = \\frac{2\\times 4 + 1}{4} = \\frac{9}{4}$.

## Equivalent fractions
Multiplying or dividing the numerator and denominator by the **same** non-zero number gives an equal fraction: $\\frac{2}{3} = \\frac{4}{6} = \\frac{10}{15}$.

## Lowest terms
Divide the numerator and denominator by their **HCF**: $\\frac{18}{24} = \\frac{3}{4}$ (HCF = 6).

## Comparing fractions
Rewrite the fractions with a **common denominator** (use the LCM of the denominators), then compare the numerators.`,
          examples: `**Example 1.** Simplify $\\frac{45}{60}$.
*Solution:* HCF of 45 and 60 is 15, so $\\frac{45}{60} = \\frac{3}{4}$.

**Example 2.** Which is larger, $\\frac{5}{8}$ or $\\frac{7}{12}$?
*Solution:* LCM of 8 and 12 is 24: $\\frac{5}{8} = \\frac{15}{24}$ and $\\frac{7}{12} = \\frac{14}{24}$. So $\\frac{5}{8}$ is larger.

**Example 3.** Write $3\\frac{2}{5}$ as an improper fraction.
*Solution:* $\\frac{3\\times 5 + 2}{5} = \\frac{17}{5}$.`,
        },
        questions: [
          ["E", "Which of these is an improper fraction?", "$\\frac{7}{4}$", "$\\frac{3}{8}$", "$2\\frac{1}{3}$", "$\\frac{5}{9}$", "In an improper fraction the numerator is at least the denominator: 7 > 4."],
          ["E", "Simplify $\\frac{12}{16}$ to its lowest terms.", "$\\frac{3}{4}$", "$\\frac{6}{8}$", "$\\frac{2}{3}$", "$\\frac{4}{3}$", "Divide top and bottom by the HCF, 4: 12 ÷ 4 = 3 and 16 ÷ 4 = 4."],
          ["E", "Which fraction is equivalent to $\\frac{2}{5}$?", "$\\frac{6}{15}$", "$\\frac{4}{8}$", "$\\frac{5}{2}$", "$\\frac{3}{6}$", "Multiply numerator and denominator by 3: $\\frac{2\\times 3}{5\\times 3} = \\frac{6}{15}$."],
          ["M", "Convert $\\frac{23}{6}$ to a mixed number.", "$3\\frac{5}{6}$", "$3\\frac{1}{6}$", "$4\\frac{1}{6}$", "$2\\frac{5}{6}$", "23 ÷ 6 = 3 remainder 5, so $\\frac{23}{6} = 3\\frac{5}{6}$."],
          ["M", "Write $4\\frac{3}{7}$ as an improper fraction.", "$\\frac{31}{7}$", "$\\frac{12}{7}$", "$\\frac{43}{7}$", "$\\frac{28}{7}$", "$\\frac{4\\times 7 + 3}{7} = \\frac{31}{7}$."],
          ["M", "Which fraction is the largest?", "$\\frac{3}{4}$", "$\\frac{2}{3}$", "$\\frac{5}{8}$", "$\\frac{7}{12}$", "With denominator 24: 18/24, 16/24, 15/24 and 14/24, so $\\frac{3}{4}$ is largest."],
          ["M", "Find the missing number: $\\frac{3}{8} = \\frac{\\square}{40}$.", "15", "5", "24", "11", "8 × 5 = 40, so multiply the numerator by 5 as well: 3 × 5 = 15."],
          ["H", "Arrange $\\frac{1}{2}$, $\\frac{2}{5}$ and $\\frac{3}{10}$ in ascending order.", "$\\frac{3}{10}, \\frac{2}{5}, \\frac{1}{2}$", "$\\frac{1}{2}, \\frac{2}{5}, \\frac{3}{10}$", "$\\frac{2}{5}, \\frac{3}{10}, \\frac{1}{2}$", "$\\frac{3}{10}, \\frac{1}{2}, \\frac{2}{5}$", "In tenths they are 5/10, 4/10 and 3/10, so the ascending order is 3/10, 2/5, 1/2."],
          ["H", "What fraction of an hour is 45 minutes, in its lowest terms?", "$\\frac{3}{4}$", "$\\frac{45}{100}$", "$\\frac{4}{5}$", "$\\frac{9}{10}$", "$\\frac{45}{60}$ simplifies to $\\frac{3}{4}$ (divide by 15)."],
          ["E", "In the fraction $\\frac{5}{9}$, what is 9 called?", "The denominator", "The numerator", "The quotient", "The factor", "The bottom number of a fraction is the denominator."],
        ],
      },
      {
        week: 6,
        title: "Operations on fractions",
        subtopics: ["Addition and subtraction of fractions", "Multiplication of fractions", "Division of fractions", "Word problems involving fractions"],
        objectives: ["Add and subtract fractions and mixed numbers with different denominators", "Multiply fractions and mixed numbers", "Divide by a fraction using the reciprocal", "Solve everyday problems involving fractions"],
        lesson: {
          title: "Adding, Subtracting, Multiplying and Dividing Fractions",
          summary: "Carry out the four operations on fractions and mixed numbers and apply them to real problems.",
          minutes: 45,
          notes: `## Adding and subtracting
Fractions must have the **same denominator** before you add or subtract.
1. Find the LCM of the denominators.
2. Change each fraction to an equivalent fraction with that denominator.
3. Add or subtract the numerators; keep the denominator; simplify.
For **mixed numbers**, add the whole numbers and the fractions separately, or change them to improper fractions first.

## Multiplying
Multiply numerator by numerator and denominator by denominator:
$\\frac{a}{b}\\times\\frac{c}{d} = \\frac{a\\times c}{b\\times d}$
Change mixed numbers to improper fractions first, and cancel common factors before multiplying to keep the numbers small.

## Dividing
To divide by a fraction, multiply by its **reciprocal** (turn it upside down):
$\\frac{a}{b}\\div\\frac{c}{d} = \\frac{a}{b}\\times\\frac{d}{c}$

## "Of" means multiply
$\\frac{2}{3}$ **of** 60 = $\\frac{2}{3}\\times 60 = 40$.`,
          examples: `**Example 1.** $\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.

**Example 2.** $3\\frac{1}{2} - 1\\frac{2}{3} = \\frac{7}{2} - \\frac{5}{3} = \\frac{21}{6} - \\frac{10}{6} = \\frac{11}{6} = 1\\frac{5}{6}$.

**Example 3.** $1\\frac{1}{2}\\times\\frac{4}{9} = \\frac{3}{2}\\times\\frac{4}{9} = \\frac{12}{18} = \\frac{2}{3}$.

**Example 4.** $\\frac{3}{4}\\div\\frac{3}{8} = \\frac{3}{4}\\times\\frac{8}{3} = 2$.

**Example 5.** A student spends $\\frac{1}{3}$ of ₦1,200 on books. How much is left? Spent = ₦400, so **₦800** is left.`,
        },
        questions: [
          ["E", "Simplify $\\frac{1}{3} + \\frac{1}{6}$.", "$\\frac{1}{2}$", "$\\frac{2}{9}$", "$\\frac{1}{9}$", "$\\frac{2}{3}$", "$\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$."],
          ["E", "Simplify $\\frac{5}{8} - \\frac{1}{4}$.", "$\\frac{3}{8}$", "$\\frac{4}{4}$", "$\\frac{1}{2}$", "$\\frac{4}{8}$", "$\\frac{5}{8} - \\frac{2}{8} = \\frac{3}{8}$."],
          ["E", "Evaluate $\\frac{2}{5}\\times\\frac{3}{4}$.", "$\\frac{3}{10}$", "$\\frac{5}{9}$", "$\\frac{6}{9}$", "$\\frac{8}{15}$", "$\\frac{2\\times 3}{5\\times 4} = \\frac{6}{20} = \\frac{3}{10}$."],
          ["M", "Evaluate $\\frac{5}{6}\\div\\frac{5}{12}$.", "2", "$\\frac{25}{72}$", "$\\frac{1}{2}$", "$\\frac{5}{2}$", "$\\frac{5}{6}\\times\\frac{12}{5} = \\frac{60}{30} = 2$."],
          ["M", "Simplify $2\\frac{1}{4} + 1\\frac{2}{3}$.", "$3\\frac{11}{12}$", "$3\\frac{3}{7}$", "$4\\frac{1}{12}$", "$3\\frac{1}{2}$", "Whole numbers: 3. Fractions: $\\frac{3}{12} + \\frac{8}{12} = \\frac{11}{12}$. Total $3\\frac{11}{12}$."],
          ["M", "Find $\\frac{3}{5}$ of ₦2,500.", "₦1,500", "₦1,000", "₦750", "₦4,167", "$\\frac{3}{5}\\times 2{,}500 = 3\\times 500 = 1{,}500$."],
          ["M", "Evaluate $1\\frac{1}{2}\\times 2\\frac{2}{3}$.", "4", "$2\\frac{1}{3}$", "$3\\frac{1}{6}$", "$4\\frac{1}{3}$", "$\\frac{3}{2}\\times\\frac{8}{3} = \\frac{24}{6} = 4$."],
          ["H", "Simplify $4\\frac{1}{3} - 2\\frac{3}{4}$.", "$1\\frac{7}{12}$", "$2\\frac{5}{12}$", "$1\\frac{1}{12}$", "$2\\frac{1}{2}$", "$\\frac{13}{3} - \\frac{11}{4} = \\frac{52}{12} - \\frac{33}{12} = \\frac{19}{12} = 1\\frac{7}{12}$."],
          ["H", "A tank is $\\frac{3}{4}$ full. After 20 litres are used it is $\\frac{1}{2}$ full. What is the full capacity of the tank?", "80 litres", "40 litres", "60 litres", "100 litres", "$\\frac{3}{4} - \\frac{1}{2} = \\frac{1}{4}$ of the tank is 20 litres, so the full tank holds 4 × 20 = 80 litres."],
          ["H", "How many pieces of ribbon, each $\\frac{3}{8}$ m long, can be cut from 6 m?", "16", "18", "2", "12", "$6\\div\\frac{3}{8} = 6\\times\\frac{8}{3} = 16$."],
        ],
      },
      {
        week: 7,
        title: "Decimals and percentages",
        subtopics: ["Decimal place value", "Converting fractions to decimals and decimals to fractions", "Percentages as fractions and decimals", "Finding a percentage of a quantity"],
        objectives: ["State the place value of digits after the decimal point", "Convert between fractions, decimals and percentages", "Express one quantity as a percentage of another", "Calculate a percentage of a given quantity"],
        lesson: {
          title: "Decimals and Percentages",
          summary: "Link fractions, decimals and percentages and use them to calculate parts of quantities.",
          minutes: 40,
          notes: `## Decimal place value
After the decimal point the places are **tenths**, **hundredths**, **thousandths**, …
In 3.472 the 4 is worth $\\frac{4}{10}$, the 7 is worth $\\frac{7}{100}$ and the 2 is worth $\\frac{2}{1000}$.

## Fractions ↔ decimals
- **Fraction to decimal:** divide the numerator by the denominator: $\\frac{3}{8} = 3\\div 8 = 0.375$.
- **Decimal to fraction:** write over 10, 100, 1000… and simplify: $0.45 = \\frac{45}{100} = \\frac{9}{20}$.

## Percentages
**Per cent** means "out of 100": $35\\% = \\frac{35}{100} = 0.35$.
- Fraction or decimal → percentage: multiply by 100%. $\\frac{3}{5} = \\frac{3}{5}\\times 100\\% = 60\\%$.
- Percentage → fraction: write over 100 and simplify. $12\\% = \\frac{12}{100} = \\frac{3}{25}$.

## Percentage of a quantity
$p\\%$ of $Q = \\frac{p}{100}\\times Q$.

## One quantity as a percentage of another
$\\frac{\\text{part}}{\\text{whole}}\\times 100\\%$ — both quantities must be in the **same unit**.`,
          examples: `**Example 1.** Convert $\\frac{7}{20}$ to a decimal and a percentage.
*Solution:* $7\\div 20 = 0.35$, and $0.35\\times 100\\% = 35\\%$.

**Example 2.** Find 15% of ₦8,000.
*Solution:* $\\frac{15}{100}\\times 8{,}000 = ₦1{,}200$.

**Example 3.** Ada scored 42 out of 60. What is her percentage?
*Solution:* $\\frac{42}{60}\\times 100\\% = 70\\%$.

**Example 4.** Express 45 cm as a percentage of 2 m.
*Solution:* 2 m = 200 cm, so $\\frac{45}{200}\\times 100\\% = 22.5\\%$.`,
        },
        questions: [
          ["E", "What is the value of the digit 6 in 2.365?", "$\\frac{6}{100}$", "$\\frac{6}{10}$", "$\\frac{6}{1000}$", "6", "After the decimal point: 3 is tenths, 6 is hundredths and 5 is thousandths."],
          ["E", "Write $\\frac{3}{4}$ as a decimal.", "0.75", "0.34", "0.43", "7.5", "Divide the numerator by the denominator: 3 ÷ 4 = 0.75."],
          ["E", "Write 0.6 as a percentage.", "60%", "6%", "0.6%", "600%", "0.6 × 100% = 60%."],
          ["M", "Express 0.125 as a fraction in its lowest terms.", "$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{125}{100}$", "$\\frac{5}{8}$", "$0.125 = \\frac{125}{1000} = \\frac{1}{8}$ (divide by 125)."],
          ["M", "Find 20% of 450.", "90", "225", "45", "9", "$\\frac{20}{100}\\times 450 = 90$."],
          ["M", "A student scored 36 out of 48 in a test. What is the score as a percentage?", "75%", "36%", "80%", "72%", "$\\frac{36}{48}\\times 100\\% = 75\\%$."],
          ["M", "Write 8% as a fraction in its lowest terms.", "$\\frac{2}{25}$", "$\\frac{8}{10}$", "$\\frac{4}{50}$", "$\\frac{1}{8}$", "$\\frac{8}{100} = \\frac{2}{25}$."],
          ["H", "Express 250 g as a percentage of 2 kg.", "12.5%", "125%", "8%", "25%", "2 kg = 2,000 g, and $\\frac{250}{2000}\\times 100\\% = 12.5\\%$."],
          ["H", "Which of these is the largest?", "$\\frac{2}{3}$", "65%", "0.6", "$\\frac{5}{8}$", "As decimals: 0.667, 0.65, 0.6 and 0.625. The largest is $\\frac{2}{3}$."],
          ["H", "40% of a number is 72. What is the number?", "180", "28.8", "112", "288", "If 40% is 72, then 1% is 1.8 and 100% is 180."],
        ],
      },
      {
        week: 8,
        title: "Estimation and approximation",
        subtopics: ["Rounding to the nearest ten, hundred and thousand", "Rounding to decimal places", "Significant figures", "Estimating results of calculations"],
        objectives: ["Round whole numbers to a stated place value", "Round decimals to a given number of decimal places", "Write numbers correct to a given number of significant figures", "Estimate answers to check calculations"],
        lesson: {
          title: "Rounding and Estimating",
          summary: "Round numbers sensibly and use estimates to check that answers are reasonable.",
          minutes: 35,
          notes: `## The rounding rule
Look at the digit **immediately to the right** of the place you are rounding to:
- If it is **5 or more**, round **up** (add 1 to the rounding digit).
- If it is **less than 5**, leave the rounding digit unchanged.
Replace the digits after it by zeros (whole numbers) or drop them (decimals).
- 3,746 to the nearest hundred → **3,700** (the next digit, 4, is less than 5).
- 3,756 to the nearest hundred → **3,800**.

## Decimal places (d.p.)
Count the digits **after the decimal point**. 7.2865 to 2 d.p. → 7.29 (the third decimal digit, 6, rounds the 8 up).

## Significant figures (s.f.)
Count from the **first non-zero digit**. Zeros between non-zero digits are significant; leading zeros are not.
- 0.004 72 to 2 s.f. → 0.0047
- 58,640 to 2 s.f. → 59,000

## Estimating
Round each number to **1 significant figure** and calculate mentally. This tells you roughly what the answer should be, so you can spot mistakes: $49\\times 21 \\approx 50\\times 20 = 1000$ (the exact answer is 1,029).`,
          examples: `**Example 1.** Round 12,684 to the nearest thousand. *Answer:* 13,000 (the hundreds digit, 6, is 5 or more).

**Example 2.** Write 0.070 38 correct to 3 significant figures.
*Solution:* The significant figures start at 7: 7, 0, 3, (8). Round up: **0.0704**.

**Example 3.** Estimate $\\frac{396\\times 5.1}{19.8}$.
*Solution:* $\\approx\\frac{400\\times 5}{20} = \\frac{2000}{20} = 100$.`,
        },
        questions: [
          ["E", "Round 3,746 to the nearest hundred.", "3,700", "3,800", "3,750", "4,000", "The tens digit is 4, which is less than 5, so round down to 3,700."],
          ["E", "Round 58 to the nearest ten.", "60", "50", "58", "100", "The units digit is 8, which is 5 or more, so round up to 60."],
          ["E", "Write 4.768 correct to one decimal place.", "4.8", "4.7", "4.77", "5.0", "The second decimal digit is 6, so the first decimal digit rounds up from 7 to 8."],
          ["M", "Write 7.2865 correct to 2 decimal places.", "7.29", "7.28", "7.30", "7.3", "The third decimal digit is 6, so 7.28 rounds up to 7.29."],
          ["M", "Write 58,640 correct to 2 significant figures.", "59,000", "58,000", "58,600", "59", "The first two significant figures are 5 and 8; the next digit, 6, rounds 58 up to 59, and zeros keep the place value."],
          ["M", "How many significant figures are in 0.00405?", "3", "5", "6", "2", "Leading zeros are not significant; 4, 0 and 5 are."],
          ["M", "Estimate $49\\times 21$ by rounding each number to one significant figure.", "1,000", "1,029", "800", "1,200", "49 ≈ 50 and 21 ≈ 20, so the estimate is 50 × 20 = 1,000."],
          ["H", "Write 0.070 38 correct to 3 significant figures.", "0.0704", "0.070", "0.0703", "0.07038", "The significant figures are 7, 0, 3, 8. Rounding to three: 7, 0, 4 (because 8 ≥ 5), giving 0.0704."],
          ["H", "Estimate $\\frac{396\\times 5.1}{19.8}$.", "100", "10", "1,000", "50", "$\\approx\\frac{400\\times 5}{20} = 100$."],
          ["H", "A number rounded to the nearest ten is 70. Which of these could be the number?", "74", "76", "64", "75", "Numbers from 65 up to (but not including) 75 round to 70; 74 is in this range, but 75 rounds up to 80."],
        ],
      },
      {
        week: 9,
        title: "Directed numbers",
        subtopics: ["Positive and negative numbers", "Directed numbers on the number line", "Addition and subtraction of directed numbers", "Real-life uses of directed numbers"],
        objectives: ["Represent positive and negative numbers on a number line", "Compare and order directed numbers", "Add and subtract directed numbers", "Apply directed numbers to temperature, height and money"],
        lesson: {
          title: "Positive and Negative Numbers",
          summary: "Use the number line to order, add and subtract directed numbers in real situations.",
          minutes: 35,
          notes: `## Directed numbers
Numbers with a **direction**: positive numbers (+) lie to the **right** of zero on the number line and negative numbers (−) to the **left**. Zero is neither positive nor negative.

Everyday examples: temperatures below freezing (−5 °C), depths below sea level (−200 m), money owed (−₦500), floors below the ground (basement −1).

## Ordering
On a number line, a number is **greater** than every number to its left. So −2 > −7, and every positive number is greater than every negative number.

## Adding and subtracting
Think of moving along the number line:
- **Adding a positive** number: move right. **Adding a negative** number: move left. $5 + (-8) = -3$.
- **Subtracting a positive** number: move left. **Subtracting a negative** number is the same as **adding** its positive: $4 - (-6) = 4 + 6 = 10$.

Two useful rules:
- $+(-a) = -a$ and $-(+a) = -a$
- $-(-a) = +a$`,
          examples: `**Example 1.** Arrange −3, 4, −8, 0, 1 in ascending order. *Answer:* −8, −3, 0, 1, 4.

**Example 2.** $-7 + 12 = 5$ (start at −7 and move 12 to the right).

**Example 3.** $-3 - 9 = -12$ (start at −3 and move 9 to the left).

**Example 4.** $-6 - (-10) = -6 + 10 = 4$.

**Example 5.** At 6 a.m. the temperature was −4 °C. By noon it had risen by 11 °C. Noon temperature = −4 + 11 = **7 °C**.`,
        },
        questions: [
          ["E", "Which number is the smallest?", "−9", "−2", "0", "3", "On the number line −9 is furthest to the left."],
          ["E", "Simplify $-5 + 8$.", "3", "−3", "13", "−13", "Start at −5 and move 8 places right: you reach 3."],
          ["E", "Simplify $4 - 9$.", "−5", "5", "13", "−13", "Start at 4 and move 9 places left: you reach −5."],
          ["M", "Simplify $-6 - (-10)$.", "4", "−16", "16", "−4", "Subtracting −10 is the same as adding 10: −6 + 10 = 4."],
          ["M", "Simplify $-3 + (-7)$.", "−10", "4", "−4", "10", "Adding a negative moves left: −3 − 7 = −10."],
          ["M", "The temperature at night was −4 °C. By noon it rose by 11 °C. What was the noon temperature?", "7 °C", "15 °C", "−15 °C", "−7 °C", "A rise of 11 °C from −4 °C gives −4 + 11 = 7 °C."],
          ["M", "Arrange −1, −6, 2 and −3 in ascending order.", "−6, −3, −1, 2", "−1, −3, −6, 2", "2, −1, −3, −6", "−6, −1, −3, 2", "Ascending means from smallest (furthest left) to largest."],
          ["H", "A diver is 18 m below sea level and rises 7 m. Where is the diver now?", "11 m below sea level", "25 m below sea level", "11 m above sea level", "7 m below sea level", "−18 + 7 = −11, i.e. 11 m below sea level."],
          ["H", "Evaluate $-2 - 5 + 9 - (-4)$.", "6", "−2", "0", "16", "−2 − 5 = −7; −7 + 9 = 2; 2 − (−4) = 6."],
          ["H", "Ngozi owes ₦1,500 and then receives ₦2,300. How much does she have after paying her debt?", "₦800", "₦3,800", "−₦800", "₦1,500", "−1,500 + 2,300 = 800."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Algebraic expressions",
        subtopics: ["Using letters to represent numbers", "Terms, coefficients and constants", "Writing expressions from statements", "Substitution into expressions"],
        objectives: ["Use letters to stand for unknown numbers", "Identify terms, coefficients and constants in an expression", "Write algebraic expressions from word statements", "Evaluate expressions by substituting values"],
        lesson: {
          title: "Introduction to Algebra",
          summary: "Use letters for numbers, build expressions from words and find their values by substitution.",
          minutes: 35,
          notes: `## Letters for numbers
In algebra a letter stands for a number we do not know yet or a number that can change. "A number plus 5" is written $x + 5$.

## The language of algebra
In $4x - 3y + 7$:
- the **terms** are $4x$, $-3y$ and $7$;
- 4 is the **coefficient** of $x$ and −3 is the coefficient of $y$;
- 7 is the **constant** term.

## Conventions
- $3\\times a$ is written $3a$ (number first, no multiplication sign).
- $a\\times b$ is written $ab$; $a\\times a$ is written $a^2$.
- $a\\div 4$ is written $\\frac{a}{4}$.

## Writing expressions from words
| Words | Expression |
|---|---|
| 7 more than $n$ | $n + 7$ |
| 5 less than $n$ | $n - 5$ |
| twice $n$ | $2n$ |
| a third of $n$ | $\\frac{n}{3}$ |
| the product of $x$ and $y$ | $xy$ |

## Substitution
Replace each letter by its value and work out the answer, following BODMAS.`,
          examples: `**Example 1.** Write an expression for "three times a number, minus 8". *Answer:* $3n - 8$.

**Example 2.** If $a = 4$ and $b = -2$, find $5a - 3b$.
*Solution:* $5(4) - 3(-2) = 20 + 6 = 26$.

**Example 3.** A pen costs ₦$p$ and a book costs ₦$b$. Write the cost of 3 pens and 2 books. *Answer:* ₦$(3p + 2b)$.

**Example 4.** Find $x^2 + 2x$ when $x = 3$. *Solution:* $9 + 6 = 15$.`,
        },
        questions: [
          ["E", "Write 'a number increased by 9' as an algebraic expression.", "$n + 9$", "$9n$", "$n - 9$", "$\\frac{n}{9}$", "'Increased by' means add."],
          ["E", "What is the coefficient of $y$ in $5x - 7y + 2$?", "−7", "7", "5", "2", "The number multiplying y, including its sign, is −7."],
          ["E", "Find the value of $3x + 4$ when $x = 5$.", "19", "12", "35", "17", "3(5) + 4 = 15 + 4 = 19."],
          ["M", "If $a = 3$ and $b = -2$, find $2a - 5b$.", "16", "−4", "4", "−16", "2(3) − 5(−2) = 6 + 10 = 16."],
          ["M", "Write 'the product of $m$ and $n$, divided by 4'.", "$\\frac{mn}{4}$", "$\\frac{m + n}{4}$", "$4mn$", "$m + \\frac{n}{4}$", "Product means multiply: mn, then divide by 4."],
          ["M", "A book costs ₦$b$ and a pen costs ₦$p$. What is the total cost of 4 books and 3 pens?", "₦$(4b + 3p)$", "₦$7bp$", "₦$(3b + 4p)$", "₦$12bp$", "4 books cost 4b and 3 pens cost 3p; add them."],
          ["M", "Find the value of $x^2 - 3x$ when $x = 4$.", "4", "−4", "20", "28", "$4^2 - 3(4) = 16 - 12 = 4$."],
          ["H", "Evaluate $\\frac{2p + q}{p - q}$ when $p = 5$ and $q = 2$.", "4", "3", "$\\frac{12}{7}$", "7", "$\\frac{10 + 2}{5 - 2} = \\frac{12}{3} = 4$."],
          ["H", "Tunde is $t$ years old. His father is 4 years older than three times his age. Write the father's age.", "$3t + 4$", "$4t + 3$", "$3(t + 4)$", "$t + 12$", "Three times Tunde's age is 3t; 4 years older gives 3t + 4."],
          ["E", "How many terms are there in $2a + 3b - c + 6$?", "4", "3", "5", "6", "The terms are 2a, 3b, −c and 6."],
        ],
      },
      {
        week: 2,
        title: "Simplifying algebraic expressions",
        subtopics: ["Like and unlike terms", "Collecting like terms", "Removing brackets", "Simplifying expressions with brackets"],
        objectives: ["Distinguish between like and unlike terms", "Simplify expressions by collecting like terms", "Expand expressions with brackets", "Simplify expressions containing brackets"],
        lesson: {
          title: "Collecting Like Terms and Removing Brackets",
          summary: "Simplify algebraic expressions by grouping like terms and expanding brackets correctly.",
          minutes: 40,
          notes: `## Like and unlike terms
**Like terms** have exactly the same letters raised to the same powers: $3x$ and $-5x$; $2ab$ and $7ba$; $4y^2$ and $y^2$.
**Unlike terms** differ: $3x$ and $3y$; $x$ and $x^2$.

## Collecting like terms
Add or subtract only the **coefficients** of like terms:
$5a + 3b - 2a + b = (5 - 2)a + (3 + 1)b = 3a + 4b$
Unlike terms cannot be combined: $3a + 4b$ is already in its simplest form.

## Removing brackets
Multiply **every** term inside the bracket by the term outside:
- $3(2x - 5) = 6x - 15$
- $-2(4y - 3) = -8y + 6$ (a negative outside changes every sign inside)
- $-(a - b) = -a + b$

## Simplify in two steps
1. Expand all brackets.
2. Collect like terms.`,
          examples: `**Example 1.** Simplify $7x - 3y + 2x + 8y$. *Answer:* $9x + 5y$.

**Example 2.** Expand and simplify $3(2a + 1) + 4(a - 2)$.
*Solution:* $6a + 3 + 4a - 8 = 10a - 5$.

**Example 3.** Simplify $5(m - 2n) - 2(m - 3n)$.
*Solution:* $5m - 10n - 2m + 6n = 3m - 4n$.`,
        },
        questions: [
          ["E", "Which pair are like terms?", "$4xy$ and $-3yx$", "$2x$ and $2y$", "$a$ and $a^2$", "$5m$ and $5$", "xy and yx contain the same letters to the same powers."],
          ["E", "Simplify $6a + 4a - 3a$.", "$7a$", "$13a$", "$5a$", "$7$", "(6 + 4 − 3)a = 7a."],
          ["E", "Expand $4(x + 3)$.", "$4x + 12$", "$4x + 3$", "$x + 12$", "$4x + 7$", "Multiply both terms by 4: 4x + 12."],
          ["M", "Simplify $5p - 2q + 3p + 7q$.", "$8p + 5q$", "$8p - 9q$", "$13pq$", "$2p + 5q$", "5p + 3p = 8p and −2q + 7q = 5q."],
          ["M", "Expand $-3(2y - 5)$.", "$-6y + 15$", "$-6y - 15$", "$6y - 15$", "$-6y - 5$", "−3 × 2y = −6y and −3 × (−5) = +15."],
          ["M", "Simplify $2(3a - 1) + 5(a + 2)$.", "$11a + 8$", "$11a + 1$", "$8a + 8$", "$11a - 12$", "6a − 2 + 5a + 10 = 11a + 8."],
          ["M", "Simplify $7x - (2x - 4)$.", "$5x + 4$", "$5x - 4$", "$9x - 4$", "$5x$", "7x − 2x + 4 = 5x + 4."],
          ["H", "Simplify $4(m - 2n) - 3(m - 3n)$.", "$m + n$", "$m - 17n$", "$7m - 17n$", "$m - n$", "4m − 8n − 3m + 9n = m + n."],
          ["H", "Simplify $3x^2 + 2x - x^2 + 5x$.", "$2x^2 + 7x$", "$9x^3$", "$2x^2 + 3x$", "$4x^2 + 7x$", "3x² − x² = 2x² and 2x + 5x = 7x; x² and x are unlike terms."],
          ["H", "The perimeter of a rectangle is $2(l + w)$. Expand and simplify it for $l = 3a + 2$ and $w = a - 1$.", "$8a + 2$", "$8a + 1$", "$4a + 1$", "$8a - 2$", "l + w = 4a + 1, so 2(4a + 1) = 8a + 2."],
        ],
      },
      {
        week: 3,
        title: "Simple equations",
        subtopics: ["Meaning of an equation", "Solving equations by the balance method", "Equations with the unknown on both sides", "Checking solutions"],
        objectives: ["Explain the difference between an expression and an equation", "Solve one-step and two-step linear equations", "Solve equations with the unknown on both sides", "Check a solution by substitution"],
        lesson: {
          title: "Solving Simple Equations",
          summary: "Use the balance method to solve linear equations and check the answers.",
          minutes: 40,
          notes: `## Expression or equation?
An **expression** has no equals sign ($3x + 5$). An **equation** states that two expressions are equal ($3x + 5 = 20$). Solving an equation means finding the value of the unknown that makes it true.

## The balance method
An equation is like a balanced scale. Whatever you do to one side you must do to the **other side** to keep it balanced. Use the **inverse** operation to undo what has been done to $x$:
- $+$ is undone by $-$; $\\times$ is undone by $\\div$.

$3x + 5 = 20$
Subtract 5 from both sides: $3x = 15$
Divide both sides by 3: $x = 5$

## Unknown on both sides
Collect the $x$ terms on one side and the numbers on the other:
$7x - 4 = 3x + 12 \\Rightarrow 4x = 16 \\Rightarrow x = 4$

## Equations with brackets
Expand first, then solve.

## Always check
Substitute the answer into the **original** equation: $3(5) + 5 = 20$ ✓.`,
          examples: `**Example 1.** Solve $\\frac{x}{4} = 7$. *Solution:* multiply both sides by 4: $x = 28$.

**Example 2.** Solve $5y - 8 = 2y + 7$.
*Solution:* $5y - 2y = 7 + 8$, so $3y = 15$ and $y = 5$.

**Example 3.** Solve $2(3a - 1) = 16$.
*Solution:* $6a - 2 = 16 \\Rightarrow 6a = 18 \\Rightarrow a = 3$. Check: $2(9 - 1) = 16$ ✓.`,
        },
        questions: [
          ["E", "Solve $x + 7 = 15$.", "$x = 8$", "$x = 22$", "$x = 7$", "$x = -8$", "Subtract 7 from both sides: x = 15 − 7 = 8."],
          ["E", "Solve $4y = 28$.", "$y = 7$", "$y = 24$", "$y = 32$", "$y = 112$", "Divide both sides by 4: y = 7."],
          ["E", "Solve $\\frac{m}{3} = 6$.", "$m = 18$", "$m = 2$", "$m = 9$", "$m = 3$", "Multiply both sides by 3: m = 18."],
          ["M", "Solve $3x + 5 = 20$.", "$x = 5$", "$x = 15$", "$x = 8\\frac{1}{3}$", "$x = 25$", "3x = 15, so x = 5."],
          ["M", "Solve $5y - 8 = 2y + 7$.", "$y = 5$", "$y = 3$", "$y = -5$", "$y = \\frac{1}{3}$", "5y − 2y = 7 + 8, so 3y = 15 and y = 5."],
          ["M", "Solve $2(3a - 1) = 16$.", "$a = 3$", "$a = \\frac{17}{6}$", "$a = 2\\frac{1}{2}$", "$a = 9$", "6a − 2 = 16, so 6a = 18 and a = 3."],
          ["M", "Which value of $x$ satisfies $7 - 2x = 1$?", "3", "4", "−3", "−4", "−2x = −6, so x = 3. Check: 7 − 6 = 1."],
          ["H", "Solve $\\frac{2x + 1}{3} = 5$.", "$x = 7$", "$x = 8$", "$x = 2$", "$x = 14$", "2x + 1 = 15, so 2x = 14 and x = 7."],
          ["H", "Solve $4(x - 2) - (x + 1) = 9$.", "$x = 6$", "$x = 3$", "$x = \\frac{16}{5}$", "$x = 4$", "4x − 8 − x − 1 = 9, so 3x − 9 = 9, 3x = 18 and x = 6."],
          ["E", "Which of these is an equation?", "$2x - 3 = 11$", "$2x - 3$", "$5a + 2b$", "$x^2 + 1$", "Only 2x − 3 = 11 has an equals sign linking two expressions."],
        ],
      },
      {
        week: 4,
        title: "Word problems leading to equations",
        subtopics: ["Translating words into equations", "Number problems", "Age and money problems", "Checking answers in context"],
        objectives: ["Translate a word problem into a linear equation", "Solve number problems using equations", "Solve problems about ages and money", "Interpret the solution in the context of the problem"],
        lesson: {
          title: "Solving Problems with Equations",
          summary: "Turn everyday problems into equations, solve them and interpret the answers.",
          minutes: 40,
          notes: `## A four-step method
1. **Let** a letter stand for the unknown quantity (say what it means, with units).
2. **Write** an equation using the information in the question.
3. **Solve** the equation.
4. **Answer** the question in words and check that the answer makes sense.

## Useful translations
| Words | Symbols |
|---|---|
| is, equals, gives | $=$ |
| sum, more than, increased by | $+$ |
| difference, less than, reduced by | $-$ |
| product, times, twice | $\\times$ |
| shared equally, quotient | $\\div$ |

## Consecutive numbers
Consecutive whole numbers can be written $n$, $n + 1$, $n + 2$; consecutive even (or odd) numbers as $n$, $n + 2$, $n + 4$.

## Ages
In $k$ years' time every person is $k$ years older; $k$ years ago everyone was $k$ years younger.`,
          examples: `**Example 1.** When a number is doubled and 7 is added, the result is 31. Find the number.
*Solution:* $2n + 7 = 31 \\Rightarrow 2n = 24 \\Rightarrow n = 12$.

**Example 2.** The sum of three consecutive numbers is 54. Find them.
*Solution:* $n + (n + 1) + (n + 2) = 54 \\Rightarrow 3n + 3 = 54 \\Rightarrow n = 17$. The numbers are **17, 18, 19**.

**Example 3.** A mother is 3 times as old as her daughter. The sum of their ages is 48. How old is the daughter?
*Solution:* $d + 3d = 48 \\Rightarrow 4d = 48 \\Rightarrow d = 12$ years.`,
        },
        questions: [
          ["E", "I think of a number and add 12. The answer is 30. What is the number?", "18", "42", "12", "2.5", "n + 12 = 30, so n = 18."],
          ["E", "Five times a number is 45. What is the number?", "9", "40", "50", "225", "5n = 45, so n = 9."],
          ["M", "When a number is doubled and 7 is added, the result is 31. Find the number.", "12", "19", "14", "24", "2n + 7 = 31, 2n = 24, n = 12."],
          ["M", "The sum of three consecutive whole numbers is 54. What is the smallest number?", "17", "18", "16", "15", "n + (n + 1) + (n + 2) = 54 gives 3n + 3 = 54, so n = 17."],
          ["M", "A mother is three times as old as her daughter. Their ages add up to 48. How old is the daughter?", "12 years", "16 years", "36 years", "24 years", "d + 3d = 48, so 4d = 48 and d = 12."],
          ["M", "A pen costs ₦50 more than a pencil. Together they cost ₦250. What does the pencil cost?", "₦100", "₦150", "₦200", "₦125", "p + (p + 50) = 250, so 2p = 200 and p = 100."],
          ["H", "In 5 years' time Chidi will be twice as old as he was 7 years ago. How old is he now?", "19 years", "12 years", "17 years", "24 years", "c + 5 = 2(c − 7) gives c + 5 = 2c − 14, so c = 19."],
          ["H", "A rectangle is 4 cm longer than it is wide and its perimeter is 40 cm. What is its width?", "8 cm", "12 cm", "10 cm", "9 cm", "2(w + w + 4) = 40, so 4w + 8 = 40, 4w = 32 and w = 8 cm."],
          ["H", "₦2,400 is shared between Ade and Bola so that Ade gets ₦400 more than Bola. How much does Bola get?", "₦1,000", "₦1,400", "₦1,200", "₦800", "b + (b + 400) = 2,400, so 2b = 2,000 and b = 1,000."],
          ["E", "Which equation matches: 'a number less 6 equals 10'?", "$n - 6 = 10$", "$6 - n = 10$", "$n + 6 = 10$", "$6n = 10$", "'A number less 6' means n − 6."],
        ],
      },
      {
        week: 5,
        title: "Plane shapes",
        subtopics: ["Types of triangles", "Quadrilaterals and their properties", "Circles: parts of a circle", "Polygons"],
        objectives: ["Name and describe different types of triangles", "State the properties of common quadrilaterals", "Name the parts of a circle", "Identify regular and irregular polygons by their number of sides"],
        lesson: {
          title: "Properties of Plane Shapes",
          summary: "Describe triangles, quadrilaterals, circles and polygons by their sides and angles.",
          minutes: 35,
          notes: `## Plane shapes
A **plane shape** is a flat, two-dimensional figure with length and breadth but no thickness.

## Triangles (3 sides)
- **Equilateral:** 3 equal sides, 3 equal angles (each 60°).
- **Isosceles:** 2 equal sides; the angles opposite them are equal.
- **Scalene:** no equal sides.
- **Right-angled:** one angle is 90°.

## Quadrilaterals (4 sides)
- **Square:** 4 equal sides, 4 right angles; diagonals equal and bisect at right angles.
- **Rectangle:** opposite sides equal, 4 right angles; diagonals equal.
- **Parallelogram:** opposite sides equal and parallel; opposite angles equal.
- **Rhombus:** 4 equal sides; opposite sides parallel; diagonals cross at right angles.
- **Trapezium:** exactly one pair of parallel sides.
- **Kite:** two pairs of equal adjacent sides.

## Parts of a circle
**Centre**, **radius** (centre to edge), **diameter** (twice the radius, through the centre), **circumference** (the edge), **chord**, **arc**, **sector** and **segment**.

## Polygons
Named by their number of sides: pentagon (5), hexagon (6), heptagon (7), octagon (8), nonagon (9), decagon (10). A **regular polygon** has all sides and all angles equal.`,
          examples: `**Example 1.** A triangle has sides 5 cm, 5 cm and 8 cm. What type is it? *Answer:* isosceles (two equal sides).

**Example 2.** A circle has diameter 14 cm. What is its radius? *Answer:* 14 ÷ 2 = 7 cm.

**Example 3.** Name the shape with exactly one pair of parallel sides. *Answer:* a trapezium.`,
        },
        questions: [
          ["E", "A triangle with all three sides equal is called", "equilateral", "isosceles", "scalene", "right-angled", "Equilateral means 'equal sides'."],
          ["E", "How many sides does a hexagon have?", "6", "5", "7", "8", "Hexa- means six."],
          ["E", "The distance from the centre of a circle to its edge is the", "radius", "diameter", "chord", "arc", "The radius joins the centre to any point on the circumference."],
          ["M", "Which quadrilateral has exactly one pair of parallel sides?", "Trapezium", "Rhombus", "Parallelogram", "Rectangle", "A trapezium has one pair of parallel sides; the others have two pairs."],
          ["M", "The diameter of a circle is 18 cm. What is its radius?", "9 cm", "36 cm", "18 cm", "6 cm", "Radius = diameter ÷ 2 = 9 cm."],
          ["M", "Which shape has four equal sides but its angles are not necessarily right angles?", "Rhombus", "Rectangle", "Trapezium", "Kite", "A rhombus has four equal sides; a square is a special rhombus with right angles."],
          ["M", "A triangle has sides 7 cm, 7 cm and 10 cm. It is", "isosceles", "equilateral", "scalene", "right-angled", "Two of its sides are equal."],
          ["H", "Which property is true of a rectangle but NOT of every parallelogram?", "All its angles are right angles", "Opposite sides are equal", "Opposite sides are parallel", "Opposite angles are equal", "Every parallelogram has equal, parallel opposite sides and equal opposite angles; only rectangles must have right angles."],
          ["H", "A line joining two points on a circle and passing through the centre is a", "diameter", "radius", "tangent", "sector", "A chord through the centre is a diameter."],
          ["E", "A polygon with 8 sides is called", "an octagon", "a hexagon", "a pentagon", "a decagon", "Octa- means eight."],
        ],
      },
      {
        week: 6,
        title: "Perimeter of plane shapes",
        subtopics: ["Meaning of perimeter", "Perimeter of squares and rectangles", "Perimeter of triangles and other polygons", "Circumference of a circle"],
        objectives: ["Explain the meaning of perimeter", "Calculate the perimeter of squares, rectangles and triangles", "Find a missing side given the perimeter", "Calculate the circumference of a circle"],
        lesson: {
          title: "Perimeter and Circumference",
          summary: "Find the distance around polygons and circles and solve practical fencing and framing problems.",
          minutes: 40,
          notes: `## Perimeter
The **perimeter** of a shape is the total distance around its boundary. It is measured in units of **length**: mm, cm, m or km.

## Formulae
- **Square** of side $s$: $P = 4s$
- **Rectangle** with length $l$ and breadth $b$: $P = 2(l + b)$
- **Triangle** or any polygon: add all the sides.
- **Regular polygon** with $n$ sides of length $s$: $P = ns$

## Circumference of a circle
The perimeter of a circle is its **circumference**:
$C = \\pi d = 2\\pi r$
where $d$ is the diameter, $r$ the radius and $\\pi \\approx \\frac{22}{7}$ or 3.14.

## Finding a missing side
Substitute what you know into the formula and solve. For a rectangle with perimeter 30 cm and length 9 cm: $2(9 + b) = 30 \\Rightarrow b = 6$ cm.

## Real life
Fencing a field, putting a frame round a picture, edging a garden and running round a track are all perimeter problems.`,
          examples: `**Example 1.** Find the perimeter of a rectangle 12 m by 7 m. *Solution:* $2(12 + 7) = 38$ m.

**Example 2.** Find the circumference of a circle of radius 7 cm ($\\pi = \\frac{22}{7}$).
*Solution:* $C = 2\\times\\frac{22}{7}\\times 7 = 44$ cm.

**Example 3.** A square garden has perimeter 60 m. Fencing costs ₦1,500 per metre. Find the side and the fencing cost.
*Solution:* side = 60 ÷ 4 = 15 m; cost = 60 × 1,500 = **₦90,000**.`,
        },
        questions: [
          ["E", "Find the perimeter of a square of side 9 cm.", "36 cm", "81 cm", "18 cm", "27 cm", "P = 4 × 9 = 36 cm."],
          ["E", "Find the perimeter of a rectangle 8 cm long and 5 cm wide.", "26 cm", "40 cm", "13 cm", "21 cm", "P = 2(8 + 5) = 26 cm."],
          ["E", "A triangle has sides 6 cm, 8 cm and 10 cm. What is its perimeter?", "24 cm", "48 cm", "14 cm", "240 cm", "6 + 8 + 10 = 24 cm."],
          ["M", "Find the circumference of a circle of radius 7 cm. (Take $\\pi = \\frac{22}{7}$.)", "44 cm", "22 cm", "154 cm", "88 cm", "C = 2πr = 2 × 22/7 × 7 = 44 cm."],
          ["M", "A rectangle has perimeter 30 cm and length 9 cm. What is its breadth?", "6 cm", "12 cm", "21 cm", "3 cm", "2(9 + b) = 30, so 9 + b = 15 and b = 6 cm."],
          ["M", "A regular pentagon has sides of 12 cm. What is its perimeter?", "60 cm", "48 cm", "72 cm", "17 cm", "A pentagon has 5 equal sides: 5 × 12 = 60 cm."],
          ["M", "A square field has perimeter 100 m. What is the length of one side?", "25 m", "50 m", "10 m", "400 m", "Side = 100 ÷ 4 = 25 m."],
          ["H", "A circular table has diameter 1.4 m. What is its circumference? (Take $\\pi = \\frac{22}{7}$.)", "4.4 m", "2.2 m", "8.8 m", "6.16 m", "C = πd = 22/7 × 1.4 = 4.4 m."],
          ["H", "A rectangular plot 25 m by 15 m is fenced at ₦800 per metre. What is the cost of the fencing?", "₦64,000", "₦32,000", "₦300,000", "₦40,000", "Perimeter = 2(25 + 15) = 80 m; cost = 80 × 800 = ₦64,000."],
          ["H", "A wire 88 cm long is bent into a circle. What is the radius of the circle? (Take $\\pi = \\frac{22}{7}$.)", "14 cm", "28 cm", "7 cm", "44 cm", "2πr = 88, so r = 88 ÷ (2 × 22/7) = 14 cm."],
        ],
      },
      {
        week: 7,
        title: "Area of plane shapes",
        subtopics: ["Meaning of area and square units", "Area of squares and rectangles", "Area of triangles and parallelograms", "Area of a circle"],
        objectives: ["Explain area and its units", "Calculate the area of squares, rectangles, triangles and parallelograms", "Calculate the area of a circle", "Solve practical problems involving area"],
        lesson: {
          title: "Finding Areas",
          summary: "Measure the surface covered by common shapes and apply area to flooring, painting and land.",
          minutes: 40,
          notes: `## Area
**Area** is the amount of surface a shape covers. It is measured in **square units**: mm², cm², m², hectares (1 ha = 10,000 m²) and km².

## Formulae
| Shape | Area |
|---|---|
| Square, side $s$ | $A = s^2$ |
| Rectangle, $l$ by $b$ | $A = l\\times b$ |
| Triangle, base $b$, height $h$ | $A = \\frac{1}{2}bh$ |
| Parallelogram, base $b$, height $h$ | $A = bh$ |
| Circle, radius $r$ | $A = \\pi r^2$ |

The **height** is always measured **at right angles** to the base — not along a slanting side.

## Composite shapes
Split the shape into rectangles and triangles, find each area and add (or subtract a missing part).

## Units
Convert all lengths to the **same unit before** multiplying. 1 m² = 100 cm × 100 cm = 10,000 cm².`,
          examples: `**Example 1.** Area of a triangle with base 10 cm and height 7 cm: $\\frac{1}{2}\\times 10\\times 7 = 35$ cm².

**Example 2.** Area of a circle of radius 14 cm ($\\pi = \\frac{22}{7}$): $\\frac{22}{7}\\times 14\\times 14 = 616$ cm².

**Example 3.** A floor 6 m by 4 m is covered with tiles 50 cm by 50 cm. How many tiles?
*Solution:* each tile = 0.5 × 0.5 = 0.25 m²; floor = 24 m²; tiles = 24 ÷ 0.25 = **96**.`,
        },
        questions: [
          ["E", "Find the area of a rectangle 9 cm by 4 cm.", "36 cm²", "26 cm²", "13 cm²", "72 cm²", "A = l × b = 9 × 4 = 36 cm²."],
          ["E", "Find the area of a square of side 7 m.", "49 m²", "28 m²", "14 m²", "56 m²", "A = 7² = 49 m²."],
          ["E", "Find the area of a triangle with base 10 cm and height 6 cm.", "30 cm²", "60 cm²", "16 cm²", "15 cm²", "A = ½ × 10 × 6 = 30 cm²."],
          ["M", "Find the area of a circle of radius 7 cm. (Take $\\pi = \\frac{22}{7}$.)", "154 cm²", "44 cm²", "22 cm²", "308 cm²", "A = πr² = 22/7 × 7 × 7 = 154 cm²."],
          ["M", "A parallelogram has base 12 cm and perpendicular height 5 cm. What is its area?", "60 cm²", "30 cm²", "34 cm²", "17 cm²", "A = base × height = 12 × 5 = 60 cm²."],
          ["M", "The area of a rectangle is 48 m² and its length is 8 m. What is its breadth?", "6 m", "40 m", "12 m", "56 m", "b = 48 ÷ 8 = 6 m."],
          ["M", "How many square centimetres are there in 1 square metre?", "10,000", "100", "1,000", "1,000,000", "1 m² = 100 cm × 100 cm = 10,000 cm²."],
          ["H", "A floor 6 m by 4 m is covered with square tiles of side 50 cm. How many tiles are needed?", "96", "48", "24", "480", "Floor area = 24 m²; each tile = 0.25 m²; 24 ÷ 0.25 = 96."],
          ["H", "A square of side 10 cm has a circle of radius 3.5 cm cut out of it. What area is left? (Take $\\pi = \\frac{22}{7}$.)", "61.5 cm²", "38.5 cm²", "78 cm²", "88.5 cm²", "100 − (22/7 × 3.5 × 3.5) = 100 − 38.5 = 61.5 cm²."],
          ["H", "The area of a square is 81 cm². What is its perimeter?", "36 cm", "18 cm", "81 cm", "40.5 cm", "Side = √81 = 9 cm, so perimeter = 4 × 9 = 36 cm."],
        ],
      },
      {
        week: 8,
        title: "Three-dimensional shapes",
        subtopics: ["Solid shapes around us", "Faces, edges and vertices", "Nets of cubes and cuboids", "Cylinders, cones, pyramids and spheres"],
        objectives: ["Identify common solid shapes", "Count the faces, edges and vertices of solids", "Draw and recognise nets of a cube and a cuboid", "Describe the properties of cylinders, cones, pyramids and spheres"],
        lesson: {
          title: "Solid Shapes",
          summary: "Describe everyday solids by their faces, edges and vertices and recognise their nets.",
          minutes: 35,
          notes: `## Solids
A **solid** (three-dimensional shape) has length, breadth and height. Examples around us: a box of chalk (cuboid), a die (cube), a tin of milk (cylinder), a funnel (cone), a football (sphere).

## Faces, edges and vertices
- A **face** is a flat or curved surface.
- An **edge** is where two faces meet.
- A **vertex** (plural *vertices*) is a corner where edges meet.

| Solid | Faces | Edges | Vertices |
|---|---|---|---|
| Cube | 6 (all squares) | 12 | 8 |
| Cuboid | 6 (rectangles) | 12 | 8 |
| Triangular prism | 5 | 9 | 6 |
| Square-based pyramid | 5 | 8 | 5 |
| Cylinder | 3 (2 flat, 1 curved) | 2 (curved) | 0 |
| Cone | 2 (1 flat, 1 curved) | 1 | 1 (apex) |
| Sphere | 1 curved | 0 | 0 |

For solids with flat faces, **Euler's rule** holds: $F + V - E = 2$.

## Nets
A **net** is a flat pattern that folds up to make a solid. A cube has 11 different nets, each made of 6 squares.`,
          examples: `**Example 1.** How many edges does a cuboid have? *Answer:* 12.

**Example 2.** Check Euler's rule for a square-based pyramid: $F + V - E = 5 + 5 - 8 = 2$ ✓.

**Example 3.** Name a solid with one curved face, one flat face and one vertex. *Answer:* a cone.`,
        },
        questions: [
          ["E", "How many faces does a cube have?", "6", "8", "12", "4", "A cube has 6 square faces."],
          ["E", "A tin of milk is shaped like a", "cylinder", "cone", "cube", "sphere", "It has two circular ends and a curved surface."],
          ["E", "How many vertices does a cuboid have?", "8", "6", "12", "4", "A cuboid has 8 corners."],
          ["M", "How many edges does a cube have?", "12", "8", "6", "10", "A cube has 4 edges on the top, 4 on the bottom and 4 upright edges."],
          ["M", "Which solid has 5 faces, 5 vertices and 8 edges?", "Square-based pyramid", "Triangular prism", "Cube", "Cone", "A square base plus 4 triangular faces; 4 base corners plus the apex."],
          ["M", "A net is made of 6 squares. When folded it makes a", "cube", "cuboid with rectangular faces", "pyramid", "prism with triangular ends", "Six equal squares fold into a cube."],
          ["M", "Which solid has no edges and no vertices?", "Sphere", "Cone", "Cylinder", "Cube", "A sphere has one curved surface only."],
          ["H", "A solid has 7 faces and 10 vertices. How many edges does it have? (Use $F + V - E = 2$.)", "15", "17", "12", "5", "7 + 10 − E = 2, so E = 15. (This is a pentagonal prism.)"],
          ["H", "How many faces, edges and vertices does a triangular prism have?", "5 faces, 9 edges, 6 vertices", "6 faces, 12 edges, 8 vertices", "5 faces, 8 edges, 5 vertices", "4 faces, 6 edges, 4 vertices", "Two triangular ends and three rectangles; 3 + 3 + 3 edges; 3 + 3 vertices."],
          ["E", "The pointed top of a cone is called its", "apex", "base", "radius", "edge", "The single vertex of a cone is its apex."],
        ],
      },
      {
        week: 9,
        title: "Volume of cubes and cuboids",
        subtopics: ["Meaning of volume and cubic units", "Volume of a cube", "Volume of a cuboid", "Capacity and litres"],
        objectives: ["Explain volume and its units", "Calculate the volume of a cube and a cuboid", "Find a missing dimension given the volume", "Convert between cubic centimetres and litres"],
        lesson: {
          title: "Volume and Capacity",
          summary: "Measure the space inside cubes and cuboids and relate volume to capacity in litres.",
          minutes: 35,
          notes: `## Volume
**Volume** is the amount of space a solid occupies. It is measured in **cubic units**: cm³ or m³.
A 1 cm cube has a volume of 1 cm³.

## Formulae
- **Cuboid** with length $l$, breadth $b$ and height $h$: $V = l\\times b\\times h$
- **Cube** of side $s$: $V = s^3$
Volume can also be found as **area of base × height**.

## Capacity
**Capacity** is how much a container can hold, usually measured in litres (l) and millilitres (ml).
- $1\\text{ cm}^3 = 1\\text{ ml}$
- $1000\\text{ cm}^3 = 1\\text{ litre}$
- $1\\text{ m}^3 = 1000\\text{ litres}$

## Missing dimension
Divide the volume by the product of the known dimensions: $h = \\frac{V}{l\\times b}$.

## Watch the units
Make sure all measurements are in the same unit before multiplying.`,
          examples: `**Example 1.** Volume of a cuboid 8 cm × 5 cm × 3 cm: $V = 120$ cm³.

**Example 2.** A water tank is 2 m long, 1.5 m wide and 1 m high. How many litres does it hold?
*Solution:* $V = 3$ m³ = 3 × 1000 = **3,000 litres**.

**Example 3.** A cuboid has volume 240 cm³, length 10 cm and breadth 6 cm. Find its height.
*Solution:* $h = \\frac{240}{10\\times 6} = 4$ cm.`,
        },
        questions: [
          ["E", "Find the volume of a cube of side 4 cm.", "64 cm³", "16 cm³", "12 cm³", "48 cm³", "V = 4³ = 64 cm³."],
          ["E", "Find the volume of a cuboid 6 cm by 4 cm by 2 cm.", "48 cm³", "12 cm³", "24 cm³", "96 cm³", "V = 6 × 4 × 2 = 48 cm³."],
          ["E", "How many millilitres are in 1 litre?", "1,000", "100", "10", "10,000", "1 litre = 1,000 ml."],
          ["M", "A cuboid has volume 240 cm³, length 10 cm and breadth 6 cm. What is its height?", "4 cm", "24 cm", "40 cm", "16 cm", "h = 240 ÷ (10 × 6) = 4 cm."],
          ["M", "A tank 2 m long, 1.5 m wide and 1 m high is full of water. How many litres does it hold?", "3,000 litres", "300 litres", "30 litres", "4,500 litres", "V = 2 × 1.5 × 1 = 3 m³ = 3,000 litres."],
          ["M", "The volume of a cube is 125 cm³. What is the length of one edge?", "5 cm", "25 cm", "15 cm", "41.7 cm", "Edge = ∛125 = 5 cm."],
          ["M", "How many cm³ are there in 2.5 litres?", "2,500 cm³", "250 cm³", "25 cm³", "25,000 cm³", "1 litre = 1,000 cm³, so 2.5 litres = 2,500 cm³."],
          ["H", "How many 2 cm cubes can be packed into a box 10 cm by 6 cm by 4 cm?", "30", "240", "60", "120", "Along each edge: 5, 3 and 2 cubes, so 5 × 3 × 2 = 30."],
          ["H", "A cuboid is 20 cm long, 10 cm wide and holds 3 litres of water when full. How deep is it?", "15 cm", "30 cm", "1.5 cm", "150 cm", "3 litres = 3,000 cm³; depth = 3,000 ÷ (20 × 10) = 15 cm."],
          ["H", "If each edge of a cube is doubled, its volume is multiplied by", "8", "2", "4", "6", "The new volume is (2s)³ = 8s³, which is 8 times the old volume s³."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Angles",
        subtopics: ["Meaning of an angle", "Types of angles", "Measuring angles with a protractor", "Drawing angles"],
        objectives: ["Describe an angle as an amount of turn", "Classify angles as acute, right, obtuse, straight or reflex", "Measure angles accurately with a protractor", "Draw angles of a given size"],
        lesson: {
          title: "Angles and Their Measurement",
          summary: "Name, measure and draw angles using a protractor.",
          minutes: 35,
          notes: `## What is an angle?
An **angle** is the amount of turn between two lines that meet at a point called the **vertex**. Angles are measured in **degrees (°)**. A full turn is 360°.

## Types of angles
| Type | Size |
|---|---|
| Acute | less than 90° |
| Right | exactly 90° |
| Obtuse | between 90° and 180° |
| Straight | exactly 180° |
| Reflex | between 180° and 360° |

## Naming angles
The angle at vertex B between lines BA and BC is written $\\angle ABC$ (the vertex letter goes in the middle).

## Using a protractor
1. Place the centre point of the protractor exactly on the vertex.
2. Line up the zero line with one arm of the angle.
3. Read the scale that starts at 0 on that arm, where the other arm crosses it.
For a **reflex** angle, measure the smaller angle and subtract it from 360°.

## Drawing an angle
Draw one arm, place the protractor on its end, mark the required size, and join the mark to the vertex.`,
          examples: `**Example 1.** Classify 135°. *Answer:* obtuse (between 90° and 180°).

**Example 2.** The smaller angle between two lines is 70°. What is the reflex angle? *Answer:* 360° − 70° = 290°.

**Example 3.** Through how many degrees does the minute hand of a clock turn in 15 minutes? *Answer:* a quarter turn = 90°.`,
        },
        questions: [
          ["E", "An angle of 90° is called", "a right angle", "an acute angle", "an obtuse angle", "a straight angle", "Exactly 90° is a right angle."],
          ["E", "Which of these angles is acute?", "65°", "90°", "120°", "200°", "Acute angles are less than 90°."],
          ["E", "How many degrees are there in a full turn?", "360°", "180°", "90°", "400°", "One complete revolution is 360°."],
          ["M", "An angle of 245° is", "reflex", "obtuse", "straight", "acute", "Reflex angles lie between 180° and 360°."],
          ["M", "The acute angle between two lines is 55°. What is the reflex angle?", "305°", "125°", "235°", "145°", "360° − 55° = 305°."],
          ["M", "Through how many degrees does the minute hand of a clock turn in 20 minutes?", "120°", "60°", "90°", "200°", "In 60 minutes it turns 360°, so in 20 minutes it turns 360° ÷ 3 = 120°."],
          ["M", "In $\\angle PQR$, the vertex of the angle is", "Q", "P", "R", "PR", "The middle letter names the vertex."],
          ["H", "What angle is between the hands of a clock at 3 o'clock?", "90°", "30°", "120°", "180°", "Each hour mark is 30° apart; 3 hours apart gives 3 × 30° = 90°."],
          ["H", "A boy facing north turns clockwise to face south-west. Through what angle does he turn?", "225°", "135°", "45°", "315°", "North to south is 180°; south to south-west is 45° more: 180° + 45° = 225°."],
          ["E", "An angle of 180° is called", "a straight angle", "a reflex angle", "a right angle", "a full turn", "Half a turn, a straight line, is 180°."],
        ],
      },
      {
        week: 2,
        title: "Angles at a point and on a straight line",
        subtopics: ["Angles on a straight line", "Angles at a point", "Vertically opposite angles", "Complementary and supplementary angles"],
        objectives: ["State that angles on a straight line add up to 180°", "State that angles at a point add up to 360°", "Use vertically opposite angles to find unknown angles", "Find complements and supplements of angles"],
        lesson: {
          title: "Angle Facts",
          summary: "Use the facts about angles on a line, at a point and vertically opposite to find unknown angles.",
          minutes: 40,
          notes: `## Angles on a straight line
Angles that together make a straight line add up to **180°**. If they are $a$ and $b$, then $a + b = 180°$.

## Angles at a point
Angles all the way around a point add up to **360°**.

## Vertically opposite angles
When two straight lines cross, the angles **opposite** each other are **equal**. Adjacent angles are supplementary.

## Complementary and supplementary
- Two angles are **complementary** if they add up to **90°**. The complement of 35° is 55°.
- Two angles are **supplementary** if they add up to **180°**. The supplement of 35° is 145°.

## Finding unknowns
Write an equation from the angle fact, then solve it:
angles on a line $x + 2x + 30° = 180°$ gives $3x = 150°$, so $x = 50°$.
Always give a **reason** for each step, e.g. *(angles on a straight line)*.`,
          examples: `**Example 1.** Two angles on a straight line are $x$ and 112°. Find $x$. *Solution:* $x = 180° - 112° = 68°$.

**Example 2.** Angles at a point are 90°, 125°, $y$ and $y$. Find $y$.
*Solution:* $2y = 360° - 215° = 145°$, so $y = 72.5°$.

**Example 3.** Two lines cross. One angle is 48°. Find the other three.
*Solution:* opposite angle = 48°; the others are 180° − 48° = 132° each.`,
        },
        questions: [
          ["E", "Two angles on a straight line are 110° and $x$. Find $x$.", "70°", "250°", "90°", "110°", "Angles on a straight line add up to 180°: 180° − 110° = 70°."],
          ["E", "What is the complement of 40°?", "50°", "140°", "320°", "60°", "Complementary angles add up to 90°."],
          ["E", "What is the supplement of 65°?", "115°", "25°", "295°", "35°", "Supplementary angles add up to 180°."],
          ["M", "Three angles at a point are 100°, 150° and $y$. Find $y$.", "110°", "70°", "130°", "250°", "Angles at a point add up to 360°: 360° − 250° = 110°."],
          ["M", "Two straight lines cross and one angle is 48°. What is the angle vertically opposite it?", "48°", "132°", "42°", "312°", "Vertically opposite angles are equal."],
          ["M", "Angles on a straight line are $x$, $2x$ and 30°. Find $x$.", "50°", "60°", "75°", "40°", "3x + 30° = 180°, so 3x = 150° and x = 50°."],
          ["M", "Two lines cross and one angle is 35°. What is the size of each angle next to it?", "145°", "35°", "55°", "325°", "Adjacent angles lie on a straight line: 180° − 35° = 145°."],
          ["H", "Angles at a point are $3y$, $4y$, $5y$ and $6y$. Find $y$.", "20°", "18°", "30°", "10°", "18y = 360°, so y = 20°."],
          ["H", "An angle is 20° more than its complement. Find the angle.", "55°", "35°", "70°", "100°", "x + (x − 20°) = 90°, so 2x = 110° and x = 55°."],
          ["H", "The supplement of an angle is three times the angle. Find the angle.", "45°", "60°", "135°", "30°", "x + 3x = 180°, so 4x = 180° and x = 45°."],
        ],
      },
      {
        week: 3,
        title: "Geometric construction",
        subtopics: ["Using a ruler and a pair of compasses", "Bisecting a line segment", "Bisecting an angle", "Constructing angles of 90° and 60°"],
        objectives: ["Use a ruler and compasses correctly and safely", "Construct the perpendicular bisector of a line segment", "Bisect a given angle", "Construct angles of 60°, 30°, 90° and 45°"],
        lesson: {
          title: "Constructions with Ruler and Compasses",
          summary: "Construct bisectors and special angles accurately using only a ruler and a pair of compasses.",
          minutes: 45,
          notes: `## Instruments
A **construction** uses only a straight edge (ruler) and a **pair of compasses**. Keep your pencil sharp and do **not** rub out construction arcs — they show your method.

## Bisecting a line segment AB
1. Open the compasses to more than half of AB.
2. With centre A, draw arcs above and below the line.
3. With centre B and the **same radius**, draw arcs cutting the first two.
4. Join the two crossing points. This line is the **perpendicular bisector**: it cuts AB in half at 90°.

## Bisecting an angle
1. With centre at the vertex, draw an arc cutting both arms.
2. From each cutting point, draw arcs of equal radius that cross inside the angle.
3. Join the vertex to the crossing point.

## Constructing 60°
Draw a line and mark a point O. With centre O draw an arc cutting the line at P. With centre P and the **same radius** draw an arc cutting the first arc at Q. $\\angle QOP = 60°$ (triangle OPQ is equilateral).

## Other angles
- **30°**: bisect 60°.
- **90°**: construct a perpendicular (or bisect a straight angle of 180°).
- **45°**: bisect 90°. **120°** = 60° + 60°.`,
          examples: `**Example 1.** Which angle do you get when you bisect a 60° angle? *Answer:* 30°.

**Example 2.** How can you construct 75°? *Answer:* construct 90° and 60° at the same point and bisect the 30° between them to get 15°; then 60° + 15° = 75°.

**Example 3.** Why must the compass radius stay the same when bisecting a line? *Answer:* so the crossing points are equidistant from A and B, which puts them on the perpendicular bisector.`,
        },
        questions: [
          ["E", "Which instrument is used to draw arcs in a construction?", "A pair of compasses", "A protractor", "A set square", "A divider", "Arcs and circles are drawn with a pair of compasses."],
          ["E", "Bisecting an angle means", "dividing it into two equal angles", "doubling it", "measuring it", "drawing its supplement", "To bisect is to cut into two equal parts."],
          ["E", "Bisecting a 90° angle gives", "45°", "30°", "60°", "180°", "Bisecting means halving: 90° ÷ 2 = 45°."],
          ["M", "The perpendicular bisector of a line segment crosses it at", "its midpoint, at right angles", "one end, at 60°", "its midpoint, at 45°", "any point, at right angles", "It cuts the segment into two equal halves at 90°."],
          ["M", "In constructing 60°, why must the radius stay the same?", "It makes an equilateral triangle", "It makes a right angle", "It halves the line", "It makes a square", "Equal radii give three equal sides, so each angle is 60°."],
          ["M", "Which angle can be obtained by bisecting 60°?", "30°", "15°", "45°", "120°", "Bisecting halves the angle: 60° ÷ 2 = 30°."],
          ["M", "An angle of 120° can be constructed as", "60° + 60°", "90° + 45°", "180° − 45°", "2 × 45°", "Construct 60° twice from the same point."],
          ["H", "How can an angle of 75° be constructed?", "60° plus half of the 30° between 60° and 90°", "Bisect 150° only by measuring", "90° minus 45°", "Bisect 60° twice", "Half of 30° is 15°, and 60° + 15° = 75°."],
          ["H", "To construct 22.5°, you should", "bisect 45°", "bisect 60° twice", "bisect 30°", "add 15° and 7.5°", "45° ÷ 2 = 22.5°, and 45° itself comes from bisecting 90°."],
          ["E", "Construction arcs should be", "left on the drawing", "rubbed out", "drawn in ink", "coloured red", "The arcs show the method used."],
        ],
      },
      {
        week: 4,
        title: "Statistics: collecting and presenting data",
        subtopics: ["Collecting data", "Tally marks and frequency tables", "Pictograms", "Bar charts"],
        objectives: ["Collect simple data from the class or community", "Organise data in a frequency table using tally marks", "Draw and interpret pictograms", "Draw and interpret bar charts"],
        lesson: {
          title: "Collecting and Presenting Data",
          summary: "Organise raw data in frequency tables and present it with pictograms and bar charts.",
          minutes: 40,
          notes: `## Data
**Data** are facts or figures collected for a purpose, e.g. the shoe sizes of students in a class or the number of cars passing the school gate each hour. Data may be collected by **counting**, **measuring**, **questionnaires** or **observation**.

## Tally marks and frequency tables
Record each item with a tally stroke; every fifth stroke is drawn across the previous four (\`||||\` with a line through). The **frequency** is the number of times each value occurs, and the frequencies add up to the total number of items.

## Pictograms
A pictogram uses symbols to represent data. Always give a **key**, e.g. one book symbol = 4 students. Half a symbol represents half the amount.

## Bar charts
- Bars are of **equal width**, with **equal gaps** between them.
- The **height** of each bar shows the frequency.
- Label both axes and give the chart a title.

## Interpreting
Read values carefully from the scale; find the **most common** value (tallest bar) and compare categories.`,
          examples: `**Example 1.** Shoe sizes: 5, 6, 5, 7, 6, 5, 8, 6, 5, 7. Frequency table: size 5 → 4, size 6 → 3, size 7 → 2, size 8 → 1 (total 10).

**Example 2.** In a pictogram, one symbol = 6 pupils. Monday shows 3½ symbols. How many pupils? *Answer:* 3.5 × 6 = **21**.

**Example 3.** A bar chart shows 12 red cars and 20 white cars. How many more white cars? *Answer:* 8.`,
        },
        questions: [
          ["E", "In a frequency table, the frequency is", "the number of times a value occurs", "the largest value", "the total of all values", "the difference between two values", "Frequency counts how often each value occurs."],
          ["E", "How many items does this tally represent: a group of five plus three more strokes?", "8", "5", "3", "9", "A crossed group is 5; add 3 to get 8."],
          ["E", "In a bar chart, the height of a bar shows the", "frequency", "width", "name of the item", "key", "Taller bars represent larger frequencies."],
          ["M", "In a pictogram, one symbol represents 6 pupils. How many pupils are shown by 3½ symbols?", "21", "18", "24", "9.5", "Each whole symbol is 6 pupils, so 3½ symbols represent 3.5 × 6 = 21 pupils."],
          ["M", "Shoe sizes: 5, 6, 5, 7, 6, 5, 8, 6, 5, 7. What is the frequency of size 5?", "4", "3", "5", "2", "Size 5 appears four times."],
          ["M", "In a survey of favourite fruits, the frequencies are mango 12, orange 8, banana 15, pawpaw 5. How many people were surveyed?", "40", "35", "15", "45", "12 + 8 + 15 + 5 = 40."],
          ["M", "Using the fruit survey (mango 12, orange 8, banana 15, pawpaw 5), which fruit is most popular?", "Banana", "Mango", "Orange", "Pawpaw", "Banana has the highest frequency, 15."],
          ["H", "In a pictogram, 5 symbols represent 40 books. How many books does one symbol represent?", "8", "5", "40", "200", "40 ÷ 5 = 8 books per symbol."],
          ["H", "Using the fruit survey (mango 12, orange 8, banana 15, pawpaw 5), what fraction of the people chose orange?", "$\\frac{1}{5}$", "$\\frac{1}{8}$", "$\\frac{2}{5}$", "$\\frac{8}{35}$", "8 out of 40 = $\\frac{8}{40} = \\frac{1}{5}$."],
          ["E", "Which of these is a good rule for drawing a bar chart?", "Bars should have equal widths", "Bars should touch and have different widths", "The key goes on every bar", "Axes do not need labels", "Equal widths make the heights comparable."],
        ],
      },
      {
        week: 5,
        title: "Averages: mean, median and mode",
        subtopics: ["The mean of a set of data", "The median of a set of data", "The mode of a set of data", "Choosing the most suitable average"],
        objectives: ["Calculate the mean of a set of numbers", "Find the median of an odd or even number of values", "Identify the mode of a set of data", "Explain which average best represents given data"],
        lesson: {
          title: "Mean, Median and Mode",
          summary: "Find and interpret the three averages of a set of data.",
          minutes: 40,
          notes: `## Averages
An **average** is a single value that represents a whole set of data.

## Mean
$\\text{Mean} = \\frac{\\text{sum of all the values}}{\\text{number of values}}$
Scores 4, 7, 8, 9, 12 have mean $\\frac{40}{5} = 8$.

## Median
The **middle** value when the data are arranged **in order**.
- For an odd number of values it is the middle one.
- For an even number of values it is the **mean of the two middle values**.
Data 3, 5, 8, 10 → median = $\\frac{5 + 8}{2} = 6.5$.

## Mode
The value that occurs **most often**. A set may have one mode, more than one mode, or no mode.

## Which average?
- The **mean** uses every value but is pulled by extreme values (outliers).
- The **median** is not affected by extremes — good for incomes and house prices.
- The **mode** is the only average for non-numerical data (e.g. favourite colour) and is useful for shop stock (most common shoe size).`,
          examples: `**Example 1.** Find the mean of 12, 15, 9, 20 and 14. *Solution:* $\\frac{70}{5} = 14$.

**Example 2.** Find the median of 7, 3, 9, 4, 11, 6. *Solution:* in order 3, 4, 6, 7, 9, 11; median = $\\frac{6 + 7}{2} = 6.5$.

**Example 3.** The mean of 5 numbers is 8. Four of them are 6, 9, 10 and 5. Find the fifth.
*Solution:* total = 40; the four add to 30; the fifth is **10**.`,
        },
        questions: [
          ["E", "Find the mean of 4, 6, 8 and 10.", "7", "6", "8", "28", "(4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7."],
          ["E", "What is the mode of 3, 5, 5, 7, 8, 5, 9?", "5", "7", "3", "9", "5 occurs three times, more than any other value."],
          ["E", "Find the median of 2, 9, 4, 7, 5.", "5", "4", "7", "5.4", "In order: 2, 4, 5, 7, 9. The middle value is 5."],
          ["M", "Find the median of 7, 3, 9, 4, 11, 6.", "6.5", "6", "7", "40", "In order: 3, 4, 6, 7, 9, 11. Median = (6 + 7) ÷ 2 = 6.5."],
          ["M", "Find the mean of 12, 15, 9, 20 and 14.", "14", "15", "70", "12", "Sum = 70; 70 ÷ 5 = 14."],
          ["M", "The mean of five numbers is 8. Four of them are 6, 9, 10 and 5. What is the fifth number?", "10", "8", "30", "40", "Total = 5 × 8 = 40; 40 − 30 = 10."],
          ["M", "The ages of five children are 9, 10, 10, 11 and 30. Which average is least affected by the 30?", "The median", "The mean", "The range", "The total", "The median (10) ignores the extreme value; the mean is pulled up to 14."],
          ["H", "The mean mark of 10 students is 56. When the teacher's mark is added the mean becomes 58. What is the teacher's mark?", "78", "58", "60", "76", "Total of 10 = 560; total of 11 = 638; 638 − 560 = 78."],
          ["H", "Which set of numbers has mean 6, median 5 and mode 4?", "4, 4, 5, 8, 9", "4, 5, 6, 7, 8", "4, 4, 6, 7, 7", "3, 4, 5, 6, 12", "4, 4, 5, 8, 9: sum 30 ÷ 5 = 6, middle value 5, most common 4."],
          ["E", "Which average is best for finding the most popular colour of uniform?", "Mode", "Mean", "Median", "Range", "Colours are not numbers, so only the mode can be used."],
        ],
      },
      {
        week: 6,
        title: "Ratio and proportion",
        subtopics: ["Meaning and simplest form of a ratio", "Sharing in a given ratio", "Direct proportion", "Rates such as speed and price per item"],
        objectives: ["Write ratios in their simplest form", "Share a quantity in a given ratio", "Solve direct proportion problems using the unitary method", "Calculate simple rates"],
        lesson: {
          title: "Ratio, Proportion and Rate",
          summary: "Compare quantities with ratios, share amounts fairly and solve proportion problems.",
          minutes: 40,
          notes: `## Ratio
A **ratio** compares two or more quantities of the **same kind** in the **same unit**. The ratio of 20 boys to 15 girls is 20 : 15, which simplifies (÷ 5) to **4 : 3**. Convert units first: 50 cm : 2 m = 50 : 200 = 1 : 4.

## Sharing in a ratio
To share ₦1,200 in the ratio 2 : 3:
1. Add the parts: 2 + 3 = 5.
2. Find one part: 1,200 ÷ 5 = ₦240.
3. Multiply: 2 × 240 = ₦480 and 3 × 240 = ₦720.

## Direct proportion (the unitary method)
If 5 pens cost ₦750, then **1** pen costs 750 ÷ 5 = ₦150, and 8 pens cost 8 × 150 = ₦1,200. When one quantity doubles, the other doubles.

## Rates
A **rate** compares quantities of **different** kinds:
- speed = distance ÷ time (km/h)
- price per item, litres per hour, words per minute.`,
          examples: `**Example 1.** Simplify 45 : 60. *Answer:* 3 : 4 (÷ 15).

**Example 2.** Share 36 sweets between Amina and Joy in the ratio 5 : 4. *Solution:* one part = 36 ÷ 9 = 4; Amina gets 20, Joy gets 16.

**Example 3.** A car travels 180 km in 3 hours. Find its average speed. *Answer:* 180 ÷ 3 = 60 km/h.`,
        },
        questions: [
          ["E", "Simplify the ratio 12 : 18.", "2 : 3", "3 : 2", "6 : 9", "4 : 6", "Divide both parts by 6."],
          ["E", "If 1 exercise book costs ₦150, how much do 6 books cost?", "₦900", "₦156", "₦750", "₦25", "6 × 150 = ₦900."],
          ["E", "A car travels 120 km in 2 hours. What is its average speed?", "60 km/h", "240 km/h", "122 km/h", "118 km/h", "Speed = 120 ÷ 2 = 60 km/h."],
          ["M", "Share ₦1,200 between two people in the ratio 2 : 3. What is the larger share?", "₦720", "₦480", "₦600", "₦800", "One part = 1,200 ÷ 5 = 240; the larger share is 3 × 240 = ₦720."],
          ["M", "Express 50 cm : 2 m as a ratio in its simplest form.", "1 : 4", "25 : 1", "50 : 2", "1 : 40", "2 m = 200 cm, so 50 : 200 = 1 : 4."],
          ["M", "5 pens cost ₦750. How much do 8 pens cost?", "₦1,200", "₦1,000", "₦1,500", "₦6,000", "1 pen = ₦150, so 8 pens cost ₦1,200."],
          ["M", "The ratio of boys to girls in a class is 4 : 5. There are 20 boys. How many girls are there?", "25", "16", "36", "45", "One part = 20 ÷ 4 = 5 pupils; girls = 5 × 5 = 25."],
          ["H", "36 sweets are shared among three children in the ratio 2 : 3 : 4. How many does the child with the smallest share get?", "8", "12", "16", "4", "Total parts = 9; one part = 4; the smallest share is 2 × 4 = 8."],
          ["H", "A tap fills a 60-litre tank in 12 minutes. How long does it take to fill a 45-litre tank at the same rate?", "9 minutes", "15 minutes", "8 minutes", "10 minutes", "Rate = 5 litres per minute; 45 ÷ 5 = 9 minutes."],
          ["H", "The ratio of Musa's age to his father's is 1 : 4. Their ages add up to 45. How old is the father?", "36", "9", "40", "32", "Five parts = 45, so one part = 9; father = 4 × 9 = 36."],
        ],
      },
      {
        week: 7,
        title: "Everyday arithmetic: profit and loss",
        subtopics: ["Cost price and selling price", "Profit and loss", "Percentage profit and percentage loss", "Simple discount"],
        objectives: ["Distinguish between cost price and selling price", "Calculate profit and loss", "Express profit or loss as a percentage of the cost price", "Calculate a discount and the sale price"],
        lesson: {
          title: "Buying and Selling",
          summary: "Work out profit, loss and discounts in everyday buying and selling.",
          minutes: 40,
          notes: `## Key terms
- **Cost price (C.P.)**: the price at which a trader buys an item.
- **Selling price (S.P.)**: the price at which the item is sold.
- **Profit** = S.P. − C.P. (when S.P. is greater than C.P.)
- **Loss** = C.P. − S.P. (when S.P. is less than C.P.)

## Percentage profit or loss
Always compare with the **cost price**:
$\\text{Profit \\%} = \\frac{\\text{profit}}{\\text{C.P.}}\\times 100\\%$ and $\\text{Loss \\%} = \\frac{\\text{loss}}{\\text{C.P.}}\\times 100\\%$

## Finding the selling price
To sell at a profit of $p\\%$: $\\text{S.P.} = \\text{C.P.}\\times\\frac{100 + p}{100}$
To sell at a loss of $p\\%$: $\\text{S.P.} = \\text{C.P.}\\times\\frac{100 - p}{100}$

## Discount
A **discount** is an amount taken off the marked price. A 10% discount on ₦5,000 is ₦500, so the customer pays ₦4,500.`,
          examples: `**Example 1.** A trader buys a bag for ₦4,000 and sells it for ₦5,000. Find the profit percentage.
*Solution:* profit = ₦1,000; $\\frac{1000}{4000}\\times 100\\% = 25\\%$.

**Example 2.** A radio bought for ₦12,000 is sold at a loss of 15%. Find the selling price.
*Solution:* S.P. = $12{,}000\\times\\frac{85}{100} = ₦10{,}200$.

**Example 3.** A shirt marked ₦6,000 is sold at a 20% discount. How much does the buyer pay? *Answer:* ₦6,000 − ₦1,200 = **₦4,800**.`,
        },
        questions: [
          ["E", "A trader buys a bag for ₦4,000 and sells it for ₦5,000. What is the profit?", "₦1,000", "₦9,000", "₦5,000", "₦4,000", "Profit = S.P. − C.P. = 5,000 − 4,000 = ₦1,000."],
          ["E", "A phone bought for ₦30,000 is sold for ₦26,000. What is the loss?", "₦4,000", "₦56,000", "₦26,000", "₦6,000", "Loss = C.P. − S.P. = 30,000 − 26,000 = ₦4,000."],
          ["E", "The price at which a trader buys goods is called the", "cost price", "selling price", "discount", "profit", "The buying price is the cost price."],
          ["M", "A bag bought for ₦4,000 is sold for ₦5,000. What is the percentage profit?", "25%", "20%", "10%", "1%", "Profit % = 1,000 ÷ 4,000 × 100% = 25%."],
          ["M", "A radio bought for ₦12,000 is sold at a loss of 15%. What is the selling price?", "₦10,200", "₦13,800", "₦1,800", "₦10,800", "S.P. = 12,000 × 85/100 = ₦10,200."],
          ["M", "A shirt marked ₦6,000 is sold at a discount of 20%. What does the customer pay?", "₦4,800", "₦1,200", "₦5,800", "₦7,200", "Discount = ₦1,200, so the customer pays ₦4,800."],
          ["M", "A book bought for ₦800 is sold for ₦680. What is the percentage loss?", "15%", "12%", "18%", "120%", "Loss = ₦120; 120 ÷ 800 × 100% = 15%."],
          ["H", "A trader wants a profit of 30% on goods costing ₦2,500. At what price should she sell them?", "₦3,250", "₦2,530", "₦750", "₦3,000", "S.P. = 2,500 × 130/100 = ₦3,250."],
          ["H", "By selling a chair for ₦9,000 a carpenter makes a profit of 20%. What did the chair cost him?", "₦7,500", "₦7,200", "₦10,800", "₦8,800", "S.P. = 120% of C.P., so C.P. = 9,000 × 100/120 = ₦7,500."],
          ["H", "Oranges are bought at 5 for ₦100 and sold at 4 for ₦100. What is the percentage profit?", "25%", "20%", "5%", "1%", "C.P. of one = ₦20 and S.P. of one = ₦25; profit = 5/20 × 100% = 25%."],
        ],
      },
      {
        week: 8,
        title: "Simple interest",
        subtopics: ["Principal, rate and time", "The simple interest formula", "Finding the amount", "Finding the principal, rate or time"],
        objectives: ["Explain the terms principal, rate, time, interest and amount", "Calculate simple interest using I = PRT/100", "Calculate the total amount after a given time", "Find the principal, rate or time when the others are known"],
        lesson: {
          title: "Simple Interest",
          summary: "Calculate the interest earned on savings or charged on loans, and rearrange the formula.",
          minutes: 40,
          notes: `## Key terms
- **Principal (P):** the money saved or borrowed.
- **Rate (R):** the percentage charged or paid **per year** (per annum).
- **Time (T):** the number of **years**.
- **Interest (I):** the money earned or charged.
- **Amount (A):** principal + interest.

## Formula
$I = \\frac{P\\times R\\times T}{100}$ and $A = P + I$

## Time not in years
Convert months to years: 6 months = $\\frac{6}{12} = \\frac{1}{2}$ year; 9 months = $\\frac{3}{4}$ year.

## Rearranging
$P = \\frac{100I}{RT}$, $R = \\frac{100I}{PT}$, $T = \\frac{100I}{PR}$

## Where it is used
Bank savings, school fee loans, cooperative societies and hire purchase. (Most banks actually pay *compound* interest, which you will study later.)`,
          examples: `**Example 1.** Find the simple interest on ₦20,000 for 3 years at 5% per annum.
*Solution:* $I = \\frac{20{,}000\\times 5\\times 3}{100} = ₦3{,}000$; amount = ₦23,000.

**Example 2.** Find the interest on ₦8,000 for 9 months at 10% per annum.
*Solution:* $T = \\frac{3}{4}$; $I = \\frac{8{,}000\\times 10\\times 3}{100\\times 4} = ₦600$.

**Example 3.** At what rate will ₦5,000 earn ₦1,200 in 4 years?
*Solution:* $R = \\frac{100\\times 1{,}200}{5{,}000\\times 4} = 6\\%$.`,
        },
        questions: [
          ["E", "In the formula $I = \\frac{PRT}{100}$, what does P stand for?", "Principal", "Profit", "Price", "Percentage", "P is the principal, the money saved or borrowed."],
          ["E", "Find the simple interest on ₦10,000 for 2 years at 5% per annum.", "₦1,000", "₦500", "₦2,000", "₦100", "I = 10,000 × 5 × 2 ÷ 100 = ₦1,000."],
          ["M", "Find the simple interest on ₦20,000 for 3 years at 5% per annum.", "₦3,000", "₦300", "₦6,000", "₦1,000", "I = 20,000 × 5 × 3 ÷ 100 = ₦3,000."],
          ["M", "What is the total amount after ₦20,000 earns simple interest of ₦3,000?", "₦23,000", "₦17,000", "₦3,000", "₦60,000", "Amount = principal + interest."],
          ["M", "Find the simple interest on ₦8,000 for 9 months at 10% per annum.", "₦600", "₦7,200", "₦800", "₦720", "T = 9/12 = 3/4 year; I = 8,000 × 10 × 3/4 ÷ 100 = ₦600."],
          ["M", "At what rate will ₦5,000 earn ₦1,200 simple interest in 4 years?", "6%", "24%", "4%", "8%", "R = 100 × 1,200 ÷ (5,000 × 4) = 6%."],
          ["H", "How long will it take ₦15,000 to earn ₦4,500 at 10% simple interest per annum?", "3 years", "4.5 years", "2 years", "30 years", "T = 100 × 4,500 ÷ (15,000 × 10) = 3 years."],
          ["H", "What principal earns ₦2,400 simple interest in 2 years at 8% per annum?", "₦15,000", "₦19,200", "₦1,500", "₦38,400", "P = 100 × 2,400 ÷ (8 × 2) = ₦15,000."],
          ["H", "A sum of money doubles in 10 years at simple interest. What is the rate per annum?", "10%", "20%", "5%", "2%", "Interest = P in 10 years, so R = 100 × P ÷ (P × 10) = 10%."],
          ["E", "Simple interest rates are usually given", "per annum (per year)", "per day", "per week", "per hour", "The rate R in the formula is a yearly percentage."],
        ],
      },
    ],
  },
];
