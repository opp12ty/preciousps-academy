import type { TermPlan } from "../types";

/** JSS3 English Language — original Precious PS content; Term 3 is structured BECE revision. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Concord: subject–verb agreement",
        subtopics: ["The basic rule of concord", "Compound subjects joined by and", "Either/or, neither/nor and proximity", "Indefinite pronouns, collective nouns and 'one of'"],
        objectives: ["State the basic rule of subject–verb agreement", "Apply concord rules to compound and alternative subjects", "Use the correct verb with indefinite pronouns and collective nouns", "Correct concord errors in sentences"],
        lesson: {
          title: "Making Subjects and Verbs Agree",
          summary: "Apply the key rules of concord that examiners test most often.",
          minutes: 45,
          notes: `## The basic rule
A **singular** subject takes a **singular** verb; a **plural** subject takes a **plural** verb.
*The boy **plays**.* / *The boys **play**.*
Ignore words that come between the subject and the verb: *The box **of pencils is** on the table.* (subject = box)

## Compound subjects
- **A and B** → plural: *Ada and Tolu **are** here.*
- But when both refer to **one** person or idea → singular: *Rice and stew **is** my favourite meal.* / *My friend and teacher **has** arrived.* (one person)
- *Each* / *every* before joined nouns → singular: *Every boy and girl **was** present.*

## Alternatives (proximity)
With **either … or**, **neither … nor**, **not only … but also**, the verb agrees with the **nearer** subject:
*Neither the teacher nor the **students were** late.* / *Either the students or the **teacher is** to blame.*

## Indefinite pronouns
*Everyone, everybody, someone, nobody, each, either, neither* → singular: *Everyone **has** a book.*

## Collective nouns
Singular when the group acts as **one unit**; plural when members act **individually**:
*The committee **has** made its decision.* / *The committee **are** arguing among themselves.*

## "One of" and "a number of"
- *One of the boys **is** absent.* (subject = one)
- *A number of students **are** absent.* (= many) / *The number of students **is** small.*

## As well as / along with / together with
These do not change the subject: *The principal, as well as the teachers, **was** present.*`,
          examples: `**Example 1.** *Neither Musa nor his brothers ___ at home.* *Answer:* **were** (nearer subject: brothers).

**Example 2.** *One of the girls ___ lost her bag.* *Answer:* **has** (subject: one).

**Example 3.** *The captain, together with his players, ___ arrived.* *Answer:* **has** (subject: captain).`,
        },
        questions: [
          ["E", "Choose the correct option: 'The box of pencils ___ on the table.'", "is", "are", "were", "have been", "The subject is 'box', which is singular."],
          ["E", "Choose the correct option: 'Ada and Tolu ___ here.'", "are", "is", "was", "has", "Two subjects joined by 'and' take a plural verb."],
          ["E", "Choose the correct option: 'Everyone ___ a book.'", "has", "have", "are having", "were having", "'Everyone' is singular."],
          ["M", "Choose the correct option: 'Neither Musa nor his brothers ___ at home.'", "were", "was", "is", "has been", "The verb agrees with the nearer subject, 'brothers'."],
          ["M", "Choose the correct option: 'One of the girls ___ lost her bag.'", "has", "have", "are", "were", "The subject is 'one', which is singular."],
          ["M", "Choose the correct option: 'The captain, together with his players, ___ arrived.'", "has", "have", "are", "were", "'Together with' does not change the singular subject."],
          ["M", "Choose the correct option: 'A number of students ___ absent today.'", "are", "is", "was", "has been", "'A number of' means 'many' and takes a plural verb."],
          ["H", "Choose the correct option: 'Rice and stew ___ my favourite meal.'", "is", "are", "were", "have been", "The two nouns form one dish, so the verb is singular."],
          ["H", "Choose the correct option: 'Every boy and girl ___ present at the assembly.'", "was", "were", "are", "have been", "'Every' before joined nouns takes a singular verb."],
          ["H", "Choose the correct option: 'Either the students or the teacher ___ to blame.'", "is", "are", "were", "have been", "The verb agrees with the nearer subject, 'teacher'."],
        ],
      },
      {
        week: 2,
        title: "Relative clauses and relative pronouns",
        subtopics: ["Relative pronouns: who, whom, whose, which, that", "Defining relative clauses", "Non-defining relative clauses", "Using whom and whose correctly"],
        objectives: ["Identify relative pronouns and the nouns they refer to", "Choose the correct relative pronoun for people, things and possession", "Distinguish defining from non-defining relative clauses", "Punctuate non-defining clauses with commas"],
        lesson: {
          title: "Who, Whom, Whose, Which and That",
          summary: "Join ideas smoothly with relative clauses and the right relative pronoun.",
          minutes: 40,
          notes: `## Relative pronouns
| Pronoun | Used for | Example |
|---|---|---|
| **who** | people (subject) | *The girl **who** won is my sister.* |
| **whom** | people (object) | *The man **whom** we met is a doctor.* |
| **whose** | possession | *The boy **whose** bag was stolen reported it.* |
| **which** | things and animals | *The book **which** I bought is new.* |
| **that** | people or things (defining clauses only) | *The car **that** hit the post was red.* |

## Who or whom?
Test by replacing with *he/him*: if *he* fits, use **who**; if *him* fits, use **whom**.
*The man ___ we met* → *we met **him*** → **whom**.
After a preposition always use **whom**: *the person **to whom** I spoke*.

## Defining relative clauses
They identify **which one** we mean; no commas: *Students **who work hard** usually pass.* (only those students)

## Non-defining relative clauses
They add **extra** information about something already identified; **commas** are used, and **that** is not allowed:
*My father, **who is a doctor**, works in Ibadan.*
✗ *My father, that is a doctor, …*

## Relative clauses are adjectival
They describe a noun, so they are also called **adjectival clauses**.`,
          examples: `**Example 1.** *The woman ___ car broke down called a mechanic.* *Answer:* **whose**.

**Example 2.** *The candidate to ___ the prize was given is my classmate.* *Answer:* **whom** (after a preposition).

**Example 3.** Punctuate: *Lagos which is very busy is in the south-west.* *Answer:* Lagos**,** which is very busy**,** is in the south-west.`,
        },
        questions: [
          ["E", "Choose the correct option: 'The girl ___ won the race is my sister.'", "who", "which", "whose", "whom", "'Who' refers to a person acting as subject."],
          ["E", "Choose the correct option: 'The book ___ I bought is interesting.'", "which", "who", "whom", "whose", "'Which' is used for things."],
          ["E", "Choose the correct option: 'The boy ___ bag was stolen reported to the principal.'", "whose", "who", "whom", "which", "'Whose' shows possession."],
          ["M", "Choose the correct option: 'The man ___ we met yesterday is a doctor.'", "whom", "whose", "which", "what", "We met him, so the object form 'whom' is correct."],
          ["M", "Choose the correct option: 'The candidate to ___ the prize was given is my classmate.'", "whom", "who", "which", "whose", "After a preposition, use 'whom' for people."],
          ["M", "Which sentence is correctly punctuated?", "My father, who is a doctor, works in Ibadan.", "My father who is a doctor, works in Ibadan.", "My father, who is a doctor works in Ibadan.", "My, father who is a doctor works in Ibadan.", "Non-defining clauses are enclosed by commas."],
          ["M", "A relative clause is also called", "an adjectival clause", "an adverbial clause of time", "a main clause", "a noun phrase", "It describes a noun, like an adjective."],
          ["H", "Which sentence is NOT correct?", "My mother, that is a nurse, works at night.", "My mother, who is a nurse, works at night.", "The nurse who treated me was kind.", "The pills that she gave me worked.", "'That' cannot introduce a non-defining clause."],
          ["H", "In 'Students who work hard usually pass', the relative clause is", "defining, because it tells us which students", "non-defining, because it adds extra information", "a noun clause", "an adverbial clause of reason", "It identifies the students meant, so it has no commas."],
          ["H", "Choose the correct option: 'This is the house in ___ I was born.'", "which", "that", "who", "whose", "After a preposition, use 'which' for things."],
        ],
      },
      {
        week: 3,
        title: "Modal auxiliary verbs",
        subtopics: ["Ability and possibility: can, could, may, might", "Obligation and necessity: must, have to, need", "Advice: should, ought to", "Requests, permission and offers"],
        objectives: ["State the meanings of the common modal verbs", "Use modals correctly with the base form of the verb", "Distinguish must, have to and needn't", "Choose modals to express politeness and degrees of certainty"],
        lesson: {
          title: "Modal Verbs",
          summary: "Express ability, permission, obligation, advice and possibility with modal verbs.",
          minutes: 40,
          notes: `## Form
A modal verb is followed by the **base form** of a verb, with no *to* (except *ought to*) and no *-s*:
✓ *She **can swim**.* ✗ *She can swims.* ✗ *She cans swim.*

## Meanings
| Meaning | Modals | Example |
|---|---|---|
| ability | can, could (past) | *I **can** speak French. She **could** read at four.* |
| permission | can, may (more formal) | ***May** I come in?* |
| polite request | could, would | ***Could** you help me?* |
| possibility | may, might, could | *It **might** rain later.* |
| strong obligation | must, have to | *Students **must** wear uniform.* |
| no obligation | needn't, don't have to | *You **needn't** come; we have enough help.* |
| prohibition | mustn't | *You **mustn't** cheat in examinations.* |
| advice | should, ought to | *You **should** see a doctor.* |
| deduction (certain) | must, can't | *He **must** be tired after the long trip.* |

## Must not versus need not
- **mustn't** = it is forbidden.
- **needn't** = it is not necessary.

## Past forms
*must* → *had to*: *Yesterday I **had to** walk home.*
Advice about the past: *You **should have** told me.*`,
          examples: `**Example 1.** *You ___ cheat in the examination.* (forbidden) *Answer:* **mustn't**.

**Example 2.** *You ___ bring food; lunch will be provided.* (not necessary) *Answer:* **needn't**.

**Example 3.** *He has been working all day. He ___ be tired.* (certain deduction) *Answer:* **must**.`,
        },
        questions: [
          ["E", "Which sentence is correct?", "She can swim very well.", "She can swims very well.", "She cans swim very well.", "She can to swim very well.", "A modal is followed by the base form of the verb."],
          ["E", "Choose the correct option: '___ I come in, sir?' (asking permission politely)", "May", "Must", "Should", "Need", "'May' is used for polite permission."],
          ["E", "Choose the correct option: 'You look ill. You ___ see a doctor.'", "should", "mustn't", "needn't", "can't", "'Should' gives advice."],
          ["M", "Choose the correct option: 'You ___ cheat in the examination; it is forbidden.'", "mustn't", "needn't", "don't have to", "might not", "'Mustn't' expresses prohibition."],
          ["M", "Choose the correct option: 'You ___ bring food; lunch will be provided.'", "needn't", "mustn't", "can't", "shouldn't have", "'Needn't' means it is not necessary."],
          ["M", "Choose the correct option: 'Look at those dark clouds. It ___ rain later.'", "might", "must not", "needn't", "ought not", "'Might' expresses possibility."],
          ["M", "What is the past form of 'must' for obligation?", "had to", "musted", "must have", "should", "Yesterday I had to walk home."],
          ["H", "Choose the correct option: 'He has worked all day without rest. He ___ be tired.'", "must", "can't", "needn't", "shouldn't", "'Must' expresses a confident deduction."],
          ["H", "Choose the correct option: 'You ___ told me earlier; now it is too late.'", "should have", "should", "must", "can have", "'Should have' + past participle criticises a past action."],
          ["H", "Which sentence expresses ability in the past?", "She could read when she was four.", "She may read tomorrow.", "She must read now.", "She should read more.", "'Could' is the past of 'can' for ability."],
        ],
      },
      {
        week: 4,
        title: "Speech work: stress in three-syllable words",
        subtopics: ["Stress on the first syllable", "Stress on the second syllable", "Stress on the third syllable", "Suffixes that affect stress"],
        objectives: ["Identify the stressed syllable in three-syllable words", "Group words according to their stress patterns", "Use suffix patterns to predict stress", "Pronounce common three-syllable words correctly"],
        lesson: {
          title: "Stress in Longer Words",
          summary: "Place stress correctly in three-syllable words using patterns and practice.",
          minutes: 35,
          notes: `## Patterns
Three-syllable words can be stressed on the **first**, **second** or **third** syllable.
| First syllable | Second syllable | Third syllable |
|---|---|---|
| **BEAU**-ti-ful | to-**MA**-to | en-gi-**NEER** |
| **CA**-pi-tal | ba-**NA**-na | re-com-**MEND** |
| **FA**-mi-ly | com-**PU**-ter | ci-ga-**RETTE** |
| **PHO**-to-graph | de-**VE**-lop | ma-ga-**ZINE** |
| **EX**-cel-lent | re-**MEM**-ber | vo-lun-**TEER** |
| **CHA**-rac-ter | im-**POR**-tant | un-der-**STAND** |
| **DAN**-ger-ous | e-**NOR**-mous | re-fe-**REE** |

## Helpful suffix rules
- Words ending in **-tion, -sion, -ic, -ical** are stressed on the syllable **just before** the suffix: *in-for-MA-tion, e-LEC-tric, e-co-NOM-ic*.
- Words ending in **-eer, -ee, -ese, -ette** are stressed on the **suffix itself**: *en-gi-NEER, re-fe-REE, Ja-pa-NESE*.
- Words ending in **-y, -ous, -ful** (three syllables) are often stressed on the first syllable: *FA-mi-ly, DAN-ger-ous*.

## Common errors
*CHA-rac-ter* (not *cha-RAC-ter*), *ca-THE-dral*, *pho-TO-gra-pher* (four syllables — the stress moves!)`,
          examples: `**Example 1.** Stress *engineer*. *Answer:* en-gi-**NEER** (third syllable; -eer takes stress).

**Example 2.** Stress *banana*. *Answer:* ba-**NA**-na (second syllable).

**Example 3.** Stress *character*. *Answer:* **CHA**-rac-ter (first syllable).`,
        },
        questions: [
          ["E", "Which syllable is stressed in 'beautiful'?", "the first (BEAU-ti-ful)", "the second (beau-TI-ful)", "the third (beau-ti-FUL)", "none", "'Beautiful' is stressed on the first syllable."],
          ["E", "Which syllable is stressed in 'banana'?", "the second (ba-NA-na)", "the first (BA-na-na)", "the third (ba-na-NA)", "none", "'Banana' is stressed on the middle syllable."],
          ["E", "Which syllable is stressed in 'engineer'?", "the third (en-gi-NEER)", "the first (EN-gi-neer)", "the second (en-GI-neer)", "none", "The suffix -eer is stressed."],
          ["M", "Which word is stressed on the FIRST syllable?", "family", "tomato", "computer", "volunteer", "It is pronounced FA-mi-ly."],
          ["M", "Which word is stressed on the SECOND syllable?", "remember", "capital", "excellent", "magazine", "It is pronounced re-MEM-ber."],
          ["M", "Which word is stressed on the THIRD syllable?", "recommend", "character", "photograph", "important", "It is pronounced re-com-MEND."],
          ["M", "Which syllable is stressed in 'character'?", "the first (CHA-rac-ter)", "the second (cha-RAC-ter)", "the third (cha-rac-TER)", "none", "A common error is to stress the second syllable."],
          ["H", "Which syllable is stressed in 'electric'?", "the second (e-LEC-tric)", "the first (E-lec-tric)", "the third (e-lec-TRIC)", "none", "Words ending in -ic are stressed just before the suffix."],
          ["H", "Which word has the same stress pattern as 'computer'?", "important", "family", "engineer", "photograph", "Both are stressed on the second syllable."],
          ["H", "Which word has the same stress pattern as 'referee'?", "Japanese", "enormous", "capital", "develop", "Both are stressed on the final suffix."],
        ],
      },
      {
        week: 5,
        title: "Vocabulary development: word formation",
        subtopics: ["Prefixes that change meaning", "Suffixes that change word class", "Forming nouns, adjectives and adverbs", "Compound words"],
        objectives: ["Use common prefixes to form new words", "Use suffixes to change words from one class to another", "Choose the correct word form to fit a sentence", "Form and use compound words"],
        lesson: {
          title: "Building Words",
          summary: "Expand vocabulary by forming new words with prefixes, suffixes and compounds.",
          minutes: 40,
          notes: `## Prefixes (change the meaning)
| Prefix | Meaning | Examples |
|---|---|---|
| un-, in-, im-, il-, ir-, dis- | not / opposite | unhappy, incorrect, impossible, illegal, irregular, dishonest |
| re- | again | rewrite, rebuild |
| mis- | wrongly | misspell, misunderstand |
| pre- | before | prepay, preview |
| over- | too much | overcook, overload |
| inter- | between | international |

Spelling tips: **im-** before b, m, p (*impossible, immature*); **il-** before l (*illegal*); **ir-** before r (*irregular*).

## Suffixes (change the word class)
| Suffix | Forms | Examples |
|---|---|---|
| -ness, -ment, -tion, -ity | nouns | kindness, payment, education, ability |
| -ful, -less, -ous, -able, -ive | adjectives | careful, careless, dangerous, readable, active |
| -ly | adverbs | carefully, quickly |
| -ify, -ise/-ize, -en | verbs | simplify, modernise, widen |

## Choosing the right form
Look at the **position** in the sentence:
- after *a/the* or a possessive → noun: *his **kindness***
- before a noun or after *is/seems* → adjective: *a **careful** driver*
- describing a verb → adverb: *she drives **carefully***

## Compound words
Two words joined: *classroom, blackboard, headmaster, sunlight, mother-in-law, well-known*.`,
          examples: `**Example 1.** *The ___ (decide) was announced at noon.* *Answer:* **decision** (noun after *the*).

**Example 2.** Opposite of *legal* with a prefix: *Answer:* **illegal**.

**Example 3.** *She sang ___ (beautiful).* *Answer:* **beautifully** (adverb describing *sang*).`,
        },
        questions: [
          ["E", "Which prefix gives the opposite of 'possible'?", "im-", "un-", "dis-", "ir-", "impossible — 'im-' is used before p."],
          ["E", "Which suffix turns 'kind' into a noun?", "-ness", "-ly", "-ful", "-ify", "kind → kindness."],
          ["E", "The prefix 're-' in 'rewrite' means", "again", "not", "before", "wrongly", "To rewrite is to write again."],
          ["M", "Choose the correct option: 'The ___ was announced at noon.'", "decision", "decide", "decisive", "decisively", "A noun is needed after 'the'."],
          ["M", "Choose the correct option: 'She sang ___ at the concert.'", "beautifully", "beautiful", "beauty", "beautify", "An adverb is needed to describe 'sang'."],
          ["M", "What is the opposite of 'legal'?", "illegal", "unlegal", "inlegal", "dislegal", "'Il-' is used before words beginning with l."],
          ["M", "Which prefix means 'wrongly', as in 'misspell'?", "mis-", "pre-", "re-", "inter-", "To misspell is to spell wrongly."],
          ["H", "Choose the correct option: 'The road is too narrow; the government plans to ___ it.'", "widen", "wide", "width", "widely", "The suffix -en forms the verb 'widen'."],
          ["H", "Choose the correct option: 'Swimming in that river is ___.'", "dangerous", "danger", "dangerously", "endanger", "An adjective is needed after 'is'."],
          ["H", "Which of these is a compound word?", "headmaster", "happiness", "rewrite", "quickly", "It combines 'head' and 'master'."],
        ],
      },
      {
        week: 6,
        title: "Writing a speech",
        subtopics: ["Features of a speech", "Addressing the audience", "Organising the body", "Closing a speech"],
        objectives: ["State the features of a written speech", "Open a speech with suitable vocatives", "Organise points persuasively in paragraphs", "Close a speech appropriately"],
        lesson: {
          title: "Writing a Speech for an Occasion",
          summary: "Write speeches that address the audience correctly and present points persuasively.",
          minutes: 45,
          notes: `## What is a speech?
A speech is written to be **delivered aloud** to an audience, e.g. a speech as Senior Prefect at a send-forth, or a talk to fellow students about drug abuse.

## Opening: vocatives (forms of address)
Address the audience in **order of importance**:
*The Principal, Vice-Principals, Members of Staff, Special Guests, Parents, Fellow Students, Ladies and Gentlemen.*
Then greet and introduce yourself briefly if necessary:
*I am delighted to stand before you today to speak on…*

## Title
Give a clear title: *THE DANGERS OF EXAMINATION MALPRACTICE*.

## Body
- One main point per paragraph.
- Speak **directly** to the audience: *you, we, let us, my dear friends*.
- Use persuasive devices: rhetorical questions (*Should we fold our arms?*), repetition, examples.
- Keep a respectful, confident tone suited to the audience.

## Conclusion
Summarise, appeal or give a call to action, and **thank the audience**:
*Thank you for listening.*

## Speech or letter?
A speech has **no addresses** and **no subscription** (*Yours faithfully*). It begins with vocatives and ends with thanks.`,
          examples: `**Opening:**
*The Principal, Members of Staff, Fellow Students, Ladies and Gentlemen,*
*THE DANGERS OF EXAMINATION MALPRACTICE*
*I am grateful for the opportunity to speak to you today about a problem that threatens our future.*

**Body sentence:** *Should we trade our honour for a few marks? Certainly not!*

**Closing:** *Let us resolve to pass with honour. Thank you for listening.*`,
        },
        questions: [
          ["E", "A speech is written to be", "delivered aloud to an audience", "posted to a friend", "read silently only", "kept as a diary", "Speeches are spoken to listeners."],
          ["E", "Which ending is suitable for a speech?", "Thank you for listening.", "Yours faithfully,", "Yours sincerely,", "Your loving son,", "Speeches end by thanking the audience."],
          ["E", "The forms of address at the start of a speech are called", "vocatives", "subscriptions", "salutations in a letter", "headings", "Vocatives address the audience."],
          ["M", "In what order should the audience be addressed?", "from the most important to the least important", "alphabetically", "from the youngest to the oldest", "in any order", "Protocol requires order of importance."],
          ["M", "Which feature is NOT part of a speech?", "the writer's and receiver's addresses", "vocatives", "a title", "thanking the audience", "Addresses belong to letters."],
          ["M", "Which sentence is a rhetorical question?", "Should we fold our arms while our school suffers?", "What is your name, please?", "Where did you keep the key?", "Who is the captain?", "It is asked for effect, not for an answer."],
          ["M", "Which pronouns help a speaker connect with the audience?", "we and you", "it and its", "they only", "one and oneself", "Direct address involves the audience."],
          ["H", "Which is the best opening for a speech at a school send-forth ceremony?", "The Principal, Members of Staff, Parents, Fellow Students, Ladies and Gentlemen,", "Dear Sir,", "Hi guys,", "To whom it may concern,", "It uses vocatives in order of importance."],
          ["H", "What is a call to action in a speech's conclusion?", "an appeal to the audience to do something", "a list of references", "the speaker's address", "a new unrelated topic", "It urges listeners to act."],
          ["H", "Which tone is most suitable for a speech to fellow students on drug abuse?", "serious, respectful and persuasive", "rude and mocking", "careless and slangy", "boastful and aggressive", "The topic and audience call for a serious, persuasive tone."],
        ],
      },
      {
        week: 7,
        title: "More figures of speech",
        subtopics: ["Irony and sarcasm", "Euphemism", "Oxymoron and paradox", "Apostrophe, climax and anticlimax"],
        objectives: ["Define irony, euphemism, oxymoron, paradox and apostrophe", "Identify these figures of speech in sentences", "Distinguish oxymoron from paradox", "Explain the effect of each figure in context"],
        lesson: {
          title: "Advanced Figures of Speech",
          summary: "Recognise subtler figures of speech used in literature and everyday speech.",
          minutes: 40,
          notes: `| Figure | Definition | Example |
|---|---|---|
| **Irony** | saying the opposite of what is meant, or a result opposite to what is expected | *(in heavy rain) What lovely weather!* / *The fire station burnt down.* |
| **Sarcasm** | bitter irony meant to mock | *Oh, brilliant — you broke it again.* |
| **Euphemism** | a mild word used in place of an unpleasant one | *He passed away* (died); *senior citizens* (old people) |
| **Oxymoron** | two contradictory **words** placed together | *bitter-sweet, deafening silence, open secret* |
| **Paradox** | a **statement** that seems contradictory but contains a truth | *The more you learn, the more you realise you don't know.* |
| **Apostrophe** | addressing an absent person, a dead person or a thing | *O Death, where is your sting?* |
| **Climax** | arranging ideas in order of rising importance | *He came, he saw, he conquered.* |
| **Anticlimax** | a sudden drop from important to trivial | *She lost her house, her car and her pencil.* |

## Oxymoron or paradox?
An **oxymoron** is a short **phrase** (usually two words); a **paradox** is a whole **statement** or idea.

## Why writers use them
Irony creates humour or criticism; euphemism shows politeness; oxymoron and paradox make readers think; apostrophe expresses strong emotion.`,
          examples: `**Example 1.** *There was a deafening silence after the announcement.* *Answer:* **oxymoron** (deafening + silence).

**Example 2.** *Our grandfather passed on last year.* *Answer:* **euphemism** for *died*.

**Example 3.** *O moon, why do you hide your face tonight?* *Answer:* **apostrophe** (addressing the moon).`,
        },
        questions: [
          ["E", "'He passed away last year' is an example of", "euphemism", "oxymoron", "hyperbole", "irony", "'Passed away' is a gentle way of saying 'died'."],
          ["E", "'There was a deafening silence' contains an example of", "oxymoron", "euphemism", "apostrophe", "simile", "'Deafening' and 'silence' contradict each other."],
          ["E", "A mild word used in place of an unpleasant one is called", "euphemism", "irony", "climax", "paradox", "Euphemism softens unpleasant ideas."],
          ["M", "'O moon, why do you hide your face tonight?' is an example of", "apostrophe", "oxymoron", "euphemism", "anticlimax", "The speaker addresses the moon, which cannot answer."],
          ["M", "Saying 'What lovely weather!' during a heavy storm is an example of", "irony", "euphemism", "alliteration", "climax", "The speaker means the opposite of the words."],
          ["M", "'The more you learn, the more you realise you don't know' is an example of", "paradox", "oxymoron", "euphemism", "apostrophe", "It seems contradictory but contains a truth."],
          ["M", "'Open secret' is an example of", "oxymoron", "apostrophe", "anticlimax", "personification", "'Open' and 'secret' contradict each other."],
          ["H", "'She lost her house, her car and her pencil' is an example of", "anticlimax", "climax", "euphemism", "paradox", "The list drops suddenly from important to trivial."],
          ["H", "How does an oxymoron differ from a paradox?", "An oxymoron is a short phrase; a paradox is a whole statement", "An oxymoron is always longer", "A paradox uses 'like' or 'as'", "There is no difference", "Both involve contradiction, but at different lengths."],
          ["H", "'The fire station burnt down' illustrates", "situational irony", "euphemism", "apostrophe", "alliteration", "The outcome is the opposite of what is expected."],
        ],
      },
      {
        week: 8,
        title: "Phrasal verbs",
        subtopics: ["What phrasal verbs are", "Common phrasal verbs with get, look, take and put", "Separable and inseparable phrasal verbs", "Phrasal verbs in context"],
        objectives: ["Explain what a phrasal verb is", "Give the meanings of common phrasal verbs", "Place objects correctly with separable phrasal verbs", "Choose the correct phrasal verb to fit a sentence"],
        lesson: {
          title: "Phrasal Verbs",
          summary: "Understand verbs whose meaning changes when combined with particles.",
          minutes: 40,
          notes: `## What is a phrasal verb?
A **verb + particle** (adverb or preposition) whose meaning is often different from the verb alone.
*look* = see, but *look **after*** = take care of.

## Common phrasal verbs
| Phrasal verb | Meaning |
|---|---|
| look after | take care of |
| look for | search for |
| look up to | respect, admire |
| look into | investigate |
| put off | postpone |
| put out | extinguish (a fire) |
| put up with | tolerate |
| take after | resemble (a parent or relative) |
| take off | remove; (a plane) leave the ground |
| give up | stop trying; quit |
| turn down | reject; reduce volume |
| call off | cancel |
| get over | recover from |
| break down | stop working |
| run out of | have no more of |

## Separable phrasal verbs
The object can go between verb and particle: *Put **out** the fire.* / *Put **the fire** out.*
If the object is a **pronoun**, it must go in the middle: *Put **it** out.* ✗ *Put out it.*

## Inseparable phrasal verbs
The object must follow the particle: *She **looks after** her brother.* ✗ *looks her brother after.*`,
          examples: `**Example 1.** *The match was ___ because of the rain.* (cancelled) *Answer:* **called off**.

**Example 2.** *Chika ___ her mother; they look alike.* *Answer:* **takes after**.

**Example 3.** Correct: *The firemen put out it.* *Answer:* The firemen **put it out**.`,
        },
        questions: [
          ["E", "'Please look after my bag' means", "take care of my bag", "search for my bag", "look behind my bag", "throw away my bag", "'Look after' means take care of."],
          ["E", "'The match was called off' means the match was", "cancelled", "started", "won", "shown on television", "'Call off' means cancel."],
          ["E", "'The firemen put out the fire' means they", "extinguished the fire", "started the fire", "carried the fire outside", "watched the fire", "'Put out' means extinguish."],
          ["M", "'Chika takes after her mother' means Chika", "resembles her mother", "follows her mother everywhere", "takes things from her mother", "dislikes her mother", "'Take after' means resemble."],
          ["M", "'The meeting has been put off until Friday' means the meeting has been", "postponed", "cancelled for ever", "brought forward", "concluded", "'Put off' means postpone."],
          ["M", "'I can't put up with the noise any longer' means I cannot", "tolerate the noise", "make the noise", "reduce the noise", "record the noise", "'Put up with' means tolerate."],
          ["M", "'The police are looking into the matter' means they are", "investigating it", "ignoring it", "writing about it", "laughing at it", "'Look into' means investigate."],
          ["H", "Which sentence is correct?", "The firemen put it out.", "The firemen put out it.", "The firemen it put out.", "The firemen out it put.", "With a pronoun object, it goes between the verb and particle."],
          ["H", "'Our car broke down on the way' means the car", "stopped working", "crashed into a wall", "was sold", "went faster", "'Break down' means stop working."],
          ["H", "'We have run out of sugar' means we have", "no sugar left", "too much sugar", "spilt the sugar", "bought sugar", "'Run out of' means have no more."],
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
        title: "Adverbial clauses",
        subtopics: ["Clauses of time and place", "Clauses of reason and purpose", "Clauses of condition and concession", "Clauses of result and manner"],
        objectives: ["Identify adverbial clauses in sentences", "Classify adverbial clauses by their function", "Use appropriate subordinating conjunctions", "Punctuate sentences that begin with adverbial clauses"],
        lesson: {
          title: "Adverbial Clauses",
          summary: "Identify and classify clauses that tell when, where, why, how and under what condition.",
          minutes: 45,
          notes: `## What is an adverbial clause?
A subordinate clause that works like an **adverb**: it tells us **when, where, why, how, under what condition** or **in spite of what** the action happens.

## Types
| Type | Answers | Conjunctions | Example |
|---|---|---|---|
| Time | when? | when, while, before, after, as soon as, until | *We left **after the rain stopped**.* |
| Place | where? | where, wherever | *Sit **where you can see the board**.* |
| Reason | why? | because, since, as | *She stayed at home **because she was ill**.* |
| Purpose | for what purpose? | so that, in order that | *He saved money **so that he could buy a bicycle**.* |
| Condition | on what condition? | if, unless, provided that | ***If you hurry**, you will catch the bus.* |
| Concession (contrast) | in spite of what? | although, though, even though | ***Although it was late**, they continued.* |
| Result | with what result? | so … that, such … that | *He was so tired **that he slept at once**.* |
| Manner | how? | as, as if, as though | *He talks **as if he knows everything**.* |

## Punctuation
When the adverbial clause comes **first**, put a **comma** after it:
*When the bell rang, the students left.*
No comma is usually needed when it comes second.`,
          examples: `**Example 1.** *Although he trained hard, he lost the race.* Type? *Answer:* adverbial clause of **concession**.

**Example 2.** *She whispered so that the baby would not wake.* Type? *Answer:* **purpose**.

**Example 3.** *The road was so slippery that the car skidded.* Type? *Answer:* **result**.`,
        },
        questions: [
          ["E", "In 'We left after the rain stopped', the adverbial clause is", "after the rain stopped", "We left", "the rain", "We left after", "It tells us when we left."],
          ["E", "In 'She stayed at home because she was ill', the clause 'because she was ill' is a clause of", "reason", "time", "place", "manner", "It tells us why."],
          ["E", "Which conjunction introduces a clause of time?", "as soon as", "although", "so that", "unless", "'As soon as' tells when."],
          ["M", "'Although he trained hard, he lost the race.' The adverbial clause is a clause of", "concession", "purpose", "place", "result", "'Although' shows contrast."],
          ["M", "'She whispered so that the baby would not wake.' The adverbial clause expresses", "purpose", "place", "time", "condition", "'So that' shows purpose."],
          ["M", "'Sit where you can see the board.' The adverbial clause is a clause of", "place", "reason", "time", "concession", "'Where' tells us the location."],
          ["M", "Which sentence is correctly punctuated?", "When the bell rang, the students left.", "When the bell rang the, students left.", "When, the bell rang the students left.", "When the bell, rang the students left.", "A comma follows an opening adverbial clause."],
          ["H", "'The road was so slippery that the car skidded.' The adverbial clause expresses", "result", "purpose", "manner", "concession", "'So … that' shows the result."],
          ["H", "'He talks as if he knows everything.' The adverbial clause is a clause of", "manner", "time", "reason", "place", "'As if' shows how he talks."],
          ["H", "'Unless you apologise, she will not speak to you.' The adverbial clause is a clause of", "condition", "concession", "time", "result", "'Unless' introduces a condition."],
        ],
      },
      {
        week: 2,
        title: "Noun clauses",
        subtopics: ["What a noun clause is", "Noun clause as subject", "Noun clause as object", "Noun clause as complement and object of a preposition"],
        objectives: ["Identify noun clauses in sentences", "State the grammatical function of a noun clause", "Distinguish noun clauses from adjectival clauses", "Write sentences containing noun clauses"],
        lesson: {
          title: "Noun Clauses",
          summary: "Recognise clauses that do the work of a noun and name their functions.",
          minutes: 40,
          notes: `## What is a noun clause?
A subordinate clause that does the work of a **noun**. You can usually replace it with *it* or *something*.
Common introducers: *that, what, whatever, who, whoever, whether, if, how, why, when, where*.

## Functions
| Function | Example |
|---|---|
| **Subject** of a verb | ***What she said** surprised everyone.* |
| **Object** of a verb | *I know **that you are honest**.* |
| **Complement** (after *be*) | *The problem is **that we have no money**.* |
| **Object of a preposition** | *He was worried about **what the teacher would say**.* |
| **In apposition** (explains a noun) | *The news **that he had won** spread quickly.* |

## How to find the function
1. Find the main verb.
2. Ask **what** or **who** before the verb → subject.
3. Ask **what** after the verb → object.
4. After *is/was* → complement.
5. After a preposition → object of the preposition.

## Noun clause or adjectival clause?
- *The news **that he had won** spread.* → explains **what** the news was (noun clause in apposition).
- *The news **that he brought** was good.* → tells **which** news (adjectival clause; *that* = which).`,
          examples: `**Example 1.** *Whoever wins will receive a trophy.* Function? *Answer:* **subject** of *will receive*.

**Example 2.** *I wonder whether she will come.* Function? *Answer:* **object** of *wonder*.

**Example 3.** *The truth is that we lost.* Function? *Answer:* **complement** of *is*.`,
        },
        questions: [
          ["E", "A noun clause does the work of", "a noun", "an adverb", "an adjective", "a preposition", "It can act as subject, object or complement."],
          ["E", "Identify the noun clause: 'I know that you are honest.'", "that you are honest", "I know", "you are", "know that", "It is the object of 'know'."],
          ["E", "Which word often introduces a noun clause?", "whether", "because", "although", "so that", "'Whether' introduces noun clauses such as 'whether she will come'."],
          ["M", "In 'What she said surprised everyone', the noun clause functions as", "subject of the verb", "object of the verb", "complement", "object of a preposition", "It answers 'What surprised everyone?'"],
          ["M", "In 'I wonder whether she will come', the noun clause functions as", "object of the verb", "subject of the verb", "complement", "adjective", "It answers 'I wonder what?'"],
          ["M", "In 'The truth is that we lost', the noun clause functions as", "complement", "subject of the verb", "object of a preposition", "adverb of time", "It follows 'is' and completes the meaning."],
          ["M", "In 'He was worried about what the teacher would say', the noun clause functions as", "object of the preposition 'about'", "subject of 'was'", "complement of 'was'", "adjective qualifying 'teacher'", "It follows the preposition 'about'."],
          ["H", "In 'Whoever wins will receive a trophy', the noun clause is", "Whoever wins", "will receive a trophy", "a trophy", "wins will receive", "It is the subject of 'will receive'."],
          ["H", "In 'The news that he had won spread quickly', the clause 'that he had won' is", "a noun clause in apposition to 'news'", "an adverbial clause of time", "an adjectival clause describing 'quickly'", "a main clause", "It explains what the news was."],
          ["H", "In 'The news that he brought was good', the clause 'that he brought' is", "an adjectival clause", "a noun clause as subject", "a noun clause as complement", "an adverbial clause of reason", "It tells which news, so 'that' means 'which'."],
        ],
      },
      {
        week: 3,
        title: "Synonyms and antonyms in context",
        subtopics: ["Choosing the nearest meaning", "Choosing the opposite meaning", "Using context clues", "Words with more than one meaning"],
        objectives: ["Choose the word nearest in meaning to a word in context", "Choose the word opposite in meaning to a word in context", "Use context clues to work out meanings", "Avoid common traps in synonym and antonym questions"],
        lesson: {
          title: "Nearest and Opposite Meanings",
          summary: "Answer 'nearest in meaning' and 'opposite in meaning' questions accurately.",
          minutes: 40,
          notes: `## Synonyms and antonyms
- **Synonym**: a word with the same or nearly the same meaning — *brave / courageous*.
- **Antonym**: a word with the opposite meaning — *brave / cowardly*.

## Context matters
Many words have several meanings; the sentence decides which one is tested.
*The judge was **fair** to both sides.* → synonym **just**; antonym **biased**.
*She has **fair** skin.* → synonym **light**; antonym **dark**.

## Strategy
1. Read the **whole sentence**.
2. Work out the meaning of the word **in that sentence**.
3. Replace the word with each option; keep the one that keeps (synonym) or reverses (antonym) the meaning.
4. Watch for traps: an option that is related to the topic but not the meaning, or a synonym offered in an antonym question.
5. The answer should be the **same part of speech** as the tested word.

## Useful word pairs
| Word | Synonym | Antonym |
|---|---|---|
| abundant | plentiful | scarce |
| diligent | hard-working | lazy |
| hostile | unfriendly | friendly |
| temporary | short-lived | permanent |
| reluctant | unwilling | eager |
| obscure | unclear | obvious |
| frugal | thrifty | extravagant |`,
          examples: `**Example 1.** *Food was **abundant** at the party.* Nearest meaning: **plentiful**.

**Example 2.** *The student was **reluctant** to speak.* Opposite meaning: **eager**.

**Example 3.** *The judge was **fair** to both sides.* Opposite: **biased** (not *dark*, which opposes a different meaning of *fair*).`,
        },
        questions: [
          ["E", "Choose the word nearest in meaning to 'abundant': 'Food was abundant at the party.'", "plentiful", "scarce", "delicious", "expensive", "'Abundant' means available in large amounts."],
          ["E", "Choose the word opposite in meaning to 'diligent': 'Ade is a diligent student.'", "lazy", "hard-working", "clever", "tall", "'Diligent' means hard-working; the opposite is lazy."],
          ["E", "Choose the word opposite in meaning to 'temporary': 'This is only a temporary classroom.'", "permanent", "short-lived", "large", "new", "Temporary means lasting a short time; permanent means lasting."],
          ["M", "Choose the word opposite in meaning to 'reluctant': 'The boy was reluctant to speak.'", "eager", "unwilling", "afraid", "quiet", "'Reluctant' means unwilling; 'eager' is the opposite."],
          ["M", "Choose the word nearest in meaning to 'hostile': 'The villagers were hostile to the strangers.'", "unfriendly", "friendly", "generous", "curious", "'Hostile' means unfriendly or aggressive."],
          ["M", "Choose the word opposite in meaning to 'fair': 'The judge was fair to both sides.'", "biased", "dark", "just", "pale", "Here 'fair' means just, so the opposite is 'biased'."],
          ["M", "Choose the word nearest in meaning to 'fair': 'She has fair skin.'", "light", "honest", "just", "dark", "Here 'fair' describes skin colour."],
          ["H", "Choose the word opposite in meaning to 'frugal': 'My grandmother lived a frugal life.'", "extravagant", "thrifty", "simple", "long", "'Frugal' means careful with money; 'extravagant' means wasteful."],
          ["H", "Choose the word nearest in meaning to 'obscure': 'The meaning of the poem is obscure.'", "unclear", "obvious", "beautiful", "short", "'Obscure' means not clear."],
          ["H", "Why must you read the whole sentence before choosing a synonym?", "Because the context decides which meaning of the word is tested", "Because the answer is always the longest option", "Because synonyms are always verbs", "Because the first option is always correct", "Many words have several meanings."],
        ],
      },
      {
        week: 4,
        title: "Speech work: vowel and consonant contrasts",
        subtopics: ["Short and long vowel contrasts", "Contrasts /æ/ and /ɑː/, /ɒ/ and /ɔː/", "Consonant contrasts /θ/–/t/ and /ð/–/d/", "Consonant contrasts /ʃ/–/tʃ/ and /v/–/f/"],
        objectives: ["Distinguish short and long vowel sounds in minimal pairs", "Distinguish commonly confused consonant sounds", "Identify words that contain a given sound", "Pronounce minimal pairs accurately"],
        lesson: {
          title: "Minimal Pairs: Vowels and Consonants",
          summary: "Hear and produce sound contrasts that change the meaning of words.",
          minutes: 40,
          notes: `## Minimal pairs
Two words that differ in **one sound only**: *ship / sheep*, *thin / tin*. They help us practise sounds that are easily confused.

## Vowel contrasts
| Sounds | Examples |
|---|---|
| /ɪ/ short – /iː/ long | ship – sheep, fill – feel, live – leave |
| /ʊ/ short – /uː/ long | full – fool, pull – pool |
| /æ/ – /ɑː/ | cat – cart, hat – heart |
| /ɒ/ – /ɔː/ | cot – caught, pot – port |
| /ʌ/ – /ɑː/ | cut – cart |
| /e/ – /ɜː/ | bed – bird, ten – turn |

## Consonant contrasts
| Sounds | Examples | Common error |
|---|---|---|
| /θ/ – /t/ | thin – tin, three – tree | "tin" for *thin* |
| /ð/ – /d/ | they – day, then – den | "dey" for *they* |
| /ʃ/ – /tʃ/ | share – chair, ship – chip | *ship* for *chip* |
| /v/ – /f/ | van – fan, vine – fine | "fan" for *van* |
| /l/ – /r/ | light – right, lead – read | |
| /p/ – /f/ | pan – fan, pool – fool | |

## Spelling is a poor guide
The same sound can be spelt differently: /ʃ/ in **sh**oe, na**ti**on, **s**ure, ma**ch**ine. Always think of the **sound**.`,
          examples: `**Example 1.** Which word has /iː/: *ship, sheep, sit, fill*? *Answer:* **sheep**.

**Example 2.** Which word has /θ/: *tin, thin, then, ten*? *Answer:* **thin**.

**Example 3.** Which word has /ʃ/: *chair, cheap, nation, catch*? *Answer:* **nation** (-ti- = /ʃ/).`,
        },
        questions: [
          ["E", "Which pair of words is a minimal pair?", "ship – sheep", "ship – boat", "sheep – goat", "ship – shipping", "They differ in one sound only."],
          ["E", "Which word contains the long vowel /iː/?", "sheep", "ship", "sit", "fill", "The 'ee' in 'sheep' is long /iː/."],
          ["E", "Which word begins with the sound /θ/?", "thin", "tin", "then", "they", "'Thin' begins with the voiceless 'th' sound."],
          ["M", "Which word begins with the sound /ð/?", "they", "thin", "day", "think", "'They' begins with the voiced 'th' sound."],
          ["M", "Which word contains the sound /ʃ/?", "nation", "chair", "cheap", "catch", "The 'ti' in 'nation' is pronounced /ʃ/."],
          ["M", "Which word contains the long vowel /uː/?", "fool", "full", "pull", "put", "'Fool' has the long /uː/ sound."],
          ["M", "Which word begins with the sound /tʃ/?", "chair", "share", "shoe", "sure", "'Chair' begins with /tʃ/."],
          ["H", "Which word has the same vowel sound as 'caught'?", "port", "cot", "cut", "cat", "'Caught' and 'port' both have /ɔː/."],
          ["H", "Which word has the same vowel sound as 'bird'?", "turn", "bed", "bad", "bard", "'Bird' and 'turn' both have /ɜː/."],
          ["H", "Which word contains the sound /ʃ/ spelt with 'ch'?", "machine", "church", "chip", "teacher", "In 'machine', 'ch' is pronounced /ʃ/."],
        ],
      },
      {
        week: 5,
        title: "Argumentative essay and debate",
        subtopics: ["Features of an argumentative essay", "Taking and supporting a stand", "Answering the opposing view", "Writing a debate speech"],
        objectives: ["State the features of an argumentative essay", "Take a clear position and support it with reasons and examples", "Refute opposing arguments politely", "Write a debate speech with correct vocatives"],
        lesson: {
          title: "Arguing a Case",
          summary: "Take a clear stand and support it with convincing, well-organised arguments.",
          minutes: 45,
          notes: `## What is an argumentative essay?
It tries to **persuade** the reader to accept a point of view, using reasons, facts and examples.
Example topics: *Day schools are better than boarding schools. / Mobile phones should be allowed in schools.*

## Structure
1. **Introduction** — introduce the issue and state your **stand** clearly: *I strongly believe that…*
2. **Body** — one argument per paragraph, each with a reason, explanation and example. Put your **strongest** point first or last.
3. **Refutation** — mention the opposing view and show why it is weaker: *Some people argue that… However…*
4. **Conclusion** — restate your position and summarise.

## Debate
A debate is an argumentative **speech**. It begins with vocatives:
*The Chairman, Panel of Judges, Accurate Time-keeper, Co-debaters, Ladies and Gentlemen…*
Then: *I am here to support/oppose the motion that…*
It ends: *I hope I have convinced, not confused, you. Thank you.*

## Persuasive language
- Linking words: *firstly, moreover, furthermore, on the other hand, consequently*
- Rhetorical questions, facts and figures, examples
- Stay **polite**; attack arguments, not people.`,
          examples: `**Stand:** *I strongly support the motion that mobile phones should be banned in secondary schools.*

**Argument:** *Firstly, phones distract students during lessons. A student chatting online cannot follow a Mathematics lesson.*

**Refutation:** *My opponents may argue that phones help research. However, the school library and computer laboratory already serve that purpose under supervision.*`,
        },
        questions: [
          ["E", "The main purpose of an argumentative essay is to", "persuade the reader to accept a view", "describe a place", "tell a story", "give instructions", "Argument aims to persuade."],
          ["E", "Which title is argumentative?", "Mobile Phones Should Be Allowed in Schools", "My Last Holiday", "How to Make Tea", "A Description of Our Market", "It states a position to be argued."],
          ["E", "In the introduction of an argumentative essay, you should", "state your stand clearly", "hide your opinion", "tell a joke", "list all your examples", "The reader must know your position."],
          ["M", "Answering the opposing view in an argument is called", "refutation", "narration", "description", "summary", "Refutation shows why the other side is weaker."],
          ["M", "Which sentence introduces a refutation?", "Some people argue that phones help research. However,…", "Firstly, phones distract students.", "In conclusion, phones should be banned.", "Once upon a time, a boy had a phone.", "It presents and then challenges the opposing view."],
          ["M", "Which is a suitable opening for a debate speech?", "The Chairman, Panel of Judges, Accurate Time-keeper, Co-debaters, Ladies and Gentlemen,", "Dear Sir,", "My dear friend,", "Once upon a time,", "Debates begin with vocatives."],
          ["M", "Each paragraph in the body of an argumentative essay should contain", "one argument with explanation and example", "several unrelated ideas", "only a question", "the conclusion", "Clear organisation is persuasive."],
          ["H", "Which statement is the best supporting evidence for 'Reading improves writing'?", "Students who read widely usually use more varied vocabulary in their essays.", "Reading is very boring for some people.", "My uncle owns a bookshop.", "Books have many pages.", "It gives a relevant reason linking reading to writing."],
          ["H", "Which is the most appropriate way to disagree in a debate?", "My opponent's point is weak because the facts show otherwise.", "My opponent is foolish and ugly.", "Everybody should ignore my opponent.", "My opponent should sit down and keep quiet.", "Attack the argument, not the person."],
          ["H", "What should the conclusion of an argumentative essay do?", "restate the writer's position and summarise the arguments", "introduce the strongest new argument", "support the opposing side", "tell a story unrelated to the topic", "It closes the case convincingly."],
        ],
      },
      {
        week: 6,
        title: "Vocabulary: register of health and agriculture",
        subtopics: ["Words associated with hospitals and health", "Words associated with diseases and treatment", "Words associated with farming", "Using register words in context"],
        objectives: ["Use vocabulary associated with health correctly", "Use vocabulary associated with agriculture correctly", "Match register words to their meanings", "Complete sentences with suitable register words"],
        lesson: {
          title: "Register: Health and Agriculture",
          summary: "Learn the special vocabulary of health care and farming.",
          minutes: 35,
          notes: `## Health
| Word | Meaning |
|---|---|
| diagnosis | identifying an illness from its signs |
| symptom | a sign of illness, e.g. fever |
| prescription | a doctor's written instruction for medicine |
| pharmacist | person who prepares and sells medicine |
| surgeon | doctor who performs operations |
| ward | room in a hospital for patients |
| out-patient | patient treated without staying overnight |
| immunisation | giving vaccines to prevent disease |
| epidemic | a disease spreading widely in a community |
| paediatrician | doctor for children |
| dentist | doctor for teeth |

## Agriculture
| Word | Meaning |
|---|---|
| harvest | gathering ripe crops |
| fertiliser | substance added to soil to help plants grow |
| irrigation | supplying water to crops artificially |
| crop rotation | growing different crops on a plot in turn |
| livestock | farm animals |
| poultry | domestic birds such as chickens |
| pesticide | chemical that kills pests |
| tractor | machine for pulling farm equipment |
| yield | amount of crop produced |
| silo | tower for storing grain |`,
          examples: `**Example 1.** *The doctor wrote a ___ for antibiotics.* *Answer:* **prescription**.

**Example 2.** *In the dry season, farmers use ___ to water their crops.* *Answer:* **irrigation**.

**Example 3.** *A doctor who treats children is a ___.* *Answer:* **paediatrician**.`,
        },
        questions: [
          ["E", "A doctor who performs operations is a", "surgeon", "pharmacist", "farmer", "dentist", "Surgeons operate on patients."],
          ["E", "Gathering ripe crops from the farm is called", "harvest", "irrigation", "fertiliser", "diagnosis", "Harvesting is collecting crops."],
          ["E", "Farm animals are generally called", "livestock", "poultry only", "pesticides", "yields", "Livestock means farm animals."],
          ["M", "The doctor's written instruction for medicine is a", "prescription", "diagnosis", "symptom", "ward", "A prescription lists medicines."],
          ["M", "Supplying water to crops artificially is", "irrigation", "harvest", "crop rotation", "fertilisation", "Irrigation waters crops."],
          ["M", "A sign of illness, such as fever, is a", "symptom", "vaccine", "prescription", "surgeon", "Symptoms show illness."],
          ["M", "A doctor who treats children is a", "paediatrician", "dentist", "surgeon only", "pharmacist", "Paediatricians specialise in children."],
          ["H", "Growing different crops on the same plot in turn is called", "crop rotation", "irrigation", "harvesting", "immunisation", "Rotation maintains soil fertility."],
          ["H", "A disease spreading widely in a community is", "an epidemic", "a diagnosis", "a prescription", "a ward", "Epidemics affect many people at once."],
          ["H", "The amount of crop produced by a farm is its", "yield", "silo", "tractor", "pesticide", "Yield is output per area."],
        ],
      },
      {
        week: 7,
        title: "Letter writing revision: formal, informal and semi-formal",
        subtopics: ["Informal letters", "Semi-formal letters", "Formal letters", "Choosing the right features for each type"],
        objectives: ["Distinguish formal, semi-formal and informal letters", "Use the correct salutation and subscription for each type", "Choose suitable language for each audience", "Write any type of letter with correct layout"],
        lesson: {
          title: "The Three Kinds of Letters",
          summary: "Compare formal, semi-formal and informal letters and use the right features for each.",
          minutes: 45,
          notes: `## Comparing the types
| Feature | Informal | Semi-formal | Formal |
|---|---|---|---|
| Written to | friends, family | people you respect but know (teacher, uncle's friend, pastor) | officials and organisations |
| Addresses | writer's only | writer's only | writer's **and** receiver's |
| Salutation | *Dear Tunde,* | *Dear Mr Ade,* / *Dear Mrs Okafor,* | *Dear Sir,* / *Dear Madam,* |
| Heading | none | usually none | yes |
| Language | friendly, relaxed (but correct) | polite, respectful | formal, official |
| Subscription | *Your friend, / Yours affectionately,* | *Yours sincerely,* | *Yours faithfully,* |
| Name | first name | full name | signature + full name |

## Examples of each
- **Informal:** to a friend describing your new school.
- **Semi-formal:** to your former teacher thanking them for their guidance.
- **Formal:** to the Chairman of your Local Government about a bad road.

## General tips
- Read the question to decide the **type** and **purpose**.
- Plan your paragraphs.
- Always include the **date** under the writer's address.
- In examinations, stay within the **word limit**.`,
          examples: `**Informal:** *Dear Kemi,* … *Your friend, Bola.*

**Semi-formal:** *Dear Mrs Okafor,* *I write to thank you for all you did for me in JSS1…* *Yours sincerely, Aisha Bello.*

**Formal:** *The Chairman, Ikeja Local Government, …* *Dear Sir,* *THE BAD STATE OF OBA AKRAN ROAD* … *Yours faithfully, (signature) Aisha Bello.*`,
        },
        questions: [
          ["E", "A letter to your best friend is", "informal", "formal", "semi-formal", "official", "Friends receive informal letters."],
          ["E", "Which subscription is used in an informal letter?", "Your friend,", "Yours faithfully,", "Yours sincerely only for officials,", "Respectfully submitted,", "Informal letters end warmly."],
          ["E", "Which letter includes the receiver's address?", "a formal letter", "an informal letter", "a semi-formal letter", "none of these letters", "Only formal letters include it."],
          ["M", "A letter thanking your former teacher for guidance is", "semi-formal", "formal", "informal", "an application", "It is to someone you know and respect."],
          ["M", "Which salutation suits a semi-formal letter?", "Dear Mrs Okafor,", "Dear Sir,", "Dear Tunde,", "Hello!", "Semi-formal letters use the title and surname."],
          ["M", "Which subscription suits a semi-formal letter?", "Yours sincerely,", "Your loving friend,", "Yours faithfully,", "Cheers,", "Semi-formal letters use 'Yours sincerely'."],
          ["M", "Which feature appears in a formal letter but usually not in a semi-formal letter?", "a heading stating the subject", "the writer's address", "the date", "a salutation", "Formal letters carry a heading."],
          ["H", "A letter to the Chairman of your Local Government about a bad road should end with", "Yours faithfully,", "Your friend,", "Yours affectionately,", "Love,", "It is a formal letter."],
          ["H", "Which sentence best suits a semi-formal letter to your uncle's business partner?", "I am grateful for the advice you gave me during my visit.", "Hey, what's up with you?", "I write to lodge an official complaint to your office.", "Yo! Hope you're chilling.", "It is polite and respectful."],
          ["H", "How should an informal letter be signed?", "with the writer's first name", "with a signature and full name only", "with the writer's title and surname", "with no name", "Friends know you by your first name."],
        ],
      },
      {
        week: 8,
        title: "Prepositions and prepositional phrases",
        subtopics: ["Prepositions of time and place", "Prepositions after adjectives", "Prepositions after verbs and nouns", "Common preposition errors"],
        objectives: ["Use prepositions of time and place correctly", "Use the correct preposition after common adjectives and verbs", "Correct common preposition errors", "Identify prepositional phrases in sentences"],
        lesson: {
          title: "Using Prepositions Correctly",
          summary: "Choose the correct preposition after verbs, adjectives and nouns and avoid common errors.",
          minutes: 40,
          notes: `## Time and place
- **at** + clock time, exact point: *at 8 o'clock, at the gate*
- **on** + days and dates, surfaces: *on Monday, on 1st October, on the table*
- **in** + months, years, seasons, enclosed spaces: *in May, in 2026, in the room*

## After adjectives
| Adjective + preposition | Example |
|---|---|
| good **at** | good at Mathematics |
| afraid **of** | afraid of snakes |
| interested **in** | interested in music |
| married **to** | married to a doctor |
| different **from** | different from mine |
| angry **with** (a person) | angry with me |
| angry **about** (a thing) | angry about the delay |
| capable **of** | capable of winning |

## After verbs and nouns
*depend **on**, congratulate **on**, insist **on**, accuse **of**, prefer … **to**, comply **with**, abstain **from**, the reason **for**, an increase **in**, a solution **to***

## Common errors
| ✗ | ✓ |
|---|---|
| discuss **about** the matter | discuss the matter |
| enter **into** the room | enter the room |
| emphasise **on** | emphasise |
| request **for** (verb) | request |
| comprise **of** | comprise / consist **of** |`,
          examples: `**Example 1.** *She is married ___ a lawyer.* *Answer:* **to**.

**Example 2.** Correct: *We discussed about the matter.* *Answer:* We **discussed the matter**.

**Example 3.** *The committee congratulated her ___ her success.* *Answer:* **on**.`,
        },
        questions: [
          ["E", "Choose the correct option: 'The meeting starts ___ 8 o'clock.'", "at", "on", "in", "by at", "'At' is used with clock times."],
          ["E", "Choose the correct option: 'Schools resume ___ Monday.'", "on", "at", "in", "into", "'On' is used with days."],
          ["E", "Choose the correct option: 'She is afraid ___ snakes.'", "of", "from", "with", "at", "'Afraid of' is the correct combination."],
          ["M", "Choose the correct option: 'Mrs Bello is married ___ a lawyer.'", "to", "with", "by", "for", "'Married to' is correct."],
          ["M", "Which sentence is correct?", "Please enter the room quietly.", "Please enter into the room quietly.", "Please enter inside of the room quietly.", "Please enter to the room quietly.", "'Enter' (a place) takes no preposition."],
          ["M", "Choose the correct option: 'The committee congratulated her ___ her success.'", "on", "for", "about", "with", "'Congratulate on' is correct."],
          ["M", "Choose the correct option: 'The teacher was angry ___ the late students.'", "with", "about", "on", "at about", "We are angry with a person and angry about a thing."],
          ["H", "Which sentence is correct?", "The book consists of ten chapters.", "The book comprises of ten chapters.", "The book consists in ten chapters.", "The book consists with ten chapters.", "'Consist of' and 'comprise' (without 'of') are correct."],
          ["H", "Choose the correct option: 'Delegates must comply ___ the rules.'", "with", "to", "by", "on", "'Comply with' is correct."],
          ["H", "Choose the correct option: 'I prefer rice ___ beans.'", "to", "than", "over than", "from", "'Prefer … to' is standard."],
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
        title: "BECE revision: lexis and vocabulary",
        subtopics: ["Nearest and opposite meanings", "Idioms and figurative expressions", "Word formation and register", "Examination techniques for lexis questions"],
        objectives: ["Answer synonym and antonym questions accurately", "Interpret idioms in sentences", "Choose correct word forms and register words", "Apply time-saving techniques in objective questions"],
        lesson: {
          title: "BECE Revision: Vocabulary",
          summary: "Revise and practise every kind of vocabulary question set in the BECE.",
          minutes: 45,
          notes: `## What the BECE tests in vocabulary
1. **Nearest meaning** (synonyms) of a word in a sentence.
2. **Opposite meaning** (antonyms).
3. **Idioms** and figurative expressions.
4. **Word completion** — choosing the right word or word form.
5. **Register** — words from school, sports, health, agriculture, law, religion, transport, etc.

## Technique
- Read the whole sentence first; meanings depend on context.
- For antonyms, first decide the **meaning** of the word, then find its opposite.
- For idioms, reject **literal** interpretations.
- Check that your answer is the right **part of speech** and fits grammatically.
- Eliminate clearly wrong options; guess sensibly from what remains.

## Quick revision list
| Word | Nearest | Opposite |
|---|---|---|
| generous | kind, giving | stingy |
| ancient | very old | modern |
| humble | modest | proud |
| victory | triumph | defeat |
| expand | enlarge | contract |
| accept | receive | reject |
| rigid | stiff | flexible |
| scarce | rare | plentiful |
| famous | well-known | unknown |
| courageous | brave | cowardly |`,
          examples: `**Example 1.** *The man is very **generous**.* Opposite: **stingy**.

**Example 2.** *The **ancient** building attracts tourists.* Nearest: **very old**.

**Example 3.** *He **kicked the bucket** last year.* Meaning: he **died** (not literally kicked a bucket).`,
        },
        questions: [
          ["E", "Choose the word opposite in meaning to 'generous': 'Mr Obi is very generous.'", "stingy", "kind", "rich", "happy", "'Generous' means giving; the opposite is stingy."],
          ["E", "Choose the word nearest in meaning to 'ancient': 'The ancient building attracts tourists.'", "very old", "modern", "beautiful", "tall", "'Ancient' means very old."],
          ["E", "Choose the word opposite in meaning to 'victory': 'The team celebrated its victory.'", "defeat", "triumph", "match", "trophy", "The opposite of victory is defeat."],
          ["M", "'The old man kicked the bucket last year' means he", "died", "played football", "cleaned the house", "became angry", "It is an idiom meaning 'died'."],
          ["M", "Choose the word opposite in meaning to 'humble': 'Despite his wealth, he remained humble.'", "proud", "modest", "poor", "gentle", "'Humble' means modest; the opposite is proud."],
          ["M", "Choose the word nearest in meaning to 'courageous': 'The courageous soldier saved his friend.'", "brave", "cowardly", "tired", "wounded", "'Courageous' means brave."],
          ["M", "Choose the word opposite in meaning to 'rigid': 'The school has rigid rules.'", "flexible", "stiff", "strict", "many", "'Rigid' means inflexible; the opposite is flexible."],
          ["H", "'Tolu is the black sheep of the family' means Tolu is", "the member who brings shame to the family", "the darkest in the family", "the family's shepherd", "the favourite child", "The idiom describes a disgraceful member."],
          ["H", "Choose the correct option: 'The ___ of the new road will take two years.'", "construction", "construct", "constructive", "constructively", "A noun is needed after 'the'."],
          ["H", "Choose the word opposite in meaning to 'scarce': 'Water is scarce in the dry season.'", "plentiful", "rare", "dirty", "cold", "'Scarce' means in short supply; the opposite is plentiful."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: grammar and structure",
        subtopics: ["Tenses and concord", "Pronouns and relative pronouns", "Question tags and prepositions", "Sentence correction strategies"],
        objectives: ["Apply tense and concord rules accurately", "Choose correct pronoun forms", "Complete sentences with the correct question tag or preposition", "Spot and correct common grammatical errors"],
        lesson: {
          title: "BECE Revision: Grammar",
          summary: "Revise the grammar points most frequently tested in structure questions.",
          minutes: 45,
          notes: `## Checklist of frequently tested points
1. **Tense consistency**: *He said that he **was** tired* (not *is*).
2. **Concord**: *Neither of the boys **is** here. The news **is** good.* (*news* is singular)
3. **Pronoun case**: *between you and **me***; *It is **I*** (formal); *He is taller than **I** (am)*.
4. **Relative pronouns**: *who* (subject), *whom* (object), *whose* (possession).
5. **Question tags**: positive → negative; *I am …, aren't I?*; *Let's …, shall we?*
6. **Prepositions**: *married to, good at, different from, congratulate on*.
7. **Comparatives**: *better than* (not *more better*); *the more … the better*.
8. **Uncountable nouns**: *information, equipment, luggage, advice, furniture* take **no -s** and a singular verb.
9. **Conditionals**: *If I **were** you…*; *If he **had come**, he would have seen…*

## Strategy for completion questions
- Identify the **subject** and **time** of the sentence.
- Look for signal words: *yesterday, since, by next year, neither … nor*.
- Test each option in the sentence; read it silently.`,
          examples: `**Example 1.** *The news ___ very encouraging.* *Answer:* **is** (*news* is singular).

**Example 2.** *Keep this secret between you and ___.* *Answer:* **me** (object after a preposition).

**Example 3.** *He gave me some useful ___.* *Answer:* **advice** (uncountable, no -s).`,
        },
        questions: [
          ["E", "Choose the correct option: 'The news ___ very encouraging.'", "is", "are", "were", "have been", "'News' is uncountable and singular."],
          ["E", "Choose the correct option: 'Keep this secret between you and ___.'", "me", "I", "myself", "mine", "After a preposition, use the object pronoun."],
          ["E", "Choose the correct option: 'He gave me some useful ___.'", "advice", "advices", "an advice", "advise", "'Advice' is uncountable."],
          ["M", "Choose the correct option: 'Neither of the boys ___ here.'", "is", "are", "were", "have been", "'Neither' is singular."],
          ["M", "Choose the correct option: 'He said that he ___ tired.'", "was", "is", "will be", "has be", "The reported verb shifts back after 'said'."],
          ["M", "Choose the correct option: 'This mango is ___ than that one.'", "better", "more better", "best", "more good", "'Better' is already comparative."],
          ["M", "Choose the correct option: 'The travellers collected their ___.'", "luggage", "luggages", "a luggages", "luggage's", "'Luggage' is uncountable."],
          ["H", "Choose the correct option: 'If I ___ you, I would apologise.'", "were", "am", "was being", "will be", "The second conditional uses 'were'."],
          ["H", "Choose the correct option: 'Let's start the meeting, ___?'", "shall we", "will we", "don't we", "won't we", "'Let's' takes the tag 'shall we'."],
          ["H", "Choose the correct option: 'He is taller than ___.'", "I", "me myself", "mine", "myself", "In formal English, 'than I (am)' is correct."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: oral English",
        subtopics: ["Vowel sounds", "Consonant sounds", "Word stress", "Emphatic stress and intonation"],
        objectives: ["Identify vowel and consonant sounds in words", "Place stress correctly in words", "Answer emphatic stress questions", "Identify intonation patterns"],
        lesson: {
          title: "BECE Revision: Sounds and Stress",
          summary: "Revise sounds, stress and intonation in the formats used in the BECE.",
          minutes: 45,
          notes: `## Question types
1. *Choose the word that has the same vowel/consonant sound as the one underlined.*
2. *Choose the word that is differently stressed / has the stress on the first syllable.*
3. **Emphatic stress**: a sentence has one word in capitals; choose the question it answers.

## Key sounds to revise
- Short/long vowels: /ɪ/ *sit* – /iː/ *seat*; /ʊ/ *pull* – /uː/ *pool*; /ɒ/ *cot* – /ɔː/ *caught*
- Diphthongs: /eɪ/ *day*, /aɪ/ *my*, /ɔɪ/ *boy*, /aʊ/ *cow*, /əʊ/ *go*
- Consonants: /θ/ *think*, /ð/ *this*, /ʃ/ *shoe*, /tʃ/ *church*, /ʒ/ *measure*, /dʒ/ *judge*

## Emphatic stress
The word said with extra force shows **what the speaker is correcting**.
*ADA bought the shoes.* → answers *Did **Tolu** buy the shoes?* (the person is wrong)
*Ada bought the SHOES.* → answers *Did Ada buy the **bag**?*
*Ada BOUGHT the shoes.* → answers *Did Ada **borrow** the shoes?*

## Stress reminders
- Two-syllable nouns: usually first syllable (*TA-ble*); verbs: often second (*be-GIN*).
- -tion, -ic: stress before the suffix (*e-du-CA-tion*).
- -eer, -ee, -ese: stress the suffix (*vo-lun-TEER*).`,
          examples: `**Example 1.** *My sister cooked the RICE.* Which question does it answer? *Answer:* *Did your sister cook the **beans**?*

**Example 2.** Which word has the same vowel as *boy*: *coin, bone, bow, buy*? *Answer:* **coin** (/ɔɪ/).

**Example 3.** Which word is stressed on the second syllable: *education, develop, beautiful, family*? *Answer:* **develop**.`,
        },
        questions: [
          ["E", "Which word has the same vowel sound as 'boy'?", "coin", "bone", "buy", "bow (bend)", "'Boy' and 'coin' share the diphthong /ɔɪ/."],
          ["E", "Which word has the same vowel sound as 'day'?", "late", "lad", "let", "light", "'Day' and 'late' share /eɪ/."],
          ["E", "Which word begins with the sound /dʒ/?", "judge", "yes", "go", "zoo", "'Judge' begins (and ends) with /dʒ/."],
          ["M", "'My sister cooked the RICE.' Which question does this answer?", "Did your sister cook the beans?", "Did your brother cook the rice?", "Did your sister buy the rice?", "Who cooked the rice?", "The stress corrects the food."],
          ["M", "'ADA bought the shoes.' Which question does this answer?", "Did Tolu buy the shoes?", "Did Ada buy the bag?", "Did Ada borrow the shoes?", "What did Ada buy?", "The stress corrects the person."],
          ["M", "'Ada BOUGHT the shoes.' Which question does this answer?", "Did Ada borrow the shoes?", "Did Tolu buy the shoes?", "Did Ada buy the bag?", "Where did Ada go?", "The stress corrects the action."],
          ["M", "Which word contains the sound /ʒ/?", "measure", "mission", "match", "major", "The 's' in 'measure' is /ʒ/."],
          ["H", "Which word is stressed on the second syllable?", "develop", "beautiful", "family", "character", "It is pronounced de-VE-lop."],
          ["H", "Which word is stressed on the third syllable?", "volunteer", "important", "photograph", "excellent", "It is pronounced vo-lun-TEER."],
          ["H", "In 'Our team won the match YESTERDAY', the speaker is correcting", "the time", "the team", "the result", "the game", "The stressed word is the time expression."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: comprehension and summary",
        subtopics: ["Literal and inferential questions", "Vocabulary in context", "Grammatical questions in comprehension", "Summary in sentences"],
        objectives: ["Answer literal and inferential comprehension questions", "Give meanings of words as used in a passage", "Identify grammatical names and functions in a passage", "Summarise a passage in clear sentences"],
        lesson: {
          title: "BECE Revision: Reading",
          summary: "Practise the reading skills tested in the BECE with an original passage.",
          minutes: 45,
          notes: `## Practice passage
*Every Saturday, the youths of Oke-Ora gathered to clear the drains along the main road. For years, the drains had been choked with plastic bottles and nylon bags, and every rainy season the road flooded. Traders lost goods and children could not reach school. Tired of complaining, a young teacher named Mrs Adebayo called a meeting and suggested that the community stop waiting for the government. At first, only six people came with shovels. Within three months, over a hundred volunteers were working together, and the market women were providing food. When the rains came that year, the road stayed dry for the first time in a decade.*

## Types of question
1. **Literal**: the answer is stated — *What choked the drains?*
2. **Inferential**: the answer is implied — *What can we learn about Mrs Adebayo?*
3. **Vocabulary**: *Give a word that can replace "choked" as used in the passage.* The replacement must fit the **same sentence**.
4. **Grammar**: *What is the grammatical name of "Tired of complaining"?* (a participial phrase)
5. **Summary**: state main points in complete sentences.

## Tips
- Read the questions first, then the passage.
- Answer in complete sentences unless told otherwise.
- Don't copy long chunks; select the relevant part.`,
          examples: `**Q.** Why did the road flood every rainy season? *Answer:* because the drains were **blocked with plastic bottles and nylon bags**.

**Q.** Give a word that can replace *choked* as used in the passage. *Answer:* **blocked**.

**Q.** In one sentence, state the lesson of the passage. *Answer:* Communities can solve their own problems when they **work together**.`,
        },
        questions: [
          ["E", "Passage: 'For years, the drains had been choked with plastic bottles and nylon bags, and every rainy season the road flooded.' What caused the flooding?", "blocked drains", "a broken bridge", "a burst pipe", "heavy traffic", "The drains were choked with rubbish."],
          ["E", "Passage: 'At first, only six people came with shovels.' How many people came at first?", "six", "sixty", "a hundred", "three", "The passage states six."],
          ["E", "In 'the drains had been choked with plastic bottles', a word that can replace 'choked' is", "blocked", "cleaned", "painted", "widened", "'Choked' here means blocked."],
          ["M", "Passage: 'Tired of complaining, a young teacher named Mrs Adebayo called a meeting and suggested that the community stop waiting for the government.' What can we infer about Mrs Adebayo?", "She showed leadership.", "She was lazy.", "She worked for the government.", "She owned a shop.", "She took the initiative to organise the community."],
          ["M", "Passage: 'Within three months, over a hundred volunteers were working together, and the market women were providing food.' How did the market women help?", "by providing food", "by digging drains", "by calling the government", "by buying shovels", "The passage says they provided food."],
          ["M", "Passage: 'When the rains came that year, the road stayed dry for the first time in a decade.' 'A decade' means", "ten years", "one year", "a hundred years", "one month", "A decade is ten years."],
          ["M", "In 'Tired of complaining, a young teacher called a meeting', the expression 'Tired of complaining' is", "a phrase", "a main clause", "a noun clause", "a sentence", "It has no subject and finite verb."],
          ["H", "Which is the best title for a passage about youths clearing blocked drains until floods stop?", "Working Together Solves Problems", "The Rainy Season", "Mrs Adebayo's Class", "Plastic Bottles", "It captures the main idea."],
          ["H", "Passage: 'Traders lost goods and children could not reach school.' Which pair of problems does this sentence mention?", "loss of goods and missed schooling", "high prices and bad teachers", "fire and theft", "hunger and disease", "Both effects of the flooding are stated."],
          ["H", "In summarising the passage in one sentence, which is best?", "Community members cleared the blocked drains and ended the yearly flooding.", "Mrs Adebayo is a teacher who likes meetings.", "Six people had shovels.", "Market women sell food.", "It states the main action and result."],
        ],
      },
      {
        week: 5,
        title: "BECE revision: continuous writing",
        subtopics: ["Types of composition", "Planning and paragraphing", "Correct language and mechanics", "Checking and editing"],
        objectives: ["Identify the type of composition a question requires", "Plan a composition with a clear outline", "Write with correct grammar, spelling and punctuation", "Edit a composition within the time allowed"],
        lesson: {
          title: "BECE Revision: Writing",
          summary: "Plan, write and edit compositions and letters to examination standard.",
          minutes: 45,
          notes: `## Identify the type
| Question wording | Type |
|---|---|
| *Write a letter to your friend…* | informal letter |
| *Write a letter to the Principal…* | formal letter |
| *Write a story ending with…* | narrative |
| *Describe your school…* | descriptive |
| *Explain how to…* | expository |
| *Argue for or against…* / *debate* | argumentative |
| *You are the Senior Prefect; write a speech…* | speech |

## How marks are usually awarded
- **Content**: relevance, ideas, examples.
- **Organisation**: introduction, paragraphs, conclusion; correct format.
- **Expression**: vocabulary, sentence variety.
- **Mechanical accuracy**: grammar, spelling, punctuation.

## Plan (5 minutes)
Write the type, audience and 4–5 points; decide the order.

## Write (25–30 minutes)
- One idea per paragraph; begin with a clear topic sentence.
- Vary sentences; use linking words.
- Keep to the required length.

## Edit (5 minutes)
Check tenses, concord, spelling of common words (*receive, necessary, separate, beginning*), punctuation and format features.`,
          examples: `**Question:** *Write a letter to your Local Government Chairman about the refuse dump near your school.*
- **Type:** formal letter
- **Plan:** 1. introduce the problem; 2. health dangers; 3. effect on students; 4. suggestions; 5. closing appeal
- **Heading:** *THE REFUSE DUMP NEAR Precious PS COLLEGE*

**Common spelling fixes:** *recieve* → **receive**; *seperate* → **separate**; *neccessary* → **necessary**.`,
        },
        questions: [
          ["E", "'Write a letter to your friend about your holiday' requires", "an informal letter", "a formal letter", "a speech", "a report", "Friends receive informal letters."],
          ["E", "'Describe your school' requires", "a descriptive composition", "a narrative composition", "an argumentative essay", "a formal letter", "The key word is 'describe'."],
          ["E", "Which is the correct spelling?", "receive", "recieve", "receeve", "resieve", "The rule: 'i' before 'e' except after 'c'."],
          ["M", "'Write a story ending with: \"...and that was the last time I told a lie.\"' requires", "a narrative composition", "an expository composition", "a formal letter", "a debate", "A story is a narrative."],
          ["M", "Which is the correct spelling?", "necessary", "neccessary", "necessery", "nesessary", "One c, double s."],
          ["M", "Which is the correct spelling?", "separate", "seperate", "separete", "saperate", "Remember: there is 'a rat' in sep-a-rate."],
          ["M", "What should you do before you start writing a composition?", "Plan your points and their order", "Write the conclusion first", "Count the words in the question", "Copy another essay", "A plan gives the essay organisation."],
          ["H", "'Argue for or against: Boarding schools are better than day schools' requires", "an argumentative essay", "a narrative composition", "an informal letter", "a report", "The wording asks you to take a side."],
          ["H", "Which area of marking checks grammar, spelling and punctuation?", "mechanical accuracy", "content", "organisation", "format only", "It deals with correctness of language."],
          ["H", "What is a topic sentence?", "a sentence that states the main idea of a paragraph", "the title of the composition", "the last sentence of the essay", "a sentence copied from the question", "It guides the paragraph."],
        ],
      },
    ],
  },
];
