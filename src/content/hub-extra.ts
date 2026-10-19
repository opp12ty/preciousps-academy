import type { StarterArticle } from "./hub";

/**
 * Further Knowledge Hub reading for students and further Parent Learning Hub articles, written for
 * Precious PS Academy as general education. Parent articles end by saying when to see a qualified
 * professional. Staff can edit, archive or replace every article in the backend.
 */

type Part = [heading: string, text: string];
const body = (parts: Part[], refer?: string) => parts.map(([h, t]) => `## ${h}\n${t}`).join("\n\n") + (refer ? `\n\n## When to see a professional\n${refer} This article is general education and does not replace advice given to you personally by a qualified professional.` : "");
const student = (category: string, title: string, summary: string, parts: Part[], keyPoints: string[], activity: string, level?: StarterArticle["level"]): StarterArticle => ({ audience: "STUDENT", section: "KNOWLEDGE", category, title, summary, body: body(parts), keyPoints: keyPoints.join("\n"), activity, level });
const parent = (category: string, title: string, summary: string, parts: Part[], keyPoints: string[], activity: string, refer: string): StarterArticle => ({ audience: "PARENT", section: "LEARNING", category, title, summary, body: body(parts, refer), keyPoints: keyPoints.join("\n"), activity });

export const EXTRA_ARTICLES: StarterArticle[] = [
  /* =========================================================== students */
  student("Study Skills", "Active recall and spaced practice: the two habits of top students", "Testing yourself and spreading your revision over days beats rereading notes for hours.", [
    ["Why rereading fails", "Reading the same page again feels comfortable, but your brain is only recognising the words, not recalling them. In the exam you must **recall** without the page in front of you."],
    ["Active recall", "Close the book and try to bring the facts back from memory:\n- Answer past questions before looking at the answers.\n- Cover your notes and write everything you remember, then check.\n- Make flashcards: question on one side, answer on the other.\n- Explain the topic aloud to a sibling as if you were the teacher."],
    ["Spaced practice", "Revisit a topic after **1 day, 3 days, 1 week and 2 weeks**. Each time you nearly forget and then remember, the memory grows stronger.\n\n[[diagram: flow Learn -> Recall after 1 day -> 3 days -> 1 week -> 2 weeks || A spaced revision plan]]"],
    ["Mix it up", "Alternate subjects and question types (interleaving) instead of doing 50 of the same kind in a row. It trains you to choose the right method, as in a real exam."],
  ], ["Test yourself instead of rereading", "Space revision over days", "Mix topics and question types", "Teach someone else"], "Pick one topic you studied this week. Without your notes, write down everything you remember, then check what you missed."),

  student("Study Skills", "Making the most of every lesson", "Simple habits before, during and after class that double what you learn.", [
    ["Before the lesson", "Glance at the topic in your textbook or on Precious PS for five minutes. Even a quick preview helps your brain recognise new ideas."],
    ["During the lesson", "- Sit where you can see and hear well.\n- Write short notes in your own words, not every word the teacher says.\n- Ask a question when you are confused; others probably are too.\n- Mark anything you don't understand with a question mark."],
    ["After the lesson", "On the same day, spend 10 minutes reviewing your notes and answering two or three questions. Then fix every question mark by asking the teacher, a friend or checking the lesson on Precious PS."],
  ], ["Preview, participate, review", "Notes in your own words", "Clear doubts the same day"], "For one week, review each day's notes for 10 minutes before bed. Notice the difference in class tests."),

  student("Writing", "How to write a good essay", "Plan, structure and polish: a simple method for compositions and essays.", [
    ["Understand the question", "Underline the key words. Is it **narrative** (tell a story), **descriptive** (paint a picture), **argumentative** (take a side), **expository** (explain) or a **letter**?"],
    ["Plan for five minutes", "Jot down your main points and arrange them in order. A plan saves time and keeps you on track.\n\n[[diagram: flow Introduction -> Point 1 -> Point 2 -> Point 3 -> Conclusion || The shape of a good essay]]"],
    ["Write with paragraphs", "- **Introduction**: catch attention and state what the essay is about.\n- **Body**: one main idea per paragraph, with examples.\n- **Conclusion**: sum up; don't add new points."],
    ["Polish", "Use varied sentence lengths, good vocabulary (but only words you understand), and check spelling, punctuation and tense. Keep to the word limit."],
  ], ["Read the question carefully", "Plan before writing", "One idea per paragraph", "Proofread at the end"], "Write a 250-word argumentative essay on 'Should students use phones in school?' using the plan above."),

  student("Life Skills", "Time management for busy students", "How to balance school, chores, rest and fun without stress.", [
    ["Know where your time goes", "For one day, write down what you do every hour. Many students are surprised by how much time disappears on phones and TV."],
    ["Plan your week", "Make a simple timetable with school, homework, revision, chores, prayer, play and sleep. Put the hardest subject when you are freshest."],
    ["Use the 25-5 method", "Study for 25 minutes with the phone away, then rest for 5. After four rounds, take a longer break."],
    ["Say no to time wasters", "Turn off notifications while studying. Agree with friends on a time to chat."],
  ], ["Track your time", "Plan the week", "Work in focused blocks", "Protect sleep"], "Make a one-week timetable and stick it on your wall. Tick each block you complete."),

  student("Health", "Healthy eating for students", "What to eat to stay strong, focused and well.", [
    ["The food groups", "| Group | Examples | What it does |\n|---|---|---|\n| carbohydrates | rice, yam, garri, bread | energy |\n| proteins | beans, fish, eggs, meat, milk | growth and repair |\n| fats and oils | palm oil, groundnut oil (a little) | energy, vitamins |\n| vitamins and minerals | fruits, vegetables | protection from illness |\n| water | clean water | keeps every part of the body working |"],
    ["Breakfast matters", "Students who eat breakfast concentrate better. Pap with akara, bread and eggs, or beans and plantain are good choices."],
    ["Snack smart", "Swap sweets and fizzy drinks for groundnuts, fruit, boiled corn or coconut. Too much sugar causes tooth decay and tiredness."],
    ["Drink water", "Carry a clean water bottle. Thirst reduces concentration."],
  ], ["Eat from every food group", "Never skip breakfast", "Choose fruit over sweets", "Drink enough water"], "Write down everything you eat for three days. Which food group are you eating too little of?"),

  student("Health", "Looking after your mind", "Stress, worry and sadness are normal feelings; here is how to cope and when to ask for help.", [
    ["Feelings are normal", "Everyone feels worried, sad or angry sometimes, especially around exams, friendships and family changes."],
    ["Healthy ways to cope", "- Talk to someone you trust: a parent, teacher, counsellor or religious leader.\n- Move your body: walk, dance, play football.\n- Sleep 8 to 10 hours.\n- Write your feelings in a journal.\n- Breathe slowly: in for 4 counts, hold for 4, out for 6."],
    ["When to get help quickly", "If you feel hopeless for many days, cannot sleep or eat, or have thoughts of hurting yourself, tell a trusted adult **immediately**. Asking for help is a sign of strength."],
  ], ["Feelings are normal", "Talk to a trusted adult", "Exercise, sleep and breathe", "Ask for help early"], "List three trusted adults you could talk to if you were worried."),

  student("Health", "First aid every student should know", "Simple actions that can help someone until an adult or health worker arrives.", [
    ["Stay safe and call for help", "Check the area is safe, shout for an adult, and in Nigeria call **112** for emergencies."],
    ["Cuts and bleeding", "Press firmly on the wound with a clean cloth. Raise the injured part."],
    ["Burns", "Cool the burn under clean running water for about 20 minutes. Never put oil, toothpaste or raw egg on it."],
    ["Nosebleeds", "Sit up, lean forward, pinch the soft part of the nose for 10 minutes."],
    ["Fainting", "Lay the person down and raise their legs a little. Loosen tight clothing. If they don't wake quickly, get help."],
  ], ["Make sure it is safe", "Call 112 or an adult", "Press on bleeding", "Cool burns with water"], "With your family, put together a small first-aid box: plasters, gauze, a bandage, gloves and antiseptic."),

  student("Environment", "Climate change explained simply", "Why the Earth is warming, how it affects Nigeria, and what young people can do.", [
    ["What is happening?", "Burning fuel (petrol, diesel, coal, gas) and cutting down forests adds **greenhouse gases** such as carbon dioxide to the air. They trap heat, so the Earth slowly warms.\n\n[[diagram: flow Burning fuel and cutting trees -> More greenhouse gases -> More heat trapped -> Warmer Earth -> Floods, droughts, heat || The chain of climate change]]"],
    ["Effects in Nigeria", "Heavier floods in some places, longer droughts and **desertification** in the north, rising sea levels along the coast, and stress on farming."],
    ["What you can do", "- Plant and care for trees.\n- Switch off lights and appliances you are not using.\n- Walk or cycle for short trips.\n- Reduce, reuse and recycle; never burn plastic.\n- Learn and teach others."],
  ], ["Greenhouse gases trap heat", "Nigeria faces floods and desertification", "Small actions add up"], "Plant a tree or flower at home or school and care for it for a month."),

  student("Careers", "Careers in technology", "Software, data, design, cybersecurity and more: what the jobs are and how to start.", [
    ["Popular tech careers", "| Career | What they do |\n|---|---|\n| software developer | build apps and websites |\n| data analyst | find patterns in data to help decisions |\n| UI/UX designer | design how apps look and feel |\n| cybersecurity analyst | protect systems from attacks |\n| network engineer | build and maintain networks |\n| AI/ML engineer | build systems that learn from data |"],
    ["Subjects that help", "Mathematics, English, Computer Studies/Digital Technologies, Physics, and Further Mathematics."],
    ["How to start now", "Learn typing, try free coding sites (Scratch, then Python or JavaScript), build a small project, and join a coding club or online community. Many tech hubs in Nigeria run training for young people."],
  ], ["Many kinds of tech jobs", "Maths and English matter", "Start small and build projects"], "Try a free beginner coding lesson online and write down what you made."),

  student("Careers", "Careers in health and medicine", "Doctors are only one part of a big team that keeps people healthy.", [
    ["The health team", "Doctors, nurses, midwives, pharmacists, medical laboratory scientists, radiographers, physiotherapists, dentists, optometrists, nutritionists and community health workers all play vital roles."],
    ["Subjects you need", "Biology, Chemistry, Physics, Mathematics and English are usually required for health courses in Nigerian universities."],
    ["What makes a good health worker", "Care for people, patience, honesty, good communication, and the ability to stay calm under pressure."],
  ], ["Health is a team effort", "Sciences and English are key", "Care and honesty matter most"], "Interview a nurse, pharmacist or doctor in your community about their job."),

  student("Life Skills", "Spotting fake news and thinking critically", "How to check information before you believe or share it.", [
    ["Why fake news spreads", "False stories are often shocking or emotional, so people share them quickly without checking."],
    ["Check before you share", "- **Who** wrote it? Is it a known, reliable source?\n- **When** was it published? Old stories are often reshared as new.\n- **Is it on other trusted sites?**\n- **Does the picture match?** Search the image online.\n- **Is it trying to make you angry or scared?** Pause."],
    ["Think critically", "Ask: What is the evidence? Could there be another explanation? Who benefits if I believe this?"],
  ], ["Check the source and date", "Look for confirmation", "Pause before sharing"], "Find a forwarded message at home and check whether it is true using two reliable websites."),

  student("Civic Education", "How laws are made in Nigeria", "From a bill to an Act of the National Assembly.", [
    ["The steps", "[[diagram: flow Bill introduced -> First reading -> Second reading and debate -> Committee stage -> Third reading -> Passed by both houses -> President's assent -> Law (Act) || How a bill becomes law]]"],
    ["Who does what", "The **Senate** and **House of Representatives** debate and pass bills. The **President** signs (assents to) them. If the President refuses, the National Assembly can override with a two-thirds majority in each house."],
    ["State laws", "State Houses of Assembly make laws for their states, signed by the Governor."],
  ], ["Bills pass through readings", "Both houses must agree", "The President assents"], "Find out the name of the senator and the House of Representatives member for your area."),

  student("Science", "The systems of the human body", "How the body's systems work together to keep you alive.", [
    ["The main systems", "| System | Main organs | Job |\n|---|---|---|\n| digestive | mouth, stomach, intestines | break down food |\n| respiratory | lungs, windpipe | take in oxygen |\n| circulatory | heart, blood vessels | carry blood |\n| nervous | brain, spinal cord, nerves | control and messages |\n| skeletal | bones | support and protection |\n| muscular | muscles | movement |\n| excretory | kidneys, skin | remove waste |"],
    ["Working together", "When you run, your nervous system sends signals, muscles move bones, the lungs breathe faster and the heart pumps more blood to carry oxygen.\n\n[[diagram: flow Lungs take in oxygen -> Heart pumps blood -> Muscles get oxygen -> You can move || Systems working together]]"],
  ], ["Each system has a job", "Systems work together", "Exercise strengthens them"], "Count your pulse for one minute at rest and after one minute of skipping. What changed and why?"),

  student("History", "Nigerian heroes and heroines", "Men and women whose courage and service shaped Nigeria.", [
    ["Leaders of independence", "**Herbert Macaulay**, **Nnamdi Azikiwe**, **Obafemi Awolowo**, **Ahmadu Bello** and **Abubakar Tafawa Balewa** led the struggle for self-rule."],
    ["Women who led", "**Queen Amina** of Zazzau, **Moremi** of Ile-Ife (from legend), **Funmilayo Ransome-Kuti** (women's rights), **Margaret Ekpo** (politics) and **Gambo Sawaba** (rights of northern women)."],
    ["Heroes of service", "**Dora Akunyili** fought fake drugs at NAFDAC. **Dr Ameyo Adadevoh** helped stop the spread of Ebola in Lagos in 2014 at the cost of her own life."],
    ["Heroes of the mind", "**Wole Soyinka** (Nobel Prize, 1986), **Chinua Achebe** (Things Fall Apart) and many scientists, teachers and artists."],
  ], ["Courage and service build nations", "Women played key roles", "Heroes include ordinary people who do right"], "Choose one hero above and write a short report on their life."),

  student("Life Skills", "Starting a small business as a teenager", "How young people can earn, learn and build skills honestly.", [
    ["Ideas that suit students", "Making snacks or drinks, phone accessories, handmade beads and crafts, graphic design, tutoring younger pupils, or selling school supplies (with permission)."],
    ["Simple steps", "[[diagram: flow Idea -> Ask customers -> Small start -> Track money -> Improve || Starting small]]\n- Find out what people need.\n- Start with little money.\n- Write down every sale and cost.\n- Profit = income − costs."],
    ["Stay balanced", "School comes first. Agree hours with your parents, keep the business legal and safe, and save part of your profit."],
  ], ["Solve a real need", "Start small", "Record income and costs", "School first"], "Plan a tiny business: what you will sell, the cost of materials, your price and your expected profit."),

  student("Life Skills", "Road safety for young people", "Simple rules that save lives on Nigerian roads.", [
    ["Walking", "Use footbridges and zebra crossings. Look left, right and left again. Never cross from behind a parked vehicle or while using a phone."],
    ["In vehicles", "Wear a seat belt, sit in the back if you are young, and never distract the driver."],
    ["On motorcycles and tricycles", "Wear a helmet, never ride three on a bike, and avoid overloaded or speeding riders."],
    ["Cycling", "Ride on the left side with traffic, use lights at night, and wear bright clothing."],
  ], ["Use crossings and footbridges", "Seat belts and helmets", "No phones when crossing"], "Draw a safe route from your home to school, marking crossings and danger spots."),

  student("Life Skills", "Making good friends and handling peer pressure", "How to choose friends wisely and say no with confidence.", [
    ["Good friends", "A good friend respects you, keeps your secrets (unless you are in danger), encourages you to do well and is honest."],
    ["Peer pressure", "Friends may push you to skip class, cheat, smoke, drink or bully others. Remember: you are responsible for your choices."],
    ["How to say no", "- Say it clearly: 'No, I don't do that.'\n- Give a reason if you want: 'I have a test tomorrow.'\n- Suggest something else.\n- Walk away and find better company.\n- Tell a trusted adult if you feel unsafe."],
  ], ["Choose friends who build you up", "You own your choices", "Practise saying no"], "Role-play saying no to a friend who wants you to skip class."),

  /* ============================================================ parents */
  parent("Parenting", "Making the school holidays count", "Turn long breaks into time for rest, revision, skills and family bonding.", [
    ["Plan the holiday together", "Sit with your child and agree a simple daily routine: wake-up time, chores, an hour of revision, reading, play and screen limits. Children follow plans they helped to make."],
    ["Use the Precious PS Holiday Programme", "Your child's Holiday Programme page shows revision of last term, a preview of next term and activities from the school. You can add your own tasks from your Parent portal and see when they are done."],
    ["Learn a skill", "Cooking, sewing, gardening, basic computer skills, a musical instrument or a trade. Skills build confidence."],
    ["Family time", "Visit relatives, play board games, cook together and talk. These memories matter."],
  ], ["Agree a routine", "Revise a little daily", "Learn a practical skill", "Make family memories"], "Give your child two holiday tasks today through the Holiday Programme and check on them at the weekend.", "If your child seems withdrawn, anxious or unusually sad during the break, speak with the school counsellor or a health professional."),

  parent("Parenting", "Recognising and stopping bullying", "Signs that a child is being bullied or is bullying others, and what to do.", [
    ["Signs your child is being bullied", "Not wanting to go to school, missing or damaged belongings, unexplained injuries, sleeping badly, losing friends, or suddenly falling grades."],
    ["What to do", "- Listen calmly and believe your child.\n- Don't encourage fighting back.\n- Write down what happened, when and who was involved.\n- Meet the class teacher or head and agree a plan.\n- Follow up until it stops."],
    ["If your child bullies others", "Stay calm, find out why, make clear it must stop, and help them repair the harm. Model respect at home."],
  ], ["Know the signs", "Listen and believe", "Work with the school", "Address bullying behaviour too"], "Ask your child tonight: 'Who did you sit with at break today?' and listen.", "If bullying has led to depression, self-harm or fear of school that does not improve, seek help from a counsellor or doctor."),

  parent("Parenting", "Talking to children about growing up and puberty", "How to have calm, honest conversations about body changes.", [
    ["Start early and simply", "Children notice changes from about age 8 to 13. Use correct names for body parts and keep explanations simple and factual."],
    ["What to cover", "Body changes, hygiene, periods (for girls, and boys should understand too), feelings, respect for others, and the right to say no to unwanted touch."],
    ["Keep the door open", "Let your child know they can ask anything. If you don't know an answer, find out together from a reliable source."],
  ], ["Talk early and honestly", "Use correct words", "Teach body safety", "Stay approachable"], "Choose a quiet moment this week to ask your child what they already know about growing up.", "If you notice signs of very early or very late puberty, or your child is distressed about body changes, consult a doctor."),

  parent("Education", "Helping a child who finds maths hard", "Practical ways to build confidence and skill at home.", [
    ["Change the attitude", "Avoid saying 'I was never good at maths either.' Say 'Maths takes practice, and you can improve.'"],
    ["Use everyday maths", "Counting change at the market, measuring ingredients, reading clocks and calendars, sharing food fairly (fractions), and comparing prices."],
    ["Practise little and often", "Ten minutes a day beats two hours once a week. Use Precious PS practice tests and the Maths Sprint game."],
    ["Check the basics", "Many difficulties come from gaps in times tables, place value or fractions. Go back and strengthen these first."],
  ], ["Positive words", "Everyday maths", "Little and often", "Fix the basics"], "Let your child calculate the change on your next market trip.", "If your child still cannot grasp basic number ideas after steady help, ask the school about an assessment for learning difficulties such as dyscalculia."),

  parent("Education", "Choosing subjects and careers with your teenager", "How to guide SS subject choices and career plans without pressure.", [
    ["Start with your child's strengths", "Look at results, interests and talents. A child who loves drawing and design may thrive in architecture; one who loves debates may enjoy law."],
    ["Check requirements early", "University courses need specific SSCE and UTME subjects. For example, medicine usually needs Biology, Chemistry and Physics; law needs English and Literature or Government."],
    ["Explore together", "Use Precious PS's Meet an Expert and Knowledge Hub career articles. Visit workplaces and talk to professionals."],
    ["Avoid pressure", "Forcing a career often leads to unhappiness and poor results. Guide; don't dictate."],
  ], ["Build on strengths", "Check subject requirements", "Explore real careers", "Guide, don't force"], "Ask your teenager to list three careers they find interesting and research the requirements together.", "If your teenager is very confused or distressed about the future, a school guidance counsellor can help."),

  parent("Health", "Signs of stress and low mood in teenagers", "When moodiness is normal and when to be concerned.", [
    ["Normal teenage ups and downs", "Teenagers can be moody, tired and private. This is part of growing up."],
    ["Warning signs", "Lasting sadness for two weeks or more, withdrawal from friends and family, big changes in sleep or appetite, falling grades, talk of hopelessness, or any talk of self-harm."],
    ["How to help", "- Spend calm one-on-one time together.\n- Listen more than you lecture.\n- Limit late-night phone use.\n- Encourage exercise, sleep and good food.\n- Tell them you love them, even when they are difficult."],
  ], ["Moodiness can be normal", "Watch for lasting changes", "Listen and stay close"], "Plan a 20-minute outing alone with your teenager this week.", "If your child talks about wanting to die or hurting themselves, get help immediately from a doctor or emergency service (112)."),

  parent("Parenting", "Chores by age: raising responsible children", "Age-appropriate tasks that build confidence and independence.", [
    ["Why chores matter", "Children who help at home learn responsibility, teamwork and practical skills, and feel valued."],
    ["Chores by age", "| Age | Example chores |\n|---|---|\n| 3–5 | pick up toys, put clothes in a basket |\n| 6–8 | make the bed, set the table, water plants |\n| 9–12 | sweep, wash plates, fold clothes, simple cooking with help |\n| 13+ | cook simple meals, iron, shop with a list, care for younger siblings |"],
    ["Make it work", "Show how to do it, praise effort, rotate tasks, and do chores together."],
  ], ["Chores build responsibility", "Match tasks to age", "Teach, praise, rotate"], "Choose one new chore for each child this week and show them how to do it.", "If a child refuses all responsibility and shows aggressive or defiant behaviour that disrupts family life, a counsellor or psychologist can help."),

  parent("Education", "Preparing your child for boarding school", "Practical and emotional preparation for life away from home.", [
    ["Practical skills", "Before resumption, teach washing clothes, keeping belongings tidy, managing pocket money and basic first aid."],
    ["Emotional preparation", "Talk about feelings, homesickness and making friends. Visit the school together if possible."],
    ["Safety", "Teach your child to report bullying, abuse or anything that feels wrong, and agree how to reach you."],
    ["Stay connected", "Write letters, call when allowed and attend visiting days."],
  ], ["Teach self-care skills", "Talk about feelings", "Agree safety rules", "Keep in touch"], "Make a checklist of skills your child needs before boarding and practise one each day.", "If homesickness becomes severe or your child refuses to return, speak with the school's counsellor."),

  parent("Safety", "Protecting your family from online and phone scams", "Common scams in Nigeria and how to avoid them.", [
    ["Common scams", "- Fake bank calls asking for your BVN, PIN or OTP.\n- 'You have won a prize' messages that ask for a fee.\n- Fake job or visa agents.\n- Investment schemes promising very high returns.\n- Fake online shops with no delivery."],
    ["Protect yourself", "Never share your PIN, OTP or passwords. Call your bank only on the number on your card. Verify agents through official sources. If it sounds too good to be true, it is."],
    ["Teach your children", "Children should never share family details, photos or codes online and must tell you about strange messages."],
  ], ["Never share PIN or OTP", "Verify before paying", "Too good to be true usually is"], "Talk with your family about one scam message you have received.", "If you have lost money, report quickly to your bank and to the police or relevant agency."),

  parent("Health", "Healthy sleep for children", "How much sleep children need and how to help them get it.", [
    ["How much sleep?", "| Age | Hours per day |\n|---|---|\n| 3–5 years | 10–13 |\n| 6–12 years | 9–12 |\n| 13–18 years | 8–10 |"],
    ["A good bedtime routine", "Same bedtime every night, a bath, quiet reading or prayer, and no screens for an hour before sleep."],
    ["Why it matters", "Good sleep improves memory, mood, growth and resistance to illness."],
  ], ["Children need lots of sleep", "Keep a routine", "No screens before bed"], "Set a family 'screens off' time an hour before bed this week.", "If your child snores loudly, stops breathing in sleep, or is always very sleepy in the day, see a doctor."),

  parent("Parenting", "Encouraging a love of learning", "Help your child become curious, confident and eager to learn.", [
    ["Model curiosity", "Ask questions, read in front of your children, and wonder aloud about how things work. Precious PS's Science & Engineering Hub is a good place to explore together."],
    ["Praise effort, not just results", "Say 'You worked hard on that' rather than only 'You are clever.' Children then try harder tasks."],
    ["Make learning part of life", "Visit museums, markets, farms and workplaces; cook and measure; play word and number games."],
  ], ["Model curiosity", "Praise effort", "Learn everywhere"], "Read one Science & Engineering Hub article with your child and try to explain it to each other.", "If your child shows no interest in anything for a long period, or seems unhappy and withdrawn, consult the school or a professional."),
];
