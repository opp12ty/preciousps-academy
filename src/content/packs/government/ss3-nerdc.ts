import type { PackTopic } from "../types";

/** SS3 Government — topics introduced by the NERDC 2025 scheme (weeks are set in ss3.ts). */
type Topic = Omit<PackTopic, "week">;

export const conflict: Topic = {
  title: "Conflict Resolution and Management",
  subtopics: ["Meaning and types of conflict", "Causes of conflict", "Consequences of conflict", "Ways of resolving and managing conflict"],
  objectives: ["Explain the meaning and types of conflict", "Discuss the causes of conflict", "Examine the consequences of conflict", "Identify ways of resolving and managing conflict"],
  lesson: {
    title: "Understanding and Resolving Conflict",
    summary: "Why conflicts arise in society, what they cost, and the methods of settling them peacefully.",
    minutes: 40,
    notes: `## Meaning
**Conflict** is a **disagreement, clash or struggle** between individuals, groups or states arising from **incompatible interests, goals, values or needs**. Conflict is a normal part of social life; what matters is whether it is handled **peacefully or violently**.

- **Conflict resolution** — the methods by which the parties **end** a conflict by removing its causes.
- **Conflict management** — the steps taken to **control and limit** a conflict so that it does not become destructive, even where it cannot be fully ended.

## Types of conflict
| Type | Examples |
|---|---|
| **intra-personal** | conflict within a person |
| **inter-personal** | between two persons |
| **communal / inter-communal** | land and boundary disputes between communities; farmer–herder clashes |
| **ethnic and religious** | clashes between ethnic or faith groups |
| **political** | election disputes; struggles between parties or arms of government |
| **industrial** | disputes between workers and employers — strikes |
| **intra-state** | civil war, insurgency, militancy |
| **international** | disputes and wars between states |

## Causes of conflict
1. **Competition for scarce resources** — land, water, grazing, minerals, jobs.
2. **Struggle for political power**; electoral malpractice.
3. **Ethnicity and tribalism**; fear of domination.
4. **Religious intolerance** and extremism.
5. **Injustice, marginalisation** and unequal distribution of resources.
6. **Poverty and unemployment**, especially among the youth.
7. **Boundary and chieftaincy disputes**.
8. **Bad leadership, corruption** and violation of human rights.
9. **Poor communication**, rumours and hate speech.
10. **Proliferation of small arms**.
11. Colonial legacy — arbitrary boundaries.
12. Differences in values and ideology.

## Consequences of conflict
- **loss of lives**; injuries
- **destruction of property** and infrastructure
- **displacement** — internally displaced persons and refugees
- disruption of **economic activities**, farming and trade; hunger
- closure of schools and hospitals
- **insecurity**, fear and mutual distrust
- diversion of public funds to security
- political instability; possible military intervention
- flight of investors; damaged national image
- spread of disease and trauma

**Positive effects:** conflict can expose injustice, lead to **reform**, clarify issues and strengthen group solidarity when well managed.

## Ways of resolving conflict
| Method | Explanation |
|---|---|
| **dialogue / negotiation** | the parties **talk directly** to reach agreement |
| **mediation** | a **neutral third party** helps the parties reach their own agreement; he does not impose a decision |
| **conciliation** | a third party meets the sides, lowers tension and suggests terms |
| **arbitration** | a neutral arbitrator **hears both sides and gives a binding award** |
| **adjudication (litigation)** | settlement by the **courts** |
| **compromise** | each side gives up part of its demand |
| **collective bargaining** | negotiation between unions and employers |
| **traditional methods** | elders, chiefs, councils, age grades; oath-taking and reconciliation rites |
| **peace-keeping and peace enforcement** | neutral forces separate the combatants (UN, AU, ECOWAS) |
| **truth and reconciliation commissions** | uncover the truth and heal wounds (South Africa; the Oputa Panel) |
| **amnesty and disarmament** | e.g. the Niger Delta amnesty programme of 2009 |

Negotiation, mediation, conciliation and arbitration are together called **Alternative Dispute Resolution (ADR)**.

## Managing and preventing conflict
- **good governance**, justice and the rule of law
- **equitable distribution** of resources and appointments (federal character)
- **early-warning** systems and prompt response
- **tolerance**, civic and peace education
- inter-faith and inter-ethnic dialogue
- job creation and poverty reduction
- free and fair elections
- control of small arms; effective, neutral security agencies
- responsible media

## Styles of handling conflict
**avoiding**, **accommodating**, **competing**, **compromising** and **collaborating** — the last (win-win) usually gives the most lasting result.`,
    examples: `**Example 1.** Distinguish mediation from arbitration. *Answer:* A **mediator** helps the parties reach **their own** agreement; an **arbitrator** gives a **binding decision**.

**Example 2.** State three causes of conflict in Nigeria. *Answer:* **Competition for land and resources**, **struggle for political power**, and **religious intolerance**.

**Example 3.** Give two consequences of violent conflict. *Answer:* **Loss of lives** and **displacement of people**.`,
  },
  questions: [
    ["E", "A clash arising from incompatible interests between individuals or groups is", "conflict", "consensus", "co-operation", "integration", "Conflict is a struggle over opposed interests or goals."],
    ["E", "Settlement of a dispute by a court of law is", "adjudication", "mediation", "conciliation", "negotiation", "The court gives a judgment after hearing the case."],
    ["E", "A dispute between workers and their employer is", "an industrial conflict", "a communal conflict", "a religious conflict", "an international conflict", "It often takes the form of a strike."],
    ["M", "The method of conflict resolution in which a neutral third party gives a binding decision is", "arbitration", "mediation", "negotiation", "avoidance", "The arbitrator's award binds the parties."],
    ["M", "A neutral third party who helps disputants reach their own agreement without imposing a decision is a", "mediator", "judge", "arbitrator", "prosecutor", "Mediation leaves the decision to the parties."],
    ["M", "Which of these is a cause of conflict?", "Unequal distribution of resources", "Tolerance", "Dialogue", "Good governance", "Marginalisation breeds resentment."],
    ["M", "Direct discussion between the parties to a dispute with a view to reaching agreement is", "negotiation", "litigation", "arbitration", "peace enforcement", "No third party is needed."],
    ["H", "Negotiation, mediation, conciliation and arbitration are collectively known as", "alternative dispute resolution", "judicial review", "collective security", "separation of powers", "They are alternatives to litigation."],
    ["H", "The steps taken to control and limit a conflict that cannot be immediately ended constitute conflict", "management", "escalation", "avoidance", "provocation", "Management contains the conflict."],
    ["H", "The programme introduced by the Federal Government in 2009 to end militancy in the Niger Delta was the", "amnesty programme", "Structural Adjustment Programme", "War Against Indiscipline", "Operation Feed the Nation", "Militants were granted pardon in return for disarmament."],
  ],
  jamb: [
    ["M", "Persons forced by conflict to flee their homes but who remain within their own country are", "internally displaced persons", "refugees", "expatriates", "aliens", "Refugees have crossed an international border."],
    ["H", "The approach to conflict in which both parties work together for a solution that fully satisfies each is", "collaborating", "avoiding", "competing", "accommodating", "It produces a win-win outcome."],
  ],
};

export const peace: Topic = {
  title: "Peace Education",
  subtopics: ["Meaning of peace and peace education", "Types of peace", "The need for peace", "Ways of promoting peace"],
  objectives: ["Explain the meaning of peace and peace education", "Distinguish negative peace from positive peace", "Discuss the need for peace in society", "Identify ways by which peace can be promoted"],
  lesson: {
    title: "Building a Culture of Peace",
    summary: "What peace means, why every society needs it, and how citizens and governments can promote it.",
    minutes: 40,
    notes: `## Meaning
**Peace** is a state of **harmony, security and freedom from violence and fear**, in which people live together with justice and mutual respect, and settle their differences without force.

**Peace education** is the process of acquiring the **knowledge, values, attitudes and skills** needed to live in harmony with oneself, with others and with the environment, and to **prevent and resolve conflict non-violently**.

## Types of peace
| Type | Meaning |
|---|---|
| **negative peace** | the mere **absence of war or direct violence** — a ceasefire |
| **positive peace** | the **presence of justice, equity, human rights and well-being**; the removal of the root causes of conflict ("structural violence" such as poverty and discrimination) |
| **inner peace** | calm and contentment within a person |
| **social / communal peace** | harmony among the groups in a society |
| **international peace** | absence of war and presence of co-operation among states |

## Related ideas
- **peace-making** — diplomatic effort to bring warring parties to agreement
- **peace-keeping** — neutral forces deployed, with consent, to keep the sides apart
- **peace enforcement** — use of force to compel compliance
- **peace-building** — rebuilding institutions and relationships after conflict to prevent a return to violence

## The need for peace
1. **Protection of lives and property**.
2. **Economic development** — investment, trade and production thrive only in peace.
3. **Political stability** and the survival of democracy.
4. **National unity and integration** in a plural society.
5. **Social progress** — education and health services function.
6. Enjoyment of **fundamental human rights**.
7. Good **international image**; attraction of foreign investment and tourism.
8. Public funds go to development rather than security.
9. Cultural and religious life can flourish.

## Ways of promoting peace
### By individuals
- **tolerance** of other ethnic groups, religions and opinions
- **respect** for the rights of others; obedience to law
- **dialogue** rather than violence; readiness to forgive and compromise
- honesty; avoiding rumour and hate speech
- good neighbourliness and communal work

### By families, schools and communities
- teaching **moral and civic values**; peace clubs; sports and cultural exchanges
- role of **traditional and religious leaders** in mediation
- inter-faith and inter-ethnic councils
- community policing and neighbourhood watch

### By government
- **good governance**, justice and the **rule of law**
- **equitable distribution** of resources, amenities and appointments
- **free and fair elections**; respect for the constitution
- **poverty reduction and job creation**
- impartial security agencies; control of arms
- prompt and fair settlement of disputes; judicial commissions
- national orientation and unity programmes — e.g. the **NYSC**, unity schools, federal character
- respect for freedom of the press and of association

### By the international community
- **United Nations** — Security Council, peace-keeping operations, the International Court of Justice
- **African Union** Peace and Security Council; **ECOWAS** (ECOMOG)
- diplomacy, treaties, sanctions, disarmament and arms control
- humanitarian aid; the International Day of Peace (21 September)

## Agents of peace education
family, school, religious bodies, mass media, civil society organisations, traditional institutions and government agencies (e.g. the National Orientation Agency; the Institute for Peace and Conflict Resolution).

## Obstacles to peace
injustice and corruption; poverty; ethnic and religious bigotry; struggle for power; small arms; ignorance; foreign interference.`,
    examples: `**Example 1.** Distinguish negative peace from positive peace. *Answer:* **Negative peace** is the absence of war; **positive peace** is the presence of **justice and equity** that removes the causes of conflict.

**Example 2.** Give two reasons why peace is needed in a country. *Answer:* For **economic development** and **protection of lives and property**.

**Example 3.** State two ways government can promote peace. *Answer:* **Good governance and justice**, and **equitable distribution of resources**.`,
  },
  questions: [
    ["E", "A state of harmony and freedom from violence in a society is", "peace", "anarchy", "conflict", "tyranny", "Peace allows people to live together without fear."],
    ["E", "The process of acquiring the values and skills needed to live in harmony with others is", "peace education", "military training", "political campaigning", "indoctrination", "It teaches non-violent ways of settling differences."],
    ["E", "Which of these promotes peace in society?", "Tolerance", "Hate speech", "Discrimination", "Injustice", "Tolerance means accepting those who differ from us."],
    ["M", "The mere absence of war or direct violence is described as", "negative peace", "positive peace", "inner peace", "structural peace", "Underlying causes of conflict may still remain."],
    ["M", "Peace that includes justice, equity and respect for human rights is", "positive peace", "negative peace", "armed peace", "cold peace", "It removes the root causes of conflict."],
    ["M", "The deployment of neutral forces, with the consent of the parties, to keep warring sides apart is", "peace-keeping", "peace education", "arbitration", "colonisation", "UN and ECOMOG forces have played this role."],
    ["M", "Peace is necessary for economic development because", "investment and production thrive in a secure environment", "it increases military spending", "it encourages capital flight", "it closes markets", "Investors avoid areas of violence."],
    ["H", "The rebuilding of institutions and relationships after a conflict to prevent a return to violence is", "peace-building", "peace enforcement", "appeasement", "partition", "It addresses the long-term causes of conflict."],
    ["H", "Which of these government measures best promotes lasting peace in a plural society?", "Equitable distribution of resources and appointments", "Suppression of the press", "Rule by decree", "Favouring the majority group", "Fairness removes the sense of marginalisation."],
    ["H", "The scheme established in Nigeria in 1973 to foster unity among youths of different ethnic backgrounds is the", "National Youth Service Corps", "Operation Feed the Nation", "Universal Basic Education", "National Directorate of Employment", "The NYSC posts graduates to states other than their own."],
  ],
  jamb: [
    ["M", "The organ of the United Nations primarily responsible for the maintenance of international peace and security is the", "Security Council", "General Assembly", "Secretariat", "Economic and Social Council", "It can authorise sanctions and peace-keeping."],
    ["H", "Poverty, discrimination and exclusion that harm people without open fighting are described as", "structural violence", "direct violence", "civil disobedience", "passive resistance", "Positive peace requires their removal."],
  ],
};

export const interdependence: Topic = {
  title: "The Interdependence of Nations and Globalization",
  subtopics: ["Meaning of interdependence of nations", "Nigeria's international relations: economic, political, cultural and social", "Meaning and features of globalization", "Advantages and disadvantages of interaction among nations"],
  objectives: ["Explain the interdependence of nations", "Describe the economic, political, cultural and social relations of Nigeria with other nations", "Explain globalization and its features", "Identify the advantages and disadvantages of interaction among nations"],
  lesson: {
    title: "No Nation Is an Island",
    summary: "Why states depend on one another, how Nigeria relates to the world, and the gains and costs of globalization.",
    minutes: 40,
    notes: `## Interdependence of nations
**Interdependence** means that **nations rely on one another** to meet their needs. No country has all the resources, technology, markets and security it requires; each must **interact** with others. **International relations** is the study and practice of these interactions.

### Reasons for interdependence
- **unequal distribution of natural resources**
- differences in **technology** and skilled manpower
- need for **markets** and for goods not produced at home
- need for **capital, loans and aid**
- **security** — defence against aggression, terrorism and crime
- shared problems — disease, climate change, refugees
- need for diplomatic support and prestige

## Nigeria's international relations
| Area | Examples |
|---|---|
| **economic** | trade (crude oil exports; imports of machinery and refined products); membership of **OPEC**, **ECOWAS**, WTO and AfCFTA; foreign investment; loans from the **IMF, World Bank and African Development Bank**; aid and technical assistance |
| **political** | diplomatic missions (embassies and high commissions); membership of the **UN, AU, Commonwealth**; treaties; support for decolonisation and the fight against apartheid; peace-keeping; exchange of visits by heads of state |
| **cultural** | cultural agreements and festivals (**FESTAC '77**); exchange of artistes, films and music (Nollywood and Afrobeats abroad); scholarships and educational exchanges; language centres |
| **social** | sports (Olympics, World Cup, Commonwealth Games, AFCON); health co-operation (WHO, polio eradication); tourism; humanitarian relief; the **Technical Aid Corps** |
| **military** | joint training; defence pacts; purchase of equipment; peace-keeping under the UN and ECOMOG |

## Globalization
**Globalization** is the process by which the **countries of the world become increasingly interconnected and integrated** — economically, politically, culturally and technologically — so that events in one part quickly affect others. The world becomes a **"global village"**.

### Features
- rapid flow of **information** through the internet, satellite television and mobile phones
- **free movement of goods, services and capital** — trade liberalisation
- growth of **multinational corporations**
- integrated **financial markets**
- spread of **democracy**, human-rights norms and common standards
- increased **migration** and travel
- spread of a global popular **culture**
- powerful **international organisations** (WTO, IMF, World Bank)

### Agents
information and communication technology; multinational companies; international financial institutions; the media; improved transport.

## Advantages of interaction among nations
1. **Access to goods, services and technology** not available at home.
2. Wider **markets** for exports; foreign exchange.
3. **Foreign investment**, loans and aid; employment.
4. **Transfer of technology** and skills.
5. **Peace and security** through collective action.
6. Joint solutions to **global problems** — epidemics, terrorism, climate change.
7. **Cultural exchange** and mutual understanding.
8. Educational opportunities; faster spread of ideas.
9. Relief assistance in disasters.

## Disadvantages
1. **Economic dependence**; unfavourable terms of trade for exporters of raw materials.
2. **Dumping** of cheap goods that kills local industries.
3. **Debt burden** and conditionalities imposed by lenders — erosion of **sovereignty**.
4. **Cultural imperialism** — erosion of indigenous languages and values.
5. **Brain drain**.
6. Spread of **diseases**, crime, drugs, terrorism and cyber-crime.
7. **Interference** in internal affairs by powerful states.
8. Economic crises spread quickly from one country to others.
9. Widening gap between rich and poor nations.

## Challenges and opportunities for Nigeria
Nigeria must diversify its exports, develop technology and infrastructure, strengthen local industries and protect its culture in order to benefit from globalization — through ICT, remittances from the diaspora, the creative industry and regional trade.`,
    examples: `**Example 1.** Why are nations interdependent? *Answer:* Because **no nation has all the resources, technology and markets it needs**.

**Example 2.** Give one example each of Nigeria's economic and cultural relations. *Answer:* Economic — **membership of OPEC / export of crude oil**; cultural — **hosting FESTAC '77**.

**Example 3.** State one advantage and one disadvantage of globalization. *Answer:* Advantage — **transfer of technology**; disadvantage — **erosion of local culture**.`,
  },
  questions: [
    ["E", "The reliance of nations on one another to satisfy their needs is", "interdependence", "isolationism", "sovereignty", "neutrality", "No nation is self-sufficient."],
    ["E", "The process by which countries of the world become increasingly interconnected is", "globalization", "colonisation", "nationalisation", "federalism", "It turns the world into a 'global village'."],
    ["E", "Nigeria's membership of OPEC is an example of its", "economic relations", "cultural relations", "sporting relations", "religious relations", "OPEC deals with petroleum production and prices."],
    ["M", "A major reason for the interdependence of nations is", "unequal distribution of natural resources", "equal levels of technology", "the absence of trade", "identical cultures", "Countries must obtain what they lack from others."],
    ["M", "The hosting of FESTAC '77 by Nigeria was an aspect of its", "cultural relations", "military relations", "economic sanctions", "boundary adjustment", "It was a festival of black and African arts and culture."],
    ["M", "Which of these is a major agent of globalization?", "Information and communication technology", "Subsistence farming", "Trade by barter", "Local chieftaincy", "The internet and satellites link the world instantly."],
    ["M", "Nigeria maintains political relations with other countries mainly through", "embassies and high commissions", "local government councils", "customary courts", "marketing boards", "Diplomatic missions represent the country abroad."],
    ["H", "A disadvantage of globalization for developing countries is", "the erosion of indigenous cultures", "access to wider markets", "transfer of technology", "inflow of foreign investment", "Foreign values and products displace local ones."],
    ["H", "The sale of goods in a foreign market at prices below their cost of production is", "dumping", "devaluation", "embargo", "protectionism", "It harms local industries in the importing country."],
    ["H", "The conditions attached to loans from international financial institutions are often criticised for", "eroding the sovereignty of borrowing states", "increasing their exports of machinery", "ending brain drain", "abolishing foreign debt", "Borrowers must adopt policies dictated by the lenders."],
  ],
  jamb: [
    ["M", "The scheme under which Nigeria sends professionals to assist other African, Caribbean and Pacific countries is the", "Technical Aid Corps", "National Youth Service Corps", "Peace Corps of Nigeria", "Directorate of Employment", "It was established in 1987."],
    ["H", "Diplomatic missions exchanged between Commonwealth countries are headed by", "High Commissioners", "Ambassadors", "Consuls-General only", "Chargés d'affaires only", "Among Commonwealth members the mission is a High Commission."],
  ],
};

export const foreignPolicy2: Topic = {
  title: "Nigeria's Foreign Policy II: Africa as Centrepiece and Non-Alignment",
  subtopics: ["Origin of Africa as the centrepiece of Nigeria's foreign policy", "Reasons for and demonstration of the Africa-centred policy", "Meaning and objectives of non-alignment", "Problems of non-alignment"],
  objectives: ["Explain the origin of Africa as the centrepiece of Nigeria's foreign policy", "Justify the adoption of the policy and show how Nigeria has demonstrated it", "Explain non-alignment and its objectives", "Outline the problems associated with non-alignment"],
  lesson: {
    title: "Africa First; Neither East nor West",
    summary: "Two pillars of Nigeria's external relations: commitment to Africa and the policy of non-alignment.",
    minutes: 40,
    notes: `## Africa as the centrepiece
### Meaning
The policy holds that **Africa is the primary concern of Nigeria's foreign policy**: Nigeria gives first attention to the freedom, unity, peace and development of the African continent, beginning with West Africa.

### Origin
- At independence, Prime Minister **Tafawa Balewa** declared in 1960 that Nigeria would pay special attention to Africa.
- The policy was sharpened under the **Murtala Mohammed / Obasanjo** regime (1975–79). Following the report of the **Adedeji Committee** on the review of foreign policy (1976), Africa was formally proclaimed the **centrepiece**. Murtala's speech to the OAU in January 1976 ("Africa has come of age") and Nigeria's recognition of the **MPLA** government in Angola marked the new assertiveness.
- Later governments spoke of "concentric circles" — Nigeria, then West Africa, then Africa, then the world — while keeping Africa central. The principle is reflected in **section 19 of the 1999 Constitution** (promotion of African integration and unity).

### Reasons for adopting the policy
1. **Geography** — Nigeria is in Africa; its security depends on its neighbours.
2. **Size and resources** — the most populous black nation, with oil wealth, expected to lead.
3. **Racial and historical ties**; the shared experience of colonialism.
4. Commitment to **decolonisation** and the ending of **apartheid**.
5. Desire for **African unity** and regional **economic integration**.
6. **National security** and stability of the sub-region.
7. Desire for **leadership and prestige** in world affairs.

### How Nigeria has demonstrated it
- **Decolonisation:** moral, diplomatic, financial and material support for liberation movements in **Angola, Mozambique, Zimbabwe, Namibia** and Guinea-Bissau.
- **Anti-apartheid struggle:** chaired the UN Special Committee against Apartheid; set up the Southern Africa Relief Fund; **boycotted the 1976 Olympic Games** and the 1978 Commonwealth Games; **nationalised British Petroleum (1979)** to press Britain over Zimbabwe; was regarded as a "frontline state".
- **OAU / AU:** founding member; large financial contributor; helped establish the AU and **NEPAD**.
- **ECOWAS:** co-founder (1975); hosts the Commission in Abuja.
- **Peace-keeping:** Congo (1960), Chad (1979–82), **Liberia and Sierra Leone through ECOMOG**, Darfur, Mali, The Gambia.
- **Aid:** financial assistance, concessionary oil sales, and the **Technical Aid Corps (1987)**.
- **Mediation** in African disputes; restoration of democracy in São Tomé and Príncipe and The Gambia.

### Criticisms
Heavy cost in lives and money with **little economic return**; neglect of domestic needs; ingratitude and hostility (e.g. xenophobic attacks on Nigerians).

## Non-alignment
### Meaning
**Non-alignment** is the policy of **not joining either of the two power blocs** of the Cold War — the capitalist **West** led by the United States (NATO) or the communist **East** led by the Soviet Union (Warsaw Pact) — and of judging each international issue **on its merits**. It is not neutrality or isolation: non-aligned states take active positions.

### Origin
The **Bandung Conference (1955)** of Asian and African states laid the foundation; the **Non-Aligned Movement (NAM)** was formed at **Belgrade in 1961**, led by **Tito** (Yugoslavia), **Nehru** (India), **Nasser** (Egypt), **Nkrumah** (Ghana) and **Sukarno** (Indonesia). Nigeria adopted non-alignment at independence.

### Aims and objectives
1. To **avoid entanglement** in the Cold War and military alliances.
2. To safeguard **independence and sovereignty**.
3. To promote **world peace**, disarmament and peaceful coexistence.
4. To oppose **colonialism, neo-colonialism, racism and apartheid**.
5. To obtain **aid and trade from both blocs**.
6. To give the newly independent states a **collective voice** in world affairs.
7. To promote economic co-operation among developing countries and a fairer world economic order.

### Problems of non-alignment
1. **Economic dependence** on the powers made true independence difficult — Nigeria's trade and aid ties were overwhelmingly with the West.
2. **Colonial and military ties** — e.g. the Anglo-Nigerian Defence Pact (abrogated 1962); many members hosted foreign bases.
3. **Lack of unity** among members with differing ideologies and interests.
4. No **military or economic power** to enforce decisions.
5. **Conflicts among members** (Iran–Iraq, India–Pakistan).
6. No permanent secretariat or binding machinery.
7. The **end of the Cold War (1991)** removed the two-bloc setting and made the movement's purpose less clear.
8. Pressure and manipulation by the great powers.`,
    examples: `**Example 1.** Under which regime was Africa formally declared the centrepiece of Nigeria's foreign policy? *Answer:* the **Murtala Mohammed / Obasanjo** regime, after the Adedeji Committee report of 1976.

**Example 2.** Give two ways Nigeria has demonstrated the Africa-centred policy. *Answer:* **Support for liberation movements in southern Africa** and **peace-keeping in Liberia and Sierra Leone**.

**Example 3.** What is non-alignment? *Answer:* The policy of **not joining either the Western or the Eastern power bloc** and judging issues on their merits.`,
  },
  questions: [
    ["E", "The centrepiece of Nigeria's foreign policy is", "Africa", "Europe", "Asia", "the Middle East", "Nigeria gives priority to African affairs."],
    ["E", "The policy of not joining either of the two Cold War power blocs is", "non-alignment", "isolationism", "imperialism", "appeasement", "Issues are judged on their merits."],
    ["E", "Nigeria's peace-keeping role in Liberia was carried out through", "ECOMOG", "NATO", "the Warsaw Pact", "the Commonwealth Secretariat", "The ECOWAS Monitoring Group."],
    ["M", "The committee whose report led to the formal adoption of Africa as the centrepiece of Nigeria's foreign policy was the", "Adedeji Committee", "Willink Commission", "Udoji Commission", "Aboyade Committee", "It reviewed Nigeria's foreign policy in 1976."],
    ["M", "The Non-Aligned Movement was formally established in 1961 at", "Belgrade", "Bandung", "Addis Ababa", "Lagos", "The 1955 Bandung Conference had prepared the ground."],
    ["M", "Nigeria nationalised British Petroleum in 1979 in order to", "pressure Britain over the independence of Zimbabwe", "join the Warsaw Pact", "leave the Commonwealth", "end oil production", "It was part of Nigeria's support for liberation in southern Africa."],
    ["M", "Which of these is an objective of non-alignment?", "Safeguarding national independence and sovereignty", "Joining NATO", "Supporting colonialism", "Establishing foreign military bases", "Non-aligned states avoided entanglement with the blocs."],
    ["H", "A major problem of Nigeria's non-alignment policy was", "its economic dependence on Western countries", "its membership of the Warsaw Pact", "its refusal to join the United Nations", "its lack of diplomatic missions", "Trade and aid ties tilted Nigeria towards the West."],
    ["H", "The defence agreement with Britain that was abrogated in 1962 because it contradicted non-alignment was the", "Anglo-Nigerian Defence Pact", "Lagos Plan of Action", "Lomé Convention", "Treaty of Versailles", "Students and the opposition protested against it."],
    ["H", "Nigeria boycotted the 1976 Olympic Games in Montreal in protest against", "sporting links with apartheid South Africa", "the Vietnam War", "the formation of ECOWAS", "the oil embargo", "African states protested New Zealand's rugby tour of South Africa."],
  ],
  jamb: [
    ["M", "Which of the following leaders was a founding figure of the Non-Aligned Movement?", "Josip Broz Tito", "Winston Churchill", "Joseph Stalin", "Harry Truman", "Tito hosted the first summit in Belgrade."],
    ["H", "Nigeria's recognition of the MPLA government in 1975 was in support of the independence of", "Angola", "Namibia", "Zimbabwe", "Mozambique", "It marked a more assertive African policy under Murtala Mohammed."],
  ],
};

export const mdgsNepad: Topic = {
  title: "Millennium Development Goals (MDGs) and NEPAD",
  subtopics: ["Meaning of the MDGs and the eight goals", "Achievements of the MDGs by 2015", "Meaning and origin of NEPAD", "Aims of NEPAD"],
  objectives: ["Explain the meaning of the MDGs and list the eight goals", "Identify the achievements of the MDGs by 2015", "Describe NEPAD and its origin", "Outline the aims of NEPAD"],
  lesson: {
    title: "Global and African Development Agendas",
    summary: "The UN's eight development goals for 2015 and Africa's own partnership for development.",
    minutes: 40,
    notes: `## The Millennium Development Goals
The **MDGs** were **eight international development goals** adopted by world leaders in the **Millennium Declaration** at the **United Nations Millennium Summit in September 2000**, to be achieved by **2015**.

### The eight goals
1. **Eradicate extreme poverty and hunger.**
2. **Achieve universal primary education.**
3. **Promote gender equality and empower women.**
4. **Reduce child mortality.**
5. **Improve maternal health.**
6. **Combat HIV/AIDS, malaria and other diseases.**
7. **Ensure environmental sustainability.**
8. **Develop a global partnership for development.**

## Achievements by 2015
### Worldwide
- The proportion of people in **extreme poverty** was **more than halved** (from about 1.9 billion people in 1990 to about 836 million in 2015).
- **Primary school enrolment** in developing regions reached about **91%**; many more girls in school.
- The **under-five mortality rate fell by more than half**.
- **Maternal mortality** fell by about **45%**.
- **New HIV infections** fell by about 40%; malaria deaths fell sharply; millions received antiretroviral treatment.
- Billions gained access to **improved drinking water**.
- Aid from developed countries increased; debt relief was granted to poor countries.

### In Nigeria
- **Debt relief** (2005) freed funds for MDG projects, managed by the Office of the Senior Special Assistant to the President on MDGs through **conditional grants** to states and local governments.
- Great progress against **polio** and **guinea worm**; wider immunisation.
- Improved school enrolment (Universal Basic Education); more women in public life.
- Reduction in the prevalence of HIV.
- But Nigeria **did not meet most targets** — poverty, maternal and child mortality remained high.

### Problems
poverty and corruption; inadequate funding; weak data; insecurity; rapid population growth; poor implementation.

### After 2015
The MDGs were succeeded by the **17 Sustainable Development Goals (SDGs)**, to be achieved by **2030**.

## NEPAD
**NEPAD** — the **New Partnership for Africa's Development** — is a programme of the African Union for the **economic and social renewal of Africa**, designed and owned by Africans.

### Origin
- It merged two plans: the **Millennium Partnership for the African Recovery Programme (MAP)** — promoted by **Thabo Mbeki** (South Africa), **Olusegun Obasanjo** (Nigeria) and **Abdelaziz Bouteflika** (Algeria) — and the **OMEGA Plan** of **Abdoulaye Wade** (Senegal). **Hosni Mubarak** of Egypt was also an initiator.
- It was adopted at the **OAU summit in Lusaka, Zambia, in July 2001** (first as the New African Initiative) and named NEPAD in October 2001 in Abuja.
- Its secretariat was in **Midrand, South Africa**. In **2018** it was transformed into the **African Union Development Agency (AUDA-NEPAD)**.

### Aims
1. To **eradicate poverty** in Africa.
2. To place African countries on a path of **sustainable growth and development**.
3. To **halt the marginalisation of Africa** in the globalization process and integrate it beneficially into the world economy.
4. To **accelerate the empowerment of women**.

### Principles and priorities
- **African ownership and leadership**; partnership among Africans and with the wider world.
- **Good governance**, democracy, peace and security as conditions for development.
- **Regional integration** and infrastructure — roads, energy, ICT.
- **Agriculture and food security** (CAADP), health, education, science and technology.
- Mobilising resources: more investment, market access, debt relief.

### The African Peer Review Mechanism (APRM)
Established in **2003**, it is a **voluntary self-monitoring** system by which African states review one another's performance in democracy, political, economic and corporate governance.

### Achievements and problems
*Achievements:* raised Africa's profile with donors; infrastructure and agricultural programmes; peer reviews of many states; e-schools initiative.
*Problems:* dependence on foreign funding; weak commitment by leaders; conflicts and bad governance; low public awareness; overlapping regional bodies.`,
    examples: `**Example 1.** In what year and at what meeting were the MDGs adopted? *Answer:* In **September 2000** at the **UN Millennium Summit**.

**Example 2.** State the second MDG. *Answer:* **Achieve universal primary education**.

**Example 3.** What do the letters NEPAD stand for? *Answer:* **New Partnership for Africa's Development**.`,
  },
  questions: [
    ["E", "The Millennium Development Goals were adopted in the year", "2000", "1990", "2015", "1975", "World leaders adopted them at the UN Millennium Summit."],
    ["E", "The number of Millennium Development Goals was", "eight", "ten", "seventeen", "five", "There were eight goals with a 2015 deadline."],
    ["E", "NEPAD stands for", "New Partnership for Africa's Development", "National Economic Plan for African Democracy", "New Programme for African Decolonisation", "Nigerian Economic Policy and Development", "It is an African Union development programme."],
    ["M", "The target year for achieving the MDGs was", "2015", "2020", "2030", "2010", "The goals were set for a fifteen-year period."],
    ["M", "The first Millennium Development Goal was to", "eradicate extreme poverty and hunger", "achieve universal primary education", "improve maternal health", "ensure environmental sustainability", "Poverty and hunger headed the list."],
    ["M", "NEPAD was adopted by African leaders in 2001 at the OAU summit held in", "Lusaka", "Lagos", "Cairo", "Dakar", "The summit took place in Zambia."],
    ["M", "The goals that succeeded the MDGs in 2015 are the", "Sustainable Development Goals", "Structural Adjustment Goals", "Lagos Plan Goals", "Vision 2010 Goals", "The 17 SDGs run to 2030."],
    ["H", "The voluntary self-monitoring instrument by which African states assess one another's governance under NEPAD is the", "African Peer Review Mechanism", "Peace and Security Council", "Pan-African Parliament", "African Court of Justice", "It was established in 2003."],
    ["H", "Which of these was NOT one of the Millennium Development Goals?", "Promotion of nuclear disarmament", "Reduction of child mortality", "Promotion of gender equality", "Combating HIV/AIDS and malaria", "Disarmament was not among the eight goals."],
    ["H", "Which of these leaders was an initiator of NEPAD?", "Thabo Mbeki", "Kwame Nkrumah", "Julius Nyerere", "Haile Selassie", "Mbeki, Obasanjo, Bouteflika, Wade and Mubarak were its initiators."],
  ],
  jamb: [
    ["M", "In Nigeria, savings from the 2005 debt relief were channelled largely into", "MDG-related projects", "the purchase of military aircraft", "the creation of new states", "payment of external loans", "The MDGs office managed the debt-relief gains."],
    ["H", "In 2018 NEPAD was transformed into the", "African Union Development Agency", "African Continental Free Trade Area", "African Development Bank", "Economic Commission for Africa", "It is now known as AUDA-NEPAD."],
  ],
};

export const eGovernment: Topic = {
  title: "E-Government, Leadership and Followership",
  subtopics: ["Meaning and examples of e-government", "Advantages and disadvantages of e-government", "Leadership and followership", "Qualities of a good leader; roles of leaders and followers"],
  objectives: ["Explain e-government and give examples", "Discuss the advantages and disadvantages of e-government", "Describe leadership and followership", "State the qualities of a good leader and the roles of leaders and followers in government"],
  lesson: {
    title: "Governing Electronically; Leading and Following",
    summary: "The use of information technology in government, and the partnership between leaders and the led.",
    minutes: 40,
    notes: `## E-government
**E-government (electronic government)** is the use of **information and communication technology** — computers, the internet, mobile phones — by government to **deliver services, provide information and interact** with citizens, businesses and other arms of government.

### Forms
| Form | Meaning |
|---|---|
| **G2C** — government to citizen | online services and information for the public |
| **G2B** — government to business | company registration, tax, procurement |
| **G2G** — government to government | data sharing among ministries and tiers |
| **G2E** — government to employee | payroll and personnel systems |

### Examples in Nigeria
- **JAMB** online registration and computer-based testing; WAEC and NECO result checking
- **INEC** continuous voter registration, the **BVAS** accreditation device and online result viewing
- **National Identification Number (NIN)** by NIMC; the **Bank Verification Number (BVN)**
- **e-passport** and online visa applications (Immigration)
- online **tax** filing (FIRS TaxPro Max); **Treasury Single Account (TSA)** and Remita payments
- **IPPIS** — integrated payroll for federal workers
- **CAC** online company registration; e-procurement
- government websites, e-mail, social-media handles and video-conferencing
- online driver's licence and vehicle registration; e-customs

### Advantages
1. **Faster, more convenient** service — available at all hours.
2. **Reduces cost** of administration and paperwork.
3. **Transparency and accountability**; reduces corruption and "ghost workers".
4. Wider **access to information**.
5. Greater **citizen participation** — feedback, petitions, e-voting.
6. Better **record keeping** and planning.
7. Increases **revenue** by blocking leakages.
8. Reduces the need to travel and queue.

### Disadvantages
1. **High cost** of equipment and maintenance.
2. **Poor infrastructure** — unstable electricity and internet.
3. **Digital divide** — the rural, poor and illiterate are excluded.
4. **Cyber-crime**, hacking and threats to **privacy**.
5. Loss of **jobs** for clerical workers.
6. **System failure** disrupts services.
7. Shortage of skilled personnel; resistance to change.

## Leadership
**Leadership** is the **ability to influence, direct and guide** a group of people towards the achievement of **common goals**. A **leader** is the person who exercises it.

### Types
**democratic** (consults); **autocratic** (commands); **laissez-faire** (leaves members free); **charismatic**; **traditional**; **bureaucratic**.

### Qualities of a good leader
honesty and **integrity**; **vision**; **accountability and transparency**; **courage** and decisiveness; **fairness and justice**; **selflessness**; humility and accessibility; good **communication**; competence and knowledge; **tolerance**; self-discipline; respect for the rule of law; leading by **example**.

## Followership
**Followership** is the **willingness and ability to support and co-operate with a leader** in pursuing agreed goals. **Followers** are the members who accept the leader's guidance. Leaders exist only because there are followers; good leadership needs good followership.

### Qualities of good followers
loyalty; **obedience to law**; co-operation; honesty; **constructive criticism**; active participation; patriotism; discipline; tolerance.

## Roles in politics and government
### Leaders
- provide **vision and direction**; formulate and implement **policies**
- **maintain law and order** and defend the state
- provide **welfare and amenities**; manage resources prudently
- **unite** the people; treat all sections fairly
- **represent** the people at home and abroad
- obey the constitution; be **accountable**; hand over power peacefully
- set a moral example

### Followers
- **obey laws** and pay **taxes**
- **vote** and take part in public affairs
- **support** good policies and **criticise constructively**
- **hold leaders accountable** — petitions, the press, peaceful protest, recall
- protect public property; report crime
- reject bribery, thuggery and the selling of votes
- defend the nation; serve when called

## Consequences of bad leadership and followership
corruption; poverty; insecurity; injustice; electoral violence; apathy; underdevelopment; instability and military intervention.`,
    examples: `**Example 1.** Give two examples of e-government in Nigeria. *Answer:* **JAMB online registration and CBT**, and the **National Identification Number** system.

**Example 2.** State three qualities of a good leader. *Answer:* **Integrity, vision and accountability**.

**Example 3.** Mention two roles of followers in a democracy. *Answer:* **Voting** and **holding leaders accountable** through constructive criticism.`,
  },
  questions: [
    ["E", "The use of information and communication technology by government to deliver services is", "e-government", "e-commerce", "e-learning", "e-banking", "It is short for electronic government."],
    ["E", "The ability to influence and guide people towards a common goal is", "leadership", "followership", "citizenship", "partisanship", "A leader directs the efforts of a group."],
    ["E", "Which of these is an example of e-government in Nigeria?", "Online registration for the UTME", "Town-crier announcements", "Trade by barter", "Communal labour", "JAMB registration is done electronically."],
    ["M", "An advantage of e-government is that it", "promotes transparency and reduces corruption", "widens the digital divide", "encourages cyber-crime", "depends on constant electricity", "Electronic records make transactions traceable."],
    ["M", "A leader who consults the members before taking decisions is", "democratic", "autocratic", "laissez-faire", "despotic", "Members take part in decision making."],
    ["M", "The willingness to support and co-operate with a leader in pursuing agreed goals is", "followership", "dictatorship", "opposition", "apathy", "Good leadership requires good followership."],
    ["M", "A disadvantage of e-government in developing countries is", "exclusion of those without access to technology", "faster service delivery", "reduced paperwork", "easier access to information", "The digital divide leaves out the rural poor."],
    ["H", "Online filing of company tax returns with the revenue service is an example of", "government-to-business e-government", "government-to-government e-government", "e-commerce between firms", "government-to-employee service", "The service links government with businesses."],
    ["H", "The electronic system introduced to centralise the payroll of federal civil servants and eliminate ghost workers is", "IPPIS", "BVAS", "NIN", "CBT", "The Integrated Payroll and Personnel Information System."],
    ["H", "Which of these is a role of followers in a democracy?", "Holding leaders accountable through constructive criticism", "Formulating national policies", "Commanding the armed forces", "Assenting to bills", "Citizens check their leaders by lawful means."],
  ],
  jamb: [
    ["M", "A leadership style in which the leader takes all decisions alone and demands obedience is", "autocratic", "democratic", "laissez-faire", "participatory", "Power is concentrated in the leader."],
    ["H", "The device used by INEC to verify voters by fingerprint or face on election day is the", "BVAS", "TSA", "IPPIS", "GIFMIS", "The Bimodal Voter Accreditation System."],
  ],
};
