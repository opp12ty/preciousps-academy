import type { TermPlan } from "../types";

/** SS3 History — Nigeria since 1960, Africa and the wider world, with WAEC revision. Original Precious PS content. */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Politics in the First Republic: an analysis",
        subtopics: ["The structure of politics", "Federal–regional relations", "The crises analysed", "Interpretations of the collapse"],
        objectives: ["Analyse the structure of politics in the First Republic", "Explain the tensions in federal–regional relations", "Analyse the major crises and their connections", "Evaluate different explanations of the collapse"],
        lesson: {
          title: "Why the First Republic Fell",
          summary: "Analyse the politics and collapse of Nigeria's First Republic.",
          minutes: 40,
          notes: `## The structure of politics
- a **parliamentary federation** of three (from 1963, four) regions
- a **coalition** at the centre: the conservative **NPC** with the **NCNC**; the **Action Group** in opposition
- each major party governed its **home region** and used regional resources — marketing-board funds, development corporations, the Native Authority police and courts in the North — to entrench itself
- **opposition** parties in each region were harassed: NEPU and the UMBC in the North; the AG in the East; the NCNC in the West
- politics was about **control of the state**, the main source of jobs, contracts and wealth

## Federal–regional relations
- the regions were **constitutionally strong** and financially secure; premiers were more powerful than federal ministers — the leader of the largest party remained Premier of the North
- yet the centre controlled **defence, the police, external affairs and emergency powers**, and the growing **oil** revenue
- the size of the **North** gave the NPC a built-in advantage in the House of Representatives
- southern parties sought either to **break up** the North (states for the Middle Belt) or to win a share of federal power

## The crises and their connections
1. **The Action Group crisis (1962)**: ideological and personal differences — **Awolowo** (democratic socialism; opposition at the centre; expansion into other regions) against **Akintola** (cooperation with the NPC) — gave the federal coalition the chance to destroy its opponent: emergency rule, the **Coker Commission** into the finances of Western Region corporations, the **treason trial**, and the carving out of the **Mid-West**.
2. **The census (1962–63)**: showed that the regional balance — and so federal power — could be decided by head-count; it broke the NPC–NCNC coalition.
3. **The 1964 general strike** revealed popular discontent over wages and inequality.
4. **The 1964 federal election**: new alliances — **NNA** (NPC, Akintola's NNDP) against **UPGA** (NCNC, AG, NEPU, UMBC). Obstruction of nominations led to the UPGA **boycott**; a constitutional deadlock between **President Azikiwe** and **Prime Minister Balewa** was settled by the "**Zik–Balewa pact**".
5. **The Western election (October 1965)**: the NNDP was declared winner amid blatant fraud; the region slid into violence. The federal government refused to declare an emergency against its ally.
6. **The Tiv risings (1960, 1964)**: revolt against NPC rule through the Native Authority; the army was sent in.
Each crisis **weakened faith** in constitutional means and drew the **army** into politics.

## Interpretations
- **ethnic/regional**: the federation was a contest among three nationalities; the structure made conflict inevitable
- **institutional**: an unbalanced federation and a Westminster model unsuited to a divided society
- **class/elite**: politicians of all regions formed a class competing for state resources; ethnicity was their instrument (the view of radical scholars)
- **leadership**: intolerance, corruption and the refusal to accept defeat
- **colonial legacy**: separate development, regional constitutions, uneven education
Most historians combine these: **structural weaknesses** were turned into breakdown by **the conduct of the political class**.

## The other side
The period also saw free newspapers, vigorous parliamentary debate, an independent judiciary in several notable cases, new universities and development plans — the collapse was not inevitable.

## Lessons
balanced federal structure; credible elections and census; tolerance of opposition; separation of party and state.`,
          examples: `**Example 1.** What were the two alliances in the 1964 election? *Answer:* The **NNA** and the **UPGA**.

**Example 2.** What did the Coker Commission investigate? *Answer:* The **finances of Western Region statutory corporations**.

**Example 3.** Give two explanations for the fall of the First Republic. *Answer:* An **unbalanced federal structure** and the **misconduct of the political class**.`,
        },
        questions: [
          ["E", "The alliance formed by the NCNC and the Action Group for the 1964 election was the", "UPGA", "NNA", "NEPU", "UMBC", "It boycotted the election."],
          ["E", "The inquiry into Western Region corporations in 1962 was the", "Coker Commission", "Willink Commission", "Raisman Commission", "Adebo Commission", "It examined the use of public funds."],
          ["E", "The party led by Akintola from 1964 was the", "NNDP", "AG", "NCNC", "NEPU", "It allied with the NPC."],
          ["M", "The NNA was an alliance of the NPC and", "Akintola's NNDP", "the Action Group", "NEPU", "the UMBC", "It won the boycotted 1964 election."],
          ["M", "The compromise that ended the 1964–65 constitutional deadlock is known as the", "Zik–Balewa pact", "Aburi accord", "Lancaster House agreement", "Lagos Plan", "A broad-based government was formed."],
          ["M", "Risings against NPC rule occurred in 1960 and 1964 in", "Tivland", "Borno", "Kano city", "Sokoto", "The army was sent to restore order."],
          ["M", "Awolowo's quarrel with Akintola was partly about whether the Action Group should", "cooperate with the NPC-led federal government", "leave the federation", "abolish free education", "merge with NEPU", "Akintola favoured cooperation."],
          ["H", "The 'class' interpretation of the First Republic's collapse holds that", "politicians of all regions competed for state resources and used ethnicity as a tool", "ethnic groups naturally hate one another", "the constitution was perfect", "foreign powers caused the crises", "It stresses the interests of the elite."],
          ["H", "The federal government's different responses to the Western crises of 1962 and 1965 suggest that", "emergency powers were used for party advantage", "the constitution forbade action in 1965", "the West was peaceful in 1965", "the army was unavailable", "It acted against an opponent but not against an ally."],
          ["H", "The census crisis was politically explosive because", "population figures determined each region's share of federal seats", "people were taxed by the census", "it was run by the army", "it abolished the regions", "Control of the centre was at stake."],
        ],
      },
      {
        week: 2,
        title: "Military rule in Nigeria: an assessment",
        subtopics: ["Causes of military intervention", "Features of military government", "Achievements", "Failures and the case against military rule"],
        objectives: ["Explain the causes of military intervention in Nigerian politics", "Describe the features of military government", "Assess the achievements of military regimes", "Assess the failures of military rule"],
        lesson: {
          title: "Soldiers in Power",
          summary: "Evaluate the record of military rule in Nigeria, 1966–1999.",
          minutes: 40,
          notes: `## The record
The military ruled Nigeria for about **twenty-nine** of the years between 1966 and 1999: Ironsi, Gowon, Murtala Mohammed, Obasanjo, Buhari, Babangida, Abacha and Abubakar. There were successful coups in **January 1966, July 1966, 1975, 1983, 1985 and 1993**, and failed attempts in 1976 (Dimka), 1986 (Vatsa, alleged) and 1990 (Orkar).

## Causes of intervention
- **failures of civilian governments**: rigged elections, corruption, violence, economic mismanagement
- **politicisation of the army**: its use in internal security; recruitment and promotion on regional lines
- **personal and group ambition** within the officer corps; once the first coup succeeded, coups bred counter-coups
- **weak civil institutions** unable to resist
- **contagion** from coups elsewhere in Africa
- economic crisis (1983)

## Features of military government
- **suspension** of parts of the constitution; rule by **decree** (edicts in the states); **ouster clauses** preventing courts from questioning decrees
- a supreme body: the **Supreme Military Council**, later the **Armed Forces Ruling Council** / Provisional Ruling Council
- **military governors** (administrators) in the states, appointed by and answerable to the Head of State
- ban on **political parties** and legislatures
- **centralised**, unified command — federalism in name only
- reliance on **civil servants** and appointed civilian commissioners
- special **tribunals**; detention without trial

## Achievements
- kept Nigeria **united** — the civil war and reconstruction
- **state creation**: 12 (1967), 19 (1976), 21 (1987), 30 (1991), 36 (1996) — easing minority fears
- **infrastructure** in the oil-boom years: highways, bridges, refineries, ports, airports, universities; **Abuja**
- national institutions: **NYSC**, unity schools, federal character, a uniform local government system (1976)
- **indigenisation** of the economy
- an assertive **foreign policy**: ECOWAS, support for liberation in southern Africa, ECOMOG
- handed power to civilians in **1979** and **1999**

## Failures
- **no legitimacy**: government without the consent of the governed
- **human-rights abuses**: detention, press closures, executions, the annulment of **June 12**
- **corruption** on a greater scale than under civilians; unaccountable spending of oil revenue
- **over-centralisation**: the states became dependent on federal allocations; the 1978 Land Use Decree and control of mineral revenue
- neglect of **agriculture**; dependence on oil; debt and the hardships of SAP
- repeated, costly and insincere **transition programmes**
- damage to the **army** itself: loss of professionalism, purges, coups
- a culture of command and impunity in public life
- weakened universities, judiciary and civil service

## The balance
Military regimes claimed to be **corrective**. Some (Murtala–Obasanjo) carried out reforms and left on schedule; others entrenched themselves. Overall, military rule **did not solve** the problems that provoked it — ethnicity, corruption, electoral fraud — and added new ones. The consensus since 1999 is that the remedy for bad civilian government is **better democracy**, not soldiers.

## Safeguards against coups
good governance; professional, well-paid and apolitical armed forces; civilian control; strong institutions; constitutional provisions outlawing unconstitutional seizure of power; regional norms (ECOWAS and AU protocols).`,
          examples: `**Example 1.** Give two features of military government. *Answer:* **Rule by decree** and a **ban on political parties**.

**Example 2.** Give two achievements of military rule. *Answer:* **Preserving national unity** and **creating states**.

**Example 3.** Give two failures. *Answer:* **Human-rights abuses** and **large-scale corruption**.`,
        },
        questions: [
          ["E", "Military governments in Nigeria made laws by", "decree", "act of parliament", "referendum", "by-law", "State military governors issued edicts."],
          ["E", "The highest ruling body under Gowon and Murtala Mohammed was the", "Supreme Military Council", "National Assembly", "Federal Executive Council", "Council of State", "Later regimes used other names."],
          ["E", "The abortive coup of April 1990 was led by", "Gideon Orkar", "Buka Suka Dimka", "Mamman Vatsa", "Chukwuma Nzeogwu", "It was directed against Babangida."],
          ["M", "A clause in a decree that prevents the courts from questioning it is called", "an ouster clause", "a derivation clause", "a federal character clause", "an entrenched clause", "It removed judicial review."],
          ["M", "Under Babangida the supreme ruling body was the", "Armed Forces Ruling Council", "Supreme Military Council", "Provisional Ruling Council", "National Security Council", "Abacha's was the Provisional Ruling Council."],
          ["M", "Which of these was NOT a year of a successful military coup in Nigeria?", "1979", "1966", "1975", "1983", "In 1979 the military handed over to civilians."],
          ["M", "The uniform system of local government as a third tier was introduced in", "1976", "1966", "1989", "1999", "It was part of the Obasanjo regime's reforms."],
          ["H", "The description of Nigerian federalism under the military as 'federalism in name only' refers to", "the unified command and central appointment of state governors", "the creation of states", "the existence of local governments", "the use of civil servants", "Power flowed from the centre."],
          ["H", "The strongest argument against military rule is that it", "lacks the consent of the governed and failed to solve the problems that provoked it", "built roads and bridges", "created states", "ended the civil war", "It also added new problems of its own."],
          ["H", "The fact that coups bred counter-coups after January 1966 suggests that", "military intervention destroyed discipline and the chain of command", "the army became more united", "civilians organised the coups", "coups were always bloodless", "Force became the accepted route to power."],
        ],
      },
      {
        week: 3,
        title: "The civil war: international dimensions and reconstruction",
        subtopics: ["The road to war re-examined", "The international dimension", "Humanitarian issues", "Reconciliation and reconstruction assessed"],
        objectives: ["Re-examine the causes of the civil war", "Analyse the role of foreign powers and African states", "Explain the humanitarian issues raised by the war", "Assess post-war reconciliation and reconstruction"],
        lesson: {
          title: "War and Its Aftermath",
          summary: "Analyse the international aspects of the Nigerian Civil War and the post-war settlement.",
          minutes: 40,
          notes: `## The road to war
- structural causes: an unbalanced federation; regional parties; unequal development
- the **1966 coups** and killings shattered trust within the army
- the **pogroms** of 1966 convinced many easterners that they were not safe in Nigeria
- **Aburi (January 1967)**: the East read the accord as agreement on a loose association with regional vetoes; federal civil servants advised that it would end the federation; **Decree No. 8** implemented it only in part
- the East seized federal revenues (April 1967); Lagos imposed sanctions
- the **twelve-state** decree (27 May) and **secession** (30 May)
- **oil**: most known reserves lay in the East's minority areas — a prize neither side could surrender

## The federal and Biafran cases
- federal: preservation of **unity**; secession would lead to disintegration; the minorities must not be forced into Biafra
- Biafran: **self-determination** and **survival** after the massacres; later set out in the **Ahiara Declaration (1969)**

## The international dimension
### Supporters of the federal government
- **Britain**: the former colonial power, with large oil investments; supplied arms
- the **Soviet Union**: supplied aircraft and heavy weapons — gaining influence in a country previously close to the West
- **Egypt** provided pilots; most **Arab** and African states
- the **OAU**: upheld the principle of the **territorial integrity** of member states and non-interference
### Supporters of Biafra
- **France**: covert arms through Gabon and Côte d'Ivoire — interested in weakening a large English-speaking state and in oil
- **Portugal** (staging posts), **South Africa** and **Rhodesia** (hoping to weaken a leading opponent of white rule)
- **recognition** by **Tanzania, Gabon, Côte d'Ivoire, Zambia** and **Haiti** — mainly on humanitarian grounds
- **Israel** gave some help; **China** gave verbal support
### The United States
officially neutral — an arms embargo, but large humanitarian aid.
### Peace efforts
- OAU Consultative Committee: **Kinshasa (1967)**, **Niamey**, **Addis Ababa (1968)**, **Monrovia (1969)**
- the **Commonwealth** talks at **Kampala (1968)**
All failed over the issue of sovereignty.

## Humanitarian issues
- the **blockade** and the loss of food-producing areas caused mass starvation; **kwashiorkor** killed great numbers of children
- relief by the **International Committee of the Red Cross**, **Caritas** and the **World Council of Churches** (Joint Church Aid) through night flights to **Uli**
- dispute over **relief corridors**: each side feared military misuse
- Biafra's effective **publicity** (through a public-relations firm) made the war one of the first televised famines; the charge of **genocide** was examined by an international **observer team**, which did not uphold it
- the aid agency **Médecins Sans Frontières** was founded (1971) by doctors who had served in Biafra

## Reconciliation and reconstruction
### Successes
- **no victor, no vanquished**; no trials or medals; general amnesty
- rapid reintegration of Igbo into national life compared with other civil wars
- rebuilding financed by oil revenue
### Shortcomings
- the **twenty-pound** policy: holders of Biafran currency and frozen bank accounts received a flat £20
- the **abandoned property** issue, especially in Port Harcourt
- the **indigenisation** of 1972 came when easterners had little capital
- few senior military and security posts for decades; a lasting sense of **marginalisation**

## Legacies
strong centre; large army; federal control of oil; state creation; a continuing debate about the national question — and a firm resolve against another war.`,
          examples: `**Example 1.** Which great powers armed the federal side? *Answer:* **Britain and the Soviet Union**.

**Example 2.** Which African states recognised Biafra? *Answer:* **Tanzania, Gabon, Côte d'Ivoire and Zambia**.

**Example 3.** What was the twenty-pound policy? *Answer:* A **flat payment of £20** to holders of Biafran currency or frozen accounts after the war.`,
        },
        questions: [
          ["E", "The Biafran statement of principles issued in 1969 was the", "Ahiara Declaration", "Aburi Accord", "Lagos Plan of Action", "Atlantic Charter", "It set out the aims of the Biafran revolution."],
          ["E", "The European power that covertly supplied arms to Biafra was", "France", "Britain", "the Soviet Union", "Italy", "It worked through Gabon and Côte d'Ivoire."],
          ["E", "Relief flights into Biafra landed at night at", "Uli", "Enugu", "Port Harcourt", "Calabar", "A stretch of road served as the airstrip."],
          ["M", "The OAU supported the federal side on the principle of", "territorial integrity of member states", "self-determination of peoples", "free trade", "non-alignment", "It feared secession elsewhere in Africa."],
          ["M", "The first African country to recognise Biafra was", "Tanzania", "Ghana", "Egypt", "Ethiopia", "It did so in 1968 on humanitarian grounds."],
          ["M", "The decree that partly implemented the Aburi agreement was", "Decree No. 8", "Decree No. 34", "Decree No. 4", "Decree No. 2", "The East considered it inadequate."],
          ["M", "The disease that killed many Biafran children was", "kwashiorkor", "smallpox", "cholera", "sleeping sickness", "It results from severe protein deficiency."],
          ["H", "The Soviet Union's support for the federal government was significant because it", "gave Moscow influence in a country previously aligned with the West", "led to a Soviet base in Lagos", "made Nigeria communist", "ended British trade", "It showed the Cold War dimension of the conflict."],
          ["H", "The peace talks sponsored by the OAU and the Commonwealth failed mainly because", "neither side would compromise on the question of Biafran sovereignty", "the venues were unsuitable", "the great powers forbade them", "relief agencies opposed them", "Unity and secession could not be reconciled."],
          ["H", "The post-war settlement is criticised chiefly for", "economic measures such as the twenty-pound policy that left easterners disadvantaged", "mass trials of Biafran leaders", "refusing any amnesty", "expelling the Igbo", "Reintegration was otherwise comparatively swift."],
        ],
      },
      {
        week: 4,
        title: "Nigeria's foreign policy since 1960",
        subtopics: ["Principles and objectives", "Foreign policy under successive governments", "Nigeria in Africa", "Nigeria and the wider world"],
        objectives: ["State the principles and objectives of Nigeria's foreign policy", "Compare foreign policy under successive governments", "Assess Nigeria's role in Africa", "Describe Nigeria's relations with the wider world"],
        lesson: {
          title: "Africa as the Centrepiece",
          summary: "Analyse the principles and conduct of Nigeria's foreign policy.",
          minutes: 40,
          notes: `## Principles
Stated by **Tafawa Balewa** in 1960 and since embodied in the constitution:
1. protection of the **national interest**, sovereignty and territorial integrity
2. **Africa as the centrepiece**
3. **non-alignment** in the Cold War
4. **sovereign equality** of states and non-interference in their internal affairs
5. peaceful settlement of disputes
6. support for **decolonisation** and opposition to racism
7. **multilateralism** — active membership of the UN, the Commonwealth, the OAU/AU, ECOWAS, OPEC
8. promotion of African unity and economic cooperation

## Under successive governments
- **Balewa (1960–66)**: cautious, pro-Western; yet broke relations with **France (1961)** over atomic tests in the Sahara; abrogated the **Anglo-Nigerian Defence Pact (1962)**; opposed Nkrumah's call for immediate continental union — led the **Monrovia group**; sent troops to the **Congo**; helped found the **OAU (1963)**
- **Gowon (1966–75)**: civil-war diplomacy; relations with the **Soviet Union**; reconciliation with states that had recognised Biafra; spearheaded **ECOWAS (1975)**; oil gave new confidence
- **Murtala Mohammed / Obasanjo (1975–79)**: the most dynamic period — recognition of the **MPLA** in **Angola**; Murtala's "**Africa has come of age**" speech at the OAU (January 1976); support for **Zimbabwe** and the liberation movements; nationalisation of **BP** (1979); the **Southern Africa Relief Fund**
- **Shagari (1979–83)**: low-key; expulsion of illegal aliens strained ECOWAS relations; clash with Chad
- **Buhari (1984–85)**: border closure; second expulsion; the **Dikko affair** with Britain
- **Babangida (1985–93)**: **economic diplomacy**; the **Technical Aid Corps (1987)**; **ECOMOG** in Liberia (1990); the idea of a "Concert of Medium Powers"; OIC membership controversy
- **Abacha (1993–98)**: isolation — Commonwealth suspension, sanctions; yet restored the elected government of **Sierra Leone (1998)**
- **Since 1999**: re-engagement; **debt relief**; role in creating the **AU** and **NEPAD**; peacekeeping (Darfur); the **Bakassi** settlement; "**citizen diplomacy**"; leadership in ECOWAS responses to coups (e.g. The Gambia, 2017)

## Nigeria in Africa
- **decolonisation and anti-apartheid**: chaired the **UN Special Committee against Apartheid** for many years; regarded as a "**frontline state**" though far from southern Africa; boycotted the 1976 Olympics and 1978 Commonwealth Games
- **peacekeeping**: Congo (1960), Chad (1979–82), Liberia, Sierra Leone, Sudan, Mali — among the largest African contributors
- **economic integration**: ECOWAS; the Lagos Plan of Action (1980)
- **aid**: the Technical Aid Corps; grants; concessionary oil
- **good neighbourliness**: generally peaceful borders; the **Bakassi** dispute with Cameroon was settled by the **International Court of Justice (2002)** and the **Green Tree Agreement (2006)**; hand-over in 2008

## The wider world
- **Britain**: close but sometimes tense (Rhodesia, the Dikko affair, 1995 suspension)
- the **United States**: major oil customer for decades; security cooperation
- the **Soviet Union/Russia**: arms and the Ajaokuta steel project
- **China**: now a leading trade and infrastructure partner
- **OPEC** (member since 1971); the **Non-Aligned Movement**
- the quest for a **permanent seat** on the UN Security Council

## Determinants of foreign policy
size and population; oil wealth and its fluctuations; the type of regime; domestic stability; leadership; the colonial legacy; world events.

## Assessment
**Successes:** liberation of southern Africa; regional peacekeeping; prestige. **Criticisms:** costly generosity with little return to citizens; inconsistency; the gap between ambition and domestic weakness.`,
          examples: `**Example 1.** What is the centrepiece of Nigeria's foreign policy? *Answer:* **Africa**.

**Example 2.** Which speech marked Nigeria's assertive policy in 1976? *Answer:* Murtala Mohammed's "**Africa has come of age**".

**Example 3.** How was the Bakassi dispute settled? *Answer:* By the **ICJ judgment (2002)** and the **Green Tree Agreement (2006)**.`,
        },
        questions: [
          ["E", "The cornerstone of Nigeria's foreign policy is described as", "Africa as the centrepiece", "alliance with the West", "isolation", "continental conquest", "It has guided policy since 1960."],
          ["E", "The Technical Aid Corps scheme was established in", "1987", "1960", "1975", "1999", "It sends Nigerian professionals to other developing countries."],
          ["E", "The dispute over Bakassi was between Nigeria and", "Cameroon", "Benin Republic", "Chad", "Niger", "The International Court of Justice ruled in 2002."],
          ["M", "Nigeria broke diplomatic relations with France in 1961 because of", "atomic tests in the Sahara", "the recognition of Biafra", "the Bakassi dispute", "a trade embargo", "It was an early independent stand."],
          ["M", "The speech 'Africa has come of age' was delivered by", "Murtala Mohammed", "Tafawa Balewa", "Yakubu Gowon", "Shehu Shagari", "He spoke at the OAU in January 1976."],
          ["M", "The agreement of 2006 under which Nigeria handed over Bakassi is the", "Green Tree Agreement", "Aburi Accord", "Lomé Convention", "Lancaster House Agreement", "The hand-over was completed in 2008."],
          ["M", "In the Angolan conflict of 1975, Nigeria recognised the", "MPLA", "UNITA", "FNLA", "FRELIMO", "South African intervention influenced the decision."],
          ["H", "Nigeria was regarded as a 'frontline state' in the struggle against apartheid because", "of the scale of its diplomatic and material support despite its distance", "it bordered South Africa", "it hosted apartheid leaders", "it traded heavily with South Africa", "It chaired the UN committee against apartheid."],
          ["H", "The contrast between foreign policy under Balewa and under Murtala Mohammed is best described as", "cautious and pro-Western versus assertive and Africa-focused", "isolationist versus expansionist", "communist versus capitalist", "identical in every respect", "Oil wealth and regime type made a difference."],
          ["H", "A common criticism of Nigeria's Africa policy is that", "its costly commitments have brought little direct benefit to its citizens", "it ignored Africa", "it supported apartheid", "it refused all peacekeeping", "Ambition has outrun domestic capacity."],
        ],
      },
      {
        week: 5,
        title: "Economic development in Nigeria since 1960",
        subtopics: ["Development plans", "Oil and its consequences", "Structural adjustment and reform", "Problems and prospects"],
        objectives: ["Describe Nigeria's national development plans", "Explain the rise of oil and its effects on the economy", "Explain the Structural Adjustment Programme and later reforms", "Identify the problems and prospects of the economy"],
        lesson: {
          title: "From Groundnuts to Petroleum",
          summary: "Analyse the course of Nigeria's economic development since independence.",
          minutes: 40,
          notes: `## The economy at independence
Agriculture provided most of the output, employment and exports (cocoa, groundnuts, palm produce, cotton, rubber). Industry was small. The regions financed development from **Marketing Board** surpluses.

## Development plans
| Plan | Features |
|---|---|
| **First (1962–68)** | Kainji Dam, Niger Bridge, Port Harcourt refinery; relied heavily on foreign finance; interrupted by the crises and war |
| **Second (1970–74)** | reconstruction; "a united, strong and self-reliant nation; a just and egalitarian society; a land of bright and full opportunities"; indigenisation |
| **Third (1975–80)** | the oil-boom plan — very ambitious: steel, refineries, highways, UPE |
| **Fourth (1981–85)** | disrupted by the fall in oil prices |
Later: three-year **rolling plans** (from 1990), **Vision 2010**, **NEEDS (2004)**, **Vision 20:2020**, and medium-term national development plans.

## Oil
- discovered in commercial quantity at **Oloibiri** (in present Bayelsa State) in **1956** by Shell-BP; first export **1958**
- after the civil war and the **1973–74** price rise, oil came to supply about **90 per cent of export earnings** and most government revenue
- **OPEC** membership (1971); the **NNOC (1971)** → **NNPC (1977)**; joint ventures with the oil companies

### Consequences
**Positive:** large revenues; infrastructure; expansion of education and the public sector.
**Negative:**
- the **neglect of agriculture** — Nigeria became a food importer; rural–urban drift ("**Dutch disease**")
- a **mono-product** economy exposed to price swings
- waste, inflated contracts and **corruption**
- centralisation of revenue in the federal government; struggles over **revenue allocation** and **derivation**
- environmental damage and unrest in the **Niger Delta** — oil spills, gas flaring; the **Ogoni** struggle; militancy; the **NDDC (2000)** and the 13 per cent derivation
- dependence on imported refined fuel and the subsidy problem

## Indigenisation
The **Nigerian Enterprises Promotion Decrees (1972, 1977)** reserved some businesses for Nigerians and required Nigerian shares in others. It increased Nigerian ownership but benefited mainly a small, well-connected group.

## Agriculture programmes
**National Accelerated Food Production Programme (1972)**, **Operation Feed the Nation (1976)**, **River Basin Authorities**, the **Green Revolution (1980)**, **DFRRI (1986)** — with limited results.

## Crisis and adjustment
- the **oil glut (1981–)**: revenue collapsed; debts mounted; austerity (1982)
- **Structural Adjustment Programme (1986)**: devaluation through a foreign-exchange market; removal of subsidies; trade liberalisation; **privatisation and commercialisation** (TCPC, 1988); abolition of the commodity boards
- **effects**: some revival of export crops and local sourcing; but inflation, factory closures, unemployment, a fall in real wages, cuts in education and health, "**brain drain**" and the **anti-SAP riots (1989)**

## Reforms since 1999
privatisation through the **Bureau of Public Enterprises**; **telecommunications** liberalisation (GSM, 2001); **bank consolidation (2004–05)**; **Paris Club debt relief (2005–06)**; the **Excess Crude Account** and sovereign wealth fund; anti-corruption agencies; power-sector privatisation (2013); **rebasing** of GDP (2014) showed Nigeria as Africa's largest economy; efforts at **diversification** into agriculture, solid minerals, services and the creative industries; a large private refinery (commissioned 2023); removal of the fuel subsidy (2023).

## Persistent problems
poverty and inequality; **unemployment**, especially of youth; weak **power** supply and infrastructure; dependence on oil; inflation and exchange-rate instability; corruption; insecurity; rapid population growth.

## Prospects
a large market and young population; entrepreneurial energy; resources in agriculture, gas and minerals; technology and remittances — provided governance, security and infrastructure improve.`,
          examples: `**Example 1.** Where and when was oil found in commercial quantity? *Answer:* **Oloibiri, 1956**.

**Example 2.** What did SAP involve? *Answer:* **Devaluation, removal of subsidies, liberalisation and privatisation**.

**Example 3.** Give one negative effect of the oil boom. *Answer:* The **neglect of agriculture**.`,
        },
        questions: [
          ["E", "Oil was first discovered in commercial quantity in Nigeria at", "Oloibiri", "Warri", "Bonny", "Eket", "It was in 1956."],
          ["E", "The national oil company formed in 1977 is the", "NNPC", "NDDC", "NEPA", "NPA", "It replaced the NNOC."],
          ["E", "The First National Development Plan covered", "1962–68", "1970–74", "1975–80", "1981–85", "It included the Kainji Dam."],
          ["M", "The decrees of 1972 and 1977 that increased Nigerian ownership of businesses are called the", "indigenisation decrees", "privatisation decrees", "land use decrees", "austerity decrees", "They were the Nigerian Enterprises Promotion Decrees."],
          ["M", "The body set up in 2000 to develop the oil-producing areas is the", "NDDC", "NNPC", "EFCC", "DFRRI", "It followed agitation in the Niger Delta."],
          ["M", "The relief by which about 18 billion dollars of Nigeria's debt was cancelled in 2005–06 came from the", "Paris Club", "London Club", "World Trade Organisation", "African Development Bank", "It was negotiated under Obasanjo."],
          ["M", "The commodity marketing boards were abolished under", "the Structural Adjustment Programme", "the Second National Development Plan", "the indigenisation policy", "the Green Revolution", "Farmers could then sell freely."],
          ["H", "The term 'Dutch disease' applied to Nigeria refers to", "the decline of agriculture and manufacturing as oil revenue grew", "a tropical illness", "the import of Dutch goods", "the collapse of oil prices", "A booming resource sector crowded out others."],
          ["H", "A major criticism of the indigenisation policy is that it", "enriched a small well-connected group rather than spreading ownership widely", "drove out all foreign firms", "reduced Nigerian ownership", "was never implemented", "Few Nigerians had the capital to buy shares."],
          ["H", "The social cost of SAP was seen most clearly in", "falling real wages, unemployment and cuts in social services", "a rise in government jobs", "cheaper imports", "a stronger naira", "Protests followed in 1989."],
        ],
      },
    ],
  },
  {
    classCode: "SS3",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Apartheid in South Africa and its end",
        subtopics: ["Origins and meaning of apartheid", "The apartheid laws", "Resistance", "The end of apartheid"],
        objectives: ["Explain the origins and meaning of apartheid", "Identify the main apartheid laws", "Describe internal and international resistance", "Explain how apartheid ended"],
        lesson: {
          title: "The Struggle for Freedom in South Africa",
          summary: "Analyse the apartheid system, the resistance to it and its collapse.",
          minutes: 40,
          notes: `## Background
- Dutch settlement at the **Cape (1652)**; their descendants, the **Afrikaners (Boers)**; British rule from 1806; the **Great Trek** (1830s); the discovery of **diamonds (1867)** and **gold (1886)**; the **Anglo-Boer War (1899–1902)**
- the **Union of South Africa (1910)** united the white-ruled territories and excluded Africans from power
- segregation laws before 1948: the **Natives Land Act (1913)** reserved about 87 per cent of the land for whites; **pass laws**; the colour bar in jobs

## Apartheid
**Apartheid** (Afrikaans for "**separateness**") was the system of rigid racial separation and white supremacy introduced after the **National Party**, led by **D.F. Malan**, won the **1948** election. Its chief architect was **Hendrik Verwoerd**.

## The laws
- **Population Registration Act (1950)**: everyone classified as White, Coloured, Indian or African
- **Group Areas Act (1950)**: separate residential areas; forced removals
- **Prohibition of Mixed Marriages Act (1949)** and the Immorality Act
- **pass laws**: Africans had to carry a reference book
- **Separate Amenities Act (1953)**: separate — and unequal — buses, beaches, hospitals
- **Bantu Education Act (1953)**: inferior schooling to prepare Africans for menial work
- **Suppression of Communism Act (1950)**: used to ban opponents
- **Bantustans (homelands)**: Africans were made citizens of ten small, poor "homelands" (Transkei, Bophuthatswana and others) and treated as foreigners in "white" South Africa

## Resistance
### Inside the country
- the **African National Congress (ANC)**, founded **1912**; its **Youth League (1944)** — **Nelson Mandela, Walter Sisulu, Oliver Tambo** — pushed for mass action
- the **Defiance Campaign (1952)**; the **Freedom Charter (1955)**: "South Africa belongs to all who live in it"
- the **Pan Africanist Congress (PAC, 1959)** under **Robert Sobukwe**
- **Sharpeville (21 March 1960)**: police killed **69** peaceful anti-pass protesters; the ANC and PAC were **banned**
- turn to armed struggle: **Umkhonto we Sizwe** (1961); the **Rivonia Trial (1963–64)** — Mandela and others sentenced to **life imprisonment** (Robben Island)
- **Black Consciousness**: **Steve Biko**, who died in police custody (1977)
- the **Soweto uprising (16 June 1976)**: schoolchildren protesting against teaching in **Afrikaans** were shot
- the 1980s: the **United Democratic Front**, the trade unions (**COSATU**), church leaders (**Desmond Tutu**), township revolt; states of emergency

### Outside
- the **UN** condemned apartheid; arms embargo (1977)
- **sports and cultural boycotts**; South Africa left the **Commonwealth (1961)**
- **economic sanctions** and disinvestment in the 1980s
- the **OAU Liberation Committee**; the **Frontline States**
- **Nigeria**: funds, scholarships, diplomatic leadership

## The end
- the economy was strained by sanctions, strikes and the cost of repression and war in Angola and Namibia; the end of the **Cold War** removed the claim to be a bulwark against communism
- **President F.W. de Klerk** announced on **2 February 1990** the unbanning of the ANC and other movements; **Mandela was released on 11 February 1990** after 27 years
- negotiations (CODESA) amid violence; apartheid laws repealed
- the first **all-race elections, 27 April 1994**: the ANC won; **Nelson Mandela** became President
- the **Truth and Reconciliation Commission** (chaired by Tutu); Mandela and de Klerk shared the **Nobel Peace Prize (1993)**

## Legacy
political freedom achieved; deep **economic inequality** remains.`,
          examples: `**Example 1.** What does apartheid mean? *Answer:* "**Separateness**" — enforced racial segregation.

**Example 2.** What happened at Sharpeville? *Answer:* Police killed **69 anti-pass protesters** on 21 March 1960.

**Example 3.** When were the first all-race elections held? *Answer:* **27 April 1994**.`,
        },
        questions: [
          ["E", "Apartheid was introduced in South Africa after the election of", "1948", "1910", "1960", "1994", "The National Party came to power."],
          ["E", "The first black President of South Africa was", "Nelson Mandela", "Oliver Tambo", "Desmond Tutu", "Thabo Mbeki", "He took office in 1994."],
          ["E", "The word 'apartheid' means", "separateness", "freedom", "unity", "homeland", "It is an Afrikaans word."],
          ["M", "The massacre of anti-pass protesters in 1960 took place at", "Sharpeville", "Soweto", "Rivonia", "Langa only", "Sixty-nine people were killed."],
          ["M", "The Soweto uprising of 1976 began as a protest against", "the use of Afrikaans in schools", "the pass laws", "the Group Areas Act", "high taxes", "Schoolchildren led it."],
          ["M", "The document of 1955 declaring that South Africa belongs to all who live in it is the", "Freedom Charter", "Atlantic Charter", "Lusaka Manifesto", "Arusha Declaration", "The Congress of the People adopted it."],
          ["M", "The South African President who released Mandela and unbanned the ANC was", "F.W. de Klerk", "P.W. Botha", "Hendrik Verwoerd", "D.F. Malan", "He made the announcement in February 1990."],
          ["H", "The Bantustan policy was designed to", "deny Africans citizenship in South Africa by assigning them to separate 'homelands'", "give Africans equal land", "promote racial integration", "encourage immigration", "It justified white rule over most of the country."],
          ["H", "The ANC turned to armed struggle after 1960 because", "peaceful protest had been met with massacre and the banning of the movement", "it wanted to conquer neighbours", "the UN ordered it", "the PAC forced it", "Legal avenues were closed."],
          ["H", "Apartheid collapsed in the early 1990s largely because of", "the combined pressure of internal resistance, sanctions and the end of the Cold War", "a military coup", "foreign invasion", "the death of Mandela", "The system had become unsustainable."],
        ],
      },
      {
        week: 2,
        title: "Pan-Africanism, the OAU and the African Union",
        subtopics: ["Pan-Africanism", "The founding of the OAU", "Achievements and failures of the OAU", "The African Union"],
        objectives: ["Trace the development of Pan-Africanism", "Explain the founding, aims and organs of the OAU", "Assess the achievements and failures of the OAU", "Describe the African Union and how it differs from the OAU"],
        lesson: {
          title: "The Search for African Unity",
          summary: "Analyse the Pan-African movement and the continental organisations it produced.",
          minutes: 40,
          notes: `## Pan-Africanism
The belief that people of African descent share common interests and should **unite** for freedom and progress.
### In the diaspora
- **Henry Sylvester Williams** (Trinidad) convened the first **Pan-African Conference** in **London, 1900**
- **W.E.B. Du Bois** organised **Pan-African Congresses** in 1919 (Paris), 1921, 1923 and 1927
- **Marcus Garvey**: the UNIA, "Africa for the Africans", pride of race
- **Edward Blyden**, **George Padmore**, **C.L.R. James**
### The turning point
The **Fifth Pan-African Congress (Manchester, 1945)** was dominated by Africans — **Kwame Nkrumah, Jomo Kenyatta**, with Padmore — and demanded **independence**. Leadership passed to Africa.
### On the continent
- **Accra, 1958**: the **Conference of Independent African States** and the **All-African People's Conference**
- disagreement about the **form** of unity:
  - the **Casablanca group** (Ghana, Guinea, Mali, Egypt, Morocco, Algeria): immediate **political union** — Nkrumah's "Africa Must Unite"
  - the **Monrovia group** (Nigeria, Liberia, Ethiopia and most others, including the Brazzaville states): **gradual** cooperation, respecting sovereignty

## The OAU
The two groups compromised at **Addis Ababa**, where **32** independent states signed the Charter of the **Organisation of African Unity** on **25 May 1963**, hosted by Emperor **Haile Selassie**. The charter reflected the Monrovia view.
### Aims
- promote **unity and solidarity**
- defend **sovereignty, territorial integrity and independence**
- **eradicate colonialism**
- coordinate cooperation for better living standards
- promote international cooperation, with regard for the UN Charter
### Principles
sovereign equality; **non-interference** in internal affairs; respect for existing borders; peaceful settlement of disputes; non-alignment.
### Organs
- the **Assembly of Heads of State and Government**
- the **Council of Ministers**
- the **General Secretariat** (Addis Ababa), headed by a Secretary-General (first: **Diallo Telli**)
- the **Commission of Mediation, Conciliation and Arbitration**
- specialised commissions; the **Liberation Committee** (Dar es Salaam)

## Assessment
### Achievements
- **decolonisation**: support for liberation movements in the Portuguese colonies, Zimbabwe and Namibia; the isolation of **apartheid** South Africa
- preservation of inherited **borders** (Cairo resolution, 1964), limiting wars between states
- mediation of some disputes (Algeria–Morocco 1963)
- a forum giving Africa a voice; the **African Development Bank (1964)**; the **Lagos Plan of Action (1980)**; the **African Charter on Human and Peoples' Rights (1981)**; the **Abuja Treaty (1991)** for an African Economic Community
### Failures
- **non-interference** made it helpless before dictatorship, coups, civil wars and genocide (Uganda under Amin, Rwanda 1994)
- no force of its own; dependence on voluntary contributions, often unpaid
- divisions — Arab/black, Francophone/Anglophone, Cold War alignments
- failure in Chad, Western Sahara, Congo
- little economic integration — a "talking shop" or "dictators' club", said critics

## The African Union
- the **Sirte Declaration (1999)**; the **Constitutive Act** (Lomé, 2000); launched at **Durban, July 2002** (first chairman: Thabo Mbeki); headquarters **Addis Ababa**
### What is new
- the right to **intervene** in a member state in cases of **war crimes, genocide and crimes against humanity** — "non-indifference"
- suspension of governments that come to power **unconstitutionally**
- stronger organs: the **Assembly**, **Executive Council**, the **Commission**, the **Pan-African Parliament**, the **Peace and Security Council**, the African Court; an African Standby Force
- development programmes: **NEPAD (2001)** and the **African Peer Review Mechanism**; **Agenda 2063**; the **African Continental Free Trade Area** (agreement 2018, trading from 2021)
### Problems
funding (heavy reliance on outside donors); weak enforcement; continuing conflicts and coups; slow integration.`,
          examples: `**Example 1.** Which congress demanded independence for Africa in 1945? *Answer:* The **Fifth Pan-African Congress, Manchester**.

**Example 2.** When and where was the OAU founded? *Answer:* **25 May 1963, Addis Ababa**.

**Example 3.** How does the AU differ from the OAU on intervention? *Answer:* The AU may **intervene** in cases of genocide and war crimes; the OAU upheld strict **non-interference**.`,
        },
        questions: [
          ["E", "The OAU was founded in", "1963", "1957", "1975", "2002", "Its charter was signed on 25 May."],
          ["E", "The headquarters of the African Union is in", "Addis Ababa", "Abuja", "Cairo", "Johannesburg", "The OAU was based there too."],
          ["E", "The African Union was launched in 2002 at", "Durban", "Lomé", "Sirte", "Accra", "It replaced the OAU."],
          ["M", "The first Pan-African Conference of 1900 was convened by", "Henry Sylvester Williams", "W.E.B. Du Bois", "Marcus Garvey", "Kwame Nkrumah", "It met in London."],
          ["M", "The group of states that wanted immediate political union of Africa was the", "Casablanca group", "Monrovia group", "Brazzaville group", "Frontline States", "Ghana, Guinea and Mali belonged to it."],
          ["M", "The OAU organ that supported freedom fighters was the", "Liberation Committee", "Council of Ministers", "Commission of Mediation", "General Secretariat", "It was based in Dar es Salaam."],
          ["M", "The first Secretary-General of the OAU was", "Diallo Telli", "Salim Ahmed Salim", "Haile Selassie", "Kofi Annan", "He came from Guinea."],
          ["H", "The OAU Charter reflected the Monrovia view in that it", "stressed sovereignty and non-interference rather than political union", "created a continental government", "set up a single African army", "abolished national borders", "Unity was to be gradual."],
          ["H", "The OAU's principle of non-interference is criticised because it", "left the organisation unable to act against dictatorship and mass killing", "caused border wars", "ended decolonisation", "encouraged colonial rule", "Rwanda in 1994 is an example."],
          ["H", "The most significant difference between the AU and the OAU is that the AU", "accepts a right to intervene in grave circumstances and rejects unconstitutional changes of government", "has fewer members", "opposes economic integration", "is based outside Africa", "It moved from non-interference to non-indifference."],
        ],
      },
      {
        week: 3,
        title: "The Economic Community of West African States",
        subtopics: ["Formation and aims", "Structure", "Achievements", "Problems and prospects"],
        objectives: ["Explain the formation and aims of ECOWAS", "Describe the structure of ECOWAS", "Assess the achievements of ECOWAS", "Identify its problems and prospects"],
        lesson: {
          title: "Integration in West Africa",
          summary: "Analyse the formation, working and record of ECOWAS.",
          minutes: 40,
          notes: `## Formation
After earlier, smaller groupings, **General Yakubu Gowon** of Nigeria and **President Gnassingbé Eyadéma** of Togo led the effort that produced the **Treaty of Lagos**, signed on **28 May 1975** by fifteen states. **Cape Verde** joined in 1977 (sixteen); **Mauritania** withdrew in 2000 (fifteen). In **January 2025** the military-ruled **Mali, Burkina Faso and Niger** formally left, having formed their own Alliance of Sahel States.
The membership bridged **English-, French- and Portuguese-speaking** states. The headquarters is in **Abuja** (earlier Lagos). A **Revised Treaty** was signed at **Cotonou in 1993**.

## Aims
- promote **cooperation and integration** leading to an **economic union**
- raise the **living standards** of the peoples
- maintain and enhance **economic stability**
- foster relations among members and contribute to the development of Africa
Specific objectives: removal of **customs duties** and trade barriers; a **common external tariff**; **free movement** of persons, services and capital; harmonisation of agricultural, industrial, transport and monetary policies; a **common currency**; a fund for cooperation and development.

## Structure
- the **Authority of Heads of State and Government** — supreme organ; a rotating chairman
- the **Council of Ministers**
- the **Commission** (the Executive Secretariat until 2007), headed by a President
- the **Community Parliament**
- the **Community Court of Justice** — individuals can bring human-rights cases
- the **ECOWAS Bank for Investment and Development (EBID)**, Lomé
- specialised agencies, e.g. the **West African Health Organisation**

## Achievements
1. **free movement**: the **1979 Protocol** — visa-free entry for 90 days; the **ECOWAS passport** and travel certificate
2. **trade liberalisation scheme** and a **common external tariff (2015)**
3. **infrastructure**: the trans-West African highway network (Lagos–Dakar, Dakar–N'Djamena); the West African Gas Pipeline; power pool; telecommunications links
4. **peace and security**: the **ECOWAS Monitoring Group (ECOMOG)**, formed in **1990**, intervened in **Liberia** and later **Sierra Leone** and **Guinea-Bissau**; forces in Côte d'Ivoire and Mali; restored the elected President of **The Gambia (2017)**; the **1999 Mechanism for Conflict Prevention** and the **2001 Protocol on Democracy and Good Governance** (zero tolerance for power obtained unconstitutionally)
5. cooperation in health (Ebola response), sport, culture and education
6. a collective voice in negotiations with the European Union and others

## Problems
- **low intra-regional trade**: members produce similar primary goods and trade mainly with Europe and Asia
- the **Anglophone–Francophone divide**: the French-speaking states' own union (**UEMOA**) and currency (the **CFA franc**), with close ties to France
- **multiple currencies**; repeated postponement of the single currency, the **eco**
- **non-implementation** of protocols: harassment and extortion at borders; unilateral border closures and expulsions (Nigeria 1983, 1985; border closure 2019)
- **political instability**: coups and insurgencies; the split with the Sahel states
- **unequal size**: fear of domination by **Nigeria**, which has more than half the population and economy
- **poor transport** links; **non-payment** of contributions (addressed by a community levy)
- external dependence and overlapping memberships

## Prospects
a large market; growing road, power and digital links; popular support for free movement. Success depends on political will, stable democratic government and diversified production.

## Nigeria's role
host and largest contributor of funds and troops; prime mover in 1975 and in ECOMOG — at great cost in money and lives.`,
          examples: `**Example 1.** By what treaty was ECOWAS founded? *Answer:* The **Treaty of Lagos, 28 May 1975**.

**Example 2.** What was ECOMOG? *Answer:* The **ECOWAS peacekeeping force**, first sent to Liberia in 1990.

**Example 3.** Give two problems of ECOWAS. *Answer:* The **Anglophone–Francophone divide** and **low intra-regional trade**.`,
        },
        questions: [
          ["E", "ECOWAS was established in", "1975", "1963", "1990", "2002", "The Treaty of Lagos was signed on 28 May."],
          ["E", "The headquarters of ECOWAS is in", "Abuja", "Lomé", "Accra", "Dakar", "It was earlier in Lagos."],
          ["E", "The peacekeeping force of ECOWAS is known as", "ECOMOG", "UNMIL", "AMISOM", "NATO", "It was formed in 1990."],
          ["M", "The two leaders most associated with the founding of ECOWAS were Gowon and", "Eyadéma", "Nkrumah", "Senghor", "Houphouët-Boigny", "He was President of Togo."],
          ["M", "The ECOWAS protocol on free movement of persons was adopted in", "1979", "1975", "1993", "2001", "It allows visa-free entry for ninety days."],
          ["M", "The ECOWAS Bank for Investment and Development is located in", "Lomé", "Abuja", "Ouagadougou", "Freetown", "It finances community projects."],
          ["M", "The Revised Treaty of ECOWAS was signed in 1993 at", "Cotonou", "Lagos", "Monrovia", "Bamako", "It strengthened the community's institutions."],
          ["H", "Trade among ECOWAS members remains low mainly because", "they produce similar primary goods and trade chiefly with outside partners", "tariffs have all been removed", "they share one currency", "there are no borders", "Their economies are competitive rather than complementary."],
          ["H", "The existence of UEMOA and the CFA franc hinders ECOWAS integration because", "the French-speaking states have a separate monetary union tied to outside interests", "it bans trade with Nigeria", "it replaced ECOWAS", "it uses the naira", "Two overlapping schemes pull in different directions."],
          ["H", "The 2001 Protocol on Democracy and Good Governance is important because it", "commits members to reject governments that take power unconstitutionally", "abolished elections", "created the single currency", "ended free movement", "It underlies ECOWAS sanctions against coups."],
        ],
      },
      {
        week: 4,
        title: "Nigeria, the United Nations and the Commonwealth",
        subtopics: ["The United Nations: origin, aims and organs", "Nigeria in the United Nations", "The Commonwealth", "Nigeria in the Commonwealth"],
        objectives: ["Describe the origin, aims and organs of the United Nations", "Assess Nigeria's role in the United Nations", "Describe the nature and organs of the Commonwealth", "Assess Nigeria's role in the Commonwealth"],
        lesson: {
          title: "Nigeria in World Organisations",
          summary: "Describe the UN and the Commonwealth and assess Nigeria's part in them.",
          minutes: 40,
          notes: `## The United Nations
### Origin
The **League of Nations** (1920) failed to prevent the Second World War. The victorious Allies planned a stronger body: the **Atlantic Charter (1941)**, the **Declaration by United Nations (1942)**, conferences at Dumbarton Oaks and Yalta, and the **San Francisco Conference** where the **Charter** was signed (June 1945). The UN came into being on **24 October 1945** (UN Day). Headquarters: **New York**.

### Aims
- maintain **international peace and security**
- develop **friendly relations** among nations on the basis of equal rights and self-determination
- achieve **international cooperation** on economic, social and humanitarian problems
- promote respect for **human rights**
- be a centre for harmonising the actions of nations

### Principal organs
1. the **General Assembly** — all members; one state, one vote
2. the **Security Council** — fifteen members: five **permanent** (USA, Russia, China, Britain, France) with the **veto**, and ten elected for two years
3. the **Economic and Social Council**
4. the **Trusteeship Council** (now inactive)
5. the **International Court of Justice**, at **The Hague**
6. the **Secretariat**, headed by the **Secretary-General**

### Specialised agencies
**WHO, UNESCO, FAO, ILO, UNICEF, UNDP, UNHCR**, the World Bank and IMF.

### Achievements and weaknesses
peacekeeping; decolonisation; health (eradication of smallpox); human-rights law; aid. But: the **veto**; great-power dominance; shortage of funds; failures (Rwanda, Bosnia).

## Nigeria in the UN
- admitted on **7 October 1960** as the **99th** member
- **peacekeeping**: since the **Congo (1960)**; Lebanon, Somalia, former Yugoslavia, Liberia, Sierra Leone, Darfur — one of the largest troop contributors
- **decolonisation and anti-apartheid**: long-time chair of the **Special Committee against Apartheid**
- several terms as a **non-permanent member** of the Security Council
- Nigerians in high office: **Joseph Garba** and **Tijjani Muhammad-Bande** as Presidents of the General Assembly; **Amina Mohammed** as Deputy Secretary-General; judges of the ICJ such as **Taslim Elias**, who served as its President
- campaign for **reform** of the Security Council and an African permanent seat
- beneficiary of agencies' programmes in health, education and refugees

## The Commonwealth
### Nature
A **voluntary association** of independent states, most of them former British territories, cooperating on shared values. It grew from the **Statute of Westminster (1931)** and the **London Declaration (1949)**, which allowed republics to remain members with the British monarch as symbolic **Head of the Commonwealth**.
### Features
- no charter of binding obligations for most of its history; decisions by **consensus**
- **Commonwealth Heads of Government Meeting (CHOGM)** every two years
- the **Secretariat** in **London (1965)** under a Secretary-General
- the **Commonwealth Fund for Technical Cooperation**; scholarships; the **Commonwealth Games**
- shared use of **English**, similar legal and educational systems
- the **Harare Declaration (1991)**: democracy, human rights, the rule of law

## Nigeria in the Commonwealth
- member since **1960**; remained on becoming a republic (1963)
- pressed Britain over **Rhodesia** and **South Africa**; boycotted the **1978 Commonwealth Games**
- **General Obasanjo** co-chaired the **Eminent Persons Group (1986)** on South Africa
- **Chief Emeka Anyaoku** served as **Secretary-General (1990–2000)**
- **suspended in 1995** after the Ogoni executions; readmitted in **1999**
- hosted **CHOGM in Abuja (2003)**
- benefits: scholarships, technical assistance, election observation, trade and sporting links

## Other bodies
the **Non-Aligned Movement**; **OPEC**; the **OIC**; the **D-8**; the **G-77**.`,
          examples: `**Example 1.** When did Nigeria join the UN? *Answer:* **7 October 1960**, as the **99th** member.

**Example 2.** Name the five permanent members of the Security Council. *Answer:* **USA, Russia, China, Britain, France**.

**Example 3.** Which Nigerian was Commonwealth Secretary-General? *Answer:* **Chief Emeka Anyaoku** (1990–2000).`,
        },
        questions: [
          ["E", "The United Nations was founded in", "1945", "1919", "1960", "1963", "UN Day is 24 October."],
          ["E", "The headquarters of the United Nations is in", "New York", "Geneva", "London", "The Hague", "The International Court of Justice sits at The Hague."],
          ["E", "The Nigerian who served as Commonwealth Secretary-General was", "Emeka Anyaoku", "Joseph Garba", "Taslim Elias", "Ibrahim Gambari", "He held office from 1990 to 2000."],
          ["M", "Nigeria was admitted to the United Nations as its", "99th member", "50th member", "150th member", "1st African member", "It joined on 7 October 1960."],
          ["M", "The power of a permanent member to block a Security Council decision is the", "veto", "quorum", "mandate", "sanction", "Five states hold it."],
          ["M", "Nigeria was suspended from the Commonwealth between", "1995 and 1999", "1966 and 1970", "1983 and 1985", "2007 and 2010", "It followed the Ogoni executions."],
          ["M", "The Commonwealth declaration of 1991 on democracy and human rights was made at", "Harare", "Abuja", "London", "Singapore", "It set standards for members."],
          ["H", "The League of Nations is relevant to the history of the UN because", "its failure to prevent war led to the creation of a stronger organisation", "it founded the Security Council", "it admitted Nigeria", "it was based in New York", "The UN was designed to avoid its weaknesses."],
          ["H", "The London Declaration of 1949 was important for countries like Nigeria because it", "allowed republics to remain members of the Commonwealth", "required all members to keep the British monarch as head of state", "ended the Commonwealth", "made English compulsory", "Nigeria stayed in after 1963."],
          ["H", "Nigeria's demand for reform of the Security Council rests on the argument that", "Africa has no permanent seat despite its size and its share of the Council's business", "the veto should be given to all members", "the UN should move to Abuja", "peacekeeping should end", "Representation is seen as unequal."],
        ],
      },
      {
        week: 5,
        title: "Decolonisation in Africa",
        subtopics: ["Factors that favoured decolonisation", "Peaceful transfers and armed struggles", "Southern Africa", "Problems of the new states"],
        objectives: ["Explain the factors that favoured decolonisation in Africa", "Compare peaceful transfers of power with armed liberation struggles", "Describe the liberation of southern Africa", "Identify the problems faced by the new African states"],
        lesson: {
          title: "The Wind of Change",
          summary: "Analyse the process of decolonisation across Africa.",
          minutes: 40,
          notes: `## Factors that favoured decolonisation
- the **Second World War**: weakened Britain and France; African soldiers' experience; the Atlantic Charter
- the rise of the **USA and USSR**, both opposed to the old empires; the **Cold War** competition for the new states
- the **United Nations** and world opinion
- **Asian independence**: India (1947), Indonesia; the **Bandung Conference (1955)**
- **nationalist movements**: mass parties, trade unions, the press
- **Pan-Africanism** and the example of **Ghana (1957)**
- changing economic calculations in Europe

## Stages
- **North Africa**: Libya (1951); Egypt's revolution (1952) under **Nasser** and the **Suez Crisis (1956)**; Morocco, Tunisia and Sudan (1956)
- **1960 — the "Year of Africa"**: seventeen countries, including Nigeria, became independent. In February 1960 British Prime Minister **Harold Macmillan** told the South African parliament that "**the wind of change** is blowing through this continent".
- East and Central Africa: Tanganyika (1961), Uganda (1962), **Kenya (1963)**, Zambia and Malawi (1964)

## Peaceful transfers
Where there were **few white settlers** and well-organised parties — the Gold Coast, Nigeria, Tanganyika (**Julius Nyerere**), most French territories — independence came by **negotiation** and elections.

## Armed struggles
Where **settlers** or the colonial power refused to yield:
- **Kenya**: land hunger among the Kikuyu led to the **Mau Mau** rising (**1952–60**); a state of emergency; **Jomo Kenyatta** was imprisoned; independence on **12 December 1963**
- **Algeria**: a million French settlers; the **FLN** fought a savage war (**1954–62**); the **Evian Accords**; independence on **5 July 1962** under **Ahmed Ben Bella**
- the **Belgian Congo**: sudden independence (30 June 1960) under **Patrice Lumumba**, followed by mutiny, the secession of **Katanga**, UN intervention and Lumumba's murder (1961) — a warning about unprepared decolonisation and Cold War interference
- **Portuguese Africa**: Portugal, a dictatorship, held on. Liberation wars from 1961: **PAIGC** (**Amílcar Cabral**) in Guinea-Bissau; **FRELIMO** (**Eduardo Mondlane, Samora Machel**) in Mozambique; **MPLA** (**Agostinho Neto**), FNLA and UNITA in Angola. The army coup in Lisbon (**April 1974**) led to independence: Guinea-Bissau (1974), **Mozambique and Angola (1975)**.

## Southern Africa
- **Rhodesia (Zimbabwe)**: the white minority under **Ian Smith** made a **Unilateral Declaration of Independence (1965)**; sanctions; guerrilla war by **ZANU** and **ZAPU**; the **Lancaster House Agreement (1979)**; independence on **18 April 1980** under **Robert Mugabe**
- **Namibia**: ruled by South Africa in defiance of the UN; **SWAPO** (**Sam Nujoma**); independence in **1990**
- **South Africa**: majority rule in **1994**
- the **Frontline States** (Tanzania, Zambia, Mozambique, Angola, Botswana, later Zimbabwe) sheltered the liberation movements at heavy cost

## Problems of the new states
- **artificial boundaries** and ethnic division; secession attempts (Katanga, Biafra, Eritrea)
- weak institutions; one-party rule and **military coups**
- **economic dependence** — "neo-colonialism" (Nkrumah): continued foreign control of trade, finance and currency
- shortage of trained personnel
- Cold War **interference** (Congo, Angola, the Horn)
- poverty, debt, rapid population growth
- high popular expectations

## Assessment
Political independence was a historic achievement won by Africans' own efforts; economic independence and stable democratic government have proved harder tasks.`,
          examples: `**Example 1.** Who spoke of the "wind of change" and when? *Answer:* **Harold Macmillan**, in **1960**.

**Example 2.** Why did Kenya and Algeria have to fight for independence? *Answer:* Large **settler** populations resisted majority rule.

**Example 3.** When did Zimbabwe become independent? *Answer:* **18 April 1980**.`,
        },
        questions: [
          ["E", "The year 1960 is called the 'Year of Africa' because", "seventeen African countries became independent", "the OAU was founded", "apartheid ended", "the Suez Canal opened", "Nigeria was one of them."],
          ["E", "The Mau Mau rising took place in", "Kenya", "Algeria", "Angola", "Ghana", "It lasted from 1952 to 1960."],
          ["E", "The leader of independent Zimbabwe in 1980 was", "Robert Mugabe", "Ian Smith", "Joshua Nkomo", "Sam Nujoma", "He led ZANU. Answer: Robert Mugabe."],
          ["M", "The British Prime Minister who spoke of the 'wind of change' was", "Harold Macmillan", "Winston Churchill", "Clement Attlee", "Margaret Thatcher", "He spoke in Cape Town in 1960."],
          ["M", "Algeria won independence from France in", "1962", "1954", "1956", "1960", "The Evian Accords ended the war."],
          ["M", "The liberation movement in Guinea-Bissau was led by", "Amílcar Cabral", "Agostinho Neto", "Samora Machel", "Eduardo Mondlane", "His party was the PAIGC."],
          ["M", "The first Prime Minister of the Congo, murdered in 1961, was", "Patrice Lumumba", "Moïse Tshombe", "Joseph Kasavubu", "Mobutu", "The crisis drew in the United Nations."],
          ["H", "Decolonisation was most violent in territories where", "there were large European settler communities", "there were no nationalist parties", "the colony was very small", "the UN held trusteeship", "Settlers resisted majority rule."],
          ["H", "The independence of the Portuguese colonies in 1974–75 followed directly from", "the army coup in Lisbon brought on by the colonial wars", "a UN military invasion", "the death of Nkrumah", "the Lancaster House talks", "The wars had exhausted Portugal."],
          ["H", "Nkrumah's term 'neo-colonialism' describes a situation in which a state is", "politically independent but economically controlled from outside", "still ruled by a governor", "a member of the Commonwealth", "under UN trusteeship", "It points to the limits of political independence."],
        ],
      },
    ],
  },
  {
    classCode: "SS3",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Women in Nigerian history",
        subtopics: ["Women in pre-colonial states", "Women under colonial rule", "Women in the nationalist struggle", "Women since independence"],
        objectives: ["Identify notable women in pre-colonial Nigerian history", "Explain how colonial rule affected women", "Describe women's part in the nationalist struggle", "Assess the position of women since independence"],
        lesson: {
          title: "Makers of History",
          summary: "Examine the roles and contributions of women in Nigerian history.",
          minutes: 40,
          notes: `## Women in pre-colonial states
Women held recognised **political, economic and religious** positions.
### Rulers and heroines
- **Queen Amina** of Zazzau — sixteenth-century warrior queen
- **Queen Daurama** of Daura — in the Bayajidda legend
- **Moremi** of Ife — who, according to tradition, let herself be captured to learn the secret of the raiders troubling Ife and afterwards gave up her son **Oluorogbo** in fulfilment of a vow
- **Queen Idia** of Benin — mother of Oba Esigie, credited with helping him win his wars; the first **Iyoba**
- **Emotan** of Benin — a market woman who helped **Ewuare** recover his throne
- **Inikpi** — the Igala princess remembered for giving her life to save the kingdom
- **Queen Kambasa** of Bonny
### Offices
- the **Magira** and **Gumsu** in Borno; the **Iyoba** in Benin; the **Iya Oba** and other palace ladies in Oyo
- the **Iyalode** — head of the women and a council chief in Yoruba towns: **Madam Efunsetan Aniwura** of Ibadan and **Madam Tinubu**, a great trader of Lagos and Abeokuta who opposed British influence in Lagos and helped arm the Egba against Dahomey
- the **Omu** — "queen" of the women in Onitsha and western Igbo towns, with her own council; the wealthy merchant **Omu Okwei** of Osomari
- priestesses and prophetesses
### Economy
control of **local trade and markets**; food processing; weaving, pottery, dyeing; farming.
### Scholarship
**Nana Asma'u** — poet, teacher and organiser of women's education in the Sokoto Caliphate.
### Collective power
the *umuada* and wives' associations among the Igbo; market women's organisations; sanctions such as "sitting on a man".

## Under colonial rule
- British officials, assuming politics to be men's business, **ignored women's institutions**: the Omu lost her role; no women were made warrant chiefs or Native Authority members
- cash crops, wage labour and schooling favoured **men**; girls' education lagged and stressed domestic skills
- new taxes and market controls hit women traders
- yet women found new openings in trade, teaching and nursing

## Women's protests
- the **Aba Women's War (1929)**: organised through market and kinship networks across two provinces; it ended the warrant-chief system
- the **Lagos Market Women's Association** under **Madam Alimotu Pelewura** resisted taxation and wartime price control (1940s)
- the **Abeokuta Women's Union** under **Mrs Funmilayo Ransome-Kuti** campaigned against the taxation of women and the abuses of the Sole Native Authority; the **Alake** went into exile (1949) and the tax was abolished

## In the nationalist struggle
- **Funmilayo Ransome-Kuti** — NCNC delegate to London (1947); founder of the Nigerian Women's Union
- **Margaret Ekpo** — organised Aba women after the Enugu shooting; NCNC leader; member of the Eastern House of Assembly (1961)
- **Hajiya Gambo Sawaba** — NEPU activist for northern women's rights, imprisoned many times
- **Wuraola Esan** — first woman senator (1960)
- **Janet Mokelu**, **Adunni Oluwole**
- **franchise**: women voted in the East and West from the 1950s; in the **North** only from **1979**

## Since independence
- growth in female education and the professions
- pioneers: **Grace Alele-Williams** (first woman vice-chancellor), **Flora Nwapa** (first published woman novelist), **Dora Akunyili** (NAFDAC), **Ngozi Okonjo-Iweala** (finance minister; Director-General of the World Trade Organization from 2021), **Chioma Ajunwa** (Olympic gold, 1996)
- organisations: the **National Council of Women's Societies (1958)**, FOMWAN, Women in Nigeria (WIN); a federal ministry of women affairs; the National Gender Policy
- continuing challenges: **low representation** in elective office; discriminatory customs (widowhood rites, inheritance); early marriage; violence; poverty

## Significance
Recovering women's history corrects a one-sided picture and shows that Nigerian women have always been **active makers of history**.`,
          examples: `**Example 1.** Who was the Iyalode? *Answer:* The **head of the women** and a chief in council in Yoruba towns.

**Example 2.** Who led the Abeokuta Women's Union? *Answer:* **Mrs Funmilayo Ransome-Kuti**.

**Example 3.** When did women in northern Nigeria first vote? *Answer:* **1979**.`,
        },
        questions: [
          ["E", "The leader of the Abeokuta Women's Union was", "Funmilayo Ransome-Kuti", "Margaret Ekpo", "Gambo Sawaba", "Madam Tinubu", "The union campaigned against the taxation of women."],
          ["E", "The NEPU activist who championed northern women's rights was", "Gambo Sawaba", "Wuraola Esan", "Flora Nwapa", "Alimotu Pelewura", "She was imprisoned many times."],
          ["E", "The heroine of Ife who is said to have sacrificed her son Oluorogbo was", "Moremi", "Idia", "Emotan", "Inikpi", "She learnt the secret of the raiders."],
          ["M", "The first woman senator in Nigeria was", "Wuraola Esan", "Margaret Ekpo", "Janet Mokelu", "Franca Afegbua", "She was appointed in 1960."],
          ["M", "The leader of the Lagos market women in the 1940s was", "Alimotu Pelewura", "Efunsetan Aniwura", "Omu Okwei", "Nana Asma'u", "She resisted taxation and price control."],
          ["M", "The office of Omu was found among the", "Onitsha and western Igbo", "Kanuri", "Hausa", "Tiv", "She headed the women and their council."],
          ["M", "Women in the Northern Region first exercised the vote in", "1979", "1951", "1959", "1999", "Southern women had voted since the 1950s."],
          ["H", "Colonial rule weakened women's political position mainly because the British", "ignored women's institutions and dealt only with male authorities", "banned women from trading", "closed all markets", "abolished marriage", "Offices such as the Omu lost their role."],
          ["H", "The Abeokuta women's campaign was a political success in that it", "forced the Alake into temporary exile and ended the tax on women", "created a new region", "won the vote for northern women", "ended British rule", "It showed the power of organised women."],
          ["H", "The study of women in Nigerian history is important chiefly because it", "corrects an account of the past that concentrated on men", "replaces political history", "proves that women ruled all states", "is required by the constitution", "It shows women as active makers of history."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: Nigeria and West Africa to 1800",
        subtopics: ["Historiography and sources", "Early cultures and state formation", "The states of Nigeria to 1800", "The empires and trade of West Africa"],
        objectives: ["Recall historiography, sources and dating methods", "Recall the early cultures and patterns of state formation", "Recall the main features of Nigerian states to 1800", "Recall the West African empires and the trans-Saharan and Atlantic trades"],
        lesson: {
          title: "Revising the Period to 1800",
          summary: "Consolidate the SS1 syllabus for the senior examinations.",
          minutes: 45,
          notes: `## Historiography and sources
historiography; Carr; Ranke; bias and objectivity; denial of African history (Hegel, Trevor-Roper); **Dike** and the Ibadan School; Vansina. Oral, written and archaeological sources — strengths and limits; linguistics. **Relative** (stratigraphy) and **absolute** dating (radiocarbon, thermoluminescence).

## Environment and inter-group relations
savanna — cavalry states; forest — compact kingdoms and village democracies; delta — city-states. Trade, war, dynastic ties, religion, migration, marriage.

## Early cultures
Nok (terracotta; Taruga iron) · Daima (long sequence) · Igbo-Ukwu (9th century bronzes; Nri) · Ife (naturalism) · Benin (court art; guilds).

## State formation
centralised vs non-centralised; factors — surplus, iron, trade, horse, religion; strengths and weaknesses of each.

## Nigerian states
| State | Key points |
|---|---|
| **Kanem-Borno** | Sayfawa; Umme Jilmi; Dunama Dibalemi; Bulala; Ali Ghaji — Ngazargamu; Idris Alooma |
| **Hausa states** | birni; Sarki; Kano Chronicle; Rumfa; Kebbi — Kanta; Gobir; disunity |
| **Oyo** | Alaafin; Oyomesi; Bashorun; Ogboni; Kakanfo; cavalry; Gaha; Afonja |
| **Benin** | Ogiso; Eweka I; Ewuare; Uzama; Iyase; primogeniture; Portuguese; guilds |
| **Igbo** | village-group; ofo; age-grades; Ozo; Nri; Aro and Ibini Ukpabi |
| **Tiv / Ibibio** | segmentary; tar; Ekpo; Ekpe |
| **Delta** | Amanyanabo; canoe House; Ekine |
| **Itsekiri** | Olu; Ginuwa; Portuguese |
| **Nupe** | Tsoede; Etsu |
| **Igala** | Attah; Igala Mela; Idah |
| **Jukun** | Aku Uka; Kwararafa |

## West African empires
- **Ghana**: Soninke; Kumbi Saleh; al-Bakri; matrilineal; gold nuggets; Almoravids 1076; Sumanguru
- **Mali**: Sundiata — Kirina 1235; Niani; Mansa Musa — hajj 1324; Ibn Battuta; succession disputes
- **Songhai**: Gao; Sunni Ali — Timbuktu 1468; Askia Muhammad — provinces, army, weights; Sankore; Tondibi 1591
- **Asante**: Osei Tutu; Okomfo Anokye; Golden Stool; Feyiase 1701
- **Dahomey**: Abomey; Agaja — Whydah 1727; absolute monarchy; Amazons; tribute to Oyo

## Trade
trans-Saharan — gold, salt, camel, Islam; Atlantic — triangular trade, twelve million, eighteenth-century peak; debate — Rodney, Williams, Fage.

## Essay technique
- introduce with **place, period and sources**
- organise by themes: **political, economic, social, religious**
- support each point with a **named example**
- for "account for the rise/decline" questions give several factors and weigh them
- conclude with **significance**.`,
          examples: `**Example 1.** Which empire did Sundiata found? *Answer:* **Mali**.

**Example 2.** Name a non-centralised people other than the Igbo. *Answer:* The **Tiv**.

**Example 3.** Which dating method uses carbon-14? *Answer:* **Radiocarbon dating**.`,
        },
        questions: [
          ["E", "The battle of Kirina led to the rise of", "Mali", "Ghana", "Songhai", "Asante", "Sundiata defeated Sumanguru there."],
          ["E", "The canoe House was a feature of the", "Niger Delta city-states", "Hausa states", "Tiv", "Kanem-Borno", "It was a trading and war corporation."],
          ["E", "The Golden Stool belongs to the history of", "Asante", "Dahomey", "Benin", "Oyo", "Okomfo Anokye is associated with it."],
          ["M", "Which pair is correctly matched?", "Songhai — Askia Muhammad", "Mali — Tunka Manin", "Ghana — Sunni Ali", "Dahomey — Osei Tutu", "He founded the Askia dynasty in 1493."],
          ["M", "The correct chronological order of the Western Sudanic empires at their height is", "Ghana, Mali, Songhai", "Mali, Ghana, Songhai", "Songhai, Mali, Ghana", "Ghana, Songhai, Mali", "Each succeeded the other as leading power."],
          ["M", "Which of these states had a rule of primogeniture?", "Benin", "Oyo", "ancient Ghana", "Mali", "The Oba's eldest son succeeded."],
          ["M", "The historian associated with the argument that the slave trade underdeveloped Africa is", "Rodney", "Fage", "Trevor-Roper", "Ranke", "He wrote in the 1970s."],
          ["H", "A feature common to Ghana, Mali and Songhai was that their wealth depended on", "taxing and controlling trans-Saharan trade", "Atlantic slave exports", "sea power", "manufacturing for Europe", "Gold and salt passed through their territories."],
          ["H", "Oyo and Dahomey differed politically in that", "the Alaafin was limited by a council while the king of Dahomey was absolute", "Oyo had no king", "Dahomey was a confederation", "both were city-states", "The Oyomesi could reject an Alaafin."],
          ["H", "The use of archaeology, oral tradition and linguistics together in reconstructing early Nigerian history illustrates the principle that the historian should be", "inter-disciplinary", "biased", "dependent on documents alone", "concerned only with kings", "No single source is sufficient."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: Nigeria and West Africa, 1800–1960",
        subtopics: ["Nineteenth-century states and movements", "Conquest and colonial rule", "Nationalism and decolonisation in Nigeria", "West Africa under colonial rule"],
        objectives: ["Recall nineteenth-century developments in Nigeria", "Recall the conquest and the working of colonial rule", "Recall nationalism and decolonisation in Nigeria", "Recall developments elsewhere in West Africa"],
        lesson: {
          title: "Revising the Period 1800–1960",
          summary: "Consolidate the SS2 syllabus for the senior examinations.",
          minutes: 45,
          notes: `## The nineteenth century in Nigeria
- **Sokoto Caliphate**: causes of the jihad; Gudu, Tabkin Kwatto, Alkalawa; Caliph, Waziri, emirates, tribute; Bello's ribats; Kano; ajami literature; Nana Asma'u; revolts
- **Borno**: al-Kanemi; debate with Bello; Kukawa; end of the Sayfawa (1846); Rabih (1893); partition
- **Yorubaland**: fall of Oyo — Gaha, Awole, Afonja; Ibadan (military republic), Abeokuta (federation; Alake; Parakoyi), Ijaye (Kurunmi); Osogbo; Kiriji; 1886 and 1893 treaties
- **Delta**: palm oil; Houses; Pepple; Jaja and Opobo; Nana; consuls
- **Missions and elite**: Venn; Crowther; Saro; African churches; Blyden; Agbebi; cultural nationalism

## Conquest
theories of imperialism; Berlin; boundaries; stages and methods; responses; reasons for defeat.

## Colonial rule
- administration: Governor, Residents, DOs; indirect rule — North, West, East; warrant chiefs; Women's War; Cameron's reforms
- economy: land policy; peasant production; railways; tin and coal; UAC; currency board; marketing boards; Ten-Year Plan
- society: education, health, towns, elite, press

## Nationalism and decolonisation
- phases; NCBWA; NNDP; NYM; WASU; the war; 1945 strike; Zikists; Enugu 1949
- NCNC, AG, NPC, NEPU
- constitutions: 1922, 1946, 1951, 1954; 1953 crisis; conferences 1957–58; Willink; 1959 election; 1 October 1960
- regionalism; revenue allocation — derivation

## West Africa
| Theme | Points |
|---|---|
| **Sierra Leone** | 1787; Freetown 1792; Crown Colony 1808; Creoles; Fourah Bay; Bai Bureh |
| **Liberia** | ACS; 1822; independence 1847; Roberts; True Whig Party; Firestone |
| **French policy** | AOF; assimilation — Four Communes, Blaise Diagne; association; indigénat; Loi Cadre; 1958 referendum |
| **Ghana** | UGCC; 1948 riots; CPP 1949; Positive Action; 6 March 1957 |
| **Guinea** | Sékou Touré; "No" 1958 |
| **Resistance** | Samori — sofas, scorched earth, 1898; Asante — Prempeh, Yaa Asantewaa 1900; Behanzin |
| **Colonial impact** | cocoa — Tetteh Quarshie; railways; William Ponty; balance sheet |

## Comparing British and French rule
decentralised vs centralised; chiefs as rulers vs agents; legislative councils vs deputies in Paris; elite excluded vs assimilated; both exploitative.

## Technique
- in "compare" questions, treat **similarities and differences** point by point
- in "assess" questions, give **both sides** and a judgement
- keep dates accurate; avoid narrative without analysis.`,
          examples: `**Example 1.** Who was the first African Anglican bishop? *Answer:* **Samuel Ajayi Crowther**.

**Example 2.** Which French territory rejected the French Community in 1958? *Answer:* **Guinea**.

**Example 3.** State one difference between British and French colonial rule. *Answer:* The British ruled **through chiefs as Native Authorities**; the French used chiefs as **subordinate agents**.`,
        },
        questions: [
          ["E", "The Fourah Bay College is located in", "Sierra Leone", "Liberia", "Ghana", "Nigeria", "It was founded in 1827."],
          ["E", "The leader who took the Gold Coast to independence was", "Kwame Nkrumah", "Sékou Touré", "Félix Houphouët-Boigny", "Milton Margai", "Ghana became independent in 1957."],
          ["E", "The French policy of making Africans French citizens in culture is", "assimilation", "indirect rule", "association only", "paternalism", "It applied fully in the Four Communes."],
          ["M", "Which pair is correctly matched?", "Samori Touré — Mandinka Empire", "Behanzin — Asante", "Prempeh I — Dahomey", "Bai Bureh — Liberia", "He resisted the French until 1898."],
          ["M", "The debate between al-Kanemi and Muhammad Bello concerned", "the justification for the jihad against Borno", "the route of the trans-Saharan trade", "the rules of succession in Sokoto", "the treatment of European travellers", "Al-Kanemi argued Borno was already Muslim."],
          ["M", "The Yoruba town organised as a military republic in the nineteenth century was", "Ibadan", "Abeokuta", "Ile-Ife", "Oyo", "Titles were open to merit."],
          ["M", "The constitution under which Nigeria became a federation was introduced in", "1954", "1946", "1951", "1960", "It is the Lyttleton Constitution."],
          ["H", "Arrange in chronological order: (1) Ghana's independence, (2) Guinea's independence, (3) Nigeria's independence, (4) the founding of the CPP.", "4, 1, 2, 3", "1, 4, 2, 3", "4, 2, 1, 3", "1, 2, 3, 4", "1949, 1957, 1958, 1960."],
          ["H", "The Sokoto Caliphate and the French federation of West Africa were alike in that both", "linked many territories under one supreme authority", "were ruled by Christian missionaries", "rejected taxation", "were founded in 1895", "They differed greatly in the degree of central control."],
          ["H", "The rise of regional parties in Nigeria and the 'balkanisation' of French West Africa both show that", "constitutional arrangements under colonial rule shaped the form of the post-colonial state", "nationalism failed everywhere", "Africans rejected independence", "federations always succeed", "Structures created before independence had lasting effects."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: Nigeria since 1960 and Africa in the wider world",
        subtopics: ["Politics since independence", "Economy and foreign policy", "African liberation and unity", "International organisations"],
        objectives: ["Recall the political history of Nigeria since 1960", "Recall economic development and foreign policy", "Recall decolonisation, apartheid and African unity", "Recall the international organisations studied"],
        lesson: {
          title: "Revising the Contemporary Period",
          summary: "Consolidate the SS3 syllabus for the senior examinations.",
          minutes: 45,
          notes: `## Politics since 1960
- **First Republic**: structure; AG crisis; census; 1964 and 1965 elections; interpretations
- **1966**: January and July coups; Decree 34
- **Civil war**: Aburi; twelve states; Biafra; foreign involvement; relief; 3Rs; £20 policy
- **Military rule**: features (decrees, SMC/AFRC, ouster clauses); achievements (unity, states, infrastructure); failures (rights, corruption, centralisation)
- **Second Republic**: presidential system; five parties; oil glut; 1983
- **1983–99**: Buhari (WAI), Babangida (SAP; June 12), Shonekan, Abacha, Abubakar
- **Fourth Republic**: 1999 Constitution; Obasanjo, Yar'Adua, Jonathan, Buhari, Tinubu; 2015 turnover; challenges

## Economy
development plans; **Oloibiri 1956**; oil boom; indigenisation; OFN and Green Revolution; SAP 1986; privatisation; debt relief; diversification.

## Foreign policy
Africa as centrepiece; non-alignment; Balewa vs Murtala; anti-apartheid; ECOMOG; TAC; Bakassi.

## Women
Amina, Moremi, Idia; Iyalode, Omu; Nana Asma'u; Aba 1929; Ransome-Kuti; Ekpo; Sawaba; votes in the North 1979.

## Africa
- **Decolonisation**: factors; 1960; Macmillan; Kenya — Mau Mau; Algeria — FLN; Congo — Lumumba; Portuguese colonies 1974–75; Zimbabwe 1980; Namibia 1990
- **Apartheid**: 1948; laws; ANC; Sharpeville 1960; Rivonia; Soweto 1976; sanctions; de Klerk 1990; elections 1994; Mandela
- **Pan-Africanism**: 1900; Du Bois; Garvey; Manchester 1945; Casablanca vs Monrovia
- **OAU** (1963): aims, organs, Liberation Committee; successes and failures
- **AU** (2002): right to intervene; Peace and Security Council; NEPAD; AfCFTA

## Organisations
| Body | Founded | HQ | Notes |
|---|---|---|---|
| **UN** | 1945 | New York | six organs; veto; Nigeria 99th member (1960) |
| **Commonwealth** | 1931/1949 | London | CHOGM; Anyaoku; suspension 1995–99 |
| **OAU / AU** | 1963 / 2002 | Addis Ababa | |
| **ECOWAS** | 1975 | Abuja | Treaty of Lagos; ECOMOG; free movement |
| **OPEC** | 1960 | Vienna | Nigeria joined 1971 |

## Recurring themes for essays
1. **the national question**: unity in diversity; federalism; state creation; revenue allocation
2. **democracy and military rule**
3. **development and dependence**
4. **Nigeria's leadership role** in Africa
5. **continuity and change** from the pre-colonial through the colonial to the present

## Final advice
plan each essay; answer the question asked; use specific **names, dates and places**; balance narrative with **analysis**; manage time across sections.`,
          examples: `**Example 1.** Which body replaced the OAU? *Answer:* The **African Union**, in 2002.

**Example 2.** In which year did Nigeria join OPEC? *Answer:* **1971**.

**Example 3.** Which event of 1960 in South Africa led to the banning of the ANC? *Answer:* The **Sharpeville massacre**.`,
        },
        questions: [
          ["E", "The organisation of oil-exporting countries that Nigeria joined in 1971 is", "OPEC", "ECOWAS", "OAU", "OIC", "It was founded in 1960."],
          ["E", "The first all-race elections in South Africa were held in", "1994", "1990", "1960", "1948", "Mandela became President."],
          ["E", "The Treaty of Lagos established", "ECOWAS", "the OAU", "the African Union", "the Commonwealth", "It was signed in 1975."],
          ["M", "Which pair is correctly matched?", "Lancaster House Agreement — Zimbabwe", "Evian Accords — Kenya", "Green Tree Agreement — Biafra", "Aburi Accord — Angola", "It led to independence in 1980."],
          ["M", "The Nigerian Head of State under whom SAP was introduced was", "Babangida", "Buhari", "Obasanjo", "Shagari", "It began in 1986."],
          ["M", "The correct order of these events is", "Sharpeville, Soweto uprising, release of Mandela", "Soweto uprising, Sharpeville, release of Mandela", "release of Mandela, Sharpeville, Soweto uprising", "Sharpeville, release of Mandela, Soweto uprising", "1960, 1976, 1990."],
          ["M", "The principle that made the OAU reluctant to act in members' internal crises was", "non-interference", "non-alignment", "federal character", "derivation", "The African Union modified it."],
          ["H", "State creation in Nigeria and the OAU's 1964 resolution on borders were both responses to the problem of", "holding together states whose boundaries enclosed diverse peoples", "the Cold War", "falling oil prices", "the slave trade", "Each sought stability within inherited frontiers."],
          ["H", "The experience of both the First and Second Republics supports the view that democracy in Nigeria has been undermined chiefly by", "electoral malpractice and the struggle for control of state resources", "the absence of a written constitution", "foreign invasion", "too few political parties", "Both ended in military intervention."],
          ["H", "The theme of 'continuity and change' in Nigerian history is illustrated by the way", "pre-colonial institutions such as emirates and obaships have survived within the modern state", "the colonial period erased everything earlier", "nothing has changed since 1800", "traditional rulers now make federal laws", "Old institutions adapted to new conditions."],
        ],
      },
    ],
  },
];
