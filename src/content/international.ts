/**
 * Premium "International & Advanced" starter programmes. Every question is original practice
 * written for Precious PS Academy in the style of the named examination; none is taken from a real
 * paper. IELTS, TOEFL, SAT and Cambridge Checkpoint are trademarks of their owners, who have no
 * connection with this platform.
 */
import type { Q } from "./packs/types";

export interface IntlProgramme {
  key: string;
  title: string;
  examType: "IELTS" | "TOEFL" | "SAT" | "CHECKPOINT";
  subjectCode: "ENG" | "MTH";
  level: "PRIMARY" | "JUNIOR_SECONDARY" | "SENIOR_SECONDARY";
  minutes: number;
  description: string;
  questions: Q[];
}

const ielts: Q[] = [
  ["M", "Choose the word closest in meaning to 'mitigate' in: 'Planting trees can mitigate the effects of flooding.'", "reduce", "cause", "measure", "ignore", "To mitigate something is to make it less severe, so 'reduce' fits."],
  ["M", "Complete the sentence: 'The number of commuters ___ steadily since the new rail line opened.'", "has risen", "rise", "is rising since", "had rise", "'Since' with a period up to now takes the present perfect: has risen."],
  ["H", "Which sentence is the most suitable for a formal academic essay?", "The data suggest that urban migration is accelerating.", "Loads of people are moving to towns these days.", "You can see that everyone is going to the city.", "Folks keep on moving to town, don't they?", "Academic writing is impersonal and precise; it avoids 'loads of', 'you' and question tags."],
  ["M", "A chart shows sales falling from 900 units to 300 units. Which description is accurate?", "Sales fell by two-thirds.", "Sales fell by one-third.", "Sales halved.", "Sales fell to two-thirds.", "A fall of 600 from 900 is 600/900 = two-thirds."],
  ["E", "Choose the correct linking word: 'Solar power is clean; ___, the panels are costly to install.'", "however", "therefore", "for example", "similarly", "The second idea contrasts with the first, so a contrast linker is needed."],
  ["H", "'Scarcely had the lecture begun ___ the fire alarm sounded.'", "when", "than", "then", "that", "'Scarcely … when' is the fixed pairing; 'no sooner … than' is the other pattern."],
  ["M", "Read: 'Although remote work cuts travel time, several firms report weaker teamwork.' What is the writer's view?", "Remote work has both a benefit and a drawback.", "Remote work should be banned.", "Remote work always improves teamwork.", "Travel time is unimportant.", "'Although' introduces a benefit, then the main clause gives a drawback."],
  ["M", "Choose the correct form: 'If governments ___ more in public transport, congestion would fall.'", "invested", "invest", "will invest", "have invested", "An unreal present condition uses the past simple with 'would'."],
  ["E", "Which word is spelt correctly?", "accommodation", "acommodation", "accomodation", "acomodation", "'Accommodation' has double c and double m."],
  ["H", "Which sentence uses the passive voice appropriately for a process description?", "The beans are roasted before they are ground.", "They roast beans and then somebody grinds.", "Roasting the beans, grinding happens.", "The beans roasts before grinding them.", "Process descriptions favour the present simple passive: are roasted, are ground."],
  ["M", "'The findings were inconclusive.' This means the findings", "did not lead to a firm result.", "were completely false.", "proved the theory.", "were kept secret.", "Inconclusive means not giving a definite answer."],
  ["M", "Choose the best paraphrase of 'a sharp increase'.", "a sudden, large rise", "a slow, small rise", "a gentle fall", "no change", "'Sharp' describes a change that is sudden and big."],
  ["H", "Identify the sentence with correct article use.", "The Nile is the longest river in Africa.", "Nile is longest river in the Africa.", "A Nile is the longest river in Africa.", "The Nile is a longest river in Africa.", "Rivers and superlatives take 'the'; continents take no article."],
  ["E", "Complete: 'She is interested ___ studying medicine abroad.'", "in", "on", "at", "for", "The adjective 'interested' is followed by the preposition 'in'."],
  ["M", "In a discussion essay, which sentence best introduces the opposing view?", "Critics argue, on the other hand, that the cost outweighs the gain.", "As I said before, the gain is big.", "In conclusion, the gain is clear.", "For instance, the gain is large.", "'On the other hand' signals the contrasting position."],
  ["H", "'The policy was implemented; ___ its aims were only partly achieved.' Choose the best option.", "nevertheless,", "furthermore,", "because", "so that", "The second clause concedes a limitation, which 'nevertheless' expresses."],
  ["M", "Which word best completes: 'The study draws a clear ___ between diet and concentration.'", "link", "tie-up", "glue", "rope", "'Draw a link between' is the natural academic collocation."],
  ["M", "Choose the correct comparative: 'Rail travel is ___ than road travel in terms of emissions.'", "far less harmful", "more less harmful", "far lesser harm", "much more harmless", "'Far less harmful' is the correct modified comparative."],
  ["E", "A speaker says, 'Turn left at the lights, then it's the second building on your right.' Where is the building?", "On the right, after turning left.", "On the left, before the lights.", "Straight ahead at the lights.", "On the left, after turning right.", "The directions are: left at the lights, then second building on the right."],
  ["H", "Which sentence avoids overgeneralisation?", "Many young people tend to prefer online learning.", "All young people prefer online learning.", "Young people always prefer online learning.", "Nobody likes classroom learning.", "Hedging with 'many' and 'tend to' is expected in academic writing."],
];

const toefl: Q[] = [
  ["M", "Choose the word that best completes the sentence: 'The professor asked that every student ___ the reading before class.'", "complete", "completes", "completed", "is completing", "After 'asked that', the subjunctive base form is used."],
  ["M", "'Not only ___ the experiment, but she also published the results.'", "did she design", "she designed", "she did design", "designed she", "A sentence beginning 'Not only' needs subject-auxiliary inversion."],
  ["E", "In a campus conversation a student says, 'I'm swamped this week.' The student means that he is", "very busy.", "very tired of water.", "free all week.", "feeling ill.", "'Swamped' is informal for having too much to do."],
  ["H", "Which sentence is grammatically correct?", "Had I known about the deadline, I would have applied earlier.", "If I would know about the deadline, I applied earlier.", "Had I knew about the deadline, I would apply earlier.", "If I had know the deadline, I would have apply earlier.", "An inverted third conditional is 'Had I known … I would have applied'."],
  ["M", "Read: 'Coral reefs cover under one per cent of the ocean floor yet shelter about a quarter of marine species.' What can be inferred?", "Reefs are far richer in life than their size suggests.", "Reefs cover most of the ocean floor.", "Few species live on reefs.", "Reefs are larger than continents.", "A tiny area holding a quarter of species implies unusual richness."],
  ["M", "The word 'ubiquitous' is closest in meaning to", "found everywhere", "very rare", "dangerous", "expensive", "Ubiquitous means present everywhere."],
  ["E", "Complete: 'Neither the students nor the lecturer ___ aware of the room change.'", "was", "were", "are", "be", "With 'neither … nor' the verb agrees with the nearer subject, 'lecturer'."],
  ["H", "Choose the sentence with correct parallel structure.", "The course teaches reading critically, writing clearly and speaking confidently.", "The course teaches to read critically, writing clearly and how to speak.", "The course teaches reading critically, to write clearly and confident speech.", "The course teaches critical reading, write clearly and speaking.", "All three items must have the same grammatical form."],
  ["M", "In a lecture, the speaker says, 'Let me backtrack for a moment.' The speaker is about to", "return to an earlier point.", "end the lecture.", "start a new topic.", "ask a question.", "To backtrack is to go back to something said before."],
  ["M", "Which word correctly completes: 'The results were ___ different from what we expected.'", "markedly", "marked", "mark", "marking", "An adverb is needed to modify the adjective 'different'."],
  ["H", "'The committee, along with its advisers, ___ to meet on Friday.'", "is", "are", "were", "have", "'Along with …' does not change the singular subject 'committee'."],
  ["E", "Choose the correct word: 'Please ___ your essay by e-mail before noon.'", "submit", "summit", "admit", "permit", "To submit work is to hand it in."],
  ["M", "Read: 'The bridge, completed in 1932, remains in daily use.' Which statement is true?", "The bridge is still used.", "The bridge was closed in 1932.", "The bridge is being built.", "The bridge was never finished.", "'Remains in daily use' means people still use it."],
  ["M", "Which sentence best combines these ideas? 'The sample was small. The results are reliable.'", "Although the sample was small, the results are reliable.", "The sample was small, so the results are reliable.", "Because the sample was small, the results are reliable.", "The sample was small and therefore reliable.", "The ideas contrast, so a concession clause is right."],
  ["H", "'Seldom ___ such a clear example of erosion.'", "do geologists find", "geologists find", "geologists do find", "find geologists", "Negative adverbs at the start of a sentence require inversion."],
  ["E", "The prefix in 'postgraduate' means", "after", "before", "against", "half", "'Post-' means after, as in after graduating."],
  ["M", "Choose the correct option: 'She has lived in Toronto ___ 2019.'", "since", "for", "from", "during", "'Since' is used with a starting point in time."],
  ["M", "An integrated task asks you to 'summarise the points made in the lecture'. You should", "report the lecturer's main points in your own words.", "give your personal opinion only.", "copy the reading passage.", "write a story.", "Summarising means restating the main points briefly."],
  ["H", "Which sentence uses the correct relative clause?", "The theory, which was proposed in 1905, changed physics.", "The theory, that was proposed in 1905, changed physics.", "The theory which proposed in 1905 changed physics.", "The theory, what was proposed in 1905, changed physics.", "Non-defining clauses use 'which', set off by commas."],
  ["M", "The phrase 'by and large' means", "on the whole", "by a large amount", "very slowly", "side by side", "'By and large' means generally or on the whole."],
];

const sat: Q[] = [
  ["E", "If $3x + 7 = 25$, what is the value of $6x$?", "36", "6", "18", "42", "$3x = 18$, so $6x = 36$."],
  ["M", "A line passes through $(0, 4)$ and $(2, 10)$. What is its slope?", "3", "2", "5", "7", "Slope $= (10 - 4)/(2 - 0) = 3$."],
  ["M", "If $f(x) = 2x^2 - 3$, what is $f(-2)$?", "5", "-11", "1", "11", "$2(-2)^2 - 3 = 8 - 3 = 5$."],
  ["M", "A shirt priced at 80 dollars is reduced by 15%. What is the sale price?", "68 dollars", "65 dollars", "12 dollars", "72 dollars", "15% of 80 is 12, and $80 - 12 = 68$."],
  ["H", "For what value of $k$ does $x^2 - 6x + k = 0$ have exactly one real solution?", "9", "6", "3", "36", "One solution needs discriminant $36 - 4k = 0$, so $k = 9$."],
  ["E", "What is the mean of 4, 8, 10 and 14?", "9", "8", "10", "36", "The sum is 36 and $36 / 4 = 9$."],
  ["M", "Solve the system $x + y = 10$ and $x - y = 4$. What is $x$?", "7", "3", "6", "14", "Adding the equations gives $2x = 14$, so $x = 7$."],
  ["M", "A circle has radius 5. What is its area?", "$25\\pi$", "$10\\pi$", "$5\\pi$", "$50\\pi$", "Area $= \\pi r^2 = 25\\pi$."],
  ["H", "If $2^{x+1} = 32$, what is $x$?", "4", "5", "16", "6", "$32 = 2^5$, so $x + 1 = 5$ and $x = 4$."],
  ["M", "The ratio of boys to girls in a club is 3 : 5. If there are 40 members, how many are girls?", "25", "15", "24", "8", "Girls are $5/8$ of 40, which is 25."],
  ["M", "Which expression is equivalent to $(x + 3)(x - 3)$?", "$x^2 - 9$", "$x^2 + 9$", "$x^2 - 6x - 9$", "$x^2 - 6$", "This is a difference of two squares."],
  ["H", "A right triangle has legs 9 and 12. What is the length of its hypotenuse?", "15", "21", "13", "108", "$\\sqrt{81 + 144} = \\sqrt{225} = 15$."],
  ["E", "If $y = 4x$ and $x = 2.5$, what is $y$?", "10", "6.5", "1.6", "100", "$4 \\times 2.5 = 10$."],
  ["M", "A car travels 150 km in 2.5 hours. What is its average speed?", "60 km/h", "375 km/h", "50 km/h", "75 km/h", "Speed $= 150 / 2.5 = 60$ km/h."],
  ["H", "If $\\frac{x}{3} + \\frac{x}{6} = 5$, what is $x$?", "10", "15", "30", "5", "$\\frac{2x + x}{6} = 5$, so $3x = 30$ and $x = 10$."],
  ["M", "Which inequality has the solution $x > 4$?", "$2x - 3 > 5$", "$2x + 3 > 5$", "$x - 4 < 0$", "$3x < 12$", "$2x > 8$ gives $x > 4$."],
  ["M", "The median of 3, 7, 9, 12 and 20 is", "9", "7", "10.2", "12", "The middle value of five ordered numbers is the third, 9."],
  ["H", "What is the vertex of the parabola $y = (x - 2)^2 + 5$?", "$(2, 5)$", "$(-2, 5)$", "$(2, -5)$", "$(5, 2)$", "Vertex form $y = (x - h)^2 + k$ has vertex $(h, k)$."],
  ["M", "A population of 2000 grows by 10% each year. What is it after two years?", "2420", "2400", "2200", "2440", "$2000 \\times 1.1 \\times 1.1 = 2420$."],
  ["E", "What is 30% of 250?", "75", "83", "7.5", "220", "$0.3 \\times 250 = 75$."],
];

const checkpointPrimaryMaths: Q[] = [
  ["E", "What is the value of the digit 7 in 4 725?", "700", "70", "7", "7 000", "The 7 is in the hundreds place."],
  ["E", "Which number is a multiple of both 3 and 4?", "24", "18", "16", "9", "24 = 3 × 8 and 4 × 6."],
  ["M", "A bus leaves at 09:45 and arrives at 11:20. How long is the journey?", "1 hour 35 minutes", "2 hours 35 minutes", "1 hour 25 minutes", "1 hour 75 minutes", "09:45 to 10:45 is 1 hour, then 35 more minutes."],
  ["M", "What is $\\frac{3}{4}$ of 60?", "45", "15", "20", "48", "A quarter of 60 is 15, so three quarters is 45."],
  ["M", "The perimeter of a square is 36 cm. What is its area?", "81 cm²", "36 cm²", "9 cm²", "144 cm²", "Each side is 9 cm, and $9 \\times 9 = 81$."],
  ["E", "Round 3 468 to the nearest hundred.", "3 500", "3 400", "3 470", "3 000", "The tens digit is 6, so round up."],
  ["M", "Which fraction is equal to 0.25?", "$\\frac{1}{4}$", "$\\frac{1}{25}$", "$\\frac{2}{5}$", "$\\frac{1}{2}$", "One quarter is 0.25."],
  ["M", "The next number in the pattern 3, 6, 12, 24, … is", "48", "36", "30", "27", "Each number is doubled."],
  ["H", "Amara has 5 red and 3 blue beads in a bag. She picks one without looking. What is the chance it is blue?", "$\\frac{3}{8}$", "$\\frac{3}{5}$", "$\\frac{5}{8}$", "$\\frac{1}{3}$", "3 of the 8 beads are blue."],
  ["M", "How many millilitres are there in 2.5 litres?", "2 500", "250", "25", "25 000", "1 litre is 1 000 ml."],
  ["E", "Which shape has exactly five sides?", "pentagon", "hexagon", "octagon", "rhombus", "'Penta' means five."],
  ["M", "What is $7 \\times 8 - 6$?", "50", "14", "62", "56", "$56 - 6 = 50$."],
  ["H", "A recipe needs 150 g of flour for 6 cakes. How much flour is needed for 10 cakes?", "250 g", "900 g", "160 g", "200 g", "One cake needs 25 g, so ten need 250 g."],
  ["M", "What is the size of each angle in an equilateral triangle?", "60°", "90°", "45°", "180°", "The three equal angles add up to 180°."],
  ["M", "Which number is prime?", "29", "27", "21", "33", "29 has no factors other than 1 and itself."],
];

const checkpointPrimaryEnglish: Q[] = [
  ["E", "Choose the correct plural: 'There are three ___ on the shelf.'", "boxes", "boxs", "boxies", "box", "Nouns ending in x add -es."],
  ["E", "Which word is a verb in 'The dog barked loudly at the gate'?", "barked", "dog", "loudly", "gate", "'Barked' tells what the dog did."],
  ["M", "Choose the sentence with correct punctuation.", "\"Where are you going?\" asked Tom.", "\"Where are you going\" asked Tom?", "Where are you going? asked \"Tom\".", "\"Where are you going,\" asked Tom.", "The question mark belongs inside the speech marks."],
  ["M", "Which word is an antonym of 'ancient'?", "modern", "old", "historic", "antique", "Ancient means very old; modern is its opposite."],
  ["M", "'The wind whispered through the trees.' This is an example of", "personification", "simile", "rhyme", "alliteration", "The wind is given a human action, whispering."],
  ["E", "Choose the correct word: 'They left ___ bags in the hall.'", "their", "there", "they're", "thier", "'Their' shows that something belongs to them."],
  ["M", "Which sentence is in the past tense?", "She walked to the river.", "She walks to the river.", "She will walk to the river.", "She is walking to the river.", "'Walked' is the past form."],
  ["M", "Add a suffix to 'hope' to mean 'without hope'.", "hopeless", "hopeful", "hoping", "hoped", "The suffix -less means without."],
  ["H", "Read: 'Sami zipped his coat up to his chin and rubbed his hands together.' What can you infer?", "It was cold.", "It was very hot.", "Sami was hungry.", "Sami was late.", "Zipping a coat and rubbing hands are things people do when cold."],
  ["M", "Which word is an adverb in 'The girl sang beautifully'?", "beautifully", "girl", "sang", "the", "It tells how she sang."],
  ["E", "Which word rhymes with 'night'?", "kite", "neat", "note", "knit", "'Night' and 'kite' end with the same sound."],
  ["H", "Choose the best connective: 'We wore boots ___ the path was muddy.'", "because", "but", "although", "unless", "The mud is the reason for the boots."],
  ["M", "Which is a compound word?", "sunflower", "flowers", "sunny", "flowering", "'Sun' and 'flower' join to make one word."],
  ["M", "A dictionary lists words in", "alphabetical order", "order of size", "order of difficulty", "no order", "Dictionaries are arranged from A to Z."],
  ["H", "'As brave as a lion' is an example of", "a simile", "a metaphor", "an idiom of time", "a question", "A simile compares using 'as' or 'like'."],
];

const checkpointLowerMaths: Q[] = [
  ["E", "Simplify $3a + 5a - 2a$.", "$6a$", "$10a$", "$6a^3$", "$8a$", "$3 + 5 - 2 = 6$ lots of $a$."],
  ["M", "Solve $4x - 7 = 21$.", "$x = 7$", "$x = 3.5$", "$x = 28$", "$x = 14$", "$4x = 28$, so $x = 7$."],
  ["M", "What is $(-3) \\times (-8)$?", "24", "-24", "-11", "11", "A negative times a negative is positive."],
  ["M", "Write 0.000 45 in standard form.", "$4.5 \\times 10^{-4}$", "$4.5 \\times 10^{4}$", "$45 \\times 10^{-5}$", "$0.45 \\times 10^{-3}$", "The decimal point moves four places to give 4.5."],
  ["H", "The angles of a quadrilateral are $x$, $2x$, $3x$ and $4x$. Find $x$.", "36°", "18°", "90°", "40°", "$10x = 360°$, so $x = 36°$."],
  ["M", "Increase 240 by 15%.", "276", "255", "36", "204", "15% of 240 is 36, and $240 + 36 = 276$."],
  ["M", "The $n$th term of a sequence is $3n + 2$. What is the 10th term?", "32", "30", "15", "35", "$3 \\times 10 + 2 = 32$."],
  ["E", "What is the highest common factor of 18 and 24?", "6", "3", "72", "12", "6 is the largest number dividing both."],
  ["H", "A cuboid measures 4 cm by 5 cm by 6 cm. What is its volume?", "120 cm³", "15 cm³", "148 cm³", "60 cm³", "$4 \\times 5 \\times 6 = 120$."],
  ["M", "Expand $3(2x - 5)$.", "$6x - 15$", "$6x - 5$", "$5x - 15$", "$6x + 15$", "Multiply each term in the bracket by 3."],
  ["M", "The probability of rain is 0.35. What is the probability of no rain?", "0.65", "0.35", "0.75", "1.35", "The two probabilities add up to 1."],
  ["H", "Share 84 in the ratio 3 : 4. What is the larger share?", "48", "36", "56", "21", "One part is 12, so four parts are 48."],
  ["M", "What is the circumference of a circle of diameter 10 cm? (Take $\\pi = 3.14$.)", "31.4 cm", "78.5 cm", "15.7 cm", "314 cm", "$C = \\pi d = 3.14 \\times 10$."],
  ["M", "Evaluate $2^3 + 3^2$.", "17", "12", "13", "25", "$8 + 9 = 17$."],
  ["E", "Which is the correct order, smallest first?", "0.3, 0.35, 0.4", "0.4, 0.35, 0.3", "0.35, 0.3, 0.4", "0.3, 0.4, 0.35", "Compare tenths, then hundredths."],
];

const checkpointLowerEnglish: Q[] = [
  ["M", "Which sentence contains a subordinate clause?", "When the bell rang, the class fell silent.", "The bell rang loudly.", "The class fell silent.", "Bells and silence.", "'When the bell rang' cannot stand alone."],
  ["M", "Choose the word closest in meaning to 'reluctant'.", "unwilling", "eager", "certain", "careless", "Reluctant means not wanting to do something."],
  ["H", "'The city was a furnace that afternoon.' The writer uses a metaphor to suggest that the city was", "extremely hot", "full of factories", "on fire", "very noisy", "A furnace is very hot; the city is compared directly to it."],
  ["M", "Which sentence uses a semicolon correctly?", "The match was over; the crowd drifted home.", "The match; was over the crowd drifted home.", "The match was over the; crowd drifted home.", "The match was; over the crowd drifted home.", "A semicolon joins two closely related main clauses."],
  ["E", "Identify the passive sentence.", "The window was broken by the ball.", "The ball broke the window.", "The boy kicked the ball.", "The glass shattered.", "The subject receives the action, with 'was broken by'."],
  ["M", "A writer who wants to persuade is most likely to use", "rhetorical questions", "a list of ingredients", "stage directions", "a rhyme scheme", "Rhetorical questions push the reader towards a view."],
  ["H", "'He said he had never seen the letter.' Which is the direct speech?", "\"I have never seen the letter,\" he said.", "\"He had never seen the letter,\" he said.", "\"I had never see the letter,\" he said.", "\"I never seen the letter,\" he said.", "Reported 'had seen' comes from direct 'have seen'."],
  ["M", "Which word has a prefix meaning 'not'?", "irregular", "regularly", "regulate", "regulation", "'Ir-' means not."],
  ["M", "The purpose of a topic sentence is to", "state the main idea of a paragraph", "end the whole text", "give the writer's name", "list the references", "It tells the reader what the paragraph is about."],
  ["E", "Choose the correct form: 'Neither of the answers ___ correct.'", "is", "are", "were", "be", "'Neither' takes a singular verb."],
  ["H", "Which sentence shows a biased viewpoint?", "Only a fool would vote against this brilliant plan.", "The plan was approved by nine votes to four.", "The plan will cost two million naira.", "The meeting began at ten o'clock.", "Loaded words such as 'fool' and 'brilliant' reveal bias."],
  ["M", "In a formal letter, the best closing after 'Dear Sir or Madam' is", "Yours faithfully", "Yours sincerely", "Lots of love", "Cheers", "'Yours faithfully' is used when the name is not known."],
  ["M", "'The leaves danced in the breeze' is an example of", "personification", "onomatopoeia", "hyperbole", "a simile", "Leaves are given a human action."],
  ["E", "Which is the correct spelling?", "necessary", "neccessary", "necesary", "neccesary", "One c and double s: necessary."],
  ["H", "A narrator who uses 'I' and tells only what he or she experiences is a", "first-person narrator", "third-person omniscient narrator", "second-person narrator", "playwright", "First-person narration uses 'I'."],
];

export const INTERNATIONAL_PROGRAMMES: IntlProgramme[] = [
  { key: "ielts", title: "IELTS-style Academic English Practice", examType: "IELTS", subjectCode: "ENG", level: "SENIOR_SECONDARY", minutes: 25, description: "Original practice in the style of IELTS: academic vocabulary, grammar for writing, describing data and understanding a writer's view.", questions: ielts },
  { key: "toefl", title: "TOEFL-style English Practice", examType: "TOEFL", subjectCode: "ENG", level: "SENIOR_SECONDARY", minutes: 25, description: "Original practice in the style of TOEFL: structure, academic vocabulary, campus language and inference.", questions: toefl },
  { key: "sat", title: "SAT-style Mathematics Practice", examType: "SAT", subjectCode: "MTH", level: "SENIOR_SECONDARY", minutes: 30, description: "Original practice in the style of SAT Math: algebra, functions, ratios, percentages, geometry and data.", questions: sat },
  { key: "cp-maths", title: "Primary Checkpoint-style Mathematics", examType: "CHECKPOINT", subjectCode: "MTH", level: "PRIMARY", minutes: 20, description: "Original practice in the style of an international primary checkpoint: number, measures, shape, data and problem solving.", questions: checkpointPrimaryMaths },
  { key: "cp-english", title: "Primary Checkpoint-style English", examType: "CHECKPOINT", subjectCode: "ENG", level: "PRIMARY", minutes: 20, description: "Original practice in the style of an international primary checkpoint: grammar, punctuation, vocabulary and reading inference.", questions: checkpointPrimaryEnglish },
  { key: "cl-maths", title: "Lower Secondary Checkpoint-style Mathematics", examType: "CHECKPOINT", subjectCode: "MTH", level: "JUNIOR_SECONDARY", minutes: 20, description: "Original practice in the style of an international lower-secondary checkpoint: algebra, number, geometry and probability.", questions: checkpointLowerMaths },
  { key: "cl-english", title: "Lower Secondary Checkpoint-style English", examType: "CHECKPOINT", subjectCode: "ENG", level: "JUNIOR_SECONDARY", minutes: 20, description: "Original practice in the style of an international lower-secondary checkpoint: language, writer's craft and reading.", questions: checkpointLowerEnglish },
];
