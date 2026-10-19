/**
 * An illustration for a lesson that has none. Many lessons were written as text only; where the
 * topic is one a picture explains well (fractions, angles, the water cycle …), the matching diagram
 * is drawn above the notes automatically. A lesson that already has its own diagram or picture is
 * left exactly as the teacher wrote it, and the teacher can always add a better one in the editor.
 */

const RULES: [RegExp, string, string][] = [
  [/\bpie charts?/i, "pie Rent=40, Food=35, Savings=25", "A pie chart shares a whole into parts"],
  [/\b(fractions?|halves|half|quarters?|thirds?)\b/i, "fraction 3/4", "Three quarters: 3 parts shaded out of 4"],
  [/\b(place value|decimals?|hundreds|tens and units)\b/i, "placevalue 345", "Hundreds, tens and units"],
  [/\b(multiplication|multiply|times table|product)\b/i, "array 3 x 4", "3 rows of 4 make 12"],
  [/\b(subtraction|subtract|take away|difference)\b/i, "counters 9 - 4", "Taking 4 away from 9"],
  [/\b(addition|adding|sum of)\b/i, "counters 5 + 3", "Putting 5 and 3 together"],
  [/\b(number line|integers?|negative numbers?|directed numbers?)\b/i, "numberline 0 10 mark 4 jump 4>7", "Moving along a number line"],
  [/\b(sequences?|number patterns?|patterns?|series)\b/i, "sequence 2, 4, 6, ?, 10", "Find the missing term"],
  [/\b(tally|tallies)\b/i, "tally 7", "Tally marks are bundled in fives"],
  [/\b(statistics|bar charts?|pictograms?|data handling|frequency|histograms?)\b/i, "bars Mon=4, Tue=7, Wed=5, Thu=6", "A bar chart compares amounts"],
  [/\b(angles?|bearing|protractor)\b/i, "angle 60", "An angle of 60 degrees"],
  [/\b(volume|capacity|cuboid|cylinder|three-dimensional|3-d|solid shapes?)\b/i, "shapes cube, cuboid, cylinder", "Solid shapes"],
  [/\b(triangles?|polygons?|quadrilaterals?|plane shapes?|two-dimensional|2-d|perimeter|area|geometry|shapes?)\b/i, "shapes triangle, square, rectangle, circle", "Plane shapes"],
  [/\b(telling the time|clock|time)\b/i, "clock 3:30", "Half past three"],
  [/\b(alphabet|letters of|phonics|letter sounds?)\b/i, "alphabet", "The letters of the alphabet"],
  [/\b(water cycle|evaporation|condensation|rainfall)\b/i, "flow Evaporation -> Condensation -> Rain -> Collection", "The water cycle"],
  [/\bphotosynthesis\b/i, "flow Sunlight -> Green leaf -> Food -> Oxygen", "How a green plant makes food"],
  [/\b(digestion|digestive|alimentary)\b/i, "flow Mouth -> Stomach -> Small intestine -> Large intestine", "The path of food through the body"],
  [/\b(life cycle|metamorphosis)\b/i, "flow Egg -> Larva -> Pupa -> Adult", "The life cycle of an insect"],
  [/\b(food chain|food web|feeding relationship)\b/i, "flow Grass -> Grasshopper -> Frog -> Snake", "A food chain"],
  [/\b(circulatory|circulation|the heart|blood)\b/i, "flow Heart -> Arteries -> Body -> Veins", "How blood travels round the body"],
  [/\b(respiratory|respiration|breathing)\b/i, "flow Nose -> Windpipe -> Lungs -> Blood", "The path of air into the body"],
  [/\b(states of matter|solids?, liquids?|melting|freezing|change of state)\b/i, "flow Solid -> Liquid -> Gas", "The three states of matter"],
  [/\b(electric circuit|circuits?|electricity)\b/i, "flow Battery -> Switch -> Bulb -> Battery", "A simple electric circuit"],
  [/\b(computer|input devices?|output devices?|data processing|information processing)\b/i, "flow Input -> Processing -> Output", "How a computer works"],
  [/\b(arms of government|tiers of government|legislature|executive|judiciary)\b/i, "flow Legislature -> Executive -> Judiciary", "The three arms of government"],
  [/\b(distribution|channels? of distribution|trade|marketing|commerce)\b/i, "flow Producer -> Wholesaler -> Retailer -> Consumer", "How goods reach the buyer"],
  [/\b(communication|letter writing)\b/i, "flow Sender -> Message -> Receiver -> Feedback", "How communication works"],
  [/\b(essays?|compositions?|narrative|descriptive writing|writing)\b/i, "flow Plan -> Draft -> Check -> Final copy", "The steps of good writing"],
  [/\b(scientific method|experiments?|investigation)\b/i, "flow Question -> Guess -> Test -> Result", "How scientists find out"],
  [/\b(farming|crop production|cultivation|agricultur)/i, "flow Clearing -> Planting -> Weeding -> Harvesting", "The farming year"],
  [/\b(budget|saving|money)\b/i, "pie Needs=50, Savings=20, Wants=30", "One way to share out money"],
];

const HAS_FIGURE = /\[\[(diagram|image|listen):/;

/** The diagram line and caption for a lesson with no figure of its own, or null when none fits. */
export function autoFigure(title: string, topic: string | null | undefined, ...texts: (string | null | undefined)[]): { spec: string; caption: string } | null {
  if (texts.some((t) => t && HAS_FIGURE.test(t))) return null;
  const subject = `${title} ${topic ?? ""}`;
  const hit = RULES.find(([re]) => re.test(subject));
  return hit ? { spec: hit[1], caption: hit[2] } : null;
}

export const AUTO_FIGURE_SPECS = RULES.map((r) => r[1]);
