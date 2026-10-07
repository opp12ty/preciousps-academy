import type { TermPlan } from "../types";

/** SS2 Civic Education — original Precious PS content aligned to the senior secondary curriculum (WASSCE/NECO). */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Good governance",
        subtopics: ["Meaning of good governance", "Characteristics of good governance", "Obstacles to good governance in Nigeria", "Citizens' role in promoting good governance"],
        objectives: ["Explain good governance", "Identify the characteristics of good governance", "Analyse obstacles to good governance in Nigeria", "Describe citizens' role in promoting good governance"],
        lesson: {
          title: "What Good Governance Looks Like",
          summary: "Analyse the characteristics of and obstacles to good governance.",
          minutes: 45,
          notes: `## Meaning
**Governance** is the process by which **authority is exercised** in managing a country's resources and affairs. **Good governance** is governance that is **accountable, transparent, participatory, effective and in line with the rule of law**, and that improves citizens' welfare.

## Characteristics (often cited by the UN)
| Characteristic | Meaning |
|---|---|
| **accountability** | leaders answer for their decisions and use of resources |
| **transparency** | decisions and information are open to the public |
| **rule of law** | fair legal frameworks enforced impartially |
| **participation** | citizens are involved in decision-making |
| **responsiveness** | institutions serve all stakeholders promptly |
| **equity and inclusiveness** | all groups have opportunities |
| **effectiveness and efficiency** | resources are used well to meet needs |
| **consensus orientation** | mediation of different interests for the common good |

## Obstacles in Nigeria
corruption; weak institutions; impunity; godfatherism; insecurity; poor planning and policy inconsistency; ethnic and religious politics; poor revenue management; weak civil society and apathetic citizens.

## Promoting good governance
- anti-corruption institutions (EFCC, ICPC, CCB) and whistle-blowing
- **Freedom of Information Act** and open budgets
- **Treasury Single Account** and e-procurement to reduce leakages
- free and fair elections
- independent judiciary and press
- citizen participation: tracking budgets, town halls, voting out non-performers`,
          examples: `**Example 1.** Publishing a state budget online for citizens to scrutinise promotes **transparency**.

**Example 2.** Name one obstacle to good governance in Nigeria. *Answer:* **corruption** (or impunity).

**Example 3.** How can citizens promote good governance? *Answer:* By **tracking budgets and projects** and voting out non-performing leaders.`,
        },
        questions: [
          ["E", "Governance that is accountable, transparent and follows the rule of law is", "good governance", "dictatorship", "anarchy", "military rule", "It serves citizens well."],
          ["E", "Leaders answering for their decisions and use of resources is", "accountability", "secrecy", "impunity", "nepotism", "Accountability is a mark of good governance."],
          ["E", "Which is an obstacle to good governance?", "corruption", "transparency", "participation", "rule of law", "Corruption diverts resources."],
          ["M", "Making decisions and information open to the public is", "transparency", "secrecy", "censorship", "impunity", "Openness allows scrutiny."],
          ["M", "Wrongdoers escaping punishment is known as", "impunity", "accountability", "transparency", "equity", "Impunity encourages misconduct."],
          ["M", "The policy of keeping all federal government revenue in one account to reduce leakages is the", "Treasury Single Account", "Federal Character", "Universal Basic Education", "Land Use Act", "It improves cash management."],
          ["M", "Institutions serving all stakeholders promptly shows", "responsiveness", "rigidity", "neglect", "apathy", "Good institutions respond to needs."],
          ["H", "Publishing a state budget online for citizens to scrutinise promotes", "transparency and accountability", "secrecy", "impunity", "godfatherism", "Citizens can monitor spending."],
          ["H", "Which law strengthens good governance by giving citizens access to public records?", "Freedom of Information Act", "Anti-Torture Act", "Child Rights Act", "Land Use Act", "It was enacted in 2011."],
          ["H", "Equity and inclusiveness in governance mean that", "all groups, including minorities, have opportunities", "only the majority benefits", "one ethnic group rules", "women are excluded", "No group is left behind."],
        ],
      },
      {
        week: 2,
        title: "Political apathy in Nigeria",
        subtopics: ["Meaning and forms of political apathy", "Causes of political apathy in Nigeria", "Consequences for democracy", "Remedies"],
        objectives: ["Explain political apathy and its forms", "Analyse causes of political apathy in Nigeria", "Evaluate its consequences for democracy", "Suggest remedies for political apathy"],
        lesson: {
          title: "Why Citizens Withdraw from Politics",
          summary: "Analyse the causes and consequences of political apathy and its remedies.",
          minutes: 45,
          notes: `## Meaning
**Political apathy** is the **lack of interest, indifference or unwillingness** of citizens to participate in political processes.

## Forms
failure to register or collect voter cards; not voting; refusal to join parties; refusal to contest elections; not following public affairs; not attending community meetings.

## Evidence
Low voter turnout in recent Nigerian general elections — turnout fell below **30%** in the 2023 presidential election according to INEC figures — is a clear sign of apathy.

## Causes
| Cause | Explanation |
|---|---|
| electoral fraud and manipulation | belief that votes do not count |
| violence and insecurity | fear for personal safety |
| bad governance and unfulfilled promises | disillusionment |
| corruption and "politics of money" | ordinary people feel excluded |
| poverty | survival comes first |
| illiteracy and lack of information | poor understanding of the process |
| ethnic and religious manipulation | cynicism |
| logistical failures | long queues, late materials, disenfranchisement |
| "godfatherism" | candidates imposed by powerful sponsors |

## Consequences
bad leaders gain power; low legitimacy; poor accountability; decisions by a minority; weakened opposition; possible political instability.

## Remedies
credible elections using technology; security; civic and voter education; punishment of electoral offences; good governance and fulfilment of promises; internal party democracy; inclusion of youths and women (e.g. the **Not Too Young To Run Act, 2018**, which reduced age limits for some offices).`,
          examples: `**Example 1.** Name two forms of political apathy. *Answer:* **not voting** and **refusal to join political parties**.

**Example 2.** Which Act reduced age qualifications for some elective offices in 2018? *Answer:* the **Not Too Young To Run Act**.

**Example 3.** Name one consequence of political apathy. *Answer:* **bad leaders gain power**.`,
        },
        questions: [
          ["E", "Lack of interest of citizens in political processes is", "political apathy", "political participation", "patriotism", "activism", "Apathetic citizens withdraw."],
          ["E", "Failure to vote in elections is a form of", "political apathy", "civic duty", "campaigning", "lobbying", "It shows disinterest."],
          ["E", "Citizens who believe elections will be rigged are likely to show", "political apathy", "high enthusiasm", "patriotism only", "activism", "Distrust discourages participation."],
          ["M", "Which is a consequence of political apathy?", "bad leaders gain power", "higher legitimacy", "stronger accountability", "better governance", "Few voters decide outcomes."],
          ["M", "Unfulfilled campaign promises lead to", "disillusionment and apathy", "higher turnout", "stronger trust", "national unity", "People lose faith in politicians."],
          ["M", "The Act that reduced age qualifications for some elective offices in 2018 is the", "Not Too Young To Run Act", "Electoral Act 2010", "Child Rights Act", "Land Use Act", "It encouraged youth participation."],
          ["M", "Which remedy can reduce political apathy?", "credible elections using technology", "rigging", "vote buying", "violence", "Trust increases participation."],
          ["H", "Low voter turnout in recent Nigerian presidential elections mainly indicates", "widespread political apathy", "strong participation", "excellent logistics everywhere", "total satisfaction with government", "Many eligible voters stayed away."],
          ["H", "How does 'godfatherism' contribute to apathy?", "Candidates are imposed, so ordinary members feel excluded.", "It encourages open primaries.", "It increases competition.", "It improves participation.", "Imposition discourages participation."],
          ["H", "Why does poverty contribute to political apathy?", "Citizens prioritise survival over political activities.", "The poor are banned from voting.", "Poverty increases interest in politics.", "It has no effect.", "Daily needs take priority."],
        ],
      },
      {
        week: 3,
        title: "The public service: structure and reforms",
        subtopics: ["Structure of the public service", "Functions of the civil service", "Public service reforms in Nigeria", "Ethics of public service"],
        objectives: ["Describe the structure of Nigeria's public service", "Explain the functions of the civil service", "Evaluate public service reforms in Nigeria", "State ethical standards expected of public servants"],
        lesson: {
          title: "Serving the Public Well",
          summary: "Describe the structure, functions and reforms of Nigeria's public service.",
          minutes: 45,
          notes: `## Structure
- **Federal, state and local government services**.
- **Ministries** (headed politically by Ministers/Commissioners and administratively by **Permanent Secretaries**).
- **Extra-ministerial departments and agencies** (e.g. NAFDAC, FRSC).
- **Public corporations and parastatals** (e.g. Nigerian Ports Authority).
- **Service commissions** (Federal Civil Service Commission, state civil service commissions, Local Government Service Commissions).
- Head of the Civil Service of the Federation coordinates the federal civil service.

## Functions of the civil service
- **advising** ministers on policy
- **implementing** government policies and programmes
- **drafting** bills and regulations
- providing **continuity** when governments change
- keeping government **records**
- **revenue collection** and public services

## Reforms in Nigeria
| Reform | Key recommendation |
|---|---|
| **Udoji Commission (1972–1974)** | unified grading and salary structure (GL 1–17); results-oriented management |
| **1988 Civil Service Reforms (Dotun Phillips Panel)** | Ministers as chief executives and accounting officers; professionalisation |
| **Ayida Panel (1994)** | reversed parts of 1988 reforms; restored Permanent Secretaries' roles |
| **2000s reforms (e.g. monetisation of fringe benefits, IPPIS, e-government)** | reduce costs and ghost workers |
**IPPIS** (Integrated Payroll and Personnel Information System) helps eliminate **ghost workers**.

## Ethics
The **Public Service Rules**, the **Code of Conduct for Public Officers** (Fifth Schedule), and principles of **neutrality, integrity, accountability, efficiency, courtesy and confidentiality**.`,
          examples: `**Example 1.** Which commission introduced the unified grading system (GL 1–17)? *Answer:* the **Udoji Commission**.

**Example 2.** What does IPPIS help to eliminate? *Answer:* **ghost workers**.

**Example 3.** Name one function of the civil service. *Answer:* **implementing government policies** (or advising ministers).`,
        },
        questions: [
          ["E", "The administrative head of a ministry is the", "Permanent Secretary", "Minister", "Speaker", "Senate President", "The Minister is the political head."],
          ["E", "Which is a function of the civil service?", "implementing government policies", "making laws", "interpreting laws", "declaring war", "Civil servants execute policies."],
          ["E", "NAFDAC is an example of", "an extra-ministerial agency", "a political party", "a court", "a pressure group", "It operates outside a ministry's core departments."],
          ["M", "The commission that introduced unified grading levels in the civil service was the", "Udoji Commission", "Ayida Panel", "Willink Commission", "Aguda Panel", "It reported in 1974."],
          ["M", "IPPIS was introduced mainly to", "eliminate ghost workers", "increase ghost workers", "abolish salaries", "conduct elections", "It verifies employees and payroll."],
          ["M", "The 1988 civil service reforms made Ministers the", "chief executives and accounting officers of ministries", "judges of ministries", "heads of political parties", "clerks", "The Phillips Panel recommended it."],
          ["M", "Civil servants provide continuity because they", "remain in service when governments change", "change with every government", "are elected", "are political party agents", "Permanence ensures continuity."],
          ["H", "The panel of 1994 that reversed parts of the 1988 reforms was the", "Ayida Panel", "Udoji Commission", "Dotun Phillips Panel", "Willink Commission", "It restored Permanent Secretaries' roles."],
          ["H", "Which is an ethical standard expected of public servants?", "political neutrality", "partisanship", "nepotism", "disclosure of state secrets", "They serve any government impartially."],
          ["H", "Converting official cars and houses into cash allowances for public officers was known as", "monetisation of fringe benefits", "privatisation", "nationalisation", "federalisation", "It aimed to cut costs."],
        ],
      },
      {
        week: 4,
        title: "Civil society and democracy",
        subtopics: ["Meaning and characteristics of civil society", "Roles of civil society in democracy", "Civil society and military rule in Nigeria", "Challenges and prospects"],
        objectives: ["Explain the characteristics of civil society", "Analyse roles of civil society in democratic governance", "Describe civil society's role in Nigeria's democratic struggles", "Evaluate challenges and prospects of civil society"],
        lesson: {
          title: "Civil Society as a Watchdog",
          summary: "Analyse civil society's contribution to democracy in Nigeria.",
          minutes: 45,
          notes: `## Characteristics of civil society
voluntary membership; independence from government; non-profit orientation; formal organisation; pursuit of public or group interests; operation within the law.

## Roles in democracy
| Role | Example |
|---|---|
| **watchdog** | monitoring government spending and conduct |
| **advocacy** | campaigning for laws (e.g. FOI Act, Disability Act) |
| **election monitoring** | deploying observers; parallel vote tabulation |
| **civic education** | voter education and rights awareness |
| **service delivery** | health, education and relief |
| **mediation and peace building** | resolving communal conflicts |
| **representing marginalised groups** | women, persons with disabilities, children |

## Civil society in Nigeria's democratic struggle
During military rule, groups such as the **Nigeria Labour Congress (NLC)**, the **Nigerian Bar Association**, student unions (NANS), the **Campaign for Democracy (CD)** and **NADECO (National Democratic Coalition)** campaigned for a return to civil rule, especially after the **annulment of the 12 June 1993 election**.
Since 1999, CSOs have monitored elections and pushed for reforms (e.g. the **Electoral Act 2022**).

## Challenges
inadequate funding and dependence on foreign donors; government restrictions and harassment; partisanship and co-optation by politicians; internal leadership problems; weak rural presence; insecurity.

## Prospects
digital advocacy, coalitions, youth-led movements, partnerships with the media and international bodies.`,
          examples: `**Example 1.** Name one civil society group that fought for democracy after the 1993 annulment. *Answer:* **NADECO** (or the Campaign for Democracy).

**Example 2.** How do CSOs promote free elections? *Answer:* By **deploying observers** and conducting voter education.

**Example 3.** Name one challenge facing CSOs. *Answer:* **dependence on foreign donors** (or government restrictions).`,
        },
        questions: [
          ["E", "Which is a characteristic of civil society organisations?", "independence from government", "control by the army", "profit-making as the main aim", "compulsory membership", "They are autonomous."],
          ["E", "Civil society organisations that monitor government act as", "watchdogs", "legislators", "judges", "tax collectors", "They check abuse of power."],
          ["E", "Membership of civil society organisations is usually", "voluntary", "compulsory", "hereditary", "by conscription", "People join freely."],
          ["M", "Campaigning for the passage of laws such as the FOI Act is", "advocacy", "rigging", "censorship", "impeachment", "CSOs push for reforms."],
          ["M", "Which pro-democracy coalition fought for the actualisation of the 12 June 1993 election?", "NADECO", "INEC", "NAFDAC", "ECOWAS", "The National Democratic Coalition."],
          ["M", "Deploying observers to polling units is a civil society role in", "election monitoring", "law-making", "adjudication", "taxation", "Observers promote credibility."],
          ["M", "Which is a challenge facing CSOs in Nigeria?", "dependence on foreign donors", "unlimited local funding", "complete absence of government", "too many rural offices", "Funding is often external."],
          ["H", "Co-optation of civil society leaders by politicians weakens civil society because it", "compromises their independence", "strengthens their neutrality", "increases funding for advocacy", "improves credibility", "Independence is essential."],
          ["H", "Civil society's role in representing persons with disabilities contributed to the passage of the", "Discrimination Against Persons with Disabilities (Prohibition) Act", "Land Use Act", "Petroleum Act", "Police Act of 1943", "Advocacy produced the 2018 Act."],
          ["H", "The annulment of the 12 June 1993 presidential election led to", "widespread civil society protests for democracy", "the end of civil society", "immediate civilian handover", "the creation of ECOWAS", "Groups mobilised against military rule."],
        ],
      },
      {
        week: 5,
        title: "Popular participation and democratic governance",
        subtopics: ["Meaning and channels of popular participation", "Conventional and unconventional participation", "Factors influencing participation", "Benefits of popular participation"],
        objectives: ["Explain popular participation", "Distinguish conventional from unconventional participation", "Analyse factors that influence participation", "Evaluate the benefits of participation for governance"],
        lesson: {
          title: "Citizens at the Centre of Governance",
          summary: "Analyse forms of participation and what shapes citizens' involvement.",
          minutes: 45,
          notes: `## Meaning
**Popular participation** is the **involvement of citizens in the decision-making processes** that affect their lives, both in elections and in between elections.

## Channels
| Conventional (institutional) | Unconventional (non-institutional) |
|---|---|
| voting and registering | peaceful protests and demonstrations |
| contesting elections | boycotts |
| party membership and campaigns | online campaigns and petitions |
| lobbying representatives | civil disobedience (non-violent) |
| public hearings and town halls | strikes (by unions) |
| budget tracking and community development associations | social movements |
Unconventional participation must remain **lawful and peaceful**; violence and vandalism are not legitimate participation.

## Factors influencing participation
education and awareness; income and social status; age (youths vs elders); gender and cultural norms; urban or rural residence; security; trust in institutions; party mobilisation; media access; legal framework (e.g. voting age, candidacy requirements).

## Benefits
- **legitimacy** of government
- **accountability** and responsiveness of leaders
- policies that reflect citizens' **needs**
- **peaceful** expression of grievances
- political **education** and development of leadership
- national **stability**

## Barriers in Nigeria
electoral violence, vote buying, high cost of nomination forms, cultural barriers to women's participation, disenfranchisement of IDPs, poor information in rural areas.`,
          examples: `**Example 1.** Is a peaceful protest conventional or unconventional participation? *Answer:* **unconventional** (but lawful).

**Example 2.** Name one factor that influences participation. *Answer:* **education** (or security, income).

**Example 3.** Name one benefit of popular participation. *Answer:* **legitimacy of government**.`,
        },
        questions: [
          ["E", "The involvement of citizens in decisions that affect them is", "popular participation", "political apathy", "censorship", "dictatorship", "Citizens take part in governance."],
          ["E", "Which is a conventional form of participation?", "voting", "vandalism", "violence", "looting", "It is an institutional channel."],
          ["E", "Which is a benefit of popular participation?", "legitimacy of government", "loss of accountability", "instability", "apathy", "Broad support confers legitimacy."],
          ["M", "A peaceful protest is an example of", "unconventional participation", "conventional voting", "rigging", "apathy", "It is outside formal institutions but lawful."],
          ["M", "Which factor increases political participation?", "education and awareness", "illiteracy", "insecurity", "vote buying", "Informed citizens participate more."],
          ["M", "The high cost of party nomination forms mainly discourages", "less wealthy aspirants from contesting", "the rich from contesting", "voters from voting", "INEC from registering parties", "Money becomes a barrier."],
          ["M", "Tracking the implementation of the local government budget is", "a form of participation that promotes accountability", "an electoral offence", "a form of apathy", "illegal", "Citizens monitor spending."],
          ["H", "Why is violence not legitimate participation?", "It violates others' rights and the law.", "It is a constitutional duty.", "It strengthens democracy.", "It is encouraged by INEC.", "Participation must be lawful and peaceful."],
          ["H", "Internally displaced persons often face", "disenfranchisement", "extra voting rights", "compulsory candidacy", "exemption from citizenship", "Displacement makes voting difficult."],
          ["H", "How does participation help policies reflect citizens' needs?", "Leaders receive direct feedback from the people.", "It hides citizens' views.", "It silences minorities.", "It removes elections.", "Feedback shapes decisions."],
        ],
      },
      {
        week: 6,
        title: "Constitutional democracy",
        subtopics: ["Meaning of constitutionalism", "Features of constitutional democracy", "Constitutional democracy in Nigeria", "Threats to constitutionalism"],
        objectives: ["Explain constitutionalism and constitutional democracy", "Identify features of constitutional democracy", "Evaluate constitutional democracy in Nigeria", "Identify threats to constitutionalism"],
        lesson: {
          title: "Government Limited by the Constitution",
          summary: "Explain constitutionalism and evaluate constitutional democracy in Nigeria.",
          minutes: 45,
          notes: `## Meaning
- **Constitutionalism** is the principle that **government power is limited by a constitution** and must be exercised according to it.
- **Constitutional democracy** is a democratic system in which **the constitution is supreme**, rights are protected, and government derives authority from the people through elections.

## Features
supremacy of the constitution; limited government; separation of powers and checks and balances; independent judiciary with **judicial review**; protection of fundamental rights; periodic free elections; rule of law; accountable government; peaceful transfer of power.

## Constitutional democracy in Nigeria
- **First Republic (1960–1966)**: parliamentary system; ended by the **15 January 1966** coup.
- **Second Republic (1979–1983)**: presidential system; ended by the **31 December 1983** coup.
- **Aborted Third Republic (1993)**: annulment of the 12 June election; interim government; Abacha regime.
- **Fourth Republic (1999–date)**: the longest uninterrupted democratic period; several peaceful transitions, including the first transfer of power from a ruling party to the opposition in **2015**.

## Threats to constitutionalism
unconstitutional change of government (coups); disobedience of court orders; abuse of emergency powers; manipulation of elections; attempts to extend tenure beyond constitutional limits (e.g. the failed **third-term** attempt of 2006); corruption; executive dominance over legislature and judiciary; insecurity.

## Sustaining constitutional democracy
respect for term limits; independent courts; strong institutions; civic education; credible elections; vigilant citizens and press.`,
          examples: `**Example 1.** What is constitutionalism? *Answer:* The principle that **government power is limited by the constitution**.

**Example 2.** In which year did Nigeria experience its first transfer of power from a ruling party to the opposition at the federal level? *Answer:* **2015**.

**Example 3.** Name one threat to constitutionalism. *Answer:* **attempts to extend tenure beyond constitutional limits** (or coups).`,
        },
        questions: [
          ["E", "The principle that government power is limited by the constitution is", "constitutionalism", "militarism", "anarchism", "feudalism", "Power must follow the constitution."],
          ["E", "Nigeria's current democratic period, which began in 1999, is the", "Fourth Republic", "First Republic", "Second Republic", "Third Republic", "It has lasted since 1999."],
          ["E", "Which is a feature of constitutional democracy?", "supremacy of the constitution", "rule by decree", "unlimited tenure", "suspension of courts", "The constitution is supreme."],
          ["M", "Nigeria's First Republic ended with the coup of", "15 January 1966", "31 December 1983", "29 May 1999", "12 June 1993", "The military took over in 1966."],
          ["M", "Nigeria's Second Republic operated a", "presidential system", "parliamentary system", "military system", "monarchical system", "It began in 1979."],
          ["M", "The first transfer of federal power from a ruling party to the opposition in Nigeria occurred in", "2015", "1999", "2007", "1979", "An opposition candidate won in 2015."],
          ["M", "The Second Republic ended with the coup of", "31 December 1983", "15 January 1966", "27 August 1985", "17 November 1993", "Buhari took over in 1983."],
          ["H", "The failed attempt in 2006 to amend the Constitution to allow a longer presidential tenure is known as the", "third-term agenda", "June 12 crisis", "Aburi Accord", "Willink Report", "The National Assembly rejected it."],
          ["H", "Why is respect for term limits important for constitutional democracy?", "It prevents personal rule and ensures peaceful change of leadership.", "It allows leaders to rule for life.", "It removes elections.", "It weakens institutions.", "Term limits check the concentration of power."],
          ["H", "The aborted Third Republic is associated with", "the annulment of the 12 June 1993 election", "the 1960 independence", "the 2015 election", "the 1914 amalgamation", "The transition collapsed after the annulment."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Responsible parenthood",
        subtopics: ["Meaning of responsible parenthood", "Roles and responsibilities of parents", "Consequences of irresponsible parenthood", "Parenthood and national development"],
        objectives: ["Explain responsible parenthood", "Describe the roles and responsibilities of parents", "Analyse consequences of irresponsible parenthood", "Relate responsible parenthood to national development"],
        lesson: {
          title: "Raising Responsible Citizens",
          summary: "Analyse parents' responsibilities and their impact on society.",
          minutes: 45,
          notes: `## Meaning
**Responsible parenthood** is the **conscious and committed performance of parental duties** — planning for, providing for, protecting, educating and morally guiding children — so that they grow into healthy, responsible citizens.

## Responsibilities of parents
| Area | Responsibilities |
|---|---|
| **physical** | food, shelter, clothing, health care, safety |
| **educational** | schooling, supervision of homework, vocational skills |
| **moral and spiritual** | teaching values, discipline, religious guidance |
| **emotional** | love, attention, communication, encouragement |
| **social** | teaching manners and relationships; monitoring friends and media use |
| **family planning** | having children one can care for; child spacing |

## Qualities of responsible parents
good role models, patience, fairness, hard work, communication, firmness without abuse, involvement in children's lives.

## Consequences of irresponsible parenthood
street children and child labour; juvenile delinquency; cultism and drug abuse; school dropout; teenage pregnancy; low self-esteem; crime; pressure on social welfare systems.

## Responsible parenthood and national development
Well-raised children become **productive, law-abiding and patriotic** citizens; they reduce crime and dependency; the **family is the foundation of the nation**.

## Support for parents
parenting education, family counselling, social welfare services, child rights laws, community and religious support.`,
          examples: `**Example 1.** Name one moral responsibility of parents. *Answer:* **teaching values and discipline**.

**Example 2.** Name one consequence of irresponsible parenthood. *Answer:* **juvenile delinquency** (or street children).

**Example 3.** How does responsible parenthood contribute to national development? *Answer:* It produces **productive, law-abiding citizens**.`,
        },
        questions: [
          ["E", "Committed performance of parental duties is", "responsible parenthood", "child labour", "nepotism", "apathy", "Parents care for and guide children."],
          ["E", "Providing food, shelter and health care is a parent's", "physical responsibility", "political duty", "judicial function", "legislative role", "It meets basic needs."],
          ["E", "Which is a consequence of irresponsible parenthood?", "juvenile delinquency", "good behaviour", "academic excellence", "patriotism", "Neglected children may misbehave."],
          ["M", "Teaching children values and discipline is a parent's", "moral responsibility", "physical responsibility only", "economic responsibility only", "legislative role", "It shapes character."],
          ["M", "Monitoring children's friends and media use is part of their", "social guidance", "physical needs", "taxation", "voting rights", "Parents protect children from bad influences."],
          ["M", "Having only the number of children one can adequately care for is", "family planning", "child labour", "polygamy", "adoption", "It improves family welfare."],
          ["M", "Which quality should responsible parents show?", "being good role models", "abusing children", "neglecting schooling", "encouraging truancy", "Children copy parents."],
          ["H", "How does responsible parenthood contribute to national development?", "It produces productive and law-abiding citizens.", "It increases crime.", "It burdens social services.", "It has no effect.", "The family is the foundation of society."],
          ["H", "Firm discipline without abuse means", "correcting children without harming them", "beating children to injury", "ignoring misbehaviour", "rewarding bad behaviour", "Discipline should be firm but humane."],
          ["H", "Street children are often a result of", "neglect and irresponsible parenthood", "strong family support", "free education", "good parenting", "Neglected children end up on the streets."],
        ],
      },
      {
        week: 2,
        title: "Consumer rights and responsibilities",
        subtopics: ["Meaning of consumer", "Rights of consumers", "Responsibilities of consumers", "Consumer protection in Nigeria"],
        objectives: ["Explain who a consumer is", "Identify consumer rights", "State consumer responsibilities", "Describe the legal and institutional framework for consumer protection"],
        lesson: {
          title: "Protecting Consumers",
          summary: "Explain consumer rights and the framework for protecting them in Nigeria.",
          minutes: 45,
          notes: `## Meaning
A **consumer** is any person who **buys or uses goods or services** for personal or household use.

## Consumer rights (UN Guidelines for Consumer Protection)
right to **satisfaction of basic needs**; **safety**; **information**; **choice**; **to be heard** (representation); **redress** (compensation); **consumer education**; **healthy environment**. March **15** is **World Consumer Rights Day**.

## Consumer responsibilities
- be informed: read labels, check expiry dates and **NAFDAC numbers**
- demand and keep **receipts** and warranties
- use products as instructed
- report fake, substandard and expired products
- avoid buying from unlicensed sellers
- be environmentally conscious

## Consumer protection in Nigeria
| Body / law | Role |
|---|---|
| **Federal Competition and Consumer Protection Act (FCCPA), 2018** | established the **FCCPC**, replacing the Consumer Protection Council (1992) |
| **FCCPC** | protects consumers; promotes fair competition; handles complaints |
| **NAFDAC** | food, drugs, cosmetics, chemicals, packaged water |
| **SON** | product standards (e.g. MANCAP certification) |
| **NCC** | telecommunications consumers |
| **CBN** | banking consumers |
| **NERC** | electricity consumers |
| **NCAA** | air passengers |

## Unfair practices
fake and counterfeit goods, adulteration, short weights, misleading advertisement, hidden charges, price fixing, poor after-sales service.`,
          examples: `**Example 1.** When is World Consumer Rights Day? *Answer:* **15 March**.

**Example 2.** Which body replaced the Consumer Protection Council in 2018? *Answer:* the **Federal Competition and Consumer Protection Commission (FCCPC)**.

**Example 3.** Which regulator protects electricity consumers? *Answer:* **NERC**.`,
        },
        questions: [
          ["E", "A person who buys or uses goods and services is a", "consumer", "producer", "wholesaler", "legislator", "Consumers use products."],
          ["E", "Which is a consumer right?", "right to safety", "right to cheat", "right to adulterate", "right to overcharge", "Products must be safe."],
          ["E", "Consumers should check products for", "expiry dates", "the shop's colour", "the seller's age", "the day of the week", "Expired products may harm."],
          ["M", "World Consumer Rights Day is observed on", "15 March", "10 December", "12 June", "1 May", "It raises awareness of consumer rights."],
          ["M", "The body that replaced the Consumer Protection Council in 2018 is the", "FCCPC", "NAFDAC", "SON", "NCC", "It was created by the FCCPA."],
          ["M", "The regulator that protects electricity consumers is", "NERC", "NCC", "NCAA", "NAFDAC", "The Nigerian Electricity Regulatory Commission."],
          ["M", "Advertising that deceives buyers about a product is", "misleading advertisement", "consumer education", "redress", "quality assurance", "It is an unfair practice."],
          ["H", "The certification scheme of SON for locally made products is", "MANCAP", "BVAS", "IPPIS", "IReV", "It certifies products meet standards."],
          ["H", "The consumer right to compensation for defective goods is the right to", "redress", "information", "choice", "a healthy environment", "Redress corrects wrongs."],
          ["H", "The regulator that protects air passengers in Nigeria is", "NCAA", "NERC", "NCC", "FRSC", "The Nigerian Civil Aviation Authority."],
        ],
      },
      {
        week: 3,
        title: "Inter-communal relationships and conflict",
        subtopics: ["Meaning of inter-communal relationships", "Causes of inter-communal conflicts in Nigeria", "Effects of inter-communal conflicts", "Promoting peaceful coexistence"],
        objectives: ["Explain inter-communal relationships", "Analyse causes of inter-communal conflicts in Nigeria", "Describe effects of such conflicts", "Suggest strategies for peaceful coexistence"],
        lesson: {
          title: "Living Peacefully with Neighbouring Communities",
          summary: "Analyse inter-communal conflicts and strategies for peaceful coexistence.",
          minutes: 45,
          notes: `## Meaning
**Inter-communal relationships** are the **interactions between different communities** — in trade, marriage, festivals, land use and governance. Healthy relationships promote cooperation; poor ones lead to conflict.

## Causes of inter-communal conflicts in Nigeria
| Cause | Examples |
|---|---|
| **land and boundary disputes** | disputes over farmland or boundaries between neighbouring towns (e.g. the long-running Ife–Modakeke and Aguleri–Umuleri conflicts) |
| **farmer–herder conflicts** | competition for land and water; crop destruction; cattle rustling |
| **chieftaincy disputes** | succession tussles |
| **indigene–settler tensions** | access to land, jobs and political positions |
| **ethnic and religious intolerance** | prejudice and incitement |
| **resource control** | oil-producing communities and compensation |
| **political manipulation** | politicians exploiting divisions |
| **climate change and desertification** | migration and pressure on land |

## Effects
loss of lives and property; displacement (IDPs); destruction of farms, schools and markets; food insecurity; hatred and revenge attacks; reduced investment; strain on security agencies.

## Promoting peaceful coexistence
- **dialogue** and **mediation** by traditional, religious and community leaders
- **boundary demarcation** by the National Boundary Commission
- ranching and grazing reserves to reduce farmer–herder clashes
- justice and prosecution of perpetrators
- early warning systems and community policing
- inter-community festivals, marriages and trade
- peace education and inclusive governance`,
          examples: `**Example 1.** Name one cause of inter-communal conflict. *Answer:* **land disputes** (or chieftaincy tussles).

**Example 2.** Which body demarcates boundaries between states and communities? *Answer:* the **National Boundary Commission**.

**Example 3.** Suggest one measure to reduce farmer–herder conflicts. *Answer:* **ranching** and grazing reserves.`,
        },
        questions: [
          ["E", "Interactions between different communities are", "inter-communal relationships", "family relationships only", "international treaties", "school rules", "Communities interact through trade and marriage."],
          ["E", "A common cause of inter-communal conflict is", "land disputes", "inter-community trade", "festivals", "peace education", "Land is often contested."],
          ["E", "Dialogue between community leaders helps to", "resolve conflicts peacefully", "worsen conflicts", "cause displacement", "destroy farms", "Talking prevents violence."],
          ["M", "Competition over land and water between farmers and pastoralists causes", "farmer–herder conflicts", "chieftaincy disputes", "religious festivals", "trade agreements", "Crops and grazing clash."],
          ["M", "Which is an effect of inter-communal conflict?", "displacement of people", "increase in investment", "more schools", "better harvests", "People flee violence."],
          ["M", "The body that demarcates boundaries in Nigeria is the", "National Boundary Commission", "INEC", "NBC", "NOA", "It resolves boundary disputes."],
          ["M", "Keeping livestock in fenced ranches rather than open grazing aims to", "reduce farmer–herder clashes", "increase conflict", "destroy farms", "encourage rustling", "It limits crop destruction."],
          ["H", "The Ife–Modakeke conflict is an example of", "inter-communal conflict", "international war", "labour dispute", "electoral petition", "It involved neighbouring communities."],
          ["H", "How does climate change contribute to inter-communal conflict?", "It forces migration and increases pressure on land.", "It creates more land.", "It stops migration.", "It ends competition for water.", "Scarcity breeds competition."],
          ["H", "Early warning systems help to prevent conflicts by", "detecting tensions before they escalate", "spreading rumours", "arming communities", "ignoring grievances", "Timely action prevents violence."],
        ],
      },
      {
        week: 4,
        title: "Threats to national security",
        subtopics: ["Terrorism and insurgency", "Banditry and kidnapping", "Oil theft, separatist violence and cybercrime", "Responses to security threats"],
        objectives: ["Identify major threats to Nigeria's security", "Analyse causes of terrorism, banditry and kidnapping", "Explain the effects of insecurity on national development", "Evaluate responses by government and citizens"],
        lesson: {
          title: "Insecurity and National Development",
          summary: "Analyse contemporary security threats in Nigeria and responses to them.",
          minutes: 45,
          notes: `## Major threats
| Threat | Description |
|---|---|
| **terrorism and insurgency** | violent groups (e.g. Boko Haram and ISWAP in the north-east) attacking civilians and the state |
| **banditry** | armed gangs raiding villages, rustling cattle, kidnapping (mainly north-west and north-central) |
| **kidnapping for ransom** | nationwide; highways, schools (e.g. the **Chibok girls, 2014**) |
| **oil theft and pipeline vandalism** | Niger Delta; revenue loss and pollution |
| **separatist violence** | attacks linked to secessionist agitation |
| **communal and farmer–herder conflicts** | land and resource disputes |
| **cybercrime** | fraud, hacking, identity theft |
| **small arms proliferation** | illegal weapons from the Sahel and local production |

## Causes
poverty and youth unemployment; poor governance and corruption; weak border control; religious extremism; illiteracy; ethnic and political manipulation; climate change; drug abuse; slow justice.

## Effects
loss of lives; displacement (millions of IDPs); food insecurity as farmers flee; school closures; loss of investment; damage to national image; huge security spending.

## Responses
- **military operations** and joint task forces
- **community policing** and local security outfits operating within the law
- **intelligence** and technology (e.g. linking NIN to SIM cards)
- **deradicalisation** and rehabilitation programmes (e.g. Operation Safe Corridor)
- **Safe Schools Initiative**
- **Terrorism (Prevention and Prohibition) Act, 2022**; **Cybercrimes Act, 2015**
- addressing root causes: jobs, education, justice
- citizens reporting suspicious activities`,
          examples: `**Example 1.** Name one terrorist group operating in north-east Nigeria. *Answer:* **Boko Haram** (or ISWAP).

**Example 2.** Which law criminalises cyber fraud and hacking in Nigeria? *Answer:* the **Cybercrimes (Prohibition, Prevention, etc.) Act, 2015**.

**Example 3.** Name one effect of insecurity on national development. *Answer:* **food insecurity** as farmers abandon farms.`,
        },
        questions: [
          ["E", "Armed gangs raiding villages and rustling cattle are engaged in", "banditry", "trade", "farming", "tourism", "Banditry terrorises rural areas."],
          ["E", "Abducting people for ransom is", "kidnapping", "arrest", "migration", "adoption", "It is a violent crime."],
          ["E", "Which is a cause of insecurity in Nigeria?", "youth unemployment", "job creation", "good governance", "strong border control", "Idle youths may be recruited into crime."],
          ["M", "The Chibok schoolgirls were abducted in", "2014", "2004", "2020", "1999", "Boko Haram abducted them in April 2014."],
          ["M", "The law that criminalises cyber fraud and hacking in Nigeria was enacted in", "2015", "1990", "2003", "1960", "The Cybercrimes Act dates from 2015."],
          ["M", "Which is an effect of insecurity on agriculture?", "farmers abandon their farms, causing food shortages", "higher food production", "more farmland", "cheaper food", "Fear drives farmers away."],
          ["M", "Linking National Identification Numbers to SIM cards aims to", "improve tracking of criminals", "increase kidnapping", "reduce phone use", "abolish NIN", "Identity data aids investigations."],
          ["H", "The programme that deradicalises and rehabilitates repentant insurgents is", "Operation Safe Corridor", "Operation Feed the Nation", "War Against Indiscipline", "MAMSER", "It reintegrates ex-combatants."],
          ["H", "Which law currently governs terrorism offences in Nigeria?", "Terrorism (Prevention and Prohibition) Act, 2022", "Land Use Act", "Child Rights Act", "Electoral Act 2010", "It replaced the 2011 Act."],
          ["H", "Why is addressing root causes such as poverty essential for security?", "It reduces the pool of people available for recruitment into crime.", "It increases crime.", "It weakens the military.", "It has no effect.", "Opportunity reduces vulnerability."],
        ],
      },
      {
        week: 5,
        title: "Political parties and party systems in Nigeria",
        subtopics: ["History of political parties in Nigeria", "Party systems in Nigeria's republics", "Functions and problems of Nigerian parties", "Internal party democracy"],
        objectives: ["Trace the history of political parties in Nigeria", "Describe party systems in different republics", "Analyse problems of political parties in Nigeria", "Explain internal party democracy"],
        lesson: {
          title: "Parties Through Nigeria's History",
          summary: "Trace Nigerian political parties from colonial times to the Fourth Republic.",
          minutes: 45,
          notes: `## History
| Period | Main parties |
|---|---|
| **colonial era** | **NNDP** (1923, Herbert Macaulay); **Nigerian Youth Movement** (1934/1936); **NCNC** (1944, Azikiwe/Macaulay); **Action Group** (1951, Awolowo); **NPC** (1949 as a cultural body; party 1951, Ahmadu Bello) |
| **First Republic (1960–1966)** | NPC, NCNC, AG, NEPU, UMBC |
| **Second Republic (1979–1983)** | **NPN** (Shagari), **UPN** (Awolowo), **NPP** (Azikiwe), **GNPP**, **PRP**; later NAP |
| **Babangida transition** | two government-created parties: **SDP** and **NRC** |
| **Fourth Republic (1999–)** | initially PDP, APP/ANPP, AD; later many parties, including **APC** (formed 2013 by merger), **LP**, **NNPP**, and others |

## Party systems
- First and Second Republics: **multi-party** with regional/ethnic bases.
- Babangida era: **two-party** system imposed by government.
- Fourth Republic: **multi-party**; INEC has also **deregistered** parties that failed to meet performance requirements (e.g. in 2020).

## Problems of Nigerian parties
ethnic and religious bases; lack of clear ideology; godfatherism; money politics; weak internal democracy; defections ("carpet-crossing"); violence during primaries; poor funding transparency.

## Internal party democracy
Fair, transparent and inclusive procedures **within** parties: open primaries, regular congresses and conventions, respect for party constitutions, and equal opportunities for members. The **Electoral Act 2022** regulates primaries (direct, indirect or consensus).`,
          examples: `**Example 1.** Which party did Herbert Macaulay found in 1923? *Answer:* the **NNDP** (Nigerian National Democratic Party).

**Example 2.** Name the two parties of the Babangida transition. *Answer:* **SDP and NRC**.

**Example 3.** What is carpet-crossing? *Answer:* **Defection** of politicians from one party to another.`,
        },
        questions: [
          ["E", "The first political party in Nigeria was the", "NNDP", "NCNC", "APC", "PDP", "Herbert Macaulay founded it in 1923."],
          ["E", "The Action Group was led by", "Obafemi Awolowo", "Nnamdi Azikiwe", "Ahmadu Bello", "Herbert Macaulay", "It was founded in 1951."],
          ["E", "Defection of politicians from one party to another is called", "carpet-crossing", "impeachment", "primary election", "accreditation", "It is common in Nigerian politics."],
          ["M", "The NPC was led by", "Ahmadu Bello", "Obafemi Awolowo", "Nnamdi Azikiwe", "Aminu Kano", "It dominated the North."],
          ["M", "The party that won the 1979 presidential election was the", "NPN", "UPN", "NPP", "GNPP", "Shehu Shagari was its candidate."],
          ["M", "The two parties created by government during the Babangida transition were", "SDP and NRC", "PDP and APC", "NPN and UPN", "AG and NCNC", "It was an imposed two-party system."],
          ["M", "The APC was formed in 2013 through a", "merger of opposition parties", "military decree", "court judgement", "referendum", "Several parties merged."],
          ["H", "A major problem of Nigerian political parties is", "lack of clear ideology", "excess ideology", "absence of members", "too much internal democracy", "Many parties are platforms for ambition."],
          ["H", "The Nigerian Youth Movement was formed in the", "1930s", "1960s", "1990s", "1910s", "It emerged in Lagos in the 1930s."],
          ["H", "Internal party democracy requires", "open and fair primaries and respect for party constitutions", "imposition of candidates by godfathers", "violence at primaries", "secret selection by one leader", "Members should choose freely."],
        ],
      },
      {
        week: 6,
        title: "Leadership and followership in national life",
        subtopics: ["Theories and styles of leadership", "Qualities of good leaders", "Responsibilities of followers", "Leadership challenges in Nigeria"],
        objectives: ["Explain leadership theories and styles", "Identify qualities of good leaders", "Explain the responsibilities of followers", "Analyse leadership challenges in Nigeria"],
        lesson: {
          title: "Leaders, Followers and the Nation",
          summary: "Analyse leadership styles, followership and leadership challenges in Nigeria.",
          minutes: 45,
          notes: `## Leadership
**Leadership** is the process of **influencing and guiding people** towards achieving shared goals.

## Theories
| Theory | Idea |
|---|---|
| **trait theory** | leaders are born with certain qualities |
| **behavioural theory** | leadership can be learned through behaviour |
| **situational/contingency theory** | the best style depends on the situation |
| **transformational leadership** | leaders inspire followers to exceed expectations and embrace change |
| **servant leadership** | leaders serve followers' needs first |

## Styles
autocratic, democratic (participative), laissez-faire, transactional (rewards and punishments), transformational.

## Qualities of good leaders
vision, integrity, competence, courage, accountability, humility, fairness, good communication, emotional intelligence, commitment to the public good.

## Followership
Good followers are **loyal but not blind**: they obey lawful directives, participate, give constructive criticism, hold leaders accountable, pay taxes, vote wisely and reject corruption.
Types (after Robert Kelley): exemplary/effective, conformist, passive, alienated, pragmatic.

## Leadership challenges in Nigeria
corruption, ethnic and religious bias, poor succession planning, imposition of candidates, weak institutions, short-term thinking, insecurity, lack of accountability.

## Improving leadership
merit-based recruitment, leadership training, credible elections, active citizens, strong institutions and role models.`,
          examples: `**Example 1.** A leader who inspires followers to embrace change and exceed expectations shows **transformational leadership**.

**Example 2.** What does "loyal but not blind" followership mean? *Answer:* Supporting leaders while **constructively criticising and holding them accountable**.

**Example 3.** Name one leadership challenge in Nigeria. *Answer:* **corruption** (or poor succession planning).`,
        },
        questions: [
          ["E", "The process of influencing people towards shared goals is", "leadership", "followership", "apathy", "anarchy", "Leaders guide others."],
          ["E", "Which is a quality of a good leader?", "integrity", "dishonesty", "selfishness", "arrogance", "Integrity builds trust."],
          ["E", "Which is a responsibility of a good follower?", "obeying lawful directives", "blind loyalty to wrongdoing", "encouraging corruption", "refusing to vote", "Followers support lawful leadership."],
          ["M", "The theory that leaders are born with certain qualities is the", "trait theory", "situational theory", "behavioural theory", "servant theory", "It emphasises inborn traits."],
          ["M", "The theory that the best leadership style depends on the situation is", "situational (contingency) theory", "trait theory", "great man theory only", "laissez-faire theory", "Context determines style."],
          ["M", "Leadership that uses rewards and punishments to motivate followers is", "transactional leadership", "transformational leadership", "servant leadership", "laissez-faire leadership", "It exchanges rewards for performance."],
          ["M", "A leader who prioritises serving followers' needs practises", "servant leadership", "autocratic leadership", "transactional leadership", "laissez-faire leadership", "Service comes first."],
          ["H", "A leader who inspires followers to embrace change and exceed expectations shows", "transformational leadership", "autocratic leadership", "passive leadership", "transactional leadership only", "Inspiration drives transformation."],
          ["H", "'Loyal but not blind' followership means", "supporting leaders while holding them accountable", "obeying every order without question", "opposing all leaders", "refusing to participate", "Critical loyalty strengthens leadership."],
          ["H", "Which is a leadership challenge in Nigeria?", "poor succession planning", "excess accountability", "too many institutions that work perfectly", "lack of ambition among politicians", "Transitions are often poorly planned."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Mass media and democracy",
        subtopics: ["Functions of the media in a democracy", "Media ownership and regulation", "Challenges of the Nigerian media", "Social media and democracy"],
        objectives: ["Explain the functions of the media in a democracy", "Describe media ownership and regulation in Nigeria", "Analyse challenges facing the Nigerian media", "Evaluate the impact of social media on democracy"],
        lesson: {
          title: "The Press as the Fourth Estate",
          summary: "Analyse the media's role in democracy and the rise of social media.",
          minutes: 45,
          notes: `## Functions of the media
information, education, **surveillance/watchdog**, **agenda setting**, interpretation, mobilisation, entertainment, providing a **forum** for public debate, holding leaders **accountable**.
Section **22** of the 1999 Constitution states that the press, radio, television and other agencies of the mass media shall be free to uphold the fundamental objectives and **the responsibility and accountability of the government to the people**.
Section **39** guarantees **freedom of expression and the press**.

## Ownership and regulation
- **public (government)**: NTA, FRCN (Radio Nigeria), state broadcasters
- **private**: numerous TV, radio, newspapers and online platforms
- **regulators**: **National Broadcasting Commission (NBC)** (licensing, broadcasting code), **Nigerian Press Council**; professional bodies such as the **NUJ** and the **Nigerian Guild of Editors**
- **Freedom of Information Act 2011** eases access to public information

## Challenges of the Nigerian media
government harassment and arrests of journalists; ownership influence and bias; poor pay and "brown envelope" journalism (bribery); insecurity; fake news; financial difficulties; regulatory sanctions.

## Social media and democracy
| Positive | Negative |
|---|---|
| citizen journalism and rapid information | fake news and misinformation |
| mobilisation of youth (e.g. the **#EndSARS** protests, 2020) | hate speech and incitement |
| direct engagement with leaders | cyberbullying |
| election monitoring and reporting | echo chambers and polarisation |
Nigeria's government suspended **Twitter** from June 2021 to January 2022, showing tensions between regulation and free expression.`,
          examples: `**Example 1.** Which section of the 1999 Constitution gives the media a duty to hold government accountable? *Answer:* **Section 22**.

**Example 2.** What is "brown envelope" journalism? *Answer:* Journalists **accepting bribes** to influence reporting.

**Example 3.** Name one negative effect of social media on democracy. *Answer:* **fake news** (or hate speech).`,
        },
        questions: [
          ["E", "NTA and Radio Nigeria are examples of", "government-owned media", "private newspapers", "pressure groups", "courts", "They are publicly owned broadcasters."],
          ["E", "The body that licenses broadcast stations in Nigeria is the", "National Broadcasting Commission", "INEC", "NCC", "NIMC", "The NBC regulates broadcasting."],
          ["E", "Which is a function of the media?", "informing the public", "making laws", "adjudicating cases", "collecting taxes", "The media inform citizens."],
          ["M", "The section of the 1999 Constitution that directs the media to hold government accountable is", "Section 22", "Section 1", "Section 308", "Section 45", "It is in Chapter II."],
          ["M", "Freedom of expression and the press is guaranteed by", "Section 39", "Section 22", "Section 33", "Section 14", "Section 39 protects expression."],
          ["M", "Journalists accepting bribes to influence stories is known as", "brown envelope journalism", "investigative journalism", "citizen journalism", "agenda setting", "It compromises objectivity."],
          ["M", "Deciding which issues the public considers important is the media function of", "agenda setting", "surveillance only", "entertainment", "advertising", "Media shape public priorities."],
          ["H", "The 2020 youth-led protests against police brutality mobilised largely through social media were known as", "#EndSARS", "June 12", "Occupy Nigeria of 1993", "WAI", "They began in October 2020."],
          ["H", "The Nigerian government suspended Twitter operations from", "June 2021 to January 2022", "1999 to 2003", "2015 to 2016", "2010 only", "It was lifted in January 2022."],
          ["H", "Which is a negative effect of social media on democracy?", "spread of misinformation", "citizen journalism", "direct engagement with leaders", "youth mobilisation", "False information misleads voters."],
        ],
      },
      {
        week: 2,
        title: "Anti-corruption agencies and strategies",
        subtopics: ["Meaning and forms of corruption", "Anti-corruption agencies in Nigeria", "Anti-corruption strategies", "Challenges of the anti-corruption war"],
        objectives: ["Explain corruption and its forms", "Describe the functions of anti-corruption agencies", "Evaluate anti-corruption strategies", "Analyse challenges of fighting corruption"],
        lesson: {
          title: "Fighting Corruption in Nigeria",
          summary: "Evaluate Nigeria's anti-corruption agencies and strategies.",
          minutes: 45,
          notes: `## Corruption
The **abuse of entrusted power for private gain**. Forms: bribery, embezzlement, fraud, nepotism, extortion, money laundering, contract inflation, electoral fraud, ghost workers, abuse of office.

## Agencies
| Agency | Established | Role |
|---|---|---|
| **Code of Conduct Bureau (CCB)** | 1979 (constitutional body) | receives asset declarations of public officers |
| **Code of Conduct Tribunal (CCT)** | 1979 | tries breaches of the Code of Conduct |
| **ICPC** | 2000 | investigates and prosecutes corrupt practices in the public sector; prevention and education |
| **EFCC** | 2003 (Act 2004) | economic and financial crimes, money laundering, advance-fee fraud |
| **NFIU** (Nigerian Financial Intelligence Unit) | 2018 (autonomous) | analyses suspicious financial transactions |
| **Public Complaints Commission** | 1975 | ombudsman for citizens' complaints against officials |

## Strategies
- **asset declaration** and verification
- **Treasury Single Account (TSA)**
- **IPPIS** (payroll verification)
- **whistle-blower policy** (2016) with rewards
- **Bureau of Public Procurement** and open contracting
- **recovery of stolen assets** and forfeiture
- **Nigeria Extractive Industries Transparency Initiative (NEITI)**
- international cooperation and asset repatriation
- value reorientation and civic education

## Challenges
political interference and selective prosecution; slow judicial processes; plea bargains seen as lenient; weak whistle-blower protection; poor funding; systemic corruption; public tolerance of corrupt wealth.`,
          examples: `**Example 1.** Which agency receives asset declarations from public officers? *Answer:* the **Code of Conduct Bureau**.

**Example 2.** When was the ICPC established? *Answer:* **2000**.

**Example 3.** Name one anti-corruption strategy. *Answer:* the **whistle-blower policy** (or TSA).`,
        },
        questions: [
          ["E", "The abuse of entrusted power for private gain is", "corruption", "integrity", "accountability", "transparency", "Corruption betrays public trust."],
          ["E", "The agency that fights economic and financial crimes is the", "EFCC", "NBC", "NCC", "FRSC", "It investigates fraud and money laundering."],
          ["E", "Stealing public funds entrusted to one's care is", "embezzlement", "whistle-blowing", "auditing", "accountability", "It is misappropriation of funds."],
          ["M", "The body that receives asset declarations of public officers is the", "Code of Conduct Bureau", "EFCC", "INEC", "NOA", "Declarations are submitted to the CCB."],
          ["M", "The ICPC was established in", "2000", "2003", "1979", "2016", "It was created by the Corrupt Practices Act 2000."],
          ["M", "The whistle-blower policy of the federal government was introduced in", "2016", "1999", "2003", "1985", "It rewards those who report looting."],
          ["M", "Concealing the illegal origin of money through financial transactions is", "money laundering", "budgeting", "auditing", "taxation", "It disguises stolen funds."],
          ["H", "The tribunal that tries breaches of the Code of Conduct for public officers is the", "Code of Conduct Tribunal", "Election Petition Tribunal", "Supreme Court only", "Customary Court", "It is established by the Constitution."],
          ["H", "The initiative promoting transparency in oil, gas and mining revenues is", "NEITI", "NAFDAC", "NIMC", "NERC", "Nigeria Extractive Industries Transparency Initiative."],
          ["H", "A major challenge of the anti-corruption war is", "political interference and selective prosecution", "too much judicial speed", "excess funding", "absence of laws", "Perceived bias weakens credibility."],
        ],
      },
      {
        week: 3,
        title: "Constitutional development after independence",
        subtopics: ["The 1960 Independence Constitution", "The 1963 Republican Constitution", "The 1979 Constitution", "The 1989 and 1999 Constitutions"],
        objectives: ["Describe the main features of the 1960 and 1963 constitutions", "Explain the innovations of the 1979 Constitution", "Describe the 1989 Constitution and why it was not fully implemented", "Explain the making and features of the 1999 Constitution"],
        lesson: {
          title: "Nigeria's Constitutions Since 1960",
          summary: "Trace Nigeria's post-independence constitutional development.",
          minutes: 45,
          notes: `## 1960 Independence Constitution
- Nigeria became **independent**; **parliamentary** system.
- The **Queen of England** remained head of state, represented by the **Governor-General** (Nnamdi Azikiwe from November 1960).
- **Prime Minister** (Tafawa Balewa) as head of government.
- The **Privy Council** in London remained Nigeria's final court of appeal.
- Federal system of three regions (a fourth, **Mid-West**, created in 1963).

## 1963 Republican Constitution
- Nigeria became a **Republic** (1 October 1963).
- A **ceremonial President** (Azikiwe) replaced the Queen as head of state.
- The **Supreme Court** became the final court of appeal (Privy Council appeals abolished).
- Parliamentary system retained.

## 1979 Constitution
- Drafted by the **Constitution Drafting Committee** (chaired by **Rotimi Williams**) and a Constituent Assembly under the Obasanjo regime.
- Introduced the **presidential system** (executive President), **19 states**, the **Federal Character** principle, fundamental objectives, and a code of conduct.
- Used during the **Second Republic** (1979–1983).

## 1989 Constitution
- Prepared under Babangida for the Third Republic; retained the presidential system with some changes; **never fully implemented** because the transition collapsed after the 1993 annulment.

## 1999 Constitution
- Promulgated by the **Abubakar** regime (Decree 24 of 1999) after the Constitution Debate Coordinating Committee (chaired by Niki Tobi); came into force on **29 May 1999**.
- Presidential, federal (36 states and FCT, 774 LGAs), fundamental rights, and has been **amended** several times (e.g. 2010, 2011, 2018, 2023).`,
          examples: `**Example 1.** Which constitution made Nigeria a republic? *Answer:* the **1963 Republican Constitution**.

**Example 2.** Which constitution introduced the presidential system? *Answer:* the **1979 Constitution**.

**Example 3.** Who chaired the 1979 Constitution Drafting Committee? *Answer:* **Rotimi Williams**.`,
        },
        questions: [
          ["E", "The constitution under which Nigeria became independent was the", "1960 Independence Constitution", "1979 Constitution", "1999 Constitution", "Richards Constitution", "Independence came in 1960."],
          ["E", "The constitution that made Nigeria a republic was the", "1963 Constitution", "1960 Constitution", "1954 Constitution", "1989 Constitution", "Nigeria became a republic in 1963."],
          ["E", "The presidential system was introduced by the", "1979 Constitution", "1960 Constitution", "1963 Constitution", "1954 Constitution", "It began the Second Republic."],
          ["M", "Under the 1960 Constitution, the head of state was the", "Queen of England represented by the Governor-General", "Prime Minister", "executive President", "Chief Justice", "Nigeria remained a dominion."],
          ["M", "The 1963 Constitution made which court Nigeria's final court of appeal?", "Supreme Court", "Privy Council", "High Court", "Court of Appeal", "Appeals to the Privy Council ended."],
          ["M", "The chairman of the 1979 Constitution Drafting Committee was", "Rotimi Williams", "Niki Tobi", "Herbert Macaulay", "Obafemi Awolowo", "He was a renowned lawyer."],
          ["M", "The Mid-Western Region was created in", "1963", "1960", "1967", "1976", "It became the fourth region."],
          ["H", "The 1989 Constitution was not fully implemented because", "the transition collapsed after the 1993 annulment", "it was rejected by the UN", "it was written in French", "it had no provisions on elections", "The Third Republic never took off fully."],
          ["H", "The 1999 Constitution was promulgated by the regime of", "Abdulsalami Abubakar", "Ibrahim Babangida", "Sani Abacha", "Olusegun Obasanjo as civilian President", "It was Decree 24 of 1999."],
          ["H", "The Federal Character principle was first introduced into Nigeria's constitution in", "1979", "1960", "1963", "1946", "It aimed at fair representation."],
        ],
      },
      {
        week: 4,
        title: "International humanitarian law",
        subtopics: ["Meaning of international humanitarian law", "Geneva Conventions and principles", "Protected persons and objects", "The Red Cross and enforcement"],
        objectives: ["Explain international humanitarian law", "Describe the Geneva Conventions and core principles", "Identify persons and objects protected in armed conflict", "Explain the role of the Red Cross and enforcement mechanisms"],
        lesson: {
          title: "Rules of War",
          summary: "Explain the laws that limit the effects of armed conflict.",
          minutes: 45,
          notes: `## Meaning
**International humanitarian law (IHL)**, also called the **law of armed conflict**, is a set of rules that seeks, for humanitarian reasons, to **limit the effects of armed conflict** by protecting people who are not or no longer taking part in hostilities and by restricting the means and methods of warfare.

## Sources
- the four **Geneva Conventions of 1949** and their **Additional Protocols** (1977)
- the **Hague Conventions** (1899 and 1907)
- treaties banning certain weapons (e.g. chemical weapons, anti-personnel landmines)
- customary international law

## Core principles
| Principle | Meaning |
|---|---|
| **distinction** | parties must distinguish between combatants and civilians, and between military objectives and civilian objects |
| **proportionality** | attacks must not cause civilian harm excessive to the military advantage expected |
| **precaution** | take all feasible care to spare civilians |
| **humanity** | prohibits unnecessary suffering |
| **military necessity** | only force required to achieve legitimate military aims |

## Protected persons and objects
civilians, the wounded and sick, **prisoners of war**, medical personnel, humanitarian workers, journalists (as civilians), hospitals, schools, places of worship, cultural property, water supplies, food crops.

## The Red Cross and Red Crescent
The **International Committee of the Red Cross (ICRC)**, founded in **1863** by **Henry Dunant**, protects and assists victims of armed conflict and promotes IHL. The **Nigerian Red Cross Society** provides relief, first aid and tracing of families.
The **red cross, red crescent and red crystal** emblems must be respected.

## Enforcement
national courts; the **International Criminal Court (ICC)** at **The Hague** (established by the **Rome Statute, 1998**; in force 2002) tries genocide, crimes against humanity and war crimes.`,
          examples: `**Example 1.** Who founded the Red Cross? *Answer:* **Henry Dunant**.

**Example 2.** Which principle requires parties to separate civilians from combatants? *Answer:* the principle of **distinction**.

**Example 3.** Where is the International Criminal Court located? *Answer:* **The Hague** (Netherlands).`,
        },
        questions: [
          ["E", "Rules that limit the effects of armed conflict are called", "international humanitarian law", "customary land law", "electoral law", "tax law", "They protect people in war."],
          ["E", "The Red Cross was founded by", "Henry Dunant", "Florence Nightingale", "Abraham Lincoln", "Montesquieu", "He founded it in 1863."],
          ["E", "Which group is protected under international humanitarian law?", "civilians", "only generals", "only arms dealers", "no one", "Civilians must be spared."],
          ["M", "The four Geneva Conventions were adopted in", "1949", "1863", "1998", "1960", "They followed the Second World War."],
          ["M", "The principle that parties must distinguish combatants from civilians is", "distinction", "proportionality", "necessity", "reciprocity", "Civilians must not be targeted."],
          ["M", "Captured enemy soldiers protected by the Geneva Conventions are", "prisoners of war", "refugees only", "mercenaries", "diplomats", "They must be treated humanely."],
          ["M", "The International Criminal Court is located in", "The Hague", "New York", "Geneva", "Addis Ababa", "It sits in the Netherlands."],
          ["H", "The principle that civilian harm must not be excessive in relation to the expected military advantage is", "proportionality", "distinction", "humanity", "neutrality", "Attacks must be proportionate."],
          ["H", "The treaty that established the International Criminal Court is the", "Rome Statute", "Treaty of Lagos", "Magna Carta", "Banjul Charter", "It was adopted in 1998."],
          ["H", "Which emblems must be respected as protective symbols in armed conflict?", "red cross, red crescent and red crystal", "national flags only", "party logos", "company logos", "They protect medical and humanitarian work."],
        ],
      },
      {
        week: 5,
        title: "Intergovernmental relations in Nigeria",
        subtopics: ["Meaning of intergovernmental relations", "Federal–state relations", "State–local government relations", "Problems and solutions"],
        objectives: ["Explain intergovernmental relations", "Describe relations between federal and state governments", "Describe relations between state and local governments", "Analyse problems of intergovernmental relations and suggest solutions"],
        lesson: {
          title: "How Levels of Government Relate",
          summary: "Analyse relationships among federal, state and local governments.",
          minutes: 45,
          notes: `## Meaning
**Intergovernmental relations (IGR)** are the **interactions, cooperation and conflicts** among the **federal, state and local governments** in a federal system.

## Federal–state relations
- **constitutional**: division of powers (Exclusive, Concurrent, Residual)
- **fiscal**: sharing of the **Federation Account** via the **Federation Account Allocation Committee (FAAC)**; grants; bail-outs
- **administrative**: joint programmes (health, education, security)
- **political**: party affiliations; the **National Economic Council** (chaired by the Vice-President, with governors) and the **Council of State**
- **judicial**: disputes settled by the **Supreme Court** (original jurisdiction in disputes between the federation and states or between states)

## State–local government relations
- States create laws for LG structure and finance; **State Houses of Assembly** oversee LGs.
- **State–Local Government Joint Account** (Section 162): federal allocations to LGs pass through it.
- **SIECs** conduct LG elections.
- **Local Government Service Commissions** manage LG staff.

## Problems
- over-concentration of revenue at the centre; dependence on federal allocations
- state interference in LG funds via the joint account; **caretaker committees** instead of elected councils
- conflicts over resource control and policing
- party differences between levels causing friction
- overlapping functions and duplication

## Solutions and recent developments
fiscal federalism and improved internally generated revenue; respect for constitutional boundaries; functional autonomy for local governments — the **Supreme Court judgement of July 2024** held that federal allocations to local governments should be paid directly to democratically elected councils; cooperative federalism through regular consultations.`,
          examples: `**Example 1.** Which body shares monthly federal revenue among the three levels of government? *Answer:* the **Federation Account Allocation Committee (FAAC)**.

**Example 2.** Which court settles disputes between the federal government and a state? *Answer:* the **Supreme Court** (original jurisdiction).

**Example 3.** Name one problem of state–local government relations. *Answer:* **state interference in LG funds** through the joint account.`,
        },
        questions: [
          ["E", "Interactions among federal, state and local governments are called", "intergovernmental relations", "international relations", "public relations", "industrial relations", "They occur within a federation."],
          ["E", "Monthly federal revenue is shared among the three tiers through the", "Federation Account Allocation Committee", "INEC", "NBC", "NOA", "FAAC distributes allocations."],
          ["E", "Local government staff matters are managed by", "Local Government Service Commissions", "INEC", "the Senate", "FAAC", "They handle recruitment and discipline of LG staff."],
          ["M", "Disputes between the federal government and a state are heard originally by the", "Supreme Court", "Magistrate Court", "Customary Court", "Sharia Court of Appeal", "It has original jurisdiction."],
          ["M", "The account through which federal allocations to LGs pass in each state is the", "State–Local Government Joint Account", "Treasury Single Account", "Federation Account only", "Excess Crude Account", "Section 162 provides for it."],
          ["M", "The National Economic Council is chaired by the", "Vice-President", "President of the Senate", "Chief Justice", "Speaker", "Governors are members."],
          ["M", "Appointing unelected persons to run local governments is called using", "caretaker committees", "elected councils", "SIEC officials", "the judiciary", "It undermines LG democracy."],
          ["H", "The Supreme Court judgement of July 2024 held that federal allocations to local governments should be", "paid directly to democratically elected councils", "paid only to governors", "abolished", "paid to the President", "It strengthened LG autonomy."],
          ["H", "Over-dependence of states on federal allocations weakens", "fiscal federalism", "the Supreme Court", "the Constitution's supremacy", "foreign relations", "States should generate more revenue."],
          ["H", "Cooperative federalism means", "levels of government working together through consultation", "one level dominating the others", "no interaction among levels", "abolishing states", "Collaboration improves service delivery."],
        ],
      },
      {
        week: 6,
        title: "Nationalism and national integration",
        subtopics: ["Meaning of nationalism", "Phases of Nigerian nationalism", "National integration: meaning and agencies", "Obstacles to integration and solutions"],
        objectives: ["Explain nationalism", "Describe the phases of Nigerian nationalism", "Explain national integration and its agencies", "Analyse obstacles to national integration and suggest solutions"],
        lesson: {
          title: "Building One Nigeria",
          summary: "Analyse nationalism and the continuing project of national integration.",
          minutes: 45,
          notes: `## Nationalism
**Nationalism** is a **feeling of loyalty and devotion to one's nation**, and in colonial Nigeria it was the **struggle to end foreign rule** and achieve self-government.

## Phases of Nigerian nationalism
| Phase | Features |
|---|---|
| **early resistance** (19th century) | kings and communities resisted British occupation (e.g. Jaja of Opobo, Nana of Itsekiri, Oba Ovonramwen of Benin) |
| **early nationalism** (1920s–1930s) | elite demands for reforms; NNDP (1923); Lagos press; West African Students' Union |
| **militant/mass nationalism** (1940s–1950s) | NCNC, Action Group, NPC; Zikist Movement; general strike of 1945; demands for independence |
| **constitutional negotiations** (1950s) | London conferences leading to self-government and independence in 1960 |

## Factors that aided nationalism
Western education, the press (e.g. *West African Pilot*), Second World War experiences, the Atlantic Charter, Pan-Africanism, independence of India (1947) and Ghana (1957), colonial injustices.

## National integration
The process of **uniting diverse groups** into one nation with shared loyalty.
Agencies and policies: NYSC (1973), unity schools, Federal Character Commission, state creation, national sports and festivals, national languages and symbols, national institutions (armed forces, universities).

## Obstacles
ethnicity, religious intolerance, marginalisation, corruption, insecurity, indigene–settler discrimination, unequal development, hate speech.

## Solutions
justice and equity, good governance, inclusive appointments, fighting corruption, civic education, inter-ethnic exchanges, rule of law.`,
          examples: `**Example 1.** Name one early resister of British rule in Nigeria. *Answer:* **Jaja of Opobo** (or Oba Ovonramwen of Benin).

**Example 2.** Name one factor that aided Nigerian nationalism. *Answer:* **Western education** (or the press).

**Example 3.** Which commission ensures fair representation in federal appointments? *Answer:* the **Federal Character Commission**.`,
        },
        questions: [
          ["E", "Loyalty and devotion to one's nation and the struggle against foreign rule is", "nationalism", "tribalism", "colonialism", "imperialism", "Nationalists sought independence."],
          ["E", "The process of uniting diverse groups into one nation is", "national integration", "secession", "colonisation", "migration", "It builds shared loyalty."],
          ["E", "Which scheme promotes national integration by posting graduates to other states?", "NYSC", "INEC", "NAFDAC", "NDLEA", "It began in 1973."],
          ["M", "Which Nigerian king resisted British trade control and was exiled in 1887?", "Jaja of Opobo", "Tafawa Balewa", "Nnamdi Azikiwe", "Obafemi Awolowo", "He resisted British traders."],
          ["M", "The newspaper founded by Nnamdi Azikiwe that promoted nationalism was the", "West African Pilot", "Daily Times", "Punch", "Vanguard", "It was founded in 1937."],
          ["M", "The general strike that strengthened nationalism took place in", "1945", "1960", "1914", "1999", "Workers demanded better conditions."],
          ["M", "The independence of which country in 1957 inspired Nigerian nationalists?", "Ghana", "Kenya", "South Africa", "Egypt", "Ghana was the first in sub-Saharan Africa."],
          ["H", "The Oba of Benin exiled by the British after the 1897 expedition was", "Ovonramwen", "Akenzua II", "Ewuare", "Erediauwa", "He resisted British incursion."],
          ["H", "The body that enforces fair representation of states in federal appointments is the", "Federal Character Commission", "INEC", "NBC", "RMAFC", "It implements the Federal Character principle."],
          ["H", "Which is an obstacle to national integration?", "marginalisation of some groups", "justice and equity", "inclusive appointments", "civic education", "Exclusion breeds resentment."],
        ],
      },
    ],
  },
];
