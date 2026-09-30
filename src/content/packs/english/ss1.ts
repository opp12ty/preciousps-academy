import type { TermPlan } from "../types";

/** SS1 English Language — original Precious PS content aligned to the senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Oral English: pure vowels (monophthongs)",
        subtopics: ["The twelve pure vowels of English", "Short and long vowels", "Spelling patterns of vowel sounds", "Vowel contrasts that Nigerian speakers find difficult"],
        objectives: ["List and illustrate the twelve English monophthongs", "Distinguish short from long vowels", "Recognise the different spellings of each vowel sound", "Identify words containing a given vowel sound in examination questions"],
        lesson: {
          title: "The Pure Vowels of English",
          summary: "Master the twelve monophthongs of Received Pronunciation and their spellings.",
          minutes: 45,
          notes: `## What is a pure vowel?
A **pure vowel (monophthong)** is produced with the tongue in **one position** throughout. English (RP) has **12**: 7 short and 5 long (long vowels are marked **ː**).

| Symbol | Type | Examples |
|---|---|---|
| /iː/ | long | see, sea, key, people, receive |
| /ɪ/ | short | sit, busy, women, pretty, English |
| /e/ | short | bed, head, said, many, friend |
| /æ/ | short | cat, bad, plait |
| /ɑː/ | long | car, heart, calm, clerk, aunt |
| /ɒ/ | short | pot, what, because, knowledge |
| /ɔː/ | long | caught, law, board, water, four |
| /ʊ/ | short | put, book, could, woman |
| /uː/ | long | food, blue, shoe, juice, through |
| /ʌ/ | short | cup, son, blood, touch, does |
| /ɜː/ | long | bird, word, learn, turn, journey |
| /ə/ | short (schwa) | **a**bout, teach**er**, sof**a**, doct**or** |

## The schwa /ə/
The most common English vowel. It occurs only in **unstressed** syllables: *a-BOUT* /əˈbaʊt/, *TEACH-er* /ˈtiːtʃə/.

## Tricky spellings
- *women* /ˈwɪmɪn/ — the *o* is /ɪ/!
- *busy, business* — /ɪ/
- *clerk* — /ɑː/ in RP
- *blood, flood* — /ʌ/
- *said, says, many, any* — /e/

## Examination technique
Say the word **aloud in your head**; ignore spelling and listen for the sound.`,
          examples: `**Example 1.** Which word has /ʌ/: *blood, food, good, mood*? *Answer:* **blood**.

**Example 2.** Which word has /ɪ/: *women, woman, wool, wound*? *Answer:* **women**.

**Example 3.** Which word has /ɜː/: *word, ward, wood, wad*? *Answer:* **word**.`,
        },
        questions: [
          ["E", "How many pure vowels (monophthongs) are there in RP English?", "12", "5", "20", "24", "There are 7 short and 5 long pure vowels."],
          ["E", "Which word contains the long vowel /iː/?", "people", "pretty", "pet", "put", "'People' has /iː/ in the first syllable."],
          ["E", "The vowel found only in unstressed syllables, as in 'about', is called", "schwa", "diphthong", "triphthong", "consonant cluster", "The schwa /ə/ is the weak central vowel."],
          ["M", "Which word contains the vowel /ʌ/?", "blood", "food", "good", "mood", "'Blood' rhymes with 'mud'."],
          ["M", "Which word contains the vowel /ɪ/?", "women", "woman", "wool", "wound", "In 'women', the 'o' is pronounced /ɪ/."],
          ["M", "Which word contains the vowel /ɜː/?", "word", "ward", "wood", "wad", "'Word' has the long central vowel /ɜː/."],
          ["M", "Which word contains the vowel /e/?", "said", "sad", "side", "seed", "'Said' is pronounced /sed/."],
          ["H", "Which word contains the vowel /ɑː/ in RP?", "clerk", "clock", "click", "cluck", "In RP, 'clerk' is pronounced /klɑːk/."],
          ["H", "Which word contains the vowel /ɒ/?", "knowledge", "know", "known", "knew", "The first syllable of 'knowledge' is /nɒl/."],
          ["H", "Which word contains the vowel /ɔː/?", "water", "watch", "what", "wander", "'Water' is pronounced /ˈwɔːtə/."],
        ],
      },
      {
        week: 2,
        title: "Oral English: consonant sounds",
        subtopics: ["The 24 consonants of English", "Voiced and voiceless consonants", "Place and manner of articulation", "Consonants with varied spellings"],
        objectives: ["Identify the 24 English consonant sounds", "Classify consonants as voiced or voiceless", "Describe consonants by place and manner of articulation", "Identify consonant sounds regardless of spelling"],
        lesson: {
          title: "English Consonant Sounds",
          summary: "Classify English consonants and recognise them in any spelling.",
          minutes: 45,
          notes: `## The 24 consonants
/p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l r w j/

## Voiced and voiceless pairs
The vocal cords **vibrate** for voiced sounds; not for voiceless ones.
| Voiceless | Voiced |
|---|---|
| /p/ pen | /b/ ben |
| /t/ ten | /d/ den |
| /k/ coat | /g/ goat |
| /f/ fan | /v/ van |
| /θ/ thigh | /ð/ thy |
| /s/ sip | /z/ zip |
| /ʃ/ pressure | /ʒ/ pleasure |
| /tʃ/ cheap | /dʒ/ jeep |

## Manner of articulation
- **Plosives** (complete closure then release): p b t d k g
- **Fricatives** (friction): f v θ ð s z ʃ ʒ h
- **Affricates**: tʃ dʒ
- **Nasals** (air through the nose): m n ŋ
- **Lateral**: l
- **Approximants**: r w j

## Place of articulation
Bilabial (p b m w), labio-dental (f v), dental (θ ð), alveolar (t d s z n l), palato-alveolar (ʃ ʒ tʃ dʒ), velar (k g ŋ), glottal (h).

## Tricky spellings
- /f/: *ph*one, lau*gh*, *f*ish
- /k/: *ch*emistry, *qu*ay, *c*at
- /ʃ/: *s*ugar, na*ti*on, ma*ch*ine, o*c*ean
- /ʒ/: mea*s*ure, gara*g*e, vi*si*on
- /ŋ/: si*ng*, thi*n*k
- *-ed* endings: /t/ after voiceless sounds (*walked*), /d/ after voiced (*played*), /ɪd/ after t or d (*wanted*).`,
          examples: `**Example 1.** Which word has /ʒ/: *vision, mission, fashion, station*? *Answer:* **vision**.

**Example 2.** How is *-ed* in *walked* pronounced? *Answer:* **/t/**.

**Example 3.** Which word begins with /k/: *chemistry, church, cheese, chair*? *Answer:* **chemistry**.`,
        },
        questions: [
          ["E", "How many consonant sounds are there in English?", "24", "12", "20", "26", "There are 24 consonant phonemes."],
          ["E", "Which sound is voiced?", "/b/", "/p/", "/f/", "/s/", "The vocal cords vibrate for /b/."],
          ["E", "In which word is 'gh' pronounced /f/?", "laugh", "night", "ghost", "though", "The 'gh' in 'laugh' is pronounced /f/."],
          ["M", "Which word contains the sound /ʒ/?", "vision", "mission", "fashion", "station", "The 's' in 'vision' is /ʒ/."],
          ["M", "Which word begins with the sound /k/?", "chemistry", "church", "cheese", "chair", "The 'ch' in 'chemistry' is /k/."],
          ["M", "The '-ed' in 'walked' is pronounced", "/t/", "/d/", "/ɪd/", "/ed/", "After a voiceless /k/, -ed is /t/."],
          ["M", "The '-ed' in 'wanted' is pronounced", "/ɪd/", "/t/", "/d/", "/ed/ as in 'bed'", "After t or d, -ed is /ɪd/."],
          ["H", "Which of these sounds is a nasal?", "/ŋ/", "/θ/", "/tʃ/", "/l/", "/ŋ/ is produced with air through the nose."],
          ["H", "Which word contains the sound /ʃ/ spelt with 's'?", "sugar", "sun", "rose", "pleasure", "The 's' in 'sugar' is pronounced /ʃ/."],
          ["H", "Which pair contains a voiceless and a voiced consonant produced at the same place?", "/θ/ and /ð/", "/m/ and /n/", "/l/ and /r/", "/w/ and /j/", "Both are dental fricatives; /θ/ is voiceless and /ð/ voiced."],
        ],
      },
      {
        week: 3,
        title: "Word classes: nouns and pronouns",
        subtopics: ["Kinds of nouns", "Countable and uncountable nouns", "Irregular and foreign plurals", "Kinds of pronouns and their cases"],
        objectives: ["Classify nouns as proper, common, collective, abstract and concrete", "Form irregular and foreign plurals correctly", "Identify personal, reflexive, possessive, demonstrative and indefinite pronouns", "Use subject and object pronouns correctly"],
        lesson: {
          title: "Nouns and Pronouns in Depth",
          summary: "Classify nouns and pronouns and avoid common errors with plurals and cases.",
          minutes: 45,
          notes: `## Kinds of nouns
- **Proper**: particular names — *Abuja, Chinua, the Niger*
- **Common**: general names — *city, writer, river*
- **Collective**: groups — *team, jury, flock, herd, committee*
- **Abstract**: ideas and qualities — *honesty, freedom, anger, childhood*
- **Concrete**: things we can perceive — *stone, music, smoke*

## Countable and uncountable
Uncountable nouns have **no plural** and take a singular verb: *information, equipment, furniture, luggage, advice, news, machinery, scenery, stationery, jewellery*.
✗ *furnitures* ✓ *pieces of furniture*.

## Irregular and foreign plurals
| Singular | Plural |
|---|---|
| child | children |
| mouse | mice |
| tooth | teeth |
| criterion | criteria |
| phenomenon | phenomena |
| crisis | crises |
| analysis | analyses |
| radius | radii |
| datum | data |
| sheep, deer, aircraft | (same) |
| mother-in-law | mothers-in-law |

## Pronouns
| Kind | Examples |
|---|---|
| personal (subject / object) | I, he, they / me, him, them |
| possessive | mine, yours, hers, theirs |
| reflexive / emphatic | myself, themselves |
| demonstrative | this, that, these, those |
| indefinite | someone, anybody, each, none |
| relative | who, whom, whose, which |
| interrogative | who? what? which? |
| reciprocal | each other, one another |

**Errors to avoid:** *between you and **me***; *Let **us** go*; *hisself* ✗ → *himself*; *theirselves* ✗ → *themselves*.`,
          examples: `**Example 1.** Classify *honesty*. *Answer:* **abstract** noun.

**Example 2.** Plural of *criterion*: *Answer:* **criteria**.

**Example 3.** Correct: *The boys hurt theirselves.* *Answer:* The boys hurt **themselves**.`,
        },
        questions: [
          ["E", "'Honesty' is an example of", "an abstract noun", "a proper noun", "a collective noun", "a concrete noun", "It names a quality."],
          ["E", "'Herd' in 'a herd of cattle' is", "a collective noun", "an abstract noun", "a proper noun", "a pronoun", "It names a group."],
          ["E", "What is the plural of 'child'?", "children", "childs", "childrens", "childes", "'Child' has an irregular plural."],
          ["M", "What is the plural of 'criterion'?", "criteria", "criterions", "criterias", "criterium", "It is a Greek plural."],
          ["M", "What is the plural of 'crisis'?", "crises", "crisises", "crisis's", "crisi", "Nouns in -is form plurals in -es."],
          ["M", "What is the plural of 'mother-in-law'?", "mothers-in-law", "mother-in-laws", "mothers-in-laws", "mother-ins-law", "The main word 'mother' takes the plural."],
          ["M", "Which sentence is correct?", "The boys hurt themselves.", "The boys hurt theirselves.", "The boys hurt themself.", "The boys hurt theirself.", "'Themselves' is the correct reflexive form."],
          ["H", "Which sentence is correct?", "We bought new furniture for the office.", "We bought new furnitures for the office.", "We bought a new furnitures for the office.", "We bought many furniture for the office.", "'Furniture' is uncountable."],
          ["H", "In 'The two friends helped each other', 'each other' is", "a reciprocal pronoun", "a reflexive pronoun", "a demonstrative pronoun", "a relative pronoun", "It shows a mutual action."],
          ["H", "What is the plural of 'phenomenon'?", "phenomena", "phenomenons", "phenomenas", "phenomenae", "'Phenomenon' is a Greek noun."],
        ],
      },
      {
        week: 4,
        title: "Word classes: verbs, adjectives and adverbs",
        subtopics: ["Kinds of verbs", "Order and comparison of adjectives", "Kinds and position of adverbs", "Words that can belong to more than one class"],
        objectives: ["Distinguish lexical, auxiliary, transitive, intransitive and linking verbs", "Arrange adjectives in the correct order", "Form comparatives and superlatives correctly", "Identify the word class of a word from its use in a sentence"],
        lesson: {
          title: "Verbs, Adjectives and Adverbs",
          summary: "Identify and use verbs, adjectives and adverbs precisely.",
          minutes: 45,
          notes: `## Verbs
- **Lexical (main)** verbs carry meaning: *run, think*.
- **Auxiliary** verbs help: primary (*be, have, do*) and modal (*can, must, will*).
- **Transitive** verbs take an object: *She **wrote** a letter.*
- **Intransitive** verbs do not: *The baby **slept**.*
- **Linking (copular)** verbs connect the subject to a complement: *be, seem, become, appear, look, sound*: *She **seems** happy.*

## Adjectives
**Order** before a noun: opinion → size → age → shape → colour → origin → material → purpose + noun
*a **beautiful large old round brown Nigerian wooden dining** table*
**Comparison**:
- short words: *tall, taller, tallest*
- longer words: *beautiful, more beautiful, most beautiful*
- irregular: *good–better–best, bad–worse–worst, little–less–least, far–farther/further–farthest/furthest*
No double comparison: ✗ *more better* ✗ *most tallest*.
Absolute adjectives are not normally compared: ✗ *more unique, most perfect*.

## Adverbs
Kinds: **manner** (*quickly*), **time** (*yesterday*), **place** (*here*), **frequency** (*always*), **degree** (*very, too, quite*).
*She sings **well*** (adverb), not *good*.
Frequency adverbs go before the main verb but after *be*: *He **always** arrives early. He is **always** early.*

## One word, many classes
*She runs **fast*** (adverb) / *a **fast** car* (adjective) / *a three-day **fast*** (noun) / *They **fast** in Ramadan* (verb).`,
          examples: `**Example 1.** Arrange: *wooden / old / small* box. *Answer:* a **small old wooden** box.

**Example 2.** In *The milk turned sour*, what kind of verb is *turned*? *Answer:* **linking verb**.

**Example 3.** Correct: *This answer is more better.* *Answer:* This answer is **better**.`,
        },
        questions: [
          ["E", "In 'The baby slept', the verb 'slept' is", "intransitive", "transitive", "auxiliary", "modal", "It has no object."],
          ["E", "Which sentence is correct?", "She sings well.", "She sings good.", "She sings goodly.", "She sings more good.", "'Well' is the adverb of 'good'."],
          ["E", "What is the superlative of 'bad'?", "worst", "baddest", "most bad", "worse", "bad – worse – worst."],
          ["M", "Choose the correct order: 'a ___ box'", "small old wooden", "wooden old small", "old wooden small", "small wooden old", "Order: size, age, material."],
          ["M", "In 'The milk turned sour', 'turned' is", "a linking verb", "a transitive verb", "an auxiliary verb", "an adverb", "It links the subject to the complement 'sour'."],
          ["M", "Which sentence is correct?", "This answer is better.", "This answer is more better.", "This answer is most better.", "This answer is gooder.", "'Better' is already comparative."],
          ["M", "In 'They fast during Ramadan', 'fast' is", "a verb", "an adjective", "an adverb", "a noun", "It names the action they perform."],
          ["H", "In 'She drove a fast car', 'fast' is", "an adjective", "an adverb", "a verb", "a noun", "It describes the noun 'car'."],
          ["H", "Which sentence places the adverb correctly?", "He always arrives early.", "He arrives always early.", "Always he arrives early always.", "He arrives early always always.", "Frequency adverbs come before the main verb."],
          ["H", "Choose the correct order: 'a ___ table'", "beautiful large brown wooden", "wooden brown large beautiful", "large beautiful wooden brown", "brown beautiful large wooden", "Order: opinion, size, colour, material."],
        ],
      },
      {
        week: 5,
        title: "Comprehension: main ideas and supporting details",
        subtopics: ["Identifying the main idea of a paragraph", "Supporting details", "Topic sentences", "Answering questions in your own words"],
        objectives: ["Identify the main idea of a paragraph and a passage", "Distinguish main ideas from supporting details", "Locate topic sentences", "Answer comprehension questions accurately in their own words"],
        lesson: {
          title: "Finding the Main Idea",
          summary: "Separate main ideas from supporting details in senior-level passages.",
          minutes: 45,
          notes: `## Main idea
The **main idea** is the central point a paragraph or passage makes. It is often in the **topic sentence** — usually the first sentence, sometimes the last.

## Supporting details
Examples, facts, figures, reasons and descriptions that **explain or prove** the main idea.

## Practice paragraph
*Urban farming is growing in Nigerian cities. On rooftops in Lagos, young graduates grow vegetables in sacks and plastic containers. In Kaduna, families keep poultry in small backyard pens. Such projects reduce food costs, provide income and make use of spaces that were once wasted.*
- **Main idea:** urban farming is growing in Nigerian cities.
- **Details:** rooftop vegetables in Lagos; poultry in Kaduna; benefits.

## Answering questions
- **Your own words**: when asked, paraphrase — do not copy.
- **Replace a word**: the replacement must fit grammatically in the same sentence (same part of speech and tense).
- **"What does the writer mean by…?"**: explain the idea plainly.
- **Figures of speech**: name and explain.
- **Grammatical name and function**: e.g. *"Such projects…" — noun phrase, subject of the verb "reduce".*`,
          examples: `**Q.** What is the main idea of the paragraph above? *Answer:* **Urban farming is increasing in Nigerian cities.**

**Q.** Give a word that can replace *wasted* as used in the passage. *Answer:* **unused** (it fits "spaces that were once unused").

**Q.** Which sentence is the topic sentence? *Answer:* the **first** one.`,
        },
        questions: [
          ["E", "The main idea of a paragraph is", "the central point it makes", "the longest sentence", "the last word", "a list of examples", "Everything else supports the main idea."],
          ["E", "The sentence that states the main idea of a paragraph is the", "topic sentence", "supporting sentence", "closing quotation", "transition word", "It is often the first sentence."],
          ["E", "Examples, facts and reasons that explain the main idea are called", "supporting details", "topic sentences", "titles", "summaries", "They support the main point."],
          ["M", "Paragraph: 'Urban farming is growing in Nigerian cities. On rooftops in Lagos, graduates grow vegetables in sacks. In Kaduna, families keep poultry in backyard pens.' What is the main idea?", "Urban farming is growing in Nigerian cities.", "Graduates live in Lagos.", "Poultry is kept in Kaduna.", "Vegetables grow in sacks.", "The first sentence states the central point."],
          ["M", "Paragraph: 'Such projects reduce food costs, provide income and make use of spaces that were once wasted.' A word that can replace 'wasted' is", "unused", "eaten", "destroyed", "planted", "'Unused' keeps the meaning and fits the sentence."],
          ["M", "When a question says 'in your own words', you should", "paraphrase the idea", "copy the sentence exactly", "write one word only", "give your opinion", "Examiners want proof of understanding."],
          ["M", "A replacement word in a comprehension answer must", "fit the same sentence grammatically", "be longer than the original", "be a proper noun", "rhyme with the original", "It should replace the original word exactly."],
          ["H", "Paragraph: 'Many students think genius explains success. Yet the best performers in our school study daily, ask questions and correct their mistakes.' What is the writer's main point?", "Consistent effort, not genius alone, explains success.", "Genius is the only key to success.", "Students ask too many questions.", "Mistakes should be avoided at all costs.", "The details show effort as the key to success."],
          ["H", "Paragraph: 'The drought ruined crops. Cattle died in their hundreds. Wells dried up and families moved away.' Where is the main idea stated?", "It is implied: the drought caused great hardship.", "In the first word only", "In a quotation", "It is not in the paragraph at all", "The details together imply the main idea."],
          ["H", "In 'Such projects reduce food costs', the phrase 'Such projects' functions as", "the subject of the verb 'reduce'", "the object of the verb 'reduce'", "an adverbial of time", "a complement", "It performs the action of reducing."],
        ],
      },
      {
        week: 6,
        title: "Summary writing: selecting relevant points",
        subtopics: ["Understanding the summary question", "Locating relevant points", "Expressing points in single sentences", "Avoiding irrelevance and repetition"],
        objectives: ["Interpret summary questions precisely", "Locate all relevant points in a passage", "Express each point in one clear, complete sentence", "Avoid examples, repetition and irrelevant material"],
        lesson: {
          title: "Summary at Senior Level",
          summary: "Write WAEC-style summaries with one relevant point per complete sentence.",
          minutes: 45,
          notes: `## The typical question
*In **four** sentences, **one for each**, summarise the **reasons** why…*
Note three things: the **number** of points, the **one-sentence** rule, and the **exact focus** (reasons, effects, problems, solutions).

## Steps
1. Read the passage for general understanding.
2. Underline only the sentences that answer the **exact** question.
3. Reduce each point to its **core** idea.
4. Write each as a **complete sentence** — with a subject and a finite verb.
5. Check: no examples, no repetition, no extra points, no opinions.

## Common faults
| Fault | Example |
|---|---|
| incomplete sentence | ✗ *Because of poor roads.* |
| two points in one sentence | ✗ *It creates jobs and reduces crime.* (when one each is required) |
| copying examples | ✗ *For instance, Mr Ojo lost his farm.* |
| irrelevant point | a cause given when effects were asked |

## Good practice
✓ *Poor roads delay the transport of farm produce.*
Your own words earn credit, but keep the **meaning** exact.`,
          examples: `**Passage (extract):** *Many rural youths move to cities. Farming offers them little income. Schools and hospitals in villages are few. Also, the bright lights of the city attract them, and some are invited by relatives already living there.*

**Question:** In four sentences, one for each, state why rural youths move to cities.

**Answer:**
1. Farming gives them little income.
2. Villages lack enough schools and hospitals.
3. City life attracts them.
4. Relatives in the cities invite them.`,
        },
        questions: [
          ["E", "In a summary question that says 'one sentence for each point', you should", "write each point in a separate sentence", "write all points in one sentence", "write only phrases", "write a paragraph for each point", "Follow the instruction exactly."],
          ["E", "Which of these is a complete sentence suitable for a summary?", "Poor roads delay the transport of farm produce.", "Because of poor roads.", "Poor roads and delays.", "For transporting produce.", "It has a subject and a finite verb."],
          ["E", "Examples in a passage should be", "left out of the summary", "copied in full", "turned into the title", "placed at the start", "Examples are details, not points."],
          ["M", "Passage: 'Farming offers rural youths little income. Villages have few schools and hospitals.' If asked for reasons youths leave villages, which is a relevant point?", "Farming gives them little income.", "Villages are green and quiet.", "Cities have tall buildings.", "Youths like football.", "It is stated as a reason."],
          ["M", "Which answer contains two points in one sentence?", "Tourism creates jobs and earns foreign exchange.", "Tourism creates jobs.", "Tourism earns foreign exchange.", "Tourism promotes culture.", "It combines two ideas."],
          ["M", "If the question asks for the EFFECTS of flooding, which point is irrelevant?", "Blocked drains cause flooding.", "Flooding destroys homes.", "Flooding spreads disease.", "Flooding disrupts schooling.", "It is a cause, not an effect."],
          ["M", "Which should you do after writing your summary?", "check that each point answers the exact question", "add your own opinion", "add examples", "copy the passage title", "Checking removes irrelevance."],
          ["H", "Passage: 'Mobile banking saves customers time. They no longer queue for hours. It also reduces the risk of carrying cash, and small traders can receive payments instantly.' How many distinct advantages are stated?", "3", "4", "2", "5", "Saves time (queueing explains it), reduces risk, instant payments."],
          ["H", "Why is 'For instance, Mr Ojo lost his farm to erosion' unsuitable as a summary point?", "It is an example, not a general point.", "It is too short.", "It uses the past tense.", "It contains a name, which is forbidden.", "Examples illustrate points; they are not points."],
          ["H", "Which best expresses 'The fact that there are not enough teachers in many of our schools is a serious problem' as a summary sentence?", "Many schools lack enough teachers.", "Teachers are serious.", "The fact is a problem.", "Schools are many.", "It keeps the meaning concisely."],
        ],
      },
      {
        week: 7,
        title: "Informal letter at senior level",
        subtopics: ["Layout and conventions", "Purposeful content", "Appropriate tone and language", "Common errors in informal letters"],
        objectives: ["Lay out an informal letter correctly", "Address all parts of the question fully", "Maintain a friendly yet correct tone", "Avoid slang, text-speak and irrelevant greetings"],
        lesson: {
          title: "The Informal Letter",
          summary: "Write purposeful informal letters that meet senior examination standards.",
          minutes: 45,
          notes: `## Layout
1. **Writer's address** (top right) with **date** below it.
2. **Salutation**: *Dear Chinedu,* / *Dear Uncle Musa,*
3. **Opening paragraph**: a brief, natural greeting and the **purpose** of the letter.
4. **Body**: well-developed paragraphs answering **every part** of the question.
5. **Closing paragraph**: a warm conclusion and regards.
6. **Subscription**: *Your friend,* / *Yours affectionately,* / *Your loving son,*
7. **First name** only.

## Content
Examination questions usually contain **two or three tasks**, e.g. *describe your new school **and** advise your friend on choosing subjects.* Cover each task fully.

## Tone and language
- Friendly, natural and **correct**.
- Contractions (*I'm, don't*) are acceptable.
- Avoid slang and text-speak: ✗ *wat's up, 2day, gonna, LOL*.
- Keep greetings short; don't spend a whole paragraph asking about everyone's health.

## Common errors
- Including the receiver's address ✗
- Writing *Yours faithfully* ✗
- Adding a heading ✗
- Signing with a full name and title ✗`,
          examples: `**Question:** Write a letter to your friend in another school describing an interesting event in your school and advising them on how to prepare for SS1 examinations.

**Opening:** *Dear Halima, I hope this letter finds you well. I am excited to tell you about our Cultural Day last Friday, and I also want to share some tips for our first-term examinations.*

**Closing:** *Do write back soon and tell me how your preparation is going. Your friend, Ruth.*`,
        },
        questions: [
          ["E", "Which salutation suits an informal letter to a friend?", "Dear Chinedu,", "Dear Sir,", "To whom it may concern,", "Dear Director,", "Friends are addressed by first name."],
          ["E", "Which is NOT included in an informal letter?", "the receiver's address", "the writer's address", "the date", "the salutation", "Only formal letters include the receiver's address."],
          ["E", "Where is the date written in an informal letter?", "below the writer's address", "above the salutation on the left", "after the subscription", "it is never written", "The date goes directly under the writer's address."],
          ["M", "Which expression is NOT suitable in an examination informal letter?", "wat's up, 2day I'm gonna tell u", "I hope this letter finds you well.", "I am writing to tell you about our Cultural Day.", "Do write back soon.", "Text-speak is not acceptable."],
          ["M", "If a question asks you to describe an event AND give advice, you should", "cover both tasks fully", "choose only one task", "write only the advice", "write only the description", "Each task carries marks."],
          ["M", "Which subscription suits a letter to your father?", "Your loving son,", "Yours faithfully,", "Yours sincerely, Director", "Respectfully, Sir", "It is warm and appropriate."],
          ["M", "The opening paragraph of an informal letter should", "greet briefly and state the purpose", "list the receiver's address", "contain a heading", "end with 'Yours faithfully'", "It introduces the letter's purpose."],
          ["H", "Which is the main weakness of an opening paragraph that asks about the health of ten relatives?", "It wastes words that should address the task.", "It is too formal.", "It uses the wrong tense.", "It includes a heading.", "Greetings should be brief."],
          ["H", "Which statement about contractions in informal letters is correct?", "They are acceptable because the tone is friendly.", "They are always forbidden.", "They must be used in every sentence.", "They replace the salutation.", "Contractions suit the informal tone."],
          ["H", "Which ending is best for an informal letter?", "Do write back soon and tell me your news. Your friend, Ruth.", "Yours faithfully, Ruth Adewale (Miss).", "Thank you for listening.", "I await your favourable reply. Yours faithfully.", "It is warm and correctly signed."],
        ],
      },
      {
        week: 8,
        title: "Sequence of tenses",
        subtopics: ["Consistency of tense in writing", "Tense after past reporting verbs", "Tense in time clauses", "Universal truths and exceptions"],
        objectives: ["Maintain consistent tense in continuous writing", "Apply sequence of tenses after past main verbs", "Use the present tense for future meaning in time clauses", "Recognise exceptions for universal truths"],
        lesson: {
          title: "Sequence of Tenses",
          summary: "Keep tenses consistent and logically related across clauses and paragraphs.",
          minutes: 40,
          notes: `## The principle
When the main verb is in the **past**, the verb in the subordinate clause usually moves into a **past** form.
*He **says** he **is** busy.* → *He **said** he **was** busy.*
*She **thinks** she **will** win.* → *She **thought** she **would** win.*

## Consistency in writing
Don't shift tenses without reason:
✗ *He entered the room and sits down.* ✓ *He **entered** the room and **sat** down.*

## Time clauses
After *when, as soon as, before, after, until, if*, use the **present** for future meaning:
✓ *I will call you **when** I **arrive**.* ✗ *when I will arrive*.

## Exceptions: universal truths
Facts that are always true stay in the **present**:
*The teacher **explained** that water **boils** at 100 °C.*
*We **learnt** that the earth **goes** round the sun.*

## Wishes and "It's time"
*I wish I **were** taller.* (present wish → past form)
*It is high time we **left**.* (past form for present meaning)`,
          examples: `**Example 1.** *He said that he ___ (be) tired.* *Answer:* **was**.

**Example 2.** *I will phone you as soon as I ___ (get) home.* *Answer:* **get**.

**Example 3.** *Our teacher told us that light ___ (travel) faster than sound.* *Answer:* **travels** (universal truth).`,
        },
        questions: [
          ["E", "Choose the correct option: 'The chairman announced that the meeting ___ over.'", "was", "is being", "will be being", "has be", "After a past reporting verb, backshift to 'was'."],
          ["E", "Which sentence keeps the tense consistent?", "He entered the room and sat down.", "He entered the room and sits down.", "He enters the room and sat down.", "He entered the room and will sit down yesterday.", "Both verbs are in the past."],
          ["E", "Choose the correct option: 'I will phone you as soon as I ___ home.'", "get", "will get", "got", "had got", "Time clauses use the present for future meaning."],
          ["M", "Choose the correct option: 'Our teacher told us that light ___ faster than sound.'", "travels", "travelled", "had travelled", "would travel", "Universal truths stay in the present."],
          ["M", "Choose the correct option: 'She thought she ___ win the prize.'", "would", "will", "shall", "can", "'Will' becomes 'would' after a past main verb."],
          ["M", "Choose the correct option: 'It is high time we ___ home.'", "left", "leave", "will leave", "are leaving", "'It is high time' is followed by a past form."],
          ["M", "Choose the correct option: 'I wish I ___ taller.'", "were", "am", "will be", "be", "A present wish uses the past subjunctive 'were'."],
          ["H", "Choose the correct option: 'We learnt in Geography that the earth ___ round the sun.'", "goes", "went", "had gone", "was going", "It is a permanent fact."],
          ["H", "Choose the correct option: 'Before the guests ___, we had cleaned the hall.'", "arrived", "arrive", "will arrive", "have arrived", "The earlier action takes the past perfect; the later one the simple past."],
          ["H", "Choose the correct option: 'He promised that he ___ the money the next day.'", "would return", "will return", "returns", "has returned", "A past promise about the future uses 'would'."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Oral English: diphthongs and triphthongs",
        subtopics: ["The eight diphthongs", "Spelling patterns of diphthongs", "Triphthongs", "Diphthong or pure vowel?"],
        objectives: ["Identify the eight English diphthongs", "Recognise the different spellings of each diphthong", "Identify triphthongs", "Distinguish diphthongs from similar pure vowels"],
        lesson: {
          title: "Gliding Vowels: Diphthongs and Triphthongs",
          summary: "Recognise vowel glides in speech and in examination questions.",
          minutes: 45,
          notes: `## Diphthongs
A **diphthong** is a vowel sound in which the tongue **glides** from one position to another within one syllable. English has **8**.

| Symbol | Examples |
|---|---|
| /eɪ/ | day, rain, great, eight, they |
| /aɪ/ | my, time, high, buy, eye |
| /ɔɪ/ | boy, coin, oil |
| /aʊ/ | cow, house, bough, now |
| /əʊ/ | go, boat, though, sew, soul |
| /ɪə/ | here, ear, beer, idea, pier |
| /eə/ | hair, care, bear, where, their |
| /ʊə/ | tour, poor (in some speakers), cure (with /j/) |

## Triphthongs
A **triphthong** glides through **three** vowel qualities: a diphthong + /ə/.
| Triphthong | Examples |
|---|---|
| /eɪə/ | player, layer |
| /aɪə/ | fire, tyre, choir, liar |
| /ɔɪə/ | employer, loyal |
| /aʊə/ | power, flour, hour, tower |
| /əʊə/ | lower, mower |

## Traps
- *great* has /eɪ/ (not /iː/); *break, steak* too.
- *though* /əʊ/ but *through* /uː/, *tough* /ʌf/, *bough* /aʊ/.
- *sew* /əʊ/ but *new* /juː/.
- *their, there* /eə/; *here, hear* /ɪə/.`,
          examples: `**Example 1.** Which word has /eɪ/: *great, greet, grit, get*? *Answer:* **great** (it rhymes with *late*, despite the *ea* spelling).

**Example 2.** Which word has a triphthong: *fire, fir, fear, far*? *Answer:* **fire** /aɪə/.

**Example 3.** Which word has /aʊ/: *bough, though, through, tough*? *Answer:* **bough**.`,
        },
        questions: [
          ["E", "How many diphthongs are there in RP English?", "8", "5", "12", "3", "There are eight diphthongs."],
          ["E", "Which word contains the diphthong /ɔɪ/?", "coin", "cone", "corn", "can", "'Coin' has /ɔɪ/, as in 'boy'."],
          ["E", "Which word contains the diphthong /aɪ/?", "buy", "bay", "boy", "bow (tie)", "'Buy' rhymes with 'my'."],
          ["M", "Which word contains the diphthong /eɪ/?", "steak", "steep", "step", "stick", "'Steak' rhymes with 'make' despite its 'ea' spelling."],
          ["M", "Which word contains a triphthong?", "fire", "fir", "fear", "far", "'Fire' has /aɪə/."],
          ["M", "Which word contains the diphthong /aʊ/?", "bough", "though", "through", "tough", "'Bough' rhymes with 'cow'."],
          ["M", "Which word contains the diphthong /əʊ/?", "sew", "new", "few", "dew", "'Sew' rhymes with 'go'."],
          ["H", "Which word contains the diphthong /eə/?", "their", "here", "hire", "her", "'Their' rhymes with 'hair'."],
          ["H", "Which word contains the triphthong /aʊə/?", "flour", "floor", "flow", "flu", "'Flour' is pronounced like 'flower'."],
          ["H", "Which word does NOT contain a diphthong?", "caught", "coat", "cow", "coin", "'Caught' has the pure long vowel /ɔː/."],
        ],
      },
      {
        week: 2,
        title: "Oral English: stress in compounds and derived words",
        subtopics: ["Stress in compound nouns", "Stress in compound adjectives and phrasal verbs", "Stress shift in derived words", "Stress in word families"],
        objectives: ["Stress compound nouns correctly", "Distinguish compounds from noun phrases by stress", "Predict stress shift in derived words", "Stress words in the same family correctly"],
        lesson: {
          title: "Stress in Longer and Compound Words",
          summary: "Apply stress rules to compounds and word families.",
          minutes: 40,
          notes: `## Compound nouns
Most compound nouns are stressed on the **first** element:
*BLACKboard, CLASSroom, GREENhouse, BOOKshop, AIRport, SUNlight*

## Compound or phrase?
Stress changes meaning:
| Compound (first stress) | Phrase (second stress) |
|---|---|
| a **BLACK**board (for writing) | a black **BOARD** (any board that is black) |
| a **GREEN**house (for plants) | a green **HOUSE** (a house painted green) |
| a **DARK**room (for developing photos) | a dark **ROOM** (any room without light) |

## Compound adjectives and phrasal verbs
Usually stressed on the **second** element: *well-KNOWN, bad-TEMpered, second-HAND*; phrasal verbs: *give UP, look AFter, turn DOWN*.
Nouns formed from phrasal verbs take **first** stress: *a BREAKdown, a TAKEoff, a WORKout*.

## Stress shift in word families
| Base | Derived |
|---|---|
| PHOtograph | phoTOgrapher, photoGRAphic |
| ECOnomy → e-CO-no-my | eco-NO-mic, e-CO-no-mist |
| poLItical | poLItics, poliTIcian |
| aCAdemy | acaDEmic |
| NAtion | NAtional, natioNAlity |
Suffixes **-ic, -ical, -ity, -ian, -tion** pull stress to the syllable **just before** them.`,
          examples: `**Example 1.** Stress *classroom*. *Answer:* **CLASS**room.

**Example 2.** Stress *photographer*. *Answer:* pho-**TO**-gra-pher.

**Example 3.** *Our car had a breakdown.* Stress *breakdown*: **BREAK**down (noun from a phrasal verb).`,
        },
        questions: [
          ["E", "Which part of the compound noun 'classroom' is stressed?", "CLASS", "ROOM", "both equally", "neither", "Compound nouns usually take first stress."],
          ["E", "Which part of 'airport' is stressed?", "AIR", "PORT", "both equally", "neither", "It is a compound noun: AIRport."],
          ["E", "Which part of the compound adjective 'well-known' is stressed?", "KNOWN", "WELL", "both equally", "neither", "Compound adjectives often take second stress."],
          ["M", "How is 'photographer' stressed?", "pho-TO-gra-pher", "PHO-to-gra-pher", "pho-to-GRA-pher", "pho-to-gra-PHER", "The stress shifts to the second syllable."],
          ["M", "How is 'economic' stressed?", "e-co-NO-mic", "E-co-no-mic", "e-CO-no-mic", "e-co-no-MIC", "-ic pulls stress to the syllable before it."],
          ["M", "How is 'politician' stressed?", "po-li-TI-cian", "PO-li-ti-cian", "po-LI-ti-cian", "po-li-ti-CIAN", "-ian pulls stress to the syllable before it."],
          ["M", "In 'Our car had a breakdown', how is 'breakdown' stressed?", "BREAKdown", "breakDOWN", "both equally", "neither", "Nouns from phrasal verbs take first stress."],
          ["H", "A 'GREENhouse' (first stress) is", "a glass building for growing plants", "any house painted green", "a government office", "a type of tree", "First stress marks the compound meaning."],
          ["H", "How is 'academic' stressed?", "a-ca-DE-mic", "A-ca-de-mic", "a-CA-de-mic", "a-ca-de-MIC", "-ic pulls stress to the syllable before it."],
          ["H", "How is 'nationality' stressed?", "na-tio-NA-li-ty", "NA-tio-na-li-ty", "na-TIO-na-li-ty", "na-tio-na-LI-ty", "-ity pulls stress to the syllable before it."],
        ],
      },
      {
        week: 3,
        title: "Clauses: types and functions",
        subtopics: ["Main and subordinate clauses revisited", "Adjectival clauses and their antecedents", "Adverbial clauses and their types", "Naming the grammatical function of a clause"],
        objectives: ["Identify main and subordinate clauses in complex sentences", "State the antecedent of an adjectival clause", "Classify adverbial clauses precisely", "Give the grammatical name and function of a clause as WAEC requires"],
        lesson: {
          title: "Naming Clauses and Their Functions",
          summary: "Give the grammatical name and function of clauses in the WAEC format.",
          minutes: 45,
          notes: `## The WAEC question
*"...what is the **grammatical name** of the expression, and what is its **function**?"*

## Model answers
| Expression (in its sentence) | Grammatical name | Function |
|---|---|---|
| *that we must work hard* (The truth is **that we must work hard**.) | noun clause | complement of the verb *is* |
| *what he said* (**What he said** annoyed us.) | noun clause | subject of the verb *annoyed* |
| *who won the prize* (The girl **who won the prize** is here.) | adjectival clause | qualifies the noun *girl* |
| *because it rained* (We stayed home **because it rained**.) | adverbial clause of reason | modifies the verb *stayed* |
| *when the bell rang* | adverbial clause of time | modifies the verb in the main clause |

## Antecedent
The noun an adjectival clause describes: *The book **which I borrowed** is lost.* — antecedent: **book**.

## Phrases too
- *In the morning* — prepositional (adverbial) phrase, modifies the verb.
- *The tall old man* — noun phrase, subject.
- *Running across the field* — participial phrase.

## Steps
1. Does the expression have a finite verb? → clause; otherwise phrase.
2. What job does it do? noun (subject/object/complement), adjective (qualifies a noun), adverb (modifies a verb).
3. State both **name** and **function**.`,
          examples: `**Example 1.** *The man **whose car was stolen** has reported to the police.* *Answer:* **adjectival clause**, qualifying the noun **man**.

**Example 2.** ***Whatever you decide** will be accepted.* *Answer:* **noun clause**, subject of the verb **will be accepted**.

**Example 3.** *She sang **as if her life depended on it**.* *Answer:* **adverbial clause of manner**, modifying the verb **sang**.`,
        },
        questions: [
          ["E", "In 'The girl who won the prize is here', 'who won the prize' is", "an adjectival clause", "a noun clause", "an adverbial clause", "a phrase", "It qualifies the noun 'girl'."],
          ["E", "In 'We stayed at home because it rained', 'because it rained' is", "an adverbial clause of reason", "a noun clause", "an adjectival clause", "a main clause", "It tells why we stayed."],
          ["E", "The noun an adjectival clause describes is its", "antecedent", "complement", "predicate", "object", "It is the noun the clause refers back to."],
          ["M", "In 'What he said annoyed us', what is the function of 'What he said'?", "subject of the verb 'annoyed'", "object of the verb 'annoyed'", "complement of 'us'", "qualifier of 'us'", "It answers 'What annoyed us?'"],
          ["M", "In 'The truth is that we must work hard', the function of the noun clause is", "complement of the verb 'is'", "subject of 'is'", "object of 'work'", "qualifier of 'truth'", "It completes the meaning after 'is'."],
          ["M", "In 'The book which I borrowed is lost', the antecedent of the relative clause is", "book", "I", "lost", "borrowed", "The clause describes the book."],
          ["M", "In 'Whatever you decide will be accepted', 'Whatever you decide' is", "a noun clause, subject of 'will be accepted'", "an adjectival clause qualifying 'you'", "an adverbial clause of time", "a prepositional phrase", "It is the subject of the main verb."],
          ["H", "In 'She sang as if her life depended on it', the grammatical name of 'as if her life depended on it' is", "adverbial clause of manner", "adverbial clause of time", "noun clause", "adjectival clause", "It tells how she sang."],
          ["H", "In 'Running across the field, the boy fell', 'Running across the field' is", "a participial phrase", "a noun clause", "an adverbial clause of reason", "a main clause", "It has no finite verb."],
          ["H", "In 'I cannot remember where I kept the key', the function of 'where I kept the key' is", "object of the verb 'remember'", "subject of 'remember'", "qualifier of 'key'", "adverbial of place modifying 'kept'", "It answers 'remember what?' so it is a noun clause."],
        ],
      },
      {
        week: 4,
        title: "Sentence types by structure and function",
        subtopics: ["Simple, compound and complex sentences", "Compound-complex sentences", "Declarative, interrogative, imperative and exclamatory sentences", "Varying sentences for effect"],
        objectives: ["Classify sentences by structure", "Classify sentences by function", "Combine simple sentences into compound and complex sentences", "Use varied sentences in writing"],
        lesson: {
          title: "Kinds of Sentences",
          summary: "Classify sentences by structure and purpose and use variety in writing.",
          minutes: 40,
          notes: `## By structure
| Type | Definition | Example |
|---|---|---|
| **Simple** | one main clause | *The rain fell.* |
| **Compound** | two or more main clauses joined by *and, but, or, so, yet* (or a semicolon) | *The rain fell, but the match continued.* |
| **Complex** | one main clause + one or more subordinate clauses | *The match continued although the rain fell.* |
| **Compound-complex** | two or more main clauses + at least one subordinate clause | *When the rain fell, the players ran off, but the fans stayed.* |

A simple sentence may be long: *The tired old farmer from Oyo walked slowly home after a long day on his farm.* — still **one** clause.

## By function
| Type | Purpose | Ends with |
|---|---|---|
| **Declarative** | makes a statement | . |
| **Interrogative** | asks a question | ? |
| **Imperative** | gives a command or request | . or ! |
| **Exclamatory** | expresses strong feeling | ! |
*What a beautiful day!* (exclamatory) / *Close the window.* (imperative)

## Sentence variety
Good writing mixes short simple sentences for impact with longer complex sentences for detail.`,
          examples: `**Example 1.** *I called him, but he did not answer.* *Answer:* **compound**.

**Example 2.** *Although she was tired, she finished the work.* *Answer:* **complex**.

**Example 3.** Combine into a complex sentence: *He was ill. He went to school.* *Answer:* **Although he was ill, he went to school.**`,
        },
        questions: [
          ["E", "A sentence with only one main clause is", "simple", "compound", "complex", "compound-complex", "It has one subject–finite verb unit."],
          ["E", "'Close the window.' is", "an imperative sentence", "an interrogative sentence", "an exclamatory sentence", "a declarative sentence", "It gives a command."],
          ["E", "'What a beautiful day!' is", "an exclamatory sentence", "an imperative sentence", "an interrogative sentence", "a compound sentence", "It expresses strong feeling."],
          ["M", "'I called him, but he did not answer.' is", "compound", "simple", "complex", "compound-complex", "Two main clauses joined by 'but'."],
          ["M", "'Although she was tired, she finished the work.' is", "complex", "compound", "simple", "compound-complex", "One main clause and one subordinate clause."],
          ["M", "Which combines 'He was ill. He went to school.' into a complex sentence?", "Although he was ill, he went to school.", "He was ill, and he went to school.", "He was ill; he went to school.", "He was ill. He went to school.", "'Although' introduces a subordinate clause."],
          ["M", "'The tired old farmer from Oyo walked slowly home after a long day.' is", "simple", "compound", "complex", "compound-complex", "It has only one finite verb, 'walked'."],
          ["H", "'When the rain fell, the players ran off, but the fans stayed.' is", "compound-complex", "complex", "compound", "simple", "Two main clauses plus one subordinate clause."],
          ["H", "Which sentence is complex?", "The boy who broke the window apologised.", "The boy broke the window and apologised.", "The boy broke the window.", "Break the window!", "It contains the subordinate clause 'who broke the window'."],
          ["H", "Why do good writers vary sentence types?", "To create rhythm, emphasis and interest", "Because short sentences are always wrong", "To make every sentence equally long", "Because examiners forbid simple sentences", "Variety keeps writing lively and clear."],
        ],
      },
      {
        week: 5,
        title: "Formal letter: application and complaint",
        subtopics: ["The letter of application", "The letter of complaint", "Formal tone and precision", "Common errors in formal letters"],
        objectives: ["Write a letter of application with relevant qualifications", "Write a firm but polite letter of complaint", "Maintain formal tone and precise language", "Avoid common layout and language errors"],
        lesson: {
          title: "Application and Complaint Letters",
          summary: "Write two of the most common formal letters to examination standard.",
          minutes: 45,
          notes: `## Layout reminder
Writer's address and date (right) → receiver's address (left) → *Dear Sir/Madam,* → **HEADING** → body → *Yours faithfully,* → signature and full name.

## Letter of application
**Purpose:** to apply for a job, admission, scholarship or position.
Paragraphs:
1. State the position and where you heard about it.
2. Give relevant **qualifications**, skills and experience.
3. Explain why you are suitable.
4. State availability and request an interview; mention enclosures.
*I write to apply for the post of … as advertised in … of …*

## Letter of complaint
**Purpose:** to report a problem and request action.
Paragraphs:
1. State the problem clearly (what, where, since when).
2. Give details and effects (evidence, dates).
3. State what you want done.
4. Close politely but firmly.
*I wish to draw your attention to…* / *I should be grateful if urgent action were taken.*

## Tone
Formal, polite, **factual** — never rude or emotional.
✗ *Your workers are useless!* ✓ *The repairs have not been carried out despite two reports.*

## Common errors
- *Yours sincerely* with *Dear Sir* ✗
- Missing heading ✗
- Slang or contractions ✗
- Irrelevant family greetings ✗`,
          examples: `**Heading:** *APPLICATION FOR THE POST OF LIBRARY ASSISTANT*
*I write to apply for the post of Library Assistant advertised on the school notice board on 2nd February, 2026.*

**Heading:** *COMPLAINT ABOUT IRREGULAR WATER SUPPLY IN OKE-ADO*
*I wish to draw your attention to the irregular water supply in Oke-Ado, which has persisted since January.*`,
        },
        questions: [
          ["E", "Which opening suits a letter of application?", "I write to apply for the post of Library Assistant.", "Hi, I want the job.", "How are you and your family?", "I am writing to complain about your workers.", "It states the purpose formally."],
          ["E", "Which subscription goes with 'Dear Sir,' in a formal letter?", "Yours faithfully,", "Yours sincerely,", "Your friend,", "Yours lovingly,", "Unnamed recipients take 'Yours faithfully'."],
          ["E", "A letter of complaint should be", "polite but firm", "rude and angry", "humorous", "vague", "Formal complaints remain courteous."],
          ["M", "Which sentence is best in a letter of complaint?", "The repairs have not been carried out despite two reports.", "Your workers are useless and lazy!", "I am very, very angry, you hear?", "Fix it or else!", "It is factual and formal."],
          ["M", "In a letter of application, the second paragraph usually contains", "relevant qualifications and experience", "a complaint", "a poem", "the receiver's address", "It shows why you qualify."],
          ["M", "Which heading best suits a complaint about water supply?", "COMPLAINT ABOUT IRREGULAR WATER SUPPLY IN OKE-ADO", "WATER", "HELP!!!", "A LETTER FROM ME", "It is clear and specific."],
          ["M", "Which phrase introduces a complaint formally?", "I wish to draw your attention to…", "Guess what happened…", "Hey, listen…", "You won't believe this…", "It is formal and polite."],
          ["H", "What should the final paragraph of a letter of application do?", "state availability and request an interview", "list the writer's hobbies only", "complain about the employer", "repeat the heading", "It ends with a clear request."],
          ["H", "Which is an error in a formal letter?", "using contractions such as 'don't'", "including a heading", "including the receiver's address", "signing with a full name", "Formal letters avoid contractions."],
          ["H", "Which closing request is most appropriate in a complaint letter?", "I should be grateful if urgent action were taken.", "Do something now or I will report you.", "Please reply me urgently, abeg.", "I hope you enjoy your day.", "It is formal and precise."],
        ],
      },
      {
        week: 6,
        title: "Narrative essay",
        subtopics: ["Elements of a good story", "Narrative structure", "Point of view and tense", "Dialogue and vivid detail"],
        objectives: ["Plan a narrative with a clear plot and conflict", "Maintain consistent point of view and past tense", "Use dialogue and descriptive detail effectively", "Write an ending that fits the given title or ending sentence"],
        lesson: {
          title: "Telling a Good Story",
          summary: "Plan and write gripping, well-structured narratives.",
          minutes: 45,
          notes: `## Elements
- **Characters** — few, clearly drawn.
- **Setting** — time and place.
- **Plot** — events with a **conflict** and **resolution**.
- **Theme** — a lesson or message, often stated by the title.

## Structure
1. **Opening** — set the scene and hook the reader.
2. **Rising action** — develop the problem.
3. **Climax** — the turning point.
4. **Resolution** — how it ended.
5. **Conclusion** — reflection or lesson (especially for proverb titles).

## Point of view and tense
- First person (*I*) for personal experiences; third person (*he, she*) for other stories.
- Use the **past tense** consistently.

## Making it vivid
- **Show, don't tell**: ✗ *I was scared.* ✓ *My knees knocked and my mouth went dry.*
- Use dialogue sparingly and punctuate it correctly.
- Use time connectors: *suddenly, moments later, at last*.

## Examination titles
- *Write a story that illustrates the saying "Haste makes waste."*
- *Write a story ending with "…and I learnt my lesson."*
Your story must **clearly illustrate** the saying or **end exactly** with the given words.`,
          examples: `**Hooking opening:** *The lights went out just as the principal began reading the names of the prize-winners.*

**Show, don't tell:** *Kunle's hands trembled as he unfolded the result slip; a single drop of sweat slid down his nose.*

**Dialogue:** *"Where is the money?" Mama asked quietly. I stared at the floor.*`,
        },
        questions: [
          ["E", "Which tense is usually used in a narrative essay?", "past tense", "future tense", "present perfect continuous", "conditional", "Stories recount past events."],
          ["E", "The turning point of a story is its", "climax", "setting", "exposition", "title", "It is the moment of highest tension."],
          ["E", "A story told using 'I' is written in the", "first person", "second person", "third person", "passive voice", "The narrator is a character."],
          ["M", "Which sentence 'shows' rather than 'tells' fear?", "My knees knocked and my mouth went dry.", "I was scared.", "Fear is bad.", "I felt fear a lot.", "It uses vivid physical detail."],
          ["M", "Which opening best hooks the reader?", "The lights went out just as the principal began reading the names of the prize-winners.", "This is my story.", "I will now write a story.", "Once there was a day.", "It creates suspense at once."],
          ["M", "Which dialogue is correctly punctuated?", "\"Where is the money?\" Mama asked quietly.", "\"Where is the money\"? Mama asked quietly.", "Where is the money? \"Mama asked quietly.\"", "\"Where is the money? Mama asked quietly.\"", "The question mark goes inside the quotation marks."],
          ["M", "The struggle or problem that drives a story is its", "conflict", "setting", "tone", "point of view", "Conflict creates tension."],
          ["H", "If asked to write a story ending with '…and I learnt my lesson', you should", "end with exactly those words after events that lead to them", "start with those words", "use them as the title only", "avoid using them", "The ending must be exactly as given and must fit the story."],
          ["H", "A story illustrating 'Haste makes waste' should show", "a character suffering loss because of hurry", "a character winning a race", "a character saving money", "a character being patient and succeeding without any conflict", "The events must prove the saying."],
          ["H", "Why should a short examination story have few characters?", "To keep the plot focused and well developed", "Because many characters are forbidden", "Because characters must be animals", "To make the story longer", "Few characters allow depth within the word limit."],
        ],
      },
      {
        week: 7,
        title: "Register: law, government and politics",
        subtopics: ["Vocabulary of the courts", "Vocabulary of government", "Vocabulary of elections", "Using register accurately"],
        objectives: ["Use legal vocabulary accurately", "Use vocabulary of government and administration", "Use vocabulary related to elections", "Complete sentences with appropriate register words"],
        lesson: {
          title: "Register: Law and Government",
          summary: "Build the specialised vocabulary of law, government and elections.",
          minutes: 40,
          notes: `## The law courts
| Word | Meaning |
|---|---|
| plaintiff | person who brings a civil case |
| defendant | person accused or sued |
| prosecution | side that brings a criminal charge |
| counsel / advocate | lawyer who argues a case |
| verdict | decision on guilt |
| sentence | punishment given |
| acquit | declare not guilty |
| adjourn | postpone a hearing |
| bail | temporary release on security |
| witness | person who gives evidence |
| affidavit | written statement made on oath |
| appeal | request to a higher court to review |

## Government
| Word | Meaning |
|---|---|
| legislature | law-making arm |
| executive | arm that carries out laws |
| judiciary | arm that interprets laws |
| bill | proposed law |
| act | bill passed into law |
| constitution | supreme law of a country |
| cabinet | ministers who advise the president |

## Elections
*electorate* (all voters), *constituency*, *ballot*, *candidate*, *manifesto*, *polling unit*, *returning officer*, *rigging*, *by-election*, *franchise* (right to vote).`,
          examples: `**Example 1.** *The judge ___ the case till next Monday.* *Answer:* **adjourned**.

**Example 2.** *The accused was ___ because there was no evidence.* *Answer:* **acquitted**.

**Example 3.** *A candidate's written list of promises is a ___.* *Answer:* **manifesto**.`,
        },
        questions: [
          ["E", "The arm of government that makes laws is the", "legislature", "executive", "judiciary", "cabinet", "Legislators make laws."],
          ["E", "A proposed law is called a", "bill", "verdict", "manifesto", "ballot", "A bill becomes an act when passed."],
          ["E", "All the people qualified to vote in an election are the", "electorate", "candidates", "judiciary", "defendants", "The electorate are the voters."],
          ["M", "The judge ___ the case till next Monday.", "adjourned", "acquitted", "sentenced", "appealed", "To adjourn is to postpone a hearing."],
          ["M", "The accused was ___ because there was no evidence.", "acquitted", "convicted", "sentenced", "remanded", "To acquit is to declare not guilty."],
          ["M", "A candidate's published programme of promises is a", "manifesto", "constituency", "affidavit", "franchise", "The manifesto sets out plans."],
          ["M", "A written statement made on oath is", "an affidavit", "a verdict", "a ballot", "a bill", "Affidavits are sworn statements."],
          ["H", "The person who brings a civil case to court is the", "plaintiff", "defendant", "witness", "counsel for the defence", "The plaintiff starts the civil action."],
          ["H", "The right to vote is known as", "franchise", "manifesto", "bail", "adjournment", "Franchise (suffrage) is the right to vote."],
          ["H", "A request to a higher court to review a judgement is", "an appeal", "a verdict", "an acquittal", "a by-election", "Appeals go to higher courts."],
        ],
      },
      {
        week: 8,
        title: "Idioms and proverbs in context",
        subtopics: ["Interpreting idioms in sentences", "Common English proverbs", "Idiomatic expressions in examinations", "Avoiding literal interpretations"],
        objectives: ["Interpret idiomatic expressions in context", "Explain common English proverbs", "Choose the correct interpretation in examination questions", "Use idioms appropriately in writing"],
        lesson: {
          title: "Interpreting Idioms and Proverbs",
          summary: "Choose the intended meaning of idioms and proverbs, avoiding literal traps.",
          minutes: 40,
          notes: `## The examination format
*Choose the option that best explains the information conveyed by the sentence:*
*Ngozi's success was a **feather in her father's cap**.*
(a) her father wore a cap (b) **her father was proud of her success** …
Always look for the **figurative** meaning.

## Idioms
| Idiom | Meaning |
|---|---|
| a feather in one's cap | an achievement to be proud of |
| to bite off more than one can chew | to attempt more than one can manage |
| to beat about the bush | to avoid the main point |
| to be on the horns of a dilemma | to face two difficult choices |
| to take the bull by the horns | to face a difficulty boldly |
| to face the music | to accept the consequences |
| to throw in the towel | to give up |
| a white elephant | something costly but useless |
| to have cold feet | to lose courage |
| to add fuel to the fire | to make a bad situation worse |
| at the eleventh hour | at the last moment |
| to hold one's breath | to wait anxiously |

## Proverbs
| Proverb | Meaning |
|---|---|
| A stitch in time saves nine. | Fixing a problem early prevents bigger trouble. |
| Too many cooks spoil the broth. | Too many people in charge ruin a task. |
| Empty vessels make the most noise. | Those who know least talk most. |
| Don't count your chickens before they hatch. | Don't rely on results before they happen. |
| Every cloud has a silver lining. | Something good comes from bad situations. |`,
          examples: `**Example 1.** *The new stadium has become a white elephant.* Meaning: it is **expensive but not useful**.

**Example 2.** *The candidate got cold feet on the day of the debate.* Meaning: he **lost his courage**.

**Example 3.** *Too many cooks spoil the broth.* Meaning: when **too many people** direct a task, it **fails**.`,
        },
        questions: [
          ["E", "'The new stadium has become a white elephant' means the stadium is", "costly but not useful", "painted white", "home to elephants", "very popular", "A white elephant is costly and useless."],
          ["E", "'He got cold feet before the debate' means he", "lost courage", "felt cold", "hurt his feet", "won the debate", "To get cold feet is to lose courage."],
          ["E", "'Stop beating about the bush' means", "stop avoiding the main point", "stop clearing the bush", "stop hunting animals", "stop running", "It means come to the point."],
          ["M", "'Ngozi's success was a feather in her father's cap' means", "her father was proud of her achievement", "her father wore a feathered cap", "her father was jealous", "her father lost his cap", "It is an achievement bringing honour."],
          ["M", "'The minister decided to take the bull by the horns' means he", "faced the difficulty boldly", "went to a farm", "fought an animal", "avoided the problem", "It means confronting a problem directly."],
          ["M", "'The team threw in the towel at half time' means they", "gave up", "cleaned the pitch", "celebrated", "changed their shirts", "To throw in the towel is to surrender."],
          ["M", "'The approval came at the eleventh hour' means it came", "at the last moment", "at 11 o'clock", "very early", "eleven days late", "It means just in time."],
          ["H", "'A stitch in time saves nine' means", "dealing with a problem early prevents bigger trouble", "tailors should work quickly", "nine stitches are needed", "time is money", "Early action saves greater effort later."],
          ["H", "'Empty vessels make the most noise' suggests that", "those who know least often talk most", "empty pots are loud", "noise is useful", "vessels should be filled", "It criticises boastful ignorance."],
          ["H", "'By insulting the referee, he only added fuel to the fire' means he", "made a bad situation worse", "helped to settle the quarrel", "lit a fire", "apologised", "It means worsening a conflict."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Oral English: intonation patterns",
        subtopics: ["The tonic syllable", "The falling tune (Tune 1)", "The rising tune (Tune 2)", "Intonation and attitude"],
        objectives: ["Identify the tonic syllable in an utterance", "Use Tune 1 for statements, commands and wh-questions", "Use Tune 2 for yes/no questions, requests and incomplete utterances", "Explain how intonation conveys attitude"],
        lesson: {
          title: "Intonation: Tunes 1 and 2",
          summary: "Analyse and use the falling and rising tunes of English.",
          minutes: 40,
          notes: `## The tonic syllable
In each tone group, one syllable carries the main pitch movement — the **tonic** (nucleus). It is usually the **last content word**:
*I'm going to the MARket.*

## Tune 1 — falling (↘)
Used for:
- **statements**: *The train has ↘LEFT.*
- **wh-questions**: *Where do you ↘LIVE?*
- **commands**: *Sit ↘DOWN.*
- **exclamations**: *What a ↘SURprise!*
- **question tags seeking agreement**: *It's hot, ↘ISN'T it?*

## Tune 2 — rising (↗)
Used for:
- **yes/no questions**: *Are you ↗READY?*
- **polite requests**: *Could you open the ↗WINdow?*
- **incomplete utterances and lists**: *If you ↗COME, …* / *pens ↗, books ↗ and ↘RULers*
- **question tags seeking information**: *You're coming, ↗AREN'T you?*
- **statements used as questions** (surprise): *You failed ↗MATHS?*

## Attitude
- A falling tune on a yes/no question may sound **impatient**.
- A rising tune on a statement shows **doubt or surprise**.
- A fall-rise can signal **reservation**: *It's ↘↗GOOD…* (but…)`,
          examples: `**Example 1.** Tune for *Where are you going?* *Answer:* **Tune 1 (falling)**.

**Example 2.** Tune for *Will you come tomorrow?* *Answer:* **Tune 2 (rising)**.

**Example 3.** *When I get home, I'll call you.* Tune on *home*: **rising** (incomplete); on *call you*: **falling**.`,
        },
        questions: [
          ["E", "Tune 1 is a", "falling tune", "rising tune", "level tune", "fall-rise only", "Tune 1 falls at the end."],
          ["E", "Which tune is used for 'Are you ready?'", "Tune 2 (rising)", "Tune 1 (falling)", "no tune", "a level tune", "Yes/no questions usually rise."],
          ["E", "Which tune is used for 'Sit down.'", "Tune 1 (falling)", "Tune 2 (rising)", "a level tune", "no tune", "Commands usually fall."],
          ["M", "The syllable that carries the main pitch movement in a tone group is the", "tonic syllable", "weak syllable", "silent syllable", "prefix", "It is also called the nucleus."],
          ["M", "In 'I'm going to the market', the tonic syllable is usually on", "MAR in 'market'", "I'm", "to", "the", "It falls on the last content word."],
          ["M", "Which tune is used for 'Could you open the window?' as a polite request?", "Tune 2 (rising)", "Tune 1 (falling)", "a level tune", "a triple fall", "Polite requests usually rise."],
          ["M", "'You failed Maths?' said with a rising tune expresses", "surprise or disbelief", "a firm statement", "a command", "a wh-question", "A rising tune turns a statement into a question."],
          ["H", "In 'When I get home, I'll call you', the tune on 'home' is", "rising, because the utterance is incomplete", "falling, because it is a statement", "level", "falling, because it is a command", "Incomplete utterances rise."],
          ["H", "A falling tune on a yes/no question may make the speaker sound", "impatient or insistent", "polite and uncertain", "surprised", "confused", "It removes the usual tentative rise."],
          ["H", "In the list 'pens, books and rulers', the voice falls on", "rulers", "pens", "books", "and", "The final item falls; earlier items rise."],
        ],
      },
      {
        week: 2,
        title: "Descriptive essay",
        subtopics: ["Purpose of description", "Selecting and ordering details", "Using sensory and figurative language", "Describing people, places and events"],
        objectives: ["State the purpose of a descriptive essay", "Organise details spatially or by importance", "Use sensory images and figures of speech effectively", "Write vivid descriptions of people, places and events"],
        lesson: {
          title: "Painting Pictures with Words",
          summary: "Write descriptions that let the reader see, hear and feel the subject.",
          minutes: 45,
          notes: `## Purpose
A descriptive essay creates a **vivid picture** of a person, place, object or event in the reader's mind.
Titles: *Describe your favourite teacher. / A busy motor park. / The celebration of a festival in your community.*

## Organisation
- **Places**: spatial order — from entrance inwards, left to right, near to far.
- **People**: appearance → personality → habits → why they matter.
- **Events**: chronological order with descriptive detail.
Start with a general impression; end with a personal reflection.

## Language
- **Sensory detail**: sight, sound, smell, taste, touch.
  *The aroma of roasted corn drifted across the noisy park.*
- **Precise vocabulary**: *hawkers, conductors, touts* instead of *people*.
- **Figurative language**: similes, metaphors, personification — used sparingly.
- **Tense**: present for places that still exist; past for past events.
- **Adjectives and adverbs** chosen carefully — avoid piling up empty words like *very very nice*.

## Avoid
A list of dull facts; telling a long story instead of describing; exaggerated clichés.`,
          examples: `**Opening (place):** *At six in the morning, Ojota Motor Park is already awake. Buses hoot, conductors bellow destinations, and the smell of fried akara mingles with diesel fumes.*

**Person:** *Mrs Okon is a small woman with a big voice. Her glasses sit low on her nose, and she peers over them whenever a student gives a careless answer.*`,
        },
        questions: [
          ["E", "The main purpose of a descriptive essay is to", "create a vivid picture in the reader's mind", "argue a point", "give instructions", "report statistics only", "Description makes the subject vivid."],
          ["E", "Which title requires a descriptive essay?", "A Busy Motor Park", "Should Corporal Punishment Be Banned?", "How to Bake Bread", "Write a Letter to Your Principal", "It asks for a picture of a place."],
          ["E", "Details that appeal to sight, sound, smell, taste and touch are", "sensory details", "statistics", "arguments", "headings", "They engage the senses."],
          ["M", "Which sentence uses sensory detail most effectively?", "The aroma of roasted corn drifted across the noisy park.", "The park was nice.", "There were many things in the park.", "I liked the park very very much.", "It appeals to smell and hearing."],
          ["M", "When describing a place, a good order is", "spatial, e.g. from the entrance inwards", "alphabetical", "random", "from the least to most expensive items", "Spatial order guides the reader."],
          ["M", "Which word is most precise for people who sell goods by walking around a motor park?", "hawkers", "people", "persons", "individuals", "Precise vocabulary strengthens description."],
          ["M", "Which sentence describes a person's appearance vividly?", "Her glasses sit low on her nose, and she peers over them.", "She is a woman.", "She is okay.", "She is very very nice.", "It gives a concrete visual detail."],
          ["H", "Which weakness should a descriptive essay avoid?", "a dull list of facts without vivid detail", "using sensory detail", "using precise words", "clear organisation", "Description must bring the subject to life."],
          ["H", "Which tense is suitable for describing a place that still exists?", "the present tense", "the future perfect", "the past perfect only", "the conditional", "Present tense describes current reality."],
          ["H", "Which sentence uses personification in description?", "The old market groans under the weight of traders.", "The market is big.", "The market has many traders.", "The market opens at six.", "The market is given a human action."],
        ],
      },
      {
        week: 3,
        title: "Article writing",
        subtopics: ["Features of an article", "Titles and bylines", "Engaging the reader", "Articles for school magazines and newspapers"],
        objectives: ["State the features of an article for publication", "Write a suitable title and byline", "Engage a wide readership with appropriate tone", "Write an organised article on a given topic"],
        lesson: {
          title: "Writing an Article",
          summary: "Write articles for magazines and newspapers that inform and persuade a wide audience.",
          minutes: 45,
          notes: `## What is an article?
A piece of writing for **publication** in a newspaper, magazine or school bulletin, meant for a **general audience**.
Example task: *Write an article for your school magazine on "The Dangers of Social Media Addiction".*

## Format
1. **Title** — clear and attention-grabbing, e.g. *SOCIAL MEDIA: FRIEND OR FOE?*
2. **Byline** — *by Adaeze Nwosu, SS1 Science* (writer's name and class/position).
3. **Introduction** — hook the reader: a question, a fact, a short scene.
4. **Body** — several paragraphs, each developing one aspect (causes, effects, solutions).
5. **Conclusion** — summary and a call to action.
6. Optionally, the writer's name at the end instead of a byline (follow the question).

## No letter features
No addresses, no *Dear Sir*, no *Yours faithfully*.

## Tone and style
- Semi-formal and engaging; suits readers of the publication.
- Address readers directly: *Have you ever…?*
- Use facts, examples and rhetorical questions.
- Paragraphs should be clear and not too long.`,
          examples: `**Title:** *SOCIAL MEDIA: FRIEND OR FOE?*
**Byline:** *by Adaeze Nwosu, SS1 Science*

**Opening:** *It is midnight. The house is silent except for the soft glow of a phone screen under a blanket. Sound familiar? For many students, social media has become a habit that is hard to break.*

**Closing:** *Let us use social media wisely — as a tool, not a master.*`,
        },
        questions: [
          ["E", "An article is written mainly for", "publication to a general audience", "one close friend only", "a judge in court", "a private diary", "Articles are published for many readers."],
          ["E", "The line showing the writer's name under the title of an article is the", "byline", "subscription", "salutation", "heading address", "It gives the author's name."],
          ["E", "Which is NOT a feature of an article?", "the receiver's address", "a title", "an introduction", "a conclusion", "Articles are not letters."],
          ["M", "Which is the most engaging title for an article on social media addiction?", "SOCIAL MEDIA: FRIEND OR FOE?", "ARTICLE", "MY ESSAY", "WRITING", "It arouses curiosity."],
          ["M", "Which opening best hooks readers?", "It is midnight, and a phone screen glows under a blanket.", "This article is about social media.", "I will write about social media.", "Social media is a topic.", "It creates a vivid scene."],
          ["M", "The tone of an article in a school magazine should be", "semi-formal and engaging", "rude and slangy", "strictly legal", "extremely emotional", "It suits a general student audience."],
          ["M", "Which ending is a call to action?", "Let us use social media wisely — as a tool, not a master.", "That is all.", "Yours faithfully.", "The end of my article.", "It urges readers to act."],
          ["H", "How does an article differ from a formal letter?", "It has a title and byline but no addresses or subscription", "It must have two addresses", "It must end with 'Yours faithfully'", "It is always shorter than 50 words", "Articles are published pieces, not letters."],
          ["H", "Which rhetorical question suits an article on examination malpractice?", "Is a certificate worth anything if it is not earned?", "What is your address?", "Did you eat breakfast?", "Who is the principal?", "It makes readers reflect on the issue."],
          ["H", "Which organisation suits an article on 'Road Accidents in Nigeria'?", "introduction, causes, effects, solutions, conclusion", "salutation, heading, subscription", "list of names only", "a single long paragraph", "Clear sections aid understanding."],
        ],
      },
      {
        week: 4,
        title: "Register: religion and the media",
        subtopics: ["Vocabulary of religion", "Vocabulary of print media", "Vocabulary of broadcasting and digital media", "Using register in context"],
        objectives: ["Use vocabulary associated with religion accurately", "Use vocabulary of newspapers and magazines", "Use vocabulary of radio, television and online media", "Complete sentences with the correct register words"],
        lesson: {
          title: "Register: Religion and the Media",
          summary: "Build precise vocabulary for religion, journalism and broadcasting.",
          minutes: 40,
          notes: `## Religion
| Word | Meaning |
|---|---|
| congregation | people gathered for worship |
| clergy | religious leaders collectively |
| sermon | religious talk delivered to worshippers |
| pilgrimage | journey to a holy place |
| worship | acts of honouring God |
| sacrifice | offering made to God |
| devout | deeply religious |
| fasting | abstaining from food for religious reasons |
| sacred | holy |
| prophet | messenger of God |

## Print media
| Word | Meaning |
|---|---|
| editor | person in charge of content |
| editorial | article giving the paper's opinion |
| headline | title of a news story |
| columnist | regular writer of a column |
| correspondent | reporter in a particular place or field |
| circulation | number of copies distributed |
| tabloid | popular, sensational newspaper |

## Broadcasting and digital media
*anchor, newscaster, broadcast, live coverage, commentator, studio, viewers, listeners, podcast, blogger, subscriber, viral, breaking news.*`,
          examples: `**Example 1.** *The pastor's ___ was on forgiveness.* *Answer:* **sermon**.

**Example 2.** *The newspaper's ___ criticised the new tax.* *Answer:* **editorial**.

**Example 3.** *Many pilgrims travel to Mecca on ___.* *Answer:* **pilgrimage** (the Hajj).`,
        },
        questions: [
          ["E", "People gathered for worship are called the", "congregation", "editorial", "audience of a match", "correspondents", "A congregation worships together."],
          ["E", "The title of a news story in a newspaper is its", "headline", "byline", "circulation", "editorial", "Headlines summarise stories."],
          ["E", "A journey to a holy place is a", "pilgrimage", "broadcast", "sermon", "column", "Pilgrims travel to sacred places."],
          ["M", "The pastor's ___ was on forgiveness.", "sermon", "headline", "editorial", "circulation", "A sermon is a religious talk."],
          ["M", "The newspaper's ___ criticised the new tax policy.", "editorial", "congregation", "pilgrimage", "clergy", "The editorial states the paper's opinion."],
          ["M", "The number of copies of a newspaper distributed is its", "circulation", "headline", "column", "broadcast", "Circulation measures distribution."],
          ["M", "A reporter stationed in a particular place is a", "correspondent", "congregation", "clergy", "subscriber", "Correspondents report from locations."],
          ["H", "A deeply religious person can be described as", "devout", "sacred", "viral", "editorial", "'Devout' describes strong faith."],
          ["H", "A video that spreads very quickly online is said to have gone", "viral", "sacred", "devout", "editorial", "'Viral' describes rapid online spread."],
          ["H", "The main presenter who links news items on television is the", "anchor", "columnist", "editor-in-chief of a magazine", "correspondent abroad", "The anchor presents the programme."],
        ],
      },
      {
        week: 5,
        title: "Literature: introduction to drama",
        subtopics: ["Features of drama", "Types of drama", "Dramatic terms", "Reading a play script"],
        objectives: ["State the features of drama", "Distinguish tragedy, comedy, tragicomedy and farce", "Explain common dramatic terms", "Interpret stage directions and dialogue in a play script"],
        lesson: {
          title: "Understanding Drama",
          summary: "Learn the forms and technical terms of drama for literature and English.",
          minutes: 40,
          notes: `## What is drama?
A literary form written to be **performed** on stage. The story is told mainly through **dialogue** and **action**.

## Types
| Type | Features |
|---|---|
| **Tragedy** | serious; the hero suffers downfall, often through a **tragic flaw** |
| **Comedy** | light and humorous; ends happily |
| **Tragicomedy** | mixes tragic and comic elements |
| **Farce** | exaggerated, absurd humour and situations |
| **Melodrama** | sensational events, exaggerated emotions, clear heroes and villains |

## Dramatic terms
| Term | Meaning |
|---|---|
| act / scene | major / minor divisions of a play |
| dialogue | conversation between characters |
| monologue | long speech by one character to others |
| soliloquy | a character speaking thoughts **alone** on stage |
| aside | a remark to the audience that other characters **do not hear** |
| stage directions | instructions in italics or brackets about action and setting |
| dramatic irony | the audience knows something a character does not |
| protagonist / antagonist | main character / opponent |
| cast | list of actors / characters |
| prologue / epilogue | introduction / closing speech |
| tragic flaw | weakness that causes the hero's downfall |`,
          examples: `**Example 1.** A character alone on stage speaks his fears aloud: **soliloquy**.

**Example 2.** *(aside) "If only he knew the truth!"* — only the audience hears: **aside**.

**Example 3.** The audience knows the drink is poisoned; the king does not: **dramatic irony**.`,
        },
        questions: [
          ["E", "Drama is written mainly to be", "performed on stage", "sung in church", "read as a novel", "painted", "Plays are performed."],
          ["E", "A play that ends happily with humour is a", "comedy", "tragedy", "melodrama in all cases", "elegy", "Comedies amuse and end happily."],
          ["E", "The major divisions of a play are called", "acts", "stanzas", "chapters", "verses", "Plays are divided into acts and scenes."],
          ["M", "A character alone on stage speaking thoughts aloud is delivering a", "soliloquy", "dialogue", "prologue", "chorus", "A soliloquy reveals inner thoughts."],
          ["M", "A remark to the audience that other characters do not hear is", "an aside", "a dialogue", "an epilogue", "a monologue to a crowd", "Asides are shared only with the audience."],
          ["M", "When the audience knows something a character does not, it is", "dramatic irony", "comic relief", "a soliloquy", "a prologue", "It creates suspense or tension."],
          ["M", "Instructions in brackets about actions and setting are", "stage directions", "dialogues", "asides", "epilogues", "They guide performance."],
          ["H", "The weakness that leads to a tragic hero's downfall is the", "tragic flaw", "comic relief", "prologue", "aside", "It is also called hamartia."],
          ["H", "A play with exaggerated, absurd humour and situations is a", "farce", "tragedy", "tragicomedy with a sad ending", "documentary", "Farce relies on absurdity."],
          ["H", "How does a monologue differ from a soliloquy?", "A monologue is addressed to other characters; a soliloquy is spoken alone", "A monologue is always sung", "A soliloquy involves two characters", "There is no difference at all", "The audience of the speech differs."],
        ],
      },
      {
        week: 6,
        title: "Literature: introduction to poetry",
        subtopics: ["Features of poetry", "Types of poems", "Sound devices", "Stanza forms and rhyme scheme"],
        objectives: ["State the features of poetry", "Identify common types of poems", "Recognise sound devices such as rhyme, rhythm, assonance and alliteration", "Work out the rhyme scheme of a stanza"],
        lesson: {
          title: "Understanding Poetry",
          summary: "Learn the forms, sound devices and structures of poetry.",
          minutes: 40,
          notes: `## Features of poetry
Poetry uses **concentrated**, rhythmic language arranged in **lines** and **stanzas**, often with imagery and figures of speech.

## Types of poems
| Type | Features |
|---|---|
| **Lyric** | expresses personal feeling |
| **Narrative / ballad** | tells a story |
| **Elegy** | a lament for the dead |
| **Ode** | praises a person or thing in elevated style |
| **Sonnet** | 14 lines with a fixed rhyme scheme |
| **Epic** | long narrative of heroic deeds |
| **Dirge** | a funeral song |
| **Free verse** | no regular rhyme or metre |

## Sound devices
- **Rhyme**: matching end sounds — *night / light*
- **Rhythm**: the pattern of stressed and unstressed syllables
- **Alliteration**: repeated initial consonants — *silent sea*
- **Assonance**: repeated vowel sounds — *the rain in Spain*
- **Onomatopoeia**: sound words — *hiss, crash*
- **Refrain**: a line repeated at intervals

## Rhyme scheme
Label each new end sound with a new letter:
*The sun goes down (a) / Upon the town (a) / The children play (b) / At close of day (b)* → **aabb**.

## Stanzas
couplet (2 lines), tercet (3), quatrain (4), sestet (6), octave (8).`,
          examples: `**Example 1.** A poem mourning a dead friend: **elegy**.

**Example 2.** Rhyme scheme of *cat / hat / dog / mat*: **aaba**.

**Example 3.** *Big black bags*: **alliteration** (repeated /b/ at the start of each word).

**Example 4.** *The river flows, the river sings, the river never sleeps* — the repeated *the river* at the start of lines builds rhythm and emphasis.`,
        },
        questions: [
          ["E", "A poem of fourteen lines with a fixed rhyme scheme is a", "sonnet", "ballad", "epic", "dirge", "Sonnets have fourteen lines."],
          ["E", "A poem mourning the dead is an", "elegy", "ode", "epic", "limerick", "An elegy is a lament."],
          ["E", "A group of lines forming a unit in a poem is a", "stanza", "chapter", "scene", "paragraph", "Stanzas divide poems."],
          ["M", "A stanza of four lines is a", "quatrain", "couplet", "sestet", "octave", "Quatrain comes from the word for four."],
          ["M", "What is the rhyme scheme of: 'The sun goes down / Upon the town / The children play / At close of day'?", "aabb", "abab", "abba", "aaaa", "Down/town rhyme; play/day rhyme."],
          ["M", "The repetition of vowel sounds in nearby words is", "assonance", "alliteration", "onomatopoeia", "refrain", "Assonance repeats vowel sounds."],
          ["M", "A line repeated at intervals in a poem is a", "refrain", "stanza", "couplet", "caesura", "Refrains recur through the poem."],
          ["H", "A poem that tells a story, often in short stanzas, is a", "ballad", "lyric", "ode", "sonnet", "Ballads are narrative poems."],
          ["H", "A poem with no regular rhyme or metre is written in", "free verse", "blank verse with strict rhyme", "heroic couplets", "sonnet form", "Free verse follows natural speech rhythms."],
          ["H", "A poem praising a person or thing in elevated language is an", "ode", "elegy", "dirge", "epitaph", "Odes celebrate their subjects."],
        ],
      },
      {
        week: 7,
        title: "Continuous writing: exposition at senior level",
        subtopics: ["Analysing expository questions", "Developing points with evidence", "Coherence and cohesion", "Formal register in exposition"],
        objectives: ["Analyse expository questions to identify the required focus", "Develop each point with explanation and example", "Use cohesive devices to link ideas", "Maintain formal register in expository writing"],
        lesson: {
          title: "Expository Writing for Seniors",
          summary: "Write clear, cohesive expository essays with well-developed points.",
          minutes: 45,
          notes: `## Analysing the question
Underline the **key instruction** and **focus**:
*Explain **three causes** of youth unemployment and suggest **two solutions**.*
→ exactly 3 causes + 2 solutions.

## Developing a point (PEE)
- **Point**: *First, many graduates lack practical skills.*
- **Explanation**: *University courses often emphasise theory, so graduates cannot perform tasks employers need.*
- **Example/Evidence**: *A company may reject a computer science graduate who has never built a working app.*

## Cohesion
Link ideas with:
- addition: *moreover, furthermore, in addition*
- contrast: *however, nevertheless, on the other hand*
- cause/effect: *consequently, as a result, therefore*
- sequence: *first, secondly, finally*
- illustration: *for instance, for example*
Also use **pronouns** and **synonyms** to avoid repetition.

## Formal register
- No slang, contractions or text-speak.
- Objective statements: *It is evident that…*
- Avoid sweeping generalisations: ✗ *All youths are lazy.* ✓ *Some youths lack motivation because…*

## Structure
Introduction (define and preview) → body (one point per paragraph) → conclusion (summary + recommendation).`,
          examples: `**Point:** *Secondly, rapid population growth outpaces job creation.*
**Explanation:** *Each year, thousands more young people enter the labour market than there are new jobs.*
**Example:** *In many states, a single advertised vacancy attracts hundreds of applicants.*

**Conclusion:** *In conclusion, youth unemployment has several causes, but skills training and support for small businesses can reduce it significantly.*`,
        },
        questions: [
          ["E", "In the PEE method, 'P' stands for", "Point", "Paragraph", "Poem", "Punctuation", "Point, Explanation, Evidence/Example."],
          ["E", "Which linking word shows contrast?", "however", "moreover", "therefore", "firstly", "'However' introduces a contrasting idea."],
          ["E", "Which linking word shows result?", "consequently", "nevertheless", "for instance", "although", "'Consequently' means as a result."],
          ["M", "'Explain three causes of youth unemployment and suggest two solutions' requires", "exactly three causes and two solutions", "any number of causes", "only solutions", "a story about a young person", "Follow the precise instruction."],
          ["M", "Which sentence is appropriately formal?", "It is evident that many graduates lack practical skills.", "Graduates dey suffer, no be small.", "Guys don't have skills, LOL.", "Everybody is lazy, period.", "It is objective and formal."],
          ["M", "Which statement avoids a sweeping generalisation?", "Some youths lack motivation because of limited opportunities.", "All youths are lazy.", "Every graduate is useless.", "No one wants to work.", "It is qualified and reasonable."],
          ["M", "Which transition introduces an example?", "for instance", "in conclusion", "however", "consequently", "It signals an illustration."],
          ["H", "What is cohesion in writing?", "The linking of sentences and ideas so that the text flows logically", "The use of long words", "Writing only one paragraph", "Using many exclamation marks", "Cohesive devices connect ideas."],
          ["H", "Which is the best 'explanation' for the point 'Many graduates lack practical skills'?", "Courses often emphasise theory, so graduates cannot perform tasks employers need.", "Graduates are many.", "Skills are good.", "I have a cousin.", "It explains why the point is true."],
          ["H", "What should the conclusion of an expository essay contain?", "a summary of the main points and, where suitable, a recommendation", "a new unrelated argument", "the question copied out", "a list of linking words", "It rounds off the explanation."],
        ],
      },
      {
        week: 8,
        title: "Lexis: antonyms and synonyms at senior level",
        subtopics: ["Antonyms of words in context", "Synonyms of words in context", "Words with prefixes and suffixes", "Examination strategies"],
        objectives: ["Select precise antonyms for words in context", "Select precise synonyms for words in context", "Use prefix and suffix knowledge to work out meanings", "Apply elimination strategies in objective questions"],
        lesson: {
          title: "Senior Lexis Practice",
          summary: "Build and apply vocabulary at the level of WAEC lexis questions.",
          minutes: 40,
          notes: `## Senior-level word bank
| Word | Synonym | Antonym |
|---|---|---|
| affluent | wealthy | poor, indigent |
| candid | frank | evasive |
| benevolent | kind, charitable | malevolent |
| meticulous | careful, thorough | careless |
| obstinate | stubborn | flexible, yielding |
| transparent | open, clear | opaque, secretive |
| lethargic | sluggish | energetic |
| hostile | antagonistic | cordial |
| ephemeral | short-lived | lasting, permanent |
| vindicate | clear of blame | incriminate |
| frivolous | trivial, unserious | serious |
| verbose | wordy | concise |

## Using word parts
- *bene-* (good), *mal-* (bad): *benevolent / malevolent*
- *-ous* (full of): *courageous*
- *omni-* (all): *omnipresent*
- *-cide* (killing): *pesticide*

## Strategies
1. Understand the word **in context**.
2. For antonyms, eliminate synonyms placed as traps.
3. Match the **part of speech**.
4. Prefer the most **precise** option, not a vaguely related one.`,
          examples: `**Example 1.** *The businessman is **affluent**.* Antonym: **indigent** / **poor**.

**Example 2.** *Her speech was **verbose**.* Synonym: **wordy**.

**Example 3.** *The report **vindicated** the manager.* Antonym: **incriminated**.`,
        },
        questions: [
          ["E", "Choose the word nearest in meaning to 'affluent': 'The affluent family donated a library.'", "wealthy", "poor", "large", "famous", "'Affluent' means rich."],
          ["E", "Choose the word opposite in meaning to 'benevolent': 'The benevolent ruler fed the poor.'", "malevolent", "kind", "wealthy", "powerful", "'Benevolent' means kind; 'malevolent' means wishing harm."],
          ["E", "Choose the word nearest in meaning to 'meticulous': 'She is meticulous in her work.'", "very careful", "careless", "slow", "angry", "'Meticulous' means very careful and precise."],
          ["M", "Choose the word opposite in meaning to 'verbose': 'His verbose answer wasted time.'", "concise", "wordy", "lengthy", "loud", "'Verbose' means using too many words."],
          ["M", "Choose the word nearest in meaning to 'candid': 'She gave a candid opinion.'", "frank", "secret", "polite", "false", "'Candid' means honest and direct."],
          ["M", "Choose the word opposite in meaning to 'lethargic': 'The lethargic players lost the match.'", "energetic", "sluggish", "tired", "lazy", "'Lethargic' means sluggish."],
          ["M", "Choose the word opposite in meaning to 'transparent': 'The election process was transparent.'", "secretive", "open", "clear", "fair", "'Transparent' here means open and honest."],
          ["H", "Choose the word opposite in meaning to 'vindicated': 'The report vindicated the manager.'", "incriminated", "cleared", "praised", "promoted", "To vindicate is to clear of blame."],
          ["H", "Choose the word nearest in meaning to 'ephemeral': 'Fame on social media is often ephemeral.'", "short-lived", "permanent", "valuable", "dangerous", "'Ephemeral' means lasting a very short time."],
          ["H", "Choose the word opposite in meaning to 'obstinate': 'The obstinate boy refused all advice.'", "yielding", "stubborn", "rude", "clever", "'Obstinate' means stubborn; 'yielding' means willing to give way."],
        ],
      },
    ],
  },
];
