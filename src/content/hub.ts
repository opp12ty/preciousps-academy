/**
 * Starter content for the student Knowledge Hub, the Parent Learning Hub and the Psychology
 * Library, and starter questions for the quiz games. Written for Precious PS Academy. Staff can
 * edit, replace or add to all of it in the backend. The parenting material is general education,
 * not medical or psychological diagnosis.
 */

export interface StarterArticle {
  audience: "STUDENT" | "PARENT";
  section: "KNOWLEDGE" | "LEARNING" | "PSYCHOLOGY" | "TEMPERAMENT";
  category: string;
  title: string;
  summary: string;
  body: string;
  keyPoints: string;
  activity?: string;
  level?: "PRIMARY" | "JUNIOR_SECONDARY" | "SENIOR_SECONDARY";
  stream?: "SCIENCE" | "COMMERCIAL" | "ARTS";
}

const SEEK_HELP = "\n\n## When to seek help\nThis article is general education for parents. It is not a diagnosis. If your child is in serious distress, is in danger, or a difficulty is badly affecting daily life, please speak to the school and to a qualified professional such as a doctor, counsellor or psychologist.";

export const STARTER_ARTICLES: StarterArticle[] = [
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "Nigerian History", title: "How Nigeria became independent",
    summary: "Nigeria became an independent country on 1 October 1960 and a republic on 1 October 1963.",
    body: "## Before independence\nThe area now called Nigeria was ruled by Britain. In 1914 the Northern and Southern Protectorates were joined together. This is called the **amalgamation**.\n\n## The road to self-rule\nNigerians such as Herbert Macaulay, Nnamdi Azikiwe, Obafemi Awolowo, Ahmadu Bello and Funmilayo Ransome-Kuti asked for self-government through newspapers, political parties and peaceful protest.\n\n[[diagram: flow 1914 Amalgamation -> 1960 Independence -> 1963 Republic || Three important dates]]\n\n## Independence\nOn **1 October 1960** Nigeria became independent. Sir Abubakar Tafawa Balewa was the first Prime Minister. In **1963** Nigeria became a republic, with Dr Nnamdi Azikiwe as the first President.\n\n## Why it matters\nIndependence means that Nigerians govern themselves. We mark it every year on 1 October.",
    keyPoints: "Amalgamation: 1914\nIndependence: 1 October 1960\nRepublic: 1 October 1963\nFirst Prime Minister: Sir Abubakar Tafawa Balewa",
    activity: "Ask an older relative what they remember or were told about Independence Day celebrations long ago.",
  },
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "Nigerian Culture", title: "The peoples and languages of Nigeria",
    summary: "Nigeria has more than 250 ethnic groups and hundreds of languages. English is the official language.",
    body: "## A country of many peoples\nNigeria is one of the most diverse countries in the world, with over **250 ethnic groups**. The three largest are the **Hausa-Fulani**, the **Yoruba** and the **Igbo**. Others include the Ijaw, Kanuri, Tiv, Ibibio, Edo, Nupe and Urhobo.\n\n## Languages\nMore than 500 languages are spoken. **English** is the official language, used in schools, courts and government, so that people from different groups can understand one another.\n\n## Culture\nCulture is the way of life of a people: their food, dress, music, festivals and greetings.\n\n| People | A well-known festival |\n|---|---|\n| Yoruba | Osun-Osogbo |\n| Igbo | New Yam Festival |\n| Hausa-Fulani | Durbar |\n| Efik | Calabar Carnival |\n\n## Unity in diversity\nOur differences make Nigeria rich. Respecting other people's language and culture helps us to live in peace.",
    keyPoints: "Over 250 ethnic groups\nThree largest: Hausa-Fulani, Yoruba, Igbo\nEnglish is the official language\nRespect for other cultures builds unity",
    activity: "Learn to say 'good morning' in two Nigerian languages that are not your own.",
  },
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "African History", title: "Great kingdoms of West Africa",
    summary: "Long before colonial rule, West Africa had rich and well-organised kingdoms and empires.",
    body: "## Three great empires\nBetween about the 8th and 16th centuries, three empires rose one after another in the grasslands of West Africa.\n\n[[diagram: flow Ghana Empire -> Mali Empire -> Songhai Empire || One followed another]]\n\n- **Ghana** grew rich from the trade in gold and salt.\n- **Mali** became famous under **Mansa Musa**, whose journey to Mecca in 1324 showed the world the wealth of his empire. The city of Timbuktu became a centre of learning.\n- **Songhai** was the largest of the three, with its capital at Gao.\n\n## In the land of Nigeria\n- The **Benin Kingdom** is known for its bronze works.\n- The **Oyo Empire** had a strong cavalry and a system of checks on the king.\n- The **Kanem-Bornu Empire** lasted about a thousand years.\n- The **Nok** people made terracotta sculptures over 2,000 years ago.\n\n## Why it matters\nAfricans built cities, universities, armies and trade routes. Knowing this history gives us confidence and pride.",
    keyPoints: "Ghana, Mali and Songhai were great West African empires\nMansa Musa ruled Mali\nTimbuktu was a centre of learning\nBenin is famous for bronze works",
    level: "JUNIOR_SECONDARY",
  },
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "Science and Technology", title: "How artificial intelligence works",
    summary: "Artificial intelligence is computer software that learns patterns from large amounts of data and uses them to make predictions.",
    body: "## What is AI?\n**Artificial intelligence (AI)** is the ability of a computer program to do tasks that normally need human thinking, such as recognising a face, translating a language or answering a question.\n\n## How does it learn?\nMost modern AI uses **machine learning**. Instead of being given every rule, the program is shown a very large number of examples and finds the patterns itself.\n\n[[diagram: flow Data -> Training -> Model -> Prediction || How a machine-learning system is made and used]]\n\n## Where you meet AI\n- suggestions of videos and songs\n- maps that find the fastest route\n- voice assistants and chat assistants\n- spam filters in e-mail\n\n## Using AI wisely\n- AI can be **wrong**. Check important facts in your textbook or with your teacher.\n- Do not give AI tools your private information.\n- Use AI to **understand**, not to copy. Work you did not think through teaches you nothing.\n- An examination tests what **you** know.",
    keyPoints: "AI learns patterns from data\nMachine learning uses examples, not fixed rules\nAI can make mistakes\nUse AI to learn, not to copy",
    level: "SENIOR_SECONDARY",
  },
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "Digital Literacy", title: "Staying safe online",
    summary: "The internet is useful, but you must protect your information, your money and yourself.",
    body: "## Protect your accounts\n- Use a **strong password**: long, with letters, numbers and symbols.\n- Never tell anyone your password, not even a friend.\n- Log out on shared phones and computers.\n\n## Protect your information\nDo not post your home address, phone number, school timetable or photographs of your documents. Once something is online, it is very hard to remove.\n\n## Watch for tricks\n**Phishing** is a message that pretends to be from a bank, a school or a friend in order to steal your details. Signs of a trick:\n- it rushes you (\"act now\");\n- it promises a prize or easy money;\n- it asks for a password, PIN or code;\n- the link looks strange.\n\n[[diagram: flow Stop -> Think -> Ask an adult || Before you click, reply or send]]\n\n## Be kind online\nDo not insult or mock others. If someone bullies you or sends something that makes you uncomfortable, do not reply. Save the message and tell a parent or teacher.",
    keyPoints: "Use strong passwords and keep them secret\nNever share personal details online\nPhishing messages try to steal information\nTell a trusted adult when something feels wrong",
  },
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "Study Skills", title: "How to study and remember more",
    summary: "Short, regular study with self-testing works far better than long hours of reading the night before a test.",
    body: "## Plan your time\nMake a simple timetable. Study in short sessions of 25 to 40 minutes, then rest for 5 to 10 minutes.\n\n## Test yourself\nClosing the book and trying to recall what you read is the strongest study method known. Answer practice questions, explain the topic aloud, or write what you remember and then check.\n\n## Space it out\nRevise a topic again after one day, then after a few days, then after a week. This is called **spaced practice**.\n\n[[diagram: flow Learn -> Next day -> After 3 days -> After a week || Spaced practice]]\n\n## Look after your brain\n- Sleep at least eight hours.\n- Drink water and eat well.\n- Keep your phone away while studying.\n\n## Before an examination\n- Start revising weeks ahead, not the night before.\n- Practise with timed tests.\n- Read each question carefully and answer the ones you know first.",
    keyPoints: "Study in short, regular sessions\nTest yourself instead of only re-reading\nRevise again after a day, a few days and a week\nSleep well before an examination",
    activity: "Make a one-week timetable with one 30-minute session for your weakest subject each day.",
  },
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "Civic Education", title: "The three arms of government",
    summary: "Government in Nigeria is shared among the Legislature, the Executive and the Judiciary so that no single group holds all the power.",
    body: "## Why three arms?\nPower is divided so that each arm can check the others. This is called the **separation of powers**.\n\n| Arm | Work | Who |\n|---|---|---|\n| **Legislature** | makes the laws | National Assembly: Senate and House of Representatives |\n| **Executive** | carries out the laws | President, Vice-President and ministers |\n| **Judiciary** | interprets the laws | the courts and judges |\n\n[[diagram: flow Legislature makes laws -> Executive carries them out -> Judiciary interprets them || The three arms]]\n\n## Three tiers\nNigeria also has three levels of government: **federal**, **state** and **local**.\n\n## The constitution\nThe **constitution** is the highest law of the land. Every arm of government must obey it.\n\n## Your part\nA good citizen obeys the law, respects others, pays taxes when working, and votes when old enough.",
    keyPoints: "Legislature makes laws\nExecutive carries out laws\nJudiciary interprets laws\nThe constitution is the highest law",
    level: "JUNIOR_SECONDARY",
  },
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "Financial Literacy", title: "Saving, spending and needs versus wants",
    summary: "Managing money well begins with knowing the difference between what you need and what you only want.",
    body: "## Needs and wants\nA **need** is something you must have to live and learn: food, water, shelter, clothing, school books. A **want** is something nice to have: sweets, the newest phone, extra toys.\n\n## A simple rule\nWhen you receive money, divide it into three parts.\n\n[[diagram: pie Spend=5, Save=3, Give=2 || One way to share your money]]\n\n## Why save?\n- for something you cannot afford today;\n- for emergencies;\n- because small amounts grow: ₦100 saved every school day becomes about ₦20,000 in a year.\n\n## A budget\nA **budget** is a plan for your money. Write what you expect to receive and what you plan to spend. Spend less than you receive.\n\n## Be careful\nAnyone who promises to double your money quickly is almost certainly trying to cheat you.",
    keyPoints: "Needs come before wants\nSave part of everything you receive\nA budget is a plan for money\nPromises of quick money are usually scams",
  },
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "Famous Personalities", title: "Africans who changed the world",
    summary: "Africans have made lasting contributions to literature, science, peace and leadership.",
    body: "## Writers\n- **Chinua Achebe** (Nigeria) wrote *Things Fall Apart*, one of the most widely read African novels.\n- **Wole Soyinka** (Nigeria) became in 1986 the first African to win the Nobel Prize in Literature.\n\n## Leaders and peace-makers\n- **Nelson Mandela** (South Africa) spent 27 years in prison for opposing apartheid and later became President.\n- **Wangari Maathai** (Kenya) led the planting of millions of trees and won the Nobel Peace Prize in 2004.\n- **Kofi Annan** (Ghana) served as Secretary-General of the United Nations.\n\n## Science and innovation\n- **Philip Emeagwali** (Nigeria) is known for work on computing.\n- **Dr Stella Adadevoh** (Nigeria) helped to stop the spread of Ebola in Nigeria in 2014.\n\n## What they share\nThey read widely, worked hard, and used their knowledge to serve other people.",
    keyPoints: "Achebe wrote Things Fall Apart\nSoyinka won the Nobel Prize in Literature in 1986\nMandela led South Africa after apartheid\nMaathai won the Nobel Peace Prize in 2004",
  },
  {
    audience: "STUDENT", section: "KNOWLEDGE", category: "Leadership and Character", title: "What makes a good leader",
    summary: "Leadership is service. A good leader is honest, responsible and fair, and starts by leading himself or herself.",
    body: "## Leadership is service\nA leader is not someone who gives orders. A leader helps a group to reach a good goal.\n\n## Qualities of a good leader\n- **Honesty**: telling the truth even when it is hard.\n- **Responsibility**: doing your duty without being watched.\n- **Fairness**: treating everyone equally.\n- **Courage**: doing what is right when others do not.\n- **Humility**: listening and admitting mistakes.\n\n## Lead yourself first\nBefore you lead others, lead yourself: wake on time, finish your homework, keep your promises.\n\n## Leading at school\nYou can lead without a badge. Help a classmate who is struggling, pick up litter without being asked, speak up when someone is bullied.\n\n## A thought\nPeople follow what you **do** more than what you **say**.",
    keyPoints: "A leader serves others\nHonesty, responsibility, fairness, courage and humility\nLead yourself before leading others\nYou can lead without a title",
    activity: "Choose one way to serve your class this week and do it without telling anyone.",
  },

  /* --------------------------------------------------------------- parents */
  {
    audience: "PARENT", section: "LEARNING", category: "Study Habits", title: "Helping your child build better study habits",
    summary: "Regular short study at a fixed time, in a quiet place, does more than long hours of last-minute reading.",
    body: "## Why habits matter\nChildren do well when study is a normal part of the day, not an emergency before examinations.\n\n## Set up the routine\n- **A fixed time.** The same time each day, after rest and food.\n- **A fixed place.** A table, good light, no television.\n- **A realistic length.** About 20 minutes for lower primary, 30 to 45 for upper primary and junior secondary, and 60 to 90 with short breaks for senior secondary.\n\n[[diagram: flow Rest and eat -> Study -> Short break -> Study -> Free time || An evening routine]]\n\n## Your part\n- Ask \"What did you learn today?\" rather than \"Did you read?\"\n- Ask your child to explain a topic to you. Explaining is the best test of understanding.\n- Praise **effort and method**, not only marks.\n- Keep phones away during study time, including your own if you sit with them.\n\n## Use this platform\nOn your child's page you can add a study timetable. Your child is reminded and can mark each activity as done.",
    keyPoints: "Same time, same place every day\nShort regular sessions beat long last-minute ones\nAsk your child to explain what was learnt\nPraise effort and method",
    activity: "This week, agree a daily study time with your child and add it to the timetable on this platform.",
  },
  {
    audience: "PARENT", section: "LEARNING", category: "Examination Support", title: "Supporting your child during examination preparation",
    summary: "Calm, steady support at home helps a child more than pressure. Plan early, protect sleep and keep expectations realistic.",
    body: "## Start early\nHelp your child to make a revision plan several weeks ahead. Divide each subject into topics and spread them across the weeks.\n\n## Practise the way the examination is set\nTimed practice builds speed and confidence. Encourage regular practice tests on this platform and look at the corrections together.\n\n## Protect the basics\n- **Sleep.** A tired brain forgets. Avoid all-night reading.\n- **Food and water.** Do not send a child to an examination hungry.\n- **Rest.** Short breaks and some play are part of good preparation.\n\n## Watch your words\nSay \"Do your best\" rather than \"You must come first\". Children who fear disappointing their parents often perform worse.\n\n## On the day\nArrive early, check writing materials, and send your child off calmly.\n\n## After the result\nIf it is good, praise the work that produced it. If it is poor, stay calm and ask \"What shall we change?\"",
    keyPoints: "Plan revision weeks ahead\nUse timed practice and review corrections\nProtect sleep, food and rest\nEncourage rather than threaten",
  },
  {
    audience: "PARENT", section: "LEARNING", category: "Digital Parenting", title: "Guiding your child's use of phones and the internet",
    summary: "Children need guidance, not only restriction. Agree clear rules, stay involved and model good habits.",
    body: "## Agree family rules\n- Where devices may be used (shared rooms rather than behind closed doors for younger children).\n- When: not during meals, study time or after bedtime.\n- What: which apps and sites are allowed.\n\n## Teach, do not only forbid\nExplain **why**. A child who understands the danger of sharing personal information is safer than one who was only told \"don't\".\n\n## Warning signs\nSecrecy about the phone, sudden mood changes after being online, new unknown \"friends\", or requests for money deserve a calm conversation.\n\n## Scams and strangers\nTell your child plainly: nobody online needs your password, your photographs or your address. Anyone who asks for secrecy from parents is not a friend.\n\n## Be the example\nChildren copy what they see. If we scroll through meals, so will they.\n\n## Keep the door open\nPromise your child that telling you about a problem online will not automatically mean losing the phone. Otherwise they will hide the next problem.",
    keyPoints: "Agree clear rules about where, when and what\nExplain the reasons\nWatch calmly for warning signs\nModel the behaviour you want",
  },
  {
    audience: "PARENT", section: "LEARNING", category: "Parent–School Partnership", title: "Working with the school for your child's success",
    summary: "Children do best when home and school speak with one voice. Stay informed, communicate early and respect the school's processes.",
    body: "## Stay informed\nRead school announcements, attend meetings, and check your child's progress on this platform regularly, not only at the end of term.\n\n## Speak early\nIf you notice a problem with learning, behaviour or friendships, tell the school early. Small problems are easier to solve.\n\n## Speak respectfully\nRaise concerns with the teacher or administrator directly, not in front of your child and not in public forums. Children lose respect for a teacher they hear being insulted at home.\n\n## Support the school's rules\nPunctuality, uniform, homework and honesty in examinations matter. When parents support these, children take them seriously.\n\n## What the platform shows you\nResults, study progress, timetable activity and school notices. Official results are recorded by the school; parents cannot alter them.\n\n## Use official channels\nTo reach the school, use **Contact School Administration** rather than sharing personal phone numbers in the parent community.",
    keyPoints: "Check progress regularly\nRaise concerns early and respectfully\nSupport the school's rules at home\nUse official channels to contact the school",
  },
  {
    audience: "PARENT", section: "PSYCHOLOGY", category: "Understanding Children", title: "Understanding how children think and learn",
    summary: "Children are not small adults. What they can understand, remember and control changes greatly with age.",
    body: "## Thinking grows in stages\n| Age | What to expect |\n|---|---|\n| 5–7 | learns by doing and seeing; short attention; needs clear, simple instructions |\n| 8–11 | can reason about real things; enjoys rules and fairness; compares self with others |\n| 12–14 | begins abstract thinking; questions authority; very aware of friends' opinions |\n| 15–18 | plans for the future; wants independence; still developing self-control |\n\n## Attention\nA rough guide is that a child can concentrate for a few minutes per year of age before needing a change of activity. Expecting a seven-year-old to sit still for an hour sets the child up to fail.\n\n## Children learn from what we do\nA child who is shouted at learns to shout. A child who is listened to learns to listen.\n\n## Mistakes are part of learning\nA wrong answer shows what to teach next. Treating mistakes as shameful makes children hide them.\n\n## Every child is different\nBrothers and sisters raised in the same home can differ greatly. Comparing them (\"Why can't you be like your sister?\") damages confidence and rarely improves effort." + SEEK_HELP,
    keyPoints: "Abilities change with age\nExpect short attention in young children\nChildren copy what they see\nDo not compare one child with another",
  },
  {
    audience: "PARENT", section: "PSYCHOLOGY", category: "Understanding Adolescents", title: "Understanding your teenager",
    summary: "Adolescence brings rapid changes in body, feelings and thinking. Firm, warm and respectful parenting helps teenagers through it.",
    body: "## What is changing\n- **Body:** rapid growth and puberty, with self-consciousness about appearance.\n- **Feelings:** stronger emotions and faster mood changes.\n- **Thinking:** a growing ability to argue and question.\n- **Friends:** the opinion of peers becomes very important.\n\n## What teenagers need\n- **Respect.** Correct in private; never humiliate in front of friends.\n- **Listening.** Listen fully before you respond. Teenagers stop talking to adults who only lecture.\n- **Clear limits.** Fewer rules, clearly explained and consistently kept.\n- **Growing responsibility.** Give more freedom as trust is earned.\n\n## Arguments\nSome argument is normal: your child is learning to think independently. Stay calm, keep to the issue, and be willing to say \"I was wrong\" when you are.\n\n## Peer influence\nKnow your child's friends and welcome them at home. Talk openly about pressure to try alcohol, drugs, sex or examination malpractice before it arises.\n\n## Stay connected\nShared meals, chores done together and short daily conversations keep the relationship alive." + SEEK_HELP,
    keyPoints: "Changes in body, feelings, thinking and friendships are normal\nListen before you lecture\nFew rules, clearly kept\nIncrease freedom as trust grows",
  },
  {
    audience: "PARENT", section: "PSYCHOLOGY", category: "Positive Discipline", title: "Positive discipline: correcting without harming",
    summary: "Discipline means teaching. The aim is a child who behaves well when nobody is watching, not a child who is only afraid.",
    body: "## Discipline is teaching\nThe word comes from the same root as \"disciple\": a learner. Punishment alone tells a child what not to do; discipline also teaches what to do.\n\n## What works\n1. **Clear expectations.** Say exactly what you want: \"Homework before television.\"\n2. **Consistency.** The same rule today and tomorrow, from both parents.\n3. **Natural and fair consequences.** A child who breaks a toy in anger does not get a new one this week.\n4. **Notice good behaviour.** Praise it specifically: \"Thank you for helping your brother.\"\n5. **Stay calm.** Decisions made in anger are usually too harsh and later regretted.\n\n[[diagram: flow State the rule -> Explain why -> Apply a fair consequence -> Restore the relationship || Four steps]]\n\n## What harms\nInsults, name-calling, comparison, threats you will not carry out, and beating in anger. These produce fear, secrecy and resentment, and do not teach self-control.\n\n## Separate the child from the behaviour\nSay \"That was a lie, and lying is wrong\" rather than \"You are a liar.\"\n\n## Afterwards\nReassure your child of your love. Correction should end with the relationship intact." + SEEK_HELP,
    keyPoints: "Discipline is teaching, not only punishing\nBe clear, consistent and calm\nPraise good behaviour specifically\nCorrect the behaviour, not the child's worth",
    activity: "For one week, notice and name one good thing your child does each day.",
  },
  {
    audience: "PARENT", section: "PSYCHOLOGY", category: "Examination Pressure", title: "Understanding examination pressure",
    summary: "Some nervousness helps performance, but too much pressure blocks memory and thinking. Parents strongly influence which one a child feels.",
    body: "## A little is helpful, a lot is harmful\nMild nervousness sharpens attention. Heavy fear does the opposite: the mind goes blank even when the child knows the work.\n\n[[diagram: bars Too little=3, Moderate=9, Too much=2 || Performance is best with moderate pressure]]\n\n## Signs of too much pressure\nPoor sleep, headaches or stomach aches before tests, irritability, tearfulness, avoiding study, or saying \"I am stupid\".\n\n## Where pressure comes from\nThe child's own hopes, comparison with classmates or siblings, fear of punishment, and the feeling that a parent's love depends on marks.\n\n## What parents can do\n- Make it clear that your love does not depend on results.\n- Talk about **effort and improvement**, not position in class.\n- Help with a realistic timetable that includes rest.\n- Teach a calming habit: slow breathing for one minute before starting.\n- Keep home calm in examination weeks; postpone quarrels and big changes.\n\n## Handling disappointment\nWhen a result is poor, wait until you are calm. Then ask what was hard, what help is needed, and what the plan is." + SEEK_HELP,
    keyPoints: "Moderate pressure helps; heavy pressure harms\nWatch for sleep problems, aches and tears\nLove must not depend on marks\nFocus on effort and improvement",
  },
  {
    audience: "PARENT", section: "PSYCHOLOGY", category: "Communication", title: "Talking so that your child will listen",
    summary: "How we speak to children decides whether they open up or shut down. Listening comes first.",
    body: "## Listen first\nStop what you are doing, look at your child and let them finish. Repeat back what you heard: \"So you felt left out at break time.\" A child who feels understood becomes willing to hear advice.\n\n## Ask open questions\n\"What was the best part of today?\" brings more than \"How was school?\"\n\n## Use \"I\" statements\n\"I worry when you come home late\" invites conversation. \"You are irresponsible\" invites an argument.\n\n## Choose the moment\nSerious talks go badly when a child is hungry, tired or in front of others. Walking or doing a chore together often works better than sitting face to face.\n\n## Avoid the conversation-killers\n- lecturing at length;\n- interrupting;\n- bringing up old mistakes;\n- sarcasm and mockery;\n- dismissing feelings (\"That is nothing to cry about\").\n\n## Say the positive things aloud\nMany children know exactly what their parents dislike about them and have no idea what their parents admire. Tell them." + SEEK_HELP,
    keyPoints: "Listen fully before advising\nAsk open questions\nSay 'I feel' rather than 'You are'\nChoose a calm moment",
  },
  {
    audience: "PARENT", section: "PSYCHOLOGY", category: "Supporting Struggling Learners", title: "When your child is struggling at school",
    summary: "A child who is falling behind needs investigation and support, not labels. Find the cause before choosing the remedy.",
    body: "## First, find out why\nPoor results have many possible causes.\n- gaps in earlier work (especially in Mathematics and reading);\n- poor eyesight or hearing;\n- too little sleep or food;\n- worry, bullying or problems at home;\n- little time or space to study;\n- a specific learning difficulty.\n\n## Practical steps\n1. Talk to your child without blame: \"What is hardest?\"\n2. Talk to the teacher. Ask what they see in class.\n3. Have eyes and ears checked if there is any doubt.\n4. Go back and fill the gaps: use the Study Centre lessons for earlier topics.\n5. Set small targets and celebrate each one.\n\n## About learning difficulties\nSome children are bright but find reading, writing or number work unusually hard, or find it very hard to sit still and concentrate. This is **not laziness**. Only a qualified professional can assess it; a parent or teacher should not attach a label.\n\n## Protect confidence\nAvoid words like \"dull\" or \"lazy\". A child who believes he cannot learn stops trying. Find something the child does well and build on it." + SEEK_HELP,
    keyPoints: "Look for the cause before the cure\nWork with the teacher\nFill earlier gaps step by step\nNever label a child as dull or lazy",
  },
  {
    audience: "PARENT", section: "TEMPERAMENT", category: "Temperament", title: "Understanding temperament",
    summary: "Temperament is a child's natural style of responding to the world. It is not good or bad, and it is not a diagnosis.",
    body: "## What is temperament?\n**Temperament** is the natural way a child tends to react: how active, how sociable, how easily upset, how quickly they adjust to change. It is noticeable from early childhood. It is a helpful way for parents to understand a child, **not a medical or psychological diagnosis**, and it does not fix a child's future.\n\n## Some dimensions\n| Dimension | One end | Other end |\n|---|---|---|\n| Sociability | enjoys being with many people | prefers one or two people or being alone |\n| Activity level | always on the move | calm and still |\n| Adaptability | adjusts quickly to change | needs time and warning |\n| Emotional intensity | reacts strongly | reacts mildly |\n| Persistence | keeps at a task | gives up or moves on quickly |\n| Sensitivity | notices noise, texture, tone | not easily bothered |\n| Approach to novelty | rushes towards new things | hangs back at first |\n\n## Why it helps\nWhen you know your child's style, you can adjust how you guide them, instead of fighting their nature.\n\n## Avoid labels\nSay \"He takes time to warm up\" rather than \"He is shy\". Labels stick and children grow into them.\n\n## Fit matters more than type\nNo temperament is better. What matters is the **fit** between the child's style and what is expected at home and school." + SEEK_HELP,
    keyPoints: "Temperament is a natural style, not a diagnosis\nIt has several dimensions\nNo style is better than another\nDescribe behaviour; do not label the child",
  },
  {
    audience: "PARENT", section: "TEMPERAMENT", category: "Parent Scenarios", title: "Scenario: my child avoids speaking in groups",
    summary: "A child who stays quiet in groups may simply need more time and safer practice. Pushing or labelling usually makes it worse.",
    body: "## The situation\n\"My daughter knows the answers at home but will not speak in class or greet visitors.\"\n\n## Possible reasons\n- a temperament that is slow to warm up to new people;\n- fear of being laughed at after an earlier embarrassment;\n- not being sure of the language being used;\n- being compared with a more outgoing sibling;\n- difficulty hearing.\n\nYou cannot tell which from outside. Observe and ask gently.\n\n## What helps\n1. **Do not label.** Avoid \"She is shy\" in her hearing.\n2. **Prepare.** Tell her beforehand who will be there and practise one sentence.\n3. **Small steps.** One greeting today; answering one question next week.\n4. **Arrive early.** A room fills up around her instead of her walking into a crowd.\n5. **Praise the attempt**, however small.\n6. **Tell the teacher**, who can ask her a question she is sure of.\n\n## What does not help\nForcing her to perform, speaking for her every time, apologising for her in front of others, or punishing silence.\n\n## Keep watching\nMost children grow in confidence with patient practice. If your child does not speak at all outside the home for a long period, or seems very distressed, seek professional advice." + SEEK_HELP,
    keyPoints: "Quietness has several possible causes\nPrepare and practise in small steps\nPraise attempts, never mock silence\nDo not label the child as shy",
    activity: "Before the next family visit, agree one sentence your child will say, and praise it afterwards.",
  },
];

/** [audience, category, level or "", stream or "", difficulty, question, correct, wrong, wrong, wrong, explanation] */
export type StarterQuestion = ["STUDENT" | "PARENT", string, string, string, "EASY" | "MEDIUM" | "HARD", string, string, string, string, string, string];
const S = "STUDENT";
const P = "PARENT";
export const STARTER_QUESTIONS: StarterQuestion[] = [
  [S, "History", "", "", "EASY", "In which year did Nigeria become independent?", "1960", "1914", "1963", "1999", "Nigeria became independent on 1 October 1960."],
  [S, "History", "", "", "EASY", "Who was Nigeria's first Prime Minister?", "Sir Abubakar Tafawa Balewa", "Dr Nnamdi Azikiwe", "Chief Obafemi Awolowo", "Sir Ahmadu Bello", "Balewa was Prime Minister at independence."],
  [S, "History", "", "", "MEDIUM", "The joining of the Northern and Southern Protectorates in 1914 is called the", "amalgamation", "independence", "republic", "federation of states", "Lord Lugard carried out the amalgamation in 1914."],
  [S, "History", "", "", "MEDIUM", "In which year did Nigeria become a republic?", "1963", "1960", "1970", "1979", "Nigeria became a republic on 1 October 1963."],
  [S, "History", "JUNIOR_SECONDARY", "", "MEDIUM", "Which West African ruler is famous for his journey to Mecca in 1324?", "Mansa Musa", "Sunni Ali", "Askia Muhammad", "Oba Ewuare", "Mansa Musa ruled the Mali Empire."],
  [S, "History", "JUNIOR_SECONDARY", "", "MEDIUM", "The ancient kingdom famous for its bronze works is", "Benin", "Kanem-Bornu", "Songhai", "Ghana", "Benin bronzes are known all over the world."],
  [S, "History", "SENIOR_SECONDARY", "", "HARD", "The Nigerian Civil War was fought between", "1967 and 1970", "1960 and 1963", "1975 and 1979", "1983 and 1985", "The war lasted from July 1967 to January 1970."],
  [S, "History", "SENIOR_SECONDARY", "ARTS", "HARD", "Which constitution introduced federalism to Nigeria in 1954?", "the Lyttleton Constitution", "the Clifford Constitution", "the Richards Constitution", "the Macpherson Constitution", "The Lyttleton Constitution of 1954 made Nigeria a federation."],
  [S, "Culture", "", "", "EASY", "What are the colours of the Nigerian flag?", "green and white", "red and white", "green and yellow", "blue and white", "The flag is green, white, green."],
  [S, "Culture", "", "", "EASY", "The Durbar festival is associated with which people?", "Hausa-Fulani", "Igbo", "Efik", "Ijaw", "Durbar features horsemen in the northern emirates."],
  [S, "Culture", "", "", "EASY", "The New Yam Festival is celebrated mainly by the", "Igbo", "Kanuri", "Fulani", "Nupe", "It marks the yam harvest."],
  [S, "Culture", "", "", "MEDIUM", "The Osun-Osogbo festival takes place in which state?", "Osun", "Oyo", "Ogun", "Ondo", "It is held at the sacred grove in Osogbo."],
  [S, "Culture", "", "", "MEDIUM", "Who designed the Nigerian flag?", "Taiwo Akinkunmi", "Benedict Odiase", "Herbert Macaulay", "Ben Enwonwu", "Michael Taiwo Akinkunmi designed it in 1959."],
  [S, "Culture", "", "", "MEDIUM", "What is the official language of Nigeria?", "English", "Hausa", "Yoruba", "Pidgin", "English is used in government and schools."],
  [S, "Culture", "", "", "HARD", "The Nok culture is known for its", "terracotta sculptures", "bronze heads", "stone pyramids", "woven kente", "Nok terracottas are over 2,000 years old."],
  [S, "Culture", "", "", "MEDIUM", "Kente cloth comes from which country?", "Ghana", "Kenya", "Egypt", "Ethiopia", "Kente is woven by the Asante and Ewe of Ghana."],
  [S, "Culture", "", "", "EASY", "The Calabar Carnival is held in which state?", "Cross River", "Rivers", "Akwa Ibom", "Delta", "Calabar is the capital of Cross River State."],
  [S, "Geography", "", "", "EASY", "What is the capital of Nigeria?", "Abuja", "Lagos", "Kano", "Ibadan", "Abuja became the capital in 1991."],
  [S, "Geography", "", "", "EASY", "Which is the longest river in Africa?", "the Nile", "the Niger", "the Congo", "the Zambezi", "The Nile flows north to the Mediterranean Sea."],
  [S, "Geography", "", "", "MEDIUM", "How many states does Nigeria have?", "36", "30", "19", "42", "There are 36 states and the Federal Capital Territory."],
  [S, "Geography", "", "", "MEDIUM", "The rivers Niger and Benue meet at", "Lokoja", "Onitsha", "Jebba", "Makurdi", "The confluence is at Lokoja in Kogi State."],
  [S, "Geography", "", "", "MEDIUM", "Which is the largest continent?", "Asia", "Africa", "Europe", "South America", "Asia is the largest in both area and population."],
  [S, "Geography", "", "", "HARD", "Which is the highest mountain in Africa?", "Mount Kilimanjaro", "Mount Kenya", "Mount Cameroon", "Chappal Waddi", "Kilimanjaro in Tanzania is about 5,895 metres high."],
  [S, "Geography", "", "", "MEDIUM", "The largest desert in Africa is the", "Sahara", "Kalahari", "Namib", "Gobi", "The Sahara covers much of North Africa."],
  [S, "Science", "", "", "EASY", "Which planet do we live on?", "Earth", "Mars", "Venus", "Jupiter", "Earth is the third planet from the sun."],
  [S, "Science", "", "", "EASY", "Which gas do we breathe in to stay alive?", "oxygen", "carbon dioxide", "nitrogen", "hydrogen", "The body uses oxygen."],
  [S, "Science", "", "", "MEDIUM", "What do green plants use sunlight to make?", "food", "soil", "water", "oxygen only", "This process is photosynthesis."],
  [S, "Science", "", "", "MEDIUM", "Which organ pumps blood round the body?", "the heart", "the lungs", "the liver", "the kidney", "The heart beats about 70 times a minute."],
  [S, "Science", "", "", "MEDIUM", "Water boils at what temperature at sea level?", "100 °C", "0 °C", "50 °C", "37 °C", "Pure water boils at 100 degrees Celsius."],
  [S, "Science", "SENIOR_SECONDARY", "SCIENCE", "HARD", "What is the chemical symbol for sodium?", "Na", "So", "S", "Sd", "Na comes from the Latin name natrium."],
  [S, "Science", "SENIOR_SECONDARY", "SCIENCE", "HARD", "The unit of electrical resistance is the", "ohm", "volt", "ampere", "watt", "Resistance is measured in ohms."],
  [S, "Science", "SENIOR_SECONDARY", "SCIENCE", "HARD", "Which part of the cell contains the genetic material?", "the nucleus", "the cell wall", "the vacuole", "the cytoplasm", "DNA is held in the nucleus."],
  [S, "Technology", "", "", "EASY", "Which part of a computer is used for typing?", "the keyboard", "the monitor", "the speaker", "the printer", "Keys on the keyboard enter letters and numbers."],
  [S, "Technology", "", "", "MEDIUM", "What does 'www' stand for?", "World Wide Web", "World Wide Wire", "Wide Web World", "Web World Wide", "The World Wide Web links pages on the internet."],
  [S, "Technology", "", "", "MEDIUM", "A message that pretends to be from a bank in order to steal your details is called", "phishing", "browsing", "coding", "streaming", "Phishing tricks people into giving away information."],
  [S, "Technology", "", "", "MEDIUM", "Which of these is the strongest password?", "T7#rain!Lagos92", "password", "12345678", "myname", "Long passwords mixing letters, numbers and symbols are hardest to guess."],
  [S, "Technology", "", "", "HARD", "Software that learns patterns from data to make predictions is called", "machine learning", "word processing", "a spreadsheet", "a web browser", "Machine learning is a branch of artificial intelligence."],
  [S, "General Knowledge", "", "", "EASY", "How many days are there in a leap year?", "366", "365", "364", "360", "A leap year has one extra day in February."],
  [S, "General Knowledge", "", "", "EASY", "How many continents are there?", "seven", "five", "six", "eight", "Africa, Antarctica, Asia, Australia, Europe, North America and South America."],
  [S, "General Knowledge", "", "", "MEDIUM", "Which is the largest ocean?", "the Pacific", "the Atlantic", "the Indian", "the Arctic", "The Pacific covers about a third of the earth."],
  [S, "General Knowledge", "", "", "MEDIUM", "Who wrote the novel 'Things Fall Apart'?", "Chinua Achebe", "Wole Soyinka", "Cyprian Ekwensi", "Buchi Emecheta", "Achebe published it in 1958."],
  [S, "General Knowledge", "", "", "MEDIUM", "Who was the first African to win the Nobel Prize in Literature?", "Wole Soyinka", "Chinua Achebe", "Nelson Mandela", "Ngugi wa Thiong'o", "Soyinka won in 1986."],
  [S, "General Knowledge", "", "", "MEDIUM", "The currency of Nigeria is the", "naira", "cedi", "shilling", "rand", "100 kobo make one naira."],
  [S, "General Knowledge", "", "", "HARD", "Which organisation has its headquarters in Addis Ababa?", "the African Union", "ECOWAS", "the United Nations", "the Commonwealth", "The AU is based in Ethiopia's capital."],
  [S, "General Knowledge", "", "", "HARD", "The headquarters of ECOWAS is in", "Abuja", "Accra", "Dakar", "Lome", "ECOWAS was founded in 1975."],
  [S, "Government", "JUNIOR_SECONDARY", "", "MEDIUM", "Which arm of government makes laws?", "the legislature", "the executive", "the judiciary", "the police", "In Nigeria this is the National Assembly."],
  [S, "Government", "JUNIOR_SECONDARY", "", "MEDIUM", "The highest law of Nigeria is the", "constitution", "decree", "bye-law", "budget", "All other laws must agree with the constitution."],
  [S, "Government", "SENIOR_SECONDARY", "ARTS", "HARD", "A system in which power is shared between a central government and states is", "federalism", "a unitary system", "a monarchy", "a confederation of parties", "Nigeria practises federalism."],
  [S, "Government", "SENIOR_SECONDARY", "ARTS", "HARD", "How many senators represent each state in Nigeria?", "three", "two", "one", "six", "Each state has three senators; the FCT has one."],
  [S, "Economics", "SENIOR_SECONDARY", "COMMERCIAL", "HARD", "When the price of a good rises, the quantity demanded normally", "falls", "rises", "stays the same", "doubles", "This is the law of demand."],
  [S, "Economics", "SENIOR_SECONDARY", "COMMERCIAL", "HARD", "A persistent rise in the general price level is called", "inflation", "deflation", "devaluation", "depreciation", "Inflation reduces what money can buy."],
  [S, "Economics", "SENIOR_SECONDARY", "COMMERCIAL", "HARD", "In accounting, assets equal liabilities plus", "capital", "expenses", "drawings", "revenue", "Assets = Liabilities + Capital is the accounting equation."],
  [S, "Economics", "", "", "MEDIUM", "Something you must have in order to live is a", "need", "want", "luxury", "gift", "Food, water and shelter are needs."],
  [S, "Literature", "SENIOR_SECONDARY", "ARTS", "HARD", "A comparison using 'like' or 'as' is a", "simile", "metaphor", "pun", "hyperbole", "A simile compares two things with like or as."],
  [S, "Literature", "", "", "MEDIUM", "A story that teaches a moral lesson, often with animal characters, is a", "fable", "biography", "diary", "report", "The tortoise stories are fables."],
  [S, "Mathematics", "PRIMARY", "", "EASY", "What is 9 × 8?", "72", "64", "81", "56", "Nine eights are seventy-two."],
  [S, "Mathematics", "PRIMARY", "", "EASY", "How many sides has a hexagon?", "six", "five", "eight", "seven", "Hexa means six."],
  [S, "Mathematics", "", "", "MEDIUM", "What is 25% of 200?", "50", "25", "75", "100", "A quarter of 200 is 50."],
  [S, "Mathematics", "", "", "MEDIUM", "Which of these is a prime number?", "29", "21", "27", "33", "29 has no factors except 1 and itself."],
  [S, "Mathematics", "SENIOR_SECONDARY", "", "HARD", "What is the square root of 196?", "14", "16", "13", "12", "14 × 14 = 196."],
  [S, "Current Affairs", "", "", "MEDIUM", "Which body conducts federal elections in Nigeria?", "INEC", "NAFDAC", "EFCC", "FRSC", "INEC is the Independent National Electoral Commission."],
  [S, "Current Affairs", "", "", "MEDIUM", "Which agency checks the safety of food and drugs in Nigeria?", "NAFDAC", "INEC", "NDLEA", "NYSC", "NAFDAC registers and regulates food and drugs."],
  [S, "Current Affairs", "", "", "MEDIUM", "JAMB conducts which examination?", "UTME", "WASSCE", "BECE", "NCEE", "The Unified Tertiary Matriculation Examination."],
  [S, "Character", "", "", "EASY", "Telling the truth at all times is called", "honesty", "courage", "patience", "neatness", "Honesty builds trust."],
  [S, "Character", "", "", "EASY", "A good leader should be", "fair to everyone", "proud", "harsh", "secretive", "Fairness earns respect."],

  [P, "Parenting", "", "", "EASY", "Your child brings home a poor result. What is the most helpful first response?", "Stay calm and ask what was difficult", "Shout so that it is not repeated", "Compare the child with a sibling", "Take away meals", "Calm questions find the cause; anger makes children hide problems."],
  [P, "Parenting", "", "", "EASY", "Which praise helps a child most?", "\"You worked hard on that revision\"", "\"You are the cleverest in the family\"", "\"You are better than your cousin\"", "\"At last you did something right\"", "Praising effort encourages more effort."],
  [P, "Parenting", "", "", "MEDIUM", "The main aim of discipline is to", "teach self-control", "cause fear", "show who is in charge", "embarrass the child", "Discipline means teaching."],
  [P, "Parenting", "", "", "MEDIUM", "Which is a good study routine for a primary school child?", "A short session at the same time each day", "Three hours without a break", "Study only the night before a test", "Study with the television on", "Short, regular sessions suit a young child's attention."],
  [P, "Parenting", "", "", "MEDIUM", "When correcting a teenager, it is best to", "speak in private and calmly", "correct them in front of friends", "use sarcasm", "bring up every past mistake", "Public correction humiliates and closes communication."],
  [P, "Parenting", "", "", "MEDIUM", "Your child tells you about a frightening message received online. You should first", "thank them for telling you and stay calm", "seize the phone at once", "blame them for being online", "ignore it", "A calm response keeps the child telling you in future."],
  [P, "Parenting", "", "", "MEDIUM", "Which statement opens a conversation rather than an argument?", "\"I worry when you come home late\"", "\"You are irresponsible\"", "\"You never listen\"", "\"What is wrong with you?\"", "'I' statements describe your concern without attacking."],
  [P, "Parenting", "", "", "HARD", "A child who is bright but finds reading unusually hard should be", "assessed by a qualified professional", "called lazy", "punished more", "moved to a lower class at once", "Only a professional can assess a learning difficulty."],
  [P, "Parenting", "", "", "MEDIUM", "The night before an examination a child most needs", "enough sleep", "to read until morning", "a new topic", "a stern warning", "A rested brain remembers better."],
  [P, "Parenting", "", "", "EASY", "The best way to raise a concern about a teacher is to", "speak to the school directly and respectfully", "insult the teacher at home", "post it in a public group", "tell your child to disobey", "Direct, respectful contact solves problems fastest."],
  [P, "Child Development", "", "", "MEDIUM", "At about what age do most children begin to think in abstract terms?", "12 to 14 years", "3 to 4 years", "6 to 7 years", "20 years", "Abstract thinking develops in early adolescence."],
  [P, "Child Development", "", "", "MEDIUM", "During adolescence, whose opinion becomes especially important to a child?", "friends of the same age", "shopkeepers", "younger siblings", "strangers", "Peers matter greatly to teenagers."],
  [P, "Child Development", "", "", "EASY", "Children learn behaviour mostly by", "copying what adults do", "being told once", "reading rules", "being frightened", "Children imitate the adults around them."],
  [P, "Child Development", "", "", "MEDIUM", "Comparing a child with a brother or sister usually", "damages confidence", "improves effort", "builds love between them", "has no effect", "Comparison breeds resentment and low confidence."],
  [P, "Child Development", "", "", "HARD", "Mild nervousness before an examination", "can sharpen attention", "always harms performance", "is a sign of illness", "should be punished", "A little pressure helps; too much blocks thinking."],
  [P, "Temperament", "", "", "MEDIUM", "Temperament is best described as", "a child's natural style of reacting", "a medical diagnosis", "a sign of bad upbringing", "a measure of intelligence", "Temperament is an educational idea, not a diagnosis."],
  [P, "Temperament", "", "", "MEDIUM", "A child who needs time and warning before a change is low in", "adaptability", "intelligence", "honesty", "persistence", "Adaptability is how quickly a child adjusts."],
  [P, "Temperament", "", "", "MEDIUM", "Instead of saying \"He is shy\", it is better to say", "\"He takes time to warm up\"", "\"He is rude\"", "\"He is dull\"", "\"He is stubborn\"", "Describe the behaviour; avoid labels."],
  [P, "Temperament", "", "", "HARD", "What matters most for a child's adjustment is", "the fit between the child's style and what is expected", "having the 'best' temperament", "being very sociable", "being very quiet", "No temperament is better; fit is what counts."],
  [P, "Temperament", "", "", "MEDIUM", "A quiet child should be helped to speak in groups by", "small prepared steps and praise", "being forced to perform", "being mocked", "being punished for silence", "Gradual, safe practice builds confidence."],
  [P, "Nigeria", "", "", "EASY", "In which year did Nigeria gain independence?", "1960", "1957", "1963", "1970", "Nigeria became independent on 1 October 1960."],
  [P, "Nigeria", "", "", "MEDIUM", "How many local government areas does Nigeria have?", "774", "360", "500", "1,000", "The constitution lists 774 local government areas."],
  [P, "Nigeria", "", "", "MEDIUM", "Which examination body conducts the WASSCE?", "WAEC", "JAMB", "NABTEB", "NTI", "The West African Examinations Council."],
  [P, "Africa", "", "", "MEDIUM", "Which country is the most populous in Africa?", "Nigeria", "Egypt", "Ethiopia", "South Africa", "Nigeria has the largest population on the continent."],
  [P, "Africa", "", "", "MEDIUM", "Swahili is widely spoken in which part of Africa?", "East Africa", "North Africa", "West Africa", "the Sahara", "Kenya and Tanzania are major Swahili-speaking countries."],
  [P, "Africa", "", "", "HARD", "Who won the Nobel Peace Prize in 2004 for tree planting and democracy work?", "Wangari Maathai", "Ellen Johnson Sirleaf", "Desmond Tutu", "Kofi Annan", "Maathai founded the Green Belt Movement in Kenya."],
  [P, "World", "", "", "EASY", "Which is the largest ocean in the world?", "the Pacific", "the Atlantic", "the Indian", "the Arctic", "The Pacific is the largest and deepest ocean."],
  [P, "World", "", "", "MEDIUM", "The United Nations was founded in", "1945", "1919", "1960", "1975", "It was created after the Second World War."],
  [P, "World", "", "", "MEDIUM", "Which invention made the mass printing of books possible?", "the printing press", "the telephone", "the radio", "the steam engine", "Gutenberg's press spread reading across Europe."],
  [P, "Science and Technology", "", "", "MEDIUM", "A message that tricks people into giving their bank details is called", "phishing", "streaming", "coding", "hosting", "Never give a PIN or password in reply to a message."],
  [P, "Science and Technology", "", "", "MEDIUM", "Which vitamin does the body make in sunlight?", "vitamin D", "vitamin C", "vitamin A", "vitamin K", "Sunlight on the skin produces vitamin D."],
  [P, "Science and Technology", "", "", "EASY", "How many hours of sleep does a school-age child need each night?", "about 9 to 11", "about 4", "about 6", "about 14", "Enough sleep supports memory and mood."],
];
