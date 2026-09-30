import type { TermPlan } from "../types";

/** SS1 Civic Education — original Precious PS content aligned to the senior secondary curriculum (WASSCE/NECO). */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Values in national life",
        subtopics: ["Meaning and components of values", "Nigerian national values", "Factors that shape values", "Effects of the decline of values"],
        objectives: ["Explain values and their components", "Identify core national values of Nigeria", "Analyse factors that shape values", "Evaluate the effects of the decline of values on national development"],
        lesson: {
          title: "Values and the Nation",
          summary: "Analyse national values and how their decline affects development.",
          minutes: 45,
          notes: `## Meaning
**Values** are **enduring beliefs about what is good, right, desirable and worthwhile**; they serve as standards that guide behaviour and choices.
Components: **beliefs** (what we accept as true), **attitudes** (tendencies to respond), and **behaviour** (actions).

## Core national values of Nigeria
Section 23 of the 1999 Constitution states the national ethics as **Discipline, Integrity, Dignity of Labour, Social Justice, Religious Tolerance, Self-reliance and Patriotism**.
Other widely taught values: honesty, contentment, cooperation, courage, fairness, respect for constituted authority.

## Factors that shape values
| Factor | Influence |
|---|---|
| family | first source of moral teaching |
| religion | ethical codes and sanctions |
| education | knowledge, character training |
| peer groups | acceptance or rejection of values |
| mass media and social media | role models, trends (positive or negative) |
| leadership | leaders' conduct sets national standards |
| economic conditions | poverty may push people towards compromise |
| law and its enforcement | punishment and reward reinforce values |

## Decline of values
**Signs:** corruption, examination malpractice, cultism, internet fraud, ritual killings, disrespect for elders, indecent dressing, get-rich-quick mentality.
**Effects:** insecurity, poor governance, loss of investor confidence, poor international image, underdevelopment, loss of trust.

## Restoring values
exemplary leadership, value-based education (Civic Education), strict law enforcement, reward of merit, strong families, responsible media, the **National Orientation Agency (NOA)** campaigns.`,
          examples: `**Example 1.** List the national ethics in Section 23 of the Constitution. *Answer:* **Discipline, Integrity, Dignity of Labour, Social Justice, Religious Tolerance, Self-reliance and Patriotism**.

**Example 2.** How does leadership shape national values? *Answer:* Citizens tend to **copy the conduct of leaders**; corrupt leaders encourage corruption, upright leaders encourage integrity.

**Example 3.** Name one effect of the decline of values. *Answer:* **poor international image** (or insecurity, corruption).`,
        },
        questions: [
          ["E", "Enduring beliefs about what is good and worthwhile are called", "values", "laws of nature", "taxes", "decrees", "Values guide choices."],
          ["E", "The national ethics of Nigeria are stated in which section of the 1999 Constitution?", "Section 23", "Section 1", "Section 35", "Section 308", "Section 23 lists them."],
          ["E", "Which of these is one of Nigeria's national ethics in the Constitution?", "dignity of labour", "tribalism", "nepotism", "greed", "It is listed in Section 23."],
          ["M", "Which set contains only national ethics listed in Section 23?", "discipline, integrity and patriotism", "greed, discipline and patriotism", "tribalism, integrity and self-reliance", "nepotism, social justice and discipline", "All three are in Section 23."],
          ["M", "Which is a sign of the decline of values in society?", "internet fraud", "religious tolerance", "self-reliance", "social justice", "Fraud shows moral decline."],
          ["M", "The agency responsible for public enlightenment and value reorientation in Nigeria is the", "National Orientation Agency", "NDLEA", "NCC", "NIMC", "The NOA runs value campaigns."],
          ["M", "Tendencies to respond positively or negatively to people or situations are", "attitudes", "laws", "customs of dress", "resources", "Attitudes are a component of values."],
          ["H", "How can poverty contribute to the decline of values?", "It may push people to compromise principles for survival.", "It always strengthens values.", "It removes all temptation.", "It has no relationship with values.", "Economic hardship tests integrity."],
          ["H", "Why is exemplary leadership important for restoring values?", "Citizens tend to copy the conduct of leaders.", "Leaders are above values.", "Values come only from the media.", "Leadership has no influence.", "Leaders set national standards."],
          ["H", "Which is an effect of the decline of values on the economy?", "loss of investor confidence", "more foreign investment", "higher productivity", "stronger institutions", "Investors avoid corrupt environments."],
        ],
      },
      {
        week: 2,
        title: "Citizenship: meaning, types and importance",
        subtopics: ["Meaning of citizen and citizenship", "Citizen, indigene and alien", "Qualities of a good citizen", "Citizenship education"],
        objectives: ["Distinguish citizen, indigene, resident and alien", "Explain types of citizenship", "Describe the qualities of a good citizen", "Explain the importance of citizenship education"],
        lesson: {
          title: "Being a Citizen",
          summary: "Distinguish citizens from other residents and describe good citizenship.",
          minutes: 45,
          notes: `## Key terms
| Term | Meaning |
|---|---|
| **citizen** | a legal member of a state entitled to full rights and bound by duties |
| **citizenship** | the legal status and relationship between an individual and the state |
| **indigene** | a person whose parents or ancestors belong to a particular community or state within the country |
| **resident** | a person who lives in a place, citizen or not |
| **alien** | a foreigner living in a country who is not its citizen |
| **stateless person** | a person not recognised as a citizen by any state |

## Types (modes) of citizenship
**birth**, **registration**, **naturalisation**; also **honorary citizenship** (ceremonial, without full rights) in some countries.

## Qualities of a good citizen
patriotism, obedience to the law, payment of taxes, active political participation, tolerance, honesty and integrity, respect for the rights of others, readiness to defend the nation, protection of public property, service to the community.

## Citizenship education
**Citizenship education** is education that equips people with the **knowledge, skills and values** needed to participate responsibly in the life of their community and nation.
Importance:
- awareness of **rights and duties**
- promotes **national unity** and patriotism
- prepares youths for **leadership**
- reduces social vices
- strengthens **democracy** through informed participation

## Indigeneship issues in Nigeria
Discrimination between "indigenes" and "settlers" (e.g. in jobs and admissions) can cause conflict; the Constitution guarantees freedom from discrimination and freedom of movement and residence for all citizens.`,
          examples: `**Example 1.** A Ghanaian trader living in Lagos is a/an **alien** in Nigeria.

**Example 2.** What is citizenship education? *Answer:* Education that gives people the **knowledge, skills and values** for responsible citizenship.

**Example 3.** Name one quality of a good citizen. *Answer:* **obedience to the law** (or payment of taxes).`,
        },
        questions: [
          ["E", "A foreigner living in a country who is not its citizen is an", "alien", "indigene", "citizen by birth", "elected official", "Aliens lack citizenship."],
          ["E", "The legal relationship between an individual and the state is", "citizenship", "tribalism", "migration", "taxation only", "It confers rights and duties."],
          ["E", "Which is a quality of a good citizen?", "payment of taxes", "tax evasion", "vandalism", "apathy", "Taxes support the state."],
          ["M", "A person whose ancestors belong to a particular community is an", "indigene of that community", "alien", "stateless person", "honorary citizen", "Indigeneship is tied to ancestry."],
          ["M", "A person not recognised as a citizen by any state is", "stateless", "a dual citizen", "an indigene", "a diplomat", "They lack nationality."],
          ["M", "Education that equips people with knowledge and values for responsible participation is", "citizenship education", "vocational training only", "physical education", "military training", "It builds good citizens."],
          ["M", "Citizenship granted as a mark of respect without full rights is", "honorary citizenship", "citizenship by birth", "citizenship by naturalisation", "dual citizenship", "It is ceremonial."],
          ["H", "Discrimination between 'indigenes' and 'settlers' in Nigeria can lead to", "communal conflict", "national unity", "higher investment", "better integration", "Exclusion causes resentment."],
          ["H", "Which constitutional right protects Nigerians who live outside their states of origin?", "freedom of movement and freedom from discrimination", "right to bear arms", "right to private armies", "right to secede", "All citizens may reside anywhere in Nigeria."],
          ["H", "How does citizenship education strengthen democracy?", "It produces informed citizens who participate responsibly.", "It discourages voting.", "It promotes apathy.", "It weakens institutions.", "Informed participation sustains democracy."],
        ],
      },
      {
        week: 3,
        title: "Human rights: evolution and features",
        subtopics: ["Meaning of human rights", "Historical development of human rights", "Features of human rights", "Human rights instruments"],
        objectives: ["Define human rights", "Trace the historical development of human rights", "State the features of human rights", "Identify major national and international human rights instruments"],
        lesson: {
          title: "How Human Rights Developed",
          summary: "Trace the development of human rights and identify key instruments.",
          minutes: 45,
          notes: `## Meaning
**Human rights** are the **inherent, universal and inalienable rights** that belong to every person by virtue of being human.

## Historical development
| Year | Milestone |
|---|---|
| 1215 | **Magna Carta** (England): limited the King's power and protected certain rights |
| 1689 | **English Bill of Rights** |
| 1776 | **American Declaration of Independence** ("all men are created equal") |
| 1789 | **French Declaration of the Rights of Man and of the Citizen** |
| 1945 | **United Nations Charter** |
| 1948 | **Universal Declaration of Human Rights (UDHR)** |
| 1966 | International Covenants on Civil and Political Rights, and on Economic, Social and Cultural Rights |
| 1981 | **African Charter on Human and Peoples' Rights** (Banjul Charter), adopted by the OAU; in force 1986 |
| 1989 | **Convention on the Rights of the Child** |

## Features
universal, inalienable, indivisible, interdependent, equal and non-discriminatory, justiciable (enforceable in court where provided by law), limited by the rights of others and public interest.

## Instruments in Nigeria
- **Chapter IV of the 1999 Constitution** (fundamental rights)
- **African Charter on Human and Peoples' Rights (Ratification and Enforcement) Act** — Nigeria domesticated the Banjul Charter
- **Child Rights Act (2003)**
- **Violence Against Persons (Prohibition) Act (2015)**
- **Discrimination Against Persons with Disabilities (Prohibition) Act (2018)**
- **Anti-Torture Act (2017)**

## Institutions
National Human Rights Commission (1995), courts, Legal Aid Council, NGOs, the African Commission and African Court on Human and Peoples' Rights.`,
          examples: `**Example 1.** Which document of 1215 limited the power of the English King? *Answer:* **Magna Carta**.

**Example 2.** The African Charter on Human and Peoples' Rights is also called the **Banjul Charter**.

**Example 3.** Name one Nigerian law that protects human rights. *Answer:* the **Anti-Torture Act (2017)** (or Child Rights Act).`,
        },
        questions: [
          ["E", "Inherent and universal rights belonging to every person are", "human rights", "privileges of office", "customs", "bye-laws", "They belong to all humans."],
          ["E", "The Magna Carta was signed in", "1215", "1789", "1948", "1960", "It limited the English King's power."],
          ["E", "The African Charter on Human and Peoples' Rights is also known as the", "Banjul Charter", "Magna Carta", "Treaty of Lagos", "Geneva Convention", "It was named after Banjul, The Gambia."],
          ["M", "The French Declaration of the Rights of Man and of the Citizen was issued in", "1789", "1215", "1948", "1981", "It followed the French Revolution."],
          ["M", "The African Charter on Human and Peoples' Rights was adopted in", "1981", "1948", "1963", "2003", "The OAU adopted it in 1981."],
          ["M", "Human rights that can be enforced in court are described as", "justiciable", "inalienable only", "optional", "customary", "Courts can enforce them."],
          ["M", "The law that criminalises torture in Nigeria is the", "Anti-Torture Act", "Land Use Act", "Electoral Act", "Companies Act", "It was passed in 2017."],
          ["H", "Human rights are indivisible because", "all rights are interconnected and equally important", "some rights can be sold", "rights can be divided among classes", "only civil rights matter", "Denying one right affects others."],
          ["H", "The two International Covenants adopted by the UN in 1966 cover", "civil and political rights, and economic, social and cultural rights", "trade and tariffs", "maritime boundaries", "outer space", "They expanded on the UDHR."],
          ["H", "The National Human Rights Commission of Nigeria was established in", "1995", "1960", "2010", "1948", "It was created in 1995."],
        ],
      },
      {
        week: 4,
        title: "Human rights: categories and limitations",
        subtopics: ["Civil and political rights", "Economic, social and cultural rights", "Environmental and developmental rights", "Limitations and derogation of rights"],
        objectives: ["Classify human rights into generations or categories", "Give examples of each category", "Explain lawful limitations of rights", "Explain derogation of rights during emergencies"],
        lesson: {
          title: "Kinds of Rights and Their Limits",
          summary: "Classify human rights and explain lawful limitations and derogation.",
          minutes: 45,
          notes: `## Generations of rights
| Generation | Category | Examples |
|---|---|---|
| **first** | **civil and political rights** | life, dignity, liberty, fair hearing, privacy, expression, religion, assembly, movement, voting |
| **second** | **economic, social and cultural rights** | education, work, health, housing, social security, culture |
| **third** | **collective/solidarity rights** | development, peace, clean environment, self-determination |

## In the 1999 Constitution
- **Chapter IV (Sections 33–46)**: civil and political rights — **justiciable** (enforceable in court).
- **Chapter II**: economic, social, cultural and environmental objectives — generally **non-justiciable** (Section 6(6)(c)), though they guide government policy.

## Limitations of rights
Rights are not absolute. **Section 45** allows laws that are **reasonably justifiable in a democratic society**:
- in the interest of **defence, public safety, public order, public morality or public health**
- to **protect the rights and freedoms of others**
Examples: arrest of suspects (liberty), quarantine during epidemics (movement), laws against hate speech and defamation (expression), lawful execution of a court sentence (life, under Section 33).

## Derogation
**Derogation** is the temporary suspension or restriction of certain rights during a **period of emergency** (e.g. war or declared state of emergency), provided the measures are reasonably justifiable (Section 45(2)). Some rights remain non-derogable under international law, e.g. freedom from **torture** and **slavery**.`,
          examples: `**Example 1.** Is the right to vote civil/political or economic/social? *Answer:* **civil and political** (first generation).

**Example 2.** Why can a person be quarantined during an epidemic despite freedom of movement? *Answer:* Section 45 permits limitations in the interest of **public health**.

**Example 3.** Which rights in the Constitution are generally non-justiciable? *Answer:* those in **Chapter II** (Fundamental Objectives and Directive Principles).`,
        },
        questions: [
          ["E", "The right to life is an example of", "civil and political rights", "economic rights", "environmental rights", "cultural rights", "It is a first-generation right."],
          ["E", "The right to education is an example of", "economic, social and cultural rights", "civil rights only", "military rights", "political rights only", "It is a second-generation right."],
          ["E", "Human rights are not absolute because they", "can be limited by law in the public interest", "never exist", "belong only to leaders", "can be sold", "Section 45 permits limitations."],
          ["M", "The right to a clean environment belongs to the", "third generation of rights", "first generation", "second generation", "no generation", "Collective rights form the third generation."],
          ["M", "Fundamental rights in Chapter IV of the Constitution are", "justiciable", "non-justiciable", "optional", "customary only", "Courts enforce them."],
          ["M", "The section of the 1999 Constitution that permits restriction of rights for public safety is", "Section 45", "Section 23", "Section 1", "Section 14", "It allows justifiable limitations."],
          ["M", "Quarantine of infected persons during an epidemic limits freedom of movement in the interest of", "public health", "tribalism", "party politics", "personal revenge", "Health emergencies justify limits."],
          ["H", "The Fundamental Objectives and Directive Principles in Chapter II are generally", "non-justiciable", "enforceable by any court", "criminal laws", "military decrees", "Section 6(6)(c) makes them non-justiciable."],
          ["H", "Temporary suspension of certain rights during a declared emergency is called", "derogation", "naturalisation", "impeachment", "delegation", "It must be reasonably justifiable."],
          ["H", "Which right is regarded as non-derogable under international law?", "freedom from torture", "freedom of movement", "right to peaceful assembly", "right to property", "Torture is never permitted."],
        ],
      },
      {
        week: 5,
        title: "Interpersonal relationships and emotional intelligence",
        subtopics: ["Meaning of interpersonal relationships", "Emotional intelligence", "Communication and conflict management", "Relationships and national unity"],
        objectives: ["Explain interpersonal relationships in the wider society", "Describe the components of emotional intelligence", "Apply communication and conflict-management skills", "Relate good relationships to national unity"],
        lesson: {
          title: "Relating Well with Others",
          summary: "Apply emotional intelligence and communication skills to build healthy relationships.",
          minutes: 45,
          notes: `## Interpersonal relationships
Associations between people at home, school, workplace and community, built on **trust, respect and communication**.

## Emotional intelligence (EI)
The ability to **recognise, understand and manage one's own emotions** and to **recognise and influence the emotions of others**. Popularised by **Daniel Goleman**.
| Component | Meaning |
|---|---|
| **self-awareness** | knowing one's emotions, strengths and weaknesses |
| **self-regulation** | controlling impulses and anger |
| **motivation** | drive to achieve beyond reward |
| **empathy** | understanding others' feelings |
| **social skills** | managing relationships, teamwork, persuasion |

## Communication skills
- **active listening**: attention, no interruption, feedback
- clear and **respectful speech**
- appropriate **non-verbal** cues (eye contact, tone, gestures)
- "**I-statements**": *"I feel upset when…"* rather than blaming

## Managing conflict in relationships
identify the problem, stay calm, listen to both sides, seek **win–win** solutions, apologise and forgive, involve a mediator if needed.

## Unhealthy relationships
bullying, manipulation, abuse, peer pressure into vices — seek help from trusted adults or counsellors.

## Relationships and national unity
Good inter-personal and **inter-group** relationships (across ethnicity and religion) reduce prejudice and promote peace, cooperation and national integration.`,
          examples: `**Example 1.** Controlling your anger when provoked is which component of EI? *Answer:* **self-regulation**.

**Example 2.** Rewrite as an I-statement: *"You never listen to me!"* *Answer:* **"I feel ignored when I am interrupted."**

**Example 3.** Who popularised the concept of emotional intelligence? *Answer:* **Daniel Goleman**.`,
        },
        questions: [
          ["E", "The ability to understand and manage one's emotions and those of others is", "emotional intelligence", "physical fitness", "tribalism", "apathy", "EI supports relationships."],
          ["E", "Understanding how another person feels is", "empathy", "self-regulation", "motivation only", "aggression", "Empathy is a key EI component."],
          ["E", "Paying full attention and giving feedback while someone speaks is", "active listening", "interrupting", "gossip", "bullying", "It improves communication."],
          ["M", "Controlling one's anger when provoked is", "self-regulation", "self-awareness", "social skills only", "motivation", "It manages impulses."],
          ["M", "Knowing one's own emotions, strengths and weaknesses is", "self-awareness", "empathy", "social skill", "arrogance", "It is the foundation of EI."],
          ["M", "The concept of emotional intelligence was popularised by", "Daniel Goleman", "A. V. Dicey", "Montesquieu", "Karl Marx", "He wrote widely on EI."],
          ["M", "Which statement is an 'I-statement'?", "I feel upset when my work is taken without permission.", "You are always rude.", "You never do anything right.", "Everyone hates you.", "It expresses feelings without blame."],
          ["H", "A solution in which both parties in a conflict gain something is a", "win–win solution", "win–lose solution", "lose–lose solution", "zero-sum outcome", "Both sides are satisfied."],
          ["H", "How do good inter-group relationships promote national integration?", "They reduce prejudice and build cooperation across groups.", "They increase ethnic rivalry.", "They encourage separation.", "They have no effect.", "Trust across groups builds unity."],
          ["H", "Leading and influencing others positively in a team is part of", "social skills", "self-awareness only", "withdrawal", "apathy", "Social skills manage relationships."],
        ],
      },
      {
        week: 6,
        title: "Law and order in society",
        subtopics: ["Meaning and features of law", "Types of law", "Breakdown of law and order", "Maintaining law and order"],
        objectives: ["Define law and state its features", "Classify types of law", "Explain causes and consequences of breakdown of law and order", "Describe ways of maintaining law and order"],
        lesson: {
          title: "Law, Order and Society",
          summary: "Classify laws and explain how law and order are maintained.",
          minutes: 45,
          notes: `## Law
A **law** is a **rule of conduct made or recognised by the state, binding on all, and enforced by sanctions**.
Features: made by a recognised authority; binding; backed by **sanctions**; generally written; applies equally; changeable by due process.

## Types of law
| Type | Meaning / example |
|---|---|
| **constitutional law** | rules on the structure of government and rights (the Constitution) |
| **criminal law** | offences against the state (murder, robbery); prosecuted by the state; punishment |
| **civil law** | disputes between private persons (contracts, land, divorce); remedy is compensation |
| **statute law** | Acts of the legislature |
| **customary law** | customs accepted as binding |
| **Islamic (Sharia) law** | applied in some states for Muslims in specified matters |
| **case law (judicial precedent)** | earlier decisions of superior courts |
| **administrative law** | rules governing public agencies |
| **international law** | rules governing relations among states |
| **delegated (subsidiary) legislation** | rules made by bodies authorised by the legislature (e.g. regulations of ministries) |

## Breakdown of law and order
**Causes:** injustice, poverty and unemployment, corruption, weak law enforcement, ethnic and religious intolerance, electoral fraud, drug abuse, proliferation of small arms.
**Consequences:** insecurity, loss of lives and property, displacement, economic decline, loss of investor confidence.

## Maintaining law and order
effective **police** and security agencies, independent **courts**, good governance and justice, job creation, public enlightenment, community policing, respect for human rights.`,
          examples: `**Example 1.** Is a dispute over breach of contract a criminal or civil matter? *Answer:* **civil**.

**Example 2.** Regulations made by a ministry under an Act are an example of **delegated legislation**.

**Example 3.** Name one cause of breakdown of law and order. *Answer:* **weak law enforcement** (or injustice).`,
        },
        questions: [
          ["E", "A binding rule made by the state and enforced by sanctions is", "a law", "a custom only", "an opinion", "a proverb", "Laws are enforceable."],
          ["E", "Murder and robbery are offences under", "criminal law", "civil law", "international law", "administrative law", "They are crimes against the state."],
          ["E", "Acts passed by the legislature are called", "statute law", "customary law", "case law", "international law", "Statutes are enacted laws."],
          ["M", "A dispute over breach of contract is handled under", "civil law", "criminal law", "military law", "constitutional law only", "It is a private dispute."],
          ["M", "Rules made by a ministry under powers given by an Act are", "delegated legislation", "customary law", "international law", "case law", "The legislature delegates power."],
          ["M", "Rules governing relations among states are", "international law", "customary law", "civil law", "bye-laws", "They regulate state relations."],
          ["M", "Which is a feature of law?", "it is backed by sanctions", "it is optional", "it applies only to the poor", "it cannot be changed", "Sanctions make laws enforceable."],
          ["H", "Earlier decisions of superior courts used to decide later cases are", "case law (judicial precedent)", "statute law", "delegated legislation", "customary law", "Courts follow precedent."],
          ["H", "Which is a cause of breakdown of law and order?", "proliferation of small arms", "effective policing", "good governance", "job creation", "Illegal arms fuel violence."],
          ["H", "Community policing helps to maintain law and order by", "involving citizens in crime prevention", "removing the police", "encouraging jungle justice", "ignoring local knowledge", "Local cooperation improves security."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Representative democracy",
        subtopics: ["Meaning of representative democracy", "Features of representative democracy", "Representation and constituencies", "Merits and demerits"],
        objectives: ["Explain representative democracy", "State its features", "Explain constituencies and representation", "Evaluate the merits and demerits of representative democracy"],
        lesson: {
          title: "Governing Through Representatives",
          summary: "Explain representative democracy, its features and its strengths and weaknesses.",
          minutes: 45,
          notes: `## Meaning
**Representative (indirect) democracy** is a system in which citizens **elect representatives** to make laws and decisions on their behalf for a fixed period.

## Features
- **periodic elections** based on universal adult suffrage
- **constituencies** (geographical areas each represented by an elected member)
- **political parties** and competition
- **accountability** of representatives to voters
- rule of law and constitutionalism
- majority rule with minority rights
- **recall** of representatives (Section 69 of the 1999 Constitution allows constituents to recall a legislator by petition and referendum)

## Representation in Nigeria
| Legislature | Membership |
|---|---|
| **Senate** | **109** senators: 3 per state + 1 for the FCT |
| **House of Representatives** | **360** members from federal constituencies |
| **State Houses of Assembly** | members from state constituencies |
| **Local government councils** | councillors from wards |

## Merits
suitable for large populations; decisions made by (ideally) knowledgeable representatives; accountability through elections; peaceful change of government; protects rights.

## Demerits
representatives may pursue personal interests; vote buying and rigging; high cost of elections; minority views may be ignored; voter apathy; weak link between representatives and constituents.`,
          examples: `**Example 1.** How many senators does Nigeria have? *Answer:* **109** (3 per state and 1 for the FCT).

**Example 2.** How many members are in the House of Representatives? *Answer:* **360**.

**Example 3.** How can constituents remove a non-performing legislator? *Answer:* by **recall** (Section 69).`,
        },
        questions: [
          ["E", "A system in which citizens elect people to make decisions for them is", "representative democracy", "direct democracy", "monarchy", "dictatorship", "Representatives act for citizens."],
          ["E", "The Nigerian Senate has", "109 members", "360 members", "36 members", "774 members", "Three per state plus one for the FCT."],
          ["E", "The House of Representatives has", "360 members", "109 members", "36 members", "774 members", "They represent federal constituencies."],
          ["M", "Each state in Nigeria is represented in the Senate by", "3 senators", "1 senator", "2 senators", "5 senators", "The FCT has 1."],
          ["M", "A geographical area represented by an elected member is a", "constituency", "ministry", "parastatal", "court", "Voters in a constituency elect a representative."],
          ["M", "Which is a merit of representative democracy?", "it suits large populations", "it requires everyone to attend every meeting", "it removes elections", "it abolishes parties", "Not everyone can meet together."],
          ["M", "Which is a demerit of representative democracy?", "representatives may pursue personal interests", "it is ideal for tiny villages only", "it has no elections", "it abolishes accountability", "Elected officials may betray voters."],
          ["H", "The process by which constituents remove a legislator before the end of the term is", "recall", "impeachment by the President", "veto", "naturalisation", "Section 69 provides for recall."],
          ["H", "Voting by all adult citizens regardless of sex, wealth or religion is", "universal adult suffrage", "restricted franchise", "one-party voting", "proxy rule", "Every adult may vote."],
          ["H", "Councillors in local government are elected from", "wards", "states", "senatorial districts", "federal constituencies", "Wards are the smallest electoral units."],
        ],
      },
      {
        week: 2,
        title: "Pillars of democracy",
        subtopics: ["Meaning of pillars of democracy", "Institutional pillars", "Social pillars", "Threats to the pillars of democracy"],
        objectives: ["Explain the pillars of democracy", "Describe institutional pillars and their roles", "Describe social pillars such as the press and civil society", "Identify threats to democracy in Nigeria"],
        lesson: {
          title: "What Holds Democracy Up",
          summary: "Explain the institutions and practices that sustain democracy.",
          minutes: 45,
          notes: `## Meaning
The **pillars of democracy** are the **institutions, principles and practices** that support and sustain democratic government. When they are weak, democracy is threatened.

## Institutional pillars
| Pillar | Role |
|---|---|
| **the Constitution** | supreme law; limits power |
| **the legislature** | law-making, representation, oversight |
| **the executive** | implementation of laws and policies |
| **an independent judiciary** | interprets laws; protects rights; settles electoral disputes |
| **an independent electoral body (INEC)** | conducts credible elections |
| **political parties** | offer choices; form government and opposition |
| **security agencies** | protect lives, property and the electoral process neutrally |

## Social pillars
- **free press** (the "fourth estate")
- **civil society organisations**
- **informed and active citizens**
- **public opinion**

## Principles
rule of law, separation of powers, respect for human rights, periodic free and fair elections, accountability and transparency, majority rule and minority rights.

## Threats in Nigeria
electoral malpractice and violence, corruption, executive dominance and disregard for court orders, weak opposition and "godfatherism", insecurity, ethnic and religious politics, voter apathy, poverty and illiteracy, fake news.

## Strengthening democracy
electoral reforms (e.g. Electoral Act 2022 and use of technology), judicial independence, anti-corruption efforts, civic education, internal party democracy.`,
          examples: `**Example 1.** Name one institutional pillar of democracy. *Answer:* **an independent judiciary** (or INEC).

**Example 2.** What is "godfatherism"? *Answer:* Control of politicians by powerful sponsors who **impose candidates and demand rewards**.

**Example 3.** Name one threat to democracy in Nigeria. *Answer:* **electoral violence** (or corruption).`,
        },
        questions: [
          ["E", "The institutions and practices that sustain democracy are its", "pillars", "roofs", "barriers", "decrees", "They support democratic rule."],
          ["E", "Which is a pillar of democracy?", "an independent judiciary", "military rule", "censorship", "rigged elections", "Courts protect rights."],
          ["E", "Which is a social pillar of democracy?", "free press", "curfew", "martial law", "one-party rule", "The press informs citizens."],
          ["M", "The independent body that conducts federal elections is", "INEC", "NBC", "NHRC", "NOA", "INEC organises elections."],
          ["M", "Which is a threat to democracy in Nigeria?", "electoral violence", "free press", "judicial independence", "civic education", "Violence undermines elections."],
          ["M", "Control of politicians by powerful sponsors who impose candidates is", "godfatherism", "federalism", "constitutionalism", "separation of powers", "Godfathers expect rewards."],
          ["M", "Political parties strengthen democracy by", "offering voters choices", "abolishing elections", "suppressing opposition", "censoring the press", "Competition gives alternatives."],
          ["H", "Disregard for court orders by the executive threatens democracy because it", "undermines the rule of law and judicial authority", "strengthens the judiciary", "protects rights", "improves elections", "Court orders must be obeyed."],
          ["H", "The law that introduced major electoral reforms, including the use of technology, in 2022 is the", "Electoral Act 2022", "Land Use Act", "Child Rights Act", "Freedom of Information Act", "It reformed the electoral process."],
          ["H", "Internal party democracy means", "fair and transparent processes within parties, such as open primaries", "one leader choosing all candidates", "banning party members from voting", "rigging primaries", "Members should choose candidates freely."],
        ],
      },
      {
        week: 3,
        title: "Rule of law in Nigeria",
        subtopics: ["Meaning and principles", "Rule of law in the 1999 Constitution", "Limitations in practice", "Importance to democracy"],
        objectives: ["Explain the rule of law and its principles", "Identify constitutional provisions supporting the rule of law", "Analyse limitations to the rule of law in Nigeria", "Explain its importance to democracy"],
        lesson: {
          title: "The Supremacy of Law in Practice",
          summary: "Analyse how the rule of law operates and is limited in Nigeria.",
          minutes: 45,
          notes: `## Meaning and principles
The **rule of law** means that **law, not the arbitrary will of rulers**, governs the state. **A. V. Dicey** (*Introduction to the Study of the Law of the Constitution*, 1885) outlined three principles:
1. **supremacy of the law** (absence of arbitrary power)
2. **equality before the law**
3. **protection of rights by the courts**

## Constitutional support in Nigeria
- **Section 1**: supremacy of the Constitution.
- **Section 4–6**: separation of powers.
- **Section 17**: equality of rights, obligations and opportunities.
- **Section 33–46**: fundamental rights.
- **Section 36**: fair hearing; presumption of innocence.
- **Section 42**: freedom from discrimination.

## Limitations in practice
| Limitation | Explanation |
|---|---|
| **immunity clause** (Section 308) | President, Vice-President, Governors and Deputies cannot be sued or prosecuted while in office |
| **diplomatic immunity** | foreign diplomats are not subject to local courts |
| **legislative privilege** | legislators' statements in the House are protected |
| **state of emergency** | rights may be restricted |
| **delegated legislation** | administrators make rules with limited scrutiny |
| **poverty and illiteracy** | limit access to justice |
| **corruption** | "justice for sale" |
| **delays in court** | "justice delayed is justice denied" |
| **disobedience of court orders** | undermines judicial authority |
| **military rule (historically)** | constitution suspended; rule by decree |

## Importance
protects citizens against arbitrary power, guarantees rights, promotes justice and stability, attracts investment, sustains democracy.`,
          examples: `**Example 1.** Which section of the Constitution provides immunity for the President while in office? *Answer:* **Section 308**.

**Example 2.** Explain "justice delayed is justice denied". *Answer:* Long **delays in court** effectively deny people timely justice.

**Example 3.** In which book did Dicey set out the rule of law? *Answer:* **Introduction to the Study of the Law of the Constitution** (1885).`,
        },
        questions: [
          ["E", "Government according to law rather than the arbitrary will of rulers is the", "rule of law", "rule of force", "rule of the rich", "military rule", "Law governs everyone."],
          ["E", "The rule of law was explained by", "A. V. Dicey", "Lord Lugard", "Karl Marx", "Adam Smith", "Dicey wrote in 1885."],
          ["E", "Which is a principle of the rule of law?", "equality before the law", "rule by decree", "arbitrary arrest", "secret trials", "Everyone is equal before the law."],
          ["M", "The section of the 1999 Constitution that grants immunity to the President and Governors is", "Section 308", "Section 1", "Section 17", "Section 42", "Section 308 is the immunity clause."],
          ["M", "The right to fair hearing is guaranteed in", "Section 36", "Section 308", "Section 14", "Section 24", "Section 36 covers fair hearing."],
          ["M", "Foreign diplomats not being subject to local courts is", "diplomatic immunity", "legislative privilege", "delegated legislation", "equality before the law", "It limits the rule of law."],
          ["M", "The saying 'justice delayed is justice denied' refers to", "delays in court proceedings", "quick judgements", "free legal aid", "impeachment", "Long delays defeat justice."],
          ["H", "Dicey's work on the rule of law is titled", "Introduction to the Study of the Law of the Constitution", "The Spirit of the Laws", "The Wealth of Nations", "Leviathan", "It was published in 1885."],
          ["H", "Why did military rule negate the rule of law in Nigeria?", "The Constitution was suspended and rule was by decree.", "It strengthened the courts.", "It protected all rights.", "It held regular elections.", "Decrees overrode constitutional order."],
          ["H", "Section 42 of the 1999 Constitution guarantees", "freedom from discrimination", "freedom of religion only", "right to own property only", "immunity of officials", "No discrimination on grounds such as ethnicity or sex."],
        ],
      },
      {
        week: 4,
        title: "Cultism",
        subtopics: ["Meaning and origin of cultism in Nigeria", "Causes of cultism", "Consequences of cultism", "Prevention and legal framework"],
        objectives: ["Explain cultism and its origin in Nigerian institutions", "Analyse the causes of cultism", "Evaluate the consequences of cultism", "Describe preventive measures and laws against cultism"],
        lesson: {
          title: "Cultism: Causes, Consequences and Control",
          summary: "Analyse cultism in Nigerian schools and society and how to stop it.",
          minutes: 45,
          notes: `## Meaning
**Cultism** is membership of, or participation in, a **secret society** whose members are bound by **oaths and secrecy** and whose activities are often **violent, criminal and harmful** to society.

## Origin in Nigeria
The **Pyrates Confraternity** was founded in **1952** at the University College, Ibadan by **Wole Soyinka** and others as a non-violent group opposing colonial and elitist attitudes. Over time, **breakaway and copycat groups** emerged and many became violent secret cults in tertiary institutions, secondary schools and communities.

## Causes
peer pressure; desire for protection, power or popularity; poor parental upbringing; broken homes; drug abuse; poverty and promises of money; political thuggery and sponsorship; weak school discipline; injustice and victimisation; glamorisation in media.

## Consequences
| Individual | Institution / society |
|---|---|
| injury, death | violent clashes and killings |
| expulsion, prosecution | disruption and closure of schools |
| drug addiction | insecurity, rape, robbery |
| psychological trauma | brain drain and loss of youths |
| family disgrace | political violence |

## Legal framework and prevention
- **Secret Cult and Similar Activities (Prohibition) laws** in several states. Section 40 of the Constitution guarantees freedom of association, but this does not protect association for criminal purposes.
- Schools require students to sign **anti-cult declarations**.
- Prevention: good parenting, counselling, value education, vibrant clubs and sports, strict enforcement, "renounce cultism" programmes, community vigilance, prosecution of sponsors.`,
          examples: `**Example 1.** Which confraternity was founded in 1952 at Ibadan? *Answer:* the **Pyrates Confraternity**.

**Example 2.** Name one cause of cultism. *Answer:* **peer pressure** (or search for protection, political sponsorship).

**Example 3.** Name one consequence of cultism on institutions. *Answer:* **disruption and closure of schools**.`,
        },
        questions: [
          ["E", "Membership of a secret, violent society bound by oaths is", "cultism", "patriotism", "scouting", "volunteering", "Cults operate in secrecy."],
          ["E", "The Pyrates Confraternity was founded in", "1952", "1960", "1999", "1914", "It was founded at Ibadan."],
          ["E", "Which is a cause of cultism?", "peer pressure", "good parenting", "strong school discipline", "value education", "Peers recruit others."],
          ["M", "The Pyrates Confraternity was founded by Wole Soyinka and others at", "University College, Ibadan", "University of Lagos", "Ahmadu Bello University", "University of Nigeria, Nsukka", "It began at Ibadan."],
          ["M", "Which is a consequence of cultism on schools?", "violent clashes and disruption of academic activities", "better grades", "peaceful campuses", "more scholarships", "Cult clashes close schools."],
          ["M", "Students signing a declaration renouncing cults is a measure to", "prevent cultism", "promote cultism", "register cults", "fund cults", "It deters membership."],
          ["M", "Politicians who use cult members as thugs contribute to", "the spread of cultism", "peace", "national unity", "good governance", "Sponsorship strengthens cults."],
          ["H", "Freedom of association under the Constitution does not protect cults because", "association for criminal purposes is not lawful", "cults are registered parties", "cults are religious bodies", "the Constitution encourages secrecy", "Rights do not cover crime."],
          ["H", "Which is the most effective long-term approach to cultism?", "combining value education, counselling, enforcement and prosecution of sponsors", "ignoring cults", "negotiating with cult leaders to share campuses", "closing all schools permanently", "A combined approach tackles root causes."],
          ["H", "Why do some youths join cults for 'protection'?", "They feel unsafe or victimised and seek a group to defend them.", "Cults are legal security firms.", "The police recommend cults.", "Cults guarantee safety.", "Insecurity and injustice push them."],
        ],
      },
      {
        week: 5,
        title: "Drug abuse",
        subtopics: ["Drug use, misuse and abuse", "Commonly abused substances", "Causes and symptoms of drug abuse", "Effects and control"],
        objectives: ["Distinguish drug use, misuse and abuse", "Identify commonly abused substances and their effects", "Identify signs of drug abuse", "Explain measures for prevention, treatment and control"],
        lesson: {
          title: "Drug Abuse and Its Control",
          summary: "Analyse drug abuse, its signs and effects, and ways to control it.",
          minutes: 45,
          notes: `## Key terms
- **Drug use**: taking a drug correctly for its intended purpose, as prescribed.
- **Drug misuse**: using a legal drug wrongly (wrong dose, wrong purpose, self-medication).
- **Drug abuse**: persistent use of a drug, legal or illegal, in a way that harms the user's health and social life, often leading to **dependence (addiction)**.

## Commonly abused substances
| Substance | Class / effect |
|---|---|
| cannabis (Indian hemp) | alters perception; may trigger psychosis |
| tramadol, codeine syrup | opioids; dependence, breathing problems |
| cocaine, methamphetamine ("mkpuru mmiri") | stimulants; paranoia, violence, heart damage |
| heroin | opioid; overdose death |
| alcohol | depressant; liver disease, accidents |
| tobacco | nicotine; cancer, heart disease |
| inhalants (glue, petrol, "gutter fumes") | brain damage |
| rohypnol and other sedatives | memory loss; used in sexual assault |

## Causes
peer pressure, curiosity, stress and depression, broken homes, easy availability, poverty and unemployment, desire for performance or courage, media influence.

## Signs
sudden change in friends and behaviour, poor academic performance, red eyes, secrecy, stealing money, mood swings, loss of interest in activities, poor hygiene.

## Effects
health (mental illness, organ damage, HIV from shared needles), crime and violence, road accidents, school dropout, family breakdown, loss of productivity.

## Control
- **NDLEA** (enforcement, drug demand reduction), **NAFDAC** (regulation of medicines)
- school drug education and counselling
- rehabilitation centres
- parents' supervision
- strict regulation of pharmacies and patent medicine stores
- WAR (War Against Drug Abuse) campaigns`,
          examples: `**Example 1.** Taking twice the prescribed dose of a painkiller to recover faster is **drug misuse**.

**Example 2.** Name two signs of drug abuse. *Answer:* **sudden change of friends** and **poor academic performance**.

**Example 3.** Which agency regulates medicines in Nigeria? *Answer:* **NAFDAC**.`,
        },
        questions: [
          ["E", "Persistent harmful use of a drug that may lead to addiction is", "drug abuse", "drug use", "vaccination", "prescription", "It damages health and social life."],
          ["E", "Taking a drug correctly as prescribed is", "drug use", "drug abuse", "drug trafficking", "self-medication", "It follows medical advice."],
          ["E", "Which agency enforces laws against illegal drugs in Nigeria?", "NDLEA", "NAFDAC", "NCC", "NIMC", "It fights drug trafficking and abuse."],
          ["M", "Taking twice the prescribed dose of a drug to recover faster is", "drug misuse", "correct drug use", "immunisation", "therapy", "The dose is wrong."],
          ["M", "The agency that regulates medicines, food and cosmetics is", "NAFDAC", "NDLEA", "INEC", "FRSC", "NAFDAC approves medicines."],
          ["M", "Which is a sign of drug abuse in a student?", "sudden poor academic performance and secrecy", "improved grades", "regular attendance", "better hygiene", "Behaviour changes are warning signs."],
          ["M", "Tramadol and codeine are abused mainly because they are", "opioids that cause dependence", "vitamins", "antibiotics", "vaccines", "They act on the brain like narcotics."],
          ["H", "Sharing needles among drug users can spread", "HIV and hepatitis", "malaria", "rickets", "goitre", "Infected blood is transmitted."],
          ["H", "Methamphetamine abuse is associated with", "paranoia and violent behaviour", "calm and improved memory", "better sleep", "weight gain only", "It is a powerful stimulant."],
          ["H", "Which measure focuses on helping addicted persons recover?", "rehabilitation", "arrest only", "advertising drugs", "self-medication", "Rehabilitation restores users."],
        ],
      },
      {
        week: 6,
        title: "Human trafficking",
        subtopics: ["Meaning and forms of human trafficking", "Causes and routes", "Effects on victims and the nation", "Legal framework and prevention"],
        objectives: ["Define human trafficking and its forms", "Analyse the causes of human trafficking", "Describe the effects on victims and the nation", "Explain the legal framework and preventive measures"],
        lesson: {
          title: "Human Trafficking: A Modern Slavery",
          summary: "Analyse human trafficking, its causes and effects, and the laws against it.",
          minutes: 45,
          notes: `## Meaning
**Human trafficking** is the **recruitment, transportation, transfer, harbouring or receipt of persons** by means of **threat, force, fraud, deception, abduction or abuse of vulnerability** for the purpose of **exploitation**. It is often described as **modern slavery**.
It differs from **smuggling of migrants** (helping people cross borders illegally for payment, with their consent).

## Forms of exploitation
sexual exploitation, forced labour, domestic servitude, forced begging, child soldiers, organ harvesting, baby factories and illegal adoption, forced marriage.

## Causes
poverty and unemployment, greed, illiteracy, large families, desire to travel abroad at any cost, conflict and displacement (IDP camps), demand for cheap labour and sex, weak border control, corruption, cultural practices (child fostering abused by traffickers), use of oaths and fear.

## Routes
Internal (rural to urban areas), regional (to other West African countries), and international (across the Sahara and Mediterranean to Europe, and to the Middle East).

## Effects
| Victims | Nation |
|---|---|
| physical and sexual abuse | damaged international image |
| diseases, including HIV | loss of human resources |
| psychological trauma | growth of organised crime and corruption |
| death on dangerous routes | stigma on citizens abroad |

## Legal framework
- **Trafficking in Persons (Prohibition) Enforcement and Administration Act, 2015** (repealed and replaced the 2003 Act)
- **NAPTIP** (established 2003) — prevention, prosecution, protection of victims, partnership
- **UN Palermo Protocol (2000)** on trafficking in persons

## Prevention
public awareness, job creation, girl-child education, strict border control, prosecution of traffickers, rehabilitation and reintegration of victims.`,
          examples: `**Example 1.** How does human trafficking differ from migrant smuggling? *Answer:* Trafficking involves **exploitation by force or deception**; smuggling is **illegal border crossing with the migrant's consent** for payment.

**Example 2.** Which Act currently governs trafficking in Nigeria? *Answer:* the **Trafficking in Persons (Prohibition) Enforcement and Administration Act, 2015**.

**Example 3.** Name one form of exploitation of trafficked persons. *Answer:* **forced labour** (or sexual exploitation).`,
        },
        questions: [
          ["E", "Recruiting and transporting persons by deception for exploitation is", "human trafficking", "tourism", "legal migration", "adoption through court", "Exploitation is its purpose."],
          ["E", "Human trafficking is often described as", "modern slavery", "legal employment", "tourism", "education", "Victims are exploited like slaves."],
          ["E", "The Nigerian agency against human trafficking is", "NAPTIP", "NDLEA", "NBC", "NOA", "It prosecutes traffickers."],
          ["M", "The current Nigerian anti-trafficking law was enacted in", "2015", "1960", "1999", "2022", "It replaced the 2003 Act."],
          ["M", "Keeping a trafficked girl as an unpaid house help under threats is", "domestic servitude", "adoption", "apprenticeship", "education", "It is a form of exploitation."],
          ["M", "Which is a cause of human trafficking?", "poverty and unemployment", "strong border control", "girl-child education", "public awareness", "Vulnerable people are lured."],
          ["M", "The UN protocol on trafficking in persons adopted in 2000 is the", "Palermo Protocol", "Kyoto Protocol", "Banjul Charter", "Magna Carta", "It supplements the UN convention on organised crime."],
          ["H", "Human trafficking differs from migrant smuggling because trafficking", "involves exploitation through force or deception", "always involves consent and ends at the border", "is legal", "involves only adults", "Smuggling is consensual illegal crossing."],
          ["H", "Facilities where girls are held and forced to bear children for sale are called", "baby factories", "orphanages", "hospitals", "schools", "They are a form of trafficking."],
          ["H", "Which measure protects victims after rescue?", "rehabilitation and reintegration", "immediate deportation without support", "public shaming", "imprisonment of victims", "Victims need care and support."],
        ],
      },
    ],
  },
  {
    classCode: "SS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "HIV/AIDS and the society",
        subtopics: ["Meaning and history of HIV/AIDS", "Modes of transmission and prevention", "Effects on the individual, family and nation", "Stigma, rights and national response"],
        objectives: ["Explain HIV and AIDS", "Describe modes of transmission and prevention", "Analyse social and economic effects of HIV/AIDS", "Explain the rights of people living with HIV and the national response"],
        lesson: {
          title: "HIV/AIDS: A Social Challenge",
          summary: "Analyse the social impact of HIV/AIDS and the rights of people living with HIV.",
          minutes: 45,
          notes: `## Meaning
- **HIV (Human Immunodeficiency Virus)** attacks the **CD4 cells** of the immune system.
- **AIDS (Acquired Immune Deficiency Syndrome)** is the late stage of HIV infection, when the body cannot fight **opportunistic infections** such as tuberculosis.
AIDS was first clinically recognised in **1981**; Nigeria reported its first case in **1986**.

## Transmission
unprotected sex with an infected person; transfusion of infected blood; sharing of needles, razors and sharp objects; mother-to-child transmission (pregnancy, childbirth, breastfeeding).
**Not** transmitted by handshakes, hugging, sharing meals, toilets or mosquito bites.

## Prevention (ABC and more)
**Abstinence**; **Being faithful** to one uninfected partner; correct use of **condoms** by sexually active adults; screening of blood; sterilised instruments; **prevention of mother-to-child transmission (PMTCT)**; **HIV testing and counselling**.

## Treatment
**Antiretroviral therapy (ART)** suppresses the virus; people on effective treatment can live long, productive lives and greatly reduce transmission.

## Effects
| Individual/family | Nation |
|---|---|
| illness and early death | loss of skilled workers |
| cost of treatment | reduced productivity |
| orphans and vulnerable children | pressure on health system |
| stigma and discrimination | reduced economic growth |

## Rights and national response
- **HIV and AIDS (Anti-Discrimination) Act, 2014**: prohibits discrimination in employment, education and health care.
- **NACA** (National Agency for the Control of AIDS) coordinates the national response.
- Confidentiality of HIV status must be respected.`,
          examples: `**Example 1.** Which cells does HIV attack? *Answer:* **CD4 cells** of the immune system.

**Example 2.** Which law prohibits discrimination against people living with HIV? *Answer:* the **HIV and AIDS (Anti-Discrimination) Act, 2014**.

**Example 3.** What does PMTCT stand for? *Answer:* **Prevention of Mother-to-Child Transmission**.`,
        },
        questions: [
          ["E", "HIV attacks the", "immune system", "skeletal system", "digestive system only", "hair", "It destroys CD4 cells."],
          ["E", "The late stage of HIV infection is", "AIDS", "malaria", "typhoid", "cholera", "The immune system collapses."],
          ["E", "The agency that coordinates Nigeria's response to HIV/AIDS is", "NACA", "NAFDAC", "NDLEA", "NBC", "National Agency for the Control of AIDS."],
          ["M", "Nigeria reported its first AIDS case in", "1986", "1960", "2000", "1975", "The first case was reported in 1986."],
          ["M", "Drugs that suppress HIV in the body are", "antiretroviral drugs", "antimalarials", "antibiotics for colds", "vitamins", "ART controls the virus."],
          ["M", "Infections that take advantage of a weakened immune system are", "opportunistic infections", "hereditary diseases", "deficiency diseases", "allergies", "They attack when immunity is low."],
          ["M", "PMTCT refers to", "prevention of mother-to-child transmission", "private medical treatment", "public malaria testing", "personal mental therapy", "It protects babies of positive mothers."],
          ["H", "The law that prohibits discrimination against people living with HIV in Nigeria is the", "HIV and AIDS (Anti-Discrimination) Act, 2014", "Child Rights Act, 2003", "Electoral Act, 2022", "Anti-Torture Act, 2017", "It protects rights at work and school."],
          ["H", "How does HIV/AIDS affect national development?", "It reduces the productive workforce and strains health services.", "It increases productivity.", "It reduces health spending.", "It has no economic effect.", "Illness reduces the labour force."],
          ["H", "Disclosing a person's HIV status without consent violates the right to", "privacy and confidentiality", "freedom of movement", "vote", "property", "Status is private health information."],
        ],
      },
      {
        week: 2,
        title: "Youth empowerment and entrepreneurship",
        subtopics: ["Meaning of youth empowerment", "Entrepreneurship and its importance", "Government and private empowerment programmes", "Challenges and solutions"],
        objectives: ["Explain youth empowerment and entrepreneurship", "Identify empowerment programmes in Nigeria", "Explain the importance of entrepreneurship to national development", "Analyse challenges of youth empowerment and suggest solutions"],
        lesson: {
          title: "Empowering Youth Through Enterprise",
          summary: "Analyse youth empowerment and entrepreneurship as tools for development.",
          minutes: 45,
          notes: `## Meaning
- **Youth empowerment**: equipping young people with **skills, resources, confidence and opportunities** to take charge of their lives and contribute to society.
- **Entrepreneurship**: identifying opportunities and **creating and managing a business** while taking risks for profit.
An **entrepreneur** combines resources (land, labour, capital) to produce goods or services.

## Qualities of an entrepreneur
creativity, risk-taking, initiative, self-confidence, hard work, good financial management, persistence, integrity.

## Importance to the nation
job creation; reduction of poverty and crime; increased production and exports; use of local resources; innovation (e.g. Nigeria's growing tech start-up sector); self-reliance.

## Empowerment programmes (examples)
| Programme / body | Focus |
|---|---|
| **National Directorate of Employment (NDE)** | vocational and entrepreneurship training |
| **SMEDAN** | support for micro, small and medium enterprises |
| **Bank of Industry** and development banks | loans |
| **NYSC SAED** | skills training for corps members |
| state skills acquisition centres | vocational skills |
| private and NGO programmes (e.g. entrepreneurship foundations and tech hubs) | training, grants and mentorship |

## Challenges
inadequate capital, poor power supply and infrastructure, multiple taxation, corruption in programmes, lack of skills and mentorship, poor access to markets, get-rich-quick mentality, insecurity.

## Solutions
access to credit, infrastructure, simplified business registration (CAC), mentorship, entrepreneurship education, transparency in programmes.`,
          examples: `**Example 1.** What is entrepreneurship? *Answer:* **Creating and managing a business** by identifying opportunities and taking risks.

**Example 2.** Name one agency that supports small businesses. *Answer:* **SMEDAN**.

**Example 3.** Name one challenge facing young entrepreneurs. *Answer:* **inadequate capital** (or poor power supply).`,
        },
        questions: [
          ["E", "Creating and managing a business by taking risks is", "entrepreneurship", "apathy", "consumption", "taxation", "Entrepreneurs start businesses."],
          ["E", "Which is a quality of an entrepreneur?", "creativity", "laziness", "fear of all risk", "dishonesty", "Entrepreneurs create solutions."],
          ["E", "Entrepreneurship helps a nation by", "creating jobs", "increasing unemployment", "reducing production", "encouraging idleness", "Businesses employ people."],
          ["M", "The agency that supports micro, small and medium enterprises is", "SMEDAN", "NAPTIP", "NBC", "NIMC", "It develops small businesses."],
          ["M", "Which body provides vocational and entrepreneurship training to unemployed youths?", "NDE", "INEC", "NOA", "NHRC", "The National Directorate of Employment."],
          ["M", "Businesses in Nigeria are registered with the", "Corporate Affairs Commission", "INEC", "NDLEA", "FRSC", "The CAC registers companies."],
          ["M", "Which is a challenge facing young entrepreneurs?", "inadequate capital", "unlimited loans", "excess electricity", "no taxes", "Funding is often scarce."],
          ["H", "Multiple taxation discourages small businesses because it", "increases costs and reduces profit", "reduces costs", "increases sales automatically", "has no effect", "Several levies burden businesses."],
          ["H", "The factors of production an entrepreneur combines include", "land, labour and capital", "only money", "only labour", "only land", "The entrepreneur organises them."],
          ["H", "Which measure would most improve youth entrepreneurship?", "access to credit and reliable infrastructure", "increasing multiple taxation", "reducing training", "corruption in programmes", "Capital and power enable businesses."],
        ],
      },
      {
        week: 3,
        title: "Nigerian federalism",
        subtopics: ["Meaning and features of federalism", "Reasons for federalism in Nigeria", "Division of powers", "Problems of Nigerian federalism"],
        objectives: ["Explain federalism and its features", "State reasons Nigeria adopted federalism", "Explain the division of powers among levels of government", "Analyse problems of Nigerian federalism"],
        lesson: {
          title: "Sharing Power Across Levels",
          summary: "Explain Nigerian federalism, the division of powers and its challenges.",
          minutes: 45,
          notes: `## Meaning
**Federalism** is a system of government in which **powers are constitutionally shared** between a **central (federal) government** and **component units (states)**, each independent within its own sphere.

## Features
written and rigid constitution; division of powers; supreme court as umpire; bicameral legislature (often); dual citizenship of state and federation; each level has its own revenue sources.

## Reasons Nigeria adopted federalism
- large **size** and **diversity** (ethnic, religious, linguistic)
- **fear of domination** by minorities and major groups
- historical factors: regionalism under colonial rule (the **Lyttelton Constitution of 1954** made Nigeria a federation)
- need for **unity in diversity**
- bringing government **closer** to the people
- economic reasons (diverse resources)

## Division of powers (1999 Constitution)
| List | Holder | Examples |
|---|---|---|
| **Exclusive Legislative List** | federal government only | defence, foreign affairs, currency, citizenship, police, aviation, mines and minerals (some items, e.g. railways and correctional services, were moved to the Concurrent List by the 2023 amendments) |
| **Concurrent Legislative List** | federal and state | education, agriculture, health, electricity (partly), industrial development |
| **Residual matters** | states | items not on either list, e.g. chieftaincy matters, local markets (with local governments) |
Where federal and state laws conflict on a concurrent matter, the **federal law prevails**.

## Problems of Nigerian federalism
over-concentration of power at the centre, revenue allocation disputes, resource control agitation, state creation demands, weak local government autonomy, ethnic and religious tensions, over-dependence on federal allocations.

## Revenue sharing
Revenue in the **Federation Account** is shared among federal, state and local governments by a formula recommended by the **Revenue Mobilisation Allocation and Fiscal Commission (RMAFC)**; oil-producing states receive **13% derivation**.`,
          examples: `**Example 1.** On which list is defence? *Answer:* the **Exclusive Legislative List**.

**Example 2.** Which constitution first made Nigeria a federation? *Answer:* the **Lyttelton Constitution of 1954**.

**Example 3.** What happens if federal and state laws conflict on a concurrent matter? *Answer:* the **federal law prevails**.`,
        },
        questions: [
          ["E", "A system in which powers are shared between central and state governments is", "federalism", "unitary system", "monarchy", "confederation only", "Powers are divided constitutionally."],
          ["E", "Defence and foreign affairs are on the", "Exclusive Legislative List", "Concurrent Legislative List", "Residual List", "local government list", "Only the federal government handles them."],
          ["E", "Which is a reason Nigeria adopted federalism?", "ethnic and cultural diversity", "small size and one ethnic group", "colonial preference for unitary rule", "absence of resources", "Federalism accommodates diversity."],
          ["M", "Matters on which both federal and state governments can legislate are on the", "Concurrent Legislative List", "Exclusive Legislative List", "Residual List", "Fourth Schedule only", "Both levels share them."],
          ["M", "Matters not listed in either the Exclusive or Concurrent List belong to", "the states (residual matters)", "the federal government only", "the courts", "foreign governments", "Residual powers go to states."],
          ["M", "The constitution that made Nigeria a federation in 1954 was the", "Lyttelton Constitution", "Clifford Constitution", "Richards Constitution", "Independence Constitution", "It introduced federalism."],
          ["M", "Where federal and state laws conflict on a concurrent matter,", "the federal law prevails", "the state law prevails", "both are void", "the local law prevails", "Federal law has supremacy."],
          ["H", "The body that recommends the revenue allocation formula in Nigeria is", "RMAFC", "INEC", "NBC", "NOA", "Revenue Mobilisation Allocation and Fiscal Commission."],
          ["H", "The percentage of oil revenue allocated to oil-producing states on the basis of derivation is at least", "13%", "50%", "1%", "90%", "The Constitution sets at least 13%."],
          ["H", "Which is a problem of Nigerian federalism?", "over-concentration of power at the centre", "too much local government autonomy", "absence of states", "no revenue to share", "The centre is very powerful."],
        ],
      },
      {
        week: 4,
        title: "Electoral bodies and electoral malpractice",
        subtopics: ["INEC: composition and functions", "State Independent Electoral Commissions", "Forms of electoral malpractice", "Electoral offences and reforms"],
        objectives: ["Describe the composition and functions of INEC", "Explain the role of SIECs", "Identify forms of electoral malpractice", "Discuss electoral offences, penalties and reforms"],
        lesson: {
          title: "Conducting Credible Elections",
          summary: "Describe electoral bodies and ways to curb electoral malpractice.",
          minutes: 45,
          notes: `## INEC
The **Independent National Electoral Commission** (established **1998**) is provided for in the Third Schedule of the 1999 Constitution.
- Composition: a **Chairman** and **12 National Commissioners**, appointed by the **President** with **Senate confirmation**; **Resident Electoral Commissioners** in each state.
- Functions: organise **federal and state elections**; **register political parties** and monitor their finances; register voters and maintain the register; delimit constituencies; conduct voter education; monitor campaigns.

## SIECs
**State Independent Electoral Commissions** conduct **local government elections**. They are often criticised because ruling parties in states usually win all seats.

## Forms of electoral malpractice
- rigging and falsification of results
- **vote buying** and inducement
- **ballot snatching** and stuffing
- multiple voting and under-age voting
- intimidation, violence and thuggery
- manipulation of the voter register
- hate speech and fake news
- misuse of state resources and security agencies

## Electoral offences and penalties
The **Electoral Act, 2022** prescribes fines and imprisonment for offences such as vote buying, ballot snatching, and falsifying results. It also introduced the use of **BVAS** and electronic transmission of results to the **INEC Result Viewing Portal (IReV)**.

## Reducing malpractice
independent and well-funded INEC; technology; prosecution of offenders (proposals for an Electoral Offences Commission); neutral security agencies; voter education; election observers (local and international); civil society monitoring.`,
          examples: `**Example 1.** How many National Commissioners does INEC have besides the Chairman? *Answer:* **12**.

**Example 2.** Which body conducts local government elections? *Answer:* the **State Independent Electoral Commission (SIEC)**.

**Example 3.** Name one form of electoral malpractice. *Answer:* **vote buying** (or ballot snatching).`,
        },
        questions: [
          ["E", "The body that conducts federal and state elections in Nigeria is", "INEC", "SIEC", "NBC", "NOA", "INEC organises these elections."],
          ["E", "Giving money to voters to influence their votes is", "vote buying", "voter education", "campaigning", "accreditation", "It is an electoral offence."],
          ["E", "Local government elections are conducted by", "SIECs", "INEC", "the police", "political parties", "State commissions conduct them."],
          ["M", "INEC was established in", "1998", "1960", "1979", "2010", "It was created ahead of the 1999 transition."],
          ["M", "Besides the Chairman, INEC has how many National Commissioners?", "12", "36", "6", "24", "The Third Schedule provides 12."],
          ["M", "INEC members are appointed by the President subject to confirmation by the", "Senate", "Supreme Court", "House of Representatives only", "Governors' Forum", "Senate confirms nominees."],
          ["M", "Violently seizing ballot boxes at polling units is", "ballot snatching", "accreditation", "collation", "voter education", "It disrupts voting."],
          ["H", "The INEC portal on which polling-unit results are uploaded for public view is", "IReV", "BVAS", "NIMC", "ECOWAS", "INEC Result Viewing Portal."],
          ["H", "The law that currently governs the conduct of elections in Nigeria is the", "Electoral Act, 2022", "Land Use Act", "Police Act only", "Freedom of Information Act", "It regulates electoral processes."],
          ["H", "Which measure would most reduce electoral malpractice?", "prosecuting offenders and using transparent technology", "encouraging vote buying", "removing observers", "partisan security agencies", "Deterrence and transparency help."],
        ],
      },
      {
        week: 5,
        title: "National Orientation Agency and value reorientation",
        subtopics: ["Meaning of orientation and reorientation", "The National Orientation Agency", "Past value reorientation programmes", "Challenges of value reorientation"],
        objectives: ["Explain value reorientation", "Describe the functions of the National Orientation Agency", "Evaluate past value reorientation programmes in Nigeria", "Identify challenges of value reorientation"],
        lesson: {
          title: "Changing Attitudes for National Progress",
          summary: "Evaluate value reorientation efforts and the role of the NOA.",
          minutes: 45,
          notes: `## Meaning
**Orientation** is guiding people's attitudes and behaviour; **reorientation** is **changing negative attitudes and values** to positive ones for national development.

## The National Orientation Agency (NOA)
Established in **1993** (by Decree 100 of 1993) through the merger of earlier bodies including MAMSER.
Functions:
- public enlightenment on **government policies and programmes**
- promoting **national values**, patriotism and unity
- mobilising citizens for **civic participation** (elections, census, immunisation)
- feedback from citizens to government
- campaigns against social vices and on **national symbols** (e.g. reciting the pledge and anthem)

## Past reorientation programmes
| Programme | Period | Aim |
|---|---|---|
| **Ethical Revolution** | Shagari (1983) | moral rearmament |
| **War Against Indiscipline (WAI)** | Buhari–Idiagbon (1984) | discipline, orderliness (e.g. queuing), punctuality |
| **MAMSER** (Mass Mobilisation for Self-Reliance, Social Justice and Economic Recovery) | Babangida (1987) | self-reliance and political awareness |
| **National Rebirth / Heart of Africa** projects | 2000s | image and values |
| **"Change Begins With Me"** | 2016 | personal responsibility and integrity |

## Challenges
leaders not practising what they preach, corruption, poverty, inconsistency of policies, poor funding, cynicism of citizens, short lifespan of programmes.

## Way forward
exemplary leadership, continuity of programmes, integration of values into education, reward for integrity and strict sanctions for misconduct.`,
          examples: `**Example 1.** When was the NOA established? *Answer:* **1993**.

**Example 2.** Which programme of 1984 emphasised discipline and queuing? *Answer:* **War Against Indiscipline (WAI)**.

**Example 3.** Name one challenge of value reorientation. *Answer:* **leaders not practising what they preach**.`,
        },
        questions: [
          ["E", "Changing negative attitudes and values to positive ones is", "reorientation", "disorientation", "migration", "taxation", "It reforms values."],
          ["E", "The agency responsible for public enlightenment in Nigeria is the", "National Orientation Agency", "NDLEA", "NCC", "NIMC", "The NOA mobilises citizens."],
          ["E", "The War Against Indiscipline emphasised", "discipline and orderliness", "corruption", "lateness", "disorder", "It promoted queuing and punctuality."],
          ["M", "The National Orientation Agency was established in", "1993", "1960", "1984", "2016", "It replaced earlier mobilisation bodies."],
          ["M", "The War Against Indiscipline was launched in", "1984", "1993", "1976", "2016", "Buhari–Idiagbon introduced it."],
          ["M", "MAMSER stands for Mass Mobilisation for Self-Reliance, Social Justice and", "Economic Recovery", "Military Rule", "Electoral Reform", "Oil Production", "It was launched in 1987."],
          ["M", "The 'Change Begins With Me' campaign emphasised", "personal responsibility and integrity", "military rule", "tribalism", "tax evasion", "It was launched in 2016."],
          ["H", "The Ethical Revolution was introduced under the administration of", "Shehu Shagari", "Olusegun Obasanjo", "Ibrahim Babangida", "Goodluck Jonathan", "It was launched in 1983."],
          ["H", "A major reason value reorientation programmes often fail is", "leaders not practising the values they preach", "citizens having too much money", "too much continuity", "excess funding", "Hypocrisy breeds cynicism."],
          ["H", "Which is a function of the NOA?", "providing feedback from citizens to government", "conducting elections", "prosecuting criminals", "printing currency", "It links government and citizens."],
        ],
      },
      {
        week: 6,
        title: "Nigeria's constitutional development (colonial era)",
        subtopics: ["Clifford Constitution 1922", "Richards Constitution 1946", "Macpherson Constitution 1951", "Lyttelton Constitution 1954"],
        objectives: ["Describe the main features of the colonial constitutions", "Explain the significance of each constitution", "Identify the merits and demerits of each", "Relate colonial constitutions to Nigeria's political development"],
        lesson: {
          title: "Colonial Constitutions of Nigeria",
          summary: "Trace Nigeria's constitutional development under colonial rule.",
          minutes: 45,
          notes: `## Clifford Constitution (1922)
- Named after Governor **Sir Hugh Clifford**.
- Introduced the **elective principle**: four elected members of the Legislative Council (three for Lagos, one for Calabar), with a property/income qualification.
- Led to the formation of the first political party, the **Nigerian National Democratic Party (NNDP)** by **Herbert Macaulay** (1923).
- Demerit: the North was excluded from the Legislative Council; official majority.

## Richards Constitution (1946)
- Named after Governor **Sir Arthur Richards**.
- Created **three regions** (North, West, East) with Regional Houses of Assembly.
- The Legislative Council covered the **whole country** for the first time.
- Demerits: little consultation; unofficial members largely nominated; encouraged regionalism.

## Macpherson Constitution (1951)
- Named after Governor **Sir John Macpherson**; preceded by wide **consultation** (Ibadan General Conference, 1950).
- Created a **Central Council of Ministers** and a **House of Representatives**; regional Houses of Assembly (bicameral in North and West).
- Collapsed in **1953** after crises, including disagreement over the **1953 self-government motion** by **Anthony Enahoro**.

## Lyttelton Constitution (1954)
- Named after the Colonial Secretary **Oliver Lyttelton**.
- Made Nigeria a **federation** of three regions plus Lagos as federal territory.
- Created the office of **Regional Premiers**; regionalised the civil service and the judiciary; introduced separate regional and federal lists of powers.
- Paved the way for **regional self-government** (West and East in 1957, North in 1959) and **independence in 1960**.`,
          examples: `**Example 1.** Which constitution introduced the elective principle? *Answer:* the **Clifford Constitution (1922)**.

**Example 2.** Which constitution created three regions? *Answer:* the **Richards Constitution (1946)**.

**Example 3.** Which constitution made Nigeria a federation? *Answer:* the **Lyttelton Constitution (1954)**.`,
        },
        questions: [
          ["E", "The constitution that introduced the elective principle in Nigeria was the", "Clifford Constitution", "Richards Constitution", "Lyttelton Constitution", "Independence Constitution", "It allowed limited elections in 1922."],
          ["E", "The Richards Constitution came into effect in", "1946", "1922", "1951", "1960", "It divided Nigeria into three regions."],
          ["E", "The Lyttelton Constitution made Nigeria a", "federation", "unitary state", "monarchy", "confederation of cities", "Power was shared with regions."],
          ["M", "The first political party in Nigeria, formed after the Clifford Constitution, was the", "NNDP", "NCNC", "Action Group", "NPC", "Herbert Macaulay founded it in 1923."],
          ["M", "Under the Clifford Constitution, elected members represented", "Lagos and Calabar", "the North only", "all regions", "Ibadan and Kano", "Three for Lagos, one for Calabar."],
          ["M", "The constitution preceded by the Ibadan General Conference of 1950 was the", "Macpherson Constitution", "Clifford Constitution", "Richards Constitution", "Lyttelton Constitution", "It involved wide consultation."],
          ["M", "The office of Regional Premier was created by the", "Lyttelton Constitution", "Clifford Constitution", "Richards Constitution", "1999 Constitution", "It strengthened regional autonomy."],
          ["H", "A major criticism of the Richards Constitution was", "lack of consultation with Nigerians", "too much consultation", "creating a federation", "introducing independence", "It was imposed without consultation."],
          ["H", "The Macpherson Constitution broke down in 1953 partly because of disagreement over", "the self-government motion", "the choice of capital", "the national anthem", "oil revenue", "Enahoro's motion caused a crisis."],
          ["H", "The North was excluded from the Legislative Council under the", "Clifford Constitution", "Richards Constitution", "Macpherson Constitution", "Lyttelton Constitution", "The Council legislated mainly for the South."],
        ],
      },
    ],
  },
];
