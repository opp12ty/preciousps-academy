import type { StarterArticle } from "./hub";

/**
 * Study notes for IELTS, TOEFL and the Common Entrance examination, written for Precious PS Academy.
 * Listening practice uses [[listen: …]], which the reader's own device speaks aloud.
 */

type Part = [heading: string, text: string];

const art = (category: string, level: StarterArticle["level"], title: string, summary: string, parts: Part[], keyPoints: string[], activity: string): StarterArticle => ({ audience: "STUDENT", section: "KNOWLEDGE", category, title, summary, body: parts.map(([h, t]) => `## ${h}\n${t}`).join("\n\n"), keyPoints: keyPoints.join("\n"), activity, level });

export const PREP_STUDY_ARTICLES: StarterArticle[] = [
  art("IELTS Preparation", "SENIOR_SECONDARY", "IELTS Listening: four parts and how to score well", "Thirty minutes of recordings, forty questions, and each recording is heard only once.", [
    ["The four parts", "| Part | What you hear | Typical questions |\n|---|---|---|\n| 1 | A conversation about everyday needs, e.g. booking a room | form or note completion: names, numbers, dates |\n| 2 | One speaker on a public matter, e.g. a library tour | multiple choice, map or plan labelling |\n| 3 | A discussion between students and a tutor | multiple choice, matching opinions |\n| 4 | A short academic lecture | note or summary completion |\n\nThe recordings get harder from Part 1 to Part 4. In the real test each is played **once**."],
    ["Before each recording", "Use the reading time to **underline key words** in the questions and **predict the answer type**: a number, a name, a place, a plural noun. If the instruction says **NO MORE THAN TWO WORDS**, a three-word answer is wrong even if the meaning is right."],
    ["Traps to expect", "- **Corrections**: \"It opens at nine — sorry, ten.\" The second answer counts.\n- **Distractors**: the speaker mentions several options before choosing one.\n- **Spelling**: names are often spelt out letter by letter. Wrong spelling loses the mark.\n- **Numbers**: listen for fifteen / fifty and dates."],
    ["Try it now", "Press **Listen**, then write the day, the room and the cost.\n\n[[listen: Hello, this is Bola from the sports centre. Your badminton court is booked for Saturday, not Friday as you asked, because Friday is full. You'll be in Court Three, and the fee is two thousand naira for one hour. Please bring your own shuttlecocks. || Practice recording]]\n\n**Answers:** Saturday; Court Three; two thousand naira for an hour."],
  ], ["Four parts, forty questions, played once", "Predict the answer type before listening", "Watch for corrections and distractors", "Spelling and word limits count"], "Listen to a news bulletin and write down every number, name and date you hear. Check your notes with a second listen."),

  art("IELTS Preparation", "SENIOR_SECONDARY", "IELTS Reading: skimming, scanning and True / False / Not Given", "Sixty minutes, three long passages and forty questions, with no extra time to copy answers.", [
    ["Skim, then scan", "**Skim** the passage in two minutes for the main idea of each paragraph: read the first and last sentences. Then **scan** for the key word of each question, a name, date or technical term, and read that part carefully."],
    ["True / False / Not Given", "- **True**: the passage says the same thing, often in different words.\n- **False**: the passage says the opposite.\n- **Not Given**: the passage says nothing either way. Do not use your own knowledge."],
    ["Matching headings", "Choose the heading that sums up the **whole** paragraph, not one detail in it. Cross out headings as you use them."],
    ["Managing the hour", "About twenty minutes a passage. Never leave a blank: there is no penalty for a wrong answer. Write answers straight onto the answer sheet."],
  ], ["Skim for gist, scan for detail", "Not Given means no information", "Headings sum up the whole paragraph", "About twenty minutes a passage"], "Take any newspaper article, give each paragraph a five-word heading, then write three True/False/Not Given statements about it for a friend."),

  art("IELTS Preparation", "SENIOR_SECONDARY", "IELTS Writing Task 1: describing charts and diagrams", "A 150-word report on a graph, table, map or process, written in about twenty minutes.", [
    ["The four-paragraph plan", "1. **Introduction**: paraphrase the title in one sentence.\n2. **Overview**: two or three main trends or the biggest differences. This paragraph matters most.\n3. **Detail 1**: group related figures and compare them.\n4. **Detail 2**: the remaining group of figures.\nNo conclusion and **no opinion** are needed."],
    ["Useful language", "- Rise: increased, grew, climbed, rose sharply / gradually\n- Fall: decreased, declined, dropped, fell slightly\n- Steady: remained stable, levelled off\n- Peak and low: reached a peak of, hit a low of\n- Compare: twice as many as, slightly higher than, by contrast"],
    ["Example", "The chart shows sales rising from 200 units in January to 500 in June. **Overview:** sales more than doubled over the six months. **Detail:** the sharpest rise came between March and April, when sales climbed by 150 units."],
  ], ["At least 150 words", "Overview of main trends is essential", "Group and compare figures", "No opinion"], "Find a bar chart in a textbook and write a four-paragraph description of it in twenty minutes."),

  art("IELTS Preparation", "SENIOR_SECONDARY", "IELTS Speaking: the three parts", "An eleven to fourteen minute conversation with an examiner, recorded and marked on four criteria.", [
    ["The three parts", "| Part | Time | What happens |\n|---|---|---|\n| 1 | 4–5 min | Questions about you: home, studies, hobbies |\n| 2 | 3–4 min | A topic card: one minute to prepare, up to two minutes to speak |\n| 3 | 4–5 min | A deeper discussion of ideas linked to Part 2 |"],
    ["How it is marked", "**Fluency and coherence**, **lexical resource** (vocabulary), **grammatical range and accuracy**, and **pronunciation**. Accent is not marked down; clarity is what counts."],
    ["Good habits", "- Extend each answer with a **reason** and an **example**.\n- In Part 2, use the minute to note four key words, one for each prompt on the card.\n- If you do not understand, ask: \"Could you repeat the question, please?\"\n- Do not memorise answers: examiners notice and move on."],
  ], ["Three parts, about fourteen minutes", "Answer, reason, example", "Use the full two minutes in Part 2", "Clarity matters more than accent"], "Record yourself speaking for two minutes on 'a teacher who influenced you', then listen back and count how often you hesitated."),

  art("TOEFL Preparation", "SENIOR_SECONDARY", "TOEFL Listening and Speaking: lectures, conversations and note-taking", "TOEFL listening is academic: campus conversations and lectures, followed by questions on main idea, detail and the speaker's purpose.", [
    ["Question types", "- **Main idea**: what is the lecture mainly about?\n- **Detail**: what does the professor say about X?\n- **Function**: why does the speaker say this?\n- **Attitude**: what does the student think about the plan?\n- **Organisation**: how is the information arranged?"],
    ["Note-taking that works", "Draw a line down the page. On the left, the **topic** and **main points**; on the right, **examples** and **details**. Use symbols: ↑ increase, ↓ decrease, → causes, ≠ different from, ex = example."],
    ["Speaking responses", "State your answer in the first sentence, give two reasons, then a short example. Keep to the time: practise with a timer until the length feels natural."],
    ["Try it now", "Press **Listen**, take notes, then say in one sentence what the professor's main point is.\n\n[[listen: Professor: Most people think deserts are always hot. In fact, the largest desert on Earth is Antarctica. A desert is defined by how little rain or snow it receives, not by temperature. Antarctica gets so little precipitation that it qualifies, even though it is covered in ice. || Practice lecture]]\n\n**Main point:** a desert is defined by low precipitation, not heat, so Antarctica is a desert."],
  ], ["Know the five question types", "Two-column notes with symbols", "Answer, two reasons, example", "Practise with a timer"], "Watch a five-minute online lecture and answer: main idea, two details, and why the speaker used one example."),

  art("Common Entrance", "PRIMARY", "Common Entrance: how the examination works and how to prepare", "The Common Entrance examination admits pupils from Primary 6 into JSS 1, including the Federal Government Colleges (Unity Schools).", [
    ["What it is", "The **National Common Entrance Examination (NCEE)** is taken in Primary 6 for admission into Federal Government Colleges; states and many private schools set their own entrance tests in a similar style. Papers usually cover **Mathematics**, **English**, **Quantitative Reasoning**, **Verbal Reasoning**, and often General Studies or Basic Science."],
    ["The papers", "| Paper | What it tests |\n|---|---|\n| Mathematics | number, fractions, percentages, measurement, shapes, word problems |\n| English | grammar, vocabulary, spelling, comprehension |\n| Quantitative Reasoning | number patterns and rules: 3 → 9, 5 → 15 |\n| Verbal Reasoning | analogies, odd one out, codes, word building |\n| General Paper | science, social studies and current affairs |"],
    ["A six-month plan", "- **Months 1–2**: revise Primary 4 and 5 topics: tables, fractions, parts of speech.\n- **Months 3–4**: one subject a day; timed practice in Quantitative and Verbal Reasoning.\n- **Month 5**: full timed papers every week on the CBT platform.\n- **Month 6**: revise mistakes only; rest well before the exam."],
    ["On the day", "Arrive early with two pencils, an eraser and your registration slip. Read every question twice. Shade answers neatly. Skip hard questions and return to them; never leave a blank."],
  ], ["Taken in Primary 6 for JSS 1", "Maths, English, Quantitative and Verbal Reasoning", "Timed practice from month three", "Never leave a blank"], "Ask a parent to time you on one Common Entrance practice exam on this platform. Write down every question you got wrong and the right answer."),
];
