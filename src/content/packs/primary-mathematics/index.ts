/**
 * Primary Mathematics, Basic 1–Basic 6. Original material written for Precious PS Academy following
 * the themes of the Nigerian Basic Education (NERDC) Mathematics curriculum: number and
 * numeration, basic operations, algebraic processes, mensuration and geometry, everyday statistics.
 */
import type { Diff, Q, SubjectPack } from "../types";
import { buildPrimaryTerms, level, numQ, wordQ, type Ctx, type Factory } from "../primary/gen";

const fmt = (n: number) => n.toLocaleString("en-US");
const NAMES = ["Ada", "Tunde", "Bola", "Chidi", "Amina", "Emeka", "Kemi", "Musa", "Ngozi", "Sani", "Tolu", "Zainab"];
const THINGS = ["oranges", "pencils", "books", "eggs", "mangoes", "beads", "sweets", "bottles", "balls", "crayons"];
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const TIP = "\n\n## Check your work\n- Read the question again and be sure you answered what was asked.\n- Estimate first, so that a silly answer stands out.\n- Do the opposite operation to check: add to check a subtraction, multiply to check a division.";

/** A number question whose wrong options are the usual slips: one out, ten out, a hundred out. */
function mq(c: Ctx, d: Diff, stem: string, answer: number, why: string): Q | null {
  if (answer < 30) return numQ(c, d, stem, answer, why);
  const slips = c.shuffle([10, -10, 1, -1, 100, -100, 9, 11, -9, 20].map((x) => answer + x).filter((v) => v > 0));
  return wordQ(d, stem, fmt(answer), slips.map(fmt), why);
}
const frac = (n: number, d: number) => `${n}/${d}`;

/* ---------------------------------------------------- number and numeration */

const placeValue: Factory = (c) => {
  const size = [2, 2, 3, 4, 6, 7][c.g - 1];
  const small = c.g === 1;
  return {
    title: small ? "Counting and writing numbers up to 20" : `Place value of numbers up to ${["", "99", "999", "9,999", "999,999", "9,999,999"][c.g - 1]}`,
    subtopics: small ? ["Counting objects", "Numbers before and after", "Tens and units"] : ["The value of each digit", "Reading and writing large numbers", c.g >= 4 ? "Rounding numbers" : "Tens and units"],
    objectives: small ? ["Count objects up to 20", "Say the number that comes before or after a given number", "Split a number into tens and units"] : ["State the place of each digit in a number", "Give the value of a digit from its place", c.g >= 4 ? "Round a number to the nearest ten, hundred or thousand" : "Build a number from its tens and units"],
    summary: small ? "Count carefully, one number for each object. Numbers bigger than nine are made of tens and units." : "The value of a digit depends on its place. Moving one place to the left makes a digit worth ten times as much.",
    notes: small
      ? `## Counting\nWhen we count, we say one number for each object, in order: 1, 2, 3, 4, 5 and so on. The last number we say tells us **how many** there are.\n\n[[diagram: counters 7 || Count the counters: there are 7]]\n\n## Before and after\nOn a number line the numbers get bigger as we move to the right.\n- The number **after** 6 is 7. It is one more.\n- The number **before** 6 is 5. It is one less.\n\n[[diagram: numberline 0 20 step 1 mark 6 || 5 comes before 6 and 7 comes after 6]]\n\n## Tens and units\nNumbers bigger than 9 are written with two digits. The digit on the left counts **tens**. The digit on the right counts **units** (ones).\n\n[[diagram: placevalue 14 || 14 is 1 ten and 4 units]]\n\nSo 14 means one bundle of ten and four more. 20 means two tens and no units.\n\n## Remember\n- Touch each object as you count it, so that you do not count one twice.\n- "One more" means the next number. "One less" means the number before.${TIP}`
      : `## What is place value?\nWe use only ten digits, 0 to 9, to write every number. What a digit is **worth** depends on its **place** in the number.\n\n[[diagram: placevalue ${"3475269".slice(0, size)} || Each column is worth ten times the column on its right]]\n\n| Place | Short form | Worth |\n|---|---|---|\n| Units | U | 1 |\n| Tens | T | 10 |\n| Hundreds | H | 100 |\n| Thousands | Th | 1,000 |\n| Ten thousands | TTh | 10,000 |\n| Hundred thousands | HTh | 100,000 |\n| Millions | M | 1,000,000 |\n\n## Value of a digit\nValue = digit × worth of its place. In 475 the digit 7 is in the tens place, so its value is 7 × 10 = **70**.\n\n## Expanded form\n475 = 400 + 70 + 5. Writing a number this way shows the value of every digit.\n\n## Zero keeps the place\nIn 405 there are no tens. The 0 holds the tens place so that the 4 stays in the hundreds place.\n${c.g >= 4 ? "\n## Rounding\nTo round to the nearest ten, look at the units digit. If it is 5 or more, round **up**; if it is 4 or less, round **down**. For the nearest hundred look at the tens digit, and for the nearest thousand look at the hundreds digit.\n\n[[diagram: numberline 340 350 step 1 mark 347 || 347 is nearer to 350 than to 340]]\n" : ""}\n## Reading large numbers\nGroup the digits in threes from the right and read each group: 3,475,269 is three million, four hundred and seventy-five thousand, two hundred and sixty-nine.${TIP}`,
    examples: small
      ? `**Example 1.** What number comes just after 12?\nOne more than 12 is **13**.\n\n**Example 2.** What number comes just before 10?\nOne less than 10 is **9**.\n\n**Example 3.** What number is 1 ten and 6 units?\nOne ten is 10, and 6 more makes **16**.`
      : `**Example 1.** What is the value of 6 in 264?\nThe 6 is in the tens place: 6 × 10 = **60**.\n\n**Example 2.** Write 3 hundreds, 0 tens and 8 units as a number.\nThe number is **308**.\n\n**Example 3.** Round 347 to the nearest ten.\nThe units digit is 7, which is 5 or more, so round up to **350**.`,
    make: () => {
      if (small) {
        const kind = c.int(0, 2);
        const n = c.int(2, 19);
        if (kind === 0) return numQ(c, "E", `What number comes just after ${n}?`, n + 1, `One more than ${n} is ${n + 1}.`);
        if (kind === 1) return numQ(c, "E", `What number comes just before ${n}?`, n - 1, `One less than ${n} is ${n - 1}.`);
        const u = c.int(0, 9);
        return numQ(c, "E", `What number is 1 ten and ${u} units?`, 10 + u, `One ten is 10, and ${u} more makes ${10 + u}.`);
      }
      const digits = c.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, size);
      const n = Number(digits.join(""));
      if (c.g >= 4 && c.int(0, 2) === 0) {
        const to = c.pick(c.g === 4 ? [10, 100] : [10, 100, 1000]);
        const ans = Math.round(n / to) * to;
        return wordQ(level(c.g), `Round ${fmt(n)} to the nearest ${to === 10 ? "ten" : to === 100 ? "hundred" : "thousand"}.`, fmt(ans), [ans + to, ans - to, Math.floor(n / to) * to === ans ? ans + to * 2 : Math.floor(n / to) * to].map(fmt), `Look at the digit to the right of the rounding place: ${fmt(n)} is nearest to ${fmt(ans)}.`);
      }
      const p = c.int(0, size - 1);
      const d = digits[size - 1 - p];
      const ans = d * 10 ** p;
      return wordQ(level(c.g), `What is the value of the digit ${d} in ${fmt(n)}?`, fmt(ans), [0, 1, 2, 3, 4, 5, 6].filter((x) => x !== p && x <= size + 1).map((x) => fmt(d * 10 ** x)), `The ${d} is in the ${["units", "tens", "hundreds", "thousands", "ten thousands", "hundred thousands", "millions"][p]} place, so its value is ${fmt(ans)}.`);
    },
  };
};

const comparing: Factory = (c) => ({
  title: "Comparing and ordering numbers",
  subtopics: ["More and less", "Greatest and smallest", "Putting numbers in order"],
  objectives: ["Say which of two numbers is more", "Pick the greatest or the smallest number in a group", "Arrange numbers from smallest to greatest"],
  summary: "A number further along the number line is greater. Use this to find the greatest and smallest numbers and to put numbers in order.",
  notes: `## More and less\nWhen we compare two groups, the group with extra objects has **more**. The other group has **less** (or fewer).\n\n[[diagram: counters 8 || Eight counters]]\n\n[[diagram: counters 5 || Five counters: 8 is more than 5]]\n\n## On the number line\nNumbers get bigger as we move to the right. A number on the right is **greater** than a number on its left.\n\n[[diagram: numberline 0 20 step 1 mark 5 8 || 8 is to the right of 5, so 8 is greater]]\n\n## Greatest and smallest\n- The **greatest** number in a group is the one furthest to the right on the number line.\n- The **smallest** number is the one furthest to the left.\n\n## Putting numbers in order\nTo order numbers from smallest to greatest:\n1. Find the smallest and write it first.\n2. Find the next smallest among those left.\n3. Carry on until every number is used.\n\n## Two-digit numbers\nCompare the **tens** first. 14 has 1 ten and 9 has no tens, so 14 is greater than 9. If the tens are the same, compare the units.${TIP}`,
  examples: `**Example 1.** Which is the greatest: 4, 9, 2, 7?\n9 is furthest to the right on the number line, so the answer is **9**.\n\n**Example 2.** Which is the smallest: 12, 8, 15, 10?\n8 has no tens, so it is the smallest: **8**.\n\n**Example 3.** Put 6, 2, 9 in order from smallest to greatest.\n**2, 6, 9**.`,
  make: () => {
    const pool = c.shuffle(Array.from({ length: c.g === 1 ? 20 : 99 }, (_, i) => i + 1)).slice(0, 4);
    const great = c.int(0, 1) === 0;
    const ans = great ? Math.max(...pool) : Math.min(...pool);
    return wordQ("E", `Which is the ${great ? "greatest" : "smallest"} number: ${pool.join(", ")}?`, String(ans), pool.filter((v) => v !== ans).map(String), `${ans} is the ${great ? "greatest" : "smallest"} of the four numbers.`);
  },
});

const skipCount: Factory = (c) => ({
  title: "Counting in twos, fives and tens",
  subtopics: ["Counting in twos", "Counting in fives", "Counting in tens"],
  objectives: ["Count forwards in twos, fives and tens", "Continue a counting pattern", "Find a missing number in a counting pattern"],
  summary: "Skip counting means jumping the same number each time: 2, 4, 6 or 5, 10, 15 or 10, 20, 30.",
  notes: `## Skip counting\nInstead of counting every number, we can **jump** the same amount each time. This is called skip counting, and it is a quick way to count many things.\n\n## Counting in twos\n2, 4, 6, 8, 10, 12 ... We use twos to count pairs, such as shoes or eyes.\n\n[[diagram: numberline 0 20 step 2 jump 0>2 2>4 4>6 6>8 || Jumps of 2]]\n\n## Counting in fives\n5, 10, 15, 20, 25, 30 ... Numbers in this pattern end in 5 or 0. We use fives to count fingers on hands.\n\n[[diagram: sequence 5, 10, 15, 20, 25 || Counting in fives]]\n\n## Counting in tens\n10, 20, 30, 40, 50 ... Numbers in this pattern always end in 0. We use tens to count bundles of ten.\n\n[[diagram: sequence 10, 20, 30, 40, 50 || Counting in tens]]\n\n## Finding a missing number\nLook at two numbers next to each other to find the size of the jump. Then jump from the number before the gap.\n\n## Why it matters\nSkip counting is the beginning of multiplication. Counting 2, 4, 6 is the same as saying one two, two twos, three twos.${TIP}`,
  examples: `**Example 1.** 2, 4, 6, ?\nThe jump is 2. After 6 comes **8**.\n\n**Example 2.** 5, 10, ?, 20\nThe jump is 5. After 10 comes **15**.\n\n**Example 3.** 10, 20, 30, ?\nThe jump is 10. After 30 comes **40**.

**Example 4.** 4, 6, 8, ?
The jump is 2. After 8 comes **10**.`,
  make: () => {
    const step = c.pick([2, 5, 10]);
    const start = step * c.int(1, step === 10 ? 5 : 8);
    const seq = Array.from({ length: 4 }, (_, i) => start + i * step);
    const gap = c.int(1, 3);
    return numQ(c, "E", `Find the missing number.\n[[diagram: sequence ${seq.map((v, i) => (i === gap ? "?" : v)).join(", ")}]]`, seq[gap], `The numbers go up in ${step}s, so the missing number is ${seq[gap]}.`);
  },
});

/* ---------------------------------------------------------- basic operations */

const OPS = [9, 49, 499, 4999, 49999, 499999];
const addition: Factory = (c) => ({
  title: c.g === 1 ? "Addition of numbers up to 18" : c.g <= 3 ? "Addition with carrying" : "Addition of large numbers",
  subtopics: ["The meaning of addition", c.g === 1 ? "Adding by counting on" : "Adding in columns and carrying", "Word problems"],
  objectives: ["Explain addition as putting groups together", c.g === 1 ? "Add two small numbers by counting on" : "Add numbers in columns, carrying where needed", "Solve word problems that need addition"],
  summary: "Addition puts groups together to find the total. Line the digits up in their places, add from the units and carry when a column makes ten or more.",
  notes: `## What is addition?\nAddition means **putting together**. The answer is called the **sum** or **total**. The sign is **+**.\n\n[[diagram: counters 5 + 3 || 5 + 3 = 8]]\n\n## Counting on\nStart from the bigger number and count on the smaller one. For 5 + 3, say "5", then count "6, 7, 8". The answer is 8.\n\n[[diagram: numberline 0 10 step 1 jump 5>6 6>7 7>8 || Start at 5 and jump on 3]]\n\n## Number bonds help\n[[diagram: bond 10 = 6 + 4 || Pairs that make 10 are worth learning by heart]]\n${c.g >= 2 ? "\n## Adding in columns\n1. Write the numbers under each other with units under units, tens under tens.\n2. Add the units first.\n3. If the units make 10 or more, write the units digit and **carry** the ten to the next column.\n4. Add the tens, including the one you carried. Carry on to the left.\n\n| | T | U |\n|---|---|---|\n| | 2 | 7 |\n| + | 1 | 5 |\n| = | 4 | 2 |\n\n7 + 5 = 12: write 2, carry 1. Then 2 + 1 + 1 = 4.\n" : ""}\n## Words that mean add\nAltogether, total, sum, plus, more than, in all, and, increased by.\n\n## Order does not matter\n3 + 5 gives the same answer as 5 + 3. So you may start with the bigger number to make the work easier.${TIP}`,
  examples: `**Example 1.** 6 + 7.\nStart at 7 and count on 6: 8, 9, 10, 11, 12, 13. The answer is **13**.\n\n**Example 2.** 38 + 25.\nUnits: 8 + 5 = 13, write 3 carry 1. Tens: 3 + 2 + 1 = 6. The answer is **63**.\n\n**Example 3.** Ada has 14 oranges and buys 9 more. How many has she now?\n14 + 9 = **23** oranges.`,
  make: () => {
    const hi = OPS[c.g - 1];
    const a = c.int(Math.max(1, Math.floor(hi / 10)), hi);
    const b = c.int(Math.max(1, Math.floor(hi / 10)), hi);
    if (a > 1 && b > 1 && c.int(0, 2) === 0) {
      const [n1, n2] = c.shuffle(NAMES);
      const t = c.pick(THINGS);
      return mq(c, level(c.g), `${n1} has ${fmt(a)} ${t} and ${n2} has ${fmt(b)} ${t}. How many ${t} have they altogether?`, a + b, `Altogether means add: ${fmt(a)} + ${fmt(b)} = ${fmt(a + b)}.`);
    }
    return mq(c, level(c.g), `What is ${fmt(a)} + ${fmt(b)}?`, a + b, `Add the units first and carry where needed: ${fmt(a)} + ${fmt(b)} = ${fmt(a + b)}.`);
  },
});

const subtraction: Factory = (c) => ({
  title: c.g === 1 ? "Subtraction of numbers up to 18" : c.g <= 3 ? "Subtraction with borrowing" : "Subtraction of large numbers",
  subtopics: ["The meaning of subtraction", c.g === 1 ? "Taking away by counting back" : "Subtracting in columns and borrowing", "Word problems"],
  objectives: ["Explain subtraction as taking away or finding the difference", c.g === 1 ? "Subtract small numbers by counting back" : "Subtract in columns, borrowing where needed", "Solve word problems that need subtraction"],
  summary: "Subtraction takes away or finds the difference. Line up the places, subtract from the units, and borrow a ten when the top digit is too small.",
  notes: `## What is subtraction?\nSubtraction means **taking away**, or finding how much **more** one number is than another. The answer is called the **difference**. The sign is **-**.\n\n[[diagram: counters 9 - 4 || 9 - 4 = 5]]\n\n## Counting back\nFor 9 - 4, start at 9 and count back 4: "8, 7, 6, 5". The answer is 5.\n\n[[diagram: numberline 0 10 step 1 jump 9>8 8>7 7>6 6>5 || Start at 9 and jump back 4]]\n${c.g >= 2 ? "\n## Subtracting in columns\n1. Write the bigger number on top, with units under units.\n2. Subtract the units first.\n3. If the top digit is smaller, **borrow** one ten from the next column. That ten becomes ten units.\n4. Then subtract the tens, remembering the ten you gave away.\n\n| | T | U |\n|---|---|---|\n| | 5 | 2 |\n| - | 2 | 7 |\n| = | 2 | 5 |\n\n2 is smaller than 7, so borrow: 12 - 7 = 5. The tens are now 4 - 2 = 2.\n" : ""}\n## Words that mean subtract\nTake away, minus, less, difference, left, remain, fewer, how many more.\n\n## Order matters\n9 - 4 is not the same as 4 - 9. Always take the smaller number from the bigger number.\n\n## Checking\nAdd your answer to the number you took away. You should get the number you started with: 5 + 4 = 9.${TIP}`,
  examples: `**Example 1.** 13 - 5.\nCount back 5 from 13: 12, 11, 10, 9, 8. The answer is **8**.\n\n**Example 2.** 62 - 28.\nUnits: borrow a ten, 12 - 8 = 4. Tens: 5 - 2 = 3. The answer is **34**. Check: 34 + 28 = 62.\n\n**Example 3.** Musa had 40 sweets and gave away 15. How many are left?\n40 - 15 = **25** sweets.`,
  make: () => {
    const hi = OPS[c.g - 1] * 2;
    const a = c.int(Math.max(3, Math.floor(hi / 10)), hi);
    const b = c.int(1, a - 1);
    if (a - b > 1 && b > 1 && c.int(0, 2) === 0) {
      const n1 = c.pick(NAMES);
      const t = c.pick(THINGS);
      return mq(c, level(c.g), `${n1} had ${fmt(a)} ${t} and gave away ${fmt(b)}. How many ${t} are left?`, a - b, `"Left" means subtract: ${fmt(a)} - ${fmt(b)} = ${fmt(a - b)}.`);
    }
    return mq(c, level(c.g), `What is ${fmt(a)} - ${fmt(b)}?`, a - b, `Subtract the units first and borrow where needed: ${fmt(a)} - ${fmt(b)} = ${fmt(a - b)}.`);
  },
});

const multiplication: Factory = (c) => ({
  title: c.g <= 3 ? "Multiplication tables" : "Multiplication of whole numbers",
  subtopics: ["Multiplication as repeated addition", c.g <= 3 ? "Times tables" : "Long multiplication", "Word problems"],
  objectives: ["Explain multiplication as adding equal groups", c.g <= 3 ? "Recall multiplication facts quickly" : "Multiply large numbers by setting the work out in rows", "Solve word problems that need multiplication"],
  summary: "Multiplication is a quick way of adding equal groups. Learn the tables, then use them to multiply bigger numbers one digit at a time.",
  notes: `## What is multiplication?\nMultiplication is **repeated addition** of equal groups. 3 × 4 means 3 groups of 4, which is 4 + 4 + 4 = 12. The answer is called the **product**. The sign is **×**.\n\n[[diagram: array 3 x 4 || 3 rows of 4 make 12]]\n\n## Order does not matter\n3 × 4 = 4 × 3. Turn the array on its side and it has 4 rows of 3: still 12.\n\n## Facts to learn\n- Any number × 1 is the number itself.\n- Any number × 0 is 0.\n- To multiply by 10, write a 0 at the end: 7 × 10 = 70.\n- × 2 is doubling. × 4 is doubling twice.\n\n[[diagram: numberline 0 20 step 5 jump 0>5 5>10 10>15 || 3 × 5 as three jumps of 5]]\n${c.g >= 4 ? "\n## Multiplying a large number\nMultiply each digit of the top number by the bottom number, starting from the units, and carry as in addition.\n\n46 × 3: 6 × 3 = 18, write 8 carry 1. 4 × 3 = 12, plus 1 is 13. Answer 138.\n\n## Multiplying by a two-digit number\nSplit the multiplier into tens and units. 46 × 23 = (46 × 20) + (46 × 3) = 920 + 138 = 1,058. Remember the 0 when you multiply by the tens.\n" : ""}\n## Words that mean multiply\nTimes, product, groups of, lots of, each, twice (× 2).${TIP}`,
  examples: `**Example 1.** 6 × 5.\nSix fives: 5, 10, 15, 20, 25, 30. The answer is **30**.\n\n**Example 2.** 24 × 4.\n4 × 4 = 16, write 6 carry 1. 2 × 4 = 8, plus 1 is 9. The answer is **96**.\n\n**Example 3.** Each box holds 12 eggs. How many eggs are in 5 boxes?\n12 × 5 = **60** eggs.`,
  make: () => {
    const [a, b] = c.g === 2 ? [c.pick([2, 3, 4, 5, 10]), c.int(1, 10)] : c.g === 3 ? [c.int(2, 9), c.int(2, 12)] : c.g === 4 ? [c.int(12, 99), c.int(2, 9)] : c.g === 5 ? [c.int(12, 99), c.int(11, 49)] : [c.int(101, 499), c.int(11, 59)];
    if (c.int(0, 3) === 0) {
      const t = c.pick(THINGS);
      return mq(c, level(c.g), `There are ${fmt(a)} ${t} in one box. How many ${t} are in ${b} boxes?`, a * b, `Multiply: ${fmt(a)} × ${b} = ${fmt(a * b)}.`);
    }
    return mq(c, level(c.g), `What is ${fmt(a)} × ${b}?`, a * b, `${fmt(a)} × ${b} = ${fmt(a * b)}.`);
  },
});

const division: Factory = (c) => ({
  title: c.g <= 3 ? "Division as sharing" : "Division of whole numbers",
  subtopics: ["Sharing equally", "Division and the times tables", c.g >= 5 ? "Remainders" : "Word problems"],
  objectives: ["Explain division as sharing into equal groups", "Use multiplication facts to divide", c.g >= 5 ? "Find the remainder when a number does not divide exactly" : "Solve word problems that need division"],
  summary: "Division shares a number into equal groups. It is the opposite of multiplication, so the times tables give the answers.",
  notes: `## What is division?\nDivision means **sharing equally** or making **equal groups**. 12 ÷ 3 asks: "If 12 is shared among 3, how many does each get?" The answer, 4, is called the **quotient**. The sign is **÷**.\n\n[[diagram: array 3 x 4 || 12 shared into 3 equal rows gives 4 in each row]]\n\n## Division undoes multiplication\nBecause 3 × 4 = 12, we know that 12 ÷ 3 = 4 and 12 ÷ 4 = 3. One multiplication fact gives two division facts.\n\n[[diagram: bond 12 = 6 + 6 || Sharing 12 between 2 gives 6 each]]\n\n## Dividing a bigger number\nWork from the **left**. For 84 ÷ 4: 8 tens ÷ 4 = 2 tens; 4 units ÷ 4 = 1 unit. Answer 21.\n\nIf a digit is too small to divide, carry it to the next digit. For 72 ÷ 3: 7 ÷ 3 = 2 remainder 1; carry the 1 to make 12; 12 ÷ 3 = 4. Answer 24.\n${c.g >= 5 ? "\n## Remainders\nSometimes a number does not share exactly. 17 ÷ 5 = 3 remainder 2, because 3 × 5 = 15 and 2 are left over. The remainder is always smaller than the number you divide by.\n" : ""}\n## Facts to learn\n- Any number ÷ 1 is the number itself.\n- A number ÷ itself is 1.\n- We cannot divide by 0.\n\n## Words that mean divide\nShare, each, per, equal groups, half (÷ 2), quarter (÷ 4).${TIP}`,
  examples: `**Example 1.** 20 ÷ 5.\n5 × 4 = 20, so the answer is **4**.\n\n**Example 2.** 96 ÷ 4.\n9 ÷ 4 = 2 remainder 1; 16 ÷ 4 = 4. The answer is **24**. Check: 24 × 4 = 96.\n\n**Example 3.** 30 mangoes are shared equally among 6 children. How many does each get?\n30 ÷ 6 = **5** mangoes.`,
  make: () => {
    const [d, qn] = c.g === 2 ? [c.pick([2, 5, 10]), c.int(1, 10)] : c.g === 3 ? [c.int(2, 9), c.int(2, 12)] : c.g === 4 ? [c.int(2, 9), c.int(11, 99)] : c.g === 5 ? [c.int(11, 25), c.int(11, 60)] : [c.int(12, 45), c.int(21, 150)];
    if (c.g >= 5 && c.int(0, 3) === 0) {
      const small = c.int(3, 9);
      const r = c.int(1, small - 1);
      const n = small * c.int(5, 40) + r;
      return numQ(c, "H", `What is the remainder when ${fmt(n)} is divided by ${small}?`, r, `${small} goes into ${fmt(n)} exactly ${Math.floor(n / small)} times with ${r} left over.`);
    }
    if (c.int(0, 3) === 0) {
      const t = c.pick(THINGS);
      return mq(c, level(c.g), `${fmt(d * qn)} ${t} are shared equally among ${d} children. How many ${t} does each child get?`, qn, `Share means divide: ${fmt(d * qn)} ÷ ${d} = ${fmt(qn)}.`);
    }
    return mq(c, level(c.g), `What is ${fmt(d * qn)} ÷ ${d}?`, qn, `${d} × ${fmt(qn)} = ${fmt(d * qn)}, so ${fmt(d * qn)} ÷ ${d} = ${fmt(qn)}.`);
  },
});

const lcmHcf: Factory = (c) => ({
  title: "Factors, multiples, LCM and HCF",
  subtopics: ["Factors and multiples", "Lowest common multiple", "Highest common factor"],
  objectives: ["List the factors and the first few multiples of a number", "Find the lowest common multiple of two numbers", "Find the highest common factor of two numbers"],
  summary: "Multiples are the numbers in a times table; factors divide a number exactly. The LCM is the smallest shared multiple and the HCF is the largest shared factor.",
  notes: `## Multiples\nThe **multiples** of a number are its times table. Multiples of 4: 4, 8, 12, 16, 20, 24 ...\n\n[[diagram: numberline 0 24 step 4 jump 0>4 4>8 8>12 12>16 || Multiples of 4 are equal jumps of 4]]\n\n## Factors\nThe **factors** of a number are the numbers that divide it exactly. Factors of 12: 1, 2, 3, 4, 6 and 12. Find them in pairs: 1 × 12, 2 × 6, 3 × 4.\n\n[[diagram: array 3 x 4 || 3 and 4 are factors of 12]]\n\n## Prime numbers\nA **prime** number has exactly two factors, 1 and itself: 2, 3, 5, 7, 11, 13, 17, 19 ...\n\n## Lowest common multiple (LCM)\nThe LCM of two numbers is the **smallest** number that is a multiple of both.\n1. List the multiples of each number.\n2. Find the first number that is in both lists.\n\nMultiples of 4: 4, 8, **12**, 16. Multiples of 6: 6, **12**, 18. The LCM of 4 and 6 is 12.\n\n## Highest common factor (HCF)\nThe HCF of two numbers is the **largest** number that divides both.\n1. List the factors of each number.\n2. Pick the biggest factor that is in both lists.\n\nFactors of 12: 1, 2, 3, 4, **6**, 12. Factors of 18: 1, 2, 3, **6**, 9, 18. The HCF is 6.\n\n## Where they are used\nWe use the LCM to add fractions with different denominators, and the HCF to reduce a fraction to its lowest terms.${TIP}`,
  examples: `**Example 1.** Find the LCM of 3 and 5.\nMultiples of 3: 3, 6, 9, 12, 15. Multiples of 5: 5, 10, 15. The LCM is **15**.\n\n**Example 2.** Find the HCF of 8 and 12.\nFactors of 8: 1, 2, 4, 8. Factors of 12: 1, 2, 3, 4, 6, 12. The HCF is **4**.\n\n**Example 3.** Find the LCM of 6 and 8.\nMultiples of 8: 8, 16, 24. 24 is also a multiple of 6. The LCM is **24**.`,
  make: () => {
    const hi = c.g === 4 ? 12 : c.g === 5 ? 20 : 30;
    const a = c.int(2, hi);
    let b = c.int(2, hi);
    if (b === a) b = a + 1;
    const h = gcd(a, b);
    const l = (a * b) / h;
    if (c.int(0, 1) === 0) return wordQ(level(c.g), `Find the LCM of ${a} and ${b}.`, String(l), [a * b === l ? l * 2 : a * b, l + Math.min(a, b), Math.max(a, b) === l ? l + Math.max(a, b) : Math.max(a, b), l + 1].map(String), `${l} is the smallest number that both ${a} and ${b} divide exactly.`);
    const k = c.int(2, 9);
    const [x, y] = [a * k, b * k];
    const hh = gcd(x, y);
    return wordQ(level(c.g), `Find the HCF of ${x} and ${y}.`, String(hh), [hh * 2, hh + 1, hh + 3, hh === 1 ? 5 : 1].map(String), `${hh} is the largest number that divides both ${x} and ${y} exactly.`);
  },
});

/* ----------------------------------------------------------------- fractions */

const DEC: [number, number, string, number][] = [[1, 2, "0.5", 50], [1, 4, "0.25", 25], [3, 4, "0.75", 75], [1, 5, "0.2", 20], [2, 5, "0.4", 40], [3, 5, "0.6", 60], [4, 5, "0.8", 80], [1, 10, "0.1", 10], [3, 10, "0.3", 30], [7, 10, "0.7", 70], [9, 10, "0.9", 90], [1, 20, "0.05", 5]];
const fractions: Factory = (c) => ({
  title: ["Halves and quarters", "Fractions of shapes and groups", "Fractions of quantities and equal fractions", "Adding and subtracting fractions", "Fractions with different denominators", "Multiplying fractions and fractions of amounts"][c.g - 1],
  subtopics: ["Numerator and denominator", c.g <= 3 ? "Fractions of shapes and groups" : "Operations with fractions", c.g <= 2 ? "Half and quarter of a number" : c.g === 3 ? "Equivalent fractions" : "Lowest terms"],
  objectives: ["Explain what the top and bottom numbers of a fraction mean", c.g <= 3 ? "Name the fraction shown by a shaded shape" : "Add, subtract or multiply fractions correctly", c.g <= 3 ? "Find a fraction of a number of objects" : "Give answers in their lowest terms"],
  summary: "A fraction is a part of a whole. The bottom number tells how many equal parts the whole is cut into, and the top number tells how many parts are taken.",
  notes: `## What is a fraction?\nA fraction is a **part of a whole**. The whole must be cut into **equal** parts.\n\n[[diagram: fraction 1/2 1/4 3/4 || One half, one quarter and three quarters]]\n\n## Top and bottom\nIn the fraction 3/4:\n- The bottom number, 4, is the **denominator**. It tells how many equal parts the whole has.\n- The top number, 3, is the **numerator**. It tells how many parts are taken or shaded.\n\n[[diagram: fraction 3/8 bar || 3 parts out of 8 equal parts are shaded: 3/8]]\n\n## Fraction of a number\nTo find 1/4 of 20, share 20 into 4 equal groups: 20 ÷ 4 = 5. To find 3/4 of 20, take three of those groups: 3 × 5 = 15.\n\n**Rule:** divide by the bottom, multiply by the top.\n${c.g >= 3 ? "\n## Equivalent fractions\nFractions that look different but are worth the same are **equivalent**. Multiply (or divide) the top and bottom by the same number: 1/2 = 2/4 = 4/8.\n\n[[diagram: fraction 1/2 2/4 4/8 bar || The same amount is shaded each time]]\n" : ""}${c.g >= 4 ? "\n## Adding and subtracting\nWhen the denominators are the **same**, add or subtract the numerators and keep the denominator: 3/8 + 2/8 = 5/8.\n\nWhen the denominators are **different**, first change the fractions to equivalent fractions with the same denominator (use the LCM): 1/2 + 1/4 = 2/4 + 1/4 = 3/4.\n" : ""}${c.g >= 5 ? "\n## Fractions, decimals and percentages\n1/2 = 0.5 = 50%. 1/4 = 0.25 = 25%. 3/4 = 0.75 = 75%. 1/10 = 0.1 = 10%. To change a fraction to a percentage, multiply by 100.\n" : ""}${c.g >= 6 ? "\n## Multiplying fractions\nMultiply the tops, multiply the bottoms, then reduce: 2/3 × 3/5 = 6/15 = 2/5.\n" : ""}\n## Lowest terms\nDivide the top and bottom by their HCF until no number divides both: 6/8 = 3/4.${TIP}`,
  examples: `**Example 1.** What is half of 14?\n14 ÷ 2 = **7**.\n\n**Example 2.** What is 3/4 of 20?\n20 ÷ 4 = 5, and 3 × 5 = **15**.\n\n**Example 3.** 3/8 + 2/8.\nThe denominators are the same, so add the tops: **5/8**.\n\n**Example 4.** Which fraction is equal to 1/2: 2/4, 2/3, 1/4 or 3/4?\n1/2 = **2/4**, because top and bottom are both multiplied by 2.`,
  make: () => {
    const g = c.g;
    const kind = c.int(0, 2);
    if (g <= 2) {
      if (kind === 0) {
        const d = c.pick(g === 1 ? [2, 4] : [2, 3, 4, 5, 6, 8]);
        const n = c.int(1, d - 1);
        const bar = g === 2 && c.int(0, 1) === 0 ? " bar" : "";
        return wordQ("E", `What fraction of the shape is shaded?\n[[diagram: fraction ${n}/${d}${bar}]]`, frac(n, d), [frac(d - n === n ? n + 1 : d - n, d), frac(n, d + 1), frac(n + 1, d + 2), frac(d, n)], `${n} of the ${d} equal parts are shaded, so the fraction is ${n}/${d}.`);
      }
      const d = kind === 1 ? 2 : c.pick(g === 1 ? [4] : [3, 4]);
      const each = c.int(1, g === 1 ? (d === 2 ? 10 : 5) : 12);
      return numQ(c, "E", `What is ${d === 2 ? "half" : d === 4 ? "a quarter" : "one third"} of ${each * d}?`, each, `Share ${each * d} into ${d} equal groups: ${each * d} ÷ ${d} = ${each}.`);
    }
    if (g === 3 || (g === 6 && kind === 0)) {
      if (kind === 2 && g === 3) {
        const [n, d] = c.pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5]] as [number, number][]);
        const k = c.int(2, 5);
        return wordQ("M", `Which fraction is equal to ${n}/${d}?`, frac(n * k, d * k), [frac(n * k + 1, d * k), frac(n * k, d * k + 1), frac(n + k, d + k)], `Multiply the top and bottom by ${k}: ${n}/${d} = ${n * k}/${d * k}.`);
      }
      const d = c.int(2, g === 3 ? 6 : 12);
      const n = c.int(1, d - 1);
      const each = c.int(2, g === 3 ? 10 : 60);
      return mq(c, level(g), `What is ${n}/${d} of ${fmt(each * d)}?`, n * each, `${fmt(each * d)} ÷ ${d} = ${each}, and ${n} × ${each} = ${fmt(n * each)}.`);
    }
    if (g === 4) {
      const d = c.pick([5, 7, 8, 9, 10, 11, 12]);
      const a = c.int(1, d - 2);
      const b = c.int(1, d - 1 - a);
      if (kind === 0 && a > b) return gcd(a - b, d) === 1 ? wordQ("M", `What is ${a}/${d} - ${b}/${d}?`, frac(a - b, d), [frac(a + b, d), frac(a - b, 2 * d), frac(a - b + 1, d)], `The denominators are the same, so subtract the numerators: ${a} - ${b} = ${a - b}, giving ${a - b}/${d}.`) : null;
      return gcd(a + b, d) === 1 ? wordQ("M", `What is ${a}/${d} + ${b}/${d}?`, frac(a + b, d), [frac(a + b, 2 * d), frac(a + b + 1, d), frac(a + b - 1 || d + 1, d)], `The denominators are the same, so add the numerators: ${a} + ${b} = ${a + b}, giving ${a + b}/${d}.`) : null;
    }
    if (g === 5) {
      if (kind === 0) {
        const [n, d, dec] = c.pick(DEC);
        return wordQ("H", `Write ${n}/${d} as a decimal.`, dec, DEC.filter((x) => x[2] !== dec).map((x) => x[2]).slice(c.int(0, 6)), `Divide ${n} by ${d}: ${n}/${d} = ${dec}.`);
      }
      const d = c.pick([2, 3, 4, 5, 6]);
      const a = c.int(1, d - 1);
      const b = c.int(1, 2 * d - 2 * a - 1);
      const top = 2 * a + b;
      return gcd(top, 2 * d) === 1 && top < 2 * d ? wordQ("H", `What is ${a}/${d} + ${b}/${2 * d}?`, frac(top, 2 * d), [frac(a + b, 3 * d), frac(a + b, 2 * d), frac(top + 1, 2 * d)], `Change ${a}/${d} to ${2 * a}/${2 * d}, then add: ${2 * a}/${2 * d} + ${b}/${2 * d} = ${top}/${2 * d}.`) : null;
    }
    if (kind === 1) {
      const [n, d, , pct] = c.pick(DEC);
      return wordQ("H", `Write ${n}/${d} as a percentage.`, `${pct}%`, DEC.filter((x) => x[3] !== pct).map((x) => `${x[3]}%`).slice(c.int(0, 6)), `Multiply by 100: ${n}/${d} × 100 = ${pct}%.`);
    }
    const [a, b, x, y] = [c.int(1, 5), c.int(2, 7), c.int(1, 5), c.int(2, 7)];
    if (a >= b || x >= y) return null;
    const h = gcd(a * x, b * y);
    const ans = frac((a * x) / h, (b * y) / h);
    return wordQ("H", `What is ${a}/${b} × ${x}/${y}? Give your answer in its lowest terms.`, ans, [frac(a + x, b + y), frac(a * y, b * x), frac((a * x) / h + 1, (b * y) / h), frac((a * x) / h, (b * y) / h + 1)].filter((o) => o !== ans), `Multiply the tops and the bottoms: ${a * x}/${b * y}${h > 1 ? `, which reduces to ${ans}` : ""}.`);
  },
});

const decimalsPercent: Factory = (c) => ({
  title: "Decimals and percentages",
  subtopics: ["Tenths and hundredths", "Adding and subtracting decimals", "Percentage of a quantity"],
  objectives: ["Read the place value of the digits after a decimal point", "Add and subtract decimals by lining up the decimal points", "Find a percentage of a quantity"],
  summary: "A decimal point separates whole numbers from parts. Per cent means out of 100, so a percentage is a fraction with denominator 100.",
  notes: `## Decimals\nThe **decimal point** separates the whole part from the fraction part. The first place after the point is **tenths**, the second is **hundredths**.\n\n| Units | . | Tenths | Hundredths |\n|---|---|---|---|\n| 3 | . | 4 | 7 |\n\n3.47 means 3 units, 4 tenths and 7 hundredths.\n\n[[diagram: numberline 0 1 step 0.1 mark 0.4 || 0.4 is four tenths of the way from 0 to 1]]\n\n## Adding and subtracting decimals\n1. Write the numbers under each other with the **decimal points in a line**.\n2. Fill empty places with 0, so 2.5 becomes 2.50.\n3. Add or subtract as with whole numbers.\n4. Put the decimal point in the answer directly under the others.\n\n## Percentages\n**Per cent** means "out of 100". The sign is **%**. So 25% means 25/100, which is 1/4.\n\n[[diagram: fraction 1/4 || 25% is one quarter]]\n\n| Percentage | Fraction | Decimal |\n|---|---|---|\n| 10% | 1/10 | 0.1 |\n| 25% | 1/4 | 0.25 |\n| 50% | 1/2 | 0.5 |\n| 75% | 3/4 | 0.75 |\n\n## Percentage of a quantity\nTo find 20% of 150: (20 ÷ 100) × 150 = 30. A quick way: find 10% by dividing by 10, then build up. 10% of 150 is 15, so 20% is 30.\n\n## Where we use them\nMoney, measurements, marks in tests, discounts in shops and interest in banks all use decimals and percentages.${TIP}`,
  examples: `**Example 1.** 2.5 + 1.75.\nWrite 2.50 + 1.75 with the points in line. The answer is **4.25**.\n\n**Example 2.** Find 25% of 80.\n25% is one quarter, and 80 ÷ 4 = **20**.\n\n**Example 3.** Find 10% of 350.\nDivide by 10: **35**.`,
  make: () => {
    if (c.int(0, 1) === 0) {
      const p = c.pick([5, 10, 20, 25, 50, 75, c.g === 6 ? 15 : 10, c.g === 6 ? 40 : 50]);
      const n = 20 * c.int(1, c.g === 6 ? 60 : 25);
      return mq(c, "H", `Find ${p}% of ${fmt(n)}.`, (p * n) / 100, `${p}/100 × ${fmt(n)} = ${fmt((p * n) / 100)}.`);
    }
    const a = c.int(105, 995);
    const b = c.int(105, 995);
    const add = c.int(0, 1) === 0 || b > a;
    const r = add ? a + b : a - b;
    const s = (v: number) => (v / 100).toFixed(2);
    return wordQ("H", `What is ${s(a)} ${add ? "+" : "-"} ${s(b)}?`, s(r), [s(r + 10), s(r + 100), s(Math.abs(r - 10)), s(r + 1)], `Line up the decimal points: ${s(a)} ${add ? "+" : "-"} ${s(b)} = ${s(r)}.`);
  },
});

const ratio: Factory = (c) => ({
  title: "Ratio and proportion",
  subtopics: ["Comparing quantities by ratio", "Simplifying a ratio", "Sharing in a given ratio"],
  objectives: ["Write a comparison of two quantities as a ratio", "Reduce a ratio to its simplest form", "Share a quantity in a given ratio"],
  summary: "A ratio compares quantities of the same kind. Simplify it like a fraction; to share in a ratio, find the value of one part first.",
  notes: `## What is a ratio?\nA **ratio** compares two quantities of the same kind. If a class has 12 boys and 18 girls, the ratio of boys to girls is 12 : 18. We read the sign **:** as "to".\n\n[[diagram: counters 2 + 3 || 2 blue counters to 3 gold counters is the ratio 2 : 3]]\n\n## Order matters\nBoys to girls is 12 : 18, but girls to boys is 18 : 12. Always write the numbers in the order the question gives.\n\n## Simplifying a ratio\nDivide both numbers by their HCF, just as you reduce a fraction.\n12 : 18 → divide both by 6 → **2 : 3**.\n\n## Same units\nBoth quantities must be in the same unit before you write the ratio. For 50 cm to 2 m, change 2 m to 200 cm: 50 : 200 = 1 : 4.\n\n## Sharing in a ratio\nTo share 40 in the ratio 3 : 5:\n1. Add the parts: 3 + 5 = 8 parts.\n2. Find one part: 40 ÷ 8 = 5.\n3. Multiply: 3 × 5 = 15 and 5 × 5 = 25.\n4. Check: 15 + 25 = 40.\n\n[[diagram: fraction 3/8 bar || 3 parts out of 8 go to the first share]]\n\n## Proportion\nIf 3 pens cost ₦150, then 1 pen costs ₦50 and 7 pens cost ₦350. Finding the value of **one** first is called the unitary method.\n\n## Where ratios are used\nMixing paint or concrete, reading map scales, sharing profit and following recipes.${TIP}`,
  examples: `**Example 1.** Simplify 8 : 12.\nThe HCF is 4. 8 ÷ 4 = 2 and 12 ÷ 4 = 3, so the ratio is **2 : 3**.\n\n**Example 2.** Share 30 in the ratio 2 : 3. What is the larger share?\nParts = 5. One part = 6. Larger share = 3 × 6 = **18**.\n\n**Example 3.** 4 books cost ₦800. Find the cost of 7 books.\nOne book costs ₦200, so 7 cost **₦1,400**.`,
  make: () => {
    const kind = c.int(0, 2);
    const a = c.int(1, 7);
    let b = c.int(2, 9);
    if (gcd(a, b) !== 1 || a === b) b = a + 1;
    if (kind === 0) {
      const k = c.int(2, 9);
      return wordQ("H", `Simplify the ratio ${a * k} : ${b * k}.`, `${a} : ${b}`, [`${b} : ${a}`, `${a * k} : ${b}`, `${a + 1} : ${b}`, `${a} : ${b + 1}`], `Divide both numbers by ${k}: ${a} : ${b}.`);
    }
    if (kind === 1 || c.g === 5) {
      const one = c.int(2, c.g === 6 ? 40 : 12);
      const big = Math.max(a, b);
      return mq(c, "H", `Share ${fmt((a + b) * one)} in the ratio ${a} : ${b}. What is the larger share?`, big * one, `There are ${a + b} parts, each worth ${one}. The larger share is ${big} × ${one} = ${fmt(big * one)}.`);
    }
    const unit = 10 * c.int(2, 30);
    const n = c.int(2, 6);
    const m = c.int(7, 12);
    return mq(c, "H", `${n} pens cost ₦${fmt(unit * n)}. What is the cost of ${m} pens, in naira?`, unit * m, `One pen costs ₦${unit}, so ${m} pens cost ₦${fmt(unit * m)}.`);
  },
});

/* ------------------------------------------------------- money, time, measure */

const money: Factory = (c) => ({
  title: ["Nigerian money: coins and notes", "Shopping and change", "Shopping with naira and kobo", "Cost of several items", "Profit and loss", "Simple interest and discount"][c.g - 1],
  subtopics: ["The naira and the kobo", c.g <= 4 ? "Buying and getting change" : "Cost price and selling price", c.g === 6 ? "Simple interest" : "Word problems with money"],
  objectives: ["Name the units of Nigerian money", c.g <= 4 ? "Work out the total cost and the change" : "Calculate profit or loss from cost and selling prices", c.g === 6 ? "Calculate simple interest and discount" : "Solve everyday money problems"],
  summary: "Nigerian money is counted in naira (₦) and kobo: 100 kobo make ₦1. Add to find a total cost, subtract to find change, profit or loss.",
  notes: `## Nigerian money\nThe money of Nigeria is the **naira**, written **₦**. A smaller unit is the **kobo**: 100 kobo = ₦1. Our notes include ₦5, ₦10, ₦20, ₦50, ₦100, ₦200, ₦500 and ₦1,000.\n\n[[diagram: sequence ₦50, ₦100, ₦200, ₦500, ₦1000 || Some naira notes]]\n\n## Total cost\nTo find the cost of several things, **add** their prices. To find the cost of several of the same thing, **multiply** the price by how many.\n\n## Change\nChange is the money given back when you pay with more than the cost.\n\n**Change = money given - cost.**\n\n[[diagram: flow Money given -> minus cost -> Change || How to find change]]\n${c.g >= 5 ? "\n## Profit and loss\n- **Cost price (CP)** is what the trader paid.\n- **Selling price (SP)** is what the trader sold it for.\n- If SP is more than CP there is a **profit**: Profit = SP - CP.\n- If SP is less than CP there is a **loss**: Loss = CP - SP.\n" : ""}${c.g === 6 ? "\n## Simple interest\nInterest is extra money paid for saving or borrowing.\n\n**Interest = (Principal × Rate × Time) ÷ 100**\n\nThe principal is the money saved or borrowed, the rate is the percentage each year and the time is in years.\n\n## Discount\nA discount is money taken off a price. A 10% discount on ₦2,000 is ₦200, so you pay ₦1,800.\n" : ""}\n## Good habits with money\n- Count your change before you leave the shop.\n- Keep money in a safe place.\n- Save a part of what you receive.\n- Spend on needs before wants.${TIP}`,
  examples: `**Example 1.** A pencil costs ₦30 and a ruler costs ₦50. What is the total cost?\n₦30 + ₦50 = **₦80**.\n\n**Example 2.** Kemi buys bread for ₦350 and pays with ₦500. What is her change?\n₦500 - ₦350 = **₦150**.\n\n**Example 3.** A trader buys a bag for ₦1,200 and sells it for ₦1,500. What is the profit?\n₦1,500 - ₦1,200 = **₦300**.`,
  make: () => {
    const n1 = c.pick(NAMES);
    const g = c.g;
    if (g === 1) {
      const a = c.int(1, 9);
      const b = c.int(1, 9);
      return numQ(c, "E", `${n1} has ₦${a} and is given ₦${b} more. How many naira has ${n1} now?`, a + b, `₦${a} + ₦${b} = ₦${a + b}.`);
    }
    if (g <= 3) {
      const paid = c.pick(g === 2 ? [50, 100] : [200, 500, 1000]);
      const cost = 5 * c.int(2, paid / 5 - 1);
      return mq(c, level(g), `${n1} buys an item for ₦${cost} and pays with ₦${fmt(paid)}. How much change does ${n1} get, in naira?`, paid - cost, `Change = ₦${fmt(paid)} - ₦${cost} = ₦${paid - cost}.`);
    }
    if (g === 4) {
      const price = 10 * c.int(3, 45);
      const n = c.int(3, 12);
      return mq(c, "M", `One exercise book costs ₦${price}. What is the cost of ${n} exercise books, in naira?`, price * n, `₦${price} × ${n} = ₦${fmt(price * n)}.`);
    }
    if (g === 5 || c.int(0, 2) === 0) {
      const cp = 50 * c.int(4, 80);
      const diff = 50 * c.int(1, 12);
      const profit = c.int(0, 1) === 0 || diff >= cp;
      return mq(c, "H", `A trader buys an article for ₦${fmt(cp)} and sells it for ₦${fmt(profit ? cp + diff : cp - diff)}. What is the ${profit ? "profit" : "loss"}, in naira?`, diff, `${profit ? "Profit = selling price - cost price" : "Loss = cost price - selling price"} = ₦${fmt(diff)}.`);
    }
    const p = 1000 * c.int(1, 20);
    const r = c.pick([2, 4, 5, 8, 10]);
    const t = c.int(1, 5);
    return mq(c, "H", `Find the simple interest on ₦${fmt(p)} for ${t} year${t > 1 ? "s" : ""} at ${r}% per year, in naira.`, (p * r * t) / 100, `Interest = (${fmt(p)} × ${r} × ${t}) ÷ 100 = ₦${fmt((p * r * t) / 100)}.`);
  },
});

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const time: Factory = (c) => ({
  title: ["Days of the week and o'clock", "Telling the time: half past and quarter past", "Hours, minutes and the calendar", "Time intervals", "The 24-hour clock", "Speed, distance and time"][c.g - 1],
  subtopics: ["Units of time", c.g <= 3 ? "Reading a clock face" : "Working out how long something takes", c.g === 6 ? "Average speed" : "Days, weeks and months"],
  objectives: ["State the units of time and how they are related", c.g <= 3 ? "Read the time shown on a clock face" : "Calculate the time between a start and a finish", c.g === 6 ? "Use speed = distance ÷ time" : "Use the days of the week and months of the year in order"],
  summary: "We measure time in seconds, minutes, hours, days, weeks, months and years. The short hand of a clock shows the hour and the long hand shows the minutes.",
  notes: `## Units of time\n| Unit | Equal to |\n|---|---|\n| 1 minute | 60 seconds |\n| 1 hour | 60 minutes |\n| 1 day | 24 hours |\n| 1 week | 7 days |\n| 1 year | 12 months, 52 weeks, 365 days |\n\nA leap year has 366 days.\n\n## Days and months\nThe days of the week are Sunday, Monday, Tuesday, Wednesday, Thursday, Friday and Saturday. There are 12 months, from January to December.\n\n## Reading a clock\nA clock face has two hands.\n- The **short hand** is the hour hand.\n- The **long hand** is the minute hand.\n\n[[diagram: clock 3:00 || The long hand is on 12 and the short hand on 3: it is 3 o'clock]]\n\nWhen the long hand points to 12, it is **o'clock**. When it points to 6, it is **half past**. When it points to 3, it is **quarter past**. When it points to 9, it is **quarter to** the next hour.\n\n[[diagram: clock 7:30 || Half past 7]]\n\nEach number on the clock is 5 minutes for the long hand: 1 is 5 minutes, 2 is 10 minutes, and so on.\n${c.g >= 4 ? "\n## Time intervals\nTo find how long something lasts, count from the start to the next full hour, then the full hours, then the minutes left. From 9:40 to 11:15 is 20 minutes + 1 hour + 15 minutes = 1 hour 35 minutes.\n" : ""}${c.g >= 5 ? "\n## The 24-hour clock\nThe 24-hour clock counts the hours from 00:00 (midnight) to 23:59. For afternoon and evening times, **add 12** to the hour: 3:00 p.m. is 15:00. To change back, subtract 12: 20:30 is 8:30 p.m.\n" : ""}${c.g === 6 ? "\n## Speed\nSpeed tells how fast something moves.\n\n**Speed = distance ÷ time.** Distance = speed × time. Time = distance ÷ speed.\n\nA car that travels 120 km in 2 hours has a speed of 60 km/h.\n" : ""}\n## a.m. and p.m.\nTimes from midnight to noon are **a.m.** Times from noon to midnight are **p.m.**${TIP}`,
  examples: `**Example 1.** Which day comes after Tuesday?\n**Wednesday**.\n\n**Example 2.** How many minutes are there in 3 hours?\n3 × 60 = **180** minutes.\n\n**Example 3.** A lesson starts at 9:15 and ends at 10:00. How long is it?\nFrom 9:15 to 10:00 is **45 minutes**.`,
  make: () => {
    const g = c.g;
    if (g === 1) {
      if (c.int(0, 1) === 0) {
        const h = c.int(1, 12);
        return wordQ("E", `What time does the clock show?\n[[diagram: clock ${h}:00]]`, `${h} o'clock`, [h + 1, h + 2, h - 1 || 11, h + 3].map((x) => `${((x - 1) % 12) + 1} o'clock`), `The long hand is on 12 and the short hand is on ${h}, so it is ${h} o'clock.`);
      }
      const i = c.int(0, 6);
      const after = c.int(0, 1) === 0;
      const ans = DAYS[(i + (after ? 1 : 6)) % 7];
      return wordQ("E", `Which day comes just ${after ? "after" : "before"} ${DAYS[i]}?`, ans, c.shuffle(DAYS.filter((d) => d !== ans && d !== DAYS[i])), `The days go in order, so ${ans} comes just ${after ? "after" : "before"} ${DAYS[i]}.`);
    }
    if (g === 2) {
      const h = c.int(1, 12);
      const [m, words] = c.pick([[30, "Half past"], [15, "Quarter past"], [0, ""]] as [number, string][]);
      const say = (hh: number, w: string) => (w ? `${w} ${hh}` : `${hh} o'clock`);
      if (c.int(0, 2) === 0) {
        const i = c.int(0, 11);
        const ans = MONTHS[(i + 1) % 12];
        return wordQ("E", `Which month comes just after ${MONTHS[i]}?`, ans, c.shuffle(MONTHS.filter((x) => x !== ans && x !== MONTHS[i])), `The months go in order, so ${ans} comes after ${MONTHS[i]}.`);
      }
      return wordQ("E", `What time does the clock show?\n[[diagram: clock ${h}:${String(m).padStart(2, "0")}]]`, say(h, words), [say((h % 12) + 1, words), say(h, words === "Half past" ? "Quarter past" : "Half past"), say(h === 1 ? 12 : h - 1, words)], `The short hand is ${m ? "just past" : "on"} ${h} and the long hand is on ${m === 30 ? 6 : m === 15 ? 3 : 12}: ${say(h, words).toLowerCase()}.`);
    }
    if (g === 3) {
      const kind = c.int(0, 2);
      if (kind === 0) {
        const h = c.int(2, 12);
        return mq(c, "M", `How many minutes are there in ${h} hours?`, h * 60, `1 hour is 60 minutes, so ${h} hours is ${h} × 60 = ${h * 60} minutes.`);
      }
      if (kind === 1) {
        const w = c.int(2, 12);
        return mq(c, "M", `How many days are there in ${w} weeks?`, w * 7, `1 week is 7 days, so ${w} weeks is ${w} × 7 = ${w * 7} days.`);
      }
      const h = c.int(1, 12);
      const m = 5 * c.int(1, 11);
      const t = (hh: number, mm: number) => `${hh}:${String(mm).padStart(2, "0")}`;
      return wordQ("M", `What time does the clock show?\n[[diagram: clock ${t(h, m)}]]`, t(h, m), [t((h % 12) + 1, m), t(h, (m + 15) % 60), t(Math.max(1, Math.round(m / 5)), h * 5 === 60 ? 0 : h * 5)], `The short hand is past ${h} and the long hand shows ${m} minutes: ${t(h, m)}.`);
    }
    if (g === 4) {
      const sh = c.int(6, 15);
      const sm = 5 * c.int(0, 11);
      const dur = 5 * c.int(4, 40);
      const end = sh * 60 + sm + dur;
      const t = (x: number) => `${Math.floor(x / 60)}:${String(x % 60).padStart(2, "0")}`;
      return mq(c, "M", `A journey starts at ${t(sh * 60 + sm)} and ends at ${t(end)} on the same day. How many minutes does it take?`, dur, `From ${t(sh * 60 + sm)} to ${t(end)} is ${Math.floor(dur / 60)} hour(s) and ${dur % 60} minutes, which is ${dur} minutes.`);
    }
    if (g === 5) {
      const h = c.int(1, 11);
      const m = 5 * c.int(0, 11);
      const mm = String(m).padStart(2, "0");
      if (c.int(0, 1) === 0) return wordQ("H", `Write ${h}:${mm} p.m. in the 24-hour clock.`, `${h + 12}:${mm}`, [`${String(h).padStart(2, "0")}:${mm}`, `${h + 10}:${mm}`, `${h + 13 > 23 ? h + 11 : h + 13}:${mm}`], `For p.m. times add 12 to the hour: ${h} + 12 = ${h + 12}.`);
      return wordQ("H", `Write ${h + 12}:${mm} in the 12-hour clock.`, `${h}:${mm} p.m.`, [`${h}:${mm} a.m.`, `${h + 2 > 12 ? h - 1 || 1 : h + 2}:${mm} p.m.`, `${h + 1 > 12 ? 1 : h + 1}:${mm} a.m.`], `Subtract 12 from the hour: ${h + 12} - 12 = ${h}, and it is after noon, so p.m.`);
    }
    const speed = 5 * c.int(4, 24);
    const t = c.int(2, 8);
    const kind = c.int(0, 2);
    if (kind === 0) return mq(c, "H", `A car travels ${fmt(speed * t)} km in ${t} hours. What is its average speed in km/h?`, speed, `Speed = distance ÷ time = ${fmt(speed * t)} ÷ ${t} = ${speed} km/h.`);
    if (kind === 1) return mq(c, "H", `A bus travels at ${speed} km/h for ${t} hours. How many kilometres does it cover?`, speed * t, `Distance = speed × time = ${speed} × ${t} = ${fmt(speed * t)} km.`);
    return numQ(c, "H", `How many hours does a lorry take to travel ${fmt(speed * t)} km at ${speed} km/h?`, t, `Time = distance ÷ speed = ${fmt(speed * t)} ÷ ${speed} = ${t} hours.`);
  },
});

const measure: Factory = (c) => ({
  title: ["Measuring length", "Metres and centimetres", "Perimeter of squares and rectangles", "Area of squares and rectangles", "Area of triangles", "Volume of cuboids and circumference of circles"][c.g - 1],
  subtopics: ["Units of length", c.g <= 2 ? "Adding and comparing lengths" : c.g === 3 ? "Perimeter" : "Area", c.g === 6 ? "Volume and circumference" : "Word problems on measurement"],
  objectives: ["State the units used to measure length", c.g <= 2 ? "Add and compare lengths" : c.g === 3 ? "Calculate the perimeter of a square or rectangle" : "Calculate the area of a plane shape", c.g === 6 ? "Calculate the volume of a cuboid and the circumference of a circle" : "Solve practical problems on measurement"],
  summary: "Length is measured in centimetres, metres and kilometres. Perimeter is the distance round a shape, area is the surface it covers and volume is the space it fills.",
  notes: `## Units of length\n| Unit | Short form | Equal to |\n|---|---|---|\n| centimetre | cm | 10 millimetres |\n| metre | m | 100 centimetres |\n| kilometre | km | 1,000 metres |\n\nWe use a **ruler** for short lengths and a **tape** for long ones. Always start measuring from the 0 mark.\n\n## Perimeter\nThe **perimeter** is the distance all the way round a shape. Add the lengths of all the sides.\n\n[[diagram: shape rectangle: 8 cm, 3 cm || Perimeter = 8 + 3 + 8 + 3 = 22 cm]]\n\n- Rectangle: perimeter = 2 × (length + breadth).\n- Square: perimeter = 4 × side.\n${c.g >= 4 ? "\n## Area\nThe **area** is the amount of surface a shape covers. It is measured in square units, such as cm² and m².\n\n[[diagram: array 3 x 5 || A 3 by 5 rectangle covers 15 unit squares]]\n\n- Rectangle: area = length × breadth.\n- Square: area = side × side.\n" : ""}${c.g >= 5 ? "\n## Area of a triangle\nA triangle is half of a rectangle with the same base and height.\n\n**Area = ½ × base × height.**\n\n[[diagram: shape right-triangle: 6 cm, 4 cm || Area = ½ × 6 × 4 = 12 cm²]]\n" : ""}${c.g === 6 ? "\n## Volume of a cuboid\nVolume is the space a solid fills, measured in cubic units such as cm³.\n\n**Volume = length × breadth × height.**\n\n[[diagram: shape cuboid: 5 cm, 3 cm, 2 cm || Volume = 5 × 3 × 2 = 30 cm³]]\n\n## Circumference of a circle\nThe circumference is the distance round a circle. **C = π × d**, where d is the diameter and π is about 22/7.\n\n[[diagram: shape circle: diameter 14 cm || C = 22/7 × 14 = 44 cm]]\n" : ""}\n## Do not mix them up\n- Perimeter is a **length** (cm, m).\n- Area is a **surface** (cm², m²).\n- Volume is a **space** (cm³, m³).${TIP}`,
  examples: `**Example 1.** One rope is 12 cm long and another is 9 cm long. What is the total length?\n12 + 9 = **21 cm**.\n\n**Example 2.** Find the perimeter of a rectangle 7 cm long and 4 cm wide.\n2 × (7 + 4) = **22 cm**.\n\n**Example 3.** Find the area of a rectangle 9 m long and 6 m wide.\n9 × 6 = **54 m²**.`,
  make: () => {
    const g = c.g;
    const l = c.int(4, g <= 3 ? 20 : 40);
    const w = c.int(2, l - 1);
    if (g === 1) {
      const [a, b] = [c.int(2, 9), c.int(2, 9)];
      return numQ(c, "E", `One stick is ${a} cm long and another is ${b} cm long. What is their total length in centimetres?`, a + b, `${a} cm + ${b} cm = ${a + b} cm.`);
    }
    if (g === 2) {
      if (c.int(0, 1) === 0) {
        const m = c.int(1, 9);
        return mq(c, "E", `How many centimetres are there in ${m} metre${m > 1 ? "s" : ""}?`, m * 100, `1 m = 100 cm, so ${m} m = ${m * 100} cm.`);
      }
      const [a, b] = [c.int(10, 60), c.int(10, 39)];
      return mq(c, "E", `A ribbon is ${a} cm long. Another ribbon is ${b} cm long. What is their total length in centimetres?`, a + b, `${a} cm + ${b} cm = ${a + b} cm.`);
    }
    if (g === 3) {
      if (c.int(0, 2) === 0) return mq(c, "M", `Find the perimeter of a square of side ${l} cm.\n[[diagram: shape square: ${l} cm]]`, 4 * l, `Perimeter of a square = 4 × side = 4 × ${l} = ${4 * l} cm.`);
      return mq(c, "M", `Find the perimeter of this rectangle, in centimetres.\n[[diagram: shape rectangle: ${l} cm, ${w} cm]]`, 2 * (l + w), `Perimeter = 2 × (${l} + ${w}) = ${2 * (l + w)} cm.`);
    }
    if (g === 4) {
      if (c.int(0, 2) === 0) return mq(c, "M", `Find the area of a square of side ${w + 2} m, in square metres.`, (w + 2) ** 2, `Area of a square = side × side = ${w + 2} × ${w + 2} = ${(w + 2) ** 2} m².`);
      return mq(c, "M", `Find the area of this rectangle, in square centimetres.\n[[diagram: shape rectangle: ${l} cm, ${w} cm]]`, l * w, `Area = length × breadth = ${l} × ${w} = ${l * w} cm².`);
    }
    if (g === 5) {
      const b = 2 * c.int(2, 15);
      const h = c.int(3, 20);
      return mq(c, "H", `Find the area of a triangle with base ${b} cm and height ${h} cm, in square centimetres.`, (b * h) / 2, `Area = ½ × base × height = ½ × ${b} × ${h} = ${(b * h) / 2} cm².`);
    }
    if (c.int(0, 2) === 0) {
      const d = 7 * c.int(1, 12);
      return mq(c, "H", `Find the circumference of a circle of diameter ${d} cm. (Take π = 22/7.)`, (22 * d) / 7, `C = π × d = 22/7 × ${d} = ${(22 * d) / 7} cm.`);
    }
    const [x, y, z] = [c.int(3, 12), c.int(2, 9), c.int(2, 8)];
    return mq(c, "H", `Find the volume of a cuboid ${x} cm long, ${y} cm wide and ${z} cm high, in cubic centimetres.`, x * y * z, `Volume = ${x} × ${y} × ${z} = ${x * y * z} cm³.`);
  },
});

const weightCapacity: Factory = (c) => ({
  title: "Weight and capacity",
  subtopics: ["Kilograms and grams", "Litres and millilitres", "Changing from one unit to another"],
  objectives: ["State the units of weight and of capacity", "Change kilograms to grams and litres to millilitres", "Solve simple problems on weight and capacity"],
  summary: "Weight tells how heavy something is (grams and kilograms). Capacity tells how much a container holds (millilitres and litres). 1,000 small units make one large unit.",
  notes: `## Weight\n**Weight** tells us how heavy an object is. We measure it with a **scale** or a **balance**.\n\n| Unit | Short form | Equal to |\n|---|---|---|\n| gram | g | a very small weight, about one paper clip |\n| kilogram | kg | 1,000 grams |\n\nA bag of rice may weigh 50 kg. A sachet of salt may weigh 250 g.\n\n## Capacity\n**Capacity** is the amount of liquid a container can hold.\n\n| Unit | Short form | Equal to |\n|---|---|---|\n| millilitre | ml | a very small amount, about 20 drops |\n| litre | l | 1,000 millilitres |\n\nA sachet of water holds about 500 ml. A big bottle of water holds 1.5 litres.\n\n[[diagram: bars Cup=250, Sachet=500, Bottle=750 || Capacity of three containers in millilitres]]\n\n## Changing units\n- To change kg to g, or litres to ml: **multiply by 1,000**.\n- To change g to kg, or ml to litres: **divide by 1,000**.\n\n[[diagram: flow kilograms -> × 1000 -> grams || Big unit to small unit: multiply]]\n\n## Adding weights\nAdd grams to grams and kilograms to kilograms. If the grams reach 1,000, change them to 1 kilogram.\n\n## Choosing the right unit\nUse grams for light things such as a pencil, and kilograms for heavy things such as a child. Use millilitres for a spoon of medicine and litres for a bucket of water.${TIP}`,
  examples: `**Example 1.** How many grams are in 3 kg?\n3 × 1,000 = **3,000 g**.\n\n**Example 2.** How many millilitres are in 2 litres?\n2 × 1,000 = **2,000 ml**.\n\n**Example 3.** A bag of beans weighs 12 kg and a bag of garri weighs 9 kg. What is the total weight?\n12 + 9 = **21 kg**.`,
  make: () => {
    const kind = c.int(0, 2);
    const n = c.int(2, 12);
    if (kind === 0) return mq(c, "M", `How many grams are there in ${n} kilograms?`, n * 1000, `1 kg = 1,000 g, so ${n} kg = ${fmt(n * 1000)} g.`);
    if (kind === 1) return mq(c, "M", `How many millilitres are there in ${n} litres?`, n * 1000, `1 litre = 1,000 ml, so ${n} litres = ${fmt(n * 1000)} ml.`);
    const [a, b] = [c.int(12, 80), c.int(12, 80)];
    return mq(c, "M", `A bag of rice weighs ${a} kg and a bag of beans weighs ${b} kg. What is their total weight in kilograms?`, a + b, `${a} kg + ${b} kg = ${a + b} kg.`);
  },
});

/* ------------------------------------------------------------------ geometry */

const SHAPE_FACTS: [string, number, string][] = [
  ["How many sides has a triangle?", 3, "A triangle has 3 sides."],
  ["How many corners has a triangle?", 3, "A triangle has 3 corners."],
  ["How many sides has a square?", 4, "A square has 4 equal sides."],
  ["How many corners has a rectangle?", 4, "A rectangle has 4 corners."],
  ["How many sides has a rectangle?", 4, "A rectangle has 4 sides: 2 long and 2 short."],
  ["How many sides has a pentagon?", 5, "A pentagon has 5 sides."],
  ["How many sides has a hexagon?", 6, "A hexagon has 6 sides."],
  ["How many flat faces has a cube?", 6, "A cube has 6 square faces."],
  ["How many corners has a cube?", 8, "A cube has 8 corners."],
  ["How many edges has a cube?", 12, "A cube has 12 edges."],
  ["How many flat faces has a cuboid?", 6, "A cuboid has 6 rectangular faces."],
  ["How many flat faces has a cylinder?", 2, "A cylinder has 2 flat circular faces and 1 curved face."],
  ["How many corners has a circle?", 0, "A circle has no corners."],
  ["How many sides has an octagon?", 8, "An octagon has 8 sides."],
];
const shapes: Factory = (c) => ({
  title: c.g === 1 ? "Plane shapes around us" : "Plane shapes and solid shapes",
  subtopics: ["Names of plane shapes", "Sides and corners", c.g === 1 ? "Shapes of everyday objects" : "Faces, edges and corners of solids"],
  objectives: ["Name common plane shapes", "Count the sides and corners of a shape", c.g === 1 ? "Match everyday objects to their shapes" : "Count the faces, edges and corners of a solid shape"],
  summary: "Plane shapes are flat and have sides and corners. Solid shapes take up space and have faces, edges and corners.",
  notes: `## Plane shapes\nA **plane shape** is flat. We can draw it on paper.\n\n[[diagram: shapes circle, square, triangle, rectangle || Four plane shapes]]\n\n| Shape | Sides | Corners | Looks like |\n|---|---|---|---|\n| Circle | 0 straight sides | 0 | a coin, a plate |\n| Triangle | 3 | 3 | a slice of pizza, a roof |\n| Square | 4 equal | 4 | a floor tile |\n| Rectangle | 4 (2 long, 2 short) | 4 | a door, a book |\n\nA **side** is a straight edge of the shape. A **corner** is where two sides meet.\n\n[[diagram: shapes pentagon, hexagon, octagon || Shapes with 5, 6 and 8 sides]]\n\n## Solid shapes\nA **solid shape** is not flat. It takes up space, and we can hold it.\n\n[[diagram: shapes cube, cuboid, cylinder || Three solid shapes]]\n\n| Solid | Faces | Edges | Corners | Looks like |\n|---|---|---|---|---|\n| Cube | 6 | 12 | 8 | a dice, a sugar cube |\n| Cuboid | 6 | 12 | 8 | a carton, a brick |\n| Cylinder | 2 flat, 1 curved | 2 | 0 | a tin of milk |\n\n- A **face** is a flat or curved surface.\n- An **edge** is where two faces meet.\n- A **corner** is where edges meet.\n\n## Looking around\nShapes are everywhere: a clock is a circle, a window is a rectangle, a ball is a sphere, a box is a cuboid.${TIP}`,
  examples: `**Example 1.** How many sides has a triangle?\nA triangle has **3** sides.\n\n**Example 2.** How many corners have 2 squares altogether?\nOne square has 4 corners. 4 + 4 = **8**.\n\n**Example 3.** How many faces has a cube?\nA cube has **6** faces.`,
  make: (_, i) => {
    const facts = c.g === 1 ? SHAPE_FACTS.slice(0, 7) : SHAPE_FACTS;
    if (i < facts.length) {
      const [stem, ans, why] = facts[i];
      return numQ(c, "E", stem, ans, why);
    }
    const [name, sides] = c.pick([["triangle", 3], ["square", 4], ["rectangle", 4], ["pentagon", 5], ["hexagon", 6]] as [string, number][]);
    const n = c.int(2, c.g === 1 ? 4 : 9);
    const what = c.pick(["sides", "corners"]);
    return numQ(c, "E", `How many ${what} have ${n} ${name}s altogether?`, n * sides, `One ${name} has ${sides} ${what}, so ${n} have ${n * sides}.`);
  },
});

const angles: Factory = (c) => ({
  title: c.g === 4 ? "Angles and turns" : "Angles of triangles and at a point",
  subtopics: ["What an angle is", "Types of angle", c.g === 4 ? "Angles on a straight line" : "Angle sums"],
  objectives: ["Explain that an angle measures a turn", "Name acute, right, obtuse and straight angles", c.g === 4 ? "Find a missing angle on a straight line" : "Find a missing angle in a triangle or at a point"],
  summary: "An angle measures a turn, in degrees. A right angle is 90°, a straight line is 180° and a full turn is 360°.",
  notes: `## What is an angle?\nAn **angle** is formed where two straight lines meet. It measures how much one line has **turned** from the other. Angles are measured in **degrees** (°) with a **protractor**.\n\n[[diagram: angle 60 || An angle of 60°]]\n\n## Types of angle\n| Name | Size |\n|---|---|\n| Acute angle | less than 90° |\n| Right angle | exactly 90° |\n| Obtuse angle | more than 90° but less than 180° |\n| Straight angle | exactly 180° |\n| Reflex angle | more than 180° |\n| Full turn | 360° |\n\n[[diagram: angle 90 || A right angle, like the corner of a book]]\n\n[[diagram: angle 130 || An obtuse angle]]\n\n## Angles on a straight line\nAngles that sit side by side on a straight line add up to **180°**. If one angle is 70°, the other is 180° - 70° = 110°.\n\n## Angles in a triangle\nThe three angles of any triangle add up to **180°**. If two angles are 50° and 60°, the third is 180° - 110° = 70°.\n\n[[diagram: shape triangle || The three angles of a triangle always total 180°]]\n\n## Angles at a point\nAngles that go all the way round a point add up to **360°**.\n\n## Turns\nA quarter turn is 90°, a half turn is 180°, a three-quarter turn is 270° and a full turn is 360°. Clockwise means turning the way the hands of a clock move.${TIP}`,
  examples: `**Example 1.** Two angles on a straight line are 125° and x. Find x.\nx = 180° - 125° = **55°**.\n\n**Example 2.** Two angles of a triangle are 40° and 75°. Find the third angle.\n180° - (40° + 75°) = **65°**.\n\n**Example 3.** Three angles at a point are 100°, 120° and y. Find y.\ny = 360° - 220° = **140°**.`,
  make: () => {
    const kind = c.g === 4 ? 0 : c.int(0, 2);
    if (kind === 0) {
      const a = c.int(15, 165);
      return mq(c, level(c.g), `Two angles on a straight line are ${a}° and x°. Find x.`, 180 - a, `Angles on a straight line add up to 180°: 180 - ${a} = ${180 - a}.`);
    }
    if (kind === 1) {
      const a = c.int(20, 90);
      const b = c.int(20, 160 - a);
      return mq(c, "H", `Two angles of a triangle are ${a}° and ${b}°. What is the size of the third angle, in degrees?`, 180 - a - b, `The angles of a triangle add up to 180°: 180 - (${a} + ${b}) = ${180 - a - b}.`);
    }
    const a = c.int(60, 150);
    const b = c.int(60, 140);
    return mq(c, "H", `Three angles at a point are ${a}°, ${b}° and y°. Find y.`, 360 - a - b, `Angles at a point add up to 360°: 360 - (${a} + ${b}) = ${360 - a - b}.`);
  },
});

/* ------------------------------------------------------------------- algebra */

const openSentences: Factory = (c) => ({
  title: "Open sentences",
  subtopics: ["A box that stands for a number", "Finding the missing number", "Checking the answer"],
  objectives: ["Explain that a box in a number sentence stands for a missing number", "Find the missing number using the opposite operation", "Check the answer by putting it back in the sentence"],
  summary: "An open sentence has a missing number shown by a box. Use the opposite operation to find it, then put it back to check.",
  notes: `## What is an open sentence?\nA number sentence with a missing number is called an **open sentence**. The missing number is shown by a box: □ + 3 = 8.\n\nWe must find the number that makes the sentence **true**.\n\n[[diagram: bond 8 = ? + 3 || □ + 3 = 8: the missing part is 5]]\n\n## Using the opposite\nAdding and taking away undo each other.\n\n| Open sentence | Think | Answer |\n|---|---|---|\n| □ + 3 = 8 | 8 - 3 | 5 |\n| 6 + □ = 10 | 10 - 6 | 4 |\n| □ - 2 = 7 | 7 + 2 | 9 |\n| 9 - □ = 5 | 9 - 5 | 4 |\n\n[[diagram: numberline 0 10 step 1 jump 5>8 || Start at 5, jump 3 and land on 8]]\n\n## Counting on to find the box\nFor 6 + □ = 10, start at 6 and count on to 10: 7, 8, 9, 10. You counted 4 numbers, so the box is 4.\n\n## Check\nPut your answer in the box. 5 + 3 = 8 is true, so 5 is correct.\n${c.g >= 3 ? "\n## With multiplication\n□ × 4 = 20 asks: how many fours make 20? Divide: 20 ÷ 4 = 5.\n" : ""}\n## Why we learn this\nOpen sentences prepare you for algebra, where a letter such as x is used instead of the box.${TIP}`,
  examples: `**Example 1.** □ + 4 = 9.\n9 - 4 = **5**. Check: 5 + 4 = 9.\n\n**Example 2.** 7 + □ = 12.\n12 - 7 = **5**.\n\n**Example 3.** □ - 3 = 6.\n6 + 3 = **9**. Check: 9 - 3 = 6.\n\n**Example 4.** 10 - □ = 4.\nThe box is the number taken away: 10 - 4 = **6**. Check: 10 - 6 = 4.`,
  make: () => {
    const hi = [9, 20, 60][c.g - 1] ?? 60;
    const a = c.int(1, hi);
    const x = c.int(1, hi);
    const kind = c.int(0, c.g >= 3 ? 3 : 2);
    if (kind === 0) return numQ(c, level(c.g), `□ + ${a} = ${a + x}. What is the missing number?`, x, `${a + x} - ${a} = ${x}.`);
    if (kind === 1) return numQ(c, level(c.g), `${a} + □ = ${a + x}. What is the missing number?`, x, `${a + x} - ${a} = ${x}.`);
    if (kind === 2) return numQ(c, level(c.g), `□ - ${a} = ${x}. What is the missing number?`, a + x, `${x} + ${a} = ${a + x}.`);
    const m = c.int(2, 9);
    const n = c.int(2, 10);
    return numQ(c, "M", `□ × ${m} = ${m * n}. What is the missing number?`, n, `${m * n} ÷ ${m} = ${n}.`);
  },
});

const equations: Factory = (c) => ({
  title: "Simple equations",
  subtopics: ["Letters for numbers", "Solving one-step equations", "Solving two-step equations"],
  objectives: ["Explain that a letter can stand for an unknown number", "Solve an equation with one operation", "Solve an equation with two operations and check the answer"],
  summary: "An equation says that two things are equal. To solve it, do the same thing to both sides until the letter stands alone.",
  notes: `## Letters for numbers\nIn algebra a letter such as **x** stands for a number we do not yet know. 3x means 3 × x.\n\n## What is an equation?\nAn **equation** says that two sides are equal: x + 7 = 15. To **solve** it is to find the value of x that makes it true.\n\n## The balance idea\nThink of an equation as a balance. Whatever you do to one side, you must do to the other side, so that it stays level.\n\n[[diagram: flow x + 7 = 15 -> take 7 from both sides -> x = 8 || Keeping the balance]]\n\n## One-step equations\n| Equation | Do to both sides | Answer |\n|---|---|---|\n| x + 7 = 15 | subtract 7 | x = 8 |\n| x - 4 = 9 | add 4 | x = 13 |\n| 3x = 21 | divide by 3 | x = 7 |\n| x ÷ 5 = 6 | multiply by 5 | x = 30 |\n\n## Two-step equations\nFor 2x + 3 = 11:\n1. Remove the number added: subtract 3 from both sides, giving 2x = 8.\n2. Remove the multiplier: divide both sides by 2, giving x = 4.\n\nUndo adding or subtracting **first**, then undo multiplying or dividing.\n\n## Check\nPut your answer back: 2 × 4 + 3 = 11. It is true, so x = 4 is correct.\n\n## Word problems\n"I think of a number, double it and add 5. The answer is 17." Write 2x + 5 = 17, so 2x = 12 and x = 6.${TIP}`,
  examples: `**Example 1.** Solve x + 9 = 20.\nSubtract 9 from both sides: x = **11**.\n\n**Example 2.** Solve 4x = 36.\nDivide both sides by 4: x = **9**.\n\n**Example 3.** Solve 3x - 2 = 13.\nAdd 2: 3x = 15. Divide by 3: x = **5**. Check: 3 × 5 - 2 = 13.`,
  make: () => {
    const x = c.int(2, 15);
    const a = c.int(2, 9);
    const b = c.int(1, 20);
    const kind = c.int(0, 3);
    if (kind === 0) return numQ(c, "H", `Solve the equation x + ${b} = ${x + b}.`, x, `Subtract ${b} from both sides: x = ${x}.`);
    if (kind === 1) return numQ(c, "H", `Solve the equation ${a}x = ${a * x}.`, x, `Divide both sides by ${a}: x = ${x}.`);
    if (kind === 2) return numQ(c, "H", `Solve the equation ${a}x + ${b} = ${a * x + b}.`, x, `Subtract ${b}: ${a}x = ${a * x}. Divide by ${a}: x = ${x}.`);
    return numQ(c, "H", `I think of a number, multiply it by ${a} and subtract ${b}. The answer is ${a * (x + 5) - b}. What is the number?`, x + 5, `${a}x - ${b} = ${a * (x + 5) - b}, so ${a}x = ${a * (x + 5)} and x = ${x + 5}.`);
  },
});

/* ---------------------------------------------------------------- statistics */

const data: Factory = (c) => {
  const upper = c.g >= 5;
  return {
    title: c.g <= 2 ? "Tally marks and pictures" : upper ? "Mean, mode and range" : "Bar charts",
    subtopics: upper ? ["Mode", "Mean (average)", "Range"] : ["Collecting information", c.g <= 2 ? "Tally marks" : "Reading a bar chart", "Answering questions from data"],
    objectives: upper ? ["Find the mode of a set of numbers", "Calculate the mean of a set of numbers", "Find the range of a set of numbers"] : ["Explain why we collect and record information", c.g <= 2 ? "Count and draw tally marks" : "Read the height of each bar in a bar chart", "Answer questions using recorded data"],
    summary: upper ? "The mode is the value that appears most, the mean is the total shared equally, and the range is the difference between the highest and lowest values." : "Data is information we collect. Tally marks help us to count it, and charts help us to see and compare it.",
    notes: `## What is data?\n**Data** is information that we collect, such as the favourite fruit of each pupil or the number of children present each day.\n\n## Tally marks\nA tally is a quick way of counting. Draw one stroke for each item. The **fifth** stroke goes across the other four, making a bundle of five, so that the bundles are easy to count.\n\n[[diagram: tally 7 || One bundle of five and two more: 7]]\n\n## Bar charts\nA **bar chart** shows data with bars. The taller the bar, the bigger the number.\n\n[[diagram: bars Mon=4, Tue=7, Wed=5, Thu=2 || Books read on four days]]\n\nFrom this chart we can see that most books were read on Tuesday and fewest on Thursday. The total is 4 + 7 + 5 + 2 = 18.\n\n## Reading a chart\n1. Read the title to know what the chart is about.\n2. Read the name under each bar.\n3. Read the number at the top of each bar.\n4. Compare the bars to answer the question.\n${upper ? "\n## Mode\nThe **mode** is the value that appears **most often**. In 3, 5, 5, 6, 8 the mode is 5.\n\n## Mean\nThe **mean** (average) is the total shared equally.\n\n**Mean = sum of the values ÷ number of values.**\n\nFor 4, 6, 8: sum = 18, number of values = 3, mean = 6.\n\n## Range\nThe **range** is the highest value minus the lowest value. For 3, 5, 5, 6, 8 the range is 8 - 3 = 5.\n\n[[diagram: pie Maths=5, English=3, Science=2 || A pie chart shares a circle among the groups]]\n" : ""}\n## Why data matters\nShopkeepers, teachers, doctors and governments all use data to make good decisions.${TIP}`,
    examples: upper
      ? `**Example 1.** Find the mean of 5, 7, 9.\nSum = 21. 21 ÷ 3 = **7**.\n\n**Example 2.** Find the mode of 2, 4, 4, 6, 4, 8.\n4 appears most often, so the mode is **4**.\n\n**Example 3.** Find the range of 12, 7, 15, 9.\nHighest 15, lowest 7. 15 - 7 = **8**.`
      : `**Example 1.** A tally shows two bundles of five and three more strokes. What number is it?\n5 + 5 + 3 = **13**.\n\n**Example 2.** A chart shows Mon 4, Tue 7, Wed 5. On which day was the number greatest?\n7 is the greatest, so **Tuesday**.\n\n**Example 3.** What is the total for the three days?\n4 + 7 + 5 = **16**.`,
    make: () => {
      if (c.g === 1 || (c.g === 2 && c.int(0, 1) === 0)) {
        const n = c.int(3, c.g === 1 ? 20 : 34);
        return numQ(c, "E", `What number does this tally show?\n[[diagram: tally ${n}]]`, n, `Count the bundles of five and add the single strokes: ${n}.`);
      }
      if (!upper) {
        const labels = c.pick([["Mon", "Tue", "Wed", "Thu"], ["Red", "Blue", "Green", "Pink"], ["Rice", "Beans", "Yam", "Bread"]]);
        const vals = c.shuffle(Array.from({ length: c.g === 2 ? 9 : 20 }, (_, i) => i + 1)).slice(0, 4);
        const chart = `[[diagram: bars ${labels.map((l, i) => `${l}=${vals[i]}`).join(", ")}]]`;
        const kind = c.int(0, 2);
        if (kind === 0) return mq(c, level(c.g), `What is the total of all the bars?\n${chart}`, vals.reduce((a, b) => a + b, 0), `${vals.join(" + ")} = ${vals.reduce((a, b) => a + b, 0)}.`);
        if (kind === 1) {
          const i = vals.indexOf(Math.max(...vals));
          return wordQ(level(c.g), `Which bar is the tallest?\n${chart}`, labels[i], labels.filter((_, j) => j !== i), `${labels[i]} has the greatest value, ${vals[i]}.`);
        }
        return numQ(c, level(c.g), `What is the difference between ${labels[0]} and ${labels[1]}?\n${chart}`, Math.abs(vals[0] - vals[1]), `The difference between ${vals[0]} and ${vals[1]} is ${Math.abs(vals[0] - vals[1])}.`);
      }
      const n = c.int(3, 5);
      const mean = c.int(4, c.g === 6 ? 40 : 15);
      const vals = Array.from({ length: n - 1 }, () => mean + c.int(-3, 3));
      vals.push(mean * n - vals.reduce((a, b) => a + b, 0));
      if (vals.some((v) => v <= 0)) return null;
      const kind = c.int(0, 2);
      if (kind === 0) return numQ(c, "H", `Find the mean of ${vals.join(", ")}.`, mean, `Sum = ${mean * n}; ${mean * n} ÷ ${n} = ${mean}.`);
      if (kind === 1) return numQ(c, "H", `Find the range of ${vals.join(", ")}.`, Math.max(...vals) - Math.min(...vals), `Highest ${Math.max(...vals)} minus lowest ${Math.min(...vals)} is ${Math.max(...vals) - Math.min(...vals)}.`);
      const m = c.int(2, 30);
      const list = c.shuffle([m, m, m, m + c.int(1, 4), m - 1 || m + 6, m + 5]);
      return wordQ("H", `Find the mode of ${list.join(", ")}.`, String(m), [...new Set(list.filter((v) => v !== m))].map(String).concat(String(m + 7)), `${m} appears most often, so it is the mode.`);
    },
  };
};

const plan = (g: number): Factory[] =>
  g === 1
    ? [placeValue, comparing, skipCount, addition, subtraction, fractions, money, time, measure, shapes, openSentences, data]
    : g === 2
      ? [placeValue, addition, subtraction, multiplication, division, fractions, money, time, measure, shapes, openSentences, data]
      : g === 3
        ? [placeValue, addition, subtraction, multiplication, division, fractions, money, time, measure, weightCapacity, openSentences, data]
        : g === 4
          ? [placeValue, addition, subtraction, multiplication, division, lcmHcf, fractions, money, time, measure, angles, data]
          : g === 5
            ? [placeValue, multiplication, division, lcmHcf, fractions, decimalsPercent, ratio, money, time, measure, angles, data]
            : [placeValue, multiplication, division, lcmHcf, fractions, decimalsPercent, ratio, money, time, measure, equations, data];

export const primaryMathematics: SubjectPack = {
  code: "MTH",
  name: "Primary Mathematics",
  version: "2026.1",
  classes: ["BASIC1", "BASIC2", "BASIC3", "BASIC4", "BASIC5", "BASIC6"],
  entrance: true,
  terms: buildPrimaryTerms("PMTH", plan),
};
