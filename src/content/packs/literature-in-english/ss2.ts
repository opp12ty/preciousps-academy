import type { TermPlan } from "../types";

/** SS2 Literature in English — original Precious PS content. Quoted lines come from works in the public domain or were written for this pack. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Poetic form: stanza, rhyme and rhyme scheme",
        subtopics: ["Stanza forms", "Rhyme and its kinds", "Working out a rhyme scheme", "Run-on and end-stopped lines"],
        objectives: ["Name stanza forms by their number of lines", "Identify the kinds of rhyme", "Work out the rhyme scheme of a stanza", "Distinguish enjambment, end-stopping and caesura"],
        lesson: {
          title: "The Shape of a Poem",
          summary: "Describe stanza forms, kinds of rhyme and how to mark a rhyme scheme.",
          minutes: 40,
          notes: `## Stanza forms
A **stanza** is a group of lines set off as a unit.
| Lines | Name |
|---|---|
| 2 | **couplet** |
| 3 | **tercet** (a **triplet** if all three rhyme) |
| 4 | **quatrain** |
| 5 | **cinquain / quintet** |
| 6 | **sestet / sextet** |
| 7 | **septet** |
| 8 | **octave / octet** |

### Special forms
- **heroic couplet** — two rhyming lines of iambic pentameter
- **ballad stanza** — a quatrain rhyming *abcb*, with alternating four- and three-stress lines
- **terza rima** — tercets linked by rhyme: *aba bcb cdc*
- **rhyme royal** — seven lines rhyming *ababbcc*
- **ottava rima** — eight lines rhyming *abababcc*
- **Spenserian stanza** — nine lines rhyming *ababbcbcc*

A poem not divided into regular stanzas is **stichic**; one in regular stanzas is **strophic**.

## Rhyme
The **agreement of sounds**, usually at the ends of lines.
### By position
- **end rhyme** — at the ends of lines
- **internal rhyme** — a word within a line rhymes with the word at its end: "Once upon a midnight **dreary**, while I pondered, weak and **weary**" (Poe)
### By sound
- **perfect (full) rhyme** — the sounds match exactly: *bright / night*
- **half rhyme (slant, near, para-rhyme)** — the sounds are close but not identical: *worm / swarm*; *hall / hell*
- **eye rhyme (sight rhyme)** — the words look alike but sound different: *love / move*; *cough / bough*
### By syllables
- **masculine rhyme** — on a single stressed final syllable: *stand / land*
- **feminine rhyme** — on two syllables, the second unstressed: *ending / bending*

### Functions of rhyme
music and pleasure; it links ideas; it marks the ends of lines; it aids memory; it gives a sense of completion.

## Rhyme scheme
The **pattern of end rhymes**, marked with letters. Give the first end sound **a**; every line that rhymes with it is also **a**; the next new sound is **b**, and so on.

> The harmattan has come to **stay**, — a
> the fields are brown, the sky is **grey**; — a
> the children cough beside the **fire**, — b
> and morning comes a little **higher**. — b

Rhyme scheme: ***aabb*** (couplets).

### Common schemes
| Scheme | Name |
|---|---|
| *aabb* | couplet rhyme |
| *abab* | alternate (cross) rhyme |
| *abba* | enclosed (envelope) rhyme |
| *abcb* | ballad rhyme |
| *aaaa* | monorhyme |

## Verse without rhyme
- **blank verse** — **unrhymed iambic pentameter**; the staple of Shakespeare's plays and Milton's *Paradise Lost*
- **free verse (*vers libre*)** — no regular metre and no regular rhyme; its rhythm follows speech and sense. Much modern and African poetry is in free verse.

| Blank verse | Free verse |
|---|---|
| no rhyme | usually no rhyme |
| **regular metre** | **no regular metre** |

## The line
- **end-stopped line** — the sense and the grammar **pause at the end of the line**, usually with punctuation
- **enjambment (run-on line)** — the sense **runs over** into the next line without a pause
- **caesura** — a **pause within a line**, usually marked by punctuation

> The drum is silent now. No dancer
> comes; the square is given back to dust.

"No dancer / comes" is **enjambment**; the full stop after "now" and the semicolon after "comes" are **caesuras**.

### Effects
Enjambment hurries the reader on, mimics movement or overflow of feeling, and throws weight on the word that begins the next line. End-stopping gives firmness and finality. A caesura slows the line and creates emphasis.

## Other terms
- **refrain** — a repeated line or lines
- **volta** — the "turn" in thought, especially in a sonnet
- **envoi** — a short closing stanza
- **typography / layout** — the visual arrangement, which in some poems carries meaning (**concrete** or **shape poetry**)

## Commenting on form
Never stop at naming the form. Ask what it **does**: do the couplets give a neat, proverbial snap? Does the lack of rhyme suit a troubled, conversational voice?`,
          examples: `**Example 1.** Work out the rhyme scheme: lines ending *sea, shore, free, more*. *Answer:* ***abab***.

**Example 2.** What is the difference between blank verse and free verse? *Answer:* **Blank verse** has **regular metre (iambic pentameter) but no rhyme**; **free verse** has **neither regular metre nor regular rhyme**.

**Example 3.** Define enjambment. *Answer:* The **running-on of sense from one line into the next** without a pause.`,
        },
        questions: [
          ["E", "Two successive lines of verse that rhyme form a", "couplet", "quatrain", "tercet", "sestet", "It is the shortest stanza form."],
          ["E", "The pattern of end rhymes in a poem is its", "rhyme scheme", "metre", "diction", "theme", "It is marked with letters of the alphabet."],
          ["E", "A stanza of eight lines is called", "an octave", "a sestet", "a septet", "a quintet", "It forms the first part of an Italian sonnet."],
          ["M", "Lines of a stanza end with the words 'day', 'night', 'way' and 'light'. The rhyme scheme is", "abab", "aabb", "abba", "abcb", "The first and third lines rhyme, as do the second and fourth."],
          ["M", "Unrhymed lines of iambic pentameter are known as", "blank verse", "free verse", "heroic couplets", "terza rima", "Shakespeare used it for most of his plays."],
          ["M", "The running-on of the sense of one line into the next without a pause is", "enjambment", "caesura", "refrain", "inversion", "It is also called a run-on line."],
          ["M", "A rhyme that occurs between a word within a line and the word at the end of that line is", "internal rhyme", "end rhyme", "eye rhyme", "feminine rhyme", "Both rhyming words are in the same line."],
          ["H", "The words 'love' and 'move', which look alike but are pronounced differently, form", "an eye rhyme", "a perfect rhyme", "a masculine rhyme", "an internal rhyme", "It is also called sight rhyme."],
          ["H", "A pause within a line of verse, usually marked by punctuation, is a", "caesura", "volta", "couplet", "stanza break", "It breaks the line into two parts."],
          ["H", "Poetry that has neither a regular metre nor a regular rhyme scheme is", "free verse", "blank verse", "ottava rima", "ballad metre", "Its rhythm follows natural speech."],
        ],
      },
      {
        week: 2,
        title: "Metre and rhythm",
        subtopics: ["Stress, rhythm and metre", "The metrical feet", "Line lengths", "Scansion and variation"],
        objectives: ["Distinguish rhythm from metre", "Identify the main metrical feet", "Name lines by the number of feet", "Scan a simple line and comment on its rhythm"],
        lesson: {
          title: "The Beat of Verse",
          summary: "Explain rhythm and metre and scan simple lines of verse.",
          minutes: 40,
          notes: `## Stress
In English, some syllables are spoken with more force than others. In **"be-LOW"** the second syllable is **stressed**; in **"TA-ble"** the first.

## Rhythm and metre
- **rhythm** — the **flow of stressed and unstressed syllables** in a line; every utterance has rhythm
- **metre** — a **regular, repeating pattern** of stressed and unstressed syllables

All verse has rhythm; only some has metre.

## The foot
The **unit of metre** — a group of two or three syllables, one of which is usually stressed. Below, **u** marks an unstressed syllable and **/** a stressed one.

| Foot | Pattern | Example | Adjective |
|---|---|---|---|
| **iamb** | u / | be-LOW | iambic |
| **trochee** | / u | GAR-den | trochaic |
| **anapaest** | u u / | un-der-STAND | anapaestic |
| **dactyl** | / u u | MER-ri-ly | dactylic |
| **spondee** | / / | HEART-BREAK | spondaic |
| **pyrrhic** | u u | (of the) | pyrrhic |

- **rising metres** (iambic, anapaestic) move from weak to strong
- **falling metres** (trochaic, dactylic) move from strong to weak

The **iamb** is the commonest foot in English verse, being closest to natural speech.

## Line lengths
| Feet | Name |
|---|---|
| 1 | monometer |
| 2 | dimeter |
| 3 | trimeter |
| 4 | tetrameter |
| 5 | **pentameter** |
| 6 | hexameter (an iambic hexameter is an **alexandrine**) |
| 7 | heptameter |

A metre is named by **foot + length**: **iambic pentameter** = five iambs = ten syllables.

## Scansion
The **analysis of a line into feet**, marking stressed and unstressed syllables.

> Shall **I** | com**PARE** | thee **TO** | a **SUM** | mer's **DAY**?
> u / | u / | u / | u / | u /

Five iambs: **iambic pentameter** (Shakespeare, Sonnet 18).

> **TY**-ger! | **TY**-ger! | **BURN**-ing | **BRIGHT**
> / u | / u | / u | /

Trochaic tetrameter with the last unstressed syllable dropped (Blake, "The Tyger").

### Steps
1. read the line aloud naturally
2. mark the stressed syllables of words of more than one syllable first
3. mark the remaining stresses by sense
4. divide into feet and name the pattern

## Variation
Poets rarely keep a metre perfectly; variation avoids monotony and creates emphasis.
- **substitution** — replacing the expected foot with another (a trochee at the start of an iambic line gives a strong opening)
- **catalexis** — dropping the final unstressed syllable
- a **feminine ending** — an extra unstressed syllable at the end of an iambic line
- **caesura** and **enjambment** also vary the movement

## Named metrical forms
- **blank verse** — unrhymed iambic pentameter
- **heroic couplet** — rhymed pairs of iambic pentameter
- **ballad metre (common metre)** — alternating iambic tetrameter and trimeter
- **sprung rhythm** — Gerard Manley Hopkins's system, counting stresses only
- **free verse** — no regular metre

## Effects of rhythm
| Rhythm | Effect |
|---|---|
| regular, steady | calm, order, marching, a lullaby |
| quick (many unstressed syllables; anapaests) | excitement, galloping, lightness |
| slow (long vowels, spondees, many pauses) | solemnity, grief, weight |
| broken, irregular | agitation, conflict |

> The long day wanes: the slow moon climbs. (Tennyson)

The heavy stresses on "long day wanes" and "slow moon climbs" slow the line to match the sense.

## Rhythm in African poetry
Much African poetry in English is in **free verse**, but it draws rhythm from **repetition, parallelism, drum patterns, chant and song**. Do not look for iambs where the poet is working with other music.

## Tempo and pace
Short lines and short words quicken the pace; long lines, long vowels and punctuation slow it.

## Commenting on rhythm
Say what the rhythm is **like** and what it **does**: "The regular beat imitates the tramp of feet"; "The rhythm breaks at line 6, where the speaker's confidence breaks".`,
          examples: `**Example 1.** What is an iamb? *Answer:* A foot of **one unstressed syllable followed by one stressed** (u /).

**Example 2.** How many syllables has a regular line of iambic pentameter? *Answer:* **Ten** — five feet of two syllables each.

**Example 3.** Name the foot in the word "HAP-py". *Answer:* A **trochee** (/ u).`,
        },
        questions: [
          ["E", "A regular, repeating pattern of stressed and unstressed syllables in verse is", "metre", "rhyme", "imagery", "theme", "It is measured in feet."],
          ["E", "The unit of metre, made up of two or three syllables, is the", "foot", "stanza", "couplet", "refrain", "Feet combine to form a line."],
          ["E", "A line of verse with five feet is a", "pentameter", "tetrameter", "trimeter", "hexameter", "'Penta' means five."],
          ["M", "A metrical foot of one unstressed syllable followed by one stressed syllable is", "an iamb", "a trochee", "a dactyl", "a spondee", "Example: 'a-WAY'."],
          ["M", "A foot consisting of a stressed syllable followed by an unstressed syllable is", "a trochee", "an iamb", "an anapaest", "a pyrrhic", "Example: 'TA-ble'."],
          ["M", "The analysis of a line of verse into its feet, marking stressed and unstressed syllables, is", "scansion", "paraphrase", "enjambment", "alliteration", "It shows the metre of the line."],
          ["M", "A line of iambic pentameter normally contains", "ten syllables", "five syllables", "eight syllables", "twelve syllables", "It has five feet of two syllables each."],
          ["H", "A foot of two unstressed syllables followed by one stressed syllable is", "an anapaest", "a dactyl", "a spondee", "a trochee", "Example: 'in-ter-VENE'."],
          ["H", "A foot consisting of two stressed syllables is", "a spondee", "a pyrrhic", "an iamb", "a dactyl", "It slows and weights the line."],
          ["H", "A line of four trochaic feet is described as", "trochaic tetrameter", "iambic tetrameter", "trochaic pentameter", "dactylic trimeter", "The foot is named first, then the length."],
        ],
      },
      {
        week: 3,
        title: "The sonnet",
        subtopics: ["Origin and features of the sonnet", "The Petrarchan sonnet", "The Shakespearean sonnet", "Reading Sonnet 18"],
        objectives: ["State the features of the sonnet", "Describe the structure of the Petrarchan sonnet", "Describe the structure of the Shakespearean sonnet", "Analyse a Shakespearean sonnet"],
        lesson: {
          title: "Fourteen Lines",
          summary: "Describe the two main sonnet forms and analyse Shakespeare's Sonnet 18.",
          minutes: 40,
          notes: `## The sonnet
A **lyric poem of fourteen lines**, usually in **iambic pentameter**, with a fixed rhyme scheme. The name comes from the Italian *sonetto*, "little song". It began in thirteenth-century Italy, was perfected by **Petrarch**, and was brought into English in the sixteenth century by **Sir Thomas Wyatt** and the **Earl of Surrey**.

### Features
- fourteen lines
- iambic pentameter (in English)
- a set rhyme scheme
- a single, concentrated thought or feeling
- a **turn (*volta*)** in the argument
- traditional subject: love — later also religion, politics, time, death

## The Petrarchan (Italian) sonnet
Two parts:
- an **octave** (eight lines) rhyming ***abbaabba*** — presents a problem, question or situation
- a **sestet** (six lines) rhyming ***cdecde*** or ***cdcdcd*** — gives the answer, comment or resolution
The **volta** falls at **line 9**, between octave and sestet.
*Examples:* Milton's "On His Blindness"; Wordsworth's "Composed upon Westminster Bridge".

## The Shakespearean (English) sonnet
- **three quatrains** and a **concluding couplet**
- rhyme scheme ***abab cdcd efef gg***
- each quatrain develops one stage of the thought; the **couplet** sums up, clinches or reverses it
- the turn often comes at **line 9** or at the **couplet (line 13)**
Shakespeare wrote **154** sonnets, published in **1609**.

## The Spenserian sonnet
Three quatrains and a couplet with **interlocking** rhymes: ***abab bcbc cdcd ee***.

| | Petrarchan | Shakespearean |
|---|---|---|
| division | octave + sestet | three quatrains + couplet |
| rhyme scheme | abbaabba cdecde | abab cdcd efef gg |
| number of rhymes | four or five | seven |
| turn | line 9 | line 9 or 13 |
| ending | a reflective sestet | an epigrammatic couplet |

## Sonnet 18 — William Shakespeare
> Shall I compare thee to a summer's day?
> Thou art more lovely and more temperate:
> Rough winds do shake the darling buds of May,
> And summer's lease hath all too short a date:
> Sometime too hot the eye of heaven shines,
> And often is his gold complexion dimm'd;
> And every fair from fair sometime declines,
> By chance, or nature's changing course, untrimm'd;
> But thy eternal summer shall not fade
> Nor lose possession of that fair thou ow'st;
> Nor shall Death brag thou wander'st in his shade,
> When in eternal lines to time thou grow'st;
> So long as men can breathe, or eyes can see,
> So long lives this, and this gives life to thee.

### Subject matter
The speaker considers comparing the beloved to a summer's day, finds summer inferior, and declares that the beloved's beauty will live for ever in the poem.

### Structure of the argument
- **quatrain 1** (lines 1–4) — the question; the beloved is lovelier and more constant; summer is rough and brief
- **quatrain 2** (5–8) — summer's faults continue: the sun is too hot or clouded; all beauty fades
- **quatrain 3** (9–12) — the **turn**, signalled by **"But"**: the beloved's "eternal summer" will not fade, nor will Death claim it
- **couplet** (13–14) — the reason: as long as people live to read, this poem lives and gives life to the beloved

### Themes
the **transience of natural beauty**; the **power of poetry to immortalise**; love and admiration; time and death.

### Devices
- **rhetorical question** — line 1
- **metaphor** — "summer's lease": summer holds its time on a short tenancy; "the eye of heaven" = the sun; "thy eternal summer" = the beloved's beauty
- **personification** — the sun has a "gold complexion"; Death can "brag"; rough winds "shake"
- **anaphora / repetition** — "So long… / So long"; "Nor… Nor"
- **alliteration** — "long lives… life"
- **hyperbole** — "eternal"
- **antithesis** — fading summer against undying verse
- archaic diction — "thee", "thou", "hath", "ow'st" (ownest)

### Tone
admiring and tender at first; confident, even triumphant, in the couplet.

### Form
Shakespearean sonnet in iambic pentameter, *abab cdcd efef gg*.

## Other notable sonnet writers
Sidney; Spenser; Donne (the *Holy Sonnets*); Milton; Wordsworth; Keats; Elizabeth Barrett Browning.

## Sonnet sequence
A series of sonnets linked by theme or addressed to one person.

## How to approach any sonnet
Identify the form from the rhyme scheme; find the turn; trace how each section advances the thought; then consider imagery and tone.`,
          examples: `**Example 1.** Give the rhyme scheme of a Shakespearean sonnet. *Answer:* ***abab cdcd efef gg***.

**Example 2.** What is the volta? *Answer:* The **turn or shift in thought** in a sonnet.

**Example 3.** In Sonnet 18, what will keep the beloved's beauty alive? *Answer:* The **poem itself** — "this gives life to thee".`,
        },
        questions: [
          ["E", "A sonnet consists of", "fourteen lines", "twelve lines", "sixteen lines", "ten lines", "This is its defining feature."],
          ["E", "The sonnet form originated in", "Italy", "England", "Greece", "France", "Petrarch perfected it."],
          ["E", "The last two lines of a Shakespearean sonnet form a", "couplet", "quatrain", "sestet", "tercet", "They rhyme with each other."],
          ["M", "A Petrarchan sonnet is divided into", "an octave and a sestet", "three quatrains and a couplet", "two septets", "seven couplets", "The octave has eight lines and the sestet six."],
          ["M", "The rhyme scheme of the octave of a Petrarchan sonnet is", "abbaabba", "ababcdcd", "aabbccdd", "abcabcab", "Only two rhyme sounds are used."],
          ["M", "The turn in thought in a sonnet is known as the", "volta", "caesura", "refrain", "envoi", "In the Italian form it comes at line nine."],
          ["M", "In Sonnet 18, 'the eye of heaven' refers to", "the sun", "the moon", "the beloved", "God's judgement", "It is a metaphor."],
          ["H", "The turn in Shakespeare's Sonnet 18 is signalled by the word", "But", "Shall", "And", "So", "It begins the third quatrain at line nine."],
          ["H", "The main theme of Sonnet 18 is that", "poetry can make beauty immortal", "summer is the best season", "death conquers all", "love is always painful", "The couplet says the poem will give life to the beloved."],
          ["H", "The expression 'summer's lease hath all too short a date' implies that summer", "lasts only for a brief period", "is owned by a landlord", "is longer than other seasons", "never ends", "The legal metaphor of a lease suggests a limited term."],
        ],
      },
      {
        week: 4,
        title: "African poetry",
        subtopics: ["Oral roots of African poetry", "Negritude and the colonial experience", "Post-independence themes", "Style in modern African poetry"],
        objectives: ["Explain the influence of oral tradition on written African poetry", "Describe Negritude and poetry of the colonial experience", "Identify the main themes of post-independence African poetry", "Describe the stylistic features of modern African poetry"],
        lesson: {
          title: "Voices of a Continent",
          summary: "Survey the themes and styles of African poetry in English and in translation.",
          minutes: 40,
          notes: `## Oral roots
Written African poetry grew from a rich oral tradition — praise poetry, dirges, incantations, work songs, lullabies and proverbs. From it modern poets take
- **repetition, parallelism and refrain**
- **call and response**
- **direct address** and invocation
- the rhythm of **drum, chant and song** (some poems name the instruments that should accompany them)
- **proverbs, idioms and local images** — the baobab, the kola nut, the masquerade, the harmattan
- the **communal voice** — a speaker who speaks for a people

## Negritude
A literary and cultural movement begun in **Paris in the 1930s** by French-speaking African and Caribbean students — **Léopold Sédar Senghor** (Senegal), **Aimé Césaire** (Martinique) and **Léon Damas** (French Guiana). It was a reply to the French policy of assimilation.

### Ideas
- pride in **blackness** and African identity
- celebration of the **African past**, landscape, music and womanhood — Africa is often personified as a mother or a beautiful woman
- rejection of the claim that Africa had no culture
- nostalgia for a lost, harmonious world
### Poets
Senghor; **David Diop**, whose fiercely anti-colonial verse addresses Africa as a proud mother enduring humiliation; **Birago Diop**, who wrote of the living presence of the ancestors.
### Criticism
English-speaking writers, notably **Wole Soyinka**, thought it romanticised Africa and asserted what needed no announcing.

## Poetry of the colonial encounter
### Themes
- the **clash of cultures** — the African torn between tradition and the West (the speaker who hears both the jungle drum and the foreign concerto and is lost between them)
- **alienation** and the loss of identity
- **protest** against colonial oppression, forced labour and racism
- **racial prejudice** met abroad
- **nostalgia** for childhood and the village

### Pioneer and first-generation poets in English
**Gabriel Okara**, **Christopher Okigbo**, **Wole Soyinka**, **J. P. Clark** (Nigeria); **Kofi Awoonor**, **Kwesi Brew** (Ghana); **Lenrie Peters** (The Gambia); **Dennis Brutus** (South Africa); **Okot p'Bitek** (Uganda), whose long song-poem gives voice to a village wife scorning her husband's imitation of Western ways.

## Post-independence themes
- **disillusionment** — the failure of leaders to fulfil the promises of independence
- **corruption** and the abuse of power
- **military rule**, civil war and violence
- **poverty** and the gap between rich and poor
- **apartheid** and the struggle for freedom in southern Africa — prison, exile, resistance
- **tradition and belief** — the *abiku* (spirit-child), ancestors, ritual
- **nature and the environment** — the rains, the river, the degraded land
- **love**, death and the passage of time
- **exile and migration**
- **the place of women**

### Later voices
**Niyi Osundare**, **Tanure Ojaide**, **Odia Ofeimun**, **Kofi Anyidoho**, **Jack Mapanje**, **Oswald Mtshali**, and many women poets including **Ama Ata Aidoo** — poets who write deliberately for a wide audience in accessible language.

## Style
- mostly **free verse**
- **imagery drawn from the African environment**
- **oral devices** — repetition, refrain, praise names, invocation
- words from **indigenous languages**; local idiom and proverbs
- **irony and satire** against oppressors and corrupt leaders
- **symbolism** — the drum, the river, the vulture, the rain
- a **public voice** — the poet as spokesman and conscience
- some early poets (Okigbo, Soyinka) are dense and allusive, mixing African myth with European modernism; later poets favour clarity

## Two kinds of difficulty
A poem may be hard because of **private or learned allusion**, or because it assumes knowledge of a **culture** — a ritual, a deity, a custom. Notes on context help with both.

## An illustration (original)
> They promised us the rain.
> We swept the yard and set the pots in rows.
> Now the pots hold wind,
> and the promisers have learned to drink abroad.

*Theme:* post-independence disillusionment. *Devices:* symbolism (rain = prosperity; empty pots = unfulfilled hopes); irony in the last line; the communal "we"; plain diction; free verse.

## Approaching an African poem
1. find the **situation and speaker** — an individual or a community?
2. note the **historical context** — colonial, independence, apartheid, military rule
3. look for **oral features**
4. trace the **images** to their source in the environment or belief
5. decide the **tone** — celebration, lament, anger, mockery

## Note on prescribed poems
Examination bodies prescribe a list of African and non-African poems for each cycle. Study each prescribed poem with your teacher under: background of the poet, subject matter, themes, structure, poetic devices and tone.`,
          examples: `**Example 1.** Who were the founders of Negritude? *Answer:* **Senghor, Césaire and Damas**.

**Example 2.** Give two themes of post-independence African poetry. *Answer:* **Disillusionment with leaders** and **corruption**.

**Example 3.** Name two oral features found in modern African poems. *Answer:* **Repetition** and **direct address (invocation)**.`,
        },
        questions: [
          ["E", "The literary movement that celebrated black identity and African culture was", "Negritude", "Romanticism", "Modernism", "Realism", "It began in Paris in the 1930s."],
          ["E", "Most modern African poetry in English is written in", "free verse", "heroic couplets", "terza rima", "blank verse only", "It has no regular metre or rhyme."],
          ["E", "A leading founder of the Negritude movement who later became President of Senegal was", "Léopold Sédar Senghor", "Wole Soyinka", "Dennis Brutus", "Gabriel Okara", "He wrote in French."],
          ["M", "Negritude arose largely as a reaction to the French colonial policy of", "assimilation", "indirect rule", "apartheid", "federation", "It rejected the idea that Africans should become Frenchmen."],
          ["M", "A common theme of African poetry written after independence is", "disillusionment with political leaders", "praise of colonial rule", "the beauty of English landscapes", "medieval chivalry", "The promises of independence were not fulfilled."],
          ["M", "The poetry of Dennis Brutus and Oswald Mtshali is chiefly associated with", "the struggle against apartheid", "the Negritude movement", "the English Romantic period", "the Nigerian civil war", "They wrote out of the South African experience."],
          ["M", "A feature that modern African poetry takes from the oral tradition is", "repetition and refrain", "iambic pentameter", "the Petrarchan octave", "the heroic couplet", "These devices aid memory and performance."],
          ["H", "In Negritude poetry, Africa is frequently personified as", "a mother or a beautiful woman", "a wicked king", "a cold machine", "a foreign visitor", "The image expresses love and pride."],
          ["H", "A poem in which the speaker is torn between the drums of his village and the music of Europe explores the theme of", "cultural conflict", "romantic love", "religious devotion", "old age", "The speaker belongs fully to neither world."],
          ["H", "The 'abiku' in African poetry refers to", "a spirit-child believed to die and be reborn repeatedly", "a praise-singer at the king's court", "a type of drum", "a funeral dirge", "It is drawn from traditional belief."],
        ],
      },
      {
        week: 5,
        title: "Non-African poetry: periods and styles",
        subtopics: ["Renaissance and metaphysical poetry", "Augustan and Romantic poetry", "Victorian and modern poetry", "Reading Shelley's Ozymandias"],
        objectives: ["Describe the features of metaphysical poetry", "Contrast Augustan and Romantic poetry", "Describe Victorian and modern poetry", "Analyse a non-African poem in the light of its period"],
        lesson: {
          title: "Four Centuries of English Verse",
          summary: "Survey the main periods of English poetry and analyse Shelley's Ozymandias.",
          minutes: 40,
          notes: `## Why periods matter
A poem is shaped by the ideas and tastes of its age. Knowing the period helps to explain its subject, its form and its language.

## Renaissance (sixteenth century)
The sonnet, the love lyric and the pastoral flourished: **Wyatt, Surrey, Sidney, Spenser, Shakespeare, Marlowe**. Themes: courtly love, beauty, time and mortality.

## Metaphysical poetry (early seventeenth century)
**John Donne**, **George Herbert**, **Andrew Marvell**, **Henry Vaughan**.
### Features
- the **conceit** — an ingenious, far-fetched extended comparison (Donne compares two lovers' souls to the two legs of a pair of compasses)
- **wit**, argument and paradox
- a **dramatic, conversational opening**
- learned images from science, law, geography and religion
- subjects: **love and religion**, often together
- rough, speech-like rhythm
The theme of *carpe diem* ("seize the day") — enjoy life now, for time flies — appears strongly in Marvell and in Robert Herrick.

## John Milton (1608–1674)
*Paradise Lost* (1667) — the great English **epic**, in **blank verse**, on the fall of man.

## Augustan / Neoclassical poetry (late seventeenth and eighteenth centuries)
**John Dryden**, **Alexander Pope**, Samuel Johnson.
### Features
- **reason, order, balance** and restraint
- the **heroic couplet**
- **satire** and the mock-epic
- society and manners as subject
- polished, formal **poetic diction**
Towards the end of the century came the reflective "graveyard" poetry of **Thomas Gray** ("Elegy Written in a Country Churchyard").

## Romantic poetry (about 1789–1832)
A reaction against Augustan rules, influenced by the French Revolution. **William Blake**; **William Wordsworth** and **Samuel Taylor Coleridge**, whose *Lyrical Ballads* (**1798**) is taken as its starting point; **Lord Byron**, **Percy Bysshe Shelley**, **John Keats**.
### Features
- **emotion and imagination** above reason
- love of **nature** as teacher and healer
- the **individual**; childhood; the common man
- **simple language** "really used by men" (Wordsworth)
- the **supernatural**, the remote and the past
- **freedom** and rebellion against tyranny
- the lyric, the ode and the ballad

| Augustan | Romantic |
|---|---|
| reason | feeling |
| society, the town | nature, solitude |
| heroic couplet | varied lyric forms |
| polished diction | plainer speech |
| satire | lyric and ode |

## Victorian poetry (1837–1901)
**Alfred Tennyson**, **Robert Browning**, Matthew Arnold, **Gerard Manley Hopkins**, Christina Rossetti.
- doubt and faith in an age of science
- the **dramatic monologue** (Browning)
- narrative and musical verse (Tennyson)
- Hopkins's **sprung rhythm**

## Modern poetry (twentieth century)
**W. B. Yeats**, **T. S. Eliot** (*The Waste Land*, 1922), Ezra Pound, W. H. Auden; the war poets **Wilfred Owen** and Siegfried Sassoon; in America, **Walt Whitman** (pioneer of free verse), **Emily Dickinson**, **Robert Frost**, Langston Hughes.
- **free verse** and experiment
- fragmentation, allusion and difficulty
- urban life; disillusionment after the World Wars
- everyday speech; irony

## A Romantic poem: "Ozymandias" — P. B. Shelley (1818)
> I met a traveller from an antique land,
> Who said—"Two vast and trunkless legs of stone
> Stand in the desert. . . . Near them, on the sand,
> Half sunk a shattered visage lies, whose frown,
> And wrinkled lip, and sneer of cold command,
> Tell that its sculptor well those passions read
> Which yet survive, stamped on these lifeless things,
> The hand that mocked them, and the heart that fed;
> And on the pedestal, these words appear:
> My name is Ozymandias, King of Kings;
> Look on my Works, ye Mighty, and despair!
> Nothing beside remains. Round the decay
> Of that colossal Wreck, boundless and bare
> The lone and level sands stretch far away."

### Subject matter
A traveller describes the ruined statue of a once-mighty king in an empty desert; only broken legs, a fallen face and a boastful inscription remain.
### Themes
the **transience of power**; the **vanity of human pride**; the **permanence of art** (the sculptor's skill outlives the king); time as destroyer.
### Devices
- **irony** — the inscription commands the mighty to despair at the king's works, but there are no works; they should despair for a different reason
- **framed narration** — speaker → traveller → inscription — which sets the king at a great distance
- **alliteration** — "boundless and bare", "lone and level", "cold command"
- **imagery** of ruin — "trunkless", "shattered", "decay", "Wreck"
- **synecdoche** — "the hand that mocked them, and the heart that fed"
- **enjambment** carrying the description forward; the short sentence "Nothing beside remains" falls with finality
### Form
A sonnet in iambic pentameter with an unusual, interwoven rhyme scheme — neither strictly Petrarchan nor Shakespearean.
### Tone
detached and ironic.
### Period features
the Romantic hatred of tyranny; fascination with the remote and ancient; the power of nature and time over man.`,
          examples: `**Example 1.** What is a conceit? *Answer:* An **elaborate, surprising extended comparison**, typical of metaphysical poetry.

**Example 2.** Give two features of Romantic poetry. *Answer:* **Love of nature** and the **primacy of emotion and imagination**.

**Example 3.** What is ironic about the inscription in "Ozymandias"? *Answer:* It boasts of mighty works, yet **nothing remains** but ruins and sand.`,
        },
        questions: [
          ["E", "The poem 'Ozymandias' was written by", "P. B. Shelley", "John Donne", "Alexander Pope", "T. S. Eliot", "He was a Romantic poet."],
          ["E", "Love of nature and emphasis on emotion are features of", "Romantic poetry", "Augustan poetry", "metaphysical poetry", "medieval drama", "Wordsworth is a leading example."],
          ["E", "'Paradise Lost', the great English epic, was written by", "John Milton", "William Blake", "Lord Byron", "Robert Browning", "It is in blank verse."],
          ["M", "An ingenious and far-fetched extended comparison typical of metaphysical poetry is", "a conceit", "a refrain", "a volta", "a dirge", "Donne's comparison of lovers to compasses is famous."],
          ["M", "The collection that is usually taken to mark the beginning of English Romanticism is", "Lyrical Ballads", "The Waste Land", "Paradise Lost", "Songs of Travel", "Wordsworth and Coleridge published it in 1798."],
          ["M", "The verse form most closely associated with Alexander Pope and the Augustan poets is the", "heroic couplet", "ballad stanza", "free verse paragraph", "haiku", "It consists of rhymed pairs of iambic pentameter."],
          ["M", "The main theme of 'Ozymandias' is the", "impermanence of human power", "joy of travelling", "beauty of the desert", "loyalty of servants", "Only ruins remain of the king's glory."],
          ["H", "The Latin phrase 'carpe diem', a common theme in seventeenth-century lyrics, means", "seize the day", "remember death", "know yourself", "love conquers all", "Life is short and should be enjoyed now."],
          ["H", "The dramatic monologue as a poetic form is most closely associated with", "Robert Browning", "John Keats", "Alexander Pope", "George Herbert", "A speaker reveals himself to a silent listener."],
          ["H", "In 'Ozymandias', the words 'Look on my Works, ye Mighty, and despair!' are ironic because", "nothing of the king's works survives", "the king was a humble man", "the traveller admired the statue", "the desert is full of cities", "The boast is contradicted by the empty sands."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Shakespeare and the Elizabethan theatre",
        subtopics: ["Shakespeare's life and works", "The Elizabethan playhouse", "Conventions of the Elizabethan stage", "The Elizabethan world view"],
        objectives: ["Outline Shakespeare's life and classify his plays", "Describe the Elizabethan playhouse", "Explain the stage conventions of Shakespeare's theatre", "Explain ideas of order that shape the plays"],
        lesson: {
          title: "The Playwright and His Stage",
          summary: "Outline Shakespeare's career and describe the theatre for which he wrote.",
          minutes: 40,
          notes: `## William Shakespeare (1564–1616)
- born at **Stratford-upon-Avon**, England, in **1564**; son of John Shakespeare, a glover, and Mary Arden
- educated at the local grammar school; married **Anne Hathaway** in 1582; three children
- by the early 1590s he was in **London** as actor and playwright
- a member and sharer of the **Lord Chamberlain's Men**, renamed the **King's Men** in 1603 under James I
- his company built the **Globe Theatre** in **1599**
- he retired to Stratford and died there in **1616**
- thirty-six of his plays were collected by fellow actors in the **First Folio (1623)**

He wrote under **Queen Elizabeth I** (reigned 1558–1603) — hence "Elizabethan" — and **King James I** ("Jacobean").

## His works
About **37 plays**, **154 sonnets** and narrative poems.
| Kind | Examples |
|---|---|
| **comedies** | *A Midsummer Night's Dream*, *Twelfth Night*, *As You Like It*, *The Merchant of Venice*, *Much Ado About Nothing* |
| **tragedies** | *Hamlet*, *Othello*, *King Lear*, *Macbeth*, *Romeo and Juliet*, *Julius Caesar*, *Antony and Cleopatra* |
| **histories** | *Richard II*, *Henry IV*, *Henry V*, *Richard III* |
| **romances** (late plays) | *The Tempest*, *The Winter's Tale* |

## The Elizabethan playhouse
- **public theatres** stood outside the city limits of London — the Theatre, the Rose, the **Globe**
- roughly **circular or polygonal**, built of timber, **open to the sky** in the centre
- a raised **platform (thrust) stage** projecting into the yard, with the audience on three sides
- the **groundlings** stood in the **yard (pit)** for a penny; wealthier spectators sat in the covered **galleries**
- behind the stage, the **tiring-house** (dressing area) with doors for entrances; above, a **balcony** used for upper scenes and musicians
- a roof over part of the stage, called the **heavens**; a **trapdoor** in the stage floor for ghosts and graves
- performances were in the **afternoon**, by daylight
- a **flag** flew to announce a play

## Stage conventions
- **little or no scenery** — the place and time were created by the **words**: "This is the forest of Arden"
- **no front curtain** — scenes flowed without breaks; a rhyming couplet often marked the end of a scene
- **women's parts were played by boys**, as women did not act on the public stage
- rich **costume**, but contemporary rather than historical
- **soliloquy** and **aside** — accepted means of revealing thought
- **disguise** — taken as impenetrable
- **music, song and dance**
- noisy, mixed audiences — hence the blend of high poetry with jokes and sword-fights

### Why this matters
Because there was no scenery or lighting, Shakespeare **paints the scene in language**. Descriptions of night, storm and place in the dialogue are doing the work of the set.

## The Elizabethan world view
- **order and degree** — the universe was thought of as a hierarchy (the "great chain of being"): God, angels, the king, nobles, commoners, animals, plants
- the **king** was God's deputy; to kill or depose him was a crime against nature
- **disorder in the state** is mirrored by disorder in nature — storms, omens, unnatural events
- belief in **fate, the stars, witches, ghosts and fairies**
- the four **humours** governing temperament
- the duty of children to parents and wives to husbands — a rule the comedies often test

## Sources
Shakespeare seldom invented his plots; he reshaped histories, older plays and Italian tales.

## Language
Early Modern English: *thou, thee, thy, hath, doth, art, wherefore* (= why), *anon* (= at once), *marry* (= indeed).

## Why Shakespeare endures
memorable characters; mastery of language; understanding of human nature; themes — love, power, jealousy, ambition — that remain alive.`,
          examples: `**Example 1.** Where and when was Shakespeare born? *Answer:* At **Stratford-upon-Avon** in **1564**.

**Example 2.** Who were the groundlings? *Answer:* The spectators who **stood in the yard** of the playhouse for a penny.

**Example 3.** Why does Shakespeare describe settings in the dialogue? *Answer:* Because the Elizabethan stage had **little or no scenery**.`,
        },
        questions: [
          ["E", "William Shakespeare was born in", "Stratford-upon-Avon", "London", "Oxford", "Canterbury", "He was born there in 1564."],
          ["E", "The theatre most closely associated with Shakespeare's company is the", "Globe", "Colosseum", "Royal Court", "Abbey", "It was built in 1599."],
          ["E", "In Shakespeare's theatre, the parts of women were played by", "boys", "actresses", "puppets", "the groundlings", "Women did not act on the public stage."],
          ["M", "Shakespeare is described as an Elizabethan playwright because he", "wrote during the reign of Queen Elizabeth I", "was a relative of Queen Elizabeth", "wrote only about queens", "lived in the Elizabeth Theatre", "She reigned from 1558 to 1603."],
          ["M", "Spectators who stood in the yard of the Elizabethan playhouse were called", "groundlings", "gallants", "patrons", "prompters", "They paid the lowest price."],
          ["M", "The first collected edition of Shakespeare's plays, published in 1623, is known as the", "First Folio", "Globe Edition", "Quarto of Sonnets", "King's Book", "His fellow actors compiled it."],
          ["M", "Which of the following is one of Shakespeare's tragedies?", "King Lear", "Twelfth Night", "As You Like It", "The Tempest", "It ends with the deaths of the king and his daughter."],
          ["H", "Shakespeare's acting company was renamed the King's Men in 1603 because", "James I became its patron", "it performed only history plays", "all its actors were knighted", "it moved to Scotland", "It had been the Lord Chamberlain's Men."],
          ["H", "Elizabethan playwrights conveyed the setting of a scene mainly through", "the words spoken by the characters", "painted scenery", "electric lighting", "a narrator's printed notes", "The stage was almost bare."],
          ["H", "The Elizabethan belief in 'degree' or the 'chain of being' implies that", "disorder in the state upsets the whole natural order", "all persons are equal", "kings may be freely removed", "nature is unaffected by human crimes", "The murder of a king is followed by unnatural events."],
        ],
      },
      {
        week: 2,
        title: "Shakespearean tragedy: Othello",
        subtopics: ["Features of Shakespearean tragedy", "Plot outline of Othello", "Characters", "Themes and dramatic techniques"],
        objectives: ["State the features of Shakespearean tragedy", "Outline the plot of Othello", "Describe the main characters", "Discuss the themes and techniques of the play"],
        lesson: {
          title: "A Tragedy of Jealousy",
          summary: "Study the features of Shakespearean tragedy through Othello.",
          minutes: 40,
          notes: `## Features of Shakespearean tragedy
- a **hero of high rank** and great qualities
- a **tragic flaw** that, working with circumstances and the malice of others, leads to ruin
- **conflict** — external (against enemies) and **internal** (within the hero's mind)
- the hero's **fall from prosperity to misery and death**
- the deaths of the innocent as well as the guilty
- chance and accident play a part
- a sense of **waste** — so much greatness destroyed
- moments of **comic relief**
- order is **restored** at the end
- written chiefly in **blank verse**, in **five acts**

## *Othello, the Moor of Venice* (about 1604)
### Setting
**Venice**, a rich and orderly city-state; then **Cyprus**, a military outpost threatened by the Turks — isolated, tense, away from law and restraint.

### Plot outline
- **Act 1 (Venice).** **Iago**, an ensign ("ancient"), hates his general, **Othello**, a Moor, for promoting **Cassio** as lieutenant over him. With the foolish **Roderigo**, he rouses the senator **Brabantio** with news that his daughter **Desdemona** has secretly married Othello. Before the Duke, Othello tells how he won her by the story of his life, and Desdemona confirms her love. Othello is sent to defend Cyprus.
- **Act 2 (Cyprus).** A storm destroys the Turkish fleet. Iago makes Cassio drunk; Cassio brawls and Othello dismisses him. Iago advises Cassio to beg Desdemona to plead for him.
- **Act 3.** Iago hints to Othello that Desdemona and Cassio are lovers. Desdemona drops a **handkerchief** — Othello's first gift; **Emilia**, Iago's wife, picks it up and gives it to Iago, who plants it in Cassio's lodging. Othello, convinced, vows revenge and makes Iago his lieutenant.
- **Act 4.** Iago stages a conversation so that Othello "sees" Cassio laugh about Desdemona; Othello strikes his wife in public and resolves to kill her.
- **Act 5.** Roderigo attacks Cassio and is killed by Iago. Othello **smothers Desdemona** in her bed. Emilia exposes the truth about the handkerchief; Iago stabs her. Othello, realising his error, wounds Iago and **kills himself**. Cassio is made governor; Iago is led away to torture.

### Characters
- **Othello** — noble, brave, eloquent, trusting; an outsider in Venice by race and origin. His flaw is a **credulous, jealous nature** joined to insecurity; once convinced, he acts with terrible absoluteness.
- **Iago** — the **villain**; outwardly "honest Iago", inwardly envious, cynical and cunning. He manipulates everyone by exploiting their weaknesses. His motives — lost promotion, suspicion about his wife, envy — never quite explain his malice.
- **Desdemona** — loving, innocent, courageous in choosing Othello; her generosity in pleading for Cassio is turned against her.
- **Cassio** — courteous and loyal, but weak with drink and vain of his "reputation".
- **Emilia** — worldly, sharp-tongued; her obedience to Iago does harm, but her courage at the end reveals the truth.
- **Roderigo** — a gullible suitor, Iago's dupe and purse.
- **Brabantio** — a proud father whose warning ("She has deceived her father, and may thee") lodges in Othello's mind.
- **Bianca** — Cassio's mistress, used unknowingly in the plot.

### Themes
- **jealousy** — "the green-eyed monster"; also Iago's and Roderigo's
- **appearance and reality** — "honest" Iago; a chaste wife believed false
- **deception and manipulation**
- **love and trust**
- **race and the outsider**
- **reputation and honour**
- **the position of women**
- **revenge**

### Dramatic techniques
- **dramatic irony** — the audience knows Iago's villainy from the start; every "honest Iago" is charged with it
- **soliloquy** — Iago shares his plots with the audience, making us uneasy witnesses
- **symbolism** — the **handkerchief** (love and fidelity, turned into "proof" of betrayal)
- **imagery** — animals and poison in Iago's speech, which gradually infects Othello's language; light and dark
- **contrast and foils** — Othello and Iago; Desdemona and Emilia; Venice and Cyprus
- **compressed time** — events rush on, giving no pause for reason
- **the handling of language** — Othello's stately verse breaks down into prose and fragments as his mind is poisoned, and recovers its music at the end

### The ending
Othello asks to be remembered as "one that loved not wisely but too well" — a man perplexed in the extreme. Pity for him, and fear at how easily trust is destroyed, produce the tragic effect.

### Typical questions
the character and role of Iago; how far Othello is responsible for his own fall; the significance of the handkerchief; the role of Emilia; the theme of jealousy.`,
          examples: `**Example 1.** What is the significance of the handkerchief? *Answer:* It is Othello's **first gift and a symbol of love**; Iago turns it into **false evidence** of Desdemona's infidelity.

**Example 2.** Why does Iago hate Othello? *Answer:* Chiefly because Othello **promoted Cassio over him**; he also voices suspicion and envy.

**Example 3.** Identify the dramatic irony in the phrase "honest Iago". *Answer:* The characters trust him, while **the audience knows he is a villain**.`,
        },
        questions: [
          ["E", "The villain in Shakespeare's 'Othello' is", "Iago", "Cassio", "Roderigo", "Brabantio", "He deceives almost every other character."],
          ["E", "Othello's wife in the play is", "Desdemona", "Emilia", "Bianca", "Portia", "She is the daughter of Brabantio."],
          ["E", "The main theme of 'Othello' is", "jealousy", "ambition for a crown", "the love of fairies", "a quarrel over land", "It is called the green-eyed monster."],
          ["M", "Iago's resentment against Othello begins because Othello", "promoted Cassio as lieutenant instead of him", "refused to marry Emilia", "sent him to Cyprus alone", "dismissed him from the army", "Iago remained an ensign."],
          ["M", "The object used by Iago as false proof of Desdemona's unfaithfulness is", "a handkerchief", "a ring", "a letter", "a dagger", "It was Othello's first gift to her."],
          ["M", "The action of 'Othello' moves from Venice to", "Cyprus", "Rome", "Athens", "Verona", "Othello is sent there to face the Turks."],
          ["M", "The character who finally exposes Iago's villainy is", "Emilia", "Bianca", "Roderigo", "the Duke", "She reveals how the handkerchief was obtained."],
          ["H", "The repeated description of Iago as 'honest' by other characters is an example of", "dramatic irony", "hyperbole", "comic relief", "pathetic fallacy", "The audience knows his true nature."],
          ["H", "At the end of the play Othello describes himself as one who", "loved not wisely but too well", "never loved at all", "was born to be king", "trusted no one", "He admits that his love was excessive and misguided."],
          ["H", "Iago's soliloquies are dramatically important because they", "reveal his plans to the audience and deepen the irony", "provide comic relief", "describe the scenery of Cyprus", "summarise the history of Venice", "The audience becomes a witness to his plotting."],
        ],
      },
      {
        week: 3,
        title: "Shakespearean comedy: A Midsummer Night's Dream",
        subtopics: ["Features of Shakespearean comedy", "Plot outline", "Characters", "Themes and dramatic techniques"],
        objectives: ["State the features of Shakespearean comedy", "Outline the plot of A Midsummer Night's Dream", "Describe the groups of characters", "Discuss the themes and techniques of the play"],
        lesson: {
          title: "The Course of True Love",
          summary: "Study the features of Shakespearean comedy through A Midsummer Night's Dream.",
          minutes: 40,
          notes: `## Features of Shakespearean comedy
- **love** as the central subject; young lovers face **obstacles** — a stern parent, a harsh law, rivals
- a movement from the ordered **court or city** to a freer "**green world**" (a forest) and back again
- **confusion** — mistaken identity, disguise, misdirected love
- **multiple plots** woven together
- **clowns and fools**; wit and wordplay
- **music, song and dance**
- a **happy ending** — usually several **marriages** — with harmony restored
- problems are real but never fatal

## *A Midsummer Night's Dream* (about 1595)
### Setting
**Athens** — law, reason, daylight; and the **wood** outside Athens — night, magic, freedom and confusion.

### The four groups
1. **the court** — **Theseus**, Duke of Athens, and **Hippolyta**, Queen of the Amazons, about to marry; **Egeus**, Hermia's father
2. **the lovers** — **Hermia**, **Lysander**, **Demetrius**, **Helena**
3. **the fairies** — **Oberon** (king), **Titania** (queen), **Puck** or Robin Goodfellow, and attendants
4. **the mechanicals** (craftsmen) — **Peter Quince** the carpenter, **Nick Bottom** the weaver, Flute, Snout, Snug and Starveling

### Plot outline
- **Act 1.** Egeus demands that Hermia marry **Demetrius**; she loves **Lysander**. Under Athenian law she must obey, become a nun, or die. Hermia and Lysander plan to flee through the wood. **Helena**, who loves Demetrius, tells him, and both follow. Meanwhile the craftsmen meet to rehearse a play, "Pyramus and Thisbe", for the Duke's wedding.
- **Act 2.** In the wood, Oberon and Titania quarrel over a changeling boy. Oberon sends Puck for a flower — **love-in-idleness** — whose juice, laid on sleeping eyelids, makes the sleeper **love the first creature seen on waking**. He anoints Titania. Pitying Helena, he orders Puck to anoint "the Athenian" — but Puck mistakes **Lysander** for Demetrius, and Lysander wakes loving Helena.
- **Act 3.** Puck gives Bottom an **ass's head**; Titania wakes and dotes on him. Trying to mend matters, Puck anoints Demetrius too — now both men pursue Helena, who thinks she is mocked, and Hermia is abandoned. The four quarrel fiercely. Puck leads them astray in a fog until they sleep, then cures Lysander.
- **Act 4.** Oberon, having obtained the boy, releases Titania and removes Bottom's ass's head. Theseus finds the lovers, now rightly paired — Demetrius remains in love with Helena — and overrules Egeus. Bottom wakes, amazed at his "most rare vision".
- **Act 5.** Three couples are married. The mechanicals perform their clumsy tragedy to much laughter. The fairies bless the house, and Puck asks the audience's pardon.

### Characters
- **Puck** — mischievous agent of confusion, delighted by human folly
- **Bottom** — conceited, good-natured, eager to play every part; comic yet strangely dignified, the only mortal to enter fairyland
- **Helena** — insecure, persistent; **Hermia** — spirited, small and fierce
- **Lysander and Demetrius** — deliberately alike; their interchangeability is part of the joke about love
- **Oberon** — powerful, jealous, finally benevolent; **Titania** — proud, tender
- **Theseus** — voice of reason and authority

### Themes
- **the difficulty and irrationality of love** — "The course of true love never did run smooth"; love looks "not with the eyes, but with the mind"
- **order and disorder** — Athens and the wood; the fairy quarrel upsets the seasons
- **dream and reality; illusion and imagination**
- **magic and transformation**
- **parental authority and the freedom of the young**
- **art and theatre** — the play-within-a-play gently mocks drama itself

### Dramatic techniques
- **dramatic irony** — the audience knows of the love-juice; the lovers do not
- **play-within-a-play** — "Pyramus and Thisbe", a tale of thwarted lovers like the main plot, turned to farce
- **parallel plots and contrast** — court, lovers, fairies and workmen mirror one another
- **variety of language**:
  - **blank verse** for the court
  - **rhymed couplets** for the lovers
  - short, song-like lines for the fairies
  - **prose** for the mechanicals
- **comic devices** — malapropism (Bottom's misused words), mistaken identity, bathos, slapstick
- **imagery** of the **moon**, flowers, eyes and night
- **the epilogue** — Puck suggests the audience has only been dreaming

### Comedy and tragedy side by side
The opening — a father threatening his daughter with death — could begin a tragedy, and "Pyramus and Thisbe" is the plot of *Romeo and Juliet*. The play shows how the same material becomes comedy when error is corrected in time.

### Typical questions
the role of Puck; the significance of the wood; Bottom as a comic character; the function of the play-within-a-play; the treatment of love.`,
          examples: `**Example 1.** What does the juice of love-in-idleness do? *Answer:* It makes a sleeper **fall in love with the first creature seen on waking**.

**Example 2.** Name the play performed by the craftsmen. *Answer:* **"Pyramus and Thisbe"**.

**Example 3.** How does the wood differ from Athens? *Answer:* **Athens** stands for **law and reason**; the **wood** for **magic, freedom and confusion**.`,
        },
        questions: [
          ["E", "The mischievous fairy who serves Oberon in 'A Midsummer Night's Dream' is", "Puck", "Bottom", "Lysander", "Theseus", "He is also called Robin Goodfellow."],
          ["E", "The king and queen of the fairies in the play are", "Oberon and Titania", "Theseus and Hippolyta", "Lysander and Hermia", "Pyramus and Thisbe", "They quarrel over a changeling boy."],
          ["E", "'A Midsummer Night's Dream' is classified as", "a comedy", "a tragedy", "a history play", "a morality play", "It ends with three marriages."],
          ["M", "The character who is given an ass's head by Puck is", "Bottom", "Quince", "Demetrius", "Egeus", "Titania falls in love with him."],
          ["M", "At the beginning of the play, Egeus wants his daughter Hermia to marry", "Demetrius", "Lysander", "Theseus", "Oberon", "She loves Lysander instead."],
          ["M", "The play that the craftsmen perform at the Duke's wedding is", "Pyramus and Thisbe", "Romeo and Juliet", "The Mousetrap", "Venus and Adonis", "It is an example of a play-within-a-play."],
          ["M", "The confusion among the lovers arises mainly because Puck", "anoints the eyes of the wrong Athenian", "steals Hermia's letter", "locks the gates of Athens", "disguises himself as Demetrius", "Lysander wakes and falls in love with Helena."],
          ["H", "In the play, the craftsmen speak in prose while the court speaks in blank verse. This difference serves to", "distinguish the social groups", "show that the craftsmen are fairies", "shorten the play", "confuse the audience", "Shakespeare varies language according to character and class."],
          ["H", "The wood outside Athens is dramatically significant because it represents", "a world of magic and disorder where the lovers' problems are worked out", "the strict law of Athens", "the palace of Theseus", "the land of the dead", "The characters return from it changed."],
          ["H", "The line 'The course of true love never did run smooth' expresses the theme of", "the difficulties that lovers face", "the wisdom of parents", "the power of the Duke", "the foolishness of actors", "It is spoken by Lysander."],
        ],
      },
      {
        week: 4,
        title: "Shakespeare's language",
        subtopics: ["Verse and prose in the plays", "Imagery and wordplay", "Reading Early Modern English", "Paraphrasing a speech"],
        objectives: ["Explain Shakespeare's use of blank verse, rhyme and prose", "Identify imagery, puns and other devices in his language", "Interpret common Early Modern English words and forms", "Paraphrase a short Shakespearean speech"],
        lesson: {
          title: "Understanding the Words",
          summary: "Learn to read, interpret and paraphrase Shakespeare's dramatic language.",
          minutes: 40,
          notes: `## Verse and prose
### Blank verse
Unrhymed iambic pentameter — Shakespeare's normal medium for **noble characters and serious matters**.
> But **soft**! What **light** through **yon**der **win**dow **breaks**? (*Romeo and Juliet*)

### Rhymed verse
- a **rhyming couplet** often **closes a scene** or sums up a thought
- used for lovers, for songs, spells and formal or artificial speech

### Prose
Used for
- **lower-class and comic characters**
- **letters** and proclamations
- **madness** or loss of control — a noble speaker who falls into prose has usually lost command of himself
- relaxed, witty conversation

A **change** from verse to prose (or back) is always significant.

## Imagery
Shakespeare thinks in pictures. Patterns of imagery run through each play and carry its themes:
- **light and darkness**
- **disease and poison** — moral corruption
- **animals** — to degrade; beasts in the mouths of villains
- **clothing** — borrowed robes that do not fit: false position
- **storms** — disorder in mind and state
- **gardens and weeds** — the state well or ill governed
- **blood**; **sleep**; **the stars**

## Wordplay
- **pun** — a play on two meanings: a wounded wit says he will be "a grave man" tomorrow
- **malapropism** — the comic misuse of a word for one that sounds similar (typical of clowns)
- **oxymoron** — "O brawling love, O loving hate"
- **double meaning (equivocation)** — words that tell the truth in a misleading way
- **antithesis** — "Fair is foul, and foul is fair"

## Rhetorical devices
- **apostrophe** — "O happy dagger!"
- **rhetorical question**
- **repetition** and **anaphora**
- **hyperbole** — common in the speech of lovers and boasters
- **personification** — "jocund day / Stands tiptoe on the misty mountain tops"
- **allusion** — to classical myth and the Bible

## Reading Early Modern English
### Pronouns
| Form | Meaning |
|---|---|
| thou | you (subject, singular, familiar) |
| thee | you (object) |
| thy / thine | your / yours |
| ye | you (plural) |

"**Thou**" is used to intimates, children and inferiors — and to insult; "**you**" is polite or formal. A switch between them shows a change in relationship.

### Verb endings
*thou art* (you are); *thou hast* (you have); *thou dost / didst*; *thou wilt*; *he hath* (has); *he doth* (does); *she loveth*.

### Common words
| Word | Meaning |
|---|---|
| anon | soon; at once |
| ere | before |
| hence / hither / thither | from here / to here / to there |
| wherefore | **why** |
| marry | indeed |
| prithee | I pray you; please |
| methinks | it seems to me |
| fie | for shame |
| forsooth | truly |
| soft | wait; hush |
| perchance | perhaps |
| nay / ay | no / yes |
| e'er / ne'er | ever / never |
| 'tis / 'twas | it is / it was |

### Word order
Shakespeare often **inverts** normal order for rhythm or emphasis: "Never was seen so black a day" = So black a day was never seen. Find the **subject and verb** first.

### Words that have changed meaning
*presently* = immediately; *still* = always; *brave* = fine, splendid; *fond* = foolish; *honest* = honourable or chaste; *silly* = innocent, helpless.

## Paraphrasing
1. read to the **punctuation**, not to the end of the line
2. find subject and verb; restore normal order
3. replace old words
4. unpack each image — what is compared with what?
5. write the sense in plain modern prose

### Worked example (*As You Like It*)
> All the world's a stage,
> And all the men and women merely players;
> They have their exits and their entrances,
> And one man in his time plays many parts.

*Paraphrase:* The world is like a theatre and people are only actors in it. They are born and they die, as actors come on and go off, and in the course of a lifetime each person passes through several different roles.
*Devices:* extended **metaphor** (life as a play); "exits and entrances" = deaths and births; "parts" = the stages of life.

## Commenting on a speech
Say **who** speaks, **to whom**, **when** and **why**; what it reveals of **character**; how it advances **plot** and **theme**; and which **features of language** stand out.`,
          examples: `**Example 1.** What does "wherefore" mean in "Wherefore art thou Romeo?" *Answer:* **"Why"** — Juliet asks why he must be a Montague, not where he is.

**Example 2.** When does Shakespeare usually give a character prose rather than verse? *Answer:* For **comic or low-born characters**, letters, and moments of **madness or lost control**.

**Example 3.** In "All the world's a stage", what are the "exits and entrances"? *Answer:* **Deaths and births**.`,
        },
        questions: [
          ["E", "In Shakespeare's English, the word 'thou' means", "you", "they", "there", "then", "It is the singular, familiar form."],
          ["E", "Shakespeare's noble characters usually speak in", "blank verse", "prose", "limericks", "free verse", "It is unrhymed iambic pentameter."],
          ["E", "In 'All the world's a stage', the world is compared to", "a theatre", "a prison", "a garden", "a ship", "People are called players."],
          ["M", "In Shakespeare's plays, the word 'wherefore' means", "why", "where", "when", "whoever", "It asks for a reason."],
          ["M", "A rhyming couplet in a Shakespearean play often serves to", "mark the end of a scene", "introduce a clown", "begin a soliloquy in prose", "replace the stage directions", "It gives a sense of closure."],
          ["M", "Comic and low-born characters in Shakespeare's plays generally speak in", "prose", "heroic couplets", "sonnets", "blank verse", "Verse is reserved mostly for the nobility."],
          ["M", "The Shakespearean expression 'he hath' means", "he has", "he hates", "he hears", "he had better", "The -th ending marks the third person singular."],
          ["H", "The comic misuse of a word in place of one that sounds similar is called", "malapropism", "metonymy", "litotes", "euphemism", "It is typical of Shakespeare's clowns."],
          ["H", "When a noble character in a Shakespearean play shifts from verse to prose, it often suggests", "a loss of self-control or dignity", "that the scene is ending", "that he is quoting the Bible", "a rise in social status", "The breakdown of verse mirrors a breakdown of mind."],
          ["H", "In Shakespeare's usage, the word 'presently' most often means", "immediately", "later", "as a gift", "in the audience", "Its meaning has shifted in modern English."],
        ],
      },
      {
        week: 5,
        title: "African drama",
        subtopics: ["Traditional sources of African drama", "Major playwrights and concerns", "Themes of modern African drama", "Dramatic techniques and total theatre"],
        objectives: ["Identify the traditional sources of African drama", "Name major African playwrights and their concerns", "Discuss the themes of modern African drama", "Describe the techniques of African drama, including total theatre"],
        lesson: {
          title: "Drama on African Stages",
          summary: "Survey the sources, themes and techniques of modern African drama.",
          minutes: 40,
          notes: `## Traditional sources
African drama did not begin with the written play. Its roots lie in
- **ritual** — acts of worship and sacrifice, with priest, chorus and spectators
- **festivals** — new yam, harvest, purification, coronation
- **masquerade** — masked figures representing ancestors and spirits
- **storytelling** — the narrator who acts the parts, with song and audience response
- **dance, music and drumming**
- **initiation and funeral rites**
- travelling troupes — the Yoruba **Alarinjo**; later the **folk opera** of **Hubert Ogunde** (often called the father of Nigerian theatre), **Duro Ladipo** and Kola Ogunmola

In these forms performance is **communal**: there is no rigid wall between actors and audience.

## The literary (written) drama
From the 1950s university-educated playwrights fused these traditions with the forms of Western drama.

### Playwrights
- **Wole Soyinka** (Nigeria) — Nobel Prize for Literature, **1986**, the first African laureate. Comedies of village and town life; satires on religious charlatans and politicians; tragedies drawn from Yoruba ritual and belief, in which an individual's duty to the community is tested.
- **J. P. Clark** (Nigeria) — tragedies of the Niger Delta shaped by fate, curse and family; also an Ijaw epic drama.
- **Ola Rotimi** (Nigeria) — historical tragedies of Yoruba and Benin rulers, and a famous **adaptation of Sophocles' *Oedipus the King*** to a Yoruba setting.
- **Zulu Sofola** (Nigeria) — the first published Nigerian woman playwright; tradition and its cost to women.
- **Femi Osofisan** (Nigeria) — radical plays that question myth and invite the audience to choose.
- **Ama Ata Aidoo** (Ghana) — the meeting of Africa and its diaspora in marriage; a wilful woman in conflict with her society.
- **Efua Sutherland** (Ghana) — plays built on **Ananse** storytelling.
- **Athol Fugard** (South Africa) — spare plays, often made with black actors, on life under apartheid.
- **Ngũgĩ wa Thiong'o** (Kenya) — plays on the anti-colonial struggle, later in Gikuyu for peasant audiences.
- others: Joe de Graft; Tewfik al-Hakim; Bode Sowande; Tess Onwueme; Ahmed Yerima.

## Themes
- **conflict between tradition and modernity** — old customs and new ways, in marriage, religion and education
- **the individual and the community** — duty, sacrifice, the ruler's responsibility
- **fate and free will** — prophecy, curse and choice
- **colonialism and its legacy** — misunderstanding between cultures
- **corruption and misrule** — satire on politicians, soldiers and false prophets
- **the position of women** — bride price, polygamy, childlessness, the daughter's voice
- **apartheid and oppression**
- **generational conflict**
- **history and identity** — recovering heroes of the past
- **religious hypocrisy**

## Techniques
### Total theatre
The **fusion of dialogue with music, song, dance, drumming, mime, masquerade and spectacle** into a single experience. It is the most distinctive feature of African drama.

### Other features
- **proverbs, riddles and praise names** — elders speak in proverbs; language marks status
- **a narrator or storyteller** who frames the action and speaks to the audience
- **audience participation** — songs taken up, questions put to the spectators
- **chorus** of townspeople, women or elders
- **ritual and sacrifice** enacted on stage
- **flashback** and episodic structure rather than strict acts
- **symbolism** — objects, colours and rituals carrying meaning
- **code-switching** — English mixed with pidgin and indigenous languages, each fitted to character
- **satire and humour**, even in serious plays
- **mime and dance** to show journeys, battles and the passage of time
- flexible staging — an open space rather than a picture-frame set

## African and classical tragedy
African tragedies share with Greek drama the chorus, the role of the gods, prophecy and a community whose health depends on the protagonist — which is why Greek plays adapt so readily to African settings.

## An illustration (original)
> ELDER: A man does not climb two palm trees with one rope.
> YOUNG MAN: Baba, the rope they gave me in the city is long enough.
> (*Drums. The women laugh and begin the mocking song.*)

In three lines: a **proverb** stating tradition; a witty reply showing the **generational conflict**; and a stage direction bringing in **drum, chorus and song** — total theatre in miniature.

## Studying a prescribed African play
Prepare notes on: background of the playwright; setting; plot, scene by scene; characters and their relationships; themes; language and style; dramatic techniques; the significance of the title; key incidents.

## Note
The plays set for examination change with each cycle. Whatever the text, the features above will guide your reading.`,
          examples: `**Example 1.** What is total theatre? *Answer:* The **blending of dialogue with music, song, dance, mime and spectacle** in one performance.

**Example 2.** Name two traditional sources of African drama. *Answer:* **Ritual** and **masquerade** (also festival and storytelling).

**Example 3.** Which Greek play was adapted to a Yoruba setting by Ola Rotimi? *Answer:* Sophocles' ***Oedipus the King***.`,
        },
        questions: [
          ["E", "The first African to win the Nobel Prize for Literature was", "Wole Soyinka", "Chinua Achebe", "Ngũgĩ wa Thiong'o", "Athol Fugard", "He received it in 1986."],
          ["E", "The combination of dialogue, music, song and dance in a single performance is known as", "total theatre", "closet drama", "monodrama", "radio drama", "It is characteristic of African drama."],
          ["E", "A traditional source of African drama is", "the festival and masquerade performance", "the Elizabethan playhouse", "the Italian sonnet", "the printed novel", "Drama grew out of communal ritual and celebration."],
          ["M", "The Nigerian dramatist often described as the father of Nigerian theatre for his travelling folk opera is", "Hubert Ogunde", "J. P. Clark", "Femi Osofisan", "Zulu Sofola", "His company toured widely from the 1940s."],
          ["M", "A frequent theme in modern African drama is", "the conflict between tradition and modernity", "life in the Arctic", "medieval knighthood", "space exploration", "Old customs meet new ways."],
          ["M", "The South African playwright noted for plays about life under apartheid is", "Athol Fugard", "Efua Sutherland", "Ola Rotimi", "Ama Ata Aidoo", "He often worked with black actors."],
          ["M", "In many African plays, the speech of elders is marked by the frequent use of", "proverbs", "rhymed couplets", "stage whispers", "Latin phrases", "They express traditional wisdom."],
          ["H", "The Ghanaian playwright whose plays draw on the Ananse storytelling tradition is", "Efua Sutherland", "Tess Onwueme", "Duro Ladipo", "Bode Sowande", "She adapted the spider tales for the stage."],
          ["H", "Greek tragedies adapt readily to African settings mainly because both traditions share", "a chorus, prophecy and a community bound to its ruler's fate", "the use of painted scenery", "a preference for prose", "the absence of gods", "The ruler's guilt affects the whole land in both."],
          ["H", "The mixing of English with pidgin and indigenous languages in an African play is called", "code-switching", "blank verse", "soliloquy", "anticlimax", "Each variety is matched to character and situation."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "The African novel",
        subtopics: ["Development of the African novel", "Major novelists", "Themes", "Style and language"],
        objectives: ["Outline the development of the African novel", "Name major African novelists and their concerns", "Discuss the themes of the African novel", "Describe the stylistic features of African fiction"],
        lesson: {
          title: "Africa in Prose Fiction",
          summary: "Trace the development, themes and style of the African novel.",
          minutes: 40,
          notes: `## Development
- **forerunners** — oral narrative; writing in African languages, such as **Thomas Mofolo**'s Sesotho novel on the Zulu king Chaka and **D. O. Fagunwa**'s Yoruba forest romances
- **1952** — **Amos Tutuola**'s *The Palm-Wine Drinkard*, a folktale quest in unconventional English
- **1953–54** — **Camara Laye**'s memoir-novel of a Guinean childhood; **Cyprian Ekwensi**'s novel of Lagos city life
- **1958** — **Chinua Achebe**'s *Things Fall Apart*, the most widely read African novel, which answered colonial pictures of Africa by showing an Igbo society with its own order, dignity and flaws
- the **1960s** — the African Writers Series brought many new voices into print
- later decades — novels of disillusionment, war, gender and migration

## Major novelists
| Writer | Country | Concerns |
|---|---|---|
| **Chinua Achebe** | Nigeria | the colonial encounter; the fall of tradition; corruption in the new state |
| **Ngũgĩ wa Thiong'o** | Kenya | land, the Mau Mau struggle, betrayal of independence |
| **Ayi Kwei Armah** | Ghana | corruption and moral decay after independence |
| **Flora Nwapa** | Nigeria | women's lives in Igbo society — the first Nigerian woman to publish a novel in English (1966) |
| **Buchi Emecheta** | Nigeria | motherhood, bride price, the struggles of women |
| **Mariama Bâ** | Senegal | polygamy and women's choices, in an epistolary novel |
| **Ferdinand Oyono**, **Mongo Beti** | Cameroon | satire on French colonial rule and the missions |
| **Sembène Ousmane** | Senegal | workers' struggle; the railway strike |
| **Alex La Guma**, **Peter Abrahams** | South Africa | apartheid |
| **Nadine Gordimer**, **J. M. Coetzee** | South Africa | conscience under apartheid — both Nobel laureates |
| **Bessie Head** | Botswana / South Africa | exile, race, village life |
| **Ben Okri** | Nigeria | the spirit-child; myth and politics |
| **Chimamanda Ngozi Adichie** | Nigeria | family tyranny, the civil war, migration |
| **Naguib Mahfouz** | Egypt | Cairo life — Nobel Prize 1988 |

## Themes
- **the colonial encounter** — the disruption of traditional society by mission, court and trade; "things fall apart"
- **cultural conflict** — tradition against Western education and religion
- **the dignity of the African past** — and honest criticism of it
- **nationalism and the freedom struggle**
- **post-independence disillusionment** — corrupt leaders, coups, poverty; filth and decay as symbols
- **the city** — its lure, loneliness and moral danger
- **the position of women** — marriage, motherhood, polygamy, education, the search for a voice
- **childhood and growing up** — the *Bildungsroman*
- **war and its aftermath**
- **apartheid and racial oppression**
- **religion and hypocrisy**
- **migration and identity**

## Style and language
- **English "domesticated"** — bent to carry African experience
- **proverbs** — woven into narration and dialogue
- **folktales, songs and myths** inserted in the story
- **transliteration** — idioms rendered literally from the mother tongue
- **untranslated indigenous words**, explained by context
- **pidgin** for urban and lower-class characters
- a narrative voice like that of a **village storyteller**
- **communal setting** — festivals, councils, markets
- **symbolism** drawn from the environment — the yam, the locusts, the python, the harmattan
- **irony**, especially at the expense of colonial officials and new elites
- simple, dignified prose (Achebe); experimental, fragmented forms (later writers)

## Realism and other modes
Most African novels are **realistic** — they present recognisable societies. Some use **satire**; some use the **marvellous** alongside the everyday, as in fiction of the spirit-child.

## The language question
Should African literature be written in European languages? Achebe argued for an English altered to suit its new surroundings; Ngũgĩ chose to write in Gikuyu.

## The oral tradition in the novel
Chapters may open like a tale; elders speak in proverbs; the narrator addresses the reader as a listener.

## An illustration (original)
> When a man's barn is full, the elders say, even his cough is called wisdom. Okoro's barn had been empty for three seasons, and so when he rose to speak at the meeting, the young men went on talking.

*Features:* a **proverb** opens the paragraph; "the elders say" gives the **communal voice**; wealth is measured by the **barn** — a cultural detail; the **irony** of status exposes the society's values. *Theme:* social standing and the humiliation of poverty.

## Studying a prescribed African novel
background and setting; chapter summaries; characters; themes; narrative technique; language and style; the significance of the title; key episodes.`,
          examples: `**Example 1.** Which 1958 novel is the most widely read African novel? *Answer:* **Chinua Achebe's *Things Fall Apart***.

**Example 2.** Give three themes of the African novel. *Answer:* **The colonial encounter, post-independence disillusionment and the position of women**.

**Example 3.** Name two stylistic features of African fiction. *Answer:* **Proverbs** and **untranslated indigenous words**.`,
        },
        questions: [
          ["E", "The author of 'Things Fall Apart' is", "Chinua Achebe", "Wole Soyinka", "Cyprian Ekwensi", "Amos Tutuola", "It was published in 1958."],
          ["E", "A common stylistic feature of the African novel is the use of", "proverbs", "sonnets", "heroic couplets", "stage directions", "They carry the wisdom of the community."],
          ["E", "A major theme of the early African novel is", "the disruption of traditional society by colonialism", "the exploration of outer space", "the life of medieval knights", "the Industrial Revolution in Europe", "Mission, court and trade upset the old order."],
          ["M", "The first Nigerian woman to publish a novel in English was", "Flora Nwapa", "Buchi Emecheta", "Zulu Sofola", "Chimamanda Adichie", "Her first novel appeared in 1966."],
          ["M", "'The Palm-Wine Drinkard' (1952), a folktale quest in unconventional English, was written by", "Amos Tutuola", "D. O. Fagunwa", "Camara Laye", "Ben Okri", "It drew on Yoruba oral tales."],
          ["M", "Novels of 'post-independence disillusionment' deal mainly with", "corruption and the failure of the new leaders", "the glory of ancient empires", "the adventures of colonial explorers", "life in European cities", "The promises of freedom are betrayed."],
          ["M", "The Kenyan novelist whose fiction centres on land and the struggle against colonial rule is", "Ngũgĩ wa Thiong'o", "Ayi Kwei Armah", "Sembène Ousmane", "Alex La Guma", "He later chose to write in Gikuyu."],
          ["H", "The literal rendering of mother-tongue idioms into English in African fiction is known as", "transliteration", "alliteration", "characterisation", "versification", "It gives the prose a local flavour."],
          ["H", "The Senegalese writer who explored polygamy and women's choices in an epistolary novel was", "Mariama Bâ", "Bessie Head", "Nadine Gordimer", "Ama Ata Aidoo", "The whole novel is a long letter."],
          ["H", "Achebe's position on the language of African literature was that African writers should", "use an English altered to carry African experience", "abandon English entirely", "write only in Latin", "avoid proverbs and local idiom", "He spoke of a new English suited to its African surroundings."],
        ],
      },
      {
        week: 2,
        title: "The non-African novel",
        subtopics: ["Rise of the English novel", "The nineteenth-century novel", "The modern novel", "Reading a non-African novel in context"],
        objectives: ["Outline the rise of the English novel", "Describe the concerns of the nineteenth-century novel", "Describe features of the modern novel", "Relate a non-African novel to its social context"],
        lesson: {
          title: "The Novel in Europe and America",
          summary: "Trace the development of the novel outside Africa and its main concerns.",
          minutes: 40,
          notes: `## Rise of the English novel (eighteenth century)
The novel arose with a growing **middle-class reading public**, cheaper printing and an interest in ordinary individual lives.
- **Daniel Defoe** — *Robinson Crusoe* (**1719**), often called the first English novel: a castaway's survival told as a plain, factual-seeming first-person record
- **Jonathan Swift** — *Gulliver's Travels* (1726), a satire in the form of a traveller's tale
- **Samuel Richardson** — *Pamela* (1740), an **epistolary** novel of a servant girl's virtue
- **Henry Fielding** — *Tom Jones* (1749), a comic, panoramic, **picaresque** novel with an intrusive narrator
- **Laurence Sterne** — playful experiment with form
- the **Gothic** novel — Horace Walpole; Ann Radcliffe; later **Mary Shelley**'s *Frankenstein* (1818)

## The nineteenth century
The great age of the novel.
- **Jane Austen** — *Pride and Prejudice* (1813): courtship, marriage, money and manners among the gentry; irony; a heroine who learns to see truly
- **Sir Walter Scott** — the **historical novel**
- **Charles Dickens** — *Oliver Twist*, *David Copperfield*, *Great Expectations*, *Hard Times*: the industrial city, poverty, child suffering, the law; vivid caricature, humour and pathos; many first published in **serial** parts
- **Charlotte Brontë** — *Jane Eyre* (1847): an orphan governess's growth to independence; **Emily Brontë** — *Wuthering Heights* (1847): passion and revenge on the moors
- **George Eliot** (Mary Ann Evans) — moral and psychological realism in provincial life
- **Thomas Hardy** — rural tragedy; characters crushed by fate and convention
- **Robert Louis Stevenson** — adventure; the divided self
- in America — **Nathaniel Hawthorne**; **Herman Melville** (*Moby-Dick*); **Mark Twain** (*Adventures of Huckleberry Finn*), who used the voice of a boy to expose slavery and hypocrisy
- in Europe — Balzac, Flaubert, Tolstoy, Dostoevsky

### Concerns of the Victorian novel
- **class and money** — inheritance, debt, social climbing
- **industrialisation** — factories, slums, the workhouse
- **the condition of women** — marriage as the only "career"; the governess
- **childhood and education** — the orphan; the *Bildungsroman*
- **morality and religion**
- **realism** — a full, believable picture of society
- the **omniscient narrator** who guides and comments

## The modern novel (twentieth century)
- **Joseph Conrad** — moral darkness at the edges of empire
- **James Joyce**, **Virginia Woolf** — **stream of consciousness**; the inner life in a single day
- **D. H. Lawrence** — class, industry and instinct
- **E. M. Forster** — personal relations across barriers of class and race
- **George Orwell** — *Animal Farm* (1945), *Nineteen Eighty-Four* (1949): political satire and **dystopia**
- **William Golding** — schoolboys on an island reveal the savagery beneath civilisation
- **Ernest Hemingway** — spare style; courage and defeat
- **F. Scott Fitzgerald** — the hollow glitter of wealth
- **John Steinbeck** — the dispossessed poor
- **Harper Lee** — racial injustice seen through a child's eyes
- **Richard Wright**, **Ralph Ellison**, **Toni Morrison** — the African-American experience
- **J. D. Salinger** — adolescent alienation

### Features
- **experiment** with time, viewpoint and form
- **psychological depth**; the unreliable narrator
- **alienation**, loss of faith, the effects of war
- **anti-heroes** rather than heroes
- open or ambiguous endings
- **symbolism** in place of plain statement

## Caribbean fiction
Writers such as **George Lamming**, **V. S. Naipaul** and **Samuel Selvon** treat slavery's legacy, colonial schooling, migration and identity — close in concern to African writing.

## Reading in context
A non-African novel assumes a world the reader must reconstruct:
- **period** — when is it set? What were the laws and customs on class, marriage, race and work?
- **place** — climate, landscape, town and country
- **social structure** — who has power; who may marry whom; who inherits
- **beliefs** — religion; ideas of honour and respectability
- **idiom** — dialect and period vocabulary

Then ask what is **universal**: ambition, love, injustice and growing up are the same in a Yorkshire village, an American small town and a Nigerian one.

## Comparing African and non-African fiction
| | African | Non-African (European tradition) |
|---|---|---|
| community | the group is central | the individual is central |
| oral elements | proverbs, tales, song | largely absent |
| typical conflict | tradition and change; colonial contact | class, money, private conscience |
| language | English reshaped; local words | native idiom and dialect |

## Studying a prescribed non-African novel
Make notes on: the author and period; setting; chapter summaries; characters; themes; narrative point of view; style and symbolism; the title.`,
          examples: `**Example 1.** Which work of 1719 is often called the first English novel? *Answer:* **Defoe's *Robinson Crusoe***.

**Example 2.** Give two concerns of the Victorian novel. *Answer:* **Class and money** and the **condition of the poor in industrial cities**.

**Example 3.** Name one feature of the modern novel. *Answer:* **Stream of consciousness** (or the anti-hero, or experiment with time).`,
        },
        questions: [
          ["E", "'Robinson Crusoe', often regarded as the first English novel, was written by", "Daniel Defoe", "Charles Dickens", "Jane Austen", "Thomas Hardy", "It was published in 1719."],
          ["E", "The author of 'Oliver Twist' and 'Great Expectations' is", "Charles Dickens", "George Orwell", "Mark Twain", "Henry Fielding", "He wrote about poverty in Victorian England."],
          ["E", "'Pride and Prejudice' was written by", "Jane Austen", "Charlotte Brontë", "George Eliot", "Mary Shelley", "It deals with courtship and marriage among the gentry."],
          ["M", "The rise of the English novel in the eighteenth century is closely linked to the", "growth of a middle-class reading public", "invention of the cinema", "decline of printing", "closing of the theatres by Shakespeare", "More people could read and afford books."],
          ["M", "The Victorian novel is noted for its concern with", "class, money and social conditions", "fairies and magic flowers", "Greek gods", "space travel", "It reflects an industrial, class-conscious society."],
          ["M", "Many of Dickens's novels were first published", "in serial parts", "as radio plays", "as epic poems", "in Latin", "Readers followed them instalment by instalment."],
          ["M", "The technique of presenting a character's flowing inner thoughts, used by James Joyce and Virginia Woolf, is", "stream of consciousness", "the heroic couplet", "the chorus", "dramatic irony", "It is a hallmark of the modern novel."],
          ["H", "The pen-name 'George Eliot' belonged to", "Mary Ann Evans", "Emily Brontë", "Ann Radcliffe", "Harper Lee", "She wrote novels of provincial life and moral realism."],
          ["H", "A feature that distinguishes much modern fiction from the Victorian novel is its", "experiment with time and point of view", "reliance on an all-knowing, moralising narrator", "use of rhymed verse", "happy endings in marriage", "Modern novelists often abandon straightforward narration."],
          ["H", "Compared with the European novel, the African novel tends to give greater importance to", "the community and its oral traditions", "the solitary individual's private conscience", "aristocratic drawing-room manners", "the Gothic castle", "The group, its customs and its proverbs are central."],
        ],
      },
      {
        week: 3,
        title: "Satire, allegory and fable",
        subtopics: ["Satire and its methods", "Allegory", "Fable and parable", "Reading a political allegory"],
        objectives: ["Define satire and identify its methods", "Explain allegory and how to read it", "Distinguish fable from parable", "Interpret a short political allegory"],
        lesson: {
          title: "Saying It Indirectly",
          summary: "Explain satire, allegory and fable and how writers use them to criticise society.",
          minutes: 40,
          notes: `## Satire
Writing that **exposes and ridicules human vice, folly or abuses in order to correct them**. Its weapon is laughter; its aim is reform.

### Targets
corruption; hypocrisy; greed; vanity; abuse of power; religious pretence; blind imitation of foreign ways; bureaucracy.

### Kinds
- **Horatian satire** — gentle, amused, tolerant; it smiles at folly
- **Juvenalian satire** — bitter, angry, scornful; it attacks vice

### Methods
- **irony** — saying the opposite of what is meant; pretending to praise what is condemned
- **exaggeration (hyperbole)** — enlarging a fault until it looks absurd
- **caricature** — a portrait that exaggerates a person's features or habits
- **understatement**
- **sarcasm** — cutting mockery
- **parody** — mocking imitation of a style or work
- **burlesque** — treating a serious subject frivolously, or a trivial one solemnly (the **mock-heroic**)
- **incongruity** — placing things together that do not fit
- **reversal** — the servant wiser than the master; the animals more humane than the men
- the **naive narrator** — an innocent who reports outrageous things as normal, leaving the reader to judge
- **invective** — direct abuse
- **wit** and **humour**

### Satire and comedy
Comedy laughs **with** human weakness; satire laughs **at** it, with a purpose.

### Examples
Swift's *Gulliver's Travels* — a traveller among tiny people, giants and rational horses, each land a distorted mirror of England; Pope's mock-epic on a stolen lock of hair; in Africa, plays and novels mocking fraudulent prophets, pompous officials and the newly rich.

## Allegory
A narrative in which **characters, places and events systematically stand for ideas or for real persons and events**, so that it can be read on two levels — the **surface story** and the **underlying meaning**.

### Kinds
- **moral / religious allegory** — John Bunyan's *The Pilgrim's Progress* (1678): Christian journeys from the City of Destruction, through the Slough of Despond and Vanity Fair, to the Celestial City — the soul's journey to salvation. Characters bear names like Faithful, Hopeful and Mr Worldly Wiseman (**personified abstractions**).
- **political / historical allegory** — George Orwell's *Animal Farm* (1945): farm animals drive out their human master and set up their own rule, only for the pigs to become tyrants. The story parallels the **Russian Revolution of 1917** and its betrayal under Stalin, and more widely shows how revolutions are corrupted by power.

### Reading an allegory
1. follow the **surface story**
2. ask what each main **character or group** represents
3. match **events** to their counterparts
4. state the **general idea** the whole conveys

### Illustration: the pattern of a farm allegory
| In the story | Stands for |
|---|---|
| the overthrown farmer | the old ruling order |
| the animals' rebellion | revolution |
| the clever pigs who take charge | the new ruling elite |
| the loyal, overworked horse | the exploited working class |
| the commandments quietly rewritten | the corruption of ideals |
| the dogs raised in secret | the secret police |
| the smooth-talking spokesman | propaganda |

Its most quoted satirical line — that all animals are equal, but some are more equal than others — is an **ironic paradox** exposing the hypocrisy of the new rulers.

## Fable
A **short tale, usually about animals that speak and act like humans, pointing a moral**. The Greek slave **Aesop** is the traditional author of the best known: the tortoise and the hare (slow and steady wins); the boy who cried wolf (liars are not believed). African tortoise and spider tales are fables too.
A **beast fable** enlarged to book length and given a political target becomes satire and allegory at once.

## Parable
A **short, realistic story about human beings illustrating a moral or spiritual truth** — as in the parables of the New Testament (the Good Samaritan, the Prodigal Son).

| | Fable | Parable | Allegory |
|---|---|---|---|
| characters | animals, things | human beings | any; often personified ideas |
| length | very short | short | often long |
| meaning | a stated moral | an implied spiritual or moral lesson | a sustained second level |

## Related terms
- **lampoon** — a harsh satire on an individual
- **irony of situation**
- **utopia** — an imagined ideal society; **dystopia** — an imagined nightmare society, often a satire on present trends
- **didactic** literature — written to teach

## Why writers work indirectly
- **safety** — under tyranny, criticism must be disguised
- **force** — laughter persuades where preaching fails
- **universality** — animals and invented lands free the story from one time and place
- **pleasure** — the reader enjoys decoding

## An illustration (original)
> The Honourable Member arrived three hours late to open the borehole, cut the ribbon, praised himself in two languages, and left. The tap gave a polite cough and nothing more.

*Methods:* irony ("Honourable"); personification and understatement ("a polite cough"); anticlimax. *Target:* politicians who seek credit for projects that do not work.`,
          examples: `**Example 1.** What is the aim of satire? *Answer:* To **ridicule vice and folly so as to correct them**.

**Example 2.** In *The Pilgrim's Progress*, what does Christian's journey represent? *Answer:* The **soul's journey to salvation**.

**Example 3.** Distinguish a fable from a parable. *Answer:* A **fable** uses **animals** and states a moral; a **parable** uses **human characters** in a realistic story.`,
        },
        questions: [
          ["E", "Writing that ridicules human vice and folly in order to correct them is", "satire", "elegy", "pastoral", "romance", "Its weapon is laughter."],
          ["E", "The traditional author of the best-known animal fables, such as the tortoise and the hare, is", "Aesop", "Homer", "Bunyan", "Swift", "He is said to have been a Greek slave."],
          ["E", "'Animal Farm' was written by", "George Orwell", "Jonathan Swift", "John Bunyan", "Daniel Defoe", "It was published in 1945."],
          ["M", "A portrait in words that exaggerates a person's features or habits for comic effect is", "a caricature", "an elegy", "a soliloquy", "an epitaph", "Satirists use it to make faults look absurd."],
          ["M", "'The Pilgrim's Progress' by John Bunyan is best described as", "a religious allegory", "a Gothic novel", "a picaresque comedy", "a dramatic monologue", "Christian's journey stands for the soul's journey to salvation."],
          ["M", "'Animal Farm' is an allegory of", "the Russian Revolution and its betrayal", "the American Civil War", "the French policy of assimilation", "the fall of Rome", "The pigs become the new tyrants."],
          ["M", "A mocking imitation of the style of a serious work is", "a parody", "a prologue", "a paradox", "a parable", "It copies the manner in order to ridicule."],
          ["H", "Bitter, angry satire that attacks vice with scorn is described as", "Juvenalian", "Horatian", "pastoral", "Petrarchan", "The gentler kind is called Horatian."],
          ["H", "A work that treats a trivial subject in the grand style of epic poetry is", "mock-heroic", "tragic", "epistolary", "elegiac", "The mismatch between style and subject produces the humour."],
          ["H", "Writers living under oppressive governments often choose allegory because it", "allows criticism to be disguised", "is easier to print", "must be written in verse", "contains no characters", "The real target is hidden behind the surface story."],
        ],
      },
      {
        week: 4,
        title: "Answering context questions",
        subtopics: ["What a context question asks", "Placing an extract", "Commenting on character and language", "A worked example"],
        objectives: ["Explain the demands of a context (extract-based) question", "Place an extract in its context", "Comment on character, theme and language in an extract", "Answer a set of context questions on a Shakespearean extract"],
        lesson: {
          title: "Working from an Extract",
          summary: "Learn a method for answering extract-based questions on drama.",
          minutes: 40,
          notes: `## The context question
An **extract** from a set play (most often the Shakespeare text) is printed, followed by short questions. These test whether you **know the play closely** and can **read the passage carefully**.

### What may be asked
- **who** is speaking, and **to whom**
- **where** and **when** the speech occurs
- what has **just happened** and what **follows**
- the **meaning** of a word, phrase or line
- what the passage shows of **character**
- a **theme** it illustrates
- **figures of speech** and their effect
- the **mood** of the scene
- its **dramatic significance**

## Placing an extract
State briefly:
1. **speaker and listener**
2. **place** and occasion
3. the **event immediately before**
4. the **event immediately after**
5. the **act** (and scene if you know it)

Be exact and brief — two or three sentences, not the whole plot.

## Commenting on character
Name the trait and **prove it from the passage**:
> "He is suspicious: he asks three times who gave her the letter."

## Commenting on language
Name the device, **quote** it, **explain** the effect:
> "'A sea of troubles' is a metaphor: his problems are as vast and overwhelming as the sea."

## Dramatic significance
Ask how the passage affects
- **plot** — does it start, turn or resolve something?
- **character** — what is revealed?
- **theme**
- **mood and tension** — does it raise suspense, bring relief, create irony?
- **audience** — what do we know that the characters do not?

## A worked example
From *Julius Caesar*, Act 3 Scene 2 (public domain).

> Friends, Romans, countrymen, lend me your ears;
> I come to bury Caesar, not to praise him.
> The evil that men do lives after them;
> The good is oft interred with their bones;
> So let it be with Caesar. The noble Brutus
> Hath told you Caesar was ambitious:
> If it were so, it was a grievous fault,
> And grievously hath Caesar answer'd it.
> Here, under leave of Brutus and the rest—
> For Brutus is an honourable man;
> So are they all, all honourable men—
> Come I to speak in Caesar's funeral.

**(a) Who is the speaker, and whom does he address?**
Mark Antony, addressing the crowd of Roman citizens in the Forum.

**(b) What has just happened?**
Caesar has been assassinated by the conspirators. Brutus has just spoken to the people, persuading them that Caesar was killed for Rome's good, and has allowed Antony to speak at the funeral.

**(c) What does "lend me your ears" mean, and what figure of speech is it?**
"Listen to me." It is **metonymy** (ears for attention) — often also called synecdoche.

**(d) What is the meaning of "The good is oft interred with their bones"?**
People's good deeds are often buried and forgotten when they die, while their faults are remembered.

**(e) Comment on the repeated phrase "honourable man".**
It is **verbal irony**. Antony appears to praise Brutus, as he has promised not to blame the conspirators, but the repetition, set beside evidence of Caesar's goodness, gradually makes "honourable" sound false until the crowd hears it as an accusation.

**(f) What does the speech reveal about the speaker?**
He is **shrewd and persuasive**: he claims not to praise Caesar while doing exactly that. He is **loyal** to his dead friend, and **cautious**, careful to seem respectful to those in power.

**(g) What is the dramatic significance of the speech?**
It is the **turning point** of the play: it turns the crowd against the conspirators and leads to riot and civil war. It also contrasts Antony's emotional appeal with Brutus's reasoned one.

**(h) Identify one other device.**
**Antithesis** — "to bury Caesar, not to praise him"; "The evil… lives after them; / The good is… interred".

## Do and do not
| Do | Do not |
|---|---|
| answer each part separately and briefly | write one long essay |
| quote a word or phrase as evidence | copy out the whole extract |
| explain the effect of a device | merely name it |
| keep to what is asked | retell the play |
| write in the present tense about the text | drift into the past tense of narrative |

## Preparing for context questions
- know the **order of events** in each act
- learn **who says what** in the key scenes
- note the **important speeches** and soliloquies
- for each scene, write one line on its **significance**

## Meaning questions
Give the meaning **in the context of the passage**, not the general dictionary meaning.`,
          examples: `**Example 1.** What five things should you state when placing an extract? *Answer:* The **speaker and listener, the place, what happened just before, what happens just after, and the act**.

**Example 2.** What is the effect of repeating "honourable" in Antony's speech? *Answer:* It becomes **ironic** — the praise turns into accusation.

**Example 3.** What does "dramatic significance" mean? *Answer:* The **importance of a passage to plot, character, theme and mood** in the play as a whole.`,
        },
        questions: [
          ["E", "A context question in a literature examination is based on", "an extract from a set text", "a newspaper report", "a candidate's own story", "a dictionary entry", "Short questions follow the passage."],
          ["E", "The speech beginning 'Friends, Romans, countrymen' is delivered by", "Mark Antony", "Brutus", "Julius Caesar", "Cassius", "He speaks at Caesar's funeral."],
          ["E", "When placing an extract, a candidate should first identify the", "speaker and the person addressed", "price of the book", "number of pages in the play", "name of the publisher", "Then the occasion and surrounding events."],
          ["M", "In Antony's speech, 'lend me your ears' means", "listen to me", "give me your money", "leave the Forum", "bury Caesar quickly", "The ears stand for attention."],
          ["M", "The repeated phrase 'Brutus is an honourable man' is an example of", "verbal irony", "onomatopoeia", "pathetic fallacy", "euphemism", "Antony means the opposite of what he says."],
          ["M", "'I come to bury Caesar, not to praise him' illustrates", "antithesis", "simile", "personification", "alliteration", "Two opposed ideas are balanced."],
          ["M", "To show a character's trait from an extract, a candidate should", "name the trait and support it with evidence from the passage", "retell the whole play", "list all the characters", "give the playwright's biography", "Every point needs proof."],
          ["H", "The 'dramatic significance' of a scene refers to", "its contribution to plot, character, theme and mood", "the number of actors on stage", "the length of the speeches", "the cost of staging it", "It asks why the scene matters in the play."],
          ["H", "Antony's funeral oration is the turning point of 'Julius Caesar' because it", "turns the citizens against the conspirators", "persuades Caesar to refuse the crown", "ends the civil war", "reconciles Brutus and Cassius", "Riot and war follow."],
          ["H", "When asked for the meaning of a word in an extract, a candidate should give", "its meaning in the context of the passage", "every meaning listed in the dictionary", "its origin in Latin", "a word that rhymes with it", "The same word may mean different things in different places."],
        ],
      },
      {
        week: 5,
        title: "Writing literary essays",
        subtopics: ["Understanding the question", "Planning", "Paragraphs that argue", "Types of literary essay"],
        objectives: ["Interpret the key words of an essay question", "Plan a literary essay", "Write paragraphs that make and support a point", "Approach character, theme and technique essays"],
        lesson: {
          title: "The Literary Essay",
          summary: "Learn how to plan and write essays on set texts.",
          minutes: 40,
          notes: `## Understanding the question
Underline the **command word** and the **subject**.
| Command | What to do |
|---|---|
| **discuss** | examine fully, with evidence, from more than one side |
| **examine / consider** | look closely and weigh |
| **comment on** | give an informed opinion with support |
| **compare / contrast** | show likenesses / differences |
| **account for** | give reasons |
| **describe** | give a detailed picture |
| **assess / how far / to what extent** | judge the degree; reach a verdict |
| **illustrate / show** | prove with examples |
| **justify** | give reasons in support |
| **analyse** | break down into parts and explain |

Answer the question **set**, not the one you prepared.

## Planning (five minutes well spent)
1. turn the question into a **statement of your view** — your **thesis**
2. list **four to six points** that support it
3. beside each, note an **incident, action or speech** as evidence
4. put the points in a **logical order** — by importance, or by the order of events
5. decide your **conclusion**

## Structure
### Introduction
Short. Name the text and author, **address the question directly** and state your line of argument. Do not tell the author's life story or summarise the plot.
### Body
One **point per paragraph**.
### Conclusion
Sum up your argument and give a final judgement. Add nothing new.

## The paragraph: Point – Evidence – Explanation
- **Point** — a clear topic sentence answering part of the question
- **Evidence** — a specific incident, action or brief quotation
- **Explanation** — how the evidence proves the point, and why it matters
- **Link** — back to the question

### Example (on a generic tyrant-father character)
> **(Point)** The father's authority rests on fear rather than love. **(Evidence)** When his son comes second in class, he does not praise the effort but asks coldly how many heads the boy who came first possesses. **(Explanation)** The sarcasm shows a man for whom nothing short of perfection is acceptable, and it explains why his children speak in whispers. **(Link)** His tyranny at home is thus presented as the private face of the public oppression the novel condemns.

## Using evidence
- **refer to incidents** precisely — who did what, when
- **quote briefly** — a phrase or a line; integrate it into your sentence
- quotation is evidence, not decoration: always comment
- if you cannot recall the words, **paraphrase closely**

## Types of essay
### Character
- role and importance; main traits, each with evidence; relationships; development; the writer's attitude; your judgement
### Theme
- state the theme as an idea; show **how it is developed** — through plot, characters, setting, symbols; arrange by aspect, not by chapter
### Technique / style
- name the technique; give instances; explain the **effect** of each; relate to theme
### Setting
- describe it; show how it affects mood, character and events; note any symbolic value
### Title
- literal meaning; wider or ironic meaning; how the events bear it out
### Relationship
- trace it stage by stage; what it reveals about each character and the themes
### Compare and contrast
- organise **point by point** (both subjects in each paragraph), not one subject after the other

## Style of writing
- write in the **present tense**: "Okonkwo fears failure", not "feared"
- use the **third person**; avoid "I think" in every sentence
- be **formal and precise**; avoid slang
- use **linking words** — however, moreover, similarly, in contrast, consequently
- spell the **names** of characters and the author correctly
- underline or put titles in quotation marks

## Common faults
| Fault | Remedy |
|---|---|
| narrating the story | make a point first, then use the story as proof |
| irrelevance | check each paragraph against the question |
| unsupported assertion | add evidence |
| listing devices | explain effects |
| no conclusion | leave three minutes to round off |
| one-sidedness in "how far" questions | consider the other side, then judge |

## Timing
Divide the time equally among the questions. A finished shorter answer earns more than an unfinished long one.

## Checking
Read through for errors of fact, names, spelling and tense.`,
          examples: `**Example 1.** What are the three parts of a good body paragraph? *Answer:* **Point, evidence and explanation** (with a link back to the question).

**Example 2.** How should a compare-and-contrast essay be organised? *Answer:* **Point by point**, treating both subjects under each point.

**Example 3.** Which tense should be used when writing about events in a text? *Answer:* The **present tense**.`,
        },
        questions: [
          ["E", "The first step in answering a literary essay question is to", "identify the key words of the question", "write the conclusion", "copy out a long quotation", "retell the story", "The command word and the subject must be understood."],
          ["E", "The opening paragraph of a literary essay should", "address the question directly", "give the author's full biography", "summarise the whole plot", "list every character", "It sets out the line of argument."],
          ["E", "Each paragraph in the body of a literary essay should deal with", "one main point", "all the themes at once", "a different text", "the candidate's life history", "The point is then supported and explained."],
          ["M", "In the 'Point – Evidence – Explanation' pattern, the evidence is usually", "an incident or brief quotation from the text", "the candidate's opinion alone", "a proverb unrelated to the text", "the title of another book", "It proves the point being made."],
          ["M", "A question that begins 'To what extent…' requires the candidate to", "judge the degree and reach a verdict", "narrate the plot", "list the characters", "define literary terms", "Both sides should be considered."],
          ["M", "When writing about events in a novel or play, a candidate should normally use the", "present tense", "past perfect tense", "future tense", "imperative mood", "The text is treated as always happening."],
          ["M", "The commonest fault in literary essays is", "narrating the story instead of answering the question", "using linking words", "quoting briefly", "writing a conclusion", "Summary is not analysis."],
          ["H", "A statement of the candidate's central argument in response to an essay question is the", "thesis", "epilogue", "paraphrase", "synopsis", "Every paragraph should support it."],
          ["H", "In a theme essay, the material is best arranged", "by aspects of the theme", "chapter by chapter", "in alphabetical order of characters", "according to the length of the incidents", "This avoids mere retelling."],
          ["H", "A good conclusion to a literary essay", "sums up the argument and gives a final judgement", "introduces new points and evidence", "repeats the introduction word for word", "apologises for the answer", "Nothing new should be added at this stage."],
        ],
      },
    ],
  },
];
