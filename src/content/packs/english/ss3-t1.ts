import type { TermPlan } from "../types";

/** SS3 English Language, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Vocabulary Development: Culture, Institutions and Ceremonies",
      subtopics: ["Words associated with ceremonies and festivals", "Words associated with social institutions", "Words related to African arts and age groups"],
      objectives: ["Explain words associated with cultural ceremonies", "Use words associated with marriage, family life and social class correctly", "Use words related to African arts in sentences", "Choose the right word for a cultural context in examination items"],
      lesson: {
        title: "The Register of Culture, Institutions and Ceremonies",
        summary: "Learn and use the words that describe ceremonies, social institutions and African arts.",
        minutes: 40,
        notes: `## What is a register?
A **register** is the set of words that belong to a particular field or activity. Examiners test whether you can choose the word that fits the field.

## Ceremonies
| Word | Meaning |
|---|---|
| **naming ceremony** | the event at which a new baby is given a name |
| **festival** | a day or period of public celebration |
| **ritual** | a fixed set of actions performed in a ceremony |
| **rite** | a traditional ceremonial act, as in *funeral rites*, *rite of passage* |
| **chieftaincy** | the office or rank of a chief |
| **title-taking** | being honoured with a traditional title |
| **installation / coronation** | the ceremony of placing a chief or king in office |
| **regalia** | the special dress and ornaments worn on ceremonial occasions |
| **libation** | a drink poured out as an offering |
| **masquerade** | a masked figure that appears at festivals |
| **shrine** | a place regarded as sacred |
| **heritage** | traditions and culture handed down from the past |

## Social institutions
| Word | Meaning |
|---|---|
| **norm** | an accepted standard of behaviour |
| **custom** | a traditional way of behaving in a community |
| **taboo** | something forbidden by custom |
| **morality** | principles of right and wrong behaviour |
| **social class** | a group of people of the same rank in society |
| **bride price / dowry** | payment or gifts given in connection with a marriage |
| **betrothal** | a formal engagement to be married |
| **monogamy / polygamy** | marriage to one spouse / to more than one |
| **nuclear family** | parents and their children |
| **extended family** | the wider family including uncles, aunts and cousins |
| **kinsman** | a relative |
| **lineage** | line of descent from an ancestor |
| **patriarch / matriarch** | male / female head of a family |
| **in-law** | a relative by marriage |

## African arts
| Word | Meaning |
|---|---|
| **sculpture** | a figure carved or moulded from wood, stone, clay or metal |
| **carving** | an object cut from wood or ivory |
| **lyric** | the words of a song; a short poem of feeling |
| **folklore** | traditional stories and beliefs of a people |
| **folktale** | a traditional story passed down orally |
| **minstrel / praise-singer** | one who sings the praises of persons |
| **age group / age grade** | people of about the same age who act together in a community |
| **artefact** | an object made by people, of cultural interest |

## Using the words
- *The **installation** of the new Oba was attended by thousands.*
- *It is a **taboo** in that village to whistle at night.*
- *The **age grade** cleared the path to the stream.*

## Examination hint
In a register item, look at the **other words** in the sentence. *Regalia*, *staff of office* and *kingmakers* point to **installation**, not *inauguration* (used for presidents and governors).`,
        examples: `**Example 1.** *The chief wore his full ______ at the festival.* (regalia / uniform / costume) *Answer:* **regalia** — the ceremonial dress of a title-holder.

**Example 2.** *A man who has only one wife practises ______.* *Answer:* **monogamy**.

**Example 3.** Give one word for "traditional stories and beliefs of a people". *Answer:* **folklore**.`,
      },
      questions: [
        ["E", "The special dress and ornaments worn by a king on ceremonial occasions are his", "regalia", "uniform", "apparel shop", "livery fee", "Regalia is the ceremonial dress of royalty and title-holders."],
        ["E", "Something forbidden by the custom of a community is a", "taboo", "norm", "rite", "lyric", "A taboo is a prohibition set by custom."],
        ["E", "Parents and their children make up the ______ family.", "nuclear", "extended", "communal", "polygamous", "The nuclear family is the smallest family unit."],
        ["M", "The kingmakers have fixed a date for the ______ of the new Emir.", "installation", "graduation", "inauguration of office staff", "ordination", "Traditional rulers are installed; priests are ordained."],
        ["M", "A drink poured on the ground as an offering to ancestors is a", "libation", "ration", "ritual bath", "toast", "Pouring libation is part of many traditional ceremonies."],
        ["M", "A formal engagement to be married is a", "betrothal", "divorce", "dowry", "lineage", "Betrothal comes before the wedding."],
        ["M", "People of about the same age who carry out communal duties together form an", "age grade", "extended family", "audience", "ancestry", "Age grades are a traditional social institution."],
        ["H", "A figure carved from wood or moulded in bronze is a", "sculpture", "lyric", "mural", "folktale", "Sculpture is three-dimensional art."],
        ["H", "Choose the word that best completes the sentence: The elders performed the funeral ______ at dawn.", "rites", "rights", "writes", "riots", "Rites are ceremonial acts; the others are homophones or unrelated."],
        ["H", "The line of descent of a person from an ancestor is the person's", "lineage", "heritage site", "kindred spirit", "progeny", "Lineage traces descent; progeny means offspring."],
      ],
      jamb: [
        ["M", "Choose the option nearest in meaning to the underlined word: The masquerade is part of our cultural *heritage*.", "legacy", "history book", "ceremony", "belief", "Heritage is what is handed down, a legacy."],
        ["H", "Choose the option that best completes the gap: The practice of marrying more than one wife is called ______.", "polygamy", "monogamy", "bigamy law", "celibacy", "Polygamy is marriage to more than one spouse."],
      ],
    },
    {
      week: 2,
      title: "Spoken English: Revision of Intonation Patterns",
      subtopics: ["The falling tone", "The rising tone", "Intonation in statements, commands and questions"],
      objectives: ["Explain intonation and its function", "Identify sentence types that take the falling tone", "Identify sentence types that take the rising tone", "Read sentences aloud with the correct tone"],
      lesson: {
        title: "Falling and Rising Tones",
        summary: "Revise how the voice falls or rises at the end of English sentences.",
        minutes: 40,
        notes: `## What is intonation?
**Intonation** is the rise and fall of the pitch of the voice in speech. It shows whether a sentence is a statement, a command or a question, and it can show the speaker's attitude.

The change of pitch happens on the last important (stressed) word of the sentence, called the **nucleus**.

## The falling tone (↘)
The voice drops at the end. It suggests **finality** or **certainty**. It is used in:

| Sentence type | Example |
|---|---|
| **statements** | *The principal has ↘arrived.* |
| **commands** | *Close the ↘door.* |
| **wh-questions** (who, what, where, when, why, how) | *Where do you ↘live?* |
| **exclamations** | *What a lovely ↘dress!* |
| **question tags expecting agreement** | *It's hot, ↘isn't it?* |

## The rising tone (↗)
The voice goes up at the end. It suggests that something is **unfinished** or **uncertain**. It is used in:

| Sentence type | Example |
|---|---|
| **yes/no (polar) questions** | *Are you ↗ready?* |
| **requests** | *Could you help ↗me?* |
| **statements used as questions** | *You've paid the ↗fees?* |
| **listing (every item but the last)** | *I bought ↗rice, ↗beans and ↘oil.* |
| **incomplete utterances / subordinate clauses first** | *When I ↗arrived, the class had ↘started.* |
| **question tags expressing real doubt** | *She's your sister, ↗isn't she?* |

## Compare
- *She is a nurse.* (↘ — a fact)
- *She is a nurse?* (↗ — surprise or a question)

## Emphatic (contrastive) stress
In the Oral English paper, a word written in **capital letters** carries emphatic stress. The right question is the one the capitalised word answers.

*The teacher bought a RED car.* → answers *Did the teacher buy a blue car?*
*The TEACHER bought a red car.* → answers *Did the student buy a red car?*

## Practice
Read aloud, letting your voice fall or rise as marked:
1. *What is your ↘name?*
2. *Is this your ↗book?*
3. *Sit ↘down.*
4. *We need ↗pens, ↗pencils and ↘rulers.*

## Summary
> **Fall** for statements, commands, wh-questions and exclamations.
> **Rise** for yes/no questions, requests, lists (before the last item) and unfinished clauses.`,
        examples: `**Example 1.** Which tone ends *Where are you going?* *Answer:* **falling** — it is a wh-question.

**Example 2.** Which tone ends *Have you eaten?* *Answer:* **rising** — it is a yes/no question.

**Example 3.** *Ada WASHED the plates.* Which question does it answer? *Answer:* **Did Ada break the plates?** — the stressed word contrasts the action.`,
      },
      questions: [
        ["E", "Intonation is the", "rise and fall of the pitch of the voice", "loudness of a single consonant", "spelling of difficult words", "number of syllables in a word", "It is the tune of speech."],
        ["E", "A simple statement such as 'The bus has left' normally ends on a", "falling tone", "rising tone", "level whisper", "double rise", "Statements express finality, so the voice falls."],
        ["E", "A yes/no question such as 'Is he here?' normally ends on a", "rising tone", "falling tone", "silent pause", "stressed prefix", "Polar questions rise."],
        ["M", "Which of these sentences normally takes the falling tone?", "What is the time?", "Is it raining?", "May I come in?", "Did she call?", "Wh-questions fall; the others are polar questions or requests."],
        ["M", "Which of these sentences normally takes the rising tone?", "Can you swim?", "Shut the window.", "Where is my pen?", "How beautiful she is!", "Only the yes/no question rises."],
        ["M", "In 'I bought yams, plantains and fish', the tone on 'yams' is", "rising", "falling", "level and final", "silent", "Items in a list rise until the last, which falls."],
        ["M", "A command such as 'Stand up' is said with a", "falling tone", "rising tone", "rise-fall-rise", "question tone", "Commands are final, so they fall."],
        ["H", "In 'When the bell rang, the pupils ran out', the tone at 'rang' is", "rising", "falling", "the same as a command", "absent", "An unfinished opening clause takes a rise."],
        ["H", "'Musa bought a NEW bicycle.' This sentence answers the question", "Did Musa buy an old bicycle?", "Did Bala buy a new bicycle?", "Did Musa sell a new bicycle?", "Did Musa buy a new car?", "The emphasised word NEW contrasts with old."],
        ["H", "'You are coming with us?' said with a rising tone functions as", "a question", "a command", "an exclamation of finality", "a plain statement of fact", "A rise turns a statement form into a question."],
      ],
      jamb: [
        ["M", "Choose the question to which the sentence is the appropriate answer: 'The doctor examined the PATIENT.'", "Did the doctor examine the nurse?", "Did the nurse examine the patient?", "Did the doctor discharge the patient?", "Did the doctor examine the patient yesterday?", "PATIENT is emphasised, so it contrasts with another person examined."],
        ["H", "Choose the question to which the sentence is the appropriate answer: 'My UNCLE lives in Jos.'", "Does your aunt live in Jos?", "Does your uncle work in Jos?", "Does your uncle live in Kano?", "Does his uncle live in Jos?", "UNCLE is emphasised, so the contrast is with another relative."],
      ],
    },
    {
      week: 3,
      title: "Grammatical Structures: Nouns and Noun Phrases",
      subtopics: ["Types of nouns", "Regular and irregular plural formation", "The noun phrase and its functions"],
      objectives: ["Classify nouns as common, proper, collective or abstract", "Form the plurals of regular and irregular nouns", "Identify a noun phrase and its head", "State the grammatical function of a noun phrase in a sentence"],
      lesson: {
        title: "Nouns, Plurals and Noun Phrases",
        summary: "Revise noun types, plural formation and the structure and functions of the noun phrase.",
        minutes: 40,
        notes: `## Types of nouns
| Type | What it names | Examples |
|---|---|---|
| **common** | any member of a class | *boy, river, town* |
| **proper** | a particular person, place or thing (capital letter) | *Amina, Niger, Enugu* |
| **collective** | a group regarded as one | *team, flock, committee, audience* |
| **abstract** | a quality, state or idea | *honesty, freedom, anger* |
| **concrete** | something that can be seen or touched | *table, stone* |

Nouns are also **countable** (*book — books*) or **uncountable** (*information, furniture, luggage, equipment, advice, stationery*). Uncountable nouns have **no plural** and take **no *a/an***: *some advice*, not *an advice* or *advices*.

## Forming plurals
### Regular
| Rule | Examples |
|---|---|
| add **-s** | *book — books* |
| add **-es** after s, x, z, ch, sh | *box — boxes, church — churches* |
| consonant + y → **-ies** | *lady — ladies* (but *boy — boys*) |
| f / fe → **-ves** (many) | *leaf — leaves, knife — knives* (but *chiefs, roofs*) |
| consonant + o → often **-es** | *hero — heroes, potato — potatoes* (but *photos, pianos*) |

### Irregular
| Kind | Examples |
|---|---|
| vowel change | *man — men, foot — feet, tooth — teeth, mouse — mice* |
| -en | *child — children, ox — oxen* |
| no change | *sheep, deer, aircraft, series, species* |
| foreign | *crisis — crises, criterion — criteria, phenomenon — phenomena, syllabus — syllabi, datum — data, stimulus — stimuli* |
| compound | *passer-by — passers-by, mother-in-law — mothers-in-law* |

Some nouns are plural only: *scissors, trousers, spectacles, premises*. Some end in -s but are singular: *news, mathematics, measles*.

## The noun phrase
A **noun phrase** is a group of words with a noun as its **head**. Structure: **(determiner) + (pre-modifier) + HEAD + (post-modifier)**.

*the tall **boy** in the blue shirt* — head: *boy*.

## Functions of the noun phrase
| Function | Example |
|---|---|
| **subject** of a verb | ***The old man** laughed.* |
| **object** of a verb | *She bought **a new bag**.* |
| **indirect object** | *He gave **the boy** a pen.* |
| **complement** of the subject | *Ada is **a brilliant student**.* |
| **complement** of the object | *They elected him **their chairman**.* |
| **object/complement of a preposition** | *We sat under **the mango tree**.* |
| **in apposition** | *Mr Obi, **our principal**, spoke.* |

## Examination hint
To find the function, ask: *who/what* before the verb gives the **subject**; *whom/what* after an action verb gives the **object**; after *be, become, seem* comes the **complement**.`,
        examples: `**Example 1.** Give the plural of *criterion*. *Answer:* **criteria**.

**Example 2.** State the function of the phrase in bold: *The committee appointed Bola **its secretary**.* *Answer:* **complement of the object** *Bola*.

**Example 3.** Correct: *She gave me many advices.* *Answer:* *She gave me **much advice** / some pieces of advice.*`,
      },
      questions: [
        ["E", "Which of these is an abstract noun?", "kindness", "bucket", "Kaduna", "herd", "Kindness names a quality that cannot be touched."],
        ["E", "The plural of 'tooth' is", "teeth", "tooths", "teeths", "toothes", "It changes its vowel."],
        ["E", "Which of these is a collective noun?", "choir", "singer", "song", "music", "A choir is a group of singers regarded as one."],
        ["M", "The plural of 'passer-by' is", "passers-by", "passer-bys", "passers-bys", "passer-bies", "The main noun 'passer' takes the plural."],
        ["M", "Which of these sentences is correct?", "The equipment has arrived.", "The equipments have arrived.", "An equipment has arrived.", "Many equipments has arrived.", "Equipment is uncountable and singular."],
        ["M", "In 'The young doctor from Ibadan treated me', the head of the noun phrase is", "doctor", "young", "Ibadan", "the", "The other words modify 'doctor'."],
        ["M", "The plural of 'phenomenon' is", "phenomena", "phenomenons", "phenomenas", "phenomenae", "It keeps its Greek plural."],
        ["H", "In 'The students made Chidi their captain', the phrase 'their captain' functions as", "complement of the object", "subject of the verb", "direct object", "adverbial of manner", "It describes the object Chidi."],
        ["H", "In 'Lagos, the former capital, is very busy', the phrase 'the former capital' is", "in apposition to Lagos", "the object of 'is'", "an adverbial phrase", "the subject complement", "It renames the noun beside it."],
        ["H", "Which of these nouns has the same form in the singular and the plural?", "aircraft", "ox", "chief", "radio", "One aircraft, two aircraft."],
      ],
      jamb: [
        ["M", "Choose the option that best completes the gap: The ______ for selecting the prefects were announced.", "criteria", "criterion", "criterias", "criterions", "The plural verb 'were' needs the plural 'criteria'."],
        ["H", "Choose the option that best completes the gap: The news ______ very encouraging.", "is", "are", "were", "have been", "News is singular although it ends in -s."],
      ],
    },
    {
      week: 4,
      title: "Continuous Writing: Expository Essays",
      subtopics: ["Features of expository writing", "Planning and outlining", "Writing on current issues within 400 words"],
      objectives: ["State the purpose and features of an expository essay", "Draw an outline for an expository essay", "Write a clear introduction, body and conclusion", "Write an expository essay of not more than 400 words on a current issue"],
      lesson: {
        title: "Writing the Expository Essay",
        summary: "Learn to explain a subject clearly and in order, as the examination requires.",
        minutes: 40,
        notes: `## What is an expository essay?
An **expository essay** **explains** or **informs**. It tells the reader what something is, how it works, how it is done, or what its causes and effects are. It does **not** tell a story (narrative), paint a picture (descriptive) or take sides (argumentative).

Typical topics: *The causes and effects of drug abuse among youths*; *How elections are conducted in my country*; *Preparing for an external examination*; *The dangers of corruption*; *An excursion and what it taught us*.

## Features
- **factual** — based on information, not opinion or imagination
- **clear and orderly** — one main point to a paragraph, logically arranged
- **explanatory** — uses definitions, examples, steps, causes and effects
- **impersonal tone** — mostly third person, present tense
- **precise vocabulary** — the correct terms of the subject

## Methods of development
| Method | Used for |
|---|---|
| **definition** | saying what something is |
| **process (steps)** | how something is made or done |
| **cause and effect** | why something happens and what follows |
| **comparison and contrast** | how things are alike or different |
| **classification** | sorting into types |
| **illustration** | giving examples |

## Planning (about 5 minutes)
1. **Read the question** and underline the key words.
2. **Jot down points**.
3. **Arrange** them in the best order.
4. Write an **outline**.

### Sample outline — *Causes and effects of drug abuse among youths*
- **Introduction:** what drug abuse means; why it is a concern
- **Paragraph 2:** causes — peer pressure, curiosity
- **Paragraph 3:** causes — broken homes, unemployment, easy availability
- **Paragraph 4:** effects on health and the mind
- **Paragraph 5:** effects on education, family and society (crime)
- **Conclusion:** what parents, schools and government should do

## Writing
- **Introduction** — define the subject and state what the essay will cover.
- **Body** — each paragraph opens with a **topic sentence**, then explains and illustrates it.
- **Linking words** — *firstly, in addition, furthermore, as a result, consequently, however, for example, finally*.
- **Conclusion** — sum up; do not introduce a new point.

## Length
The scheme sets a limit of **400 words** for practice; examination questions state their own length (often about 450 words). Keep to the stated length.

## How essays are marked
| Aspect | What is rewarded |
|---|---|
| **Content** | relevant, adequate points |
| **Organisation** | paragraphing, order, linking |
| **Expression** | clear, varied, appropriate language |
| **Mechanical accuracy** | grammar, spelling, punctuation |

## Common faults
- drifting into a story
- one long paragraph
- slang and abbreviations (*u, bcos*)
- memorised openings that do not fit the question`,
        examples: `**Example 1.** Which type of essay is *How to prepare my favourite meal*? *Answer:* **expository** (process).

**Example 2.** Write a topic sentence for a paragraph on peer pressure as a cause of drug abuse. *Answer:* *One major cause of drug abuse among young people is pressure from friends.*

**Example 3.** Give two linking words that show result. *Answer:* **consequently**, **as a result**.`,
      },
      questions: [
        ["E", "The main purpose of an expository essay is to", "explain or inform", "tell a story", "win an argument", "paint a picture in words", "Exposition explains a subject."],
        ["E", "Each paragraph in the body of an expository essay should open with a", "topic sentence", "concluding essay", "rhetorical greeting", "salutation", "The topic sentence states the point the paragraph develops."],
        ["E", "Which of these is a suitable topic for an expository essay?", "How a bill becomes law", "The day I got lost", "A ghost story", "Boys are better than girls", "It explains a process; the others narrate or argue."],
        ["M", "'Consequently' and 'as a result' are linking words that show", "result", "contrast", "addition", "time sequence", "They introduce an effect."],
        ["M", "An essay that explains the steps in registering for an examination is developed by", "process", "comparison", "classification", "narration of a dream", "It sets out steps in order."],
        ["M", "The conclusion of an expository essay should", "sum up the points made", "introduce a new major point", "begin a story", "repeat the question word for word", "A conclusion rounds off the essay."],
        ["M", "Before writing, a candidate should first", "read the question and plan an outline", "copy the question three times", "write the conclusion", "count the words", "Planning produces an orderly essay."],
        ["H", "Under which aspect are paragraphing and logical arrangement of points rewarded?", "Organisation", "Mechanical accuracy", "Content", "Handwriting", "Organisation concerns arrangement and linking."],
        ["H", "Which of these sentences is most suitable in an expository essay?", "Corruption weakens public institutions and discourages investment.", "U know say corruption bad.", "Once upon a time there was a corrupt man.", "I just hate corruption, full stop!", "It is factual, formal and explanatory."],
        ["H", "An essay on 'The differences between private and public schools' is best developed by", "comparison and contrast", "process", "narration", "definition only", "It sets two things side by side."],
      ],
      jamb: [
        ["M", "Choose the option that best completes the gap: The essay was penalised because it lacked ______; the points did not follow one another logically.", "coherence", "length", "handwriting", "humour", "Coherence is the logical flow of ideas."],
        ["H", "Choose the option nearest in meaning to the underlined word: The writer gave a *lucid* account of the election process.", "clear", "lengthy", "biased", "humorous", "Lucid means clear and easy to understand."],
      ],
    },
    {
      week: 6,
      title: "Comprehension: Silent Reading on Topical Issues",
      subtopics: ["Reading silently for meaning", "Meaning of words in context", "Answering questions of varying difficulty"],
      objectives: ["Read a passage on a topical issue silently and with understanding", "Work out the meaning of a word from its context", "Answer factual, inferential and grammatical questions on a passage", "Replace a word with another that fits the context"],
      lesson: {
        title: "Reading Topical Passages with Understanding",
        summary: "Practise the reading skills the comprehension paper tests, using passages on current issues.",
        minutes: 40,
        notes: `## Silent reading
Read with your **eyes and mind only** — no moving lips, no pointing finger, no going back over every line. These habits slow you down. Read in **groups of words**, not word by word.

## A method for the comprehension passage
1. **Skim** the passage once for the general idea.
2. **Read the questions.**
3. **Read the passage again** carefully, noting where each answer lies.
4. **Answer** in your own words where asked, briefly and exactly.

## Types of question
| Type | What it asks | How to answer |
|---|---|---|
| **factual** | what the passage states | find it and state it |
| **inferential** | what is implied | reason from the evidence |
| **vocabulary** | a word or phrase that can replace another | same meaning **and** same grammatical form |
| **grammatical name and function** | name of a phrase or clause, and its work | e.g. *adverbial clause of reason, modifying the verb …* |
| **figure of speech** | the literary device used | name it; explain if asked |
| **writer's attitude / tone** | how the writer feels | choose a precise adjective |

## Meaning from context
Use clues around the word:
- **definition** — *Unemployment, the state of being without a job, …*
- **example** — *vices such as cheating and stealing*
- **contrast** — *Unlike his frugal brother, he was a spendthrift.*
- **cause and effect** — *Because the road was impassable, we turned back.*

## Replacement words
The replacement must fit the sentence exactly. If the word is *escalating* (present participle), answer *rising* or *increasing*, not *rise*.

## A short practice passage
> *Youth unemployment has become one of the most pressing problems of our time. Every year, thousands of graduates pour out of our institutions into a labour market that cannot absorb them. Idle and frustrated, some turn to crime, while others risk their lives on perilous journeys abroad. The remedy lies not in more certificates but in skills: a young person who can make or repair something will rarely be idle.*

- *What, according to the writer, is the solution?* — **Acquiring practical skills.**
- *"pour out of our institutions" — what figure of speech?* — **Metaphor** (graduates are compared to a flowing liquid).
- *Replace "perilous".* — **dangerous**.
- *What two results of unemployment are mentioned?* — **Crime** and **dangerous migration**.

## Rules for answering
- Answer **what is asked**, no more.
- Do not **lift** whole sentences when told to use your own words.
- Keep the **tense** of the question.
- One answer only for a one-word question; extra answers are penalised.`,
        examples: `**Example 1.** *Unlike his frugal brother, Emeka was a spendthrift.* What does *frugal* mean? *Answer:* **careful with money** — the contrast with *spendthrift* shows it.

**Example 2.** Replace *escalating* in *the escalating cost of food*. *Answer:* **rising** (same form).

**Example 3.** Name the grammatical structure: *because the market was closed*. *Answer:* **adverbial clause of reason**.`,
      },
      questions: [
        ["E", "Silent reading is done", "with the eyes and mind only", "by whispering each word", "by pointing at every word", "only by reading aloud", "Lip movement and pointing slow a reader down."],
        ["E", "A question that asks for information stated plainly in a passage is", "factual", "inferential", "rhetorical", "grammatical", "The answer can be found directly in the text."],
        ["E", "Reading a passage quickly for its general idea is called", "skimming", "editing", "paraphrasing", "dictation", "Skimming gives an overview."],
        ["M", "'Unlike his frugal brother, Emeka was a spendthrift.' The meaning of 'frugal' is shown by", "contrast", "definition", "example", "repetition", "'Unlike' signals an opposite."],
        ["M", "A word that can replace 'perilous' in 'a perilous journey' is", "dangerous", "danger", "dangerously", "endanger", "The replacement must also be an adjective."],
        ["M", "An inferential question requires the reader to", "reason from what the passage implies", "copy a sentence from the passage", "count the paragraphs", "name a part of speech", "The answer is implied, not stated."],
        ["M", "'Graduates pour out of our institutions.' The figure of speech is", "metaphor", "simile", "irony", "onomatopoeia", "Graduates are spoken of as a flowing liquid without 'like' or 'as'."],
        ["H", "In 'Because the road was impassable, we turned back', the underlined clause 'Because the road was impassable' is an", "adverbial clause of reason", "adjectival clause", "noun clause", "adverbial clause of place", "It tells why we turned back."],
        ["H", "A word that can replace 'pressing' in 'one of the most pressing problems' is", "urgent", "urgency", "pressed", "urgently", "An adjective with the same meaning is needed."],
        ["H", "When told to answer 'in your own words', a candidate who copies a whole sentence from the passage is guilty of", "lifting", "skimming", "inferring", "scanning", "Mindless lifting is penalised."],
      ],
      jamb: [
        ["M", "Choose the option nearest in meaning to the underlined word: Youth *restiveness* has disrupted work in the area.", "unrest", "laziness", "poverty", "ambition", "Restiveness is a state of unrest or agitation."],
        ["H", "Choose the option that best explains the sentence: 'Be your brother's keeper.'", "Care about the welfare of others.", "Guard your brother's house.", "Keep your brother's money.", "Stay at home with your brother.", "The expression means showing concern for other people."],
      ],
    },
    {
      week: 8,
      title: "Summary Writing: Summarizing a Talk or Lecture",
      subtopics: ["Listening and reading for main points", "Separating main points from illustrations", "Writing summary answers in sentences"],
      objectives: ["Identify the main points of a talk or lecture", "Distinguish main points from examples and repetitions", "Write each summary point as one clear sentence", "Avoid the common errors penalised in summary writing"],
      lesson: {
        title: "Summarizing Talks and Lectures",
        summary: "Learn to pick out and state the main points of a talk in a few correct sentences.",
        minutes: 40,
        notes: `## What is a summary?
A **summary** is a brief statement of the **main points** of a talk or passage, leaving out everything else.

## Main points and what to leave out
A speaker makes a point and then supports it. Keep the point; drop the support.

| Keep | Leave out |
|---|---|
| main ideas | examples and illustrations |
| | repetitions |
| | figures of speech, proverbs |
| | stories and anecdotes |
| | lists of details (generalise them) |
| | your own opinions |

## Signals a speaker uses
- **numbering:** *first, secondly, another, finally*
- **emphasis:** *the most important, above all, I must stress*
- **summing up:** *in short, in conclusion, to sum up*
- **topic sentences** at the start of paragraphs

## Steps
1. Read the **question** first: it tells you exactly what to summarise (e.g. *three causes*, *two effects*).
2. Read or listen for the points that answer **that question only**.
3. Note each point in a **few words**.
4. Write each point as **one complete sentence**.
5. Check the **number** of sentences required.

## An illustration
> *"…Let me begin with the home. Many parents today are too busy chasing money to notice what their children are doing. A child who leaves home at six and returns at nine has no one to guide him. Secondly, the company a young person keeps matters. Show me your friend, the proverb says, and I will tell you who you are. Many a decent boy has been led into taking drugs by those he calls friends. Finally, drugs are simply too easy to obtain: they are sold openly at motor parks and street corners…"*

*Question: In three sentences, one for each, state the three causes of drug abuse mentioned by the speaker.*

1. **Parents neglect their children.**
2. **Young people are influenced by bad friends.**
3. **Drugs are easily available.**

Notice what was left out: the child who leaves at six, the proverb, the motor parks.

## Rules
- Write **complete sentences**, not phrases or notes.
- **One point per sentence**; two points in one sentence may earn only one mark.
- Use **your own words** as far as possible; do not lift mindlessly.
- **No preamble** such as *The three causes are as follows:* repeated in every answer — though a short lead-in that fits the question is acceptable.
- **No examples, no extra sentences.** Extra sentences are not marked and may be penalised.
- Correct **grammar**: errors lose marks.

## Generalising
*Sold at motor parks, street corners and kiosks* → *readily available*.
*Cholera, typhoid and dysentery* → *water-borne diseases*.`,
        examples: `**Example 1.** Summarise in one sentence: *"Many parents are too busy chasing money to notice what their children are doing."* *Answer:* **Parents neglect their children.**

**Example 2.** Generalise: *malaria, typhoid and cholera*. *Answer:* **diseases**.

**Example 3.** Why is *Because of bad friends* not acceptable as a summary answer? *Answer:* It is **not a complete sentence**.`,
      },
      questions: [
        ["E", "A summary contains only the", "main points", "examples", "proverbs", "writer's stories", "Supporting material is left out."],
        ["E", "Each summary answer should be written as", "one complete sentence", "a list of words", "a paragraph of examples", "a question", "Phrases and notes are not accepted."],
        ["E", "Which of these should be left out of a summary?", "illustrations", "main ideas", "the key points asked for", "the central argument", "Illustrations only support the points."],
        ["M", "The words 'first', 'secondly' and 'finally' in a lecture help the listener to", "identify the main points", "find the examples", "spell difficult words", "detect the speaker's accent", "They number the speaker's points."],
        ["M", "'Cholera, typhoid and dysentery' may be generalised in a summary as", "water-borne diseases", "three examples", "hospital cases only", "cholera and others", "A general term replaces a list."],
        ["M", "Before reading the passage for summary, a candidate should first", "read the question to see what is required", "count the words in the passage", "write the conclusion", "copy the first paragraph", "The question tells you which points to look for."],
        ["M", "Putting two points in one summary sentence is unwise because", "only one may be credited", "the sentence becomes a question", "it makes the handwriting bad", "it shortens the passage", "Examiners expect one point per sentence."],
        ["H", "Which of these is the best summary of 'Idle and frustrated, some graduates turn to crime'?", "Unemployment leads to crime.", "Idle and frustrated, some turn to crime.", "Because of crime.", "Graduates, crime, frustration.", "It is a complete sentence in the candidate's own words."],
        ["H", "A candidate asked for three sentences writes five. The extra sentences are", "not credited and may be penalised", "given bonus marks", "marked first", "required for a good grade", "The rubric fixes the number of sentences."],
        ["H", "In a summary, 'Show me your friend and I will tell you who you are' should be", "left out", "quoted in full", "expanded", "placed first", "Proverbs are illustrations, not main points."],
      ],
      jamb: [
        ["M", "Choose the option nearest in meaning to the underlined word: The speaker gave a *concise* account of the problem.", "brief", "confused", "lengthy", "amusing", "Concise means short and to the point."],
        ["H", "Choose the option opposite in meaning to the underlined word: The lecturer's remarks were *relevant* to the topic.", "extraneous", "pertinent", "apt", "germane", "Extraneous means not connected with the matter."],
      ],
    },
    {
      week: 9,
      title: "Spoken English: Consonant Clusters",
      subtopics: ["Clusters of two consonants at the end of words", "Clusters of three consonants", "Clusters of four consonants"],
      objectives: ["Explain what a consonant cluster is", "Identify the number of consonant sounds at the end of a word", "Pronounce final clusters without inserting vowels", "Distinguish letters from sounds in counting clusters"],
      lesson: {
        title: "Final Consonant Clusters",
        summary: "Learn to recognise and pronounce groups of consonant sounds at the end of words.",
        minutes: 40,
        notes: `## What is a consonant cluster?
A **consonant cluster** is a group of **two or more consonant sounds** that come together in a syllable with **no vowel between them**. English allows up to **three** consonants at the beginning of a syllable (*str*-eet, *spl*-ash) and up to **four** at the end (*texts*).

## Count sounds, not letters
- *sacks* ends in the letters *cks* but the sounds /ks/ — **two** consonants.
- *exist* ends in /st/ — **two**.
- *x* often stands for two sounds /ks/: *box* /bɒks/, *next* /nekst/.
- *th* is **one** sound: /θ/.
- *-ed* after a voiceless sound is /t/: *glimpsed* /ɡlɪmpst/.
- Some letters are silent: *climbed* /klaɪmd/ ends in two, not three.

## Two consonants at the end
| Word | Ending |
|---|---|
| *sacks* | /ks/ |
| *exist* | /st/ |
| *desk* | /sk/ |
| *help* | /lp/ |
| *hand* | /nd/ |
| *lift* | /ft/ |
| *milk* | /lk/ |

## Three consonants at the end
| Word | Ending |
|---|---|
| *scripts* | /pts/ |
| *crafts* | /fts/ |
| *twelfth* | /lfθ/ |
| *next* | /kst/ |
| *tasks* | /sks/ |
| *banks* | /ŋks/ |
| *asked* | /skt/ |
| *thrusts* | /sts/ |

## Four consonants at the end
| Word | Ending |
|---|---|
| *sixths* | /ksθs/ |
| *twelfths* | /lfθs/ |
| *prompts* | /mpts/ |
| *glimpsed* | /mpst/ |
| *texts* | /ksts/ |
| *tempts* | /mpts/ |

## Clusters at the beginning
Two: *play* /pl/, *train* /tr/, *sky* /sk/, *snow* /sn/. Three (always beginning with /s/): *spring* /spr/, *street* /str/, *scream* /skr/, *splash* /spl/, *square* /skw/.

## A common fault
Many learners **insert a vowel** to break a cluster, or **drop** a consonant:
- *film* said as "filim"
- *asked* said as "aks" or "ask"
- *desks* said as "des"
- *sixths* said as "six"

Practise slowly, sounding every consonant: *tex-t-s*, *promp-t-s*, *twel-f-th-s*.

## Practice
Say each pair, sounding the final cluster fully:
*ask — asked*; *desk — desks*; *lift — lifts*; *sixth — sixths*; *act — acts*.

## Examination hint
In the Oral English paper you may be asked to choose the word with the same consonant sound(s) as those underlined. Think of the **sound**, not the spelling: the *x* in *taxi* matches the *cks* in *sacks*.`,
        examples: `**Example 1.** How many consonant sounds end *next*? *Answer:* **three** — /k/, /s/, /t/.

**Example 2.** How many consonant sounds end *sixths*? *Answer:* **four** — /k/, /s/, /θ/, /s/.

**Example 3.** Which word begins with a three-consonant cluster: *train*, *street*, *sky*? *Answer:* **street** — /str/.`,
      },
      questions: [
        ["E", "A consonant cluster is a group of consonant sounds with", "no vowel between them", "a vowel between each pair", "the same spelling", "a silent letter always", "The consonants come together in one syllable."],
        ["E", "The word 'desk' ends in a cluster of", "two consonants", "three consonants", "four consonants", "one consonant", "It ends in /sk/."],
        ["E", "Which of these words begins with a consonant cluster?", "play", "pay", "lay", "away", "'Play' begins with /pl/."],
        ["M", "The word 'next' ends in a cluster of", "three consonants", "two consonants", "four consonants", "one consonant", "The letter x stands for /ks/, followed by /t/."],
        ["M", "The word 'scripts' ends in the consonant sounds", "/pts/", "/ps/", "/kts/", "/pst/", "The final sounds are p, t and s."],
        ["M", "Which of these words begins with a cluster of three consonants?", "spring", "sting", "swing", "sing", "It begins with /spr/."],
        ["M", "The letters 'th' in 'twelfth' represent", "one consonant sound", "two consonant sounds", "a vowel sound", "a silent pair", "Together they spell the single sound /θ/."],
        ["H", "The word 'sixths' ends in a cluster of", "four consonants", "three consonants", "two consonants", "five consonants", "The sounds are /k/, /s/, /θ/ and /s/."],
        ["H", "The word 'glimpsed' ends in the consonant sounds", "/mpst/", "/mpsd/", "/mst/", "/psed/", "The -ed is pronounced /t/ after the voiceless /s/."],
        ["H", "Which of these words ends in a cluster of four consonant sounds?", "prompts", "lamps", "crafts", "asked", "It ends in /mpts/; the others end in three."],
      ],
      jamb: [
        ["M", "Choose the word that has the same consonant sounds as the letters underlined in 'sa*cks*'.", "taxi", "sacred", "science", "ocean", "The x in taxi is pronounced /ks/."],
        ["H", "Choose the word that ends in a cluster of three consonant sounds.", "tasks", "task", "taste", "tease", "Tasks ends in /sks/."],
      ],
    },
    {
      week: 10,
      title: "Vocabulary Development: Motor Vehicles",
      subtopics: ["Parts of the body of a vehicle", "Parts of the engine and controls", "Words associated with driving and maintenance"],
      objectives: ["Name and explain the main parts of a motor vehicle", "State the function of common engine parts", "Use words associated with driving and repairs correctly", "Choose the correct motoring term in examination items"],
      lesson: {
        title: "The Register of Motor Vehicles",
        summary: "Learn and use the words associated with motor vehicles and motoring.",
        minutes: 40,
        notes: `## Body and frame
| Word | Meaning |
|---|---|
| **chassis** | the frame on which the body of the vehicle is built (pronounced "shassy") |
| **bonnet** | the hinged cover over the engine (American: *hood*) |
| **boot** | the luggage compartment (American: *trunk*) |
| **windscreen** | the front glass (American: *windshield*) |
| **wiper** | the blade that clears rain from the windscreen |
| **bumper** | the bar at the front and back that reduces damage in a collision |
| **fender / mudguard** | the cover over a wheel |
| **dashboard** | the panel in front of the driver carrying the instruments |
| **rear lights** | the lights at the back |
| **side lights** | small lights showing the width of the vehicle |
| **headlamps** | the main front lights |
| **trafficators / indicators** | flashing lights that show the driver intends to turn |
| **exhaust pipe / silencer** | carries waste gases away and reduces noise |

## Engine and controls
| Word | Function |
|---|---|
| **carburettor** | mixes fuel with air for the engine |
| **radiator** | cools the engine with water |
| **alternator** | generates electricity and charges the battery while the engine runs |
| **battery** | stores electricity for starting and lighting |
| **spark plug** | ignites the fuel mixture |
| **fuel gauge** | shows how much fuel is in the tank |
| **speedometer** | shows the speed of the vehicle |
| **odometer** | records the distance travelled |
| **clutch** | disconnects the engine from the gears |
| **gear lever** | used to change gear |
| **accelerator (throttle)** | pedal that increases speed |
| **brake** | slows or stops the vehicle |
| **steering wheel** | controls direction |
| **ignition** | the system that starts the engine |

## Driving and maintenance
*overtake, reverse, swerve, skid, collide, tow, park, stall, overhaul, service, puncture, breakdown, jack, spare tyre, licence, roadworthy, mechanic, vulcaniser, panel beater, pedestrian, zebra crossing, lay-by, roundabout, toll gate.*

## Spelling watch
*brake* (to stop) / *break* (to damage); *tyre*; *chassis*; *carburettor* (British) or *carburetor* (American); *licence* (noun) / *license* (verb) in British English; *gauge*.

## In sentences
- *The mechanic said the **radiator** was leaking, so the engine overheated.*
- *Always use your **trafficator** before you turn.*
- *The **fuel gauge** showed that the tank was nearly empty.*
- *The bus **skidded** on the wet road and **collided** with a pole.*`,
        examples: `**Example 1.** Which part cools the engine? *Answer:* the **radiator**.

**Example 2.** *The driver applied the ______ to avoid hitting the goat.* (brakes / breaks) *Answer:* **brakes**.

**Example 3.** Which instrument shows the amount of petrol in the tank? *Answer:* the **fuel gauge**.`,
      },
      questions: [
        ["E", "The hinged cover over the engine of a car is the", "bonnet", "boot", "bumper", "chassis", "The bonnet is lifted to reach the engine."],
        ["E", "The part of a vehicle that clears rain from the windscreen is the", "wiper", "radiator", "gauge", "silencer", "Wiper blades sweep water off the glass."],
        ["E", "The instrument that shows the speed of a vehicle is the", "speedometer", "fuel gauge", "alternator", "odometer", "The odometer records distance, not speed."],
        ["M", "The frame on which the body of a vehicle is built is the", "chassis", "dashboard", "carburettor", "fender", "The chassis is the base frame."],
        ["M", "The part that mixes fuel with air for the engine is the", "carburettor", "radiator", "alternator", "clutch", "The carburettor prepares the fuel-air mixture."],
        ["M", "A driver shows that he intends to turn by using the", "trafficator", "silencer", "spark plug", "bumper", "Trafficators are the turn indicators."],
        ["M", "Choose the correct sentence.", "The driver stepped on the brake.", "The driver stepped on the break.", "The driver steped on the brake.", "The driver stepped on the brek.", "The pedal that stops a car is spelt 'brake'."],
        ["H", "The part that charges the battery while the engine is running is the", "alternator", "carburettor", "radiator", "ignition key", "The alternator generates electricity."],
        ["H", "A vehicle that is fit to be driven on the road is said to be", "roadworthy", "overhauled", "stalled", "towed", "Roadworthy means in safe working condition."],
        ["H", "When the wheels of a car slide on a wet road, the car is said to", "skid", "stall", "swerve deliberately", "reverse", "To skid is to slide out of control."],
      ],
      jamb: [
        ["M", "Choose the option that best completes the gap: The engine overheated because the ______ was leaking.", "radiator", "wiper", "boot", "trafficator", "The radiator cools the engine."],
        ["H", "Choose the option that best completes the gap: The lorry broke down and had to be ______ to the workshop.", "towed", "toed", "told", "tolled", "To tow is to pull a vehicle behind another."],
      ],
    },
    {
      week: 11,
      title: "Grammatical Structures: Pronouns",
      subtopics: ["Definition and types of pronouns", "Case and agreement of pronouns", "Uses of pronouns in sentences"],
      objectives: ["Define a pronoun", "Identify personal, possessive, reflexive, relative, demonstrative and indefinite pronouns", "Use the correct case of a pronoun", "Make a pronoun agree with its antecedent"],
      lesson: {
        title: "Pronouns: Types and Uses",
        summary: "Revise the types of pronouns and the rules of case and agreement tested in examinations.",
        minutes: 40,
        notes: `## What is a pronoun?
A **pronoun** is a word used **in place of a noun** or noun phrase. The noun it stands for is its **antecedent**: *Ada lost **her** pen; **she** was upset.*

## Types
| Type | Examples | Sentence |
|---|---|---|
| **personal** | I, me, you, he, him, she, her, it, we, us, they, them | ***They** saw **us**.* |
| **possessive** | mine, yours, his, hers, ours, theirs | *The book is **mine**.* |
| **reflexive** | myself, yourself, himself, herself, itself, ourselves, themselves | *He hurt **himself**.* |
| **emphatic** (same forms) | | *The governor **himself** came.* |
| **relative** | who, whom, whose, which, that | *The man **who** called is here.* |
| **demonstrative** | this, that, these, those | ***These** are ripe.* |
| **indefinite** | someone, anybody, everyone, nobody, each, either, neither, none, some, all | ***Everyone** is present.* |
| **interrogative** | who, whom, whose, which, what | ***Who** broke it?* |
| **reciprocal** | each other, one another | *They love **each other**.* |

## Case
| | Subjective | Objective | Possessive |
|---|---|---|---|
| 1st singular | I | me | mine |
| 3rd singular | he / she | him / her | his / hers |
| 1st plural | we | us | ours |
| 3rd plural | they | them | theirs |
| relative | who | whom | whose |

### Rules
1. **Subject** of a verb → subjective: ***He and I** went.* (not *Him and me*)
2. **Object** of a verb or **preposition** → objective: *between you and **me***; *She invited Bola and **me**.*
3. After **than / as**, complete the sentence in your mind: *She is taller than **I** (am).*
4. After **let** → objective: *Let him and **me** go.*
5. **who** for subject, **whom** for object: *the boy **who** came*; *the boy **whom** I saw*; *to **whom** it may concern*.
6. Possessive pronouns take **no apostrophe**: *hers, ours, yours, theirs, its* (*it's* = *it is*).

## Agreement
- A pronoun agrees with its antecedent in **number, person and gender**: *Every boy brought **his** book.*
- **Each, everyone, everybody, either, neither, nobody** are singular: *Each of the girls has **her** own locker.*
- **Reflexive** pronouns need an antecedent in the same clause: *I did it **myself***, not *Myself and Tunde went*.
- There is no such word as *theirselves* or *hisself*: **themselves**, **himself**.

## Relative pronouns
*who/whom* — people; *which* — things; *that* — people or things; *whose* — possession.
*The house **whose** roof leaks is ours.*

## Avoiding ambiguity
*Musa told Ali that he had failed.* (Who failed?) → *Musa said to Ali, "You have failed."*`,
        examples: `**Example 1.** Choose: *Between you and (I / me), the test was easy.* *Answer:* **me** — object of the preposition *between*.

**Example 2.** Choose: *The woman (who / whom) we met is a judge.* *Answer:* **whom** — object of *met*.

**Example 3.** Correct: *Everybody should bring their own cutlasses themself.* *Answer:* In formal usage, *Everybody should bring **his or her** own cutlass.*`,
      },
      questions: [
        ["E", "A pronoun is a word used in place of", "a noun", "a verb", "an adverb", "a conjunction", "It stands for a noun or noun phrase."],
        ["E", "Which of these is a reflexive pronoun?", "herself", "hers", "she", "whose", "Reflexive pronouns end in -self or -selves."],
        ["E", "In 'Those are my shoes', 'Those' is a ______ pronoun.", "demonstrative", "relative", "reflexive", "personal", "It points out particular things."],
        ["M", "Choose the correct sentence.", "He and I were chosen.", "Him and me were chosen.", "Him and I were chosen.", "Me and he were chosen.", "Subjects take the subjective case."],
        ["M", "The teacher gave the prize to Ngozi and", "me", "I", "myself", "mine", "The object of 'to' takes the objective case."],
        ["M", "Each of the boys has brought ______ own racket.", "his", "their", "its", "theirs", "'Each' is singular and the antecedent is masculine."],
        ["M", "The dog wagged ______ tail.", "its", "it's", "its'", "their", "The possessive 'its' has no apostrophe."],
        ["H", "This is the candidate ______ the panel recommended.", "whom", "who", "whose", "which", "It is the object of 'recommended'."],
        ["H", "She is not as tall as", "I", "me", "myself", "mine", "The full form is 'as I am'."],
        ["H", "The players blamed ______ for the defeat.", "themselves", "theirselves", "themself", "theirself", "'Themselves' is the only standard plural reflexive."],
      ],
      jamb: [
        ["M", "Choose the option that best completes the gap: It was ______ who reported the matter to the principal.", "she", "her", "herself", "hers", "After 'It was' and before 'who' as subject, formal usage takes the subjective case."],
        ["H", "Choose the option that best completes the gap: The man ______ car was stolen has gone to the police.", "whose", "who's", "whom", "which", "'Whose' shows possession; 'who's' means 'who is'."],
      ],
    },
    {
      week: 12,
      title: "Listening Comprehension",
      subtopics: ["Listening to speeches, broadcasts and recorded talks", "Identifying main ideas", "Note-taking techniques"],
      objectives: ["Explain what active listening involves", "Identify the main idea and supporting details of a talk", "Take notes using headings, key words and abbreviations", "Answer questions on a passage that has been listened to"],
      lesson: {
        title: "Listening for Main Ideas and Taking Notes",
        summary: "Develop the skills of listening attentively, picking out main ideas and making useful notes.",
        minutes: 40,
        notes: `## Hearing and listening
**Hearing** is receiving sound. **Listening** is paying attention to sound in order to **understand** it. Listening is an active skill.

## Why listen well?
Lessons, lectures, news broadcasts, instructions, announcements and interviews all reach us through the ear, and a speaker — unlike a book — usually cannot be "read again".

## Active listening
- **Prepare:** know the topic; have pen and paper ready.
- **Concentrate:** look at the speaker; ignore distractions.
- **Follow the structure:** introduction → points → conclusion.
- **Listen for signals:**
  - *first, next, another, finally* — a new point
  - *for example, such as* — an illustration
  - *however, on the other hand* — a contrast
  - *therefore, as a result* — a conclusion
  - *the main thing is, above all* — emphasis
- **Notice the voice:** speakers slow down, repeat or stress what matters.
- **Keep an open mind:** do not stop listening because you disagree.

## Barriers to listening
noise; tiredness or hunger; daydreaming; lack of interest; prejudice against the speaker; unfamiliar vocabulary or accent; trying to write down every word.

## Main idea and details
The **main idea** is the central point of the talk. **Supporting details** explain or prove it. Ask: *What is the speaker mainly saying about this subject?*

## Kinds of listening
| Kind | Purpose |
|---|---|
| listening for **gist** | the general idea |
| listening for **specific information** | a name, date, figure |
| **critical** listening | judging facts against opinions |
| **appreciative** listening | enjoying a poem, play or song |

## Note-taking
Do **not** try to write everything.
1. Write the **topic and date** at the top.
2. Use **headings and numbered points**.
3. Write **key words and phrases**, not sentences.
4. Use **abbreviations and symbols**: *e.g.*, *i.e.*, *govt*, *&*, *→* (leads to), *∴* (therefore), *b/c* (because), *esp.* (especially).
5. **Leave space** to add points later.
6. **Review** and tidy your notes soon after.

### Sample notes on a radio talk
**Road safety — causes of accidents**
1. Over-speeding
2. Bad roads — potholes
3. Unroadworthy vehicles — worn tyres, faulty brakes
4. Drunk driving
→ Soln: enforcement + driver education

## Answering listening questions
- Read the questions **before** the passage is played or read, if allowed.
- Answer from **what was said**, not from what you know.
- Give **exact** details for names and figures.`,
        examples: `**Example 1.** A speaker says, "Above all, parents must lead by example." What does *above all* signal? *Answer:* **the most important point**.

**Example 2.** Write as a note: *The government should build more roads because the existing ones are overcrowded.* *Answer:* **Govt → more roads b/c existing overcrowded**.

**Example 3.** Give two barriers to effective listening. *Answer:* **noise** and **daydreaming**.`,
      },
      questions: [
        ["E", "Listening differs from hearing because listening involves", "paying attention in order to understand", "receiving sound only", "speaking loudly", "reading silently", "Listening is active; hearing is passive."],
        ["E", "Which of these is a barrier to effective listening?", "noise", "concentration", "interest in the topic", "note-taking", "Noise distracts the listener."],
        ["E", "In note-taking, a listener should write", "key words and phrases", "every word spoken", "only the speaker's name", "full paragraphs", "Notes are brief records of the main points."],
        ["M", "The phrase 'for example' in a talk signals", "an illustration", "a new main point", "the conclusion", "a contrast", "An example supports a point already made."],
        ["M", "The central point of a talk is its", "main idea", "supporting detail", "anecdote", "greeting", "Details explain or prove the main idea."],
        ["M", "Listening to a broadcast to find out the date of an election is listening for", "specific information", "gist", "appreciation", "entertainment only", "The listener wants one particular detail."],
        ["M", "The word 'however' in a lecture signals", "a contrast", "an example", "a repetition", "the end of the lecture", "It introduces an opposing idea."],
        ["H", "Judging whether a speaker's statements are facts or opinions is", "critical listening", "appreciative listening", "passive hearing", "listening for gist", "Critical listening evaluates what is said."],
        ["H", "In notes, the symbol '∴' stands for", "therefore", "because", "for example", "and", "It is the standard sign for 'therefore'."],
        ["H", "A listener who stops paying attention because he dislikes the speaker is hindered by", "prejudice", "noise", "poor acoustics", "note-taking", "Bias against a speaker blocks understanding."],
      ],
      jamb: [
        ["M", "Choose the option nearest in meaning to the underlined word: The audience listened with *rapt* attention.", "complete", "little", "forced", "divided", "Rapt attention is total, absorbed attention."],
        ["H", "Choose the option opposite in meaning to the underlined word: The chairman's speech was *audible* to everyone in the hall.", "faint", "clear", "lengthy", "moving", "Audible means able to be heard; faint is the nearest opposite here."],
      ],
    },
    {
      week: 13,
      title: "Spoken English: Words with the Schwa",
      subtopics: ["The schwa sound", "The schwa in final unstressed syllables", "The schwa in other unstressed syllables"],
      objectives: ["Describe the schwa sound", "Identify the schwa in the final unstressed syllable of a word", "Pronounce words ending in -er, -or, -ar and -re with the schwa", "Relate the schwa to word stress"],
      lesson: {
        title: "The Schwa /ə/",
        summary: "Learn the commonest vowel sound in English and where it occurs.",
        minutes: 40,
        notes: `## What is the schwa?
The **schwa**, written **/ə/**, is a short, weak, central vowel — the sound at the beginning of *about* and the end of *teacher*. It is the **commonest vowel sound in English**.

The schwa occurs **only in unstressed syllables**. It is never stressed.

## The schwa at the end of words
In standard British pronunciation, the endings **-er, -or, -ar, -re, -our, -a** in an unstressed final syllable are all pronounced /ə/. The letter *r* is **not** sounded.

| Spelling | Words |
|---|---|
| **-er** | *teacher, mother, daughter, sister, enter, water, father, brother, farmer, driver* |
| **-or** | *doctor, actor, tailor, sailor, visitor* |
| **-ar** | *sugar, collar, grammar, beggar* |
| **-re** | *centre, metre, theatre* |
| **-our** | *colour, labour, neighbour, favour* |
| **-a** | *sofa, China, Amina, banana (first and last a)* |
| **-ure** | *picture, nature, measure* |

So *teacher* is /ˈtiːtʃə/, *mother* /ˈmʌðə/, *daughter* /ˈdɔːtə/, *sister* /ˈsɪstə/, *enter* /ˈentə/.

## The schwa elsewhere
| Position | Words (schwa in the syllable shown in bold) |
|---|---|
| first syllable | ***a**bout, **a**go, **a**gain, **a**way, **co**llect, **po**lice, **to**day, **su**ppose* |
| middle syllable | *fam**i**ly* (often), *sep**a**rate, com**for**table, pho**to**graphy* |
| last syllable (other spellings) | *wom**an**, sudd**en**, lem**on**, fam**ous**, pur**pose**, cap**tain*** |

## Schwa and stress
When stress moves, a full vowel may weaken to schwa:
- ***pho**tograph* /ˈfəʊtəɡrɑːf/ — pho**TO**graphy /fəˈtɒɡrəfi/
- ***pre**sent* (noun) — pre**SENT** (verb): the first syllable weakens to /prɪ/.

## Weak forms
Many small grammatical words have a **weak form** with /ə/ in connected speech: *a, an, the* (before consonants), *and, of, to, for, from, at, was, can, them*.
*a cup **of** tea* → /ə kʌp əv tiː/.

## Common faults
- Giving the final syllable a **full vowel**: saying "teach-AH" or "doc-TOR" with a strong, long vowel.
- Sounding the **r** at the end.
- Stressing the syllable that contains the schwa.

## Practice
Say these with a weak, short final syllable:
*teacher, mother, daughter, sister, enter, doctor, sugar, colour, centre, picture.*

## Examination hint
To find the word with the same vowel sound as an underlined unstressed letter, **first find the stressed syllable**; the schwa will be in one of the others.`,
        examples: `**Example 1.** Which syllable of *teacher* contains the schwa? *Answer:* the **second** — /ˈtiːtʃə/.

**Example 2.** Which word begins with the schwa: *apple*, *about*, *able*? *Answer:* **about** — /əˈbaʊt/.

**Example 3.** Is the schwa ever stressed? *Answer:* **No** — it occurs only in unstressed syllables.`,
      },
      questions: [
        ["E", "The symbol for the schwa is", "/ə/", "/e/", "/æ/", "/ɑː/", "It is written as an inverted e."],
        ["E", "The schwa occurs only in ______ syllables.", "unstressed", "stressed", "long", "first", "It is a weak vowel and is never stressed."],
        ["E", "In 'mother', the schwa is in the", "second syllable", "first syllable", "both syllables", "consonant th", "The stressed first syllable has /ʌ/; the weak second has /ə/."],
        ["M", "Which of these words ends with the schwa?", "doctor", "decide", "degree", "deny", "The unstressed -or is pronounced /ə/."],
        ["M", "Which of these words begins with the schwa?", "ago", "angry", "apple", "aim", "The unstressed first syllable of 'ago' is /ə/."],
        ["M", "The underlined letters in 'cent*re*' have the same sound as those in", "sist*er*", "f*ur*", "h*ere*", "c*are*", "Both are the weak final /ə/."],
        ["M", "In 'police', the schwa is in the", "first syllable", "second syllable", "letter c", "final e", "The stress is on the second syllable, so the first weakens."],
        ["H", "Which of these words does NOT contain the schwa?", "green", "banana", "colour", "today", "'Green' has one stressed syllable with /iː/."],
        ["H", "In connected speech, 'of' in 'a cup of tea' is usually pronounced with", "the schwa", "a long /ɔː/", "a diphthong", "a stressed /ɒ/", "Grammatical words take weak forms."],
        ["H", "In 'photography', the schwa occurs in the", "first and third syllables", "second syllable only", "second and fourth syllables", "fourth syllable only", "It is /fəˈtɒɡrəfi/, with stress on the second syllable."],
      ],
      jamb: [
        ["M", "Choose the word that has the same vowel sound as the one represented by the letters underlined in 'teach*er*'.", "sug*ar*", "c*ar*", "h*er*d", "f*ar*e", "The final syllable of 'sugar' is also the schwa."],
        ["H", "Choose the word in which the underlined letter is pronounced as the schwa.", "*a*bove", "*a*nt", "*a*ce", "*a*rt", "The unstressed first syllable of 'above' is /ə/."],
      ],
    },
  ],
};
