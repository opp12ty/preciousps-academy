import type { TermPlan } from "../types";

/** JSS1 Hausa — original Precious PS content following the national Basic Education structure. Explanations are given in English with Hausa terms and examples. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The Hausa people and their language",
        subtopics: ["Who the Hausa are", "Where Hausa is spoken", "Dialects and Standard Hausa", "Why we study Hausa"],
        objectives: ["Identify the Hausa people and their homeland", "Name the places where Hausa is spoken", "Distinguish dialects from Standard Hausa", "State reasons for studying Hausa"],
        lesson: {
          title: "Hausawa da harshensu",
          summary: "Meet the Hausa people, their homeland and their language.",
          minutes: 40,
          notes: `## Who are the Hausa?
The **Hausa** (**Hausawa**; one man is **Bahaushe**, one woman **Bahaushiya**) are one of the largest peoples of West Africa. Their homeland (**ƙasar Hausa**) lies in **northern Nigeria** and the south of the **Niger Republic**. The word **Hausa** names both the people and their **language** (**harshen Hausa**).

## The legend of origin
Tradition tells of **Bayajidda**, a prince who came to **Daura**, killed the great **snake** that kept the people from the well, and married the queen, **Daurama**. Their descendants founded the seven Hausa states — the **Hausa Bakwai**: **Daura, Kano, Katsina, Zazzau (Zaria), Gobir, Rano and Biram**.

## Where is Hausa spoken?
- as a first language in **Kano, Katsina, Sokoto, Kebbi, Zamfara, Jigawa** and much of **Kaduna** and **Bauchi** States
- as a common language across **the whole of northern Nigeria**
- in the **Niger Republic**, and by communities in **Ghana, Cameroon, Chad, Sudan** and beyond
Hausa is one of the **most widely spoken languages in Africa**, used in trade, on international radio and in schools.

## Dialects and Standard Hausa
A **dialect** (**karin harshe**) is the form of a language spoken in a particular area. Hausa dialects include **Kananci** (Kano), **Sakkwatanci** (Sokoto), **Katsinanci** (Katsina), **Zazzaganci** (Zaria), **Dauranci** (Daura) and **Bausanci** (Bauchi).
**Standard Hausa** (**Daidaitacciyar Hausa**) — the form used in schools, books, newspapers and broadcasting — is based mainly on the **Kano** dialect.

## How Hausa is written
- **Ajami** — Hausa in **Arabic letters**, used for centuries by scholars
- **Boko** — Hausa in **Roman letters**, introduced in the early twentieth century; it is the form taught in schools

## Why study Hausa?
- to **speak, read and write** the language correctly
- to **preserve our culture** (**al'ada**) — greetings, proverbs, tales and songs
- to **communicate** with millions of people across West Africa
- for **unity** and understanding among Nigerians
- it is an **examination subject** and opens **careers** in teaching, broadcasting, translation, writing and film

## The three parts of the subject
1. **Harshe** — language (sounds, grammar, composition)
2. **Adabi** — literature (tales, poems, plays, novels)
3. **Al'ada** — culture and customs`,
          examples: `**Example 1.** According to legend, who killed the snake at Daura? *Answer:* **Bayajidda**, who then married Queen Daurama.

**Example 2.** On which dialect is Standard Hausa mainly based? *Answer:* The **Kano** dialect (*Kananci*).

**Example 3.** What are the two ways of writing Hausa? *Answer:* **Ajami** (Arabic letters) and **Boko** (Roman letters).`,
        },
        questions: [
          ["E", "The Hausa homeland is mainly in which part of Nigeria?", "the north", "the south-east", "the south-west", "the Niger Delta", "It also extends into the Niger Republic."],
          ["E", "A Hausa man is called", "Bahaushe", "Bahaushiya", "Hausawa", "Hausanci", "The plural is Hausawa."],
          ["E", "Which of the following is a Hausa-speaking state?", "Katsina", "Enugu", "Ogun", "Bayelsa", "It was one of the seven Hausa states."],
          ["M", "In the legend of origin, the hero who killed the snake at Daura was", "Bayajidda", "Odùduwà", "Eri", "Tsoede", "He married Queen Daurama."],
          ["M", "The seven original Hausa states are called the", "Hausa Bakwai", "Banza Bakwai", "Hausa Goma", "Sarakunan Yamma", "Bakwai means seven."],
          ["M", "Standard Hausa is based mainly on the dialect of", "Kano", "Sokoto", "Zaria", "Bauchi", "The dialect is called Kananci."],
          ["M", "Hausa written in Roman letters is called", "Boko", "Ajami", "Kananci", "Adabi", "It is the form taught in schools."],
          ["H", "Hausa written in Arabic letters is called", "Ajami", "Boko", "Daidaitacciya", "Bausanci", "Scholars used it for centuries."],
          ["H", "Which of the following was one of the Hausa Bakwai?", "Gobir", "Nupe", "Ilorin", "Kwararafa", "The seven were Daura, Kano, Katsina, Zazzau, Gobir, Rano and Biram."],
          ["H", "The Hausa word 'al'ada' means", "culture and customs", "alphabet", "market", "language only", "It is one of the three parts of the subject."],
        ],
      },
      {
        week: 2,
        title: "The Hausa alphabet",
        subtopics: ["The letters of the Boko alphabet", "Hooked letters", "Double letters and the glottal stop", "Letters not used in Hausa"],
        objectives: ["Recite the Hausa alphabet", "Identify the hooked letters", "Identify the double letters and the glottal stop", "List English letters not used in Hausa"],
        lesson: {
          title: "Haruffan Hausa",
          summary: "Learn the letters of the Hausa alphabet.",
          minutes: 40,
          notes: `## The Hausa alphabet
A letter is **harafi** (plural **haruffa**); the alphabet is **haruffan Hausa** or **abacada**.

**A B Ɓ C D Ɗ E F G H I J K Ƙ L M N O R S SH T TS U W Y ƴ Z**
and the **glottal stop**, written with the apostrophe **'**.

## The vowels (wasula) — 5
**a, e, i, o, u**
Each can be **short or long**, and there are two **diphthongs**: **ai** and **au**.

## The hooked letters
Hausa has special consonants written with a **hook** or other mark. Each is a **different letter** from its plain partner.
| Plain | Hooked | Examples |
|---|---|---|
| **b** | **ɓ** | **bara** (begging) / **ɓera** (rat) |
| **d** | **ɗ** | **daki** (pounding) / **ɗaki** (room) |
| **k** | **ƙ** | **kasa** (to fail) / **ƙasa** (earth, country) |
| **y** | **ƴ** (also written **'y**) | **ya** (he) / **'ya** (daughter) |
The hooked letters are pronounced with a **catch or tightening in the throat**.

## Double letters
Two symbols written together for **one sound**:
| Letter | Sound | Example |
|---|---|---|
| **sh** | as in English "ship" | **shida** (six) |
| **ts** | a sharp "ts" with a catch | **tsuntsu** (bird) |
Hausa also has sounds written **kw, gw, ƙw, ky, gy, ƙy** and **fy**: **kwana** (to spend the night), **gwiwa** (knee), **kyau** (beauty).

## The letter c
In Hausa, **c** always sounds like English **"ch"**: **ci** (eat), **cikin** (inside).

## The glottal stop
The apostrophe **'** marks a **catch in the breath** in the middle of a word: **a'a** (no), **sa'a** (luck; hour), **Jumma'a** (Friday).

## Letters not used in Hausa
The English letters **p, q, v and x** are **not** in the Hausa alphabet. Borrowed words change them: **fensir** (pencil), **fasinja** (passenger).

## Simple words
| Hausa | English |
|---|---|
| **gida** | house |
| **ruwa** | water |
| **kare** | dog |
| **tsuntsu** | bird |
| **littafi** | book |
| **sarki** | king, emir |
| **uwa** | mother |

## Rules
- Tone and vowel length are **not marked** in ordinary writing.
- A doubled consonant is pronounced **long**: **Allah**, **hannu** (hand), **littafi**.
- Take care with the hooks: leaving one out may give **another word**.`,
          examples: `**Example 1.** List the hooked letters of Hausa. *Answer:* **ɓ, ɗ, ƙ and ƴ ('y)**.

**Example 2.** Which English letters are absent from the Hausa alphabet? *Answer:* **p, q, v and x**.

**Example 3.** How is the Hausa letter **c** pronounced? *Answer:* Like English **"ch"**, as in *ci* (eat).`,
        },
        questions: [
          ["E", "The Hausa word for 'letters of the alphabet' is", "haruffa", "wasula", "gaɓa", "jimla", "One letter is harafi."],
          ["E", "The number of vowel letters in Hausa is", "five", "seven", "eight", "three", "They are a, e, i, o, u."],
          ["E", "Which of the following letters is NOT in the Hausa alphabet?", "p", "b", "k", "z", "The others absent are q, v and x."],
          ["M", "Which of the following is a hooked letter in Hausa?", "ɗ", "sh", "ts", "c", "The others are ɓ, ƙ and ƴ."],
          ["M", "In Hausa, the letter 'c' is pronounced like the English", "ch", "k", "s", "sh", "As in ci — to eat."],
          ["M", "The apostrophe in a word such as 'a'a' represents", "the glottal stop", "a long vowel", "a high tone", "a plural", "It marks a catch in the breath."],
          ["M", "Which of the following is counted as a double letter standing for one sound?", "ts", "st", "bl", "dr", "As in tsuntsu — bird."],
          ["H", "The difference between 'kasa' and 'ƙasa' lies in", "the plain k and the hooked ƙ", "the vowel length only", "a silent letter", "a capital letter", "Kasa means 'to fail'; ƙasa means 'earth'."],
          ["H", "The two diphthongs of Hausa are", "ai and au", "ei and ou", "ia and ua", "oi and ui", "As in kai (head) and kyau (beauty)."],
          ["H", "The English word 'pencil' becomes 'fensir' in Hausa because Hausa", "has no letter p", "has no vowels", "has no letter s", "always doubles consonants", "The sound is replaced by f."],
        ],
      },
      {
        week: 3,
        title: "Vowels and consonants",
        subtopics: ["Short and long vowels", "Diphthongs", "Consonants", "Sounding out words"],
        objectives: ["List the five vowels of Hausa", "Distinguish short from long vowels and identify diphthongs", "Group the consonants, including the hooked ones", "Break simple words into their sounds"],
        lesson: {
          title: "Wasula da baƙaƙe",
          summary: "Identify the vowel and consonant sounds of Hausa.",
          minutes: 40,
          notes: `## Sounds of the language
- **wasali** (plural **wasula**) — a **vowel**: a sound made with the breath flowing freely
- **baƙi** (plural **baƙaƙe**) — a **consonant**: a sound made when the breath is blocked or narrowed

## The five vowels
| Vowel | Example | Meaning |
|---|---|---|
| **a** | **aiki** | work |
| **e** | **eh** | yes (informal) |
| **i** | **ido** | eye |
| **o** | **ofis** | office |
| **u** | **uba** | father |

## Short and long vowels
Each vowel may be **short** (**gajeren wasali**) or **long** (**dogon wasali**). Length is **not shown** in ordinary spelling, but it is part of the word:
| Short | Long |
|---|---|
| **a** in **mace** (woman) | **a** in **rana** (sun, day) |
| **i** in **gida** (house) | **i** in **riga** (gown) |
| **u** in **mutum** (person) | **u** in **suna** (name) |
So Hausa has **ten** simple vowels — five short and five long.

## Diphthongs
A **diphthong** (**tagwan wasali** — "twin vowel") is two vowel sounds gliding together:
- **ai** — **kai** (head), **mai** (oil)
- **au** — **kyau** (beauty), **sauri** (speed)

## The consonants
| Group | Letters |
|---|---|
| plain | b, c, d, f, g, h, j, k, l, m, n, r, s, t, w, y, z |
| hooked | **ɓ, ɗ, ƙ, ƴ** |
| double | **sh, ts** |
| with w or y | **kw, gw, ƙw, ky, gy, ƙy, fy** |
| glottal stop | **'** |

### Examples
| Consonant | Example | Meaning |
|---|---|---|
| b | **baba** | father |
| ɓ | **ɓarawo** | thief |
| d | **doki** | horse |
| ɗ | **ɗaya** | one |
| k | **kifi** | fish |
| ƙ | **ƙofa** | door |
| sh | **shanu** | cattle |
| ts | **tsaya** | stop, stand |
| gw | **gwani** | expert |
| ky | **kyanwa** | cat |

## Long (doubled) consonants
A consonant written twice is held longer: **hannu** (hand), **tukunna** (not yet), **Allah**.

## Sounding out a word
- **gida** = g + i + d + a
- **ƙofa** = ƙ + o + f + a
- **shanu** = sh + a + n + u (sh is one consonant)

## Remember
- Hausa has **no silent letters**.
- Every syllable **begins with a consonant**. A word that seems to begin with a vowel, such as **aiki**, in fact starts with a light glottal stop.
- Mixing up **b / ɓ**, **d / ɗ** or **k / ƙ** is the commonest spelling fault.`,
          examples: `**Example 1.** What are **wasula** and **baƙaƙe**? *Answer:* **Vowels** and **consonants**.

**Example 2.** How many simple vowel sounds has Hausa, counting short and long? *Answer:* **Ten** — five short and five long.

**Example 3.** Name the two diphthongs and give a word for each. *Answer:* **ai** as in *kai* (head) and **au** as in *kyau* (beauty).`,
        },
        questions: [
          ["E", "The Hausa term for 'vowels' is", "wasula", "baƙaƙe", "gaɓoɓi", "kalmomi", "One vowel is wasali."],
          ["E", "The Hausa term for 'consonants' is", "baƙaƙe", "wasula", "haruffa", "jimloli", "One consonant is baƙi."],
          ["E", "Which of the following is a Hausa vowel?", "u", "ɗ", "ts", "ƙ", "The others are consonants."],
          ["M", "The total number of simple vowel sounds in Hausa, short and long, is", "ten", "five", "seven", "twelve", "Each of the five vowels may be short or long."],
          ["M", "A 'tagwan wasali' is", "a diphthong", "a long consonant", "a hooked letter", "a glottal stop", "The term means 'twin vowel'."],
          ["M", "Which word contains the diphthong 'ai'?", "kai", "gida", "ruwa", "doki", "It means head. Answer: kai."],
          ["M", "Which of the following begins with a hooked consonant?", "ƙofa", "kifi", "doki", "baba", "ƙ is the hooked form of k."],
          ["H", "In ordinary Hausa writing, the length of a vowel is", "not marked", "shown by doubling the vowel", "shown by a dot below", "shown by a capital letter", "Readers rely on their knowledge of the word."],
          ["H", "The word 'shanu' (cattle) has how many consonants?", "two", "three", "four", "one", "Sh is one consonant; n is the other."],
          ["H", "A consonant written twice, as in 'hannu', shows that the consonant is", "pronounced long", "silent", "hooked", "followed by a diphthong", "It is held longer than a single consonant."],
        ],
      },
      {
        week: 4,
        title: "Tone and vowel length",
        subtopics: ["Hausa as a tone language", "The three tones", "Tone and length change meaning", "Tone in ordinary writing"],
        objectives: ["Explain that Hausa is a tone language", "Name the three tones of Hausa", "Show how tone or vowel length changes meaning", "Explain why tone is not marked in ordinary writing"],
        lesson: {
          title: "Karin sauti",
          summary: "Learn the Hausa tones and how tone and vowel length change meaning.",
          minutes: 40,
          notes: `## Hausa is a tone language
In Hausa the **pitch of the voice** on each syllable is part of the word. This pitch is called **karin sauti** (tone).

## The three tones
| Tone | Hausa name | Mark used in grammar books |
|---|---|---|
| **high** | karin sauti na sama | usually **unmarked** |
| **low** | karin sauti na ƙasa | **grave accent** (à) |
| **falling** | karin sauti mai faɗuwa | **circumflex** (â) |
The **falling** tone starts high and drops within one syllable. It occurs only on a **heavy** syllable (one with a long vowel, a diphthong or a final consonant).

## Tone changes meaning
The letters are the same; **only the tones differ**. (L = low, H = high.)
| Word | Tones | Meaning |
|---|---|---|
| **mata** | L – H | wife |
| **mata** | H – H | women |
| **kuka** | H – H | crying |
| **kuka** | H – L | baobab tree |
| **gora** | H – L | bamboo staff |
| **gora** | L – H | large gourd |

## Tone in grammar
Tone can also show a **difference of grammar**. For example the pronoun **ya** before a verb is said differently in "he did" and "he should do", and many verbs change tone when they become commands:
- **Ka zo.** (statement tone) — You came.
- **Zo!** — Come!

## Vowel length changes meaning
A **long vowel** is held about twice as long as a short one.
| Word | Length | Meaning |
|---|---|---|
| **fari** | short a | white |
| **fari** | long a | beginning |
In dictionaries long vowels are shown by a line above (ā) or by doubling (aa).

## Why are tones not written?
In everyday Hausa — books, newspapers, examinations — **tone and vowel length are not marked**. The reader works out the word from the **context**:
> *Mata sun zo.* — The **women** have come. (**sun** shows a plural subject.)
> *Matar Audu ta zo.* — Audu's **wife** has come.
Marks are used only in **dictionaries, grammar books and language teaching**.

## How to hear the tone
1. Say the word slowly, syllable by syllable.
2. Hum it — does the voice stay **up**, go **down**, or **fall**?
3. Compare with a word you know.

## Why it matters
- wrong tone can give the **wrong word**
- **poetry and song** depend on tone and syllable weight
- the "**talking drum**" (**kalangu**) imitates the tones of speech`,
          examples: `**Example 1.** Name the three tones of Hausa. *Answer:* **High, low and falling**.

**Example 2.** Give the two meanings of **mata** according to tone. *Answer:* **Wife** (low–high) and **women** (high–high).

**Example 3.** Are tones marked in ordinary Hausa writing? *Answer:* **No** — the reader relies on **context**; marks appear only in dictionaries and grammar books.`,
        },
        questions: [
          ["E", "The Hausa term for 'tone' is", "karin sauti", "karin magana", "karin harshe", "kacici-kacici", "It is the pitch of the voice on a syllable."],
          ["E", "The number of tones in Hausa is", "three", "two", "five", "seven", "They are high, low and falling."],
          ["E", "In ordinary Hausa writing, tones are", "not marked", "marked on every vowel", "shown by hooked letters", "shown by capital letters", "The reader relies on context."],
          ["M", "The tone that begins high and drops within one syllable is the", "falling tone", "low tone", "high tone", "rising tone", "It occurs only on a heavy syllable."],
          ["M", "The word 'mata' can mean 'wife' or 'women' depending on", "tone", "the hooked letter", "the spelling", "a capital letter", "The letters are the same in both."],
          ["M", "In grammar books, the low tone in Hausa is shown with", "a grave accent", "an acute accent", "a hook", "an apostrophe", "As in à. Answer: a grave accent."],
          ["M", "The word 'kuka' can mean 'crying' or", "the baobab tree", "a cooking pot", "a goat", "a market", "The two differ only in tone."],
          ["H", "A vowel held about twice as long as a short vowel is called", "a long vowel", "a diphthong", "a glottal stop", "a hooked vowel", "Length can change the meaning of a word."],
          ["H", "In the sentence 'Mata sun zo', the reader knows that 'mata' means 'women' because of", "the plural pronoun 'sun'", "a tone mark on the word", "the capital letter", "the hooked letter", "Context shows which word is meant."],
          ["H", "The Hausa drum that imitates the tones of speech is the", "kalangu", "kakaki", "algaita", "goge", "It is an hourglass-shaped talking drum."],
        ],
      },
      {
        week: 5,
        title: "Greetings for the time of day",
        subtopics: ["Morning, afternoon and evening greetings", "Asking after someone", "Polite words", "Greeting elders"],
        objectives: ["Greet correctly at different times of day", "Ask and answer questions about health, work and family", "Use polite words such as please, thank you and sorry", "Greet elders respectfully"],
        lesson: {
          title: "Gaisuwa",
          summary: "Greet people correctly at different times of the day.",
          minutes: 40,
          notes: `## Greeting matters
Greeting (**gaisuwa**) is central to Hausa manners. A proper greeting is **a chain of questions and answers** about health, family, work and tiredness. To pass without greeting is rude.

## Greetings by time of day
| Hausa | English | Reply |
|---|---|---|
| **Ina kwana?** | Good morning ("How was the night?") | **Lafiya lau.** |
| **Barka da safiya.** | Good morning | **Barka dai.** |
| **Ina wuni? / Barka da rana.** | Good afternoon ("How is the day?") | **Lafiya.** |
| **Barka da yamma.** | Good evening | **Barka dai.** |
| **Sai da safe.** | Good night ("Till morning") | **Allah ya kai mu.** |
| **Sannu.** | Hello; greetings | **Yauwa, sannu.** |
| **Sai anjima.** | See you later | **To, sai anjima.** |
| **Sai gobe.** | Till tomorrow | **Allah ya kai mu.** |

## The Islamic greeting
- **Salamu alaikum.** — Peace be upon you.
- **Wa alaikumus salam.** — And upon you be peace.
It is said on entering a house or joining a group.

## Asking after someone
| Hausa | English | Reply |
|---|---|---|
| **Yaya dai? / Ƙaƙa?** | How are things? | **Lafiya.** |
| **Ina gajiya?** | How is the tiredness? | **Ba gajiya.** (No tiredness.) |
| **Ina aiki?** | How is work? | **Aiki da godiya.** (Work, with thanks.) |
| **Yaya gida? / Yaya iyali?** | How is the household / family? | **Lafiya lau.** |
| **Yaya yara?** | How are the children? | **Suna lafiya.** |
| **Madalla.** | Splendid; thank God. | — |

**Lafiya** means health or well-being; **lafiya lau** / **lafiya ƙalau** means "perfectly well".

## Polite words
| Hausa | English |
|---|---|
| **Na gode.** | Thank you. |
| **Don Allah** | Please ("for God's sake") |
| **Yi haƙuri.** | Sorry; be patient. |
| **Sannu da zuwa.** | Welcome. |
| **I / Eh** | Yes |
| **A'a** | No |
| **To.** | All right. |

## Greeting elders
- the **younger person greets first**
- a boy or man **squats or bows** (**durƙusa**); a girl or woman **kneels or bends low**
- shoes are removed on entering a room
- elders are **not called by their bare names**: use **Malam**, **Baba**, **Mama / Inna**, **Yaya**, **Alhaji**, **Hajiya**
- an emir or a superior is saluted **"Ranka ya daɗe!"** — "May your life be long!"

## A short dialogue
> **Musa:** Ina kwana, Baba?
> **Baba:** Lafiya lau. Ka tashi lafiya?
> **Musa:** Lafiya, Baba. Ina gajiya?
> **Baba:** Ba gajiya. Madalla.`,
          examples: `**Example 1.** How do you greet someone in the morning in Hausa? *Answer:* **Ina kwana?** — and the reply is **Lafiya lau**.

**Example 2.** What is the reply to **"Ina gajiya?"** *Answer:* **Ba gajiya** (No tiredness).

**Example 3.** Give the Hausa for "please", "thank you" and "sorry". *Answer:* **Don Allah, na gode and yi haƙuri**.`,
        },
        questions: [
          ["E", "'Ina kwana?' is a greeting used in the", "morning", "afternoon", "evening", "middle of the night", "It asks how the night was."],
          ["E", "The Hausa expression for 'Thank you' is", "Na gode", "Don Allah", "Yi haƙuri", "Sai anjima", "It expresses thanks."],
          ["E", "The Hausa word for 'no' is", "a'a", "i", "to", "sannu", "I or eh means 'yes'."],
          ["M", "The usual reply to 'Ina kwana?' is", "Lafiya lau", "Ba gajiya", "Sai gobe", "Na gode", "It means 'perfectly well'."],
          ["M", "'Sai da safe' means", "Good night (till morning)", "Good morning", "Welcome", "See you later today", "It is said before going to bed."],
          ["M", "'Don Allah' means", "Please", "Sorry", "Yes", "Welcome", "Literally, 'for God's sake'."],
          ["M", "'Barka da yamma' is a greeting used in the", "evening", "morning", "afternoon", "dawn", "Yamma means evening."],
          ["H", "The correct reply to 'Ina gajiya?' is", "Ba gajiya", "Lafiya lau", "Aiki da godiya", "Allah ya kai mu", "It means 'There is no tiredness'."],
          ["H", "An emir or a superior is saluted with the words", "Ranka ya daɗe", "Sai anjima", "Yauwa sannu", "Sannu da aiki", "It means 'May your life be long'."],
          ["H", "The reply to 'Salamu alaikum' is", "Wa alaikumus salam", "Lafiya lau", "Barka dai", "Na gode", "It returns the wish of peace."],
        ],
      },
      {
        week: 6,
        title: "Greetings for occasions and introducing oneself",
        subtopics: ["Greetings for work and activities", "Greetings for events", "Introducing yourself", "Masculine and feminine forms of 'you'"],
        objectives: ["Use suitable greetings for people at work, arriving or resting", "Use greetings for festivals, births, sickness and bereavement", "Introduce yourself in Hausa", "Choose the correct form when speaking to a male or a female"],
        lesson: {
          title: "Gaisuwar lokuta daban-daban",
          summary: "Use greetings for different occasions and introduce yourself.",
          minutes: 40,
          notes: `## "Sannu da…" and "Barka da…"
Many Hausa greetings begin with **Sannu da** ("greetings on…") or **Barka da** ("blessings on…"), followed by what the person is doing or the occasion.

## Greetings for activities
| Hausa | Said to someone who is… |
|---|---|
| **Sannu da aiki.** | working |
| **Sannu da zuwa.** | arriving (welcome) |
| **Sannu da hutawa.** | resting |
| **Sannu da kokari.** | making an effort (well done) |
| **Sannu da gida.** | at home (said by the one arriving) |
| **Sai an dawo. / A sauka lafiya.** | setting out on a journey ("arrive safely") |
| **Barka da dawowa.** | returning from a journey |
The usual reply is **"Yauwa"** or **"Yauwa, sannu"**.

## Greetings for events
| Hausa | Occasion |
|---|---|
| **Barka da Sallah.** | the Sallah festivals |
| **Barka da sabuwar shekara.** | New Year |
| **Barka da haihuwa. / Allah ya raya.** | birth of a child ("May God let it live") |
| **Allah ya ba da zaman lafiya.** | marriage ("May God grant a peaceful home") |
| **Allah ya sawwaƙe. / Allah ya ba da lafiya.** | to a sick person |
| **Allah ya jiƙan sa.** | bereavement ("May God have mercy on him") |
| **Allah ya ba da sa'a.** | wishing good luck |
| **Barka da arziki.** | good fortune |
The answer to a prayer is **"Amin"**.

## Introducing yourself
Hausa has **different forms for speaking to a male and to a female**.
| To a male | To a female | English |
|---|---|---|
| **Menene sunanka?** | **Menene sunanki?** | What is your name? |
| **Yaya kake?** | **Yaya kike?** | How are you? |
| **Ina kake zaune?** | **Ina kike zaune?** | Where do you live? |
| **Shekarunka nawa?** | **Shekarunki nawa?** | How old are you? |

Answers:
- **Sunana Musa.** — My name is Musa.
- **Shekaruna goma sha ɗaya.** — I am eleven years old.
- **Ina zaune a Kano.** — I live in Kano.
- **Ni ɗalibi ne.** (boy) / **Ni ɗaliba ce.** (girl) — I am a student.
- **Ni ɗan Katsina ne.** / **Ni 'yar Katsina ce.** — I am from Katsina.

**-ka** = your (to a male); **-ki** = your (to a female); **-na** = my.

## Hospitality
A visitor is welcomed with **"Sannu da zuwa"**, given **water** and a place to sit, and often offered **kola nut (goro)** — the mark of friendship. A saying holds that **the guest is a blessing**.

## Good manners
Greet first if you are younger; lower yourself before elders; receive things with the **right hand**; say **"Na gode"** when you are given something.`,
          examples: `**Example 1.** What do you say to someone who is working? *Answer:* **Sannu da aiki** — and the reply is *Yauwa*.

**Example 2.** How do you ask a girl her name? *Answer:* **Menene sunanki?** (to a boy: *Menene sunanka?*)

**Example 3.** Say "My name is Amina; I am a student." *Answer:* **Sunana Amina; ni ɗaliba ce**.`,
        },
        questions: [
          ["E", "The greeting for a person who is working is", "Sannu da aiki", "Sannu da zuwa", "Barka da Sallah", "Sai da safe", "Aiki means work."],
          ["E", "'Sunana Musa' means", "My name is Musa", "I live with Musa", "Musa is my friend", "Where is Musa?", "Suna means name."],
          ["E", "'Sannu da zuwa' is said to someone who", "has just arrived", "is going to bed", "is eating", "is selling", "It means 'welcome'."],
          ["M", "'Menene sunanki?' is addressed to", "a female", "a male", "a group", "an emir only", "The ending -ki means 'your' to a female."],
          ["M", "'Barka da Sallah' is a greeting for", "the Sallah festivals", "a person at work", "a traveller", "a sick person", "It is exchanged at the two great festivals."],
          ["M", "'Ina zaune a Kano' means", "I live in Kano", "I am going to Kano", "I come from Kano market", "I like Kano", "Zaune means settled or living."],
          ["M", "The answer to a prayer such as 'Allah ya ba da lafiya' is", "Amin", "Yauwa", "A'a", "Sannu", "It means 'So be it'."],
          ["H", "'Allah ya jiƙan sa' is said on the occasion of", "a death", "a birth", "a wedding", "a journey", "It means 'May God have mercy on him'."],
          ["H", "A girl says 'I am a student' as", "Ni ɗaliba ce", "Ni ɗalibi ne", "Ni ɗalibai ne", "Ni malama ce", "The feminine noun takes 'ce'."],
          ["H", "The kola nut offered to a visitor is called", "goro", "gero", "gishiri", "gyaɗa", "It is a mark of friendship."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Numbers 1 to 20",
        subtopics: ["Counting 1 to 10", "Counting 11 to 19", "The number 20", "Counting objects"],
        objectives: ["Count from 1 to 10 in Hausa", "Form the numbers 11 to 19 with 'goma sha'", "Say and write 20", "Count objects correctly"],
        lesson: {
          title: "Ƙidaya: 1 – 20",
          summary: "Count from one to twenty in Hausa.",
          minutes: 40,
          notes: `## Counting 1 – 10
**Ƙidaya** means counting; **lamba** means number.
| Figure | Hausa |
|---|---|
| 1 | **ɗaya** |
| 2 | **biyu** |
| 3 | **uku** |
| 4 | **huɗu** |
| 5 | **biyar** |
| 6 | **shida** |
| 7 | **bakwai** |
| 8 | **takwas** |
| 9 | **tara** |
| 10 | **goma** |

## 11 – 19: "ten plus…"
Add the unit to ten with **sha**:
| Figure | Hausa | Idea |
|---|---|---|
| 11 | **goma sha ɗaya** | 10 + 1 |
| 12 | **goma sha biyu** | 10 + 2 |
| 13 | **goma sha uku** | 10 + 3 |
| 14 | **goma sha huɗu** | 10 + 4 |
| 15 | **goma sha biyar** | 10 + 5 |
| 16 | **goma sha shida** | 10 + 6 |
| 17 | **goma sha bakwai** | 10 + 7 |
| 18 | **goma sha takwas** | 10 + 8 |
| 19 | **goma sha tara** | 10 + 9 |

In speech **goma** is often dropped: **sha ɗaya** (11), **sha biyu** (12).

### Counting back from twenty
18 and 19 may also be said as **"twenty less…"**:
- **ashirin biyu babu** — 18 (twenty, two missing)
- **ashirin ɗaya babu** — 19 (twenty, one missing)

## 20
**ashirin**

## Counting things
The number comes **after** the noun:
| | |
|---|---|
| **littafi ɗaya** | one book |
| **littattafai biyu** | two books |
| **yara uku** | three children |
| **kujeru biyar** | five chairs |
| **kwanaki bakwai** | seven days |
| **mutane goma** | ten people |
The word **guda** ("unit") may be added: **yara guda uku** — three children.

## Useful questions
- **Nawa?** — How many? How much?
- **Yara nawa ne a aji?** — How many children are in the class?
- **Su ashirin ne.** — They are twenty.

## Zero and first
- **sifiri** — zero
- **na farko** — the first

## Practice
Count your fingers: **ɗaya, biyu, uku, huɗu, biyar, shida, bakwai, takwas, tara, goma**.`,
          examples: `**Example 1.** What is 7 in Hausa? *Answer:* **bakwai**.

**Example 2.** How is 15 formed? *Answer:* **goma sha biyar** — "ten plus five".

**Example 3.** Say "three children" and "one book". *Answer:* **yara uku** and **littafi ɗaya**.`,
        },
        questions: [
          ["E", "The Hausa word for the number 2 is", "biyu", "uku", "huɗu", "biyar", "It comes after ɗaya."],
          ["E", "'Goma' is the number", "10", "5", "8", "20", "The teens are built on it."],
          ["E", "The Hausa word for the number 5 is", "biyar", "shida", "bakwai", "tara", "It is the number of fingers on one hand."],
          ["M", "'Goma sha biyu' is the number", "12", "20", "22", "102", "It means ten plus two."],
          ["M", "The Hausa word for 9 is", "tara", "takwas", "bakwai", "shida", "It comes just before goma."],
          ["M", "'Yara uku' means", "three children", "the third child", "thirteen children", "a big child", "The number follows the noun."],
          ["M", "'Takwas' is the number", "8", "6", "7", "3", "Bakwai is seven."],
          ["H", "The Hausa word for 20 is", "ashirin", "talatin", "goma biyu", "biyu goma", "It is borrowed from Arabic."],
          ["H", "'Ashirin biyu babu' is another way of saying", "18", "22", "12", "20", "Literally, 'twenty, two missing'."],
          ["H", "In 'goma sha tara', the word 'sha' serves to", "add the unit to ten", "subtract from ten", "multiply ten", "make the number plural", "It gives nineteen."],
        ],
      },
      {
        week: 2,
        title: "The family",
        subtopics: ["Members of the family", "Elder and younger siblings", "The extended family", "Talking about one's family"],
        objectives: ["Name members of the family in Hausa", "Distinguish terms for elder and younger brothers and sisters", "Name relatives in the extended family", "Make simple sentences about one's family"],
        lesson: {
          title: "Iyali da dangi",
          summary: "Name the members of the family and describe your own family.",
          minutes: 40,
          notes: `## The family
**Iyali** is the household — a man, his wife or wives and children. **Dangi** are relatives in general. The bond of kinship is **zumunci**, which the Hausa prize highly.

## Family members
| Hausa | English |
|---|---|
| **uba / baba / mahaifi** | father |
| **uwa / mama / mahaifiya** | mother |
| **iyaye** | parents |
| **ɗa** | son |
| **'ya** | daughter |
| **'ya'ya** | children (offspring) |
| **yaro** | boy |
| **yarinya** | girl |
| **miji** | husband |
| **mata** | wife |
| **kaka** | grandfather / grandmother |
| **jika** | grandchild |
| **tagwaye** | twins |

## Elder and younger
Hausa has **separate words** according to **age and sex**:
| Hausa | English |
|---|---|
| **wa** (also **yaya**) | elder brother |
| **ya** (also **yaya**) | elder sister |
| **ƙane** | younger brother |
| **ƙanwa** | younger sister |
| **ɗan'uwa** | brother; relative ("son of mother") |
| **'yar'uwa** | sister; female relative |
Elder siblings are addressed respectfully as **Yaya**.

## The extended family
| Hausa | English |
|---|---|
| **kawu** | uncle (mother's brother) |
| **baffa** | uncle (father's brother) |
| **gwaggo / goggo** | aunt (father's sister) |
| **inna** | aunt (mother's sister); also "mother" |
| **suruki / suruka** | father-in-law / mother-in-law; in-law |
| **maigida** | head of the household; husband |
| **uwargida** | senior wife; lady of the house |
| **amarya** | bride; newest wife |
| **aboki / abokiya** | friend (male / female) |
| **maƙwabci** | neighbour |

## Talking about your family
| Hausa | English |
|---|---|
| **Wannan babana ne.** | This is my father. |
| **Sunan mahaifiyata Hadiza.** | My mother's name is Hadiza. |
| **Ina da yayye biyu.** | I have two elder siblings. |
| **Ƙanwata ƙarama ce.** | My younger sister is small. |
| **Mu shida ne a gidanmu.** | We are six in our house. |

"My" is **-na** after a masculine noun and **-ta** after a feminine noun: **ubana** (my father), **uwata** (my mother), **ƙanena** (my younger brother), **ƙanwata** (my younger sister).

## Family values
respect for elders (**girmama manya**); obedience (**biyayya**); keeping up kinship by **visiting** (**ziyara**) — "kinship is kept alive by the feet"; caring for the aged and the needy.`,
          examples: `**Example 1.** What are the Hausa words for elder brother and younger sister? *Answer:* **wa** (or *yaya*) and **ƙanwa**.

**Example 2.** Say "my father" and "my mother". *Answer:* **ubana** (or *babana*) and **uwata** (or *mamata*).

**Example 3.** What is **zumunci**? *Answer:* The **bond of kinship**, kept alive by visiting and helping relatives.`,
        },
        questions: [
          ["E", "The Hausa word for 'mother' is", "uwa", "uba", "ɗa", "miji", "Mama and mahaifiya are also used."],
          ["E", "'Uba' means", "father", "brother", "uncle", "friend", "Baba is also used."],
          ["E", "The Hausa word for 'girl' is", "yarinya", "yaro", "mata", "kaka", "Yaro is a boy. Answer: yarinya."],
          ["M", "A younger brother is called", "ƙane", "wa", "ƙanwa", "ya", "Wa is the elder brother."],
          ["M", "'Kaka' means", "grandparent", "uncle", "twin", "in-law", "It is used for both grandfather and grandmother."],
          ["M", "The Hausa word for 'twins' is", "tagwaye", "'ya'ya", "iyaye", "dangi", "Twin boys are often named Hassan and Hussaini."],
          ["M", "'Uwata' means", "my mother", "your mother", "our mother", "his mother", "The ending -ta is 'my' after a feminine noun."],
          ["H", "The Hausa word for a maternal uncle (mother's brother) is", "kawu", "baffa", "gwaggo", "suruki", "Baffa is the father's brother."],
          ["H", "The head of a Hausa household is the", "maigida", "uwargida", "amarya", "jika", "The word means 'owner of the house'."],
          ["H", "The bond of kinship, kept alive by visiting relatives, is called", "zumunci", "biyayya", "gaisuwa", "ziyara", "The Hausa prize it highly."],
        ],
      },
      {
        week: 3,
        title: "Parts of the body",
        subtopics: ["The head and face", "The trunk", "The limbs", "Sentences about the body"],
        objectives: ["Name the parts of the head and face", "Name the parts of the trunk and limbs", "State what each part is used for", "Make simple sentences using body parts"],
        lesson: {
          title: "Sassan jiki",
          summary: "Name the parts of the human body in Hausa.",
          minutes: 40,
          notes: `## The body
**Jiki** means body; **sassan jiki** means parts of the body.

## The head and face
| Hausa | English |
|---|---|
| **kai** | head |
| **gashi** | hair |
| **fuska** | face |
| **ido** (pl. **idanu**) | eye |
| **kunne** (pl. **kunnuwa**) | ear |
| **hanci** | nose |
| **baki** | mouth |
| **leɓe** | lip |
| **haƙori** (pl. **haƙora**) | tooth |
| **harshe** | tongue; language |
| **kunci** | cheek |
| **haɓa** | chin |
| **wuya** | neck |

## The trunk
| Hausa | English |
|---|---|
| **kafaɗa** | shoulder |
| **ƙirji** | chest |
| **ciki** | belly; inside |
| **baya** | back |
| **ƙugu** | waist |
| **zuciya** | heart |

## The limbs
| Hausa | English |
|---|---|
| **hannu** (pl. **hannaye**) | hand, arm |
| **yatsa** (pl. **yatsu**) | finger |
| **farce** | nail |
| **ƙafa** (pl. **ƙafafu**) | leg, foot |
| **gwiwa** | knee |
| **cinya** | thigh |
| **fata** | skin |

## What each part does
- **Da ido muke gani.** — We see with the eye.
- **Da kunne muke ji.** — We hear with the ear.
- **Da hanci muke shaƙar iska.** — We breathe and smell with the nose.
- **Da baki muke cin abinci.** — We eat with the mouth.
- **Da ƙafa muke tafiya.** — We walk with the legs.
- **Da hannu muke rubutu.** — We write with the hand.

## Sentences
- **Wannan kaina ne.** — This is my head.
- **Ina da idanu biyu.** — I have two eyes.
- **Wanke hannunka.** — Wash your hands.
- **Kaina yana ciwo.** — My head aches.
- **Cikina yana ciwo.** — I have a stomach ache.

## Right and left
- **hannun dama** — right hand
- **hannun hagu** — left hand
Food is eaten and things are given with the **right** hand.

## Care of the body
bath (**wanka**), brush the teeth (**goge haƙora**), cut the nails (**yanke farce**), wash the hands before eating (**wanke hannu**). Cleanliness is **tsabta**.`,
          examples: `**Example 1.** What is **kunne**, and what do we do with it? *Answer:* **Ear** — we hear with it (*Da kunne muke ji*).

**Example 2.** Give the Hausa words for hand and leg. *Answer:* **hannu** and **ƙafa**.

**Example 3.** Translate "Wanke hannunka." *Answer:* **Wash your hands** (said to a male).`,
        },
        questions: [
          ["E", "The Hausa word for 'head' is", "kai", "ido", "kunne", "hanci", "It is the topmost part of the body."],
          ["E", "'Ƙafa' means", "leg", "hand", "neck", "back", "We walk with it."],
          ["E", "The Hausa word for 'mouth' is", "baki", "haƙori", "harshe", "leɓe", "We eat and speak with it."],
          ["M", "'Kunne' is the part of the body used for", "hearing", "seeing", "smelling", "walking", "Kunne means ear."],
          ["M", "The Hausa word for 'eye' is", "ido", "hanci", "fuska", "ciki", "Its plural is idanu."],
          ["M", "'Haƙori' means", "tooth", "tongue", "ear", "finger", "Its plural is haƙora."],
          ["M", "The Hausa word for 'hand' is", "hannu", "kafaɗa", "ƙirji", "baya", "Hannun dama is the right hand."],
          ["H", "'Gwiwa' means", "knee", "shoulder", "chin", "waist", "It is the joint in the middle of the leg."],
          ["H", "'Kaina yana ciwo' means", "My head aches", "My head is big", "My hair is long", "I am washing my head", "Ciwo means pain or illness."],
          ["H", "The word 'harshe' means both 'tongue' and", "language", "tooth", "mouth", "lip", "As in harshen Hausa — the Hausa language."],
        ],
      },
      {
        week: 4,
        title: "Days, months and seasons",
        subtopics: ["Words for time", "Days of the week", "Months of the year", "The seasons"],
        objectives: ["Use words for day, week, month and year", "Name the seven days of the week", "Name the months of the year", "Name the seasons of the Hausa year"],
        lesson: {
          title: "Ranaku, watanni da yanayi",
          summary: "Name the days of the week, the months and the seasons.",
          minutes: 40,
          notes: `## Words for time
| Hausa | English |
|---|---|
| **rana** | day; sun |
| **mako / sati** | week |
| **wata** | month; moon |
| **shekara** | year |
| **yau** | today |
| **gobe** | tomorrow |
| **jiya** | yesterday |
| **jibi** | the day after tomorrow |
| **shekaranjiya** | the day before yesterday |
| **safe / safiya** | morning |
| **rana** | daytime, afternoon |
| **yamma** | evening |
| **dare** | night |
| **yanzu** | now |
| **lokaci** | time |

## Days of the week (ranakun mako)
The names come from **Arabic**.
| Hausa | English |
|---|---|
| **Lahadi** | Sunday |
| **Litinin** | Monday |
| **Talata** | Tuesday |
| **Laraba** | Wednesday |
| **Alhamis** | Thursday |
| **Jumma'a** | Friday |
| **Asabar** | Saturday |
**Jumma'a** is the day of the weekly congregational prayer.

### Names from the day of birth
| Day | Boy | Girl |
|---|---|---|
| Lahadi | **Ɗanladi** | **Ladi** |
| Litinin | **Ɗanliti** | **Altine** |
| Talata | **Ɗantala** | **Talatu** |
| Laraba | **Balarabe** | **Balaraba** |
| Alhamis | **Ɗanlami** | **Lami** |
| Jumma'a | **Ɗanjuma** | **Jummai** |
| Asabar | **Ɗan'asabe** | **Asabe** |

## Months of the year (watannin shekara)
| Hausa | English | Hausa | English |
|---|---|---|---|
| **Janairu** | January | **Yuli** | July |
| **Fabrairu** | February | **Agusta** | August |
| **Maris** | March | **Satumba** | September |
| **Afrilu** | April | **Oktoba** | October |
| **Mayu** | May | **Nuwamba** | November |
| **Yuni** | June | **Disamba** | December |
The **Islamic calendar**, which follows the moon, is used for religious dates: **Ramadan** (the month of fasting) and the month of the **Hajj**.

## Questions and answers
- **Yau wace rana ce?** — What day is today?
- **Yau Litinin ce.** — Today is Monday.
- **Gobe Talata ce.** — Tomorrow is Tuesday.
- **Wane wata muke ciki?** — Which month are we in?
- **Muna cikin watan Janairu.** — We are in the month of January.

## The seasons (yanayi)
| Hausa | Season |
|---|---|
| **damina** | the rainy season |
| **rani** | the dry season |
| **hunturu** | the cold, dusty harmattan |
| **bazara** | the hot season just before the rains |
| **kaka** | harvest time |
Farming life follows these seasons: planting in **damina**, harvest in **kaka**.`,
          examples: `**Example 1.** What are **yau**, **gobe** and **jiya**? *Answer:* **Today, tomorrow and yesterday**.

**Example 2.** Name the Hausa words for Friday and Sunday. *Answer:* **Jumma'a** and **Lahadi**.

**Example 3.** On which day was a girl named **Jummai** born? *Answer:* **Friday (Jumma'a)**.`,
        },
        questions: [
          ["E", "The Hausa word for 'today' is", "yau", "gobe", "jiya", "jibi", "Gobe is tomorrow."],
          ["E", "'Lahadi' is", "Sunday", "Monday", "Friday", "Saturday", "It is the first day of the week."],
          ["E", "The Hausa word for 'year' is", "shekara", "wata", "mako", "dare", "It contains twelve months."],
          ["M", "'Litinin' is", "Monday", "Tuesday", "Wednesday", "Thursday", "It follows Lahadi."],
          ["M", "'Wata' means both 'month' and", "moon", "sun", "star", "rain", "The Islamic month follows the moon."],
          ["M", "'Jiya' means", "yesterday", "tomorrow", "today", "next week", "It is the day before today."],
          ["M", "'Jumma'a' is", "Friday", "Saturday", "Thursday", "Sunday", "It is the day of the weekly congregational prayer."],
          ["H", "A boy named 'Ɗanjuma' was born on", "Friday", "Sunday", "Saturday", "Wednesday", "The girl's name for that day is Jummai."],
          ["H", "The rainy season in Hausa is called", "damina", "rani", "hunturu", "bazara", "Planting is done at this time."],
          ["H", "'Jibi' means", "the day after tomorrow", "the day before yesterday", "next year", "this evening", "Shekaranjiya is the day before yesterday."],
        ],
      },
      {
        week: 5,
        title: "Colours",
        subtopics: ["Basic colour words", "Other colours", "Describing things by colour", "Colours in Hausa life"],
        objectives: ["Name the basic colours in Hausa", "Name other colours formed with 'ruwan'", "Describe objects by colour using the correct form", "State where colours matter in Hausa life"],
        lesson: {
          title: "Launuka",
          summary: "Name colours and describe things by colour.",
          minutes: 40,
          notes: `## Colour
The Hausa word for colour is **launi** (plural **launuka**).

## Basic colour words
Colour words change for **masculine, feminine and plural**.
| Masculine | Feminine | Plural | English |
|---|---|---|---|
| **fari** | **fara** | **farare** | white |
| **baƙi** | **baƙa** | **baƙaƙe** | black |
| **ja** | **ja** | **jajaye** | red |
| **kore** | **koriya** | **kwarra** | green |
| **shuɗi** | **shuɗiya** | **shuɗɗa** | blue |
| **rawaya** | **rawaya** | — | yellow |

## Other colours
Many are named with **ruwan** ("water of / colour of") + a familiar thing:
| Hausa | English | Literally |
|---|---|---|
| **ruwan ƙasa** | brown | colour of earth |
| **ruwan toka / toka-toka** | grey | colour of ash |
| **ruwan goro** | orange | colour of kola |
| **ruwan hoda** | pink | colour of powder |
| **ruwan zinare** | gold | colour of gold |
| **ruwan madara** | cream | colour of milk |

## Describing things
The colour may come **before** the noun, joined by a **linker** (**-n** for masculine and plural, **-r** for feminine):
- **farin kaya** — white clothes
- **baƙar riga** — a black gown (riga is feminine)
- **jar hula** — a red cap
- **koren ganye** — a green leaf
Or **after** the noun:
- **riga fara** — a white gown
- **mota baƙa** — a black car

In a sentence, use **ne** (masculine) or **ce** (feminine):
- **Littafin fari ne.** — The book is white.
- **Rigar baƙa ce.** — The gown is black.

## Very white, very black
Each colour has its own **strengthening word**:
- **fari fat** — snow-white
- **baƙi ƙirin** — jet-black
- **ja wur** — bright red
- **kore shar** — deep green

## Questions
- **Wane launi ne wannan?** — What colour is this?
- **Fari ne.** — It is white.

## Colours in Hausa life
- **white** — purity; the white gown and turban for Friday prayer
- **indigo blue** — the famous cloth of the **Kano dye pits** (**marina**)
- **red** — the red cap; henna (**lalle**) stains the hands and feet red-brown for weddings and festivals
- **black** — antimony (**kwalli**) round the eyes

## Colours of the Nigerian flag
**kore, fari, kore** — green, white, green.`,
          examples: `**Example 1.** What is "white" in Hausa, in masculine and feminine? *Answer:* **fari** (masculine) and **fara** (feminine).

**Example 2.** Say "a black gown" and "white clothes". *Answer:* **baƙar riga** and **farin kaya**.

**Example 3.** How is "brown" expressed in Hausa? *Answer:* **ruwan ƙasa** — "the colour of earth".`,
        },
        questions: [
          ["E", "The Hausa word for 'colour' is", "launi", "riga", "kaya", "ganye", "Its plural is launuka."],
          ["E", "'Fari' means", "white", "black", "red", "green", "The feminine form is fara."],
          ["E", "The Hausa word for 'red' is", "ja", "kore", "shuɗi", "baƙi", "As in jar hula — a red cap."],
          ["M", "'Baƙi' as a colour means", "black", "blue", "white", "grey", "With a plain k, 'baki' means mouth."],
          ["M", "'Kore' is the colour", "green", "yellow", "brown", "blue", "It is the colour of leaves."],
          ["M", "'Farin kaya' means", "white clothes", "black clothes", "new clothes", "torn clothes", "The linker -n joins the colour to the noun."],
          ["M", "The Hausa word for 'blue' is", "shuɗi", "rawaya", "ja", "kore", "It is the colour of indigo cloth."],
          ["H", "'Ruwan ƙasa' refers to the colour", "brown", "blue", "red", "white", "It means 'colour of earth'."],
          ["H", "The correct Hausa for 'a black gown' is", "baƙar riga", "baƙin riga", "baƙi riga", "riga baƙi", "Riga is feminine, so the linker is -r."],
          ["H", "The expression 'fari fat' means", "snow-white", "dirty white", "grey", "light red", "Fat strengthens the colour white."],
        ],
      },
      {
        week: 6,
        title: "Things in the home and classroom",
        subtopics: ["Objects in the classroom", "Objects in the home", "This and that", "Simple questions and commands"],
        objectives: ["Name common objects in the classroom", "Name common objects in the home", "Use wannan, wancan and waccan to point at things", "Ask 'What is this?' and obey simple commands"],
        lesson: {
          title: "Abubuwan gida da na aji",
          summary: "Name everyday objects at home and in the classroom.",
          minutes: 40,
          notes: `## In the classroom (a aji)
| Hausa | English |
|---|---|
| **makaranta** | school |
| **aji** | class, classroom |
| **malami / malama** | teacher (male / female) |
| **ɗalibi / ɗaliba** | student (male / female) |
| **littafi** | book |
| **alƙalami** | pen |
| **fensir** | pencil |
| **allo** | board; slate |
| **alli** | chalk |
| **tebur** | table |
| **kujera** | chair |
| **jaka** | bag |
| **takarda** | paper |

## In the home (a gida)
| Hausa | English |
|---|---|
| **gida** | house, home |
| **ɗaki** | room |
| **ƙofa** | door |
| **taga** | window |
| **gado** | bed |
| **tabarma** | mat |
| **fitila** | lamp |
| **tukunya** | pot |
| **kwano** | bowl, dish |
| **cokali** | spoon |
| **wuƙa** | knife |
| **kofi** | cup |
| **tsintsiya** | broom |
| **ruwa** | water |
| **wuta** | fire; light |
| **agogo** | clock, watch |
| **randa** | large water pot |

Many words are **borrowed** — from **Arabic** (**littafi, alƙalami, takarda**) and **English** (**tebur, fensir, kofi**).

## This and that
| Hausa | English |
|---|---|
| **wannan** | this |
| **wancan** | that (masculine) |
| **waccan** | that (feminine) |
| **waɗannan** | these |
| **waɗancan** | those |

## Asking and answering
Use **ne** with **masculine** nouns and **ce** with **feminine** nouns.
- **Menene wannan?** — What is this?
- **Wannan littafi ne.** — This is a book.
- **Wannan kujera ce.** — This is a chair.
- **Wancan tebur ne.** — That is a table.
- **Wannan littafi ne?** — Is this a book?
- **I, littafi ne.** — Yes, it is a book.
- **A'a, jaka ce.** — No, it is a bag.

## Commands in class
- **Tashi!** — Stand up!
- **Zauna!** — Sit down!
- **Buɗe littafinka.** — Open your book.
- **Rufe littafinka.** — Close your book.
- **Rufe ƙofa.** — Shut the door.
- **Ku yi shiru.** — Keep quiet (to many).
- **Zo nan.** — Come here.
- **Saurara.** — Listen.`,
          examples: `**Example 1.** What are **kujera** and **littafi**? *Answer:* **Chair** and **book**.

**Example 2.** Ask "What is this?" in Hausa. *Answer:* **Menene wannan?**

**Example 3.** Say "This is a book" and "This is a chair." *Answer:* **Wannan littafi ne** and **Wannan kujera ce** — *ne* for masculine, *ce* for feminine.`,
        },
        questions: [
          ["E", "The Hausa word for 'book' is", "littafi", "kujera", "jaka", "tabarma", "It is borrowed from Arabic."],
          ["E", "'Gida' means", "house", "door", "room", "roof", "It also means home."],
          ["E", "The Hausa word for 'water' is", "ruwa", "wuta", "mai", "gishiri", "We drink it. Answer: ruwa."],
          ["M", "'Kujera' means", "chair", "table", "bed", "mat", "We sit on it. Answer: chair."],
          ["M", "The Hausa word for 'door' is", "ƙofa", "taga", "ɗaki", "gado", "Taga is a window."],
          ["M", "'Menene wannan?' means", "What is this?", "Who is that?", "Where is it?", "How many are they?", "Wannan means 'this'."],
          ["M", "'Malami' means", "teacher", "pupil", "farmer", "trader", "A woman teacher is malama."],
          ["H", "'Ɗaliba' means", "a female student", "a male student", "a school", "a classroom", "The masculine form is ɗalibi."],
          ["H", "The command 'Zauna!' means", "Sit down!", "Stand up!", "Keep quiet!", "Come here!", "Tashi means 'stand up'."],
          ["H", "The correct sentence for 'This is a chair' is", "Wannan kujera ce", "Wannan kujera ne", "Wancan kujera ne", "Kujera wannan su", "Kujera is feminine, so 'ce' is used."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "The syllable",
        subtopics: ["What a syllable is", "Types of syllable", "Light and heavy syllables", "Counting syllables"],
        objectives: ["Define a syllable", "Identify the three types of Hausa syllable", "Distinguish light from heavy syllables", "Divide words into syllables and count them"],
        lesson: {
          title: "Gaɓar kalma",
          summary: "Divide Hausa words into syllables and name the syllable types.",
          minutes: 40,
          notes: `## What is a syllable?
A **syllable** (**gaɓa**, plural **gaɓoɓi**) is a part of a word **pronounced at one breath**. A word (**kalma**) is made of one or more syllables, and each syllable carries **one tone**.

## The three types
Below, **B** stands for **baƙi** (consonant) and **W** for **wasali** (vowel).
| Type | Pattern | Examples |
|---|---|---|
| 1 | **BW** — consonant + short vowel | **gi**-da, **ka**-re |
| 2 | **BWW** — consonant + long vowel or diphthong | **kai**, **mai**, **ruu**-wa |
| 3 | **BWB** — consonant + vowel + consonant | **han**-nu, **sar**-ki, **lit**-ta-fi |

**Every Hausa syllable begins with a consonant.** A word written with a vowel first, such as **aiki**, really begins with a light glottal stop.

## Light and heavy syllables
- a **light** syllable (**gaɓa mara nauyi**) is **BW** — it ends in a short vowel
- a **heavy** syllable (**gaɓa mai nauyi**) is **BWW** or **BWB** — it has a long vowel, a diphthong or a closing consonant
The pattern of light and heavy syllables gives Hausa **poetry its metre**, and the **falling tone** can occur only on a heavy syllable.

## Dividing words into syllables
| Word | Division | Number |
|---|---|---|
| **zo** (come) | zo | 1 |
| **kai** (head) | kai | 1 |
| **gida** (house) | gi-da | 2 |
| **ruwa** (water) | ru-wa | 2 |
| **hannu** (hand) | han-nu | 2 |
| **sarki** (king) | sar-ki | 2 |
| **littafi** (book) | lit-ta-fi | 3 |
| **yarinya** (girl) | ya-rin-ya | 3 |
| **makaranta** (school) | ma-ka-ran-ta | 4 |
| **tsuntsu** (bird) | tsun-tsu | 2 |

Remember: **sh, ts, kw, gw, ky, gy, ƙw, ƙy** and the hooked letters each count as **one consonant**.

## Rules
1. Each syllable has **one vowel sound** (short, long or diphthong).
2. When **two consonants** stand together in the middle of a word, the **first closes** one syllable and the **second opens** the next: **sar-ki**, **han-nu**.
3. A syllable **never begins with two consonants** and **never ends with two**.

## Steps
1. Find each vowel sound.
2. Give it the consonant **before** it.
3. If another consonant follows before the next one, attach it to the **end** of the syllable.
4. Count.

## Why it matters
Knowing syllables helps with **spelling**, **reading aloud**, **tone** and the **scanning of verse**.`,
          examples: `**Example 1.** Divide **makaranta** into syllables. *Answer:* **ma-ka-ran-ta** — four syllables.

**Example 2.** Is the first syllable of **sarki** light or heavy? *Answer:* **Heavy** — *sar* ends in a consonant (BWB).

**Example 3.** How many syllables are in **littafi**? *Answer:* **Three** — lit-ta-fi.`,
        },
        questions: [
          ["E", "The Hausa term for 'syllable' is", "gaɓa", "wasali", "kalma", "jimla", "Its plural is gaɓoɓi."],
          ["E", "The word 'gida' has how many syllables?", "two", "one", "three", "four", "It divides as gi-da."],
          ["E", "The Hausa term for 'word' is", "kalma", "gaɓa", "harafi", "baƙi", "A word is made of one or more syllables."],
          ["M", "Every Hausa syllable begins with", "a consonant", "a vowel", "a diphthong", "two consonants", "Even words written with a vowel first begin with a glottal stop."],
          ["M", "The word 'makaranta' has", "four syllables", "three syllables", "five syllables", "two syllables", "Ma-ka-ran-ta. Answer: four syllables."],
          ["M", "A syllable made of a consonant and a short vowel is described as", "light", "heavy", "falling", "closed", "Its pattern is BW."],
          ["M", "The word 'hannu' is divided into syllables as", "han-nu", "ha-nnu", "hann-u", "h-annu", "The first n closes one syllable and the second opens the next."],
          ["H", "The syllable 'kai' (head) is heavy because it contains", "a diphthong", "a short vowel only", "two consonants at the end", "a hooked letter", "Its pattern is BWW."],
          ["H", "In Hausa, the falling tone can occur only on", "a heavy syllable", "a light syllable", "the first syllable of a word", "a word of one consonant", "It needs a long vowel, diphthong or closing consonant."],
          ["H", "The number of syllables in 'yarinya' is", "three", "two", "four", "five", "Ya-rin-ya. Answer: three."],
        ],
      },
      {
        week: 2,
        title: "Nouns: gender and number",
        subtopics: ["What a noun is", "Masculine and feminine", "Singular and plural", "Kinds of nouns"],
        objectives: ["Define a noun", "Tell whether a noun is masculine or feminine", "Give the plurals of common nouns", "Classify nouns as proper, common, abstract and so on"],
        lesson: {
          title: "Suna: jinsi da adadi",
          summary: "Identify Hausa nouns and learn their gender and plural forms.",
          minutes: 40,
          notes: `## What is a noun?
A **noun** (**suna** — "name") is the **name of a person, animal, place, thing or idea**.

## Gender (jinsi)
Every Hausa noun is either **masculine** (**namiji**) or **feminine** (**mace**).
- Most **feminine** nouns **end in -a**: **mota** (car), **kujera** (chair), **riga** (gown), **rana** (sun), **kasuwa** (market).
- Most nouns ending in other vowels are **masculine**: **littafi** (book), **doki** (horse), **gado** (bed), **tebur** (table).
- Some nouns ending in **-a** are **masculine**: **gida** (house), **ruwa** (water), **suna** (name), **wata** (moon), **baba** (father).
- Names of **male beings** are masculine and of **female beings** feminine: **yaro / yarinya**, **sarki / sarauniya**, **zakara / kaza** (cock / hen).

### Why gender matters
It decides the form of other words:
| | Masculine | Feminine |
|---|---|---|
| "is" | **ne** | **ce** |
| "he / she is …-ing" | **yana** | **tana** |
| linker "of / the" | **-n** | **-r** |
| "that" | **wancan** | **waccan** |
- **Littafi ne.** — It is a book. **Mota ce.** — It is a car.
- **Yaron yana wasa.** — The boy is playing. **Yarinyar tana wasa.** — The girl is playing.

## Number (adadi)
Hausa plurals are formed in **many ways** and must be **learnt with each noun**. In the plural there is **no gender**: all plurals take **ne** and **-n**.
| Singular | Plural | English |
|---|---|---|
| **yaro** | **yara** | boy → children |
| **littafi** | **littattafai** | book(s) |
| **gida** | **gidaje** | house(s) |
| **mota** | **motoci** | car(s) |
| **mutum** | **mutane** | person → people |
| **malami** | **malamai** | teacher(s) |
| **riga** | **riguna** | gown(s) |
| **ɗaki** | **ɗakuna** | room(s) |
| **kujera** | **kujeru** | chair(s) |
| **sarki** | **sarakuna** | king(s) |
| **doki** | **dawaki** | horse(s) |
| **kare** | **karnuka** | dog(s) |
| **mace** | **mata** | woman → women |
| **namiji** | **maza** | man → men |
| **ido** | **idanu** | eye(s) |
| **dabba** | **dabbobi** | animal(s) |

After a **number**, the singular is often used: **littafi uku** or **littattafai uku** — three books.

## Kinds of nouns
| Kind | Examples |
|---|---|
| **proper noun** (sunan yanka) | **Musa, Kano, Najeriya, Lahadi** |
| **common noun** (sunan gama-gari) | **yaro, gari, kare, gida** |
| **concrete noun** | **dutse** (stone), **itace** (tree) |
| **abstract noun** | **ƙauna** (love), **farin ciki** (joy), **hikima** (wisdom) |
| **collective noun** | **jama'a** (the people), **garke** (herd) |
| **countable / uncountable** | **littafi** / **ruwa, yashi** (sand) |

## Functions in a sentence
- **subject**: **Audu** ya sayi littafi. — *Audu bought a book.*
- **object**: Audu ya sayi **littafi**.
- after a preposition: Yana **a gida**. — *He is at home.*

## Find the nouns
> **Binta** ta ɗebo **ruwa** daga **rijiya**. — *Binta fetched water from the well.*
Nouns: **Binta, ruwa, rijiya**.`,
          examples: `**Example 1.** Is **mota** masculine or feminine, and how do you say "It is a car"? *Answer:* **Feminine** — **Mota ce**.

**Example 2.** Give the plurals of **yaro** and **littafi**. *Answer:* **yara** and **littattafai**.

**Example 3.** Which word is used for "is" after a masculine noun? *Answer:* **ne** — as in *Littafi ne*.`,
        },
        questions: [
          ["E", "The Hausa grammatical term for 'noun' is", "suna", "aikatau", "sifa", "harafi", "The word also means 'name'."],
          ["E", "The plural of 'yaro' (boy) is", "yara", "yaros", "yarinya", "yaraye", "It means children."],
          ["E", "Which of the following is a noun?", "gida", "tafi", "ci", "zo", "It is the name of a thing — a house."],
          ["M", "Most feminine nouns in Hausa end in", "-a", "-i", "-o", "-u", "Examples are mota, kujera and riga."],
          ["M", "The word used for 'is' after a feminine noun is", "ce", "ne", "na", "ta", "As in 'Mota ce'."],
          ["M", "The plural of 'littafi' (book) is", "littattafai", "littafai", "littafuna", "littafoci", "Plurals must be learnt with each noun."],
          ["M", "Which of the following is a proper noun?", "Kano", "gari", "yaro", "kare", "It is the particular name of a city."],
          ["H", "Which of the following nouns ending in -a is masculine?", "gida", "mota", "kujera", "riga", "We say 'Gida ne', not 'Gida ce'."],
          ["H", "The plural of 'mutum' (person) is", "mutane", "mutumai", "mutuna", "mutumomi", "It means people."],
          ["H", "In the plural, Hausa nouns of both genders take", "ne", "ce", "ta", "ya", "Gender is not distinguished in the plural."],
        ],
      },
      {
        week: 3,
        title: "Pronouns",
        subtopics: ["Independent pronouns", "Subject pronouns with the verb", "Object pronouns", "Possessive pronouns"],
        objectives: ["List the independent pronouns", "Use the subject pronouns of the completed tense", "Use object pronouns after verbs", "Attach possessive endings to masculine and feminine nouns"],
        lesson: {
          title: "Wakilin suna",
          summary: "Use Hausa pronouns in place of nouns.",
          minutes: 40,
          notes: `## What is a pronoun?
A **pronoun** (**wakilin suna** — "representative of the noun") is used **in place of a noun**.
> **Musa** ya zo. → **Shi** ne ya zo. / **Ya** zo. — *Musa came. → He came.*

Hausa pronouns distinguish **masculine and feminine** in the **second and third person singular**.

## Independent pronouns
Used alone, for emphasis, and after **da** (and, with):
| | Singular | Plural |
|---|---|---|
| 1st | **ni** — I | **mu** — we |
| 2nd masc. | **kai** — you | **ku** — you |
| 2nd fem. | **ke** — you | **ku** |
| 3rd masc. | **shi** — he, it | **su** — they |
| 3rd fem. | **ita** — she, it | **su** |

- **Ni ne.** — It is I.
- **Kai da ni** — you and I
- **Ita ce malama.** — She is the teacher.

## Subject pronouns with the verb (completed action)
In Hausa, **a short pronoun always stands before the verb**, even when there is a noun subject. It shows **person and time** together.
| | Singular | Plural |
|---|---|---|
| 1st | **na** tafi — I went | **mun** tafi — we went |
| 2nd masc. | **ka** tafi — you went | **kun** tafi — you went |
| 2nd fem. | **kin** tafi | **kun** tafi |
| 3rd masc. | **ya** tafi — he went | **sun** tafi — they went |
| 3rd fem. | **ta** tafi — she went | **sun** tafi |
| impersonal | **an** tafi — "one went" / people went | |

- **Audu ya tafi.** — Audu went. (literally "Audu, he went")
- **Binta ta tafi.** — Binta went.
- **Yara sun tafi.** — The children went.

## Object pronouns
| | Singular | Plural |
|---|---|---|
| 1st | **ni** — me | **mu** — us |
| 2nd | **ka** (m.) / **ki** (f.) — you | **ku** — you |
| 3rd | **shi** — him / **ta** — her | **su** — them |

- **Ya gan ni.** — He saw me.
- **Na gan su.** — I saw them.
- **Ta kira shi.** — She called him.

## Possessive pronouns
Possessive endings are **joined to the noun**. The linking letter is **-n-** after a **masculine** or plural noun and **-r-** after a **feminine** noun; "my" is **-na** (masc.) or **-ta** (fem.).
| | after **littafi** (m.) | after **mota** (f.) |
|---|---|---|
| my | **littafina** | **motata** |
| your (m.) | **littafinka** | **motarka** |
| your (f.) | **littafinki** | **motarki** |
| his | **littafinsa** | **motarsa** |
| her | **littafinta** | **motarta** |
| our | **littafinmu** | **motarmu** |
| your (pl.) | **littafinku** | **motarku** |
| their | **littafinsu** | **motarsu** |

- **gidanmu** — our house
- **sunana** — my name
- **mahaifiyarsa** — his mother

## "Mine, yours…"
**nawa / tawa** (mine), **naka / taka** (yours), **nasa / tasa** (his), **namu / tamu** (ours): **Wannan littafi nawa ne.** — This book is mine.

## Respect
A senior person may be addressed in the **plural (ku)** as a mark of respect, or by title: **Malam**, **Alhaji**, **Ranka ya daɗe**.`,
          examples: `**Example 1.** Replace the noun with a pronoun: **Binta ta tafi kasuwa.** *Answer:* **Ta tafi kasuwa** (She went to the market).

**Example 2.** Say "our house" and "my book". *Answer:* **gidanmu** and **littafina**.

**Example 3.** Which pronoun stands before the verb for a feminine subject? *Answer:* **ta** — as in *Binta ta tafi*.`,
        },
        questions: [
          ["E", "The Hausa independent pronoun for 'I' is", "ni", "kai", "shi", "mu", "As in 'Ni ne' — It is I."],
          ["E", "'Su' means", "they", "we", "you", "I", "It is the third person plural."],
          ["E", "The Hausa pronoun for 'we' is", "mu", "ku", "su", "ke", "As in 'Mun tafi' — We went."],
          ["M", "'Ita' means", "she", "he", "they", "you (to a male)", "It is the feminine third person singular."],
          ["M", "'Littafina' means", "my book", "your book", "our book", "their book", "The ending -na means 'my' after a masculine noun."],
          ["M", "'Sun tafi' means", "They went", "We went", "He went", "You went", "Sun is the third person plural pronoun for completed action."],
          ["M", "The pronoun used to address one female is", "ke", "kai", "shi", "su", "Kai is used to a male."],
          ["H", "'Gidanmu' means", "our house", "my house", "their house", "your house", "The ending -mu means 'our'."],
          ["H", "The correct form for 'my car' (mota is feminine) is", "motata", "motana", "motarka", "motansa", "Feminine nouns take -ta for 'my'."],
          ["H", "In 'Audu ya tafi', the word 'ya' is", "a subject pronoun that must stand before the verb", "an object pronoun", "a possessive ending", "a conjunction", "It shows person and time together."],
        ],
      },
      {
        week: 4,
        title: "Hausa food",
        subtopics: ["Staple foods", "Soups and drinks", "Snacks and meat dishes", "Talking about food"],
        objectives: ["Name common Hausa foods", "Name soups and drinks", "Name snacks and meat dishes", "Make sentences about eating and drinking"],
        lesson: {
          title: "Abincin Hausawa",
          summary: "Name Hausa foods and talk about eating.",
          minutes: 40,
          notes: `## Food
**Abinci** means food; **ci** means eat; **sha** means drink; **dafa** means cook.

## Grains and staples
| Hausa | English |
|---|---|
| **gero** | millet |
| **dawa** | guinea corn |
| **masara** | maize |
| **shinkafa** | rice |
| **alkama** | wheat |
| **wake** | beans |
| **gyaɗa** | groundnut |
| **doya** | yam |
| **rogo** | cassava |
| **dankali** | potato |

## Main dishes
| Hausa | What it is |
|---|---|
| **tuwo** | a thick paste of cooked flour — **tuwon dawa**, **tuwon masara**, **tuwon shinkafa** — eaten with soup |
| **miya** | soup or stew |
| **fura da nono** | balls of cooked millet stirred into soured milk |
| **kunu** | a thin gruel of millet or guinea corn |
| **koko** | pap |
| **waina / masa** | soft fried cakes of rice or millet |
| **ɗan wake** | boiled bean-flour dumplings |
| **dambu** | steamed, crumbled grain with vegetables |
| **shinkafa da wake** | rice and beans |

## Soups (miya)
| Hausa | English |
|---|---|
| **miyar kuka** | soup of dried baobab leaves |
| **miyar taushe** | pumpkin soup |
| **miyar kuɓewa** | okra soup |
| **miyar ganye** | vegetable soup |
| **miyar gyaɗa** | groundnut soup |

## Meat and snacks
- **nama** — meat; **kifi** — fish; **kaza** — chicken; **ƙwai** — egg
- **suya / tsire** — spiced meat grilled on sticks
- **kilishi** — thin sheets of dried, spiced meat
- **balangu** — roasted meat
- **ƙosai** — fried bean cake
- **kuli-kuli** — crisp groundnut cake
- **gurasa** — flat bread of Kano
- **dabino** — dates; **rake** — sugar cane; **goro** — kola nut

## Drinks and seasoning
- **ruwa** — water; **nono** — soured milk; **madara** — fresh milk
- **zoɓo** — a red drink made from hibiscus; **kunun zaki** — sweet millet drink
- **gishiri** (salt), **barkono / attaruhu** (pepper), **albasa** (onion), **mai** (oil), **man shanu** (butter), **daddawa** (locust-bean seasoning)

## Talking about food
- **Ina jin yunwa.** — I am hungry.
- **Ina jin ƙishirwa.** — I am thirsty.
- **Ina so in ci tuwo.** — I want to eat tuwo.
- **Na ƙoshi.** — I am full.
- **Abincin yana da daɗi.** — The food is delicious.
- **Me ka ci da safe?** — What did you eat in the morning?
- **Zo mu ci abinci.** — Come and let us eat.

## Table manners
Wash your hands; say **"Bismillah"** before eating; eat with the **right hand**; do not talk with food in the mouth; let elders begin; say **"Alhamdulillahi"** and **"Na gode"** afterwards.`,
          examples: `**Example 1.** What is **tuwo**, and what is it eaten with? *Answer:* A **thick paste of cooked flour**, eaten with **miya** (soup).

**Example 2.** Say "I am hungry" in Hausa. *Answer:* **Ina jin yunwa**.

**Example 3.** What is **fura da nono**? *Answer:* **Millet balls stirred into soured milk**.`,
        },
        questions: [
          ["E", "The Hausa word for 'food' is", "abinci", "ruwa", "miya", "gishiri", "Cin abinci means eating."],
          ["E", "'Shinkafa' means", "rice", "beans", "maize", "millet", "Tuwon shinkafa is made from it."],
          ["E", "The Hausa word for 'soup' is", "miya", "tuwo", "nama", "kunu", "As in miyar kuka."],
          ["M", "'Tuwo' is", "a thick paste of cooked flour eaten with soup", "grilled meat on sticks", "a sweet drink", "fried bean cake", "It may be made from guinea corn, maize or rice."],
          ["M", "'Ina jin yunwa' means", "I am hungry", "I am thirsty", "I am full", "I am tired", "Yunwa means hunger."],
          ["M", "The Hausa word for 'meat' is", "nama", "kifi", "ƙwai", "wake", "Kifi is fish. Answer: nama."],
          ["M", "Spiced meat grilled on sticks is called", "suya", "kunu", "waina", "koko", "It is also called tsire."],
          ["H", "'Miyar kuka' is soup made from", "dried baobab leaves", "pumpkin", "okra", "groundnut", "Kuka is the baobab tree."],
          ["H", "Thin sheets of dried, spiced meat are called", "kilishi", "ƙosai", "gurasa", "dambu", "It keeps for a long time."],
          ["H", "'Na ƙoshi' means", "I am full", "I am hungry", "I have cooked", "I want water", "It is said after eating enough."],
        ],
      },
      {
        week: 5,
        title: "Folktales and riddles",
        subtopics: ["Folktales", "Gizo the trickster", "Riddles", "Lessons from tales"],
        objectives: ["Explain what tatsuniya is and how it is told", "Describe the role of Gizo and other animal characters", "Explain what riddles are and how they are posed", "State moral lessons taught by folktales"],
        lesson: {
          title: "Tatsuniya da kacici-kacici",
          summary: "Enjoy Hausa folktales and riddles and learn their lessons.",
          minutes: 40,
          notes: `## Evening stories
At night, after the day's work, children gathered round a grandmother or an older woman to hear **tatsuniya** (folktales) and to pose riddles. Tales were **not told in the daytime**.

## Tatsuniya — folktales
A **tatsuniya** (plural **tatsuniyoyi**) is an **invented story** told to entertain and to teach. People, animals and spirits take part; animals speak and behave like human beings.

### How it is told
> Teller: **Ga ta nan, ga ta nanku!** (Here it is, here it is for you!)
> Listeners: **Ta zo, mu ji ta!** (Let it come, let us hear it!)
The teller acts the parts and sings the **songs** in the tale, with the listeners joining in. The tale ends with a set formula:
> **Ƙurunƙus kan ɗan ɓera!** ("Off with the little rat's head!" — that is the end.)

### Characters
| Character | Nature |
|---|---|
| **Gizo** — the spider | the **trickster**: cunning, greedy, lazy; he speaks with a lisp |
| **Ƙoƙi** — the praying mantis | Gizo's wife, often wiser than he is |
| **Kura** — the hyena | greedy and foolish; easily tricked |
| **Zomo** — the hare | small and clever |
| **Dila** — the jackal | crafty; "the learned one" |
| **Zaki** — the lion | king of the animals |
| **Bunsuru** — the he-goat | bold |
| also | a king (**sarki**), an orphan girl, a wicked stepmother, spirits (**dodo**) |

### A short tale (retold)
In a famine, Gizo found a tree that gave food when its name was spoken. He ate secretly and gave his family nothing. Ƙoƙi followed him, learnt the secret and fed the children. When Gizo found the tree bare, his greed was exposed and he was put to shame. **Lesson:** greed and selfishness end in disgrace.

## Kacici-kacici — riddles
A **riddle** is a short puzzle that tests wit.
### How it is posed
> Poser: **Kulun kulufita!**
> Listeners: **Gauta!**
> Poser: (gives the riddle)
### Examples (given in English)
- *My father's mat cannot be rolled up.* — the **sky** (or the road)
- *I went to the bush and it followed me; I came home and it followed me.* — my **shadow**
- *The little thing that seasons the king's soup.* — **salt**
- *A red one resting among white ones.* — the **tongue among the teeth**

(Answers vary from place to place; riddles are learnt by ear.)

## Other short forms
- **karin magana** — proverbs
- **gagara-gwari** — tongue-twisters
- **labari** — a story told as true; **almara** — a puzzling tale that ends with a question for the listeners to debate

## Lessons taught by folktales
- **do not be greedy** (*kwaɗayi mabuɗin wahala* — greed is the key to trouble)
- **tell the truth**
- **obey parents** and respect elders
- **be kind** — the patient orphan is rewarded and the wicked stepmother punished
- **use your wits**
- **work hard**; do not be lazy

## Importance
entertainment; moral training; teaching the language; preserving culture; explaining why things are as they are.`,
          examples: `**Example 1.** How does a Hausa folktale open? *Answer:* The teller says **"Ga ta nan, ga ta nanku!"** and the listeners answer **"Ta zo, mu ji ta!"**

**Example 2.** Who is the trickster in Hausa tales? *Answer:* **Gizo, the spider**.

**Example 3.** How is a riddle introduced? *Answer:* **"Kulun kulufita!"** — and the listeners reply **"Gauta!"**`,
        },
        questions: [
          ["E", "The Hausa term for 'folktale' is", "tatsuniya", "kacici-kacici", "karin magana", "waƙa", "It is an invented story with a lesson."],
          ["E", "The trickster in most Hausa folktales is", "Gizo, the spider", "Zaki, the lion", "Kura, the hyena", "Bunsuru, the he-goat", "He is cunning, greedy and lazy."],
          ["E", "The Hausa term for 'riddle' is", "kacici-kacici", "tatsuniya", "labari", "kirari", "It tests the listener's wit."],
          ["M", "When the storyteller says 'Ga ta nan, ga ta nanku!', the listeners answer", "Ta zo, mu ji ta!", "Gauta!", "Lafiya lau!", "Amin!", "It means 'Let it come, let us hear it'."],
          ["M", "A riddle in Hausa is introduced with the words", "Kulun kulufita!", "Ga ta nan!", "Ƙurunƙus!", "Sannu da zuwa!", "The listeners reply 'Gauta!'"],
          ["M", "In Hausa tales, the hyena (Kura) is usually shown as", "greedy and foolish", "wise and patient", "small and clever", "kind and generous", "It is easily tricked by others."],
          ["M", "Traditionally, tatsuniya were told", "at night", "at noon in the market", "during farm work", "at dawn before prayer", "Children gathered round an older woman after the day's work."],
          ["H", "The name of Gizo's wife in Hausa folktales is", "Ƙoƙi", "Daurama", "Kande", "Zomo", "She is the praying mantis and is often wiser than he."],
          ["H", "A Hausa folktale traditionally ends with the formula", "Ƙurunƙus kan ɗan ɓera", "Kulun kulufita", "Ta zo mu ji ta", "Salamu alaikum", "It signals that the tale is finished."],
          ["H", "A puzzling tale that ends with a question for the listeners to debate is called", "almara", "kirari", "take", "waƙa", "It trains reasoning and argument."],
        ],
      },
      {
        week: 6,
        title: "Animals and birds",
        subtopics: ["Domestic animals", "Wild animals", "Birds and other creatures", "Sentences about animals"],
        objectives: ["Name domestic animals in Hausa", "Name wild animals in Hausa", "Name common birds and other creatures", "Make simple sentences about animals"],
        lesson: {
          title: "Dabbobi da tsuntsaye",
          summary: "Name animals and birds in Hausa.",
          minutes: 40,
          notes: `## Animals
**Dabba** (plural **dabbobi**) means animal. **Dabbobin gida** are domestic animals; **namun daji** are wild animals ("meat of the bush"). **Tsuntsu** (plural **tsuntsaye**) means bird.

## Domestic animals (dabbobin gida)
| Hausa | English |
|---|---|
| **kare** | dog |
| **kyanwa / mage** | cat |
| **akuya** | goat |
| **tunkiya** | sheep (**rago** — ram) |
| **saniya** | cow (**sa** — bull; **shanu** — cattle) |
| **doki** | horse |
| **jaki** | donkey |
| **raƙumi** | camel |
| **kaza** | hen (**zakara** — cock; **kaji** — fowls) |
| **agwagwa** | duck |
| **talotalo** | turkey |
| **zabo** | guinea fowl |

## Wild animals (namun daji)
| Hausa | English |
|---|---|
| **zaki** | lion |
| **damisa** | leopard |
| **giwa** | elephant |
| **biri** | monkey |
| **kura** | hyena |
| **barewa** | gazelle |
| **raƙumin dawa** | giraffe ("camel of the bush") |
| **dila** | jackal |
| **zomo** | hare |
| **maciji** | snake |
| **kada** | crocodile |
| **kunkuru** | tortoise |
| **ɓera** | rat |
| **kurege** | ground squirrel |

## Birds (tsuntsaye)
| Hausa | English |
|---|---|
| **shaho** | hawk |
| **mujiya** | owl |
| **ungulu** | vulture |
| **aku** | parrot |
| **tattabara** | pigeon |
| **hankaka** | crow |
| **jimina** | ostrich |

## Other creatures
**kifi** (fish), **kwaɗo** (frog), **ƙadangare** (lizard), **gizo-gizo** (spider), **zuma** (bee; honey), **sauro** (mosquito), **ƙuda** (fly), **tururuwa** (ant), **fara** (locust), **kunama** (scorpion).

## Sentences
Remember gender: **yana** for masculine, **tana** for feminine.
- **Kare yana haushi.** — The dog is barking.
- **Tsuntsu yana tashi.** — The bird is flying.
- **Kifi yana iyo a ruwa.** — The fish is swimming in water.
- **Giwa tana da girma.** — The elephant is big.
- **Kyanwa tana kama ɓera.** — The cat catches rats.
- **Saniya tana cin ciyawa.** — The cow eats grass.

## Uses of animals
- **food** — meat, milk (**nono**), eggs
- **transport and farm work** — horse, donkey, camel, ox
- **hides and skins** — leather work is a famous Hausa craft
- **ceremony** — the **ram** at Sallah; **horses** in the Durbar
- **herding** (**kiwo**) is the life of the Fulani, neighbours of the Hausa

## Animals in sayings
- the **lion (zaki)** for power — a king may be praised as "zaki"
- the **hyena (kura)** for greed
- the **hare (zomo)** and **spider (gizo)** for cunning
- the **horse (doki)** for rank and honour`,
          examples: `**Example 1.** What is **kare**, and is it a domestic or wild animal? *Answer:* **Dog** — a domestic animal (*dabbar gida*).

**Example 2.** Give the Hausa words for elephant and lion. *Answer:* **giwa** and **zaki**.

**Example 3.** Translate: **Tsuntsu yana tashi.** *Answer:* **The bird is flying**.`,
        },
        questions: [
          ["E", "The Hausa word for 'dog' is", "kare", "kyanwa", "akuya", "doki", "It guards the home."],
          ["E", "'Tsuntsu' means", "bird", "fish", "snake", "rat", "Its plural is tsuntsaye."],
          ["E", "The Hausa word for 'goat' is", "akuya", "tunkiya", "saniya", "jaki", "It is a common domestic animal."],
          ["M", "'Giwa' is", "an elephant", "a lion", "a monkey", "a leopard", "It is the largest land animal."],
          ["M", "The Hausa word for 'horse' is", "doki", "jaki", "raƙumi", "rago", "It is ridden in the Durbar."],
          ["M", "'Kaza' means", "hen", "duck", "pigeon", "turkey", "The cock is zakara."],
          ["M", "'Kifi yana iyo a ruwa' means", "The fish is swimming in water", "The bird is flying in the sky", "The dog is barking at home", "The cow is eating grass", "Kifi is fish and ruwa is water."],
          ["H", "The Hausa word for 'lion' is", "zaki", "damisa", "kura", "dila", "Damisa is the leopard."],
          ["H", "Wild animals are called in Hausa", "namun daji", "dabbobin gida", "tsuntsaye", "kifaye", "Literally, 'meat of the bush'."],
          ["H", "'Raƙumin dawa', literally 'camel of the bush', is the", "giraffe", "ostrich", "gazelle", "hyena", "Its long neck suggests a camel."],
        ],
      },
    ],
  },
];
