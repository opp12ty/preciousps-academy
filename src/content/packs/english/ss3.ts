import type { TermPlan } from "../types";
import { ss3t1 } from "./ss3-t1";
import { ss3t2 } from "./ss3-t2";

/** SS3 English Language — original Precious PS content for WASSCE, NECO and UTME preparation. */
export const ss3: TermPlan[] = [
  ss3t1,
  ss3t2,
  {
    classCode: "SS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Final revision: lexis and structure drill",
        subtopics: ["Mixed synonym and antonym items", "Mixed completion items", "Interpretation items", "Timing and review"],
        objectives: ["Answer mixed lexis items with speed and accuracy", "Complete structure items correctly", "Interpret sentences precisely", "Review answers efficiently under time pressure"],
        lesson: {
          title: "Lexis and Structure Drill",
          summary: "A mixed drill to consolidate lexis and structure before final examinations.",
          minutes: 45,
          notes: `## How to use this drill
Answer each item in **under 40 seconds**. Mark any item you are unsure of and return to it at the end.

## Quick rules to recall
1. **Nearest meaning**: keep the meaning; match the word class.
2. **Opposite meaning**: reverse the meaning; beware of synonyms among the options.
3. **Completion**: identify the grammar point first.
4. **Interpretation**: no additions, no literal readings of idioms.

## Top structures
*no sooner … than*, *hardly … when*, *it's time + past*, *would rather + past*, *one of the + plural noun + who + plural verb*, *each/every/either/neither + singular verb*, *look forward to + -ing*, *used to + base* / *be used to + -ing*, inversion after negative adverbs.

## Top vocabulary habits
Read widely; keep a personal word list with sentence examples; learn words in **families** (*benefit, beneficial, beneficiary*).

## After the drill
Review every mistake and write the rule it tested.`,
          examples: `**Drill item:** *He is used to ___ early.* *Answer:* **waking** (be used to + -ing).

**Drill item:** *Opposite of **cordial** in "a cordial reception":* **hostile**.

**Drill item:** *"She would have gone if she had been invited."* Interpretation: **she was not invited and did not go**.`,
        },
        questions: [
          ["E", "Choose the correct option: 'He is used to ___ early.'", "waking", "wake", "woke", "have woken", "'Be used to' is followed by the -ing form."],
          ["E", "Choose the option opposite in meaning to 'cordial': 'They gave the visitors a cordial reception.'", "hostile", "warm", "friendly", "large", "'Cordial' means warm and friendly."],
          ["E", "Choose the option nearest in meaning to 'pragmatic': 'We need a pragmatic solution.'", "practical", "theoretical", "expensive", "slow", "'Pragmatic' means practical."],
          ["M", "'She would have gone if she had been invited.' This means", "She was not invited and did not go.", "She was invited and went.", "She was invited but did not go.", "She will be invited.", "The third conditional describes an unreal past."],
          ["M", "Choose the correct option: 'Each of the candidates ___ a number.'", "was given", "were given", "have been given", "are given", "'Each' takes a singular verb."],
          ["M", "Choose the option nearest in meaning to 'scrutinise': 'The auditors will scrutinise the accounts.'", "examine closely", "ignore", "sign", "destroy", "To scrutinise is to inspect carefully."],
          ["M", "Choose the correct option: 'It's time the government ___ the roads.'", "repaired", "repairs", "will repair", "has repaired", "'It's time' is followed by the past form."],
          ["H", "Choose the option opposite in meaning to 'ameliorate': 'The new measures will ameliorate the situation.'", "worsen", "improve", "study", "announce", "To ameliorate is to make better."],
          ["H", "Choose the correct option: 'Seldom ___ such dedication.'", "have we seen", "we have seen", "we saw", "did we saw", "Negative adverbs at the start trigger inversion."],
          ["H", "Choose the option nearest in meaning to 'venerate': 'The villagers venerate their ancestors.'", "respect deeply", "fear greatly", "forget", "mock", "To venerate is to regard with great respect."],
        ],
      },
      {
        week: 2,
        title: "Final revision: oral English drill",
        subtopics: ["Vowel and consonant items", "Stress items", "Emphatic stress items", "Rhyme and intonation items"],
        objectives: ["Answer mixed sound items accurately", "Identify stress patterns quickly", "Answer emphatic stress items", "Identify rhymes and intonation patterns"],
        lesson: {
          title: "Oral English Drill",
          summary: "A mixed drill covering every oral English item type before final examinations.",
          minutes: 45,
          notes: `## Item types in the objective paper
1. Vowels — same vowel as the underlined letter(s).
2. Consonants — same consonant as the underlined letter(s).
3. Rhymes — word that rhymes with the given word.
4. Word stress — stressed syllable / different stress pattern.
5. Emphatic stress — question the sentence answers.

## Final memory aids
- **Sound, not spelling**: *said* /e/, *women* /ɪ/, *blood* /ʌ/, *chef* /ʃ/, *exam* /gz/.
- **Suffix stress**: -tion, -ic, -ity, -ian → stress before; -ee, -eer, -ese → stress on suffix.
- **Emphatic stress**: the correct option changes **only** the stressed item.
- **Rhymes**: compare the final vowel and consonants only.
- **Intonation**: fall for statements, wh-questions, commands; rise for yes/no questions and polite requests.

## Practice routine
Say every word aloud (softly) during practice; in the examination hall, "hear" it in your head.`,
          examples: `**Item:** Which word has /ʃ/ like *machine*: *brochure, church, cheese, chose*? *Answer:* **brochure**.

**Item:** Which word rhymes with *weight*: *freight, height, feet, wit*? *Answer:* **freight** (both end in /eɪt/).

**Item:** *The girls PAINTED the classroom.* → *Did the girls **sweep** the classroom?*`,
        },
        questions: [
          ["E", "Which word contains /ʃ/ as in 'machine'?", "brochure", "church", "cheese", "chose", "'Ch' in 'brochure' is /ʃ/."],
          ["E", "Which word rhymes with 'weight'?", "freight", "height", "feet", "wit", "Both end in /eɪt/."],
          ["E", "Which word contains the vowel /ʌ/?", "flood", "floor", "food", "foot", "'Flood' rhymes with 'mud'."],
          ["M", "'The girls PAINTED the classroom.' Which question does this answer?", "Did the girls sweep the classroom?", "Did the boys paint the classroom?", "Did the girls paint the library?", "Who painted the classroom?", "The action is being corrected."],
          ["M", "Which word has a different stress pattern from the others?", "record (noun)", "reply", "report", "reject", "The noun 'REcord' is stressed on the first syllable."],
          ["M", "Which word is stressed on the final syllable?", "Japanese", "Japan's", "jacket", "journey", "-ese carries the stress."],
          ["M", "In which word is 'x' pronounced /gz/?", "exist", "extra", "six", "toxic", "'Exist' is /ɪɡˈzɪst/."],
          ["H", "Which word contains a triphthong?", "tower", "tour", "town", "toe", "'Tower' has /aʊə/."],
          ["H", "How is 'photography' stressed?", "pho-TO-gra-phy", "PHO-to-gra-phy", "pho-to-GRA-phy", "pho-to-gra-PHY", "The second syllable is stressed."],
          ["H", "Which tune is used for 'Could you lend me your notes, please?'", "rising", "falling", "level", "rise-fall", "Polite requests usually rise."],
        ],
      },
      {
        week: 3,
        title: "Final revision: comprehension and summary drill",
        subtopics: ["Reading an unseen passage", "Answering mixed comprehension items", "Writing a timed summary", "Reviewing with a marking guide"],
        objectives: ["Read an unseen passage efficiently", "Answer mixed comprehension items accurately", "Write a summary within time", "Assess answers against a marking guide"],
        lesson: {
          title: "Comprehension and Summary Drill",
          summary: "Apply reading and summary skills to an original unseen passage.",
          minutes: 60,
          notes: `## Passage
*Libraries in many of our schools are silent for the wrong reasons. The shelves hold outdated textbooks, some older than the students' parents, and the few new books are locked away for fear that they will be stolen. Students, finding nothing that interests them, drift towards their phones instead.*
*Yet a library can transform a school. A well-stocked, welcoming library encourages independent study and helps weak readers catch up. It offers quiet space to students whose homes are crowded and noisy. Above all, it nurtures curiosity; a student who picks up a book on the stars may one day become an astronomer.*
*Reviving school libraries does not require great wealth. Old students can donate books; parents can volunteer as library assistants; and simple reading competitions can create excitement.*

## Tasks
1. Why are many school libraries unattractive? (comprehension)
2. What does the writer mean by *"silent for the wrong reasons"*?
3. In three sentences, summarise the **benefits** of a good library.
4. In three sentences, summarise the **ways** to revive school libraries.

## Marking guide
1. They have outdated books, and new books are locked away.
2. They are quiet not because students are studying but because nobody uses them.
3. It encourages independent study and helps weak readers. / It gives quiet space to students from noisy homes. / It nurtures curiosity.
4. Old students can donate books. / Parents can volunteer as assistants. / Reading competitions can create interest.`,
          examples: `**Weak answer to Q2:** *The library is quiet.* — too literal; misses the irony.

**Strong answer:** *The writer means the libraries are quiet because they are **unused**, not because students are studying.*

**Weak summary point:** *A student may become an astronomer.* — this is an example; the point is that libraries **nurture curiosity**.`,
        },
        questions: [
          ["E", "Passage: 'The shelves hold outdated textbooks, some older than the students' parents, and the few new books are locked away for fear that they will be stolen.' Why are many school libraries unattractive?", "They have outdated books and new books are locked away.", "They are too noisy.", "They have too many computers.", "They are too far from the school.", "The passage gives these reasons."],
          ["E", "Passage: 'Old students can donate books; parents can volunteer as library assistants; and simple reading competitions can create excitement.' This sentence gives", "ways to revive school libraries", "benefits of libraries", "reasons libraries fail", "the passage title", "It lists solutions."],
          ["E", "Passage: 'Students, finding nothing that interests them, drift towards their phones instead.' 'Drift' here suggests the students", "turn gradually and aimlessly to their phones", "swim to their phones", "run quickly to their phones", "throw their phones away", "'Drift' suggests aimless movement."],
          ["M", "Passage: 'Libraries in many of our schools are silent for the wrong reasons.' What does the writer mean?", "The libraries are quiet because they are unused, not because students are studying.", "The libraries are too noisy.", "The librarians refuse to speak.", "Silence is always wrong.", "It is ironic: silence should mean study."],
          ["M", "Passage: 'It offers quiet space to students whose homes are crowded and noisy.' The best summary sentence is", "It gives quiet study space to students from noisy homes.", "Homes are crowded.", "Students are noisy.", "Space is quiet.", "It states the benefit concisely."],
          ["M", "Passage: 'Above all, it nurtures curiosity; a student who picks up a book on the stars may one day become an astronomer.' Which part is an example rather than a point?", "a student who picks up a book on the stars may one day become an astronomer", "it nurtures curiosity", "above all", "it", "The astronomer illustrates the point."],
          ["M", "Passage: 'A well-stocked, welcoming library encourages independent study and helps weak readers catch up.' A word that can replace 'nurtures' in 'it nurtures curiosity' is", "develops", "kills", "hides", "measures", "'Nurture' means encourage the growth of."],
          ["H", "Passage: 'Reviving school libraries does not require great wealth.' What is the writer's attitude to reviving school libraries?", "optimistic, because it is achievable without great wealth", "hopeless", "indifferent", "sarcastic", "The writer shows that it is achievable."],
          ["H", "Which is the best title for the passage?", "Bringing School Libraries Back to Life", "Phones in School", "Astronomy for Beginners", "Crowded Homes", "It captures the problem and the solution."],
          ["H", "Passage: 'Old students can donate books; parents can volunteer as library assistants.' The best summary sentence for this part is", "Parents can volunteer as library assistants.", "Parents are assistants.", "Volunteering is good for everyone.", "Libraries need parents and wealth.", "It is one clear point in one sentence."],
        ],
      },
      {
        week: 4,
        title: "Final revision: essay writing drill",
        subtopics: ["Analysing past-style questions", "Planning under time pressure", "Writing openings and conclusions", "Final checklist"],
        objectives: ["Analyse essay questions of every type", "Plan essays rapidly", "Write strong openings and conclusions", "Apply a final checklist before submission"],
        lesson: {
          title: "Essay Writing Drill",
          summary: "Final practice in analysing, planning and polishing examination essays.",
          minutes: 60,
          notes: `## Practice questions (original)
1. *Write a letter to your younger brother, who has just entered secondary school, advising him on how to succeed.* (informal)
2. *As the Senior Prefect, write a speech to be delivered at your school's valedictory service.* (speech)
3. *Write an article for a national newspaper on "The Dangers of Drug Abuse among Young People".* (article)
4. *Write a story that illustrates the saying "Honesty is the best policy".* (narrative)
5. *"Parents should choose careers for their children." Write your contribution to a debate for or against this motion.* (argumentative/debate)

## Strong openings
- **Letter**: purpose within the first two sentences.
- **Speech/debate**: complete vocatives, then a striking statement.
- **Article**: a question, a statistic you are sure of, or a short scene.
- **Story**: action or dialogue.

## Strong conclusions
- Summarise; appeal; reflect; or give the moral (for a proverb story).

## Final checklist
- [ ] Correct form and features
- [ ] All parts of the task covered
- [ ] 4–6 well-developed paragraphs
- [ ] Appropriate tone
- [ ] Edited for spelling, concord, tense and punctuation
- [ ] Legible handwriting`,
          examples: `**Debate opening (against the motion):** *The Chairman, Panel of Judges, Accurate Time-keeper, Co-debaters, Ladies and Gentlemen, I stand before you to oppose the motion that parents should choose careers for their children.*

**Story ending (Honesty is the best policy):** *…Mr Adamu handed me the scholarship letter. "An honest boy," he said, "is worth more than a clever thief." That day I understood that honesty truly is the best policy.*`,
        },
        questions: [
          ["E", "'Write a letter to your younger brother advising him on how to succeed' requires", "an informal letter", "a formal letter", "a report", "a speech", "It is to a family member."],
          ["E", "'As the Senior Prefect, write a speech for the valedictory service' requires", "a speech", "an article", "a formal letter", "a narrative", "The word 'speech' identifies the form."],
          ["E", "A story illustrating 'Honesty is the best policy' should", "show honesty leading to a good outcome", "show dishonesty being rewarded", "avoid the theme", "be a formal letter", "The story must prove the saying."],
          ["M", "Which opening suits a debate speech?", "The Chairman, Panel of Judges, Accurate Time-keeper, Co-debaters, Ladies and Gentlemen,", "Dear Brother,", "Once upon a time,", "Sir, I write to complain.", "Debates open with vocatives."],
          ["M", "Which is the strongest opening for a narrative?", "\"Stop, thief!\" The shout echoed through the market.", "This is a story about honesty.", "I want to write a story.", "Honesty is a good thing.", "It begins with action and dialogue."],
          ["M", "For 'Parents should choose careers for their children', a candidate opposing the motion must argue that", "parents should not choose their children's careers", "parents should choose careers", "careers are unimportant", "children should not work", "Opposing means arguing against the motion."],
          ["M", "How many well-developed paragraphs are typical in an examination essay?", "4–6", "1", "15–20", "none", "This allows development within the word limit."],
          ["H", "Which conclusion best suits a newspaper article on drug abuse?", "Let us all — parents, teachers and youths — say no to drugs and protect our future.", "Yours faithfully.", "Thank you for listening, Chairman.", "The end of the story.", "It gives a call to action to readers."],
          ["H", "Which is the best way to begin an informal letter of advice to a younger brother?", "I am writing to share some tips that will help you succeed in secondary school.", "Sir, I write to complain.", "The Chairman, Panel of Judges…", "Report on your success.", "It states the purpose warmly and directly."],
          ["H", "Which is the most important item on a final checklist?", "The correct form and every part of the task covered", "Writing in capital letters throughout", "Using as many long words as possible", "Leaving no margins", "Relevance and format carry heavy weight."],
        ],
      },
    ],
  },
];
