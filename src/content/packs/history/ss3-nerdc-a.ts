import type { PackTopic } from "../types";

/** SS3 Nigerian History — NERDC 2025 topics for the first and second terms (weeks are set in ss3.ts). */
type Topic = Omit<PackTopic, "week">;

export const opec: Topic = {
  title: "Nigeria and OPEC",
  subtopics: ["Formation and aims of OPEC", "Nigeria's membership and role", "Contributions to oil policies", "Benefits and challenges of membership"],
  objectives: ["Outline the formation and aims of OPEC", "Describe Nigeria's role in OPEC", "Explain Nigeria's contributions to OPEC's oil policies", "Assess the benefits and challenges of Nigeria's membership"],
  lesson: {
    title: "Nigeria in the Oil Producers' Organisation",
    summary: "How Nigeria came to join OPEC, what it has done there, and what membership has meant.",
    minutes: 40,
    notes: `## Formation of OPEC
The **Organization of the Petroleum Exporting Countries (OPEC)** was founded at the **Baghdad Conference, 10–14 September 1960**, by **Iran, Iraq, Kuwait, Saudi Arabia and Venezuela**. It was a reaction to the unilateral **cutting of posted oil prices** by the great international oil companies (the "Seven Sisters") in 1959 and 1960, which reduced the revenues of producing countries. Its headquarters, first in Geneva, moved to **Vienna** in 1965.

Later members included Qatar, Indonesia, Libya, the United Arab Emirates, Algeria, **Nigeria**, Ecuador, Gabon, Angola, Equatorial Guinea and Congo; some have since left or suspended membership.

### Aims
1. To **co-ordinate and unify the petroleum policies** of member countries.
2. To secure **fair and stable prices** for producers.
3. To ensure an **efficient, economic and regular supply** of petroleum to consuming nations.
4. To ensure a **fair return on capital** to those investing in the industry.
5. To safeguard the interests of members **individually and collectively**.

### Organs
- **The Conference** — supreme authority; oil ministers of member states.
- **The Board of Governors** — manages the organisation.
- **The Secretariat** — headed by the **Secretary-General**, in Vienna.
- **The Economic Commission Board**; the **OPEC Fund for International Development**.

## Nigeria's membership
Oil was found at **Oloibiri in 1956** and exported from **1958**. After the civil war production rose sharply, and Nigeria joined OPEC in **July 1971** as its **eleventh member**, under General Gowon. In line with OPEC's resolution urging members to **take part in oil operations**, Nigeria set up the **Nigerian National Oil Corporation (1971)**, acquired growing shares in the oil companies' concessions, and created the **NNPC in 1977**.

## Nigeria's role and contributions
- **Leadership:** Nigerians have served as **Secretary-General** — **Chief M. O. Feyide** (1975–76), **Dr Rilwanu Lukman** (1995–2000) and **Mohammed Sanusi Barkindo** (2016–2022) — and as **President of the OPEC Conference** on several occasions.
- **Hosting** of ministerial conferences, in Lagos and later Abuja.
- **Moderating voice:** Nigeria has often mediated between "price hawks" and moderates, and between Arab and non-Arab members.
- **Support for collective policies:** the price rises of **1973–74**, the **quota system** from 1982, and production cuts to defend prices, including co-operation with non-OPEC producers (**OPEC+**, from 2016).
- **Participation and nationalisation:** Nigeria's acquisition of equity in oil companies, and the **nationalisation of British Petroleum's assets (1979)**, reflected OPEC's goal of national control over resources.
- **African solidarity:** concessionary oil sales to African states; support for the OPEC Fund's loans to poor countries.

## Benefits of membership
1. **Higher and more stable prices** — the quadrupling of prices in 1973–74 produced Nigeria's **oil boom**.
2. **Greater revenue** for development plans, infrastructure and state creation.
3. **Bargaining power** against multinational oil companies; better terms on taxes and royalties.
4. **Control of the industry** — participation agreements and the growth of the NNPC.
5. **Access to information, research and training**.
6. **International prestige** and influence; a platform in world economic diplomacy.
7. Loans and grants through the **OPEC Fund**.

## Challenges
1. **Production quotas** limit how much Nigeria may produce, even when it needs revenue.
2. **Quota-busting** by members, including Nigeria, weakens the organisation.
3. **Price instability** — the collapse of the early 1980s, 1986, 1998, 2014 and 2020 brought economic crisis.
4. **Over-dependence on oil** and neglect of agriculture.
5. In recent years Nigeria has been **unable to meet its quota** because of oil theft, vandalism and under-investment.
6. **Differences among members** in size, needs and politics.
7. **Competition** from non-OPEC producers, shale oil and alternative energy.
8. Hostility of consuming countries to OPEC as a cartel.

## Assessment
OPEC membership gave Nigeria wealth and standing; whether the wealth was well used is another matter. The lesson of history is that oil revenue cannot substitute for a diversified, productive economy.`,
    examples: `**Example 1.** When did Nigeria join OPEC? *Answer:* In **July 1971**, as its eleventh member.

**Example 2.** Name two Nigerians who have served as OPEC Secretary-General. *Answer:* **Dr Rilwanu Lukman** and **Mohammed Barkindo** (also Chief M. O. Feyide).

**Example 3.** State one benefit and one challenge of OPEC membership for Nigeria. *Answer:* Benefit — **higher oil revenue**; challenge — **production quotas** limit output.`,
  },
  questions: [
    ["E", "OPEC was founded in 1960 at a conference held in", "Baghdad", "Vienna", "Lagos", "Geneva", "Five oil-exporting countries met in the Iraqi capital."],
    ["E", "Nigeria became a member of OPEC in", "1971", "1960", "1956", "1979", "It joined as the eleventh member."],
    ["E", "The supreme organ of OPEC is the", "Conference", "Secretariat", "Board of Governors", "Economic Commission Board", "It consists of the oil ministers of member states."],
    ["M", "OPEC was formed mainly in reaction to", "price cuts imposed by international oil companies", "the Arab–Israeli war of 1973", "the discovery of oil in Nigeria", "the formation of the United Nations", "Producers lost revenue when posted prices were cut in 1959–60."],
    ["M", "The Nigerian who served as OPEC Secretary-General from 2016 to 2022 was", "Mohammed Barkindo", "Rilwanu Lukman", "M. O. Feyide", "Jibril Aminu", "He led the organisation during the OPEC+ agreements."],
    ["M", "A major benefit Nigeria derived from OPEC in the 1970s was", "the oil boom that followed higher prices", "the end of oil exploration", "free military equipment", "membership of the Security Council", "Prices quadrupled in 1973–74."],
    ["M", "OPEC regulates the supply of crude oil mainly through", "production quotas", "import licences", "customs duties", "exchange control", "Each member is assigned a ceiling."],
    ["H", "In line with OPEC's policy of state participation, Nigeria established in 1971 the", "Nigerian National Oil Corporation", "Nigerian Ports Authority", "Central Bank of Nigeria", "Petroleum Trust Fund", "It later merged with the ministry to form the NNPC in 1977."],
    ["H", "A challenge of OPEC membership for Nigeria is that", "quotas may restrict output when revenue is needed", "oil prices never change", "Nigeria cannot attend conferences", "it forbids refining", "Production ceilings bind members."],
    ["H", "Nigeria's nationalisation of British Petroleum's assets occurred in", "1979", "1971", "1960", "1986", "It was done under the Obasanjo military government over Zimbabwe."],
  ],
  jamb: [
    ["M", "The headquarters of OPEC was moved in 1965 from Geneva to", "Vienna", "Baghdad", "Riyadh", "Caracas", "The secretariat has remained in Austria since then."],
    ["H", "The co-operation between OPEC and non-member producers such as Russia from 2016 is known as", "OPEC+", "OAPEC", "the Seven Sisters", "the Gulf Co-operation Council", "It co-ordinates production cuts beyond OPEC."],
  ],
};

export const foreignPolicyRecord: Topic = {
  title: "Nigeria's Foreign Policy: Achievements, Challenges and Criticisms",
  subtopics: ["Achievements of Nigeria's foreign policy", "Challenges facing Nigeria's foreign policy", "Criticisms of the policy", "Towards a more effective foreign policy"],
  objectives: ["State the achievements of Nigeria's foreign policy since 1960", "Identify the challenges facing it", "Evaluate the criticisms made of it", "Suggest ways of making it more effective"],
  lesson: {
    title: "Judging Nigeria's Foreign Policy",
    summary: "What Nigeria's external relations have accomplished since independence, and where they have fallen short.",
    minutes: 40,
    notes: `## Achievements
### 1. Decolonisation and the end of apartheid
Nigeria gave diplomatic, financial and material support to liberation movements in **Angola, Mozambique, Guinea-Bissau, Zimbabwe (1980), Namibia (1990)** and **South Africa (1994)**. It chaired the **UN Special Committee against Apartheid** for many years and was treated as a "frontline state".

### 2. African unity and regional integration
A founding member of the **OAU (1963)** — Nigeria's moderate, gradualist view prevailed — and of the **African Union (2002)**; a principal architect of **ECOWAS (1975)**, which it hosts; a promoter of **NEPAD**.

### 3. Peace-keeping
Since the **Congo (1960)** Nigeria has taken part in dozens of UN, AU and ECOWAS missions — Lebanon, Chad, **Liberia and Sierra Leone (ECOMOG)**, Darfur, Mali, The Gambia — earning respect as one of the largest contributors of troops.

### 4. Standing in international organisations
- **Non-permanent member of the UN Security Council** five times (1966–67, 1978–79, 1994–95, 2010–11, 2014–15).
- **Joseph Garba** (1989) and **Tijjani Muhammad-Bande** (2019) served as **President of the UN General Assembly**.
- **Chief Emeka Anyaoku** was **Commonwealth Secretary-General (1990–2000)**; Nigeria hosted the Commonwealth summit in **2003**.
- Nigerians have headed OPEC, the African Development Bank and the World Trade Organization.

### 5. Technical assistance
The **Technical Aid Corps (1987)** sends Nigerian professionals to African, Caribbean and Pacific states.

### 6. Peaceful settlement of disputes
Acceptance of the **International Court of Justice ruling (2002)** on **Bakassi**, and its handover to Cameroon under the **Green Tree Agreement (2006)**, avoided war.

### 7. Economic diplomacy
The **debt relief of 2005–06** from the Paris Club; attraction of foreign investment; membership of the D-8, G-77 and AfCFTA.

### 8. Restoration of democracy abroad
Reinstatement of President Kabbah in Sierra Leone (1998); reversal of coups in São Tomé and Príncipe (2003); pressure that removed Yahya Jammeh in The Gambia (2017).

## Challenges
1. **Economic weakness** — dependence on oil, debt and poverty limit influence.
2. **Domestic instability** — coups, civil war, insurgency and banditry divert attention and weaken credibility.
3. **Image problems** — corruption, fraud and drug trafficking; harassment of Nigerians abroad.
4. **Military rule and human-rights abuses** — after the execution of **Ken Saro-Wiwa** and eight others (November 1995), Nigeria was **suspended from the Commonwealth** and treated as a **pariah state** until 1999.
5. **Francophone rivalry** and French influence in West Africa.
6. **Inconsistency** — policies change with each government.
7. Poor funding of **missions abroad**; weak research and planning.
8. **Border problems** — smuggling, illegal migration, arms.
9. Withdrawal of Sahel states from ECOWAS and a wave of coups in the region.

## Criticisms
- **"Father Christmas" diplomacy** — much spent on Africa with **little economic return**; beneficiaries do not reciprocate (e.g. xenophobic attacks on Nigerians in South Africa).
- **Neglect of citizens** at home and of Nigerians abroad — hence the later call for **"citizen diplomacy"** (2007).
- **Non-alignment in name only** — close dependence on the West.
- The **cost of ECOMOG** in lives and money was never properly accounted for.
- **Elitist** — made by a few without public debate.
- **Reactive** rather than planned; national interest poorly defined.
- The ceding of **Bakassi** is criticised by some as abandonment of Nigerians living there.

## Towards a more effective policy
A strong, **diversified economy**; good governance and security at home; clear definition of **national interest**; economic diplomacy that secures trade and investment; protection of citizens abroad; reciprocity; professional, well-funded missions; engagement of the Nigerian diaspora.`,
    examples: `**Example 1.** Give two achievements of Nigeria's foreign policy. *Answer:* **Support for the liberation of southern Africa** and **peace-keeping in Liberia and Sierra Leone**.

**Example 2.** Why was Nigeria suspended from the Commonwealth in 1995? *Answer:* Because of the **execution of Ken Saro-Wiwa and eight other Ogoni activists** by the Abacha regime.

**Example 3.** What is meant by "Father Christmas diplomacy"? *Answer:* Nigeria's **generous spending on other African states without commensurate benefit** to itself.`,
  },
  questions: [
    ["E", "The scheme by which Nigeria sends professionals to assist other developing countries is the", "Technical Aid Corps", "National Youth Service Corps", "Peace Corps", "Federal Road Safety Corps", "It was established in 1987."],
    ["E", "The Nigerian who served as Commonwealth Secretary-General from 1990 to 2000 was", "Emeka Anyaoku", "Joseph Garba", "Ibrahim Gambari", "Bolaji Akinyemi", "He was the third Secretary-General of the Commonwealth."],
    ["E", "Nigeria's peace-keeping in Liberia in the 1990s was undertaken through", "ECOMOG", "NATO", "the Commonwealth", "OPEC", "ECOWAS set up the monitoring group in 1990."],
    ["M", "Nigeria was suspended from the Commonwealth in 1995 following the", "execution of Ken Saro-Wiwa and eight others", "annulment of the 1993 election", "civil war", "nationalisation of British Petroleum", "The hangings provoked international outrage."],
    ["M", "The dispute over the Bakassi Peninsula was settled in 2002 by the", "International Court of Justice", "OAU Mediation Commission", "ECOWAS Court", "UN Security Council", "The court awarded the territory to Cameroon."],
    ["M", "A frequent criticism of Nigeria's Africa-centred foreign policy is that it", "brings little economic return to Nigeria", "ignores African problems", "favours Europe over Africa", "has no peace-keeping record", "Critics call it 'Father Christmas' diplomacy."],
    ["M", "The agreement under which Nigeria handed Bakassi to Cameroon was the", "Green Tree Agreement", "Lomé Convention", "Lagos Accord", "Abuja Treaty", "It was signed in 2006 in the United States."],
    ["H", "Which of these is a domestic constraint on Nigeria's foreign policy?", "Economic dependence on crude oil", "Membership of the United Nations", "The Technical Aid Corps", "Leadership of ECOWAS", "A weak, undiversified economy limits influence abroad."],
    ["H", "'Citizen diplomacy', proposed in 2007, emphasised", "the welfare of Nigerians at home and abroad as the focus of foreign policy", "the training of citizens as diplomats", "withdrawal from international bodies", "military alliances with the West", "It responded to the criticism that citizens' interests were neglected."],
    ["H", "Nigeria has served as a non-permanent member of the UN Security Council", "five times", "once", "ten times", "never", "It served in 1966–67, 1978–79, 1994–95, 2010–11 and 2014–15."],
  ],
  jamb: [
    ["M", "The Nigerian who was President of the UN General Assembly in 1989 was", "Joseph Garba", "Emeka Anyaoku", "Jaja Wachuku", "Simeon Adebo", "He had earlier been Nigeria's foreign minister."],
    ["H", "Nigeria secured a major write-off of its external debt from the Paris Club in", "2005–2006", "1986", "1999", "2015", "The deal was negotiated under President Obasanjo."],
  ],
};

export const globalAffairs: Topic = {
  title: "Nigeria's Role in Global Affairs",
  subtopics: ["Nigeria and the fight against apartheid", "Nigeria and peace missions in Africa", "Nigeria's contribution to international economic forums", "Assessment of Nigeria's global role"],
  objectives: ["Describe Nigeria's part in the struggle against apartheid", "Describe Nigeria's peace missions in Africa", "Explain Nigeria's contributions to international economic forums", "Assess Nigeria's role in global affairs"],
  lesson: {
    title: "Nigeria on the World Stage",
    summary: "Nigeria's contribution to ending apartheid, keeping peace in Africa and speaking for developing countries.",
    minutes: 40,
    notes: `## Nigeria and the fight against apartheid
**Apartheid** ("separateness") was the system of **racial segregation and white minority rule** in South Africa from 1948 to the early 1990s.

Nigeria's actions:
- After the **Sharpeville massacre (1960)**, Nigeria led the pressure that made South Africa **leave the Commonwealth in 1961**.
- **Banned trade** with South Africa and denied its aircraft and ships landing rights.
- Established the **National Committee Against Apartheid (NACAP)** and the **Southern Africa Relief Fund (1976)**, to which workers and students contributed.
- Gave **scholarships, passports and refuge** to South African students and exiles; funded the **ANC** and **PAC**.
- **Chaired the UN Special Committee against Apartheid** for most of its existence; hosted the **World Conference for Action against Apartheid in Lagos (1977)**.
- **Boycotted** the **1976 Montreal Olympics** and the **1978 Commonwealth Games**, and led the boycott of the 1986 Commonwealth Games.
- **Nationalised British Petroleum (1979)** and Barclays Bank's shares to press Britain over Rhodesia.
- **Recognised the MPLA** in Angola (1975) against South African intervention.
- **General Obasanjo co-chaired the Commonwealth Eminent Persons Group (1986)** that visited Nelson Mandela in prison.
- Supported **sanctions** until the release of **Mandela (1990)** and majority rule in **1994**.

Though far from southern Africa, Nigeria was treated as a **"frontline state"**.

## Nigeria and peace missions in Africa
| Place | Period | Role |
|---|---|---|
| **Congo** | 1960–64 | Nigerian troops and police served under the UN; **Major-General Aguiyi-Ironsi** commanded the UN force |
| **Tanganyika** | 1964 | troops helped after an army mutiny |
| **Chad** | 1979–82 | Nigerian and OAU peace-keeping forces; Lagos and Kano peace conferences |
| **Liberia** | 1990–97; 2003 | led **ECOMOG**; supplied most of the troops and funds; ended the civil war and supervised elections |
| **Sierra Leone** | 1997–2000 | ECOMOG drove out the junta and **restored President Kabbah (1998)** |
| **Guinea-Bissau; Côte d'Ivoire** | 1998–99; 2003 | ECOWAS missions |
| **Sudan (Darfur)** | from 2004 | AU and UN-AU missions; Nigerian generals as force commanders; Abuja peace talks |
| **Mali** | 2013 | African-led support mission |
| **The Gambia** | 2017 | ECOWAS force enforced the election result |
| **Somalia, Rwanda, Angola, Namibia, Mozambique** | various | UN missions |

Nigeria has also **mediated** — in the Togo–Benin, Chad–Libya, Sudan and Burundi disputes — and co-leads the **Multinational Joint Task Force** against Boko Haram in the Lake Chad basin.

### Costs
Thousands of soldiers lost and billions of dollars spent, especially in Liberia and Sierra Leone.

## Nigeria's contribution to international economic forums
- **Group of 77 (G-77)** — the developing countries' bloc at the UN; Nigeria chaired it and argued for a **New International Economic Order**.
- **UNCTAD** — advocacy of fairer terms of trade.
- **Non-Aligned Movement** — economic co-operation among developing states.
- **OPEC** — a leading African voice; Nigerians as Secretary-General.
- **ACP–EEC Lomé Convention (1975)** — Nigeria led the African, Caribbean and Pacific negotiators.
- **ECOWAS** and the **Lagos Plan of Action (1980)** for African self-reliance; the **Abuja Treaty (1991)** for an African Economic Community.
- **NEPAD (2001)** — Obasanjo among its initiators, presenting Africa's case to the **G-8**.
- **D-8** (Developing Eight, 1997) and the **G-15** and **G-24**.
- **African Development Bank** — largest African shareholder; the **Nigeria Trust Fund (1976)** lends to poorer members; **Akinwumi Adesina** became president in 2015.
- **World Trade Organization** — **Ngozi Okonjo-Iweala** became Director-General in 2021, the first African and first woman.
- **African Continental Free Trade Area** — signed in 2019.
- Campaigns for **debt relief** and for the **return of looted funds**.

## Assessment
Nigeria has been Africa's most consistent voice against colonialism and racism and its leading peace-keeper. Its influence, however, has been limited by economic problems, misrule and insecurity at home; and it still seeks a **permanent seat on the UN Security Council**.`,
    examples: `**Example 1.** Mention three ways Nigeria fought apartheid. *Answer:* **Trade ban and sanctions**, the **Southern Africa Relief Fund**, and **boycott of the 1976 Olympics**.

**Example 2.** Which Nigerian commanded the UN force in the Congo? *Answer:* **Major-General J. T. U. Aguiyi-Ironsi**.

**Example 3.** Name the Nigerian who became Director-General of the WTO in 2021. *Answer:* **Dr Ngozi Okonjo-Iweala**.`,
  },
  questions: [
    ["E", "Apartheid was a system of racial segregation practised in", "South Africa", "Zimbabwe", "Angola", "Kenya", "It lasted from 1948 to the early 1990s."],
    ["E", "Nigeria's first peace-keeping mission after independence was in", "the Congo", "Liberia", "Sierra Leone", "Chad", "Troops went there under the UN in 1960."],
    ["E", "The Nigerian who became Director-General of the World Trade Organization in 2021 is", "Ngozi Okonjo-Iweala", "Akinwumi Adesina", "Amina Mohammed", "Oby Ezekwesili", "She is the first African and first woman in the post."],
    ["M", "Nigeria's pressure contributed to South Africa's withdrawal in 1961 from the", "Commonwealth", "United Nations", "Organisation of African Unity", "Olympic movement", "It followed the Sharpeville massacre of 1960."],
    ["M", "The fund set up in Nigeria in 1976 to aid the liberation struggle in southern Africa was the", "Southern Africa Relief Fund", "Petroleum Trust Fund", "Nigeria Trust Fund", "Ecological Fund", "Workers and students contributed to it."],
    ["M", "Nigerian-led ECOMOG forces restored President Tejan Kabbah to power in 1998 in", "Sierra Leone", "Liberia", "Guinea-Bissau", "The Gambia", "A military junta had overthrown him in 1997."],
    ["M", "The developing countries' bloc at the United Nations in which Nigeria has been active is the", "Group of 77", "Group of 7", "Warsaw Pact", "European Union", "It presses for a fairer international economic order."],
    ["H", "The Nigerian leader who co-chaired the Commonwealth Eminent Persons Group on South Africa in 1986 was", "Olusegun Obasanjo", "Yakubu Gowon", "Shehu Shagari", "Ibrahim Babangida", "The group visited Nelson Mandela in prison."],
    ["H", "The facility through which Nigeria lends to poorer members of the African Development Bank is the", "Nigeria Trust Fund", "Technical Aid Corps", "OPEC Fund", "Sovereign Wealth Fund", "It was established in 1976."],
    ["H", "The plan adopted in 1980 for the collective self-reliance of African states was the", "Lagos Plan of Action", "Monrovia Doctrine", "Abuja Treaty", "Lomé Convention", "It was adopted at an OAU economic summit in Lagos."],
  ],
  jamb: [
    ["M", "The commander of the United Nations force in the Congo in 1964 who later became Nigeria's Head of State was", "J. T. U. Aguiyi-Ironsi", "Yakubu Gowon", "Murtala Mohammed", "Olusegun Obasanjo", "He took power after the coup of January 1966."],
    ["H", "Nigeria hosted the World Conference for Action against Apartheid in Lagos in", "1977", "1960", "1990", "1994", "It was organised with the United Nations."],
  ],
};

export const federalism1: Topic = {
  title: "Nigerian Federalism: Meaning and Evolution",
  subtopics: ["Meaning of federalism", "Reasons for the adoption of federalism in Nigeria", "Constitutional steps towards federalism", "Federalism under the Lyttleton Constitution and after"],
  objectives: ["Define federalism", "Explain why Nigeria adopted a federal system", "Trace the evolution of federalism from 1946 to 1954", "Outline changes in the federal structure since 1954"],
  lesson: {
    title: "How Nigeria Became a Federation",
    summary: "The meaning of federalism and the steps by which Nigeria adopted and reshaped it.",
    minutes: 40,
    notes: `## Meaning
**Federalism** is a system of government in which **powers are constitutionally divided between a central government and component units** (regions or states), each supreme in its own sphere and neither able to abolish the other.

## Why Nigeria adopted federalism
1. **Ethnic, linguistic, religious and cultural diversity** — over 250 groups.
2. **Large size** and population.
3. **Fear of domination** — of the south by the north and of minorities by majorities.
4. **Uneven development** between regions, especially in education.
5. **British colonial policy** — separate administration of north and south, and indirect rule, entrenched regional differences.
6. The **regional basis of the political parties** (NPC, NCNC, AG) and their leaders' preference.
7. Desire to **bring government nearer** the people and preserve local autonomy.
8. Examples of other federations.

## Constitutional evolution
| Year | Step |
|---|---|
| **1914** | **Amalgamation** of the Northern and Southern Protectorates by Lord Lugard — a unitary arrangement in form |
| **1939** | Governor Bourdillon divided the south into **Western and Eastern Provinces** — three groups of provinces |
| **1946** | **Richards Constitution** created **three regions** with **Regional Councils** — regionalism, the seed of federalism |
| **1951** | **Macpherson Constitution** gave regional legislatures power to make laws on listed subjects — a **quasi-federal** system |
| **1953** | Crisis: the "self-government in 1956" motion, the walk-out of the north and the **Kano riots**; the north's eight-point programme; **London Conference** agreed on a federal system |
| **1954** | **Lyttleton Constitution** — Nigeria became a **true federation** |

## The Lyttleton Constitution (1954)
- Established a **Federation of three regions** — Northern, Western and Eastern — with **Lagos as Federal Territory**; Southern Cameroons a quasi-federal territory.
- **Divided legislative powers** into the **exclusive list** (federal), the **concurrent list** (both) and **residual** powers (regions).
- **Regional Premiers** and regional executive councils; ministers given charge of departments.
- **Regionalised** the civil service, the judiciary and the marketing boards.
- A **Federal Supreme Court**.
- The Governor became **Governor-General**; regional Lieutenant-Governors became **Governors**.
- Revenue allocation based largely on **derivation**.
- No Prime Minister yet — the office came in **1957**.

It made the **regions strong** and the centre comparatively weak.

## After 1954
| Year | Development |
|---|---|
| **1957** | regional self-government for East and West (North 1959); **Balewa** became Prime Minister; **Willink Commission** on minorities appointed |
| **1960** | **Independence** as a federation of three regions |
| **1963** | **Republic**; the **Mid-West Region** created — four regions |
| **1966** | military rule; General Ironsi's **Unification Decree (No. 34)** abolished the federation — it provoked riots and the July counter-coup; Gowon **restored** the federal system |
| **1967** | **12 states** created on the eve of the civil war |
| **1976** | **19 states**; decision to build a new capital at **Abuja**; **local government reform** created a third tier |
| **1979** | presidential constitution; a stronger centre |
| **1987, 1991, 1996** | **21, 30 and 36 states**; capital moved to Abuja in **1991** |
| **1999** | Fourth Republic: 36 states, the FCT and **774 local governments** |

## Trend
From a federation of **three powerful regions**, Nigeria has moved to one of **many small states dependent on a powerful centre** — the result of military command, oil revenue collected by the centre, and repeated state creation.`,
    examples: `**Example 1.** Define federalism. *Answer:* A system in which **powers are constitutionally shared between a central government and component units**.

**Example 2.** Which constitution made Nigeria a true federation? *Answer:* The **Lyttleton Constitution of 1954**.

**Example 3.** Which decree briefly abolished federalism in Nigeria? *Answer:* The **Unification Decree No. 34 of 1966**, under General Ironsi.`,
  },
  questions: [
    ["E", "A system of government in which powers are shared between a central government and component units is", "federalism", "unitarism", "confederalism only", "monarchy", "Each level is supreme in its own sphere."],
    ["E", "Nigeria became a true federation under the", "Lyttleton Constitution of 1954", "Clifford Constitution of 1922", "Richards Constitution of 1946", "Republican Constitution of 1963", "It divided powers between the centre and the regions."],
    ["E", "Under the Lyttleton Constitution, Lagos was designated as", "the Federal Territory", "the capital of the Western Region only", "a separate region", "a British protectorate", "It was removed from the Western Region and administered by the federal government."],
    ["M", "The constitution that introduced regionalism into Nigeria was the", "Richards Constitution", "Macpherson Constitution", "Lyttleton Constitution", "Independence Constitution", "It created three regional councils in 1946."],
    ["M", "A major reason for the adoption of federalism in Nigeria was", "ethnic and cultural diversity", "the small size of the country", "the absence of political parties", "a single common language", "A federal system accommodates many groups."],
    ["M", "Under the Lyttleton Constitution, powers not listed in the exclusive or concurrent lists belonged to the", "regions", "federal government", "Governor-General", "local councils", "Residual powers were left to the regions."],
    ["M", "The Mid-West Region was created in", "1963", "1954", "1967", "1976", "It was carved out of the Western Region."],
    ["H", "Federalism was briefly abolished in Nigeria by", "Decree No. 34 of 1966", "the 1979 Constitution", "Decree No. 4 of 1984", "the Macpherson Constitution", "Ironsi's Unification Decree made Nigeria a unitary state."],
    ["H", "The Kano riots of 1953 followed the controversy over", "the motion for self-government in 1956", "the creation of the Mid-West", "the census of 1962", "the Unification Decree", "Northern members opposed the date and were jeered in Lagos."],
    ["H", "Twelve states were created in Nigeria in 1967 by", "Yakubu Gowon", "Aguiyi-Ironsi", "Murtala Mohammed", "Tafawa Balewa", "It was done on 27 May 1967, shortly before the civil war."],
  ],
  jamb: [
    ["M", "The office of Prime Minister of the Federation of Nigeria was first occupied in", "1957", "1954", "1960", "1963", "Tafawa Balewa was appointed in that year."],
    ["H", "The local government reform that established local government as a third tier nationwide was carried out in", "1976", "1954", "1967", "1999", "It was done under the Murtala/Obasanjo regime."],
  ],
};

export const federalism2: Topic = {
  title: "Features of Nigerian Federalism and Intergovernmental Relations",
  subtopics: ["Features of Nigerian federalism", "Division of powers", "Central and regional or state relations", "Changes in the balance of power"],
  objectives: ["State the features of Nigerian federalism", "Explain the division of powers among the tiers of government", "Describe relations between the centre and the regions or states", "Explain how the balance of power has shifted since 1960"],
  lesson: {
    title: "How the Nigerian Federation Works",
    summary: "The characteristics of Nigeria's federal system and the relations between its levels of government.",
    minutes: 40,
    notes: `## Features of Nigerian federalism
1. **Division of powers** between the federal government and the states by the constitution.
2. A **written and rigid constitution** — amendment needs two-thirds of the National Assembly and approval by two-thirds of the state Houses of Assembly.
3. **Supremacy of the constitution** over all persons and governments.
4. **Three tiers** of government — federal, state and local.
5. A **bicameral federal legislature** — the **Senate** (equal representation of states) and the **House of Representatives** (representation by population).
6. An **independent judiciary**, with the **Supreme Court** as arbiter of disputes between governments.
7. **Each level derives its powers from the constitution**, not from the other.
8. **Revenue sharing** from the **Federation Account**.
9. **Federal character** in appointments and distribution of amenities.
10. **Duplication** of the organs of government at federal and state levels.
11. **No right of secession**.

## Division of powers
| List | Who legislates | Examples |
|---|---|---|
| **exclusive legislative list** | federal government only | defence, foreign affairs, currency, police, mines and minerals including oil, customs, immigration, aviation, railways |
| **concurrent legislative list** | both; federal law prevails in a conflict | education, health, agriculture, electricity, industrial development, roads |
| **residual matters** | states | chieftaincy, markets, primary education, local government matters |

Under the 1960 and 1963 constitutions the federal list was short and the regions strong; the 1979 and 1999 constitutions give the centre a much longer exclusive list.

## Relations between the centre and the regions or states
### First Republic (1960–66)
- **Strong regions**: each had its own **constitution**, **premier**, **police** (native authority and local forces), **civil service**, **marketing boards**, coat of arms and an Agent-General in London.
- Regions kept **50% of mining rents and royalties** by derivation.
- Each ruling party controlled a region; the regions competed fiercely for control of the centre.
- The federal government could nevertheless intervene: it declared a **state of emergency in the Western Region in 1962** and appointed an administrator.

### Military rule (1966–79; 1984–99)
- **Centralised command**: military governors were appointed by, and answerable to, the Head of State.
- **Decrees** overrode state edicts.
- **States multiplied and shrank**, becoming dependent on federal allocations.
- The centre took over **universities, primary education funding, marketing boards, television and newspapers**, and all **land and mineral revenue**; the **Land Use Decree (1978)** vested land in governors.
- **Uniform** local government, civil service and legal arrangements were imposed.

### Second and Fourth Republics
- A **single constitution** for the whole federation; states have no constitutions of their own.
- Elected governors with **constitutional immunity**; yet states rely on the monthly **Federation Account** allocation.
- **Single federal police force**; states call for **state police**.
- Frequent **court cases** between the federal government and states — over **resource control (2002)**, **local government funds** (Lagos State, 2004), and local government autonomy (2024).
- The federal government may declare a **state of emergency** in a state (Plateau 2004; Ekiti 2006; Borno, Yobe and Adamawa 2013).
- Agitation for **"true federalism"** and **restructuring** — devolution of powers, fiscal federalism, state police.

## Intergovernmental institutions
**Council of State**; **National Economic Council**; **Federation Account Allocation Committee**; **Revenue Mobilisation, Allocation and Fiscal Commission**; **Federal Character Commission**; **National Boundary Commission**; the **Nigeria Governors' Forum**.

## Federal–state–local relations
Local governments are created by state law but **listed in the constitution**; their funds pass through the **State Joint Local Government Account**, a source of conflict; many are run by caretaker committees appointed by governors.

## Summary
Nigerian federalism is often described as **"centralised"** or **"unitary federalism"**: federal in form, but with a centre that dominates in powers and money.`,
    examples: `**Example 1.** Give three features of Nigerian federalism. *Answer:* **Constitutional division of powers**, a **written and rigid constitution**, and a **bicameral legislature**.

**Example 2.** On which list is defence placed? *Answer:* The **exclusive legislative list**.

**Example 3.** How did military rule alter federalism? *Answer:* It **concentrated power at the centre** — governors were appointed by the Head of State and states depended on federal funds.`,
  },
  questions: [
    ["E", "In Nigeria, subjects on which only the federal government may legislate are contained in the", "exclusive legislative list", "concurrent legislative list", "residual list", "schedule of local functions", "Defence and currency are examples."],
    ["E", "The court that settles disputes between the federal government and the states is the", "Supreme Court", "Customary Court", "Magistrate Court", "Sharia Court of Appeal", "It has original jurisdiction in such disputes."],
    ["E", "Each state of Nigeria is equally represented in the", "Senate", "House of Representatives", "Council of Ministers", "Supreme Court", "Every state elects three senators."],
    ["M", "Where a state law conflicts with a federal law on a concurrent matter,", "the federal law prevails", "the state law prevails", "both laws lapse", "the President decides", "The constitution gives federal law precedence."],
    ["M", "Under the 1963 Constitution each region had its own", "constitution", "army", "currency", "foreign ministry", "The regions were strong and largely autonomous."],
    ["M", "A feature of federalism under military rule in Nigeria was", "concentration of power at the centre", "greater autonomy for states", "separate state constitutions", "state control of oil revenue", "Governors were appointed by and answerable to the Head of State."],
    ["M", "The federal government declared a state of emergency in the Western Region in", "1962", "1954", "1975", "1993", "An administrator was appointed after the crisis in the regional House."],
    ["H", "The body that prepares the formula for sharing the Federation Account is the", "Revenue Mobilisation, Allocation and Fiscal Commission", "Federal Character Commission", "Independent National Electoral Commission", "National Boundary Commission", "It advises on revenue allocation among the tiers."],
    ["H", "The decree of 1978 that vested all land in each state in its governor was the", "Land Use Decree", "Unification Decree", "Indigenisation Decree", "Public Order Decree", "It is now the Land Use Act."],
    ["H", "Nigerian federalism is often described as 'unitary federalism' because", "the centre dominates in powers and finance", "states may secede freely", "there is no written constitution", "local governments control the police", "States depend heavily on the federal government."],
  ],
  jamb: [
    ["M", "Matters such as chieftaincy and markets, not listed in either legislative list, fall under", "residual powers of the states", "exclusive federal powers", "concurrent powers", "emergency powers", "States legislate on unlisted matters."],
    ["H", "An amendment to the Nigerian Constitution generally requires approval by the National Assembly and by", "two-thirds of the state Houses of Assembly", "a simple majority of local governments", "the Chief Justice alone", "all the governors", "This makes the constitution rigid."],
  ],
};

export const federalism3: Topic = {
  title: "Problems of Nigerian Federalism",
  subtopics: ["Revenue allocation", "Minority agitation", "Boundary disputes", "Resource control and other problems"],
  objectives: ["Explain the problem of revenue allocation", "Describe the agitations of minority groups", "Explain boundary disputes in the federation", "Discuss resource control and other problems of Nigerian federalism"],
  lesson: {
    title: "Strains in the Federation",
    summary: "The recurring disputes over money, minorities, boundaries and resources that have tested Nigeria's unity.",
    minutes: 40,
    notes: `## 1. Revenue allocation
**Revenue allocation** is the sharing of nationally collected revenue **between** the tiers of government (vertical) and **among** the states and local governments (horizontal). It is contentious because regions differ in wealth and need.

### Principles proposed
**derivation**; **need**; **population**; **equality of states**; **national interest**; **land mass and terrain**; **internal revenue effort**; **social development**.

### Commissions
| Commission | Year | Emphasis |
|---|---|---|
| **Phillipson** | 1946 | derivation and even progress |
| **Hicks-Phillipson** | 1951 | derivation, need, national interest |
| **Chick** | 1953 | derivation above all |
| **Raisman** | 1958 | created the Distributable Pool Account; 50% of mining royalties to the region of origin |
| **Binns** | 1964 | increased the pool |
| **Dina** | 1968 | recommendations rejected |
| **Aboyade** | 1977 | technical formula, rejected as too complex |
| **Okigbo** | 1980 | basis of the 1981 Act |
| **National Revenue Mobilisation Commission** | 1989 | permanent body, now the RMAFC |

### Trend
Derivation was dominant when revenue came from **cocoa, groundnuts and palm produce**; once **oil** from minority areas became the main source, it was reduced — to as little as 1.5–3% — in favour of population and equality of states. The 1999 Constitution guarantees **not less than 13%** derivation. The present vertical formula gives the federal government about **52.7%**, the states **26.7%** and local governments **20.6%**.

## 2. Minority agitation
The three original regions were each dominated by a majority group — **Hausa-Fulani, Yoruba, Igbo**. Minorities feared domination and demanded their own states: the **Middle Belt** (United Middle Belt Congress, J. S. Tarka), the **Mid-West**, and **Calabar–Ogoja–Rivers**.

- The **Willink Commission (1957–58)** acknowledged their fears but **recommended no new states**, proposing a Bill of Rights and special development areas.
- **Tiv riots (1960, 1964)**.
- **Mid-West Region** created in 1963.
- **Isaac Adaka Boro** declared a Niger Delta Republic in **1966** (the "twelve-day revolution").
- **Ogoni** — the **Movement for the Survival of the Ogoni People (MOSOP)** and its **Ogoni Bill of Rights (1990)**, led by **Ken Saro-Wiwa**.
- **Ijaw** — the **Kaiama Declaration (1998)**.
- Continuing demands for new states and local governments.

## 3. Boundary disputes
- **Inter-state** and inter-community disputes over land, especially where oil or farmland is involved — e.g. Cross River–Akwa Ibom (and the "76 oil wells"), Benue–Taraba, Kogi–Anambra, Ife–Modakeke, Aguleri–Umuleri, Tiv–Jukun.
- The **census** (1962–63, 1973) became a source of conflict because population determines seats and revenue.
- **International**: Bakassi (Cameroon); Lake Chad islands.
- The **National Boundary Commission (1987)** handles such disputes.

## 4. Resource control
Oil-producing states of the **Niger Delta** demand control of the resources in their land, or a much larger derivation share, citing environmental damage and neglect.
- The **on-shore/off-shore dichotomy**: in **2002** the Supreme Court held that offshore oil belonged to the federation; a 2004 Act abolished the distinction for derivation purposes.
- Agitation turned to **militancy** from 2005–06.
- Responses: OMPADEC (1992), the **Niger Delta Development Commission (2000)**, the Ministry of Niger Delta Affairs (2008), the amnesty (2009).

## 5. Other problems
- **Ethnic and regional rivalry**; fear of domination; the "national question".
- **Over-centralisation** of power and funds; weak states.
- **Threat of secession** — Biafra (1967–70); later separatist agitation.
- **Religious tension** — e.g. controversy over the extension of **Sharia** criminal law in northern states from 1999.
- **Indigene–settler** discrimination.
- **Federal character** seen as undermining merit.
- **Inter-governmental conflict** and litigation; local government autonomy.
- **Uneven development**.
- **Corruption** and the high **cost of governance** in many tiers.
- Military intervention.`,
    examples: `**Example 1.** What is the derivation principle? *Answer:* Revenue is returned to states **in proportion to what each contributed** to the Federation Account.

**Example 2.** What did the Willink Commission recommend? *Answer:* **No new states**; instead a **Bill of Rights** and special attention to minority areas.

**Example 3.** State the minimum derivation guaranteed by the 1999 Constitution. *Answer:* **13 per cent**.`,
  },
  questions: [
    ["E", "The sharing of nationally collected revenue among the tiers of government is known as", "revenue allocation", "budget padding", "deficit financing", "indigenisation", "It is a persistent problem of Nigerian federalism."],
    ["E", "The commission set up in 1957 to look into the fears of minorities was the", "Willink Commission", "Raisman Commission", "Udoji Commission", "Okigbo Commission", "It reported in 1958."],
    ["E", "The principle that revenue should go back to the area from which it came is", "derivation", "need", "equality of states", "national interest", "It favours the producing areas."],
    ["M", "The 1999 Constitution provides that derivation shall be not less than", "13 per cent", "50 per cent", "3 per cent", "25 per cent", "This applies to revenue from natural resources."],
    ["M", "The Willink Commission recommended", "a Bill of Rights rather than new states", "the creation of twelve states", "the abolition of regions", "immediate independence", "It held that new states would not solve the minorities' problem."],
    ["M", "The Ogoni Bill of Rights of 1990 was presented by", "MOSOP", "the Ijaw Youth Council", "the Middle Belt Forum", "Afenifere", "The Movement for the Survival of the Ogoni People was led by Ken Saro-Wiwa."],
    ["M", "The body responsible for settling inter-state boundary disputes is the", "National Boundary Commission", "Federal Character Commission", "Code of Conduct Bureau", "National Population Commission", "It was established in 1987."],
    ["H", "The emphasis on derivation in revenue allocation declined in the 1970s mainly because", "oil from minority areas became the main source of revenue", "cocoa prices rose", "the regions demanded it", "the census was cancelled", "Majority-controlled governments reduced the share of the oil-producing areas."],
    ["H", "The revenue commission of 1958 that created the Distributable Pool Account was the", "Raisman Commission", "Chick Commission", "Dina Committee", "Aboyade Committee", "It also gave 50 per cent of mining royalties to the region of origin."],
    ["H", "In 2002 the Supreme Court ruled in the resource-control case that revenue from offshore oil", "belonged to the federation and not to the littoral states", "belonged wholly to the littoral states", "should be paid to local governments", "was outside Nigerian territory", "The ruling provoked the abolition of the dichotomy by law in 2004."],
  ],
  jamb: [
    ["M", "The 'twelve-day revolution' of 1966 in the Niger Delta was led by", "Isaac Adaka Boro", "Ken Saro-Wiwa", "Joseph Tarka", "Harold Dappa-Biriye", "He declared a Niger Delta Republic."],
    ["H", "The Kaiama Declaration of 1998 was issued by", "Ijaw youths", "Ogoni chiefs", "Tiv elders", "Middle Belt soldiers", "It demanded control of Ijaw land and resources."],
  ],
};

export const federalism4: Topic = {
  title: "Attempts to Solve the Problems of Nigerian Federalism",
  subtopics: ["State creation", "The federal character principle", "Unity schools", "The National Youth Service Corps and other measures"],
  objectives: ["Explain state creation as a response to federal problems", "Explain the federal character principle", "Describe the role of unity schools and the NYSC in national integration", "Assess the success of these measures"],
  lesson: {
    title: "Holding the Federation Together",
    summary: "The policies adopted to allay fears, share opportunities and build a sense of one nation.",
    minutes: 40,
    notes: `## 1. State creation
| Year | Government | Number |
|---|---|---|
| 1963 | Balewa (civilian) | **4 regions** — Mid-West added |
| 27 May 1967 | Gowon | **12 states** |
| 3 February 1976 | Murtala Mohammed | **19 states** |
| 1987 | Babangida | **21 states** — Katsina, Akwa Ibom |
| 1991 | Babangida | **30 states** |
| 1 October 1996 | Abacha | **36 states** |

### Reasons
allay the **fears of minorities**; break up the **large regions**, especially the north, to balance the federation; bring **government nearer** the people; promote **even development**; in 1967, weaken the secession by winning the eastern minorities.

### Effects
*Positive:* minorities gained states; more centres of development; wider participation.
*Negative:* **weak, unviable states** dependent on the centre; high **cost of administration**; new minorities and fresh demands; boundary disputes; a stronger centre.

## 2. Federal character principle
Introduced in the **1979 Constitution** and retained in 1999 (section 14): the composition of the government and its agencies must **reflect the federal character of Nigeria** so that no state or ethnic group predominates.
- At least **one minister from each state**.
- Spread in appointments to the civil service, armed forces, police and parastatals.
- Political parties must have **national spread**; a President needs a quarter of the votes in two-thirds of the states.
- **Quota system** in admission to federal schools and universities ("educationally less developed states").
- The **Federal Character Commission (1996)** monitors compliance.

*For:* gives every group a sense of belonging; reduces fear of domination.
*Against:* may sacrifice **merit**; breeds mediocrity; stresses state of origin over citizenship.

## 3. Unity schools
**Federal Government Colleges** and Federal Government Girls' Colleges, begun in **1966** and expanded in the 1970s to every state, admit pupils **from all states on a quota basis** so that young Nigerians live and learn together across ethnic and religious lines. Federal universities, polytechnics and colleges of education serve a similar purpose.

## 4. National Youth Service Corps (NYSC)
Established by **Decree No. 24 of 22 May 1973** under General Gowon, as part of post-war **reconciliation, reconstruction and rehabilitation**.
- Graduates of universities and polytechnics under 30 serve for **one year**, normally in a **state other than their own**.
- **Objectives:** national unity and integration; discipline and patriotism; self-reliance; mobility of labour; removal of prejudice.
- **Phases:** orientation camp, primary assignment, community development service, passing out.
- **Achievements:** inter-ethnic friendships and marriages; manpower for schools, clinics and elections in rural areas.
- **Problems:** insecurity (corps members killed in the 2011 post-election violence); lobbying for choice postings; rejection by employers; inadequate allowances; calls to scrap or reform it.

## 5. Other measures
- **A new federal capital at Abuja** — central and ethnically neutral; chosen in 1976, occupied in 1991.
- **Revenue allocation** adjustments — 13% derivation; special funds; NDDC and other development commissions.
- **National symbols** — the anthem, pledge, flag and coat of arms.
- **Rotation and zoning** of offices among zones — an informal convention of the parties.
- **Local government reform (1976)**.
- **National languages policy**; national festivals and sports.
- **National Orientation Agency**; mass mobilisation campaigns.
- **Constitutional conferences** — 1977–78, 1994–95, 2005 and 2014 — to renegotiate the federation.
- The **"no victor, no vanquished"** policy and the three Rs after the civil war.
- The **inter-religious council**.

## Assessment
These measures have **kept Nigeria united** since 1970 and given most groups a stake in the federation. But ethnic and religious suspicion, the indigene–settler divide and demands for restructuring show that **integration is unfinished**. Justice, good governance and economic opportunity matter as much as formal devices.`,
    examples: `**Example 1.** Which government created nineteen states and when? *Answer:* **Murtala Mohammed's**, in **February 1976**.

**Example 2.** What is the federal character principle? *Answer:* The requirement that **government appointments and institutions reflect the diversity of the federation**, so that no state or group dominates.

**Example 3.** When and why was the NYSC established? *Answer:* In **1973**, to promote **national unity and reconciliation** after the civil war.`,
  },
  questions: [
    ["E", "The National Youth Service Corps was established in", "1973", "1960", "1979", "1999", "It was created by Decree No. 24 under General Gowon."],
    ["E", "Nigeria's 36-state structure was completed in 1996 under", "Sani Abacha", "Ibrahim Babangida", "Yakubu Gowon", "Olusegun Obasanjo", "Six states were created on 1 October 1996."],
    ["E", "Federal Government Colleges that admit pupils from all states are known as", "unity schools", "mission schools", "model primary schools", "command schools only", "They are meant to foster national integration."],
    ["M", "The federal character principle was first written into the constitution of", "1979", "1960", "1963", "1954", "It was retained in the 1999 Constitution."],
    ["M", "A major criticism of the federal character principle is that it", "may sacrifice merit", "excludes minority groups", "abolishes states", "applies only to the army", "Positions may go to less qualified candidates."],
    ["M", "The main reason for creating states in Nigeria has been to", "allay the fears of minorities and balance the federation", "increase the powers of regions", "reduce the number of civil servants", "prepare for a unitary state", "Smaller units reduce domination by large groups."],
    ["M", "NYSC members are normally posted to", "states other than their states of origin", "their home local governments", "foreign embassies", "military barracks only", "This exposes them to other parts of the country."],
    ["H", "A negative effect of repeated state creation has been", "the emergence of weak states dependent on federal allocation", "stronger regional governments", "a weaker federal government", "the end of minority agitation", "Many states cannot fund themselves."],
    ["H", "The body that monitors compliance with the federal character principle is the", "Federal Character Commission", "Public Complaints Commission", "Code of Conduct Tribunal", "National Judicial Council", "It was established in 1996."],
    ["H", "The choice of Abuja as federal capital was intended partly to", "provide a central and ethnically neutral capital", "reward the oil-producing areas", "bring the capital nearer the sea", "reduce the number of states", "Lagos was congested and identified with one ethnic group."],
  ],
  jamb: [
    ["M", "Nineteen states were created in Nigeria in", "1976", "1967", "1987", "1991", "Seven new states were added to the existing twelve."],
    ["H", "The post-civil-war policy of 'Reconciliation, Reconstruction and Rehabilitation' was proclaimed by", "Yakubu Gowon", "Odumegwu Ojukwu", "Murtala Mohammed", "Aguiyi-Ironsi", "It accompanied the declaration of 'no victor, no vanquished'."],
  ],
};

export const civilService1: Topic = {
  title: "The Civil Service in Nigeria: Structure and Functions",
  subtopics: ["Meaning and characteristics of the civil service", "Structure and organisation", "Functions of the civil service", "The Civil Service Commission and reforms"],
  objectives: ["Define the civil service and state its characteristics", "Describe the structure and organisation of the Nigerian civil service", "State the functions of the civil service", "Outline the role of the Civil Service Commission and the major reforms"],
  lesson: {
    title: "The Machinery of Government",
    summary: "The permanent body of officials that advises governments and carries out their policies.",
    minutes: 40,
    notes: `## Meaning
The **civil service** is the body of **permanent, professional officials** employed in the **ministries and departments** of government in a civil (non-military, non-political, non-judicial) capacity to **advise on and execute public policy**. It is part of the wider **public service**, which also includes the armed forces, police, teachers, parastatals and local government staff.

## Characteristics
- **Permanence** — civil servants remain while governments change, giving continuity.
- **Neutrality** — they serve any government loyally and do not take part in partisan politics.
- **Impartiality** — they treat all members of the public alike.
- **Anonymity** — they are "seen but not heard"; the minister takes credit or blame.
- **Merit** — recruitment and promotion by qualification and performance.
- **Expertise** — training and experience.
- **Hierarchy and bureaucracy** — orders pass down a chain of command; work follows rules and files.

## Origins
The service grew out of the **British colonial administration**. Senior posts were held by Europeans; the **Nigerianisation** policy from 1948 replaced them with Nigerians. In 1954 the service was **regionalised**, producing federal and regional (now state) services.

## Structure and organisation
### Ministries
Each **ministry** is headed politically by a **Minister** (at state level a **Commissioner**), responsible for policy. The **Permanent Secretary** is the administrative head, chief adviser and **accounting officer**. Below are **departments** headed by **Directors**, divided into divisions, branches and sections.

The **Head of the Civil Service of the Federation** leads the whole service.

### Classes
| Class | Entry and duties |
|---|---|
| **administrative** | graduates; policy formulation, advice and co-ordination |
| **executive** | implement policy; day-to-day supervision |
| **professional / technical** | doctors, engineers, lawyers, accountants and their technical staff |
| **clerical** | records, correspondence, routine office work |
| **secretarial / auxiliary** | typists, drivers, messengers, cleaners |
Since the **Udoji** reforms, posts are placed on a **unified grading structure** of **grade levels 01–17**.

### Departments common to ministries
administration and supplies; finance and accounts; planning, research and statistics; plus operational departments.

## Functions
1. **Advising** ministers and helping to **formulate policy**.
2. **Implementing** government policies and programmes.
3. **Drafting bills**, regulations and answers to parliamentary questions.
4. **Preparing the budget** and estimates.
5. **Keeping records** and providing information and statistics.
6. Ensuring **continuity** of government.
7. Making **rules and regulations** under delegated powers.
8. **Collecting revenue** and rendering public services.
9. **Informing** the public of government policy, and government of public opinion.
10. Performing **quasi-judicial** duties (licences, tribunals).

## Control of the civil service
- **Civil Service Commission** — an independent body (federal and state) that **recruits, promotes and disciplines** civil servants.
- **Ministerial**, **legislative** (committees, the Public Accounts Committee), **judicial** and **financial** (Auditor-General) control.
- **Civil service rules** and financial regulations; the **Code of Conduct Bureau**; the **Public Complaints Commission** (ombudsman, 1975).

## Major reforms
| Commission | Year | Notes |
|---|---|---|
| **Tudor Davies; Harragin** | 1945; 1946 | salaries; senior and junior services |
| **Gorsuch** | 1954 | restructured into classes |
| **Adebo** | 1971 | wages and salaries review |
| **Udoji** | 1972–74 | unified grading; results-oriented management; large salary awards |
| **Dotun Phillips; 1988 reforms** | 1985; 1988 | professionalisation; minister made chief executive and accounting officer; permanent secretary renamed **Director-General** and made a political appointee |
| **Ayida Panel** | 1994–95 | reversed much of 1988; restored the Permanent Secretary |
| **Obasanjo reforms** | 1999–2007 | **SERVICOM**, monetisation of benefits, pension reform, due process, IPPIS |
| **Oronsaye Committee** | 2011–12 | proposed merging and scrapping of agencies |`,
    examples: `**Example 1.** State three characteristics of the civil service. *Answer:* **Permanence, neutrality and anonymity**.

**Example 2.** Who is the accounting officer of a ministry? *Answer:* The **Permanent Secretary**.

**Example 3.** Which body recruits and disciplines civil servants? *Answer:* The **Civil Service Commission**.`,
  },
  questions: [
    ["E", "The administrative head of a ministry in Nigeria is the", "Permanent Secretary", "Minister", "Senate President", "Auditor-General", "The Minister is the political head."],
    ["E", "The body responsible for the recruitment, promotion and discipline of civil servants is the", "Civil Service Commission", "National Assembly", "Code of Conduct Tribunal", "Federal Character Commission", "It is meant to be independent."],
    ["E", "The principle that civil servants should not take part in partisan politics is", "neutrality", "anonymity", "permanence", "hierarchy", "They serve any government in power loyally."],
    ["M", "The civil service principle that officials are not publicly praised or blamed for government policy is", "anonymity", "impartiality", "expertise", "meritocracy", "The minister takes responsibility."],
    ["M", "The class of the civil service chiefly concerned with advising on and formulating policy is the", "administrative class", "clerical class", "executive class", "auxiliary class", "It is made up of graduate officers."],
    ["M", "Which of these is a function of the civil service?", "Implementation of government policies", "Making the constitution", "Conducting elections", "Trying criminal cases", "Civil servants carry out the decisions of government."],
    ["M", "The commission that introduced the unified grading structure into the Nigerian public service was the", "Udoji Commission", "Gorsuch Commission", "Willink Commission", "Ayida Panel", "It reported in 1974."],
    ["H", "The civil service reforms of 1988 were notable for", "making the minister the chief executive and accounting officer of the ministry", "abolishing ministries", "creating the Head of Service post for the first time", "ending the federal character principle", "The permanent secretary was also renamed Director-General."],
    ["H", "The civil service differs from the public service in that the civil service", "covers only staff of ministries and departments", "includes the armed forces", "includes all parastatals", "is elected", "The public service is the wider body."],
    ["H", "The policy of replacing expatriate officers with Nigerians in the colonial service was known as", "Nigerianisation", "indigenisation of business", "regionalisation", "privatisation", "It began in earnest after 1948."],
  ],
  jamb: [
    ["M", "The initiative launched in 2004 to improve service delivery in government offices was", "SERVICOM", "MAMSER", "WAI", "OFN", "It stands for Service Compact with All Nigerians."],
    ["H", "The panel whose report in the mid-1990s reversed key features of the 1988 civil service reforms was the", "Ayida Panel", "Adebo Commission", "Dotun Phillips Panel", "Morgan Commission", "It restored the title and career status of the Permanent Secretary."],
  ],
};

export const civilService2: Topic = {
  title: "Problems of the Nigerian Civil Service",
  subtopics: ["Corruption", "Bureaucracy and red tape", "Inefficiency and its causes", "Solutions and reforms"],
  objectives: ["Explain corruption in the civil service", "Explain the problem of bureaucracy and red tape", "Identify the causes of inefficiency in the service", "Suggest solutions to the problems of the civil service"],
  lesson: {
    title: "Why the Service Underperforms",
    summary: "The weaknesses of the Nigerian civil service and the efforts made to correct them.",
    minutes: 40,
    notes: `## Background
At independence the civil service was small, well regarded and reasonably efficient. Rapid expansion, politics, military rule and economic decline changed it.

## 1. Corruption
- **Bribery** — "gratification" before files move or contracts are approved.
- **Embezzlement** and **inflation of contracts**; kickbacks.
- **Ghost workers** on the payroll.
- **Falsification** of age and certificates.
- **Nepotism and favouritism** in appointments and promotions.
- Diversion of materials and misuse of government property.

*Causes:* low pay against rising prices; weak supervision and sanctions; insecurity of tenure; pressure from relatives and society; bad example from political leaders.

## 2. Bureaucracy and red tape
**Red tape** is excessive attachment to rules, forms and procedures, which causes **delay**. Files pass through many hands; decisions are referred upward; officials avoid responsibility. The public is frustrated and business discouraged.

## 3. Inefficiency
- **Poor attitude to work** — lateness, absenteeism, truancy; "government work is nobody's work".
- **Over-staffing** in junior grades and shortage of skilled professionals.
- **Poor training** and outdated methods; slow adoption of technology.
- **Inadequate equipment** and funds.
- **Poor remuneration** and delayed salaries and pensions; low morale.
- **Promotion by seniority** rather than performance.
- **Duplication** of functions among ministries and agencies.

## 4. Political interference
- Ministers and politicians influence **appointments, postings and contracts**.
- **Politicisation** of top posts — especially after 1988.
- Loss of **neutrality**; fear of victimisation.

## 5. Ethnicity and federal character
Appointments made on the basis of **state of origin and quota** may put representation above **merit**; ethnic loyalty breeds suspicion and favouritism.

## 6. Effects of military rule
- The **mass purge of 1975**, in which over ten thousand officers were dismissed or retired "with immediate effect", destroyed **security of tenure** and encouraged officials to enrich themselves while they could.
- Rule by decree **by-passed procedures**; frequent changes of government disrupted policies.
- Under some regimes, senior civil servants ("super permanent secretaries") acquired too much power.

## 7. Other problems
- conflict between **generalist administrators** and **professionals**
- **brain drain** to the private sector and abroad
- poor record keeping and data
- conflict between ministers and permanent secretaries
- excessive **secrecy**
- an ageing workforce and embargoes on recruitment

## Solutions and reforms
1. **Better pay** and prompt payment; a living minimum wage; contributory pensions.
2. **Recruitment and promotion on merit**, within fair representation.
3. **Training and retraining** — e.g. the Administrative Staff College of Nigeria (ASCON), public service institutes.
4. **Anti-corruption enforcement** — EFCC, ICPC, Code of Conduct Bureau; **due process** in procurement; whistle-blowing.
5. **Technology** — computerised payroll (**IPPIS**) to remove ghost workers; the **Treasury Single Account**; e-government.
6. **SERVICOM** service charters and performance appraisal.
7. **Security of tenure** and insulation from politics; a strong, independent Civil Service Commission.
8. **Rationalisation** of ministries and agencies (the Oronsaye proposals).
9. **Freedom of Information Act (2011)** to reduce secrecy.
10. **Public Complaints Commission** for redress.
11. Ethical re-orientation and exemplary leadership.

## Importance of an efficient service
No government policy succeeds without a competent, honest service to implement it; the quality of the civil service largely determines the quality of governance.`,
    examples: `**Example 1.** What is red tape? *Answer:* **Excessive adherence to rules and procedures**, causing delay in official business.

**Example 2.** How did the 1975 purge affect the civil service? *Answer:* It **destroyed security of tenure** and lowered morale, encouraging corruption.

**Example 3.** Name one technological measure used to remove ghost workers. *Answer:* The **Integrated Payroll and Personnel Information System (IPPIS)**.`,
  },
  questions: [
    ["E", "Excessive adherence to official rules and procedures that causes delay is called", "red tape", "federal character", "anonymity", "due process", "It is a common complaint against bureaucracy."],
    ["E", "Non-existent persons on a government payroll are known as", "ghost workers", "casual workers", "expatriates", "contract officers", "Their salaries are collected fraudulently."],
    ["E", "Which of these is a problem of the Nigerian civil service?", "Corruption", "Neutrality", "Permanence", "Expertise", "Bribery and embezzlement weaken the service."],
    ["M", "The mass retirement of civil servants in 1975 undermined the principle of", "security of tenure", "anonymity", "federal character", "hierarchy", "Officers were removed 'with immediate effect'."],
    ["M", "A consequence of applying quota in appointments without regard to competence is", "lowering of standards", "higher salaries", "less political interference", "faster decision making", "Merit may be sacrificed to representation."],
    ["M", "The computerised payroll system introduced to eliminate ghost workers in the federal service is", "IPPIS", "SERVICOM", "NYSC", "NAPEP", "The Integrated Payroll and Personnel Information System."],
    ["M", "Political interference in the civil service weakens its", "neutrality", "size", "hierarchy", "grade levels", "Officials fear victimisation and take sides."],
    ["H", "The law passed in 2011 that reduced official secrecy in public institutions is the", "Freedom of Information Act", "Official Secrets Act", "Public Order Act", "Fiscal Responsibility Act", "Citizens may request records from public bodies."],
    ["H", "The Nigerian ombudsman, established in 1975 to investigate complaints against officials, is the", "Public Complaints Commission", "Code of Conduct Tribunal", "Civil Service Commission", "National Human Rights Commission", "It offers redress for administrative injustice."],
    ["H", "A cause of low morale in the civil service is", "poor remuneration and delayed pensions", "prompt promotion on merit", "regular training", "modern equipment", "Poor conditions of service discourage commitment."],
  ],
  jamb: [
    ["M", "The institution established to train senior public servants in Nigeria is", "ASCON", "NIIA", "NAFDAC", "NDLEA", "The Administrative Staff College of Nigeria is at Topo, Badagry."],
    ["H", "The committee that recommended the merger and scrapping of many federal agencies to cut the cost of governance was the", "Oronsaye Committee", "Uwais Committee", "Adebo Commission", "Willink Commission", "It reported in 2012."],
  ],
};

export const militaryRule1: Topic = {
  title: "Military Rule in Nigeria: Features and Roles of Military Governments",
  subtopics: ["Military coups and regimes in Nigeria", "Reasons for military intervention", "Features of military regimes", "Structure and roles of military governments"],
  objectives: ["List the military regimes in Nigeria and their dates", "Explain the reasons for military intervention", "Describe the features of military rule", "Explain the structure and roles of military governments"],
  lesson: {
    title: "Soldiers in Government",
    summary: "When and why the military ruled Nigeria, and how military government was organised.",
    minutes: 40,
    notes: `## Military regimes
| Regime | Period | How it came and ended |
|---|---|---|
| **Maj.-Gen. J. T. U. Aguiyi-Ironsi** | Jan.–July 1966 | took over after the **15 January 1966** coup led by Major Nzeogwu; killed in the counter-coup |
| **Gen. Yakubu Gowon** | 1966–1975 | counter-coup of **29 July 1966**; overthrown while at an OAU summit |
| **Gen. Murtala Mohammed** | 1975–1976 | coup of **29 July 1975**; assassinated in the abortive **Dimka coup, 13 February 1976** |
| **Gen. Olusegun Obasanjo** | 1976–1979 | succeeded Murtala; **handed over to civilians, 1 October 1979** |
| **Maj.-Gen. Muhammadu Buhari** | 1983–1985 | coup of **31 December 1983** against Shagari |
| **Gen. Ibrahim Babangida** | 1985–1993 | palace coup of **27 August 1985**; "stepped aside" in August 1993 |
| *(Interim National Government — Chief Ernest Shonekan)* | Aug.–Nov. 1993 | civilian; removed by Abacha |
| **Gen. Sani Abacha** | 1993–1998 | took power **17 November 1993**; died 8 June 1998 |
| **Gen. Abdulsalami Abubakar** | 1998–1999 | **handed over on 29 May 1999** |

The military ruled for about **29 of Nigeria's first 39 years** of independence.

## Reasons for military intervention
- **political crises** — the census (1962–63), the Western Region crisis and 1965 election violence, the 1964 federal election
- **corruption** and mismanagement by politicians
- **election rigging** and breakdown of law and order
- **tribalism and regionalism**
- **economic hardship**
- **ambition** of officers and divisions within the army
- the example of coups elsewhere

## Features of military regimes
1. **Suspension of parts of the constitution**.
2. **Rule by decree** (federal) and **edict** (state).
3. **Fusion of executive and legislative powers** in a ruling council.
4. **Dissolution of legislatures** and **ban on political parties** and activities.
5. **Ouster clauses** barring courts from questioning decrees.
6. **Hierarchical, centralised command** — a unitary style within a federal form.
7. **Military governors or administrators** in the states.
8. **Special military tribunals**.
9. **Restriction of rights** — detention without trial, press censorship.
10. No fixed tenure; **no accountability** to an electorate.
11. Use of **civilian commissioners and civil servants** to run ministries.
12. Change of government by **coup**.

## Structure of military government
| Organ | Role |
|---|---|
| **Head of State and Commander-in-Chief** | chief executive |
| **Supreme Military Council (SMC)** — renamed **Armed Forces Ruling Council (AFRC)** under Babangida and **Provisional Ruling Council (PRC)** under Abacha | highest law-making and policy body |
| **Federal Executive Council** | ministers (commissioners), military and civilian; executes policy |
| **National Council of States** | military governors; co-ordination with states |
| **Chief of Staff, Supreme Headquarters / Chief of General Staff** | deputy to the Head of State |
| **Military governors / administrators** | head state governments; appointed by the Head of State |
| **Judiciary** | retained, but with limited jurisdiction |

## Roles of military governments
- **maintained the unity** of the country — fought the civil war (1967–70)
- **created states** and reformed local government
- made **laws** and directed the economy — development plans, indigenisation, oil policy
- built **infrastructure** — roads, bridges, refineries, ports, a new capital
- conducted **foreign policy**
- organised **transition programmes** — constitutions of 1979, 1989 and 1999
- fought **corruption and indiscipline** (with mixed results)
- set up **national institutions** — NYSC, FRSC, NDE, JAMB (1978)`,
    examples: `**Example 1.** Who led Nigeria's first military government? *Answer:* **Major-General J. T. U. Aguiyi-Ironsi**, from January 1966.

**Example 2.** How do military governments make laws? *Answer:* By **decrees** at the federal level and **edicts** at the state level.

**Example 3.** Name the highest ruling body under Babangida. *Answer:* The **Armed Forces Ruling Council (AFRC)**.`,
  },
  questions: [
    ["E", "The counter-coup that brought Yakubu Gowon to power took place on", "29 July 1966", "15 January 1966", "13 February 1976", "31 December 1983", "General Ironsi was killed in the counter-coup."],
    ["E", "Laws made by a federal military government are called", "decrees", "bills", "edicts", "bye-laws", "State military governments made edicts."],
    ["E", "The military Head of State who handed over power to civilians in 1979 was", "Olusegun Obasanjo", "Yakubu Gowon", "Murtala Mohammed", "Muhammadu Buhari", "He handed over to Shehu Shagari on 1 October 1979."],
    ["M", "The highest ruling body under General Babangida was the", "Armed Forces Ruling Council", "Supreme Military Council", "Provisional Ruling Council", "National Security Council", "It replaced the Supreme Military Council in 1985."],
    ["M", "A feature of military rule is", "fusion of legislative and executive powers", "separation of powers", "regular elections", "supremacy of the legislature", "The ruling council both makes and executes laws."],
    ["M", "General Murtala Mohammed was assassinated in the abortive coup of", "13 February 1976", "29 July 1966", "27 August 1985", "17 November 1993", "The coup was led by Lt-Col. B. S. Dimka."],
    ["M", "Which of these was a reason for military intervention in January 1966?", "Political crises and election violence in the Western Region", "The discovery of oil", "The creation of twelve states", "The annulment of an election", "The breakdown of order in the West was a major trigger."],
    ["H", "Provisions in decrees that prevented the courts from inquiring into the validity of government actions are known as", "ouster clauses", "entrenched clauses", "exclusive lists", "residual clauses", "They removed the jurisdiction of the courts."],
    ["H", "The civilian who headed the Interim National Government of 1993 was", "Ernest Shonekan", "Moshood Abiola", "Shehu Shagari", "Babagana Kingibe", "He was removed by General Abacha in November 1993."],
    ["H", "Under General Abacha, the highest ruling body was the", "Provisional Ruling Council", "Armed Forces Ruling Council", "Supreme Military Council", "Federal Executive Council", "The name was changed again in 1993."],
  ],
  jamb: [
    ["M", "The military regime that overthrew the Second Republic on 31 December 1983 was led by", "Muhammadu Buhari", "Ibrahim Babangida", "Sani Abacha", "Murtala Mohammed", "It removed President Shehu Shagari."],
    ["H", "The last military Head of State of Nigeria, who handed over in May 1999, was", "Abdulsalami Abubakar", "Sani Abacha", "Ibrahim Babangida", "Oladipo Diya", "He ran a transition of less than a year."],
  ],
};
