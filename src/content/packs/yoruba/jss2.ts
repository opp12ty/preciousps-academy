import type { TermPlan } from "../types";

/** JSS2 Yoruba — original Precious PS content following the national Basic Education structure. Explanations are given in English with Yoruba terms and examples. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Numbers 20 to 100",
        subtopics: ["The tens", "Adding to a ten", "Subtracting from a ten", "The base-twenty system"],
        objectives: ["Count in tens from 20 to 100", "Form numbers by adding to a ten", "Form numbers by subtracting from the next ten", "Explain how Yoruba counting is built on twenty"],
        lesson: {
          title: "Òǹkà: 20 – 100",
          summary: "Count from twenty to one hundred and understand the Yoruba number system.",
          minutes: 40,
          notes: `## Counting in twenties
Yoruba counting is built on **twenty (ogún)**. The even tens are **multiples of twenty**; the odd tens are **ten less than the next twenty**.

| Figure | Yoruba | How it is formed |
|---|---|---|
| 20 | **ogún** | — |
| 30 | **ọgbọ̀n** | — |
| 40 | **ogójì** | 20 × 2 |
| 50 | **àádọ́ta** | (20 × 3) − 10 |
| 60 | **ọgọ́ta** | 20 × 3 |
| 70 | **àádọ́rin** | (20 × 4) − 10 |
| 80 | **ọgọ́rin** | 20 × 4 |
| 90 | **àádọ́rùn-ún** | (20 × 5) − 10 |
| 100 | **ọgọ́rùn-ún** | 20 × 5 |

**ogó- / ọgọ́-** = "twenties"; **àád-** = "ten less than".

## Adding 1 – 4 to a ten
Use **-lé-** ("on top of") with the ten:
| Figure | Yoruba | Idea |
|---|---|---|
| 21 | **ọ̀kànlélógún** | 1 on 20 |
| 22 | **èjìlélógún** | 2 on 20 |
| 23 | **ẹ̀tàlélógún** | 3 on 20 |
| 24 | **ẹ̀rìnlélógún** | 4 on 20 |
| 31 | **ọ̀kànlélọ́gbọ̀n** | 1 on 30 |
| 41 | **ọ̀kànlélógójì** | 1 on 40 |

## Subtracting 5 – 1 from the next ten
From the fifth number, count **back from the next ten** with **-dín-** ("less"):
| Figure | Yoruba | Idea |
|---|---|---|
| 25 | **ẹ̀ẹ́dọ́gbọ̀n** | 30 − 5 |
| 26 | **ẹ̀rìndínlọ́gbọ̀n** | 30 − 4 |
| 27 | **ẹ̀tàdínlọ́gbọ̀n** | 30 − 3 |
| 28 | **èjìdínlọ́gbọ̀n** | 30 − 2 |
| 29 | **ọ̀kàndínlọ́gbọ̀n** | 30 − 1 |
| 35 | **àrùndínlógójì** | 40 − 5 |
| 45 | **àrùndínláàádọ́ta** | 50 − 5 |

## The pattern in one line
For any ten **T**: T+1 to T+4 use **-lé-**; T+5 to T+9 use **-dín-** from the next ten.

## Counting objects
The number follows the noun: **ọmọ ogún** (twenty children); **ìwé ọgbọ̀n** (thirty books); **ọgọ́rùn-ún náírà** (a hundred naira).

## Why learn the traditional numbers?
They show the mathematical skill of our ancestors — a system of **addition, subtraction and multiplication** built on twenty — and they are still used in markets, proverbs and literature.

## Practice
Count in tens: **ẹ̀wá, ogún, ọgbọ̀n, ogójì, àádọ́ta, ọgọ́ta, àádọ́rin, ọgọ́rin, àádọ́rùn-ún, ọgọ́rùn-ún**.`,
          examples: `**Example 1.** What is 40 in Yoruba, and how is it formed? *Answer:* **ogójì** — "twenty times two".

**Example 2.** What is 50? *Answer:* **àádọ́ta** — ten less than sixty (ọgọ́ta).

**Example 3.** Explain **ọ̀kànlélógún**. *Answer:* **21** — "one on top of twenty".`,
        },
        questions: [
          ["E", "The Yoruba word for 30 is", "ọgbọ̀n", "ogójì", "ọgọ́ta", "àádọ́ta", "It comes after ogún."],
          ["E", "'Ogójì' is the number", "40", "30", "60", "14", "It means twenty in two places."],
          ["E", "The Yoruba word for 100 is", "ọgọ́rùn-ún", "ọgọ́rin", "ọgọ́ta", "àádọ́rùn-ún", "It is five twenties."],
          ["M", "'Àádọ́ta' is the number", "50", "70", "90", "15", "It is ten less than sixty."],
          ["M", "The Yoruba word for 60 is", "ọgọ́ta", "ọgọ́rin", "ogójì", "àádọ́rin", "It means three twenties."],
          ["M", "'Ọ̀kànlélógún' is the number", "21", "19", "11", "31", "It means one added to twenty."],
          ["M", "Yoruba counting is based mainly on the number", "twenty", "ten", "five", "twelve", "The even tens are multiples of ogún."],
          ["H", "'Àádọ́rin' is the number", "70", "50", "80", "17", "It is ten less than eighty."],
          ["H", "The Yoruba word for 80 is", "ọgọ́rin", "ọgọ́ta", "àádọ́rùn-ún", "ogójì", "It means four twenties."],
          ["H", "In the number 'ọ̀kànlélógún', the part '-lé-' means", "added on top of", "taken away from", "multiplied by", "divided by", "It is used for the first four numbers after a ten."],
        ],
      },
      {
        week: 2,
        title: "Verbs",
        subtopics: ["What a verb is", "Common verbs", "Verbs do not change form", "Splitting and serial verbs"],
        objectives: ["Define a verb", "Use common Yoruba verbs in sentences", "Explain that Yoruba verbs do not change with the subject", "Recognise splitting verbs and verbs used in a series"],
        lesson: {
          title: "Ọ̀rọ̀-ìṣe",
          summary: "Identify and use Yoruba verbs.",
          minutes: 40,
          notes: `## What is a verb?
A **verb** (**ọ̀rọ̀-ìṣe**) is a word that tells **what the subject does** or the **state** it is in. It is the heart of the sentence: without a verb there is no sentence.

## Common verbs
| Yoruba | English | Yoruba | English |
|---|---|---|---|
| **lọ** | go | **wá** | come |
| **jẹ** | eat | **mu** | drink |
| **sùn** | sleep | **jí** | wake |
| **rí** | see | **gbọ́** | hear |
| **sọ** | say | **kà** | read; count |
| **kọ** | write | **rà** | buy |
| **tà** | sell | **ṣe** | do; make |
| **fẹ́** | want; love | **mọ̀** | know |
| **sáré** | run | **rìn** | walk |
| **jókòó** | sit | **dìde** | stand up |
| **gbé** | carry; live | **fọ̀** | wash |
| **sè** | cook | **kọrin** | sing |

Most Yoruba verbs are **one syllable** and **begin with a consonant**.

## Verbs do not change form
The verb is the **same** whatever the subject:
- **Mo lọ.** — I went.
- **Ó lọ.** — He went.
- **Wọ́n lọ.** — They went.
There is no "-s", "-ed" or "-ing". Time is shown by **small words placed before the verb** (next lessons).

A plain action verb with no marker usually refers to the **past**: **Mo jẹ iṣu** — I ate yam.

## Verbs of state
Some verbs describe a condition, and the plain form refers to the **present**:
- **Ó ga.** — He is tall.
- **Omi tutù.** — The water is cold.
- **Mo mọ̀.** — I know.

## Verb + noun combinations
Many verbs join with a noun to make a common expression:
- **jẹ + oúnjẹ → jẹun** — eat (food)
- **kọ + orin → kọrin** — sing
- **kà + ìwé → kàwé** — read
- **pa + ilẹ̀kùn + dé → pa ilẹ̀kùn dé** — shut the door

## Splitting verbs
Some two-part verbs **split** to take the object in the middle:
- **bàjẹ́** (spoil): **Ó ba aṣọ jẹ́.** — He spoilt the cloth.
- **gbàgbọ́** (believe): **Mo gba Ọlọ́run gbọ́.** — I believe God.

## Serial verbs
Yoruba often uses **two or more verbs in a row** with one subject:
- **Ó sáré lọ.** — He ran away (ran-go).
- **Mú ìwé wá.** — Bring the book (take-book-come).
- **Ó ra ẹja jẹ.** — He bought fish and ate it.

## Commands
The bare verb gives an order: **Wá!** (Come!), **Jókòó!** (Sit!), **Lọ!** (Go!). For respect or the plural, add **Ẹ**: **Ẹ wá.**

## Finding the verb
> Bọ́lá **ra** aṣọ ní ọjà. — Bọ́lá **bought** cloth at the market.`,
          examples: `**Example 1.** Define **ọ̀rọ̀-ìṣe**. *Answer:* A **verb** — a word showing an action or a state.

**Example 2.** Does the verb change in "Mo lọ" and "Wọ́n lọ"? *Answer:* **No** — Yoruba verbs keep the same form for every subject.

**Example 3.** Pick out the verb: **Adé kọ lẹ́tà.** *Answer:* **kọ** (wrote).`,
        },
        questions: [
          ["E", "The Yoruba term for 'verb' is", "ọ̀rọ̀-ìṣe", "ọ̀rọ̀-orúkọ", "ọ̀rọ̀-àpọ́nlé", "ọ̀rọ̀-asopọ̀", "Ìṣe means action."],
          ["E", "The Yoruba verb meaning 'go' is", "lọ", "wá", "jẹ", "mu", "Wá means 'come'."],
          ["E", "The Yoruba verb 'jẹ' means", "eat", "drink", "sleep", "write", "As in 'Mo jẹ iṣu'."],
          ["M", "Which of the following is a verb?", "sùn", "ilé", "ọmọ", "ìwé", "It means 'sleep'."],
          ["M", "The Yoruba verb meaning 'buy' is", "rà", "tà", "kà", "kọ", "Tà means 'sell'."],
          ["M", "In 'Bọ́lá ra aṣọ', the verb is", "ra", "Bọ́lá", "aṣọ", "none", "It tells what Bọ́lá did."],
          ["M", "'Mu' means", "drink", "cook", "carry", "run", "As in 'mu omi' — drink water."],
          ["H", "Which statement about Yoruba verbs is correct?", "They keep the same form for every subject", "They add -s for he and she", "They change their ending for the past", "They must have three syllables", "Time is shown by separate markers before the verb."],
          ["H", "'Mú ìwé wá' (bring the book) is an example of", "serial verbs", "a nasal vowel", "a proper noun", "a proverb", "Two verbs, mú and wá, share one subject."],
          ["H", "In 'Ó ba aṣọ jẹ́' (He spoilt the cloth), the verb 'bàjẹ́' is described as", "a splitting verb", "a noun", "a pronoun", "an adjective", "The object comes between its two parts."],
        ],
      },
      {
        week: 3,
        title: "The simple sentence",
        subtopics: ["Word order", "Subject, verb and object", "Sentences with 'ni' and 'jẹ́'", "Sentences of place"],
        objectives: ["State the normal word order of a Yoruba sentence", "Identify subject, verb and object", "Make identifying sentences with ni and jẹ́", "Make sentences of place with wà and ní"],
        lesson: {
          title: "Gbólóhùn rírọrùn",
          summary: "Build simple Yoruba sentences with the correct word order.",
          minutes: 40,
          notes: `## The sentence
A **sentence** (**gbólóhùn**) is a group of words that makes complete sense. A simple sentence has **one verb**.

## Word order: Subject – Verb – Object
Like English, Yoruba normally puts the **subject (olùwà)** first, then the **verb (ọ̀rọ̀-ìṣe)**, then the **object (àbọ̀)**.

| Subject | Verb | Object | Meaning |
|---|---|---|---|
| **Adé** | **jẹ** | **iṣu** | Adé ate yam. |
| **Ìyá** | **ra** | **aṣọ** | Mother bought cloth. |
| **Mo** | **rí** | **ajá** | I saw a dog. |
| **Wọ́n** | **kọ** | **lẹ́tà** | They wrote a letter. |

Some sentences have **no object**:
- **Ọmọ náà sùn.** — The child slept.
- **Òjò rọ̀.** — Rain fell.

## Describing words follow the noun
- **ilé ńlá** — a big house
- **ọmọ kékeré** — a small child
- **ìwé mi** — my book
- **ọmọ mẹ́ta** — three children

So: **Ọmọ kékeré náà jẹ ẹ̀wà.** — The small child ate beans.

## Sentences with "ni" — identifying
**ni** means "is / it is" when identifying. The thing identified comes **first**.
- **Olùkọ́ ni Bàbá Adé.** — Adé's father is a teacher.
- **Ìwé ni èyí.** — This is a book.
- **Èmi ni.** — It is I.

## Sentences with "jẹ́"
**jẹ́** also means "be" (to be something):
- **Adé jẹ́ akẹ́kọ̀ọ́.** — Adé is a student.
- **Ó jẹ́ ọ̀rẹ́ mi.** — He is my friend.

## Sentences of place: "wà" and "ní"
**wà** = to be (in a place); **ní** = at / in.
- **Ìwé wà lórí tábìlì.** — The book is on the table.
- **Bàbá wà ní ilé.** — Father is at home.
- **Mo wà ní Èkó.** — I am in Lagos.

## Sentences with "ní" — to have
- **Mo ní ìwé.** — I have a book.
- **Ó ní owó.** — He has money.
(This **ní**, "have", is a verb; the other **ní**, "at", is a preposition.)

## Focus
To stress a word, move it to the front and add **ni**:
- **Adé ra ìwé.** — Adé bought a book.
- **Ìwé ni Adé rà.** — It was *a book* that Adé bought.
- **Adé ni ó ra ìwé.** — It was *Adé* who bought a book.

## Building practice
Subject + verb + object + place:
> **Túndé ra búrẹ́dì ní ọjà.** — Túndé bought bread at the market.`,
          examples: `**Example 1.** What is the normal word order in Yoruba? *Answer:* **Subject – Verb – Object**.

**Example 2.** Identify the parts of "Ìyá ra aṣọ". *Answer:* **Ìyá** (subject), **ra** (verb), **aṣọ** (object).

**Example 3.** Translate "The book is on the table." *Answer:* **Ìwé wà lórí tábìlì**.`,
        },
        questions: [
          ["E", "The Yoruba term for 'sentence' is", "gbólóhùn", "sílébù", "òwe", "oríkì", "It is a group of words that makes complete sense."],
          ["E", "The normal word order in a Yoruba sentence is", "subject – verb – object", "verb – subject – object", "object – subject – verb", "verb – object – subject", "As in 'Adé jẹ iṣu'."],
          ["E", "In 'Adé jẹ iṣu', the subject is", "Adé", "jẹ", "iṣu", "none", "He is the doer of the action."],
          ["M", "'Ìwé ni èyí' means", "This is a book", "Where is the book?", "I have a book", "The book is big", "Ni identifies the thing named first."],
          ["M", "'Bàbá wà ní ilé' means", "Father is at home", "Father has a house", "Father built a house", "Father left home", "Wà means 'to be in a place'."],
          ["M", "'Mo ní ìwé' means", "I have a book", "I am a book", "I read a book", "I am in a book", "Here ní is the verb 'to have'."],
          ["M", "In Yoruba, a describing word normally comes", "after the noun", "before the noun", "at the start of the sentence", "before the subject pronoun", "As in 'ilé ńlá' — a big house."],
          ["H", "'Adé jẹ́ akẹ́kọ̀ọ́' means", "Adé is a student", "Adé ate with a student", "Adé saw a student", "Adé has a student", "Jẹ́ with a high tone means 'to be'."],
          ["H", "In 'Ìwé ni Adé rà', the word 'ìwé' has been moved to the front in order to", "emphasise it", "make it plural", "turn it into a verb", "make the sentence negative", "Fronting with ni marks focus."],
          ["H", "Which of the following sentences has no object?", "Ọmọ náà sùn", "Mo rí ajá", "Ìyá ra aṣọ", "Wọ́n kọ lẹ́tà", "The verb 'sùn' (sleep) needs no object."],
        ],
      },
      {
        week: 4,
        title: "Showing time: tense and aspect",
        subtopics: ["Past action", "Action in progress", "Completed action", "Future action"],
        objectives: ["Express past action with the plain verb", "Express continuous action with ń", "Express completed action with ti", "Express future action with yóò or máa"],
        lesson: {
          title: "Àsìkò nínú gbólóhùn",
          summary: "Show when an action happens using Yoruba pre-verb markers.",
          minutes: 40,
          notes: `## How Yoruba shows time
The Yoruba verb never changes. **Small words (markers) placed between the subject and the verb** show the time or state of the action.

## 1. Simple past — the plain verb
An action verb with **no marker** refers to a finished action:
- **Mo lọ sí ọjà.** — I went to the market.
- **Adé jẹ iṣu.** — Adé ate yam.

## 2. Continuous — ń
**ń** before the verb shows an action **going on** (or done regularly):
- **Mo ń lọ sí ọjà.** — I am going to the market.
- **Adé ń jẹ iṣu.** — Adé is eating yam.
- **Òjò ń rọ̀.** — It is raining.

## 3. Perfect — ti
**ti** shows an action **already completed**:
- **Mo ti lọ.** — I have gone.
- **Adé ti jẹ iṣu.** — Adé has eaten yam.
- **Wọ́n ti dé.** — They have arrived.

## 4. Future — yóò / máa
**yóò** (also **á**, **máa**) shows an action **yet to happen**:
- **Èmi yóò lọ.** / **Màá lọ.** — I will go.
- **Adé yóò jẹ iṣu.** — Adé will eat yam.
- **A máa rí yín ní ọ̀la.** — We will see you tomorrow.

## 5. Habitual — máa ń
- **Mo máa ń jí ní kùtùkùtù.** — I usually wake up early.

## Summary
| Marker | Use | Example | Meaning |
|---|---|---|---|
| (none) | past | **Ó wá** | He came |
| **ń** | continuous | **Ó ń bọ̀** | He is coming |
| **ti** | perfect | **Ó ti wá** | He has come |
| **yóò / máa** | future | **Yóò wá** | He will come |
| **máa ń** | habitual | **Ó máa ń wá** | He usually comes |

(With **ń**, the verb "come" takes the form **bọ̀**: **Ó ń bọ̀**.)

## Combining markers
- **Ó ti ń sùn.** — He is already sleeping.
- **Yóò ti lọ.** — He will have gone.

## Time words
These make the time clear:
| Yoruba | English |
|---|---|
| **lánàá** | yesterday |
| **lónìí** | today |
| **lọ́la** | tomorrow |
| **nísinsìnyí** | now |
| **láìpẹ́** | soon |
| **tẹ́lẹ̀** | before, formerly |
| **lọ́dún tó kọjá** | last year |
| **lọ́sẹ̀ tó ń bọ̀** | next week |

- **Mo rí i lánàá.** — I saw him yesterday.
- **Màá rí i lọ́la.** — I will see him tomorrow.

## Order in the sentence
**Subject + marker + verb + object + time word**
> **Bọ́lá ń ka ìwé nísinsìnyí.** — Bọ́lá is reading a book now.`,
          examples: `**Example 1.** Change to continuous: **Mo jẹun.** *Answer:* **Mo ń jẹun** (I am eating).

**Example 2.** What does **ti** show in "Wọ́n ti dé"? *Answer:* That the action is **completed** — "They have arrived".

**Example 3.** Translate "I will go tomorrow." *Answer:* **Màá lọ lọ́la** (or *Èmi yóò lọ lọ́la*).`,
        },
        questions: [
          ["E", "In Yoruba, the time of an action is shown by", "small markers placed before the verb", "changing the ending of the verb", "changing the subject", "doubling the object", "The verb itself does not change."],
          ["E", "'Mo ń jẹun' means", "I am eating", "I have eaten", "I will eat", "I ate", "The marker ń shows an action in progress."],
          ["E", "'Lọ́la' means", "tomorrow", "yesterday", "now", "last year", "It points to the future."],
          ["M", "The marker that shows a completed action is", "ti", "ń", "yóò", "kò", "As in 'Mo ti lọ' — I have gone."],
          ["M", "'Adé yóò wá' means", "Adé will come", "Adé is coming", "Adé has come", "Adé came", "Yóò marks the future."],
          ["M", "'Wọ́n ti dé' means", "They have arrived", "They are arriving", "They will arrive", "They did not arrive", "Ti marks the perfect."],
          ["M", "'Lánàá' means", "yesterday", "today", "soon", "next week", "It is used with past actions."],
          ["H", "'Mo máa ń jí ní kùtùkùtù' means", "I usually wake up early", "I will wake up early", "I have woken up early", "I woke up early", "Máa ń marks a habit."],
          ["H", "The correct Yoruba for 'It is raining' is", "Òjò ń rọ̀", "Òjò ti rọ̀", "Òjò yóò rọ̀", "Òjò rọ̀", "The continuous marker ń is needed."],
          ["H", "'Ó ti ń sùn' means", "He is already sleeping", "He will sleep", "He did not sleep", "He usually sleeps", "The markers ti and ń are combined."],
        ],
      },
      {
        week: 5,
        title: "Negation",
        subtopics: ["Negating a statement with kò", "Negating habits and future", "Negative commands", "Negating identification"],
        objectives: ["Make statements negative with kò / ò", "Negate habitual and future sentences", "Give negative commands with má", "Negate identifying sentences with kọ́"],
        lesson: {
          title: "Ìyísódì",
          summary: "Turn Yoruba statements and commands into the negative.",
          minutes: 40,
          notes: `## What is negation?
**Ìyísódì** means turning a statement into its opposite — saying that something is **not** so.

## 1. kò / ò — "not"
Place **kò** (often shortened to **ò**) before the verb.
| Positive | Negative |
|---|---|
| **Adé lọ.** — Adé went. | **Adé kò lọ.** — Adé did not go. |
| **Ó jẹun.** — He ate. | **Kò jẹun.** — He did not eat. |
| **Wọ́n wá.** — They came. | **Wọn kò wá.** — They did not come. |
| **Mo mọ̀.** — I know. | **N kò mọ̀. / Mi ò mọ̀.** — I do not know. |

Notes:
- with **"I"**, **mo** becomes **n** or **mi**: **N kò lọ / Mi ò lọ**.
- the pronoun **ó** (he/she) **drops out** before kò: **Kò lọ** — He did not go.

## 2. Negating the continuous
**ń** disappears:
- **Ó ń sùn.** — He is sleeping. → **Kò sùn.** — He is not sleeping.

## 3. Negating the perfect: kò tí ì — "not yet"
- **Ó ti dé.** — He has arrived. → **Kò tí ì dé.** — He has not yet arrived.

## 4. Negating the future: kò ní í
- **Yóò lọ.** — He will go. → **Kò ní í lọ.** — He will not go.
- **Màá wá.** — I will come. → **N kò ní í wá.** — I will not come.

## 5. Negating a habit: kì í
- **Ó máa ń mu ọtí.** — He drinks alcohol. → **Kì í mu ọtí.** — He does not drink alcohol.
- **A kì í sọ̀rọ̀ ní kíláàsì.** — We do not talk in class.

Many proverbs use **kì í**: *"…kì í…"* — "does not / never".

## 6. Negative commands: má
- **Lọ!** — Go! → **Má lọ!** — Do not go!
- **Ẹ sọ̀rọ̀.** — Speak. → **Ẹ má sọ̀rọ̀.** — Do not speak.
- **Má ṣe purọ́.** — Do not tell lies.

## 7. Negating identification: kọ́
With **ni** sentences use **kọ́**:
- **Ìwé ni èyí.** — This is a book. → **Ìwé kọ́ ni èyí.** — This is not a book.
- **Èmi ni.** — It is I. → **Èmi kọ́.** — It is not I.

## 8. "There is none": kò sí
- **Omi wà.** — There is water. → **Kò sí omi.** — There is no water.
- **Bàbá wà ní ilé.** → **Bàbá kò sí ní ilé.** — Father is not at home.

## 9. "Does not have": kò ní
- **Mo ní owó.** — I have money. → **N kò ní owó.** — I have no money.

## Summary
| Positive | Negative marker |
|---|---|
| plain / ń | **kò (ò)** |
| ti | **kò tí ì** |
| yóò / máa | **kò ní í** |
| máa ń | **kì í** |
| command | **má** |
| ni | **kọ́** |
| wà | **kò sí** |

## Answering "no"
**Rárá** or **Bẹ́ẹ̀ kọ́** — No. **Rárá, n kò rí i.** — No, I did not see it.`,
          examples: `**Example 1.** Make negative: **Adé jẹun.** *Answer:* **Adé kò jẹun**.

**Example 2.** Make negative: **Lọ!** *Answer:* **Má lọ!** (Do not go!)

**Example 3.** Translate "There is no water." *Answer:* **Kò sí omi**.`,
        },
        questions: [
          ["E", "The Yoruba term for 'negation' is", "ìyísódì", "ìkíni", "ìbéèrè", "ìsọ̀rí", "It means turning a statement to its opposite."],
          ["E", "The negative of 'Adé lọ' is", "Adé kò lọ", "Adé ti lọ", "Adé ń lọ", "Adé yóò lọ", "Kò before the verb means 'not'."],
          ["E", "'Má lọ!' means", "Do not go!", "Go now!", "He has gone", "Let us go", "Má makes a command negative."],
          ["M", "'N kò mọ̀' means", "I do not know", "I know", "He knows", "We will know", "With kò, 'mo' becomes 'n'."],
          ["M", "'Kò sí omi' means", "There is no water", "The water is cold", "Bring water", "He drank water", "Kò sí is the negative of wà."],
          ["M", "The negative of 'Ìwé ni èyí' is", "Ìwé kọ́ ni èyí", "Ìwé kò èyí", "Má ìwé èyí", "Ìwé kì í èyí", "Kọ́ negates identifying sentences."],
          ["M", "The marker used to negate a habitual action is", "kì í", "kọ́", "má", "ti", "As in 'Kì í mu ọtí'."],
          ["H", "'Kò tí ì dé' means", "He has not yet arrived", "He will not arrive", "He never arrives", "He arrived late", "It is the negative of 'Ó ti dé'."],
          ["H", "The negative of 'Yóò lọ' (He will go) is", "Kò ní í lọ", "Kò tí ì lọ", "Kì í lọ", "Má lọ", "Kò ní í negates the future."],
          ["H", "In the negative sentence 'Kò lọ' (He did not go), the subject pronoun 'ó' has", "dropped out before kò", "changed to 'mo'", "moved to the end", "become plural", "The third person singular pronoun is omitted before kò."],
        ],
      },
      {
        week: 6,
        title: "Asking questions",
        subtopics: ["Yes or no questions", "Question words", "Asking about number and price", "Answering questions"],
        objectives: ["Form yes/no questions with ṣé and bí", "Use the question words kí, ta, níbo, ìgbà wo, báwo and èéṣe", "Ask how many and how much", "Give suitable answers to questions"],
        lesson: {
          title: "Gbólóhùn ìbéèrè",
          summary: "Ask and answer questions in Yoruba.",
          minutes: 40,
          notes: `## Two kinds of question
1. questions answered by **yes or no**
2. questions that ask for **information**, using a question word

## 1. Yes / no questions
Put **Ṣé** (or **Ǹjẹ́**) at the **beginning**, or **bí** at the **end**, of the statement.
| Statement | Question |
|---|---|
| **O ti jẹun.** — You have eaten. | **Ṣé o ti jẹun?** — Have you eaten? |
| **Adé wà nílé.** — Adé is at home. | **Ṣé Adé wà nílé?** — Is Adé at home? |
| **O mọ̀ ọ́n.** — You know him. | **O mọ̀ ọ́n bí?** — Do you know him? |

Answers: **Bẹ́ẹ̀ ni** (Yes) / **Rárá** or **Bẹ́ẹ̀ kọ́** (No).

## 2. Question words
The question word comes **first**, usually followed by **ni**.
| Yoruba | English | Example |
|---|---|---|
| **Kí ni…?** | What…? | **Kí ni o ń ṣe?** — What are you doing? |
| **Ta ni…?** | Who…? | **Ta ni ó wá?** — Who came? |
| **Níbo ni…?** | Where…? | **Níbo ni o ń lọ?** — Where are you going? |
| **Ìgbà wo ni…?** | When…? | **Ìgbà wo ni o dé?** — When did you arrive? |
| **Báwo ni…?** | How…? | **Báwo ni iṣẹ́?** — How is work? |
| **Èéṣe / Kí ló dé tí…?** | Why…? | **Èéṣe tí o fi pẹ́?** — Why are you late? |
| **Èwo ni…?** | Which…? | **Èwo ni o fẹ́?** — Which one do you want? |
| **Mélòó ni…?** | How many…? | **Ọmọ mélòó ni o ní?** — How many children have you? |
| **Èló ni…?** | How much (price)? | **Èló ni èyí?** — How much is this? |
| **Ti ta ni…?** | Whose…? | **Ti ta ni ìwé yìí?** — Whose book is this? |

## Mélòó and Èló
- **Mélòó** asks the **number** of things: *Ìwé mélòó?* — How many books?
- **Èló** asks the **price** or amount of money: *Èló ni bàtà yìí?* — How much are these shoes?

## Answering
The answer usually **replaces the question word**:
- **Kí ni orúkọ rẹ?** — **Orúkọ mi ni Kẹ́mi.**
- **Níbo ni o ń gbé?** — **Abẹ́òkúta ni mo ń gbé.**
- **Ta ni ó mu omi mi?** — **Túndé ni.**
- **Èló ni?** — **Igba náírà ni.** (It is two hundred naira.)
- **Ìgbà wo ni ẹ máa dé?** — **Lọ́la ni.** (Tomorrow.)

## Questions with "ńkọ́" and "dà"
- **Bàbá rẹ ńkọ́?** — How about your father? / Where is your father?
- **Ìwé mi dà?** — Where is my book?

## A dialogue
> **Olùkọ́:** Kí ni orúkọ rẹ?
> **Akẹ́kọ̀ọ́:** Orúkọ mi ni Ṣadé.
> **Olùkọ́:** Níbo ni o ti wá?
> **Akẹ́kọ̀ọ́:** Oǹdó ni mo ti wá.
> **Olùkọ́:** Ṣé o fẹ́ràn ilé-ìwé yìí?
> **Akẹ́kọ̀ọ́:** Bẹ́ẹ̀ ni, Sà.

## Punctuation
A question ends with the question mark (**àmì ìbéèrè**).`,
          examples: `**Example 1.** Turn into a question: **O ti jẹun.** *Answer:* **Ṣé o ti jẹun?**

**Example 2.** Ask "Where are you going?" *Answer:* **Níbo ni o ń lọ?**

**Example 3.** What is the difference between **mélòó** and **èló**? *Answer:* **Mélòó** asks **how many**; **èló** asks **how much (price)**.`,
        },
        questions: [
          ["E", "The word placed at the beginning of a statement to make a yes/no question is", "Ṣé", "Kọ́", "Má", "Ti", "As in 'Ṣé o ti jẹun?'"],
          ["E", "'Ta ni?' means", "Who?", "What?", "Where?", "When?", "It asks about a person."],
          ["E", "The Yoruba word for 'yes' is", "bẹ́ẹ̀ ni", "rárá", "jọ̀ọ́", "ó dàbọ̀", "Rárá means 'no'."],
          ["M", "'Níbo ni o ń lọ?' means", "Where are you going?", "When are you going?", "Why are you going?", "Who is going?", "Níbo asks about place."],
          ["M", "The question word used to ask the price of something is", "Èló", "Mélòó", "Èwo", "Báwo", "As in 'Èló ni èyí?'"],
          ["M", "'Kí ni o ń ṣe?' means", "What are you doing?", "Where do you live?", "Who are you?", "How old are you?", "Kí ni asks 'what'."],
          ["M", "'Ìgbà wo ni o dé?' asks about", "the time of arrival", "the place of arrival", "the reason for coming", "the number of people", "Ìgbà wo means 'when'."],
          ["H", "'Ọmọ mélòó ni o ní?' means", "How many children have you?", "How old is your child?", "Where is your child?", "Whose child is this?", "Mélòó asks about number."],
          ["H", "The best answer to 'Èéṣe tí o fi pẹ́?' would explain", "why the person is late", "where the person lives", "what the person's name is", "how much something costs", "Èéṣe asks for a reason."],
          ["H", "'Ti ta ni ìwé yìí?' means", "Whose book is this?", "Which book is this?", "Where is this book?", "What book is this?", "Ti ta ni asks about ownership."],
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
        title: "Adjectives",
        subtopics: ["What an adjective is", "Common adjectives", "Position of the adjective", "Describing with verbs of quality"],
        objectives: ["Define an adjective", "Use common Yoruba adjectives", "Place adjectives correctly after nouns", "Describe using verbs of quality"],
        lesson: {
          title: "Ọ̀rọ̀-àpèjúwe",
          summary: "Describe people and things with Yoruba adjectives.",
          minutes: 40,
          notes: `## What is an adjective?
An **adjective** (**ọ̀rọ̀-àpèjúwe**) is a word that **describes or tells more about a noun**.

## Position
The adjective comes **after** the noun it describes:
- **ilé ńlá** — a big house
- **ọmọ kékeré** — a small child
- **aṣọ tuntun** — a new cloth
- **obìnrin arẹwà** — a beautiful woman

## Common adjectives
| Yoruba | English | Opposite | English |
|---|---|---|---|
| **ńlá** | big | **kékeré** | small |
| **gíga** | tall | **kúkúrú** | short |
| **tuntun** | new | **àtijọ́ / ògbólógbòó** | old |
| **dáradára** | good | **burúkú** | bad |
| **gbígbóná** | hot | **tútù** | cold |
| **dídùn** | sweet | **kíkorò** | bitter |
| **púpọ̀** | many, much | **díẹ̀** | few, little |
| **funfun** | white | **dúdú** | black |
| **líle** | hard | **rírọ̀** | soft |
| **mímọ́** | clean | **dídọ̀tí** | dirty |
| **gígùn** | long | **kúrú** | short |

## Kinds of adjective
- **of quality**: **ọmọ rere** — a good child
- **of colour**: **bàtà dúdú** — black shoes
- **of number**: **ìwé méjì** — two books; **ọmọ kẹta** — the third child
- **of quantity**: **omi díẹ̀** — a little water
- **demonstrative**: **ìwé yìí** — this book; **ìwé yẹn** — that book
- **possessive**: **ilé mi** — my house

## Describing with verbs of quality
Very often Yoruba describes with a **verb** rather than an adjective. These verbs mean "to be…":
| Verb | Meaning | Sentence |
|---|---|---|
| **ga** | be tall | **Adé ga.** — Adé is tall. |
| **kúrú** | be short | **Bọ́lá kúrú.** — Bọ́lá is short. |
| **tóbi** | be big | **Ilé náà tóbi.** — The house is big. |
| **kéré** | be small | **Ọmọ náà kéré.** — The child is small. |
| **dára** | be good | **Aṣọ yìí dára.** — This cloth is good. |
| **gbóná** | be hot | **Omi gbóná.** — The water is hot. |
| **dùn** | be sweet | **Oyin dùn.** — Honey is sweet. |
| **pọ̀** | be many | **Wọ́n pọ̀.** — They are many. |

## From verb to adjective
Many adjectives are formed by **repeating the first consonant with "í"**:
- **ga** → **gíga** (tall)
- **dùn** → **dídùn** (sweet)
- **le** → **líle** (hard)
- **gbóná** → **gbígbóná** (hot)
So: **Igi náà ga.** (The tree is tall.) but **igi gíga** (a tall tree).

## Several adjectives
- **ọmọ kékeré dúdú kan** — a small dark child
- **ilé ńlá méjì yẹn** — those two big houses

## Comparison
Use **ju … lọ** ("more than"):
- **Adé ga ju Bọ́lá lọ.** — Adé is taller than Bọ́lá.
- **Ó dára jù lọ.** — It is the best.`,
          examples: `**Example 1.** Translate "a new book". *Answer:* **ìwé tuntun**.

**Example 2.** Give the opposite of **ńlá**. *Answer:* **kékeré** (small).

**Example 3.** Translate "Adé is taller than Bọ́lá." *Answer:* **Adé ga ju Bọ́lá lọ**.`,
        },
        questions: [
          ["E", "The Yoruba term for 'adjective' is", "ọ̀rọ̀-àpèjúwe", "ọ̀rọ̀-ìṣe", "ọ̀rọ̀-orúkọ", "ọ̀rọ̀-asopọ̀", "Àpèjúwe means description."],
          ["E", "'Ilé ńlá' means", "a big house", "a small house", "a new house", "my house", "Ńlá means big. Answer: a big house."],
          ["E", "The opposite of 'ńlá' is", "kékeré", "gíga", "tuntun", "púpọ̀", "It means small."],
          ["M", "'Aṣọ tuntun' means", "a new cloth", "an old cloth", "a white cloth", "a dirty cloth", "Tuntun means new."],
          ["M", "The opposite of 'gíga' (tall) is", "kúkúrú", "ńlá", "díẹ̀", "líle", "It means short."],
          ["M", "'Omi tútù' means", "cold water", "hot water", "dirty water", "much water", "Tútù means cold."],
          ["M", "'Adé ga' means", "Adé is tall", "Adé is short", "Adé is good", "Adé is big", "Ga is a verb of quality meaning 'be tall'."],
          ["H", "The adjective formed from the verb 'dùn' (be sweet) is", "dídùn", "dùndùn", "adùn", "ìdùn nìkan", "The first consonant is repeated with í."],
          ["H", "'Adé ga ju Bọ́lá lọ' means", "Adé is taller than Bọ́lá", "Adé and Bọ́lá are tall", "Adé is shorter than Bọ́lá", "Adé went with Bọ́lá", "Ju … lọ expresses comparison."],
          ["H", "In 'ìwé yìí' (this book), the word 'yìí' is", "a demonstrative adjective", "a verb", "a noun", "a question word", "It points out which book is meant."],
        ],
      },
      {
        week: 2,
        title: "Proverbs",
        subtopics: ["What proverbs are", "Uses of proverbs", "Some proverbs and their meanings", "How proverbs are introduced"],
        objectives: ["Define a proverb", "State the uses of proverbs in Yoruba society", "Explain the meaning of common proverbs", "Use the right formula when quoting a proverb before elders"],
        lesson: {
          title: "Òwe",
          summary: "Understand and use Yoruba proverbs.",
          minutes: 40,
          notes: `## What is a proverb?
A **proverb** (**òwe**) is a **short, wise saying** handed down by the elders, which teaches a truth about life. The Yoruba say:
> **Òwe lẹṣin ọ̀rọ̀; bí ọ̀rọ̀ bá sọnù, òwe ni a fi ń wá a.**
> *A proverb is the horse of speech; when speech is lost, we use a proverb to find it.*

## Features
- **short** and easy to remember
- contains **deep wisdom**
- uses **images** from farm, home, animals and nature
- has a **surface meaning** and a **deeper meaning**
- belongs to the **whole community**; no one knows who first said it

## Uses
- to **advise** and **warn**
- to **teach** good behaviour
- to **settle disputes**
- to **encourage** or **console**
- to **rebuke** gently
- to **make speech rich** and persuasive
- to **preserve** the wisdom of the elders

## Some proverbs
| Òwe | Meaning |
|---|---|
| **Bí ọmọdé bá mọ ọwọ́ wẹ̀, á bá àgbà jẹun.** — *If a child knows how to wash his hands, he will eat with elders.* | Good conduct brings honour beyond one's years. |
| **Ilé là á wò ká tó sọ ọmọ lórúkọ.** — *We look at the home before naming a child.* | Consider the circumstances before acting. |
| **Igi kan kì í dá igbó ṣe.** — *One tree does not make a forest.* | No one succeeds alone; co-operate. |
| **Àgbà kì í wà lọ́jà kí orí ọmọ tuntun wọ́.** — *An elder is not in the market while a baby's head hangs crooked.* | Elders must correct what is going wrong. |
| **Ọwọ́ ọmọdé kò tó pẹpẹ, ti àgbàlagbà kò wọ kèrègbè.** — *A child's hand cannot reach the shelf; an elder's cannot enter the gourd.* | Young and old need each other. |
| **Ẹni tí ó bá da omi síwájú, á tẹ ilẹ̀ tútù.** — *Whoever pours water ahead will walk on cool ground.* | Good deeds prepare a good future. |
| **Ìkòkò tí yóò jẹ ata, ìdí rẹ̀ á gbóná.** — *The pot that will eat pepper, its bottom will be hot.* | Success requires hard work. |
| **Àìkọ́wọ̀ọ́ rìn ejò ni ó ń jẹ wọ́n níyà.** — *It is because snakes do not move together that they suffer.* | Disunity brings defeat. |

## Introducing a proverb
A young person who wishes to use a proverb before elders says first:
> **"Tótó, ó ṣe bí òwe"** — *Pardon me; it sounds like a proverb.*
and the elders reply: **"Wà á rí òmíràn pa"** — *May you live to say another.* This shows that proverbs belong properly to the elders.

Elders may begin: **"Àwọn àgbà ní…"** — *The elders say…*

## Proverbs and other forms
- a **proverb** teaches wisdom
- a **riddle (àlọ́ àpamọ̀)** asks for an answer
- an **idiom (àkànlò èdè)** is a phrase with a meaning different from its words

## How to explain a proverb
1. give the **literal** meaning
2. give the **deeper** meaning
3. say **when** it may be used`,
          examples: `**Example 1.** What is **òwe**? *Answer:* A **short wise saying** that teaches a truth about life.

**Example 2.** Explain "Igi kan kì í dá igbó ṣe". *Answer:* **One person cannot achieve much alone** — co-operation is needed.

**Example 3.** What does a young person say before quoting a proverb to elders? *Answer:* **"Tótó, ó ṣe bí òwe"**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'proverb' is", "òwe", "àlọ́", "oríkì", "orin", "It is a short wise saying."],
          ["E", "Proverbs are handed down by", "the elders", "foreign traders", "newspapers", "school inspectors", "They carry the wisdom of past generations."],
          ["E", "A proverb is best described as", "a short, wise saying", "a long story with songs", "a puzzle to be solved", "a praise name", "It teaches a truth about life."],
          ["M", "The Yoruba say that a proverb is the 'horse' of", "speech", "war", "the farm", "the king", "It carries a discussion to its point."],
          ["M", "'Igi kan kì í dá igbó ṣe' teaches the value of", "co-operation", "hunting", "planting trees", "living alone", "One tree does not make a forest."],
          ["M", "The proverb about a child who knows how to wash his hands teaches that", "good conduct brings honour", "children should eat first", "water is scarce", "elders are greedy", "Such a child will eat with elders."],
          ["M", "Which of the following is a use of proverbs?", "advising and warning", "measuring land", "counting money", "naming the days", "They guide behaviour."],
          ["H", "Before quoting a proverb in the presence of elders, a young person says", "Tótó, ó ṣe bí òwe", "Ààlọ́ o!", "Ẹ kú ọdún", "Ó dàbọ̀", "It asks the elders' pardon."],
          ["H", "'Ìkòkò tí yóò jẹ ata, ìdí rẹ̀ á gbóná' means that", "success demands hard work", "pepper is bad for cooking", "pots should be kept cold", "food must be shared", "The pot must bear the fire to enjoy the stew."],
          ["H", "The proverb 'Ilé là á wò ká tó sọ ọmọ lórúkọ' advises people to", "consider circumstances before acting", "build houses before marrying", "name children quickly", "stay indoors", "We look at the home before naming a child."],
        ],
      },
      {
        week: 3,
        title: "Praise poetry",
        subtopics: ["What oríkì is", "Personal praise names", "Lineage and town praises", "Uses of oríkì"],
        objectives: ["Explain what oríkì is", "Identify personal praise names and their meanings", "Describe lineage and town oríkì", "State the uses of oríkì"],
        lesson: {
          title: "Oríkì",
          summary: "Learn about Yoruba praise names and praise poetry.",
          minutes: 40,
          notes: `## What is oríkì?
**Oríkì** is **praise poetry** — words that describe and praise a person, a family, a town, a deity, or even an animal or food. Hearing one's oríkì stirs pride; the Yoruba say it makes the head "swell".

## Kinds of oríkì
### 1. Oríkì àbísọ — the personal praise name
Besides the ordinary name, a child is given a **pet praise name**, used by parents and elders to show affection or to calm the child.
| For girls | Meaning |
|---|---|
| **Àdùkẹ́** | one whom people struggle to pet |
| **Àjọkẹ́** | one petted by all together |
| **Àbẹ̀kẹ́** | one begged for, to be petted |
| **Àṣàkẹ́** | one chosen to be petted |
| **Àyìnkẹ́** | one praised and petted |

| For boys | Meaning |
|---|---|
| **Àkànbí** | one deliberately conceived |
| **Àjàní** | one fought for and had |
| **Àkàndé** | one who came by design |

Many girls' praise names end in **-kẹ́** ("to pet, cherish").

### 2. Oríkì orílẹ̀ — lineage praise
The praise of a **family line**, recalling its origin, occupation and great deeds. Each lineage has its own, recited by the old women of the house and by drummers. Lineages are often named after an animal or object: **Erin** (elephant), **Ọ̀kín** (peacock), **Ọ̀pọ́**, **Olúfẹ̀**.

### 3. Oríkì ìlú — town praise
Every town has its praise:
- **Ìbàdàn** — *the town that sprawls on hills, home of warriors*
- **Abẹ́òkúta** — *the town under the rock (Olúmọ)*
- **Ilé-Ifẹ̀** — *where the day dawns; the source*
- **Ọ̀yọ́** — *the town of the Aláàfin*

### 4. Oríkì of kings, heroes and deities
- **Ṣàngó** is praised as the lord of thunder
- **Ògún** as the owner of iron
- kings are hailed **"Kábíyèsí!"**

### 5. Oríkì of things
Animals, food and plants also have praises: the **yam**, the **elephant**, the **palm tree**.

## Features
- **strong images** and comparisons
- **repetition**
- names and events from **history**
- **exaggeration** to honour the subject
- **chanted**, often to the **talking drum** (**dùndún**)

## Who performs it?
mothers and grandmothers; wives of the compound; professional praise-singers (**akéwì**, **onírárà**); drummers.

## Uses
- to **greet** and show affection
- to **encourage** — before a contest, in difficulty
- to **praise** at naming, wedding, chieftaincy and burial ceremonies
- to **preserve family history**
- to **calm** a crying child or an angry elder
- to **welcome** an important person

## Oríkì and identity
To know one's oríkì is to know **where one comes from**. A greeting such as **"Ọmọ Erin"** tells the hearer which lineage he belongs to.`,
          examples: `**Example 1.** What is **oríkì**? *Answer:* **Praise poetry** — words that describe and praise a person, lineage, town or thing.

**Example 2.** Give two girls' praise names. *Answer:* **Àdùkẹ́** and **Àjọkẹ́**.

**Example 3.** What is **oríkì orílẹ̀**? *Answer:* The **praise poetry of a lineage**, recalling its origin and deeds.`,
        },
        questions: [
          ["E", "Yoruba praise poetry is called", "oríkì", "òwe", "àlọ́", "ọfọ̀", "It praises a person, family, town or deity."],
          ["E", "'Àdùkẹ́' is an example of", "a personal praise name", "a town", "a proverb", "a festival", "It is given to a girl."],
          ["E", "A Yoruba king is hailed with the word", "Kábíyèsí", "Ààlọ̀", "Ẹ kú iṣẹ́", "Tótó", "It acknowledges his unquestioned authority."],
          ["M", "The praise name given to a child in addition to the ordinary name is", "oríkì àbísọ", "oríkì orílẹ̀", "oríkì ìlú", "orúkọ àmútọ̀runwá", "It is used to show affection."],
          ["M", "Many praise names for girls end in '-kẹ́', which means", "to pet or cherish", "to fight", "to arrive", "to rule", "As in Àjọkẹ́ and Àbẹ̀kẹ́."],
          ["M", "The praise poetry of a family line is known as", "oríkì orílẹ̀", "oríkì àbísọ", "ẹkún ìyàwó", "àlọ́ àpagbè", "It recalls the lineage's origin and deeds."],
          ["M", "'Àkànbí' is a praise name normally given to", "a boy", "a town", "a deity", "a king only", "It means one deliberately conceived."],
          ["H", "The drum most closely associated with the chanting of oríkì is the", "dùndún (talking drum)", "school bell", "flute", "gong only", "It can imitate the tones of speech."],
          ["H", "Abẹ́òkúta is praised as the town", "under the rock", "of the Aláàfin", "where the day dawns", "on seven hills", "The rock is Olúmọ."],
          ["H", "One important use of oríkì orílẹ̀ is to", "preserve the history of a family", "fix the price of goods", "teach arithmetic", "announce the time", "It records origins, occupations and great deeds."],
        ],
      },
      {
        week: 4,
        title: "Yoruba names and the naming ceremony",
        subtopics: ["Kinds of Yoruba names", "Names brought from heaven", "Names given at birth", "The naming ceremony"],
        objectives: ["Classify Yoruba names", "Explain names determined by the circumstances of birth", "Give the meanings of common Yoruba names", "Describe the naming ceremony and its symbolic items"],
        lesson: {
          title: "Orúkọ Yorùbá àti ìsọmọlórúkọ",
          summary: "Explain Yoruba names and describe the naming ceremony.",
          minutes: 40,
          notes: `## Names have meaning
Among the Yoruba, a name is never given carelessly. It tells of the **circumstances of the birth**, the **family's history, faith or hopes**. Hence the proverb: *we look at the home before naming a child*.

## Kinds of names
### 1. Orúkọ àmútọ̀runwá — names "brought from heaven"
Given because of **the way the child was born**.
| Name | Circumstance |
|---|---|
| **Táíwò** | the first-born of twins |
| **Kẹ́hìndé** | the second-born of twins |
| **Ìdòwú** | the child born after twins |
| **Àlàbá** | the child born after Ìdòwú |
| **Ìgè** | born feet first |
| **Òjó** (boy) / **Àìná** (girl) | born with the cord round the neck |
| **Dàda** | born with curly, knotted hair |
| **Àjàyí** | born face downwards |
| **Ọ̀kẹ́** | born inside an unbroken sac |
| **Olúgbódi** | born with an extra finger |

### 2. Orúkọ àbísọ — names given at birth
Chosen to reflect the **situation of the family**.
| Name | Meaning |
|---|---|
| **Babátúndé** | father has returned (a boy born after a grandfather's death) |
| **Yétúndé / Ìyábọ̀** | mother has returned |
| **Abíọ́dún** | born during a festival |
| **Abọ́sẹ̀dé** | born at the start of the week |
| **Ayọ̀délé** | joy has come home |
| **Olúwaṣeun** | thanks be to God |
| **Adébáyọ̀** | the crown meets joy |
| **Ọláwálé** | wealth / honour has come home |
| **Fọláṣadé** | honour confers a crown |
| **Tòkunbọ̀** | returned from overseas |

Prefixes show the family: **Adé-** (crown: royal), **Ọlá-** (honour, wealth), **Olú- / Olúwa-** (God), **Ògún-**, **Ifá-/Fá-**, **Ọ̀ṣun-**, **Ṣàngó-** (families devoted to those deities), **Ọdẹ-** (hunters), **Akin-** (the brave).

### 3. Orúkọ àbíkú
Names for a child believed to be one who dies and returns, pleading with it to stay: **Dúrójayé** (stay and enjoy life), **Málọmọ́** (do not go again), **Kòsọ́kọ́** (there is no hoe — to dig a grave), **Kúkọ̀yí** (death rejected this one).

### 4. Oríkì — praise names
**Àdùkẹ́, Àkànbí** and others.

## The naming ceremony (ìsọmọlórúkọ / ìkómọjáde)
Traditionally held on the **eighth day** after birth (in older custom the seventh for a girl and the ninth for a boy). Relatives gather; an elder presides.

### Symbolic items
| Item | What is prayed |
|---|---|
| **omi** (water) | that the child will never thirst; water has no enemy |
| **iyọ̀** (salt) | that life will be pleasant |
| **oyin** (honey) / **ìrèké** (sugar cane) | sweetness of life |
| **epo pupa** (palm oil) | a smooth, peaceful life |
| **obì** (kola nut) | to ward off evil |
| **orógbó** (bitter kola) | long life |
| **ataare** (alligator pepper) | many children; fruitful words |
| **ẹja** (fish) | to overcome difficulties |

Each item is touched to the child's lips or tasted with a prayer; the names are then announced and those present give gifts of money.

## Importance
The ceremony welcomes the child into the family, gives it an identity and brings relatives together.`,
          examples: `**Example 1.** What are the names of twins in Yoruba? *Answer:* **Táíwò** (first) and **Kẹ́hìndé** (second).

**Example 2.** What does **Babátúndé** mean? *Answer:* **"Father has returned"**.

**Example 3.** What does honey symbolise at a naming ceremony? *Answer:* **A sweet, pleasant life**.`,
        },
        questions: [
          ["E", "The first-born of twins in Yoruba is named", "Táíwò", "Kẹ́hìndé", "Ìdòwú", "Àlàbá", "The second is Kẹ́hìndé."],
          ["E", "The Yoruba naming ceremony is traditionally held on which day after birth?", "the eighth day", "the first day", "the fortieth day", "the third day", "Relatives gather and an elder presides."],
          ["E", "'Ayọ̀délé' means", "joy has come home", "father has returned", "born on a festival day", "thanks be to God", "Ayọ̀ means joy and ilé means home."],
          ["M", "Names determined by the manner of a child's birth are called", "orúkọ àmútọ̀runwá", "orúkọ àbísọ", "oríkì orílẹ̀", "orúkọ ìnagijẹ", "They are 'brought from heaven'."],
          ["M", "The child born immediately after twins is named", "Ìdòwú", "Òjó", "Dàda", "Ìgè", "Àlàbá follows Ìdòwú."],
          ["M", "'Babátúndé' is given to a boy born", "after the death of his grandfather", "on a market day", "during the rains", "as one of twins", "It means 'father has returned'."],
          ["M", "At a naming ceremony, honey symbolises", "sweetness of life", "long life", "many children", "protection from evil", "The child's life is prayed to be pleasant."],
          ["H", "A child born feet first is named", "Ìgè", "Àìná", "Àjàyí", "Ọ̀kẹ́", "It is one of the names brought from heaven."],
          ["H", "Names such as 'Dúrójayé' and 'Málọmọ́' are given to", "a child believed to be an àbíkú", "the first son of a king", "twins", "a child born abroad", "They plead with the child to stay alive."],
          ["H", "The prefix 'Adé-' in names such as Adébáyọ̀ usually indicates that the family", "is of royal descent", "are hunters", "are blacksmiths", "worship the river goddess", "Adé means crown."],
        ],
      },
      {
        week: 5,
        title: "Traditional marriage",
        subtopics: ["Seeking a wife", "The go-between and family inquiry", "The engagement", "The wedding day and its values"],
        objectives: ["Outline the steps of traditional Yoruba marriage", "Explain the role of the alárinà and of the two families", "Describe the engagement ceremony and bride price", "State the values traditional marriage upholds"],
        lesson: {
          title: "Ìgbéyàwó ìbílẹ̀",
          summary: "Describe the steps of traditional Yoruba marriage.",
          minutes: 40,
          notes: `## Marriage is a family affair
In Yoruba tradition, marriage (**ìgbéyàwó**) is not only between a man and a woman: it joins **two families**. The steps are taken carefully and openly.

## The steps
### 1. Ìfojúsóde — looking out
The young man (or his family) notices a girl of good character and home training.
### 2. Alárinà — the go-between
A trusted person, the **alárinà**, carries messages between the two until the matter is known to the families. A proverb says that once the marriage is settled, the go-between steps aside.
### 3. Ìwádìí — inquiry
Each family **investigates the other**: Is there a history of serious disease, crime, debt or bad character? In the past **Ifá** was also consulted.
### 4. Ìjọ́hẹn / ìṣíhùn — consent
The man's family visits; the girl's parents give their consent — the "opening of the voice".
### 5. Ìtọrọ — the formal request
Elders of the man's family come formally to **ask for the girl's hand**.
### 6. Ìdána — the engagement
The chief ceremony. The man's family brings the **bride price (owó orí)** and gifts (**ẹrù ìyàwó**), commonly:
- **iṣu** (yams), **obì** (kola nuts), **orógbó** (bitter kola), **ataare** (alligator pepper)
- **oyin** (honey), **iyọ̀** (salt), **epo** (palm oil)
- drinks, cloth, a **Bible or Qur'an** today, a **ring**, a box of clothes

The items are used in **prayers** for a sweet, fruitful and lasting marriage. The groom and his friends **prostrate** before the bride's parents. Today two women, the **alága ìdúró** and **alága ìjókòó**, lead the ceremony for the two families.
### 7. Ìgbéyàwó — the wedding day
The bride is prayed for by her parents. She chants **ẹkún ìyàwó** — the "bride's lament" — a poem of farewell and thanks to her family. She is led to her husband's house in the evening; her **feet are washed** at the door before she enters.

## Qualities sought
- in a wife: good character (**ìwà**), respect, hard work, cleanliness
- in a husband: industry, responsibility, good family name
The Yoruba say **"Ìwà lẹwà"** — character is beauty.

## Values upheld
- **chastity** before marriage was honoured
- **parental consent** and blessing
- **respect** between the families
- **patience** and endurance in the home
- the families' **duty to settle quarrels**

## Types of marriage today
- **traditional** marriage
- **church** or **mosque** marriage
- **registry (court)** marriage
Many couples do the traditional engagement and then a religious or registry wedding.

## Words to know
| Yoruba | English |
|---|---|
| **ọkọ** | husband |
| **ìyàwó** | wife; bride |
| **àna** | in-law |
| **ọkọ ìyàwó** | bridegroom |
| **owó orí** | bride price |`,
          examples: `**Example 1.** Who is the **alárinà**? *Answer:* The **go-between** who carries messages between the man and the girl's side.

**Example 2.** What is **ìdána**? *Answer:* The **engagement ceremony**, at which the bride price and gifts are presented.

**Example 3.** What is **ẹkún ìyàwó**? *Answer:* The **bride's chant of farewell** to her family.`,
        },
        questions: [
          ["E", "The Yoruba word for 'marriage' or 'wedding' is", "ìgbéyàwó", "ìsọmọlórúkọ", "ìsìnkú", "ìkíni", "Ìyàwó means wife or bride."],
          ["E", "In Yoruba tradition, marriage is regarded as a union of", "two families", "two individuals only", "two towns", "two kings", "Both families take part at every step."],
          ["E", "The go-between in a traditional Yoruba marriage is the", "alárinà", "baálé", "babaláwo", "onílù", "He or she carries messages between the two sides."],
          ["M", "The engagement ceremony at which the bride price is presented is called", "ìdána", "ìwádìí", "ìfojúsóde", "ìkómọjáde", "The groom's family brings gifts."],
          ["M", "The bride price in Yoruba is called", "owó orí", "owó ọjà", "owó ilé", "owó oṣù", "It is presented during the engagement."],
          ["M", "The chant performed by a bride as she leaves her parents' home is", "ẹkún ìyàwó", "ìjálá", "rárà", "àlọ́ àpamọ̀", "It is a poem of farewell and thanks."],
          ["M", "The stage at which each family investigates the background of the other is", "ìwádìí", "ìtọrọ", "ìdána", "ìgbéyàwó", "They look for disease, crime or bad character."],
          ["H", "The saying 'Ìwà lẹwà' means that", "character is beauty", "wealth is power", "marriage is hard", "beauty fades quickly", "Good character is what is sought in a spouse."],
          ["H", "On arriving at her husband's house, a traditional Yoruba bride has her", "feet washed at the door", "hair shaved off", "name changed at once", "face covered for a week", "It marks her entry into the new home."],
          ["H", "During the engagement, the groom and his friends show respect to the bride's parents by", "prostrating", "clapping", "shaking hands", "standing at attention", "Prostration is the male form of respectful greeting."],
        ],
      },
      {
        week: 6,
        title: "Dress and adornment",
        subtopics: ["Men's clothing", "Women's clothing", "Yoruba fabrics", "Adornment and its meaning"],
        objectives: ["Name items of traditional men's dress", "Name items of traditional women's dress", "Identify Yoruba fabrics", "Describe forms of adornment and what dress shows"],
        lesson: {
          title: "Aṣọ wíwọ̀ àti ìmúra",
          summary: "Describe traditional Yoruba dress, fabrics and adornment.",
          minutes: 40,
          notes: `## Dress matters
The Yoruba take pride in dressing well. A saying holds that **the way you dress is the way you will be addressed**. Dress shows a person's **age, status, occupation and the occasion**.

## Men's clothing
| Yoruba | Description |
|---|---|
| **bùbá** | a loose top with sleeves |
| **ṣòkòtò** | trousers |
| **agbádá** | a wide, flowing outer gown worn over bùbá and ṣòkòtò |
| **dàńṣíkí** | a short, loose, sleeveless or short-sleeved top |
| **fìlà** | cap |
| **gbárìyẹ̀** | a flared, pleated gown |

Kinds of cap: **fìlà abetí-ajá** ("dog-eared" cap with two flaps), **fìlà gọ̀bì** (soft cap bent to one side).

## Women's clothing
| Yoruba | Description |
|---|---|
| **bùbá** | a loose blouse |
| **ìró** | a wrapper tied round the waist |
| **gèlè** | head-tie |
| **ìborùn** | a shawl laid on the shoulder |
| **ìpèlé** | a second cloth tied over the ìró or carried on the shoulder |

A full outfit is **ìró àti bùbá** with **gèlè** and **ìpèlé**.

## Fabrics
- **aṣọ òkè (aṣọ òfì)** — thick cloth **hand-woven** in narrow strips on a loom; worn at weddings, chieftaincy and other great occasions. Types include:
  - **ẹtù** — deep indigo blue with fine light stripes
  - **sányán** — pale brown, from wild silk
  - **àlàárì** — rich red
- **àdìrẹ** — cloth **tied or resist-patterned and dyed in indigo (aró)**; **Abẹ́òkúta** is famous for it
- **àǹkárá** — printed cotton cloth, common today
- **léèsì** — lace, used for ceremonies

The town of **Ìsẹ́yìn** is noted for weaving aṣọ òkè.

## Aṣọ ẹbí
"**Family cloth**": relatives and friends wear the **same cloth** at a ceremony to show unity and support.

## Adornment (ọ̀ṣọ́)
- **ìlẹ̀kẹ̀** — beads worn on the neck, wrist and waist; coral beads for kings and chiefs
- **irun dídì / irun kíkó** — plaiting or threading the hair; styles such as **ṣùkú** (plaited upward into a crown) and **kòlẹ́sẹ̀**
- **làálì** — henna on hands and feet
- **tìróò** — antimony for the eyes
- **osùn** — camwood for the skin
- **ilà** — **facial marks**, formerly cut to show a person's town or family (for example **àbàjà**, **pélé**, **gọ̀ǹbọ́**); the practice has largely stopped

## Royal dress
A king wears a **beaded crown (adé)** with a veil of beads, a beaded staff (**ọ̀pá àṣẹ**), beaded shoes and a horsetail whisk (**ìrùkẹ̀rẹ̀**).

## Values
neatness; modesty; dressing to suit the occasion; pride in one's culture.`,
          examples: `**Example 1.** Name the three main pieces of a Yoruba man's full dress. *Answer:* **Bùbá, ṣòkòtò and agbádá** (with a fìlà).

**Example 2.** What is **gèlè**? *Answer:* A woman's **head-tie**.

**Example 3.** What is **àdìrẹ**? *Answer:* Cloth **patterned by tying or resist and dyed in indigo**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'cap' is", "fìlà", "gèlè", "ìró", "bùbá", "It is worn by men."],
          ["E", "'Gèlè' is", "a woman's head-tie", "a man's trousers", "a type of shoe", "a walking stick", "It completes the ìró and bùbá."],
          ["E", "The Yoruba word for 'trousers' is", "ṣòkòtò", "agbádá", "ìborùn", "ìpèlé", "It is worn with bùbá."],
          ["M", "The wide, flowing outer gown worn by Yoruba men is the", "agbádá", "dàńṣíkí", "ìró", "ìpèlé", "It goes over bùbá and ṣòkòtò."],
          ["M", "The wrapper tied round the waist by Yoruba women is the", "ìró", "gèlè", "fìlà", "bùbá", "It is worn with a bùbá."],
          ["M", "Cloth patterned by tying and dyed in indigo is called", "àdìrẹ", "aṣọ òkè", "léèsì", "sányán", "Abẹ́òkúta is famous for it."],
          ["M", "The thick cloth hand-woven in narrow strips and worn on great occasions is", "aṣọ òkè", "àǹkárá", "àdìrẹ", "léèsì", "It is also called aṣọ òfì."],
          ["H", "'Aṣọ ẹbí' refers to", "the same cloth worn by relatives and friends at a ceremony", "a cloth for mourning only", "a king's robe", "a baby's wrapper", "It shows unity and support."],
          ["H", "Facial marks formerly used to show a person's town or family are called", "ilà", "ìlẹ̀kẹ̀", "làálì", "osùn", "Àbàjà and pélé are examples."],
          ["H", "The deep indigo type of aṣọ òkè with fine light stripes is", "ẹtù", "sányán", "àlàárì", "àǹkárá", "Sányán is pale brown and àlàárì is red."],
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
        title: "Traditional occupations",
        subtopics: ["Farming and hunting", "Crafts", "Trade", "The dignity of work"],
        objectives: ["Name traditional Yoruba occupations", "Describe the work and tools of farmers, hunters and craftsmen", "Describe trading in Yoruba society", "Explain the value the Yoruba place on work"],
        lesson: {
          title: "Iṣẹ́ ìbílẹ̀ Yorùbá",
          summary: "Describe the traditional occupations of the Yoruba.",
          minutes: 40,
          notes: `## Work is honoured
The Yoruba say **"Iṣẹ́ ni òògùn ìṣẹ́"** — *work is the cure for poverty*. Every person was expected to learn a trade, usually the **family occupation**, by serving as an apprentice.

## Occupations
| Occupation | Worker | Work | Tools / products |
|---|---|---|---|
| **iṣẹ́ àgbẹ̀** | **àgbẹ̀** (farmer) | growing crops | **ọkọ́** (hoe), **àdá** (cutlass); yam, maize, cassava, cocoa, kola |
| **iṣẹ́ ọdẹ** | **ọdẹ** (hunter) | hunting game; guarding the town | **ìbọn** (gun), **ọfà** (arrow), traps |
| **iṣẹ́ àgbẹ̀dẹ** | **alágbẹ̀dẹ** (blacksmith) | forging iron | hoes, cutlasses, knives; the forge is **àgbẹ̀dẹ** |
| **iṣẹ́ aṣọ híhun** | **ahunṣọ** (weaver) | weaving cloth | the loom (**òfì**); aṣọ òkè |
| **iṣẹ́ aró dídá** | **aláró** (dyer) | dyeing cloth | indigo; àdìrẹ |
| **iṣẹ́ ìkòkò mímọ** | **amọ̀kòkò** (potter) | making pots | clay (**amọ̀**) |
| **iṣẹ́ ọnà gbígbẹ́** | **gbẹ́nàgbẹ́nà** (carver) | carving wood | doors, posts, masks, mortars |
| **iṣẹ́ ìlù lílù** | **onílù / àyàn** (drummer) | drumming | **dùndún**, **bàtá**, **gángan** |
| **iṣẹ́ ìṣègùn** | **oníṣègùn** (herbalist) | healing | herbs and roots |
| **iṣẹ́ òwò** | **oníṣòwò / ọlọ́jà** (trader) | buying and selling | market goods |
| **iṣẹ́ ẹja pípa** | **apẹja** (fisherman) | fishing | nets, canoes |
| **iṣẹ́ ẹmu dídá** | **adẹ́mu** (palm-wine tapper) | tapping palm wine | climbing rope (**igbà**) |
| **irun dídì** | **onídìrí** (hair plaiter) | plaiting hair | comb |
| **iṣẹ́ awọ** | **aláwọ** (leather worker) | leather goods | bags, sheaths, drum skins |

## Farming
The **chief occupation**. Men cleared and tilled; women helped with harvest, processing and sale. **Cash crops** include **cocoa (kòkó)**, **kola (obì)** and **palm produce**.

## Hunting
Hunters were also the **warriors and guards** of the town. They are devotees of **Ògún**, god of iron, and chant **ìjálá**.

## Drumming families
Drummers belong to families bearing the name **Àyàn-** (Àyànwálé, Àyàntúndé), after **Àyàn**, the spirit of drumming.

## Trade
Women are the great **traders**. Markets are held daily or every few days. The head of the market women is the **Ìyálọ́jà**. Trading was done by barter and later with **cowries (owó ẹyọ)** before modern money.

## Learning a trade
- a child first learnt the **father's or mother's work**
- an **apprentice (ọmọ iṣẹ́)** served a **master (ọ̀gá)** for some years, then was given his "**freedom**"
- workers formed **guilds (ẹgbẹ́)** to keep standards

## Family names and work
Some names show the family's work: **Ọdẹ-** (hunters), **Àyàn-** (drummers), **Ọnà-** (carvers and artists), **Ògún-** (smiths and hunters).

## Modern occupations
teaching (**olùkọ́**), medicine (**dókítà**), driving (**awakọ̀**), tailoring (**aránṣọ / télọ̀**), carpentry (**gbẹ́nàgbẹ́nà / káfíńtà**), mechanics, the civil service.

## Values
hard work; honesty; skill; self-reliance. Laziness (**ọ̀lẹ**) is despised.`,
          examples: `**Example 1.** What is an **àgbẹ̀**? *Answer:* A **farmer**.

**Example 2.** Which deity do hunters and blacksmiths honour? *Answer:* **Ògún**, god of iron.

**Example 3.** Explain "Iṣẹ́ ni òògùn ìṣẹ́". *Answer:* **Work is the cure for poverty**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'farmer' is", "àgbẹ̀", "ọdẹ", "onílù", "apẹja", "Farming was the chief occupation."],
          ["E", "'Ọdẹ' means", "hunter", "weaver", "potter", "trader", "He hunts game with a gun or arrows."],
          ["E", "The Yoruba word for 'work' is", "iṣẹ́", "ìṣẹ́", "ọjà", "owó", "With different tones, ìṣẹ́ means poverty."],
          ["M", "A blacksmith in Yoruba is called", "alágbẹ̀dẹ", "ahunṣọ", "aláró", "amọ̀kòkò", "He forges hoes and cutlasses."],
          ["M", "The saying 'Iṣẹ́ ni òògùn ìṣẹ́' means", "work is the cure for poverty", "work is punishment", "medicine is costly", "poverty is a disease without cure", "It encourages hard work."],
          ["M", "'Apẹja' is a person who", "catches fish", "weaves cloth", "carves wood", "plaits hair", "Ẹja means fish."],
          ["M", "The head of the market women in a Yoruba town is the", "Ìyálọ́jà", "Baálé", "Alárinà", "Aláró", "The title means 'mother of the market'."],
          ["H", "Families whose names begin with 'Àyàn-' are traditionally", "drummers", "hunters", "farmers", "dyers", "Àyàn is the spirit of drumming."],
          ["H", "Hunters in Yoruba land are devotees of", "Ògún", "Ọ̀ṣun", "Ọbàtálá", "Yemọja", "He is the god of iron."],
          ["H", "Before modern money, the Yoruba traded with", "cowries", "paper notes", "gold coins only", "cheques", "They were called owó ẹyọ."],
        ],
      },
      {
        week: 2,
        title: "At the market",
        subtopics: ["Market words", "Asking the price", "Bargaining", "A market dialogue"],
        objectives: ["Use words for buying and selling", "Ask and state prices", "Bargain politely in Yoruba", "Take part in a simple market dialogue"],
        lesson: {
          title: "Ní ọjà: rírà àti títà",
          summary: "Buy, sell and bargain in Yoruba.",
          minutes: 40,
          notes: `## Market words
| Yoruba | English |
|---|---|
| **ọjà** | market; goods |
| **rà** | buy |
| **tà** | sell |
| **owó** | money |
| **náírà / kọ́bọ̀** | naira / kobo |
| **ọlọ́jà / òǹtajà** | seller |
| **oníbàárà / òǹrajà** | customer, buyer |
| **iye owó** | price |
| **ṣéńjì** | change |
| **èrè** | profit |
| **gbèsè** | debt |
| **wọ́n** | be expensive |
| **pọ̀ / kò wọ́n** | be cheap |
| **dín kù** | reduce |
| **fi kún** | add |
| **wọn** | measure out |

## Things sold
**iṣu** (yam), **ata** (pepper), **tòmátò**, **àlùbọ́sà** (onion), **ẹja** (fish), **ẹran** (meat), **epo** (oil), **gààrí**, **ẹ̀wà** (beans), **ìrẹsì** (rice), **èso** (fruit), **aṣọ** (cloth), **bàtà** (shoes).

## Asking the price
- **Èló ni èyí?** — How much is this?
- **Èló ni ẹ ń ta iṣu yìí?** — How much are you selling this yam?
- **Igba náírà ni.** — It is two hundred naira.
- **Ẹgbẹ̀rún kan náírà.** — One thousand naira.

## Money words
| Figure | Yoruba |
|---|---|
| 100 | **ọgọ́rùn-ún** |
| 200 | **igba** |
| 300 | **ọ̀ọ́dúnrún** |
| 400 | **irinwó** |
| 500 | **ẹ̀ẹ́dẹ́gbẹ̀ta** |
| 1,000 | **ẹgbẹ̀rún** |

## Bargaining
Bargaining (**ìdúnàádúrà**) is expected in a Yoruba market.
- **Ó ti wọ́n jù.** — It is too expensive.
- **Ẹ jọ̀ọ́, ẹ dín in kù.** — Please reduce it.
- **Ẹ gba àádọ́jọ.** — Take a hundred and fifty.
- **Kò gbà.** — It will not go (at that price).
- **Ẹ fi díẹ̀ kún un.** — Add a little to it.
- **Jálẹ̀ ni?** — Is that the last price?
- **Ó dára, ẹ mú un wá.** — All right, bring it.
- **Ẹ fún mi ní ṣéńjì mi.** — Give me my change.
- **Ẹ ṣé, ẹ kú ọjà.** — Thank you; greetings for the market.

## A dialogue
> **Oníbàárà:** Ẹ kú ọjà o, Màmá.
> **Ọlọ́jà:** Oo, ẹ káàbọ̀. Kí ni ẹ fẹ́ rà?
> **Oníbàárà:** Mo fẹ́ ra ata. Èló ni?
> **Ọlọ́jà:** Ọ̀ọ́dúnrún náírà ni.
> **Oníbàárà:** Há! Ó ti wọ́n jù. Ẹ gba igba.
> **Ọlọ́jà:** Kò gbà. Ẹ fi àádọ́ta kún un.
> **Oníbàárà:** Ó dára. Ẹ gba owó.
> **Ọlọ́jà:** Ẹ ṣé. Ọlọ́run á jẹ́ kí ẹ rí i lò.

## Market manners
greet the seller first; bargain politely; do not handle goods roughly; pay what is agreed; count your change.

## The market in Yoruba life
The market is a place for **trade, news and meeting**. Many towns have a main market before the king's palace (**Ọjà Ọba**).`,
          examples: `**Example 1.** Ask "How much is this?" *Answer:* **Èló ni èyí?**

**Example 2.** Say "It is too expensive." *Answer:* **Ó ti wọ́n jù**.

**Example 3.** What is **igba náírà**? *Answer:* **Two hundred naira**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'market' is", "ọjà", "oko", "odò", "ilé", "Goods are bought and sold there."],
          ["E", "The Yoruba word for 'money' is", "owó", "ọwọ́", "òwò", "ọ̀wọ̀", "The tones are mid then high."],
          ["E", "The Yoruba verb meaning 'sell' is", "tà", "rà", "kà", "sè", "Rà means buy. Answer: tà."],
          ["M", "'Ó ti wọ́n jù' means", "It is too expensive", "It is very cheap", "It is finished", "It is very good", "Wọ́n means to be costly."],
          ["M", "'Ẹ dín in kù' is a request to", "reduce the price", "add more goods", "give change", "close the shop", "Dín kù means reduce."],
          ["M", "'Igba náírà' is", "two hundred naira", "one hundred naira", "twenty naira", "one thousand naira", "Igba means 200."],
          ["M", "A customer in Yoruba is called", "oníbàárà", "ọlọ́jà", "alárinà", "ọmọ iṣẹ́", "The seller is the ọlọ́jà."],
          ["H", "'Ẹgbẹ̀rún náírà' is", "one thousand naira", "five hundred naira", "four hundred naira", "three hundred naira", "Ẹgbẹ̀rún means 1,000."],
          ["H", "The Yoruba word for the number 400, used in pricing, is", "irinwó", "igba", "ọ̀ọ́dúnrún", "ẹgbẹ̀rún", "Igba is 200 and ọ̀ọ́dúnrún is 300."],
          ["H", "'Ẹ fún mi ní ṣéńjì mi' means", "Give me my change", "Give me your goods", "Show me the price", "Reduce it for me", "Ṣéńjì is borrowed from English 'change'."],
        ],
      },
      {
        week: 3,
        title: "Prepositions and words of place",
        subtopics: ["The prepositions ní and sí", "Words of position", "Coming from and going to", "Describing where things are"],
        objectives: ["Use ní and sí correctly", "Use position words such as lórí, lábẹ́ and nínú", "Express movement to and from a place", "Describe the position of objects"],
        lesson: {
          title: "Ọ̀rọ̀-atọ́kùn àti ìtọ́ka ibi",
          summary: "Say where things are and where people are going.",
          minutes: 40,
          notes: `## What is a preposition?
A **preposition** (**ọ̀rọ̀-atọ́kùn**) shows the **relationship of a noun to the rest of the sentence** — usually place, direction or time.

## The basic prepositions
### ní — at, in, on (rest)
- **Mo wà ní ilé.** — I am at home.
- **Ó ń gbé ní Ìbàdàn.** — He lives in Ibadan.
- **ní àárọ̀** — in the morning
Before a vowel other than **i**, **ní** becomes **l'**: **ní ọjà → lọ́jà**; **ní oko → lóko**; **ní ilé → nílé**.

### sí — to, into (movement)
- **Mo ń lọ sí ọjà.** — I am going to the market.
- **Ó wọ inú ilé / Ó wọlé.** — He entered the house.
- **Da omi sí ife.** — Pour water into the cup.

### Others
| Yoruba | English | Example |
|---|---|---|
| **láti** | from | **Mo wá láti Èkó.** — I came from Lagos. |
| **pẹ̀lú** | with | **Ó lọ pẹ̀lú mi.** — He went with me. |
| **fún** | for; to (give) | **Ra á fún mi.** — Buy it for me. |
| **nípa** | about | **Sọ nípa rẹ̀.** — Speak about it. |
| **títí dé** | until, up to | **títí dé alẹ́** — until night |

## Words of position
These are formed from **ní + a body-part or place noun**:
| Yoruba | From | English |
|---|---|---|
| **lórí** | ní + orí (head) | on, on top of |
| **lábẹ́** | ní + abẹ́ (underside) | under |
| **nínú** | ní + inú (inside) | in, inside |
| **lẹ́yìn** | ní + ẹ̀yìn (back) | behind; after |
| **níwájú** | ní + iwájú (front) | in front of; before |
| **lẹ́gbẹ̀ẹ́** | ní + ẹ̀gbẹ́ (side) | beside |
| **láàárín** | ní + àárín (middle) | between, among |
| **lókè** | ní + òkè (top) | above, up |
| **nísàlẹ̀** | ní + ìsàlẹ̀ (bottom) | below, down |
| **níta** | ní + ìta (outside) | outside |
| **nítòsí** | ní + ìtòsí | near |

## Describing position
- **Ìwé wà lórí tábìlì.** — The book is on the table.
- **Ológbò wà lábẹ́ àga.** — The cat is under the chair.
- **Owó wà nínú àpò.** — The money is in the bag.
- **Ọgbà wà lẹ́yìn ilé.** — The garden is behind the house.
- **Olùkọ́ dúró níwájú kíláàsì.** — The teacher stands in front of the class.
- **Bọ́lá jókòó lẹ́gbẹ̀ẹ́ mi.** — Bọ́lá sits beside me.
- **Ilé wa wà nítòsí ọjà.** — Our house is near the market.

## Here and there
| Yoruba | English |
|---|---|
| **níbí / ibí** | here |
| **níbẹ̀ / ibẹ̀** | there |
| **lọ́hùn-ún** | over there |
| **ibi gbogbo** | everywhere |

## Directions
- **ọ̀tún** — right; **òsì** — left
- **Yà sí ọ̀tún.** — Turn right.
- **Lọ tààrà.** — Go straight.

## Asking
- **Níbo ni ìwé mi wà?** — Where is my book?
- **Ó wà lórí àga.** — It is on the chair.`,
          examples: `**Example 1.** Translate "The cat is under the table." *Answer:* **Ológbò wà lábẹ́ tábìlì**.

**Example 2.** Which preposition shows movement to a place? *Answer:* **sí** — as in *Mo ń lọ sí ọjà*.

**Example 3.** What does **nínú** mean? *Answer:* **In / inside**.`,
        },
        questions: [
          ["E", "'Lórí' means", "on", "under", "inside", "behind", "It is formed from ní + orí (head)."],
          ["E", "The Yoruba word for 'under' is", "lábẹ́", "lókè", "níwájú", "níta", "As in 'lábẹ́ àga' — under the chair."],
          ["E", "'Nínú' means", "inside", "outside", "beside", "above", "It is formed from ní + inú."],
          ["M", "'Mo ń lọ sí ọjà' means", "I am going to the market", "I am in the market", "I came from the market", "I am near the market", "Sí shows movement towards a place."],
          ["M", "The Yoruba word for 'behind' is", "lẹ́yìn", "níwájú", "lẹ́gbẹ̀ẹ́", "láàárín", "It is formed from ní + ẹ̀yìn (back)."],
          ["M", "'Mo wá láti Èkó' means", "I came from Lagos", "I am going to Lagos", "I live in Lagos", "I like Lagos", "Láti means 'from'."],
          ["M", "'Níwájú' means", "in front of", "at the back of", "on top of", "under", "Iwájú means front."],
          ["H", "The Yoruba term for 'preposition' is", "ọ̀rọ̀-atọ́kùn", "ọ̀rọ̀-àpèjúwe", "ọ̀rọ̀-ìṣe", "ọ̀rọ̀-orúkọ", "It shows the relation of a noun to the rest of the sentence."],
          ["H", "'Bọ́lá jókòó lẹ́gbẹ̀ẹ́ mi' means", "Bọ́lá sits beside me", "Bọ́lá sits behind me", "Bọ́lá sits on me", "Bọ́lá sits far from me", "Lẹ́gbẹ̀ẹ́ means beside."],
          ["H", "'Lọ́jà' (at the market) is a contraction of", "ní + ọjà", "sí + ọjà", "láti + ọjà", "pẹ̀lú + ọjà", "Ní becomes l' before most vowels."],
        ],
      },
      {
        week: 4,
        title: "Reading comprehension",
        subtopics: ["How to read a passage", "Finding the main idea", "Answering questions", "Working out meanings"],
        objectives: ["Read a short Yoruba passage with understanding", "State the main idea of a passage", "Answer factual questions from a passage", "Work out the meaning of words from context"],
        lesson: {
          title: "Àkàyé",
          summary: "Read a short Yoruba passage and answer questions on it.",
          minutes: 40,
          notes: `## What is comprehension?
**Àkàyé** means **reading with understanding**. You read a passage (**àyọkà**) and answer questions on it.

## How to go about it
1. **Read the passage through** once to get the general idea.
2. **Read the questions.**
3. **Read the passage again** carefully, looking for the answers.
4. **Answer in full sentences**, in your own words where possible.
5. Answer **only what is asked**.
6. Check **spelling and tone marks**.

## Types of question
- **factual** — Who? What? Where? When? How many? (the answer is in the passage)
- **reason** — Why? (look for *nítorí* — because)
- **meaning** — What does a word mean? (use the sentences around it)
- **main idea / title** — What is the passage about?
- **lesson** — What does the passage teach?

## A passage (àyọkà)
> **Adé àti ọgbà rẹ̀**
>
> Adé jẹ́ ọmọ ọdún méjìlá. Ó ń gbé ní abúlé kan pẹ̀lú ìyá àgbà rẹ̀. Ní gbogbo òwúrọ̀, kí ó tó lọ sí ilé-ìwé, Adé máa ń bomi rin ọgbà kékeré tí ó wà lẹ́yìn ilé wọn. Ó gbin tòmátò, ata àti ẹ̀fọ́ sínú ọgbà náà.
>
> Ní ọjọ́ kan, ewúrẹ́ aládùúgbò wọ inú ọgbà náà, ó sì jẹ gbogbo ẹ̀fọ́. Inú Adé bàjẹ́ gan-an, ṣùgbọ́n kò bínú sí aládùúgbò rẹ̀. Ó ṣe ọgbà yí ọgbà náà ká, ó sì tún gbin ẹ̀fọ́ mìíràn.
>
> Ní òpin oṣù, Adé kó tòmátò àti ata lọ sí ọjà. Ó ta wọ́n, ó sì fi owó náà ra ìwé méjì. Ìyá àgbà rẹ̀ yìn ín pé ó jẹ́ ọmọ aláápọn.

### Helps with words
| Yoruba | English |
|---|---|
| **abúlé** | village |
| **bomi rin** | to water |
| **ọgbà** | garden; fence |
| **gbin** | to plant |
| **aládùúgbò** | neighbour |
| **inú … bàjẹ́** | to be sad |
| **bínú** | to be angry |
| **aláápọn** | hard-working |
| **yìn** | to praise |

### In English
Adé is twelve. He lives in a village with his grandmother. Every morning before school he waters the small garden behind their house, where he has planted tomatoes, pepper and vegetables. One day a neighbour's goat got in and ate all the vegetables. Adé was very sad but was not angry with the neighbour; he fenced the garden and planted again. At the end of the month he sold tomatoes and pepper at the market and bought two books with the money. His grandmother praised him as a hard-working child.

## Questions and model answers
1. **Ọmọ ọdún mélòó ni Adé?** — *Ọmọ ọdún méjìlá ni Adé.* (Twelve.)
2. **Ta ni Adé ń gbé pẹ̀lú?** — *Ìyá àgbà rẹ̀.* (His grandmother.)
3. **Kí ni ó jẹ ẹ̀fọ́ Adé?** — *Ewúrẹ́ aládùúgbò.* (The neighbour's goat.)
4. **Kí ni Adé fi owó rẹ̀ rà?** — *Ìwé méjì.* (Two books.)
5. **Ẹ̀kọ́ wo ni ìtàn yìí kọ́ wa?** — hard work and patience are rewarded.

## Tips
- do not copy whole sentences when a short answer will do
- for "why" questions, begin **Nítorí pé…** (Because…)
- for a title, choose words that cover the **whole** passage`,
          examples: `**Example 1.** What does **àkàyé** mean? *Answer:* **Reading with understanding** (comprehension).

**Example 2.** From the passage: where is the garden? *Answer:* **Behind the house** (*lẹ́yìn ilé wọn*).

**Example 3.** What did Adé do after the goat ate his vegetables? *Answer:* He **fenced the garden and planted again**.`,
        },
        questions: [
          ["E", "The Yoruba term for 'comprehension' is", "àkàyé", "àròkọ", "àkọtọ́", "àlọ́", "It means reading with understanding."],
          ["E", "In the passage, Adé is", "twelve years old", "ten years old", "fifteen years old", "eight years old", "The passage says 'ọmọ ọdún méjìlá'."],
          ["E", "According to the passage, Adé lives with his", "grandmother", "uncle", "teacher", "elder brother", "'Ìyá àgbà' means grandmother."],
          ["M", "The animal that ate Adé's vegetables was a", "goat", "dog", "cow", "fowl", "'Ewúrẹ́ aládùúgbò' — the neighbour's goat."],
          ["M", "With the money from his sales, Adé bought", "two books", "a goat", "new shoes", "a hoe", "'Ó fi owó náà ra ìwé méjì.'"],
          ["M", "The first step in answering a comprehension passage is to", "read the passage through", "write the answers at once", "count the words", "copy the passage", "The general idea must first be grasped."],
          ["M", "In the passage, the word 'abúlé' means", "village", "garden", "market", "school", "Adé lives there with his grandmother."],
          ["H", "The word 'aláápọn' used of Adé means", "hard-working", "lazy", "angry", "greedy", "His grandmother praised him with it."],
          ["H", "The best lesson to draw from the passage is that", "hard work and patience are rewarded", "goats should be killed", "neighbours are wicked", "gardens are useless", "Adé replanted and later earned money."],
          ["H", "An answer to a 'why' question in Yoruba comprehension normally begins with", "Nítorí pé…", "Ṣé…", "Kí ni…", "Ààlọ́ o…", "It means 'Because…'."],
        ],
      },
      {
        week: 5,
        title: "The informal letter",
        subtopics: ["Kinds of letter", "Parts of an informal letter", "Language of an informal letter", "A sample letter"],
        objectives: ["Distinguish informal from formal letters", "Set out the parts of an informal letter", "Use suitable greetings and closing in Yoruba", "Write a short informal letter"],
        lesson: {
          title: "Lẹ́tà gbẹ̀fẹ́",
          summary: "Write a friendly letter in Yoruba.",
          minutes: 40,
          notes: `## Kinds of letter
- **lẹ́tà gbẹ̀fẹ́** — the **informal (friendly) letter**, written to relatives and friends
- **lẹ́tà àìgbẹ̀fẹ́** — the **formal (official) letter**, written to offices, schools and authorities

## Parts of an informal letter
| Part | Yoruba | Where |
|---|---|---|
| 1. writer's address | **àdírẹ́sì akọlẹ́tà** | top right |
| 2. date | **déètì** | under the address |
| 3. salutation | **ìkíni ìbẹ̀rẹ̀** | left margin |
| 4. opening greetings | **ìkíni** | first paragraph |
| 5. body | **ara lẹ́tà** | middle paragraphs |
| 6. closing | **ìkádìí / ìparí** | last paragraph |
| 7. subscription and name | **ìdágbére àti orúkọ** | bottom right |

An informal letter has **only one address** — the writer's — and the writer signs with **the first name only**.

## The salutation
- **Bàbá mi ọ̀wọ́n,** — My dear father,
- **Ìyá mi àtàtà,** — My precious mother,
- **Ọ̀rẹ́ mi ọ̀wọ́n,** — My dear friend,
- **Ẹ̀gbọ́n mi,** — My elder brother/sister,

## The opening greetings
A Yoruba letter begins by asking after the reader's health:
> Mo kí yín púpọ̀. Ṣé àlàáfíà ni ẹ wà? Báwo ni ilé àti gbogbo ẹbí? Mo lérò pé gbogbo yín wà ní àlàáfíà. Èmi náà wà ní àlàáfíà.
(*I greet you warmly. Are you well? How are home and the whole family? I hope you are all in good health. I too am well.*)

## The body
State the **purpose** of the letter, one idea to a paragraph. Use **ẹ** for an elder and **o** for an age-mate.

## The closing
> Ẹ bá mi kí gbogbo ilé. Ó dìgbà. — *Greet everyone at home for me. Till then.*

## The subscription
- **Èmi ni ọmọ yín,** — I am your child,
- **Èmi ni ọ̀rẹ́ rẹ,** — I am your friend,
followed by the **first name**.

## A sample letter
> Ilé-Ìwé Gíga Ìrẹ́pọ̀,
> Àpótí Ìfìwéránṣẹ́ 25,
> Òṣogbo.
> Ọjọ́ kẹwàá, Oṣù Èbìbí, 2025.
>
> Bàbá mi ọ̀wọ́n,
>
> Mo kí yín púpọ̀, Sà. Ṣé àlàáfíà ni ẹ wà? Báwo ni ìyá mi àti àwọn àbúrò mi? Mo lérò pé gbogbo yín wà dáadáa. Èmi náà wà ní àlàáfíà.
>
> Mo kọ lẹ́tà yìí láti sọ fún yín pé ìdánwò wa yóò bẹ̀rẹ̀ ní ọ̀sẹ̀ tí ń bọ̀. Mo ń kàwé gidigidi. Ẹ jọ̀ọ́ Sà, mo nílò ìwé Ìṣirò tuntun àti owó oúnjẹ.
>
> Ẹ bá mi kí ìyá mi àti gbogbo ilé. Ó dìgbà tí a bá ríra.
>
> Èmi ni ọmọ yín,
> Túndé.

*(Summary: Túndé greets his father, says examinations begin next week, asks for a new Mathematics book and feeding money, and sends greetings home.)*

## Language
warm and simple; respectful to elders; no slang with elders; correct tone marks.

## Marking guide
address and date; salutation; opening greetings; content; arrangement in paragraphs; expression; closing.`,
          examples: `**Example 1.** What is **lẹ́tà gbẹ̀fẹ́**? *Answer:* An **informal (friendly) letter** to relatives or friends.

**Example 2.** How many addresses does an informal letter have? *Answer:* **One** — the writer's.

**Example 3.** Give a suitable salutation to one's father. *Answer:* **Bàbá mi ọ̀wọ́n,**`,
        },
        questions: [
          ["E", "A letter written to a friend or relative is called", "lẹ́tà gbẹ̀fẹ́", "lẹ́tà àìgbẹ̀fẹ́", "àkàyé", "ìròyìn", "It is the informal letter."],
          ["E", "The writer's address in a letter is placed at the", "top right-hand corner", "bottom left-hand corner", "middle of the page", "back of the page", "The date follows beneath it."],
          ["E", "An informal letter has how many addresses?", "one", "two", "three", "none", "Only the writer's address is given."],
          ["M", "'Bàbá mi ọ̀wọ́n' at the start of a letter means", "My dear father", "Your loving son", "Yours faithfully", "Greet father for me", "It is the salutation."],
          ["M", "The Yoruba term for the body of a letter is", "ara lẹ́tà", "àdírẹ́sì", "déètì", "ìdágbére", "It carries the message."],
          ["M", "A Yoruba informal letter normally opens by", "asking after the reader's health", "stating the price of goods", "giving a title in capitals", "listing the writer's qualifications", "Greeting comes before the message."],
          ["M", "At the end of an informal letter the writer signs with", "the first name only", "the full name and title", "a rubber stamp", "the school's name", "The reader knows the writer well."],
          ["H", "'Èmi ni ọmọ yín' as a closing means", "I am your child", "I am your friend", "I am your teacher", "I am your neighbour", "Yín is the respectful 'your'."],
          ["H", "In writing to one's father in Yoruba, the correct pronoun of address is", "ẹ / yín", "o / rẹ", "ó / rẹ̀", "mo / mi", "The plural forms show respect to an elder."],
          ["H", "'Ẹ bá mi kí gbogbo ilé' means", "Greet everyone at home for me", "I am coming home", "The house is big", "Everyone at home is ill", "It is a common closing line."],
        ],
      },
      {
        week: 6,
        title: "Traditional games and songs",
        subtopics: ["Indoor and board games", "Outdoor and moonlight games", "Children's songs", "Value of games and songs"],
        objectives: ["Describe the game of ayò", "Describe outdoor and moonlight games", "Identify kinds of children's songs", "State the value of traditional games and songs"],
        lesson: {
          title: "Eré ìdárayá àti orin ìbílẹ̀",
          summary: "Describe traditional Yoruba games and children's songs.",
          minutes: 40,
          notes: `## Play
**Eré** means play or game; **eré ìdárayá** is recreation — play that refreshes the body. In the evening, especially under the **moon (òṣùpá)**, children gathered to play (**eré òṣùpá**).

## Board and indoor games
### Ayò (ayò ọlọ́pọ́n)
The best-known Yoruba game.
- played by **two people** on a wooden board (**ọpọ́n ayò**) with **twelve holes** — six on each side
- each hole begins with **four seeds**, making **forty-eight** seeds in all
- players take turns to **sow** the seeds round the board and **capture** the opponent's seeds
- the winner is the one who captures more
- the skilful player is the **ọ̀ta**; the one learning or losing is the **òpè**
- onlookers comment freely and tease the loser
Ayò trains **counting, memory and planning**.

### Others
- **àrìn** — a game played with marbles or seeds rolled at a target
- **òkòtó** — spinning snail-shell tops
- **àlọ́ àpamọ̀** — riddle contests

## Outdoor and moonlight games
- **bojúbojú** — hide-and-seek: one child's eyes are covered while the others hide; the game has its own song
- **ìjàkadì (ẹkẹ)** — **wrestling**: two boys try to throw each other; it builds strength and courage
- **"Ta ló wà nínú ọgbà náà?"** — a ring game with call and response
- **sáré ìje** — races
- **okùn fífà** — tug of war
- clapping, counting and jumping games for girls

## Children's songs (orin ọmọdé)
- **orin eré** — play songs that go with games
- **orin arẹmọlẹ́kún** — lullabies to quiet a baby
- **orin ẹ̀kọ́** — songs that teach: counting, cleanliness, good conduct
- **orin àlọ́** — songs inside folktales

### A well-known teaching poem
School children learn verses praising hard work — that work is the cure for poverty and that one should work hard while young. They were popularised in the **Aláwìíyé** readers of **J. F. Ọdúnjọ**.

### A cleanliness song (in English)
*Wash your body, cut your nails; eat at the proper time; a clean child is loved by all.*

## Musical instruments
| Yoruba | Description |
|---|---|
| **dùndún / gángan** | hourglass "talking" drums |
| **bàtá** | double-headed drums of Ṣàngó |
| **ṣẹ̀kẹ̀rẹ̀** | gourd rattle strung with beads |
| **agogo** | iron gong / bell |
| **gbẹ̀du** | royal drum |
| **fèrè** | flute |
| **àgídìgbo** | thumb piano in a box |

## Value of games and songs
- **exercise** — a healthy body
- **co-operation** and friendship
- **quick thinking**; counting
- **language** — rhymes and songs teach words and tones
- **discipline** — obeying rules; taking turns; accepting defeat
- **culture** is passed on

## Today
Many children now prefer television and phones. Schools and families can keep these games alive through cultural days and evening play.`,
          examples: `**Example 1.** How many holes has an **ayò** board? *Answer:* **Twelve** — six on each side.

**Example 2.** What is **bojúbojú**? *Answer:* **Hide-and-seek**.

**Example 3.** Give two benefits of traditional games. *Answer:* **Exercise** and **co-operation**.`,
        },
        questions: [
          ["E", "The best-known traditional Yoruba board game is", "ayò", "bojúbojú", "ìjàkadì", "àrìn", "It is played with seeds on a wooden board."],
          ["E", "'Bojúbojú' is the game of", "hide-and-seek", "wrestling", "tug of war", "racing", "One child's eyes are covered while others hide."],
          ["E", "The Yoruba word for 'moon' is", "òṣùpá", "oòrùn", "ìràwọ̀", "òjò", "Children played by its light in the evening."],
          ["M", "An ayò board has", "twelve holes", "ten holes", "eight holes", "sixteen holes", "There are six holes on each side."],
          ["M", "Traditional wrestling among the Yoruba is called", "ìjàkadì", "okùn fífà", "sáré ìje", "òkòtó", "It builds strength and courage."],
          ["M", "The game of ayò is played by", "two people", "four people", "six people", "one person", "They sit facing each other across the board."],
          ["M", "A song sung to quiet a crying baby is", "orin arẹmọlẹ́kún", "orin ogun", "ìjálá", "rárà", "It is a lullaby."],
          ["H", "At the start of a game of ayò, the total number of seeds on the board is", "forty-eight", "twenty-four", "thirty-six", "sixty", "Each of the twelve holes holds four seeds."],
          ["H", "The gourd rattle strung with beads is the", "ṣẹ̀kẹ̀rẹ̀", "agogo", "bàtá", "fèrè", "It is shaken to keep rhythm."],
          ["H", "The school readers that popularised well-known Yoruba teaching poems were written by", "J. F. Ọdúnjọ", "D. O. Fágúnwà", "Wole Soyinka", "Hubert Ogunde", "The series is called Aláwìíyé."],
        ],
      },
    ],
  },
];
