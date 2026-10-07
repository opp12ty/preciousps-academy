import type { TermPlan } from "../types";

/** JSS2 Hausa — original Precious PS content following the national Basic Education structure. Explanations are given in English with Hausa terms and examples. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Numbers 20 to 1,000",
        subtopics: ["The tens", "Adding units to a ten", "Hundreds and thousands", "Counting back with 'babu'"],
        objectives: ["Count in tens from 20 to 100", "Form numbers by adding units with 'da'", "Say hundreds and thousands", "Explain the 'babu' way of expressing numbers just below a ten"],
        lesson: {
          title: "Ƙidaya: 20 – 1,000",
          summary: "Count from twenty to one thousand in Hausa.",
          minutes: 40,
          notes: `## The tens
The tens from 20 to 90 are **borrowed from Arabic**:
| Figure | Hausa |
|---|---|
| 20 | **ashirin** |
| 30 | **talatin** |
| 40 | **arba'in** |
| 50 | **hamsin** |
| 60 | **sittin** |
| 70 | **saba'in** |
| 80 | **tamanin** |
| 90 | **casa'in** |
| 100 | **ɗari** |

## Adding units
After 20, join the unit with **da** ("and"):
| Figure | Hausa |
|---|---|
| 21 | **ashirin da ɗaya** |
| 25 | **ashirin da biyar** |
| 36 | **talatin da shida** |
| 48 | **arba'in da takwas** |
| 99 | **casa'in da tara** |

Compare the teens, which use **sha**: **goma sha biyar** (15) but **ashirin da biyar** (25).

## Hundreds and thousands
| Figure | Hausa |
|---|---|
| 100 | **ɗari** |
| 101 | **ɗari da ɗaya** |
| 150 | **ɗari da hamsin** |
| 200 | **ɗari biyu** |
| 500 | **ɗari biyar** |
| 1,000 | **dubu** |
| 2,000 | **dubu biyu** |
| 10,000 | **dubu goma** |
| 100,000 | **dubu ɗari** |
| 1,000,000 | **miliyan** |

- **365** — ɗari uku da sittin da biyar
- **1,960** — dubu ɗaya da ɗari tara da sittin

## The pattern
The **multiplier follows the base**: ɗari **biyu** (200), dubu **uku** (3,000); smaller parts are joined with **da**.

## Counting back with "babu"
The two numbers just below a ten may be expressed as the **ten "lacking" one or two**. **Babu** means "there is not / without".
| Figure | Usual form | "Babu" form |
|---|---|---|
| 18 | goma sha takwas | **ashirin biyu babu** |
| 19 | goma sha tara | **ashirin ɗaya babu** |
| 28 | ashirin da takwas | **talatin biyu babu** |
| 29 | ashirin da tara | **talatin ɗaya babu** |
| 99 | casa'in da tara | **ɗari ɗaya babu** |

## Counting objects
The number follows the noun: **mutane ashirin** (twenty people); **littattafai talatin** (thirty books); **naira ɗari biyar** (five hundred naira).

## Older units of money
Elders still speak of **kwabo** (kobo), **sule** (shilling) and **fam** (pound); **naira** and **kobo** are today's currency.

## Practice
Count in tens: **goma, ashirin, talatin, arba'in, hamsin, sittin, saba'in, tamanin, casa'in, ɗari**.`,
          examples: `**Example 1.** What is 40 in Hausa? *Answer:* **arba'in**.

**Example 2.** Say 25 and 150 in Hausa. *Answer:* **ashirin da biyar** and **ɗari da hamsin**.

**Example 3.** Explain **talatin ɗaya babu**. *Answer:* **29** — "thirty, one lacking".`,
        },
        questions: [
          ["E", "The Hausa word for 30 is", "talatin", "ashirin", "arba'in", "hamsin", "It comes after ashirin."],
          ["E", "'Ɗari' is the number", "100", "10", "1,000", "20", "Ɗari biyu is two hundred."],
          ["E", "The Hausa word for 1,000 is", "dubu", "miliyan", "ɗari", "goma", "Dubu biyu is two thousand."],
          ["M", "'Hamsin' is the number", "50", "15", "500", "5", "It is the fifth ten."],
          ["M", "The Hausa for 21 is", "ashirin da ɗaya", "ashirin sha ɗaya", "ɗaya da ashirin", "goma sha ɗaya biyu", "After twenty, units are joined with 'da'."],
          ["M", "'Ɗari biyu' is the number", "200", "102", "120", "2,000", "The multiplier follows the base."],
          ["M", "'Saba'in' is the number", "70", "17", "7", "700", "It is the seventh ten."],
          ["H", "'Talatin ɗaya babu' is the number", "29", "31", "39", "21", "It means 'thirty, one lacking'."],
          ["H", "The Hausa for 150 is", "ɗari da hamsin", "ɗari hamsin", "hamsin ɗari", "ɗari biyar da goma", "A hundred and fifty."],
          ["H", "The tens from 20 to 90 in Hausa were borrowed from", "Arabic", "English", "Yoruba", "French", "Compare ashirin, talatin and arba'in."],
        ],
      },
      {
        week: 2,
        title: "Verbs",
        subtopics: ["What a verb is", "Common verbs", "Commands", "Verbal nouns and changes before an object"],
        objectives: ["Define a verb", "Use common Hausa verbs", "Give commands to a male, a female and a group", "Recognise verbal nouns and the change of some verbs before an object"],
        lesson: {
          title: "Aikatau",
          summary: "Identify and use Hausa verbs.",
          minutes: 40,
          notes: `## What is a verb?
A **verb** (**aikatau** — from **aiki**, "work") tells **what the subject does** or the **state** it is in.

## Common verbs
| Hausa | English | Hausa | English |
|---|---|---|---|
| **tafi** | go | **zo** | come |
| **je** | go (to a place) | **dawo** | return |
| **ci** | eat | **sha** | drink |
| **gani** | see | **ji** | hear; feel |
| **faɗa / ce** | say | **karanta** | read |
| **rubuta** | write | **saya** | buy |
| **sayar** | sell | **yi** | do; make |
| **so** | want; love | **sani** | know |
| **gudu** | run | **zauna** | sit; live |
| **tashi** | get up; fly | **kwanta** | lie down |
| **dafa** | cook | **wanke** | wash |
| **ɗauka** | take, carry | **kawo** | bring |
| **ba** | give | **buɗe / rufe** | open / close |

## A pronoun always stands before the verb
The verb itself does **not change for person**. A short **pronoun** before it shows who did the action and when:
- **Na tafi.** — I went. **Ya tafi.** — He went. **Sun tafi.** — They went.
Even with a noun subject: **Audu ya tafi.**

## Commands
The bare verb gives an order to **one male**. For a **female** add **ki**, and for **several people** add **ku**.
| To a male | To a female | To many | English |
|---|---|---|---|
| **Zo!** | **Ki zo!** | **Ku zo!** | Come! |
| **Tafi!** | **Ki tafi!** | **Ku tafi!** | Go! |
| **Zauna!** | **Ki zauna!** | **Ku zauna!** | Sit down! |
| **Tashi!** | **Ki tashi!** | **Ku tashi!** | Get up! |
| **Ci abinci!** | **Ki ci abinci!** | **Ku ci abinci!** | Eat! |
**Ba ni ruwa.** — Give me water. **Kawo littafin.** — Bring the book.

## Verbal nouns
Each verb has a **verbal noun** (**sunan aiki**) — the name of the action — used after **ina, kana, yana…** to show an action in progress.
| Verb | Verbal noun | Example |
|---|---|---|
| **tafi** | **tafiya** | **Ina tafiya.** — I am going. |
| **zo** | **zuwa** | **Yana zuwa.** — He is coming. |
| **karanta** | **karatu** | **Tana karatu.** — She is reading. |
| **rubuta** | **rubutu** | **Suna rubutu.** — They are writing. |
| **gudu** | **gudu** | **Yana gudu.** — He is running. |
| **dafa** | **dafawa** | **Tana dafa abinci.** — She is cooking food. |
| **ci** | **ci** | **Muna cin abinci.** — We are eating. |
| **sha** | **sha** | **Ina shan ruwa.** — I am drinking water. |

## Verbs that change before an object
Some verbs ending in **-a** change their last vowel:
| Form | Example | Meaning |
|---|---|---|
| no object: **-a** | **Na saya.** | I bought (it). |
| before a noun: **-i** | **Na sayi littafi.** | I bought a book. |
| before a pronoun: **-e** | **Na saye shi.** | I bought it. |
Likewise **gani** (see): **Na gani** / **Na ga Audu** / **Na gan shi**.

## "Yi" + noun
Many actions are expressed with **yi** ("do") and a noun:
- **yi aiki** — to work
- **yi magana** — to speak
- **yi wasa** — to play
- **yi barci** — to sleep
- **yi wanka** — to bathe
- **yi dariya** — to laugh

## Verbs of feeling with "ji"
- **Ina jin yunwa.** — I feel hunger.
- **Ina jin daɗi.** — I feel pleasure.

## Finding the verb
> Binta ta **sayi** riga a kasuwa. — Binta **bought** a gown at the market.`,
          examples: `**Example 1.** What is **aikatau**? *Answer:* A **verb** — a word showing an action or a state.

**Example 2.** Give the command "Come!" to a male, a female and a group. *Answer:* **Zo! — Ki zo! — Ku zo!**

**Example 3.** Why do we say "Na sayi littafi" but "Na saya"? *Answer:* The verb **saya** changes to **sayi** **before a noun object**.`,
        },
        questions: [
          ["E", "The Hausa term for 'verb' is", "aikatau", "suna", "sifa", "wakilin suna", "It comes from aiki — work."],
          ["E", "The Hausa verb meaning 'come' is", "zo", "tafi", "ci", "sha", "Tafi means 'go'."],
          ["E", "The Hausa verb 'ci' means", "eat", "drink", "sleep", "write", "As in 'ci abinci'."],
          ["M", "The command 'Zauna!' is addressed to", "one male", "one female", "several people", "an emir only", "For a female one says 'Ki zauna!'"],
          ["M", "The Hausa verb meaning 'buy' is", "saya", "sayar", "karanta", "rubuta", "Sayar means 'sell'."],
          ["M", "In 'Binta ta sayi riga', the verb is", "sayi", "Binta", "ta", "riga", "It tells what Binta did."],
          ["M", "'Yi wasa' means", "to play", "to work", "to sleep", "to speak", "Yi with a noun expresses many actions."],
          ["H", "The verbal noun of 'karanta' (read) is", "karatu", "karantawa kaɗai", "makaranta", "karance", "As in 'Tana karatu' — She is reading."],
          ["H", "The command 'Come!' addressed to several people is", "Ku zo!", "Ki zo!", "Zo!", "Sun zo!", "Ku marks the plural command."],
          ["H", "In 'Na saye shi' (I bought it), the verb ends in -e because it comes before", "a pronoun object", "a noun object", "no object", "a question word", "Before a noun it would be 'sayi'."],
        ],
      },
      {
        week: 3,
        title: "The simple sentence",
        subtopics: ["Word order", "Sentences with ne and ce", "Sentences of place and state", "Having and existing"],
        objectives: ["State the normal word order of a Hausa sentence", "Make identifying sentences with ne and ce", "Make sentences of place with yana and tana", "Express 'have' with da and 'there is' with akwai"],
        lesson: {
          title: "Sassauƙar jimla",
          summary: "Build simple Hausa sentences with the correct word order.",
          minutes: 40,
          notes: `## The sentence
A **sentence** (**jimla**) is a group of words that makes complete sense. A simple sentence (**sassauƙar jimla**) has **one verb** or one statement.

## Word order: Subject – (pronoun) – Verb – Object
| Subject | Pronoun | Verb | Object | Meaning |
|---|---|---|---|---|
| **Audu** | **ya** | **ci** | **tuwo** | Audu ate tuwo. |
| **Binta** | **ta** | **sayi** | **riga** | Binta bought a gown. |
| **Yara** | **sun** | **rubuta** | **wasiƙa** | The children wrote a letter. |
| — | **Na** | **ga** | **kare** | I saw a dog. |
The short pronoun (**ya, ta, sun**) agrees with the subject in **gender and number**.

Some sentences have **no object**:
- **Yaron ya faɗi.** — The boy fell.
- **Ruwa ya zo.** — Rain has come.

## Sentences with "ne" and "ce" — identity
**ne** (masculine and plural) and **ce** (feminine) mean "is / are". They come at the **end**.
- **Audu malami ne.** — Audu is a teacher.
- **Binta ɗaliba ce.** — Binta is a student.
- **Wannan littafi ne.** — This is a book.
- **Su manoma ne.** — They are farmers.
- **Ni ne.** — It is I.

## Sentences of place and state: yana / tana / suna
- **Littafi yana kan tebur.** — The book is on the table.
- **Baba yana gida.** — Father is at home.
- **Mama tana kasuwa.** — Mother is at the market.
- **Yara suna makaranta.** — The children are at school.
- **Ina nan.** — I am here.

## "To have": da
"To have" is expressed as "to be **with**":
- **Ina da littafi.** — I have a book.
- **Audu yana da mota.** — Audu has a car.
- **Suna da kuɗi.** — They have money.
Qualities are often expressed in the same way: **Yana da kirki.** — He is kind ("he has kindness").

## "There is": akwai
- **Akwai ruwa.** — There is water.
- **Akwai mutane da yawa.** — There are many people.

## Describing words
A describing word may come **before** the noun with a linker, or **after** it:
- **babban gida** / **gida babba** — a big house
- **sabuwar riga** — a new gown
- **yaro mai hankali** — a sensible boy
Numbers and possessives **follow**: **yara uku**, **littafina**.

## Going to a place
- **Na tafi kasuwa.** — I went to market.
- **Zan je Kano.** — I will go to Kano.
**a** means "at / in": **a gida**, **a Kano**.

## Emphasis
Bring the stressed word to the front, followed by **ne / ce**:
- **Audu ya sayi littafi.** — Audu bought a book.
- **Littafi ne Audu ya saya.** — It was *a book* that Audu bought.
- **Audu ne ya sayi littafi.** — It was *Audu* who bought a book.

## Building practice
> **Musa ya sayi burodi a kasuwa.** — Musa bought bread at the market.`,
          examples: `**Example 1.** Identify the parts of "Binta ta sayi riga". *Answer:* **Binta** (subject), **ta** (pronoun), **sayi** (verb), **riga** (object).

**Example 2.** Translate "Audu is a teacher" and "Binta is a student". *Answer:* **Audu malami ne** and **Binta ɗaliba ce**.

**Example 3.** Translate "I have a book." *Answer:* **Ina da littafi** — literally "I am with a book".`,
        },
        questions: [
          ["E", "The Hausa term for 'sentence' is", "jimla", "kalma", "gaɓa", "harafi", "It is a group of words that makes complete sense."],
          ["E", "In 'Audu ya ci tuwo', the subject is", "Audu", "ci", "tuwo", "none", "He is the doer of the action."],
          ["E", "'Wannan littafi ne' means", "This is a book", "Where is the book?", "I have a book", "The book is big", "Ne identifies a masculine noun."],
          ["M", "'Baba yana gida' means", "Father is at home", "Father has a house", "Father built a house", "Father left home", "Yana shows where he is."],
          ["M", "'Ina da littafi' means", "I have a book", "I am a book", "I read a book", "I am in a book", "Literally, 'I am with a book'."],
          ["M", "The correct sentence for 'Binta is a student' is", "Binta ɗaliba ce", "Binta ɗaliba ne", "Binta ɗalibi ce", "Binta ce ɗalibi ne", "A feminine noun takes 'ce'."],
          ["M", "'Akwai ruwa' means", "There is water", "Bring water", "The water is cold", "He drank water", "Akwai means 'there is'."],
          ["H", "In 'Yara sun rubuta wasiƙa', the pronoun 'sun' agrees with the subject in", "number — it is plural", "gender — it is feminine", "tense only", "nothing at all", "Yara is plural, so the plural pronoun is used."],
          ["H", "'Littafi ne Audu ya saya' places emphasis on", "the book", "Audu", "the act of buying", "the market", "The stressed word is brought to the front with ne."],
          ["H", "'Yana da kirki' is best translated as", "He is kind", "He has a key", "He is at home", "He is coming", "Qualities are expressed as things one 'has'."],
        ],
      },
      {
        week: 4,
        title: "Showing time: tense and aspect",
        subtopics: ["Completed action", "Action in progress", "Future action", "Habitual action"],
        objectives: ["Express completed action with na, ka, ya, ta, mun, kun, sun", "Express action in progress with ina, kana, yana", "Express the future with zan, za ka, zai", "Express habit with nakan, yakan"],
        lesson: {
          title: "Lokutan aikatau",
          summary: "Show when an action happens using the Hausa pre-verb pronouns.",
          minutes: 40,
          notes: `## How Hausa shows time
The verb stays the same. The **short pronoun before the verb changes its form** to show the time or state of the action.

## 1. Completed action (past)
| | Singular | Plural |
|---|---|---|
| 1st | **na** tafi — I went | **mun** tafi |
| 2nd m. | **ka** tafi | **kun** tafi |
| 2nd f. | **kin** tafi | **kun** tafi |
| 3rd m. | **ya** tafi | **sun** tafi |
| 3rd f. | **ta** tafi | **sun** tafi |
- **Na ci abinci.** — I ate / I have eaten.
- **Audu ya zo jiya.** — Audu came yesterday.
- **An gama.** — It has been finished. (**an** = "one / people")

## 2. Action in progress (continuous)
The pronoun takes **-na** and is followed by a **verbal noun**:
| | Singular | Plural |
|---|---|---|
| 1st | **ina** tafiya — I am going | **muna** tafiya |
| 2nd m. | **kana** tafiya | **kuna** tafiya |
| 2nd f. | **kina** tafiya | **kuna** tafiya |
| 3rd m. | **yana** tafiya | **suna** tafiya |
| 3rd f. | **tana** tafiya | **suna** tafiya |
- **Ina cin abinci.** — I am eating.
- **Binta tana karatu.** — Binta is reading.
- **Ana ruwa.** — It is raining. (**ana** = impersonal)

## 3. Future
**za** + pronoun (with short forms for "I" and "he"):
| | Singular | Plural |
|---|---|---|
| 1st | **zan** tafi — I will go | **za mu** tafi |
| 2nd m. | **za ka** tafi | **za ku** tafi |
| 2nd f. | **za ki** tafi | **za ku** tafi |
| 3rd m. | **zai** tafi | **za su** tafi |
| 3rd f. | **za ta** tafi | **za su** tafi |
- **Zan zo gobe.** — I will come tomorrow.
- **Audu zai sayi mota.** — Audu will buy a car.
- **Za a yi biki.** — There will be a celebration.

## 4. Habitual
The pronoun takes **-kan**:
**nakan, kakan, kikan, yakan, takan, mukan, kukan, sukan**
- **Nakan tashi da wuri.** — I usually get up early.
- **Yakan je masallaci kullum.** — He goes to the mosque every day.

## 5. Wishes and "should" (subjunctive)
The plain short pronoun: **in, ka, ki, ya, ta, mu, ku, su**
- **Ina so in tafi.** — I want to go.
- **Ya zo!** — Let him come!
- **Allah ya ba mu lafiya.** — May God give us health.

## Summary
| Form | "he" | Example | Meaning |
|---|---|---|---|
| completed | **ya** | Ya zo | He came |
| continuous | **yana** | Yana zuwa | He is coming |
| future | **zai** | Zai zo | He will come |
| habitual | **yakan** | Yakan zo | He usually comes |

## Time words
| Hausa | English |
|---|---|
| **jiya** | yesterday |
| **yau** | today |
| **gobe** | tomorrow |
| **yanzu** | now |
| **ba da daɗewa ba** | soon |
| **da** | formerly |
| **bara** | last year |
| **baɗi** | next year |
| **mako mai zuwa** | next week |
| **kullum** | every day, always |
- **Na gan shi jiya.** — I saw him yesterday.
- **Zan gan shi gobe.** — I will see him tomorrow.

## Order in the sentence
**Subject + pronoun (showing time) + verb + object + time word**
> **Binta tana karanta littafi yanzu.** — Binta is reading a book now.`,
          examples: `**Example 1.** Change to the continuous: **Na ci abinci.** *Answer:* **Ina cin abinci** (I am eating).

**Example 2.** Translate "He will come tomorrow." *Answer:* **Zai zo gobe**.

**Example 3.** What does **yakan** show in "Yakan je masallaci kullum"? *Answer:* A **habitual** action — "He goes to the mosque every day".`,
        },
        questions: [
          ["E", "In Hausa, the time of an action is shown by", "the form of the pronoun before the verb", "changing the ending of the verb", "doubling the object", "the gender of the noun", "The verb itself stays the same."],
          ["E", "'Ina cin abinci' means", "I am eating", "I have eaten", "I will eat", "I usually eat", "Ina marks an action in progress."],
          ["E", "'Gobe' means", "tomorrow", "yesterday", "now", "last year", "It points to the future."],
          ["M", "'Zan zo gobe' means", "I will come tomorrow", "I came yesterday", "I am coming now", "I usually come", "Zan marks the future for 'I'."],
          ["M", "'Mun ci abinci' is best translated as", "We ate", "We are eating", "We will eat", "We usually eat", "Mun marks completed action for 'we'."],
          ["M", "The future form for 'he' is", "zai", "yana", "ya", "yakan", "As in 'Zai zo' — He will come."],
          ["M", "'Binta tana karatu' means", "Binta is reading", "Binta has read", "Binta will read", "Binta read yesterday", "Tana is the feminine continuous pronoun."],
          ["H", "'Nakan tashi da wuri' means", "I usually get up early", "I will get up early", "I got up early", "I am getting up early", "The ending -kan marks a habit."],
          ["H", "The Hausa for 'It is raining' is", "Ana ruwa", "An ruwa", "Zai ruwa", "Ya ruwa ne", "The impersonal continuous pronoun 'ana' is used."],
          ["H", "'Bara' and 'baɗi' mean", "last year and next year", "yesterday and tomorrow", "morning and evening", "now and later", "They are time words for years."],
        ],
      },
      {
        week: 5,
        title: "Negation",
        subtopics: ["Negating completed action", "Negating continuous and future", "Negative commands", "Negating identity, having and existing"],
        objectives: ["Negate completed action with ba … ba", "Negate continuous and future sentences", "Give negative commands with kada", "Negate sentences with ne/ce, da and akwai"],
        lesson: {
          title: "Korewa",
          summary: "Turn Hausa statements and commands into the negative.",
          minutes: 40,
          notes: `## What is negation?
**Korewa** means denying — saying that something is **not** so. Hausa negatives are mostly built with **ba**.

## 1. Completed action: ba … ba
**ba** + short pronoun + verb … + **ba** at the end.
| Positive | Negative |
|---|---|
| **Na tafi.** — I went. | **Ban tafi ba.** — I did not go. |
| **Ka tafi.** | **Ba ka tafi ba.** |
| **Kin tafi.** | **Ba ki tafi ba.** |
| **Ya tafi.** | **Bai tafi ba.** |
| **Ta tafi.** | **Ba ta tafi ba.** |
| **Mun tafi.** | **Ba mu tafi ba.** |
| **Sun tafi.** | **Ba su tafi ba.** |
Note the joined forms **ban** (ba + na) and **bai** (ba + ya).
- **Audu bai zo ba.** — Audu did not come.
- **Ban sani ba.** — I do not know.

## 2. Action in progress: ba na … (one "ba" only)
| Positive | Negative |
|---|---|
| **Ina zuwa.** — I am coming. | **Ba na zuwa.** — I am not coming. |
| **Yana zuwa.** | **Ba ya zuwa.** |
| **Tana karatu.** | **Ba ta karatu.** |
| **Suna aiki.** | **Ba su aiki.** |

## 3. Future: ba … ba
| Positive | Negative |
|---|---|
| **Zan tafi.** — I will go. | **Ba zan tafi ba.** — I will not go. |
| **Zai zo.** | **Ba zai zo ba.** |
| **Za su zo.** | **Ba za su zo ba.** |

## 4. "Not yet": tukuna
- **Bai zo ba tukuna.** — He has not come yet.

## 5. Negative commands: kada
**kada** + pronoun + verb:
| Command | Negative command |
|---|---|
| **Tafi!** — Go! | **Kada ka tafi!** — Do not go! |
| **Ki zo!** | **Kada ki zo!** |
| **Ku yi magana.** | **Kada ku yi magana.** — Do not speak. |
**Kada ka yi ƙarya.** — Do not tell lies.

## 6. Identity: ba … ba ne / ce
- **Littafi ne.** — It is a book. → **Ba littafi ba ne.** — It is not a book.
- **Audu malami ne.** → **Audu ba malami ba ne.** — Audu is not a teacher.
- **Binta ɗaliba ce.** → **Binta ba ɗaliba ba ce.**

## 7. "There is none": babu / ba
- **Akwai ruwa.** — There is water. → **Babu ruwa.** / **Ba ruwa.** — There is no water.
- **Babu kowa.** — There is nobody.

## 8. "Does not have": ba … da
- **Ina da kuɗi.** — I have money. → **Ba ni da kuɗi.** — I have no money.
- **Yana da mota.** → **Ba shi da mota.** — He has no car.

## 9. Not at a place
- **Baba yana gida.** → **Baba ba ya gida.** — Father is not at home.

## Summary
| Positive | Negative |
|---|---|
| na / ya / sun + verb | **ban / bai / ba su** + verb + **ba** |
| ina / yana + verbal noun | **ba na / ba ya** + verbal noun |
| zan / zai + verb | **ba zan / ba zai** + verb + **ba** |
| command | **kada ka / ki / ku** + verb |
| … ne / ce | **ba** … **ba ne / ce** |
| akwai | **babu** |
| ina da | **ba ni da** |

## Answering "no"
**A'a** — No. **A'a, ban gan shi ba.** — No, I did not see him.

## A point to remember
The **second "ba"** closes the negative in the completed and future forms, but is **not used** in the continuous.`,
          examples: `**Example 1.** Make negative: **Na tafi.** *Answer:* **Ban tafi ba** (I did not go).

**Example 2.** Make negative: **Tafi!** *Answer:* **Kada ka tafi!** (Do not go!)

**Example 3.** Translate "There is no water" and "I have no money." *Answer:* **Babu ruwa** and **Ba ni da kuɗi**.`,
        },
        questions: [
          ["E", "The Hausa term for 'negation' is", "korewa", "gaisuwa", "tambaya", "ƙidaya", "It means denying."],
          ["E", "The negative of 'Na tafi' is", "Ban tafi ba", "Zan tafi", "Ina tafiya", "Nakan tafi", "Ba + na becomes ban, with ba at the end."],
          ["E", "'Kada ka tafi!' means", "Do not go!", "Go now!", "He has gone", "Let us go", "Kada makes a command negative."],
          ["M", "'Ban sani ba' means", "I do not know", "I know", "He knows", "We will know", "Sani means 'to know'."],
          ["M", "'Babu ruwa' means", "There is no water", "The water is cold", "Bring water", "He drank water", "Babu is the negative of akwai."],
          ["M", "The negative of 'Ya tafi' (He went) is", "Bai tafi ba", "Ba ya tafi", "Ban tafi ba", "Kada ya tafi ba", "Ba + ya becomes bai."],
          ["M", "'Ba ni da kuɗi' means", "I have no money", "Give me money", "I have money", "It is not my money", "It is the negative of 'Ina da kuɗi'."],
          ["H", "The negative of 'Ina zuwa' (I am coming) is", "Ba na zuwa", "Ban zuwa ba", "Ba zan zuwa ba", "Kada in zuwa", "The continuous negative has only one 'ba'."],
          ["H", "The negative of 'Zai zo' (He will come) is", "Ba zai zo ba", "Bai zo ba", "Ba ya zuwa", "Kada ya zo", "Ba … ba encloses the future form."],
          ["H", "'Audu ba malami ba ne' means", "Audu is not a teacher", "Audu has no teacher", "Audu did not teach", "Audu is the teacher", "Identity is negated with ba … ba ne."],
        ],
      },
      {
        week: 6,
        title: "Asking questions",
        subtopics: ["Yes or no questions", "Question words", "Asking about number and price", "Answering questions"],
        objectives: ["Form yes/no questions with ko, shin and intonation", "Use the question words me, wa, ina, yaushe and yaya", "Ask how many and how much with nawa", "Give suitable answers to questions"],
        lesson: {
          title: "Tambaya",
          summary: "Ask and answer questions in Hausa.",
          minutes: 40,
          notes: `## Two kinds of question
1. questions answered by **yes or no**
2. questions that ask for **information**, using a question word

## 1. Yes / no questions
A statement becomes a question by
- **raising the voice** at the end;
- putting **Shin** or **Ko** at the beginning; or
- adding **ko?**, **ne?** or **kuwa?** at the end.
| Statement | Question |
|---|---|
| **Ka ci abinci.** — You have eaten. | **Ka ci abinci?** / **Shin ka ci abinci?** — Have you eaten? |
| **Audu yana gida.** | **Audu yana gida ko?** — Is Audu at home? |
| **Wannan littafi ne.** | **Wannan littafi ne?** — Is this a book? |
Answers: **I / Eh** (Yes) / **A'a** (No).

## 2. Question words
The question word comes **first**.
| Hausa | English | Example |
|---|---|---|
| **Me / Menene?** | What? | **Me kake yi?** — What are you doing? |
| **Wa / Wane ne?** | Who? | **Wa ya zo?** — Who came? |
| **Ina?** | Where? | **Ina za ka?** — Where are you going? |
| **Yaushe?** | When? | **Yaushe ka zo?** — When did you come? |
| **Yaya / Ƙaƙa?** | How? | **Yaya aiki?** — How is work? |
| **Don me / Me ya sa?** | Why? | **Me ya sa ka makara?** — Why are you late? |
| **Wanne / Wacce?** | Which (m. / f.)? | **Wanne kake so?** — Which one do you want? |
| **Nawa?** | How many? How much? | **Yara nawa kake da su?** — How many children have you? |
| **Na wane ne?** | Whose? | **Littafin wane ne wannan?** — Whose book is this? |

**Menene** is used for a masculine thing and **mecece** for a feminine one; **wane ne** (who, m.), **wace ce** (who, f.), **su wane ne** (who, plural).

## Special forms after a question word
After a question word the pronoun often takes a **special form**:
- **Me kake yi?** (not *kana*) — What are you doing?
- **Ina yake?** — Where is he?
- **Wa ya zo?** — Who came?

## Nawa — number and price
- **Littattafai nawa?** — How many books?
- **Nawa ne?** / **Kuɗinsa nawa ne?** — How much is it?
- **Naira ɗari biyu ne.** — It is two hundred naira.

## Answering
The answer usually **replaces the question word**:
- **Menene sunanka?** — **Sunana Sani.**
- **Ina kake zaune?** — **Ina zaune a Zariya.**
- **Wa ya sha ruwana?** — **Musa ne.**
- **Yaushe za ka zo?** — **Gobe.**

## "How about…?" — fa
- **Babanka fa?** — How about your father?
- **Yara fa?** — And the children?

## A dialogue
> **Malami:** Menene sunanki?
> **Ɗaliba:** Sunana Zainab.
> **Malami:** Daga ina kike?
> **Ɗaliba:** Daga Katsina nake.
> **Malami:** Kina son wannan makaranta?
> **Ɗaliba:** I, ina sonta ƙwarai.

## Punctuation
A question ends with the **question mark** (**alamar tambaya**).`,
          examples: `**Example 1.** Turn into a question: **Ka ci abinci.** *Answer:* **Ka ci abinci?** or **Shin ka ci abinci?**

**Example 2.** Ask "Where are you going?" (to a male). *Answer:* **Ina za ka?**

**Example 3.** How do you ask the price of something? *Answer:* **Nawa ne?** (or *Kuɗinsa nawa ne?*)`,
        },
        questions: [
          ["E", "The Hausa word for 'question' is", "tambaya", "amsa", "magana", "gaisuwa", "Amsa means answer."],
          ["E", "'Wa ya zo?' means", "Who came?", "What came?", "Where did he come?", "When did he come?", "Wa asks about a person."],
          ["E", "The Hausa word for 'yes' is", "i", "a'a", "to", "ba", "Eh is also used."],
          ["M", "'Ina za ka?' means", "Where are you going?", "When are you going?", "Why are you going?", "Who is going?", "Ina asks about place."],
          ["M", "The question word used to ask the price or number of something is", "nawa", "yaushe", "wanne", "yaya", "As in 'Nawa ne?'"],
          ["M", "'Me kake yi?' means", "What are you doing?", "Where do you live?", "Who are you?", "How old are you?", "Me asks 'what'."],
          ["M", "'Yaushe ka zo?' asks about", "the time of arrival", "the place of arrival", "the reason for coming", "the number of people", "Yaushe means 'when'."],
          ["H", "A word that may be placed at the beginning of a statement to make it a yes/no question is", "Shin", "Kada", "Babu", "Akwai", "As in 'Shin ka ci abinci?'"],
          ["H", "'Me ya sa ka makara?' asks", "why the person is late", "where the person lives", "what the person's name is", "how much something costs", "Me ya sa means 'why'."],
          ["H", "'Littafin wane ne wannan?' means", "Whose book is this?", "Which book is this?", "Where is this book?", "What book is this?", "Wane ne asks about the owner."],
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
        subtopics: ["What an adjective is", "Gender and number of adjectives", "Position and the linker", "Describing with 'mai' and comparing with 'fi'"],
        objectives: ["Define an adjective", "Use masculine, feminine and plural forms of adjectives", "Place adjectives correctly with the linker", "Describe with mai / masu and compare with fi"],
        lesson: {
          title: "Sifa",
          summary: "Describe people and things in Hausa.",
          minutes: 40,
          notes: `## What is an adjective?
An **adjective** (**sifa**) **describes a noun**.

## Adjectives agree with the noun
Hausa adjectives have **masculine, feminine and plural** forms.
| Masculine | Feminine | Plural | English |
|---|---|---|---|
| **babba** | **babba** | **manya** | big |
| **ƙarami** | **ƙarama** | **ƙanana** | small |
| **dogo** | **doguwa** | **dogaye** | tall, long |
| **gajere** | **gajeriya** | **gajeru** | short |
| **sabo** | **sabuwa** | **sababbi** | new |
| **tsoho** | **tsohuwa** | **tsofaffi** | old |
| **mugu** | **mugunya** | **miyagu** | bad, wicked |
| **fari** | **fara** | **farare** | white |
| **baƙi** | **baƙa** | **baƙaƙe** | black |

## Position
### Before the noun, with a linker
The adjective takes **-n** (masculine and plural) or **-r** (feminine):
- **babban gida** — a big house
- **babbar mota** — a big car
- **sabon littafi** — a new book
- **sabuwar riga** — a new gown
- **ƙananan yara** — small children
### After the noun
- **gida babba**, **riga sabuwa**, **yaro ƙarami**

## Describing with "mai" and "masu"
**mai** (plural **masu**) means "owner of / having". With a noun of quality it forms a describing phrase that **follows** the noun:
| Phrase | Meaning |
|---|---|
| **mai kyau** | good, beautiful ("having beauty") |
| **mai zafi** | hot |
| **mai sanyi** | cold |
| **mai daɗi** | pleasant, tasty |
| **mai zaƙi** | sweet |
| **mai ɗaci** | bitter |
| **mai ƙarfi** | strong |
| **mai hankali** | sensible |
| **mai kuɗi** | rich |
- **yaro mai kyau** — a good boy
- **ruwa mai sanyi** — cold water
- **mutane masu kirki** — kind people

### The opposite: maras / marar
- **marar kyau** — not good
- **maras lafiya** — unwell
- **marar hankali** — senseless

## In a sentence
- **Gidan babba ne.** — The house is big.
- **Motar sabuwa ce.** — The car is new.
- **Abincin yana da daɗi.** — The food is tasty.
- **Ruwan yana da sanyi.** — The water is cold.

## Kinds of adjective
- **of quality**: yaro **mai kyau**
- **of colour**: **farin** kaya
- **of number**: littattafai **biyu**; yaro **na uku** (the third boy)
- **of quantity**: ruwa **kaɗan** (a little water); mutane **da yawa** (many people)
- **demonstrative**: **wannan** littafi (this book)
- **possessive**: gida**na** (my house)

## Comparison: fi
Hausa compares with the verb **fi** ("to exceed"):
- **Audu ya fi Musa tsawo.** — Audu is taller than Musa. ("Audu exceeds Musa in height.")
- **Wannan ya fi wancan kyau.** — This is better than that.
- **Ita ce ta fi kowa.** — She is the best of all.

## "Very": ƙwarai / sosai
- **Yana da kyau ƙwarai.** — It is very good.
- **Na gode sosai.** — Thank you very much.`,
          examples: `**Example 1.** Translate "a new book" and "a new gown". *Answer:* **sabon littafi** and **sabuwar riga**.

**Example 2.** Give the plural of **babba** and of **ƙarami**. *Answer:* **manya** and **ƙanana**.

**Example 3.** Translate "Audu is taller than Musa." *Answer:* **Audu ya fi Musa tsawo**.`,
        },
        questions: [
          ["E", "The Hausa term for 'adjective' is", "sifa", "suna", "aikatau", "harafi", "It describes a noun."],
          ["E", "'Babban gida' means", "a big house", "a small house", "a new house", "my house", "Babba means big."],
          ["E", "The opposite of 'babba' (big) is", "ƙarami", "dogo", "sabo", "tsoho", "It means small."],
          ["M", "'Sabuwar riga' means", "a new gown", "an old gown", "a white gown", "a torn gown", "Sabuwa is the feminine of sabo."],
          ["M", "The opposite of 'dogo' (tall) is", "gajere", "babba", "sabo", "mugu", "It means short."],
          ["M", "'Ruwa mai sanyi' means", "cold water", "hot water", "dirty water", "much water", "Sanyi means cold."],
          ["M", "The feminine form of 'tsoho' (old) is", "tsohuwa", "tsofaffi", "tsohon", "tsohi", "Tsofaffi is the plural."],
          ["H", "'Audu ya fi Musa tsawo' means", "Audu is taller than Musa", "Audu and Musa are tall", "Audu is shorter than Musa", "Audu went with Musa", "Fi means 'to exceed'."],
          ["H", "The plural of 'babba' (big) is", "manya", "babbai", "babbobi", "ƙanana", "As in manyan mutane — important people."],
          ["H", "In 'mutane masu kirki', the word 'masu' is", "the plural of 'mai'", "a verb", "a pronoun meaning 'they'", "a number", "It means 'those having'."],
        ],
      },
      {
        week: 2,
        title: "Proverbs",
        subtopics: ["What proverbs are", "Uses of proverbs", "Some proverbs and their meanings", "How proverbs are introduced"],
        objectives: ["Define a proverb", "State the uses of proverbs in Hausa society", "Explain the meaning of common proverbs", "Introduce a proverb in the proper way"],
        lesson: {
          title: "Karin magana",
          summary: "Understand and use Hausa proverbs.",
          minutes: 40,
          notes: `## What is a proverb?
A **proverb** (**karin magana** — "a folding of speech") is a **short, wise saying** handed down by the elders, which teaches a truth about life. It says much in few words and its real meaning lies **beneath the surface**.

## Features
- **short** and memorable, often in **two balanced halves**
- contains **deep wisdom**
- uses **images** from the farm, the market, animals and the home
- has a **surface meaning** and a **deeper meaning**
- belongs to the **community**; no one knows who first said it

## Uses
- to **advise** and **warn**
- to **teach** good behaviour
- to **settle disputes**
- to **encourage** or **console**
- to **rebuke** gently
- to **make speech persuasive** — a good speaker is known by his proverbs
- in **songs, tales and writing**

## Some proverbs
| Karin magana | Meaning |
|---|---|
| **Gaskiya ta fi kwabo.** — *Truth is worth more than a penny.* | Honesty is better than money. |
| **Haƙuri maganin zaman duniya.** — *Patience is the medicine for life in this world.* | Patience solves life's problems. |
| **Hannu ɗaya ba ya ɗaukar jinka.** — *One hand cannot lift a thatched roof.* | Co-operation is needed. |
| **Sannu ba ta hana zuwa.** — *Going slowly does not prevent arriving.* | Slow and steady reaches the goal. |
| **Rigakafi ya fi magani.** — *Prevention is better than cure.* | Avoid trouble before it comes. |
| **Gani ya kori ji.** — *Seeing drives out hearing.* | Seeing is believing. |
| **Idan kunne ya ji, jiki ya tsira.** — *If the ear hears, the body is saved.* | Heed advice and avoid harm. |
| **Zumunta a ƙafa take.** — *Kinship is in the feet.* | Family ties are kept by visiting. |
| **Komai nisan jifa, ƙasa zai faɗo.** — *However far a thing is thrown, it will fall to earth.* | Everything comes to its end. |
| **Ruwa ba ya tsami banza.** — *Water does not go sour for nothing.* | Nothing happens without a cause. |
| **Mai haƙuri yakan dafa dutse ya sha romonsa.** — *The patient one can cook a stone and drink its broth.* | Patience achieves the impossible. |
| **Kowa ya yi da kyau, zai ga da kyau.** — *Whoever does good will see good.* | Good deeds are rewarded. |
| **Abin da babba ya gani yana zaune, yaro ko ya hau rimi ba zai gan shi ba.** — *What an elder sees sitting down, a child will not see even from the top of a silk-cotton tree.* | Respect the wisdom of elders. |

## Introducing a proverb
A speaker often begins:
- **"Hausawa sun ce…"** — *The Hausa say…*
- **"Bahaushe ya ce…"** — *The Hausa man says…*
- **"Masu iya magana sun ce…"** — *Those skilled in speech say…*

## Proverbs and other forms
- a **proverb (karin magana)** teaches wisdom
- a **riddle (kacici-kacici)** asks for an answer
- an **idiom (salon magana)** is a phrase with a meaning different from its words
- an **epithet (kirari)** praises a person or thing

## How to explain a proverb
1. give the **literal** meaning
2. give the **deeper** meaning
3. say **when** it may be used

## A proverb in use
To a friend who wants to rush a task, one may say: **"Sannu ba ta hana zuwa"** — take your time; you will still get there.`,
          examples: `**Example 1.** What is **karin magana**? *Answer:* A **proverb** — a short wise saying that teaches a truth about life.

**Example 2.** Explain "Hannu ɗaya ba ya ɗaukar jinka". *Answer:* **One hand cannot lift a roof** — people must **co-operate**.

**Example 3.** How does a speaker commonly introduce a proverb? *Answer:* With **"Hausawa sun ce…"** (The Hausa say…).`,
        },
        questions: [
          ["E", "The Hausa term for 'proverb' is", "karin magana", "karin sauti", "tatsuniya", "kirari", "It is a short wise saying."],
          ["E", "Proverbs are handed down by", "the elders", "foreign traders", "newspapers", "school inspectors", "They carry the wisdom of past generations."],
          ["E", "'Gaskiya ta fi kwabo' teaches the value of", "honesty", "wealth", "speed", "strength", "Truth is worth more than a penny."],
          ["M", "'Haƙuri maganin zaman duniya' teaches", "patience", "bravery", "generosity", "cleanliness", "Patience is the medicine for life."],
          ["M", "'Hannu ɗaya ba ya ɗaukar jinka' teaches", "co-operation", "building skills", "the danger of roofs", "living alone", "One hand cannot lift a thatched roof."],
          ["M", "'Rigakafi ya fi magani' means", "Prevention is better than cure", "Medicine is expensive", "Patience is a virtue", "Seeing is believing", "Avoid trouble before it comes."],
          ["M", "Which of the following is a use of proverbs?", "advising and warning", "measuring land", "counting money", "naming the days", "They guide behaviour."],
          ["H", "'Gani ya kori ji' means", "Seeing is believing", "Listening is better than looking", "The blind cannot hear", "Do not gossip", "What is seen settles what was only heard."],
          ["H", "'Zumunta a ƙafa take' teaches people to", "visit their relatives", "walk for exercise", "avoid long journeys", "respect the king", "Kinship is kept alive by the feet."],
          ["H", "A speaker commonly introduces a proverb with the words", "Hausawa sun ce…", "Ga ta nan…", "Kulun kulufita…", "Ƙurunƙus…", "It means 'The Hausa say…'."],
        ],
      },
      {
        week: 3,
        title: "The linker and possession",
        subtopics: ["The linker -n and -r", "Possession", "The definite ending", "Ɗan, 'yar and 'yan"],
        objectives: ["Join two nouns with the linker -n or -r", "Express possession with nouns and pronouns", "Use -n and -r to mean 'the'", "Form expressions with ɗan, 'yar and 'yan"],
        lesson: {
          title: "Mahaɗin suna: -n da -r",
          summary: "Join nouns and show possession with the Hausa linker.",
          minutes: 40,
          notes: `## The linker
Hausa joins a noun to the word that follows it — an owner, a describing noun, a possessive ending — with a short **linker** (**mahaɗi**) attached to the first noun:
- **-n** after a **masculine** noun or a **plural**
- **-r** after a **feminine** noun ending in **-a**

| Noun | Gender | With linker | Meaning |
|---|---|---|---|
| **gida** | m. | **gidan Audu** | Audu's house |
| **littafi** | m. | **littafin malami** | the teacher's book |
| **mota** | f. | **motar Audu** | Audu's car |
| **riga** | f. | **rigar Binta** | Binta's gown |
| **yara** | pl. | **yaran sarki** | the king's children |

The thing possessed comes **first**; the owner **follows**.

## The full forms na and ta
The linker is a short form of **na** (m. / pl.) and **ta** (f.), which may be used instead:
- **gida na Audu** = **gidan Audu**
- **mota ta Audu** = **motar Audu**
The full forms are needed when other words come between: **gida babba na Audu** — Audu's big house.

## Other uses of the linker
### 1. Noun + describing noun
- **ruwan sama** — rain ("water of above")
- **gidan sarki** — palace ("house of the king")
- **ɗakin karatu** — library ("room of reading")
- **man gyaɗa** — groundnut oil
- **makarantar firamare** — primary school
### 2. Adjective + noun
- **babban gida**, **babbar mota**, **farin kaya**
### 3. Before possessive pronouns
- **gidansa** (his house), **motarsa** (his car), **littafinmu** (our book)
### 4. Verbal noun + object
- **cin abinci** (eating food), **shan ruwa** (drinking water), **sayen kaya** (buying goods)

## The definite ending: "the"
The same **-n / -r**, added to a noun standing alone, means **"the"** — the one already mentioned:
- **yaro** — a boy → **yaron** — the boy
- **mota** — a car → **motar** — the car
- **mutane** — people → **mutanen** — the people
> **Na sayi littafi. Littafin yana da kyau.** — I bought a book. The book is good.

## "Mine, yours": nawa / tawa
| Owner | of a masculine thing | of a feminine thing |
|---|---|---|
| mine | **nawa** | **tawa** |
| yours (m.) | **naka** | **taka** |
| his | **nasa** | **tasa** |
| hers | **nata** | **tata** |
| ours | **namu** | **tamu** |
| theirs | **nasu** | **tasu** |
- **Wannan gida nawa ne.** — This house is mine.
- **Wannan mota tawa ce.** — This car is mine.

## Ɗan, 'yar and 'yan
**ɗan** (son of), **'yar** (daughter of) and **'yan** (children of) join with another noun to name **a person belonging to a place, group or trade**:
| Expression | Meaning |
|---|---|
| **ɗan Kano / 'yar Kano** | a man / woman of Kano |
| **ɗan makaranta / 'yar makaranta** | schoolboy / schoolgirl |
| **ɗan kasuwa** | trader |
| **ɗan sanda / 'yan sanda** | policeman / police |
| **ɗan'uwa / 'yar'uwa** | brother / sister |
| **ɗan Adam** | human being ("son of Adam") |
| **'yan wasa** | players |
**ɗan** and **'yar** can also mean "little": **ɗan yaro** (a little boy), **'yar hanya** (a small path).

## Summary
| Use | Masculine / plural | Feminine |
|---|---|---|
| "of" | **-n** / **na** | **-r** / **ta** |
| "the" | **-n** | **-r** |
| "is" | **ne** | **ce** |`,
          examples: `**Example 1.** Translate "Audu's house" and "Audu's car". *Answer:* **gidan Audu** and **motar Audu** — *-n* for masculine, *-r* for feminine.

**Example 2.** How do you say "the boy" and "the car"? *Answer:* **yaron** and **motar**.

**Example 3.** What does **ɗan kasuwa** mean? *Answer:* **A trader** — literally "son of the market".`,
        },
        questions: [
          ["E", "The linker used after a masculine noun is", "-n", "-r", "-ce", "-ta", "As in gidan Audu."],
          ["E", "'Gidan Audu' means", "Audu's house", "Audu is at home", "a house and Audu", "Audu built it", "The owner follows the thing owned."],
          ["E", "'Ɗan makaranta' means", "a schoolboy", "a school building", "a school bag", "a teacher", "Literally, 'son of the school'."],
          ["M", "The linker used after a feminine noun ending in -a is", "-r", "-n", "-ne", "-na", "As in motar Audu."],
          ["M", "'Motar Binta' means", "Binta's car", "Binta is in a car", "Binta bought a car", "a car for Binta's father", "Mota is feminine, so the linker is -r."],
          ["M", "'Yaron' means", "the boy", "a boy", "boys", "my boy", "The ending -n makes the noun definite."],
          ["M", "'Ruwan sama', literally 'water of above', means", "rain", "river", "well", "sea", "Two nouns are joined by the linker."],
          ["H", "'Wannan mota tawa ce' means", "This car is mine", "This car is yours", "This is a new car", "This car is theirs", "Tawa is 'mine' for a feminine thing."],
          ["H", "The plural of 'ɗan sanda' (policeman) is", "'yan sanda", "ɗan sandai", "ɗanaye sanda", "'yar sanda", "'Yan is the plural of ɗan and 'yar."],
          ["H", "The linker '-n' is a short form of the word", "na", "ne", "ni", "nan", "As in 'gida na Audu'."],
        ],
      },
      {
        week: 4,
        title: "Hausa names and the naming ceremony",
        subtopics: ["Kinds of Hausa names", "Names from the day and circumstances of birth", "Titles and nicknames", "The naming ceremony"],
        objectives: ["Classify Hausa names", "Explain names given for the day or circumstances of birth", "Recognise titles and nicknames", "Describe the naming ceremony"],
        lesson: {
          title: "Sunayen Hausawa da bikin suna",
          summary: "Explain Hausa names and describe the naming ceremony.",
          minutes: 40,
          notes: `## Names among the Hausa
A Hausa child usually bears **more than one name**: a **religious name** given at the naming ceremony, and often a **home name** that tells of the day or circumstances of birth.

## 1. Religious names (sunan yanka)
The "name of the slaughter" — given when the ram is killed on the naming day. Most Hausa are Muslims, and these names come from the **Qur'an and Islamic history**:
- boys: **Muhammadu, Abubakar, Umar, Usman, Aliyu, Ibrahim, Musa, Isa, Yusuf, Sulaiman**
- girls: **Fatima, A'isha, Hadiza, Zainab, Maryam, Hauwa, Halima, Safiya**
Many have **Hausa forms**: **Audu** (Abdullahi), **Garba** (Abubakar), **Sani** (the second Muhammadu in a family), **Lawal / Auwal** (the first), **Binta** (Fatima), **Hauwa** (Eve).

## 2. Names from the day of birth
| Day | Boy | Girl |
|---|---|---|
| Sunday | **Ɗanladi** | **Ladi** |
| Monday | **Ɗanliti** | **Altine** |
| Tuesday | **Ɗantala** | **Talatu** |
| Wednesday | **Balarabe** | **Balaraba** |
| Thursday | **Ɗanlami** | **Lami** |
| Friday | **Ɗanjuma** | **Jummai** |
| Saturday | **Ɗan'asabe** | **Asabe** |

## 3. Names from the circumstances of birth
| Name | Circumstance |
|---|---|
| **Hassan and Hussaini** | twin boys |
| **Hassana and Hussaina** | twin girls |
| **Gambo** | the child born after twins |
| **Tanko** | a boy born after several girls |
| **Kande** | a girl born after several boys |
| **Sallau / Mai-Sallah** | born during a Sallah festival |
| **Azumi / Ɗan-azumi** | born in the month of fasting |
| **Damina** | born in the rainy season |
| **Shekarau** | born after a pregnancy thought very long |
| **Ajuji** | a child whose elder siblings died young — "of the refuse heap", to turn death away |
| **Ɗan-baba / Ɗan-inna** | named after a grandfather / grandmother, so the name is not spoken |

## 4. Titles and honorifics
- **Malam / Malama** — a learned person; a polite "Mr / Mrs"
- **Alhaji / Hajiya** — one who has made the pilgrimage to Makka
- **Sarki** — king; also a personal name
- traditional titles: **Waziri, Galadima, Madaki, Ciroma**

## 5. Nicknames (laƙabi)
Certain names carry fixed **praise-nicknames**, used by friends:
- **Garba** for Abubakar; **Shehu** for Usman; **Gadanga** for Ali

## Name avoidance
Out of **kunya** (modesty), parents often avoid speaking the **first child's name**, and a wife avoids her husband's name — using a nickname or "father of So-and-so".

## The naming ceremony (bikin suna / ranar suna)
- **when**: on the **seventh day** after birth
- **who**: the father, relatives, neighbours, the **liman** or a **malam**
- **what happens**:
  1. guests gather early in the morning; **kola nuts (goro)** and dates are shared
  2. the **malam prays** and **announces the name** chosen by the father
  3. a **ram is slaughtered** (**ragon suna**) — the sacrifice called *aƙiƙa*
  4. the baby's **head is shaved** by the **barber (wanzami)**
  5. food is cooked; the women celebrate with the mother, who receives **gifts**
- the mother is cared for through the weeks after birth with **hot baths and special food**

## Importance
The ceremony **welcomes the child** into the family and the Muslim community, gives it an identity, and **brings relatives together**.`,
          examples: `**Example 1.** On which day is the Hausa naming ceremony held? *Answer:* The **seventh day** after birth.

**Example 2.** What are twin boys named? *Answer:* **Hassan and Hussaini**.

**Example 3.** What does the name **Tanko** show? *Answer:* That the boy was **born after several girls**.`,
        },
        questions: [
          ["E", "The Hausa naming ceremony is held on which day after birth?", "the seventh day", "the first day", "the fortieth day", "the third day", "A ram is slaughtered on that day."],
          ["E", "Twin boys among the Hausa are usually named", "Hassan and Hussaini", "Tanko and Gambo", "Ɗanladi and Ɗanjuma", "Audu and Sani", "Twin girls are Hassana and Hussaina."],
          ["E", "'Alhaji' is a title for a man who has", "made the pilgrimage to Makka", "become a king", "built a mosque", "taught in a school", "A woman is called Hajiya."],
          ["M", "A girl born on a Friday may be named", "Jummai", "Ladi", "Asabe", "Talatu", "The boy's name is Ɗanjuma."],
          ["M", "The name 'Gambo' is given to a child born", "after twins", "on a Monday", "during the harvest", "in the palace", "It follows Hassan and Hussaini."],
          ["M", "The kola nut shared at a naming ceremony is called", "goro", "gero", "gyaɗa", "dabino", "Dabino are dates."],
          ["M", "'Kande' is the name of a girl born", "after several boys", "after twins", "on a Sunday", "in the fasting month", "Tanko is a boy born after several girls."],
          ["H", "The religious name given at the naming ceremony is called", "sunan yanka", "laƙabi", "kirari", "sunan rana", "It means 'the name of the slaughter'."],
          ["H", "At the naming ceremony, the baby's head is shaved by the", "wanzami", "liman", "maƙeri", "marini", "He is the traditional barber."],
          ["H", "Parents' avoidance of their first child's name is due to the value called", "kunya", "karamci", "gaskiya", "amana", "It means modesty or a sense of shame."],
        ],
      },
      {
        week: 5,
        title: "Traditional marriage",
        subtopics: ["Seeking a wife", "Betrothal and gifts", "The marriage contract", "Taking the bride home"],
        objectives: ["Outline the steps of Hausa marriage", "Explain baiko, lefe and sadaki", "Describe the tying of the marriage", "Describe the customs of taking the bride to her new home"],
        lesson: {
          title: "Aure",
          summary: "Describe the steps of traditional Hausa marriage.",
          minutes: 40,
          notes: `## Marriage is a family affair
Marriage (**aure**) among the Hausa follows **Islamic law and Hausa custom**. It joins **two families**, and the elders of both sides conduct every stage.

## The steps
### 1. Na gani ina so — "I have seen and I like"
The young man tells his parents of the girl he wishes to marry. His family sends **gifts** to her parents to declare the interest.

### 2. Neman aure — seeking marriage
The man's elders formally **ask for the girl's hand**. Her family makes **inquiries** about his character, religion and family. The girl's **consent** is sought.

### 3. Baiko — betrothal
The families **agree**; the girl is promised. A gift marks the engagement.

### 4. Sa rana — fixing the day
The elders meet to **set the date** of the wedding.

### 5. Lefe — the bride's gifts
The groom's family brings **kayan lefe**: boxes of **clothes, shoes, jewellery, cosmetics and other things** for the bride. They are displayed for the women of her family to see.

### 6. Sadaki — the marriage payment
The **sadaki** is the sum the groom gives **to the bride**. It is **required by Islam** — without it there is no marriage — and it belongs to her.

### 7. Ɗaurin aure — "tying the marriage"
The **marriage contract**, usually held in the morning at the home of the bride's family or at a mosque.
- the bride is represented by her **guardian (waliyyi)**, the groom by his representative
- **witnesses** are present
- the **liman** or a malam asks for and announces the **sadaki**, recites prayers, and declares the marriage tied
- **kola nuts and sweets** are shared
The bride and groom themselves are often **not present**.

### 8. Customs of the bride
- **lalle / ƙunshi** — her hands and feet are decorated with **henna**
- **wankan amarya** — the ritual bath of the bride
- **kamu** — friends of the groom "catch" the bride from among her companions

### 9. Kai amarya — taking the bride home
In the evening the bride (**amarya**) is escorted, **veiled**, to her husband's house by her aunts and friends, with singing.
- **kayan ɗaki** — her family furnishes her room with **bowls, beds, mats and household goods**
- **buɗar kai** — the "unveiling", when the groom gives a gift so that the bride will uncover her face and speak
- **walima** — a feast

## Words to know
| Hausa | English |
|---|---|
| **ango** | bridegroom |
| **amarya** | bride |
| **miji / mata** | husband / wife |
| **suruki / suruka** | in-law |
| **waliyyi** | the bride's guardian |
| **biki** | celebration |
| **uwargida** | senior wife |

## Qualities sought
- in a wife: good upbringing (**tarbiyya**), modesty (**kunya**), obedience, religion
- in a husband: honesty, religion, the means to provide

## Values upheld
- **consent** and the **blessing of parents**
- **respect** between in-laws — a man is very reserved before his parents-in-law
- the husband's duty to **feed, clothe and house** his wife
- the families' duty to **settle quarrels**

## Marriage today
Many couples add a **reception**, special dress and photographs, but the **ɗaurin aure** with its **sadaki** remains the heart of the marriage.`,
          examples: `**Example 1.** What is **sadaki**? *Answer:* The **payment the groom gives to the bride**, required by Islam for the marriage to be valid.

**Example 2.** What happens at **ɗaurin aure**? *Answer:* The **marriage contract is tied** — the liman announces the sadaki and prays, before the guardian and witnesses.

**Example 3.** What are **kayan lefe**? *Answer:* The **boxes of clothes and gifts** brought by the groom's family for the bride.`,
        },
        questions: [
          ["E", "The Hausa word for 'marriage' is", "aure", "suna", "biki", "kamu", "Ɗaurin aure is the tying of the marriage."],
          ["E", "The Hausa word for 'bride' is", "amarya", "ango", "suruka", "uwargida", "The bridegroom is the ango."],
          ["E", "Hausa marriage is conducted according to custom and", "Islamic law", "British law only", "the wishes of the bride's friends", "the market calendar", "Most Hausa are Muslims."],
          ["M", "The payment that the groom gives to the bride, required by Islam, is", "sadaki", "lefe", "baiko", "kamu", "It belongs to the bride."],
          ["M", "The boxes of clothes and gifts brought for the bride by the groom's family are called", "kayan lefe", "kayan ɗaki", "walima", "goro", "They are displayed for her relatives."],
          ["M", "'Ɗaurin aure' refers to", "the tying of the marriage contract", "the bride's bath", "the fixing of the date", "the naming of a child", "The liman conducts it before witnesses."],
          ["M", "The decoration of the bride's hands and feet is done with", "henna (lalle)", "antimony only", "chalk", "palm oil", "It is called ƙunshi."],
          ["H", "At the ɗaurin aure, the bride is represented by her", "waliyyi", "ango", "amarya", "wanzami", "He is her guardian."],
          ["H", "The household goods with which the bride's family furnishes her room are", "kayan ɗaki", "kayan lefe", "sadaki", "baiko", "They include bowls, beds and mats."],
          ["H", "'Sa rana' in the marriage process means", "fixing the date of the wedding", "paying the sadaki", "unveiling the bride", "naming the child", "The elders of both families agree on the day."],
        ],
      },
      {
        week: 6,
        title: "Dress and adornment",
        subtopics: ["Men's dress", "Women's dress", "Fabrics, dyeing and embroidery", "Adornment"],
        objectives: ["Name items of traditional men's dress", "Name items of traditional women's dress", "Describe Hausa fabrics, dyeing and embroidery", "Describe forms of adornment"],
        lesson: {
          title: "Tufafi da ado",
          summary: "Describe traditional Hausa dress, fabrics and adornment.",
          minutes: 40,
          notes: `## Dress matters
**Tufafi** (or **kaya**) means clothes; **ado** means adornment. Hausa dress is **modest and dignified**, and shows a person's **age, rank and the occasion**.

## Men's dress
| Hausa | Description |
|---|---|
| **babbar riga** | the **great gown** — wide, flowing and often richly embroidered |
| **jamfa / taguwa** | a long shirt worn under the gown |
| **kaftani** | a long robe with sleeves |
| **wando** | trousers, wide at the top |
| **hula** | cap, often embroidered |
| **rawani** | **turban** — worn by emirs, title-holders and learned men |
| **alkyabba** | a cloak worn by royalty |
| **takalmi** | shoes, sandals |
A full outfit is **babbar riga**, **jamfa** and **wando** with a **hula**.

## Women's dress
| Hausa | Description |
|---|---|
| **zane** | wrapper tied round the waist |
| **riga** | blouse |
| **ɗankwali / kallabi** | head-tie |
| **gyale / mayafi** | a large veil or shawl covering head and shoulders |
| **hijabi** | a covering for head and body |

## Fabrics
- **saƙi** — strong **hand-woven** cotton cloth, woven in narrow strips
- **shadda** — polished brocade, favoured for babbar riga
- **atamfa** — printed cotton
- **leshi** — lace
- **yadi** — cloth in general

## Dyeing (rini)
The Hausa are famous for **indigo dyeing**. At the old **dye pits of Kano (marina)**, cloth is steeped in deep pits of **indigo (baba)** to give shades from pale to nearly black blue. Dyed cloth was once beaten to a **shining glaze**.

## Embroidery (ɗinkin hannu)
The neck and chest of the **babbar riga** and the crown of the **hula** carry **hand embroidery** in traditional patterns such as the "eight knives" design. Embroidered caps are a well-known craft.

## Adornment (ado)
- **lalle / ƙunshi** — **henna** patterns on hands and feet for weddings and festivals
- **kwalli** — **antimony** to darken the eyes
- **kitso** — plaiting of the hair
- **'yan kunne** — earrings; **sarƙa** — necklace; **munduwa / awarwaro** — bangles; **zobe** — ring
- **turare** — perfume and incense, much loved
- **katambiri** — a dark stain for face decoration
- **tsaga** — facial marks once cut to show a person's town or family

## Royal dress
An **emir (sarki)** appears in **layers of fine gowns**, a great **turban** tied so that two points stand up, an **alkyabba**, and sometimes with **ostrich-feather shoes and fans**. His guards (**dogarai**) wear **red and green**.

## Dress for occasions
- **Friday prayer and Sallah** — new or best clothes, often white
- **weddings** — rich cloth; henna for the bride
- **the Durbar** — horsemen and horses in splendid robes and trappings

## Values
modesty (**kunya**); neatness (**tsabta**); dressing to suit the occasion; pride in one's culture.`,
          examples: `**Example 1.** What is **babbar riga**? *Answer:* The **great flowing gown** worn by Hausa men.

**Example 2.** For what craft are the old pits of Kano famous? *Answer:* **Indigo dyeing (rini)**.

**Example 3.** Name three forms of women's adornment. *Answer:* **Lalle (henna), kwalli (antimony) and kitso (plaited hair)**.`,
        },
        questions: [
          ["E", "The Hausa word for 'cap' is", "hula", "rawani", "zane", "wando", "It is often embroidered."],
          ["E", "'Zane' is", "a woman's wrapper", "a man's cap", "a turban", "a pair of shoes", "It is tied round the waist."],
          ["E", "The Hausa word for 'trousers' is", "wando", "riga", "gyale", "takalmi", "It is worn with jamfa and babbar riga."],
          ["M", "The wide, flowing gown worn by Hausa men is the", "babbar riga", "ɗankwali", "hijabi", "zane", "It is often richly embroidered."],
          ["M", "The turban worn by emirs and title-holders is called", "rawani", "hula", "alkyabba", "gyale", "It is a sign of rank."],
          ["M", "The Hausa word for 'dyeing' is", "rini", "saƙa", "ɗinki", "kitso", "Kano is famous for its indigo dye pits."],
          ["M", "A woman's head-tie is called", "ɗankwali", "wando", "jamfa", "rawani", "Kallabi is another word for it."],
          ["H", "The dye used in the old pits of Kano is", "indigo", "camwood", "henna", "chalk", "It gives shades of deep blue."],
          ["H", "'Kwalli' is used to", "darken the eyes", "decorate the feet", "plait the hair", "perfume the room", "It is antimony."],
          ["H", "Strong cotton cloth hand-woven in narrow strips is called", "saƙi", "shadda", "atamfa", "leshi", "It is the traditional woven cloth."],
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
        subtopics: ["Farming and herding", "Crafts", "Trade", "Occupational chiefs and the dignity of work"],
        objectives: ["Name traditional Hausa occupations", "Describe farming and its tools and crops", "Name the crafts for which the Hausa are known", "Explain the organisation of trades under their chiefs"],
        lesson: {
          title: "Sana'o'in gargajiya",
          summary: "Describe the traditional occupations of the Hausa.",
          minutes: 40,
          notes: `## Work is honoured
An occupation or trade is **sana'a** (plural **sana'o'i**). The Hausa say **"Sana'a rufin asiri ce"** — a trade is what keeps a person's dignity covered. A person without a trade is pitied.

## Occupations
| Occupation | Worker | Notes |
|---|---|---|
| **noma** | **manomi** (farmer) | the chief occupation |
| **kiwo** | **makiyayi** (herdsman) | cattle, sheep, goats; the Fulani are the great herders |
| **ƙira** | **maƙeri** (blacksmith) | hoes, knives, axes |
| **saƙa** | **masaƙi** (weaver) | narrow-strip cloth |
| **rini** | **marini** (dyer) | indigo; the Kano dye pits |
| **jima** | **majemi** (tanner) | hides and skins |
| **dukanci** | **baduku** (leather worker) | bags, saddles, sandals, cushions |
| **fawa** | **mahauci** (butcher) | meat; suya |
| **wanzanci** | **wanzami** (barber) | shaving, and traditional minor surgery |
| **farauta** | **mafarauci** (hunter) | game |
| **su** | **masunci** (fisherman) | fishing |
| **gini** | **magini** (builder) | mud architecture |
| **sassaƙa** | **masassaƙi** (carver) | stools, mortars, bowls |
| **ɗinki** | **maɗinki** (tailor) | sewing and embroidery |
| **kiɗa** | **makaɗi** (drummer) | music |
| **roƙo** | **maroƙi** (praise-singer) | praises of rulers and the wealthy |
| **kasuwanci / fatauci** | **ɗan kasuwa / farke** (trader) | local and long-distance trade |
| **malanta** | **malami** (scholar, teacher) | Qur'anic learning |
Women's crafts include **kaɗi** (spinning cotton), **ginin tukwane** (pottery), preparing food for sale, and making **daddawa** and groundnut oil.

## Farming
- tools: **fartanya** (hoe), **garma** (large hoe / plough), **lauje** (sickle), **gatari** (axe), **adda** (machete)
- food crops: **gero** (millet), **dawa** (guinea corn), **masara** (maize), **shinkafa** (rice), **wake** (beans)
- cash crops: **gyaɗa** (groundnuts), **auduga** (cotton)
- grain is stored in a **rumbu** (granary)
- communal farm work for a neighbour or the chief is **gayya**

## Trade
The Hausa are **famous traders**. Caravans of **fatake** once carried **kola, cloth, leather, salt and potash** across West Africa and the Sahara. **Kano** was — and is — a great commercial city, with its ancient **Kurmi market**. Hausa leather, exported through North Africa, was known in Europe as "Morocco leather".

## Occupational chiefs
Each trade in a town has a **head**, recognised by the emir, who settles disputes and collects dues:
- **Sarkin Noma** — chief of farmers
- **Sarkin Maƙera** — chief of blacksmiths
- **Sarkin Fawa** — chief of butchers
- **Sarkin Kasuwa** — chief of the market
- **Sarkin Makaɗa** — chief of drummers

## Learning a trade
- trades are largely **hereditary**: a son follows his father
- a boy learns by **helping and watching** from childhood
- an outsider may be **apprenticed** to a master (**ubangida**)

## Modern occupations
teaching (**koyarwa**), medicine (**likita** — doctor), driving (**direba**), tailoring (**tela**), mechanics (**makaniki**), the civil service (**aikin gwamnati**), banking.

## Values
hard work (**ƙwazo**); honesty in trade (**gaskiya**); skill; self-reliance. **Lalaci** (laziness) and begging by the able-bodied are condemned.`,
          examples: `**Example 1.** What is **noma**, and who is a **manomi**? *Answer:* **Farming**; a manomi is a **farmer**.

**Example 2.** Name two crafts for which Kano is famous. *Answer:* **Dyeing (rini)** and **leather work (dukanci)**.

**Example 3.** Who is the **Sarkin Maƙera**? *Answer:* The **chief of the blacksmiths** in a town.`,
        },
        questions: [
          ["E", "The Hausa word for 'farming' is", "noma", "kiwo", "saƙa", "rini", "A farmer is a manomi."],
          ["E", "'Manomi' means", "farmer", "weaver", "butcher", "trader", "Farming is the chief occupation."],
          ["E", "The Hausa word for an occupation or trade is", "sana'a", "kasuwa", "gayya", "rumbu", "Its plural is sana'o'i."],
          ["M", "A blacksmith in Hausa is called", "maƙeri", "masaƙi", "marini", "majemi", "His craft is ƙira."],
          ["M", "'Kiwo' is the occupation of", "herding animals", "weaving cloth", "building houses", "catching fish", "The herdsman is a makiyayi."],
          ["M", "The Hausa word for 'hoe' is", "fartanya", "gatari", "lauje", "adda", "Gatari is an axe."],
          ["M", "A butcher in Hausa is called", "mahauci", "masunci", "magini", "maɗinki", "His trade is fawa."],
          ["H", "The head of the farmers in a Hausa town holds the title", "Sarkin Noma", "Sarkin Fawa", "Sarkin Kasuwa", "Sarkin Makaɗa", "Each trade has its own chief."],
          ["H", "Communal farm work done for a neighbour or the chief is called", "gayya", "rumbu", "fatauci", "kaɗi", "People come together to help."],
          ["H", "Long-distance traders who travelled in caravans were called", "fatake", "maroƙa", "wanzamai", "dogarai", "They carried kola, cloth, leather and salt."],
        ],
      },
      {
        week: 2,
        title: "At the market",
        subtopics: ["Market words", "Asking the price", "Bargaining", "A market dialogue"],
        objectives: ["Use words for buying and selling", "Ask and state prices", "Bargain politely in Hausa", "Take part in a simple market dialogue"],
        lesson: {
          title: "A kasuwa: saye da sayarwa",
          summary: "Buy, sell and bargain in Hausa.",
          minutes: 40,
          notes: `## Market words
| Hausa | English |
|---|---|
| **kasuwa** | market |
| **saya** | buy |
| **sayar** | sell |
| **kuɗi** | money |
| **naira / kobo** | naira / kobo |
| **mai sayarwa** | seller |
| **mai saye** | buyer |
| **farashi** | price |
| **canji** | change |
| **riba** | profit |
| **bashi** | debt; credit |
| **tsada** | dearness: **yana da tsada** — it is expensive |
| **araha** | cheapness: **yana da araha** — it is cheap |
| **rage** | reduce |
| **ƙara** | add, increase |
| **auna** | weigh, measure |
| **ciniki** | bargaining; trade |

## Things sold
**doya** (yam), **barkono** (pepper), **tumatir**, **albasa** (onion), **kifi** (fish), **nama** (meat), **mai** (oil), **shinkafa** (rice), **wake** (beans), **gishiri** (salt), **sukari** (sugar), **ƙwai** (eggs), **kaya** (cloth, goods), **takalma** (shoes).

## Asking the price
- **Nawa ne?** — How much is it?
- **Nawa ne kuɗin wannan?** — How much is this?
- **Naira ɗari biyu ne.** — It is two hundred naira.
- **Naira dubu ɗaya ne.** — It is one thousand naira.

## Money
| Amount | Hausa |
|---|---|
| ₦50 | **naira hamsin** |
| ₦100 | **naira ɗari** |
| ₦200 | **naira ɗari biyu** |
| ₦500 | **naira ɗari biyar** |
| ₦1,000 | **naira dubu ɗaya** |
| ₦5,000 | **naira dubu biyar** |

## Bargaining
Bargaining (**ciniki**) is expected, and it has its own polite phrases.
- **Ya yi tsada.** — It is too expensive.
- **Don Allah, a rage.** — Please reduce it.
- **Zan ba da ɗari da hamsin.** — I will give a hundred and fifty.
- **Albarka.** — "Blessing" — the seller's polite way of saying **"No, that is too little."**
- **Ƙara kaɗan.** — Add a little.
- **Na sallama.** — I agree; I let it go.
- **To, kawo.** — All right, bring it.
- **Ba ni canjina.** — Give me my change.
- **Na gode. Allah ya ba da kasuwa.** — Thank you. May God give you good trade.

## A dialogue
> **Mai saye:** Sannu da kasuwa, Malam.
> **Mai sayarwa:** Yauwa, sannu da zuwa. Me kake so?
> **Mai saye:** Ina son barkono. Nawa ne?
> **Mai sayarwa:** Naira ɗari uku ne.
> **Mai saye:** Kai! Ya yi tsada. Zan ba da ɗari biyu.
> **Mai sayarwa:** Albarka. Ƙara hamsin.
> **Mai saye:** To, ga kuɗi.
> **Mai sayarwa:** Na gode. Allah ya sa a amfana.

## Market manners
greet the seller first; bargain politely; do not handle goods roughly; pay what is agreed; count your change; honesty in weights and measures is a religious duty.

## The market in Hausa life
Most towns have a **weekly market day** on a fixed day of the week, besides daily markets in the cities. The market is a place for **trade, news and meeting friends**. It is supervised by the **Sarkin Kasuwa**. Famous markets include **Kurmi** in Kano and the great cattle and grain markets of the north.`,
          examples: `**Example 1.** Ask "How much is it?" in Hausa. *Answer:* **Nawa ne?**

**Example 2.** Say "It is too expensive; please reduce it." *Answer:* **Ya yi tsada; don Allah, a rage**.

**Example 3.** What does a seller mean by **"Albarka"**? *Answer:* A polite **"No — that offer is too low."**`,
        },
        questions: [
          ["E", "The Hausa word for 'market' is", "kasuwa", "gona", "rijiya", "gida", "Goods are bought and sold there."],
          ["E", "The Hausa word for 'money' is", "kuɗi", "riba", "bashi", "canji", "Nawa ne kuɗinsa? asks the price."],
          ["E", "The Hausa verb meaning 'sell' is", "sayar", "saya", "auna", "rage", "Saya means buy."],
          ["M", "'Ya yi tsada' means", "It is too expensive", "It is very cheap", "It is finished", "It is very good", "Tsada means dearness."],
          ["M", "'Don Allah, a rage' is a request to", "reduce the price", "add more goods", "give change", "close the shop", "Rage means reduce."],
          ["M", "'Naira ɗari biyar' is", "five hundred naira", "one hundred and five naira", "fifty naira", "five thousand naira", "Ɗari is a hundred; biyar is five."],
          ["M", "The Hausa word for 'price' is", "farashi", "ciniki", "bashi", "araha", "Ciniki is bargaining."],
          ["H", "When a seller answers an offer with the word 'Albarka', he means", "the offer is too low", "the price is accepted", "the goods are finished", "the buyer should pay double", "It is a polite refusal."],
          ["H", "'Naira dubu biyar' is", "five thousand naira", "five hundred naira", "one thousand and five naira", "fifty thousand naira", "Dubu is a thousand."],
          ["H", "'Ba ni canjina' means", "Give me my change", "Give me your goods", "Show me the price", "Reduce it for me", "Canji is change."],
        ],
      },
      {
        week: 3,
        title: "Prepositions and words of place",
        subtopics: ["The basic prepositions", "Words of position", "Movement to and from", "Describing where things are"],
        objectives: ["Use a, daga, zuwa, da and ga correctly", "Use position words such as kan, ƙarƙashin and cikin", "Express movement to and from a place", "Describe the position of objects"],
        lesson: {
          title: "Harafin bagire",
          summary: "Say where things are and where people are going.",
          minutes: 40,
          notes: `## What is a preposition?
A **preposition** shows the **relationship of a noun to the rest of the sentence** — usually place, direction or time.

## The basic prepositions
| Hausa | English | Example |
|---|---|---|
| **a** | at, in, on | **Yana a gida.** / **Yana gida.** — He is at home. |
| **daga** | from | **Na zo daga Kano.** — I came from Kano. |
| **zuwa** | to, towards | **daga Kano zuwa Zariya** — from Kano to Zaria |
| **da** | with; and | **Ya tafi da ni.** — He went with me. |
| **ga** | to, for (a person) | **Ka ba da shi ga Audu.** — Give it to Audu. |
| **wa / ma** | to, for (after a verb) | **Ya saya wa Musa.** — He bought (it) for Musa. |
| **game da** | about | **Yi magana game da shi.** — Speak about it. |
| **har** | until, up to | **har dare** — until night |
| **tun** | since | **tun jiya** — since yesterday |
| **sai** | until; except | **sai gobe** — until tomorrow |

## Words of position
These are **nouns of place** joined to the following noun with the linker:
| Hausa | English |
|---|---|
| **kan / a kan** | on, on top of |
| **ƙarƙashin** | under |
| **cikin** | in, inside |
| **bayan** | behind; after |
| **gaban** | in front of; before |
| **gefen / kusa da** | beside / near |
| **tsakanin** | between, among |
| **wajen** | outside; at the place of |
| **bisa** | upon, above |
| **sama** | up, above |
| **ƙasa** | down, below |

## Describing position
- **Littafi yana kan tebur.** — The book is on the table.
- **Kyanwa tana ƙarƙashin kujera.** — The cat is under the chair.
- **Kuɗi suna cikin jaka.** — The money is in the bag.
- **Lambu yana bayan gida.** — The garden is behind the house.
- **Malami yana tsaye a gaban aji.** — The teacher is standing in front of the class.
- **Binta tana zaune kusa da ni.** — Binta is sitting near me.
- **Gidanmu yana kusa da kasuwa.** — Our house is near the market.

## Movement
Verbs of motion often take the place **directly**:
- **Na tafi kasuwa.** — I went to market.
- **Zan je Kano.** — I will go to Kano.
- **Ya shiga ɗaki.** — He entered the room.
- **Ta fita waje.** — She went outside.
- **Ya dawo daga makaranta.** — He returned from school.

## Here and there
| Hausa | English |
|---|---|
| **nan** | here |
| **can** | there (far) |
| **nan kusa** | near here |
| **ko'ina** | everywhere |

## Directions
- **dama** — right; **hagu** — left
- **Juya dama.** — Turn right.
- **Yi gaba.** — Go straight on.
- **arewa** (north), **kudu** (south), **gabas** (east), **yamma** (west)

## Asking
- **Ina littafina yake?** — Where is my book?
- **Yana kan kujera.** — It is on the chair.

## With pronouns
Position words take the possessive endings: **kansa** (on it), **cikinta** (in it), **bayana** (behind me), **gabanmu** (in front of us).`,
          examples: `**Example 1.** Translate "The cat is under the table." *Answer:* **Kyanwa tana ƙarƙashin tebur**.

**Example 2.** Which preposition means "from"? *Answer:* **daga** — as in *Na zo daga Kano*.

**Example 3.** What does **cikin** mean? *Answer:* **In / inside** — as in *cikin jaka* (in the bag).`,
        },
        questions: [
          ["E", "'Kan tebur' means", "on the table", "under the table", "inside the table", "behind the table", "Kan means 'on top of'."],
          ["E", "The Hausa word for 'under' is", "ƙarƙashin", "bisa", "gaban", "wajen", "As in 'ƙarƙashin kujera'."],
          ["E", "'Cikin jaka' means", "inside the bag", "outside the bag", "beside the bag", "on the bag", "Ciki means inside."],
          ["M", "'Na zo daga Kano' means", "I came from Kano", "I am going to Kano", "I live in Kano", "I like Kano", "Daga means 'from'."],
          ["M", "The Hausa word for 'behind' is", "bayan", "gaban", "gefen", "tsakanin", "Baya means back."],
          ["M", "'Gaban aji' means", "in front of the class", "at the back of the class", "outside the class", "inside the class", "Gaba means front."],
          ["M", "'Ya tafi da ni' means", "He went with me", "He went to me", "He went from me", "He went before me", "Da means 'with'."],
          ["H", "'Tsakanin' means", "between or among", "outside", "on top of", "near", "As in 'tsakanin gidaje' — between the houses."],
          ["H", "The Hausa words for the four directions north, south, east and west are", "arewa, kudu, gabas, yamma", "dama, hagu, sama, ƙasa", "nan, can, ciki, waje", "jiya, yau, gobe, jibi", "Dama and hagu are right and left."],
          ["H", "'Binta tana zaune kusa da ni' means", "Binta is sitting near me", "Binta is sitting behind me", "Binta is sitting on me", "Binta is sitting far from me", "Kusa da means near."],
        ],
      },
      {
        week: 4,
        title: "Reading comprehension",
        subtopics: ["How to read a passage", "Finding the main idea", "Answering questions", "Working out meanings"],
        objectives: ["Read a short Hausa passage with understanding", "State the main idea of a passage", "Answer factual questions from a passage", "Work out the meaning of words from context"],
        lesson: {
          title: "Auna fahimta",
          summary: "Read a short Hausa passage and answer questions on it.",
          minutes: 40,
          notes: `## What is comprehension?
**Auna fahimta** ("measuring understanding") means **reading with understanding**. You read a passage (**labari**) and answer questions on it.

## How to go about it
1. **Read the passage through** once for the general idea.
2. **Read the questions.**
3. **Read the passage again** carefully, looking for the answers.
4. **Answer in full sentences**, in your own words where possible.
5. Answer **only what is asked**.
6. Check your **spelling**, especially the **hooked letters**.

## Types of question
- **factual** — Wa? Me? Ina? Yaushe? Nawa?
- **reason** — Me ya sa? (look for *saboda* / *domin* — because)
- **meaning** — what a word means in the passage
- **main idea / title**
- **lesson**

## A passage (labari)
> **Musa da Lambunsa**
>
> Musa yana da shekara goma sha biyu. Yana zaune a wani ƙauye tare da kakarsa. Kowace safiya, kafin ya tafi makaranta, Musa yakan shayar da lambunsa ruwa. Lambun yana bayan gidansu. Ya shuka tumatir, barkono da alayyahu a ciki.
>
> Wata rana, akuyar maƙwabcinsu ta shiga lambun, ta cinye alayyahun duka. Musa ya yi baƙin ciki, amma bai yi fushi ba. Ya kewaye lambun da shinge, ya kuma sake shuka alayyahu.
>
> A ƙarshen wata, Musa ya kai tumatir da barkono kasuwa. Ya sayar da su, ya sayi littattafai biyu da kuɗin. Kakarsa ta yaba masa, ta ce shi yaro ne mai ƙwazo.

### Helps with words
| Hausa | English |
|---|---|
| **ƙauye** | village |
| **shayar da … ruwa** | to water |
| **lambu** | garden |
| **shuka** | to plant |
| **alayyahu** | spinach |
| **maƙwabci** | neighbour |
| **baƙin ciki** | sadness |
| **fushi** | anger |
| **shinge** | fence |
| **ƙarshe** | end |
| **yaba** | to praise |
| **mai ƙwazo** | hard-working |

### In English
Musa is twelve. He lives in a village with his grandmother. Every morning before school he waters his garden behind their house, where he has planted tomatoes, pepper and spinach. One day a neighbour's goat got in and ate all the spinach. Musa was sad but did not get angry; he fenced the garden and planted spinach again. At the end of the month he took tomatoes and pepper to market, sold them and bought two books with the money. His grandmother praised him as a hard-working boy.

## Questions and model answers
1. **Shekarun Musa nawa?** — *Shekarunsa goma sha biyu.*
2. **Da wa Musa yake zaune?** — *Da kakarsa.*
3. **Me ya cinye alayyahun Musa?** — *Akuyar maƙwabcinsu.*
4. **Me Musa ya saya da kuɗinsa?** — *Littattafai biyu.*
5. **Wane darasi labarin yake koyarwa?** — hard work and patience are rewarded.

## Tips
- do not copy whole sentences when a short answer will do
- for "why" questions, begin **Saboda…** (Because…)
- for a title, choose words that cover the **whole** passage`,
          examples: `**Example 1.** What does **auna fahimta** mean? *Answer:* **Comprehension** — reading with understanding.

**Example 2.** From the passage: where is Musa's garden? *Answer:* **Behind their house** (*bayan gidansu*).

**Example 3.** What did Musa do after the goat ate his spinach? *Answer:* He **fenced the garden and planted again**.`,
        },
        questions: [
          ["E", "The Hausa term for 'comprehension' is", "auna fahimta", "insha'i", "fassara", "adabi", "It means measuring understanding."],
          ["E", "In the passage, Musa is", "twelve years old", "ten years old", "fifteen years old", "eight years old", "The passage says 'shekara goma sha biyu'."],
          ["E", "According to the passage, Musa lives with his", "grandmother", "uncle", "teacher", "elder brother", "'Kakarsa' means his grandmother."],
          ["M", "The animal that ate Musa's spinach was a", "goat", "dog", "cow", "fowl", "'Akuyar maƙwabcinsu' — their neighbour's goat."],
          ["M", "With the money from his sales, Musa bought", "two books", "a goat", "new shoes", "a hoe", "'Ya sayi littattafai biyu da kuɗin.'"],
          ["M", "In the passage, 'maƙwabci' means", "neighbour", "grandmother", "trader", "teacher", "The goat belonged to this person."],
          ["M", "The first step in answering a comprehension passage is to", "read the passage through", "write the answers at once", "count the words", "copy the passage", "The general idea must first be grasped."],
          ["H", "The expression 'yaro mai ƙwazo' used of Musa means", "a hard-working boy", "a lazy boy", "an angry boy", "a greedy boy", "His grandmother praised him with it."],
          ["H", "The best lesson to draw from the passage is that", "hard work and patience are rewarded", "goats should be killed", "neighbours are wicked", "gardens are useless", "Musa replanted and later earned money."],
          ["H", "An answer to a 'why' question in Hausa comprehension normally begins with", "Saboda…", "Shin…", "Ina…", "Ga ta nan…", "It means 'Because…'."],
        ],
      },
      {
        week: 5,
        title: "The informal letter",
        subtopics: ["Kinds of letter", "Parts of an informal letter", "Language of an informal letter", "A sample letter"],
        objectives: ["Distinguish informal from formal letters", "Set out the parts of an informal letter", "Use suitable greetings and closing in Hausa", "Write a short informal letter"],
        lesson: {
          title: "Wasiƙar sada zumunta",
          summary: "Write a friendly letter in Hausa.",
          minutes: 40,
          notes: `## Kinds of letter
A letter is **wasiƙa** (plural **wasiƙu**).
- **wasiƙar sada zumunta** (also **wasiƙar gida**) — the **informal, friendly letter**, written to relatives and friends
- **wasiƙar aiki / ta hukuma** — the **formal letter**, written to offices and authorities

## Parts of an informal letter
| Part | Hausa | Where |
|---|---|---|
| 1. writer's address | **adireshin marubuci** | top right |
| 2. date | **kwanan wata** | under the address |
| 3. salutation | **gaisuwar farko** | left margin |
| 4. opening greetings | **gaisuwa** | first paragraph |
| 5. body | **gundarin wasiƙa** | middle paragraphs |
| 6. closing | **rufewa** | last paragraph |
| 7. subscription and name | **sunan marubuci** | bottom right |

An informal letter has **only one address** — the writer's — and the writer signs with **the first name only**.

## The salutation
- **Zuwa ga Babana ƙaunatacce,** — To my beloved father,
- **Zuwa ga Mamata,** — To my mother,
- **Zuwa ga abokina Sani,** — To my friend Sani,
- **Zuwa ga Yayana,** — To my elder brother,

## The opening greetings
A Hausa letter always begins with greetings and good wishes:
> Bayan gaisuwa mai yawa tare da fatan alheri. Ina fata kuna lafiya. Yaya gida? Yaya iyali? Ni ma ina lafiya, alhamdulillahi.
(*After many greetings and good wishes. I hope you are well. How is home? How is the family? I too am well, praise be to God.*)

## The body
State the **purpose** of the letter, one idea to a paragraph. Use the respectful plural **ku** or titles for elders.

## The closing
> Ka gai da kowa da kowa a gida. Sai mun haɗu.
(*Greet everyone at home. Until we meet.*)

## The subscription
- **Ni ne ɗanka,** — I am your son,
- **Ni ce 'yarka,** — I am your daughter,
- **Ni ne abokinka,** — I am your friend,
followed by the **first name**.

## A sample letter
> Makarantar Sakandare ta Gwamnati,
> P.M.B. 25,
> Kano.
> 10 ga Mayu, 2025.
>
> Zuwa ga Babana ƙaunatacce,
>
> Bayan gaisuwa mai yawa tare da fatan alheri. Ina fata kuna lafiya. Yaya gida? Yaya Mama da ƙannena? Ni ma ina lafiya, alhamdulillahi.
>
> Na rubuta wannan wasiƙa ne domin in sanar da kai cewa za mu fara jarrabawa mako mai zuwa. Ina karatu sosai. Don Allah Baba, ina bukatar sabon littafin Lissafi da kuɗin abinci.
>
> Ka gai da Mama da dukan mutanen gida. Sai mun haɗu.
>
> Ni ne ɗanka,
> Musa.

*(Summary: Musa greets his father, says examinations begin next week, asks for a new Mathematics book and feeding money, and sends greetings home.)*

## Useful words
| Hausa | English |
|---|---|
| **jarrabawa** | examination |
| **mako mai zuwa** | next week |
| **fata** | hope |
| **fara** | to begin |
| **sanar da** | to inform |
| **bukata** | need |
| **Lissafi** | Mathematics |

## Language
warm and simple; respectful to elders; correct hooked letters.

## Marking guide
address and date; salutation; opening greetings; content; arrangement in paragraphs; expression; closing.`,
          examples: `**Example 1.** What is the Hausa word for a letter? *Answer:* **wasiƙa** (plural *wasiƙu*).

**Example 2.** How many addresses does an informal letter have? *Answer:* **One** — the writer's.

**Example 3.** Give a suitable salutation and closing for a letter from a boy to his father. *Answer:* **Zuwa ga Babana ƙaunatacce,** … **Ni ne ɗanka,**`,
        },
        questions: [
          ["E", "The Hausa word for 'letter' (a written message) is", "wasiƙa", "takarda kawai", "labari", "insha'i", "Its plural is wasiƙu."],
          ["E", "The writer's address in a letter is placed at the", "top right-hand corner", "bottom left-hand corner", "middle of the page", "back of the page", "The date follows beneath it."],
          ["E", "An informal letter has how many addresses?", "one", "two", "three", "none", "Only the writer's address is given."],
          ["M", "'Zuwa ga Babana ƙaunatacce' at the start of a letter means", "To my beloved father", "From your loving son", "Yours faithfully", "Greet father for me", "It is the salutation."],
          ["M", "A Hausa informal letter normally opens with", "greetings and good wishes", "the price of goods", "a title in capitals", "the writer's qualifications", "Greeting comes before the message."],
          ["M", "At the end of an informal letter the writer signs with", "the first name only", "the full name and title", "a rubber stamp", "the school's name", "The reader knows the writer well."],
          ["M", "In the sample letter, 'jarrabawa' means", "examination", "holiday", "school fees", "uniform", "Musa says it begins next week."],
          ["H", "A girl writing to her father would close her letter with", "Ni ce 'yarka,", "Ni ne ɗanka,", "Ni ne abokinka,", "Ni ne naka mai biyayya,", "The feminine forms 'ce' and ''yar' are used."],
          ["H", "'Ka gai da kowa da kowa a gida' means", "Greet everyone at home", "I am coming home", "The house is big", "Everyone at home is ill", "It is a common closing line."],
          ["H", "The Hausa expression for the date in a letter is", "kwanan wata", "adireshi", "gaisuwa", "rufewa", "It is written under the address."],
        ],
      },
      {
        week: 6,
        title: "Traditional games, music and performance",
        subtopics: ["Sports and outdoor games", "Children's and girls' games", "Musical instruments", "Singers and Ramadan play"],
        objectives: ["Describe wrestling, boxing and other traditional sports", "Describe children's and girls' games", "Name Hausa musical instruments", "Identify kinds of performers and the Ramadan play called tashe"],
        lesson: {
          title: "Wasanni da kiɗe-kiɗe",
          summary: "Describe traditional Hausa games, musical instruments and performers.",
          minutes: 40,
          notes: `## Play
**Wasa** (plural **wasanni**) means game or play; **kiɗa** means drumming or music; **waƙa** means song; **rawa** means dance.

## Sports
### Kokawa — wrestling
Two wrestlers try to **throw each other to the ground**. Contests are held after harvest between villages, with drummers praising the champions.

### Dambe — traditional boxing
A fighting sport once practised by the **butchers' guild**. The boxer wraps **one fist** — the "spear" — in cloth and cord and uses the other hand as a "shield". Bouts are short and accompanied by drums.

### Others
- **sukuwa** — horse racing
- **hawan doki** — horsemanship, displayed at the **Durbar**
- **farauta** — hunting
- **tseren gudu** — foot races
- **sharo / shaɗi** — the Fulani youths' test of endurance

## Children's and girls' games
- **langa** — a boys' **hopping** game: each player holds one foot and hops, trying to knock the others down
- **wasan ɓoye** — **hide-and-seek**
- **'yar tsana** — playing with **dolls**
- **carafke** — a game of tossing and catching small stones
- **gada** — a **girls' game** of singing, clapping and catching: one girl falls back and is thrown up by the others in time with the song
- **dara** — a **board game** of skill for two, played with pieces on squares marked on the ground
- **kacici-kacici** — riddle contests

## Tashe — the Ramadan play
During the **month of fasting**, from about the **tenth night**, children and youths go from house to house in costume, **acting short comic scenes and singing**, and are given small gifts. This is **tashe**, a form of **traditional drama**.

## Musical instruments (kayan kiɗa)
| Hausa | Description |
|---|---|
| **kalangu** | **hourglass "talking" drum**, squeezed under the arm |
| **ganga** | large double-headed drum |
| **tambari** | great **royal drums**, beaten only for the emir |
| **kakaki** | very long **royal trumpet** |
| **algaita** | reed **oboe** |
| **goge** | one-stringed **fiddle**, played with a bow |
| **kuntigi** | small **one-stringed lute** |
| **molo / garaya** | plucked lutes of two or three strings |
| **sarewa** | **flute** |
| **kuge** | iron double bell |
| **shantu** | long gourd tube played by women |
| **kwarya** | **calabash** drums played by women |

The **tambari** and **kakaki** are **symbols of kingship**.

## Singers and performers
- **makaɗa** — drummers and musicians
- **maroƙa** — **praise-singers**, who recite the praises (**kirari**) and ancestry of rulers and patrons
- **mawaƙa** — singers
Kinds of song:
- **waƙoƙin fada** — court songs for emirs
- **waƙoƙin sana'a** — songs of occupations: farmers, hunters, blacksmiths
- **waƙoƙin jama'a** — popular songs for the public
- **waƙoƙin yara** — children's songs
- **waƙoƙin aure / biki** — wedding and festival songs
Famous oral singers of the twentieth century include **Mamman Shata**, **Ɗan Maraya Jos** (with his kuntigi), **Ibrahim Narambaɗa** and **Musa Ɗanƙwairo**.

## Value of games and music
- **exercise** and health
- **courage** and endurance
- **co-operation**
- **quick thinking**
- **language** — songs and tashe train speech
- **culture and history** are passed on

## Today
Schools keep these alive through **cultural days**, competitions and clubs.`,
          examples: `**Example 1.** What is **kokawa**? *Answer:* **Wrestling** — two wrestlers try to throw each other.

**Example 2.** Name three Hausa musical instruments. *Answer:* **Kalangu** (talking drum), **kakaki** (royal trumpet) and **goge** (fiddle).

**Example 3.** What is **tashe**? *Answer:* **Short comic plays and songs** performed from house to house by children during **Ramadan**.`,
        },
        questions: [
          ["E", "Traditional wrestling in Hausa is called", "kokawa", "dambe", "langa", "gada", "Two wrestlers try to throw each other."],
          ["E", "The Hausa hourglass 'talking' drum is the", "kalangu", "kakaki", "goge", "sarewa", "It is squeezed under the arm."],
          ["E", "The Hausa word for 'song' is", "waƙa", "rawa", "kiɗa", "wasa", "Rawa is dance. Answer: waƙa."],
          ["M", "Traditional Hausa boxing is called", "dambe", "kokawa", "sukuwa", "carafke", "One fist is bound as a 'spear'."],
          ["M", "The very long royal trumpet blown for an emir is the", "kakaki", "algaita", "sarewa", "kuntigi", "It is a symbol of kingship."],
          ["M", "'Langa' is", "a boys' hopping game", "a girls' clapping game", "a board game", "a horse race", "Each player holds one foot and hops."],
          ["M", "The one-stringed fiddle played with a bow is the", "goge", "molo", "kalangu", "kuge", "It gives a singing sound."],
          ["H", "The short comic plays performed from house to house during Ramadan are called", "tashe", "gada", "dara", "kirari", "They begin about the tenth night of the fast."],
          ["H", "Praise-singers who recite the praises and ancestry of rulers are called", "maroƙa", "makiyaya", "manoma", "masunta", "Their art is roƙo."],
          ["H", "The great drums that are beaten only for the emir are the", "tambari", "kwarya", "shantu", "ganga", "They are a symbol of royal authority."],
        ],
      },
    ],
  },
];
