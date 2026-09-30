import type { TermPlan } from "../types";

/** JSS1 English Language — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Speech work: pure vowel sounds",
        subtopics: ["What a vowel sound is", "Short and long vowels", "Contrasting /ɪ/ and /iː/", "Contrasting /æ/ and /ɑː/"],
        objectives: ["Explain the difference between vowel letters and vowel sounds", "Distinguish short vowels from long vowels", "Identify words containing /ɪ/ and /iː/", "Identify words containing /æ/ and /ɑː/"],
        lesson: {
          title: "Pure Vowel Sounds",
          summary: "Hear and produce short and long pure vowels, and avoid common confusions.",
          minutes: 35,
          notes: `## Letters and sounds
English has only five vowel **letters** (a, e, i, o, u) but **twelve pure vowel sounds** (monophthongs) in the accent used in West African examinations. We write sounds between slashes using phonetic symbols, e.g. /iː/.

## Short and long vowels
The mark **ː** shows a **long** vowel.
| Short | Example | Long | Example |
|---|---|---|---|
| /ɪ/ | sit, ship, fill | /iː/ | seat, sheep, feel |
| /æ/ | cat, hat, bad | /ɑː/ | cart, heart, bard |
| /ʊ/ | full, pull, look | /uː/ | fool, pool, Luke |
| /ɒ/ | cot, pot, shot | /ɔː/ | caught, port, short |

## Why it matters
Changing the vowel changes the meaning: *ship* /ʃɪp/ and *sheep* /ʃiːp/ are different words. Many Nigerian speakers use the same sound for both, so practise the difference carefully.

## Spelling does not decide the sound
- The letters *ee*, *ea*, *ie* and *ey* often give /iː/: *meet, meat, field, key*.
- But *women* is pronounced /ˈwɪmɪn/ — the letter *o* here gives /ɪ/.
- *Heart* has the letters *ea* but the sound /ɑː/.

Always listen to the **sound**, not the spelling.`,
          examples: `**Example 1.** Which word has /iː/: *bit* or *beat*? *Answer:* **beat** (the long vowel).

**Example 2.** Which word has /æ/: *cart* or *cat*? *Answer:* **cat** — *cart* has the long /ɑː/.

**Example 3.** Say the pairs aloud, stretching the long vowels: *fill – feel*, *pull – pool*, *cot – caught*.`,
        },
        questions: [
          ["E", "Which of these words contains the long vowel sound /iː/?", "seat", "sit", "set", "sat", "In 'seat' the letters 'ea' give the long /iː/; 'sit' has the short /ɪ/."],
          ["E", "Which of these words contains the short vowel sound /ɪ/?", "ship", "sheep", "shape", "shop", "'Ship' has the short /ɪ/; 'sheep' has the long /iː/."],
          ["E", "How many vowel letters are there in the English alphabet?", "5", "12", "20", "26", "The vowel letters are a, e, i, o and u."],
          ["M", "Which word has the same vowel sound as 'heart'?", "cart", "hurt", "hat", "heat", "'Heart' and 'cart' both have the long /ɑː/."],
          ["M", "Which word contains the vowel sound /æ/?", "bad", "bard", "bed", "bud", "'Bad' has the short /æ/; 'bard' has the long /ɑː/."],
          ["M", "Which word contains the vowel sound /uː/?", "fool", "full", "foul", "fall", "'Fool' has the long /uː/; 'full' has the short /ʊ/."],
          ["M", "Which word contains the long vowel /ɔː/?", "caught", "cot", "cut", "coat", "'Caught' has /ɔː/; 'cot' has the short /ɒ/."],
          ["H", "In which word does the letter 'o' represent the sound /ɪ/?", "women", "woman", "go", "not", "'Women' is pronounced /ˈwɪmɪn/."],
          ["H", "Which pair of words differ only in their vowel sounds /ɪ/ and /iː/?", "fill – feel", "fill – fall", "feel – fail", "fall – full", "'Fill' has /ɪ/ and 'feel' has /iː/; the consonants are the same."],
          ["H", "Which word does NOT contain the sound /iː/?", "bread", "key", "field", "meet", "'Bread' has the short vowel /e/, even though it is spelt with 'ea'."],
        ],
      },
      {
        week: 2,
        title: "Nouns",
        subtopics: ["Common and proper nouns", "Concrete and abstract nouns", "Collective nouns", "Countable and uncountable nouns"],
        objectives: ["Define a noun and identify nouns in sentences", "Distinguish common, proper, concrete and abstract nouns", "Use collective nouns correctly", "Distinguish countable from uncountable nouns"],
        lesson: {
          title: "Kinds of Nouns",
          summary: "Identify and use the main kinds of nouns correctly in speech and writing.",
          minutes: 35,
          notes: `## What is a noun?
A **noun** is a word that names a person, place, thing, animal or idea: *Ada, Kano, table, goat, honesty*.

## Kinds of nouns
| Kind | Meaning | Examples |
|---|---|---|
| Common | a general name | boy, city, river |
| Proper | a particular name — always begins with a **capital letter** | Chinedu, Lagos, River Niger |
| Concrete | can be seen, touched, heard, smelt or tasted | chair, music, perfume |
| Abstract | an idea, quality or feeling | honesty, joy, freedom |
| Collective | a group taken as one | a **flock** of sheep, a **team** of players |

## Countable and uncountable nouns
- **Countable** nouns have singular and plural forms: *one book, two books*.
- **Uncountable** nouns have no plural and cannot take *a/an*: *furniture, information, equipment, advice, luggage*. We say *some furniture* or *two pieces of furniture*, **not** *furnitures*.

## Common collective nouns
a **herd** of cattle, a **swarm** of bees, a **pride** of lions, a **bunch** of keys, a **crowd** of people, a **fleet** of ships, a **class** of students.`,
          examples: `**Example 1.** Pick out the abstract noun: *The farmer's kindness surprised the stranger.* *Answer:* **kindness**.

**Example 2.** Correct the sentence: *She bought new furnitures.* *Answer:* She bought new **furniture** (or *new pieces of furniture*).

**Example 3.** Complete: *a ___ of bees*. *Answer:* **swarm**.`,
        },
        questions: [
          ["E", "Which word is a proper noun?", "Abuja", "city", "river", "school", "A proper noun names a particular place and begins with a capital letter."],
          ["E", "Which word is an abstract noun?", "honesty", "table", "goat", "pencil", "Honesty is a quality; it cannot be seen or touched."],
          ["E", "Complete the phrase: a ___ of bees.", "swarm", "herd", "pride", "fleet", "'Swarm' is the collective noun for bees."],
          ["M", "Which sentence is correct?", "She bought some new furniture.", "She bought some new furnitures.", "She bought a new furnitures.", "She bought many furniture.", "'Furniture' is uncountable, so it has no plural form."],
          ["M", "Pick out the abstract noun: 'The farmer's kindness surprised the stranger.'", "kindness", "farmer", "stranger", "surprised", "Kindness names a quality."],
          ["M", "Which of these nouns is uncountable?", "information", "book", "chair", "student", "We say 'some information', never 'informations'."],
          ["M", "Complete the phrase: a ___ of cattle.", "herd", "flock", "swarm", "bunch", "'Herd' is used for cattle."],
          ["H", "Which sentence uses capital letters correctly?", "Mr Bello travelled to Enugu on Monday.", "Mr bello travelled to enugu on Monday.", "mr Bello Travelled to Enugu on monday.", "Mr Bello travelled to Enugu on monday.", "Names of people, places and days of the week are proper nouns and take capital letters."],
          ["H", "Which group contains only concrete nouns?", "stone, music, perfume", "joy, stone, music", "honesty, perfume, stone", "freedom, joy, music", "Music can be heard and perfume can be smelt, so all three are concrete."],
          ["E", "A noun is a word that", "names a person, place, thing or idea", "describes an action", "joins two sentences", "describes a verb", "Nouns are naming words."],
        ],
      },
      {
        week: 3,
        title: "Pronouns",
        subtopics: ["Personal pronouns: subject and object forms", "Possessive pronouns", "Reflexive pronouns", "Demonstrative pronouns"],
        objectives: ["Explain what a pronoun is", "Use subject and object pronouns correctly", "Use possessive and reflexive pronouns correctly", "Avoid common errors such as 'between you and I'"],
        lesson: {
          title: "Using Pronouns Correctly",
          summary: "Replace nouns with the right pronouns and avoid the most common pronoun errors.",
          minutes: 35,
          notes: `## What is a pronoun?
A **pronoun** takes the place of a noun so that we do not repeat it: *Musa is tired because **he** walked far.*

## Personal pronouns
| Subject | Object | Possessive | Reflexive |
|---|---|---|---|
| I | me | mine | myself |
| you | you | yours | yourself / yourselves |
| he | him | his | himself |
| she | her | hers | herself |
| it | it | its | itself |
| we | us | ours | ourselves |
| they | them | theirs | themselves |

- Use the **subject** form before the verb: ***She** and **I** are friends.*
- Use the **object** form after a verb or preposition: *The teacher praised **her** and **me**.* / *between you and **me***.

## Tips
- To choose between *I* and *me*, remove the other person: *The prize was given to (Ada and) **me*** — "given to me".
- Possessive pronouns never take an apostrophe: *its, yours, theirs*. (*It's* means *it is*.)
- Reflexive pronouns refer back to the subject: *He hurt **himself***. There are no words *hisself* or *theirselves*.

## Demonstrative pronouns
*this, that, these, those*: ***These** are my books.*`,
          examples: `**Example 1.** Choose: *Between you and (I / me), the test was easy.* *Answer:* **me** (after the preposition *between*).

**Example 2.** Choose: *(Him / He) and his brother came early.* *Answer:* **He** (subject of *came*).

**Example 3.** Correct: *They did it theirselves.* *Answer:* They did it **themselves**.`,
        },
        questions: [
          ["E", "Choose the correct pronoun: '___ and his brother came early.'", "He", "Him", "His", "Himself", "The pronoun is the subject of 'came', so the subject form 'He' is used."],
          ["E", "Choose the correct option: 'This book is ___.'", "mine", "my", "me", "I", "The possessive pronoun 'mine' stands alone without a noun."],
          ["E", "A pronoun is a word that", "takes the place of a noun", "describes a noun", "shows an action", "joins sentences", "Pronouns replace nouns to avoid repetition."],
          ["M", "Choose the correct option: 'Between you and ___, the test was easy.'", "me", "I", "myself", "mine", "After a preposition such as 'between', use the object form 'me'."],
          ["M", "Choose the correct option: 'The teacher praised Ada and ___.'", "me", "I", "mine", "myself", "Remove 'Ada and': 'The teacher praised me.'"],
          ["M", "Which sentence is correct?", "They did the work themselves.", "They did the work theirselves.", "They did the work themself.", "They did the work their own.", "The reflexive form of 'they' is 'themselves'."],
          ["M", "Choose the correct option: 'The dog wagged ___ tail.'", "its", "it's", "it", "its'", "'Its' is the possessive; 'it's' means 'it is'."],
          ["H", "Choose the correct option: 'Neither Tunde nor ___ was present.'", "I", "me", "myself", "mine", "The pronoun is part of the subject of 'was present', so the subject form 'I' is used."],
          ["H", "Identify the demonstrative pronoun: 'Those are the books we need.'", "Those", "books", "we", "need", "'Those' points to the books and stands in place of a noun."],
          ["H", "Which sentence uses a reflexive pronoun correctly?", "Chioma taught herself to type.", "Chioma and myself went to church.", "Myself will do it.", "Give it to myself.", "A reflexive pronoun refers back to the subject of the same sentence (Chioma … herself)."],
        ],
      },
      {
        week: 4,
        title: "Reading comprehension: main ideas",
        subtopics: ["Reading actively", "Finding the main idea of a paragraph", "Supporting details", "Choosing a suitable title"],
        objectives: ["Read a passage carefully for understanding", "Identify the main idea of a paragraph", "Distinguish main ideas from supporting details", "Choose a suitable title for a passage"],
        lesson: {
          title: "Finding the Main Idea",
          summary: "Read passages actively and pick out the main idea, key details and a good title.",
          minutes: 40,
          notes: `## Read actively
1. **Skim** the passage quickly to get the general idea.
2. **Read** it again carefully, sentence by sentence.
3. Read the questions, then **scan** the passage to find the answers.

## The main idea
The **main idea** is what a paragraph is mostly about. It is often stated in the **topic sentence**, which is usually — but not always — the first sentence. The other sentences give **supporting details**: examples, reasons, facts and descriptions.

Ask yourself: *"What one point is the writer making here?"*

## A good title
A good title is **short** and covers the **whole** passage, not just one detail.

## Answering questions
- Use your **own words** where you are asked to.
- Do not bring in outside knowledge — answer from the passage.
- For "which of the following is true" questions, check each option against the text.

## Sample passage
*Trees are very useful to us. They give us shade from the hot sun. Their fruits are food for people and animals. Their roots hold the soil together and prevent erosion.*
Main idea: **trees are very useful**. Supporting details: shade, food, preventing erosion.`,
          examples: `**Example 1.** In the sample passage, which sentence is the topic sentence? *Answer:* "Trees are very useful to us."

**Example 2.** Which is the best title for the sample passage: "Shade", "The Uses of Trees" or "Erosion"? *Answer:* **The Uses of Trees** — it covers the whole passage.

**Example 3.** Is "Their fruits are food" a main idea or a supporting detail? *Answer:* a supporting detail.`,
        },
        questions: [
          ["E", "Read: 'Trees are very useful to us. They give us shade. Their fruits are food for people and animals.' What is the main idea?", "Trees are very useful.", "Fruits are food.", "Shade is cool.", "Animals eat fruits.", "The first sentence states the point that the other sentences support."],
          ["E", "The sentence that states the main idea of a paragraph is called the", "topic sentence", "concluding title", "supporting detail", "question sentence", "The topic sentence carries the main idea."],
          ["E", "A good title for a passage should", "cover the whole passage", "describe only one detail", "be very long", "repeat the first line exactly", "A title must summarise the whole passage."],
          ["M", "Read: 'Water is important for life. We drink it every day. Farmers use it to water their crops. Factories use it to cool their machines.' What is the best title?", "The Importance of Water", "Farmers and Crops", "Factory Machines", "Drinking Every Day", "Only this title covers all the uses described."],
          ["M", "Read: 'Water is important for life. We drink it every day. Farmers use it to water their crops.' The sentence 'Farmers use it to water their crops' is", "a supporting detail", "the main idea", "the title", "a conclusion", "It gives one example supporting the main idea."],
          ["M", "Read: 'Ngozi woke up late. She missed the school bus and had to walk. By the time she arrived, the first lesson had ended.' What happened because Ngozi woke up late?", "She missed the bus and the first lesson.", "She won a prize.", "She arrived early.", "She stayed at home.", "Each sentence shows a result of waking up late."],
          ["M", "When you skim a passage, you", "read it quickly for the general idea", "read every word slowly", "look up every word in a dictionary", "read only the last line", "Skimming gives a quick overview."],
          ["H", "Read: 'Although the market was crowded, Ade found the stall quickly because he had been there many times before.' Why did Ade find the stall quickly?", "He knew the market well.", "The market was empty.", "Someone guided him.", "The stall was very large.", "The passage says he had been there many times before."],
          ["H", "Read: 'Bola saved part of his pocket money every week. After six months he bought the storybook he had always wanted.' What lesson does the passage teach?", "Saving helps us to reach our goals.", "Books are expensive.", "Pocket money should be spent at once.", "Six months is a long time.", "Bola's saving allowed him to buy what he wanted."],
          ["H", "Read: 'The rains came early this year. The farmers planted their maize in March instead of April.' Which statement is true according to the passage?", "The maize was planted earlier than usual.", "The rains came late.", "The farmers did not plant maize.", "The maize was planted in April.", "Early rain led to planting in March instead of April."],
        ],
      },
      {
        week: 5,
        title: "Vocabulary: synonyms and antonyms",
        subtopics: ["Meaning of synonyms", "Meaning of antonyms", "Using context to find meaning", "Building vocabulary with a dictionary"],
        objectives: ["Explain the terms synonym and antonym", "Choose the word nearest in meaning to a given word", "Choose the word opposite in meaning to a given word", "Use context clues to work out meanings"],
        lesson: {
          title: "Synonyms and Antonyms",
          summary: "Build vocabulary by learning words with similar and opposite meanings.",
          minutes: 35,
          notes: `## Synonyms
**Synonyms** are words with the **same or nearly the same** meaning:
| Word | Synonym |
|---|---|
| big | large, huge |
| brave | courageous, bold |
| begin | start, commence |
| quick | fast, rapid |
| happy | glad, joyful |

## Antonyms
**Antonyms** are words with **opposite** meanings:
| Word | Antonym |
|---|---|
| ancient | modern |
| generous | stingy (mean) |
| accept | reject |
| victory | defeat |
| increase | decrease |

## Using context
The words around an unfamiliar word often give its meaning. *The **arid** land received no rain for months and nothing grew.* — "no rain … nothing grew" suggests *arid* means **very dry**.

## Examination tip
In "nearest in meaning" questions, choose the word that could **replace** the given word in the sentence without changing its meaning. In "opposite in meaning" questions, the answer must be the **same part of speech** (an adjective for an adjective, a verb for a verb).`,
          examples: `**Example 1.** Nearest in meaning to *rapid*: slow, quick, loud. *Answer:* **quick**.

**Example 2.** Opposite in meaning to *generous*: kind, stingy, rich. *Answer:* **stingy**.

**Example 3.** *The **fragile** cup broke when it fell.* What does *fragile* mean? *Answer:* easily broken.`,
        },
        questions: [
          ["E", "Choose the word nearest in meaning to 'rapid'.", "quick", "slow", "loud", "late", "Rapid means happening quickly."],
          ["E", "Choose the word opposite in meaning to 'ancient'.", "modern", "old", "historic", "early", "Ancient means very old; the opposite is modern."],
          ["E", "Words that have the same or nearly the same meaning are called", "synonyms", "antonyms", "homophones", "idioms", "Synonyms share meaning."],
          ["M", "Choose the word opposite in meaning to 'generous'.", "stingy", "kind", "wealthy", "humble", "A generous person gives freely; a stingy person does not."],
          ["M", "Choose the word nearest in meaning to 'commence'.", "begin", "finish", "delay", "cancel", "To commence is to begin."],
          ["M", "Choose the word opposite in meaning to 'victory'.", "defeat", "triumph", "success", "battle", "Victory is winning; defeat is losing."],
          ["M", "'The fragile cup broke when it fell.' The word 'fragile' means", "easily broken", "very expensive", "brightly coloured", "very large", "The context — it broke when it fell — shows it is delicate."],
          ["H", "'The arid land received no rain for months, and nothing grew.' The word 'arid' means", "very dry", "very fertile", "very cold", "very wet", "No rain and nothing growing suggest dryness."],
          ["H", "Choose the word nearest in meaning to 'courageous'.", "brave", "fearful", "careless", "angry", "Courageous means brave."],
          ["H", "Choose the word opposite in meaning to 'reject'.", "accept", "refuse", "decline", "deny", "To reject is to refuse; the opposite is to accept."],
        ],
      },
      {
        week: 6,
        title: "Punctuation: capital letters and end marks",
        subtopics: ["Capital letters", "Full stop", "Question mark and exclamation mark", "Comma in lists and after introductory words"],
        objectives: ["Use capital letters correctly", "End sentences with the correct punctuation mark", "Use commas to separate items in a list", "Punctuate simple sentences accurately"],
        lesson: {
          title: "Basic Punctuation",
          summary: "Use capital letters, full stops, question marks, exclamation marks and commas correctly.",
          minutes: 35,
          notes: `## Capital letters
Use a capital letter for:
- the **first word** of a sentence;
- the pronoun **I**;
- **proper nouns**: names of people, places, days, months, languages, religions, organisations — *Ngozi, Kaduna, Tuesday, June, Yoruba, Christianity, NECO*;
- the main words in **titles**: *Things Fall Apart*.
Seasons and school subjects that are not languages usually take small letters: *the rainy season, mathematics*.

## End marks
- **Full stop (.)** ends a statement or a polite command: *Close the door.*
- **Question mark (?)** ends a direct question: *Where are you going?*
- **Exclamation mark (!)** shows strong feeling: *What a beautiful day!*
An **indirect** question ends with a full stop: *She asked where I was going.*

## The comma (,)
- Separates items in a **list**: *We bought yams, beans, rice and oil.*
- Follows introductory words: *However, the rain stopped.*
- Sets off the name of a person spoken to: *Tunde, come here.*`,
          examples: `**Example 1.** Correct: *my friend ade lives in ibadan.* *Answer:* **My** friend **Ade** lives in **Ibadan**.

**Example 2.** Which mark ends *What a lovely dress* ? *Answer:* an exclamation mark.

**Example 3.** Punctuate: *She asked me where I lived* — *Answer:* She asked me where I lived**.** (an indirect question takes a full stop).`,
        },
        questions: [
          ["E", "Which punctuation mark ends a direct question?", "question mark", "full stop", "comma", "colon", "A direct question ends with a question mark."],
          ["E", "Which sentence uses capital letters correctly?", "My friend Ade lives in Ibadan.", "my friend Ade lives in Ibadan.", "My friend ade lives in ibadan.", "My Friend Ade Lives In Ibadan.", "The first word and the proper nouns take capital letters."],
          ["E", "Which mark shows strong feeling, as in 'What a beautiful day'?", "exclamation mark", "question mark", "comma", "hyphen", "Exclamations end with an exclamation mark."],
          ["M", "Which sentence is correctly punctuated?", "We bought yams, beans, rice and oil.", "We bought yams beans rice and oil.", "We bought, yams, beans, rice, and, oil.", "We bought yams; beans; rice and oil", "Commas separate the items in a list, and the sentence ends with a full stop."],
          ["M", "Which sentence should end with a full stop?", "She asked where I was going", "Where are you going", "Are you coming with us", "Why is the sky blue", "It is an indirect question, so it ends with a full stop."],
          ["M", "Which word should begin with a capital letter?", "tuesday", "rain", "school", "morning", "Days of the week are proper nouns."],
          ["M", "Which sentence uses a comma correctly?", "Tunde, come here.", "Tunde come, here.", "Tunde come here,", ",Tunde come here.", "A comma separates the name of the person spoken to."],
          ["H", "Which sentence is correctly punctuated?", "However, the rain stopped before noon.", "However the rain, stopped before noon.", "however, the rain stopped before noon.", "However the rain stopped before noon?", "An introductory word is followed by a comma, and the sentence begins with a capital."],
          ["H", "In which sentence are capital letters used correctly?", "We study French and mathematics in the rainy season.", "We study french and Mathematics in the Rainy Season.", "We study French and Mathematics in the Rainy season.", "we study French and mathematics in the rainy season.", "Language names take capitals; ordinary subjects and seasons usually do not."],
          ["H", "Which sentence needs an exclamation mark?", "What a wonderful surprise", "Where is the library", "The library is closed", "She asked if the library was open", "It expresses strong feeling."],
        ],
      },
      {
        week: 7,
        title: "Writing an informal letter",
        subtopics: ["Features of an informal letter", "The writer's address and date", "Salutation, body and closing", "Tone and language"],
        objectives: ["State the features of an informal letter", "Set out the address, date and salutation correctly", "Organise the body into clear paragraphs", "Use a friendly, suitable tone and ending"],
        lesson: {
          title: "The Informal Letter",
          summary: "Write friendly letters to relatives and friends with the correct layout and tone.",
          minutes: 45,
          notes: `## When do we write informal letters?
To people we know well: parents, brothers and sisters, cousins, friends.

## Layout
1. **Writer's address** — top right-hand corner (house number, street, town/city).
2. **Date** — directly under the address, e.g. *12th March, 2026*.
3. **Salutation** — on the left: *Dear Mum,* / *Dear Kemi,*
4. **Opening paragraph** — greetings and an enquiry about the reader's health.
5. **Body** — the main purpose of the letter, in clear paragraphs (one idea per paragraph).
6. **Closing paragraph** — greetings to others and a friendly wish.
7. **Subscription** — *Your loving son,* / *Yours affectionately,* / *Your friend,*
8. **First name only** — *Chidi*
There is **no** receiver's address in an informal letter.

## Tone and language
Be warm and friendly, but still use **correct English**. Contractions (*I'm, don't*) and everyday words are acceptable. Avoid slang and text-message spellings (*u, 2morrow*).

## Planning
Before writing, list the points you want to include and arrange them in paragraphs.`,
          examples: `**Example of an opening:**
*Dear Kemi,*
*I hope you and your family are well. I am writing to tell you about my first week in secondary school.*

**Example of a closing:**
*Please greet your parents for me. I look forward to your reply.*
*Your friend,*
*Ngozi*`,
        },
        questions: [
          ["E", "Where is the writer's address placed in an informal letter?", "At the top right-hand corner", "At the bottom left", "In the middle of the page", "After the salutation", "The writer's address goes at the top right."],
          ["E", "Which salutation is suitable for a letter to your mother?", "Dear Mum,", "Dear Sir,", "To whom it may concern,", "Dear Madam,", "Informal letters use a friendly salutation."],
          ["E", "An informal letter is written to", "a friend or relative", "a school principal", "a company manager", "a government office", "Informal letters go to people we know well."],
          ["M", "Which of these should NOT appear in an informal letter?", "the receiver's address", "the writer's address", "the date", "a salutation", "Only formal letters include the receiver's address."],
          ["M", "Which is a suitable subscription (closing) for a letter to your brother?", "Your loving brother,", "Yours faithfully,", "Yours truly, Sir,", "Thank you, Sir,", "It is warm and personal, suitable for a relative."],
          ["M", "How should the writer sign an informal letter?", "With the first name only", "With the full name and title", "With a signature and job title", "With the surname only", "Friends and relatives know the writer by first name."],
          ["M", "What is usually in the opening paragraph of an informal letter?", "Greetings and an enquiry about the reader's well-being", "The writer's full address", "A list of complaints", "The date", "It starts the letter in a friendly way."],
          ["H", "Which sentence is most suitable in an informal letter?", "I'm really excited about the holiday.", "I wish to formally notify you of my holiday plans.", "u shd come 2morrow.", "Pursuant to our discussion, I shall attend.", "It is friendly but uses correct English; the others are too formal or use text-speak."],
          ["H", "How should the date be written under the address?", "12th March, 2026", "12-3", "march twelve", "Twelve/three", "Write the date in full with the day, month and year."],
          ["H", "Why should the body of the letter be divided into paragraphs?", "Each paragraph can deal with one main idea", "To make the letter longer", "Because examiners count paragraphs only", "To avoid using punctuation", "Paragraphs organise ideas clearly."],
        ],
      },
      {
        week: 8,
        title: "Spelling: commonly misspelt words",
        subtopics: ["Why spelling matters", "Doubling consonants", "ie and ei words", "Commonly misspelt words"],
        objectives: ["Recognise commonly misspelt words", "Apply the doubling rule when adding endings", "Apply the 'i before e' guideline and its exceptions", "Use a dictionary to check spellings"],
        lesson: {
          title: "Spelling Correctly",
          summary: "Learn useful spelling rules and master words that are often misspelt.",
          minutes: 35,
          notes: `## Why spelling matters
Wrong spellings can change meaning and lose marks in every subject.

## Doubling rule
For a short word ending in **one vowel + one consonant**, double the consonant before adding *-ing*, *-ed* or *-er*:
*run → running, stop → stopped, big → bigger*.
Do not double after two vowels (*read → reading*) or two consonants (*jump → jumping*).
Words ending in a silent *e* usually drop it: *write → writing, come → coming*.

## "i before e except after c"
*believe, field, chief* — but *receive, ceiling, deceive*.
Exceptions exist (*their, weird, seize*), so learn them.

## Commonly misspelt words
| Correct | Common error |
|---|---|
| necessary | neccessary |
| receive | recieve |
| separate | seperate |
| accommodation | acommodation |
| government | goverment |
| definitely | definately |
| environment | enviroment |
| beginning | begining |
| occurrence | occurence |

## Tips
Say the word slowly in syllables (*gov-ern-ment*), look for smaller words inside (*sep-A-RAT-e*: "there is **a rat** in separate") and check a dictionary.`,
          examples: `**Example 1.** Add *-ing* to *swim*. *Answer:* **swimming** (one vowel + one consonant, so double the m).

**Example 2.** Which is correct: *recieve* or *receive*? *Answer:* **receive** (after *c*, *e* comes before *i*).

**Example 3.** Add *-ing* to *make*. *Answer:* **making** (drop the silent e).`,
        },
        questions: [
          ["E", "Which word is spelt correctly?", "receive", "recieve", "receeve", "receve", "After 'c', the letters are 'ei': receive."],
          ["E", "Which word is spelt correctly?", "necessary", "neccessary", "necesary", "nessecary", "One c and double s: necessary."],
          ["E", "Add '-ing' to 'run'.", "running", "runing", "runeing", "runnning", "One vowel + one consonant: double the n."],
          ["M", "Which word is spelt correctly?", "separate", "seperate", "separete", "sepparate", "Remember 'there is a rat' in separate."],
          ["M", "Add '-ing' to 'write'.", "writing", "writting", "writeing", "wrighting", "Drop the silent e before adding -ing."],
          ["M", "Which word is spelt correctly?", "government", "goverment", "govermment", "governmant", "Say it in parts: gov-ern-ment."],
          ["M", "Which word follows the 'i before e' guideline?", "believe", "recieve", "cieling", "decieve", "'Believe' has ie; the others after c should be ei."],
          ["H", "Which word is spelt correctly?", "accommodation", "acommodation", "accomodation", "acomodation", "Double c and double m: accommodation."],
          ["H", "Which word is spelt correctly?", "definitely", "definately", "defenitely", "definitly", "Think of 'finite' inside definitely."],
          ["H", "Add '-ed' to 'stop'.", "stopped", "stoped", "stopt", "stoppd", "One vowel + one consonant: double the p before -ed."],
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
        title: "Verbs",
        subtopics: ["Action verbs", "Linking verbs", "Helping (auxiliary) verbs", "Transitive and intransitive verbs"],
        objectives: ["Define a verb and identify verbs in sentences", "Distinguish action verbs from linking verbs", "Identify helping verbs in verb phrases", "Distinguish transitive from intransitive verbs"],
        lesson: {
          title: "Kinds of Verbs",
          summary: "Recognise action, linking and helping verbs and whether a verb needs an object.",
          minutes: 35,
          notes: `## What is a verb?
A **verb** shows an **action** or a **state of being**. Every complete sentence has a verb.

## Action verbs
Show what someone or something does: *run, write, eat, think, sing*.
*The girls **danced** at the festival.*

## Linking verbs
Link the subject to a word that describes or renames it: *be (am, is, are, was, were), seem, become, look, feel, appear*.
*The food **smells** delicious.* / *Ada **is** our captain.*

## Helping (auxiliary) verbs
Come before the main verb to form a **verb phrase**: *am, is, are, was, were, have, has, had, do, does, did, will, shall, can, may, must*.
*She **is** reading.* / *They **have** finished.* / *We **will** travel.*

## Transitive and intransitive verbs
- A **transitive** verb needs an **object**: *He kicked **the ball**.* (kicked what? — the ball)
- An **intransitive** verb does not take an object: *The baby **slept**.*
Some verbs can be both: *She **sings** (intransitive).* / *She **sings** hymns (transitive).*`,
          examples: `**Example 1.** Identify the verb: *The farmer ploughed his field.* *Answer:* **ploughed** (action, transitive — object *his field*).

**Example 2.** Identify the helping verb: *They were playing football.* *Answer:* **were** (main verb *playing*).

**Example 3.** Is *seems* an action or a linking verb in *The man seems tired*? *Answer:* a **linking** verb.`,
        },
        questions: [
          ["E", "Which word is the verb in 'The girls danced at the festival'?", "danced", "girls", "festival", "at", "Danced tells us what the girls did."],
          ["E", "A verb is a word that shows", "an action or a state of being", "the name of a place", "a quality of a noun", "the position of a thing", "Verbs express actions or states."],
          ["E", "Identify the helping verb in 'They were playing football.'", "were", "playing", "football", "They", "'Were' helps the main verb 'playing'."],
          ["M", "In 'Ada is our captain', the verb 'is' is", "a linking verb", "an action verb", "a transitive verb", "a helping verb", "It links 'Ada' to 'our captain'."],
          ["M", "Which sentence contains a transitive verb?", "He kicked the ball.", "The baby slept.", "The sun rose.", "She laughed loudly.", "'Kicked' has an object: the ball."],
          ["M", "Which sentence contains an intransitive verb?", "The baby slept peacefully.", "She wrote a letter.", "They built a house.", "I bought some rice.", "'Slept' has no object."],
          ["M", "Identify the verb phrase in 'We will travel to Jos tomorrow.'", "will travel", "travel to", "Jos tomorrow", "We will", "The helping verb 'will' and the main verb 'travel' form the verb phrase."],
          ["H", "In 'The soup smells delicious', 'smells' is used as", "a linking verb", "an action verb with an object", "a helping verb", "a noun", "It links 'soup' to the describing word 'delicious'."],
          ["H", "Which sentence uses 'sings' as a transitive verb?", "She sings hymns every Sunday.", "She sings beautifully.", "She sings in the choir.", "She sings when she is happy.", "'Hymns' is the object of 'sings'."],
          ["H", "Identify the main verb in 'She has been reading all day.'", "reading", "has", "been", "day", "'Has' and 'been' are helping verbs; 'reading' is the main verb."],
        ],
      },
      {
        week: 2,
        title: "Simple present and simple past tenses",
        subtopics: ["Uses of the simple present tense", "Third person singular -s", "Regular past tense forms", "Common irregular past forms"],
        objectives: ["Use the simple present tense for habits and general truths", "Add -s or -es correctly with third person singular subjects", "Form the regular past tense with -ed", "Use common irregular past tense forms correctly"],
        lesson: {
          title: "Simple Present and Simple Past",
          summary: "Talk about habits, facts and completed past actions using the correct tense forms.",
          minutes: 40,
          notes: `## Simple present tense
Used for:
- **habits**: *I **go** to church on Sundays.*
- **general truths**: *The sun **rises** in the east.*
- **timetabled events**: *The bus **leaves** at 7 a.m.*

With **he, she, it** or a singular noun, add **-s** or **-es**:
*He play**s**, she watch**es**, it go**es**, the dog bark**s**.*
Negatives and questions use *do/does*: *She **does not** eat meat.* / ***Does** he live here?* (After *does*, the main verb has no -s.)

## Simple past tense
Used for actions **completed** in the past, often with time words like *yesterday, last week, in 2020*.
- **Regular** verbs add *-ed*: *walk → walked, play → played, stop → stopped, carry → carried*.
- **Irregular** verbs change in other ways:
| Present | Past |
|---|---|
| go | went |
| eat | ate |
| buy | bought |
| teach | taught |
| write | wrote |
| see | saw |
| drink | drank |
Negatives and questions use *did*: *I **did not go**.* / ***Did** you **see** it?* (After *did*, use the base form.)`,
          examples: `**Example 1.** Correct: *She go to school every day.* *Answer:* She **goes** to school every day.

**Example 2.** Correct: *Yesterday we buyed oranges.* *Answer:* Yesterday we **bought** oranges.

**Example 3.** Correct: *Did you saw the film?* *Answer:* Did you **see** the film?`,
        },
        questions: [
          ["E", "Choose the correct option: 'She ___ to school every day.'", "goes", "go", "going", "gone", "With 'she', the simple present verb takes -es."],
          ["E", "What is the past tense of 'buy'?", "bought", "buyed", "brought", "buying", "'Buy' is irregular: buy – bought."],
          ["E", "Choose the correct option: 'The sun ___ in the east.'", "rises", "rise", "rose", "risen", "A general truth uses the simple present with -s."],
          ["M", "Choose the correct option: 'Yesterday, Musa ___ a letter to his uncle.'", "wrote", "writes", "write", "written", "'Yesterday' shows the simple past: write – wrote."],
          ["M", "Choose the correct option: 'Did you ___ the film?'", "see", "saw", "seen", "sees", "After 'did', use the base form of the verb."],
          ["M", "Choose the correct option: 'He does not ___ meat.'", "eat", "eats", "ate", "eaten", "After 'does not', the verb takes no -s."],
          ["M", "What is the past tense of 'teach'?", "taught", "teached", "thought", "teaching", "'Teach' is irregular: teach – taught."],
          ["H", "Which sentence is correct?", "Last week we travelled to Enugu.", "Last week we travel to Enugu.", "Last week we travelling to Enugu.", "Last week we has travelled to Enugu.", "'Last week' needs the simple past."],
          ["H", "Which sentence is correct?", "My brother watches football every evening.", "My brother watch football every evening.", "My brother watching football every evening.", "My brother watchs football every evening.", "'Watch' ends in -ch, so it takes -es with a singular subject."],
          ["H", "Choose the correct past tense of 'carry'.", "carried", "carryed", "carred", "caried", "Change y to i and add -ed after a consonant."],
        ],
      },
      {
        week: 3,
        title: "Adjectives",
        subtopics: ["Describing words", "Degrees of comparison", "Irregular comparisons", "Order of adjectives"],
        objectives: ["Identify adjectives in sentences", "Form comparative and superlative adjectives", "Use irregular forms such as good, better, best", "Arrange several adjectives in the correct order"],
        lesson: {
          title: "Describing with Adjectives",
          summary: "Describe nouns precisely and compare people and things correctly.",
          minutes: 35,
          notes: `## What is an adjective?
An **adjective** describes or tells us more about a **noun** or pronoun: *a **tall** tree*, *the **red** car*, *She is **clever***.

## Degrees of comparison
| Positive | Comparative (two things) | Superlative (three or more) |
|---|---|---|
| tall | taller | tallest |
| big | bigger | biggest |
| happy | happier | happiest |
| beautiful | more beautiful | most beautiful |
- Short adjectives add **-er / -est**.
- Longer adjectives (usually three syllables or more) use **more / most**.
- Never use both: *more taller* is wrong.

## Irregular comparisons
good – better – best; bad – worse – worst; many/much – more – most; little – less – least; far – farther/further – farthest/furthest.

## Order of adjectives
When several adjectives come together, the usual order is:
**opinion – size – age – shape – colour – origin – material – purpose** + noun
*a **beautiful large old** **brown** **wooden** table*.`,
          examples: `**Example 1.** Correct: *Ade is more taller than Bola.* *Answer:* Ade is **taller** than Bola.

**Example 2.** Complete: *This is the ___ (good) result in the class.* *Answer:* **best**.

**Example 3.** Arrange: *(wooden, small, a, chair)* *Answer:* **a small wooden chair** (size before material).`,
        },
        questions: [
          ["E", "Identify the adjective in 'The tall man opened the gate.'", "tall", "man", "opened", "gate", "'Tall' describes the man."],
          ["E", "What is the comparative form of 'big'?", "bigger", "more big", "biggest", "bigest", "Double the g and add -er."],
          ["E", "What is the superlative form of 'good'?", "best", "goodest", "better", "most good", "'Good' is irregular: good – better – best."],
          ["M", "Choose the correct option: 'Ade is ___ than Bola.'", "taller", "more taller", "tallest", "most tall", "Compare two people with the comparative form only."],
          ["M", "Choose the correct option: 'This is the ___ story I have ever read.'", "most interesting", "interestingest", "more interesting", "most interestingest", "Long adjectives use 'most' for the superlative."],
          ["M", "What is the comparative form of 'bad'?", "worse", "badder", "worst", "more bad", "'Bad' is irregular: bad – worse – worst."],
          ["M", "What is the comparative form of 'happy'?", "happier", "more happy", "happyer", "happiest", "Change y to i and add -er."],
          ["H", "Which phrase has the adjectives in the correct order?", "a small wooden chair", "a wooden small chair", "a chair small wooden", "wooden a small chair", "Size comes before material."],
          ["H", "Which phrase has the adjectives in the correct order?", "a beautiful old red car", "a red old beautiful car", "an old beautiful red car", "a beautiful red old car", "Order: opinion, age, colour."],
          ["H", "Choose the correct option: 'Of the three sisters, Amaka is the ___.'", "youngest", "younger", "most young", "more younger", "With three or more, use the superlative."],
        ],
      },
      {
        week: 4,
        title: "Adverbs",
        subtopics: ["Adverbs of manner", "Adverbs of time and place", "Adverbs of frequency and degree", "Adjective or adverb?"],
        objectives: ["Identify adverbs and the words they modify", "Form adverbs of manner from adjectives", "Place adverbs of frequency correctly", "Choose between an adjective and an adverb"],
        lesson: {
          title: "Adverbs",
          summary: "Use adverbs to say how, when, where and how often actions happen.",
          minutes: 35,
          notes: `## What is an adverb?
An **adverb** modifies (tells us more about) a **verb**, an **adjective** or another **adverb**.
*She sang **beautifully**.* / *It is **very** hot.* / *He ran **too** quickly.*

## Kinds of adverbs
| Kind | Question | Examples |
|---|---|---|
| Manner | how? | quickly, carefully, well |
| Time | when? | now, yesterday, soon |
| Place | where? | here, outside, everywhere |
| Frequency | how often? | always, usually, often, never |
| Degree | how much? | very, quite, too, almost |

## Forming adverbs of manner
Most are formed by adding **-ly** to an adjective: *quick → quickly, careful → carefully, happy → happily*. The adverb of *good* is **well**.
Some words are both adjective and adverb: *fast, hard, early, late*.

## Position of frequency adverbs
Before the main verb but **after** *be*: *She **always** arrives early.* / *He is **never** late.*

## Adjective or adverb?
Use an adjective after a linking verb, but an adverb to describe an action:
*The food tastes **good**.* (linking verb) / *She cooks **well**.* (action)`,
          examples: `**Example 1.** Correct: *He did good in the test.* *Answer:* He did **well** in the test.

**Example 2.** Identify the adverb: *The children played outside.* *Answer:* **outside** (place).

**Example 3.** Put *always* in the correct position: *She is late.* *Answer:* She is **always** late.`,
        },
        questions: [
          ["E", "Identify the adverb in 'She sang beautifully.'", "beautifully", "sang", "She", "song", "'Beautifully' tells us how she sang."],
          ["E", "Form the adverb from the adjective 'careful'.", "carefully", "carefuly", "carefull", "carefulness", "Add -ly: carefully."],
          ["E", "Which word is an adverb of time?", "yesterday", "quickly", "outside", "very", "'Yesterday' tells us when."],
          ["M", "Choose the correct option: 'He did ___ in the test.'", "well", "good", "goodly", "better than", "'Well' is the adverb describing how he did."],
          ["M", "Identify the adverb of place in 'The children played outside.'", "outside", "children", "played", "The", "'Outside' tells us where."],
          ["M", "Which sentence places the adverb correctly?", "She always arrives early.", "She arrives always early.", "Always she arrives early.", "She arrives early always.", "Frequency adverbs usually come before the main verb."],
          ["M", "In 'It is very hot', the adverb 'very' modifies", "an adjective", "a verb", "a noun", "a pronoun", "'Very' tells us how hot."],
          ["H", "Choose the correct option: 'The soup tastes ___.'", "good", "well", "goodly", "nicely", "After the linking verb 'tastes', use an adjective."],
          ["H", "Which sentence is correct?", "He is never late for school.", "He never is late for school.", "He is late never for school.", "Never he is late for school.", "Frequency adverbs come after the verb 'be'."],
          ["H", "In which sentence is 'fast' used as an adverb?", "The athlete ran fast.", "He drives a fast car.", "It was a fast race.", "She is a fast learner.", "'Fast' describes how he ran, so it is an adverb."],
        ],
      },
      {
        week: 5,
        title: "Speech work: consonant sounds",
        subtopics: ["Voiced and voiceless consonants", "Contrasting /p/ and /f/", "Contrasting /θ/, /ð/, /t/ and /d/", "Contrasting /ʃ/ and /tʃ/"],
        objectives: ["Distinguish voiced from voiceless consonant sounds", "Pronounce and identify /p/ and /f/ correctly", "Pronounce and identify the 'th' sounds /θ/ and /ð/", "Distinguish /ʃ/ from /tʃ/"],
        lesson: {
          title: "Consonant Sounds",
          summary: "Produce and identify consonant sounds that Nigerian learners often confuse.",
          minutes: 35,
          notes: `## Voiced and voiceless
Place your fingers on your throat. For **voiced** sounds (/b/, /d/, /g/, /v/, /z/, /ð/) you feel a vibration; for **voiceless** sounds (/p/, /t/, /k/, /f/, /s/, /θ/) you do not.

## Sounds often confused
| Pair | Examples |
|---|---|
| /p/ – /f/ | **p**ast – **f**ast, **p**ull – **f**ull |
| /θ/ – /t/ | **th**ink – **t**ink, **th**ree – **t**ree |
| /ð/ – /d/ | **th**en – **d**en, **th**ey – **d**ay |
| /ʃ/ – /tʃ/ | **sh**ip – **ch**ip, **sh**oe – **ch**ew |
| /v/ – /f/ | **v**an – **f**an |

## The two "th" sounds
- /θ/ (voiceless): **th**ink, **th**ree, **th**in, mon**th**, ba**th**
- /ð/ (voiced): **th**e, **th**is, **th**en, mo**th**er, ba**th**e
Put the tip of the tongue lightly between the teeth and blow air out.

## Spelling does not decide the sound
- *ph* is often /f/: **ph**one, gra**ph**.
- *ch* can be /tʃ/ (**ch**urch), /k/ (**ch**emistry) or /ʃ/ (ma**ch**ine).
- *Thomas* and *Thames* begin with /t/.`,
          examples: `**Example 1.** Which word begins with /f/: *phone* or *pen*? *Answer:* **phone** (*ph* = /f/).

**Example 2.** Which word has /ð/: *thin* or *this*? *Answer:* **this** (voiced).

**Example 3.** Which word begins with /ʃ/: *machine* or *church*? *Answer:* **machine** (*ch* = /ʃ/ here).`,
        },
        questions: [
          ["E", "Which word begins with the sound /f/?", "phone", "pen", "van", "top", "The letters 'ph' in 'phone' represent /f/."],
          ["E", "Which word begins with the voiceless 'th' sound /θ/?", "think", "this", "then", "they", "'Think' has the voiceless /θ/; the others have voiced /ð/."],
          ["E", "Which of these sounds is voiced?", "/b/", "/p/", "/t/", "/k/", "/b/ makes the vocal cords vibrate."],
          ["M", "Which word contains the voiced 'th' sound /ð/?", "mother", "month", "thin", "bath", "'Mother' has the voiced /ð/."],
          ["M", "Which word begins with the sound /ʃ/?", "machine", "church", "chemistry", "cheap", "In 'machine', 'ch' is pronounced /ʃ/."],
          ["M", "Which word begins with the sound /tʃ/?", "church", "ship", "chemistry", "shoe", "'Church' begins with /tʃ/."],
          ["M", "In which word does 'ch' represent the sound /k/?", "chemistry", "chair", "chief", "cheap", "'Chemistry' begins with /k/."],
          ["H", "Which pair of words differ only in the sounds /p/ and /f/?", "pull – full", "pull – pool", "fall – full", "pan – ban", "'Pull' and 'full' differ only in the first consonant."],
          ["H", "Which word begins with /t/ even though it is spelt with 'th'?", "Thomas", "Thursday", "thought", "thorn", "'Thomas' is pronounced with /t/."],
          ["H", "Which word ends with the voiceless sound /θ/?", "bath", "bathe", "breathe", "clothe", "'Bath' ends in /θ/; 'bathe' ends in voiced /ð/."],
        ],
      },
      {
        week: 6,
        title: "Reading comprehension: details and vocabulary",
        subtopics: ["Scanning for specific details", "Answering 'who, what, where, when, why' questions", "Meaning of words in context", "Answering in your own words"],
        objectives: ["Scan a passage to locate specific information", "Answer factual questions accurately", "Work out the meaning of words from context", "Rephrase answers in their own words"],
        lesson: {
          title: "Reading for Details",
          summary: "Find exact information in passages and work out word meanings from context.",
          minutes: 40,
          notes: `## Scanning
When a question asks for a specific fact — a name, number, place or time — **scan**: run your eyes quickly over the passage looking for key words from the question.

## The five W questions
| Question | Looks for |
|---|---|
| Who? | a person |
| What? | a thing or event |
| Where? | a place |
| When? | a time |
| Why? | a reason (often after *because*, *so*, *as*) |

## Words in context
To find the meaning of a word:
1. Read the whole sentence, and the ones before and after it.
2. Look for clues: examples, opposites (*but, however*) or explanations.
3. Try each option **in place of the word** — the right one keeps the meaning.

## Own words
When told to answer "in your own words", do not copy whole sentences. Use simpler words with the same meaning.

## Keep to the passage
Your answer must come from the passage, even if you know other facts about the topic.`,
          examples: `**Passage:** *Every Saturday, Mrs Okafor sells vegetables at Ogbete market in Enugu. She leaves home at dawn because the early buyers pay the best prices.*

**Q1.** Where does Mrs Okafor sell vegetables? *Answer:* at Ogbete market in Enugu.

**Q2.** Why does she leave at dawn? *Answer:* because early buyers pay the best prices.

**Q3.** What does *dawn* mean here? *Answer:* very early in the morning.`,
        },
        questions: [
          ["E", "Read: 'Every Saturday, Mrs Okafor sells vegetables at Ogbete market in Enugu.' Where does she sell vegetables?", "At Ogbete market in Enugu", "At her house", "In Lagos", "At school", "The passage names Ogbete market in Enugu."],
          ["E", "Read: 'Every Saturday, Mrs Okafor sells vegetables at Ogbete market.' When does she sell vegetables?", "Every Saturday", "Every day", "On Sundays", "At night", "The passage says 'every Saturday'."],
          ["E", "A question beginning with 'Why' asks for", "a reason", "a place", "a time", "a person", "'Why' questions ask for reasons."],
          ["M", "Read: 'Mrs Okafor leaves home at dawn because the early buyers pay the best prices.' Why does she leave at dawn?", "Early buyers pay the best prices.", "She enjoys walking in the dark.", "The market closes at noon.", "Her children wake her up.", "The reason follows the word 'because'."],
          ["M", "Read: 'Mrs Okafor leaves home at dawn.' The word 'dawn' means", "very early in the morning", "late at night", "in the afternoon", "at midday", "Dawn is the time when daylight first appears."],
          ["M", "When you scan a passage, you", "look quickly for particular words or facts", "read every word slowly", "read only the title", "read from the last line backwards only", "Scanning is a quick search for specific information."],
          ["M", "Read: 'The hall was packed; every seat was taken and some people stood at the back.' The word 'packed' means", "very full", "empty", "noisy", "closed", "Every seat was taken, so the hall was very full."],
          ["H", "Read: 'Emeka was usually talkative, but at the meeting he remained silent.' Which word is opposite in meaning to 'talkative' in the passage?", "silent", "meeting", "usually", "remained", "'But' shows a contrast between talkative and silent."],
          ["H", "Read: 'The drought lasted six months; the rivers dried up and the crops withered.' What caused the crops to wither?", "The long period without rain", "Too much rain", "Pests and insects", "The farmers' carelessness", "A drought is a long period without rain."],
          ["H", "Read: 'Zainab was elated when she heard she had won the scholarship.' The word 'elated' means", "very happy", "very sad", "angry", "confused", "Winning a scholarship would make her very happy."],
        ],
      },
      {
        week: 7,
        title: "Narrative composition",
        subtopics: ["What a narrative is", "Planning: beginning, middle and end", "Using the past tense and time connectives", "Making stories interesting"],
        objectives: ["Explain the features of a narrative composition", "Plan a story with a clear beginning, middle and end", "Use past tenses and time connectives correctly", "Make a story interesting with description and dialogue"],
        lesson: {
          title: "Writing a Story",
          summary: "Plan and write an interesting narrative with a clear sequence of events.",
          minutes: 45,
          notes: `## What is a narrative?
A **narrative** tells a story — real or imagined — in the order in which events happened. Examination titles include *"An unforgettable day"*, *"A journey I will never forget"* or a story ending with a given sentence.

## Structure
1. **Beginning** — introduce the main character(s), the place and the time. Catch the reader's interest.
2. **Middle** — events build up to a **problem** or exciting moment (the climax).
3. **End** — the problem is solved; say how the characters felt or what was learnt.

## Language
- Write mainly in the **simple past tense**: *we went, she saw, they ran*.
- Use **time connectives** to show order: *first, then, after that, suddenly, later, finally*.
- Use **description** (sights, sounds, feelings) and some **dialogue**, punctuated with quotation marks: *"Run!" shouted Musa.*

## Planning
Spend a few minutes listing events before you write. Give each paragraph one stage of the story.

## Common mistakes
Switching tenses, too many events with no detail, and endings like "and then I woke up — it was a dream" (usually disappointing).`,
          examples: `**A good opening:** *The sky was already dark when the bus broke down on the lonely road to Jos. Nobody spoke; we could hear only the crickets.*

**Time connectives in use:** *First, the driver checked the engine. Then he called a mechanic. After two hours, finally, a truck arrived to help.*

**A good ending:** *Since that night, I never travel without a torch and a charged phone.*`,
        },
        questions: [
          ["E", "A narrative composition", "tells a story", "gives instructions", "describes a person only", "argues for or against an idea", "Narratives tell a sequence of events."],
          ["E", "Which tense is used mostly in a narrative?", "simple past", "simple future", "present continuous", "future perfect", "Stories usually describe events that happened."],
          ["E", "Which word is a time connective?", "suddenly", "beautiful", "because", "although", "'Suddenly' shows when something happened in the sequence."],
          ["M", "What should the beginning of a story do?", "Introduce the characters, place and time", "Give the solution to the problem", "List all the events", "State the moral only", "The opening sets the scene."],
          ["M", "The most exciting point of a story is called the", "climax", "introduction", "title", "summary", "The climax is the high point of tension."],
          ["M", "Which sentence is correctly punctuated dialogue?", "\"Run!\" shouted Musa.", "Run! shouted Musa.", "\"Run! shouted Musa.\"", "Run!\" shouted \"Musa.", "Only the spoken words go inside the quotation marks."],
          ["M", "Which set of connectives shows the correct order of events?", "First, then, after that, finally", "Finally, first, then, after that", "Then, finally, first, after that", "After that, first, finally, then", "They move from the start to the end."],
          ["H", "Which sentence keeps the tense consistent?", "We reached the river and saw a crocodile.", "We reached the river and see a crocodile.", "We reach the river and saw a crocodile.", "We are reaching the river and saw a crocodile.", "Both verbs are in the simple past."],
          ["H", "Which is the most interesting opening for a story titled 'A Journey I Will Never Forget'?", "The sky was already dark when our bus broke down on the lonely road.", "I am going to write about a journey.", "This is my story.", "Once I went somewhere.", "It sets the scene and creates suspense."],
          ["H", "Why is it useful to plan a composition before writing?", "To arrange the events in a clear order", "To make it shorter than required", "To avoid using paragraphs", "Because examiners read only plans", "Planning gives the story a clear structure."],
        ],
      },
      {
        week: 8,
        title: "Introduction to literature",
        subtopics: ["What literature is", "The three genres: prose, poetry and drama", "Oral and written literature", "Basic literary terms"],
        objectives: ["Explain the meaning of literature", "Distinguish prose, poetry and drama", "Give examples of oral literature in Nigeria", "Use basic terms such as author, poet, playwright and character"],
        lesson: {
          title: "Introduction to Literature",
          summary: "Understand what literature is and recognise its three main genres.",
          minutes: 35,
          notes: `## What is literature?
**Literature** is imaginative writing (and speaking) that uses language artistically to entertain, teach and reflect human life: stories, poems, plays, folktales and proverbs.

## The three genres
| Genre | Features | Writer |
|---|---|---|
| **Prose** | written in ordinary sentences and paragraphs; novels and short stories | author / novelist |
| **Poetry** | written in lines and stanzas; uses rhythm, sound and imagery | poet |
| **Drama** | written to be performed; has dialogue, acts, scenes and stage directions | playwright / dramatist |

## Oral literature
Before writing, communities passed literature by word of mouth: **folktales** (often about the tortoise), **proverbs**, **riddles**, **praise poetry**, **songs** and **myths**. Oral literature teaches morals and preserves culture.

## Basic terms
- **Character**: a person (or animal) in a story or play.
- **Setting**: where and when the story happens.
- **Plot**: the sequence of events.
- **Theme**: the main message or idea.
- **Moral**: the lesson taught.

## Why study literature?
It improves language, broadens our understanding of people and cultures, and develops imagination and critical thinking.`,
          examples: `**Example 1.** A book of short stories belongs to which genre? *Answer:* **prose**.

**Example 2.** What do we call the writer of a play? *Answer:* a **playwright** (dramatist).

**Example 3.** Name one form of oral literature. *Answer:* a **folktale** (e.g. a tortoise story told by moonlight).`,
        },
        questions: [
          ["E", "Which genre of literature is written to be performed on stage?", "drama", "prose", "poetry", "folktale", "Drama is meant for performance."],
          ["E", "The writer of a poem is called a", "poet", "playwright", "novelist", "narrator", "Poets write poetry."],
          ["E", "A novel belongs to which genre?", "prose", "poetry", "drama", "riddle", "Novels are long prose works."],
          ["M", "Which of these is a form of oral literature?", "folktale", "novel", "newspaper", "textbook", "Folktales are passed on by word of mouth."],
          ["M", "The main message or idea of a literary work is its", "theme", "setting", "plot", "title", "The theme is the central idea."],
          ["M", "Where and when a story takes place is called its", "setting", "plot", "theme", "moral", "The setting is the time and place."],
          ["M", "Poems are arranged in groups of lines called", "stanzas", "chapters", "acts", "paragraphs", "A stanza is a group of lines in a poem."],
          ["H", "Which feature is found in drama but not usually in prose?", "stage directions", "characters", "a setting", "a theme", "Stage directions tell actors how to perform."],
          ["H", "The sequence of events in a story is called the", "plot", "theme", "setting", "character", "The plot is what happens, in order."],
          ["H", "Which statement about oral literature is true?", "It is passed from generation to generation by word of mouth.", "It was written only in books.", "It has no lessons for listeners.", "It appeared only after the invention of printing.", "Oral literature was preserved by speaking and memory."],
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
        title: "Prepositions",
        subtopics: ["Prepositions of place", "Prepositions of time", "Prepositions after certain words", "Common errors with prepositions"],
        objectives: ["Identify prepositions and their objects", "Use prepositions of place and time correctly", "Use fixed prepositions after common words", "Correct common preposition errors"],
        lesson: {
          title: "Prepositions",
          summary: "Show relationships of place and time correctly and avoid common preposition errors.",
          minutes: 35,
          notes: `## What is a preposition?
A **preposition** shows the relationship between a noun (or pronoun) and another word in the sentence: *The book is **on** the table.* The noun after it is its **object**.

## Place
| Preposition | Use | Example |
|---|---|---|
| in | inside an area | in the room, in Kano |
| on | on a surface | on the wall, on the floor |
| at | a point/place | at the gate, at school |
| under / below | lower than | under the bed |
| between | two things | between Ade and Bola |
| among | more than two | among the students |

## Time
- **at** + clock time/festivals: *at 8 o'clock, at Christmas*
- **on** + days and dates: *on Monday, on 1st October*
- **in** + months, years, seasons, parts of the day: *in June, in 2026, in the morning*

## Fixed expressions
*good **at**, interested **in**, afraid **of**, married **to**, different **from**, discuss (no preposition), enter (no preposition), congratulate **on***.

## Common errors
- *discuss about* ✗ → *discuss* ✓
- *enter into the room* ✗ → *enter the room* ✓
- *married with* ✗ → *married to* ✓`,
          examples: `**Example 1.** Complete: *The meeting starts ___ 9 a.m. ___ Monday.* *Answer:* **at**, **on**.

**Example 2.** Correct: *We discussed about the matter.* *Answer:* We **discussed the matter**.

**Example 3.** Complete: *Share the sweets ___ the three children.* *Answer:* **among** (more than two).`,
        },
        questions: [
          ["E", "Choose the correct preposition: 'The book is ___ the table.'", "on", "in", "at", "into", "A surface takes 'on'."],
          ["E", "Choose the correct preposition: 'School starts ___ 8 o'clock.'", "at", "on", "in", "by", "Clock times take 'at'."],
          ["E", "Choose the correct preposition: 'My birthday is ___ June.'", "in", "on", "at", "by", "Months take 'in'."],
          ["M", "Choose the correct preposition: 'The meeting is ___ Monday.'", "on", "in", "at", "by", "Days take 'on'."],
          ["M", "Choose the correct option: 'Share the sweets ___ the three children.'", "among", "between", "within", "across", "Use 'among' for more than two."],
          ["M", "Choose the correct option: 'She is good ___ mathematics.'", "at", "in", "on", "with", "The fixed expression is 'good at'."],
          ["M", "Which sentence is correct?", "We discussed the matter.", "We discussed about the matter.", "We discussed on the matter.", "We discussed over about the matter.", "'Discuss' takes a direct object without a preposition."],
          ["H", "Which sentence is correct?", "He is married to my cousin.", "He is married with my cousin.", "He is married by my cousin.", "He is married for my cousin.", "The correct expression is 'married to'."],
          ["H", "Which sentence is correct?", "The principal entered the hall.", "The principal entered into the hall.", "The principal entered inside the hall.", "The principal entered in the hall.", "'Enter' needs no preposition when it means 'go into'."],
          ["H", "Choose the correct option: 'Your answer is different ___ mine.'", "from", "than", "with", "to", "In formal English, use 'different from'."],
        ],
      },
      {
        week: 2,
        title: "Conjunctions",
        subtopics: ["Coordinating conjunctions", "Subordinating conjunctions", "Correlative conjunctions", "Joining sentences correctly"],
        objectives: ["Explain the function of conjunctions", "Use coordinating conjunctions to join equal ideas", "Use subordinating conjunctions to show reason, time, condition and contrast", "Use correlative pairs correctly"],
        lesson: {
          title: "Joining Words: Conjunctions",
          summary: "Join words and sentences smoothly and logically with conjunctions.",
          minutes: 35,
          notes: `## What is a conjunction?
A **conjunction** joins words, phrases or clauses: *bread **and** butter*, *I was tired **but** I finished my work*.

## Coordinating conjunctions (FANBOYS)
**for, and, nor, but, or, yet, so** — join ideas of equal importance.
*She studied hard, **so** she passed.* / *Do you want tea **or** coffee?*

## Subordinating conjunctions
Introduce a dependent clause and show the relationship between ideas:
| Meaning | Conjunctions |
|---|---|
| reason | because, since, as |
| time | when, while, before, after, until |
| condition | if, unless |
| contrast | although, though, even though |
| purpose | so that |
*We stayed indoors **because** it was raining.* / ***Although** he was ill, he came to school.*

## Correlative conjunctions
Work in pairs: *either … or*, *neither … nor*, *both … and*, *not only … but also*.
*Neither Ada **nor** Bola was late.*

## Common errors
- Do not use two contrasting conjunctions together: *Although it rained, **but** we went* ✗ → *Although it rained, we went* ✓.
- *Unless* already means "if … not": *Unless you hurry, you will be late* ✓.`,
          examples: `**Example 1.** Join: *He was tired. He finished the race.* *Answer:* He was tired, **but** he finished the race. / **Although** he was tired, he finished the race.

**Example 2.** Complete: *___ Musa ___ his sister can swim.* *Answer:* **Both** Musa **and** his sister can swim.

**Example 3.** Correct: *Although she was sick but she wrote the test.* *Answer:* Although she was sick, she wrote the test.`,
        },
        questions: [
          ["E", "Identify the conjunction in 'I like rice and beans.'", "and", "like", "rice", "I", "'And' joins 'rice' and 'beans'."],
          ["E", "Choose the correct conjunction: 'We stayed indoors ___ it was raining.'", "because", "but", "or", "unless", "It gives the reason."],
          ["E", "Choose the correct conjunction: 'Do you want tea ___ coffee?'", "or", "and", "but", "so", "'Or' offers a choice."],
          ["M", "Choose the correct option: '___ he was ill, he came to school.'", "Although", "Because", "Unless", "So", "It shows a contrast."],
          ["M", "Choose the correct option: 'Neither Ada ___ Bola was late.'", "nor", "or", "and", "but", "'Neither' pairs with 'nor'."],
          ["M", "Choose the correct option: 'She studied hard, ___ she passed.'", "so", "but", "although", "unless", "'So' shows the result."],
          ["M", "Choose the correct option: 'Wait here ___ I come back.'", "until", "unless", "although", "because", "'Until' shows time."],
          ["H", "Which sentence is correct?", "Although it rained, we went to the market.", "Although it rained, but we went to the market.", "Although it rained, so we went to the market.", "Although it rained but, we went to the market.", "Do not use 'but' after 'although'."],
          ["H", "Choose the correct option: 'You will fail ___ you study.'", "unless", "if", "because", "since", "'Unless' means 'if … not'."],
          ["H", "Choose the correct option: 'He is not only clever ___ hard-working.'", "but also", "and also", "or", "nor", "The correlative pair is 'not only … but also'."],
        ],
      },
      {
        week: 3,
        title: "Kinds of sentences",
        subtopics: ["Declarative sentences", "Interrogative sentences", "Imperative sentences", "Exclamatory sentences"],
        objectives: ["Identify the four kinds of sentences by function", "Punctuate each kind of sentence correctly", "Change sentences from one kind to another", "Use a variety of sentence kinds in writing"],
        lesson: {
          title: "Sentences by Function",
          summary: "Recognise statements, questions, commands and exclamations and punctuate them correctly.",
          minutes: 35,
          notes: `## What is a sentence?
A **sentence** is a group of words that makes complete sense. It begins with a capital letter and ends with a full stop, question mark or exclamation mark.

## Four kinds of sentences
| Kind | Purpose | Ending | Example |
|---|---|---|---|
| Declarative | makes a statement | . | Lagos is a busy city. |
| Interrogative | asks a question | ? | Where do you live? |
| Imperative | gives a command or request | . or ! | Close the door. |
| Exclamatory | shows strong feeling | ! | What a lovely voice! |

## Notes
- In an imperative sentence the subject **you** is understood: *(You) Sit down.*
- Questions often begin with *who, what, where, when, why, how* or a helping verb: ***Are** you ready?*
- Exclamatory sentences often begin with *What* or *How*: ***How** tall he is!*

## Changing kinds
Statement: *You are ready.* → Question: *Are you ready?*
Statement: *The view is beautiful.* → Exclamation: *How beautiful the view is!*`,
          examples: `**Example 1.** What kind of sentence is *Please pass the salt.*? *Answer:* **imperative** (a polite request).

**Example 2.** Change to a question: *She can swim.* *Answer:* **Can she swim?**

**Example 3.** What kind of sentence is *What a big elephant!*? *Answer:* **exclamatory**.`,
        },
        questions: [
          ["E", "What kind of sentence is 'Where do you live?'", "interrogative", "declarative", "imperative", "exclamatory", "It asks a question."],
          ["E", "What kind of sentence is 'Lagos is a busy city.'", "declarative", "interrogative", "imperative", "exclamatory", "It makes a statement."],
          ["E", "What kind of sentence is 'Close the door.'", "imperative", "declarative", "interrogative", "exclamatory", "It gives a command."],
          ["M", "What kind of sentence is 'What a lovely voice she has!'", "exclamatory", "interrogative", "imperative", "declarative", "It expresses strong feeling."],
          ["M", "In the command 'Sit down', the subject is", "'you', understood", "'sit'", "'down'", "there is no subject at all", "The subject 'you' is understood in commands."],
          ["M", "Change 'She can swim' into a question.", "Can she swim?", "She can swim?", "Swim can she?", "Can swim she?", "Move the helping verb before the subject."],
          ["M", "What kind of sentence is 'Please pass the salt.'", "imperative", "interrogative", "exclamatory", "declarative", "It is a polite request."],
          ["H", "Which sentence is exclamatory?", "How tall your brother is!", "How tall is your brother?", "Your brother is tall.", "Measure your brother.", "It expresses surprise and ends with an exclamation mark."],
          ["H", "Change 'The view is beautiful' into an exclamatory sentence.", "How beautiful the view is!", "Is the view beautiful?", "Look at the beautiful view.", "The view is beautiful?", "Exclamations often begin with 'How' or 'What'."],
          ["H", "Which of these is NOT a complete sentence?", "Running down the road.", "The dog barked.", "Come here.", "Is it raining?", "It has no subject and no complete verb."],
        ],
      },
      {
        week: 4,
        title: "Subject–verb agreement",
        subtopics: ["Singular and plural subjects", "Subjects joined by 'and'", "Each, every and everyone", "Separated subjects and verbs"],
        objectives: ["Explain subject–verb agreement", "Match singular subjects with singular verbs", "Use correct verbs with each, every and everyone", "Find the true subject when words come between it and the verb"],
        lesson: {
          title: "Making Subjects and Verbs Agree",
          summary: "Choose singular or plural verbs to match their subjects.",
          minutes: 40,
          notes: `## The basic rule
A **singular** subject takes a **singular** verb; a **plural** subject takes a **plural** verb.
*The boy **plays**.* / *The boys **play**.*
In the present tense, the singular verb usually ends in **-s**, while the plural does not.

## Subjects joined by "and"
Two subjects joined by *and* are plural: *Ada **and** Bola **are** here.*

## Each, every, everyone, nobody
These are **singular**: ***Each** student **has** a book.* / ***Everyone is** ready.* / ***Nobody knows** the answer.*

## Words between subject and verb
Find the true subject — ignore phrases such as *of the …*, *with …*, *as well as …*:
*The box **of** pencils **is** on the desk.* (subject: *box*)
*The teacher, **with** her students, **is** coming.* (subject: *teacher*)

## Was and were
*I **was**, he/she/it **was**, we/you/they **were**.* (But: *If I **were** you* — for wishes and imaginary situations.)

## Collective nouns
Usually singular when the group acts as one: *The team **is** strong.*`,
          examples: `**Example 1.** Choose: *The box of pencils (is / are) on the desk.* *Answer:* **is** (the subject is *box*).

**Example 2.** Choose: *Each of the girls (has / have) a bag.* *Answer:* **has**.

**Example 3.** Choose: *Ada and her sister (was / were) late.* *Answer:* **were** (two people).`,
        },
        questions: [
          ["E", "Choose the correct option: 'The boys ___ football every evening.'", "play", "plays", "playing", "is playing", "A plural subject takes a plural verb."],
          ["E", "Choose the correct option: 'My mother ___ at the hospital.'", "works", "work", "working", "are working", "A singular subject takes a singular verb."],
          ["E", "Choose the correct option: 'Ada and Bola ___ here.'", "are", "is", "was", "has", "Two subjects joined by 'and' are plural."],
          ["M", "Choose the correct option: 'Everyone ___ ready for the test.'", "is", "are", "were", "have been", "'Everyone' is singular."],
          ["M", "Choose the correct option: 'The box of pencils ___ on the desk.'", "is", "are", "were", "have", "The subject is 'box', which is singular."],
          ["M", "Choose the correct option: 'Each of the girls ___ a bag.'", "has", "have", "are having", "were having", "'Each' is singular."],
          ["M", "Choose the correct option: 'We ___ at home yesterday.'", "were", "was", "is", "be", "'We' takes 'were'."],
          ["H", "Choose the correct option: 'The teacher, with her students, ___ coming to the hall.'", "is", "are", "were", "have", "'With her students' does not change the singular subject 'teacher'."],
          ["H", "Choose the correct option: 'Nobody ___ the answer.'", "knows", "know", "are knowing", "have known", "'Nobody' is singular."],
          ["H", "Choose the correct option: 'The team ___ very strong this year.'", "is", "are", "were", "have", "The team acts as one unit, so the verb is singular."],
        ],
      },
      {
        week: 5,
        title: "Speech work: diphthongs",
        subtopics: ["What a diphthong is", "The eight diphthongs of English", "Diphthongs versus pure vowels", "Spelling and diphthongs"],
        objectives: ["Explain what a diphthong is", "Identify words containing each diphthong", "Distinguish diphthongs from pure vowels", "Recognise that one diphthong can have several spellings"],
        lesson: {
          title: "Diphthongs",
          summary: "Recognise and pronounce the gliding vowel sounds of English.",
          minutes: 35,
          notes: `## What is a diphthong?
A **diphthong** is a vowel sound in which the tongue **glides** from one vowel position to another within a single syllable. English has **eight** diphthongs.

| Diphthong | Examples |
|---|---|
| /eɪ/ | day, rain, great, eight |
| /aɪ/ | my, high, time, buy |
| /ɔɪ/ | boy, coin, toy |
| /əʊ/ | go, boat, know, though |
| /aʊ/ | now, house, cow |
| /ɪə/ | here, near, beer, ear |
| /eə/ | hair, care, there, where |
| /ʊə/ | poor, tour, sure (often /ɔː/ in modern speech) |

## Diphthong or pure vowel?
- *cot* /ɒ/ (pure) vs *coat* /əʊ/ (diphthong)
- *bet* /e/ vs *bait* /eɪ/
- *hat* /æ/ vs *height* /aɪ/

## Many spellings, one sound
/eɪ/ can be spelt *a-e* (make), *ai* (rain), *ay* (day), *ei* (eight), *ea* (great). Always listen to the sound.`,
          examples: `**Example 1.** Which word contains /aʊ/: *house* or *horse*? *Answer:* **house** (*horse* has the pure vowel /ɔː/).

**Example 2.** Which word contains /eɪ/: *great* or *greet*? *Answer:* **great** (*greet* has /iː/).

**Example 3.** Which word contains /ɔɪ/: *coin* or *cone*? *Answer:* **coin** (*cone* has /əʊ/).`,
        },
        questions: [
          ["E", "How many diphthongs are there in English?", "8", "5", "12", "24", "English has eight diphthongs."],
          ["E", "Which word contains the diphthong /ɔɪ/?", "boy", "bay", "buy", "bow", "'Boy' has /ɔɪ/."],
          ["E", "Which word contains the diphthong /aʊ/?", "house", "horse", "hose", "has", "'House' has /aʊ/; 'horse' has the pure vowel /ɔː/."],
          ["M", "Which word contains the diphthong /eɪ/?", "great", "greet", "grit", "get", "Although it is spelt with 'ea', 'great' is pronounced with /eɪ/; 'greet' has /iː/."],
          ["M", "Which word contains the diphthong /əʊ/?", "boat", "bought", "bat", "boot", "'Boat' has /əʊ/."],
          ["M", "Which word contains the diphthong /aɪ/?", "high", "hay", "he", "who", "'High' has /aɪ/."],
          ["M", "Which word contains the diphthong /eə/?", "hair", "here", "hire", "her", "'Hair' has /eə/; 'here' has /ɪə/."],
          ["H", "Which word contains the pure vowel /ɒ/ rather than a diphthong?", "cot", "coat", "coin", "cow", "'Cot' has the short pure vowel /ɒ/."],
          ["H", "Which word has the same vowel sound as 'eight'?", "rain", "right", "height", "eat", "'Eight' and 'rain' both have the diphthong /eɪ/; 'height' has /aɪ/."],
          ["H", "Which word contains the diphthong /ɪə/?", "near", "nor", "gnaw", "now", "'Near' has /ɪə/."],
        ],
      },
      {
        week: 6,
        title: "Word formation: prefixes and suffixes",
        subtopics: ["Root words", "Prefixes and their meanings", "Suffixes and word classes", "Forming opposites with prefixes"],
        objectives: ["Identify root words, prefixes and suffixes", "Use common prefixes to change meanings", "Use suffixes to change word classes", "Form opposites with un-, dis-, in-, im-, ir- and il-"],
        lesson: {
          title: "Building Words",
          summary: "Use prefixes and suffixes to form new words and understand unfamiliar ones.",
          minutes: 35,
          notes: `## Parts of a word
- The **root** carries the main meaning: *happy*.
- A **prefix** is added at the **beginning**: ***un**happy*.
- A **suffix** is added at the **end**: *happi**ness***.

## Common prefixes
| Prefix | Meaning | Example |
|---|---|---|
| un-, dis-, in-, im-, ir-, il- | not / opposite | unkind, dishonest, incorrect, impossible, irregular, illegal |
| re- | again | rewrite |
| pre- | before | preview |
| mis- | wrongly | misspell |
| over- | too much | overcook |

**Negative prefixes before certain letters:** *im-* before *p, b, m* (impolite, imbalance, immature); *ir-* before *r* (irresponsible); *il-* before *l* (illiterate).

## Suffixes change the word class
| Suffix | Forms | Example |
|---|---|---|
| -ness, -ment, -tion | nouns | kindness, payment, education |
| -ful, -less, -ous, -able | adjectives | helpful, careless, dangerous, readable |
| -ly | adverbs | quickly |
| -ise/-ize, -en | verbs | modernise, widen |

## Spelling changes
*happy → happiness* (y → i), *hope → hopeful* (keep e), *run → runner* (double n).`,
          examples: `**Example 1.** Give the opposite of *possible*. *Answer:* **impossible**.

**Example 2.** Change the verb *educate* into a noun. *Answer:* **education**.

**Example 3.** What does *rewrite* mean? *Answer:* to write **again**.`,
        },
        questions: [
          ["E", "What is the opposite of 'possible'?", "impossible", "unpossible", "dispossible", "inpossible", "'Im-' is used before p."],
          ["E", "What does the prefix 're-' mean in 'rewrite'?", "again", "before", "not", "wrongly", "To rewrite is to write again."],
          ["E", "Which word contains a suffix?", "careless", "care", "run", "table", "'-less' is a suffix meaning 'without'."],
          ["M", "What is the opposite of 'regular'?", "irregular", "unregular", "inregular", "disregular", "'Ir-' is used before r."],
          ["M", "Change the verb 'educate' into a noun.", "education", "educative", "educated", "educator's", "'-tion' forms nouns."],
          ["M", "What is the opposite of 'honest'?", "dishonest", "unhonest", "inhonest", "imhonest", "The negative form is 'dishonest'."],
          ["M", "Change the adjective 'kind' into a noun.", "kindness", "kindly", "unkind", "kinder", "'-ness' forms nouns from adjectives."],
          ["H", "What is the opposite of 'literate'?", "illiterate", "unliterate", "inliterate", "disliterate", "'Il-' is used before l."],
          ["H", "Which word means 'to spell wrongly'?", "misspell", "unspell", "disspell", "respell", "The prefix 'mis-' means wrongly (note the double s)."],
          ["H", "Which word is correctly formed from 'happy' + '-ness'?", "happiness", "happyness", "happness", "happieness", "Change y to i before adding -ness."],
        ],
      },
      {
        week: 7,
        title: "Descriptive composition",
        subtopics: ["What a descriptive composition is", "Using the five senses", "Organising a description", "Choosing vivid words"],
        objectives: ["State the purpose of a descriptive composition", "Use details that appeal to the senses", "Organise a description logically", "Use vivid adjectives, adverbs and comparisons"],
        lesson: {
          title: "Describing People, Places and Things",
          summary: "Paint a clear picture in words using the senses and well-chosen vocabulary.",
          minutes: 45,
          notes: `## What is a descriptive composition?
It paints a **picture in words** of a person, place, object or event so that the reader can see, hear and feel it: *"My school"*, *"A market day"*, *"My best friend"*.

## Use the five senses
- **Sight**: colours, shapes, sizes — *the golden evening sun*
- **Sound**: *the chatter of traders, the hoot of buses*
- **Smell**: *the aroma of roasted corn*
- **Touch**: *the rough bark of the old tree*
- **Taste**: *the sweet, juicy mango*

## Organising
- A **place**: from outside to inside, or left to right, or near to far.
- A **person**: appearance → character → why they matter to you.
- An **event**: before → during → after.
Give each paragraph one aspect.

## Vivid language
- Precise adjectives and verbs: *the hall **buzzed***, not *the hall was noisy*.
- **Similes**: *as busy as a beehive*, *like a sea of heads*.
- Mostly the **present tense** for things that are always so, or the past tense for a particular occasion — but be consistent.

## Ending
Close with your feelings or an overall impression: *I love our market because it is the heart of our town.*`,
          examples: `**Plain:** *The market was busy and noisy.*

**Vivid:** *By seven o'clock the market was a sea of heads. Traders shouted their prices over the hoot of buses, and the smell of fried akara drifted from the corner stalls.*

**Describing a person:** *Mama Nkechi is a short, cheerful woman whose laughter fills the whole compound.*`,
        },
        questions: [
          ["E", "The main aim of a descriptive composition is to", "paint a picture in words", "argue a point", "give instructions", "tell a joke", "Description helps the reader imagine something clearly."],
          ["E", "Which phrase appeals to the sense of smell?", "the aroma of roasted corn", "the golden evening sun", "the rough bark of a tree", "the hoot of buses", "'Aroma' is a smell."],
          ["E", "Which phrase appeals to the sense of hearing?", "the chatter of traders", "the bright blue sky", "the sweet mango", "the smooth floor", "'Chatter' is a sound."],
          ["M", "Which sentence is the most vivid description?", "The hall buzzed with excited voices.", "The hall was noisy.", "There were people in the hall.", "The hall was a hall.", "'Buzzed' and 'excited' create a clear picture."],
          ["M", "Which of these is a simile?", "as busy as a beehive", "the busy market", "busily working", "a market day", "A simile compares using 'as' or 'like'."],
          ["M", "When describing a place, a good way to organise it is", "from outside to inside", "in random order", "from the ending to the title", "by listing unrelated facts", "A logical order helps the reader follow."],
          ["M", "Which phrase appeals to the sense of touch?", "the rough bark of the old tree", "the loud drums", "the colourful wrappers", "the smell of rain", "'Rough' is felt by touching."],
          ["H", "Which order is best for describing a person?", "appearance, character, why the person matters to you", "why the person matters, appearance, title", "character only", "a list of their relatives", "It moves from what we see to deeper qualities."],
          ["H", "Which sentence uses a precise verb instead of a general one?", "The rain hammered on the roof.", "The rain was on the roof.", "The rain did something to the roof.", "There was rain.", "'Hammered' shows exactly how the rain sounded."],
          ["H", "Which is the best closing sentence for a description of your school?", "I am proud of my school because it feels like a second home.", "The end.", "That is all about the school.", "My school is a school.", "It gives an overall impression and feeling."],
        ],
      },
      {
        week: 8,
        title: "Dictionary skills",
        subtopics: ["Alphabetical order", "Guide words", "Information in a dictionary entry", "Using a dictionary to check meaning, spelling and pronunciation"],
        objectives: ["Arrange words in alphabetical order", "Use guide words to find entries quickly", "Identify the parts of a dictionary entry", "Choose the correct meaning of a word for its context"],
        lesson: {
          title: "Using a Dictionary",
          summary: "Find words quickly and use all the information a dictionary entry provides.",
          minutes: 35,
          notes: `## Alphabetical order
Words are arranged by their **first letter**; if the first letters are the same, look at the **second**, then the third, and so on.
*back, bag, ball, band* (compare the third letter: c, g, l, n).

## Guide words
The two words at the top of each page show the **first** and **last** entries on that page. If the word you want comes alphabetically between them, it is on that page.

## What an entry tells you
| Part | Example for *record* |
|---|---|
| Headword and syllables | rec·ord |
| Pronunciation | /ˈrekɔːd/ (noun), /rɪˈkɔːd/ (verb) |
| Part of speech | n. (noun), v. (verb), adj. (adjective) |
| Meanings | numbered 1, 2, 3 … |
| Example sentence | *She broke the school **record**.* |
| Other forms | recorded, recording |

## Choosing the right meaning
Many words have several meanings. Read all of them and choose the one that fits the **sentence**.

## Other uses
Checking **spelling**, **plural forms**, **past tenses** and **stress** (shown by the mark ˈ before the stressed syllable).`,
          examples: `**Example 1.** Arrange in alphabetical order: *grape, garden, goat, glass*. *Answer:* **garden, glass, goat, grape**.

**Example 2.** The guide words are *cable* and *camera*. Is *calendar* on the page? *Answer:* **yes** (*cab… < cal… < cam…*).

**Example 3.** In a dictionary, what does *n.* stand for? *Answer:* **noun**.`,
        },
        questions: [
          ["E", "Which list is in alphabetical order?", "apple, banana, cherry", "banana, apple, cherry", "cherry, banana, apple", "apple, cherry, banana", "a comes before b, which comes before c."],
          ["E", "In a dictionary, the abbreviation 'n.' stands for", "noun", "number", "negative", "name only", "It shows the part of speech."],
          ["E", "Which word comes first in alphabetical order?", "garden", "glass", "goat", "grape", "After 'g', compare second letters: a comes first."],
          ["M", "Arrange in alphabetical order: back, band, bag, ball.", "back, bag, ball, band", "bag, back, band, ball", "ball, band, back, bag", "band, ball, bag, back", "Compare the third letters: c, g, l, n."],
          ["M", "The guide words at the top of a page are 'cable' and 'camera'. Which word is on that page?", "calendar", "candle", "cattle", "bread", "'Cal' comes between 'cab' and 'cam'."],
          ["M", "What do guide words show?", "the first and last entries on the page", "the most difficult words", "the page number", "the author of the dictionary", "They help you find words quickly."],
          ["M", "Why should you read all the meanings given for a word?", "To choose the one that fits the sentence", "Because the first meaning is always wrong", "To make your answer longer", "Because dictionaries give only one meaning", "Many words have several meanings."],
          ["H", "In /rɪˈkɔːd/, the mark ˈ shows", "the stressed syllable", "a silent letter", "a plural", "the end of the word", "The stress mark comes before the stressed syllable."],
          ["H", "Which information would a dictionary NOT normally give about a word?", "the name of the first person to use it in your town", "its pronunciation", "its part of speech", "its meanings", "Dictionaries give pronunciation, word class and meanings, not such local history."],
          ["H", "Which word would come LAST in a dictionary?", "photograph", "phone", "photo", "phonics", "Compare letter by letter: 'photog…' comes after 'photo'."],
        ],
      },
    ],
  },
];
