import type { TermPlan } from "../types";

/** JSS1 Civic Education — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and importance of Civic Education",
        subtopics: ["Meaning of Civic Education", "Objectives of Civic Education", "Importance to the individual", "Importance to the nation"],
        objectives: ["Explain the meaning of Civic Education", "State the objectives of Civic Education", "Explain the importance of Civic Education to the individual", "Explain the importance of Civic Education to the nation"],
        lesson: {
          title: "Learning to Be a Good Citizen",
          summary: "Understand Civic Education and why every citizen needs it.",
          minutes: 40,
          notes: `## Meaning
**Civic Education** is the study of the **rights, duties and responsibilities of citizens**, and of how government works. It prepares people to be **informed, active and responsible citizens**.
The word *civic* comes from the Latin *civis*, meaning **citizen**.

## Objectives
- to teach citizens their **rights and duties**
- to develop good **values** and attitudes (honesty, discipline, patriotism)
- to promote **national unity** and consciousness
- to teach how **government** and democracy work
- to encourage **participation** in community and national affairs
- to promote respect for **law and order**

## Importance to the individual
- knowing one's rights and how to defend them
- developing good character and self-discipline
- making wise decisions and avoiding social vices
- preparing for leadership

## Importance to the nation
- produces **law-abiding** citizens
- reduces corruption, crime and indiscipline
- promotes peace, unity and **democracy**
- encourages citizens to contribute to **national development**
Civic Education was reintroduced as a separate school subject in Nigeria to address declining national values.`,
          examples: `**Example 1.** What does the Latin word *civis* mean? *Answer:* **citizen**.

**Example 2.** State one objective of Civic Education. *Answer:* **To teach citizens their rights and duties.**

**Example 3.** How does Civic Education help the nation? *Answer:* It produces **law-abiding citizens** and promotes unity.`,
        },
        questions: [
          ["E", "The study of the rights, duties and responsibilities of citizens is", "Civic Education", "Basic Science", "Mathematics", "Agricultural Science", "Civic Education builds good citizenship."],
          ["E", "The Latin word 'civis' means", "citizen", "city", "government", "king", "Civic comes from civis."],
          ["E", "Civic Education helps to produce", "law-abiding citizens", "criminals", "lazy people", "corrupt leaders", "It teaches respect for law."],
          ["M", "Which is an objective of Civic Education?", "to teach citizens their rights and duties", "to teach only farming", "to promote tribalism", "to discourage voting", "Rights and duties are central."],
          ["M", "Civic Education promotes national unity by", "teaching shared values and respect for others", "encouraging ethnic hatred", "promoting violence", "ignoring the constitution", "Common values unite citizens."],
          ["M", "Knowing how government works helps a citizen to", "participate wisely in public affairs", "avoid all elections", "break laws easily", "ignore leaders", "Informed citizens participate better."],
          ["M", "Which value is promoted by Civic Education?", "patriotism", "greed", "dishonesty", "laziness", "Patriotism is love for one's country."],
          ["H", "Why was Civic Education reintroduced as a separate subject in Nigerian schools?", "to address declining national values", "to replace Mathematics", "to reduce school hours", "to promote cultism", "Values needed strengthening."],
          ["H", "How does Civic Education help reduce corruption?", "It builds integrity and respect for the law.", "It teaches people to hide wrongdoing.", "It encourages bribery.", "It has no effect.", "Good values discourage corruption."],
          ["H", "A citizen who is informed, active and responsible has benefited from", "Civic Education", "ignorance", "apathy", "tribalism", "This is the aim of the subject."],
        ],
      },
      {
        week: 2,
        title: "Values: meaning and types",
        subtopics: ["Meaning of values", "Types of values", "Sources of values", "Importance of values"],
        objectives: ["Define values", "Identify types of values", "Identify sources from which people learn values", "Explain the importance of values to society"],
        lesson: {
          title: "What Are Values?",
          summary: "Define values, identify their types and where we learn them.",
          minutes: 40,
          notes: `## Meaning
**Values** are the **beliefs, standards and qualities** that people consider **important, good and worthwhile**. They guide how we behave and make decisions.

## Types of values
| Type | Examples |
|---|---|
| **moral values** | honesty, integrity, fairness, kindness |
| **social values** | respect, cooperation, tolerance, hospitality |
| **cultural values** | greeting elders, respect for tradition, communal living |
| **religious values** | fear of God, prayer, forgiveness |
| **economic values** | hard work, thrift, dignity of labour |
| **political/national values** | patriotism, loyalty, obedience to law |
| **personal values** | self-discipline, punctuality, courage |

## Sources of values
family, school, religious institutions, peer groups, mass media, community and traditional institutions, government.

## Importance of values
- guide **behaviour** and decisions
- promote **peace and harmony**
- build **trust** among people
- promote **national development** and unity
- give **identity** to a society

## Nigeria's national values (examples)
honesty, discipline, integrity, dignity of labour, social justice, religious tolerance, self-reliance, patriotism.`,
          examples: `**Example 1.** Is honesty a moral or economic value? *Answer:* **moral value**.

**Example 2.** Name one source of values. *Answer:* the **family** (or school, religion).

**Example 3.** Give one importance of values. *Answer:* They **guide behaviour** and promote peace.`,
        },
        questions: [
          ["E", "Beliefs and qualities people consider good and worthwhile are", "values", "taxes", "laws of motion", "minerals", "Values guide behaviour."],
          ["E", "Honesty is an example of a", "moral value", "physical value", "chemical value", "numerical value", "It concerns right conduct."],
          ["E", "The first place where children learn values is the", "family", "stadium", "market", "bank", "Values begin at home."],
          ["M", "Hard work and thrift are examples of", "economic values", "religious values only", "political values", "cultural festivals", "They relate to earning and saving."],
          ["M", "Patriotism and loyalty to the nation are", "national (political) values", "economic values", "personal hobbies", "religious rites", "They concern the nation."],
          ["M", "Which is a source of values?", "religious institutions", "the weather", "gravity", "the moon", "Churches and mosques teach values."],
          ["M", "Greeting elders respectfully is a", "cultural value", "economic value", "scientific value", "numerical value", "It is part of our culture."],
          ["H", "How do values promote national development?", "They produce disciplined and hardworking citizens.", "They encourage laziness.", "They increase corruption.", "They cause disunity.", "Good values improve productivity."],
          ["H", "Which of these is a personal value?", "punctuality", "tribalism", "nepotism", "bribery", "Punctuality is self-discipline in time."],
          ["H", "Values build trust among people because", "people who share good values behave predictably and fairly", "values are secret", "values are only for leaders", "values cause fear", "Honest conduct builds trust."],
        ],
      },
      {
        week: 3,
        title: "Honesty",
        subtopics: ["Meaning of honesty", "Attributes of an honest person", "Benefits of honesty", "Consequences of dishonesty"],
        objectives: ["Define honesty", "Identify the attributes of an honest person", "Explain the benefits of honesty", "Describe the consequences of dishonesty"],
        lesson: {
          title: "Honesty Is the Best Policy",
          summary: "Explain honesty and its benefits to individuals and society.",
          minutes: 40,
          notes: `## Meaning
**Honesty** is the quality of being **truthful, sincere and fair** in words and actions. An honest person does not lie, cheat or steal.

## Attributes of an honest person
- tells the **truth** even when it is difficult
- does not **cheat** in examinations or business
- returns **lost property** to its owner
- keeps **promises**
- is **transparent** and accountable
- admits mistakes
- does not take **bribes**

## Benefits of honesty
| To the individual | To society |
|---|---|
| trust and respect from others | less corruption and crime |
| peace of mind (clear conscience) | fair business and trade |
| good reputation | stable families and communities |
| opportunities (people rely on you) | attracts investment and development |

## Consequences of dishonesty
loss of trust, punishment (expulsion, imprisonment), broken relationships, bad reputation, corruption and poverty in society.

## Examples of honest Nigerians
Stories of cleaners and drivers who returned large sums of money found at work show that honesty is still valued and rewarded.`,
          examples: `**Example 1.** Ada finds a phone in the classroom and hands it to the teacher. Which value does she show? *Answer:* **honesty**.

**Example 2.** Name one benefit of honesty to the individual. *Answer:* **trust and respect** from others.

**Example 3.** Name one consequence of dishonesty. *Answer:* **loss of trust** (or punishment).`,
        },
        questions: [
          ["E", "Being truthful, sincere and fair is called", "honesty", "greed", "pride", "laziness", "Honesty avoids lies and cheating."],
          ["E", "An honest person", "tells the truth", "cheats in examinations", "steals", "breaks promises", "Truthfulness is key."],
          ["E", "Returning a lost wallet to its owner shows", "honesty", "dishonesty", "tribalism", "cowardice", "The finder respects others' property."],
          ["M", "Which is a benefit of honesty to an individual?", "trust from others", "punishment", "loss of friends", "bad reputation", "People trust honest persons."],
          ["M", "Which is a consequence of dishonesty?", "loss of trust", "promotion", "good reputation", "peace of mind", "Lies destroy trust."],
          ["M", "Admitting a mistake instead of blaming others shows", "honesty", "cowardice", "greed", "arrogance", "It is truthful behaviour."],
          ["M", "Refusing to take a bribe is a sign of", "honesty", "weakness", "foolishness", "disloyalty", "Honest officials reject bribes."],
          ["H", "How does honesty benefit a nation's economy?", "It reduces corruption and attracts investment.", "It increases fraud.", "It discourages trade.", "It has no effect.", "Investors trust honest systems."],
          ["H", "Peace of mind that comes from doing the right thing is called", "a clear conscience", "guilt", "fear", "confusion", "Honest people have nothing to hide."],
          ["H", "A trader who uses a false measure to cheat customers is guilty of", "dishonesty", "honesty", "generosity", "patriotism", "False measures cheat buyers."],
        ],
      },
      {
        week: 4,
        title: "Cooperation",
        subtopics: ["Meaning of cooperation", "Forms of cooperation", "Benefits of cooperation", "Factors that hinder cooperation"],
        objectives: ["Define cooperation", "Identify forms of cooperation at home, school and community", "Explain the benefits of cooperation", "Identify factors that hinder cooperation"],
        lesson: {
          title: "Working Together",
          summary: "Explain cooperation and how it helps families, schools and communities.",
          minutes: 40,
          notes: `## Meaning
**Cooperation** is **working together** with others to achieve a **common goal**.
"Unity is strength": what one person cannot do alone, many can achieve together.

## Forms of cooperation
| Level | Examples |
|---|---|
| **home** | sharing chores, caring for siblings |
| **school** | group projects, sports teams, clubs, keeping the school clean |
| **community** | communal work (clearing roads, building wells), town unions, age grades |
| **economic** | **cooperative societies** (members pool money for loans, farming inputs, bulk buying) |
| **national** | citizens obeying laws and paying taxes for development |
| **international** | ECOWAS, AU, UN |

## Benefits
- tasks are completed **faster and better**
- **peace, unity** and friendship
- sharing of **ideas, skills and resources**
- community **development**
- support in times of need

## Factors that hinder cooperation
selfishness, pride, tribalism and religious intolerance, mistrust, poor leadership, laziness, lack of communication, jealousy.

## Promoting cooperation
tolerance, good communication, fairness, good leadership, shared goals, respect for others' views.`,
          examples: `**Example 1.** Villagers come together to clear a road. What value do they show? *Answer:* **cooperation**.

**Example 2.** Name one benefit of cooperation. *Answer:* Work is done **faster and better**.

**Example 3.** Name one factor that hinders cooperation. *Answer:* **selfishness** (or mistrust, tribalism).`,
        },
        questions: [
          ["E", "Working together to achieve a common goal is", "cooperation", "competition only", "conflict", "rebellion", "People combine efforts."],
          ["E", "Which is an example of cooperation in school?", "group projects", "fighting in class", "cheating", "truancy", "Students work together."],
          ["E", "The saying 'Unity is strength' teaches the value of", "cooperation", "selfishness", "pride", "laziness", "Together we achieve more."],
          ["M", "Villagers clearing a road together is an example of", "communal work", "tribalism", "nepotism", "migration", "It is community cooperation."],
          ["M", "An association in which members pool money to help one another is a", "cooperative society", "secret cult", "political thug group", "street gang", "It serves members' economic needs."],
          ["M", "Which is a benefit of cooperation?", "tasks are completed faster", "more quarrels", "loss of friendship", "waste of resources", "Many hands make light work."],
          ["M", "Which factor hinders cooperation?", "selfishness", "tolerance", "good communication", "fair leadership", "Selfish people do not share."],
          ["H", "Nations working together in ECOWAS show cooperation at the", "international level", "family level", "school level only", "individual level", "It involves many countries."],
          ["H", "How can good leadership promote cooperation?", "by treating members fairly and setting clear goals", "by favouring relatives", "by ignoring members", "by causing division", "Fairness encourages participation."],
          ["H", "Mistrust hinders cooperation because", "people are unwilling to work with those they do not trust", "it improves teamwork", "it creates unity", "it shares resources", "Trust is needed for teamwork."],
        ],
      },
      {
        week: 5,
        title: "Self-reliance",
        subtopics: ["Meaning of self-reliance", "Attributes of a self-reliant person", "Benefits of self-reliance", "Ways of becoming self-reliant"],
        objectives: ["Define self-reliance", "Identify the attributes of a self-reliant person", "Explain the benefits of self-reliance", "Suggest ways of becoming self-reliant"],
        lesson: {
          title: "Standing on Your Own Feet",
          summary: "Explain self-reliance and how young people can develop it.",
          minutes: 40,
          notes: `## Meaning
**Self-reliance** is the ability to **depend on one's own efforts, skills and resources** to meet one's needs, without depending unnecessarily on others.

## Attributes of a self-reliant person
- hard-working and **industrious**
- **creative** and resourceful
- confident and **independent**
- takes **initiative**
- manages money and time well
- learns useful **skills**
- does not beg or steal

## Benefits
| To the individual | To the nation |
|---|---|
| income and independence | less unemployment |
| dignity and self-respect | more goods and services produced |
| confidence | less crime and dependence |
| ability to help others | economic growth |

## Ways of becoming self-reliant
- **acquire skills**: tailoring, carpentry, hairdressing, computer skills, farming, catering, phone repair
- take education seriously
- save money and start small businesses
- make good use of **time**
- take part in entrepreneurship and vocational programmes

## Government support
skills acquisition centres, entrepreneurship education in schools and universities, loans for small businesses (e.g. through the Bank of Industry and microfinance banks), and youth empowerment schemes.`,
          examples: `**Example 1.** A student learns to repair phones and earns money during holidays. Which value does he show? *Answer:* **self-reliance**.

**Example 2.** Name one benefit of self-reliance to the nation. *Answer:* **reduced unemployment**.

**Example 3.** Name one skill a young person can learn to become self-reliant. *Answer:* **tailoring** (or carpentry, computer skills).`,
        },
        questions: [
          ["E", "Depending on one's own efforts and skills is", "self-reliance", "dependence", "laziness", "begging", "Self-reliant people support themselves."],
          ["E", "A self-reliant person is usually", "hard-working", "lazy", "wasteful", "dishonest", "Hard work supports independence."],
          ["E", "Learning a skill such as tailoring helps a person to become", "self-reliant", "unemployed", "dependent", "lazy", "Skills provide income."],
          ["M", "Which is a benefit of self-reliance to the nation?", "reduction in unemployment", "more crime", "more dependence", "lower production", "Self-employed people create jobs."],
          ["M", "Which attribute shows self-reliance?", "taking initiative", "waiting for others to act", "begging", "stealing", "Initiative drives self-reliance."],
          ["M", "A student who repairs phones during holidays to earn money shows", "self-reliance", "idleness", "dishonesty", "tribalism", "He uses his skill."],
          ["M", "Which is a way of becoming self-reliant?", "acquiring useful skills", "depending on others forever", "gambling", "wasting money", "Skills create opportunities."],
          ["H", "How does self-reliance reduce crime?", "People who earn a living honestly are less likely to steal.", "It increases idleness.", "It encourages begging.", "It has no effect.", "Busy, productive people avoid crime."],
          ["H", "Loans from microfinance banks help young people to", "start small businesses", "stop working", "gamble", "leave school permanently", "Capital supports enterprise."],
          ["H", "Which statement best describes self-reliance?", "Using one's abilities to meet one's needs responsibly", "Refusing all help from anyone", "Depending on parents forever", "Borrowing without repaying", "It is responsible independence."],
        ],
      },
      {
        week: 6,
        title: "Contentment",
        subtopics: ["Meaning of contentment", "Attributes of a contented person", "Benefits of contentment", "Consequences of greed"],
        objectives: ["Define contentment", "Identify attributes of a contented person", "Explain the benefits of contentment", "Explain the consequences of greed and lack of contentment"],
        lesson: {
          title: "Being Satisfied with What Is Honestly Earned",
          summary: "Explain contentment and how it protects against greed and vice.",
          minutes: 40,
          notes: `## Meaning
**Contentment** is being **satisfied with what one has honestly acquired**, while still working hard to improve legitimately. It is the opposite of **greed**.
Contentment does **not** mean laziness or lack of ambition.

## Attributes of a contented person
- lives within his or her **means**
- does not envy others
- avoids **get-rich-quick** schemes
- is **grateful**
- works hard honestly for improvement
- does not steal, cheat or take bribes

## Benefits of contentment
| To the individual | To society |
|---|---|
| peace of mind | less corruption and crime |
| freedom from debt | honest leadership |
| good health (less stress) | fair distribution of resources |
| good reputation | trust and unity |

## Consequences of greed (lack of contentment)
corruption, embezzlement, fraud (including internet fraud), armed robbery, kidnapping, ritual killing, examination malpractice, debt, and imprisonment.

## Promoting contentment
good parental and religious teaching, living simply, avoiding peer pressure and show-off lifestyles, celebrating honest achievement rather than wealth alone.`,
          examples: `**Example 1.** Ngozi's friends own expensive phones, but she is satisfied with her simple one and saves for her studies. Which value does she show? *Answer:* **contentment**.

**Example 2.** What is the opposite of contentment? *Answer:* **greed**.

**Example 3.** Name one consequence of greed. *Answer:* **corruption** (or fraud).`,
        },
        questions: [
          ["E", "Being satisfied with what one has honestly acquired is", "contentment", "greed", "envy", "jealousy", "Contentment avoids greed."],
          ["E", "The opposite of contentment is", "greed", "honesty", "patience", "kindness", "Greed wants more at any cost."],
          ["E", "A contented person lives", "within his or her means", "on borrowed money always", "by stealing", "by gambling", "Contentment avoids debt."],
          ["M", "Which is a benefit of contentment?", "peace of mind", "constant debt", "imprisonment", "anxiety", "Contented people are at peace."],
          ["M", "Which is a consequence of greed?", "corruption", "peace of mind", "honest leadership", "trust", "Greed drives corrupt acts."],
          ["M", "Contentment does NOT mean", "laziness or lack of ambition", "being grateful", "living within one's means", "working honestly", "Contented people still work hard."],
          ["M", "A contented person avoids", "get-rich-quick schemes", "honest work", "saving money", "gratitude", "Such schemes are often fraudulent."],
          ["H", "Why does lack of contentment lead to crimes like fraud and kidnapping?", "Greed drives people to seek wealth by any means.", "Contented people commit crimes.", "Crimes come from honesty.", "It has no link.", "Desire for quick wealth fuels crime."],
          ["H", "A public official who is contented is less likely to", "embezzle public funds", "serve the people", "obey the law", "tell the truth", "Contentment curbs corruption."],
          ["H", "Which practice promotes contentment among young people?", "resisting show-off lifestyles and peer pressure", "envying rich friends", "gambling", "borrowing to impress others", "Simplicity supports contentment."],
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
        title: "Community service",
        subtopics: ["Meaning of community service", "Types of community service", "Benefits of community service", "Community service in school"],
        objectives: ["Define community service", "Identify types of community service", "Explain the benefits of community service", "Participate in community service activities"],
        lesson: {
          title: "Serving Our Community",
          summary: "Explain community service and how students can take part.",
          minutes: 40,
          notes: `## Meaning
**Community service** is **voluntary work** done to **benefit the community** without expecting payment.

## Types of community service
- **environmental sanitation** (clearing drains, sweeping markets)
- clearing and repairing **roads**
- **tree planting**
- helping the **elderly, sick and people with disabilities**
- visiting orphanages and hospitals
- **teaching** or tutoring younger pupils
- blood donation (for adults)
- security (vigilance groups, neighbourhood watch)
- helping during **emergencies** (floods, fire)

## Community service in school
cleaning classrooms and compound, school gardens, clubs such as Red Cross, Boys' Scouts, Girl Guides, Man O' War, environmental clubs; helping new students.

## Benefits
| To the community | To the volunteer |
|---|---|
| development without heavy cost | sense of fulfilment and responsibility |
| cleaner, safer environment | new skills and experience |
| unity and cooperation | leadership and teamwork |
| help for vulnerable people | respect and recognition |

## Examples in Nigeria
monthly environmental sanitation days, NYSC community development projects (CDS), age-grade projects, and religious bodies' charity work.`,
          examples: `**Example 1.** Students plant trees in the school compound without payment. What is this? *Answer:* **community service**.

**Example 2.** Name one benefit of community service to the volunteer. *Answer:* **new skills** (or leadership experience).

**Example 3.** Name a school club that engages in community service. *Answer:* the **Red Cross club** (or Scouts).`,
        },
        questions: [
          ["E", "Voluntary work done to benefit the community is", "community service", "paid employment", "taxation", "punishment", "It is done without pay."],
          ["E", "Which is an example of community service?", "clearing drains", "stealing", "littering", "vandalism", "It improves the environment."],
          ["E", "Community service is usually done", "without payment", "for large salaries", "under force", "at night only", "It is voluntary."],
          ["M", "Which school club engages in first aid and community service?", "Red Cross", "debating society only", "chess club", "drama club only", "Red Cross helps the injured."],
          ["M", "Which is a benefit of community service to the community?", "a cleaner environment", "more pollution", "disunity", "higher crime", "Volunteers improve surroundings."],
          ["M", "Helping the elderly with their shopping is an example of", "community service", "child labour", "corruption", "tribalism", "It serves vulnerable people."],
          ["M", "NYSC members' Community Development Service is", "a form of community service", "a political rally", "a punishment", "a business", "Corps members serve communities."],
          ["H", "How does community service develop leadership in young people?", "It gives opportunities to organise and guide others.", "It prevents teamwork.", "It encourages laziness.", "It has no effect.", "Volunteers lead projects."],
          ["H", "Why is community service important in developing communities?", "It achieves development without heavy cost.", "It increases government spending.", "It stops cooperation.", "It causes conflict.", "Volunteer labour saves money."],
          ["H", "Monthly environmental sanitation exercises promote", "cleanliness and public health", "flooding", "disease", "littering", "Clean surroundings reduce disease."],
        ],
      },
      {
        week: 2,
        title: "National consciousness",
        subtopics: ["Meaning of national consciousness", "Ways of showing national consciousness", "Factors that promote national consciousness", "Obstacles to national consciousness"],
        objectives: ["Explain national consciousness", "Identify ways citizens show national consciousness", "Identify factors that promote it", "Identify obstacles to national consciousness"],
        lesson: {
          title: "Thinking Nigeria First",
          summary: "Explain national consciousness and how citizens show it.",
          minutes: 40,
          notes: `## Meaning
**National consciousness** is **awareness of and pride in belonging to one's nation**, placing the **interest of the nation above** personal, ethnic or religious interests.

## Ways of showing national consciousness
- respecting **national symbols** (flag, anthem, coat of arms)
- reciting the **national pledge** sincerely
- buying and promoting **made-in-Nigeria goods**
- protecting **public property**
- obeying laws and paying taxes
- voting and taking part in national events
- defending Nigeria's good name at home and abroad
- treating all Nigerians fairly regardless of tribe or religion

## Factors that promote national consciousness
- national symbols and **national holidays** (Independence Day, Democracy Day)
- **NYSC** and unity schools
- national **sports teams** and festivals
- good leadership and fair distribution of resources
- **Civic Education** and mass media campaigns

## Obstacles
tribalism, religious bigotry, corruption, poor leadership, injustice and marginalisation, poverty, preference for foreign goods and culture.`,
          examples: `**Example 1.** A student insists on buying shoes made in Aba to support Nigerian industry. What does this show? *Answer:* **national consciousness**.

**Example 2.** Name one factor that promotes national consciousness. *Answer:* the **NYSC** (or national sports teams).

**Example 3.** Name one obstacle to national consciousness. *Answer:* **tribalism**.`,
        },
        questions: [
          ["E", "Awareness of and pride in belonging to one's nation is", "national consciousness", "tribalism", "nepotism", "apathy", "It puts the nation first."],
          ["E", "Which shows national consciousness?", "respecting the national flag", "tearing the flag", "insulting other tribes", "destroying public property", "Respecting symbols shows pride."],
          ["E", "Buying made-in-Nigeria goods shows", "national consciousness", "tribalism", "corruption", "greed", "It supports local industry."],
          ["M", "Which promotes national consciousness?", "the NYSC scheme", "tribalism", "religious bigotry", "corruption", "Corps members serve in other states."],
          ["M", "Which is an obstacle to national consciousness?", "tribalism", "patriotism", "national sports", "unity schools", "Tribal loyalty weakens national loyalty."],
          ["M", "Protecting public property shows", "national consciousness", "vandalism", "apathy", "greed", "Public property belongs to all."],
          ["M", "Independence Day in Nigeria is celebrated on", "1 October", "12 June", "25 December", "1 May", "It marks independence in 1960."],
          ["H", "Placing national interest above ethnic interest is a sign of", "national consciousness", "tribalism", "nepotism", "sectionalism", "The nation comes first."],
          ["H", "Preference for foreign goods over local ones can", "weaken national consciousness and local industry", "strengthen local industry", "create more local jobs", "improve national pride", "Local producers lose customers."],
          ["H", "How does injustice weaken national consciousness?", "People who feel marginalised lose loyalty to the nation.", "It unites everyone.", "It increases patriotism.", "It has no effect.", "Unfairness breeds resentment."],
        ],
      },
      {
        week: 3,
        title: "Rules and regulations",
        subtopics: ["Meaning of rules and regulations", "Rules at home, school and community", "Importance of rules", "Consequences of breaking rules"],
        objectives: ["Define rules and regulations", "Identify rules at home, in school and in the community", "Explain the importance of rules", "State consequences of breaking rules"],
        lesson: {
          title: "Why We Need Rules",
          summary: "Explain rules and regulations and why obeying them matters.",
          minutes: 40,
          notes: `## Meaning
- **Rules** are **guidelines** that tell people what they may or may not do in a particular place or group.
- **Regulations** are **official rules** made by an authority (government, school, organisation) to control conduct.

## Examples
| Place | Rules and regulations |
|---|---|
| **home** | greet elders, do chores, return home early, no fighting |
| **school** | be punctual, wear correct uniform, no cheating, no fighting, respect teachers |
| **community** | environmental sanitation days, no dumping of refuse in drains, curfews, market days |
| **road** | stop at red lights, use zebra crossings, wear seat belts and helmets |
| **nation** | laws made by the legislature (e.g. the Constitution, criminal laws) |

## Importance of rules
- maintain **order and discipline**
- protect **lives and property**
- ensure **fairness** and equality
- promote **peace** and cooperation
- help achieve **goals** (e.g. learning in school)

## Consequences of breaking rules
**punishment** (warning, detention, fine, suspension, imprisonment), accidents and injuries, disorder, loss of trust and reputation.

## Obeying rules
Good citizens obey rules willingly and encourage others to do so.`,
          examples: `**Example 1.** Give one school rule. *Answer:* **Be punctual** (or wear the correct uniform).

**Example 2.** Why are traffic rules important? *Answer:* They **prevent accidents** and protect lives.

**Example 3.** Name one consequence of breaking school rules. *Answer:* **suspension** (or detention).`,
        },
        questions: [
          ["E", "Guidelines that tell people what they may or may not do are", "rules", "games", "songs", "stories", "Rules guide behaviour."],
          ["E", "Which is a school rule?", "be punctual", "cheat in examinations", "fight other students", "destroy school property", "Punctuality is required."],
          ["E", "Rules help to maintain", "order and discipline", "chaos", "confusion", "disunity", "Rules keep things orderly."],
          ["M", "Official rules made by an authority are called", "regulations", "suggestions", "rumours", "proverbs", "Regulations are formal."],
          ["M", "Stopping at a red traffic light is an example of", "obeying traffic rules", "breaking the law", "community service", "vandalism", "It prevents accidents."],
          ["M", "Which is a consequence of breaking school rules?", "suspension", "promotion", "a prize", "extra holidays", "Rule-breakers are punished."],
          ["M", "Environmental sanitation days are examples of", "community regulations", "school rules only", "home rules", "football rules", "They keep communities clean."],
          ["H", "Why are rules important for fairness?", "They apply equally to everyone.", "They favour the rich.", "They only apply to students.", "They are made in secret.", "Equal rules treat people fairly."],
          ["H", "Laws made by the legislature are rules at the", "national level", "family level", "classroom level only", "personal level", "The nation's laws bind all citizens."],
          ["H", "A good citizen who sees others breaking rules should", "encourage them to obey", "join them", "ignore it always", "reward them", "Good citizens promote order."],
        ],
      },
      {
        week: 4,
        title: "Law and order",
        subtopics: ["Meaning of law", "Sources of law", "Law enforcement agencies", "Importance of law and order"],
        objectives: ["Define law", "Identify sources of Nigerian law", "Identify law enforcement agencies and their roles", "Explain the importance of law and order"],
        lesson: {
          title: "Keeping Society Safe and Orderly",
          summary: "Explain what laws are, where they come from and who enforces them.",
          minutes: 40,
          notes: `## Meaning
A **law** is a **rule made by a recognised authority** (such as the legislature) that is **binding** on everyone and backed by **punishment (sanctions)**.
**Law and order** is a situation where laws are obeyed and society is peaceful and secure.

## Sources of Nigerian law
| Source | Explanation |
|---|---|
| **the Constitution** | the supreme law of the land |
| **legislation (statutes)** | Acts of the National Assembly and laws of State Houses of Assembly |
| **customary law** | customs of the people accepted as law |
| **Islamic (Sharia) law** | applies in some states in personal and civil matters for Muslims |
| **judicial precedent (case law)** | earlier decisions of higher courts |
| **English law** | received English laws still in use (common law, equity) |

## Law enforcement agencies
- **Nigeria Police Force** — maintains law and order, arrests suspects
- **Nigeria Security and Civil Defence Corps (NSCDC)** — protects public infrastructure
- **FRSC** — road traffic laws
- **NDLEA** — drug laws
- **EFCC/ICPC** — corruption laws
- **Nigeria Immigration Service** and **Customs Service** — borders
- **Courts** — interpret laws and punish offenders

## Importance of law and order
protects lives and property; ensures justice; guarantees rights; attracts investment; promotes peace and development.`,
          examples: `**Example 1.** What is the supreme law of Nigeria? *Answer:* the **Constitution**.

**Example 2.** Which agency mainly arrests criminal suspects? *Answer:* the **Nigeria Police Force**.

**Example 3.** Name one importance of law and order. *Answer:* **protection of lives and property**.`,
        },
        questions: [
          ["E", "A binding rule made by a recognised authority is a", "law", "song", "custom only", "suggestion", "Laws are binding and enforceable."],
          ["E", "The supreme law of Nigeria is the", "Constitution", "school rules", "church bye-laws", "market rules", "All other laws must agree with it."],
          ["E", "The agency that mainly maintains law and order is the", "Nigeria Police Force", "NAFDAC", "NPC", "NCC", "Police prevent and detect crime."],
          ["M", "Laws made by the National Assembly are called", "Acts (statutes)", "customs", "case law", "proverbs", "Legislation produces Acts."],
          ["M", "The customs of a people accepted as law are", "customary law", "statute law", "international law", "military decrees", "They come from tradition."],
          ["M", "Which body interprets laws and punishes offenders?", "the courts", "the market", "the family", "the media", "The judiciary interprets laws."],
          ["M", "Which agency protects public infrastructure such as pipelines?", "NSCDC", "NAPTIP", "NPC", "FRSC", "Civil Defence guards infrastructure."],
          ["H", "Earlier decisions of higher courts that guide later cases are", "judicial precedents", "customary laws", "bye-laws", "decrees", "Lower courts follow higher courts."],
          ["H", "How does law and order attract investment?", "Investors feel their property is secure.", "It increases crime.", "It discourages trade.", "It creates chaos.", "Security encourages business."],
          ["H", "Laws differ from ordinary rules because laws are", "backed by state sanctions", "optional", "made by children", "never written", "Breaking the law attracts punishment by the state."],
        ],
      },
      {
        week: 5,
        title: "Rights of the child",
        subtopics: ["Who is a child", "Rights of the child", "Responsibilities of the child", "Protecting children's rights"],
        objectives: ["Define a child under Nigerian law", "Identify the rights of the child", "State the responsibilities of the child", "Explain how children's rights are protected"],
        lesson: {
          title: "Children Have Rights Too",
          summary: "Identify children's rights and responsibilities and how they are protected.",
          minutes: 40,
          notes: `## Who is a child?
Under the **Child Rights Act (2003)**, a child is any person **below 18 years**.
Internationally, children's rights are set out in the **UN Convention on the Rights of the Child (1989)** and the **African Charter on the Rights and Welfare of the Child**.

## Rights of the child
| Right | Meaning |
|---|---|
| **survival** | life, food, shelter, health care |
| **development** | education, play and leisure, culture |
| **protection** | from abuse, neglect, exploitation, trafficking, harmful practices |
| **participation** | to express views and be heard in matters affecting them |
| **name and nationality** | a name at birth and birth registration |
| **freedom from discrimination** | equal treatment regardless of sex, religion, disability |
| **free and compulsory basic education** | through the Universal Basic Education (UBE) programme |

## Responsibilities of the child
respect parents, elders and teachers; obey lawful instructions; study hard; help at home; respect the rights of other children; be good citizens and protect the environment.

## Protection
- parents and guardians
- schools and teachers
- the **police** and courts (Family Courts)
- Ministries of Women Affairs and Social Development
- **NAPTIP** (against trafficking)
- NGOs and UNICEF
Children should **tell a trusted adult** when their rights are violated.`,
          examples: `**Example 1.** Under the Child Rights Act, who is a child? *Answer:* **anyone below 18 years**.

**Example 2.** Name one right of the child. *Answer:* the **right to education** (or protection, survival).

**Example 3.** Name one responsibility of a child. *Answer:* **to respect parents and elders**.`,
        },
        questions: [
          ["E", "Under the Child Rights Act, a child is anyone below", "18 years", "12 years", "16 years", "21 years", "The Act sets 18 as the limit."],
          ["E", "Which is a right of every child?", "education", "working in a quarry", "being trafficked", "early marriage", "Education is a basic right."],
          ["E", "Which is a responsibility of a child?", "respecting parents and elders", "fighting teachers", "skipping school", "destroying property", "Rights go with responsibilities."],
          ["M", "The Child Rights Act was passed in Nigeria in", "2003", "1960", "1999", "2015", "It domesticated international child rights."],
          ["M", "The right of children to express their views on matters affecting them is the right to", "participation", "survival", "property", "vote", "Children should be heard."],
          ["M", "Registering a child's birth protects the right to", "a name and nationality", "vote", "drive", "marry early", "Registration gives legal identity."],
          ["M", "Free and compulsory basic education in Nigeria is provided through the", "UBE programme", "NYSC", "INEC", "FRSC", "Universal Basic Education."],
          ["H", "The international agreement on children's rights adopted by the UN in 1989 is the", "Convention on the Rights of the Child", "Geneva Convention", "Treaty of Lagos", "Kyoto Protocol", "Most countries have ratified it."],
          ["H", "A child whose rights are violated should", "tell a trusted adult", "keep quiet forever", "run away from home", "fight back violently", "Adults can seek help."],
          ["H", "Protecting children from abuse and trafficking falls under the right to", "protection", "participation", "leisure", "nationality", "Children must be kept safe."],
        ],
      },
      {
        week: 6,
        title: "Nigerian traditions and national identity",
        subtopics: ["Meaning of national identity", "Symbols of national identity", "Nigerian traditions that promote unity", "Promoting Nigerian identity"],
        objectives: ["Explain national identity", "Identify symbols and documents of national identity", "Describe Nigerian traditions that promote unity", "Suggest ways of promoting Nigerian identity"],
        lesson: {
          title: "Who We Are as Nigerians",
          summary: "Describe national identity and the traditions that bind Nigerians together.",
          minutes: 40,
          notes: `## Meaning
**National identity** is the **sense of belonging to a nation** and the features that make its people recognisable as one — shared symbols, history, values and culture.

## Symbols and documents of identity
| Item | Purpose |
|---|---|
| national flag, coat of arms, anthem, pledge | represent the nation |
| **national passport** | identity for international travel |
| **National Identification Number (NIN)** | unique identity for every resident; issued by **NIMC** |
| national currency (naira) | economic identity |
| Permanent Voter Card | identity for voting |
| national monuments and museums | preserve history |

## Nigerian traditions that promote unity
- **hospitality** to visitors
- **respect for elders**
- the **extended family** and communal living
- **festivals** that attract people of different groups (Argungu, Osun Osogbo, Calabar Carnival, Durbar)
- Nigerian **music, films (Nollywood), fashion and food** enjoyed across all groups
- **inter-ethnic marriage** and trade

## Promoting Nigerian identity
- speaking positively about Nigeria
- learning Nigerian languages and history
- supporting Nigerian products and arts
- participating in national events
- representing Nigeria well abroad`,
          examples: `**Example 1.** Which agency issues the National Identification Number? *Answer:* **NIMC** (National Identity Management Commission).

**Example 2.** Name one Nigerian tradition that promotes unity. *Answer:* **hospitality** (or festivals, inter-ethnic marriage).

**Example 3.** Name one document of national identity. *Answer:* the **national passport** (or NIN).`,
        },
        questions: [
          ["E", "The sense of belonging to a nation is", "national identity", "tribalism", "nepotism", "migration", "It unites citizens."],
          ["E", "Which document is used to identify Nigerians travelling abroad?", "national passport", "school report card", "birth invitation card", "market receipt", "Passports identify travellers."],
          ["E", "Which is a Nigerian tradition that promotes unity?", "hospitality to visitors", "tribalism", "religious intolerance", "hatred", "Welcoming visitors builds friendship."],
          ["M", "The National Identification Number is issued by", "NIMC", "INEC", "NPC", "FRSC", "The National Identity Management Commission."],
          ["M", "Nollywood films enjoyed across Nigeria promote", "national identity", "division", "tribalism", "conflict", "Shared culture unites people."],
          ["M", "Which festival attracts people from different parts of Nigeria?", "Calabar Carnival", "a family birthday", "a private meeting", "a school exam", "It draws visitors nationwide."],
          ["M", "Learning about Nigerian history helps citizens to", "understand and value their national identity", "forget their country", "hate other groups", "avoid voting", "History builds identity."],
          ["H", "Why is the NIN important?", "It gives each person a unique identity for services and security.", "It replaces all taxes.", "It is only for foreigners.", "It is for voting only.", "It supports planning and security."],
          ["H", "Representing Nigeria well abroad helps to", "build a positive national image", "damage the country", "increase crime", "reduce identity", "Good conduct improves the image."],
          ["H", "Inter-ethnic marriage promotes national identity because it", "creates family ties across ethnic groups", "divides families", "encourages tribalism", "stops trade", "Families become multi-ethnic."],
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
        title: "Constituted authority",
        subtopics: ["Meaning of constituted authority", "Types of constituted authority", "Duties of citizens to constituted authority", "Consequences of disobeying constituted authority"],
        objectives: ["Define constituted authority", "Identify types of constituted authority", "State citizens' duties to constituted authority", "Explain the consequences of disobedience"],
        lesson: {
          title: "Respecting Lawful Authority",
          summary: "Explain constituted authority and the duty to respect it.",
          minutes: 40,
          notes: `## Meaning
**Constituted authority** is **power that is legally established and recognised** to govern, make decisions and enforce rules — for example, government, the police, courts, school authorities and traditional rulers.

## Types
| Level | Examples |
|---|---|
| **family** | parents, guardians |
| **school** | principal, teachers, prefects |
| **community** | traditional rulers, local government councils |
| **religious** | pastors, imams, priests |
| **national** | President, National Assembly, courts, police, armed forces |

## Sources of authority
the Constitution and laws, tradition and custom, elections and appointments, religious beliefs.

## Duties of citizens
- obey **lawful** instructions and laws
- pay **taxes** and levies
- support and cooperate with security agencies
- respect leaders and public officers
- express disagreement through **lawful** means (petitions, courts, peaceful protest, elections)

## Consequences of disobeying constituted authority
punishment (fines, imprisonment), disorder, breakdown of law and order, insecurity, loss of rights and privileges.

## Note
Authority must also act **lawfully**; citizens can challenge abuse of power through the courts and other legal channels.`,
          examples: `**Example 1.** Name a constituted authority in school. *Answer:* the **principal** (or teachers, prefects).

**Example 2.** Name one duty of citizens to constituted authority. *Answer:* **obeying the law**.

**Example 3.** How can a citizen challenge an unlawful order? *Answer:* Through **lawful means** such as the courts.`,
        },
        questions: [
          ["E", "Legally established and recognised power to govern is", "constituted authority", "anarchy", "rebellion", "tribalism", "It is lawful power."],
          ["E", "Which is a constituted authority in school?", "the principal", "a visitor", "a hawker", "a stranger", "The principal heads the school."],
          ["E", "Citizens should obey", "lawful instructions of constituted authority", "unlawful orders of criminals", "no one at all", "only friends", "Lawful authority deserves obedience."],
          ["M", "Which is a constituted authority at the national level?", "the National Assembly", "a football club", "a market association only", "a family", "It makes laws for the nation."],
          ["M", "Which is a source of authority?", "the Constitution", "rumours", "gossip", "force by thugs", "The Constitution creates lawful authority."],
          ["M", "Which is a duty of citizens to constituted authority?", "paying taxes", "evading taxes", "attacking the police", "destroying public property", "Taxes fund government."],
          ["M", "Disobeying constituted authority can lead to", "a breakdown of law and order", "more peace", "better security", "stronger unity", "Disobedience causes disorder."],
          ["H", "How should a citizen challenge an abuse of power by an official?", "through lawful means such as the courts", "by violence", "by destroying property", "by ignoring all laws", "Legal channels protect everyone."],
          ["H", "Traditional rulers derive their authority mainly from", "tradition and custom", "the market", "the weather", "sports", "Custom recognises their authority."],
          ["H", "Why should constituted authority also act lawfully?", "Authority is limited by law and must respect citizens' rights.", "Authority is above the law.", "Leaders can do anything.", "Laws apply only to citizens.", "No one is above the law."],
        ],
      },
      {
        week: 2,
        title: "Government: meaning and levels",
        subtopics: ["Meaning of government", "Arms of government", "Levels of government in Nigeria", "Functions of government"],
        objectives: ["Define government", "Identify the three arms of government", "Describe the three levels of government in Nigeria", "State the functions of government"],
        lesson: {
          title: "How Nigeria Is Governed",
          summary: "Describe the arms and levels of government and what government does.",
          minutes: 40,
          notes: `## Meaning
**Government** is the **institution** through which a state makes laws, enforces them and interprets them. It also refers to the **people** who exercise this authority.

## Arms of government
| Arm | Function | In Nigeria |
|---|---|---|
| **legislature** | makes laws | National Assembly (Senate + House of Representatives); State Houses of Assembly |
| **executive** | implements (executes) laws | President, governors, ministers, commissioners, civil service |
| **judiciary** | interprets laws and settles disputes | courts, headed by the Supreme Court |

## Levels of government
| Level | Head | Legislature |
|---|---|---|
| **federal** | President | National Assembly |
| **state** (36) | Governor | State House of Assembly |
| **local** (774 LGAs) | Chairman | Legislative Council (councillors) |
Nigeria is a **federation**: power is shared among these levels by the Constitution.

## Functions of government
- maintaining **law and order** and security
- defending the nation
- providing **social services**: education, health, water, roads, electricity
- managing the economy and creating jobs
- protecting citizens' **rights**
- conducting **foreign relations**`,
          examples: `**Example 1.** Which arm of government makes laws? *Answer:* the **legislature**.

**Example 2.** Who heads the executive at state level? *Answer:* the **Governor**.

**Example 3.** Name one function of government. *Answer:* **maintaining law and order** (or providing social services).`,
        },
        questions: [
          ["E", "The arm of government that makes laws is the", "legislature", "executive", "judiciary", "civil service", "Legislators make laws."],
          ["E", "The arm of government that interprets laws is the", "judiciary", "legislature", "executive", "police", "Courts interpret laws."],
          ["E", "The head of the federal government in Nigeria is the", "President", "Governor", "Chairman", "Senate President", "The President heads the executive."],
          ["M", "The National Assembly consists of the Senate and the", "House of Representatives", "State House of Assembly", "Supreme Court", "Federal Executive Council", "It is bicameral."],
          ["M", "The executive arm of government mainly", "implements laws", "makes laws", "interprets laws", "elects judges only", "It carries out laws."],
          ["M", "The head of a local government council is the", "Chairman", "Governor", "President", "Chief Justice", "The Chairman leads the LGA."],
          ["M", "How many levels of government does Nigeria have?", "3", "2", "4", "36", "Federal, state and local."],
          ["H", "The highest court in Nigeria is the", "Supreme Court", "High Court", "Magistrate Court", "Customary Court", "It heads the judiciary."],
          ["H", "A system in which power is shared between central and state governments is", "federalism", "unitary government", "monarchy", "anarchy", "Nigeria is a federation."],
          ["H", "Which is a function of government?", "providing social services such as education and health", "encouraging crime", "ignoring citizens' rights", "destroying roads", "Government serves the people."],
        ],
      },
      {
        week: 3,
        title: "Local government",
        subtopics: ["Meaning of local government", "Structure of local government", "Functions of local government", "Problems of local government"],
        objectives: ["Define local government", "Describe the structure of local government", "State the functions of local government", "Identify problems of local government and solutions"],
        lesson: {
          title: "Government Closest to the People",
          summary: "Describe the structure, functions and problems of local government.",
          minutes: 40,
          notes: `## Meaning
**Local government** is the **third tier of government**, closest to the people at the grassroots. Nigeria has **774 local government areas (LGAs)**.

## Structure
| Organ | Members | Role |
|---|---|---|
| **executive** | Chairman, Vice-Chairman, supervisory councillors, secretary | implements policies and runs the council |
| **legislative council** | elected **councillors** (one per ward), headed by a Leader | makes **bye-laws** and approves budgets |
| **civil service** | career staff | carries out daily administration |
Elections into local councils are conducted by **State Independent Electoral Commissions (SIECs)**.

## Functions (Fourth Schedule of the 1999 Constitution)
- building and maintaining **markets**, motor parks and local roads
- **registration of births, deaths and marriages**
- collection of **rates** (e.g. tenement rates) and radio and television licences
- refuse disposal and **sanitation**
- licensing of bicycles, canoes, wheelbarrows and carts, and **naming of roads and streets** and numbering of houses
- participating in **primary education**, health centres and agriculture
- control of outdoor advertising, shops and kiosks

## Problems
inadequate funds, corruption, interference by state governments, lack of skilled staff, poor accountability, unelected caretaker committees.

## Solutions
financial autonomy, regular elections, training of staff, accountability and anti-corruption measures.`,
          examples: `**Example 1.** How many local government areas are in Nigeria? *Answer:* **774**.

**Example 2.** Name one function of local government. *Answer:* **registration of births and deaths** (or building markets).

**Example 3.** Who conducts local government elections? *Answer:* the **State Independent Electoral Commission (SIEC)**.`,
        },
        questions: [
          ["E", "The third tier of government in Nigeria is", "local government", "federal government", "state government", "the judiciary", "It is closest to the people."],
          ["E", "The number of local government areas in Nigeria is", "774", "36", "37", "250", "Nigeria has 774 LGAs."],
          ["E", "Which is a function of local government?", "building markets", "printing currency", "declaring war", "foreign relations", "Markets are local responsibilities."],
          ["M", "Elected members of the local government legislative council are called", "councillors", "senators", "ministers", "commissioners", "Each ward elects a councillor."],
          ["M", "Laws made by local government councils are called", "bye-laws", "Acts", "decrees", "treaties", "They apply within the LGA."],
          ["M", "Registration of births, deaths and marriages is a function of", "local government", "the Supreme Court", "the Senate", "the armed forces", "It is a Fourth Schedule function."],
          ["M", "Local government elections are conducted by", "State Independent Electoral Commissions", "INEC", "the police", "NYSC", "SIECs conduct council elections."],
          ["H", "The functions of local government are listed in the 1999 Constitution's", "Fourth Schedule", "First Schedule", "Chapter IV", "Preamble", "The Fourth Schedule lists them."],
          ["H", "Which is a major problem of local government in Nigeria?", "inadequate funds", "too much money", "too many elections", "excess autonomy", "Councils lack resources."],
          ["H", "Which would improve local government performance?", "financial autonomy and accountability", "state interference", "unelected caretaker committees", "corruption", "Independence and accountability improve service."],
        ],
      },
      {
        week: 4,
        title: "Traditional institutions in governance",
        subtopics: ["Meaning of traditional institutions", "Traditional rulers in Nigeria", "Roles of traditional institutions", "Relationship with modern government"],
        objectives: ["Explain traditional institutions", "Identify traditional rulers in different parts of Nigeria", "Describe roles of traditional institutions today", "Explain their relationship with modern government"],
        lesson: {
          title: "Our Traditional Rulers",
          summary: "Describe traditional institutions and their roles in modern Nigeria.",
          minutes: 40,
          notes: `## Meaning
**Traditional institutions** are **indigenous systems of leadership and authority** that existed before colonial rule and are based on **custom and tradition**. They are headed by traditional rulers and chiefs.

## Traditional rulers in Nigeria
| People / area | Title |
|---|---|
| Hausa-Fulani emirates | **Emir** (e.g. Emir of Kano); Sultan of Sokoto (spiritual head of Muslims in Nigeria) |
| Yoruba kingdoms | **Oba** (e.g. Ooni of Ife, Alaafin of Oyo) |
| Igbo communities | **Obi** or **Igwe** (Eze) |
| Benin kingdom | **Oba of Benin** |
| Tiv | **Tor Tiv** |
| Kanem-Borno | **Shehu of Borno** |

## Pre-colonial political systems
- **centralised**: Hausa-Fulani emirates, Oyo Empire, Benin Kingdom (kings with councils)
- **decentralised (acephalous)**: many Igbo communities (village assemblies, age grades, council of elders)

## Roles today
- custodians of **culture and tradition**
- settling **disputes** (land, family, chieftaincy)
- promoting **peace and security**
- mobilising people for **development** and government programmes (immunisation, census, voter registration)
- link between **government and the people**
- advisory roles in state Councils of Traditional Rulers

## Relationship with modern government
Traditional rulers have **no executive or legislative powers** under the 1999 Constitution. They are recognised and regulated by **state governments** (appointment, grading) and work in partnership with local governments.`,
          examples: `**Example 1.** What is the title of the traditional ruler of the Yoruba kingdom of Ife? *Answer:* the **Ooni of Ife**.

**Example 2.** Name one role of traditional rulers today. *Answer:* **settling disputes** (or preserving culture).

**Example 3.** Which Igbo communities had decentralised governments? *Answer:* **many Igbo communities**, governed by village assemblies and elders.`,
        },
        questions: [
          ["E", "Indigenous leadership systems based on custom are", "traditional institutions", "political parties", "courts of appeal", "banks", "They predate colonial rule."],
          ["E", "The traditional ruler of a Hausa-Fulani emirate is called", "Emir", "Oba", "Obi", "Tor", "Emirs rule emirates."],
          ["E", "The traditional ruler of Ife is the", "Ooni", "Alaafin", "Emir", "Shehu", "The Ooni is the ruler of Ile-Ife."],
          ["M", "The Tor Tiv is the traditional ruler of the", "Tiv", "Yoruba", "Igbo", "Kanuri", "It is the Tiv paramount ruler."],
          ["M", "Which is a role of traditional rulers today?", "settling disputes", "making federal laws", "commanding the army", "printing money", "They mediate conflicts."],
          ["M", "The Sultan of Sokoto is regarded as the", "spiritual head of Muslims in Nigeria", "head of the judiciary", "President of the Senate", "Chief of Army Staff", "He heads the Sokoto Caliphate."],
          ["M", "Traditional rulers help government by", "mobilising people for programmes like immunisation", "collecting federal taxes directly", "conducting elections", "making constitutions", "People trust their rulers."],
          ["H", "Societies without centralised rulers, like many Igbo communities, had", "decentralised (acephalous) governments", "powerful emperors", "military governors", "colonial governors", "Elders and assemblies governed."],
          ["H", "Under the 1999 Constitution, traditional rulers", "have no executive or legislative powers", "make federal laws", "head the judiciary", "control the armed forces", "They play advisory roles."],
          ["H", "The Shehu is the traditional ruler of", "Borno", "Benin", "Oyo", "Enugu", "The Shehu heads the Kanem-Borno tradition."],
        ],
      },
      {
        week: 5,
        title: "Human rights: meaning and features",
        subtopics: ["Meaning of human rights", "Features of human rights", "Categories of human rights", "Universal Declaration of Human Rights"],
        objectives: ["Define human rights", "State the features of human rights", "Classify human rights", "Explain the Universal Declaration of Human Rights"],
        lesson: {
          title: "Rights Every Human Deserves",
          summary: "Explain human rights, their features and categories.",
          minutes: 40,
          notes: `## Meaning
**Human rights** are the **basic rights and freedoms** to which **every human being** is entitled simply because he or she is human.

## Features (characteristics)
- **universal** — for all people everywhere
- **inalienable** — cannot be taken away (except by due process of law in limited cases)
- **indivisible and interdependent** — all rights are connected
- **equal and non-discriminatory**
- **protected by law** (constitutions and international treaties)
- **limited** — rights must be exercised without violating others' rights and may be restricted for public safety

## Categories
| Category | Examples |
|---|---|
| **civil and political rights** | life, dignity, fair hearing, freedom of expression, religion, movement, association, voting |
| **economic, social and cultural rights** | education, work, health, adequate standard of living, culture |
| **environmental and group rights** | clean environment, development, peace |
In Nigeria, civil and political rights are **fundamental rights** in **Chapter IV** of the Constitution; economic and social rights appear in **Chapter II** (Fundamental Objectives and Directive Principles).

## Universal Declaration of Human Rights (UDHR)
Adopted by the **United Nations General Assembly** on **10 December 1948**. **10 December** is celebrated as **Human Rights Day**.

## Protecting human rights in Nigeria
courts, the **National Human Rights Commission (NHRC)**, NGOs, the press, and citizens' awareness.`,
          examples: `**Example 1.** When was the Universal Declaration of Human Rights adopted? *Answer:* **10 December 1948**.

**Example 2.** What does "inalienable" mean? *Answer:* Rights that **cannot be taken away**.

**Example 3.** Is the right to vote civil/political or economic? *Answer:* **civil and political**.`,
        },
        questions: [
          ["E", "Basic rights to which every human being is entitled are", "human rights", "privileges of the rich", "school rules", "taxes", "Everyone has them because they are human."],
          ["E", "Which is a human right?", "right to life", "right to steal", "right to cheat", "right to fight", "Life is the most basic right."],
          ["E", "Human Rights Day is celebrated on", "10 December", "1 October", "12 June", "25 December", "It marks the UDHR of 1948."],
          ["M", "Human rights are universal because they", "apply to all people everywhere", "apply only to adults", "apply only to citizens of rich countries", "change daily", "No one is excluded."],
          ["M", "Rights that cannot be taken away arbitrarily are described as", "inalienable", "temporary", "optional", "divisible", "They belong to every person permanently."],
          ["M", "The Universal Declaration of Human Rights was adopted in", "1948", "1960", "1999", "1914", "The UN adopted it in 1948."],
          ["M", "The right to education is an example of", "economic, social and cultural rights", "civil rights only", "military rights", "privileges", "It is a social right."],
          ["H", "The Nigerian body established to promote and protect human rights is the", "National Human Rights Commission", "NAFDAC", "INEC", "FRSC", "The NHRC investigates violations."],
          ["H", "Human rights are limited because they", "must be exercised without violating others' rights", "do not exist", "are only for leaders", "can never be enforced", "One person's rights end where another's begin."],
          ["H", "In the 1999 Constitution, fundamental rights are found in", "Chapter IV", "Chapter II", "Chapter VII", "the Fourth Schedule", "Chapter IV protects civil and political rights."],
        ],
      },
      {
        week: 6,
        title: "Duties and obligations of citizens",
        subtopics: ["Meaning of duties and obligations", "Duties of citizens to the state", "Obligations of government to citizens", "Consequences of neglecting duties"],
        objectives: ["Define duties and obligations", "State the duties of citizens to the state", "State the obligations of government to citizens", "Explain consequences of neglecting civic duties"],
        lesson: {
          title: "Give and Take: Citizens and the State",
          summary: "Explain what citizens owe the state and what the state owes citizens.",
          minutes: 40,
          notes: `## Meanings
- A **duty** is what a citizen is **morally or legally expected** to do.
- An **obligation** is a duty that is **required by law** or by commitment.

## Duties of citizens to the state (Section 24 of the 1999 Constitution and civic expectations)
- **abide by the Constitution** and respect its ideals and institutions, the national flag, anthem and pledge
- **pay taxes** promptly
- **obey the law** and help law enforcement agencies
- **vote** and take part in elections
- defend Nigeria and render **national service** when required
- **protect public property**
- respect the rights, dignity and religion of others
- contribute to the advancement and welfare of the community
- make positive contributions to national development

## Obligations of government to citizens
- **security** of lives and property (the primary purpose of government under Section 14)
- **welfare**: education, health, water, electricity, roads
- **protection of rights** and justice
- creating an environment for **employment** and economic growth
- **accountability** and transparency

## Consequences of neglecting duties
- **tax evasion** — poor public services
- **voter apathy** — bad leaders
- **vandalism** — loss of public facilities
- **disobedience** — insecurity and disorder
Rights and duties go together: a nation prospers when both citizens and government perform their roles.`,
          examples: `**Example 1.** Name one duty of a citizen. *Answer:* **paying taxes** (or obeying the law, voting).

**Example 2.** What is the primary purpose of government under the Constitution? *Answer:* the **security and welfare of the people**.

**Example 3.** What happens when many citizens evade taxes? *Answer:* Government lacks funds for **public services**.`,
        },
        questions: [
          ["E", "Which is a duty of a citizen?", "paying taxes", "evading taxes", "vandalism", "cheating", "Taxes fund government services."],
          ["E", "Which is an obligation of government to citizens?", "providing security", "stealing public funds", "ignoring citizens", "causing insecurity", "Security is government's primary duty."],
          ["E", "Protecting public property is a duty of", "every citizen", "only the police", "only the President", "foreigners only", "Public property belongs to all."],
          ["M", "The primary purpose of government under Section 14 of the Constitution is", "the security and welfare of the people", "enriching leaders", "collecting fines", "sports", "People's welfare is paramount."],
          ["M", "Refusing to vote because one has lost interest is", "voter apathy", "civic duty", "patriotism", "registration", "Apathy weakens democracy."],
          ["M", "Tax evasion leads to", "poor public services", "better roads", "more hospitals", "higher salaries", "Government lacks revenue."],
          ["M", "The duties of citizens are listed in which section of the 1999 Constitution?", "Section 24", "Section 1", "Section 33", "Section 130", "Section 24 lists citizens' duties."],
          ["H", "Destroying public facilities during protests is", "vandalism", "civic duty", "community service", "patriotism", "It damages what belongs to everyone."],
          ["H", "Why do rights and duties go together?", "A nation prospers only when both citizens and government perform their roles.", "Only government has duties.", "Only citizens have rights.", "Rights cancel duties.", "They are complementary."],
          ["H", "Helping the police by giving useful information about crime is", "a civic duty", "a crime", "betrayal", "unnecessary", "Citizens support law enforcement."],
        ],
      },
    ],
  },
];
