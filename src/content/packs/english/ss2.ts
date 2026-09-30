import type { TermPlan } from "../types";

/** SS2 English Language — original Precious PS content aligned to the senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Oral English: consonant clusters",
        subtopics: ["What consonant clusters are", "Initial clusters", "Final clusters", "Avoiding vowel insertion and cluster reduction"],
        objectives: ["Define a consonant cluster", "Identify initial and final clusters in words", "Pronounce clusters without inserting vowels", "Count the consonant sounds in a cluster regardless of spelling"],
        lesson: {
          title: "Consonant Clusters",
          summary: "Pronounce groups of consonants correctly without adding or dropping sounds.",
          minutes: 40,
          notes: `## What is a consonant cluster?
Two or more consonant **sounds** occurring together **within a syllable**, with no vowel between them.
- Initial: *sp*ort, *str*eet, *spl*ash, *scr*een
- Final: ha*nd*, a*sked* /skt/, te*xts* /ksts/, si*xth* /ksθ/

## Sounds, not letters
Count **sounds**: *knife* has no cluster (k is silent); *box* ends in a cluster /ks/ although spelt with one letter *x*.

## Common English clusters
| Position | Examples |
|---|---|
| 2 initial | /pl/ play, /br/ bring, /sm/ small, /tw/ twin |
| 3 initial | /spr/ spring, /str/ street, /skr/ scream, /spl/ split |
| 2 final | /nd/ hand, /st/ fast, /mp/ lamp, /ŋk/ think |
| 3 final | /nts/ tents, /mps/ lamps, /kst/ next |
| 4 final | /ksts/ texts, /mpts/ attempts, /ksθs/ sixths |

## Common errors
- **Vowel insertion**: *"sipoon"* for *spoon*, *"sitreet"* for *street*.
- **Cluster reduction**: *"tes"* for *tests*, *"han"* for *hand*, *"aks"* for *asked*.
Pronounce every sound, especially **-s** and **-ed** endings, which often create clusters: *helped* /lpt/, *months* /nθs/.`,
          examples: `**Example 1.** Which word begins with a three-consonant cluster: *street, seat, sight, soon*? *Answer:* **street** /str/.

**Example 2.** How many consonant sounds end *texts*? *Answer:* **four** — /k/, /s/, /t/, /s/.

**Example 3.** Which word does NOT begin with a cluster: *knee, tree, free, glee*? *Answer:* **knee** (the k is silent).`,
        },
        questions: [
          ["E", "A consonant cluster is", "two or more consonant sounds together with no vowel between them", "a group of vowels", "a silent letter", "a diphthong", "Clusters are sequences of consonant sounds."],
          ["E", "Which word begins with a three-consonant cluster?", "street", "seat", "sight", "soon", "'Street' begins with /str/."],
          ["E", "Which word ends with a consonant cluster?", "hand", "hay", "sea", "go", "'Hand' ends with /nd/."],
          ["M", "Which word does NOT begin with a consonant cluster?", "knee", "tree", "free", "glee", "The k in 'knee' is silent."],
          ["M", "How many consonant sounds are there at the end of 'texts'?", "4", "2", "3", "1", "/k/, /s/, /t/, /s/."],
          ["M", "The word 'box' ends with the consonant cluster", "/ks/", "/x/", "/bs/", "/z/", "The letter x represents two sounds, /k/ and /s/."],
          ["M", "Pronouncing 'spoon' as 'sipoon' is an example of", "vowel insertion", "cluster reduction", "correct pronunciation", "stress shift", "An extra vowel breaks the cluster."],
          ["H", "Pronouncing 'tests' as 'tes' is an example of", "cluster reduction", "vowel insertion", "intonation", "assimilation of vowels", "Sounds in the cluster are dropped."],
          ["H", "The final cluster in 'asked' is", "/skt/", "/sk/", "/kd/", "/sked/", "-ed after the voiceless /k/ is /t/."],
          ["H", "Which word ends with the cluster /mpts/?", "attempts", "tempt", "camp", "lamps", "'Attempts' ends /m/, /p/, /t/, /s/."],
        ],
      },
      {
        week: 2,
        title: "Oral English: emphatic stress",
        subtopics: ["Normal and emphatic stress", "How emphatic stress changes meaning", "Choosing the question the stressed word answers", "Contrastive stress in speech"],
        objectives: ["Distinguish normal sentence stress from emphatic stress", "Explain how emphatic stress highlights or contrasts information", "Answer WAEC-style emphatic stress questions", "Use contrastive stress in speech"],
        lesson: {
          title: "Emphatic Stress",
          summary: "Interpret and use emphatic stress to highlight and correct information.",
          minutes: 40,
          notes: `## Normal and emphatic stress
In normal speech the stress falls on the last content word. **Emphatic (contrastive) stress** places extra force on a chosen word to **highlight** it or **correct** a mistaken idea.

## The WAEC format
*In the following sentence, the word in capital letters carries the emphatic stress. Choose the option to which the sentence relates.*
*The PRINCIPAL suspended the two boys yesterday.*
(a) Did the principal expel the two boys? (b) **Did the vice-principal suspend the two boys?** (c) Did the principal suspend the three boys? (d) Did the principal suspend the two boys last week?
The stressed word shows what is being **corrected**: the person who suspended the boys.

## Method
1. Find the stressed word.
2. Pick the option in which **only that item** is different from the sentence.
3. Reject options that change another part.

## Examples of focus
| Stressed word | Corrects |
|---|---|
| The principal **SUSPENDED** the two boys yesterday. | the action (not *expelled*) |
| The principal suspended the **TWO** boys yesterday. | the number |
| The principal suspended the two **BOYS** yesterday. | who (not *girls*) |
| The principal suspended the two boys **YESTERDAY**. | the time |`,
          examples: `**Example 1.** *My uncle bought a RED car.* Relates to: *Did your uncle buy a **blue** car?*

**Example 2.** *My UNCLE bought a red car.* Relates to: *Did your **aunt** buy a red car?*

**Example 3.** *My uncle BOUGHT a red car.* Relates to: *Did your uncle **rent** a red car?*`,
        },
        questions: [
          ["E", "Emphatic stress is used to", "highlight or correct a particular piece of information", "make every word equally loud", "show that a word is silent", "change the spelling of a word", "It focuses attention on one word."],
          ["E", "'My uncle bought a RED car.' Which question does this answer?", "Did your uncle buy a blue car?", "Did your aunt buy a red car?", "Did your uncle rent a red car?", "Did your uncle buy a red bus?", "The colour is being corrected."],
          ["E", "'My UNCLE bought a red car.' Which question does this answer?", "Did your aunt buy a red car?", "Did your uncle buy a blue car?", "Did your uncle sell a red car?", "Did your uncle buy a red bus?", "The person is being corrected."],
          ["M", "'The PRINCIPAL suspended the two boys yesterday.' Which question does this answer?", "Did the vice-principal suspend the two boys yesterday?", "Did the principal expel the two boys yesterday?", "Did the principal suspend the three boys yesterday?", "Did the principal suspend the two boys last week?", "Only the person differs."],
          ["M", "'The principal SUSPENDED the two boys yesterday.' Which question does this answer?", "Did the principal expel the two boys yesterday?", "Did the vice-principal suspend the two boys yesterday?", "Did the principal suspend the two girls yesterday?", "Did the principal suspend the two boys today?", "Only the action differs."],
          ["M", "'The principal suspended the TWO boys yesterday.' Which question does this answer?", "Did the principal suspend the three boys yesterday?", "Did the principal expel the two boys yesterday?", "Did the teacher suspend the two boys yesterday?", "Did the principal suspend the two boys today?", "Only the number differs."],
          ["M", "'The principal suspended the two boys YESTERDAY.' Which question does this answer?", "Did the principal suspend the two boys last week?", "Did the principal suspend the two girls yesterday?", "Did the principal expel the two boys yesterday?", "Did the teacher suspend the two boys yesterday?", "Only the time differs."],
          ["H", "'Kemi sent the LETTER to her aunt.' Which question does this answer?", "Did Kemi send the parcel to her aunt?", "Did Bola send the letter to her aunt?", "Did Kemi send the letter to her uncle?", "Did Kemi post the letter to her aunt?", "The item sent is being corrected."],
          ["H", "'Kemi sent the letter to her AUNT.' Which question does this answer?", "Did Kemi send the letter to her uncle?", "Did Kemi send the parcel to her aunt?", "Did Bola send the letter to her aunt?", "Did Kemi write the letter to her aunt?", "The recipient is being corrected."],
          ["H", "In answering emphatic stress questions, the correct option differs from the sentence in", "only the stressed item", "every word", "the verb and the subject together", "the tense only", "All other parts must be the same."],
        ],
      },
      {
        week: 3,
        title: "Collocation",
        subtopics: ["What collocation is", "Verb + noun collocations", "Adjective + noun collocations", "Fixed pairs and common collocation errors"],
        objectives: ["Explain the meaning of collocation", "Use common verb–noun and adjective–noun collocations correctly", "Recognise fixed pairs (binomials)", "Correct unnatural word combinations"],
        lesson: {
          title: "Words That Go Together",
          summary: "Use natural word combinations that native speakers expect.",
          minutes: 40,
          notes: `## What is collocation?
**Collocation** is the habitual combination of words. Some words simply "go together" in English; others sound wrong even if the meaning is clear.
✓ *make a mistake* ✗ *do a mistake*
✓ *heavy rain* ✗ *strong rain*

## Verb + noun
| make | do | take | pay | keep |
|---|---|---|---|---|
| a decision | homework | a photograph | attention | a promise |
| an effort | business | an examination | a visit | a secret |
| progress | damage | advantage (of) | a compliment | pace (with) |
| a noise | a favour | part (in) | tribute (to) | calm |

## Adjective + noun
*heavy traffic, strong tea, a close friend, a narrow escape, a bitter experience, a broad smile, fast colours, a deep sleep, a golden opportunity, a high fever*

## Binomials (fixed pairs)
The order is fixed: *ups and downs, law and order, bread and butter, black and white, safe and sound, trial and error, odds and ends, now and then*.
✗ *downs and ups*

## Collocations tested in examinations
*commit a crime, pass a resolution, lodge a complaint, bear a grudge, heave a sigh of relief, run a risk, strike a balance, bridge a gap*`,
          examples: `**Example 1.** *You must ___ a decision today.* *Answer:* **make**.

**Example 2.** *The accident victim had a narrow ___.* *Answer:* **escape**.

**Example 3.** *After the long journey, they arrived safe and ___.* *Answer:* **sound**.`,
        },
        questions: [
          ["E", "Which is the correct collocation?", "make a mistake", "do a mistake", "take a mistake", "commit a mistake up", "English speakers say 'make a mistake'."],
          ["E", "Choose the correct option: 'There was ___ rain last night.'", "heavy", "strong", "thick", "big", "'Heavy rain' is the natural collocation."],
          ["E", "Choose the correct option: 'Please ___ attention to the teacher.'", "pay", "make", "do", "give off", "'Pay attention' is the collocation."],
          ["M", "Choose the correct option: 'The accident victim had a narrow ___.'", "escape", "run", "flight", "exit", "'A narrow escape' is a fixed collocation."],
          ["M", "Choose the correct option: 'After the long journey, they arrived safe and ___.'", "sound", "well", "happy", "strong", "'Safe and sound' is a fixed binomial."],
          ["M", "Choose the correct option: 'She promised to ___ the secret.'", "keep", "make", "do", "hold on", "'Keep a secret' is the collocation."],
          ["M", "Choose the correct option: 'The residents ___ a complaint with the council.'", "lodged", "did", "made up", "took", "'Lodge a complaint' is formal English."],
          ["H", "Choose the correct option: 'When the results came, she heaved a ___ of relief.'", "sigh", "breath", "cry", "shout", "'Heave a sigh of relief' is the collocation."],
          ["H", "Choose the correct option: 'Life is full of ups and ___.'", "downs", "lows", "falls", "drops", "'Ups and downs' is a fixed binomial."],
          ["H", "Choose the correct option: 'The judge said the police must maintain law and ___.'", "order", "peace", "rules", "calm", "'Law and order' is a fixed pair."],
        ],
      },
      {
        week: 4,
        title: "Reported speech: questions, commands and mixed forms",
        subtopics: ["Reporting verbs other than said", "Reporting questions with changes in word order", "Reporting commands, requests and advice", "Reporting mixed and exclamatory speech"],
        objectives: ["Use varied reporting verbs accurately", "Report wh- and yes/no questions with correct word order", "Report commands, requests and advice with infinitives", "Report exclamations and mixed utterances"],
        lesson: {
          title: "Advanced Reported Speech",
          summary: "Report questions, commands, suggestions and exclamations precisely.",
          minutes: 45,
          notes: `## Beyond "said"
Choose reporting verbs that show the speaker's purpose:
*advised, warned, begged, ordered, suggested, admitted, denied, promised, complained, insisted, apologised, exclaimed*.

## Questions
- **Yes/no**: *if / whether* + statement order.
  *"Have you finished?" he asked.* → *He asked **whether I had finished**.*
- **Wh-**: wh-word + statement order.
  *"Why are you late?" the teacher asked.* → *The teacher asked **why I was late**.*

## Commands, requests and advice
Verb + object + **(not) to** + verb:
*"Don't touch the wire," she warned us.* → *She **warned us not to touch** the wire.*
*"Please help me," he said.* → *He **begged/asked me to help** him.*
*"You should rest," the doctor said.* → *The doctor **advised me to rest**.*

## Suggestions
*"Let's go to the library," Ada said.* → *Ada **suggested going** / **suggested that we (should) go** to the library.*

## Exclamations and greetings
*"What a lovely gift!" she said.* → *She **exclaimed that it was a lovely gift**.*
*"Good morning," he said.* → *He **greeted** me.*
*"Thank you," she said.* → *She **thanked** me.*

## No backshift
If the reporting verb is present (*says*) or the statement is still true, the tense may stay: *He says he **is** tired.*`,
          examples: `**Example 1.** *"Why are you late?" the teacher asked me.* → The teacher asked me **why I was late**.

**Example 2.** *"Let's go to the library," Ada said.* → Ada **suggested going** to the library.

**Example 3.** *"I didn't take the money," the boy said.* → The boy **denied taking** the money.`,
        },
        questions: [
          ["E", "Report: '\"Why are you late?\" the teacher asked me.'", "The teacher asked me why I was late.", "The teacher asked me why was I late.", "The teacher asked me why are you late.", "The teacher asked me that why I was late.", "Use statement word order and backshift."],
          ["E", "Report: '\"You should rest,\" the doctor said to me.'", "The doctor advised me to rest.", "The doctor ordered me rest.", "The doctor advised me that rest.", "The doctor said me to rest.", "Advice is reported with 'advised + to'."],
          ["E", "Report: '\"Thank you,\" she said to me.'", "She thanked me.", "She said me thank you.", "She told thank you to me.", "She asked me to thank.", "Greetings and thanks are reported with a suitable verb."],
          ["M", "Report: '\"Have you finished?\" he asked me.'", "He asked me whether I had finished.", "He asked me had I finished.", "He asked me have you finished.", "He asked me that I had finished?", "Yes/no questions use 'whether' or 'if'."],
          ["M", "Report: '\"Don't touch the wire,\" she warned us.'", "She warned us not to touch the wire.", "She warned us don't touch the wire.", "She warned us to not touching the wire.", "She warned that we don't touch the wire.", "Negative commands use 'not to'."],
          ["M", "Report: '\"Let's go to the library,\" Ada said.'", "Ada suggested going to the library.", "Ada suggested to go to the library.", "Ada said let's go to the library.", "Ada suggested us to go to the library.", "'Suggest' takes the -ing form or a that-clause."],
          ["M", "Report: '\"I didn't take the money,\" the boy said.'", "The boy denied taking the money.", "The boy denied to take the money.", "The boy admitted taking the money.", "The boy denied that he doesn't take the money.", "'Deny' + -ing reports a denial."],
          ["H", "Report: '\"What a lovely gift!\" she said.'", "She exclaimed that it was a lovely gift.", "She asked what a lovely gift it was.", "She said what a lovely gift!", "She exclaimed what was a lovely gift.", "Exclamations are reported with 'exclaimed that'."],
          ["H", "Report: '\"Please help me carry this box,\" the old woman said to Tunde.'", "The old woman asked Tunde to help her carry the box.", "The old woman asked Tunde please help me carry this box.", "The old woman told to Tunde help her.", "The old woman begged that Tunde helps her carry this box.", "Requests are reported with 'asked + object + to'."],
          ["H", "Report: '\"I will never lie again,\" Musa said.'", "Musa promised that he would never lie again.", "Musa promised that I will never lie again.", "Musa promised never lying again.", "Musa said he will never lied again.", "'Will' becomes 'would'; the pronoun changes."],
        ],
      },
      {
        week: 5,
        title: "Comprehension: tone, mood and attitude",
        subtopics: ["The writer's tone", "The mood of a passage", "The writer's attitude to a subject", "Words that reveal tone and attitude"],
        objectives: ["Distinguish tone, mood and attitude", "Identify the tone of a passage from word choice", "Describe the mood created in a passage", "Support answers with evidence from the text"],
        lesson: {
          title: "Reading Tone, Mood and Attitude",
          summary: "Identify how writers feel and how they make readers feel.",
          minutes: 45,
          notes: `## Definitions
- **Tone**: the writer's **voice** or manner of expression — e.g. *sarcastic, serious, humorous, angry, sympathetic*.
- **Mood**: the **atmosphere** or feeling created in the reader — e.g. *gloomy, tense, joyful, peaceful*.
- **Attitude**: the writer's **opinion** or feelings about the subject — e.g. *critical, approving, indifferent, admiring*.

## Tone words
| Tone | Clue |
|---|---|
| sarcastic / ironic | saying the opposite of what is meant |
| critical | pointing out faults |
| sympathetic | showing pity or understanding |
| nostalgic | longing for the past |
| optimistic / pessimistic | hopeful / expecting the worst |
| objective | neutral, factual |
| humorous | amusing |
| indignant | angry at unfairness |

## Finding evidence
Look at **word choice**, punctuation, imagery and what the writer emphasises.
*Our "efficient" power company gave us electricity for a whole hour last week — what generosity!* → **sarcastic** tone; **critical** attitude.

## Mood
*Thunder rumbled. The lamp flickered and died, and something scraped slowly against the door.* → **tense, fearful** mood.`,
          examples: `**Example 1.** *Ah, those days in the village — the moonlight tales, the smell of fresh palm wine! How I miss them.* Tone: **nostalgic**.

**Example 2.** *The report shows that 42 per cent of the roads are in poor condition.* Tone: **objective**.

**Example 3.** *It is outrageous that pensioners are still unpaid after ten years!* Tone: **indignant**.`,
        },
        questions: [
          ["E", "The writer's voice or manner of expression is called the", "tone", "setting", "plot", "summary", "Tone shows how the writer sounds."],
          ["E", "The atmosphere or feeling a passage creates in the reader is the", "mood", "tone", "theme", "register", "Mood is the reader's emotional experience."],
          ["E", "'The report shows that 42 per cent of the roads are in poor condition.' The tone is", "objective", "humorous", "nostalgic", "sarcastic", "It states facts neutrally."],
          ["M", "'Ah, those days in the village — the moonlight tales, the smell of fresh palm wine! How I miss them.' The tone is", "nostalgic", "angry", "objective", "sarcastic", "The writer longs for the past."],
          ["M", "'Our \"efficient\" power company gave us electricity for a whole hour last week — what generosity!' The tone is", "sarcastic", "admiring", "sympathetic", "neutral", "The writer means the opposite."],
          ["M", "'It is outrageous that pensioners are still unpaid after ten years!' The tone is", "indignant", "nostalgic", "humorous", "indifferent", "The writer is angry at injustice."],
          ["M", "'Thunder rumbled. The lamp flickered and died, and something scraped slowly against the door.' The mood is", "tense", "joyful", "peaceful", "comic", "The details create suspense and fear."],
          ["H", "'Despite the setbacks, the farmers believe next season will bring a bumper harvest.' The attitude expressed is", "optimistic", "pessimistic", "sarcastic", "indifferent", "The farmers expect a good result."],
          ["H", "'The poor widow's children watched silently as the bulldozer flattened their only home.' The writer's attitude towards the family is", "sympathetic", "critical", "indifferent", "humorous", "The details invite pity."],
          ["H", "Which clue most often reveals a writer's tone?", "word choice", "the page number", "the font size", "the number of paragraphs", "Connotations of words reveal attitude."],
        ],
      },
      {
        week: 6,
        title: "Summary: rephrasing in your own words",
        subtopics: ["Why rephrasing matters", "Using synonyms and changing word classes", "Condensing long expressions", "Keeping the original meaning"],
        objectives: ["Rephrase points without changing their meaning", "Use synonyms and change word classes when rephrasing", "Reduce wordy expressions to concise ones", "Avoid lifting whole sentences from the passage"],
        lesson: {
          title: "Summarising in Your Own Words",
          summary: "Express points concisely in your own words while keeping the original meaning.",
          minutes: 45,
          notes: `## Why rephrase?
Examiners reward summaries that show **understanding**. Copying long stretches ("lifting") may lose marks, especially when the lifted sentence contains extra material.

## Techniques
1. **Synonyms**: *commence → begin; purchase → buy; assist → help*.
2. **Change the word class**: *He acted **carelessly** → His **carelessness**…*
3. **Condense** wordy expressions:
| Wordy | Concise |
|---|---|
| at this point in time | now |
| in spite of the fact that | although |
| a large number of | many |
| due to the fact that | because |
| make a decision | decide |
| in the event that | if |
4. **Generalise** lists: *mangoes, oranges and pawpaw* → *fruit*.

## Keep the meaning
✗ Changing the meaning: *Some students cheat* → *Students cheat.* (overgeneralises)
✓ *Some students cheat* → *A number of students engage in malpractice.*

## Practice
*Due to the fact that many roads in the rural areas are in a very bad state, farmers find it extremely difficult to transport their produce to the markets in the towns.*
→ ***Bad rural roads make it hard for farmers to take their produce to town.***`,
          examples: `**Original:** *In spite of the fact that the government has spent a large number of naira on the project, it has not been completed at this point in time.*
**Rephrased:** *Although the government has spent heavily on the project, it is still unfinished.*

**Original:** *People who live in cities buy yams, cassava, maize and rice from the villages.*
**Rephrased:** *City dwellers buy food crops from villages.*`,
        },
        questions: [
          ["E", "Which is the concise form of 'at this point in time'?", "now", "then", "always", "soon after", "It simply means now."],
          ["E", "Which is the concise form of 'due to the fact that'?", "because", "although", "unless", "whereas", "It expresses reason."],
          ["E", "Copying long stretches of the passage in a summary is called", "lifting", "paraphrasing", "condensing", "generalising", "Lifting shows less understanding."],
          ["M", "Which word can replace the list 'mangoes, oranges and pawpaw' in a summary?", "fruit", "vegetables", "cereals", "drinks", "Generalising shortens lists."],
          ["M", "Which is the concise form of 'in spite of the fact that'?", "although", "because", "therefore", "if", "It expresses concession."],
          ["M", "Rephrase: 'The meeting will commence at ten.'", "The meeting will begin at ten.", "The meeting will end at ten.", "The meeting commenced at ten.", "The meeting will be commenced by ten.", "'Commence' means begin."],
          ["M", "Which rephrasing changes the meaning of 'Some students cheat'?", "Students cheat.", "A number of students cheat.", "Certain students engage in cheating.", "Not all students are honest; some cheat.", "It wrongly suggests all students cheat."],
          ["H", "Which is the best summary of: 'Due to the fact that many roads in rural areas are in a very bad state, farmers find it extremely difficult to transport their produce to markets in the towns.'?", "Bad rural roads make it hard for farmers to take produce to town.", "Roads are bad.", "Farmers find it extremely difficult to transport their produce.", "Rural areas have many towns and markets.", "It keeps the full meaning concisely."],
          ["H", "Rephrase using a noun: 'He acted carelessly and caused the fire.'", "His carelessness caused the fire.", "He was a careless fire.", "Careless acting is a fire.", "The fire acted carelessly.", "Changing the adverb to a noun condenses the idea."],
          ["H", "Which is the concise form of 'make a decision about'?", "decide on", "decisive about", "make up decisions", "deciding", "The verb 'decide' replaces the phrase."],
        ],
      },
      {
        week: 7,
        title: "Argumentative essay and debate at senior level",
        subtopics: ["Analysing the motion", "Building a line of argument", "Rebuttal techniques", "Persuasive language and conclusion"],
        objectives: ["Analyse a motion and choose a clear position", "Build a logical chain of arguments", "Rebut opposing arguments effectively and politely", "Use persuasive language within formal limits"],
        lesson: {
          title: "Persuasion at Senior Level",
          summary: "Build and deliver strong, logical arguments for essays and debates.",
          minutes: 45,
          notes: `## Analyse the motion
*"Social media does more harm than good to young people."* — key words: *more harm than good*. You must **compare**, not merely list harms.

## Line of argument
Arrange 3–4 strong points logically, each with **point, explanation, evidence**. Examples of evidence: facts, statistics (reasonable, not invented), examples, expert views, common experience.

## Rebuttal techniques
- **Concede and counter**: *Admittedly, social media spreads news fast; however, it spreads false news just as fast.*
- **Expose weak logic**: show that a conclusion does not follow.
- **Question evidence**: *My opponent's example is a single case, not a general pattern.*

## Persuasive language
- Rhetorical questions: *Can a nation progress if its youth cannot concentrate?*
- Tricolon (rule of three): *We must read, reflect and resist.*
- Inclusive pronouns: *we, us, our*.
- Confident modal verbs: *must, should, cannot*.

## Debate format
Vocatives → introduction of speaker and stance → arguments → rebuttal → conclusion → *Thank you.*
*…I hope I have convinced, not confused, you that the motion should be upheld.*

## Pitfalls
Insults, emotional outbursts, invented statistics, and ignoring the motion's exact wording.`,
          examples: `**Stance:** *I stand firmly to support the motion that social media does more harm than good to young people.*

**Concede and counter:** *Admittedly, social media helps students find learning resources. However, for every hour of learning, many young people spend five hours scrolling aimlessly.*

**Tricolon:** *It distracts our minds, damages our sleep and distorts our values.*`,
        },
        questions: [
          ["E", "In a debate, the statement being argued is called the", "motion", "manifesto", "verdict", "thesis statement of a report", "Debaters support or oppose the motion."],
          ["E", "Answering an opponent's argument is called", "rebuttal", "narration", "description", "summary", "Rebuttal counters the other side."],
          ["E", "Which is a rhetorical question?", "Can a nation progress if its youth cannot concentrate?", "What time is it?", "Where is your pen?", "Did you eat?", "It is asked for effect, not for an answer."],
          ["M", "'Admittedly, social media spreads news fast; however, it spreads false news just as fast.' This technique is", "concede and counter", "narration", "an insult", "a digression", "It accepts a point and then challenges it."],
          ["M", "'It distracts our minds, damages our sleep and distorts our values.' This uses", "the rule of three (tricolon)", "a simile", "an aside", "a euphemism", "Three parallel phrases create rhythm."],
          ["M", "For the motion 'Social media does more harm than good', a debater must", "compare the harms with the benefits", "list only benefits", "discuss only the history of computers", "avoid mentioning harms", "The motion requires a comparison."],
          ["M", "Which pronouns help a speaker build unity with the audience?", "we and our", "it and its", "one and oneself", "he and she", "Inclusive pronouns involve the audience."],
          ["H", "Which is a legitimate way to challenge an opponent's evidence?", "My opponent's example is a single case, not a general pattern.", "My opponent is ugly.", "My opponent comes from a poor home.", "Nobody likes my opponent.", "Challenge the evidence, not the person."],
          ["H", "Which is a weakness in a debate?", "using invented statistics", "using relevant examples", "rebutting politely", "addressing the motion precisely", "Invented data destroys credibility."],
          ["H", "Which conclusion is most suitable for a debate?", "I hope I have convinced, not confused, you that the motion should be upheld. Thank you.", "Yours faithfully.", "That is all, bye.", "Once upon a time, the end.", "It restates the stance and thanks the audience."],
        ],
      },
      {
        week: 8,
        title: "Report writing at senior level",
        subtopics: ["Types of reports", "Investigative reports", "Structure: terms of reference, findings and recommendations", "Objective language and passive forms"],
        objectives: ["Distinguish reports of events from investigative reports", "Structure a formal report with terms of reference, findings and recommendations", "Use objective, impersonal language", "Write a report for a school or community body"],
        lesson: {
          title: "Formal Reports",
          summary: "Write investigative reports with clear findings and recommendations.",
          minutes: 45,
          notes: `## Types
- **Report of an event**: e.g. the school's Speech and Prize-giving Day.
- **Investigative report**: e.g. *the causes of lateness among students*, requested by an authority.

## Structure of an investigative report
1. **Title**: *REPORT ON THE CAUSES OF FREQUENT LATENESS AMONG SS2 STUDENTS*
2. **To / From / Date** (in some formats) or an introductory paragraph.
3. **Terms of reference**: who requested the report and what was to be investigated.
4. **Procedure/method**: how information was gathered (interviews, questionnaires, observation).
5. **Findings**: numbered or in paragraphs — facts discovered.
6. **Recommendations**: practical actions.
7. **Conclusion**, then **name, position, signature, date**.

## Language
- Objective and **impersonal**: *It was observed that…*, *Students were interviewed…*
- Passive forms are common.
- Precise details: numbers, dates, places.
- Past tense for findings; *should* for recommendations: *The school gate should be opened at 7 a.m.*

## Report or article?
A report informs an authority with **findings and recommendations**; an article informs or persuades a **general readership**.`,
          examples: `**Terms of reference:** *At the request of the Principal, the Prefects' Council investigated the causes of frequent lateness among SS2 students between 5th and 16th October, 2026.*

**Finding:** *It was found that 38 of the 120 students interviewed live more than 10 km from the school.*

**Recommendation:** *The school should consider providing a morning bus service on the two busiest routes.*`,
        },
        questions: [
          ["E", "A report that looks into the causes of a problem is", "an investigative report", "a narrative essay", "an informal letter", "a poem", "It investigates and recommends."],
          ["E", "Which section states practical actions to take?", "recommendations", "terms of reference", "title", "procedure", "Recommendations suggest solutions."],
          ["E", "The language of a formal report should be", "objective and impersonal", "emotional and slangy", "humorous", "poetic", "Reports present facts fairly."],
          ["M", "The 'terms of reference' in a report state", "who requested the report and what was to be investigated", "the writer's hobbies", "the recommendations", "the conclusion only", "They define the report's scope."],
          ["M", "Which sentence suits the findings section?", "It was found that 38 of the 120 students interviewed live more than 10 km from school.", "I think students are lazy.", "Lateness is bad, you know.", "Let us all come early, please!", "It is a precise, objective finding."],
          ["M", "The 'procedure' section of a report explains", "how the information was gathered", "who wrote the report", "the recommendations", "the title", "It describes the method."],
          ["M", "Which modal is most common in recommendations?", "should", "might have", "could have been", "used to", "Recommendations propose what should be done."],
          ["H", "Which sentence uses impersonal language suited to a report?", "Students were interviewed during break periods.", "I went and asked my friends.", "We just chatted with some guys.", "My friends and I did a small gist.", "The passive keeps the focus on the action."],
          ["H", "How does a report differ from an article?", "A report informs an authority with findings and recommendations; an article addresses a general readership", "A report must rhyme", "An article has terms of reference", "They are the same", "Purpose and audience differ."],
          ["H", "Which is the best title for an investigative report?", "REPORT ON THE CAUSES OF FREQUENT LATENESS AMONG SS2 STUDENTS", "LATENESS", "MY THOUGHTS", "READ THIS", "It is precise and informative."],
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
        title: "Oral English: rhymes",
        subtopics: ["What makes words rhyme", "Rhymes with different spellings", "Words that look alike but do not rhyme", "Rhyme questions in examinations"],
        objectives: ["Explain what makes two words rhyme", "Identify rhyming words despite different spellings", "Recognise eye rhymes that do not truly rhyme", "Answer rhyme questions accurately"],
        lesson: {
          title: "Words That Rhyme",
          summary: "Identify true rhymes by sound, not spelling.",
          minutes: 40,
          notes: `## What is a rhyme?
Two words rhyme when they share the **same vowel sound and any following consonant sounds** in the final stressed syllable:
*cat /kæt/ – hat /hæt/*, *light – bite*, *nation – station*.

## Same sound, different spelling
| Rhyme | Spellings |
|---|---|
| /eɪt/ | eight, great, late, wait, straight |
| /uː/ | blue, shoe, through, grew, flew |
| /ɔː/ | saw, four, door, pour, war |
| /ʌf/ | rough, stuff, tough, enough |
| /aɪt/ | height, bite, kite, might |
| /ɜːd/ | word, bird, heard, curd |

## Eye rhymes (look alike, sound different)
*love / move*, *cough / bough*, *home / come*, *food / blood*, *said / paid*, *great / meat*, *though / through*.

## Examination format
*Choose the word that rhymes with* **height**: *weight, bite, heat, hate* → **bite**.

## Strategy
Say the target word and each option **aloud in your head**; compare only the final vowel and consonants.`,
          examples: `**Example 1.** Which rhymes with *rough*: *though, stuff, through, bough*? *Answer:* **stuff**.

**Example 2.** Which rhymes with *height*: *weight, bite, heat, hate*? *Answer:* **bite**.

**Example 3.** Do *love* and *move* rhyme? *Answer:* **No** — /ʌv/ and /uːv/ (an eye rhyme).`,
        },
        questions: [
          ["E", "Which word rhymes with 'rough'?", "stuff", "though", "through", "bough", "Both end in /ʌf/."],
          ["E", "Which word rhymes with 'height'?", "bite", "weight", "heat", "hate", "Both end in /aɪt/."],
          ["E", "Which word rhymes with 'eight'?", "straight", "height", "fight", "wheat", "Both end in /eɪt/."],
          ["M", "Which word rhymes with 'word'?", "bird", "ward", "wood", "sword", "Both end in /ɜːd/."],
          ["M", "Which word rhymes with 'blood'?", "mud", "food", "good", "mood", "Both end in /ʌd/."],
          ["M", "Which word rhymes with 'said'?", "bed", "paid", "raid", "seed", "'Said' is /sed/."],
          ["M", "Which word rhymes with 'door'?", "four", "dear", "dour", "hour", "Both end in /ɔː/ in RP."],
          ["H", "Which pair is an eye rhyme (looks alike but does not rhyme)?", "love – move", "cat – hat", "light – bite", "blue – shoe", "/ʌv/ and /uːv/ differ."],
          ["H", "Which word rhymes with 'through'?", "grew", "though", "rough", "bough", "Both end in /uː/."],
          ["H", "Which word rhymes with 'come'?", "hum", "home", "comb", "dome", "Both end in /ʌm/."],
        ],
      },
      {
        week: 2,
        title: "Conditionals and wishes: advanced forms",
        subtopics: ["Mixed conditionals", "Inversion in conditionals", "Wishes about present, past and future", "Alternatives to if"],
        objectives: ["Form mixed conditional sentences", "Use inverted conditionals in formal English", "Express wishes and regrets correctly", "Use alternatives such as provided, unless, supposing and otherwise"],
        lesson: {
          title: "Advanced Conditionals and Wishes",
          summary: "Use mixed and inverted conditionals and express wishes precisely.",
          minutes: 45,
          notes: `## Revision
Zero (general truth), first (real future), second (imaginary present), third (imaginary past).

## Mixed conditionals
- Past condition → present result:
  *If I **had studied** medicine, I **would be** a doctor now.*
- Present condition → past result:
  *If she **were** more careful, she **wouldn't have lost** her phone.*

## Inversion (formal)
The *if* is dropped and the auxiliary comes first:
| Normal | Inverted |
|---|---|
| If I were you, … | **Were I** you, … |
| If he had known, … | **Had he known**, … |
| If you should need help, … | **Should you need** help, … |

## Wishes
| Wish about | Form | Example |
|---|---|---|
| present | past simple / were | *I wish I **were** taller.* |
| past (regret) | past perfect | *I wish I **had listened** to her.* |
| future / annoyance | would | *I wish you **would stop** talking.* |
*If only* is a stronger form: *If only I **had** more time!*

## Alternatives to if
*unless* (= if not), *provided / providing (that)*, *as long as*, *supposing*, *in case*, *otherwise*:
*You may go out **provided that** you finish your homework.*`,
          examples: `**Example 1.** *If I ___ (study) medicine, I would be a doctor now.* *Answer:* **had studied**.

**Example 2.** Invert: *If he had known, he would have come.* *Answer:* **Had he known**, he would have come.

**Example 3.** *I wish I ___ (listen) to my mother yesterday.* *Answer:* **had listened**.`,
        },
        questions: [
          ["E", "Choose the correct option: 'I wish I ___ to my mother yesterday.'", "had listened", "listened", "listen", "would listen", "Regret about the past uses the past perfect."],
          ["E", "Choose the correct option: 'You may go out ___ you finish your homework.'", "provided that", "unless", "otherwise", "whereas", "'Provided that' means on condition that."],
          ["E", "Choose the correct option: 'I wish you ___ stop making that noise.'", "would", "will", "had", "are", "'Wish + would' expresses annoyance about a present habit."],
          ["M", "Choose the correct option: 'If I had studied medicine, I ___ a doctor now.'", "would be", "would have been", "will be", "am", "Mixed conditional: past condition, present result."],
          ["M", "Choose the correct option: '___ he known, he would have come.'", "Had", "If had", "Has", "Would", "Inverted third conditional: Had + subject + past participle."],
          ["M", "Choose the correct option: '___ I you, I would accept the offer.'", "Were", "Was", "Am", "If was", "Inverted second conditional: Were + subject."],
          ["M", "Choose the correct option: '___ you need help, call this number.'", "Should", "Would", "Had", "Were to have", "Inverted first conditional uses 'Should'."],
          ["H", "Choose the correct option: 'If she were more careful, she ___ her phone last week.'", "wouldn't have lost", "wouldn't lose", "won't lose", "didn't lose", "Mixed conditional: present condition, past result."],
          ["H", "Choose the correct option: 'Hurry up, ___ you will miss the bus.'", "otherwise", "provided", "unless", "supposing", "'Otherwise' means 'if not'."],
          ["H", "Choose the correct option: 'If only I ___ more time to prepare!'", "had", "have", "will have", "am having", "'If only' + past simple expresses a present wish."],
        ],
      },
      {
        week: 3,
        title: "Gerunds and infinitives",
        subtopics: ["The gerund as a noun", "The to-infinitive and bare infinitive", "Verbs followed by the gerund or the infinitive", "Verbs whose meaning changes"],
        objectives: ["Identify gerunds and infinitives and their functions", "Use the correct form after common verbs", "Use the bare infinitive after modals, make and let", "Explain meaning changes with stop, remember, forget and try"],
        lesson: {
          title: "Gerunds and Infinitives",
          summary: "Choose correctly between -ing forms and infinitives after verbs.",
          minutes: 45,
          notes: `## The gerund
A verb + **-ing** used as a **noun**:
- subject: ***Swimming** is good exercise.*
- object: *I enjoy **reading**.*
- after prepositions: *She is good at **drawing**. He left without **saying** goodbye.*

## The infinitive
- **to-infinitive**: *I want **to travel**.*
- **bare infinitive** (no *to*) after modals, *make, let, help (optional)*, *had better, would rather*:
  *She made me **laugh**. Let him **go**. You had better **leave**.*

## Verbs + gerund
*enjoy, avoid, finish, mind, deny, admit, suggest, consider, practise, risk, keep, can't help, look forward to, be used to, object to*
*I look forward to **seeing** you.* (not *to see* — *to* is a preposition here)

## Verbs + to-infinitive
*want, hope, decide, agree, refuse, promise, plan, manage, afford, expect, offer, fail*

## Meaning changes
| Verb | + gerund | + infinitive |
|---|---|---|
| stop | quit an activity: *He stopped **smoking**.* | stop in order to: *He stopped **to smoke**.* |
| remember | recall a past action: *I remember **locking** the door.* | not forget a duty: *Remember **to lock** the door.* |
| forget | forget a past event | fail to do a duty |
| try | experiment: *Try **pressing** the red button.* | make an effort: *I tried **to lift** it.* |`,
          examples: `**Example 1.** *I look forward to ___ (meet) you.* *Answer:* **meeting**.

**Example 2.** *The teacher made us ___ (rewrite) the essay.* *Answer:* **rewrite** (bare infinitive).

**Example 3.** *He stopped smoking* vs *He stopped to smoke*: the first means he **quit**; the second means he **paused in order to** smoke.`,
        },
        questions: [
          ["E", "Choose the correct option: 'I enjoy ___ novels.'", "reading", "to read", "read", "to reading", "'Enjoy' is followed by a gerund."],
          ["E", "Choose the correct option: 'She wants ___ abroad.'", "to travel", "travelling", "travel", "travelled", "'Want' is followed by the to-infinitive."],
          ["E", "In 'Swimming is good exercise', 'Swimming' is", "a gerund functioning as subject", "a present participle adjective", "an infinitive", "a finite verb", "It is an -ing noun acting as subject."],
          ["M", "Choose the correct option: 'I look forward to ___ you.'", "meeting", "meet", "met", "have met", "'To' is a preposition here, so a gerund follows."],
          ["M", "Choose the correct option: 'The teacher made us ___ the essay.'", "rewrite", "to rewrite", "rewriting", "rewrote", "'Make' takes the bare infinitive."],
          ["M", "Choose the correct option: 'He denied ___ the window.'", "breaking", "to break", "break", "broke", "'Deny' is followed by a gerund."],
          ["M", "Choose the correct option: 'We cannot afford ___ a new car.'", "to buy", "buying", "buy", "bought", "'Afford' is followed by the to-infinitive."],
          ["H", "'He stopped smoking' means he", "gave up smoking", "paused in order to smoke", "started smoking", "was prevented from walking", "Stop + gerund means quit the activity."],
          ["H", "'Remember to lock the door' means", "don't forget to lock it (a future duty)", "recall that you locked it earlier", "you locked it yesterday", "never lock the door", "Remember + infinitive refers to a duty."],
          ["H", "Choose the correct option: 'You had better ___ now.'", "leave", "to leave", "leaving", "left", "'Had better' takes the bare infinitive."],
        ],
      },
      {
        week: 4,
        title: "Phrasal verbs at senior level",
        subtopics: ["Phrasal verbs with come, go and run", "Phrasal verbs with bring, carry and set", "Three-part phrasal verbs", "Formal equivalents of phrasal verbs"],
        objectives: ["Explain the meanings of senior-level phrasal verbs", "Use three-part phrasal verbs correctly", "Choose formal single-word equivalents in formal writing", "Interpret phrasal verbs in examination sentences"],
        lesson: {
          title: "More Phrasal Verbs",
          summary: "Master phrasal verbs frequently tested at senior level and their formal equivalents.",
          minutes: 40,
          notes: `## Common senior-level phrasal verbs
| Phrasal verb | Meaning | Formal equivalent |
|---|---|---|
| come across | find by chance | encounter |
| come up with | produce (an idea) | devise |
| go through | experience; examine | undergo; examine |
| go off | explode; ring (alarm) | detonate |
| run into | meet unexpectedly | encounter |
| run over | knock down with a vehicle | — |
| bring up | raise (a child); mention | rear; raise |
| bring about | cause | cause |
| carry out | perform | conduct, execute |
| carry on | continue | continue |
| set up | establish | establish |
| set off | begin a journey | depart |
| turn up | arrive, appear | arrive |
| make up | invent (a story); reconcile | fabricate; reconcile |
| look down on | despise | despise |
| do away with | abolish | abolish |
| stand in for | replace temporarily | deputise |
| cut down on | reduce | reduce |

## Register
Phrasal verbs are common in speech and informal writing. In **formal** letters and reports, prefer single-word equivalents: *The committee will **investigate*** rather than *look into*.

## Context
Many phrasal verbs have several meanings: *The bomb **went off*** (exploded) / *The milk **went off*** (became sour).`,
          examples: `**Example 1.** *The government has decided to do away with the old tax.* Meaning: **abolish**.

**Example 2.** *She came up with a brilliant plan.* Meaning: **devised / produced**.

**Example 3.** *The vice-principal stood in for the principal at the ceremony.* Meaning: **replaced temporarily**.`,
        },
        questions: [
          ["E", "'I came across an old photograph' means I", "found it by chance", "tore it", "posted it", "painted it", "'Come across' means find by chance."],
          ["E", "'The travellers set off at dawn' means they", "began their journey", "arrived", "went to sleep", "cancelled the trip", "'Set off' means depart."],
          ["E", "'The researchers carried out a survey' means they", "conducted a survey", "cancelled a survey", "carried survey papers", "ignored a survey", "'Carry out' means perform."],
          ["M", "'The government decided to do away with the old tax' means it decided to", "abolish it", "increase it", "introduce it", "collect it", "'Do away with' means abolish."],
          ["M", "'She came up with a brilliant plan' means she", "devised a plan", "rejected a plan", "copied a plan", "forgot a plan", "'Come up with' means produce an idea."],
          ["M", "'The vice-principal stood in for the principal' means he", "replaced the principal temporarily", "stood beside the principal", "opposed the principal", "waited for the principal", "'Stand in for' means deputise."],
          ["M", "'The doctor advised him to cut down on sugar' means to", "reduce his sugar intake", "stop eating completely", "buy more sugar", "cut sugar into pieces", "'Cut down on' means reduce."],
          ["H", "'The rich man looks down on his neighbours' means he", "despises them", "watches them from upstairs", "admires them", "helps them", "'Look down on' means regard as inferior."],
          ["H", "'The new policy brought about many changes' means it", "caused many changes", "prevented changes", "reported changes", "reversed changes", "'Bring about' means cause."],
          ["H", "'The bomb went off in the empty building' means the bomb", "exploded", "was removed", "was switched off", "became old", "'Go off' here means explode."],
        ],
      },
      {
        week: 5,
        title: "Speech writing at senior level",
        subtopics: ["Speeches for formal occasions", "Welcome and farewell speeches", "Speeches on social issues", "Delivery-oriented writing"],
        objectives: ["Write speeches suited to formal occasions", "Use correct protocol in vocatives", "Organise a speech on a social issue persuasively", "Write in a style suited to oral delivery"],
        lesson: {
          title: "Speeches for Occasions and Issues",
          summary: "Write polished speeches for ceremonies and for persuading audiences on issues.",
          minutes: 45,
          notes: `## Common speech tasks
- A **welcome address** to a visiting dignitary.
- A **farewell / valedictory** speech as Senior Prefect.
- A **talk** to students on a social issue (cultism, drug abuse, cleanliness).
- A speech at a **community** gathering.

## Protocol (vocatives)
Arrange from highest to lowest:
*The Chairman of the Occasion, the Commissioner for Education, the Principal, Members of the PTA, Staff, Invited Guests, Fellow Students, Ladies and Gentlemen.*

## Structure
1. Vocatives and a courteous opening: *It is my singular honour to…*
2. Purpose of the speech.
3. Body: organised points — e.g. **causes, effects, solutions** for an issue; or **achievements, gratitude, challenges, requests** for a welcome address.
4. Conclusion: summary, appeal and thanks.

## Style for delivery
- Short, clear sentences; signposting (*First…, Let me now turn to…*).
- Direct address: *you, we*.
- Repetition and rhetorical questions for emphasis.
- Appropriately formal register; avoid slang.`,
          examples: `**Welcome address opening:** *It is my singular honour, on behalf of the students of Precious PS College International, to welcome the Honourable Commissioner to our school.*

**Signposting:** *Let me now turn to the challenges facing our school.*

**Appeal:** *We humbly request your assistance in completing our science laboratory.*`,
        },
        questions: [
          ["E", "Which occasion calls for a welcome address?", "a visit by the Commissioner for Education", "writing to a pen friend", "a newspaper editorial", "keeping a diary", "A welcome address greets a visitor."],
          ["E", "A speech given when leaving school is a", "valedictory (farewell) speech", "welcome address", "sermon", "debate", "Valedictory means farewell."],
          ["E", "The forms of address at the beginning of a speech should follow", "order of importance", "alphabetical order", "age from youngest", "random order", "Protocol respects rank."],
          ["M", "Which opening is most suitable for a formal welcome address?", "It is my singular honour to welcome you to our school.", "Hey everyone, what's up?", "Dear Sir, I write to complain.", "Once upon a time there was a school.", "It is formal and courteous."],
          ["M", "'Let me now turn to the challenges facing our school' is an example of", "signposting", "a rhetorical question", "a euphemism", "a vocative", "It guides listeners through the speech."],
          ["M", "A speech on cultism to fellow students could be organised under", "causes, effects and solutions", "salutation, heading and subscription", "title and byline only", "terms of reference and procedure", "This structure suits a social issue."],
          ["M", "Which sentence suits a speech rather than a letter?", "Fellow students, can we afford to ignore this danger?", "Yours faithfully,", "I write to apply for the post.", "Dear Sir,", "It directly addresses listeners."],
          ["H", "Who should be mentioned FIRST among: Fellow Students, the Chairman of the Occasion, Staff, the Principal?", "the Chairman of the Occasion", "Fellow Students", "Staff", "the Principal", "The chairman presides over the occasion."],
          ["H", "Which is a polite request suitable for a welcome address?", "We humbly request your assistance in completing our laboratory.", "You must give us money now.", "Please do the needful asap.", "Give us a lab or else.", "It is respectful and formal."],
          ["H", "Why are short, clear sentences useful in speeches?", "They are easier for listeners to follow", "They make speeches look longer", "They are required in letters", "They remove the need for vocatives", "Listeners cannot reread a sentence."],
        ],
      },
      {
        week: 6,
        title: "Register: science and technology",
        subtopics: ["Vocabulary of scientific enquiry", "Vocabulary of information technology", "Vocabulary of engineering and energy", "Using register accurately"],
        objectives: ["Use vocabulary of scientific enquiry accurately", "Use ICT vocabulary correctly", "Use vocabulary of engineering and energy", "Complete sentences with the correct register words"],
        lesson: {
          title: "Register: Science and Technology",
          summary: "Build vocabulary for science, ICT and engineering contexts.",
          minutes: 40,
          notes: `## Scientific enquiry
| Word | Meaning |
|---|---|
| hypothesis | a proposed explanation to be tested |
| experiment | a test carried out to investigate |
| apparatus | equipment used in an experiment |
| variable | a factor that can change |
| observation | what is noticed or measured |
| conclusion | the final judgement from results |
| specimen | a sample for study |
| laboratory | room for scientific work |

## Information technology
*hardware, software, download, upload, browser, password, virus, malware, bandwidth, cloud storage, database, keyboard, hyperlink, algorithm, cursor, encryption, app*

## Engineering and energy
| Word | Meaning |
|---|---|
| blueprint | detailed technical plan |
| prototype | first working model |
| generator | machine producing electricity |
| turbine | machine turned by water, steam or wind |
| solar panel | device converting sunlight to electricity |
| circuit | path for electric current |
| voltage | electrical force |
| renewable energy | energy from sources that are replenished |`,
          examples: `**Example 1.** *The scientist tested her ___ in a series of experiments.* *Answer:* **hypothesis**.

**Example 2.** *Never share your ___ with anyone.* *Answer:* **password**.

**Example 3.** *Engineers built a ___ before mass-producing the car.* *Answer:* **prototype**.`,
        },
        questions: [
          ["E", "Equipment used in an experiment is called", "apparatus", "specimen", "hypothesis", "blueprint", "Apparatus refers to equipment."],
          ["E", "The physical parts of a computer are its", "hardware", "software", "passwords", "downloads", "Hardware is the physical equipment."],
          ["E", "A machine that produces electricity is a", "generator", "keyboard", "specimen", "browser", "Generators convert energy into electricity."],
          ["M", "A proposed explanation to be tested by experiment is a", "hypothesis", "conclusion", "prototype", "database", "Scientists test hypotheses."],
          ["M", "The first working model of a new product is a", "prototype", "blueprint", "turbine", "specimen", "Prototypes are tested before production."],
          ["M", "A program designed to damage or disrupt a computer is", "malware", "hardware", "bandwidth", "a hyperlink", "Malware is malicious software."],
          ["M", "A sample of a plant or animal kept for study is a", "specimen", "variable", "circuit", "cursor", "Specimens are studied in science."],
          ["H", "Energy from sources such as sunlight and wind is called", "renewable energy", "voltage", "bandwidth", "encryption", "These sources are replenished naturally."],
          ["H", "The process of coding data so that only authorised people can read it is", "encryption", "download", "observation", "circuit", "Encryption protects information."],
          ["H", "A factor in an experiment that can change is a", "variable", "blueprint", "specimen jar", "turbine", "Variables are changed or measured."],
        ],
      },
      {
        week: 7,
        title: "Figurative language in comprehension",
        subtopics: ["Identifying figures of speech in passages", "Explaining the effect of figures of speech", "Interpreting imagery", "Answering 'What does the writer mean by…' questions"],
        objectives: ["Identify figures of speech used in passages", "Explain the meaning and effect of figurative expressions", "Interpret imagery in context", "Write precise answers to interpretation questions"],
        lesson: {
          title: "Interpreting Figurative Language",
          summary: "Name, explain and interpret figurative expressions in comprehension passages.",
          minutes: 45,
          notes: `## Typical questions
- *"…the city is a hungry monster…" What figure of speech is used?*
- *What does the writer mean by "…"?*
- *What is the effect of the expression "…"?*

## Answering: name + meaning + effect
**Expression:** *"The city is a hungry monster that swallows the young."*
- **Figure:** metaphor.
- **Meaning:** the city attracts young people and absorbs or destroys them.
- **Effect:** it makes the city seem dangerous and frightening.

## Imagery
Words that create pictures in the mind:
- visual: *golden light spilled across the field*
- auditory: *the clatter of pots*
- tactile: *the rough bark scraped his palms*

## Frequently used figures
simile, metaphor, personification, hyperbole, irony, euphemism, oxymoron, paradox, synecdoche (part for whole: *all hands on deck*), metonymy (associated word: *the Crown*, *Aso Rock* for the Presidency), litotes (understatement: *not bad at all*), rhetorical question, antithesis (*speech is silver, silence is golden*).

## Tips
Don't just name the figure; explain **what it means in context** and **why the writer used it**.`,
          examples: `**Expression:** *"Aso Rock has announced new measures."* **Figure:** metonymy — *Aso Rock* stands for the **Presidency**.

**Expression:** *"We need more hands on the farm."* **Figure:** synecdoche — *hands* means **workers**.

**Expression:** *"His performance was not bad at all."* **Figure:** litotes — understatement meaning **quite good**.`,
        },
        questions: [
          ["E", "'The city is a hungry monster that swallows the young' is an example of", "metaphor", "simile", "euphemism", "onomatopoeia", "It compares directly without 'like' or 'as'."],
          ["E", "Words that create pictures in the reader's mind are called", "imagery", "register", "concord", "syntax", "Imagery appeals to the senses."],
          ["E", "'The clatter of pots woke me' contains", "auditory imagery", "visual imagery only", "a euphemism", "an oxymoron", "It appeals to hearing."],
          ["M", "'Aso Rock has announced new measures.' The expression 'Aso Rock' is an example of", "metonymy", "simile", "hyperbole", "alliteration", "It stands for the Presidency."],
          ["M", "'We need more hands on the farm.' 'Hands' is an example of", "synecdoche", "metonymy of place", "euphemism", "irony", "A part (hands) represents the whole (workers)."],
          ["M", "'His performance was not bad at all' is an example of", "litotes", "hyperbole", "simile", "apostrophe", "Understatement using a negative."],
          ["M", "'Speech is silver, silence is golden' is an example of", "antithesis", "onomatopoeia", "synecdoche", "euphemism", "Contrasting ideas are placed side by side."],
          ["H", "What is the effect of 'The city is a hungry monster that swallows the young'?", "It presents the city as dangerous and destructive to young people", "It shows that the city serves food", "It shows the city is small", "It praises city life", "The metaphor creates a frightening image."],
          ["H", "A good answer to 'What does the writer mean by…?' should", "explain the meaning in context in plain words", "only name the figure of speech", "copy the expression", "give a dictionary definition of each word", "It must interpret the idea."],
          ["H", "'Golden light spilled across the field' contains", "visual imagery and metaphor", "auditory imagery", "litotes", "a rhetorical question", "Light is pictured as a liquid that spills."],
        ],
      },
      {
        week: 8,
        title: "Creative writing: the short story",
        subtopics: ["Features of the short story", "Creating believable characters", "Building suspense", "Effective endings"],
        objectives: ["State the features of a short story", "Create characters through action and dialogue", "Build suspense through pacing and detail", "Write a satisfying ending linked to the theme"],
        lesson: {
          title: "Crafting a Short Story",
          summary: "Write short stories with vivid characters, suspense and meaningful endings.",
          minutes: 45,
          notes: `## Features
- **Brevity**: a single main plot, few characters, limited time span.
- **Unity**: every detail contributes to the story's effect.
- **Conflict** and **resolution**.
- A clear **theme**.

## Characters
Show personality through **action, dialogue and reaction**:
✗ *Uche was greedy.*
✓ *Uche counted the coins twice, then slipped the largest one into his own pocket.*

## Suspense
- Delay information; raise questions in the reader's mind.
- Vary sentence length — short sentences at tense moments: *He turned. Nobody. Then the door creaked.*
- Use foreshadowing — hints of what is to come.

## Endings
- **Resolved**: the conflict is settled.
- **Twist**: an unexpected but logical outcome.
- **Reflective**: the narrator learns a lesson.
Avoid "…and then I woke up; it was a dream" — it cancels the story.

## Language
Consistent past tense, correctly punctuated dialogue, vivid verbs (*stumbled, glared, whispered*) rather than weak ones (*went, looked, said*).`,
          examples: `**Characterisation:** *Mrs Eze never raised her voice. She only lowered her glasses and waited — and the whole class fell silent.*

**Suspense:** *The envelope lay on the table. My name. The university's crest. I reached for it, then stopped.*

**Foreshadowing:** *Nobody noticed the thin crack running along the bridge's railing.*`,
        },
        questions: [
          ["E", "A short story usually has", "one main plot and few characters", "many unrelated plots", "no conflict", "no characters", "Brevity demands focus."],
          ["E", "Hints about what will happen later in a story are called", "foreshadowing", "flashback", "dialogue", "exposition", "Foreshadowing prepares the reader."],
          ["E", "Which verb is most vivid?", "stumbled", "went", "did", "got", "It shows how the character moved."],
          ["M", "Which sentence shows rather than tells that Uche was greedy?", "Uche counted the coins twice, then slipped the largest one into his own pocket.", "Uche was greedy.", "Greed was in Uche.", "Uche was a greedy boy who was greedy.", "The action reveals the trait."],
          ["M", "Short sentences at tense moments help to", "build suspense", "slow down the plot", "confuse the tense", "introduce characters", "They create tension and pace."],
          ["M", "A twist ending is", "an unexpected but logical outcome", "a random ending with no link to the story", "the same as the opening", "a list of characters", "Twists surprise yet make sense."],
          ["M", "Why should writers avoid the ending '…and then I woke up; it was a dream'?", "It cancels the story's events and weakens its impact", "Dreams are forbidden in English", "It is too long", "It uses the past tense", "It is an unsatisfying cliché."],
          ["H", "'Nobody noticed the thin crack running along the bridge's railing' is an example of", "foreshadowing", "flashback", "resolution", "a subscription", "It hints at a future disaster."],
          ["H", "Unity in a short story means", "every detail contributes to the overall effect", "all characters are united", "the story has one paragraph", "the story rhymes", "Nothing is irrelevant."],
          ["H", "'Mrs Eze never raised her voice. She only lowered her glasses and waited — and the whole class fell silent.' What does this reveal about Mrs Eze?", "She has quiet authority.", "She is shy and weak.", "She cannot see well.", "She is angry and loud.", "The class's reaction reveals her authority."],
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
        title: "Modals of deduction and past modals",
        subtopics: ["Must, can't and might for deduction", "Past deductions with have + past participle", "Should have and ought to have for criticism", "Needn't have versus didn't need to"],
        objectives: ["Use modals to express degrees of certainty", "Make deductions about the past with modal perfect forms", "Express criticism and regret with should have", "Distinguish needn't have from didn't need to"],
        lesson: {
          title: "Deduction and Past Modals",
          summary: "Express certainty, possibility and criticism about present and past events.",
          minutes: 40,
          notes: `## Present deduction
| Certainty | Modal | Example |
|---|---|---|
| almost certain (yes) | must | *She **must** be at home; her car is outside.* |
| possible | may / might / could | *He **might** be in the library.* |
| almost certain (no) | can't / couldn't | *That **can't** be Tunde; he's in Abuja.* |

## Past deduction: modal + have + past participle
- *The ground is wet. It **must have rained**.*
- *She **might have missed** the bus.*
- *He **can't have stolen** it; he was with me all day.*

## Criticism and regret
- *You **should have told** me.* (you didn't — criticism)
- *I **ought to have studied** harder.* (regret)
- *You **shouldn't have shouted** at her.*

## Needn't have vs didn't need to
- *You **needn't have bought** bread; we had some.* → you bought it, but it was unnecessary.
- *I **didn't need to buy** bread, so I didn't.* → it was unnecessary (and usually not done).

## Could have
Unused past ability or possibility: *You **could have won** if you had trained.*`,
          examples: `**Example 1.** *The ground is wet. It ___ rained.* *Answer:* **must have**.

**Example 2.** *He ___ stolen the phone; he was with me all day.* *Answer:* **can't have**.

**Example 3.** *You ___ cooked; we have already eaten.* (you did cook) *Answer:* **needn't have**.`,
        },
        questions: [
          ["E", "Choose the correct option: 'The ground is wet. It ___ rained.'", "must have", "can't have", "needn't have", "should have", "The evidence makes it almost certain."],
          ["E", "Choose the correct option: 'Her car is outside, so she ___ be at home.'", "must", "can't", "needn't", "shouldn't", "'Must' expresses a confident deduction."],
          ["E", "Choose the correct option: 'That ___ be Tunde; he travelled to Abuja yesterday.'", "can't", "must", "should", "ought to", "'Can't' expresses near-certainty that something is false."],
          ["M", "Choose the correct option: 'He ___ stolen the phone; he was with me all day.'", "can't have", "must have", "should have", "might have to", "It is impossible that he stole it."],
          ["M", "Choose the correct option: 'You ___ told me about the meeting; I would have come.'", "should have", "must have", "can't have", "needn't", "'Should have' criticises a past failure."],
          ["M", "Choose the correct option: 'She is late. She ___ missed the bus.'", "might have", "can't have", "needn't have", "should", "'Might have' expresses past possibility."],
          ["M", "'I ought to have studied harder' expresses", "regret about the past", "a future plan", "a present ability", "permission", "The speaker didn't study hard enough."],
          ["H", "'You needn't have bought bread' means", "you bought bread, but it was unnecessary", "you did not buy bread", "you must buy bread", "you will buy bread tomorrow", "Needn't have + past participle refers to an unnecessary past action."],
          ["H", "Choose the correct option: 'You ___ won the race if you had trained harder.'", "could have", "must have", "can't have", "needn't have", "'Could have' shows unused past possibility."],
          ["H", "Choose the correct option: 'I ___ buy bread, so I went straight home.'", "didn't need to", "needn't have", "mustn't have", "couldn't have", "It was unnecessary and was not done."],
        ],
      },
      {
        week: 2,
        title: "Punctuation: advanced uses",
        subtopics: ["Commas in complex sentences", "The semicolon and colon", "The dash, hyphen and brackets", "Punctuation errors that change meaning"],
        objectives: ["Use commas correctly with clauses, appositives and introductory elements", "Use semicolons and colons accurately", "Distinguish the dash from the hyphen and use brackets", "Correct punctuation errors such as comma splices"],
        lesson: {
          title: "Punctuation for Precision",
          summary: "Use advanced punctuation to make meaning clear and avoid common errors.",
          minutes: 45,
          notes: `## Commas
- after introductory elements: *However, the plan failed.*
- around **appositives**: *Mr Okon, **our principal**, spoke.*
- around **non-defining** clauses: *Kano, **which is ancient**, is busy.*
- before coordinating conjunctions joining clauses: *It rained, **but** we played.*
- **Comma splice** (error): ✗ *It rained, we played.* ✓ *It rained; we played.* / *It rained, but we played.*

## Semicolon (;)
- joins related main clauses: *The shop was closed; we went home.*
- before conjunctive adverbs: *It was late; **however**, we continued.*
- separates list items that contain commas.

## Colon (:)
Introduces a list, explanation, example or quotation after a **complete** clause:
*He had one aim: to win.*

## Dash (—) and hyphen (-)
- **Dash**: dramatic pause or interruption — *She opened the box — empty.*
- **Hyphen**: joins words or parts — *well-known, twenty-one, ex-student, re-enter*.
  Compound adjectives before a noun: *a **five-year-old** girl* (but *the girl is five years old*).

## Brackets ( )
Enclose extra information: *The WAEC (West African Examinations Council) released the results.*

## Punctuation changes meaning
*Let's eat, Grandma!* vs *Let's eat Grandma!*`,
          examples: `**Example 1.** Correct the comma splice: *The bell rang, the students left.* *Answer:* The bell rang**;** the students left.

**Example 2.** Punctuate: *Mr Bello our new teacher is from Ilorin.* *Answer:* Mr Bello**,** our new teacher**,** is from Ilorin.

**Example 3.** Hyphenate: *a well known writer.* *Answer:* a **well-known** writer.`,
        },
        questions: [
          ["E", "Which sentence is correctly punctuated?", "Mr Bello, our new teacher, is from Ilorin.", "Mr Bello our new teacher, is from Ilorin.", "Mr Bello, our new teacher is from Ilorin.", "Mr, Bello our new teacher is from Ilorin.", "Commas enclose the appositive."],
          ["E", "Which is correctly hyphenated?", "a well-known writer", "a well known-writer", "a-well known writer", "a wellknown-writer", "Compound adjectives before a noun take a hyphen."],
          ["E", "Which sentence uses brackets correctly?", "The WAEC (West African Examinations Council) released the results.", "The (WAEC West African) Examinations Council released the results.", "The WAEC released (the results.)", "(The) WAEC released the results.", "Brackets enclose extra information."],
          ["M", "Which sentence contains a comma splice?", "The bell rang, the students left.", "The bell rang; the students left.", "The bell rang, and the students left.", "When the bell rang, the students left.", "Two main clauses are joined only by a comma."],
          ["M", "Which sentence uses the semicolon correctly?", "It was late; however, we continued.", "It was late however; we continued.", "It; was late however we continued.", "It was; late, however we continued.", "A semicolon comes before 'however' joining clauses."],
          ["M", "Which sentence uses a colon correctly?", "He had one aim: to win.", "He had: one aim to win.", "He: had one aim to win.", "He had one: aim to win.", "The colon follows a complete clause."],
          ["M", "Which is correct?", "a five-year-old girl", "a five year old girl", "a five-years-old girl", "a five year-old-girl", "The compound adjective before the noun is hyphenated."],
          ["H", "Which sentence uses a dash for dramatic effect?", "She opened the box — empty.", "She opened — the box empty.", "She — opened the box empty.", "She opened the box empty —.", "The dash creates a pause before the surprise."],
          ["H", "Which sentence means the speaker is inviting Grandma to eat?", "Let's eat, Grandma!", "Let's eat Grandma!", "Lets eat Grandma!", "Let's, eat Grandma!", "The comma shows Grandma is being addressed."],
          ["H", "Which is correctly punctuated?", "The girl is five years old.", "The girl is five-years-old.", "The girl is five-year-old.", "The girl is five year-old.", "No hyphens are used after the noun."],
        ],
      },
      {
        week: 3,
        title: "Lexis: nearest and opposite meanings (set 2)",
        subtopics: ["Formal vocabulary in context", "Words commonly tested in senior examinations", "Distinguishing near-synonyms", "Using context and word parts"],
        objectives: ["Choose precise synonyms for formal words in context", "Choose precise antonyms for formal words in context", "Distinguish between near-synonyms", "Use context and word parts to decode unfamiliar words"],
        lesson: {
          title: "Senior Lexis Set 2",
          summary: "Extend formal vocabulary for WAEC and JAMB lexis questions.",
          minutes: 40,
          notes: `## Word bank
| Word | Nearest meaning | Opposite |
|---|---|---|
| amicable | friendly, peaceful | hostile |
| audacious | bold, daring | timid |
| cogent | convincing | weak, unconvincing |
| diligent | industrious | indolent |
| erratic | unpredictable | consistent |
| fervent | passionate | indifferent |
| gregarious | sociable | reserved |
| impeccable | flawless | faulty |
| lucid | clear | confusing |
| magnanimous | generous, forgiving | petty, mean |
| prudent | wise, careful | reckless |
| reticent | reserved | talkative |
| tenacious | persistent | irresolute |
| volatile | unstable | stable |

## Near-synonyms
Words may be close but not interchangeable:
- *reticent* (unwilling to speak) vs *shy* (nervous with people)
- *prudent* (wise with the future) vs *thrifty* (careful with money)
Choose the option that fits **exactly** in the sentence.

## Word parts
*magn-* (great): *magnanimous, magnify*; *-cide* (kill); *bene-* (good); *luc-* (light): *lucid*; *greg-* (flock): *gregarious*.`,
          examples: `**Example 1.** *The dispute was settled **amicably**.* Nearest: **peacefully**.

**Example 2.** *The minister gave a **lucid** explanation.* Opposite: **confusing**.

**Example 3.** *She is **gregarious** and loves parties.* Opposite: **reserved**.`,
        },
        questions: [
          ["E", "Choose the word nearest in meaning to 'amicably': 'The dispute was settled amicably.'", "peacefully", "angrily", "quickly", "secretly", "'Amicably' means in a friendly way."],
          ["E", "Choose the word opposite in meaning to 'lucid': 'The minister gave a lucid explanation.'", "confusing", "clear", "long", "loud", "'Lucid' means clear."],
          ["E", "Choose the word opposite in meaning to 'prudent': 'He is prudent with money.'", "reckless", "careful", "wise", "rich", "'Prudent' means careful; 'reckless' is the opposite."],
          ["M", "Choose the word opposite in meaning to 'gregarious': 'She is gregarious and loves parties.'", "reserved", "sociable", "friendly", "noisy", "'Gregarious' means sociable."],
          ["M", "Choose the word nearest in meaning to 'cogent': 'The lawyer presented a cogent argument.'", "convincing", "weak", "long", "confusing", "'Cogent' means clear and convincing."],
          ["M", "Choose the word nearest in meaning to 'tenacious': 'The tenacious athlete never gave up.'", "persistent", "lazy", "tired", "careless", "'Tenacious' means holding firmly; persistent."],
          ["M", "Choose the word opposite in meaning to 'erratic': 'His performance has been erratic.'", "consistent", "unpredictable", "poor", "brilliant", "'Erratic' means irregular."],
          ["H", "Choose the word opposite in meaning to 'magnanimous': 'The magnanimous winner praised his opponent.'", "petty", "generous", "great", "humble", "'Magnanimous' means generous; 'petty' is the opposite."],
          ["H", "Choose the word nearest in meaning to 'reticent': 'The witness was reticent about what she saw.'", "reluctant to speak", "eager to talk", "angry", "confused", "'Reticent' means unwilling to reveal thoughts."],
          ["H", "Choose the word opposite in meaning to 'volatile': 'The situation in the town remains volatile.'", "stable", "dangerous", "tense", "unpredictable", "'Volatile' means unstable."],
        ],
      },
      {
        week: 4,
        title: "Oral English: letters with more than one sound",
        subtopics: ["The many sounds of 'ch' and 'th'", "The many sounds of 's' and 'x'", "The many sounds of 'ough'", "The many sounds of 'ea' and 'oo'"],
        objectives: ["Identify the different sounds represented by common letters and letter groups", "Match spellings to sounds in examination questions", "Pronounce commonly mispronounced words", "Use sound rather than spelling as a guide"],
        lesson: {
          title: "One Spelling, Many Sounds",
          summary: "Recognise that the same letters can represent different sounds.",
          minutes: 40,
          notes: `## ch
| Sound | Examples |
|---|---|
| /tʃ/ | church, chair, teacher |
| /k/ | chemistry, character, stomach, orchestra |
| /ʃ/ | machine, chef, brochure, chalet |

## th
- /θ/ (voiceless): *think, thin, bath, method*
- /ð/ (voiced): *this, mother, breathe, smooth*
Note: *bath* /θ/ (noun) but *bathe* /ð/ (verb).

## s
- /s/: *sun, bus*
- /z/: *rose, busy, was*
- /ʃ/: *sugar, sure, tension*
- /ʒ/: *measure, vision, usual*

## x
- /ks/: *box, taxi*
- /gz/: *exam, exact, exist*
- /z/: *xylophone* (initial)

## ough
| Sound | Example |
|---|---|
| /ʌf/ | rough, enough |
| /ɒf/ | cough |
| /əʊ/ | though, dough |
| /uː/ | through |
| /aʊ/ | bough, plough |
| /ɔː/ | thought, bought |

## ea and oo
- *ea*: /iː/ *meat*; /e/ *bread*; /eɪ/ *break*; /ɪə/ *ear*; /ɜː/ *learn*
- *oo*: /uː/ *food*; /ʊ/ *book*; /ʌ/ *blood*; /ɔː/ *door*`,
          examples: `**Example 1.** In which word is *ch* pronounced /k/: *chair, chemistry, machine, church*? *Answer:* **chemistry**.

**Example 2.** In which word is *x* pronounced /gz/: *box, taxi, exam, six*? *Answer:* **exam**.

**Example 3.** Which word has the same *ough* sound as *bought*: *thought, though, through, rough*? *Answer:* **thought**.`,
        },
        questions: [
          ["E", "In which word is 'ch' pronounced /k/?", "character", "chair", "church", "cheese", "'Ch' in 'character' is /k/."],
          ["E", "In which word is 'ch' pronounced /ʃ/?", "chef", "chin", "chest", "chemist", "'Chef' is French in origin: /ʃef/."],
          ["E", "In which word is 'th' voiced /ð/?", "mother", "think", "method", "bath", "'Mother' has the voiced /ð/."],
          ["M", "In which word is 'x' pronounced /gz/?", "exact", "box", "taxi", "fix", "Before a stressed vowel, 'ex' is often /ɪgz/."],
          ["M", "In which word is 's' pronounced /z/?", "busy", "bus", "sun", "sister", "'Busy' is /ˈbɪzi/."],
          ["M", "Which word has the same 'ough' sound as 'bought'?", "thought", "though", "through", "rough", "Both have /ɔː/."],
          ["M", "Which word has the same 'ough' sound as 'plough'?", "bough", "cough", "dough", "tough", "Both have /aʊ/."],
          ["H", "In which word is 'ea' pronounced /eɪ/?", "break", "bread", "bead", "beard", "'Break' rhymes with 'make'."],
          ["H", "In which word is 'oo' pronounced /ɔː/?", "floor", "flood", "food", "foot", "'Floor' has the long /ɔː/."],
          ["H", "In which word is 's' pronounced /ʒ/?", "usual", "use", "bus", "sugar", "'Usual' contains /ʒ/."],
        ],
      },
      {
        week: 5,
        title: "Grammatical names and functions of words and phrases",
        subtopics: ["Naming phrases", "Functions of noun phrases", "Functions of adjectival and adverbial phrases", "Answering grammar questions in comprehension"],
        objectives: ["Name noun, prepositional, infinitive, participial and gerund phrases", "State the functions of phrases in sentences", "Distinguish phrases from clauses in passages", "Write complete answers to grammatical name and function questions"],
        lesson: {
          title: "Naming and Explaining Phrases",
          summary: "Identify phrase types and their grammatical functions in comprehension passages.",
          minutes: 45,
          notes: `## Phrase types
| Type | Example |
|---|---|
| noun phrase | *the tall old man* |
| prepositional phrase | *under the table* |
| infinitive phrase | *to win the trophy* |
| participial phrase | *running across the field* |
| gerund phrase | *swimming in the river* (used as a noun) |
| adverbial phrase | *very carefully* |
| adjectival phrase | *full of water* |

## Functions
- **Subject**: ***The tall old man** walked in.*
- **Object**: *She bought **a red bag**.*
- **Complement**: *He became **a famous doctor**.*
- **Qualifying a noun** (adjectival): *The boy **in the blue shirt** is my cousin.* — qualifies *boy*.
- **Modifying a verb** (adverbial): *He left **in the morning**.* — modifies *left*.
- **Object of a preposition**: *She is good at **solving puzzles***.
- **Apposition**: *Mr Ade, **our coach**, is here.*

## Model answer format
*"…to win the trophy…"*
- **Grammatical name**: infinitive phrase
- **Function**: object of the verb *wanted* (in *They wanted to win the trophy*)

## Participle or gerund?
- *Running across the field, the boy fell.* → participial phrase (adjectival, qualifies *boy*).
- *Running across the field is tiring.* → gerund phrase (noun, subject of *is*).`,
          examples: `**Example 1.** *The boy **in the blue shirt** is my cousin.* *Answer:* prepositional phrase, **qualifying the noun "boy"**.

**Example 2.** *They wanted **to win the trophy**.* *Answer:* infinitive phrase, **object of the verb "wanted"**.

**Example 3.** ***Swimming in the river** is dangerous.* *Answer:* gerund phrase, **subject of the verb "is"**.`,
        },
        questions: [
          ["E", "'Under the table' is", "a prepositional phrase", "a noun clause", "a main clause", "an infinitive phrase", "It begins with a preposition and has no finite verb."],
          ["E", "'To win the trophy' is", "an infinitive phrase", "a gerund phrase", "an adverbial clause", "a noun clause", "It begins with 'to' + base verb."],
          ["E", "'The tall old man' is", "a noun phrase", "a prepositional phrase", "a clause", "an adverbial phrase", "It is built around the noun 'man'."],
          ["M", "In 'The boy in the blue shirt is my cousin', the phrase 'in the blue shirt'", "qualifies the noun 'boy'", "modifies the verb 'is'", "is the subject", "is the object", "It tells which boy."],
          ["M", "In 'They wanted to win the trophy', the function of 'to win the trophy' is", "object of the verb 'wanted'", "subject of 'wanted'", "qualifier of 'they'", "adverbial of time", "It answers 'wanted what?'"],
          ["M", "In 'Swimming in the river is dangerous', 'Swimming in the river' is", "a gerund phrase, subject of 'is'", "a participial phrase qualifying 'river'", "an adverbial clause", "an infinitive phrase", "It acts as a noun and subject."],
          ["M", "In 'He left in the morning', 'in the morning' functions as", "an adverbial modifying 'left'", "the subject of 'left'", "the object of 'left'", "a qualifier of 'he'", "It tells when he left."],
          ["H", "In 'Running across the field, the boy fell', 'Running across the field' is", "a participial phrase qualifying 'boy'", "a gerund phrase, subject of 'fell'", "a noun clause", "an infinitive phrase", "It describes the boy."],
          ["H", "In 'He became a famous doctor', 'a famous doctor' functions as", "complement of the verb 'became'", "object of 'became'", "subject of 'became'", "adverbial of manner", "'Became' is a linking verb."],
          ["H", "In 'Mr Ade, our coach, is here', 'our coach' is", "a noun phrase in apposition to 'Mr Ade'", "an adverbial phrase", "a prepositional phrase", "the object of 'is'", "It renames Mr Ade."],
        ],
      },
      {
        week: 6,
        title: "Summary practice: full-passage tasks",
        subtopics: ["Reading for the summary focus", "Separating different summary requirements", "Timing and accuracy", "Reviewing model answers"],
        objectives: ["Complete a full summary task on an original passage", "Separate points for different parts of a summary question", "Work within examination time limits", "Evaluate answers against a marking guide"],
        lesson: {
          title: "Full Summary Practice",
          summary: "Apply all summary skills to a complete, original examination-style passage.",
          minutes: 45,
          notes: `## Practice passage
*Plastic waste has become one of the most visible problems in our towns. Drains blocked by sachets and bottles cause flooding whenever it rains heavily. Animals that swallow plastic bags often die, and farmers lose livestock as a result. In addition, when plastics are burnt in open dumps, they release poisonous fumes that harm the lungs of people living nearby.*
*Fortunately, solutions exist. Households can separate plastics from other waste so that they can be recycled. Some young entrepreneurs already pay collectors for used bottles and turn them into building materials. Government can also ban very thin nylon bags, as several countries have done. Most importantly, citizens must be educated so that they stop throwing waste into the streets.*

## The task
*(a) In three sentences, one for each, summarise the **problems** caused by plastic waste.*
*(b) In four sentences, one for each, summarise the **solutions** suggested.*

## Marking guide
**(a)**
1. Plastic waste blocks drains and causes flooding.
2. It kills animals that swallow it.
3. Burning plastics releases harmful fumes.

**(b)**
1. Households should separate plastics for recycling.
2. Entrepreneurs can buy and reuse plastic bottles.
3. Government can ban thin nylon bags.
4. Citizens should be educated to stop littering.

## Notice
"Fortunately, solutions exist" and "as several countries have done" are **not** points.`,
          examples: `**Weak answer:** *Plastic is bad and it causes many problems in our towns and animals also die and fumes.* — one long, unclear sentence mixing points.

**Strong answer:** *1. Plastic waste blocks drains, causing floods. 2. Animals die after swallowing plastic. 3. Burning plastic produces harmful fumes.*

**Irrelevant point to avoid in (b):** *Plastic kills animals.* — this is a problem, not a solution.`,
        },
        questions: [
          ["E", "Passage: 'Drains blocked by sachets and bottles cause flooding whenever it rains heavily.' Which problem is stated?", "Plastic waste blocks drains and causes flooding.", "It rains heavily.", "Sachets are cheap.", "Bottles are useful.", "This is the problem caused by plastic."],
          ["E", "Passage: 'Households can separate plastics from other waste so that they can be recycled.' Which solution is stated?", "Households should separate plastics for recycling.", "Households should burn plastics.", "Households should buy more plastics.", "Households should move away.", "Separation enables recycling."],
          ["E", "Passage: 'Government can also ban very thin nylon bags.' This sentence gives", "a solution", "a problem", "an example of an animal", "the title", "It suggests an action."],
          ["M", "Which sentence from the passage is NOT a summary point?", "Fortunately, solutions exist.", "Citizens must be educated so that they stop throwing waste into the streets.", "Animals that swallow plastic bags often die.", "Burning plastics releases poisonous fumes.", "It only introduces the solutions."],
          ["M", "If asked for the PROBLEMS caused by plastic waste, which is irrelevant?", "Entrepreneurs turn bottles into building materials.", "Blocked drains cause flooding.", "Animals die after swallowing plastic.", "Burning plastic harms people's lungs.", "It is a solution, not a problem."],
          ["M", "How many solutions are suggested in the passage?", "4", "2", "3", "5", "Separation, entrepreneurs, a ban and education."],
          ["M", "Passage: 'Some young entrepreneurs already pay collectors for used bottles and turn them into building materials.' The best summary sentence is", "Entrepreneurs can buy and reuse plastic bottles.", "Young people are entrepreneurs.", "Bottles are building materials.", "Collectors are paid.", "It captures the solution concisely."],
          ["H", "Which is the best single sentence for 'when plastics are burnt in open dumps, they release poisonous fumes that harm the lungs of people living nearby'?", "Burning plastic produces harmful fumes.", "Open dumps are near people.", "People have lungs.", "Plastics are burnt.", "It keeps the essential problem."],
          ["H", "Why is 'Plastic is bad and it causes many problems and animals die and fumes' a weak summary answer?", "It mixes several points in one unclear, ungrammatical sentence", "It is too short", "It uses the present tense", "It contains the word 'plastic'", "Points must be separate and clear."],
          ["H", "'As several countries have done' in the passage is best treated as", "supporting detail, not a separate point", "the main solution", "a problem", "the title of the passage", "It supports the point about banning bags."],
        ],
      },
      {
        week: 7,
        title: "Register: commerce, banking and insurance",
        subtopics: ["Vocabulary of trade", "Vocabulary of banking", "Vocabulary of insurance", "Using commercial register in context"],
        objectives: ["Use trade vocabulary accurately", "Use banking vocabulary accurately", "Use insurance vocabulary accurately", "Complete sentences with suitable commercial register"],
        lesson: {
          title: "Register: Commerce and Banking",
          summary: "Use the specialised vocabulary of trade, banking and insurance.",
          minutes: 40,
          notes: `## Trade
| Word | Meaning |
|---|---|
| wholesaler | buys in bulk from producers and sells to retailers |
| retailer | sells in small quantities to consumers |
| consumer | final user of goods |
| invoice | bill listing goods supplied and amounts due |
| receipt | written proof of payment |
| discount | reduction in price |
| inventory / stock | goods held for sale |
| import / export | bring in / send out goods across borders |

## Banking
| Word | Meaning |
|---|---|
| deposit | money paid into an account |
| withdrawal | money taken out |
| overdraft | spending more than is in the account, by agreement |
| collateral | property pledged as security for a loan |
| interest | charge for borrowing or reward for saving |
| cheque | written order to a bank to pay money |
| teller | bank cashier |
| dividend | share of profit paid to shareholders |

## Insurance
| Word | Meaning |
|---|---|
| premium | regular payment for cover |
| policy | the insurance contract |
| claim | request for compensation |
| insured / insurer | the person covered / the company |
| indemnity | compensation for loss |`,
          examples: `**Example 1.** *The bank demanded ___ before approving the loan.* *Answer:* **collateral**.

**Example 2.** *She pays a monthly ___ to keep her car insured.* *Answer:* **premium**.

**Example 3.** *The shopkeeper gave me a ___ as proof of payment.* *Answer:* **receipt**.`,
        },
        questions: [
          ["E", "Written proof of payment is a", "receipt", "premium", "policy", "dividend", "A receipt confirms payment."],
          ["E", "Money paid into a bank account is a", "deposit", "withdrawal", "overdraft", "claim", "Deposits add money to accounts."],
          ["E", "A person who sells goods in small quantities to consumers is a", "retailer", "wholesaler", "teller", "insurer", "Retailers serve final consumers."],
          ["M", "The bank demanded ___ before approving the loan.", "collateral", "a premium", "a dividend", "an invoice", "Collateral secures a loan."],
          ["M", "She pays a monthly ___ to keep her car insured.", "premium", "dividend", "deposit", "discount", "Premiums pay for insurance cover."],
          ["M", "A bill listing goods supplied and amounts due is", "an invoice", "a receipt", "a cheque", "a policy", "Invoices request payment."],
          ["M", "A share of company profit paid to shareholders is a", "dividend", "premium", "withdrawal", "discount", "Dividends reward shareholders."],
          ["H", "Spending more than one's balance by agreement with the bank is", "an overdraft", "a deposit", "a dividend", "an indemnity", "Overdrafts allow temporary negative balances."],
          ["H", "A request to an insurance company for compensation is a", "claim", "premium", "policy", "teller", "The insured makes a claim."],
          ["H", "The insurance contract document is called the", "policy", "invoice", "overdraft", "inventory", "The policy sets out the cover."],
        ],
      },
      {
        week: 8,
        title: "Letter to the editor",
        subtopics: ["Purpose of a letter to the editor", "Layout and conventions", "Presenting a public issue", "Tone and persuasion"],
        objectives: ["State the purpose of a letter to the editor", "Lay out a letter to the editor correctly", "Present an issue of public interest clearly", "Persuade readers with a balanced, formal tone"],
        lesson: {
          title: "Writing to the Editor",
          summary: "Write letters for publication that raise public issues persuasively.",
          minutes: 45,
          notes: `## Purpose
A **letter to the editor** is written to a newspaper or magazine **for publication**. It draws public attention to an issue, expresses an opinion or responds to an earlier article.

## Layout
1. Writer's address and date.
2. Receiver's address: *The Editor, The Daily Voice, P.M.B. 1234, Ibadan.*
3. Salutation: *Sir,* (traditional) or *Dear Sir,*
4. **Heading**: *THE MENACE OF ROADSIDE TRADING IN OUR CITY*
5. Body — introduction, the issue, evidence, suggestions.
6. Subscription: *Yours faithfully,*
7. Signature, **full name** and sometimes location or title.

## Content
- State the issue and why readers should care.
- Give facts and examples.
- Address the relevant **authorities** through the paper: *I call on the State Government to…*
- Suggest practical solutions.

## Tone
Formal, reasonable and persuasive. The audience is the **public**, not only the editor.

## Difference from other formal letters
The real audience is the newspaper's readership; the letter is **published**, so it must be clear and interesting.`,
          examples: `**Opening:**
*Sir,*
*THE MENACE OF ROADSIDE TRADING IN OUR CITY*
*Kindly allow me space in your widely read newspaper to draw public attention to the growing danger of roadside trading along major roads in Ibadan.*

**Appeal:** *I therefore call on the State Government to provide affordable market stalls for these traders.*`,
        },
        questions: [
          ["E", "A letter to the editor is written mainly for", "publication in a newspaper or magazine", "a close friend", "a bank manager only", "a private diary", "It is meant to reach the public."],
          ["E", "Which salutation is traditional in a letter to the editor?", "Sir,", "Dear friend,", "Hi Editor,", "My dear,", "'Sir,' is the conventional salutation."],
          ["E", "Which subscription suits a letter to the editor?", "Yours faithfully,", "Your friend,", "Yours affectionately,", "Love,", "It is a formal letter."],
          ["M", "Which opening is typical of a letter to the editor?", "Kindly allow me space in your widely read newspaper to draw attention to…", "How are you and your family?", "I write to apply for the post of…", "Once upon a time…", "It requests publication space."],
          ["M", "The real audience of a letter to the editor is", "the newspaper's readers and relevant authorities", "only the editor's family", "the writer's best friend", "the printing press", "It is published for the public."],
          ["M", "Which heading best suits a letter to the editor?", "THE MENACE OF ROADSIDE TRADING IN OUR CITY", "DEAR EDITOR", "MY LETTER", "HELLO", "It states the public issue."],
          ["M", "Which sentence addresses the authorities through the newspaper?", "I call on the State Government to provide affordable market stalls.", "Editor, please greet your wife.", "I hope you enjoy my letter.", "Please print my photograph.", "It appeals for official action."],
          ["H", "How should a letter to the editor be signed?", "with a signature and the writer's full name", "with a nickname", "with the first name only", "anonymously always", "Published letters identify the writer."],
          ["H", "Which tone is most effective in a letter to the editor?", "formal, reasonable and persuasive", "abusive and emotional", "casual and slangy", "humorous and silly", "Reasonable argument persuades readers."],
          ["H", "How does a letter to the editor differ from a letter of complaint to a council?", "It is written for publication and addresses the public through the newspaper", "It has no heading", "It uses 'Yours sincerely'", "It must be informal", "Its audience and purpose differ."],
        ],
      },
    ],
  },
];
