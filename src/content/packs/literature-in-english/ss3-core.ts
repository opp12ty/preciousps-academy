import type { TermPlan } from "../types";

/** SS3 Literature in English — original Precious PS content. Passages and poems for appreciation were written for this pack. */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Advanced literary devices",
        subtopics: ["Devices of structure and arrangement", "Devices of repetition", "Devices of expression", "Narrative and dramatic devices"],
        objectives: ["Identify chiasmus, zeugma, asyndeton and polysyndeton", "Identify epistrophe, anadiplosis and related devices of repetition", "Identify periphrasis, tautology, epigram and ambiguity", "Identify epiphany, anachronism, juxtaposition and related devices"],
        lesson: {
          title: "Beyond the Common Figures",
          summary: "Extend your knowledge of literary devices and their effects.",
          minutes: 40,
          notes: `## Devices of structure and arrangement
### Chiasmus
A **reversal of the order of terms in two parallel clauses** — an A-B-B-A pattern.
> **Fair** is **foul**, and **foul** is **fair**. (Shakespeare)
> He **works** to **live**; he does not **live** to **work**.

### Zeugma
**One word (usually a verb) governs two others in different senses**.
> She **lost** her purse and her temper.
> He **took** his hat and his leave.

### Asyndeton
The **omission of conjunctions** between words or clauses — it gives speed and force.
> I came, I saw, I conquered.

### Polysyndeton
The **use of many conjunctions** in close succession — it slows the pace and piles up detail.
> They cooked **and** ate **and** sang **and** danced till morning.

### Parallelism
Successive phrases or clauses built on the **same grammatical pattern**.
> Easy to promise, hard to perform.

### Inversion (anastrophe)
Reversal of normal word order: "Silent stood the drummers."

### Ellipsis
The **omission of words** that the reader can supply: "Some went to the farm; others, to the stream."

### Juxtaposition
Placing two things **side by side to bring out a contrast**: a beggar asleep against the wall of a bank.

## Devices of repetition
| Device | Pattern | Example |
|---|---|---|
| **anaphora** | repetition at the **beginning** of successive clauses | "**We have** waited. **We have** hoped. **We have** buried our sons." |
| **epistrophe (epiphora)** | repetition at the **end** of successive clauses | "…government of **the people**, by **the people**, for **the people**." |
| **anadiplosis** | the last word of one clause **begins the next** | "Fear leads to **anger**; **anger** leads to hate." |
| **epizeuxis** | immediate repetition of a word | "**Never, never, never**." |
| **refrain** | a line repeated at intervals | — |
| **tautology** | needless repetition of the **same idea** in different words | "a free gift"; "return back" |
| **pleonasm** | using more words than necessary | "I saw it with my own eyes." |

## Devices of expression
### Periphrasis (circumlocution)
A **roundabout way of saying something**: "the place where the sun goes to sleep" for the west.
### Epigram
A **brief, witty, pointed saying**: "Experience is the name everyone gives to their mistakes."
### Aphorism
A concise statement of a **general truth**: "Knowledge is power."
### Ambiguity
An expression that admits of **more than one meaning** — a fault in instructions, a richness in poetry.
### Innuendo
An **indirect hint**, usually disparaging.
### Rhetoric
The art of persuasive speech; **rhetorical devices** include the rhetorical question, anaphora and the triple ("of the three").
### Hypallage (transferred epithet)
An adjective attached to a word other than the one it logically describes: "a **weary** road"; "he passed a **restless** night".
### Antonomasia
A **title or description used in place of a proper name**, or a proper name for a type: "the Bard" for Shakespeare; "a Solomon" for a wise man.
### Bathos
An unintended or comic drop from the lofty to the ridiculous.
### Pathos
The quality in a work that **evokes pity and sorrow**.
### Invective
Violent verbal attack.

## Narrative and dramatic devices
- **epiphany** — a **sudden moment of insight** in which a character sees the truth of a situation
- **anachronism** — something placed in a **period to which it does not belong**: a clock striking in ancient Rome
- **anagnorisis** — the tragic hero's moment of **recognition**
- **peripeteia** — a sudden **reversal** of fortune
- **nemesis** — fitting **retribution** that overtakes a wrongdoer
- **motif** — a recurring image or idea
- **leitmotif** — a phrase or image attached to a character or theme
- **red herring** — a false clue that misleads
- **cliff-hanger**; **flash-forward (prolepsis)** — a jump to future events
- **vignette** — a brief, vivid descriptive sketch
- **verisimilitude** — the appearance of truth; likeness to real life
- **suspension of disbelief** — the reader's willingness to accept the fiction
- **willing narrator / implied author**; **authorial comment**
- **interior monologue**
- **caricature**
- **anthropomorphism** — giving human form and behaviour to animals or gods throughout a work

## Commonly confused pairs
| Pair | Difference |
|---|---|
| anaphora / epistrophe | beginning / end |
| asyndeton / polysyndeton | no conjunctions / many |
| allusion / illusion | a reference / a false impression |
| paradox / oxymoron | a statement / two words |
| pathos / bathos | pity / ridiculous descent |
| metonymy / synecdoche | associated thing / part for whole |
| tautology / pleonasm | same idea repeated / needless words |

## Using the terms
Naming a rare device earns little unless you show **what it does**. "The polysyndeton — 'and… and… and…' — makes the list of chores seem endless, as it does to the tired child."`,
          examples: `**Example 1.** Identify the device: "He stole her wallet and her heart." *Answer:* **Zeugma** — "stole" governs two objects in different senses.

**Example 2.** Identify the device: "When the going gets tough, the tough get going." *Answer:* **Chiasmus** — the terms are repeated in reverse order.

**Example 3.** What is an epiphany in fiction? *Answer:* A **sudden moment of insight** experienced by a character.`,
        },
        questions: [
          ["E", "'They ran and jumped and laughed and sang' illustrates", "polysyndeton", "asyndeton", "ellipsis", "chiasmus", "Many conjunctions are used in succession."],
          ["E", "A brief, witty and pointed saying is", "an epigram", "an epic", "an elegy", "an epilogue", "Example: 'Brevity is the soul of wit.'"],
          ["E", "The quality in a literary work that arouses pity and sorrow is", "pathos", "bathos", "satire", "suspense", "The reader is moved to compassion."],
          ["M", "'He opened the door and his heart to the orphan' is an example of", "zeugma", "tautology", "epistrophe", "litotes", "One verb governs two objects in different senses."],
          ["M", "'She returned back to the village' contains", "tautology", "inversion", "anaphora", "antonomasia", "'Returned' already includes the idea of 'back'."],
          ["M", "The repetition of a word or phrase at the end of successive clauses is", "epistrophe", "anaphora", "anadiplosis", "asyndeton", "Example: '…of the people, by the people, for the people.'"],
          ["M", "The mention of a wrist-watch in a story set in ancient Egypt would be", "an anachronism", "an allusion", "an epiphany", "an aphorism", "The object does not belong to the period."],
          ["H", "'Do I love you because you are beautiful, or are you beautiful because I love you?' illustrates", "chiasmus", "zeugma", "polysyndeton", "periphrasis", "The key terms are repeated in reverse order."],
          ["H", "'We shall speak, we shall march, we shall not turn back' omits conjunctions for force. The device is", "asyndeton", "polysyndeton", "pleonasm", "hypallage", "The clauses are joined without 'and'."],
          ["H", "In 'he spent an anxious night', the adjective 'anxious' properly describes the man, not the night. This is", "a transferred epithet", "an oxymoron", "a paradox", "an apostrophe", "The epithet is shifted to an associated noun."],
        ],
      },
      {
        week: 2,
        title: "Irony, humour and tone",
        subtopics: ["Kinds of irony revisited", "Sources of humour", "Recognising tone", "Shifts of tone"],
        objectives: ["Distinguish verbal, situational, dramatic and cosmic irony", "Identify the sources of humour in a text", "Describe the tone of a passage accurately", "Detect and explain shifts of tone"],
        lesson: {
          title: "Hearing the Voice",
          summary: "Analyse irony, humour and tone in prose, verse and drama.",
          minutes: 40,
          notes: `## Irony
Irony always involves a **gap** — between words and meaning, expectation and outcome, or what one person knows and another does not.

### Verbal irony
The speaker **says one thing and means another**, usually the opposite.
> "A fine son you are," said the old man, looking at the empty water pot.
- **sarcasm** — verbal irony used to **wound**
- **understatement** — "a little warm" for a blazing afternoon
- **overstatement**

### Situational irony
The outcome is the **opposite of what was intended or expected**.
> The thief who robbed the church was struck by the offering box he was carrying.

### Dramatic irony
The **audience or reader knows what a character does not**, so that the character's words carry a meaning hidden from him.
> A mother praises the "kind stranger" whom the reader knows to be the kidnapper.

### Tragic irony
Dramatic irony in tragedy: the hero's own words and actions hasten the doom he is trying to escape.

### Cosmic irony (irony of fate)
Fate or the gods seem to **mock human hopes**: the man who spends his life saving for old age dies on the day he retires.

### Socratic irony
**Pretending ignorance** in order to expose another's false knowledge.

### Structural irony
Sustained through a whole work by a **naive or unreliable narrator** whose view the reader sees beyond.

### Why writers use irony
to criticise without preaching; to create humour; to deepen tragedy; to involve the reader in working out the truth; to show the complexity of life.

## Humour
### Sources
- **incongruity** — things that do not fit: a chief in full regalia chasing a goat
- **exaggeration** and **caricature**
- **wit** — clever play of ideas; **puns**
- **irony** and sarcasm
- **malapropism** — "He is the very pineapple of politeness"
- **mistaken identity** and misunderstanding
- **slapstick** — physical clowning
- **bathos** — a sudden drop
- **comic characters** — the boaster, the miser, the hypocrite
- **dialect and pidgin** used for comic effect
- **repetition** of a comic phrase

### Kinds
- **gentle / sympathetic humour** — laughs with
- **satirical humour** — laughs at, to correct
- **dark (black) humour** — laughter at grim subjects
- **farce** — broad and physical

## Tone
The **attitude of the writer or speaker towards the subject and the audience**, conveyed through diction, imagery, rhythm and sentence structure.

### A vocabulary of tone
| Positive | Negative | Neutral / mixed |
|---|---|---|
| admiring | angry | detached |
| affectionate | bitter | formal |
| celebratory | contemptuous | ironic |
| hopeful | cynical | matter-of-fact |
| playful | mocking | nostalgic |
| reverent | mournful | reflective |
| tender | sarcastic | resigned |
| triumphant | scornful | wistful |

### How to identify tone
1. **diction** — are the words warm, harsh, clinical, grand?
2. **imagery** — pleasant or disturbing?
3. **sentence structure** — short and abrupt (anger, urgency); long and flowing (calm, reflection)
4. **punctuation** — exclamations, questions, dashes
5. **sound** — harsh consonants or soft vowels
6. ask: **how would this be spoken aloud?**

### Tone, mood and attitude
- **tone** — the speaker's voice
- **mood / atmosphere** — the feeling produced in the reader
- **attitude** — what the speaker thinks of the subject
A mocking tone may produce a mood of amusement — or of unease.

## Shifts of tone
A change of tone signals a change of feeling or thought. Look for it at **"but", "yet", "now"**, at a stanza break, or at the **volta** of a sonnet.

### Illustration (original)
> We lined the road in our Sunday whites,
> we waved the little flags they gave us,
> we sang the song three times — and then
> the convoy passed. It did not slow.
> The dust is all he left to save us.

Lines 1–3: eager, hopeful, almost childlike (anaphora "we… we… we"). Line 4: two flat sentences — deflation. Line 5: bitter irony ("save us"). The shift from hope to bitterness is the poem's meaning: the leader's indifference to the people.

## Irony and tone in drama
On stage, tone lives in the actor's voice; in reading, find it in the **stage directions**, the **situation** and the **reactions of other characters**.

## Commenting in an examination
- do not say only "the tone is ironic" — say **about what**, and **how you know**
- use **two words** if one will not do: "affectionate but exasperated"
- quote the words that carry the tone

## Common errors
calling every negative tone "sad"; confusing the poet with the persona; missing irony and taking praise at face value.`,
          examples: `**Example 1.** A fire-safety officer's house burns down because he left a candle burning. What kind of irony is this? *Answer:* **Situational irony**.

**Example 2.** How can sentence structure reveal tone? *Answer:* **Short, abrupt sentences** suggest anger or urgency; **long, flowing ones** suggest calm or reflection.

**Example 3.** In the illustration, where does the tone shift, and to what? *Answer:* At **"and then / the convoy passed"** — from **hope** to **bitter disappointment**.`,
        },
        questions: [
          ["E", "Saying the opposite of what one means, as in calling a slow runner 'our champion sprinter', is", "verbal irony", "situational irony", "dramatic irony", "cosmic irony", "The words and the meaning are at odds."],
          ["E", "The comic effect produced by the misuse of a word for a similar-sounding one arises from", "malapropism", "pathos", "anaphora", "enjambment", "The speaker means one word and says another."],
          ["E", "A tone that expresses longing for the past is best described as", "nostalgic", "sarcastic", "triumphant", "scornful", "The speaker looks back with affection."],
          ["M", "A marriage counsellor whose own marriage ends in divorce is an example of", "situational irony", "verbal irony", "Socratic irony", "understatement", "The outcome contradicts what one would expect."],
          ["M", "Humour that arises from placing together things that do not fit is based on", "incongruity", "pathos", "nemesis", "sibilance", "The mismatch is what amuses."],
          ["M", "The device of pretending ignorance in order to expose the false knowledge of another is", "Socratic irony", "tragic irony", "sarcasm", "bathos", "It is named after a Greek philosopher's method."],
          ["M", "Which of the following is most helpful in identifying the tone of a passage?", "the writer's choice of words", "the number of paragraphs", "the size of the print", "the date of publication", "Diction carries attitude."],
          ["H", "A tragic hero who, in trying to avoid a prophecy, takes the very steps that fulfil it illustrates", "tragic irony", "comic relief", "poetic licence", "periphrasis", "His own actions hasten his doom."],
          ["H", "A shift of tone in a poem is most often signalled by", "a word such as 'but' or 'yet'", "the title", "the poet's name", "the first rhyme", "Such words mark a turn in thought or feeling."],
          ["H", "Irony sustained throughout a whole work by a naive narrator whose view the reader sees beyond is", "structural irony", "verbal irony", "situational irony", "hyperbole", "The gap between narrator and reader runs through the entire work."],
        ],
      },
      {
        week: 3,
        title: "Unseen prose appreciation",
        subtopics: ["Reading the passage", "Narration, character and setting", "Language and style", "A worked passage"],
        objectives: ["Read an unseen prose passage methodically", "Comment on narration, character and setting", "Comment on diction, imagery and sentence structure", "Answer objective questions on an unseen passage"],
        lesson: {
          title: "Close Reading of Prose",
          summary: "Practise the appreciation of an unseen prose passage.",
          minutes: 40,
          notes: `## Method
1. **Read twice.** First for the situation; then with a pencil, marking what stands out.
2. **Narration** — who tells it? First or third person? How much does the narrator know?
3. **Situation** — what is happening, and what is the conflict?
4. **Setting** — where and when? What atmosphere?
5. **Character** — what do we learn, and by what method?
6. **Language** — diction, imagery, figures of speech, sentence length, dialogue
7. **Tone and mood**
8. **Theme** — what idea does the passage point to?

## The passage (original)
> The lorry dropped her at the junction and went on, dragging its red cloud after it. Ngozi stood with the tin box between her feet and looked at the town she had described to her mother, in three careful letters, as "very fine".
>
> It had not changed. The same gutter ran open-mouthed beside the road, swallowing whatever the rain had not finished. The same women sat behind the same pyramids of tomatoes, and above them the landlord's house leaned on its neighbours like a drunk man between two friends. Only the signboard was new — COLLEGE OF COMMERCE, it said, in letters that had already begun to peel.
>
> She had been a student there for eleven weeks before the proprietor vanished with the fees. She had not put that in the letters either.
>
> A boy passed with a tray of bread on his head, calling his wares in a voice that had not yet decided to be a man's. Ngozi counted her money without taking it out of the handkerchief — she knew it by the knots — and lifted the box. It was lighter than when she had come. Everything was.

## Commentary
### Narration
**Third person, limited** to Ngozi: we see only what she sees and learn her thoughts ("She had not put that in the letters either"), not anyone else's.

### Situation
A young woman has come back to a shabby town where she was cheated by a fake college. She has hidden the truth from her mother. She is nearly penniless.

### Setting
A poor provincial town — an open gutter, roadside tomato sellers, a leaning house, a peeling signboard. Details of **decay** create an atmosphere of neglect and disappointment.

### Character
Shown **indirectly**:
- **proud and protective** — she has written home that the town is "very fine" and concealed her loss
- **careful** — "three careful letters"; she knows her money "by the knots"
- **resilient** — she "lifted the box" and goes on
- **poor** — a tin box; money tied in a handkerchief

### Language
- **personification** — the lorry "dragging its red cloud"; the gutter "open-mouthed… swallowing"; the boy's voice "had not yet decided to be a man's"
- **simile** — the house "leaned on its neighbours like a drunk man between two friends": comic, but it also suggests a town barely holding itself up
- **metaphor** — "pyramids of tomatoes"; "red cloud" (dust)
- **repetition** — "The same… the same… the same": monotony; nothing improves
- **irony** — "very fine" against what we see; a "College of Commerce" that was itself a fraud; a new signboard already peeling
- **symbolism** — the **peeling signboard**: false promise; the **lighter box**: loss
- **sentence structure** — the final two-word sentence, "Everything was", widens the meaning from the box to her hopes, her money, her innocence
- **diction** — plain and concrete; the feeling is carried by things, not by statements of emotion

### Tone and mood
The tone is **restrained, wry and sympathetic** — humour in the similes, sadness beneath. The mood is **quiet disillusionment**.

### Themes
**disillusionment**; **exploitation of the hopeful poor** (fake schools); **the gap between appearance and reality**; **pride and the burden of family expectation**; **endurance**.

## Typical objective questions and how to think
- *"The narrative point of view is…"* — check pronouns and whose mind we enter
- *"The dominant mood is…"* — sum up the feeling of the whole, not one line
- *"'like a drunk man between two friends' is…"* — "like" → simile
- *"The signboard symbolises…"* — connect the object to the theme
- *"The writer's attitude to Ngozi is…"* — look at how she is presented: with sympathy

## Short written answers
Give the **point**, the **quotation**, the **effect** — in two or three sentences.

## What to avoid
- paraphrasing the passage and calling it analysis
- hunting for devices and ignoring meaning
- inventing background the passage does not give
- vague praise: "the writer uses good words"

## Practice routine
Take any paragraph of a novel you are reading. In ten minutes, write five lines: narrator; setting and mood; one thing we learn about a character and how; two devices with effects; a theme.`,
          examples: `**Example 1.** From whose point of view is the passage told? *Answer:* **Third person, limited to Ngozi**.

**Example 2.** What does the peeling signboard suggest? *Answer:* The **falseness and shabbiness of the college's promise**.

**Example 3.** Explain the effect of the last sentence, "Everything was." *Answer:* It extends "lighter" from the box to **her money, hopes and confidence** — everything has been reduced.`,
        },
        questions: [
          ["E", "In the passage about Ngozi, the story is told in the", "third person", "first person", "second person", "form of a letter", "The narrator refers to her as 'she'."],
          ["E", "The expression 'like a drunk man between two friends' is", "a simile", "a metaphor", "a hyperbole", "an oxymoron", "The comparison is introduced by 'like'."],
          ["E", "The setting of the passage is best described as", "a poor, neglected town", "a wealthy city centre", "a thick forest", "a school dormitory", "The gutter, the leaning house and the peeling sign show decay."],
          ["M", "The phrase 'dragging its red cloud after it' refers to", "the dust raised by the lorry", "smoke from a factory", "a red flag on the lorry", "a storm approaching", "It is a metaphor for the trail of dust."],
          ["M", "The repetition of 'the same' in the second paragraph emphasises", "the unchanging dreariness of the town", "Ngozi's happiness", "the speed of the lorry", "the beauty of the market", "Nothing has improved since she left."],
          ["M", "Ngozi's description of the town as 'very fine' in her letters is", "ironic", "accurate", "prophetic", "humorous praise by the narrator", "What the reader sees contradicts it."],
          ["M", "That Ngozi knows her money 'by the knots' suggests that she", "has very little and guards it carefully", "is wealthy", "is careless with money", "has been robbed that morning", "Every coin is accounted for."],
          ["H", "The gutter that 'ran open-mouthed… swallowing whatever the rain had not finished' is an example of", "personification", "litotes", "metonymy", "euphemism", "The gutter is given a mouth and the act of swallowing."],
          ["H", "The dominant mood of the passage is one of", "quiet disillusionment", "festive joy", "terror", "romantic excitement", "Hope has been disappointed, without drama."],
          ["H", "The peeling signboard of the college functions in the passage as", "a symbol of false promise", "a flashback", "an allusion to the Bible", "a refrain", "It is new yet already decaying, like the hopes it raised."],
        ],
      },
      {
        week: 4,
        title: "Unseen poetry appreciation",
        subtopics: ["Reading the poem", "Voice, situation and theme", "Imagery, sound and form", "A worked poem"],
        objectives: ["Read an unseen poem methodically", "Identify speaker, situation, theme and tone", "Comment on imagery, sound and form", "Answer objective questions on an unseen poem"],
        lesson: {
          title: "Close Reading of Poetry",
          summary: "Practise the appreciation of an unseen poem.",
          minutes: 40,
          notes: `## Method
1. Read the **title** — it is the first clue.
2. Read the poem **twice**, the second time aloud in your head.
3. **Paraphrase** it stanza by stanza.
4. Identify **speaker, addressee and situation**.
5. Decide the **theme** and the **tone**; look for any **shift**.
6. Examine **imagery and figures of speech**.
7. Examine **sound** — rhyme, rhythm, alliteration, repetition.
8. Examine **form** — stanzas, line lengths, punctuation, enjambment.
9. Ask how **form and sound support meaning**.

## The poem (original)
> **The Well**
>
> My grandfather dug this well
> the year the locusts came.
> He struck water at forty feet
> and gave the well no name.
>
> My father drew from it at dawn,
> two buckets, never more;
> the rope has worn a shining groove
> in the stone beside the door.
>
> Now pipes have come. The tap is quick;
> it coughs, and sometimes flows.
> My children do not know the weight
> of water, or what it owes.
>
> But on dry nights I lift the lid
> and listen: far below,
> the old dark keeps its patient eye
> open, in case we go.

## Commentary
### Subject matter
A speaker reflects on a family well dug by the grandfather, used by the father, and now neglected since pipe-borne water arrived — though the speaker still visits it.

### Speaker and situation
A **middle-aged adult** standing between generations — grandfather and father behind, children ahead. The voice is personal ("My… my… my") yet speaks for a community passing from old ways to new.

### Themes
- **tradition and change** — the well against the tap
- **the debt owed to earlier generations** — "what it owes"
- **the reliability of the old against the uncertainty of the new** — the tap "coughs, and sometimes flows"
- **memory and continuity**

### Tone
**Reflective and quietly reverent**, with gentle irony towards modern convenience. In the last stanza it becomes **watchful**, almost protective. The shift is marked by **"But"**.

### Structure
Four **quatrains**, one for each stage — grandfather, father, children, self. Rhyme scheme ***abcb***, the ballad pattern, fitting a poem that tells a family story. Mostly iambic, with three or four stresses to a line: steady, like the drawing of water.

### Imagery and devices
- **visual / tactile image** — "the rope has worn a shining groove": years of labour made visible; "shining" gives it honour
- **personification** — the tap "coughs"; "the old dark keeps its patient eye / open" — the well watches and waits like a faithful elder
- **metaphor** — "the weight of water" is literal (heavy buckets) and figurative (its value)
- **symbolism** — the **well** = heritage, the ancestors' provision; the **tap** = modernity, quick but unreliable
- **contrast** — "struck water at forty feet" (effort) against "The tap is quick"
- **understatement** — "and gave the well no name": the grandfather's modesty
- **alliteration** — "lift the lid / and listen"; "dry… dark"
- **enjambment** — "the weight / of water"; "its patient eye / open" — in the latter the word "open" is held to the next line, so that the eye seems to open as we read
- **caesura** — "Now pipes have come. The tap is quick;" — the full stop gives the change a blunt finality
- **diction** — plain, mostly words of one syllable, suiting a plain subject

### How form supports meaning
The regular quatrains suggest order and continuity; the one heavily broken line ("Now pipes have come.") is the moment of disruption.

### Overall
The poem does not reject progress — the speaker uses the tap — but warns against forgetting what sustained the family, and may again: "in case we go" hints that the new may fail.

## Typical objective questions
- *"The poem is mainly about…"* — choose the theme, not a detail
- *"'coughs' in line 10 is an example of…"* — a human action given to a tap
- *"The rhyme scheme of the first stanza is…"* — label the end sounds
- *"The tone of the last stanza is…"*
- *"The well symbolises…"*
- *"'the weight / of water' illustrates…"* — sense running over the line

## Writing a short appreciation
One paragraph each on: subject and theme; tone; imagery and devices (two or three, with effects); form and sound; a concluding judgement.

## Reminders
- the **persona** is not necessarily the poet
- do not force a "hidden meaning": build from what the words say
- every statement about a device should end with **"which suggests…"**`,
          examples: `**Example 1.** What is the rhyme scheme of each stanza of "The Well"? *Answer:* ***abcb*** — "came / name", "more / door", "flows / owes", "below / go".

**Example 2.** What do the well and the tap symbolise? *Answer:* The **well** stands for **heritage and tradition**; the **tap** for **modern convenience**.

**Example 3.** Identify the device in "the old dark keeps its patient eye open". *Answer:* **Personification** — the darkness of the well is given an eye and patience.`,
        },
        questions: [
          ["E", "The poem 'The Well' is written in", "four quatrains", "two sestets", "one sonnet", "seven couplets", "Each stanza has four lines."],
          ["E", "The speaker in 'The Well' is", "an adult reflecting on three generations of the family", "the grandfather himself", "a child fetching water", "a government engineer", "He mentions his grandfather, father and children."],
          ["E", "In the poem, 'the tap… coughs' is an example of", "personification", "simile", "hyperbole", "allusion", "A human action is given to the tap."],
          ["M", "The central theme of 'The Well' is", "the relationship between tradition and change", "the danger of locusts", "the cost of building pipes", "a quarrel between father and son", "The old well is set against the new tap."],
          ["M", "The 'shining groove' worn by the rope suggests", "long years of faithful labour", "the wealth of the family", "damage caused by children", "the laziness of the father", "Repeated use over many years has polished the stone."],
          ["M", "The tone of the poem as a whole is best described as", "reflective and reverent", "angry and abusive", "light-hearted and playful", "terrified", "The speaker honours what the elders provided."],
          ["M", "The word 'But' at the beginning of the last stanza signals", "a shift in the speaker's thought", "the end of the rhyme scheme", "a change of speaker", "the arrival of the locusts", "He turns from the children's ignorance to his own vigil."],
          ["H", "The phrase 'the weight / of water' gains force from", "enjambment and double meaning", "onomatopoeia", "internal rhyme", "apostrophe", "The sense runs over the line, and 'weight' is both literal and figurative."],
          ["H", "The statement that the tap 'sometimes flows' implies that", "modern convenience is unreliable", "the well has dried up", "the children waste water", "the pipes were never laid", "The speaker gently mocks the new supply."],
          ["H", "The ballad-like rhyme and regular stanzas of the poem are appropriate because they", "suit a simple story handed down in a family", "imitate the noise of the tap", "show that the speaker is confused", "are required in all African poems", "The steady form mirrors continuity across generations."],
        ],
      },
      {
        week: 5,
        title: "Literary movements and critical terms",
        subtopics: ["Classicism and Romanticism", "Realism and naturalism", "Modernism and after", "Approaches to criticism"],
        objectives: ["Contrast classicism with Romanticism", "Explain realism and naturalism", "Describe modernism, postcolonial writing and feminism in literature", "Identify the main approaches to criticism"],
        lesson: {
          title: "Movements and Approaches",
          summary: "Explain the main literary movements and ways of reading texts.",
          minutes: 40,
          notes: `## Why movements matter
A **literary movement** is a body of writing sharing ideas, subjects and methods. Knowing it helps to explain why a text is written as it is.

## Classicism and neoclassicism
Admiration for the literature of **ancient Greece and Rome**: **order, balance, restraint, reason**, respect for rules and established forms. Neoclassicism in England (about 1660–1780) produced satire, the heroic couplet and polished wit.

## Romanticism (about 1789–1832)
A revolt against neoclassical rules.
- **emotion, imagination and intuition**
- **nature** as a source of truth and healing
- the **individual** and the common person
- the **supernatural**, the medieval, the exotic
- **freedom**; sympathy with revolution
- spontaneity; the lyric

## Realism (mid-nineteenth century onward)
The attempt to present **life as it actually is** — ordinary people, believable events, accurate social detail, without idealising.
- everyday settings; credible characters with mixed motives
- social problems — class, poverty, marriage
- plain language; close observation
Most African novels are realist.

## Naturalism
An extreme, "scientific" realism which presents human beings as **shaped by heredity and environment**, with little free will; it dwells on the harsher side of life — slums, poverty, violence.

## Symbolism
Meaning suggested through **symbols and musical language** rather than plain statement.

## Modernism (about 1900–1945)
A break with nineteenth-century forms, prompted by war, the city and new ideas about the mind.
- **experiment** — free verse; stream of consciousness; broken chronology
- **fragmentation**; allusion; difficulty
- **alienation** and loss of certainty
- the **anti-hero**; open endings

## Existentialism and the Absurd
Life has no given meaning; individuals must create it. The **theatre of the absurd** shows characters trapped in pointless, repetitive situations, with dialogue that goes nowhere.

## Postmodernism
Playfulness about fiction itself; mixing of styles; distrust of single truths; **magical realism** — the marvellous presented as ordinary.

## Movements in African and black writing
- **Negritude** — affirmation of black identity and African values (1930s onward)
- **the Harlem Renaissance** — the flowering of African-American writing in the 1920s
- **cultural nationalism** — reclaiming the dignity of the African past
- **protest and resistance literature** — against colonialism and apartheid
- **post-independence disillusionment**
- **socialist realism / Marxist writing** — literature as a weapon for workers and peasants
- **feminist and womanist writing** — women's experience from women's point of view
- **migrant / diaspora writing**

## Postcolonial literature
Writing from countries once colonised, concerned with
- the **effects of colonial rule** on culture, language and identity
- "**writing back**" — answering colonial portrayals
- **hybridity** — mixed cultural identity
- neo-colonialism and the failures of the new nations

## Feminism in literature
Examines how women are portrayed and gives voice to women's experience: **patriarchy**, marriage and motherhood, education, silence and speech, stereotypes. Many African women writers prefer **womanism**, which stresses partnership and community.

## Approaches to criticism
**Literary criticism** is the reasoned interpretation and evaluation of literature.
| Approach | Looks at |
|---|---|
| **formalist (New Criticism)** | the text itself — structure, imagery, language; "close reading" |
| **biographical** | the author's life |
| **historical / sociological** | the period and society that produced the work |
| **Marxist** | class, economic power, ideology |
| **feminist** | gender and the representation of women |
| **psychological / psychoanalytic** | motives, desires, the unconscious |
| **postcolonial** | empire, race, cultural identity |
| **archetypal / mythological** | recurring patterns and myths |
| **reader-response** | how readers make meaning |

No one approach is "correct"; each asks different questions.

## Other critical terms
- **canon** — the body of works regarded as most important
- **classic** — a work of lasting value
- **convention** — an accepted practice or device in a genre
- **genre**; **sub-genre**
- **context** — the circumstances surrounding a work
- **intertextuality** — the way one text echoes or answers another
- **didacticism** — the intention to teach
- **commitment** — a writer's dedication to social or political causes
- **aestheticism** — "art for art's sake"
- **catharsis**; **verisimilitude**; **mimesis** (imitation of life)
- **protagonist / antagonist**; **persona**
- **oeuvre** — a writer's whole body of work
- **plagiarism** — passing off another's work as one's own

## The African writer's commitment
Many African writers hold that the artist cannot stand apart from society's struggles: the writer is teacher, critic and conscience — art for society's sake rather than art for art's sake.

## Using this knowledge
In an essay, a single accurate sentence of context — "As a realist novel of the post-independence period, the book…" — frames your argument. Do not let background replace analysis of the text.`,
          examples: `**Example 1.** Contrast classicism with Romanticism in one sentence. *Answer:* **Classicism** values **reason, order and rules**; **Romanticism** values **emotion, imagination and nature**.

**Example 2.** What is realism? *Answer:* The presentation of **life as it actually is**, with ordinary people and believable events.

**Example 3.** What does a feminist critic look for in a text? *Answer:* **How women are portrayed** and how gender and power operate.`,
        },
        questions: [
          ["E", "The literary movement that aims to present life as it actually is, without idealising it, is", "realism", "Romanticism", "symbolism", "classicism", "It deals with ordinary people and believable events."],
          ["E", "The reasoned interpretation and evaluation of literary works is", "literary criticism", "plagiarism", "censorship", "versification", "It may take several approaches."],
          ["E", "Presenting another person's writing as one's own is", "plagiarism", "paraphrase", "parody", "allusion", "It is a serious academic offence."],
          ["M", "The critical approach that concentrates on the text itself — its structure, imagery and language — is", "formalist", "biographical", "Marxist", "historical", "It is associated with close reading."],
          ["M", "A critic who studies how class and economic power are represented in a novel is using a", "Marxist approach", "psychoanalytic approach", "archetypal approach", "reader-response approach", "Literature is read in terms of social struggle."],
          ["M", "The flowering of African-American literature in the 1920s is known as the", "Harlem Renaissance", "Negritude movement", "Augustan Age", "Gothic Revival", "It was centred in New York."],
          ["M", "The view that human beings are shaped by heredity and environment, with little free will, underlies", "naturalism", "Romanticism", "aestheticism", "neoclassicism", "It is an extreme form of realism."],
          ["H", "The presentation of marvellous events as part of ordinary life in fiction is called", "magical realism", "socialist realism", "naturalism", "classicism", "The supernatural is narrated matter-of-factly."],
          ["H", "The way in which one literary text echoes, borrows from or answers another is", "intertextuality", "verisimilitude", "didacticism", "enjambment", "A play that adapts an ancient tragedy is an example."],
          ["H", "The phrase 'art for art's sake' sums up the doctrine of", "aestheticism", "commitment", "didacticism", "socialist realism", "It holds that art needs no moral or social purpose."],
        ],
      },
    ],
  },
  {
    classCode: "SS3",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Classical tragedy and Aristotle's Poetics",
        subtopics: ["Greek theatre", "Aristotle's elements of tragedy", "The tragic hero", "Oedipus the King as a model"],
        objectives: ["Describe the main features of Greek theatre", "State Aristotle's six elements of tragedy", "Explain the qualities of the tragic hero and related terms", "Apply these ideas to Oedipus the King"],
        lesson: {
          title: "The Classical Idea of Tragedy",
          summary: "Explain Aristotle's theory of tragedy and apply it to Sophocles' Oedipus the King.",
          minutes: 40,
          notes: `## Greek theatre
- drama grew from choral songs at the festival of **Dionysus** in **Athens** (fifth century BC)
- plays were performed in competition at the **City Dionysia**
- open-air **amphitheatres** on hillsides: the **orchestra** (circular dancing floor for the chorus), the **skene** (stage building), the **theatron** (seating)
- **masks**; all actors were men; at most **three speaking actors**, who doubled roles
- the **chorus** sang, danced and commented
- violence happened **off-stage** and was reported by a **messenger**
- the three great tragedians: **Aeschylus**, **Sophocles**, **Euripides**; the comic playwright **Aristophanes**

### Structure of a Greek tragedy
**prologue** → **parodos** (entry song of the chorus) → **episodes** separated by **choral odes (stasima)** → **exodos** (final scene).

## Aristotle's *Poetics* (fourth century BC)
The first great work of literary criticism. Aristotle defines tragedy as the **imitation (*mimesis*) of a serious and complete action, in elevated language, in dramatic not narrative form, arousing pity and fear and so achieving the *catharsis* of such emotions**.

### The six elements, in order of importance
1. **plot (*mythos*)** — the arrangement of incidents; "the soul of tragedy"
2. **character (*ethos*)**
3. **thought (*dianoia*)** — the ideas and reasoning expressed
4. **diction (*lexis*)** — the language
5. **song / melody (*melos*)**
6. **spectacle (*opsis*)** — the visual element; the least important

### The plot
- must be **whole** — with a beginning, a middle and an end — and of a proper size
- must have **unity of action** — incidents linked by probability or necessity
- **simple plot** — fortune changes without reversal or recognition
- **complex plot** — includes
  - ***peripeteia*** (**reversal**) — an action produces the opposite of what was intended
  - ***anagnorisis*** (**recognition**) — a change from ignorance to knowledge
- the best plots combine both at the same moment, followed by ***pathos*** — the scene of suffering

### The tragic hero
- a person of **high standing and reputation**
- **neither wholly good nor wholly wicked** — "a man like ourselves"
- falls from happiness to misery **not through vice but through *hamartia*** — an **error of judgement** or flaw
- ***hubris*** — overweening pride — is a common form of it
- his fall arouses **pity** (because it is greater than he deserves) and **fear** (because he is like us)
- ***nemesis*** — the retribution that follows

### The unities
Aristotle insisted only on **unity of action**, and observed that tragedies tended to keep within "one revolution of the sun". Later critics made rules of the **three unities** — action, time and place.

## *Oedipus the King* (Sophocles, about 429 BC)
### The story
Thebes suffers a **plague**. The oracle says it will end only when the murderer of the former king, **Laius**, is found and driven out. King **Oedipus** — who once saved the city by solving the riddle of the Sphinx — pronounces a curse on the killer and vows to find him. The blind prophet **Tiresias**, provoked, declares that Oedipus himself is the man. Oedipus suspects a plot by his brother-in-law **Creon**. Queen **Jocasta** tries to calm him: an oracle once said Laius would be killed by his own son, yet he died at the hands of robbers "where three roads meet", and the child had been left to die. But Oedipus remembers killing a man at such a crossroads. A messenger from Corinth, meaning to bring good news, reveals that Oedipus was a foundling; an old shepherd confirms that he is the child of Laius and Jocasta. He has **killed his father and married his mother**, as prophesied. Jocasta hangs herself; Oedipus **blinds himself** and goes into exile.

### As Aristotle's model
- **hero** — a great king, admired, well-meaning
- **hamartia** — his rashness and quick anger; his proud confidence in his own intelligence; above all his **ignorance of who he is**
- **peripeteia** — the Corinthian messenger comes to free him from fear and instead destroys him
- **anagnorisis** — "I stand revealed": he discovers his identity
- reversal and recognition **coincide**
- **unity** — one action, one place (before the palace), one day
- **catharsis** — pity and awe at his suffering

### Themes
**fate and free will**; **sight and blindness** (the blind prophet sees; the seeing king is blind, then blinds himself on gaining insight); **the limits of human knowledge**; **pride**; **the search for truth and identity**; the health of the state bound up with its ruler.

### Dramatic irony
The audience knows the truth from the start, so almost every line Oedipus speaks — his curse on the murderer, his promise to fight for Laius "as for my own father" — is charged with **tragic irony**.

## Classical and Shakespearean tragedy
| Classical | Shakespearean |
|---|---|
| chorus | no chorus (as a rule) |
| unities observed | free movement in time and place |
| violence off-stage | violence on stage |
| single plot | sub-plots |
| no comic relief | comic relief |
| fate dominant | character dominant |

## Modern tragedy
Later playwrights argued that the **common man** can be a tragic hero.`,
          examples: `**Example 1.** List Aristotle's six elements of tragedy. *Answer:* **Plot, character, thought, diction, song and spectacle**.

**Example 2.** Define *peripeteia* and *anagnorisis*. *Answer:* ***Peripeteia*** is a **reversal of fortune**; ***anagnorisis*** is the hero's **recognition of the truth**.

**Example 3.** How does *Oedipus the King* use the image of blindness? *Answer:* The **blind prophet sees the truth**, while the **seeing king is blind** to it — and blinds himself when he finally sees.`,
        },
        questions: [
          ["E", "The author of the 'Poetics', the earliest major work of literary criticism, is", "Aristotle", "Sophocles", "Homer", "Aeschylus", "He analysed the nature of tragedy."],
          ["E", "'Oedipus the King' was written by", "Sophocles", "Euripides", "Aristophanes", "Shakespeare", "He was one of the three great Greek tragedians."],
          ["E", "Greek drama developed from festivals held in honour of the god", "Dionysus", "Zeus", "Apollo", "Poseidon", "Plays were performed in competition at his festival."],
          ["M", "According to Aristotle, the most important element of tragedy is", "plot", "spectacle", "song", "diction", "He called it the soul of tragedy."],
          ["M", "The hero's discovery of a truth previously hidden from him is termed", "anagnorisis", "peripeteia", "hubris", "mimesis", "It is a change from ignorance to knowledge."],
          ["M", "A sudden reversal of fortune in a tragedy is called", "peripeteia", "catharsis", "nemesis", "parodos", "An action produces the opposite of what was intended."],
          ["M", "In 'Oedipus the King', the blind prophet who knows the truth is", "Tiresias", "Creon", "Laius", "the Corinthian messenger", "Oedipus accuses him of plotting."],
          ["H", "Aristotle held that the ideal tragic hero is", "neither wholly good nor wholly wicked", "a perfectly virtuous person", "a thorough villain", "a comic servant", "His fall must arouse both pity and fear."],
          ["H", "In Greek tragedy, acts of violence were usually", "reported by a messenger rather than shown on stage", "performed in full view", "acted by the chorus", "omitted from the story altogether", "The audience heard of them in vivid speech."],
          ["H", "Aristotle regarded the least important of the six elements of tragedy as", "spectacle", "plot", "character", "thought", "It depends on the stage machinist more than on the poet."],
        ],
      },
      {
        week: 2,
        title: "Themes across African literature",
        subtopics: ["Tradition, change and cultural conflict", "Power, corruption and protest", "Gender and family", "Tracing a theme through a text"],
        objectives: ["Discuss the treatment of tradition and change in African writing", "Discuss power, corruption and protest as themes", "Discuss gender and family as themes", "Trace the development of a theme through a text"],
        lesson: {
          title: "Recurring Concerns",
          summary: "Examine the major themes shared by African prose, drama and poetry.",
          minutes: 40,
          notes: `## Theme across genres
The same concern may be treated in a novel, a play and a poem — each with its own means. The novelist has room for a whole society; the dramatist stages a conflict between persons; the poet compresses feeling into image.

## 1. Tradition, change and cultural conflict
### What writers show
- a traditional society with its **own order** — religion, law, festivals, kinship
- the **arrival of the new** — church, school, court, money, the city
- **divided families** — converts against elders; educated children against parents
- **characters caught between two worlds**, at home in neither
- the **cost of rigid resistance** and the cost of thoughtless imitation
### Typical figures
the proud elder who cannot bend; the convert; the "been-to" returned from abroad; the village schoolteacher; the foreign-born wife; the colonial officer who does not understand what he is interfering with.
### How it is handled
- in **fiction** — through the fall of a strong man or the splitting of a clan
- in **drama** — through a single confrontation: a ritual interrupted, a marriage contested
- in **poetry** — through contrasting images: drum and piano, shrine and church
### Balance
The best writers neither idealise the past nor despise it.

## 2. Power, corruption and protest
### Colonial power
forced labour; taxation; seizure of land; racial humiliation; the arrogance of officials — often treated with **satire**, through the eyes of a naive servant or child.
### After independence
- leaders who **inherit the colonial master's chair and his habits**
- **bribery**, embezzlement, nepotism — rot, filth and bad smells recur as symbols
- **the honest man** mocked as a fool
- **coups** and military brutality; **civil war**
- the gap between the **rich few and the poor many**
### Protest
the strike; the student march; the prisoner's letter; the exile's poem. Under apartheid — passes, removals, police, prison.
### Writers' methods
satire and irony; allegory (to evade censors); the suffering of an ordinary family as the measure of public wrong; plain, public poetry.

## 3. Gender and family
- **patriarchy** — the father's or husband's absolute authority
- **marriage** — bride price, arranged marriage, polygamy, widowhood rites
- **motherhood** — its honour and its burden; **childlessness** as stigma; preference for sons
- **education of girls**
- **domestic tyranny** — a respected public man who is a tyrant at home
- **women's solidarity and resistance** — friendship, trade, silence broken into speech
- **the coming of age** of a daughter or son
### Change over time
Early male writers often kept women in the background; women writers placed them at the centre and questioned custom from the inside.

## 4. Other recurring themes
- **religion** — sincere faith and hypocrisy; fanaticism; the false prophet
- **the city and the village** — opportunity and corruption against community and constraint
- **education** — hope, and alienation
- **fate and the gods**; the duty of the individual to the community
- **childhood and growing up**
- **exile, migration and identity**
- **poverty**; **violence**; **freedom**

## Tracing a theme through a text
1. **State the theme as an idea**, not a word: not "corruption" but "corruption destroys public trust and private conscience".
2. **Find where it appears** — the incidents, in order of importance.
3. **Note who embodies it** — which characters represent which side?
4. **Look at setting and symbol** — what objects or places carry it?
5. **Look at the ending** — what view does the outcome suggest?
6. **Consider tone** — angry, satirical, sorrowful?

### Planning grid
| Aspect of theme | Incident / evidence | Character involved | Comment |
|---|---|---|---|
| e.g. tyranny in the home | the punishment over a broken rule | the father; the children | fear replaces love |
| e.g. silence | the mother polishing ornaments after each beating | the mother | suffering unspoken |
| e.g. freedom | the visit to a relative's lively, poorer home | the aunt | another way to live |

Each row becomes a paragraph.

## Linking themes
Themes interlock: domestic tyranny may mirror political tyranny; a ruined marriage may stand for a ruined nation. Showing such links earns high marks.

## Major and minor themes
Decide which is central — the one the whole plot serves — and treat the others as supporting.

## A caution
Do not impose a theme the text does not support, and do not treat characters merely as "messages": show how the writer makes us **feel** the issue through people and events.`,
          examples: `**Example 1.** Give two ways in which cultural conflict is shown in African literature. *Answer:* Through **divided families** (converts against elders) and **characters caught between two worlds**.

**Example 2.** Why do writers on post-independence corruption often use images of filth and decay? *Answer:* As **symbols of moral rot** in society.

**Example 3.** What is the first step in tracing a theme through a text? *Answer:* **State the theme as a full idea**, not as a single word.`,
        },
        questions: [
          ["E", "A character who returns from study abroad and no longer fits into his village illustrates the theme of", "cultural conflict", "romantic love", "religious devotion", "old age", "He belongs fully to neither world."],
          ["E", "A social system in which fathers and husbands hold authority over women and children is called", "patriarchy", "democracy", "meritocracy", "matriarchy", "It is a frequent subject of women's writing."],
          ["E", "Bribery and embezzlement by leaders of a newly independent state belong to the theme of", "corruption", "nostalgia", "initiation", "heroism", "The hopes of independence are betrayed."],
          ["M", "In writing about post-independence corruption, images of rot, filth and bad smells function as", "symbols of moral decay", "comic relief", "settings for romance", "allusions to Greek myth", "Physical decay stands for the decay of values."],
          ["M", "A theme is best stated in an essay as", "a full idea about life", "a single word", "the title of the book", "a list of characters", "For example, 'tyranny in the home breeds silence and fear'."],
          ["M", "The stigma attached to a childless wife in many African novels and plays is part of the theme of", "gender and motherhood", "colonial taxation", "military rule", "urban crime", "A woman's worth is measured by her children."],
          ["M", "A dramatist is most likely to present cultural conflict through", "a direct confrontation between characters", "a long descriptive chapter", "a rhyme scheme", "footnotes", "Drama works by staged conflict."],
          ["H", "When a novelist shows a respected public figure who is a tyrant in his own home, the effect is to", "link private oppression with public hypocrisy", "praise the character's success", "provide comic relief", "show that tradition is always right", "Domestic tyranny mirrors wider abuse of power."],
          ["H", "Writers under repressive regimes often turn to allegory and satire mainly in order to", "criticise authority while evading censorship", "lengthen their works", "avoid using characters", "imitate Greek choruses", "The criticism is disguised."],
          ["H", "The fairest summary of how the best African writers treat the traditional past is that they", "present both its dignity and its flaws", "condemn it entirely", "idealise it without criticism", "ignore it", "They neither romanticise nor despise it."],
        ],
      },
      {
        week: 3,
        title: "Studying a prescribed play",
        subtopics: ["Reading and note-making", "Structure, conflict and turning points", "Characters and relationships", "Preparing for essay and context questions"],
        objectives: ["Make organised notes on a prescribed play", "Analyse the structure and conflict of a play", "Analyse characters and relationships in a play", "Prepare model outlines for likely questions"],
        lesson: {
          title: "Mastering a Set Play",
          summary: "Apply a method for studying any prescribed play in depth.",
          minutes: 40,
          notes: `## First reading
Read (or better, see) the play straight through for the story. Then read again with a pencil.

## Notes to make
### 1. Background
the playwright; the date; the kind of play (tragedy, comedy, tragicomedy, satire); the society it comes from.
### 2. Setting
place; period; social world. Does it change? What does each location stand for?
### 3. Plot summary — act by act (or movement by movement)
One or two sentences for each scene: **what happens** and **why it matters**.
### 4. Structure
| Stage | Ask |
|---|---|
| **exposition** | What do we learn at the start? What is the situation? |
| **inciting incident** | What sets the action going? |
| **rising action** | What complications follow? |
| **climax** | Where is the turning point? |
| **falling action** | What consequences unfold? |
| **resolution** | How does it end — and is order restored? |

### 5. Conflict
State it in one sentence: *X wants … but Y / society / fate stands in the way.* Note both **external** and **internal** conflict.
### 6. Characters
For each main character: role; traits with evidence; motives; relationships; change; fate; what he or she represents.
### 7. Themes
List them; beside each, three incidents that develop it.
### 8. Language and style
verse or prose; proverbs; imagery; humour; songs; pidgin or dialect; notable speeches.
### 9. Dramatic techniques
irony; soliloquy and aside; chorus or narrator; flashback; symbolism; music and dance; mime; play-within-a-play; contrast; suspense; comic relief; stage directions.
### 10. Title
literal meaning; deeper or ironic meaning.
### 11. Key passages
six to ten short quotations or closely remembered speeches.

## A worked skeleton (invented play, for method only)
*The Last Yam*, a tragedy in five movements, set in a farming town in a year of drought.
- **Exposition** — the town waits for the chief priest, Ezeudo, to announce the New Yam festival; no one may harvest before it.
- **Inciting incident** — offended by the council's slight to his shrine, Ezeudo refuses to name the day.
- **Rising action** — crops rot in the ground; the elders plead; his son urges mercy; a teacher from the mission offers the people another way to give thanks and harvest.
- **Climax** — Ezeudo's own household is caught harvesting in secret; he must choose between his law and his family.
- **Falling action** — he curses them; the town turns to the mission.
- **Resolution** — he is left alone before an empty shrine; the festival is never called.

**Conflict:** individual pride against the community's survival; tradition against change.
**Hero's flaw:** inflexible pride. **Recognition:** too late, he hears the town singing elsewhere.
**Themes:** the limits of authority; the ruler's duty to the ruled; how rigid tradition destroys itself.
**Techniques:** proverbs; the drum announcing each movement; a chorus of market women; the unharvested yam as symbol.

## Relationships
Draw a **diagram**: names in circles; lines labelled *father of*, *rival to*, *in love with*, *deceives*. It fixes the play in the mind.

## Tracking a character
Make a table: scene — what the character does or says — what it shows. Development (or refusal to develop) becomes visible.

## Significance of a scene
For every important scene write one line each on **plot, character, theme, mood**.

## Likely essay questions
- Discuss the character and role of ____.
- How does the playwright present the theme of ____?
- Examine the relationship between ____ and ____.
- Comment on the use of ____ (irony, songs, symbolism, humour).
- How far is ____ responsible for his own downfall?
- What is the significance of the title / the opening / the ending?
- Consider the play as a tragedy / comedy / satire.
- Discuss the role of women / the minor characters.

For each, prepare a **five-point outline with evidence**. Do not memorise whole essays: questions are reworded.

## Thinking theatrically
Ask how a moment would **look and sound**: where the characters stand, what is seen, what the audience knows. Mention staging — costume, lighting, a silence — when it supports your point.

## Final checks before the examination
- Can you tell the story in ten sentences?
- Can you name every character and their relationships?
- Do you know the order of the main events?
- Have you an outline for each likely topic?
- Can you place and explain the major speeches?`,
          examples: `**Example 1.** What should a one-sentence statement of conflict contain? *Answer:* **Who wants what, and what stands in the way**.

**Example 2.** For each important scene, what four things should you note? *Answer:* Its significance for **plot, character, theme and mood**.

**Example 3.** Why should you not memorise whole essays? *Answer:* Because **questions are reworded**, and a prepared essay may not answer the question set.`,
        },
        questions: [
          ["E", "The event that sets the main action of a play in motion is the", "inciting incident", "epilogue", "resolution", "curtain call", "It follows the exposition."],
          ["E", "When studying a set play, a plot summary is best organised", "act by act or scene by scene", "in alphabetical order", "by the length of the speeches", "by the age of the characters", "This fixes the order of events in the mind."],
          ["E", "A diagram showing how the characters of a play are connected helps a student to remember", "relationships", "the price of the text", "the rhyme scheme", "the publisher", "Lines can be labelled with the nature of each link."],
          ["M", "In the invented play 'The Last Yam', the central conflict is between", "a priest's pride and the survival of his community", "two rival armies", "a teacher and his pupils", "a king and a foreign invader", "He refuses to announce the festival."],
          ["M", "A question that asks 'How far is the hero responsible for his own downfall?' requires the candidate to", "weigh the hero's faults against other causes", "narrate the hero's life", "describe the stage", "list the minor characters", "A judgement of degree is needed."],
          ["M", "The unharvested yam in 'The Last Yam' is best described as", "a symbol", "a soliloquy", "a prologue", "an aside", "It stands for the life withheld from the town."],
          ["M", "Rather than memorising whole essays on a set play, a candidate should prepare", "outlines of points with evidence", "the playwright's biography only", "a list of the page numbers", "the stage directions by heart", "Outlines can be adapted to any wording of the question."],
          ["H", "In analysing the structure of a tragedy, the 'recognition' refers to the moment when", "the hero realises the truth of his situation", "the audience applauds", "the chorus enters", "the play is first performed", "It often comes too late to prevent disaster."],
          ["H", "A candidate who comments on where characters stand, the lighting and a significant silence is", "considering the play as a work for the theatre", "going outside the question", "retelling the plot", "analysing the rhyme", "A play is written to be performed."],
          ["H", "A question on 'the significance of the ending' of a play is best answered by showing how the ending", "resolves the conflict and completes the themes", "is the longest scene", "has the fewest characters", "was written last", "The outcome reveals the playwright's view."],
        ],
      },
      {
        week: 4,
        title: "Studying a prescribed novel",
        subtopics: ["Reading and chapter notes", "Narrative technique and structure", "Character, setting and symbol", "Preparing for essay questions"],
        objectives: ["Make organised chapter notes on a prescribed novel", "Analyse the narrative technique and structure of a novel", "Analyse character, setting and symbolism", "Prepare outlines for likely essay questions"],
        lesson: {
          title: "Mastering a Set Novel",
          summary: "Apply a method for studying any prescribed novel in depth.",
          minutes: 40,
          notes: `## Reading
Read the whole novel once for the story. On the second reading keep a notebook.

## Chapter notes
For each chapter, three lines:
1. **what happens**
2. **what is revealed** — about character or theme
3. **anything notable** in style — a symbol, a proverb, a shift of viewpoint

Number the chapters; you will then know the **order of events**, which examiners test.

## Notes by heading
### Background
the author; date; the historical moment (colonial contact, independence, war, a particular European or American period); the kind of novel.
### Setting
- **place** — village, city, compound, school, country house
- **time** — period and span
- **social world** — customs, class, religion, law
- how setting **shapes** events and character
- **contrasting settings** — two homes, town and country — and what each stands for
### Plot and structure
- linear or non-linear? Flashbacks?
- division into **parts or books** — why does the writer divide it there?
- main plot and sub-plots
- **turning points** and climax
- the **ending** — closed or open; just or ironic
### Narrative technique
- **point of view** — who tells? How much do they know? Are they reliable?
- a **child narrator** sees more than he or she understands — the reader reads over the child's shoulder
- **distance** — is the narrator involved or detached?
- **letters, diaries**, multiple narrators
- **tense**
- **dialogue** and what it reveals
### Characters
- protagonist: traits, motives, strengths, flaws, development
- antagonist or opposing forces
- **foils** and contrasts
- **minor characters** and their function
- **relationships** — parent and child, husband and wife, friends, master and servant
- the **author's attitude** — sympathy, irony, judgement
### Themes
major and minor; how each is developed.
### Style
diction; imagery; proverbs and local idiom; humour and irony; sentence style; recurring motifs.
### Symbols
objects, places, weather, colours, animals. Ask: when does it appear? Does it change?
### Title
its literal and wider meaning.
### Key episodes
eight to ten, each with a note on its significance.

## A worked skeleton (invented novel, for method only)
*A House of Clean Windows* — narrated in the first person by Amaka, aged fourteen. Her father, a wealthy and publicly generous man, rules the home by rigid rules and punishments; her mother is silent; a holiday in the cramped, noisy flat of her widowed aunt shows her another kind of family. The novel is in three parts — *Before the Holiday*, *The Aunt's Flat*, *After*.

| Heading | Notes |
|---|---|
| point of view | first person, child narrator — admires her father while reporting things that horrify the reader: **structural irony** |
| structure | three parts marking her **growth**; a *Bildungsroman* |
| setting | the silent, spotless mansion against the crowded, laughing flat |
| protagonist | Amaka — timid, observant; learns to speak and to laugh |
| father | charitable in public, tyrannical at home — **round**, not a simple villain |
| aunt | a **foil** to the father: poor, questioning, warm |
| themes | domestic tyranny; silence and voice; appearance and reality; freedom; growing up |
| symbols | the **clean windows** — a home that looks perfect from outside; the **timetable** on the wall — control; the aunt's **wild garden** — freedom |
| style | simple sentences; sensory detail; unspoken feeling |
| title | the house is spotless to outside eyes and suffocating within |

## Linking technique to meaning
The highest marks go to answers that show **how the way of telling shapes what is told**:
> Because Amaka narrates, we are never told that her father is cruel; we are shown a girl who is proud to receive a "love sip" of scalding tea. The innocence of the voice makes the cruelty more disturbing.

## Likely essay questions
- Discuss the character of ____ / the relationship between ____ and ____.
- Examine the theme of ____.
- Comment on the narrative technique.
- What is the significance of the setting / the title / a given episode?
- Compare and contrast ____ and ____.
- How does the writer use symbolism / irony / humour?
- Trace the development of the protagonist.
- Discuss the role of ____ (a minor character).

## Using evidence from a long text
- refer to **episodes precisely**: "when the father discovers the hidden painting"
- learn a **handful of short phrases** rather than long quotations
- choose evidence from **different parts** of the novel to show command of the whole

## Common weaknesses
knowing only the early chapters; confusing the author with the narrator; treating the novel as real life rather than as a made thing; ignoring how it is written.

## Revision
One page per heading; a timeline of events; a relationship diagram; five-point outlines for ten questions.`,
          examples: `**Example 1.** What three things should each chapter note record? *Answer:* **What happens, what is revealed, and anything notable in style**.

**Example 2.** What is the effect of a child narrator? *Answer:* The child **reports more than he or she understands**, so the reader sees the truth beyond the narrator's view.

**Example 3.** In the invented novel, what do the "clean windows" symbolise? *Answer:* A home that **looks perfect from outside** but hides suffering.`,
        },
        questions: [
          ["E", "When studying a set novel, a student should first", "read the whole book for the story", "memorise the last chapter", "copy out the first page", "learn the publisher's address", "Detailed notes come on the second reading."],
          ["E", "The time, place and social world in which a novel's events occur constitute its", "setting", "plot", "theme", "style", "It often shapes character and events."],
          ["E", "Numbering and summarising each chapter of a set novel chiefly helps a student to know", "the order of events", "the cost of the book", "the rhyme scheme", "the author's age", "Examiners test the sequence of incidents."],
          ["M", "A novel narrated by a child who does not fully understand what she reports gives rise to", "structural irony", "comic relief only", "an omniscient viewpoint", "an epistolary form", "The reader sees more than the narrator."],
          ["M", "In the invented novel 'A House of Clean Windows', the aunt serves as", "a foil to the father", "the antagonist's servant", "the narrator", "a stock villain", "Her warmth and openness contrast with his rigid control."],
          ["M", "The division of a novel into named parts usually signals", "stages in the development of the story or protagonist", "that the author ran out of ideas", "a change of publisher", "the end of each sentence", "Each part marks a phase of change."],
          ["M", "A character in a novel who is charitable in public but tyrannical at home is best described as", "round", "flat", "stock", "eponymous", "He is complex and many-sided."],
          ["H", "The best literary essays on a novel show how", "the manner of narration shapes the meaning", "long the novel is", "many characters there are", "much the candidate has memorised", "Technique and theme are linked."],
          ["H", "To demonstrate command of a whole novel, a candidate should choose evidence", "from different parts of the book", "only from the opening chapter", "only from the title", "from another novel", "This shows knowledge of the entire text."],
          ["H", "Confusing the author with the narrator is an error because the narrator", "is a voice created by the author", "is always the author's enemy", "never appears in novels", "must be omniscient", "A first-person narrator's views need not be the writer's."],
        ],
      },
      {
        week: 5,
        title: "Studying prescribed poems",
        subtopics: ["Notes on a prescribed poem", "Background and context", "Comparing poems", "Preparing for poetry questions"],
        objectives: ["Make organised notes on a prescribed poem", "Use background and context appropriately", "Compare two poems on a similar subject", "Prepare outlines for likely poetry questions"],
        lesson: {
          title: "Mastering the Set Poems",
          summary: "Apply a method for studying and comparing prescribed poems.",
          minutes: 40,
          notes: `## Notes on each prescribed poem
Use the same headings for every poem so that comparison is easy.
1. **The poet and background** — nationality, period, concerns (two or three lines only)
2. **Subject matter** — a paraphrase, stanza by stanza
3. **Themes**
4. **Speaker, addressee and situation**
5. **Tone and mood** — and any shift
6. **Structure and form** — stanzas, line length, rhyme, metre or free verse
7. **Imagery and symbolism**
8. **Figures of speech and sound devices** — each with its effect
9. **Diction** — simple, formal, colloquial, local
10. **Key lines** to remember

## Background and context
Context explains; it does not replace reading.
- **historical** — colonialism, apartheid, war, a revolution, an age of faith or doubt
- **cultural** — beliefs, customs, rituals referred to
- **literary** — the movement or tradition (oral poetry, Negritude, metaphysical, Romantic, modernist)
- **biographical** — only where it plainly bears on the poem

One sentence of context, well used, is worth more than a paragraph of biography.

## Learning the poems
Read each aloud several times. Learn the **order of ideas** and a few **key phrases** by heart, so that you can refer accurately.

## Comparing two poems
Questions may ask you to compare poems on a similar subject. Compare **point by point**.
| Point | Poem A | Poem B |
|---|---|---|
| subject | | |
| theme / attitude | | |
| speaker and tone | | |
| imagery | | |
| form and sound | | |
| overall effect | | |

Use linking words: *similarly, likewise, both; whereas, in contrast, on the other hand*.

## A worked comparison (two original poems)
> **A — Harvest Song**
> Come with the baskets, come with the drums,
> the barns are yawning wide;
> the yam is fat, the rain was kind,
> and no one sleeps outside.
> Sing, for the earth has kept her word —
> sing till the old ones smile;
> tomorrow we carry our thanks to the grove
> in a long and laughing file.

> **B — Harvest**
> The combine has finished by noon.
> One man, in a cab with a radio,
> has done what the village did
> in a week of singing.
> The field is efficient now, and quiet.
> Somewhere a grain price flickers on a screen.
> Nobody carries anything
> to anyone.

### Subject
Both are about harvest. **A** celebrates a communal, traditional harvest; **B** observes a mechanised one.
### Theme and attitude
**A** — gratitude, community, harmony with the earth. **B** — the loss of community and meaning that comes with efficiency. A rejoices; B regrets.
### Speaker and tone
**A** — a communal voice issuing invitations ("Come… Sing"); tone joyful, celebratory. **B** — a detached observer; tone flat, ironic, quietly mournful.
### Imagery
**A** — personification: barns "yawning", the earth "has kept her word"; images of plenty, sound and movement. **B** — images of machinery and isolation: "a cab with a radio", "a screen"; "quiet".
### Form and sound
**A** — two rhymed quatrains (*abcb*), strong beat, repetition and alliteration ("long and laughing") — song-like, suited to celebration. **B** — free verse, unrhymed, short flat statements; the last sentence trails across two short lines into emptiness.
### Effect
In **A** form enacts community — it is a song for many voices. In **B** the absence of rhyme and music enacts what has been lost. The contrast in form is itself the contrast in theme.

## Likely questions on prescribed poems
- Discuss the theme of ____ in the poem.
- Comment on the poet's use of imagery / symbolism / language.
- Examine the attitude of the poet to ____.
- How does the poet create the mood of the poem?
- Comment on the structure / form of the poem.
- Discuss the poem as a protest poem / an elegy / a satire.
- Compare the treatment of ____ in two poems.
- What is the significance of the title?

## Answering
- open by answering the question in a sentence
- move through **three or four points**, each with quotation and comment
- refer to **form and sound**, not only to ideas
- close by linking method to meaning

## African and non-African poems side by side
Be ready to explain how each reflects its world — an African poem's oral echoes, communal voice and local imagery; an English poem's period, form and convention — and to see what they share: love, loss, injustice, time.

## Pitfalls
paraphrase without analysis; quoting at length; biography in place of the poem; ignoring the question's focus; naming devices without effect.

## Revision sheet
One card per poem: theme in a sentence; tone; three devices with effects; form; two key phrases.`,
          examples: `**Example 1.** How should two poems be compared in an essay? *Answer:* **Point by point**, discussing both poems under each heading.

**Example 2.** In the worked comparison, how do the tones of the two poems differ? *Answer:* **A** is **joyful and celebratory**; **B** is **flat, ironic and mournful**.

**Example 3.** Why is free verse appropriate to poem B? *Answer:* Its **lack of rhyme and song** mirrors the **loss of communal music** in mechanised harvest.`,
        },
        questions: [
          ["E", "Using the same headings for notes on every prescribed poem makes it easier to", "compare the poems", "lengthen the notes", "avoid reading the poems", "memorise the poets' birthdays", "Like can be set against like."],
          ["E", "The poem 'Harvest Song' (poem A) is written in", "rhymed quatrains", "free verse", "heroic couplets", "a single sonnet", "Each stanza rhymes abcb."],
          ["E", "The speaker's attitude in 'Harvest Song' is one of", "joyful gratitude", "bitter anger", "cold detachment", "fearful anxiety", "The community is called to sing and give thanks."],
          ["M", "In poem B, the line 'The field is efficient now, and quiet' conveys", "a sense of loss beneath apparent progress", "delight in modern machines", "fear of a storm", "anger at the farmer", "'Quiet' contrasts with the week of singing."],
          ["M", "'The barns are yawning wide' in poem A is an example of", "personification", "litotes", "allusion", "synecdoche", "The barns are given a human action."],
          ["M", "The linking expression most suitable for introducing a difference between two poems is", "whereas", "similarly", "likewise", "moreover", "It signals contrast."],
          ["M", "In notes on a prescribed poem, background information should be", "brief and relevant to the poem", "longer than the analysis", "about the poet's family only", "left out entirely in all cases", "Context explains but does not replace the reading."],
          ["H", "The chief difference in form between poems A and B is that", "A is song-like and rhymed while B is in unrhymed free verse", "A is longer than B", "B has more stanzas than A", "A is a sonnet and B is an ode", "The contrast in form reflects the contrast in theme."],
          ["H", "The final lines of poem B, 'Nobody carries anything / to anyone', gain their effect mainly from", "the bare negatives and the break across two short lines", "a strong end rhyme", "a simile comparing people to machines", "onomatopoeia", "The sentence trails off into emptiness."],
          ["H", "The two harvest poems, taken together, suggest that", "mechanical efficiency may be gained at the cost of community", "traditional farming produces more food", "machines should be destroyed", "poets dislike farmers", "One celebrates togetherness; the other notes its absence."],
        ],
      },
    ],
  },
  {
    classCode: "SS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Literature, society and the examination",
        subtopics: ["The writer and society", "Censorship and freedom of expression", "Structure of the examination", "Managing time and choice of questions"],
        objectives: ["Explain the relationship between literature and society", "Discuss censorship and the writer's freedom", "Describe the usual structure of the Literature examination", "Plan the use of time and the choice of questions"],
        lesson: {
          title: "Writers, Readers and the Examination Room",
          summary: "Consider the role of the writer in society and prepare for the structure of the examination.",
          minutes: 40,
          notes: `## Literature and society
Literature is produced in a society, about a society, for a society.
- it **reflects** — customs, speech, conflicts and values of its time
- it **criticises** — exposing injustice and folly
- it **preserves** — recording a way of life
- it **shapes** — changing how readers see themselves and others
- it **imagines alternatives** — what might be

### The roles of the writer
- **teacher** — helping a people to regain belief in themselves
- **historian** — keeper of memory
- **critic and conscience** — speaking truth to power
- **entertainer**
- **visionary** — pointing to a better order
- **spokesman** for the voiceless

### Commitment and art
A committed writer takes sides on public questions. The danger is **propaganda** — writing in which the message overwhelms the art, with flat characters who are mere mouthpieces. The best committed writing is persuasive because it is true to human complexity.

### Society's influence on the writer
language; available forms (oral tradition, the novel); the audience; publishers; schools and prescribed lists; politics.

## Censorship
The **suppression or control of writing** by authority — banning books, closing newspapers, imprisoning or exiling writers.
### Reasons given
national security; public morality; religion; protection of the young.
### Effects
writers turn to **allegory, satire and fable**; work is published abroad; **exile** and prison writing; self-censorship; yet banned books are often more eagerly read.
### Freedom of expression
Essential to literature — but accompanied by responsibility: laws of defamation, and respect for others.

## Literature in education
It develops language, critical thinking, moral imagination, knowledge of other cultures and a sense of one's own.

## The examination
*The exact format, prescribed texts and number of questions are fixed by the examining body for each cycle — always check the current syllabus with your teacher.* A typical senior school certificate examination in Literature in English has three papers:

### Paper 1 — objective
Multiple-choice questions on
- **general knowledge of literature** — terms, devices, genres
- **unseen prose and poetry** — passages followed by questions
- an **extract from the prescribed Shakespeare play** — context questions

### Paper 2 — prose
Essay questions on the prescribed **African** and **non-African** novels. Candidates usually answer **one question on each**.

### Paper 3 — drama and poetry
Essay questions on the prescribed **African and non-African plays** and **African and non-African poems**. Candidates usually answer **one question from each section**.

## Choosing questions
- read **all** the questions on your texts before choosing
- choose the one for which you have **most evidence**, not the one that looks shortest
- beware of the question you only half understand
- note the **exact wording** — "role", "character", "significance", "how far"

## Time
- divide the time **equally** among the essays
- for each: about **five minutes planning**, the rest writing, two minutes checking
- if time runs short, finish in **note form** — points still earn marks
- in the objective paper, do not linger: mark, move on, return

## What examiners reward
| Rewarded | Not rewarded |
|---|---|
| relevance to the question | narration of the story |
| knowledge of the text — accurate detail | vague generalities |
| organised argument | disorder; repetition |
| evidence and brief quotation | unsupported assertion |
| comment on language and technique | lists of devices |
| clear, correct expression | careless grammar and spelling |

## The objective paper: technique
- **read the stem carefully** — especially "not" and "except"
- for device questions, test the options against the **definition**
- for unseen passages, read the **questions first**, then the passage
- for the Shakespeare extract, recall **where it comes** in the play
- eliminate; choose the **best** answer; never leave a blank

## The night before and the day
revise summaries and outlines, not whole texts; sleep; bring pens; read instructions; number answers correctly; write legibly.

## Integrity
Study the texts themselves, not only notes about them; write your own answers. Borrowed, memorised essays are easily recognised and seldom fit the question.`,
          examples: `**Example 1.** Give three roles of the writer in society. *Answer:* **Teacher, critic and keeper of memory**.

**Example 2.** How do writers often respond to censorship? *Answer:* By turning to **allegory, satire and fable**, or by **publishing abroad**.

**Example 3.** How should time be divided among essay questions? *Answer:* **Equally**, allowing a few minutes of planning for each.`,
        },
        questions: [
          ["E", "The suppression or control of what may be published by those in authority is", "censorship", "criticism", "commitment", "copyright", "Books may be banned and writers detained."],
          ["E", "In an examination, the time available for essay questions should be", "shared equally among the questions", "spent mostly on the first question", "used entirely for planning", "left unplanned", "An unfinished paper loses marks."],
          ["E", "A writer who takes sides on public and political questions is described as", "committed", "anonymous", "omniscient", "eponymous", "Such a writer sees art as serving society."],
          ["M", "Writing in which the message overwhelms the art, with characters who are mere mouthpieces, is", "propaganda", "satire", "pastoral", "romance", "It sacrifices human complexity to a cause."],
          ["M", "In a multiple-choice question containing the word 'except', a candidate must look for", "the option that does not fit", "the longest option", "the first option", "two correct options", "Three of the options will be true of the stem."],
          ["M", "When choosing an essay question, a candidate should prefer the question", "for which he has the most evidence", "that looks shortest", "that comes first on the paper", "that no one else is answering", "Evidence is what earns marks."],
          ["M", "A good method for the unseen-passage section of an objective paper is to", "read the questions before reading the passage closely", "skip the passage", "answer from general knowledge", "memorise the passage", "The questions direct attention to what matters."],
          ["H", "The description of the writer as the 'conscience' of society implies that the writer", "judges and speaks out against wrongs", "entertains without purpose", "avoids public questions", "serves the government", "The writer holds society to its ideals."],
          ["H", "If time runs out during an essay, the best course is to", "complete the answer in note form", "leave the answer unfinished", "cross out the whole answer", "begin a new question", "Points briefly stated can still earn credit."],
          ["H", "Examiners give least credit to an answer that", "retells the story without addressing the question", "quotes briefly and comments", "is organised in paragraphs", "refers to language and technique", "Narration is not analysis."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: literary terms and devices",
        subtopics: ["Figures of comparison and contrast", "Figures of sound and emphasis", "Narrative and dramatic terms", "Rapid identification practice"],
        objectives: ["Recall the definitions of the common figures of speech", "Distinguish commonly confused devices", "Recall narrative and dramatic terms", "Identify devices rapidly in given examples"],
        lesson: {
          title: "Revision 1 — Terms and Devices",
          summary: "Revise literary terms and practise the rapid identification of devices.",
          minutes: 40,
          notes: `## Figures of speech — quick reference
| Device | Key | Example (original) |
|---|---|---|
| simile | "like" / "as" | quiet as an empty classroom |
| metaphor | A *is* B | the exam hall was an oven |
| personification | human quality to non-human | the kettle sang |
| apostrophe | addressing the absent or abstract | O Sleep, why do you avoid me? |
| hyperbole | exaggeration | I have a mountain of homework |
| litotes | negative understatement | she is no stranger to hard work |
| euphemism | mild for harsh | he is economical with the truth |
| irony | opposite meaning / outcome | "Lovely!" (of a burnt meal) |
| sarcasm | wounding irony | "Do take your time," to a latecomer |
| paradox | apparent contradiction, true | the more we have, the more we want |
| oxymoron | two contradictory words | organised chaos |
| antithesis | balanced opposites | speech is silver, silence is golden |
| metonymy | associated name | the bench ruled against him (= judges) |
| synecdoche | part for whole | a village of two hundred roofs |
| pun | play on meanings | the baker kneads the dough because he needs it |
| climax | rising order | he begged, he borrowed, he stole |
| anticlimax | sudden drop | she served God, her country and her cat |
| rhetorical question | no answer expected | can a leopard change its spots? |
| allusion | indirect reference | a Judas among friends |
| alliteration | initial consonants | dusty drums of December |
| assonance | vowel sounds | the old road home |
| consonance | consonants within / at end | a stroke of luck |
| onomatopoeia | sound imitates sense | the gate creaked |
| repetition / anaphora | repeated words / openings | we wait, we watch, we wonder |

## Often confused
- **simile / metaphor** — look for "like" or "as"
- **metaphor / personification** — is the thing compared specifically to a *human*?
- **irony / sarcasm** — is it meant to hurt?
- **paradox / oxymoron** — statement or two words?
- **antithesis / oxymoron** — balanced clauses or two adjacent words?
- **metonymy / synecdoche** — association or part?
- **alliteration / assonance** — consonants or vowels?
- **hyperbole / litotes** — overstatement or understatement?
- **euphemism / litotes** — softening the unpleasant, or affirming by denying the opposite?
- **allusion / allegory** — a passing reference, or a whole story with a second meaning?
- **climax / anticlimax**
- **pathos / bathos**

## Prose terms
plot; sub-plot; exposition; climax; dénouement; conflict; flashback; foreshadowing; suspense; setting; atmosphere; character — round, flat, static, dynamic, stock; protagonist; antagonist; foil; narrator; point of view — first person, third-person omniscient, limited, objective; stream of consciousness; theme; motif; style; diction; tone; mood; symbolism; satire; allegory; fable; parable; biography; autobiography; epistolary; picaresque; *Bildungsroman*.

## Drama terms
tragedy; comedy; tragicomedy; farce; melodrama; mime; opera; act; scene; prologue; epilogue; dialogue; monologue; soliloquy; aside; chorus; stage directions; dramatic irony; comic relief; catharsis; tragic flaw (*hamartia*); *hubris*; cast; *dramatis personae*; costume; props; playwright; audience; climax; dénouement; the three unities; play-within-a-play.

## Poetry terms
line; stanza; couplet; tercet; quatrain; sestet; octave; refrain; rhyme; rhyme scheme; rhythm; metre; foot — iamb, trochee, anapaest, dactyl, spondee; pentameter; blank verse; free verse; enjambment; caesura; sonnet — Petrarchan and Shakespearean; ode; elegy; dirge; ballad; epic; lyric; pastoral; dramatic monologue; panegyric; epitaph; persona; imagery; poetic licence.

## One-line definitions worth knowing exactly
- **soliloquy** — a speech by a character alone on stage, revealing thoughts
- **aside** — a brief remark unheard by other characters
- **dramatic irony** — the audience knows more than the character
- **flashback** — a return to earlier events
- **foil** — a contrasting character
- **blank verse** — unrhymed iambic pentameter
- **elegy** — a poem of mourning
- **ode** — a dignified lyric of address
- **epic** — a long heroic narrative poem
- **catharsis** — the purging of pity and fear
- **allegory** — a narrative with a sustained second meaning
- **satire** — ridicule aimed at reform

## Rapid practice
1. "The stars stitched the night together." — metaphor / personification
2. "Bread and butter issues." — metonymy
3. "Ten thousand saw I at a glance." (Wordsworth) — hyperbole; inversion
4. "His silence spoke loudly." — paradox
5. "The slow snake slid." — alliteration (sibilance)
6. "Her smile was a sunrise." — metaphor
7. "Death, be not proud." (Donne) — apostrophe; personification
8. "A noble ruin." — oxymoron-like contrast
9. "He is not the brightest boy in the class." — litotes / understatement
10. "The pen signed away a kingdom." — metonymy

## Method for device questions
1. find the **signal** — "like", a human verb, an address ("O…"), repeated sounds
2. rule out near neighbours
3. confirm against the definition`,
          examples: `**Example 1.** Identify: "The exam hall was an oven." *Answer:* **Metaphor** — the hall is said to be an oven.

**Example 2.** Identify: "A village of two hundred roofs." *Answer:* **Synecdoche** — roofs (a part) stand for houses.

**Example 3.** Distinguish alliteration from assonance. *Answer:* **Alliteration** repeats **initial consonant** sounds; **assonance** repeats **vowel** sounds.`,
        },
        questions: [
          ["E", "'The classroom was as quiet as a graveyard' contains", "a simile", "a metaphor", "a paradox", "an apostrophe", "The comparison uses 'as… as'."],
          ["E", "'The angry sea swallowed the canoe' is an example of", "personification", "litotes", "euphemism", "synecdoche", "The sea is given anger and the act of swallowing."],
          ["E", "'I have told you a thousand times' illustrates", "hyperbole", "irony", "metonymy", "antithesis", "The number is a deliberate exaggeration."],
          ["M", "'The kettle is boiling' is an example of", "metonymy", "personification", "simile", "oxymoron", "The container is named for its contents."],
          ["M", "'Speech is silver, but silence is golden' illustrates", "antithesis", "onomatopoeia", "apostrophe", "pun", "Contrasting ideas are placed in balanced clauses."],
          ["M", "'The dusty drums of December' is an example of", "alliteration", "assonance", "consonance only", "rhyme", "The initial 'd' sound is repeated."],
          ["M", "'O Lagos, city of restless feet!' illustrates", "apostrophe", "litotes", "climax", "allegory", "The city is addressed directly."],
          ["H", "'She is no stranger to hard work' is an example of", "litotes", "hyperbole", "paradox", "metaphor", "An affirmative is expressed by negating its opposite."],
          ["H", "'He served his God, his king and his stomach' illustrates", "anticlimax", "climax", "anaphora", "euphemism", "The list falls suddenly to the trivial."],
          ["H", "'A village of two hundred roofs' is an example of", "synecdoche", "simile", "oxymoron", "irony", "A part of each house is used for the whole."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: prose and drama",
        subtopics: ["Elements of prose", "Elements of drama", "Shakespeare and context questions", "Essay technique on novels and plays"],
        objectives: ["Recall the elements of prose fiction", "Recall the types and techniques of drama", "Apply the method for Shakespeare context questions", "Plan essays on prescribed novels and plays"],
        lesson: {
          title: "Revision 2 — Prose and Drama",
          summary: "Revise prose and drama and the techniques for answering questions on them.",
          minutes: 40,
          notes: `## Prose — the elements
| Element | Questions to ask |
|---|---|
| **plot** | What happens, in what order, and why? Where is the climax? |
| **setting** | Where and when? What atmosphere? How does it affect events? |
| **character** | Who? What traits? How revealed? Do they change? |
| **point of view** | Who tells? How much is known? Reliable? |
| **theme** | What idea about life emerges? |
| **style** | What kind of language? Imagery? Irony? |

### Forms
novel; novella; short story; fable; parable; allegory; biography; autobiography; memoir; essay.
### Types of novel
historical; social; political; picaresque; epistolary; Gothic; *Bildungsroman*; satirical; psychological; dystopian.
### Characters
round / flat; dynamic / static; stock; protagonist; antagonist; foil; anti-hero.
### Points of view
first person; third-person omniscient; third-person limited; objective; (second person).

## Drama — types
| Type | Mark |
|---|---|
| tragedy | serious; noble hero; flaw; unhappy end; catharsis |
| comedy | amusing; ordinary people; happy end |
| tragicomedy | mixed |
| farce | absurd situations; physical humour |
| melodrama | sensational; exaggerated emotion |
| satire | ridicule to correct |
| mime | no words |
| history play | based on historical events |

### Techniques
dialogue; monologue; soliloquy; aside; dramatic irony; suspense; comic relief; chorus; flashback; play-within-a-play; stage directions; symbolism; music and dance; disguise.
### Structure
exposition → rising action → climax → falling action → dénouement (catastrophe in tragedy). Acts and scenes; prologue and epilogue.
### Theatre
cast; *dramatis personae*; costume; props; set; wings; cue; prompter; director; audience.

## Tragedy — theory
Aristotle: plot, character, thought, diction, song, spectacle. *Hamartia*, *hubris*, *peripeteia*, *anagnorisis*, *catharsis*, *nemesis*. Classical tragedy — chorus, unities, off-stage violence; Shakespearean — sub-plots, comic relief, free movement.

## African drama
sources — ritual, festival, masquerade, storytelling; **total theatre**; proverbs; chorus; themes — tradition and change, the individual and community, corruption, gender.

## Shakespeare
- 1564–1616; Stratford; the Globe; the King's Men
- comedies, tragedies, histories, romances
- blank verse for nobles; prose for commoners and comic scenes
- bare stage; boy actors; soliloquy; scene set by words
- Early Modern English — *thou, hath, wherefore, anon*

### Context questions — the routine
1. **who** speaks, **to whom**
2. **where / when**; what has **just happened**; what **follows**
3. **meaning** of the phrase in context
4. **device** and effect
5. **character** revealed
6. **significance** — plot, theme, mood

## Essays on novels and plays
### The question types
character; relationship; theme; setting; technique; title; significance of an episode; "how far…"; compare and contrast; the work as a type (tragedy, satire, *Bildungsroman*).
### The plan
thesis → four to six points → evidence for each → conclusion.
### The paragraph
**point – evidence – explanation – link**.
### Reminders
- answer the question asked
- do not narrate
- present tense
- accurate names and events
- brief quotation
- comment on **how** the writer achieves the effect

## A model outline
*Question: "Examine the role of a minor character in a play you have studied."*
1. **Introduction** — name the play and the character; state that though minor, the character is essential to plot and theme.
2. **Plot function** — the action that depends on the character (carries a message, reveals a secret, causes a misunderstanding).
3. **Foil** — how the character's qualities throw the protagonist's into relief.
4. **Theme** — what idea the character embodies or voices.
5. **Mood** — comic relief, pathos or tension contributed.
6. **Conclusion** — the play would lose coherence or meaning without the character.

## A second model outline
*Question: "Discuss the appropriateness of the title of a novel you have studied."*
1. the **literal** reference of the title
2. the **wider or symbolic** meaning
3. **incidents** that bear it out — three, from different parts of the book
4. any **irony** in the title
5. **conclusion** — the title sums up the central theme

## Quick self-test
Can you, for each set text: tell the story in ten sentences? name the characters and relationships? state three themes with incidents? name three techniques with examples? explain the title?`,
          examples: `**Example 1.** Name the six things to consider in a Shakespeare context question. *Answer:* **Speaker and listener; place and surrounding events; meaning; device; character; significance**.

**Example 2.** What four points might an essay on a minor character cover? *Answer:* The character's **plot function, role as a foil, link to theme and contribution to mood**.

**Example 3.** How does classical tragedy differ from Shakespearean tragedy in staging violence? *Answer:* In **classical** tragedy violence is **reported**; in **Shakespearean** tragedy it is **shown on stage**.`,
        },
        questions: [
          ["E", "A character who does not change in the course of a novel is", "static", "round", "dynamic", "eponymous", "He is the same at the end as at the beginning."],
          ["E", "A speech made by a character who is alone on the stage is a", "soliloquy", "dialogue", "chorus", "prologue", "It discloses private thoughts to the audience."],
          ["E", "The turning point of the action in a novel or play is the", "climax", "exposition", "epilogue", "sub-plot", "After it the action falls towards the resolution."],
          ["M", "A minor character who brings out the qualities of the hero by contrast is acting as", "a foil", "a narrator", "a chorus", "an antagonist", "Differences between the two are highlighted."],
          ["M", "A feature that Shakespearean tragedy has but classical Greek tragedy lacks is", "comic relief and sub-plots", "a hero of high rank", "a tragic flaw", "an unhappy ending", "Greek tragedy kept to a single serious action."],
          ["M", "An essay on 'the appropriateness of the title' of a novel should show", "how the events and themes bear out the title", "who published the novel", "how many chapters it has", "the author's other titles", "Literal and symbolic meanings are both considered."],
          ["M", "A novel in which a naive young person grows through experience into maturity is classed as", "a novel of growth", "a Gothic novel", "a picaresque novel", "an epistolary novel", "The German term is Bildungsroman."],
          ["H", "In a context question, 'what follows immediately after the extract' tests the candidate's knowledge of", "the sequence of events in the play", "figures of speech", "the playwright's biography", "the metre of the lines", "The order of incidents must be known."],
          ["H", "A play in which a chorus of townspeople, drumming, proverbs and dance are integral to the action is drawing on", "the conventions of African total theatre", "the unities of French classical drama", "the Elizabethan boy-actor tradition", "the theatre of the absurd", "Performance arts are fused into one experience."],
          ["H", "Which of the following is a weakness in an essay on a novel?", "summarising the plot chapter by chapter", "supporting points with incidents", "writing in the present tense", "linking paragraphs to the question", "Summary does not answer the question."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: poetry and appreciation",
        subtopics: ["Types and forms of poetry", "Sound, rhythm and structure", "Unseen appreciation", "A final practice poem"],
        objectives: ["Recall the types and forms of poetry", "Recall terms of sound, rhythm and structure", "Apply the method of unseen appreciation", "Answer questions on a practice poem"],
        lesson: {
          title: "Revision 3 — Poetry and Appreciation",
          summary: "Revise poetry and practise the appreciation of an unseen poem.",
          minutes: 40,
          notes: `## Types of poetry
| Type | Mark |
|---|---|
| **lyric** | short; personal feeling |
| **sonnet** | 14 lines; fixed rhyme scheme |
| **ode** | dignified address |
| **elegy** | mourning |
| **dirge** | funeral song |
| **ballad** | simple sung narrative; refrain |
| **epic** | long heroic narrative |
| **pastoral** | idealised country life |
| **dramatic monologue** | one speaker to a silent listener |
| **panegyric** | praise |
| **satire** | ridicule |
| **epitaph** | for a tombstone |
| **limerick** | five lines; humorous; *aabba* |

## Sonnets
- **Petrarchan** — octave *abbaabba* + sestet *cdecde*; turn at line 9
- **Shakespearean** — three quatrains + couplet; *abab cdcd efef gg*

## Structure
couplet (2); tercet (3); quatrain (4); sestet (6); octave (8); refrain; stanza.

## Rhyme
end; internal; perfect; half; eye; masculine; feminine. Schemes: *aabb*, *abab*, *abba*, *abcb*.

## Metre
| Foot | Pattern |
|---|---|
| iamb | u / |
| trochee | / u |
| anapaest | u u / |
| dactyl | / u u |
| spondee | / / |
Lengths: trimeter (3), tetrameter (4), pentameter (5), hexameter (6).
**Blank verse** — unrhymed iambic pentameter. **Free verse** — no regular metre or rhyme. **Heroic couplet** — rhymed iambic pentameter pairs.

## Movement of the line
**enjambment** — run-on; **end-stopped**; **caesura** — pause within the line.

## Imagery
visual; auditory; tactile; olfactory; gustatory; kinetic. Symbol; allusion; pathetic fallacy.

## Periods (non-African)
metaphysical — conceit, wit; Augustan — heroic couplet, satire; Romantic — nature, feeling; Victorian — dramatic monologue, doubt; modern — free verse, fragmentation.

## African poetry
oral roots; Negritude; cultural conflict; protest; disillusionment; apartheid; free verse; local imagery; communal voice.

## Appreciation — the checklist
**S**ubject matter — **T**heme — **S**peaker — **T**one / mood — **I**magery — **D**evices — **S**ound — **S**tructure — **R**esponse.

## Final practice poem (original)
> **Examination Morning**
>
> The rooster, who has never sat a test,
> announces day as though the day were his.
> My mother's lamp has burned all night; she prays
> in whispers by the door, then knots my tie
> the way she knots her hopes — too tight. Outside,
> the road is long and brown and unimpressed.
> I walk. My pocket holds two sharpened pens,
> my head a year of chalk. Behind me still
> her small light stands, refusing to go out.

### Notes
- **Subject matter** — a student sets out for an examination, watched and prayed for by his mother.
- **Themes** — a parent's sacrifice and expectation; the pressure and loneliness of a decisive day; hope.
- **Speaker** — the student, in the **first person**.
- **Tone** — wry at first (the rooster), then tender, then resolute. **Mood** — tension mixed with affection.
- **Form** — a single nine-line stanza of **unrhymed, mostly iambic pentameter** — close to **blank verse**; its plain, speech-like movement suits a quiet, private moment.
- **Devices**
  - **personification / humour** — the rooster "announces day as though the day were his"; the road is "unimpressed"
  - **irony** — the carefree rooster "has never sat a test"
  - **simile** — "the way she knots her hopes — too tight": the tie becomes her anxiety and expectation
  - **polysyndeton** — "long and brown and unimpressed" stretches the road
  - **metonymy** — "a year of chalk" = a year of lessons
  - **caesura** — "I walk." — the short sentence shows resolve
  - **enjambment** — "Behind me still / her small light stands" — the light lingers across the line
  - **symbolism** — the **lamp / small light** = the mother's love, vigil and faith; "refusing to go out" = her persistence
  - **alliteration** — "long… light"; "still… small… stands"
- **Effect** — the examination itself is never described; the poem is about what the student carries to it.

## Typical questions on it
1. The speaker is — *a student*.
2. "unimpressed" (line 6) is — *personification*.
3. "a year of chalk" means — *a year of schooling*.
4. The lamp symbolises — *the mother's love and hope*.
5. The poem's form is closest to — *blank verse*.
6. The tone of the first two lines is — *humorous / wry*.
7. "I walk." is effective because — *its brevity suggests determination*.

## Last words on appreciation
- trust the words on the page
- name, quote, explain
- relate every observation to **meaning**
- write what you see, clearly

## Final checklist for the whole course
- the three genres and their elements
- at least thirty devices, with your own examples
- the forms of poetry and drama
- the method for context questions
- the method for essays
- summaries, characters, themes and techniques of every prescribed text
- practice on unseen prose and poetry`,
          examples: `**Example 1.** What is the form of "Examination Morning"? *Answer:* **Unrhymed iambic pentameter — close to blank verse** — in a single stanza.

**Example 2.** What does the mother's "small light" symbolise? *Answer:* Her **love, vigil and persistent hope** for her child.

**Example 3.** Explain "a year of chalk". *Answer:* **A year of lessons** — chalk stands for teaching (metonymy).`,
        },
        questions: [
          ["E", "The speaker in 'Examination Morning' is", "a student going to an examination", "the mother", "the rooster", "a teacher", "He speaks in the first person."],
          ["E", "A five-line humorous poem rhyming aabba is", "a limerick", "a sonnet", "an ode", "an elegy", "It is light and comic."],
          ["E", "A poem written to be inscribed on a tombstone is", "an epitaph", "an epigram", "an epic", "an epilogue", "It commemorates the dead in a few lines."],
          ["M", "In 'Examination Morning', the road described as 'unimpressed' is an example of", "personification", "onomatopoeia", "hyperbole", "allusion", "A human attitude is given to the road."],
          ["M", "The expression 'a year of chalk' in the poem means", "a year of school lessons", "a box of chalk", "a dusty road", "a white shirt", "Chalk stands for the teaching associated with it."],
          ["M", "The mother's lamp that 'has burned all night' and 'stands, refusing to go out' symbolises", "her love and persistent hope", "the cost of kerosene", "the coming of dawn", "the student's fear", "It represents her vigil for her child."],
          ["M", "The short sentence 'I walk.' in the poem is effective because it", "suggests the speaker's determination", "rhymes with the next line", "introduces the rooster", "describes the mother", "Its brevity and the pause after it show resolve."],
          ["H", "The form of 'Examination Morning' is closest to", "blank verse", "a Petrarchan sonnet", "a ballad", "heroic couplets", "The lines are unrhymed and mostly iambic pentameter."],
          ["H", "'She knots my tie the way she knots her hopes — too tight' suggests that the mother", "places heavy expectations on the speaker", "is careless with clothes", "does not care about the examination", "is angry with her son", "The tight knot stands for anxious, pressing hope."],
          ["H", "The humour of the opening lines about the rooster 'who has never sat a test' depends on", "the ironic contrast between the carefree bird and the anxious student", "a pun on the word 'day'", "an allusion to the Bible", "a regular rhyme scheme", "The rooster's confidence mocks the speaker's tension."],
        ],
      },
    ],
  },
];
