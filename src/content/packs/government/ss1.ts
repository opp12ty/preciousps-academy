import type { TermPlan } from "../types";

/** SS1 Government — original Precious PS content following the national senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and scope of government",
        subtopics: ["Government as an institution of the state", "Government as a process or art of governing", "Government as an academic field of study", "Functions of government and reasons for studying it"],
        objectives: ["Explain government as an institution of the state", "Explain government as a process of governing", "Describe government as an academic subject and its sub-fields", "State the functions of government and the reasons for studying it"],
        lesson: {
          title: "What Government Means",
          summary: "Explain the three meanings of government and state its functions.",
          minutes: 40,
          notes: `## Three meanings of government
### 1. Government as an institution of the state
The **machinery through which the will of the state is formulated, expressed and carried out** — the body of persons and institutions that makes and enforces laws for a society. It works through three organs:
- the **legislature** — makes laws
- the **executive** — implements laws and policies
- the **judiciary** — interprets laws and settles disputes
Government is one of the four features of a **state**, with population, territory and sovereignty. Governments change; the state endures.

### 2. Government as a process or art of governing
The **activities by which a society is ruled** — making policies, taking decisions, maintaining order, sharing resources and resolving conflicts. In this sense government goes on wherever people are organised: in a state, a town, a school or a club.

### 3. Government as an academic field of study
The **study of political institutions, ideas and processes** — in universities usually called **political science**. Its sub-fields include:
- **political theory** — ideas about power, justice and the state
- **comparative politics** — comparing systems of government
- **public administration** — how policies are carried out
- **international relations** — dealings among states
- **local government**; political economy; political sociology

## Characteristics of government
- **political power** — the authority to make and enforce decisions
- **law** — it rules through laws
- **personnel** — officials who run it
- **revenue** — taxes and other income
- public support (legitimacy)
- continuity — it changes hands in an orderly way

## Functions of government
- **making laws**
- **maintaining law and order** — through the police and courts
- **defence** of the country against external attack
- **protecting the lives and property** of citizens
- **administering justice**
- providing **social services** — education, health, water, roads, electricity
- promoting **economic development** — planning, employment, control of the economy
- conducting **foreign relations**
- collecting **revenue** and managing public funds
- protecting **fundamental human rights**
- providing welfare for the needy; promoting national unity

## Why government is necessary
Without government there would be **anarchy** — disorder, insecurity and the rule of the strong. Government regulates behaviour, settles disputes peacefully and provides services that individuals cannot provide for themselves.

## State and government distinguished
| State | Government |
|---|---|
| a politically organised body of people in a defined territory, with sovereignty | the agency that carries out the will of the state |
| permanent | changes from time to time |
| includes all the people | consists of a few officials |
| an abstract idea | concrete — it can be seen at work |
| possesses sovereignty | exercises sovereignty on behalf of the state |

## Reasons for studying government
- to understand **how we are governed** and how decisions are made
- to know our **rights and duties** as citizens
- to take an informed part in public affairs — voting, debate, holding leaders to account
- to understand the **institutions** of our own and other countries
- to develop **political awareness** and tolerance
- to prepare for **careers** in law, administration, diplomacy, politics, journalism and teaching
- to appreciate the country's political history and its relations with other countries
- to help solve national problems

## Related ideas
- **politics** — the struggle for and use of power; "who gets what, when and how"
- **nation** — a people sharing a common language, culture and history
- **society** — people living together with shared ways of life
- **country** — the territory of a state`,
          examples: `**Example 1.** Name the three organs of government and their main functions. *Answer:* The **legislature** makes laws; the **executive** implements them; the **judiciary** interprets them.

**Example 2.** Give three functions of government. *Answer:* **Law making, maintenance of law and order, and provision of social services**.

**Example 3.** State one difference between the state and government. *Answer:* The **state is permanent**; **government changes**.`,
        },
        questions: [
          ["E", "The organ of government responsible for making laws is the", "legislature", "executive", "judiciary", "civil service", "It is also called parliament or the national assembly."],
          ["E", "The machinery through which the will of the state is formulated and carried out is", "government", "a political party", "a pressure group", "the electorate", "It works through three organs."],
          ["E", "A situation in which there is no government and no law is", "anarchy", "democracy", "monarchy", "federalism", "Disorder and insecurity result."],
          ["M", "Government as an academic field of study is known in universities as", "political science", "sociology", "economics", "jurisprudence only", "It studies political institutions and ideas."],
          ["M", "Which of the following is a function of government?", "maintenance of law and order", "formation of trade unions", "ownership of all private businesses", "election of class captains", "It protects lives and property."],
          ["M", "The organ of government that interprets the law is the", "judiciary", "legislature", "executive", "electorate", "It also settles disputes."],
          ["M", "The four features of a state are population, territory, sovereignty and", "government", "a political party", "an army only", "a single language", "Government is the agency of the state."],
          ["H", "A difference between the state and government is that", "the state is permanent while government changes", "government is permanent while the state changes", "the state consists of a few officials", "government includes all the people", "Governments come and go; the state remains."],
          ["H", "Government viewed as 'the art of governing' refers to", "the activities by which a society is ruled", "the buildings in the capital city", "the study of political theory in universities", "the constitution alone", "It is the process of making and enforcing decisions."],
          ["H", "The sub-field of political science that deals with the relations among states is", "international relations", "public administration", "local government", "political theory", "It covers diplomacy and international organisations."],
        ],
      },
      {
        week: 2,
        title: "Basic concepts: power, authority, legitimacy and sovereignty",
        subtopics: ["Power and its forms", "Authority and its sources", "Legitimacy", "Sovereignty: types and limitations"],
        objectives: ["Explain power and describe its forms and sources", "Explain authority and its types", "Explain legitimacy and the factors that sustain it", "Explain sovereignty, its types, location and limitations"],
        lesson: {
          title: "Power, Authority, Legitimacy and Sovereignty",
          summary: "Explain four key concepts used in the study of government.",
          minutes: 40,
          notes: `## Power
The **ability to control or influence the behaviour of others, with or without their consent** — to make them do what they would otherwise not do. It may rest on force, reward or persuasion.
### Forms
- **political power** — exercised by those who control the government
- **economic power** — control of wealth and resources
- **military power** — control of the armed forces
- **physical power** — force
### Sources (how power is acquired)
the constitution and elections; force (a coup d'état); inheritance; wealth; knowledge and position; charisma; religion.
### How power is exercised
by **persuasion**, **reward**, **coercion (force)** or **sanctions**.

## Authority
The **legitimate (recognised) right to give orders and be obeyed** — power that people accept as rightful.
### Types (Max Weber)
- **traditional authority** — based on **custom and inheritance**: obas, emirs, obis, chiefs
- **charismatic authority** — based on the **exceptional personal qualities** of a leader that attract followers
- **legal-rational authority** — based on **law and office**: a president, governor or judge, obeyed because of the office held under the constitution
Others: **delegated authority** — passed down from a superior; **coercive authority** — backed by force; technical authority — based on expertise.

### Power and authority compared
| Power | Authority |
|---|---|
| ability to compel obedience | the **right** to command |
| may rest on **force** | rests on **consent** and recognition |
| may be illegitimate | is legitimate |
| cannot easily be delegated | can be delegated |
Authority is **power + legitimacy**.

## Legitimacy
The **acceptance and recognition by the people of the right of a government or ruler to rule**. A legitimate government is obeyed willingly.
### Factors that determine legitimacy
- coming to power by **constitutional means** — free and fair elections
- **good governance** and performance — meeting people's needs
- respect for the **rule of law** and human rights
- **popular participation** and support
- **tradition and custom**
- respected leadership
- acceptance by other countries (recognition)
A government that seizes power by force may later gain legitimacy through performance; one that was elected may lose it through misrule.

## Sovereignty
The **supreme and final power of the state to make and enforce laws within its territory, free from external control**. The idea was developed by the French thinker **Jean Bodin** (1576).
### Characteristics
**absoluteness** (no higher power within the state); **permanence**; **indivisibility**; **comprehensiveness** (covers everyone in the territory); **inalienability**.
### Types
- **legal sovereignty** — the supreme power to **make law**: parliament or the constitution
- **political (popular) sovereignty** — the power of the **people (electorate)**, who choose and remove governments
- **internal sovereignty** — supreme power over all persons and groups **within** the state
- **external sovereignty** — **independence** from control by other states
- **de jure sovereignty** — power held **by legal right**
- **de facto sovereignty** — power held **in fact**, whether or not lawfully — as by a military regime after a coup
### Location of sovereignty
- in a **monarchy** — the monarch
- in a **unitary state** — the central government (parliament)
- in a **federal state** — the constitution, with powers shared between the centre and the units
- in a **democracy** — ultimately the people
- under military rule — the ruling military council

### Limitations
- **international law** and treaties
- membership of **international organisations** (the United Nations, ECOWAS)
- the **constitution** and the rule of law
- **public opinion** and pressure groups
- **economic dependence** — foreign aid and debt
- the influence of **powerful nations**
- customs and traditions
- lack of military and technological strength

## Why these concepts matter
Stable government needs **power** to enforce decisions, **authority and legitimacy** so that it is obeyed willingly, and **sovereignty** so that its decisions are final.`,
          examples: `**Example 1.** Distinguish power from authority. *Answer:* **Power** is the **ability to compel obedience**; **authority** is the **recognised right** to command.

**Example 2.** What type of authority does an emir or oba exercise? *Answer:* **Traditional** authority.

**Example 3.** Give two limitations on the sovereignty of a state. *Answer:* **International law** and **membership of international organisations**.`,
        },
        questions: [
          ["E", "The ability to control or influence the behaviour of others is", "power", "legitimacy", "sovereignty", "franchise", "It may rest on force or persuasion."],
          ["E", "The recognised right to give orders and be obeyed is", "authority", "coercion", "anarchy", "propaganda", "It is power accepted as rightful."],
          ["E", "The supreme power of a state to make and enforce laws within its territory is", "sovereignty", "legitimacy", "federalism", "citizenship", "No higher power exists within the state."],
          ["M", "The authority of an oba or emir, based on custom and inheritance, is", "traditional authority", "charismatic authority", "legal-rational authority", "delegated authority", "It is one of Max Weber's three types."],
          ["M", "The acceptance by the people of a government's right to rule is known as", "legitimacy", "sovereignty", "delegation", "suffrage", "A legitimate government is obeyed willingly."],
          ["M", "The French thinker associated with the concept of sovereignty is", "Jean Bodin", "A. V. Dicey", "Baron de Montesquieu", "Karl Marx", "He wrote in the sixteenth century."],
          ["M", "The independence of a state from control by other states is", "external sovereignty", "internal sovereignty", "popular sovereignty", "legal sovereignty", "It is the outward aspect of sovereignty."],
          ["H", "Sovereignty exercised by a military government that seized power in a coup is described as", "de facto", "de jure", "popular", "legal", "It holds power in fact, not by legal right."],
          ["H", "In a federal state, sovereignty is located in", "the constitution", "the monarch", "the ruling party", "the civil service", "Powers are shared between the centre and the units."],
          ["H", "Which of the following is a limitation on the sovereignty of a state?", "membership of international organisations", "possession of a national flag", "a large population", "a written constitution of any kind", "States accept obligations that restrict their freedom of action."],
        ],
      },
      {
        week: 3,
        title: "Basic concepts: democracy, political culture and socialisation",
        subtopics: ["Democracy: meaning, types and features", "Conditions for and problems of democracy", "Political culture", "Political socialisation and participation"],
        objectives: ["Explain democracy, its types and features", "State the conditions necessary for democracy and its problems", "Explain political culture and its types", "Explain political socialisation, its agents and political participation"],
        lesson: {
          title: "Democracy and Political Behaviour",
          summary: "Explain democracy, political culture, political socialisation and participation.",
          minutes: 40,
          notes: `## Democracy
From the Greek *demos* (people) and *kratia* (rule). **Abraham Lincoln** described it as "**government of the people, by the people and for the people**". It is a system in which **the people rule, directly or through their freely elected representatives**.

### Types
- **direct democracy** — all citizens meet to take decisions, as in the ancient Greek city-states; workable only in small communities
- **indirect (representative) democracy** — citizens **elect representatives** to make laws and govern on their behalf; the modern form

### Features
- **periodic, free and fair elections**
- **universal adult suffrage**
- **majority rule** with respect for **minority rights**
- **rule of law** and equality before the law
- **fundamental human rights** — freedom of speech, press, association and religion
- existence of **opposition parties** and more than one party
- an **independent judiciary**
- **separation of powers**
- **accountability** of rulers to the people
- a **free press**
- popular consultation — referendums, public opinion

### Conditions for successful democracy
an educated and enlightened electorate; tolerance; a free press; an independent electoral body; economic well-being; honest leadership; respect for the constitution; a strong opposition; an impartial judiciary; a politically neutral army and civil service.

### Merits
it protects rights; rulers are accountable; peaceful change of government; people take part; it encourages debate and stability.
### Demerits
slow decisions; expensive (elections); may bring incompetent people to power; the majority may oppress the minority; open to bribery, rigging and manipulation of ignorant voters.

## Political culture
The **attitudes, beliefs, values and feelings of the people towards the political system** — their orientation to politics and government.
### Components
- **cognitive** — what people **know** about the system
- **affective** — what they **feel** about it
- **evaluative** — how they **judge** it
### Types (Almond and Verba)
- **parochial** — people are hardly aware of the central government and expect nothing from it; found in traditional societies
- **subject** — people are aware of government and obey it, but do **not participate**; common under authoritarian rule
- **participant** — people are aware and take an **active part** in politics; found in democracies
Most countries have a mixture — the "**civic culture**".
### Determinants
history; ethnicity; religion; education; economic conditions; geography; colonial experience.

## Political socialisation
The **process by which people acquire political attitudes, values and beliefs** — how political culture is passed from one generation to the next.
### Agents
- the **family** — the first and most important
- the **school** — civic lessons, history, the national anthem and pledge
- **peer groups**
- **religious institutions**
- the **mass media** — radio, television, newspapers, social media
- **political parties**
- **pressure groups** and voluntary associations
- the government itself
### Importance
it creates loyal, informed citizens; promotes national unity and stability; prepares people for political roles; transmits the political culture.

## Political participation
The **involvement of citizens in the political activities** of their country.
### Forms
voting; standing for election; joining and financing political parties; attending rallies and campaigns; discussing politics; contacting officials; joining pressure groups; peaceful protest; holding public office.
### Factors affecting participation
education; income and occupation; age and sex; political awareness; the electoral system; religion and culture; trust in the system.
### Political apathy
**Indifference** to politics — refusal to register, vote or take any interest.
**Causes:** rigging and violence; unfulfilled promises; illiteracy; poverty; religious beliefs; bad governance; fear.
**Remedies:** free and fair elections; political education; good governance; security.

## Other basic concepts
- **state** — a politically organised people in a defined territory with a government and sovereignty
- **nation** — a people with a common descent, language, culture and history
- **nation-state** — a state whose people form one nation
- **society** — a group of people sharing a common way of life`,
          examples: `**Example 1.** Give Abraham Lincoln's definition of democracy. *Answer:* "**Government of the people, by the people and for the people**".

**Example 2.** Name four agents of political socialisation. *Answer:* **The family, the school, peer groups and the mass media**.

**Example 3.** What is political apathy? *Answer:* **Indifference to political activities**, such as refusal to vote.`,
        },
        questions: [
          ["E", "'Government of the people, by the people and for the people' is a definition of", "democracy", "monarchy", "oligarchy", "feudalism", "It was given by Abraham Lincoln."],
          ["E", "The first and most important agent of political socialisation is the", "family", "political party", "mass media", "army", "A child's earliest attitudes are formed at home."],
          ["E", "A system in which citizens elect representatives to govern on their behalf is", "representative democracy", "direct democracy", "absolute monarchy", "military rule", "It is the modern form of democracy."],
          ["M", "The attitudes, beliefs and values of a people towards their political system make up their", "political culture", "political party", "constitution", "franchise", "It shapes how they relate to government."],
          ["M", "The process by which people acquire political attitudes and values is", "political socialisation", "political apathy", "gerrymandering", "lobbying", "It passes political culture to the next generation."],
          ["M", "A feature of democracy is", "periodic free and fair elections", "rule by decree", "a single permitted party", "censorship of the press", "Leaders are chosen and removed by the people."],
          ["M", "Indifference of citizens to the political activities of their country is", "political apathy", "political participation", "political socialisation", "political culture", "People refuse to register or vote."],
          ["H", "A political culture in which people are aware of the government and obey it but do not take part in politics is", "subject political culture", "parochial political culture", "participant political culture", "civic culture", "It is common under authoritarian rule."],
          ["H", "Direct democracy is impracticable in modern states mainly because of", "their large populations and territories", "the absence of laws", "the lack of political parties", "the existence of courts", "All citizens cannot assemble to take decisions."],
          ["H", "A major cause of political apathy in many developing countries is", "election rigging and unfulfilled promises", "a high standard of political education", "free and fair elections", "good governance", "People lose faith that their votes count."],
        ],
      },
      {
        week: 4,
        title: "Political ideologies: communalism to fascism",
        subtopics: ["Communalism and feudalism", "Capitalism", "Socialism and communism", "Fascism, totalitarianism and other systems"],
        objectives: ["Describe communalism and feudalism", "Describe the features, merits and demerits of capitalism", "Distinguish socialism from communism", "Describe fascism, totalitarianism and related systems"],
        lesson: {
          title: "Systems of Political and Economic Organisation",
          summary: "Describe communalism, feudalism, capitalism, socialism, communism and fascism.",
          minutes: 40,
          notes: `## Communalism
A system in which **property, especially land, is owned in common by the community** and people work together and share the produce. It was the pattern of traditional African societies.
### Features
communal ownership of land; co-operation and mutual help; production for use, not profit; no sharp classes; leadership by elders; strong kinship ties; care of the weak.
### Merits and demerits
It promotes unity, equality and security; but it discourages individual initiative and yields low output.

## Feudalism
A system based on the **ownership of land by a few lords**, who granted its use to others in return for **service and loyalty**. It prevailed in medieval Europe and in parts of pre-colonial Africa and Asia.
### Structure
**king → nobles (lords) → vassals (knights) → serfs (peasants)**. The land granted was a **fief**; serfs were tied to the land and paid dues in labour and produce.
### Features
land as the basis of wealth and power; a rigid class hierarchy; exploitation of serfs; lords provided protection and justice; little social mobility; political power was decentralised among the lords.

## Capitalism
An economic and political system in which the **means of production are privately owned** and run for **profit**. Its classical thinker was **Adam Smith** (*The Wealth of Nations*, 1776).
### Features
private ownership; the **profit motive**; **competition**; a **free market** — prices fixed by demand and supply; freedom of enterprise and choice; little government interference (laissez-faire); existence of classes — owners (bourgeoisie) and workers (proletariat).
### Merits
efficiency and innovation; hard work rewarded; wide choice for consumers; rapid economic growth; individual freedom.
### Demerits
inequality of wealth; exploitation of workers; unemployment and economic crises; monopolies; neglect of the poor and of unprofitable services.

## Socialism
A system in which the **major means of production and distribution are owned and controlled by the state** on behalf of the people. Its leading thinkers were **Karl Marx** and **Friedrich Engels** (*The Communist Manifesto*, 1848).
### Features
state (collective) ownership of key industries; **central planning**; production for use rather than profit; distribution on the principle "from each according to his **ability**, to each according to his **work**"; narrowing of the gap between rich and poor; free or subsidised social services.
### Merits
greater equality; full employment; essential services for all; no private exploitation.
### Demerits
little incentive; bureaucracy; limited freedom and choice; inefficiency; concentration of power in the state.

## Communism
In Marxist theory, the **final and highest stage of socialism**: a **classless and stateless** society in which all property is owned in common and distribution is "from each according to his ability, to each according to his **needs**".
### Features
no private property; no classes; the state "withers away"; abundance; in practice — rule by a single communist party (the former Soviet Union, China, Cuba).

### Socialism and communism compared
| Socialism | Communism |
|---|---|
| a transitional stage | the final stage |
| the state exists and owns the means of production | the state disappears |
| reward according to **work** | reward according to **need** |
| some private property may remain | no private property |

## Fascism
An **extreme nationalist, authoritarian** ideology which glorifies the **state, the nation and the leader** above the individual. It arose in **Italy under Benito Mussolini** (1922); its German form was **Nazism under Adolf Hitler**.
### Features
a **single party** and an all-powerful **dictator**; no opposition; **extreme nationalism** and racism; glorification of war and military strength; suppression of rights and of trade unions; state control of the press, education and the economy; propaganda and secret police.

## Totalitarianism
A system in which the **state controls every aspect of public and private life** — politics, the economy, education, the press, religion — through a single party and ideology. Both fascist and communist dictatorships have been totalitarian.

## Other terms
- **oligarchy** — rule by a few; **aristocracy** — rule by a privileged class; **plutocracy** — rule by the rich
- **theocracy** — rule by religious leaders according to religious law
- **welfare state** — a state that provides wide social services while keeping private enterprise
- **mixed economy** — both private and public ownership, as in Nigeria`,
          examples: `**Example 1.** State two features of capitalism. *Answer:* **Private ownership of the means of production** and the **profit motive**.

**Example 2.** How does communism differ from socialism in distribution? *Answer:* Under **socialism** people are rewarded according to **work**; under **communism**, according to **need**.

**Example 3.** Who introduced fascism in Italy? *Answer:* **Benito Mussolini**.`,
        },
        questions: [
          ["E", "A system in which land and other property are owned in common by the community is", "communalism", "capitalism", "fascism", "feudalism", "It was typical of traditional African societies."],
          ["E", "An economic system in which the means of production are privately owned and run for profit is", "capitalism", "socialism", "communism", "communalism", "Adam Smith is its classical thinker."],
          ["E", "Fascism was introduced in Italy by", "Benito Mussolini", "Karl Marx", "Adam Smith", "Abraham Lincoln", "He came to power in 1922."],
          ["M", "In the feudal system, peasants who were tied to the land and worked for the lord were called", "serfs", "nobles", "vassals", "bourgeoisie", "They paid dues in labour and produce."],
          ["M", "The authors of 'The Communist Manifesto' were", "Karl Marx and Friedrich Engels", "Adam Smith and David Ricardo", "Mussolini and Hitler", "Locke and Rousseau", "It was published in 1848."],
          ["M", "State ownership of the major means of production and central planning are features of", "socialism", "capitalism", "feudalism", "communalism", "The state acts on behalf of the people."],
          ["M", "A system in which the state controls every aspect of public and private life is", "totalitarianism", "liberal democracy", "federalism", "communalism", "It uses a single party and ideology."],
          ["H", "The principle 'from each according to his ability, to each according to his needs' describes", "communism", "socialism", "capitalism", "feudalism", "It is the final stage in Marxist theory."],
          ["H", "A feature of fascism is", "extreme nationalism and glorification of the leader", "a multi-party system", "a free press", "protection of the rights of opposition parties", "The state is placed above the individual."],
          ["H", "Capitalism is criticised mainly because it", "creates wide inequality of wealth", "abolishes private property", "prevents competition", "is run by a single party", "A few owners may control most of the wealth."],
        ],
      },
      {
        week: 5,
        title: "Unitary, federal and confederal systems of government",
        subtopics: ["The unitary system", "The federal system", "The confederal system", "Comparison of the three systems"],
        objectives: ["Describe the features, merits and demerits of a unitary system", "Describe the features, merits and demerits of a federal system", "Describe the features, merits and demerits of a confederal system", "Compare unitary, federal and confederal systems"],
        lesson: {
          title: "How Power Is Shared Between Centre and Regions",
          summary: "Describe and compare unitary, federal and confederal systems of government.",
          minutes: 40,
          notes: `## The unitary system
A system in which **all governmental powers are concentrated in a single central government**. Any local or regional authorities are created by the centre and exercise only **delegated** powers, which the centre can alter or withdraw.
*Examples:* Britain, France, Ghana, Italy, Kenya.
### Features
- a **single central government** with supreme power
- **no constitutional division** of powers
- the constitution is usually **flexible** and may be unwritten
- **parliamentary supremacy**
- local authorities are **subordinate** to the centre
- usually suited to small, homogeneous countries
- a single set of laws and one citizenship
### Merits
- **simple and cheap** to run — no duplication
- **quick decisions**
- **strong, stable** government; promotes national unity and loyalty
- uniform laws and development
- no conflict of authority
- flexible constitution
### Demerits
- the centre is **overburdened**
- **local interests and minorities** may be neglected
- may lead to **dictatorship**
- discourages local initiative
- unsuitable for large or diverse countries
- government is remote from the people

## The federal system
A system in which **powers are constitutionally divided between a central (federal) government and component units (states or regions)**, each supreme in its own sphere.
*Examples:* Nigeria, the USA, India, Canada, Brazil, Australia.
### Features
- **constitutional division of powers** — **exclusive**, **concurrent** and **residual** lists
- a **written and rigid** constitution
- **supremacy of the constitution**
- a **supreme court** to interpret the constitution and settle disputes between governments
- usually a **bicameral** legislature, with equal representation of the units in one chamber
- each level of government **derives its powers from the constitution**, not from the other
- **dual** government — both act directly on the citizens
- units cannot secede

### Division of powers in Nigeria
- **exclusive list** — federal only: defence, currency, foreign affairs, immigration, customs, mining
- **concurrent list** — both federal and state: education, health, agriculture, roads; federal law prevails in a conflict
- **residual list** — states only: chieftaincy, local government, markets

### Reasons for adopting federalism
- **large size** of the country
- **ethnic, religious and cultural diversity** — "unity in diversity"
- fear of **domination** by one group; protection of **minorities**
- to bring government **nearer to the people**
- economic reasons — pooling resources; a larger market
- security against external attack
- historical and colonial experience

### Merits
- reconciles **unity with local autonomy**
- protects **minorities**
- brings government closer to the people; encourages participation
- **prevents dictatorship** — power is divided
- healthy rivalry and even development
- lessens the burden on the centre
- creates more employment and training grounds for leaders
### Demerits
- **expensive** — duplication of offices and functions
- **conflicts** over powers and revenue
- **slow** decision-making; a rigid constitution
- uneven development among units
- may encourage **sectionalism** and threats of secession
- dual loyalty

## The confederal system
A **loose union of sovereign states** that agree to co-operate for specific purposes — defence, trade, foreign affairs — while each **keeps its sovereignty**.
*Examples:* the United States under the Articles of Confederation (1781–1789); the Confederation of Senegambia (1982–1989); Switzerland before 1848.
### Features
- the **component states are sovereign** and more powerful than the centre
- the central body is **weak**, with only the powers the states give it
- states have the **right to secede**
- the centre has **no direct authority over citizens** — it acts through the states
- citizens owe loyalty to their own states; states keep their own armies
- decisions depend on the agreement of the member states
### Merits
states keep their independence and identity; co-operation in defence and trade; suits states wishing to unite gradually.
### Demerits
a weak and unstable centre; easy break-up; no common citizenship or strong loyalty; slow, uncertain decisions.

## Comparison
| | Unitary | Federal | Confederal |
|---|---|---|---|
| centre | all-powerful | shares power with units | weak |
| units | subordinate | co-ordinate | sovereign |
| constitution | flexible, may be unwritten | written and rigid | an agreement (treaty) |
| secession | not applicable | not allowed | allowed |
| cost | cheap | expensive | varies |`,
          examples: `**Example 1.** Give two features of a federal system. *Answer:* **Constitutional division of powers** and a **written, rigid constitution**.

**Example 2.** Name three subjects on Nigeria's exclusive list. *Answer:* **Defence, currency and foreign affairs**.

**Example 3.** How does a confederation differ from a federation on secession? *Answer:* In a **confederation** states **may secede**; in a **federation** they may not.`,
        },
        questions: [
          ["E", "A system of government in which all powers are concentrated in a single central government is", "unitary", "federal", "confederal", "presidential", "Local bodies exercise only delegated powers."],
          ["E", "Nigeria operates a", "federal system of government", "unitary system of government", "confederal system of government", "monarchical system", "Powers are shared between the centre and the states."],
          ["E", "Which of the following countries operates a unitary system?", "Britain", "Nigeria", "The United States", "India", "Parliament is supreme there."],
          ["M", "In a federal system, matters on which both the federal and state governments can legislate are on the", "concurrent list", "exclusive list", "residual list", "reserved list", "Federal law prevails where the two conflict."],
          ["M", "A feature of a federal constitution is that it is usually", "written and rigid", "unwritten and flexible", "amended by simple majority", "based on conventions only", "This protects the division of powers."],
          ["M", "A loose union of sovereign states with a weak central authority is", "a confederation", "a federation", "a unitary state", "a republic", "Member states keep their sovereignty."],
          ["M", "One reason for adopting federalism is", "the large size and diversity of a country", "the small size of a country", "a single language and culture", "the desire for a flexible constitution", "It allows unity in diversity."],
          ["H", "In a confederal system, the component states", "retain their sovereignty and may secede", "are subordinate to the centre", "derive their powers from the centre", "cannot maintain their own armies", "The centre has only the powers they grant it."],
          ["H", "A disadvantage of the federal system is that it", "is expensive because of duplication of functions", "concentrates all power in one government", "neglects minorities", "has no written constitution", "Each level maintains its own institutions."],
          ["H", "Currency, defence and foreign affairs in Nigeria are matters on the", "exclusive legislative list", "concurrent legislative list", "residual list", "customary list", "Only the federal government may legislate on them."],
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
        title: "Presidential and parliamentary systems",
        subtopics: ["The presidential system", "The parliamentary (cabinet) system", "Collective responsibility and vote of no confidence", "Comparison of the two systems"],
        objectives: ["Describe the features, merits and demerits of the presidential system", "Describe the features, merits and demerits of the parliamentary system", "Explain collective responsibility and the vote of no confidence", "Compare the presidential and parliamentary systems"],
        lesson: {
          title: "Two Ways of Organising the Executive",
          summary: "Describe and compare the presidential and parliamentary systems of government.",
          minutes: 40,
          notes: `## The presidential system
A system in which **one person — the president — is both head of state and head of government**, elected by the people for a fixed term and independent of the legislature.
*Examples:* the **USA**, Nigeria (since 1979), Ghana, Brazil.
### Features
- the president is **head of state and head of government** — a **single (monocephalous) executive**
- he is **directly elected** by the people, with the whole country as his constituency
- a **fixed term of office** (four years in Nigeria and the USA; a maximum of two terms)
- **separation of powers** — the three organs are separate in functions and personnel
- **ministers are not members of the legislature**; they are appointed by the president (with legislative approval) and are responsible **to him**
- **checks and balances**
- the president can be removed only by **impeachment**
- **supremacy of the constitution**
- the president is commander-in-chief of the armed forces
- no official opposition leader in the executive sense; no collective responsibility
### Merits
- **stable** government — a fixed term
- **quick decisions** — one executive head
- the president is the choice of the whole nation
- separation of powers prevents abuse
- experts can be appointed ministers from outside the legislature
- clear responsibility — the president is accountable
### Demerits
- may lead to **dictatorship** — too much power in one person
- **expensive** to operate
- **deadlock** between executive and legislature, especially when different parties control them
- impeachment is difficult, so a bad president is hard to remove
- delays in passing bills and appointments

## The parliamentary (cabinet) system
A system in which the **head of state is different from the head of government**, and the executive is **drawn from and responsible to the legislature**.
*Examples:* **Britain**, India, Canada, Nigeria in the First Republic (1960–1966).
### Features
- a **dual (bicephalous) executive**:
  - a **ceremonial head of state** — a monarch or president
  - a **head of government** — the **prime minister**, who holds real executive power
- the prime minister is the **leader of the party with a majority** in parliament
- ministers are **members of parliament** — a **fusion** of executive and legislature
- the cabinet is **collectively responsible** to parliament
- parliament can remove the government by a **vote of no confidence**
- an **official opposition** exists
- **parliamentary supremacy**
- **party discipline** is strong
- no fixed term — parliament may be dissolved and elections called
### Merits
- the executive is **accountable** to parliament — question time, debates
- **co-operation** between executive and legislature; laws pass quickly
- a bad government is **easily removed**
- less expensive than the presidential system
- the opposition provides an alternative government
- less risk of dictatorship
### Demerits
- **instability** — governments may fall often, especially with coalitions
- **no separation of powers**
- divided loyalty — ministers serve both constituency and ministry
- possible conflict between head of state and head of government
- the prime minister is not elected by the whole nation
- party loyalty may override the public interest

## Collective responsibility
All members of the cabinet **share responsibility for its decisions**. Each must **publicly support** them or **resign**; if the government is defeated on a major issue, the **whole cabinet resigns**.
### Individual ministerial responsibility
Each minister answers to parliament for the work of his own ministry.

## Vote of no confidence
A resolution of parliament declaring that it **no longer supports the government**. If passed, the prime minister and cabinet must **resign**, or ask the head of state to dissolve parliament for fresh elections.

## Impeachment
In a presidential system, the process by which the legislature **removes the president (or other officials) for gross misconduct** or violation of the constitution.

## Comparison
| | Presidential | Parliamentary |
|---|---|---|
| executive | single — president | dual — head of state and prime minister |
| election of head of government | by the people | leader of the majority party in parliament |
| ministers | not legislators | legislators |
| relations of organs | separation of powers | fusion of powers |
| responsibility | to the president and people | collectively to parliament |
| removal | impeachment | vote of no confidence |
| tenure | fixed | not fixed |
| supremacy | constitution | parliament |`,
          examples: `**Example 1.** Who is head of government in a parliamentary system? *Answer:* The **prime minister**.

**Example 2.** What is collective responsibility? *Answer:* All ministers **stand or fall together** on cabinet decisions.

**Example 3.** How is a president removed from office in a presidential system? *Answer:* By **impeachment**.`,
        },
        questions: [
          ["E", "In a presidential system, the president is", "both head of state and head of government", "only a ceremonial head of state", "appointed by the prime minister", "a member of the legislature", "Executive power is vested in one person."],
          ["E", "The head of government in a parliamentary system is the", "prime minister", "president", "chief justice", "speaker", "He leads the majority party in parliament."],
          ["E", "A country that practises the parliamentary system of government is", "Britain", "the United States", "Brazil", "Nigeria since 1999", "The monarch is the ceremonial head of state."],
          ["M", "The process of removing a president from office for gross misconduct is", "impeachment", "a vote of no confidence", "prorogation", "a referendum", "It is carried out by the legislature."],
          ["M", "In the parliamentary system, ministers are", "members of the legislature", "barred from the legislature", "elected directly by the nation as ministers", "appointed by the judiciary", "There is a fusion of executive and legislature."],
          ["M", "The principle that all cabinet members must publicly support government decisions or resign is", "collective responsibility", "separation of powers", "judicial review", "delegated legislation", "The cabinet stands or falls together."],
          ["M", "A feature of the presidential system is", "a fixed term of office for the executive", "a ceremonial head of state", "an official opposition leader in the cabinet", "the fusion of powers", "The president serves a set number of years."],
          ["H", "A parliamentary government can be removed from office by", "a vote of no confidence", "impeachment by the judiciary", "a decree", "a plebiscite only", "The cabinet must then resign or seek new elections."],
          ["H", "A disadvantage of the presidential system is that it", "may result in deadlock between the executive and the legislature", "has no separation of powers", "makes government unstable through frequent votes of no confidence", "has a dual executive", "Different parties may control the two organs."],
          ["H", "The parliamentary system is described as having a 'fusion of powers' because", "members of the executive are also members of the legislature", "the judiciary makes the laws", "the president heads all three organs", "there is no legislature", "Ministers sit in parliament."],
        ],
      },
      {
        week: 2,
        title: "Monarchy, republic and other forms of government",
        subtopics: ["Monarchy: absolute and constitutional", "Republican government", "Military government", "Oligarchy, aristocracy and other forms"],
        objectives: ["Distinguish absolute from constitutional monarchy", "Describe the features of a republic", "Describe the features of military government", "Describe oligarchy, aristocracy, theocracy and related forms"],
        lesson: {
          title: "Forms of Government",
          summary: "Describe monarchy, republic, military rule and other forms of government.",
          minutes: 40,
          notes: `## Monarchy
A form of government headed by a **king, queen or emperor**, whose position is usually **hereditary** and held for life.
### Absolute monarchy
The monarch has **unlimited powers** — he makes, executes and interprets the law, and is not bound by a constitution. His word is law; succession is hereditary; there is no opposition. *Examples:* France under Louis XIV; Saudi Arabia, Brunei and Eswatini today.
### Constitutional (limited) monarchy
The monarch is a **ceremonial head of state** whose powers are **limited by the constitution**; real power lies with an elected parliament and prime minister — "the monarch reigns but does not rule". *Examples:* Britain, Japan, Spain, Sweden, Morocco (in part), Lesotho.
### Functions of a constitutional monarch
symbol of national unity; opens parliament; assents to bills; appoints the prime minister; confers honours; receives foreign envoys — acting on the advice of ministers.
### Merits
continuity and stability; a unifying figure above party politics; preserves tradition.
### Demerits
hereditary rule may bring an unfit ruler; undemocratic; costly to maintain; absolute monarchy may be tyrannical.

## Republic
A state in which the **head of state is elected** — directly by the people or indirectly — for a **fixed term**, and sovereignty belongs to the **people**; there is no hereditary ruler.
*Examples:* Nigeria (a republic since **1 October 1963**), the USA, France, India, Ghana.
### Features
- an **elected** head of state — a president
- a **fixed term** of office
- **popular sovereignty**
- **supremacy of the constitution**
- equality of citizens; no hereditary privileges
- periodic elections
A republic may be presidential (Nigeria, the USA) or parliamentary (India).

## Military government
Rule by the **armed forces**, usually after seizing power by a **coup d'état**.
### Features
- comes to power by **force**, not election
- **suspends the constitution** (wholly or in part)
- rules by **decrees** (federal) and edicts (states)
- **bans** political parties and political activities
- **fuses** legislative and executive powers in a military council
- **hierarchical** — command structure; decisions pass down
- dictatorial; limits on human rights and the press; courts cannot question decrees (ouster clauses)
- usually centralised, even in a federation
### Reasons often given for coups
corruption and misrule by politicians; electoral malpractice and violence; economic mismanagement; ethnic and regional rivalry; ambition of officers.
### Merits claimed
quick decisions; discipline; no costly elections; some infrastructure and state creation.
### Demerits
undemocratic and illegitimate; violation of rights; no accountability; no rule of law; coups breed counter-coups; the military is diverted from defence; international isolation.

## Other forms
- **oligarchy** — rule by a **few** powerful people, in their own interest
- **aristocracy** — rule by a **privileged class** of nobles thought to be the "best"
- **plutocracy** — rule by the **wealthy**
- **gerontocracy** — rule by **elders**
- **theocracy** — rule by **religious leaders** according to divine law (Iran, the Vatican)
- **autocracy / dictatorship** — rule by **one person** with unlimited power
- **tyranny** — cruel, oppressive rule
- **diarchy** — rule shared by two authorities, such as the military and civilians
- **meritocracy** — rule by the most able

## Aristotle's classification
| Rule by | In the interest of all | In the rulers' own interest |
|---|---|---|
| one | monarchy | tyranny |
| a few | aristocracy | oligarchy |
| many | polity | democracy (mob rule) |

## Monarchy and republic compared
| Monarchy | Republic |
|---|---|
| hereditary head of state | elected head of state |
| rules for life | fixed term |
| sovereignty in the crown (in form) | sovereignty in the people |

## Dominion
A self-governing member of the British Commonwealth that kept the British monarch as head of state — Nigeria from 1960 to 1963.`,
          examples: `**Example 1.** Distinguish absolute from constitutional monarchy. *Answer:* An **absolute** monarch has **unlimited power**; a **constitutional** monarch is a **ceremonial** head whose powers are limited by the constitution.

**Example 2.** When did Nigeria become a republic? *Answer:* On **1 October 1963**.

**Example 3.** State three features of military government. *Answer:* **Rule by decree, suspension of the constitution and a ban on political parties**.`,
        },
        questions: [
          ["E", "A form of government headed by a king or queen whose position is hereditary is", "a monarchy", "a republic", "a confederation", "a diarchy", "The ruler normally reigns for life."],
          ["E", "A state whose head is elected for a fixed term is", "a republic", "a monarchy", "an empire", "a dominion", "Sovereignty belongs to the people."],
          ["E", "Laws made by a federal military government are called", "decrees", "bills", "bye-laws", "conventions", "State military governments made edicts."],
          ["M", "A monarch whose powers are limited by the constitution and who acts as a ceremonial head is", "a constitutional monarch", "an absolute monarch", "a dictator", "a president", "He reigns but does not rule."],
          ["M", "Nigeria became a republic in", "1963", "1960", "1979", "1999", "The Queen ceased to be head of state."],
          ["M", "Rule by a few powerful persons in their own interest is", "oligarchy", "democracy", "monarchy", "theocracy", "Power is held by a small group."],
          ["M", "A government run by religious leaders according to religious law is", "a theocracy", "a plutocracy", "an aristocracy", "a gerontocracy", "Iran is an example."],
          ["H", "A feature of military government is", "the suspension of the constitution and rule by decree", "regular free elections", "a strong official opposition", "supremacy of parliament", "Political activities are also banned."],
          ["H", "The statement 'the monarch reigns but does not rule' describes", "constitutional monarchy", "absolute monarchy", "military rule", "a theocracy", "Real power lies with parliament and the prime minister."],
          ["H", "In Aristotle's classification, rule by a few in their own selfish interest is", "oligarchy", "aristocracy", "polity", "monarchy", "Aristocracy is the good form of rule by a few."],
        ],
      },
      {
        week: 3,
        title: "Constitutions",
        subtopics: ["Meaning and functions of a constitution", "Sources of a constitution", "Written and unwritten constitutions", "Rigid and flexible constitutions and other types"],
        objectives: ["Define a constitution and state its functions", "Identify the sources of a constitution", "Distinguish written from unwritten constitutions", "Distinguish rigid from flexible constitutions and other types"],
        lesson: {
          title: "The Fundamental Law",
          summary: "Explain the meaning, sources, functions and types of constitution.",
          minutes: 40,
          notes: `## Constitution
The **body of fundamental laws, rules and principles by which a state is governed**. It establishes the organs of government, defines their powers and relationships, and states the rights and duties of citizens.

## Features (contents)
- a **preamble** — an introduction stating its source and aims
- the **form of government** and the **structure** of the state
- the **organs** of government, their powers and functions
- the **rights and duties** of citizens
- the **political party** and electoral systems
- tenure of office-holders
- the procedure for **amendment**
- the supremacy clause

## Functions
- sets up the **structure of government**
- **defines and limits** the powers of rulers
- **protects** the rights of citizens
- regulates the **relationship** between the organs and between the levels of government
- provides for the **orderly transfer of power**
- promotes stability and the **rule of law**
- is a standard by which actions of government are judged

## Sources
- **customs and conventions** — long-accepted practices
- **statutes (Acts of Parliament)** — the Parliament Acts, the Act of Settlement
- **judicial precedents (case law)** — decisions of the higher courts
- **historical documents** — Magna Carta (1215), the Bill of Rights (1689)
- **constitutional conferences** — the London conferences of 1957 and 1958
- **constituent assemblies** and drafting committees
- **decrees** — military governments
- **international laws and treaties**
- writings of eminent thinkers and jurists
- the constitutions of other countries

## Types
### Written constitution
The fundamental laws are **contained in a single document** (or a set of documents). *Examples:* Nigeria, the USA, India, Ghana.
- **merits**: clear and definite; easy to consult; protects rights; limits government; suits federal states
- **demerits**: often rigid; may not keep pace with change; leads to much litigation
### Unwritten constitution
The fundamental laws are **not codified in one document** but found in statutes, conventions, judicial decisions and customs. *Example:* **Britain**.
- **merits**: flexible; grows with society; easy to amend
- **demerits**: uncertain and vague; rights are less secure; unsuitable for federal states; hard for citizens to know

### Rigid constitution
One that requires a **special, difficult procedure** for amendment — a two-thirds majority, approval of the states, or a referendum. *Examples:* the USA, Nigeria.
- **merits**: stability; protects minorities and rights; guards against hasty change; suits federations
- **demerits**: hard to adapt to changing needs; may provoke unconstitutional change
### Flexible constitution
One that can be **amended in the same way as ordinary law** — by a simple majority. *Example:* Britain.
- **merits**: easily adapted; meets emergencies
- **demerits**: easily abused by the party in power; less protection for rights

### Unitary and federal constitutions
A **unitary** constitution concentrates power in one central government; a **federal** constitution divides power between the centre and the units.

### Other classifications
- **presidential** and **parliamentary** constitutions
- **republican** and **monarchical** constitutions

## Amendment of the Nigerian constitution
A proposal must be passed by **two-thirds of each house of the National Assembly** and approved by the **houses of assembly of at least two-thirds of the states** (24 of the 36); some sections need a four-fifths majority.

## Constitution and constitutionalism
A country may have a constitution yet not practise **constitutionalism** — government limited by, and acting according to, the constitution.

## Supremacy of the constitution
In Nigeria the constitution is supreme: any law inconsistent with it is **void** to the extent of the inconsistency, and the courts may so declare (**judicial review**).

## Conventions
Unwritten rules of political practice, accepted as binding though not enforceable in court — for example, that the British monarch assents to bills passed by parliament.`,
          examples: `**Example 1.** Define a constitution. *Answer:* The **body of fundamental laws and principles** by which a state is governed.

**Example 2.** Give four sources of a constitution. *Answer:* **Customs and conventions, statutes, judicial precedents and constitutional conferences**.

**Example 3.** Why is Nigeria's constitution described as rigid? *Answer:* Its amendment needs a **special procedure** — two-thirds majorities in the National Assembly and approval by two-thirds of the states.`,
        },
        questions: [
          ["E", "The body of fundamental laws and principles by which a state is governed is its", "constitution", "manifesto", "bye-law", "decree", "It sets up the organs of government."],
          ["E", "A constitution contained in a single document is described as", "written", "unwritten", "flexible", "conventional", "Nigeria and the USA have this type."],
          ["E", "A country with an unwritten constitution is", "Britain", "Nigeria", "the United States", "India", "Its constitution is found in statutes, conventions and court decisions."],
          ["M", "A constitution that can be amended only through a special and difficult procedure is", "rigid", "flexible", "unwritten", "unitary", "A two-thirds majority or a referendum may be required."],
          ["M", "The introductory part of a constitution that states its source and aims is the", "preamble", "schedule", "amendment", "convention", "It often begins 'We the people'."],
          ["M", "Decisions of higher courts that serve as a source of the constitution are known as", "judicial precedents", "statutes", "conventions", "decrees", "They are also called case law."],
          ["M", "A function of a constitution is to", "define and limit the powers of government", "abolish the judiciary", "prevent all elections", "concentrate power in one person", "It also protects the rights of citizens."],
          ["H", "An advantage of a flexible constitution is that it", "can be easily adapted to changing circumstances", "protects minorities best", "cannot be amended by the ruling party", "is always written", "It is amended like ordinary law."],
          ["H", "An amendment to the Nigerian constitution must be approved by the houses of assembly of at least", "two-thirds of the states", "one-third of the states", "half of the states", "all the states", "This is in addition to two-thirds of each chamber of the National Assembly."],
          ["H", "A written and rigid constitution is most suitable for", "a federal state", "an absolute monarchy", "a unitary state with one ethnic group", "a military regime", "It safeguards the division of powers between governments."],
        ],
      },
      {
        week: 4,
        title: "Constitutionalism and the rule of law",
        subtopics: ["Constitutionalism", "Meaning and principles of the rule of law", "Limitations to the rule of law", "Conditions for sustaining the rule of law"],
        objectives: ["Explain constitutionalism and its features", "State the principles of the rule of law", "Identify the limitations to the rule of law", "State the conditions that sustain the rule of law"],
        lesson: {
          title: "Government Under Law",
          summary: "Explain constitutionalism and the rule of law and the factors that limit them.",
          minutes: 40,
          notes: `## Constitutionalism
The principle that **government should be conducted according to the constitution and that its powers should be limited by law**. Rulers must act within the limits the constitution sets.
### Features
- **supremacy of the constitution**
- **limited government**
- **separation of powers** and checks and balances
- respect for **fundamental human rights**
- **rule of law**
- an **independent judiciary** with power of judicial review
- **periodic elections** and accountability
- orderly change of government
### Importance
prevents arbitrary rule; protects citizens; promotes stability and peaceful change; makes rulers accountable.

## The rule of law
The doctrine that **the law is supreme over all persons and authorities in the state**, and that government must act in accordance with law. It was popularised by **Professor A. V. Dicey** in *The Law of the Constitution* (1885).

### Dicey's principles
1. **Supremacy of the law** — no one may be punished except for a **breach of the law** established before the ordinary courts; there must be no arbitrary power.
2. **Equality before the law** — all persons, high or low, are **subject to the same law** and the same courts.
3. **Fundamental human rights (liberties of the individual)** — the rights of citizens are protected by the ordinary law and the courts.

### Other elements
- **fair hearing** — no one is condemned unheard
- the **presumption of innocence** until guilt is proved
- trial within a reasonable time, in open court
- the right to **legal representation** and to appeal
- no retrospective criminal laws
- an **independent and impartial judiciary**
- government under law — officials may be sued

## Limitations to the rule of law
- **immunity** — heads of state, governors, diplomats, judges and legislators (for words spoken in the chamber) are protected from some legal proceedings
- **state of emergency** — rights may be suspended
- **delegated legislation** and wide discretionary powers
- **special (administrative) tribunals** outside the ordinary courts
- **preventive detention** without trial
- **military rule** — decrees with ouster clauses
- **poverty and ignorance** — the poor cannot afford lawyers; the illiterate do not know their rights
- the **type of government** — one-party and authoritarian systems
- **parliamentary privilege**
- delay and corruption in the courts
- customs and traditions

## Conditions for the rule of law
- an **independent judiciary**
- a **free press**
- an enlightened citizenry
- respect for the constitution and **democratic** government
- **separation of powers**
- legal aid for the poor
- a disciplined, law-abiding police force
- security of tenure and good pay for judges
- vigilant civil society and opposition

## Importance of the rule of law
it protects citizens from arbitrary rule; guarantees equality and justice; safeguards rights; promotes order and stability; makes government accountable; encourages investment and development.

## Application in Nigeria
The constitution guarantees fundamental rights (Chapter IV), fair hearing and the independence of the courts; the Legal Aid Council assists poor litigants. Problems include disobedience of court orders, long detention of awaiting-trial persons and delays in the courts.

## Related terms
- **habeas corpus** — a court order requiring a detained person to be brought before the court so that the lawfulness of the detention can be examined
- **judicial review** — the power of the courts to declare acts of the legislature or executive unconstitutional
- **due process** — following the proper legal procedures
- **ultra vires** — beyond one's legal powers`,
          examples: `**Example 1.** Who popularised the doctrine of the rule of law? *Answer:* **Professor A. V. Dicey**.

**Example 2.** State Dicey's three principles. *Answer:* **Supremacy of the law, equality before the law and protection of individual rights**.

**Example 3.** Give two limitations to the rule of law. *Answer:* **Immunity of certain officials** and **states of emergency**.`,
        },
        questions: [
          ["E", "The doctrine of the rule of law was popularised by", "A. V. Dicey", "Jean Bodin", "Montesquieu", "Karl Marx", "He wrote in 1885."],
          ["E", "The principle that all persons are subject to the same law and the same courts is", "equality before the law", "separation of powers", "collective responsibility", "sovereignty", "No one is above the law."],
          ["E", "The principle that government must act within the limits set by the constitution is", "constitutionalism", "totalitarianism", "feudalism", "communalism", "It means limited government."],
          ["M", "One of Dicey's principles of the rule of law is", "the supremacy of the law", "the supremacy of the army", "the fusion of powers", "rule by decree", "No one may be punished except for a breach of the law."],
          ["M", "Which of the following limits the application of the rule of law?", "the immunity of diplomats and heads of state", "an independent judiciary", "a free press", "legal aid for the poor", "Such persons are protected from some legal proceedings."],
          ["M", "A condition necessary for the rule of law is", "an independent judiciary", "censorship of newspapers", "detention without trial", "a one-party state", "Judges must decide cases without interference."],
          ["M", "The presumption that an accused person is innocent until proved guilty is part of", "the rule of law", "martial law", "delegated legislation", "parliamentary privilege", "It is an element of fair trial."],
          ["H", "A court order requiring that a detained person be brought before the court to test the legality of the detention is", "habeas corpus", "ultra vires", "mandamus only", "an ouster clause", "It protects personal liberty."],
          ["H", "During a state of emergency, the rule of law is limited because", "some fundamental rights may be suspended", "elections are held more often", "judges are given more independence", "the press becomes freer", "Government takes special powers."],
          ["H", "Poverty limits the rule of law mainly because the poor", "cannot afford the cost of seeking justice in court", "are exempt from the law", "are immune from arrest", "make the laws", "Legal aid schemes try to reduce this problem."],
        ],
      },
      {
        week: 5,
        title: "Separation of powers and checks and balances",
        subtopics: ["The theory of separation of powers", "Application in presidential and parliamentary systems", "Checks and balances", "Merits and demerits"],
        objectives: ["Explain the theory of separation of powers", "Describe its application in presidential and parliamentary systems", "Explain checks and balances with examples", "State the merits and demerits of separation of powers"],
        lesson: {
          title: "Dividing and Checking Power",
          summary: "Explain separation of powers and how the organs of government check one another.",
          minutes: 40,
          notes: `## Separation of powers
The theory that the **three functions of government — making, executing and interpreting the law — should be performed by three separate organs**, each with its own personnel and powers. It was developed by the French philosopher **Baron de Montesquieu** in *The Spirit of the Laws* (**1748**), building on John Locke.

### Montesquieu's argument
If the same person or body makes the law, enforces it and judges under it, there can be **no liberty** — tyranny results. Power must be divided so that "power checks power".

### The three organs
| Organ | Function |
|---|---|
| **legislature** | makes the laws |
| **executive** | implements laws and policies |
| **judiciary** | interprets the laws and settles disputes |

### What the theory requires
- **separation of functions** — each organ keeps to its own work
- **separation of personnel** — no one belongs to more than one organ
- **independence** — no organ controls or interferes with another

## Application
### In a presidential system (Nigeria, the USA)
The separation is **clear**: the president and ministers are not legislators; the legislature cannot be dissolved by the president; judges are independent. But the separation is not absolute — the organs check one another.
### In a parliamentary system (Britain)
There is a **fusion** of the executive and the legislature: ministers are members of parliament. The judiciary is nevertheless independent.
### Under military rule
Legislative and executive powers are **fused** in the ruling military council.

Complete (rigid) separation is impossible: the organs must co-operate for government to work.

## Checks and balances
The principle that **each organ should have some power to check the others**, so that none becomes too powerful. It modifies and completes separation of powers.

### Legislature checks the executive
- **approves** the budget and major appointments (ministers, ambassadors, judges)
- can **impeach** the president
- can **override** the president's veto by a two-thirds majority
- **investigates** the executive (oversight); ratifies treaties
- approves declarations of war and states of emergency

### Executive checks the legislature
- the president can **veto (refuse assent to)** bills
- he may summon special sessions; in parliamentary systems the head of state can **dissolve** parliament
- he initiates many bills and the budget

### Judiciary checks the legislature and executive
- **judicial review** — declares laws and executive actions **unconstitutional (null and void)**
- interprets the constitution; protects citizens' rights against government

### Executive and legislature check the judiciary
- the executive **appoints** judges, subject to legislative confirmation
- the legislature can **remove** judges for misconduct through due process, and decides the courts' budget and structure
- the president may grant **pardons (prerogative of mercy)**

## Merits of separation of powers
- **prevents tyranny** and abuse of power
- protects the **liberty and rights** of citizens
- promotes **efficiency** through specialisation
- ensures the **independence of the judiciary**
- makes each organ **accountable**
- maintains the **rule of law**
- brings orderliness and stability

## Demerits
- **delays** in government — deadlocks between organs
- complete separation is **unworkable**
- may cause rivalry and friction
- expensive
- in emergencies, quick action is hindered

## Separation of powers and checks and balances compared
| Separation of powers | Checks and balances |
|---|---|
| divides the functions among the organs | lets the organs **limit one another** |
| stresses independence | stresses mutual control |
| advanced by Montesquieu | developed especially in the American constitution |
Both aim at preventing arbitrary rule.

## Delegated legislation
Law made by the executive or other bodies under powers granted by the legislature — a practical departure from strict separation.`,
          examples: `**Example 1.** Who propounded the theory of separation of powers, and in which book? *Answer:* **Baron de Montesquieu**, in ***The Spirit of the Laws*** (1748).

**Example 2.** Give one way the judiciary checks the legislature. *Answer:* By **judicial review** — declaring a law unconstitutional.

**Example 3.** How can the legislature check the president? *Answer:* By **impeachment** (or by overriding his veto).`,
        },
        questions: [
          ["E", "The theory of separation of powers was developed by", "Baron de Montesquieu", "A. V. Dicey", "Jean Bodin", "Abraham Lincoln", "He wrote 'The Spirit of the Laws' in 1748."],
          ["E", "The organ of government that implements laws and policies is the", "executive", "legislature", "judiciary", "electorate", "It is headed by the president or prime minister."],
          ["E", "The principle that each organ of government should be able to limit the powers of the others is", "checks and balances", "collective responsibility", "the rule of law", "federalism", "No organ becomes too powerful."],
          ["M", "The main aim of separation of powers is to", "prevent tyranny and protect liberty", "make government cheaper", "abolish the judiciary", "unite all powers in one body", "Concentrated power is easily abused."],
          ["M", "The power of the president to refuse assent to a bill passed by the legislature is called", "veto", "impeachment", "judicial review", "prorogation", "It is an executive check on the legislature."],
          ["M", "The power of the courts to declare a law unconstitutional is", "judicial review", "delegated legislation", "the prerogative of mercy", "a vote of no confidence", "It is a check on the legislature and executive."],
          ["M", "Separation of powers is most clearly practised in", "the presidential system", "the parliamentary system", "military government", "absolute monarchy", "Ministers are not members of the legislature."],
          ["H", "The legislature can check the executive by", "refusing to approve the budget and by impeachment", "appointing judges", "declaring laws unconstitutional", "granting pardons", "It also confirms major appointments."],
          ["H", "A criticism of the theory of separation of powers is that", "complete separation is impracticable and may cause delays", "it leads to dictatorship", "it destroys the independence of judges", "it abolishes elections", "The organs must co-operate for government to work."],
          ["H", "In the parliamentary system of Britain, separation of powers is not strictly applied because", "ministers are members of parliament", "judges make the laws", "there is no legislature", "the monarch is elected", "The executive and legislature are fused."],
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
        title: "Fundamental human rights",
        subtopics: ["Meaning and origin of human rights", "Types of rights", "Limitations to human rights", "Safeguards of human rights"],
        objectives: ["Explain fundamental human rights and their origin", "Classify the rights of citizens", "State the limitations to human rights", "Describe the ways in which human rights are safeguarded"],
        lesson: {
          title: "Rights of the Citizen",
          summary: "Explain the fundamental rights of citizens, their limitations and safeguards.",
          minutes: 40,
          notes: `## Fundamental human rights
The **basic, inalienable rights and freedoms to which every person is entitled by virtue of being human**, and which the state is bound to protect.

## Origin
- **Magna Carta** (England, 1215)
- the English **Bill of Rights** (1689)
- the American **Declaration of Independence** (1776) and Bill of Rights (1791)
- the French **Declaration of the Rights of Man** (1789)
- the **Universal Declaration of Human Rights**, adopted by the United Nations on **10 December 1948**
- the African Charter on Human and Peoples' Rights (1981)
In Nigeria, rights were first entrenched in the 1960 constitution, on the recommendation of the Willink Commission, and are now in **Chapter IV of the 1999 constitution**.

## Rights in the Nigerian constitution
- right to **life**
- right to **dignity of the human person** — no torture, slavery or forced labour
- right to **personal liberty**
- right to **fair hearing**
- right to **private and family life**
- right to **freedom of thought, conscience and religion**
- right to **freedom of expression and the press**
- right to **peaceful assembly and association**
- right to **freedom of movement**
- right to **freedom from discrimination**
- right to **acquire and own property** anywhere in Nigeria; protection against compulsory acquisition without compensation

## Classification
- **civil (natural) rights** — life, liberty, dignity, fair hearing, movement, religion, privacy
- **political rights** — to vote and be voted for; to form and join political parties; to criticise government; to hold public office
- **economic rights** — to work, to own property, to fair wages, to join a trade union
- **social and cultural rights** — to education, health care, social security; to practise one's culture
- **legal rights** — equality before the law; fair trial; legal representation; appeal

## Limitations (when rights may be restricted)
- in the interest of **public safety, order, morality and health**
- during a **state of emergency** or **war**
- to protect the **rights and reputations of others** — laws of libel, slander and sedition limit free speech
- lawful **arrest and imprisonment** limit liberty and movement
- execution of a court sentence limits the right to life
- **military rule** — suspension of the constitution
- persons of unsound mind, infectious disease or under age
- compulsory acquisition of land for public purposes, with compensation
- public officers and members of the armed forces may be restricted in political activity
- poverty and ignorance in practice

## Safeguards (how rights are protected)
- **entrenchment** of rights in a written constitution
- an **independent judiciary** — citizens can seek redress in court (habeas corpus, injunctions)
- the **rule of law**
- **separation of powers** and checks and balances
- a **free press**
- an active **opposition** and pressure groups (the bar association, human rights groups)
- **periodic free elections**
- the **Public Complaints Commission (ombudsman)**
- the **National Human Rights Commission**
- the **Legal Aid Council**
- public enlightenment — citizens who know their rights
- international bodies — the United Nations; regional courts

## Duties that go with rights
Every right has a matching **duty**: to obey the law; pay taxes; respect the rights of others; vote; defend the country; respect national symbols.

## Violations
unlawful detention; torture; extra-judicial killing; censorship; discrimination; denial of fair trial; child labour and human trafficking.

## Importance
Rights protect the individual from oppression, allow free development of personality, make democracy possible and promote peace and human dignity.`,
          examples: `**Example 1.** When was the Universal Declaration of Human Rights adopted? *Answer:* On **10 December 1948**.

**Example 2.** Give three political rights. *Answer:* The rights **to vote, to be voted for and to form or join a political party**.

**Example 3.** State two safeguards of human rights. *Answer:* An **independent judiciary** and a **free press**.`,
        },
        questions: [
          ["E", "The basic rights to which every person is entitled by virtue of being human are", "fundamental human rights", "privileges of office", "duties of citizens", "electoral laws", "The state is bound to protect them."],
          ["E", "The Universal Declaration of Human Rights was adopted by the United Nations in", "1948", "1945", "1960", "1215", "The date was 10 December."],
          ["E", "The right to vote and be voted for is a", "political right", "economic right", "social right", "cultural right", "It allows participation in government."],
          ["M", "In the 1999 Constitution of Nigeria, fundamental rights are contained in", "Chapter IV", "Chapter I", "the preamble only", "the exclusive list", "The chapter lists the rights of citizens."],
          ["M", "The right of a person to be heard before being condemned is the right to", "fair hearing", "private life", "freedom of movement", "own property", "No one should be judged unheard."],
          ["M", "Freedom of expression may be limited by the laws of", "libel and sedition", "contract", "inheritance", "taxation", "They protect the reputation of others and public order."],
          ["M", "A safeguard of human rights is", "an independent judiciary", "censorship of the press", "rule by decree", "detention without trial", "Citizens can seek redress in court."],
          ["H", "The fundamental rights of citizens may lawfully be restricted", "during a state of emergency", "whenever a minister wishes", "to favour the ruling party", "for the benefit of the rich", "Special powers are taken in the interest of public safety."],
          ["H", "The body in Nigeria that investigates complaints of administrative injustice by public officials is the", "Public Complaints Commission", "Code of Conduct Bureau", "National Assembly Service Commission", "Federal Character Commission", "It performs the role of an ombudsman."],
          ["H", "The right to work and to receive fair wages is classified as", "an economic right", "a political right", "a civil right", "a legal right", "It concerns earning a living."],
        ],
      },
      {
        week: 2,
        title: "The legislature",
        subtopics: ["Meaning and types of legislature", "Functions of the legislature", "How a bill becomes law", "Officers and committees of the legislature"],
        objectives: ["Describe unicameral and bicameral legislatures", "State the functions of the legislature", "Describe the stages through which a bill passes to become law", "Identify the officers and committees of the legislature"],
        lesson: {
          title: "The Law-Making Organ",
          summary: "Describe the structure, functions and procedure of the legislature.",
          minutes: 40,
          notes: `## The legislature
The organ of government responsible for **making laws**. It is called Parliament (Britain), Congress (USA) or the **National Assembly** (Nigeria).

## Types
### Unicameral legislature
A legislature with **one chamber**. *Examples:* Ghana, Kenya (formerly), The Gambia; Nigeria's **state houses of assembly**.
- **merits**: cheap; quick law-making; no duplication or deadlock; suits small unitary states
- **demerits**: hasty and ill-considered laws; no second check; may become dictatorial; minorities under-represented
### Bicameral legislature
A legislature with **two chambers** — an upper and a lower house. *Examples:* Nigeria (**Senate** — 109 members — and **House of Representatives** — 360 members); the USA (Senate and House of Representatives); Britain (House of Lords and House of Commons).
- **merits**: bills are **thoroughly examined**; hasty legislation is checked; the upper house represents the **states or special interests** equally — important in a federation; prevents the tyranny of one chamber; lightens the work
- **demerits**: **expensive**; **delays**; possible deadlock between the houses; duplication

## Functions
1. **law-making** — the primary function
2. **control of public finance** — approves the **budget**, taxes and spending (the "power of the purse")
3. **oversight (control of the executive)** — questions, debates, investigations and committee hearings
4. **approval of appointments** — ministers, ambassadors, judges
5. **ratification of treaties**
6. **amendment of the constitution**
7. **impeachment** of the president, vice-president, governors and judges
8. **representation** of constituents — expressing their views and grievances
9. **deliberative function** — debating national issues; educating the public
10. approving declarations of war and states of emergency
11. creating new states and local governments (constitutional process)
12. in a parliamentary system, **forming and removing** the government; electing the head of state in some countries

## How a bill becomes law
A **bill** is a proposed law. An **Act** is a bill that has been passed and assented to.
### Types of bill
- **public bill** — affects the whole country: government (executive) bills and **private members' bills**
- **private bill** — affects a particular person, group or locality
- **money (appropriation) bill** — deals with taxation and spending
### Stages
1. **first reading** — the title is read; the bill is printed and circulated; no debate
2. **second reading** — the **general principles** are debated; a vote is taken
3. **committee stage** — a committee examines the bill **clause by clause** and may amend it
4. **report stage** — the committee reports its amendments to the house
5. **third reading** — final consideration; only minor changes; a final vote
6. the bill goes to the **other chamber** and passes the same stages; differences are settled by a **joint (conference) committee**
7. **assent** — the president signs the bill, and it becomes law
If the president **withholds assent (vetoes)**, the National Assembly may **override** the veto by a **two-thirds majority** of each house.

## Officers
- **Senate**: the **President of the Senate**; Deputy President; Majority and Minority Leaders; Chief Whips
- **House of Representatives / state assemblies**: the **Speaker**; Deputy Speaker; Majority and Minority Leaders; Whips
- the **Clerk** — the administrative head and adviser on procedure
- the **Sergeant-at-arms** — keeps order and guards the **mace**, the symbol of authority

## Committees
- **standing committees** — permanent: finance, appropriations, public accounts, education
- **ad hoc (select) committees** — set up for a particular task
- **committee of the whole house** — the entire chamber sitting as a committee
- **joint committees** of both chambers

## Terms
- **quorum** — the minimum number of members needed to conduct business (one-third in Nigeria)
- **adjournment** — a break in sitting; **prorogation** — the ending of a session; **dissolution** — the ending of the life of a legislature
- **filibuster** — delaying a bill by long speeches
- **guillotine / closure** — ending a debate so that a vote may be taken
- **Hansard** — the official report of debates
- **parliamentary privilege (immunity)** — members cannot be sued for what they say in the chamber
- **whip** — the officer who ensures party discipline and attendance

## Limitations on the legislature
the constitution; judicial review; executive veto; party control; public opinion; delegated legislation.`,
          examples: `**Example 1.** Name the two chambers of Nigeria's National Assembly and their sizes. *Answer:* The **Senate (109 members)** and the **House of Representatives (360 members)**.

**Example 2.** At which stage is a bill examined clause by clause? *Answer:* The **committee stage**.

**Example 3.** How can the legislature overcome a presidential veto? *Answer:* By a **two-thirds majority** of each house.`,
        },
        questions: [
          ["E", "A legislature with two chambers is described as", "bicameral", "unicameral", "federal", "unitary", "It has an upper and a lower house."],
          ["E", "A proposed law before the legislature is called", "a bill", "an act", "a decree", "an edict", "It becomes an act after assent."],
          ["E", "The presiding officer of the House of Representatives in Nigeria is the", "Speaker", "Senate President", "Clerk", "Chief Whip", "The Senate is presided over by its President."],
          ["M", "The Senate of Nigeria has", "109 members", "360 members", "36 members", "774 members", "Three from each state and one from the Federal Capital Territory."],
          ["M", "The stage at which the general principles of a bill are debated is the", "second reading", "first reading", "committee stage", "assent", "A vote is taken at the end of the debate."],
          ["M", "The minimum number of members who must be present before a legislature can conduct business is the", "quorum", "caucus", "whip", "mace", "In Nigeria it is one-third of the members."],
          ["M", "The primary function of the legislature is", "making laws", "interpreting laws", "enforcing laws", "conducting elections", "It also controls public finance."],
          ["H", "An advantage of a bicameral legislature is that", "it prevents hasty and ill-considered legislation", "it is cheap to maintain", "bills are passed very quickly", "there is no duplication of functions", "A second chamber re-examines every bill."],
          ["H", "When the president withholds assent from a bill, the National Assembly can make it law by", "passing it again with a two-thirds majority of each house", "referring it to the Supreme Court", "a simple majority of the Senate alone", "asking the governors to sign it", "This overrides the veto."],
          ["H", "The power of the legislature to approve the budget and control government spending is known as", "the power of the purse", "judicial review", "the prerogative of mercy", "delegated legislation", "No money may be spent without its authority."],
        ],
      },
      {
        week: 3,
        title: "The executive",
        subtopics: ["Meaning and types of executive", "Functions of the executive", "The political and the permanent executive", "Control of the executive"],
        objectives: ["Describe the executive and its types", "State the functions of the executive", "Distinguish the political executive from the permanent executive", "Explain how the executive is controlled"],
        lesson: {
          title: "The Organ That Governs",
          summary: "Describe the composition, types and functions of the executive.",
          minutes: 40,
          notes: `## The executive
The organ of government responsible for **implementing (executing) laws and policies** and for the day-to-day administration of the state. In the wide sense it includes the head of state, the head of government, ministers, the civil service, the police and the armed forces.

## Types
### By number
- **single executive** — executive power is vested in **one person**: the president in a presidential system
- **plural (collegial) executive** — power is shared by a **group**: the cabinet in Britain; the Federal Council in Switzerland
### By real power
- **nominal (ceremonial) executive** — a head of state with **formal** powers only: the British monarch; the President of India
- **real (effective) executive** — the one who actually exercises power: the prime minister and cabinet
### By system
- **presidential executive** — elected, fixed term, independent of the legislature
- **parliamentary executive** — drawn from and responsible to the legislature
### Others
- hereditary (monarch) and elected executives
- **military executive** — a ruling council of officers

## Composition in Nigeria
- **federal**: the **President**, the Vice-President, **ministers** (the Federal Executive Council), special advisers, the civil service, the armed forces and the police
- **state**: the **Governor**, the Deputy Governor, **commissioners** (the State Executive Council) and the state civil service
- **local**: the chairman and supervisory councillors

## Functions
1. **implementing laws** and court decisions
2. **formulating policy** — deciding what government will do
3. **maintaining law and order** — through the police and security agencies
4. **defence** — the president is **commander-in-chief** of the armed forces
5. **foreign relations** — appointing ambassadors, signing treaties, receiving envoys
6. **preparing the budget** and managing public finance
7. **initiating bills** — most bills come from the executive
8. **assenting to bills**; issuing regulations (delegated legislation)
9. **appointments** — ministers, judges, heads of agencies — and their removal
10. **prerogative of mercy** — pardoning or reducing the sentences of convicted persons
11. providing **social services** and promoting economic development
12. **ceremonial** functions — conferring honours; national celebrations
13. declaring a state of emergency or war, with legislative approval
14. summoning and (in parliamentary systems) dissolving the legislature

## Political and permanent executive
| Political executive | Permanent executive (civil service) |
|---|---|
| president, governors, ministers, commissioners | career civil servants |
| elected or appointed for a **limited term** | hold office **until retirement** |
| **make policy** | **advise on and carry out** policy |
| partisan | politically **neutral** |
| changes with the government | continues under successive governments |

## The cabinet
The body of **senior ministers** who, under the president or prime minister, decide the major policies of government. In Nigeria it is the **Federal Executive Council**. Ministers head ministries, assisted by **permanent secretaries**.

## Reasons for the growth of executive power
the complexity of modern government; emergencies and wars; the welfare state; economic planning; delegated legislation; the executive's control of information, finance and force; party discipline.

## Control of the executive
- by the **legislature** — approval of budgets and appointments; questions and investigations; impeachment; vote of no confidence
- by the **judiciary** — judicial review; orders such as habeas corpus and injunctions
- by the **constitution** — fixed terms; defined powers
- by **elections** — the electorate can vote a government out
- by **public opinion**, the press, pressure groups and the opposition
- by institutions — the Auditor-General, the Code of Conduct Bureau, anti-corruption agencies, the Public Complaints Commission

## Delegated legislation
**Rules and regulations made by the executive or other bodies under powers granted by the legislature** — statutory instruments, orders, bye-laws.
- **reasons**: lack of parliamentary time; technical matters; emergencies; local needs; flexibility
- **dangers**: weakens the legislature; may be abused; less publicity and scrutiny
- **control**: by the legislature (laying before the house, revocation), by the courts (ultra vires) and by public opinion`,
          examples: `**Example 1.** Who is commander-in-chief of the armed forces in Nigeria? *Answer:* The **President**.

**Example 2.** Distinguish a nominal executive from a real executive. *Answer:* A **nominal** executive has **ceremonial** powers; a **real** executive **actually exercises** power.

**Example 3.** Give two ways in which the legislature controls the executive. *Answer:* **Approval of the budget** and **impeachment**.`,
        },
        questions: [
          ["E", "The Federal Executive Council of Nigeria is presided over by the", "President", "Chief Justice of Nigeria", "Senate President", "Head of the Civil Service", "He is the head of the executive arm."],
          ["E", "The chief executive of a state in Nigeria is the", "governor", "speaker", "chief judge", "commissioner of police", "He heads the state executive council."],
          ["E", "The commander-in-chief of the Nigerian armed forces is the", "President", "Chief of Defence Staff", "Senate President", "Minister of Defence", "This is an executive function."],
          ["M", "The power of the head of state to pardon convicted persons is the", "prerogative of mercy", "veto power", "power of the purse", "power of judicial review", "It may also reduce sentences."],
          ["M", "A head of state who performs only ceremonial functions is", "a nominal executive", "a real executive", "a single executive", "a military executive", "Real power lies with the prime minister."],
          ["M", "Career civil servants who carry out government policies make up the", "permanent executive", "political executive", "judiciary", "electoral body", "They remain in office when governments change."],
          ["M", "Rules made by the executive under powers granted by the legislature are known as", "delegated legislation", "private members' bills", "conventions", "judicial precedents", "Statutory instruments and bye-laws are examples."],
          ["H", "One reason for delegated legislation is that", "the legislature lacks the time and technical knowledge for detailed rules", "the judiciary demands it", "it strengthens parliamentary control", "it abolishes the executive", "Experts in ministries fill in the details."],
          ["H", "The judiciary controls the executive mainly through", "judicial review of executive actions", "approval of the budget", "impeachment", "votes of no confidence", "Unlawful acts may be declared null and void."],
          ["H", "The body of senior ministers that decides major government policies in Nigeria is the", "Federal Executive Council", "National Judicial Council", "Council of State only", "National Economic Council only", "It is the cabinet."],
        ],
      },
      {
        week: 4,
        title: "The judiciary",
        subtopics: ["Meaning and functions of the judiciary", "Structure of the courts in Nigeria", "Independence of the judiciary", "Sources and types of law"],
        objectives: ["State the functions of the judiciary", "Describe the hierarchy of courts in Nigeria", "Explain the independence of the judiciary and how it is secured", "Identify the sources and types of law"],
        lesson: {
          title: "The Courts",
          summary: "Describe the functions, structure and independence of the judiciary.",
          minutes: 40,
          notes: `## The judiciary
The organ of government that **interprets the law, settles disputes and administers justice**. It consists of the courts and the judges — "the last hope of the common man".

## Functions
- **interpreting** the constitution and other laws
- **settling disputes** — between individuals, between individuals and government, and between governments
- **punishing offenders** — administering criminal justice
- **protecting the rights and liberties** of citizens
- **judicial review** — declaring laws and executive actions unconstitutional
- acting as **guardian of the constitution**
- **law-making** through judicial precedents (case law)
- **advising** the executive on legal matters in some countries
- hearing **election petitions**
- other duties — swearing in office-holders; granting probate; heading commissions of inquiry

## Structure of the courts in Nigeria
| Court | Notes |
|---|---|
| **Supreme Court** | the **highest and final** court of appeal; headed by the **Chief Justice of Nigeria**; hears appeals from the Court of Appeal and has original jurisdiction in disputes between the federation and states or between states |
| **Court of Appeal** | hears appeals from the high courts and tribunals; headed by its **President**; also sits as the presidential election petition court |
| **Federal High Court** | federal revenue, banking, companies, admiralty and related matters |
| **State High Courts** and the High Court of the Federal Capital Territory | wide civil and criminal jurisdiction; headed by a **Chief Judge** |
| **National Industrial Court** | labour and employment disputes |
| **Sharia Court of Appeal** | appeals in Islamic personal law; headed by a **Grand Kadi** |
| **Customary Court of Appeal** | appeals in customary law |
| **magistrates' courts**, district courts, area and customary courts | lower courts for minor cases |
Also: **election tribunals**, the Code of Conduct Tribunal, courts martial and juvenile courts.

## Independence of the judiciary
The freedom of judges to **decide cases impartially, without fear, favour or interference** from the executive, the legislature or anyone else.
### How it is secured
- **appointment** on merit, on the recommendation of an independent body (the **National Judicial Council**)
- **security of tenure** — judges hold office until a fixed retiring age and can be removed only for misconduct or incapacity through a strict procedure
- **adequate and guaranteed salaries**, charged on the Consolidated Revenue Fund and not reducible
- **immunity** — judges cannot be sued for anything said or done in court
- **financial autonomy** for the courts
- **separation of powers** — judges do not belong to the other organs
- political neutrality — judges take no part in partisan politics
- respect for court orders by the executive
### Factors that threaten it
political interference in appointments and removal; poor funding; corruption; disobedience of court orders; intimidation; delay.

### Importance
ensures fair trials; protects rights; upholds the rule of law and the constitution; maintains public confidence.

## Law
A body of **rules made and enforced by the state** to regulate conduct.
### Sources of law in Nigeria
- the **constitution**
- **legislation** — Acts of the National Assembly and laws of the state houses of assembly; decrees and edicts of military governments
- **received English law** — common law, doctrines of equity and statutes of general application
- **customary law** — the customs of the various peoples
- **Islamic (Sharia) law**
- **judicial precedents (case law)**
- delegated legislation; international law

### Types of law
- **criminal law** — offences against the state; punishment by fine, imprisonment or death
- **civil law** — disputes between persons; remedies such as damages: contract, tort (trespass, defamation), family and land law
- **constitutional law** — the structure and powers of government
- **administrative law** — controls the actions of officials
- **customary and Islamic law**
- **public** and **private** law; **international** law
- **martial law** — rule by military authorities in an emergency

## Terms
- **jurisdiction** — the power of a court to hear a case
- **original jurisdiction** — hearing a case first; **appellate jurisdiction** — hearing appeals
- **plaintiff / claimant** and **defendant** (civil); **prosecution** and **accused** (criminal)
- **bail**; **appeal**; **precedent** (stare decisis)

## The Attorney-General
The chief law officer of the government and its legal adviser; usually also the Minister (or Commissioner) for Justice.`,
          examples: `**Example 1.** Which is the highest court in Nigeria, and who heads it? *Answer:* The **Supreme Court**, headed by the **Chief Justice of Nigeria**.

**Example 2.** Give three ways of securing judicial independence. *Answer:* **Security of tenure, guaranteed salaries and appointment through an independent body**.

**Example 3.** Distinguish criminal law from civil law. *Answer:* **Criminal law** deals with **offences against the state**; **civil law** deals with **disputes between persons**.`,
        },
        questions: [
          ["E", "The organ of government that interprets the law and settles disputes is the", "judiciary", "legislature", "executive", "civil service", "It consists of the courts and judges."],
          ["E", "The highest court in Nigeria is the", "Supreme Court", "Court of Appeal", "Federal High Court", "magistrates' court", "Its decisions are final."],
          ["E", "The head of the judiciary in Nigeria is the", "Chief Justice of Nigeria", "Attorney-General", "President of the Senate", "Grand Kadi", "He presides over the Supreme Court."],
          ["M", "The freedom of judges to decide cases without interference is known as", "independence of the judiciary", "judicial review", "separation of personnel", "judicial precedent", "It ensures impartial justice."],
          ["M", "One way of ensuring the independence of the judiciary is by", "giving judges security of tenure", "allowing ministers to dismiss judges at will", "paying judges from party funds", "electing judges every year", "Judges cannot be removed except for proven misconduct."],
          ["M", "The Sharia Court of Appeal of a state is headed by the", "Grand Kadi", "Chief Judge", "Chief Magistrate", "President of the Court of Appeal", "It hears appeals in Islamic personal law."],
          ["M", "Law that deals with offences against the state and prescribes punishment is", "criminal law", "civil law", "customary law of inheritance", "law of contract", "Offenders may be fined or imprisoned."],
          ["H", "The body that recommends the appointment and discipline of judges in Nigeria is the", "National Judicial Council", "Federal Civil Service Commission", "Independent National Electoral Commission", "Code of Conduct Bureau", "It helps to insulate the judiciary from politics."],
          ["H", "The power of a court to hear a case for the first time is its", "original jurisdiction", "appellate jurisdiction", "advisory jurisdiction", "supervisory role", "Appellate jurisdiction concerns appeals."],
          ["H", "The judiciary is described as the 'last hope of the common man' because it", "protects citizens' rights against powerful persons and the government", "makes all the laws", "commands the armed forces", "prepares the budget", "Anyone may seek redress in court."],
        ],
      },
      {
        week: 5,
        title: "Citizenship",
        subtopics: ["Meaning of citizenship and nationality", "Ways of acquiring citizenship", "Rights, duties and obligations of citizens", "Loss of citizenship and the status of aliens"],
        objectives: ["Explain citizenship and distinguish a citizen from an alien", "Describe the ways of acquiring citizenship", "State the rights, duties and obligations of citizens", "Explain how citizenship may be lost"],
        lesson: {
          title: "Belonging to a State",
          summary: "Explain how citizenship is acquired and lost and the rights and duties that go with it.",
          minutes: 40,
          notes: `## Citizenship
The **legal status of being a full member of a state**, with the rights and duties that go with it. A **citizen** is a person who owes allegiance to a state and enjoys its full civil and political rights.

## Citizen and alien
An **alien (foreigner, non-citizen)** is a person living in a country of which he is not a citizen.
| Citizen | Alien |
|---|---|
| owes permanent allegiance to the state | owes allegiance to another state |
| enjoys **full** rights, including political rights | has limited rights — cannot vote or hold elective office |
| cannot be deported | may be **deported** |
| needs no permit to live or work | needs a visa, residence and work permits |
| may be called up for national service | is not liable |
Aliens must obey the laws and pay taxes, and are entitled to protection of life and property.

## Ways of acquiring citizenship
### 1. By birth
- ***jus soli*** ("law of the soil") — by being **born in the territory** of the state
- ***jus sanguinis*** ("law of blood") — by being born to **parents who are citizens**, wherever the birth occurs
In Nigeria, a person is a citizen by birth if born in Nigeria before or after independence with a **parent or grandparent** belonging to a community indigenous to Nigeria, or born outside Nigeria to a Nigerian parent.
### 2. By registration
For persons with a close connection — in Nigeria, **a woman married to a Nigerian citizen**, and persons of full age born outside Nigeria with a Nigerian grandparent. The applicant must be of good character, intend to live in Nigeria and take the **oath of allegiance**.
### 3. By naturalisation
A foreigner **applies** and is granted citizenship after meeting conditions. In Nigeria: full age and capacity; good character; intention to remain; acceptance by the local community; ability to contribute to national progress; the oath of allegiance; and continuous residence for **fifteen years**.
### 4. By descent
Through parents or grandparents who are citizens.
### 5. By marriage
In some countries, a foreigner marrying a citizen may become a citizen.
### 6. Honorary citizenship
Conferred on a distinguished foreigner as a mark of honour.
### 7. By conquest or incorporation of territory
People of a territory absorbed by another state become its citizens.

## Dual citizenship
Holding the citizenship of **two countries**. A Nigerian citizen **by birth** may hold another citizenship; a person who became Nigerian by registration or naturalisation loses it on acquiring another country's citizenship.

## Rights of a citizen
life; personal liberty; fair hearing; freedom of expression, religion, association and movement; freedom from discrimination; ownership of property; the vote and eligibility for office; education and other social services; protection at home and abroad.

## Duties and obligations
- **obey the laws** and respect constituted authority
- **pay taxes** promptly
- **vote** in elections
- **defend the country** when required; render national service
- respect the **national flag, anthem and other symbols**
- respect the **rights of others**
- assist law-enforcement agencies — report crime, give evidence
- protect public property
- be loyal and patriotic; contribute to community development
- take part in the census
**Duties** are compulsory, backed by law (obeying laws, paying taxes); **obligations** are expected but not enforced by punishment (voting, community service).

## Loss of citizenship
- **renunciation** — voluntarily giving it up, usually to take another
- **deprivation (withdrawal)** by the state of a registered or naturalised citizen who
  - is **disloyal** to the country in word or deed
  - trades with or assists an **enemy** in war
  - is sentenced to **imprisonment for three years or more** within seven years of naturalisation
  - obtained citizenship by fraud
- acquiring the citizenship of another country (for those not citizens by birth)
A citizen by birth cannot be deprived of citizenship.

## Stateless persons
People who are not recognised as citizens by any state.

## Good citizenship
Honesty; obedience to law; tolerance; payment of taxes; participation in public affairs; service to the community; patriotism.`,
          examples: `**Example 1.** What is *jus soli*? *Answer:* Acquiring citizenship by **birth in the territory** of a state.

**Example 2.** How many years of residence are required for naturalisation in Nigeria? *Answer:* **Fifteen years**.

**Example 3.** State three duties of a citizen. *Answer:* **Obeying the law, paying taxes and defending the country**.`,
        },
        questions: [
          ["E", "A person who is a full legal member of a state, with rights and duties, is", "a citizen", "an alien", "a refugee", "a tourist", "He owes allegiance to the state."],
          ["E", "A person living in a country of which he is not a citizen is", "an alien", "a native", "a patriot", "an elector", "He cannot vote or hold elective office."],
          ["E", "A duty of a citizen is to", "pay taxes", "evade the law", "destroy public property", "refuse to be counted in a census", "Taxes finance government services."],
          ["M", "The principle by which citizenship is acquired through birth in the territory of a state is", "jus soli", "jus sanguinis", "naturalisation", "registration", "It means the law of the soil."],
          ["M", "The acquisition of citizenship by a foreigner who applies after fulfilling stated conditions is", "naturalisation", "citizenship by birth", "honorary citizenship", "renunciation", "A period of residence is required."],
          ["M", "A foreign woman married to a Nigerian man may become a Nigerian citizen by", "registration", "birth", "conquest", "honorary award only", "She must take the oath of allegiance."],
          ["M", "The voluntary giving up of one's citizenship is called", "renunciation", "deprivation", "deportation", "naturalisation", "It is usually done to take another citizenship."],
          ["H", "A person applying to be a Nigerian citizen by naturalisation must have resided in Nigeria for a continuous period of", "fifteen years", "five years", "seven years", "twenty-five years", "This is one of the constitutional conditions."],
          ["H", "A naturalised citizen may be deprived of citizenship if he", "is disloyal to the country or assists its enemy in war", "pays his taxes regularly", "votes in elections", "travels abroad on holiday", "A citizen by birth cannot be so deprived."],
          ["H", "A difference between a citizen and an alien is that only a citizen", "can vote and be voted for", "must obey the laws", "pays taxes", "is entitled to protection of life", "Political rights are reserved for citizens."],
        ],
      },
    ],
  },
];
