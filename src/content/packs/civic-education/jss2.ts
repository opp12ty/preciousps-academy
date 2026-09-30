import type { TermPlan } from "../types";

/** JSS2 Civic Education — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Discipline",
        subtopics: ["Meaning of discipline", "Types of discipline", "Attributes of a disciplined person", "Consequences of indiscipline"],
        objectives: ["Define discipline", "Distinguish self-discipline from imposed discipline", "Identify attributes of a disciplined person", "Explain the consequences of indiscipline"],
        lesson: {
          title: "The Power of Discipline",
          summary: "Explain discipline and how it leads to personal and national success.",
          minutes: 40,
          notes: `## Meaning
**Discipline** is the ability to **control one's behaviour** and act according to rules, values and good judgement.

## Types
- **Self-discipline**: controlling oneself without being forced (e.g. studying without being told).
- **Imposed (external) discipline**: control enforced by others through rules and punishment (e.g. school rules, laws).
Self-discipline is the highest form because it comes from within.

## Attributes of a disciplined person
punctuality, obedience to rules, self-control (controlling anger and desires), respect for others, hard work, honesty, orderliness, good time management, decent dressing and speech.

## Benefits
| Individual | Society |
|---|---|
| success in studies and work | law and order |
| good reputation | productivity |
| healthy habits | reduced crime and corruption |
| good relationships | national development |

## Indiscipline and its consequences
**Indiscipline** is lack of self-control and disregard for rules: lateness, truancy, examination malpractice, disrespect, drug abuse, cultism, corruption.
Consequences: failure, punishment, expulsion, accidents, crime, poor national image.

## Promoting discipline
good parental upbringing, role models, clear and fair rules, rewards for good conduct, religious and moral teaching, consistent enforcement.`,
          examples: `**Example 1.** Tolu studies every evening without being told. What type of discipline does she show? *Answer:* **self-discipline**.

**Example 2.** Name one attribute of a disciplined person. *Answer:* **punctuality** (or self-control).

**Example 3.** Name one act of indiscipline in school. *Answer:* **truancy** (or lateness, cheating).`,
        },
        questions: [
          ["E", "The ability to control one's behaviour according to rules and values is", "discipline", "indiscipline", "greed", "apathy", "Discipline means self-control."],
          ["E", "Which is an attribute of a disciplined person?", "punctuality", "lateness", "truancy", "rudeness", "Disciplined people keep time."],
          ["E", "Staying away from school without permission is", "truancy", "discipline", "punctuality", "obedience", "It is an act of indiscipline."],
          ["M", "Controlling oneself without being forced is", "self-discipline", "imposed discipline", "punishment", "indiscipline", "It comes from within."],
          ["M", "Discipline enforced through rules and punishment is", "imposed discipline", "self-discipline", "anarchy", "apathy", "Others enforce it."],
          ["M", "Which is a consequence of indiscipline?", "failure and punishment", "promotion", "good reputation", "success", "Indiscipline brings negative results."],
          ["M", "Which helps to promote discipline among young people?", "good role models", "bad company", "drug abuse", "lack of rules", "Children copy good examples."],
          ["H", "Why is self-discipline considered the highest form of discipline?", "It comes from within and does not need enforcement.", "It needs constant punishment.", "It is enforced by the police.", "It applies only to adults.", "Inner control is more reliable."],
          ["H", "How does discipline contribute to national development?", "Disciplined citizens are productive and law-abiding.", "It increases corruption.", "It encourages laziness.", "It has no effect.", "Productivity drives development."],
          ["H", "Controlling one's anger during a quarrel shows", "self-control", "cowardice", "weakness", "indiscipline", "Self-control prevents harm."],
        ],
      },
      {
        week: 2,
        title: "Patriotism",
        subtopics: ["Meaning of patriotism", "Attributes of a patriotic citizen", "Ways of showing patriotism", "Factors that discourage patriotism"],
        objectives: ["Define patriotism", "Identify the attributes of a patriotic citizen", "Describe ways of showing patriotism", "Identify factors that discourage patriotism"],
        lesson: {
          title: "Love for Our Country",
          summary: "Explain patriotism and how citizens show it.",
          minutes: 40,
          notes: `## Meaning
**Patriotism** is **love, loyalty and devotion to one's country**, shown by working for its good and defending its interests.
A **patriot** is a person who loves and serves his or her country.

## Attributes of a patriotic citizen
honesty, loyalty, selflessness, obedience to the law, readiness to defend the nation, pride in national symbols and culture, commitment to national development.

## Ways of showing patriotism
- obeying laws and paying taxes
- respecting the **national flag, anthem and pledge**
- protecting **public property**
- buying **made-in-Nigeria** products
- voting and participating in elections
- serving the nation (NYSC, armed forces, public service) with honesty
- reporting crimes and corruption
- speaking well of Nigeria and representing it well abroad

## Nigerian patriots (examples)
Nationalists who fought for independence; heroes of democracy; public servants and ordinary citizens who serve with integrity (e.g. those who refused bribes or saved lives in emergencies).

## Factors that discourage patriotism
corruption, bad leadership, unemployment and poverty, injustice and marginalisation, tribalism, insecurity, lack of social amenities.

## Promoting patriotism
good governance, fair distribution of resources, national honours for deserving citizens, Civic Education, and leaders setting good examples.`,
          examples: `**Example 1.** A citizen reports a pipeline vandal to the police. What value does he show? *Answer:* **patriotism**.

**Example 2.** Name one way of showing patriotism. *Answer:* **buying made-in-Nigeria goods** (or obeying laws).

**Example 3.** Name one factor that discourages patriotism. *Answer:* **corruption** (or bad leadership).`,
        },
        questions: [
          ["E", "Love, loyalty and devotion to one's country is", "patriotism", "tribalism", "nepotism", "apathy", "Patriots love their country."],
          ["E", "A person who loves and serves his country is a", "patriot", "traitor", "vandal", "thief", "Patriots put the nation first."],
          ["E", "Which shows patriotism?", "respecting the national anthem", "insulting the flag", "evading tax", "vandalising public property", "Respect for symbols shows love for country."],
          ["M", "Reporting pipeline vandals to the police shows", "patriotism", "disloyalty", "greed", "cowardice", "It protects national assets."],
          ["M", "Which factor discourages patriotism?", "corruption", "good governance", "justice", "national honours", "Corruption breeds disillusionment."],
          ["M", "Buying made-in-Nigeria goods helps to", "develop local industries", "destroy local industries", "increase imports", "reduce jobs", "Local demand creates jobs."],
          ["M", "Which is an attribute of a patriotic citizen?", "selflessness", "selfishness", "disloyalty", "greed", "Patriots serve others."],
          ["H", "How can government promote patriotism?", "by providing good governance and fair distribution of resources", "by encouraging corruption", "by ignoring citizens' welfare", "by favouring one ethnic group", "Citizens love a fair nation."],
          ["H", "A person who betrays his country's interests is a", "traitor", "patriot", "hero", "nationalist", "Traitors act against their nation."],
          ["H", "National honours awarded to deserving citizens encourage", "patriotism", "tribalism", "apathy", "corruption", "Recognition inspires service."],
        ],
      },
      {
        week: 3,
        title: "Right attitude to work",
        subtopics: ["Meaning of right attitude to work", "Dignity of labour", "Attributes of a good worker", "Consequences of poor attitude to work"],
        objectives: ["Explain the right attitude to work", "Explain the dignity of labour", "Identify attributes of a good worker", "Describe consequences of a poor attitude to work"],
        lesson: {
          title: "Working with the Right Attitude",
          summary: "Explain the dignity of labour and qualities of a good worker.",
          minutes: 40,
          notes: `## Meaning
**Right attitude to work** means approaching any job with **diligence, honesty, punctuality and commitment**, and doing it to the best of one's ability.

## Dignity of labour
**Dignity of labour** is the belief that **all honest work deserves respect**, whether it is farming, cleaning, trading, teaching or engineering. No lawful job is too low for anyone.

## Attributes of a good worker
- **punctuality** and regular attendance
- **diligence** (hard work) and commitment
- **honesty** and integrity; no stealing of company property
- **obedience** to lawful instructions
- **cooperation** with colleagues
- **responsibility** and accountability
- willingness to learn and improve
- **respect** for customers and colleagues

## Benefits
| Worker | Organisation / nation |
|---|---|
| promotion and rewards | higher productivity |
| job security | quality goods and services |
| good reputation | economic growth |
| personal satisfaction | better image |

## Poor attitude to work
lateness, absenteeism, laziness, **"it's not my father's work" mentality**, stealing, bribery, poor-quality work, rudeness to customers.
Consequences: dismissal, loss of income, low productivity, business failure, poor public services.`,
          examples: `**Example 1.** What does "dignity of labour" mean? *Answer:* **All honest work deserves respect.**

**Example 2.** Name one attribute of a good worker. *Answer:* **punctuality** (or diligence, honesty).

**Example 3.** Name one consequence of a poor attitude to work. *Answer:* **dismissal** (or low productivity).`,
        },
        questions: [
          ["E", "The belief that all honest work deserves respect is", "dignity of labour", "nepotism", "laziness", "absenteeism", "No honest job is too low."],
          ["E", "Which is an attribute of a good worker?", "punctuality", "lateness", "absenteeism", "laziness", "Good workers keep time."],
          ["E", "Staying away from work without permission is", "absenteeism", "diligence", "punctuality", "loyalty", "It shows poor attitude to work."],
          ["M", "Which shows a right attitude to work?", "doing a job to the best of one's ability", "doing shoddy work", "sleeping on duty", "stealing company property", "Commitment gives quality."],
          ["M", "Which is a consequence of a poor attitude to work?", "low productivity", "promotion", "higher output", "good reputation", "Poor effort reduces output."],
          ["M", "Hard work and commitment to duty is called", "diligence", "indolence", "apathy", "negligence", "Diligent workers are productive."],
          ["M", "A cleaner who does her job well deserves respect because of", "dignity of labour", "tribalism", "nepotism", "federal character", "All honest work is dignified."],
          ["H", "The attitude that public work need not be done well because it belongs to no one leads to", "poor public services", "better services", "higher productivity", "more promotions", "Public property is neglected."],
          ["H", "How does the right attitude to work help the nation's economy?", "It increases productivity and quality of goods and services.", "It reduces output.", "It increases corruption.", "It has no effect.", "Productive workers grow the economy."],
          ["H", "A worker who uses the company's vehicle for private business without permission is guilty of", "misuse of company property", "diligence", "loyalty", "punctuality", "It is a form of dishonesty."],
        ],
      },
      {
        week: 4,
        title: "Interpersonal relationships",
        subtopics: ["Meaning of interpersonal relationships", "Types of relationships", "Skills for good relationships", "Causes of poor relationships"],
        objectives: ["Explain interpersonal relationships", "Identify types of relationships", "Describe skills that build healthy relationships", "Identify causes of poor relationships and ways to improve them"],
        lesson: {
          title: "Getting Along with Others",
          summary: "Build healthy relationships through good communication and respect.",
          minutes: 40,
          notes: `## Meaning
An **interpersonal relationship** is the **association or connection between two or more people**, such as family members, friends, classmates, neighbours or colleagues.

## Types
- **family relationships**: parents, siblings, relatives
- **friendships**: peers and classmates
- **school relationships**: student–teacher, student–student
- **work relationships**: colleagues, employer–employee
- **community relationships**: neighbours, religious groups

## Skills for healthy relationships
| Skill | Meaning |
|---|---|
| **effective communication** | speaking clearly and politely; listening carefully |
| **respect** | valuing others' opinions and dignity |
| **empathy** | understanding how others feel |
| **tolerance** | accepting differences |
| **trust and honesty** | being reliable and truthful |
| **conflict resolution** | settling disagreements peacefully |
| **cooperation** | working together |
| **assertiveness** | expressing one's views confidently without being rude |

## Causes of poor relationships
selfishness, pride, gossip, dishonesty, jealousy, disrespect, poor communication, bullying.

## Healthy vs unhealthy relationships
- Healthy: mutual respect, trust, support, freedom to say "no".
- Unhealthy: pressure to do wrong, control, bullying, abuse — seek help from a trusted adult.`,
          examples: `**Example 1.** Understanding how a friend feels after losing a parent is called **empathy**.

**Example 2.** Name one skill for good relationships. *Answer:* **effective communication** (or respect, tolerance).

**Example 3.** Name one cause of poor relationships. *Answer:* **gossip** (or jealousy, dishonesty).`,
        },
        questions: [
          ["E", "The connection between two or more people is", "an interpersonal relationship", "a constitution", "a census", "an election", "It involves interaction."],
          ["E", "Which helps to build good relationships?", "respect", "gossip", "jealousy", "bullying", "Respect values others."],
          ["E", "Which damages relationships?", "dishonesty", "trust", "tolerance", "empathy", "Lies destroy trust."],
          ["M", "Understanding how another person feels is", "empathy", "apathy", "pride", "jealousy", "Empathy shows care."],
          ["M", "Expressing one's views confidently without being rude is", "assertiveness", "aggression", "timidity", "arrogance", "It balances confidence and respect."],
          ["M", "Accepting people who are different from us is", "tolerance", "discrimination", "prejudice", "bullying", "Tolerance supports peace."],
          ["M", "Listening carefully and speaking politely are parts of", "effective communication", "gossip", "rumour-mongering", "bullying", "They improve understanding."],
          ["H", "A friend who pressures you to smoke is part of", "an unhealthy relationship", "a healthy relationship", "effective communication", "empathy", "Healthy friends respect your choices."],
          ["H", "Repeatedly threatening or hurting a weaker student is", "bullying", "cooperation", "assertiveness", "empathy", "Bullying harms relationships."],
          ["H", "The best way to settle a disagreement with a classmate is", "peaceful discussion", "fighting", "gossiping about them", "revenge", "Dialogue resolves conflict."],
        ],
      },
      {
        week: 5,
        title: "Self-esteem and assertiveness",
        subtopics: ["Meaning of self-esteem", "High and low self-esteem", "Assertiveness and refusal skills", "Building self-esteem"],
        objectives: ["Define self-esteem", "Distinguish high from low self-esteem", "Use assertiveness and refusal skills", "Suggest ways of building healthy self-esteem"],
        lesson: {
          title: "Believing in Yourself",
          summary: "Develop healthy self-esteem and the ability to say no to wrong.",
          minutes: 40,
          notes: `## Self-esteem
**Self-esteem** is the **value and respect a person has for himself or herself**.

| High (healthy) self-esteem | Low self-esteem |
|---|---|
| confident | feels worthless |
| accepts strengths and weaknesses | constantly compares self with others |
| can say "no" to wrong | easily pressured by peers |
| sets goals and works towards them | gives up easily |
| respects others | may bully or withdraw |
Healthy self-esteem is different from **pride/arrogance** (thinking one is better than others).

## Assertiveness
**Assertiveness** is expressing one's thoughts, feelings and rights **honestly and respectfully**.
- **Passive**: does not speak up; lets others decide.
- **Aggressive**: shouts, insults, forces views on others.
- **Assertive**: speaks firmly and politely — *"No, thank you. I do not smoke."*

## Refusal skills
1. Say **"No"** clearly and firmly.
2. Give a reason if you wish (*"I want to stay healthy."*).
3. Suggest an alternative (*"Let's play football instead."*).
4. **Walk away** if the pressure continues.
5. Keep friends who respect your choices.

## Building self-esteem
recognise your talents, set achievable goals, learn new skills, positive self-talk, avoid negative comparison (including on social media), spend time with supportive people, help others.`,
          examples: `**Example 1.** A student says, "No, thank you. I don't take drugs," and walks away. Which skill is shown? *Answer:* **refusal skill (assertiveness)**.

**Example 2.** Is shouting insults to get your way assertive or aggressive? *Answer:* **aggressive**.

**Example 3.** Name one way to build self-esteem. *Answer:* **setting and achieving small goals** (or learning new skills).`,
        },
        questions: [
          ["E", "The value and respect a person has for himself is", "self-esteem", "pride only", "greed", "apathy", "It is self-worth."],
          ["E", "Saying 'No' firmly to wrong behaviour is a", "refusal skill", "passive behaviour", "aggressive act", "weakness", "It resists pressure."],
          ["E", "A person with healthy self-esteem is usually", "confident", "worthless", "easily pressured", "hopeless", "Confidence reflects self-worth."],
          ["M", "Expressing one's views honestly and respectfully is", "assertiveness", "aggression", "passivity", "arrogance", "It is firm but polite."],
          ["M", "Shouting and insulting others to get one's way is", "aggressive behaviour", "assertive behaviour", "passive behaviour", "empathy", "It disrespects others."],
          ["M", "A person who never speaks up and lets others decide for him is", "passive", "assertive", "aggressive", "arrogant", "Passive people suppress their views."],
          ["M", "Which helps to build self-esteem?", "setting and achieving small goals", "constant comparison with others", "negative self-talk", "keeping bad company", "Success builds confidence."],
          ["H", "How does low self-esteem make young people vulnerable?", "They are easily pressured into harmful behaviour.", "They always refuse drugs.", "They never join gangs.", "They become leaders instantly.", "They seek acceptance at any cost."],
          ["H", "Healthy self-esteem differs from arrogance because arrogance involves", "thinking oneself better than others", "respecting others", "accepting weaknesses", "helping others", "Arrogance looks down on others."],
          ["H", "After saying 'No' to a harmful offer, if pressure continues you should", "walk away", "give in", "fight", "keep silent and stay", "Leaving removes the pressure."],
        ],
      },
      {
        week: 6,
        title: "Courage",
        subtopics: ["Meaning of courage", "Types of courage", "Attributes of a courageous person", "Courage and national development"],
        objectives: ["Define courage", "Distinguish physical from moral courage", "Identify attributes of a courageous person", "Explain how courage contributes to national development"],
        lesson: {
          title: "Standing Up for What Is Right",
          summary: "Explain physical and moral courage and their value to society.",
          minutes: 40,
          notes: `## Meaning
**Courage** is the ability to **face danger, difficulty, pain or opposition** without being overcome by fear, and to do what is right.
Courage is not the absence of fear; it is acting rightly **despite** fear.

## Types
| Type | Meaning | Example |
|---|---|---|
| **physical courage** | facing physical danger | rescuing a child from a burning house |
| **moral courage** | standing for truth and justice despite opposition or loss | refusing a bribe; reporting corruption; telling the truth |
| **intellectual courage** | accepting new ideas or admitting mistakes | changing a wrong opinion |

## Attributes of a courageous person
boldness, confidence, integrity, determination, readiness to accept responsibility, willingness to defend the weak.

## Courage is not recklessness
**Recklessness** is taking unnecessary risks without thought (e.g. dangerous driving). True courage is guided by **wisdom**.

## Courage and national development
- whistle-blowers who expose corruption
- journalists who report the truth
- soldiers and police who defend the nation
- citizens who resist electoral fraud
- health workers who serve during epidemics (e.g. those who helped contain Ebola in Nigeria in 2014)
Courage helps to fight injustice, protect lives and build a just society.`,
          examples: `**Example 1.** A student reports a classmate who is bullying others, even though she fears retaliation. What type of courage is this? *Answer:* **moral courage**.

**Example 2.** A man jumps into a river to save a drowning child. What type of courage is this? *Answer:* **physical courage**.

**Example 3.** How does courage differ from recklessness? *Answer:* Courage is **guided by wisdom**; recklessness takes **unnecessary risks**.`,
        },
        questions: [
          ["E", "The ability to face danger or difficulty and do what is right is", "courage", "cowardice", "greed", "apathy", "Courage overcomes fear."],
          ["E", "Rescuing a child from a burning house shows", "physical courage", "moral courage only", "cowardice", "recklessness", "It faces physical danger."],
          ["E", "Refusing a bribe despite pressure shows", "moral courage", "physical courage", "cowardice", "greed", "It stands for what is right."],
          ["M", "Courage is best described as", "acting rightly despite fear", "having no fear at all", "taking any risk", "avoiding all danger", "Brave people still feel fear."],
          ["M", "Taking unnecessary risks without thought is", "recklessness", "courage", "wisdom", "prudence", "It is not true courage."],
          ["M", "A journalist who reports the truth despite threats shows", "moral courage", "cowardice", "greed", "apathy", "It takes courage to report truthfully."],
          ["M", "Admitting a mistake and changing a wrong opinion shows", "intellectual courage", "physical courage", "pride", "cowardice", "It requires honesty with oneself."],
          ["H", "Whistle-blowers who expose corruption contribute to national development by", "fighting injustice and waste", "promoting corruption", "hiding crimes", "causing disunity", "Exposure leads to accountability."],
          ["H", "Nigerian health workers who helped contain Ebola in 2014 showed", "courage in service", "cowardice", "recklessness", "apathy", "They risked their lives to save others."],
          ["H", "Driving at top speed to show off is an example of", "recklessness", "moral courage", "physical courage", "wisdom", "It endangers lives needlessly."],
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
        title: "The Constitution",
        subtopics: ["Meaning of a constitution", "Sources of a constitution", "Features of the 1999 Constitution", "Importance of a constitution"],
        objectives: ["Define a constitution", "Identify sources of a constitution", "Describe features of the 1999 Constitution of Nigeria", "Explain the importance of a constitution"],
        lesson: {
          title: "The Supreme Law of the Land",
          summary: "Explain what a constitution is and describe Nigeria's 1999 Constitution.",
          minutes: 45,
          notes: `## Meaning
A **constitution** is the **body of fundamental laws, rules and principles** by which a country is governed. It defines the powers of government, the relationship between the arms and levels of government, and the rights and duties of citizens.

## Sources of a constitution
- **legislation** (Acts passed by the legislature)
- **conventions** (unwritten customs and practices)
- **judicial precedents** (court decisions)
- **constitutional conferences** and past constitutions
- **customs** and traditions
- **writings of experts** on law and government

## The 1999 Constitution of Nigeria
- came into force on **29 May 1999**
- **supreme** law: any law inconsistent with it is void (Section 1)
- establishes a **federal** system and a **presidential** system of government
- provides for **separation of powers** (Sections 4, 5 and 6)
- contains **fundamental rights** (Chapter IV)
- contains **Fundamental Objectives and Directive Principles of State Policy** (Chapter II)
- sets **citizenship** rules (Chapter III)
- is **written** and **rigid** (amended by a special procedure involving the National Assembly and State Houses of Assembly)
- has been amended several times

## Importance
limits the powers of government; protects citizens' rights; shares power among arms and levels of government; provides for elections and change of government; promotes stability, order and national unity.`,
          examples: `**Example 1.** What is the supreme law of Nigeria? *Answer:* the **1999 Constitution**.

**Example 2.** When did the 1999 Constitution come into force? *Answer:* **29 May 1999**.

**Example 3.** Name one importance of a constitution. *Answer:* It **protects citizens' rights** (or limits government power).`,
        },
        questions: [
          ["E", "The body of fundamental laws by which a country is governed is its", "constitution", "budget", "census", "manifesto", "It is the supreme law."],
          ["E", "Nigeria's current constitution is the", "1999 Constitution", "1960 Constitution", "1914 Constitution", "1979 Constitution", "It came into force in 1999."],
          ["E", "Any law inconsistent with the Constitution is", "void", "superior", "compulsory", "permanent", "The Constitution is supreme."],
          ["M", "The 1999 Constitution came into force on", "29 May 1999", "1 October 1960", "12 June 1993", "1 January 2000", "It marked the return to civil rule."],
          ["M", "Unwritten customs and practices that form part of a constitution are", "conventions", "decrees", "bye-laws", "treaties only", "Conventions guide political conduct."],
          ["M", "Fundamental rights are contained in which chapter of the 1999 Constitution?", "Chapter IV", "Chapter I", "Chapter III", "Chapter VIII", "Chapter IV lists them."],
          ["M", "The 1999 Constitution establishes which system of government?", "presidential", "parliamentary", "monarchical", "military", "An executive President heads government."],
          ["H", "The 1999 Constitution is described as rigid because", "it requires a special procedure to amend", "it can never be amended", "it is unwritten", "any court can change it", "Amendment needs National and State Assemblies."],
          ["H", "Chapter II of the 1999 Constitution deals with", "Fundamental Objectives and Directive Principles of State Policy", "fundamental rights", "citizenship", "the judiciary", "It sets policy goals."],
          ["H", "A major importance of a constitution is that it", "limits the powers of government", "gives leaders unlimited power", "abolishes elections", "removes citizens' rights", "It prevents abuse of power."],
        ],
      },
      {
        week: 2,
        title: "Types of constitution",
        subtopics: ["Written and unwritten constitutions", "Rigid and flexible constitutions", "Federal and unitary constitutions", "Presidential and parliamentary constitutions"],
        objectives: ["Distinguish written from unwritten constitutions", "Distinguish rigid from flexible constitutions", "Distinguish federal from unitary constitutions", "Compare presidential and parliamentary systems"],
        lesson: {
          title: "Kinds of Constitutions",
          summary: "Classify constitutions and give examples of each type.",
          minutes: 45,
          notes: `## Written and unwritten
| Written | Unwritten |
|---|---|
| contained in a single document | found in many sources: statutes, conventions, court decisions |
| e.g. Nigeria, USA, Ghana | e.g. United Kingdom |

## Rigid and flexible
| Rigid | Flexible |
|---|---|
| **special, difficult procedure** to amend | amended by the **ordinary** law-making process |
| provides stability | adapts easily to change |
| e.g. Nigeria, USA | e.g. United Kingdom |

## Federal and unitary
| Federal | Unitary |
|---|---|
| power **shared** between central and component units (states) | power concentrated in the **central** government |
| suits large, diverse countries | suits small or homogeneous countries |
| e.g. Nigeria, USA, India | e.g. UK, France, Ghana |

## Presidential and parliamentary
| Presidential | Parliamentary |
|---|---|
| **executive President** is head of state and head of government | head of state (monarch/president) separate from head of government (**Prime Minister**) |
| strict **separation of powers** | fusion of executive and legislature |
| fixed term | PM remains in office while supported by parliament |
| e.g. Nigeria (since 1979, restored 1999), USA | e.g. UK; Nigeria in the First Republic (1960–1966) |`,
          examples: `**Example 1.** Is the UK constitution written or unwritten? *Answer:* **unwritten**.

**Example 2.** What type of constitution shares power between central and state governments? *Answer:* a **federal** constitution.

**Example 3.** Which system did Nigeria use in the First Republic? *Answer:* the **parliamentary** system.`,
        },
        questions: [
          ["E", "A constitution contained in a single document is", "written", "unwritten", "flexible only", "customary", "It is codified."],
          ["E", "The United Kingdom has an", "unwritten constitution", "written constitution", "military constitution", "federal constitution", "It is found in many sources."],
          ["E", "A constitution that shares power between central and state governments is", "federal", "unitary", "flexible", "unwritten", "Power is divided."],
          ["M", "A constitution that requires a special procedure to amend is", "rigid", "flexible", "unwritten", "customary", "Amendment is difficult."],
          ["M", "A constitution amended by the ordinary law-making process is", "flexible", "rigid", "federal", "written only", "It changes easily."],
          ["M", "In a unitary system, power is concentrated in the", "central government", "state governments", "local governments equally", "traditional rulers", "The centre holds most power."],
          ["M", "In a parliamentary system, the head of government is the", "Prime Minister", "President always", "Chief Justice", "Speaker", "The PM leads government."],
          ["H", "Nigeria operated a parliamentary system during the", "First Republic (1960–1966)", "Fourth Republic", "Second Republic", "colonial era only", "It adopted a presidential system in 1979."],
          ["H", "A federal constitution is suitable for", "large countries with diverse peoples", "very small homogeneous countries only", "countries with one ethnic group only", "city states", "It accommodates diversity."],
          ["H", "In a presidential system, the President is", "both head of state and head of government", "only a ceremonial head", "chosen by parliament daily", "a monarch", "Executive powers are combined in the President."],
        ],
      },
      {
        week: 3,
        title: "Democracy: meaning, types and pillars",
        subtopics: ["Meaning of democracy", "Direct and representative democracy", "Pillars of democracy", "Benefits of democracy"],
        objectives: ["Define democracy", "Distinguish direct from representative democracy", "Identify the pillars of democracy", "Explain the benefits of democracy"],
        lesson: {
          title: "Government by the People",
          summary: "Explain democracy, its types and the pillars that support it.",
          minutes: 45,
          notes: `## Meaning
**Democracy** is a system of government in which **power belongs to the people**, who rule directly or through **elected representatives**. The word comes from Greek *demos* (people) and *kratos* (rule).
Abraham Lincoln: "government of the people, by the people, for the people."

## Types
| Direct democracy | Representative (indirect) democracy |
|---|---|
| citizens **directly** make decisions in assemblies | citizens **elect representatives** to make decisions for them |
| practised in ancient **Athens** and small communities | practised in modern states such as Nigeria |
| possible only with small populations | suitable for large populations |

## Pillars of democracy
- **free, fair and periodic elections**
- **rule of law**
- **separation of powers** and checks and balances
- **independent judiciary**
- **respect for fundamental human rights**
- **free press** (mass media)
- **political parties** and opposition
- **civil society** organisations
- **constitutionalism**
- **popular participation**

## Benefits
accountability of leaders, protection of rights, peaceful change of government, citizens' participation, stability and development.

## Democracy Day
Nigeria celebrates **Democracy Day on 12 June**, honouring the **12 June 1993** election (declared in 2018 and first observed as a public holiday in 2019). Previously it was celebrated on 29 May.`,
          examples: `**Example 1.** What does the Greek word *demos* mean? *Answer:* **people**.

**Example 2.** What type of democracy does Nigeria practise? *Answer:* **representative democracy**.

**Example 3.** Name one pillar of democracy. *Answer:* an **independent judiciary** (or free press, rule of law).`,
        },
        questions: [
          ["E", "A system of government in which power belongs to the people is", "democracy", "dictatorship", "monarchy", "oligarchy", "People rule directly or through representatives."],
          ["E", "The Greek word 'demos' means", "people", "rule", "king", "law", "Democracy is rule by the people."],
          ["E", "Nigeria practises", "representative democracy", "direct democracy", "absolute monarchy", "military rule", "Citizens elect representatives."],
          ["M", "Direct democracy was practised in ancient", "Athens", "Rome under emperors", "Egypt under pharaohs", "Babylon", "Athenian citizens voted in assemblies."],
          ["M", "Which is a pillar of democracy?", "free press", "censorship", "one-man rule", "rigged elections", "A free press informs citizens."],
          ["M", "Nigeria's Democracy Day is celebrated on", "12 June", "29 May", "1 October", "15 January", "It honours the 1993 election."],
          ["M", "Representative democracy is suitable for", "large populations", "only very small villages", "families", "no country", "Not everyone can meet in one assembly."],
          ["H", "Abraham Lincoln defined democracy as government", "of the people, by the people, for the people", "of the rich, by the rich, for the rich", "of the army, by the army", "of kings, by kings", "It emphasises popular rule."],
          ["H", "A benefit of democracy is", "peaceful change of government through elections", "rule by force", "suppression of the press", "no elections", "Elections allow peaceful transitions."],
          ["H", "Which is NOT a pillar of democracy?", "military dictatorship", "rule of law", "independent judiciary", "periodic elections", "Dictatorship is undemocratic."],
        ],
      },
      {
        week: 4,
        title: "Rule of law",
        subtopics: ["Meaning of rule of law", "Principles of rule of law", "Limitations to rule of law", "Importance of rule of law"],
        objectives: ["Explain the rule of law", "State the principles of the rule of law", "Identify limitations to the rule of law", "Explain the importance of the rule of law"],
        lesson: {
          title: "No One Is Above the Law",
          summary: "Explain the rule of law, its principles and its limitations.",
          minutes: 45,
          notes: `## Meaning
The **rule of law** means that the **law is supreme**: government and citizens alike are subject to the law, and no one is above it.
The concept is associated with the British jurist **A. V. Dicey**.

## Principles (Dicey's three pillars)
1. **Supremacy of the law** — no one can be punished except for a breach of law established in a court.
2. **Equality before the law** — all persons, rich or poor, leaders or ordinary citizens, are subject to the same law and courts.
3. **Fundamental rights** — citizens' rights are protected by law and the courts.

## Features in practice
fair hearing; presumption of innocence until proven guilty; independent courts; no arbitrary arrest; obedience to court orders.

## Limitations to the rule of law
- **immunity** of certain officials (e.g. the President, Vice-President, governors and deputy governors cannot be sued or prosecuted while in office — Section 308)
- **diplomatic immunity**
- **state of emergency**
- **military rule** (suspension of the Constitution)
- **delegated legislation** and administrative discretion
- corruption, ignorance of rights, poverty (inability to afford lawyers)
- disobedience of court orders by government

## Importance
protects rights, prevents abuse of power, promotes justice, peace and investment, and strengthens democracy.`,
          examples: `**Example 1.** Who is associated with the concept of the rule of law? *Answer:* **A. V. Dicey**.

**Example 2.** Name one principle of the rule of law. *Answer:* **equality before the law**.

**Example 3.** Name one limitation to the rule of law in Nigeria. *Answer:* **immunity** of certain officials under Section 308.`,
        },
        questions: [
          ["E", "The principle that no one is above the law is the", "rule of law", "federal character", "separation of powers only", "census", "The law is supreme."],
          ["E", "The rule of law is associated with", "A. V. Dicey", "Lord Lugard", "Karl Marx", "Charles Darwin", "Dicey explained its principles."],
          ["E", "Equality before the law means", "everyone is subject to the same law", "the rich are above the law", "leaders are above the law", "only the poor obey the law", "The same law applies to all people."],
          ["M", "Which is a principle of the rule of law?", "supremacy of the law", "rule by force", "arbitrary arrest", "secret trials", "The law is above all."],
          ["M", "Being regarded as innocent until proven guilty is called", "presumption of innocence", "immunity", "delegated legislation", "martial law", "It protects accused persons."],
          ["M", "Which is a limitation to the rule of law?", "immunity of certain officials", "independent judiciary", "fair hearing", "free press", "Immunity shields some officials from prosecution."],
          ["M", "The section of the 1999 Constitution that grants immunity to some executive officers is", "Section 308", "Section 1", "Section 33", "Section 24", "Section 308 provides immunity."],
          ["H", "How does military rule limit the rule of law?", "The Constitution is suspended and rule is by decree.", "It strengthens the courts.", "It protects all rights.", "It conducts regular elections.", "Decrees replace constitutional order."],
          ["H", "Poverty limits the rule of law because", "poor people may not afford lawyers to defend their rights", "poor people are above the law", "the law does not apply to them", "courts are free for the rich only", "Access to justice costs money."],
          ["H", "Government disobedience of court orders", "undermines the rule of law", "strengthens the rule of law", "promotes justice", "has no effect", "Government must also obey the law."],
        ],
      },
      {
        week: 5,
        title: "Elections and the electoral process",
        subtopics: ["Meaning and types of elections", "The electoral process", "Electoral bodies", "Free and fair elections"],
        objectives: ["Define elections and identify types", "Describe the stages of the electoral process", "Identify electoral bodies and their functions", "State conditions for free and fair elections"],
        lesson: {
          title: "How Leaders Are Chosen",
          summary: "Describe the electoral process and conditions for credible elections.",
          minutes: 45,
          notes: `## Meaning
An **election** is the process by which **qualified citizens choose their leaders** or decide on issues by **voting**.

## Types of elections
| Type | Meaning |
|---|---|
| **general election** | elections held nationwide at the end of a tenure |
| **by-election** | held to fill a vacant seat (death, resignation, removal) |
| **primary election** | held within a party to choose its candidates |
| **run-off election** | a second round between leading candidates when no one meets the winning requirements |
| **referendum** | citizens vote directly on a specific issue |

## The electoral process
1. **delimitation** of constituencies
2. **voter registration** and issuance of Permanent Voter Cards (PVCs)
3. **party primaries** and nomination of candidates
4. **campaigns**
5. **voting** by **secret ballot**
6. **counting, collation and declaration** of results
7. **election petitions** to tribunals and courts

## Electoral bodies
- **INEC**: federal, state and FCT elections; registers political parties; voter registration.
- **SIECs**: local government elections.
Under the Electoral Act, Nigeria uses technology such as **BVAS** (Bimodal Voter Accreditation System) for accreditation and result transmission.

## Conditions for free and fair elections
independent electoral body; secret ballot; universal adult suffrage (18+); impartial security agencies; free press; absence of violence and vote buying; accurate voter register; independent judiciary to settle disputes; voter education.`,
          examples: `**Example 1.** An election held to fill a vacant seat after a senator's death is a **by-election**.

**Example 2.** Which body conducts presidential elections in Nigeria? *Answer:* **INEC**.

**Example 3.** Name one condition for a free and fair election. *Answer:* **secret ballot** (or an independent electoral body).`,
        },
        questions: [
          ["E", "The process by which citizens choose leaders by voting is", "an election", "a census", "a coup", "a referendum on budgets only", "Voting selects leaders."],
          ["E", "The body that conducts presidential elections in Nigeria is", "INEC", "SIEC", "NPC", "NCC", "It is the national electoral body."],
          ["E", "Voting in secret so that no one knows your choice is", "secret ballot", "open ballot", "vote buying", "rigging", "Secrecy protects voters."],
          ["M", "An election held to fill a vacant seat is a", "by-election", "general election", "primary election", "referendum", "It fills vacancies."],
          ["M", "An election held within a party to choose its candidate is a", "primary election", "general election", "by-election", "run-off", "Parties choose flag-bearers."],
          ["M", "Citizens voting directly on a specific issue is a", "referendum", "by-election", "primary election", "census", "It decides an issue, not a candidate."],
          ["M", "Local government elections are conducted by", "SIECs", "INEC", "the police", "NYSC", "State Independent Electoral Commissions."],
          ["H", "A second round of voting between leading candidates when no one meets the requirements is a", "run-off election", "by-election", "primary election", "referendum", "It decides the winner."],
          ["H", "The device used for voter accreditation in recent Nigerian elections is the", "BVAS", "ATM", "POS machine", "calculator", "Bimodal Voter Accreditation System."],
          ["H", "Which is a condition for free and fair elections?", "an independent electoral body", "vote buying", "partial security agencies", "violence", "Independence ensures credibility."],
        ],
      },
      {
        week: 6,
        title: "Political parties",
        subtopics: ["Meaning of political parties", "Functions of political parties", "Party systems", "Registration of political parties in Nigeria"],
        objectives: ["Define a political party", "State the functions of political parties", "Distinguish types of party systems", "Explain the registration and regulation of parties in Nigeria"],
        lesson: {
          title: "Parties in a Democracy",
          summary: "Explain political parties, their functions and party systems.",
          minutes: 45,
          notes: `## Meaning
A **political party** is an **organised group of people with common political ideas** who seek to **win elections and control government** to implement their programmes.

## Functions
- **nominating candidates** for elections
- **political education** and mobilisation of voters
- **formulating policies** and manifestos
- **forming government** when they win
- acting as **opposition** to check the ruling party
- **aggregating interests** of different groups
- recruiting and training **leaders**
- promoting **national unity** (parties must have a national spread)

## Party systems
| System | Meaning | Example |
|---|---|---|
| **one-party** | only one party allowed | former USSR, China |
| **two-party** | two dominant parties alternate in power | USA (Democrats, Republicans) |
| **multi-party** | many parties compete | Nigeria, India |
Nigeria operated a **two-party system** (SDP and NRC) during the Babangida transition (1989–1993).

## Registration in Nigeria
Political parties are **registered and regulated by INEC**. Requirements include: a national office in Abuja, open membership to all Nigerians, a name and symbol without ethnic or religious connotation, and a constitution filed with INEC. Parties must not keep **armed groups**.

## Manifesto
A **manifesto** is a document stating a party's **programmes and promises** to voters.`,
          examples: `**Example 1.** What is a manifesto? *Answer:* A document stating a party's **programmes and promises**.

**Example 2.** Which body registers political parties in Nigeria? *Answer:* **INEC**.

**Example 3.** What type of party system does Nigeria operate? *Answer:* a **multi-party** system.`,
        },
        questions: [
          ["E", "An organised group seeking to win elections and control government is", "a political party", "a trade union", "a pressure group", "a cooperative", "Parties contest elections."],
          ["E", "A document stating a party's programmes and promises is its", "manifesto", "constitution of the country", "budget", "census report", "Voters judge parties by manifestos."],
          ["E", "Political parties in Nigeria are registered by", "INEC", "NAFDAC", "NPC", "EFCC", "INEC regulates parties."],
          ["M", "Nigeria operates a", "multi-party system", "one-party system", "no-party system", "two-party system only", "Many parties compete."],
          ["M", "Which is a function of political parties?", "nominating candidates for elections", "printing money", "adjudicating cases", "commanding the army", "Parties field candidates."],
          ["M", "A party that criticises and checks the ruling party is the", "opposition party", "ruling party", "military", "judiciary", "Opposition promotes accountability."],
          ["M", "The USA is an example of a", "two-party system", "one-party system", "no-party system", "military system", "Democrats and Republicans dominate."],
          ["H", "During the Babangida transition, Nigeria had two parties:", "SDP and NRC", "PDP and APC", "NPC and NCNC", "UPN and NPN", "They were created by government."],
          ["H", "A requirement for registering a party in Nigeria is", "a name and symbol without ethnic or religious connotation", "membership restricted to one tribe", "an armed wing", "headquarters abroad", "Parties must be national in outlook."],
          ["H", "Political parties promote national unity by", "requiring membership from all parts of the country", "restricting membership to one religion", "encouraging ethnic violence", "ignoring minorities", "National spread brings people together."],
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
        title: "Popular participation",
        subtopics: ["Meaning of popular participation", "Forms of popular participation", "Importance of popular participation", "Factors limiting participation"],
        objectives: ["Explain popular participation", "Identify forms of participation in governance", "Explain the importance of popular participation", "Identify factors that limit participation"],
        lesson: {
          title: "Everyone Has a Part to Play",
          summary: "Explain how citizens participate in governance and why it matters.",
          minutes: 40,
          notes: `## Meaning
**Popular participation** is the **active involvement of citizens** in the political, social and economic affairs of their community and country.

## Forms of participation
- **voting** in elections
- contesting for **political office**
- joining **political parties** and campaigns
- joining **pressure groups** and civil society organisations
- attending **town hall meetings** and public hearings
- writing **petitions** and letters to leaders and newspapers
- peaceful **protests** and demonstrations (lawful)
- paying **taxes**
- community development and **volunteering**
- monitoring government projects and budgets

## Importance
- legitimacy of government
- **accountability** of leaders
- better policies that reflect citizens' needs
- protection of rights
- stability and national development
- political education and awareness

## Factors limiting participation
illiteracy and ignorance; poverty; **political apathy**; violence and insecurity; electoral fraud (loss of trust); religious and cultural barriers (e.g. against women); corruption; lack of information.

## Encouraging participation
voter education, credible elections, security, inclusion of women, youths and persons with disabilities, and accountable leadership.`,
          examples: `**Example 1.** Name one form of popular participation. *Answer:* **voting** (or joining a political party).

**Example 2.** Give one importance of popular participation. *Answer:* It makes leaders **accountable**.

**Example 3.** Name one factor that limits participation. *Answer:* **illiteracy** (or violence, apathy).`,
        },
        questions: [
          ["E", "The active involvement of citizens in public affairs is", "popular participation", "apathy", "dictatorship", "censorship", "Citizens take part in governance."],
          ["E", "Which is a form of popular participation?", "voting", "sleeping on election day", "destroying ballot boxes", "tax evasion", "Voting chooses leaders."],
          ["E", "Attending town hall meetings with leaders is a form of", "participation", "apathy", "rigging", "vandalism", "Citizens express their views."],
          ["M", "Which is an importance of popular participation?", "accountability of leaders", "more corruption", "less legitimacy", "voter apathy", "Active citizens hold leaders accountable."],
          ["M", "Which factor limits popular participation?", "electoral violence", "voter education", "credible elections", "security", "Fear keeps people away."],
          ["M", "Writing petitions to leaders is a", "lawful means of participation", "crime", "form of rigging", "sign of apathy", "Petitions communicate grievances."],
          ["M", "Paying taxes is also a form of", "civic participation", "apathy", "corruption", "vandalism", "It funds government."],
          ["H", "How does popular participation give legitimacy to a government?", "Leaders chosen by many citizens are accepted as rightful rulers.", "It weakens government.", "It removes elections.", "It has no effect.", "Broad support confers legitimacy."],
          ["H", "Which measure encourages greater participation by women?", "inclusion and removal of cultural barriers", "excluding women from politics", "increasing violence", "limiting education", "Inclusion widens participation."],
          ["H", "Monitoring the execution of government projects in one's community is", "a form of participation that promotes accountability", "illegal", "a form of apathy", "rigging", "Citizens can track public spending."],
        ],
      },
      {
        week: 2,
        title: "Political apathy",
        subtopics: ["Meaning of political apathy", "Causes of political apathy", "Effects of political apathy", "Solutions to political apathy"],
        objectives: ["Define political apathy", "Identify causes of political apathy", "Explain effects of political apathy on democracy", "Suggest solutions to political apathy"],
        lesson: {
          title: "When Citizens Lose Interest",
          summary: "Explain political apathy, its causes, effects and remedies.",
          minutes: 40,
          notes: `## Meaning
**Political apathy** is the **lack of interest or unwillingness of citizens to take part in political activities** such as voting, attending meetings or contesting elections.

## Signs
low voter turnout, failure to register, indifference to government policies, refusal to join parties or civic groups.

## Causes
| Cause | Explanation |
|---|---|
| **electoral fraud** | people believe their votes do not count |
| **violence and insecurity** | fear of thugs at polling units |
| **bad governance and broken promises** | loss of trust in politicians |
| **poverty** | people focus on survival |
| **illiteracy and ignorance** | people do not understand the process |
| **corruption** | politics seen as a "dirty game" |
| **religious or cultural beliefs** | some discourage participation |
| **poor logistics** | long queues, late materials |

## Effects
- **bad leaders** emerge because good citizens stay away
- low **legitimacy** of government
- poor **accountability**
- minority decides for the majority
- weak democracy

## Solutions
- credible, **free and fair** elections
- **voter education** and civic education
- **security** during elections
- **good governance** and fulfilment of promises
- penalties for electoral offences
- inclusion of youths and women
- use of technology to improve transparency`,
          examples: `**Example 1.** Many eligible voters stay at home on election day because they believe results will be rigged. What is this? *Answer:* **political apathy**.

**Example 2.** Name one cause of political apathy. *Answer:* **electoral violence** (or rigging, broken promises).

**Example 3.** Name one solution to political apathy. *Answer:* **conducting credible elections** (or voter education).`,
        },
        questions: [
          ["E", "Lack of interest in political activities is", "political apathy", "patriotism", "participation", "activism", "Apathetic citizens stay away."],
          ["E", "Low voter turnout is a sign of", "political apathy", "high participation", "good governance", "patriotism", "Few people vote."],
          ["E", "Which is a cause of political apathy?", "electoral violence", "voter education", "credible elections", "good governance", "Fear keeps voters away."],
          ["M", "When citizens believe their votes do not count because of rigging, this leads to", "political apathy", "high turnout", "patriotism", "national unity", "Loss of trust reduces participation."],
          ["M", "Which is an effect of political apathy?", "emergence of bad leaders", "better leaders", "stronger democracy", "higher legitimacy", "Good citizens stay away."],
          ["M", "Which is a solution to political apathy?", "voter education", "electoral violence", "rigging", "broken promises", "Education encourages participation."],
          ["M", "Broken campaign promises by politicians cause", "loss of trust and apathy", "more enthusiasm", "higher turnout", "national unity", "Citizens become disillusioned."],
          ["H", "How does political apathy weaken democracy?", "A minority ends up deciding for the majority.", "It strengthens democracy.", "It increases accountability.", "It improves legitimacy.", "Few voices decide outcomes."],
          ["H", "Why does poverty contribute to political apathy?", "People focus on daily survival rather than politics.", "Poor people love politics.", "Poverty improves participation.", "It has no effect.", "Survival takes priority."],
          ["H", "Using technology to transmit results transparently can reduce apathy by", "restoring confidence that votes count", "increasing rigging", "discouraging voters", "hiding results", "Transparency builds trust."],
        ],
      },
      {
        week: 3,
        title: "Civil society organisations",
        subtopics: ["Meaning of civil society", "Types of civil society organisations", "Functions of civil society", "Challenges of civil society in Nigeria"],
        objectives: ["Define civil society", "Identify types of civil society organisations", "Explain the functions of civil society", "Identify challenges facing civil society in Nigeria"],
        lesson: {
          title: "Citizens Organised for the Common Good",
          summary: "Explain civil society organisations and their roles in democracy.",
          minutes: 40,
          notes: `## Meaning
**Civil society** refers to **organised groups of citizens outside government and business** that work to promote public interest, rights and development. They are **non-governmental** and **non-profit**.

## Types of civil society organisations (CSOs)
| Type | Examples |
|---|---|
| **non-governmental organisations (NGOs)** | human rights, health and education NGOs |
| **labour unions** | Nigeria Labour Congress (NLC), NUT |
| **professional associations** | Nigerian Bar Association (NBA), Nigerian Medical Association (NMA) |
| **student bodies** | National Association of Nigerian Students (NANS) |
| **religious organisations** | CAN, JNI (Jama'atu Nasril Islam) |
| **women's and youth groups** | women's associations, youth councils |
| **community-based organisations** | town unions, cooperative societies |
| **media organisations** | Nigeria Union of Journalists (NUJ) |

## Functions
- **advocacy** for good governance and policy change
- **protection of human rights**
- **voter education** and election monitoring
- checking **corruption** and demanding accountability
- providing **social services** (health, education, relief)
- **mobilising** citizens
- serving as a **link** between government and people
- peace building and conflict resolution

## Challenges in Nigeria
inadequate funding, government hostility or restrictions, internal divisions, lack of transparency in some CSOs, insecurity, and being hijacked by politicians.`,
          examples: `**Example 1.** Is the Nigerian Bar Association a civil society organisation? *Answer:* **Yes** — it is a professional association.

**Example 2.** Name one function of civil society. *Answer:* **election monitoring** (or advocacy).

**Example 3.** Name one challenge of CSOs in Nigeria. *Answer:* **inadequate funding**.`,
        },
        questions: [
          ["E", "Organised citizens' groups outside government and business are called", "civil society", "the executive", "the judiciary", "the military", "They serve public interest."],
          ["E", "Which is a civil society organisation?", "Nigeria Labour Congress", "the Senate", "the Supreme Court", "the Nigerian Army", "The NLC is a labour union."],
          ["E", "Civil society organisations are usually", "non-profit", "profit-making companies", "government ministries", "armed groups", "They do not aim at profit."],
          ["M", "Which is a function of civil society?", "election monitoring", "making laws", "declaring war", "printing currency", "CSOs observe elections."],
          ["M", "The Nigerian Bar Association is a", "professional association", "political party", "government agency", "military body", "It represents lawyers."],
          ["M", "NANS represents", "Nigerian students", "Nigerian doctors", "Nigerian lawyers", "Nigerian soldiers", "National Association of Nigerian Students."],
          ["M", "Campaigning for changes in government policy is called", "advocacy", "rigging", "censorship", "taxation", "CSOs advocate reforms."],
          ["H", "Which is a challenge facing civil society in Nigeria?", "inadequate funding", "too much money", "government control of all their activities by law", "lack of any members", "Many CSOs lack resources."],
          ["H", "How does civil society help to fight corruption?", "by demanding transparency and accountability", "by stealing public funds", "by hiding information", "by rigging elections", "They expose wrongdoing."],
          ["H", "Civil society serves as a link between", "government and the people", "the army and the police", "two foreign countries", "banks and markets only", "They carry citizens' concerns to government."],
        ],
      },
      {
        week: 4,
        title: "Youth empowerment",
        subtopics: ["Meaning of youth empowerment", "Youth empowerment skills", "Government and non-governmental programmes", "Benefits of youth empowerment"],
        objectives: ["Explain youth empowerment", "Identify empowerment skills", "Describe empowerment programmes in Nigeria", "Explain the benefits of youth empowerment"],
        lesson: {
          title: "Empowering Young People",
          summary: "Explain youth empowerment and the skills and programmes that support it.",
          minutes: 40,
          notes: `## Meaning
**Youth empowerment** is the process of **equipping young people with knowledge, skills, resources and opportunities** so that they can become self-reliant and contribute to society.
Nigeria's National Youth Policy defines youths as persons aged about **15 to 29 years** (as updated in recent policy).

## Empowerment skills
| Category | Examples |
|---|---|
| **vocational/technical skills** | tailoring, carpentry, welding, hairdressing, catering, solar installation, auto repair |
| **digital skills** | computer use, coding, graphic design, digital marketing, data analysis |
| **agricultural skills** | poultry, fish farming, crop production, agro-processing |
| **entrepreneurial skills** | business planning, bookkeeping, marketing |
| **life skills** | communication, leadership, decision making, time management |

## Programmes
- **NYSC Skills Acquisition and Entrepreneurship Development (SAED)**
- **National Directorate of Employment (NDE)** vocational training
- **SMEDAN** support for small businesses
- **Bank of Industry** and microfinance loans
- state skills acquisition centres
- NGO and private-sector training programmes

## Benefits
reduces unemployment and poverty; reduces crime, cultism and drug abuse; promotes self-reliance; increases production; develops future leaders; reduces youth restiveness.

## Role of young people
take learning seriously, acquire skills, be patient and diligent, avoid get-rich-quick schemes.`,
          examples: `**Example 1.** Name one vocational skill for youth empowerment. *Answer:* **tailoring** (or welding, catering).

**Example 2.** Name one government agency that trains youths in vocational skills. *Answer:* the **National Directorate of Employment (NDE)**.

**Example 3.** Give one benefit of youth empowerment. *Answer:* **reduced unemployment** (or crime).`,
        },
        questions: [
          ["E", "Equipping young people with skills and opportunities is", "youth empowerment", "youth restiveness", "child labour", "migration", "It makes youths self-reliant."],
          ["E", "Which is a vocational skill?", "tailoring", "gossiping", "gambling", "idling", "It can earn an income."],
          ["E", "Youth empowerment helps to reduce", "unemployment", "production", "self-reliance", "skills", "Skilled youths find or create jobs."],
          ["M", "Which government agency provides vocational training for unemployed people?", "NDE", "INEC", "NDLEA", "NPC", "The National Directorate of Employment."],
          ["M", "Graphic design and coding are examples of", "digital skills", "agricultural skills", "traditional crafts only", "sports skills", "They use computers."],
          ["M", "The NYSC programme that trains corps members in business skills is", "SAED", "BVAS", "UBE", "ECOMOG", "Skills Acquisition and Entrepreneurship Development."],
          ["M", "Which agency supports small and medium enterprises in Nigeria?", "SMEDAN", "FRSC", "NAFDAC", "NIMC", "It promotes small businesses."],
          ["H", "How does youth empowerment reduce crime?", "Busy, self-reliant youths are less likely to engage in crime.", "It increases idleness.", "It encourages cultism.", "It has no effect.", "Opportunities reduce temptation."],
          ["H", "Communication, leadership and decision making are examples of", "life skills", "vocational skills only", "farming skills", "technical drawing skills", "They help in all areas of life."],
          ["H", "Which attitude helps a young person benefit from empowerment programmes?", "diligence and patience", "seeking quick wealth", "laziness", "dishonesty", "Skills take time to master."],
        ],
      },
      {
        week: 5,
        title: "Human rights violations and redress",
        subtopics: ["Meaning of human rights violations", "Examples of violations", "Ways of seeking redress", "Institutions that protect human rights"],
        objectives: ["Explain human rights violations", "Identify common violations in Nigeria", "Describe ways of seeking redress", "Identify institutions that protect human rights"],
        lesson: {
          title: "When Rights Are Abused",
          summary: "Identify human rights violations and how victims can seek justice.",
          minutes: 40,
          notes: `## Meaning
A **human rights violation** occurs when a person's **fundamental rights are denied or abused** by the state, officials, groups or individuals.

## Examples in Nigeria
| Right | Violation |
|---|---|
| life | extrajudicial killing, mob justice |
| dignity | torture, degrading treatment, slavery |
| personal liberty | unlawful arrest and detention beyond the constitutional time limit |
| fair hearing | trial without defence; long detention without trial |
| expression | harassment of journalists; unlawful closure of media houses |
| freedom of religion | forcing people to change religion |
| freedom from discrimination | denial of jobs because of ethnicity, sex or disability |
| child's rights | child labour, trafficking, abuse |
| women's rights | domestic violence, harmful widowhood rites |

## Constitutional safeguards
An arrested person must be brought before a court within **24 hours** where there is a court within 40 km, or within **48 hours** otherwise (Section 35). Every person accused of a crime is presumed **innocent** until proven guilty (Section 36).

## Ways of seeking redress
- report to the **police** (or higher police authorities if the police are the violators)
- file a case in **court**: the **Fundamental Rights (Enforcement Procedure) Rules** allow a victim to approach the **High Court**
- complain to the **National Human Rights Commission (NHRC)**
- seek help from **Legal Aid Council** (free legal services), NGOs and the Nigerian Bar Association
- petition the **Public Complaints Commission**
- use the media

## Protecting rights
awareness of rights, independent courts, accountable security agencies, strong civil society.`,
          examples: `**Example 1.** A man is detained by police for two weeks without being charged to court. Which right is violated? *Answer:* **right to personal liberty** (and fair hearing).

**Example 2.** Where can a victim of human rights violation seek redress? *Answer:* the **High Court** (or NHRC).

**Example 3.** Which agency provides free legal services to poor Nigerians? *Answer:* the **Legal Aid Council**.`,
        },
        questions: [
          ["E", "The denial or abuse of a person's fundamental rights is", "a human rights violation", "a civic duty", "a privilege", "an election", "Rights are abused."],
          ["E", "Torture of a suspect violates the right to", "dignity of the human person", "vote", "own property", "movement", "Torture is degrading."],
          ["E", "A victim of human rights abuse can seek redress in", "the court", "a market", "a stadium", "a cinema", "Courts enforce rights."],
          ["M", "Detaining a person for weeks without trial violates the right to", "personal liberty", "freedom of religion", "property", "leisure", "Detention must be lawful and limited."],
          ["M", "The body that receives complaints about human rights violations in Nigeria is the", "National Human Rights Commission", "INEC", "NAFDAC", "NIMC", "The NHRC investigates abuses."],
          ["M", "The agency that provides free legal services to indigent Nigerians is the", "Legal Aid Council", "EFCC", "NCC", "FRSC", "It helps those who cannot afford lawyers."],
          ["M", "Harassing journalists for their reports violates", "freedom of expression and the press", "right to life", "right to vote", "freedom of movement", "The press must be free."],
          ["H", "Under Section 35, an arrested person should normally be brought to court within", "24 hours where a court is within 40 km", "one month", "one year", "no time limit", "The Constitution sets strict limits."],
          ["H", "Killing a suspect without trial by security officers is", "extrajudicial killing", "fair hearing", "due process", "lawful arrest", "It violates the right to life."],
          ["H", "The rules that allow a victim to enforce fundamental rights in the High Court are the", "Fundamental Rights (Enforcement Procedure) Rules", "Electoral Act", "Land Use Act", "Examination Malpractices Act", "They provide a special procedure."],
        ],
      },
      {
        week: 6,
        title: "Social vices and their prevention",
        subtopics: ["Meaning of social vices", "Common social vices in Nigeria", "Causes and effects of social vices", "Prevention and control"],
        objectives: ["Define social vices", "Identify common social vices", "Explain the causes and effects of social vices", "Suggest measures to prevent and control social vices"],
        lesson: {
          title: "Fighting Social Vices",
          summary: "Identify social vices, their causes and effects, and how to prevent them.",
          minutes: 40,
          notes: `## Meaning
**Social vices** are **immoral, harmful or unlawful behaviours** that are condemned by society because they damage individuals and the community.

## Common social vices
cultism, drug abuse, examination malpractice, internet fraud ("yahoo yahoo"), armed robbery, kidnapping, prostitution, gambling and betting addiction, rape and sexual harassment, bribery and corruption, thuggery, vandalism, bullying, and truancy.

## Causes
| Cause | Explanation |
|---|---|
| **poverty and unemployment** | people seek illegal income |
| **peer pressure** | desire for acceptance |
| **poor parenting** | lack of guidance and supervision |
| **greed and get-rich-quick mentality** | desire for fast wealth |
| **moral decline** | weak value systems |
| **weak law enforcement** | offenders go unpunished |
| **media influence** | glamorising crime and wealth without work |
| **drug abuse** | lowers self-control |

## Effects
insecurity and fear, loss of lives and property, damaged national image, school dropout, broken families, imprisonment, addiction and disease, discouragement of investment.

## Prevention and control
- good **parenting** and supervision
- **value education** (Civic Education, religious teaching)
- **youth empowerment** and job creation
- strict **law enforcement** and prosecution
- **counselling** and rehabilitation
- positive role models and recognition of honest achievers
- community vigilance and reporting`,
          examples: `**Example 1.** Name two social vices common among youths. *Answer:* **cultism** and **drug abuse** (or internet fraud).

**Example 2.** Name one cause of social vices. *Answer:* **peer pressure** (or unemployment).

**Example 3.** Name one way of preventing social vices. *Answer:* **good parenting** (or youth empowerment).`,
        },
        questions: [
          ["E", "Immoral or unlawful behaviours condemned by society are", "social vices", "social values", "national symbols", "civic duties", "They damage society."],
          ["E", "Which is a social vice?", "internet fraud", "honesty", "community service", "patriotism", "It is criminal deception."],
          ["E", "Good parenting helps to", "prevent social vices", "encourage cultism", "promote crime", "increase drug abuse", "Guidance keeps children on the right path."],
          ["M", "Which is a cause of social vices?", "get-rich-quick mentality", "contentment", "hard work", "good role models", "Greed pushes people into crime."],
          ["M", "Which is an effect of social vices?", "insecurity", "better national image", "more investment", "peace", "Crime creates fear."],
          ["M", "Glamorising wealth without work in films and music can", "encourage social vices", "discourage crime", "improve values", "reduce greed", "Media shapes attitudes."],
          ["M", "Which measure helps to control social vices?", "strict law enforcement", "ignoring offenders", "rewarding criminals", "weakening laws", "Punishment deters offenders."],
          ["H", "Recognising and rewarding honest achievers helps to fight social vices by", "providing positive role models", "encouraging fraud", "promoting greed", "ignoring values", "Young people copy celebrated examples."],
          ["H", "How does unemployment contribute to social vices?", "Idle and poor youths may turn to crime for income.", "It creates jobs.", "It improves morality.", "It has no effect.", "Lack of income increases temptation."],
          ["H", "Counselling and rehabilitation of drug users helps to", "reintegrate them into society", "increase drug abuse", "punish them only", "encourage cultism", "Recovery restores productive lives."],
        ],
      },
    ],
  },
];
