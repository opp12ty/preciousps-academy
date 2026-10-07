import type { TermPlan } from "../types";

/** SS3 Economics — original Precious PS content following the national senior secondary curriculum. */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "International trade",
        subtopics: ["Basis and differences between internal and international trade", "Absolute and comparative advantage", "Terms of trade", "Gains and problems of international trade"],
        objectives: ["Explain the basis of international trade and how it differs from home trade", "Explain the theories of absolute and comparative advantage", "Calculate and interpret the terms of trade", "State the advantages and disadvantages of international trade"],
        lesson: {
          title: "Trade Between Nations",
          summary: "Explain why countries trade, the theory of comparative advantage and the terms of trade.",
          minutes: 40,
          notes: `## International trade
The **exchange of goods and services between countries**. It may be **bilateral** (between two countries) or **multilateral** (among many).
- **exports** — goods and services sold abroad; **imports** — those bought from abroad
- **visible trade** — goods; **invisible trade** — services such as shipping, insurance, banking and tourism
- **entrepôt trade** — importing in order to re-export

## Why countries trade
- uneven distribution of **natural resources**
- differences in **climate and soil**
- differences in **technology, skills and capital**
- differences in **costs of production**
- differences in **tastes**
- the desire for a higher standard of living; the need to dispose of surpluses

## Internal and international trade compared
| Internal (home) trade | International trade |
|---|---|
| one currency | **different currencies** — foreign exchange needed |
| few restrictions | **tariffs, quotas** and other barriers |
| one legal and political system | different laws and policies |
| factors of production fairly mobile | factors much less mobile between countries |
| lower transport cost | higher transport cost and more documents |
| similar language and culture | different languages and cultures |

## Absolute advantage
**Adam Smith**: a country has an **absolute advantage** in a commodity if it can produce it with **fewer resources** (or more of it with the same resources) than another country. Each should specialise in what it produces most cheaply.

## Comparative advantage
**David Ricardo**: even if one country is more efficient in **everything**, both can still gain if each **specialises in the commodity in which its comparative cost (opportunity cost) is lowest**.
*Example:* with one unit of labour,
| | Cloth | Wheat |
|---|---|---|
| Country A | 10 | 5 |
| Country B | 4 | 4 |
A has an absolute advantage in both. But the **opportunity cost** of 1 unit of wheat is **2 cloth in A** and **1 cloth in B**. B gives up less to produce wheat, so **B has the comparative advantage in wheat** and **A in cloth**. If they specialise and trade at a rate between the two cost ratios (say 1 wheat for 1.5 cloth), both gain.
### Assumptions
two countries and two goods; no transport costs; free trade; constant costs; full employment; labour mobile within but not between countries.
### Limitations
transport costs and trade barriers exist; costs change with output; factors are not perfectly mobile within countries; countries want self-sufficiency in key goods.

## Terms of trade
The **rate at which a country's exports exchange for its imports**.
**terms of trade = (index of export prices ÷ index of import prices) × 100**
- above 100, or rising — **favourable**: a given volume of exports buys more imports
- below 100, or falling — **unfavourable**
*Examples:* export index 120, import index 100: terms of trade = **120** (favourable). Export index 90, import index 120: **75** (unfavourable).
Developing countries often face unfavourable terms because the prices of primary products rise more slowly, and fluctuate more, than those of manufactures.

## Advantages of international trade
- access to goods that cannot be produced at home
- **specialisation** and larger world output
- a **wider market** and economies of scale
- a higher standard of living and more variety
- foreign exchange; government revenue
- transfer of **technology** and ideas
- competition improves efficiency
- international co-operation
- employment

## Disadvantages
- **dumping** of cheap foreign goods; harm to **infant industries**
- **over-dependence** on other countries; danger in war
- **imported inflation**
- balance of payments difficulties
- import of harmful goods and foreign tastes
- unemployment in industries that cannot compete
- over-specialisation and exhaustion of resources`,
          examples: `**Example 1.** Who propounded the theory of comparative advantage? *Answer:* **David Ricardo**.

**Example 2.** A country's export price index is 150 and its import price index is 125. Find its terms of trade. *Solution:* 150 ÷ 125 × 100 = **120** — favourable.

**Example 3.** Country X can make 8 radios or 4 bicycles; country Y can make 3 radios or 3 bicycles. Which has the comparative advantage in bicycles? *Solution:* a bicycle costs 2 radios in X and 1 radio in Y — **country Y**.`,
        },
        questions: [
          ["E", "The exchange of goods and services between countries is", "international trade", "home trade", "retail trade", "barter", "It involves different currencies."],
          ["E", "Trade in services such as shipping, insurance and tourism is called", "invisible trade", "visible trade", "entrepôt trade", "bilateral trade", "Visible trade is trade in goods."],
          ["E", "The theory of comparative advantage was propounded by", "David Ricardo", "Adam Smith", "Thomas Malthus", "J. M. Keynes", "He showed that both countries gain from specialisation."],
          ["M", "A major difference between internal and international trade is that international trade involves", "the use of different currencies", "buying and selling", "the use of money", "transport of goods", "Foreign exchange is therefore needed."],
          ["M", "According to the theory of comparative advantage, a country should specialise in the commodity in which it has", "the lowest opportunity cost", "the highest opportunity cost", "no natural resources", "the highest tariff", "It gives up least to produce that good."],
          ["M", "The rate at which a country's exports exchange for its imports is known as the", "terms of trade", "balance of trade", "exchange control", "trade embargo", "It compares export and import price indices."],
          ["M", "A disadvantage of international trade is that it may", "harm infant industries through dumping", "widen the market", "raise living standards", "bring in new technology", "Cheap imports can destroy young local firms."],
          ["H", "A country's index of export prices is 120 and its index of import prices is 100. Its terms of trade are", "120", "83", "20", "220", "120 ÷ 100 × 100."],
          ["H", "With one unit of labour, country A produces 10 units of cloth or 5 of wheat, and country B produces 4 of cloth or 4 of wheat. The opportunity cost of 1 unit of wheat in country A is", "2 units of cloth", "0.5 unit of cloth", "5 units of cloth", "1 unit of cloth", "A gives up 10 cloth to make 5 wheat."],
          ["H", "A country's export price index is 90 and its import price index is 120. Its terms of trade are", "75 and unfavourable", "133 and favourable", "30 and favourable", "75 and favourable", "90 ÷ 120 × 100 is below 100."],
        ],
      },
      {
        week: 2,
        title: "Balance of payments",
        subtopics: ["Meaning and components of the balance of payments", "Balance of trade", "Balance of payments disequilibrium", "Correcting a balance of payments deficit"],
        objectives: ["Define the balance of payments and describe its components", "Calculate the balance of trade and the current account balance", "Explain surpluses and deficits and how a deficit is financed", "Describe the measures for correcting a balance of payments deficit"],
        lesson: {
          title: "A Nation's Accounts with the World",
          summary: "Describe the balance of payments accounts and how a deficit is corrected.",
          minutes: 40,
          notes: `## Balance of payments
A **systematic record of all the economic transactions between the residents of a country and the rest of the world over a period**, usually a year.

## Components
### 1. Current account
- **visible trade** — exports and imports of **goods**. The difference is the **balance of trade**
- **invisible trade** — **services**: shipping and air transport, insurance, banking, tourism; **income**: interest, profits and dividends; and **transfers**: gifts, remittances, grants
**current account balance = balance of trade + invisible balance**

### 2. Capital account
Movements of capital: **foreign direct investment**, portfolio investment, loans granted and received, and their repayment.

### 3. Monetary movements (official settlements account)
How the overall surplus or deficit is settled: changes in the country's **external reserves** (gold and foreign currencies), borrowing from or repaying the **IMF**. A balancing item covers errors and omissions.

## Balance of trade
**balance of trade = value of visible exports − value of visible imports**
- **favourable (surplus)** — exports exceed imports
- **unfavourable (deficit)** — imports exceed exports
*Example:* visible exports ₦500 million; visible imports ₦420 million: a surplus of **₦80 million**.

### Balance of trade and balance of payments compared
The balance of trade covers **goods only**; the balance of payments covers **goods, services, income, transfers and capital**.

*Example:* visible exports ₦500 m; visible imports ₦600 m; net invisibles +₦150 m.
Balance of trade = −₦100 m; current account = −100 + 150 = **+₦50 million**.

## Disequilibrium
In the accounting sense the balance of payments always balances, because any gap is settled. Economically:
- a **surplus** — total receipts exceed total payments; reserves rise
- a **deficit** — total payments exceed receipts; reserves fall or debts rise

### Causes of a deficit
- high **imports** of consumer goods, raw materials and machinery
- **low exports**; dependence on a few primary products with falling prices
- unfavourable **terms of trade**
- **inflation** at home — exports become dear
- heavy **debt servicing**; profits sent abroad by foreign firms
- spending on foreign education, medical care and travel
- capital flight; smuggling

### Financing a deficit (temporary)
drawing on **external reserves**; borrowing from the **IMF** or other countries; selling assets abroad; receiving grants.

## Correcting a deficit
- **export promotion** — incentives, subsidies, export processing zones, diversification
- **import restriction** — **tariffs**, **quotas**, embargoes, import licences
- **devaluation** of the currency — exports become cheaper to foreigners and imports dearer at home
- **exchange control** — rationing foreign currency
- **deflationary (contractionary) policy** — higher interest rates and taxes to reduce demand for imports
- **import substitution** — producing at home what was imported
- attracting **foreign investment** and tourists
- rescheduling debts

## Effects of a persistent deficit
falling reserves; a weaker currency; rising foreign debt; loss of confidence; shortage of imported inputs; pressure to adopt adjustment programmes.

## A persistent surplus
It builds reserves and strengthens the currency, but may cause inflation at home and means that other countries are in deficit.

## Nigeria's experience
Oil exports usually give a surplus on visible trade, but heavy payments for services, debt servicing and imports of refined products and food often weaken the overall position, especially when oil prices fall.`,
          examples: `**Example 1.** Visible exports are ₦900 million and visible imports ₦1100 million. Find the balance of trade. *Solution:* 900 − 1100 = **−₦200 million** (deficit).

**Example 2.** Name three invisible items. *Answer:* **Shipping, insurance and tourism**.

**Example 3.** State three ways of correcting a balance of payments deficit. *Answer:* **Export promotion, import restriction and devaluation**.`,
        },
        questions: [
          ["E", "A record of all the economic transactions between a country and the rest of the world in a year is the", "balance of payments", "balance of trade", "national budget", "terms of trade", "It covers goods, services and capital."],
          ["E", "The difference between the value of visible exports and visible imports is the", "balance of trade", "balance of payments", "capital account", "exchange rate", "It deals with goods only."],
          ["E", "Which of the following is an invisible item in the balance of payments?", "insurance", "crude oil", "cocoa", "machinery", "Services are invisible items."],
          ["M", "A country's visible exports are worth ₦500 million and its visible imports ₦420 million. Its balance of trade is", "a surplus of ₦80 million", "a deficit of ₦80 million", "a surplus of ₦920 million", "zero", "Exports exceed imports by ₦80 million."],
          ["M", "Foreign investment and international loans are recorded in the", "capital account", "current account", "balance of trade", "visible account", "It records movements of capital."],
          ["M", "A balance of payments deficit can be financed in the short run by", "drawing on external reserves", "increasing imports", "reducing exports", "revaluing the currency", "Reserves are used to pay for the excess of payments."],
          ["M", "Which measure would help to correct a balance of payments deficit?", "promoting exports", "removing all tariffs", "increasing imports of luxuries", "revaluation of the currency", "More exports earn more foreign exchange."],
          ["H", "A country has visible exports of ₦500 million, visible imports of ₦600 million and a net invisible surplus of ₦150 million. Its current account balance is", "a surplus of ₦50 million", "a deficit of ₦100 million", "a surplus of ₦250 million", "a deficit of ₦50 million", "−100 + 150. Answer: a surplus of ₦50 million."],
          ["H", "The balance of payments differs from the balance of trade in that the balance of payments", "includes services and capital movements as well as goods", "covers goods only", "ignores imports", "is recorded monthly only", "It is the wider account."],
          ["H", "Devaluation is expected to improve the balance of payments because it", "makes exports cheaper and imports dearer", "makes imports cheaper", "reduces exports", "raises the value of the currency", "Foreigners buy more and residents import less."],
        ],
      },
      {
        week: 3,
        title: "Commercial policy and exchange rates",
        subtopics: ["Instruments of trade protection", "Arguments for and against protection", "Exchange rates and their determination", "Devaluation and exchange control"],
        objectives: ["Describe the instruments of trade protection", "State the arguments for and against protection", "Explain exchange rates and exchange rate systems", "Explain devaluation and exchange control"],
        lesson: {
          title: "Regulating Trade and Currencies",
          summary: "Explain tariffs and other trade barriers, exchange rates and devaluation.",
          minutes: 40,
          notes: `## Commercial (trade) policy
Government measures to influence the volume and direction of foreign trade. **Free trade** is trade without restrictions; **protection** is the use of barriers to shield home producers.

## Instruments of protection
- **tariffs (import duties)** — taxes on imported goods; **specific** (per unit) or **ad valorem** (a percentage of value)
- **quotas** — limits on the **quantity** that may be imported
- **embargo (outright ban)**
- **import licences**
- **exchange control** — restricting the foreign currency available for imports
- **subsidies** to home producers; export incentives
- administrative barriers — health and quality standards, documents
- **devaluation**

## Arguments for protection
- to protect **infant industries** until they can compete
- to prevent **dumping** — foreign goods sold below cost
- to correct a **balance of payments deficit**
- to protect **employment**
- to raise **revenue**
- to protect **strategic industries** for defence
- to discourage harmful or luxury imports
- to diversify the economy and reduce dependence
- to retaliate against other countries' barriers

## Arguments against protection
- higher prices and less choice for consumers
- **inefficient** industries are sheltered; infant industries may never grow up
- **retaliation** and trade wars
- loss of the gains from specialisation
- smuggling and corruption
- shortage of imported raw materials

## Exchange rate
The **price of one currency in terms of another**, for example ₦1500 to one US dollar.
*Example:* at ₦1500 = 1 dollar, ₦450 000 will buy 450 000 ÷ 1500 = **300 dollars**; a machine costing 2000 dollars costs ₦3 million.

### Determination
In a free market, by the **demand for and supply of foreign exchange**.
- **demand** arises from imports, foreign travel, education and medical care abroad, debt payments, investment abroad
- **supply** comes from exports, foreign investment, loans, tourism and remittances

### Systems
- **fixed exchange rate** — the government pegs the currency and defends the rate with its reserves
- **floating (flexible) rate** — market forces decide
- **managed float** — the market decides, but the central bank intervenes
A fall in a floating currency is a **depreciation**; a rise is an **appreciation**.

## Devaluation
The **deliberate reduction of the official value of a currency** in terms of other currencies, under a fixed system. (**Revaluation** is the opposite.)
### Effects
- **exports become cheaper** to foreigners — more are sold
- **imports become dearer** at home — fewer are bought
- the balance of payments should improve
- but the cost of imported inputs rises — **inflation**
- the burden of foreign debt in local currency rises
*Example:* the rate moves from ₦100 to ₦125 to the dollar. An import priced at 10 dollars now costs ₦1250 instead of ₦1000 — a rise of **25%**.
### Conditions for success
- the **demand for exports and for imports must be elastic**
- home producers must be able to **increase supply** of exports
- other countries must not devalue or retaliate
- domestic inflation must be controlled
For a country exporting mainly oil priced in dollars and importing necessities, these conditions are weak.

## Exchange control
Government regulation of the buying and selling of foreign currency.
### Aims
to conserve reserves; to correct a deficit; to check capital flight; to give priority to essential imports; to stabilise the exchange rate.
### Problems
a **parallel (black) market** in foreign exchange; corruption; shortages of inputs; discouragement of investors.

## Foreign exchange market in Nigeria
The central bank, authorised dealers (banks) and bureaux de change. Policies have moved between fixed rates, auctions and managed floating — among them the Second-tier Foreign Exchange Market of 1986 and later the unification of rates.`,
          examples: `**Example 1.** Distinguish a tariff from a quota. *Answer:* A **tariff** is a **tax** on imports; a **quota** is a **limit on quantity**.

**Example 2.** At ₦1500 to the dollar, how many naira are needed to pay a 250-dollar fee? *Solution:* 250 × 1500 = **₦375 000**.

**Example 3.** State two conditions for a successful devaluation. *Answer:* **Elastic demand for exports and imports**, and the **ability to increase export supply**.`,
        },
        questions: [
          ["E", "A tax imposed on goods imported into a country is", "a tariff", "a quota", "an embargo", "a subsidy", "It raises the price of imports."],
          ["E", "A limit placed on the quantity of a commodity that may be imported is", "a quota", "a tariff", "a subsidy", "a dividend", "It restricts volume rather than taxing value."],
          ["E", "The price of one currency in terms of another is the", "exchange rate", "bank rate", "terms of trade", "interest rate", "For example, so many naira to one dollar."],
          ["M", "The protection of newly established local industries from foreign competition is the", "infant industry argument", "free trade argument", "comparative cost argument", "dumping argument", "Young firms need time to become competitive."],
          ["M", "The sale of goods in a foreign market at a price below their cost of production is", "dumping", "smuggling", "hoarding", "bartering", "It harms producers in the importing country."],
          ["M", "The deliberate reduction of the official value of a country's currency is", "devaluation", "revaluation", "appreciation", "deflation", "It is carried out under a fixed exchange rate system."],
          ["M", "Under a floating exchange rate system, the rate is determined by", "the demand for and supply of foreign exchange", "the government alone", "the World Bank", "exporters only", "Market forces set the price of the currency."],
          ["H", "A currency is devalued from ₦100 to ₦125 to the dollar. The naira price of an import costing 10 dollars rises by", "25%", "20%", "125%", "2.5%", "From ₦1000 to ₦1250."],
          ["H", "Devaluation is most likely to improve a country's balance of payments when the demand for its exports and imports is", "elastic", "inelastic", "perfectly inelastic", "fixed", "Quantities must respond strongly to the price changes."],
          ["H", "A common consequence of strict exchange control is", "the growth of a parallel market in foreign currency", "a fall in smuggling", "unlimited imports", "a floating exchange rate", "Those denied official allocations buy elsewhere at higher rates."],
        ],
      },
      {
        week: 4,
        title: "International economic organisations",
        subtopics: ["The International Monetary Fund", "The World Bank group", "The African Development Bank", "The World Trade Organization and others"],
        objectives: ["Describe the aims and functions of the International Monetary Fund", "Describe the World Bank group", "Describe the African Development Bank", "Describe the World Trade Organization and other bodies"],
        lesson: {
          title: "Global Economic Institutions",
          summary: "Describe the objectives and work of the major international economic organisations.",
          minutes: 40,
          notes: `## The International Monetary Fund (IMF)
Agreed at the **Bretton Woods** conference in **1944**; began operations in 1947; headquarters in **Washington, DC**.
### Objectives
- to promote **international monetary co-operation**
- to promote **exchange rate stability**
- to help members with **short-term balance of payments difficulties**
- to facilitate the growth of world trade
- to help establish a multilateral system of payments
### Functions
- lends to members in deficit from a pool of members' **quotas**
- gives economic advice and technical assistance; monitors members' policies
- created **Special Drawing Rights (SDRs)** — "paper gold" — as an international reserve asset
### Conditions
Loans often carry **conditionalities**: devaluation, removal of subsidies, cuts in public spending, trade liberalisation, privatisation. These are criticised for causing hardship.

## The World Bank group
### International Bank for Reconstruction and Development (IBRD)
Also established at Bretton Woods (1944); headquarters in Washington, DC. It first financed post-war reconstruction and now gives **long-term loans for development projects** — roads, dams, power, agriculture, education, health.
### Affiliates
- **International Development Association (IDA)** — "soft" loans to the poorest countries, at very low interest over long periods
- **International Finance Corporation (IFC)** — finance for **private** enterprises
- the Multilateral Investment Guarantee Agency
### IMF and World Bank compared
| IMF | World Bank |
|---|---|
| **short-term** loans | **long-term** loans |
| for **balance of payments** support | for **development projects** |
| concerned with monetary stability | concerned with economic development |

## The African Development Bank (AfDB)
Established in **1964**; headquarters in **Abidjan**, Côte d'Ivoire.
### Objectives
- to finance **development projects** in African countries
- to promote economic and social progress and regional integration
- to mobilise resources from within and outside Africa
- to give technical assistance
Its soft-loan arm is the African Development Fund; the **Nigeria Trust Fund** (1976) is administered by the bank. Membership now includes non-African countries.

## The World Trade Organization (WTO)
Established in **1995** in **Geneva**, replacing the **General Agreement on Tariffs and Trade (GATT)** of 1947.
### Functions
- to promote **free and fair trade** by reducing tariffs and other barriers
- to administer trade agreements
- to **settle trade disputes**
- to review members' trade policies
- principle of non-discrimination ("most favoured nation")

## The United Nations Conference on Trade and Development (UNCTAD)
Set up in **1964**, in Geneva, to promote the trade and development interests of developing countries — better prices for primary products, easier access to the markets of rich countries.

## The Economic Commission for Africa (ECA)
A United Nations body founded in **1958**, with headquarters in **Addis Ababa**; it carries out research and advises African governments on development and integration.

## OPEC
The Organisation of the Petroleum Exporting Countries — founded in 1960; headquarters in Vienna — co-ordinates members' oil policies and seeks stable prices.

## Benefits to Nigeria
loans for projects and for balance of payments support; technical advice and training; debt relief; access to markets; a voice in world economic affairs.

## Criticisms
- harsh loan conditions; loss of economic independence
- growing **debt burden**
- voting power weighted in favour of rich countries
- trade rules that favour industrial nations; subsidies in rich countries hurt African farmers
- projects that do not suit local needs

## Foreign aid
Grants, loans and technical assistance from governments (bilateral) or international bodies (multilateral). It can fill gaps in saving and foreign exchange, but may create dependence and debt.`,
          examples: `**Example 1.** State the main difference between the IMF and the World Bank. *Answer:* The **IMF** gives **short-term balance of payments** support; the **World Bank** gives **long-term development** loans.

**Example 2.** Where is the headquarters of the African Development Bank? *Answer:* **Abidjan**, Côte d'Ivoire.

**Example 3.** Which organisation replaced GATT, and when? *Answer:* The **World Trade Organization**, in **1995**.`,
        },
        questions: [
          ["E", "The International Monetary Fund was created at a conference held in 1944 at", "Bretton Woods", "Geneva", "Lagos", "Vienna", "The World Bank was agreed at the same conference."],
          ["E", "The headquarters of the African Development Bank is in", "Abidjan", "Addis Ababa", "Abuja", "Nairobi", "The bank was established in 1964."],
          ["E", "The organisation that replaced GATT in 1995 is the", "World Trade Organization", "International Monetary Fund", "World Bank", "African Union", "It is based in Geneva."],
          ["M", "The main function of the International Monetary Fund is to", "help members with short-term balance of payments problems", "give long-term loans for roads and dams", "fix the price of crude oil", "settle boundary disputes", "It lends from a pool of members' quotas."],
          ["M", "Long-term loans for development projects are provided mainly by the", "World Bank", "International Monetary Fund", "World Trade Organization", "OPEC", "It finances roads, power, education and health."],
          ["M", "The affiliate of the World Bank that gives soft loans to the poorest countries is the", "International Development Association", "International Finance Corporation", "World Trade Organization", "Economic Commission for Africa", "Its loans carry very low interest over long periods."],
          ["M", "The Economic Commission for Africa has its headquarters in", "Addis Ababa", "Abidjan", "Accra", "Cairo", "It is a United Nations body."],
          ["H", "Special Drawing Rights are", "an international reserve asset created by the IMF", "loans from the African Development Bank", "tariffs fixed by the WTO", "shares of OPEC production", "They are sometimes called paper gold."],
          ["H", "IMF loans are often criticised because", "the attached conditions cause hardship in borrowing countries", "they are given without any conditions", "they are too long-term", "they can be used only for building dams", "Devaluation and removal of subsidies are typical conditions."],
          ["H", "The affiliate of the World Bank that provides finance for private enterprises is the", "International Finance Corporation", "International Development Association", "Nigeria Trust Fund", "Economic Commission for Africa", "It invests in private-sector projects."],
        ],
      },
      {
        week: 5,
        title: "Economic integration",
        subtopics: ["Meaning and stages of economic integration", "ECOWAS", "The African Continental Free Trade Area and other groupings", "Benefits and problems of integration"],
        objectives: ["Explain economic integration and its stages", "Describe the objectives and achievements of ECOWAS", "Describe the African Continental Free Trade Area and other groupings", "Assess the benefits and problems of economic integration in Africa"],
        lesson: {
          title: "Countries Working Together",
          summary: "Explain the stages of economic integration and assess regional groupings in Africa.",
          minutes: 40,
          notes: `## Economic integration
The **coming together of countries in a region to co-ordinate their economic policies** and remove barriers to trade among themselves.

## Stages (levels)
| Stage | Features |
|---|---|
| **preferential trade area** | lower tariffs on selected goods among members |
| **free trade area** | **no tariffs or quotas among members**; each keeps its own tariffs against non-members |
| **customs union** | free trade among members **plus a common external tariff** against non-members |
| **common market** | a customs union **plus free movement of labour and capital** |
| **economic union** | a common market **plus common economic policies** and often a **single currency** |
| political union | a common government |

## Objectives of integration
- to **widen the market** and gain economies of scale
- to increase trade among members
- to pool resources for joint projects — roads, power, research
- to attract investment
- to strengthen bargaining power in world trade
- to raise living standards and promote peace

## Trade creation and trade diversion
- **trade creation** — members replace costly home production with cheaper imports from partners: a gain
- **trade diversion** — members switch from cheaper outside suppliers to dearer partner suppliers because of the common tariff: a loss

## ECOWAS
The **Economic Community of West African States**, established by the **Treaty of Lagos on 28 May 1975**; headquarters in **Abuja**.
### Objectives
- to eliminate customs duties and trade restrictions among members
- to establish a **common external tariff**
- to allow the **free movement of persons, goods, services and capital**
- to harmonise agricultural, industrial, transport, energy and monetary policies
- to create a fund for co-operation, compensation and development
- eventually to form an economic and monetary union
### Achievements
visa-free travel for citizens; the trade liberalisation scheme; a common external tariff (2015); regional roads, the West African Gas Pipeline and power pool; **ECOMOG** peace-keeping; a community court and parliament; the ECOWAS Bank for Investment and Development.
### Problems
different currencies and languages; similar primary products; political instability and coups; poor transport links; non-payment of dues; fear of domination; loyalty to former colonial powers; smuggling; delays to the planned single currency. In 2024 Mali, Burkina Faso and Niger announced their withdrawal.

## The African Continental Free Trade Area (AfCFTA)
Agreed in **Kigali in 2018** under the **African Union**; trading began in **January 2021**; secretariat in **Accra**. It aims to create a single continental market by removing tariffs on most goods traded among African countries, boosting intra-African trade and industrialisation.

## Other groupings
- the **African Union (AU)** — 2002, successor to the Organisation of African Unity (1963); headquarters Addis Ababa
- the **Southern African Development Community (SADC)**; the **East African Community (EAC)**; COMESA
- the **Lake Chad Basin Commission** (1964) and the **Niger Basin Authority** — joint management of shared waters
- the Mano River Union
- outside Africa: the **European Union (EU)** — the most advanced, with a common market and a single currency (the euro) for most members; NAFTA and its successor; ASEAN

## Benefits of integration
a larger market; more trade; specialisation; economies of scale; shared infrastructure; free movement of labour; more investment; stronger international voice; peace and co-operation.

## Problems of integration in Africa
- **similar products** — little complementarity
- **poor infrastructure** linking members
- **different currencies** and exchange controls
- **political instability** and lack of political will
- **overlapping memberships** of several groupings
- fear of losing **sovereignty** and customs revenue
- **unequal development** — benefits flow to stronger members
- dependence on trade with industrial countries
- weak institutions and funding

## Requirements for success
political commitment; better transport and communication; harmonised policies; payment systems that ease trade; fair sharing of gains; peace and stability.`,
          examples: `**Example 1.** Distinguish a free trade area from a customs union. *Answer:* A **customs union** adds a **common external tariff** to free trade among members.

**Example 2.** State two objectives of ECOWAS. *Answer:* **Removal of trade barriers** among members and **free movement of persons**.

**Example 3.** What is trade diversion? *Answer:* Switching from **cheaper outside suppliers to dearer partner suppliers** because of the common tariff.`,
        },
        questions: [
          ["E", "The coming together of countries to co-ordinate their economic policies and remove trade barriers among themselves is", "economic integration", "nationalisation", "privatisation", "devaluation", "ECOWAS is an example."],
          ["E", "ECOWAS was established in", "1975", "1963", "1991", "2002", "The treaty was signed in Lagos."],
          ["E", "The successor to the Organisation of African Unity is the", "African Union", "European Union", "United Nations", "Commonwealth", "It came into being in 2002."],
          ["M", "A grouping in which members remove tariffs among themselves but keep separate tariffs against non-members is", "a free trade area", "a customs union", "a common market", "an economic union", "There is no common external tariff."],
          ["M", "A customs union differs from a free trade area because it has", "a common external tariff", "a single government", "no trade among members", "different tariffs among members", "Members apply the same duties to outsiders."],
          ["M", "A common market allows, in addition to free trade among members,", "free movement of labour and capital", "a ban on all imports", "separate tariffs against outsiders", "one political leader", "Factors of production move freely."],
          ["M", "The secretariat of the African Continental Free Trade Area is located in", "Accra", "Abuja", "Addis Ababa", "Kigali", "The agreement itself was signed in Kigali in 2018."],
          ["H", "Trade among West African countries has remained low mainly because the countries", "produce similar primary products", "use a single currency", "have excellent transport links", "have no tariffs at all", "They have little to sell to one another."],
          ["H", "When members of a customs union switch from a cheaper outside supplier to a dearer partner supplier, the result is", "trade diversion", "trade creation", "dumping", "devaluation", "It is a loss from integration."],
          ["H", "The stage of integration at which members adopt common economic policies and often a single currency is", "an economic union", "a free trade area", "a preferential trade area", "a customs union", "The European Union has reached this stage for most members."],
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
        title: "Consumption, saving, investment and the multiplier",
        subtopics: ["Consumption and saving", "Propensities to consume and save", "Investment and its determinants", "The multiplier and equilibrium income"],
        objectives: ["Explain consumption and saving and their determinants", "Calculate average and marginal propensities to consume and save", "Explain investment and its determinants", "Calculate the multiplier and the equilibrium level of income"],
        lesson: {
          title: "Income Determination",
          summary: "Explain consumption, saving and investment and calculate the multiplier.",
          minutes: 40,
          notes: `## Income, consumption and saving
**Disposable income (Y)** is either spent or saved: **Y = C + S**.
- **consumption (C)** — spending on goods and services that satisfy wants directly
- **saving (S)** — the part of income **not spent** on consumption

### Determinants of consumption
the level of **income** (the most important); wealth; the rate of interest; expectations of prices and income; the distribution of income; availability of credit; taxation; habits and culture.

### Determinants of saving
income; the rate of interest; banking habit and financial institutions; price stability; family size; cultural attitudes; government policy.

## The consumption function
**C = a + bY**
where $a$ is **autonomous consumption** (spending even at zero income) and $b$ is the **marginal propensity to consume**.

## Propensities
- **average propensity to consume (APC)** = C ÷ Y
- **average propensity to save (APS)** = S ÷ Y
- **marginal propensity to consume (MPC)** = change in C ÷ change in Y
- **marginal propensity to save (MPS)** = change in S ÷ change in Y
**APC + APS = 1** and **MPC + MPS = 1**.
*Example:* income ₦5000, consumption ₦4000: saving ₦1000; APC = 0.8; APS = 0.2.
*Example:* income rises by ₦1000 and consumption by ₦750: MPC = **0.75**; MPS = **0.25**.
MPC is less than 1: as income rises, consumption rises, but by less.

## Investment
**Spending on capital goods** — plant, machinery, buildings, stocks — which increases the capacity to produce. (Buying shares is financial, not real, investment.)
- **gross investment** — total spending on capital goods
- **net investment** = gross investment − depreciation
- **autonomous investment** — independent of income (government projects)
- **induced investment** — caused by a rise in income or demand
### Determinants
- the **rate of interest** — lower rates encourage investment
- **expected profit** (the marginal efficiency of capital)
- the level of **income and demand**
- **business confidence** and political stability
- **government policy** — taxes, incentives
- **technology**; availability of credit
- the level of saving

## Equilibrium national income
In a simple economy, income is in equilibrium when
- **aggregate demand equals output: Y = C + I**, or equivalently
- **saving equals investment: S = I**
*Example:* C = 100 + 0.8Y and I = 100. Then Y = 100 + 0.8Y + 100, so 0.2Y = 200 and **Y = 1000**.
With government and trade: **Y = C + I + G + (X − M)**.
**Injections** — investment, government spending, exports — raise income; **leakages (withdrawals)** — saving, taxes, imports — lower it. Equilibrium: injections = leakages.

## The multiplier
An increase in investment (or any injection) raises income by **more than** the original amount, because the spending becomes income to others, who spend part of it, and so on.
**multiplier (k) = 1 ÷ (1 − MPC) = 1 ÷ MPS**
**change in income = k × change in investment**
*Examples:*
- MPC = 0.8: k = 1 ÷ 0.2 = **5**; an extra ₦100 million of investment raises income by **₦500 million**
- MPC = 0.75: k = **4**
- MPS = 0.2 and investment rises by ₦50 million: income rises by **₦250 million**
The larger the MPC, the larger the multiplier. It also works in reverse when investment falls.
### Limitations in developing countries
leakages into imports; shortage of capacity to produce more — so extra spending may raise prices rather than output.

## The accelerator
A rise in consumer demand leads to a **more than proportionate rise in investment** in capital goods needed to produce the extra output.

## The paradox of thrift
If everyone tries to save more, total spending and income fall, and total saving may not rise at all.

## Inflationary and deflationary gaps
- **inflationary gap** — aggregate demand exceeds full-employment output
- **deflationary gap** — aggregate demand is too low for full employment`,
          examples: `**Example 1.** Income is ₦8000 and consumption ₦6000. Find the APC and APS. *Solution:* **0.75** and **0.25**.

**Example 2.** MPC = 0.9. Find the multiplier. *Solution:* 1 ÷ 0.1 = **10**.

**Example 3.** C = 50 + 0.75Y and I = 150. Find the equilibrium income. *Solution:* 0.25Y = 200, so Y = **800**.`,
        },
        questions: [
          ["E", "The part of disposable income that is not spent on consumption is", "saving", "investment", "taxation", "profit", "Income is either consumed or saved."],
          ["E", "Spending on capital goods such as machinery and factory buildings is", "investment", "consumption", "saving", "hoarding", "It increases the capacity to produce."],
          ["E", "The sum of the marginal propensity to consume and the marginal propensity to save is", "one", "zero", "two", "ten", "Every extra naira is either spent or saved."],
          ["M", "When income is ₦5000 and consumption is ₦4000, the average propensity to consume is", "0.8", "0.2", "1.25", "0.4", "4000 ÷ 5000. Answer: 0.8."],
          ["M", "Income rises by ₦1000 and consumption rises by ₦750. The marginal propensity to consume is", "0.75", "0.25", "1.33", "7.5", "750 ÷ 1000. Answer: 0.75."],
          ["M", "If the marginal propensity to consume is 0.8, the multiplier is", "5", "8", "1.25", "0.2", "1 ÷ (1 − 0.8). Answer: 5."],
          ["M", "A fall in the rate of interest is likely to", "increase investment", "reduce investment", "leave investment unchanged", "increase saving sharply", "Borrowing for capital projects becomes cheaper."],
          ["H", "With a marginal propensity to consume of 0.8, an increase in investment of ₦100 million will raise national income by", "₦500 million", "₦80 million", "₦125 million", "₦180 million", "The multiplier is 5."],
          ["H", "Given C = 100 + 0.8Y and I = 100, the equilibrium level of income is", "1000", "500", "250", "2000", "0.2Y = 200. Answer: 1000."],
          ["H", "The marginal propensity to save is 0.2 and investment rises by ₦50 million. National income rises by", "₦250 million", "₦10 million", "₦100 million", "₦62.5 million", "The multiplier is 1 ÷ 0.2 = 5."],
        ],
      },
      {
        week: 2,
        title: "Fiscal policy, the budget and public debt",
        subtopics: ["Fiscal policy and its objectives", "The budget and types of budget", "Public debt", "Burden and management of public debt"],
        objectives: ["Explain fiscal policy and its objectives", "Describe the budget and distinguish its types", "Explain public debt and its sources", "Discuss the burden and management of public debt"],
        lesson: {
          title: "Managing the Economy Through the Budget",
          summary: "Explain fiscal policy, types of budget and the national debt.",
          minutes: 40,
          notes: `## Fiscal policy
The **use of government revenue (taxation) and expenditure to influence the level of economic activity**.
### Objectives
- **price stability** — controlling inflation and deflation
- **full employment**
- **economic growth**
- **equitable distribution** of income
- balance of payments equilibrium
- redirecting resources into desired sectors

### Types
- **expansionary fiscal policy** — **higher government spending and/or lower taxes**, to raise demand during unemployment or recession; it usually means a budget deficit
- **contractionary fiscal policy** — **lower spending and/or higher taxes**, to reduce demand during inflation; it tends towards a budget surplus

### Fiscal and monetary policy
Fiscal policy works through the **budget**, and is decided by the government and legislature; **monetary policy** works through the **money supply and interest rates**, and is carried out by the central bank. The two should support each other.

## The budget
A **financial statement of the government's estimated revenue and proposed expenditure for a period, usually one year**. In Nigeria it is presented by the President to the National Assembly as the Appropriation Bill.
### Functions
- a plan for raising and spending public money
- an instrument of **economic policy** and control
- allocates resources among sectors
- redistributes income
- provides a basis for **accountability**

### Types
| Type | Meaning | Effect |
|---|---|---|
| **balanced budget** | revenue **equals** expenditure | neutral |
| **surplus budget** | revenue **exceeds** expenditure | deflationary — used to fight inflation |
| **deficit budget** | expenditure **exceeds** revenue | expansionary — used to fight unemployment; may be inflationary |
*Example:* revenue ₦800 billion and expenditure ₦950 billion: a **deficit of ₦150 billion**.

### Deficit financing
Covering the gap by **borrowing** (at home or abroad), **printing money** (borrowing from the central bank), or drawing on reserves. Financing by printing money is highly inflationary.

## Public (national) debt
The **total amount owed by the government** to lenders at home and abroad.
- **internal (domestic) debt** — owed to residents: treasury bills, treasury certificates, development stocks and **bonds**, held by banks, pension funds and individuals
- **external (foreign) debt** — owed to foreign governments, the **World Bank**, the **IMF**, the **African Development Bank**, the Paris and London Clubs of creditors and foreign bond holders
- **short-term**, medium-term and **long-term** debt
- **productive (reproductive) debt** — for projects that yield income to repay it; **dead-weight debt** — for wars or consumption, with no asset to show

### Why governments borrow
to finance **budget deficits**; to finance **development projects**; to meet emergencies — war, disasters; to correct balance of payments difficulties; to control inflation (borrowing mops up spending power); to service existing debt.

## Burden of public debt
### External debt
- **debt servicing** (interest and repayment) drains **foreign exchange**
- fewer resources for education, health and infrastructure
- conditions imposed by creditors reduce economic independence
- a falling exchange rate increases the burden in local currency
- it discourages investors; future generations must pay
### Internal debt
- interest is paid from taxes — a transfer from taxpayers to lenders
- heavy government borrowing may "**crowd out**" private borrowers and raise interest rates
- it is less burdensome than external debt, because payments stay within the economy

## Debt management
- borrowing only for **productive projects**
- **rescheduling** — spreading repayment over a longer period
- **refinancing** — new loans on easier terms to repay old ones
- **debt relief or cancellation**; **debt-equity swaps**
- raising revenue and exports; cutting waste
- limits on borrowing; transparency
In Nigeria, the **Debt Management Office** was set up in **2000**; in **2005** the country obtained substantial **debt relief from the Paris Club**.

## Limitations of fiscal policy in developing countries
a narrow tax base and tax evasion; dependence on a volatile source of revenue (oil); a large informal sector; delays in passing and implementing budgets; corruption; poor data.`,
          examples: `**Example 1.** Define a deficit budget. *Answer:* One in which **planned expenditure exceeds expected revenue**.

**Example 2.** What fiscal measures reduce inflation? *Answer:* **Higher taxes and lower government spending** (a contractionary policy).

**Example 3.** Distinguish internal from external debt. *Answer:* **Internal** debt is owed to **residents**; **external** debt to **foreign lenders**.`,
        },
        questions: [
          ["E", "The use of government revenue and expenditure to regulate the economy is", "fiscal policy", "monetary policy", "commercial policy", "incomes policy", "It operates through the budget."],
          ["E", "A statement of the government's estimated revenue and proposed expenditure for a year is", "a budget", "a balance sheet", "a census", "a development plan", "It is presented to the legislature for approval."],
          ["E", "A budget in which expected revenue is equal to planned expenditure is", "a balanced budget", "a deficit budget", "a surplus budget", "a supplementary budget", "It has neither surplus nor deficit."],
          ["M", "A government's revenue is ₦800 billion and its expenditure ₦950 billion. The budget shows", "a deficit of ₦150 billion", "a surplus of ₦150 billion", "a balance", "a surplus of ₦1750 billion", "Expenditure exceeds revenue."],
          ["M", "To reduce unemployment during a recession, the government should adopt", "an expansionary fiscal policy", "a contractionary fiscal policy", "a surplus budget", "higher taxes", "More spending and lower taxes raise demand."],
          ["M", "Debt owed by a government to lenders outside the country is", "external debt", "internal debt", "dead-weight debt only", "floating debt", "It is serviced in foreign exchange."],
          ["M", "Treasury bills and government bonds sold to residents are instruments of", "internal borrowing", "external borrowing", "taxation", "foreign aid", "They form part of the domestic debt."],
          ["H", "A surplus budget is appropriate during a period of", "inflation", "mass unemployment", "deflation", "recession", "It withdraws spending power from the economy."],
          ["H", "A major burden of external debt on a developing country is that", "debt servicing uses up scarce foreign exchange", "it increases foreign reserves", "interest is paid to local taxpayers", "it reduces imports automatically", "Less is left for imports and development."],
          ["H", "Spreading the repayment of a debt over a longer period by agreement with creditors is called", "debt rescheduling", "debt repudiation", "deficit financing", "devaluation", "It eases the immediate burden of servicing."],
        ],
      },
      {
        week: 3,
        title: "Industrialisation in Nigeria",
        subtopics: ["Meaning and importance of industrialisation", "Strategies of industrialisation", "Government policies and agencies", "Problems and prospects"],
        objectives: ["Explain industrialisation and its importance", "Describe the strategies of industrialisation", "Describe government policies and agencies for industrial development", "Discuss the problems and prospects of industrialisation in Nigeria"],
        lesson: {
          title: "Building an Industrial Economy",
          summary: "Explain the strategies, policies and problems of industrialisation in Nigeria.",
          minutes: 40,
          notes: `## Industrialisation
The **process of building up a country's capacity to manufacture goods** — a shift from dependence on agriculture and raw materials to manufacturing.

## Importance
- **employment**
- higher **national income** and living standards
- **diversification** — less dependence on one export
- saving foreign exchange (fewer imports) and earning it (exports)
- a market for agricultural and mineral raw materials
- development of **skills and technology**
- government **revenue**
- growth of infrastructure and towns
- economic independence

## Types of industry
- **heavy** industries — iron and steel, cement, petrochemicals, fertiliser
- **light** industries — textiles, food and drinks, plastics, soap
- **small- and medium-scale enterprises (SMEs)** and **cottage industries** — widespread, labour-intensive, using local materials
- **agro-allied** industries — processing farm produce
- **assembly** plants — vehicles, electronics

## Strategies
### Import substitution
Producing at home goods formerly imported, behind protective tariffs.
- **advantages**: saves foreign exchange; creates jobs; a ready market exists
- **disadvantages**: dependence on imported machinery and inputs; high-cost, inefficient firms; small home market; consumer goods favoured over capital goods
### Export promotion
Producing manufactured goods for foreign markets, with incentives.
- **advantages**: larger market; economies of scale; foreign exchange; efficiency through competition
- **disadvantages**: strong foreign competition; barriers in rich countries; need for quality and reliable infrastructure
### Other approaches
resource-based industrialisation (processing local raw materials); capital-goods industries; industrial clusters and estates.

## Labour- and capital-intensive methods
- **labour-intensive** — more labour relative to capital; creates jobs; suits countries with abundant labour
- **capital-intensive** — more machinery; higher output and quality, but fewer jobs and more foreign exchange

## Government policies
- **indigenisation** — the **Nigerian Enterprises Promotion Decrees of 1972 and 1977** reserved certain businesses for Nigerians and required Nigerian participation in others, to give citizens control of the economy
- direct investment in steel, refineries, fertiliser, paper and cement
- **protection** — tariffs and bans on some imports
- **incentives** — tax holidays (pioneer status), export incentives, duty concessions
- **industrial estates** and **export processing / free trade zones** (Calabar, Lekki, Onne)
- **privatisation and commercialisation** of public enterprises (from 1988)
- **local content** and "made in Nigeria" policies
- support for **SMEs**

## Agencies and institutions
- the **Bank of Industry** — long-term industrial finance
- the **Small and Medium Enterprises Development Agency of Nigeria (SMEDAN)**
- the **Nigerian Investment Promotion Commission (NIPC)**
- the **Nigerian Export Promotion Council (NEPC)**; the Nigerian Export-Import Bank
- the **Standards Organisation of Nigeria (SON)**; the Raw Materials Research and Development Council
- the **Industrial Training Fund (ITF)**
- the **Manufacturers Association of Nigeria (MAN)** — the manufacturers' own body

## Problems
- **inadequate and unreliable electricity**
- **shortage of capital**; high interest rates
- **dependence on imported machinery, spare parts and raw materials**
- poor **transport** and other infrastructure
- shortage of **skilled manpower** and technical know-how
- a **small effective market** — low incomes
- **competition from imports** and smuggling
- unstable policies; multiple taxes and levies
- low capacity utilisation; high costs
- insecurity; corruption
- scarcity of foreign exchange

## Solutions and prospects
steady power; better roads, rail and ports; long-term credit at low interest; technical and vocational education; research and local sourcing of raw materials; consistent policies; curbing smuggling; encouraging foreign and local investors; regional markets (ECOWAS, AfCFTA). Nigeria's large population, raw materials and gas reserves offer great potential.

## Agriculture and industry
They are complementary: farms supply raw materials and food; factories supply tools, fertiliser and processing; each is a market for the other.`,
          examples: `**Example 1.** What is import substitution? *Answer:* **Producing locally goods that were formerly imported**.

**Example 2.** State the aim of the indigenisation decrees. *Answer:* To give **Nigerians ownership and control** of businesses.

**Example 3.** Give three problems of industrialisation in Nigeria. *Answer:* **Poor power supply, shortage of capital and dependence on imported inputs**.`,
        },
        questions: [
          ["E", "The process of building up a country's capacity to manufacture goods is", "industrialisation", "urbanisation", "indigenisation", "privatisation", "It reduces dependence on primary production."],
          ["E", "Producing at home goods that were formerly imported is known as", "import substitution", "export promotion", "dumping", "deregulation", "It saves foreign exchange."],
          ["E", "An advantage of industrialisation is that it", "creates employment", "increases dependence on imports of manufactures", "reduces national income", "discourages the acquisition of skills", "Factories absorb labour."],
          ["M", "The policy of reserving certain businesses for Nigerians under the decrees of 1972 and 1977 was", "indigenisation", "privatisation", "commercialisation", "liberalisation", "It aimed at local ownership and control."],
          ["M", "A method of production that uses more labour relative to capital is described as", "labour-intensive", "capital-intensive", "automated", "extractive", "It creates more jobs."],
          ["M", "The institution that provides long-term finance for industries in Nigeria is the", "Bank of Industry", "Federal Mortgage Bank", "Nigerian Stock Exchange", "Standards Organisation of Nigeria", "It is a development bank."],
          ["M", "A tax holiday granted to new industries is an example of", "an industrial incentive", "an indirect tax", "a quota", "an embargo", "It encourages investment."],
          ["H", "A weakness of import substitution as practised in Nigeria is that the industries", "depend heavily on imported machinery and raw materials", "produce only for export", "use no foreign exchange", "need no protection", "Foreign exchange is still spent on inputs."],
          ["H", "The most frequently cited obstacle to manufacturing in Nigeria is", "inadequate and unreliable power supply", "an excess of skilled technicians", "too large a home market", "too little competition from imports", "Firms rely on costly private generators."],
          ["H", "Export promotion is preferred by some economists to import substitution because it", "exposes firms to competition and a larger market", "requires no quality standards", "avoids all foreign competition", "needs no infrastructure", "Firms must become efficient to sell abroad."],
        ],
      },
      {
        week: 4,
        title: "Human capital development",
        subtopics: ["Meaning and importance of human capital", "Education and training", "Health and productivity", "Manpower planning, brain drain and employment programmes"],
        objectives: ["Explain human capital and its importance in development", "Explain the role of education and training", "Explain the link between health and productivity", "Discuss manpower planning, brain drain and employment programmes"],
        lesson: {
          title: "Investing in People",
          summary: "Explain why the development of human resources is central to economic progress.",
          minutes: 40,
          notes: `## Human capital
The **knowledge, skills, health and abilities of the people** that make them productive. **Human capital development** is the process of improving these through **education, training and health care**.

## Importance
- raises the **productivity** and efficiency of labour
- supplies the skilled manpower that makes physical capital and natural resources useful
- encourages **innovation** and the adoption of new technology
- raises incomes and reduces poverty
- produces entrepreneurs and managers
- improves health, family welfare and civic life
- attracts investment
Countries with few natural resources, such as Japan and Singapore, grew rich mainly through their people.

## Education and training
### Forms
- **formal education** — primary, secondary and tertiary institutions
- **non-formal education** — adult literacy, extra-mural classes
- **vocational and technical education** — practical skills for work
- **on-the-job training** and apprenticeship
- **in-service training**, workshops and seminars
- entrepreneurship education

### Policies in Nigeria
- **Universal Primary Education (1976)** and **Universal Basic Education (1999)** — free, compulsory basic schooling
- the 6-3-3-4 and 9-3-4 systems, stressing vocational subjects
- expansion of universities, polytechnics and colleges of education
- the **Industrial Training Fund (1971)** and the Students' Industrial Work Experience Scheme
- scholarships, education trust funds and student loans

### Problems
inadequate funding; poor facilities; shortage of qualified teachers; strikes; a curriculum weak in practical skills; many children out of school; a mismatch between graduates' skills and employers' needs; examination malpractice.

## Health and productivity
Healthy workers are stronger, more alert and absent less often, and live longer working lives.
- measures: primary health care; immunisation; clean water and sanitation; nutrition; hospitals; health insurance
- problems: inadequate funding and facilities; shortage and emigration of doctors and nurses; preventable diseases such as malaria; poor nutrition

## Indicators of human development
literacy rate; school enrolment; life expectancy; infant and maternal mortality; access to water and health care — combined in the **Human Development Index**.

## Manpower planning
**Forecasting the future demand for and supply of different kinds of labour and taking steps to match them.**
### Aims
to avoid shortages and surpluses of skills; to guide educational planning; to reduce unemployment; to use human resources fully.
### Problems
inadequate data; rapid changes in technology and the economy; poor co-ordination between schools and industry.

## Brain drain
The **emigration of highly skilled people** — doctors, nurses, engineers, academics — to other countries.
### Causes
low pay and poor conditions; unemployment; poor facilities; insecurity and political instability; better opportunities abroad.
### Effects
loss of skills and of the money spent on training; weaker health and education services; but **remittances**, new skills and contacts may return.
### Remedies
better pay and conditions; adequate equipment; security; opportunities at home; involving the diaspora in development.

## Employment and empowerment programmes
- the **National Directorate of Employment (NDE), 1986** — vocational skills, small-scale enterprise and agricultural programmes
- the National Poverty Eradication Programme (2001)
- **N-Power** and other social investment programmes (2016)
- youth enterprise schemes; skills acquisition centres; microfinance
- the **National Youth Service Corps (1973)** — a year of service that also gives work experience

## Labour productivity
Output per worker. It depends on education and skill, health, tools and technology, management, working conditions and incentives.

## Population quality and quantity
A large population is an asset only if it is **educated, healthy and employed**; otherwise it becomes a burden. A young population offers a "demographic dividend" if jobs and skills are provided.`,
          examples: `**Example 1.** Define human capital. *Answer:* The **knowledge, skills and health** of people that make them productive.

**Example 2.** Give two causes of brain drain. *Answer:* **Low pay and poor working conditions**, and **better opportunities abroad**.

**Example 3.** What is manpower planning? *Answer:* **Forecasting and matching** the future demand for and supply of different kinds of labour.`,
        },
        questions: [
          ["E", "The knowledge, skills and health of a country's people are referred to as", "human capital", "physical capital", "social overhead capital", "working capital", "They make labour productive."],
          ["E", "The emigration of highly skilled people to other countries is called", "brain drain", "rural–urban drift", "capital flight", "deregulation", "Doctors and engineers moving abroad are examples."],
          ["E", "Human capital is developed mainly through", "education, training and health care", "printing more money", "importing machinery", "reducing wages", "These raise the quality of labour."],
          ["M", "The National Directorate of Employment was established in", "1986", "1960", "1973", "2004", "It promotes skills and self-employment."],
          ["M", "Forecasting the future demand for and supply of different types of labour is", "manpower planning", "collective bargaining", "deficit financing", "revenue allocation", "It guides education and training."],
          ["M", "Training received by workers while they are actually doing their jobs is", "on-the-job training", "formal schooling", "adult literacy", "pre-school education", "They learn by working under supervision."],
          ["M", "Good health contributes to economic development mainly by", "raising the productivity of labour", "reducing the labour force", "increasing absenteeism", "lowering life expectancy", "Healthy workers produce more."],
          ["H", "A major cause of the brain drain from developing countries is", "poor remuneration and working conditions at home", "an excess of jobs for professionals at home", "high salaries at home", "restrictions on travel", "Skilled people are attracted by better conditions abroad."],
          ["H", "Countries such as Japan and Singapore, with few natural resources, became rich mainly through", "the development of their human resources", "large mineral exports", "subsistence agriculture", "foreign aid alone", "Skilled people made up for the lack of resources."],
          ["H", "A possible benefit of the emigration of skilled workers to their home country is", "remittances sent home", "loss of training costs", "shortage of doctors", "weaker universities", "Money sent to families adds to income and foreign exchange."],
        ],
      },
      {
        week: 5,
        title: "Economic reform programmes in Nigeria",
        subtopics: ["The Structural Adjustment Programme", "Privatisation, commercialisation and deregulation", "Poverty alleviation programmes", "Financial sector reforms and the fight against corruption"],
        objectives: ["Describe the objectives and elements of the Structural Adjustment Programme", "Explain privatisation, commercialisation and deregulation", "Describe poverty alleviation programmes", "Describe financial sector reforms and anti-corruption measures"],
        lesson: {
          title: "Reforming the Economy",
          summary: "Describe the major economic reform programmes in Nigeria and assess their effects.",
          minutes: 40,
          notes: `## Background
The fall in oil prices in the early 1980s exposed the weaknesses of an economy dependent on oil: falling revenue, heavy foreign debt, balance of payments deficits, factories short of imported inputs and rising unemployment. Reforms were introduced to restructure the economy.

## The Structural Adjustment Programme (SAP), 1986
### Objectives
- to **restructure and diversify** the productive base, reducing dependence on oil and imports
- to achieve fiscal and balance of payments viability
- to lay the basis for sustainable, non-inflationary growth
- to reduce the dominance of unproductive public-sector investment and enlarge the role of the private sector
### Elements
- **devaluation** of the naira through a market-determined exchange rate (the Second-tier Foreign Exchange Market)
- **trade liberalisation** — abolition of import licences
- **deregulation** of interest rates and prices; abolition of commodity boards
- **removal of subsidies**, notably on petroleum products
- **privatisation and commercialisation** of public enterprises
- reduced public spending; stricter fiscal discipline
### Effects
non-oil exports and local sourcing of raw materials were encouraged, but there were also sharp **inflation**, a falling naira, retrenchment, higher cost of living and hardship.

## Privatisation and commercialisation
- **privatisation** — the **transfer of ownership and control** of government enterprises to private individuals and firms, by selling shares or assets
- **commercialisation** — reorganising a public enterprise to **operate profitably without subsidy**, while the government retains ownership
The Technical Committee on Privatisation and Commercialisation (1988) was succeeded by the **Bureau of Public Enterprises (BPE)** in 1999.
### Reasons
inefficiency and losses of public corporations; the drain on public funds; corruption and political interference; the need to raise revenue, widen share ownership and attract investment.
### Advantages
greater efficiency; revenue for government; less waste; competition and better service; development of the capital market.
### Disadvantages
loss of jobs; higher prices; public assets may pass to a wealthy few or to foreigners; private monopolies may replace public ones; essential services may be neglected where unprofitable.

## Deregulation
The **removal of government controls** from an industry so that market forces operate — in banking, telecommunications (licensing of GSM operators in 2001), aviation, power and the downstream petroleum sector.

## Later reform programmes
- **Vision 2010**; the **National Economic Empowerment and Development Strategy (NEEDS), 2004** — wealth creation, employment generation, poverty reduction and value reorientation
- the **Millennium Development Goals (2000–2015)** — eight goals, including halving extreme poverty and achieving universal primary education — followed by the **Sustainable Development Goals (2015–2030)** — seventeen goals
- the Economic Recovery and Growth Plan (2017); the National Development Plan (2021–2025)

## Poverty alleviation
**Poverty** is the inability to meet basic needs — food, shelter, clothing, health and education.
### Causes
unemployment; low productivity; illiteracy; rapid population growth; inequality; corruption; inflation; poor infrastructure; conflict.
### Programmes
Operation Feed the Nation (1976); the Green Revolution (1980); DFRRI (1986); the **National Directorate of Employment (1986)**; the Better Life Programme (1987); the People's Bank and community banks (1989–90); the Family Economic Advancement Programme (1997); the **National Poverty Eradication Programme (NAPEP), 2001**; conditional cash transfers and **N-Power (2016)**; microfinance.
### Why many programmes failed
poor targeting; corruption; lack of continuity; inadequate funding; political interference; weak monitoring.

## Financial sector reforms
- **bank consolidation (2004–2005)** — the minimum capital of banks was raised to **₦25 billion**, reducing 89 banks to 25 stronger ones through mergers
- the **Nigeria Deposit Insurance Corporation (1988)**
- **pension reform (2004)** — a contributory pension scheme managed by pension fund administrators
- microfinance policy; the cashless policy and electronic payments; the bank verification number
- the **Treasury Single Account (2015)** — government revenues paid into one account at the central bank to block leakages

## Fighting corruption
The Independent Corrupt Practices Commission (2000); the **Economic and Financial Crimes Commission (2003)**; the Code of Conduct Bureau; public procurement and fiscal responsibility laws; due process; the extractive industries transparency initiative.

## Assessment
Reforms improved telecommunications and banking and reduced the debt burden, but poverty, unemployment, inflation and dependence on oil remain serious. Success requires consistency, good governance, investment in people and infrastructure, and policies that protect the poor.`,
          examples: `**Example 1.** Distinguish privatisation from commercialisation. *Answer:* **Privatisation** transfers **ownership** to private hands; **commercialisation** keeps public ownership but requires the enterprise to **run profitably**.

**Example 2.** State two elements of SAP. *Answer:* **Devaluation of the naira** and **removal of subsidies**.

**Example 3.** What was the minimum capital set for banks in the 2004–2005 consolidation? *Answer:* **₦25 billion**.`,
        },
        questions: [
          ["E", "The transfer of ownership of government enterprises to private individuals and firms is", "privatisation", "commercialisation", "indigenisation", "nationalisation", "Shares or assets are sold to the public."],
          ["E", "The removal of government controls from an industry so that market forces operate is", "deregulation", "nationalisation", "rationing", "price control", "Telecommunications and banking were reformed in this way."],
          ["E", "The inability of people to meet their basic needs of food, shelter and clothing is", "poverty", "inflation", "deflation", "devaluation", "Reform programmes aim to reduce it."],
          ["M", "Reorganising a public enterprise to operate profitably without subsidy while it remains government-owned is", "commercialisation", "privatisation", "liquidation", "indigenisation", "Ownership does not change."],
          ["M", "One element of the Structural Adjustment Programme was", "the removal of subsidies", "the creation of commodity boards", "the fixing of interest rates by government", "the banning of exports", "Subsidies on petroleum products were reduced."],
          ["M", "The agency responsible for privatisation in Nigeria since 1999 is the", "Bureau of Public Enterprises", "Debt Management Office", "National Directorate of Employment", "Corporate Affairs Commission", "It succeeded an earlier technical committee."],
          ["M", "The Sustainable Development Goals, adopted in 2015, consist of", "seventeen goals", "eight goals", "five goals", "twenty goals", "They replaced the eight Millennium Development Goals."],
          ["H", "In the bank consolidation exercise of 2004–2005, the minimum capital base of banks was raised to", "₦25 billion", "₦2 billion", "₦500 million", "₦100 billion", "The number of banks fell from 89 to 25."],
          ["H", "A likely disadvantage of privatisation is that", "workers may lose their jobs and prices may rise", "government revenue falls to zero", "efficiency always declines", "public enterprises multiply", "New owners cut costs and charge economic prices."],
          ["H", "The Treasury Single Account was introduced mainly to", "block leakages by paying all government revenue into one account", "increase the number of government bank accounts", "abolish the central bank", "fix the exchange rate", "It improves control over public funds."],
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
        title: "Index numbers and the interpretation of economic data",
        subtopics: ["Meaning and construction of index numbers", "Weighted index numbers and the consumer price index", "Real and nominal values", "Interpreting tables and graphs"],
        objectives: ["Explain and calculate simple index numbers", "Calculate a weighted price index", "Convert nominal values to real values", "Interpret economic data presented in tables and graphs"],
        lesson: {
          title: "Measuring Change with Index Numbers",
          summary: "Construct index numbers and use them to interpret economic data.",
          minutes: 40,
          notes: `## Index numbers
An **index number** measures the **change in a variable (price, output, wages) over time** relative to a chosen **base year**, whose value is taken as **100**.

## Simple price index
**price index = (price in current year ÷ price in base year) × 100**
*Example:* a commodity cost ₦120 in the base year and ₦150 now: 150 ÷ 120 × 100 = **125** — a rise of 25%.
An index of 80 means a fall of 20%.

## Percentage change between two years
**(new index − old index) ÷ old index × 100**
From 125 to 150: 25 ÷ 125 × 100 = **20%**.

## Weighted index
Different items matter differently to consumers, so each is given a **weight** reflecting its importance in spending.
**weighted index = Σ(index × weight) ÷ Σ(weights)**
*Example:*
| Item | Index | Weight | Index × weight |
|---|---|---|---|
| food | 120 | 6 | 720 |
| clothing | 110 | 4 | 440 |
| total | | 10 | 1160 |
Weighted index = 1160 ÷ 10 = **116**.

## The consumer price index (CPI)
A weighted index of the prices of a **"basket" of goods and services** bought by a typical household — food, housing, clothing, transport, fuel. It is the usual measure of the **cost of living** and of **inflation**.
**inflation rate = (CPI this year − CPI last year) ÷ CPI last year × 100**

### Steps
1. choose a **base year** — a normal year
2. select the **basket** from a household expenditure survey
3. assign **weights**
4. collect prices regularly
5. calculate the index

### Problems
- choosing a truly "normal" base year
- the basket and weights become **out of date** as tastes and incomes change
- **quality changes** and new goods
- prices differ between places
- different groups have different spending patterns
- data collection is difficult

## Uses of index numbers
- measuring inflation and changes in the **value of money**
- adjusting wages, pensions and contracts to the cost of living
- comparing **real** incomes over time and between places
- calculating the **terms of trade**
- measuring changes in output (index of industrial production) and share prices

## Real and nominal values
- **nominal (money) values** are measured at current prices
- **real values** are adjusted for price changes
**real value = (nominal value ÷ price index) × 100**
*Examples:*
- a money income of ₦60 000 when the price index is 150: real income = 60 000 ÷ 150 × 100 = **₦40 000**
- nominal GDP of ₦330 billion with an index of 110: real GDP = **₦300 billion**
If money wages rise by 10% while prices rise by 15%, **real wages fall**.

## Interpreting tables
- read the **title, headings and units**
- find **totals, differences and percentage changes**
- look for the **highest and lowest** values and the **trend**
- relate the figures to economic theory

## Interpreting graphs
- note what each axis measures
- an upward slope shows a direct relationship; a downward slope an inverse one
- read off **equilibrium** points, shifts and gaps
- on a time series, describe the trend and any fluctuations

## Common calculations in data-response questions
percentage share = part ÷ total × 100; growth rate; mean; per capita values; balance of trade; budget deficit; elasticity; index numbers.`,
          examples: `**Example 1.** A good cost ₦400 in the base year and ₦500 in the current year. Find the price index. *Solution:* 500 ÷ 400 × 100 = **125**.

**Example 2.** A worker earns ₦90 000 when the price index is 120. Find the real income. *Solution:* 90 000 ÷ 120 × 100 = **₦75 000**.

**Example 3.** The CPI rises from 200 to 230 in a year. Find the inflation rate. *Solution:* 30 ÷ 200 × 100 = **15%**.`,
        },
        questions: [
          ["E", "In the construction of index numbers, the value for the base year is taken as", "100", "0", "1", "1000", "Other years are compared with it."],
          ["E", "The index most commonly used to measure changes in the cost of living is the", "consumer price index", "index of industrial production", "share price index", "terms of trade index", "It is based on a basket of household goods."],
          ["E", "Income measured in terms of what it can actually buy is called", "real income", "nominal income", "gross income", "transfer income", "It is adjusted for price changes."],
          ["M", "A commodity cost ₦120 in the base year and ₦150 in the current year. The price index for the current year is", "125", "80", "130", "30", "150 ÷ 120 × 100."],
          ["M", "A price index of 80 for the current year means that prices have", "fallen by 20% since the base year", "risen by 80%", "risen by 20%", "fallen by 80%", "The base year index is 100."],
          ["M", "The price index rises from 125 to 150. The percentage increase in prices is", "20%", "25%", "50%", "120%", "25 ÷ 125 × 100."],
          ["M", "A problem in constructing a consumer price index is that", "the basket of goods and weights become outdated", "prices never change", "there is only one commodity", "no base year is needed", "Tastes and spending patterns change over time."],
          ["H", "Food has an index of 120 and a weight of 6; clothing has an index of 110 and a weight of 4. The weighted price index is", "116", "115", "230", "118", "(720 + 440) ÷ 10."],
          ["H", "A worker's money income is ₦60 000 when the price index is 150. The real income, at base-year prices, is", "₦40 000", "₦90 000", "₦60 000", "₦400", "60 000 ÷ 150 × 100."],
          ["H", "If money wages rise by 10% while the price level rises by 15%, real wages", "fall", "rise by 25%", "rise by 5%", "remain unchanged", "Prices have risen faster than money wages."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: microeconomics",
        subtopics: ["Basic concepts and factors of production", "Demand, supply, price and elasticity", "Utility, production and costs", "Market structures and business organisations"],
        objectives: ["Recall the basic concepts of economics", "Solve problems on demand, supply, equilibrium and elasticity", "Solve problems on utility, production and costs", "Compare market structures and forms of business organisation"],
        lesson: {
          title: "Revision of Microeconomics",
          summary: "Revise the main ideas and calculations of microeconomics for the final examinations.",
          minutes: 40,
          notes: `## 1. Basic concepts
- scarcity → choice → **opportunity cost** (the alternative forgone); scale of preference
- economic systems: capitalism, socialism, mixed
- basic problems: what, how and for whom to produce
- factors and rewards: land — rent; labour — wages; capital — interest; entrepreneur — profit
- division of labour: advantages, disadvantages, limits (size of market)
- economies of scale: internal (technical, managerial, marketing, financial, risk-bearing) and external

## 2. Demand and supply
- **law of demand**: price up, quantity demanded down; **law of supply**: price up, quantity supplied up
- a change in the good's **own price** causes a **movement along** the curve; any other factor **shifts** it
- types of demand: joint, competitive, derived, composite; types of supply: joint, competitive
- exceptions: Giffen and ostentatious goods; the backward-bending supply of labour
- **equilibrium**: Qd = Qs
- price above equilibrium — surplus; below — shortage
- demand up — price and quantity up; supply up — price down, quantity up
- maximum price below equilibrium — shortage and black market; minimum price above — surplus

## 3. Elasticity
- PED = % change in quantity demanded ÷ % change in price
- greater than 1 elastic; less than 1 inelastic; 1 unitary; 0 perfectly inelastic (vertical); infinity perfectly elastic (horizontal)
- elastic demand: a price cut **raises** revenue; inelastic: a price rise raises revenue
- YED positive — normal; negative — inferior
- XED positive — substitutes; negative — complements
- PES = % change in quantity supplied ÷ % change in price
- tax burden falls on the consumer when demand is inelastic

## 4. Utility
- MU = change in TU; TU is maximum when MU = 0
- law of diminishing marginal utility
- equilibrium: MU = P; with several goods MUx ÷ Px = MUy ÷ Py

## 5. Production and costs
- AP = TP ÷ L; MP = change in TP; TP is maximum when MP = 0
- law of diminishing returns (short run); returns to scale (long run)
- TC = FC + VC; AC = TC ÷ Q; AFC = FC ÷ Q; MC = change in TC
- AFC falls continuously; AC and MC are U-shaped; MC cuts AC at its minimum
- TR = P × Q; profit = TR − TC; **profit is maximised where MC = MR**
- **break-even output = fixed cost ÷ (price − average variable cost)**

## 6. Market structures
| | Sellers | Product | Price |
|---|---|---|---|
| perfect competition | many | homogeneous | price taker; P = AR = MR |
| monopoly | one | no close substitute | price maker |
| monopolistic competition | many | differentiated | some control |
| oligopoly | few | either | interdependent |
Normal profit only in the long run under perfect and monopolistic competition; price discrimination needs separable markets with different elasticities.

## 7. Business organisations
sole proprietorship (unlimited liability); partnership (2–20); private company (up to 50 members, no public issue); public company (shares on the stock exchange); co-operative (one member, one vote); public corporation (government-owned).

## 8. Labour and population
unemployment types; mobility; trade unions and collective bargaining; Malthus; optimum population; dependency ratio.

## Examination technique
Define terms precisely; **draw and label diagrams** (axes, curves, equilibrium points); show every step of a calculation; give examples from Nigeria; answer the question asked, in points where possible.`,
          examples: `**Example 1.** Given Qd = 80 − 4P and Qs = 20 + 2P, find the equilibrium price and quantity. *Solution:* 60 = 6P, P = **₦10**; Q = **40**.

**Example 2.** Fixed cost is ₦600, price ₦40 and average variable cost ₦25. Find the break-even output. *Solution:* 600 ÷ 15 = **40 units**.

**Example 3.** Price falls by 10% and quantity demanded rises by 5%. Is demand elastic? *Solution:* PED = 0.5 — **inelastic**.`,
        },
        questions: [
          ["E", "The reward for capital as a factor of production is", "interest", "rent", "wages", "profit", "It is paid to the owners of capital."],
          ["E", "When a firm's output is zero, its total cost is equal to its", "fixed cost", "variable cost", "marginal cost", "average cost", "Variable cost is zero when nothing is produced."],
          ["E", "A market structure with many sellers of differentiated products is", "monopolistic competition", "perfect competition", "monopoly", "monopsony", "Brands are similar but not identical."],
          ["M", "Given Qd = 60 − 4P and Qs = 10 + 6P, the equilibrium price is", "₦5", "₦7", "₦10", "₦2.50", "50 = 10P. Answer: ₦5."],
          ["M", "When the price of a good falls from ₦100 to ₦90, quantity demanded rises from 50 to 60 units. The price elasticity of demand is", "2", "0.5", "1", "10", "A 20% change in quantity divided by a 10% change in price."],
          ["M", "A consumer's total utility rises from 50 to 58 utils when one more unit is consumed. The marginal utility of that unit is", "8 utils", "58 utils", "108 utils", "1.16 utils", "The change in total utility."],
          ["M", "A firm produces 40 units at a total cost of ₦1200. Its average cost is", "₦30", "₦48 000", "₦1160", "₦300", "1200 ÷ 40. Answer: ₦30."],
          ["H", "Given Qd = 60 − 4P and Qs = 10 + 6P, a maximum price fixed at ₦3 would create a shortage of", "20 units", "48 units", "28 units", "10 units", "Qd is 48 and Qs is 28."],
          ["H", "A firm has fixed costs of ₦500, sells its product at ₦50 per unit and has an average variable cost of ₦30. Its break-even output is", "25 units", "10 units", "50 units", "17 units", "500 ÷ (50 − 30)."],
          ["H", "A perfectly competitive firm sells at ₦20 per unit. The marginal costs of its 5th, 6th and 7th units are ₦18, ₦20 and ₦24. To maximise profit it should produce", "6 units", "5 units", "7 units", "4 units", "Marginal cost equals marginal revenue at the 6th unit."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: macroeconomics",
        subtopics: ["Money, banking and inflation", "National income and the multiplier", "Public finance and fiscal policy", "Growth, development and planning"],
        objectives: ["Recall the theory of money, banking and inflation", "Solve problems on national income and the multiplier", "Recall public finance, taxation and fiscal policy", "Recall economic growth, development and planning"],
        lesson: {
          title: "Revision of Macroeconomics",
          summary: "Revise the main ideas and calculations of macroeconomics for the final examinations.",
          minutes: 40,
          notes: `## 1. Money
- barter and the double coincidence of wants
- functions: medium of exchange, measure of value, store of value, standard of deferred payment
- qualities: acceptability, durability, portability, divisibility, homogeneity, scarcity, stability
- motives for holding money: transactions, precautionary, speculative
- **MV = PT**; the value of money varies inversely with the price level

## 2. Banking
- commercial banks: deposits, loans, payments; **credit creation**: total deposits = initial deposit ÷ cash ratio
- central bank: issues currency; banker to government and to banks; lender of last resort; controls credit
- instruments of monetary policy: open market operations, bank rate, cash and liquidity ratios, special deposits, directives, moral suasion
- to **reduce** the money supply: sell securities, raise the bank rate, raise the cash ratio
- money market (short-term) and capital market (long-term)

## 3. Inflation
- demand-pull and cost-push; hyperinflation; stagflation
- losers: fixed-income earners, creditors, savers; gainers: debtors, owners of real assets
- control: tight monetary policy; higher taxes and lower spending; increased output; price and wage control
- deflation is the opposite

## 4. National income
- GDP → **GNP = GDP + net factor income from abroad** → **NNP = GNP − depreciation**
- per capita income = national income ÷ population
- real income = nominal income ÷ price index × 100
- methods: income, output (value added), expenditure — Y = C + I + G + (X − M)
- problems: double counting, subsistence output, poor data
- limits as a welfare measure: distribution, prices, non-market output

## 5. Consumption, saving, investment
- APC = C ÷ Y; MPC = change in C ÷ change in Y; MPC + MPS = 1
- **multiplier = 1 ÷ MPS**; change in income = multiplier × change in investment
- equilibrium: Y = C + I, or S = I

## 6. Public finance
- revenue: taxes (direct and indirect), royalties, fees, loans, grants
- expenditure: recurrent and capital
- canons: equity, certainty, convenience, economy
- progressive, proportional, regressive taxes; incidence depends on elasticity
- budget: balanced, surplus (anti-inflation), deficit (anti-unemployment)
- public debt: internal and external; servicing; rescheduling

## 7. Growth and development
- growth: rise in real output; development: growth with better welfare and structural change
- features of developing countries; the vicious circle of poverty
- planning: short, medium, perspective, rolling; Nigerian plans 1962–68, 1970–74, 1975–80, 1981–85; SAP 1986; NEEDS 2004
- problems of planning: data, finance, instability, corruption

## 8. Unemployment
frictional, structural, seasonal, cyclical, disguised; rate = unemployed ÷ labour force × 100.

## Key formulas at a glance
| Quantity | Formula |
|---|---|
| bank multiplier | 1 ÷ cash ratio |
| income multiplier | 1 ÷ MPS |
| price index | current ÷ base × 100 |
| real value | nominal ÷ index × 100 |
| growth rate | change ÷ original × 100 |
| budget balance | revenue − expenditure |

## Technique
State the formula first; substitute with units (₦ million, %); interpret the answer in a sentence — "the budget is in deficit", "the economy grew by 5%".`,
          examples: `**Example 1.** With a cash ratio of 20%, how much total deposit can a bank create from ₦3000? *Solution:* 3000 × 5 = **₦15 000**.

**Example 2.** GNP is ₦1200 billion and depreciation ₦90 billion. Find NNP. *Solution:* **₦1110 billion**.

**Example 3.** MPC is 0.6 and investment rises by ₦40 million. Find the rise in income. *Solution:* multiplier 2.5; **₦100 million**.`,
        },
        questions: [
          ["E", "The buying and selling of government securities by the central bank to control the money supply is", "open market operations", "moral suasion", "deficit financing", "collective bargaining", "It is an instrument of monetary policy."],
          ["E", "Gross national product less depreciation gives", "net national product", "gross domestic product", "per capita income", "disposable income", "Depreciation is capital consumption."],
          ["E", "During inflation, lenders of money", "lose", "gain", "are unaffected", "become borrowers", "They are repaid in money of lower value."],
          ["M", "A bank keeps a cash ratio of 25% and receives a new deposit of ₦2000. The maximum total deposits it can create are", "₦8000", "₦500", "₦2500", "₦50 000", "₦2000 × (1 ÷ 0.25)."],
          ["M", "If the marginal propensity to consume is 0.75, the multiplier is", "4", "0.25", "7.5", "1.33", "1 ÷ (1 − 0.75)."],
          ["M", "A government expects revenue of ₦500 billion and plans to spend ₦620 billion. Its budget shows", "a deficit of ₦120 billion", "a surplus of ₦120 billion", "a deficit of ₦1120 billion", "a balance", "Expenditure exceeds revenue."],
          ["M", "In the equation MV = PT, if M = ₦1000, V = 5 and P = ₦10, the volume of transactions T is", "500", "50", "5000", "2", "1000 × 5 ÷ 10. Answer: 500."],
          ["H", "A country's national income is ₦800 billion and its population is 160 million. Its per capita income is", "₦5000", "₦500", "₦50 000", "₦2000", "800 billion ÷ 160 million."],
          ["H", "A country's nominal GDP is ₦330 billion and its price index is 110. Its real GDP is", "₦300 billion", "₦363 billion", "₦220 billion", "₦3 billion", "330 ÷ 110 × 100."],
          ["H", "To check inflation, the central bank is most likely to", "raise the cash reserve ratio and sell securities", "lower the bank rate and buy securities", "reduce the cash reserve ratio", "print more currency", "Both measures reduce the money available for lending."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: the Nigerian economy and international economics",
        subtopics: ["Agriculture, industry and petroleum", "Economic reforms and development problems", "International trade and the balance of payments", "Economic integration and international organisations"],
        objectives: ["Recall the roles and problems of the main sectors of the Nigerian economy", "Recall economic reform programmes and development problems", "Solve problems on international trade and the balance of payments", "Recall economic groupings and international organisations"],
        lesson: {
          title: "Revision of Applied Economics",
          summary: "Revise the Nigerian economy and international economics for the final examinations.",
          minutes: 40,
          notes: `## 1. Agriculture
- importance: food, employment, raw materials, foreign exchange, income, market for industry
- problems: land tenure, crude tools, finance, storage, transport, pests, weather, rural–urban migration
- solutions: credit, mechanisation, storage, roads, irrigation, extension services, co-operatives
- programmes: Operation Feed the Nation (1976), Green Revolution (1980), river basin authorities, ADPs; commodity boards abolished in 1986

## 2. Industry
- importance: jobs, income, diversification, foreign exchange, technology
- location factors: raw materials, market, power, transport, labour, capital, government
- localisation: advantages (skilled labour, subsidiary industries) and disadvantages (structural unemployment, congestion)
- strategies: import substitution; export promotion
- policies: indigenisation (1972, 1977); privatisation; industrial estates; incentives
- problems: power, capital, imported inputs, skills, market, policy instability

## 3. Petroleum
- found in 1956; OPEC membership 1971; NNPC 1977
- upstream (exploration, production) and downstream (refining, marketing)
- benefits: foreign exchange, revenue, energy, raw materials, jobs
- problems: over-dependence, price shocks, neglect of agriculture, pollution, unrest
- remedy: diversification

## 4. Reforms and development
- SAP 1986: devaluation, deregulation, subsidy removal, privatisation
- privatisation (ownership transferred) and commercialisation (ownership retained)
- NEEDS 2004; MDGs and SDGs; poverty programmes (NDE 1986, NAPEP 2001)
- bank consolidation: ₦25 billion; Treasury Single Account
- human capital: education, health, brain drain

## 5. Distribution and finance
- channel: producer → wholesaler → retailer → consumer
- financial institutions: central bank (1959), commercial, merchant, development and microfinance banks; insurance; NDIC (1988); stock exchange

## 6. International trade
- basis: differences in resources, climate, skills and costs
- **comparative advantage**: specialise where opportunity cost is lowest
- **terms of trade = export price index ÷ import price index × 100**
- advantages: wider market, variety, technology; disadvantages: dumping, dependence, imported inflation
- protection: tariffs, quotas, embargo, exchange control; arguments — infant industry, anti-dumping, balance of payments, employment, revenue

## 7. Balance of payments
- current account (visible and invisible), capital account, official settlements
- balance of trade = visible exports − visible imports
- correcting a deficit: export promotion, import restriction, devaluation, exchange control, deflation
- **devaluation**: exports cheaper, imports dearer; works when demand is elastic

## 8. Integration and organisations
- stages: free trade area → customs union (common external tariff) → common market (free factor movement) → economic union
- ECOWAS (1975, Lagos treaty; Abuja); AfCFTA (2018; Accra); African Union (2002)
- IMF — short-term balance of payments support; World Bank — long-term development loans; IDA — soft loans; IFC — private sector
- AfDB (1964, Abidjan); WTO (1995, Geneva); OPEC (1960, Vienna); ECA (Addis Ababa)

## Final advice
Use up-to-date Nigerian examples; balance every "advantages" answer with disadvantages where asked; in essays, plan first and write in clear paragraphs; in calculations, show the formula, the working and the unit.`,
          examples: `**Example 1.** The export price index is 110 and the import price index 125. Find the terms of trade. *Solution:* 110 ÷ 125 × 100 = **88** — unfavourable.

**Example 2.** Visible exports ₦700 m; visible imports ₦650 m; net invisibles −₦80 m. Find the current account balance. *Solution:* 50 − 80 = **−₦30 million**.

**Example 3.** Give two reasons for protecting home industries. *Answer:* To protect **infant industries** and to prevent **dumping**.`,
        },
        questions: [
          ["E", "Nigeria's most important export commodity is", "crude oil", "cocoa", "cotton", "tin", "It provides the bulk of foreign exchange earnings."],
          ["E", "The international body that gives short-term loans to countries with balance of payments difficulties is the", "International Monetary Fund", "World Trade Organization", "African Union", "Economic Commission for Africa", "It lends from members' quotas."],
          ["E", "The programme introduced in Nigeria in 1980 to boost food production was the", "Green Revolution", "Structural Adjustment Programme", "National Youth Service Corps", "Treasury Single Account", "It followed Operation Feed the Nation."],
          ["M", "A country's export price index is 150 and its import price index is 125. Its terms of trade are", "120", "83", "25", "275", "150 ÷ 125 × 100."],
          ["M", "One effect of the devaluation of a country's currency is that its", "exports become cheaper to foreigners", "imports become cheaper", "exports become dearer", "foreign debt burden falls in local currency", "Foreign buyers need less of their own currency."],
          ["M", "The abolition of commodity boards in Nigeria in 1986 was part of the", "Structural Adjustment Programme", "First National Development Plan", "indigenisation policy", "Land Use Act", "The programme deregulated the marketing of export crops."],
          ["M", "The imposition of tariffs to shield newly established local firms from foreign competition is justified by the", "infant industry argument", "theory of comparative advantage", "quantity theory of money", "law of diminishing returns", "Young firms need time to grow."],
          ["H", "A country has visible exports of ₦900 million, visible imports of ₦700 million and a net invisible deficit of ₦260 million. Its current account balance is", "a deficit of ₦60 million", "a surplus of ₦200 million", "a surplus of ₦460 million", "a deficit of ₦260 million", "+200 − 260. Answer: a deficit of ₦60 million."],
          ["H", "One worker in country X can produce 6 bags of rice or 3 bags of cocoa; one worker in country Y can produce 2 bags of rice or 2 bags of cocoa. According to comparative advantage, country Y should specialise in", "cocoa", "rice", "both goods", "neither good", "A bag of cocoa costs Y only 1 bag of rice, but costs X 2 bags."],
          ["H", "The feature that distinguishes a common market from a customs union is", "the free movement of labour and capital among members", "a common external tariff", "the removal of tariffs among members", "a single government", "Both have free trade and a common external tariff."],
        ],
      },
    ],
  },
];
