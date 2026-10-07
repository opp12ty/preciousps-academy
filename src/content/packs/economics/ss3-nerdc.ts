import type { PackTopic } from "../types";

/** SS3 Economics — topics introduced by the NERDC 2025 scheme (weeks are set in ss3.ts). */
type Topic = Omit<PackTopic, "week">;

export const asianTigers: Topic = {
  title: "Economic Lessons from the Asian Tigers and Japan",
  subtopics: ["Who the Asian Tigers are", "Economic history of Japan, 1960–2000", "Economic history of the Asian Tigers, 1960–2000", "Common features of their growth"],
  objectives: ["Identify the Asian Tigers", "Outline the economic history of Japan between 1960 and 2000", "Outline the economic history of the Asian Tigers between 1960 and 2000", "State the common features of their rapid growth"],
  lesson: {
    title: "The East Asian Economic Miracle",
    summary: "How Japan and four small Asian economies moved from poverty to wealth within a generation.",
    minutes: 40,
    notes: `## The Asian Tigers
The **Asian Tigers** (or Four Little Dragons) are **Hong Kong, Singapore, South Korea and Taiwan** — economies that grew very rapidly from the 1960s and became **high-income, industrialised** economies by the 1990s. They are also called **newly industrialised countries (NICs)**. Later followers — Malaysia, Thailand, Indonesia and the Philippines — are sometimes called the "Tiger Cubs".

In 1960 these economies were poor, with few natural resources. South Korea's income per head was then comparable to that of many African countries, including Nigeria and Ghana. By 2000 they were among the richest in the world.

## Japan, 1960–2000
- **Background:** Japan began modernising in the **Meiji era (from 1868)**. Defeated and devastated in 1945, it rebuilt with land reform, a new constitution and American assistance.
- **1960s — the "economic miracle":** Prime Minister Ikeda's **Income Doubling Plan (1960)** aimed to double national income in ten years; it was achieved in about seven. Growth averaged about **10% a year**. By **1968 Japan was the world's second-largest market economy**.
- **Industries:** steel, shipbuilding, chemicals, then **motor vehicles** and **electronics** (Toyota, Honda, Sony, Panasonic).
- **Institutions:** the **Ministry of International Trade and Industry (MITI)** guided industry; large business groups (**keiretsu**) linked firms and banks; lifetime employment and company loyalty; **quality control** and continuous improvement (**kaizen**); "just-in-time" production.
- **1973 and 1979 oil shocks:** Japan, an oil importer, responded with **energy-saving** and a shift to **high-technology** industries.
- **1980s:** huge export surpluses; a strong yen after the 1985 Plaza Accord; a **"bubble economy"** of soaring land and share prices.
- **1990s — the "lost decade":** the bubble burst around 1990–91; banks were left with bad loans; growth stagnated and prices fell (**deflation**).

## The Tigers, 1960–2000
| Economy | Path |
|---|---|
| **South Korea** | After the Korean War it was poor and aid-dependent. From 1962, **five-year plans** under Park Chung-hee promoted **exports**; large family-controlled conglomerates (**chaebol** — Samsung, Hyundai, LG) were supported with credit. Moved from textiles and wigs to steel, ships, cars and electronics. Joined the OECD in 1996. |
| **Taiwan** | **Land reform** raised farm incomes; **small and medium enterprises** led export growth; export-processing zones (Kaohsiung, 1966); later semiconductors and computers (Hsinchu Science Park). |
| **Singapore** | Independent in 1965 with no natural resources. Under Lee Kuan Yew it attracted **foreign multinational investment**, built a world-class **port**, airport and financial centre, kept government **clean and efficient**, and invested in housing and education. |
| **Hong Kong** | A British colony until 1997; a **free port** with low taxes and minimal regulation (**laissez-faire**). Grew through textiles, toys and electronics, then **finance, trade and shipping**, serving as the gateway to China. |

### The 1997 Asian financial crisis
Beginning in Thailand, sudden outflows of foreign capital caused currencies and stock markets to collapse. South Korea needed an **IMF rescue**; firms failed and unemployment rose. Recovery was fairly quick, but the crisis showed the dangers of heavy **short-term foreign borrowing** and weak bank regulation.

## Common features of their growth
1. **Export-oriented industrialisation** — producing manufactures for world markets.
2. Very high **savings and investment** rates (often over 30% of GDP).
3. Heavy investment in **education and skills**.
4. **Land reform** and productive agriculture (Japan, Korea, Taiwan).
5. A capable, **development-minded government** and long-term planning.
6. **Macroeconomic stability** — low inflation, sound budgets, competitive exchange rates.
7. Adoption and improvement of **foreign technology**.
8. Good **infrastructure**.
9. **Discipline, hard work** and co-operation between government and business.
10. Relatively **equal distribution** of the gains of growth.`,
    examples: `**Example 1.** Name the four Asian Tigers. *Answer:* **Hong Kong, Singapore, South Korea and Taiwan**.

**Example 2.** What is meant by Japan's "lost decade"? *Answer:* The period of **stagnation in the 1990s** after the bursting of the asset-price bubble.

**Example 3.** State the main industrial strategy of the Asian Tigers. *Answer:* **Export-oriented industrialisation**.`,
  },
  questions: [
    ["E", "Which of these is one of the Asian Tigers?", "South Korea", "India", "Vietnam", "Pakistan", "The four are Hong Kong, Singapore, South Korea and Taiwan."],
    ["E", "The Asian Tigers are also described as", "newly industrialised countries", "least developed countries", "primary producers", "centrally planned economies", "They industrialised rapidly from the 1960s."],
    ["E", "Japan's period of very rapid growth in the 1960s is commonly called the", "economic miracle", "lost decade", "great depression", "oil boom", "Growth averaged about 10 per cent a year."],
    ["M", "The main industrial strategy pursued by the Asian Tigers was", "export-oriented industrialisation", "import of finished goods", "dependence on mineral exports", "subsistence agriculture", "They produced manufactures for world markets."],
    ["M", "The Japanese ministry that guided industrial development after the Second World War was", "MITI", "OPEC", "NEPAD", "UNCTAD", "The Ministry of International Trade and Industry."],
    ["M", "The large family-controlled business groups that led South Korea's industrialisation are known as", "chaebol", "keiretsu", "kibbutzim", "soviets", "Samsung and Hyundai are examples."],
    ["M", "Singapore's growth strategy relied heavily on", "attracting foreign multinational investment", "exporting crude oil", "large-scale mining", "closing its ports", "It had no natural resources and welcomed foreign firms."],
    ["H", "The Asian financial crisis began in 1997 in", "Thailand", "Japan", "Singapore", "Taiwan", "The collapse of the Thai currency spread to the region."],
    ["H", "Japan's 'lost decade' of the 1990s followed", "the bursting of its asset-price bubble", "the first oil shock", "the Meiji restoration", "the Korean War", "Falling land and share prices left banks with bad loans."],
    ["H", "A feature common to Japan, South Korea and Taiwan before rapid industrialisation was", "land reform", "discovery of crude oil", "colonisation of other countries after 1960", "abolition of education", "Land reform raised rural incomes and equality."],
  ],
  jamb: [
    ["M", "Which of the following best explains the high rate of capital formation in the Asian Tigers?", "High domestic savings and investment", "Heavy dependence on food aid", "Large mineral deposits", "Low school enrolment", "Savings often exceeded 30 per cent of GDP."],
    ["H", "Japan's 1960 plan under Prime Minister Ikeda aimed to", "double national income within ten years", "nationalise all industries", "end all exports", "abolish private enterprise", "The Income Doubling Plan was achieved ahead of schedule."],
  ],
};

export const developmentLessons: Topic = {
  title: "Development Strategies of Asia, Europe and America: Lessons for Nigeria",
  subtopics: ["Development strategies of the Asian Tigers and Japan", "Development strategies of Europe", "Development strategies of America", "Lessons for the Nigerian economy"],
  objectives: ["Review the development strategies of the Asian Tigers and Japan", "Outline the strategies that developed Europe and America", "Compare these strategies with Nigeria's experience", "Draw lessons for the Nigerian economy"],
  lesson: {
    title: "What Nigeria Can Learn",
    summary: "A review of how the industrial economies developed, and the lessons their experience holds for Nigeria.",
    minutes: 40,
    notes: `## Strategies of the Asian Tigers and Japan
- **Export promotion** rather than prolonged import substitution.
- **Human capital**: universal basic education, technical and vocational training.
- **High savings** mobilised through banks and provident funds.
- **Agricultural reform first**, releasing food, labour and savings for industry.
- **Government–business partnership**; selective support for promising industries, tied to export performance.
- **Technology acquisition**: licensing, reverse engineering, then own research and development.
- **Infrastructure**: power, ports, roads and telecommunications.
- **Stable policies** and competent, largely merit-based civil services.

## Strategies of Europe
- **The Industrial Revolution** began in **Britain** in the eighteenth century — steam power, textiles, iron, railways — preceded by an **agricultural revolution** and helped by coal, capital, inventors, secure property rights and overseas markets.
- **Spread** to Belgium, France and Germany, with banks and the state financing railways and heavy industry.
- **Science and education** — technical universities and research.
- **Post-war reconstruction** — the **Marshall Plan (1948–52)** of American aid rebuilt Western Europe.
- **Economic integration** — the European Coal and Steel Community (1951), the **European Economic Community (Treaty of Rome, 1957)**, later the **European Union** with a single market and the euro. A large market allows specialisation and economies of scale.
- **Mixed economies and welfare states** — public education, health care and social security.

## Strategies of America
- A **free-enterprise** system with strong protection of **property rights** and contracts.
- A **large internal market** with free trade among the states, joined by railways and highways.
- Abundant **natural resources** and **immigration** that supplied labour and talent.
- **Innovation and entrepreneurship** — patents, **mass production** and the assembly line (Henry Ford), later information technology.
- Investment in **education and research** — land-grant universities, research funding.
- Early **protection of infant industries** by tariffs, followed by freer trade.
- **Deep financial markets** to fund business.
- **Government action in crisis** — the New Deal of the 1930s; anti-monopoly laws; public investment in infrastructure.

## Nigeria's experience compared
- **Dependence on one export** — crude oil — and neglect of agriculture and manufacturing since the 1970s.
- **Import-substitution** industries that relied on imported inputs.
- **Low savings and investment**; capital flight.
- **Weak infrastructure**, especially electricity.
- **Policy instability** — frequent changes of government and of programmes.
- **Corruption** and poor implementation of plans.
- Under-funded **education**; **brain drain**.
- Rapid **population growth** without matching jobs.

## Lessons for Nigeria
1. **Diversify** the economy away from oil; **process** raw materials before export.
2. Pursue **export-led industrialisation** — produce competitively for regional and world markets (AfCFTA).
3. **Invest in human capital** — quality education, technical and vocational skills, health.
4. **Modernise agriculture** to ensure food security and supply industry.
5. Provide reliable **infrastructure**, above all **power** and transport.
6. Encourage **savings and investment**; develop strong financial institutions.
7. Maintain **macroeconomic stability** and **consistent policies** across governments.
8. Ensure **good governance** — fight corruption, strengthen institutions and the rule of law.
9. **Acquire and adapt technology**; fund research and development; link universities with industry.
10. Support **small and medium enterprises** and local entrepreneurs.
11. Attract **foreign direct investment** while building local capacity.
12. Promote **regional integration** to enlarge the market.
13. Cultivate **discipline, hard work** and a long-term outlook.
14. Guard against **excessive short-term foreign borrowing**, the lesson of the 1997 crisis.`,
    examples: `**Example 1.** Give two lessons Nigeria can learn from the Asian Tigers. *Answer:* **Diversify into manufactured exports** and **invest heavily in education**.

**Example 2.** What was the Marshall Plan? *Answer:* **American aid for the reconstruction of Western Europe** after the Second World War.

**Example 3.** Why has import substitution performed poorly in Nigeria? *Answer:* The industries **depended on imported raw materials and machinery** and served only a small protected market.`,
  },
  questions: [
    ["E", "The Industrial Revolution began in", "Britain", "Japan", "the United States", "Russia", "It started there in the eighteenth century."],
    ["E", "A major lesson for Nigeria from the Asian Tigers is the need to", "diversify the economy", "depend solely on crude oil", "reduce spending on education", "discourage savings", "They grew by exporting many manufactured goods."],
    ["E", "Mass production using the assembly line is associated with", "Henry Ford", "Adam Smith", "Karl Marx", "John Maynard Keynes", "Ford's method lowered the cost of motor cars."],
    ["M", "The American programme of aid that helped rebuild Western Europe after the Second World War was the", "Marshall Plan", "New Deal", "Lagos Plan of Action", "Structural Adjustment Programme", "It ran from 1948 to the early 1950s."],
    ["M", "The treaty that established the European Economic Community in 1957 was the Treaty of", "Rome", "Lagos", "Versailles", "Paris of 1783", "It created a common market among six states."],
    ["M", "A weakness of Nigeria's import-substitution industries was their", "dependence on imported raw materials", "production for export markets", "use of local technology only", "location in rural areas only", "They needed foreign exchange for inputs."],
    ["M", "The most serious infrastructural constraint on manufacturing in Nigeria is inadequate", "electricity supply", "rainfall", "population", "land", "Firms rely on costly private generators."],
    ["H", "One advantage the United States enjoyed in its development that integration seeks to give West Africa is", "a large internal market", "a small population", "numerous currencies", "many customs barriers", "A big market allows economies of scale."],
    ["H", "The experience of the 1997 Asian financial crisis warns developing countries against", "excessive short-term foreign borrowing", "investing in education", "exporting manufactures", "saving a high share of income", "Sudden capital outflows caused currencies to collapse."],
    ["H", "Which of these is NOT a lesson from the development of the Asian Tigers?", "Frequent reversal of economic policies", "High savings and investment", "Investment in human capital", "Export promotion", "Policy consistency, not instability, supported their growth."],
  ],
  jamb: [
    ["M", "Which of the following preceded and supported industrialisation in both Britain and Japan?", "A rise in agricultural productivity", "The discovery of petroleum", "A fall in population", "The abolition of trade", "Higher farm output released food, labour and savings."],
    ["H", "The policy of temporarily protecting new domestic industries from foreign competition is the", "infant-industry argument", "theory of comparative cost", "quantity theory of money", "law of diminishing returns", "America and Europe used tariffs to nurture early industries."],
  ],
};

export const petroleum: Topic = {
  title: "Petroleum and the Nigerian Economy",
  subtopics: ["Development of the petroleum industry", "Positive contributions of petroleum", "Negative effects of petroleum", "Roles of NNPC and OPEC"],
  objectives: ["Trace the development of the petroleum industry in Nigeria", "State the positive contributions of petroleum to the Nigerian economy", "State its negative effects", "Explain the roles of NNPC and OPEC in the petroleum industry"],
  lesson: {
    title: "Oil and the Economy",
    summary: "The history of Nigeria's oil industry, what it has given and cost the country, and the bodies that manage it.",
    minutes: 40,
    notes: `## Development of the petroleum industry
| Year | Event |
|---|---|
| **1908** | first search for oil by a German company (Nigerian Bitumen Corporation) |
| **1937–38** | Shell D'Arcy (later Shell-BP) granted an exploration licence |
| **1956** | oil discovered in **commercial quantity at Oloibiri** (now in Bayelsa State) by Shell-BP |
| **1958** | **first export** of crude oil |
| **1965** | first refinery opened at **Port Harcourt** (Alesa-Eleme) |
| **1969** | Petroleum Act vested ownership of oil in the state |
| **1971** | **Nigerian National Oil Corporation (NNOC)** formed; Nigeria **joined OPEC** |
| **1973–74** | oil price rise — the **oil boom** |
| **1977** | **NNPC** formed by merging the NNOC with the Ministry of Petroleum Resources |
| **1978, 1980** | Warri and Kaduna refineries opened |
| **1999** | first shipment of **liquefied natural gas** from Bonny |
| **2021–22** | **Petroleum Industry Act**; NNPC became **NNPC Limited** |
| **2023–24** | the private Dangote refinery at Lekki began operations |

### Sectors
- **Upstream** — exploration and production of crude oil and gas.
- **Midstream** — transportation and storage (pipelines, tankers).
- **Downstream** — **refining, marketing and distribution** of products.

Products of refining: petrol, kerosene, diesel, aviation fuel, cooking gas, lubricants, bitumen and petrochemical feedstock.

## Positive contributions
1. **Government revenue** — petroleum profits tax, royalties and sales provide a large share of revenue.
2. **Foreign exchange** — the bulk of export earnings.
3. **Employment** in oil companies and service firms.
4. **Energy** for homes, transport and industry.
5. **Raw materials** for petrochemicals, fertiliser, plastics.
6. Finance for **infrastructure** — roads, universities, the new capital at Abuja.
7. Inflow of **foreign investment and technology**.
8. Contribution to **GDP**; growth of towns such as Port Harcourt and Warri.
9. Enhanced **international standing** (OPEC membership).

## Negative effects
1. **Neglect of agriculture** and manufacturing — the "**Dutch disease**"; rising food imports.
2. **Mono-product economy** — dependence on one export whose price fluctuates, causing booms and slumps.
3. **Environmental degradation** — oil spills, gas flaring, loss of farmland and fishing in the Niger Delta.
4. **Conflict** — militancy, pipeline vandalism, oil theft.
5. **Corruption** and rent-seeking.
6. **Rural–urban migration**.
7. **Inflation** and a taste for imported goods.
8. **Unequal distribution** of income; disputes over revenue sharing.
9. Because the industry is **capital-intensive**, it employs relatively few people.

## Role of NNPC
The **Nigerian National Petroleum Corporation (now NNPC Limited)** is the state oil company.
- takes part in **exploration and production**, alone and through **joint ventures** and production-sharing contracts with international companies
- **refines** crude oil (Port Harcourt, Warri, Kaduna) and produces petrochemicals
- **transports** crude and products through pipelines and depots
- **markets and distributes** products at home; **sells** crude abroad
- develops **gas** (with partners in Nigeria LNG)
- trains Nigerian manpower and promotes **local content**
- **Regulation**, formerly by the Department of Petroleum Resources, is now by the upstream and the midstream-and-downstream regulatory authorities.

## Role of OPEC
The **Organization of the Petroleum Exporting Countries** was founded in **Baghdad in September 1960** by **Iran, Iraq, Kuwait, Saudi Arabia and Venezuela**. Its headquarters is in **Vienna, Austria**. Nigeria joined in **1971**.

### Objectives and functions
- **co-ordinates and unifies** the petroleum policies of members
- seeks **stable and fair prices** for producers
- fixes **production quotas** to regulate supply
- ensures a **regular supply** to consuming nations and a fair return on capital
- protects members' interests against the oil companies; shares information and research
- the **OPEC Fund** gives development loans to poor countries

### Effect on Nigeria
Quotas limit how much Nigeria may produce, but OPEC's actions support the price and therefore Nigeria's revenue.

### Problems of OPEC
members exceed their quotas; competition from non-OPEC producers and shale oil; political differences among members; alternative energy sources.`,
    examples: `**Example 1.** Where and when was oil first discovered in commercial quantity in Nigeria? *Answer:* At **Oloibiri** in **1956**.

**Example 2.** Distinguish upstream from downstream activities. *Answer:* **Upstream** is exploration and production; **downstream** is refining, marketing and distribution.

**Example 3.** State two negative effects of petroleum on the Nigerian economy. *Answer:* **Neglect of agriculture** and **environmental pollution** in the Niger Delta.`,
  },
  questions: [
    ["E", "Crude oil was first discovered in commercial quantity in Nigeria at", "Oloibiri", "Warri", "Kaduna", "Eket", "Shell-BP struck oil there in 1956."],
    ["E", "The first export of crude oil from Nigeria took place in", "1958", "1956", "1971", "1977", "Oil found at Oloibiri in 1956 was first shipped two years later."],
    ["E", "OPEC was founded in 1960 at a conference held in", "Baghdad", "Vienna", "Lagos", "Caracas", "Five oil-exporting states met in the Iraqi capital."],
    ["M", "The refining and distribution of petroleum products belong to the", "downstream sector", "upstream sector", "primary sector only", "informal sector", "Upstream covers exploration and production."],
    ["M", "The NNPC was established in", "1977", "1958", "1965", "1999", "It merged the NNOC with the Ministry of Petroleum Resources."],
    ["M", "OPEC influences the world price of crude oil mainly by", "fixing production quotas for its members", "building refineries", "printing money", "taxing consumers", "Restricting supply supports the price."],
    ["M", "A negative effect of the oil boom on Nigeria was the", "neglect of agriculture", "increase in foreign exchange", "growth of government revenue", "provision of infrastructure", "Labour and investment moved away from farming."],
    ["H", "The decline of other export sectors following a boom in one natural-resource export is known as", "the Dutch disease", "the multiplier effect", "the paradox of thrift", "stagflation", "A strong currency and shift of resources hurt other sectors."],
    ["H", "Which of these countries was a founding member of OPEC?", "Venezuela", "Nigeria", "Libya", "Algeria", "The founders were Iran, Iraq, Kuwait, Saudi Arabia and Venezuela."],
    ["H", "The petroleum industry employs relatively few Nigerians because it is", "capital-intensive", "labour-intensive", "located only offshore", "owned by state governments", "It relies on machinery and advanced technology."],
  ],
  jamb: [
    ["M", "The burning of natural gas associated with crude oil production is known as", "gas flaring", "gas lifting", "fracking", "liquefaction", "It wastes energy and pollutes the Niger Delta."],
    ["H", "An economy that depends on a single commodity for most of its export earnings is described as", "a mono-product economy", "a diversified economy", "a closed economy", "a command economy", "Its income fluctuates with the price of that commodity."],
  ],
};

export const manufacturing: Topic = {
  title: "Manufacturing and Construction",
  subtopics: ["Meaning and types of manufacturing", "Meaning of construction", "Contributions to Nigeria's GDP", "Roles in economic development and problems"],
  objectives: ["Explain manufacturing and classify its types", "Explain construction", "Describe the contributions of manufacturing and construction to GDP", "Discuss their roles in economic development and the problems they face"],
  lesson: {
    title: "The Secondary Sector",
    summary: "The industries that turn raw materials into finished goods and build the nation's physical structures.",
    minutes: 40,
    notes: `## Manufacturing
**Manufacturing** is the **conversion of raw materials into finished or semi-finished goods**. With construction it makes up the **secondary sector** of production.

### Types
| Type | Examples |
|---|---|
| **crafts (cottage industries)** | weaving, pottery, blacksmithing, leather work, carving, dyeing — small scale, hand tools, family labour |
| **food processing and beverages** | flour milling, baking, brewing, soft drinks, vegetable oil, sugar, canning |
| **textiles and footwear** | spinning, weaving, garments, shoes |
| **light industries** | consumer goods: soap, plastics, paper, furniture, pharmaceuticals |
| **heavy industries** | iron and steel, cement, petrochemicals, fertiliser, vehicle assembly |
| **agro-allied industries** | process farm produce: rubber, palm oil, cocoa, cotton ginning |

By scale: **small-scale**, **medium-scale** and **large-scale** industries. By use of output: **consumer-goods** and **capital-goods** industries.

### Industrial strategies
- **Import substitution** — producing at home goods formerly imported.
- **Export promotion** — producing for foreign markets.
- **Local sourcing of raw materials**; small-scale industrialisation; industrial estates and export-processing zones.

## Construction
**Construction** is the **erection, repair and maintenance of physical structures** — houses, offices, factories, roads, bridges, railways, dams, airports, ports, pipelines and power lines. It creates **fixed capital** and **social overhead capital (infrastructure)**.

- **building construction** — houses, schools, hospitals
- **civil engineering** — roads, bridges, dams, drainage

## Contributions to GDP
**Gross domestic product (GDP)** is the total value of goods and services produced within a country in a year.
- **Manufacturing** contributes roughly **a tenth** of Nigeria's GDP — low for a country of its size. The largest sub-sectors are **food, beverages and tobacco**, textiles and footwear, and **cement**.
- **Construction** contributes only a few per cent but grows quickly when government and private investment in infrastructure and housing rises.
- Both have **linkages** with other sectors: they buy from agriculture, mining and quarrying, and supply trade, transport and services.

## Roles in economic development
1. **Employment** for skilled and unskilled workers.
2. **Value added** to raw materials; higher national income.
3. **Diversification** of the economy away from oil and primary products.
4. **Import saving** and **foreign-exchange earning** through exports.
5. **Markets for agriculture and mining** (backward linkage) and inputs for other industries (forward linkage).
6. **Infrastructure** — roads, power, housing, water — on which all other activity depends.
7. **Technological progress** and skills.
8. **Government revenue** from taxes.
9. Higher **standard of living** through more and cheaper goods and better housing.
10. Growth of towns and even development when industries are spread.

## Problems
- inadequate and costly **electricity**; poor roads and ports
- **shortage of capital**; high interest rates
- dependence on **imported raw materials, machinery and spare parts**; foreign-exchange scarcity
- **low capacity utilisation**
- competition from **cheap imports** and smuggling
- shortage of **technical skills**; low level of technology
- **multiple taxes** and inconsistent policies
- small domestic market due to low incomes
- insecurity; high cost of building materials and land

## Solutions
Stable power; development banks and cheaper credit (Bank of Industry); local raw materials and research (RMRDC); tariff protection for infant industries; technical education; tax incentives; patronage of made-in-Nigeria goods; public–private partnership in infrastructure.`,
    examples: `**Example 1.** Classify blacksmithing and cement production. *Answer:* Blacksmithing — a **craft (cottage) industry**; cement — a **heavy industry**.

**Example 2.** What is import substitution? *Answer:* **Producing locally goods that were formerly imported**.

**Example 3.** Give two problems of manufacturing in Nigeria. *Answer:* **Inadequate electricity** and **dependence on imported inputs**.`,
  },
  questions: [
    ["E", "The conversion of raw materials into finished goods is", "manufacturing", "extraction", "distribution", "consumption", "It is a secondary activity."],
    ["E", "Manufacturing and construction belong to the", "secondary sector", "primary sector", "tertiary sector", "informal sector only", "The secondary sector processes materials and builds structures."],
    ["E", "Which of these is a craft industry?", "Pottery", "Petroleum refining", "Steel rolling", "Vehicle assembly", "Crafts use simple tools on a small scale."],
    ["M", "The building of roads, bridges and dams is classified as", "construction", "manufacturing", "mining", "commerce", "It creates fixed physical structures."],
    ["M", "Producing at home goods that were previously imported is", "import substitution", "export promotion", "indigenisation", "privatisation", "It aims to save foreign exchange."],
    ["M", "A major problem of manufacturing industries in Nigeria is", "inadequate power supply", "excess skilled labour", "too large a market", "low cost of capital", "Firms depend on expensive generators."],
    ["M", "Industries that process agricultural produce are called", "agro-allied industries", "extractive industries", "service industries", "heavy engineering industries", "They link farming with manufacturing."],
    ["H", "When a textile mill buys cotton from farmers, the relationship is an example of", "backward linkage", "forward linkage", "horizontal merger", "vertical disintegration", "The industry creates demand for an earlier stage of production."],
    ["H", "Infrastructure such as roads, electricity and water provided through construction is known as", "social overhead capital", "working capital", "human capital", "share capital", "It supports all other productive activity."],
    ["H", "Low capacity utilisation in Nigerian factories means that", "plants produce well below their installed capacity", "factories work overtime", "output exceeds demand", "machines are new", "Shortage of power and inputs keeps machines idle."],
  ],
  jamb: [
    ["M", "The total money value of goods and services produced within a country in a year is the", "gross domestic product", "balance of payments", "national debt", "per capita income", "GDP measures domestic output."],
    ["H", "An industry that produces machines and equipment used to make other goods is", "a capital-goods industry", "a consumer-goods industry", "a cottage industry", "a service industry", "Capital goods are used in further production."],
  ],
};

export const services: Topic = {
  title: "Service Industries",
  subtopics: ["Meaning of services", "Types of service industries", "Tourism, transport, banking, insurance, warehousing and advertising", "Contributions to national development"],
  objectives: ["Explain services and the tertiary sector", "Identify the types of service industries", "Describe the functions of the main service industries", "State the contributions of service industries to national development"],
  lesson: {
    title: "The Tertiary Sector",
    summary: "Industries that produce no physical goods but make production and exchange possible.",
    minutes: 40,
    notes: `## Meaning
**Services** are **intangible economic activities** that satisfy wants without producing a physical good — teaching, banking, transport. Service industries make up the **tertiary sector**.

### Characteristics of services
- **intangible** — cannot be seen or touched
- **inseparable** — produced and consumed at the same time
- **perishable** — cannot be stored
- **variable** — quality depends on who provides them

### Classes
- **Direct (personal) services** — rendered directly to consumers: doctors, teachers, barbers, lawyers, entertainers, domestic workers.
- **Indirect (commercial) services** — assist production and trade: transport, banking, insurance, warehousing, advertising, communication.

## Types of service industries
### Tourism
Travel for leisure, business, culture or religion, and the services that support it — hotels, tour operators, airlines. It earns **foreign exchange**, creates jobs, develops infrastructure and conserves culture and wildlife.

### Transport
The **movement of goods and people** from place to place — road, rail, water, air and pipeline. It creates **place utility**, widens markets, makes raw materials and labour mobile, and encourages specialisation.

### Banking
**Banks accept deposits, keep money safe, grant loans and overdrafts**, transfer payments (cheques, electronic transfers), finance trade and give business advice. They **mobilise savings** for investment. The **Central Bank** controls the system.

### Insurance
**Pooling of risks**: many contribute **premiums** from which the few who suffer loss are **compensated**. It gives businesses confidence, protects lives and property, and provides **long-term funds** for investment.

### Warehousing
**Storage of goods** from the time of production until they are needed. It creates **time utility**, evens out supply and prices, protects goods, and allows breaking of bulk, packaging and grading. Types: private, public and **bonded** warehouses (for goods on which duty has not been paid).

### Advertising
**Publicising goods and services** to inform and persuade buyers through radio, television, newspapers, billboards and the internet. It creates awareness, increases sales and supports large-scale production; it can also raise prices and mislead.

### Communication
Postal services, telephone, internet and the mass media — speed up business and lower costs. Telecommunications has been one of the fastest-growing sectors in Nigeria since 2001.

### Others
wholesale and retail **trade**; education; health; entertainment (film, music); real estate; professional services; public administration.

## Contributions to national development
1. The service sector provides the **largest share of Nigeria's GDP** — roughly half — led by trade, telecommunications, real estate and finance.
2. **Employment** for a large part of the labour force.
3. **Facilitates agriculture and industry** — finance, transport, storage and marketing.
4. **Foreign-exchange earnings** — tourism, film and music, remittance services.
5. **Government revenue** from taxes and licences.
6. **Mobilisation of savings** and capital formation.
7. **Human capital development** through education and health.
8. Raises the **standard of living**; links producers and consumers.
9. Promotes **technology** — ICT, fintech.
10. Encourages **regional and international** integration.

## Problems
poor infrastructure; inadequate capital; low incomes; insecurity; poor regulation and fraud; shortage of skilled personnel; much of the sector is **informal** and of low productivity.`,
    examples: `**Example 1.** Distinguish direct from indirect services. *Answer:* **Direct** services are rendered personally to consumers (a doctor); **indirect** services aid trade and production (banking, transport).

**Example 2.** Which service creates time utility? *Answer:* **warehousing**.

**Example 3.** State the principle on which insurance works. *Answer:* **Pooling of risks** — the losses of a few are met from the premiums of many.`,
  },
  questions: [
    ["E", "Service industries belong to the", "tertiary sector", "primary sector", "secondary sector", "extractive sector", "They provide services rather than goods."],
    ["E", "Which of these is a direct (personal) service?", "Teaching", "Warehousing", "Insurance", "Advertising", "It is rendered directly to the consumer."],
    ["E", "The storage of goods until they are needed is", "warehousing", "advertising", "underwriting", "tourism", "It bridges the gap between production and consumption."],
    ["M", "Insurance operates on the principle of", "pooling of risks", "division of labour", "comparative cost", "diminishing returns", "Premiums of many compensate the losses of a few."],
    ["M", "The service that creates place utility is", "transport", "warehousing", "banking", "advertising", "It moves goods to where they are wanted."],
    ["M", "A characteristic of services is that they are", "intangible", "storable", "tangible", "produced before they are sold", "A service cannot be seen or touched."],
    ["M", "Publicising goods to inform and persuade consumers to buy is", "advertising", "insurance", "warehousing", "banking", "It creates awareness and demand."],
    ["H", "A warehouse in which imported goods are kept until customs duty is paid is", "a bonded warehouse", "a public warehouse", "a private warehouse", "a cold room", "Goods are released only after duty is paid."],
    ["H", "The sector that contributes the largest share of Nigeria's gross domestic product is", "services", "crude oil extraction", "manufacturing", "construction", "Trade, telecommunications and finance dominate GDP."],
    ["H", "Banks contribute to capital formation mainly by", "mobilising savings and lending for investment", "printing currency notes", "fixing wages", "collecting taxes", "They channel funds from savers to investors."],
  ],
  jamb: [
    ["M", "The regular payment made by an insured person to an insurance company is the", "premium", "indemnity", "dividend", "interest", "It is the price of insurance cover."],
    ["H", "Which of the following explains why services cannot be stored for future sale?", "They are perishable and consumed as they are produced", "They are too heavy to move", "They are produced only by government", "They have no value", "Production and consumption of a service occur together."],
  ],
};

export const regulators: Topic = {
  title: "Agencies that Regulate Financial Markets",
  subtopics: ["Regulation of the money market", "Regulation of the capital market", "Other regulatory agencies", "Functions and significance of the regulators"],
  objectives: ["Identify the agencies that regulate the money market and their roles", "Identify the agencies that regulate the capital market, their objectives and tools", "Describe the other financial regulators in Nigeria", "Explain the significance of financial regulation to the economy"],
  lesson: {
    title: "Who Regulates Nigeria's Financial System",
    summary: "The bodies that supervise banks, the stock market, insurance and pensions, and why they matter.",
    minutes: 40,
    notes: `## Financial markets
- The **money market** deals in **short-term** funds (up to one year): treasury bills, treasury certificates, call money, commercial papers, bankers' acceptances.
- The **capital market** deals in **long-term** funds: shares, debentures, bonds.

Regulation is needed to **protect depositors and investors**, maintain **confidence and stability**, prevent **fraud**, and steer the economy.

## Regulation of the money market
### Central Bank of Nigeria (CBN)
Established by an Act of **1958**; began operations on **1 July 1959**. It is the **apex** of the financial system.
**Functions**
- **issues legal tender currency**
- **banker to the government** and its financial adviser
- **bankers' bank** and **lender of last resort**
- **manages external reserves** and the exchange rate
- **formulates and implements monetary policy** to keep prices stable
- **licenses and supervises** banks and other financial institutions
- promotes a sound financial system and development finance

**Tools (instruments of monetary policy)**
| Tool | How it works |
|---|---|
| **open market operations (OMO)** | **selling** government securities reduces money in circulation; **buying** increases it |
| **monetary policy rate (bank rate)** | raising it makes borrowing dearer and reduces credit |
| **cash reserve ratio** | the share of deposits banks must keep with the CBN; raising it reduces lending |
| **liquidity ratio** | the share of deposits held in liquid assets |
| **special deposits** | compulsory deposits by banks with the CBN |
| **selective credit control / special directives** | direct credit to favoured sectors |
| **moral suasion** | persuasion and appeals |
| **stabilisation securities** | compulsory securities issued to mop up excess liquidity |

### Nigeria Deposit Insurance Corporation (NDIC)
Established in **1988**. It **insures the deposits** of banks, so that depositors are paid up to a stated limit if a bank fails; **supervises** insured banks with the CBN; gives **assistance** to distressed banks; and **liquidates** failed banks in an orderly way.

### Others
**Federal Ministry of Finance** (fiscal policy; advises on monetary matters); the **Bankers' Committee**; the **Financial Reporting Council**.

## Regulation of the capital market
### Securities and Exchange Commission (SEC)
The **apex regulator** of the capital market (1979). **Objectives:** protect investors; ensure a fair, efficient and transparent market; reduce systemic risk; develop the market.
**Tools:** **registration** of securities and of market operators; approval of prospectuses and new issues; **surveillance and inspection**; rules on disclosure; approval of mergers and takeovers; **sanctions** — fines, suspension, prosecution (through the Investments and Securities Tribunal).

### The Nigerian Exchange (formerly Nigerian Stock Exchange)
A **self-regulatory organisation**: sets **listing requirements**, supervises dealing members, publishes prices and may suspend or delist companies.

### Others
**Central Securities Clearing System** (clearing and settlement); **Corporate Affairs Commission** (registers companies); **Debt Management Office** (issues and manages government bonds; established 2000).

## Other financial regulators
| Agency | Regulates |
|---|---|
| **National Insurance Commission (NAICOM)**, 1997 | insurance companies and brokers |
| **National Pension Commission (PenCom)**, 2004 | pension fund administrators and custodians under the contributory pension scheme |
| **Federal Mortgage Bank of Nigeria** | primary mortgage institutions (apex mortgage body) |
| **Economic and Financial Crimes Commission; Nigerian Financial Intelligence Unit** | money laundering and financial crimes |

The **Financial Services Regulation Co-ordinating Committee** brings the regulators together.

## Significance to the economy
1. **Confidence** of savers and investors in the financial system.
2. **Stability** — prevention and orderly handling of bank failures.
3. **Control of inflation** and of the money supply.
4. **Mobilisation and efficient allocation** of savings.
5. **Protection** against fraud, insider dealing and unethical practices.
6. Stable **exchange rate** and external balance.
7. Attraction of **foreign investment**.
8. Support for **economic growth and development**.`,
    examples: `**Example 1.** Which body is the apex regulator of the money market? *Answer:* the **Central Bank of Nigeria**.

**Example 2.** How does the CBN use open market operations to reduce inflation? *Answer:* It **sells government securities**, withdrawing money from circulation.

**Example 3.** State the main function of the NDIC. *Answer:* It **insures bank deposits** and pays depositors when a bank fails.`,
  },
  questions: [
    ["E", "The apex regulatory institution of the Nigerian money market is the", "Central Bank of Nigeria", "Securities and Exchange Commission", "Nigerian Exchange", "National Pension Commission", "It licenses and supervises banks."],
    ["E", "The body that insures the deposits of bank customers in Nigeria is the", "NDIC", "NAICOM", "SEC", "PenCom", "The Nigeria Deposit Insurance Corporation."],
    ["E", "The market for short-term funds is the", "money market", "capital market", "commodity market", "labour market", "It deals in instruments such as treasury bills."],
    ["M", "To reduce the quantity of money in circulation, the Central Bank will", "sell securities in the open market", "buy securities in the open market", "lower the cash reserve ratio", "reduce the bank rate", "Buyers pay for the securities, so money is withdrawn."],
    ["M", "The agency that regulates insurance companies in Nigeria is", "NAICOM", "NDIC", "CBN", "SEC", "The National Insurance Commission."],
    ["M", "The Central Bank acts as 'lender of last resort' to", "commercial banks", "individual savers", "manufacturing firms", "foreign governments", "Banks in difficulty can borrow from it."],
    ["M", "The body that regulates pension fund administrators in Nigeria is", "the National Pension Commission", "the Debt Management Office", "the Corporate Affairs Commission", "the Nigerian Exchange", "PenCom supervises the contributory pension scheme."],
    ["H", "An increase in the cash reserve ratio will", "reduce the ability of banks to create credit", "increase bank lending", "increase the money supply", "lower interest rates", "Banks must keep more of their deposits idle with the Central Bank."],
    ["H", "The use of persuasion by the Central Bank to influence the lending behaviour of banks is", "moral suasion", "open market operation", "special deposit", "funding", "It relies on appeal rather than compulsion."],
    ["H", "Which of these is a tool used by the Securities and Exchange Commission?", "Registration of securities and market operators", "Variation of the cash reserve ratio", "Issue of currency", "Open market operations", "The others are instruments of the Central Bank."],
  ],
  jamb: [
    ["M", "The Central Bank of Nigeria commenced operations in", "1959", "1952", "1960", "1977", "The CBN Act was passed in 1958 and the bank opened on 1 July 1959."],
    ["H", "The government agency responsible for issuing and managing federal government bonds is the", "Debt Management Office", "Nigeria Deposit Insurance Corporation", "National Insurance Commission", "Bureau of Public Enterprises", "It was established in 2000 to manage the public debt."],
  ],
};

export const globalization: Topic = {
  title: "International Trade and Globalization",
  subtopics: ["Meaning of globalization", "Features of globalization", "Challenges of globalization", "Opportunities for the Nigerian economy"],
  objectives: ["Explain globalization", "Identify the features and drivers of globalization", "Discuss the challenges of globalization", "Explain the opportunities globalization presents to the Nigerian economy"],
  lesson: {
    title: "The Global Economy",
    summary: "How national economies have become integrated, and what this means for Nigeria.",
    minutes: 40,
    notes: `## Meaning
**Globalization** is the **increasing integration and interdependence of the economies of the world** through the freer movement of **goods, services, capital, technology, information and people** across national borders.

## Drivers
- advances in **information and communication technology** — the internet, mobile telephony, satellites
- cheaper and faster **transport** — containerisation, air freight
- **trade liberalisation** — reduction of tariffs and quotas under **GATT** and the **World Trade Organization (WTO, 1995)**
- **liberalisation of capital** movements
- growth of **multinational corporations**
- market-oriented reforms in formerly closed economies

## Features
1. **Free trade** — lower barriers; rapid growth of world trade.
2. **Free flow of capital** — foreign direct and portfolio investment.
3. **Multinational corporations** producing and selling across many countries; **global supply chains**.
4. **Integrated financial markets** operating round the clock.
5. Rapid spread of **technology and information**.
6. **Migration** of labour and **outsourcing** of jobs.
7. **International institutions** and rules — WTO, IMF, World Bank.
8. **Regional blocs** — EU, ECOWAS, AfCFTA.
9. Convergence of **tastes** and consumption patterns.
10. **Deregulation and privatisation** within countries.

## Challenges of globalization
- **Unequal benefits** — rich countries gain most; the gap between rich and poor nations may widen.
- **Unfavourable terms of trade** for exporters of primary products.
- **Dumping** and collapse of local **infant industries** unable to compete.
- **Loss of policy independence** — conditions set by the IMF, World Bank and WTO.
- **Capital flight** and volatile "hot money"; financial crises spread quickly (**contagion**), as in 1997 and 2008.
- **Brain drain**.
- **Debt burden**.
- Dominance of **multinationals**; repatriation of profits.
- **Cultural erosion**.
- **Unemployment** where local firms close.
- Environmental damage; cyber-crime.

## Opportunities for the Nigerian economy
1. **Wider markets** for Nigerian exports — especially non-oil goods and services.
2. Inflow of **foreign direct investment**, capital and loans.
3. **Transfer of technology** and managerial skills.
4. **ICT-driven services** — software, fintech, outsourcing, e-commerce.
5. **Creative industries** — Nollywood films and Afrobeats music reach world audiences.
6. **Remittances** from Nigerians abroad, a major source of foreign exchange.
7. Access to **cheaper and better** goods and inputs for consumers and producers.
8. **Competition** that forces local firms to become efficient.
9. Education and training abroad; access to knowledge online.
10. Participation in **regional value chains** under ECOWAS and the AfCFTA.

## What Nigeria must do to benefit
Diversify exports; improve **infrastructure** (power, ports, broadband); raise the quality of **education**; ensure macroeconomic stability and security; support local industries to meet **international standards**; negotiate trade agreements carefully; strengthen institutions against corruption.

## Link with international trade
Globalization extends international trade. The **theory of comparative cost** suggests countries gain by specialising in goods in which they have the **lowest opportunity cost**; globalization widens the scope for such specialisation — but also exposes its shortcomings where a country is locked into low-value primary exports.`,
    examples: `**Example 1.** Define globalization. *Answer:* The **increasing integration of world economies** through freer movement of goods, services, capital, technology and people.

**Example 2.** Give two opportunities globalization offers Nigeria. *Answer:* **Wider export markets** and **inflow of foreign investment and technology**.

**Example 3.** Which organisation oversees the rules of world trade? *Answer:* the **World Trade Organization (WTO)**.`,
  },
  questions: [
    ["E", "The increasing integration of the economies of the world is called", "globalization", "nationalisation", "indigenisation", "commercialisation", "National economies become more interdependent."],
    ["E", "The organisation that oversees the rules of international trade is the", "World Trade Organization", "World Health Organization", "International Labour Organization", "African Union", "The WTO replaced GATT in 1995."],
    ["E", "Firms that own production facilities in several countries are", "multinational corporations", "sole proprietorships", "co-operative societies", "public corporations", "They operate across national borders."],
    ["M", "Which of these is a driver of globalization?", "Advances in information and communication technology", "High tariff walls", "Exchange control", "Import bans", "ICT lowers the cost of doing business across borders."],
    ["M", "An opportunity that globalization offers Nigeria is", "access to wider markets for exports", "collapse of local industries", "brain drain", "cultural erosion", "Nigerian goods and services can reach world buyers."],
    ["M", "The removal of restrictions on international trade is known as", "trade liberalisation", "protectionism", "autarky", "embargo", "Tariffs and quotas are reduced or abolished."],
    ["M", "Money sent home by Nigerians working abroad is called", "remittances", "royalties", "subsidies", "reparations", "They are a major source of foreign exchange."],
    ["H", "The rapid spread of a financial crisis from one country to others is referred to as", "contagion", "deflation", "dumping", "devaluation", "Integrated markets transmit shocks quickly."],
    ["H", "A challenge of globalization for infant industries in developing countries is", "competition from cheaper imported goods", "access to foreign technology", "inflow of foreign capital", "wider export markets", "Young firms cannot yet match the costs of established foreign producers."],
    ["H", "The practice by which firms contract out tasks to cheaper providers in other countries is", "outsourcing", "dumping", "hoarding", "rationing", "It is a feature of global supply chains."],
  ],
  jamb: [
    ["M", "The World Trade Organization was established in 1995 to replace the", "General Agreement on Tariffs and Trade", "International Monetary Fund", "United Nations Conference on Trade and Development", "Organisation of African Unity", "GATT had regulated trade since 1947."],
    ["H", "Short-term speculative capital that moves quickly between countries in search of higher returns is known as", "hot money", "seed money", "token money", "near money", "Its sudden withdrawal can destabilise an economy."],
  ],
};

export const termsOfTrade: Topic = {
  title: "Terms of Trade and Balance of Payments Adjustment",
  subtopics: ["Terms of trade and their measurement", "Favourable and unfavourable balance of payments and their effects", "Surplus and deficit", "Methods of correcting balance of payments problems"],
  objectives: ["Define and calculate the terms of trade", "Explain favourable and unfavourable balance of payments and their effects", "Explain balance of payments surplus and deficit", "Describe the methods of correcting a balance of payments deficit"],
  lesson: {
    title: "Measuring and Correcting External Imbalance",
    summary: "How to measure the rate at which exports exchange for imports, and what a country can do about a payments deficit.",
    minutes: 40,
    notes: `## Terms of trade
The **terms of trade** are the **rate at which a country's exports exchange for its imports** — the quantity of imports that a unit of exports can buy.

$$\\text{Terms of trade} = \\frac{\\text{index of export prices}}{\\text{index of import prices}} \\times 100$$

- **Above 100** (or rising): **favourable** — export prices have risen relative to import prices; a given volume of exports buys more imports.
- **Below 100** (or falling): **unfavourable** — more must be exported to buy the same imports.

*Example:* export price index 120, import price index 150: terms of trade $= \\dfrac{120}{150} \\times 100 = 80$ — unfavourable.

### Why developing countries often face unfavourable terms of trade
They export **primary products** whose prices are low and unstable, and import **manufactured goods** whose prices rise steadily; demand for primary products is price- and income-inelastic; synthetic substitutes exist; buyers are few and powerful.

### Terms of trade and balance of trade
The **balance of trade** compares the **values** of visible exports and imports; the terms of trade compare their **prices**.

## Balance of payments
The **balance of payments (BOP)** is a **record of all economic transactions between the residents of a country and the rest of the world** in a year.
- **Current account** — visible trade (goods) and invisible trade (services, income, transfers).
- **Capital (and financial) account** — investment, loans and grants.
- **Monetary movement (official settlements) account** — changes in reserves and official borrowing that balance the accounts.

### Favourable and unfavourable
- **Favourable (surplus):** total receipts from abroad **exceed** total payments.
- **Unfavourable (deficit):** total payments **exceed** receipts.
- In the accounting sense the BOP always balances; "surplus" or "deficit" refers to the balance on current and capital accounts before official financing.

### Effects of a surplus
rising **external reserves**; stronger currency; ability to lend and invest abroad; higher income and employment in export industries — but possibly **inflation** from increased money supply, and pressure from trading partners.

### Effects of a persistent deficit
**depletion of reserves**; **borrowing** and a growing external **debt**; **depreciation** of the currency; shortage of imported inputs; unemployment; loss of confidence; dependence on creditors and their conditions.

### Causes of deficits in countries such as Nigeria
dependence on a few primary exports; fall in export prices; high demand for imports; servicing of debt; capital flight; low productivity; overvalued exchange rate; inflation at home.

## Methods of correcting a deficit
| Method | How it works |
|---|---|
| **devaluation** | lowering the value of the currency makes **exports cheaper and imports dearer** — effective where demand for both is elastic |
| **import restriction** | **tariffs**, **quotas**, **import licences**, outright **bans** |
| **exchange control** | rationing foreign exchange for approved purposes |
| **export promotion** | subsidies, tax reliefs, export credit, export-processing zones, trade fairs |
| **import substitution** | producing locally what was imported |
| **deflationary policies** | higher taxes, lower government spending and tighter credit reduce demand, including demand for imports |
| **attracting foreign investment** and tourism | capital inflow |
| **borrowing** from the IMF and other sources; drawing on **reserves** | short-term financing |
| **diversification** of exports | reduces vulnerability |
| **debt rescheduling** | spreading repayments |

### Financing versus correcting
Using reserves and borrowing merely **finance** a deficit temporarily; the other measures **correct** its causes.

### Correcting a surplus
revaluation of the currency; lower tariffs; foreign investment and aid; expansionary policies.`,
    examples: `**Example 1.** The index of export prices is 150 and that of import prices 120. Calculate the terms of trade. *Answer:* $\\dfrac{150}{120} \\times 100 = \\mathbf{125}$ — favourable.

**Example 2.** How does devaluation help to correct a balance of payments deficit? *Answer:* It makes **exports cheaper to foreigners and imports dearer at home**, raising export earnings and cutting import spending.

**Example 3.** Give two effects of a persistent deficit. *Answer:* **Depletion of external reserves** and **growing foreign debt**.`,
  },
  questions: [
    ["E", "The rate at which a country's exports exchange for its imports is its", "terms of trade", "balance of trade", "exchange control", "trade creation", "It compares export and import prices."],
    ["E", "A balance of payments deficit occurs when", "total payments abroad exceed total receipts", "exports exceed imports", "reserves are rising", "the budget is balanced", "The country pays out more than it receives."],
    ["E", "A deliberate reduction in the value of a country's currency in terms of other currencies is", "devaluation", "revaluation", "deflation", "appreciation by demand", "It makes exports cheaper."],
    ["M", "If the index of export prices is 120 and that of import prices is 150, the terms of trade are", "80", "125", "30", "270", "120 ÷ 150 × 100."],
    ["M", "Terms of trade are said to be favourable when", "export prices rise relative to import prices", "import prices rise relative to export prices", "imports exceed exports in value", "the currency is devalued", "A unit of exports then buys more imports."],
    ["M", "Which of these measures would help to correct a balance of payments deficit?", "Imposing tariffs on imports", "Subsidising imports", "Revaluing the currency", "Reducing exports", "Tariffs discourage imports."],
    ["M", "A physical limit on the quantity of a good that may be imported is", "a quota", "a tariff", "a subsidy", "an excise duty", "Quotas restrict volume directly."],
    ["H", "Devaluation is most likely to improve the balance of payments when the demand for a country's exports and imports is", "elastic", "perfectly inelastic", "unitary only", "zero", "Quantities must respond strongly to the price changes."],
    ["H", "A country's export price index rose from 100 to 110 while its import price index rose from 100 to 137.5. Its terms of trade became", "80", "125", "27.5", "110", "110 ÷ 137.5 × 100."],
    ["H", "Which of these merely finances, rather than corrects, a balance of payments deficit?", "Drawing on external reserves", "Export promotion", "Import substitution", "Devaluation", "Reserves and borrowing cover the gap without removing its cause."],
  ],
  jamb: [
    ["M", "The part of the balance of payments that records trade in goods and services is the", "current account", "capital account", "monetary movement account", "reserve account", "It covers visible and invisible trade."],
    ["H", "Developing countries often experience unfavourable terms of trade because they", "export primary products and import manufactured goods", "export machinery and import raw materials", "operate fixed exchange rates", "have large external reserves", "Primary-product prices rise more slowly than those of manufactures."],
  ],
};

export const growthDevelopment: Topic = {
  title: "Economic Growth and Development",
  subtopics: ["Meaning of economic growth", "Meaning of economic development", "Distinction between growth and development", "Problems of economic development in Nigeria"],
  objectives: ["Define economic growth and state how it is measured", "Define economic development and its indicators", "Distinguish economic growth from economic development", "Discuss the problems of economic development in Nigeria"],
  lesson: {
    title: "Growth Is Not Enough",
    summary: "The difference between producing more and living better, and why development has been difficult in Nigeria.",
    minutes: 40,
    notes: `## Economic growth
**Economic growth** is a **sustained increase in a country's real output of goods and services** — its real national income or real GDP — over time. It is measured by the annual **percentage change in real GDP**, or in **real income per head**.

$$\\text{growth rate} = \\frac{\\text{GDP this year} - \\text{GDP last year}}{\\text{GDP last year}} \\times 100$$

$$\\text{per capita income} = \\frac{\\text{national income}}{\\text{population}}$$

### Sources of growth
more and better **capital**; a larger and better-educated **labour force**; discovery and use of **natural resources**; **technological progress**; better organisation.

## Economic development
**Economic development** is growth **accompanied by structural change and an improvement in the quality of life** of the mass of the people: less poverty, unemployment and inequality; better health, education, housing and freedom of choice.

### Indicators
- real **income per head**
- **life expectancy**; infant and maternal mortality
- **literacy** and school enrolment
- access to clean water, electricity, health care
- share of **industry and services** in output and employment
- level of **unemployment**, **poverty** and **inequality**
- the **Human Development Index (HDI)** — combining income, education and life expectancy

## Growth and development distinguished
| | Economic growth | Economic development |
|---|---|---|
| **meaning** | increase in output | increase in output **plus** better living standards and structural change |
| **nature** | **quantitative** | **qualitative** as well as quantitative |
| **scope** | narrow | broad |
| **measure** | real GDP, per capita income | HDI, poverty, literacy, life expectancy |
| **distribution** | ignores how income is shared | concerned with distribution |
| **possibility** | growth can occur **without** development | development normally **requires** growth |

Nigeria has had periods of high GDP growth with little fall in poverty — "**growth without development**".

## Characteristics of underdevelopment
low income per head; dependence on **primary production**; low savings and capital; **high population growth**; unemployment and underemployment; low level of technology; poor infrastructure; illiteracy and poor health; dualism (a small modern sector beside a large traditional one); dependence on foreign trade and aid.

### The vicious circle of poverty
low income → low savings → low investment → low productivity → low income.

## Problems of economic development in Nigeria
1. **Over-dependence on crude oil**; a narrow export base.
2. **Inadequate infrastructure** — power, roads, rail, water.
3. **Low capital formation**; capital flight.
4. **Rapid population growth** outstripping jobs and services.
5. **Unemployment and widespread poverty**.
6. **Corruption** and mismanagement of public funds.
7. **Political instability** and **policy inconsistency**.
8. **Insecurity** — insurgency, banditry, communal clashes.
9. **Low level of technology**; weak research.
10. **Poor education and health** — low human capital; **brain drain**.
11. **Heavy debt burden**.
12. **Low agricultural productivity**; food imports.
13. **Unequal distribution** of income and regional imbalance.
14. **Inflation** and unstable exchange rate.
15. Weak institutions and poor plan implementation.

## Solutions
Diversify the economy; invest in infrastructure and human capital; encourage savings and investment; modernise agriculture; industrialise; ensure good governance and stable policies; control population growth; improve security; promote technology; pursue equitable distribution.`,
    examples: `**Example 1.** A country's real GDP rose from ₦400 billion to ₦440 billion. Calculate the growth rate. *Answer:* $\\dfrac{40}{400} \\times 100 = \\mathbf{10\\%}$.

**Example 2.** State one difference between growth and development. *Answer:* **Growth** is an increase in output only (quantitative); **development** also includes **improved living standards** (qualitative).

**Example 3.** National income is ₦900 billion and population 150 million. Find per capita income. *Answer:* $\\dfrac{900\\,000}{150} = \\mathbf{₦6,000}$.`,
  },
  questions: [
    ["E", "A sustained increase in a country's real output of goods and services is", "economic growth", "inflation", "economic planning", "devaluation", "It is measured by the rise in real GDP."],
    ["E", "Per capita income is obtained by dividing national income by", "population", "the labour force", "the price index", "total exports", "It shows average income per person."],
    ["E", "Which of these is an indicator of economic development?", "Life expectancy", "Number of political parties", "Size of the army", "Land area", "It reflects the health of the population."],
    ["M", "Economic development differs from economic growth in that development", "includes improvement in the quality of life", "is only an increase in output", "ignores income distribution", "is purely quantitative", "Development is qualitative as well as quantitative."],
    ["M", "The index that combines income, education and life expectancy is the", "Human Development Index", "consumer price index", "terms of trade index", "retail price index", "The HDI is published by the UNDP."],
    ["M", "A country's real GDP increased from ₦500 billion to ₦540 billion. Its growth rate was", "8%", "40%", "7.4%", "108%", "40 ÷ 500 × 100."],
    ["M", "Which of these is a characteristic of an underdeveloped economy?", "Dependence on primary production", "High level of technology", "High savings ratio", "Low population growth", "Most output and exports are raw materials."],
    ["H", "The chain 'low income, low savings, low investment, low productivity, low income' is known as the", "vicious circle of poverty", "multiplier process", "accelerator principle", "trade cycle", "Poverty perpetuates itself."],
    ["H", "National income is ₦1,200 billion and the population is 200 million. Per capita income is", "₦6,000", "₦600", "₦60,000", "₦240,000", "1,200,000 million ÷ 200 million."],
    ["H", "A situation in which GDP rises for years while poverty and unemployment remain high is described as", "growth without development", "development without growth", "stagflation", "hyperinflation", "Output grows but living standards of most people do not improve."],
  ],
  jamb: [
    ["M", "A major obstacle to economic development in Nigeria is", "inadequate infrastructure", "a small labour force", "absence of natural resources", "lack of arable land", "Poor power and transport raise the cost of production."],
    ["H", "If national income grows at 3% a year while population grows at 3.5%, per capita income will", "fall", "rise", "remain unchanged", "double", "Population is growing faster than income."],
  ],
};

export const planning: Topic = {
  title: "Economic Development Planning",
  subtopics: ["Meaning and types of development planning", "Elements of development planning", "Nigeria's planning experience", "Objectives and problems of Nigeria's development plans"],
  objectives: ["Explain development planning and its types", "Identify the elements of a development plan", "Describe Nigeria's planning experience", "State the objectives and problems of Nigeria's development plans"],
  lesson: {
    title: "Planning for Development",
    summary: "How governments set goals and allocate resources over time, and how Nigeria has fared at it.",
    minutes: 40,
    notes: `## Meaning
**Development planning** is the **deliberate effort by government to set economic and social goals for a period and to allocate resources** to achieve them.

## Types of plans
| Basis | Types |
|---|---|
| **duration** | **short-term** (1 year — the annual budget); **medium-term** (3–5 years); **long-term / perspective** (15–20 years) |
| **flexibility** | **fixed** plan — set for a definite period; **rolling** plan — revised and extended by a year each year |
| **scope** | **comprehensive (national)**, **sectoral** (e.g. agriculture), **regional**, **project** |
| **authority** | **imperative (by direction)** — binding, as in command economies; **indicative (by inducement)** — guides the private sector with incentives, as in mixed economies |

## Elements (stages) of development planning
1. **Survey of the economy** — data on resources, population and problems.
2. **Statement of objectives and targets**.
3. **Strategy** — choice of priorities and policies.
4. **Estimation of resources** — domestic and foreign sources of finance.
5. **Allocation of resources** among sectors and projects.
6. **Plan formulation** and approval.
7. **Implementation** by ministries and agencies.
8. **Monitoring, evaluation and review**.

## Reasons for planning
rational use of **scarce resources**; faster growth; balanced regional and sectoral development; provision of infrastructure; correcting market failures; attracting foreign aid; reducing unemployment and inequality.

## Nigeria's planning experience
| Plan | Period | Notes |
|---|---|---|
| **Ten-Year Plan of Development and Welfare** | 1946–1956 | colonial plan; a list of projects |
| **1955–1960 plans** (extended to 1962) | | federal and regional programmes |
| **First National Development Plan** | 1962–1968 | priority to agriculture, industry and manpower; projects such as the Kainji Dam and Port Harcourt refinery; disrupted by the civil war |
| **Second National Development Plan** | 1970–1974 | post-war **reconstruction**; set out the five national objectives; indigenisation |
| **Third National Development Plan** | 1975–1980 | launched in the **oil boom**; very ambitious; Universal Primary Education; steel and refineries |
| **Fourth National Development Plan** | 1981–1985 | hit by the **collapse of oil prices** and austerity |
| **Structural Adjustment Programme** | from 1986 | market reforms replaced fixed plans |
| **Rolling plans** | from 1990 | three-year rolling plans within a perspective plan |
| **Vision 2010** | 1996 | long-term vision |
| **NEEDS** | 2004–2007 | reform-based medium-term strategy |
| **Vision 20:2020** | 2009 | aimed to make Nigeria a top-20 economy |
| **Economic Recovery and Growth Plan**; **National Development Plan 2021–2025** | 2017; 2021 | recent medium-term plans |

## Objectives of Nigeria's development plans
The Second Plan stated five national objectives — to build
1. a **united, strong and self-reliant nation**;
2. a **great and dynamic economy**;
3. a **just and egalitarian society**;
4. a **land of bright and full opportunities** for all citizens;
5. a **free and democratic society**.

Specific aims across the plans: raise **per capita income**; more **even distribution** of income; reduce **unemployment**; increase the supply of **skilled manpower**; **diversify** the economy; **balanced development** between regions and between town and country; **indigenisation** of economic activity; develop infrastructure.

## Problems of planning in Nigeria
- **inadequate and unreliable data**
- **shortage of funds**; dependence on unstable oil revenue and foreign aid
- **political instability** — coups, civil war, change of governments and abandonment of projects
- **corruption** and inflated contracts
- **shortage of skilled personnel**
- **over-ambitious** targets; poor project preparation
- **poor implementation**, monitoring and plan discipline
- **inflation** raising project costs
- little involvement of the **private sector** and of the people
- natural disasters and external shocks`,
    examples: `**Example 1.** What is a rolling plan? *Answer:* A plan that is **revised every year and extended by a further year**, so it always covers the same length of time ahead.

**Example 2.** State the period of Nigeria's First National Development Plan. *Answer:* **1962–1968**.

**Example 3.** Give two problems of development planning in Nigeria. *Answer:* **Inadequate data** and **political instability**.`,
  },
  questions: [
    ["E", "The deliberate setting of economic goals and allocation of resources to achieve them is", "development planning", "deficit financing", "price control", "privatisation", "Government decides priorities for a period."],
    ["E", "Nigeria's Fourth National Development Plan covered the period", "1981–1985", "1962–1968", "1970–1974", "1975–1980", "It was undermined by the collapse of oil prices."],
    ["E", "The annual budget is an example of a", "short-term plan", "perspective plan", "long-term plan", "rolling plan of ten years", "It covers one year."],
    ["M", "The plan launched after the civil war with emphasis on reconstruction was the", "Second National Development Plan", "First National Development Plan", "Third National Development Plan", "Fourth National Development Plan", "It ran from 1970 to 1974."],
    ["M", "A plan that is reviewed annually and extended by one more year is a", "rolling plan", "fixed plan", "perspective plan", "sectoral plan", "It 'rolls' forward each year."],
    ["M", "Planning that guides the private sector through incentives rather than commands is", "indicative planning", "imperative planning", "physical planning", "manpower planning only", "It is typical of mixed economies."],
    ["M", "Which of these is a problem of development planning in Nigeria?", "Inadequate and unreliable data", "Excess skilled manpower", "Political stability", "Surplus funds", "Plans built on poor data miss their targets."],
    ["H", "The Third National Development Plan (1975–1980) was distinctive because it was", "launched during the oil boom with very large projected spending", "prepared by the colonial government", "abandoned for the civil war", "based on rolling plans", "Oil revenue encouraged ambitious targets."],
    ["H", "Which of these was one of the five national objectives stated in the Second National Development Plan?", "A just and egalitarian society", "A one-party state", "A fully planned command economy", "A monarchy", "The others were a united nation, a dynamic economy, full opportunities and a free democratic society."],
    ["H", "From 1990 Nigeria replaced fixed medium-term plans with", "three-year rolling plans", "ten-year colonial plans", "annual barter agreements", "imperative five-year commands", "They operated within a longer perspective plan."],
  ],
  jamb: [
    ["M", "The first step in the preparation of a development plan is the", "survey of the economy", "implementation of projects", "evaluation of results", "award of contracts", "Planners must first know the resources and problems."],
    ["H", "A plan covering a period of fifteen to twenty years is called a", "perspective plan", "rolling plan", "short-term plan", "project plan", "It sets the long-term direction of the economy."],
  ],
};

export const currentPlans: Topic = {
  title: "Current Economic Plans: MDGs, NEEDS and Vision 2020",
  subtopics: ["Meaning and objectives of the MDGs", "Meaning and objectives of NEEDS", "Meaning and objectives of Vision 20:2020", "Assessment and successor plans"],
  objectives: ["Explain the MDGs and state their objectives", "Explain NEEDS and its goals", "Explain Vision 20:2020 and its objectives", "Assess the plans and identify their successors"],
  lesson: {
    title: "Recent Development Agendas",
    summary: "Three programmes that shaped Nigerian economic policy in the early twenty-first century.",
    minutes: 40,
    notes: `## Millennium Development Goals (MDGs)
Eight goals adopted by member states of the **United Nations in September 2000**, with targets for **2015**.

1. Eradicate extreme **poverty and hunger** (halve the proportion living on less than a dollar a day).
2. Achieve universal **primary education**.
3. Promote **gender equality** and empower women.
4. Reduce **child mortality** (by two-thirds).
5. Improve **maternal health** (cut maternal mortality by three-quarters).
6. Combat **HIV/AIDS, malaria** and other diseases.
7. Ensure **environmental sustainability** (including access to safe water).
8. Develop a **global partnership for development** (aid, trade, debt relief).

### In Nigeria
Debt-relief savings were devoted to MDG projects; progress was recorded in school enrolment, polio eradication and HIV control, but **most targets were missed**. In 2015 the MDGs gave way to the **17 Sustainable Development Goals (SDGs)**, running to **2030**.

## NEEDS
The **National Economic Empowerment and Development Strategy (NEEDS)** was Nigeria's home-grown medium-term reform plan, launched in **2004** (covering 2003–2007) under President Obasanjo. States prepared **SEEDS** and local governments **LEEDS**.

### Goals
1. **Wealth creation**
2. **Employment generation**
3. **Poverty reduction**
4. **Value re-orientation**

### Strategies
- **reforming government and institutions** — public-service reform, due process in contracts, anti-corruption agencies (EFCC, ICPC), fiscal responsibility
- **growing the private sector** — privatisation, deregulation, infrastructure, support for agriculture and small enterprises
- **implementing a social charter** — education, health, housing, employment, safety nets
- **value re-orientation** — fighting corruption and promoting discipline

### Outcomes
macroeconomic stability and higher growth; **bank consolidation (2005)**; **external debt relief (2005–06)** from the Paris Club; telecommunications expansion; pension reform — but poverty, unemployment and power shortages persisted.

## Vision 20:2020
A long-term plan launched in **2009** under President Yar'Adua, aiming to make Nigeria **one of the twenty largest economies in the world by the year 2020**.

### Objectives
- a large, **diversified, sustainable and competitive** economy, with GDP of about 900 billion dollars and income per head of about 4,000 dollars by 2020
- **guaranteeing the well-being and productivity** of the people — education, health, jobs
- **optimising the key sources of growth** — agriculture, manufacturing, oil and gas, services
- **fostering sustainable social and economic development** — infrastructure (especially **power**), good governance, security, environment

It grew out of the Seven-Point Agenda (power and energy; food security; wealth creation; transport; land reform; security; education) and was to be implemented through medium-term national implementation plans.

### Outcome
The target was **not achieved**: growth slowed after the 2014 fall in oil prices and the 2016 recession; power and infrastructure deficits remained.

## Why the plans fell short
dependence on oil revenue; corruption; poor implementation and monitoring; policy discontinuity between governments; inadequate infrastructure; insecurity; rapid population growth; weak data.

## Successor plans
**Economic Recovery and Growth Plan (2017–2020)**; **National Development Plan (2021–2025)**; **Nigeria Agenda 2050**; at the global level, the **SDGs (2015–2030)**.`,
    examples: `**Example 1.** What do the letters NEEDS stand for? *Answer:* **National Economic Empowerment and Development Strategy**.

**Example 2.** State the four goals of NEEDS. *Answer:* **Wealth creation, employment generation, poverty reduction and value re-orientation**.

**Example 3.** What was the central aim of Vision 20:2020? *Answer:* To make Nigeria **one of the 20 largest economies in the world by 2020**.`,
  },
  questions: [
    ["E", "NEEDS stands for National Economic Empowerment and", "Development Strategy", "Democratic Service", "Debt Settlement", "Diversification Scheme", "It was Nigeria's medium-term reform plan from 2004."],
    ["E", "Vision 20:2020 aimed to place Nigeria among the world's top", "twenty economies by 2020", "ten oil producers by 2020", "twenty tourist centres by 2020", "five military powers by 2020", "The '20' refers to the twenty largest economies."],
    ["E", "The MDGs were to be achieved by the year", "2015", "2004", "2020", "2030", "They ran from 2000 to 2015."],
    ["M", "Which of these was a goal of NEEDS?", "Poverty reduction", "Nationalisation of all industries", "Abolition of local governments", "Import of food", "The four goals were wealth creation, employment, poverty reduction and value re-orientation."],
    ["M", "The state-level counterpart of NEEDS was known as", "SEEDS", "LEEDS", "SURE-P", "NAPEP", "State Economic Empowerment and Development Strategy."],
    ["M", "The second Millennium Development Goal was to achieve", "universal primary education", "universal adult suffrage", "full industrialisation", "zero inflation", "Every child was to complete primary schooling."],
    ["M", "The MDGs were succeeded in 2015 by the", "Sustainable Development Goals", "Seven-Point Agenda", "Structural Adjustment Programme", "Lagos Plan of Action", "The 17 SDGs run to 2030."],
    ["H", "Vision 20:2020 was launched under the administration of", "Umaru Musa Yar'Adua", "Shehu Shagari", "Sani Abacha", "Ibrahim Babangida", "It followed his Seven-Point Agenda."],
    ["H", "A notable achievement during the NEEDS period was", "external debt relief from the Paris Club", "the end of oil exports", "the abolition of the naira", "the closure of all private banks", "Nigeria secured debt relief in 2005–06."],
    ["H", "A major reason Vision 20:2020 was not realised was", "the fall in oil prices and the recession that followed", "excessive power supply", "a decline in population", "over-diversification of exports", "Oil revenue collapsed after 2014 and growth slowed."],
  ],
  jamb: [
    ["M", "Under NEEDS, the requirement that government contracts follow laid-down procedures was known as", "due process", "federal character", "quota system", "zoning", "It aimed to check waste and corruption in public procurement."],
    ["H", "The local-government component of the NEEDS framework was called", "LEEDS", "SEEDS", "NEEDS II", "FEAP", "Local Economic Empowerment and Development Strategy."],
  ],
};

export const challenges: Topic = {
  title: "Economic Development Challenges",
  subtopics: ["Meaning and effects of poverty", "Poverty alleviation and eradication and the agencies involved", "HIV/AIDS and the economy", "Power and energy inadequacy"],
  objectives: ["Explain poverty and its effects", "Describe methods and agencies of poverty alleviation in Nigeria", "Explain the effects of HIV/AIDS on the economy", "Discuss the causes and effects of inadequate power supply"],
  lesson: {
    title: "Poverty, Disease and Power",
    summary: "Three obstacles to Nigeria's development and the efforts made to overcome them.",
    minutes: 40,
    notes: `## Poverty
**Poverty** is the **inability to obtain the basic necessities of life** — food, clothing, shelter, health care and education.
- **Absolute poverty** — income below the minimum needed for subsistence (the **poverty line**).
- **Relative poverty** — being poor in comparison with the average standard of the society.

### Causes
unemployment and underemployment; low productivity; illiteracy and lack of skills; large families and rapid population growth; unequal distribution of income; corruption and bad governance; inflation; insecurity and displacement; poor infrastructure; ill-health; neglect of agriculture.

### Effects
- **low standard of living** — hunger, malnutrition, poor housing
- **poor health** and low life expectancy; high infant mortality
- low school enrolment; **child labour**
- **low savings and investment** — the vicious circle
- **small market** for goods, discouraging industry
- **crime, prostitution, begging** and social unrest
- rural–urban migration; slums
- low government revenue; dependence on aid
- political apathy and vulnerability to vote-buying

### Methods of poverty alleviation and eradication
1. **Employment generation** and skills acquisition.
2. **Agricultural development** — inputs, credit, extension, rural roads.
3. **Micro-credit** for small businesses; support for small and medium enterprises.
4. **Education** — free basic education, adult literacy, vocational training.
5. **Health care** — primary health care, immunisation, health insurance.
6. **Infrastructure** — power, water, roads, housing.
7. **Social safety nets** — cash transfers, school feeding.
8. **Population control**.
9. **Good governance**, anti-corruption and fair distribution of income (progressive taxation).

### Agencies and programmes
| Agency / programme | Year | Purpose |
|---|---|---|
| **Operation Feed the Nation; Green Revolution** | 1976; 1980 | food production |
| **Directorate of Food, Roads and Rural Infrastructure (DFRRI)** | 1986 | rural roads, water, electricity |
| **National Directorate of Employment (NDE)** | 1986 | skills training and self-employment for the unemployed |
| **Better Life Programme; Family Support Programme** | 1987; 1994 | rural women and families |
| **People's Bank; community banks** | 1989–90 | small loans without collateral |
| **Family Economic Advancement Programme (FEAP)** | 1997 | credit for cottage industries |
| **National Poverty Eradication Programme (NAPEP)** | 2001 | co-ordinated youth empowerment, rural infrastructure, social welfare and resource-development schemes |
| **SMEDAN; microfinance banks** | 2003; 2005 | small-enterprise support and credit |
| **SURE-P; YouWin** | 2012; 2011 | subsidy-reinvestment projects; youth enterprise grants |
| **National Social Investment Programmes (N-Power, school feeding, conditional cash transfer, TraderMoni)** | 2016 | jobs and safety nets |

**Why many programmes failed:** poor targeting; corruption; inadequate funding; duplication; political interference; lack of continuity.

## HIV/AIDS and the economy
- **Loss of labour** — it strikes people in their most productive years; lower output.
- **Lower productivity** through sickness and absenteeism.
- **Rising health-care costs** for families, firms and government.
- **Reduced savings and investment** as households spend on care.
- **Loss of skilled manpower**; cost of training replacements.
- More **orphans and dependants**; a higher dependency ratio.
- Children leave school; future human capital falls.
- Diversion of public funds from development.
- Deepening **poverty**.

*Control:* public education, testing, antiretroviral drugs, prevention of mother-to-child transmission — co-ordinated by the **National Agency for the Control of AIDS (NACA)**.

## Power and energy inadequacy
Electricity supply in Nigeria is far below demand; many households and firms have no reliable supply.

### Causes
low generating capacity and ageing plants; **gas-supply shortages** and pipeline vandalism; weak, overloaded **transmission** grid; **distribution losses** and electricity theft; inadequate investment; low water levels at hydro stations; poor maintenance; corruption; tariffs that do not cover costs; over-dependence on a few sources.

### Effects
- **high cost of production** — firms run generators; goods become uncompetitive
- **closure and relocation** of industries; low capacity utilisation
- **unemployment**
- discouragement of **investment**
- slow growth of small businesses and artisans
- lower quality of life; noise and air pollution from generators
- loss of government revenue

### Reforms and solutions
unbundling and **privatisation of PHCN (2013)** into generation and distribution companies; more gas and hydro plants; **renewable energy** — solar, wind, small hydro; strengthening the grid; mini-grids for rural areas; cost-reflective tariffs with metering; protection of installations; energy conservation.`,
    examples: `**Example 1.** Distinguish absolute from relative poverty. *Answer:* **Absolute** poverty is income **below subsistence**; **relative** poverty is being poor **compared with others** in the society.

**Example 2.** Name two agencies set up to reduce poverty in Nigeria. *Answer:* the **National Directorate of Employment (NDE)** and the **National Poverty Eradication Programme (NAPEP)**.

**Example 3.** State two effects of inadequate power supply on industry. *Answer:* **High cost of production** and **closure of factories**.`,
  },
  questions: [
    ["E", "The inability to obtain the basic necessities of life is", "poverty", "inflation", "recession", "deflation", "The poor lack adequate food, shelter and clothing."],
    ["E", "NAPEP stands for National Poverty", "Eradication Programme", "Education Project", "Employment Policy", "Evaluation Panel", "It was established in 2001."],
    ["E", "The agency set up in 1986 to train and assist unemployed Nigerians is the", "National Directorate of Employment", "National Agency for the Control of AIDS", "Bureau of Public Enterprises", "Debt Management Office", "The NDE runs skills-acquisition schemes."],
    ["M", "Income below the minimum needed for subsistence is described as", "absolute poverty", "relative poverty", "structural unemployment", "disguised unemployment", "It is measured against a poverty line."],
    ["M", "An economic effect of HIV/AIDS is", "loss of productive labour", "increase in savings", "lower health expenditure", "a fall in the dependency ratio", "It affects people in their working years."],
    ["M", "Inadequate power supply affects manufacturing mainly by", "raising the cost of production", "increasing capacity utilisation", "lowering the prices of goods", "attracting foreign investors", "Firms must generate their own electricity."],
    ["M", "Which of these is a method of poverty alleviation?", "Provision of micro-credit to small businesses", "Raising indirect taxes on food", "Retrenchment of workers", "Removal of free education", "Small loans enable the poor to start income-earning activities."],
    ["H", "The programme established in 1986 to provide rural roads, water and electricity was", "DFRRI", "NAPEP", "FEAP", "SURE-P", "The Directorate of Food, Roads and Rural Infrastructure."],
    ["H", "The Power Holding Company of Nigeria was unbundled and privatised into generation and distribution companies in", "2013", "1986", "1999", "2005", "The successor companies were handed to private investors in that year."],
    ["H", "A common reason for the failure of poverty-alleviation programmes in Nigeria is", "poor targeting and corruption", "excessive continuity of policies", "over-funding by donors", "too few programmes", "Benefits often did not reach the poor."],
  ],
  jamb: [
    ["M", "The agency that co-ordinates the national response to HIV/AIDS in Nigeria is", "NACA", "NDE", "NAPEP", "NAFDAC", "The National Agency for the Control of AIDS."],
    ["H", "Poverty limits industrial growth mainly because", "low incomes mean a small market for manufactured goods", "the poor save too much", "the poor demand only imports", "wages are too high", "Low purchasing power restricts demand."],
  ],
};
