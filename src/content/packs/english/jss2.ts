import type { TermPlan } from "../types";

/** JSS2 English Language — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Present and past continuous tenses",
        subtopics: ["Forming the present continuous", "Forming the past continuous", "Past continuous with the simple past", "Verbs not used in the continuous form"],
        objectives: ["Form the present and past continuous tenses correctly", "Use the present continuous for actions happening now", "Use the past continuous for actions in progress in the past", "Avoid using stative verbs in the continuous form"],
        lesson: {
          title: "Continuous Tenses",
          summary: "Describe actions in progress now or at a time in the past.",
          minutes: 40,
          notes: `## Present continuous
**am / is / are + verb-ing**
Used for actions happening **now** or around now, and for fixed future plans:
*She **is reading** now.* / *We **are travelling** to Ilorin tomorrow.*

## Past continuous
**was / were + verb-ing**
Used for an action **in progress** at a time in the past:
*At 8 p.m. yesterday, I **was doing** my homework.*

## Past continuous + simple past
The longer background action uses the past continuous; the shorter action that interrupts it uses the simple past:
*They **were playing** football when it **started** to rain.*
*While I **was cooking**, the light **went** off.*

## Spelling of -ing
*write → writing* (drop e), *run → running* (double), *lie → lying* (ie → y).

## Stative verbs
Verbs of **thinking, feeling, possessing and senses** are not normally used in the continuous form:
*know, understand, believe, like, love, hate, want, own, belong, see, hear*
✗ *I am knowing the answer.* ✓ *I **know** the answer.*
✗ *This bag is belonging to me.* ✓ *This bag **belongs** to me.*`,
          examples: `**Example 1.** Complete: *Look! The baby ___ (sleep).* *Answer:* **is sleeping**.

**Example 2.** Complete: *When the visitors arrived, we ___ (eat).* *Answer:* **were eating**.

**Example 3.** Correct: *I am understanding the lesson now.* *Answer:* I **understand** the lesson now.`,
        },
        questions: [
          ["E", "Choose the correct option: 'Look! The baby ___.'", "is sleeping", "sleeps", "slept", "sleeping", "'Look!' shows the action is happening now: present continuous."],
          ["E", "Choose the correct option: 'At 8 p.m. yesterday, I ___ my homework.'", "was doing", "am doing", "do", "have done", "An action in progress at a past time takes the past continuous."],
          ["E", "The present continuous tense is formed with", "am / is / are + verb-ing", "was / were + verb-ing", "has / have + past participle", "will + verb", "For example: 'She is reading.'"],
          ["M", "Choose the correct option: 'They were playing football when it ___ to rain.'", "started", "was starting", "starts", "is starting", "The short interrupting action takes the simple past."],
          ["M", "Choose the correct option: 'While I ___, the light went off.'", "was cooking", "cooked", "am cooking", "cook", "The background action in progress takes the past continuous."],
          ["M", "Which sentence is correct?", "I know the answer.", "I am knowing the answer.", "I was knowing the answer now.", "I knowing the answer.", "'Know' is a stative verb and is not used in the continuous form."],
          ["M", "Add '-ing' to 'lie'.", "lying", "lieing", "liing", "lyeing", "Change 'ie' to 'y' before adding -ing."],
          ["H", "Which sentence is correct?", "This bag belongs to me.", "This bag is belonging to me.", "This bag was belonging to me now.", "This bag belonging to me.", "'Belong' is a stative verb."],
          ["H", "Choose the correct option: 'We ___ to Ilorin tomorrow; the tickets are already booked.'", "are travelling", "travelled", "were travelling", "had travelled", "The present continuous can describe a fixed future plan."],
          ["H", "Choose the correct option: 'What ___ when the teacher came in?'", "were you doing", "are you doing", "did you doing", "you were doing", "A past action in progress at a moment takes the past continuous, with the auxiliary before the subject in questions."],
        ],
      },
      {
        week: 2,
        title: "Articles and determiners",
        subtopics: ["The indefinite articles a and an", "The definite article the", "Zero article", "Other determiners"],
        objectives: ["Choose a or an according to the first sound of the next word", "Use the for specific and unique things", "Omit articles where they are not needed", "Use determiners such as this, those, some and any correctly"],
        lesson: {
          title: "Using A, An and The",
          summary: "Choose the right article — or none — and use other determiners accurately.",
          minutes: 35,
          notes: `## A or an?
The choice depends on the **sound**, not the letter, at the start of the next word:
- **an** before a vowel **sound**: *an apple, an hour* (silent h), *an honest man, an MP* ("em-pee")
- **a** before a consonant **sound**: *a book, a university* ("you-"), *a European* ("you-"), *a one-way street* ("won-")

## The
Use **the** when the listener knows which one we mean, or when there is only one:
- already mentioned: *I bought a pen. **The** pen is blue.*
- unique things: ***the** sun, **the** moon, **the** Niger*
- superlatives: ***the** tallest girl*
- some countries: ***the** United States, **the** Netherlands*

## Zero article (no article)
- general plural or uncountable nouns: *Dogs are loyal. Water is essential.*
- meals, sports, subjects, languages: *We had **breakfast**. She plays **football**. I like **mathematics**.*
- most names of people, cities and countries: *Nigeria, Kano*

## Other determiners
*this/that* (singular), *these/those* (plural), *some* (positive statements), *any* (questions and negatives), *each, every, much, many*.`,
          examples: `**Example 1.** *She waited for ___ hour.* *Answer:* **an** (hour begins with a vowel sound).

**Example 2.** *He is ___ university student.* *Answer:* **a** ("you-niversity").

**Example 3.** Correct: *The breakfast is ready at seven.* (general meaning) *Answer:* **Breakfast** is ready at seven.`,
        },
        questions: [
          ["E", "Choose the correct article: 'She waited for ___ hour.'", "an", "a", "the", "no article", "'Hour' begins with a vowel sound because the h is silent."],
          ["E", "Choose the correct article: 'He is ___ university student.'", "a", "an", "the", "no article", "'University' begins with the consonant sound /j/ ('you')."],
          ["E", "Choose the correct article: '___ sun rises in the east.'", "The", "A", "An", "no article", "There is only one sun."],
          ["M", "Choose the correct article: 'Mr Ade is ___ honest man.'", "an", "a", "the", "no article", "The h in 'honest' is silent, so it begins with a vowel sound."],
          ["M", "Which sentence is correct?", "She plays football every Saturday.", "She plays the football every Saturday.", "She plays a football every Saturday.", "She plays an football every Saturday.", "Sports usually take no article."],
          ["M", "Choose the correct option: 'I bought a pen yesterday. ___ pen is blue.'", "The", "A", "An", "Some", "The pen has already been mentioned, so it is specific."],
          ["M", "Choose the correct article: 'He wants to become ___ European footballer.'", "a", "an", "the", "no article", "'European' begins with the sound /j/, a consonant sound."],
          ["H", "Choose the correct option: 'Have you got ___ questions?'", "any", "some", "a", "much", "'Any' is used in questions and negatives."],
          ["H", "Which sentence is correct?", "Water is essential for life.", "The water is essential for the life.", "A water is essential for life.", "Waters are essential for a life.", "General uncountable nouns take no article."],
          ["H", "Choose the correct option: 'She is ___ girl in the class.'", "the tallest", "a tallest", "tallest", "an tallest", "Superlatives take 'the': the tallest girl."],
        ],
      },
      {
        week: 3,
        title: "Irregular verbs and past participles",
        subtopics: ["The three principal parts of verbs", "Irregular verb patterns", "Using past participles with have and be", "Commonly confused verbs"],
        objectives: ["State the base, past and past participle forms of common verbs", "Use irregular past participles correctly", "Use past participles after have, has, had and be", "Distinguish lie/lay and rise/raise"],
        lesson: {
          title: "Principal Parts of Verbs",
          summary: "Master the past and past participle forms of irregular verbs.",
          minutes: 40,
          notes: `## Three principal parts
| Base | Past | Past participle |
|---|---|---|
| go | went | gone |
| write | wrote | written |
| begin | began | begun |
| drink | drank | drunk |
| swim | swam | swum |
| ring | rang | rung |
| choose | chose | chosen |
| forget | forgot | forgotten |
| fly | flew | flown |
| tear | tore | torn |
| teach | taught | taught |
| bring | brought | brought |

## Where the past participle is used
- after **have/has/had** (perfect tenses): *She **has written** the letter.*
- after **be** (passive voice): *The letter **was written** yesterday.*
The simple past is used **alone**: *She **wrote** the letter.*
✗ *He has went.* ✓ *He **has gone**.* / ✗ *The bell has rang.* ✓ *The bell **has rung**.*

## Commonly confused verbs
| Verb | Meaning | Parts |
|---|---|---|
| lie | to rest flat | lie – lay – lain |
| lay | to put down | lay – laid – laid |
| rise | to go up (no object) | rise – rose – risen |
| raise | to lift (needs an object) | raise – raised – raised |
*The hen **laid** an egg.* / *He **lay** on the bed.* / *Prices have **risen**.* / *She **raised** her hand.*`,
          examples: `**Example 1.** Correct: *The bell has rang.* *Answer:* The bell **has rung**.

**Example 2.** Complete: *I have ___ (forget) my book.* *Answer:* **forgotten**.

**Example 3.** Complete: *She ___ (lay/lie) the baby on the mat.* *Answer:* **laid** (she put the baby down).`,
        },
        questions: [
          ["E", "What is the past participle of 'go'?", "gone", "went", "goed", "going", "go – went – gone."],
          ["E", "Choose the correct option: 'She has ___ the letter.'", "written", "wrote", "writed", "write", "After 'has', use the past participle."],
          ["E", "What is the past tense of 'begin'?", "began", "begun", "beginned", "begin", "begin – began – begun."],
          ["M", "Which sentence is correct?", "The bell has rung.", "The bell has rang.", "The bell has ringed.", "The bell have rung.", "ring – rang – rung; after 'has' use 'rung'."],
          ["M", "Choose the correct option: 'I have ___ my book at home.'", "forgotten", "forgot", "forget", "forgetted", "forget – forgot – forgotten."],
          ["M", "Choose the correct option: 'The birds have ___ away.'", "flown", "flew", "flied", "flowed", "fly – flew – flown."],
          ["M", "Choose the correct option: 'He ___ two bottles of water after the race.'", "drank", "drunk", "drinked", "drinks down", "The simple past of 'drink' is 'drank'."],
          ["H", "Choose the correct option: 'The hen ___ an egg this morning.'", "laid", "lay", "lied", "lain", "'Lay' means to put down; its past tense is 'laid'."],
          ["H", "Choose the correct option: 'Tired after work, he ___ on the bed.'", "lay", "laid", "lied", "layed", "'Lie' (to rest) has the past tense 'lay'."],
          ["H", "Choose the correct option: 'The price of rice has ___ this year.'", "risen", "raised", "rose", "rised", "'Rise' has no object: rise – rose – risen."],
        ],
      },
      {
        week: 4,
        title: "Speech work: word stress in two-syllable words",
        subtopics: ["What stress is", "Words stressed on the first syllable", "Words stressed on the second syllable", "Stress that changes with the part of speech"],
        objectives: ["Explain word stress", "Identify the stressed syllable in two-syllable words", "Stress common two-syllable words correctly", "Change stress to distinguish nouns from verbs"],
        lesson: {
          title: "Stress in Two-Syllable Words",
          summary: "Stress the correct syllable so that words are clear and correctly understood.",
          minutes: 35,
          notes: `## What is stress?
A **stressed** syllable is said **louder, longer and higher** than the others. We show it here with capital letters: *TA-ble*, *be-GIN*. In dictionaries, the mark **ˈ** comes before the stressed syllable.

## First-syllable stress
Most two-syllable **nouns and adjectives**:
*TA-ble, MO-ther, WA-ter, GAR-den, PEO-ple, HAP-py, DOC-tor*

## Second-syllable stress
Many two-syllable **verbs**, and some other words:
*be-GIN, de-CIDE, a-BOUT, a-FRAID, ho-TEL, ma-CHINE, po-LICE*

## Stress changes the part of speech
| Noun (first syllable) | Verb (second syllable) |
|---|---|
| REcord | reCORD |
| PREsent | preSENT |
| OBject | obJECT |
| IMport | imPORT |
| CONduct | conDUCT |
*She broke the school **RE**cord.* / *Please re**CORD** the meeting.*

## Why it matters
Wrong stress can make words hard to understand — a common difficulty for Nigerian speakers, especially with words like *hoTEL*, *poLICE* and *maCHINE*.`,
          examples: `**Example 1.** Stress *hotel*. *Answer:* ho-**TEL** (second syllable).

**Example 2.** Stress *present* in *I will present the prize.* *Answer:* pre-**SENT** (it is a verb).

**Example 3.** Stress *garden*. *Answer:* **GAR**-den (first syllable).`,
        },
        questions: [
          ["E", "Which syllable is stressed in 'table'?", "the first (TA-ble)", "the second (ta-BLE)", "both equally", "neither", "Most two-syllable nouns are stressed on the first syllable."],
          ["E", "Which syllable is stressed in 'begin'?", "the second (be-GIN)", "the first (BE-gin)", "both equally", "neither", "'Begin' is stressed on the second syllable."],
          ["E", "A stressed syllable is said", "louder, longer and higher", "more quietly", "faster and lower", "without a vowel", "Stress gives a syllable prominence."],
          ["M", "Which word is stressed on the SECOND syllable?", "hotel", "water", "mother", "garden", "It is pronounced ho-TEL."],
          ["M", "Which word is stressed on the FIRST syllable?", "doctor", "police", "machine", "about", "It is pronounced DOC-tor."],
          ["M", "In 'She broke the school record', how is 'record' stressed?", "REcord (first syllable)", "reCORD (second syllable)", "both syllables equally", "it has no stress", "'Record' is a noun here, so the first syllable is stressed."],
          ["M", "In 'Please record the meeting', how is 'record' stressed?", "reCORD (second syllable)", "REcord (first syllable)", "both syllables equally", "it has no stress", "'Record' is a verb here, so the second syllable is stressed."],
          ["H", "Which word is stressed on the second syllable?", "machine", "people", "happy", "table", "It is pronounced ma-CHINE."],
          ["H", "In 'The country will import rice', 'import' is stressed on", "the second syllable (imPORT)", "the first syllable (IMport)", "both syllables", "neither syllable", "It is a verb here."],
          ["H", "Which pair shows the correct noun–verb stress pattern?", "OBject (noun) – obJECT (verb)", "obJECT (noun) – OBject (verb)", "OBject (noun) – OBject (verb)", "obJECT (noun) – obJECT (verb)", "Nouns take first-syllable stress; verbs take second-syllable stress."],
        ],
      },
      {
        week: 5,
        title: "Reading comprehension: inference",
        subtopics: ["Stated and implied information", "Making inferences from clues", "Inferring feelings and attitudes", "Supporting inferences with evidence"],
        objectives: ["Distinguish information that is stated from information that is implied", "Draw sensible conclusions from clues in a passage", "Infer characters' feelings from their actions and words", "Support inferences with evidence from the text"],
        lesson: {
          title: "Reading Between the Lines",
          summary: "Work out ideas the writer suggests but does not state directly.",
          minutes: 40,
          notes: `## Stated or implied?
- **Stated** information is written directly: *Ada was angry.*
- **Implied** information is suggested: *Ada slammed the door and refused to speak.* — we **infer** that she was angry.

## How to make an inference
1. Notice the **clues**: actions, words, descriptions, results.
2. Combine them with what you already know about people and the world.
3. Choose the conclusion that **best fits all** the clues.
4. Make sure the passage gives **evidence** for your answer — an inference is not a wild guess.

## Common inference questions
- *How did the character feel?* (from actions and words)
- *What time of day/year is it?* (from descriptions)
- *What can we conclude about …?*
- *Why did the character do this?*

## Example
*Tunde's umbrella dripped on the floor as he took off his muddy shoes at the door.*
We can infer that **it was raining** and **the ground outside was wet** — although neither is stated.`,
          examples: `**Passage:** *The stadium fell silent. Then the whistle blew, and thousands of green-and-white flags waved as fans hugged strangers.*

**Q.** What can we infer? *Answer:* the home team (in green and white) **won** or scored. Evidence: fans celebrating after the whistle.

**Q.** How did the fans feel? *Answer:* **joyful** — they waved flags and hugged strangers.`,
        },
        questions: [
          ["E", "Read: 'Ada slammed the door and refused to speak to anyone.' How did Ada feel?", "angry", "happy", "sleepy", "hungry", "Slamming the door and refusing to speak suggest anger."],
          ["E", "Information that is suggested but not directly stated is", "implied", "printed", "copied", "summarised", "Readers infer implied information."],
          ["E", "Read: 'Tunde's umbrella dripped on the floor as he took off his muddy shoes.' What can we infer about the weather?", "It was raining.", "It was very hot.", "It was windy and dry.", "It was snowing.", "A dripping umbrella and muddy shoes show rain."],
          ["M", "Read: 'The stadium fell silent. Then the whistle blew, and thousands of green-and-white flags waved as fans hugged strangers.' What can we infer?", "The team in green and white did well.", "The match was cancelled.", "The fans were bored.", "The stadium was empty.", "The fans celebrated after the whistle."],
          ["M", "Read: 'Kemi yawned, rubbed her eyes and switched off the reading lamp.' What was Kemi probably about to do?", "go to sleep", "start cooking", "go jogging", "watch a film", "Yawning, rubbing her eyes and switching off the lamp suggest sleep."],
          ["M", "Read: 'The shelves were empty and a notice on the door said: Closed for renovation.' What can we infer about the shop?", "It is not open for business at present.", "It is having a sale.", "It sells building materials.", "It is very busy.", "Empty shelves and the notice show it is closed."],
          ["M", "An inference must be supported by", "clues in the passage", "your personal opinion only", "the title only", "a dictionary", "Inferences are based on evidence from the text."],
          ["H", "Read: 'Mr Okoro checked his watch for the fifth time and tapped his foot as the bus still did not arrive.' How did Mr Okoro feel?", "impatient", "relaxed", "grateful", "amused", "Repeatedly checking his watch and tapping his foot show impatience."],
          ["H", "Read: 'Every morning the old woman shared her small loaf of bread with the hungry children on her street.' What can we infer about her character?", "She is generous.", "She is greedy.", "She is wealthy.", "She is lazy.", "Sharing her small loaf shows generosity."],
          ["H", "Read: 'The farmers looked anxiously at the cracked, dry fields and the cloudless sky.' What were the farmers worried about?", "lack of rain", "too much rain", "a bumper harvest", "flooding", "Cracked, dry fields and no clouds suggest drought."],
        ],
      },
      {
        week: 6,
        title: "Writing a formal letter",
        subtopics: ["Features of a formal letter", "Addresses, date and salutation", "The heading and body", "Subscription and signature"],
        objectives: ["State the features of a formal letter", "Lay out both addresses, the date and the salutation correctly", "Write a clear heading and well-organised body", "End with the correct subscription and full name"],
        lesson: {
          title: "The Formal Letter",
          summary: "Write official letters to principals, companies and government offices with the correct layout.",
          minutes: 45,
          notes: `## When do we write formal letters?
To people in official positions or organisations: principals, chairmen, editors, managers, government officials. Examples: applying for a job or admission, making a complaint, requesting permission.

## Layout
1. **Writer's address** and **date** — top right.
2. **Receiver's address** — on the left, below the date, beginning with the officer's title: *The Principal, Precious PS College International, …*
3. **Salutation** — *Dear Sir,* / *Dear Madam,* / *Dear Sir or Madam,*
4. **Heading (title)** — states the subject briefly, often underlined or in capitals: *APPLICATION FOR THE POST OF LIBRARY PREFECT*
5. **Body** — introduction (purpose), details in paragraphs, conclusion (what you want done).
6. **Subscription** — *Yours faithfully,* (after *Dear Sir/Madam*); *Yours sincerely,* (when you address the person by name, e.g. *Dear Mr Bello*).
7. **Signature** and **full name**.

## Language
Formal, polite, clear and brief. Avoid contractions (*don't*), slang and unnecessary greetings about the reader's family.`,
          examples: `**Opening:**
*Dear Sir,*
*REQUEST FOR PERMISSION TO USE THE SCHOOL HALL*
*I write on behalf of the Literary and Debating Society to request the use of the school hall on Friday, 14th November, 2026.*

**Closing:**
*I shall be grateful if my request is granted.*
*Yours faithfully,*
*(signature)*
*Amina Yusuf*`,
        },
        questions: [
          ["E", "Which salutation is correct for a formal letter to a principal?", "Dear Sir,", "Dear Principal Friend,", "Hello Sir!", "My dear,", "Formal letters use 'Dear Sir' or 'Dear Madam'."],
          ["E", "Which of these is a formal letter?", "an application for admission", "a letter to your cousin", "a note to your best friend", "a birthday card to your sister", "Applications go to officials."],
          ["E", "Where is the receiver's address placed in a formal letter?", "On the left, below the date", "At the top right", "At the very end", "It is not included", "The receiver's address goes on the left side."],
          ["M", "Which subscription goes with 'Dear Sir,'?", "Yours faithfully,", "Yours sincerely,", "Your loving son,", "Your friend,", "'Yours faithfully' is used when the person is not named."],
          ["M", "Which subscription goes with 'Dear Mr Bello,'?", "Yours sincerely,", "Yours faithfully,", "Yours lovingly,", "Your dear friend,", "'Yours sincerely' is used when the person is addressed by name."],
          ["M", "What is the purpose of the heading in a formal letter?", "To state the subject of the letter briefly", "To give the writer's address", "To greet the reader's family", "To show the date", "The heading tells the reader what the letter is about."],
          ["M", "How should a formal letter be signed?", "With a signature and the writer's full name", "With a nickname only", "With the first name only", "With no name", "Officials need to know exactly who wrote the letter."],
          ["H", "Which sentence is most suitable in a formal letter?", "I shall be grateful if my request is granted.", "Pls do the needful asap.", "I hope you and your family are fine, bro.", "Don't forget my request, ok?", "It is polite and formal."],
          ["H", "Which heading is best for a letter complaining about a broken street light?", "COMPLAINT ABOUT A BROKEN STREET LIGHT ON AWOLOWO ROAD", "HELLO FROM ME", "A LETTER", "READ THIS NOW", "It states the subject clearly and specifically."],
          ["H", "Which item appears in a formal letter but NOT in an informal letter?", "the receiver's address", "the writer's address", "the date", "a salutation", "Only formal letters include the receiver's address."],
        ],
      },
      {
        week: 7,
        title: "Idioms",
        subtopics: ["What an idiom is", "Idioms about difficulty and ease", "Idioms about secrets and speech", "Using idioms appropriately"],
        objectives: ["Explain what an idiom is", "Give the meanings of common idioms", "Use idioms correctly in sentences", "Recognise when idioms are too informal for a piece of writing"],
        lesson: {
          title: "Idiomatic Expressions",
          summary: "Understand and use common English idioms whose meanings are not literal.",
          minutes: 35,
          notes: `## What is an idiom?
An **idiom** is a group of words whose meaning **cannot be worked out** from the individual words. *It's raining cats and dogs* means it is raining very heavily — no animals are involved!

## Common idioms
| Idiom | Meaning |
|---|---|
| a piece of cake | very easy |
| let the cat out of the bag | reveal a secret by mistake |
| break the ice | start a conversation in an awkward situation |
| under the weather | slightly unwell |
| once in a blue moon | very rarely |
| cost an arm and a leg | be very expensive |
| burn the midnight oil | work or study late into the night |
| bury the hatchet | make peace after a quarrel |
| hit the nail on the head | say exactly the right thing |
| a blessing in disguise | something that seems bad but turns out good |
| turn a deaf ear to | refuse to listen to |
| call it a day | stop working for the day |

## Using idioms
Idioms make speech lively, but some are **informal**. Use them carefully in formal letters and reports. Never change the words of an idiom: *a piece of **cake***, not *a piece of bread*.`,
          examples: `**Example 1.** *The test was a piece of cake.* Meaning: the test was **very easy**.

**Example 2.** *She let the cat out of the bag about the surprise party.* Meaning: she **revealed the secret**.

**Example 3.** *Missing the bus was a blessing in disguise — it crashed later.* Meaning: something bad that turned out **good**.`,
        },
        questions: [
          ["E", "'The test was a piece of cake' means the test was", "very easy", "very difficult", "delicious", "very long", "'A piece of cake' means very easy."],
          ["E", "An idiom is", "an expression whose meaning is different from its individual words", "a word that means the opposite of another", "a spelling rule", "a type of punctuation", "Idioms have non-literal meanings."],
          ["E", "'I am feeling under the weather' means I am", "slightly unwell", "very happy", "outside in the rain", "very busy", "'Under the weather' means unwell."],
          ["M", "'She let the cat out of the bag' means she", "revealed a secret", "freed an animal", "bought a cat", "lost her bag", "The idiom means to reveal a secret."],
          ["M", "'We visit our village once in a blue moon' means we visit", "very rarely", "every month", "at night", "every weekend", "'Once in a blue moon' means very rarely."],
          ["M", "'That phone cost an arm and a leg' means the phone was", "very expensive", "very cheap", "broken", "stolen", "The idiom means very expensive."],
          ["M", "'The students burnt the midnight oil before the examination' means they", "studied late into the night", "set fire to a lamp", "slept early", "cooked at night", "It means working or studying late."],
          ["H", "'After years of quarrelling, the two families buried the hatchet' means they", "made peace", "hid their tools", "fought again", "moved away", "'Bury the hatchet' means end a quarrel."],
          ["H", "'Losing that job was a blessing in disguise' means losing the job", "turned out to be good", "was a religious event", "was a total disaster", "was kept secret", "A blessing in disguise seems bad but proves good."],
          ["H", "'You have hit the nail on the head' means you have", "said exactly the right thing", "injured yourself", "built something", "made a mistake", "The idiom means being exactly right."],
        ],
      },
      {
        week: 8,
        title: "Question tags",
        subtopics: ["Forming question tags", "Positive statements with negative tags", "Negative statements with positive tags", "Special tags"],
        objectives: ["Explain the purpose of a question tag", "Form tags using the correct auxiliary and pronoun", "Use a negative tag after a positive statement and vice versa", "Use special tags such as aren't I, shall we and will you"],
        lesson: {
          title: "Question Tags",
          summary: "Add short questions to statements to check information or ask for agreement.",
          minutes: 35,
          notes: `## What is a question tag?
A short question added to the end of a statement: *You are coming, **aren't you?***

## The rules
1. **Positive** statement → **negative** tag; **negative** statement → **positive** tag.
2. Repeat the **auxiliary** (helping) verb; if there is none, use **do / does / did**.
3. Use a **pronoun** for the subject.
| Statement | Tag |
|---|---|
| She is coming, | isn't she? |
| They didn't go, | did they? |
| He has finished, | hasn't he? |
| You can swim, | can't you? |
| Ada likes rice, | doesn't she? |
| The boys played well, | didn't they? |

## Special tags
- *I am right, **aren't I?*** (not *amn't I*)
- *Let's go, **shall we?***
- *Close the door, **will you?*** (commands)
- *Nobody came, **did they?*** (*nobody, somebody, everyone* take *they*)
- *There is a problem, **isn't there?***
- Words like *never, hardly, seldom* make the statement negative: *He never lies, **does he?***`,
          examples: `**Example 1.** *Musa can drive, ___?* *Answer:* **can't he?**

**Example 2.** *You didn't see her, ___?* *Answer:* **did you?**

**Example 3.** *Everyone was happy, ___?* *Answer:* **weren't they?** (*everyone* takes *they* in the tag).`,
        },
        questions: [
          ["E", "Complete: 'She is coming, ___?'", "isn't she", "is she", "doesn't she", "wasn't she", "A positive statement with 'is' takes the negative tag 'isn't she'."],
          ["E", "Complete: 'They didn't go, ___?'", "did they", "didn't they", "do they", "went they", "A negative statement takes a positive tag."],
          ["E", "Complete: 'You can swim, ___?'", "can't you", "can you", "don't you", "won't you", "Repeat the auxiliary 'can' in the negative."],
          ["M", "Complete: 'Ada likes rice, ___?'", "doesn't she", "isn't she", "don't she", "likes she", "With no auxiliary, use 'does' in the tag."],
          ["M", "Complete: 'He has finished his work, ___?'", "hasn't he", "didn't he", "has he", "isn't he", "Repeat 'has' in the negative."],
          ["M", "Complete: 'I am right, ___?'", "aren't I", "amn't I", "am I not I", "isn't I", "The special tag for 'I am' is 'aren't I'."],
          ["M", "Complete: 'Let's go to the library, ___?'", "shall we", "will we", "don't we", "let's we", "'Let's' takes the tag 'shall we'."],
          ["H", "Complete: 'Nobody came to the meeting, ___?'", "did they", "didn't they", "did he", "didn't nobody", "'Nobody' is negative and takes 'they' in the tag."],
          ["H", "Complete: 'He never tells lies, ___?'", "does he", "doesn't he", "is he", "did he not", "'Never' makes the statement negative, so the tag is positive."],
          ["H", "Complete: 'There is a problem, ___?'", "isn't there", "isn't it", "is there", "doesn't there", "'There is' takes the tag 'isn't there'."],
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
        title: "Active and passive voice",
        subtopics: ["What voice means", "Forming the passive", "Passive in different tenses", "When to use the passive"],
        objectives: ["Distinguish active from passive sentences", "Change active sentences into the passive", "Form the passive in common tenses", "Explain when the passive is preferred"],
        lesson: {
          title: "Active and Passive Voice",
          summary: "Change sentences between the active and passive voice in different tenses.",
          minutes: 40,
          notes: `## Active and passive
- **Active:** the subject **does** the action — *The boy **kicked** the ball.*
- **Passive:** the subject **receives** the action — *The ball **was kicked** by the boy.*

## Forming the passive
1. Make the **object** of the active sentence the new **subject**.
2. Use the correct form of **be** + the **past participle**.
3. Add **by + the doer** only if it is important.

## Tenses
| Tense | Active | Passive |
|---|---|---|
| Simple present | They clean the room. | The room **is cleaned**. |
| Simple past | The boy kicked the ball. | The ball **was kicked**. |
| Present continuous | They are building a house. | A house **is being built**. |
| Present perfect | Someone has stolen my pen. | My pen **has been stolen**. |
| Future | The teacher will mark the scripts. | The scripts **will be marked**. |
| Modal | You must obey the rules. | The rules **must be obeyed**. |

## When is the passive used?
- When the doer is **unknown** or **unimportant**: *My phone was stolen.*
- In **reports** and **science**: *The mixture was heated.*
Only verbs with an object (transitive verbs) can be made passive.`,
          examples: `**Example 1.** Change to the passive: *The cat caught a rat.* *Answer:* A rat **was caught** by the cat.

**Example 2.** Change to the passive: *They are painting the classroom.* *Answer:* The classroom **is being painted**.

**Example 3.** Change to the active: *The letter was written by Chika.* *Answer:* Chika **wrote** the letter.`,
        },
        questions: [
          ["E", "Which sentence is in the passive voice?", "The ball was kicked by the boy.", "The boy kicked the ball.", "The boy is kicking the ball.", "The boy will kick the ball.", "The subject (ball) receives the action."],
          ["E", "Change to the passive: 'The cat caught a rat.'", "A rat was caught by the cat.", "A rat caught the cat.", "The cat was caught by a rat.", "A rat is catching the cat.", "The object 'a rat' becomes the subject, with 'was caught'."],
          ["E", "The passive is formed with a form of 'be' plus", "the past participle", "the -ing form", "the base form", "the simple past", "For example: was written, is cleaned."],
          ["M", "Change to the passive: 'They are painting the classroom.'", "The classroom is being painted.", "The classroom is painted.", "The classroom was painting.", "The classroom has painted.", "Present continuous passive: is being + past participle."],
          ["M", "Change to the passive: 'Someone has stolen my pen.'", "My pen has been stolen.", "My pen was stealing.", "My pen has stolen.", "My pen is stealing.", "Present perfect passive: has been + past participle."],
          ["M", "Change to the passive: 'The teacher will mark the scripts.'", "The scripts will be marked by the teacher.", "The scripts will mark the teacher.", "The scripts are marking by the teacher.", "The scripts will have mark.", "Future passive: will be + past participle."],
          ["M", "Change to the active: 'The letter was written by Chika.'", "Chika wrote the letter.", "Chika was writing the letter.", "The letter wrote Chika.", "Chika has been written the letter.", "The doer 'Chika' becomes the subject."],
          ["H", "Change to the passive: 'You must obey the rules.'", "The rules must be obeyed.", "The rules must obey you.", "You must be obeyed by the rules.", "The rules must obeyed.", "Modal passive: must be + past participle."],
          ["H", "Why is the passive used in 'My phone was stolen last night'?", "The thief is unknown.", "The phone did the stealing.", "It sounds more informal.", "The sentence is in the future.", "The passive is useful when the doer is unknown."],
          ["H", "Which sentence CANNOT be changed into the passive?", "The baby slept.", "The girl sang a song.", "The dog bit the man.", "The farmer planted maize.", "'Slept' has no object, so there is nothing to become the subject."],
        ],
      },
      {
        week: 2,
        title: "Direct and indirect speech",
        subtopics: ["Punctuating direct speech", "Changing to indirect (reported) speech", "Changes in tense, pronouns and time words", "Reporting questions and commands"],
        objectives: ["Punctuate direct speech correctly", "Change statements from direct to indirect speech", "Make the necessary changes in tense, pronouns and time expressions", "Report questions and commands correctly"],
        lesson: {
          title: "Direct and Reported Speech",
          summary: "Report what people said, asked and ordered with the correct changes.",
          minutes: 45,
          notes: `## Direct speech
The **exact words** spoken, inside quotation marks:
*"I am tired," Ngozi said.* / *Ngozi said, "I am tired."*

## Indirect (reported) speech
Reports the meaning **without** quotation marks, usually after *said (that), told, asked*:
*Ngozi said **that she was** tired.*

## Changes after a past reporting verb
| Direct | Indirect |
|---|---|
| am / is | was |
| are | were |
| will | would |
| can | could |
| simple present (go) | simple past (went) |
| simple past (went) | past perfect (had gone) |
| today | that day |
| tomorrow | the next day |
| yesterday | the day before |
| here | there |
| this | that |
Pronouns change to suit the speaker: *"**I** will help **you**," he told me* → *He told me that **he** would help **me**.*

## Questions
Use *asked (if/whether/wh-word)* and **statement word order** (no question mark):
*"Where do you live?" he asked.* → *He asked **where I lived**.*
*"Are you ready?" she asked.* → *She asked **if I was** ready.*

## Commands and requests
Use *told/asked/ordered + to + verb*:
*"Close the door," the teacher said to me.* → *The teacher **told me to close** the door.*`,
          examples: `**Example 1.** *"We will come tomorrow," they said.* → They said that they **would** come **the next day**.

**Example 2.** *"Did you see the match?" Ade asked me.* → Ade asked me **if I had seen** the match.

**Example 3.** *"Don't shout," Mum said.* → Mum told us **not to shout**.`,
        },
        questions: [
          ["E", "Which sentence is correctly punctuated direct speech?", "\"I am tired,\" Ngozi said.", "\"I am tired, Ngozi said.\"", "I am tired, \"Ngozi said.\"", "\"I am tired\" Ngozi said", "Only the spoken words go inside the quotation marks, followed by a comma."],
          ["E", "Change to indirect speech: '\"I am tired,\" Ngozi said.'", "Ngozi said that she was tired.", "Ngozi said that I am tired.", "Ngozi said that she is tired now.", "Ngozi said, she was tired.", "'I am' becomes 'she was' after a past reporting verb."],
          ["E", "In indirect speech, 'tomorrow' usually becomes", "the next day", "yesterday", "today", "the day before", "Time words shift with the reporting time."],
          ["M", "Change to indirect speech: '\"We will come tomorrow,\" they said.'", "They said that they would come the next day.", "They said that we will come tomorrow.", "They said that they will come the day before.", "They said we would come tomorrow.", "'Will' becomes 'would' and 'tomorrow' becomes 'the next day'."],
          ["M", "Change to indirect speech: '\"Where do you live?\" he asked me.'", "He asked me where I lived.", "He asked me where did I live.", "He asked me where do you live?", "He asked me that where I live.", "Use statement word order and backshift the tense."],
          ["M", "Change to indirect speech: '\"Close the door,\" the teacher said to me.'", "The teacher told me to close the door.", "The teacher said me close the door.", "The teacher told me that close the door.", "The teacher asked that I closed the door?", "Commands are reported with 'told + object + to + verb'."],
          ["M", "Change to indirect speech: '\"Are you ready?\" she asked.'", "She asked if I was ready.", "She asked was I ready?", "She asked if I am ready?", "She asked that I was ready.", "Yes/no questions use 'if' or 'whether'."],
          ["H", "Change to indirect speech: '\"Did you see the match?\" Ade asked me.'", "Ade asked me if I had seen the match.", "Ade asked me did I see the match.", "Ade asked me if I saw the match yesterday?", "Ade asked me that I had seen the match.", "The simple past becomes the past perfect after 'asked'."],
          ["H", "Change to indirect speech: '\"Don't shout,\" Mum said to us.'", "Mum told us not to shout.", "Mum told us don't shout.", "Mum said us to not shout.", "Mum told that we don't shout.", "Negative commands use 'not to + verb'."],
          ["H", "Change to indirect speech: '\"I can help you,\" he told me.'", "He told me that he could help me.", "He told me that I can help you.", "He told me that he can help you.", "He said me that he could help me.", "'Can' becomes 'could', and the pronouns change to suit the speaker."],
        ],
      },
      {
        week: 3,
        title: "Phrases and clauses",
        subtopics: ["What a phrase is", "What a clause is", "Main and subordinate clauses", "Identifying phrases and clauses in sentences"],
        objectives: ["Define a phrase and a clause", "Distinguish phrases from clauses", "Distinguish main clauses from subordinate clauses", "Identify phrases and clauses in given sentences"],
        lesson: {
          title: "Phrases and Clauses",
          summary: "Tell word groups with and without a subject and finite verb apart.",
          minutes: 40,
          notes: `## Phrase
A **phrase** is a group of words **without** a subject and a finite verb. It does not make complete sense on its own.
*in the morning*, *the tall old man*, *running very fast*, *under the table*

## Clause
A **clause** is a group of words **with** a subject and a finite verb.
*the bell rang*, *when the bell rang*, *because she was ill*

## Main and subordinate clauses
- A **main (independent) clause** makes complete sense on its own: ***We went home** when the bell rang.*
- A **subordinate (dependent) clause** does not make complete sense alone; it depends on a main clause. It often begins with a subordinating word: *when, because, if, although, who, which, that*.
*We went home **when the bell rang**.*

## Finite verbs
A **finite** verb shows tense and agrees with its subject: *rang, is, walks*. *Running* and *to run* on their own are **non-finite**, so *running very fast* is a phrase.

## Quick test
Ask: *Is there a subject? Is there a finite verb?* Both → clause. Otherwise → phrase.`,
          examples: `**Example 1.** Is *under the old bridge* a phrase or a clause? *Answer:* a **phrase** (no subject, no verb).

**Example 2.** Identify the subordinate clause: *I stayed at home because I was ill.* *Answer:* **because I was ill**.

**Example 3.** Identify the main clause: *Although it rained, the match continued.* *Answer:* **the match continued**.`,
        },
        questions: [
          ["E", "Which of these is a phrase?", "under the old bridge", "the bell rang", "when she arrived", "because he was ill", "It has no subject and no finite verb."],
          ["E", "A clause must contain", "a subject and a finite verb", "a preposition and a noun", "only an adjective", "at least ten words", "That is what makes a clause."],
          ["E", "Which of these is a clause?", "the children laughed", "in the classroom", "a big red ball", "after the rain", "It has a subject (children) and a finite verb (laughed)."],
          ["M", "Identify the subordinate clause: 'I stayed at home because I was ill.'", "because I was ill", "I stayed at home", "at home", "I was", "It depends on the main clause and begins with 'because'."],
          ["M", "Identify the main clause: 'Although it rained, the match continued.'", "the match continued", "Although it rained", "it rained", "the match", "It makes complete sense on its own."],
          ["M", "Which group of words is a subordinate clause?", "when the bell rang", "the bell rang loudly", "ringing the bell", "a loud bell", "It has a subject and verb but begins with 'when' and cannot stand alone."],
          ["M", "'Running very fast' is a phrase because", "it has no subject and no finite verb", "it has a subject and a finite verb", "it is a complete sentence", "it contains a conjunction", "'Running' alone is a non-finite verb form."],
          ["H", "How many clauses are in 'The girl who won the prize is my cousin'?", "2", "1", "3", "4", "Main: 'The girl … is my cousin'; subordinate: 'who won the prize'."],
          ["H", "Identify the subordinate clause: 'The book that you lent me is interesting.'", "that you lent me", "The book is interesting", "is interesting", "you lent", "It describes 'the book' and cannot stand alone."],
          ["H", "Which sentence contains only one clause?", "The tired farmer walked slowly home.", "The farmer walked home because he was tired.", "When he was tired, the farmer walked home.", "The farmer, who was tired, walked home.", "It has only one subject–finite verb pair."],
        ],
      },
      {
        week: 4,
        title: "Speech work: silent letters",
        subtopics: ["What silent letters are", "Silent k, w, b and h", "Silent t, l, n, s and p", "Using silent letters in spelling"],
        objectives: ["Explain what a silent letter is", "Pronounce words with silent letters correctly", "Identify the silent letter in common words", "Spell words with silent letters correctly"],
        lesson: {
          title: "Silent Letters",
          summary: "Pronounce and spell words that contain letters we write but do not say.",
          minutes: 35,
          notes: `## What is a silent letter?
A **silent letter** is written but **not pronounced**. Many silent letters were once pronounced in older English.

## Common patterns
| Silent letter | Pattern | Examples |
|---|---|---|
| k | kn- at the start | knife, knee, know, knock |
| w | wr- at the start | write, wrong, wrist; also answer, sword |
| b | -mb, -bt | thumb, climb, comb, debt, doubt |
| h | some words | hour, honest, honour, heir; also ghost |
| t | -sten, -stle | listen, fasten, castle, whistle |
| l | -alk, -alm | walk, talk, calm, palm, half |
| n | -mn | autumn, column, hymn |
| s | some words | island, aisle |
| p | ps-, -pt | psalm, psychology, receipt |
| g | gn- / -gn | gnaw, sign, foreign |

## Why it matters
Pronouncing silent letters (e.g. saying the *b* in *thumb* or the *t* in *listen*) is a common error. Leaving them out in spelling is another.

## Examination tip
Oral English questions often ask: *"In which word is the underlined letter silent?"* — say each word aloud in your head.`,
          examples: `**Example 1.** Which letter is silent in *knife*? *Answer:* **k**.

**Example 2.** Which letter is silent in *listen*? *Answer:* **t**.

**Example 3.** Which letter is silent in *autumn*? *Answer:* **n**.`,
        },
        questions: [
          ["E", "Which letter is silent in 'knife'?", "k", "n", "f", "e (the first one)", "Words beginning with 'kn' have a silent k."],
          ["E", "Which letter is silent in 'thumb'?", "b", "t", "m", "h", "The b after m at the end of a word is silent."],
          ["E", "Which letter is silent in 'write'?", "w", "r", "i", "t", "Words beginning with 'wr' have a silent w."],
          ["M", "Which letter is silent in 'listen'?", "t", "l", "s", "n", "The t in '-sten' is silent."],
          ["M", "Which letter is silent in 'autumn'?", "n", "m", "a", "t", "The n after m at the end of a word is silent."],
          ["M", "In which word is the letter 'h' silent?", "hour", "house", "happy", "hotel", "'Hour' is pronounced like 'our'."],
          ["M", "Which letter is silent in 'island'?", "s", "l", "d", "i", "'Island' is pronounced /ˈaɪlənd/."],
          ["H", "In which word is the letter 'l' silent?", "calm", "call", "clean", "lamp", "The l in 'calm' is not pronounced."],
          ["H", "In which word is the letter 'p' silent?", "receipt", "paper", "support", "happy", "The p in 'receipt' is silent."],
          ["H", "In which word is the letter 'b' silent?", "debt", "about", "rubber", "bread", "The b in 'debt' is not pronounced."],
        ],
      },
      {
        week: 5,
        title: "Summary writing",
        subtopics: ["What a summary is", "Identifying main points", "Leaving out examples and repetition", "Writing points in clear sentences"],
        objectives: ["Explain what a summary is", "Pick out the main points of a passage", "Leave out examples, repetition and unnecessary detail", "Write the main points in clear sentences of their own"],
        lesson: {
          title: "Writing a Summary",
          summary: "Reduce a passage to its main points, clearly and in your own words.",
          minutes: 45,
          notes: `## What is a summary?
A **summary** gives only the **main points** of a passage, briefly and clearly, usually in your own words.

## Steps
1. **Read the question carefully.** What exactly are you asked to summarise (e.g. *the advantages of*…)? How many points or sentences?
2. **Read the passage** to understand it.
3. **Identify the relevant sentences** — underline the main point in each.
4. **Leave out** examples, illustrations, repetition, descriptions and the writer's jokes.
5. **Write each point** as a complete sentence, **one point per sentence** if asked.

## Main point versus detail
*Exercise keeps the heart healthy. For instance, walking for thirty minutes a day lowers blood pressure.* → the point is **exercise keeps the heart healthy**; the walking example is a detail.

## Language
- Use complete sentences.
- Keep the tense of the passage.
- Do not add your own opinions or information not in the passage.
- Avoid copying long sentences word for word; where possible use your own words.`,
          examples: `**Passage:** *Markets are important in our towns. They provide jobs for thousands of traders. They also give farmers a place to sell their crops. In addition, people meet friends there and share news.*

**Question:** In three sentences, state the importance of markets.

**Answer:**
1. Markets provide jobs for many people.
2. They give farmers a place to sell their produce.
3. They are places where people meet and exchange news.`,
        },
        questions: [
          ["E", "A summary contains", "only the main points of a passage", "every detail of a passage", "the writer's jokes and examples", "your personal opinions", "A summary is a brief statement of the main points."],
          ["E", "What should you do first when writing a summary?", "Read the question carefully", "Copy the first paragraph", "Write your opinion", "Count every word in the passage", "You must know exactly what to summarise."],
          ["E", "Which of these should be left out of a summary?", "examples and illustrations", "main points", "the answer to the question", "complete sentences", "Examples support points but are not points themselves."],
          ["M", "Read: 'Exercise keeps the heart healthy. For instance, walking for thirty minutes a day lowers blood pressure.' What is the main point?", "Exercise keeps the heart healthy.", "Walking lasts thirty minutes.", "Blood pressure is high.", "For instance, walking.", "The second sentence is an example supporting the first."],
          ["M", "Read: 'Markets provide jobs for thousands of traders.' Which is the best summary sentence?", "Markets provide jobs for many people.", "Thousands and thousands of traders sell things.", "I like markets very much.", "Markets are big and noisy places.", "It keeps the point in a short, clear sentence."],
          ["M", "If a question asks for points 'in one sentence each', you should", "write each point as a separate complete sentence", "write all the points in one long sentence", "write a list of single words", "copy whole paragraphs", "Follow the instruction exactly."],
          ["M", "Which should NOT be added to a summary?", "your own opinion about the topic", "the main points", "complete sentences", "the passage's key ideas", "A summary reports the passage, not your views."],
          ["H", "Read: 'Trees prevent erosion. Their roots hold the soil. Trees also give shade, and many people rest under them on hot afternoons.' In two sentences, what are the uses of trees?", "Trees prevent erosion. They provide shade.", "Trees have roots. People rest in the afternoon.", "Afternoons are hot. Soil is held.", "Trees are tall. They are green.", "These are the two main uses; the other details support them."],
          ["H", "Why is it better to use your own words in a summary?", "It shows you have understood the passage", "It makes the summary longer", "Examiners cannot read the passage", "It lets you add new ideas", "Rephrasing shows understanding."],
          ["H", "Read: 'Reading widely improves vocabulary. It also helps students write better essays. Moreover, it teaches us about other cultures.' How many main points are there?", "3", "1", "2", "5", "Vocabulary, better essays and learning about cultures."],
        ],
      },
      {
        week: 6,
        title: "Expository composition",
        subtopics: ["What an expository composition is", "Explaining a process", "Explaining the importance or causes of something", "Clear organisation and language"],
        objectives: ["State the purpose of an expository composition", "Explain a process in clear, logical steps", "Explain causes, effects or importance with supporting points", "Use clear, factual language and suitable linking words"],
        lesson: {
          title: "Explaining Clearly: Expository Writing",
          summary: "Write compositions that inform and explain, step by step or point by point.",
          minutes: 45,
          notes: `## What is expository writing?
**Expository** writing **explains** or **informs**. It does not tell a story or argue a side. Typical titles:
- *How to prepare jollof rice*
- *How to plant maize*
- *The importance of education*
- *The causes of road accidents*

## Organisation
- **Introduction:** introduce the topic and say what you will explain.
- **Body:** one point or step per paragraph, in a **logical order**.
- **Conclusion:** sum up briefly.

## Explaining a process
Use sequence words: *first, next, then, after that, finally*.
Imperatives are common: ***Wash** the rice. **Boil** the water.*

## Explaining importance or causes
Give each point with an explanation or example: *Firstly, education helps people get good jobs. Educated workers can…*
Useful linking words: *firstly, secondly, in addition, furthermore, as a result, therefore*.

## Language
- Clear, factual and precise.
- Usually the **present tense**.
- No personal stories or exaggeration.`,
          examples: `**Opening:** *Maize is one of Nigeria's most important food crops. Planting it correctly takes a few simple steps.*

**Body (process):** *First, clear the land and remove weeds. Next, make ridges about 75 cm apart. Then plant two seeds in each hole…*

**Conclusion:** *With good preparation and care, a farmer can expect a healthy maize harvest in about three months.*`,
        },
        questions: [
          ["E", "An expository composition mainly", "explains or informs", "tells a story", "argues for one side", "describes a dream", "Exposition means explaining."],
          ["E", "Which title is expository?", "How to Prepare Jollof Rice", "The Day I Got Lost", "My Best Friend's Face", "Should School Uniforms Be Banned?", "It explains a process."],
          ["E", "Which word shows the order of steps?", "next", "because", "although", "beautiful", "Sequence words show order."],
          ["M", "Which tense is usually used in expository writing?", "present tense", "future perfect", "past continuous", "conditional", "Facts and processes are usually explained in the present."],
          ["M", "Which title calls for explaining causes?", "The Causes of Road Accidents", "A Visit to the Zoo", "My Grandmother", "Once Upon a Time", "It asks for reasons."],
          ["M", "Which sentence suits an expository composition?", "Firstly, education helps people get good jobs.", "I think everyone who dislikes school is foolish!", "Once upon a time, there was a clever tortoise.", "The sky blushed pink like a shy bride.", "It states a clear, factual point."],
          ["M", "In explaining a process, the steps should be arranged", "in the order in which they are done", "in alphabetical order", "from the last to the first", "in any order", "Logical order makes a process easy to follow."],
          ["H", "Which linking word introduces an additional point?", "furthermore", "however", "although", "finally", "'Furthermore' adds another point."],
          ["H", "What should the conclusion of an expository composition do?", "briefly sum up the explanation", "introduce a completely new topic", "tell a long story", "list the steps again in full", "The conclusion rounds off the essay."],
          ["H", "Which is NOT appropriate in expository writing?", "exaggerated personal opinions", "clear facts", "logical order", "linking words", "Exposition should be factual and objective."],
        ],
      },
      {
        week: 7,
        title: "Figures of speech",
        subtopics: ["Simile and metaphor", "Personification", "Hyperbole", "Onomatopoeia and alliteration"],
        objectives: ["Define common figures of speech", "Distinguish a simile from a metaphor", "Identify personification, hyperbole, onomatopoeia and alliteration", "Explain the effect of figures of speech in writing"],
        lesson: {
          title: "Figures of Speech",
          summary: "Recognise and use figures of speech that make language vivid.",
          minutes: 40,
          notes: `## What is a figure of speech?
A way of using words beyond their plain, literal meaning to create a vivid picture or special effect.

| Figure | Definition | Example |
|---|---|---|
| **Simile** | compares two things using *like* or *as* | *She is as brave as a lion.* |
| **Metaphor** | compares directly, saying one thing **is** another | *He is a lion in battle.* |
| **Personification** | gives human qualities to non-human things | *The wind whispered through the trees.* |
| **Hyperbole** | deliberate exaggeration | *I have told you a million times.* |
| **Onomatopoeia** | words that imitate sounds | *buzz, bang, hiss, splash* |
| **Alliteration** | repetition of the same consonant sound at the start of nearby words | *Peter's pretty parrot* |

## Simile or metaphor?
If you see **like** or **as**, it is a simile. A metaphor has no *like/as*.

## Effect
Figures of speech make writing **vivid**, **memorable** and **emotional**. In comprehension and literature questions, name the figure and explain its effect: *"The simile 'as brave as a lion' emphasises her courage."*`,
          examples: `**Example 1.** *The classroom was a zoo.* *Answer:* **metaphor**.

**Example 2.** *The old car coughed and groaned up the hill.* *Answer:* **personification**.

**Example 3.** *The bees buzzed.* *Answer:* **onomatopoeia** (*buzzed* imitates the sound).`,
        },
        questions: [
          ["E", "'She is as brave as a lion' is an example of", "simile", "metaphor", "hyperbole", "onomatopoeia", "It compares using 'as … as'."],
          ["E", "'The bees buzzed' contains an example of", "onomatopoeia", "simile", "metaphor", "personification", "'Buzzed' imitates the sound."],
          ["E", "A metaphor compares two things", "directly, without 'like' or 'as'", "using 'like' or 'as'", "by imitating a sound", "by exaggerating", "A metaphor says one thing is another."],
          ["M", "'The classroom was a zoo' is an example of", "metaphor", "simile", "alliteration", "onomatopoeia", "It compares directly without 'like' or 'as'."],
          ["M", "'The wind whispered through the trees' is an example of", "personification", "hyperbole", "simile", "alliteration", "Whispering is a human action given to the wind."],
          ["M", "'I have told you a million times' is an example of", "hyperbole", "simile", "onomatopoeia", "personification", "It is a deliberate exaggeration."],
          ["M", "'Peter's pretty parrot' is an example of", "alliteration", "metaphor", "hyperbole", "simile", "The p sound is repeated."],
          ["H", "'The old car coughed and groaned up the hill' is an example of", "personification", "simile", "alliteration", "hyperbole", "Coughing and groaning are human actions."],
          ["H", "Which sentence contains a simile?", "He ran like the wind.", "He is a tower of strength.", "Time is a thief.", "The sun smiled on us.", "It uses 'like' to compare."],
          ["H", "What is the effect of the metaphor 'Her words were daggers'?", "It shows her words were hurtful.", "It shows she carried weapons.", "It shows she spoke softly.", "It shows her words were funny.", "Daggers wound; the metaphor shows the words hurt."],
        ],
      },
      {
        week: 8,
        title: "Quantifiers: much, many, few and little",
        subtopics: ["Much and many", "Few and a few", "Little and a little", "Fewer and less"],
        objectives: ["Use much with uncountable nouns and many with countable nouns", "Distinguish few from a few and little from a little", "Use fewer with countable nouns and less with uncountable nouns", "Choose suitable quantifiers in sentences"],
        lesson: {
          title: "Talking About Quantity",
          summary: "Choose the right quantifier for countable and uncountable nouns.",
          minutes: 35,
          notes: `## Countable or uncountable?
Countable nouns can be counted (*books, chairs, students*); uncountable nouns cannot (*water, money, information, rice, advice*).

## Much and many
- **many** + plural countable nouns: *many students*
- **much** + uncountable nouns: *much water*
*How **many** books? How **much** money?*
In positive statements we often use *a lot of* for both: *a lot of books, a lot of money*.

## Few / a few and little / a little
| Countable | Uncountable | Meaning |
|---|---|---|
| **a few** | **a little** | some — a small but enough amount (positive) |
| **few** | **little** | almost none — not enough (negative) |
*I have **a few** friends here, so I am not lonely.*
*She has **few** friends, so she is often lonely.*
*There is **a little** rice left — enough for one person.*
*There is **little** hope of rain.*

## Fewer and less
- **fewer** + countable: *fewer mistakes*
- **less** + uncountable: *less noise*`,
          examples: `**Example 1.** *How ___ money do you need?* *Answer:* **much**.

**Example 2.** *There were ___ people at the meeting than last week.* *Answer:* **fewer**.

**Example 3.** *We have ___ time left, so let's hurry.* (not much) *Answer:* **little**.`,
        },
        questions: [
          ["E", "Choose the correct option: 'How ___ money do you need?'", "much", "many", "few", "a few", "'Money' is uncountable, so use 'much'."],
          ["E", "Choose the correct option: 'How ___ students are in your class?'", "many", "much", "little", "a little", "'Students' is countable, so use 'many'."],
          ["E", "Which noun is uncountable?", "advice", "chair", "student", "pencil", "We say 'some advice', not 'two advices'."],
          ["M", "Choose the correct option: 'There were ___ people at the meeting than last week.'", "fewer", "less", "little", "much", "'People' is countable, so use 'fewer'."],
          ["M", "Choose the correct option: 'Please make ___ noise.'", "less", "fewer", "many", "few", "'Noise' is uncountable, so use 'less'."],
          ["M", "Choose the correct option: 'I have ___ friends here, so I am not lonely.'", "a few", "few", "a little", "much", "'A few' means some — enough to prevent loneliness."],
          ["M", "Choose the correct option: 'There is ___ rice left — enough for one person.'", "a little", "a few", "few", "many", "'Rice' is uncountable; 'a little' means a small but sufficient amount."],
          ["H", "Choose the correct option: 'She has ___ friends, so she is often lonely.'", "few", "a few", "a little", "much", "'Few' means almost none, which explains the loneliness."],
          ["H", "Choose the correct option: 'There is ___ hope of rain this week, so the farmers are worried.'", "little", "a little", "few", "many", "'Little' means almost none."],
          ["H", "Which sentence is correct?", "We made fewer mistakes this time.", "We made less mistakes this time.", "We made little mistakes this time.", "We made much mistakes this time.", "'Mistakes' is countable, so use 'fewer'."],
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
        title: "Perfect tenses",
        subtopics: ["Present perfect", "For and since", "Past perfect", "Future perfect"],
        objectives: ["Form and use the present perfect tense", "Use for and since correctly", "Use the past perfect for an earlier past action", "Form the future perfect tense"],
        lesson: {
          title: "The Perfect Tenses",
          summary: "Link actions to later times using the present, past and future perfect tenses.",
          minutes: 40,
          notes: `## Present perfect: have / has + past participle
Links the past to **now**:
- an action at an unstated time before now: *I **have visited** Abuja.*
- a recent action: *She **has just finished**.*
- an action continuing to now: *They **have lived** here **for** ten years.*
Common words: *just, already, yet, ever, never, for, since*.
Do **not** use it with a finished time: ✗ *I have seen him yesterday.* ✓ *I **saw** him yesterday.*

## For and since
- **for** + a period: *for two hours, for three years*
- **since** + a starting point: *since Monday, since 2020, since I was born*

## Past perfect: had + past participle
The **earlier** of two past actions:
*When we reached the station, the train **had** already **left**.*

## Future perfect: will have + past participle
An action completed before a future time:
*By December, I **will have finished** the course.*`,
          examples: `**Example 1.** *I have lived here ___ 2019.* *Answer:* **since**.

**Example 2.** Correct: *I have seen him yesterday.* *Answer:* I **saw** him yesterday.

**Example 3.** Complete: *By the time the doctor arrived, the patient ___ (sleep).* *Answer:* **had slept** / **had fallen asleep**.`,
        },
        questions: [
          ["E", "Choose the correct option: 'She has just ___ her homework.'", "finished", "finish", "finishing", "finishes", "The present perfect uses has + past participle."],
          ["E", "Choose the correct option: 'I have lived here ___ 2019.'", "since", "for", "from", "at", "'Since' is used with a starting point."],
          ["E", "Choose the correct option: 'They have waited ___ two hours.'", "for", "since", "from", "at", "'For' is used with a period of time."],
          ["M", "Which sentence is correct?", "I saw him yesterday.", "I have seen him yesterday.", "I have saw him yesterday.", "I seen him yesterday.", "A finished time like 'yesterday' takes the simple past."],
          ["M", "Choose the correct option: 'When we reached the station, the train ___.'", "had already left", "has already left", "already leaves", "was already leave", "The earlier past action takes the past perfect."],
          ["M", "Choose the correct option: 'By December, I ___ the course.'", "will have finished", "have finished", "had finished", "finish", "An action completed before a future time takes the future perfect."],
          ["M", "Choose the correct option: 'Have you ___ been to Calabar?'", "ever", "yet", "since", "ago", "'Ever' is used in present perfect questions about experience."],
          ["H", "Choose the correct option: 'She ___ in this school since she was ten.'", "has studied", "studied", "is studying since", "had study", "Present perfect for an action continuing from a past point to now."],
          ["H", "Choose the correct option: 'After he ___ his breakfast, he went to school.'", "had eaten", "has eaten", "eats", "was eat", "The earlier action takes the past perfect."],
          ["H", "Choose the correct option: 'The guests haven't arrived ___.'", "yet", "already", "since", "ago", "'Yet' is used in negative present perfect sentences."],
        ],
      },
      {
        week: 2,
        title: "Conditional sentences",
        subtopics: ["Zero conditional", "First conditional", "Second conditional", "Third conditional"],
        objectives: ["Identify the four main types of conditional sentences", "Form each conditional with the correct tenses", "Use were in second conditional sentences", "Choose the correct conditional for real and imaginary situations"],
        lesson: {
          title: "If-Sentences (Conditionals)",
          summary: "Talk about real, possible and imaginary situations with the correct tense patterns.",
          minutes: 40,
          notes: `## The four conditionals
| Type | Use | If-clause | Main clause | Example |
|---|---|---|---|---|
| Zero | general truths | present | present | If you heat ice, it **melts**. |
| First | real future possibility | present | will + verb | If it **rains**, we **will stay** at home. |
| Second | imaginary/unlikely present or future | past | would + verb | If I **were** rich, I **would build** a school. |
| Third | imaginary past (did not happen) | had + past participle | would have + past participle | If he **had studied**, he **would have passed**. |

## Important points
- In the **first conditional**, do **not** use *will* in the if-clause: ✗ *If it will rain…* ✓ *If it rains…*
- In the **second conditional**, use **were** for all persons in formal English: *If I **were** you, I would apologise.*
- The if-clause can come first (followed by a comma) or second (no comma): *We will stay at home if it rains.*
- **Unless** = *if … not*: *Unless you hurry, you will miss the bus.*`,
          examples: `**Example 1.** *If you ___ (heat) water to 100 °C, it boils.* *Answer:* **heat** (zero conditional).

**Example 2.** *If I ___ (be) the principal, I would build a new library.* *Answer:* **were**.

**Example 3.** *If she had left earlier, she ___ (catch) the bus.* *Answer:* **would have caught**.`,
        },
        questions: [
          ["E", "Choose the correct option: 'If it ___ tomorrow, we will stay at home.'", "rains", "will rain", "rained", "had rained", "First conditional: present tense in the if-clause."],
          ["E", "Choose the correct option: 'If you heat ice, it ___.'", "melts", "will have melted", "melted", "would melt", "Zero conditional: present in both clauses for general truths."],
          ["E", "The word 'unless' means", "if … not", "because", "although", "when", "'Unless you hurry' means 'if you do not hurry'."],
          ["M", "Choose the correct option: 'If I ___ the principal, I would build a new library.'", "were", "am", "will be", "had been being", "Second conditional uses 'were' for imaginary situations."],
          ["M", "Choose the correct option: 'If she had left earlier, she ___ the bus.'", "would have caught", "will catch", "would catch", "catches", "Third conditional: would have + past participle."],
          ["M", "Choose the correct option: 'If I had enough money, I ___ a new bicycle.'", "would buy", "will buy", "bought", "would have buy", "Second conditional: would + base verb."],
          ["M", "Which sentence is correct?", "If you study hard, you will pass.", "If you will study hard, you will pass.", "If you studied hard, you will pass.", "If you study hard, you would have passed.", "First conditional: present + will."],
          ["H", "Choose the correct option: 'If he ___, he would have passed the examination.'", "had studied", "studied", "has studied", "would study", "Third conditional: had + past participle in the if-clause."],
          ["H", "Which sentence describes an imaginary situation in the past that did not happen?", "If we had left early, we would have arrived on time.", "If we leave early, we will arrive on time.", "If we left early, we would arrive on time.", "If you leave early, you arrive on time.", "The third conditional refers to an unreal past."],
          ["H", "Choose the correct option: '___ you apologise, she will not forgive you.'", "Unless", "If", "When", "Because", "'Unless you apologise' means 'if you do not apologise'."],
        ],
      },
      {
        week: 3,
        title: "Punctuation: apostrophe, quotation marks, colon and semicolon",
        subtopics: ["The apostrophe for possession", "The apostrophe for contraction", "Quotation marks", "The colon and semicolon"],
        objectives: ["Use the apostrophe correctly to show possession", "Use the apostrophe in contractions", "Punctuate quotations correctly", "Use colons and semicolons appropriately"],
        lesson: {
          title: "More Punctuation",
          summary: "Use apostrophes, quotation marks, colons and semicolons correctly.",
          minutes: 40,
          notes: `## The apostrophe (')
**Possession**
- singular noun + **'s**: *the boy**'s** bag* (one boy)
- plural noun ending in *s* + **'**: *the boys**'** bags* (several boys)
- plural not ending in *s* + **'s**: *the children**'s** toys, the women**'s** meeting*
**Contraction** — shows missing letters: *do not → don't, it is → it's, I am → I'm*.
**No apostrophe** for possessive pronouns (*its, yours, theirs, hers*) or ordinary plurals (*apples*, not *apple's*).

## Quotation marks (" ")
- enclose direct speech: *"Come in," she said.*
- enclose titles of short works and special words: *the poem "Abiku"*.

## Colon (:)
Introduces a list, an explanation or a quotation after a complete clause:
*You need three things: a pen, a ruler and an eraser.*

## Semicolon (;)
- joins two closely related **complete** clauses without a conjunction: *It was late; we went home.*
- separates items in a list that already contains commas.`,
          examples: `**Example 1.** Punctuate: *the girls bags* (several girls). *Answer:* the girls**'** bags.

**Example 2.** Correct: *The dog wagged it's tail.* *Answer:* The dog wagged **its** tail.

**Example 3.** Punctuate: *Bring the following a pen a ruler and a book* *Answer:* Bring the following**:** a pen**,** a ruler and a book.`,
        },
        questions: [
          ["E", "Which shows the bag belonging to one boy?", "the boy's bag", "the boys bag", "the boys' bag", "the boy's' bag", "A singular noun takes 's for possession."],
          ["E", "What is the contraction of 'do not'?", "don't", "do'nt", "dont", "d'ont", "The apostrophe replaces the missing o."],
          ["E", "Which sentence is correct?", "The dog wagged its tail.", "The dog wagged it's tail.", "The dog wagged its' tail.", "The dog wagged it is tail.", "'Its' (possessive) has no apostrophe."],
          ["M", "Which shows the bags belonging to several girls?", "the girls' bags", "the girl's bags", "the girls's bags", "the girls bag's", "Plural nouns ending in s take an apostrophe after the s."],
          ["M", "Which is correct?", "the children's toys", "the childrens' toys", "the childrens toys", "the children toy's", "'Children' is plural without s, so add 's."],
          ["M", "Which sentence uses a colon correctly?", "You need three things: a pen, a ruler and an eraser.", "You need: three things a pen, a ruler and an eraser.", "You: need three things, a pen, a ruler and an eraser.", "You need three things a pen: a ruler and an eraser.", "The colon follows a complete clause and introduces the list."],
          ["M", "Which sentence uses a semicolon correctly?", "It was late; we went home.", "It was; late we went home.", "It was late we; went home.", "It; was late we went home.", "The semicolon joins two related complete clauses."],
          ["H", "Which sentence is correctly punctuated?", "\"Come in,\" she said.", "\"Come in\", she said", "Come in, \"she said.\"", "\"Come in, she said\".", "The comma goes inside the closing quotation mark."],
          ["H", "Which sentence uses apostrophes correctly?", "It's time for the women's meeting.", "Its time for the womens' meeting.", "It's time for the womens meeting.", "Its' time for the women's meeting.", "'It's' means 'it is'; 'women's' shows possession."],
          ["H", "Which is correct for plural 'apple'?", "apples", "apple's", "apples'", "apple'es", "Ordinary plurals do not take an apostrophe."],
        ],
      },
      {
        week: 4,
        title: "Homophones and homonyms",
        subtopics: ["Homophones", "Commonly confused homophones", "Homonyms", "Choosing the correct word in context"],
        objectives: ["Define homophones and homonyms", "Distinguish commonly confused homophones", "Recognise different meanings of homonyms", "Choose the correct word to fit a sentence"],
        lesson: {
          title: "Words That Sound Alike",
          summary: "Choose correctly between words that sound the same or share the same spelling.",
          minutes: 35,
          notes: `## Homophones
**Homophones** sound the **same** but differ in **spelling and meaning**.
| Words | Meanings |
|---|---|
| there / their / they're | a place / belonging to them / they are |
| to / too / two | direction / also, excessively / the number 2 |
| peace / piece | calm / a part |
| weather / whether | climate / if |
| principal / principle | head of a school, main / a rule or belief |
| stationary / stationery | not moving / writing materials |
| right / write | correct, direction / put words on paper |
| sea / see | ocean / look |

## Homonyms
**Homonyms** have the **same spelling and pronunciation** but **different meanings**:
- **bank**: the side of a river / a place that keeps money
- **bat**: an animal / a piece of sports equipment
- **fair**: just / light-coloured / a funfair

## Tips
- *Stationery* has **e** for **envelope**.
- The *principal* is your *pal*.
- Read the **whole sentence** to decide which word is meant.`,
          examples: `**Example 1.** *___ going to the market.* (they are) *Answer:* **They're**.

**Example 2.** *Please buy some ___ (pens and paper).* *Answer:* **stationery**.

**Example 3.** *I don't know ___ to go or stay.* *Answer:* **whether**.`,
        },
        questions: [
          ["E", "Choose the correct word: 'The students left ___ bags in the hall.'", "their", "there", "they're", "thier", "'Their' shows possession."],
          ["E", "Choose the correct word: 'I have ___ brothers.'", "two", "too", "to", "tow", "'Two' is the number."],
          ["E", "Words that sound the same but have different spellings and meanings are", "homophones", "antonyms", "synonyms", "idioms", "Homophones sound alike."],
          ["M", "Choose the correct word: 'Please buy some ___ — pens, paper and envelopes.'", "stationery", "stationary", "stationry", "stationarie", "'Stationery' (with e) means writing materials."],
          ["M", "Choose the correct word: 'The ___ addressed the students at assembly.'", "principal", "principle", "principel", "principall", "The principal is the head of the school."],
          ["M", "Choose the correct word: 'I don't know ___ to go or stay.'", "whether", "weather", "wether", "whither", "'Whether' means if."],
          ["M", "Choose the correct word: 'The car remained ___ at the traffic light.'", "stationary", "stationery", "stationry", "stationaree", "'Stationary' means not moving."],
          ["H", "In which sentence is 'bank' used to mean the side of a river?", "We sat on the bank and fished.", "She saved money in the bank.", "The bank opens at eight.", "He works at a bank in Lagos.", "'Bank' is a homonym; here it means the riverside."],
          ["H", "Choose the correct word: 'Honesty is an important ___.'", "principle", "principal", "principally", "principled", "A principle is a rule or belief."],
          ["H", "Choose the correct word: 'After the war, the people wanted ___.'", "peace", "piece", "peas", "pies", "'Peace' means calm and freedom from war."],
        ],
      },
      {
        week: 5,
        title: "Speech work: intonation",
        subtopics: ["What intonation is", "Falling intonation", "Rising intonation", "Intonation in question tags and lists"],
        objectives: ["Explain intonation", "Use falling intonation for statements, commands and wh-questions", "Use rising intonation for yes/no questions", "Use suitable intonation in question tags and lists"],
        lesson: {
          title: "The Music of Speech: Intonation",
          summary: "Use rising and falling tunes to show meaning and attitude in speech.",
          minutes: 35,
          notes: `## What is intonation?
**Intonation** is the rise and fall of the voice (pitch) over a whole sentence. It shows the **type of sentence** and the speaker's **attitude**.

## Falling tune (↘)
- **statements**: *I live in Kano.* ↘
- **commands**: *Shut the door.* ↘
- **wh-questions** (who, what, where, when, why, how): *Where are you going?* ↘
- **exclamations**: *What a surprise!* ↘

## Rising tune (↗)
- **yes/no questions**: *Are you coming?* ↗
- **polite requests** and incomplete thoughts: *Could you help me?* ↗
- **items in a list** before the last: *We bought yams ↗, beans ↗ and rice ↘.*

## Question tags
- **Falling** tag: the speaker is sure and expects agreement — *It's hot today, isn't it?* ↘
- **Rising** tag: the speaker is not sure and wants information — *You're coming, aren't you?* ↗

## Why it matters
The same words can mean different things: *You're leaving.* ↘ (statement) / *You're leaving?* ↗ (surprised question).`,
          examples: `**Example 1.** Which tune for *What is your name?* *Answer:* **falling** (wh-question).

**Example 2.** Which tune for *Is this your book?* *Answer:* **rising** (yes/no question).

**Example 3.** *We need pens, rulers and erasers.* *Answer:* rise on *pens* and *rulers*, fall on *erasers*.`,
        },
        questions: [
          ["E", "Intonation refers to", "the rise and fall of the voice in speech", "the spelling of words", "the number of syllables in a word", "the meaning of idioms", "Intonation is the pitch pattern of speech."],
          ["E", "Which tune is used for a statement such as 'I live in Kano'?", "falling", "rising", "level", "rising then falling on each word", "Statements usually end with a falling tune."],
          ["E", "Which tune is used for 'Are you coming?'", "rising", "falling", "level", "no tune at all", "Yes/no questions usually rise."],
          ["M", "Which tune is used for 'Where are you going?'", "falling", "rising", "level", "rising on every word", "Wh-questions usually fall."],
          ["M", "Which tune is used for a command such as 'Shut the door'?", "falling", "rising", "level", "rising then rising", "Commands usually fall."],
          ["M", "In 'We bought yams, beans and rice', where does the voice fall?", "on 'rice', the last item", "on 'yams', the first item", "on every item", "on 'bought'", "Earlier items rise; the last item falls."],
          ["M", "A falling tune on a question tag shows that the speaker", "is sure and expects agreement", "is unsure and wants information", "is angry", "is giving a command", "A falling tag seeks confirmation."],
          ["H", "A rising tune on 'You're coming, aren't you?' shows that the speaker", "is not sure and wants information", "is certain", "is giving an order", "is exclaiming", "A rising tag asks a real question."],
          ["H", "'You're leaving?' said with a rising tune expresses", "a surprised question", "a firm statement", "a command", "a list", "The rise turns the statement into a question."],
          ["H", "Which sentence would normally end with a rising tune?", "Could you help me, please?", "Help me now.", "Why did you do that?", "What a lovely day!", "Polite yes/no requests usually rise."],
        ],
      },
      {
        week: 6,
        title: "Report writing",
        subtopics: ["What a report is", "Structure of a report", "Language of reports", "Writing a report of an event"],
        objectives: ["State the purpose of a report", "Organise a report with a title, introduction, body and conclusion", "Use formal, factual language and the past tense", "Write a report of an event or incident"],
        lesson: {
          title: "Writing a Report",
          summary: "Give an accurate, organised account of an event for someone in authority.",
          minutes: 45,
          notes: `## What is a report?
A **report** gives a **factual, accurate and organised** account of an event, incident or investigation to someone who needs the information, e.g. the principal or a club.
Examples: *a report on the inter-house sports*, *a report of an accident*, *a report on the state of the school library*.

## Structure
1. **Title** — clear and specific: *REPORT ON THE 2026 INTER-HOUSE SPORTS COMPETITION*
2. **Introduction** — who asked for it, what it is about, when and where.
3. **Body** — the facts in logical (usually time) order, one aspect per paragraph; findings.
4. **Conclusion / recommendations** — a summary and any suggestions.
5. **Name, position and date** of the writer.

## Language
- **Formal** and **objective** — facts, not feelings.
- Mostly the **past tense**: *The event began at 9 a.m.*
- Precise details: times, numbers, names.
- Passive forms are common: *The prizes were presented by the Chairman.*

## Report or story?
A report states **what happened**, clearly and briefly; a story tries to entertain.`,
          examples: `**Title:** *REPORT ON THE ACCIDENT AT THE SCHOOL GATE*

**Introduction:** *As requested by the Principal, this report describes the accident that occurred at the school gate on Tuesday, 3rd March, 2026, at about 2 p.m.*

**Recommendation:** *To prevent a repeat, speed bumps should be placed on the road in front of the school.*

**Ending:** *Abubakar Musa, Senior Prefect, 4th March, 2026.*`,
        },
        questions: [
          ["E", "A report gives", "a factual account of an event", "an imaginary story", "a personal diary entry", "a poem about nature", "Reports are factual."],
          ["E", "Which tense is mostly used in a report of an event?", "past tense", "future tense", "present continuous", "conditional", "The event has already happened."],
          ["E", "Which is the best title for a report?", "REPORT ON THE 2026 INTER-HOUSE SPORTS COMPETITION", "What a Day!", "Sports", "My Story", "It is clear and specific."],
          ["M", "What should the introduction of a report state?", "What the report is about, who asked for it, when and where", "The writer's favourite food", "A joke to amuse the reader", "Only the recommendations", "The introduction sets out the purpose and context."],
          ["M", "Which sentence suits a report?", "The competition began at 9 a.m. and ended at 4 p.m.", "Wow, it was the most amazing day ever!!!", "I think Green House cheated, and I hate them.", "Once upon a time there was a race.", "It is factual and precise."],
          ["M", "Recommendations in a report", "suggest actions to be taken", "tell a story", "describe the writer's feelings", "repeat the title", "They propose improvements."],
          ["M", "The language of a report should be", "formal and objective", "slangy and emotional", "poetic and imaginative", "humorous and exaggerated", "Reports present facts fairly."],
          ["H", "Which sentence uses the passive in a way common in reports?", "The prizes were presented by the Chairman.", "The Chairman, he presents prizes.", "Presenting of prizes the Chairman.", "The Chairman will present prizes tomorrow maybe.", "Passive forms focus on the action."],
          ["H", "What should appear at the end of a report?", "the writer's name, position and the date", "a riddle", "the receiver's address only", "a list of spelling words", "It shows who wrote the report and when."],
          ["H", "How does a report differ from a narrative?", "A report states facts clearly; a narrative tells a story to entertain", "A report is always longer", "A narrative never uses the past tense", "They are exactly the same", "Their purposes are different."],
        ],
      },
      {
        week: 7,
        title: "Vocabulary: register of school and sports",
        subtopics: ["What register means", "Words associated with school", "Words associated with sports", "Choosing words to suit the topic"],
        objectives: ["Explain the meaning of register", "Use vocabulary associated with school life accurately", "Use vocabulary associated with sports accurately", "Match specialised words to their fields"],
        lesson: {
          title: "Register: School and Sports",
          summary: "Learn and use the special vocabulary of school life and sports.",
          minutes: 35,
          notes: `## What is register?
**Register** is the special vocabulary used in a particular field or occupation. Using the right register makes writing precise.

## School
| Word | Meaning |
|---|---|
| syllabus | outline of topics to be studied in a subject |
| timetable | schedule of lessons and times |
| curriculum | all the subjects and learning in a school |
| assembly | gathering of the whole school |
| prefect | student given responsibility |
| invigilator | person who supervises an examination |
| truant | a student who stays away from school without permission |
| rustication | temporary sending away from school as punishment |

## Sports
| Word | Meaning |
|---|---|
| referee | official in football, boxing, etc. |
| umpire | official in tennis, cricket, etc. |
| spectators | people watching a match |
| penalty | free shot awarded after a foul |
| goalkeeper | player who guards the goal |
| trophy | cup or prize for winning |
| stadium | large sports ground with seats |
| draw | match with equal scores |`,
          examples: `**Example 1.** *The ___ blew the whistle to end the football match.* *Answer:* **referee**.

**Example 2.** *The person who supervises an examination is the ___.* *Answer:* **invigilator**.

**Example 3.** *Thousands of ___ cheered in the stadium.* *Answer:* **spectators**.`,
        },
        questions: [
          ["E", "Who controls a football match?", "the referee", "the umpire", "the invigilator", "the prefect", "A referee officiates in football."],
          ["E", "The schedule showing lessons and times is the", "timetable", "syllabus", "trophy", "register", "A timetable lists lessons and times."],
          ["E", "People who watch a match are called", "spectators", "players", "referees", "coaches", "Spectators watch."],
          ["M", "The person who supervises an examination is the", "invigilator", "referee", "umpire", "coach", "Invigilators supervise examinations."],
          ["M", "The official in a tennis match is called the", "umpire", "referee", "linesman in football", "invigilator", "Tennis and cricket use umpires."],
          ["M", "A student who stays away from school without permission is a", "truant", "prefect", "spectator", "graduate", "Truancy is unauthorised absence."],
          ["M", "The outline of topics to be studied in a subject is the", "syllabus", "timetable", "assembly", "trophy", "A syllabus lists the topics."],
          ["H", "A match that ends with equal scores is a", "draw", "penalty", "trophy", "foul", "Equal scores mean a draw."],
          ["H", "The cup given to the winning team is a", "trophy", "medal ceremony", "stadium", "penalty", "Trophies are awarded to winners."],
          ["H", "In the register of school, 'rustication' means", "temporary sending away from school as punishment", "a type of examination", "the school timetable", "a sports competition", "It is a disciplinary measure."],
        ],
      },
      {
        week: 8,
        title: "Literature: elements of prose",
        subtopics: ["Plot and conflict", "Setting", "Characters and characterisation", "Point of view and theme"],
        objectives: ["Identify the plot and conflict of a story", "Describe the setting of a story", "Distinguish protagonist and antagonist and explain characterisation", "Identify point of view and theme"],
        lesson: {
          title: "Elements of Prose Fiction",
          summary: "Analyse stories using plot, setting, characters, point of view and theme.",
          minutes: 40,
          notes: `## Plot
The **plot** is the sequence of events: **exposition** (introduction) → **rising action** → **climax** (turning point) → **falling action** → **resolution**.
**Conflict** is the struggle that drives the plot: between characters, between a character and nature or society, or within a character's mind.

## Setting
**Where** and **when** the story takes place — the place, time, season and social background.

## Characters
- **Protagonist**: the main character.
- **Antagonist**: the character or force that opposes the protagonist.
- **Characterisation**: how a writer shows what characters are like — through their actions, words, thoughts, appearance and what others say about them.
- **Round** characters are complex and change; **flat** characters have one or two traits.

## Point of view
- **First person**: told by a character using *I* — *I walked into the room…*
- **Third person**: told by an outside narrator using *he, she, they*.

## Theme
The central **message or idea** about life: e.g. *hard work leads to success*, *greed destroys*, *the value of honesty*.`,
          examples: `**Example 1.** *"I opened the letter with shaking hands."* Point of view? *Answer:* **first person**.

**Example 2.** In a story where a poor girl works hard and wins a scholarship, a likely theme is: **hard work brings success**.

**Example 3.** The wicked uncle who tries to steal the hero's farm is the **antagonist**.`,
        },
        questions: [
          ["E", "The main character of a story is the", "protagonist", "antagonist", "narrator's friend", "setting", "The protagonist is the central character."],
          ["E", "The time and place of a story is its", "setting", "plot", "theme", "conflict", "Setting answers 'when' and 'where'."],
          ["E", "The sequence of events in a story is its", "plot", "theme", "setting", "tone", "The plot is what happens."],
          ["M", "'I opened the letter with shaking hands.' This story is told from the", "first-person point of view", "third-person point of view", "second-person point of view", "no point of view", "The narrator uses 'I'."],
          ["M", "The character or force that opposes the main character is the", "antagonist", "protagonist", "narrator", "author", "The antagonist creates opposition."],
          ["M", "The turning point or most intense moment of a plot is the", "climax", "exposition", "resolution", "setting", "The climax is the peak of tension."],
          ["M", "The struggle that drives a story is called", "conflict", "setting", "theme", "dialogue", "Conflict creates the story's tension."],
          ["H", "A poor girl works hard and wins a scholarship. Which is the most likely theme?", "Hard work leads to success.", "Poverty is permanent.", "Scholarships are easy to win.", "Girls should not study.", "The story's events point to this message."],
          ["H", "How does a writer show characterisation?", "Through characters' actions, words, thoughts and what others say about them", "Only through the book's title", "Only through the cover picture", "By listing the chapter numbers", "Characterisation reveals personality in several ways."],
          ["H", "A character who is complex and changes during the story is described as", "round", "flat", "static and simple", "minor", "Round characters are developed and can change."],
        ],
      },
    ],
  },
];
