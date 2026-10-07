/**
 * Primary English Studies, Basic 1–Basic 6. Original material written for Precious PS Academy
 * following the strands of the Nigerian Basic Education (NERDC) English Studies curriculum:
 * speech work, structure (grammar), vocabulary, reading comprehension and writing.
 */
import type { Q, SubjectPack } from "../types";
import { buildPrimaryTerms, level, wordQ, type Ctx, type Factory } from "../primary/gen";
import * as D from "./data";

/** Two classes share each list: the odd class takes the first half, the even class the second. */
const at = <T,>(c: Ctx, list: readonly T[], i: number, parts = 2): T => list[(i + Math.floor(list.length / parts) * ((c.g - 1) % parts)) % list.length];
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);
const lower = (s: string) => s[0].toLowerCase() + s.slice(1);
const an = (w: string) => (/^[aeiou]/i.test(w) ? "an" : "a");
const HOW = "\n\n## How to do well\n- Read the question to the end before you choose.\n- Say each option quietly in the sentence and listen to it.\n- Read a little every day: good readers meet correct English again and again.\n- Keep a notebook of new words and rules, and revise it every week.";

const alphabetCase: Factory = (c) => ({
  title: "Capital letters and small letters",
  subtopics: ["The 26 letters of the alphabet", "Capital letters", "Small letters"],
  objectives: ["Say the 26 letters of the alphabet in order", "Match each capital letter with its small letter", "State when a capital letter is used"],
  summary: "Every letter has two forms: a capital letter and a small letter. Names and the first word of a sentence begin with a capital letter.",
  notes: `## The alphabet\nThe English alphabet has **26 letters**. We say them in the same order every time, from A to Z.\n\n[[diagram: alphabet || The 26 letters in order]]\n\n## Two forms of each letter\nEvery letter can be written in two ways.\n- **Capital letters** (big letters): A B C D E F G\n- **Small letters**: a b c d e f g\n\n| Capital | A | B | D | E | G | Q | R |\n|---|---|---|---|---|---|---|---|\n| Small | a | b | d | e | g | q | r |\n\nSome pairs look alike, such as C c, O o and S s. Others look different, such as A a, G g and R r. Learn the pairs that look different with care.\n\n## When do we use a capital letter?\n- At the **beginning of a sentence**: **T**he sun is hot.\n- For the **name of a person**: **A**da, **M**usa.\n- For the **name of a place**: **L**agos, **N**igeria.\n- For the **days and months**: **M**onday, **M**arch.\n- For the word **I**.\n\n## Vowels and consonants\nThe letters a, e, i, o and u are **vowels**. All the other letters are **consonants**.\n\n## Letters that are easily mixed up\n- b and d: b has its stick first, d has its ball first.\n- p and q face opposite ways.\n- m has two humps, n has one.${HOW}`,
  examples: `**Example 1.** What is the small letter of G?\nThe small letter is **g**.\n\n**Example 2.** What is the capital letter of r?\nThe capital letter is **R**.\n\n**Example 3.** Which word should begin with a capital letter: dog, lagos, table or book?\n**Lagos** is the name of a place, so it begins with a capital letter.`,
  make: () => {
    const i = c.int(0, 25);
    const up = String.fromCharCode(65 + i);
    const low = up.toLowerCase();
    const near = c.shuffle([1, 2, 3, -1, -2, -3].map((d) => String.fromCharCode(65 + ((i + d + 26) % 26))));
    return c.int(0, 1) === 0 ? wordQ("E", `Which is the small letter of ${up}?`, low, near.map((x) => x.toLowerCase()), `The small letter of ${up} is ${low}.`) : wordQ("E", `Which is the capital letter of ${low}?`, up, near, `The capital letter of ${low} is ${up}.`);
  },
});

const phonics: Factory = (c) => {
  const start = c.g === 1;
  return {
    title: start ? "Letter sounds: beginning sounds" : "Letter sounds: the short vowels",
    subtopics: start ? ["Letters and their sounds", "Words that begin with the same sound", "Sounding out a word"] : ["The five vowels", "Short vowel sounds in the middle of words", "Words with the same middle sound"],
    objectives: start ? ["Say the sound each letter makes", "Identify the beginning sound of a word", "Group words that begin with the same sound"] : ["Name the five vowels", "Hear the short vowel sound in the middle of a word", "Group words with the same middle sound"],
    summary: start ? "Every letter stands for a sound. Listen to the first sound of a word to know which letter it begins with." : "The vowels a, e, i, o, u each have a short sound, heard in the middle of words like cat, pen, sit, hot and sun.",
    notes: start
      ? `## Letters and sounds\nA letter has a **name** and a **sound**. The name of the letter b is "bee", but its sound is the short "b" you hear at the start of **ball**.\n\n[[diagram: picture ⚽ 🎒 🛏️ || ball, bag and bed all begin with the sound b]]\n\n## Beginning sounds\nThe **beginning sound** is the first sound you hear when you say a word.\n\n| Sound | Words |\n|---|---|\n| b | ball, bag, bed, boy |\n| c | cat, cup, cow, car |\n| d | dog, door, drum, dish |\n| m | man, mat, milk, moon |\n| s | sun, sock, soap, seat |\n| t | tap, tin, table, tree |\n\n## How to find the beginning sound\n1. Say the word slowly.\n2. Listen to the very first sound.\n3. Think of the letter that makes that sound.\n\n[[diagram: flow Say the word -> Hear the first sound -> Name the letter || Three steps]]\n\n## Sounding out\nTo read a new word, say the sound of each letter and then join the sounds: c - a - t makes **cat**. This is called **blending**.\n\n## Practise\nLook round the room. Say the name of each thing you see and the sound it begins with: door, d; table, t; window, w.${HOW}`
      : `## The vowels\nThe letters **a, e, i, o, u** are the vowels. Almost every word has a vowel in it.\n\n## Short vowel sounds\nEach vowel has a short sound. We often hear it in the **middle** of a short word.\n\n| Vowel | Short sound in |\n|---|---|\n| a | cat, bag, hat, man |\n| e | pen, bed, hen, leg |\n| i | sit, pig, pin, lip |\n| o | hot, pot, dog, box |\n| u | sun, cup, bus, mug |\n\n[[diagram: picture 🐱 🖊️ 🐷 🐶 ☀️ || cat, pen, pig, dog, sun]]\n\n## Hearing the middle sound\n1. Say the word slowly, stretching it: c - a - t.\n2. Listen to the sound in the middle.\n3. Name the vowel that makes it.\n\n[[diagram: sequence c, a, t || The middle sound of cat is the short a]]\n\n## Changing the vowel changes the word\nKeep the first and last letters and change the vowel: p**a**n, p**e**n, p**i**n. Each is a different word with a different meaning. That is why we must listen carefully.\n\n## Word families\nWords with the same middle and end sounds rhyme and belong to a family: cat, hat, mat, bat; pen, hen, ten, men.${HOW}`,
    examples: start
      ? `**Example 1.** Which word begins with the same sound as "dog": door, cat, sun or pen?\nDog and **door** both begin with d.\n\n**Example 2.** Which word begins with the same sound as "milk"?\n**Moon** begins with m too.\n\n**Example 3.** Which letter does "tap" begin with?\nIt begins with **t**.`
      : `**Example 1.** Which word has the same middle sound as "cat": bag, pen, sit or hot?\nCat and **bag** both have the short a.\n\n**Example 2.** Which word has the same middle sound as "sun"?\n**Cup** has the short u too.\n\n**Example 3.** What is the vowel in "pig"?\nThe vowel is **i**.`,
    make: () => {
      const groups = start ? D.SOUND_START : D.SOUND_MIDDLE;
      const key = c.pick(Object.keys(groups));
      const [word, ans] = c.shuffle(groups[key]);
      const wrong = c.shuffle(Object.keys(groups).filter((k) => k !== key)).slice(0, 3).map((k) => c.pick(groups[k]));
      return wordQ("E", `Which word ${start ? "begins with the same sound as" : "has the same middle sound as"} "${word}"?`, ans, wrong, `"${word}" and "${ans}" both have the sound ${key}${start ? " at the beginning" : " in the middle"}.`);
    },
  };
};

type WordClass = "noun" | "verb" | "adjective" | "adverb";
const CLASS_INFO: Record<WordClass, { title: string; plain: string; summary: string; notes: string; examples: string }> = {
  noun: {
    title: "Nouns: naming words",
    plain: "naming word",
    summary: "A noun is a naming word. It is the name of a person, an animal, a place or a thing.",
    notes: `## What is a noun?\nA **noun** is a **naming word**. It names a person, an animal, a place or a thing.\n\n[[diagram: picture 👩‍🏫 🐐 🏫 📚 || teacher, goat, school, books: all are nouns]]\n\n| Kind | Examples |\n|---|---|\n| Persons | boy, teacher, Ada, doctor |\n| Animals | goat, dog, lion, hen |\n| Places | school, market, Lagos, farm |\n| Things | book, table, ball, cup |\n\n## Finding the noun in a sentence\nAsk **"Who?"** or **"What?"** about the sentence. The answer is a noun.\n\n"The dog ran quickly." What ran? The **dog**. So "dog" is the noun.\n\n[[diagram: flow Read the sentence -> Ask who or what -> That word is the noun || How to find a noun]]\n\n## Words that are not nouns\n- "ran", "sang" and "jumped" tell what is done. They are verbs.\n- "quickly" and "loudly" tell how it is done. They are adverbs.\n- "the" and "a" are small pointing words.\n\n## One and many\nMost nouns can be counted: one book, two books. The form for many is the **plural**.\n\n## Special names\nThe special name of one person or place, such as Ada or Kano, begins with a capital letter.`,
    examples: `**Example 1.** "The girl sang loudly." Which word is the noun?\nWho sang? The **girl**.\n\n**Example 2.** "The bird flew quickly." Which word is the noun?\nWhat flew? The **bird**.\n\n**Example 3.** Which of these is a noun: run, table, slowly or happy?\n**Table** is the name of a thing.`,
  },
  verb: {
    title: "Verbs: doing words",
    plain: "doing word",
    summary: "A verb is a doing word. It tells what a person, an animal or a thing does.",
    notes: `## What is a verb?\nA **verb** is a **doing word**. It tells us what someone or something does.\n\n[[diagram: picture 🏃 🎤 💃 😴 || run, sing, dance, sleep: all are verbs]]\n\n| Who | Does what (verb) |\n|---|---|\n| The boy | runs |\n| Birds | fly |\n| The baby | cries |\n| Mother | cooks |\n\n## Finding the verb in a sentence\nAsk **"What did he, she or it do?"** The answer is the verb.\n\n"The dog ran quickly." What did the dog do? It **ran**. So "ran" is the verb.\n\n[[diagram: flow Find who the sentence is about -> Ask what they did -> That word is the verb || How to find a verb]]\n\n## Every sentence needs a verb\nA group of words without a verb is not a complete sentence. "The big dog" is not a sentence. "The big dog barked" is.\n\n## Verbs change with time\n- Today I **walk** to school. (now)\n- Yesterday I **walked** to school. (past)\n\n## Being verbs\nThe words **am, is, are, was** and **were** are also verbs, although they do not show an action: "Ada **is** a pupil."\n\n## Words that are not verbs\nNames of things (dog, girl) are nouns. Words that tell how (quickly, loudly) are adverbs.`,
    examples: `**Example 1.** "The girl sang loudly." Which word is the verb?\nWhat did the girl do? She **sang**.\n\n**Example 2.** "The farmer worked slowly." Which word is the verb?\nHe **worked**.\n\n**Example 3.** Which of these is a verb: jump, book, green or table?\n**Jump** is something you do.`,
  },
  adjective: {
    title: "Adjectives: describing words",
    plain: "describing word",
    summary: "An adjective is a describing word. It tells us more about a noun: its size, colour, number or kind.",
    notes: `## What is an adjective?\nAn **adjective** is a **describing word**. It tells us more about a noun.\n\n[[diagram: picture 🐘 🐜 || a big elephant, a small ant: "big" and "small" are adjectives]]\n\n| It tells | Examples |\n|---|---|\n| Size | big, small, tall, short |\n| Colour | red, blue, green, black |\n| Number | one, two, many, few |\n| Kind | happy, kind, clever, brave |\n| Feel or taste | soft, hard, sweet, bitter |\n\n## Where do adjectives go?\nUsually an adjective comes just **before** the noun it describes: a **tall** boy, a **red** ball. It can also come after "is" or "are": The boy is **tall**.\n\n## Finding the adjective\nFind the noun, then ask **"What kind?"**, **"Which one?"** or **"How many?"**\n\n"The happy girl sang loudly." What kind of girl? A **happy** girl. So "happy" is the adjective.\n\n[[diagram: flow Find the noun -> Ask what kind -> That word is the adjective || How to find an adjective]]\n\n## Do not mix up\n- "loudly" tells how she sang. It describes the verb, so it is an adverb.\n- "happy" describes the girl, a noun, so it is an adjective.\n\n## Why adjectives matter\nAdjectives make our writing clear and interesting. Compare "I saw a dog" with "I saw a huge, black dog".`,
    examples: `**Example 1.** "The tall boy ran quickly." Which word is the adjective?\nWhat kind of boy? A **tall** boy.\n\n**Example 2.** "The hungry cat cried sadly." Which word is the adjective?\n**Hungry** describes the cat.\n\n**Example 3.** Which of these is an adjective: sing, clever, goat or slowly?\n**Clever** describes a person.`,
  },
  adverb: {
    title: "Adverbs: words that tell how",
    plain: "word that tells how the action was done",
    summary: "An adverb tells us more about a verb: how, when or where something is done. Many adverbs end in -ly.",
    notes: `## What is an adverb?\nAn **adverb** tells us more about a **verb**. It answers the questions how, when or where.\n\n| Question | Adverbs |\n|---|---|\n| How? | quickly, slowly, loudly, happily, carefully |\n| When? | now, today, yesterday, soon, early |\n| Where? | here, there, outside, upstairs, everywhere |\n\n[[diagram: picture 🐢 🐇 || The tortoise walks slowly. The rabbit runs quickly.]]\n\n## Adverbs that end in -ly\nMany adverbs are made by adding **-ly** to an adjective.\n- quick → quickly\n- loud → loudly\n- careful → carefully\n- happy → happily (the y changes to i)\n\n## Finding the adverb\nFind the verb, then ask **"How?"**\n\n"The boy ran quickly." How did he run? **Quickly**. So "quickly" is the adverb.\n\n[[diagram: flow Find the verb -> Ask how -> That word is the adverb || How to find an adverb]]\n\n## Adjective or adverb?\n- An **adjective** describes a noun: a **slow** car.\n- An **adverb** describes a verb: The car moved **slowly**.\n\n## Not every -ly word is an adverb\n"Friendly" and "lovely" end in -ly, but they describe nouns, so they are adjectives: a friendly dog.\n\n## Why adverbs matter\nAdverbs let the reader picture the action: "She closed the door" becomes "She closed the door quietly".`,
    examples: `**Example 1.** "The girl sang loudly." Which word is the adverb?\nHow did she sang? **Loudly**.\n\n**Example 2.** "The kind nurse worked carefully." Which word is the adverb?\n**Carefully** tells how she worked.\n\n**Example 3.** Which of these is an adverb: brave, slowly, goat or jump?\n**Slowly** tells how something is done.`,
  },
};
const wordClass = (kind: WordClass): Factory => (c) => {
  const info = CLASS_INFO[kind];
  return {
    title: info.title,
    subtopics: [`What ${an(kind)} ${kind} is`, `Examples of ${kind}s`, `Finding the ${kind} in a sentence`],
    objectives: [`Explain what ${an(kind)} ${kind} is`, `Give examples of ${kind}s`, `Pick out the ${kind} in a sentence`],
    summary: info.summary,
    notes: info.notes + HOW,
    examples: info.examples.replace("How did she sang?", "How did she sing?"),
    make: () => {
      const withAdj = c.g >= 2 || kind === "adjective";
      const [adj, noun, verb, adv] = [c.pick(D.T_ADJECTIVES), c.pick(D.T_NOUNS), c.pick(D.T_VERBS), c.pick(D.T_ADVERBS)];
      const sentence = withAdj ? `The ${adj} ${noun} ${verb} ${adv}.` : `The ${noun} ${verb} ${adv}.`;
      const words: Record<WordClass, string> = { noun, verb, adjective: adj, adverb: adv };
      const others = (Object.keys(words) as WordClass[]).filter((k) => k !== kind && (withAdj || k !== "adjective")).map((k) => words[k]);
      return wordQ(level(c.g), `Which word is the ${kind} (${info.plain}) in this sentence? "${sentence}"`, words[kind], [...others, "The"], `"${cap(words[kind])}" is the ${info.plain} in the sentence, so it is the ${kind}.`);
    },
  };
};

const articles: Factory = (c) => ({
  title: "Using a and an",
  subtopics: ["The words a and an", "Words that begin with a vowel sound", "One and more than one"],
  objectives: ["State that a and an are used before one thing", "Use an before words that begin with a vowel sound", "Use a before words that begin with a consonant sound"],
  summary: "Use a before a word that begins with a consonant sound and an before a word that begins with a vowel sound. Both mean one.",
  notes: `## A and an\nThe little words **a** and **an** both mean **one**. We put them before the name of one thing.\n\n- **a** book, **a** cat, **a** table\n- **an** apple, **an** egg, **an** umbrella\n\n[[diagram: picture 🍎 🥚 ☂️ || an apple, an egg, an umbrella]]\n\n## Which one do I use?\nLook at the **first sound** of the next word.\n\n| First sound | Use | Examples |\n|---|---|---|\n| Vowel sound (a, e, i, o, u) | an | an ant, an eye, an insect, an orange, an uncle |\n| Consonant sound | a | a ball, a dog, a girl, a pen, a tree |\n\n[[diagram: flow Say the next word -> Vowel sound? Use an -> Consonant sound? Use a || How to choose]]\n\n## Why do we say "an"?\nIt is hard to say "a apple" because two vowel sounds meet. The **n** in "an" makes it easy to say: "an apple".\n\n## Only for one\nWe use a and an for **one** thing only. For more than one we do not use them.\n- a book → books or two books (not "a books")\n- an egg → eggs or three eggs (not "an eggs")\n\n## It is the sound that matters\nA few words begin with a vowel letter but a consonant sound, or the other way round. We say **an hour** because the h is silent, and **a uniform** because it begins with a "y" sound. You will meet these in higher classes.`,
  examples: `**Example 1.** ___ orange.\nOrange begins with the vowel sound o, so we say **an orange**.\n\n**Example 2.** ___ goat.\nGoat begins with the consonant sound g, so we say **a goat**.\n\n**Example 3.** Which is correct: a eggs, an egg, a egg or an eggs?\n**An egg** is correct: one egg, beginning with a vowel sound.`,
  make: (_, i) => {
    const list = i % 2 === 0 ? D.AN_NOUNS : D.A_NOUNS;
    const noun = at(c, list, Math.floor(i / 2));
    const right = an(noun);
    const wrong = right === "an" ? "a" : "an";
    return wordQ("E", `Which is correct for one ${noun}?`, `${right} ${noun}`, [`${wrong} ${noun}`, `${right} ${noun}s`, `${wrong} ${noun}s`], `"${cap(noun)}" begins with a ${right === "an" ? "vowel" : "consonant"} sound, so we say "${right} ${noun}".`);
  },
});

const wordOrder: Factory = (c) => ({
  title: "Making simple sentences",
  subtopics: ["What a sentence is", "The order of words in a sentence", "Capital letter and full stop"],
  objectives: ["Explain that a sentence is a group of words that makes complete sense", "Arrange words in the right order to make a sentence", "Begin a sentence with a capital letter and end it with a full stop"],
  summary: "A sentence is a group of words that makes complete sense. It begins with a capital letter and ends with a full stop.",
  notes: `## What is a sentence?\nA **sentence** is a group of words that makes **complete sense**. It tells us something we can understand.\n\n- "The cat is black." This makes sense. It is a sentence.\n- "black the is cat" This does not make sense. The words are in the wrong order.\n\n## The order of words\nIn most English sentences the words come in this order:\n\n[[diagram: flow Who or what -> does or is -> the rest || The usual order of a sentence]]\n\n| Who or what | Does or is | The rest |\n|---|---|---|\n| The cat | is | black. |\n| I | have | a pen. |\n| We | go | to school. |\n| Birds | can fly | high. |\n\n## Two rules for writing a sentence\n1. Begin with a **capital letter**.\n2. End with a **full stop** (.).\n\n## How to arrange mixed-up words\n1. Find the word with the capital letter. It usually comes first.\n2. Find the doing word (the verb) and put it after the person or thing.\n3. Put the other words where they make sense.\n4. Read the sentence aloud. Does it sound right?\n\n## Leave spaces\nLeave a small space between one word and the next, so that your sentence is easy to read.`,
  examples: `**Example 1.** Arrange: is / ball / This / a\n"This" has a capital letter, so it comes first: **This is a ball.**\n\n**Example 2.** Arrange: a / have / I / pen\n**I have a pen.**\n\n**Example 3.** Arrange: school / We / to / go\n**We go to school.**`,
  make: (_, i) => {
    const sentence = at(c, D.WORD_ORDER, i);
    const words = sentence.split(" ");
    const mixed = c.shuffle(words);
    const wrong = [[...words].reverse(), [...words.slice(1), words[0]], [...words.slice(0, -2), words[words.length - 1], words[words.length - 2]]].map((w) => `${w.join(" ")}.`);
    return wordQ("E", `Arrange these words to make a correct sentence: ${mixed.join(" / ")}`, `${sentence}.`, wrong, `The words make sense in this order: "${sentence}."`);
  },
});

const pluralWrong = (w: string, right: string) => [`${w}s`, `${w}es`, `${w.slice(0, -1)}ies`, `${w}ies`, `${w}en`, `${w.slice(0, -1)}ves`, `${w}'s`].filter((x) => x !== right);
const plurals: Factory = (c) => {
  const data = D.PLURALS[c.tier];
  return {
    title: c.tier === 1 ? "One and many: adding s and es" : c.tier === 2 ? "Plurals that change their spelling" : "Irregular and special plurals",
    subtopics: ["Singular and plural", c.tier === 1 ? "Adding s or es" : "Rules for forming plurals", c.tier === 3 ? "Plurals that follow no rule" : "Common mistakes"],
    objectives: ["Explain the meaning of singular and plural", "Form the plural of a noun using the correct rule", "Use the right form of a noun for one and for many"],
    summary: "Singular means one; plural means more than one. Most nouns add s, but some add es, some change their ending and a few change completely.",
    notes: `## Singular and plural\n**Singular** means **one**. **Plural** means **more than one**.\n\n[[diagram: picture 📕 || one book (singular)]]\n\n[[diagram: picture 📕📗📘 || three books (plural)]]\n\n## The rules\n| Rule | Singular | Plural |\n|---|---|---|\n| Most nouns: add **s** | book, pen, girl | books, pens, girls |\n| Ending in s, x, sh, ch: add **es** | bus, box, dish, bench | buses, boxes, dishes, benches |\n| Consonant + y: change y to **ies** | baby, city, story | babies, cities, stories |\n| Vowel + y: just add **s** | boy, key, monkey | boys, keys, monkeys |\n| Ending in f or fe: change to **ves** | leaf, knife, wolf | leaves, knives, wolves |\n| Some ending in o: add **es** | tomato, mango, hero | tomatoes, mangoes, heroes |\n\n## Plurals that change inside\nSome nouns do not add s at all.\n\n| Singular | Plural |\n|---|---|\n| man | men |\n| woman | women |\n| child | children |\n| tooth | teeth |\n| foot | feet |\n| mouse | mice |\n| ox | oxen |\n\n## Nouns that stay the same\nsheep → sheep, fish → fish, deer → deer.\n\n## Exceptions worth knowing\nroof → roofs, chief → chiefs, radio → radios, piano → pianos, photo → photos.\n\n## Compound nouns\nMake the main word plural: passer-by → passers-by, son-in-law → sons-in-law.\n\n## Common mistakes\nWe do not say "childrens", "mens" or "furnitures". Children and men are already plural, and furniture has no plural.${HOW}`,
    examples: `**Example 1.** What is the plural of "${data[0][0]}"?\nThe plural is **${data[0][1]}**.\n\n**Example 2.** What is the plural of "${data[1][0]}"?\nThe plural is **${data[1][1]}**.\n\n**Example 3.** What is the plural of "${data[2][0]}"?\nThe plural is **${data[2][1]}**.`,
    make: (_, i) => {
      const [one, many] = at(c, data, i);
      return wordQ(level(c.g), `What is the plural of "${one}"?`, many, pluralWrong(one, many), `One ${one}, two or more ${many}.`);
    },
  };
};

const pastTense: Factory = (c) => {
  const data = D.PAST[c.tier];
  return {
    title: c.tier === 1 ? "Past tense: actions that are finished" : "Past tense of irregular verbs",
    subtopics: ["Present and past", "Regular verbs: adding ed", "Irregular verbs"],
    objectives: ["Explain the difference between present and past tense", "Form the past tense of regular verbs by adding ed", "Give the past tense of common irregular verbs"],
    summary: "The past tense tells of an action that is finished. Regular verbs add ed; irregular verbs change in their own way and must be learnt.",
    notes: `## Present and past\nThe **tense** of a verb tells us **when** the action happens.\n- **Present tense:** it happens now or every day. "I **walk** to school."\n- **Past tense:** it has already happened. "Yesterday I **walked** to school."\n\n[[diagram: flow yesterday (past) -> today (present) -> tomorrow (future) || The line of time]]\n\n## Regular verbs\nMost verbs form the past tense by adding **ed** (or just **d** if the verb ends in e).\n\n| Present | Past |\n|---|---|\n| walk | walked |\n| play | played |\n| jump | jumped |\n| dance | danced |\n| carry | carried (y changes to i) |\n| stop | stopped (the last letter is doubled) |\n\n## Irregular verbs\nSome verbs do **not** add ed. They change their spelling. There is no rule; we learn them by heart.\n\n| Present | Past |\n|---|---|\n${data.slice(0, 10).filter(([a, b]) => b !== `${a}ed`).slice(0, 7).map(([a, b]) => `| ${a} | ${b} |`).join("\n")}\n\n## Words that point to the past\nYesterday, last week, last year, ago, in 2020, when I was small. When you see these, use the past tense.\n\n## Common mistakes\n- Do not add ed to an irregular verb: we say "went", not "goed"; "ate", not "eated"; "bought", not "buyed".\n- After **did**, use the present form: "Did you **go**?" not "Did you went?"${HOW}`,
    examples: `**Example 1.** What is the past tense of "${data[0][0]}"?\nThe past tense is **${data[0][1]}**.\n\n**Example 2.** What is the past tense of "${data[2][0]}"?\nThe past tense is **${data[2][1]}**.\n\n**Example 3.** Yesterday I ___ (${data[3][0]}).\nThe sentence is about yesterday, so use the past tense: **${data[3][1]}**.`,
    make: (_, i) => {
      const [now, past] = at(c, data, i);
      return wordQ(level(c.g), `What is the past tense of "${now}"?`, past, [`${now}ed`, `${now}s`, `${now}ing`, `${now}en`].filter((x) => x !== past), `Today I ${now}; yesterday I ${past}.`);
    },
  };
};

const comparison: Factory = (c) => {
  const long = c.g >= 5;
  const data: D.Three[] = long ? D.COMPARE_LONG.map((w) => [w, `more ${w}`, `most ${w}`]) : c.g === 3 ? D.COMPARE_SIMPLE : D.COMPARE_IRREGULAR;
  return {
    title: long ? "Comparison with more and most" : "Comparison of adjectives",
    subtopics: ["Comparing two things", "Comparing three or more things", long ? "Long adjectives: more and most" : "Spelling changes and irregular forms"],
    objectives: ["Use the comparative form to compare two things", "Use the superlative form to compare three or more things", long ? "Use more and most with long adjectives" : "Spell comparative and superlative forms correctly"],
    summary: "To compare two things use the comparative (taller, more careful). To compare three or more use the superlative (tallest, most careful).",
    notes: `## Three degrees\nAn adjective has three forms, called **degrees of comparison**.\n\n| Degree | Used for | Example |\n|---|---|---|\n| Positive | one thing | Ada is **tall**. |\n| Comparative | two things | Bola is **taller** than Ada. |\n| Superlative | three or more | Chidi is the **tallest** in the class. |\n\n[[diagram: bars Ada=3, Bola=5, Chidi=7 || tall, taller, tallest]]\n\n## Short adjectives\nAdd **-er** for the comparative and **-est** for the superlative: small, smaller, smallest.\n\n## Spelling changes\n- Ends in e: add r, st → large, larger, largest.\n- Short word ending in one vowel + one consonant: double the last letter → big, bigger, biggest; hot, hotter, hottest.\n- Ends in consonant + y: change y to i → happy, happier, happiest.\n\n## Long adjectives\nFor adjectives of three or more syllables, do not add -er or -est. Use **more** and **most**.\n- beautiful, **more** beautiful, **most** beautiful\n- careful, **more** careful, **most** careful\n\n## Irregular adjectives\n| Positive | Comparative | Superlative |\n|---|---|---|\n| good | better | best |\n| bad | worse | worst |\n| many / much | more | most |\n| little | less | least |\n\n## Common mistakes\n- Never use both: "more taller" and "most tallest" are wrong.\n- Use **than** after a comparative: "taller than".\n- Use **the** before a superlative: "the tallest".${HOW}`,
    examples: `**Example 1.** What is the comparative form of "${data[0][0]}"?\nTo compare two things we say **${data[0][1]}**.\n\n**Example 2.** What is the superlative form of "${data[1][0]}"?\nTo compare three or more we say **${data[1][2]}**.\n\n**Example 3.** Lagos is ___ than Jos. (big)\nTwo places are compared, so use the comparative: **bigger**.`,
    make: (_, i) => {
      // Basic 3 and Basic 4 each have their own list; Basic 5 and 6 share the long adjectives.
      const [base, comp, sup] = long ? at(c, data, Math.floor(i / 2)) : data[Math.floor(i / 2) % data.length];
      const superlative = i % 2 === 1;
      const ans = superlative ? sup : comp;
      const wrong = long ? [superlative ? `more ${base}` : `most ${base}`, `${base}${superlative ? "est" : "er"}`, `${superlative ? "most" : "more"} ${base}${superlative ? "est" : "er"}`] : [superlative ? comp : sup, `${superlative ? "most" : "more"} ${base}`, `${superlative ? "most" : "more"} ${ans}`, `${base}${superlative ? "est" : "er"}`];
      return wordQ(level(c.g), `Which is the correct ${superlative ? "superlative" : "comparative"} form of "${base}"?`, ans, wrong, `${cap(base)}, ${comp}, ${sup}: the ${superlative ? "superlative" : "comparative"} is "${ans}".`);
    },
  };
};

const SINGULAR = ["The boy", "My mother", "The dog", "Ada", "The teacher", "He", "She", "The baby", "Our school", "My friend"];
const PLURAL = ["The boys", "My parents", "The dogs", "Ada and Bola", "The teachers", "They", "We", "The children", "Those men", "My friends"];
const agreement: Factory = (c) => ({
  title: c.g === 1 ? "Using is and are" : "Subject and verb agreement",
  subtopics: ["One and more than one", c.g === 1 ? "Is for one, are for many" : "Is and are, has and have", c.g === 1 ? "Making correct sentences" : "Was and were, does and do"],
  objectives: ["Tell whether the subject of a sentence is one or more than one", "Choose the verb that agrees with a singular subject", "Choose the verb that agrees with a plural subject"],
  summary: "The verb must agree with its subject. A singular subject takes is, has, was or does; a plural subject takes are, have, were or do.",
  notes: `## The subject\nThe **subject** of a sentence is the person or thing the sentence is about. It may be **singular** (one) or **plural** (more than one).\n\n- **The boy** is playing. (one boy: singular)\n- **The boys** are playing. (many boys: plural)\n\n[[diagram: picture 🧒 || The boy is playing.]]\n\n[[diagram: picture 🧒🧒🧒 || The boys are playing.]]\n\n## The verb must agree\n| Singular subject | Plural subject |\n|---|---|\n| is | are |\n| has | have |\n| was | were |\n| does | do |\n\n## Pronouns\n| Pronoun | Verbs |\n|---|---|\n| He, she, it | is, has, was, does |\n| We, you, they | are, have, were, do |\n| I | am, have, was, do |\n\n## Two names joined by "and"\nTwo people joined by **and** make a plural subject: "Ada **and** Bola **are** friends."\n\n## Steps\n1. Find the subject.\n2. Decide: one or more than one?\n3. Choose the verb that matches.\n\n[[diagram: flow Find the subject -> One or many? -> Choose the matching verb || Three steps]]\n\n## Common mistakes\n- "They is" and "He are" are wrong.\n- "The children **are**" (children is plural, although it has no s).\n- "She **has** a pen", not "She have a pen".\n- "He **does** not know", not "He do not know".${HOW}`,
  examples: `**Example 1.** The dog ___ barking. (is / are)\nOne dog is singular: **is**.\n\n**Example 2.** The girls ___ new bags. (has / have)\nMany girls is plural: **have**.\n\n**Example 3.** Ada and Bola ___ at the market yesterday. (was / were)\nTwo people make a plural subject: **were**.`,
  make: () => {
    const plural = c.int(0, 1) === 0;
    const subject = c.pick(plural ? PLURAL : SINGULAR);
    const frame = c.int(0, c.g === 1 ? 0 : 3);
    const [rest, pair, extra] = [
      [c.pick(["playing in the field", "reading a book", "going to the market", "sweeping the floor", "eating rice", "washing clothes", "singing a song"]), ["is", "are"], ["am", "be"]],
      [c.pick(["a new bag", "two pencils", "a big house", "many friends", "a red bicycle", "a clean uniform"]), ["has", "have"], ["having", "haves"]],
      [c.pick(["at the market yesterday", "in the class last week", "absent on Monday", "very happy yesterday", "late last Friday"]), ["was", "were"], ["been", "be"]],
      [c.pick(["not like noise", "not eat meat", "not come late", "not play rough games", "not tell lies"]), ["does", "do"], ["doing", "done"]],
    ][frame] as [string, [string, string], [string, string]];
    const ans = pair[plural ? 1 : 0];
    return wordQ(level(c.g), `Choose the correct word: "${subject} ___ ${rest}."`, ans, [pair[plural ? 0 : 1], ...extra], `"${subject}" is ${plural ? "plural (more than one)" : "singular (one)"}, so the verb is "${ans}".`);
  },
});

const SUBJECTS: D.Pair[] = [["Tunde", "He"], ["Ada", "She"], ["The dog", "It"], ["The boys", "They"], ["Musa and I", "We"], ["My mother", "She"], ["The book", "It"], ["Kemi and Bola", "They"], ["My father", "He"], ["The girls", "They"], ["My brother", "He"], ["My sister and I", "We"], ["The table", "It"], ["My aunt", "She"]];
const OBJECTS: D.Pair[] = [["Ada", "her"], ["Tunde", "him"], ["the children", "them"], ["my friend and me", "us"], ["the goat", "it"], ["my mother", "her"], ["my uncle", "him"], ["the books", "them"], ["the ball", "it"], ["Kemi and me", "us"]];
const pronouns: Factory = (c) => {
  const object = c.g >= 5;
  return {
    title: object ? "Pronouns as objects" : "Pronouns: words used instead of nouns",
    subtopics: ["What a pronoun is", object ? "Subject and object pronouns" : "He, she, it, we and they", "Choosing the right pronoun"],
    objectives: ["Explain that a pronoun takes the place of a noun", object ? "Distinguish subject pronouns from object pronouns" : "Match he, she, it, we and they to the nouns they replace", "Replace a noun in a sentence with the correct pronoun"],
    summary: "A pronoun is used in place of a noun so that we do not repeat the noun. Choose it by asking who or what the noun is.",
    notes: `## What is a pronoun?\nA **pronoun** is a word used **instead of a noun**. It saves us from saying the same name again and again.\n\n- Without pronouns: "Ada is my friend. Ada is kind. Ada helps me."\n- With pronouns: "Ada is my friend. **She** is kind. **She** helps me."\n\n## Subject pronouns\nThese do the action. They come **before** the verb.\n\n| Noun | Pronoun |\n|---|---|\n| a man or boy (Tunde, my father) | he |\n| a woman or girl (Ada, my mother) | she |\n| one thing or animal (the book, the dog) | it |\n| more than one (the boys, Kemi and Bola) | they |\n| another person and I (Musa and I) | we |\n\n[[diagram: flow Tunde went home -> He went home || "He" takes the place of "Tunde"]]\n\n## Object pronouns\nThese receive the action. They come **after** the verb or after words like to, for, with.\n\n| Subject | Object |\n|---|---|\n| I | me |\n| he | him |\n| she | her |\n| it | it |\n| we | us |\n| they | them |\n\n"I gave the book to **Ada**." → "I gave the book to **her**."\n\n## Possessive pronouns\nThese show who owns something: mine, yours, his, hers, ours, theirs. "This bag is **mine**."\n\n## Steps\n1. Find the noun to be replaced.\n2. Ask: male, female or thing? One or many? Does it include me?\n3. Ask: does it do the action (subject) or receive it (object)?\n\n## Common mistakes\n- "Me and Ada went" should be "Ada and **I** went".\n- "Give it to Ada and I" should be "Give it to Ada and **me**".${HOW}`,
    examples: `**Example 1.** "Tunde ate the food." Which pronoun can replace "Tunde"?\nTunde is a boy: **He**.\n\n**Example 2.** "The girls sang a song." Which pronoun can replace "The girls"?\nMore than one: **They**.\n\n**Example 3.** "The teacher called Ada." Which pronoun can replace "Ada"?\nAda receives the action and is a girl: **her**.`,
    make: () => {
      if (object) {
        const [noun, ans] = c.pick(OBJECTS);
        const thing = ans === "it" || noun === "the books";
        const frame = c.pick(thing ? ["We saw X at the market.", "Please look at X.", "The boy carried X.", "Father bought X.", "Do not touch X."] : ["I gave the book to X.", "The teacher called X.", "The driver thanked X.", "We saw X at the market.", "Please help X.", "The nurse smiled at X."]);
        return wordQ("H", `Which pronoun can replace "${noun}" in this sentence? "${frame.replace("X", noun)}"`, ans, ["her", "him", "them", "us", "it"].filter((p) => p !== ans), `"${cap(noun)}" receives the action, so the object pronoun "${ans}" replaces it.`);
      }
      const [noun, ans] = c.pick(SUBJECTS);
      const thing = noun === "The book" || noun === "The table";
      const pred = c.pick(thing ? ["fell down", "was on the floor", "got wet in the rain", "was very old", "was in the classroom", "was new"] : noun === "The dog" ? ["ran away", "ate the food", "fell down", "made a noise", "crossed the road", "waited outside"] : ["went to the market", "ate the food", "sang a song", "came early", "fell down", "stayed at home", "slept early", "made a noise", "crossed the road", "waited outside"]);
      return wordQ(level(c.g), `Which pronoun can replace "${noun}" in this sentence? "${noun} ${pred}."`, ans, ["He", "She", "It", "They", "We"].filter((p) => p !== ans), `"${noun}" is replaced by "${ans}".`);
    },
  };
};

const punctuation: Factory = (c) => ({
  title: c.tier === 1 ? "Capital letters and full stops" : c.tier === 2 ? "The question mark" : "Commas and apostrophes",
  subtopics: ["Why we punctuate", c.tier === 1 ? "Capital letters for names" : c.tier === 2 ? "Questions and statements" : "Commas in a list", c.tier === 3 ? "The apostrophe of ownership" : "Ending a sentence correctly"],
  objectives: ["Explain why punctuation marks are used", c.tier === 1 ? "Begin sentences and names with capital letters" : c.tier === 2 ? "End a question with a question mark" : "Separate the items in a list with commas", c.tier === 3 ? "Use an apostrophe to show ownership" : "Recognise a correctly punctuated sentence"],
  summary: "Punctuation marks make writing clear. A sentence begins with a capital letter and ends with a full stop, question mark or exclamation mark.",
  notes: `## Why do we punctuate?\nPunctuation marks are signs that help the reader. They show where a sentence begins and ends, where to pause and whether the sentence is a statement or a question.\n\n| Mark | Name | Use |\n|---|---|---|\n| . | full stop | ends a statement |\n| ? | question mark | ends a question |\n| ! | exclamation mark | shows strong feeling |\n| , | comma | a short pause; separates items in a list |\n| ' | apostrophe | shows ownership or missing letters |\n\n## Capital letters\nUse a capital letter:\n- to begin every sentence;\n- for names of people and places: Ada, Lagos, Nigeria;\n- for days and months: Monday, March;\n- for the word I.\n\n## Statements and questions\nA **statement** tells something and ends with a full stop: "We live in Lagos."\n\nA **question** asks something and ends with a question mark: "Where do you live?" Questions often begin with who, what, where, when, why, which, how, or with a helping verb such as is, are, do, can, will.\n\n[[diagram: flow Does it ask something? -> Yes: question mark -> No: full stop || Choosing the end mark]]\n\n## Commas in a list\nPut a comma after each item except the last two, which are joined by **and**: "I bought rice, beans, yam and oil."\n\n## The apostrophe of ownership\nAdd **'s** to the owner: the bag of Ada → **Ada's** bag. Do not use an apostrophe for a plain plural: two bags, not two bag's.\n\n## Check every sentence\n1. Capital letter at the start?\n2. Capital letters for names?\n3. Correct mark at the end?`,
  examples: `**Example 1.** Which is correct: "my name is Ada." or "My name is Ada."?\nA sentence begins with a capital letter: **My name is Ada.**\n\n**Example 2.** Which is correct: "Where do you live." or "Where do you live?"\nIt asks something, so it ends with a question mark: **Where do you live?**\n\n**Example 3.** Add commas: I bought rice beans yam and oil.\n**I bought rice, beans, yam and oil.**`,
  make: (_, i) => {
    let right: string;
    let wrong: string[];
    if (c.tier === 1) {
      const [s, noun] = at(c, D.STATEMENTS, i);
      right = s;
      wrong = [lower(s), s.replace(noun, noun.toLowerCase()), s.slice(0, -1)];
    } else if (c.tier === 2) {
      const s = at(c, D.QUESTIONS, i);
      right = `${s}?`;
      wrong = [`${s}.`, `${lower(s)}?`, s];
    } else if (i % 2 === 0) {
      const [lead, [a, b, d, e]] = at(c, D.LISTS, Math.floor(i / 2));
      right = `${lead} ${a}, ${b}, ${d} and ${e}.`;
      wrong = [`${lead} ${a} ${b} ${d} and ${e}.`, `${lead}, ${a}, ${b}, ${d} and ${e}.`, lower(right)];
    } else {
      const [owner, thing] = at(c, D.OWNERS, Math.floor(i / 2));
      right = `That is ${owner}'s ${thing}.`;
      wrong = [`That is ${owner}s ${thing}.`, `That is ${owner}s' ${thing}.`, `that is ${owner}'s ${thing}.`];
    }
    return wordQ(level(c.g), "Which sentence is written correctly?", right, wrong, `The correct sentence is: ${right}`, true);
  },
});

const ANIMAL_POOL: [string, string, string[], string][] = [
  ...D.YOUNG.map(([a, y]): [string, string, string[], string] => [`What is the young one of a ${a} called?`, y, D.YOUNG.map((p) => p[1]), `The young one of a ${a} is a ${y}.`]),
  ...D.SOUNDS.map(([a, s]): [string, string, string[], string] => [`Complete the sentence: "A ${a} ___."`, s, D.SOUNDS.map((p) => p[1]), `The sound of a ${a}: a ${a} ${s}.`]),
  ...D.HOMES.map(([a, h]): [string, string, string[], string] => [`What is the home of a ${a} called?`, h, D.HOMES.map((p) => p[1]), `A ${a} lives in a ${h}.`]),
].map((x, i, all) => all[(i * 7) % all.length]);
const animals: Factory = (c) => ({
  title: "Animals: their young ones, sounds and homes",
  subtopics: ["Names of young animals", "Sounds animals make", "Homes of animals"],
  objectives: ["Give the name of the young one of common animals", "State the sound made by common animals", "Name the homes of common animals"],
  summary: "Many animals have special words for their young, for the sound they make and for the place where they live.",
  notes: `## Young ones\nThe baby of an animal often has a special name.\n\n| Animal | Young one |\n|---|---|\n| dog | puppy |\n| cat | kitten |\n| cow | calf |\n| goat | kid |\n| sheep | lamb |\n| hen | chick |\n| lion | cub |\n| horse | foal |\n| duck | duckling |\n| frog | tadpole |\n\n[[diagram: picture 🐕 🐶 || A dog and its puppy]]\n\n## Sounds\nEach animal makes its own sound, and English has a word for it.\n\n| Animal | Sound |\n|---|---|\n| A dog | barks |\n| A cat | mews |\n| A lion | roars |\n| A cow | moos |\n| A goat | bleats |\n| A horse | neighs |\n| A cock | crows |\n| A snake | hisses |\n| A bee | buzzes |\n| A frog | croaks |\n\n[[diagram: picture 🦁 🐍 🐝 || A lion roars, a snake hisses, a bee buzzes]]\n\n## Homes\n| Animal | Home |\n|---|---|\n| bird | nest |\n| bee | hive |\n| dog | kennel |\n| horse | stable |\n| pig | sty |\n| lion | den |\n| spider | web |\n| rabbit | burrow |\n| hen | coop |\n\n[[diagram: picture 🐦 🪺 || A bird lives in a nest]]\n\n## How to remember\n- Make a small chart for each animal: young, sound, home.\n- Say them as a chant: "dog, puppy, barks, kennel".\n- Use them in sentences: "The lion roared in its den."${HOW}`,
  examples: `**Example 1.** What is the young one of a cow called?\nIt is a **calf**.\n\n**Example 2.** Complete: "A lion ___."\nA lion **roars**.\n\n**Example 3.** What is the young one of a hen called?\nIt is a **chick**.\n\n**Example 4.** What is the home of a bee called?\nIt is a **hive**.`,
  make: (_, i) => {
    const [stem, ans, pool, why] = at(c, ANIMAL_POOL, i);
    return wordQ("E", stem, ans, c.shuffle([...new Set(pool)].filter((x) => x !== ans)), why);
  },
});

const gender: Factory = (c) => ({
  title: "Gender: masculine and feminine",
  subtopics: ["Masculine and feminine nouns", "Common and neuter nouns", "Pairs of gender nouns"],
  objectives: ["Explain the meaning of masculine, feminine, common and neuter gender", "Give the feminine of common masculine nouns", "Give the masculine of common feminine nouns"],
  summary: "Masculine nouns name males and feminine nouns name females. Many come in pairs, such as king and queen, that must be learnt.",
  notes: `## The four genders\n| Gender | Meaning | Examples |\n|---|---|---|\n| Masculine | male persons and animals | man, boy, king, bull |\n| Feminine | female persons and animals | woman, girl, queen, cow |\n| Common | may be male or female | teacher, child, doctor, pupil |\n| Neuter | things without life | table, book, stone, pen |\n\n[[diagram: picture 🤴 👸 || king (masculine) and queen (feminine)]]\n\n## How the feminine is formed\n**1. A different word**\n| Masculine | Feminine |\n|---|---|\n| man | woman |\n| father | mother |\n| brother | sister |\n| uncle | aunt |\n| nephew | niece |\n| husband | wife |\n| bull | cow |\n| cock | hen |\n\n**2. Adding -ess**\n| Masculine | Feminine |\n|---|---|\n| prince | princess |\n| lion | lioness |\n| host | hostess |\n| actor | actress |\n| waiter | waitress |\n| tiger | tigress |\n\n**3. Changing part of the word**\n| Masculine | Feminine |\n|---|---|\n| landlord | landlady |\n| headmaster | headmistress |\n| bridegroom | bride |\n| hero | heroine |\n\n[[diagram: flow masculine -> different word, add -ess, or change a part -> feminine || Three ways the feminine is formed]]\n\n## Pronouns and gender\nUse **he** for the masculine, **she** for the feminine and **it** for the neuter.\n\n## Tip\nLearn the pairs together, saying them aloud: "king, queen; prince, princess; nephew, niece".${HOW}`,
  examples: `**Example 1.** What is the feminine of "king"?\nThe feminine is **queen**.\n\n**Example 2.** What is the masculine of "niece"?\nThe masculine is **nephew**.\n\n**Example 3.** What is the gender of "table"?\nA table has no life, so it is **neuter**.`,
  make: (_, i) => {
    const [m, f] = D.GENDER[(i + (c.g % 2 === 0 ? 15 : 0)) % D.GENDER.length];
    const fem = i < D.GENDER.length / 2 || i % 2 === 0;
    const ans = fem ? f : m;
    const pool = c.shuffle(D.GENDER.map((p) => (fem ? p[1] : p[0])).filter((x) => x !== ans));
    return wordQ(level(c.g), `What is the ${fem ? "feminine" : "masculine"} of "${fem ? m : f}"?`, ans, pool, `The pair is ${m} (masculine) and ${f} (feminine).`);
  },
});

const SWAP: Record<string, string> = { a: "e", e: "a", i: "e", o: "u", u: "o" };
function misspell(w: string): string[] {
  const mid = Math.floor(w.length / 2);
  const out = new Set<string>();
  const dbl = /(.)\1/.exec(w);
  out.add(dbl ? w.slice(0, dbl.index) + w.slice(dbl.index + 1) : w.slice(0, mid) + w.slice(mid + 1));
  if (w[mid] !== w[mid + 1]) out.add(w.slice(0, mid) + w[mid + 1] + w[mid] + w.slice(mid + 2));
  const v = [...w].findIndex((ch, i) => i > 0 && SWAP[ch]);
  if (v > 0) out.add(w.slice(0, v) + SWAP[w[v]] + w.slice(v + 1));
  const last = [...w].map((ch, i) => (SWAP[ch] ? i : -1)).filter((i) => i > v).pop();
  if (last !== undefined) out.add(w.slice(0, last) + SWAP[w[last]] + w.slice(last + 1));
  out.add(w.slice(0, mid) + w[mid] + w.slice(mid));
  out.delete(w);
  return [...out];
}
const spelling: Factory = (c) => {
  const data = c.g <= 4 ? D.SPELL_2 : D.SPELL_3;
  return {
    title: "Spelling",
    subtopics: ["Why correct spelling matters", "Spelling rules and tricky letters", "Checking your own spelling"],
    objectives: ["Explain why correct spelling is important", "Spell commonly used words correctly", "Use a method to learn and check the spelling of new words"],
    summary: "Good spelling makes your writing easy to read. Learn the tricky parts of words and always check what you have written.",
    notes: `## Why spelling matters\nWhen a word is spelt wrongly, the reader may not understand it, or may think of a different word. Correct spelling makes your writing clear and earns marks in every subject.\n\n## Look, say, cover, write, check\nThis is the best way to learn a new word.\n\n[[diagram: flow Look -> Say -> Cover -> Write -> Check || Five steps to learn a spelling]]\n\n1. **Look** at the word carefully and notice its shape.\n2. **Say** it aloud, part by part.\n3. **Cover** it with your hand.\n4. **Write** it from memory.\n5. **Check** it letter by letter. If it is wrong, do it again.\n\n## Useful rules\n- **i before e, except after c**: believe, friend; but receive, ceiling.\n- Drop the final **e** before adding -ing: come → coming, write → writing.\n- Double the last letter of a short word before -ing or -ed: run → running, stop → stopped.\n- Change **y** to **i** before -es or -ed: carry → carries, carried.\n\n## Tricky parts\n| Word | The tricky part |\n|---|---|\n| because | be-**cau**-se |\n| friend | fr-**ie**-nd |\n| people | pe-**o**-ple |\n| beautiful | b-**eau**-tiful |\n| necessary | one **c**, two **s** |\n| separate | sep-**a**-rate |\n| government | gover-**n**-ment |\n| receive | rec-**ei**-ve |\n\n## Break long words into parts\nSay the word in syllables and spell each part: tem-per-a-ture, en-vi-ron-ment, im-me-di-ate-ly.\n\n## Silent letters\nSome letters are written but not sounded: the **k** in knowledge, the **w** in answer and written, the **b** in doubt.\n\n## Use a dictionary\nWhen you are not sure, look the word up. A dictionary shows the correct spelling and the meaning.${HOW}`,
    examples: `**Example 1.** Which is correct: becuase, because, becose or becaus?\nThe correct spelling is **because**.\n\n**Example 2.** Which is correct: freind, frend, friend or friendd?\n"i before e": **friend**.\n\n**Example 3.** Which is correct: neccessary, necessary, necesary or neccesary?\nOne c and two s: **necessary**.`,
    make: (_, i) => {
      const word = at(c, data, i);
      return wordQ(level(c.g), "Which word is spelt correctly?", word, c.shuffle(misspell(word)), `The correct spelling is "${word}".`);
    },
  };
};

const gapTopic = (kind: "prepositions" | "conjunctions"): Factory => (c) => {
  const prep = kind === "prepositions";
  const data = prep ? D.PREPOSITIONS : D.CONJUNCTIONS;
  return {
    title: prep ? "Prepositions" : "Conjunctions: joining words",
    subtopics: prep ? ["What a preposition is", "Prepositions of place and time", "Words that take a fixed preposition"] : ["What a conjunction is", "And, but, or, so, because", "Although, unless, until and other joining words"],
    objectives: prep ? ["Explain what a preposition shows", "Use prepositions of place and time correctly", "Use the correct preposition after common words"] : ["Explain what a conjunction does", "Join two sentences with a suitable conjunction", "Choose the conjunction that gives the right meaning"],
    summary: prep ? "A preposition shows how a noun is related to another word: where, when or how. The right preposition must often be learnt with the word it follows." : "A conjunction joins words or sentences. The conjunction you choose shows how the two ideas are linked: adding, contrasting, choosing, giving a reason or a result.",
    notes: prep
      ? `## What is a preposition?\nA **preposition** is a word placed before a noun or pronoun to show its **relation** to another word. It often tells **where** or **when**.\n\n"The cat is **under** the bed." The word "under" shows where the cat is.\n\n## Prepositions of place\n| Preposition | Example |\n|---|---|\n| on | The book is on the table. |\n| in | The pen is in the bag. |\n| under | The cat is under the bed. |\n| above | The fan is above our heads. |\n| between | Ada sat between Bola and Kemi. |\n| among | Share it among the five children. |\n| across | They walked across the bridge. |\n| into | He jumped into the river. |\n\n[[diagram: flow on the table -> in the bag -> under the bed || Where is it?]]\n\n## Prepositions of time\n| Use | For | Example |\n|---|---|---|\n| at | clock times | at eight o'clock |\n| on | days and dates | on Friday, on 1st October |\n| in | months, years, seasons | in December, in 2026 |\n| since | a starting point | since 2020 |\n| for | a length of time | for two hours |\n\n## Between and among\nUse **between** for two, and **among** for more than two.\n\n## Words with a fixed preposition\nafraid **of**, good **at**, married **to**, absent **from**, listen **to**, full **of**, travel **by** bus, divide **by**, arrive **at**, congratulate **on**.\n\n## Common mistakes\n- "good in Mathematics" should be "good **at** Mathematics".\n- "married with" should be "married **to**".\n- "I have lived here since two years" should be "**for** two years".${HOW}`
      : `## What is a conjunction?\nA **conjunction** is a **joining word**. It joins words, groups of words or sentences.\n\n"Ada **and** Bola are friends." "I was tired, **so** I slept."\n\n[[diagram: flow I was hungry -> so -> I ate some bread || A conjunction joins two ideas]]\n\n## What each conjunction shows\n| Conjunction | It shows | Example |\n|---|---|---|\n| and | adding | She sang and danced. |\n| but, yet | contrast | He is small but strong. |\n| or | a choice | Tea or coffee? |\n| so | a result | It rained, so we stayed in. |\n| because | a reason | He stayed in because he was ill. |\n| although, though | a surprise | Although it rained, we went out. |\n| if, unless | a condition | You will fail unless you work. |\n| when, while, before, after, until | time | Wait until I come back. |\n\n## Reason or result?\n- **because** introduces the **reason**: "I ate **because** I was hungry."\n- **so** introduces the **result**: "I was hungry, **so** I ate."\n\n## Unless\n**Unless** means "if not": "You will fail unless you work hard" means "You will fail if you do not work hard."\n\n## Pairs that go together\n- either ... **or**\n- neither ... **nor**\n- not only ... **but** also\n- so ... **that**\n\n## How to choose\n1. Read the two parts of the sentence.\n2. Decide how they are linked: adding, contrast, choice, reason, result, condition or time.\n3. Pick the conjunction that shows that link.\n\n## Common mistake\nDo not use two conjunctions for one job: "Although he is rich, but he is humble" is wrong. Say "Although he is rich, he is humble."${HOW}`,
    examples: `**Example 1.** "${data[0][0]}"\nThe missing word is **${data[0][1]}**.\n\n**Example 2.** "${data[1][0]}"\nThe missing word is **${data[1][1]}**.\n\n**Example 3.** "${data[2][0]}"\nThe missing word is **${data[2][1]}**.`,
    make: (_, i) => {
      const [sentence, ans, wrong] = at(c, data, i);
      return wordQ(level(c.g), `Choose the correct word to complete the sentence: "${sentence}"`, ans, wrong, `The complete sentence is: "${sentence.replace("___", ans)}"`);
    },
  };
};

const similes: Factory = (c) => ({
  title: "Similes and other figures of speech",
  subtopics: ["What a simile is", "Common similes", "Metaphor and personification"],
  objectives: ["Explain what a simile is", "Complete common similes correctly", "Distinguish a simile from a metaphor and from personification"],
  summary: "A simile compares two things using as or like: as brave as a lion. Figures of speech make writing vivid.",
  notes: `## What is a figure of speech?\nA **figure of speech** is a special way of using words to make a picture in the reader's mind. The words do not mean exactly what they say.\n\n## Simile\nA **simile** compares two different things using **as** or **like**.\n- as brave **as** a lion\n- as busy **as** a bee\n- She sings **like** a bird.\n\n[[diagram: picture 🦁 🐝 🐌 || as brave as a lion, as busy as a bee, as slow as a snail]]\n\n## Common similes\n| Simile | Meaning |\n|---|---|\n| as white as snow | very white |\n| as cold as ice | very cold |\n| as sweet as honey | very sweet |\n| as light as a feather | very light |\n| as quiet as a mouse | very quiet |\n| as wise as an owl | very wise |\n| as cunning as a fox | very clever at tricking |\n| as gentle as a lamb | very gentle |\n| as proud as a peacock | very proud |\n| as stubborn as a mule | refusing to change |\n\n## Metaphor\nA **metaphor** says one thing **is** another. It does not use as or like.\n- "The classroom was a market." (It was very noisy.)\n- "My father is a lion." (He is very brave.)\n\n## Personification\n**Personification** gives human actions to things that are not human.\n- "The wind whispered through the trees."\n- "The sun smiled on the village."\n\n[[diagram: flow uses as or like: simile -> says it is: metaphor -> thing acts like a person: personification || Telling them apart]]\n\n## Using them well\nFigures of speech make compositions lively, but do not use too many. One good simile is better than five tired ones.${HOW}`,
  examples: `**Example 1.** Complete the simile: as brave as ___\nThe usual ending is **a lion**.\n\n**Example 2.** Complete the simile: as cold as ___\nThe usual ending is **ice**.\n\n**Example 3.** "The stars danced in the sky." Which figure of speech is this?\nStars are given a human action, so it is **personification**.`,
  make: (_, i) => {
    const [adj, ans] = at(c, D.SIMILES, i);
    return wordQ("H", `Complete the simile: as ${adj} as ___`, ans, c.shuffle(D.SIMILE_WRONG), `The usual simile is "as ${adj} as ${ans}".`);
  },
});

const PROPER = ["Lagos", "Monday", "Amina", "Nigeria", "December", "Kano", "Christmas", "Africa", "Tunde", "Abuja", "January", "Ibadan"];
const COMMON = ["city", "day", "girl", "country", "month", "river", "teacher", "market", "book", "village", "doctor", "table"];
const COLLECTIVE = ["herd", "flock", "team", "swarm", "crowd", "bunch", "choir", "army", "fleet", "audience", "troop", "bouquet"];
const ABSTRACT = ["honesty", "love", "anger", "courage", "wisdom", "kindness", "fear", "joy", "freedom", "beauty", "patience", "hunger"];
const GROUP_OF: D.Pair[] = [["herd", "cattle"], ["flock", "sheep"], ["swarm", "bees"], ["bunch", "bananas"], ["team", "players"], ["choir", "singers"], ["crowd", "people"], ["fleet", "ships"], ["bouquet", "flowers"], ["library", "books"], ["troop", "monkeys"], ["pride", "lions"], ["army", "soldiers"], ["pack", "cards"], ["staff", "teachers"]];
const nounTypes: Factory = (c) => ({
  title: "Kinds of nouns",
  subtopics: ["Common and proper nouns", "Collective nouns", "Abstract nouns"],
  objectives: ["Distinguish a proper noun from a common noun", "Give the collective noun for a group", "Identify abstract nouns"],
  summary: "Nouns are of different kinds: common nouns are general names, proper nouns are special names, collective nouns name groups and abstract nouns name ideas and feelings.",
  notes: `## Four kinds of nouns\n| Kind | What it names | Examples |\n|---|---|---|\n| Common noun | any one of a kind | city, girl, river, month |\n| Proper noun | one particular person, place or thing | Lagos, Amina, River Niger, December |\n| Collective noun | a group taken as one | herd, team, choir, swarm |\n| Abstract noun | an idea, feeling or quality | honesty, love, courage, anger |\n\n## Common and proper nouns\nA **common noun** is a general name. A **proper noun** is the special name of one, and it always begins with a **capital letter**.\n\n| Common | Proper |\n|---|---|\n| city | Kano |\n| girl | Amina |\n| day | Monday |\n| country | Nigeria |\n\n[[diagram: flow city (common) -> Which city? -> Lagos (proper) || From common to proper]]\n\n## Collective nouns\nA **collective noun** is one word for a group.\n\n| Group | Collective noun |\n|---|---|\n| cattle | a herd |\n| sheep or birds | a flock |\n| bees | a swarm |\n| bananas or keys | a bunch |\n| players | a team |\n| singers | a choir |\n| ships | a fleet |\n| flowers | a bouquet |\n| lions | a pride |\n\n[[diagram: picture 🐄🐄🐄 || a herd of cattle]]\n\n## Abstract nouns\nAn **abstract noun** names something we cannot see or touch. We can only think of it or feel it: honesty, kindness, fear, joy, freedom, wisdom.\n\nThe opposite is a **concrete noun**, which names something we can see or touch: table, water, stone.\n\nMany abstract nouns are made from adjectives: honest → honesty, kind → kindness, wise → wisdom, brave → bravery.\n\n## How to decide\n1. Is it a special name with a capital letter? Proper.\n2. Is it one word for a group? Collective.\n3. Can it not be seen or touched? Abstract.\n4. Otherwise it is a common noun.${HOW}`,
  examples: `**Example 1.** Which is a proper noun: city, Lagos, market or river?\n**Lagos** is the special name of one city.\n\n**Example 2.** Complete: a ___ of bees.\nThe collective noun is **swarm**.\n\n**Example 3.** Which is an abstract noun: table, honesty, goat or teacher?\n**Honesty** cannot be seen or touched.`,
  make: () => {
    const kind = c.int(0, 3);
    if (kind === 3) {
      const [group, of] = c.pick(GROUP_OF);
      return wordQ(level(c.g), `Complete with the correct collective noun: a ___ of ${of}`, group, c.shuffle(GROUP_OF.map((p) => p[0]).filter((x) => x !== group)), `The collective noun is "a ${group} of ${of}".`);
    }
    const [name, list, rest] = [["a proper", PROPER, [...COMMON, ...ABSTRACT]], ["a collective", COLLECTIVE, [...COMMON, ...ABSTRACT, ...PROPER]], ["an abstract", ABSTRACT, [...COMMON, ...COLLECTIVE]]][kind] as [string, string[], string[]];
    const ans = c.pick(list);
    return wordQ(level(c.g), `Which of these is ${name} noun?`, ans, c.shuffle(rest), `"${ans}" is ${name} noun.`);
  },
});

const letterWriting: Factory = (c) => ({
  title: c.g === 4 ? "Writing an informal letter" : c.g === 5 ? "Writing a formal letter" : "Letters and compositions",
  subtopics: ["Informal and formal letters", "The parts of a letter", "Planning and writing a composition"],
  objectives: ["Distinguish an informal letter from a formal letter", "Set out the parts of a letter in the correct order", "Plan a composition with an introduction, a body and a conclusion"],
  summary: "An informal letter goes to someone you know well and has one address; a formal letter goes to an office and has two. Every piece of writing needs a beginning, a middle and an end.",
  notes: `## Two kinds of letter\n| | Informal letter | Formal letter |\n|---|---|---|\n| Written to | family and friends | a head teacher, an office, a company |\n| Addresses | one (the writer's) | two (the writer's and the receiver's) |\n| Greeting | Dear Uncle, Dear Ada, | Dear Sir, Dear Madam, |\n| Title | none | a short title after the greeting |\n| Language | friendly | polite and exact; no slang |\n| Closing | Yours sincerely, | Yours faithfully, |\n\n## The parts of an informal letter\n[[diagram: flow Address and date -> Greeting -> Body -> Closing -> Name || The order of an informal letter]]\n\n1. **Writer's address**, at the top right-hand corner.\n2. **Date**, just below the address.\n3. **Salutation** (greeting): "Dear Aunty Bisi,"\n4. **Body**: an opening paragraph, the main message, a closing paragraph.\n5. **Closing**: "Yours sincerely,"\n6. **Writer's name**.\n\n## The extra parts of a formal letter\n- The **receiver's address** is written on the left, below the date.\n- A **title** (heading) comes after "Dear Sir," and says what the letter is about.\n- The writer signs and writes the full name.\n\n## Writing a composition\nA good composition has three parts.\n\n| Part | What it does |\n|---|---|\n| Introduction | tells the reader what you will write about |\n| Body | gives your points, one main idea in each paragraph |\n| Conclusion | rounds off your writing |\n\n## Kinds of composition\n- **Narrative**: tells a story of what happened.\n- **Descriptive**: tells what a person, place or thing is like.\n- **Argumentative**: gives reasons for or against a point, as in a debate.\n\n## Steps to a good piece of writing\n1. Read the question carefully.\n2. Make an **outline** of your points.\n3. Write in paragraphs, each beginning on a new line.\n4. Use words such as first, next, then and finally to show order.\n5. Read it over and correct mistakes in spelling and punctuation.${HOW}`,
  examples: `**Example 1.** How many addresses has an informal letter?\nOnly the writer's address: **one**.\n\n**Example 2.** Which closing goes with "Dear Sir,"?\nA formal letter ends **Yours faithfully,**\n\n**Example 3.** What are the three parts of a composition?\n**Introduction, body and conclusion.**`,
  make: (_, i) => {
    if (i >= 10) return null;
    const [stem, ans, ...wrong] = D.LETTERS[(c.g - 4) * 10 + i];
    return wordQ(level(c.g), stem, ans, wrong, `The correct answer is "${ans}".`, true);
  },
});

const comprehension: Factory = (c) => {
  const p = D.PASSAGES[c.g - 1];
  return {
    title: `Reading comprehension: ${p.title}`,
    subtopics: ["Reading for meaning", "Finding answers in the passage", "Working out the meaning of words"],
    objectives: ["Read a short passage with understanding", "Answer questions using information from the passage", "Work out the meaning of a word from the sentence around it"],
    summary: "Comprehension means understanding what you read. Read the passage carefully, then find each answer in the passage itself.",
    notes: `## What is comprehension?\n**Comprehension** means **understanding**. In a comprehension exercise you read a passage and answer questions to show that you understood it.\n\n## How to read a passage\n[[diagram: flow Read it all -> Read the questions -> Read again and find the answers -> Check || Four steps]]\n\n1. **Read the whole passage** once, quietly, to see what it is about.\n2. **Read the questions.** Now you know what to look for.\n3. **Read the passage again**, slowly. Find the sentence that answers each question.\n4. **Check** each answer against the passage.\n\n## Kinds of questions\n| Question word | It asks for |\n|---|---|\n| Who | a person |\n| What | a thing or an action |\n| Where | a place |\n| When | a time or day |\n| Why | a reason (look for "because") |\n| How | the way something is done |\n\n## The answer is in the passage\nDo not answer from what you already know or guess. The answer must come from **what the passage says**. If the passage says the ball is red, the answer is red, even if your own ball is blue.\n\n## Meaning of words\nIf you meet a word you do not know, read the whole sentence again. The other words give you **clues** to its meaning.\n\n## "Which of these is not ..." questions\nRead carefully. Three of the options are in the passage. The answer is the one that is **not** there.\n\n## The passage for this lesson\n**${p.title}**\n\n${p.text}\n\n## Good reading habits\n- Read something every day: storybooks, newspapers, notices.\n- Read with your eyes, not with your finger or lips.\n- Ask yourself "Who? What? Where? When? Why?" as you read.`,
    examples: `**Example 1.** ${p.questions[0][0]}\nFind the sentence in the passage that tells you. The answer is **${p.questions[0][1]}**.\n\n**Example 2.** ${p.questions[1][0]}\nThe passage says: **${p.questions[1][1]}**.\n\n**Example 3.** ${p.questions[2][0]}\nLook again at the passage. The answer is **${p.questions[2][1]}**.`,
    make: (_, i): Q | null => {
      if (i >= p.questions.length) return null;
      const [question, ans, ...wrong] = p.questions[i];
      return wordQ(level(c.g), `Read the passage, then answer the question.\n\n${p.text}\n\n${question}`, ans, wrong, `The passage tells us this: ${ans}.`);
    },
  };
};

const plan = (g: number): Factory[] =>
  g === 1
    ? [alphabetCase, phonics, wordClass("noun"), wordClass("verb"), articles, wordOrder, plurals, agreement, pronouns, punctuation, animals, comprehension]
    : g === 2
      ? [phonics, wordClass("noun"), wordClass("verb"), wordClass("adjective"), articles, plurals, pastTense, agreement, pronouns, punctuation, animals, comprehension]
      : g === 3
        ? [wordClass("adjective"), wordClass("adverb"), comparison, plurals, pastTense, agreement, pronouns, gapTopic("prepositions"), punctuation, gender, spelling, comprehension]
        : g === 4
          ? [nounTypes, comparison, plurals, pastTense, agreement, pronouns, gapTopic("prepositions"), punctuation, gender, spelling, letterWriting, comprehension]
          : [nounTypes, comparison, plurals, pastTense, agreement, pronouns, gapTopic("conjunctions"), punctuation, similes, spelling, letterWriting, comprehension];

export const primaryEnglish: SubjectPack = {
  code: "ENG",
  name: "Primary English Studies",
  version: "2026.1",
  classes: ["BASIC1", "BASIC2", "BASIC3", "BASIC4", "BASIC5", "BASIC6"],
  entrance: true,
  terms: buildPrimaryTerms("PENG", plan),
};
