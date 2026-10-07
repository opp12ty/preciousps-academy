import type { TermPlan } from "../types";

/** JSS2 Igbo — original Precious PS content following the national Basic Education structure. Explanations are given in English with Igbo terms and examples. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Numbers 20 to 1,000",
        subtopics: ["The tens", "Adding units to a ten", "Hundreds and thousands", "The traditional count in twenties"],
        objectives: ["Count in tens from 20 to 100", "Form numbers by adding units to a ten", "Say hundreds and thousands", "Explain the older system based on ọgụ and nnụ"],
        lesson: {
          title: "Ọnụọgụ: 20 – 1,000",
          summary: "Count from twenty to one thousand in Igbo.",
          minutes: 40,
          notes: `## The tens
The modern (decimal) system multiplies **iri** (ten):
| Figure | Igbo | Idea |
|---|---|---|
| 20 | **iri abụọ** | 10 × 2 |
| 30 | **iri atọ** | 10 × 3 |
| 40 | **iri anọ** | 10 × 4 |
| 50 | **iri ise** | 10 × 5 |
| 60 | **iri isii** | 10 × 6 |
| 70 | **iri asaa** | 10 × 7 |
| 80 | **iri asatọ** | 10 × 8 |
| 90 | **iri itoolu** | 10 × 9 |
| 100 | **narị** (otu narị) | — |

## Adding units
Join the unit with **na** ("and"):
| Figure | Igbo |
|---|---|
| 21 | **iri abụọ na otu** |
| 25 | **iri abụọ na ise** |
| 36 | **iri atọ na isii** |
| 48 | **iri anọ na asatọ** |
| 99 | **iri itoolu na itoolu** |

## Hundreds and thousands
| Figure | Igbo |
|---|---|
| 100 | **narị** |
| 101 | **narị na otu** |
| 110 | **narị na iri** |
| 150 | **narị na iri ise** |
| 200 | **narị abụọ** |
| 500 | **narị ise** |
| 1,000 | **puku** (otu puku) |
| 2,000 | **puku abụọ** |
| 10,000 | **puku iri** |
| 1,000,000 | **nde** (otu nde) |

- **365** — narị atọ na iri isii na ise
- **1,960** — otu puku, narị itoolu na iri isii

## The pattern
**multiplier after the base**: iri **abụọ** (20), narị **atọ** (300), puku **ise** (5,000); then smaller parts joined with **na**.

## The traditional count in twenties
Before the decimal system was adopted for schools, the Igbo counted in **twenties**:
| Unit | Value |
|---|---|
| **ọgụ** | 20 |
| **ọgụ abụọ** | 40 |
| **ọgụ ise** | 100 |
| **nnụ** | 400 (20 × 20) |
| **nnụ abụọ** | 800 |
Elders still use these in markets and in proverbs. Yam and other goods were counted in **ọgụ** and **nnụ**.

## Counting objects
The number follows the noun: **mmadụ iri abụọ** (twenty people); **akwụkwọ iri atọ** (thirty books); **naịra narị ise** (five hundred naira).

## Practice
Count in tens: **iri, iri abụọ, iri atọ, iri anọ, iri ise, iri isii, iri asaa, iri asatọ, iri itoolu, narị**.`,
          examples: `**Example 1.** What is 40 in Igbo, and how is it formed? *Answer:* **iri anọ** — "ten four times".

**Example 2.** Say 25 and 110 in Igbo. *Answer:* **iri abụọ na ise** and **narị na iri**.

**Example 3.** What are **ọgụ** and **nnụ** in the traditional count? *Answer:* **Twenty** and **four hundred**.`,
        },
        questions: [
          ["E", "The Igbo for 30 is", "iri atọ", "iri na atọ", "atọ iri na", "narị atọ", "It means ten in three places."],
          ["E", "'Narị' is the number", "100", "10", "1,000", "20", "Otu narị is one hundred."],
          ["E", "The Igbo word for 1,000 is", "puku", "nde", "narị", "nnụ", "Nde is a million."],
          ["M", "'Iri ise' is the number", "50", "15", "500", "5", "Iri na ise would be fifteen."],
          ["M", "The Igbo for 21 is", "iri abụọ na otu", "iri na abụọ na otu", "otu iri abụọ", "iri otu na abụọ", "Twenty and one."],
          ["M", "'Narị abụọ' is the number", "200", "102", "120", "2,000", "The multiplier follows the base."],
          ["M", "'Iri asaa' is the number", "70", "17", "7", "700", "Ten in seven places."],
          ["H", "In the traditional Igbo count, 'nnụ' is", "400", "20", "100", "1,000", "It is twenty twenties."],
          ["H", "The Igbo for 150 is", "narị na iri ise", "narị ise na iri", "iri ise narị", "narị iri na ise", "A hundred and fifty."],
          ["H", "In the traditional count, 'ọgụ ise' equals", "100", "25", "50", "500", "Five twenties. Answer: 100."],
        ],
      },
      {
        week: 2,
        title: "Verbs",
        subtopics: ["What a verb is", "The infinitive", "The imperative", "Verbs with fixed nouns"],
        objectives: ["Define a verb and identify verb roots", "Form the infinitive with i- or ị-", "Give simple commands", "Recognise verbs that go with a fixed noun"],
        lesson: {
          title: "Ngwaa",
          summary: "Identify Igbo verbs and form the infinitive and the imperative.",
          minutes: 40,
          notes: `## What is a verb?
A **verb** (**ngwaa**) tells **what the subject does** or the **state** it is in. It is the heart of the sentence.

## The verb root
Every Igbo verb has a short **root** (**isi ngwaa**), usually **one consonant + one vowel**:
**ga** (go), **ri** (eat), **bịa** (come), **zụ** (buy), **me** (do), **de** (write), **hụ** (see), **nụ** (hear), **kwu** (speak), **gụ** (read; count), **re** (sell), **sa** (wash), **bu** (carry), **ṅụ** (drink), **chọ** (want; look for), **ma** (know).

Prefixes and suffixes are added to the root to show the form.

## The infinitive: i- / ị-
"To do something" is formed by putting **i-** or **ị-** before the root, **according to vowel harmony**:
| Root vowel | Prefix | Examples |
|---|---|---|
| Group A (a, ị, ọ, ụ) | **ị-** | **ịga** (to go), **ịzụ** (to buy), **ịhụ** (to see), **ịchọ** (to want) |
| Group E (e, i, o, u) | **i-** | **iri** (to eat), **ime** (to do), **ide** (to write), **ikwu** (to speak) |

## Common verbs
| Infinitive | English | Infinitive | English |
|---|---|---|---|
| **ịga** | to go | **ịbịa** | to come |
| **iri** | to eat | **ịṅụ** | to drink |
| **ịhụ** | to see | **ịnụ** | to hear |
| **ikwu** | to speak | **ịgụ** | to read |
| **ide** | to write | **ịzụ** | to buy |
| **ire** | to sell | **ime** | to do |
| **ịchọ** | to want | **ịma** | to know |
| **ịsa** | to wash | **ibu** | to carry |
| **isi** | to cook | **inye** | to give |

## The imperative (command)
The simple command is the **root + a vowel suffix**:
| Root | Command | Meaning |
|---|---|---|
| ga | **Gaa!** | Go! |
| ri | **Rie!** | Eat! |
| bịa | **Bịa!** | Come! |
| zụ | **Zụọ!** | Buy! |
| me | **Mee!** | Do! |
| de | **Dee!** | Write! |
| kwu | **Kwuo!** | Speak! |
| gụ | **Gụọ!** | Read! |
For several people add **-nụ**: **Bịanụ!** (Come, all of you!), **Gaanụ!**

## Verbs with a fixed noun
Many Igbo verbs always take a **particular noun** to complete their meaning:
| Verb + noun | Meaning |
|---|---|
| **ịgba ọsọ** | to run ("to run a race") |
| **ịga ije** | to walk |
| **ịrahụ ụra** | to sleep |
| **iri nri** | to eat (food) |
| **ịgụ akwụkwọ** | to read; to study |
| **ịbụ abụ** | to sing |
| **ịgba egwu** | to dance |
| **ịkwa ákwá** | to cry |
| **ịchị ọchị** | to laugh |
| **ịsa ahụ** | to bathe |
| **ịkụ aka** | to clap; to knock |
| **ịtụ egwu** | to fear |
- **Ọ na-agba ọsọ.** — He is running.
- **Nwa ahụ na-ebe ákwá.** — The child is crying.

## The verb does not change for person
- **M gara.** — I went. **Ọ gara.** — He went. **Ha gara.** — They went.
Time and negation are shown by **affixes and helping verbs** (next lessons).

## Verbs of state
- **Ọ dị mma.** — It is good.
- **O toro ogologo.** — He is tall.
- **Ọ ma ihe.** — He is wise.

## Finding the verb
> Ada **zụrụ** akwa n'ahịa. — Ada **bought** cloth at the market.`,
          examples: `**Example 1.** What is **ngwaa**? *Answer:* A **verb** — a word showing an action or a state.

**Example 2.** Give the infinitive of the roots **ga** and **ri**. *Answer:* **ịga** (to go) and **iri** (to eat) — the prefix follows vowel harmony.

**Example 3.** Give the command forms "Go!" and "Eat!" *Answer:* **Gaa!** and **Rie!**`,
        },
        questions: [
          ["E", "The Igbo term for 'verb' is", "ngwaa", "aha", "nnọchiaha", "njikọ", "It tells what the subject does."],
          ["E", "The Igbo infinitive meaning 'to go' is", "ịga", "ịbịa", "iri", "ide", "The root is ga."],
          ["E", "'Iri' means", "to eat", "to drink", "to sleep", "to write", "The root is ri."],
          ["M", "The command 'Bịa!' means", "Come!", "Go!", "Eat!", "Write!", "It is the imperative of ịbịa."],
          ["M", "The Igbo infinitive meaning 'to buy' is", "ịzụ", "ire", "ịgụ", "ide", "Ire is 'to sell'."],
          ["M", "In 'Ada zụrụ akwa', the verb is", "zụrụ", "Ada", "akwa", "none", "It tells what Ada did."],
          ["M", "'Ịgba ọsọ' means", "to run", "to walk", "to sleep", "to dance", "The verb gba takes the fixed noun ọsọ."],
          ["H", "The infinitive prefix is 'ị-' in 'ịga' but 'i-' in 'ime' because of", "vowel harmony", "tone", "plural number", "the tense", "The prefix agrees with the group of the root vowel."],
          ["H", "The command addressed to several people, 'Come, all of you!', is", "Bịanụ!", "Bịa!", "Ịbịa!", "Bịara!", "The suffix -nụ marks the plural imperative."],
          ["H", "'Ịrahụ ụra' means", "to sleep", "to laugh", "to cry", "to bathe", "Ụra means sleep."],
        ],
      },
      {
        week: 3,
        title: "The simple sentence",
        subtopics: ["Word order", "Subject, verb and object", "Sentences with bụ, dị and nọ", "Sentences with nwere"],
        objectives: ["State the normal word order of an Igbo sentence", "Identify subject, verb and object", "Use bụ, dị and nọ for 'to be'", "Use nwere for 'to have'"],
        lesson: {
          title: "Ahịrịokwu mfe",
          summary: "Build simple Igbo sentences with the correct word order.",
          minutes: 40,
          notes: `## The sentence
A **sentence** (**ahịrịokwu**) is a group of words that makes complete sense. A simple sentence (**ahịrịmfe**) has **one verb**.

## Word order: Subject – Verb – Object
| Subject | Verb | Object | Meaning |
|---|---|---|---|
| **Obi** | **riri** | **ji** | Obi ate yam. |
| **Nne** | **zụrụ** | **akwa** | Mother bought cloth. |
| **Ha** | **dere** | **leta** | They wrote a letter. |
| **Ada** | **hụrụ** | **nkịta** | Ada saw a dog. |

Some sentences have **no object**:
- **Nwa ahụ dara.** — The child fell.
- **Mmiri zoro.** — Rain fell.

## Describing words follow the noun
- **ụlọ ukwu** — a big house
- **nwa ọma** — a good child
- **akwụkwọ m** — my book
- **ụmụaka atọ** — three children
So: **Nwa nta ahụ riri agwa.** — The small child ate beans.

## Three ways of saying "to be"
### 1. bụ — to be (something): identity
- **Obi bụ nwa akwụkwọ.** — Obi is a student.
- **Nke a bụ akwụkwọ.** — This is a book.
- **Ọ bụ enyi m.** — He is my friend.

### 2. dị — to be (in a state; of things in a place)
- **Nri a dị mma.** — This food is good.
- **Mmiri dị ọkụ.** — The water is hot.
- **Akwụkwọ dị n'elu tebụl.** — The book is on the table.

### 3. nọ — to be (in a place; of people and animals)
- **Nna m nọ n'ụlọ.** — My father is at home.
- **Anọ m n'Enugu.** — I am in Enugu.
- **Nkịta nọ n'èzí.** — The dog is outside.

| Verb | Use | Example |
|---|---|---|
| **bụ** | what something is | Ọ bụ dọkịta. |
| **dị** | how it is; where a thing is | Ọ dị ogologo. |
| **nọ** | where a living being is | Ọ nọ n'ahịa. |

## "To have": nwere
- **Obi nwere akwụkwọ.** — Obi has a book.
- **Enwere m ego.** — I have money.
- **Ha nwere ụlọ ukwu.** — They have a big house.

## The preposition "na"
**na** ("at, in, on") becomes **n'** before a vowel: **na ụlọ → n'ụlọ**; **na ahịa → n'ahịa**.

## Going to a place needs no preposition
- **Ọ gara ahịa.** — He went **to** market.
- **Anyị na-aga ụlọ akwụkwọ.** — We are going **to** school.

## Emphasis
To stress a word, bring it to the front with **Ọ bụ … ka** (or **… ka**):
- **Obi zụrụ akwụkwọ.** — Obi bought a book.
- **Ọ bụ akwụkwọ ka Obi zụrụ.** — It was *a book* that Obi bought.
- **Ọ bụ Obi zụrụ akwụkwọ.** — It was *Obi* who bought a book.

## Building practice
Subject + verb + object + place:
> **Emeka zụrụ achịcha n'ahịa.** — Emeka bought bread at the market.`,
          examples: `**Example 1.** What is the normal word order in Igbo? *Answer:* **Subject – Verb – Object**, as in *Obi riri ji*.

**Example 2.** Translate "The book is on the table." *Answer:* **Akwụkwọ dị n'elu tebụl** — *dị* is used for a thing in a place.

**Example 3.** Translate "My father is at home." *Answer:* **Nna m nọ n'ụlọ** — *nọ* is used for a person in a place.`,
        },
        questions: [
          ["E", "The Igbo term for 'sentence' is", "ahịrịokwu", "nkejiokwu", "mkpụrụokwu", "ilu", "It is a group of words that makes complete sense."],
          ["E", "The normal word order in an Igbo sentence is", "subject – verb – object", "verb – subject – object", "object – subject – verb", "verb – object – subject", "As in 'Obi riri ji'."],
          ["E", "In 'Obi riri ji', the subject is", "Obi", "riri", "ji", "none", "He is the doer of the action."],
          ["M", "'Nke a bụ akwụkwọ' means", "This is a book", "Where is the book?", "I have a book", "The book is big", "Bụ identifies what something is."],
          ["M", "'Nna m nọ n'ụlọ' means", "My father is at home", "My father has a house", "My father built a house", "My father left home", "Nọ is used for a person in a place."],
          ["M", "'Enwere m ego' means", "I have money", "I am money", "I want money", "I spent money", "Nwere means 'to have'."],
          ["M", "In Igbo, a describing word normally comes", "after the noun", "before the noun", "at the start of the sentence", "before the subject pronoun", "As in 'ụlọ ukwu' — a big house."],
          ["H", "The correct verb for 'to be' in 'The water ___ hot' is", "dị", "bụ", "nọ", "nwere", "Dị describes the state of something."],
          ["H", "'Ọ bụ akwụkwọ ka Obi zụrụ' places emphasis on", "the book", "Obi", "the act of buying", "the market", "Ọ bụ … ka brings the stressed word to the front."],
          ["H", "The preposition 'na' is written n' in 'n'ụlọ' because", "it comes before a vowel", "the noun is plural", "the tone is low", "it is a verb", "The vowel of na is dropped before another vowel."],
        ],
      },
      {
        week: 4,
        title: "Showing time: tense and aspect",
        subtopics: ["The past with -rV", "The continuous with na-", "The future with ga-", "The perfect with -la / -le"],
        objectives: ["Form the past tense with the -rV suffix", "Form the continuous with na-", "Form the future with ga-", "Form the perfect with -la or -le"],
        lesson: {
          title: "Oge na ngwaa",
          summary: "Show when an action happens using Igbo verb forms.",
          minutes: 40,
          notes: `## How Igbo shows time
Igbo adds **suffixes** to the verb root or uses the **helping verbs na and ga** before it.

## 1. Simple past: the -rV suffix
Add **r + the vowel of the root** ("V" = a copy of the root vowel):
| Root | Past | Example |
|---|---|---|
| ga | **gara** | **Ọ gara ahịa.** — He went to market. |
| ri | **riri** | **O riri nri.** — He ate. |
| zụ | **zụrụ** | **Ọ zụrụ akwa.** — She bought cloth. |
| me | **mere** | **O mere ya.** — He did it. |
| de | **dere** | **O dere leta.** — He wrote a letter. |
| bịa | **bịara** | **Ha bịara.** — They came. |
| hụ | **hụrụ** | **Ahụrụ m ya.** — I saw him. |

With verbs of **state**, the -rV form means the **present**: **O toro ogologo.** — He is tall.

## 2. Continuous / habitual: na-
**na** + **a-/e-** + root. The prefix is **a-** with Group A roots and **e-** with Group E roots:
| | Example | Meaning |
|---|---|---|
| ga | **Ọ na-aga ahịa.** | He is going to market. |
| ri | **Ọ na-eri nri.** | He is eating. |
| de | **Ada na-ede leta.** | Ada is writing a letter. |
| zụ | **Ha na-azụ ahịa.** | They are trading. |
With "I": **Ana m aga.** / **M na-aga.** — I am going.
The same form shows **habit**: **Ọ na-aga ụka kwa Sọnde.** — He goes to church every Sunday.

## 3. Future: ga-
**ga** + **a-/e-** + root:
| | Example | Meaning |
|---|---|---|
| bịa | **Ọ ga-abịa echi.** | He will come tomorrow. |
| ri | **Ọ ga-eri ji.** | He will eat yam. |
| ga | **M ga-aga.** / **Aga m aga.** | I will go. |

## 4. Perfect: -la / -le
A completed action that still matters now. **-la** with Group A roots, **-le** with Group E roots; a vowel prefix appears after a noun subject or with "I":
| | Example | Meaning |
|---|---|---|
| ga | **Ọ gaala.** | He has gone. |
| ri | **O riela nri.** | He has eaten. |
| bịa | **Ha abịala.** | They have come. |
| me | **Emeela m ya.** | I have done it. |
| de | **Obi edeela leta.** | Obi has written a letter. |

## Summary
| Form | Marker | Example | Meaning |
|---|---|---|---|
| past | **-rV** | Ọ bịara | He came |
| continuous | **na-** | Ọ na-abịa | He is coming |
| future | **ga-** | Ọ ga-abịa | He will come |
| perfect | **-la / -le** | Ọ bịala | He has come |

## Time words
| Igbo | English |
|---|---|
| **ụnyaahụ** | yesterday |
| **taa** | today |
| **echi** | tomorrow |
| **ugbu a** | now |
| **mgbe na-adịghị anya** | soon |
| **na mbụ** | formerly, at first |
| **afọ gara aga** | last year |
| **izu na-abịa** | next week |
| **kwa ụbọchị** | every day |

- **Ahụrụ m ya ụnyaahụ.** — I saw him yesterday.
- **M ga-ahụ ya echi.** — I will see him tomorrow.

## Order in the sentence
**Subject + (helping verb) + verb + object + time word**
> **Ada na-agụ akwụkwọ ugbu a.** — Ada is reading now.`,
          examples: `**Example 1.** Give the past of **ga** and **ri**. *Answer:* **gara** and **riri** — the suffix is r + the root vowel.

**Example 2.** Change to the continuous: **O riri nri.** *Answer:* **Ọ na-eri nri** (He is eating).

**Example 3.** Translate "They have come." *Answer:* **Ha abịala**.`,
        },
        questions: [
          ["E", "The past tense of the Igbo root 'ga' (go) is", "gara", "gaa", "na-aga", "ga-aga", "The suffix is r plus the root vowel."],
          ["E", "'Ọ na-eri nri' means", "He is eating", "He has eaten", "He will eat", "He ate", "Na- marks an action in progress."],
          ["E", "'Echi' means", "tomorrow", "yesterday", "now", "last year", "It points to the future."],
          ["M", "The helping verb that marks the future in Igbo is", "ga", "na", "bụ", "dị", "As in 'Ọ ga-abịa'."],
          ["M", "'Ọ ga-abịa echi' means", "He will come tomorrow", "He is coming now", "He has come", "He came yesterday", "Ga- marks the future."],
          ["M", "The past tense of the root 'ri' (eat) is", "riri", "rie", "rila", "riga", "The vowel of the root is copied after r."],
          ["M", "'Ha abịala' means", "They have come", "They are coming", "They will come", "They did not come", "The suffix -la marks the perfect."],
          ["H", "In the past suffix written '-rV', the letter V stands for", "a copy of the root vowel", "the vowel a only", "a low tone", "the plural", "Hence gara, riri, zụrụ and mere."],
          ["H", "The perfect suffix is '-le' in 'O riela' but '-la' in 'Ọ gaala' because of", "vowel harmony", "the tense", "the number of the subject", "the object", "Group E roots take -le; Group A roots take -la."],
          ["H", "'Ọ na-aga ụka kwa Sọnde' expresses", "a habitual action", "a completed action", "a future action", "a command", "The na- form also shows what is done regularly."],
        ],
      },
      {
        week: 5,
        title: "Negation",
        subtopics: ["The negative suffix -ghị", "Negative continuous and future", "Not yet", "Negative commands"],
        objectives: ["Make statements negative with -ghị / -ghi", "Negate continuous and future sentences", "Express 'not yet' with -beghị", "Give negative commands"],
        lesson: {
          title: "Njụ: ahịrịokwu nke na-ekwe na nke na-ajụ",
          summary: "Turn Igbo statements and commands into the negative.",
          minutes: 40,
          notes: `## Affirmative and negative
An **affirmative** sentence (**ahịrịokwu nkwe**) says something **is** so; a **negative** sentence (**ahịrịokwu njụ**) says it is **not** so.

## 1. The negative suffix: -ghị / -ghi
Add **-ghị** (Group A roots) or **-ghi** (Group E roots) to the verb root. After a **noun subject** (and with "I"), a vowel prefix **a-/e-** is added.
| Affirmative | Negative |
|---|---|
| **Ọ gara ahịa.** — He went to market. | **Ọ gaghị ahịa.** — He did not go to market. |
| **O riri nri.** — He ate. | **O righi nri.** — He did not eat. |
| **Obi bịara.** — Obi came. | **Obi abịaghị.** — Obi did not come. |
| **Ada zụrụ akwa.** — Ada bought cloth. | **Ada azụghị akwa.** — Ada did not buy cloth. |
| **Ahụrụ m ya.** — I saw him. | **Ahụghị m ya.** — I did not see him. |
| **Ama m.** — I know. | **Amaghị m.** — I do not know. |

## 2. Negative continuous: naghị
- **Ọ na-eri nri.** — He is eating. → **Ọ naghị eri nri.** — He is not eating.
- **Ha na-abịa.** → **Ha anaghị abịa.** — They are not coming / do not come.

## 3. Negative future: gaghị
- **Ọ ga-abịa.** — He will come. → **Ọ gaghị abịa.** — He will not come.
- **M ga-aga.** → **Agaghị m aga.** — I will not go.

## 4. "Not yet": -beghị / -beghi
The negative of the perfect:
- **Ọ bịala.** — He has come. → **Ọ bịabeghị.** — He has not yet come.
- **O riela.** → **O ribeghi nri.** — He has not yet eaten.

## 5. Negative commands
Prefix **a-/e-** + root + **-la / -le**:
| Command | Negative command |
|---|---|
| **Gaa!** — Go! | **Agala!** — Do not go! |
| **Rie!** — Eat! | **Erila!** — Do not eat! |
| **Bịa!** — Come! | **Abịala!** — Do not come! |
| **Kwuo!** — Speak! | **Ekwula!** — Do not speak! |
For several people: **Unu agala!** / **Agalanụ!**

## 6. Negating bụ, dị, nọ and nwere
| Affirmative | Negative |
|---|---|
| **Nke a bụ akwụkwọ.** | **Nke a abụghị akwụkwọ.** — This is not a book. |
| **Nri a dị mma.** | **Nri a adịghị mma.** — This food is not good. |
| **Nna m nọ n'ụlọ.** | **Nna m anọghị n'ụlọ.** — My father is not at home. |
| **Enwere m ego.** | **Enweghị m ego.** — I have no money. |
| **Mmiri dị.** — There is water. | **Mmiri adịghị.** — There is no water. |

## Summary
| Affirmative form | Negative form |
|---|---|
| past -rV | root + **-ghị / -ghi** |
| na- | **naghị** + verb |
| ga- | **gaghị** + verb |
| perfect -la / -le | root + **-beghị / -beghi** |
| command | **a-/e-** + root + **-la / -le** |

## Answering "no"
**Mba** — No. **Mba, ahụghị m ya.** — No, I did not see it.

## A caution
**Ọ gaghị** alone means "He did not go"; **Ọ gaghị aga** means "He will not go". The second verb makes the difference.`,
          examples: `**Example 1.** Make negative: **Ọ gara ahịa.** *Answer:* **Ọ gaghị ahịa** (He did not go to market).

**Example 2.** Make negative: **Gaa!** *Answer:* **Agala!** (Do not go!)

**Example 3.** Translate "I have no money." *Answer:* **Enweghị m ego**.`,
        },
        questions: [
          ["E", "The suffix that makes an Igbo verb negative is", "-ghị", "-rV", "-la", "-nụ", "As in 'Ọ gaghị'."],
          ["E", "The negative of 'Ọ gara ahịa' is", "Ọ gaghị ahịa", "Ọ gaala ahịa", "Ọ na-aga ahịa", "Ọ ga-aga ahịa", "The suffix -ghị replaces the past suffix."],
          ["E", "'Agala!' means", "Do not go!", "Go now!", "He has gone", "Let us go", "It is the negative command of ịga."],
          ["M", "'Amaghị m' means", "I do not know", "I know", "He knows", "We will know", "It is the negative of 'Ama m'."],
          ["M", "'Mmiri adịghị' means", "There is no water", "The water is cold", "Bring water", "He drank water", "Adịghị is the negative of dị."],
          ["M", "The negative of 'Nke a bụ akwụkwọ' is", "Nke a abụghị akwụkwọ", "Nke a bụla akwụkwọ", "Nke a na-abụ akwụkwọ", "Nke a ga-abụ akwụkwọ", "Abụghị means 'is not'."],
          ["M", "'Ọ naghị eri nri' means", "He is not eating", "He has not eaten yet", "He will not eat", "He did not cook", "Naghị negates the continuous."],
          ["H", "'Ọ bịabeghị' means", "He has not yet come", "He will not come", "He never comes", "He came late", "The suffix -beghị means 'not yet'."],
          ["H", "The negative of 'Ọ ga-abịa' (He will come) is", "Ọ gaghị abịa", "Ọ bịabeghị", "Ọ naghị abịa", "Abịala", "Gaghị negates the future."],
          ["H", "The negative command 'Erila!' is formed from the verb root", "ri (eat)", "re (sell)", "ra (lick)", "ru (reach)", "Prefix e- plus ri plus -la: 'Do not eat!'"],
        ],
      },
      {
        week: 6,
        title: "Asking questions",
        subtopics: ["Yes or no questions", "Question words", "Asking about number and price", "Answering questions"],
        objectives: ["Form yes/no questions with a low-tone pronoun", "Use the question words gịnị, onye, ebee, olee and mgbe ole", "Ask how many and how much", "Give suitable answers to questions"],
        lesson: {
          title: "Ajụjụ",
          summary: "Ask and answer questions in Igbo.",
          minutes: 40,
          notes: `## Two kinds of question
1. questions answered by **yes or no**
2. questions that ask for **information**, using a question word

## 1. Yes / no questions
A statement becomes a question when the **subject pronoun is said on a low tone**.
| Statement | Question |
|---|---|
| **Ọ bịara.** — He came. | **Ọ̀ bịara?** — Did he come? |
| **I riela nri.** — You have eaten. | **Ì riela nri?** — Have you eaten? |
| **Ha nọ n'ụlọ.** — They are at home. | **Hà nọ n'ụlọ?** — Are they at home? |

When the subject is a **noun**, a low-tone pronoun is added after it:
- **Obi bịara.** → **Obi ọ̀ bịara?** — Did Obi come?
- **Nne gị nọ n'ụlọ.** → **Nne gị ọ̀ nọ n'ụlọ?** — Is your mother at home?

Answers: **Ee** (Yes) / **Mba** (No).

## 2. Question words
The question word comes **first**, usually followed by **ka**.
| Igbo | English | Example |
|---|---|---|
| **Gịnị…?** | What…? | **Gịnị ka ị na-eme?** — What are you doing? |
| **Onye…?** | Who…? | **Onye bịara?** — Who came? |
| **Ebee…?** | Where…? | **Ebee ka ị na-aga?** — Where are you going? |
| **Mgbe ole…?** | When…? | **Mgbe ole ka ị bịara?** — When did you come? |
| **Kedu / Olee…?** | How? Which? What? | **Kedu aha gị?** — What is your name? |
| **Kedu ka / Olee otu…?** | How…? | **Kedu ka i si mee ya?** — How did you do it? |
| **Maka gịnị / N'ihi gịnị…?** | Why…? | **Maka gịnị ka i ji bịa n'azụ oge?** — Why did you come late? |
| **Ole…?** | How many…? | **Ụmụaka ole ka i nwere?** — How many children have you? |
| **Ego ole…?** | How much (price)? | **Ego ole ka ọ bụ?** — How much is it? |
| **Onye nwe…?** | Whose…? | **Onye nwe akwụkwọ a?** — Whose book is this? |
| **Kedu nke…?** | Which one…? | **Kedu nke ị chọrọ?** — Which one do you want? |

## Ole and Ego ole
- **ole** asks the **number**: *Akwụkwọ ole?* — How many books?
- **ego ole** asks the **price**: *Ego ole ka akpụkpọ ụkwụ a bụ?* — How much are these shoes?

## Answering
The answer usually **replaces the question word**:
- **Kedu aha gị?** — **Aha m bụ Nkechi.**
- **Ebee ka i bi?** — **Ebi m n'Owere.**
- **Onye ṅụrụ mmiri m?** — **Ọ bụ Emeka.**
- **Ego ole ka ọ bụ?** — **Ọ bụ narị naịra abụọ.**
- **Mgbe ole ka ị ga-abịa?** — **Echi.**

## "How about…?" — kwanụ
- **Nna gị kwanụ?** — How about your father?
- **Ụlọ unu kwanụ?** — How is your household?

## A dialogue
> **Onye nkuzi:** Kedu aha gị?
> **Nwa akwụkwọ:** Aha m bụ Chioma.
> **Onye nkuzi:** Ebee ka i si?
> **Nwa akwụkwọ:** Esi m Ọka.
> **Onye nkuzi:** Ụlọ akwụkwọ a ọ̀ masịrị gị?
> **Nwa akwụkwọ:** Ee, ọ masịrị m.

## Punctuation
A question ends with the **question mark** (**akara ajụjụ**).`,
          examples: `**Example 1.** Turn into a question: **Ọ bịara.** *Answer:* **Ọ̀ bịara?** — the pronoun takes a low tone.

**Example 2.** Ask "Where are you going?" *Answer:* **Ebee ka ị na-aga?**

**Example 3.** What is the difference between **ole** and **ego ole**? *Answer:* **Ole** asks **how many**; **ego ole** asks **how much (price)**.`,
        },
        questions: [
          ["E", "The Igbo word for 'question' is", "ajụjụ", "azịza", "ilu", "ekele", "Azịza means answer."],
          ["E", "'Onye?' means", "Who?", "What?", "Where?", "When?", "It asks about a person."],
          ["E", "The Igbo word for 'yes' is", "ee", "mba", "biko", "ndo", "Mba means 'no'."],
          ["M", "'Ebee ka ị na-aga?' means", "Where are you going?", "When are you going?", "Why are you going?", "Who is going?", "Ebee asks about place."],
          ["M", "The expression used to ask the price of something is", "Ego ole", "Mgbe ole", "Onye nwe", "Maka gịnị", "As in 'Ego ole ka ọ bụ?'"],
          ["M", "'Gịnị ka ị na-eme?' means", "What are you doing?", "Where do you live?", "Who are you?", "How old are you?", "Gịnị asks 'what'."],
          ["M", "'Mgbe ole ka ị bịara?' asks about", "the time of arrival", "the place of arrival", "the reason for coming", "the number of people", "Mgbe ole means 'when'."],
          ["H", "A statement such as 'Ha nọ n'ụlọ' is turned into a yes/no question by", "saying the subject pronoun on a low tone", "adding -ghị to the verb", "putting ka at the end", "doubling the verb", "Tone marks the question."],
          ["H", "The correct question form of 'Obi bịara' is", "Obi ọ̀ bịara?", "Obi bịara ka?", "Ka Obi bịara?", "Obi abịaghị?", "A low-tone pronoun follows the noun subject."],
          ["H", "'Onye nwe akwụkwọ a?' means", "Whose book is this?", "Which book is this?", "Where is this book?", "What book is this?", "Literally, 'Who owns this book?'"],
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
        subtopics: ["What an adjective is", "The true adjectives of Igbo", "Position of the adjective", "Describing with verbs and nouns"],
        objectives: ["Define an adjective", "List the true adjectives of Igbo and their opposites", "Place adjectives correctly", "Describe using descriptive verbs and comparison"],
        lesson: {
          title: "Nkọwaaha",
          summary: "Describe people and things in Igbo.",
          minutes: 40,
          notes: `## What is an adjective?
An **adjective** (**nkọwaaha** — "what explains the noun") **describes a noun**.

## Position
The adjective comes **after** the noun:
- **ụlọ ukwu** — a big house
- **nwa ọma** — a good child
- **akwa ọhụrụ** — a new cloth

## The true adjectives
Igbo has only a **small number of true adjectives**, which come in pairs of opposites:
| Igbo | English | Opposite | English |
|---|---|---|---|
| **ọma** | good, beautiful | **ọjọọ** | bad, ugly |
| **ukwu** | big | **nta** | small |
| **ọhụrụ** | new | **ochie** | old |
| **ọcha** | white, clean | **oji** | black, dark |

- **mmadụ ọma** — a good person; **agwa ọjọọ** — bad behaviour
- **osisi ukwu** — a big tree; **nwa nta** — a small child
- **afọ ọhụrụ** — a new year; **ụlọ ochie** — an old house

## Other describing words
Most other descriptions use **nouns of quality** after the noun or a **descriptive verb**:
| Igbo | English |
|---|---|
| **ogologo** | tall, long |
| **mkpụmkpụ** | short |
| **obosara** | wide |
| **arọ** | heavy |
| **ọkụ** | hot |
| **oyi** | cold |
| **ụtọ** | sweet |
| **ilu** | bitter |
| **ike** | hard, strong |
| **nro** | soft |
- **nwoke ogologo** — a tall man
- **mmiri oyi** — cold water
- **nri ọkụ** — hot food

## Describing with verbs
| Expression | Meaning | Sentence |
|---|---|---|
| **ito ogologo** | be tall | **Obi toro ogologo.** — Obi is tall. |
| **ịdị mkpụmkpụ** | be short | **Ada dị mkpụmkpụ.** — Ada is short. |
| **ibu ibu** | be big, fat | **Ụlọ ahụ buru ibu.** — The house is big. |
| **ịdị mma** | be good | **Akwa a dị mma.** — This cloth is good. |
| **ịdị ọkụ** | be hot | **Mmiri dị ọkụ.** — The water is hot. |
| **ịtọ ụtọ** | be sweet | **Mmanụ aṅụ na-atọ ụtọ.** — Honey is sweet. |
| **ịma mma** | be beautiful | **Ọ mara mma.** — She is beautiful. |
| **ịdị ọcha** | be clean | **Uwe gị dị ọcha.** — Your dress is clean. |

## Kinds of adjective
- **of quality**: nwa **ọma**
- **of colour**: akwa **ọcha**
- **of number**: akwụkwọ **abụọ**; nwa **nke atọ** (the third child)
- **of quantity**: mmiri **ntakịrị** (a little water); **ọtụtụ** mmadụ (many people)
- **demonstrative**: akwụkwọ **a** (this book); akwụkwọ **ahụ** (that book)
- **possessive**: ụlọ **m** (my house)

## Several describing words
- **nwa nta ọma ahụ** — that good little child
- **ụlọ ukwu abụọ ahụ** — those two big houses

## Comparison: karịa
- **Obi toro ogologo karịa Emeka.** — Obi is taller than Emeka.
- **Akwụkwọ a dị mma karịa nke ahụ.** — This book is better than that one.
- **Ọ kacha mma.** — It is the best.

## "Very": nke ukwuu / ezigbo
- **Ọ dị mma nke ukwuu.** — It is very good.
- **ezigbo mmadụ** — a really good person (**ezigbo** comes **before** the noun)`,
          examples: `**Example 1.** Translate "a new house" and "an old house". *Answer:* **ụlọ ọhụrụ** and **ụlọ ochie**.

**Example 2.** Give the opposite of **ukwu**. *Answer:* **nta** (small).

**Example 3.** Translate "Obi is taller than Emeka." *Answer:* **Obi toro ogologo karịa Emeka**.`,
        },
        questions: [
          ["E", "The Igbo term for 'adjective' is", "nkọwaaha", "ngwaa", "nnọchiaha", "mbuụzọ", "It describes a noun."],
          ["E", "'Ụlọ ukwu' means", "a big house", "a small house", "a new house", "my house", "Ukwu means big."],
          ["E", "The opposite of 'ọma' (good) is", "ọjọọ", "ọcha", "ọhụrụ", "ukwu", "It means bad. Answer: ọjọọ."],
          ["M", "'Akwa ọhụrụ' means", "a new cloth", "an old cloth", "a white cloth", "a dirty cloth", "Ọhụrụ means new."],
          ["M", "The opposite of 'ukwu' (big) is", "nta", "ochie", "oji", "ogologo", "It means small."],
          ["M", "'Mmiri oyi' means", "cold water", "hot water", "dirty water", "much water", "Oyi means cold."],
          ["M", "'Obi toro ogologo' means", "Obi is tall", "Obi is short", "Obi is good", "Obi is fat", "Ito ogologo means 'to be tall'."],
          ["H", "The number of pairs of true adjectives usually listed for Igbo is", "four", "ten", "twelve", "twenty", "Good/bad, big/small, new/old and white/black."],
          ["H", "'Obi toro ogologo karịa Emeka' means", "Obi is taller than Emeka", "Obi and Emeka are tall", "Obi is shorter than Emeka", "Obi went with Emeka", "Karịa expresses comparison."],
          ["H", "The describing word that comes BEFORE its noun is", "ezigbo", "ọma", "ukwu", "ọcha", "As in 'ezigbo mmadụ'; the others follow the noun."],
        ],
      },
      {
        week: 2,
        title: "Proverbs",
        subtopics: ["What proverbs are", "Uses of proverbs", "Some proverbs and their meanings", "How proverbs are introduced"],
        objectives: ["Define a proverb", "State the uses of proverbs in Igbo society", "Explain the meaning of common proverbs", "Introduce a proverb in the proper way"],
        lesson: {
          title: "Ilu",
          summary: "Understand and use Igbo proverbs.",
          minutes: 40,
          notes: `## What is a proverb?
A **proverb** (**ilu**) is a **short, wise saying** handed down by the elders, which teaches a truth about life. The Igbo say:
> **Ilu bụ mmanụ e ji eri okwu.**
> *Proverbs are the palm oil with which words are eaten.*
Just as oil makes yam pleasant to eat, proverbs make speech rich and easy to accept. To say a proverb is **ịtụ ilu**.

## Features
- **short** and memorable
- contains **deep wisdom**
- uses **images** from the farm, animals, the family and nature
- has a **surface meaning** and a **deeper meaning**
- belongs to the **community**; no one knows who first said it

## Uses
- to **advise** and **warn**
- to **teach** good behaviour
- to **settle disputes**
- to **encourage** or **console**
- to **rebuke** gently
- to **make speech persuasive** — a good speaker is known by his proverbs
- to **preserve** the wisdom of the elders

## Some proverbs
| Ilu | Meaning |
|---|---|
| **Onye ajụjụ anaghị efu ụzọ.** — *One who asks does not lose the way.* | Ask when you do not know. |
| **Aka nri kwọọ aka ekpe, aka ekpe akwọọ aka nri.** — *The right hand washes the left, and the left washes the right.* | Help one another. |
| **Nwata kwọchaa aka, o soro okenye rie nri.** — *A child who washes his hands eats with elders.* | Good conduct brings honour. |
| **Otu osisi anaghị eme ọhịa.** — *One tree does not make a forest.* | No one succeeds alone. |
| **Igwe bụ ike.** — *The multitude is strength.* | Unity is strength. |
| **Egbe bere, ugo bere.** — *Let the kite perch and let the eagle perch.* | Live and let live. |
| **Onye kwe, chi ya ekwe.** — *When a person says yes, his chi says yes.* | Determination brings success. |
| **Ụkwa ruo oge ya, ọ daa.** — *When the breadfruit's time comes, it falls.* | Everything has its time. |
| **A naghị amụ aka ekpe na nka.** — *One does not learn to be left-handed in old age.* | Learn good habits early. |
| **Agwọ otu onye hụrụ na-aghọ eke.** — *A snake seen by one person becomes a python.* | A story with no witness grows in the telling. |
| **Onye wetara ọjị wetara ndụ.** — *He who brings kola brings life.* | Hospitality is a blessing. |
| **Nwa bụ nwa ọha.** — *A child belongs to all.* | Everyone shares in training a child. |

## Introducing a proverb
A speaker often begins:
- **"Ndị Igbo sị na…"** — *The Igbo say that…*
- **"Ndị okenye na-atụ ilu sị…"** — *The elders say in a proverb…*
- **"Dị ka ndị be anyị si ekwu…"** — *As our people say…*
A young person before elders shows respect by adding **"Ndị nwe m, biko…"** before using one.

## Proverbs and other forms
- a **proverb (ilu)** teaches wisdom
- a **riddle (agwụgwa)** asks for an answer
- an **idiom (akpaalaokwu)** is a phrase with a meaning different from its words

## How to explain a proverb
1. give the **literal** meaning
2. give the **deeper** meaning
3. say **when** it may be used

## A proverb in use
A boy who refuses advice and gets into trouble may be told: **"Onye ajụjụ anaghị efu ụzọ"** — had you asked, you would not have gone astray.`,
          examples: `**Example 1.** What is **ilu**? *Answer:* A **short wise saying** that teaches a truth about life.

**Example 2.** Explain "Igwe bụ ike". *Answer:* **Unity is strength** — many people together achieve what one cannot.

**Example 3.** Complete and explain: "Ilu bụ mmanụ…" *Answer:* **"…e ji eri okwu"** — proverbs are the oil with which words are eaten; they make speech rich.`,
        },
        questions: [
          ["E", "The Igbo word for 'proverb' is", "ilu", "agwụgwa", "akụkọ ifo", "abụ", "To say one is 'ịtụ ilu'."],
          ["E", "Proverbs are handed down by", "the elders", "foreign traders", "newspapers", "school inspectors", "They carry the wisdom of past generations."],
          ["E", "'Igwe bụ ike' teaches that", "unity is strength", "iron is strong", "the sky is high", "kings are powerful", "Igwe here means the multitude."],
          ["M", "The Igbo say that proverbs are the 'palm oil' with which", "words are eaten", "yams are planted", "kola is broken", "wine is tapped", "They make speech pleasant and rich."],
          ["M", "'Onye ajụjụ anaghị efu ụzọ' teaches a person to", "ask when he does not know", "travel alone", "keep silent", "avoid strangers", "One who asks does not lose the way."],
          ["M", "The proverb about the right hand and the left hand washing each other teaches", "mutual help", "cleanliness", "obedience to elders", "the danger of water", "Each helps the other."],
          ["M", "Which of the following is a use of proverbs?", "advising and warning", "measuring land", "counting money", "naming the market days", "They guide behaviour."],
          ["H", "'Onye kwe, chi ya ekwe' means that", "determination brings success", "one should never agree", "the gods decide everything", "elders must be obeyed", "When a person says yes, his chi agrees."],
          ["H", "'A naghị amụ aka ekpe na nka' advises people to", "learn good habits early", "use the left hand", "respect old age", "avoid hard work", "One does not learn left-handedness in old age."],
          ["H", "A speaker commonly introduces a proverb with the words", "Ndị Igbo sị na…", "Chakpii!", "Gwa m, gwa m…", "Ka chi foo", "It means 'The Igbo say that…'."],
        ],
      },
      {
        week: 3,
        title: "Vowel harmony in words and affixes",
        subtopics: ["The two vowel groups revisited", "Harmony in prefixes", "Harmony in suffixes", "Exceptions"],
        objectives: ["Recall the two vowel groups", "Choose the correct prefix vowel by harmony", "Choose the correct suffix by harmony", "Identify words that are exceptions to harmony"],
        lesson: {
          title: "Ndakọrịta ụdaume",
          summary: "Apply vowel harmony when adding prefixes and suffixes.",
          minutes: 40,
          notes: `## The rule
**Vowel harmony** (**ndakọrịta ụdaume**) is the rule that the vowels in a simple Igbo word, and in the affixes added to a verb, come from **the same group**.

| Group A — light (**ụdaume mfe**) | Group E — heavy (**ụdaume arọ**) |
|---|---|
| **a, ị, ọ, ụ** | **e, i, o, u** |

Memory aid: Group A is **a + the dotted vowels**; Group E is **e + the undotted vowels**.

## Harmony inside words
| Group A words | Group E words |
|---|---|
| **ọkụkọ** (fowl) | **osisi** (tree) |
| **ụlọ** (house) | **ego** (money) |
| **ahịa** (market) | **ike** (strength) |
| **ọnụ** (mouth) | **ude** (cream) |
| **akwụkwọ** (book) | **oche** (chair) |

## Harmony in prefixes
The root vowel decides the prefix.
| Affix | Group A root | Group E root |
|---|---|---|
| infinitive **ị- / i-** | **ị**ga, **ị**zụ, **ị**chọ | **i**ri, **i**me, **i**de |
| participle **a- / e-** | na-**a**ga, ga-**a**zụ | na-**e**ri, ga-**e**me |
| pronouns **ọ / o**, **ị / i** | **Ọ** gara; **Ị** zụrụ | **O** riri; **I** mere |
| noun-forming **ọ- / o-** | **ọ**zụzụ (training), **ọ**gụgụ (reading) | **o**kwukwe (belief), **o**riri (feast) |

## Harmony in suffixes
| Suffix | Group A root | Group E root |
|---|---|---|
| past **-rV** (copies the root vowel) | ga**ra**, zụ**rụ**, chọ**rọ** | ri**ri**, me**re**, kwu**ru** |
| negative **-ghị / -ghi** | aga**ghị**, azụ**ghị** | eri**ghi**, eme**ghi** |
| perfect **-la / -le** | aga**ala**, abịa**la** | eri**ele**, eme**ele** |
| imperative vowel | ga**a**, zụ**ọ** | ri**e**, me**e**, kwu**o** |
| "not yet" **-beghị / -beghi** | abịa**beghị** | eri**beghi** |

## Worked examples
1. Root **zụ** (buy) — vowel **ụ** is Group A:
   **ịzụ**, **Ọ zụrụ**, **Ọ na-azụ**, **Ọ ga-azụ**, **Ọ zụghị**, **Zụọ!**
2. Root **me** (do) — vowel **e** is Group E:
   **ime**, **O mere**, **Ọ na-eme**, **Ọ ga-eme**, **O meghi**, **Mee!**

Notice **Ọ na-eme**: the pronoun harmonises with the helping verb **na** (Group A), and the prefix **e-** with the root **me** (Group E).

## Exceptions
Vowel harmony may be broken in
- **compound words**: **nwoke** (nwa + oke), **nwaanyị**, **ụlọakwụkwọ**
- **names**: **Chukwuma**, **Ngọzi**, **Okonkwọ**
- **borrowed words**: **tebụl**, **windo**, **redio**

## Why it matters
- **spelling** — it tells you whether to dot a vowel
- **grammar** — it decides the form of every prefix and suffix
- **pronunciation** — the word flows smoothly

## Quick test
Is "ọkuko" a possible Igbo word? **No** — ọ (Group A) cannot stand with u and o (Group E) in a simple word. The correct spelling is **ọkụkọ**.`,
          examples: `**Example 1.** To which group does the root **zụ** belong, and what is its infinitive? *Answer:* **Group A**; the infinitive is **ịzụ**.

**Example 2.** Choose the correct form: *Ọ na-(a/e)ri nri*. *Answer:* **Ọ na-eri nri** — the root **ri** has a Group E vowel, so the prefix is **e-**.

**Example 3.** Why does **nwoke** break vowel harmony? *Answer:* It is a **compound word** (nwa + oke).`,
        },
        questions: [
          ["E", "Vowel harmony in Igbo is called", "ndakọrịta ụdaume", "ụdaolu", "nkejiokwu", "myiriụdaume", "It governs which vowels may occur together."],
          ["E", "The Group E (heavy) vowels are", "e, i, o, u", "a, ị, ọ, ụ", "a, e, i, o", "ị, ọ, ụ, u", "They are e and the undotted vowels."],
          ["E", "Which of these words has all its vowels from Group A?", "ụlọ", "ego", "oche", "ike", "Its vowels are ụ and ọ."],
          ["M", "The correct infinitive of the root 'chọ' (want) is", "ịchọ", "ichọ", "achọ", "echọ", "The root vowel ọ is in Group A, so the prefix is ị-."],
          ["M", "The correct form in 'Ọ na-___ri nri' is", "e", "a", "ị", "ọ", "The root ri is Group E, so the participle prefix is e-."],
          ["M", "The past form of the root 'kwu' (speak) is", "kwuru", "kwura", "kwurụ", "kwure", "The suffix copies the root vowel u."],
          ["M", "The correct negative of 'O mere' (He did) is", "O meghi", "O meghị", "Ọ meghi", "Ọ maghị", "A Group E root takes -ghi and the pronoun o."],
          ["H", "The word 'nwoke' does not obey vowel harmony because it is", "a compound of nwa and oke", "a verb in the past tense", "a borrowed English word", "a tone-marked word", "Compounds may mix the two groups."],
          ["H", "The correct perfect form of the root 'ri' with the pronoun is", "O riela", "Ọ riala", "O riala", "Ọ riela", "A Group E root takes the pronoun o and the suffix -le."],
          ["H", "The imperative of the root 'zụ' (buy) is", "Zụọ!", "Zụe!", "Zụo!", "Zue!", "The added vowel ọ belongs to Group A like ụ."],
        ],
      },
      {
        week: 4,
        title: "Igbo names and the naming ceremony",
        subtopics: ["Why names matter", "Kinds of Igbo names", "Meanings of common names", "The naming ceremony"],
        objectives: ["Explain why names are important to the Igbo", "Classify Igbo names", "Give the meanings of common Igbo names", "Describe the naming ceremony"],
        lesson: {
          title: "Aha ndị Igbo na ịgụ nwa aha",
          summary: "Explain Igbo names and describe the naming ceremony.",
          minutes: 40,
          notes: `## Names have meaning
An Igbo name is a **short sentence or statement**. It tells of the **parents' experience, faith or hopes**, or of the **time of birth**.

## Kinds of names
### 1. Names of the market day of birth
| Day | Male | Female |
|---|---|---|
| Eke | **Okeke, Nweke** | **Mgbeke** |
| Orie | **Okorie, Okoye, Nwoye** | **Mgborie** |
| Afọ | **Okafọ, Nwafọ** | **Mgbafọ** |
| Nkwọ | **Okonkwọ, Nwankwọ** | **Mgbankwọ** |
(**Oko- / Oke-** = male; **Nwa-** = child of; **Mgbo- / Mgbe-** = female.)

### 2. Names that honour God (Chukwu / Chi)
| Name | Meaning |
|---|---|
| **Chukwuma** | God knows |
| **Chukwuemeka (Emeka)** | God has done great things |
| **Chinedu** | God leads |
| **Chidi** | God exists |
| **Chioma** | good chi; good fortune |
| **Chinyere** | God gave |
| **Ngọzi** | blessing |
| **Ifeanyi** | nothing is impossible (with God) |
| **Nkechi** | that which is God's |
| **Chukwudi** | God lives |
| **Oluchi** | the work of God |

### 3. Names about the family
| Name | Meaning |
|---|---|
| **Obinna** | the father's heart |
| **Nneka** | mother is supreme |
| **Nnamdi** | my father lives (given when a child is thought to be the grandfather returned) |
| **Nnenna** | the father's mother (returned) |
| **Uchenna** | the father's will |
| **Adaeze** | daughter of the king |
| **Adaọbị** | daughter of the homestead |
| **Ada** | first daughter |
| **Ọkpara** | first son |
| **Nwakaego** | a child is worth more than money |
| **Ụzọamaka** | the road is good |

### 4. Names about circumstances
| Name | Meaning |
|---|---|
| **Ọnwụbiko** | death, please (spare this one) |
| **Ọnwụghara** | may death overlook |
| **Azụka** | support is paramount |
| **Ndụbụisi** | life is first |
| **Ikechukwu** | the power of God |
| **Ọbịageli** | one who has come to enjoy |
| **Ejike** | (it is not) by strength |

### 5. Praise and title names
Taken with titles such as **Ọzọ**: **Ogbuefi**, **Akụnne**, **Ọdụm**…

## The naming ceremony (ịgụ nwa aha / ịba nwa aha)
- **when**: in many communities on the **eighth day** (two market weeks — **izu abụọ**) or the **twelfth day**; in some after **seven market weeks** (28 days), when the mother ends her rest
- **who**: parents, grandparents, the **ụmụnna** (kindred), in-laws and neighbours
- **what is used**: **ọjị** (kola nut), **mmanya nkwụ** (palm wine), **nzu** (white chalk), **ose ọjị** (alligator pepper), food
- **how**:
  1. the **eldest man** breaks kola and prays to God and the ancestors
  2. the child is brought out; the **father or grandfather announces the name(s)**
  3. each elder may add a name; palm wine is touched to the child's lips with prayers
  4. guests give **gifts of money**; there is feasting and dancing

## Ọmụgwọ
After a birth, the **wife's mother** comes to stay and **care for mother and baby** for some weeks — the custom of **ọmụgwọ**. She is sent home with gifts.

## Importance
The ceremony **welcomes the child into the family and the kindred**, gives it an identity, and **brings relatives together**.`,
          examples: `**Example 1.** What does **Chukwuma** mean? *Answer:* **"God knows"**.

**Example 2.** On which market day was a boy named **Okonkwọ** born? *Answer:* **Nkwọ**.

**Example 3.** What is **ọmụgwọ**? *Answer:* The **care of a new mother and baby by the wife's mother** after childbirth.`,
        },
        questions: [
          ["E", "'Ngọzi' means", "blessing", "joy", "love", "peace", "It is a common name for girls."],
          ["E", "The name 'Chukwuma' means", "God knows", "God gave", "God leads", "God lives", "Ma means 'know'."],
          ["E", "The name 'Ada' is given to", "the first daughter", "the first son", "the last child", "a twin", "The first son is Ọkpara."],
          ["M", "'Nneka' means", "mother is supreme", "father's heart", "daughter of the king", "life is first", "Nne means mother."],
          ["M", "A girl born on Eke market day may be named", "Mgbeke", "Okeke", "Mgbafọ", "Okorie", "Mgbe- marks a female; Okeke is the male name."],
          ["M", "The custom by which a wife's mother comes to care for her after childbirth is", "ọmụgwọ", "igba nkwụ", "ịkụ aka", "iwa ji", "She stays for some weeks."],
          ["M", "'Chinedu' means", "God leads", "God exists", "God's own", "good fortune", "Du means 'lead'."],
          ["H", "The name 'Nnamdi' is given when a child is believed to be", "the grandfather returned", "born on a market day", "one of twins", "born abroad", "It means 'my father lives'."],
          ["H", "Names such as 'Ọnwụbiko' are given by parents who", "have lost children before and plead with death", "are of royal descent", "are traders", "were born on Nkwọ", "It means 'Death, please'."],
          ["H", "In the naming ceremony, the kola nut is broken and prayers are said by", "the eldest man present", "the mother of the child", "the youngest guest", "the midwife", "He prays to God and the ancestors."],
        ],
      },
      {
        week: 5,
        title: "Traditional marriage",
        subtopics: ["Marriage as a family affair", "Inquiry and consent", "Bride price", "Wine-carrying and sending the bride home"],
        objectives: ["Explain why marriage involves the whole family", "Outline the steps of traditional Igbo marriage", "Explain the meaning of bride price", "Describe the wine-carrying ceremony"],
        lesson: {
          title: "Alụmdi na nwunye",
          summary: "Describe the steps of traditional Igbo marriage.",
          minutes: 40,
          notes: `## Marriage is a family affair
In Igbo tradition, marriage (**alụmdi na nwunye** — "marrying husband and wife") joins **two families and two kindreds (ụmụnna)**, not only a man and a woman. Every step is taken openly with the elders.

## The steps
### 1. Ịkụ aka n'ụzọ — "knocking on the door" (also ịjụ ase)
The young man, his **father** and a few relatives visit the girl's family with **kola and palm wine** and state their intention. The girl is called and asked whether she knows the visitors and **consents**.

### 2. Ịjụ ajụjụ — inquiry
Each family **investigates the other**: character, health, industry, and whether there is any stain on the family name.

### 3. Second visit — meeting the kindred
The suitor's people return to meet the girl's **ụmụnna**, with more wine and kola. A **list of items** required by custom is given.

### 4. Ime ego — settling the bride price
The two families negotiate and pay the **bride price** (**ego isi nwaanyị**), traditionally counted with **short sticks or broomsticks**. It is **not the sale of a daughter**: it is a **token** that seals the bond, honours the bride's family and makes the marriage lawful.

### 5. Igba nkwụ nwaanyị — the wine-carrying ceremony
The public celebration.
- the groom's people bring **palm wine, kola, yams, drinks, cloth and gifts** for the bride's father, mother, ụmụnna, ụmụada and youths
- the bride, finely dressed, is given a **cup of palm wine by her father** and told to give it to her husband
- she **searches for him among the guests**, while men call out to distract her
- she **kneels and gives him the wine**; he drinks, puts money in the cup, and they go together to her parents, who **bless them**
- dancing and feasting follow

### 6. Idu ụlọ — sending the bride home
The bride is escorted to her husband's home with **gifts from her parents** — pots, a box of clothes, kitchen things, sometimes a sewing machine or furniture — to help her begin her household.

## People involved
- **nne na nna** of both sides
- the **ụmụnna** — kindred
- the **ụmụada** — daughters of the lineage, who must be honoured
- **onye aka ebe** — the go-between and witness
- **ndị ọgọ** — the in-laws

## Qualities sought
- in a wife: good character (**ezi agwa**), respect, hard work, good home training
- in a husband: industry, responsibility, a good family name

## Values upheld
- **consent** of the girl and of both families
- **respect** between in-laws (**ọgọ**)
- the duty of the families to **settle quarrels**
- **patience** and co-operation in the home

## Types of marriage today
- **traditional** marriage (igba nkwụ)
- **church** marriage ("white wedding")
- **court / registry** marriage
Most couples perform the traditional rites **before** the church or court wedding.

## Words to know
| Igbo | English |
|---|---|
| **di** | husband |
| **nwunye** | wife |
| **nwaanyị ọhụrụ** | bride |
| **ọgọ** | in-law |
| **ịlụ nwaanyị / ịlụ di** | to marry a wife / a husband |`,
          examples: `**Example 1.** What is **ịkụ aka n'ụzọ**? *Answer:* **"Knocking on the door"** — the first visit, at which the suitor's family states its intention.

**Example 2.** What happens at **igba nkwụ**? *Answer:* The bride **carries a cup of palm wine to her husband** before the guests, and her parents bless them.

**Example 3.** Is bride price the sale of a daughter? *Answer:* **No** — it is a **token that seals the bond** between the families.`,
        },
        questions: [
          ["E", "The Igbo term for 'marriage' is", "alụmdi na nwunye", "ịgụ aha", "iri ji", "ọmụgwọ", "It means marrying husband and wife."],
          ["E", "The Igbo word for 'husband' is", "di", "nwunye", "ọgọ", "ada", "Nwunye is wife."],
          ["E", "In Igbo tradition, marriage is regarded as a union of", "two families", "two individuals only", "two towns", "two kings", "The kindreds on both sides take part."],
          ["M", "The first visit at which the suitor's family declares its intention is", "ịkụ aka n'ụzọ", "igba nkwụ", "idu ụlọ", "ime ego", "It means 'knocking on the door'."],
          ["M", "The wine-carrying ceremony is called", "igba nkwụ nwaanyị", "ịjụ ajụjụ", "idu ụlọ", "ọmụgwọ", "The bride gives palm wine to her husband."],
          ["M", "The Igbo word for 'in-law' is", "ọgọ", "ụmụnna", "enyi", "nwanne", "In-laws treat one another with respect."],
          ["M", "At the wine-carrying ceremony, the bride shows the guests her husband by", "kneeling and giving him a cup of palm wine", "calling his name aloud", "writing his name", "dancing alone", "He drinks and they go to her parents for blessing."],
          ["H", "The stage at which the bride is escorted to her husband's home with gifts from her parents is", "idu ụlọ", "ime ego", "ịjụ ase", "ịgụ aha", "The gifts help her begin her household."],
          ["H", "In Igbo custom, the bride price is best understood as", "a token that seals the bond between two families", "the selling price of the bride", "a fine paid to the king", "a gift to the church", "It makes the marriage lawful and honours her family."],
          ["H", "The married daughters of a lineage, who must be honoured at a marriage, are the", "ụmụada", "ụmụnna", "ndị ọgọ", "ndị nze", "They are a respected group in the family."],
        ],
      },
      {
        week: 6,
        title: "Dress and adornment",
        subtopics: ["Men's dress", "Women's dress", "Fabrics", "Adornment and titled dress"],
        objectives: ["Name items of traditional men's dress", "Name items of traditional women's dress", "Identify Igbo fabrics", "Describe forms of adornment and the dress of titled men"],
        lesson: {
          title: "Ejiji ndị Igbo",
          summary: "Describe traditional Igbo dress, fabrics and adornment.",
          minutes: 40,
          notes: `## Dress matters
**Ejiji** means dress or attire; **uwe** is a garment; **akwa** is cloth. Dress shows a person's **age, status and the occasion**.

## Men's dress
| Igbo | Description |
|---|---|
| **isiagụ** | a pullover top patterned with **lions' or leopards' heads** ("leopard's head") |
| **akwa / ọgọdọ** | a **wrapper** tied at the waist |
| **okpu agụ** | a striped woollen cap |
| **okpu mmee** | the **red cap** of chiefs and titled men |
| **mkpara / mkpọ** | a walking stick |
| **akụpe** | a hand fan of hide |
| **aka / ihe olu** | beads for wrist and neck |

A full outfit is **isiagụ** over a wrapper or trousers, with a cap, beads and walking stick.

## Women's dress
| Igbo | Description |
|---|---|
| **uwe elu / bulawụs** | blouse |
| **akwa (ọgọdọ) abụọ** | **two wrappers**, one over the other — the mark of a married woman |
| **ichafu** | head-tie |
| **jigida** | **waist beads** |
| **ihe olu / ọla** | necklace; ornaments |
| **ọla ntị** | earrings |

Young girls formerly wore **jigida** and short cloths; married women wear the double wrapper.

## Fabrics
- **Akwete** — a colourful cloth **hand-woven by women** on a broad loom at **Akwete** in Abia State
- **akwa Jọọjị (George)** — a rich wrapper cloth, much used at weddings
- **akwa Họlandị (Hollandis)** — printed wax cloth
- **isiagụ** material — velvet-like cloth with animal heads
- **okịrịka** — second-hand clothing (a modern term)

## Adornment
- **uli** — **dark patterns drawn on the body** (and on walls) by women, with juice from the uli plant
- **nzu** — white chalk, for marking the body and for welcome
- **ufie / uhie** — **camwood**, a red powder rubbed on the skin
- **edo** — yellow dye
- **ịkpa isi** — plaiting the hair; styles with thread and coral
- **ichi** — **facial marks** once cut on the forehead of titled men in the Nri–Awka area
- **nja** — brass leg rings formerly worn by wealthy women
- **odu / ọdụ enyi** — **ivory** anklets and bangles for women of high rank

## Dress of titled men
A man who has taken the **Ọzọ** title wears
- the **red cap (okpu mmee)**, sometimes with an **eagle feather (ugo)**
- an **ankle cord (eriri ụkwụ)**
- and carries an **elephant tusk (ọdụ enyi / okike)** or a staff
Only those entitled may wear these.

## Dress for occasions
- **weddings** — George wrappers, coral beads, isiagụ
- **festivals** — the best cloth; masquerade costumes
- **funerals** — dark or plain cloth; widows formerly wore mourning dress for a set period
- **uniform cloth** — families and groups wear the **same cloth** at ceremonies to show unity

## Values
neatness; modesty; dressing to suit the occasion; pride in one's culture.`,
          examples: `**Example 1.** What is **isiagụ**? *Answer:* A man's **top patterned with lions' or leopards' heads**.

**Example 2.** What cloth is hand-woven by women in Abia State? *Answer:* **Akwete** cloth.

**Example 3.** Name three signs of an Ọzọ titled man's dress. *Answer:* The **red cap, the eagle feather and the ankle cord**.`,
        },
        questions: [
          ["E", "The Igbo word for 'cloth' is", "akwa", "okpu", "uwe elu", "jigida", "With other tones the same letters mean egg, bed or cry."],
          ["E", "'Ichafu' is", "a woman's head-tie", "a man's cap", "a type of shoe", "a walking stick", "It completes a woman's outfit."],
          ["E", "The Igbo word for 'cap' is", "okpu", "akwa", "uwe", "mkpara", "Okpu mmee is the red cap."],
          ["M", "The man's top patterned with the heads of lions or leopards is the", "isiagụ", "akwete", "jigida", "ichafu", "The name means 'leopard's head'."],
          ["M", "Waist beads worn by Igbo girls and women are called", "jigida", "ichi", "uli", "nzu", "They are strung round the waist."],
          ["M", "The hand-woven cloth made by women in Abia State is", "Akwete", "George", "Hollandis", "okịrịka", "It takes its name from the town where it is woven."],
          ["M", "A married Igbo woman's traditional outfit includes", "two wrappers", "an isiagụ top", "a red cap", "an ankle cord", "One wrapper is tied over the other."],
          ["H", "Dark patterns drawn on the body by women artists are called", "uli", "ufie", "edo", "ichi", "The juice of the uli plant is used."],
          ["H", "The red cap with an eagle feather is the mark of", "a titled man", "a new bride", "a hunter's apprentice", "a market woman", "It is worn by holders of titles such as Ọzọ."],
          ["H", "Facial marks formerly cut on the foreheads of titled men in the Nri–Awka area are called", "ichi", "uli", "nja", "odu", "They showed rank and courage."],
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
        subtopics: ["Farming", "Trade and apprenticeship", "Crafts", "The dignity of work"],
        objectives: ["Name traditional Igbo occupations", "Describe farming and its tools", "Explain the Igbo apprenticeship system in trade", "Name the crafts for which Igbo towns are known"],
        lesson: {
          title: "Ọrụ aka ndị Igbo",
          summary: "Describe the traditional occupations of the Igbo.",
          minutes: 40,
          notes: `## Work is honoured
The Igbo admire **achievement by hard work**. A proverb says **"Aka aja aja na-ebute ọnụ mmanụ mmanụ"** — *the soiled hand brings the oily mouth*: hard work brings good living. **Ọrụ** means work; **ọrụ aka** is handiwork.

## Occupations
| Occupation | Worker | Notes |
|---|---|---|
| **ọrụ ugbo** | **onye ọrụ ugbo** (farmer) | the chief occupation |
| **ịzụ ahịa** | **onye ahịa** (trader) | the Igbo are famous traders |
| **ịkpụ ụzụ** | **ọkpụ ụzụ** (blacksmith) | **Awka (Ọka)** is renowned |
| **ịkpụ ite** | **ọkpụ ite** (potter) | done mostly by women |
| **ịtụ nka / ịkpụ ọkpụkpụ** | **ọka nka** (carver) | doors, stools, masks, ikenga |
| **ịkpa akwa** | **ọkpa akwa** (weaver) | **Akwete** cloth |
| **ite nkwụ / ịtụ mmanya** | **ote nkwụ** (palm-wine tapper) | climbs with a rope (**agbụ / ete**) |
| **ịgba nta** | **dinta / ọgba nta** (hunter) | traps, gun, dogs |
| **igbu azụ** | **ọkụ azụ** (fisherman) | riverine towns — Ọnịcha, Ọgụta |
| **ịgwọ ọrịa** | **dibịa** (herbalist, healer) | herbs and roots |
| **ịkụ egwu** | **ọkụ egwu** (musician, drummer) | ọja, ekwe, ogene |

## Farming
- tools: **ọgụ** (hoe), **mma** (machete), **mbazụ** (digging stick)
- **yam (ji)** is the "man's crop" and the sign of wealth: a great farmer could take the title **Eze ji** ("king of yam") or **Di ji**
- women grow **cocoyam (ede)**, **cassava (akpụ)**, vegetables and maize
- yams are stored in the **ọba** (yam barn)
- the **oil palm (nkwụ)** gives palm oil, kernels, wine, brooms and roofing

## Trade and apprenticeship
Markets are held on the four market days. The Igbo are known across Nigeria for trade, and for the apprenticeship system often called **ịgba bọị** (or **imu ahịa** — "learning trade"):
1. a boy is placed with a **master (ọga)**
2. he **serves and learns** the trade for an agreed number of years, living with the master
3. at the end the master **"settles" him** (**idu ya**) — gives him money or goods to start his own business
4. he in turn takes on apprentices
This system has helped many families out of poverty.

## Crafts and their towns
| Craft | Town |
|---|---|
| blacksmithing | **Awka (Ọka)**, Nkwerre, Abiriba |
| weaving | **Akwete** |
| pottery | Ishiagu, Inyi |
| wood carving | Awka |
| bronze and metal work (ancient) | **Igbo-Ukwu** |

Awka smiths travelled widely, making hoes, knives, guns and ornaments.

## Learning a trade
- a child first learnt the **parents' work**
- an **apprentice (nwa mmụta ọrụ)** served a master
- some skills, such as healing and smithing, stayed in particular **families**

## Modern occupations
teaching (**onye nkuzi**), medicine (**dọkịta**), driving (**ọkwọ ụgbọala**), tailoring (**ọkwa akwa**), carpentry (**kapịnta**), mechanics, the civil service, banking.

## Values
hard work (**ịdị uchu**); honesty; skill; self-reliance. **Umengwụ** (laziness) is despised — the lazy person goes hungry.`,
          examples: `**Example 1.** What is **ọrụ ugbo**, and what is the chief crop? *Answer:* **Farming**; the chief crop is **yam (ji)**.

**Example 2.** Which town is famous for blacksmithing? *Answer:* **Awka (Ọka)**.

**Example 3.** What happens at the end of an apprenticeship? *Answer:* The master **"settles" the apprentice** with money or goods to start his own business.`,
        },
        questions: [
          ["E", "The Igbo term for 'farming' is", "ọrụ ugbo", "ịzụ ahịa", "ịkpụ ụzụ", "ịgba nta", "Ugbo means farm."],
          ["E", "'Dinta' means", "hunter", "weaver", "potter", "trader", "He hunts game in the bush."],
          ["E", "The Igbo word for 'work' is", "ọrụ", "ego", "ahịa", "ugbo", "Ọrụ aka is handiwork."],
          ["M", "The Igbo town most famous for blacksmithing is", "Awka", "Akwete", "Oguta", "Nsukka", "Its smiths travelled widely."],
          ["M", "The crop regarded as the 'man's crop' and a sign of wealth among the Igbo is", "yam", "cocoyam", "cassava", "maize", "A great yam farmer could take the title Eze ji."],
          ["M", "'Ote nkwụ' is a person who", "taps palm wine", "weaves cloth", "carves wood", "sells yams", "He climbs the palm with a rope."],
          ["M", "The Igbo word for 'hoe' is", "ọgụ", "mma", "ọba", "ite", "Mma is the machete."],
          ["H", "The Igbo trade apprenticeship system is popularly known as", "ịgba bọị", "ịgba nkwụ", "ịgba mgba", "ịgba afa", "The apprentice serves a master and is later settled."],
          ["H", "The yam barn in which harvested yams are stored is the", "ọba", "ọgụ", "ugbo", "ọnụ ụzọ", "Yams are tied to stakes in it."],
          ["H", "The proverb about 'the soiled hand' and 'the oily mouth' teaches that", "hard work brings good living", "dirty hands cause disease", "palm oil is expensive", "farmers are poor", "Labour is rewarded with plenty."],
        ],
      },
      {
        week: 2,
        title: "At the market",
        subtopics: ["Market words", "Asking the price", "Bargaining", "A market dialogue"],
        objectives: ["Use words for buying and selling", "Ask and state prices", "Bargain politely in Igbo", "Take part in a simple market dialogue"],
        lesson: {
          title: "N'ahịa: ịzụ na ire",
          summary: "Buy, sell and bargain in Igbo.",
          minutes: 40,
          notes: `## Market words
| Igbo | English |
|---|---|
| **ahịa** | market; trade; goods |
| **ịzụ** | to buy |
| **ire** | to sell |
| **ego** | money |
| **naịra / kobo** | naira / kobo |
| **onye na-ere ahịa** | seller |
| **onye na-azụ ahịa** | buyer, customer |
| **ọnụ ahịa** | price |
| **chenji / mgbanwe** | change |
| **uru** | profit |
| **ụgwọ** | debt |
| **ọ dị oke ọnụ** | it is expensive |
| **ọ dị ọnụ ala** | it is cheap |
| **belata** | reduce |
| **tinye** | add |
| **tụọ** | measure out |

## Things sold
**ji** (yam), **ose** (pepper), **tomato**, **yabasị** (onion), **azụ** (fish), **anụ** (meat), **mmanụ** (oil), **garị**, **agwa** (beans), **osikapa** (rice), **mkpụrụ osisi** (fruit), **akwa** (cloth), **akpụkpọ ụkwụ** (shoes).

## Asking the price
- **Ego ole ka ọ bụ?** — How much is it?
- **Ego ole ka ị na-ere ji a?** — How much are you selling this yam?
- **Ọ bụ narị naịra abụọ.** — It is two hundred naira.
- **Ọ bụ otu puku naịra.** — It is one thousand naira.

## Money
| Amount | Igbo |
|---|---|
| ₦50 | **naịra iri ise** |
| ₦100 | **narị naịra** |
| ₦200 | **narị naịra abụọ** |
| ₦500 | **narị naịra ise** |
| ₦1,000 | **puku naịra** |
| ₦5,000 | **puku naịra ise** |

## Bargaining
Bargaining (**ịzụ ọnụ ahịa**) is expected.
- **Ọ dị oke ọnụ.** — It is too expensive.
- **Biko, belata ya.** — Please reduce it.
- **Were narị na iri ise.** — Take a hundred and fifty.
- **Ọ gaghị ekwe.** — It will not go at that price.
- **Tinyekwuo ntakịrị.** — Add a little more.
- **Nke ikpeazụ ọ̀ bụ ole?** — What is the last price?
- **Ọ dị mma, weta ya.** — All right, bring it.
- **Nye m chenji m.** — Give me my change.
- **Daalụ. Ahịa gị ga-aga.** — Thank you. May your goods sell.

## A dialogue
> **Onye na-azụ:** Ndewo, nne. Ahịa na-aga?
> **Onye na-ere:** Ọ na-aga. Nnọọ. Gịnị ka ị chọrọ ịzụ?
> **Onye na-azụ:** Achọrọ m ịzụ ose. Ego ole ka ọ bụ?
> **Onye na-ere:** Ọ bụ narị naịra atọ.
> **Onye na-azụ:** Chei! Ọ dị oke ọnụ. Were narị abụọ.
> **Onye na-ere:** Ọ gaghị ekwe. Tinye iri ise.
> **Onye na-azụ:** Ọ dị mma. Were ego.
> **Onye na-ere:** Daalụ. Bịakwa ọzọ.

## Market manners
greet the seller first; bargain politely; do not handle goods roughly; pay what is agreed; count your change.

## The market in Igbo life
Each town's main market is held on its own **market day** (Eke, Orie, Afọ or Nkwọ) and often bears that name — **Eke Ọka**, **Nkwọ Nnewi**, **Afọ Ụmụahịa**. The market is a place for **trade, news, meetings and announcements**. Great modern markets include those at **Ọnịcha** and **Aba**.`,
          examples: `**Example 1.** Ask "How much is it?" in Igbo. *Answer:* **Ego ole ka ọ bụ?**

**Example 2.** Say "It is too expensive; please reduce it." *Answer:* **Ọ dị oke ọnụ; biko, belata ya**.

**Example 3.** What is **narị naịra abụọ**? *Answer:* **Two hundred naira**.`,
        },
        questions: [
          ["E", "The Igbo word for 'market' is", "ahịa", "ugbo", "iyi", "ụlọ", "Goods are bought and sold there."],
          ["E", "The Igbo word for 'money' is", "ego", "uru", "ụgwọ", "ọnụ", "Ego ole? asks 'how much?'"],
          ["E", "The Igbo infinitive meaning 'to sell' is", "ire", "ịzụ", "ịgụ", "isi", "Ịzụ is 'to buy'."],
          ["M", "'Ọ dị oke ọnụ' means", "It is too expensive", "It is very cheap", "It is finished", "It is very good", "Literally, 'it has a great price'."],
          ["M", "'Biko, belata ya' is a request to", "reduce the price", "add more goods", "give change", "close the shop", "Belata means reduce."],
          ["M", "'Narị naịra ise' is", "five hundred naira", "one hundred and five naira", "fifty naira", "five thousand naira", "Narị is a hundred; ise is five."],
          ["M", "The Igbo term for 'price' is", "ọnụ ahịa", "onye ahịa", "ụgwọ", "uru", "Literally, 'the mouth of the market'."],
          ["H", "'Puku naịra ise' is", "five thousand naira", "five hundred naira", "one thousand and five naira", "fifty thousand naira", "Puku is a thousand."],
          ["H", "A market named 'Nkwọ Nnewi' is so called because it", "is held on Nkwọ day at Nnewi", "sells only yams", "belongs to a man named Nkwọ", "is open every day", "Markets bear the name of their market day."],
          ["H", "'Nye m chenji m' means", "Give me my change", "Give me your goods", "Show me the price", "Reduce it for me", "Chenji is borrowed from English 'change'."],
        ],
      },
      {
        week: 3,
        title: "Prepositions and words of place",
        subtopics: ["The preposition na", "Words of position", "Other relation words", "Describing where things are"],
        objectives: ["Use na and n' correctly", "Use position words such as n'elu, n'okpuru and n'ime", "Use site na, maka and ruo", "Describe the position of objects"],
        lesson: {
          title: "Mbuụzọ na ebe ihe dị",
          summary: "Say where things are and where people are going.",
          minutes: 40,
          notes: `## What is a preposition?
A **preposition** (**mbuụzọ** — "what goes before") shows the **relationship of a noun to the rest of the sentence** — usually place, direction or time.

## The basic preposition: na
Igbo has **one main preposition**, **na**, meaning **at, in, on, to, from** according to the sentence.
- **Ọ nọ na klasị.** — He is in the class.
- **Ha bi na Legọs.** — They live in Lagos.
- **na mgbede** — in the evening

Before a **vowel**, **na** drops its vowel and is written **n'**:
- **na ụlọ → n'ụlọ** (at home)
- **na ahịa → n'ahịa** (at the market)
- **na ụtụtụ → n'ụtụtụ** (in the morning)

(Do not confuse this with **na** = "and", or the helping verb **na-**.)

## Words of position
More exact positions are shown by **na + a noun of place** (often a body part):
| Igbo | From | English |
|---|---|---|
| **n'elu** | elu (top) | on, on top of, above |
| **n'okpuru** | okpuru (underside) | under |
| **n'ime** | ime (inside) | in, inside |
| **n'azụ** | azụ (back) | behind; after |
| **n'ihu** | ihu (face) | in front of; before |
| **n'akụkụ** | akụkụ (side) | beside |
| **n'etiti** | etiti (middle) | between, among, in the middle |
| **n'èzí** | èzí (outside) | outside |
| **na nso** | nso (nearness) | near |
| **n'ala** | ala (ground) | on the ground, down |

## Describing position
- **Akwụkwọ dị n'elu tebụl.** — The book is on the table.
- **Nwamba nọ n'okpuru oche.** — The cat is under the chair.
- **Ego dị n'ime akpa.** — The money is in the bag.
- **Ubi dị n'azụ ụlọ.** — The garden is behind the house.
- **Onye nkuzi guzo n'ihu klasị.** — The teacher stands in front of the class.
- **Ada nọ n'akụkụ m.** — Ada is beside me.
- **Ụlọ anyị dị nso n'ahịa.** — Our house is near the market.

## Other relation words
| Igbo | English | Example |
|---|---|---|
| **site na** | from | **O si n'Aba bịa.** — He came from Aba. |
| **ruo** | up to, until | **site n'ụtụtụ ruo abalị** — from morning till night |
| **maka** | for; about; because of | **Zụta ya maka m.** — Buy it for me. |
| **gbasara** | concerning | **Kwuo gbasara ya.** — Speak about it. |
| **dị ka** | like, as | **Ọ dị ka nna ya.** — He is like his father. |
| **ya na** | together with | **Mụ na ya gara.** — I went with him. |
| **tupu** | before (time) | **tupu ehihie** — before noon |
| **kemgbe** | since | **kemgbe ụnyaahụ** — since yesterday |

## Movement
Verbs of motion take the place **without a preposition**:
- **Ọ gara ahịa.** — He went to market.
- **Bata n'ụlọ.** — Come into the house.
- **Pụọ n'èzí.** — Go outside.

## Here and there
| Igbo | English |
|---|---|
| **ebe a** | here |
| **ebe ahụ** | there |
| **ebe niile** | everywhere |

## Directions
- **aka nri** — right; **aka ekpe** — left
- **Tụgharịa n'aka nri.** — Turn right.
- **Gaa n'ihu.** — Go straight ahead.

## Asking
- **Ebee ka akwụkwọ m dị?** — Where is my book?
- **Ọ dị n'elu oche.** — It is on the chair.`,
          examples: `**Example 1.** Translate "The cat is under the table." *Answer:* **Nwamba nọ n'okpuru tebụl**.

**Example 2.** Why is **na ụlọ** written **n'ụlọ**? *Answer:* **na** drops its vowel **before a word beginning with a vowel**.

**Example 3.** What does **n'ime** mean? *Answer:* **In / inside**.`,
        },
        questions: [
          ["E", "'N'elu' means", "on", "under", "inside", "behind", "Elu means top. Answer: on."],
          ["E", "The Igbo for 'under' is", "n'okpuru", "n'elu", "n'ihu", "n'èzí", "As in 'n'okpuru oche'."],
          ["E", "'N'ime' means", "inside", "outside", "beside", "above", "Ime means inside."],
          ["M", "The main preposition in Igbo is", "na", "ka", "ma", "bụ", "It can mean at, in or on."],
          ["M", "The Igbo for 'behind' is", "n'azụ", "n'ihu", "n'akụkụ", "n'etiti", "Azụ means back."],
          ["M", "'O si n'Aba bịa' means", "He came from Aba", "He is going to Aba", "He lives in Aba", "He likes Aba", "Si (site na) means 'from'."],
          ["M", "'N'ihu' means", "in front of", "at the back of", "on top of", "under", "Ihu means face."],
          ["H", "The Igbo term for 'preposition' is", "mbuụzọ", "nkọwaaha", "ngwaa", "njikọ", "It means 'what goes before'."],
          ["H", "'Ada nọ n'akụkụ m' means", "Ada is beside me", "Ada is behind me", "Ada is on me", "Ada is far from me", "Akụkụ means side."],
          ["H", "'N'etiti' means", "between or in the middle of", "outside", "on top of", "near", "Etiti means the middle."],
        ],
      },
      {
        week: 4,
        title: "Reading comprehension",
        subtopics: ["How to read a passage", "Finding the main idea", "Answering questions", "Working out meanings"],
        objectives: ["Read a short Igbo passage with understanding", "State the main idea of a passage", "Answer factual questions from a passage", "Work out the meaning of words from context"],
        lesson: {
          title: "Aghọtaazaa",
          summary: "Read a short Igbo passage and answer questions on it.",
          minutes: 40,
          notes: `## What is comprehension?
**Aghọtaazaa** ("understand and answer") means **reading with understanding**. You read a passage (**ederede**) and answer questions on it.

## How to go about it
1. **Read the passage through** once for the general idea.
2. **Read the questions.**
3. **Read the passage again** carefully, looking for the answers.
4. **Answer in full sentences**, in your own words where possible.
5. Answer **only what is asked**.
6. Check your **spelling**, especially the **dotted vowels**.

## Types of question
- **factual** — Onye? Gịnị? Ebee? Mgbe ole? Ole?
- **reason** — Maka gịnị? (look for *n'ihi na* — because)
- **meaning** — what a word means in the passage
- **main idea / title**
- **lesson**

## A passage (ederede)
> **Emeka na ubi ya**
>
> Emeka dị afọ iri na abụọ. Ya na nne ochie ya bi n'otu obodo nta. Kwa ụtụtụ, tupu ọ gaa ụlọ akwụkwọ, Emeka na-agba ubi ya mmiri. Ubi ahụ dị n'azụ ụlọ ha. Ọ kụrụ tomato, ose na ụgụ n'ime ya.
>
> Otu ụbọchị, ewu onye agbata obi ha banyere n'ubi ahụ, taa ụgụ niile. Obi adịghị Emeka mma, mana o weghị iwe. Ọ gbara ubi ahụ ogige, kụọkwa ụgụ ọzọ.
>
> Na ngwụcha ọnwa, Emeka buuru tomato na ose gaa ahịa. O rere ha, were ego ahụ zụọ akwụkwọ abụọ. Nne ochie ya toro ya, sị na ọ bụ nwa dị uchu.

### Helps with words
| Igbo | English |
|---|---|
| **obodo nta** | small town, village |
| **ịgba mmiri** | to water |
| **ubi** | farm, garden |
| **ịkụ** | to plant |
| **onye agbata obi** | neighbour |
| **obi adịghị … mma** | to be unhappy |
| **iwe iwe** | to be angry |
| **ogige** | fence |
| **ngwụcha** | end |
| **ito** | to praise |
| **ịdị uchu** | to be hard-working |

### In English
Emeka is twelve. He lives in a village with his grandmother. Every morning before school he waters his garden behind their house, where he has planted tomatoes, pepper and pumpkin leaves. One day a neighbour's goat got in and ate all the pumpkin leaves. Emeka was unhappy but did not get angry; he fenced the garden and planted more. At the end of the month he took tomatoes and pepper to market, sold them and bought two books with the money. His grandmother praised him as a hard-working child.

## Questions and model answers
1. **Afọ ole ka Emeka dị?** — *Emeka dị afọ iri na abụọ.*
2. **Onye ka ya na Emeka bi?** — *Nne ochie ya.*
3. **Gịnị tara ụgụ Emeka?** — *Ewu onye agbata obi ha.*
4. **Gịnị ka Emeka ji ego ya zụọ?** — *Akwụkwọ abụọ.*
5. **Gịnị ka akụkọ a na-akụziri anyị?** — hard work and patience are rewarded.

## Tips
- do not copy whole sentences when a short answer will do
- for "why" questions, begin **N'ihi na…** (Because…)
- for a title, choose words that cover the **whole** passage`,
          examples: `**Example 1.** What does **aghọtaazaa** mean? *Answer:* **Reading with understanding** — comprehension.

**Example 2.** From the passage: where is Emeka's garden? *Answer:* **Behind their house** (*n'azụ ụlọ ha*).

**Example 3.** What did Emeka do after the goat ate his vegetables? *Answer:* He **fenced the garden and planted again**.`,
        },
        questions: [
          ["E", "The Igbo term for 'comprehension' is", "aghọtaazaa", "edemede", "ntụgharị", "agụmagụ", "It means 'understand and answer'."],
          ["E", "In the passage, Emeka is", "twelve years old", "ten years old", "fifteen years old", "eight years old", "The passage says 'afọ iri na abụọ'."],
          ["E", "According to the passage, Emeka lives with his", "grandmother", "uncle", "teacher", "elder brother", "'Nne ochie' means grandmother."],
          ["M", "The animal that ate Emeka's vegetables was a", "goat", "dog", "cow", "fowl", "'Ewu onye agbata obi' — the neighbour's goat."],
          ["M", "With the money from his sales, Emeka bought", "two books", "a goat", "new shoes", "a hoe", "'…were ego ahụ zụọ akwụkwọ abụọ.'"],
          ["M", "In the passage, 'onye agbata obi' means", "neighbour", "grandmother", "trader", "teacher", "The goat belonged to this person."],
          ["M", "The first step in answering a comprehension passage is to", "read the passage through", "write the answers at once", "count the words", "copy the passage", "The general idea must first be grasped."],
          ["H", "The expression 'nwa dị uchu' used of Emeka means", "a hard-working child", "a lazy child", "an angry child", "a greedy child", "His grandmother praised him with it."],
          ["H", "The best lesson to draw from the passage is that", "hard work and patience are rewarded", "goats should be killed", "neighbours are wicked", "gardens are useless", "Emeka replanted and later earned money."],
          ["H", "An answer to a 'why' question in Igbo comprehension normally begins with", "N'ihi na…", "Gịnị…", "Ebee…", "Chakpii…", "It means 'Because…'."],
        ],
      },
      {
        week: 5,
        title: "The informal letter",
        subtopics: ["Kinds of letter", "Parts of an informal letter", "Language of an informal letter", "A sample letter"],
        objectives: ["Distinguish informal from formal letters", "Set out the parts of an informal letter", "Use suitable greetings and closing in Igbo", "Write a short informal letter"],
        lesson: {
          title: "Leta nkeonwe",
          summary: "Write a friendly letter in Igbo.",
          minutes: 40,
          notes: `## Kinds of letter
A letter is **leta** (also **akwụkwọ ozi** — "message paper").
- **leta nkeonwe** — the **informal (personal) letter**, written to relatives and friends
- **leta anamachọihe** — the **formal letter**, written to offices and authorities

## Parts of an informal letter
| Part | Igbo | Where |
|---|---|---|
| 1. writer's address | **adreesị onye na-ede leta** | top right |
| 2. date | **ụbọchị** | under the address |
| 3. salutation | **ekele mmalite** | left margin |
| 4. opening greetings | **ekele** | first paragraph |
| 5. body | **isi okwu / ahụ leta** | middle paragraphs |
| 6. closing | **mmechi** | last paragraph |
| 7. subscription and name | **aha onye dere ya** | bottom right |

An informal letter has **only one address** — the writer's — and the writer signs with **the first name only**.

## The salutation
- **Nna m ọma,** — My dear father,
- **Nne m ọma,** — My dear mother,
- **Ezigbo enyi m,** — My good friend,
- **Dede m,** — My elder brother,

## The opening greetings
An Igbo letter begins by asking after the reader's health:
> Ana m ekele gị nke ukwuu. Kedu ka unu mere? Kedu maka ndị ụlọ anyị niile? Enwere m olileanya na unu niile dị mma. Mụ onwe m dịkwa mma.
(*I greet you warmly. How are you all? How is everyone at home? I hope you are all well. I too am well.*)

## The body
State the **purpose** of the letter, one idea to a paragraph, in simple, warm language.

## The closing
> Biko, kelere m ndị ụlọ anyị niile. Ka ọ dị mgbe anyị ga-ahụ.
(*Please greet everyone at home for me. Until we meet.*)

## The subscription
- **Abụ m nwa gị,** — I am your child,
- **Abụ m enyi gị,** — I am your friend,
followed by the **first name**.

## A sample letter
> Ụlọ Akwụkwọ Sekọndịrị Udoka,
> P.M.B. 25,
> Enugu.
> 10 Mee, 2025.
>
> Nna m ọma,
>
> Ana m ekele gị nke ukwuu. Kedu ka unu mere? Kedu maka nne m na ụmụnne m? Enwere m olileanya na unu niile dị mma. Mụ onwe m dịkwa mma.
>
> Ana m ede leta a iji gwa gị na ule anyị ga-amalite n'izu na-abịa. Ana m agụsi akwụkwọ ike. Biko nna, achọrọ m akwụkwọ Mgbakọ na Mwepụ ọhụrụ na ego nri.
>
> Biko, kelere m nne m na ndị ụlọ anyị niile. Ka ọ dị mgbe anyị ga-ahụ.
>
> Abụ m nwa gị,
> Emeka.

*(Summary: Emeka greets his father, says examinations begin next week, asks for a new Mathematics book and feeding money, and sends greetings home.)*

## Useful words
| Igbo | English |
|---|---|
| **ule** | examination |
| **izu na-abịa** | next week |
| **olileanya** | hope |
| **ịmalite** | to begin |
| **ikele** | to greet; to thank |
| **Mgbakọ na Mwepụ** | Mathematics |

## Language
warm and simple; respectful to elders; correct spelling with dotted vowels.

## Marking guide
address and date; salutation; opening greetings; content; arrangement in paragraphs; expression; closing.`,
          examples: `**Example 1.** What is **leta nkeonwe**? *Answer:* An **informal (personal) letter** to relatives or friends.

**Example 2.** How many addresses does an informal letter have? *Answer:* **One** — the writer's.

**Example 3.** Give a suitable salutation and closing for a letter to one's father. *Answer:* **Nna m ọma,** … **Abụ m nwa gị,**`,
        },
        questions: [
          ["E", "A letter written to a friend or relative is called", "leta nkeonwe", "leta anamachọihe", "aghọtaazaa", "akụkọ ifo", "It is the informal letter."],
          ["E", "The writer's address in a letter is placed at the", "top right-hand corner", "bottom left-hand corner", "middle of the page", "back of the page", "The date follows beneath it."],
          ["E", "An informal letter has how many addresses?", "one", "two", "three", "none", "Only the writer's address is given."],
          ["M", "'Nna m ọma' at the start of a letter means", "My dear father", "Your loving son", "Yours faithfully", "Greet father for me", "It is the salutation."],
          ["M", "An Igbo informal letter normally opens by", "asking after the reader's health", "stating the price of goods", "giving a title in capitals", "listing the writer's qualifications", "Greeting comes before the message."],
          ["M", "At the end of an informal letter the writer signs with", "the first name only", "the full name and title", "a rubber stamp", "the school's name", "The reader knows the writer well."],
          ["M", "In the sample letter, 'ule' means", "examination", "holiday", "school fees", "uniform", "Emeka says it begins next week."],
          ["H", "'Abụ m nwa gị' as a closing means", "I am your child", "I am your friend", "I am your teacher", "I am your neighbour", "It ends a letter to a parent."],
          ["H", "'Biko, kelere m ndị ụlọ anyị niile' means", "Please greet everyone at home for me", "I am coming home", "The house is big", "Everyone at home is ill", "It is a common closing line."],
          ["H", "Another Igbo name for a letter, meaning 'message paper', is", "akwụkwọ ozi", "akwụkwọ ndụ", "akwụkwọ nri", "akwụkwọ ọgụgụ", "Ozi means message."],
        ],
      },
      {
        week: 6,
        title: "Traditional games, music and dance",
        subtopics: ["Wrestling and outdoor games", "Board and indoor games", "Musical instruments", "Songs and dances"],
        objectives: ["Describe wrestling and other outdoor games", "Describe board and indoor games", "Name Igbo musical instruments", "Identify kinds of songs and well-known dances"],
        lesson: {
          title: "Egwuregwu, egwu na ịgba egwu",
          summary: "Describe traditional Igbo games, musical instruments and dances.",
          minutes: 40,
          notes: `## Play
**Egwuregwu** means game or play; **egwu** means music, song or dance. In the evening, under the moon, children gathered for **egwu ọnwa** — moonlight play — with stories, riddles, songs and games.

## Wrestling (mgba)
**Ịgba mgba** is the best-loved traditional sport.
- two wrestlers try to **throw each other on the back**
- contests are held between **age mates**, **villages** and **towns**, especially after harvest
- **drums and flutes** urge the wrestlers on
- a champion is hailed as **dike** or **di mgba** and wins fame for his village
Wrestling builds **strength, courage and fair play**.

## Other outdoor games
- **oro** — **hide-and-seek**: one child covers the eyes while the others hide
- **ịgba ọsọ** — races
- **ịdọ ụdọ** — tug of war
- **ịgba oga** — a **girls' game of clapping and stepping**: two girls face each other and try to match or beat each other's leg movements
- **ịkụ okoso** — spinning tops made from snail shells or seeds
- **ịgba ụta** — archery
- **igwu mmiri** — swimming, in riverine areas
- ring and circle games with songs

## Board and indoor games
- **ọkwe (ncho)** — a board game for **two players**, played with **seeds** sown round the holes of a wooden board; it trains counting and planning
- **agwụgwa** — riddle contests
- **okwu ntabi ire** — tongue-twisters
- **ịkọ akụkọ ifo** — storytelling

## Musical instruments (ngwa egwu)
| Igbo | Description |
|---|---|
| **ọja** | wooden **flute** |
| **ekwe** | hollowed wooden **slit drum** |
| **ogene** | iron **gong / bell** |
| **udu** | **clay-pot drum** with a hole in the side |
| **igba** | skin-covered **drum** |
| **ịchaka / ọyọ** | **rattle** of gourd and beads or basketwork |
| **opi** | **horn** |
| **ubọ aka** | **thumb piano** |
| **ikoro** | giant slit drum used to **summon the town** |

The **ekwe** and **ikoro** can "talk" — sending messages by imitating the tones of speech.

## Songs (abụ)
- **abụ ụmụaka** — children's play songs
- **abụ e ji aragụ nwa** — lullabies
- **abụ ọrụ** — work songs
- **abụ agha** — war songs
- **abụ ọṅụ** — songs of joy at births and weddings
- **abụ akwamozu** — funeral songs
- **abụ ekpere / abụ otuto** — songs of worship and praise

## Dances (egwu)
| Dance | Notes |
|---|---|
| **Atịlọgwụ** | fast, **acrobatic** dance of young men; known across Nigeria |
| **Nkwa ụmụ agbọghọ** | maidens' dance, with waist movements |
| **Egedege** | stately royal dance |
| **Ikpirikpi ọgụ** | the **war dance** of Ọhafịa |
| **Mkpọkịtị** | energetic stamping dance |
| **egwu mmanwụ** | **masquerade** dances |

## Value of games, music and dance
- **exercise** and health
- **co-operation** and friendship
- **quick thinking**
- **discipline** — rules, turns, accepting defeat
- **language** — songs teach words and tones
- **culture** is passed on; festivals are made lively

## Today
Schools keep these alive through **cultural days**, competitions and clubs.`,
          examples: `**Example 1.** What is **ịgba mgba**? *Answer:* **Wrestling** — the best-loved traditional Igbo sport.

**Example 2.** Name three Igbo musical instruments. *Answer:* **Ọja** (flute), **ekwe** (slit drum) and **ogene** (gong).

**Example 3.** Which dance is known for its acrobatics? *Answer:* **Atịlọgwụ**.`,
        },
        questions: [
          ["E", "The traditional sport of wrestling in Igbo is called", "mgba", "oro", "ọkwe", "oga", "To wrestle is 'ịgba mgba'."],
          ["E", "The Igbo wooden flute is the", "ọja", "ekwe", "ogene", "udu", "It is blown to urge on dancers and wrestlers."],
          ["E", "'Oro' is the game of", "hide-and-seek", "wrestling", "tug of war", "racing", "One child covers the eyes while others hide."],
          ["M", "The iron gong used in Igbo music is the", "ogene", "ọja", "igba", "ubọ aka", "It is struck with a stick."],
          ["M", "The hollowed wooden slit drum is called", "ekwe", "udu", "opi", "ịchaka", "It can send messages by imitating speech tones."],
          ["M", "'Udu' is a musical instrument made from", "a clay pot", "an animal horn", "iron", "a gourd with beads", "It has a hole in the side and gives a deep sound."],
          ["M", "The fast, acrobatic dance of Igbo young men is", "Atịlọgwụ", "Egedege", "Nkwa ụmụ agbọghọ", "Ikpirikpi ọgụ", "It is known across Nigeria."],
          ["H", "The war dance of Ọhafịa is called", "Ikpirikpi ọgụ", "Atịlọgwụ", "Mkpọkịtị", "Egedege", "It celebrates the warriors of the past."],
          ["H", "The giant slit drum used to summon the whole town is the", "ikoro", "ogene", "ọja", "ubọ aka", "Its sound carries a great distance."],
          ["H", "'Ịgba oga' is best described as", "a girls' game of clapping and matching leg movements", "a board game with seeds", "a wrestling contest", "a masquerade dance", "Two girls face each other and step in rhythm."],
        ],
      },
    ],
  },
];
