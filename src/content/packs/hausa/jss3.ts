import type { TermPlan } from "../types";

/** JSS3 Hausa — original Precious PS content following the national Basic Education structure. Explanations are given in English with Hausa terms and examples. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Ordinal numbers, time and money",
        subtopics: ["Ordinal numbers", "Telling the time", "Dates and age", "Fractions and repeated numbers"],
        objectives: ["Form ordinal numbers with na and ta", "Tell the time in Hausa", "Say dates and ages", "Use words for half, both, twice and each"],
        lesson: {
          title: "Lambobi a aikace: matsayi, lokaci da kuɗi",
          summary: "Use Hausa numbers for position, time, dates and money.",
          minutes: 40,
          notes: `## Ordinal numbers
Ordinals show **position**. They are formed with **na** (for a masculine noun) or **ta** (for a feminine noun) before the number; "first" uses **farko**.
| Position | Masculine | Feminine |
|---|---|---|
| 1st | **na farko** | **ta farko** |
| 2nd | **na biyu** | **ta biyu** |
| 3rd | **na uku** | **ta uku** |
| 4th | **na huɗu** | **ta huɗu** |
| 10th | **na goma** | **ta goma** |
| last | **na ƙarshe** | **ta ƙarshe** |

- **yaro na uku** — the third boy
- **yarinya ta uku** — the third girl
- **rana ta bakwai** — the seventh day
- **Musa ya zo na biyu a jarrabawa.** — Musa came second in the examination.

## Three uses of a number
| Use | Example | Meaning |
|---|---|---|
| counting | **biyu** | two |
| with a noun | **littattafai biyu** | two books |
| position | **littafi na biyu** | the second book |

## Telling the time
**Ƙarfe** ("iron" — from the striking of a bell) means o'clock; **minti** means minute; **rabi** means half; **awa** means hour.
| Hausa | English |
|---|---|
| **Ƙarfe nawa ne?** | What time is it? |
| **Ƙarfe uku ne.** | It is three o'clock. |
| **ƙarfe uku da rabi** | half past three |
| **ƙarfe huɗu da minti goma** | ten minutes past four |
| **ƙarfe shida saura minti biyar** | five minutes to six |
| **ƙarfe takwas na safe** | eight o'clock in the morning |
| **ƙarfe bakwai na dare** | seven o'clock at night |
The five daily prayers also mark the day: **Asuba** (dawn), **Azahar** (early afternoon), **La'asar** (late afternoon), **Magariba** (sunset), **Isha** (night).

## Dates and age
- **ɗaya ga watan Oktoba** — 1st October
- **Yau goma ga watan Mayu ne.** — Today is the tenth of May.
- **An haife ni a shekarar 2012.** — I was born in 2012.
- **Shekaruna goma sha huɗu.** — I am fourteen years old.

## Money
- **naira hamsin** — ₦50
- **naira ɗari biyu** — ₦200
- **naira dubu biyar** — ₦5,000
- **naira miliyan ɗaya** — one million naira

## Fractions
| Hausa | English |
|---|---|
| **rabi** | half |
| **sulusi** | one third |
| **rubu'i** | one quarter |
| **kashi ɗaya cikin biyar** | one fifth ("one part in five") |

## Repeated and grouped numbers
| Hausa | English |
|---|---|
| **sau ɗaya** | once |
| **sau biyu** | twice |
| **sau uku** | three times |
| **biyu-biyu** | two each; in twos |
| **su biyu / dukansu biyu** | both of them |
| **duka** | all |
| **ɗaya kawai** | only one |
| **da yawa** | many |
| **kaɗan** | a few, a little |

## Arithmetic words
**ƙari / tarawa** (addition), **ragi / ɗebewa** (subtraction), **ninkawa** (multiplication), **rabawa** (division). Mathematics as a subject is **Lissafi**.
- **Biyu da uku biyar ne.** — Two and three are five.`,
          examples: `**Example 1.** Translate "the third boy" and "the third girl". *Answer:* **yaro na uku** and **yarinya ta uku** — *na* for masculine, *ta* for feminine.

**Example 2.** Say "It is three o'clock" and "half past three". *Answer:* **Ƙarfe uku ne** and **ƙarfe uku da rabi**.

**Example 3.** What do **sau biyu** and **rabi** mean? *Answer:* **Twice** and **half**.`,
        },
        questions: [
          ["E", "'Na biyu' means", "the second", "two", "twice", "twelve", "Na before a number makes it an ordinal."],
          ["E", "The Hausa word for 'half' is", "rabi", "minti", "ƙarfe", "sau", "As in 'ƙarfe uku da rabi'."],
          ["E", "'Na farko' means", "the first", "the last", "the tenth", "only one", "Farko is used instead of ɗaya."],
          ["M", "'Ƙarfe uku' means", "three o'clock", "three days", "three minutes", "three irons", "Ƙarfe is used for telling the time."],
          ["M", "'Sau biyu' means", "twice", "two each", "both", "second", "Sau means 'times'."],
          ["M", "'Na ƙarshe' means", "the last", "the first", "the middle", "the next", "Ƙarshe means end."],
          ["M", "The correct ordinal in 'the third girl' is", "yarinya ta uku", "yarinya na uku", "yarinya uku", "uku yarinya", "A feminine noun takes 'ta'."],
          ["H", "'Ƙarfe huɗu da minti goma' is", "ten minutes past four", "ten minutes to four", "four minutes past ten", "half past four", "Da adds the minutes."],
          ["H", "'Rubu'i' means", "one quarter", "one third", "one half", "one fifth", "Sulusi is one third."],
          ["H", "The prayer time 'Magariba' falls at", "sunset", "dawn", "early afternoon", "midnight", "It follows La'asar and precedes Isha."],
        ],
      },
      {
        week: 2,
        title: "Adverbs and ideophones",
        subtopics: ["What an adverb is", "Adverbs of manner and degree", "Adverbs of time and place", "Ideophones"],
        objectives: ["Define an adverb", "Use adverbs of manner and degree", "Use adverbs of time and place", "Recognise ideophones that describe actions and qualities vividly"],
        lesson: {
          title: "Bayanau da amsa-kama",
          summary: "Use Hausa adverbs and ideophones to tell how, when and where.",
          minutes: 40,
          notes: `## What is an adverb?
An **adverb** (**bayanau** — "explainer") tells more about a **verb** — **how, when, where or how much** an action is done.

## Position
Most adverbs come **after the verb**, usually at the end of the sentence.

## Adverbs of manner (how?)
Many are formed with **da** + a noun, or with **a** + a noun.
| Hausa | English | Example |
|---|---|---|
| **da sauri** | quickly | **Ya gudu da sauri.** — He ran quickly. |
| **a hankali** | slowly, carefully | **Tana tafiya a hankali.** — She is walking slowly. |
| **da kyau** | well | **Ya karanta da kyau.** — He read well. |
| **da ƙarfi** | forcefully, loudly | **Ya yi magana da ƙarfi.** — He spoke loudly. |
| **maza-maza** | at once, quickly | **Zo maza-maza.** — Come at once. |
| **tare** | together | **Mun tafi tare.** — We went together. |
| **haka** | thus, so | **Yi shi haka.** — Do it like this. |

## Adverbs of degree (how much?)
| Hausa | English | Example |
|---|---|---|
| **ƙwarai / sosai** | very, very much | **Yana da kyau ƙwarai.** — It is very good. |
| **kaɗan** | a little | **Ya ci kaɗan.** — He ate a little. |
| **da yawa** | much, a lot | **Na gode da yawa.** — Thank you very much. |
| **gaba ɗaya** | completely | **Ya ƙare gaba ɗaya.** — It is completely finished. |
| **ko kaɗan** | at all | **Bai zo ba ko kaɗan.** — He did not come at all. |

## Adverbs of time (when?)
**yau** (today), **jiya** (yesterday), **gobe** (tomorrow), **yanzu** (now), **kullum** (always), **wani lokaci** (sometimes), **da wuri** (early), **tukuna** (yet; first), **kuma** (again), **da** (formerly).
- **Zan zo gobe.** — I will come tomorrow.
- **Yakan zo makaranta da wuri.** — He comes to school early.

## Adverbs of place (where?)
**nan** (here), **can** (there), **sama** (above), **ƙasa** (below), **waje** (outside), **ciki** (inside), **gida** (at home), **ko'ina** (everywhere), **kusa** (near), **nesa** (far).
- **Zo nan.** — Come here.

## Ideophones
An **ideophone** (**amsa-kama**) is a vivid word that pictures a **sound, colour, size or manner**. Each belongs to **particular words**.
| Ideophone | Goes with | Meaning |
|---|---|---|
| **fat** | fari | **fari fat** — snow-white |
| **ƙirin** | baƙi | **baƙi ƙirin** — jet-black |
| **wur** | ja | **ja wur** — bright red |
| **shar** | kore | **kore shar** — deep green |
| **tsit** | shiru | **shiru tsit** — dead silent |
| **sak** | miƙe | **miƙe sak** — perfectly straight |
| **ƙal / ƙalau** | lafiya | **lafiya ƙalau** — perfectly well |
| **tik** | tsaya | **Ya tsaya tik.** — He stopped dead. |
| **rim** | faɗi | **Ya faɗi rim.** — He fell with a thud. |

## Forming adverbs by repetition
**maza → maza-maza** (quickly); **kaɗan → kaɗan-kaɗan** (little by little); **sannu → sannu-sannu** (gently).

## Find the adverb
> **Yaron ya yi magana a hankali.** — The boy spoke *gently*.`,
          examples: `**Example 1.** Translate "He ran quickly." *Answer:* **Ya gudu da sauri**.

**Example 2.** What does **ƙwarai** mean? *Answer:* **Very / very much** — as in *Yana da kyau ƙwarai*.

**Example 3.** What is an ideophone? Give one. *Answer:* A **vivid word picturing sound, colour or manner**, e.g. **fari fat** (snow-white).`,
        },
        questions: [
          ["E", "The Hausa term for 'adverb' is", "bayanau", "sifa", "suna", "aikatau", "It tells more about a verb."],
          ["E", "'Da sauri' means", "quickly", "slowly", "quietly", "badly", "Sauri means speed."],
          ["E", "'Yana da kyau ƙwarai' means", "It is very good", "It is not good", "It is a little good", "It was good before", "Ƙwarai means 'very'."],
          ["M", "'A hankali' means", "slowly, carefully", "at once", "loudly", "completely", "Hankali means care or sense."],
          ["M", "In 'Yaron ya yi magana a hankali', the adverb is", "a hankali", "yaron", "ya yi", "magana", "It tells how the boy spoke."],
          ["M", "'Yanzu' is an adverb of", "time", "place", "manner", "degree", "It means 'now'."],
          ["M", "'Mun tafi tare' means", "We went together", "We went early", "We went alone", "We went again", "Tare means 'together'."],
          ["H", "Vivid words such as 'fat', 'ƙirin' and 'tsit' are known as", "ideophones", "pronouns", "prepositions", "conjunctions", "The Hausa term is amsa-kama."],
          ["H", "The ideophone that goes with 'baƙi' to mean 'jet-black' is", "ƙirin", "fat", "wur", "shar", "Fat goes with fari and wur with ja."],
          ["H", "'Shiru tsit' means", "dead silent", "very loud", "bright red", "perfectly straight", "Tsit strengthens shiru (silence)."],
        ],
      },
      {
        week: 3,
        title: "Conjunctions",
        subtopics: ["What a conjunction is", "Joining words", "Joining sentences", "Conjunctions of reason, condition and time"],
        objectives: ["Define a conjunction", "Join words with da and ko", "Join sentences with kuma and amma", "Use saboda, idan, lokacin da and kafin"],
        lesson: {
          title: "Mahaɗi",
          summary: "Join words and sentences with Hausa conjunctions.",
          minutes: 40,
          notes: `## What is a conjunction?
A **conjunction** (**mahaɗi** — "joiner") is a word that **joins** words, phrases or sentences.

## Joining words and phrases
| Hausa | English | Example |
|---|---|---|
| **da** | and | **Audu da Binta** — Audu and Binta |
| **ko** | or | **doya ko shinkafa** — yam or rice |
| **da … da** | both … and | **da maza da mata** — both men and women |
| **ko … ko** | either … or | **ko yau ko gobe** — either today or tomorrow |
| **tare da** | together with | **Musa tare da babansa** — Musa with his father |

**da** joins **nouns**:
- **Na sayi littafi da alƙalami.** — I bought a book and a pen.

## Joining sentences
| Hausa | English | Example |
|---|---|---|
| **kuma** | and, also | **Ya zo, kuma ya ci abinci.** — He came and (also) ate. |
| **sai** | then | **Ya zo, sai ya zauna.** — He came, then he sat down. |
| **amma** | but | **Ya zo, amma bai ci abinci ba.** — He came, but he did not eat. |
| **sai dai** | however, except that | **Na kira shi, sai dai bai amsa ba.** — I called him, but he did not answer. |
| **ko da yake** | although | **Ko da yake ana ruwa, ya tafi.** — Although it was raining, he went. |

Actions in a chain simply repeat the pronoun:
- **Ya je kasuwa, ya sayi doya, ya dawo.** — He went to market, bought yams and came back.

## Reason
| Hausa | English | Example |
|---|---|---|
| **saboda / domin** | because | **Bai zo ba saboda ba shi da lafiya.** — He did not come because he was ill. |
| **don haka / saboda haka** | therefore | **An yi ruwa; don haka ba mu fita ba.** — It rained; therefore we did not go out. |

## Condition
| Hausa | English | Example |
|---|---|---|
| **idan / in** | if | **Idan ka yi karatu, za ka ci jarrabawa.** — If you study, you will pass the examination. |
| **sai dai idan** | unless | **Ba zan tafi ba sai dai idan ka zo.** — I will not go unless you come. |

## Time
| Hausa | English | Example |
|---|---|---|
| **lokacin da / sa'ad da** | when | **Lokacin da na zo, ya riga ya tafi.** — When I came, he had already gone. |
| **kafin** | before | **Wanke hannunka kafin ka ci abinci.** — Wash your hands before you eat. |
| **bayan** | after | **Bayan mun ci abinci, mun yi barci.** — After we ate, we slept. |
| **har** | until | **Jira har in zo.** — Wait until I come. |
| **tun** | since | **Tun da ya tafi, ban gan shi ba.** — Since he left, I have not seen him. |

## Purpose and reported speech
- **don / domin** — so that: **Zo da wuri don mu tafi.** — Come early so that we may go.
- **cewa** — that: **Ya ce (cewa) zai zo.** — He said that he would come.

## Summary
| Type | Words |
|---|---|
| addition | da, kuma, sai |
| choice | ko |
| contrast | amma, sai dai, ko da yake |
| reason | saboda, domin, don haka |
| condition | idan, in |
| time | lokacin da, kafin, bayan, har |
| purpose | don, domin |

## The many jobs of "da"
1. **and**: Audu **da** Binta
2. **with**: Ya tafi **da** ni
3. **have**: Ina **da** kuɗi
4. **that / which** (relative): yaron **da** ya zo
The sentence shows which is meant.

## Practice
Join: *Audu dogo ne. Musa gajere ne.* → **Audu dogo ne, amma Musa gajere ne.**`,
          examples: `**Example 1.** Translate "yam or rice". *Answer:* **doya ko shinkafa**.

**Example 2.** Join with "but": *Ya zo. Bai ci abinci ba.* *Answer:* **Ya zo, amma bai ci abinci ba**.

**Example 3.** Which conjunction means "because"? *Answer:* **saboda** (or *domin*).`,
        },
        questions: [
          ["E", "The Hausa term for 'conjunction' is", "mahaɗi", "aikatau", "bayanau", "suna", "It joins words or sentences."],
          ["E", "The Hausa conjunction meaning 'and' between two nouns is", "da", "amma", "kafin", "idan", "As in 'Audu da Binta'."],
          ["E", "'Amma' means", "but", "or", "if", "when", "It shows contrast."],
          ["M", "'Doya ko shinkafa' means", "yam or rice", "yam and rice", "yam with rice", "yam but not rice", "Ko offers a choice."],
          ["M", "The conjunction 'saboda' expresses", "reason", "choice", "time", "contrast", "It means 'because'."],
          ["M", "'Ya zo, kuma ya ci abinci' means", "He came and also ate", "He came but did not eat", "He came because he ate", "He will come to eat", "Kuma joins two clauses."],
          ["M", "'Lokacin da na zo' means", "When I came", "Because I came", "If I come", "Before I came", "Lokacin da introduces a time clause."],
          ["H", "'Idan ka yi karatu, za ka ci jarrabawa' means", "If you study, you will pass the examination", "When you studied, you passed", "Because you study, you pass", "Although you study, you fail", "Idan expresses a condition."],
          ["H", "'Wanke hannunka kafin ka ci abinci' means", "Wash your hands before you eat", "Wash your hands after you eat", "Wash your hands and eat", "Wash your hands or do not eat", "Kafin means 'before'."],
          ["H", "In 'yaron da ya zo jiya' (the boy who came yesterday), the word 'da' means", "who / that", "and", "with", "have", "It introduces a relative clause."],
        ],
      },
      {
        week: 4,
        title: "Types of sentences",
        subtopics: ["Sentences by function", "Simple sentences", "Compound sentences", "Complex sentences"],
        objectives: ["Classify sentences as statement, question, command or exclamation", "Identify a simple sentence", "Identify a compound sentence", "Identify a complex sentence and its dependent clause"],
        lesson: {
          title: "Ire-iren jimla",
          summary: "Classify Hausa sentences by function and by structure.",
          minutes: 40,
          notes: `## A sentence
A **sentence** (**jimla**, plural **jimloli**) expresses a **complete thought**.

## A. By function
| Kind | Hausa term | Example | Ends with |
|---|---|---|---|
| **statement** | jimlar bayani | **Audu ya tafi kasuwa.** — Audu went to market. | full stop |
| **question** | jimlar tambaya | **Audu ya tafi kasuwa?** — Did Audu go to market? | question mark |
| **command** | jimlar umarni | **Tafi kasuwa!** — Go to market! | full stop or exclamation mark |
| **exclamation** | jimlar motsin rai | **Kai! Ya yi tsawo!** — My! How tall he is! | exclamation mark |

A command to one male has **no stated subject**: **Zauna!** To a female: **Ki zauna!** To many: **Ku zauna!**
A **wish or prayer** uses the plain pronoun: **Allah ya ba mu lafiya.** — May God give us health.

## B. By structure
### 1. Simple sentence — sassauƙar jimla
**One clause** with **one main verb** or one statement.
- **Binta ta sayi riga.** — Binta bought a gown.
- **Ana ruwa.** — It is raining.
- **Audu malami ne.** — Audu is a teacher.

### 2. Compound sentence — haɗaɗɗiyar jimla
**Two or more simple sentences of equal rank**, joined by **kuma, amma, ko, sai**.
- **Binta ta sayi riga, kuma ta ɗinka ta.** — Binta bought cloth and sewed it.
- **Na kira shi, amma bai amsa ba.** — I called him, but he did not answer.
Each part could stand alone.

### 3. Complex sentence — sarƙaƙƙiyar jimla
A **main clause** with one or more **dependent clauses** that cannot stand alone. The dependent clause is introduced by words such as **da, cewa, lokacin da, idan, saboda, don, kafin**.
- **Yaron da ya zo jiya ya tafi.** — The boy *who came yesterday* has gone.
- **Na san cewa zai zo.** — I know *that he will come*.
- **Lokacin da na zo, sun ci abinci.** — *When I came*, they had eaten.
- **Idan an yi ruwa, ba za mu tafi ba.** — *If it rains*, we will not go.

## Kinds of dependent clause
| Clause | Introduced by | Example |
|---|---|---|
| **relative** (describes a noun) | **da** | littafin **da na saya** — the book that I bought |
| **noun clause** | **cewa** | Ya ce **cewa yana zuwa** |
| **time** | **lokacin da, kafin, bayan** | **Kafin ya zo**… |
| **reason** | **saboda** | …**saboda ya gaji** |
| **condition** | **idan** | **Idan kana so**… |
| **purpose** | **don** | …**don ya ci jarrabawa** |

## Parts of a sentence
- **mai aikatawa / suna** — subject: **Binta**
- **aikatau** — verb: **sayi**
- **karɓau** — object: **riga**
- **bayanau** — adverbial: **jiya**

## Punctuation (alamomin rubutu)
| Mark | Hausa name |
|---|---|
| **.** | aya |
| **,** | waƙafi |
| **?** | alamar tambaya |
| **!** | alamar motsin rai |
| **" "** | alamar zance |
| **'** | hamza (the glottal-stop mark, as in a'a) |

## Capital letters
Begin every sentence and every **proper noun** with a capital (**babban baƙi**): **Audu, Kano, Allah, Litinin**.

## Practice
Classify: (a) **Ku yi shiru!** — command. (b) **Wa ya zo?** — question. (c) **Musa ya yi karatu, kuma ya ci jarrabawa.** — compound statement.`,
          examples: `**Example 1.** What kind of sentence is **"Zauna!"**? *Answer:* A **command** (jimlar umarni).

**Example 2.** Identify the structure: **Na kira shi, amma bai amsa ba.** *Answer:* **Compound** — two equal clauses joined by *amma*.

**Example 3.** Pick out the dependent clause: **Yaron da ya zo jiya ya tafi.** *Answer:* **da ya zo jiya** (who came yesterday).`,
        },
        questions: [
          ["E", "A sentence that gives an order is called", "jimlar umarni", "jimlar tambaya", "jimlar bayani", "jimlar motsin rai", "Umarni means command."],
          ["E", "'Wa ya zo?' is", "a question", "a command", "a statement", "an exclamation", "It begins with a question word."],
          ["E", "The Hausa name for the full stop is", "aya", "waƙafi", "hamza", "alamar tambaya", "It ends a statement."],
          ["M", "'Audu ya tafi kasuwa.' is an example of", "a statement", "a question", "a command", "a prayer", "It simply gives information."],
          ["M", "'Binta ta sayi riga, kuma ta ɗinka ta' is", "a compound sentence", "a simple sentence", "a complex sentence", "a command", "Two equal clauses are joined by kuma."],
          ["M", "The Hausa name for the comma is", "waƙafi", "aya", "alamar zance", "alamar motsin rai", "It marks a short pause."],
          ["M", "The Hausa term for a simple sentence is", "sassauƙar jimla", "haɗaɗɗiyar jimla", "sarƙaƙƙiyar jimla", "jimlar tambaya", "It has a single clause."],
          ["H", "'Lokacin da na zo, sun ci abinci' is", "a complex sentence", "a simple sentence", "a compound sentence", "a command", "It has a dependent time clause and a main clause."],
          ["H", "In 'littafin da na saya' (the book that I bought), the word 'da' introduces", "a relative clause", "a question", "a command", "a negative", "The clause describes the noun littafi."],
          ["H", "'Allah ya ba mu lafiya' is best described as", "a wish or prayer", "a question", "a compound statement", "a relative clause", "The plain pronoun 'ya' expresses a wish."],
        ],
      },
      {
        week: 5,
        title: "Word formation",
        subtopics: ["Roots and affixes", "The prefix ma-", "Mai, ɗan and abstract endings", "Reduplication, compounding and borrowing"],
        objectives: ["Identify the root of a word", "Form nouns of agent, place and instrument with ma-", "Form words with mai, ɗan and abstract endings", "Explain reduplication, compounding and borrowing"],
        lesson: {
          title: "Ƙirƙirar kalmomi",
          summary: "See how new Hausa words are formed from simpler ones.",
          minutes: 40,
          notes: `## Roots and affixes
A **root** (**tushen kalma**) is the simplest form of a word: **noma** (farm), **rubuta** (write), **karanta** (read), **buɗe** (open).
An **affix** (**ɗafi**) is a part added to a root — a **prefix** before it or a **suffix** after it.

## 1. The prefix ma- : the doer
**ma- + verb root + -i** gives the **person who does** the action (feminine **-iya**, plural **-a**):
| Verb | Doer | Plural | Meaning |
|---|---|---|---|
| noma (farm) | **manomi** | **manoma** | farmer |
| rubuta (write) | **marubuci** | **marubuta** | writer |
| ƙera (forge) | **maƙeri** | **maƙera** | blacksmith |
| saƙa (weave) | **masaƙi** | **masaƙa** | weaver |
| ɗinka (sew) | **maɗinki** | **maɗinka** | tailor |
| haifa (give birth) | **mahaifi / mahaifiya** | **mahaifa** | father / mother; parents |
| koya (teach) | **malami** is used instead | — | teacher |

## 2. The prefix ma- : the place
**ma- + root + -a** (or **-i**) gives the **place where** the action is done:
| Verb | Place | Meaning |
|---|---|---|
| karanta (read) | **makaranta** | school |
| saƙa (weave) | **masaƙa** | weaving place |
| ƙera (forge) | **maƙera** | smithy |
| yanka (slaughter) | **mayanka** | abattoir |
| salla (pray) | **masallaci** | mosque |
| sauka (lodge) | **masauki** | lodging |

## 3. The prefix ma- : the instrument
**ma- + root + -i** gives the **tool** for the action:
| Verb | Tool | Meaning |
|---|---|---|
| buɗe (open) | **mabuɗi** | key, opener |
| duba (look) | **madubi** | mirror |
| girba (reap) | **magirbi** | harvesting tool |
| goge (rub) | **magogi** | eraser, brush |

## 4. Mai and maras
- **mai** (pl. **masu**) + noun = "owner of / one who has": **mai gida** (householder), **mai kuɗi** (rich person), **mai mota** (car owner), **masu aiki** (workers)
- **maras / marar** + noun = "one lacking": **maras lafiya** (sick person), **marar kunya** (shameless person)

## 5. Ɗan, 'yar and 'yan
**ɗan kasuwa** (trader), **'yar makaranta** (schoolgirl), **'yan sanda** (police), **ɗan Kano** (man of Kano).

## 6. The prefix ba- : a person of a place or group
**ba- + name + -e / -iya**, with a special plural:
| Singular | Plural | Meaning |
|---|---|---|
| **Bahaushe / Bahaushiya** | **Hausawa** | Hausa person |
| **Bakano** | **Kanawa** | person of Kano |
| **Bayarabe** | **Yarabawa** | Yoruba person |
| **Bature** | **Turawa** | European |

## 7. Abstract nouns
Endings such as **-ci, -nci, -ta, -ntaka** make nouns of **quality or state**:
| Word | From | Meaning |
|---|---|---|
| **sarauta** | sarki | kingship |
| **yaranta** | yaro | childhood |
| **zumunci** | zumu | kinship |
| **talauci** | — | poverty |
| **mutunci** | mutum | dignity, humanity |
| **'yanci** | 'ya | freedom |
| **abota** | aboki | friendship |
Names of **languages** end in **-nci / -anci**: **Hausanci, Turanci** (English), **Larabci** (Arabic), **Yarbanci**, **Faransanci**.

## 8. Reduplication
- **maza-maza** (quickly), **kaɗan-kaɗan** (little by little), **sannu-sannu** (gently)
- **toka-toka** (grey), **ruwa-ruwa** (watery)
- plurals such as **littattafai**

## 9. Compounding
| Compound | Literally | Meaning |
|---|---|---|
| **ruwan sama** | water of above | rain |
| **jirgin sama** | vessel of above | aeroplane |
| **jirgin ƙasa** | vessel of the ground | train |
| **jirgin ruwa** | vessel of water | ship |
| **gidan sauro** | house of mosquito | mosquito net |
| **farin ciki** | white stomach | happiness |
| **baƙin ciki** | black stomach | sadness |
| **ɗan'uwa** | son of mother | brother |

## 10. Borrowing (kalmomin aro)
- from **Arabic**: **littafi, malami, alƙalami, lafiya, duniya, albarka, lokaci, hukuma**
- from **English**: **tebur, mota, likita, asibiti** (hospital), **rediyo, tasha** (station), **fensir, kwamfuta**

## Why it matters
Knowing how words are built helps you to **work out meanings**, **spell correctly** and **enlarge your vocabulary**.`,
          examples: `**Example 1.** Form the doer from the verb **noma**. *Answer:* **manomi** (farmer) — *ma-* + noma + *-i*.

**Example 2.** What does **makaranta** mean, and from which verb is it formed? *Answer:* **School** — "place of reading", from **karanta** (read).

**Example 3.** What is the literal meaning of **jirgin sama**? *Answer:* **"Vessel of above"** — an aeroplane.`,
        },
        questions: [
          ["E", "'Manomi' (farmer) is formed from the verb", "noma", "nema", "nuna", "niƙa", "Ma- plus the root plus -i names the doer."],
          ["E", "'Makaranta' (school) literally means", "place of reading", "house of children", "seat of the teacher", "field of play", "It comes from karanta — to read."],
          ["E", "'Mai kuɗi' means", "a rich person", "a poor person", "a money bag", "a market", "Mai means 'owner of'."],
          ["M", "'Mabuɗi' (key) is formed with ma- from the verb", "buɗe (open)", "rufe (close)", "duba (look)", "ɗauka (take)", "Ma- … -i here names the instrument."],
          ["M", "'Marubuci' means", "a writer", "a book", "a pen", "a school", "It comes from rubuta — to write."],
          ["M", "The plural of 'Bahaushe' is", "Hausawa", "Bahaushai", "Bahaushiya", "Hausanci", "Hausanci is the language or manner."],
          ["M", "'Ruwan sama', a compound meaning 'water of above', is", "rain", "a river", "a well", "the sea", "Sama means above or sky."],
          ["H", "'Turanci' means", "the English language", "a European man", "England", "a turban", "Language names end in -nci."],
          ["H", "'Maras lafiya' means", "a sick person", "a healthy person", "a doctor", "a hospital", "Maras means 'one lacking'."],
          ["H", "The word 'asibiti' (hospital) is", "borrowed from English", "formed with the prefix ma-", "a reduplicated word", "an ideophone", "It comes from 'hospital'."],
        ],
      },
      {
        week: 6,
        title: "Standard orthography",
        subtopics: ["Ajami and Boko", "Standardising Boko", "Rules of spelling and word division", "Common errors"],
        objectives: ["Outline the history of writing Hausa in Ajami and Boko", "State how Boko spelling was standardised", "Apply the main rules of Hausa spelling and word division", "Correct common spelling errors"],
        lesson: {
          title: "Ƙa'idojin rubutun Hausa",
          summary: "Spell and divide Hausa words according to the standard rules.",
          minutes: 40,
          notes: `## Two scripts
- **Ajami** — Hausa written in **Arabic letters**. It grew with Islamic learning and was used for poetry, letters and records, notably by the scholars of the **Sokoto jihad**.
- **Boko** — Hausa written in **Roman letters**, introduced under British rule in the early 1900s. Rules for it were first drawn up by **Hans Vischer**, the first Director of Education, in **1912**.

## Standardising Boko
- **1930s** — the **Translation Bureau** (later **Literature Bureau**) at Zaria under **Rupert East** fixed spellings and published books; the newspaper **Gaskiya Ta Fi Kwabo** began in **1939**
- **1955** — the **Hausa Language Board** was set up to settle spelling and new words
- later conferences of scholars from Nigeria and Niger agreed on the **standard orthography** used today, based on the **Kano** dialect

## Rules of spelling
### 1. Write the hooked letters
**ɓ, ɗ, ƙ** and **ƴ / 'y** are separate letters:
| With plain letter | With hooked letter |
|---|---|
| **baki** — mouth | **baƙi** — black; guests |
| **kasa** — to fail | **ƙasa** — earth, country |
| **daki** — pounding | **ɗaki** — room |
| **ya** — he | **'ya** — daughter |

### 2. Write the glottal stop where it is heard
**a'a** (no), **sa'a** (luck; hour), **Jumma'a**, **'ya'ya** (children).

### 3. Double a long consonant
**hannu, Allah, littafi, tukunna, sannu**.

### 4. Do not mark tone or vowel length
Ordinary writing has **no tone marks** and no doubled vowels: **rana**, not *raanaa*.

### 5. Word division
- the **pronoun before the verb is a separate word**: **ya tafi**, **sun zo**, **ina zuwa**
- future: **za ka**, **za ta**, **za su** are two words; but **zan** and **zai** are one
- negative: **ba su zo ba**; but **ban** and **bai** are joined
- **ne** and **ce** are separate words: **Audu malami ne**
- **possessive endings are joined** to the noun: **littafina, gidansu**
- the **linker is joined**: **gidan Audu, motar Binta**
- **da** (and / with) is separate: **Audu da Binta**

### 6. Hyphens
Used in **reduplicated words** and some **compounds**: **maza-maza, kaɗan-kaɗan, kacici-kacici**.

### 7. Capital letters
Sentences and proper nouns begin with capitals: **Hausa, Kano, Allah, Litinin, Ramadan**.

### 8. Borrowed words
Spell them **as Hausa speakers pronounce them**: **tebur, fensir, asibiti, kwamfuta**.

### 9. c, not ch; sh and ts
Write **ci**, not *chi*; **shida**; **tsuntsu**.

## Common errors
| Wrong | Right | Reason |
|---|---|---|
| kofa | **ƙofa** | hooked ƙ |
| daki | **ɗaki** (room) | hooked ɗ |
| yatafi | **ya tafi** | pronoun is separate |
| zaka | **za ka** | two words |
| littafi na | **littafina** | possessive is joined |
| gida n Audu | **gidan Audu** | linker is joined |
| chi | **ci** | Hausa c = "ch" |
| aa | **a'a** | glottal stop |

## Checking your work
1. Are all **hooked letters** written?
2. Are **pronouns separated** from verbs?
3. Are **possessives and linkers joined**?
4. Are **glottal stops** and **double consonants** shown?

## Dialect forms
Write the **standard** form in examinations, even if your own dialect says the word differently.`,
          examples: `**Example 1.** What are the two scripts used for writing Hausa? *Answer:* **Ajami** (Arabic letters) and **Boko** (Roman letters).

**Example 2.** Correct the spelling: *yatafi kasuwa da littafi na*. *Answer:* **ya tafi kasuwa da littafina**.

**Example 3.** What is the difference between **baki** and **baƙi**? *Answer:* **baki** means **mouth**; **baƙi** means **black** (or guests).`,
        },
        questions: [
          ["E", "Hausa written in Roman letters is known as", "Boko", "Ajami", "Larabci", "Kananci", "It is the script taught in schools."],
          ["E", "Which of the following is correctly spelt?", "ƙofa", "kofa", "qofa", "khofa", "The word for 'door' has a hooked ƙ."],
          ["E", "In standard Hausa writing, tone marks are", "not written", "written on every vowel", "written on nouns only", "written on verbs only", "The reader relies on context."],
          ["M", "The correct way to write 'he went' is", "ya tafi", "yatafi", "ya-tafi", "y'tafi", "The pronoun is a separate word."],
          ["M", "The correct way to write 'my book' is", "littafina", "littafi na", "littafi-na", "littafi'na", "The possessive ending is joined to the noun."],
          ["M", "The first official rules for writing Hausa in Roman letters were drawn up in 1912 by", "Hans Vischer", "Rupert East", "Abubakar Imam", "Usman ɗan Fodiyo", "He was the first Director of Education."],
          ["M", "'Baƙi' with a hooked ƙ can mean", "black", "mouth", "to fail", "room", "With a plain k, 'baki' is mouth."],
          ["H", "Which of the following is written as two words in standard Hausa?", "za ka", "zan", "zai", "ban", "Zan and zai are single words."],
          ["H", "The body set up in 1955 to settle Hausa spelling and new words was the", "Hausa Language Board", "Literature Bureau", "Gaskiya Corporation", "Northern House of Chiefs", "It followed the earlier work of the Translation Bureau."],
          ["H", "The correct spelling of 'Audu's house' is", "gidan Audu", "gida n Audu", "gida-n Audu", "gidaAudu", "The linker -n is joined to the first noun."],
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
        subtopics: ["What oral literature is", "Narratives", "Songs and praise", "Short forms and traditional drama"],
        objectives: ["Explain what oral literature is", "Identify the kinds of oral narrative", "Identify kinds of oral song and praise", "Identify proverbs, riddles and traditional drama"],
        lesson: {
          title: "Adabin baka",
          summary: "Identify the forms of Hausa oral literature.",
          minutes: 40,
          notes: `## What is oral literature?
**Adabi** means literature. **Adabin baka** ("literature of the mouth"), also called **adabin gargajiya**, is literature **composed and passed on by word of mouth** — told, sung or recited, not written.

## Features
- handed down **from generation to generation**
- usually **no known author**
- **performed** — with voice, gesture, song and drum
- the **audience takes part**
- uses **repetition**, songs, proverbs and vivid words
- changes a little with each performance

## A. Narratives (zube)
| Form | What it is |
|---|---|
| **tatsuniya** | **folktale** — invented story with a lesson; **Gizo** the spider |
| **labari** | a **story told as true**; an account |
| **tarihi** | **history** — of towns, rulers and families |
| **almara** | a **dilemma tale** ending in a question for debate |
| **hikaya** | a moral story, often from Islamic tradition |
| **tatsuniyar asali** | a tale of **origin** — such as the story of **Bayajidda** |

## B. Songs (waƙoƙin baka)
| Form | Occasion |
|---|---|
| **waƙoƙin fada** | **court songs** in praise of emirs and title-holders |
| **waƙoƙin jama'a** | **popular songs** for the public |
| **waƙoƙin sana'a** | songs of **occupations** — farmers, hunters, blacksmiths, butchers |
| **waƙoƙin aure / biki** | **wedding and festival** songs |
| **waƙoƙin yara** | **children's** play songs |
| **waƙoƙin daɓe / niƙa** | women's **work songs** — beating floors, grinding corn |
| **waƙoƙin yabo** | praise songs |
| **waƙoƙin zambo** | **satirical** songs mocking wrongdoers |

## C. Praise and epithet
- **kirari** — a **praise-epithet**: a string of bold praise names for a person, an animal, a town or a trade. A warrior or boxer may also shout his own kirari.
- **take** — a short **drum signature** that "says" the praise of a particular person, played when he appears
- **roƙo** — the art of the **maroƙa**, the praise-singers

## D. Short forms
- **karin magana** — proverbs
- **kacici-kacici** — riddles
- **gagara-gwari** — tongue-twisters
- **salon magana / adon harshe** — idioms and figures of speech
- **barkwanci** — jokes

## E. Traditional drama (wasannin gargajiya)
- **tashe** — the Ramadan house-to-house plays
- **wasan gauta** — courtly comic play at the palace
- **kalankuwa** — the young people's harvest-time festival, with mock "officials"
- **bori** — spirit-possession performance of pre-Islamic origin
- **wasan kara / wasan 'yan tauri** — displays by the "tough men"

## Performers
the **storyteller** (usually an older woman); **makaɗa** (drummers); **maroƙa** (praise-singers); **mawaƙa** (singers). Great oral singers include **Mamman Shata**, **Ibrahim Narambaɗa**, **Musa Ɗanƙwairo**, **Ɗan Maraya Jos** and **Barmani Coge**.

## Functions of oral literature
- **entertainment**
- **education** and moral training
- **history** — records of towns and rulers
- **praise and social control** — honour for the good, satire for offenders
- **preserving the language**
- **unity**

## Oral and written literature compared
| Oral (baka) | Written (rubutacce) |
|---|---|
| spoken, sung, recited | written or printed |
| usually no known author | known author |
| changes with each performance | fixed |
| performed to an audience | read privately |

## Preservation
recording and writing down these forms; teaching them in schools; radio, television and film.`,
          examples: `**Example 1.** What is **adabin baka**? *Answer:* **Oral literature** — literature passed on by word of mouth.

**Example 2.** What is **kirari**? *Answer:* A **praise-epithet** — a string of praise names for a person, animal, town or trade.

**Example 3.** Name three kinds of Hausa oral song. *Answer:* **Waƙoƙin fada** (court songs), **waƙoƙin sana'a** (occupational songs) and **waƙoƙin yara** (children's songs).`,
        },
        questions: [
          ["E", "The Hausa term for 'literature' is", "adabi", "harshe", "al'ada", "insha'i", "Adabin baka is oral literature."],
          ["E", "Literature that is passed on by word of mouth is called", "adabin baka", "rubutaccen adabi", "wasiƙa", "auna fahimta", "Baka means 'of the mouth'."],
          ["E", "A story about the history of a town or its rulers is", "tarihi", "kacici-kacici", "kirari", "take", "It means history."],
          ["M", "A praise-epithet reciting the bold praise names of a person or thing is called", "kirari", "almara", "labari", "tashe", "A boxer may shout his own."],
          ["M", "'Waƙoƙin fada' are songs performed", "at court in praise of rulers", "by children at play", "by women grinding corn", "at funerals only", "Fada is the emir's court."],
          ["M", "'Gagara-gwari' are", "tongue-twisters", "riddles", "proverbs", "lullabies", "They are said quickly for fun and clear speech."],
          ["M", "Songs that mock wrongdoers are called", "waƙoƙin zambo", "waƙoƙin yabo", "waƙoƙin aure", "waƙoƙin yara", "Zambo is satire."],
          ["H", "A short drum signature that 'says' the praise of a particular person is called", "take", "kirari", "hikaya", "barkwanci", "It is played when the person appears."],
          ["H", "The story of Bayajidda and the snake of Daura is an example of", "a tale of origin", "a tongue-twister", "a wedding song", "a riddle", "It explains how the Hausa states began."],
          ["H", "A feature that distinguishes oral literature from written literature is that it", "changes a little with each performance", "is always printed", "cannot be performed", "always has a named author", "It lives in performance."],
        ],
      },
      {
        week: 2,
        title: "Written literature",
        subtopics: ["Ajami beginnings", "The first novels", "Drama", "Poetry and literary terms"],
        objectives: ["Outline how written Hausa literature began", "Identify the pioneer Hausa novels and their authors", "Identify the features of written drama", "Identify the features of written poetry and basic literary terms"],
        lesson: {
          title: "Rubutaccen adabi",
          summary: "Identify the three kinds of written Hausa literature and their pioneers.",
          minutes: 40,
          notes: `## What is written literature?
**Rubutaccen adabi** is literature **composed in writing** by a known **author** (**marubuci**).

## Beginnings in Ajami
Long before Roman letters, Hausa scholars wrote **religious and moral poetry in Ajami**. The leaders of the **Sokoto jihad** (1804) — **Shehu Usman ɗan Fodiyo**, his brother **Abdullahi** and his daughter **Nana Asma'u** — used verse to teach the faith.

## The three kinds
| Kind | Hausa term | Written in |
|---|---|---|
| prose fiction | **zube** (ƙagaggen labari) | sentences and chapters |
| drama | **wasan kwaikwayo** | dialogue and scenes |
| poetry | **waƙa** (rubutacciyar waƙa) | verses and stanzas |

## 1. Prose (zube)
### The 1933 competition
In **1933** the **Translation Bureau** at Zaria, under **Rupert East**, held a competition to encourage Hausa people to write stories. The winning books, published in **1934–35**, were the **first Hausa novels**:
| Book | Author |
|---|---|
| ***Ruwan Bagaja*** ("The Water of Cure") | **Abubakar Imam** |
| ***Shaihu Umar*** | **Abubakar Tafawa Balewa** — later Nigeria's first Prime Minister |
| ***Ganɗoki*** | **Bello Kagara** |
| ***Idon Matambayi*** ("The Eye of the Questioner") | **Muhammadu Gwarzo** |
| ***Jiki Magayi*** | **John Tafida** and **Rupert East** |

### Abubakar Imam
The greatest early prose writer. He also wrote ***Magana Jari Ce*** ("Speech is Capital"), a famous collection of tales told by a parrot, and was the first Hausa editor of the newspaper ***Gaskiya Ta Fi Kwabo*** (1939).

### Later prose
After the 1970s came many new novels, and from the 1980s the popular **littattafan soyayya** ("love stories") of Kano, many written by women.

### Elements
**jigo** (theme), **zubi da tsari** (structure), **salo** (style), **tauraro** (main character), **wuri da lokaci** (setting), **darasi** (lesson).

## 2. Drama (wasan kwaikwayo)
A story written to be **acted**.
- ***Six Hausa Plays*** (1930s), prepared by Rupert East, were the first printed plays
- ***Wasan Marafa*** by **Abubakar Tunau** — an early play teaching hygiene and good sense
- later plays treat family life, forced marriage, corruption and history; radio and television made drama very popular
### Features
scenes (**fitowa**); dialogue (**tattaunawa**); stage directions; characters (**'yan wasa**); conflict; humour.

## 3. Poetry (rubutacciyar waƙa)
Poems composed in writing, in **stanzas (baitoci; one is baiti)**.
- nineteenth century: the jihad poets, in Ajami
- twentieth century: **Sa'adu Zungur**, **Mu'azu Haɗeja**, **Aƙilu Aliyu**, **Mudi Sipikin**, **Aliyu Namangi**, **Na'ibi Wali**
### Features
- **baiti** — stanza; **ɗango** — line
- **amsa-amo** — **rhyme**, kept through the poem
- **kari** — **metre**, based on light and heavy syllables, following Arabic patterns
- an **opening and closing in praise of God**
- **jigo** — theme: religion, good conduct, education, politics, praise, warning

## Literary terms
| Hausa | English |
|---|---|
| **marubuci** | author |
| **tauraro** | main character, hero |
| **jigo** | theme |
| **salo** | style |
| **darasi** | lesson |
| **baiti** | stanza |
| **amsa-amo** | rhyme |
| **kamantawa** | simile |
| **siffantawa** | metaphor |
| **mutuntawa** | personification |
| **kambamawa** | exaggeration |

## Why study literature?
enjoyment; moral lessons; knowledge of culture and history; better command of the language.

## Note on set books
The texts prescribed for study change from time to time. For each, learn the **author, story, characters, themes and lessons**.`,
          examples: `**Example 1.** Who wrote ***Ruwan Bagaja***? *Answer:* **Abubakar Imam**.

**Example 2.** Name the three kinds of written literature in Hausa. *Answer:* **Zube (prose), wasan kwaikwayo (drama) and waƙa (poetry)**.

**Example 3.** What are **baiti** and **amsa-amo**? *Answer:* A **stanza** and **rhyme**.`,
        },
        questions: [
          ["E", "Literature composed in writing by a known author is called", "rubutaccen adabi", "adabin baka", "tatsuniya", "kirari", "Rubutacce means 'written'."],
          ["E", "The author of 'Ruwan Bagaja' is", "Abubakar Imam", "Bello Kagara", "Sa'adu Zungur", "Mamman Shata", "He also wrote 'Magana Jari Ce'."],
          ["E", "The Hausa term for 'drama' is", "wasan kwaikwayo", "zube", "waƙa", "karin magana", "It is written to be acted."],
          ["M", "'Shaihu Umar', one of the first Hausa novels, was written by", "Abubakar Tafawa Balewa", "Abubakar Imam", "Muhammadu Gwarzo", "Aƙilu Aliyu", "He later became Nigeria's first Prime Minister."],
          ["M", "The Hausa term for prose writing is", "zube", "waƙa", "baiti", "kari", "Novels and stories belong to it."],
          ["M", "The Hausa literary term 'marubuci' means", "author", "hero", "theme", "stanza", "Literally, 'one who writes'."],
          ["M", "The competition that produced the first Hausa novels was held in", "1933", "1804", "1912", "1960", "The Translation Bureau at Zaria organised it."],
          ["H", "The first Hausa newspaper, begun in 1939 with Abubakar Imam as editor, was", "Gaskiya Ta Fi Kwabo", "Magana Jari Ce", "Idon Matambayi", "Jiki Magayi", "Its name means 'Truth is worth more than a penny'."],
          ["H", "In Hausa poetry, 'amsa-amo' refers to", "rhyme", "metre", "a stanza", "the theme", "It is kept through the poem."],
          ["H", "The daughter of Usman ɗan Fodiyo remembered as a poet and teacher was", "Nana Asma'u", "Daurama", "Barmani Coge", "Amina", "She wrote verse in Ajami to teach the faith."],
        ],
      },
      {
        week: 3,
        title: "Festivals",
        subtopics: ["The two Sallah festivals", "The Durbar", "Other festivals", "Value of festivals"],
        objectives: ["Describe the two Sallah festivals", "Describe the Durbar (Hawan Sallah)", "Name other festivals of the Hausa", "State the value of festivals to the community"],
        lesson: {
          title: "Bukukuwan Hausawa",
          summary: "Describe the major festivals of the Hausa.",
          minutes: 40,
          notes: `## What is a festival?
**Biki** (plural **bukukuwa**) means celebration or festival. The chief Hausa festivals are **Islamic**; a few come from older custom or mark the farming year.

## The two Sallah festivals
### Ƙaramar Sallah — the "Lesser Festival" (Eid al-Fitr)
Held at the **end of Ramadan**, the month of fasting (**azumi**).
- the new moon is sighted and announced
- **zakkar fidda kai** — alms of grain — is given to the poor before the prayer
- people bathe, put on **new clothes** and go to the **prayer ground (filin idi)**
- the **liman** leads the prayer; the **emir** attends
- visits, gifts and feasting follow; children receive **goron Sallah** (festival gifts)

### Babbar Sallah — the "Greater Festival" (Eid al-Adha)
Held about **seventy days later**, at the time of the **pilgrimage (Hajj)**.
- after the prayer, each household that can afford it sacrifices a **ram** — the **layya**
- the meat is **shared** with relatives, neighbours and the poor
- it recalls the obedience of the Prophet **Ibrahim**

The greeting at both is **"Barka da Sallah!"**

## The Durbar — Hawan Sallah
After the Sallah prayer, the **emir rides in procession** with his title-holders, district heads and horsemen, all in **splendid robes and turbans**, their horses in rich trappings, to the sound of **kakaki, tambari and algaita**.
- groups of horsemen **gallop up to the emir and halt** in salute — the **jahi**
- the emir addresses his people and receives homage
- the durbars of **Kano, Katsina, Zazzau (Zaria), Bida and Sokoto** are famous; in Kano there are several rides on different days, such as **Hawan Daushe** and **Hawan Nassarawa**
The Durbar shows the **horsemanship and military past** of the emirates.

## Other festivals
| Festival | Notes |
|---|---|
| **Maulidi** | celebration of the **birthday of the Prophet Muhammad**, with recitation and processions |
| **Takutaha** | held in **Kano** a week after Maulidi |
| **Tashe** | children's plays during **Ramadan** |
| **Bikin kamun kifi na Argungu** | the **Argungu Fishing Festival** in Kebbi State: hundreds of fishermen with hand nets and gourds compete in the river for the largest fish |
| **Kalankuwa** | young people's **harvest-time** festival with plays and mock "officials" |
| **Buɗar daji** | the hunters' "**opening of the bush**" at the start of the hunting season |
| **Bikin shan kabewa** | a harvest custom in some communities |
| **Sharo** | the **Fulani** youths' test of endurance |
| **bori** | spirit-possession dances of the non-Muslim **Maguzawa** and others |

Family celebrations are also called **biki**: **bikin suna** (naming), **bikin aure** (wedding), **bikin saukar Alƙur'ani** (completion of the Qur'an by a pupil), **naɗin sarauta** (turbanning of a title-holder).

## People involved
the **sarki** and his title-holders; the **liman** and **malamai**; horsemen and palace guards (**dogarai**); **makaɗa** and **maroƙa**; the whole town; visitors.

## Value of festivals
- **worship and thanksgiving**
- **unity** — families gather; neighbours share food
- **charity** to the poor
- **loyalty** — the people greet their emir
- **preservation of culture** — dress, music, horsemanship
- **entertainment**
- **tourism and trade**

## Today
The Durbar and the Argungu festival draw visitors from all over the world, and Sallah remains the great time for homecoming.`,
          examples: `**Example 1.** What is celebrated at **Ƙaramar Sallah**? *Answer:* The **end of the Ramadan fast** (Eid al-Fitr).

**Example 2.** What is **layya**? *Answer:* The **sacrifice of a ram** at Babbar Sallah, whose meat is shared.

**Example 3.** What is the **Durbar**? *Answer:* The **procession of the emir and his horsemen** after the Sallah prayer (*Hawan Sallah*).`,
        },
        questions: [
          ["E", "The Hausa word for 'festival' or 'celebration' is", "biki", "kasuwa", "gaisuwa", "gayya", "Its plural is bukukuwa."],
          ["E", "Ƙaramar Sallah is celebrated at the end of", "the Ramadan fast", "the harvest", "the rainy season", "the pilgrimage", "It is Eid al-Fitr."],
          ["E", "The greeting exchanged at both Sallah festivals is", "Barka da Sallah", "Sai da safe", "Ina gajiya", "Sannu da aiki", "It wishes blessings on the festival."],
          ["M", "The sacrifice of a ram at Babbar Sallah is called", "layya", "sadaki", "zakka", "lefe", "The meat is shared with relatives and the poor."],
          ["M", "The procession of the emir and his horsemen after the Sallah prayer is the", "Durbar (Hawan Sallah)", "Kalankuwa", "Tashe", "Maulidi", "Horsemen gallop up to salute the emir."],
          ["M", "The Argungu festival in Kebbi State is a festival of", "fishing", "wrestling", "weaving", "horse racing", "Fishermen compete for the largest fish."],
          ["M", "'Maulidi' celebrates", "the birthday of the Prophet Muhammad", "the end of the fast", "the new yam", "the opening of the hunting season", "It is marked with recitation and processions."],
          ["H", "The salute in which horsemen gallop up to the emir and halt is called", "jahi", "take", "kirari", "gayya", "It is the high point of the Durbar."],
          ["H", "The alms of grain given to the poor before the prayer of Ƙaramar Sallah is", "zakkar fidda kai", "layya", "sadaki", "goron Sallah", "It ensures the poor can also celebrate."],
          ["H", "The hunters' festival at the start of the hunting season is", "buɗar daji", "bikin suna", "naɗin sarauta", "Takutaha", "It means 'the opening of the bush'."],
        ],
      },
      {
        week: 4,
        title: "Religion and beliefs",
        subtopics: ["Islam among the Hausa", "The five pillars", "Qur'anic education", "Older beliefs"],
        objectives: ["Outline how Islam became the religion of most Hausa", "State the five pillars of Islam in Hausa", "Describe the traditional system of Qur'anic education", "Describe older beliefs such as those of the Maguzawa"],
        lesson: {
          title: "Addini da imani",
          summary: "Explain the religious life of the Hausa.",
          minutes: 40,
          notes: `## Islam among the Hausa
**Addini** means religion. **Musulunci** (Islam) reached Hausaland through **traders and scholars** from about the fourteenth century and was adopted first at the royal courts. In **1804** the scholar **Shehu Usman ɗan Fodiyo** led a **jihad** to reform religion and government. It created the **Sokoto Caliphate**, whose head, the **Sultan of Sokoto (Sarkin Musulmi)**, is still the spiritual leader of Nigeria's Muslims.

Today the great majority of Hausa are **Muslims**; there are also Hausa **Christians**, and a few who keep older beliefs.

## Belief
A Muslim believes in **Allah**, the one God; His **angels (mala'iku)**; His **books**, of which the **Alƙur'ani** is the last; His **prophets (annabawa)**, ending with **Annabi Muhammadu**; the **Last Day (ranar ƙiyama)**; and **destiny (ƙaddara)**.

## The five pillars (shika-shikan Musulunci)
| Hausa | Meaning |
|---|---|
| **kalmar shahada** | the declaration of faith |
| **salla** | the five daily prayers |
| **azumi** | fasting in the month of Ramadan |
| **zakka** | giving the yearly alms |
| **hajji** | pilgrimage to Makka for those able |

### The five daily prayers
**Asuba** (dawn), **Azahar** (early afternoon), **La'asar** (late afternoon), **Magariba** (sunset), **Isha** (night). The Friday congregational prayer is **sallar Jumma'a**.

One who has made the pilgrimage is called **Alhaji** (man) or **Hajiya** (woman).

## Religious persons and places
- **liman** — the imam, who leads the prayer
- **malam / malami** — a scholar and teacher
- **ladan** — the one who calls to prayer
- **alƙali** — a judge of Islamic law
- **masallaci** — mosque; **masallacin Jumma'a** — Friday mosque

## Qur'anic education
- the **makarantar allo** ("slate school") — pupils learn to recite and write the Qur'an on a wooden **slate (allo)** under a malam
- a pupil is an **almajiri** (from Arabic for one who leaves home to seek knowledge)
- completing the Qur'an is marked by the celebration of **sauka**
- advanced study is at the **makarantar ilimi**, where books of law, grammar and religion are read
- modern **Islamiyya** schools combine religious and general subjects

## Older beliefs
Before Islam, the Hausa believed in a high god and in **spirits (iskoki)**. Those who kept these beliefs are called **Maguzawa**.
- **bori** — a cult in which spirits are believed to **possess** dancers; used for healing
- **tsafi** — rites and offerings to spirits
- **boka** — a traditional healer; **camfi** — superstitions
Islam rejects these, though traces remain in folklore.

## Values taught by religion and custom
- **gaskiya** — truthfulness
- **amana** — trustworthiness
- **haƙuri** — patience
- **kunya** — modesty
- **karamci** — generosity; **sadaka** — charity
- **ladabi da biyayya** — courtesy and obedience
- **zumunci** — keeping the ties of kinship
- **adalci** — justice

## Religion in daily speech
- **In sha Allahu** — if God wills
- **Alhamdulillahi** — praise be to God
- **Bismillah** — in the name of God
- **Allah ya kiyaye** — may God protect

## Living together
People of different faiths in Nigeria are taught to live in **peace (zaman lafiya)** and **mutual respect**.`,
          examples: `**Example 1.** Who led the jihad of 1804? *Answer:* **Shehu Usman ɗan Fodiyo**.

**Example 2.** Name the five pillars of Islam in Hausa. *Answer:* **Kalmar shahada, salla, azumi, zakka and hajji**.

**Example 3.** What is an **allo** in Qur'anic education? *Answer:* The **wooden slate** on which pupils write and learn the Qur'an.`,
        },
        questions: [
          ["E", "The Hausa word for 'religion' is", "addini", "adabi", "al'ada", "ado", "Musulunci is Islam."],
          ["E", "The Hausa word for the five daily prayers is", "salla", "azumi", "zakka", "hajji", "Azumi is fasting."],
          ["E", "The Hausa word for 'mosque' is", "masallaci", "makaranta", "kasuwa", "fada", "It is the place of prayer."],
          ["M", "The jihad of 1804 in Hausaland was led by", "Usman ɗan Fodiyo", "Abubakar Imam", "Bayajidda", "Hans Vischer", "It created the Sokoto Caliphate."],
          ["M", "'Azumi' means", "fasting", "pilgrimage", "almsgiving", "prayer", "It is kept in the month of Ramadan."],
          ["M", "The person who leads the congregational prayer is the", "liman", "ladan", "alƙali", "almajiri", "The ladan calls to prayer."],
          ["M", "A person who has performed the pilgrimage to Makka is called", "Alhaji or Hajiya", "Malam or Malama", "Sarki", "Waziri", "The pilgrimage is hajji."],
          ["H", "The spiritual head of Nigeria's Muslims, the Sultan of Sokoto, bears the title", "Sarkin Musulmi", "Sarkin Kano", "Sarkin Fada", "Sarkin Noma", "It means 'Commander of the Muslims'."],
          ["H", "A pupil of the traditional Qur'anic school is called", "almajiri", "liman", "boka", "dogari", "He learns on a wooden slate."],
          ["H", "Hausa people who kept the pre-Islamic beliefs are known as", "Maguzawa", "Kanawa", "Turawa", "Fatake", "The bori cult is associated with these older beliefs."],
        ],
      },
      {
        week: 5,
        title: "Traditional government",
        subtopics: ["The emirate system", "Title-holders and their duties", "Districts, villages and wards", "Justice, taxes and today's emirates"],
        objectives: ["Describe the position of the emir", "Identify the major title-holders and their duties", "Describe government at district, village and ward level", "Explain how justice was done and taxes collected"],
        lesson: {
          title: "Sarautar gargajiya",
          summary: "Describe the traditional emirate system of the Hausa.",
          minutes: 40,
          notes: `## A centralised system
Unlike the Igbo, the Hausa had **kings**. Each Hausa state was ruled by a **sarki** from a walled capital (**birni**). After the jihad of 1804 the states became **emirates** under the **Sokoto Caliphate**, each emir owing allegiance to the **Sultan**. The system was **highly centralised** and guided by **Islamic law (Shari'a)**.

## The emir (sarki)
The **sarki** is the political and religious head of the emirate.
- he is chosen from the **ruling houses** by the **kingmakers (masu zaɓen sarki)**
- he lives in the **palace (gidan sarki)**; his court is the **fada**
- he is **turbanned** at his installation (**naɗin sarauta**)
- he is saluted **"Ranka ya daɗe!"**
- royal emblems: the **turban**, the **kakaki** trumpets, the **tambari** drums, the **umbrella** and the state sword

### Some rulers
| Title | Seat |
|---|---|
| **Sarkin Musulmi** (Sultan) | Sokoto |
| **Sarkin Kano** | Kano |
| **Sarkin Katsina** | Katsina |
| **Sarkin Zazzau** | Zaria |
| **Sarkin Daura** | Daura |
| **Sarkin Gwandu** | Gwandu |

## Title-holders (masu sarauta)
Titles are **sarautu**. Their holders advise the emir and carry out his orders.
| Title | Traditional duty |
|---|---|
| **Waziri** | chief adviser (vizier) |
| **Galadima** | administrator of the capital; acts in the emir's absence |
| **Madaki / Madawaki** | commander of the cavalry |
| **Ma'aji** | treasurer |
| **Sarkin Fada** | head of the palace officials |
| **Sarkin Yaƙi** | war leader |
| **Ciroma** | a senior prince |
| **Sarkin Dogarai** | head of the palace guards (**dogarai**) |
| **Magajin Gari** | overseer of the town |
| **Alƙali** | judge |
| **Liman** | leader of prayer |

## Levels of government
| Level | Head |
|---|---|
| emirate (**masarauta**) | **sarki** |
| district (**gunduma**) | **hakimi** |
| village (**ƙauye / gari**) | **dagaci** |
| ward (**unguwa**) | **mai unguwa** |
| household (**gida**) | **maigida** |
Orders passed **down** this chain, and reports and taxes passed **up**.

## Trades
Each craft had its **chief** — **Sarkin Noma, Sarkin Maƙera, Sarkin Fawa, Sarkin Kasuwa** — answerable to the emir.

## Justice
- **alƙali** courts tried cases by **Shari'a**
- the **emir's court** heard the gravest cases and appeals
- ward and village heads settled small disputes
- the **dogarai** kept order

## Taxes
| Tax | On |
|---|---|
| **zakka** | the yearly alms on grain and wealth |
| **jangali** | cattle |
| **kuɗin ƙasa / haraji** | land and farm produce |
| **jizya** | non-Muslims under protection |
Officials collected and passed them to the **treasury (baitulmali)**.

## Checks on the emir
He was expected to rule by **Islamic law**, to consult his **council**, to heed the **malamai**, and — after 1804 — to answer to the **Sultan**, who could depose him.

## Under colonial rule
Because the emirates were already **organised, with courts and taxes**, the British governed through them — the system of **indirect rule**, which worked most smoothly here.

## Today
Emirs no longer govern, but they remain **custodians of religion and culture**, **advise government**, **settle disputes**, lead their people at Sallah and help to keep the peace.`,
          examples: `**Example 1.** What is the title of the ruler of a Hausa emirate? *Answer:* **Sarki** (emir).

**Example 2.** Who were the **Waziri** and the **Ma'aji**? *Answer:* The **chief adviser** and the **treasurer**.

**Example 3.** Give the heads of a district, a village and a ward. *Answer:* **Hakimi, dagaci and mai unguwa**.`,
        },
        questions: [
          ["E", "The ruler of a Hausa emirate is the", "sarki", "hakimi", "dagaci", "liman", "He is turbanned at his installation."],
          ["E", "The court of the emir is called the", "fada", "kasuwa", "masallaci", "rumbu", "Title-holders attend him there."],
          ["E", "Traditional Hausa government is best described as", "a centralised emirate system", "a republic of village assemblies", "a confederation of traders", "rule by age grades", "Authority flowed down from the emir."],
          ["M", "The chief adviser of the emir held the title", "Waziri", "Ma'aji", "Dagaci", "Sarkin Fawa", "He was the vizier."],
          ["M", "The treasurer in the emirate system was the", "Ma'aji", "Madaki", "Galadima", "Alƙali", "He kept the treasury."],
          ["M", "The head of a district in an emirate is the", "hakimi", "mai unguwa", "maigida", "dogari", "Village heads are under him."],
          ["M", "The palace guards of the emir are called", "dogarai", "fatake", "maroƙa", "almajirai", "They are led by the Sarkin Dogarai."],
          ["H", "The cattle tax collected in the emirates was called", "jangali", "zakka", "jizya", "sadaki", "It was paid by cattle owners."],
          ["H", "The head of a village in the emirate system is the", "dagaci", "hakimi", "waziri", "ciroma", "He is below the district head."],
          ["H", "Indirect rule worked most smoothly in the Hausa emirates because they", "were already centralised, with courts and taxes", "had no rulers", "rejected all authority", "had no system of law", "The British simply governed through the emirs."],
        ],
      },
      {
        week: 6,
        title: "Good character",
        subtopics: ["The idea of mutumin kirki", "Qualities of a person of good character", "Respect for elders", "Upbringing in the home and community"],
        objectives: ["Explain the Hausa idea of mutumin kirki", "List the qualities of a person of good character", "Describe how respect for elders is shown", "Explain how the family and community bring up a child"],
        lesson: {
          title: "Mutumin kirki",
          summary: "Explain the Hausa ideal of good character.",
          minutes: 40,
          notes: `## Mutumin kirki
**Kirki** means goodness of character. A **mutumin kirki** — "a person of goodness" — is honest, modest, generous and considerate: the Hausa ideal. Good upbringing is **tarbiyya**; a person's nature and conduct are his **hali** or **ɗabi'a**.

The Hausa say:
- **"Gaskiya ta fi kwabo."** — Truth is worth more than a penny.
- **"Halin mutum jarinsa."** — A person's character is his capital.
- **"Kowa ya yi da kyau, zai ga da kyau."** — Whoever does good will see good.

## Qualities of the mutumin kirki
| Hausa | English |
|---|---|
| **gaskiya** | truthfulness |
| **amana** | trustworthiness |
| **karamci** | generosity |
| **haƙuri** | patience |
| **hankali** | good sense |
| **kunya** | modesty, a proper sense of shame |
| **ladabi** | courtesy, good manners |
| **mutunci** | respect for the dignity of others |
| **hikima** | wisdom |
| **juriya** | endurance |
| **biyayya** | obedience |
| **ƙwazo** | diligence |
| **tsabta** | cleanliness |
| **adalci** | fairness |

## Vices to avoid
**ƙarya** (lying), **sata** (stealing), **lalaci** (laziness), **girman kai** (pride), **rowa** (stinginess), **hassada** (envy), **gulma** (gossip), **rashin kunya** (shamelessness, rudeness), **zamba** (cheating), **cin amana** (betrayal of trust).

## Kunya
**Kunya** — modesty and restraint — governs much of behaviour: speaking softly, not boasting, not eating in the street, respect between in-laws, and the avoidance of certain names.

## Respect for elders (girmama manya)
Respect is shown by
- **greeting first**, with the full exchange of questions
- **lowering oneself** — squatting or kneeling
- **removing shoes** on entering
- **not calling elders by name** — use **Baba, Mama, Inna, Kawu, Yaya, Malam, Alhaji, Hajiya**
- **lowering the eyes** and the voice
- **not interrupting**
- **running errands**
- **receiving with the right hand**, or both hands
The proverb says that what an elder sees sitting down, a child will not see even from the top of a tree.

## Upbringing (tarbiyya)
Training begins **at home** and is shared by **relatives, neighbours and the malam**.
- **parents** teach by example and correction
- any **elder** may correct a child
- the **Qur'anic school** teaches religion, reading and discipline
- **tales, proverbs and songs** carry lessons
- children learn the **family trade** by helping
- **age-mates** learn co-operation through play and **gayya**
- good conduct is **praised**; bad conduct is **rebuked** — and brings **shame on the whole family**

## Community spirit
- **zumunci** — keeping up kinship by visiting
- **karɓar baƙi** — hospitality to guests
- **sadaka** — charity to the needy
- **gayya** — communal work
- **adashe** — a savings club in which members contribute and collect in turn
- **makwabtaka** — good neighbourliness
- **"Hannu ɗaya ba ya ɗaukar jinka."** — One hand cannot lift a roof.

## Good character today
The ideal applies in **school** (honesty in examinations, respect for teachers, punctuality), **at work**, **in trade**, **online** and in **public life** — refusing bribes (**cin hanci**), obeying the law, serving others.

## A thought
Learning and wealth without **kirki** are of little worth.`,
          examples: `**Example 1.** Who is a **mutumin kirki**? *Answer:* A **person of good character** — honest, modest, generous and considerate.

**Example 2.** Give three qualities of good character in Hausa. *Answer:* **Gaskiya (truthfulness), amana (trustworthiness) and haƙuri (patience)**.

**Example 3.** What is **tarbiyya**? *Answer:* **Good upbringing** — the training of a child in right conduct.`,
        },
        questions: [
          ["E", "The Hausa word for 'truth' or 'honesty' is", "gaskiya", "ƙarya", "sata", "rowa", "Ƙarya means a lie."],
          ["E", "'Haƙuri' means", "patience", "pride", "greed", "anger", "It is called the medicine for life."],
          ["E", "A person of good character is called in Hausa", "mutumin kirki", "mai kuɗi", "ɗan kasuwa", "maras lafiya", "Kirki means goodness."],
          ["M", "'Amana' means", "trustworthiness", "laziness", "envy", "gossip", "To betray it is 'cin amana'."],
          ["M", "Which of the following is a vice?", "rowa", "karamci", "ladabi", "tsabta", "It means stinginess."],
          ["M", "'Lalaci' means", "laziness", "humility", "obedience", "courage", "The Hausa condemn it."],
          ["M", "Good upbringing of a child is called", "tarbiyya", "sana'a", "gayya", "kirari", "It begins at home."],
          ["H", "The quality of modesty and restraint that governs much of Hausa behaviour is", "kunya", "hassada", "gulma", "girman kai", "It includes a proper sense of shame."],
          ["H", "The savings club in which members contribute regularly and collect in turn is called", "adashe", "gayya", "sadaka", "zakka", "It is a form of community self-help."],
          ["H", "'Halin mutum jarinsa' means", "A person's character is his capital", "A rich man has good character", "Character cannot be changed", "Capital is better than character", "Good conduct is a person's real wealth."],
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
          title: "Insha'i",
          summary: "Plan and write a composition in Hausa.",
          minutes: 40,
          notes: `## What is a composition?
**Insha'i** is a piece of writing in which you **think out your ideas on a topic and set them down in order**.

## Kinds of composition
| Kind | Hausa term | What it does | Sample topic |
|---|---|---|---|
| **narrative** | insha'in labari | tells a story or an event | *Ranar da ba zan manta ba* (A day I shall not forget) |
| **descriptive** | insha'in siffantawa | describes a person, place or thing | *Makarantarmu* (Our school) |
| **expository** | insha'in bayani | explains how or why | *Yadda ake dafa tuwo* (How tuwo is cooked) |
| **argumentative** | insha'in muhawara | argues for or against | *Noma ya fi aikin gwamnati* (Farming is better than government work) |
| **letter** | wasiƙa | informal or formal | *Wasiƙa zuwa ga aboki* |
| **dialogue** | tattaunawa | a conversation | *Tattaunawa tsakanin uwa da 'yarta* |

## Steps
1. **Choose** the topic you know best.
2. **Think** — jot down your ideas.
3. **Outline** — arrange the ideas in order.
4. **Write** — one main idea to each paragraph.
5. **Read over** — correct spelling (hooked letters, word division) and punctuation.

## Parts of a composition
### 1. Take — the title
Write it at the top, in the middle.
### 2. Gabatarwa — the introduction
A short paragraph that **introduces the topic** and catches interest. A proverb or a definition may open it.
### 3. Gundarin bayani — the body
**Three or four paragraphs** (a paragraph is **sakin layi**), each on **one point**, with examples. Link the paragraphs:
- **Da farko** — first
- **Bayan haka** — after that; furthermore
- **Haka kuma** — likewise
- **Amma** — but
- **Saboda haka** — therefore
- **A ƙarshe** — finally
### 4. Kammalawa — the conclusion
A short paragraph that **sums up** and gives your final view.

## A sample outline: "Makarantarmu"
- **Gabatarwa:** name of the school; where it is; when it was founded
- **Sakin layi na farko:** buildings and compound — classrooms, library, field
- **Sakin layi na biyu:** the teachers and the principal; the subjects taught
- **Sakin layi na uku:** activities — sports, clubs, cultural day
- **Kammalawa:** why I love my school

### A sample opening paragraph
> Sunan makarantarmu Makarantar Sakandare ta Gwamnati. Tana cikin birnin Kano, a Jihar Kano. An kafa ta a shekarar 1980. Makarantar babba ce, kuma tana da kyau ƙwarai.
(*Our school is Government Secondary School. It is in the city of Kano, in Kano State. It was founded in 1980. The school is big and very beautiful.*)

## Argumentative composition
- open by **greeting the audience** (chairman, judges, fellow debaters) if it is a debate
- **state your side** clearly
- give **three or four reasons**, each with an example
- **answer** the other side
- end by **restating** your position

## Narrative composition
Tell events **in order**; say **who, where, when, what happened and how it ended**; use the completed forms (**na, ya, sun**); add how you felt.

## What examiners look for
| Area | Meaning |
|---|---|
| **abin da ke ciki** | content — relevant, sufficient ideas |
| **tsari** | organisation — paragraphs in logical order |
| **salo / amfani da harshe** | expression — correct, varied sentences; proverbs and idioms |
| **ƙa'idojin rubutu** | mechanics — spelling, word division, punctuation |

## Tips
- keep to the **topic** and the **length** asked for
- write **simple, correct** sentences
- use a **proverb or two** — they earn credit
- write in **Standard Hausa**, neatly`,
          examples: `**Example 1.** What is **insha'i**? *Answer:* A **composition** — ideas on a topic thought out and written in order.

**Example 2.** Name the three main parts of a composition. *Answer:* **Gabatarwa (introduction), gundarin bayani (body) and kammalawa (conclusion)**.

**Example 3.** What kind of composition is "Yadda ake dafa tuwo"? *Answer:* **Expository** — it explains how something is done.`,
        },
        questions: [
          ["E", "The Hausa term for 'composition' is", "insha'i", "auna fahimta", "fassara", "kirari", "It is a piece of ordered writing on a topic."],
          ["E", "The closing paragraph of a composition is the", "kammalawa", "gabatarwa", "take", "sakin layi", "It sums up the writer's points."],
          ["E", "The opening paragraph of a composition is the", "gabatarwa", "kammalawa", "tsari", "salo", "It introduces the topic."],
          ["M", "A composition that tells a story or recounts an event is", "insha'in labari", "insha'in siffantawa", "insha'in muhawara", "wasiƙa", "It narrates what happened."],
          ["M", "The topic 'Makarantarmu' (Our school) calls for", "a descriptive composition", "an argumentative composition", "a formal letter", "a dialogue", "It asks the writer to describe a place."],
          ["M", "The Hausa term for a paragraph is", "sakin layi", "baiti", "ɗango", "gaɓa", "Each one develops a single point."],
          ["M", "Each paragraph in the body of a composition should contain", "one main point", "all the points", "only proverbs", "the title", "The point is developed with examples."],
          ["H", "A composition in which the writer supports one side of a question with reasons is", "insha'in muhawara", "insha'in labari", "insha'in siffantawa", "wasiƙar gida", "It is used in debates."],
          ["H", "In marking a composition, 'tsari' refers to", "organisation — the logical order of paragraphs", "the handwriting", "the length of the title", "the choice of topic", "Well-arranged ideas earn credit."],
          ["H", "The linking expression 'A ƙarshe' is used in a composition to introduce", "the final point", "the first point", "a contrast", "a question", "It means 'finally'."],
        ],
      },
      {
        week: 2,
        title: "The formal letter",
        subtopics: ["When formal letters are written", "Parts of a formal letter", "Language of a formal letter", "A sample letter"],
        objectives: ["State when a formal letter is required", "Set out the parts of a formal letter", "Use suitable formal language", "Write a short formal letter"],
        lesson: {
          title: "Wasiƙar aiki",
          summary: "Write a formal letter in Hausa.",
          minutes: 40,
          notes: `## What is a formal letter?
**Wasiƙar aiki** (also **wasiƙar hukuma**) is an **official letter** written to a person **in his or her official position** — a principal, a local government chairman, a manager, an editor. It is used
- to **apply** for a job or admission
- to **ask permission** or make a request
- to **complain** or report
- to **invite** an official

## Parts of a formal letter
| Part | Hausa | Position |
|---|---|---|
| 1. writer's address | **adireshin marubuci** | top right |
| 2. date | **kwanan wata** | under the writer's address |
| 3. receiver's address | **adireshin wanda aka rubuta wa** | left, lower down |
| 4. salutation | **gaisuwa** | left |
| 5. heading | **taken wasiƙa** | centre, in capitals or underlined |
| 6. body | **gundarin wasiƙa** | paragraphs |
| 7. closing | **rufewa** | bottom right |
| 8. signature and full name | **sa hannu da cikakken suna** | under the closing |

## How it differs from an informal letter
| | Informal (sada zumunta) | Formal (aiki) |
|---|---|---|
| addresses | one | **two** |
| salutation | *Zuwa ga Babana ƙaunatacce,* | ***Ranka ya daɗe,*** |
| heading | none | **required** |
| opening greetings | long family greetings | **brief** — "Bayan gaisuwa," then the point |
| language | warm, personal | **polite, brief, exact** |
| closing | *Ni ne ɗanka,* | ***Ni ne naka mai biyayya,*** |
| name | first name | **signature and full name** |

## Salutation
- **Ranka ya daɗe,** — Sir, ("May your life be long")
- **Ranki ya daɗe,** — Madam,
- **Zuwa ga Shugaban Makaranta,** — To the Principal,

## The body
- **paragraph 1** — state who you are and **why you are writing**
- **paragraph 2** — give the **details or reasons**
- **paragraph 3** — make the **request** and thank the reader

Do not use slang, jokes or long family greetings.

## Closing
> **Ni ne naka mai biyayya,**
> (sa hannu)
> **Musa Ibrahim**

## A sample letter
> Makarantar Sakandare ta Gwamnati,
> Kano.
> 3 ga Yuni, 2025.
>
> Shugaban Makaranta,
> Makarantar Sakandare ta Gwamnati,
> Kano.
>
> Ranka ya daɗe,
>
> **NEMAN IZININ ZUWA GIDA**
>
> Bayan gaisuwa. Na rubuta wannan wasiƙa ne domin in nemi izinin kwana biyu in je gida. Ni ɗalibi ne a aji na JSS 3A.
>
> Dalilin da ya sa nake neman wannan izini shi ne mahaifiyata tana asibiti, kuma mahaifina ya aiko a kira ni. Ina so in tafi ranar Alhamis, in dawo ranar Asabar.
>
> Na yi alƙawari zan cike duk aikin da na rasa. Na gode da taimakonka.
>
> Ni ne naka mai biyayya,
> (sa hannu)
> Musa Ibrahim.

*(Summary: a JSS 3A student asks the Principal for two days' leave because his mother is in hospital, promises to make up lost work and thanks him.)*

## Useful words
| Hausa | English |
|---|---|
| **Shugaban Makaranta** | Principal |
| **izini** | permission |
| **nema** | to seek, apply for |
| **neman aiki** | application for a job |
| **ofis / ma'aikata** | office; place of work |
| **ƙaramar hukuma** | local government |
| **shugaba** | chairman, head |
| **edita** | editor |
| **ƙara / koke** | complaint |
| **sa hannu** | signature |
| **alƙawari** | promise |

## Marks
both addresses and date; salutation; heading; content; expression; closing with signature and full name.`,
          examples: `**Example 1.** How many addresses has a formal letter? *Answer:* **Two** — the writer's and the receiver's.

**Example 2.** Give the correct closing of a formal letter in Hausa. *Answer:* **Ni ne naka mai biyayya,** followed by signature and full name.

**Example 3.** What comes immediately after the salutation? *Answer:* The **heading (taken wasiƙa)**.`,
        },
        questions: [
          ["E", "A letter written to a person in an official position is called", "wasiƙar aiki", "wasiƙar sada zumunta", "insha'in labari", "tattaunawa", "It is the formal letter."],
          ["E", "A formal letter has how many addresses?", "two", "one", "three", "none", "The writer's and the receiver's."],
          ["E", "A suitable salutation in a formal letter to a man is", "Ranka ya daɗe,", "Zuwa ga Babana ƙaunatacce,", "Zuwa ga abokina,", "Yaya dai,", "It corresponds to 'Sir'."],
          ["M", "The heading of a formal letter is written", "after the salutation", "before the writer's address", "after the signature", "inside the last paragraph", "It states the subject of the letter."],
          ["M", "The correct closing for a formal letter is", "Ni ne naka mai biyayya,", "Ni ne ɗanka,", "Ni ne abokinka,", "Sai anjima,", "It corresponds to 'Yours obediently / faithfully'."],
          ["M", "'Shugaban Makaranta' is the", "Principal", "class captain", "gateman", "school nurse", "Shugaba means head or leader."],
          ["M", "Unlike an informal letter, a formal letter does NOT contain", "long family greetings", "a date", "a body", "an address", "The writer goes quickly to the point."],
          ["H", "At the end of a formal letter, the writer gives", "a signature and full name", "the first name only", "a nickname", "no name at all", "The reader may not know the writer personally."],
          ["H", "In the sample letter, 'neman izini' means", "asking for permission", "complaining about food", "inviting a guest", "applying for a job", "Izini is permission."],
          ["H", "'Sa hannu' in a formal letter refers to the", "signature", "address", "heading", "date", "Literally, 'putting the hand'."],
        ],
      },
      {
        week: 3,
        title: "Translation",
        subtopics: ["What translation is", "Translating sense, not word for word", "Translating simple sentences", "Common difficulties"],
        objectives: ["Explain what translation is", "Translate the sense of a sentence rather than each word", "Translate simple sentences between English and Hausa", "Avoid common translation errors"],
        lesson: {
          title: "Fassara",
          summary: "Translate simple sentences between English and Hausa.",
          minutes: 40,
          notes: `## What is translation?
**Fassara** is **putting the meaning of what is said in one language into another**. A person who translates writing is a **mai fassara** (translator); one who translates speech on the spot is a **tafinta** (interpreter).

## The golden rule
Translate the **sense**, not each word. Every language has its own **word order and idiom**.

| English | Word-for-word (wrong) | Correct Hausa |
|---|---|---|
| I am hungry. | *Ni ne yunwa.* | **Ina jin yunwa.** (I feel hunger.) |
| I am thirsty. | *Ni ne ƙishirwa.* | **Ina jin ƙishirwa.** |
| I am tired. | — | **Na gaji.** |
| I am afraid. | — | **Ina jin tsoro.** |
| I am sleepy. | — | **Ina jin barci.** |
| I am happy. | *Ni ne murna.* | **Ina farin ciki.** ("I am in white stomach.") |
| I am sad. | — | **Ina baƙin ciki.** ("I am in black stomach.") |
| I have a headache. | *Ina da ciwon kai* is possible, but more natural is | **Kaina yana ciwo.** |
| It is raining. | *Shi ne ruwa.* | **Ana ruwa.** |
| What is your name? | — | **Menene sunanka / sunanki?** |
| How old are you? | — | **Shekarunka nawa?** |
| I am fine. | — | **Lafiya lau.** |

In Hausa, **feelings are "felt"** (**ji**) and many states are things one **"has"** (**da**) or **"is in"**.

## Steps
1. **Read** the whole sentence and understand it.
2. Find the **subject, verb and object**.
3. Choose the right **pronoun form** — completed (na, ya), continuous (ina, yana), future (zan, zai) — or the **negative** (ba … ba).
4. Check **gender**: ne / ce, ya / ta, -n / -r, -ka / -ki.
5. **Read your translation aloud** — does it sound natural?

## Differences to remember
| Point | English | Hausa |
|---|---|---|
| gender | "it" for things | every noun is **masculine or feminine** |
| "you" | one word | **kai** (m.), **ke** (f.), **ku** (pl.) |
| possessive | **my** book | littafi**na** |
| number | **three** children | yara **uku** |
| plural | add -s | many patterns: **yara, littattafai** |
| a / the | articles | none; **-n / -r** for "the", **wani / wata** for "a certain" |
| tense | verb changes | the **pronoun** changes |
| "to be" | one verb | **ne / ce**, **yana / tana**, **akwai** |
| "to have" | have | **ina da** ("I am with") |

## English → Hausa
| English | Hausa |
|---|---|
| The boy is reading a book. | **Yaron yana karanta littafi.** |
| My mother went to the market. | **Mahaifiyata ta tafi kasuwa.** |
| We have eaten. | **Mun ci abinci.** |
| They will come tomorrow. | **Za su zo gobe.** |
| I do not know. | **Ban sani ba.** |
| Do not go. | **Kada ka tafi.** |
| Where is your father? | **Ina mahaifinka yake?** |
| This is a big house. | **Wannan babban gida ne.** |
| Audu is taller than Musa. | **Audu ya fi Musa tsawo.** |
| Please give me water. | **Don Allah, ba ni ruwa.** |

## Hausa → English
| Hausa | English |
|---|---|
| **Malaminmu yana da kirki.** | Our teacher is kind. |
| **Ina so in ci tuwo.** | I want to eat tuwo. |
| **Me kake yi?** | What are you doing? |
| **Littafina yana kan tebur.** | My book is on the table. |
| **An yi ruwa jiya.** | It rained yesterday. |
| **Ba su zo ba tukuna.** | They have not come yet. |

## Common difficulties
- **idioms and proverbs** — give the meaning, not the picture
- **gender** — remember that **mota** is "she" and **littafi** is "he"
- **words with several meanings** — **wata**: month or moon; **ji**: hear or feel
- **new things** — use the accepted borrowed word: **kwamfuta**, **waya** (telephone)
- **names** are not translated

## Why translation matters
It lets people of different languages share news, knowledge, religion and literature. Hausa broadcasts on world radio stations depend on skilled translators.`,
          examples: `**Example 1.** Translate into Hausa: "I am hungry." *Answer:* **Ina jin yunwa**.

**Example 2.** Translate into English: **Mahaifiyata ta tafi kasuwa.** *Answer:* **My mother went to the market**.

**Example 3.** Why must a translator into Hausa think about gender? *Answer:* Because every noun is **masculine or feminine**, and this decides **ne/ce, ya/ta and -n/-r**.`,
        },
        questions: [
          ["E", "Putting the meaning of one language into another is called", "fassara", "insha'i", "auna fahimta", "korewa", "A translator is a mai fassara."],
          ["E", "The Hausa for 'We have eaten' is", "Mun ci abinci", "Muna cin abinci", "Za mu ci abinci", "Ba mu ci abinci ba", "Mun marks completed action for 'we'."],
          ["E", "'Malaminmu yana da kirki' means", "Our teacher is kind", "Our teacher is tall", "My teacher is bad", "The teacher has come", "-mu means 'our'; kirki is kindness."],
          ["M", "The correct Hausa for 'I am thirsty' is", "Ina jin ƙishirwa", "Ni ne ƙishirwa", "Ina da ruwa", "Ruwa yana jina", "Thirst is 'felt' in Hausa."],
          ["M", "The correct Hausa for 'This is a big house' is", "Wannan babban gida ne", "Wannan gida babban ce", "Babban wannan gida ne", "Wannan babbar gida ce", "Gida is masculine, so babban and ne are used."],
          ["M", "'Ina farin ciki' is best translated as", "I am happy", "My stomach is white", "I am hungry", "I have eaten well", "The idiom expresses joy."],
          ["M", "'Za su zo gobe' means", "They will come tomorrow", "They came yesterday", "They are coming now", "They did not come", "Za su marks the future for 'they'."],
          ["H", "A person who translates speech on the spot is called", "tafinta", "marubuci", "maroƙi", "edita", "A mai fassara translates written texts."],
          ["H", "The correct Hausa for 'I am tired' is", "Na gaji", "Ni ne gajiya", "Ina da gaji", "Gajiya ce ni", "The completed form of the verb gaji is used."],
          ["H", "The correct Hausa for 'They have not come yet' is", "Ba su zo ba tukuna", "Ba za su zo ba", "Ba sa zuwa", "Kada su zo", "Tukuna adds the meaning 'yet'."],
        ],
      },
      {
        week: 4,
        title: "Idioms and figurative expressions",
        subtopics: ["What an idiom is", "Common idioms and their meanings", "Polite expressions", "Figures of speech"],
        objectives: ["Define an idiom", "Explain the meanings of common Hausa idioms", "Recognise polite expressions for delicate matters", "Identify simple figures of speech in Hausa"],
        lesson: {
          title: "Salon magana da adon harshe",
          summary: "Understand Hausa idioms and simple figures of speech.",
          minutes: 40,
          notes: `## What is an idiom?
An **idiom** (**salon magana**) is a **fixed expression whose meaning is different from the ordinary meaning of its words**. It must be learnt as a whole.

## Idiom and proverb
| Idiom (salon magana) | Proverb (karin magana) |
|---|---|
| a phrase, part of a sentence | a complete saying |
| gives a hidden **meaning** | teaches a **lesson** |
| *farin ciki* | *Gaskiya ta fi kwabo* |

## Common idioms
Many are built on **parts of the body**, or on the verbs **ci** (eat) and **sha** (drink).
| Idiom | Literal sense | Real meaning |
|---|---|---|
| **farin ciki** | white stomach | **happiness** |
| **baƙin ciki** | black stomach | **sadness** |
| **farin jini** | white blood | **popularity** |
| **baƙin jini** | black blood | **unpopularity** |
| **taurin kai** | hardness of head | **stubbornness** |
| **kunnen ƙashi** | ear of bone | **refusal to listen** |
| **girman kai** | bigness of head | **pride** |
| **zuciya biyu** | two hearts | **indecision** |
| **dogon hannu** | long hand | **thieving** |
| **ruwan ido** | water of the eye | **wanting everything one sees** |
| **cin hanci** | — | **taking bribes** |
| **cin amana** | eating trust | **betrayal** |
| **cin nasara** | eating victory | **winning** |
| **cin jarrabawa** | eating an examination | **passing an examination** |
| **shan wahala** | drinking trouble | **suffering** |
| **sa hannu** | putting the hand | **signing** |
| **sa ido** | putting the eye | **keeping watch** |
| **sa baki** | putting the mouth | **intervening** |
| **bakin teku** | mouth of the sea | **the shore** |

- **Yaron yana da taurin kai.** — The boy is stubborn.
- **Ta ci jarrabawa.** — She passed the examination.
- **Malamin yana da farin jini.** — The teacher is popular.

## Polite expressions
Blunt words for **death, sickness and other delicate matters** are avoided.
| Blunt | Polite expression |
|---|---|
| he died | **Ya rasu.** / **Allah ya yi masa rasuwa.** / **Ya riga mu gidan gaskiya.** ("He has gone before us to the house of truth.") |
| he is ill | **Ba shi da lafiya.** ("He is without health.") |
| she is pregnant | **Tana da juna biyu.** ("She has two selves.") |
| to go to the toilet | **zuwa bayan gida** ("going behind the house") |
| he is blind | **Ba ya gani.** ("He does not see.") |

## Figures of speech (adon harshe)
| Figure | Hausa term | Example |
|---|---|---|
| **simile** | kamantawa | **Baƙi ne kamar gawayi.** — He is as black as charcoal. (uses **kamar**) |
| **metaphor** | siffantawa | **Audu zaki ne.** — Audu is a lion. |
| **personification** | mutuntawa | **Yunwa ta kama ni.** — Hunger has seized me. |
| **exaggeration** | kambamawa | **Ya yi kuka har hawayensa suka zama kogi.** — He wept until his tears became a river. |
| **repetition** | maimaitawa | **Ya tafi, ya tafi, ya tafi.** |
| **rhetorical question** | tambayar da ba ta neman amsa | **Wa bai san mutuwa ba?** — Who does not know of death? |
| **ideophone** | amsa-kama | **Ya faɗi rim.** — He fell with a thud. |

## Why use idioms and figures?
- to make speech **vivid and beautiful**
- to speak **politely** of unpleasant things
- to **hide meaning** from children or outsiders
- to show **mastery** of the language — the skilled speaker is admired

## In examinations
You may be asked to **give the meaning** of an idiom, **use it in a sentence**, or **name the figure of speech** in a line.

## Using an idiom
> **Yaro mai kunnen ƙashi ba ya jin shawara.** — A child who will not listen does not take advice.`,
          examples: `**Example 1.** What is **salon magana**? *Answer:* An **idiom** — a fixed expression whose meaning differs from the ordinary meaning of its words.

**Example 2.** What do **farin ciki** and **baƙin ciki** mean? *Answer:* **Happiness** and **sadness** — literally "white stomach" and "black stomach".

**Example 3.** Identify the figure of speech: **Audu zaki ne.** *Answer:* **Metaphor (siffantawa)** — Audu is said to be a lion.`,
        },
        questions: [
          ["E", "The Hausa term for 'idiom' is", "salon magana", "karin magana", "kacici-kacici", "tatsuniya", "Its meaning differs from the ordinary meaning of its words."],
          ["E", "'Farin ciki' as an idiom means", "happiness", "a white stomach ache", "hunger", "cleanliness", "Literally, 'white stomach'."],
          ["E", "'Taurin kai' means", "stubbornness", "a headache", "a strong man", "good luck", "Literally, 'hardness of head'."],
          ["M", "'Baƙin ciki' means", "sadness", "a dark room", "stomach illness", "anger at food", "Literally, 'black stomach'."],
          ["M", "'Baƙi ne kamar gawayi' is an example of", "a simile", "a metaphor", "a euphemism", "a riddle", "The comparison uses 'kamar' (like)."],
          ["M", "'Ya ci jarrabawa' means", "He passed the examination", "He ate during the examination", "He failed the examination", "He set the examination", "Ci here means to win or succeed in."],
          ["M", "'Ba shi da lafiya' is a polite way of saying that a person is", "ill", "lazy", "poor", "late", "Literally, 'he is without health'."],
          ["H", "'Audu zaki ne' (Audu is a lion) is an example of", "a metaphor", "a simile", "an ideophone", "repetition", "The comparison is made without 'kamar'."],
          ["H", "'Cin amana' means", "betrayal of trust", "eating a meal", "winning a contest", "paying a debt", "Literally, 'eating trust'."],
          ["H", "A teacher described as having 'farin jini' is", "popular", "pale", "generous", "angry", "Literally, 'white blood'."],
        ],
      },
      {
        week: 5,
        title: "BECE revision: language",
        subtopics: ["Sounds, tones and syllables", "Nouns, pronouns and the linker", "Verb forms, negation and questions", "Composition, letters and comprehension"],
        objectives: ["Recall the alphabet, vowels, consonants, tones and syllable types", "Recall gender, plurals, pronouns and the linker", "Form the main tenses, negatives and questions", "Recall the layout of compositions and letters"],
        lesson: {
          title: "Bitar harshe",
          summary: "Revise the language section of the Hausa course.",
          minutes: 40,
          notes: `## Sounds and letters
- **Boko** (Roman) and **Ajami** (Arabic) scripts
- **vowels (wasula)** — 5: a, e, i, o, u — each **short or long**; diphthongs **ai, au**
- **consonants (baƙaƙe)** — including the **hooked** letters **ɓ, ɗ, ƙ, ƴ**, the double letters **sh, ts** and the **glottal stop '**
- **not used**: p, q, v, x
- **c** = English "ch"

## Tones (karin sauti)
**high, low, falling** — not marked in ordinary writing. **mata**: wife / women.

## Syllables (gaɓoɓi)
Types: **BW** (light), **BWW** and **BWB** (heavy). Every syllable begins with a consonant. **ma-ka-ran-ta** = 4.

## Parts of speech (rukunan nahawu)
| Hausa term | English | Examples |
|---|---|---|
| **suna** | noun | gida, Audu, ƙauna |
| **wakilin suna** | pronoun | ni, kai, ke, shi, ita, mu, ku, su |
| **aikatau** | verb | tafi, ci, saya |
| **sifa** | adjective | babba, sabo, fari |
| **bayanau** | adverb | da sauri, ƙwarai |
| **harafi** | preposition | a, daga, kan |
| **mahaɗi** | conjunction | da, amma, saboda |
| **motsin rai** | interjection | Kai! Wayyo! |

## Nouns
- **gender**: feminine nouns mostly end in **-a**; **ne** (m. / pl.) and **ce** (f.)
- **plurals**: yaro → **yara**; littafi → **littattafai**; gida → **gidaje**; mota → **motoci**; mutum → **mutane**
- **linker**: **-n** (m. / pl.), **-r** (f.) — **gidan Audu, motar Audu**; also "the": **yaron, motar**

## Pronouns
| | independent | completed | possessive (m. noun) |
|---|---|---|---|
| I | ni | na | -na |
| you (m.) | kai | ka | -nka |
| you (f.) | ke | kin | -nki |
| he | shi | ya | -nsa |
| she | ita | ta | -nta |
| we | mu | mun | -nmu |
| you (pl.) | ku | kun | -nku |
| they | su | sun | -nsu |

## Tenses
| Form | "he" | Example |
|---|---|---|
| completed | ya | Ya zo |
| continuous | yana | Yana zuwa |
| future | zai | Zai zo |
| habitual | yakan | Yakan zo |

## Negation
**ba … ba** (Bai zo ba; Ba zai zo ba); continuous **ba ya zuwa**; command **kada ka zo**; identity **ba … ba ne**; **babu** (there is none); **ba ni da** (I have not).

## "To be" and "to have"
**ne / ce** (identity), **yana / tana** (place, state), **akwai** (there is), **ina da** (I have).

## Questions
**Shin…?**, **…ko?**; **Me, Wa, Ina, Yaushe, Yaya, Me ya sa, Nawa, Wanne**.

## Adjectives and comparison
babba / manya; sabo / sabuwa / sababbi; **mai** + noun; comparison with **fi**.

## Word formation
**ma-** (manomi, makaranta, mabuɗi); **mai / maras**; **ɗan / 'yar / 'yan**; **ba-** (Bahaushe); **-nci** (Turanci); compounds (**jirgin sama**); borrowing (**littafi, tebur**).

## Numbers
1–10: ɗaya, biyu, uku, huɗu, biyar, shida, bakwai, takwas, tara, goma. Teens with **sha**; tens: ashirin … casa'in; **ɗari, dubu, miliyan**. Ordinals: **na / ta farko, na biyu**…

## Spelling
write the **hooks**; separate the **pronoun** from the verb; join **possessives and linkers**; no tone marks.

## Composition and letters
- **insha'i**: take → gabatarwa → gundarin bayani → kammalawa
- **wasiƙar sada zumunta**: one address; greetings; first name
- **wasiƙar aiki**: two addresses; heading; *Ni ne naka mai biyayya*; full name

## Comprehension
read twice; answer briefly in full sentences; "why" answers begin **Saboda…**

## Examination advice
- read each question **to the end**
- in objective questions, **watch the hooked letters and the gender** — options may differ only by these
- write clearly in Standard Hausa`,
          examples: `**Example 1.** Give the Hausa terms for noun, verb and adjective. *Answer:* **Suna, aikatau and sifa**.

**Example 2.** Give the negative of "Ya zo". *Answer:* **Bai zo ba** (He did not come).

**Example 3.** How many syllables are in **littafi**? *Answer:* **Three** — lit-ta-fi.`,
        },
        questions: [
          ["E", "In the sentence 'Binta tana karanta littafi', the word 'karanta' is", "a verb", "a noun", "an adjective", "a preposition", "It tells what Binta is doing."],
          ["E", "The word 'sabon' in 'sabon littafi' is", "an adjective", "a verb", "a pronoun", "a conjunction", "It describes the noun littafi."],
          ["E", "The number of syllables in 'littafi' is", "three", "two", "four", "one", "It divides as lit-ta-fi."],
          ["M", "In 'Littafi yana kan tebur', the word 'kan' is", "a preposition of place", "a noun subject", "a verb", "an adverb of time", "It shows the position of the book."],
          ["M", "The negative of 'Ya zo' is", "Bai zo ba", "Ba ya zuwa", "Kada ya zo", "Ba zai zo ba", "Ba + ya becomes bai, closed by ba."],
          ["M", "The word 'amma' in 'Ya zo, amma bai zauna ba' is", "a conjunction", "a preposition", "an adjective", "a noun", "It joins two clauses and shows contrast."],
          ["M", "Which of the following is correctly written in Standard Hausa?", "Ya tafi gidansa", "Yatafi gida nsa", "Ya-tafi gidan sa", "Ya tafi gida n sa", "The pronoun is separate and the possessive joined."],
          ["H", "In 'Audu ya gudu da sauri', the expression 'da sauri' is", "an adverb", "an adjective", "a verb", "a pronoun", "It tells how Audu ran."],
          ["H", "Which sentence is correct for 'The car is new' (mota is feminine)?", "Motar sabuwa ce", "Motar sabo ne", "Motan sabuwa ne", "Mota sabo ce", "Feminine noun: linker -r, adjective sabuwa and ce."],
          ["H", "The correct form of 'She will buy a gown' is", "Za ta sayi riga", "Zai sayi riga", "Tana saya riga", "Ta saye riga", "Za ta is the feminine future; sayi is used before a noun object."],
        ],
      },
      {
        week: 6,
        title: "BECE revision: literature and culture",
        subtopics: ["Oral and written literature", "Proverbs, riddles and idioms", "Customs: names, marriage, dress, greetings", "Festivals, religion, government and character"],
        objectives: ["Recall the forms of oral and written literature", "Recall proverbs, riddles and idioms", "Recall the main Hausa customs", "Recall festivals, beliefs, traditional government and good character"],
        lesson: {
          title: "Bitar adabi da al'ada",
          summary: "Revise the literature and culture sections of the Hausa course.",
          minutes: 40,
          notes: `## Literature
### Oral (adabin baka)
| Form | Note |
|---|---|
| **tatsuniya** | folktale — **Gizo** and **Ƙoƙi**; "Ga ta nan, ga ta nanku!" |
| **labari / tarihi** | story; history — **Bayajidda** |
| **almara** | dilemma tale |
| **karin magana** | proverb |
| **kacici-kacici** | riddle — "Kulun kulufita!" "Gauta!" |
| **waƙoƙin baka** | songs: court, occupational, children's, wedding |
| **kirari / take** | praise-epithet; drum signature |
| **tashe** | Ramadan plays |
| **salon magana** | idiom |

### Written (rubutaccen adabi)
- **zube** — prose; the 1933 competition: ***Ruwan Bagaja*** (Abubakar Imam), ***Shaihu Umar*** (Tafawa Balewa), ***Ganɗoki*** (Bello Kagara), ***Idon Matambayi***, ***Jiki Magayi***; ***Magana Jari Ce***
- **wasan kwaikwayo** — drama
- **waƙa** — poetry; the jihad poets; Sa'adu Zungur, Mu'azu Haɗeja, Aƙilu Aliyu
- terms: **marubuci** (author), **tauraro** (hero), **jigo** (theme), **salo** (style), **baiti** (stanza), **amsa-amo** (rhyme)
- **Gaskiya Ta Fi Kwabo** (1939); **Boko** and **Ajami**

### Figures of speech
kamantawa (simile), siffantawa (metaphor), mutuntawa (personification), kambamawa (exaggeration), maimaitawa (repetition).

## Culture
### Greetings (gaisuwa)
Ina kwana? — Lafiya lau; Ina wuni?; Barka da yamma; Sai da safe; Sannu da aiki; Sannu da zuwa; Na gode; Don Allah; **Ranka ya daɗe**.

### Names (sunaye)
- **sunan yanka**: Muhammadu, Fatima…
- day names: **Ɗanladi / Ladi, Ɗanjuma / Jummai**
- circumstance: **Hassan and Hussaini** (twins), **Gambo**, **Tanko**, **Kande**
- **bikin suna** on the **seventh day**: ram, kola, prayers, shaving by the **wanzami**

### Marriage (aure)
na gani ina so → neman aure → baiko → sa rana → **lefe** → **sadaki** → **ɗaurin aure** → kai amarya; **amarya**, **ango**, **waliyyi**; **lalle**.

### Dress (tufafi)
- men: **babbar riga**, jamfa, wando, **hula**, **rawani**
- women: **zane**, riga, **ɗankwali**, **gyale**
- **rini** at the Kano dye pits; **lalle**, **kwalli**, **kitso**

### Occupations (sana'o'i)
noma, kiwo, ƙira, saƙa, rini, jima, dukanci, fawa, wanzanci, farauta, su, kasuwanci; **Sarkin Noma**, **Sarkin Maƙera**.

### Food (abinci)
tuwo da miya, fura da nono, kunu, waina, ƙosai, suya, kilishi.

### Games and music
**kokawa**, **dambe**, langa, gada; **kalangu**, **kakaki**, **tambari**, algaita, **goge**, kuntigi; **maroƙa** and **makaɗa**.

### Festivals (bukukuwa)
| Festival | Note |
|---|---|
| **Ƙaramar Sallah** | end of Ramadan |
| **Babbar Sallah** | the ram sacrifice (**layya**) |
| **Hawan Sallah (Durbar)** | Kano, Katsina, Zaria |
| **Maulidi** | the Prophet's birthday |
| **Argungu** | fishing festival, Kebbi |
| **Tashe** | Ramadan plays |

### Religion (addini)
**Musulunci**; the five pillars — shahada, **salla**, **azumi**, **zakka**, **hajji**; **liman**, **malam**; **makarantar allo** and the **almajiri**; **Usman ɗan Fodiyo**, 1804; **Sarkin Musulmi**; older beliefs — **Maguzawa**, **bori**.

### Government (sarauta)
**sarki** in the **fada**; **Waziri, Galadima, Madaki, Ma'aji**; **hakimi** (district), **dagaci** (village), **mai unguwa** (ward); **alƙali**; taxes — **zakka, jangali**; indirect rule.

### Character (hali)
**mutumin kirki** — gaskiya, amana, haƙuri, kunya, karamci, ladabi. *Gaskiya ta fi kwabo.*

### History
**Bayajidda** and **Daura**; the **Hausa Bakwai** — Daura, Kano, Katsina, Zazzau, Gobir, Rano, Biram; Standard Hausa based on **Kano**.

## Proverbs to remember
- *Haƙuri maganin zaman duniya.* — patience
- *Hannu ɗaya ba ya ɗaukar jinka.* — co-operation
- *Sannu ba ta hana zuwa.* — steady effort
- *Rigakafi ya fi magani.* — prevention
- *Zumunta a ƙafa take.* — visit your kin

## How to revise
- make a **card** for each topic: three facts, two Hausa terms, one example
- practise **explaining proverbs and idioms**
- be able to **describe a custom in steps**
- learn the **first novels and their authors**`,
          examples: `**Example 1.** Give the order of the main steps in Hausa marriage. *Answer:* **Neman aure → baiko → sa rana → lefe → sadaki → ɗaurin aure → kai amarya**.

**Example 2.** Name the Hausa Bakwai. *Answer:* **Daura, Kano, Katsina, Zazzau, Gobir, Rano and Biram**.

**Example 3.** Match the authors: *Ruwan Bagaja* and *Shaihu Umar*. *Answer:* **Abubakar Imam** and **Abubakar Tafawa Balewa**.`,
        },
        questions: [
          ["E", "Which of the following is a form of Hausa oral literature?", "tatsuniya", "wasiƙar aiki", "insha'i", "Boko", "It is the folktale."],
          ["E", "Which of these is worn by Hausa men?", "babbar riga", "ɗankwali", "zane", "gyale", "It is the great flowing gown."],
          ["E", "The emir of a Hausa state is saluted with", "Ranka ya daɗe", "Sai anjima", "Ina gajiya", "Ga ta nan", "It means 'May your life be long'."],
          ["M", "Which book is correctly matched with its author?", "Ruwan Bagaja — Abubakar Imam", "Shaihu Umar — Bello Kagara", "Ganɗoki — Tafawa Balewa", "Magana Jari Ce — Muhammadu Gwarzo", "Imam also wrote Magana Jari Ce."],
          ["M", "Which title is correctly matched with its duty?", "Ma'aji — treasurer", "Waziri — head of the guards", "Madaki — judge", "Alƙali — commander of cavalry", "The Waziri was chief adviser and the Alƙali a judge."],
          ["M", "In a Hausa novel, 'tauraro' refers to", "the main character", "the setting", "the title", "the publisher", "The word also means 'star'."],
          ["M", "The correct order of these stages of Hausa marriage is", "baiko, sadaki, ɗaurin aure", "ɗaurin aure, baiko, sadaki", "sadaki, ɗaurin aure, baiko", "ɗaurin aure, sadaki, baiko", "Betrothal comes first; the contract is tied after the sadaki is settled."],
          ["H", "Which of the following was NOT one of the Hausa Bakwai?", "Sokoto", "Daura", "Kano", "Rano", "Sokoto was founded after the jihad of 1804."],
          ["H", "Which statement about Hausa traditional government is correct?", "Authority passed from the emir through district and village heads", "Every village was fully independent", "There were no courts or taxes", "Rulers were elected by all adults every year", "It was a centralised emirate system."],
          ["H", "A ram, kola nuts, prayers by a malam and shaving by the wanzami are features of", "the naming ceremony", "the Durbar", "the Argungu festival", "a wrestling match", "It is held on the seventh day after birth."],
        ],
      },
    ],
  },
];
