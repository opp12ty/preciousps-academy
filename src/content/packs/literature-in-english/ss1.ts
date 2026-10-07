import type { TermPlan } from "../types";

/** SS1 Literature in English — original Precious PS content. Illustrative lines and passages are written for this pack or drawn from works in the public domain. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning, functions and genres of literature",
        subtopics: ["What literature is", "Functions of literature", "The three genres", "Oral and written literature"],
        objectives: ["Define literature and distinguish it from other writing", "State the functions of literature", "Identify the three genres and their distinguishing features", "Distinguish oral from written literature"],
        lesson: {
          title: "What Literature Is",
          summary: "Explain the meaning and functions of literature and identify its three genres.",
          minutes: 40,
          notes: `## What is literature?
Literature is **imaginative writing (or speech) that uses language artistically to express human experience** — to tell stories, present ideas and stir feeling. It is often described as a **mirror of life**: it reflects society, though it is free to reshape what it reflects.

In a wide sense "literature" means anything written on a subject (medical literature, the literature of a product). In the study of Literature in English we mean the narrower, artistic sense — works of the **imagination**.

### What marks a work as literature
- it is **imaginative** — it creates people, places and events, even when based on fact
- it uses language in a **heightened, deliberate way** — imagery, rhythm, figures of speech
- it has **form** — a shape chosen by the writer
- it **suggests** more than it states and invites interpretation
- it deals with **human experience** — love, death, power, justice, faith, loss

## Functions of literature
- **entertainment** — it gives pleasure and relaxation
- **education** — it teaches about people, places, periods and ideas
- **moral instruction** — it shows the results of conduct and helps us judge right and wrong
- **preservation of culture** — it keeps a people's history, values and language alive
- **social criticism** — it exposes injustice, corruption and folly, often through satire
- **development of language** — it widens vocabulary and sharpens expression
- **emotional release** — it lets readers feel and understand emotions safely
- it builds **imagination and sympathy** — we see life through another's eyes
- it **records history** in human terms

## The three genres
A **genre** is a class or kind of literature.

| Genre | Written in | Presented by | Main unit |
|---|---|---|---|
| **prose** | ordinary sentences and paragraphs | a narrator | chapter |
| **drama** | dialogue and stage directions | actors on a stage | act and scene |
| **poetry** | lines and stanzas (verse) | a speaker or persona | line and stanza |

### Prose
Writing in the ordinary form of language, without the line-pattern of verse. It may be **fiction** (invented — the novel, the short story) or **non-fiction** (factual — biography, essay).
### Drama
A story **meant to be acted**. It is told through what characters say and do; the writer is a **playwright** or **dramatist**, and the work is a **play**.
### Poetry
Language arranged in **lines**, compressed and rhythmic, rich in imagery and sound. The writer is a **poet**; the voice that speaks in a poem is the **persona**.

## Oral and written literature
| Oral literature | Written literature |
|---|---|
| passed on by **word of mouth** | preserved in **writing or print** |
| performed before an audience | read privately or performed from a text |
| usually has **no known author** — it belongs to the community | has a **known author** |
| changes from one performer to another | fixed once published |
| older; found in every society | depends on literacy |

## Some basic terms
- **author** — the writer of a work
- **text** — the work being studied
- **fiction** — invented narrative; **non-fiction** — factual writing
- **theme** — the central idea
- **style** — the writer's manner of expression
- **literary appreciation** — the careful reading and judging of a work

## Why study literature?
It trains us to read closely, think critically, write well and understand people unlike ourselves.`,
          examples: `**Example 1.** A work is set out in acts and scenes, with characters' names before their speeches. Which genre is it? *Answer:* **Drama**.

**Example 2.** Give three functions of literature. *Answer:* It **entertains, educates and preserves culture**.

**Example 3.** State one difference between oral and written literature. *Answer:* Oral literature is **passed on by word of mouth and has no known author**; written literature is **recorded and has a known author**.`,
        },
        questions: [
          ["E", "The three main genres of literature are", "prose, drama and poetry", "novel, essay and letter", "comedy, tragedy and farce", "fiction, biography and speech", "Every literary work falls under one of them."],
          ["E", "A person who writes plays is called a", "playwright", "novelist", "poet", "biographer", "He is also known as a dramatist."],
          ["E", "Literature that is passed from one generation to another by word of mouth is", "oral literature", "written literature", "non-fiction", "modern drama", "It usually has no known author."],
          ["M", "The genre of literature written to be performed on a stage is", "drama", "prose", "poetry", "biography", "It is told through dialogue and action."],
          ["M", "Literature is described as a 'mirror of life' because it", "reflects human experience and society", "is always factually true", "is printed on shiny paper", "copies newspapers", "It shows people their own world."],
          ["M", "The voice that speaks in a poem is known as the", "persona", "narrator of the novel", "protagonist of the play", "chorus", "It need not be the poet himself."],
          ["M", "Which of the following is a function of literature?", "preservation of culture", "manufacture of goods", "collection of taxes", "treatment of diseases", "It keeps a people's values and history alive."],
          ["H", "The feature that most clearly distinguishes literature from other forms of writing is its", "imaginative and artistic use of language", "length", "use of difficult words", "factual accuracy", "It creates and suggests rather than merely reports."],
          ["H", "A feature of oral literature is that it", "changes from one performer to another", "is fixed once published", "always has a named author", "depends on literacy", "Each performance is a fresh version."],
          ["H", "The term 'genre' in literature refers to", "a class or kind of literary work", "the name of the author", "the price of a book", "the first chapter of a novel", "Prose, drama and poetry are the main ones."],
        ],
      },
      {
        week: 2,
        title: "Oral literature",
        subtopics: ["Features of oral literature", "Oral narratives: myth, legend, folktale and fable", "Oral poetry and short forms", "Performance and the role of the audience"],
        objectives: ["State the features of oral literature", "Distinguish myth, legend, folktale and fable", "Identify forms of oral poetry, proverbs and riddles", "Explain the place of performance and audience in oral literature"],
        lesson: {
          title: "The Spoken Tradition",
          summary: "Describe the forms and features of oral literature.",
          minutes: 40,
          notes: `## Oral literature
Also called **orature** or **folklore**: the body of stories, songs, poems, sayings and performances **composed and handed down by word of mouth**. In Africa it long preceded writing and still lives beside it.

## Features
- **oral transmission** — memory, not print
- **communal ownership** — no single author
- **performance** — voice, gesture, song, dance and music are part of the work
- **audience participation** — responses, refrains, clapping
- **variation** — no two performances are identical
- **repetition** and formulas — aids to memory
- **didactic** purpose — it teaches the values of the community
- use of **song and refrain**, call and response
- fixed **opening and closing formulas**
- tied to **occasions** — moonlight evenings, festivals, funerals, weddings

## Oral narratives
### Myth
A **sacred story** explaining the origin of the world, of a people, or of natural and religious phenomena, usually involving **gods and supernatural beings** — for example, a creation story telling how the earth was formed. It is believed to be true by those who own it.
### Legend
A story about a **heroic human figure or event from the past**, believed to have a basis in history but enlarged in the telling — the exploits of a founding warrior or a great queen.
### Folktale
A story told chiefly for **entertainment and moral teaching**, with human, animal or spirit characters. It is not taken as fact. Many West African tales feature a **trickster** — the **tortoise** among the Yoruba and Igbo, the **spider (Ananse)** among the Akan, the hare elsewhere.
### Fable
A short tale, usually with **animals that speak and act like humans**, ending in a clear **moral**.
### Epic
A long narrative, usually sung or chanted, celebrating the deeds of a **hero** — such as the Mande epic of **Sundiata** and the Ijaw saga of **Ozidi**.
### Aetiological (explanatory) tale
One that explains **why** something is so — why the tortoise's shell is cracked.

| Form | Characters | Believed true? | Purpose |
|---|---|---|---|
| myth | gods, spirits | yes — sacred | explains origins |
| legend | heroes of the past | partly | celebrates history |
| folktale | humans, animals, spirits | no | entertains and teaches |
| fable | talking animals | no | points a moral |

## Oral poetry
- **praise poetry (panegyric)** — celebrates a person, lineage or deity: Yoruba **oriki**, Zulu **izibongo**, Hausa court praise-singing
- **dirge (elegy)** — a funeral song lamenting the dead
- **lullaby** — a song to soothe a child
- **work songs** — sung to lighten and time labour
- **war songs**; **love songs**; **satirical songs** that mock offenders
- **incantation** — words believed to have magical power
- **religious chants** — hymns to deities; divination verse such as the **Ifa** corpus
- **hunters' chants** — Yoruba **ijala**

## Short forms
- **proverb** — a brief, wise saying expressing a general truth: "A child who washes his hands will eat with elders." Proverbs are, in a famous phrase, the oil with which words are eaten.
- **riddle** — a puzzling question that tests wit
- **tongue-twister** — a phrase hard to say quickly, used for play and speech-training

## The performer
The oral artist — storyteller, **griot** (the hereditary bard and historian of the western Sudan), praise-singer or chanter — is a keeper of memory. He or she uses **voice modulation, mimicry, gesture, facial expression, song and pause** to hold the audience.

## Functions
entertainment; education of the young; preservation of history and genealogy; social control through praise and satire; religious worship; unity.

## Oral literature and modern writing
Many African writers draw on the oral tradition — proverbs, folktales, songs and the rhythms of chant shape their novels, plays and poems.

## Preserving oral literature
recording and transcribing performances; teaching it in schools; festivals; broadcasting.`,
          examples: `**Example 1.** A story explains how the sky came to be far from the earth and involves a god. What form is it? *Answer:* A **myth**.

**Example 2.** What is a dirge? *Answer:* A **funeral song lamenting the dead**.

**Example 3.** Name the trickster figure in many Akan tales. *Answer:* **Ananse, the spider**.`,
        },
        questions: [
          ["E", "A short tale in which animals speak and act like humans and which ends with a moral is a", "fable", "myth", "legend", "sonnet", "It teaches a lesson."],
          ["E", "A song sung to lull a child to sleep is a", "lullaby", "dirge", "war song", "panegyric", "It soothes the child."],
          ["E", "A brief, wise saying that expresses a general truth is a", "proverb", "riddle", "tongue-twister", "myth", "It adds weight and colour to speech."],
          ["M", "A sacred story that explains the origin of the world or of a people, involving gods, is a", "myth", "folktale", "fable", "riddle", "Its owners believe it to be true."],
          ["M", "A story about a heroic human figure of the past, believed to have some basis in history, is a", "legend", "myth", "fable", "lullaby", "The facts are enlarged in the telling."],
          ["M", "A funeral song that laments the dead is a", "dirge", "panegyric", "lullaby", "work song", "It is a form of elegy."],
          ["M", "Poetry composed to celebrate a person, lineage or deity is known as", "praise poetry", "satirical verse", "incantation", "dirge", "Yoruba oriki is an example."],
          ["H", "The hereditary bard and oral historian of the western Sudan is called a", "griot", "persona", "chorus", "playwright", "He preserves genealogies and epics."],
          ["H", "A feature of oral literature that is absent from printed literature is", "variation from one performance to another", "the use of imagery", "the presence of a theme", "the use of characters", "No two performances are exactly alike."],
          ["H", "A tale told to explain why something in nature is the way it is, is described as", "aetiological", "satirical", "epistolary", "autobiographical", "It answers the question 'why'."],
        ],
      },
      {
        week: 3,
        title: "Prose: fiction and non-fiction",
        subtopics: ["Features of prose", "Forms of prose fiction", "Forms of non-fiction", "Types of novel"],
        objectives: ["State the features of prose", "Identify the forms of prose fiction", "Identify the forms of non-fiction prose", "Classify novels by type"],
        lesson: {
          title: "The Forms of Prose",
          summary: "Identify the features of prose and its fictional and non-fictional forms.",
          minutes: 40,
          notes: `## Prose
Writing in **ordinary, continuous language** — sentences and paragraphs — without the line arrangement and regular rhythm of verse.

### Features
- written in **sentences and paragraphs**, grouped into **chapters**
- told by a **narrator**
- makes use of **narration, description, dialogue and reflection**
- usually longer and more detailed than poetry
- language is closer to everyday speech

## Prose fiction
Narrative that is **invented**.
- **novel** — a long fictional narrative with a developed plot, many characters and a wide setting
- **novella** — a work of medium length, shorter than a novel and longer than a short story
- **short story** — a brief narrative with few characters, a single main incident and a single effect; it can be read at one sitting
- **fable**, **parable** (a short story teaching a moral or spiritual lesson through a human situation) and **allegory** (a story in which characters and events stand for ideas)
- **romance** — a tale of adventure, love and the marvellous

## Non-fiction prose
Writing that deals with **real people and events**.
- **biography** — the story of a person's life **written by someone else**
- **autobiography** — the story of a person's life **written by that person**
- **memoir** — an account of part of one's life or of events one witnessed
- **essay** — a short piece giving the writer's views on a subject
- **diary / journal** — a daily record of events and thoughts
- **travelogue** — an account of a journey
- **letter**; **speech**; **history**; **criticism**

| | Biography | Autobiography |
|---|---|---|
| written by | another person | the subject |
| person | third ("he / she") | first ("I") |
| viewpoint | outside | inside |

### Faction
Writing that blends real events with invented detail — also called the non-fiction novel.

## Types of novel
- **historical novel** — set in a real past period, mixing actual events with invented characters
- **social / sociological novel** — examines the problems of a society
- **political novel** — concerned with power and government
- **picaresque novel** — follows the adventures of a likeable rogue (the *pícaro*) in a string of episodes
- **epistolary novel** — told through **letters**
- **Bildungsroman** (novel of growth) — traces a character's development from youth to maturity
- **Gothic novel** — uses mystery, terror and gloomy settings such as old castles
- **detective / crime novel** — centred on solving a crime
- **science fiction** — imagines the effects of scientific advance
- **romance novel** — centred on a love story
- **psychological novel** — explores the inner life of characters
- **satirical novel** — ridicules vice and folly
- **autobiographical novel** — fiction drawn closely from the author's life
- **dystopian novel** — imagines a frightening, oppressive society; a **utopia** imagines an ideal one

## Novel and short story compared
| Novel | Short story |
|---|---|
| long | short |
| several characters, fully developed | few characters |
| main plot with sub-plots | one incident; single plot |
| wide setting and long time span | limited setting and time |

## Elements of prose fiction
**plot, setting, character, theme, point of view, style** — treated in the next lessons.

## Reading prose well
Notice who is telling the story, where and when it happens, what the main conflict is, how the characters change, and what the writer seems to be saying about life.`,
          examples: `**Example 1.** A statesman writes the story of his own life. What form is it? *Answer:* An **autobiography**.

**Example 2.** A novel is told entirely through letters exchanged by two friends. What type is it? *Answer:* An **epistolary** novel.

**Example 3.** Give two differences between a novel and a short story. *Answer:* A novel is **long with many characters and sub-plots**; a short story is **brief, with few characters and a single incident**.`,
        },
        questions: [
          ["E", "An account of a person's life written by that person is", "an autobiography", "a biography", "a novel", "a fable", "It is told in the first person."],
          ["E", "A long fictional narrative in prose with a developed plot and many characters is", "a novel", "a sonnet", "an essay", "a diary", "It is divided into chapters."],
          ["E", "The story of a person's life written by another person is", "a biography", "an autobiography", "a memoir of the writer's own", "a travelogue", "It uses the third person."],
          ["M", "A novel told through letters written by one or more characters is", "epistolary", "picaresque", "Gothic", "historical", "The word comes from 'epistle', a letter."],
          ["M", "A novel that traces the growth of the main character from youth to maturity is a", "Bildungsroman", "detective novel", "satire", "romance", "It is a novel of formation."],
          ["M", "A brief prose narrative with few characters and a single main incident is a", "short story", "novel", "novella of several volumes", "chronicle", "It can be read at one sitting."],
          ["M", "A novel set in a real period of the past, blending actual events with invented characters, is", "a historical novel", "science fiction", "a dystopian novel", "a parable", "The past is recreated imaginatively."],
          ["H", "A novel that follows the episodic adventures of a likeable rogue is described as", "picaresque", "epistolary", "psychological", "allegorical", "Its hero lives by his wits."],
          ["H", "A short story that teaches a moral or spiritual lesson through a human situation is", "a parable", "a myth", "a travelogue", "an essay", "Unlike a fable it uses human characters."],
          ["H", "A work of fiction that imagines a frightening and oppressive future society is", "dystopian", "utopian", "pastoral", "picaresque", "It is the opposite of a utopia."],
        ],
      },
      {
        week: 4,
        title: "Elements of prose: plot and setting",
        subtopics: ["Plot and its stages", "Conflict", "Plot devices", "Setting"],
        objectives: ["Define plot and describe its stages", "Identify the types of conflict in a narrative", "Explain flashback, foreshadowing, suspense and related devices", "Describe the functions of setting"],
        lesson: {
          title: "What Happens, and Where",
          summary: "Explain plot structure, conflict, plot devices and setting.",
          minutes: 40,
          notes: `## Plot
The **ordered arrangement of events in a story, linked by cause and effect**. A story tells us *what* happened; a plot shows us *why*.

The novelist E. M. Forster's illustration: "The king died and then the queen died" is a story. "The king died, and then the queen died of grief" is a plot — the events are causally connected.

## Stages of a plot
1. **exposition** — introduces the characters, the setting and the situation
2. **rising action (complication)** — problems arise and tension builds
3. **climax** — the turning point and moment of highest tension
4. **falling action** — the consequences of the climax unfold
5. **resolution (dénouement)** — the conflict is settled and loose ends are tied

## Kinds of plot
- **chronological (linear) plot** — events are told in the order in which they happened
- **non-linear plot** — the order is rearranged, with flashbacks or jumps in time
- **episodic plot** — a string of loosely linked incidents
- **main plot** and **sub-plot** — a sub-plot is a secondary line of action that runs beside the main one and often mirrors or contrasts with it
- **circular plot** — the story ends where it began
- **frame story** — a story within a story

## Conflict
The **struggle between opposing forces** that drives the plot.
- **external conflict**
  - person against **person**
  - person against **society**
  - person against **nature**
  - person against **fate** or the supernatural
- **internal conflict** — person against **self**: a struggle within the character's mind

## Plot devices
- **flashback** — a scene that interrupts the present action to show an **earlier event**
- **foreshadowing** — hints of **what is to come**
- **suspense** — anxious uncertainty about what will happen
- **surprise / twist** — an unexpected turn
- **in medias res** — beginning "in the middle of things"
- **coincidence** — a chance meeting of events
- **deus ex machina** — an unlikely, sudden intervention that solves the problem
- **cliff-hanger** — breaking off at a moment of high tension
- **anticlimax** — a sudden drop from the important to the trivial; a disappointing outcome
- **poetic justice** — the good are rewarded and the wicked punished, fittingly

## Setting
The **place, time and social circumstances** in which the events occur.
### Aspects
- **geographical (physical) setting** — the country, town, house, landscape
- **temporal setting** — the period, season, time of day
- **social / cultural setting** — the customs, beliefs, class and way of life of the people
- **atmosphere** — the feeling the setting creates

### Functions of setting
- makes the story **believable**
- creates **mood and atmosphere**
- **reveals character** — people are shaped by where they live
- may be the **source of conflict** — a drought, a war, a harsh city
- may be **symbolic** — a storm for inner turmoil
- places the work in its **historical and cultural context**

## Atmosphere and mood
The emotional climate of a passage — tense, gloomy, festive, peaceful — produced by setting, description and diction.

## An illustration (original)
> By the third market day the stream had shrunk to a line of mud, and still Adaku would not sell her father's land. That night the elders' messenger knocked twice.

*Setting:* a rural community in a drought, time marked by market days. *Conflict:* person against society — Adaku against the elders — against a background of person against nature. *Suspense:* what does the knock mean?

## Hints
When describing a plot, do not merely retell the story: show how one event **leads to** another and where the turning point lies.`,
          examples: `**Example 1.** Arrange in order: climax, exposition, resolution, rising action, falling action. *Answer:* **Exposition, rising action, climax, falling action, resolution**.

**Example 2.** A character is torn between obeying her parents and following her conscience. What type of conflict is this? *Answer:* **Internal conflict** (person against self).

**Example 3.** A narrator pauses the present action to recount the hero's childhood. Name the device. *Answer:* **Flashback**.`,
        },
        questions: [
          ["E", "The ordered arrangement of events in a story, linked by cause and effect, is the", "plot", "theme", "setting", "style", "It shows why things happen."],
          ["E", "The place and time in which the events of a story occur make up its", "setting", "plot", "diction", "tone", "It includes the social background."],
          ["E", "The point of highest tension in a story is the", "climax", "exposition", "resolution", "prologue", "It is the turning point."],
          ["M", "The part of a plot that introduces the characters, setting and situation is the", "exposition", "climax", "dénouement", "falling action", "It comes at the beginning."],
          ["M", "A scene that interrupts the present action to present an earlier event is a", "flashback", "foreshadowing", "sub-plot", "cliff-hanger", "It supplies background."],
          ["M", "The use of hints to suggest what will happen later in a story is", "foreshadowing", "flashback", "anticlimax", "coincidence", "It prepares the reader for later events."],
          ["M", "A struggle that takes place within a character's mind is", "internal conflict", "external conflict", "poetic justice", "suspense", "It is person against self."],
          ["H", "The final part of a plot, in which the conflict is settled, is called the", "dénouement", "exposition", "complication", "prologue", "It is also known as the resolution."],
          ["H", "A secondary line of action that runs alongside the main story is a", "sub-plot", "frame", "flashback", "climax", "It often mirrors or contrasts with the main plot."],
          ["H", "A narrative that opens in the middle of the action, leaving earlier events to be supplied later, begins", "in medias res", "with a prologue", "with an epilogue", "in chronological order", "The Latin phrase means 'in the middle of things'."],
        ],
      },
      {
        week: 5,
        title: "Character and characterisation",
        subtopics: ["Character and types of character", "Protagonist, antagonist and other roles", "Methods of characterisation", "Writing a character study"],
        objectives: ["Define character and identify types of character", "Explain the roles of protagonist, antagonist, foil and confidant", "Describe the direct and indirect methods of characterisation", "Write a short character study"],
        lesson: {
          title: "The People of the Story",
          summary: "Identify types of characters and explain how writers reveal character.",
          minutes: 40,
          notes: `## Character
A **person (or animal, or thing given human qualities) who takes part in the action** of a literary work.

**Characterisation** is the **method by which a writer creates and reveals** a character.

## Types of character
### By importance
- **major (main) characters** — central to the plot
- **minor characters** — play supporting parts
### By development (E. M. Forster's terms)
- **round character** — complex and many-sided, like a real person; capable of surprising us
- **flat character** — built round a single quality or idea; easily summed up in a sentence
### By change
- **dynamic (developing) character** — changes in the course of the story because of what happens
- **static character** — remains the same from beginning to end
### Others
- **stock character** — a conventional type that recurs in many works: the wicked stepmother, the miser, the boastful soldier
- **stereotype** — an over-simplified image of a group

## Roles
- **protagonist** — the **central character**, round whom the story revolves
- **hero / heroine** — the admirable central male / female character
- **antagonist** — the character or force that **opposes** the protagonist
- **villain** — a wicked antagonist
- **foil** — a character whose qualities **contrast** with another's and so highlight them
- **confidant(e)** — a character to whom another reveals private thoughts
- **anti-hero** — a central character who lacks the usual heroic qualities
- **tragic hero** — a noble protagonist brought down by a flaw
- **narrator** — the teller, who may or may not be a character
- **eponymous hero** — one whose name is the title of the work

## Methods of characterisation
### Direct (explicit)
The narrator **tells** us what the character is like:
> Mr Bako was a mean, suspicious man.
### Indirect (implicit)
The writer **shows** the character, leaving us to judge. Look at:
1. **speech** — what the character says and how
2. **thoughts** — what goes on in the mind
3. **actions** — what the character does
4. **appearance** — dress, looks, manner
5. **what others say** and how they react
6. **name** — some names suggest qualities
7. **surroundings** — the home, the possessions

> Mr Bako counted the change twice, then a third time, and locked the drawer before he answered.

Here nothing is stated, yet meanness and suspicion are shown.

## Motivation
The **reasons** for a character's behaviour. Convincing characters act from believable motives.

## Character and plot
Character drives plot: events happen because of what people want, fear and choose. In turn, events test and change character.

## Writing a character study
1. **introduce** the character — who they are and their role in the work
2. state the **main traits**, one in each paragraph
3. **support** each trait with evidence — an incident, an action, something said
4. show **relationships** with other characters
5. note any **change or development**
6. comment on the character's **importance** to the plot and themes
7. conclude with your **judgement**

Avoid merely retelling the story; every point should be about the character.

## Useful words for describing character
ambitious, arrogant, compassionate, cunning, courageous, deceitful, generous, gullible, hypocritical, impulsive, loyal, obstinate, proud, resourceful, ruthless, selfless, vain.

## Sympathy
Writers guide our feelings: we may admire, pity, laugh at or condemn a character. Notice how this is done — whose thoughts we are allowed to share, and whose we are not.`,
          examples: `**Example 1.** A character is proud at the start of a novel and humble at the end after suffering. What type is he? *Answer:* A **dynamic (developing)** character.

**Example 2.** "She slipped her last coin into the beggar's bowl and walked on hungry." Which method of characterisation is this? *Answer:* **Indirect** — her generosity is shown through action.

**Example 3.** What is a foil? *Answer:* A character whose **contrasting qualities highlight** those of another.`,
        },
        questions: [
          ["E", "The central character in a literary work is the", "protagonist", "antagonist", "foil", "narrator only", "The story revolves round this character."],
          ["E", "The character who opposes the main character is the", "antagonist", "protagonist", "confidant", "chorus", "Their struggle creates the conflict."],
          ["E", "The means by which a writer creates and reveals characters is", "characterisation", "narration", "versification", "exposition", "It may be direct or indirect."],
          ["M", "A complex, many-sided character who can surprise the reader is", "a round character", "a flat character", "a stock character", "a static character", "Such a character resembles a real person."],
          ["M", "A character who remains the same throughout a work is described as", "static", "dynamic", "round", "tragic", "No change takes place in such a character."],
          ["M", "A character whose contrasting qualities highlight those of another character is a", "foil", "villain", "confidant", "narrator", "The contrast sharpens our view of both."],
          ["M", "When a narrator states plainly that a character is greedy, the method of characterisation is", "direct", "indirect", "dramatic", "symbolic", "The narrator tells rather than shows."],
          ["H", "A conventional type of character that recurs in many works, such as the miser or the wicked stepmother, is", "a stock character", "a round character", "an eponymous hero", "a dynamic character", "Readers recognise the type at once."],
          ["H", "A central character who lacks the usual heroic qualities is", "an anti-hero", "a tragic hero", "an antagonist", "a foil", "He may be weak, ordinary or unprincipled."],
          ["H", "A character whose name is used as the title of the work is described as", "eponymous", "anonymous", "omniscient", "stock", "The work is named after him or her."],
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
        title: "Narrative technique and point of view",
        subtopics: ["The narrator", "First-person narration", "Third-person narration", "Other narrative techniques"],
        objectives: ["Distinguish the narrator from the author", "Describe first-person narration and its effects", "Distinguish omniscient, limited and objective third-person narration", "Identify other narrative techniques"],
        lesson: {
          title: "Who Tells the Story?",
          summary: "Explain the points of view from which stories are told and their effects.",
          minutes: 40,
          notes: `## Narrator and author
The **author** is the real person who wrote the work. The **narrator** is the **voice that tells the story** — a creation of the author. They should not be confused: an author may create a narrator who is foolish, dishonest or very unlike the author.

**Point of view** is the **position from which the story is told**.

## First-person point of view
The narrator is a **character in the story** and uses **"I"** (or "we").
> I knew, the moment I saw the open gate, that my brother had gone.

- **narrator as protagonist** — tells his or her own story
- **narrator as observer (witness)** — tells another's story from the edge of the action

### Effects
- **immediacy** and intimacy — we share the narrator's thoughts and feelings
- seems authentic, like a confession
### Limitations
- the narrator knows only what he sees, hears or is told
- cannot enter the minds of others
- may be biased or mistaken — an **unreliable narrator** is one whose account we cannot fully trust

## Third-person point of view
The narrator stands **outside** the story and refers to characters as **"he", "she", "they"**.

### Omniscient (all-knowing)
The narrator **knows everything** — the thoughts and feelings of all the characters, past and future, events in different places — and may comment on them.
> Musa believed the letter was lost. Halima, two streets away, was already reading it.
- **advantage**: breadth and freedom
- **drawback**: can lessen suspense and intimacy

### Limited omniscient
The narrator enters the mind of **one character only** (or a few), and we see events through that character's eyes.
> Musa wondered why Halima would not look at him.

### Objective (dramatic)
The narrator reports **only what can be seen and heard**, like a camera, without entering any mind.
> Musa stood at the door. Halima folded the letter and said nothing.

## Second-person point of view
The narrator addresses the reader or a character as **"you"**. It is rare.
> You open the door. You already know what you will find.

## Summary
| Point of view | Pronoun | Narrator knows |
|---|---|---|
| first person | I / we | only own experience |
| third-person omniscient | he / she / they | everything |
| third-person limited | he / she | one character's mind |
| objective | he / she | only outward actions |
| second person | you | — |

## Other narrative techniques
- **stream of consciousness** — presenting the **continuous flow of a character's thoughts**, feelings and memories as they occur, often without ordinary logic or punctuation
- **interior monologue** — a character's thoughts rendered as if spoken inwardly
- **epistolary technique** — telling through letters
- **multiple narrators** — different sections told by different voices
- **frame narrative** — a story enclosed within another
- **dialogue** — speech between characters; **narration** — telling; **description** — picturing
- **flashback** and **foreshadowing**
- **reported (indirect) speech** and **direct speech**
- **authorial intrusion** — the author steps in to address the reader directly

## Why point of view matters
It controls **how much we know**, **whose side we take** and **how far we trust** what we are told. The same events told by a different narrator would be a different story.

## How to identify it
1. Look at the **pronouns** used for the main character.
2. Ask: is the narrator **inside** the story?
3. Ask: **whose thoughts** are we given — everyone's, one person's, or no one's?`,
          examples: `**Example 1.** "I never forgave my uncle for that afternoon." Identify the point of view. *Answer:* **First person**.

**Example 2.** A narrator tells us what every character secretly thinks. What kind of narrator is this? *Answer:* **Third-person omniscient**.

**Example 3.** What is an unreliable narrator? *Answer:* One whose account **cannot be fully trusted**, because of bias, ignorance or deceit.`,
        },
        questions: [
          ["E", "The voice that tells the story in a work of fiction is the", "narrator", "protagonist always", "publisher", "critic", "It is created by the author."],
          ["E", "A story told by a character using 'I' is written from the", "first-person point of view", "third-person point of view", "omniscient point of view", "objective point of view", "The narrator takes part in the story."],
          ["E", "The position from which a story is told is its", "point of view", "plot", "setting", "theme", "It determines how much the reader knows."],
          ["M", "A narrator who knows the thoughts and feelings of all the characters is", "omniscient", "limited", "unreliable", "a first-person observer", "The word means all-knowing."],
          ["M", "'You walk into the room and the talking stops.' This sentence uses the", "second-person point of view", "first-person point of view", "third-person limited point of view", "omniscient point of view", "The narrator addresses 'you'."],
          ["M", "A limitation of first-person narration is that the narrator", "cannot enter the minds of other characters", "knows everything that happens everywhere", "is never involved in the action", "must use 'he' and 'she' for himself", "He reports only what he experiences or is told."],
          ["M", "A narrator who reports only what can be seen and heard, without revealing any thoughts, is", "objective", "omniscient", "first-person", "intrusive", "The effect is like that of a camera."],
          ["H", "The technique of presenting the continuous flow of a character's thoughts and impressions as they occur is", "stream of consciousness", "foreshadowing", "authorial intrusion", "frame narrative", "Logic and punctuation may be loosened."],
          ["H", "A narrator whose account of events cannot be fully trusted is described as", "unreliable", "omniscient", "objective", "eponymous", "He may be biased, ignorant or deceitful."],
          ["H", "In third-person limited narration, the reader sees events through", "the mind of one character", "the minds of all characters", "no character's mind", "the author's own diary", "Other characters are known only from outside."],
        ],
      },
      {
        week: 2,
        title: "Theme, subject matter and style",
        subtopics: ["Subject matter and theme", "Identifying themes", "Style and diction", "Tone and mood"],
        objectives: ["Distinguish subject matter from theme", "Identify the themes of a passage", "Describe the elements of a writer's style", "Distinguish tone from mood"],
        lesson: {
          title: "What It Says and How It Says It",
          summary: "Distinguish subject matter from theme and describe style, diction, tone and mood.",
          minutes: 40,
          notes: `## Subject matter
**What the work is about on the surface** — the events and situation. It answers "What happens?"

## Theme
The **central idea or underlying message** the work explores — what it says about life. It answers "What is the writer showing us through these events?"

| | Subject matter | Theme |
|---|---|---|
| nature | concrete — people and events | abstract — an idea |
| stated as | a summary | a statement about life |
| example | a village boy travels to the city and is cheated | the loss of innocence; the corruption of city life |

A work usually has a **major theme** and several **minor themes**.

### Common themes
love; betrayal; ambition; conflict of cultures; corruption; injustice; the abuse of power; appearance and reality; fate and free will; the passage of time; death; freedom; greed; jealousy; sacrifice; the search for identity; the position of women.

### How to identify a theme
- look at the **title**
- note what **problems** the characters face and how they end
- look for **repeated** ideas, images and words (a recurring element is a **motif**)
- consider what the **characters learn**
- ask what the writer seems to **approve or condemn**

A theme is best expressed as a **statement**, not a single word: not just "greed" but "greed destroys the bonds of family".

### Moral
A direct lesson a work teaches. Not every work has a simple moral, but every serious work has themes.

## Style
The **characteristic way in which a writer uses language** — "how" as opposed to "what".
### Elements of style
- **diction** — choice of words
- **sentence structure (syntax)** — long or short, simple or complex
- **imagery** and **figurative language**
- **tone**
- **narrative technique** — point of view, dialogue, flashback
- **use of proverbs, local idiom, humour, irony**
- **rhythm** and sound

### Diction
The writer's **choice of words**. It may be
- **formal** or **informal (colloquial)**
- **simple** or **elevated**
- **concrete** (things we can sense) or **abstract** (ideas)
- **literal** or **figurative**
- **archaic** — old-fashioned words
- **technical** — the vocabulary of a field
- marked by **dialect** or pidgin for local colour

### Denotation and connotation
- **denotation** — the plain dictionary meaning of a word
- **connotation** — the feelings and associations a word carries
"Home" and "house" denote much the same thing, but "home" connotes warmth and belonging.

## Tone
The **writer's or speaker's attitude** towards the subject or the audience, as shown by the choice of words. Tone may be serious, playful, mocking, bitter, admiring, angry, nostalgic, solemn, ironic, sympathetic.

## Mood
The **feeling or atmosphere created in the reader** — gloom, fear, joy, peace, tension.

| Tone | Mood |
|---|---|
| the writer's attitude | the reader's feeling |
| "How does the speaker feel about this?" | "How does this make me feel?" |

## Illustration (original)
> The clerk stamped the form, yawned, and told the old woman to come back next month — as he had told her every month since the rains.

*Subject matter:* an old woman is repeatedly turned away from an office. *Theme:* the indifference of officialdom to the poor. *Tone:* quietly critical, ironic. *Mood:* frustration and pity. *Style:* plain diction; one long sentence whose last clause delivers the sting.

## Register
The variety of language suited to a situation — legal, religious, scientific, conversational.`,
          examples: `**Example 1.** A story tells of two brothers who quarrel over land until both lose it. State the subject matter and a theme. *Answer:* **Subject matter:** a dispute between brothers over land. **Theme:** greed destroys family ties.

**Example 2.** Distinguish tone from mood. *Answer:* **Tone** is the **writer's attitude**; **mood** is the **feeling produced in the reader**.

**Example 3.** What is diction? *Answer:* A writer's **choice of words**.`,
        },
        questions: [
          ["E", "The central idea that a literary work explores is its", "theme", "plot", "setting", "diction", "It is an abstract statement about life."],
          ["E", "A writer's choice of words is known as", "diction", "syntax", "plot", "rhyme", "It is a key element of style."],
          ["E", "The feeling or atmosphere that a work creates in the reader is its", "mood", "tone", "theme", "plot", "Examples are gloom, joy and tension."],
          ["M", "The attitude of a writer towards his subject, as revealed by his language, is the", "tone", "mood", "setting", "motif", "It may be mocking, solemn or admiring."],
          ["M", "The surface events and situation that a work deals with are its", "subject matter", "theme", "style", "moral", "It answers the question 'What happens?'"],
          ["M", "The feelings and associations that a word carries beyond its dictionary meaning are its", "connotation", "denotation", "etymology", "register", "'Home' suggests warmth and belonging."],
          ["M", "The characteristic manner in which a writer uses language is his", "style", "theme", "plot", "genre", "It concerns how something is said."],
          ["H", "An idea, image or phrase that recurs throughout a work and helps to develop its theme is", "a motif", "a plot", "a foil", "a climax", "Its repetition draws attention to it."],
          ["H", "Which of the following best expresses a theme rather than a subject matter?", "Unchecked ambition leads to ruin", "A general kills a king and takes the throne", "Two families quarrel in a town", "A girl leaves her village for the city", "A theme is a general statement about life."],
          ["H", "The plain, literal meaning of a word as given in a dictionary is its", "denotation", "connotation", "tone", "imagery", "It carries no emotional colouring."],
        ],
      },
      {
        week: 3,
        title: "Drama: nature and types",
        subtopics: ["Features of drama", "Tragedy", "Comedy and its varieties", "Other dramatic forms"],
        objectives: ["State the features that distinguish drama from other genres", "Describe tragedy and its features", "Describe comedy, farce, satire and related forms", "Identify tragicomedy, melodrama and other forms"],
        lesson: {
          title: "Kinds of Play",
          summary: "Describe the nature of drama and its main types.",
          minutes: 40,
          notes: `## Drama
A literary work **written to be performed by actors before an audience**. The word comes from a Greek word meaning "to do" or "to act".

### Features
- told through **dialogue** and **action** — there is usually no narrator
- divided into **acts** and **scenes**
- has **stage directions** — instructions about setting, movement and manner
- meant for **performance** — it is completed on the stage
- a list of characters — the ***dramatis personae***
- uses **costume, lighting, sound, scenery and props**
- depends on **conflict**
- experienced by an audience **together**, in a limited time

### Origins
Western drama grew out of **religious festivals in ancient Greece** in honour of the god **Dionysus**. In Africa, drama has roots in **ritual, festival, masquerade and storytelling**.

## Tragedy
A serious play in which the **protagonist — usually a person of high standing — passes from good fortune to disaster**, often death, through a mixture of his own error and circumstances.

### Features
- a serious, weighty subject
- a **tragic hero** of noble stature
- the hero's **tragic flaw (*hamartia*)** — an error of judgement or weakness of character; excessive pride is ***hubris***
- a **reversal** of fortune and a moment of **recognition**
- an unhappy ending — suffering and usually death
- arouses **pity and fear**, leading to ***catharsis*** — the purging or release of these emotions in the audience (Aristotle's term)

## Comedy
A play that **amuses and ends happily**, often in marriage or reconciliation. It deals with ordinary people and human follies, and its problems are resolved.

### Varieties
- **romantic comedy** — lovers overcome obstacles and are united
- **comedy of manners** — witty mockery of the habits of fashionable society
- **farce** — broad, exaggerated comedy built on absurd situations, mistaken identity and physical humour; it aims simply at laughter
- **satire** — ridicules vice and folly in order to correct them
- **burlesque / parody** — mocks a serious work or style by imitation
- **black (dark) comedy** — finds humour in grim subjects
- **slapstick** — rough physical clowning

## Tragedy and comedy compared
| Tragedy | Comedy |
|---|---|
| serious | light and amusing |
| noble protagonist | ordinary people |
| ends in disaster or death | ends happily |
| arouses pity and fear | arouses laughter |
| the hero is isolated | society is reunited |

## Other forms
- **tragicomedy** — blends tragic and comic elements; a serious action that ends happily, or a comic one shadowed by sadness
- **melodrama** — sensational, with exaggerated emotions, clear-cut heroes and villains, and virtue rewarded
- **history play (chronicle)** — dramatises events from history
- **morality play** — medieval drama in which characters personify virtues and vices (as in *Everyman*)
- **mystery and miracle plays** — medieval plays on Bible stories and the lives of saints
- **masque** — a courtly entertainment of music, dance and spectacle
- **opera** — drama set wholly to music; **musical** — a play with songs and dance
- **mime** — acting **without words**, by gesture and movement
- **pantomime** — a lively entertainment with song, dance and clowning
- **closet drama** — a play meant to be read rather than staged
- **one-act play** — a short play in a single act
- **theatre of the absurd** — plays presenting life as meaningless and illogical
- **monodrama** — a play for a single performer
- **radio and television drama**; **dance drama**; **folk opera**

## Drama and theatre
**Drama** is the written work; **theatre** is the performance and the place where it is given.`,
          examples: `**Example 1.** A play ends with the marriages of three couples after a series of misunderstandings. What type is it? *Answer:* A **comedy** (romantic comedy).

**Example 2.** What is a tragic flaw? *Answer:* The **weakness or error of judgement** in a tragic hero that leads to his downfall.

**Example 3.** Define mime. *Answer:* **Acting without words**, using gesture and movement.`,
        },
        questions: [
          ["E", "A play that ends unhappily, usually with the death of the main character, is a", "tragedy", "comedy", "farce", "masque", "It deals with a serious subject."],
          ["E", "A play that amuses and ends happily is a", "comedy", "tragedy", "dirge", "chronicle", "It often ends in marriage or reconciliation."],
          ["E", "Acting that uses gesture and movement without words is", "mime", "opera", "soliloquy", "monologue", "No speech is used."],
          ["M", "A comic play built on absurd situations, exaggeration and physical humour is a", "farce", "tragedy", "masque", "morality play", "Its only aim is laughter."],
          ["M", "A play that blends tragic and comic elements is a", "tragicomedy", "melodrama", "farce", "mime", "A serious action may end happily."],
          ["M", "The weakness or error of judgement that brings about the downfall of a tragic hero is his", "tragic flaw", "catharsis", "epilogue", "foil", "The Greek term is hamartia."],
          ["M", "A sensational play with exaggerated emotions and clear-cut heroes and villains is", "a melodrama", "a comedy of manners", "a closet drama", "a chronicle play", "Virtue is rewarded in the end."],
          ["H", "The release of pity and fear that an audience experiences at the end of a tragedy is called", "catharsis", "hubris", "hamartia", "denouement", "Aristotle used the term in the Poetics."],
          ["H", "A medieval play in which characters personify virtues and vices is a", "morality play", "masque", "farce", "history play", "'Everyman' is the best-known example."],
          ["H", "Excessive pride that leads a tragic hero to defy warnings and overreach himself is", "hubris", "pathos", "bathos", "irony", "It is a common form of the tragic flaw."],
        ],
      },
      {
        week: 4,
        title: "Dramatic techniques",
        subtopics: ["Dialogue, monologue, soliloquy and aside", "Dramatic irony and suspense", "Structure of a play", "Other devices"],
        objectives: ["Distinguish dialogue, monologue, soliloquy and aside", "Explain dramatic irony and its effect", "Describe the structure of a play", "Identify comic relief, flashback, play-within-a-play and related devices"],
        lesson: {
          title: "How Plays Work",
          summary: "Explain the main techniques dramatists use to tell a story on stage.",
          minutes: 40,
          notes: `## Speech in drama
- **dialogue** — conversation between **two or more characters**; the chief means by which a play tells its story
- **monologue** — a **long speech by one character** to others on stage or to the audience
- **soliloquy** — a speech in which a character, **alone on stage (or believing himself alone), speaks his thoughts aloud**. It reveals his true mind to the audience.
- **aside** — a **brief remark** by a character meant for the **audience (or one other character) only**, and supposedly unheard by the rest on stage

| | Soliloquy | Aside |
|---|---|---|
| length | long | short |
| others on stage | none (or unaware) | present, but "do not hear" |
| purpose | reveals inner thoughts fully | a quick comment or secret |

## Irony in drama
- **dramatic irony** — the **audience knows something that a character does not**, so that the character's words or actions have a meaning he does not see. It creates tension, pity or humour.
- **verbal irony** — saying the opposite of what is meant
- **situational irony** — the outcome is the opposite of what was expected

*Illustration:* a king vows to hunt down a murderer and curse him — while the audience already knows that the king himself is the man.

## Building interest
- **suspense** — the audience's anxious uncertainty about what will happen
- **conflict** — the opposition of forces
- **tension** — mounting strain
- **surprise** — the unexpected turn
- **foreshadowing** — hints of what is to come

## Structure of a play
- **act** — a major division; **scene** — a smaller division, usually marked by a change of place or time
- **prologue** — an introductory speech or scene **before** the main action
- **epilogue** — a closing speech or scene **after** the main action
- the classical five-stage pattern (**Freytag's pyramid**):
  1. **exposition**
  2. **rising action**
  3. **climax**
  4. **falling action**
  5. **dénouement** — called the **catastrophe** in a tragedy

### The three unities
Rules drawn from classical drama: the unity of **action** (one main plot), of **time** (events within a single day) and of **place** (one location).

## Other devices
- **comic relief** — a humorous scene or character introduced into a serious play to **ease tension**
- **flashback** — a scene showing earlier events
- **play-within-a-play** — a short play performed by the characters inside the main play
- **chorus** — a group (or single figure) that **comments on the action**, gives background and voices the feelings of the community
- **stage directions** — the playwright's instructions on setting, movement, gesture and tone, usually in italics or brackets
- **disguise** and **mistaken identity** — sources of comedy and complication
- **song, dance, music and drumming** — especially in African drama
- **audience participation**
- **symbolism** — objects and actions that stand for ideas
- **pathos** — the quality that moves an audience to pity
- **deus ex machina** — a sudden, contrived rescue
- **poetic justice** — fitting reward and punishment
- **cliff-hanger** — ending a scene at a moment of tension
- **narrator** — a figure who addresses the audience directly and links scenes
- **the "fourth wall"** — the imaginary wall between actors and audience; a character who speaks directly to the audience "breaks" it

## Reading a play
Because a play is meant to be seen, read it with the stage in mind: imagine where characters stand, how they speak, what the audience can see that the characters cannot.

## Hint
In examinations you may be asked for the **dramatic significance** of a scene. Ask: what does it add to **plot** (what happens next because of it), **character** (what we learn), **theme** and **mood**?`,
          examples: `**Example 1.** A character alone on stage speaks aloud about his plan to betray his friend. What device is this? *Answer:* A **soliloquy**.

**Example 2.** The audience knows that the "stranger" is the heroine's lost brother, but she does not. Name the device. *Answer:* **Dramatic irony**.

**Example 3.** What is the purpose of comic relief? *Answer:* To **ease the tension** in a serious play.`,
        },
        questions: [
          ["E", "Conversation between two or more characters in a play is", "dialogue", "soliloquy", "prologue", "epilogue", "It is the chief means of telling the story."],
          ["E", "A speech in which a character alone on stage speaks his thoughts aloud is", "a soliloquy", "an aside", "a dialogue", "a chorus", "It reveals his true mind to the audience."],
          ["E", "An introductory speech or scene that comes before the main action of a play is the", "prologue", "epilogue", "climax", "interlude", "The epilogue comes at the end."],
          ["M", "A brief remark made by a character to the audience, supposedly unheard by others on stage, is", "an aside", "a soliloquy", "a monologue", "a stage direction", "It is short and private."],
          ["M", "A humorous scene introduced into a serious play to ease tension is", "comic relief", "dramatic irony", "poetic justice", "catharsis", "It gives the audience a moment of laughter."],
          ["M", "The playwright's instructions about setting, movement and manner of speaking are", "stage directions", "dialogues", "prologues", "choruses", "They are usually printed in italics or brackets."],
          ["M", "A situation in which the audience knows something that a character on stage does not is", "dramatic irony", "verbal irony", "suspense only", "pathos", "The character's words carry a meaning he does not see."],
          ["H", "A closing speech or scene that follows the main action of a play is the", "epilogue", "prologue", "exposition", "aside", "It rounds off the performance."],
          ["H", "The group of performers who comment on the action and voice the feelings of the community in a play is the", "chorus", "cast", "audience", "dramatis personae", "It originated in Greek drama."],
          ["H", "The classical 'unities' require a play to observe unity of", "action, time and place", "plot, theme and style", "act, scene and line", "tragedy, comedy and farce", "One plot, one day and one location."],
        ],
      },
      {
        week: 5,
        title: "Theatre and stage terms",
        subtopics: ["People of the theatre", "The stage and its parts", "Elements of production", "Types of stage"],
        objectives: ["Identify the roles of people involved in a production", "Name the parts of a stage", "Explain costume, props, lighting and other elements of production", "Describe the main types of stage"],
        lesson: {
          title: "From Page to Stage",
          summary: "Explain the terms used in the theatre and in the production of plays.",
          minutes: 40,
          notes: `## People of the theatre
- **playwright (dramatist)** — writes the play
- **director** — interprets the play and guides the actors; has overall artistic control
- **producer** — arranges the finances and organisation of the production
- **actor / actress** — performs a role
- **cast** — **all the actors** in a play; **casting** — choosing actors for the parts
- **dramatis personae** — the **list of characters**, printed at the front of the text
- **stage manager** — runs the performance backstage and gives cues
- **prompter** — reminds actors of forgotten lines, from the wings
- **understudy** — an actor who learns a part in order to replace the regular actor if necessary
- **costumier** — designs or provides the costumes
- **make-up artist**; **set designer**; **lighting and sound technicians**
- **choreographer** — designs the dances
- **audience** — those who watch
- **usher** — shows the audience to their seats
- **critic** — reviews the performance

## Parts of the stage and theatre
- **stage** — the acting area
- **backstage** — the area behind the stage, out of the audience's view
- **wings** — the sides of the stage, hidden from the audience, where actors wait
- **proscenium** — the arch or frame through which the audience views the stage
- **apron** — the part of the stage in front of the curtain
- **auditorium** — where the audience sits
- **orchestra pit** — the sunken area for musicians
- **green room** — the room where actors rest when not on stage
- **dressing room** — where actors change and make up
- **box office** — where tickets are sold
- **gallery / balcony** — upper seating
- **curtain** — separates stage from auditorium; its rise and fall mark the beginning and end

### Stage positions
Described from the **actor's** point of view, facing the audience:
- **downstage** — towards the audience; **upstage** — away from the audience
- **stage left / stage right** — the actor's left and right
- **centre stage**

## Elements of production
- **costume** — the **clothes** worn by actors, showing period, status and character
- **make-up** — cosmetics that change the actor's appearance
- **props (properties)** — the **movable objects** used on stage: a letter, a sword, a calabash
- **set / scenery** — the painted or built background representing the place
- **lighting** — creates time of day, mood and focus
- **sound effects** — thunder, drumming, a knock
- **music and dance**
- **mask** — covers the face; important in Greek and African theatre
- **backdrop** — the painted cloth at the back of the stage

## Performance terms
- **rehearsal** — a practice performance; **dress rehearsal** — the final practice in full costume
- **audition** — a trial performance to select actors
- **cue** — the signal (a word or action) for an actor to speak or enter
- **entrance** and **exit**; *exeunt* — "they go out" (all leave)
- **blocking** — planning the actors' movements
- **improvisation** — acting without a prepared script
- **role** — the part an actor plays
- **stage fright** — nervousness before performing
- **interval (intermission)** — the break between acts
- **curtain call** — the actors' return to acknowledge applause
- **première** — the first public performance
- **matinée** — an afternoon performance
- **tableau** — a "frozen picture" in which actors hold a pose
- **script** — the written text of the play

## Types of stage
- **proscenium (picture-frame) stage** — the audience sits on one side and looks through the arch
- **thrust (apron) stage** — projects into the audience, who sit on three sides
- **arena stage (theatre-in-the-round)** — the audience surrounds the acting area on all sides
- **open-air theatre (amphitheatre)** — a performance space without a roof, as in ancient Greece
- the **village square** or palace courtyard — the traditional African performance space

## Why these matter in reading
Stage directions use these terms. Knowing them helps you to picture a performance and to comment on how a scene would work in the theatre.`,
          examples: `**Example 1.** What are props? *Answer:* **Movable objects used by actors** on stage.

**Example 2.** Distinguish the cast from the dramatis personae. *Answer:* The **cast** is the **group of actors**; the **dramatis personae** is the **list of characters** in the play.

**Example 3.** On which type of stage does the audience sit all round the acting area? *Answer:* An **arena stage (theatre-in-the-round)**.`,
        },
        questions: [
          ["E", "All the actors who take part in a play are known as the", "cast", "audience", "chorus", "props", "They perform the roles."],
          ["E", "The clothes worn by actors on stage are called", "costumes", "props", "scenery", "cues", "They show period and status."],
          ["E", "The people who watch a play in the theatre are the", "audience", "cast", "crew", "prompters", "They sit in the auditorium."],
          ["M", "Movable objects used by actors on stage, such as a letter or a sword, are", "props", "costumes", "backdrops", "wings", "The word is short for 'properties'."],
          ["M", "The list of characters printed at the beginning of a play is the", "dramatis personae", "prologue", "stage direction", "epilogue", "It is a Latin term."],
          ["M", "The person who reminds actors of forgotten lines during a performance is the", "prompter", "producer", "usher", "critic", "He stands in the wings."],
          ["M", "The sides of the stage, hidden from the audience, where actors wait to enter are the", "wings", "aprons", "galleries", "pits", "Actors enter and exit through them."],
          ["H", "The signal for an actor to speak or to make an entrance is a", "cue", "prop", "tableau", "matinée", "It may be a word, a sound or an action."],
          ["H", "A stage surrounded on all sides by the audience is known as", "an arena stage", "a proscenium stage", "a thrust stage", "a backdrop", "It is also called theatre-in-the-round."],
          ["H", "The final practice of a play, performed in full costume before the opening, is the", "dress rehearsal", "audition", "première", "curtain call", "Everything is done as on the opening night."],
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
        title: "Poetry: nature and types",
        subtopics: ["Features of poetry", "Narrative poetry", "Lyric poetry", "Dramatic and other kinds of poetry"],
        objectives: ["State the features that distinguish poetry from prose", "Identify the forms of narrative poetry", "Identify the forms of lyric poetry", "Describe dramatic poetry and other kinds"],
        lesson: {
          title: "Kinds of Poem",
          summary: "Describe the features of poetry and classify poems by type.",
          minutes: 40,
          notes: `## Poetry
The genre in which language is **arranged in lines and chosen for its sound, rhythm and suggestive power**, so as to express thought and feeling in a concentrated way. William Wordsworth called poetry "the spontaneous overflow of powerful feelings".

### Features
- written in **lines** (verses), often grouped into **stanzas**
- **economy of words** — much is said in little
- **rhythm**, and sometimes **rhyme** and **metre**
- rich in **imagery** and **figurative language**
- appeals to **emotion** and imagination
- **poetic licence** — the poet's freedom to depart from the normal rules of grammar, word order or fact for effect
- a **persona** speaks

### Poetry and prose
| Poetry | Prose |
|---|---|
| lines and stanzas | sentences and paragraphs |
| compressed | expansive |
| marked rhythm | rhythm of ordinary speech |
| heavy use of figures | plainer language |

## Narrative poetry
Poetry that **tells a story**.
- **epic** — a long narrative poem in an elevated style about the deeds of a **hero** on whom the fate of a people depends: Homer's *Iliad* and *Odyssey*, Milton's *Paradise Lost*
- **mock-epic** — treats a trivial subject in the grand epic manner, for comic effect
- **ballad** — a short narrative poem, originally sung, telling a dramatic story simply, in short stanzas (often four lines) with a **refrain**
- **romance** — a verse tale of knights, love and adventure

## Lyric poetry
Short poems expressing the **personal thoughts and feelings** of a single speaker; originally sung to the lyre.
- **sonnet** — a lyric of **fourteen lines** with a set rhyme scheme
- **ode** — a dignified, often lengthy lyric **addressed to** a person, thing or idea, in praise or meditation
- **elegy** — a poem of **mourning** for the dead, or of serious reflection on loss
- **dirge** — a short song of lament, meant to be sung at a funeral
- **pastoral (idyll)** — idealises **country life** and shepherds
- **hymn** — a song of praise to God
- **song**; **lullaby**
- **epithalamium** — a poem celebrating a marriage

## Dramatic poetry
Poetry in which the speaker is clearly a **character** in a situation.
- **dramatic monologue** — a poem in which a **single character speaks to a silent listener** at a critical moment, revealing his own character unintentionally
- verse drama — plays written in verse

## Other kinds
- **didactic poem** — written to **teach** or instruct
- **satirical poem** — ridicules vice or folly
- **panegyric** — a poem of **praise**
- **epigram** — a very short, witty poem
- **epitaph** — lines written for a tombstone
- **limerick** — a humorous five-line poem rhyming *aabba*
- **haiku** — a Japanese form of three lines with 5, 7 and 5 syllables
- **parody** — a comic imitation of another work
- **protest poetry** — speaks against injustice
- **free verse** — poetry without regular metre or rhyme
- **blank verse** — unrhymed lines of iambic pentameter

## Basic terms
- **line (verse)**; **stanza** — a group of lines forming a unit
- **refrain** — a line or lines **repeated at intervals**, usually at the end of stanzas
- **couplet** — two lines; **tercet** — three; **quatrain** — four; **sestet** — six; **octave** — eight
- **poet**; **persona**; **addressee** — the one spoken to

## An illustration (original)
> Mother of the red earth, hear us:
> we who ate your yams
> now bring you only dust.

Short lines; an address to the earth as a person; the feeling is sorrow and guilt — a lyric with the manner of a prayer.

## Reading a poem
Read it aloud. Ask who is speaking, to whom, about what, in what mood — and how the sound and pictures support the sense.`,
          examples: `**Example 1.** A poem of fourteen lines expresses a lover's feelings. What type is it? *Answer:* A **sonnet**.

**Example 2.** What is an elegy? *Answer:* A **poem of mourning** for the dead.

**Example 3.** Which type of poem tells the story of a hero's great deeds in elevated style at great length? *Answer:* An **epic**.`,
        },
        questions: [
          ["E", "A poem of fourteen lines with a set rhyme scheme is", "a sonnet", "an ode", "a ballad", "an epic", "It is a form of lyric poetry."],
          ["E", "A poem that mourns the death of a person is", "an elegy", "a limerick", "a pastoral", "a panegyric", "It expresses grief and reflection."],
          ["E", "A group of lines forming a unit in a poem is a", "stanza", "paragraph", "chapter", "scene", "It is the poetic equivalent of a paragraph."],
          ["M", "A long narrative poem in an elevated style about the deeds of a hero is", "an epic", "a sonnet", "an epigram", "a lullaby", "Homer's 'Iliad' is an example."],
          ["M", "A short narrative poem, originally sung, that tells a dramatic story in simple stanzas with a refrain is", "a ballad", "an ode", "a haiku", "an epitaph", "It belongs to the folk tradition."],
          ["M", "A dignified lyric poem addressed to a person, object or idea is", "an ode", "a limerick", "a parody", "a mock-epic", "It praises or meditates on its subject."],
          ["M", "A line or group of lines repeated at intervals in a poem is a", "refrain", "couplet", "caesura", "foot", "It often comes at the end of each stanza."],
          ["H", "A poem in which a single character addresses a silent listener and unintentionally reveals his own nature is", "a dramatic monologue", "an elegy", "a pastoral", "a ballad", "The speaker is not the poet."],
          ["H", "The freedom of a poet to depart from the normal rules of language for effect is known as", "poetic licence", "poetic justice", "free verse", "blank verse", "Word order or grammar may be altered."],
          ["H", "A poem that idealises country life and the world of shepherds is", "a pastoral", "a satire", "an epic", "an epigram", "It presents rural life as simple and peaceful."],
        ],
      },
      {
        week: 2,
        title: "Figures of speech: comparison and contrast",
        subtopics: ["Literal and figurative language", "Simile, metaphor and personification", "Apostrophe and metonymy", "Antithesis, oxymoron and paradox"],
        objectives: ["Distinguish literal from figurative language", "Identify simile, metaphor and personification", "Identify apostrophe, metonymy and synecdoche", "Identify antithesis, oxymoron and paradox"],
        lesson: {
          title: "Saying One Thing in Terms of Another",
          summary: "Identify and explain figures of comparison, association and contrast.",
          minutes: 40,
          notes: `## Literal and figurative language
- **literal** language means exactly what it says: "The boy ran fast."
- **figurative** language departs from the plain meaning for effect: "The boy flew down the road."

A **figure of speech** is an expression used in a non-literal way to make meaning **vivid, forceful or fresh**.

## Figures of comparison
### Simile
A **direct comparison** between two unlike things using **"like"** or **"as"** (or "as … as", "than").
> Her voice was **like** cool water.
> He is **as** stubborn **as** a goat.

### Metaphor
An **indirect comparison** in which one thing **is said to be** another, without "like" or "as".
> The classroom was a **marketplace**.
> Time is a **thief**.

An **extended metaphor** is carried through several lines or a whole poem.

| Simile | Metaphor |
|---|---|
| uses "like" or "as" | uses neither |
| A is *like* B | A *is* B |
| comparison is stated | comparison is implied |

### Personification
Giving **human qualities to non-human things** — objects, animals, ideas.
> The wind **whispered** through the maize.
> Hunger **knocked** at every door.

### Apostrophe
**Directly addressing** an absent person, a dead person, an object or an abstract idea as though it could hear.
> **O Death**, where is your sting?
> **Lagos**, you have swallowed my brothers.

## Figures of association
### Metonymy
Using the name of something **closely associated** with a thing in place of the thing itself.
> The **crown** will decide. (= the king)
> The **pen** is mightier than the **sword**. (= writing; force)

### Synecdoche
Using a **part to stand for the whole**, or the whole for a part.
> All **hands** on deck. (= sailors)
> Nigeria won the match. (= the Nigerian team)

## Figures of contrast
### Antithesis
Placing **opposite ideas side by side in a balanced structure**.
> **To err is human; to forgive, divine.**
> Many are called, but few are chosen.

### Oxymoron
Placing **two contradictory words together**.
> a **deafening silence**; **bitter sweet**; a **living death**; **cruel kindness**

### Paradox
A **statement that seems absurd or self-contradictory but contains a truth**.
> The child is father of the man.
> One must be cruel to be kind.

| | Oxymoron | Paradox |
|---|---|---|
| size | two words | a whole statement |
| example | "wise fool" | "The more you learn, the less you know." |

## Tenor and vehicle
In a metaphor, the **tenor** is the thing being described and the **vehicle** is the image used. In "Time is a thief", time is the tenor and thief the vehicle; the shared ground is that both take things away unnoticed.

## Explaining the effect
In an examination it is not enough to name a figure. Say **what is compared with what** and **what it suggests**.
> "The harmattan's teeth" — *personification / metaphor*: the wind is given teeth, suggesting that the cold bites and hurts.

## Dead metaphors
Comparisons so common that we no longer notice them: "the leg of a table", "the mouth of a river".

## Practice — identify the figure
1. The stars winked at the lonely traveller. — *personification*
2. Her words were daggers. — *metaphor*
3. He ran like a hunted antelope. — *simile*
4. The kettle is boiling. — *metonymy* (the water)
5. Sweet sorrow. — *oxymoron*`,
          examples: `**Example 1.** Identify the figure: "The moon is a silver coin." *Answer:* **Metaphor** — the moon is said to be a coin, without "like" or "as".

**Example 2.** Identify the figure: "The city never sleeps." *Answer:* **Personification** — a city is given the human act of sleeping.

**Example 3.** Distinguish oxymoron from paradox. *Answer:* An **oxymoron** joins **two contradictory words**; a **paradox** is a **seemingly contradictory statement** that holds a truth.`,
        },
        questions: [
          ["E", "A direct comparison between two unlike things using 'like' or 'as' is a", "simile", "metaphor", "paradox", "pun", "The comparison is openly stated."],
          ["E", "'The sun smiled on the village' is an example of", "personification", "simile", "hyperbole", "oxymoron", "The sun is given a human action."],
          ["E", "'Life is a journey' is an example of", "metaphor", "simile", "apostrophe", "antithesis", "Life is said to be a journey, without 'like' or 'as'."],
          ["M", "'O Freedom, how long must we wait for you?' illustrates", "apostrophe", "metonymy", "oxymoron", "synecdoche", "An abstract idea is addressed directly."],
          ["M", "The expression 'a deafening silence' is an example of", "oxymoron", "paradox", "antithesis", "simile", "Two contradictory words are placed together."],
          ["M", "'United we stand, divided we fall' is an example of", "antithesis", "personification", "metonymy", "apostrophe", "Opposite ideas are set in a balanced structure."],
          ["M", "In the sentence 'The palace has announced a new festival', 'the palace' is an example of", "metonymy", "simile", "paradox", "oxymoron", "The place stands for the ruler associated with it."],
          ["H", "'Less is more' is best described as", "a paradox", "a simile", "an apostrophe", "a synecdoche", "It seems contradictory but holds a truth."],
          ["H", "'The farmer needs more hands for the harvest.' The use of 'hands' illustrates", "synecdoche", "metaphor", "antithesis", "personification", "A part stands for the whole person."],
          ["H", "In the metaphor 'Hope is a lamp', the word 'lamp' is the", "vehicle", "tenor", "persona", "refrain", "It is the image used to describe hope."],
        ],
      },
      {
        week: 3,
        title: "Figures of speech: sound, emphasis and meaning",
        subtopics: ["Sound devices", "Figures of emphasis and understatement", "Irony, sarcasm and pun", "Repetition and rhetorical question"],
        objectives: ["Identify alliteration, assonance, consonance and onomatopoeia", "Identify hyperbole, litotes, euphemism and climax", "Distinguish irony from sarcasm and identify the pun", "Explain the effects of repetition and rhetorical questions"],
        lesson: {
          title: "Sound and Emphasis",
          summary: "Identify and explain figures of sound, emphasis and meaning.",
          minutes: 40,
          notes: `## Sound devices
### Alliteration
The **repetition of the same consonant sound at the beginning** of words close together.
> **F**ull **f**athom **f**ive thy **f**ather lies. (Shakespeare)
> The **s**ilent **s**ea **s**lid **s**lowly shoreward.

### Assonance
The **repetition of the same vowel sound** in nearby words.
> The r**ai**n in Sp**ai**n st**ay**s m**ai**nly on the pl**ai**n.
> A d**ee**p gr**ee**n str**ea**m.

### Consonance
The **repetition of consonant sounds within or at the end** of words.
> The lu**mp**y, bu**mp**y road. — bla**ck** clo**ck** ti**ck**ed.

### Onomatopoeia
The use of **words whose sound imitates their meaning**.
> buzz, hiss, bang, splash, murmur, crackle, sizzle, thud

### Sibilance
A repeated hissing **"s" / "sh"** sound — a special kind of alliteration.

### Rhyme
The agreement of sounds at the **ends of lines**: *night / light*.

**Effects of sound devices:** they create music, link words, imitate the thing described and make lines memorable.

## Figures of emphasis
### Hyperbole
**Deliberate exaggeration** for emphasis or humour.
> I have told you a **million** times.
> She wept an ocean.

### Litotes
**Understatement** that affirms something by **denying its opposite**.
> He is **no fool**. (= he is clever)
> That was **not a bad** meal.

### Meiosis
Understatement that makes something seem smaller or less important than it is.

### Euphemism
A **mild or pleasant expression used in place of a harsh or unpleasant one**.
> He **passed away**. (= died)
> She is **between jobs**. (= unemployed)

### Climax
Arranging ideas in **ascending order of importance**.
> I came, I saw, I conquered.

### Anticlimax (bathos)
A **sudden descent from the important to the trivial**, often comic.
> He lost his wife, his fortune and his umbrella.

## Figures of meaning
### Irony
A contrast between **what is said and what is meant**, or between **what is expected and what happens**.
- **verbal irony** — saying the opposite of what one means: "What lovely weather!" in a storm
- **situational irony** — the fire station burns down
- **dramatic irony** — the audience knows what the character does not

### Sarcasm
A **bitter, cutting remark intended to wound or mock**, often by using irony.
> "Brilliant! You have broken it again."
All sarcasm uses irony's reversal, but not all irony is meant to hurt.

### Pun (paronomasia)
A **play on words** that have similar sounds or more than one meaning.
> A dying man in Shakespeare says: "Ask for me tomorrow, and you shall find me a **grave** man."

### Innuendo
An indirect, usually unflattering hint.

## Figures of repetition
### Repetition
Repeating a word or phrase **for emphasis**.
> Alone, alone, all, all alone.

### Anaphora
Repeating a word or phrase **at the beginning of successive lines or clauses**.
> **We shall** fight on the beaches; **we shall** fight in the fields.

### Parallelism
Using **similar grammatical structures** in successive lines or clauses.

### Rhetorical question
A question asked **for effect, not for an answer**.
> Who does not love his own mother?

## Other useful terms
- **allusion** — a passing reference to a person, place, event or text outside the work
- **exclamation** — an outcry of strong feeling
- **inversion** — reversing the normal word order: "Great is thy mercy."
- **transferred epithet** — an adjective moved from the person it describes to something associated: "a **sleepless** night"

## Practice
1. "The bees buzzed busily." — *alliteration and onomatopoeia*
2. "I could eat a horse." — *hyperbole*
3. "He is not unfamiliar with trouble." — *litotes*
4. "The late chief" for "the dead chief". — *euphemism*`,
          examples: `**Example 1.** Identify the device: "Peter picked a peck of pickled peppers." *Answer:* **Alliteration** — repetition of the initial "p" sound.

**Example 2.** Identify the figure: "The whole world came to her wedding." *Answer:* **Hyperbole** — deliberate exaggeration.

**Example 3.** Why is "He has gone to rest" a euphemism? *Answer:* It is a **mild expression for death**.`,
        },
        questions: [
          ["E", "The repetition of the same consonant sound at the beginning of nearby words is", "alliteration", "assonance", "onomatopoeia", "rhyme", "Example: 'wild and windy night'."],
          ["E", "Words such as 'buzz', 'hiss' and 'bang' illustrate", "onomatopoeia", "alliteration", "hyperbole", "irony", "Their sound imitates their meaning."],
          ["E", "Deliberate exaggeration for emphasis is", "hyperbole", "litotes", "euphemism", "pun", "Example: 'I waited for ages.'"],
          ["M", "The repetition of the same vowel sound in nearby words is", "assonance", "consonance", "alliteration", "sibilance", "Example: 'the low moan of the road'."],
          ["M", "'The old chief has joined his ancestors', used instead of 'the old chief has died', is an example of", "euphemism", "hyperbole", "climax", "apostrophe", "A harsh fact is expressed mildly."],
          ["M", "A question asked for effect and not to obtain an answer is", "a rhetorical question", "an apostrophe", "an aside", "a paradox", "The answer is obvious or implied."],
          ["M", "A play on words that sound alike or have more than one meaning is a", "pun", "simile", "litotes", "metonymy", "It often produces humour."],
          ["H", "'She is not unkind' is an example of", "litotes", "hyperbole", "oxymoron", "climax", "A positive is expressed by denying its opposite."],
          ["H", "'He lost his crown, his kingdom and his walking stick' illustrates", "anticlimax", "climax", "antithesis", "anaphora", "The list drops suddenly from the weighty to the trivial."],
          ["H", "The repetition of a word or phrase at the beginning of successive lines or clauses is", "anaphora", "assonance", "inversion", "allusion", "Example: 'We shall… We shall… We shall…'"],
        ],
      },
      {
        week: 4,
        title: "Imagery, symbolism and atmosphere",
        subtopics: ["Imagery and the senses", "Symbol and symbolism", "Allegory and allusion", "How imagery creates mood"],
        objectives: ["Explain imagery and classify images by the sense they appeal to", "Explain symbols and identify common ones", "Distinguish symbol, allegory and allusion", "Explain how imagery creates mood and atmosphere"],
        lesson: {
          title: "Pictures in Words",
          summary: "Explain imagery and symbolism and show how they create mood.",
          minutes: 40,
          notes: `## Imagery
The use of **language that appeals to the senses** so as to create pictures and sensations in the reader's mind. An **image** is a single such word-picture.

### Types of imagery
| Type | Sense | Example |
|---|---|---|
| **visual** | sight | "the red dust rose behind the lorry" |
| **auditory** | hearing | "the tin roof drummed under the rain" |
| **tactile** | touch | "the harmattan's dry fingers on her skin" |
| **olfactory** | smell | "the sour smell of fermenting cassava" |
| **gustatory** | taste | "the bitter kola puckered his tongue" |
| **kinetic / kinaesthetic** | movement | "lizards darting across the wall" |
| **thermal** | heat and cold | "the noon sun pressed on their backs" |

Imagery may be **literal** (a plain description) or **figurative** (through simile, metaphor, personification).

### Functions of imagery
- makes description **vivid** and concrete
- conveys **feeling** and creates **mood**
- reveals **theme** — a pattern of images (of darkness, of disease, of chains) points to the central idea
- makes abstract ideas **tangible**

## Symbol and symbolism
A **symbol** is an object, person, place or action that **stands for something beyond itself** — usually an abstract idea — while remaining itself. **Symbolism** is the use of symbols.

### Common symbols
| Symbol | Often stands for |
|---|---|
| dove | peace |
| cross | Christianity; sacrifice |
| crown | kingship; authority |
| darkness / night | evil, ignorance, death |
| light / dawn | knowledge, hope, new beginning |
| rose | love, beauty |
| chain | bondage |
| river / road | the journey of life |
| white | purity; in some cultures, mourning |
| red | danger, blood, passion |
| drum | African tradition; communication |
| seasons | stages of life |
| storm | turmoil |

- **conventional (universal) symbols** — widely understood, like those above
- **private (contextual) symbols** — given meaning by a particular work

### Symbol and metaphor
A metaphor says one thing *is* another for a moment; a symbol is a real thing in the work that carries **added meaning throughout**.

## Allegory
A **narrative in which characters, events and settings consistently represent abstract ideas or real persons**, so that the story has a second, parallel meaning. In John Bunyan's *The Pilgrim's Progress* (1678) a man named Christian travels from the City of Destruction to the Celestial City — the journey of the soul.

| Symbol | Allegory |
|---|---|
| a single element with extra meaning | a whole story with a second meaning |
| meaning may be open | one-to-one correspondence |

## Allusion
A **brief, indirect reference** to a person, place, event or text — biblical, classical, historical or literary — which the reader is expected to recognise.
> "He met his Waterloo" (historical). "The patience of Job" (biblical). "A Herculean task" (classical).

## Mood and atmosphere
Images work together to produce feeling.

### Illustration (original)
> The lamp guttered. Along the wall the shadows leaned closer, and somewhere beyond the compound a dog began to howl, thinly, as though it too had heard the footsteps.

- **visual**: guttering lamp, leaning shadows
- **auditory**: the howl; the footsteps
- **personification**: shadows "leaned closer"
- **mood**: fear and suspense

Change the images and the mood changes:
> The lamp burned steadily. Across the compound the children's laughter rose, and the smell of roasting corn drifted in at the door.

Now the mood is contentment — produced by warm visual, auditory and olfactory images.

## Other terms
- **emblem** — a fixed symbol, such as a national coat of arms
- **archetype** — a pattern or figure that recurs across cultures: the journey, the wise old man, the trickster
- **pathetic fallacy** — attributing human feelings to nature so that the weather or landscape reflects a character's mood: a storm on the night of a murder
- **synaesthesia** — describing one sense in terms of another: "a loud shirt", "a warm colour"
- **conceit** — an elaborate, surprising extended comparison

## How to comment on imagery
1. **quote** the image
2. name the **sense** it appeals to and any **figure** involved
3. explain what it **suggests**
4. link it to **mood or theme**`,
          examples: `**Example 1.** "The pepper soup burned its way down his throat." Which sense does the image appeal to? *Answer:* **Taste (gustatory)** — and touch / heat.

**Example 2.** In a poem, a caged bird is used to represent an oppressed people. What is the bird? *Answer:* A **symbol**.

**Example 3.** What is pathetic fallacy? *Answer:* Making **nature reflect human feelings**, as when a storm accompanies a character's rage.`,
        },
        questions: [
          ["E", "Language that appeals to the senses and creates pictures in the reader's mind is", "imagery", "rhyme", "plot", "metre", "It makes description vivid."],
          ["E", "An object that stands for an idea beyond itself is a", "symbol", "simile", "stanza", "refrain", "The dove, for example, stands for peace."],
          ["E", "An image that appeals to the sense of hearing is described as", "auditory", "visual", "olfactory", "tactile", "Example: 'the clang of the school bell'."],
          ["M", "'The smell of fresh bread filled the street' is an example of", "olfactory imagery", "gustatory imagery", "auditory imagery", "tactile imagery", "It appeals to the sense of smell."],
          ["M", "A brief, indirect reference to a well-known person, event or text is", "an allusion", "an allegory", "an illusion", "an apostrophe", "The reader is expected to recognise it."],
          ["M", "A story in which characters and events consistently represent abstract ideas is", "an allegory", "a ballad", "an elegy", "a soliloquy", "It has a second, parallel meaning."],
          ["M", "'The rough bark scraped her palms' appeals mainly to the sense of", "touch", "smell", "taste", "hearing", "It is a tactile image."],
          ["H", "The device by which the weather or landscape is made to reflect a character's emotions is", "pathetic fallacy", "dramatic irony", "synecdoche", "anticlimax", "A storm may accompany a scene of rage."],
          ["H", "Describing one sense in terms of another, as in 'a bitter cold', is", "synaesthesia", "metonymy", "litotes", "inversion", "Taste is used here to describe temperature."],
          ["H", "A symbol differs from an allegory in that a symbol", "is a single element carrying extra meaning, not a whole story", "is always a long narrative", "has no meaning beyond itself", "must be a human character", "An allegory sustains the second meaning throughout."],
        ],
      },
      {
        week: 5,
        title: "Introduction to literary appreciation",
        subtopics: ["What appreciation means", "Approaching an unseen poem", "Approaching an unseen prose passage", "A worked example"],
        objectives: ["Explain what literary appreciation involves", "Apply a method to an unseen poem", "Apply a method to an unseen prose passage", "Answer short questions on an unseen text"],
        lesson: {
          title: "Reading Closely",
          summary: "Learn a method for reading and commenting on unseen poems and prose passages.",
          minutes: 40,
          notes: `## Literary appreciation
The **careful reading of a text so as to understand, analyse and judge it** — what it says, how it says it, and how well. In examinations it appears as questions on **unseen** passages you have not studied before.

## A method for an unseen poem
Read the poem **at least twice** — once for the general sense, again for detail.
1. **Subject matter** — what is it about on the surface?
2. **Speaker and addressee** — who speaks, and to whom?
3. **Theme** — what idea lies beneath?
4. **Tone and mood** — the speaker's attitude; the feeling created
5. **Diction** — are the words simple, formal, harsh, tender?
6. **Imagery and figures of speech** — which, and with what effect?
7. **Sound** — rhyme, rhythm, alliteration, repetition
8. **Structure** — stanzas, line length, any pattern or shift
9. **Your response** — what is effective?

A handy summary: **who, to whom, what, how, why**.

## A method for unseen prose
1. **What is happening?** — the situation
2. **Narrator** — point of view
3. **Setting** — place, time, atmosphere
4. **Character** — what we learn and how
5. **Diction and sentence structure**
6. **Imagery and figures of speech**
7. **Tone and mood**
8. **Theme**

## A worked example — poem (original)
> **Market Day**
>
> Before the sun has found the roofs
> my mother's basket finds the road;
> the peppers burn like little lamps,
> the path is long, and long her load.
>
> At dusk the basket rides home light,
> her wrapper knotted round the day's
> thin coins. She counts them twice, and smiles
> as if the smiling also pays.

**Subject matter:** a mother goes to market before dawn to sell peppers and returns at dusk with small earnings.
**Speaker:** her child, observing with affection.
**Theme:** the dignity and sacrifice of a hard-working mother; poverty borne with courage.
**Tone:** tender, admiring, with quiet sadness. **Mood:** sympathy.
**Diction:** simple, everyday words — "basket", "peppers", "coins" — fitting the humble subject.
**Figures of speech:**
- **simile** — "the peppers burn like little lamps": their bright red glows in the dawn
- **personification** — the sun "has found the roofs"; the basket "finds the road" and "rides home"
- **repetition / inversion** — "long, and long her load" stresses weariness
- **alliteration** — "long her load"
- **metaphor** — "the day's thin coins": "thin" suggests how little she earned
- **irony** in the last line — a smile cannot pay, yet she smiles
**Structure:** two quatrains — morning and evening — rhyming *abcb*; the regular beat suggests steady walking.

## A worked example — prose (original)
> The headmaster did not look up. He went on signing, the nib scratching in the silence, while Tunde stood with the letter growing damp in his fist. Outside, someone was ringing the bell for the last lesson. It rang for a long time.

**Situation:** a boy waits before a headmaster with a letter. **Narration:** third person, limited to Tunde. **Character:** the headmaster — cold, powerful — shown indirectly by his not looking up; Tunde — nervous, shown by the "damp" letter. **Imagery:** auditory — "scratching", the bell. **Mood:** tension. **Style:** the short final sentence stretches the moment.

## Answering questions
- answer **precisely** what is asked
- **quote** briefly to support a point
- name the device, **then explain its effect**
- write in complete sentences; avoid retelling
- for rhyme scheme, label the end sounds with letters

## Words for tone
admiring, angry, bitter, celebratory, critical, humorous, ironic, mournful, nostalgic, reverent, satirical, sympathetic, tender.

## Common mistakes
naming figures without explaining them; confusing subject matter with theme; confusing tone with mood; guessing at a "hidden meaning" the words do not support.`,
          examples: `**Example 1.** In "Market Day", what does "thin coins" suggest? *Answer:* That the mother's **earnings are small** — "thin" stresses poverty.

**Example 2.** What is the rhyme scheme of the first stanza of "Market Day"? *Answer:* ***abcb*** — "road" and "load" rhyme.

**Example 3.** In the prose passage, how is the headmaster's character shown? *Answer:* **Indirectly** — through his action of not looking up and continuing to sign.`,
        },
        questions: [
          ["E", "The careful reading of a text in order to understand, analyse and judge it is", "literary appreciation", "dictation", "translation", "proofreading", "It considers what is said and how."],
          ["E", "The first step in approaching an unseen poem is to", "read it carefully more than once", "count the number of words", "memorise it", "rewrite it in another language", "The general sense must be grasped before analysis."],
          ["E", "A four-line stanza is called a", "quatrain", "couplet", "sestet", "octave", "'Market Day' is written in two of them."],
          ["M", "In 'the peppers burn like little lamps', the figure of speech is", "simile", "metaphor", "hyperbole", "litotes", "The comparison uses 'like'."],
          ["M", "The attitude of the speaker in 'Market Day' towards the mother is one of", "admiration and tenderness", "mockery", "anger", "indifference", "The child observes her effort with affection."],
          ["M", "In the line 'my mother's basket finds the road', the device used is", "personification", "onomatopoeia", "euphemism", "pun", "The basket is given a human action."],
          ["M", "When commenting on a figure of speech in an examination, a candidate should", "name it and explain its effect", "only copy the line", "only name it", "ignore the context", "Marks are given for explanation."],
          ["H", "A stanza in which only the second and fourth lines rhyme has the rhyme scheme", "abcb", "abab", "aabb", "abba", "The first and third lines do not rhyme."],
          ["H", "In the prose extract about Tunde and the headmaster, the letter 'growing damp in his fist' suggests that Tunde is", "nervous", "careless", "proud", "sleepy", "Sweating palms show anxiety."],
          ["H", "The short sentence 'It rang for a long time' at the end of the extract mainly serves to", "prolong the tension of the moment", "introduce a new character", "describe the bell's shape", "end the conflict happily", "The reader is made to wait, like Tunde."],
        ],
      },
    ],
  },
];
