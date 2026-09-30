import type { TermPlan } from "../types";

/** JSS3 Social Studies — original Precious PS content; Term 3 is structured BECE revision. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Environmental problems and management",
        subtopics: ["Meaning of environmental problems", "Erosion, flooding and desertification", "Deforestation and pollution", "Managing the environment"],
        objectives: ["Identify major environmental problems in Nigeria", "Explain the causes and effects of each problem", "Describe ways of managing the environment", "Explain the roles of individuals and government in environmental protection"],
        lesson: {
          title: "Protecting Our Environment",
          summary: "Identify Nigeria's environmental problems and how to manage them.",
          minutes: 40,
          notes: `## Environmental problems in Nigeria
| Problem | Main areas | Causes | Effects |
|---|---|---|---|
| **gully erosion** | south-east (Anambra, Imo, Abia) | heavy rain, loose soils, poor drainage, removal of vegetation | loss of farmland, houses and roads |
| **flooding** | river valleys and cities (Lagos, Kogi, Benue, Bayelsa) | heavy rain, blocked drains, building on flood plains, dam releases | deaths, displacement, disease |
| **desertification** | far north (Sokoto, Borno, Yobe) | drought, overgrazing, deforestation | loss of farmland, migration, conflict |
| **deforestation** | forest belt | logging, farming, fuel wood | loss of wildlife, erosion, climate change |
| **pollution** | cities, Niger Delta | refuse, oil spills, gas flaring, vehicles | disease, loss of fish and farmland |

## Managing the environment
- plant trees; control bush burning and overgrazing
- build and clear **drains**; avoid building in waterways
- proper **waste disposal** and recycling
- clean up oil spills; reduce gas flaring
- environmental education and **sanitation exercises**
- enforce environmental laws

## Agencies
Federal Ministry of Environment, **NESREA** (environmental standards), **NEMA** and state emergency agencies (disasters), state waste management authorities (e.g. LAWMA in Lagos), and the **Great Green Wall** agency (desertification).

## Individual responsibility
Do not litter or dump refuse in drains; plant and protect trees; join clean-up activities.`,
          examples: `**Example 1.** Which environmental problem is most severe in Anambra State? *Answer:* **gully erosion**.

**Example 2.** Name one cause of flooding in cities. *Answer:* **blocked drains** from refuse.

**Example 3.** How can individuals help the environment? *Answer:* By **not littering** and by **planting trees**.`,
        },
        questions: [
          ["E", "Which environmental problem is most common in the far north of Nigeria?", "desertification", "gully erosion", "coastal flooding only", "mangrove loss", "Drought and overgrazing spread desert conditions."],
          ["E", "Dumping refuse in drains can cause", "flooding", "desertification", "drought", "earthquakes", "Blocked drains overflow."],
          ["E", "Planting trees helps to control", "erosion", "pollution by vehicles only", "noise", "inflation", "Roots hold the soil."],
          ["M", "Gully erosion is most severe in", "south-eastern Nigeria", "the Sahel far north", "Lagos lagoon", "Jos Plateau only", "Loose soils and heavy rain cause gullies."],
          ["M", "Overgrazing by livestock contributes to", "desertification", "flooding of cities", "oil spills", "gas flaring", "Vegetation cover is lost."],
          ["M", "Oil spills and gas flaring are major causes of pollution in the", "Niger Delta", "Sahel", "Mambilla Plateau", "Jos Plateau", "Oil production is centred there."],
          ["M", "Which agency responds to disasters such as floods at the national level?", "NEMA", "NDLEA", "NAPTIP", "INEC", "It manages emergencies."],
          ["H", "Building houses on flood plains and waterways increases the risk of", "flooding and loss of property", "desertification", "better drainage", "higher crop yields", "Water needs space to flow."],
          ["H", "The Great Green Wall project is aimed at", "stopping desertification", "stopping gully erosion in the south-east", "building roads", "oil exploration", "Tree belts slow the desert."],
          ["H", "Which is an individual responsibility in environmental management?", "not littering", "burning refuse in drains", "cutting all trees", "dumping waste in rivers", "Everyone must keep the environment clean."],
        ],
      },
      {
        week: 2,
        title: "Migration and urbanisation",
        subtopics: ["Meaning and types of migration", "Causes of migration", "Urbanisation and its causes", "Effects of migration and urbanisation"],
        objectives: ["Define migration and urbanisation", "Distinguish types of migration", "Explain push and pull factors", "Describe the effects of migration and urbanisation"],
        lesson: {
          title: "People on the Move",
          summary: "Explain why people migrate and how cities grow.",
          minutes: 40,
          notes: `## Migration
**Migration** is the **movement of people from one place to another to live**, temporarily or permanently.
| Type | Example |
|---|---|
| **rural–urban** | from a village to Lagos or Kano |
| **urban–rural** | retirees returning to their villages |
| **rural–rural** | farmers moving to more fertile land |
| **urban–urban** | from one city to another for work |
| **internal** | within Nigeria |
| **international** | from Nigeria to another country (emigration) or into Nigeria (immigration) |
| **seasonal** | herders moving with seasons (transhumance) |

## Push and pull factors
- **Push factors** (drive people away): unemployment, poverty, lack of amenities, conflict, insecurity, natural disasters, land shortage.
- **Pull factors** (attract people): jobs, better schools and hospitals, electricity, security, higher wages, city lifestyle.

## Urbanisation
**Urbanisation** is the **growth of towns and cities** and the increasing proportion of people living in them. Causes: rural–urban migration, natural increase, industrialisation, creation of new state capitals.

## Effects
| Positive | Negative |
|---|---|
| labour for industries | overcrowding and **slums** |
| cultural exchange | pressure on water, housing, transport |
| growth of trade | traffic congestion, pollution |
| improved skills | unemployment and crime in cities |
| money sent home (remittances) | shortage of farm labour and food in rural areas |

## Solutions
rural development (roads, electricity, schools, clinics), job creation in rural areas, urban planning and housing schemes.`,
          examples: `**Example 1.** Is lack of jobs in a village a push or pull factor? *Answer:* a **push factor**.

**Example 2.** Name one negative effect of urbanisation. *Answer:* **slums** (or traffic congestion).

**Example 3.** How can rural–urban migration be reduced? *Answer:* By **developing rural areas** with amenities and jobs.`,
        },
        questions: [
          ["E", "The movement of people from one place to another to live is", "migration", "urbanisation", "census", "tourism", "Migrants change their place of residence."],
          ["E", "The growth of towns and cities is", "urbanisation", "desertification", "deforestation", "colonisation", "More people live in urban areas."],
          ["E", "Moving from a village to a city is", "rural–urban migration", "urban–rural migration", "international migration", "seasonal migration only", "It is the most common type in Nigeria."],
          ["M", "Lack of jobs in a village is a", "push factor", "pull factor", "neutral factor", "census factor", "It drives people away."],
          ["M", "Better hospitals and schools in cities are", "pull factors", "push factors", "barriers", "taxes", "They attract migrants."],
          ["M", "Which is a negative effect of urbanisation?", "growth of slums", "cultural exchange", "growth of trade", "improved skills", "Overcrowding produces slums."],
          ["M", "Herders moving with their cattle in search of pasture according to the season practise", "seasonal migration (transhumance)", "urbanisation", "emigration", "naturalisation", "They move with the seasons."],
          ["H", "How does rural–urban migration affect food production?", "It reduces farm labour in rural areas.", "It increases rural labour.", "It has no effect.", "It creates more farmland in cities.", "Young farmers leave for cities."],
          ["H", "Money sent home by migrants to their families is called", "remittances", "taxes", "levies", "fines", "Remittances support families."],
          ["H", "Which is the best long-term solution to excessive rural–urban migration?", "developing rural areas", "closing cities", "banning travel", "demolishing villages", "Amenities in villages reduce push factors."],
        ],
      },
      {
        week: 3,
        title: "Regional cooperation: ECOWAS and the African Union",
        subtopics: ["Meaning of international cooperation", "ECOWAS: formation, aims and achievements", "The African Union", "Nigeria's role in Africa"],
        objectives: ["Explain the need for cooperation among nations", "Describe the formation and aims of ECOWAS", "Describe the African Union and its aims", "Explain Nigeria's contributions to African cooperation"],
        lesson: {
          title: "Working Together in Africa",
          summary: "Describe ECOWAS, the AU and Nigeria's role in African cooperation.",
          minutes: 45,
          notes: `## Why nations cooperate
No country has everything it needs. Nations cooperate for **trade, security, peace, development, cultural exchange** and to solve shared problems.

## ECOWAS
**Economic Community of West African States**
- Formed on **28 May 1975** by the **Treaty of Lagos**.
- Headquarters: **Abuja**, Nigeria.
- Founders included **Yakubu Gowon** (Nigeria) and **Gnassingbé Eyadéma** (Togo).
- Aims: economic integration, free movement of people and goods, peace and security, better living standards.
- Achievements: **ECOWAS travel certificate/passport** and visa-free movement for citizens; **ECOMOG** peace-keeping in Liberia and Sierra Leone; ECOWAS Court; trade liberalisation.
- Challenges: political instability and coups, poor infrastructure, language barriers (English, French, Portuguese), smuggling, withdrawal of some members.

## The African Union (AU)
- Replaced the **Organisation of African Unity (OAU)**, which was formed in **1963**.
- The AU was launched in **2002**.
- Headquarters: **Addis Ababa**, Ethiopia.
- Aims: unity and solidarity of African states, peace and security, democracy and human rights, economic development (e.g. the **African Continental Free Trade Area**).

## Nigeria's role
Nigeria is often called the **"Giant of Africa"**. It hosts ECOWAS, contributes troops to peace-keeping, supported liberation struggles in southern Africa (e.g. against apartheid), and provides aid and technical assistance (e.g. Technical Aid Corps).`,
          examples: `**Example 1.** When was ECOWAS formed? *Answer:* **28 May 1975**.

**Example 2.** Where is the headquarters of the AU? *Answer:* **Addis Ababa, Ethiopia**.

**Example 3.** What was ECOMOG? *Answer:* the **ECOWAS peace-keeping force** that served in Liberia and Sierra Leone.`,
        },
        questions: [
          ["E", "ECOWAS stands for", "Economic Community of West African States", "East Coast Organisation of West Africa", "Economic Council of World African States", "Eastern Community of West Asian States", "It groups West African countries."],
          ["E", "The headquarters of ECOWAS is in", "Abuja", "Accra", "Addis Ababa", "Dakar", "Nigeria hosts ECOWAS."],
          ["E", "The African Union has its headquarters in", "Addis Ababa", "Abuja", "Lagos", "Nairobi", "It is in Ethiopia."],
          ["M", "ECOWAS was formed in", "1975", "1963", "2002", "1960", "The Treaty of Lagos was signed in 1975."],
          ["M", "The African Union replaced the", "Organisation of African Unity", "United Nations", "Commonwealth", "ECOWAS", "The OAU was formed in 1963."],
          ["M", "The ECOWAS peace-keeping force that served in Liberia was", "ECOMOG", "NATO", "UNICEF", "NYSC", "ECOMOG restored peace in the region."],
          ["M", "A main aim of ECOWAS is", "economic integration of member states", "colonising other countries", "banning trade", "creating one religion", "It promotes regional economic cooperation."],
          ["H", "Which Nigerian head of state played a leading role in founding ECOWAS?", "Yakubu Gowon", "Olusegun Obasanjo", "Shehu Shagari", "Goodluck Jonathan", "Gowon co-founded ECOWAS in 1975."],
          ["H", "A challenge facing ECOWAS is", "political instability in some member states", "too much cooperation", "a single common language", "excellent roads everywhere", "Coups disrupt integration."],
          ["H", "Nigeria is often described as the 'Giant of Africa' because of its", "large population and influence in African affairs", "small size", "cold climate", "lack of resources", "Its size and role are significant."],
        ],
      },
      {
        week: 4,
        title: "Nigeria and world organisations",
        subtopics: ["The United Nations", "Organs and agencies of the UN", "The Commonwealth of Nations", "Benefits of membership to Nigeria"],
        objectives: ["Describe the formation and aims of the United Nations", "Identify the main organs and agencies of the UN", "Describe the Commonwealth", "Explain the benefits Nigeria gains from international organisations"],
        lesson: {
          title: "Nigeria in the World Community",
          summary: "Describe the UN, the Commonwealth and Nigeria's membership.",
          minutes: 45,
          notes: `## The United Nations (UN)
- Formed on **24 October 1945** after the Second World War.
- Headquarters: **New York**, USA.
- Nigeria joined on **7 October 1960**, shortly after independence.
- Aims: maintain **international peace and security**, promote friendly relations, human rights, and social and economic progress.

## Main organs
| Organ | Function |
|---|---|
| **General Assembly** | all members discuss world issues; one country, one vote |
| **Security Council** | peace and security; 5 permanent members with veto (USA, UK, France, Russia, China) and 10 elected members |
| **Secretariat** | administration, headed by the **Secretary-General** |
| **International Court of Justice** | settles legal disputes between states (The Hague) |
| **Economic and Social Council** | economic and social cooperation |

## Specialised agencies
**UNICEF** (children), **UNESCO** (education, science and culture), **WHO** (health), **FAO** (food and agriculture), **ILO** (labour), **UNHCR** (refugees), **World Bank** and **IMF** (finance).

## The Commonwealth
A voluntary association of countries, mostly **former British colonies**. Nigeria joined at independence in 1960. It promotes democracy, development, education (scholarships) and the **Commonwealth Games**.

## Benefits to Nigeria
aid and loans, health programmes (e.g. polio eradication with WHO and UNICEF), education and scholarships, peace-keeping experience, international influence, and a voice in world affairs.`,
          examples: `**Example 1.** When did Nigeria join the United Nations? *Answer:* **7 October 1960**.

**Example 2.** Which UN agency deals with children? *Answer:* **UNICEF**.

**Example 3.** Which UN organ has five permanent members with veto power? *Answer:* the **Security Council**.`,
        },
        questions: [
          ["E", "The United Nations was formed in", "1945", "1960", "1975", "1914", "It was founded after the Second World War."],
          ["E", "The headquarters of the United Nations is in", "New York", "London", "Geneva only", "Abuja", "The UN is based in New York."],
          ["E", "Which UN agency deals with children's welfare?", "UNICEF", "FAO", "ILO", "IMF", "UNICEF works for children."],
          ["M", "Nigeria became a member of the UN in", "1960", "1945", "1963", "1975", "It joined shortly after independence."],
          ["M", "The UN organ in which all members are represented is the", "General Assembly", "Security Council", "Secretariat", "International Court of Justice", "Every member has a vote there."],
          ["M", "The UN agency responsible for health is the", "WHO", "UNESCO", "ILO", "FAO", "The World Health Organization."],
          ["M", "The Commonwealth is made up mainly of", "former British colonies", "European countries only", "Asian countries only", "French-speaking countries only", "It grew out of the British Empire."],
          ["H", "The UN organ with five permanent members holding veto power is the", "Security Council", "General Assembly", "Economic and Social Council", "Secretariat", "The permanent five can block resolutions."],
          ["H", "UNESCO is concerned with", "education, science and culture", "food production only", "labour disputes", "banking", "It promotes learning and heritage."],
          ["H", "Which is a benefit Nigeria gains from UN membership?", "support for health programmes such as polio eradication", "loss of sovereignty", "colonial rule", "higher illiteracy", "WHO and UNICEF support health."],
        ],
      },
      {
        week: 5,
        title: "Consumer rights and protection",
        subtopics: ["Who is a consumer", "Rights of consumers", "Responsibilities of consumers", "Consumer protection agencies"],
        objectives: ["Define a consumer", "State the rights of consumers", "State the responsibilities of consumers", "Identify agencies that protect consumers in Nigeria"],
        lesson: {
          title: "Knowing Your Rights as a Buyer",
          summary: "Explain consumers' rights, responsibilities and protection agencies.",
          minutes: 40,
          notes: `## Meaning
A **consumer** is a person who **buys or uses goods and services** for personal use.

## Consumer rights
| Right | Meaning |
|---|---|
| **safety** | protection from dangerous products |
| **information** | accurate labels: ingredients, expiry date, price, instructions |
| **choice** | variety of products at fair prices |
| **to be heard** | complaints should be considered |
| **redress** | compensation, repair or replacement for faulty goods |
| **consumer education** | knowledge to make wise choices |
| **healthy environment** | goods and services should not harm the environment |

## Consumer responsibilities
- check **expiry dates** and **NAFDAC registration numbers**
- read labels and instructions
- demand and keep **receipts**
- buy from reliable sellers; avoid fake and substandard goods
- report fake products and unfair practices
- use products as directed

## Protection agencies in Nigeria
| Agency | Role |
|---|---|
| **FCCPC** (Federal Competition and Consumer Protection Commission) | protects consumers and fair competition |
| **NAFDAC** | regulates food, drugs, cosmetics, water |
| **SON** (Standards Organisation of Nigeria) | sets and enforces product standards |
| **NCC** | protects telecom consumers |
| **CBN** | protects bank customers |

## Common consumer problems
fake and adulterated products, expired goods, short measures, overpricing, poor after-sales service.`,
          examples: `**Example 1.** Which agency regulates drugs and food in Nigeria? *Answer:* **NAFDAC**.

**Example 2.** Name one right of a consumer. *Answer:* the **right to safety** (or information, redress).

**Example 3.** Why should consumers keep receipts? *Answer:* As **proof of purchase** for complaints or refunds.`,
        },
        questions: [
          ["E", "A person who buys or uses goods and services is a", "consumer", "producer", "wholesaler", "manufacturer", "Consumers are end users."],
          ["E", "The agency that regulates food and drugs in Nigeria is", "NAFDAC", "INEC", "FRSC", "NPC", "NAFDAC registers food and drugs."],
          ["E", "Before buying a drug, a consumer should check its", "expiry date", "colour only", "shop's paint", "seller's age", "Expired drugs can be harmful."],
          ["M", "The right of consumers to accurate labels and details is the right to", "information", "redress", "silence", "tax", "Labels inform buyers."],
          ["M", "Receiving compensation or replacement for faulty goods is the right to", "redress", "information", "choice", "education only", "Redress corrects wrongs."],
          ["M", "The agency that sets product standards in Nigeria is", "SON", "NDLEA", "NYSC", "NAPTIP", "The Standards Organisation of Nigeria."],
          ["M", "Consumers should keep receipts because they", "serve as proof of purchase", "are decorations", "increase prices", "are required for voting", "Receipts support complaints."],
          ["H", "Which agency protects telecom consumers from unfair practices?", "NCC", "NAFDAC", "SON", "NEMA", "The Nigerian Communications Commission."],
          ["H", "Selling less than the stated quantity is called", "short measure", "discount", "redress", "consumer education", "Buyers are cheated."],
          ["H", "The FCCPC is responsible for", "protecting consumers and promoting fair competition", "conducting elections", "fighting drug trafficking", "issuing passports", "It enforces consumer protection law."],
        ],
      },
      {
        week: 6,
        title: "Democracy and elections",
        subtopics: ["Meaning of democracy", "Features of democracy", "Elections and the electoral process", "Problems of elections and citizens' roles"],
        objectives: ["Define democracy", "State the features of democracy", "Describe the electoral process in Nigeria", "Identify problems of elections and citizens' roles in free and fair elections"],
        lesson: {
          title: "Government by the People",
          summary: "Explain democracy, elections and citizens' roles in credible elections.",
          minutes: 40,
          notes: `## Meaning
**Democracy** is a system of government in which power belongs to the **people**, who choose their leaders through **free and fair elections**. Abraham Lincoln described it as "government of the people, by the people, for the people."

## Features
- **regular, free and fair elections**
- **rule of law** — everyone is equal before the law
- **fundamental human rights** are respected
- **separation of powers** (legislature, executive, judiciary)
- **multi-party system** and opposition
- **independent judiciary** and **free press**
- majority rule with protection of minority rights

## Elections in Nigeria
- Conducted by the **Independent National Electoral Commission (INEC)**.
- Voting age: **18 years** and above.
- Steps: voter **registration** (Permanent Voter Card, PVC) → party **primaries** → **campaigns** → **voting** by secret ballot → **counting and collation** → **declaration** of results → election **petitions** at tribunals if disputed.
- Nigeria returned to civilian democratic rule on **29 May 1999**.

## Problems of elections
**rigging**, **vote buying**, violence and thuggery, voter apathy, ballot-box snatching, fake news, and poor logistics.

## Citizens' roles
register and **vote**; resist vote buying; report electoral offences; join peaceful campaigns; accept results or use the courts; serve as election observers or ad-hoc staff.`,
          examples: `**Example 1.** Which body conducts elections in Nigeria? *Answer:* **INEC**.

**Example 2.** What is the minimum voting age in Nigeria? *Answer:* **18 years**.

**Example 3.** Name one problem of elections in Nigeria. *Answer:* **vote buying** (or rigging, violence).`,
        },
        questions: [
          ["E", "A system in which people choose their leaders through elections is", "democracy", "monarchy", "dictatorship", "military rule", "Power belongs to the people."],
          ["E", "The body that conducts elections in Nigeria is", "INEC", "NDLEA", "NAFDAC", "FRSC", "The Independent National Electoral Commission."],
          ["E", "The minimum voting age in Nigeria is", "18 years", "16 years", "21 years", "25 years", "Citizens vote from 18."],
          ["M", "Everyone being equal before the law is known as the", "rule of law", "federal character", "census", "veto", "No one is above the law."],
          ["M", "Nigeria returned to civilian democratic rule on", "29 May 1999", "1 October 1960", "12 June 1993", "15 January 1966", "Democracy Day was later moved to 12 June."],
          ["M", "The card voters present to vote is the", "Permanent Voter Card", "national passport only", "driver's licence", "school ID", "The PVC identifies registered voters."],
          ["M", "Giving money to voters to influence their votes is", "vote buying", "campaigning", "registration", "collation", "It corrupts elections."],
          ["H", "Disputed election results are resolved by", "election petition tribunals and courts", "violence", "ignoring the results", "the police alone", "Courts settle electoral disputes."],
          ["H", "The division of government into legislature, executive and judiciary is", "separation of powers", "rule of law", "federal character", "delegated legislation", "It prevents abuse of power."],
          ["H", "When eligible citizens refuse to vote because they have lost interest, it is called", "voter apathy", "vote buying", "rigging", "registration", "Apathy weakens democracy."],
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
        title: "Money and the banking system",
        subtopics: ["Barter and the evolution of money", "Functions and qualities of money", "Types of banks", "Services of commercial banks"],
        objectives: ["Explain barter and its problems", "State the functions and qualities of money", "Identify types of banks in Nigeria", "Describe services provided by commercial banks"],
        lesson: {
          title: "Money and Banks",
          summary: "Explain why money replaced barter and what banks do.",
          minutes: 40,
          notes: `## Barter
**Barter** is the direct exchange of **goods for goods**. Problems:
- **double coincidence of wants** (each person must want what the other has)
- difficulty in dividing goods (e.g. a goat)
- no common measure of value
- difficulty in storing wealth (perishable goods)
Early forms of money in West Africa included **cowries**, manillas and salt.

## Money
**Money** is anything **generally accepted** as a means of payment.
Nigeria's currency: the **naira (₦)** and **kobo**, introduced on **1 January 1973**, issued by the **Central Bank of Nigeria (CBN)**.

## Functions of money
**medium of exchange**, **measure of value**, **store of value**, **standard of deferred payment** (paying later).

## Qualities of good money
acceptability, durability, portability, divisibility, homogeneity (uniformity), scarcity (limited supply), and being difficult to forge.

## Types of banks
| Bank | Function |
|---|---|
| **Central Bank of Nigeria** | issues currency, banker to government and other banks, controls monetary policy |
| **commercial banks** | accept deposits, give loans, transfers |
| **microfinance banks** | small loans to small businesses and low-income people |
| **development banks** (e.g. Bank of Agriculture, Bank of Industry) | long-term loans for development |
| **mortgage banks** | housing loans |

## Services of commercial banks
savings and current accounts, loans and overdrafts, **ATM cards**, electronic transfers and mobile banking, safe keeping of valuables, foreign exchange, financial advice.`,
          examples: `**Example 1.** What is the main problem of barter? *Answer:* **double coincidence of wants**.

**Example 2.** Which bank issues the naira? *Answer:* the **Central Bank of Nigeria**.

**Example 3.** Name one function of money. *Answer:* **medium of exchange** (or store of value).`,
        },
        questions: [
          ["E", "The direct exchange of goods for goods is", "barter", "banking", "taxation", "auction", "No money is used."],
          ["E", "Nigeria's currency is the", "naira", "cedi", "dollar", "pound", "The naira replaced the pound in 1973."],
          ["E", "The bank that issues Nigeria's currency is the", "Central Bank of Nigeria", "a microfinance bank", "a mortgage bank", "a commercial bank", "The CBN issues naira and kobo."],
          ["M", "The main problem of barter is", "double coincidence of wants", "too much money", "high interest rates", "ATM failures", "Each trader must want the other's goods."],
          ["M", "Using money to pay for goods and services shows its function as a", "medium of exchange", "store of value", "standard of deferred payment", "unit of weight", "Money eases exchange."],
          ["M", "Which is a quality of good money?", "durability", "perishability", "heaviness", "easy forgery", "Money must last."],
          ["M", "Banks that give small loans to small businesses are", "microfinance banks", "central banks", "mortgage banks", "merchant ships", "They serve small enterprises."],
          ["H", "The naira was introduced in", "1973", "1960", "1914", "1999", "It replaced the Nigerian pound on 1 January 1973."],
          ["H", "Paying later for goods bought today shows the function of money as a", "standard of deferred payment", "medium of exchange", "measure of value only", "unit of account only", "Debts are settled in money later."],
          ["H", "A bank that gives long-term loans for housing is a", "mortgage bank", "microfinance bank", "central bank", "savings group", "Mortgage banks finance homes."],
        ],
      },
      {
        week: 2,
        title: "Trade and interdependence",
        subtopics: ["Meaning of trade", "Home and foreign trade", "Imports and exports of Nigeria", "Interdependence among communities and nations"],
        objectives: ["Define trade", "Distinguish home trade from foreign trade", "Identify Nigeria's major imports and exports", "Explain interdependence among communities and nations"],
        lesson: {
          title: "Trade Links People",
          summary: "Explain types of trade and why communities and nations depend on each other.",
          minutes: 40,
          notes: `## Meaning
**Trade** is the **buying and selling of goods and services**.

## Home trade
Trade **within** a country.
- **Wholesale trade**: buying in large quantities from producers and selling to retailers.
- **Retail trade**: selling in small quantities to consumers (shops, markets, hawkers, supermarkets, online stores).

## Foreign (international) trade
Trade **between countries**.
- **Imports**: goods and services bought from other countries.
- **Exports**: goods and services sold to other countries.
- **Entrepôt (re-export)** trade: importing goods and re-exporting them.

## Nigeria's trade
| Exports | Imports |
|---|---|
| crude oil and liquefied natural gas | machinery and equipment |
| cocoa, sesame, cashew, ginger | vehicles and spare parts |
| rubber, palm products | refined petroleum products (historically) |
| hides and skins | pharmaceuticals, chemicals, some foods |

## Interdependence
**Interdependence** means that people, communities and nations **depend on one another** for goods, services and skills.
- Northern Nigeria supplies grains, beans, onions, tomatoes and cattle to the south; the south supplies kola nuts, palm oil, yams and manufactured goods to the north.
- Nigeria exports oil and imports machinery.
Interdependence promotes **specialisation, cooperation, peace and unity**.

## Balance of trade
Exports minus imports of **goods**. A **favourable** balance means exports exceed imports.`,
          examples: `**Example 1.** Is selling cocoa to Europe an import or an export? *Answer:* an **export**.

**Example 2.** Name one good the north supplies to the south. *Answer:* **onions** (or cattle, grains, tomatoes).

**Example 3.** Exports of ₦500 billion and imports of ₦400 billion give what balance of trade? *Answer:* a **favourable** balance of ₦100 billion.`,
        },
        questions: [
          ["E", "The buying and selling of goods and services is", "trade", "production", "consumption", "taxation", "Trade exchanges goods."],
          ["E", "Goods sold to other countries are", "exports", "imports", "taxes", "loans", "Exports leave the country."],
          ["E", "Nigeria's main export is", "crude oil", "cars", "machinery", "computers", "Oil earns most foreign exchange."],
          ["M", "Trade within a country is", "home trade", "foreign trade", "entrepôt trade", "barter only", "It takes place inside the country."],
          ["M", "Goods bought from other countries are", "imports", "exports", "re-exports only", "local products", "Imports come in."],
          ["M", "Selling goods in small quantities to final consumers is", "retail trade", "wholesale trade", "foreign trade", "entrepôt trade", "Retailers serve consumers."],
          ["M", "The dependence of communities and nations on one another is", "interdependence", "independence", "isolation", "colonisation", "They need each other."],
          ["H", "When a country's exports of goods exceed its imports, its balance of trade is", "favourable", "unfavourable", "zero always", "negative", "More is sold than bought."],
          ["H", "Northern Nigeria supplying cattle and onions to the south illustrates", "interdependence", "isolation", "self-sufficiency", "migration", "Regions exchange products."],
          ["H", "Importing goods and re-exporting them is", "entrepôt trade", "retail trade", "barter", "home trade", "Goods pass through to other markets."],
        ],
      },
      {
        week: 3,
        title: "Conflict resolution and peace building",
        subtopics: ["Methods of conflict resolution", "Negotiation, mediation and arbitration", "Peace building", "Agencies that promote peace"],
        objectives: ["Describe peaceful methods of resolving conflict", "Distinguish negotiation, mediation, arbitration and adjudication", "Explain peace building", "Identify agencies that promote peace"],
        lesson: {
          title: "Resolving Conflicts Peacefully",
          summary: "Apply peaceful methods to settle disputes and build lasting peace.",
          minutes: 40,
          notes: `## Peaceful methods of resolving conflict
| Method | How it works |
|---|---|
| **dialogue** | parties talk openly to understand each other |
| **negotiation** | parties discuss and bargain to reach agreement themselves |
| **mediation** | a **neutral third party** helps the parties reach their own agreement |
| **conciliation** | a third party encourages the parties and suggests solutions |
| **arbitration** | a neutral **arbitrator** hears both sides and makes a **binding decision** |
| **adjudication (litigation)** | a **court** decides the case according to law |
| **reconciliation** | restoring friendly relationships after a dispute |

## Skills for resolving conflict
active listening, respect, controlling anger, empathy, honesty, compromise, focusing on the problem not the person.

## Peace building
Long-term activities that **remove the causes of conflict** and prevent violence from returning:
justice and fairness, poverty reduction and jobs, education for peace, inclusion of all groups, rebuilding destroyed communities, disarming and rehabilitating fighters, truth and reconciliation.

## Agencies and groups that promote peace
- **Institute for Peace and Conflict Resolution (IPCR)**, Abuja
- the police, courts and the military (peace support operations)
- traditional and religious leaders (e.g. the Nigeria Inter-Religious Council)
- NGOs, peace clubs in schools
- the UN, AU and ECOWAS at international level`,
          examples: `**Example 1.** Two traders settle a dispute by discussing and bargaining themselves. Which method is this? *Answer:* **negotiation**.

**Example 2.** A neutral person makes a binding decision after hearing both sides. Which method is this? *Answer:* **arbitration**.

**Example 3.** Name one peace-building activity. *Answer:* **creating jobs** (or peace education, reconciliation).`,
        },
        questions: [
          ["E", "Parties discussing and bargaining to reach agreement themselves is", "negotiation", "arbitration", "adjudication", "war", "They settle it themselves."],
          ["E", "Which is a peaceful method of resolving conflict?", "dialogue", "revenge", "violence", "insults", "Talking resolves disputes."],
          ["E", "A court deciding a dispute according to law is", "adjudication", "mediation", "negotiation", "dialogue only", "Courts adjudicate cases."],
          ["M", "A neutral person who helps disputing parties reach their own agreement is a", "mediator", "judge", "soldier", "arbitrator who imposes a decision", "Mediators guide but do not decide."],
          ["M", "A neutral person who hears both sides and makes a binding decision is an", "arbitrator", "mediator", "negotiator", "observer", "Arbitration produces binding awards."],
          ["M", "Restoring friendly relationships after a dispute is", "reconciliation", "escalation", "litigation", "retaliation", "It rebuilds relationships."],
          ["M", "Which skill helps in resolving conflict?", "active listening", "shouting", "name-calling", "ignoring the other side", "Listening builds understanding."],
          ["H", "Long-term activities that remove the causes of conflict are called", "peace building", "peace breaking", "arbitration only", "war planning", "They prevent violence from returning."],
          ["H", "The Institute for Peace and Conflict Resolution is located in", "Abuja", "Lagos", "Kano", "Port Harcourt", "IPCR is in Abuja."],
          ["H", "Why is justice important for lasting peace?", "Unresolved injustice leads to renewed conflict.", "Justice causes war.", "Peace needs no fairness.", "Justice is unrelated to peace.", "People resist unfair treatment."],
        ],
      },
      {
        week: 4,
        title: "Disaster and emergency management",
        subtopics: ["Meaning of disasters and emergencies", "Natural and man-made disasters", "Stages of disaster management", "Safety and first response"],
        objectives: ["Define disasters and emergencies", "Distinguish natural from man-made disasters", "Describe the stages of disaster management", "State safety measures during emergencies"],
        lesson: {
          title: "Preparing for Emergencies",
          summary: "Explain disasters and how to prepare for and respond to emergencies.",
          minutes: 40,
          notes: `## Meanings
- An **emergency** is a sudden, dangerous situation that needs **immediate action**.
- A **disaster** is a serious event that causes **widespread loss of life, property or damage to the environment**, beyond the community's ability to cope alone.

## Types of disasters
| Natural | Man-made |
|---|---|
| floods | fire outbreaks |
| drought | building collapse |
| windstorms and rainstorms | road, rail and air crashes |
| epidemics (e.g. cholera, Lassa fever) | explosions (gas, fuel tankers) |
| landslides and erosion | oil spills |
| earthquakes (rare in Nigeria) | terrorism, communal clashes |

## Stages of disaster management
1. **Prevention/mitigation** — reducing risk (building codes, clearing drains, planting trees).
2. **Preparedness** — plans, drills, early warning, first-aid training, emergency numbers.
3. **Response** — rescue, first aid, evacuation, food and shelter.
4. **Recovery** — rebuilding, rehabilitation, returning to normal life.

## Agencies
**NEMA** (National Emergency Management Agency, 1999), **SEMA** (state agencies), **Federal Fire Service** and state fire services, **Red Cross**, police, FRSC, NIMET (weather forecasts), **Nigeria Hydrological Services Agency** (flood outlooks).
Emergency number: **112** (toll-free in Nigeria).

## Personal safety
Know exits and assembly points; do not panic; in a fire, **crawl low** under smoke; never use lifts during fires; switch off gas and electricity; follow instructions of officials; keep emergency numbers.`,
          examples: `**Example 1.** Is a building collapse natural or man-made? *Answer:* **man-made**.

**Example 2.** What is the national toll-free emergency number? *Answer:* **112**.

**Example 3.** Why should you crawl low in a smoke-filled room? *Answer:* Cleaner air is **near the floor**.`,
        },
        questions: [
          ["E", "A sudden dangerous situation needing immediate action is", "an emergency", "a festival", "a census", "an election", "Emergencies require quick response."],
          ["E", "Which is a natural disaster?", "flood", "building collapse", "tanker explosion", "plane crash", "Floods result from natural processes."],
          ["E", "The national agency that manages emergencies is", "NEMA", "NAFDAC", "NYSC", "NAPTIP", "The National Emergency Management Agency."],
          ["M", "Which is a man-made disaster?", "fire outbreak from careless use of gas", "drought", "windstorm", "earthquake", "Human action caused it."],
          ["M", "The toll-free emergency number in Nigeria is", "112", "999 only", "911 only", "000", "112 connects to emergency services."],
          ["M", "Training, drills and early warning belong to the stage of", "preparedness", "recovery", "response", "rebuilding", "They prepare people in advance."],
          ["M", "Rebuilding homes after a flood is the stage of", "recovery", "prevention", "preparedness", "warning", "Recovery restores normal life."],
          ["H", "During a fire in a smoke-filled room, you should", "crawl low to the exit", "stand upright and run in", "use the lift", "hide under the bed", "Air is cleaner near the floor."],
          ["H", "Clearing drains before the rainy season is an example of", "prevention/mitigation", "response", "recovery", "relief distribution", "It reduces flood risk."],
          ["H", "Which agency issues weather forecasts that help disaster preparedness?", "NIMET", "NDLEA", "INEC", "NCC", "The Nigerian Meteorological Agency."],
        ],
      },
      {
        week: 5,
        title: "Gender equality and inclusion",
        subtopics: ["Meaning of gender and gender roles", "Gender inequality", "Persons with disabilities and inclusion", "Promoting equality"],
        objectives: ["Distinguish sex from gender", "Identify forms of gender inequality", "Explain the rights of persons with disabilities", "Suggest ways of promoting equality and inclusion"],
        lesson: {
          title: "Equal Opportunities for All",
          summary: "Explain gender equality and inclusion of persons with disabilities.",
          minutes: 40,
          notes: `## Sex and gender
- **Sex** refers to the **biological** differences between males and females.
- **Gender** refers to the **roles, behaviours and expectations** society assigns to males and females. Gender roles are **learned** and can change.

## Gender roles
Traditionally, women cooked and cared for children while men farmed and earned income. Today, both men and women work as doctors, engineers, pilots, farmers, teachers and leaders.

## Gender inequality
unequal access to **education** for girls, fewer women in **leadership**, unequal pay, denial of **inheritance**, gender-based violence, early marriage, stereotypes ("girls cannot do mathematics").

## Persons with disabilities
**Disability** is a long-term physical, mental, intellectual or sensory impairment which, with barriers in society, limits full participation.
The **Discrimination Against Persons with Disabilities (Prohibition) Act, 2018** prohibits discrimination and requires accessible public buildings, transport and services.

## Inclusion
**Inclusion** means ensuring **everyone** — girls, boys, persons with disabilities and minorities — can take part fully in school, work and society.
Examples: ramps and accessible toilets, sign language interpreters, Braille materials, inclusive classrooms.

## Promoting equality
education for all children, fair laws and their enforcement, equal pay for equal work, stopping gender-based violence, role models, respect and kindness, reporting discrimination.`,
          examples: `**Example 1.** Is the ability to bear children a matter of sex or gender? *Answer:* **sex** (biological).

**Example 2.** Name one form of gender inequality. *Answer:* **denying girls education** (or unequal pay).

**Example 3.** Name one way of including persons with disabilities in schools. *Answer:* **building ramps** (or providing Braille materials).`,
        },
        questions: [
          ["E", "Roles and expectations society assigns to males and females are called", "gender", "sex", "genotype", "blood group", "Gender roles are social."],
          ["E", "Biological differences between males and females refer to", "sex", "gender roles", "culture only", "occupation", "Sex is biological."],
          ["E", "Building ramps in schools helps persons with", "physical disabilities", "no needs", "good eyesight only", "musical talent", "Ramps allow wheelchair access."],
          ["M", "Gender roles are", "learned and can change", "fixed at birth forever", "determined by blood group", "the same as sex", "Society teaches them."],
          ["M", "Which is an example of gender inequality?", "denying girls education", "equal pay for equal work", "equal voting rights", "equal school admission", "Girls are disadvantaged."],
          ["M", "The law that prohibits discrimination against persons with disabilities in Nigeria was passed in", "2018", "1960", "1999", "2003", "It is the 2018 Act."],
          ["M", "Braille materials help", "blind persons to read", "deaf persons to hear", "wheelchair users to climb", "everyone to run faster", "Braille uses raised dots."],
          ["H", "Ensuring that everyone can take part fully in school and society is", "inclusion", "exclusion", "discrimination", "segregation", "Inclusion removes barriers."],
          ["H", "The statement 'girls cannot do mathematics' is an example of", "a gender stereotype", "a scientific fact", "a school rule", "a national symbol", "Stereotypes are unfair generalisations."],
          ["H", "Which action promotes gender equality?", "equal pay for equal work", "early marriage of girls", "denying women inheritance", "excluding women from leadership", "Fair pay treats all workers equally."],
        ],
      },
      {
        week: 6,
        title: "Responsible parenthood and family stability",
        subtopics: ["Meaning of responsible parenthood", "Duties of parents", "Family planning and child spacing", "Causes and effects of family instability"],
        objectives: ["Explain responsible parenthood", "State the duties of responsible parents", "Explain the benefits of family planning", "Describe causes and effects of family instability and possible solutions"],
        lesson: {
          title: "Building Stable Families",
          summary: "Explain responsible parenthood and how families stay stable.",
          minutes: 40,
          notes: `## Responsible parenthood
**Responsible parenthood** means **caring for, providing for and guiding children** properly, and having the number of children one can adequately care for.

## Duties of parents
- provide **food, shelter, clothing** and health care
- **educate** children and pay school fees
- give **love, attention and guidance**
- teach good **values** and discipline without abuse
- protect children from harm
- be good **role models**

## Family planning
**Family planning** is deciding **how many children** to have and **when** to have them (child spacing), by methods approved by health workers.
Benefits:
- better **health** of mother and child
- enough resources for **education** and care of each child
- reduced poverty and stress
- more time for parents to work and care for children

## Family instability
**Causes**: poverty and unemployment, infidelity, poor communication, alcohol and drug abuse, interference from relatives, domestic violence, childlessness, irresponsibility.
**Effects**: divorce or separation, neglected children, street children, juvenile delinquency, school dropout, emotional trauma.

## Solutions
open communication, mutual respect, patience and forgiveness, marriage counselling, financial planning, involvement of respected elders or religious leaders, legal protection from violence.`,
          examples: `**Example 1.** Name one duty of a responsible parent. *Answer:* **educating the children** (or providing food and shelter).

**Example 2.** What is child spacing? *Answer:* **Planning the interval** between births.

**Example 3.** Name one effect of family instability on children. *Answer:* **juvenile delinquency** (or school dropout).`,
        },
        questions: [
          ["E", "Caring for, providing for and guiding children properly is", "responsible parenthood", "child labour", "migration", "nepotism", "Good parents meet children's needs."],
          ["E", "Which is a duty of parents?", "educating their children", "abandoning their children", "sending children to hawk during school hours", "denying them food", "Education is a parental duty."],
          ["E", "Deciding how many children to have and when is", "family planning", "census", "urbanisation", "taxation", "Planning births supports family welfare."],
          ["M", "Planning the interval between births is called", "child spacing", "child labour", "child trafficking", "adoption", "It protects maternal and child health."],
          ["M", "Which is a benefit of family planning?", "better health of mother and child", "more poverty", "school dropout", "overcrowding", "Spacing births improves health."],
          ["M", "Which is a cause of family instability?", "poor communication", "mutual respect", "patience", "good financial planning", "Misunderstandings grow into conflict."],
          ["M", "Which is an effect of family instability on children?", "juvenile delinquency", "better grades", "more discipline", "improved health", "Neglected children may misbehave."],
          ["H", "Why should parents be good role models?", "Children learn by copying their parents.", "Children never copy adults.", "It has no effect on children.", "Only teachers influence children.", "Behaviour is learned at home."],
          ["H", "Which is a good solution to marital conflict?", "marriage counselling", "domestic violence", "abandoning the children", "public insults", "Counsellors help couples resolve issues."],
          ["H", "Having more children than one can care for may lead to", "poverty and neglect of children", "better education for all", "more resources per child", "reduced workload", "Resources are spread too thinly."],
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
        title: "BECE revision: man, culture and social organisation",
        subtopics: ["Meaning and scope of Social Studies", "Family, marriage and culture", "Socialisation and social groups", "Social institutions and values"],
        objectives: ["Recall key concepts in man and his environment", "Revise family, marriage and culture", "Revise socialisation, groups and institutions", "Answer BECE-style questions on social organisation"],
        lesson: {
          title: "BECE Revision: Social Organisation",
          summary: "Revise family, culture, socialisation and institutions for the BECE.",
          minutes: 45,
          notes: `## Key facts
- Social Studies studies **man and his environment** (physical and social).
- **Family**: smallest unit of society. Types: nuclear, extended, monogamous, polygamous, single-parent. Functions: reproduction, care, socialisation.
- **Marriage**: traditional, religious and court (statutory). Bride price in traditional marriage.
- **Culture**: total way of life. Material (tools, food, dress) and non-material (language, beliefs, values). Culture is learned, shared, transmitted and dynamic.
- **Socialisation**: learning society's ways. Agents: family (first), school, peer group, religion, mass media.
- **Social groups**: primary (family, close friends) and secondary (unions, parties).
- **Social institutions**: family, education, religion, economy, government, health, mass media.
- **Values**: honesty, respect, tolerance, hard work, patriotism. **Norms**: accepted rules of behaviour.
- **Leadership styles**: democratic, autocratic, laissez-faire.

## Common BECE traps
- The **family**, not the school, is the first agent of socialisation.
- A **crowd** is not a social group; a **mob** is a violent crowd.
- **Language** is non-material culture.

## Technique
Read all options; watch for **NOT** and **EXCEPT**; eliminate clearly wrong options first.`,
          examples: `**Example 1.** *The first agent of socialisation is:* the **family**.

**Example 2.** *Which is NOT material culture: pot, drum, language, cloth?* *Answer:* **language**.

**Example 3.** *A leader who consults followers uses which style?* *Answer:* **democratic**.`,
        },
        questions: [
          ["E", "The smallest unit of society is the", "family", "state", "community", "nation", "Society is made of families."],
          ["E", "Which of the following is NOT material culture?", "language", "pot", "drum", "cloth", "Language cannot be touched."],
          ["E", "Friends of the same age form a", "peer group", "trade union", "political party", "government", "Peers are age-mates."],
          ["M", "Which is a secondary group?", "a political party", "the family", "close friends", "playmates", "Relationships are formal."],
          ["M", "Marriage conducted at the registry under the Marriage Act is", "statutory (court) marriage", "customary marriage", "religious marriage only", "cohabitation", "It is strictly monogamous."],
          ["M", "Which feature of culture is shown when young people adopt new styles of dressing?", "culture is dynamic", "culture is static", "culture is inherited in the genes", "culture is identical everywhere", "Culture changes over time."],
          ["M", "Honesty, respect and tolerance are examples of", "social values", "social institutions", "national symbols", "natural resources", "Values guide behaviour."],
          ["H", "A leader who allows followers to do as they wish with little direction uses", "laissez-faire leadership", "democratic leadership", "autocratic leadership", "military leadership", "Laissez-faire means let them do."],
          ["H", "Markets and banks belong to which social institution?", "economic", "religious", "political", "educational", "They deal with production and exchange."],
          ["H", "A violent, lawless crowd is called a", "mob", "social group", "committee", "cooperative", "Mobs act emotionally and violently."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: Nigeria and national unity",
        subtopics: ["Nigeria: location, states and peoples", "National symbols", "Independence and nationalism", "National unity, citizenship and democracy"],
        objectives: ["Recall facts about Nigeria's geography and history", "Revise national symbols and their meanings", "Revise national unity, citizenship and democracy", "Answer BECE-style questions on Nigeria"],
        lesson: {
          title: "BECE Revision: Nigeria",
          summary: "Revise Nigeria's geography, history, symbols and civic life for the BECE.",
          minutes: 45,
          notes: `## Nigeria at a glance
- West Africa; neighbours: **Benin** (W), **Niger** (N), **Chad** (NE), **Cameroon** (E), Atlantic Ocean (S).
- **36 states + FCT**; capital **Abuja** (since 1991); **774** LGAs; six geopolitical zones.
- Over **250 ethnic groups**; official language **English**.

## History
- Amalgamation: **1914** by **Lord Lugard**; name suggested by **Flora Shaw**.
- Independence: **1 October 1960**; Republic: **1 October 1963**.
- First Prime Minister: **Tafawa Balewa**; first President: **Nnamdi Azikiwe**.
- Return to democracy: **29 May 1999**.

## National symbols
- Flag: green–white–green (agriculture; peace and unity); designed by **Taiwo Akinkunmi**.
- Coat of arms: Y = Niger and Benue; eagle = strength; horses = dignity; motto **"Unity and Faith, Peace and Progress"**.

## Unity and citizenship
- Unity efforts: **NYSC (1973)**, unity schools, Federal Character, national sports and festivals.
- Obstacles: tribalism, religious intolerance, nepotism, corruption.
- Citizenship by **birth, registration, naturalisation**; fundamental rights in **Chapter IV** of the 1999 Constitution.
- Duties: obey laws, pay taxes, vote, respect symbols.
- Elections conducted by **INEC**; voting age **18**.`,
          examples: `**Example 1.** *Nigeria was amalgamated in:* **1914**.

**Example 2.** *The Y-shape on the coat of arms represents:* the **Niger and Benue rivers**.

**Example 3.** *The NYSC was established in:* **1973**.`,
        },
        questions: [
          ["E", "Nigeria's Independence Day is celebrated on", "1 October", "12 June", "29 May", "1 January", "Nigeria became independent on 1 October 1960."],
          ["E", "Abuja became Nigeria's capital in", "1991", "1960", "1976", "2000", "The seat of government moved from Lagos in 1991."],
          ["E", "The white band of the Nigerian flag stands for", "peace and unity", "agriculture", "oil wealth", "bravery", "White symbolises peace."],
          ["M", "The country that borders Nigeria to the north is", "Niger", "Cameroon", "Benin Republic", "Ghana", "Niger Republic lies to the north."],
          ["M", "Fundamental human rights are in which chapter of the 1999 Constitution?", "Chapter IV", "Chapter II", "Chapter VI", "Chapter IX", "Chapter IV lists them."],
          ["M", "Who was Nigeria's first President?", "Nnamdi Azikiwe", "Tafawa Balewa", "Obafemi Awolowo", "Yakubu Gowon", "He became President in 1963."],
          ["M", "The horses on the coat of arms represent", "dignity", "agriculture", "rivers", "peace", "They symbolise dignity."],
          ["H", "Which is an obstacle to national unity?", "religious intolerance", "inter-ethnic marriage", "unity schools", "national sports", "Intolerance divides people."],
          ["H", "Citizenship obtained by a foreigner after living in Nigeria for the required period is by", "naturalisation", "birth", "registration by marriage", "election", "Naturalisation is granted on application."],
          ["H", "INEC stands for", "Independent National Electoral Commission", "Internal National Election Council", "Independent Nigerian Education Committee", "Inter-State National Electoral Court", "INEC conducts elections in Nigeria."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: social problems",
        subtopics: ["Drug abuse and drug trafficking", "Human trafficking and child abuse", "Corruption, examination malpractice and cultism", "HIV/AIDS and harmful traditional practices"],
        objectives: ["Recall causes and effects of major social problems", "Identify agencies that fight social problems", "Suggest solutions to social problems", "Answer BECE-style questions on social issues"],
        lesson: {
          title: "BECE Revision: Social Problems",
          summary: "Revise social problems, their effects and the agencies that fight them.",
          minutes: 45,
          notes: `## Social problems and agencies
| Problem | Key facts | Agency / law |
|---|---|---|
| drug abuse and trafficking | illegal drugs; addiction; bad image | **NDLEA** (1989) |
| human trafficking | deception, exploitation | **NAPTIP** (2003) |
| child abuse and child labour | a child is under 18 | **Child Rights Act** (2003) |
| corruption | bribery, embezzlement, nepotism | **EFCC** (2003), **ICPC** (2000) |
| examination malpractice | impersonation, leakage | **Examination Malpractices Act** (1999) |
| cultism | secret, violent societies | illegal; school rules and police |
| HIV/AIDS | attacks immune system; not spread by handshakes | ART treatment; prevention |
| harmful traditional practices | FGM, early marriage, harmful widowhood rites | **VAPP Act** (2015) |
| road accidents | over-speeding, drunk driving | **FRSC** (1988) |

## Common causes
poverty, unemployment, greed, peer pressure, poor parenting, weak law enforcement, ignorance.

## Common solutions
education and awareness, job creation, good parenting, strict enforcement of laws, value reorientation, counselling and rehabilitation, reporting to authorities.`,
          examples: `**Example 1.** *The agency that fights human trafficking is:* **NAPTIP**.

**Example 2.** *HIV cannot be transmitted by:* **shaking hands**.

**Example 3.** *Writing an examination for another person is:* **impersonation**.`,
        },
        questions: [
          ["E", "The agency that fights human trafficking is", "NAPTIP", "NDLEA", "INEC", "NCC", "It prohibits trafficking in persons."],
          ["E", "HIV cannot be transmitted by", "shaking hands", "sharing needles", "unscreened blood", "unprotected sex with an infected person", "Casual contact is safe."],
          ["E", "The agency that fights illegal drugs is", "NDLEA", "NAPTIP", "FRSC", "NEMA", "It enforces drug laws."],
          ["M", "Writing an examination on behalf of another person is", "impersonation", "collusion", "revision", "invigilation", "One person pretends to be another."],
          ["M", "The EFCC was established to fight", "economic and financial crimes", "road accidents", "drug abuse only", "flooding", "It tackles fraud and corruption."],
          ["M", "The law that sets 18 as the age of a child in Nigeria is the", "Child Rights Act", "Land Use Act", "Electoral Act", "Marriage Act", "It was passed in 2003."],
          ["M", "Which is a common cause of many social problems?", "poverty and unemployment", "good parenting", "strong laws", "education", "Hardship pushes people to crime."],
          ["H", "The law that prohibits FGM and harmful widowhood practices is the", "Violence Against Persons (Prohibition) Act", "Examination Malpractices Act", "Child Rights Act only", "Land Use Act", "It was passed in 2015."],
          ["H", "Favouring relatives in appointments regardless of merit is", "nepotism", "federal character", "integrity", "meritocracy", "It is a form of corruption."],
          ["H", "Which is a long-term solution to many social problems?", "education and job creation", "ignoring the problems", "weakening laws", "encouraging peer pressure", "Opportunities and awareness reduce vices."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: economy, environment and international relations",
        subtopics: ["Economic activities, money and trade", "Resources, environment and disasters", "Population and migration", "Nigeria and international organisations"],
        objectives: ["Recall key facts on economic activities, money and trade", "Revise resources, environmental problems and disasters", "Revise population, migration and international cooperation", "Answer BECE-style questions on these areas"],
        lesson: {
          title: "BECE Revision: Economy and the Wider World",
          summary: "Revise economy, environment, population and international relations for the BECE.",
          minutes: 45,
          notes: `## Economy
- Occupations: **primary** (farming, mining), **secondary** (manufacturing), **tertiary** (services, trade).
- Barter's problem: **double coincidence of wants**.
- Money: medium of exchange, measure of value, store of value, standard of deferred payment. Naira introduced **1973**; issued by the **CBN**.
- Trade: home (wholesale, retail) and foreign (imports, exports). Main export: **crude oil**.
- Savings = income − spending; beware of **Ponzi schemes**.

## Resources and environment
- Renewable (forests, water, sun) vs non-renewable (oil, coal, tin).
- Problems: gully erosion (south-east), desertification (far north), flooding, deforestation, oil pollution (Niger Delta).
- Disasters: natural (floods, drought) and man-made (fires, collapses). Agency **NEMA**; emergency number **112**.

## Population and migration
- Census by the **NPC**; last completed national census **2006**.
- Push factors (unemployment) and pull factors (jobs, amenities).
- Urbanisation causes slums, congestion and pressure on amenities.

## International relations
- **ECOWAS**: 1975, Abuja; ECOMOG peace-keeping.
- **AU**: 2002 (OAU 1963), Addis Ababa.
- **UN**: 1945, New York; Nigeria joined 1960; agencies UNICEF, WHO, UNESCO, FAO.
- **Commonwealth**: mainly former British colonies.`,
          examples: `**Example 1.** *ECOWAS was formed in:* **1975**.

**Example 2.** *Which occupation is tertiary: fishing, baking, banking, mining?* *Answer:* **banking**.

**Example 3.** *Gully erosion is most severe in:* **south-eastern Nigeria**.`,
        },
        questions: [
          ["E", "Which occupation is tertiary?", "banking", "fishing", "mining", "farming", "Banking is a service."],
          ["E", "The UN agency concerned with health is", "WHO", "UNESCO", "FAO", "ILO", "The World Health Organization."],
          ["E", "Crude oil is a", "non-renewable resource", "renewable resource", "human resource", "man-made resource", "It cannot be replaced quickly."],
          ["M", "The treaty that established ECOWAS in 1975 is the", "Treaty of Lagos", "Treaty of Versailles", "Treaty of Rome", "Abuja Accord", "It was signed in Lagos."],
          ["M", "Which state is most affected by gully erosion?", "Anambra", "Sokoto", "Borno", "Kebbi", "The south-east has loose soils and heavy rain."],
          ["M", "Money solved the barter problem of", "needing a double coincidence of wants", "high taxes", "poor roads", "too many banks", "Money is accepted by everyone."],
          ["M", "Better jobs and amenities in cities are", "pull factors", "push factors", "disasters", "taxes", "They attract migrants."],
          ["H", "The African Union replaced the OAU, which was formed in", "1963", "1975", "2002", "1945", "The OAU was founded in 1963."],
          ["H", "A trader who earns ₦80,000 and spends ₦65,000 saves", "₦15,000", "₦145,000", "₦65,000", "₦80,000", "₦80,000 − ₦65,000 = ₦15,000."],
          ["H", "Which body conducts the national census in Nigeria?", "National Population Commission", "INEC", "NEMA", "CBN", "The NPC counts the population."],
        ],
      },
    ],
  },
];
