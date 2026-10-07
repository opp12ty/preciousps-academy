import type { TermPlan } from "../types";

/** SS2 Government — original Precious PS content following the national senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Political parties",
        subtopics: ["Meaning and characteristics of political parties", "Types of political parties", "Functions of political parties", "Party organisation, manifesto and finance"],
        objectives: ["Define a political party and state its characteristics", "Describe the types of political parties", "State the functions of political parties", "Describe party organisation, manifesto and sources of finance"],
        lesson: {
          title: "Parties and the Struggle for Power",
          summary: "Explain what political parties are, their types, organisation and functions.",
          minutes: 40,
          notes: `## Political party
An **organised group of people who share similar political opinions, principles and interests, and who seek to gain control of government** by constitutional means — winning elections — in order to carry out their programme.

## Characteristics
- the main aim is to **win and keep political power**
- an **organised structure** — national, state, local and ward levels
- an **ideology** — a set of beliefs that guides policy
- a **manifesto** — a published programme
- a **constitution** and rules; a name, **symbol**, flag and slogan
- membership open to the public; registered members
- party discipline; recognised leaders

## Types
- **elite (cadre) parties** — small parties of notables, professionals and the wealthy, relying on quality rather than numbers
- **mass parties** — draw their strength from large numbers of ordinary members: workers, farmers, traders
- **ideological (doctrinal) parties** — built round a clear doctrine such as socialism or communism
- **broker parties** — bring together different classes and interests, rich and poor
- **charismatic (personality) parties** — formed round the personal appeal of a leader
- **religious parties** — based on a faith
- ethnic or regional parties — based on a section of the country

## Functions
1. **political education** — rallies, campaigns and manifestos enlighten the electorate
2. **recruitment and selection of leaders** — nominating and sponsoring candidates
3. **forming the government** when they win
4. **interest aggregation and articulation** — combining the demands of groups into a programme
5. providing a **link** between the government and the people
6. the **opposition** party criticises government and offers an alternative
7. **promoting national unity** — bringing together people from different areas
8. making government **accountable**; ensuring orderly change of government
9. offering voters a **choice** of programmes and candidates
10. **political stability** — channelling the struggle for power peacefully
11. social and welfare functions — scholarships, help to members

## Organisation
- the **national convention (congress)** — the supreme body; elects officers and the presidential candidate
- the **national executive committee** — runs the party between conventions
- the **national working committee** — day-to-day affairs: chairman, secretary, treasurer, publicity secretary, legal adviser
- **state**, **local government** and **ward** branches
- the **parliamentary caucus** — the party's members in the legislature
- wings — youth, women

## Party manifesto
A **document setting out the programme and policies a party promises to carry out if elected**. It tells voters what the party stands for, serves as a basis for campaigns, and is a yardstick for judging performance.

## Sources of party finance
membership dues and levies; donations from wealthy members and supporters; fund-raising; sale of forms, cards and party materials; grants from government (in some periods); investments; contributions from elected members.

## Party discipline
Members are expected to follow the party line; the **whip** enforces it in the legislature. Offenders may be suspended or expelled.

## Carpet-crossing (defection)
A legislator leaving the party on whose platform he was elected for another party. In Nigeria a member who defects loses the seat unless there is a division in his party or a merger.

## Political parties and pressure groups
| Political party | Pressure group |
|---|---|
| seeks to **control** government | seeks to **influence** government |
| contests elections | does not contest elections |
| wide programme (manifesto) | narrow, specific interests |
| open, broad membership | limited to those with the interest |
| accountable to the electorate | accountable to its members |

## Conditions for effective parties
a national outlook; internal democracy; clear ideology; honest finance; tolerance of opposition; free and fair elections.`,
          examples: `**Example 1.** Define a political party. *Answer:* An **organised group seeking to win control of government** through elections.

**Example 2.** What is a manifesto? *Answer:* A **document stating the programme a party will carry out if elected**.

**Example 3.** Give one difference between a party and a pressure group. *Answer:* A **party seeks to control government**; a **pressure group only seeks to influence it**.`,
        },
        questions: [
          ["E", "An organised group of people who seek to gain control of government through elections is a", "political party", "pressure group", "trade union", "civil service", "Its main aim is to win political power."],
          ["E", "The document that states the programme a political party intends to carry out if elected is its", "manifesto", "constitution of the state", "Hansard", "decree", "Voters use it to judge the party."],
          ["E", "The main aim of a political party is to", "win and control political power", "influence government without contesting", "conduct elections", "interpret the laws", "It contests elections to form the government."],
          ["M", "A party that draws its strength from large numbers of ordinary members such as workers and farmers is", "a mass party", "an elite party", "a charismatic party", "a religious party", "It relies on numbers rather than notables."],
          ["M", "A party formed around the personal appeal and qualities of its leader is", "a charismatic party", "a broker party", "a mass party", "an ideological party", "Its fortunes depend on the leader."],
          ["M", "The supreme organ of a political party is usually the", "national convention", "ward executive", "youth wing", "parliamentary caucus", "It elects national officers and the presidential candidate."],
          ["M", "Which of the following is a function of political parties?", "political education of the electorate", "interpretation of the constitution", "registration of voters", "auditing of public accounts", "Campaigns and rallies inform citizens."],
          ["H", "The process by which a political party combines the various demands of groups into a single programme is", "interest aggregation", "gerrymandering", "judicial review", "delegated legislation", "It is a key function of parties."],
          ["H", "A legislator who leaves the party that sponsored him to join another party is said to", "cross the carpet", "filibuster", "lobby", "prorogue the house", "It is also called defection."],
          ["H", "The function of the opposition party in a democracy is to", "criticise government policies and offer an alternative", "implement the budget", "appoint the judges", "command the armed forces", "It keeps the ruling party on its toes."],
        ],
      },
      {
        week: 2,
        title: "Party systems",
        subtopics: ["One-party system", "Two-party system", "Multi-party system", "Comparison and zero-party option"],
        objectives: ["Describe the features, merits and demerits of a one-party system", "Describe the features, merits and demerits of a two-party system", "Describe the features, merits and demerits of a multi-party system", "Compare the party systems"],
        lesson: {
          title: "How Many Parties?",
          summary: "Describe and compare one-party, two-party and multi-party systems.",
          minutes: 40,
          notes: `## Party system
The **pattern of political parties in a state** — how many exist, and how they compete for power.

## One-party system
Only **one political party is legally recognised** or allowed to hold power.
*Examples:* China (Communist Party); Cuba; Tanzania, Ghana (under the CPP from 1964), Malawi and Zambia in earlier periods.
- **de jure** one-party state — other parties are banned by law
- **de facto** one-party state — other parties are legal but one dominates completely
### Features
a single ideology; no legal opposition; party and government are closely fused; elections offer a choice only among candidates of the same party; mass media controlled; strong leader.
### Merits
- **national unity** — no divisive party rivalry
- **quick decisions**
- **stability** and continuity of policy
- **cheap** — elections cost less
- suited, its supporters claim, to rapid development and emergencies
### Demerits
- leads to **dictatorship**
- **no opposition** or alternative government
- denial of rights — speech, association
- no real choice for voters; **apathy**
- breeds inefficiency and corruption; change may come only by force

## Two-party system
**Two major parties** dominate, each able to win power alone; small parties may exist but seldom win.
*Examples:* the **USA** (Democrats and Republicans); **Britain** (Conservative and Labour, in the main); Nigeria under the 1989 constitution (SDP and NRC).
### Features
two dominant parties; one forms the government, the other the **official opposition**; power alternates.
### Merits
- **stable** government — one party usually has a clear majority
- a **strong opposition** and a ready alternative government
- **clear choice** for the voters
- clear **responsibility** — the electorate knows whom to blame
- avoids weak coalitions
- promotes national rather than sectional parties
### Demerits
- **limited choice** — only two sets of views
- may divide the country into two hostile camps
- minority opinions are not represented
- the ruling party may become dictatorial when its majority is large

## Multi-party system
**Three or more parties** compete, and often none wins an outright majority.
*Examples:* **Nigeria**, France, Italy, India, Germany, Ghana.
### Features
many parties; frequent **coalition** governments; wide range of opinions.
### Merits
- **wide choice** for voters
- **all shades of opinion** and minorities are represented
- prevents dictatorship
- more democratic; encourages participation
### Demerits
- **unstable coalition governments**
- **expensive**
- confuses voters
- parties tend to be ethnic or sectional, threatening unity
- weak, slow government; no clear responsibility
- hard to form a strong opposition

## Coalition government
A government formed by **two or more parties** when none has a majority — for example the **NPC–NCNC** coalition after Nigeria's 1959 federal election.

## Zero-party (no-party) system
Candidates stand as **individuals**, not on party platforms — proposed for some local elections in Nigeria and used in the 1987 local government polls.

## Dominant-party system
Several parties exist but **one wins persistently** — as the African National Congress did in South Africa for three decades.

## Comparison
| | One-party | Two-party | Multi-party |
|---|---|---|---|
| choice | none | limited | wide |
| stability | high (imposed) | high | often low |
| opposition | none | strong | fragmented |
| risk | dictatorship | polarisation | weak coalitions |
| cost | low | moderate | high |

## Factors that shape a party system
history; the electoral system (simple majority favours two parties; proportional representation favours many); ethnic and religious make-up; the constitution and electoral law; ideology.`,
          examples: `**Example 1.** Give two examples of two-party states. *Answer:* The **USA** and **Britain**.

**Example 2.** State one merit and one demerit of a multi-party system. *Answer:* It offers **wide choice**, but often produces **unstable coalition governments**.

**Example 3.** What is a coalition government? *Answer:* A government formed by **two or more parties** because none has a majority.`,
        },
        questions: [
          ["E", "A system in which only one political party is legally allowed to exist is", "a one-party system", "a two-party system", "a multi-party system", "a zero-party system", "There is no legal opposition."],
          ["E", "The United States of America operates", "a two-party system", "a one-party system", "a zero-party system", "a military system", "Democrats and Republicans dominate."],
          ["E", "A government formed by two or more parties because none won a majority is", "a coalition government", "a military government", "a unitary government", "a confederal government", "It is common in multi-party systems."],
          ["M", "An advantage of a two-party system is that it", "produces stable government with a strong opposition", "represents every shade of opinion", "abolishes opposition", "requires no elections", "One party usually wins a clear majority."],
          ["M", "A major demerit of a one-party system is that it", "leads to dictatorship", "produces unstable coalitions", "is very expensive", "confuses voters with many parties", "There is no alternative government."],
          ["M", "A state in which other parties are legal but one party completely dominates is", "a de facto one-party state", "a de jure one-party state", "a two-party state", "a zero-party state", "Dominance arises in fact, not by law."],
          ["M", "Nigeria's present party system is", "multi-party", "one-party", "two-party by law", "zero-party", "Many registered parties contest elections."],
          ["H", "The two parties created by government for Nigeria's aborted Third Republic were the", "SDP and NRC", "NPN and UPN", "NPC and NCNC", "PDP and APP", "They were set up in 1989."],
          ["H", "A disadvantage of the multi-party system is that", "it often results in weak and unstable coalition governments", "voters have no choice", "there is no opposition", "it leads to rule by one man", "No party may win an outright majority."],
          ["H", "Which electoral arrangement tends to encourage a multi-party system?", "proportional representation", "the simple majority system", "open ballot", "indirect election of chiefs", "Small parties win seats in proportion to their votes."],
        ],
      },
      {
        week: 3,
        title: "Pressure groups",
        subtopics: ["Meaning and characteristics of pressure groups", "Types of pressure groups", "Methods used by pressure groups", "Functions and factors of effectiveness"],
        objectives: ["Define pressure groups and state their characteristics", "Classify pressure groups with examples", "Describe the methods pressure groups use", "State their functions and the factors that make them effective"],
        lesson: {
          title: "Influencing Government",
          summary: "Explain the types, methods and functions of pressure groups.",
          minutes: 40,
          notes: `## Pressure group
An **organised group of people with common interests who seek to influence government policies and decisions in their favour**, without seeking to take over the government. Also called an **interest group**.

## Characteristics
- **common interests** among members
- seeks to **influence**, not to control, government
- does **not contest elections**
- an **organised** structure with leaders
- limited, specific aims; restricted membership
- financed by members' dues

## Types
- **economic (interest) groups** — protect the economic interests of members: the **Nigeria Labour Congress**, the Manufacturers Association of Nigeria, chambers of commerce, farmers' unions, market associations
- **professional (occupational) groups** — the **Nigerian Bar Association**, the Nigerian Medical Association, the Nigeria Union of Teachers, the Academic Staff Union of Universities
- **promotional (cause) groups** — promote a cause for the general good rather than members' own benefit: human rights groups, the Red Cross, environmental and anti-corruption groups
- **religious groups** — the Christian Association of Nigeria, the Nigerian Supreme Council for Islamic Affairs
- **educational / student groups** — the National Association of Nigerian Students
- **ethnic and cultural groups** — Afenifere, Ohanaeze Ndigbo, the Arewa Consultative Forum
- **institutional groups** — exist inside government: the civil service, the armed forces
- **anomic groups** — unorganised, spontaneous groups that arise in a crisis: rioters, demonstrators
- **associational** (formally organised) and **non-associational** (informal, kinship or status) groups

## Methods (modes of operation)
- **lobbying** — approaching legislators and officials to persuade them
- **mass media campaigns** — press releases, advertisements, social media
- **petitions** and letters; delegations to ministers
- **strikes**, work-to-rule and go-slow
- **demonstrations**, rallies and **boycotts**
- **court action** (litigation)
- **consultation** — membership of advisory committees
- supporting candidates or parties at elections
- seminars and public lectures
- in extreme cases — violence, sabotage, bribery (illegitimate)

## Functions
- **link** between government and the people
- **educate** the public and their members
- provide government with **expert information** and advice
- **check** the excesses of government and protect rights
- promote the **interests and welfare** of members
- encourage **participation** in politics
- influence **legislation**
- help to maintain stability by giving grievances an outlet
- serve as training grounds for leaders

## Factors affecting effectiveness
- **size** of membership
- **finance**
- **leadership** — quality and commitment
- **organisation** and unity
- the group's **strategic position** in the economy (oil workers, doctors)
- **public support** and sympathy
- access to decision-makers
- the **nature of the government** — democracies are more open than military regimes
- the education and enlightenment of members

## Criticisms
selfish, sectional aims; strikes disrupt the economy and cause hardship; may use bribery or violence; wealthy groups have undue influence; leaders may betray members.

## Lobbying
The practice of **directly persuading legislators or officials** to support or oppose a measure. It is legitimate when done openly by argument, but becomes corrupt when it involves bribery.

## Trade union
An association of workers formed to protect and improve their conditions of employment by **collective bargaining**. The central labour organisations in Nigeria are the NLC and the Trade Union Congress.`,
          examples: `**Example 1.** Give two examples of professional pressure groups in Nigeria. *Answer:* The **Nigerian Bar Association** and the **Nigerian Medical Association**.

**Example 2.** What is lobbying? *Answer:* **Persuading legislators or officials** to support the group's interest.

**Example 3.** State three factors that make a pressure group effective. *Answer:* **Large membership, adequate finance and good leadership**.`,
        },
        questions: [
          ["E", "An organised group that seeks to influence government policy without contesting elections is a", "pressure group", "political party", "legislature", "cabinet", "It is also called an interest group."],
          ["E", "The Nigerian Bar Association is an example of", "a professional pressure group", "an anomic group", "a political party", "an institutional group", "It is the association of lawyers."],
          ["E", "The Nigeria Labour Congress is best classified as", "an economic pressure group", "a religious group", "a promotional group", "a cultural group", "It protects the interests of workers."],
          ["M", "The method by which pressure groups persuade legislators to support their interests is", "lobbying", "filibustering", "gerrymandering", "impeachment", "Members of the group meet lawmakers directly."],
          ["M", "A group that arises spontaneously, without formal organisation, in reaction to an event is", "an anomic group", "an institutional group", "a professional group", "a promotional group", "Rioters and demonstrators are examples."],
          ["M", "A pressure group that promotes a cause for the general good rather than the benefit of its members is", "a promotional group", "an economic group", "an institutional group", "an ethnic group", "Human rights groups are examples."],
          ["M", "Which of the following is a method used by pressure groups?", "strikes and demonstrations", "passing of bills", "issuing of decrees", "sentencing of offenders", "They withdraw labour or protest publicly."],
          ["H", "The effectiveness of a pressure group depends largely on its", "finance, leadership and size of membership", "ability to form a government", "control of the courts", "power to make laws", "Well-organised, well-funded groups achieve more."],
          ["H", "Pressure groups that exist within the machinery of government, such as the armed forces, are", "institutional groups", "anomic groups", "promotional groups", "non-associational groups", "They use their position to influence policy."],
          ["H", "A criticism of pressure groups is that they", "may pursue selfish interests at the expense of the public", "provide information to government", "educate their members", "check the abuse of power", "Strikes, for example, may cause hardship to all."],
        ],
      },
      {
        week: 4,
        title: "Public opinion and the mass media",
        subtopics: ["Meaning and formation of public opinion", "Measurement of public opinion", "The mass media and their roles", "Importance and limitations of public opinion"],
        objectives: ["Explain public opinion and how it is formed", "Describe the methods of measuring public opinion", "Explain the role of the mass media in government", "State the importance and limitations of public opinion"],
        lesson: {
          title: "What the People Think",
          summary: "Explain how public opinion is formed, measured and used, and the role of the mass media.",
          minutes: 40,
          notes: `## Public opinion
The **views held by a large section of the people on an issue of public importance** at a particular time. It need not be unanimous, but it should be widely held and freely formed.

## Characteristics
it concerns a **public issue**; it is held by many; it can change; it may be informed or uninformed; it varies in intensity.

## Formation (agents)
- the **mass media** — newspapers, radio, television, the internet and social media
- **political parties** — rallies and manifestos
- **pressure groups**
- **family** and **peer groups**
- **educational institutions**
- **religious bodies**
- **opinion leaders** — respected individuals
- government — information ministries, broadcasts
- symposia, public lectures and debates
- **rumour** and gossip
- films and books

## Measurement
- **elections** — the result shows what voters want
- **referendum** — a direct vote of the people on a **specific issue**, such as a new constitution
- **plebiscite** — a vote to decide a matter of **sovereignty or political status**, such as which country a territory should join
- **opinion polls** — questioning a **sample** of the population
- **mass media** — editorials, letters, phone-in programmes
- **protests and demonstrations**
- reports of legislators from their constituencies
- pressure groups' statements
- **recall** and **initiative** in some systems
- social media reactions

### The 1961 plebiscite
The people of the British Cameroons voted on their future: **Northern Cameroons joined Nigeria**, and Southern Cameroons joined the Republic of Cameroon.

## Importance
- **guides government** in making policy
- helps government to **know the needs** and feelings of the people
- **checks** arbitrary rule — governments fear unpopularity
- makes rulers **accountable**; determines who wins elections
- promotes **political awareness** and participation
- may force a change of unpopular policy
- protects rights and freedoms

## Limitations
- **illiteracy** and ignorance — opinions may be uninformed
- **propaganda** and false information
- **censorship** — a controlled press
- poverty; indifference (apathy)
- ethnic and religious bias
- opinion is hard to measure accurately and changes quickly
- fear under authoritarian rule
- the few who own the media may manufacture opinion

## The mass media
Channels that reach large audiences: the **print media** (newspapers, magazines), the **electronic media** (radio, television) and the **new media** (the internet and social media). The press is often called the "**fourth estate of the realm**".

### Roles
- **informing** the public about government and events
- **educating** citizens — political education
- **watchdog** — exposing corruption and abuse of power
- a **link** between government and people
- forming and expressing **public opinion**
- **agenda-setting** — deciding which issues receive attention
- entertainment; promoting culture and national unity
- mobilising people for elections, census and health campaigns

### Factors limiting the media
government ownership and control; censorship and harsh laws; ownership influence; poverty and poor pay; bias and sensationalism; illiteracy; harassment of journalists.

## Freedom of the press
The right to publish news and opinion **without prior government control**, subject to laws on defamation, sedition and national security. Nigeria's Freedom of Information Act (2011) gives citizens access to public records.

## Propaganda
The **deliberate spreading of one-sided or misleading information** to influence opinion.`,
          examples: `**Example 1.** Give four agents that form public opinion. *Answer:* **The mass media, political parties, pressure groups and the family**.

**Example 2.** Distinguish a referendum from a plebiscite. *Answer:* A **referendum** decides a **specific issue** such as a constitution; a **plebiscite** decides a matter of **political status or sovereignty**.

**Example 3.** Why is the press called the fourth estate? *Answer:* Because it acts as a **watchdog** on the three organs of government.`,
        },
        questions: [
          ["E", "The views held by a large section of the people on a public issue are known as", "public opinion", "manifesto", "propaganda", "franchise", "It concerns matters of public importance."],
          ["E", "Newspapers, radio and television are collectively called", "the mass media", "pressure groups", "the electorate", "the judiciary", "They reach large audiences."],
          ["E", "The press is often described as the", "fourth estate of the realm", "third organ of government", "second chamber", "first arm of the executive", "It watches over the three organs of government."],
          ["M", "A direct vote by the people on a specific issue such as a new constitution is", "a referendum", "a by-election", "a primary election", "an opinion poll", "The electorate answers yes or no."],
          ["M", "Questioning a sample of the population to find out people's views is", "an opinion poll", "a plebiscite", "a census", "a recall", "It is a way of measuring public opinion."],
          ["M", "The deliberate spreading of one-sided information to influence people's views is", "propaganda", "lobbying", "censorship", "arbitration", "It may mislead the public."],
          ["M", "Public opinion is important to a government because it", "helps the government to know the feelings of the people", "replaces the legislature", "abolishes elections", "interprets the constitution", "It guides policy-making."],
          ["H", "In the 1961 plebiscite, the people of Northern Cameroons voted to", "join Nigeria", "join the Republic of Cameroon", "become an independent state", "remain under British rule", "Southern Cameroons joined the Republic of Cameroon."],
          ["H", "A factor that limits the reliability of public opinion in developing countries is", "illiteracy and lack of accurate information", "the existence of many newspapers", "freedom of the press", "regular elections", "Uninformed opinion is easily manipulated."],
          ["H", "The 'watchdog' role of the mass media refers to", "exposing corruption and abuse of power", "entertaining the public", "advertising goods", "printing the government budget", "The media hold office-holders to account."],
        ],
      },
      {
        week: 5,
        title: "Franchise and electoral systems",
        subtopics: ["Franchise: meaning and types", "Types of election", "Simple majority, absolute majority and proportional representation", "Other electoral devices"],
        objectives: ["Explain franchise and the limitations placed on it", "Distinguish direct from indirect elections and other types", "Describe the main electoral systems with their merits and demerits", "Explain second ballot, alternative vote and related devices"],
        lesson: {
          title: "The Right to Vote and How Votes Are Counted",
          summary: "Explain franchise and compare the main electoral systems.",
          minutes: 40,
          notes: `## Franchise (suffrage)
The **right to vote and be voted for** in an election.
### Types
- **universal adult suffrage** — all adult citizens may vote, regardless of sex, wealth or education. In Nigeria the voting age is **18**.
- **limited (restricted) franchise** — the vote is restricted on grounds such as
  - **property** or income (the Clifford Constitution required an income of £100 a year)
  - **sex** — male suffrage only
  - **education / literacy**
  - **tax payment**
  - race or religion
### Persons generally excluded
those below voting age; aliens; persons of unsound mind; prisoners serving sentences; unregistered persons; in some systems, persons convicted of electoral offences.

## Election
The **process of choosing people for public office by voting**. The body of qualified voters is the **electorate**.

### Purposes
to choose leaders; to confer legitimacy; to allow peaceful change of government; to make rulers accountable; to give citizens a part in government; to measure public opinion.

### Types of election
- **direct election** — voters choose their representatives **themselves**
- **indirect election** — voters choose **delegates (an electoral college)** who then elect the office-holder
- **general election** — held throughout the country at the same time
- **by-election** — held to fill a **vacancy** caused by death, resignation or removal
- **primary election** — held **within a party** to choose its candidates
- **run-off election** — a second election between the leading candidates
- **recall** — voters remove a representative before the end of his term

## Electoral systems
### Simple majority (plurality / first-past-the-post)
The candidate with the **highest number of votes** wins, even without more than half. Used in Britain, the USA and for Nigeria's legislative elections.
- **merits**: simple; cheap; quick results; a clear link between a member and his constituency; tends to give stable one-party governments
- **demerits**: a candidate may win on a **minority** of votes; "wasted" votes; small parties are under-represented; a party may win most seats with fewer votes

### Absolute majority
The winner must have **more than half** of the total votes cast (at least 50 % + 1). If no one does, a further ballot is held.
- **merits**: the winner has majority support and greater legitimacy
- **demerits**: costly and slow where repeated ballots are needed

### Second ballot (run-off)
If no candidate has an absolute majority, a **second election** is held, usually between the **two leading candidates**. Used in France.

### Alternative (preferential) vote
Voters **rank the candidates** in order of preference. If no one has an absolute majority of first preferences, the candidate with the fewest is eliminated and his votes are transferred according to second preferences, until one has a majority. Used in Australia.

### Proportional representation
Seats are shared among parties **in proportion to the votes** each receives, usually in multi-member constituencies.
- **list system** — voters vote for a party list; seats are given in proportion to the party's votes
- **single transferable vote** — voters rank candidates; those reaching a **quota** are elected and surplus votes are transferred
- **merits**: fair; minorities and small parties are represented; few wasted votes
- **demerits**: complicated; encourages many small parties and **unstable coalitions**; weakens the link between member and constituency; expensive

### Nigeria's presidential election
The winner needs the **highest number of votes** and **not less than one-quarter of the votes in at least two-thirds of the states** and the Federal Capital Territory — a requirement meant to ensure national spread. Otherwise a run-off is held.

## Other terms
- **constituency** — an area whose voters elect a representative
  - **single-member** and **multi-member** constituencies
- **delimitation** — dividing the country into constituencies
- **gerrymandering** — drawing constituency boundaries **to favour a party**
- **electoral college** — a body of electors who choose an office-holder, as for the US president
- **secret ballot** — voting in private; **open ballot** — voting in public, as by queuing behind a candidate
- **Option A4** — the open-ballot primary system used in Nigeria in 1992–93
- **deposit** — money lodged by a candidate, forfeited if he polls too few votes
- **unopposed return** — only one candidate is validly nominated

## Merits of the secret ballot
freedom of choice; no intimidation or victimisation; reduces bribery's effectiveness.`,
          examples: `**Example 1.** What is universal adult suffrage? *Answer:* The right of **all adult citizens** to vote, without restriction by sex, wealth or education.

**Example 2.** A candidate wins 40 % of the votes while two others get 35 % and 25 %. Under which system is he elected? *Answer:* The **simple majority** system.

**Example 3.** What is gerrymandering? *Answer:* **Drawing constituency boundaries to favour a particular party**.`,
        },
        questions: [
          ["E", "The right to vote and be voted for in an election is", "franchise", "referendum", "mandate", "lobbying", "It is also called suffrage."],
          ["E", "The body of people who are qualified to vote in an election is the", "electorate", "cabinet", "legislature", "secretariat", "They choose the representatives."],
          ["E", "The minimum voting age in Nigeria is", "18 years", "16 years", "21 years", "25 years", "It applies to all adult citizens."],
          ["M", "An election held to fill a vacancy caused by the death or resignation of a member is", "a by-election", "a general election", "a primary election", "a referendum", "It takes place in one constituency."],
          ["M", "The electoral system in which the candidate with the highest number of votes wins is the", "simple majority system", "absolute majority system", "proportional representation", "alternative vote", "It is also called first-past-the-post."],
          ["M", "An election in which voters choose delegates who then elect the office-holder is", "an indirect election", "a direct election", "a run-off", "a recall", "The delegates form an electoral college."],
          ["M", "The system that gives each party seats according to the share of votes it wins is", "proportional representation", "simple majority", "second ballot", "open ballot", "It benefits small parties."],
          ["H", "The drawing of constituency boundaries so as to favour a particular party is called", "gerrymandering", "delimitation by merit", "lobbying", "carpet-crossing", "It is an abuse of the delimitation process."],
          ["H", "To be elected President of Nigeria, a candidate must have the highest votes and at least one-quarter of the votes in", "two-thirds of the states and the Federal Capital Territory", "one-third of the states", "half of the local governments", "every state", "The rule ensures national spread."],
          ["H", "A disadvantage of the simple majority system is that", "a candidate may win with less than half of the votes cast", "it is too complicated for voters", "it always produces coalitions", "results take very long to compute", "The winner may represent a minority of voters."],
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
        title: "The electoral process and electoral commissions",
        subtopics: ["Stages of the electoral process", "The electoral commission and its functions", "Free and fair elections", "Electoral malpractices and remedies"],
        objectives: ["Describe the stages of the electoral process", "State the functions of an electoral commission", "State the conditions for free and fair elections", "Identify electoral malpractices and suggest remedies"],
        lesson: {
          title: "Conducting Elections",
          summary: "Describe how elections are organised and what makes them free and fair.",
          minutes: 40,
          notes: `## The electoral process
The **series of activities through which an election is conducted**.
### Stages
1. **delimitation** of constituencies and creation of polling units
2. **registration of political parties**
3. **registration of voters** and display of the register for claims and objections
4. **notice of election** and the timetable
5. **party primaries** and **nomination** of candidates
6. **screening** and publication of candidates' names
7. **campaigns** — rallies, manifestos, debates
8. recruitment and training of **electoral officers**; distribution of materials
9. **voting** on election day — accreditation and casting of ballots
10. **counting** of votes at the polling unit, **collation** and **declaration** of results by the returning officer
11. **election petitions** — complaints heard by tribunals
12. swearing-in of winners

## Electoral officers
- **presiding officer** — in charge of a polling unit
- **poll clerks** and assistants
- **returning officer** — declares the result for a constituency
- **collation officers**
- **electoral officer** — heads the commission's office in a local government
- **Resident Electoral Commissioner** — heads the commission in a state
- **party (polling) agents** — watch the process on behalf of candidates
- observers and security agents

## Electoral commission
The **independent body that organises and conducts elections**.
### Nigeria's commissions
- Electoral Commission of Nigeria — the 1959 election
- Federal Electoral Commission — 1964
- **FEDECO** (Federal Electoral Commission) — 1979 and 1983
- **NEC** (National Electoral Commission) — 1987–1993
- NECON — 1994–1998
- **INEC** (Independent National Electoral Commission) — since **1998**
INEC has a chairman and national commissioners, appointed by the President and confirmed by the Senate. **State Independent Electoral Commissions** conduct local government elections.

### Functions
- **conducting elections** into federal and state offices
- **registering voters** and keeping the voters' register
- **registering and monitoring political parties**, including their finances and primaries
- **delimiting constituencies**
- providing electoral **materials** and recruiting **staff**
- **voter education**
- fixing **dates** and making regulations
- **counting votes and declaring results**
- conducting referendums and recall
- prosecuting electoral offenders

### Problems
inadequate funds and late release; interference by government; poor logistics; shortage of trained staff; insecurity and violence; difficult terrain; dishonest officials; litigation.

## Free and fair elections
### Conditions
- an **independent and impartial** electoral commission
- **universal adult suffrage**
- an accurate, up-to-date **voters' register**
- **secret ballot**
- equal opportunity for all parties — free campaigns, fair access to the media
- **adequate security** without intimidation
- honest counting in the open; party agents and observers present
- an **independent judiciary** to hear petitions
- fair delimitation; enough polling units and materials
- a free press; political tolerance

## Electoral malpractices
- **rigging** — falsifying results
- **multiple voting** and impersonation; under-age voting
- **ballot-box stuffing** and snatching
- **vote buying** — bribing voters
- **thuggery** and violence; intimidation
- inflating the voters' register
- late arrival or hoarding of materials
- partisan officials and security agents
- gerrymandering

### Effects
illegitimate governments; violence and instability; apathy; costly litigation; military intervention in the past; loss of international respect.
### Remedies
an independent commission; technology — biometric accreditation and electronic transmission of results; severe punishment of offenders; political education; internal party democracy; prompt hearing of petitions; neutral security agencies.

## Election petition
A **formal complaint to an election tribunal** challenging the result. Petitions on the presidential election are heard first by the Court of Appeal, with final appeal to the Supreme Court.`,
          examples: `**Example 1.** Name Nigeria's present electoral commission. *Answer:* The **Independent National Electoral Commission (INEC)**.

**Example 2.** Give three conditions for free and fair elections. *Answer:* An **independent electoral commission, secret ballot and an accurate voters' register**.

**Example 3.** List three electoral malpractices. *Answer:* **Rigging, vote buying and ballot-box snatching**.`,
        },
        questions: [
          ["E", "The body that conducts federal and state elections in Nigeria today is", "INEC", "FEDECO", "NEC", "NECON", "It was established in 1998."],
          ["E", "The official who announces the result of an election in a constituency is the", "returning officer", "polling agent", "poll clerk", "party chairman", "He declares the winner."],
          ["E", "The falsification of election results is known as", "rigging", "lobbying", "delimitation", "nomination", "It is an electoral malpractice."],
          ["M", "The division of a country into electoral districts is called", "delimitation", "accreditation", "collation", "ratification", "It is done by the electoral commission."],
          ["M", "The electoral body that conducted Nigeria's 1979 and 1983 general elections was", "FEDECO", "INEC", "NEC", "ECN", "It was the Federal Electoral Commission."],
          ["M", "A function of an electoral commission is the", "registration of voters", "making of laws", "trial of criminal cases", "appointment of ministers", "It compiles and keeps the voters' register."],
          ["M", "The official in charge of a polling unit on election day is the", "presiding officer", "resident electoral commissioner", "returning officer", "collation officer", "He supervises voting and counting there."],
          ["H", "Local government elections in Nigeria are conducted by", "State Independent Electoral Commissions", "the National Assembly", "the Federal Civil Service Commission", "the Code of Conduct Bureau", "Each state has its own commission."],
          ["H", "A condition necessary for free and fair elections is", "an independent and impartial electoral commission", "open bribery of voters", "a single candidate", "control of the commission by the ruling party", "The umpire must not favour any side."],
          ["H", "A formal complaint challenging the result of an election is", "an election petition", "a referendum", "a recall", "a nomination paper", "It is heard by an election tribunal."],
        ],
      },
      {
        week: 2,
        title: "The civil service",
        subtopics: ["Meaning and characteristics of the civil service", "Structure and classes of the civil service", "Functions of the civil service", "Control and problems of the civil service"],
        objectives: ["Define the civil service and state its characteristics", "Describe the structure and classes of the civil service", "State the functions of the civil service", "Explain how the civil service is controlled and the problems it faces"],
        lesson: {
          title: "The Permanent Machinery of Government",
          summary: "Describe the nature, structure, functions and problems of the civil service.",
          minutes: 40,
          notes: `## Civil service
The **body of permanent, non-political officials employed in the ministries and departments** to assist the government in formulating and carrying out its policies. Its members are **civil servants**.

The **public service** is wider: it includes the civil service together with the staff of public corporations, the police, the armed forces, teachers, the judiciary and local governments.

## Characteristics
- **permanence** — it continues while governments change; security of tenure
- **neutrality** — civil servants do not take part in partisan politics and serve any government loyally
- **anonymity** — they are "seen but not heard"; the **minister** takes the credit or blame
- **impartiality** — the public is served without favour
- **expertise** — professional knowledge and experience
- **merit** — appointment and promotion by qualification and performance
- **hierarchy** — ranks and a chain of command
- **bureaucracy** — work by written rules, files and precedents

## Structure
- a **ministry** is headed politically by a **minister (or commissioner)** and administratively by the **permanent secretary**, who is the chief adviser and the **accounting officer**
- ministries are divided into **departments**, divisions, branches and sections, under directors
- the **Head of the Civil Service** co-ordinates the whole service

## Classes
- **administrative class** — the highest: permanent secretaries, directors; advise on and formulate policy
- **executive class** — carry out policy and handle routine administration
- **professional (technical) class** — specialists: doctors, engineers, lawyers, accountants
- **clerical class** — clerks, typists; keep records
- **auxiliary (manipulative / messengerial) class** — drivers, cleaners, messengers
Since the **1988 reforms**, officers are graded on levels 01–17 and grouped into directorate, professional and other cadres.

## Functions
- **advising** ministers on policy
- **formulating** policy proposals
- **implementing** government policies and programmes
- **drafting bills** and preparing answers to parliamentary questions
- preparing the **budget**
- making **rules and regulations** (delegated legislation)
- keeping **records** and providing continuity
- providing **information** to the public and collecting data
- collecting revenue; providing social services
- quasi-judicial work — settling disputes within their fields

## Civil Service Commission
An independent body responsible for the **appointment, promotion, discipline and dismissal** of civil servants, so that these are free from political interference. There are a Federal Civil Service Commission and state commissions.

## Control of the civil service
- **ministerial control** — the minister directs the ministry
- **legislative control** — questions, committees, the Public Accounts Committee, the budget
- **judicial control** — actions may be challenged in court
- the **Civil Service Commission**
- **financial control** — the Auditor-General
- the **Public Complaints Commission**; the Code of Conduct Bureau
- civil service rules (public service rules) and financial regulations
- the press and public opinion

## Problems
- **red tape** — excessive formality and delay
- **corruption** — bribery, embezzlement
- **political interference** in appointments and postings
- **tribalism, nepotism** and favouritism; the federal character principle may override merit
- poor pay and low morale
- shortage of skilled staff; inadequate equipment
- indiscipline — lateness, absenteeism
- political instability; frequent changes of policy
- over-staffing

## Civil servants and politics
A civil servant must **resign** before contesting an election.

## Relationship between ministers and civil servants
Ministers decide policy and answer to the public; civil servants advise loyally, then carry out the decision whether or not they agree.

## Reforms
Notable commissions: Gorsuch (1954), Adebo (1971), **Udoji (1974)** — which recommended a unified grading structure and "management by objectives" — and the 1988 reforms that made the minister the chief executive and accounting officer for a time.`,
          examples: `**Example 1.** State four characteristics of the civil service. *Answer:* **Permanence, neutrality, anonymity and impartiality**.

**Example 2.** Who is the administrative head of a ministry? *Answer:* The **permanent secretary**.

**Example 3.** What is red tape? *Answer:* **Excessive adherence to rules and procedures**, causing delay.`,
        },
        questions: [
          ["E", "The body of permanent officials who help government to formulate and carry out policies is the", "civil service", "legislature", "judiciary", "electoral commission", "They work in ministries and departments."],
          ["E", "The administrative head of a ministry is the", "permanent secretary", "minister", "speaker", "auditor-general", "The minister is the political head."],
          ["E", "Excessive formality and delay in the civil service is known as", "red tape", "anonymity", "neutrality", "impartiality", "It results from rigid adherence to rules."],
          ["M", "The principle that civil servants should not take part in partisan politics is", "political neutrality", "anonymity", "permanence", "hierarchy", "They serve whichever government is in power."],
          ["M", "The principle that civil servants are 'seen but not heard' and ministers take the credit or blame is", "anonymity", "neutrality", "expertise", "merit", "Officials work behind the scenes."],
          ["M", "Doctors, engineers and lawyers in the civil service belong to the", "professional class", "clerical class", "executive class", "auxiliary class", "They are specialists."],
          ["M", "The body responsible for the appointment, promotion and discipline of civil servants is the", "Civil Service Commission", "Public Complaints Commission", "National Judicial Council", "Electoral Commission", "It keeps these matters free from politics."],
          ["H", "The highest class in the civil service, which advises ministers on policy, is the", "administrative class", "executive class", "technical class", "clerical class", "It includes permanent secretaries and directors."],
          ["H", "The commission that recommended a unified grading structure for the Nigerian public service in 1974 was the", "Udoji Commission", "Willink Commission", "Raisman Commission", "Aboyade Committee", "It also proposed management by objectives."],
          ["H", "The civil service differs from the public service in that the public service", "is wider and includes public corporations and the armed forces", "consists only of ministries", "is made up of elected officials", "excludes teachers and the police", "The civil service is one part of it."],
        ],
      },
      {
        week: 3,
        title: "Public corporations",
        subtopics: ["Meaning and features of public corporations", "Reasons for establishing public corporations", "Control of public corporations", "Problems, commercialisation and privatisation"],
        objectives: ["Define public corporations and state their features", "Give the reasons for establishing public corporations", "Explain how public corporations are controlled", "Discuss their problems, commercialisation and privatisation"],
        lesson: {
          title: "Government in Business",
          summary: "Describe public corporations, how they are controlled and why many have been privatised.",
          minutes: 40,
          notes: `## Public corporation
A **business organisation established, owned and financed by the government, by an Act of Parliament (statute or decree), to provide essential services** to the public. Also called a statutory corporation or parastatal.
*Examples:* the Nigerian Railway Corporation; the Nigerian Ports Authority; the Federal Radio Corporation of Nigeria; the Nigerian Television Authority; the Federal Airports Authority of Nigeria; the Central Bank of Nigeria; state water corporations.

## Features
- **created by statute**, which sets out its functions and powers
- **owned and financed** by government
- a **legal entity** — it can sue and be sued, own property and enter contracts
- managed by a **board of directors** appointed by government
- the main aim is **service, not profit**
- staff are **public servants** but not civil servants
- often a **monopoly**
- **perpetual existence**
- accounts are audited and reported to the legislature
- day-to-day independence from the ministry, in principle

## Reasons for establishing them
- to provide **essential services** at prices people can afford — water, electricity, transport
- **huge capital** needed is beyond private investors
- to prevent **private monopoly** and exploitation
- **national security** and strategic reasons — ports, broadcasting, central banking
- to generate **revenue**
- to create **employment**
- to promote **even development** — services to unprofitable areas
- to control key sectors and reduce foreign domination
- to speed up economic development

## Organisation
- the **minister** — gives general policy directions and appoints the board
- the **board of directors** — makes policy for the corporation
- the **general manager / managing director** — runs day-to-day affairs

## Control
- **ministerial control** — the supervising minister appoints and removes board members, gives policy directives and approves major borrowing and projects
- **parliamentary (legislative) control** — the Act creating it can be amended; debates, questions and committee investigations; approval of grants; scrutiny of annual reports and accounts
- **judicial control** — the corporation can be sued for unlawful acts or breach of contract
- **financial control** — audit by government-approved auditors
- **public control** — consumers' complaints, the press, public opinion
Too much control destroys initiative; too little invites abuse.

## Differences from the civil service
| Public corporation | Civil service (ministry) |
|---|---|
| set up by a special statute | part of the executive under the constitution |
| run by a **board** | headed by a minister and permanent secretary |
| a separate legal entity | not a separate legal person |
| commercial in outlook | administrative |
| staff recruited by the corporation | staff recruited by the Civil Service Commission |
| financed by grants and its own earnings | financed from the budget |

## Problems
- **political interference** in management and appointments
- **corruption** and embezzlement
- **inefficiency** and poor service — lack of competition
- **mismanagement**; unqualified board members appointed for political reasons
- inadequate funds; dependence on subsidy
- over-staffing; bureaucracy
- tribalism and nepotism
- obsolete equipment; poor maintenance
- frequent changes of board and policy

## Commercialisation
Reorganising a public enterprise so that it **operates on commercial lines and earns profit, without a change of ownership** — government still owns it but withdraws subsidy.
- **full commercialisation** — expected to make profit and raise its own capital
- **partial commercialisation** — covers running costs, with government grants for capital projects

## Privatisation
The **transfer of ownership** of a public enterprise, wholly or partly, **to private individuals or companies**. In Nigeria it has been supervised by the Bureau of Public Enterprises.
### Reasons
to improve efficiency; to reduce the burden on government funds; to raise revenue; to encourage competition and wider share ownership.
### Criticisms
loss of jobs; higher prices; assets may be sold cheaply to a few; essential services to poor areas may suffer.`,
          examples: `**Example 1.** How is a public corporation created? *Answer:* By an **Act of Parliament** (a statute or decree).

**Example 2.** Give two reasons for setting up public corporations. *Answer:* To **provide essential services** and because they need **huge capital**.

**Example 3.** Distinguish commercialisation from privatisation. *Answer:* **Commercialisation** keeps government ownership but runs the body for profit; **privatisation** **transfers ownership** to private hands.`,
        },
        questions: [
          ["E", "A business organisation set up and owned by government by an Act of Parliament to provide essential services is", "a public corporation", "a private company", "a partnership", "a co-operative society", "It is also called a statutory corporation."],
          ["E", "A public corporation is managed by", "a board of directors", "the shareholders", "the electorate", "the Chief Justice", "The board is appointed by the government."],
          ["E", "The main aim of a public corporation is to", "provide essential services to the public", "maximise profit for shareholders", "contest elections", "make laws", "Service comes before profit."],
          ["M", "Which of the following is a public corporation in Nigeria?", "Nigerian Railway Corporation", "Nigerian Bar Association", "Nigeria Labour Congress", "Manufacturers Association of Nigeria", "It runs rail transport."],
          ["M", "The transfer of ownership of a public enterprise to private individuals or companies is", "privatisation", "commercialisation", "nationalisation", "indigenisation", "Government sells its shares."],
          ["M", "A minister controls a public corporation by", "appointing the board and giving policy directives", "auditing the accounts personally", "hearing court cases against it", "electing its staff", "This is ministerial control."],
          ["M", "One reason for establishing public corporations is that", "the capital required is too large for private investors", "government wishes to avoid providing services", "private monopolies are desirable", "profit is the only aim", "Projects such as railways need huge funds."],
          ["H", "Reorganising a public enterprise to run on profit-making lines while it remains government-owned is", "commercialisation", "privatisation", "liquidation", "nationalisation", "Ownership does not change."],
          ["H", "A public corporation differs from a government ministry in that it", "is a separate legal entity that can sue and be sued", "is headed by a permanent secretary", "is staffed by civil servants", "is financed only from the annual budget", "It is created by a special statute."],
          ["H", "Parliamentary control of public corporations is exercised through", "debates on their annual reports and accounts", "the appointment of general managers", "the hearing of cases", "strikes", "Committees may also investigate them."],
        ],
      },
      {
        week: 4,
        title: "Local government",
        subtopics: ["Meaning and purposes of local government", "Structure and functions of local governments", "Sources of local government revenue", "Problems and the 1976 reform"],
        objectives: ["Explain local government and the reasons for creating it", "Describe the structure and functions of local governments in Nigeria", "Identify the sources of local government revenue", "Discuss the problems of local government and the 1976 reform"],
        lesson: {
          title: "Government at the Grassroots",
          summary: "Describe the structure, functions, finance and problems of local government.",
          minutes: 40,
          notes: `## Local government
**Government at the grassroots level, established by law to manage the affairs of a locality** and exercise specific powers within a defined area. It is the **third tier** of government in Nigeria, which has **774 local government areas**.

## Reasons for creating local governments
- to bring **government nearer to the people**
- to provide **local services** suited to local needs
- to encourage **participation** in government
- a **training ground** for political leaders
- to **reduce the burden** on central and state governments
- to promote **even development** and mobilise local resources
- a link between the people and higher governments
- to preserve local customs and traditions

## Structure
Types found in various countries and periods:
- **single-tier (all-purpose)** — one local authority performs all local functions; adopted in Nigeria in 1976
- **multi-tier** — two or three levels, as in the county, district and local councils of Eastern and Western Nigeria in the 1950s

### Organisation of a local government in Nigeria
- the **executive arm** — the elected **chairman**, vice-chairman, **supervisory councillors** and the secretary
- the **legislative arm** — the **council** of elected **councillors**, one from each **ward**, presided over by a leader
- **departments** — administration, finance, health, works, agriculture, education — staffed by local government employees under the **Local Government Service Commission**
- the traditional council advises on custom and chieftaincy

## Functions
- construction and maintenance of **local roads**, streets, drains and parks
- provision and maintenance of **markets**, **motor parks** and slaughter houses
- **refuse collection** and sanitation; public conveniences
- **primary health care** — dispensaries, maternity centres
- **primary, adult and vocational education** (with the state)
- **registration of births, deaths and marriages**
- naming of streets and numbering of houses
- cemeteries and burial grounds
- collection of **rates**, radio and television licences
- licensing of bicycles, trucks, canoes and carts; control of outdoor advertising
- development of agriculture and natural resources (other than minerals)
- making **bye-laws**

## Sources of revenue
- **statutory allocation** from the Federation Account (and a share of state revenue)
- **rates** — tenement and property rates
- **fees and fines** — market and motor-park fees, court fines
- **licences** — bicycles, hawkers, liquor
- **grants** from federal and state governments
- **loans**
- earnings from **commercial ventures** — transport, shops
- rents on council property
- community tax and levies

## Control
- **state government** — creates them by law; the ministry for local government supervises; approves budgets and bye-laws; may suspend councils
- **legislative control** — the state house of assembly makes local government law
- **judicial control** — courts may declare actions ultra vires
- **financial control** — audit by the Auditor-General for Local Governments
- public control — elections, the press

## Problems
- **inadequate funds**; poor revenue collection; the state joint account
- **interference** by state governments — dissolution of councils and appointment of caretaker committees
- **corruption** and mismanagement
- shortage of **qualified staff**
- political instability; conflict between chairmen and councillors or traditional rulers
- illiteracy and apathy
- boundary disputes; too many unviable councils

## The 1976 Local Government Reform
- introduced a **uniform, single-tier** system throughout Nigeria
- recognised local government as the **third tier** of government
- provided for **statutory allocation** from the federal and state governments
- provided for **elected councils**
- removed traditional rulers from executive control, giving them an advisory role
- fixed a population range for each local government
The 1979 constitution guaranteed the system of democratically elected councils.

## Traditional rulers and local government
Roles: custodians of culture; advising government; settling minor disputes; mobilising people for development; maintaining peace.`,
          examples: `**Example 1.** How many local government areas has Nigeria? *Answer:* **774**.

**Example 2.** Give four functions of a local government. *Answer:* **Maintaining markets and motor parks, refuse disposal, registering births and deaths and maintaining local roads**.

**Example 3.** What did the 1976 reform introduce? *Answer:* A **uniform single-tier** local government system, recognised as the **third tier** of government.`,
        },
        questions: [
          ["E", "Government at the grassroots level is known as", "local government", "federal government", "state government", "confederal government", "It manages the affairs of a locality."],
          ["E", "The number of local government areas in Nigeria is", "774", "36", "109", "360", "They are listed in the constitution."],
          ["E", "The political head of a local government council in Nigeria is the", "chairman", "governor", "permanent secretary", "speaker", "He is elected by the people of the area."],
          ["M", "Laws made by a local government council are called", "bye-laws", "decrees", "acts", "edicts", "They apply only within the local area."],
          ["M", "A function of a local government is the", "provision and maintenance of markets and motor parks", "printing of currency", "conduct of foreign affairs", "defence of the country", "Fees from these are also a source of revenue."],
          ["M", "The largest source of revenue for most local governments in Nigeria is", "statutory allocation from the Federation Account", "tenement rates", "market fees", "loans from banks", "Internally generated revenue is small."],
          ["M", "One reason for creating local governments is to", "bring government nearer to the people", "weaken the state government", "control the armed forces", "conduct external relations", "Local needs are better known locally."],
          ["H", "The 1976 Local Government Reform in Nigeria", "introduced a uniform single-tier system as the third tier of government", "abolished elected councils", "placed councils under traditional rulers", "created a three-tier council structure", "It applied to the whole country."],
          ["H", "The body that employs, promotes and disciplines senior staff of local governments in a state is the", "Local Government Service Commission", "Federal Civil Service Commission", "National Judicial Council", "State Independent Electoral Commission", "It serves all the councils in the state."],
          ["H", "A major problem of local governments in Nigeria is", "excessive interference by state governments", "too much revenue", "an excess of qualified staff", "complete independence from all control", "Elected councils are often replaced by caretaker committees."],
        ],
      },
      {
        week: 5,
        title: "Pre-colonial political systems in Nigeria",
        subtopics: ["The Hausa–Fulani emirate system", "The Yoruba (Oyo) system", "The Igbo system", "Comparison of the three systems"],
        objectives: ["Describe the political organisation of the Hausa–Fulani emirates", "Describe the political organisation of the Oyo Empire", "Describe the political organisation of the Igbo", "Compare the three pre-colonial systems"],
        lesson: {
          title: "Government Before Colonial Rule",
          summary: "Describe how the Hausa–Fulani, Yoruba and Igbo governed themselves before colonial rule.",
          minutes: 40,
          notes: `## The Hausa–Fulani system
After the **jihad of Usman dan Fodio (1804)**, the Hausa states became **emirates** within the **Sokoto Caliphate**, with headquarters at **Sokoto** (eastern section) and **Gwandu** (western section). The system was **highly centralised** and based on **Islamic law (Sharia)**.

### Political administration
The **emir** was the political, administrative and religious head. He was chosen from the ruling houses by kingmakers and confirmed by the Sultan of Sokoto (or the Emir of Gwandu), to whom he paid tribute. He was an **authoritarian** ruler, though guided by Islamic law and his advisers.
### Officials
- **Waziri** — chief adviser (prime minister)
- **Galadima** — administered the capital
- **Madawaki** — commander of the army
- **Maaji** — treasurer
- **Sarkin Fada** — head of palace officials
- **Sarkin Dogari** — head of the police
- **Sarkin Ruwa** — in charge of rivers and fishing
- **Sarkin Pawa** — head of butchers
- **Hakimi** — district head, who supervised the **village heads (Dagaci)**
### Judicial administration
**Alkali courts** applied Sharia; the chief judge was the **Alkali**; the emir's court heard the gravest cases.
### Taxation — a well-organised system
- **zakat** — tax on property for charity
- **jangali** — cattle tax
- **kharaj** — land tax
- **jizyah** — tax paid by non-Muslims

## The Yoruba system (Old Oyo)
A **monarchy with strong checks and balances** — often called a constitutional monarchy.
- the **Alaafin** — the king; political head, believed to rule by divine right; could not be seen often in public
- the **Oyomesi** — seven hereditary **kingmakers**, led by the **Bashorun** (prime minister). They chose the Alaafin and could reject him by presenting an **empty calabash (or parrot's eggs)**, which obliged him to commit suicide
- the **Ogboni** — a society of elders and priests, headed by the **Oluwo**; it checked the Oyomesi and could approve or veto their rejection of the Alaafin
- the **Are-Ona-Kakanfo** — head of the army; by custom he lived outside the capital and had to win his wars or die
- the **Aremo** — the Alaafin's eldest son; he assisted his father but at one period had to die with him
- **Baale** — heads of towns and villages (an **Oba** in the larger towns); **Ilari** — royal messengers; **Ajele** — the Alaafin's resident agents in the provinces
### Features
power was shared; no organ was supreme; law was based on custom; provinces paid tribute.

## The Igbo system
**Decentralised, segmentary and acephalous** ("without a head") — there was no king over the people in most areas. It was **republican and democratic**, each village being largely autonomous.
### Institutions
- the **family** — headed by the **Okpara**, the eldest male, who held the **ofo**, the symbol of authority and justice
- the **council of elders (Ndichie)** — family heads; they discussed village matters
- the **village assembly (Oha-na-eze / Ama-ala)** — all adult males; decisions were reached by **consensus**
- **Ozo title holders** — wealthy, respected men who advised and helped decide
- **age grades** — carried out public works, defence, policing and enforcement of decisions
- **priests and oracles** — settled grave disputes; the **Ibini Ukpabi (Long Juju) of Arochukwu** was widely consulted
- the **Umuada** — daughters of the lineage, who settled family disputes
- masquerade and secret societies — enforced laws
Kingship existed in a few places, such as **Onitsha** (the Obi) and Nri.
### Features
no central authority; no regular taxation; leadership by age, achievement and merit rather than birth; legislative, executive and judicial functions were shared by the community.

## Comparison
| | Hausa–Fulani | Yoruba (Oyo) | Igbo |
|---|---|---|---|
| structure | highly centralised | centralised with checks | decentralised |
| head | emir — near-absolute | Alaafin — limited | no single ruler |
| law | Islamic (Sharia) | customary | customary |
| taxation | organised | tribute | none regular |
| nature | theocratic, autocratic | constitutional monarchy | republican, democratic |
| effect on indirect rule | succeeded | partly succeeded | failed |`,
          examples: `**Example 1.** Who commanded the army in the Hausa–Fulani emirate and in Oyo? *Answer:* The **Madawaki** in the emirate; the **Are-Ona-Kakanfo** in Oyo.

**Example 2.** How did the Oyomesi check the Alaafin? *Answer:* By presenting an **empty calabash**, which required him to commit suicide.

**Example 3.** Why is the Igbo system called acephalous? *Answer:* Because it had **no central ruler** — authority was shared among elders, title holders, age grades and the assembly.`,
        },
        questions: [
          ["E", "The head of an emirate in the pre-colonial Hausa–Fulani system was the", "emir", "Alaafin", "Okpara", "Bashorun", "He was the political and religious leader."],
          ["E", "The title of the king of the Old Oyo Empire was the", "Alaafin", "Waziri", "Obi", "Galadima", "He ruled with the Oyomesi."],
          ["E", "The pre-colonial Igbo political system is best described as", "decentralised and republican", "highly centralised", "a theocratic monarchy", "feudal", "There was no single ruler."],
          ["M", "The commander of the army in the Hausa–Fulani emirate was the", "Madawaki", "Maaji", "Alkali", "Sarkin Fada", "The Maaji was the treasurer."],
          ["M", "The seven kingmakers of the Old Oyo Empire were known as the", "Oyomesi", "Ogboni", "Ilari", "Baale", "They were led by the Bashorun."],
          ["M", "The cattle tax collected in the Hausa–Fulani emirates was called", "jangali", "zakat", "kharaj", "jizyah", "It was paid by cattle owners."],
          ["M", "In Igbo society, public works and the enforcement of decisions were carried out by the", "age grades", "Oyomesi", "Alkali", "Hakimi", "They also defended the village."],
          ["H", "In the Old Oyo Empire, the body that checked the powers of the Oyomesi was the", "Ogboni society", "Ilari", "Aremo", "Baale", "It was headed by the Oluwo."],
          ["H", "The symbol of authority held by the head of an Igbo family was the", "ofo", "mace", "staff of the emir", "empty calabash", "The Okpara held it."],
          ["H", "The Hausa–Fulani system was best suited to indirect rule because it", "was centralised with an organised system of taxation and courts", "had no rulers", "was democratic and republican", "rejected all forms of tribute", "The British simply ruled through the emirs."],
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
        title: "British colonial administration in Nigeria",
        subtopics: ["Establishment of British rule and the amalgamation", "Crown colony and protectorate", "The indirect rule system", "Indirect rule in the North, West and East"],
        objectives: ["Outline how British rule was established in Nigeria", "Distinguish a crown colony from a protectorate", "Explain indirect rule and the reasons for adopting it", "Account for its success in the North and failure in the East"],
        lesson: {
          title: "Indirect Rule",
          summary: "Describe British colonial administration in Nigeria and the working of indirect rule.",
          minutes: 40,
          notes: `## Establishment of British rule
- **1861** — Lagos was annexed as a **crown colony**
- **1885** — the Oil Rivers Protectorate was proclaimed after the Berlin Conference
- **1886** — the Royal Niger Company received a charter to administer the Niger territories
- **1900** — the charter was revoked; the **Protectorates of Northern and Southern Nigeria** were proclaimed
- **1906** — Lagos colony was merged with the Southern Protectorate
- **1914** — **Sir Frederick (Lord) Lugard amalgamated** the Northern and Southern Protectorates; he became the first Governor-General

### Reasons for the amalgamation
economic — the North's deficit could be met from the South's surplus; administrative convenience; a unified railway and customs system; access to the sea for the North.

## Crown colony and protectorate
| Crown colony | Protectorate |
|---|---|
| territory **annexed** and owned by the British Crown | territory under British **protection**, not formally annexed |
| ruled directly by a governor | ruled largely through local rulers |
| inhabitants were **British subjects** | inhabitants were **British protected persons** |
| English law applied | customary law largely applied |
| *example:* Lagos | *example:* the Northern and Southern Protectorates |

### Structure of colonial administration
the **Secretary of State for the Colonies** in London → the **Governor** (with executive and legislative councils) → **Lieutenant-Governors / Chief Commissioners** → **Residents** in the provinces → **District Officers** → native authorities.

## Indirect rule
A system in which the British **governed the people through their own traditional rulers and institutions**, under the supervision of British officials. It was introduced by **Lord Lugard**, first in Northern Nigeria (1900–1906).

### Reasons for adopting it
- **shortage of British staff**
- **lack of funds** — it was cheap
- the **large size** of the country and poor communications
- the existing **traditional system**, especially in the North, was well organised
- **language barriers**
- its earlier success in Uganda and India
- to preserve native customs and reduce resistance

### Features
- **traditional rulers** as heads of **native authorities**
- **native courts** applying customary law
- **native treasuries** — a share of taxes kept for local use
- British **Residents and District Officers** advised and supervised
- customs "repugnant to natural justice" were abolished

## In the North — it succeeded
- the emirate system was **highly centralised**
- the emirs enjoyed **obedience** and authority
- an organised **taxation** system already existed
- **Alkali courts** and Islamic law
- the people were used to authority; few educated critics

## In the West — partial success
- the **obas were not absolute** — their powers were checked by chiefs; raising their powers upset the balance
- no regular system of direct taxation — hence disturbances such as the Iseyin–Okeiho rising (1916) and the Egba (Adubi) rising (1918)
- **educated elites** opposed it
- Christianity and Western education had spread

## In the East — it failed
- there were **no traditional rulers** with wide authority; society was decentralised
- the British created **warrant chiefs**, who had no traditional legitimacy and became corrupt and oppressive
- **no tradition of taxation** — direct taxation led to the **Aba Women's Riot of 1929**
- republican, egalitarian values and the influence of the educated

## Merits of indirect rule
cheap; preserved traditional institutions; reduced friction; trained rulers in modern local administration; laid the basis of local government.

## Demerits
- it **excluded the educated elite**
- it strengthened chiefs beyond tradition and made some autocratic
- it promoted **sectionalism** and slowed national unity
- it retarded development, especially Western education in the North
- warrant chiefs were alien impositions
- rulers became agents of the colonial government

## Direct and indirect rule
Under **direct rule** European officials administered the people themselves, as in French territories and the crown colony of Lagos.`,
          examples: `**Example 1.** Who introduced indirect rule in Nigeria? *Answer:* **Lord Lugard**.

**Example 2.** Give two reasons for adopting indirect rule. *Answer:* **Shortage of British personnel** and **lack of funds**.

**Example 3.** Why did indirect rule fail in Eastern Nigeria? *Answer:* There were **no powerful traditional rulers**, so **warrant chiefs** were imposed; and there was no tradition of taxation.`,
        },
        questions: [
          ["E", "The system by which the British governed Nigerians through their traditional rulers was", "indirect rule", "assimilation", "direct rule", "association", "British officials supervised the rulers."],
          ["E", "Indirect rule was introduced in Nigeria by", "Lord Lugard", "Sir Hugh Clifford", "Sir Arthur Richards", "Sir John Macpherson", "He first applied it in the North."],
          ["E", "The Northern and Southern Protectorates of Nigeria were amalgamated in", "1914", "1900", "1861", "1922", "Lugard became Governor-General."],
          ["M", "Indirect rule succeeded most in Northern Nigeria because", "the emirate system was centralised and the emirs were obeyed", "there were many educated elites", "there were no rulers", "the people had no system of taxation", "Courts and taxes were already organised."],
          ["M", "The chiefs appointed by the British in Eastern Nigeria to operate indirect rule were called", "warrant chiefs", "emirs", "obas", "residents", "They had no traditional legitimacy."],
          ["M", "The Aba Women's Riot of 1929 was caused mainly by", "the fear of taxation of women", "the creation of regions", "the amalgamation", "a ban on political parties", "It showed the failure of indirect rule in the East."],
          ["M", "A territory annexed and owned by the British Crown, whose people were British subjects, was", "a crown colony", "a protectorate", "a trust territory", "a dominion", "Lagos was an example."],
          ["H", "A reason for the adoption of indirect rule was the", "shortage of British personnel and funds", "desire to train Nigerians for independence", "wish to abolish traditional rulers", "large number of educated Nigerians", "It was a cheap way to govern a large territory."],
          ["H", "A major criticism of indirect rule is that it", "excluded the educated elite from administration", "was too costly", "abolished traditional institutions", "introduced universal suffrage", "Educated Nigerians had no role in the native authorities."],
          ["H", "Indirect rule was only partially successful in Western Nigeria because", "the obas were not absolute rulers and educated elites opposed it", "there were no obas", "the people were Muslims", "taxes were already well organised", "Yoruba kings were checked by their chiefs."],
        ],
      },
      {
        week: 2,
        title: "French colonial administration",
        subtopics: ["The policy of assimilation", "The policy of association", "Structure of French colonial administration", "Comparison of British and French policies"],
        objectives: ["Explain the French policy of assimilation and why it failed", "Explain the policy of association", "Describe the structure of French administration in West Africa", "Compare British and French colonial policies"],
        lesson: {
          title: "Assimilation and Association",
          summary: "Describe French colonial policy in West Africa and compare it with British policy.",
          minutes: 40,
          notes: `## French West Africa
The French governed their West African territories — Senegal, Guinea, Ivory Coast, Dahomey (Benin), French Sudan (Mali), Upper Volta (Burkina Faso), Niger and Mauritania — as a **federation** with its capital at **Dakar**.

## Assimilation
A policy aimed at **turning Africans into Frenchmen** — replacing African culture with French language, law, religion and civilisation, and treating the colonies as part of France ("overseas France").

### Features
- colonies were regarded as **extensions of France**
- **French language**, education and culture were imposed
- assimilated Africans became **French citizens** with the rights of Frenchmen
- citizens could elect **deputies to the French National Assembly** in Paris
- French law replaced customary law for citizens
- traditional rulers were disregarded

### The four communes
Full assimilation was applied only in the four communes of **Senegal — Dakar, Gorée, Rufisque and Saint-Louis** — whose inhabitants were citizens. **Blaise Diagne** became the first African deputy in 1914.

### Citizens and subjects
- **citizens (citoyens)** — the assimilated few, enjoying full rights
- **subjects (sujets)** — the great majority, without political rights and under harsh controls:
  - the ***indigénat*** — a code allowing officials to punish subjects summarily, without trial
  - **forced labour** (*corvée*) and compulsory military service
  - head tax

### Conditions for citizenship
French education and fluency; monogamy and giving up customary law; military service; employment in the French service; good character.

### Why assimilation failed
- it was **too expensive** to educate and assimilate millions
- Africans were **attached to their own cultures** and religions, especially Islam
- French people feared being outnumbered by African citizens in parliament
- French settlers and traders opposed equal rights
- the conditions were too difficult for most Africans
- nationalists and scholars criticised its contempt for African culture

## Association
Adopted from the early twentieth century, it **recognised African institutions and cultures**, allowing Africans to develop along their own lines while associated with France. Chiefs were used as agents — but appointed and controlled by French officials, not respected as independent rulers. In practice France's interests remained supreme, and forced labour and the *indigénat* continued until 1946.

## Structure of administration
A **highly centralised** hierarchy:
- the **Minister of Colonies** in Paris
- the **Governor-General** at Dakar
- a **Lieutenant-Governor** in each colony
- the **Commandant de Cercle** — in charge of a province (*cercle*)
- the **Chef de Subdivision**
- **chiefs** — *chefs de canton* and village chiefs — who collected taxes and recruited labour
Laws were made in Paris and by decree; there were no colonial legislatures of the British kind.

## Later reforms
- **1944** — the **Brazzaville Conference** promised reforms
- **1946** — the Fourth Republic's constitution created the **French Union**; forced labour and the *indigénat* were abolished; all became citizens
- **1956** — the ***Loi Cadre*** gave each territory its own elected government with internal autonomy
- **1958** — General **de Gaulle's referendum**: territories chose between membership of the **French Community** and immediate independence. Only **Guinea**, under **Sékou Touré**, voted "No" and became independent at once
- **1960** — most of the other territories became independent

## British and French policies compared
| British | French |
|---|---|
| **indirect rule** through traditional rulers | **direct rule**; chiefs were mere agents |
| colonies treated as separate entities to be prepared for self-government | colonies treated as **part of France** |
| preserved native institutions and law | sought to replace them with French culture |
| **decentralised** — each colony had its own governor and councils | **highly centralised** federation ruled from Dakar and Paris |
| Africans were subjects or protected persons | division into **citizens and subjects** |
| no representation in the British Parliament | deputies sat in the French parliament |
| colonial legislative councils | laws made in Paris |
| gradual constitutional advance | independence came suddenly (1958–60) |

## Effects of French policy
A small French-educated elite closely tied to France; continuing economic, military and cultural links after independence; French as the official language.`,
          examples: `**Example 1.** What was the policy of assimilation? *Answer:* A French policy of **turning Africans into Frenchmen** in language, culture and law.

**Example 2.** Name the four communes of Senegal. *Answer:* **Dakar, Gorée, Rufisque and Saint-Louis**.

**Example 3.** Which territory voted "No" in 1958? *Answer:* **Guinea**, led by **Sékou Touré**.`,
        },
        questions: [
          ["E", "The French colonial policy that aimed at turning Africans into Frenchmen was", "assimilation", "indirect rule", "paternalism", "apartheid", "French culture replaced African culture."],
          ["E", "The capital of the federation of French West Africa was", "Dakar", "Abidjan", "Conakry", "Bamako", "The Governor-General resided there."],
          ["E", "The French system of colonial administration was", "highly centralised", "decentralised", "based on indirect rule", "confederal", "Decisions came from Paris and Dakar."],
          ["M", "The policy of assimilation was fully applied only in the four communes of", "Senegal", "Guinea", "Ivory Coast", "Dahomey", "Their inhabitants were French citizens."],
          ["M", "The code under which French officials could punish African subjects without trial was the", "indigénat", "loi cadre", "corvée", "cercle", "It was abolished in 1946."],
          ["M", "The French policy that replaced assimilation and recognised African institutions was", "association", "indirect rule", "integration", "federation", "Africans were to develop along their own lines."],
          ["M", "One reason why the policy of assimilation failed was that", "it was too expensive and Africans valued their own cultures", "Africans all became French citizens", "France had no colonies in Africa", "it was replaced by indirect rule in Senegal", "Few could meet the conditions."],
          ["H", "The only French West African territory that voted 'No' in the 1958 referendum was", "Guinea", "Senegal", "Niger", "Mali", "It became independent at once under Sékou Touré."],
          ["H", "The 1956 reform that gave French African territories internal self-government was the", "Loi Cadre", "Brazzaville Declaration", "Statute of Westminster", "Treaty of Lagos", "Each territory got its own elected government."],
          ["H", "A difference between British and French colonial policies is that the French", "treated their colonies as part of France", "ruled through independent traditional rulers", "set up legislative councils in each colony", "discouraged the use of their language", "Citizens even elected deputies to the parliament in Paris."],
        ],
      },
      {
        week: 3,
        title: "Nationalism in Nigeria",
        subtopics: ["Meaning and phases of nationalism", "Factors that promoted nationalism", "Nationalist leaders and movements", "Effects of nationalism"],
        objectives: ["Explain nationalism and its phases in Nigeria", "Identify the internal and external factors that promoted nationalism", "Describe the roles of nationalist leaders, parties and the press", "State the effects of nationalist activities"],
        lesson: {
          title: "The Struggle for Independence",
          summary: "Explain the growth of nationalism in Nigeria and the roles of its leaders.",
          minutes: 40,
          notes: `## Nationalism
The **feeling of national consciousness and love of one's country that leads people to struggle for freedom from foreign rule** and for self-government.

## Phases in Nigeria
- **early resistance** — traditional rulers who opposed British conquest: King **Jaja of Opobo**, Oba **Ovonramwen** of Benin, Nana of Itsekiri, Sultan Attahiru of Sokoto
- **proto-nationalism (to the 1930s)** — educated Africans asked for reforms and a greater share in government, not yet independence
- **militant nationalism (after 1945)** — mass movements demanding self-government

## Factors that promoted nationalism
### Internal
- **economic exploitation** — foreign firms controlled trade; low prices for produce
- **racial discrimination** — in the civil service, hospitals and residential areas
- **exclusion of educated Nigerians** from government under indirect rule
- **Western education** — produced an articulate elite
- the **press** — criticised colonial rule
- **political parties** and constitutional changes (the elective principle of 1922)
- the **church** — African independent churches; mission-educated leaders
- **trade unions** — the 1945 general strike
- unpopular measures — taxation, land policies
- **ex-servicemen** returning from the Second World War
### External
- the **Second World War (1939–45)** — it destroyed the myth of white superiority
- the **Atlantic Charter (1941)** — affirmed the right of all peoples to choose their government
- the independence of **India (1947)** and of **Ghana (1957)**
- the **United Nations** Charter and its support for self-determination
- **Pan-Africanism** — Marcus Garvey, W. E. B. Du Bois; the Manchester Congress (1945)
- anti-colonial pressure from the USA and the Soviet Union
- the **West African Students' Union**

## Movements and parties
- **National Congress of British West Africa (1920)** — founded by **J. E. Casely Hayford** of the Gold Coast; it demanded elected representation, a West African university and an end to discrimination
- **Nigerian National Democratic Party (1923)** — founded by **Herbert Macaulay**, the "father of Nigerian nationalism"; Nigeria's first political party; it won the Lagos seats
- **West African Students' Union (1925)** — founded in London by **Ladipo Solanke**
- **Lagos Youth Movement (1934)**, renamed the **Nigerian Youth Movement (1936)** — the first party with a national outlook; leaders included Ernest Ikoli, H. O. Davies, Samuel Akinsanya, Nnamdi Azikiwe and Obafemi Awolowo
- **National Council of Nigeria and the Cameroons (1944)** — **Herbert Macaulay** (president) and **Nnamdi Azikiwe** (secretary)
- **Action Group (1951)** — **Obafemi Awolowo**; it grew out of the Egbe Omo Oduduwa
- **Northern People's Congress (1951)** — **Ahmadu Bello**, the Sardauna of Sokoto, and **Abubakar Tafawa Balewa**; it grew out of the Jam'iyyar Mutanen Arewa
- **Northern Elements Progressive Union (1950)** — **Aminu Kano**
- the **Zikist Movement** (1946) — a militant youth wing
- **United Middle Belt Congress** — **Joseph Tarka**

## The press
The *Lagos Weekly Record*, the *Lagos Daily News* (Macaulay), the ***West African Pilot*** (Azikiwe, 1937) and the *Daily Service* educated the public and attacked colonial policies.

## Key events
- **1945** — the general strike led by **Michael Imoudu**
- **1949** — the shooting of striking coal miners at **Enugu (Iva Valley)**
- **1953** — **Anthony Enahoro's motion** for self-government in 1956; the northern members opposed the date; the **Kano riots** followed
- **1957** — self-government for the Western and Eastern Regions
- **1959** — self-government for the Northern Region; the federal election
- **1 October 1960** — **independence**

## Methods of the nationalists
newspapers; petitions and delegations to London; political parties and rallies; strikes and boycotts; constitutional conferences.

## Effects
- constitutional reforms — 1946, 1951, 1954
- formation of political parties; political awareness
- Nigerianisation of the civil service
- expansion of education
- **independence** in 1960

## Problems
ethnic and regional rivalry among the parties; personality clashes; differences over the pace of independence; colonial repression — bans and imprisonment.`,
          examples: `**Example 1.** Who is regarded as the father of Nigerian nationalism? *Answer:* **Herbert Macaulay**.

**Example 2.** Give two external factors that promoted nationalism. *Answer:* The **Second World War** and the **Atlantic Charter**.

**Example 3.** Who moved the motion for self-government in 1953? *Answer:* **Anthony Enahoro**.`,
        },
        questions: [
          ["E", "The feeling of national consciousness that leads people to struggle against foreign rule is", "nationalism", "federalism", "feudalism", "colonialism", "Its goal is self-government."],
          ["E", "The 'father of Nigerian nationalism' is", "Herbert Macaulay", "Nnamdi Azikiwe", "Obafemi Awolowo", "Ahmadu Bello", "He founded the NNDP in 1923."],
          ["E", "Nigeria attained independence on", "1 October 1960", "1 October 1963", "29 May 1999", "1 January 1914", "This ended British colonial rule."],
          ["M", "The first political party in Nigeria was the", "Nigerian National Democratic Party", "Nigerian Youth Movement", "Action Group", "Northern People's Congress", "It was formed in 1923."],
          ["M", "The Action Group was led by", "Obafemi Awolowo", "Nnamdi Azikiwe", "Aminu Kano", "Tafawa Balewa", "It was formed in 1951."],
          ["M", "The newspaper founded by Nnamdi Azikiwe in 1937 to promote nationalism was the", "West African Pilot", "Daily Times", "Lagos Weekly Record", "Daily Service", "It attacked colonial policies."],
          ["M", "The motion for self-government for Nigeria in 1956 was moved in 1953 by", "Anthony Enahoro", "Herbert Macaulay", "Ahmadu Bello", "Michael Imoudu", "Northern members opposed the date."],
          ["H", "The National Congress of British West Africa was founded in 1920 by", "J. E. Casely Hayford", "Ladipo Solanke", "Marcus Garvey", "Kwame Nkrumah", "He was a Gold Coast lawyer."],
          ["H", "The Atlantic Charter of 1941 encouraged nationalism because it", "affirmed the right of all peoples to choose their own government", "created the United Nations Security Council", "ended the Second World War", "granted independence to India", "Nationalists applied the principle to the colonies."],
          ["H", "The first nationalist organisation in Nigeria with a truly national outlook was the", "Nigerian Youth Movement", "Egbe Omo Oduduwa", "Jam'iyyar Mutanen Arewa", "Ibo State Union", "Its members came from different parts of the country."],
        ],
      },
      {
        week: 4,
        title: "Constitutional development: the Clifford and Richards constitutions",
        subtopics: ["The Nigerian Council of 1914", "The Clifford Constitution of 1922", "The Richards Constitution of 1946", "Merits and demerits of each"],
        objectives: ["Describe the Nigerian Council of 1914", "State the features, merits and demerits of the Clifford Constitution", "State the features, merits and demerits of the Richards Constitution", "Compare the two constitutions"],
        lesson: {
          title: "Early Colonial Constitutions",
          summary: "Describe the Clifford (1922) and Richards (1946) constitutions and assess them.",
          minutes: 40,
          notes: `## The Nigerian Council (1914)
Set up by **Lord Lugard** after the amalgamation. It had **36 members** — officials and nominated members, including six traditional rulers. It was purely **advisory**: it had no law-making or financial powers, met rarely and was poorly attended. Alongside it a small Legislative Council made laws for the Lagos colony only.

## The Clifford Constitution (1922)
Introduced by Governor **Sir Hugh Clifford**, partly in response to the demands of the National Congress of British West Africa.

### Features
- a **Legislative Council of 46 members**: 27 officials and 19 unofficial members
- of the unofficial members, **four were elected** — **three for Lagos** and **one for Calabar** — the rest nominated
- the **elective principle** was introduced for the first time in British West Africa
- the franchise was limited to **adult males** with a gross income of **£100 a year** and twelve months' residence
- the council legislated for the **colony and the Southern Provinces** only
- the **North** was governed by the **Governor's proclamations**
- an **Executive Council** made up entirely of **Europeans**
- the Governor had veto and reserved powers

### Merits
- it introduced the **elective principle**
- it led to the formation of **political parties** — the NNDP (1923) — and newspapers
- it was the first legislative council for the South as a whole
- it aroused political consciousness

### Demerits
- an **official (European) majority**
- very **limited franchise** — only Lagos and Calabar, and only wealthy men
- the **North was excluded** from the council — isolating North from South
- no Nigerian in the Executive Council
- the Governor's powers were excessive

## The Richards Constitution (1946)
Introduced by Governor **Sir Arthur Richards**, based on proposals of his predecessor Sir Bernard Bourdillon; it came into effect on **1 January 1947**.

### Aims
to promote the **unity** of Nigeria; to provide for the **diversity** of its peoples; to give Africans greater **participation** in their affairs.

### Features
- it introduced **regionalism** — three regions: **North, West and East**
- a **regional House of Assembly** in each region, and a **House of Chiefs** in the North — these were **advisory** bodies that discussed matters and served as electoral colleges
- a **central Legislative Council** for the **whole country** — for the first time the North was represented
- an **unofficial majority** in the Legislative Council — 28 unofficial against 16 official members
- members were chosen mainly by **indirect election** through the native authorities and regional houses
- the four elected seats (Lagos and Calabar) were retained; the income qualification was reduced to £50
- the Executive Council remained dominated by officials

### Merits
- it brought **North and South together** in one legislature
- an **unofficial majority**
- it laid the **foundation of federalism** through regional councils
- wider participation; a link between native authorities and the legislature

### Demerits
- it was **imposed without consulting** Nigerians
- regionalism encouraged **ethnic and regional politics**
- regional houses had **no legislative powers**
- the elective principle was not extended; most members were nominated or indirectly chosen — many were chiefs
- limited franchise remained
- the Governor kept his veto; the Executive Council was unrepresentative
- the "obnoxious ordinances" on land and chiefs passed with it provoked protest — the **NCNC delegation to London in 1947**

## Comparison
| | Clifford 1922 | Richards 1946 |
|---|---|---|
| Legislative Council | South only | the whole country |
| majority | official | unofficial |
| regions | none | three, with regional councils |
| elected members | 4 | 4 |
| consultation | none | none |`,
          examples: `**Example 1.** What major principle did the Clifford Constitution introduce? *Answer:* The **elective principle**.

**Example 2.** Which constitution introduced regionalism? *Answer:* The **Richards Constitution of 1946**.

**Example 3.** State one criticism common to both constitutions. *Answer:* Both were **imposed without consulting Nigerians**, and the franchise was very limited.`,
        },
        questions: [
          ["E", "The elective principle was first introduced in Nigeria by the", "Clifford Constitution of 1922", "Richards Constitution of 1946", "Macpherson Constitution of 1951", "Lyttleton Constitution of 1954", "Four members were elected."],
          ["E", "Regionalism was introduced in Nigeria by the", "Richards Constitution", "Clifford Constitution", "Independence Constitution", "Republican Constitution", "Three regions were recognised."],
          ["E", "Under the Clifford Constitution, the elected members represented", "Lagos and Calabar", "Kano and Kaduna", "Ibadan and Enugu", "Sokoto and Benin", "Lagos had three seats and Calabar one."],
          ["M", "Under the Clifford Constitution, laws for the Northern Provinces were made by", "the Governor's proclamation", "the Legislative Council", "the emirs' assembly", "the House of Chiefs", "The council legislated only for the colony and the South."],
          ["M", "The Nigerian Council of 1914 was", "a purely advisory body", "a law-making body for the whole country", "an elected parliament", "a court of appeal", "It had no legislative or financial powers."],
          ["M", "The first constitution to bring the North and South together in one legislature was the", "Richards Constitution", "Clifford Constitution", "Lugard Constitution", "Bourdillon Constitution", "The Legislative Council now covered the whole country."],
          ["M", "The income qualification for voters under the Clifford Constitution was", "£100 a year", "£50 a year", "£10 a year", "£500 a year", "Only adult males could vote."],
          ["H", "A major criticism of the Richards Constitution was that", "it was imposed without consulting Nigerians", "it had an official majority", "it excluded the North", "it abolished the regions", "Nationalists sent a protest delegation to London."],
          ["H", "The regional Houses of Assembly created in 1946", "were only advisory and had no legislative powers", "could make laws on all subjects", "elected the Governor", "replaced the native authorities", "They discussed matters and selected members for the centre."],
          ["H", "An achievement of the Clifford Constitution was that it", "stimulated the formation of political parties", "created an unofficial majority", "gave Nigerians seats in the Executive Council", "introduced federalism", "The NNDP was formed in 1923 to contest the Lagos seats."],
        ],
      },
      {
        week: 5,
        title: "Constitutional development: Macpherson, Lyttleton and independence",
        subtopics: ["The Macpherson Constitution of 1951", "The Lyttleton Constitution of 1954", "The constitutional conferences of 1957 and 1958", "The Independence Constitution of 1960"],
        objectives: ["State the features, merits and demerits of the Macpherson Constitution", "State the features, merits and demerits of the Lyttleton Constitution", "Outline the decisions of the 1957 and 1958 conferences", "Describe the features of the 1960 Independence Constitution"],
        lesson: {
          title: "From Macpherson to Independence",
          summary: "Trace Nigeria's constitutional development from 1951 to independence in 1960.",
          minutes: 40,
          notes: `## The Macpherson Constitution (1951)
Introduced by Governor **Sir John Macpherson** after **wide consultation** — at village, district, provincial and regional levels, ending in the **Ibadan General Conference of 1950**.

### Features
- a central **House of Representatives** of 148 members, most chosen by the regional legislatures
- a **Council of Ministers** — the Governor, 6 officials and **12 Nigerian ministers** (four from each region)
- **regional legislatures with power to make laws** on specified subjects, subject to central approval:
  - a House of Assembly in each region
  - a House of Chiefs in the **North and the West** (bicameral)
- **regional executive councils**
- the regions were headed by **Lieutenant-Governors**
- a **quasi-federal** arrangement — the centre remained supreme
- revenue allocation on the Hicks-Phillipson principles

### Merits
- Nigerians were **consulted** for the first time
- Nigerian **ministers** were appointed
- regional legislatures gained **law-making powers**
- more elected members; it stimulated party activity — the AG and NPC were formed in 1951

### Demerits
- ministers had **no real control** over departments; there was **no Prime Minister or premiers**
- no **collective responsibility** — ministers owed loyalty to their regions
- the centre could veto regional laws
- it encouraged **regional parties** and ethnic politics
- indirect elections through electoral colleges

### Breakdown
- the **Eastern regional crisis (1953)** within the NCNC
- the **self-government motion (1953)** by Anthony Enahoro and the walk-out it caused
- the **Kano riots (May 1953)**
- the North's "eight-point programme" threatening a looser union
These led to the **London (1953)** and **Lagos (1954)** constitutional conferences.

## The Lyttleton Constitution (1954)
Named after **Oliver Lyttleton**, the Colonial Secretary.

### Features
- Nigeria became a **federation** of three regions, with **Lagos as Federal Territory**
- powers were divided into **exclusive, concurrent and residual** lists
- the regions were headed by **Governors**; the centre by a **Governor-General**
- the office of **Premier** was created in each region
- **direct elections** to the House of Representatives (indirect in the North)
- a **Speaker** presided over the House
- the **civil service, the judiciary and marketing boards were regionalised**
- a Federal Supreme Court
- no Prime Minister yet; three officials still sat in the Council of Ministers
- Southern Cameroons became a quasi-federal territory

### Merits
true **federalism**; regional autonomy; premiers and ministers with real responsibility for departments; direct elections; a step to self-government.
### Demerits
no Prime Minister; regions became too powerful, deepening **regionalism**; minorities' fears were not met; uneven size of regions — the North was larger than the others combined.

## The 1957 London Conference
- **self-government for the Western and Eastern Regions (1957)**; the North was to follow in 1959
- the office of **Prime Minister** was created — **Alhaji Abubakar Tafawa Balewa** became the first, in 1957
- a **bicameral** federal legislature — a Senate was to be added
- a House of Chiefs for the East
- the **Willink Commission** was appointed to examine the fears of **minorities**; it recommended against new states but proposed a **bill of rights**

## The 1958 Conference
- the **North became self-governing (15 March 1959)**
- fundamental **human rights** were to be entrenched
- the date of independence was fixed — **1 October 1960**
- procedures for creating regions and amending the constitution

## The 1959 federal election
No party won a majority: the **NPC and NCNC** formed a **coalition**; the **Action Group** became the opposition.

## The Independence Constitution (1960)
### Features
- a **parliamentary (Westminster)** system
- the **Queen of England** was head of state, represented by a **Governor-General** — **Dr Nnamdi Azikiwe** became the first Nigerian Governor-General in November 1960
- the **Prime Minister** was head of government
- a **federal** structure with three regions
- a **bicameral** parliament — Senate and House of Representatives
- **fundamental human rights** were entrenched
- the **Judicial Committee of the Privy Council** in London was the final court of appeal
- a Judicial Service Commission
- provisions on citizenship and emergency powers

### Merits
it gave Nigeria political independence; entrenched rights; preserved federalism and parliamentary democracy.
### Demerits
the head of state was a foreign monarch; final appeals went abroad; the Senate was weak; the federal emergency powers could be abused; the imbalance between regions remained.`,
          examples: `**Example 1.** Which constitution was made after wide consultation with Nigerians? *Answer:* The **Macpherson Constitution of 1951**.

**Example 2.** Which constitution made Nigeria a true federation? *Answer:* The **Lyttleton Constitution of 1954**.

**Example 3.** Who was head of state under the 1960 constitution? *Answer:* The **Queen of England**, represented by the **Governor-General**.`,
        },
        questions: [
          ["E", "The constitution that made Nigeria a federation was the", "Lyttleton Constitution of 1954", "Clifford Constitution of 1922", "Richards Constitution of 1946", "Macpherson Constitution of 1951", "Powers were divided between the centre and regions."],
          ["E", "The first Prime Minister of Nigeria was", "Abubakar Tafawa Balewa", "Nnamdi Azikiwe", "Obafemi Awolowo", "Ahmadu Bello", "He was appointed in 1957."],
          ["E", "Under the 1960 Independence Constitution, the head of state of Nigeria was", "the Queen of England", "the Prime Minister", "an elected President", "the Chief Justice", "She was represented by the Governor-General."],
          ["M", "The Macpherson Constitution is notable because", "Nigerians were widely consulted before it was made", "it introduced the elective principle", "it created the office of Prime Minister", "it made Nigeria a republic", "Consultations ended in the Ibadan conference of 1950."],
          ["M", "The office of Premier in the regions was created by the", "Lyttleton Constitution", "Richards Constitution", "Clifford Constitution", "Republican Constitution", "Each region now had a head of government."],
          ["M", "The commission set up in 1957 to look into the fears of minorities was the", "Willink Commission", "Udoji Commission", "Raisman Commission", "Phillipson Commission", "It recommended a bill of rights rather than new states."],
          ["M", "The Western and Eastern Regions of Nigeria became self-governing in", "1957", "1954", "1959", "1960", "The North followed in 1959."],
          ["H", "Under the 1960 constitution, the final court of appeal for Nigeria was the", "Judicial Committee of the Privy Council", "Federal Supreme Court", "West African Court of Appeal", "High Court of Lagos", "Appeals still went to London."],
          ["H", "A weakness of the Macpherson Constitution was that", "ministers had no real control over government departments", "Nigerians were not consulted", "it had no regional legislatures", "it excluded the North from the legislature", "There was also no Prime Minister or premier."],
          ["H", "After the 1959 federal election, the federal government was formed by a coalition of the", "NPC and NCNC", "NPC and AG", "AG and NCNC", "NEPU and AG", "The Action Group formed the opposition."],
        ],
      },
    ],
  },
];
