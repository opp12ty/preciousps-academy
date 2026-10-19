import type { StarterArticle } from "./hub";

/**
 * More reading for the Parent Learning Hub (parenting, money, the home, peace in the family and
 * digital skills) and for the student Knowledge Hub (study and life skills, digital skills).
 * Written for Precious PS Academy as general education. Each parent article ends by saying when a
 * qualified professional should be consulted. Staff can edit or replace all of it in the backend.
 */

type Part = [heading: string, text: string];

const body = (parts: Part[], refer?: string) => parts.map(([h, t]) => `## ${h}\n${t}`).join("\n\n") + (refer ? `\n\n## When to see a professional\n${refer} This article is general education and does not replace advice given to you personally by a qualified professional.` : "");

const parent = (category: string, title: string, summary: string, parts: Part[], keyPoints: string[], activity: string, refer: string): StarterArticle => ({ audience: "PARENT", section: "LEARNING", category, title, summary, body: body(parts, refer), keyPoints: keyPoints.join("\n"), activity });

const student = (category: string, title: string, summary: string, parts: Part[], keyPoints: string[], activity: string, level?: StarterArticle["level"]): StarterArticle => ({ audience: "STUDENT", section: "KNOWLEDGE", category, title, summary, body: body(parts), keyPoints: keyPoints.join("\n"), activity, level });

export const MORE_ARTICLES: StarterArticle[] = [
  /* ------------------------------------------------------------ parenting */
  parent("Parenting", "Discipline that teaches, not just punishes", "Children behave better when rules are clear, calm and the same every day.", [
    ["What discipline really means", "The word discipline comes from a word meaning **to teach**. The aim is not to make a child suffer for a mistake but to help the child choose better next time. A child who only fears punishment behaves well when watched; a child who understands the reason behaves well when alone."],
    ["Four habits that work", "- **Say the rule before the problem.** “Phones stay in the sitting room after 8 p.m.” is easier to keep than a rule invented in anger.\n- **Be consistent.** If a rule matters on Monday it matters on Friday. Both parents and other carers should give the same answer.\n- **Use consequences that fit.** A child who spills water cleans it up. A child who breaks screen-time rules loses screen time, not supper.\n- **Notice good behaviour.** Praise the effort you want to see again: “You started your homework without being told. Well done.”"],
    ["What to avoid", "Shouting, name-calling, comparing a child with a sibling and beating in anger may stop behaviour for a moment, but they teach fear and often damage trust. Correct the behaviour and protect the child's dignity: “What you did was wrong” is very different from “You are a bad child”."],
    ["When you lose your temper", "Every parent does. Step away for a few minutes, breathe, and return when calm. If you spoke harshly, say sorry. A parent who apologises teaches a child how to apologise."],
  ], ["Discipline means teaching", "Clear rules, said in advance", "Same rule every day, from every adult", "Consequences that fit the mistake", "Praise effort you want repeated"], "Agree on three house rules together this week. Write them down, let your child add one, and paste them where everyone can see.", "If your child's behaviour is violent, puts anyone in danger, or changes suddenly and stays changed for weeks, speak to the school and to a child psychologist, counsellor or doctor."),

  parent("Parenting", "Talking so that your child will talk to you", "Children open up to parents who listen first and advise second.", [
    ["Why children stop talking", "Many children stop sharing because the last time they did, they were interrupted, blamed or laughed at. A child who is afraid of your reaction will take problems to friends or to the internet instead."],
    ["Listening well", "- Put the phone down and look at the child.\n- Let them finish. Count to three before you answer.\n- Repeat what you heard: “So the teacher moved you and you felt embarrassed.”\n- Ask, “Do you want my advice, or do you just want me to listen?”"],
    ["Questions that open doors", "“How was school?” usually gets “Fine”. Try instead: “What made you laugh today?”, “What was the hardest thing today?”, “Who did you sit with at break?”. Ask during ordinary moments: in the car, while cooking, at bedtime."],
    ["Hard conversations", "Speak early and plainly about body safety, friendships, money, drugs and the internet, in words that suit the child's age. A child who has heard the truth from you first is harder to deceive."],
  ], ["Listen before advising", "Ask open questions", "Ordinary moments are the best moments", "Stay calm when you hear something difficult"], "Tonight, ask your child one of the open questions above and listen for five minutes without correcting anything.", "If your child tells you about abuse, bullying, self-harm or thoughts of not wanting to live, stay calm, believe them, keep them safe and contact the school and a doctor or qualified counsellor at once."),

  parent("Parenting", "Raising a reader at home", "Fifteen minutes of reading a day does more for school results than almost any other habit.", [
    ["Why reading matters", "Every subject is taught through words. A child who reads easily understands examination questions faster, writes better and learns new things without waiting to be told."],
    ["Simple ways to build the habit", "- **Read aloud** to young children every day, even for ten minutes.\n- **Let them see you read.** Children copy what adults do, not what adults say.\n- **Let them choose.** Story books, comics, football magazines and children's newspapers all count.\n- **Keep books within reach** and screens out of the bedroom at night.\n- **Talk about the story.** “What do you think will happen next?”"],
    ["When a child struggles", "Do not shame a slow reader. Read together, taking turns line by line. Choose easier books so that the child succeeds, then move up gradually."],
  ], ["Fifteen minutes daily", "Read aloud and be seen reading", "Let the child choose", "Praise progress, never shame"], "Start a family reading time: fifteen minutes after supper when everyone, including the adults, reads something.", "If a child of eight or older still cannot read simple words, mixes up letters constantly, or avoids reading with real distress, ask the school for an assessment and consider an eye test and an educational psychologist."),

  parent("Parenting", "Helping your teenager without a fight", "Teenagers need more freedom and more guidance at the same time.", [
    ["What is happening to them", "Between about 11 and 19 the body and brain change quickly. Teenagers feel emotions strongly, care deeply about friends and want to make their own decisions. This is normal growth, not rebellion."],
    ["What helps", "- **Give choices inside limits.** “You may go, and you must be home by six.”\n- **Explain your reasons.** Teenagers obey rules they understand.\n- **Respect privacy, keep safety.** Knock before entering, yet know their friends, where they are and what they do online.\n- **Pick your battles.** Hairstyle is not as important as honesty, school and safety.\n- **Stay close.** Eat together, attend their events and keep talking even when the answers are short."],
    ["Warning signs", "Watch for a sudden drop in results, new secretive friends, loss of interest in things once loved, sleeping far too much or too little, missing money, or signs of alcohol and drug use."],
  ], ["Change is normal", "Choices inside clear limits", "Know their friends and their online life", "Stay connected"], "Ask your teenager to teach you something they enjoy: a game, a song or an app. Let them be the expert for half an hour.", "If you see several warning signs together, or signs of depression, self-harm, drug use or an abusive relationship, speak to the school counsellor and a doctor or psychologist promptly."),

  /* ------------------------------------------------- financial stability */
  parent("Financial Stability", "A family budget that actually works", "A budget is simply a plan that tells your money where to go before it disappears.", [
    ["Start with the facts", "For one month, write down every naira that comes in and every naira that goes out, however small. Most families are surprised by where the money really goes."],
    ["A simple plan", "Divide income into four parts:\n\n| Part | What it covers | A guide |\n|---|---|---|\n| Needs | Food, rent, transport, school fees, light | about half |\n| Savings | Emergency fund and future goals | at least a tenth |\n| Giving | Family support, tithe or zakat, community | as you decide |\n| Wants | Outings, new clothes, data bundles | what is left |\n\nThe exact shares depend on your income. What matters is deciding **before** the money arrives."],
    ["Protect school fees", "School fees are known in advance. Divide the term's fees by the number of weeks before resumption and put that amount aside each week in a separate account or box."],
    ["Review every month", "Sit down once a month, compare the plan with what happened, and adjust. Husband and wife should do this together; hidden money causes quarrels."],
  ], ["Write down income and spending", "Decide before the money arrives", "Save something first, however small", "Set fees aside weekly", "Review together monthly"], "With your spouse or an older child, list last week's spending from memory, then check it against your phone alerts. How close were you?", "For debts you cannot repay, a business that is failing, or decisions about loans, insurance and investment, speak to your bank's customer adviser, a licensed financial adviser or a chartered accountant. Be careful of anyone promising quick profit."),

  parent("Financial Stability", "Building an emergency fund and avoiding debt traps", "Money put aside for a bad day keeps a small problem from becoming a crisis.", [
    ["What an emergency fund is", "It is money kept only for real emergencies: sickness, loss of a job, an urgent repair. It is not for parties or new phones. Aim first for one month of basic expenses, then build towards three."],
    ["How to build it on a small income", "- Save a fixed small amount the day income arrives.\n- Use a separate account that is not linked to your everyday card.\n- A trusted contribution group (ajo, esusu or adashe) can help, provided the organiser is known and records are kept.\n- Save unexpected money such as gifts and bonuses."],
    ["Borrowing wisely", "Borrow only for things that grow in value or earn money, and only what you can repay from known income. Read every condition. Loan apps that ask for your contact list and charge heavy daily interest have ruined many families; avoid them."],
    ["Spotting a scam", "Promises of doubling your money, pressure to act today, secrecy, and being asked to recruit others are the marks of fraud. If it sounds too good to be true, it is."],
  ], ["One month of expenses first", "Separate account", "Borrow only what known income can repay", "Avoid loan apps and get-rich-quick schemes"], "Open a separate savings account or box this week and put the first amount in it, however small.", "If you are already under pressure from lenders, or unsure whether an investment is genuine, speak to your bank, a licensed financial adviser or a lawyer before paying anything more."),

  parent("Financial Stability", "Teaching children about money", "Children who handle small money wisely grow into adults who handle big money wisely.", [
    ["Start early", "- **Ages 4 to 7:** money is exchanged for things; we cannot buy everything; saving in a box.\n- **Ages 8 to 12:** needs and wants; comparing prices; saving towards a goal; giving.\n- **Teenagers:** budgeting pocket money; a bank account; how interest and debt work; earning through small honest work."],
    ["Let them practise", "Give regular pocket money, small but dependable, and let the child decide how to use it. A child who wastes 200 naira today learns a lesson that costs far more at twenty-five."],
    ["Be honest about family money", "You need not share every figure, but children should know that money is earned through work, that it is limited, and that the family plans its spending."],
  ], ["Needs before wants", "Save towards a goal", "Regular small pocket money", "Let small mistakes teach"], "Take your child to the market with a short list and a fixed amount. Let them compare prices and bring back the change.", "For setting up a child's savings or education plan, ask your bank or a licensed financial adviser to explain the options and charges."),

  /* ------------------------------------------------------ home management */
  parent("Home Management", "Routines that make the home run smoothly", "A simple daily routine removes most of the shouting from mornings and evenings.", [
    ["Why routines help", "When the same things happen in the same order, children know what to expect and argue less. Routines also free the parent from repeating instructions."],
    ["A sample school-day routine", "| Time | Activity |\n|---|---|\n| Evening | Pack bag, lay out uniform, charge devices outside the bedroom |\n| Wake up | Bath, dress, breakfast, leave on time |\n| After school | Wash hands, eat, rest for thirty minutes |\n| Homework hour | Same place, same time, no television |\n| Evening | Chores, family time, reading |\n| Bedtime | Same time every school night |"],
    ["Sharing the work", "Every child should have chores that suit their age: a five-year-old can tidy toys, a ten-year-old can wash plates, a teenager can cook a simple meal. Boys and girls should do the same kinds of chores."],
    ["Sleep", "Primary pupils need about 9 to 11 hours of sleep and teenagers 8 to 10. A tired child cannot learn well."],
  ], ["Same order every day", "Prepare the night before", "Fixed homework place and time", "Chores for every child", "Enough sleep"], "Draw the family's school-day routine on paper with your children and paste it on the wall.", "If a child cannot sleep, wakes very tired every day, or snores heavily, speak to a doctor."),

  parent("Home Management", "Feeding the family well on a budget", "Healthy meals come from planning, not from spending more.", [
    ["A balanced plate", "Try to include each day: **energy foods** (rice, yam, garri, bread, maize), **body-building foods** (beans, eggs, fish, meat, groundnuts, milk), and **protective foods** (vegetables and fruit). Clean water is the best drink."],
    ["Stretching the budget", "- Plan the week's meals before going to the market.\n- Buy foods that are in season; they are cheaper and fresher.\n- Beans, eggs, crayfish, groundnuts and soya are low-cost body-building foods.\n- Cook in quantity and store safely.\n- Reduce sugary drinks and packaged snacks, which cost much and feed little."],
    ["Breakfast and school", "A child who goes to school hungry cannot concentrate. Even pap with milk and an egg, or bread with beans, makes a real difference."],
    ["Food safety", "Wash hands before cooking and eating, cover food, cook meat and fish thoroughly, and keep cooked food away from raw food."],
  ], ["Three kinds of food daily", "Plan before the market", "Buy in season", "Never skip breakfast", "Clean hands, covered food"], "Plan next week's meals with your children and let each child choose one meal.", "If a child is losing weight, always tired, or has a condition such as diabetes, sickle cell disease or a food allergy, ask a doctor or a registered dietitian for a plan."),

  parent("Home Management", "Keeping the home safe for children", "Most home accidents can be prevented with a few simple habits.", [
    ["Common dangers", "- **Burns:** hot water, stoves, irons and generators. Keep children away from cooking areas and turn pot handles inward.\n- **Poisoning:** kerosene, bleach, insecticide and medicines. Store high up, in their own containers, never in drink bottles.\n- **Electric shock:** cover sockets, repair bare wires, never touch switches with wet hands.\n- **Falls:** guard stairs and balconies; do not leave babies alone on beds.\n- **Drowning:** cover wells, buckets and tanks."],
    ["Generator safety", "Never run a generator indoors or near a window. The fumes contain carbon monoxide, which cannot be seen or smelt and kills in sleep."],
    ["Be prepared", "Keep a simple first-aid box, teach children their full name, your phone number and their address, and agree on what to do in a fire."],
  ], ["Lock away chemicals and medicines", "Generator outside, far from windows", "Cover water containers", "Teach children your phone number"], "Walk round your home with your children and find five things that could cause an accident. Fix them together.", "For burns larger than the child's palm, swallowed chemicals, a fall with loss of consciousness, or breathing difficulty, go to a hospital immediately. Do not wait."),

  /* --------------------------------------------------------- peaceful home */
  parent("Peaceful Home", "Handling disagreement without damaging the family", "Every couple disagrees. What matters is how.", [
    ["Children are watching", "Children learn how to treat other people by watching how their parents treat each other. Frequent shouting or silence at home affects their sleep, their schoolwork and their own future relationships."],
    ["Rules for a fair disagreement", "- Discuss one issue at a time, and not when either of you is hungry, tired or angry.\n- Attack the problem, not the person. Say “I feel worried when the fees are late” and not “You are irresponsible”.\n- Do not insult, threaten or bring up old matters.\n- Never use the children as messengers or take sides in front of them.\n- If voices rise, pause and agree a time to continue."],
    ["Repair", "After a quarrel, make peace where the children can see it. They need to know that people who disagree can still love each other."],
    ["Daily habits that prevent quarrels", "Greet warmly, say thank you, share plans about money and time, and spend a little time alone together each week."],
  ], ["One issue at a time", "Attack the problem, not the person", "Never in front of the children", "Make peace visibly"], "This week, thank your spouse or co-parent in front of the children for one specific thing they did.", "If there is violence, threats, or fear in the home, or quarrels that never end, speak to a marriage counsellor, a trusted religious leader trained in counselling, a doctor, or a lawyer. Your safety and your children's safety come first."),

  parent("Peaceful Home", "Managing stress as a parent", "You cannot pour from an empty cup. Looking after yourself is part of looking after your children.", [
    ["Signs you are overloaded", "Constant tiredness, snapping at the children, headaches, poor sleep, forgetting things and losing interest in what you once enjoyed."],
    ["Small things that help", "- Sleep enough; it is not laziness.\n- Move your body for twenty minutes most days. A brisk walk is enough.\n- Eat regularly and drink water.\n- Share the load; ask for help with chores and childcare.\n- Keep one friend you can speak to honestly.\n- Pray, meditate or sit quietly, according to your belief.\n- Reduce time on news and social media when they make you anxious."],
    ["Be kind to yourself", "No parent is perfect. Children need a parent who is present and loving most of the time, not one who never makes a mistake."],
  ], ["Rest is not laziness", "Move, eat, sleep", "Ask for help", "One honest friend"], "Choose one of the small things above and do it every day for a week.", "If sadness, worry or anger lasts more than two weeks, stops you working, or you think of harming yourself or anyone else, see a doctor or a mental-health professional without delay. Asking for help is a sign of strength."),

  parent("Peaceful Home", "Family time that builds a bond", "Children spell love T-I-M-E. It does not have to cost money.", [
    ["Why it matters", "Children who spend regular, happy time with their family are more confident, do better at school and are less likely to be led astray."],
    ["Ideas that cost little", "- One meal a day together, with phones away.\n- A weekly games night: ludo, ayo, draughts, Scrabble, charades.\n- Cooking together and letting the children choose the menu.\n- A walk, a visit to a park, the beach, a museum or grandparents.\n- Story night: parents tell stories of their own childhood.\n- A family project such as a small garden."],
    ["One-to-one time", "Give each child a little time alone with each parent. Ten minutes of full attention is worth more than a whole day in the same room on separate phones."],
    ["Join in", "The school arranges family activities from time to time: picnics, cinema days, games and holiday outings. See **Family Activities** in the menu."],
  ], ["One shared meal daily", "A weekly family activity", "One-to-one time with each child", "Phones away"], "Choose one idea from the list and put a day and time for it on the calendar this week.", "If a child keeps withdrawing from the family, refuses all activities or seems persistently unhappy, speak to the school counsellor or a child psychologist."),

  /* --------------------------------------------------------- digital skills */
  parent("Digital Skills", "Smartphone basics every parent should know", "A few settings on your phone protect your money, your privacy and your children.", [
    ["Lock and protect", "- Use a screen lock (PIN, pattern or fingerprint).\n- Lock your SIM with a PIN so that it cannot be used in another phone.\n- Keep your bank PIN, passwords and one-time codes to yourself. No bank will ever ask for them by phone, text or WhatsApp."],
    ["Useful everyday skills", "- **Updates:** install system and app updates; they close security gaps.\n- **Storage:** delete old videos and clear app cache when the phone becomes slow.\n- **Data saving:** switch on Data Saver, and set apps to update on Wi-Fi only.\n- **Backup:** save contacts and photos to your Google or Apple account so that a lost phone does not mean lost memories."],
    ["Strong passwords", "Use a different password for your e-mail and bank than for other sites. A sentence is easier to remember and harder to guess than a single word. Switch on two-step verification for WhatsApp and e-mail."],
    ["Choosing a device", "For school work a child needs a dependable device more than an expensive one: a good battery, enough storage and a screen large enough to read comfortably. Buy from a dealer who gives a warranty."],
  ], ["Lock screen and SIM", "Never share PINs or one-time codes", "Update and back up", "Two-step verification on WhatsApp and e-mail"], "Open WhatsApp → Settings → Account → Two-step verification, and switch it on now.", "If your account has been taken over or money has left your bank account, call your bank on the number printed on your card immediately and report at the nearest branch. For a damaged or faulty device, use a trained technician rather than a roadside repairer."),

  parent("Digital Skills", "Keeping children safe online", "The internet is where your child learns, plays and meets people. Guide them there as you would in the street.", [
    ["Know the risks", "Unsuitable content, strangers pretending to be friends, bullying, scams, and simply spending too many hours on a screen."],
    ["Practical steps", "- Keep devices in shared rooms, not locked bedrooms, especially at night.\n- Agree screen-time rules and keep them yourself.\n- Use the free parental controls: **Google Family Link** on Android, **Screen Time** on iPhone, and restricted mode on YouTube.\n- Know which apps your child uses and who they talk to.\n- Teach the three rules: never share your address, school or photographs with strangers; never meet an online friend alone; tell a parent at once if anything makes you uncomfortable."],
    ["Stay approachable", "A child who fears losing the phone will hide problems. Promise that telling you the truth will never be punished, and keep the promise."],
  ], ["Devices in shared spaces", "Use parental controls", "Know the apps and the friends", "Telling the truth is never punished"], "Sit with your child and ask them to show you their three favourite apps and how they work.", "If your child has been threatened, blackmailed or sent sexual messages online, do not delete the evidence. Reassure the child, block the sender, and report to the school and the police. A counsellor can help the child recover."),

  parent("Digital Skills", "Using a computer for everyday tasks", "Typing a letter, keeping a simple record and sending an e-mail are skills any adult can learn.", [
    ["The three tools", "- **Word processor** (Microsoft Word, Google Docs): letters, CVs, notices.\n- **Spreadsheet** (Excel, Google Sheets): a family budget, a shop's stock, a contribution record. It adds up for you.\n- **E-mail:** sending documents, applying for jobs, receiving school notices."],
    ["Getting started", "Open a free Google account. It gives you e-mail, Docs, Sheets and storage that work on a phone or a computer. Practise by typing your family budget into a sheet and letting it add the totals."],
    ["Good habits", "Save your work often, give files clear names, and keep copies of important documents such as birth certificates and receipts as scanned files."],
    ["Equipment", "A dependable laptop or tablet, a printer for school work, a power bank for outages and earphones for lessons make home learning much easier. Choose reliable products with a warranty."],
  ], ["Documents, spreadsheets, e-mail", "A free Google account is enough to start", "Save often, name files clearly", "Scan important documents"], "Create a simple spreadsheet with your child listing this month's household expenses, and use the SUM function to total them.", "For formal training, look for a computer school or centre that issues a recognised certificate. For buying or repairing equipment, deal with an established dealer or technician."),

  /* ------------------------------------------------------------- students */
  student("Study Skills", "How to plan your study time", "A timetable you actually follow beats long hours of unplanned reading.", [
    ["Why plan", "Without a plan you read what you like and ignore what you fear. A plan shares your time fairly among all subjects and removes the daily question, “What should I read?”"],
    ["Making a timetable", "- List all your subjects.\n- Give more sessions to the subjects you find hard.\n- Study in blocks of 30 to 45 minutes with a 5 to 10 minute break.\n- Put your hardest subject at the time of day you are most alert.\n- Leave one free slot each day for catching up."],
    ["Study actively", "Do not just read. Close the book and say or write what you remember, answer practice questions, and teach a friend. What you can explain, you know."],
    ["Review", "Look again at a topic after one day, one week and one month. Short reviews keep knowledge from fading."],
  ], ["Hard subjects get more time", "30 to 45 minute blocks with breaks", "Test yourself, do not just read", "Review after a day, a week, a month"], "Draw your own weekly timetable tonight and follow it for seven days.", undefined),

  student("Study Skills", "Remembering what you read", "Memory is a skill. These methods make it stronger.", [
    ["Understand first", "It is very hard to remember what you do not understand. Ask why and how until the idea makes sense."],
    ["Methods that work", "- **Mnemonics:** a phrase whose first letters stand for a list, like BODMAS.\n- **Mind maps:** draw the topic in the middle of a page and branch out.\n- **Flash cards:** a question on one side, the answer on the other.\n- **Teach it:** explain the topic to a classmate or even to an empty chair.\n- **Past questions:** practise the way you will be examined."],
    ["Look after your brain", "Sleep at least eight hours, drink water, eat well and exercise. Reading all night before an examination usually lowers your score."],
  ], ["Understand before memorising", "Mnemonics, mind maps, flash cards", "Teach someone", "Sleep is part of studying"], "Make five flash cards from the last topic you were taught and test yourself tomorrow morning.", undefined),

  student("Life Skills", "Managing your pocket money", "Learning to plan small money now prepares you to manage big money later.", [
    ["Needs and wants", "A **need** is something you must have, like food and transport. A **want** is something nice to have, like sweets or a new game. Pay for needs first."],
    ["A simple plan", "Each time you receive money, divide it: some to **spend**, some to **save** towards a goal, and a little to **give**. Even saving one coin in ten builds the habit."],
    ["Set a goal", "Decide what you are saving for and how much it costs. Work out how many weeks it will take. A clear goal makes saving easier than vague good intentions."],
    ["Be wise", "Do not lend what you cannot afford to lose, do not borrow to impress friends, and never join anything that promises to double your money."],
  ], ["Needs before wants", "Spend, save, give", "Save towards a clear goal", "Nothing honest doubles your money overnight"], "Choose something you want that costs more than one week's pocket money and plan how many weeks you need to save for it.", undefined),

  student("Life Skills", "Speaking with confidence", "Good speakers are not born. They prepare and practise.", [
    ["Before you speak", "Know your subject, write three main points and practise aloud at least twice, once in front of a mirror or a friend."],
    ["While you speak", "- Stand straight and look at people in different parts of the room.\n- Speak a little more slowly than feels natural.\n- Pause instead of saying “um”.\n- Use your hands naturally and smile."],
    ["Handling nerves", "Feeling nervous is normal and even helpful. Take three slow breaths before you start. Remember that listeners want you to do well."],
  ], ["Three main points", "Practise aloud", "Slow down and pause", "Breathe"], "Prepare a one-minute talk about your favourite subject and give it to your family this weekend.", undefined),

  student("Digital Skills", "Parts of a computer and what they do", "Every computer, from a phone to a laptop, takes in data, works on it, stores it and shows a result.", [
    ["Hardware and software", "**Hardware** is what you can touch: the screen, keyboard, mouse and the parts inside. **Software** is the set of instructions that tells the hardware what to do: the operating system and the apps."],
    ["The four jobs", "| Job | Examples |\n|---|---|\n| Input | Keyboard, mouse, touch screen, microphone, camera |\n| Processing | The processor (CPU), the brain of the computer |\n| Storage | Memory (RAM) for work in progress; hard disk or flash storage for keeping files |\n| Output | Screen, printer, speakers |\n\n[[diagram: flow Input -> Processing -> Output]]"],
    ["Looking after a computer", "Keep it away from dust, heat and liquids, shut it down properly, and do not install programs from sources you do not trust."],
  ], ["Hardware you touch, software you run", "Input, processing, storage, output", "RAM is temporary, storage is permanent"], "Look at any computer or phone and name two input devices and two output devices on it.", undefined),

  student("Digital Skills", "Typing, documents and saving your work", "Typing well and organising files are skills you will use in every job.", [
    ["Touch typing", "Rest your fingers on the home row: **A S D F** for the left hand and **J K L ;** for the right. Each finger has its own keys. Look at the screen, not your hands. Ten minutes of practice a day is enough to improve quickly."],
    ["Making a document", "In a word processor you can type, correct, make headings bold, add bullet lists and check spelling. Useful shortcuts: **Ctrl + C** copy, **Ctrl + V** paste, **Ctrl + Z** undo, **Ctrl + S** save."],
    ["Files and folders", "Give files clear names, such as “Basic Science project term 1”, and keep them in folders by subject. Save often, and keep a second copy of important work."],
  ], ["Home row: ASDF and JKL;", "Ctrl + S saves your work", "Clear file names and folders", "Keep a second copy"], "Type a half-page story about your school day and save it with a clear name.", undefined),

  student("Digital Skills", "Staying safe and smart online", "The internet is a wonderful library and a busy street. Use it wisely.", [
    ["Protect yourself", "- Keep your full name, address, school and phone number private.\n- Use strong passwords and never share them, even with friends.\n- Do not open links or files from people you do not know.\n- Never agree to meet someone you only know online."],
    ["Think before you post", "Whatever you post can be copied and may stay online for ever. Ask yourself: would I be happy for my parents, my teacher and a future employer to see this?"],
    ["Check what you read", "Not everything online is true. Check who wrote it, whether other trusted sources say the same, and when it was written."],
    ["If something goes wrong", "If anyone threatens, bullies or frightens you online, do not reply and do not delete the messages. Tell a parent or teacher immediately. It is not your fault."],
  ], ["Private details stay private", "Think before you post", "Check before you believe", "Tell an adult at once"], "Check the privacy settings of one app you use and make sure only people you know can see your posts.", undefined),

  student("Digital Skills", "Using the internet to learn", "Used well, the internet can be the best teacher's assistant you will ever have.", [
    ["Searching well", "Use a few clear key words instead of a whole sentence. Put exact phrases in quotation marks. Add the word “explained” or “for students” to get simpler results."],
    ["Good places to learn", "School learning platforms, encyclopaedias, educational videos and the websites of examination bodies are more dependable than random social-media posts."],
    ["Do your own work", "Reading to understand is learning. Copying someone else's work and presenting it as yours is **plagiarism**, and it teaches you nothing. Write in your own words and say where you found your facts."],
    ["Mind your time and data", "Decide what you want to learn before you go online, and close everything else. Download lessons on Wi-Fi where you can."],
  ], ["Key words, not sentences", "Use dependable sites", "Write in your own words", "Plan before you go online"], "Search for a topic from this week's lessons and write three new facts in your own words, with where you found them.", undefined),
];

/** Rooms added to the parent community: learning rooms and lighter rooms for relaxation. */
export const MORE_PARENT_ROOMS = [
  { name: "Money and family finances", description: "Budgeting, saving, school fees planning and small business ideas. No adverts or investment offers." },
  { name: "Home management and healthy meals", description: "Routines, chores, affordable healthy cooking and keeping the home safe." },
  { name: "Digital skills for parents", description: "Phones, computers, online safety and helping children learn with technology." },
  { name: "Peaceful home", description: "Encouragement and practical ideas for a calm, loving home." },
  { name: "Family fun and outings", description: "Ideas for picnics, games, cinema, holidays and weekend activities with children." },
  { name: "Recipes and kitchen corner", description: "Share family recipes and cooking tips." },
  { name: "Music, films and books", description: "What the family is enjoying: wholesome films, music and good books." },
  { name: "Sports and fitness", description: "Football talk, exercise and keeping the family active." },
  { name: "Jokes and riddles", description: "Clean humour to brighten the day." },
];
