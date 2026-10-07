import type { PackTopic } from "../types";

/** SS3 Nigerian History — NERDC 2025 topics for the third term (weeks are set in ss3.ts). */
type Topic = Omit<PackTopic, "week">;

export const democracy1: Topic = {
  title: "Democracy in Nigeria: Meaning, Features and the Return of 1999",
  subtopics: ["Meaning and features of democracy", "Nigeria's republics", "The transition of 1998–1999", "The Fourth Republic"],
  objectives: ["Define democracy and state its features", "Outline Nigeria's earlier experiments with democracy", "Describe the transition that returned Nigeria to civil rule in 1999", "Identify the governments of the Fourth Republic"],
  lesson: {
    title: "Return to Civil Rule",
    summary: "What democracy is, how Nigeria lost and regained it, and the shape of the Fourth Republic.",
    minutes: 40,
    notes: `## Meaning
**Democracy** is a system of government in which **power belongs to the people**, who exercise it directly or through **freely elected representatives**. Abraham Lincoln called it government "of the people, by the people, for the people".

## Features
1. **Periodic free and fair elections**; universal adult suffrage.
2. **Majority rule** with respect for **minority rights**.
3. **Rule of law** and supremacy of the constitution.
4. **Fundamental human rights** — speech, press, association, movement.
5. **Separation of powers** and checks and balances.
6. **Independent judiciary**.
7. **Political parties** and a legitimate **opposition**.
8. **Accountability** of leaders to the people.
9. **Free press** and active civil society.
10. **Peaceful change** of government.

## Nigeria's republics
| Republic | Period | System | End |
|---|---|---|---|
| **First** | 1960/63–1966 | **parliamentary**; Balewa Prime Minister, Azikiwe President | coup of January 1966 |
| **Second** | 1979–1983 | **presidential**; Shehu Shagari (NPN) | coup of December 1983 |
| **Third** (aborted) | 1992–1993 | two parties, SDP and NRC; governors and legislators elected | presidential election of **12 June 1993**, won by **M. K. O. Abiola**, **annulled** by Babangida; Abacha took over |
| **Fourth** | 1999– | presidential | continuing |

## The road to 1999
- The **annulment of 12 June 1993** provoked protests, strikes and the pro-democracy struggle of **NADECO**, labour unions, the press and human-rights groups.
- Under **Abacha** (1993–98) opponents were jailed or killed; Abiola was detained; **Ken Saro-Wiwa** was executed (1995); Nigeria was isolated. Abacha's five parties all adopted him as sole candidate — but he **died on 8 June 1998**. Abiola died in detention on **7 July 1998**.
- **General Abdulsalami Abubakar** released political prisoners, lifted restrictions, set up the **Independent National Electoral Commission (INEC)** under Justice Ephraim Akpata, and announced a short transition.
- Three parties were registered: the **Peoples Democratic Party (PDP)**, the **All People's Party (APP)** and the **Alliance for Democracy (AD)**.
- Elections were held between **December 1998 and February 1999**: local, state, National Assembly and presidential.
- **Chief Olusegun Obasanjo (PDP)** defeated **Chief Olu Falae** (AD/APP joint candidate).
- The **1999 Constitution** was promulgated by decree in May 1999.
- On **29 May 1999** Obasanjo was sworn in — the start of the **Fourth Republic**.

## The Fourth Republic
| President | Period | Party |
|---|---|---|
| **Olusegun Obasanjo** | 1999–2007 | PDP |
| **Umaru Musa Yar'Adua** | 2007–2010 (died in office) | PDP |
| **Goodluck Jonathan** | 2010–2015 | PDP |
| **Muhammadu Buhari** | 2015–2023 | APC |
| **Bola Ahmed Tinubu** | 2023– | APC |

### Landmarks
- **2007** — the first transfer from one elected civilian president to another.
- **2010** — the National Assembly's **"doctrine of necessity"** made Vice-President Jonathan Acting President during Yar'Adua's illness.
- **2015** — an **incumbent president was defeated** and conceded; power passed peacefully to the opposition.
- **Democracy Day** was moved in **2018** from 29 May to **12 June** in honour of the 1993 election, and Abiola was posthumously awarded the nation's highest honour.
- The Fourth Republic is Nigeria's **longest period of unbroken civil rule**.

## System of government
A **presidential** system: an executive President elected for a four-year term, renewable once; a **bicameral National Assembly** (109 senators; 360 representatives); an independent judiciary; 36 states with governors and Houses of Assembly; 774 local governments.`,
    examples: `**Example 1.** On what date did the Fourth Republic begin? *Answer:* **29 May 1999**.

**Example 2.** Name the three parties registered for the 1999 elections. *Answer:* **PDP, APP and AD**.

**Example 3.** Why is 12 June now Democracy Day? *Answer:* It commemorates the **presidential election of 12 June 1993**, won by M. K. O. Abiola and annulled by the military.`,
  },
  questions: [
    ["E", "Nigeria returned to civil rule on", "29 May 1999", "1 October 1979", "12 June 1993", "1 October 1960", "Olusegun Obasanjo was sworn in on that day."],
    ["E", "The first President of the Fourth Republic was", "Olusegun Obasanjo", "Umaru Yar'Adua", "Shehu Shagari", "Goodluck Jonathan", "He governed from 1999 to 2007."],
    ["E", "A system of government in which power belongs to the people is", "democracy", "oligarchy", "autocracy", "theocracy", "The people rule through elected representatives."],
    ["M", "The military Head of State who conducted the transition that produced the Fourth Republic was", "Abdulsalami Abubakar", "Sani Abacha", "Ibrahim Babangida", "Muhammadu Buhari", "He took over after Abacha's death in June 1998."],
    ["M", "The presidential election annulled in 1993 was generally believed to have been won by", "M. K. O. Abiola", "Bashir Tofa", "Olu Falae", "Shehu Yar'Adua", "He was the candidate of the Social Democratic Party."],
    ["M", "The Nigerian First Republic operated a", "parliamentary system", "presidential system", "military system", "one-party system", "The Prime Minister headed the government."],
    ["M", "Which of these is a feature of democracy?", "Periodic free and fair elections", "Rule by decree", "Ban on political parties", "Censorship of the press", "Leaders are chosen and removed through elections."],
    ["H", "In 2010 the National Assembly made Goodluck Jonathan Acting President by invoking the", "doctrine of necessity", "doctrine of ultra vires", "federal character principle", "principle of collective responsibility", "President Yar'Adua was ill and had not transmitted a letter."],
    ["H", "The first time an incumbent Nigerian president lost an election and handed over to the opposition was in", "2015", "2007", "1999", "1983", "Goodluck Jonathan conceded to Muhammadu Buhari."],
    ["H", "The pro-democracy coalition that led opposition to the Abacha regime was", "NADECO", "MAMSER", "NPN", "PRP", "The National Democratic Coalition campaigned for the validation of the 12 June election."],
  ],
  jamb: [
    ["M", "The two parties that contested the elections of the aborted Third Republic were the", "SDP and NRC", "PDP and APP", "NPN and UPN", "NPC and NCNC", "The Babangida government created both parties."],
    ["H", "Democracy Day in Nigeria was changed from 29 May to 12 June in", "2018", "1999", "2007", "2015", "President Buhari announced the change in honour of the 1993 election."],
  ],
};

export const democracy2: Topic = {
  title: "Democratic Institutions in Nigeria",
  subtopics: ["The Independent National Electoral Commission", "Political parties", "The legislature", "The judiciary"],
  objectives: ["Describe the composition and functions of INEC", "Explain the role of political parties in the Fourth Republic", "Describe the structure and functions of the legislature", "Describe the structure and role of the judiciary"],
  lesson: {
    title: "The Pillars of the Fourth Republic",
    summary: "The bodies that organise elections, compete for power, make laws and interpret them.",
    minutes: 40,
    notes: `## Independent National Electoral Commission (INEC)
Established in **1998**; provided for in the 1999 Constitution. It has a **Chairman** and **twelve National Commissioners**, appointed by the President on the advice of the Council of State and confirmed by the Senate, and a **Resident Electoral Commissioner** in each state.

### Functions
- **organises elections** to the offices of President, Governor, and the National and State Assemblies
- **registers political parties** and monitors their finances and conduct
- **registers voters** and maintains the register
- **delimits constituencies**
- conducts **voter and civic education**
- monitors party **primaries and campaigns**
- conducts **referendums**

### Chairmen
Ephraim Akpata (1998–2000), Abel Guobadia, Maurice Iwu, **Attahiru Jega** (2010–2015), **Mahmood Yakubu** (2015–2025).

(Local government elections are conducted by **State Independent Electoral Commissions**.)

### Earlier electoral bodies
Electoral Commission of Nigeria (1959–60); Federal Electoral Commission, FEC (1964); **FEDECO** (1979, 1983); National Electoral Commission, **NEC** (1987–93); NECON (Abacha).

## Political parties
A **political party** is an organised group seeking to **win and exercise governmental power** through elections.

### Functions
recruit and present **candidates**; **aggregate interests** into programmes (manifestos); **political education** and mobilisation; **form governments**; provide **opposition** and alternative policies; link government and people; promote national unity.

### Parties of the Fourth Republic
- **1999:** PDP, APP (later **ANPP**), AD.
- After a Supreme Court ruling in 2002 liberalised registration, many more parties emerged — APGA, ACN, CPC, Labour Party and others.
- **PDP** governed at the centre from 1999 to 2015.
- In **2013** the ACN, CPC, ANPP and a faction of APGA merged into the **All Progressives Congress (APC)**, which won in 2015.
- Later entrants include the NNPP; the Labour Party surged in 2023.

### Weaknesses
lack of **ideology**; **godfatherism** and money politics; weak **internal democracy** (imposed candidates); **defections** ("cross-carpeting"); ethnic and regional leanings; dependence on wealthy financiers.

## The legislature
### National Assembly
- **Senate** — **109** members (three per state and one for the FCT), presided over by the **Senate President**.
- **House of Representatives** — **360** members, presided over by the **Speaker**.
- Four-year terms.

### State Houses of Assembly
Unicameral; 24 to 40 members each.

### Functions
- **law-making**
- **appropriation** — passing the budget ("power of the purse")
- **oversight** of the executive through committees and investigations
- **confirmation** of appointments (ministers, ambassadors, judges, service chiefs) — the Senate
- **representation** of constituencies
- **impeachment** of the President, Vice-President, governors and their deputies
- **constitutional amendment**; approval of treaties, loans and states of emergency

### Problems
executive–legislature conflict; leadership instability (several Senate Presidents between 1999 and 2007); corruption allegations; budget "padding"; high cost; frequent defections; weak oversight.

## The judiciary
### Courts
**Supreme Court** (headed by the **Chief Justice of Nigeria**) → **Court of Appeal** → **Federal High Court**, **State High Courts**, High Court of the FCT, **National Industrial Court**, **Sharia Courts of Appeal** and **Customary Courts of Appeal** → magistrate, district, area and customary courts.

### Functions
interprets the constitution and laws; **settles disputes** between persons, and between governments; **judicial review** — declares unconstitutional acts void; **protects fundamental rights**; decides **election petitions** (tribunals); punishes offenders.

### Independence
The **National Judicial Council (NJC)** recommends appointment and discipline of judges; judges enjoy security of tenure; salaries are charged on the Consolidated Revenue Fund.

### Role in the Fourth Republic
Landmark rulings — **resource control (2002)**; party registration (2002); **withheld Lagos local government funds (2004)**; restoring impeached governors and candidates (e.g. **Peter Obi, 2006–07**; **Rotimi Amaechi, 2007**); upholding or overturning elections. Problems include **delay**, conflicting judgments, and allegations of corruption.

## Other institutions
The **executive**; **civil society**; a **free press**; anti-corruption agencies; the National Human Rights Commission; security agencies.`,
    examples: `**Example 1.** State three functions of INEC. *Answer:* **Conducting elections**, **registering voters** and **registering political parties**.

**Example 2.** How many members has the Senate, and how are they distributed? *Answer:* **109** — three from each of the 36 states and one from the FCT.

**Example 3.** What is judicial review? *Answer:* The power of the courts to **declare laws or actions of government unconstitutional and void**.`,
  },
  questions: [
    ["E", "The body that conducts federal and state elections in Nigeria is", "INEC", "NJC", "EFCC", "NYSC", "The Independent National Electoral Commission."],
    ["E", "The number of senators in the Nigerian Senate is", "109", "360", "36", "774", "Three from each state and one from the FCT."],
    ["E", "The head of the Nigerian judiciary is the", "Chief Justice of Nigeria", "Attorney-General", "Senate President", "Inspector-General of Police", "He presides over the Supreme Court."],
    ["M", "The House of Representatives is presided over by the", "Speaker", "Senate President", "Chief Whip", "Clerk", "The Speaker is elected by the members."],
    ["M", "Which of these is a function of political parties?", "Presenting candidates for elections", "Conducting elections", "Interpreting the constitution", "Registering voters", "Parties recruit and sponsor candidates."],
    ["M", "The power of the legislature to examine the activities of the executive is its", "oversight function", "appropriation function only", "judicial function", "electoral function", "Committees investigate ministries and agencies."],
    ["M", "The body that recommends the appointment and discipline of judges is the", "National Judicial Council", "Federal Character Commission", "Nigerian Bar Association", "Code of Conduct Bureau", "It helps to secure judicial independence."],
    ["H", "The All Progressives Congress was formed in 2013 by a merger of the", "ACN, CPC, ANPP and a faction of APGA", "PDP and AD", "NPN and UPN", "SDP and NRC", "The merger produced a party able to defeat the PDP in 2015."],
    ["H", "Local government elections in Nigeria are conducted by", "State Independent Electoral Commissions", "INEC", "the National Assembly", "the Federal High Court", "Each state has its own commission."],
    ["H", "The INEC chairman who introduced permanent voter cards and card readers for the 2015 elections was", "Attahiru Jega", "Maurice Iwu", "Abel Guobadia", "Ephraim Akpata", "He headed the commission from 2010 to 2015."],
  ],
  jamb: [
    ["M", "The electoral body that conducted the 1979 and 1983 elections was", "FEDECO", "NEC", "INEC", "NECON", "The Federal Electoral Commission."],
    ["H", "The removal of a president or governor from office by the legislature for gross misconduct is", "impeachment", "recall", "prorogation", "filibuster", "It requires a two-thirds majority after investigation."],
  ],
};

export const democracy3: Topic = {
  title: "Challenges of Democracy in Nigeria",
  subtopics: ["Corruption", "Electoral malpractice", "Weak institutions", "Insecurity and other challenges"],
  objectives: ["Explain how corruption threatens democracy", "Describe forms of electoral malpractice", "Explain the problem of weak institutions", "Discuss insecurity and other challenges facing democracy in Nigeria"],
  lesson: {
    title: "Threats to Democratic Rule",
    summary: "The problems that have limited the quality of Nigeria's democracy since 1999.",
    minutes: 40,
    notes: `## 1. Corruption
- **Embezzlement** of public funds by office-holders; inflated contracts; fuel-subsidy and pension scandals.
- **Money politics** — huge sums spent on nomination forms, primaries and campaigns; office is then used to recover the "investment".
- **Godfatherism** — wealthy sponsors install candidates and demand control of state resources (e.g. the Anambra crisis of 2003–04; Oyo, 2005–06).
- **Effects:** public funds are diverted from services; citizens lose faith in democracy; the wrong people are attracted to politics; inequality deepens.

## 2. Electoral malpractice
| Stage | Forms |
|---|---|
| **before** the election | manipulated voter registration; imposition of candidates; intimidation; under-age registration |
| **during** | **ballot-box snatching and stuffing**; **vote-buying**; multiple voting; violence and thuggery; partisan security agents; late arrival of materials |
| **after** | **falsification of results**; bribing of officials; post-election violence; abuse of the courts |

- The **2003** and especially the **2007** elections were widely condemned; President Yar'Adua himself admitted flaws and set up the **Uwais** panel.
- **2011** was judged better, but **post-election violence** in some northern states killed hundreds, including youth corps members.
- **Vote-buying** ("stomach infrastructure") has grown as technology has made ballot-stuffing harder.

**Effects:** leaders without legitimacy; voter apathy; violence; costly litigation; instability.

## 3. Weak institutions
- **Dominant executive** — presidents and governors overshadow legislatures; state assemblies and local governments are often controlled by governors.
- **Political parties** without ideology or internal democracy; frequent defections.
- **Electoral commission** dependent on the executive for appointments and, formerly, funds.
- **Slow justice** — long delays; conflicting orders; disobedience of court orders.
- **Police and security agencies** used for partisan ends.
- **Disregard for the rule of law** — e.g. the Odi (1999) and Zaki-Biam (2001) military operations; detention in defiance of court orders.
- Poorly resourced oversight bodies; weak civil service.

## 4. Insecurity
- **Boko Haram** insurgency in the north-east (from 2009).
- **Niger Delta militancy**; oil theft.
- **Banditry and kidnapping** in the north-west and elsewhere.
- **Farmer–herder clashes** in the Middle Belt.
- **Ethno-religious riots** (Kaduna 2000; Jos 2001, 2008, 2010).
- **Separatist agitation** in the south-east.
- Cultism and political thuggery.

**Effects:** loss of lives; displacement; elections postponed or impossible in some areas; heavy security spending; the temptation to authoritarian measures.

## 5. Other challenges
- **Poverty, unemployment and illiteracy** — citizens are easily bought or manipulated.
- **Ethnicity and religion** in politics; zoning disputes.
- **Tenure elongation** — the failed "third term" amendment of **2006**.
- **High cost of governance**.
- **Human-rights abuses** — police brutality, which provoked the **#EndSARS** protests of 2020.
- **Voter apathy** — turnout has fallen steadily (below 30% in 2023).
- **Abuse of impeachment** and of emergency powers.
- **Fake news** and hate speech.
- **Executive–legislative conflict**; delayed budgets.
- Legacy of **militarism** — a command mentality among leaders.

## Towards solutions
Credible elections and prosecution of offenders; **independent institutions**; internal party democracy; reduction of the cost of politics; civic education; economic opportunity; respect for court orders; police reform; an active press and civil society; leadership by example.`,
    examples: `**Example 1.** Give three forms of electoral malpractice. *Answer:* **Ballot-box snatching, vote-buying and falsification of results**.

**Example 2.** What is godfatherism? *Answer:* The practice whereby a **powerful sponsor installs a candidate in office** and then controls or exploits the office.

**Example 3.** How does insecurity threaten democracy? *Answer:* It **costs lives, displaces voters, disrupts elections** and diverts resources.`,
  },
  questions: [
    ["E", "The buying of voters' support with money or gifts is", "vote-buying", "lobbying", "canvassing", "zoning", "It is a form of electoral malpractice."],
    ["E", "Which of these is a challenge to democracy in Nigeria?", "Electoral malpractice", "Freedom of the press", "Independent judiciary", "Peaceful transfer of power", "Rigging undermines the people's choice."],
    ["E", "The sponsorship and control of candidates by powerful political patrons is called", "godfatherism", "federalism", "constitutionalism", "populism", "The patron expects control of office in return."],
    ["M", "The 2007 general elections in Nigeria were widely regarded as", "seriously flawed", "the freest in the nation's history", "boycotted by all parties", "conducted without parties", "Observers and the winner himself acknowledged irregularities."],
    ["M", "The attempt in 2006 to amend the constitution to allow the President a longer stay in office is known as the", "third-term agenda", "doctrine of necessity", "zoning formula", "option A4", "The National Assembly rejected the amendment."],
    ["M", "Low participation of citizens in elections is called", "voter apathy", "voter education", "gerrymandering", "plebiscite", "Turnout has fallen in successive elections."],
    ["M", "A sign of weak institutions in Nigeria's democracy is", "disobedience of court orders by governments", "regular sittings of the courts", "passage of the budget", "registration of voters", "The rule of law is undermined."],
    ["H", "Widespread violence after the 2011 presidential election occurred mainly in", "some northern states", "the Niger Delta creeks", "Lagos Island", "the Federal Capital Territory only", "Hundreds died, including youth corps members."],
    ["H", "The nationwide protests of 2020 against police brutality were known as", "#EndSARS", "Occupy Nigeria", "Bring Back Our Girls", "Ali Must Go", "They targeted the Special Anti-Robbery Squad."],
    ["H", "Money politics endangers democracy chiefly because it", "restricts office to the wealthy and encourages looting to recover costs", "increases the number of parties", "lengthens campaigns", "reduces the cost of elections", "Office becomes an investment to be recouped."],
  ],
  jamb: [
    ["M", "The movement of elected politicians from one party to another is known as", "cross-carpeting", "filibustering", "lobbying", "gerrymandering", "Frequent defections weaken the parties."],
    ["H", "The military operation in Bayelsa State in November 1999, criticised as a violation of human rights under democratic rule, took place at", "Odi", "Zaki-Biam", "Baga", "Chibok", "Soldiers destroyed the town after policemen were killed there."],
  ],
};

export const democracy4: Topic = {
  title: "Achievements of Democracy since 1999",
  subtopics: ["Constitutional development", "A free press", "Civil society", "Human rights awareness and other gains"],
  objectives: ["Describe constitutional development since 1999", "Explain the growth of press freedom", "Describe the role of civil society", "Discuss human rights awareness and other achievements of democratic rule"],
  lesson: {
    title: "The Gains of Civil Rule",
    summary: "What more than two decades of unbroken democracy have achieved.",
    minutes: 40,
    notes: `## 1. Constitutional development
- The **1999 Constitution** has remained in force — the longest-lived in Nigeria's history.
- **Amendments** have been made by the constitutional process rather than by decree:
  - **2010–11** — financial independence and a new appointment timetable for INEC; shorter time limits for election petitions; clearer rules on transfer of power to the Vice-President.
  - **2018** — **"Not Too Young To Run"** lowered the age for elective offices (President from 40 to 35; House of Representatives from 30 to 25); financial autonomy for state legislatures and judiciaries.
  - **2023** — power to states to legislate on **railways, electricity and prisons** (moved to the concurrent list).
- **Constitutionalism:** the **doctrine of necessity (2010)** resolved a succession crisis without a coup; the **third-term bid (2006)** was defeated in the Senate.
- **National conferences** in 2005 and 2014 debated the structure of the federation.
- Important statutes: **Electoral Acts (2002, 2006, 2010, 2022)**; **Fiscal Responsibility Act (2007)**; **Public Procurement Act (2007)**; **Freedom of Information Act (2011)**; **Child Rights Act (2003)**; **Administration of Criminal Justice Act (2015)**; **Violence Against Persons (Prohibition) Act (2015)**; **Petroleum Industry Act (2021)**.

## 2. Peaceful transfer of power
Seven consecutive general elections (1999–2023); the first **civilian-to-civilian handover (2007)**; **defeat of an incumbent (2015)**; no successful coup.

## 3. A free press
- Repeal of repressive decrees (such as Decree No. 4 of 1984 and the proscription of newspapers).
- **Liberalisation of broadcasting** — many private radio and television stations.
- Growth of **online newspapers and social media**; investigative journalism.
- The **Freedom of Information Act (2011)** gives access to public records.
- The press exposes corruption and holds leaders to account.
- *Limits:* harassment and arrest of journalists; the Cybercrimes Act; the Twitter ban (2021); ownership influence.

## 4. Civil society
**Civil society** consists of voluntary organisations independent of government.
- **Pro-democracy and rights groups** — CLO, CDHR, SERAP, CDD.
- **Election observers** — the Transition Monitoring Group; YIAGA Africa ("Watching the Vote").
- **Labour and professional bodies** — NLC, TUC, NBA, ASUU, NMA.
- **Campaigns** — **Occupy Nigeria (2012)** against the removal of fuel subsidy; **Bring Back Our Girls (2014)**; **Not Too Young To Run**; **#EndSARS (2020)**.
- Faith-based, women's and community organisations.
They educate voters, monitor budgets and elections, litigate in the public interest and defend the vulnerable.

## 5. Human rights awareness
- The **Human Rights Violations Investigation Commission** (the **Oputa Panel, 1999–2002**) heard cases from the military era.
- A stronger **National Human Rights Commission**; the Legal Aid Council; the Public Complaints Commission.
- Citizens **go to court** to enforce rights; public-interest litigation.
- Laws protecting **children, women and persons with disabilities** (Discrimination Against Persons with Disabilities Act, 2018).
- Release of political detainees; end of detention under military decrees.
- Greater public debate about policing, gender and the rights of minorities.

## 6. Other gains
- **Judicial independence** — courts have ruled against governments and overturned elections.
- **Anti-corruption institutions** — ICPC (2000), EFCC (2003), NEITI (2004), Bureau of Public Procurement.
- **Electoral reforms** — permanent voter cards, card readers, BVAS, results portal.
- **Economic reforms** — **GSM telephony (2001)**; bank consolidation (2005); **debt relief (2005–06)**; pension reform (2004); privatisation; the rebasing of GDP (2014).
- **International rehabilitation** — end of pariah status; leadership roles abroad.
- **Greater political participation** — more parties; women and youths in politics.
- **Legislative oversight** and budget scrutiny.
- **Decline of ethnic militias' secessionism** for long periods; dialogue on restructuring.

## Assessment
Democracy has survived and widened freedom; but it has yet to deliver security and prosperity for most citizens — the "**dividends of democracy**" remain unevenly shared.`,
    examples: `**Example 1.** What did the "Not Too Young To Run" amendment do? *Answer:* It **lowered the minimum ages** for contesting elective offices (2018).

**Example 2.** What was the Oputa Panel? *Answer:* The **Human Rights Violations Investigation Commission (1999–2002)**, which examined abuses under military rule.

**Example 3.** State two ways in which civil society strengthens democracy. *Answer:* By **observing elections** and **campaigning for accountability and rights**.`,
  },
  questions: [
    ["E", "The law that gives citizens access to public records in Nigeria is the", "Freedom of Information Act", "Official Secrets Act", "Public Order Act", "Land Use Act", "It was passed in 2011."],
    ["E", "Voluntary organisations independent of government that promote public causes are known as", "civil society", "the civil service", "the cabinet", "the judiciary", "They include rights groups, unions and professional bodies."],
    ["E", "Mobile telephony (GSM) was introduced in Nigeria in", "2001", "1999", "1985", "2015", "Licences were auctioned in the early years of the Fourth Republic."],
    ["M", "The 'Not Too Young To Run' constitutional amendment of 2018", "lowered the age limits for elective offices", "created new states", "extended the President's tenure", "abolished the Senate", "It opened the way for younger candidates."],
    ["M", "The commission set up in 1999 to investigate human-rights violations under military rule was headed by", "Chukwudifa Oputa", "Muhammadu Uwais", "Ephraim Akpata", "Kayode Eso", "It is popularly called the Oputa Panel."],
    ["M", "The 2014 campaign for the rescue of the abducted Chibok schoolgirls was called", "Bring Back Our Girls", "Occupy Nigeria", "Enough is Enough", "Save Nigeria Group", "It drew worldwide attention."],
    ["M", "An achievement of democracy since 1999 is", "peaceful transfer of power between civilian governments", "the suspension of the constitution", "the banning of political parties", "rule by decree", "Power changed hands by election in 2007, 2015 and 2023."],
    ["H", "The protests of January 2012 against the removal of fuel subsidy were known as", "Occupy Nigeria", "#EndSARS", "Ali Must Go", "June 12 struggle", "Labour unions and civil society led a nationwide strike."],
    ["H", "A 2023 constitutional amendment moved railways, electricity and prisons from the exclusive to the", "concurrent legislative list", "residual list", "local government schedule", "emergency powers list", "States may now legislate on them as well."],
    ["H", "The defeat of the proposed tenure-extension amendment in 2006 is regarded as a triumph of", "constitutionalism and legislative independence", "military intervention", "judicial activism alone", "executive supremacy", "The Senate threw out the bill."],
  ],
  jamb: [
    ["M", "The anti-corruption agency established in 2000 is the", "ICPC", "EFCC", "NEITI", "NDLEA", "The Independent Corrupt Practices and Other Related Offences Commission."],
    ["H", "The agency created in 2004 to promote transparency in the revenues of the oil and mining sector is", "NEITI", "NNPC", "NDDC", "DPR", "The Nigeria Extractive Industries Transparency Initiative."],
  ],
};

export const corruptionBokoHaram: Topic = {
  title: "Contemporary Issues: Anti-Corruption Crusades and the Boko Haram Insurgency",
  subtopics: ["Corruption in Nigerian history", "Anti-corruption crusades: EFCC and ICPC", "Origin and course of the Boko Haram insurgency", "Effects of and responses to the insurgency"],
  objectives: ["Trace efforts against corruption in Nigeria", "Describe the roles of the ICPC and the EFCC", "Trace the origin and course of the Boko Haram insurgency", "Assess its effects and the responses to it"],
  lesson: {
    title: "Corruption and Insurgency",
    summary: "Two of the gravest problems of contemporary Nigeria and the efforts made to tackle them.",
    minutes: 40,
    notes: `## Part A — Corruption and the anti-corruption crusades
**Corruption** is the abuse of entrusted power for private gain — bribery, embezzlement, fraud, nepotism, money laundering.

### Earlier efforts
| Regime | Measure |
|---|---|
| First Republic | commissions of inquiry (e.g. the **Coker Commission, 1962**, into Western Region corporations) |
| Gowon | failed to act on accusations against governors — one cause of his overthrow |
| **Murtala Mohammed** (1975) | assets investigation panels; dismissal of governors and thousands of officials; the **Public Complaints Commission** and **Corrupt Practices Investigation Bureau** |
| 1979 Constitution | **Code of Conduct Bureau and Tribunal** — declaration of assets |
| Shagari | "Ethical Revolution" |
| **Buhari–Idiagbon** (1984–85) | **War Against Indiscipline (WAI)**; military tribunals jailed politicians |
| Babangida | **MAMSER**; a culture of "settlement" nevertheless spread |
| Abacha | **War Against Indiscipline and Corruption**; the Failed Banks Tribunal; yet massive looting — the "**Abacha loot**" recovered from abroad |

### ICPC
The **Independent Corrupt Practices and Other Related Offences Commission** was created by an Act of **2000**, the first bill President Obasanjo sent to the National Assembly. First chairman: **Justice Mustapha Akanbi**. It **receives and investigates petitions** on bribery and abuse of office, **prosecutes** offenders, **reviews systems** in public bodies to block loopholes, and **educates** the public.

### EFCC
The **Economic and Financial Crimes Commission** was established in **2003** (Act of 2002, re-enacted 2004), partly in response to international pressure over **money laundering**. First chairman: **Nuhu Ribadu**. It investigates and prosecutes **advance-fee fraud ("419")**, **money laundering**, bank and securities fraud, **cyber-crime**, oil bunkering and the looting of public funds; it **traces and recovers assets**. It secured the conviction of a former Inspector-General of Police and several former governors, and won Nigeria's removal from the international money-laundering blacklist (2006).

### Other measures
**Due process** and the Bureau of Public Procurement; **NEITI**; the **Treasury Single Account (2015)**; **BVN**; the **whistle-blower policy (2016)**; asset recovery agreements; the Nigerian Financial Intelligence Unit.

### Problems
**selective prosecution** and political interference; slow courts and endless adjournments; plea bargains seen as too lenient; immunity of serving presidents and governors; poor funding; public tolerance of ill-gotten wealth.

## Part B — The Boko Haram insurgency
### Origin
The group — formally **Jama'atu Ahlis Sunna Lidda'awati wal-Jihad** — emerged in **Maiduguri, Borno State, about 2002** under the preacher **Mohammed Yusuf**. Its popular name, "Boko Haram", means roughly "**Western education is forbidden**". It rejected the secular state and Western-style schooling and sought a state under its version of Islamic law.

### Causes suggested
religious extremism; **poverty, unemployment and illiteracy** in the north-east; corruption and misgovernance; heavy-handed policing; porous borders and the flow of arms from the Sahel; political manipulation.

### Course
| Year | Event |
|---|---|
| **July 2009** | uprising in Bauchi, Borno, Yobe and Kano; hundreds killed; **Yusuf died in police custody** |
| 2010 | re-emerged under **Abubakar Shekau**; prison break at Bauchi |
| **2011** | suicide bombings of **Police Headquarters** and the **UN building** in Abuja |
| 2012–13 | attacks on churches, mosques, schools, markets; **state of emergency (May 2013)** in Borno, Yobe and Adamawa; the **Civilian Joint Task Force** formed |
| **April 2014** | abduction of **276 schoolgirls at Chibok** |
| 2014–15 | seizure of territory; the Baga massacre; pledge of allegiance to the "Islamic State" — **ISWAP**; elections postponed |
| 2015–16 | military offensive with the **Multinational Joint Task Force** (Nigeria, Chad, Niger, Cameroon, Benin) recaptured most towns; the group **split** |
| **February 2018** | abduction of schoolgirls at **Dapchi** |
| 2021 | **Shekau died** in a clash with ISWAP; mass surrenders followed |

### Effects
- tens of thousands **killed**; over **two million displaced** into camps
- destruction of schools, hospitals, markets and farms; **hunger**
- millions of children out of school
- collapse of trade around Lake Chad
- huge **security spending**
- trauma, widows and orphans; abducted women and children
- spread into Niger, Chad and Cameroon; damage to Nigeria's image

### Responses
military operations (e.g. **Operation Lafiya Dole**, later Hadin Kai); the MNJTF; emergency rule; the **Civilian JTF**; negotiation for the release of captives; **Operation Safe Corridor** for de-radicalisation of surrendered fighters; the **North East Development Commission (2017)**; the Safe Schools Initiative; humanitarian agencies.`,
    examples: `**Example 1.** Which anti-corruption agency was created first, and when? *Answer:* The **ICPC**, in **2000** (the EFCC followed in 2003).

**Example 2.** Who founded Boko Haram and where? *Answer:* **Mohammed Yusuf**, in **Maiduguri**, about 2002.

**Example 3.** State two effects of the insurgency. *Answer:* **Mass displacement of people** and **destruction of schools and livelihoods**.`,
  },
  questions: [
    ["E", "EFCC stands for Economic and Financial", "Crimes Commission", "Control Council", "Courts Committee", "Compliance Corporation", "It investigates fraud and money laundering."],
    ["E", "The Boko Haram insurgency began in", "Borno State", "Rivers State", "Kwara State", "Ogun State", "The group emerged in Maiduguri."],
    ["E", "The War Against Indiscipline was launched by the regime of", "Muhammadu Buhari", "Yakubu Gowon", "Shehu Shagari", "Ernest Shonekan", "It was introduced in 1984."],
    ["M", "The first chairman of the EFCC was", "Nuhu Ribadu", "Mustapha Akanbi", "Farida Waziri", "Ibrahim Lamorde", "He led the commission from 2003."],
    ["M", "The founder of Boko Haram, who died in police custody in 2009, was", "Mohammed Yusuf", "Abubakar Shekau", "Mamman Nur", "Maitatsine", "His death was followed by a more violent phase."],
    ["M", "In April 2014 Boko Haram abducted 276 schoolgirls from", "Chibok", "Dapchi", "Kankara", "Jangebe", "The abduction provoked worldwide protest."],
    ["M", "The body that requires public officers to declare their assets is the", "Code of Conduct Bureau", "Federal Character Commission", "National Boundary Commission", "Public Complaints Commission", "It was first provided for in the 1979 Constitution."],
    ["H", "The regional force formed by Nigeria and its neighbours to fight Boko Haram is the", "Multinational Joint Task Force", "ECOMOG", "Civilian Joint Task Force", "African Standby Force", "It operates in the Lake Chad basin."],
    ["H", "A major criticism of Nigeria's anti-corruption agencies is", "selective prosecution influenced by politics", "prosecuting too many serving presidents", "lack of any legal powers", "refusal to accept petitions", "Critics say opponents of the government are targeted."],
    ["H", "The policy introduced in 2015 requiring all federal revenues to be paid into one account at the Central Bank is the", "Treasury Single Account", "Excess Crude Account", "Sovereign Wealth Fund", "Federation Account Stabilisation Fund", "It aims to block leakages."],
  ],
  jamb: [
    ["M", "The first chairman of the ICPC was", "Justice Mustapha Akanbi", "Nuhu Ribadu", "Justice Chukwudifa Oputa", "Justice Ayo Salami", "He headed the commission from 2000."],
    ["H", "The federal programme for the de-radicalisation and reintegration of surrendered Boko Haram fighters is", "Operation Safe Corridor", "Operation Feed the Nation", "Operation Python Dance", "Operation Crocodile Smile", "It was established in 2016."],
  ],
};

export const nigerDelta: Topic = {
  title: "Contemporary Issues: Resource Control, Niger Delta Militancy and the Amnesty Programme",
  subtopics: ["Background to the Niger Delta question", "The struggle for resource control", "Militancy in the Niger Delta", "Government responses and the amnesty programme"],
  objectives: ["Explain the grievances of the Niger Delta", "Trace the agitation for resource control", "Describe the rise and effects of militancy", "Assess government responses, including the amnesty programme"],
  lesson: {
    title: "Oil, Agitation and Amnesty",
    summary: "Why Nigeria's oil-producing region became a theatre of protest and armed conflict, and how government responded.",
    minutes: 40,
    notes: `## Background
The **Niger Delta** — Bayelsa, Rivers, Delta, Akwa Ibom, Cross River, Edo, and by law also Ondo, Abia and Imo — produces the oil and gas that provide most of Nigeria's foreign exchange. Its peoples (Ijaw, Ogoni, Itsekiri, Urhobo, Isoko, Ibibio and others) are **minorities**.

### Grievances
- **environmental degradation** — oil spills, **gas flaring**, destruction of farmland, rivers and fishing
- **poverty and unemployment** amid oil wealth; lack of roads, water, schools and electricity
- **loss of control** over land and resources — the Petroleum Act (1969) and **Land Use Decree (1978)** vested them in the state
- **reduction of derivation** from 50% (1960) to as low as 1.5–3% by the 1980s
- **political marginalisation** within the federation
- neglect by **oil companies**; unfulfilled promises
- **repression** of protest

## The struggle for resource control
**Resource control** is the demand that states or communities **own and manage the resources in their territory**, paying tax to the centre — or at least receive a much larger share of the revenue.

| Year | Event |
|---|---|
| **1957–58** | Willink Commission described the area as "poor, backward and neglected"; led to the Niger Delta Development Board (1961) |
| **1966** | **Isaac Adaka Boro**'s Niger Delta Volunteer Force declared a republic — crushed in twelve days |
| **1990** | **Ogoni Bill of Rights**; **MOSOP** led by **Ken Saro-Wiwa** campaigned non-violently against Shell and the government |
| **1993** | mass Ogoni protest; Shell suspended operations in Ogoniland |
| **10 November 1995** | **Saro-Wiwa and eight others were hanged** by the Abacha regime |
| **December 1998** | **Kaiama Declaration** by the Ijaw Youth Council demanded control of Ijaw resources and withdrawal of troops |
| **1999** | 13% derivation in the constitution; the **Odi** military operation |
| **2000–2001** | governors of the South-South demanded resource control |
| **2002** | Supreme Court ruling on the **on-shore/off-shore dichotomy**; abolished by Act in 2004 |
| **2005** | National Political Reform Conference deadlocked over derivation (delegates demanded 25–50%) |

## Militancy
From about **2003–2006** agitation became **armed**.
- Groups: the **Niger Delta People's Volunteer Force** (Asari Dokubo), the Niger Delta Vigilante, and from **2006** the **Movement for the Emancipation of the Niger Delta (MEND)**; many "camps" led by commanders known as "generals".
- Tactics: **kidnapping of oil workers**, **bombing of pipelines and platforms**, attacks on security forces, **illegal bunkering** (oil theft), piracy.
- Triggers: arrest of Asari Dokubo and of Governor Alamieyeseigha (2005); arms from election-time thuggery; proceeds of stolen oil.

### Effects
- oil output fell from about **2.2 million to under 1 million barrels a day** at the worst point (2008–09)
- huge **loss of revenue**; higher world oil prices
- oil companies withdrew staff and declared *force majeure*
- loss of lives; destruction of communities in military reprisals (e.g. Gbaramatu, 2009)
- kidnapping became a wider criminal industry
- more pollution from sabotage and illegal refining

## Government responses
| Response | Year |
|---|---|
| **OMPADEC** — Oil Mineral Producing Areas Development Commission | 1992 |
| **13% derivation** | 1999 |
| **Niger Delta Development Commission (NDDC)** | 2000 |
| **military Joint Task Force** | from 2003 |
| **Technical Committee on the Niger Delta** (Ledum Mitee) | 2008 |
| **Ministry of Niger Delta Affairs** | 2008 |
| **Presidential Amnesty Programme** | 2009 |
| UNEP report on Ogoniland; clean-up project (**HYPREP**) | 2011; from 2016 |
| Petroleum Industry Act — **host community development trusts** | 2021 |

## The amnesty programme
On **25 June 2009** President **Umaru Musa Yar'Adua** proclaimed an **unconditional pardon** for militants who surrendered their arms within **sixty days (6 August – 4 October 2009)**.
- About **20,000** accepted in the first phase; later phases brought the total to about **30,000**.
- The programme followed **disarmament, demobilisation and reintegration (DDR)**: surrender of weapons; camps for re-orientation; monthly **stipends**; **vocational training and scholarships** at home and abroad.
- Leading commanders ("Tompolo", "Ateke Tom", "Boyloaf" and others) accepted.

### Achievements
restoration of relative **peace**; oil production recovered to over 2 million barrels a day; thousands trained as welders, pilots, marine engineers and graduates.

### Criticisms
it **rewarded violence** and ignored non-violent communities; **root causes** — pollution, poverty, infrastructure — remained; stipends created **dependency**; corruption and enrichment of ex-commanders through security contracts; trained youths lacked jobs; renewed attacks by the **Niger Delta Avengers (2016)**; the programme has been repeatedly extended at high cost.

## Significance
The Niger Delta question is at the heart of debates about **fiscal federalism, minority rights and environmental justice** in Nigeria.`,
    examples: `**Example 1.** Which president proclaimed the Niger Delta amnesty, and when? *Answer:* **Umaru Musa Yar'Adua**, on **25 June 2009**.

**Example 2.** What is meant by resource control? *Answer:* The demand that **states or communities own and manage the resources found in their land**.

**Example 3.** Give two criticisms of the amnesty programme. *Answer:* It **rewarded violence** and **did not address root causes** such as pollution and poverty.`,
  },
  questions: [
    ["E", "The amnesty programme for Niger Delta militants was proclaimed by President", "Umaru Musa Yar'Adua", "Olusegun Obasanjo", "Goodluck Jonathan", "Muhammadu Buhari", "He announced it in June 2009."],
    ["E", "MEND stands for Movement for the Emancipation of the", "Niger Delta", "Nigerian Democracy", "National Development", "Northern Districts", "It emerged in 2006."],
    ["E", "The leader of the Ogoni struggle executed in November 1995 was", "Ken Saro-Wiwa", "Isaac Boro", "Asari Dokubo", "Harold Dappa-Biriye", "He led MOSOP. Answer: Ken Saro-Wiwa."],
    ["M", "The commission established in 2000 to develop the oil-producing areas is the", "NDDC", "OMPADEC", "NEITI", "DFRRI", "The Niger Delta Development Commission replaced OMPADEC."],
    ["M", "The demand that states should own and manage the natural resources in their territory is known as", "resource control", "federal character", "indigenisation", "commercialisation", "It is championed by the oil-producing states."],
    ["M", "A major grievance of the Niger Delta peoples is", "environmental degradation from oil production", "excess infrastructure", "over-representation in government", "absence of mineral resources", "Spills and gas flaring destroyed farms and fishing."],
    ["M", "The Kaiama Declaration of 1998 was made by the", "Ijaw Youth Council", "MOSOP", "Ohanaeze Ndigbo", "Arewa Consultative Forum", "It demanded control of Ijaw resources."],
    ["H", "The process followed by the amnesty programme — surrender of arms, re-orientation and return to civil life — is known as", "disarmament, demobilisation and reintegration", "reconciliation, reconstruction and rehabilitation", "indigenisation and privatisation", "regionalisation and devolution", "DDR is the standard approach to ending armed conflict."],
    ["H", "A principal effect of militancy in the Niger Delta before 2009 was", "a sharp fall in crude oil production", "an increase in federal revenue", "the creation of new states", "the end of gas flaring", "Output fell to under one million barrels a day at the worst point."],
    ["H", "The 2011 report on oil pollution in Ogoniland that recommended a major clean-up was produced by", "UNEP", "OPEC", "ECOWAS", "UNESCO", "The United Nations Environment Programme carried out the assessment."],
  ],
  jamb: [
    ["M", "The militant group whose pipeline attacks in 2016 again cut Nigeria's oil output was the", "Niger Delta Avengers", "Egbesu Boys of Africa", "Bakassi Boys", "Oodua People's Congress", "Its attacks came years after the amnesty."],
    ["H", "The Petroleum Act of 1969 and the Land Use Decree of 1978 are resented in the Niger Delta because they", "vested ownership of land and minerals in the state", "increased derivation to 50 per cent", "created new oil-producing states", "banned oil exploration", "Communities lost legal control of their land and resources."],
  ],
};

export const electoralReforms: Topic = {
  title: "Contemporary Issues: Electoral Reforms and Democratic Consolidation",
  subtopics: ["The need for electoral reform", "The Uwais Committee and the Electoral Acts", "Technology in elections", "Democratic consolidation"],
  objectives: ["Explain the need for electoral reform in Nigeria", "Outline the recommendations of the Uwais Committee and the main Electoral Acts", "Describe the use of technology in elections", "Explain democratic consolidation and its requirements"],
  lesson: {
    title: "Making Votes Count",
    summary: "The efforts to improve the conduct of elections and to make democracy secure in Nigeria.",
    minutes: 40,
    notes: `## The need for reform
Disputed elections have been a recurring cause of crisis: **1964–65** (leading to the first coup), **1983** (followed by the second), **1993** (annulment), and the heavily criticised polls of **2003** and **2007**. Problems included inflated voter registers, ballot stuffing, falsified results, violence, a partisan electoral body and slow election tribunals.

## The Uwais Committee
After the 2007 election, President **Yar'Adua** admitted its flaws and set up the **Electoral Reform Committee (2007–08)**, chaired by former Chief Justice **Muhammadu Lawal Uwais**.

### Main recommendations
1. The **INEC chairman and board should be appointed through the National Judicial Council**, not by the President.
2. INEC should be **funded directly** from the Consolidated Revenue Fund.
3. An **Electoral Offences Commission** to prosecute offenders.
4. A **Political Parties Registration and Regulatory Commission** and a constituency delimitation body, to unbundle INEC.
5. **All election petitions concluded before swearing-in**; the burden of proof shifted towards INEC.
6. **Proportional representation** for part of the legislature.
7. **Independent candidacy**.
8. Holding elections well ahead of handover.

Government accepted many proposals but **rejected** the change in the method of appointing INEC's chairman.

## The Electoral Acts and constitutional changes
| Law | Main features |
|---|---|
| **Electoral Act 2010** and 2010–11 amendments | INEC's funds charged on the Consolidated Revenue Fund; time limits for petitions (180 days at the tribunal, 60 days on appeal); elections held 150–30 days before handover; stricter rules on party primaries |
| **2015 amendments** | recognition of the card reader's use by guidelines |
| **Not Too Young To Run (2018)** | lower age limits for candidates |
| **Electoral Act 2022** | legal backing for **electronic accreditation and transmission of results**; **early release of INEC funds**; primaries and submission of candidates **180 days** before the election; longer campaign period; limits on campaign spending raised; INEC may review results declared under duress; provisions for voters with disabilities |

## Technology in elections
- **Permanent Voter Cards (PVCs)** with embedded chips and the **Smart Card Reader (2015)** verified voters' fingerprints.
- **Continuous voter registration**, with biometric capture and online pre-registration.
- The **Bimodal Voter Accreditation System (BVAS)**, from 2021–22, authenticates voters by **fingerprint or face** and uploads polling-unit result sheets.
- The **INEC Result Viewing Portal (IReV)** allows the public to see polling-unit results.
- Online portals for candidate nomination, party agents and observers.

**Gains:** reduced multiple voting and ballot stuffing; narrower margins; more credible registers.
**Limits:** device and network failures; delays in uploading presidential results in **2023**; **vote-buying** has replaced older methods; legal disputes about the status of electronic transmission.

## Other reforms and practices
- **staggered (off-cycle) governorship elections** produced by court rulings
- deregistration of non-performing parties (2020)
- simultaneous accreditation and voting
- greater role for **observers** and civil society (parallel vote tabulation)
- the **National Peace Committee** and peace accords signed by candidates (from 2015)
- pending proposals: an **electoral offences commission**, diaspora voting, electronic voting, independent candidacy

## Democratic consolidation
**Democratic consolidation** is the process by which democracy becomes **stable, accepted by all as "the only game in town"**, and unlikely to break down.

### Signs in Nigeria
unbroken civil rule since 1999; **alternation of parties in power (2015)**; losers going to **court** rather than to the streets; the military remaining in barracks; growing use of technology; active media and civil society.

### Requirements still to be met
- **credible elections** and prosecution of offenders
- **strong, independent institutions** — INEC, judiciary, legislature, police
- **internal party democracy** and issue-based politics
- respect for the **rule of law** and human rights
- **accountability** and reduction of corruption
- **economic well-being** — democracy must deliver
- **security**
- **inclusion** of women, youths and persons with disabilities
- civic education and a democratic political culture`,
    examples: `**Example 1.** Who chaired the Electoral Reform Committee of 2007–08? *Answer:* Former Chief Justice **Muhammadu Lawal Uwais**.

**Example 2.** What does BVAS do? *Answer:* It **verifies voters by fingerprint or face** and uploads polling-unit results.

**Example 3.** What is democratic consolidation? *Answer:* The process by which democracy becomes **stable and accepted by all** as the only way of gaining power.`,
  },
  questions: [
    ["E", "The Electoral Reform Committee set up in 2007 was chaired by", "Muhammadu Uwais", "Attahiru Jega", "Chukwudifa Oputa", "Ephraim Akpata", "He was a former Chief Justice of Nigeria."],
    ["E", "PVC in Nigerian elections stands for", "Permanent Voter Card", "Public Voting Centre", "Polling Verification Code", "Party Voting Certificate", "It carries the voter's biometric data."],
    ["E", "The device used by INEC to accredit voters by fingerprint or face is the", "BVAS", "IPPIS", "TSA", "GSM", "The Bimodal Voter Accreditation System."],
    ["M", "The Uwais Committee recommended that the chairman of INEC be appointed through the", "National Judicial Council", "President alone", "Nigeria Governors' Forum", "ruling party", "This was meant to make the commission more independent."],
    ["M", "The online portal on which polling-unit results are published by INEC is known as", "IReV", "Remita", "NIMC", "JAMB CAPS", "The INEC Result Viewing Portal."],
    ["M", "The Electoral Act that gave legal backing to electronic transmission of results was passed in", "2022", "2002", "2006", "2010", "It was signed into law before the 2023 elections."],
    ["M", "The process by which democracy becomes stable and widely accepted is called democratic", "consolidation", "transition only", "breakdown", "centralism", "Democracy becomes 'the only game in town'."],
    ["H", "Which recommendation of the Uwais Committee was rejected by the government?", "Removing the President's power to appoint the INEC chairman", "Funding INEC from the Consolidated Revenue Fund", "Setting time limits for election petitions", "Holding elections earlier before handover", "The President retained the power of appointment."],
    ["H", "Under the 2010 constitutional amendment, an election tribunal must deliver judgment within", "180 days of the filing of the petition", "one year of the election", "30 days of the election", "four years", "Appeals must be decided within 60 days."],
    ["H", "As technology has reduced ballot stuffing, the malpractice that has become more prominent is", "vote-buying", "under-age registration only", "postal voting fraud", "proxy voting", "Voters are induced with money at polling units."],
  ],
  jamb: [
    ["M", "An indicator that democracy is being consolidated in Nigeria is", "the peaceful alternation of parties in power", "the suspension of the legislature", "military involvement in government", "the banning of opposition parties", "Power passed from the PDP to the APC in 2015."],
    ["H", "The body, chaired by a former Head of State, that persuades candidates to sign peace accords before elections is the", "National Peace Committee", "Council of State", "National Security Council", "Inter-Party Advisory Council", "It has operated since the 2015 elections."],
  ],
};
