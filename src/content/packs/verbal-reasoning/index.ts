/**
 * Verbal Reasoning, Basic 1–Basic 6. Original material written for Precious PS Academy to support
 * the reasoning strand of the Nigerian Basic Education (NERDC) English Studies curriculum.
 */
import type { SubjectPack } from "../types";
import { buildPrimaryTerms, level, numQ, wordQ, type Ctx, type Factory } from "../primary/gen";

const L = (i: number) => String.fromCharCode(65 + (((i % 26) + 26) % 26));
const HOW = "\n\n## How to answer in a test\n- Read the whole question before you look at the options.\n- Say the words quietly to yourself.\n- Cross out the options you know are wrong.\n- Check your choice against the question once more.";

/* ------------------------------------------------------------------ data */

type Pair = [string, string];
const ANTONYMS: Record<1 | 2 | 3, Pair[]> = {
  1: [["big", "small"], ["hot", "cold"], ["up", "down"], ["in", "out"], ["day", "night"], ["happy", "sad"], ["fast", "slow"], ["open", "shut"], ["wet", "dry"], ["left", "right"], ["old", "new"], ["good", "bad"], ["full", "empty"], ["clean", "dirty"], ["hard", "soft"], ["come", "go"], ["on", "off"], ["push", "pull"], ["early", "late"], ["boy", "girl"], ["black", "white"], ["yes", "no"]],
  2: [["begin", "end"], ["heavy", "light"], ["strong", "weak"], ["rich", "poor"], ["near", "far"], ["thick", "thin"], ["front", "back"], ["sweet", "bitter"], ["loud", "quiet"], ["brave", "cowardly"], ["arrive", "depart"], ["remember", "forget"], ["accept", "refuse"], ["increase", "decrease"], ["friend", "enemy"], ["question", "answer"], ["buy", "sell"], ["laugh", "cry"], ["borrow", "lend"], ["top", "bottom"], ["asleep", "awake"], ["always", "never"]],
  3: [["ancient", "modern"], ["generous", "selfish"], ["victory", "defeat"], ["permanent", "temporary"], ["expand", "contract"], ["humble", "proud"], ["scarce", "plentiful"], ["transparent", "opaque"], ["voluntary", "compulsory"], ["innocent", "guilty"], ["maximum", "minimum"], ["ascend", "descend"], ["artificial", "natural"], ["polite", "rude"], ["interior", "exterior"], ["courage", "fear"], ["import", "export"], ["include", "exclude"], ["permit", "forbid"], ["success", "failure"], ["majority", "minority"], ["optimist", "pessimist"]],
};
const SYNONYMS: Record<1 | 2 | 3, Pair[]> = {
  1: [["big", "large"], ["small", "little"], ["happy", "glad"], ["sad", "unhappy"], ["fast", "quick"], ["start", "begin"], ["end", "finish"], ["shout", "yell"], ["look", "see"], ["jump", "leap"], ["close", "shut"], ["gift", "present"], ["sick", "ill"], ["stone", "rock"], ["rich", "wealthy"], ["speak", "talk"], ["home", "house"], ["angry", "cross"], ["easy", "simple"], ["correct", "right"], ["road", "street"], ["nap", "sleep"]],
  2: [["brave", "courageous"], ["clever", "intelligent"], ["enormous", "huge"], ["tiny", "minute"], ["ask", "enquire"], ["buy", "purchase"], ["help", "assist"], ["hard", "difficult"], ["quiet", "silent"], ["beautiful", "pretty"], ["error", "mistake"], ["answer", "reply"], ["choose", "select"], ["journey", "trip"], ["repair", "mend"], ["strange", "odd"], ["allow", "permit"], ["collect", "gather"], ["annual", "yearly"], ["finish", "complete"], ["wealthy", "rich"], ["hurry", "rush"]],
  3: [["abundant", "plentiful"], ["commence", "begin"], ["conceal", "hide"], ["fragile", "delicate"], ["reluctant", "unwilling"], ["obstinate", "stubborn"], ["vacant", "empty"], ["peril", "danger"], ["diligent", "hardworking"], ["edible", "eatable"], ["sufficient", "enough"], ["prohibit", "forbid"], ["accurate", "exact"], ["ancient", "old"], ["brief", "short"], ["cautious", "careful"], ["weary", "tired"], ["vanish", "disappear"], ["residence", "home"], ["assist", "help"], ["purchase", "buy"], ["rapid", "fast"]],
};
type Four = [string, string, string, string];
const ANALOGIES: Record<1 | 2 | 3, Four[]> = {
  1: [["hand", "glove", "foot", "sock"], ["bird", "fly", "fish", "swim"], ["cow", "calf", "dog", "puppy"], ["eye", "see", "ear", "hear"], ["cat", "kitten", "hen", "chick"], ["sun", "day", "moon", "night"], ["boy", "man", "girl", "woman"], ["pen", "write", "knife", "cut"], ["grass", "green", "sky", "blue"], ["hot", "cold", "up", "down"], ["king", "queen", "father", "mother"], ["fire", "hot", "ice", "cold"], ["book", "read", "song", "sing"], ["one", "two", "three", "four"], ["bee", "honey", "cow", "milk"], ["finger", "hand", "toe", "foot"], ["bed", "sleep", "chair", "sit"], ["rain", "wet", "sand", "dry"], ["nose", "smell", "mouth", "eat"], ["baby", "cry", "lion", "roar"], ["shoe", "foot", "cap", "head"], ["big", "small", "tall", "short"]],
  2: [["bird", "nest", "bee", "hive"], ["teacher", "school", "doctor", "hospital"], ["fish", "water", "bird", "air"], ["author", "book", "painter", "painting"], ["kitten", "cat", "lamb", "sheep"], ["car", "road", "train", "rail"], ["farmer", "farm", "sailor", "ship"], ["lion", "roar", "dog", "bark"], ["week", "day", "year", "month"], ["pencil", "write", "broom", "sweep"], ["nose", "smell", "tongue", "taste"], ["Nigeria", "Abuja", "Ghana", "Accra"], ["tailor", "cloth", "carpenter", "wood"], ["hungry", "eat", "thirsty", "drink"], ["wing", "bird", "fin", "fish"], ["aeroplane", "sky", "canoe", "river"], ["morning", "breakfast", "evening", "supper"], ["glove", "hand", "helmet", "head"], ["cup", "tea", "bowl", "soup"], ["spider", "web", "rabbit", "burrow"], ["winner", "prize", "worker", "wage"], ["key", "lock", "button", "hole"]],
  3: [["petal", "flower", "page", "book"], ["captain", "ship", "pilot", "aeroplane"], ["herd", "cattle", "flock", "sheep"], ["drought", "rain", "famine", "food"], ["poet", "poem", "composer", "music"], ["thermometer", "temperature", "clock", "time"], ["library", "books", "museum", "artefacts"], ["surgeon", "scalpel", "carpenter", "saw"], ["orchard", "fruit", "quarry", "stone"], ["chapter", "novel", "act", "play"], ["sculptor", "statue", "architect", "building"], ["optician", "eyes", "dentist", "teeth"], ["pack", "wolves", "swarm", "bees"], ["evaporation", "vapour", "freezing", "ice"], ["biography", "life", "atlas", "maps"], ["hour", "minute", "metre", "centimetre"], ["beginning", "end", "dawn", "dusk"], ["quarter", "four", "tenth", "ten"], ["kennel", "dog", "stable", "horse"], ["cub", "lion", "gosling", "goose"], ["editor", "newspaper", "conductor", "orchestra"], ["anchor", "ship", "brake", "car"]],
};
const RHYMES: string[][] = [["cat", "hat", "mat", "bat"], ["dog", "log", "fog", "frog"], ["sun", "run", "fun", "bun"], ["pen", "hen", "ten", "men"], ["cake", "lake", "make", "snake"], ["ball", "tall", "wall", "fall"], ["tree", "bee", "see", "free"], ["light", "night", "kite", "bright"], ["book", "cook", "look", "hook"], ["ring", "sing", "king", "wing"], ["boat", "coat", "goat", "float"], ["star", "car", "jar", "far"], ["rain", "train", "chain", "plane"], ["bell", "sell", "tell", "shell"], ["fish", "dish", "wish", "swish"], ["chair", "hair", "bear", "pear"], ["moon", "spoon", "soon", "noon"], ["day", "play", "say", "tray"], ["nose", "rose", "toes", "close"], ["bed", "red", "head", "bread"], ["blue", "shoe", "two", "glue"], ["gold", "cold", "told", "fold"], ["beach", "peach", "teach", "reach"], ["pot", "hot", "dot", "spot"]];
const COMPOUNDS: Pair[] = [["sun", "flower"], ["rain", "bow"], ["foot", "ball"], ["tooth", "brush"], ["bed", "room"], ["butter", "fly"], ["pan", "cake"], ["snow", "man"], ["star", "fish"], ["book", "shelf"], ["hand", "bag"], ["key", "board"], ["sea", "shore"], ["play", "ground"], ["home", "work"], ["black", "board"], ["earth", "quake"], ["fire", "wood"], ["gold", "smith"], ["hair", "cut"], ["light", "house"], ["moon", "light"], ["news", "paper"], ["note", "book"], ["pine", "apple"], ["post", "man"], ["sand", "paper"], ["tea", "spoon"], ["water", "fall"], ["wheel", "chair"], ["wind", "mill"], ["bath", "room"], ["door", "bell"], ["eye", "brow"], ["finger", "nail"], ["grand", "mother"], ["head", "master"], ["horse", "back"], ["land", "lord"], ["life", "time"], ["rail", "way"], ["scare", "crow"], ["ship", "wreck"], ["some", "body"], ["table", "cloth"], ["thunder", "storm"], ["week", "end"], ["wrist", "watch"], ["arm", "chair"], ["basket", "ball"], ["day", "break"], ["drum", "stick"], ["farm", "yard"], ["grass", "hopper"], ["hill", "top"], ["jelly", "fish"], ["lady", "bird"], ["class", "mate"], ["cup", "board"], ["tooth", "paste"], ["over", "coat"], ["under", "ground"], ["blue", "bell"], ["work", "shop"], ["sea", "side"], ["birth", "day"]];
const NOT_JOINING = ["seven", "jump", "green", "quick", "happy", "slowly", "about", "never", "often", "kind", "empty", "because", "sing", "many"];
const SPELL: Record<1 | 2 | 3, Pair[]> = {
  1: [["cat", "a pet that says meow"], ["dog", "a pet that barks"], ["sun", "it shines in the day"], ["hen", "a bird that lays eggs"], ["cup", "you drink from it"], ["bed", "you sleep on it"], ["bus", "it carries many people on the road"], ["pen", "you write with it"], ["box", "you keep things in it"], ["leg", "you walk with it"], ["fish", "it swims in water"], ["book", "you read it"], ["tree", "it has leaves and branches"], ["door", "you open it to enter a room"], ["milk", "a white drink from a cow"], ["hand", "it has five fingers"], ["ball", "you kick or throw it"], ["rain", "water that falls from the sky"], ["shoe", "you wear it on your foot"], ["goat", "a farm animal with horns"], ["moon", "it shines at night"], ["drum", "you beat it to make music"]],
  2: [["garden", "where flowers and vegetables grow"], ["market", "where people buy and sell"], ["bridge", "it crosses a river"], ["doctor", "a person who treats the sick"], ["farmer", "a person who grows crops"], ["window", "a glass opening in a wall"], ["basket", "used for carrying things"], ["candle", "a wax stick that gives light"], ["pencil", "used for writing and drawing"], ["rabbit", "a small animal with long ears"], ["school", "where children learn"], ["orange", "a round juicy fruit"], ["bottle", "a container for water"], ["pillow", "you rest your head on it"], ["finger", "part of the hand"], ["monkey", "an animal that climbs trees"], ["pocket", "a small bag sewn into clothes"], ["ladder", "used for climbing up"], ["kitchen", "the room where food is cooked"], ["teacher", "a person who helps children learn"], ["village", "a small settlement smaller than a town"], ["blanket", "it keeps you warm in bed"]],
  3: [["library", "a place where books are kept"], ["calendar", "it shows days and months"], ["hospital", "where sick people are treated"], ["elephant", "a very large animal with a trunk"], ["triangle", "a shape with three sides"], ["mountain", "a very high hill"], ["umbrella", "it keeps off the rain"], ["dictionary", "a book of word meanings"], ["telescope", "used for looking at stars"], ["government", "the people who rule a country"], ["neighbour", "a person who lives next door"], ["passenger", "a person travelling in a vehicle"], ["breakfast", "the first meal of the day"], ["carpenter", "a person who works with wood"], ["electricity", "it powers lights and fans"], ["vegetable", "a plant grown for food, such as spinach"], ["temperature", "how hot or cold something is"], ["president", "the head of a country"], ["geography", "the study of the earth"], ["secretary", "a person who keeps office records"], ["character", "a person in a story"], ["knowledge", "what a person knows"]],
};
interface Group {
  label: string;
  words: string[];
  /** Groups whose words could also fit this one, so they are never mixed in one question. */
  clash?: string[];
}
const GROUPS: Group[] = [
  { label: "fruits", words: ["mango", "orange", "banana", "pawpaw", "apple", "pineapple", "guava", "pear"], clash: ["foods"] },
  { label: "animals", words: ["goat", "lion", "dog", "horse", "sheep", "monkey", "rabbit", "elephant"], clash: ["birds"] },
  { label: "colours", words: ["red", "blue", "green", "yellow", "purple", "white", "brown", "pink"] },
  { label: "parts of the body", words: ["hand", "leg", "nose", "ear", "knee", "elbow", "shoulder", "finger"] },
  { label: "clothes", words: ["shirt", "skirt", "trousers", "cap", "sock", "gown", "jacket", "scarf"] },
  { label: "vehicles", words: ["bus", "lorry", "car", "bicycle", "train", "canoe", "aeroplane", "tricycle"] },
  { label: "things used for school work", words: ["pencil", "ruler", "eraser", "chalk", "notebook", "biro", "crayon", "sharpener"] },
  { label: "members of a family", words: ["father", "mother", "sister", "brother", "uncle", "aunt", "cousin", "nephew"] },
  { label: "birds", words: ["hen", "duck", "pigeon", "eagle", "parrot", "owl", "turkey", "vulture"], clash: ["animals", "foods"] },
  { label: "foods", words: ["rice", "beans", "yam", "bread", "plantain", "cassava", "maize", "millet"], clash: ["fruits", "birds"] },
  { label: "days of the week", words: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
  { label: "months of the year", words: ["January", "March", "May", "July", "August", "October", "December", "April"] },
  { label: "shapes", words: ["circle", "square", "triangle", "rectangle", "oval", "pentagon", "hexagon", "octagon"] },
  { label: "jobs", words: ["teacher", "doctor", "farmer", "tailor", "driver", "nurse", "carpenter", "pilot"] },
  { label: "pieces of furniture", words: ["table", "chair", "bed", "stool", "cupboard", "bench", "shelf", "wardrobe"] },
  { label: "tools", words: ["hammer", "saw", "spanner", "pliers", "chisel", "screwdriver", "hoe", "cutlass"] },
];
const groupsFor = (c: Ctx) => GROUPS.slice(0, c.tier === 1 ? 8 : c.tier === 2 ? 12 : 16);
const others = (c: Ctx, g: Group) => c.shuffle(groupsFor(c).filter((x) => x !== g && !g.clash?.includes(x.label) && !x.clash?.includes(g.label)));
const list = (xs: string[]) => `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;

const ORDER_SAME_LETTER = [["ball", "bed", "bird", "book", "bus", "bag", "bell", "boat", "box", "bread"], ["cat", "cup", "car", "cow", "cake", "coat", "chair", "clock", "corn", "crab"], ["sun", "sock", "star", "sea", "ship", "shoe", "sand", "seed", "soap", "spoon"], ["man", "mat", "milk", "moon", "mug", "map", "meat", "mouse", "mango", "mud"], ["pen", "pig", "pot", "pan", "pear", "pin", "plate", "pencil", "paper", "pump"]];
const ORDER_SAME_TWO = [["stand", "star", "step", "stick", "stone", "stop", "storm", "street", "strong", "study"], ["chair", "chalk", "cheese", "chest", "chicken", "child", "chin", "choose", "church", "chew"], ["train", "tree", "trap", "trip", "truck", "try", "trade", "trouble", "trumpet", "treat"], ["bread", "brick", "bridge", "bright", "bring", "broom", "brother", "brown", "brush", "brave"], ["place", "plan", "plant", "plate", "play", "please", "plenty", "plot", "plum", "plus"]];
const CODE_WORDS = ["cat", "dog", "hen", "bag", "cup", "bed", "sun", "pen", "map", "jug", "box", "fan", "leg", "net", "pot", "rat", "van", "web", "yam", "ant", "bee", "cow", "egg", "fig", "bird", "fish", "goat", "lamp", "milk", "nest", "rope", "ship", "tree", "wind"];

/* --------------------------------------------------------------- topics */

const alphabet: Factory = (c) => ({
  title: "The alphabet and letter positions",
  subtopics: ["The 26 letters in order", "Letters that come before and after", "The position number of a letter"],
  objectives: ["Recite the 26 letters of the alphabet in order", "Name the letter that comes before or after a given letter", "Give the position number of a letter"],
  summary: "The alphabet has 26 letters in a fixed order. Knowing the order and the number of each letter is the key to many verbal reasoning questions.",
  notes: `## The alphabet\nThe English alphabet has **26 letters**. They always come in the same order, from A to Z. Each letter has a **position number**: A is 1, B is 2, C is 3, and Z is 26.\n\n[[diagram: alphabet || The alphabet with the position number of each letter]]\n\n## Before and after\n- The letter **after** a letter is the next one to the right. The letter after D is E.\n- The letter **before** a letter is the one to its left. The letter before D is C.\n\n## Vowels and consonants\nThe five **vowels** are A, E, I, O and U. The other 21 letters are **consonants**.\n\n## Useful landmarks\nLearn these positions by heart; they help you to count quickly.\n- E is 5, J is 10, O is 15, T is 20, Y is 25.\n- M is 13 and N is 14, so the middle of the alphabet lies between M and N.\n${c.tier === 3 ? "\n## Counting places\n\"Three places after K\" means count on three letters: L, M, N. The answer is N. \"Two places before G\" means count back: F, E. The answer is E. Do not count the letter you start from.\n" : ""}\n## In a test\nWrite the alphabet at the top of your rough paper and number the letters. It takes one minute and saves many mistakes.${HOW}`,
  examples: `**Example 1.** Which letter comes just after P?\nThe order is O, P, Q. The answer is **Q**.\n\n**Example 2.** Which letter comes just before H?\nThe order is G, H. The answer is **G**.\n\n**Example 3.** What is the position number of J?\nCount: A 1, B 2, C 3, D 4, E 5, F 6, G 7, H 8, I 9, J 10. The answer is **10**.`,
  make: () => {
    const i = c.int(1, 24);
    const letters = (ans: number) => wordsAround(c, ans);
    if (c.tier === 1) {
      const after = c.int(0, 1) === 0;
      const ans = after ? i + 1 : i - 1;
      return wordQ("E", `Which letter comes just ${after ? "after" : "before"} ${L(i)} in the alphabet?`, L(ans), letters(ans), `The order is ${L(i - 1)}, ${L(i)}, ${L(i + 1)}, so the answer is ${L(ans)}.`);
    }
    if (c.tier === 2) {
      if (c.int(0, 1) === 0) return numQ(c, "M", `What is the position number of the letter ${L(i)} in the alphabet?`, i + 1, `Counting from A as 1, the letter ${L(i)} is number ${i + 1}.`);
      return wordQ("M", `Which letter is number ${i + 1} in the alphabet?`, L(i), letters(i), `Counting from A as 1, number ${i + 1} is ${L(i)}.`);
    }
    const n = c.int(2, 5);
    const after = c.int(0, 1) === 0;
    const start = after ? c.int(0, 25 - n) : c.int(n, 25);
    const ans = after ? start + n : start - n;
    return wordQ("H", `Which letter is ${n} places ${after ? "after" : "before"} ${L(start)} in the alphabet?`, L(ans), letters(ans), `Count ${n} letters ${after ? "on" : "back"} from ${L(start)} without counting ${L(start)} itself: the answer is ${L(ans)}.`);
  },
});
const wordsAround = (c: Ctx, ans: number) => c.shuffle([-3, -2, -1, 1, 2, 3].map((d) => ans + d).filter((v) => v >= 0 && v <= 25)).map(L);

const letterPatterns: Factory = (c) => ({
  title: "Letter patterns",
  subtopics: ["Patterns made with letters", "Finding how many letters are skipped", "Finding the missing letter"],
  objectives: ["Recognise that letters can form a pattern like numbers", "Find how many letters are skipped each time", "Supply the missing letter in a pattern"],
  summary: "Letters can make patterns. Change each letter to its number, find the rule, then change the answer back to a letter.",
  notes: `## Letters make patterns too\nA letter pattern follows a rule, just like a number pattern. The rule tells you how many letters to move each time.\n\n[[diagram: sequence A, C, E, G, ? || Each time one letter is skipped, so the next letter is I]]\n\n## The number trick\nEvery letter has a position number. Change the letters to numbers and the rule is easy to see.\n\n| Letter | A | C | E | G |\n|---|---|---|---|---|\n| Number | 1 | 3 | 5 | 7 |\n\nThe numbers go up in twos, so the next number is 9, which is the letter I.\n\n[[diagram: alphabet || Use the position numbers to find the rule]]\n\n## Steps\n1. Write the position number under each letter.\n2. Find the step between the numbers.\n3. Work out the missing number.\n4. Change that number back to a letter.\n${c.tier === 3 ? "\n## Patterns that go backwards\nSome patterns move from Z towards A: Z, X, V, T. The numbers are 26, 24, 22, 20, so the rule is take away 2 and the next letter is R (18).\n" : ""}\n## Common mistake\nWhen you count the letters skipped, do not count the letters that are written. From A to C only one letter, B, is skipped.${HOW}`,
  examples: `**Example 1.** B, D, F, ?, J\nNumbers: 2, 4, 6, ?, 10. The step is 2, so the missing number is 8, which is **H**.\n\n**Example 2.** A, D, G, J, ?\nNumbers: 1, 4, 7, 10. The step is 3, so the next is 13, which is **M**.\n\n**Example 3.** C, D, E, ?, G\nThe letters go up one at a time, so the missing letter is **F**.`,
  make: () => {
    const step = c.tier === 1 ? 1 : c.int(2, c.tier === 2 ? 3 : 4);
    const back = c.tier === 3 && c.int(0, 2) === 0;
    const start = back ? c.int(step * 4, 25) : c.int(0, 25 - step * 4);
    const seq = Array.from({ length: 5 }, (_, i) => start + (back ? -i : i) * step);
    const gap = c.int(1, 4);
    const shown = seq.map((v, i) => (i === gap ? "?" : L(v))).join(", ");
    return wordQ(level(c.g), `Find the missing letter.\n[[diagram: sequence ${shown}]]`, L(seq[gap]), wordsAround(c, seq[gap]), `The letters move ${back ? "back" : "on"} ${step} place${step > 1 ? "s" : ""} each time, so the missing letter is ${L(seq[gap])}.`);
  },
});

const oddWord: Factory = (c) => ({
  title: "Odd one out with words",
  subtopics: ["Words that belong together", "Naming the group", "Choosing the word that does not belong"],
  objectives: ["Explain what three of the four words have in common", "Name the group the three words belong to", "Identify the word that does not belong"],
  summary: "Three of the words belong to one group. The odd one out is the word that belongs somewhere else.",
  notes: `## Words in groups\nWe can sort words into **groups** by what they mean. Mango, orange and banana are all fruits. Goat, lion and dog are all animals.\n\n[[diagram: picture 🥭🍊🍌 || Mango, orange and banana belong to the group "fruits"]]\n\n## Finding the odd one out\nIn an odd-one-out question there are four words. Three belong to the same group. One does not: it is the **odd one out**.\n\n## Steps\n1. Read all four words.\n2. Ask: "What kind of thing is each word?"\n3. Find the group that three of the words share and give the group a name.\n4. The word left over is your answer.\n\n[[diagram: flow Read the words -> Name the group -> Pick the word left out || Three steps to the odd one out]]\n\n## Example to study\nLook at shirt, cap, lorry and sock. A shirt, a cap and a sock are clothes. A lorry is a vehicle. So lorry is the odd one out.\n\n## Take care\n- Do not choose a word just because it is the longest or looks different.\n- The answer depends on **meaning**, not on spelling.\n- If two groups seem possible, choose the group that fits exactly three words.\n\nIn Basic ${c.g} the groups include ${list(groupsFor(c).slice(-3).map((g) => g.label))}.${HOW}`,
  examples: `**Example 1.** red, blue, goat, green\nRed, blue and green are colours. **Goat** is an animal, so it is the odd one out.\n\n**Example 2.** bus, car, train, nose\nBus, car and train are vehicles. **Nose** is a part of the body.\n\n**Example 3.** father, pencil, sister, uncle\nFather, sister and uncle are members of a family. **Pencil** is the odd one out.`,
  make: () => {
    const g = c.pick(groupsFor(c));
    const same = c.shuffle(g.words).slice(0, 3);
    const other = others(c, g)[0];
    const odd = c.pick(other.words);
    return wordQ(level(c.g), `Which word is the odd one out: ${c.shuffle([...same, odd]).join(", ")}?`, odd, same, `${list(same)} are ${g.label}, but ${odd} is not.`);
  },
});

const wordGroups: Factory = (c) => ({
  title: "Word groups",
  subtopics: ["Sorting words into groups", "Naming a group", "Adding a word to a group"],
  objectives: ["Sort words by their meaning", "Give a suitable name to a group of words", "Choose another word that belongs to a given group"],
  summary: "Words that share a meaning form a group. Name the group first, then choose the word that fits it.",
  notes: `## Sorting words\nSorting means putting things that are alike together. We sort words by what they **mean**.\n\n| Group name | Words in the group |\n|---|---|\n| Fruits | mango, orange, banana |\n| Vehicles | bus, lorry, car |\n| Colours | red, blue, green |\n| Clothes | shirt, skirt, cap |\n\n## The group name\nThe name of the group is a general word. "Fruit" is general; "mango" is a particular fruit. The general word covers all the words in the group.\n\n[[diagram: flow mango, orange, banana -> fruits -> pawpaw also fits || Name the group, then find another member]]\n\n## Steps for "which word belongs?" questions\n1. Read the three words given.\n2. Decide the name of the group.\n3. Look at each option and ask: "Is this one of them too?"\n4. Choose the option that belongs.\n\n## Take care\nSome options are close but wrong. A chair is furniture, not a tool, although a carpenter makes it. Always ask what the thing **is**, not who uses it.\n\n## Why this matters\nSorting words helps you to remember new words, to write better compositions and to answer comprehension questions.\n\nIn Basic ${c.g} you will meet groups such as ${list(groupsFor(c).slice(-3).map((g) => g.label))}.${HOW}`,
  examples: `**Example 1.** Which word belongs with hen, duck and pigeon: eagle, table, rice or shirt?\nHen, duck and pigeon are birds. **Eagle** is also a bird.\n\n**Example 2.** Which word belongs with table, chair and bed: stool, hammer, yam or bus?\nThey are pieces of furniture. **Stool** belongs.\n\n**Example 3.** Which word belongs with Monday, Friday and Sunday?\nThey are days of the week, so **Tuesday** would belong.`,
  make: () => {
    const g = c.pick(groupsFor(c));
    const [a, b, d, ans] = c.shuffle(g.words);
    const wrong = others(c, g).slice(0, 3).map((o) => c.pick(o.words));
    return wordQ(level(c.g), `Which word belongs to the same group as ${list([a, b, d])}?`, ans, wrong, `${list([a, b, d])} are ${g.label}, and so is ${ans}.`);
  },
});

const pairTopic = (kind: "opposite" | "similar"): Factory => (c) => {
  const data = kind === "opposite" ? ANTONYMS[c.tier] : SYNONYMS[c.tier];
  const name = kind === "opposite" ? "antonyms" : "synonyms";
  return {
    title: kind === "opposite" ? "Opposites (antonyms)" : "Words with similar meaning (synonyms)",
    subtopics: kind === "opposite" ? ["What an opposite is", "Pairs of opposites", "Choosing the opposite of a word"] : ["What a synonym is", "Pairs of synonyms", "Choosing the word nearest in meaning"],
    objectives: kind === "opposite" ? ["Explain what an antonym is", "Give the opposite of common words", "Choose the opposite of a word from a list"] : ["Explain what a synonym is", "Give a word that means nearly the same as a common word", "Choose the word nearest in meaning from a list"],
    summary: kind === "opposite" ? "An antonym is a word that means the opposite of another word, as hot is the opposite of cold." : "A synonym is a word that means the same, or nearly the same, as another word, as big and large.",
    notes:
      kind === "opposite"
        ? `## What is an opposite?\nTwo words are **opposites** when their meanings are as different as possible. The grown-up word for an opposite is an **antonym**.\n\n[[diagram: picture 🥵 🥶 || Hot and cold are opposites]]\n\n| Word | Opposite |\n|---|---|\n${data.slice(0, 8).map(([a, b]) => `| ${a} | ${b} |`).join("\n")}\n\n## How to find an opposite\n1. Make sure you know what the word means.\n2. Think of a short sentence with the word: "The tea is hot."\n3. Change the sentence so that it says the reverse: "The tea is cold."\n4. The word you changed to is the opposite.\n\n[[diagram: flow Know the word -> Make a sentence -> Reverse the sentence || Three steps to an opposite]]\n\n## Take care\n- The opposite must be the same kind of word. The opposite of the describing word "happy" is the describing word "sad", not the naming word "sadness".\n- Do not choose a word that means the **same**. That is a synonym, and it is the commonest trap.\n- A word that is only different is not an opposite. "Warm" is different from "hot", but the opposite of hot is cold.\n\n## Opposites made with small beginnings\nSome opposites are made by adding un-, dis- or in- to the front: happy and unhappy, agree and disagree, correct and incorrect.${HOW}`
        : `## What is a synonym?\nTwo words are **synonyms** when they mean the same, or very nearly the same. Big and large are synonyms.\n\n[[diagram: picture 🐘 || An elephant is big. An elephant is large. Both sentences mean the same.]]\n\n| Word | Synonym |\n|---|---|\n${data.slice(0, 8).map(([a, b]) => `| ${a} | ${b} |`).join("\n")}\n\n## The swap test\nTo check a synonym, put it in place of the first word in a sentence. If the sentence still means the same, the two words are synonyms.\n- "Please **shut** the door." and "Please **close** the door." mean the same, so shut and close are synonyms.\n\n[[diagram: flow Make a sentence -> Swap the word -> Same meaning? || The swap test]]\n\n## Take care\n- Do not choose the **opposite**. In a test the opposite is nearly always among the options.\n- Choose the word **nearest** in meaning. "Huge" is nearer to "enormous" than "big" is.\n- The synonym must be the same kind of word: a doing word for a doing word, a describing word for a describing word.\n\n## Why synonyms matter\nUsing synonyms makes your writing more interesting, because you do not repeat the same word again and again. A dictionary or thesaurus lists synonyms for you.${HOW}`,
    examples:
      kind === "opposite"
        ? `**Example 1.** What is the opposite of "${data[0][0]}"?\nThe opposite is **${data[0][1]}**.\n\n**Example 2.** What is the opposite of "${data[8][0]}"?\nThe opposite is **${data[8][1]}**.\n\n**Example 3.** What is the opposite of "${data[9][0]}"?\nThink of a sentence, then reverse it. The opposite is **${data[9][1]}**.`
        : `**Example 1.** Which word means nearly the same as "${data[0][0]}"?\nThe answer is **${data[0][1]}**.\n\n**Example 2.** Which word means nearly the same as "${data[8][0]}"?\nUse the swap test. The answer is **${data[8][1]}**.\n\n**Example 3.** Which word means nearly the same as "${data[9][0]}"?\nThe answer is **${data[9][1]}**.`,
    make: (_, i) => {
      const [word, ans] = data[(i + (c.g % 2 === 0 ? 11 : 0)) % data.length];
      const wrong = c.shuffle(data.filter((p) => p[1] !== ans && p[0] !== word).map((p) => p[1])).slice(0, 3);
      return wordQ(level(c.g), kind === "opposite" ? `Which word is the opposite of "${word}"?` : `Which word means nearly the same as "${word}"?`, ans, wrong, `"${word}" and "${ans}" are ${name}: ${kind === "opposite" ? "their meanings are opposite" : "they mean nearly the same"}.`);
    },
  };
};

const rhymes: Factory = (c) => ({
  title: "Rhyming words",
  subtopics: ["Words that end with the same sound", "Rhyming families", "Choosing a rhyming word"],
  objectives: ["Explain that rhyming words end with the same sound", "Give words from the same rhyming family", "Choose the word that rhymes with a given word"],
  summary: "Words rhyme when they end with the same sound, like cat and hat. Listen to the sound, not the spelling.",
  notes: `## What is a rhyme?\nTwo words **rhyme** when they end with the same sound. Cat and hat rhyme. Sun and run rhyme.\n\n[[diagram: picture 🐱 🎩 || Cat and hat end with the same sound]]\n\n## Rhyming families\nWords that rhyme with one another make a family.\n\n| Family | Words |\n|---|---|\n| -at | cat, hat, mat, bat |\n| -un | sun, run, fun, bun |\n| -ake | cake, lake, make, snake |\n| -ing | ring, sing, king, wing |\n\n## Listen, do not just look\nRhyme is about **sound**. Some words rhyme although they are spelt differently.\n- blue, shoe and two all rhyme.\n- chair, bear and pear all rhyme.\n- night and kite rhyme.\n\nSome words look alike but do **not** rhyme: "cow" and "low" end in the same letters but sound different.\n\n## Steps\n1. Say the word in the question aloud, or quietly to yourself.\n2. Say each option after it.\n3. Choose the option whose ending sounds the same.\n\n[[diagram: flow Say the word -> Say each option -> Match the ending sound || How to find a rhyme]]\n\n## Why rhymes matter\nPoems and songs use rhyme to sound pleasant and to be easy to remember. Knowing rhymes also helps you to read and spell new words.${HOW}`,
  examples: `**Example 1.** Which word rhymes with "dog": log, dig, cat or day?\nDog and **log** end with the same sound.\n\n**Example 2.** Which word rhymes with "moon": man, spoon, moan or sun?\nMoon and **spoon** end with the same sound.\n\n**Example 3.** Which word rhymes with "blue": blow, bell, shoe or black?\nBlue and **shoe** sound the same at the end, although they are spelt differently.`,
  make: () => {
    const fam = c.pick(RHYMES);
    const [word, ans] = c.shuffle(fam);
    const wrong = c.shuffle(RHYMES.filter((f) => f !== fam)).slice(0, 3).map((f) => c.pick(f));
    return wordQ(level(c.g), `Which word rhymes with "${word}"?`, ans, wrong, `"${word}" and "${ans}" end with the same sound.`);
  },
});

const compounds: Factory = () => ({
  title: "Compound words",
  subtopics: ["Two words joined to make one", "The meaning of a compound word", "Completing a compound word"],
  objectives: ["Explain what a compound word is", "Join two small words to make a compound word", "Choose the word that completes a compound word"],
  summary: "A compound word is made by joining two smaller words, as sun and flower make sunflower.",
  notes: `## What is a compound word?\nA **compound word** is one word made by joining two smaller words. Each small word has its own meaning, and the new word has a new meaning.\n\n[[diagram: flow sun -> flower -> sunflower || sun + flower = sunflower]]\n\n| First word | Second word | Compound word |\n|---|---|---|\n| foot | ball | football |\n| rain | bow | rainbow |\n| tooth | brush | toothbrush |\n| butter | fly | butterfly |\n| black | board | blackboard |\n\n[[diagram: picture 🌻 🌈 ⚽ || sunflower, rainbow, football]]\n\n## The meaning of a compound word\nOften the two small words help you to guess the meaning. A **toothbrush** is a brush for teeth. A **bedroom** is a room with a bed. But not always: a **butterfly** is not butter that flies!\n\n## Steps for "which word joins?" questions\n1. Say the first word followed by each option.\n2. Ask: "Is that a real word I have heard or read?"\n3. Choose the option that makes a real word.\n\n## Take care\nThe two words are written **together** with no space. We write "football", not "foot ball".\n\n## Why compound words matter\nWhen you meet a long new word, look for smaller words inside it. Breaking it into parts helps you to read it, spell it and work out what it means.${HOW}`,
  examples: `**Example 1.** Which word can be joined to "bed" to make one new word: room, jump, green or seven?\nbed + room = **bedroom**.\n\n**Example 2.** Which word can be joined to "news" to make one new word: paper, quick, happy or about?\nnews + paper = **newspaper**.\n\n**Example 3.** Which word can be joined to "water" to make one new word?\nwater + fall = **waterfall**.`,
  make: (c) => {
    const [a, b] = c.pick(COMPOUNDS);
    return wordQ(level(c.g), `Which word can be joined to "${a}" to make one new word?`, b, c.shuffle(NOT_JOINING).slice(0, 3), `${a} + ${b} makes the compound word "${a}${b}".`);
  },
});

const VOWELS = "aeiou";
const missingLetters: Factory = (c) => {
  const data = SPELL[c.tier];
  return {
    title: "Missing letters",
    subtopics: ["Using a clue to find a word", "Vowels and consonants in spelling", "Completing a word"],
    objectives: ["Use a clue to work out a word", "Decide whether the missing letter is a vowel or a consonant", "Supply the letter that completes a word correctly"],
    summary: "A clue tells you the word. Say the word slowly, listen for each sound and put in the letter that is missing.",
    notes: `## Words with a gap\nIn these questions a word is written with one letter missing, and a **clue** tells you what the word means.\n\nc _ t — clue: a pet that says meow. The word is **cat**, so the missing letter is **a**.\n\n[[diagram: picture 🐱 || c _ t : the clue tells you the word is "cat"]]\n\n## Steps\n1. Read the clue and think of the word it describes.\n2. Check that your word has the right number of letters and matches the letters shown.\n3. Say the word slowly, one sound at a time.\n4. Write the letter that fills the gap.\n\n[[diagram: flow Read the clue -> Think of the word -> Match the letters -> Fill the gap || Four steps]]\n\n## Vowels and consonants\nThe vowels are **a, e, i, o, u**. Nearly every word has at least one vowel. If the gap is between two consonants, the missing letter is very often a vowel.\n\n[[diagram: alphabet || The five vowels are A, E, I, O and U]]\n\n## Take care\n- Several letters may make a real word. c _ t could be cat, cot or cut. Only the **clue** tells you which one is wanted.\n- Some letters are silent or doubled, as in "rabbit" and "pillow". Picture the whole word as you have seen it in books.\n\n## How to get better at spelling\nRead every day, keep a list of new words, and use the method "look, cover, write, check".${HOW}`,
    examples: `**Example 1.** d _ g — clue: a pet that barks.\nThe word is "dog". The missing letter is **o**.\n\n**Example 2.** b _ s — clue: it carries many people on the road.\nThe word is "bus". The missing letter is **u**.\n\n**Example 3.** _ e n — clue: you write with it.\nThe word is "pen". The missing letter is **p**.`,
    make: (_, i) => {
      const [word, clue] = data[(i + (c.g % 2 === 0 ? 11 : 0)) % data.length];
      const at = c.int(0, word.length - 1);
      const ans = word[at];
      const pool = VOWELS.includes(ans) ? VOWELS : "bcdfghlmnprstw";
      const wrong = c.shuffle([...pool].filter((x) => x !== ans)).slice(0, 3);
      const shown = [...word].map((ch, j) => (j === at ? "_" : ch)).join(" ");
      return wordQ(level(c.g), `Which letter completes this word: ${shown} ? Clue: ${clue}.`, ans, wrong, `The word is "${word}", so the missing letter is ${ans}.`);
    },
  };
};

const alphaOrder: Factory = (c) => ({
  title: "Alphabetical order",
  subtopics: ["Ordering words by their first letter", "Using the second and third letters", "How a dictionary is arranged"],
  objectives: ["Arrange words in order using their first letters", "Use the second or third letter when the earlier letters are the same", "Explain how words are arranged in a dictionary"],
  summary: "Alphabetical order means the order of the alphabet. Compare first letters; if they are the same, compare the next letters.",
  notes: `## What is alphabetical order?\n**Alphabetical order** is the order of the letters of the alphabet, from A to Z. A dictionary, a class register and a telephone list are all arranged this way.\n\n[[diagram: alphabet || Letters nearer to A come first]]\n\n## Rule 1: look at the first letter\nThe word whose first letter is nearest to A comes first.\n- apple, bus, goat, sock: a, b, g, s are already in order.\n\n## Rule 2: same first letter, look at the second\nIf two words begin with the same letter, compare their **second** letters.\n- ball and bed: both begin with b. The second letters are a and e. Since a comes before e, **ball** comes first.\n\n## Rule 3: keep going\nIf the first two letters are the same, compare the third letters, and so on.\n- star and step: s-t are the same; a comes before e, so **star** comes first.\n\n[[diagram: flow Compare 1st letters -> Same? Compare 2nd -> Same? Compare 3rd || Move along until the letters differ]]\n\n## A short word before a long word\nIf one word is the beginning of another, the shorter word comes first: "plan" comes before "plant".\n\n## Using a dictionary\nThe words at the top of each dictionary page are **guide words**. They show the first and last words on that page, so you can find your word quickly.\n\nIn Basic ${c.g} ${c.tier === 1 ? "the words begin with different letters" : c.tier === 2 ? "the words begin with the same letter, so you must use the second letter" : "the words share their first two letters, so you must use the third letter or beyond"}.${HOW}`,
  examples: `**Example 1.** Which comes first: goat, apple, sock or bus?\nThe first letters are g, a, s, b. The letter a is nearest the start, so **apple** comes first.\n\n**Example 2.** Which comes first: bed, ball, bus or book?\nAll begin with b. The second letters are e, a, u, o. The answer is **ball**.\n\n**Example 3.** Which comes last: star, step, stop or stick?\nThe third letters are a, e, o, i. The letter o is furthest on, so **stop** comes last.`,
  make: () => {
    let words: string[];
    if (c.tier === 1) {
      const seenFirst = new Set<string>();
      words = c.shuffle(GROUPS.slice(0, 10).flatMap((g) => g.words)).filter((w) => !seenFirst.has(w[0]) && seenFirst.add(w[0])).slice(0, 4);
    } else words = c.shuffle(c.pick(c.tier === 2 ? ORDER_SAME_LETTER : ORDER_SAME_TWO)).slice(0, 4);
    const sorted = [...words].sort((a, b) => (a < b ? -1 : 1));
    const last = c.tier > 1 && c.int(0, 2) === 0;
    const ans = last ? sorted[3] : sorted[0];
    return wordQ(level(c.g), `Which of these words comes ${last ? "last" : "first"} in alphabetical order: ${words.join(", ")}?`, ans, words.filter((w) => w !== ans), `In alphabetical order the words are ${sorted.join(", ")}, so "${ans}" comes ${last ? "last" : "first"}.`);
  },
});

const analogies: Factory = (c) => {
  const data = ANALOGIES[c.tier];
  return {
    title: "Word analogies",
    subtopics: ["How two words are linked", "Carrying the link to a second pair", "Completing an analogy"],
    objectives: ["Describe the link between the first pair of words", "Apply the same link to the second pair", "Choose the word that completes the analogy"],
    summary: "An analogy compares two pairs of words that are linked in the same way: bird is to fly as fish is to swim.",
    notes: `## What is an analogy?\nAn **analogy** says that two pairs of words are linked in the same way.\n\n"Bird is to fly as fish is to swim."\n\nA bird moves by flying. A fish moves by swimming. The link "moves by" is the same in both pairs.\n\n[[diagram: flow bird -> fly || A bird moves by flying]]\n\n[[diagram: flow fish -> swim || In the same way, a fish moves by swimming]]\n\n## Steps\n1. Look at the first pair and say the **link** as a short sentence: "A bird moves by flying."\n2. Use the same sentence for the second pair, leaving a gap: "A fish moves by ____."\n3. Choose the option that fills the gap.\n\n## Kinds of link\n| Link | Example |\n|---|---|\n| Animal and its young | cow is to calf as dog is to puppy |\n| Thing and its use | pen is to write as knife is to cut |\n| Part and whole | finger is to hand as toe is to foot |\n| Opposites | hot is to cold as up is to down |\n| Worker and place | teacher is to school as doctor is to hospital |\n| Animal and its home | bird is to nest as bee is to hive |\n\n## Take care\n- Keep the **order**. If the first pair is "young then parent", the second pair must also be "young then parent".\n- An option may be connected to the word but have the wrong link. For "fish is to ____", the word "water" is connected to fish, but the link asked for is how it moves.\n\nAnalogy questions test how clearly you think, so always say the link in words before you answer.${HOW}`,
    examples: `**Example 1.** ${cap(data[0][0])} is to ${data[0][1]} as ${data[0][2]} is to ____.\nSay the link for the first pair, then use it for the second. The answer is **${data[0][3]}**.\n\n**Example 2.** ${cap(data[1][0])} is to ${data[1][1]} as ${data[1][2]} is to ____.\nThe same link gives **${data[1][3]}**.\n\n**Example 3.** ${cap(data[2][0])} is to ${data[2][1]} as ${data[2][2]} is to ____.\nThe answer is **${data[2][3]}**.`,
    make: (_, i) => {
      const [a, b, d, ans] = data[(i + (c.g % 2 === 0 ? 11 : 0)) % data.length];
      const wrong = c.shuffle(data.filter((x) => x[3] !== ans).flatMap((x) => [x[3], x[1]]).filter((w) => ![a, b, d, ans].includes(w))).slice(0, 3);
      return wordQ(level(c.g), `${cap(a)} is to ${b} as ${d} is to ____.`, ans, wrong, `The link between ${a} and ${b} is the same as the link between ${d} and ${ans}.`);
    },
  };
};
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

const codes: Factory = (c) => ({
  title: "Letter codes",
  subtopics: ["Letters written as numbers", "Reading a coded word", c.tier === 3 ? "Codes that shift each letter" : "Writing a word in code"],
  objectives: ["Explain how a letter can be replaced by a number or another letter", "Change a coded message back into a word", "Write a word in a given code"],
  summary: "In a code each letter is swapped for a number or another letter by a rule. Find the rule, then swap the letters one at a time.",
  notes: `## What is a code?\nA **code** is a secret way of writing. Each letter is replaced by something else according to a **rule**.\n\n## The number code\nIn the simplest code each letter is replaced by its position number: A = 1, B = 2, C = 3, and so on up to Z = 26.\n\n[[diagram: alphabet || The number code: each letter and its number]]\n\nSo the word CAB is written 3, 1, 2, because C is 3, A is 1 and B is 2.\n\n[[diagram: sequence C, A, B || C = 3, A = 1, B = 2]]\n\n## Reading a coded word\nChange the numbers back to letters one at a time. 2, 5, 4 is B, E, D, which spells BED.\n${c.tier === 3 ? "\n## The shift code\nIn a shift code every letter is replaced by the letter that comes a fixed number of places after it. With a shift of one, A becomes B, B becomes C and C becomes D. So CAT is written DBU.\n\n[[diagram: flow C -> D || Each letter moves one place forward]]\n\nTo read a shift code, move each letter **back** by the same number of places.\n" : ""}\n## Steps\n1. Write the alphabet with its numbers on your rough paper.\n2. Work on **one letter at a time**.\n3. Write each answer down before you move to the next letter.\n4. Read the finished word to see that it makes sense.\n\n## Take care\n- Do not mix up neighbouring letters such as M (13) and N (14).\n- Count carefully from a landmark: E is 5, J is 10, O is 15, T is 20, Y is 25.\n\nCodes have been used for thousands of years to keep messages safe, and computers use codes today to protect information.${HOW}`,
  examples: `**Example 1.** If A = 1, B = 2, C = 3 and so on, what number stands for E?\nCount: A 1, B 2, C 3, D 4, E 5. The answer is **5**.\n\n**Example 2.** In the same code, what word is 4, 15, 7?\n4 is D, 15 is O and 7 is G. The word is **DOG**.\n\n**Example 3.** In a code each letter is replaced by the next letter of the alphabet. How is PEN written?\nP becomes Q, E becomes F and N becomes O: **QFO**.`,
  make: () => {
    const intro = "If A = 1, B = 2, C = 3 and so on,";
    if (c.tier === 1) {
      const i = c.int(0, c.g === 1 ? 11 : 25);
      return numQ(c, "E", `${intro} what number stands for the letter ${L(i)}?`, i + 1, `Counting from A as 1, the letter ${L(i)} is ${i + 1}.`);
    }
    const word = c.pick(CODE_WORDS);
    const up = word.toUpperCase();
    if (c.tier === 2) {
      const nums = [...up].map((ch) => ch.charCodeAt(0) - 64).join(", ");
      return wordQ("M", `${intro} what word do the numbers ${nums} spell?`, up, c.shuffle(CODE_WORDS.filter((w) => w !== word && w.length === word.length)).slice(0, 3).map((w) => w.toUpperCase()), `Change each number to its letter: ${nums} spells ${up}.`);
    }
    const shift = (n: number) => [...up].map((ch) => L(ch.charCodeAt(0) - 65 + n)).join("");
    const n = c.int(1, 2);
    return wordQ("H", `In a code, each letter is replaced by the letter ${n === 1 ? "one place" : "two places"} after it in the alphabet, so CAT is written ${n === 1 ? "DBU" : "ECV"}. How is ${up} written?`, shift(n), [shift(n + 1), shift(-n), [...shift(n)].reverse().join("")], `Move each letter of ${up} forward ${n === 1 ? "one place" : "two places"}: ${shift(n)}.`);
  },
});

const plan = (): Factory[] => [alphabet, letterPatterns, oddWord, wordGroups, pairTopic("opposite"), pairTopic("similar"), rhymes, compounds, missingLetters, alphaOrder, analogies, codes];

export const verbalReasoning: SubjectPack = {
  code: "VRE",
  name: "Verbal Reasoning",
  version: "2026.1",
  classes: ["BASIC1", "BASIC2", "BASIC3", "BASIC4", "BASIC5", "BASIC6"],
  entrance: true,
  terms: buildPrimaryTerms("VRE", plan),
};
