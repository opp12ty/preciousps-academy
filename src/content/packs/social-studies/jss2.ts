import type { TermPlan } from "../types";

/** JSS2 Social Studies — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Social institutions",
        subtopics: ["Meaning of social institutions", "Family, school and religious institutions", "Economic and political institutions", "Functions of social institutions"],
        objectives: ["Define social institutions", "Identify the major social institutions", "Describe the functions of each institution", "Explain how institutions depend on one another"],
        lesson: {
          title: "Institutions That Hold Society Together",
          summary: "Identify the major social institutions and their functions.",
          minutes: 40,
          notes: `## Meaning
A **social institution** is an **organised and lasting system** of relationships, rules and practices that meets a basic need of society.

## Major social institutions
| Institution | Examples | Functions |
|---|---|---|
| **family** | nuclear and extended families | reproduction, care, socialisation |
| **education** | schools, colleges, universities | knowledge, skills, values, preparing for work |
| **religion** | churches, mosques, traditional shrines | moral guidance, worship, social welfare |
| **economic** | markets, banks, farms, factories | production, distribution and exchange of goods and services |
| **political (government)** | legislature, executive, judiciary, local councils | making and enforcing laws, security, public services |
| **health** | hospitals, clinics | prevention and treatment of illness |
| **mass media** | radio, TV, newspapers, internet | information, education, entertainment |

## Interdependence
Institutions **depend on one another**: the family prepares children for school; schools train workers for the economy; government protects everyone and makes laws; religion teaches values that support peace. When one institution fails, others are affected.

## Features
They are **organised**, have **rules and roles**, are **lasting**, and meet **basic needs**.`,
          examples: `**Example 1.** Is a bank a religious, economic or political institution? *Answer:* **economic institution**.

**Example 2.** Which institution makes and enforces laws? *Answer:* the **political institution (government)**.

**Example 3.** Give one example of how institutions depend on one another. *Answer:* **Schools train people who later work in the economy.**`,
        },
        questions: [
          ["E", "An organised, lasting system that meets a basic need of society is a", "social institution", "crowd", "festival", "census", "Institutions are enduring structures."],
          ["E", "Schools and universities belong to the", "educational institution", "religious institution", "economic institution", "political institution", "They provide education."],
          ["E", "Churches and mosques belong to the", "religious institution", "economic institution", "political institution", "health institution", "They provide worship and moral guidance."],
          ["M", "Markets and banks belong to the", "economic institution", "religious institution", "family", "educational institution", "They deal with goods, services and money."],
          ["M", "The institution that makes and enforces laws is the", "political institution", "family", "religious institution", "mass media", "Government maintains order."],
          ["M", "A major function of the educational institution is", "teaching knowledge and skills", "collecting taxes", "conducting marriages", "producing crops", "Schools develop learners."],
          ["M", "Radio, television and newspapers make up the", "mass media", "judiciary", "family", "market", "They inform the public."],
          ["H", "Social institutions are interdependent. This means that", "they depend on one another", "they work in isolation", "they compete to destroy each other", "they have no rules", "Each supports the others."],
          ["H", "If the family fails to socialise children well, the effect is likely to be seen in", "schools and the wider society", "the weather", "rainfall patterns", "nothing at all", "Other institutions inherit the problem."],
          ["H", "Which is a feature of social institutions?", "they have rules and roles", "they last only one day", "they have no members", "they meet no needs", "Organised roles define institutions."],
        ],
      },
      {
        week: 2,
        title: "Culture change and cultural similarities",
        subtopics: ["Meaning of culture change", "Causes of culture change", "Effects of culture change", "Cultural similarities among Nigerian groups"],
        objectives: ["Explain culture change", "Identify causes of culture change", "Discuss positive and negative effects of culture change", "Identify cultural similarities among Nigerian peoples"],
        lesson: {
          title: "How Culture Changes",
          summary: "Explain why culture changes and what Nigerian cultures share.",
          minutes: 40,
          notes: `## Culture change
**Culture change** is the modification of a people's way of life over time through new ideas, contact and inventions.

## Causes
| Cause | Example |
|---|---|
| **education** | Western schooling changing beliefs and occupations |
| **religion** | spread of Christianity and Islam |
| **colonialism** | British rule introduced English, new laws and dress |
| **technology** | phones, internet and social media |
| **trade and contact** | inter-ethnic marriage, migration, travel |
| **urbanisation** | city life changes family patterns |
| **mass media** | films and music spread new styles |
| **government policy** | laws against harmful practices |

## Effects
- **Positive**: better health, education and technology; abolition of harmful practices (e.g. killing of twins, which Mary Slessor campaigned against in Calabar); wider unity.
- **Negative**: loss of indigenous languages and values, indecent dressing, erosion of respect for elders, over-dependence on foreign goods.

## Cultural similarities among Nigerian groups
Despite diversity, Nigerian peoples share:
- **respect for elders** and greeting customs
- the **extended family** system
- **bride price** and family involvement in marriage
- **naming ceremonies** for newborns
- **belief in God (Supreme Being)**
- festivals celebrating harvest (e.g. yam festivals in many areas)
- hospitality to visitors
These similarities promote **national unity**.`,
          examples: `**Example 1.** Name one cause of culture change. *Answer:* **Western education** (or religion, technology).

**Example 2.** Give one negative effect of culture change. *Answer:* **loss of indigenous languages**.

**Example 3.** Name a cultural practice common to many Nigerian groups. *Answer:* **naming ceremonies** (or respect for elders, bride price).`,
        },
        questions: [
          ["E", "The modification of a people's way of life over time is", "culture change", "census", "population", "election", "Culture is dynamic."],
          ["E", "Which is a cause of culture change?", "education", "rainfall", "gravity", "the moon", "New knowledge changes ideas and practices."],
          ["E", "Which cultural practice is common to many Nigerian groups?", "naming ceremonies", "snow festivals", "ice skating", "Christmas trees only", "Most groups celebrate births."],
          ["M", "The spread of mobile phones and social media changing how people communicate shows culture change caused by", "technology", "gravity", "drought", "colonial wars only", "New tools alter behaviour."],
          ["M", "Which is a positive effect of culture change?", "abolition of harmful practices", "loss of indigenous languages", "indecent dressing", "disrespect for elders", "Harmful customs were ended."],
          ["M", "Which is a negative effect of culture change?", "loss of indigenous languages", "improved health care", "wider education", "abolition of twin killing", "Many young people cannot speak their mother tongue."],
          ["M", "British rule in Nigeria introduced English and new laws. This cause of culture change is", "colonialism", "urbanisation only", "migration only", "agriculture", "Colonial contact changed culture."],
          ["H", "Mary Slessor is remembered for campaigning against", "the killing of twins in Calabar", "the building of roads", "Western education", "trade in cocoa", "She worked in the Calabar area."],
          ["H", "Cultural similarities among Nigerian groups help to promote", "national unity", "tribalism", "conflict", "discrimination", "Shared values bring people together."],
          ["H", "Why is culture change sometimes resisted by elders?", "they fear the loss of traditional values", "they dislike all progress in every case", "culture never changes", "change is illegal", "Elders value continuity."],
        ],
      },
      {
        week: 3,
        title: "National unity and integration",
        subtopics: ["Meaning of national unity", "Factors promoting national unity", "Obstacles to national unity", "Government efforts at integration"],
        objectives: ["Define national unity and integration", "Identify factors that promote national unity", "Identify obstacles to national unity", "Describe government efforts at national integration"],
        lesson: {
          title: "One Nigeria: Unity in Diversity",
          summary: "Explain what unites Nigerians, what divides them, and efforts to build unity.",
          minutes: 40,
          notes: `## Meanings
- **National unity** is a situation in which the people of a country **live together in peace and cooperation**, seeing themselves as one nation despite their differences.
- **National integration** is the **process** of bringing different groups together into one united nation.

## Factors that promote unity
- a common **constitution**, flag, anthem and currency
- common **government** and institutions
- **inter-ethnic marriage**, trade and friendships
- **sports** (e.g. the Super Eagles bring Nigerians together)
- common **language** (English) and shared values
- **education** in unity schools and national institutions

## Obstacles to unity
**tribalism/ethnicity**, **religious intolerance**, **nepotism**, corruption, unequal distribution of resources, political manipulation, and fear of domination by other groups.

## Government efforts
| Effort | How it helps |
|---|---|
| **National Youth Service Corps (NYSC)** — 1973 | graduates serve in states other than their own |
| **Federal Government Colleges (unity schools)** | students from all states learn together |
| **Federal Character principle** | fair representation of states in public appointments |
| creation of **states** and local governments | reduces fear of domination |
| **national festivals and sports** (e.g. NAFEST, National Sports Festival) | cultural exchange |
| national symbols and **Abuja** as a neutral capital | shared identity |`,
          examples: `**Example 1.** Which scheme sends graduates to serve in states other than their own? *Answer:* the **NYSC**.

**Example 2.** Name one obstacle to national unity. *Answer:* **tribalism** (or religious intolerance).

**Example 3.** What is the Federal Character principle? *Answer:* **Fair representation of all states** in public appointments.`,
        },
        questions: [
          ["E", "People of a country living together in peace and cooperation is", "national unity", "tribalism", "civil war", "nepotism", "Unity means oneness."],
          ["E", "Which is an obstacle to national unity?", "tribalism", "tolerance", "inter-ethnic marriage", "national sports", "Tribalism divides people."],
          ["E", "The scheme that posts graduates to serve in other states is the", "NYSC", "FRSC", "NPC", "NAPTIP", "NYSC promotes integration."],
          ["M", "Federal Government Colleges are called unity schools because", "students from all parts of Nigeria study together", "they teach only one language", "they are for one tribe", "they have no teachers", "They mix students from all states."],
          ["M", "Fair representation of all states in public appointments is the", "Federal Character principle", "Land Use Act", "Child Rights Act", "census", "It aims at balanced representation."],
          ["M", "Which promotes national unity?", "inter-ethnic marriage", "religious intolerance", "nepotism", "hate speech", "Marriages bind families across groups."],
          ["M", "The NYSC scheme was established in", "1973", "1960", "1999", "1914", "It began in 1973."],
          ["H", "Giving jobs to one's relatives instead of qualified people is", "nepotism", "federal character", "patriotism", "integration", "Nepotism is favouritism to relatives."],
          ["H", "How does the national football team help national unity?", "Nigerians of all groups support it together", "it divides the country", "it collects taxes", "it creates states", "Sport builds shared pride."],
          ["H", "The process of bringing different groups together into one nation is", "national integration", "disintegration", "secession", "colonisation", "Integration builds unity."],
        ],
      },
      {
        week: 4,
        title: "Nigeria's road to independence",
        subtopics: ["Colonial rule in Nigeria", "Amalgamation of 1914", "Nationalist movements and leaders", "Independence and republic"],
        objectives: ["Describe the establishment of colonial rule", "Explain the amalgamation of 1914", "Identify nationalist leaders and their contributions", "State key dates in Nigeria's independence"],
        lesson: {
          title: "From Colony to Independent Nation",
          summary: "Trace Nigeria's journey from colonial rule to independence.",
          minutes: 45,
          notes: `## Colonial rule
Britain gradually took control of the areas that became Nigeria in the nineteenth century (Lagos was annexed in **1861**). The **Northern** and **Southern Protectorates** were administered separately.

## Amalgamation of 1914
On **1 January 1914**, **Lord Frederick Lugard** joined the Northern and Southern Protectorates into one country — **the Colony and Protectorate of Nigeria**. He became the first Governor-General. The name "Nigeria" was suggested by **Flora Shaw** (later Lady Lugard).
Lugard used **indirect rule** — governing through traditional rulers.

## Nationalism
**Nationalism** is a feeling of pride and loyalty to one's nation, and the struggle to end foreign rule.
| Nationalist | Contribution |
|---|---|
| **Herbert Macaulay** | often called the "father of Nigerian nationalism"; founded NNDP (1923) |
| **Nnamdi Azikiwe** | journalist, co-founded NCNC; first President (1963) |
| **Obafemi Awolowo** | founded Action Group; first Premier of the Western Region |
| **Ahmadu Bello** (Sardauna of Sokoto) | led NPC; Premier of the Northern Region |
| **Tafawa Balewa** | first Prime Minister of independent Nigeria |
| **Funmilayo Ransome-Kuti** | women's rights activist and nationalist |
| **Anthony Enahoro** | moved the 1953 motion for self-government |

## Independence
- Nigeria became **independent on 1 October 1960**.
- It became a **Republic on 1 October 1963**, with Nnamdi Azikiwe as President.`,
          examples: `**Example 1.** Who amalgamated Nigeria in 1914? *Answer:* **Lord Frederick Lugard**.

**Example 2.** When did Nigeria become independent? *Answer:* **1 October 1960**.

**Example 3.** Who moved the 1953 motion for self-government? *Answer:* **Anthony Enahoro**.`,
        },
        questions: [
          ["E", "Nigeria became independent on", "1 October 1960", "1 January 1914", "1 October 1963", "29 May 1999", "Independence Day is 1 October."],
          ["E", "The Northern and Southern Protectorates were amalgamated in", "1914", "1960", "1900", "1963", "Amalgamation took place in 1914."],
          ["E", "Who amalgamated Nigeria?", "Lord Lugard", "Nnamdi Azikiwe", "Herbert Macaulay", "Tafawa Balewa", "Lugard became Governor-General."],
          ["M", "The name 'Nigeria' was suggested by", "Flora Shaw", "Mary Slessor", "Queen Amina", "Funmilayo Ransome-Kuti", "She later married Lugard."],
          ["M", "Governing through traditional rulers under colonial rule was called", "indirect rule", "direct democracy", "military rule", "federalism", "Lugard ruled through chiefs and emirs."],
          ["M", "Nigeria's first Prime Minister was", "Tafawa Balewa", "Nnamdi Azikiwe", "Obafemi Awolowo", "Ahmadu Bello", "Balewa led the federal government."],
          ["M", "Nigeria became a republic in", "1963", "1960", "1914", "1979", "Azikiwe became President in 1963."],
          ["H", "Who is often called the 'father of Nigerian nationalism'?", "Herbert Macaulay", "Lord Lugard", "Tafawa Balewa", "Anthony Enahoro", "He founded the NNDP in 1923."],
          ["H", "The 1953 motion for self-government was moved by", "Anthony Enahoro", "Ahmadu Bello", "Herbert Macaulay", "Lord Lugard", "He moved it in the House of Representatives."],
          ["H", "Nationalism can be defined as", "loyalty to one's nation and the struggle against foreign rule", "loyalty to one's tribe only", "support for colonial rule", "trade between nations", "Nationalists fought for independence."],
        ],
      },
      {
        week: 5,
        title: "Group behaviour",
        subtopics: ["Meaning of group behaviour", "Crowd and mob behaviour", "Positive group behaviour", "Controlling negative group behaviour"],
        objectives: ["Explain group behaviour", "Distinguish crowd from mob behaviour", "Identify positive forms of group behaviour", "Suggest ways of preventing negative group behaviour"],
        lesson: {
          title: "How People Behave in Groups",
          summary: "Distinguish positive from negative group behaviour and how to act responsibly.",
          minutes: 40,
          notes: `## Meaning
**Group behaviour** is the way people act when they are together in a group. People sometimes behave differently in groups from how they behave alone.

## Crowds and mobs
- A **crowd** is a large gathering of people in one place for a common purpose or by chance — e.g. at a stadium, market, rally or religious gathering. Crowds are usually **peaceful**.
- A **mob** is a crowd that becomes **emotional, violent and lawless** — e.g. rioters, people carrying out "jungle justice".

## Why people misbehave in mobs
- **anonymity** — they feel no one will identify them
- **emotions** and rumours spread quickly
- **peer pressure** and following the leader
- anger over real or imagined injustice
- influence of drugs and alcohol

## Positive group behaviour
communal work, cooperative societies, peaceful demonstrations with permits, charity and relief work, teamwork in sports and school projects.

## Negative group behaviour
riots, looting, vandalism, **jungle justice** (mob killing of suspects), cultism, gang violence, stampedes.

## Control and prevention
- Obey the law; **never take the law into your own hands** — hand suspects to the police.
- Verify rumours before reacting.
- Leaders should communicate and settle grievances early.
- Police and crowd-control measures at large events.
- Leave any gathering that turns violent.`,
          examples: `**Example 1.** Is a peaceful gathering at a football match a crowd or a mob? *Answer:* a **crowd**.

**Example 2.** What is "jungle justice"? *Answer:* A **mob punishing a suspect** without trial, which is illegal.

**Example 3.** What should you do if a gathering becomes violent? *Answer:* **Leave the scene** and report to the authorities.`,
        },
        questions: [
          ["E", "A large gathering of people in one place is a", "crowd", "family", "census", "constitution", "Crowds gather for events."],
          ["E", "A violent, lawless crowd is a", "mob", "choir", "committee", "cooperative", "Mobs act violently."],
          ["E", "Which is a positive form of group behaviour?", "communal work", "looting", "rioting", "vandalism", "Communal work develops communities."],
          ["M", "Punishing a suspected thief by a mob without trial is called", "jungle justice", "court judgement", "mediation", "arbitration", "It is illegal and dangerous."],
          ["M", "People may misbehave in a mob because they feel", "anonymous and unidentified", "closely watched", "calm", "responsible", "Anonymity reduces self-control."],
          ["M", "What should you do if a gathering turns violent?", "leave the scene", "join the violence", "throw stones", "loot shops", "Safety comes first."],
          ["M", "A suspect caught committing a crime should be", "handed over to the police", "beaten by a mob", "burnt", "ignored forever", "Only courts may punish."],
          ["H", "Rumours spreading quickly in a crowd can lead to", "panic and violence", "better order", "peaceful dispersal always", "higher trust", "Unverified information inflames emotions."],
          ["H", "A peaceful demonstration with police permission is an example of", "positive group behaviour", "a riot", "jungle justice", "looting", "It is lawful expression of views."],
          ["H", "Which measure helps to prevent mob violence?", "addressing grievances early through dialogue", "spreading rumours", "encouraging revenge", "removing the police", "Settling grievances reduces anger."],
        ],
      },
      {
        week: 6,
        title: "Rights and responsibilities of citizens",
        subtopics: ["Meaning of citizenship", "Ways of acquiring citizenship", "Rights of citizens", "Duties and obligations of citizens"],
        objectives: ["Define citizenship", "State ways of becoming a Nigerian citizen", "Identify the fundamental rights of citizens", "Explain the duties and obligations of citizens"],
        lesson: {
          title: "Being a Good Citizen",
          summary: "Explain citizens' rights and the duties that come with them.",
          minutes: 40,
          notes: `## Meaning
A **citizen** is a legal member of a country, entitled to its **rights** and bound by its **duties**. **Citizenship** is the status of being a citizen.

## Ways of becoming a Nigerian citizen (1999 Constitution)
- **Birth**: born in or outside Nigeria to a Nigerian parent or grandparent (as provided in the Constitution).
- **Registration**: e.g. a foreign woman married to a Nigerian man.
- **Naturalisation**: a foreigner who has lived in Nigeria for the required period and meets set conditions applies and is granted citizenship.

## Fundamental rights (Chapter IV of the 1999 Constitution)
right to **life**; right to **dignity** of the human person; right to **personal liberty**; right to **fair hearing**; right to **private and family life**; freedom of **thought, conscience and religion**; freedom of **expression and the press**; freedom of **peaceful assembly and association**; freedom of **movement**; freedom from **discrimination**; right to **own property**.

## Duties and obligations
- obey the **laws** of the land
- **pay taxes**
- **vote** in elections
- respect the **national symbols**
- defend the country and help the police
- protect **public property**
- respect the rights of others
- contribute to national development

## Rights and duties go together
Every right carries a responsibility. For example, freedom of expression must not be used to spread hate or lies.`,
          examples: `**Example 1.** Name two ways of becoming a Nigerian citizen. *Answer:* **birth** and **naturalisation** (or registration).

**Example 2.** Name one fundamental right. *Answer:* **right to life** (or fair hearing, freedom of religion).

**Example 3.** Name one duty of a citizen. *Answer:* **paying taxes** (or obeying the law, voting).`,
        },
        questions: [
          ["E", "A legal member of a country is a", "citizen", "tourist", "refugee only", "visitor", "Citizens enjoy full rights."],
          ["E", "Which is a duty of a citizen?", "paying taxes", "destroying public property", "breaking laws", "insulting the flag", "Taxes fund government services."],
          ["E", "Which is a fundamental right?", "right to life", "right to steal", "right to cheat", "right to fight", "Life is the most basic right."],
          ["M", "A foreigner who lives in Nigeria for the required period and applies for citizenship obtains it by", "naturalisation", "birth", "inheritance of land", "tourism", "Naturalisation is granted on application."],
          ["M", "Fundamental rights are contained in which chapter of the 1999 Constitution?", "Chapter IV", "Chapter I", "Chapter VIII", "Chapter X", "Chapter IV lists them."],
          ["M", "The right to be heard before being judged is the right to", "fair hearing", "movement", "property", "religion", "Courts must hear both sides."],
          ["M", "Voting in elections is an example of a citizen's", "civic duty", "crime", "punishment", "tax exemption", "It chooses leaders."],
          ["H", "Why must freedom of expression be used responsibly?", "It must not be used to spread hate or lies.", "It allows any insult.", "It has no limits at all.", "It is only for leaders.", "Rights have limits that protect others."],
          ["H", "A foreign woman married to a Nigerian man may become a citizen by", "registration", "naturalisation only after 30 years", "birth", "election", "The Constitution provides for registration."],
          ["H", "Which statement about rights and duties is correct?", "Every right carries a responsibility.", "Citizens have rights but no duties.", "Only leaders have duties.", "Duties cancel all rights.", "They go together."],
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
        title: "Corruption",
        subtopics: ["Meaning of corruption", "Forms of corruption", "Causes and effects of corruption", "Anti-corruption agencies and measures"],
        objectives: ["Define corruption", "Identify forms of corruption", "Explain the causes and effects of corruption", "Describe measures and agencies fighting corruption"],
        lesson: {
          title: "Fighting Corruption",
          summary: "Identify forms of corruption, their damage and ways to fight them.",
          minutes: 40,
          notes: `## Meaning
**Corruption** is the **misuse of entrusted power or position for private gain**, or any dishonest act that goes against accepted rules.

## Forms of corruption
| Form | Example |
|---|---|
| **bribery** | giving or taking money to influence a decision |
| **embezzlement** | stealing public or company funds |
| **nepotism** | favouring relatives in appointments |
| **fraud** | deceit for financial gain, e.g. inflated contracts |
| **examination malpractice** | cheating in exams |
| **electoral fraud** | rigging, vote buying |
| **extortion** | demanding money illegally |
| **favouritism/tribalism** | unfair advantage to one's group |

## Causes
greed, poverty and low wages, weak institutions and laws, poor leadership examples, desire for quick wealth, societal pressure to "show off", lack of accountability.

## Effects
- poor roads, hospitals and schools
- unemployment and poverty
- loss of **foreign investment** and a bad national image
- incompetent people in key positions
- insecurity and loss of trust in government

## Fighting corruption
- **EFCC** (Economic and Financial Crimes Commission, established 2003)
- **ICPC** (Independent Corrupt Practices and Other Related Offences Commission, 2000)
- **Code of Conduct Bureau** (asset declaration)
- Whistle-blowing, transparency (e.g. Treasury Single Account), good leadership, value education, good wages, strict punishment.`,
          examples: `**Example 1.** A contractor pays an official to win a contract. What form of corruption is this? *Answer:* **bribery**.

**Example 2.** Name one anti-corruption agency in Nigeria. *Answer:* **EFCC** (or ICPC).

**Example 3.** Name one effect of corruption. *Answer:* **poor public services** such as bad roads and hospitals.`,
        },
        questions: [
          ["E", "The misuse of entrusted power for private gain is", "corruption", "patriotism", "integrity", "leadership", "Corruption abuses public trust."],
          ["E", "Giving money to influence an official's decision is", "bribery", "donation to charity", "tax payment", "savings", "Bribes buy unfair favours."],
          ["E", "Which agency fights economic and financial crimes in Nigeria?", "EFCC", "FRSC", "NPC", "NYSC", "The EFCC was set up in 2003."],
          ["M", "Stealing public funds entrusted to one's care is", "embezzlement", "nepotism", "bribery only", "patriotism", "It is theft by an official."],
          ["M", "Favouring relatives in appointments is", "nepotism", "integrity", "federal character", "meritocracy", "Qualified people are ignored."],
          ["M", "Which is a cause of corruption?", "greed", "contentment", "integrity", "transparency", "Desire for more drives corruption."],
          ["M", "Which is an effect of corruption?", "poor roads and hospitals", "better infrastructure", "more investment", "higher trust", "Stolen funds are not used for services."],
          ["H", "The ICPC was established in", "2000", "1960", "2015", "1979", "It was created in 2000."],
          ["H", "Reporting corrupt acts to the authorities is called", "whistle-blowing", "rigging", "extortion", "embezzlement", "Whistle-blowers expose wrongdoing."],
          ["H", "How does corruption discourage foreign investment?", "Investors fear losses through bribes and unfair treatment.", "It makes investment cheaper.", "It guarantees contracts.", "It improves the business climate.", "Uncertainty drives investors away."],
        ],
      },
      {
        week: 2,
        title: "Examination malpractice",
        subtopics: ["Meaning of examination malpractice", "Forms of examination malpractice", "Causes and effects", "Prevention and penalties"],
        objectives: ["Define examination malpractice", "Identify forms of examination malpractice", "Explain the causes and effects", "Suggest ways of preventing it"],
        lesson: {
          title: "Pass with Honour",
          summary: "Understand why examination malpractice is wrong and how to avoid it.",
          minutes: 40,
          notes: `## Meaning
**Examination malpractice** is any **dishonest act** before, during or after an examination to gain an unfair advantage.

## Forms
- bringing **notes, phones or "expo"** (leaked questions) into the hall
- **copying** from another candidate or allowing others to copy
- **impersonation** (writing an exam for someone else)
- buying **leaked question papers**
- **collusion** between candidates, teachers or officials
- **mercenaries** and "special centres"
- altering scripts or results after the exam
- bribing examiners or invigilators

## Causes
poor preparation and laziness, fear of failure, pressure from parents to pass at all costs, emphasis on certificates rather than knowledge, lack of facilities and qualified teachers, corrupt officials.

## Effects
| On the student | On society |
|---|---|
| cancellation of results, expulsion, prosecution | half-baked graduates and professionals |
| loss of self-confidence | loss of value of Nigerian certificates |
| cannot defend the certificate | unsafe professionals (e.g. poorly trained doctors, engineers) |

## Penalties
The **Examination Malpractices Act (1999)** prescribes fines and **imprisonment**. Examination bodies (WAEC, NECO, JAMB, NABTEB) cancel results and may ban candidates.

## Prevention
study hard and early; attend classes; good teaching facilities; strict invigilation; value education; parents should value knowledge over certificates.`,
          examples: `**Example 1.** Writing an examination on behalf of another person is called **impersonation**.

**Example 2.** Name one penalty for examination malpractice. *Answer:* **cancellation of results** (or imprisonment under the Act).

**Example 3.** What is the best way to avoid examination malpractice? *Answer:* **Early and thorough preparation.**`,
        },
        questions: [
          ["E", "Any dishonest act to gain unfair advantage in an examination is", "examination malpractice", "revision", "invigilation", "tutorial", "It undermines fair assessment."],
          ["E", "Writing an examination for another person is", "impersonation", "revision", "coaching", "registration", "One person pretends to be another."],
          ["E", "The best way to avoid examination malpractice is to", "prepare early and study hard", "buy leaked questions", "copy from friends", "bribe invigilators", "Preparation builds confidence."],
          ["M", "Which is a cause of examination malpractice?", "poor preparation", "hard work", "good teaching", "regular attendance", "Unprepared students are tempted to cheat."],
          ["M", "Which is a form of examination malpractice?", "bringing a phone with answers into the hall", "arriving early", "reading instructions carefully", "using an allowed calculator", "Unauthorised materials are forbidden."],
          ["M", "The law that prescribes penalties for examination malpractice is the", "Examination Malpractices Act", "Land Use Act", "Child Rights Act", "Electoral Act", "It was enacted in 1999."],
          ["M", "Which is a consequence for a candidate caught cheating?", "cancellation of results", "automatic scholarship", "promotion", "extra marks", "Results are cancelled."],
          ["H", "How does examination malpractice harm society?", "It produces unqualified graduates and professionals.", "It improves the quality of education.", "It makes certificates more valuable.", "It reduces corruption.", "Unskilled professionals endanger people."],
          ["H", "Parents contribute to examination malpractice when they", "pressure children to pass at all costs", "encourage study", "provide books", "check homework", "Pressure without support encourages cheating."],
          ["H", "A secret agreement among candidates to share answers during an exam is", "collusion", "invigilation", "revision", "registration", "Collusion is illegal cooperation."],
        ],
      },
      {
        week: 3,
        title: "Cultism and secret societies",
        subtopics: ["Meaning of cultism", "Reasons young people join cults", "Effects of cultism", "Prevention of cultism"],
        objectives: ["Define cultism", "Explain why young people join cults", "Describe the effects of cultism", "Suggest ways of preventing cultism in schools"],
        lesson: {
          title: "Stay Away from Cults",
          summary: "Explain the dangers of cultism and how students can resist it.",
          minutes: 40,
          notes: `## Meaning
**Cultism** is the practice of belonging to a **secret society** whose members swear oaths, hide their activities and often use **violence, intimidation and crime**. School cults are **illegal** in Nigeria.

## Why young people join
- **peer pressure** and desire to belong
- search for **protection** or power
- desire to **show off** or intimidate others
- poor parenting and broken homes
- drug abuse
- promises of money, girls/boys, or good grades
- ignorance of the dangers

## Effects
| On members | On schools and society |
|---|---|
| injury, death, imprisonment | violence and insecurity on campus |
| expulsion from school | disruption of academic calendar |
| drug addiction | killings and rivalry between cults |
| lifelong fear and guilt | loss of promising youths |
| family disgrace | fear among students and staff |

## Prevention
- Keep **good friends**; say **No** firmly.
- Join **positive clubs** (debate, sports, JETS, Red Cross, religious fellowships).
- Parents should monitor children and communicate with them.
- Schools should teach values, provide counselling and enforce rules.
- Report suspicious activities to school authorities or the police.
- Government should enforce laws against cults.`,
          examples: `**Example 1.** Name one reason young people join cults. *Answer:* **peer pressure** (or search for protection).

**Example 2.** Name one effect of cultism on schools. *Answer:* **violence and disruption of academic activities**.

**Example 3.** How can a student resist pressure to join a cult? *Answer:* **Refuse firmly, keep good friends and report to a teacher or counsellor.**`,
        },
        questions: [
          ["E", "Belonging to a secret society that uses violence and oaths is", "cultism", "patriotism", "scouting", "debating", "Cults operate secretly and violently."],
          ["E", "Which is a positive alternative to joining a cult?", "joining a debate or sports club", "joining a gang", "taking drugs", "skipping school", "Positive clubs build character."],
          ["E", "School cults in Nigeria are", "illegal", "encouraged by law", "compulsory", "part of the curriculum", "The law forbids them."],
          ["M", "A major reason young people join cults is", "peer pressure", "good parenting", "hard work", "regular study", "Friends often recruit others."],
          ["M", "Which is an effect of cultism on members?", "expulsion from school", "higher grades", "scholarships", "better health", "Schools expel cult members."],
          ["M", "Which is an effect of cultism on schools?", "violence and disruption of academic activities", "improved discipline", "more peace", "better examination results", "Cult clashes disrupt schools."],
          ["M", "Students should report suspicious cult activities to", "school authorities or the police", "cult leaders", "nobody", "social media only", "Authorities can act."],
          ["H", "How can parents help to prevent cultism?", "by monitoring and communicating with their children", "by ignoring their children's friends", "by encouraging violence", "by giving unlimited money without questions", "Involved parents notice warning signs."],
          ["H", "Cult members are often bound to secrecy by", "oaths", "school rules", "national anthem", "report cards", "Oaths create fear."],
          ["H", "Why does drug abuse often go hand in hand with cultism?", "Drugs lower inhibition and are used to embolden members", "drugs improve study", "drugs are part of the school curriculum", "drugs reduce violence", "Drugs fuel violent behaviour."],
        ],
      },
      {
        week: 4,
        title: "HIV/AIDS and other sexually transmitted infections",
        subtopics: ["Meaning of STIs and HIV/AIDS", "Modes of transmission", "Effects on individuals and society", "Prevention and stigma"],
        objectives: ["Explain what STIs and HIV/AIDS are", "Identify modes of transmission of HIV", "Describe the effects of HIV/AIDS on the family and society", "State preventive measures and explain why stigma is wrong"],
        lesson: {
          title: "HIV/AIDS: Facts and Prevention",
          summary: "Understand HIV/AIDS and STIs, how they spread and how to prevent them.",
          minutes: 40,
          notes: `## Meanings
- **Sexually transmitted infections (STIs)** are infections passed mainly through sexual contact, e.g. **gonorrhoea**, **syphilis**, **chlamydia**, **hepatitis B** and **HIV**.
- **HIV (Human Immunodeficiency Virus)** attacks the body's **immune system**.
- **AIDS (Acquired Immune Deficiency Syndrome)** is the advanced stage of HIV infection, when the body can no longer fight diseases.

## Modes of HIV transmission
- unprotected sexual contact with an infected person
- transfusion of **unscreened blood**
- sharing **needles, razors** and other sharp objects
- from an infected **mother to child** (during pregnancy, birth or breastfeeding) — greatly reduced with treatment

## HIV is NOT spread by
hugging, shaking hands, sharing plates, cups or toilets, mosquito bites, or playing together.

## Effects
| Individual and family | Society |
|---|---|
| frequent illness | loss of productive workers |
| cost of treatment | more orphans |
| emotional stress | pressure on hospitals |
| stigma and discrimination | reduced economic growth |

## Prevention
- **Abstinence** is the best choice for young people.
- Faithfulness to one uninfected partner in marriage.
- Use only **sterilised** needles and blades; do not share sharp objects.
- Screen all blood before transfusion.
- Voluntary **testing** and counselling; **antiretroviral therapy (ART)** helps people live long, healthy lives.

## Stigma
People living with HIV deserve **care, respect and support**. Discrimination discourages testing and treatment.`,
          examples: `**Example 1.** Can HIV be spread by shaking hands? *Answer:* **No**.

**Example 2.** What is the best way for young people to avoid STIs? *Answer:* **abstinence**.

**Example 3.** Which system of the body does HIV attack? *Answer:* the **immune system**.`,
        },
        questions: [
          ["E", "HIV attacks the body's", "immune system", "skeletal system", "digestive system", "skin colour", "It weakens the body's defences."],
          ["E", "Which is an STI?", "gonorrhoea", "malaria", "cholera", "measles", "It spreads through sexual contact."],
          ["E", "The best way for young people to avoid STIs is", "abstinence", "sharing razors", "unscreened blood", "ignoring health advice", "Abstinence avoids sexual transmission."],
          ["M", "Which can spread HIV?", "sharing needles with an infected person", "shaking hands", "hugging", "sharing cups", "Infected blood carries the virus."],
          ["M", "HIV is NOT spread by", "mosquito bites", "unscreened blood transfusion", "sharing needles", "unprotected sex with an infected person", "Mosquitoes do not transmit HIV."],
          ["M", "The advanced stage of HIV infection is", "AIDS", "malaria", "tuberculosis only", "measles", "The immune system is severely damaged."],
          ["M", "Drugs that help people living with HIV stay healthy are called", "antiretroviral drugs", "antibiotics for colds", "painkillers only", "vitamins only", "ART controls the virus."],
          ["H", "Why is stigma against people living with HIV harmful?", "It discourages testing and treatment.", "It prevents transmission.", "It cures HIV.", "It improves care.", "Fear of stigma keeps people from seeking help."],
          ["H", "Which is an effect of HIV/AIDS on society?", "loss of productive workers", "increase in workforce", "fewer orphans", "less pressure on hospitals", "Illness reduces the labour force."],
          ["H", "Screening blood before transfusion helps to", "prevent transmission of HIV and hepatitis", "increase blood supply", "change blood groups", "cure anaemia", "Unscreened blood may carry infections."],
        ],
      },
      {
        week: 5,
        title: "Harmful traditional practices",
        subtopics: ["Meaning of harmful traditional practices", "Examples of harmful practices", "Effects on individuals and society", "Eliminating harmful practices"],
        objectives: ["Define harmful traditional practices", "Identify harmful practices in Nigerian communities", "Explain their effects", "Suggest ways of eliminating them"],
        lesson: {
          title: "Ending Harmful Practices",
          summary: "Identify harmful traditional practices and ways to end them.",
          minutes: 40,
          notes: `## Meaning
**Harmful traditional practices** are customs and beliefs handed down in a community that **endanger the health, rights or dignity** of people, especially women and children.

## Examples
| Practice | Harm |
|---|---|
| **female genital mutilation (FGM)** | bleeding, infection, childbirth complications, lifelong pain |
| **early/forced marriage** | school dropout, **VVF** (vesico-vaginal fistula) from childbirth at a young age |
| harmful **widowhood rites** | humiliation, isolation, disinheritance of widows |
| denial of **inheritance** to women and girls | poverty and injustice |
| **son preference**; denying girls education | inequality and poverty |
| **food taboos** for pregnant women/children (e.g. no eggs) | malnutrition |
| **tribal/facial marks** | pain, infection, stigma |
| labelling children as **witches** | abuse, abandonment, death |

## Effects
poor health and death, school dropout, poverty, low self-esteem, gender inequality and slow development.

## Elimination
- **Education and enlightenment** of communities
- **Laws**: Violence Against Persons (Prohibition) Act 2015 (prohibits FGM and harmful widowhood practices), Child Rights Act
- involvement of **traditional and religious leaders**
- **empowerment** of women and girls
- reporting abuses to the authorities and NGOs
- keeping useful traditions while dropping harmful ones`,
          examples: `**Example 1.** Name one harmful traditional practice. *Answer:* **female genital mutilation** (or early marriage).

**Example 2.** What health problem is linked with early childbirth? *Answer:* **VVF (vesico-vaginal fistula)**.

**Example 3.** Name one law against harmful practices. *Answer:* the **Violence Against Persons (Prohibition) Act 2015**.`,
        },
        questions: [
          ["E", "Customs that endanger people's health or rights are called", "harmful traditional practices", "national symbols", "social institutions", "good values", "They cause harm."],
          ["E", "Which is a harmful traditional practice?", "female genital mutilation", "naming ceremony", "greeting elders", "harvest festival", "FGM causes serious harm."],
          ["E", "The best way to end harmful practices is through", "education and enlightenment", "keeping them secret", "punishing victims", "ignoring them", "Awareness changes attitudes."],
          ["M", "Early marriage often leads to", "school dropout", "higher education", "better health", "more scholarships", "Girls leave school to marry."],
          ["M", "VVF is a health problem often linked to", "childbirth at a very young age", "eating vegetables", "exercise", "good hygiene", "Young mothers face obstructed labour."],
          ["M", "Denying girls education because of son preference leads to", "gender inequality", "equal opportunity", "better development", "higher literacy", "Girls are left behind."],
          ["M", "Forbidding pregnant women to eat eggs can cause", "malnutrition", "better health", "stronger bones", "higher income", "Protein-rich food is denied."],
          ["H", "The Violence Against Persons (Prohibition) Act was passed in", "2015", "1960", "1999", "1914", "It prohibits FGM and harmful widowhood practices."],
          ["H", "Why should traditional and religious leaders be involved in ending harmful practices?", "Communities respect and follow them.", "They have no influence.", "They make practices worse.", "Laws do not apply to them.", "Their support changes community behaviour."],
          ["H", "Labelling children as witches often leads to", "abuse and abandonment", "better care", "education", "protection", "It exposes children to violence."],
        ],
      },
      {
        week: 6,
        title: "Drug trafficking and its dangers",
        subtopics: ["Meaning of drug trafficking", "Causes of drug trafficking", "Effects on individuals and the nation", "Role of NDLEA and prevention"],
        objectives: ["Define drug trafficking", "Explain why people engage in drug trafficking", "Describe the effects on individuals and the nation", "Describe the role of NDLEA and ways of prevention"],
        lesson: {
          title: "Drug Trafficking: A Deadly Trade",
          summary: "Explain drug trafficking, its dangers and how it is fought.",
          minutes: 40,
          notes: `## Meaning
**Drug trafficking** is the **illegal production, sale, transportation or importation** of controlled substances such as cannabis, cocaine, heroin, methamphetamine, and pharmaceutical drugs like tramadol and codeine when diverted for abuse.
It differs from **drug abuse** (using drugs wrongly), although the two are linked.

## Methods traffickers use
swallowing wraps of drugs, hiding drugs in luggage, food items or body cavities, using unsuspecting people as couriers, online sales.

## Causes
greed and desire for quick wealth, poverty and unemployment, peer influence, weak border control, corruption, demand for drugs.

## Effects
| On individuals | On the nation |
|---|---|
| imprisonment or death penalty in some countries | bad international image; Nigerians harassed at airports |
| death when swallowed wraps burst | rise in crime and insecurity |
| addiction | loss of productive youths |
| family disgrace | corruption of officials |

## NDLEA
The **National Drug Law Enforcement Agency** (established **1989**):
- arrests and prosecutes traffickers
- seizes and destroys illegal drugs
- runs drug education campaigns
- counsels and rehabilitates users

## Prevention
Never carry luggage for strangers; say **No** to quick-money offers; report suspicious persons; education and job creation; strong border controls.`,
          examples: `**Example 1.** Which agency fights drug trafficking in Nigeria? *Answer:* the **NDLEA**.

**Example 2.** Why should you never carry a package for a stranger at an airport? *Answer:* It may contain **illegal drugs**, and you would be arrested as a trafficker.

**Example 3.** Name one effect of drug trafficking on the nation. *Answer:* a **bad international image** (or crime and insecurity).`,
        },
        questions: [
          ["E", "The illegal sale and transport of drugs is", "drug trafficking", "drug prescription", "pharmacy practice", "vaccination", "It is a serious crime."],
          ["E", "The agency that fights drug trafficking in Nigeria is the", "NDLEA", "NAPTIP", "FRSC", "NPC", "NDLEA enforces drug laws."],
          ["E", "You should never", "carry a package for a stranger", "report suspicious persons", "refuse quick-money offers", "study hard", "Strangers may use you as a courier."],
          ["M", "A major cause of drug trafficking is", "greed for quick wealth", "contentment", "hard work", "patriotism", "Traffickers seek fast money."],
          ["M", "The NDLEA was established in", "1989", "1960", "2003", "2015", "It was set up in 1989."],
          ["M", "Which is an effect of drug trafficking on the nation?", "a bad international image", "more foreign respect", "less crime", "stronger youths", "Nigeria's reputation suffers."],
          ["M", "Which is a function of the NDLEA?", "seizing and destroying illegal drugs", "conducting census", "registering voters", "issuing driving licences", "It enforces drug laws."],
          ["H", "Swallowing wraps of drugs to smuggle them can cause", "death when a wrap bursts", "better health", "weight gain only", "nothing harmful", "The drugs enter the bloodstream in lethal doses."],
          ["H", "How does drug trafficking differ from drug abuse?", "Trafficking is dealing in drugs; abuse is misusing them.", "They are exactly the same.", "Abuse is legal; trafficking is not.", "Trafficking involves only medicines.", "One is trade; the other is use."],
          ["H", "Which measure helps to reduce drug trafficking?", "job creation and strong border control", "weaker laws", "corrupt officials", "ignoring airports", "Opportunities and enforcement reduce it."],
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
        title: "Transport",
        subtopics: ["Meaning and importance of transport", "Means of transport", "Advantages and disadvantages of each means", "Problems of transport in Nigeria"],
        objectives: ["Explain the importance of transport", "Identify the means of transport", "Compare the advantages and disadvantages of road, rail, water, air and pipeline transport", "Discuss problems of transport in Nigeria and solutions"],
        lesson: {
          title: "Moving People and Goods",
          summary: "Compare means of transport and discuss Nigeria's transport problems.",
          minutes: 40,
          notes: `## Meaning and importance
**Transport** is the movement of **people and goods** from one place to another.
Importance: links producers and consumers, promotes trade and industry, creates jobs, aids national unity and tourism, supports defence and emergency services.

## Means of transport
| Means | Advantages | Disadvantages |
|---|---|---|
| **road** (cars, buses, lorries, motorcycles) | door-to-door, flexible, cheap for short distances | accidents, traffic jams, bad roads |
| **rail** | cheap for heavy, bulky goods over long distances; safe | fixed routes, slow to build, limited network |
| **water** (ships, boats, canoes) | cheapest for bulky goods; international trade | slow; limited to waterways and ports |
| **air** | fastest; good for long distances and perishables | most expensive; limited cargo; needs airports |
| **pipeline** | cheap for oil, gas and water; continuous flow | only for liquids/gases; vandalism; expensive to lay |

## Nigerian examples
Lagos–Ibadan and Abuja–Kaduna standard-gauge railways; seaports at Apapa, Tin Can, Onne and Lekki; international airports in Lagos, Abuja, Kano and Port Harcourt; inland waterways on the Niger and Benue.

## Problems of transport in Nigeria
bad roads and potholes, traffic congestion, accidents, high fares, insecurity (kidnapping on highways), pipeline vandalism, poorly maintained vehicles, limited railway network.

## Solutions
road construction and maintenance, expansion of railways, enforcement of traffic laws, security on highways, public mass transit systems.`,
          examples: `**Example 1.** Which means of transport is fastest over long distances? *Answer:* **air transport**.

**Example 2.** Which is cheapest for moving crude oil? *Answer:* **pipeline**.

**Example 3.** Name one problem of road transport in Nigeria. *Answer:* **bad roads** (or traffic jams, accidents).`,
        },
        questions: [
          ["E", "The movement of people and goods from one place to another is", "transport", "communication", "production", "consumption", "Transport moves people and goods."],
          ["E", "The fastest means of transport over long distances is", "air", "road", "rail", "water", "Aeroplanes are the fastest."],
          ["E", "Crude oil is best moved over long distances by", "pipeline", "bicycle", "canoe", "motorcycle", "Pipelines carry liquids continuously."],
          ["M", "Which means of transport offers door-to-door service?", "road", "rail", "air", "pipeline", "Vehicles can reach homes directly."],
          ["M", "The cheapest means of transporting bulky goods internationally is", "water (ships)", "air", "road", "motorcycle", "Ships carry huge loads cheaply."],
          ["M", "A disadvantage of air transport is that it is", "expensive", "slow", "limited to waterways", "only for liquids", "Air freight costs are high."],
          ["M", "Which is a problem of transport in Nigeria?", "bad roads", "too many good roads", "excess railways", "no vehicles", "Potholes cause delays and accidents."],
          ["H", "Rail transport is especially suitable for", "heavy, bulky goods over long distances", "door-to-door delivery", "very short trips", "urgent letters only", "Trains haul large loads cheaply."],
          ["H", "Pipeline vandalism is a problem because it", "causes fuel scarcity, fires and pollution", "improves supply", "lowers prices", "creates safe jobs", "Damaged pipelines leak and explode."],
          ["H", "How does good transport promote national unity?", "It makes contact between different regions easier.", "It keeps people apart.", "It increases tribalism.", "It stops trade.", "Movement brings people together."],
        ],
      },
      {
        week: 2,
        title: "Communication",
        subtopics: ["Meaning of communication", "Traditional means of communication", "Modern means of communication", "Importance and problems of communication"],
        objectives: ["Define communication", "Identify traditional means of communication", "Identify modern means of communication", "Explain the importance and problems of communication"],
        lesson: {
          title: "Sharing Information",
          summary: "Compare traditional and modern communication and their uses.",
          minutes: 40,
          notes: `## Meaning
**Communication** is the process of **sending and receiving information, ideas and messages** between people.
Elements: **sender**, **message**, **medium (channel)**, **receiver**, **feedback**.

## Traditional means
| Means | Use |
|---|---|
| **town crier** | announcing messages in the community (often with a gong) |
| **talking drum** | sending coded messages |
| **gong** | calling attention |
| **smoke and fire signals** | signalling over distance |
| **messengers** | carrying messages |
| **symbols** (e.g. palm fronds tied on land) | warning or claiming ownership |
| **gunshots** | announcing death of a chief or emergency |

## Modern means
telephone (mobile phones), **internet** (email, social media, video calls), radio, television, newspapers and magazines, postal services and courier, satellites, SMS.

## Importance
- spreads information and education
- promotes trade and business
- promotes national unity and security
- helps in emergencies
- entertainment

## Problems
high cost of data and calls, poor network coverage in rural areas, power supply problems, **spread of fake news**, cybercrime, and illiteracy.

## Good communication skills
listen carefully, speak clearly, be polite, verify information before sharing.`,
          examples: `**Example 1.** Name a traditional means of communication. *Answer:* the **town crier** (or talking drum).

**Example 2.** Name a modern means of communication. *Answer:* the **mobile phone** (or internet, radio).

**Example 3.** What is feedback in communication? *Answer:* the **receiver's response** to the message.`,
        },
        questions: [
          ["E", "Sending and receiving information is", "communication", "transport", "production", "taxation", "It shares messages."],
          ["E", "Which is a traditional means of communication?", "town crier", "email", "television", "satellite", "Town criers announce messages."],
          ["E", "Which is a modern means of communication?", "mobile phone", "talking drum", "smoke signal", "gong", "It uses modern technology."],
          ["M", "The talking drum is used to", "send coded messages", "cook food", "store water", "measure rainfall", "Its tones imitate speech."],
          ["M", "The person or thing that receives a message is the", "receiver", "sender", "channel", "noise", "The receiver decodes the message."],
          ["M", "The response of the receiver to a message is called", "feedback", "noise", "medium", "encoding", "Feedback completes the process."],
          ["M", "Which is a problem of modern communication in Nigeria?", "poor network coverage in rural areas", "too few phones anywhere", "no radio stations", "no newspapers", "Rural areas lack coverage."],
          ["H", "Spreading unverified information online can lead to", "panic and conflict", "better understanding", "national unity", "accurate knowledge", "Fake news misleads people."],
          ["H", "Which element of communication refers to the means through which a message is sent?", "medium (channel)", "feedback", "receiver", "noise", "The channel carries the message."],
          ["H", "Good communication promotes national security by", "spreading timely information about threats", "hiding information", "encouraging rumours", "cutting off contact", "Timely alerts help prevention."],
        ],
      },
      {
        week: 3,
        title: "Natural resources and their management",
        subtopics: ["Meaning of resources", "Types of resources", "Nigeria's natural resources", "Conservation and resource management"],
        objectives: ["Define resources", "Distinguish renewable from non-renewable resources", "Identify Nigeria's major natural resources", "Explain ways of managing resources wisely"],
        lesson: {
          title: "Using Our Resources Wisely",
          summary: "Identify Nigeria's resources and ways of managing them sustainably.",
          minutes: 40,
          notes: `## Meaning
**Resources** are things that people use to satisfy their needs. **Natural resources** are provided by nature.

## Types of resources
| Type | Meaning | Examples |
|---|---|---|
| **natural** | given by nature | land, water, forests, minerals, wildlife |
| **human** | people's skills, knowledge and labour | teachers, doctors, farmers |
| **man-made (capital)** | created by people | roads, machines, buildings |
| **renewable** | can be replaced naturally | forests, water, solar energy, fish |
| **non-renewable** | cannot be replaced once used up | crude oil, coal, tin, gold |

## Nigeria's natural resources
crude oil and natural gas, coal, tin and columbite, limestone, iron ore, gold, bitumen, fertile land, forests, rivers and wildlife.

## Problems of resource use
over-exploitation, deforestation, pollution (oil spills), illegal mining, poaching, waste, conflicts over resources.

## Resource management (conservation)
- **afforestation** and reforestation
- game reserves and national parks (Yankari, Old Oyo, Cross River National Park)
- **recycling** and reducing waste
- laws against illegal mining, logging and poaching
- clean-up of polluted areas
- **diversifying** the economy beyond oil
- developing human resources through education and health care`,
          examples: `**Example 1.** Is crude oil renewable or non-renewable? *Answer:* **non-renewable**.

**Example 2.** Give an example of a human resource. *Answer:* a **teacher** (or doctor, engineer).

**Example 3.** Name one way of conserving forests. *Answer:* **afforestation** (planting trees).`,
        },
        questions: [
          ["E", "Things people use to satisfy their needs are called", "resources", "problems", "diseases", "institutions", "Resources meet human needs."],
          ["E", "Which is a natural resource?", "forest", "road", "school building", "computer", "Forests are provided by nature."],
          ["E", "Which is a non-renewable resource?", "crude oil", "sunlight", "wind", "rainwater", "Oil cannot be replaced quickly."],
          ["M", "The skills and labour of people are", "human resources", "natural resources", "mineral resources", "wildlife", "People are a key resource."],
          ["M", "Which is a renewable resource?", "forests", "coal", "tin", "gold", "Trees can be replanted."],
          ["M", "Roads and machines are examples of", "man-made resources", "natural resources", "human resources", "wildlife", "They are created by people."],
          ["M", "Planting trees where there were none before is", "afforestation", "deforestation", "erosion", "poaching", "It creates new forests."],
          ["H", "Why should Nigeria diversify its economy beyond oil?", "Oil is non-renewable and its price is unstable.", "Oil will last forever.", "Agriculture is useless.", "Other sectors cannot grow.", "Dependence on one resource is risky."],
          ["H", "Illegal hunting of protected animals is called", "poaching", "afforestation", "recycling", "irrigation", "Poaching threatens wildlife."],
          ["H", "Yankari is an example of a measure to", "conserve wildlife", "mine gold", "drill oil", "build factories", "It is a protected game reserve."],
        ],
      },
      {
        week: 4,
        title: "Tourism",
        subtopics: ["Meaning of tourism", "Tourist attractions in Nigeria", "Importance of tourism", "Problems and development of tourism"],
        objectives: ["Define tourism", "Identify tourist attractions in Nigeria", "Explain the importance of tourism", "Discuss problems of tourism and ways to develop it"],
        lesson: {
          title: "Visiting and Showcasing Nigeria",
          summary: "Identify Nigerian tourist attractions and the value of tourism.",
          minutes: 40,
          notes: `## Meaning
**Tourism** is **travelling for pleasure, recreation, culture, business or study**, and the industry that provides services for travellers (hotels, transport, guides).

## Tourist attractions in Nigeria
| Attraction | Location |
|---|---|
| **Yankari Game Reserve** (Wikki Warm Springs) | Bauchi |
| **Obudu Mountain Resort** | Cross River |
| **Osun Osogbo Sacred Grove** (UNESCO World Heritage Site) | Osun |
| **Sukur Cultural Landscape** (UNESCO World Heritage Site) | Adamawa |
| **Olumo Rock** | Abeokuta, Ogun |
| **Zuma Rock** | Niger State (near Abuja) |
| **Erin Ijesha (Olumirin) Waterfalls** | Osun |
| **Idanre Hills** | Ondo |
| **Argungu Fishing Festival** | Kebbi |
| **Calabar Carnival** | Cross River |
| **Durbar festivals** | Kano, Katsina and other northern cities |
| **National Museum** and beaches (e.g. Lekki) | Lagos |

## Importance
earns **foreign exchange**, creates **jobs** (hotels, guides, transport, crafts), promotes **culture** and national image, encourages infrastructure, promotes understanding among peoples.

## Problems
insecurity, poor roads and facilities, poor maintenance of sites, inadequate publicity, high costs, and poor customer service.

## Development
improve security and infrastructure, advertise attractions, train hospitality workers, protect heritage sites, encourage local tourism. The **Nigerian Tourism Development Authority (NTDA)** promotes tourism.`,
          examples: `**Example 1.** In which state is Obudu Mountain Resort? *Answer:* **Cross River State**.

**Example 2.** Name one UNESCO World Heritage Site in Nigeria. *Answer:* **Osun Osogbo Sacred Grove** (or Sukur).

**Example 3.** Give one importance of tourism. *Answer:* It **earns foreign exchange** (or creates jobs).`,
        },
        questions: [
          ["E", "Travelling for pleasure, culture or recreation is", "tourism", "migration for work", "census", "transport only", "Tourists visit places of interest."],
          ["E", "Yankari Game Reserve is in", "Bauchi State", "Lagos State", "Rivers State", "Enugu State", "Yankari is in Bauchi."],
          ["E", "Olumo Rock is located in", "Abeokuta", "Kano", "Jos", "Port Harcourt", "Olumo Rock is in Ogun State."],
          ["M", "Obudu Mountain Resort is located in", "Cross River State", "Plateau State", "Ondo State", "Kebbi State", "It is on the Obudu plateau."],
          ["M", "Which is a UNESCO World Heritage Site in Nigeria?", "Osun Osogbo Sacred Grove", "Lekki Toll Gate", "Kainji Dam", "Third Mainland Bridge", "It was inscribed by UNESCO."],
          ["M", "The Argungu Fishing Festival takes place in", "Kebbi State", "Delta State", "Oyo State", "Imo State", "It is held at Argungu."],
          ["M", "Which is an importance of tourism?", "earning foreign exchange", "increasing insecurity", "destroying culture", "reducing jobs", "Foreign visitors spend money."],
          ["H", "A major problem hindering tourism in Nigeria is", "insecurity", "too many visitors", "excellent roads everywhere", "low prices", "Tourists avoid unsafe places."],
          ["H", "Zuma Rock is located close to", "Abuja", "Calabar", "Maiduguri", "Lagos Island", "It is in Niger State near Abuja."],
          ["H", "Which agency promotes tourism in Nigeria?", "Nigerian Tourism Development Authority", "NDLEA", "INEC", "NAPTIP", "The NTDA promotes tourism."],
        ],
      },
      {
        week: 5,
        title: "Unemployment",
        subtopics: ["Meaning of unemployment", "Types of unemployment", "Causes and effects", "Solutions and self-reliance"],
        objectives: ["Define unemployment", "Identify types of unemployment", "Explain the causes and effects of unemployment", "Suggest solutions, including skills acquisition and self-employment"],
        lesson: {
          title: "Tackling Unemployment",
          summary: "Explain the causes and effects of unemployment and how to create opportunities.",
          minutes: 40,
          notes: `## Meaning
**Unemployment** is a situation in which people who are **able and willing to work** cannot find jobs.
**Underemployment** is when people work fewer hours than they want, or in jobs below their skills.

## Types
| Type | Meaning |
|---|---|
| **structural** | skills do not match available jobs (e.g. due to new technology) |
| **seasonal** | work available only at certain times (e.g. farm labourers in the dry season) |
| **frictional** | temporary, while changing jobs |
| **cyclical** | due to a fall in economic activity (recession) |

## Causes
rapid population growth, education not linked to skills, rural–urban migration, collapse of industries, poor power supply, corruption, preference for white-collar jobs, lack of capital.

## Effects
poverty, crime (armed robbery, internet fraud, kidnapping), drug abuse, political thuggery, brain drain, frustration, loss of national output.

## Solutions
- **skills acquisition** and vocational/technical training
- entrepreneurship education and **self-employment**
- access to **loans** and grants for small businesses
- improving power supply and infrastructure
- revitalising **agriculture** and industries
- attracting investment; reducing corruption

## Self-reliance
Many trades offer self-employment: tailoring, catering, hairdressing, phone repair, solar installation, poultry, fish farming, carpentry, digital skills.`,
          examples: `**Example 1.** A graduate with skills that no longer match available jobs faces which type of unemployment? *Answer:* **structural unemployment**.

**Example 2.** Name one effect of unemployment. *Answer:* **increase in crime** (or poverty).

**Example 3.** Name one solution to unemployment. *Answer:* **skills acquisition** and self-employment.`,
        },
        questions: [
          ["E", "A situation where people able and willing to work cannot find jobs is", "unemployment", "employment", "retirement", "promotion", "They lack jobs."],
          ["E", "Which is an effect of unemployment?", "increase in crime", "higher national output", "less poverty", "more tax revenue", "Idle youths may turn to crime."],
          ["E", "Learning a trade such as tailoring helps to reduce unemployment through", "self-employment", "migration", "crime", "dependence", "People create their own jobs."],
          ["M", "Farm labourers who have no work in the dry season suffer", "seasonal unemployment", "structural unemployment", "frictional unemployment", "cyclical unemployment", "Work depends on seasons."],
          ["M", "Unemployment caused by a mismatch between skills and available jobs is", "structural", "seasonal", "frictional", "voluntary", "Skills no longer fit jobs."],
          ["M", "Which is a cause of unemployment?", "rapid population growth", "industrial expansion", "better skills training", "more investment", "Job seekers outnumber jobs."],
          ["M", "Temporary unemployment while changing jobs is", "frictional unemployment", "structural unemployment", "seasonal unemployment", "disguised unemployment", "It occurs between jobs."],
          ["H", "Working fewer hours than you want or in a job below your skills is", "underemployment", "overemployment", "retirement", "full employment", "Skills are underused."],
          ["H", "How does poor power supply contribute to unemployment?", "Industries close or cannot expand.", "It creates more factories.", "It increases production.", "It has no effect.", "Businesses depend on electricity."],
          ["H", "Loss of skilled professionals who move abroad for work is called", "brain drain", "brain gain", "urbanisation", "naturalisation", "Nigeria loses trained people."],
        ],
      },
      {
        week: 6,
        title: "Savings and investment",
        subtopics: ["Meaning of savings", "Ways of saving money", "Meaning and forms of investment", "Importance of savings and investment"],
        objectives: ["Define savings and investment", "Identify traditional and modern ways of saving", "Identify forms of investment", "Explain the importance of saving and investing"],
        lesson: {
          title: "Saving for Tomorrow",
          summary: "Explain why and how people save and invest money.",
          minutes: 40,
          notes: `## Savings
**Savings** is the part of income that is **not spent** on immediate consumption but kept for future use.
**Savings = income − consumption (spending)**

## Ways of saving
| Traditional | Modern |
|---|---|
| **esusu / ajo / adashe** (rotating contribution groups) | **bank savings accounts** |
| daily contribution collectors | **fixed deposits** |
| keeping money at home (unsafe) | microfinance banks |
| saving in livestock or land | cooperative societies |
| | mobile money and digital savings apps (licensed) |

## Investment
**Investment** is using money or resources to **acquire assets that will produce more income** in the future.
Forms: starting or expanding a business; buying **shares** and bonds; real estate; agriculture (e.g. poultry, fish farming); education and skills (investing in oneself).

## Importance
- **Individuals**: security in emergencies, meeting future needs (school fees), starting a business, earning interest or profit.
- **Nation**: banks lend savings to businesses; creates jobs, increases production and economic growth.

## Wise habits
make a **budget**; avoid waste and unnecessary spending; save regularly; use **licensed** banks and investments; beware of **Ponzi schemes** promising unrealistic returns.`,
          examples: `**Example 1.** A trader earns ₦50,000 and spends ₦40,000. How much does she save? *Answer:* **₦10,000**.

**Example 2.** Name a traditional method of saving. *Answer:* **esusu/ajo/adashe**.

**Example 3.** Why should people avoid Ponzi schemes? *Answer:* They promise **unrealistic returns** and usually collapse, causing losses.`,
        },
        questions: [
          ["E", "The part of income that is not spent is", "savings", "consumption", "tax", "debt", "Savings are kept for the future."],
          ["E", "Which is a modern way of saving?", "bank savings account", "keeping cash under the mattress", "burying money", "hiding money in a pot", "Banks keep money safely."],
          ["E", "Esusu or ajo is a", "traditional contribution system", "type of bank loan", "government tax", "school subject", "Members contribute and take turns."],
          ["M", "A trader earns ₦50,000 and spends ₦40,000. Her savings are", "₦10,000", "₦90,000", "₦40,000", "₦50,000", "₦50,000 − ₦40,000 = ₦10,000."],
          ["M", "Using money to acquire assets that produce future income is", "investment", "consumption", "donation", "taxation", "Investments generate returns."],
          ["M", "Buying shares in a company is a form of", "investment", "consumption", "tax payment", "donation", "Shareholders earn dividends."],
          ["M", "Which is an importance of saving?", "meeting emergencies", "wasting money", "increasing debt", "encouraging extravagance", "Savings provide security."],
          ["H", "How do savings help the national economy?", "Banks lend savings to businesses, creating jobs.", "Savings are destroyed.", "Savings reduce production.", "Savings stop trade.", "Savings fund investment."],
          ["H", "A scheme promising unrealistically high returns and paying old investors with new investors' money is a", "Ponzi scheme", "fixed deposit", "cooperative society", "savings account", "Such schemes collapse."],
          ["H", "Paying for training in a useful skill is best described as", "investing in oneself", "wasting money", "consumption only", "tax evasion", "Skills increase future income."],
        ],
      },
    ],
  },
];
