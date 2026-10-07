/**
 * Quantitative Reasoning, Basic 1–Basic 6. Original material written for Precious PS Academy to
 * support the reasoning strand of the Nigerian Basic Education (NERDC) Mathematics curriculum.
 */
import type { SubjectPack } from "../types";
import { buildPrimaryTerms, level, numQ, top, wordQ, type Factory } from "../primary/gen";

const HOW = "\n\n## How to answer in a test\n- Read the question twice and look at every number in the picture.\n- Find the rule using the groups that are complete.\n- Use the same rule on the group with the question mark.\n- Check your answer by trying the rule once more.";

const countOn: Factory = (c) => {
  const maxStep = [2, 5, 10, 12, 25, 50][c.g - 1];
  return {
    title: "Number patterns: counting on",
    subtopics: ["Finding the rule of a pattern", "Counting on in equal steps", "Finding a missing number"],
    objectives: ["Find the step between numbers that follow each other", "Continue a pattern that grows by the same amount", "Fill in a missing number anywhere in the pattern"],
    summary: "A number pattern follows a rule. Find how much is added each time, then use the rule to find the missing number.",
    notes: `## What is a number pattern?\nA number pattern is a row of numbers that follows a **rule**. In this lesson the rule is always "add the same number each time".\n\n[[diagram: sequence 2, 4, 6, 8, ? || The rule is add 2, so the next number is 10]]\n\n## Finding the rule\n1. Look at two numbers that are next to each other.\n2. Take the smaller from the bigger. The answer is the **step**.\n3. Check that the same step works for the next pair.\n\n[[diagram: numberline 0 20 step 2 jump 2>4 4>6 6>8 || Equal jumps of 2 on a number line]]\n\n## Finding a missing number\n- If the missing number is at the end, add the step to the last number.\n- If it is in the middle, add the step to the number just before it.\n- If it is at the start, take the step away from the second number.\n\nIn Basic ${c.g} the step can be as large as ${maxStep}, so write the step down before you answer.${HOW}`,
    examples: `**Example 1.** 5, 10, 15, ?, 25\nThe step is 10 - 5 = 5. The number before the gap is 15, so the missing number is 15 + 5 = **20**.\n\n**Example 2.** ?, 9, 12, 15\nThe step is 12 - 9 = 3. The missing number comes before 9, so it is 9 - 3 = **6**.\n\n**Example 3.** 7, 14, 21, 28, ?\nThe step is 7. The next number is 28 + 7 = **35**.`,
    make: () => {
      const step = c.int(c.g === 1 ? 1 : 2, maxStep);
      const start = c.int(1, Math.max(5, top(c.g) / 4));
      const seq = Array.from({ length: 5 }, (_, i) => start + i * step);
      const gap = c.int(c.g === 1 ? 2 : 1, 4);
      const shown = seq.map((v, i) => (i === gap ? "?" : String(v))).join(", ");
      return numQ(c, level(c.g), `Find the missing number.\n[[diagram: sequence ${shown}]]`, seq[gap], `The rule is add ${step} each time, so the missing number is ${seq[gap]}.`);
    },
  };
};

const countBack: Factory = (c) => {
  const maxStep = [1, 3, 5, 10, 20, 25][c.g - 1];
  return {
    title: "Number patterns: counting back",
    subtopics: ["Patterns that get smaller", "Counting back in equal steps", "Finding a missing number"],
    objectives: ["Recognise a pattern that goes down", "Find how much is taken away each time", "Fill in a missing number in a decreasing pattern"],
    summary: "Some patterns get smaller. Find how much is taken away each time and use it to find the missing number.",
    notes: `## Patterns that go down\nWhen the numbers get smaller as you read from left to right, the rule is "take away the same number each time".\n\n[[diagram: sequence 20, 18, 16, 14, ? || The rule is take away 2, so the next number is 12]]\n\n## Finding the rule\n1. Take the second number from the first. That is the **step**.\n2. Check the step with the next pair of numbers.\n3. Keep taking the step away to continue the pattern.\n\n[[diagram: numberline 0 20 step 2 jump 20>18 18>16 16>14 || Jumping back in twos]]\n\n## Where is the gap?\n- A gap at the end: take the step away from the last number.\n- A gap in the middle: take the step away from the number before the gap.\n- A gap at the start: **add** the step to the second number, because the first number is the biggest.\n\nIn Basic ${c.g} the step can be as large as ${maxStep}. Counting back is the same as subtracting, so you may check with a subtraction sum.${HOW}`,
    examples: `**Example 1.** 30, 25, 20, ?, 10\nThe step is 30 - 25 = 5. The number before the gap is 20, so the answer is 20 - 5 = **15**.\n\n**Example 2.** ?, 16, 12, 8\nThe step is 16 - 12 = 4. The first number is bigger than 16, so it is 16 + 4 = **20**.\n\n**Example 3.** 50, 40, 30, 20, ?\nThe step is 10. The next number is 20 - 10 = **10**.`,
    make: () => {
      const step = c.int(1, maxStep);
      const start = c.int(step * 5, Math.max(step * 5 + 5, top(c.g)));
      const seq = Array.from({ length: 5 }, (_, i) => start - i * step);
      const gap = c.int(c.g === 1 ? 2 : 0, 4);
      const shown = seq.map((v, i) => (i === gap ? "?" : String(v))).join(", ");
      return numQ(c, level(c.g), `Find the missing number in this pattern.\n[[diagram: sequence ${shown}]]`, seq[gap], `The rule is take away ${step} each time, so the missing number is ${seq[gap]}.`);
    },
  };
};

const bonds: Factory = (c) => ({
  title: "Number bonds: whole and parts",
  subtopics: ["A whole and its two parts", "Finding a missing part", "Finding the whole"],
  objectives: ["Explain that two parts join to make a whole", "Find a missing part when the whole and one part are known", "Find the whole when both parts are known"],
  summary: "A number bond shows a whole number and the two parts that make it. Add the parts to get the whole; take a part from the whole to get the other part.",
  notes: `## What is a number bond?\nA number bond is a picture of a **whole** number and the two **parts** that join to make it. The whole is at the top and the parts are underneath.\n\n[[diagram: bond 10 = 6 + 4 || 6 and 4 make 10]]\n\n## Two rules to remember\n- **Part + part = whole.** If you know both parts, add them.\n- **Whole - part = other part.** If you know the whole and one part, subtract.\n\n[[diagram: counters 6 + 4 || Six blue counters and four gold counters make ten]]\n\n## Why number bonds matter\nNumber bonds help you to add and subtract quickly in your head. If you know that 6 and 4 make 10, you also know that 10 - 6 = 4 and 10 - 4 = 6. One bond gives four number facts.\n\nIn Basic ${c.g} the whole can be as large as ${top(c.g)}. For big numbers, work with the tens first and then the units.${HOW}`,
  examples: `**Example 1.** The whole is 9 and one part is 5. Find the other part.\n9 - 5 = **4**.\n\n**Example 2.** The parts are 7 and 8. Find the whole.\n7 + 8 = **15**.\n\n**Example 3.** The whole is 20 and one part is 12. The other part is 20 - 12 = **8**. Check: 12 + 8 = 20.`,
  make: () => {
    const whole = c.int(Math.max(4, top(c.g) / 4), top(c.g));
    const a = c.int(1, whole - 1);
    if (c.int(0, 2) === 0) return numQ(c, level(c.g), `Find the whole.\n[[diagram: bond ? = ${a} + ${whole - a}]]`, whole, `Part + part = whole: ${a} + ${whole - a} = ${whole}.`);
    return numQ(c, level(c.g), `Find the missing part.\n[[diagram: bond ${whole} = ${a} + ?]]`, whole - a, `Whole - part = other part: ${whole} - ${a} = ${whole - a}.`);
  },
});

const triangleAdd: Factory = (c) => {
  const hi = [5, 9, 20, 40, 90, 200][c.g - 1];
  return {
    title: "Triangle puzzles: adding",
    subtopics: ["Reading a triangle puzzle", "Finding the adding rule", "Using the rule on a new triangle"],
    objectives: ["Describe where the numbers sit in a triangle puzzle", "Discover that the middle number is the sum of the corner numbers", "Find the missing middle number of a new triangle"],
    summary: "In these puzzles the number in the middle of each triangle is made by adding the numbers at the corners.",
    notes: `## How a triangle puzzle works\nEach triangle has numbers at its corners and one number in the middle. The same **rule** joins the corner numbers to the middle number in every triangle. Two triangles are complete; they are your **samples**. The last triangle has a question mark.\n\n[[diagram: puzzle triangle 3 4 7 ; 5 2 7 ; 6 3 ? || Corner numbers are added: 3 + 4 = 7 and 5 + 2 = 7, so 6 + 3 = 9]]\n\n## Steps\n1. Look at the first sample. Ask: "What can I do to the corner numbers to get the middle number?"\n2. Try adding. If 3 + 4 gives the middle number 7, adding may be the rule.\n3. **Test the rule on the second sample.** A rule is only right if it works for both samples.\n4. Use the rule on the last triangle.\n\n## A common mistake\nDo not stop after one sample. Many different rules can fit one triangle, but only the true rule fits both.\n\nIn Basic ${c.g} the corner numbers go up to ${hi}.${HOW}`,
    examples: `**Example 1.** Samples: 2 and 5 give 7; 4 and 4 give 8. Question: 6 and 1.\nThe rule is add: 2 + 5 = 7 and 4 + 4 = 8. So 6 + 1 = **7**.\n\n**Example 2.** Samples: 10 and 6 give 16; 9 and 8 give 17. Question: 7 and 7.\nThe rule is add, so 7 + 7 = **14**.`,
    make: () => {
      const p = () => [c.int(1, hi), c.int(1, hi)];
      const [a, b] = p();
      const [d, e] = p();
      const [x, y] = p();
      return numQ(c, level(c.g), `Study the samples, then find the missing number.\n[[diagram: puzzle triangle ${a} ${b} ${a + b} ; ${d} ${e} ${d + e} ; ${x} ${y} ?]]`, x + y, `The middle number is the sum of the corner numbers: ${x} + ${y} = ${x + y}.`);
    },
  };
};

const circleSubtract: Factory = (c) => {
  const hi = [9, 18, 40, 90, 300, 900][c.g - 1];
  return {
    title: "Circle puzzles: taking away",
    subtopics: ["Reading a circle puzzle", "Finding the subtracting rule", "Using the rule on a new circle"],
    objectives: ["Identify the outer and middle numbers of a circle puzzle", "Discover that the middle number is the difference of the outer numbers", "Find the missing middle number of a new circle"],
    summary: "In these puzzles the number in the middle of each circle is the difference between the two outer numbers.",
    notes: `## How a circle puzzle works\nEach circle has two numbers near its edge and one number in the middle. One rule works for every circle. In this lesson the rule is **take the smaller number from the bigger number**.\n\n[[diagram: puzzle circle 9 4 5 ; 8 6 2 ; 7 3 ? || 9 - 4 = 5 and 8 - 6 = 2, so 7 - 3 = 4]]\n\n## Steps\n1. Look at the first circle. The middle number is smaller than the biggest outer number, so the rule may be subtraction.\n2. Work it out: bigger number take away smaller number.\n3. Check the rule with the second circle.\n4. Use the rule on the circle with the question mark.\n\n## Adding or taking away?\n- If the middle number is **bigger** than both outer numbers, think of adding or multiplying.\n- If the middle number is **smaller** than the biggest outer number, think of taking away or dividing.\n\n[[diagram: counters 9 - 4 || Nine counters with four crossed out leaves five]]\n\nIn Basic ${c.g} the outer numbers go up to ${hi}.${HOW}`,
    examples: `**Example 1.** Samples: 10 and 3 give 7; 12 and 5 give 7. Question: 15 and 6.\nThe rule is subtract: 10 - 3 = 7 and 12 - 5 = 7. So 15 - 6 = **9**.\n\n**Example 2.** Samples: 20 and 8 give 12; 18 and 9 give 9. Question: 16 and 7.\n16 - 7 = **9**.`,
    make: () => {
      const p = () => {
        const big = c.int(3, hi);
        return [big, c.int(1, big - 1)];
      };
      const [a, b] = p();
      const [d, e] = p();
      const [x, y] = p();
      return numQ(c, level(c.g), `Study the samples, then find the missing number.\n[[diagram: puzzle circle ${a} ${b} ${a - b} ; ${d} ${e} ${d - e} ; ${x} ${y} ?]]`, x - y, `The middle number is the difference of the outer numbers: ${x} - ${y} = ${x - y}.`);
    },
  };
};

const boxTimes: Factory = (c) => {
  const doubles = c.g <= 2;
  const hi = [5, 10, 6, 9, 12, 15][c.g - 1];
  return {
    title: doubles ? "Box puzzles: doubles" : "Box puzzles: multiplying",
    subtopics: doubles ? ["What a double is", "Finding the doubling rule", "Doubling a new number"] : ["Reading a box puzzle", "Finding the multiplying rule", "Using the rule on a new box"],
    objectives: doubles ? ["Explain that a double is a number added to itself", "Discover the doubling rule from two samples", "Find the double of a new number"] : ["Identify the outer and middle numbers of a box puzzle", "Discover that the middle number is the product of the outer numbers", "Find the missing middle number of a new box"],
    summary: doubles ? "To double a number, add it to itself. In these box puzzles the middle number is double the outer number." : "In these box puzzles the number in the middle is found by multiplying the outer numbers.",
    notes: doubles
      ? `## What is a double?\nA **double** is a number added to itself. Double 3 is 3 + 3 = 6. Double 5 is 5 + 5 = 10.\n\n[[diagram: counters 4 + 4 || Double 4 is 4 + 4 = 8]]\n\n## The box puzzle\nEach box has one number near the edge and one number in the middle. In every box the middle number is **double** the outer number.\n\n[[diagram: puzzle box 3 6 ; 4 8 ; 5 ? || Double 3 is 6, double 4 is 8, so double 5 is 10]]\n\n## Steps\n1. Look at the first box. How do you get from the outer number to the middle number?\n2. Try adding the number to itself.\n3. Check with the second box.\n4. Double the number in the last box.\n\n## Doubles to learn by heart\n- Double 1 is 2, double 2 is 4, double 3 is 6, double 4 is 8, double 5 is 10.\n- Double 6 is 12, double 7 is 14, double 8 is 16, double 9 is 18, double 10 is 20.\n\nDoubles are always **even** numbers.${HOW}`
      : `## How a box puzzle works\nEach box has two numbers near its edge and one in the middle. The same rule works in every box. In this lesson the rule is **multiply the outer numbers**.\n\n[[diagram: puzzle box 3 4 12 ; 2 5 10 ; 6 3 ? || 3 × 4 = 12 and 2 × 5 = 10, so 6 × 3 = 18]]\n\n## How to spot multiplication\nThe middle number is much **bigger** than the outer numbers. If adding does not give the middle number, try multiplying.\n\n[[diagram: array 3 x 4 || 3 rows of 4 dots: 3 × 4 = 12]]\n\n## Steps\n1. Try adding the outer numbers of the first box. Does it give the middle number? If not, multiply.\n2. Check the rule with the second box.\n3. Multiply the outer numbers of the last box.\n\n## Tip\nKnow your times tables up to ${hi} × ${hi}. If you forget a fact, build it from one you know: 6 × 7 is 6 × 6 and one more 6, which is 36 + 6 = 42.${HOW}`,
    examples: doubles
      ? `**Example 1.** Samples: 2 gives 4; 6 gives 12. Question: 7.\nThe rule is double. 7 + 7 = **14**.\n\n**Example 2.** Samples: 5 gives 10; 8 gives 16. Question: 9.\n9 + 9 = **18**.\n\n**Example 3.** Samples: 1 gives 2; 3 gives 6. Question: 10.\n10 + 10 = **20**.`
      : `**Example 1.** Samples: 4 and 5 give 20; 3 and 6 give 18. Question: 7 and 2.\nThe rule is multiply: 4 × 5 = 20 and 3 × 6 = 18. So 7 × 2 = **14**.\n\n**Example 2.** Samples: 8 and 3 give 24; 5 and 5 give 25. Question: 6 and 4.\n6 × 4 = **24**.`,
    make: () => {
      if (doubles) {
        const [a, d, x] = c.shuffle(Array.from({ length: hi * 2 }, (_, i) => i + 1));
        return numQ(c, "E", `Study the samples, then find the missing number.\n[[diagram: puzzle box ${a} ${a * 2} ; ${d} ${d * 2} ; ${x} ?]]`, x * 2, `The middle number is double the outer number: ${x} + ${x} = ${x * 2}.`);
      }
      const p = () => [c.int(2, hi), c.int(2, hi)];
      const [a, b] = p();
      const [d, e] = p();
      const [x, y] = p();
      return numQ(c, level(c.g), `Study the samples, then find the missing number.\n[[diagram: puzzle box ${a} ${b} ${a * b} ; ${d} ${e} ${d * e} ; ${x} ${y} ?]]`, x * y, `The middle number is the product of the outer numbers: ${x} × ${y} = ${x * y}.`);
    },
  };
};

const missingInSums: Factory = (c) => ({
  title: "Missing numbers in number sentences",
  subtopics: ["Number sentences with a box", "Using the opposite operation", "Checking the answer"],
  objectives: ["Read a number sentence that has an empty box", "Use the opposite operation to find the missing number", "Check the answer by putting it back in the number sentence"],
  summary: "A box in a number sentence stands for a missing number. Use the opposite operation to find it, then check.",
  notes: `## A box stands for a number\nIn the number sentence □ + 4 = 9, the box □ is hiding a number. Your job is to find it.\n\n## Opposite operations\n- Adding and taking away are **opposites**.\n- Multiplying and dividing are **opposites**.\n\nTo free the box, do the opposite of what is being done to it.\n\n| Number sentence | What to do | Answer |\n|---|---|---|\n| □ + 4 = 9 | 9 - 4 | 5 |\n| □ - 3 = 6 | 6 + 3 | 9 |\n| 7 + □ = 12 | 12 - 7 | 5 |\n| 10 - □ = 4 | 10 - 4 | 6 |\n\n[[diagram: bond 9 = ? + 4 || □ + 4 = 9 is a number bond with a missing part]]\n\n## Be careful with take-away sentences\nIn 10 - □ = 4 the box is the number taken away. It is found by 10 - 4, not by adding.\n\n## Always check\nPut your answer in the box and work out the sentence. If both sides are equal, you are right.${c.g >= 4 ? "\n\n## Multiplying and dividing\n□ × 6 = 42 means some number of sixes make 42. Divide: 42 ÷ 6 = 7. For □ ÷ 5 = 8, multiply: 8 × 5 = 40." : ""}${HOW}`,
  examples: `**Example 1.** □ + 6 = 14.\nDo the opposite of adding 6: 14 - 6 = **8**. Check: 8 + 6 = 14.\n\n**Example 2.** □ - 5 = 9.\nDo the opposite of taking away 5: 9 + 5 = **14**. Check: 14 - 5 = 9.\n\n**Example 3.** 20 - □ = 13.\nThe box is the number taken away: 20 - 13 = **7**. Check: 20 - 7 = 13.`,
  make: () => {
    const kind = c.int(0, c.g >= 4 ? 5 : 3);
    const t = top(c.g);
    if (kind === 0) {
      const a = c.int(1, t / 2);
      const x = c.int(1, t / 2);
      return numQ(c, level(c.g), `□ + ${a} = ${a + x}. What number is in the box?`, x, `Do the opposite: ${a + x} - ${a} = ${x}.`);
    }
    if (kind === 1) {
      const a = c.int(1, t / 2);
      const x = c.int(a + 1, t);
      return numQ(c, level(c.g), `□ - ${a} = ${x - a}. What number is in the box?`, x, `Do the opposite: ${x - a} + ${a} = ${x}.`);
    }
    if (kind === 2) {
      const a = c.int(1, t / 2);
      const x = c.int(1, t / 2);
      return numQ(c, level(c.g), `${a} + □ = ${a + x}. What number is in the box?`, x, `Take ${a} from ${a + x}: ${a + x} - ${a} = ${x}.`);
    }
    if (kind === 3) {
      const a = c.int(3, t);
      const x = c.int(1, a - 1);
      return numQ(c, level(c.g), `${a} - □ = ${a - x}. What number is in the box?`, x, `The box is what was taken away: ${a} - ${a - x} = ${x}.`);
    }
    const a = c.int(2, 12);
    const x = c.int(2, c.g >= 6 ? 20 : 12);
    if (kind === 4) return numQ(c, "H", `□ × ${a} = ${a * x}. What number is in the box?`, x, `Divide: ${a * x} ÷ ${a} = ${x}.`);
    return numQ(c, "H", `□ ÷ ${a} = ${x}. What number is in the box?`, a * x, `Multiply: ${x} × ${a} = ${a * x}.`);
  },
});

const machines: Factory = (c) => ({
  title: "Number machines",
  subtopics: ["Input, rule and output", "Finding the output", "Finding the input by working backwards"],
  objectives: ["Explain what the input, rule and output of a number machine are", "Find the output when the input and rule are given", "Work backwards to find the input"],
  summary: "A number machine takes a number in, follows its rule and sends a new number out. Work forwards for the output and backwards for the input.",
  notes: `## What is a number machine?\nA number machine has three parts.\n- The **input** is the number that goes in.\n- The **rule** is what the machine does, such as "+ 3".\n- The **output** is the number that comes out.\n\n[[diagram: flow IN 5 -> + 3 -> OUT 8 || 5 goes in, the machine adds 3, and 8 comes out]]\n\n## Finding the output\nStart with the input and do what the rule says. If 9 goes into a "+ 4" machine, the output is 9 + 4 = 13.\n\n## Finding the input\nSometimes you know the output and must find the input. **Work backwards** and do the opposite of the rule.\n\n[[diagram: flow IN ? -> + 3 -> OUT 10 || Work backwards: 10 - 3 = 7]]\n${c.g >= 3 ? "\n## Two-step machines\nSome machines have two rules, one after the other. Do the first rule, then the second.\n\n[[diagram: flow IN 4 -> × 2 -> + 1 -> OUT 9 || 4 × 2 = 8, then 8 + 1 = 9]]\n\nTo work backwards through two steps, undo the **last** rule first.\n" : ""}\n## Remember\nForwards: follow the rule. Backwards: do the opposite.${HOW}`,
  examples: `**Example 1.** Input 6, rule "+ 5". Output = 6 + 5 = **11**.\n\n**Example 2.** Rule "- 4", output 9. Work backwards: 9 + 4 = **13** went in.\n\n**Example 3.** Input 3, rules "× 4" then "- 2". First 3 × 4 = 12, then 12 - 2 = **10**.`,
  make: () => {
    const t = top(c.g);
    const kind = c.int(0, c.g >= 3 ? 3 : 2);
    const n = c.int(1, Math.max(6, t / 4));
    const k = c.int(1, Math.max(4, t / 5));
    if (kind === 0) return numQ(c, level(c.g), `What number comes out of the machine?\n[[diagram: flow IN ${n} -> + ${k} -> OUT ?]]`, n + k, `The machine adds ${k}: ${n} + ${k} = ${n + k}.`);
    if (kind === 1) return numQ(c, level(c.g), `What number comes out of the machine?\n[[diagram: flow IN ${n + k} -> - ${k} -> OUT ?]]`, n, `The machine takes away ${k}: ${n + k} - ${k} = ${n}.`);
    if (kind === 2) return numQ(c, level(c.g), `What number went into the machine?\n[[diagram: flow IN ? -> + ${k} -> OUT ${n + k}]]`, n, `Work backwards: ${n + k} - ${k} = ${n}.`);
    const m = c.int(2, c.g >= 5 ? 9 : 5);
    const a = c.int(2, 12);
    return numQ(c, "H", `What number comes out of the machine?\n[[diagram: flow IN ${a} -> × ${m} -> + ${k} -> OUT ?]]`, a * m + k, `First ${a} × ${m} = ${a * m}, then ${a * m} + ${k} = ${a * m + k}.`);
  },
});

const oddOne: Factory = (c) => {
  const lower = c.g <= 2;
  return {
    title: "Odd one out with numbers",
    subtopics: lower ? ["Even numbers and odd numbers", "Finding what numbers share", "Choosing the number that does not belong"] : ["Multiples of a number", "Finding what numbers share", "Choosing the number that does not belong"],
    objectives: ["State what three of the four numbers have in common", "Identify the number that does not share the property", "Give a reason for the choice"],
    summary: "Three numbers in the group share something. The odd one out is the number that does not.",
    notes: lower
      ? `## Even and odd numbers\n- **Even** numbers can be shared into two equal groups. They end in 0, 2, 4, 6 or 8.\n- **Odd** numbers always have one left over. They end in 1, 3, 5, 7 or 9.\n\n[[diagram: counters 4 + 4 || 8 is even: two equal groups of 4]]\n\n## Finding the odd one out\nIn a group of four numbers, three are alike. One is different: it is the **odd one out**.\n1. Look at the last digit of each number.\n2. Decide whether each number is even or odd.\n3. The number that is different from the other three is the answer.\n\n## Example to study\nLook at 2, 6, 9, 4. The numbers 2, 6 and 4 are even. The number 9 is odd, so 9 is the odd one out.\n\n[[diagram: sequence 2, 6, 9, 4 || 9 is the only odd number]]\n\n## Take care\nThe words "odd one out" do not always mean an odd number. Sometimes three numbers are odd and the one that does not belong is the **even** number. Always check all four numbers before you choose.${HOW}`
      : `## What is a multiple?\nThe **multiples** of a number are the answers in its times table. The multiples of 3 are 3, 6, 9, 12, 15 and so on.\n\n[[diagram: numberline 0 30 step 3 jump 0>3 3>6 6>9 9>12 || Multiples of 3 are equal jumps of 3 from zero]]\n\n## Finding the odd one out\nIn a group of four numbers, three share a property and one does not.\n1. Ask what the numbers could share: the same times table, all even, all odd${c.g >= 5 ? ", all square numbers" : ""}.\n2. Test each number. To test for a multiple, divide. If there is no remainder, it is a multiple.\n3. The number that fails the test is the **odd one out**.\n\n## Quick tests\n- Multiples of 2 end in 0, 2, 4, 6 or 8.\n- Multiples of 5 end in 0 or 5.\n- Multiples of 10 end in 0.\n- For multiples of 3, add the digits; the total is in the 3 times table.\n${c.g >= 5 ? "\n## Square numbers\nA square number is a number times itself: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.\n\n[[diagram: array 4 x 4 || 4 × 4 = 16 is a square number]]\n" : ""}\n## Example to study\nLook at 12, 18, 25, 30. Three of them, 12, 18 and 30, are multiples of 6. The number 25 is not, so 25 is the odd one out.${HOW}`,
    examples: lower
      ? `**Example 1.** 3, 7, 4, 9.\n3, 7 and 9 are odd. 4 is even, so **4** is the odd one out.\n\n**Example 2.** 10, 12, 15, 18.\n10, 12 and 18 are even. **15** is the odd one out.\n\n**Example 3.** 1, 5, 8, 11.\n1, 5 and 11 are odd. **8** is the odd one out.`
      : `**Example 1.** 8, 12, 15, 20.\n8, 12 and 20 are multiples of 4. 15 is not, so **15** is the odd one out.\n\n**Example 2.** 9, 14, 21, 27.\n9, 21 and 27 are multiples of 3. **14** is the odd one out.\n\n**Example 3.** 10, 25, 32, 40.\n10, 25 and 40 are multiples of 5. **32** is the odd one out.`,
    make: () => {
      if (lower) {
        const even = c.int(0, 1) === 0;
        const pool = c.shuffle(Array.from({ length: top(c.g) + 8 }, (_, i) => i + 1));
        const same = pool.filter((n) => (n % 2 === 0) === even).slice(0, 3);
        const odd = pool.find((n) => (n % 2 === 0) !== even)!;
        const shown = c.shuffle([...same, odd]);
        return wordQ("E", `Which number is the odd one out: ${shown.join(", ")}?`, String(odd), same.map(String), `${same.join(", ")} are ${even ? "even" : "odd"} numbers, but ${odd} is ${even ? "odd" : "even"}.`);
      }
      const k = c.int(3, c.g >= 5 ? 12 : 9);
      const same = c.shuffle(Array.from({ length: 12 }, (_, i) => (i + 1) * k)).slice(0, 3);
      let odd = c.int(k + 1, k * 12);
      while (odd % k === 0) odd++;
      const shown = c.shuffle([...same, odd]);
      return wordQ(level(c.g), `Which number is the odd one out: ${shown.join(", ")}?`, String(odd), same.map(String), `${same.join(", ")} are multiples of ${k}, but ${odd} is not.`);
    },
  };
};

const ordering: Factory = (c) => ({
  title: "Comparing and ordering numbers",
  subtopics: ["Greater than and less than", "Finding the greatest and the smallest", "Numbers in between"],
  objectives: ["Compare two numbers using place value", "Choose the greatest or smallest number in a group", "Find a number that lies between two given numbers"],
  summary: "Compare numbers by looking at the digit with the highest place value first. Use this to find the greatest, the smallest and numbers in between.",
  notes: `## Comparing numbers\nTo compare two numbers, look at the digit with the **highest place value** first.\n- The number with more digits is greater: 105 is greater than 98.\n- If they have the same number of digits, compare from the left: 47 is greater than 43 because both have 4 tens but 7 units is more than 3 units.\n\n[[diagram: placevalue 47 || 47 is 4 tens and 7 units]]\n\n## The signs\n- **>** means "is greater than": 9 > 5.\n- **<** means "is less than": 5 < 9.\n- The open end of the sign always faces the bigger number.\n\n## On a number line\nNumbers get bigger as you move to the right. The number furthest to the right is the greatest.\n\n[[diagram: numberline 0 20 step 2 mark 6 14 || 14 is to the right of 6, so 14 is greater than 6]]\n\n## Ordering a group\n- **Ascending order** means smallest to greatest.\n- **Descending order** means greatest to smallest.\n\nFind the smallest first, cross it out, then find the next smallest, and so on.\n\nIn Basic ${c.g} you compare numbers up to ${top(c.g)}.${HOW}`,
  examples: `**Example 1.** Which is the greatest: 36, 63, 39, 60?\nCompare the tens: 6 tens is more than 3 tens, so look at 63 and 60. 63 has more units, so the greatest is **63**.\n\n**Example 2.** Which is the smallest: 18, 81, 11, 80?\nThe numbers with 1 ten are 18 and 11. 11 has fewer units, so the smallest is **11**.\n\n**Example 3.** Which number lies between 24 and 28: 22, 26, 29, 30?\nOnly **26** is more than 24 and less than 28.`,
  make: () => {
    const t = top(c.g);
    const pool = c.shuffle(Array.from({ length: t }, (_, i) => i + 1)).slice(0, 4);
    const kind = c.int(0, 2);
    if (kind === 2) {
      const lo = c.int(1, t - 6);
      const hi = lo + c.int(3, 5);
      const ans = c.int(lo + 1, hi - 1);
      const wrong = [lo - 1, hi + 1, hi + 3].map((v) => String(Math.max(0, v)));
      return wordQ(level(c.g), `Which number lies between ${lo} and ${hi}?`, String(ans), wrong, `${ans} is more than ${lo} and less than ${hi}.`);
    }
    const ans = kind === 0 ? Math.max(...pool) : Math.min(...pool);
    return wordQ(level(c.g), `Which is the ${kind === 0 ? "greatest" : "smallest"} of these numbers: ${pool.join(", ")}?`, String(ans), pool.filter((v) => v !== ans).map(String), `${ans} is the ${kind === 0 ? "greatest" : "smallest"} number in the group.`);
  },
});

const SYMBOLS = ["▲", "●", "■", "★", "◆"];
const symbolSums: Factory = (c) => ({
  title: "Symbol sums",
  subtopics: ["Shapes that stand for numbers", "Replacing each shape with its number", "Working out the sum"],
  objectives: ["Explain that a shape can stand for a number", "Replace each shape in a sum with its number", "Work out the value of a sum written with shapes"],
  summary: "In symbol sums each shape stands for a number. Swap every shape for its number, then work out the sum.",
  notes: `## Shapes instead of numbers\nIn a symbol sum, each shape has a **value**. The question tells you the value of each shape. For example: ▲ = 3 and ● = 5.\n\n[[diagram: shapes triangle, circle, square || Each shape can stand for a number]]\n\n## Steps\n1. Write the sum again, but put the number in place of each shape.\n2. Work out the sum from left to right.\n3. Check that you used the right number for each shape.\n\n## Worked idea\nIf ▲ = 3 and ● = 5, then ▲ + ● + ▲ becomes 3 + 5 + 3, which is 11.\n\n[[diagram: counters 3 + 5 || ▲ + ● is 3 + 5 = 8]]\n\n## Same shape, same number\nA shape keeps the same value all through one question. If ▲ is 3 at the start of the sum, it is 3 every time it appears.\n${c.g >= 4 ? "\n## Multiplying shapes\nIn Basic " + c.g + " some sums multiply: if ■ = 4 and ★ = 6, then ■ × ★ = 4 × 6 = 24. When a sum has both × and +, do the multiplication first.\n" : ""}\n## Why this matters\nUsing a shape or a letter for a number is the first step towards algebra, which you will meet in later classes.${HOW}`,
  examples: `**Example 1.** ▲ = 2 and ● = 6. Find ▲ + ●.\n2 + 6 = **8**.\n\n**Example 2.** ■ = 4 and ★ = 7. Find ★ + ■ + ■.\n7 + 4 + 4 = **15**.\n\n**Example 3.** ◆ = 10 and ● = 3. Find ◆ - ● - ●.\n10 - 3 - 3 = **4**.

**Example 4.** ▲ = 5. Find ▲ + ▲ + ▲.
The same shape always has the same value: 5 + 5 + 5 = **15**.`,
  make: () => {
    const [s1, s2] = c.shuffle(SYMBOLS);
    const hi = [5, 9, 15, 20, 30, 50][c.g - 1];
    const a = c.int(1, hi);
    const b = c.int(1, hi);
    const kind = c.int(0, c.g >= 4 ? 3 : 2);
    if (kind === 0) return numQ(c, level(c.g), `If ${s1} = ${a} and ${s2} = ${b}, what is ${s1} + ${s2}?`, a + b, `Replace the shapes: ${a} + ${b} = ${a + b}.`);
    if (kind === 1) return numQ(c, level(c.g), `If ${s1} = ${a} and ${s2} = ${b}, what is ${s1} + ${s2} + ${s1}?`, a + b + a, `Replace the shapes: ${a} + ${b} + ${a} = ${a + b + a}.`);
    if (kind === 2) return numQ(c, level(c.g), `If ${s1} = ${a + b} and ${s2} = ${b}, what is ${s1} - ${s2}?`, a, `Replace the shapes: ${a + b} - ${b} = ${a}.`);
    const m = c.int(2, 9);
    const n = c.int(2, 9);
    return numQ(c, "H", `If ${s1} = ${m} and ${s2} = ${n}, what is ${s1} × ${s2} + ${s1}?`, m * n + m, `Multiply first: ${m} × ${n} = ${m * n}, then add ${m} to get ${m * n + m}.`);
  },
});

const SHAPES: [string, number][] = [["triangle", 3], ["square", 4], ["rectangle", 4], ["pentagon", 5], ["hexagon", 6], ["octagon", 8]];
const shapeCount: Factory = (c) => ({
  title: "Shapes and their sides",
  subtopics: ["Names of plane shapes", "Counting sides and corners", "Sides of several shapes together"],
  objectives: ["Name common plane shapes", "State the number of sides and corners of each shape", "Work out the total number of sides of several shapes"],
  summary: "Each plane shape has a fixed number of sides and corners. Use these facts to solve counting puzzles about shapes.",
  notes: `## Plane shapes\nA plane shape is flat. It is named by the number of **sides** it has. A **corner** is where two sides meet.\n\n[[diagram: shapes triangle, square, rectangle || Three plane shapes]]\n\n| Shape | Sides | Corners |\n|---|---|---|\n| Triangle | 3 | 3 |\n| Square | 4 | 4 |\n| Rectangle | 4 | 4 |\n| Pentagon | 5 | 5 |\n| Hexagon | 6 | 6 |\n| Octagon | 8 | 8 |\n\nA circle has no straight sides and no corners.\n\n[[diagram: shapes pentagon, hexagon, octagon || Shapes with five, six and eight sides]]\n\n## Square or rectangle?\nBoth have 4 sides and 4 corners. A square has four **equal** sides. A rectangle has two long sides and two short sides.\n\n## Counting sides of many shapes\nTo find the sides of several shapes of the same kind, multiply or add again and again. Three triangles have 3 + 3 + 3 = 9 sides.\n\n## Tip\nA shape always has the same number of corners as sides. If you forget one, count the other.${HOW}`,
  examples: `**Example 1.** How many sides have 2 squares altogether?\nOne square has 4 sides. 4 + 4 = **8**.\n\n**Example 2.** How many corners have 3 triangles altogether?\nOne triangle has 3 corners. 3 + 3 + 3 = **9**.\n\n**Example 3.** How many sides have 1 pentagon and 1 hexagon together?\n5 + 6 = **11**.`,
  make: () => {
    const [name, sides] = c.pick(SHAPES.slice(0, c.g === 1 ? 4 : 6));
    const n = c.int(c.g, c.g + 4);
    const what = c.int(0, 1) === 0 ? "sides" : "corners";
    if (c.int(0, 3) === 0) {
      const [name2, sides2] = c.pick(SHAPES.filter((s) => s[0] !== name));
      return numQ(c, level(c.g), `How many ${what} have ${n} ${name}s and 1 ${name2} altogether?`, n * sides + sides2, `${n} ${name}s have ${n * sides} ${what} and a ${name2} has ${sides2}: ${n * sides} + ${sides2} = ${n * sides + sides2}.`);
    }
    return numQ(c, level(c.g), `How many ${what} have ${n} ${name}s altogether?`, n * sides, `One ${name} has ${sides} ${what}, so ${n} have ${n} × ${sides} = ${n * sides}.`);
  },
});

const growing: Factory = (c) => ({
  title: "Number patterns: multiplying and growing steps",
  subtopics: ["Patterns that multiply", "Patterns whose step grows", "Square number patterns"],
  objectives: ["Recognise a pattern in which each number is multiplied by the same number", "Recognise a pattern in which the step grows by one each time", "Find the next number in such patterns"],
  summary: "Not every pattern adds the same number. Some multiply each time, and in some the step itself grows.",
  notes: `## When the step is not the same\nWrite the difference between each pair of numbers. If the differences are **not** equal, the rule is not simple adding. Look for one of these.\n\n## 1. Multiplying patterns\nEach number is multiplied by the same number to get the next.\n\n[[diagram: sequence 2, 4, 8, 16, ? || Each number is doubled, so the next is 32]]\n\nTest: divide a number by the one before it. If you always get the same answer, that answer is the multiplier.\n\n## 2. Growing steps\nThe step gets bigger by one each time: +1, +2, +3, +4.\n\n[[diagram: sequence 1, 2, 4, 7, 11, ? || The steps are +1, +2, +3, +4, so the next step is +5 and the answer is 16]]\n\nWrite the steps underneath the pattern. The steps make a pattern of their own.\n\n## 3. Square numbers\n1, 4, 9, 16, 25 are 1 × 1, 2 × 2, 3 × 3, 4 × 4, 5 × 5. The next is 6 × 6 = 36.\n\n[[diagram: array 3 x 3 || 3 × 3 = 9 is a square number]]\n\n## Which rule is it?\n1. Equal differences: an adding pattern.\n2. Differences that grow by one: a growing-step pattern.\n3. Numbers that grow very fast: try multiplying.${HOW}`,
  examples: `**Example 1.** 3, 6, 12, 24, ?\nEach number is doubled. 24 × 2 = **48**.\n\n**Example 2.** 2, 3, 5, 8, 12, ?\nThe steps are +1, +2, +3, +4. The next step is +5: 12 + 5 = **17**.\n\n**Example 3.** 4, 9, 16, 25, ?\nThese are 2 × 2, 3 × 3, 4 × 4, 5 × 5. Next is 6 × 6 = **36**.`,
  make: () => {
    const kind = c.int(0, 2);
    const seq: number[] = [];
    let why = "";
    if (kind === 0) {
      const m = c.int(2, c.g >= 5 ? 4 : 3);
      const s = c.int(1, c.g >= 5 ? 6 : 4);
      for (let i = 0; i < 5; i++) seq.push(s * m ** i);
      why = `Each number is multiplied by ${m}: ${seq[3]} × ${m} = ${seq[4]}.`;
    } else if (kind === 1) {
      let v = c.int(1, top(c.g) / 5);
      let step = c.int(1, 4);
      for (let i = 0; i < 5; i++) {
        seq.push(v);
        v += step;
        step++;
      }
      why = `The step grows by one each time; the last step is +${seq[4] - seq[3]}, giving ${seq[4]}.`;
    } else {
      const s = c.int(1, c.g >= 5 ? 9 : 5);
      for (let i = 0; i < 5; i++) seq.push((s + i) ** 2);
      why = `These are square numbers; the next is ${s + 4} × ${s + 4} = ${seq[4]}.`;
    }
    return numQ(c, c.g >= 5 ? "H" : "M", `Find the next number.\n[[diagram: sequence ${seq.slice(0, 4).join(", ")}, ?]]`, seq[4], why);
  },
});

const twoStep: Factory = (c) => ({
  title: "Two-step triangle puzzles",
  subtopics: ["Puzzles that need two operations", "Testing a rule on both samples", "Using a two-step rule"],
  objectives: ["Recognise when one operation does not explain a puzzle", "Find a two-step rule that fits both samples", "Use the two-step rule to find the missing number"],
  summary: "Some puzzles need two steps: add the two bottom numbers, then multiply by the top number.",
  notes: `## When one step is not enough\nSometimes adding the corner numbers does not give the middle number, and multiplying them does not either. Then the rule has **two steps**.\n\nIn these triangles there are three corner numbers: left, right and top.\n\n[[diagram: puzzle triangle 2 3 2 10 ; 1 4 3 15 ; 3 3 2 ? || Add the bottom corners, then multiply by the top: (2 + 3) × 2 = 10 and (1 + 4) × 3 = 15, so (3 + 3) × 2 = 12]]\n\n## Steps\n1. Add the two bottom corner numbers.\n2. Multiply the answer by the top corner number.\n3. Check that this gives the middle number in **both** samples.\n4. Do the same two steps on the last triangle.\n\n## Brackets\nWe write the rule as (left + right) × top. The brackets tell us to add first. Without brackets, multiplication would come first, and the answer would be different.\n\n## How to search for a rule\n- Try one operation: add, subtract, multiply.\n- If none works, combine two: add then multiply, multiply then add, add then subtract.\n- Keep the rule that fits every sample.\n\nBe patient. Reasoning questions reward careful testing, not guessing.${HOW}`,
  examples: `**Example 1.** Samples: 1, 2, top 4 gives 12; 3, 2, top 2 gives 10. Question: 4, 1, top 3.\nRule: (left + right) × top. (1 + 2) × 4 = 12 and (3 + 2) × 2 = 10. So (4 + 1) × 3 = **15**.\n\n**Example 2.** Samples: 2, 2, top 5 gives 20; 6, 1, top 2 gives 14. Question: 3, 5, top 2.\n(3 + 5) × 2 = **16**.`,
  make: () => {
    const hi = c.g + 3;
    const t = () => [c.int(1, hi), c.int(1, hi), c.int(2, c.g >= 6 ? 6 : 4)];
    const [a, b, k] = t();
    const [d, e, m] = t();
    const [x, y, n] = t();
    return numQ(c, "H", `Study the samples, then find the missing number.\n[[diagram: puzzle triangle ${a} ${b} ${k} ${(a + b) * k} ; ${d} ${e} ${m} ${(d + e) * m} ; ${x} ${y} ${n} ?]]`, (x + y) * n, `Add the bottom corners and multiply by the top: (${x} + ${y}) × ${n} = ${(x + y) * n}.`);
  },
});

const plan = (g: number): Factory[] => [
  g >= 4 ? growing : countOn,
  countBack,
  bonds,
  triangleAdd,
  circleSubtract,
  boxTimes,
  missingInSums,
  machines,
  oddOne,
  ordering,
  symbolSums,
  g >= 4 ? twoStep : g === 3 ? growing : shapeCount,
];

export const quantitativeReasoning: SubjectPack = {
  code: "QRE",
  name: "Quantitative Reasoning",
  version: "2026.1",
  classes: ["BASIC1", "BASIC2", "BASIC3", "BASIC4", "BASIC5", "BASIC6"],
  entrance: true,
  terms: buildPrimaryTerms("QRE", plan),
};
