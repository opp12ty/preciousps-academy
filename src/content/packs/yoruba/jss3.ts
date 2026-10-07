import type { TermPlan } from "../types";

/** JSS3 Yoruba — original Precious PS content following the national Basic Education structure. Explanations are given in English with Yoruba terms and examples. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Higher numbers and ordinal numbers",
        subtopics: ["Hundreds", "Thousands", "Ordinal numbers", "Numbers in daily use"],
        objectives: ["Count in hundreds from 100 to 1,000", "Name the thousands", "Form ordinal numbers", "Use numbers for dates, positions and money"],
        lesson: {
          title: "Òǹkà ńlá àti òǹkà ipò",
          summary: "Count in hundreds and thousands and use ordinal numbers.",
          minutes: 40,
          notes: `## Hundreds
From 200 the traditional system counts in **two-hundreds (igba)**, with the odd hundreds formed by **subtracting a hundred** from the next.
| Figure | Yoruba | How formed |
|---|---|---|
| 100 | **ọgọ́rùn-ún** | 20 × 5 |
| 200 | **igba** | — |
| 300 | **ọ̀ọ́dúnrún** | 400 − 100 |
| 400 | **irinwó** | 20 × 20 |
| 500 | **ẹ̀ẹ́dẹ́gbẹ̀ta** | 600 − 100 |
| 600 | **ẹgbẹ̀ta** | 200 × 3 |
| 700 | **ẹ̀ẹ́dẹ́gbẹ̀rin** | 800 − 100 |
| 800 | **ẹgbẹ̀rin** | 200 × 4 |
| 900 | **ẹ̀ẹ́dẹ́gbẹ̀rún** | 1,000 − 100 |
| 1,000 | **ẹgbẹ̀rún** | 200 × 5 |

**ẹgbẹ̀-** = "two-hundreds"; **ẹ̀ẹ́dẹ́-** = "a hundred less than".

## Thousands
| Figure | Yoruba |
|---|---|
| 2,000 | **ẹgbàá** (ẹgbẹ̀wá) |
| 3,000 | **ẹgbẹ̀ẹ́dógún** |
| 4,000 | **ẹgbàajì** |
| 6,000 | **ẹgbàáta** |
| 10,000 | **ẹgbàárùn-ún** |
| 20,000 | **ọ̀kẹ́ kan** |
| 1,000,000 | **mílíọ̀nù kan** (borrowed) |

In everyday speech people simply say **ẹgbẹ̀rún méjì** (two thousand), **ẹgbẹ̀rún mẹ́wàá** (ten thousand).

## Ordinal numbers (òǹkà ipò)
These show **position**. They are formed with **ìk- / ẹ̀k-** before the number, or **k-** after a noun.
| Position | Standing alone | After a noun |
|---|---|---|
| 1st | **èkíní (àkọ́kọ́)** | **kìíní (àkọ́kọ́)** |
| 2nd | **èkejì** | **kejì** |
| 3rd | **ẹ̀kẹta** | **kẹta** |
| 4th | **ẹ̀kẹrin** | **kẹrin** |
| 5th | **ẹ̀karùn-ún** | **karùn-ún** |
| 6th | **ẹ̀kẹfà** | **kẹfà** |
| 7th | **èkeje** | **keje** |
| 8th | **ẹ̀kẹjọ** | **kẹjọ** |
| 9th | **ẹ̀kẹsàn-án** | **kẹsàn-án** |
| 10th | **ẹ̀kẹwàá** | **kẹwàá** |
| last | **ìkẹyìn** | **ìkẹyìn** |

- **ọmọ kẹta** — the third child
- **ọjọ́ kẹjọ** — the eighth day
- **ipò kìíní** — first position
- **Adé ṣe ipò kejì nínú ìdánwò.** — Adé came second in the examination.

## Three sets of number words
| Use | 2 | 3 |
|---|---|---|
| counting | **èjì** | **ẹ̀ta** |
| with a noun (how many) | **méjì** | **mẹ́ta** |
| position | **kejì** | **kẹta** |

## Numbers in daily use
- **date**: **Ọjọ́ kìíní, Oṣù Ọ̀wàrà** — 1st October
- **age**: **Ọmọ ọdún mẹ́rìnlá ni mí.** — I am fourteen.
- **time**: **Aago mẹ́ta** — three o'clock; **aago mẹ́ta ààbọ̀** — half past three
- **money**: **ẹgbẹ̀rún márùn-ún náírà** — five thousand naira
- **"each"**: repeat the number — **méjì méjì** (two each)
- **"all"**: **méjèèjì** (both), **mẹ́tẹ̀ẹ̀ta** (all three)

## Fractions
**ìdajì / ààbọ̀** — half; **ìdámẹ́ta** — one third; **ìdámẹ́rin** — one quarter.`,
          examples: `**Example 1.** What is 400 in Yoruba? *Answer:* **irinwó**.

**Example 2.** Translate "the third child". *Answer:* **ọmọ kẹta**.

**Example 3.** Say "five thousand naira". *Answer:* **ẹgbẹ̀rún márùn-ún náírà**.`,
        },
        questions: [
          ["E", "The Yoruba word for 200 is", "igba", "irinwó", "ogún", "ẹgbẹ̀rún", "Its tones are mid – mid."],
          ["E", "'Ẹgbẹ̀rún' is the number", "1,000", "100", "200", "500", "It is five two-hundreds."],
          ["E", "'Ọmọ kejì' means", "the second child", "two children", "twelve children", "a younger child", "Kejì is the ordinal form."],
          ["M", "The Yoruba word for 300 is", "ọ̀ọ́dúnrún", "ẹgbẹ̀ta", "irinwó", "ẹgbẹ̀rin", "It is a hundred less than four hundred."],
          ["M", "'Ẹgbẹ̀ta' is the number", "600", "300", "800", "60", "It means two hundred in three places."],
          ["M", "The ordinal number 'first' in Yoruba is", "èkíní or àkọ́kọ́", "ọ̀kan", "kan ṣoṣo", "ìkẹyìn", "Ìkẹyìn means last."],
          ["M", "'Ìdajì' means", "half", "double", "one third", "the whole", "Ààbọ̀ is also used."],
          ["H", "'Ẹ̀ẹ́dẹ́gbẹ̀ta' is the number", "500", "700", "900", "1,500", "It is a hundred less than six hundred."],
          ["H", "The Yoruba word for 2,000 is", "ẹgbàá", "ẹgbẹ̀rin", "ọ̀kẹ́", "irinwó", "It is ten two-hundreds."],
          ["H", "'Méjèèjì' means", "both of them", "two each", "the second", "twenty-two", "It is the 'all' form of two."],
        ],
      },
      {
        week: 2,
        title: "Adverbs",
        subtopics: ["What an adverb is", "Adverbs of manner and degree", "Adverbs of time and place", "Ideophones"],
        objectives: ["Define an adverb", "Use adverbs of manner and degree", "Use adverbs of time and place", "Recognise ideophones that describe actions vividly"],
        lesson: {
          title: "Ọ̀rọ̀-àpọ́nlé",
          summary: "Use Yoruba adverbs to tell how, when and where an action happens.",
          minutes: 40,
          notes: `## What is an adverb?
An **adverb** (**ọ̀rọ̀-àpọ́nlé**) tells more about a **verb** — **how, when, where or how much** an action is done.

## Position
Most adverbs come **after the verb** (or at the end of the sentence); a few come **before** the verb.

## Adverbs of manner (how?)
| Yoruba | English | Example |
|---|---|---|
| **dáadáa / dáradára** | well | **Ó kàwé dáadáa.** — He read well. |
| **kíákíá** | quickly | **Ó sáré kíákíá.** — He ran quickly. |
| **díẹ̀díẹ̀** | slowly, gradually | **Ó ń rìn díẹ̀díẹ̀.** — He is walking slowly. |
| **pẹ̀lẹ́pẹ̀lẹ́** | gently, carefully | **Gbé e pẹ̀lẹ́pẹ̀lẹ́.** — Carry it gently. |
| **jẹ́jẹ́** | quietly | **Ó jókòó jẹ́jẹ́.** — He sat quietly. |
| **gidigidi** | very hard | **Ó ṣiṣẹ́ gidigidi.** — He worked very hard. |

## Adverbs of degree (how much?)
| Yoruba | English | Example |
|---|---|---|
| **gan-an** | very | **Ó dára gan-an.** — It is very good. |
| **púpọ̀** | much, a lot | **Mo dúpẹ́ púpọ̀.** — I thank you very much. |
| **díẹ̀** | a little | **Ó jẹun díẹ̀.** — He ate a little. |
| **jù** | too much | **Ó pọ̀ jù.** — It is too much. |
| **rárá** | at all | **Kò wá rárá.** — He did not come at all. |
| **pátápátá** | completely | **Ó tán pátápátá.** — It is completely finished. |

## Adverbs of time (when?)
**lónìí** (today), **lánàá** (yesterday), **lọ́la** (tomorrow), **nísinsìnyí** (now), **láìpẹ́** (soon), **tẹ́lẹ̀** (before), **nígbà gbogbo** (always), **lẹ́ẹ̀kan** (once), **lẹ́ẹ̀kan sí i** (again).
- **Mo máa wá lọ́la.** — I will come tomorrow.

## Adverbs of place (where?)
**níbí** (here), **níbẹ̀** (there), **lókè** (above), **nísàlẹ̀** (below), **níta** (outside), **nílé** (at home).
- **Wá síbí.** — Come here.

## Adverbs that come before the verb
| Yoruba | English | Example |
|---|---|---|
| **tètè** | quickly, early | **Ó tètè dé.** — He arrived early. |
| **kàn** | just, merely | **Mo kàn wò ó.** — I just looked at it. |
| **tún** | again | **Ó tún wá.** — He came again. |
| **sábà** | usually | **Ó sábà máa ń pẹ́.** — He is usually late. |
| **jọ** | together | **A jọ lọ.** — We went together. |
| **kọ́kọ́** | first | **Kọ́kọ́ jẹun.** — Eat first. |

## Ideophones
Yoruba is rich in **vivid sound-words** that paint the manner, sound, colour or size of something. They often **repeat** a syllable.
| Ideophone | Used of | Example |
|---|---|---|
| **fíofío** | great height | **Ó ga fíofío.** — It is extremely tall. |
| **kìtìkìtì** | hurried movement | **Ó ń sáré kìtìkìtì.** |
| **róróró** | bright red | **Ó pupa róróró.** |
| **láúláú** | pure white | **Ó funfun láúláú.** |
| **kirikiri** | deep black | **Ó dúdú kirikiri.** |
| **wéréwéré** | quick, nimble action | **Ó ń ṣe é wéréwéré.** |
| **gbẹndu** | fat, bulky | **Ó sanra gbẹndu.** |

Each ideophone goes with **particular verbs**: we say *ga fíofío* but not *pupa fíofío*.

## Forming adverbs by repetition
**kíá → kíákíá**; **díẹ̀ → díẹ̀díẹ̀**; **dára → dáradára**.

## Find the adverb
> **Ọmọ náà sọ̀rọ̀ jẹ́jẹ́.** — The child spoke *quietly*.`,
          examples: `**Example 1.** Translate "He ran quickly." *Answer:* **Ó sáré kíákíá**.

**Example 2.** What does **gan-an** mean? *Answer:* **Very**.

**Example 3.** What is an ideophone? Give one. *Answer:* A **vivid sound-word describing manner or quality**, e.g. **fíofío** (of great height).`,
        },
        questions: [
          ["E", "The Yoruba term for 'adverb' is", "ọ̀rọ̀-àpọ́nlé", "ọ̀rọ̀-àpèjúwe", "ọ̀rọ̀-orúkọ", "ọ̀rọ̀-atọ́kùn", "It tells more about a verb."],
          ["E", "'Kíákíá' means", "quickly", "slowly", "quietly", "badly", "As in 'Ó sáré kíákíá'."],
          ["E", "'Ó dára gan-an' means", "It is very good", "It is not good", "It is a little good", "It was good before", "Gan-an means 'very'."],
          ["M", "'Díẹ̀díẹ̀' means", "slowly, little by little", "at once", "loudly", "completely", "It is formed by repeating díẹ̀."],
          ["M", "In 'Ọmọ náà sọ̀rọ̀ jẹ́jẹ́', the adverb is", "jẹ́jẹ́", "ọmọ", "náà", "sọ̀rọ̀", "It tells how the child spoke."],
          ["M", "'Nísinsìnyí' is an adverb of", "time", "place", "manner", "degree", "It means 'now'."],
          ["M", "'Ó tún wá' means", "He came again", "He came early", "He came alone", "He just came", "Tún before the verb means 'again'."],
          ["H", "Vivid sound-words such as 'fíofío' and 'róróró' are known as", "ideophones", "pronouns", "prepositions", "conjunctions", "They paint the manner or quality of something."],
          ["H", "The ideophone that goes with 'funfun' to mean 'pure white' is", "láúláú", "kirikiri", "róróró", "fíofío", "Kirikiri goes with dúdú and róróró with pupa."],
          ["H", "'Ó tètè dé' means", "He arrived early", "He arrived again", "He has not arrived", "He arrived together with us", "Tètè is an adverb placed before the verb."],
        ],
      },
      {
        week: 3,
        title: "Conjunctions",
        subtopics: ["What a conjunction is", "Joining words", "Joining sentences", "Conjunctions of reason, condition and time"],
        objectives: ["Define a conjunction", "Join words with àti, pẹ̀lú and tàbí", "Join sentences with sì, ṣùgbọ́n and àmọ́", "Use nítorí, bí and nígbà tí"],
        lesson: {
          title: "Ọ̀rọ̀-asopọ̀",
          summary: "Join words and sentences with Yoruba conjunctions.",
          minutes: 40,
          notes: `## What is a conjunction?
A **conjunction** (**ọ̀rọ̀-asopọ̀**) is a word that **joins** words, phrases or sentences.

## Joining words and phrases
| Yoruba | English | Example |
|---|---|---|
| **àti** | and | **Adé àti Bọ́lá** — Adé and Bọ́lá |
| **pẹ̀lú** | and, with | **ìyá pẹ̀lú ọmọ** — mother and child |
| **tàbí** | or | **iṣu tàbí ìrẹsì** — yam or rice |
| **àbí** | or (in questions) | **Ṣé o máa lọ àbí o máa dúró?** — Will you go or stay? |
| **yálà … tàbí** | either … or | **yálà lónìí tàbí lọ́la** — either today or tomorrow |

**àti** joins **nouns**, not sentences:
- ✔ **Mo ra ìwé àti gègé.** — I bought a book and a pen.

## Joining sentences: "sì"
To join two **actions or sentences**, use **sì** (placed **after the subject** of the second clause):
- **Ó wá, ó sì jẹun.** — He came and (he) ate.
- **Mo kàwé, mo sì kọ̀wé.** — I read and I wrote.

## Contrast
| Yoruba | English | Example |
|---|---|---|
| **ṣùgbọ́n** | but | **Ó wá, ṣùgbọ́n kò jẹun.** — He came, but he did not eat. |
| **àmọ́** | but | **Mo pè é, àmọ́ kò dáhùn.** — I called him, but he did not answer. |
| **bí ó tilẹ̀ jẹ́ pé** | although | **Bí ó tilẹ̀ jẹ́ pé òjò ń rọ̀, ó lọ.** — Although it was raining, he went. |

## Reason
| Yoruba | English | Example |
|---|---|---|
| **nítorí (pé)** | because | **Kò wá nítorí pé ara rẹ̀ kò yá.** — He did not come because he was ill. |
| **nítorí náà** | therefore | **Òjò rọ̀; nítorí náà, a kò jáde.** — It rained; therefore we did not go out. |

## Condition
| Yoruba | English | Example |
|---|---|---|
| **bí … bá** | if | **Bí o bá kàwé, o máa yege.** — If you study, you will pass. |
| **àfi bí** | unless | **Àfi bí o bá wá.** — Unless you come. |

## Time
| Yoruba | English | Example |
|---|---|---|
| **nígbà tí** | when | **Nígbà tí mo dé, ó ti lọ.** — When I arrived, he had gone. |
| **kí … tó** | before | **Wẹ ọwọ́ rẹ kí o tó jẹun.** — Wash your hands before you eat. |
| **lẹ́yìn tí** | after | **Lẹ́yìn tí a jẹun, a sùn.** — After we ate, we slept. |
| **títí tí** | until | **Dúró títí tí màá fi dé.** — Wait until I come. |

## Purpose and reported speech
- **kí** — so that: **Tètè wá kí a lè lọ.** — Come early so that we can go.
- **pé** — that: **Ó sọ pé òun máa wá.** — He said that he would come.

## Summary
| Type | Words |
|---|---|
| addition | àti, pẹ̀lú, sì |
| choice | tàbí, àbí |
| contrast | ṣùgbọ́n, àmọ́ |
| reason | nítorí, nítorí náà |
| condition | bí … bá |
| time | nígbà tí, kí … tó, lẹ́yìn tí |

## Practice
Join: *Adé ga. Bọ́lá kúrú.* → **Adé ga, ṣùgbọ́n Bọ́lá kúrú.**`,
          examples: `**Example 1.** Translate "yam or rice". *Answer:* **iṣu tàbí ìrẹsì**.

**Example 2.** Join with "but": *Ó wá. Kò jẹun.* *Answer:* **Ó wá, ṣùgbọ́n kò jẹun**.

**Example 3.** Which conjunction means "because"? *Answer:* **nítorí (pé)**.`,
        },
        questions: [
          ["E", "The Yoruba term for 'conjunction' is", "ọ̀rọ̀-asopọ̀", "ọ̀rọ̀-ìṣe", "ọ̀rọ̀-àpọ́nlé", "ọ̀rọ̀-orúkọ", "Sopọ̀ means to join."],
          ["E", "The Yoruba conjunction meaning 'and' between two nouns is", "àti", "tàbí", "ṣùgbọ́n", "nítorí", "As in 'Adé àti Bọ́lá'."],
          ["E", "'Ṣùgbọ́n' means", "but", "or", "if", "when", "It shows contrast."],
          ["M", "'Iṣu tàbí ìrẹsì' means", "yam or rice", "yam and rice", "yam with rice", "yam but not rice", "Tàbí offers a choice."],
          ["M", "The conjunction 'nítorí' expresses", "reason", "choice", "time", "contrast", "It means 'because'."],
          ["M", "'Ó wá, ó sì jẹun' means", "He came and ate", "He came but did not eat", "He came because he ate", "He will come to eat", "Sì joins two actions."],
          ["M", "'Nígbà tí mo dé' means", "When I arrived", "Because I arrived", "If I arrive", "Before I arrived", "Nígbà tí introduces a time clause."],
          ["H", "'Bí o bá kàwé, o máa yege' means", "If you study, you will pass", "When you studied, you passed", "Because you study, you pass", "Although you study, you fail", "Bí … bá expresses a condition."],
          ["H", "'Wẹ ọwọ́ rẹ kí o tó jẹun' means", "Wash your hands before you eat", "Wash your hands after you eat", "Wash your hands and eat", "Wash your hands or do not eat", "Kí … tó means 'before'."],
          ["H", "Which conjunction is used to join two sentences rather than two nouns?", "sì", "àti", "pẹ̀lú", "yálà", "Àti joins nouns; sì joins clauses."],
        ],
      },
      {
        week: 4,
        title: "Types of sentences",
        subtopics: ["Sentences by function", "Simple sentences", "Compound sentences", "Complex sentences"],
        objectives: ["Classify sentences as statement, question, command or exclamation", "Identify a simple sentence", "Identify a compound sentence", "Identify a complex sentence and its dependent clause"],
        lesson: {
          title: "Oríṣi gbólóhùn",
          summary: "Classify Yoruba sentences by function and by structure.",
          minutes: 40,
          notes: `## A sentence
A **sentence** (**gbólóhùn**) is a group of words that expresses a **complete thought**. It has a **subject (olùwà)** and a **predicate** containing a verb.

## A. By function (iṣẹ́ tí wọ́n ń ṣe)
| Kind | Yoruba term | Example | Ends with |
|---|---|---|---|
| **statement** | gbólóhùn àlàyé | **Adé lọ sí ọjà.** — Adé went to the market. | full stop |
| **question** | gbólóhùn ìbéèrè | **Ṣé Adé lọ sí ọjà?** — Did Adé go to the market? | question mark |
| **command** | gbólóhùn àṣẹ | **Lọ sí ọjà!** — Go to the market! | full stop or exclamation mark |
| **exclamation** | gbólóhùn ìyanu | **Há! Ó mà ga o!** — Oh! How tall he is! | exclamation mark |

A command often has **no stated subject**: **Jókòó!** A polite or plural command begins with **Ẹ**: **Ẹ jókòó.**

A **wish or prayer** uses **kí**: **Kí Ọlọ́run ṣọ́ wa.** — May God protect us.

## B. By structure (ìhun)
### 1. Simple sentence — gbólóhùn abọ́dé / ẹlẹ́yọ ọ̀rọ̀-ìṣe
It has **one clause** with **one main verb**.
- **Bọ́lá ra aṣọ.** — Bọ́lá bought cloth.
- **Òjò ń rọ̀.** — It is raining.

### 2. Compound sentence — gbólóhùn alákànpọ̀
**Two (or more) simple sentences of equal rank** joined by **sì, ṣùgbọ́n, àmọ́, tàbí**.
- **Bọ́lá ra aṣọ, ó sì rán an.** — Bọ́lá bought cloth and sewed it.
- **Mo pè é, ṣùgbọ́n kò dáhùn.** — I called him, but he did not answer.
Each part could stand alone.

### 3. Complex sentence — gbólóhùn oníbọ̀
A **main clause** with one or more **dependent clauses** that cannot stand alone. The dependent clause is introduced by words such as **tí, pé, nígbà tí, bí … bá, nítorí pé, kí**.
- **Ọmọ tí ó wá lánàá ti lọ.** — The child *who came yesterday* has gone.
- **Mo mọ̀ pé ó máa wá.** — I know *that he will come*.
- **Nígbà tí mo dé, wọ́n ti jẹun.** — *When I arrived*, they had eaten.
- **Bí òjò bá rọ̀, a kò ní í lọ.** — *If it rains*, we will not go.

## Kinds of dependent clause
| Clause | Introduced by | Example |
|---|---|---|
| **relative** (describes a noun) | **tí** | ìwé **tí mo rà** — the book that I bought |
| **noun clause** | **pé** | Ó sọ **pé òun ń bọ̀** |
| **time** | **nígbà tí** | **Nígbà tí ó dé**… |
| **reason** | **nítorí pé** | …**nítorí pé ó rẹ̀ ẹ́** |
| **condition** | **bí … bá** | **Bí o bá fẹ́**… |
| **purpose** | **kí** | …**kí ó lè yege** |

## Sentence parts
- **olùwà** — subject: **Bọ́lá**
- **ọ̀rọ̀-ìṣe** — verb: **ra**
- **àbọ̀** — object: **aṣọ**
- **àpọ́nlé** — adverbial: **lánàá**

## Punctuation (àmì ìkọ̀wé)
| Mark | Yoruba name |
|---|---|
| **.** | àmì ìdánudúró (full stop) |
| **,** | àmì ìdánudúró díẹ̀ (comma) |
| **?** | àmì ìbéèrè (question mark) |
| **!** | àmì ìyanu (exclamation mark) |
| **" "** | àmì àyọlò (quotation marks) |

## Practice
Classify: (a) **Ẹ dákẹ́!** — command. (b) **Ta ni ó wá?** — question. (c) **Adé kàwé, ó sì yege.** — compound statement.`,
          examples: `**Example 1.** What kind of sentence is **"Jókòó!"**? *Answer:* A **command** (gbólóhùn àṣẹ).

**Example 2.** Identify the structure: **Mo pè é, ṣùgbọ́n kò dáhùn.** *Answer:* **Compound** — two equal clauses joined by ṣùgbọ́n.

**Example 3.** Pick out the dependent clause: **Ọmọ tí ó wá lánàá ti lọ.** *Answer:* **tí ó wá lánàá** (who came yesterday).`,
        },
        questions: [
          ["E", "A sentence that gives an order is called", "gbólóhùn àṣẹ", "gbólóhùn ìbéèrè", "gbólóhùn àlàyé", "gbólóhùn ìyanu", "Àṣẹ means command."],
          ["E", "'Ṣé Adé lọ sí ọjà?' is", "a question", "a command", "a statement", "an exclamation", "It begins with ṣé and ends with a question mark."],
          ["E", "A simple sentence contains", "one main verb", "two joined sentences", "a dependent clause", "no verb", "It has a single clause."],
          ["M", "'Adé lọ sí ọjà.' is an example of", "a statement", "a question", "a command", "a prayer", "It simply gives information."],
          ["M", "'Bọ́lá ra aṣọ, ó sì rán an' is", "a compound sentence", "a simple sentence", "a complex sentence", "a command", "Two equal clauses are joined by sì."],
          ["M", "The Yoruba name for the question mark is", "àmì ìbéèrè", "àmì ìyanu", "àmì ohùn", "àmì àyọlò", "Ìbéèrè means question."],
          ["M", "A sentence that expresses surprise or strong feeling is", "gbólóhùn ìyanu", "gbólóhùn àṣẹ", "gbólóhùn àlàyé", "gbólóhùn oníbọ̀", "It ends with an exclamation mark."],
          ["H", "'Nígbà tí mo dé, wọ́n ti jẹun' is", "a complex sentence", "a simple sentence", "a compound sentence", "a command", "It has a dependent time clause and a main clause."],
          ["H", "In 'ìwé tí mo rà' (the book that I bought), the word 'tí' introduces", "a relative clause", "a question", "a command", "a negative", "The clause describes the noun ìwé."],
          ["H", "'Kí Ọlọ́run ṣọ́ wa' is best described as", "a wish or prayer", "a question", "a compound statement", "a relative clause", "Kí at the start expresses a wish."],
        ],
      },
      {
        week: 5,
        title: "Word formation",
        subtopics: ["Root words", "Forming nouns with prefixes", "Reduplication", "Compounding and borrowing"],
        objectives: ["Identify the root of a word", "Form nouns from verbs with prefixes", "Form words by reduplication", "Explain compounding and borrowing"],
        lesson: {
          title: "Ìṣẹ̀dá ọ̀rọ̀",
          summary: "See how new Yoruba words are formed from simpler ones.",
          minutes: 40,
          notes: `## Root words
A **root word** (**ọ̀rọ̀ ìpìlẹ̀**) cannot be broken into smaller meaningful parts: **lọ** (go), **jẹ** (eat), **ilé** (house), **omi** (water).
A **derived word** (**ọ̀rọ̀ aṣẹ̀dá**) is built from a root.

## 1. Prefixes (àfòmọ́ ìbẹ̀rẹ̀)
A prefix is added **before a verb** to make a **noun**.
| Prefix | + verb | Noun | Meaning |
|---|---|---|---|
| **ì-** | fẹ́ (love) | **ìfẹ́** | love |
| **ì-** | mọ̀ (know) | **ìmọ̀** | knowledge |
| **ì-** | gbàgbọ́ (believe) | **ìgbàgbọ́** | faith |
| **à-** | lọ (go) | **àlọ** | going |
| **à-** | bọ̀ (return) | **àbọ̀** | return |
| **è- / ẹ̀-** | rò (think) | **èrò** | thought |
| **ẹ̀-** | kọ́ (teach) | **ẹ̀kọ́** | lesson, education |
| **ọ̀-** | lẹ (be lazy) | **ọ̀lẹ** | a lazy person |
| **a-** | pẹja (kill fish) | **apẹja** | fisherman |
| **a-** | kọ̀wé (write) | **akọ̀wé** | clerk, writer |
| **ò- / ọ̀-** | ṣìṣẹ́ (work) | **òṣìṣẹ́** | worker |
| **olù-** | kọ́ (teach) | **olùkọ́** | teacher |
| **olù-** | gbàlà (save) | **olùgbàlà** | saviour |
| **àì-** | sùn (sleep) | **àìsùn** | sleeplessness |
| **àì-** | gbọ́ràn (obey) | **àìgbọràn** | disobedience |

- **ì-** and **à-** make **abstract nouns**
- **a-**, **ò-/ọ̀-** and **olù-** make the **doer** of the action
- **àì-** gives a **negative** meaning ("not, without")

## 2. The prefix "oní-" — owner / seller / doer
**oní + noun** → "one who has or deals in". The **n** changes to **l** before vowels other than **i**, and the vowel of the prefix matches the noun.
| oní + | Result | Meaning |
|---|---|---|
| bàtà | **oníbàtà** | shoe seller / owner |
| ilé | **onílé** | house owner |
| aṣọ | **aláṣọ** | cloth seller |
| ẹja | **ẹlẹ́ja** | fish seller |
| ọjà | **ọlọ́jà** | trader |
| epo | **elépo** | oil seller |

## 3. Reduplication (àpètúnpè)
Repeating all or part of a word.
### Partial: consonant + í + verb
Makes a **noun or adjective** from a verb:
- **lọ → lílọ** (going)
- **jẹ → jíjẹ** (eating; edible)
- **kọ → kíkọ** (writing)
- **dára → dídára** (good)
### Full
- **kíá → kíákíá** (quickly)
- **ọdún → ọdọọdún** (every year)
- **ọjọ́ → ojoojúmọ́** (every day)
- **ọmọ → ọmọọmọ** (grandchild)
### With "kí" in the middle — "any / whatever"
- **ẹni → ẹnikẹ́ni** (anyone)
- **ohun → ohunkóhun** (anything)
- **ibi → ibikíbi** (anywhere)

## 4. Compounding (àkànpọ̀)
Joining two or more words:
- **ilé + ìwé → ilé-ìwé** (school)
- **ọmọ + ọba → ọmọọba** (prince / princess)
- **ojú + ọ̀nà → ojú ọ̀nà** (road)
- **ìyá + ilé → ìyálé** (senior wife)
- **orí + òkè → orí òkè** (hilltop)
Many **names** are compounds or whole sentences: **Olú + wá + ṣe + un → Olúwaṣeun**.

## 5. Vowel loss (ìpajẹ)
When two vowels meet, one is often dropped:
- **ra + ẹja → rẹja** (buy fish)
- **jẹ + iṣu → jẹṣu** (eat yam)
- **ní + ilé → nílé** (at home)

## 6. Borrowing (ọ̀rọ̀ àyálò)
Words taken from other languages and reshaped:
- from **English**: **tábìlì** (table), **kọ́ọ̀bù** (cup), **búrẹ́dì** (bread), **dókítà** (doctor), **mọ́tò** (motor)
- from **Hausa / Arabic**: **àlùbọ́sà** (onion), **àlàáfíà** (peace), **wàhálà** (trouble), **àdúrà** (prayer)

## Why it matters
Knowing how words are built helps you to **work out meanings**, **spell correctly** and **enlarge your vocabulary**.`,
          examples: `**Example 1.** Form a noun from **fẹ́** with the prefix ì-. *Answer:* **ìfẹ́** (love).

**Example 2.** What does **oníbàtà** mean, and how is it formed? *Answer:* **Shoe seller / owner** — *oní + bàtà*.

**Example 3.** Give the reduplicated form of **lọ**. *Answer:* **lílọ** (going).`,
        },
        questions: [
          ["E", "The noun formed from the verb 'fẹ́' (to love) is", "ìfẹ́", "afẹ́", "fífẹ́ nìkan", "olùfẹ́ nìkan", "The prefix ì- makes an abstract noun."],
          ["E", "'Olùkọ́' (teacher) is formed from the prefix olù- and the verb", "kọ́ (teach)", "kà (read)", "kọ (write)", "kó (gather)", "Olù- names the doer."],
          ["E", "A word that cannot be broken into smaller meaningful parts is", "a root word", "a compound word", "a borrowed word", "a reduplicated word", "Examples are lọ, jẹ and omi."],
          ["M", "'Apẹja' (fisherman) is formed with the prefix", "a-", "ì-", "àì-", "oní-", "A- plus pẹja names the doer."],
          ["M", "'Oníbàtà' means", "a person who sells or owns shoes", "a pair of shoes", "a shoe shop", "without shoes", "Oní- means owner or seller of."],
          ["M", "The reduplicated form of the verb 'jẹ' (eat) is", "jíjẹ", "jẹjẹ", "ìjẹ", "ajẹ", "The consonant is repeated with í."],
          ["M", "'Ilé-ìwé' (school) is an example of", "a compound word", "a prefix", "a borrowed word", "an ideophone", "It joins ilé and ìwé."],
          ["H", "The prefix 'àì-' as in 'àìgbọràn' gives the meaning of", "not or without", "the doer of an action", "ownership", "repetition", "Àìgbọràn means disobedience."],
          ["H", "Oní + aṣọ gives", "aláṣọ", "oníaṣọ", "ọlọ́ṣọ", "eláṣọ", "The n becomes l and the vowel matches the noun."],
          ["H", "'Ẹnikẹ́ni' (anyone) is formed by", "repeating a noun with 'kí' in the middle", "adding the prefix àì-", "borrowing from English", "dropping a consonant", "Ẹni + kí + ẹni."],
        ],
      },
      {
        week: 6,
        title: "Standard orthography",
        subtopics: ["What orthography is", "Rules of modern spelling", "Old and new spellings", "Common errors"],
        objectives: ["Explain what orthography is and why a standard is needed", "State the main rules of modern Yoruba spelling", "Convert old spellings to modern ones", "Correct common spelling errors"],
        lesson: {
          title: "Àkọtọ́ òde-òní",
          summary: "Spell Yoruba words according to the standard modern orthography.",
          minutes: 40,
          notes: `## What is orthography?
**Àkọtọ́** means the **correct, agreed way of writing** a language. Yoruba was first written in the nineteenth century by missionaries and by **Bishop Samuel Àjàyí Crowther**. Over the years spellings varied, so a committee revised them, and a **standard orthography was approved in 1974**. It is the form taught in schools and required in examinations.

## Why a standard?
- so that **everyone writes alike**
- so that writing **matches pronunciation**
- to make **reading and teaching** easier

## The main rules
### 1. One sound, one spelling — no doubled or silent letters
| Old | Modern | Meaning |
|---|---|---|
| aiye | **ayé** | world |
| ẹiyẹ | **ẹyẹ** | bird |
| ẹiyẹle | **ẹyẹlé** | pigeon |
| yio | **yóò** | will |
| on | **òun** | he / she (emphatic) |
| nwọn | **wọ́n** | they |
| enia | **ènìyàn** | person |
| pẹpẹiyẹ | **pẹ́pẹ́yẹ** | duck |

### 2. No double consonants
| Old | Modern |
|---|---|
| Ọffa | **Ọ̀fà** |
| Ottun | **Ọ̀tún** |
| Oshogbo | **Òṣogbo** |
| Ebute Metta | **Èbúté Mẹ́ta** |

### 3. "ṣ", not "sh"
| Old | Modern |
|---|---|
| Shagamu | **Ṣàgámù** |
| Ilesha | **Iléṣà** |
| shọ | **ṣọ́** |

### 4. Nasal vowels after m and n
After **m** or **n**, the vowel is already nasal, so **no extra n** is written, and **an** is written **ọn** only where it is so pronounced:
- **ọmọ** (not *ọmọn*); **inú** (not *inún*)

### 5. The syllabic nasal is written "n" (or "m" before b)
| Old | Modern | Meaning |
|---|---|---|
| nlọ | **ń lọ** | is going |
| ng o lọ | **n ó lọ** | I will go |
| orombo | **òroǹbó** | orange |

The progressive marker **ń** is written **separately** from the verb: **Ó ń jẹun.**

### 6. Long vowels are written double
- **dáadáa**, **òótọ́** (truth), **aago** (clock), **Ẹ káàárọ̀**

### 7. Tone marks and the dot below must be written
**ọkọ**, **ọkọ́** and **ọkọ̀** are different words. The mid tone is left unmarked.

### 8. Word division
- pronouns stand apart from verbs: **Mo lọ** (not *Molọ*)
- compound nouns may take a hyphen: **ilé-ìwé**
- contractions are written as pronounced: **nílé**, **lọ́jà**

### 9. Capital letters
Begin sentences and proper nouns with capitals: **Adé, Ìbàdàn, Ọlọ́run, Ọjọ́ Ajé**.

## Common errors
| Wrong | Right | Reason |
|---|---|---|
| Yoruba | **Yorùbá** | tone marks |
| eko | **ẹ̀kọ́** | dot below and tones |
| se | **ṣe** | ṣ, not s |
| enyin | **ẹ̀yin** | no "ny" |
| won | **wọ́n** | dot and tone |
| ogbon | **ọgbọ́n** | dots and tone |

## Checking your work
1. Is every **ẹ, ọ, ṣ** dotted?
2. Is every **high and low tone** marked?
3. Are there any **double consonants** or **silent letters**?
4. Is **ń** separated from the verb?

## Proper names
People may keep old spellings of **personal and place names** on documents (e.g. *Oshodi*), but in Yoruba lessons the standard form is used.`,
          examples: `**Example 1.** Write **aiye** in modern orthography. *Answer:* **ayé**.

**Example 2.** Correct the spelling: **Oshogbo**. *Answer:* **Òṣogbo** — "ṣ", not "sh".

**Example 3.** In which year was the standard orthography approved? *Answer:* **1974**.`,
        },
        questions: [
          ["E", "The Yoruba term for 'orthography' (correct spelling) is", "àkọtọ́", "àkàyé", "àròkọ", "àpètúnpè", "It is the agreed way of writing the language."],
          ["E", "The modern spelling of the old form 'aiye' is", "ayé", "aíyé", "aye-e", "aiyé", "The unsounded 'i' is dropped."],
          ["E", "In modern Yoruba spelling, the sound 'sh' is written as", "ṣ", "sh", "s", "ch", "As in ṣe and Òṣogbo."],
          ["M", "The standard Yoruba orthography now used in schools was approved in", "1974", "1914", "1960", "1999", "It followed the work of a revision committee."],
          ["M", "The modern spelling of the old form 'ẹiyẹ' is", "ẹyẹ", "ẹíyẹ", "eiye", "ẹyiẹ", "Silent letters are not written."],
          ["M", "Which of the following is correctly spelt in the modern orthography?", "Ọ̀fà", "Ọffa", "Offa", "Ọfa-a", "Double consonants are not allowed."],
          ["M", "The modern spelling of the old form 'nwọn' (they) is", "wọ́n", "nwọ́n", "wọnn", "ńwọn", "The initial n is dropped."],
          ["H", "The correct modern way to write 'He is going' is", "Ó ń lọ", "Ó nlọ", "Ónlọ", "Ó n'lọ", "The marker ń is written separately with its tone."],
          ["H", "Long vowels in modern Yoruba spelling are shown by", "writing the vowel twice", "adding the letter h", "underlining the vowel", "using a capital letter", "As in dáadáa and òótọ́."],
          ["H", "The modern spelling of the old form 'enia' (person) is", "ènìyàn", "ẹnia", "eniyan-n", "ẹ̀nìà", "It is spelt as it is pronounced."],
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
        title: "Oral literature",
        subtopics: ["What oral literature is", "Chants and poetry", "Narratives and short forms", "Performers and occasions"],
        objectives: ["Explain what oral literature is", "Identify the main Yoruba oral chants and who performs them", "Identify oral narratives and short forms", "Match each form to its occasion"],
        lesson: {
          title: "Lítírésọ̀ alohùn",
          summary: "Identify the forms of Yoruba oral literature and their performers.",
          minutes: 40,
          notes: `## What is oral literature?
**Lítírésọ̀ alohùn** is literature **composed and passed on by word of mouth** — chanted, sung or told, not written. It is as old as the people themselves and is performed before an audience.

## Features
- handed down **from generation to generation**
- **no single known author**
- **performed** — with voice, drum, dance and costume
- the **audience takes part**
- uses **repetition**, **praise names**, **proverbs** and vivid images
- tied to **occasions and cults**

## A. Poetry — chants (ewì alohùn)
Each chant has its own **tune**, **performers** and **occasion**.
| Chant | Performed by | Associated with |
|---|---|---|
| **ìjálá** | hunters | **Ògún**, god of iron; hunters' gatherings and funerals |
| **ẹ̀sà (iwì egúngún)** | masqueraders and their families | the **egúngún** (ancestral masquerade) cult |
| **rárà** | praise-singers, often with drums | praising kings, chiefs and the wealthy |
| **ẹkún ìyàwó** | a bride | her wedding day |
| **ẹsẹ Ifá** | the **babaláwo** (Ifá priest) | **Ọ̀rúnmìlà**; divination |
| **Ṣàngó-pípè** | devotees of Ṣàngó | the worship of **Ṣàngó** |
| **ọ̀ṣun-pípè / orin Ọ̀ṣun** | devotees of Ọ̀ṣun | the worship of **Ọ̀ṣun** |
| **ọfọ̀ / ògèdè** | herbalists and priests | **incantations** — words believed to have power |
| **oríkì** | relatives, drummers, praise-singers | praise of persons, lineages and towns |
| **orin arò / orin ọ̀fọ̀** | mourners | **dirges** at funerals |
| **orin ọmọdé** | children | play and lullabies |

## B. Prose — narratives (ìtàn)
- **àlọ́ àpagbè** — folktales with songs
- **ìtàn ìwáṣẹ̀** — **myths** of origin: how Odùduwà came down and created land at Ilé-Ifẹ̀
- **ìtàn akọni** — **legends** of heroes and heroines, such as **Mọ́remí** of Ifẹ̀, who gave herself up to save her people
- **ìtàn ìlú** — histories of the founding of towns

## C. Short forms
- **òwe** — proverbs
- **àlọ́ àpamọ̀** — riddles
- **àrọ̀** — word-play / chain rhymes
- **ìpèdè / àkànlò èdè** — idioms

## D. Drama in tradition
**Festivals and masquerade displays** combine costume, dance, drum, chant and acting — the root of Yoruba theatre. The travelling **Alárìnjó** masque troupes were early professional performers.

## The drum as a "speaker"
Because Yoruba is a tone language, the **dùndún** can imitate speech and "recite" oríkì and proverbs.

## Functions of oral literature
- **entertainment**
- **education** and moral training
- **history** — records of lineages and towns
- **religion** — worship of the deities
- **social control** — praise for the good, satire for offenders
- **preserving the language**

## Oral and written literature compared
| Oral | Written |
|---|---|
| spoken, sung, chanted | printed |
| no known author | known author |
| changes with each performance | fixed |
| performed to an audience | read privately |

## Preservation
recording, writing down and teaching these forms; festivals; radio and television.`,
          examples: `**Example 1.** Who chants **ìjálá**? *Answer:* **Hunters**, devotees of Ògún.

**Example 2.** What is **ẹsẹ Ifá**? *Answer:* The **verses of Ifá**, chanted by the **babaláwo** during divination.

**Example 3.** State two features of oral literature. *Answer:* It is **passed on by word of mouth** and has **no known author**.`,
        },
        questions: [
          ["E", "Literature that is passed on by word of mouth is called", "lítírésọ̀ alohùn", "lítírésọ̀ àpilẹ̀kọ", "àkọtọ́", "àròkọ", "Alohùn refers to the voice."],
          ["E", "Ìjálá is the chant of", "hunters", "brides", "children", "traders", "They are devotees of Ògún."],
          ["E", "The chant performed by a bride on her wedding day is", "ẹkún ìyàwó", "rárà", "ẹ̀sà", "ọfọ̀", "It is a poem of farewell."],
          ["M", "Ẹsẹ Ifá is chanted by the", "babaláwo", "onílù", "alárinà", "ọlọ́jà", "He is the priest of Ifá."],
          ["M", "The chant associated with the egúngún (masquerade) cult is", "ẹ̀sà", "ìjálá", "ẹkún ìyàwó", "ọfọ̀", "It is also called iwì egúngún."],
          ["M", "Words believed to have power, recited by herbalists and priests, are called", "ọfọ̀", "òwe", "àlọ́", "oríkì", "They are incantations."],
          ["M", "The deity with whom ìjálá is associated is", "Ògún", "Ọ̀ṣun", "Ṣàngó", "Ọbàtálá", "He is the god of iron and of hunters."],
          ["H", "The heroine of Ifẹ̀ remembered in legend for saving her people is", "Mọ́remí", "Yánníbo", "Ẹfúnṣetán", "Àdùkẹ́", "Her story is an example of ìtàn akọni."],
          ["H", "A feature that distinguishes oral literature from written literature is that it", "has no single known author", "is always printed", "cannot be performed", "never changes", "It belongs to the community."],
          ["H", "The chant used mainly to praise kings, chiefs and wealthy people is", "rárà", "ẹ̀sà", "ìjálá", "àrọ̀", "It is performed by praise-singers, often with drums."],
        ],
      },
      {
        week: 2,
        title: "Written literature",
        subtopics: ["The beginnings of written Yoruba literature", "Prose fiction", "Drama", "Poetry"],
        objectives: ["Outline how written Yoruba literature began", "Identify the features of the Yoruba novel and its pioneers", "Identify features of written Yoruba drama", "Identify features of written Yoruba poetry"],
        lesson: {
          title: "Lítírésọ̀ àpilẹ̀kọ",
          summary: "Identify the three kinds of written Yoruba literature and their pioneers.",
          minutes: 40,
          notes: `## What is written literature?
**Lítírésọ̀ àpilẹ̀kọ** is literature **composed in writing** by a known author. It began after Yoruba was put into writing in the nineteenth century.

## Beginnings
- missionaries and **Bishop Samuel Àjàyí Crowther** produced the first grammar, word list and **Bible translation**
- **Ìwé Ìròhìn** (Abẹ́òkúta, **1859**) — the first Yoruba newspaper, begun by the Rev. Henry Townsend
- early newspapers in Lagos printed stories and poems in serial form
- school readers followed, and then full novels, plays and poems

## The three kinds
| Kind | Yoruba term | Written in |
|---|---|---|
| prose fiction | **ìtàn àròsọ** | sentences and chapters |
| drama | **eré-onítàn (eré oníṣe)** | dialogue, acts and scenes |
| poetry | **ewì** | lines and stanzas |

## 1. Prose fiction (ìtàn àròsọ)
A long invented story told by a narrator.
### The pioneer: D. O. Fágúnwà
**Daniel Ọlọ́runfẹ́mi Fágúnwà** wrote the first full-length Yoruba novel, **Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀** (**1938**) — the adventures of the brave hunter **Àkàrà-ògùn** in a forest of spirits. His other novels include **Igbó Olódùmarè** and **Ìrèké-Oníbùdó**.
His style: journeys full of spirits and wonders; rich descriptive language; proverbs; direct moral teaching to the reader.
### Later novelists
Writers after Fágúnwà turned to **realistic** stories of town life, crime, history and society — among them **Adébáyọ̀ Fálétí**, **Oládẹ̀jọ Òkédìjí** (noted for detective stories), **Akínwùmí Ìṣọ̀lá**, **Afọlábí Ọlábímtán** and **Kọ́lá Akínlàdé**.
### Elements
**ìṣẹ̀lẹ̀ / ìhun ìtàn** (plot), **ibùdó ìtàn** (setting), **ẹ̀dá ìtàn** (characters), **kókó ọ̀rọ̀** (theme), **ọgbọ́n ìsọ̀tàn** (narrative technique).

## 2. Drama (eré-onítàn)
A story written to be **acted on stage**.
- popular theatre grew from the travelling troupes of **Hubert Ògúndé**, **Dúró Ládiípọ̀** and **Kọ́lá Ògúnmọ́lá**
- written plays include historical tragedies and comedies by **Adébáyọ̀ Fálétí**, **Akínwùmí Ìṣọ̀lá**, **Oládẹ̀jọ Òkédìjí** and others
### Features
**ìran** (scenes) and **ìpín** (acts); **ìsọ̀rọ̀ǹgbèsì** (dialogue); **ìtọ́ni orí ìtàgé** (stage directions); characters; conflict; songs, drums and dance.
### Kinds
**eré ìbànújẹ́** (tragedy), **eré aláwàdà / apanilẹ́rìn-ín** (comedy), **eré onítàn ìgbà àtijọ́** (historical play).

## 3. Poetry (ewì àpilẹ̀kọ)
Poems composed in writing, in lines.
- **J. F. Ọdúnjọ** — poems and the **Aláwìíyé** school readers
- **Adébáyọ̀ Fálétí**, **Afọlábí Ọlábímtán**, **Ọlátúnbọ̀sún Ọládàpọ̀** and others
### Features
**ìlà** (lines); **ohùn** and rhythm; **àwítúnwí** (repetition); **àfiwé** (comparison); proverbs; economy of words.
### Themes
good conduct; hard work; the nation; love; death; praise; satire.

## Some literary terms
| Yoruba | English |
|---|---|
| **òǹkọ̀wé** | author |
| **olú ẹ̀dá ìtàn** | main character |
| **kókó ọ̀rọ̀** | theme |
| **ẹ̀kọ́** | lesson, moral |
| **àfiwé tààrà** | simile |
| **àfiwé ẹlẹ́lọ̀ọ́** | metaphor |
| **ìfohunpènìyàn** | personification |
| **àsọdùn / àsọrégèé** | exaggeration |
| **àwítúnwí** | repetition |

## Why study literature?
enjoyment; moral lessons; knowledge of culture and history; better command of the language.

## Note on set books
The texts prescribed for study change from time to time. For each, learn the author, the story, the characters, the themes and the lessons.`,
          examples: `**Example 1.** Who wrote the first full-length Yoruba novel, and when? *Answer:* **D. O. Fágúnwà**, in **1938**.

**Example 2.** Name the three kinds of written literature. *Answer:* **Ìtàn àròsọ (prose), eré-onítàn (drama) and ewì (poetry)**.

**Example 3.** What is **kókó ọ̀rọ̀**? *Answer:* The **theme** of a work.`,
        },
        questions: [
          ["E", "Literature composed in writing by a known author is called", "lítírésọ̀ àpilẹ̀kọ", "lítírésọ̀ alohùn", "àlọ́ àpagbè", "ọfọ̀", "Àpilẹ̀kọ means originally written."],
          ["E", "The author of 'Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀' is", "D. O. Fágúnwà", "J. F. Ọdúnjọ", "Hubert Ògúndé", "Samuel Àjàyí Crowther", "It is the first full-length Yoruba novel."],
          ["E", "The Yoruba term for 'poetry' is", "ewì", "eré", "ìtàn", "àkàyé", "It is written in lines."],
          ["M", "A long invented story told in prose is known as", "ìtàn àròsọ", "eré-onítàn", "ewì", "oríkì", "It is the Yoruba novel."],
          ["M", "The first full-length Yoruba novel was published in", "1938", "1859", "1974", "1960", "It was written by Fágúnwà."],
          ["M", "The hero of Fágúnwà's first novel is the hunter", "Àkàrà-ògùn", "Ìjàpá", "Odùduwà", "Ọ̀rúnmìlà", "He journeys through a forest of spirits."],
          ["M", "A work written to be acted on stage is", "eré-onítàn", "ìtàn àròsọ", "ewì", "lẹ́tà", "It is set out in dialogue."],
          ["H", "The first Yoruba newspaper, begun at Abẹ́òkúta in 1859, was", "Ìwé Ìròhìn", "Aláwìíyé", "Igbó Olódùmarè", "Ìrèké-Oníbùdó", "The Rev. Henry Townsend started it."],
          ["H", "The Yoruba literary term 'kókó ọ̀rọ̀' refers to the", "theme", "setting", "author", "stage", "It is the central idea of a work."],
          ["H", "A feature of Fágúnwà's novels is", "journeys among spirits with direct moral teaching", "detective investigation in modern cities", "letters between lovers", "court-room drama", "His hunters meet strange beings in the forest."],
        ],
      },
      {
        week: 3,
        title: "Traditional festivals",
        subtopics: ["Why festivals are held", "Major Yoruba festivals", "What happens at a festival", "Value of festivals"],
        objectives: ["State why traditional festivals are celebrated", "Name major Yoruba festivals and their towns", "Describe the activities of a festival", "State the value of festivals to the community"],
        lesson: {
          title: "Ọdún ìbílẹ̀",
          summary: "Describe the major traditional festivals of the Yoruba.",
          minutes: 40,
          notes: `## What is a festival?
**Ọdún** means both "year" and "festival" — because most festivals come **once a year**. An **ọdún ìbílẹ̀** is a traditional festival celebrated by a town or a group of worshippers.

## Why festivals are held
- to **honour a deity (òrìṣà)** or the **ancestors**
- to **remember the founding** of the town or a great event
- to **give thanks** for harvest, children and peace
- to **cleanse** the town and pray for the new year
- to **renew the bond** between the king and the people

## Major festivals
| Festival | Town | In honour of |
|---|---|---|
| **Ọdún Ọ̀ṣun** | **Òṣogbo** | **Ọ̀ṣun**, goddess of the river; held at the sacred grove each August; the **Arugbá**, a maiden, carries the calabash of offerings to the river |
| **Ọdún Ẹ̀yọ̀ (Adámú Òrìṣà)** | **Lagos** | performed by white-robed **Ẹ̀yọ̀** masquerades in honour of a departed Oba or eminent chief |
| **Ọdún Egúngún** | many towns (Ìbàdàn, Ọ̀yọ́, Ẹdẹ) | the **ancestors**, who "return" as masquerades |
| **Ọdún Ògún** | **Oǹdó**, Ìrè-Èkìtì | **Ògún**, god of iron |
| **Ọdún Ọlọ́jọ́** | **Ilé-Ifẹ̀** | Ògún and the first dawn; the **Ọọ̀ni** wears the sacred **Arè crown** |
| **Ọdún Ṣàngó** | **Ọ̀yọ́** | **Ṣàngó**, god of thunder and a former Aláàfin |
| **Ọdún Òkèbàdàn** | **Ìbàdàn** | the hill spirit that sheltered the founders |
| **Ojúde Ọba** | **Ìjẹ̀bú-Òde** | homage to the **Awùjalẹ̀**, on the third day after the Muslim Ileya festival; age groups (**rẹ́gbẹ́rẹ́gbẹ́**) parade in fine dress |
| **Ọdún Ìjẹṣu (new yam)** | many towns | thanksgiving for the new yam |
| **Ọdún Ifá** | many towns | **Ọ̀rúnmìlà**, deity of wisdom |
| **Ọdún Orò** | many towns | a cult festival during which women stay indoors |
| **Ọdún Agẹmọ** | **Ìjẹ̀bú** | the Agẹmọ deity |
| **Ọdún Ọbàtálá** | Ilé-Ifẹ̀ and elsewhere | **Ọbàtálá**, deity of creation |

## What happens
1. **preparation** — the date is fixed by the priests and announced; the town is cleaned; new clothes are made
2. **opening rites** — prayers and offerings at the shrine or palace
3. **procession** — priests, chiefs, drummers and worshippers go to the grove, river or market
4. **performance** — drumming (**bàtá** for Ṣàngó and egúngún; **dùndún**), dancing, chanting of oríkì, masquerade displays
5. **feasting** — food and drink are shared; visitors are entertained
6. **closing prayers** — for the king, the town, rain, harvest and children

## People involved
the **ọba** and chiefs; **priests and priestesses** (àbọrẹ̀, ìyálórìṣà, babalórìṣà); drummers; chanters; devotees; the whole town; visitors and tourists.

## Egúngún
The masquerade is regarded as the **spirit of an ancestor** come to bless the living. It is fully covered in cloth; no one is to see or touch the wearer. It is greeted as **"ará ọ̀run"** — a visitor from heaven.

## Value of festivals
- **unity** — sons and daughters come home
- **preservation of culture** — dress, music, chant, craft
- **history** kept alive
- **tourism and trade** — the Ọ̀ṣun grove is a **UNESCO World Heritage Site**
- **entertainment** and rest from work
- **moral teaching** — satire of wrongdoers in some festivals

## Problems
high cost; clashes with some religious groups; restrictions on movement in certain festivals; neglect by the young.

## Religious festivals today
Most Yoruba also keep **Christian** (Christmas, Easter) and **Muslim** (Ileya, the end of Ramadan) festivals, often celebrating with neighbours of other faiths.`,
          examples: `**Example 1.** In which town is the Ọ̀ṣun festival held? *Answer:* **Òṣogbo**.

**Example 2.** What does the egúngún represent? *Answer:* The **spirit of an ancestor** returning to bless the living.

**Example 3.** Give two values of festivals. *Answer:* **Unity** and the **preservation of culture**.`,
        },
        questions: [
          ["E", "The Ọ̀ṣun festival is celebrated in", "Òṣogbo", "Ìbàdàn", "Ìjẹ̀bú-Òde", "Oǹdó", "It is held at the sacred grove by the river."],
          ["E", "The Yoruba word 'ọdún' means both 'year' and", "festival", "market", "drum", "king", "Most festivals come once a year."],
          ["E", "The Ẹ̀yọ̀ festival is associated with", "Lagos", "Ọ̀yọ́", "Ilé-Ifẹ̀", "Abẹ́òkúta", "The masquerades wear flowing white robes."],
          ["M", "The egúngún masquerade represents", "the spirits of the ancestors", "the god of thunder", "the river goddess", "the spirit of the farm", "It is greeted as a visitor from heaven."],
          ["M", "The Ọlọ́jọ́ festival is held in", "Ilé-Ifẹ̀", "Lagos", "Òṣogbo", "Ìjẹ̀bú-Òde", "The Ọọ̀ni wears the sacred Arè crown."],
          ["M", "The Ojúde Ọba festival pays homage to the", "Awùjalẹ̀ of Ìjẹ̀bú", "Aláàfin of Ọ̀yọ́", "Ọọ̀ni of Ifẹ̀", "Aláké of Ẹ̀gbá", "Age groups parade before him in fine dress."],
          ["M", "The Ògún festival honours the god of", "iron", "the river", "wisdom", "smallpox", "Hunters and blacksmiths are his devotees."],
          ["H", "The maiden who carries the calabash of offerings at the Ọ̀ṣun festival is the", "Arugbá", "Ìyálọ́jà", "Alárinà", "Olorì", "She leads the procession to the river."],
          ["H", "The drums most closely associated with the worship of Ṣàngó are the", "bàtá", "gbẹ̀du", "agogo", "ṣẹ̀kẹ̀rẹ̀", "They are also played for egúngún."],
          ["H", "The Ọ̀ṣun grove at Òṣogbo is important to tourism because it is", "a UNESCO World Heritage Site", "the capital of Nigeria", "the largest market in Africa", "a seaport", "Visitors come from many countries."],
        ],
      },
      {
        week: 4,
        title: "Traditional religion and beliefs",
        subtopics: ["Belief in Olódùmarè", "The òrìṣà", "Ifá and divination", "Beliefs about life, destiny and the ancestors"],
        objectives: ["Explain the Yoruba belief in a Supreme Being", "Name major òrìṣà and what each is associated with", "Describe Ifá divination and the babaláwo", "Explain beliefs about destiny, ancestors and life after death"],
        lesson: {
          title: "Ẹ̀sìn àti ìgbàgbọ́ ìbílẹ̀",
          summary: "Explain the main beliefs of Yoruba traditional religion.",
          minutes: 40,
          notes: `## The Supreme Being
The Yoruba believe in **one Supreme God**, called
- **Olódùmarè** — the Almighty
- **Ọlọ́run** — the Owner of heaven
- **Ẹlẹ́dàá** — the Creator
- **Olúwa** — the Lord
He is the creator, the giver of life and the final judge. He has no shrine or image; He is approached through lesser divinities.

## The òrìṣà
The **òrìṣà** are **divinities** who serve as messengers and agents of Olódùmarè. Each has its own area of concern, priests, shrine, colours, foods and taboos.
| Òrìṣà | Associated with | Signs |
|---|---|---|
| **Ọbàtálá (Òrìṣà-ńlá)** | moulding the human body; purity | white cloth |
| **Ọ̀rúnmìlà** | wisdom, knowledge and destiny; **Ifá** | divining chain and tray |
| **Èṣù** | messenger between gods and people; guardian of the crossroads; enforcer | shrine at gates and junctions |
| **Ògún** | iron, war, hunting, roads | iron tools; the dog |
| **Ṣàngó** | thunder and lightning; justice | the double-headed axe (**oṣé**); red |
| **Ọya** | the wind and storm; the River Niger; wife of Ṣàngó | — |
| **Ọ̀ṣun** | the Ọ̀ṣun river; fertility, children, healing | brass; yellow |
| **Yemọja** | motherhood; the Ògùn river and waters | — |
| **Olókun** | the sea; wealth | — |
| **Ṣànpọ̀nná (Ọbalúayé)** | smallpox and disease | — |
| **Òrìṣà-oko** | the farm and harvest | — |
| **Ọ̀sanyìn** | herbs and medicine | — |

**Èṣù** is not "the devil" of Christian and Muslim belief; he is the divine messenger who carries sacrifices and tests people.

## Ifá and divination
**Ifá** is the system of **divination** and the great body of wisdom linked with **Ọ̀rúnmìlà**.
- the priest is the **babaláwo** ("father of secrets")
- he uses the **ọ̀pẹ̀lẹ̀** (divining chain) or **ikin** (sacred palm nuts) on the **ọpọ́n Ifá** (divining tray) dusted with **ìyẹ̀rẹ̀ òsùn** powder
- the signs obtained are the **Odù** — sixteen principal Odù and 256 in all
- each Odù has many verses (**ẹsẹ Ifá**) telling of a past case, the advice given and the outcome
- the babaláwo recites; the client applies the story to his own problem and offers the prescribed **sacrifice (ẹbọ)**
People consult Ifá before marriage, a journey, a new venture, in sickness, and to choose a king.

## Worship
- **shrines (ojúbọ)** and sacred groves
- **priests and priestesses**
- **offerings and sacrifice (ẹbọ)** — kola, palm oil, food, animals
- **prayers**, songs, drumming and dance
- **festivals**
- **taboos (èèwọ̀)** — things forbidden to devotees

## Destiny — orí
Each person is believed to choose a **destiny (orí, àyànmọ́)** in heaven before birth. A person's **orí** is a personal guardian; one prays that one's orí may not fail. Good **character (ìwà)** and effort are still required: destiny does not excuse laziness.

## The ancestors
The dead are believed to continue in **ọ̀run** (heaven) and to watch over their families. They are remembered at family shrines and through **egúngún**. **Reincarnation** is believed in: hence names like **Babátúndé** and **Yétúndé**.

## Àbíkú
A child believed to belong to a band of spirits and to be **born to die repeatedly**. Special names and rites sought to make it stay.

## Good and evil
Belief in **àjẹ́** (witches), **oògùn** (medicine, good or bad) and **èpè** (curses), and in protection through sacrifice, charms and good character.

## Moral teaching
truthfulness; respect for elders; hospitality; chastity; honesty in trade; keeping covenants. Wrongdoing brings shame on the family and punishment from the divinities.

## Today
Most Yoruba are **Christians** or **Muslims**, but traditional festivals, names, proverbs and values remain part of the culture. Yoruba religion also survives abroad — in **Brazil, Cuba and Trinidad**.`,
          examples: `**Example 1.** Give two Yoruba names for the Supreme Being. *Answer:* **Olódùmarè** and **Ọlọ́run**.

**Example 2.** Who is the **babaláwo**? *Answer:* The **priest of Ifá**, who performs divination.

**Example 3.** Which òrìṣà is the god of thunder? *Answer:* **Ṣàngó**.`,
        },
        questions: [
          ["E", "The Yoruba name for the Supreme Being is", "Olódùmarè", "Ògún", "Èṣù", "Ṣàngó", "He is also called Ọlọ́run."],
          ["E", "The Yoruba god of thunder and lightning is", "Ṣàngó", "Ọbàtálá", "Ọ̀rúnmìlà", "Olókun", "His symbol is the double-headed axe."],
          ["E", "The divinities who serve under the Supreme Being are called", "òrìṣà", "ọba", "àgbà", "ẹbí", "Each has its own priests and shrine."],
          ["M", "The priest who performs Ifá divination is the", "babaláwo", "baálé", "alárinà", "ọdẹ", "The title means 'father of secrets'."],
          ["M", "The òrìṣà associated with wisdom and with Ifá is", "Ọ̀rúnmìlà", "Ògún", "Ṣànpọ̀nná", "Ọya", "He is the deity of knowledge and destiny."],
          ["M", "The Yoruba word for sacrifice or offering is", "ẹbọ", "èèwọ̀", "ọfọ̀", "oríkì", "It is prescribed after divination."],
          ["M", "Ọbàtálá is associated with", "moulding the human body and purity", "the sea and wealth", "war and iron", "smallpox", "His devotees wear white."],
          ["H", "In Yoruba belief, a person's chosen destiny is called", "orí or àyànmọ́", "èèwọ̀", "ìlẹ̀kẹ̀", "àrọ̀", "It is believed to be chosen in heaven before birth."],
          ["H", "The divining chain used by the babaláwo is called", "ọ̀pẹ̀lẹ̀", "ọpọ́n", "oṣé", "agogo", "The tray is the ọpọ́n Ifá."],
          ["H", "In traditional Yoruba religion, Èṣù is properly understood as", "the messenger between the divinities and people", "the god of the sea", "the creator of the world", "the god of smallpox", "He carries sacrifices and guards the crossroads."],
        ],
      },
      {
        week: 5,
        title: "Traditional government",
        subtopics: ["The ọba and his palace", "Chiefs and councils", "Government of the town and compound", "Justice and checks on power"],
        objectives: ["Describe the position of the ọba", "Identify chiefs and councils and their duties", "Describe how towns, quarters and compounds were governed", "Explain how justice was done and how power was checked"],
        lesson: {
          title: "Ètò ìṣèlú ìbílẹ̀",
          summary: "Describe the traditional system of government among the Yoruba.",
          minutes: 40,
          notes: `## A kingdom of towns
The Yoruba lived in **towns (ìlú)**, each with its own ruler. Government was **monarchical** — headed by a king — but the king did not rule alone.

## The ọba
The **ọba** (king) is the **political and spiritual head** of the town. He is addressed as **Kábíyèsí** and regarded as **"Aláṣẹ, èkejì òrìṣà"** — the one with authority, second to the gods.
- he is chosen from the **royal families (ìdílé ọlọ́ba)** in turn, by the **kingmakers (afọbajẹ)**, after **Ifá** has been consulted
- he lives in the **palace (ààfin)**
- he wears a **beaded crown (adé)** and carries the staff of office (**ọ̀pá àṣẹ**)
- his wives are **olorì**; a prince or princess is **ọmọ ọba**

### Titles of some ọba
| Title | Town |
|---|---|
| **Ọọ̀ni** | Ilé-Ifẹ̀ |
| **Aláàfin** | Ọ̀yọ́ |
| **Aláké** | Ẹ̀gbá (Abẹ́òkúta) |
| **Awùjalẹ̀** | Ìjẹ̀bú-Òde |
| **Olúbàdàn** | Ìbàdàn |
| **Ọwá Obòkun** | Iléṣà |
| **Dèjì** | Àkúrẹ́ |
| **Èwí** | Adó-Èkìtì |
| **Ṣọ̀ún** | Ògbómọ̀ṣọ́ |
| **Àtáọ́ja** | Òṣogbo |
| **Ọ̀ṣemàwé** | Oǹdó |
| **Ọba of Lagos (Elékòó)** | Lagos |

## Chiefs (àwọn ìjòyè)
The king rules with a **council of chiefs**, who advise him, head the quarters and carry out decisions.
In **Ọ̀yọ́**:
- the **Ọ̀yọ́mèsì** — seven senior chiefs and kingmakers, led by the **Baṣọ̀run**
- the **Ògbóni** — a council of elders linked with the earth
- the **Ààrẹ Ọ̀nà Kakaǹfò** — commander of the army
Other common titles: **Ọ̀túnba / Ọ̀tún** (right-hand chief), **Òsì** (left-hand chief), **Balógun** (war chief), **Ìyálóde** (leader of the women), **Ìyálọ́jà** (head of the market).

## Levels of government
| Level | Head |
|---|---|
| town (**ìlú**) | **ọba** |
| smaller town or village (**abúlé / ìletò**) | **baálẹ̀** |
| quarter (**àdúgbò**) | quarter chief (**ìjòyè àdúgbò**) |
| compound (**agbo ilé**) | **baálé** |
| household | father (**bàbá**) |

Note the difference: **baálẹ̀** — head of a village; **baálé** — head of a compound.

## Other bodies
- **age grades (ẹgbẹ́ / ọ̀wọ́)** — communal work, defence
- **hunters (ọdẹ)** — guards and warriors
- **guilds** of craftsmen and traders
- **cults** such as **Ògbóni** and **Orò**, which helped to enforce decisions

## Making and enforcing law
Laws came from **custom (àṣà)**, the decisions of the king-in-council and the **taboos** of religion. They were announced by the **town crier** with his gong.

## Justice
- minor disputes — settled by the **baálé** in the compound
- quarrels between compounds — by the **quarter chief**
- serious cases — by the **ọba and his chiefs** at the palace court
- oaths and ordeals were sometimes used to find the truth
Punishments: fines, restitution, public disgrace, banishment, and in grave cases death.

## Checks on the king
The ọba was powerful but **not absolute**:
- he had to act on the **advice of his chiefs**
- in Ọ̀yọ́, the **Ọ̀yọ́mèsì** could **reject** a tyrannical Aláàfin, who was then required to end his own life
- the **Ògbóni** checked the Ọ̀yọ́mèsì
- **taboos** bound the king
- the people could show displeasure through songs, protest or migration

## Duties of the ọba
keeping peace; settling disputes; leading in festivals; protecting the town; allocating land; conferring chieftaincy titles.

## Today
Traditional rulers no longer govern, but they remain **custodians of culture**, advise government, settle local disputes and mobilise their people.`,
          examples: `**Example 1.** What is the title of the king of Ilé-Ifẹ̀? *Answer:* The **Ọọ̀ni**.

**Example 2.** Distinguish **baálẹ̀** from **baálé**. *Answer:* **Baálẹ̀** is the head of a **village**; **baálé** is the head of a **compound**.

**Example 3.** How was the Aláàfin's power checked? *Answer:* The **Ọ̀yọ́mèsì** could reject a tyrannical king.`,
        },
        questions: [
          ["E", "The Yoruba word for 'king' is", "ọba", "baálé", "ìjòyè", "olorì", "He is the head of the town."],
          ["E", "The palace of a Yoruba king is called", "ààfin", "àdúgbò", "agbo ilé", "ojúbọ", "The ọba lives there."],
          ["E", "The title of the traditional ruler of Ilé-Ifẹ̀ is", "Ọọ̀ni", "Aláàfin", "Aláké", "Awùjalẹ̀", "Ilé-Ifẹ̀ is the cradle of the Yoruba."],
          ["M", "The title of the traditional ruler of Ọ̀yọ́ is", "Aláàfin", "Olúbàdàn", "Dèjì", "Èwí", "The name means 'owner of the palace'."],
          ["M", "The head of a village or small town is the", "baálẹ̀", "baálé", "olorì", "balógun", "The baálé heads a compound."],
          ["M", "The Yoruba term for chiefs is", "ìjòyè", "ọmọ ọba", "afọbajẹ nìkan", "ẹrú", "They advise the king and head the quarters."],
          ["M", "The Aláké is the traditional ruler of", "Ẹ̀gbá (Abẹ́òkúta)", "Ìjẹ̀bú-Òde", "Àkúrẹ́", "Iléṣà", "His palace is at Aké."],
          ["H", "The council of seven senior chiefs and kingmakers in Old Ọ̀yọ́ was the", "Ọ̀yọ́mèsì", "Ògbóni", "Orò", "Ẹ̀yọ̀", "It was led by the Baṣọ̀run."],
          ["H", "The leader of the women in a Yoruba town holds the title", "Ìyálóde", "Balógun", "Ọ̀túnba", "Baṣọ̀run", "She represents women in the council."],
          ["H", "The Yoruba ọba is described as 'èkejì òrìṣà', meaning that he is", "second to the gods", "the first of the chiefs", "equal to the people", "a servant of the priests", "It shows the sacred nature of kingship."],
        ],
      },
      {
        week: 6,
        title: "Good character",
        subtopics: ["The idea of ọmọlúàbí", "Qualities of a person of good character", "Respect for elders", "Character training in the home"],
        objectives: ["Explain the Yoruba idea of ọmọlúàbí", "List the qualities of a person of good character", "Describe how respect for elders is shown", "Explain how the family and community train a child"],
        lesson: {
          title: "Ìwà ọmọlúàbí",
          summary: "Explain the Yoruba ideal of good character.",
          minutes: 40,
          notes: `## Ọmọlúàbí
An **ọmọlúàbí** is a **person of good character** — well brought up, honest, respectful and useful to the community. It is the highest praise a Yoruba person can receive. The opposite is an **ọmọ àlè / ọmọ burúkú** — a person without home training.

The Yoruba say:
- **"Ìwà lẹwà."** — Character is beauty.
- **"Ìwà rere ni ẹ̀ṣọ́ ènìyàn."** — Good character is a person's adornment.
- **"Orúkọ rere sàn ju wúrà àti fàdákà lọ."** — A good name is better than gold and silver.

## Qualities of an ọmọlúàbí
| Yoruba | English |
|---|---|
| **òtítọ́ / òdodo** | truthfulness, honesty |
| **ọ̀wọ̀ / ìbọ̀wọ̀ fún àgbà** | respect, especially for elders |
| **ìtẹríba** | humility |
| **sùúrù** | patience |
| **iṣẹ́ àṣekára** | hard work |
| **ìgboyà** | courage |
| **inú rere / àánú** | kindness, compassion |
| **ìfẹ́** | love |
| **ìmọ́tótó** | cleanliness |
| **ìkóra-ẹni-níjàánu** | self-control |
| **ọ̀rọ̀ sísọ dáadáa** | good, measured speech |
| **ìtẹ́lọ́rùn** | contentment |
| **ìgbọràn** | obedience |
| **ìfọwọ́sowọ́pọ̀** | co-operation |

## Vices to avoid
**irọ́** (lying), **olè** (stealing), **ọ̀lẹ** (laziness), **ìgbéraga** (pride), **ojúkòkòrò** (greed), **ìlara** (envy), **àfojúdi** (rudeness), **ọ̀rọ̀ ẹ̀yìn** (backbiting), **ìmutípara** (drunkenness).

## Respect for elders
Seniority matters greatly. Respect is shown by
- **greeting first** — boys **prostrate (dọ̀bálẹ̀)**, girls **kneel (kúnlẹ̀)**
- using **ẹ** and **wọ́n**, never **o** or **ó**, for an elder
- **not calling elders by name** — use **Bàbá, Màmá, Ẹ̀gbọ́n, Bùrọ̀dá, Àǹtí**
- **not interrupting** when elders speak
- **running errands** and **carrying loads** for them
- **giving up a seat**
- **receiving with both hands** or the right hand, never the left
- **not looking an elder boldly in the face** when being corrected
The reward: *a child who knows how to wash his hands will eat with elders.*

## Character training
Training begins **at home** (**ẹ̀kọ́ ilé**) and is the work of the whole community.
- **parents** teach by **example**, instruction and correction
- **elders and neighbours** may correct any child — "one person bears a child, but the whole community trains it"
- **folktales, proverbs and songs** carry lessons
- **apprenticeship** teaches a trade and discipline
- **age-mates** learn co-operation through play and communal work
- **religion and taboos (èèwọ̀)** set limits
- good conduct is **praised**; bad conduct is **rebuked or punished**
A badly behaved child brings **shame on the family**, for people ask, *"Whose child is this?"*

## Hospitality and community
- welcoming visitors with **water and food**
- **sharing** with neighbours
- **helping** in times of trouble — **àárò** and **ọ̀wẹ̀** (communal labour), **èsúsú / àjọ** (thrift contributions)
- keeping one's **word** and **promises**

## Ọmọlúàbí today
The ideal applies in **school** (honesty in examinations, respect for teachers, punctuality), **at work**, **online** and in **public life** — refusing bribes, obeying the law, serving others.

## A thought
Education without character is incomplete. The Yoruba hold that a person may be learned or rich, but without **ìwà** is of little worth.`,
          examples: `**Example 1.** Who is an **ọmọlúàbí**? *Answer:* A **person of good character** — honest, respectful and well brought up.

**Example 2.** Give three qualities of an ọmọlúàbí. *Answer:* **Truthfulness (òtítọ́), respect (ọ̀wọ̀) and patience (sùúrù)**.

**Example 3.** How does a Yoruba girl greet an elder? *Answer:* She **kneels (kúnlẹ̀)**.`,
        },
        questions: [
          ["E", "The Yoruba word for 'truth' or 'honesty' is", "òtítọ́", "irọ́", "olè", "ọ̀lẹ", "Irọ́ means a lie."],
          ["E", "'Sùúrù' means", "patience", "pride", "greed", "anger", "It is one of the qualities of good character."],
          ["E", "When greeting an elder, a Yoruba girl traditionally", "kneels", "prostrates", "salutes", "waves", "The act is called kúnlẹ̀."],
          ["M", "The Yoruba word for 'respect' is", "ọ̀wọ̀", "ọwọ́", "owó", "òwò", "With other tones the same letters mean hand, money or trade."],
          ["M", "Which of the following is a vice?", "ojúkòkòrò", "ìtẹríba", "ìmọ́tótó", "inú rere", "It means greed."],
          ["M", "'Ìmọ́tótó' means", "cleanliness", "laziness", "obedience", "courage", "It is a quality of a well-bred person."],
          ["M", "A well-bred Yoruba child addresses an elder brother as", "Ẹ̀gbọ́n or Bùrọ̀dá", "his first name only", "'ìwọ'", "'ọ̀rẹ́ mi'", "Elders are not called by their bare names."],
          ["H", "'Orúkọ rere sàn ju wúrà àti fàdákà lọ' means", "A good name is better than gold and silver", "Gold and silver make a good name", "A rich man has many names", "Names are bought with money", "It stresses the value of reputation."],
          ["H", "Character training in the home is called", "ẹ̀kọ́ ilé", "ẹ̀kọ́ ìwé", "iṣẹ́ ọwọ́", "eré ìdárayá", "It begins with the parents."],
          ["H", "In Yoruba belief, the training of a child is the responsibility of", "the whole community", "the mother alone", "the school only", "the king only", "Any elder may correct a child."],
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
        title: "Composition",
        subtopics: ["Kinds of composition", "Planning a composition", "Parts of a composition", "A sample outline"],
        objectives: ["Identify the kinds of composition", "Plan a composition with an outline", "Write an introduction, body and conclusion", "Use correct language, paragraphs and tone marks"],
        lesson: {
          title: "Àròkọ",
          summary: "Plan and write a composition in Yoruba.",
          minutes: 40,
          notes: `## What is a composition?
**Àròkọ** is a piece of writing in which you **think out your ideas on a topic and set them down in order**. (**rò** = think; **kọ** = write.)

## Kinds of composition
| Kind | Yoruba term | What it does | Sample topic |
|---|---|---|---|
| **narrative** | àròkọ oníròyìn / asọ̀tàn | tells a story or an event | *Ọjọ́ tí n kò lè gbàgbé* (A day I cannot forget) |
| **descriptive** | àròkọ aṣàpèjúwe | describes a person, place or thing | *Ilé-ìwé mi* (My school) |
| **expository** | àròkọ aṣàlàyé | explains how or why | *Bí a ṣe ń se ẹ̀wà* (How beans are cooked) |
| **argumentative** | àròkọ aláríyànjiyàn | argues for or against | *Iṣẹ́ àgbẹ̀ dára ju iṣẹ́ olùkọ́ lọ* (Farming is better than teaching) |
| **letter** | lẹ́tà | informal or formal | *Lẹ́tà sí ọ̀rẹ́* |
| **dialogue** | ìsọ̀rọ̀ǹgbèsì | a conversation | *Ìtàkùrọ̀sọ láàárín ìyá àti ọmọ* |

## Steps
1. **Choose** the topic you know best.
2. **Think** — jot down your ideas.
3. **Outline** — arrange the ideas in order.
4. **Write** — one main idea to each paragraph.
5. **Read over** — correct spelling, tone marks and punctuation.

## Parts of a composition
### 1. Àkọlé — the title
Write it at the top, in the middle.
### 2. Ìfáárà — the introduction
A short paragraph that **introduces the topic** and catches interest. A proverb or a definition may open it.
### 3. Ara àròkọ — the body
**Three or four paragraphs**, each on **one point**, with examples. Join the paragraphs with linking words:
- **Lákọ̀ọ́kọ́** — first
- **Ẹ̀wẹ̀ / Bákan náà** — again; likewise
- **Yàtọ̀ sí èyí** — apart from this
- **Ṣùgbọ́n** — but
- **Nítorí náà** — therefore
### 4. Ìkádìí / Ìgúnlẹ̀ — the conclusion
A short paragraph that **sums up** and gives your final view.

## A sample outline: "Ilé-ìwé mi"
- **Ìfáárà:** name of the school; where it is; when it was founded
- **Ìpín kìíní:** the buildings and compound — classrooms, library, field
- **Ìpín kejì:** the teachers and the principal; the subjects taught
- **Ìpín kẹta:** activities — sports, clubs, cultural day
- **Ìkádìí:** why I love my school

### A sample opening paragraph
> Orúkọ ilé-ìwé mi ni Ilé-Ìwé Gíga Ìrẹ́pọ̀. Ó wà ní ìlú Òṣogbo, ní ìpínlẹ̀ Ọ̀ṣun. A dá a sílẹ̀ ní ọdún 1980. Ilé-ìwé náà tóbi, ó sì lẹ́wà gan-an.
(*My school is Ìrẹ́pọ̀ High School. It is in Òṣogbo, Ọ̀ṣun State. It was founded in 1980. The school is big and very beautiful.*)

## Argumentative composition
- open by **greeting the audience** (chairman, judges, co-debaters) if it is a debate
- **state your side** clearly
- give **three or four reasons**, each with an example
- **answer** the other side
- end by **restating** your position

## Narrative composition
Tell events **in order**; say **who, where, when, what happened and how it ended**; use the past; add how you felt.

## What examiners look for
| Area | Meaning |
|---|---|
| **àkóónú** | content — relevant, sufficient ideas |
| **ìṣètò** | organisation — paragraphs in logical order |
| **ìlò èdè** | expression — correct, varied sentences; proverbs and idioms |
| **àkọtọ́** | mechanics — spelling, tone marks, punctuation |

## Tips
- keep to the **topic** and the **length** asked for
- write **simple, correct** sentences
- use a **proverb or two** — they earn credit
- write **neatly**; mark tones`,
          examples: `**Example 1.** What is **àròkọ**? *Answer:* A **composition** — ideas on a topic thought out and written in order.

**Example 2.** Name the three main parts of a composition. *Answer:* **Ìfáárà (introduction), ara àròkọ (body) and ìkádìí (conclusion)**.

**Example 3.** What kind of composition is "Bí a ṣe ń se ẹ̀wà"? *Answer:* **Expository** — it explains how something is done.`,
        },
        questions: [
          ["E", "The Yoruba term for 'composition' is", "àròkọ", "àkàyé", "àkọtọ́", "àlọ́", "It combines thinking (rò) and writing (kọ)."],
          ["E", "The opening paragraph of a composition is the", "ìfáárà", "ìkádìí", "àkọlé", "ara àròkọ", "It introduces the topic."],
          ["E", "The title of a composition is called", "àkọlé", "ìgúnlẹ̀", "ìpín", "ìṣètò", "It is written at the top."],
          ["M", "A composition that tells a story or recounts an event is", "àròkọ oníròyìn", "àròkọ aṣàpèjúwe", "àròkọ aláríyànjiyàn", "àròkọ aṣàlàyé", "It narrates what happened."],
          ["M", "The topic 'Ilé-ìwé mi' (My school) calls for", "a descriptive composition", "an argumentative composition", "a formal letter", "a dialogue", "It asks the writer to describe a place."],
          ["M", "The closing paragraph of a composition is the", "ìkádìí", "ìfáárà", "àkọlé", "ìsọ̀rọ̀ǹgbèsì", "It sums up the writer's points."],
          ["M", "Each paragraph in the body of a composition should contain", "one main point", "all the points", "only proverbs", "the title", "The point is developed with examples."],
          ["H", "A composition in which the writer supports one side of a question with reasons is", "àròkọ aláríyànjiyàn", "àròkọ oníròyìn", "àròkọ aṣàpèjúwe", "lẹ́tà gbẹ̀fẹ́", "It is used in debates."],
          ["H", "In marking a composition, 'ìlò èdè' refers to", "expression — the quality of the language used", "the length of the title", "the number of paragraphs only", "the handwriting only", "Correct, varied sentences and apt proverbs earn credit."],
          ["H", "The linking word 'Lákọ̀ọ́kọ́' is used in a composition to introduce", "the first point", "the conclusion", "a contrast", "a question", "It means 'first of all'."],
        ],
      },
      {
        week: 2,
        title: "The formal letter",
        subtopics: ["When formal letters are written", "Parts of a formal letter", "Language of a formal letter", "A sample letter"],
        objectives: ["State when a formal letter is required", "Set out the parts of a formal letter", "Use suitable formal language", "Write a short formal letter"],
        lesson: {
          title: "Lẹ́tà àìgbẹ̀fẹ́",
          summary: "Write a formal letter in Yoruba.",
          minutes: 40,
          notes: `## What is a formal letter?
**Lẹ́tà àìgbẹ̀fẹ́** is an **official letter** written to a person **in his or her official position** — a principal, a local government chairman, a manager, an editor. It is used
- to **apply** for a job or admission
- to **ask permission** or make a request
- to **complain** or report
- to **invite** an official

## Parts of a formal letter
| Part | Yoruba | Position |
|---|---|---|
| 1. writer's address | **àdírẹ́sì akọlẹ́tà** | top right |
| 2. date | **déètì** | under the writer's address |
| 3. receiver's address | **àdírẹ́sì agbalẹ́tà** | left, lower down |
| 4. salutation | **ìkíni** | left |
| 5. heading | **àkọlé lẹ́tà** | centre, underlined |
| 6. body | **ara lẹ́tà** | paragraphs |
| 7. closing | **ìparí** | bottom right |
| 8. signature and full name | **ìbuwọ́lù àti orúkọ kíkún** | under the closing |

## How it differs from an informal letter
| | Informal (gbẹ̀fẹ́) | Formal (àìgbẹ̀fẹ́) |
|---|---|---|
| addresses | one | **two** |
| salutation | *Bàbá mi ọ̀wọ́n,* | ***Alàgbà, / Ọ̀gá,*** |
| heading | none | **required** |
| opening greetings | long family greetings | **none** — go straight to the point |
| language | warm, personal | **polite, brief, exact** |
| closing | *Èmi ni ọmọ yín,* | ***Èmi ni tiyín ní tòótọ́,*** |
| name | first name | **signature and full name** |

## Salutation
- **Alàgbà,** — Sir, (to a man)
- **Ìyáàfin,** — Madam,
- **Ọ̀gá mi,** — Sir / Madam (to a superior)

## The body
- **paragraph 1** — state who you are and **why you are writing**
- **paragraph 2** — give the **details or reasons**
- **paragraph 3** — make the **request** and thank the reader

Use **ẹ / yín** throughout. Do not use slang, jokes or family greetings.

## Closing
> **Èmi ni tiyín ní tòótọ́,**
> (ìbuwọ́lù)
> **Adébáyọ̀ Kẹ́hìndé**

## A sample letter
> Ilé-Ìwé Gíga Ìrẹ́pọ̀,
> Òṣogbo.
> Ọjọ́ kẹta, Oṣù Òkúdù, 2025.
>
> Ọ̀gá Àgbà,
> Ilé-Ìwé Gíga Ìrẹ́pọ̀,
> Òṣogbo.
>
> Alàgbà,
>
> **ÌTỌRỌ ÀYÈ LÁTI LỌ SÍ ILÉ**
>
> Mo kọ lẹ́tà yìí láti tọrọ àyè ọjọ́ méjì láti lọ sí ilé. Akẹ́kọ̀ọ́ ni mí ní kíláàsì JSS 3A.
>
> Ìdí tí mo fi ń tọrọ àyè yìí ni pé ìyá mi wà ní ilé-ìwòsàn, bàbá mi sì ti ránṣẹ́ pè mí. Mo fẹ́ lọ ní Ọjọ́bọ̀, kí n sì padà ní Ọjọ́ Àbámẹ́ta.
>
> Mo ṣèlérí pé n ó ṣe gbogbo iṣẹ́ tí mo bá pàdánù. Ẹ ṣé púpọ̀ fún ìrànlọ́wọ́ yín.
>
> Èmi ni tiyín ní tòótọ́,
> (ìbuwọ́lù)
> Adébáyọ̀ Kẹ́hìndé.

*(Summary: a JSS 3A student asks the Principal for two days' leave because his mother is in hospital, promises to make up lost work and thanks him.)*

## Useful words
| Yoruba | English |
|---|---|
| **Ọ̀gá Àgbà** | Principal |
| **tọrọ àyè** | ask permission |
| **ìwé ìbéèrè fún iṣẹ́** | application for a job |
| **ilé-iṣẹ́** | office, company |
| **ìjọba ìbílẹ̀** | local government |
| **alága** | chairman |
| **olóòtú** | editor |
| **ẹ̀sùn** | complaint |

## Marks
both addresses and date; salutation; heading; content; expression; closing with signature and full name.`,
          examples: `**Example 1.** How many addresses has a formal letter? *Answer:* **Two** — the writer's and the receiver's.

**Example 2.** Give the correct closing of a formal letter. *Answer:* **Èmi ni tiyín ní tòótọ́,** followed by signature and full name.

**Example 3.** What comes immediately after the salutation? *Answer:* The **heading (àkọlé lẹ́tà)**.`,
        },
        questions: [
          ["E", "A letter written to a person in an official position is called", "lẹ́tà àìgbẹ̀fẹ́", "lẹ́tà gbẹ̀fẹ́", "àròkọ oníròyìn", "ìsọ̀rọ̀ǹgbèsì", "It is the formal letter."],
          ["E", "A formal letter has how many addresses?", "two", "one", "three", "none", "The writer's and the receiver's."],
          ["E", "A suitable salutation in a formal letter to a man is", "Alàgbà,", "Bàbá mi ọ̀wọ́n,", "Ọ̀rẹ́ mi àtàtà,", "Báwo ni,", "It corresponds to 'Sir'."],
          ["M", "The heading of a formal letter is written", "after the salutation", "before the writer's address", "after the signature", "inside the last paragraph", "It states the subject of the letter."],
          ["M", "The correct closing for a formal letter is", "Èmi ni tiyín ní tòótọ́,", "Èmi ni ọmọ yín,", "Èmi ni ọ̀rẹ́ rẹ,", "Ó dàbọ̀,", "It corresponds to 'Yours faithfully'."],
          ["M", "'Ọ̀gá Àgbà' of a school is the", "Principal", "class captain", "gateman", "school nurse", "Letters asking permission are addressed to him or her."],
          ["M", "Unlike an informal letter, a formal letter does NOT contain", "long family greetings", "a date", "a body", "an address", "The writer goes straight to the point."],
          ["H", "At the end of a formal letter, the writer gives", "a signature and full name", "the first name only", "a nickname", "no name at all", "The reader may not know the writer personally."],
          ["H", "'Mo kọ lẹ́tà yìí láti tọrọ àyè' means", "I write this letter to ask for permission", "I write this letter to greet you", "I write this letter to thank you", "I write this letter to invite you", "Tọrọ àyè means to ask permission."],
          ["H", "The language of a formal letter should be", "polite, brief and exact", "playful and full of jokes", "full of slang", "written in riddles", "It is an official document."],
        ],
      },
      {
        week: 3,
        title: "Translation",
        subtopics: ["What translation is", "Translating sense, not word for word", "Translating simple sentences", "Common difficulties"],
        objectives: ["Explain what translation is", "Translate the sense of a sentence rather than each word", "Translate simple sentences between English and Yoruba", "Avoid common translation errors"],
        lesson: {
          title: "Ìtumọ̀ èdè",
          summary: "Translate simple sentences between English and Yoruba.",
          minutes: 40,
          notes: `## What is translation?
**Ìtumọ̀** is **putting the meaning of what is said in one language into another**. A person who translates writing is a **translator (atúmọ̀)**; one who translates speech on the spot is an **interpreter (ògbufọ̀)**.

## The golden rule
Translate the **sense**, not each word. Every language has its own **word order and idiom**.

| English | Word-for-word (wrong) | Correct Yoruba |
|---|---|---|
| I am hungry. | *Mo jẹ́ ebi.* | **Ebi ń pa mí.** (Hunger is killing me.) |
| I am thirsty. | *Mo jẹ́ òùngbẹ.* | **Òùngbẹ ń gbẹ mí.** |
| I am fine. | *Mo jẹ́ dára.* | **Mo wà dáadáa. / Àlàáfíà ni.** |
| What is your name? | *Kí ni jẹ́ orúkọ rẹ?* | **Kí ni orúkọ rẹ?** |
| How old are you? | *Báwo àgbà ni ìwọ?* | **Ọmọ ọdún mélòó ni ọ́?** |
| I have a headache. | *Mo ní orí fífọ́.* | **Orí ń fọ́ mi.** |
| It is raining. | *Ó ń òjò.* | **Òjò ń rọ̀.** |
| I am happy. | *Mo jẹ́ ayọ̀.* | **Inú mi dùn.** (My inside is sweet.) |
| I am sad. | — | **Inú mi bàjẹ́.** |
| I am tired. | — | **Ó rẹ̀ mí.** |
| I am afraid. | — | **Ẹ̀rù ń bà mí.** |
| I am sleepy. | — | **Oorun ń kùn mí.** |

In Yoruba, **feelings and bodily states happen to the person**: hunger, fear, sleep and tiredness are the subject.

## Steps
1. **Read** the whole sentence and understand it.
2. Find the **subject, verb and object**.
3. Choose the right **tense marker** (ń, ti, yóò) or **negative** (kò, má).
4. Put **describing words after the noun**.
5. **Read your translation aloud** — does it sound natural?
6. Check **tone marks**.

## Differences to remember
| Point | English | Yoruba |
|---|---|---|
| adjective | **big** house | ilé **ńlá** |
| possessive | **my** book | ìwé **mi** |
| number | **three** children | ọmọ **mẹ́ta** |
| plural | children | **àwọn** ọmọ |
| he / she | two words | **ó** for both |
| a / the | articles | none (use **kan**, **náà** when needed) |
| tense | verb changes | marker before the verb |
| respect | "you" for all | **ẹ** for elders |

## English → Yoruba
| English | Yoruba |
|---|---|
| The boy is reading a book. | **Ọmọkùnrin náà ń ka ìwé.** |
| My mother went to the market. | **Ìyá mi lọ sí ọjà.** |
| We have eaten. | **A ti jẹun.** |
| They will come tomorrow. | **Wọn yóò wá lọ́la.** |
| I do not know. | **N kò mọ̀.** |
| Do not go. | **Má lọ.** |
| Where is your father? | **Níbo ni bàbá rẹ wà?** |
| This is a big house. | **Ilé ńlá ni èyí.** |
| Adé is taller than Bọ́lá. | **Adé ga ju Bọ́lá lọ.** |
| Please give me water. | **Ẹ jọ̀ọ́, ẹ fún mi ní omi.** |

## Yoruba → English
| Yoruba | English |
|---|---|
| **Olùkọ́ wa dára.** | Our teacher is good. |
| **Mo fẹ́ jẹ iṣu.** | I want to eat yam. |
| **Kí ni o ń ṣe?** | What are you doing? |
| **Ìwé mi wà lórí tábìlì.** | My book is on the table. |
| **Òjò rọ̀ lánàá.** | It rained yesterday. |
| **Wọn kò tí ì dé.** | They have not yet arrived. |

## Common difficulties
- **idioms and proverbs** — find the equivalent meaning; do not translate the picture literally
- **words with several meanings** — *"light"*: **iná** (lamp), **fúyẹ́** (not heavy)
- **new things** — use the accepted borrowed word: **kọ̀ǹpútà**, **fóònù**
- **names** are not translated

## Why translation matters
It lets people of different languages share news, knowledge, religion and literature. The Yoruba Bible and many school books exist through translation.`,
          examples: `**Example 1.** Translate into Yoruba: "I am hungry." *Answer:* **Ebi ń pa mí**.

**Example 2.** Translate into English: **Ìyá mi lọ sí ọjà.** *Answer:* **My mother went to the market**.

**Example 3.** Why is "Mo jẹ́ ebi" wrong? *Answer:* It is **word-for-word**; Yoruba says hunger "is killing" the person — **Ebi ń pa mí**.`,
        },
        questions: [
          ["E", "Putting the meaning of one language into another is called", "ìtumọ̀", "àkàyé", "àròkọ", "àkọtọ́", "A translator is an atúmọ̀."],
          ["E", "The Yoruba for 'We have eaten' is", "A ti jẹun", "A ń jẹun", "A máa jẹun", "A kò jẹun", "Ti marks a completed action."],
          ["E", "'Olùkọ́ wa dára' means", "Our teacher is good", "Our teacher is tall", "My teacher is bad", "The teacher has come", "Wa means 'our' and dára means 'is good'."],
          ["M", "The correct Yoruba for 'I am thirsty' is", "Òùngbẹ ń gbẹ mí", "Mo jẹ́ òùngbẹ", "Mo ní omi", "Omi ń pa mí", "Thirst is the subject of the Yoruba sentence."],
          ["M", "The correct Yoruba for 'This is a big house' is", "Ilé ńlá ni èyí", "Ńlá ilé ni èyí", "Èyí ńlá ilé", "Ilé ni ńlá èyí", "The adjective follows the noun."],
          ["M", "'Inú mi dùn' is best translated as", "I am happy", "My stomach is sweet", "I am hungry", "I have eaten well", "The idiom expresses joy."],
          ["M", "'Wọn yóò wá lọ́la' means", "They will come tomorrow", "They came yesterday", "They are coming now", "They did not come", "Yóò marks the future and lọ́la is tomorrow."],
          ["H", "A person who translates speech on the spot is called", "ògbufọ̀", "òǹkọ̀wé", "akéwì", "olóòtú", "An atúmọ̀ translates written texts."],
          ["H", "The correct Yoruba for 'I am tired' is", "Ó rẹ̀ mí", "Mo jẹ́ àárẹ̀", "Mo ní rírẹ̀", "Àárẹ̀ ni èmi", "Tiredness is expressed as happening to the person."],
          ["H", "The chief rule of good translation is to", "translate the sense rather than word for word", "keep the word order of the first language", "leave out all idioms", "translate people's names", "Each language has its own order and idiom."],
        ],
      },
      {
        week: 4,
        title: "Idioms and figurative expressions",
        subtopics: ["What an idiom is", "Common idioms and their meanings", "Euphemism", "Figures of speech"],
        objectives: ["Define an idiom", "Explain the meanings of common Yoruba idioms", "Recognise euphemisms used for delicate matters", "Identify simple figures of speech in Yoruba"],
        lesson: {
          title: "Àkànlò èdè àti ọnà èdè",
          summary: "Understand Yoruba idioms and simple figures of speech.",
          minutes: 40,
          notes: `## What is an idiom?
An **idiom** (**àkànlò èdè**) is a **fixed expression whose meaning is different from the ordinary meaning of its words**. It must be learnt as a whole.

## Idiom and proverb
| Idiom (àkànlò èdè) | Proverb (òwe) |
|---|---|
| a phrase, part of a sentence | a complete saying |
| gives a hidden **meaning** | teaches a **lesson** |
| *Ó na pápá bora* | *Igi kan kì í dá igbó ṣe* |

## Common idioms
| Àkànlò èdè | Literal sense | Real meaning |
|---|---|---|
| **na pápá bora** | cover oneself with the field | to **run away** |
| **fi ẹsẹ̀ fẹ́ ẹ** | fan it with the legs | to **flee** |
| **fi imú fínlẹ̀** | sniff the ground with the nose | to **investigate secretly** |
| **gbẹ́sẹ̀ lé** | put the foot on | to **seize, confiscate** |
| **fi àáké kọ́rí** | hang an axe on the head | to **refuse stubbornly** |
| **ṣe ojú ayé** | do "face of the world" | to **pretend; act for show** |
| **ta téru nípàá** | — | to **die** |
| **jẹ́ Ọlọ́run nípè** | answer God's call | to **die** |
| **ya ọ̀lẹ** | turn lazy | to **be idle** |
| **fi ọ̀rọ̀ lọ̀** | offer a matter | to **consult, inform** |
| **pa ọ̀rọ̀ mọ́ra** | wrap a matter in oneself | to **keep a secret** |
| **mú ẹsẹ̀ le** | make the leg strong | to **hold on, persevere** |
| **ẹlẹ́nu méjì** | owner of two mouths | a **deceitful person** |
| **alágbára má mèrò** | strong man without thought | one who uses **force without sense** |
| **ọwọ́ pálábá rẹ̀ ségi** | — | he has been **caught / exposed** |
| **ojú ti í** | — | he is **ashamed** |
| **orí rẹ̀ pé** | his head is complete | he is **intelligent** |
| **inú rẹ̀ dùn** | his inside is sweet | he is **happy** |
| **etí rẹ̀ di** | his ear is blocked | he is **stubborn** |

## Euphemism (àdàpè)
The Yoruba avoid blunt words for **death, sickness and other delicate matters**.
| Blunt | Polite expression |
|---|---|
| the king is dead | **Ọba wàjà** ("the king has gone up to the rafters") |
| an elder is dead | **Ó ti papòdà** / **Ó ti lọ sí ibi àgbà ń rè** |
| he is ill | **Ara rẹ̀ kò yá** ("his body is not quick") |
| to go to the toilet | **Ó lọ gbọnsẹ̀** |

It is disrespectful to say **"Ọba kú"** — one says **"Ọba wàjà"**.

## Figures of speech (ọnà èdè)
| Figure | Yoruba term | Example |
|---|---|---|
| **simile** | àfiwé tààrà | **Ó dúdú bí èédú.** — He is as black as charcoal. (uses **bí**) |
| **metaphor** | àfiwé ẹlẹ́lọ̀ọ́ | **Kìnnìún ni Adé.** — Adé is a lion. |
| **personification** | ìfohunpènìyàn | **Ebi ń pa mí.** — Hunger is "killing" me. |
| **exaggeration** | àsọdùn / àsọrégèé | **Ó sunkún títí omijé rẹ̀ fi di odò.** — He wept until his tears became a river. |
| **repetition** | àwítúnwí | **Ó lọ, ó lọ, ó lọ.** |
| **rhetorical question** | ìbéèrè pèsìjẹ | **Ta ni kò mọ̀ pé ikú wà?** — Who does not know that death exists? |
| **onomatopoeia** | ìfìró-gbé-ìtumọ̀-yọ | **Ó ṣubú gbì.** — He fell with a thud. |
| **pun / wordplay** | ìfọ̀rọ̀dárà | play on words that sound alike but differ in tone |

## Why use idioms and figures?
- to make speech **vivid and beautiful**
- to speak **politely** of unpleasant things
- to **hide meaning** from children or outsiders
- to show **mastery** of the language — a person who uses them well is admired

## In examinations
You may be asked to **give the meaning** of an idiom, **use it in a sentence**, or **name the figure of speech** in a line.

## Using an idiom
> **Nígbà tí olè rí ọlọ́pàá, ó na pápá bora.** — When the thief saw the police, he fled.`,
          examples: `**Example 1.** What is **àkànlò èdè**? *Answer:* An **idiom** — a fixed expression whose meaning differs from the ordinary meaning of its words.

**Example 2.** What does **"Ọba wàjà"** mean? *Answer:* **The king has died** — a respectful euphemism.

**Example 3.** Identify the figure of speech: **Ó dúdú bí èédú.** *Answer:* **Simile (àfiwé tààrà)** — it uses **bí** ("like").`,
        },
        questions: [
          ["E", "The Yoruba term for 'idiom' is", "àkànlò èdè", "òwe", "àlọ́ àpamọ̀", "oríkì", "Its meaning differs from the ordinary meaning of its words."],
          ["E", "The respectful way of saying that a king has died is", "Ọba wàjà", "Ọba kú", "Ọba sùn", "Ọba lọ sí oko", "It is rude to say 'Ọba kú'."],
          ["E", "'Inú rẹ̀ dùn' means that the person is", "happy", "hungry", "ill", "angry", "Literally, 'his inside is sweet'."],
          ["M", "The idiom 'na pápá bora' means to", "run away", "sleep in the field", "plant crops", "cover a field", "It is used of someone who flees."],
          ["M", "'Ó dúdú bí èédú' is an example of", "a simile", "a metaphor", "a euphemism", "a riddle", "The comparison uses 'bí' (like)."],
          ["M", "The idiom 'fi imú fínlẹ̀' means to", "investigate secretly", "smell food", "bow to an elder", "fall down", "Literally, to sniff the ground."],
          ["M", "'Ara rẹ̀ kò yá' is a polite way of saying that a person is", "ill", "lazy", "poor", "late", "Literally, 'his body is not quick'."],
          ["H", "'Kìnnìún ni Adé' (Adé is a lion) is an example of", "a metaphor", "a simile", "onomatopoeia", "repetition", "The comparison is made without 'bí'."],
          ["H", "A person described as 'ẹlẹ́nu méjì' is", "deceitful", "talkative but honest", "very hungry", "a good singer", "Literally, the owner of two mouths."],
          ["H", "The idiom 'gbẹ́sẹ̀ lé' means to", "seize or confiscate", "kick a ball", "climb a hill", "begin a journey", "Literally, to place the foot upon something."],
        ],
      },
      {
        week: 5,
        title: "BECE revision: language",
        subtopics: ["Sounds, tones and syllables", "Parts of speech", "Sentences, tense and negation", "Composition, letters and comprehension"],
        objectives: ["Recall the alphabet, vowels, consonants, tones and syllable types", "Identify the parts of speech", "Form statements, questions, negatives and tenses", "Recall the layout of compositions and letters"],
        lesson: {
          title: "Àtúnyẹ̀wò èdè",
          summary: "Revise the language section of the Yoruba course.",
          minutes: 40,
          notes: `## Sounds and letters
- **alphabet**: 25 letters — A B D E Ẹ F G GB H I J K L M N O Ọ P R S Ṣ T U W Y
- **not used**: c, q, v, x, z
- **oral vowels** (7): a, e, ẹ, i, o, ọ, u
- **nasal vowels** (5): an, ẹn, in, ọn, un
- **consonants** (18)

## Tones
| Tone | Note | Mark |
|---|---|---|
| low (ìsàlẹ̀) | dò | grave accent |
| mid (àárín) | re | unmarked |
| high (òkè) | mi | acute accent |
Example: **ọkọ** (husband), **ọkọ́** (hoe), **ọkọ̀** (vehicle).

## Syllables
Three types: **F** (vowel), **KF** (consonant + vowel), **N** (syllabic nasal). One tone per syllable. **à-bú-rò** = 3.

## Parts of speech (ìsọ̀rí ọ̀rọ̀)
| Yoruba term | English | Examples |
|---|---|---|
| **ọ̀rọ̀-orúkọ** | noun | ilé, Adé, ìfẹ́ |
| **ọ̀rọ̀ arọ́pò-orúkọ** | pronoun | mo, o, ó, a, ẹ, wọ́n |
| **ọ̀rọ̀-ìṣe** | verb | lọ, jẹ, rà |
| **ọ̀rọ̀-àpèjúwe** | adjective | ńlá, tuntun, dúdú |
| **ọ̀rọ̀-àpọ́nlé** | adverb | kíákíá, gan-an |
| **ọ̀rọ̀-atọ́kùn** | preposition | ní, sí, lórí |
| **ọ̀rọ̀-asopọ̀** | conjunction | àti, ṣùgbọ́n, nítorí |

## Pronouns
| | subject | emphatic | possessive |
|---|---|---|---|
| I | mo | èmi | mi |
| you | o | ìwọ | rẹ |
| he / she | ó | òun | rẹ̀ |
| we | a | àwa | wa |
| you (pl.) | ẹ | ẹ̀yin | yín |
| they | wọ́n | àwọn | wọn |

## The sentence
Order: **subject – verb – object**. Describing words **follow** the noun.

## Tense and aspect
| Marker | Meaning | Example |
|---|---|---|
| — | past | Mo lọ |
| ń | continuous | Mo ń lọ |
| ti | perfect | Mo ti lọ |
| yóò / máa | future | Màá lọ |
| máa ń | habitual | Mo máa ń lọ |

## Negation
**kò** (statement), **kò tí ì** (not yet), **kò ní í** (future), **kì í** (habit), **má** (command), **kọ́** (identification), **kò sí** (there is none).

## Questions
**Ṣé…?**, **Kí ni…?**, **Ta ni…?**, **Níbo ni…?**, **Ìgbà wo ni…?**, **Báwo ni…?**, **Èéṣe…?**, **Mélòó…?**, **Èló…?**

## Sentence types
- by function: àlàyé, ìbéèrè, àṣẹ, ìyanu
- by structure: simple (abọ́dé), compound (alákànpọ̀), complex (oníbọ̀)

## Word formation
prefixes (**ì-, à-, a-, olù-, àì-, oní-**); reduplication (**lílọ, kíákíá**); compounding (**ilé-ìwé**); borrowing (**tábìlì**).

## Numbers
1–10: ọ̀kan, èjì, ẹ̀ta, ẹ̀rin, àrún, ẹ̀fà, èje, ẹ̀jọ, ẹ̀sán, ẹ̀wá. Tens: ogún, ọgbọ̀n, ogójì, àádọ́ta, ọgọ́ta, àádọ́rin, ọgọ́rin, àádọ́rùn-ún, ọgọ́rùn-ún. Hundreds: igba, ọ̀ọ́dúnrún, irinwó … ẹgbẹ̀rún.

## Orthography
1974 standard: no silent or double letters (**ayé**, **Ọ̀fà**); **ṣ** not *sh*; **ń** written separately; tone marks and dots required.

## Composition and letters
- **àròkọ**: àkọlé → ìfáárà → ara → ìkádìí
- **lẹ́tà gbẹ̀fẹ́**: one address; warm greetings; first name
- **lẹ́tà àìgbẹ̀fẹ́**: two addresses; heading; *Èmi ni tiyín ní tòótọ́*; full name

## Comprehension
read twice; answer briefly in full sentences; "why" answers begin **Nítorí pé…**

## Examination advice
- read each question **to the end**
- in objective questions, **watch the tone marks** — options may differ only in tone
- write clearly and mark tones in essay answers`,
          examples: `**Example 1.** Name the seven parts of speech in Yoruba. *Answer:* **Ọ̀rọ̀-orúkọ, arọ́pò-orúkọ, ìṣe, àpèjúwe, àpọ́nlé, atọ́kùn, asopọ̀**.

**Example 2.** Give the negative of "Mo ti lọ". *Answer:* **N kò tí ì lọ** (I have not yet gone).

**Example 3.** How many syllables are in **olùkọ́**? *Answer:* **Three** — o-lù-kọ́.`,
        },
        questions: [
          ["E", "In the sentence 'Bọ́lá ń ka ìwé', the word 'ka' is", "a verb", "a noun", "an adjective", "a preposition", "It tells what Bọ́lá is doing."],
          ["E", "The word 'tuntun' in 'bàtà tuntun' is", "an adjective", "a verb", "a pronoun", "a conjunction", "It describes the noun bàtà."],
          ["E", "The number of syllables in 'olùkọ́' is", "three", "two", "four", "five", "It divides as o-lù-kọ́."],
          ["M", "In 'Ìwé wà lórí tábìlì', the word 'lórí' is", "a preposition", "a noun", "a verb", "an adverb of time", "It shows the position of the book."],
          ["M", "The negative of 'Mo ti lọ' is", "N kò tí ì lọ", "N kò ní í lọ", "Má lọ", "Mo kì í lọ", "Kò tí ì means 'not yet'."],
          ["M", "The word 'ṣùgbọ́n' in 'Ó wá, ṣùgbọ́n kò dúró' is", "a conjunction", "a preposition", "an adjective", "a noun", "It joins two clauses and shows contrast."],
          ["M", "Which of the following is correctly spelt in the standard orthography?", "ẹyẹ", "ẹiyẹ", "eyẹ́ẹ", "ẹyyẹ", "Silent letters are not written."],
          ["H", "In 'Adé sáré kíákíá', the word 'kíákíá' is", "an adverb", "an adjective", "a verb", "a pronoun", "It tells how Adé ran."],
          ["H", "Which sentence shows a habitual action?", "Mo máa ń jí ní kùtùkùtù", "Mo ti jí", "Mo jí lánàá", "Màá jí lọ́la", "Máa ń marks what is done regularly."],
          ["H", "The possessive pronoun 'rẹ̀' with a low tone means", "his or her", "your", "my", "our", "'Rẹ' with a mid tone means 'your'."],
        ],
      },
      {
        week: 6,
        title: "BECE revision: literature and culture",
        subtopics: ["Oral and written literature", "Proverbs, riddles, idioms and oríkì", "Customs: naming, marriage, dress, greetings", "Festivals, religion, government and character"],
        objectives: ["Recall the forms of oral and written literature", "Recall proverbs, riddles, idioms and praise poetry", "Recall the main Yoruba customs", "Recall festivals, beliefs, traditional government and the ọmọlúàbí ideal"],
        lesson: {
          title: "Àtúnyẹ̀wò lítírésọ̀ àti àṣà",
          summary: "Revise the literature and culture sections of the Yoruba course.",
          minutes: 40,
          notes: `## Literature
### Oral (alohùn)
| Form | Performer / occasion |
|---|---|
| **ìjálá** | hunters; Ògún |
| **ẹ̀sà / iwì** | egúngún |
| **rárà** | praise-singers; kings and chiefs |
| **ẹkún ìyàwó** | bride |
| **ẹsẹ Ifá** | babaláwo |
| **ọfọ̀ / ògèdè** | incantation |
| **oríkì** | praise of person, lineage, town |
| **àlọ́ àpamọ̀** | riddle |
| **àlọ́ àpagbè** | folktale with songs — **Ìjàpá**, the tortoise |
| **òwe** | proverb |

### Written (àpilẹ̀kọ)
- **ìtàn àròsọ** — the novel; pioneer **D. O. Fágúnwà** (*Ògbójú Ọdẹ nínú Igbó Irúnmọlẹ̀*, 1938)
- **eré-onítàn** — drama; theatre pioneers Ògúndé, Ládiípọ̀, Ògúnmọ́lá
- **ewì** — poetry; J. F. Ọdúnjọ
- terms: **òǹkọ̀wé** (author), **ẹ̀dá ìtàn** (character), **ibùdó ìtàn** (setting), **kókó ọ̀rọ̀** (theme), **ẹ̀kọ́** (lesson)

### Figures of speech
àfiwé tààrà (simile), àfiwé ẹlẹ́lọ̀ọ́ (metaphor), ìfohunpènìyàn (personification), àsọdùn (exaggeration), àwítúnwí (repetition).

## Culture
### Greetings (ìkíni)
Ẹ káàárọ̀, Ẹ káàsán, Ẹ kúùrọ̀lẹ́, Ẹ káalẹ́; **Ẹ kú** + occasion; boys prostrate, girls kneel; **ẹ** for elders.

### Names (orúkọ)
- **àmútọ̀runwá**: Táíwò, Kẹ́hìndé, Ìdòwú, Ìgè, Òjó, Àìná, Dàda
- **àbísọ**: Babátúndé, Yétúndé, Abíọ́dún, Ayọ̀délé
- **àbíkú** names: Dúrójayé, Málọmọ́
- **oríkì**: Àdùkẹ́, Àkànbí
- naming on the **eighth day**, with honey, salt, kola, bitter kola, alligator pepper, water, oil

### Marriage (ìgbéyàwó)
ìfojúsóde → alárinà → ìwádìí → ìjọ́hẹn → ìtọrọ → **ìdána** → ìgbéyàwó; **owó orí**; **ẹkún ìyàwó**.

### Dress (aṣọ)
- men: bùbá, ṣòkòtò, agbádá, fìlà
- women: bùbá, ìró, gèlè, ìpèlé
- fabrics: aṣọ òkè (ẹtù, sányán, àlàárì), àdìrẹ

### Occupations (iṣẹ́)
àgbẹ̀, ọdẹ, alágbẹ̀dẹ, ahunṣọ, aláró, amọ̀kòkò, gbẹ́nàgbẹ́nà, onílù, oníṣòwò.

### Food (oúnjẹ)
iyán, àmàlà, ẹ̀bà, ẹ̀wà, àkàrà, mọ́ínmọ́ín, ewédú, gbẹ̀gìrì, ẹ̀gúsí.

### Games and music
ayò, bojúbojú, ìjàkadì; dùndún, bàtá, ṣẹ̀kẹ̀rẹ̀, agogo.

### Festivals (ọdún)
| Festival | Town |
|---|---|
| Ọ̀ṣun | Òṣogbo |
| Ẹ̀yọ̀ | Lagos |
| Ọlọ́jọ́ | Ilé-Ifẹ̀ |
| Ojúde Ọba | Ìjẹ̀bú-Òde |
| Ṣàngó | Ọ̀yọ́ |
| Ògún | Oǹdó |
| Egúngún | many towns |

### Religion (ẹ̀sìn)
**Olódùmarè**; òrìṣà — Ọbàtálá, Ọ̀rúnmìlà, Èṣù, Ògún, Ṣàngó, Ọ̀ṣun, Yemọja; **Ifá** and the **babaláwo**; **ẹbọ**; **orí** (destiny); ancestors and egúngún.

### Government (ìṣèlú)
**ọba** in the **ààfin**; **ìjòyè**; **Ọ̀yọ́mèsì**; **baálẹ̀** (village) and **baálé** (compound). Titles: Ọọ̀ni (Ifẹ̀), Aláàfin (Ọ̀yọ́), Aláké (Ẹ̀gbá), Awùjalẹ̀ (Ìjẹ̀bú), Olúbàdàn (Ìbàdàn).

### Character (ìwà)
**ọmọlúàbí** — òtítọ́, ọ̀wọ̀, sùúrù, ìtẹríba, iṣẹ́ àṣekára. *Ìwà lẹwà.*

### History
origin at **Ilé-Ifẹ̀**; **Odùduwà**; Yoruba states — Lagos, Ogun, Oyo, Osun, Ondo, Ekiti, parts of Kwara and Kogi.

## Proverbs to remember
- *Igi kan kì í dá igbó ṣe.* — co-operation
- *Bí ọmọdé bá mọ ọwọ́ wẹ̀, á bá àgbà jẹun.* — good conduct brings honour
- *Iṣẹ́ ni òògùn ìṣẹ́.* — work cures poverty
- *Ilé là á wò ká tó sọ ọmọ lórúkọ.* — consider before acting

## How to revise
- make a **card** for each topic: three facts, two Yoruba terms, one example
- practise **explaining proverbs and idioms**
- be able to **describe a custom in steps**
- learn the **titles of ọba** and the **towns of festivals**`,
          examples: `**Example 1.** Match each chant to its performer: ìjálá, ẹkún ìyàwó, ẹsẹ Ifá. *Answer:* **Hunters; the bride; the babaláwo**.

**Example 2.** Name the festival of Ìjẹ̀bú-Òde held in honour of the Awùjalẹ̀. *Answer:* **Ojúde Ọba**.

**Example 3.** Give the order of the main steps in traditional marriage. *Answer:* **Alárinà → ìwádìí → ìtọrọ → ìdána → ìgbéyàwó**.`,
        },
        questions: [
          ["E", "Which of the following is a form of Yoruba oral poetry?", "ìjálá", "ìtàn àròsọ", "lẹ́tà gbẹ̀fẹ́", "àkọtọ́", "It is chanted by hunters."],
          ["E", "Which pair of names is given to twins?", "Táíwò and Kẹ́hìndé", "Ìdòwú and Àlàbá", "Òjó and Àìná", "Dàda and Ìgè", "The first-born and the second-born."],
          ["E", "A Yoruba woman's full traditional dress consists of", "ìró, bùbá and gèlè", "agbádá, ṣòkòtò and fìlà", "dàńṣíkí and fìlà", "ìlẹ̀kẹ̀ only", "Ìpèlé or ìborùn may be added."],
          ["M", "Which festival is correctly matched with its town?", "Ọlọ́jọ́ — Ilé-Ifẹ̀", "Ẹ̀yọ̀ — Ọ̀yọ́", "Ọ̀ṣun — Lagos", "Ojúde Ọba — Òṣogbo", "The Ọọ̀ni wears the Arè crown at it."],
          ["M", "Which title is correctly matched with its town?", "Olúbàdàn — Ìbàdàn", "Aláké — Ìjẹ̀bú-Òde", "Awùjalẹ̀ — Abẹ́òkúta", "Aláàfin — Ilé-Ifẹ̀", "The others are wrongly paired."],
          ["M", "In a Yoruba novel, 'ẹ̀dá ìtàn' refers to", "the characters", "the setting", "the title", "the publisher", "They are the people in the story."],
          ["M", "The correct order of these stages of traditional marriage is", "ìwádìí, ìtọrọ, ìdána", "ìdána, ìwádìí, ìtọrọ", "ìtọrọ, ìdána, ìwádìí", "ìdána, ìtọrọ, ìwádìí", "Inquiry comes first; the engagement comes after the formal request."],
          ["H", "Which of the following is NOT an òrìṣà?", "Fágúnwà", "Ọbàtálá", "Ọ̀ṣun", "Ògún", "He was a novelist."],
          ["H", "Which statement about Yoruba traditional government is correct?", "The ọba ruled with the advice of his chiefs", "The ọba was chosen by all adults in an election", "The baálé ruled the whole kingdom", "There were no checks on the ọba", "He was powerful but not absolute."],
          ["H", "Items such as honey, salt, kola nut and alligator pepper are used together at", "the naming ceremony", "the hunters' funeral", "the Ẹ̀yọ̀ festival only", "a game of ayò", "Each stands for a prayer for the child."],
        ],
      },
    ],
  },
];
