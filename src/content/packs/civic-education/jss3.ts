import type { TermPlan } from "../types";

/** JSS3 Civic Education — original Precious PS content; Term 3 is structured BECE revision. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Separation of powers and checks and balances",
        subtopics: ["Meaning of separation of powers", "Powers of the three arms in Nigeria", "Checks and balances", "Importance and limitations"],
        objectives: ["Explain separation of powers", "Describe the powers of each arm of government in Nigeria", "Explain checks and balances with examples", "State the importance and limitations of separation of powers"],
        lesson: {
          title: "Sharing and Checking Power",
          summary: "Explain how power is divided among the arms of government and how each checks the others.",
          minutes: 45,
          notes: `## Separation of powers
**Separation of powers** means that the functions of government are **divided among three separate arms** — legislature, executive and judiciary — each with different personnel and powers.
The idea is associated with the French philosopher **Baron de Montesquieu** (*The Spirit of the Laws*, 1748).

## In the 1999 Constitution
| Arm | Section | Power |
|---|---|---|
| legislature | Section 4 | legislative (law-making) power |
| executive | Section 5 | executive power |
| judiciary | Section 6 | judicial power |

## Checks and balances
Each arm **limits** the others to prevent abuse of power.
| Check | Example |
|---|---|
| legislature on executive | approves the **budget**; confirms ministers and ambassadors; can **impeach** the President or Governor; overrides a presidential veto with a **two-thirds majority** |
| executive on legislature | President can **veto** (refuse assent to) bills |
| judiciary on legislature and executive | **judicial review**: declares laws or actions **unconstitutional** (null and void) |
| executive on judiciary | appoints judges (on recommendation of the National Judicial Council, with Senate confirmation for top judges); prerogative of mercy |
| legislature on judiciary | confirms appointment of the Chief Justice and Justices of the Supreme Court |

## Importance
prevents **dictatorship** and abuse of power; protects citizens' **rights**; promotes accountability, efficiency and the rule of law.

## Limitations
In practice powers overlap: the executive makes **delegated legislation**; the legislature performs some judicial functions (e.g. impeachment); the ruling party may control both executive and legislature; parliamentary systems fuse the executive and legislature.`,
          examples: `**Example 1.** Who is associated with the theory of separation of powers? *Answer:* **Montesquieu**.

**Example 2.** How does the judiciary check the legislature? *Answer:* By **declaring unconstitutional laws null and void** (judicial review).

**Example 3.** How does the legislature check the executive? *Answer:* By **approving the budget** (or impeachment).`,
        },
        questions: [
          ["E", "Dividing government functions among three separate arms is", "separation of powers", "federalism", "rule of law", "delegated legislation", "Each arm has distinct powers."],
          ["E", "The theory of separation of powers is associated with", "Montesquieu", "A. V. Dicey", "Lord Lugard", "Karl Marx", "He wrote The Spirit of the Laws."],
          ["E", "Judicial power in Nigeria is vested in the courts under", "Section 6", "Section 4", "Section 5", "Section 24", "Section 6 establishes judicial power."],
          ["M", "The system by which each arm of government limits the others is", "checks and balances", "delegated legislation", "federal character", "unitary system", "It prevents abuse of power."],
          ["M", "The President's refusal to sign a bill into law is called a", "veto", "impeachment", "judicial review", "referendum", "It checks the legislature."],
          ["M", "Removing a President from office by the legislature is", "impeachment", "veto", "election", "appointment", "It is a legislative check."],
          ["M", "Executive power is vested in the President under which section of the 1999 Constitution?", "Section 5", "Section 4", "Section 6", "Section 14", "Section 5 covers executive power."],
          ["H", "The power of courts to declare laws unconstitutional is", "judicial review", "prerogative of mercy", "veto", "delegated legislation", "It checks the other arms."],
          ["H", "The National Assembly can override a presidential veto with a", "two-thirds majority", "simple majority of one", "court order", "referendum only", "The Constitution requires two-thirds."],
          ["H", "Which is a limitation of separation of powers in practice?", "The executive makes delegated legislation.", "Each arm is completely isolated.", "Courts make all laws.", "There are no overlaps.", "Powers overlap in practice."],
        ],
      },
      {
        week: 2,
        title: "The public service",
        subtopics: ["Meaning of public service", "Civil service and public corporations", "Features of the civil service", "Problems of the public service"],
        objectives: ["Explain the public service", "Distinguish the civil service from public corporations", "State the features of the civil service", "Identify problems of the public service and solutions"],
        lesson: {
          title: "Working for the Public",
          summary: "Describe the public service, the civil service and their challenges.",
          minutes: 45,
          notes: `## Meaning
The **public service** comprises all institutions and workers **employed by government** to implement its policies and provide services to citizens.
It includes the **civil service**, **public corporations/parastatals**, the armed forces, the police, public schools and hospitals, and local government staff.

## The civil service
The **civil service** is the body of **permanent, career officials** who work in government **ministries and extra-ministerial departments** and help carry out government policies.
- Head of the Civil Service of the Federation; each ministry is headed administratively by a **Permanent Secretary**, while the **Minister** is the political head.
- Regulated by the **Federal Civil Service Commission** (recruitment, promotion, discipline).

## Features of the civil service
- **permanence** (civil servants remain when governments change)
- **anonymity** (they work behind the scenes; ministers take public responsibility)
- **neutrality/impartiality** (not partisan)
- **hierarchy** (clear chain of command)
- **expertise** and training
- **rules and procedures** (bureaucracy)
- security of tenure

## Public corporations (parastatals)
Government-owned bodies that provide **services or goods**, e.g. Nigerian Ports Authority, NNPC Ltd (now a limited liability company), Nigerian Railway Corporation, NAFDAC.

## Problems
corruption, **red tape** (delays), nepotism and ethnic considerations in recruitment, poor pay and motivation, lateness and absenteeism, political interference, inadequate training and equipment.

## Solutions
merit-based recruitment, adequate pay, training, use of technology (e-government), anti-corruption measures, reward and discipline.`,
          examples: `**Example 1.** Who is the administrative head of a federal ministry? *Answer:* the **Permanent Secretary**.

**Example 2.** What does "anonymity" in the civil service mean? *Answer:* Civil servants **work behind the scenes**; ministers take public responsibility.

**Example 3.** Name one problem of the civil service. *Answer:* **red tape** (or corruption).`,
        },
        questions: [
          ["E", "All institutions and workers employed by government to provide services form the", "public service", "private sector", "civil society", "opposition", "They serve the public."],
          ["E", "Permanent career officials who work in government ministries make up the", "civil service", "legislature", "judiciary", "political parties", "Civil servants implement policies."],
          ["E", "The administrative head of a federal ministry is the", "Permanent Secretary", "Minister", "President", "Speaker", "The Minister is the political head."],
          ["M", "The political head of a ministry is the", "Minister", "Permanent Secretary", "clerk", "Chief Justice", "Ministers are political appointees."],
          ["M", "Civil servants remain in office when governments change. This feature is", "permanence", "anonymity", "partisanship", "red tape", "The service is continuous."],
          ["M", "Civil servants working behind the scenes while ministers take public responsibility is", "anonymity", "permanence", "hierarchy", "tenure", "They are not publicly credited or blamed."],
          ["M", "The body responsible for recruiting and disciplining federal civil servants is the", "Federal Civil Service Commission", "INEC", "EFCC", "NPC", "It regulates the civil service."],
          ["H", "Unnecessary delays caused by rigid procedures in the civil service are called", "red tape", "neutrality", "anonymity", "permanence", "Bureaucratic delays frustrate citizens."],
          ["H", "Civil servants are expected to be politically", "neutral", "partisan", "active in party campaigns", "loyal to one party only", "They serve any government in power."],
          ["H", "Which would improve the performance of the public service?", "merit-based recruitment and training", "nepotism", "political interference", "poor pay", "Competent staff deliver better services."],
        ],
      },
      {
        week: 3,
        title: "Pressure groups",
        subtopics: ["Meaning of pressure groups", "Types of pressure groups", "Methods used by pressure groups", "Differences between pressure groups and political parties"],
        objectives: ["Define pressure groups", "Identify types of pressure groups", "Describe the methods pressure groups use", "Distinguish pressure groups from political parties"],
        lesson: {
          title: "Influencing Government Decisions",
          summary: "Explain pressure groups, their methods and how they differ from parties.",
          minutes: 45,
          notes: `## Meaning
A **pressure (interest) group** is an **organised group** that tries to **influence government policies** in favour of its members or a cause, **without seeking to control government**.

## Types
| Type | Description | Examples |
|---|---|---|
| **interest/sectional groups** | protect members' economic or professional interests | NLC, NUT, NMA, NBA, ASUU, Manufacturers Association of Nigeria |
| **promotional/cause groups** | promote a cause for society | environmental and human rights groups |
| **anomic groups** | spontaneous, often violent demonstrations | riots, unplanned protests |
| **institutional groups** | groups within government institutions | the military, civil servants' associations |
| **associational groups** | formally organised associations | trade unions, professional bodies |

## Methods
lobbying legislators and officials; petitions; press conferences and advertisements; strikes (by unions); peaceful demonstrations; litigation (going to court); sponsoring research and publications; supporting candidates who favour their cause.

## Pressure groups vs political parties
| Pressure groups | Political parties |
|---|---|
| influence government | seek to **control** government |
| do not contest elections | contest elections |
| narrow interests | broad programmes |
| membership often limited to a profession | open to all citizens |

## Functions and importance
articulate interests; inform government; check abuse of power; educate members and the public; promote democracy.
**Limitations:** may pursue selfish interests; strikes can disrupt services; may be infiltrated by politicians.`,
          examples: `**Example 1.** Is the Nigeria Labour Congress a pressure group? *Answer:* **Yes** — an interest group of workers.

**Example 2.** Name one method pressure groups use. *Answer:* **lobbying** (or strikes, petitions).

**Example 3.** How does a pressure group differ from a political party? *Answer:* A pressure group **influences** government but does **not contest elections**.`,
        },
        questions: [
          ["E", "An organised group that tries to influence government without seeking to control it is", "a pressure group", "a political party", "the judiciary", "the civil service", "It influences policy."],
          ["E", "Which is a pressure group?", "Nigeria Labour Congress", "the Senate", "the Supreme Court", "INEC", "The NLC protects workers' interests."],
          ["E", "Pressure groups do NOT", "contest elections to form government", "lobby officials", "write petitions", "hold press conferences", "Only parties seek to control government."],
          ["M", "Persuading legislators to support a group's interest is called", "lobbying", "rigging", "vetoing", "impeachment", "Lobbyists influence decisions."],
          ["M", "Groups that promote a cause for society, such as the environment, are", "promotional (cause) groups", "anomic groups", "political parties", "institutional groups only", "They pursue public causes."],
          ["M", "Spontaneous and often violent demonstrations are", "anomic groups", "promotional groups", "associational groups", "legislatures", "They are unorganised."],
          ["M", "A method used mainly by labour unions to press their demands is", "strike action", "rigging", "impeachment", "vetoing", "Workers withdraw their services."],
          ["H", "A major difference between pressure groups and political parties is that parties", "seek to control government", "never contest elections", "have narrow interests", "only lobby", "Parties want to govern."],
          ["H", "A limitation of pressure groups is that they may", "pursue selfish interests", "always serve everyone equally", "never influence policy", "contest elections", "Some serve only members."],
          ["H", "The Academic Staff Union of Universities (ASUU) is an example of", "an interest group", "a political party", "an anomic group", "a court", "It represents university lecturers."],
        ],
      },
      {
        week: 4,
        title: "Mass media and public opinion",
        subtopics: ["Meaning of mass media", "Types of mass media", "Functions of the media in a democracy", "Public opinion and how it is formed"],
        objectives: ["Define mass media", "Identify types of mass media", "Explain the functions of the media in a democracy", "Explain public opinion and how it is formed"],
        lesson: {
          title: "Media, Information and Public Opinion",
          summary: "Explain the roles of the media and how public opinion is formed.",
          minutes: 45,
          notes: `## Mass media
The **mass media** are channels of communication that reach **large audiences** at the same time.
| Type | Examples |
|---|---|
| **print media** | newspapers, magazines, books |
| **electronic/broadcast media** | radio, television |
| **new/digital media** | websites, social media, blogs, podcasts |

## Functions in a democracy
- **informing** citizens about government and events
- **educating** the public
- serving as a **watchdog**: exposing corruption and abuse of power
- **setting the agenda** for public discussion
- providing a platform for different **opinions**
- **entertainment**
- **mobilising** people for elections and programmes
The press is sometimes called the **"fourth estate of the realm"** because of its influence.

## Regulation
- **National Broadcasting Commission (NBC)** regulates radio and TV.
- The **Nigerian Press Council** promotes press standards.
- The **Freedom of Information Act (2011)** gives citizens and journalists the right to request public records.

## Public opinion
**Public opinion** is the **views held by a large part of the population** on a public issue.
Formed through: the media, family, schools, religious bodies, political parties, pressure groups, opinion leaders and personal experience.
Measured through: **opinion polls**, elections, referendums, letters to editors, social media trends, protests.

## Responsibilities
Media should be **accurate, fair and responsible**; citizens should verify information and avoid spreading **fake news** and hate speech.`,
          examples: `**Example 1.** Why is the press called the "fourth estate of the realm"? *Answer:* Because of its **great influence** alongside the three arms of government.

**Example 2.** Which body regulates broadcasting in Nigeria? *Answer:* the **National Broadcasting Commission (NBC)**.

**Example 3.** Name one way public opinion is measured. *Answer:* **opinion polls**.`,
        },
        questions: [
          ["E", "Channels of communication that reach large audiences are the", "mass media", "judiciary", "civil service", "legislature", "Media reach many people."],
          ["E", "Newspapers are an example of", "print media", "broadcast media", "digital media only", "traditional drums", "They are printed."],
          ["E", "Radio and television are", "broadcast media", "print media", "courts", "pressure groups", "They transmit sound and pictures."],
          ["M", "The media acts as a watchdog when it", "exposes corruption and abuse of power", "hides government wrongdoing", "only entertains", "promotes fake news", "It monitors those in power."],
          ["M", "The body that regulates radio and television in Nigeria is the", "National Broadcasting Commission", "NCC", "INEC", "NAFDAC", "The NBC licenses broadcasters."],
          ["M", "The views held by a large part of the population on an issue are", "public opinion", "private opinion", "a verdict", "a decree", "It reflects collective views."],
          ["M", "Public opinion can be measured through", "opinion polls", "rumours only", "secret meetings", "curfews", "Polls sample people's views."],
          ["H", "The press is often called the", "fourth estate of the realm", "first arm of government", "supreme court", "executive council", "It is influential like the arms of government."],
          ["H", "The law that allows citizens to request public records is the", "Freedom of Information Act", "Land Use Act", "Electoral Act", "Child Rights Act", "It was passed in 2011."],
          ["H", "Citizens should verify information before sharing it to avoid", "spreading fake news", "being informed", "reading newspapers", "voting", "False information causes harm."],
        ],
      },
      {
        week: 5,
        title: "Security agencies and national security",
        subtopics: ["Meaning of national security", "The armed forces", "Police and paramilitary agencies", "Citizens' role in national security"],
        objectives: ["Explain national security", "Identify the arms of the armed forces and their roles", "Identify police and paramilitary agencies and their roles", "Explain the role of citizens in national security"],
        lesson: {
          title: "Keeping Nigeria Safe",
          summary: "Describe Nigeria's security agencies and the citizen's role in security.",
          minutes: 45,
          notes: `## National security
**National security** is the **protection of a nation's territory, people, institutions and interests** from internal and external threats such as terrorism, banditry, kidnapping, cybercrime and foreign aggression.

## The armed forces
| Arm | Main role |
|---|---|
| **Nigerian Army** | land defence |
| **Nigerian Navy** | protection of territorial waters and maritime interests |
| **Nigerian Air Force** | air defence and air support |
The **President** is the **Commander-in-Chief** of the Armed Forces.

## Police and paramilitary agencies
| Agency | Role |
|---|---|
| **Nigeria Police Force** | internal security, crime prevention and detection |
| **Department of State Services (DSS)** | intelligence and internal security threats |
| **NSCDC** | protection of critical infrastructure; disaster support |
| **Nigeria Immigration Service** | border control; passports |
| **Nigeria Customs Service** | revenue collection; anti-smuggling |
| **Nigerian Correctional Service** | custody and rehabilitation of offenders |
| **FRSC** | road safety |
| **NDLEA** | drug control |
| **Federal Fire Service** | fire prevention and rescue |

## Threats to national security
terrorism (e.g. insurgency in the north-east), banditry, kidnapping, communal clashes, oil theft and pipeline vandalism, cybercrime, drug and human trafficking, small arms proliferation.

## Citizens' role
- **"If you see something, say something"**: report suspicious persons and activities
- cooperate with security agencies
- obey laws and avoid hate speech
- join lawful community security (neighbourhood watch)
- protect public infrastructure`,
          examples: `**Example 1.** Who is the Commander-in-Chief of Nigeria's Armed Forces? *Answer:* the **President**.

**Example 2.** Which agency protects Nigeria's territorial waters? *Answer:* the **Nigerian Navy**.

**Example 3.** Name one role of citizens in national security. *Answer:* **reporting suspicious activities**.`,
        },
        questions: [
          ["E", "The protection of a nation's people and territory from threats is", "national security", "national census", "national budget", "national festival", "Security safeguards the nation."],
          ["E", "The Commander-in-Chief of the Nigerian Armed Forces is the", "President", "Chief of Army Staff", "Senate President", "Chief Justice", "The Constitution vests this in the President."],
          ["E", "The arm of the armed forces responsible for land defence is the", "Army", "Navy", "Air Force", "Police", "The Army operates on land."],
          ["M", "The agency that controls Nigeria's borders and issues passports is the", "Nigeria Immigration Service", "Customs Service", "NSCDC", "FRSC", "It regulates entry and exit."],
          ["M", "The agency that collects duties and fights smuggling is the", "Nigeria Customs Service", "Immigration Service", "NDLEA", "DSS", "Customs protects revenue."],
          ["M", "The Nigerian Navy mainly protects", "territorial waters", "airspace", "prisons", "roads", "It operates at sea."],
          ["M", "Which is a threat to national security?", "terrorism", "community service", "voter education", "tree planting", "Terrorism endangers lives."],
          ["H", "The agency responsible for intelligence on internal security threats is the", "Department of State Services", "Nigeria Customs Service", "Federal Fire Service", "FRSC", "The DSS gathers intelligence."],
          ["H", "The agency formerly called the Nigerian Prisons Service is now the", "Nigerian Correctional Service", "NSCDC", "DSS", "NDLEA", "It focuses on custody and rehabilitation."],
          ["H", "The slogan 'If you see something, say something' encourages citizens to", "report suspicious activities", "ignore strange behaviour", "take the law into their hands", "spread rumours", "Information helps security agencies."],
        ],
      },
      {
        week: 6,
        title: "National honours and awards",
        subtopics: ["Meaning of national honours", "Categories of Nigerian national honours", "Criteria for awards", "Importance of national honours"],
        objectives: ["Explain national honours", "Identify categories of Nigerian national honours", "State criteria for conferring honours", "Explain the importance of national honours"],
        lesson: {
          title: "Honouring Outstanding Citizens",
          summary: "Describe Nigeria's national honours and why they are awarded.",
          minutes: 40,
          notes: `## Meaning
**National honours** are **awards conferred by the government** on citizens (and sometimes foreigners) who have made **outstanding contributions** to the nation or humanity.
They were established by the **National Honours Act of 1964** and are conferred by the **President**.

## Orders and ranks (highest to lowest)
| Order | Ranks (with post-nominal letters) |
|---|---|
| **Order of the Federal Republic (OFR)** | Grand Commander (**GCFR**), Commander (**CFR**), Officer (**OFR**), Member (**MFR**) |
| **Order of the Niger (ON)** | Grand Commander (**GCON**), Commander (**CON**), Officer (**OON**), Member (**MON**) |
- **GCFR** is the highest honour; it is usually conferred on Presidents (and former Heads of State).
- **GCON** is usually conferred on Vice-Presidents, the Senate President and the Chief Justice of Nigeria.
There is also the **Nigerian National Order of Merit (NNOM)**, awarded for excellence in academic and intellectual work.

## Criteria
outstanding service to the nation, integrity, excellence in a profession (arts, sports, science, public service), bravery, humanitarian service.

## Importance
- recognises and **rewards** excellence and service
- motivates others to serve with **integrity**
- promotes **patriotism**
- creates national **role models**

## Concerns
Critics say honours are sometimes given for political reasons rather than merit; honours can be **withdrawn** for misconduct. Awards should be based strictly on merit.`,
          examples: `**Example 1.** What is the highest national honour in Nigeria? *Answer:* **Grand Commander of the Order of the Federal Republic (GCFR)**.

**Example 2.** Who confers national honours? *Answer:* the **President**.

**Example 3.** Name one importance of national honours. *Answer:* They **motivate citizens** to serve with integrity.`,
        },
        questions: [
          ["E", "Awards conferred by government on citizens for outstanding service are", "national honours", "taxes", "fines", "decrees", "They recognise excellence."],
          ["E", "National honours in Nigeria are conferred by the", "President", "Chief Justice", "Senate President", "Governor of Lagos", "The President confers them."],
          ["E", "The highest national honour in Nigeria is", "GCFR", "MON", "OON", "MFR", "Grand Commander of the Order of the Federal Republic."],
          ["M", "The Nigerian National Honours Act was enacted in", "1964", "1999", "1914", "2011", "It established the orders."],
          ["M", "GCON stands for Grand Commander of the Order of the", "Niger", "Nation", "North", "Nile", "It belongs to the Order of the Niger."],
          ["M", "Which is an importance of national honours?", "motivating citizens to serve with integrity", "encouraging corruption", "discouraging patriotism", "punishing citizens", "Recognition inspires others."],
          ["M", "Which is a criterion for receiving a national honour?", "outstanding service to the nation", "wealth alone", "political thuggery", "tribal loyalty", "Service and merit are required."],
          ["H", "The award for excellence in academic and intellectual work is the", "Nigerian National Order of Merit", "Order of the Niger only", "GCFR", "Olympic medal", "NNOM recognises intellectual achievement."],
          ["H", "A common criticism of the national honours system is that awards", "are sometimes given for political reasons rather than merit", "are never given", "are only for foreigners", "cannot be withdrawn", "Merit must guide awards."],
          ["H", "Which is the correct order from higher to lower rank in the Order of the Niger?", "GCON, CON, OON, MON", "MON, OON, CON, GCON", "CON, GCON, MON, OON", "OON, MON, GCON, CON", "Grand Commander is highest."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Traffic regulations and road safety",
        subtopics: ["Meaning of traffic regulations", "Road signs and markings", "Duties of road users", "Traffic offences and penalties"],
        objectives: ["Explain traffic regulations", "Interpret common road signs and markings", "State the duties of road users", "Identify traffic offences and their penalties"],
        lesson: {
          title: "Rules of the Road",
          summary: "Explain traffic regulations and the duties of road users.",
          minutes: 40,
          notes: `## Meaning
**Traffic regulations** are **rules and laws** that govern the use of roads by vehicles, cyclists and pedestrians to ensure **safety and order**. In Nigeria they are contained in the **National Road Traffic Regulations** and enforced by the **FRSC**, police and state traffic agencies.

## Road signs and markings
| Sign type | Shape (usual) | Purpose | Examples |
|---|---|---|---|
| **regulatory** | circle | commands and prohibitions | speed limit, no entry, no parking |
| **warning** | triangle | warns of hazards | bend ahead, pedestrian crossing, school |
| **informative** | rectangle | gives information | directions, hospital, filling station |
| **stop** | octagon | stop completely | junctions |
Road markings: **broken lines** (may overtake if safe), **continuous (unbroken) lines** (no overtaking), **zebra crossings**, stop lines.

## Duties of road users
- **Drivers**: hold a valid **driver's licence**, obey speed limits, wear **seat belts**, avoid drink-driving and phone use, maintain vehicles, carry required documents.
- **Motorcyclists**: wear **crash helmets**; avoid overloading.
- **Pedestrians**: use zebra crossings and footbridges; walk facing traffic where there is no footpath.
- **Passengers**: wear seat belts; do not distract the driver.

## Common traffic offences
over-speeding, dangerous overtaking, driving without a licence, **seat-belt** violation, **phone use while driving**, drink-driving, **route violation** (driving against traffic), overloading, ignoring traffic lights, driving unroadworthy vehicles.

## Penalties
fines, points on the driver's licence, seizure of vehicles, suspension or withdrawal of licences, prosecution and imprisonment.`,
          examples: `**Example 1.** What shape are warning signs usually? *Answer:* **triangular**.

**Example 2.** What does a continuous line in the middle of the road mean? *Answer:* **No overtaking**.

**Example 3.** Name one traffic offence. *Answer:* **using a phone while driving** (or over-speeding).`,
        },
        questions: [
          ["E", "Rules governing the use of roads are called", "traffic regulations", "bye-laws of schools", "customs", "decrees", "They ensure road safety."],
          ["E", "The agency that enforces traffic regulations on highways is the", "FRSC", "NDLEA", "INEC", "NAFDAC", "The Federal Road Safety Corps."],
          ["E", "Motorcyclists must wear", "crash helmets", "caps", "sunglasses only", "headphones", "Helmets protect the head."],
          ["M", "Warning road signs are usually", "triangular", "circular", "rectangular", "octagonal", "Triangles warn of hazards."],
          ["M", "A continuous (unbroken) line in the middle of the road means", "no overtaking", "overtaking allowed", "stop immediately", "parking allowed", "Crossing it is dangerous."],
          ["M", "Driving against the flow of traffic is", "route violation", "defensive driving", "safe overtaking", "parking", "It is a serious offence."],
          ["M", "The octagonal red sign means", "stop", "give way", "no entry", "speed limit", "Octagons are used for STOP signs."],
          ["H", "Which is a duty of passengers?", "wearing seat belts and not distracting the driver", "shouting at the driver", "overloading the vehicle", "hanging on the door", "Passengers also have responsibilities."],
          ["H", "Which is a possible penalty for a serious traffic offence?", "suspension of the driver's licence", "a reward", "free fuel", "promotion", "Licences can be suspended."],
          ["H", "Circular road signs usually", "give commands or prohibitions", "give directions", "warn of bends only", "advertise products", "Circles are regulatory."],
        ],
      },
      {
        week: 2,
        title: "Justice and fairness",
        subtopics: ["Meaning of justice and fairness", "Attributes of a just person", "Justice in the family, school and nation", "Consequences of injustice"],
        objectives: ["Define justice and fairness", "Identify attributes of a just person", "Describe how justice is practised in different settings", "Explain the consequences of injustice"],
        lesson: {
          title: "Treating Everyone Fairly",
          summary: "Explain justice and fairness and why they are essential to peace.",
          minutes: 40,
          notes: `## Meanings
- **Justice** is giving every person **what is due to him or her** according to law and morality — rewarding the deserving and punishing wrongdoing fairly.
- **Fairness** is treating people **equally and without bias**.

## Attributes of a just person
impartiality (no favouritism), honesty, listening to all sides before judging, consistency, respect for rights, courage to do what is right, accountability.

## Justice in different settings
| Setting | Examples of justice |
|---|---|
| **family** | parents treating children equally; fair sharing of chores |
| **school** | fair marking; prefects chosen on merit; equal application of rules |
| **workplace** | promotion on merit; equal pay for equal work |
| **nation** | independent courts; fair distribution of resources; equal protection by law; free and fair elections |

## Social justice
fair distribution of wealth, opportunities and privileges in society — e.g. access to education, health care and jobs for all groups.

## Consequences of injustice
anger and bitterness, conflict and violence, loss of trust in leaders and institutions, agitation and separatist movements, corruption, poverty, underdevelopment.

## Promoting justice
merit-based decisions, independent judiciary, rule of law, transparency, equal opportunities, fair representation (e.g. federal character applied fairly).`,
          examples: `**Example 1.** A teacher gives marks based only on the quality of answers, not on friendship. What does this show? *Answer:* **fairness/justice**.

**Example 2.** Name one attribute of a just person. *Answer:* **impartiality**.

**Example 3.** Name one consequence of injustice in a nation. *Answer:* **conflict and agitation**.`,
        },
        questions: [
          ["E", "Giving every person what is due to him or her is", "justice", "injustice", "nepotism", "tribalism", "Justice is fair treatment."],
          ["E", "Treating people equally and without bias is", "fairness", "favouritism", "discrimination", "prejudice", "Fairness avoids bias."],
          ["E", "Which is an attribute of a just person?", "impartiality", "favouritism", "dishonesty", "bias", "A just person does not take sides unfairly."],
          ["M", "Choosing prefects on merit is an example of", "justice in school", "nepotism", "injustice", "tribalism", "Merit ensures fairness."],
          ["M", "Which is a consequence of injustice?", "conflict and violence", "peace", "trust", "unity", "Injustice breeds anger."],
          ["M", "Fair distribution of wealth and opportunities in society is", "social justice", "social vice", "tribalism", "nepotism", "It promotes equality."],
          ["M", "Listening to all sides before making a judgement shows", "fairness", "bias", "prejudice", "partiality", "Both sides deserve a hearing."],
          ["H", "How does an independent judiciary promote justice?", "It decides cases according to law without influence.", "It favours the government always.", "It ignores the law.", "It serves only the rich.", "Independence ensures impartiality."],
          ["H", "Equal pay for equal work regardless of sex is an example of", "justice in the workplace", "discrimination", "nepotism", "injustice", "Workers are treated fairly."],
          ["H", "Why does injustice lead to agitation by some groups?", "People who feel marginalised demand fair treatment.", "Justice causes agitation.", "Agitation never happens.", "Everyone is always satisfied.", "Unfairness provokes demands for change."],
        ],
      },
      {
        week: 3,
        title: "Integrity",
        subtopics: ["Meaning of integrity", "Attributes of a person of integrity", "Integrity in public life", "Benefits of integrity"],
        objectives: ["Define integrity", "Identify attributes of a person of integrity", "Explain the importance of integrity in public life", "State the benefits of integrity"],
        lesson: {
          title: "Being Upright at All Times",
          summary: "Explain integrity and its importance for individuals and leaders.",
          minutes: 40,
          notes: `## Meaning
**Integrity** is the quality of being **honest and having strong moral principles**, and **consistently doing what is right**, even when no one is watching.
It comes from the Latin *integer*, meaning **whole** — a person of integrity is the same in private and in public.

## Attributes of a person of integrity
- honesty and truthfulness
- keeping promises
- **consistency** between words and actions
- accountability and transparency
- refusing bribes and corruption
- fairness and respect for others
- courage to stand for the truth
- admitting and correcting mistakes

## Integrity in public life
Public officers are expected to:
- use public funds only for public purposes
- **declare their assets** (Code of Conduct Bureau)
- avoid **conflict of interest**
- be accountable to the people
The **Code of Conduct Bureau** and **Code of Conduct Tribunal** enforce standards for public officers under the Fifth Schedule of the 1999 Constitution.

## Benefits
| Individual | Society |
|---|---|
| trust and respect | good governance |
| peace of mind | reduced corruption |
| good reputation | investor confidence |
| leadership opportunities | national development |

## Threats to integrity
greed, peer pressure, desire for quick wealth, poor role models, weak punishment of offenders.`,
          examples: `**Example 1.** A cashier finds excess money in the till and reports it instead of keeping it. What value is shown? *Answer:* **integrity**.

**Example 2.** Which body receives asset declarations from public officers? *Answer:* the **Code of Conduct Bureau**.

**Example 3.** What does the Latin word *integer* mean? *Answer:* **whole**.`,
        },
        questions: [
          ["E", "Being honest and consistently doing what is right is", "integrity", "greed", "hypocrisy", "cowardice", "Integrity is moral uprightness."],
          ["E", "A person of integrity", "keeps promises", "tells lies", "takes bribes", "cheats others", "Reliability shows integrity."],
          ["E", "Doing the right thing even when no one is watching shows", "integrity", "hypocrisy", "fear", "laziness", "Integrity is consistent."],
          ["M", "The Latin word 'integer', from which integrity comes, means", "whole", "money", "law", "king", "A person of integrity is undivided."],
          ["M", "The body that receives asset declarations from public officers is the", "Code of Conduct Bureau", "INEC", "NPC", "NAFDAC", "It enforces standards of conduct."],
          ["M", "A public officer using public funds for private purposes lacks", "integrity", "courage only", "education", "talent", "It is dishonest conduct."],
          ["M", "Which is a benefit of integrity to society?", "reduced corruption", "increased fraud", "loss of trust", "poor governance", "Upright leaders reduce corruption."],
          ["H", "A situation where a public officer's personal interest clashes with public duty is", "conflict of interest", "integrity", "accountability", "transparency", "It must be avoided or declared."],
          ["H", "The Code of Conduct for public officers is found in which part of the 1999 Constitution?", "Fifth Schedule", "Chapter IV", "First Schedule", "Preamble", "The Fifth Schedule sets the code."],
          ["H", "Which is a threat to integrity?", "desire for quick wealth", "contentment", "good role models", "strong values", "Greed tempts people to compromise."],
        ],
      },
      {
        week: 4,
        title: "Environmental citizenship",
        subtopics: ["Meaning of environmental citizenship", "Citizens' responsibilities to the environment", "Environmental laws and agencies", "Sustainable practices"],
        objectives: ["Explain environmental citizenship", "State citizens' responsibilities to the environment", "Identify environmental laws and agencies", "Describe sustainable practices citizens can adopt"],
        lesson: {
          title: "Caring for Our Environment",
          summary: "Explain citizens' responsibilities for a clean, safe environment.",
          minutes: 40,
          notes: `## Meaning
**Environmental citizenship** is the **responsible behaviour of citizens towards the environment** — protecting it for present and future generations. Section 20 of the 1999 Constitution directs the state to **protect and improve the environment**.

## Citizens' responsibilities
- dispose of **waste properly**; do not dump refuse in drains or streets
- participate in **environmental sanitation**
- **plant and protect trees**
- **conserve water and energy**
- avoid bush burning and illegal logging
- reduce, **reuse and recycle** plastics
- report environmental offences (illegal dumping, oil theft, illegal mining)
- keep noise at reasonable levels

## Environmental laws and agencies
| Agency / law | Role |
|---|---|
| **Federal Ministry of Environment** | environmental policy |
| **NESREA** (National Environmental Standards and Regulations Enforcement Agency, 2007) | enforces environmental standards |
| **NOSDRA** (National Oil Spill Detection and Response Agency) | oil spill detection and response |
| **Environmental Impact Assessment Act** | projects must assess environmental effects before approval |
| state waste agencies (e.g. LAWMA) | waste collection and management |

## Sustainable practices
using energy-efficient bulbs and solar power, walking or cycling short distances, composting, using reusable bags and bottles, water harvesting, responsible farming.

## Why it matters
clean environment reduces **disease**, prevents **flooding**, protects **biodiversity** and helps fight **climate change**.`,
          examples: `**Example 1.** Name one responsibility of a citizen to the environment. *Answer:* **proper waste disposal** (or tree planting).

**Example 2.** Which agency enforces environmental standards in Nigeria? *Answer:* **NESREA**.

**Example 3.** Give one sustainable practice. *Answer:* **using reusable bags** (or recycling).`,
        },
        questions: [
          ["E", "Responsible behaviour of citizens towards the environment is", "environmental citizenship", "tribalism", "apathy", "pollution", "Citizens protect nature."],
          ["E", "Dumping refuse in drains leads to", "flooding", "cleaner streets", "better health", "more trees", "Blocked drains overflow."],
          ["E", "Which is a responsibility of citizens to the environment?", "planting trees", "bush burning", "illegal logging", "dumping waste in rivers", "Trees protect the environment."],
          ["M", "The agency that enforces environmental standards in Nigeria is", "NESREA", "NDLEA", "INEC", "NCC", "It was created in 2007."],
          ["M", "The agency that responds to oil spills is", "NOSDRA", "NAFDAC", "NPC", "NIMC", "It detects and responds to spills."],
          ["M", "Reducing, reusing and recycling plastics helps to", "reduce waste and pollution", "increase litter", "block drains", "harm wildlife", "Less waste reaches the environment."],
          ["M", "Which is a sustainable practice?", "using reusable shopping bags", "burning tyres", "wasting water", "leaving lights on", "It reduces plastic waste."],
          ["H", "The section of the 1999 Constitution that directs the state to protect the environment is", "Section 20", "Section 1", "Section 308", "Section 35", "It is in Chapter II."],
          ["H", "The law that requires projects to assess their environmental effects before approval is the", "Environmental Impact Assessment Act", "Electoral Act", "Child Rights Act", "Freedom of Information Act", "EIA is required for major projects."],
          ["H", "How does environmental citizenship help fight climate change?", "It reduces emissions and protects forests.", "It increases pollution.", "It encourages deforestation.", "It has no effect.", "Responsible habits reduce harm."],
        ],
      },
      {
        week: 5,
        title: "Citizenship: acquisition and loss",
        subtopics: ["Ways of acquiring Nigerian citizenship", "Dual citizenship", "Loss and renunciation of citizenship", "Rights reserved for citizens"],
        objectives: ["Describe the ways of acquiring Nigerian citizenship", "Explain dual citizenship", "State how citizenship may be lost or renounced", "Identify rights and privileges reserved for citizens"],
        lesson: {
          title: "Becoming and Remaining a Citizen",
          summary: "Explain how Nigerian citizenship is acquired and lost under the Constitution.",
          minutes: 45,
          notes: `## Acquisition (Chapter III of the 1999 Constitution)
| Method | Summary |
|---|---|
| **birth** (Section 25) | persons born in Nigeria before independence whose parent or grandparent belongs to an indigenous community; persons born in Nigeria after independence to a Nigerian parent or grandparent; persons born outside Nigeria to a Nigerian parent |
| **registration** (Section 26) | e.g. a foreign woman married to a Nigerian man; persons of full age born outside Nigeria whose grandparent is Nigerian — subject to conditions such as good character and an oath of allegiance |
| **naturalisation** (Section 27) | a foreigner of full age who has lived in Nigeria for a continuous period (15 years in total as set out in the Constitution), is of good character, can contribute to Nigeria and takes the oath of allegiance |

## Dual citizenship
A **Nigerian by birth** may hold the citizenship of another country **without losing Nigerian citizenship**. However, persons who acquired Nigerian citizenship by registration or naturalisation generally lose it if they acquire another country's citizenship (other than by birth).

## Loss and renunciation
- **Renunciation** (Section 29): a Nigerian of full age may give up citizenship by declaration.
- **Deprivation** (Section 30): the President may deprive a person who acquired citizenship by **registration or naturalisation** of it, e.g. if convicted of certain serious offences within a specified period or found to have been disloyal.
Citizens **by birth** cannot be deprived of citizenship.

## Rights reserved for citizens
voting and being voted for; holding certain public offices (e.g. President must be a citizen **by birth**); freedom of movement and residence throughout Nigeria; obtaining a Nigerian passport; protection abroad.`,
          examples: `**Example 1.** Name the three ways of acquiring Nigerian citizenship. *Answer:* **birth, registration and naturalisation**.

**Example 2.** Can a Nigerian by birth hold dual citizenship? *Answer:* **Yes**.

**Example 3.** Can a citizen by birth be deprived of citizenship? *Answer:* **No**.`,
        },
        questions: [
          ["E", "A person born in Nigeria to Nigerian parents is a citizen by", "birth", "naturalisation", "registration", "election", "Citizenship by birth is automatic."],
          ["E", "Citizenship provisions are contained in which chapter of the 1999 Constitution?", "Chapter III", "Chapter IV", "Chapter II", "Chapter VIII", "Chapter III deals with citizenship."],
          ["E", "Giving up one's citizenship voluntarily is", "renunciation", "naturalisation", "registration", "deprivation", "The citizen declares it."],
          ["M", "A foreigner who lives in Nigeria for the required period and is granted citizenship obtains it by", "naturalisation", "birth", "registration by descent", "inheritance", "Section 27 governs naturalisation."],
          ["M", "A foreign woman married to a Nigerian man may acquire citizenship by", "registration", "birth", "election", "appointment", "Section 26 provides for this."],
          ["M", "Holding the citizenship of two countries at the same time is", "dual citizenship", "naturalisation", "renunciation", "deprivation", "Nigerians by birth may do this."],
          ["M", "Who may be deprived of Nigerian citizenship by the President?", "persons who acquired it by registration or naturalisation", "all citizens by birth", "children under 18 born to Nigerians", "the President himself", "Citizens by birth cannot be deprived."],
          ["H", "To be President of Nigeria, a person must be a citizen", "by birth", "by naturalisation", "by registration", "of any country", "The Constitution requires citizenship by birth."],
          ["H", "Before being granted citizenship by naturalisation, an applicant must", "take an oath of allegiance", "pay no attention to Nigerian law", "renounce all values", "be under 18", "Loyalty to Nigeria is sworn."],
          ["H", "Which right is reserved for Nigerian citizens?", "voting in Nigerian elections", "breathing air", "walking on the street", "buying food", "Voting is a citizen's right."],
        ],
      },
      {
        week: 6,
        title: "Nigeria and international cooperation",
        subtopics: ["Meaning of foreign policy", "Principles of Nigeria's foreign policy", "Nigeria's membership of international organisations", "Benefits of international cooperation"],
        objectives: ["Explain foreign policy", "State the principles of Nigeria's foreign policy", "Identify international organisations Nigeria belongs to", "Explain the benefits of international cooperation"],
        lesson: {
          title: "Nigeria in the Community of Nations",
          summary: "Explain Nigeria's foreign policy principles and international memberships.",
          minutes: 40,
          notes: `## Foreign policy
**Foreign policy** is the set of **principles and strategies a country uses in its relations with other countries** to protect its national interests. It is conducted by the President through the **Ministry of Foreign Affairs**, embassies and high commissions.

## Principles of Nigeria's foreign policy
- **Africa as the centrepiece** of foreign policy
- **non-alignment** (not joining rival power blocs)
- **respect for the sovereignty** and territorial integrity of other states
- **non-interference** in the internal affairs of other countries
- **peaceful settlement of disputes**
- promotion of **international peace and security**
- decolonisation and opposition to racism (e.g. support for the fight against apartheid)
- economic diplomacy and **citizen diplomacy** (protecting Nigerians abroad)

## International organisations
| Organisation | Year Nigeria joined / founded | Headquarters |
|---|---|---|
| **United Nations** | joined 1960 | New York |
| **Commonwealth** | joined 1960 | London |
| **African Union** (OAU 1963) | founding member | Addis Ababa |
| **ECOWAS** | founding member, 1975 | Abuja |
| **OPEC** | joined 1971 | Vienna |

## Benefits of international cooperation
trade and investment, aid and loans, peace-keeping and security cooperation, cultural and educational exchange, scholarships, technology transfer, a voice in global decisions, protection of citizens abroad.

## Nigeria's contributions
peace-keeping (ECOMOG, UN missions), support for liberation movements, **Technical Aid Corps** volunteers to other countries, hosting ECOWAS.`,
          examples: `**Example 1.** What is the centrepiece of Nigeria's foreign policy? *Answer:* **Africa**.

**Example 2.** When did Nigeria join OPEC? *Answer:* **1971**.

**Example 3.** Name one benefit of international cooperation. *Answer:* **trade and investment** (or scholarships).`,
        },
        questions: [
          ["E", "The principles a country uses in its relations with other countries form its", "foreign policy", "domestic budget", "local bye-laws", "school rules", "It guides external relations."],
          ["E", "The centrepiece of Nigeria's foreign policy is", "Africa", "Europe", "Asia", "South America", "Africa is Nigeria's priority."],
          ["E", "Nigeria's foreign policy is conducted mainly through the", "Ministry of Foreign Affairs", "Ministry of Education", "NDLEA", "INEC", "It manages external relations."],
          ["M", "Not joining rival power blocs is the principle of", "non-alignment", "interference", "colonialism", "isolation", "Nigeria remains independent of blocs."],
          ["M", "Nigeria joined OPEC in", "1971", "1960", "1975", "1999", "It joined the oil exporters' organisation in 1971."],
          ["M", "Respecting other countries' independence reflects the principle of", "respect for sovereignty", "interference", "aggression", "colonisation", "States must respect one another's independence."],
          ["M", "Which is a benefit of international cooperation?", "trade and investment", "isolation", "war", "sanctions against citizens", "Cooperation opens markets."],
          ["H", "Protecting the welfare of Nigerians living abroad is known as", "citizen diplomacy", "non-alignment", "decolonisation", "isolationism", "It puts citizens at the centre."],
          ["H", "Nigerian volunteers sent to help other developing countries serve under the", "Technical Aid Corps", "NYSC", "ECOMOG", "UNICEF", "It shares Nigerian expertise."],
          ["H", "Nigeria's support for the struggle against apartheid in South Africa reflected its commitment to", "decolonisation and opposition to racism", "interference for profit", "colonial rule", "isolation", "Nigeria championed African liberation."],
        ],
      },
    ],
  },
  {
    classCode: "JSS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "BECE revision: national values",
        subtopics: ["Values and their types", "Honesty, integrity and contentment", "Discipline, courage and patriotism", "Cooperation, self-reliance and justice"],
        objectives: ["Recall the meanings of national values", "Identify behaviours that show each value", "Revise consequences of lack of values", "Answer BECE-style questions on values"],
        lesson: {
          title: "BECE Revision: Values",
          summary: "Revise the national values studied in JSS for the BECE.",
          minutes: 45,
          notes: `## Quick reference
| Value | Meaning | Opposite / threat |
|---|---|---|
| **honesty** | truthfulness and fairness | lying, cheating, stealing |
| **integrity** | consistent uprightness even when unobserved | hypocrisy, corruption |
| **contentment** | satisfaction with honestly acquired things | greed |
| **discipline** | self-control and obedience to rules | indiscipline, truancy |
| **courage** | doing right despite fear (physical, moral) | cowardice, recklessness |
| **patriotism** | love and loyalty to one's country | treachery, vandalism |
| **cooperation** | working together for common goals | selfishness |
| **self-reliance** | depending on one's own skills and efforts | dependence, laziness |
| **justice/fairness** | giving everyone what is due, without bias | favouritism, nepotism |
| **right attitude to work** | diligence, punctuality, dignity of labour | absenteeism, laziness |

## Sources of values
family, school, religion, peers, mass media, community, government.

## BECE tips
Questions often describe a **situation** and ask which value it shows — read the scenario carefully and match the behaviour to the value.`,
          examples: `**Example 1.** *A student returns excess change to a trader.* Value: **honesty**.

**Example 2.** *A girl reports bullying despite threats.* Value: **moral courage**.

**Example 3.** *A man refuses to steal public funds even though no one would know.* Value: **integrity**.`,
        },
        questions: [
          ["E", "A student who returns excess change to a trader shows", "honesty", "greed", "cowardice", "tribalism", "Keeping it would be dishonest."],
          ["E", "A man who lives within his means and avoids get-rich-quick schemes shows", "contentment", "greed", "envy", "extravagance", "He is satisfied with honest gains."],
          ["E", "Love and loyalty to one's country is", "patriotism", "nepotism", "tribalism", "apathy", "Patriots serve their nation."],
          ["M", "A girl who reports bullying despite threats shows", "moral courage", "cowardice", "recklessness", "apathy", "She stands for what is right."],
          ["M", "Refusing to steal public funds even when no one would know shows", "integrity", "hypocrisy", "greed", "indiscipline", "Integrity holds when unobserved."],
          ["M", "Villagers working together to build a bridge show", "cooperation", "selfishness", "apathy", "rivalry", "They pursue a common goal."],
          ["M", "A graduate who happily works as a farmer while seeking other opportunities shows", "dignity of labour", "nepotism", "apathy", "indiscipline", "No honest job is too low."],
          ["H", "Promoting a less qualified relative over a qualified candidate violates the value of", "justice and fairness", "patriotism", "courage", "self-reliance", "It is nepotism."],
          ["H", "A youth who learns a trade and starts a business instead of waiting for a white-collar job shows", "self-reliance", "dependence", "laziness", "apathy", "He uses his own skills."],
          ["H", "Controlling oneself and obeying rules without supervision is", "self-discipline", "imposed discipline", "indiscipline", "recklessness", "It comes from within."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: citizenship and human rights",
        subtopics: ["Citizenship: acquisition, rights and duties", "Human rights and their protection", "Rights of the child", "Violations and redress"],
        objectives: ["Recall ways of acquiring citizenship", "Revise citizens' rights and duties", "Revise human rights and the rights of the child", "Answer BECE-style questions on citizenship and rights"],
        lesson: {
          title: "BECE Revision: Citizenship and Rights",
          summary: "Revise citizenship, human rights and redress for the BECE.",
          minutes: 45,
          notes: `## Citizenship
- Ways: **birth, registration, naturalisation** (Chapter III, 1999 Constitution).
- Renunciation (voluntary) and deprivation (only for registration/naturalisation).
- Duties (Section 24): obey the law, pay taxes, vote, respect national symbols, protect public property, help security agencies.

## Human rights
- Universal, inalienable, indivisible; limited by others' rights and public safety.
- UDHR: **10 December 1948** (Human Rights Day).
- Fundamental rights: **Chapter IV** — life, dignity, liberty, fair hearing, privacy, religion, expression, assembly, movement, freedom from discrimination, property.
- Economic and social objectives: **Chapter II**.
- **NHRC** protects human rights; **Legal Aid Council** provides free legal help.

## Rights of the child
- A child is under **18** (**Child Rights Act 2003**).
- Rights: survival, development (education), protection, participation, name and nationality.
- Responsibilities: respect elders, study, help at home.

## Redress
police, courts (Fundamental Rights Enforcement Procedure Rules), NHRC, Public Complaints Commission, NGOs, media.`,
          examples: `**Example 1.** *Human Rights Day is celebrated on:* **10 December**.

**Example 2.** *Fundamental rights are in which chapter?* **Chapter IV**.

**Example 3.** *A child under the Child Rights Act is anyone below:* **18 years**.`,
        },
        questions: [
          ["E", "Which is a fundamental human right?", "freedom of religion", "freedom to steal", "right to cheat", "right to insult", "Chapter IV protects freedom of religion."],
          ["E", "Which is a duty of a Nigerian citizen?", "paying taxes", "vandalism", "tax evasion", "hate speech", "Taxes fund services."],
          ["E", "The Child Rights Act was passed in", "2003", "1948", "1999", "2011", "It domesticated children's rights in Nigeria."],
          ["M", "The three ways of acquiring Nigerian citizenship are birth, registration and", "naturalisation", "election", "marriage only", "adoption only", "Chapter III provides these."],
          ["M", "The body that protects and promotes human rights in Nigeria is the", "National Human Rights Commission", "INEC", "NPC", "FRSC", "The NHRC investigates abuses."],
          ["M", "Economic and social objectives such as education are found in", "Chapter II", "Chapter IV", "Chapter I", "the Fifth Schedule", "Chapter II sets directive principles."],
          ["M", "The right to be heard before judgement is", "fair hearing", "freedom of movement", "right to property", "freedom of religion", "Both sides must be heard."],
          ["H", "The UN adopted the Universal Declaration of Human Rights in", "1948", "1960", "1989", "2003", "It was adopted on 10 December 1948."],
          ["H", "Citizenship obtained by naturalisation can be lost through", "deprivation by the President for serious reasons", "birth", "voting", "paying taxes", "Only non-birth citizenship can be deprived."],
          ["H", "A poor victim of unlawful detention can obtain free legal help from the", "Legal Aid Council", "EFCC", "NCC", "NIMC", "It assists indigent Nigerians."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: government and democracy",
        subtopics: ["Constitution and types of constitution", "Arms and levels of government", "Democracy, rule of law and elections", "Political parties, pressure groups and the media"],
        objectives: ["Recall facts on the constitution and government", "Revise democracy, rule of law and elections", "Revise parties, pressure groups and the media", "Answer BECE-style questions on government"],
        lesson: {
          title: "BECE Revision: Government and Democracy",
          summary: "Revise constitution, government, democracy and political institutions for the BECE.",
          minutes: 45,
          notes: `## Constitution
- Supreme law; 1999 Constitution in force since **29 May 1999**.
- Types: written/unwritten; rigid/flexible; federal/unitary; presidential/parliamentary.
- Nigeria: written, rigid, federal, presidential.

## Government
- Arms: **legislature** (makes laws — Section 4), **executive** (implements — Section 5), **judiciary** (interprets — Section 6).
- Levels: federal (President), state (Governor), local (Chairman; 774 LGAs).
- Separation of powers (**Montesquieu**); checks and balances (veto, impeachment, judicial review, budget approval).

## Democracy
- Power belongs to the people; Nigeria practises **representative** democracy.
- Pillars: free elections, rule of law, independent judiciary, free press, human rights, political parties, civil society.
- **Rule of law** (Dicey): supremacy of law, equality before the law, protection of rights. Limitation: immunity (Section 308).
- Democracy Day: **12 June**.

## Elections and institutions
- INEC (federal/state elections, party registration); SIECs (local elections); voting age 18; secret ballot; BVAS.
- Political parties seek to **control** government; pressure groups seek to **influence** it.
- Mass media: inform, educate, watchdog; NBC regulates broadcasting; Freedom of Information Act 2011.
- Political apathy: loss of interest; caused by rigging, violence, broken promises.`,
          examples: `**Example 1.** *The arm of government that makes laws:* **legislature**.

**Example 2.** *Who propounded the rule of law?* **A. V. Dicey**.

**Example 3.** *Nigeria's Democracy Day is:* **12 June**, honouring the 12 June 1993 election.`,
        },
        questions: [
          ["E", "In Nigeria, law-making power at the federal level belongs to the", "National Assembly", "Supreme Court", "Federal Executive Council", "INEC", "Section 4 vests it in the National Assembly."],
          ["E", "Nigeria's constitution is", "written and rigid", "unwritten and flexible", "unwritten and rigid", "customary only", "It is codified and hard to amend."],
          ["E", "Nigeria's Democracy Day is", "12 June", "1 October", "29 May", "1 May", "It honours the 1993 election."],
          ["M", "The rule of law was popularised by", "A. V. Dicey", "Montesquieu", "Lugard", "Lincoln", "Dicey outlined its principles."],
          ["M", "Separation of powers is associated with", "Montesquieu", "Dicey", "Aristotle only", "Azikiwe", "He wrote The Spirit of the Laws."],
          ["M", "A group that seeks to influence government without contesting elections is a", "pressure group", "political party", "legislature", "court", "It lobbies government."],
          ["M", "The body that conducts local government elections is the", "SIEC", "INEC", "NBC", "NPC", "State Independent Electoral Commissions."],
          ["H", "A limitation of the rule of law in Nigeria is", "immunity for certain officials under Section 308", "independent judiciary", "fair hearing", "free press", "Immunity shields some officials."],
          ["H", "The power of courts to declare a law unconstitutional is", "judicial review", "veto", "impeachment", "delegated legislation", "It checks the other arms."],
          ["H", "Loss of interest by citizens in voting and political activities is", "political apathy", "popular participation", "patriotism", "lobbying", "Apathy weakens democracy."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: social issues and national security",
        subtopics: ["Social vices and their prevention", "Youth empowerment and civil society", "Security agencies and national security", "Traffic regulations, public service and environmental citizenship"],
        objectives: ["Recall causes and effects of social vices", "Revise security agencies and their functions", "Revise traffic regulations, public service and environmental responsibilities", "Answer BECE-style questions on these areas"],
        lesson: {
          title: "BECE Revision: Society and Security",
          summary: "Revise social issues, security agencies and civic responsibilities for the BECE.",
          minutes: 45,
          notes: `## Social vices
cultism, drug abuse, internet fraud, kidnapping, examination malpractice, corruption. Causes: poverty, peer pressure, greed, poor parenting, weak law enforcement. Prevention: good parenting, value education, youth empowerment, law enforcement, counselling.

## Youth empowerment and civil society
- Programmes: NDE, SMEDAN, NYSC SAED, Bank of Industry.
- CSOs: NLC, NBA, NMA, NANS, NGOs — advocacy, election monitoring, rights protection.

## Security agencies
| Agency | Role |
|---|---|
| Army, Navy, Air Force | defence (land, sea, air); President is Commander-in-Chief |
| Police | internal security |
| DSS | intelligence |
| NSCDC | protects critical infrastructure |
| Immigration / Customs | borders; revenue and anti-smuggling |
| FRSC | road safety |
| NDLEA | drugs |
| Correctional Service | custody and rehabilitation |

## Traffic regulations
warning signs — triangles; regulatory — circles; information — rectangles; STOP — octagon; continuous line — no overtaking; seat belts and helmets are compulsory.

## Public service
civil service: permanence, anonymity, neutrality, hierarchy; Permanent Secretary (administrative head), Minister (political head).

## Environmental citizenship
proper waste disposal, tree planting, recycling; NESREA and NOSDRA; Section 20 of the Constitution.`,
          examples: `**Example 1.** *The agency that protects critical infrastructure:* **NSCDC**.

**Example 2.** *A triangular road sign is a:* **warning sign**.

**Example 3.** *The administrative head of a ministry:* **Permanent Secretary**.`,
        },
        questions: [
          ["E", "Which is a social vice?", "cultism", "patriotism", "community service", "honesty", "Cults are violent and illegal."],
          ["E", "A triangular road sign is usually a", "warning sign", "regulatory sign", "information sign", "stop sign", "Triangles warn of danger."],
          ["E", "Which agency protects critical infrastructure such as pipelines?", "NSCDC", "INEC", "NAFDAC", "NPC", "Civil Defence guards infrastructure."],
          ["M", "Civil servants remaining in office when governments change shows the feature of", "permanence", "anonymity only", "partisanship", "red tape", "The service provides continuity."],
          ["M", "Which is a cause of social vices?", "peer pressure", "good parenting", "strong values", "youth empowerment", "Friends may lead youths astray."],
          ["M", "The agency that enforces environmental standards is", "NESREA", "NSCDC", "NDE", "SMEDAN", "It enforces environmental regulations."],
          ["M", "Which programme trains corps members in entrepreneurship?", "NYSC SAED", "BVAS", "ECOMOG", "UBE", "Skills Acquisition and Entrepreneurship Development."],
          ["H", "A continuous line in the middle of the road means", "no overtaking", "overtake freely", "parking allowed", "speed up", "Crossing it is prohibited."],
          ["H", "Civil servants are expected to be", "politically neutral", "active party members", "anonymous to the point of doing nothing", "temporary workers", "They serve any government."],
          ["H", "Which measure best prevents social vices in the long term?", "value education and youth empowerment", "ignoring offenders", "encouraging get-rich-quick schemes", "weakening laws", "They address root causes."],
        ],
      },
    ],
  },
];
