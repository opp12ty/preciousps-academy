import type { TermPlan } from "../types";

/** JSS1 Social Studies — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and scope of Social Studies",
        subtopics: ["Meaning of Social Studies", "Scope of Social Studies", "Objectives of Social Studies", "Importance of Social Studies"],
        objectives: ["Explain the meaning of Social Studies", "Describe the scope of Social Studies", "State the objectives of Social Studies", "Explain why Social Studies is important to the individual and society"],
        lesson: {
          title: "What Is Social Studies?",
          summary: "Understand Social Studies as the study of people and their environment.",
          minutes: 40,
          notes: `## Meaning
**Social Studies** is the study of **people (man) in relation to their environment** — how people live, work, relate with one another and solve problems in society.

## The environment
- **Physical environment**: natural things around us — land, rivers, hills, vegetation, climate.
- **Social environment**: people and what they create — family, school, religion, government, culture, markets.

## Scope
Social Studies draws ideas from many subjects:
| Subject | Contribution |
|---|---|
| History | past events and people |
| Geography | location, climate, resources |
| Economics | production, money, trade |
| Government | rules, leadership, citizenship |
| Sociology | groups, family, social problems |
| Religion and ethics | values and morals |

## Objectives
- To produce **good and responsible citizens**.
- To develop positive **values and attitudes** (honesty, tolerance, cooperation).
- To promote **national unity** and pride in Nigerian culture.
- To help learners **solve problems** in their community.
- To create awareness of the environment and how to protect it.

## Importance
It helps us understand ourselves and others, respect other cultures, make good decisions, and contribute to the development of our community and nation.`,
          examples: `**Example 1.** Is a river part of the physical or the social environment? *Answer:* **physical environment**.

**Example 2.** Name one subject from which Social Studies draws ideas. *Answer:* **History** (or Geography, Economics, Government).

**Example 3.** Give one objective of Social Studies. *Answer:* **to produce good and responsible citizens**.`,
        },
        questions: [
          ["E", "Social Studies is the study of", "people in relation to their environment", "only rocks and minerals", "only numbers", "only plants", "It studies how people live in their environment."],
          ["E", "Which is part of the physical environment?", "hills", "schools", "markets", "churches", "Hills are natural features."],
          ["E", "Which is part of the social environment?", "the family", "rivers", "rainfall", "vegetation", "The family is a human creation."],
          ["M", "Social Studies draws knowledge from subjects such as", "History, Geography and Economics", "Physics only", "Mathematics only", "Chemistry and Physics only", "It is an integrated subject."],
          ["M", "A major objective of Social Studies is to", "produce good and responsible citizens", "make students rich quickly", "teach only farming", "replace all other subjects", "Citizenship is central to the subject."],
          ["M", "Which value does Social Studies promote?", "tolerance", "greed", "laziness", "dishonesty", "Tolerance helps people live together."],
          ["M", "The environment made up of people and what they create is the", "social environment", "physical environment", "solar environment", "marine environment", "It includes institutions and culture."],
          ["H", "Social Studies helps to promote national unity by", "teaching respect for other cultures", "encouraging tribalism", "discouraging cooperation", "ignoring other ethnic groups", "Understanding others reduces conflict."],
          ["H", "Which statement best describes the scope of Social Studies?", "It covers man's relationships with his physical and social environment.", "It covers only the history of Europe.", "It covers only farming methods.", "It covers only religious worship.", "Its scope is broad and integrated."],
          ["H", "How does Social Studies help in solving community problems?", "It develops skills for identifying and solving social problems.", "It avoids discussing problems.", "It teaches people to blame others.", "It only teaches dates of events.", "Problem solving is one of its goals."],
        ],
      },
      {
        week: 2,
        title: "The family",
        subtopics: ["Meaning of family", "Types of family", "Functions of the family", "Roles of family members"],
        objectives: ["Define the family", "Distinguish between nuclear, extended, monogamous and polygamous families", "State the functions of the family", "Describe the roles and responsibilities of family members"],
        lesson: {
          title: "The Family: The First Social Unit",
          summary: "Describe types of family and the functions and roles within them.",
          minutes: 40,
          notes: `## Meaning
A **family** is a group of people related by **blood, marriage or adoption**, who live together and care for one another. It is the **smallest and most basic unit** of society.

## Types of family
| Type | Description |
|---|---|
| **nuclear family** | father, mother and their children |
| **extended family** | nuclear family plus relatives such as grandparents, uncles, aunts and cousins |
| **monogamous family** | a man married to **one** wife |
| **polygamous family** | a man married to **more than one** wife |
| **single-parent family** | one parent and children (due to death, divorce or other reasons) |

## Functions of the family
- **Reproduction**: bearing children and continuing the family line.
- **Care and protection**: food, shelter, clothing and security.
- **Socialisation**: teaching children language, values, manners and culture.
- **Education**: sending children to school and teaching skills.
- **Love and emotional support**.
- **Economic support**: providing for members' needs.

## Roles of family members
- **Father**: provides, protects and guides the family (roles are increasingly shared).
- **Mother**: cares for the family, nurtures children and often earns income.
- **Children**: obey parents, help with chores, study hard and respect elders.
- **Extended relatives**: give advice, support and care in times of need.`,
          examples: `**Example 1.** A family made up of father, mother and children only is a **nuclear family**.

**Example 2.** Mr Bello has two wives. What type of family is this? *Answer:* **polygamous family**.

**Example 3.** Name one function of the family. *Answer:* **socialisation of children** (or care and protection).`,
        },
        questions: [
          ["E", "The smallest and most basic unit of society is the", "family", "state", "school", "market", "Society is built on families."],
          ["E", "A family made up of father, mother and children only is", "a nuclear family", "an extended family", "a polygamous family", "a clan", "It is the basic family unit."],
          ["E", "A man married to only one wife has a", "monogamous family", "polygamous family", "extended family", "single-parent family", "Mono means one."],
          ["M", "A family that includes grandparents, uncles and cousins is", "an extended family", "a nuclear family", "a monogamous family only", "a single-parent family", "It extends beyond parents and children."],
          ["M", "A man married to more than one wife has a", "polygamous family", "monogamous family", "nuclear family", "single-parent family", "Poly means many."],
          ["M", "Teaching children language, values and manners is the family function of", "socialisation", "reproduction", "taxation", "election", "Children learn social ways at home."],
          ["M", "Which is a duty of children in the family?", "respecting and obeying parents", "providing all the family's money", "ignoring chores", "making family laws alone", "Children have responsibilities too."],
          ["H", "A family made up of a mother and her children after the father's death is a", "single-parent family", "polygamous family", "extended family", "monogamous family with two parents", "Only one parent is present."],
          ["H", "Why is the family called the first agent of socialisation?", "It is the first group a child learns from.", "It collects taxes.", "It builds roads.", "It conducts elections.", "Learning begins at home."],
          ["H", "Which function of the family ensures the continuity of society?", "reproduction", "recreation only", "taxation", "migration", "Children replace older generations."],
        ],
      },
      {
        week: 3,
        title: "Culture",
        subtopics: ["Meaning of culture", "Material and non-material culture", "Components of culture", "Features of culture"],
        objectives: ["Define culture", "Distinguish material from non-material culture", "Identify components of culture", "State the features of culture"],
        lesson: {
          title: "Our Way of Life",
          summary: "Explain culture and identify its components and features.",
          minutes: 40,
          notes: `## Meaning
**Culture** is the **total way of life** of a people — their language, food, dress, beliefs, values, music, occupations and ways of doing things.

## Material and non-material culture
| Material culture (can be seen and touched) | Non-material culture (cannot be touched) |
|---|---|
| clothing (agbada, wrapper, babban riga) | language |
| food (amala, tuwo, fufu, pounded yam) | beliefs and religion |
| houses and tools | values and norms |
| crafts, masks, drums | customs, greetings, festivals |

## Components of culture
language, dressing, food, religion, arts and crafts, music and dance, marriage customs, festivals, occupation, greetings, moral values.

## Features (characteristics) of culture
- **Learned**: acquired through socialisation, not by birth.
- **Shared**: common to members of a group.
- **Transmitted** from one generation to another.
- **Dynamic**: changes over time.
- **Varies** from society to society.
- **Adaptive**: helps people adjust to their environment.

## Nigerian examples
- Greetings: kneeling or prostrating (Yoruba), bowing, hand greetings.
- Festivals: Argungu fishing festival (Kebbi), Osun Osogbo festival, New Yam festival (Igbo), Durbar (north), Eyo (Lagos).`,
          examples: `**Example 1.** Is language material or non-material culture? *Answer:* **non-material**.

**Example 2.** Is a carved mask material or non-material culture? *Answer:* **material**.

**Example 3.** Why is culture described as dynamic? *Answer:* Because it **changes over time**.`,
        },
        questions: [
          ["E", "The total way of life of a people is their", "culture", "government", "climate", "population", "Culture covers everything people do and believe."],
          ["E", "Which of these is material culture?", "a carved mask", "language", "belief", "a value", "It can be seen and touched."],
          ["E", "Which of these is non-material culture?", "language", "a drum", "a house", "a hoe", "It cannot be touched."],
          ["M", "Culture is learned through", "socialisation", "birth only", "inheritance of genes", "rainfall", "People learn culture from others."],
          ["M", "Culture is described as dynamic because it", "changes over time", "never changes", "is only for the rich", "cannot be learned", "New ideas modify culture."],
          ["M", "The Argungu fishing festival is held in", "Kebbi State", "Lagos State", "Enugu State", "Rivers State", "It takes place at Argungu."],
          ["M", "Passing culture from one generation to another shows that culture is", "transmitted", "static", "inherited in the blood", "useless", "Elders teach the young."],
          ["H", "Which pair contains only non-material culture?", "beliefs and values", "food and houses", "masks and drums", "clothes and tools", "Neither can be touched."],
          ["H", "The New Yam festival is associated mainly with the", "Igbo", "Kanuri", "Ijaw only", "Tiv only", "It celebrates the yam harvest in Igboland."],
          ["H", "Culture differs from one society to another because", "societies live in different environments and histories", "all societies are the same", "culture is fixed by law", "culture is inherited in the genes", "Environment and history shape culture."],
        ],
      },
      {
        week: 4,
        title: "Socialisation",
        subtopics: ["Meaning of socialisation", "Agents of socialisation", "Importance of socialisation", "Effects of poor socialisation"],
        objectives: ["Define socialisation", "Identify agents of socialisation and their roles", "Explain the importance of socialisation", "Describe the effects of poor socialisation"],
        lesson: {
          title: "Learning to Live in Society",
          summary: "Explain how individuals learn the values and ways of their society.",
          minutes: 40,
          notes: `## Meaning
**Socialisation** is the **process by which a person learns the values, norms, language, skills and ways of behaving** of his or her society. It continues throughout life.

## Agents of socialisation
| Agent | Role |
|---|---|
| **family** | first agent; teaches language, manners, values, religion |
| **school** | teaches knowledge, skills, discipline, cooperation, national values |
| **peer group** | friends of similar age; influence dress, speech and attitudes (positively or negatively) |
| **religious bodies** | teach morals, obedience to God and good conduct |
| **mass media** | radio, TV, newspapers, internet and social media spread information and values |
| **community / age grades / clubs** | teach cooperation, leadership and service |
| **government** | teaches laws, rights and duties |

## Importance
- Helps people fit into society and behave acceptably.
- Transmits culture to new generations.
- Develops personality, skills and good character.
- Promotes peace, order and unity.

## Effects of poor socialisation
Indiscipline, disrespect, crime, drug abuse, cultism, examination malpractice and other social vices.`,
          examples: `**Example 1.** Which agent of socialisation is the first a child meets? *Answer:* the **family**.

**Example 2.** How can the peer group influence a teenager negatively? *Answer:* by encouraging bad habits such as **smoking or truancy**.

**Example 3.** Name one effect of poor socialisation. *Answer:* **indiscipline** (or crime, cultism).`,
        },
        questions: [
          ["E", "The process of learning the values and ways of one's society is", "socialisation", "migration", "urbanisation", "taxation", "People learn to live in society."],
          ["E", "The first agent of socialisation is the", "family", "school", "mass media", "government", "Learning starts at home."],
          ["E", "Friends of similar age form a", "peer group", "family", "government", "court", "Peers strongly influence teenagers."],
          ["M", "Radio, television and the internet are called", "mass media", "peer groups", "religious bodies", "age grades", "They reach many people."],
          ["M", "Which agent of socialisation teaches morals and obedience to God?", "religious bodies", "banks", "markets", "transport unions", "Churches and mosques teach morals."],
          ["M", "The school socialises children mainly by", "teaching knowledge, skills and discipline", "cooking their food", "paying their fees", "choosing their spouses", "Schools shape knowledge and behaviour."],
          ["M", "Socialisation continues", "throughout life", "only in childhood", "only in school", "only on weekends", "People keep learning new roles."],
          ["H", "Which is an effect of poor socialisation?", "increase in crime and indiscipline", "better discipline", "stronger unity", "higher respect for elders", "Poorly socialised people may break rules."],
          ["H", "A peer group can influence a teenager negatively by", "encouraging truancy and smoking", "encouraging hard study", "promoting good manners", "supporting religious values", "Peer pressure can be harmful."],
          ["H", "Why is socialisation important for national unity?", "It teaches shared values and respect for others.", "It divides people by tribe.", "It stops people from learning.", "It encourages conflict.", "Common values unite citizens."],
        ],
      },
      {
        week: 5,
        title: "Social groups",
        subtopics: ["Meaning of social groups", "Primary and secondary groups", "Examples of social groups", "Functions of social groups"],
        objectives: ["Define a social group", "Distinguish primary from secondary groups", "Give examples of social groups in the community", "State the functions of social groups"],
        lesson: {
          title: "Groups We Belong To",
          summary: "Classify social groups and explain their functions.",
          minutes: 40,
          notes: `## Meaning
A **social group** is two or more people who **interact regularly**, share **common interests or goals**, and feel a sense of belonging.
A crowd at a bus stop is **not** a social group because its members do not interact regularly or share a common goal.

## Types of social groups
| Primary groups | Secondary groups |
|---|---|
| small | usually large |
| close, personal, face-to-face relationships | formal, impersonal relationships |
| relationships last long | relationships may be temporary |
| e.g. family, close friends, peer group | e.g. trade unions, political parties, professional associations, schools, clubs |

## Examples in Nigeria
age grades, market women's associations, town unions, religious groups, cooperative societies, Boys' Scouts and Girl Guides, Red Cross, NURTW (road transport workers), NUT (teachers), NMA (doctors).

## Functions of social groups
- Give members a sense of **belonging** and identity.
- Provide **help and security** in times of need.
- Promote members' **interests** (e.g. unions negotiating for workers).
- Help in **community development** (roads, schools, wells).
- Teach **values, leadership and cooperation**.
- Provide **recreation and friendship**.

## Joining groups wisely
Join groups with good aims; avoid secret cults and gangs that promote violence.`,
          examples: `**Example 1.** Is the family a primary or secondary group? *Answer:* **primary group**.

**Example 2.** Is a trade union a primary or secondary group? *Answer:* **secondary group**.

**Example 3.** Why is a crowd at a bus stop not a social group? *Answer:* Its members do **not interact regularly** or share a **common goal**.`,
        },
        questions: [
          ["E", "Two or more people who interact regularly and share common goals form a", "social group", "crowd", "census", "constitution", "Interaction and shared goals define groups."],
          ["E", "Which is a primary group?", "the family", "a political party", "a trade union", "a professional association", "It has close, personal relationships."],
          ["E", "Which is a secondary group?", "a trade union", "the family", "close friends", "a peer group of playmates", "Relationships are formal."],
          ["M", "Primary groups are characterised by", "close, face-to-face relationships", "formal, impersonal relationships", "very large membership only", "written constitutions only", "Members know each other well."],
          ["M", "A crowd at a bus stop is not a social group because its members", "do not interact regularly or share a goal", "are too many", "are all strangers from abroad", "are standing", "Mere gathering is not a group."],
          ["M", "The Nigeria Union of Teachers (NUT) is an example of", "a professional association", "a primary group", "a family", "an age grade", "It represents teachers."],
          ["M", "Which is a function of social groups?", "providing help to members in times of need", "encouraging violence", "breaking laws", "causing disunity", "Groups support their members."],
          ["H", "Which group is most likely to help build a town hall in a community?", "town union", "secret cult", "street gang", "fan club of a foreign team", "Town unions promote development."],
          ["H", "Why should young people avoid secret cults?", "They promote violence and crime.", "They teach leadership openly.", "They build schools.", "They promote peace.", "Cults are harmful and illegal."],
          ["H", "Which statement about secondary groups is correct?", "Relationships are formal and may be temporary.", "They are always smaller than families.", "Members must be blood relatives.", "They have no goals.", "Secondary groups are organised for specific aims."],
        ],
      },
      {
        week: 6,
        title: "Our community",
        subtopics: ["Meaning of community", "Types of community", "Features of a community", "Community development"],
        objectives: ["Define community", "Distinguish rural from urban communities", "Identify the features of a community", "Explain ways of developing a community"],
        lesson: {
          title: "Living in a Community",
          summary: "Describe communities and how members can develop them.",
          minutes: 40,
          notes: `## Meaning
A **community** is a group of people living together in a **particular area**, sharing common **interests, culture and facilities**, and usually under a common leadership.

## Types of community
| Rural community | Urban community |
|---|---|
| village or small town | city or large town |
| small population | large population |
| main occupation: farming, fishing, crafts | trading, industry, services, offices |
| close relationships; people know one another | more impersonal relationships |
| fewer social amenities | more amenities: electricity, hospitals, banks |
| e.g. a farming village | e.g. Lagos, Kano, Ibadan, Port Harcourt, Abuja |

## Features of a community
- a defined **location** (territory)
- a **population** of people
- common **culture** and values
- **leadership** (traditional rulers, chiefs, councils)
- **social institutions**: schools, markets, places of worship, health centres
- **means of livelihood**

## Community development
Improving the living conditions of a community through **self-help** and government support: building roads, schools, clinics, markets, boreholes; sanitation; security.
Agents: community members, town unions, age grades, local government, NGOs.

## Duties of members
Pay levies and taxes, take part in communal work, keep the environment clean, obey laws and protect public property.`,
          examples: `**Example 1.** Is Lagos a rural or urban community? *Answer:* **urban**.

**Example 2.** What is the main occupation in most rural communities? *Answer:* **farming** (or fishing).

**Example 3.** Give one example of community development through self-help. *Answer:* **building a borehole** or a town hall with members' contributions.`,
        },
        questions: [
          ["E", "A group of people living together in a particular area and sharing common interests is a", "community", "crowd", "committee", "census", "They share location and interests."],
          ["E", "The main occupation of most rural communities is", "farming", "banking", "insurance", "manufacturing cars", "Rural people farm and fish."],
          ["E", "Which of these is an urban community?", "Lagos", "a small farming village", "a fishing camp", "a hamlet", "Lagos is a large city."],
          ["M", "Urban communities usually have", "more social amenities", "fewer people", "no markets", "no electricity", "Cities have more facilities."],
          ["M", "Which is a feature of a community?", "a defined location", "no leaders", "no culture", "no people", "Communities occupy particular areas."],
          ["M", "Improving living conditions through members' own efforts is called", "self-help community development", "urban migration", "taxation only", "colonialism", "Members contribute money and labour."],
          ["M", "Relationships in rural communities are usually", "close and personal", "impersonal", "non-existent", "only online", "People know one another well."],
          ["H", "Which group is likely to organise communal work in a village?", "age grades", "foreign embassies", "stock brokers", "airlines", "Age grades mobilise members."],
          ["H", "Which is a duty of a community member?", "taking part in communal work", "destroying public property", "refusing to pay levies", "polluting streams", "Members should support development."],
          ["H", "Why do many young people move from rural to urban areas?", "to seek jobs and better amenities", "because cities have fewer jobs", "to avoid schools", "because villages have more hospitals", "Opportunities attract migrants."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Marriage",
        subtopics: ["Meaning of marriage", "Types of marriage", "Traditional, religious and court marriages", "Importance and problems of marriage"],
        objectives: ["Define marriage", "Identify types and forms of marriage in Nigeria", "State the importance of marriage", "Describe problems in marriage and how to solve them"],
        lesson: {
          title: "Marriage in Nigeria",
          summary: "Describe types and forms of marriage and their importance to society.",
          minutes: 40,
          notes: `## Meaning
**Marriage** is a **legally and socially recognised union** between a man and a woman as husband and wife. It is the foundation of the family.

## Types of marriage
- **Monogamy**: one husband, one wife.
- **Polygamy**: one husband, more than one wife (polygyny). Allowed under customary and Islamic law, not under the Marriage Act.

## Forms of marriage in Nigeria
| Form | Description |
|---|---|
| **traditional (customary) marriage** | according to the customs of the families: introduction, payment of **bride price**, traditional ceremony |
| **religious marriage** | in a church (Christian) or according to Islamic law (nikah) |
| **court (statutory) marriage** | at the marriage registry under the **Marriage Act**; strictly monogamous |

## Conditions for a good marriage
maturity (legal adult age), consent of both partners, love and understanding, good health (e.g. genotype and HIV tests), financial readiness, family approval.

## Importance of marriage
reproduction and continuity of the family, companionship and love, proper upbringing of children, social status and stability, uniting families.

## Problems in marriage and solutions
| Problems | Solutions |
|---|---|
| lack of money, infidelity, poor communication, interference from relatives, childlessness, domestic violence | patience, open communication, counselling, respect, financial planning, reporting abuse |

**Early/child marriage** harms girls' health and education and is discouraged; the Child Rights Act sets 18 years as the minimum age where it applies.`,
          examples: `**Example 1.** Which form of marriage takes place at the marriage registry? *Answer:* **court (statutory) marriage**.

**Example 2.** What is paid to the bride's family in traditional marriage? *Answer:* the **bride price**.

**Example 3.** Why are genotype tests advised before marriage? *Answer:* To reduce the risk of children having **sickle-cell disease**.`,
        },
        questions: [
          ["E", "A socially and legally recognised union between a man and a woman is", "marriage", "divorce", "adoption", "migration", "Marriage forms a new family."],
          ["E", "A marriage of one husband and one wife is", "monogamy", "polygamy", "divorce", "adoption", "Mono means one."],
          ["E", "The payment made to the bride's family in traditional marriage is the", "bride price", "tax", "levy", "fine", "It is a customary payment."],
          ["M", "Marriage conducted at the marriage registry is", "court (statutory) marriage", "traditional marriage", "religious marriage only", "cohabitation", "It is under the Marriage Act."],
          ["M", "A man married to more than one wife practises", "polygamy", "monogamy", "celibacy", "adoption", "Poly means many."],
          ["M", "Which is an important condition for a good marriage?", "consent of both partners", "forcing a partner", "marrying at age twelve", "hiding health status", "Both must agree freely."],
          ["M", "Which is a function of marriage?", "procreation and upbringing of children", "collecting taxes", "building roads", "conducting elections", "Marriage continues the family."],
          ["H", "Genotype testing before marriage helps to prevent", "sickle-cell disease in children", "malaria", "divorce always", "road accidents", "Two AS partners risk SS children."],
          ["H", "Which is a problem that can threaten a marriage?", "poor communication between partners", "mutual respect", "good financial planning", "love and patience", "Communication problems cause conflict."],
          ["H", "Why is early (child) marriage discouraged?", "It harms girls' health and education.", "It improves education.", "It is required by law.", "It increases school enrolment.", "Young girls face health risks and lost schooling."],
        ],
      },
      {
        week: 2,
        title: "Social values and norms",
        subtopics: ["Meaning of values and norms", "Examples of good values", "Sanctions and rewards", "Consequences of bad values"],
        objectives: ["Define values and norms", "Identify good values in Nigerian society", "Explain how society rewards and punishes behaviour", "Discuss the consequences of bad values"],
        lesson: {
          title: "Values That Guide Our Behaviour",
          summary: "Identify good values and explain how norms guide behaviour.",
          minutes: 40,
          notes: `## Meanings
- **Values** are the ideas and qualities a society considers **good, right and desirable**, e.g. honesty, respect, hard work.
- **Norms** are the **accepted rules or standards of behaviour** in a society, e.g. greeting elders, queuing, dressing decently.

## Good values in Nigerian society
| Value | Meaning |
|---|---|
| **honesty** | telling the truth and not cheating |
| **respect** | showing regard for elders, others and authority |
| **hard work (dignity of labour)** | valuing honest work of any kind |
| **integrity** | being consistently upright |
| **tolerance** | accepting people who are different |
| **cooperation** | working together for common good |
| **patriotism** | love and loyalty to one's country |
| **self-discipline** | controlling one's actions |
| **contentment** | being satisfied with what one honestly has |
| **fairness and justice** | treating people equally |

## Sanctions and rewards
Society encourages good behaviour and discourages bad behaviour through:
- **Positive sanctions (rewards)**: praise, gifts, awards, titles, promotion.
- **Negative sanctions (punishments)**: scolding, fines, suspension, imprisonment, banishment.

## Consequences of bad values
corruption, cheating in examinations, crime, laziness, disunity, poverty and loss of trust.`,
          examples: `**Example 1.** Is greeting elders a value or a norm? *Answer:* a **norm** (accepted behaviour) that expresses the value of **respect**.

**Example 2.** A student returns a lost wallet. Which value is shown? *Answer:* **honesty**.

**Example 3.** Give one negative sanction used in school. *Answer:* **suspension** (or detention, scolding).`,
        },
        questions: [
          ["E", "Ideas and qualities that a society considers good and desirable are", "values", "taxes", "laws of physics", "diseases", "Values guide behaviour."],
          ["E", "Telling the truth and not cheating shows", "honesty", "greed", "laziness", "pride", "Honesty is a core value."],
          ["E", "Accepted rules of behaviour in a society are called", "norms", "vitamins", "minerals", "wages", "Norms are social standards."],
          ["M", "A student who returns a lost wallet shows the value of", "honesty", "tolerance only", "patriotism only", "contentment only", "Keeping another's property would be dishonest."],
          ["M", "Accepting people of different religions and tribes shows", "tolerance", "hatred", "greed", "discrimination", "Tolerance supports unity."],
          ["M", "Praise, awards and promotion are examples of", "positive sanctions", "negative sanctions", "crimes", "taxes", "They reward good conduct."],
          ["M", "Love and loyalty to one's country is", "patriotism", "tribalism", "nepotism", "corruption", "Patriots serve their nation."],
          ["H", "Which is a consequence of bad values in society?", "corruption and loss of trust", "higher integrity", "stronger unity", "more honesty", "Bad values damage society."],
          ["H", "Respecting honest work of any kind is known as", "dignity of labour", "nepotism", "contentment only", "tribalism", "All honest work deserves respect."],
          ["H", "Imprisonment of a thief is an example of a", "negative sanction", "positive sanction", "social value", "norm of greeting", "It punishes wrongdoing."],
        ],
      },
      {
        week: 3,
        title: "Leadership and followership",
        subtopics: ["Meaning of leadership and followership", "Types of leaders", "Qualities of a good leader", "Qualities of a good follower"],
        objectives: ["Define leadership and followership", "Identify types of leaders and leadership styles", "State the qualities of a good leader", "State the qualities of a good follower"],
        lesson: {
          title: "Leading and Following Well",
          summary: "Describe good leadership and responsible followership.",
          minutes: 40,
          notes: `## Meanings
- **Leadership** is the ability to **guide, direct and influence** a group towards achieving its goals.
- **Followership** is the ability and willingness to **support and cooperate** with a leader to achieve group goals.

## Types of leaders
- **Traditional leaders**: Obas, Emirs, Obis, chiefs, family heads.
- **Political leaders**: President, governors, legislators, local government chairmen.
- **Religious leaders**: pastors, imams, priests.
- **School leaders**: principal, prefects, class captains.
- **Community and organisational leaders**: town union presidents, union leaders.

## Leadership styles
| Style | Features |
|---|---|
| **democratic** | consults followers; decisions shared |
| **autocratic** | leader decides alone; strict control |
| **laissez-faire** | leader gives little direction; followers do as they wish |

## Qualities of a good leader
honesty, fairness, courage, vision, humility, good communication, selflessness, discipline, knowledge and competence, accountability.

## Qualities of a good follower
loyalty, obedience to lawful instructions, cooperation, constructive criticism, punctuality, hard work, respect for the leader, active participation.

## Why both matter
Good leaders cannot achieve goals without good followers; followers need good leaders to be well guided.`,
          examples: `**Example 1.** A principal who discusses decisions with teachers uses which leadership style? *Answer:* **democratic**.

**Example 2.** Name one quality of a good leader. *Answer:* **honesty** (or fairness, vision).

**Example 3.** Name one quality of a good follower. *Answer:* **loyalty** (or cooperation).`,
        },
        questions: [
          ["E", "The ability to guide a group towards its goals is", "leadership", "followership", "migration", "taxation", "Leaders guide and direct."],
          ["E", "An Oba or Emir is an example of a", "traditional leader", "religious leader only", "school prefect", "union member", "They rule traditional institutions."],
          ["E", "Which is a quality of a good leader?", "honesty", "selfishness", "laziness", "deceit", "Followers trust honest leaders."],
          ["M", "A leader who consults followers before making decisions uses", "democratic leadership", "autocratic leadership", "laissez-faire leadership", "dictatorship", "Decisions are shared."],
          ["M", "A leader who decides everything alone without consulting anyone is", "autocratic", "democratic", "laissez-faire", "cooperative", "Autocrats keep power to themselves."],
          ["M", "Which is a quality of a good follower?", "loyalty", "rebellion without reason", "absenteeism", "laziness", "Loyal followers support group goals."],
          ["M", "A leadership style in which the leader gives little or no direction is", "laissez-faire", "autocratic", "democratic", "military", "Followers are left to decide."],
          ["H", "Why is constructive criticism a sign of good followership?", "It helps the leader improve without causing disorder.", "It destroys the group.", "It shows disloyalty.", "It stops all activities.", "Helpful criticism strengthens leadership."],
          ["H", "A leader who explains how public funds were spent shows", "accountability", "autocracy", "nepotism", "tribalism", "Leaders must answer for their actions."],
          ["H", "Why do good leaders need good followers?", "Goals are achieved only with cooperation from followers.", "Leaders work alone.", "Followers make all decisions.", "Leadership does not involve people.", "Leadership depends on followers' support."],
        ],
      },
      {
        week: 4,
        title: "Peace and conflict",
        subtopics: ["Meaning of peace and conflict", "Causes of conflict", "Effects of conflict", "Ways of promoting peace"],
        objectives: ["Define peace and conflict", "Identify causes of conflict in the family, school and community", "Describe the effects of conflict", "Suggest ways of promoting peace"],
        lesson: {
          title: "Living in Peace",
          summary: "Explain the causes and effects of conflict and ways to promote peace.",
          minutes: 40,
          notes: `## Meanings
- **Peace** is a state of **harmony, calm and security**, free from violence and disorder.
- **Conflict** is a **disagreement or struggle** between individuals or groups with opposing interests, needs or views.
Conflicts are normal in human relationships; the problem is when they become **violent**.

## Levels of conflict
personal, family, school, community, ethnic/religious, national and international.

## Causes of conflict
| Cause | Example |
|---|---|
| land and boundary disputes | communities quarrelling over farmland |
| scarce resources | water, grazing land, jobs |
| chieftaincy tussles | disputes over succession |
| religious and ethnic intolerance | prejudice against other groups |
| injustice and inequality | unfair treatment |
| misunderstanding and poor communication | rumours, insults |
| political disagreements | disputed elections |

## Effects of conflict
loss of lives and property, displacement of people (refugees), hunger, destruction of schools and markets, hatred and disunity, slow development.

## Promoting peace
- **Dialogue** and good communication
- **Tolerance** of differences
- Justice and fairness
- **Mediation** by respected people; **arbitration**; courts
- Peace education and clubs
- Obeying the law and respecting others' rights`,
          examples: `**Example 1.** Two villages quarrel over farmland. What is the cause of conflict? *Answer:* a **land dispute**.

**Example 2.** Name one effect of violent conflict. *Answer:* **loss of lives and property** (or displacement).

**Example 3.** When a respected elder helps two quarrelling families to agree, this is called **mediation**.`,
        },
        questions: [
          ["E", "A state of harmony and freedom from violence is", "peace", "conflict", "war", "crisis", "Peace means calm and security."],
          ["E", "A disagreement between people with opposing interests is", "conflict", "peace", "cooperation", "harmony", "Conflict arises from differences."],
          ["E", "Which is a way of promoting peace?", "dialogue", "violence", "insults", "revenge", "Talking resolves differences."],
          ["M", "Two communities fighting over farmland is an example of conflict caused by", "land disputes", "good communication", "tolerance", "justice", "Land is a common cause of conflict."],
          ["M", "Which is an effect of violent conflict?", "loss of lives and property", "rapid development", "stronger unity", "more investment", "Violence destroys lives and property."],
          ["M", "When a neutral person helps two parties to agree, it is called", "mediation", "invasion", "revenge", "migration", "The mediator guides discussion."],
          ["M", "People forced to flee their homes because of conflict become", "displaced persons or refugees", "tourists", "investors", "rulers", "They lose their homes."],
          ["H", "Accepting people of different religions helps to prevent conflict because it promotes", "tolerance", "discrimination", "prejudice", "hatred", "Tolerance reduces tension."],
          ["H", "Which statement about conflict is correct?", "Conflict is normal, but violence should be avoided.", "Conflict never happens in families.", "All conflicts must end in war.", "Conflict is always good.", "Conflicts can be resolved peacefully."],
          ["H", "Injustice and inequality cause conflict because", "people who feel cheated may resist", "they promote fairness", "everyone is treated equally", "they reduce anger", "Unfairness breeds resentment."],
        ],
      },
      {
        week: 5,
        title: "Nigeria: our country",
        subtopics: ["Location and size of Nigeria", "States and the Federal Capital Territory", "Major ethnic groups and languages", "Nigeria's resources"],
        objectives: ["Describe the location and neighbours of Nigeria", "State the number of states and name the capital", "Identify major ethnic groups and languages", "Name some of Nigeria's natural resources"],
        lesson: {
          title: "Getting to Know Nigeria",
          summary: "Describe Nigeria's location, states, peoples and resources.",
          minutes: 40,
          notes: `## Location
Nigeria is in **West Africa**. Its neighbours:
- **Benin Republic** — west
- **Niger** — north
- **Chad** — north-east
- **Cameroon** — east
- **Atlantic Ocean (Gulf of Guinea)** — south
Nigeria has one of the largest populations in Africa and a land area of about **923,768 km²**.

## Political divisions
- **36 states** and the **Federal Capital Territory (FCT)**.
- **Capital**: **Abuja** (since 1991; before then, Lagos).
- **774 local government areas**.
- Six **geopolitical zones**: North-West, North-East, North-Central, South-West, South-East, South-South.

## Peoples and languages
Nigeria has **over 250 ethnic groups**. The three largest are the **Hausa-Fulani** (north), **Yoruba** (south-west) and **Igbo** (south-east). Others include Ijaw, Kanuri, Tiv, Ibibio, Edo, Nupe, Urhobo, Efik, Igala and Idoma.
**English** is the official language; Hausa, Yoruba and Igbo are widely spoken.

## Resources
crude oil and gas (Niger Delta), coal (Enugu), tin (Jos), limestone, iron ore (Itakpe), gold; agricultural produce such as cocoa, groundnuts, cotton, palm oil, rubber, yams and cassava.

## Unity in diversity
Despite differences, Nigerians share a common country and many values; diversity is a source of strength.`,
          examples: `**Example 1.** Which country borders Nigeria to the west? *Answer:* **Benin Republic**.

**Example 2.** How many states does Nigeria have? *Answer:* **36 states plus the FCT**.

**Example 3.** What is the official language of Nigeria? *Answer:* **English**.`,
        },
        questions: [
          ["E", "Nigeria is located in", "West Africa", "East Africa", "North America", "Europe", "Nigeria is a West African country."],
          ["E", "The capital of Nigeria is", "Abuja", "Lagos", "Kano", "Ibadan", "Abuja became the capital in 1991."],
          ["E", "How many states are in Nigeria?", "36", "19", "12", "30", "There are 36 states and the FCT."],
          ["M", "Which country borders Nigeria to the west?", "Benin Republic", "Cameroon", "Chad", "Ghana", "Benin lies on Nigeria's western border."],
          ["M", "Which country borders Nigeria to the east?", "Cameroon", "Benin Republic", "Togo", "Senegal", "Cameroon lies to the east."],
          ["M", "The official language of Nigeria is", "English", "Hausa", "Yoruba", "French", "English is used in government and schools."],
          ["M", "How many local government areas are in Nigeria?", "774", "36", "250", "6", "Nigeria has 774 LGAs."],
          ["H", "Nigeria has about how many ethnic groups?", "over 250", "3", "36", "12", "The three largest are Hausa-Fulani, Yoruba and Igbo."],
          ["H", "Before Abuja, the capital of Nigeria was", "Lagos", "Kaduna", "Enugu", "Calabar", "The capital moved from Lagos in 1991."],
          ["H", "Nigeria is divided into how many geopolitical zones?", "6", "4", "12", "36", "The six zones are used in planning and politics."],
        ],
      },
      {
        week: 6,
        title: "National symbols",
        subtopics: ["The national flag", "The coat of arms", "The national anthem and pledge", "Other national symbols and their importance"],
        objectives: ["Describe the national flag and its meaning", "Describe the coat of arms and its meaning", "Recite and explain the national pledge and anthem", "Explain the importance of national symbols"],
        lesson: {
          title: "Symbols of Our Nation",
          summary: "Describe Nigeria's national symbols and why they deserve respect.",
          minutes: 40,
          notes: `## The national flag
- Three vertical stripes: **green, white, green**.
- **Green** represents **agriculture** (the land's natural wealth); **white** represents **peace and unity**.
- Designed by **Michael Taiwo Akinkunmi**; first hoisted on **1 October 1960**.

## The coat of arms
| Part | Meaning |
|---|---|
| **black shield** | Nigeria's fertile soil |
| **white wavy Y-shape** | the rivers **Niger and Benue** meeting at Lokoja |
| **red eagle** | strength |
| **two white horses** | dignity |
| **green and white wreath** | agriculture and peace |
| **yellow flowers (Costus spectabilis)** | Nigeria's natural beauty |
| **motto** | **"Unity and Faith, Peace and Progress"** |

## The national anthem and pledge
- The current anthem begins **"Arise, O compatriots, Nigeria's call obey"** (adopted in 1978).
- The **national pledge** begins "I pledge to Nigeria my country, to be faithful, loyal and honest…" It is recited with the right hand raised to the chest level.

## Other symbols
the national currency (**naira and kobo**), the **national passport**, the **national identity number (NIN)**, the constitution, national monuments.

## Importance
- Show Nigeria's **identity** and sovereignty.
- Promote **unity** and **patriotism**.
- Remind citizens of national values.
Citizens should **stand at attention** when the anthem is played and **respect** the flag.`,
          examples: `**Example 1.** What does the white stripe of the flag represent? *Answer:* **peace and unity**.

**Example 2.** What does the Y-shape on the coat of arms represent? *Answer:* the **Niger and Benue rivers**.

**Example 3.** What is Nigeria's national motto? *Answer:* **"Unity and Faith, Peace and Progress."**`,
        },
        questions: [
          ["E", "The colours of the Nigerian flag are", "green, white, green", "red, white, blue", "green, yellow, red", "black, white, black", "It has three vertical stripes."],
          ["E", "The green colour in the Nigerian flag represents", "agriculture", "peace", "blood", "oil", "Green stands for the land and agriculture."],
          ["E", "The white colour in the Nigerian flag represents", "peace and unity", "agriculture", "wealth", "strength", "White symbolises peace."],
          ["M", "The Nigerian flag was designed by", "Michael Taiwo Akinkunmi", "Nnamdi Azikiwe", "Obafemi Awolowo", "Tafawa Balewa", "Akinkunmi designed it as a student."],
          ["M", "On the coat of arms, the white Y-shape represents", "the Niger and Benue rivers", "two roads", "the national flag", "a tree", "The rivers meet at Lokoja."],
          ["M", "Nigeria's national motto is", "Unity and Faith, Peace and Progress", "One Nigeria forever", "Arise O Compatriots", "Service to humanity", "It appears on the coat of arms."],
          ["M", "The eagle on the coat of arms stands for", "strength", "peace", "agriculture", "rivers", "The red eagle symbolises strength."],
          ["H", "The two horses on the coat of arms represent", "dignity", "agriculture", "oil wealth", "rivers", "They stand for dignity."],
          ["H", "Why should citizens respect national symbols?", "They represent national identity and unity.", "They are for decoration only.", "They are foreign items.", "They have no meaning.", "Symbols unite citizens."],
          ["H", "What should you do when the national anthem is played?", "stand at attention", "keep talking", "sit down and eat", "walk away", "Standing shows respect."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Road safety",
        subtopics: ["Road users", "Causes of road accidents", "Road signs and traffic rules", "Road safety agencies"],
        objectives: ["Identify road users", "State the causes of road accidents", "Interpret common road signs", "Describe the roles of road safety agencies"],
        lesson: {
          title: "Staying Safe on the Road",
          summary: "Identify causes of road accidents and follow road safety rules.",
          minutes: 40,
          notes: `## Road users
pedestrians, cyclists, motorcyclists, drivers, passengers, and animals herded on roads.

## Causes of road accidents
| Human factors | Vehicle and road factors |
|---|---|
| over-speeding | bad brakes and worn tyres |
| drunk driving and drug use | poor vehicle maintenance |
| dangerous overtaking | potholes and bad roads |
| using phones while driving | poor lighting and missing signs |
| fatigue | overloading |
| ignoring traffic rules and lights | bad weather and poor visibility |

## Road signs
- **Regulatory signs** (usually circles): give orders — *Stop*, *No entry*, *Speed limit*.
- **Warning signs** (usually triangles): warn of danger — *Sharp bend*, *Pedestrian crossing ahead*, *School ahead*.
- **Information signs** (usually rectangles): give information — directions, hospital, filling station.
**Traffic lights**: **red** – stop; **amber** – get ready/stop if safe; **green** – go if the way is clear.

## Pedestrian safety
Use the **zebra crossing** or footbridge; look **left, right and left again**; walk facing oncoming traffic where there is no footpath; wear bright clothing at night.

## Agencies
- **Federal Road Safety Corps (FRSC)** — established in **1988**: road safety education, patrols, licences, plate numbers.
- **Police** and **state traffic agencies** (e.g. LASTMA in Lagos).
Always wear a **seat belt**; motorcyclists must wear **helmets**.`,
          examples: `**Example 1.** What does a red traffic light mean? *Answer:* **stop**.

**Example 2.** Where should a pedestrian cross a busy road? *Answer:* at a **zebra crossing** or footbridge.

**Example 3.** Name one human cause of road accidents. *Answer:* **over-speeding** (or drunk driving, phone use).`,
        },
        questions: [
          ["E", "A red traffic light means", "stop", "go", "speed up", "turn around", "Red always means stop."],
          ["E", "Pedestrians should cross busy roads at the", "zebra crossing", "middle of a bend", "back of a bus", "roundabout centre", "Zebra crossings are marked for pedestrians."],
          ["E", "The agency responsible for road safety in Nigeria is the", "FRSC", "NDLEA", "INEC", "NAFDAC", "The Federal Road Safety Corps."],
          ["M", "Which is a human cause of road accidents?", "over-speeding", "good brakes", "clear road signs", "well-lit roads", "Speed reduces control."],
          ["M", "Road signs that warn of danger are usually shaped as", "triangles", "circles", "rectangles", "stars", "Triangular signs give warnings."],
          ["M", "Motorcyclists should wear", "helmets", "sunglasses only", "slippers", "loose scarves", "Helmets protect the head."],
          ["M", "Using a phone while driving causes accidents because it", "distracts the driver", "improves attention", "slows traffic safely", "cleans the windscreen", "Attention is taken from the road."],
          ["H", "Before crossing a road, a pedestrian should look", "left, right and left again", "only straight ahead", "only to the right", "at the sky", "This checks both directions of traffic."],
          ["H", "The FRSC was established in", "1988", "1960", "2015", "1970", "It was set up in 1988."],
          ["H", "A circular sign showing a speed limit is a", "regulatory sign", "warning sign", "information sign", "decorative sign", "Circles give orders."],
        ],
      },
      {
        week: 2,
        title: "Population",
        subtopics: ["Meaning of population", "Census", "Factors affecting population", "Population and development"],
        objectives: ["Define population", "Explain the meaning and importance of a census", "Identify factors that affect population size", "Explain the relationship between population and development"],
        lesson: {
          title: "Counting People: Population and Census",
          summary: "Explain population, census and how population affects development.",
          minutes: 40,
          notes: `## Meaning
**Population** is the **total number of people living in a particular place at a particular time**.

## Census
A **census** is the **official counting** of all people in a country at a given time. It records age, sex, occupation, education and location.
- Nigeria's census is conducted by the **National Population Commission (NPC)**.
- The last completed national census was held in **2006**.
- Censuses are recommended every **10 years**.

## Importance of census
- **Planning**: schools, hospitals, housing, roads, water.
- Sharing **revenue** and **political representation** fairly.
- Knowing the **labour force** and dependent population.
- Estimating future needs.

## Problems of census in Nigeria
inflation of figures for political gain, poor records, inaccessible areas, insecurity, illiteracy and cultural/religious objections, and high cost.

## Factors affecting population
- **Birth rate** (increases population)
- **Death rate** (reduces it)
- **Migration**: **immigration** (people coming in) increases; **emigration** (people leaving) decreases.

## Population and development
- A large, **healthy and educated** population can be a great asset (labour, markets).
- Rapid growth without planning leads to **overcrowding, unemployment, pressure on schools and hospitals, slums, and crime**.
- A **small population** may lack labour and markets.`,
          examples: `**Example 1.** Which body conducts the census in Nigeria? *Answer:* the **National Population Commission (NPC)**.

**Example 2.** Name one use of census figures. *Answer:* **planning** schools and hospitals.

**Example 3.** How does emigration affect population? *Answer:* It **reduces** the population of the place people leave.`,
        },
        questions: [
          ["E", "The total number of people living in a place at a particular time is its", "population", "census", "culture", "migration", "Population is a count of people."],
          ["E", "The official counting of people in a country is a", "census", "budget", "election", "festival", "A census counts everyone."],
          ["E", "The body that conducts the census in Nigeria is the", "National Population Commission", "INEC", "FRSC", "NDLEA", "NPC organises censuses."],
          ["M", "Nigeria's last completed national census was held in", "2006", "1991", "1963", "2020", "The 2006 census is the most recent completed one."],
          ["M", "People moving into a country to live is called", "immigration", "emigration", "urbanisation", "census", "Im- means into."],
          ["M", "Which factor increases population?", "high birth rate", "high death rate", "emigration", "war", "More births add people."],
          ["M", "Census data help the government to", "plan schools and hospitals", "reduce rainfall", "change culture", "stop migration completely", "Planning needs accurate figures."],
          ["H", "Which is a problem of census in Nigeria?", "inflation of figures for political gain", "too many trained officials", "very low cost", "universal literacy", "Figures are sometimes exaggerated."],
          ["H", "Rapid population growth without planning can lead to", "unemployment and overcrowding", "fewer people", "more jobs than people always", "empty cities", "Resources become overstretched."],
          ["H", "People leaving a country to live elsewhere is", "emigration", "immigration", "urbanisation", "fertility", "E- means out of."],
        ],
      },
      {
        week: 3,
        title: "Child abuse and child labour",
        subtopics: ["Meaning of child abuse", "Forms of child abuse", "Child labour", "Protection of children's rights"],
        objectives: ["Define child abuse and child labour", "Identify forms of child abuse", "Explain the effects of child abuse and child labour", "State ways of protecting children's rights"],
        lesson: {
          title: "Protecting Children",
          summary: "Recognise child abuse and child labour and how children are protected.",
          minutes: 40,
          notes: `## Meanings
- A **child** is a person below **18 years** (Child Rights Act, 2003).
- **Child abuse** is any action or neglect that **harms a child's physical, emotional or moral well-being**.
- **Child labour** is work that is **harmful** to a child or prevents the child from going to school — for example hawking during school hours, working in mines or quarries, or long hours of domestic work.
(Light chores at home that do not harm health or schooling are not child labour.)

## Forms of child abuse
| Form | Examples |
|---|---|
| physical | beating that causes injury, burns |
| emotional | constant insults, threats, rejection |
| sexual | any sexual contact or exploitation |
| neglect | denying food, shelter, education, medical care |
| exploitation | child labour, trafficking, early marriage, street begging |

## Effects
injury and death, poor health, dropping out of school, low self-esteem, fear, depression, crime and street life.

## Children's rights
survival, protection, education, health care, a name and nationality, play and rest, freedom from exploitation and discrimination.

## Protection
- The **Child Rights Act (2003)** and state child rights laws.
- Parents, teachers and communities must care for children.
- **Report** abuse to parents, teachers, the police, social welfare offices or NGOs.
- Children should know their rights and say **No** to anyone who touches them wrongly, and tell a trusted adult.`,
          examples: `**Example 1.** A 10-year-old sells goods on the street during school hours. What is this? *Answer:* **child labour**.

**Example 2.** Name one form of child abuse. *Answer:* **neglect** (or physical, emotional, sexual abuse).

**Example 3.** To whom can a child report abuse? *Answer:* a **trusted adult** such as a parent, teacher or the police.`,
        },
        questions: [
          ["E", "Under the Child Rights Act, a child is a person below the age of", "18", "12", "21", "15", "The Act defines children as under 18."],
          ["E", "Any action that harms a child's well-being is", "child abuse", "child care", "child education", "child protection", "Abuse causes harm."],
          ["E", "A child who is abused should", "tell a trusted adult", "keep it secret forever", "run away from school", "blame himself", "Reporting brings help."],
          ["M", "Hawking on the street during school hours is an example of", "child labour", "education", "recreation", "light home chores", "It harms schooling."],
          ["M", "Denying a child food and medical care is", "neglect", "discipline", "education", "protection", "Neglect is a form of abuse."],
          ["M", "The law that protects children in Nigeria is the", "Child Rights Act", "Land Use Act", "Marriage Act only", "Electoral Act", "It was passed in 2003."],
          ["M", "Which is a right of every child?", "education", "working in a mine", "early marriage", "street begging", "Education is a basic right."],
          ["H", "Which is an effect of child labour?", "dropping out of school", "better grades", "more rest", "higher self-esteem", "Work takes time from school."],
          ["H", "Helping to wash dishes at home after school, without harm to health or schooling, is", "not child labour", "child trafficking", "child abuse", "exploitation", "Light chores are acceptable."],
          ["H", "Constant insults and threats against a child are", "emotional abuse", "physical care", "positive discipline", "education", "They damage the child's mind."],
        ],
      },
      {
        week: 4,
        title: "Human trafficking",
        subtopics: ["Meaning of human trafficking", "Causes of human trafficking", "Effects of human trafficking", "Prevention and NAPTIP"],
        objectives: ["Define human trafficking", "Identify causes of human trafficking", "Describe the effects on victims and society", "Explain ways of preventing trafficking and the role of NAPTIP"],
        lesson: {
          title: "Say No to Human Trafficking",
          summary: "Recognise the tricks and dangers of human trafficking and how to stay safe.",
          minutes: 40,
          notes: `## Meaning
**Human trafficking** is the **recruitment, transport or harbouring of people by force, deception or threats** for the purpose of **exploitation** — such as forced labour, sexual exploitation, domestic servitude, begging, or organ harvesting.

## How traffickers deceive victims
- false promises of good jobs, scholarships or marriage abroad or in big cities
- offering to "help" poor families by taking children to live with "relatives"
- online contacts and fake agencies
- oaths and threats to keep victims silent

## Causes
poverty, unemployment, illiteracy, greed, large families, desire to travel abroad at all costs, broken homes, weak law enforcement and corruption.

## Effects
| On victims | On society |
|---|---|
| physical and sexual abuse | bad image for the country |
| diseases, injury, death | loss of young people |
| psychological trauma | growth of crime networks |
| loss of education and freedom | family breakdown |

## Prevention
- Do not accept offers from strangers without checking with parents and authorities.
- Parents should never give children away to strangers.
- Education, job creation and poverty reduction.
- Report suspicious persons to the **police** or **NAPTIP**.

## NAPTIP
The **National Agency for the Prohibition of Trafficking in Persons**, established in **2003**, prevents trafficking, rescues and rehabilitates victims, and prosecutes traffickers.`,
          examples: `**Example 1.** A stranger promises a girl a job abroad and asks her to keep it secret from her parents. What should she do? *Answer:* **Refuse and tell her parents or report to NAPTIP/police.**

**Example 2.** Name one cause of human trafficking. *Answer:* **poverty** (or unemployment, greed).

**Example 3.** What does NAPTIP stand for? *Answer:* **National Agency for the Prohibition of Trafficking in Persons**.`,
        },
        questions: [
          ["E", "Moving people by deception or force for exploitation is", "human trafficking", "tourism", "migration for study", "census", "Exploitation is the aim."],
          ["E", "The Nigerian agency that fights human trafficking is", "NAPTIP", "FRSC", "NPC", "INEC", "It prohibits trafficking in persons."],
          ["E", "Which is a common cause of human trafficking?", "poverty", "good education", "strong families", "enough jobs", "Poor people are easily lured."],
          ["M", "Traffickers often deceive victims with", "false promises of good jobs abroad", "school fees receipts", "free vaccines", "road signs", "Fake opportunities lure victims."],
          ["M", "Forcing a trafficked person to work without pay is", "forced labour", "a scholarship", "tourism", "volunteering freely", "Victims are exploited."],
          ["M", "Which is an effect of human trafficking on victims?", "abuse and trauma", "better education", "more freedom", "higher wages", "Victims suffer greatly."],
          ["M", "NAPTIP was established in", "2003", "1960", "1988", "2020", "It was created in 2003."],
          ["H", "A stranger offers to take a child to the city for 'a better life'. The parents should", "refuse and verify with authorities", "hand the child over immediately", "accept money for the child", "keep it secret", "Children must not be given to strangers."],
          ["H", "How does human trafficking affect a country's image?", "It damages the country's reputation.", "It improves foreign relations.", "It attracts tourists.", "It has no effect.", "Trafficking is condemned internationally."],
          ["H", "Which measure best reduces human trafficking in the long term?", "education and job creation", "encouraging secret travel", "ignoring suspicious people", "weakening laws", "Opportunities reduce vulnerability."],
        ],
      },
      {
        week: 5,
        title: "Economic activities",
        subtopics: ["Meaning of economic activities", "Primary occupations", "Secondary occupations", "Tertiary occupations and services"],
        objectives: ["Define economic activities and occupation", "Classify occupations into primary, secondary and tertiary", "Give examples of occupations in each class", "Explain the importance of work to individuals and society"],
        lesson: {
          title: "How People Earn a Living",
          summary: "Classify occupations and explain the value of work.",
          minutes: 40,
          notes: `## Meaning
**Economic activities** are activities people carry out to **produce goods and services** and **earn a living**. An **occupation** is the work a person does regularly to earn income.

## Classes of occupation
| Class | Meaning | Examples |
|---|---|---|
| **primary (extractive)** | getting raw materials directly from nature | farming, fishing, hunting, mining, lumbering |
| **secondary (manufacturing/construction)** | changing raw materials into finished goods | textile mills, cement factories, bakeries, building construction, carpentry |
| **tertiary (services and commerce)** | distributing goods and providing services | trading, banking, transport, teaching, nursing, law, communication |

## Occupations in rural and urban areas
Rural: farming, fishing, crafts. Urban: trading, industry, civil service, banking, transport.

## Importance of work
- earning **income** to meet needs
- producing **goods and services** for society
- **self-reliance** and dignity
- contributing to **national development** and tax revenue
- keeping people busy and reducing crime

## Factors affecting choice of occupation
interest and ability, education and training, income, environment, family background, available opportunities.`,
          examples: `**Example 1.** Is fishing a primary, secondary or tertiary occupation? *Answer:* **primary**.

**Example 2.** Is baking bread from flour primary, secondary or tertiary? *Answer:* **secondary**.

**Example 3.** Is teaching primary, secondary or tertiary? *Answer:* **tertiary** (a service).`,
        },
        questions: [
          ["E", "Activities people carry out to earn a living are", "economic activities", "leisure activities only", "religious rites", "elections", "They produce goods and services."],
          ["E", "Farming is an example of", "a primary occupation", "a secondary occupation", "a tertiary occupation", "a hobby only", "It obtains produce from nature."],
          ["E", "Teaching is an example of", "a tertiary occupation", "a primary occupation", "a secondary occupation", "mining", "It provides a service."],
          ["M", "Changing raw materials into finished goods is a", "secondary occupation", "primary occupation", "tertiary occupation", "extractive occupation", "Manufacturing is secondary."],
          ["M", "Which is a primary occupation?", "mining", "banking", "baking", "transport", "Mining extracts minerals from nature."],
          ["M", "Which is a secondary occupation?", "cement manufacturing", "fishing", "nursing", "hunting", "It turns limestone into cement."],
          ["M", "Banking, transport and insurance are", "tertiary occupations", "primary occupations", "secondary occupations", "extractive industries", "They provide services."],
          ["H", "Which is an importance of work to society?", "production of goods and services", "increase in crime", "dependence on others", "waste of resources", "Workers produce what society needs."],
          ["H", "A carpenter who makes furniture from timber is engaged in", "a secondary occupation", "a primary occupation", "a tertiary occupation", "hunting", "Timber is changed into furniture."],
          ["H", "Which factor most influences the choice of a career?", "a person's interest and ability", "the colour of one's uniform", "the day of the week", "the weather", "Interest and ability lead to success."],
        ],
      },
      {
        week: 6,
        title: "Science, technology and society",
        subtopics: ["Meaning of science and technology", "Contributions to society", "Negative effects", "Using technology responsibly"],
        objectives: ["Explain the meaning of science and technology", "Describe contributions of science and technology to society", "Identify negative effects of technology", "Suggest responsible uses of technology"],
        lesson: {
          title: "Technology in Our Lives",
          summary: "Discuss how science and technology change society, for good and ill.",
          minutes: 40,
          notes: `## Meanings
- **Science** is the organised study of nature through observation and experiment.
- **Technology** is the **application** of scientific knowledge to solve practical problems.

## Contributions to society
| Area | Contribution |
|---|---|
| health | vaccines, drugs, hospital equipment, better life expectancy |
| agriculture | tractors, fertilisers, improved seeds, irrigation |
| communication | mobile phones, internet, radio, TV |
| transport | cars, aeroplanes, trains |
| education | computers, e-learning, online resources |
| industry | machines, mass production |
| home | electricity, cookers, fans, refrigerators |

## Negative effects
- **pollution** (air, water, land, noise)
- **accidents** (road, industrial)
- **unemployment** when machines replace workers
- **cybercrime** (internet fraud, hacking) and misuse of social media
- **weapons** of mass destruction
- **addiction** to phones and games; spread of false news

## Responsible use
- Use the internet for learning; verify information before sharing.
- Protect personal information and passwords.
- Limit screen time; respect others online.
- Dispose of electronic waste properly.
- Governments should make laws to regulate technology.`,
          examples: `**Example 1.** Name one contribution of technology to health. *Answer:* **vaccines** (or modern hospital equipment).

**Example 2.** Name one negative effect of technology. *Answer:* **cybercrime** (or pollution).

**Example 3.** Give one responsible use of social media. *Answer:* **Verify information before sharing it.**`,
        },
        questions: [
          ["E", "The application of scientific knowledge to solve practical problems is", "technology", "culture", "history", "tradition", "Technology puts science to use."],
          ["E", "Which is a contribution of technology to communication?", "mobile phones", "hand hoes", "clay pots", "canoes only", "Phones connect people instantly."],
          ["E", "Which is a negative effect of technology?", "pollution", "better health care", "faster travel", "easier communication", "Factories and vehicles pollute."],
          ["M", "Internet fraud is an example of", "cybercrime", "agriculture", "health care", "transport", "It uses computers to commit crime."],
          ["M", "Tractors and improved seeds are contributions of technology to", "agriculture", "banking", "music", "sports", "They increase food production."],
          ["M", "Replacing workers with machines can lead to", "unemployment", "more manual jobs", "slower production", "less efficiency", "Fewer workers may be needed."],
          ["M", "Vaccines are a contribution of science to", "health", "transport", "entertainment", "construction", "They prevent diseases."],
          ["H", "Which is a responsible way to use social media?", "verifying information before sharing it", "spreading rumours", "posting others' private details", "cyberbullying", "False news causes harm."],
          ["H", "Protecting your passwords helps to prevent", "hacking of your accounts", "rainfall", "road accidents", "malaria", "Passwords secure personal data."],
          ["H", "Why should governments regulate technology?", "to reduce its harmful effects", "to stop all progress", "to ban education", "to increase pollution", "Laws guide safe use."],
        ],
      },
    ],
  },
];
