import type { TermPlan } from "../types";

/** JSS3 Igbo — original Precious PS content following the national Basic Education structure. Explanations are given in English with Igbo terms and examples. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Ordinal numbers, time and money",
        subtopics: ["Ordinal numbers", "Telling the time", "Dates and age", "Fractions and repeated numbers"],
        objectives: ["Form ordinal numbers with 'nke'", "Tell the time in Igbo", "Say dates and ages", "Use words for half, both, twice and each"],
        lesson: {
          title: "Ọnụọgụ n'ọrụ: ọnọdụ, oge na ego",
          summary: "Use Igbo numbers for position, time, dates and money.",
          minutes: 40,
          notes: `## Ordinal numbers (ọnụọgụ ọnọdụ)
Ordinals show **position**. They are formed with **nke** before the number; "first" uses **mbụ**.
| Position | Igbo |
|---|---|
| 1st | **nke mbụ** |
| 2nd | **nke abụọ** |
| 3rd | **nke atọ** |
| 4th | **nke anọ** |
| 5th | **nke ise** |
| 10th | **nke iri** |
| 20th | **nke iri abụọ** |
| last | **nke ikpeazụ** |

- **nwa nke atọ** — the third child
- **ụbọchị nke asaa** — the seventh day
- **Obi mere nke abụọ n'ule.** — Obi came second in the examination.
- **onye mbụ** — the first person; **ọnọdụ mbụ** — first position

## Three uses of a number
| Use | Example | Meaning |
|---|---|---|
| counting | **abụọ** | two |
| with a noun | **akwụkwọ abụọ** | two books |
| position | **akwụkwọ nke abụọ** | the second book |

## Telling the time
**Elekere** means clock, hour or o'clock; **nkeji** means minute; **ọkara** means half.
| Igbo | English |
|---|---|
| **Gịnị na-akụ? / Elekere ole ka ọ kụrụ?** | What time is it? |
| **Ọ kụrụ elekere atọ.** | It is three o'clock. |
| **elekere atọ na ọkara** | half past three |
| **elekere anọ na nkeji iri** | ten minutes past four |
| **ọ fọrọ nkeji ise ka ọ kụọ elekere isii** | five minutes to six |
| **elekere asatọ nke ụtụtụ** | eight o'clock in the morning |
| **elekere asaa nke abalị** | seven o'clock at night |

## Dates and age
- **Ụbọchị mbụ n'ọnwa Ọktoba** — 1st October
- **Taa bụ ụbọchị nke iri n'ọnwa Mee.** — Today is the tenth of May.
- **A mụrụ m n'afọ 2012.** — I was born in 2012.
- **Adị m afọ iri na anọ.** — I am fourteen years old.

## Money
- **naịra iri ise** — ₦50
- **narị naịra abụọ** — ₦200
- **puku naịra ise** — ₦5,000
- **nde naịra** — one million naira
- **ọkara naịra** — half a naira (fifty kobo)

## Fractions
| Igbo | English |
|---|---|
| **ọkara** | half |
| **otu ụzọ n'ụzọ atọ** | one third |
| **otu ụzọ n'ụzọ anọ** | one quarter |
| **ụzọ abụọ n'ụzọ atọ** | two thirds |

## Repeated and grouped numbers
| Igbo | English |
|---|---|
| **otu ugboro** | once |
| **ugboro abụọ** | twice |
| **ugboro atọ** | three times |
| **abụọ abụọ** | two each; in twos |
| **ha abụọ** | both of them |
| **ha niile** | all of them |
| **naanị otu** | only one |
| **ọtụtụ** | many |
| **ole na ole** | a few |

## Arithmetic words
**mgbakọ** (addition), **mwepụ** (subtraction), **mmụba** (multiplication), **nkewa** (division). Mathematics as a subject is **Mgbakọ na Mwepụ**.
- **Abụọ na atọ bụ ise.** — Two and three are five.`,
          examples: `**Example 1.** Translate "the third child" and "the first day". *Answer:* **nwa nke atọ** and **ụbọchị mbụ**.

**Example 2.** Say "It is three o'clock" and "half past three". *Answer:* **Ọ kụrụ elekere atọ** and **elekere atọ na ọkara**.

**Example 3.** What do **ugboro abụọ** and **ha abụọ** mean? *Answer:* **Twice** and **both of them**.`,
        },
        questions: [
          ["E", "'Nke abụọ' means", "the second", "two", "twice", "twelve", "Nke before a number makes it an ordinal."],
          ["E", "The Igbo word for 'half' is", "ọkara", "nkeji", "elekere", "ugboro", "As in 'elekere atọ na ọkara'."],
          ["E", "'Nke mbụ' means", "the first", "the last", "the tenth", "only one", "Mbụ is used instead of otu."],
          ["M", "'Elekere atọ' means", "three o'clock", "three days", "three minutes", "the third hour of sleep", "Elekere means clock or hour."],
          ["M", "'Ugboro abụọ' means", "twice", "two each", "both", "second", "Ugboro means 'times'."],
          ["M", "'Nke ikpeazụ' means", "the last", "the first", "the middle", "the next", "It is the final position."],
          ["M", "'Adị m afọ iri na anọ' means", "I am fourteen years old", "I have fourteen books", "I live at number fourteen", "I was born in the fourth month", "Afọ means year."],
          ["H", "'Elekere anọ na nkeji iri' is", "ten minutes past four", "ten minutes to four", "four minutes past ten", "half past four", "Nkeji means minute."],
          ["H", "'Otu ụzọ n'ụzọ anọ' means", "one quarter", "one third", "four times", "one and four", "Literally, 'one part in four parts'."],
          ["H", "'Ha abụọ' means", "both of them", "two each", "the second of them", "twenty of them", "It refers to two people or things together."],
        ],
      },
      {
        week: 2,
        title: "Adverbs",
        subtopics: ["What an adverb is", "Adverbs of manner and degree", "Adverbs of time and place", "Suffixes with adverbial meaning"],
        objectives: ["Define an adverb", "Use adverbs of manner and degree", "Use adverbs of time and place", "Recognise verb suffixes that add adverbial meaning"],
        lesson: {
          title: "Nkwuwa",
          summary: "Use Igbo adverbs to tell how, when and where an action happens.",
          minutes: 40,
          notes: `## What is an adverb?
An **adverb** (**nkwuwa**) tells more about a **verb** — **how, when, where or how much** an action is done.

## Position
Igbo adverbs normally come **after the verb**, usually at the end of the sentence.

## Adverbs of manner (how?)
Many are formed by **repeating a word**.
| Igbo | English | Example |
|---|---|---|
| **ọsọ ọsọ / ngwa ngwa** | quickly | **Ọ gbara ọsọ ngwa ngwa.** — He ran quickly. |
| **nwayọọ nwayọọ** | slowly, gently | **Ọ na-aga nwayọọ nwayọọ.** — He is walking slowly. |
| **nke ọma** | well | **Ọ gụrụ akwụkwọ nke ọma.** — He read well. |
| **duu** | silently | **Ha nọ duu.** — They sat silently. |
| **kwem** | firmly | **O guzoro kwem.** — He stood firm. |
| **wara wara** | at once, briskly | **Mee ya wara wara.** — Do it at once. |

## Adverbs of degree (how much?)
| Igbo | English | Example |
|---|---|---|
| **nke ukwuu** | very much | **Ọ dị mma nke ukwuu.** — It is very good. |
| **ntakịrị** | a little | **O riri ntakịrị.** — He ate a little. |
| **kpamkpam** | completely | **Ọ gwụla kpamkpam.** — It is completely finished. |
| **nnọọ** | really, very | **Ọ mara mma nnọọ.** — She is really beautiful. |
| **ma ọlị** | at all | **Ọ bịaghị ma ọlị.** — He did not come at all. |
| **karịa** | more | **Ọ na-arụ ọrụ karịa.** — He works more. |

## Adverbs of time (when?)
**taa** (today), **ụnyaahụ** (yesterday), **echi** (tomorrow), **ugbu a** (now), **mgbe niile** (always), **mgbe ụfọdụ** (sometimes), **ọzọ** (again), **na mbụ** (at first), **n'oge** (on time), **kwa ụbọchị** (every day).
- **M ga-abịa echi.** — I will come tomorrow.
- **Ọ na-abịa ụlọ akwụkwọ n'oge.** — He comes to school on time.

## Adverbs of place (where?)
**ebe a** (here), **ebe ahụ** (there), **n'elu** (above), **n'ala** (below), **n'èzí** (outside), **n'ụlọ** (at home), **ebe niile** (everywhere).
- **Bịa ebe a.** — Come here.

## Suffixes with adverbial meaning
Igbo often adds a **suffix to the verb** where English uses an adverb. These are called **extensional suffixes**.
| Suffix | Meaning | Example |
|---|---|---|
| **-cha** | completely | **Richaa nri gị.** — Eat up your food. |
| **-kwa** | also, again | **Bịakwa.** — Come again. |
| **-kwu** | more | **Tinyekwuo.** — Add more. |
| **-sị / -si ike** | hard, well | **Gbasie ọsọ ike.** — Run hard. |
| **-gide** | keep on | **Gụgide.** — Keep reading. |
| **-kọ** | together | **Ha gakọrọ.** — They went together. |
| **-ta / -te** | towards the speaker | **Zụta akwụkwọ.** — Buy and bring a book. |
| **-pụ** | out, away | **Gapụ.** — Go out. |
| **-gharị** | about, around | **Ọ na-agagharị.** — He is walking about. |
| **-ghachi** | back | **Lọghachi.** — Come back. |

## Sound words (ideophones)
Vivid words that picture a sound or manner:
- **Ọ dara gbim.** — He fell with a thud.
- **Mmiri na-ezo kpọọ kpọọ.** — The rain is pattering.
- **Ebe niile dere juu.** — Everywhere was dead quiet.

## Find the adverb
> **Nwa ahụ kwuru okwu nwayọọ nwayọọ.** — The child spoke *gently*.`,
          examples: `**Example 1.** Translate "He ran quickly." *Answer:* **Ọ gbara ọsọ ngwa ngwa** (or *ọsọ ọsọ*).

**Example 2.** What does **nke ukwuu** mean? *Answer:* **Very much**.

**Example 3.** What does the suffix **-cha** add in **Richaa nri gị**? *Answer:* The meaning **"completely"** — "Eat up your food".`,
        },
        questions: [
          ["E", "The Igbo term for 'adverb' is", "nkwuwa", "nkọwaaha", "aha", "mbuụzọ", "It tells more about a verb."],
          ["E", "'Ngwa ngwa' means", "quickly", "slowly", "quietly", "badly", "Ọsọ ọsọ has the same meaning."],
          ["E", "'Ọ dị mma nke ukwuu' means", "It is very good", "It is not good", "It is a little good", "It was good before", "Nke ukwuu means 'very much'."],
          ["M", "'Nwayọọ nwayọọ' means", "slowly, gently", "at once", "loudly", "completely", "It is formed by repetition."],
          ["M", "In 'Nwa ahụ kwuru okwu nwayọọ nwayọọ', the adverb is", "nwayọọ nwayọọ", "nwa ahụ", "kwuru", "okwu", "It tells how the child spoke."],
          ["M", "'Ugbu a' is an adverb of", "time", "place", "manner", "degree", "It means 'now'."],
          ["M", "'Bịakwa' means", "Come again", "Come quickly", "Come alone", "Come out", "The suffix -kwa means 'also, again'."],
          ["H", "Verb suffixes such as -cha, -kọ and -gharị, which add adverbial meaning, are called", "extensional suffixes", "pronouns", "prepositions", "conjunctions", "They extend the meaning of the verb root."],
          ["H", "'Ha gakọrọ' means", "They went together", "They went back", "They went out", "They went about", "The suffix -kọ means 'together'."],
          ["H", "'Kpamkpam' is an adverb meaning", "completely", "slightly", "silently", "slowly", "As in 'Ọ gwụla kpamkpam'."],
        ],
      },
      {
        week: 3,
        title: "Conjunctions",
        subtopics: ["What a conjunction is", "Joining words", "Joining sentences", "Conjunctions of reason, condition and time"],
        objectives: ["Define a conjunction", "Join words with na and ma ọ bụ", "Join sentences with mana, ma and wee", "Use n'ihi na, ọ bụrụ na, mgbe and tupu"],
        lesson: {
          title: "Njikọ",
          summary: "Join words and sentences with Igbo conjunctions.",
          minutes: 40,
          notes: `## What is a conjunction?
A **conjunction** (**njikọ**) is a word that **joins** words, phrases or sentences.

## Joining words and phrases
| Igbo | English | Example |
|---|---|---|
| **na** | and | **Obi na Ada** — Obi and Ada |
| **ma ọ bụ** | or | **ji ma ọ bụ osikapa** — yam or rice |
| **ma … ma** | both … and | **ma nwoke ma nwaanyị** — both men and women |
| **ya na** | together with | **Emeka ya na nna ya** — Emeka with his father |

**na** joins **nouns**:
- **Azụrụ m akwụkwọ na mkpịsị odee.** — I bought a book and a pen.

## Joining sentences
| Igbo | English | Example |
|---|---|---|
| **wee** | and then | **Ọ bịara wee rie nri.** — He came and (then) ate. |
| **ma** | and; but | **Ọ bịara, ma o righi nri.** — He came, but he did not eat. |
| **mana** | but | **Akpọrọ m ya, mana ọ zaghị.** — I called him, but he did not answer. |
| **kama** | rather, instead | **Ọ gaghị ahịa, kama ọ nọrọ n'ụlọ.** — He did not go to market; instead he stayed at home. |
| **ọ bụ ezie na** | although | **Ọ bụ ezie na mmiri na-ezo, ọ gara.** — Although it was raining, he went. |

In a chain of actions by one subject, later verbs take the **vowel suffix** without a conjunction:
- **Ọ gara ahịa, zụọ ji, lọta.** — He went to market, bought yams and came home.

## Reason
| Igbo | English | Example |
|---|---|---|
| **n'ihi na / maka na** | because | **Ọ bịaghị n'ihi na ahụ adịghị ya.** — He did not come because he was ill. |
| **ya mere** | therefore | **Mmiri zoro; ya mere, anyị apụghị.** — It rained; therefore we did not go out. |

## Condition
| Igbo | English | Example |
|---|---|---|
| **ọ bụrụ na** | if | **Ọ bụrụ na ị gụọ akwụkwọ, ị ga-agafe.** — If you study, you will pass. |
| **ma ọ bụghị** | unless, otherwise | **Bịa n'oge, ma ọ bụghị ya, anyị ga-aga.** — Come on time, otherwise we will go. |

## Time
| Igbo | English | Example |
|---|---|---|
| **mgbe** | when | **Mgbe m bịara, ọ laala.** — When I came, he had gone. |
| **tupu** | before | **Saa aka gị tupu i rie nri.** — Wash your hands before you eat. |
| **mgbe … gasịrị** | after | **Mgbe anyị risịrị nri, anyị rahụrụ ụra.** — After we ate, we slept. |
| **ruo mgbe** | until | **Chere ruo mgbe m ga-abịa.** — Wait until I come. |
| **kemgbe** | since | **Kemgbe ọ lara, ahụbeghị m ya.** — Since he left, I have not seen him. |

## Purpose and reported speech
- **ka** — so that: **Bịa n'oge ka anyị gaa.** — Come early so that we may go.
- **na** — that: **O kwuru na ọ ga-abịa.** — He said that he would come.

## Summary
| Type | Words |
|---|---|
| addition | na, wee, ma … ma |
| choice | ma ọ bụ |
| contrast | mana, ma, kama |
| reason | n'ihi na, maka na, ya mere |
| condition | ọ bụrụ na |
| time | mgbe, tupu, ruo mgbe |
| purpose | ka |

## The many jobs of "na"
1. **and**: Obi **na** Ada
2. **at / in**: **na** klasị; **n'**ụlọ
3. **helping verb**: Ọ **na**-eri
4. **that**: O kwuru **na**…
The sentence shows which is meant.

## Practice
Join: *Obi toro ogologo. Ada dị mkpụmkpụ.* → **Obi toro ogologo, mana Ada dị mkpụmkpụ.**`,
          examples: `**Example 1.** Translate "yam or rice". *Answer:* **ji ma ọ bụ osikapa**.

**Example 2.** Join with "but": *Ọ bịara. O righi nri.* *Answer:* **Ọ bịara, mana o righi nri**.

**Example 3.** Which conjunction means "because"? *Answer:* **n'ihi na** (or *maka na*).`,
        },
        questions: [
          ["E", "The Igbo term for 'conjunction' is", "njikọ", "ngwaa", "nkwuwa", "aha", "It joins words or sentences."],
          ["E", "The Igbo conjunction meaning 'and' between two nouns is", "na", "mana", "tupu", "kama", "As in 'Obi na Ada'."],
          ["E", "'Mana' means", "but", "or", "if", "when", "It shows contrast."],
          ["M", "'Ji ma ọ bụ osikapa' means", "yam or rice", "yam and rice", "yam with rice", "yam but not rice", "Ma ọ bụ offers a choice."],
          ["M", "The conjunction 'n'ihi na' expresses", "reason", "choice", "time", "contrast", "It means 'because'."],
          ["M", "'Ọ bịara wee rie nri' means", "He came and then ate", "He came but did not eat", "He came because he ate", "He will come to eat", "Wee joins actions in sequence."],
          ["M", "'Mgbe m bịara' means", "When I came", "Because I came", "If I come", "Before I came", "Mgbe introduces a time clause."],
          ["H", "'Ọ bụrụ na ị gụọ akwụkwọ, ị ga-agafe' means", "If you study, you will pass", "When you studied, you passed", "Because you study, you pass", "Although you study, you fail", "Ọ bụrụ na expresses a condition."],
          ["H", "'Saa aka gị tupu i rie nri' means", "Wash your hands before you eat", "Wash your hands after you eat", "Wash your hands and eat", "Wash your hands or do not eat", "Tupu means 'before'."],
          ["H", "In 'O kwuru na ọ ga-abịa', the word 'na' means", "that", "and", "at", "is … -ing", "It introduces reported speech."],
        ],
      },
      {
        week: 4,
        title: "Types of sentences",
        subtopics: ["Sentences by function", "Simple sentences", "Compound sentences", "Complex sentences"],
        objectives: ["Classify sentences as statement, question, command or exclamation", "Identify a simple sentence", "Identify a compound sentence", "Identify a complex sentence and its dependent clause"],
        lesson: {
          title: "Ụdị ahịrịokwu",
          summary: "Classify Igbo sentences by function and by structure.",
          minutes: 40,
          notes: `## A sentence
A **sentence** (**ahịrịokwu**) expresses a **complete thought**. It has a **subject** and a **predicate** containing a verb.

## A. By function
| Kind | Igbo term | Example | Ends with |
|---|---|---|---|
| **statement** | ahịrị nkwusa | **Obi gara ahịa.** — Obi went to market. | full stop |
| **question** | ahịrị ajụjụ | **Obi ọ̀ gara ahịa?** — Did Obi go to market? | question mark |
| **command** | ahịrị ntụziaka / iwu | **Gaa ahịa!** — Go to market! | full stop or exclamation mark |
| **exclamation** | ahịrị mkpu | **Chei! O toka ogologo!** — Oh! How tall he is! | exclamation mark |

A command usually has **no stated subject**: **Nọdụ ala!** For several people: **Nọdụnụ ala!**
A **wish or prayer** uses **ka**: **Ka Chineke gọzie anyị.** — May God bless us.

## B. By structure
### 1. Simple sentence — ahịrịmfe
**One clause** with **one main verb**.
- **Ada zụrụ akwa.** — Ada bought cloth.
- **Mmiri na-ezo.** — It is raining.

### 2. Compound sentence — ahịrịnha
**Two or more simple sentences of equal rank**, joined by **ma, mana, wee, ma ọ bụ**.
- **Ada zụrụ akwa wee kwaa ya.** — Ada bought cloth and sewed it.
- **Akpọrọ m ya, mana ọ zaghị.** — I called him, but he did not answer.
Each part could stand alone.

### 3. Complex sentence — ahịrịmgbagwo
A **main clause** with one or more **dependent clauses** that cannot stand alone. The dependent clause is introduced by words such as **nke, na, mgbe, ọ bụrụ na, n'ihi na, ka, tupu**.
- **Nwa nke bịara ụnyaahụ alaala.** — The child *who came yesterday* has gone.
- **Ama m na ọ ga-abịa.** — I know *that he will come*.
- **Mgbe m bịara, ha eriela nri.** — *When I came*, they had eaten.
- **Ọ bụrụ na mmiri ezoo, anyị agaghị aga.** — *If it rains*, we will not go.

## Kinds of dependent clause
| Clause | Introduced by | Example |
|---|---|---|
| **relative** (describes a noun) | **nke** | akwụkwọ **nke m zụrụ** — the book that I bought |
| **noun clause** | **na** | O kwuru **na ọ na-abịa** |
| **time** | **mgbe, tupu** | **Mgbe ọ bịara**… |
| **reason** | **n'ihi na** | …**n'ihi na ike gwụrụ ya** |
| **condition** | **ọ bụrụ na** | **Ọ bụrụ na ị chọọ**… |
| **purpose** | **ka** | …**ka o wee gafee** |

## Parts of a sentence
- **isiahịrị** — subject: **Ada**
- **ngwaa** — verb: **zụrụ**
- **nnara** — object: **akwa**
- **nkwuwa** — adverbial: **ụnyaahụ**

## Punctuation (akara edemede)
| Mark | Igbo name |
|---|---|
| **.** | kpọm |
| **,** | rịkọm |
| **?** | akara ajụjụ |
| **!** | akara mkpu |
| **'** | akara mwepụ (apostrophe, as in n'ụlọ) |
| **-** | akara uhie (hyphen, as in na-eri) |

## Capital letters
Begin every sentence and every **proper noun** with a capital: **Ada, Enugu, Chineke, Eke**.

## Practice
Classify: (a) **Derenụ duu!** — command. (b) **Onye bịara?** — question. (c) **Obi gụrụ akwụkwọ wee gafee ule.** — compound statement.`,
          examples: `**Example 1.** What kind of sentence is **"Nọdụ ala!"**? *Answer:* A **command**.

**Example 2.** Identify the structure: **Akpọrọ m ya, mana ọ zaghị.** *Answer:* **Compound** — two equal clauses joined by *mana*.

**Example 3.** Pick out the dependent clause: **Nwa nke bịara ụnyaahụ alaala.** *Answer:* **nke bịara ụnyaahụ** (who came yesterday).`,
        },
        questions: [
          ["E", "'Obi ọ̀ gara ahịa?' is", "a question", "a command", "a statement", "an exclamation", "The low-tone pronoun and the question mark show it."],
          ["E", "A simple sentence contains", "one main verb", "two joined sentences", "a dependent clause", "no verb", "It has a single clause."],
          ["E", "The Igbo name for the full stop is", "kpọm", "rịkọm", "akara ajụjụ", "akara mkpu", "It ends a statement."],
          ["M", "'Gaa ahịa!' is an example of", "a command", "a question", "a statement", "a prayer", "It tells someone to do something."],
          ["M", "'Ada zụrụ akwa wee kwaa ya' is", "a compound sentence", "a simple sentence", "a complex sentence", "a command", "Two equal clauses are joined by wee."],
          ["M", "The Igbo name for the question mark is", "akara ajụjụ", "akara mkpu", "kpọm", "rịkọm", "Ajụjụ means question."],
          ["M", "The Igbo term for a simple sentence is", "ahịrịmfe", "ahịrịnha", "ahịrịmgbagwo", "ahịrị mkpu", "Mfe means easy or simple."],
          ["H", "'Mgbe m bịara, ha eriela nri' is", "a complex sentence", "a simple sentence", "a compound sentence", "a command", "It has a dependent time clause and a main clause."],
          ["H", "In 'akwụkwọ nke m zụrụ' (the book that I bought), the word 'nke' introduces", "a relative clause", "a question", "a command", "a negative", "The clause describes the noun akwụkwọ."],
          ["H", "'Ka Chineke gọzie anyị' is best described as", "a wish or prayer", "a question", "a compound statement", "a relative clause", "Ka at the start expresses a wish."],
        ],
      },
      {
        week: 5,
        title: "Word formation",
        subtopics: ["Roots and affixes", "Forming nouns from verbs", "Reduplication and compounding", "Borrowing and coinage"],
        objectives: ["Identify the root of a word", "Form nouns from verbs with prefixes", "Form words by reduplication and compounding", "Explain borrowing and the coining of new words"],
        lesson: {
          title: "Mmụbaokwu",
          summary: "See how new Igbo words are formed from simpler ones.",
          minutes: 40,
          notes: `## Roots and affixes
A **root** (**isi okwu**) is the simplest form of a word: **ga** (go), **ri** (eat), **zụ** (buy), **de** (write).
An **affix** (**mgbakwunye**) is a part added to a root:
- **prefix** (**nganiihu**) — added **before**: **ị**ga
- **suffix** (**nsonaazụ**) — added **after**: ga**ra**
All affixes obey **vowel harmony**.

## 1. Nouns from verbs with a nasal prefix (n- / m-)
| Verb root | Noun | Meaning |
|---|---|---|
| ri (eat) | **nri** | food |
| kuzi (teach) | **nkuzi** | teaching, lesson |
| gọzi (bless) | **ngọzi** | blessing |
| mụta (learn) | **mmụta** | learning, education |
| bido (begin) | **mbido** | beginning |
| chọ (seek) | **nchọ** | search |
| zute (meet) | **nzute** | meeting |
| gwụ (end) | **ngwụcha** | end |
**m-** is used before **b, m, p**; **n-** before other consonants.

## 2. Verbal nouns with o- / ọ- and a repeated root
The prefix **o-/ọ-** is added and the first syllable of the root is **repeated**:
| Verb root | Noun | Meaning |
|---|---|---|
| ri | **oriri** | eating; feast |
| gụ | **ọgụgụ** | reading |
| de | **odide** | writing |
| me | **omume** | act, behaviour |
| bịa | **ọbịbịa** | coming |
| zụ | **ọzụzụ** | training; buying |
| kwe | **okwukwe** | belief, faith |
| chị | **ọchịchị** | rule, government |

## 3. The doer of an action
**o-/ọ- + root (+ noun)**, or **onye + noun/verb**:
| Word | Meaning |
|---|---|
| **ode akwụkwọ** | writer, clerk |
| **ọkụ azụ** | fisherman |
| **ote nkwụ** | palm-wine tapper |
| **ọkpụ ụzụ** | blacksmith |
| **oje ozi** | messenger |
| **onye nkuzi** | teacher |
| **onye ahịa** | trader |
| **onye ọrụ ugbo** | farmer |

## 4. The infinitive and participle
- **i-/ị- + root**: **iri, ịga**
- **e-/a- + root**: **eri, aga** (used after **na-** and **ga-**)

## 5. Reduplication (ntụgharị okwu ugboro abụọ)
Repeating a word to make a new one:
- **ọsọ** (speed) → **ọsọ ọsọ** (quickly)
- **ọbara** (blood) → **ọbara ọbara** (red)
- **nwayọọ** → **nwayọọ nwayọọ** (gently)
- **ọkụ** (fire, heat) → **ọkụ ọkụ** (very hot; hurriedly)
- **ntụ** (ash) → **ntụ ntụ** (grey)

## 6. Compounding (njikọ okwu)
Joining two or more words:
| Parts | Compound | Meaning |
|---|---|---|
| nwa + oke | **nwoke** | man |
| nwa + nne | **nwanne** | sibling |
| ụlọ + akwụkwọ | **ụlọ akwụkwọ** | school |
| ụlọ + ọgwụ | **ụlọ ọgwụ** | hospital |
| ụlọ + ụka | **ụlọ ụka** | church |
| ụgbọ + ala | **ụgbọala** | motor vehicle |
| ụgbọ + elu | **ụgbọelu** | aeroplane |
| ụgbọ + mmiri | **ụgbọ mmiri** | ship, boat |
| ezi + na + ụlọ | **ezinaụlọ** | family |
Many **names** are whole sentences joined together: **Chukwu + ma → Chukwuma**.

## 7. Extensional suffixes
Suffixes that extend the meaning of a verb:
- **zụ** (buy) → **zụta** (buy and bring)
- **ga** (go) → **gakọ** (go together), **gapụ** (go out), **gagharị** (walk about)
- **ri** (eat) → **richa** (eat up)

## 8. Borrowing (okwu mbite)
Words taken from other languages and spelt in the Igbo way:
- from **English**: **tebụl** (table), **redio**, **bọọlụ** (ball), **kọmputa**, **dọkịta**, **sukul**…
- days and months: **Mọnde, Jenụwarị**

## 9. Coinage — new words for new things
Igbo also **creates** words from its own resources:
| Word | Literally | Meaning |
|---|---|---|
| **ụgbọelu** | vessel of the sky | aeroplane |
| **ekwentị** | ekwe (slit drum) for the ear | telephone |
| **igwe** | iron | machine; bicycle |
| **mahadum** | know-it-all | university |
| **onyonyo** | image | television; picture |
| **ọkụ eletrik** | electric fire | electricity |

## Why it matters
Knowing how words are built helps you to **work out meanings**, **spell correctly** and **enlarge your vocabulary**.`,
          examples: `**Example 1.** Form a noun from the verb root **ri** with a nasal prefix. *Answer:* **nri** (food).

**Example 2.** Give the verbal noun of **gụ** (read). *Answer:* **ọgụgụ** (reading).

**Example 3.** What does **ụgbọelu** mean, and how is it formed? *Answer:* **Aeroplane** — a compound of *ụgbọ* (vessel) and *elu* (sky).`,
        },
        questions: [
          ["E", "The noun formed from the verb root 'ri' (eat) with a nasal prefix is", "nri", "iri", "eri", "riri", "It means food. Answer: nri."],
          ["E", "'Nwoke' (man) is formed by joining", "nwa and oke", "nwa and nne", "nna and oke", "onye and ike", "It is a compound word."],
          ["E", "The simplest form of a word, to which affixes are added, is the", "root", "suffix", "prefix", "compound", "Examples are ga, ri and zụ."],
          ["M", "The verbal noun formed from 'de' (write) is", "odide", "ide", "ede", "dere", "The prefix o- is added and the root syllable repeated."],
          ["M", "'Ụlọ ọgwụ' means", "hospital", "school", "church", "market", "Literally, 'house of medicine'."],
          ["M", "An affix added before a root is called", "a prefix", "a suffix", "a root", "a compound", "The Igbo term is nganiihu."],
          ["M", "'Ọbara ọbara' (red) is an example of", "reduplication", "borrowing", "a prefix", "an infinitive", "The word ọbara (blood) is repeated."],
          ["H", "'Mmụta' (learning) takes the prefix m- rather than n- because the root begins with", "m", "t", "k", "g", "M- is used before b, m and p."],
          ["H", "The coined Igbo word 'ekwentị' means", "telephone", "aeroplane", "university", "television", "It likens the phone to a slit drum for the ear."],
          ["H", "'Ọchịchị' (government) is formed from the verb root", "chị (rule)", "chọ (seek)", "che (wait)", "chụ (chase)", "Prefix ọ- plus the repeated root syllable."],
        ],
      },
      {
        week: 6,
        title: "Standard orthography",
        subtopics: ["History of writing Igbo", "The Ọnwụ orthography", "Rules of spelling", "Common errors"],
        objectives: ["Outline the history of Igbo orthography", "State what the Ọnwụ Committee decided", "Apply the main rules of Igbo spelling", "Correct common spelling errors"],
        lesson: {
          title: "Nsụpe Igbo",
          summary: "Spell Igbo words according to the standard orthography.",
          minutes: 40,
          notes: `## What is orthography?
**Orthography** is the **agreed way of writing** a language; **nsụpe** means spelling.

## History
- **1857** — **Samuel Àjàyí Crowther**, with the Igbo catechist **Simon Jonas**, produced the first Igbo primer (*Isoama-Ibo*)
- nineteenth century — missionaries used the **Lepsius orthography** (the "Old Orthography")
- **1929** — a new "**Africa**" orthography with extra letters was introduced; some churches and schools adopted it while others kept the old one
- for thirty years the two systems competed, and books in one could not easily be used in the other
- **1949** — **F. C. Ọgbalụ** founded the **Society for Promoting Igbo Language and Culture (SPILC)**
- **1961** — a government committee chaired by **Dr S. E. Ọnwụ** settled the matter: the **Ọnwụ orthography**, with **36 letters**, has been official ever since
- later, the **Standardization Committee** of SPILC issued recommendations on spelling and new words

## What the Ọnwụ orthography fixed
- **eight vowels**, with the **dot below** for **ị, ọ, ụ**
- **ṅ** for the "ng" sound
- **nine digraphs**: ch, gb, gh, gw, kp, kw, nw, ny, sh
- no special phonetic symbols — only letters available on an ordinary typewriter, plus dots

## Rules of spelling
### 1. Spell in Standard Igbo
Write the form of **Igbo Izugbe**, not a local dialect: **ụlọ** (not *ụnọ*), **ihe** (not *ife*).

### 2. Dot the vowels correctly
The dot changes the word:
| Undotted | Dotted |
|---|---|
| **isi** (head) | **ịsị** (to say) |
| **oke** (rat; share) | **ọkụ** (fire) |
| **ugu** (pumpkin) | **ụzọ** (road) |
Follow **vowel harmony**: *ọkụkọ*, not *ọkuko*.

### 3. Use the hyphen with helping verbs
- **Ọ na-eri nri.** (not *naeri* or *na eri*)
- **Ọ ga-abịa.**

### 4. Use the apostrophe when a vowel is dropped
- **na ụlọ → n'ụlọ**; **na ime → n'ime**; **na elu → n'elu**

### 5. Write separate words separately
- **ụlọ akwụkwọ**, **onye nkuzi**, **nwa akwụkwọ**
- pronouns stand apart from verbs: **Ọ gara** (not *Ọgara*)
But true compounds and names are joined: **nwoke**, **ezinaụlọ**, **Chukwuma**.

### 6. Double the vowel when it is long
- **gaa**, **bịa**, **nwaanyị**, **asaa**, **isii**

### 7. Write syllabic nasals as pronounced
- **m** before **b, p, m**: **mba**, **mpe**, **mma**
- **n** elsewhere: **nne**, **nkụ**, **ndụ**

### 8. Capital letters
Sentences and proper nouns begin with capitals: **Igbo, Enugu, Chineke, Afọ**.

### 9. Tone marks
Used only where **needed to avoid confusion**: **àkwá** (egg) / **ákwà** (cloth).

## Common errors
| Wrong | Right | Reason |
|---|---|---|
| Ibo | **Igbo** | gb is one letter |
| ulo | **ụlọ** | dotted vowels |
| nwanyi | **nwaanyị** | long vowel and dot |
| nime | **n'ime** | apostrophe |
| naaga | **na-aga** | hyphen |
| anyi | **anyị** | dot |
| onu | **ọnụ** | dots |
| Chukwu ma | **Chukwuma** | names are joined |

## Checking your work
1. Is every **ị, ọ, ụ** dotted?
2. Do the vowels **harmonise**?
3. Are **na-** and **ga-** hyphenated?
4. Is **n'** used before vowels?

## Proper names
Old spellings survive in some personal and place names on documents (**Awka** for Ọka, **Onitsha** for Ọnịcha, **Owerri** for Owere). In Igbo lessons the standard forms are taught.`,
          examples: `**Example 1.** Who chaired the committee that fixed the present Igbo orthography, and when? *Answer:* **Dr S. E. Ọnwụ**, in **1961**.

**Example 2.** Correct the spelling: *O naeri nri nime ulo.* *Answer:* **Ọ na-eri nri n'ime ụlọ**.

**Example 3.** Why is **Ibo** wrong? *Answer:* The correct form is **Igbo** — **gb** is a single letter of the alphabet.`,
        },
        questions: [
          ["E", "The Igbo word for 'spelling' is", "nsụpe", "nkuzi", "ọgụgụ", "ntụgharị", "It is the agreed way of writing words."],
          ["E", "The present Igbo orthography was fixed in", "1961", "1857", "1929", "1999", "It is the Ọnwụ orthography."],
          ["E", "Which of the following is correctly spelt?", "ụlọ", "ulo", "ụlo", "ulọ", "Both vowels are dotted and harmonise."],
          ["M", "The committee that produced the official Igbo orthography was chaired by", "Dr S. E. Ọnwụ", "F. C. Ọgbalụ", "Pita Nwana", "Samuel Crowther", "The orthography bears his name."],
          ["M", "The correct way to write 'He is eating' is", "Ọ na-eri nri", "Ọ naeri nri", "Ọna eri nri", "Ọ na eri-nri", "The helping verb na is joined to the verb by a hyphen."],
          ["M", "The correct spelling of 'inside' is", "n'ime", "nime", "na-ime", "n-ime", "An apostrophe marks the dropped vowel of na."],
          ["M", "The Society for Promoting Igbo Language and Culture was founded in 1949 by", "F. C. Ọgbalụ", "S. E. Ọnwụ", "D. N. Achara", "Tony Ubesie", "He also wrote and published many Igbo books."],
          ["H", "The first Igbo primer, published in 1857, was prepared by", "Samuel Àjàyí Crowther", "Chinua Achebe", "Leopold Bell-Gam", "Nnamdi Azikiwe", "He worked with the Igbo catechist Simon Jonas."],
          ["H", "The spelling 'Ibo' is incorrect in Standard Igbo because", "gb is a single letter that must be written", "the word should begin with a small letter", "it lacks a tone mark", "it lacks a hyphen", "The correct form is Igbo."],
          ["H", "The correct standard spelling of the word for 'woman' is", "nwaanyị", "nwanyi", "nwaanyi", "nwanyị", "The long vowel is doubled and the final vowel dotted."],
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
        subtopics: ["What oral literature is", "Narratives", "Songs and poetry", "Short forms and traditional drama"],
        objectives: ["Explain what oral literature is", "Identify the kinds of oral narrative", "Identify the kinds of oral song and poetry", "Identify proverbs, riddles and traditional drama"],
        lesson: {
          title: "Agụmagụ ọnụ",
          summary: "Identify the forms of Igbo oral literature.",
          minutes: 40,
          notes: `## What is oral literature?
**Agụmagụ** means literature. **Agụmagụ ọnụ** ("literature of the mouth") is literature **composed and passed on by word of mouth** — told, sung or chanted, not written.

## Features
- handed down **from generation to generation**
- **no single known author**
- **performed** — with voice, gesture, song, drum and dance
- the **audience takes part**
- uses **repetition**, songs, proverbs and vivid images
- changes a little with each performance

## A. Narratives (akụkọ)
| Form | What it is |
|---|---|
| **akụkọ ifo** | **folktale** — invented story with a lesson; animals such as **Mbe** the tortoise |
| **akụkọ okike** | **myth** — how the world, a people or a custom began |
| **akụkọ mgbe ochie / akụkọ ala** | **legend and history** — the founding of towns, migrations, great ancestors and heroes |
| **akụkọ dike** | **epic / heroic tale** — long accounts of warriors, sung by bards with music |

## B. Songs and poetry (abụ)
| Form | Occasion |
|---|---|
| **abụ nwa / abụ e ji aragụ nwa** | lullaby |
| **abụ egwuregwu** | children's play songs |
| **abụ ọrụ** | work songs — farming, pounding, paddling |
| **abụ agha** | war songs — the war songs of **Ọhafịa** are famous |
| **abụ otuto** | praise songs for persons, lineages and titled men |
| **abụ akwamozu** | funeral songs / dirges |
| **abụ ọṅụ** | songs of joy at births, weddings and title-taking |
| **abụ ikpe / abụ njakịrị** | satirical songs that mock wrongdoers |
| **mbem** | a solemn **chant**, often of praise or lament |
| **abụ mmanwụ** | masquerade chants |
| **abụ ekpere** | religious songs and invocations |

## C. Short forms
- **ilu** — proverbs
- **agwụgwa** — riddles
- **okwu ntabi ire** — tongue-twisters
- **akpaalaokwu** — idioms
- **ụkabụilu** — a saying or short tale that explains a proverb

## D. Traditional drama (ejije ọdịnala)
Before the written play, the Igbo had drama in
- **masquerade (mmanwụ) displays** — masked figures regarded as spirits act, dance and joke
- **festivals** — processions, mock battles, ritual acts
- **storytelling**, in which the teller acts all the parts
- **wrestling and dance** performances

## Performers
the **storyteller** (**onye akụkọ**); **singers and minstrels**; **flute players** who "speak" praise names on the **ọja**; **drummers** on the **ekwe** and **ikoro**; **masquerades**; mothers and grandmothers.

## Functions of oral literature
- **entertainment**
- **education** and moral training
- **history** — records of lineages and towns
- **religion** — worship and ritual
- **social control** — praise for the good, satire for offenders
- **preserving the language**
- **unity** — shared performance binds the community

## Oral and written literature compared
| Oral | Written |
|---|---|
| spoken, sung, chanted | printed |
| no known author | known author |
| changes with each performance | fixed |
| performed to an audience | read privately |

## Preservation
recording and writing down these forms; teaching them in schools; festivals; radio, television and film.`,
          examples: `**Example 1.** What is **agụmagụ ọnụ**? *Answer:* **Oral literature** — literature passed on by word of mouth.

**Example 2.** Name three kinds of oral narrative. *Answer:* **Akụkọ ifo** (folktale), **akụkọ okike** (myth) and **akụkọ mgbe ochie** (legend/history).

**Example 3.** State two features of oral literature. *Answer:* It has **no known author** and it is **performed before an audience**.`,
        },
        questions: [
          ["E", "The Igbo term for 'literature' is", "agụmagụ", "asụsụ", "omenala", "nsụpe", "Agụmagụ ọnụ is oral literature."],
          ["E", "Literature that is passed on by word of mouth is called", "agụmagụ ọnụ", "agụmagụ ederede", "edemede", "aghọtaazaa", "Ọnụ means mouth."],
          ["E", "The Igbo word for 'song' or 'poem' is", "abụ", "ilu", "akụkọ", "ejije", "As in abụ ọrụ — work song."],
          ["M", "A story that explains how the world or a custom began is", "akụkọ okike", "akụkọ ifo", "agwụgwa", "okwu ntabi ire", "It is a myth of origin."],
          ["M", "'Abụ akwamozu' are songs performed at", "funerals", "weddings", "naming ceremonies", "wrestling matches", "They are dirges."],
          ["M", "'Okwu ntabi ire' are", "tongue-twisters", "riddles", "proverbs", "lullabies", "They are said quickly for fun and clear speech."],
          ["M", "The Igbo community famous for its war songs is", "Ọhafịa", "Ọnịcha", "Nri", "Akwete", "Its warriors are celebrated in song and dance."],
          ["H", "A solemn chant, often of praise or lament, is called", "mbem", "agwụgwa", "ilu", "ejije", "It is performed in a chanting voice."],
          ["H", "Traditional Igbo drama is best seen in", "masquerade displays and festivals", "printed novels", "newspapers", "formal letters", "Masked figures act, dance and joke."],
          ["H", "A feature that distinguishes oral literature from written literature is that it", "has no single known author", "is always printed", "cannot be performed", "never changes", "It belongs to the community."],
        ],
      },
      {
        week: 2,
        title: "Written literature",
        subtopics: ["The beginnings of written Igbo literature", "The novel", "Drama", "Poetry and literary terms"],
        objectives: ["Outline how written Igbo literature began", "Identify pioneer Igbo novels and novelists", "Identify the features of written drama", "Identify the features of poetry and basic literary terms"],
        lesson: {
          title: "Agụmagụ ederede",
          summary: "Identify the three kinds of written Igbo literature and their pioneers.",
          minutes: 40,
          notes: `## What is written literature?
**Agụmagụ ederede** is literature **composed in writing** by a known **author** (**odee**).

## Beginnings
- nineteenth century — primers, hymn books and Bible translation by missionaries
- school readers such as **Azụ Ndụ**
- **1933** — the first Igbo novel
- **1949** — **F. C. Ọgbalụ** founded the SPILC and, through his press, published many Igbo books
- **1961** — the settled orthography made wider publishing possible
- since the 1970s — a steady growth of novels, plays and poems

## The three kinds
| Kind | Igbo term | Written in |
|---|---|---|
| prose fiction | **iduuazị** | sentences and chapters |
| drama | **ejije** | dialogue, acts and scenes |
| poetry | **abụ** | lines and stanzas |

## 1. The novel (iduuazị)
### Pioneers
- **Pita Nwana** — ***Omenụkọ*** (**1933**), the **first Igbo novel**: the life of a trader who, after a loss, sold his apprentices into slavery, rose to power as a chief in a foreign land, and at last returned home in repentance
- **D. N. Achara** — ***Ala Bingo*** (1937), a tale of a king and a contest
- **Leopold Bell-Gam** — ***Ije Odumodu Jere***, the travels of an adventurer
### Later novelists
- **Tony Ubesie** — lively, humorous novels of modern life and the civil war, with titles drawn from proverbs, such as ***Isi Akwụ Dara N'ala*** and ***Ụkwa Ruo Oge Ya Ọ Daa***
- **F. C. Ọgbalụ**, **J. U. T. Nzeakọ**, **Chinedu Ofomata** and others
### Elements
**nhazi akụkọ** (plot), **ọnọdụ** (setting), **agwa** (characters), **isiokwu** (theme), **nka odee** (the author's technique), **ihe mmụta** (lesson).

## 2. Drama (ejije)
A story written to be **acted on stage**.
- early written plays appeared in the 1970s, among them ***Udo Ka Mma*** ("Peace is better")
- plays treat history, family conflict, chieftaincy and modern social problems
### Features
**nkeji** (acts) and **ngalaba** (scenes); **mkparịta ụka** (dialogue); **ntụziaka n'elu ọwa** (stage directions); characters; conflict; song and dance.
### Kinds
**ejije ọdachi** (tragedy), **ejije ọchị** (comedy), **ejije akụkọ ala** (historical play).

## 3. Poetry (abụ ederede)
Poems composed in writing, in lines (**ahịrị**) and stanzas (**ngalaba**).
- anthologies such as ***Akpa Uche*** and ***Ụtara Ntị*** brought together the work of many poets
- themes: love of the land, culture, good conduct, the civil war, death, praise, satire
### Features
economy of words; rhythm and repetition; imagery; proverbs.

## Literary terms
| Igbo | English |
|---|---|
| **odee** | author |
| **agwa** | character |
| **isi agwa** | main character |
| **isiokwu** | theme; title |
| **ọnọdụ** | setting |
| **ihe mmụta** | lesson, moral |
| **atụmatụ okwu** | figures of speech |
| **myiri** | simile |
| **mbụrụ** | metaphor |
| **mmemmadụ** | personification |
| **egbeokwu** | exaggeration |
| **nkwugharị** | repetition |

## Igbo writers in English
Writers such as **Chinua Achebe**, **Flora Nwapa**, **Cyprian Ekwensi**, **Buchi Emecheta** and **Chimamanda Adichie** have carried Igbo life, proverbs and names to the world in English. Achebe also encouraged writing in Igbo and helped to edit an anthology of Igbo verse.

## Why study literature?
enjoyment; moral lessons; knowledge of culture and history; better command of the language.

## Note on set books
The texts prescribed for study change from time to time. For each, learn the **author, story, characters, themes and lessons**.`,
          examples: `**Example 1.** Which was the first Igbo novel, who wrote it and when? *Answer:* ***Omenụkọ***, by **Pita Nwana**, in **1933**.

**Example 2.** Name the three kinds of written literature in Igbo. *Answer:* **Iduuazị (prose), ejije (drama) and abụ (poetry)**.

**Example 3.** What do **odee** and **agwa** mean? *Answer:* **Author** and **character**.`,
        },
        questions: [
          ["E", "Literature composed in writing by a known author is called", "agụmagụ ederede", "agụmagụ ọnụ", "akụkọ ifo", "agwụgwa", "Ederede means 'written'."],
          ["E", "The first Igbo novel is", "Omenụkọ", "Ala Bingo", "Udo Ka Mma", "Akpa Uche", "It was published in 1933."],
          ["E", "The Igbo term for 'drama' is", "ejije", "iduuazị", "abụ", "ilu", "It is written to be acted."],
          ["M", "The author of 'Omenụkọ' is", "Pita Nwana", "Tony Ubesie", "D. N. Achara", "F. C. Ọgbalụ", "It tells the life of a trader who became a chief."],
          ["M", "The Igbo term for prose fiction or the novel is", "iduuazị", "ejije", "abụ", "mbem", "It is written in sentences and chapters."],
          ["M", "The Igbo literary term 'odee' means", "author", "character", "theme", "setting", "Literally, 'one who writes'."],
          ["M", "'Ala Bingo' (1937) was written by", "D. N. Achara", "Pita Nwana", "Leopold Bell-Gam", "Chinua Achebe", "It is one of the pioneer Igbo novels."],
          ["H", "The novelist noted for humorous novels with titles drawn from proverbs, such as 'Isi Akwụ Dara N'ala', is", "Tony Ubesie", "Pita Nwana", "Flora Nwapa", "S. E. Ọnwụ", "He wrote of modern life and the civil war."],
          ["H", "In Igbo literary terms, 'myiri' is", "a simile", "a metaphor", "personification", "repetition", "It compares using 'dị ka' (like)."],
          ["H", "The Igbo term 'isiokwu' in the study of a novel refers to its", "theme", "author", "publisher", "stage", "It is the central idea or subject."],
        ],
      },
      {
        week: 3,
        title: "Traditional festivals",
        subtopics: ["Why festivals are held", "The New Yam Festival", "Other festivals and masquerades", "Value of festivals"],
        objectives: ["State why traditional festivals are celebrated", "Describe the New Yam Festival", "Name other Igbo festivals and masquerades", "State the value of festivals to the community"],
        lesson: {
          title: "Emume ọdịnala",
          summary: "Describe the major traditional festivals of the Igbo.",
          minutes: 40,
          notes: `## What is a festival?
**Emume** means celebration or festival; **emume ọdịnala** is a traditional festival kept by a town or community.

## Why festivals are held
- to **thank God, the earth and the ancestors** for harvest, children and life
- to **mark the seasons** and the farming year
- to **honour a deity** or the **ancestors**
- to **remember the founding** of the town
- to **cleanse** the land and pray for the new year
- to bring sons and daughters **home**

## The New Yam Festival — Iri ji ọhụrụ
Also called **Iwa ji** ("cutting the yam"), **Ike ji** or **Ọnwa asatọ**. It is the **most widespread Igbo festival**, held at the **start of the harvest**, usually in **August or September**. Until it is performed, **no one eats the new yam**.

### How it is celebrated
1. the date is fixed and announced by the **eze** (traditional ruler) and elders
2. the compound and village are **cleaned**; old yams are finished
3. on the day, **new yams are offered** with prayers to God, the earth (**Ala**) and the yam spirit (**Ahịajọkụ / Ifejiọkụ**)
4. the **eze or the eldest man cuts and eats the first yam** — roasted and dipped in **palm oil**
5. the people then eat; there are **masquerades, dances, wrestling** and visits
6. in-laws and friends exchange gifts

### Meaning
thanksgiving; the end of the "hungry season"; unity; the honour of the yam as king of crops.

## Other festivals
| Festival | Place | Notes |
|---|---|---|
| **Ọfala** | **Ọnịcha (Onitsha)**, Nnewi and other towns | the **royal festival**: the **Obi / Igwe** appears in full regalia and dances to the royal drums, usually in October |
| **Igu Arọ** | **Nri**, Umueri | the **proclamation of the new year**: the Eze announces the calendar and blesses the seed yams |
| **Ikeji** | **Arọndịzuọgụ** | a great **masquerade** festival |
| **Ekpe** | parts of **Abịa** | festival of the Ekpe society, with masquerade and a ritual sacrifice |
| **Ọmabe / Odo** | **Nsụka** area | masquerades representing returning ancestors |
| **Imo Ọka** | **Awka** | festival of the Imo-Ọka deity |
| **Iwa akwa** | **Mbaise / Obowo** area | initiation of young men into **manhood** — the "wearing of cloth" |
| **Mmanwụ festivals** | many towns | displays of masquerades |

## Masquerades (mmanwụ)
A **masquerade** is regarded as a **spirit of the ancestors** visiting the living. The wearer is hidden; women and the uninitiated keep their distance.
- **Ijele** — the **largest masquerade in Africa**, a towering, richly decorated figure of the Anambra area
- **Agbọghọ mmụọ** — the "maiden spirit", with a white face
- **Ọkọnkọ**, **Ekpe** — masquerades of men's societies
- some masquerades **entertain**; others **enforce law** and discipline

## Title-taking
Ceremonies such as taking the **Ọzọ** title are also great celebrations, with feasting and gifts to the community.

## People involved
the **eze / igwe** and his cabinet; **priests**; **elders**; **age grades**, who organise and keep order; **ụmụada**; drummers, flute players and dancers; visitors.

## Value of festivals
- **unity** and homecoming
- **preservation of culture** — dress, music, dance, crafts
- **history** kept alive
- **entertainment** and rest from work
- **tourism and trade**
- **moral teaching** and social control
- thanksgiving

## Today
Many towns now hold their New Yam Festival with a church thanksgiving as well; town unions use festivals to raise funds for **community projects**.`,
          examples: `**Example 1.** What is **Iri ji ọhụrụ**? *Answer:* The **New Yam Festival** — thanksgiving at the start of the yam harvest.

**Example 2.** Who eats the first new yam? *Answer:* The **eze or the eldest man**, after offering it with prayers.

**Example 3.** Which town is famous for the Ọfala festival? *Answer:* **Ọnịcha (Onitsha)**.`,
        },
        questions: [
          ["E", "The Igbo New Yam Festival is called", "Iri ji ọhụrụ", "Igba nkwụ", "Ọfala", "Iwa akwa", "No one eats the new yam before it."],
          ["E", "The Igbo word for 'festival' or 'celebration' is", "emume", "ahịa", "ekele", "egwu ọnwa", "Emume ọdịnala is a traditional festival."],
          ["E", "The Igbo word for 'masquerade' is", "mmanwụ", "mbem", "mgba", "mkpara", "It is regarded as a spirit."],
          ["M", "The New Yam Festival is usually held in", "August or September", "December", "January", "April", "It marks the start of the harvest."],
          ["M", "The Ọfala festival is associated with the", "Obi of Onitsha", "Eze Nri only", "hunters of Ọhafịa", "weavers of Akwete", "It is a royal festival."],
          ["M", "In Igbo belief, a masquerade represents", "a spirit of the ancestors", "a foreign visitor", "a wild animal", "a market trader", "Its wearer is hidden."],
          ["M", "At the New Yam Festival, the first yam is eaten roasted with", "palm oil", "honey", "milk", "groundnut soup", "The eze or the eldest man eats first."],
          ["H", "The largest and most elaborate Igbo masquerade is the", "Ijele", "Agbọghọ mmụọ", "Ọkọnkọ", "Odo", "It is a towering figure of the Anambra area."],
          ["H", "The festival at which the Eze Nri proclaims the new year and the farming calendar is", "Igu Arọ", "Ikeji", "Iwa akwa", "Imo Ọka", "Seed yams are blessed at it."],
          ["H", "The 'Iwa akwa' ceremony of the Mbaise area marks", "the initiation of young men into manhood", "the harvest of cocoyam", "the burial of a chief", "the opening of a new market", "It is the 'wearing of cloth'."],
        ],
      },
      {
        week: 4,
        title: "Traditional religion and beliefs",
        subtopics: ["Chukwu and chi", "The deities", "Ancestors, priests and divination", "Moral order"],
        objectives: ["Explain the Igbo belief in a Supreme Being and in chi", "Name the major deities and what each is associated with", "Describe the roles of ancestors, priests and diviners", "Explain ọfọ, taboos and the moral order"],
        lesson: {
          title: "Okpukpe na nkwenye ndị Igbo",
          summary: "Explain the main beliefs of Igbo traditional religion.",
          minutes: 40,
          notes: `## The Supreme Being
The Igbo believe in **one Supreme God**, called
- **Chukwu** — the Great God (**Chi + ukwu**)
- **Chineke** — God the Creator
- **Obasi dị n'elu** — the Lord above
- **Ọsebụrụwa / Olisa** — the Lord who upholds the world
He made all things and is the source of life. He is so great that people usually approach Him through lesser spirits.

## Chi — the personal god
Every person has a **chi**, a **personal guardian spirit** given by Chukwu, which shapes his or her **destiny**. Hence the sayings:
- **"Onye kwe, chi ya ekwe."** — When a person says yes, his chi says yes.
- names such as **Chidi**, **Chioma**, **Chinedu**
A person's success also needs **effort**; the symbol of personal achievement is the **ikenga**, a carved figure with horns.

## The deities (arụsị / agbara)
| Deity | Associated with |
|---|---|
| **Ala (Ani, Ana)** | the **earth**; fertility; **morality** — the most important deity; crimes are offences against her |
| **Amadịọha (Kamalụ)** | **thunder** and lightning; justice |
| **Anyanwụ** | the **sun** |
| **Igwe** | the **sky** |
| **Ahịajọkụ (Ifejiọkụ)** | **yam** and farming |
| **Agwụ** | divination, healing and herbs |
| **Idemmili** and other river deities | rivers and streams |
| **Ekwensu** | a spirit of mischief and violence |

Each community also has its own guardian deity with a shrine and priest.

## The ancestors (ndị ichie)
The dead who lived well are believed to continue as **ancestors**, watching over the family. They are remembered with **kola nut and libation**; the head of the family speaks to them on behalf of the living. Masquerades represent them on visits to the living.

## Reincarnation — ịlọ ụwa
An ancestor may **return in a newborn child**: hence names like **Nnamdi** ("my father lives") and **Nnenna**.

## Ọgbanje
A child believed to be a **spirit child who dies and returns** repeatedly to trouble the mother.

## Priests and diviners
- **eze mmụọ / onye isi arụsị** — the **priest** of a deity
- **dibịa afa** — the **diviner**, who finds out hidden causes by casting **afa** seeds or strings (**ịgba afa**)
- **dibịa ọgwụ** — the **herbalist / healer**
- oracles once served as final courts of appeal — the best known was **Ibini Ụkpabị** of **Arọchukwu**

## Worship
- **shrines** (**ụlọ arụsị**) and sacred groves
- **prayer** with **kola nut** each morning by the head of the household
- **libation** — pouring drink for God and the ancestors
- **sacrifice** (**ịchụ aja**)
- **festivals**

## Ọfọ na ogu — the moral order
- **ọfọ** — a short staff cut from the ọfọ tree, the **symbol of truth, justice and authority**, held by the **ọkpara** and by priests and titled men
- **ogu** — innocence; a clear case
A person who has **ọfọ na ogu** has right on his side.

## Nsọ ala — abominations
Acts forbidden by the earth: murder, theft of yams, incest, and others. An offence **pollutes the land** and requires **cleansing rites**.

## Moral teaching
truthfulness; respect for elders; hospitality; hard work; honesty in trade; care for kin. Wrongdoing brings shame on the family and punishment from the earth and the ancestors.

## Today
Most Igbo are **Christians**, but traditional values, names, proverbs, kola-nut hospitality and festivals remain part of the culture.`,
          examples: `**Example 1.** Give two Igbo names for the Supreme Being. *Answer:* **Chukwu** and **Chineke**.

**Example 2.** What is a person's **chi**? *Answer:* A **personal guardian spirit** that shapes one's destiny.

**Example 3.** Which deity is the guardian of morality? *Answer:* **Ala**, the earth goddess.`,
        },
        questions: [
          ["E", "The Igbo name for the Supreme Being is", "Chukwu", "Ala", "Amadịọha", "Agwụ", "He is also called Chineke."],
          ["E", "The Igbo deity of the earth and of morality is", "Ala", "Igwe", "Anyanwụ", "Ekwensu", "Crimes are offences against her."],
          ["E", "The Igbo deity of thunder and lightning is", "Amadịọha", "Ahịajọkụ", "Idemmili", "Agwụ", "He is linked with justice."],
          ["M", "A person's personal guardian spirit, which shapes destiny, is called", "chi", "ọfọ", "ogu", "afa", "It appears in names such as Chidi and Chioma."],
          ["M", "The ancestors in Igbo belief are called", "ndị ichie", "ndị ọgọ", "ụmụada", "ndị ahịa", "They watch over the family."],
          ["M", "The diviner who discovers hidden causes by casting seeds or strings is the", "dibịa afa", "ọkpụ ụzụ", "ote nkwụ", "onye nkuzi", "To divine is 'ịgba afa'."],
          ["M", "The deity associated with yam and farming is", "Ahịajọkụ", "Amadịọha", "Anyanwụ", "Ekwensu", "New yams are offered to this spirit."],
          ["H", "The staff that symbolises truth, justice and authority in Igbo society is the", "ọfọ", "ikenga", "mkpara", "ikoro", "It is held by the ọkpara, priests and titled men."],
          ["H", "The famous oracle of Arọchukwu, which served as a final court of appeal, was", "Ibini Ụkpabị", "Ahịajọkụ", "Idemmili", "Ijele", "People travelled far to consult it."],
          ["H", "Acts such as murder and the theft of yams, which pollute the land, are known as", "nsọ ala", "ịlọ ụwa", "ịchụ aja", "ọmụgwọ", "They require cleansing rites."],
        ],
      },
      {
        week: 5,
        title: "Traditional government",
        subtopics: ["A republican system", "Family, kindred and village", "Elders, titled men, age grades and women", "Justice and today's institutions"],
        objectives: ["Explain why Igbo traditional government is called republican", "Describe government at family, kindred and village levels", "Describe the roles of elders, titled men, age grades and women's groups", "Explain how justice was done and how the system has changed"],
        lesson: {
          title: "Ọchịchị ọdịnala ndị Igbo",
          summary: "Describe the traditional system of government among the Igbo.",
          minutes: 40,
          notes: `## A republican system
Unlike many of their neighbours, most Igbo communities had **no powerful king**. Hence the saying **"Igbo enwe eze"** — *the Igbo have no king*. Authority was **shared**, decisions were taken **in the open by discussion**, and a man rose by **achievement**, not by birth. The system is described as **decentralised, democratic and republican**.

(There were exceptions with kings: **Ọnịcha** — the **Obi**; **Nri** — the **Eze Nri**, a priest-king; **Arọchukwu** — the **Eze Arọ**; **Ọgụta**.)

## Levels of government
| Level | Igbo | Head |
|---|---|---|
| family | **ezinaụlọ** | father (**nna**) |
| extended family / kindred | **ụmụnna** | the **ọkpara** — eldest man, holder of the **ọfọ** |
| village | **ogbe / ama** | the **council of elders** and the village assembly |
| town (village-group) | **obodo** | assembly of the villages; the senior ọkpara and titled men |

Each village managed its own affairs; villages came together only for matters touching the whole town.

## Who took part
### The ọkpara and elders (ndị okenye / ndị ichie)
The eldest man of each lineage held the **ọfọ**, spoke to the ancestors, settled family disputes and represented his people in the **council of elders**.
### The village assembly (ọha / ama ala)
**All adult men** could attend and speak. Matters were debated until **agreement (consensus)** was reached; then the elders withdrew to "**ịgba izu**" (consult) and announced the decision.
### Titled men (ndị nze na ọzọ)
Men who had taken titles by wealth and good character. They were respected advisers and spokesmen and could not lie or act unjustly without disgrace.
### Age grades (ọgbọ / otu ebiri)
People born within the same few years. They **cleared paths, built markets, guarded the town, enforced decisions** and collected fines.
### Women
- **ụmụada** — daughters of the lineage, who settled family quarrels and could discipline even the men
- **ndị inyom / ndị nwunye** — the wives of the lineage
Women managed the markets and could protest together — as in the **Aba Women's War of 1929**.
### Priests and diviners
They spoke for the deities, declared taboos and led cleansing rites.
### Masquerades (mmanwụ) and secret societies
Regarded as spirits, they **enforced laws** and punished offenders.

## Making and announcing law
Laws came from **custom (omenala)**, the **decisions of the assembly** and the **taboos of the earth (nsọ ala)**. The **town crier** announced them with the **ogene** or **ekwe**; the great **ikoro** drum summoned the town.

## Justice
- family matters — by the **ọkpara** and ụmụnna
- disputes between families — by the **elders of the village**
- serious matters — by the **whole assembly**
- hard cases — by **oath-taking** (**ịṅụ iyi**) before a shrine, or by an **oracle**
Punishments: fines, restitution, ridicule in song, ostracism, and for abominations, banishment.

## Checks on power
No one could rule alone: elders, titled men, age grades, women and priests each checked the others, and any free-born man could speak in the assembly.

## Colonial change
The British, finding no chiefs, appointed **warrant chiefs**. Many abused their power, and the attempt to tax women led to the **1929 protest**.

## Today
- every autonomous community has a recognised **traditional ruler** — the **Eze**, **Igwe** or **Obi** — with a cabinet of chiefs (**ndị ichie**)
- the **Town Union**, led by a **President-General**, organises development
- age grades, ụmụada and ụmụnna still play their parts
Traditional rulers are **custodians of culture**; they settle local disputes and advise government.`,
          examples: `**Example 1.** What does **"Igbo enwe eze"** mean? *Answer:* **"The Igbo have no king"** — authority was shared, not held by a powerful monarch.

**Example 2.** Who heads the kindred (ụmụnna), and what does he hold? *Answer:* The **ọkpara**, the eldest man, who holds the **ọfọ**.

**Example 3.** Give two duties of the age grades. *Answer:* **Communal work** (clearing paths, building markets) and **enforcing decisions**.`,
        },
        questions: [
          ["E", "The saying 'Igbo enwe eze' means", "the Igbo have no king", "the Igbo love their king", "the king owns the land", "every Igbo is a king's son", "Authority was shared among many."],
          ["E", "Traditional Igbo government is best described as", "decentralised and republican", "an absolute monarchy", "a military dictatorship", "a theocracy ruled by one priest", "Decisions were taken openly by discussion."],
          ["E", "The Igbo word for a town or community is", "obodo", "ogbe", "ezinaụlọ", "ahịa", "It is made up of several villages."],
          ["M", "The head of the kindred, who holds the ọfọ, is the", "ọkpara", "ote nkwụ", "dibịa", "onye ahịa", "He is the eldest man of the lineage."],
          ["M", "In the village assembly, decisions were reached by", "discussion until there was agreement", "the order of a king", "secret ballot", "the vote of women only", "All adult men could speak."],
          ["M", "The group that cleared paths, guarded the town and enforced decisions was the", "age grade", "council of titled men", "ụmụada", "priesthood", "Its members were born within the same few years."],
          ["M", "The traditional ruler of Onitsha holds the title", "Obi", "Eze Arọ", "Ọkpara", "Dibịa", "Onitsha was one of the Igbo communities with a king."],
          ["H", "Chiefs appointed by the British in Igbo land where no chiefs existed were called", "warrant chiefs", "ndị nze na ọzọ", "ndị ichie", "eze mmụọ", "Many abused their power."],
          ["H", "The daughters of a lineage, who settled family quarrels and could discipline even the men, are the", "ụmụada", "ndị inyom", "ụmụnna", "ndị dinta", "They return home for important family matters."],
          ["H", "Hard cases in traditional Igbo society were finally decided by", "oath-taking before a shrine or by an oracle", "a written examination", "the warrant chief's clerk", "the youngest age grade", "The gods were believed to reveal the truth."],
        ],
      },
      {
        week: 6,
        title: "Good character",
        subtopics: ["The idea of ezi agwa", "Qualities of a person of good character", "Respect for elders", "Character training in the home and community"],
        objectives: ["Explain the Igbo idea of good character", "List the qualities of a person of good character", "Describe how respect for elders is shown", "Explain how the family and community train a child"],
        lesson: {
          title: "Ezi agwa",
          summary: "Explain the Igbo ideal of good character.",
          minutes: 40,
          notes: `## Ezi agwa
**Agwa** means behaviour or character; **ezi agwa** is **good character**. A well-brought-up child is praised as **ezigbo nwa** or **nwa a zụrụ azụ** ("a child who was trained"). The Igbo say:
- **"Ezi aha ka ego."** — A good name is better than money.
- **"Eziokwu bụ ndụ."** — Truth is life.
- **"Agwa bụ mma."** — Character is beauty.

## Qualities of a person of good character
| Igbo | English |
|---|---|
| **eziokwu** | truthfulness, honesty |
| **nsọpụrụ** | respect |
| **umeala** | humility |
| **ndidi** | patience |
| **ịdị uchu** | hard work, diligence |
| **obi ike** | courage |
| **obi ebere** | compassion, kindness |
| **ịhụnanya** | love |
| **ịdị ọcha** | cleanliness |
| **njide onwe** | self-control |
| **nrubeisi** | obedience |
| **afọ ojuju** | contentment |
| **ntụkwasị obi** | trustworthiness |
| **imekọ ihe ọnụ** | co-operation |

## Vices to avoid
**ụgha** (lying), **ohi** (stealing), **umengwụ** (laziness), **mpako** (pride), **anyaukwu** (greed), **ekworo** (envy), **nkwutọ** (slander), **enweghị nsọpụrụ** (rudeness), **ịṅụbiga mmanya ókè** (drunkenness).

## Respect for elders
Respect (**nsọpụrụ**) is shown by
- **greeting first**
- **not calling elders by name** — use **Nna anyị, Nne, Dede, Daa, Mazị**
- **not interrupting** when elders speak
- **running errands** and **carrying loads** for them
- **giving up a seat**
- **receiving with the right hand** or both hands
- **serving elders first** — the eldest breaks the kola nut
The reward: *a child who washes his hands eats with elders.*

## Achievement with honesty
The Igbo admire **success by one's own effort** — in farming, trade, learning or craft — but only when it is **honest**. Wealth without a good name is despised; titles such as **Ọzọ** required a **clean record**.

## Character training
Training begins **at home** (**ọzụzụ ezinaụlọ**) and is shared by the **whole community**: **"Nwa bụ nwa ọha"** — a child belongs to all.
- **parents** teach by **example**, instruction and correction
- **elders, ụmụnna and neighbours** may correct any child
- **folktales, proverbs and songs** carry lessons
- **apprenticeship** teaches a trade and discipline
- **age mates** learn co-operation through play and communal work
- **religion and taboos** set limits
- good conduct is **praised**; bad conduct is **rebuked**, punished or mocked in song
A badly behaved child brings **shame on the family**, for people ask, *"Onye mụrụ nwa a?"* — "Whose child is this?"

## Community spirit
- **"Onye aghala nwanne ya."** — Let no one abandon his brother.
- **"Igwe bụ ike."** — Unity is strength.
- welcoming visitors with **kola nut**
- **communal labour** for roads, markets and schools
- **isusu** — a savings club in which members contribute and collect in turn
- town unions that build schools, hospitals and halls

## Good character today
The ideal applies in **school** (honesty in examinations, respect for teachers, punctuality), **at work**, **in business**, **online** and in **public life** — refusing bribes, obeying the law, serving others.

## A thought
Learning and wealth without **ezi agwa** are of little worth.`,
          examples: `**Example 1.** What is **ezi agwa**? *Answer:* **Good character** — honest, respectful and well-trained behaviour.

**Example 2.** Give three qualities of good character in Igbo. *Answer:* **Eziokwu (truthfulness), nsọpụrụ (respect) and ndidi (patience)**.

**Example 3.** Explain "Ezi aha ka ego". *Answer:* **A good name is better than money**.`,
        },
        questions: [
          ["E", "The Igbo word for 'truth' or 'honesty' is", "eziokwu", "ụgha", "ohi", "mpako", "Ụgha means a lie."],
          ["E", "'Ndidi' means", "patience", "pride", "greed", "anger", "It is a quality of good character."],
          ["E", "The Igbo term for 'good character' is", "ezi agwa", "ezi aha", "ezi ụlọ", "ezi ahịa", "Agwa means behaviour."],
          ["M", "The Igbo word for 'respect' is", "nsọpụrụ", "umengwụ", "ekworo", "nkwutọ", "It is shown especially to elders."],
          ["M", "Which of the following is a vice?", "anyaukwu", "umeala", "ịdị ọcha", "obi ebere", "It means greed."],
          ["M", "'Umengwụ' means", "laziness", "humility", "obedience", "courage", "The Igbo despise it."],
          ["M", "'Ezi aha ka ego' means", "A good name is better than money", "Money makes a good name", "A rich man has many names", "Names are bought with money", "It stresses the value of reputation."],
          ["H", "'Nwa bụ nwa ọha' teaches that", "the training of a child is the duty of the whole community", "children should be left alone", "only the mother trains a child", "children belong to the king", "Any elder may correct a child."],
          ["H", "The savings club in which members contribute regularly and collect in turn is called", "isusu", "ọmụgwọ", "igba bọị", "iwa akwa", "It is a form of community self-help."],
          ["H", "'Onye aghala nwanne ya' teaches", "loyalty to one's kin", "respect for the king", "the value of wealth", "obedience to teachers", "Let no one abandon his brother."],
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
        objectives: ["Identify the kinds of composition", "Plan a composition with an outline", "Write an introduction, body and conclusion", "Use correct language, paragraphs and spelling"],
        lesson: {
          title: "Edemede",
          summary: "Plan and write a composition in Igbo.",
          minutes: 40,
          notes: `## What is a composition?
**Edemede** is a piece of writing in which you **think out your ideas on a topic and set them down in order**.

## Kinds of composition
| Kind | Igbo term | What it does | Sample topic |
|---|---|---|---|
| **narrative** | edemede akọmakọ | tells a story or an event | *Ụbọchị m na-agaghị echefu* (A day I will never forget) |
| **descriptive** | edemede nkọwa | describes a person, place or thing | *Ụlọ akwụkwọ m* (My school) |
| **expository** | edemede nkọwami | explains how or why | *Otu e si esi ofe egwusi* (How egusi soup is cooked) |
| **argumentative** | edemede mgbagha / arụmụka | argues for or against | *Ọrụ ugbo ka ọrụ nkuzi mma* (Farming is better than teaching) |
| **letter** | leta | informal or formal | *Leta e degaara enyi* |
| **dialogue** | mkparịta ụka | a conversation | *Mkparịta ụka nne na nwa ya* |

## Steps
1. **Choose** the topic you know best.
2. **Think** — jot down your ideas.
3. **Outline** — arrange the ideas in order.
4. **Write** — one main idea to each paragraph.
5. **Read over** — correct spelling (dots, hyphens, apostrophes) and punctuation.

## Parts of a composition
### 1. Isiokwu — the title
Write it at the top, in the middle.
### 2. Mmalite / Mkpọlite — the introduction
A short paragraph that **introduces the topic** and catches interest. A proverb or a definition may open it.
### 3. Ahụ edemede — the body
**Three or four paragraphs**, each on **one point**, with examples. Link the paragraphs:
- **Nke mbụ** — first
- **Ọzọkwa** — also, furthermore
- **N'aka nke ọzọ** — on the other hand
- **Mana** — but
- **Ya mere** — therefore
- **N'ikpeazụ** — finally
### 4. Mmechi — the conclusion
A short paragraph that **sums up** and gives your final view.

## A sample outline: "Ụlọ akwụkwọ m"
- **Mmalite:** name of the school; where it is; when it was founded
- **Nkeji nke mbụ:** buildings and compound — classrooms, library, field
- **Nkeji nke abụọ:** the teachers and the principal; the subjects taught
- **Nkeji nke atọ:** activities — sports, clubs, cultural day
- **Mmechi:** why I love my school

### A sample opening paragraph
> Aha ụlọ akwụkwọ m bụ Ụlọ Akwụkwọ Sekọndịrị Udoka. Ọ dị n'obodo Enugu, na steeti Enugu. E hiwere ya n'afọ 1980. Ụlọ akwụkwọ ahụ buru ibu, maakwa mma nke ukwuu.
(*My school is Udoka Secondary School. It is in Enugu town, Enugu State. It was founded in 1980. The school is big and very beautiful.*)

## Argumentative composition
- open by **greeting the audience** (chairman, judges, fellow debaters) if it is a debate
- **state your side** clearly
- give **three or four reasons**, each with an example
- **answer** the other side
- end by **restating** your position

## Narrative composition
Tell events **in order**; say **who, where, when, what happened and how it ended**; use the past forms; add how you felt.

## What examiners look for
| Area | Meaning |
|---|---|
| **ọdịnaya** | content — relevant, sufficient ideas |
| **nhazi** | organisation — paragraphs in logical order |
| **nka asụsụ** | expression — correct, varied sentences; proverbs and idioms |
| **ndezi** | mechanics — spelling, punctuation |

## Tips
- keep to the **topic** and the **length** asked for
- write **simple, correct** sentences
- use a **proverb or two** — they earn credit
- write in **Standard Igbo**, neatly`,
          examples: `**Example 1.** What is **edemede**? *Answer:* A **composition** — ideas on a topic thought out and written in order.

**Example 2.** Name the three main parts of a composition. *Answer:* **Mmalite (introduction), ahụ edemede (body) and mmechi (conclusion)**.

**Example 3.** What kind of composition is "Otu e si esi ofe egwusi"? *Answer:* **Expository** — it explains how something is done.`,
        },
        questions: [
          ["E", "The Igbo term for 'composition' is", "edemede", "aghọtaazaa", "nsụpe", "agwụgwa", "It is a piece of ordered writing on a topic."],
          ["E", "The closing paragraph of a composition is the", "mmechi", "mmalite", "isiokwu", "ahụ edemede", "It sums up the writer's points."],
          ["E", "The title of a composition is called", "isiokwu", "mmechi", "nkeji", "nhazi", "It is written at the top."],
          ["M", "A composition that tells a story or recounts an event is", "edemede akọmakọ", "edemede nkọwa", "edemede mgbagha", "leta", "It narrates what happened."],
          ["M", "The topic 'Ụlọ akwụkwọ m' (My school) calls for", "a descriptive composition", "an argumentative composition", "a formal letter", "a dialogue", "It asks the writer to describe a place."],
          ["M", "The opening paragraph of a composition is the", "mmalite", "mmechi", "ndezi", "ọdịnaya", "It introduces the topic."],
          ["M", "Each paragraph in the body of a composition should contain", "one main point", "all the points", "only proverbs", "the title", "The point is developed with examples."],
          ["H", "A composition in which the writer supports one side of a question with reasons is", "edemede mgbagha", "edemede akọmakọ", "edemede nkọwa", "leta nkeonwe", "It is used in debates."],
          ["H", "In marking a composition, 'ọdịnaya' refers to", "content — the ideas presented", "the handwriting", "the length of the title", "the number of paragraphs only", "Relevant and sufficient ideas earn credit."],
          ["H", "The linking expression 'N'ikpeazụ' is used in a composition to introduce", "the final point", "the first point", "a contrast", "a question", "It means 'finally'."],
        ],
      },
      {
        week: 2,
        title: "The formal letter",
        subtopics: ["When formal letters are written", "Parts of a formal letter", "Language of a formal letter", "A sample letter"],
        objectives: ["State when a formal letter is required", "Set out the parts of a formal letter", "Use suitable formal language", "Write a short formal letter"],
        lesson: {
          title: "Leta anamachọihe",
          summary: "Write a formal letter in Igbo.",
          minutes: 40,
          notes: `## What is a formal letter?
**Leta anamachọihe** is an **official letter** written to a person **in his or her official position** — a principal, a local government chairman, a manager, an editor. It is used
- to **apply** for a job or admission
- to **ask permission** or make a request
- to **complain** or report
- to **invite** an official

## Parts of a formal letter
| Part | Igbo | Position |
|---|---|---|
| 1. writer's address | **adreesị onye na-ede** | top right |
| 2. date | **ụbọchị** | under the writer's address |
| 3. receiver's address | **adreesị onye a na-edegara** | left, lower down |
| 4. salutation | **ekele** | left |
| 5. heading | **isiokwu leta** | centre, in capitals or underlined |
| 6. body | **ahụ leta** | paragraphs |
| 7. closing | **mmechi** | bottom right |
| 8. signature and full name | **mbinye aka na aha zuru ezu** | under the closing |

## How it differs from an informal letter
| | Informal (nkeonwe) | Formal (anamachọihe) |
|---|---|---|
| addresses | one | **two** |
| salutation | *Nna m ọma,* | ***Nna m ukwu, / Nne m ukwu,*** |
| heading | none | **required** |
| opening greetings | long family greetings | **none** — go straight to the point |
| language | warm, personal | **polite, brief, exact** |
| closing | *Abụ m nwa gị,* | ***Abụ m nke gị n'eziokwu,*** |
| name | first name | **signature and full name** |

## Salutation
- **Nna m ukwu,** — Dear Sir,
- **Nne m ukwu,** — Dear Madam,

## The body
- **paragraph 1** — state who you are and **why you are writing**
- **paragraph 2** — give the **details or reasons**
- **paragraph 3** — make the **request** and thank the reader

Do not use slang, jokes or family greetings.

## Closing
> **Abụ m nke gị n'eziokwu,**
> (mbinye aka)
> **Emeka Okafọ**

## A sample letter
> Ụlọ Akwụkwọ Sekọndịrị Udoka,
> Enugu.
> 3 Juun, 2025.
>
> Onyeisi Ụlọ Akwụkwọ,
> Ụlọ Akwụkwọ Sekọndịrị Udoka,
> Enugu.
>
> Nna m ukwu,
>
> **ARỊRỊỌ MAKA OHERE ỊLA ỤLỌ**
>
> Ana m ede leta a iji rịọ ka e nye m ohere ụbọchị abụọ ka m laa ụlọ. Abụ m nwa akwụkwọ nọ na klasị JSS 3A.
>
> Ihe mere m ji arịọ ohere a bụ na nne m nọ n'ụlọ ọgwụ, nna m ezitekwala ozi ka m lọta. Achọrọ m ịla na Tọzde, lọghachi na Satọde.
>
> Ana m ekwe nkwa na m ga-arụzu ọrụ ọ bụla m ga-atụfu. Daalụ maka enyemaka gị.
>
> Abụ m nke gị n'eziokwu,
> (mbinye aka)
> Emeka Okafọ.

*(Summary: a JSS 3A student asks the Principal for two days' leave because his mother is in hospital, promises to make up lost work and thanks him.)*

## Useful words
| Igbo | English |
|---|---|
| **Onyeisi Ụlọ Akwụkwọ** | Principal |
| **arịrịọ** | request |
| **ohere** | permission; opportunity |
| **ịrịọ ọrụ** | to apply for a job |
| **ụlọ ọrụ** | office, company |
| **ọchịchị ime obodo** | local government |
| **onyeisi oche** | chairman |
| **onye nhazi akụkọ** | editor |
| **mkpesa** | complaint |
| **mbinye aka** | signature |

## Marks
both addresses and date; salutation; heading; content; expression; closing with signature and full name.`,
          examples: `**Example 1.** How many addresses has a formal letter? *Answer:* **Two** — the writer's and the receiver's.

**Example 2.** Give the correct closing of a formal letter in Igbo. *Answer:* **Abụ m nke gị n'eziokwu,** followed by signature and full name.

**Example 3.** What comes immediately after the salutation? *Answer:* The **heading (isiokwu leta)**.`,
        },
        questions: [
          ["E", "A letter written to a person in an official position is called", "leta anamachọihe", "leta nkeonwe", "edemede akọmakọ", "mkparịta ụka", "It is the formal letter."],
          ["E", "A formal letter has how many addresses?", "two", "one", "three", "none", "The writer's and the receiver's."],
          ["E", "A suitable salutation in a formal letter to a man is", "Nna m ukwu,", "Nna m ọma,", "Ezigbo enyi m,", "Kedu,", "It corresponds to 'Dear Sir'."],
          ["M", "The heading of a formal letter is written", "after the salutation", "before the writer's address", "after the signature", "inside the last paragraph", "It states the subject of the letter."],
          ["M", "The correct closing for a formal letter is", "Abụ m nke gị n'eziokwu,", "Abụ m nwa gị,", "Abụ m enyi gị,", "Ka ọ dị,", "It corresponds to 'Yours faithfully'."],
          ["M", "'Onyeisi Ụlọ Akwụkwọ' is the", "Principal", "class captain", "gateman", "school nurse", "Onyeisi means head."],
          ["M", "Unlike an informal letter, a formal letter does NOT contain", "long family greetings", "a date", "a body", "an address", "The writer goes straight to the point."],
          ["H", "At the end of a formal letter, the writer gives", "a signature and full name", "the first name only", "a nickname", "no name at all", "The reader may not know the writer personally."],
          ["H", "In the sample letter, 'arịrịọ maka ohere' means", "a request for permission", "a complaint about food", "an invitation to a feast", "an application for a job", "Arịrịọ is a request and ohere is permission."],
          ["H", "'Mbinye aka' in a formal letter refers to the", "signature", "address", "heading", "date", "Literally, 'putting the hand'."],
        ],
      },
      {
        week: 3,
        title: "Translation",
        subtopics: ["What translation is", "Translating sense, not word for word", "Translating simple sentences", "Common difficulties"],
        objectives: ["Explain what translation is", "Translate the sense of a sentence rather than each word", "Translate simple sentences between English and Igbo", "Avoid common translation errors"],
        lesson: {
          title: "Ntụgharị asụsụ",
          summary: "Translate simple sentences between English and Igbo.",
          minutes: 40,
          notes: `## What is translation?
**Ntụgharị** ("turning over") is **putting the meaning of what is said in one language into another**. A person who translates writing is a **translator (onye ntụgharị)**; one who translates speech on the spot is an **interpreter (onye nsụgharị okwu)**.

## The golden rule
Translate the **sense**, not each word. Every language has its own **word order and idiom**.

| English | Word-for-word (wrong) | Correct Igbo |
|---|---|---|
| I am hungry. | *Abụ m agụụ.* | **Agụụ na-agụ m.** (Hunger is "hungering" me.) |
| I am thirsty. | *Abụ m akpịrị.* | **Akpịrị na-akpọ m nkụ.** (My throat is drying.) |
| I am tired. | — | **Ike gwụrụ m.** (Strength has finished in me.) |
| I am afraid. | — | **Egwu na-atụ m.** |
| I am sleepy. | — | **Ụra na-atụ m.** |
| I am happy. | *Abụ m ọṅụ.* | **Obi dị m ụtọ.** (My heart is sweet.) |
| I am sad. | — | **Obi adịghị m mma.** |
| I have a headache. | *Enwere m isi ọwụwa.* | **Isi na-awa m.** |
| It is raining. | *Ọ na-ezo.* | **Mmiri na-ezo.** |
| What is your name? | *Gịnị bụ aha gị?* | **Kedu aha gị?** |
| How old are you? | — | **Afọ ole ka ị dị?** |
| I am fine. | — | **Adị m mma.** |

In Igbo, **feelings and bodily states happen to the person**: hunger, fear, sleep and tiredness are the subject of the sentence.

## Steps
1. **Read** the whole sentence and understand it.
2. Find the **subject, verb and object**.
3. Choose the right **verb form** — past (-rV), continuous (na-), future (ga-), perfect (-la/-le) — or the **negative** (-ghị).
4. Apply **vowel harmony** to prefixes and suffixes.
5. Put **describing words after the noun**.
6. **Read your translation aloud** — does it sound natural?

## Differences to remember
| Point | English | Igbo |
|---|---|---|
| adjective | **big** house | ụlọ **ukwu** |
| possessive | **my** book | akwụkwọ **m** |
| number | **three** children | ụmụaka **atọ** |
| plural | children | **ụmụ**aka |
| he / she | two words | **ọ / o** for both |
| a / the | articles | none (use **otu**, **ahụ** when needed) |
| "to" a place | go **to** market | **ịga ahịa** — no preposition |
| "to be" | one verb | **bụ, dị, nọ** |

## English → Igbo
| English | Igbo |
|---|---|
| The boy is reading a book. | **Nwa nwoke ahụ na-agụ akwụkwọ.** |
| My mother went to the market. | **Nne m gara ahịa.** |
| We have eaten. | **Anyị eriela nri.** |
| They will come tomorrow. | **Ha ga-abịa echi.** |
| I do not know. | **Amaghị m.** |
| Do not go. | **Agala.** |
| Where is your father? | **Ebee ka nna gị nọ?** |
| This is a big house. | **Nke a bụ ụlọ ukwu.** |
| Obi is taller than Emeka. | **Obi toro ogologo karịa Emeka.** |
| Please give me water. | **Biko, nye m mmiri.** |

## Igbo → English
| Igbo | English |
|---|---|
| **Onye nkuzi anyị dị mma.** | Our teacher is good. |
| **Achọrọ m iri ji.** | I want to eat yam. |
| **Gịnị ka ị na-eme?** | What are you doing? |
| **Akwụkwọ m dị n'elu tebụl.** | My book is on the table. |
| **Mmiri zoro ụnyaahụ.** | It rained yesterday. |
| **Ha abịabeghị.** | They have not yet come. |

## Common difficulties
- **idioms and proverbs** — give the meaning, not the picture
- **words with several meanings** — *akwa*: cloth, egg, bed or cry; let the sentence decide
- **new things** — use the accepted borrowed or coined word: **kọmputa**, **ekwentị**
- **names** are not translated

## Why translation matters
It lets people of different languages share news, knowledge, religion and literature. The Igbo Bible and many school books exist through translation.`,
          examples: `**Example 1.** Translate into Igbo: "I am hungry." *Answer:* **Agụụ na-agụ m**.

**Example 2.** Translate into English: **Nne m gara ahịa.** *Answer:* **My mother went to the market**.

**Example 3.** Why is "Abụ m agụụ" wrong? *Answer:* It is **word-for-word**; in Igbo hunger is the subject — **Agụụ na-agụ m**.`,
        },
        questions: [
          ["E", "Putting the meaning of one language into another is called", "ntụgharị", "aghọtaazaa", "edemede", "nsụpe", "The word means 'turning over'."],
          ["E", "The Igbo for 'We have eaten' is", "Anyị eriela nri", "Anyị na-eri nri", "Anyị ga-eri nri", "Anyị erighi nri", "The suffix -la/-le marks a completed action."],
          ["E", "'Onye nkuzi anyị dị mma' means", "Our teacher is good", "Our teacher is tall", "My teacher is bad", "The teacher has come", "Anyị means 'our' and dị mma means 'is good'."],
          ["M", "The correct Igbo for 'I am thirsty' is", "Akpịrị na-akpọ m nkụ", "Abụ m akpịrị", "Enwere m mmiri", "Mmiri na-agụ m", "The throat is the subject of the Igbo sentence."],
          ["M", "The correct Igbo for 'This is a big house' is", "Nke a bụ ụlọ ukwu", "Nke a bụ ukwu ụlọ", "Ukwu ụlọ bụ nke a", "Ụlọ bụ ukwu nke a", "The adjective follows the noun."],
          ["M", "'Obi dị m ụtọ' is best translated as", "I am happy", "My heart is sugar", "I am hungry", "I have eaten well", "The idiom expresses joy."],
          ["M", "'Ha ga-abịa echi' means", "They will come tomorrow", "They came yesterday", "They are coming now", "They did not come", "Ga- marks the future and echi is tomorrow."],
          ["H", "The correct Igbo for 'I am tired' is", "Ike gwụrụ m", "Abụ m ike", "Enwere m ike", "Ike dị m", "Literally, 'strength has finished in me'."],
          ["H", "The Igbo for 'It is raining' is", "Mmiri na-ezo", "Ọ na-ezo", "Mmiri zoro echi", "Mmiri dị", "Igbo names the rain as subject."],
          ["H", "The chief rule of good translation is to", "translate the sense rather than word for word", "keep the word order of the first language", "leave out all idioms", "translate people's names", "Each language has its own order and idiom."],
        ],
      },
      {
        week: 4,
        title: "Idioms and figurative expressions",
        subtopics: ["What an idiom is", "Common idioms and their meanings", "Polite expressions", "Figures of speech"],
        objectives: ["Define an idiom", "Explain the meanings of common Igbo idioms", "Recognise polite expressions for delicate matters", "Identify simple figures of speech in Igbo"],
        lesson: {
          title: "Akpaalaokwu na atụmatụ okwu",
          summary: "Understand Igbo idioms and simple figures of speech.",
          minutes: 40,
          notes: `## What is an idiom?
An **idiom** (**akpaalaokwu**) is a **fixed expression whose meaning is different from the ordinary meaning of its words**. It must be learnt as a whole.

## Idiom and proverb
| Idiom (akpaalaokwu) | Proverb (ilu) |
|---|---|
| a phrase, part of a sentence | a complete saying |
| gives a hidden **meaning** | teaches a **lesson** |
| *isi ike* | *Igwe bụ ike* |

## Common idioms
Many are built on **parts of the body**.
| Akpaalaokwu | Literal sense | Real meaning |
|---|---|---|
| **isi ike** | strong head | **stubbornness** |
| **ntị ike** | hard ear | **disobedience** |
| **anya ukwu** | big eye | **greed** |
| **obi ọcha** | white heart | **sincerity; a clear conscience** |
| **obi ojii** | black heart | **wickedness** |
| **obi ike** | strong heart | **courage** |
| **obi ụtọ** | sweet heart | **joy** |
| **ire ụtọ** | sweet tongue | **flattery; smooth talk** |
| **aka ntụtụ** | picking hand | **pilfering** |
| **aka ike** | strong hand | **force; high-handedness** |
| **isi ọma** | good head | **good luck** |
| **isi ọjọọ** | bad head | **bad luck** |
| **ikwu ọnụ abụọ** | to speak with two mouths | **to be deceitful** |
| **iri ngarị** | to eat a bribe | **to take a bribe** |
| **ịgba ama** | — | **to betray; to inform on** |
| **ịta ahụhụ** | to chew suffering | **to suffer** |
| **ịkụ aka n'ụzọ** | to knock on the door | **to begin marriage talks** |
| **isi awọ** | grey head | **old age; wisdom** |

- **Nwa ahụ nwere isi ike.** — That child is stubborn.
- **Anya ukwu egbuola ya.** — Greed has ruined him.
- **Ọ bụ onye obi ọcha.** — He is a sincere person.

## Polite expressions
Blunt words for **death, sickness and other delicate matters** are avoided.
| Blunt | Polite expression |
|---|---|
| he is dead | **Ọ lara mmụọ.** ("He has gone to the spirit world.") / **Ọ hapụla anyị.** ("He has left us.") |
| he is ill | **Ahụ adịghị ya.** ("His body is not well.") |
| she is pregnant | **Ọ dị ime.** |
| to go to the toilet | **ịga mposi** / **ịga n'azụ ụlọ** |

## Figures of speech (atụmatụ okwu)
| Figure | Igbo term | Example |
|---|---|---|
| **simile** | myiri | **O ji oji dị ka unyi.** — He is as black as charcoal. (uses **dị ka** / **ka**) |
| **metaphor** | mbụrụ | **Emeka bụ ọdụm.** — Emeka is a lion. |
| **personification** | mmemmadụ | **Agụụ na-agụ m.** — Hunger is "hungering" me. |
| **exaggeration** | egbeokwu | **O bere ákwá ruo mgbe anya mmiri ya ghọrọ iyi.** — He wept until his tears became a stream. |
| **repetition** | nkwugharị | **Ọ gara, gara, gara.** |
| **rhetorical question** | ajụjụ na-achọghị azịza | **Onye na-amaghị na ọnwụ dị?** — Who does not know that death exists? |
| **sound word** | ụdaokwu | **Ọ dara gbim.** — He fell with a thud. |

## Why use idioms and figures?
- to make speech **vivid and beautiful**
- to speak **politely** of unpleasant things
- to **hide meaning** from children or outsiders
- to show **mastery** of the language — a good speaker is admired

## In examinations
You may be asked to **give the meaning** of an idiom, **use it in a sentence**, or **name the figure of speech** in a line.

## Using an idiom
> **Ezigbo nwa anaghị enwe ntị ike.** — A good child is not disobedient.`,
          examples: `**Example 1.** What is **akpaalaokwu**? *Answer:* An **idiom** — a fixed expression whose meaning differs from the ordinary meaning of its words.

**Example 2.** What does **isi ike** mean? *Answer:* **Stubbornness** — literally "strong head".

**Example 3.** Identify the figure of speech: **Emeka bụ ọdụm.** *Answer:* **Metaphor (mbụrụ)** — Emeka is said to be a lion.`,
        },
        questions: [
          ["E", "The Igbo term for 'idiom' is", "akpaalaokwu", "ilu", "agwụgwa", "abụ", "Its meaning differs from the ordinary meaning of its words."],
          ["E", "'Isi ike' as an idiom means", "stubbornness", "a headache", "a strong man", "good luck", "Literally, 'strong head'."],
          ["E", "'Anya ukwu' as an idiom means", "greed", "large eyes", "blindness", "anger", "Literally, 'big eye'."],
          ["M", "'Obi ọcha' means", "sincerity or a clear conscience", "fear", "sickness of the chest", "a white shirt", "Literally, 'white heart'."],
          ["M", "'O ji oji dị ka unyi' is an example of", "a simile", "a metaphor", "an idiom of death", "a riddle", "The comparison uses 'dị ka' (like)."],
          ["M", "'Ire ụtọ' means", "flattery or smooth talk", "sweet food", "a long tongue", "truthfulness", "Literally, 'sweet tongue'."],
          ["M", "'Ahụ adịghị ya' is a polite way of saying that a person is", "ill", "lazy", "poor", "late", "Literally, 'his body is not well'."],
          ["H", "'Emeka bụ ọdụm' (Emeka is a lion) is an example of", "a metaphor", "a simile", "a sound word", "repetition", "The comparison is made without 'dị ka'."],
          ["H", "'Iri ngarị' means", "to take a bribe", "to eat a feast", "to tell lies", "to pay a debt", "Literally, 'to eat a bribe'."],
          ["H", "A person described by the idiom 'ikwu ọnụ abụọ' is", "deceitful", "talkative but honest", "very hungry", "a good singer", "Literally, speaking with two mouths."],
        ],
      },
      {
        week: 5,
        title: "BECE revision: language",
        subtopics: ["Sounds, tones, syllables and vowel harmony", "Parts of speech", "Verb forms, negation and questions", "Composition, letters and comprehension"],
        objectives: ["Recall the alphabet, vowels, consonants, tones and vowel harmony", "Identify the parts of speech", "Form the main verb forms, negatives and questions", "Recall the layout of compositions and letters"],
        lesson: {
          title: "Ntụleghachi asụsụ",
          summary: "Revise the language section of the Igbo course.",
          minutes: 40,
          notes: `## Sounds and letters
- **alphabet (abiidii)**: 36 letters — Ọnwụ orthography, 1961
- **vowels (ụdaume)** — 8: a, e, i, ị, o, ọ, u, ụ
- **consonants (mgbochiume)** — 28, including 9 digraphs: ch, gb, gh, gw, kp, kw, nw, ny, sh
- **syllabic nasals (myiriụdaume)**: m, n

## Vowel harmony (ndakọrịta ụdaume)
| Group A | Group E |
|---|---|
| a, ị, ọ, ụ | e, i, o, u |
Prefixes and suffixes follow the root: **ịga / iri**; **na-aga / na-eri**; **gara / riri**; **agaghị / erighi**.

## Tones (ụdaolu)
high (ụdaelu), low (ụdaala), downstep. **akwa**: ákwá (cry), àkwà (bed), ákwà (cloth), àkwá (egg).

## Syllables (nkejiokwu)
Types: vowel; consonant + vowel; syllabic nasal. **n-ne** = 2; **a-kwụ-kwọ** = 3.

## Parts of speech (nkejiasụsụ)
| Igbo term | English | Examples |
|---|---|---|
| **aha** | noun | ụlọ, Obi, ịhụnanya |
| **nnọchiaha** | pronoun | m, ị, ọ, anyị, unu, ha |
| **ngwaa** | verb | ga, ri, zụ |
| **nkọwaaha** | adjective | ọma, ukwu, ọhụrụ |
| **nkwuwa** | adverb | ngwa ngwa, nke ọma |
| **mbuụzọ** | preposition | na, n'elu |
| **njikọ** | conjunction | na, mana, n'ihi na |
| **ntimkpu** | interjection | Chei! Ewoo! |

## Pronouns
| | subject | object / possessive |
|---|---|---|
| I | m | m |
| you | ị / i | gị |
| he / she | ọ / o | ya |
| we | anyị | anyị |
| you (pl.) | unu | unu |
| they | ha | ha |

## Verb forms
| Form | Marker | Example |
|---|---|---|
| infinitive | i- / ị- | ịga, iri |
| command | root + vowel | Gaa! Rie! |
| past | -rV | Ọ gara |
| continuous | na- | Ọ na-aga |
| future | ga- | Ọ ga-aga |
| perfect | -la / -le | Ọ gaala |

## Negation
**-ghị / -ghi** (Ọ gaghị); **naghị** (Ọ naghị aga); **gaghị** + verb (Ọ gaghị aga); **-beghị** (Ọ gabeghị); command **a-/e- … -la/-le** (Agala!); **abụghị, adịghị, anọghị, enweghị**.

## "To be" and "to have"
**bụ** (identity), **dị** (state; things), **nọ** (place; living beings), **nwere** (have).

## Questions
Low tone on the pronoun: **Ọ̀ bịara?** Question words: **Gịnị, Onye, Ebee, Mgbe ole, Kedu / Olee, Maka gịnị, Ole, Ego ole**.

## The sentence
Order: **subject – verb – object**; describing words **follow** the noun. Types: **ahịrịmfe**, **ahịrịnha**, **ahịrịmgbagwo**.

## Word formation
nasal prefix (**nri, nkuzi**); o-/ọ- + repeated root (**oriri, ọgụgụ**); compounding (**nwoke, ụgbọelu**); reduplication (**ọsọ ọsọ**); borrowing (**tebụl**); coinage (**ekwentị**).

## Numbers
1–10: otu, abụọ, atọ, anọ, ise, isii, asaa, asatọ, itoolu, iri. Tens: iri abụọ … iri itoolu. **narị** (100), **puku** (1,000), **nde** (1,000,000). Ordinals: **nke mbụ, nke abụọ**… Traditional: **ọgụ** (20), **nnụ** (400).

## Spelling
dot **ị, ọ, ụ**; hyphen in **na-eri, ga-abịa**; apostrophe in **n'ụlọ**; **Igbo**, not *Ibo*.

## Composition and letters
- **edemede**: isiokwu → mmalite → ahụ → mmechi
- **leta nkeonwe**: one address; warm greetings; first name
- **leta anamachọihe**: two addresses; heading; *Abụ m nke gị n'eziokwu*; full name

## Comprehension
read twice; answer briefly in full sentences; "why" answers begin **N'ihi na…**

## Examination advice
- read each question **to the end**
- in objective questions, **watch the dots** — options may differ only by a dotted vowel
- write clearly in Standard Igbo`,
          examples: `**Example 1.** Give the Igbo terms for noun, verb and adjective. *Answer:* **Aha, ngwaa and nkọwaaha**.

**Example 2.** Give the negative of "Ọ gaala". *Answer:* **Ọ gabeghị** (He has not yet gone).

**Example 3.** How many syllables are in **nwanne**? *Answer:* **Three** — nwa-n-ne.`,
        },
        questions: [
          ["E", "In the sentence 'Ada na-agụ akwụkwọ', the word 'agụ' (from gụ) is", "a verb", "a noun", "an adjective", "a preposition", "It tells what Ada is doing."],
          ["E", "The word 'ọhụrụ' in 'akwa ọhụrụ' is", "an adjective", "a verb", "a pronoun", "a conjunction", "It describes the noun akwa."],
          ["E", "The number of syllables in 'nwanne' is", "three", "two", "four", "one", "It divides as nwa-n-ne."],
          ["M", "In 'Akwụkwọ dị n'elu tebụl', the expression 'n'elu' is", "a preposition phrase of place", "a noun subject", "a verb", "an adverb of time", "It shows the position of the book."],
          ["M", "The negative of 'Ọ gaala' is", "Ọ gabeghị", "Ọ gaghị aga", "Agala", "Ọ naghị aga", "-beghị means 'not yet'."],
          ["M", "The word 'mana' in 'Ọ bịara, mana ọ nọghị' is", "a conjunction", "a preposition", "an adjective", "a noun", "It joins two clauses and shows contrast."],
          ["M", "Which of the following is correctly spelt in Standard Igbo?", "Ọ na-aga ahịa", "Ọ naaga ahịa", "O na aga ahia", "Ọna-aga ahịa", "The helping verb is hyphenated and the vowels dotted."],
          ["H", "In 'Obi gbara ọsọ ngwa ngwa', the expression 'ngwa ngwa' is", "an adverb", "an adjective", "a verb", "a pronoun", "It tells how Obi ran."],
          ["H", "Which sentence uses the correct verb for 'to be'?", "Nna m nọ n'ụlọ", "Nna m bụ n'ụlọ", "Nna m nwere n'ụlọ", "Nna m ga n'ụlọ", "Nọ is used for a person in a place."],
          ["H", "The correct form of 'He will buy it' is", "Ọ ga-azụ ya", "O ga-ezụ ya", "Ọ ga-izụ ya", "O ga-azu ya", "The Group A root zụ takes the prefix a- and dotted vowels."],
        ],
      },
      {
        week: 6,
        title: "BECE revision: literature and culture",
        subtopics: ["Oral and written literature", "Proverbs, riddles and idioms", "Customs: names, marriage, dress, greetings", "Festivals, religion, government and character"],
        objectives: ["Recall the forms of oral and written literature", "Recall proverbs, riddles and idioms", "Recall the main Igbo customs", "Recall festivals, beliefs, traditional government and good character"],
        lesson: {
          title: "Ntụleghachi agụmagụ na omenala",
          summary: "Revise the literature and culture sections of the Igbo course.",
          minutes: 40,
          notes: `## Literature
### Oral (agụmagụ ọnụ)
| Form | Note |
|---|---|
| **akụkọ ifo** | folktale — **Mbe**, the tortoise; "Chakpii!" "Woo!" |
| **akụkọ okike** | myth of origin |
| **akụkọ mgbe ochie** | legend, history |
| **ilu** | proverb — "the palm oil with which words are eaten" |
| **agwụgwa** | riddle — "Gwa m, gwa m, gwa m…" |
| **abụ** | songs: lullaby, work, war, praise, funeral |
| **mbem** | chant |
| **okwu ntabi ire** | tongue-twister |
| **akpaalaokwu** | idiom |
| **ejije ọdịnala** | traditional drama — masquerades, festivals |

### Written (agụmagụ ederede)
- **iduuazị** — novel; **Pita Nwana**, *Omenụkọ* (1933), the first; Achara, Bell-Gam, **Tony Ubesie**
- **ejije** — drama
- **abụ** — poetry
- **F. C. Ọgbalụ** and the SPILC (1949); **Ọnwụ orthography** (1961)
- terms: **odee** (author), **agwa** (character), **isiokwu** (theme), **ọnọdụ** (setting), **ihe mmụta** (lesson)

### Figures of speech
myiri (simile), mbụrụ (metaphor), mmemmadụ (personification), egbeokwu (exaggeration), nkwugharị (repetition).

## Culture
### Greetings (ekele)
Ụtụtụ ọma, Ehihie ọma, Mgbede ọma, Ka chi foo; Ndewo, Nnọọ, Daalụ, Biko, Ndo; **kola nut (ọjị)** for visitors.

### The market week
**Eke, Orie, Afọ, Nkwọ**; names — Okeke, Okorie, Okafọ, Okonkwọ; Mgbeke, Mgbafọ.

### Names (aha)
Chukwuma, Chinedu, Ngọzi, Nneka, Obinna, Nnamdi, Adaeze; **Ada** (first daughter), **Ọkpara** (first son); naming with kola, palm wine and prayers; **ọmụgwọ**.

### Marriage (alụmdi na nwunye)
ịkụ aka n'ụzọ → ịjụ ajụjụ → ime ego → **igba nkwụ nwaanyị** → idu ụlọ.

### Dress (ejiji)
- men: **isiagụ**, wrapper, **okpu mmee**, mkpara
- women: blouse, **two wrappers**, **ichafu**, **jigida**
- **Akwete** cloth; **uli**, **nzu**, **ufie**

### Occupations (ọrụ)
ọrụ ugbo (yam), ịzụ ahịa (**ịgba bọị**), ịkpụ ụzụ (**Awka**), ịkpa akwa (**Akwete**), ite nkwụ, ịgba nta, dibịa.

### Food (nri)
ji, akpụ, garị, ede, ofe egwusi, ofe onugbu, ofe ọha, abacha, ụgba, ọkpa.

### Games and music
**mgba** (wrestling), oro, ọkwe; **ọja, ekwe, ogene, udu, igba, ikoro**; dances — **Atịlọgwụ**, Ikpirikpi ọgụ.

### Festivals (emume)
| Festival | Place / note |
|---|---|
| **Iri ji ọhụrụ** | everywhere — New Yam |
| **Ọfala** | Ọnịcha — royal |
| **Igu Arọ** | Nri — new year |
| **Ikeji** | Arọndịzuọgụ — masquerades |
| **Iwa akwa** | Mbaise — manhood |
| **Ijele** | the greatest masquerade |

### Religion (okpukpe)
**Chukwu / Chineke**; **chi**; **Ala**, **Amadịọha**, **Ahịajọkụ**, **Agwụ**; **ndị ichie** (ancestors); **dibịa afa**; **ọfọ na ogu**; **nsọ ala**; reincarnation (**ịlọ ụwa**).

### Government (ọchịchị)
**"Igbo enwe eze"**; ezinaụlọ → **ụmụnna** (ọkpara, ọfọ) → village assembly → obodo; **ndị nze na ọzọ**; **age grades**; **ụmụada**; masquerades; oath and oracle; kings at Ọnịcha (**Obi**), Nri (**Eze Nri**); warrant chiefs; today **Eze / Igwe** and the **Town Union**.

### Character (agwa)
**ezi agwa** — eziokwu, nsọpụrụ, ndidi, umeala, ịdị uchu. *Ezi aha ka ego.* *Nwa bụ nwa ọha.*

### History
homeland in the south-east — **Abia, Anambra, Ebonyi, Enugu, Imo**; traditions of **Nri and Eri**; **Igbo-Ukwu** bronzes; **Igbo Izugbe** as the standard.

## Proverbs to remember
- *Onye ajụjụ anaghị efu ụzọ.* — ask when in doubt
- *Igwe bụ ike.* — unity is strength
- *Egbe bere, ugo bere.* — live and let live
- *Nwata kwọchaa aka, o soro okenye rie nri.* — good conduct brings honour
- *Onye kwe, chi ya ekwe.* — determination

## How to revise
- make a **card** for each topic: three facts, two Igbo terms, one example
- practise **explaining proverbs and idioms**
- be able to **describe a custom in steps**
- learn the **festivals and their towns**`,
          examples: `**Example 1.** Give the order of the main steps in traditional Igbo marriage. *Answer:* **Ịkụ aka n'ụzọ → ịjụ ajụjụ → ime ego → igba nkwụ → idu ụlọ**.

**Example 2.** Name the four Igbo market days. *Answer:* **Eke, Orie, Afọ and Nkwọ**.

**Example 3.** Which festival is celebrated in every Igbo community at harvest? *Answer:* **Iri ji ọhụrụ**, the New Yam Festival.`,
        },
        questions: [
          ["E", "Which of the following is a form of Igbo oral literature?", "akụkọ ifo", "iduuazị", "leta nkeonwe", "nsụpe", "It is the folktale."],
          ["E", "Which of these is the correct order of the Igbo market days?", "Eke, Orie, Afọ, Nkwọ", "Orie, Eke, Nkwọ, Afọ", "Afọ, Eke, Orie, Nkwọ", "Nkwọ, Afọ, Orie, Eke", "The week begins with Eke."],
          ["E", "A titled Igbo man is recognised by his", "red cap", "white head-tie", "waist beads", "double wrapper", "It is called okpu mmee."],
          ["M", "Which festival is correctly matched with its place?", "Ọfala — Ọnịcha", "Ikeji — Mbaise", "Iwa akwa — Nri", "Igu Arọ — Arọndịzuọgụ", "It is the royal festival of the Obi."],
          ["M", "Which craft is correctly matched with its town?", "blacksmithing — Awka", "weaving — Ọnịcha", "pottery — Akwete", "carving — Aba", "Akwete is known for weaving."],
          ["M", "In an Igbo novel, 'agwa' refers to", "the characters", "the setting", "the title", "the publisher", "They are the people in the story."],
          ["M", "The correct order of these stages of traditional marriage is", "ịkụ aka n'ụzọ, ime ego, igba nkwụ", "igba nkwụ, ịkụ aka n'ụzọ, ime ego", "ime ego, igba nkwụ, ịkụ aka n'ụzọ", "igba nkwụ, ime ego, ịkụ aka n'ụzọ", "Knocking comes first; wine-carrying follows the bride price."],
          ["H", "Which of the following is NOT an Igbo deity?", "Omenụkọ", "Ala", "Amadịọha", "Ahịajọkụ", "It is the title of the first Igbo novel."],
          ["H", "Which statement about Igbo traditional government is correct?", "Decisions were reached by discussion in an open assembly", "A single king ruled every community absolutely", "Women had no organisations", "There were no elders' councils", "Authority was shared among many groups."],
          ["H", "Kola nut, palm wine and prayers by the eldest man are central to", "the naming ceremony and the welcome of guests", "a wrestling match", "the weaving of Akwete cloth", "the game of ọkwe", "Kola is the symbol of hospitality and blessing."],
        ],
      },
    ],
  },
];
