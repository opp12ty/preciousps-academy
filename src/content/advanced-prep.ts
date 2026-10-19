/**
 * Study notes and practice questions for IELTS, TOEFL, JUPEB and IJMB, and further dictionary
 * words. Everything here was written for Precious PS Academy. No question or passage is taken from a
 * past paper or a published course. The examination names belong to their owners, who have no
 * connection with this platform.
 */
import type { StarterArticle } from "./hub";
import type { Q } from "./packs/types";
import { CE_ENGLISH, CE_MATHS, CE_QUANTITATIVE, CE_VERBAL, IJMB_BIOLOGY, IJMB_ECONOMICS, IJMB_GOVERNMENT, IJMB_PHYSICS, JUPEB_BIOLOGY, JUPEB_CHEMISTRY, JUPEB_ECONOMICS, JUPEB_GOVERNMENT } from "./prep-more";

type Part = [heading: string, text: string];
const note = (category: string, title: string, summary: string, parts: Part[], keyPoints: string[], activity: string): StarterArticle => ({ audience: "STUDENT", section: "KNOWLEDGE", category, title, summary, body: parts.map(([h, t]) => `## ${h}\n${t}`).join("\n\n"), keyPoints: keyPoints.join("\n"), activity, level: "SENIOR_SECONDARY" });

export const PREP_ARTICLES: StarterArticle[] = [
  note("IELTS Preparation", "IELTS: how the test is built", "IELTS tests four skills: Listening, Reading, Writing and Speaking. Each is scored from 0 to 9.", [
    ["The four parts", "| Part | Time | What you do |\n|---|---|---|\n| Listening | about 30 minutes | Answer 40 questions on four recordings |\n| Reading | 60 minutes | Answer 40 questions on three long texts |\n| Writing | 60 minutes | Task 1 (150 words) and Task 2 (250 words) |\n| Speaking | 11 to 14 minutes | A face-to-face interview in three parts |\n\nThere are two versions. **Academic** is for university entry; **General Training** is for work and migration. Listening and Speaking are the same in both."],
    ["Band scores", "Each part receives a band from 0 to 9, and the four are averaged into an overall band. Many universities ask for an overall 6.0 to 7.0, often with a minimum in each part. Check the exact requirement of the institution you want."],
    ["How to prepare", "- Learn the question types before you practise speed.\n- Read widely: newspapers, science magazines and reports build the vocabulary the Reading test uses.\n- Write under time. Planning for five minutes saves ten.\n- Speak English aloud every day, and record yourself."],
    ["Common mistakes", "Writing fewer words than required, copying the question into your answer, spelling answers wrongly in Listening (a wrong spelling is a wrong answer), and spending too long on one Reading text."],
  ], ["Four skills, each scored 0 to 9", "Academic and General Training versions", "Spelling counts in Listening and Reading", "Task 2 carries more marks than Task 1"], "Time yourself reading a 700-word news article and write its three main points in two sentences each."),

  note("IELTS Preparation", "IELTS Writing Task 2: planning a clear essay", "A good Task 2 essay answers every part of the question in four well-organised paragraphs.", [
    ["Read the question twice", "Underline the topic and the instruction. “Discuss both views and give your opinion” needs both views **and** your opinion. Missing one part limits your score however good the English is."],
    ["A dependable structure", "1. **Introduction:** restate the question in your own words and say what you will argue.\n2. **Body paragraph 1:** one main idea, explained, with an example.\n3. **Body paragraph 2:** a second main idea, explained, with an example.\n4. **Conclusion:** sum up and restate your position. Add no new idea.\n\n[[diagram: flow Introduction -> Idea 1 -> Idea 2 -> Conclusion]]"],
    ["Linking ideas", "Use linking words accurately rather than often: *however*, *in addition*, *as a result*, *for instance*, *on the other hand*. One good link is better than three forced ones."],
    ["Language", "Aim for accurate sentences of different lengths. Use precise words: *reduce* rather than *make less*. Avoid memorised phrases; examiners recognise them."],
  ], ["Answer every part of the question", "Four paragraphs", "One idea per body paragraph, with an example", "At least 250 words, in 40 minutes"], "Plan (do not write) an essay on: “Some people think schools should teach practical skills such as cooking and budgeting. Others think this is the parents' job.” Spend five minutes and list two ideas for each view."),

  note("TOEFL Preparation", "TOEFL iBT: how the test is built", "TOEFL iBT measures academic English in Reading, Listening, Speaking and Writing, with a score for each skill and for the whole test.", [
    ["The four sections", "| Section | What you do |\n|---|---|\n| Reading | Answer questions on academic passages |\n| Listening | Answer questions on lectures and conversations |\n| Speaking | Speak your answers into a microphone |\n| Writing | Type responses, some based on reading and listening |\n\n**Scores.** From January 2026 ETS reports TOEFL iBT scores on a **1 to 6 band scale** (in half bands), and for a transition period also shows the familiar 0 to 120 equivalent. Universities state the score they need in either form, so check their requirement and the current test format on **ets.org/toefl**. The test is taken on a computer, and you may take notes throughout."],
    ["What makes it different", "Several tasks are **integrated**: you read a short passage, listen to a lecture about it, and then speak or write about both. Note-taking is therefore a core skill."],
    ["Note-taking", "Write key words, not sentences. Use arrows for cause and effect, numbers for lists and a line down the page to separate the reading's points from the lecturer's."],
    ["Preparing", "Listen to lectures and podcasts on science, history and the arts. Practise typing: the Writing section is typed, and slow typing costs marks."],
  ], ["Four skills: Reading, Listening, Speaking and Writing", "Scores on a 1–6 band scale since 2026, with 0–120 also shown for now", "Integrated tasks combine reading, listening and speaking or writing", "Take notes in key words", "Practise typing"], "Listen to a five-minute educational talk and take notes in key words only. Then explain the talk aloud in one minute using your notes."),

  note("TOEFL Preparation", "Academic reading: finding meaning quickly", "Both TOEFL and IELTS reward readers who can find the main idea, the detail and the writer's purpose under time pressure.", [
    ["Three ways to read", "- **Skim** for the gist: read the title, the first paragraph and the first sentence of each later paragraph.\n- **Scan** for a detail: move your eyes quickly looking only for a name, number or key word.\n- **Read closely** only the sentences around the answer."],
    ["Working out a new word", "Look at the words around it. Is there a contrast (*but*, *unlike*), an example (*such as*), or a definition after a comma or dash? Break the word up: *un-predict-able*."],
    ["Inference", "An inference is something the writer suggests without stating it. The answer must be supported by the text, not by your own knowledge."],
    ["Paraphrase", "Correct answers usually repeat the idea in different words. If an option copies a striking phrase from the passage, check carefully: it is often a trap."],
  ], ["Skim, scan, then read closely", "Use context and word parts for new words", "Inferences must be supported by the text", "Right answers are paraphrases"], "Choose a paragraph from any textbook and rewrite its main idea in one sentence using none of its main words."),

  note("JUPEB and IJMB", "JUPEB and IJMB: what they are and how to prepare", "JUPEB and IJMB are one-year Advanced Level programmes that can give direct entry into 200 level at university.", [
    ["The idea", "Both are Advanced Level programmes taken after secondary school. A candidate studies **three subjects** related to the intended university course for about a year and then sits a final examination. Good grades may be used, with the direct-entry application, to seek admission into 200 level."],
    ["Choosing subjects", "The three subjects must match the course you want. For example, Engineering usually needs Mathematics, Physics and Chemistry; Medicine needs Physics, Chemistry and Biology; Accounting often takes Economics, Accounting and Business Studies or Mathematics. Always confirm the combination with the university's own requirements."],
    ["How it differs from SSCE", "The work goes deeper and faster. In Mathematics you meet calculus, complex numbers and matrices; in the sciences you are expected to derive and apply, not only to recall. Essay and theory answers matter as much as objective questions."],
    ["Study method", "- Keep a formula and definitions book for each subject.\n- After each topic, solve problems without looking at the worked examples.\n- Practise full written solutions, with every step shown.\n- Form a small study group and explain topics to one another."],
  ], ["One-year Advanced Level programmes", "Three subjects matched to your course", "Deeper than SSCE: derive and apply", "Confirm requirements with the university"], "Write the three subjects required for the course you want at two different universities, and note any difference."),

  note("JUPEB and IJMB", "A-level Mathematics: differentiation from first ideas", "Differentiation measures how fast one quantity changes as another changes.", [
    ["The gradient of a curve", "A straight line has one gradient. A curve has a different gradient at every point. The **derivative**, written $\\frac{dy}{dx}$ or $f'(x)$, gives the gradient of the tangent at any point."],
    ["The power rule", "If $y = ax^n$, then $\\frac{dy}{dx} = anx^{n-1}$.\n\n| Function | Derivative |\n|---|---|\n| $x^3$ | $3x^2$ |\n| $5x^2$ | $10x$ |\n| $7x$ | $7$ |\n| $4$ (a constant) | $0$ |\n\nDifferentiate a sum term by term: if $y = x^3 + 5x^2 - 7x + 4$, then $\\frac{dy}{dx} = 3x^2 + 10x - 7$."],
    ["Turning points", "At a maximum or minimum the gradient is zero, so solve $\\frac{dy}{dx} = 0$. The second derivative tells which: if $\\frac{d^2y}{dx^2} > 0$ the point is a minimum; if it is negative, a maximum."],
    ["Worked example", "Find the turning point of $y = x^2 - 6x + 5$.\n\n$\\frac{dy}{dx} = 2x - 6 = 0$, so $x = 3$. Then $y = 9 - 18 + 5 = -4$. Since $\\frac{d^2y}{dx^2} = 2 > 0$, the point $(3, -4)$ is a **minimum**."],
    ["Rates of change", "If $s$ is distance and $t$ is time, $\\frac{ds}{dt}$ is velocity and $\\frac{dv}{dt}$ is acceleration."],
  ], ["dy/dx is the gradient of the tangent", "Power rule: bring down the power, reduce it by one", "Turning points where dy/dx = 0", "Second derivative positive means minimum"], "Find the turning point of y = x² − 4x + 1 and say whether it is a maximum or a minimum."),

  note("JUPEB and IJMB", "A-level Physics: motion with constant acceleration", "Four equations describe any motion in a straight line with constant acceleration.", [
    ["The quantities", "$u$ = initial velocity, $v$ = final velocity, $a$ = acceleration, $t$ = time, $s$ = displacement. Displacement, velocity and acceleration are **vectors**: choose a positive direction and keep to it."],
    ["The equations", "| Equation | Missing quantity |\n|---|---|\n| $v = u + at$ | $s$ |\n| $s = ut + \\frac{1}{2}at^2$ | $v$ |\n| $v^2 = u^2 + 2as$ | $t$ |\n| $s = \\frac{1}{2}(u + v)t$ | $a$ |\n\nList what you know, identify what you need, and choose the equation that leaves out the quantity you neither know nor need."],
    ["Free fall", "Near the Earth's surface a falling body accelerates at $g \\approx 9.8\\ \\text{m s}^{-2}$ (often taken as $10\\ \\text{m s}^{-2}$), if air resistance is ignored. Taking upward as positive, $a = -g$."],
    ["Worked example", "A stone is thrown vertically upward at $20\\ \\text{m s}^{-1}$. Taking $g = 10\\ \\text{m s}^{-2}$, find the greatest height.\n\nAt the top $v = 0$. Using $v^2 = u^2 + 2as$: $0 = 20^2 + 2(-10)s$, so $s = 20\\ \\text{m}$."],
    ["Graphs", "On a velocity–time graph the **gradient** is the acceleration and the **area under the graph** is the displacement."],
  ], ["Four equations for constant acceleration", "Choose a positive direction", "g is about 9.8 m/s² downward", "Area under a velocity–time graph is displacement"], "A car accelerates from rest at 2 m/s² for 8 s. Find its final velocity and the distance covered."),

  note("JUPEB and IJMB", "A-level Chemistry: the mole and chemical calculations", "The mole lets a chemist count particles by weighing them.", [
    ["The mole", "One mole of any substance contains $6.02 \\times 10^{23}$ particles (the Avogadro constant). The mass of one mole is the **molar mass**, numerically equal to the relative formula mass in grams."],
    ["The three key relationships", "| To find | Use |\n|---|---|\n| Moles from mass | $n = \\frac{m}{M}$ |\n| Moles of a gas at s.t.p. | $n = \\frac{V}{22.4\\ \\text{dm}^3}$ |\n| Moles in solution | $n = c \\times V$ (with $V$ in dm³) |"],
    ["Using an equation", "A balanced equation gives the ratio of moles. In $2H_2 + O_2 \\rightarrow 2H_2O$, two moles of hydrogen react with one mole of oxygen to form two moles of water.\n\n[[diagram: flow Mass of A -> Moles of A -> Moles of B -> Mass of B]]"],
    ["Worked example", "What mass of water forms when 4 g of hydrogen burns completely? (H = 1, O = 16)\n\nMoles of $H_2 = \\frac{4}{2} = 2$. The ratio $H_2 : H_2O$ is 1 : 1, so 2 moles of water form. Mass $= 2 \\times 18 = 36\\ \\text{g}$."],
    ["Limiting reagent", "The reactant that is used up first limits the amount of product. Work out the moles of each reactant and compare them with the ratio in the equation."],
  ], ["One mole is 6.02 × 10²³ particles", "n = m/M, n = V/22.4, n = cV", "Balanced equations give mole ratios", "The limiting reagent decides the yield"], "Calculate the number of moles in 49 g of sulphuric acid, H₂SO₄ (H = 1, S = 32, O = 16)."),

  note("JUPEB and IJMB", "A-level Economics: elasticity of demand", "Elasticity measures how strongly buyers respond when price or income changes.", [
    ["Price elasticity of demand", "$PED = \\frac{\\%\\ \\text{change in quantity demanded}}{\\%\\ \\text{change in price}}$. Because price and quantity move in opposite directions the value is negative; economists usually quote its size.\n\n| Size of PED | Demand is | Example |\n|---|---|---|\n| greater than 1 | elastic | restaurant meals |\n| less than 1 | inelastic | salt, petrol |\n| equal to 1 | unit elastic | |"],
    ["Elasticity and revenue", "If demand is **elastic**, a price cut raises total revenue. If demand is **inelastic**, a price rise raises total revenue. This is why taxes are often placed on goods with inelastic demand."],
    ["What decides elasticity", "The number of close substitutes, the share of income spent on the good, whether it is a necessity or a luxury, and the time buyers have to adjust."],
    ["Other elasticities", "**Income elasticity** shows how demand changes with income: positive for normal goods, negative for inferior goods. **Cross elasticity** is positive for substitutes and negative for complements."],
    ["Worked example", "The price of bread rises from N500 to N550 and the quantity bought falls from 200 to 190 loaves. Percentage change in price = 10%; in quantity = −5%. $PED = -0.5$: demand is inelastic."],
  ], ["PED = % change in quantity ÷ % change in price", "Elastic above 1, inelastic below 1", "Inelastic demand: a price rise raises revenue", "Substitutes make demand more elastic"], "A price falls by 20% and quantity demanded rises by 30%. Calculate the price elasticity of demand and say whether revenue rises or falls."),
];

export interface PrepProgramme { key: string; title: string; examType: "JUPEB" | "IJMB" | "COMMON_ENTRANCE"; subjectCode: string; level?: "PRIMARY" | "SENIOR_SECONDARY"; minutes: number; description: string; questions: Q[] }

const jupebMaths: Q[] = [
  ["E", "Differentiate $y = 4x^3$ with respect to $x$.", "$12x^2$", "$4x^2$", "$12x^3$", "$x^4$", "Bring down the power and reduce it by one: $4 \\times 3x^{2} = 12x^2$."],
  ["M", "Find $\\frac{dy}{dx}$ if $y = x^3 - 5x^2 + 2x - 9$.", "$3x^2 - 10x + 2$", "$3x^2 - 5x + 2$", "$x^2 - 10x + 2$", "$3x^2 - 10x - 9$", "Differentiate term by term; the constant differentiates to zero."],
  ["M", "At what value of $x$ does $y = x^2 - 8x + 3$ have a turning point?", "4", "8", "−4", "3", "$\\frac{dy}{dx} = 2x - 8 = 0$ gives $x = 4$."],
  ["E", "Evaluate $\\int 6x^2\\,dx$.", "$2x^3 + C$", "$12x + C$", "$6x^3 + C$", "$3x^3 + C$", "Raise the power by one and divide by the new power: $\\frac{6x^3}{3} = 2x^3$, plus a constant."],
  ["M", "Evaluate $\\int_0^2 3x^2\\,dx$.", "8", "12", "6", "4", "The integral is $x^3$; between 0 and 2 it is $8 - 0 = 8$."],
  ["M", "Simplify $(2 + 3i)(1 - i)$, where $i^2 = -1$.", "$5 + i$", "$2 - 3i$", "$-1 + i$", "$5 - i$", "$2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$."],
  ["E", "Find the modulus of the complex number $3 + 4i$.", "5", "7", "25", "1", "$|z| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$."],
  ["M", "Find the determinant of the matrix $\\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}$.", "10", "14", "12", "−10", "$ad - bc = 3(4) - 2(1) = 10$."],
  ["H", "The sum to infinity of a geometric series with first term 6 and common ratio $\\frac{1}{3}$ is", "9", "18", "8", "6", "$S_\\infty = \\frac{a}{1 - r} = \\frac{6}{2/3} = 9$."],
  ["M", "Solve $\\log_2 x = 5$.", "32", "10", "25", "7", "Change to index form: $x = 2^5 = 32$."],
  ["H", "In how many ways can 3 books be chosen from 7 different books?", "35", "21", "210", "343", "$^7C_3 = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$."],
  ["M", "If $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is acute, find $\\cos\\theta$.", "$\\frac{4}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{3}$", "$\\frac{2}{5}$", "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}$, so $\\cos\\theta = \\frac{4}{5}$."],
];

const jupebPhysics: Q[] = [
  ["E", "A car starts from rest and accelerates uniformly at $3\\ \\text{m s}^{-2}$ for 5 s. Its final velocity is", "$15\\ \\text{m s}^{-1}$", "$8\\ \\text{m s}^{-1}$", "$1.7\\ \\text{m s}^{-1}$", "$75\\ \\text{m s}^{-1}$", "$v = u + at = 0 + 3 \\times 5 = 15\\ \\text{m s}^{-1}$."],
  ["M", "A body starting from rest accelerates at $2\\ \\text{m s}^{-2}$. How far does it travel in 6 s?", "36 m", "12 m", "72 m", "24 m", "$s = ut + \\frac{1}{2}at^2 = 0 + \\frac{1}{2}(2)(36) = 36\\ \\text{m}$."],
  ["M", "A stone is thrown vertically upward at $30\\ \\text{m s}^{-1}$. Taking $g = 10\\ \\text{m s}^{-2}$, the greatest height reached is", "45 m", "90 m", "30 m", "15 m", "$v^2 = u^2 - 2gs$ with $v = 0$: $s = \\frac{900}{20} = 45\\ \\text{m}$."],
  ["E", "The area under a velocity–time graph represents", "displacement", "acceleration", "force", "momentum", "Velocity multiplied by time gives displacement."],
  ["M", "A resultant force of 20 N acts on a mass of 4 kg. The acceleration produced is", "$5\\ \\text{m s}^{-2}$", "$80\\ \\text{m s}^{-2}$", "$0.2\\ \\text{m s}^{-2}$", "$16\\ \\text{m s}^{-2}$", "$a = \\frac{F}{m} = \\frac{20}{4} = 5\\ \\text{m s}^{-2}$."],
  ["M", "The kinetic energy of a 2 kg body moving at $6\\ \\text{m s}^{-1}$ is", "36 J", "12 J", "72 J", "6 J", "$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(2)(36) = 36\\ \\text{J}$."],
  ["H", "A 3 kg trolley moving at $4\\ \\text{m s}^{-1}$ collides with and sticks to a stationary 1 kg trolley. Their common velocity is", "$3\\ \\text{m s}^{-1}$", "$4\\ \\text{m s}^{-1}$", "$1\\ \\text{m s}^{-1}$", "$12\\ \\text{m s}^{-1}$", "Momentum is conserved: $3 \\times 4 = (3 + 1)v$, so $v = 3\\ \\text{m s}^{-1}$."],
  ["E", "Which of these is a vector quantity?", "velocity", "speed", "mass", "energy", "Velocity has both size and direction."],
  ["M", "Two resistors of $6\\ \\Omega$ and $3\\ \\Omega$ are connected in parallel. Their combined resistance is", "$2\\ \\Omega$", "$9\\ \\Omega$", "$4.5\\ \\Omega$", "$18\\ \\Omega$", "$\\frac{1}{R} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$, so $R = 2\\ \\Omega$."],
  ["M", "A wave has a frequency of 50 Hz and a wavelength of 4 m. Its speed is", "$200\\ \\text{m s}^{-1}$", "$12.5\\ \\text{m s}^{-1}$", "$54\\ \\text{m s}^{-1}$", "$0.08\\ \\text{m s}^{-1}$", "$v = f\\lambda = 50 \\times 4 = 200\\ \\text{m s}^{-1}$."],
  ["H", "The work done in moving a charge of 3 C through a potential difference of 12 V is", "36 J", "4 J", "15 J", "0.25 J", "$W = QV = 3 \\times 12 = 36\\ \\text{J}$."],
  ["M", "A body of mass 5 kg is raised through 4 m. Taking $g = 10\\ \\text{m s}^{-2}$, the gain in potential energy is", "200 J", "20 J", "50 J", "125 J", "$PE = mgh = 5 \\times 10 \\times 4 = 200\\ \\text{J}$."],
];

const ijmbMaths: Q[] = [
  ["E", "Find the gradient of the curve $y = x^2 + 3x$ at the point where $x = 2$.", "7", "10", "4", "5", "$\\frac{dy}{dx} = 2x + 3$; at $x = 2$ this is 7."],
  ["M", "Differentiate $y = (2x + 1)^3$ with respect to $x$.", "$6(2x + 1)^2$", "$3(2x + 1)^2$", "$2(2x + 1)^3$", "$6(2x + 1)^3$", "Chain rule: $3(2x + 1)^2 \\times 2 = 6(2x + 1)^2$."],
  ["M", "Evaluate $\\int (4x + 3)\\,dx$.", "$2x^2 + 3x + C$", "$4x^2 + 3x + C$", "$2x^2 + 3 + C$", "$4 + C$", "Integrate term by term: $\\frac{4x^2}{2} + 3x + C$."],
  ["E", "The roots of $x^2 - 5x + 6 = 0$ are", "2 and 3", "−2 and −3", "1 and 6", "−1 and 6", "Factorise: $(x - 2)(x - 3) = 0$, so $x = 2$ or $x = 3$."],
  ["M", "For the equation $2x^2 - 8x + 3 = 0$, the sum of the roots is", "4", "−4", "$\\frac{3}{2}$", "8", "Sum of roots $= -\\frac{b}{a} = \\frac{8}{2} = 4$."],
  ["M", "Find the 10th term of the arithmetic progression 3, 7, 11, …", "39", "43", "40", "37", "$T_n = a + (n - 1)d = 3 + 9 \\times 4 = 39$."],
  ["H", "Find the coefficient of $x^2$ in the expansion of $(1 + 2x)^4$.", "24", "6", "12", "32", "$^4C_2 (2x)^2 = 6 \\times 4x^2 = 24x^2$."],
  ["M", "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, the determinant of $A$ is", "−2", "2", "10", "−10", "Use $ad - bc$: $1(4) - 2(3) = -2$."],
  ["E", "Express $\\frac{3\\pi}{4}$ radians in degrees.", "135°", "270°", "120°", "45°", "$\\frac{3}{4} \\times 180° = 135°$."],
  ["M", "The distance between the points $(1, 2)$ and $(4, 6)$ is", "5", "7", "25", "$\\sqrt{7}$", "$\\sqrt{3^2 + 4^2} = 5$."],
  ["H", "Solve $2^{x+1} = 32$.", "4", "5", "16", "3", "$32 = 2^5$, so $x + 1 = 5$ and $x = 4$."],
  ["M", "A fair die is thrown once. The probability of obtaining a number greater than 4 is", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{1}{6}$", "The favourable outcomes are 5 and 6: $\\frac{2}{6} = \\frac{1}{3}$."],
];

const ijmbChemistry: Q[] = [
  ["E", "How many moles are there in 36 g of water? (H = 1, O = 16)", "2", "18", "0.5", "36", "$n = \\frac{m}{M} = \\frac{36}{18} = 2$."],
  ["M", "What volume does 0.5 mole of a gas occupy at s.t.p.? (Molar volume = 22.4 dm³)", "11.2 dm³", "44.8 dm³", "22.4 dm³", "5.6 dm³", "$V = 0.5 \\times 22.4 = 11.2\\ \\text{dm}^3$."],
  ["M", "How many moles of solute are in 250 cm³ of a 0.2 mol dm⁻³ solution?", "0.05", "50", "0.8", "0.5", "$n = cV = 0.2 \\times 0.25 = 0.05$."],
  ["E", "The relative molecular mass of carbon(IV) oxide, CO₂, is (C = 12, O = 16)", "44", "28", "32", "40", "Add the atomic masses: $12 + 2(16) = 44$."],
  ["M", "In the reaction $N_2 + 3H_2 \\rightarrow 2NH_3$, how many moles of ammonia form from 6 moles of hydrogen with excess nitrogen?", "4", "2", "6", "9", "The ratio $H_2 : NH_3$ is 3 : 2, so 6 moles give 4 moles."],
  ["E", "An atom with 11 protons and 12 neutrons has a mass number of", "23", "11", "12", "1", "Mass number = protons + neutrons = 23."],
  ["M", "Which type of bond is formed by the transfer of electrons from a metal to a non-metal?", "ionic bond", "covalent bond", "metallic bond", "hydrogen bond", "Transfer of electrons produces oppositely charged ions held by electrostatic attraction."],
  ["M", "The pH of a solution with hydrogen ion concentration $1 \\times 10^{-3}\\ \\text{mol dm}^{-3}$ is", "3", "11", "−3", "0.001", "$pH = -\\log[H^+] = 3$."],
  ["H", "For an exothermic reaction at equilibrium, raising the temperature", "shifts the equilibrium towards the reactants", "shifts the equilibrium towards the products", "has no effect on the position of equilibrium", "stops the reaction", "By Le Chatelier's principle the system opposes the change by favouring the endothermic (reverse) direction."],
  ["M", "The oxidation number of sulphur in $H_2SO_4$ is", "+6", "+4", "−2", "+2", "$2(+1) + S + 4(-2) = 0$ gives $S = +6$."],
  ["E", "Which of these is an alkane?", "$C_3H_8$", "$C_2H_4$", "$C_2H_2$", "$C_6H_6$", "Alkanes have the general formula $C_nH_{2n+2}$; $C_3H_8$ fits."],
  ["H", "What mass of calcium oxide is obtained by completely decomposing 50 g of calcium trioxocarbonate(IV), CaCO₃? (Ca = 40, C = 12, O = 16)", "28 g", "56 g", "44 g", "22 g", "50 g is 0.5 mole of CaCO₃ (M = 100); it gives 0.5 mole of CaO (M = 56), which is 28 g."],
];

export const PREP_PROGRAMMES: PrepProgramme[] = [
  { key: "jupeb-maths", title: "JUPEB-style Mathematics Practice", examType: "JUPEB", subjectCode: "MTH", minutes: 25, description: "Original Advanced Level practice in the style of JUPEB: calculus, complex numbers, matrices, series and trigonometry.", questions: jupebMaths },
  { key: "jupeb-physics", title: "JUPEB-style Physics Practice", examType: "JUPEB", subjectCode: "PHY", minutes: 25, description: "Original Advanced Level practice in the style of JUPEB: motion, forces, energy, momentum, electricity and waves.", questions: jupebPhysics },
  { key: "ijmb-maths", title: "IJMB-style Mathematics Practice", examType: "IJMB", subjectCode: "MTH", minutes: 25, description: "Original Advanced Level practice in the style of IJMB: calculus, quadratics, sequences, binomial expansion and coordinate geometry.", questions: ijmbMaths },
  { key: "jupeb-chemistry", title: "JUPEB-style Chemistry Practice", examType: "JUPEB", subjectCode: "CHM", minutes: 25, description: "Original Advanced Level practice in the style of JUPEB: bonding and shapes, acids and pH, equilibrium, kinetics, redox and organic reactions.", questions: JUPEB_CHEMISTRY },
  { key: "jupeb-biology", title: "JUPEB-style Biology Practice", examType: "JUPEB", subjectCode: "BIO", minutes: 25, description: "Original Advanced Level practice in the style of JUPEB: cells, genetics, photosynthesis, enzymes, physiology and ecology.", questions: JUPEB_BIOLOGY },
  { key: "jupeb-economics", title: "JUPEB-style Economics Practice", examType: "JUPEB", subjectCode: "ECO", minutes: 25, description: "Original Advanced Level practice in the style of JUPEB: elasticity, market structures, national income, money and trade.", questions: JUPEB_ECONOMICS },
  { key: "jupeb-government", title: "JUPEB-style Government Practice", examType: "JUPEB", subjectCode: "GOV", minutes: 25, description: "Original Advanced Level practice in the style of JUPEB: constitutions, separation of powers, federalism, rule of law and international bodies.", questions: JUPEB_GOVERNMENT },
  { key: "ijmb-physics", title: "IJMB-style Physics Practice", examType: "IJMB", subjectCode: "PHY", minutes: 25, description: "Original Advanced Level practice in the style of IJMB: mechanics, energy, electricity, waves, heat and radioactivity.", questions: IJMB_PHYSICS },
  { key: "ijmb-biology", title: "IJMB-style Biology Practice", examType: "IJMB", subjectCode: "BIO", minutes: 25, description: "Original Advanced Level practice in the style of IJMB: cells, plants, human physiology, disease, nutrition and ecology.", questions: IJMB_BIOLOGY },
  { key: "ijmb-economics", title: "IJMB-style Economics Practice", examType: "IJMB", subjectCode: "ECO", minutes: 25, description: "Original Advanced Level practice in the style of IJMB: demand and supply, costs, money and banking, trade and inflation.", questions: IJMB_ECONOMICS },
  { key: "ijmb-government", title: "IJMB-style Government Practice", examType: "IJMB", subjectCode: "GOV", minutes: 25, description: "Original Advanced Level practice in the style of IJMB: Nigerian government, elections, rights, colonial administration and ECOWAS.", questions: IJMB_GOVERNMENT },
  { key: "ce-maths", title: "Common Entrance Mathematics Practice", examType: "COMMON_ENTRANCE", subjectCode: "MTH", level: "PRIMARY", minutes: 30, description: "Original timed practice for the Common Entrance examination into JSS 1: number, fractions, percentages, measurement, shapes and word problems.", questions: CE_MATHS },
  { key: "ce-english", title: "Common Entrance English Practice", examType: "COMMON_ENTRANCE", subjectCode: "ENG", level: "PRIMARY", minutes: 30, description: "Original timed practice for the Common Entrance examination: grammar, vocabulary, spelling, punctuation and usage.", questions: CE_ENGLISH },
  { key: "ce-quantitative", title: "Common Entrance Quantitative Reasoning Practice", examType: "COMMON_ENTRANCE", subjectCode: "QRE", level: "PRIMARY", minutes: 20, description: "Original timed practice in number patterns, rules and sequences, as in the Common Entrance quantitative reasoning paper.", questions: CE_QUANTITATIVE },
  { key: "ce-verbal", title: "Common Entrance Verbal Reasoning Practice", examType: "COMMON_ENTRANCE", subjectCode: "VRE", level: "PRIMARY", minutes: 20, description: "Original timed practice in analogies, odd-one-out, codes and word building, as in the Common Entrance verbal reasoning paper.", questions: CE_VERBAL },
  { key: "ijmb-chemistry", title: "IJMB-style Chemistry Practice", examType: "IJMB", subjectCode: "CHM", minutes: 25, description: "Original Advanced Level practice in the style of IJMB: the mole, stoichiometry, bonding, equilibrium and redox.", questions: ijmbChemistry },
];

/** [picture, word, part of speech, meaning, example] — further words for the Picture Dictionary. */
export const MORE_WORDS: [string, string, string, string, string][] = [
  ["🔬", "microscope", "noun", "An instrument that makes very small things look bigger.", "We saw the cells of an onion under the microscope."],
  ["🔭", "telescope", "noun", "An instrument for seeing things that are far away, such as stars.", "The astronomer looked at the moon through a telescope."],
  ["🧲", "magnet", "noun", "A piece of metal that pulls iron and steel towards itself.", "The magnet picked up all the pins."],
  ["🌡️", "thermometer", "noun", "An instrument that measures how hot or cold something is.", "The nurse used a thermometer to check his temperature."],
  ["⚗️", "experiment", "noun", "A test done to find out or prove something.", "Our science experiment showed that plants need light."],
  ["🧪", "chemical", "noun", "A substance used in or made by chemistry.", "Bleach is a strong chemical and must be handled with care."],
  ["🌍", "continent", "noun", "One of the seven great areas of land on the Earth.", "Africa is the second largest continent."],
  ["🗺️", "atlas", "noun", "A book of maps.", "She found Nigeria in the atlas."],
  ["🧭", "compass", "noun", "An instrument with a needle that always points north.", "The hikers used a compass to find their way."],
  ["🌋", "volcano", "noun", "A mountain with an opening through which hot melted rock can burst out.", "Smoke rose from the top of the volcano."],
  ["🏝️", "island", "noun", "A piece of land with water all round it.", "They travelled by boat to the island."],
  ["🏜️", "desert", "noun", "A very dry area of land with little rain and few plants.", "Camels can walk for days in the desert."],
  ["🌊", "ocean", "noun", "A very large sea.", "The Atlantic Ocean lies to the south of Nigeria."],
  ["⛈️", "thunderstorm", "noun", "A storm with thunder, lightning and heavy rain.", "The thunderstorm kept everyone indoors."],
  ["🌈", "rainbow", "noun", "A curve of colours seen in the sky when the sun shines through rain.", "A rainbow appeared after the shower."],
  ["🌱", "seedling", "noun", "A young plant that has just grown from a seed.", "The farmer watered the tomato seedlings."],
  ["🌾", "harvest", "noun", "The time when crops are gathered, or the crops gathered.", "The yam harvest was very good this year."],
  ["🐝", "bee", "noun", "A flying insect that makes honey.", "A bee carried pollen from flower to flower."],
  ["🦋", "butterfly", "noun", "An insect with large, often colourful wings.", "A butterfly landed on the hibiscus."],
  ["🐊", "crocodile", "noun", "A large reptile with a long body and strong jaws that lives in rivers.", "A crocodile lay still on the river bank."],
  ["🦅", "eagle", "noun", "A large bird with very good eyesight that hunts small animals.", "The eagle is on Nigeria's coat of arms."],
  ["🦒", "giraffe", "noun", "A very tall African animal with a long neck.", "The giraffe ate leaves from the top of the tree."],
  ["🫁", "lungs", "noun", "The two organs in the chest used for breathing.", "Running makes your lungs work harder."],
  ["🫀", "heart", "noun", "The organ that pumps blood round the body.", "Exercise keeps your heart strong."],
  ["🦴", "skeleton", "noun", "The frame of bones inside the body.", "The skeleton supports and protects the body."],
  ["🧠", "brain", "noun", "The organ inside the head that controls thought, memory and movement.", "Sleep helps the brain to remember."],
  ["💉", "vaccine", "noun", "A medicine that protects the body against a disease.", "Babies are given a vaccine against polio."],
  ["🩺", "stethoscope", "noun", "An instrument a doctor uses to listen to the heart and lungs.", "The doctor placed the stethoscope on her chest."],
  ["⚖️", "justice", "noun", "Fair treatment according to the law.", "The court exists to give justice to everyone."],
  ["🗳️", "election", "noun", "The choosing of leaders by voting.", "Adults vote in an election to choose the governor."],
  ["🏛️", "government", "noun", "The group of people who rule a country or state.", "The government builds roads and schools."],
  ["📜", "constitution", "noun", "The set of basic laws by which a country is governed.", "The constitution protects the rights of citizens."],
  ["🤝", "cooperation", "noun", "Working together for the same purpose.", "The clean-up succeeded through the cooperation of the whole street."],
  ["💰", "budget", "noun", "A plan for how money will be earned and spent.", "Mother made a budget before going to the market."],
  ["🏦", "bank", "noun", "A place where money is kept safely and can be borrowed.", "He saves part of his pocket money in the bank."],
  ["🧾", "receipt", "noun", "A paper that shows that something has been paid for.", "Keep the receipt in case you need to return the shoes."],
  ["📈", "profit", "noun", "The money gained when something is sold for more than it cost.", "The trader made a profit of two hundred naira."],
  ["🏭", "factory", "noun", "A building where goods are made in large numbers.", "The factory produces exercise books."],
  ["🚜", "tractor", "noun", "A strong vehicle used on farms for pulling machines.", "The tractor ploughed the field in one morning."],
  ["⚙️", "machine", "noun", "A piece of equipment with moving parts that does work.", "A sewing machine makes clothes faster."],
  ["🔋", "battery", "noun", "An object that stores electricity.", "The torch needs a new battery."],
  ["💡", "electricity", "noun", "A form of energy that gives light and makes machines work.", "The fan stopped when the electricity went off."],
  ["🛰️", "satellite", "noun", "An object sent into space to move round the Earth.", "Television signals are sent by satellite."],
  ["💻", "laptop", "noun", "A small computer that can be carried about.", "She typed her project on a laptop."],
  ["⌨️", "keyboard", "noun", "The set of keys used to type on a computer.", "He learnt to type without looking at the keyboard."],
  ["🖨️", "printer", "noun", "A machine that puts words and pictures from a computer onto paper.", "The printer produced ten copies of the notes."],
  ["🌐", "internet", "noun", "The system that connects computers all over the world.", "We searched the internet for information about volcanoes."],
  ["🔒", "password", "noun", "A secret word or set of characters used to open an account.", "Never tell anyone your password."],
  ["📐", "angle", "noun", "The space between two lines that meet, measured in degrees.", "A right angle measures ninety degrees."],
  ["📏", "measurement", "noun", "The size, length or amount of something found by measuring.", "Write the measurement in centimetres."],
  ["🔺", "triangle", "noun", "A flat shape with three straight sides.", "A triangle has three angles."],
  ["🧮", "fraction", "noun", "A part of a whole number, such as one half.", "One quarter is a fraction."],
  ["📊", "graph", "noun", "A drawing that shows how numbers or amounts compare.", "The graph shows the rainfall for each month."],
  ["📚", "library", "noun", "A place where books are kept for people to read or borrow.", "She reads in the library every Friday."],
  ["✍️", "essay", "noun", "A short piece of writing on one subject.", "He wrote an essay about his village."],
  ["🎭", "drama", "noun", "A play acted on a stage, on radio or on television.", "Our class acted a drama on Independence Day."],
  ["🎼", "melody", "noun", "A tune; a pleasing set of musical notes.", "She hummed the melody of the anthem."],
  ["🥁", "rhythm", "noun", "A regular pattern of beats or sounds.", "The drummers kept a steady rhythm."],
  ["🏅", "achievement", "noun", "Something good that has been done through effort.", "Winning the spelling competition was a great achievement."],
  ["🧗", "courage", "noun", "The ability to face danger or difficulty without giving up.", "It took courage to speak before the whole school."],
  ["🕊️", "peace", "noun", "A state of calm with no fighting or quarrelling.", "The two villages now live in peace."],
  ["🙏", "gratitude", "noun", "The feeling of being thankful.", "She showed her gratitude with a letter of thanks."],
  ["⏳", "patience", "noun", "The ability to wait calmly without becoming angry.", "Learning to read well takes patience."],
  ["🤔", "curiosity", "noun", "A strong wish to know or learn something.", "His curiosity led him to ask many questions."],
  ["🧹", "responsibility", "noun", "A duty to take care of something or someone.", "Feeding the chickens is his responsibility."],
];
