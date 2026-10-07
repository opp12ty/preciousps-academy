import type { TermPlan } from "../types";

/** SS1 Commerce — original Precious PS content following the national senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Introduction to commerce",
        subtopics: ["Meaning and scope of commerce", "Functions of commerce", "Development of commerce in Nigeria", "Commerce and related subjects"],
        objectives: ["Define commerce and describe its scope", "State the functions of commerce", "Outline the history of commerce in Nigeria and the factors that affect its growth", "Relate commerce to economics and other subjects"],
        lesson: {
          title: "What Commerce Is",
          summary: "Explain the meaning, scope, functions and development of commerce.",
          minutes: 40,
          notes: `## Meaning
**Commerce** is the study of **all the activities involved in the distribution and exchange of goods and services** — everything that helps goods to move from the producer to the final consumer.

## Scope
Commerce is divided into **trade** and **aids to trade (auxiliaries to trade)**.
### Trade
The **buying and selling** of goods and services.
- **home (domestic) trade** — within a country: **wholesale** and **retail** trade
- **foreign (international) trade** — between countries: **import**, **export** and **entrepôt** (re-export) trade
### Aids to trade
Services that make trade possible or easier.
| Aid | What it does |
|---|---|
| **banking and finance** | provides capital and means of payment |
| **insurance** | covers the risks of business |
| **transport** | moves goods and people |
| **communication** | passes information between buyers and sellers |
| **warehousing** | stores goods until they are needed |
| **advertising** | informs and persuades customers |
Tourism is sometimes added.

## Functions of commerce
- makes goods available **where and when** they are wanted — bridging the gap between producer and consumer
- provides **employment** — traders, bankers, drivers, insurers
- encourages **specialisation** and large-scale production by widening markets
- raises the **standard of living** by offering a variety of goods
- helps the **exchange** of goods and services through money and banking
- promotes **international relations** and trade
- provides **revenue** to government through taxes and duties
- stimulates production and economic development

## Characteristics
it involves exchange; it is carried on for profit; it bridges gaps of place, time, ownership and information; it depends on mutual trust and communication.

## E-commerce
Buying and selling through the **internet** and other electronic networks — online shops, electronic payments, mobile banking. It widens markets and lowers costs.

## Development of commerce in Nigeria
- **trade by barter** — the direct exchange of goods for goods — was the earliest form
- **trans-Saharan trade** linked northern Nigeria with North Africa — in salt, leather, cloth, gold and slaves
- **coastal trade with Europeans** from the fifteenth century — first in pepper, ivory and slaves, later in "legitimate" goods such as palm oil
- commodity money (**cowries**, manillas) was replaced by coins and notes; the first bank opened in **1892**
- colonial trading companies (the Royal Niger Company, UAC, John Holt) dominated the export of produce and the import of manufactures
- railways (from 1898), roads and ports opened up the interior
- after independence: the growth of indigenous enterprise, the **indigenisation decrees** of 1972 and 1977, the oil boom, and the spread of banks, markets and telecommunications
- today: supermarkets and shopping malls, mobile telephony (from 2001), internet banking and e-commerce

### Factors that aided the growth of commerce
improved **transport and communication**; the introduction of **money and banking**; growth in **population** and towns; **industrial** development; political stability and government policy; the discovery of **minerals**; **specialisation** and large-scale production; education.

### Factors that limit commerce
poor roads and power supply; inadequate capital; insecurity; multiple taxation; inflation; smuggling and fake goods; low incomes.

## Commerce and other subjects
- **economics** — studies how scarce resources are used to satisfy wants; commerce studies the practical activities of exchange and distribution. Both deal with production, trade, money and business organisation
- **accounting (bookkeeping)** — records commercial transactions and measures profit
- **business management** — organises commercial activities
- **geography** — location of resources, transport routes and markets
- **business law** — the legal rules governing contracts and trade

## Why study commerce?
it explains how business works; it prepares for careers in trade, banking, insurance, marketing and administration; it helps consumers to know their rights; it is a foundation for further study in business.`,
          examples: `**Example 1.** State the two main divisions of commerce. *Answer:* **Trade** and **aids to trade**.

**Example 2.** List four aids to trade. *Answer:* **Banking, insurance, transport and warehousing** (also communication and advertising).

**Example 3.** Give two factors that aided the growth of commerce in Nigeria. *Answer:* **Improved transport** and the **introduction of money and banking**.`,
        },
        questions: [
          ["E", "The study of all activities involved in the distribution and exchange of goods and services is", "commerce", "accounting", "geography", "auditing", "It covers trade and the aids to trade."],
          ["E", "Commerce is divided into trade and", "aids to trade", "production", "manufacturing", "agriculture", "The aids are also called auxiliaries to trade."],
          ["E", "The buying and selling of goods within a country is known as", "home trade", "foreign trade", "entrepôt trade", "export trade", "It consists of wholesale and retail trade."],
          ["M", "Which of the following is an aid to trade?", "insurance", "farming", "mining", "manufacturing", "It covers the risks of business."],
          ["M", "The aid to trade that solves the problem of keeping goods until they are needed is", "warehousing", "advertising", "banking", "communication", "It bridges the gap of time."],
          ["M", "The earliest form of trade, in which goods were exchanged directly for goods, is", "trade by barter", "retail trade", "entrepôt trade", "e-commerce", "No money was used."],
          ["M", "Importing goods in order to re-export them to another country is called", "entrepôt trade", "home trade", "wholesale trade", "retail trade", "It is a branch of foreign trade."],
          ["H", "A function of commerce is that it", "makes goods available where and when they are wanted", "extracts raw materials from the earth", "turns raw materials into finished goods", "fixes the wages of workers", "It bridges the gap between producers and consumers."],
          ["H", "A factor that greatly aided the growth of commerce in Nigeria was", "the development of transport and communication", "the abolition of money", "a fall in population", "the closure of the ports", "Goods and information could move more easily."],
          ["H", "Commerce differs from economics mainly in that commerce is concerned with", "the practical activities of distribution and exchange", "the theory of how resources are allocated", "the measurement of national income", "the control of inflation", "Economics studies the wider use of scarce resources."],
        ],
      },
      {
        week: 2,
        title: "Occupations",
        subtopics: ["Meaning and classification of occupations", "Industrial occupations", "Commercial occupations", "Service occupations and factors affecting choice"],
        objectives: ["Define occupation and classify occupations", "Describe the industrial occupations", "Describe the commercial occupations", "Describe direct and indirect services and the factors that determine the choice of occupation"],
        lesson: {
          title: "How People Earn a Living",
          summary: "Classify occupations into industry, commerce and services.",
          minutes: 40,
          notes: `## Occupation
Any **legitimate activity in which a person engages regularly in order to earn a living**.

## Classification
Occupations fall into three groups: **industry**, **commerce** and **services**.

## 1. Industrial occupations
Concerned with the **production of goods**.
### Extractive industry
Taking raw materials and food **directly from nature** — the land, the sea and the air.
- **farming**, **fishing**, **mining**, quarrying, **lumbering**, hunting, drilling for oil
Its products are **primary products**.
### Manufacturing industry
**Converting raw materials** into finished or semi-finished goods.
- textile making, food processing, brewing, oil refining, car assembly, cement, soap, furniture
### Constructive industry
**Assembling manufactured goods into structures.**
- building houses, roads, bridges, dams, ships, railways

## 2. Commercial occupations
Concerned with the **distribution and exchange** of goods — getting them from producers to consumers.
- **trade**: wholesalers, retailers, importers, exporters
- **aids to trade**: bankers, insurers, transporters, warehouse keepers, advertisers, communication workers

## 3. Service occupations
Workers who provide **services** rather than goods.
### Direct services
Rendered **personally and directly to the consumer**.
- doctors, nurses, teachers, lawyers, barbers, hairdressers, tailors, musicians, domestic servants, police officers, soldiers
### Indirect services
Rendered **to trade and industry**, and so to consumers only indirectly — these are the **commercial services**: banking, insurance, transport, warehousing, advertising and communication.

## Summary diagram
| Occupation | Branches | Examples |
|---|---|---|
| **industry** | extractive, manufacturing, constructive | farmer, miner; brewer; bricklayer |
| **commerce** | trade; aids to trade | retailer; banker, driver |
| **services** | direct; indirect | teacher, doctor; insurer |

## Interdependence
The groups depend on one another: the **farmer** (extractive) supplies cotton to the **textile mill** (manufacturing); the cloth reaches consumers through **wholesalers and retailers** (commerce), helped by **banks and transporters**; all of them need **doctors and teachers** (direct services). Without commerce, industry would have no market; without industry, commerce would have nothing to distribute.

## Factors that determine a person's choice of occupation
- **education and training**
- **skill, talent and interest**
- **remuneration** (salary and other benefits)
- **availability of jobs**
- **parental and peer influence**
- **natural resources and climate** of the area (fishing near water, mining near minerals)
- **health and age**
- prestige; job security; religion and tradition
- government policy

## Factors that determine the type of employment in an area
natural resources; climate; level of technology and capital; size of the market; skills of the people; government policy; history.

## Employment status
- **paid employment** — working for another person or organisation for a wage or salary
- **self-employment** — running one's own business
- **unemployment** — being willing and able to work but unable to find a job

## Career opportunities in commerce
trader, banker, insurance broker, accountant, marketer, advertising executive, clearing and forwarding agent, transport manager, storekeeper, stockbroker, customs officer.`,
          examples: `**Example 1.** Classify fishing, shoemaking in a factory and road building. *Answer:* **Extractive, manufacturing and constructive** industries.

**Example 2.** Is a teacher engaged in direct or indirect service? *Answer:* **Direct** service.

**Example 3.** Give three factors that influence the choice of occupation. *Answer:* **Education, interest and remuneration**.`,
        },
        questions: [
          ["E", "Any legitimate activity that a person does regularly to earn a living is", "an occupation", "a hobby", "a holiday", "a donation", "It provides income."],
          ["E", "Farming, fishing and mining are examples of", "extractive occupations", "manufacturing occupations", "constructive occupations", "commercial occupations", "They take products directly from nature."],
          ["E", "A bricklayer building a house is engaged in", "constructive industry", "extractive industry", "commerce", "direct service", "Manufactured goods are assembled into a structure."],
          ["M", "The conversion of raw materials into finished goods is carried out by", "manufacturing industry", "extractive industry", "retail trade", "direct services", "Textile making and brewing are examples."],
          ["M", "Which of the following workers renders a direct service?", "a doctor", "a banker", "an insurer", "a transporter", "The service is given personally to the consumer."],
          ["M", "Banking, insurance and transport are classified as", "commercial (indirect) services", "direct services", "extractive occupations", "constructive occupations", "They serve trade and industry."],
          ["M", "A wholesaler belongs to the group of occupations known as", "commerce", "industry", "direct services", "construction", "He is engaged in trade."],
          ["H", "The three branches of industrial occupation are", "extractive, manufacturing and constructive", "trade, banking and insurance", "direct, indirect and personal", "wholesale, retail and export", "Together they produce goods."],
          ["H", "The dependence of a textile manufacturer on cotton farmers, transporters and retailers illustrates", "the interdependence of occupations", "the law of demand", "the imprest system", "direct services only", "No group can work in isolation."],
          ["H", "A person who lives in a riverine area is most likely to take up fishing because of", "the natural resources of the area", "parental income alone", "government decree", "high rainfall in the desert", "The environment influences the choice of occupation."],
        ],
      },
      {
        week: 3,
        title: "Production",
        subtopics: ["Meaning and types of production", "Factors of production", "Division of labour and specialisation", "Limitations and interdependence"],
        objectives: ["Define production and describe its types", "Describe the factors of production and their rewards", "Explain division of labour and specialisation with their merits and demerits", "State the limitations of division of labour"],
        lesson: {
          title: "Creating Goods and Services",
          summary: "Explain production, its factors and the division of labour.",
          minutes: 40,
          notes: `## Production
The **creation of goods and services to satisfy human wants**. It includes every activity that adds **utility** (usefulness) — so production is **not complete until the goods reach the final consumer**. The trader, the transporter and the banker are therefore producers too.

## Types (stages) of production
| Stage | Activities |
|---|---|
| **primary** | **extraction** of raw materials from nature: farming, fishing, mining, lumbering |
| **secondary** | **manufacturing and construction**: turning raw materials into finished goods |
| **tertiary** | **services**: **commercial** services (trade, banking, insurance, transport) and **direct** services (teachers, doctors) |
Direct production is producing for one's own use (subsistence); indirect production is producing for exchange.

## Factors of production
| Factor | Meaning | Reward |
|---|---|---|
| **land** | all free gifts of nature | **rent** |
| **labour** | human effort, physical and mental | **wages** and salaries |
| **capital** | man-made wealth used in production: machinery, buildings, money | **interest** |
| **entrepreneur** | the organiser and risk-bearer | **profit** |

### Land
fixed in supply; immobile; a free gift of nature; varies in quality.
### Labour
skilled, semi-skilled and unskilled; mobile; cannot be stored; its efficiency depends on training, health and conditions of work.
### Capital
- **fixed capital** — durable assets used repeatedly: buildings, machinery, vehicles
- **circulating (working) capital** — used up in one process: raw materials, cash, stock
### The entrepreneur
provides or raises capital; organises the other factors; takes decisions; bears risks; introduces new ideas.

## Division of labour
The **breaking down of a production process into separate stages, each carried out by a different person or group**.
## Specialisation
The **concentration of a person, firm, region or country on the production of what it can do best**.
- by **product**: one firm makes only shoes
- by **process**: each worker performs one operation
- by **region**: cocoa in the south-west, groundnuts in the north
- by **country**: Ghana and cocoa, Kuwait and oil

### Advantages
- **greater output** and lower cost per unit
- **greater skill** — practice makes perfect
- **saves time** — no moving from task to task; less training time
- makes the **use of machines** possible
- people do the work that suits them
- development of standard, mass-produced goods

### Disadvantages
- **monotony** — work becomes boring
- **decline in craftsmanship**
- **interdependence** — the absence of one group can stop production
- risk of **unemployment** — a specialist may find it hard to change jobs; machines replace workers
- standardised goods reduce variety

### Limitations
- the **size of the market** — the most important limit
- the **nature of the product** — some goods and services cannot be split into stages
- the availability of **capital** and of labour
- transport and communication
- the willingness of workers

## Specialisation and exchange
Specialisation makes **exchange** necessary: each person produces a surplus of one thing and must trade it for others — hence the need for **commerce**.

## Scale of production
- **small-scale** production — little capital, few workers, a local market
- **large-scale** production — much capital and machinery; enjoys **economies of scale** — cheaper bulk buying, specialist managers, cheaper finance, spreading of risks

## Production and commerce
Production creates goods; commerce carries them to consumers. Each depends on the other.`,
          examples: `**Example 1.** Why is a retailer regarded as a producer? *Answer:* Production is **not complete until goods reach the consumer**; the retailer provides that service.

**Example 2.** Match each factor of production with its reward. *Answer:* Land — **rent**; labour — **wages**; capital — **interest**; entrepreneur — **profit**.

**Example 3.** What is the main limitation of division of labour? *Answer:* The **size of the market**.`,
        },
        questions: [
          ["E", "The creation of goods and services to satisfy human wants is", "production", "consumption", "distribution only", "taxation", "It is complete when goods reach the consumer."],
          ["E", "The reward for labour as a factor of production is", "wages", "rent", "interest", "profit", "It is paid for human effort."],
          ["E", "Mining and lumbering are classified as", "primary production", "secondary production", "tertiary production", "direct services", "Raw materials are taken from nature."],
          ["M", "The provision of services such as banking and transport belongs to", "tertiary production", "primary production", "secondary production", "extractive production", "It is the service stage."],
          ["M", "The factor of production that organises the others and bears the risks is", "the entrepreneur", "labour", "land", "capital", "The reward is profit."],
          ["M", "The breaking down of work into separate stages performed by different people is", "division of labour", "indigenisation", "warehousing", "nationalisation", "Each worker concentrates on one task."],
          ["M", "A disadvantage of division of labour is", "monotony of work", "increase in output", "saving of time", "development of skill", "Repeating the same task is boring."],
          ["H", "Production is said to be complete only when", "the goods reach the final consumer", "the raw materials are extracted", "the goods leave the factory", "the workers are paid", "Distribution is part of production."],
          ["H", "The most important factor limiting the extent of division of labour is", "the size of the market", "the colour of the product", "the age of the workers", "the name of the firm", "A small market cannot absorb a large output."],
          ["H", "Raw materials and cash used up in a single cycle of production are known as", "circulating capital", "fixed capital", "social capital", "nominal capital", "Fixed capital is used over and over again."],
        ],
      },
      {
        week: 4,
        title: "Retail trade",
        subtopics: ["Meaning and functions of the retailer", "Small-scale retailers", "Factors to consider before setting up a retail business", "Reasons for the survival and failure of small retailers"],
        objectives: ["Define retail trade and state the functions of the retailer", "Describe the types of small-scale retailer", "State the factors to consider before setting up a retail business", "Explain why small retailers survive or fail"],
        lesson: {
          title: "Selling to the Final Consumer",
          summary: "Describe retail trade, the functions of retailers and the types of small-scale retailer.",
          minutes: 40,
          notes: `## Retail trade
The **sale of goods in small quantities to the final consumer**. The **retailer** is the **last link** in the chain of distribution: producer → wholesaler → **retailer** → consumer.

## Functions of the retailer
### To the consumer
- **breaks bulk** — sells in the small units consumers want
- brings goods **near** to consumers
- stocks a **variety** of goods to choose from
- grants **credit** to trusted customers
- gives **advice** and information about goods
- provides **after-sales service** — delivery, installation, repairs
- keeps goods until they are needed
### To the wholesaler and manufacturer
- provides an **outlet** for their goods
- passes on **information** about consumers' tastes and complaints
- helps to **advertise** and display goods
- relieves them of the task of selling to many small buyers

## Types of small-scale retailer
| Type | Features |
|---|---|
| **hawkers (itinerant traders)** | carry goods from place to place on the head, by cart or bicycle |
| **pedlars** | similar, moving on foot from house to house |
| **market traders (stall holders)** | sell from stalls in daily or periodic markets |
| **roadside (street) traders** | display goods along busy roads |
| **kiosk operators** | sell from small booths |
| **unit (small) shops** | one small shop run by the owner and family |
| **mobile shops** | vans fitted as shops, serving villages and estates |
| **tied shops** | sell the products of one manufacturer who finances them, such as a petrol station |

### Features of small-scale retailing
little capital; usually a sole proprietorship; a small stock; a local market; personal contact with customers; long opening hours; few or no paid employees.

### Advantages
- easy to start with **small capital**
- **personal attention** to customers; credit to known customers
- **convenient** location and hours
- quick decisions; low overheads
- provides self-employment

### Disadvantages
- **limited capital** and stock
- cannot buy in bulk, so **prices are higher**
- **unlimited liability**
- little specialisation; poor record keeping
- bad debts from credit sales
- limited range of goods

## Factors to consider before setting up a retail business
- **capital** available
- **location** — nearness to customers, competitors, transport
- the **type of goods** to sell
- the **market** — size and incomes of customers
- **sources of supply**
- **competition**
- **experience and skill** of the owner
- **government regulations** — registration, licences, taxes
- shop layout and display; staffing

## Why small-scale retailers survive
- nearness and **convenience** to customers
- **personal service** and credit
- small capital requirement
- they sell in the **tiny units** customers can afford
- long hours; flexibility
- some goods need individual attention (tailoring, repairs)
- the owner's wish to be independent

## Why small retail businesses fail
insufficient capital; poor location; bad management and no proper accounts; giving too much credit; excessive drawings; strong competition from large stores; poor stock control; lack of experience.

## Trends in retailing
**self-service**; **branding** and pre-packaging; **after-sales service**; credit and debit cards; **vending machines**; **franchising**; shopping malls; **online retailing** and home delivery.

## Wholesaler and retailer compared
| Wholesaler | Retailer |
|---|---|
| buys from producers in bulk | buys from wholesalers |
| sells to retailers | sells to final consumers |
| needs large capital and warehouses | needs less capital |
| location matters little | must be near consumers |`,
          examples: `**Example 1.** Define retail trade. *Answer:* **Selling goods in small quantities to the final consumer**.

**Example 2.** State three services of the retailer to the consumer. *Answer:* **Breaking bulk, offering variety and granting credit**.

**Example 3.** Give two reasons why small retailers survive. *Answer:* **Personal service** and **convenient location**.`,
        },
        questions: [
          ["E", "The sale of goods in small quantities to the final consumer is", "retail trade", "wholesale trade", "export trade", "entrepôt trade", "The retailer is the last link in the chain."],
          ["E", "A retailer who carries goods from place to place in search of customers is", "a hawker", "a kiosk operator", "a supermarket", "a wholesaler", "He is an itinerant trader."],
          ["E", "A van fitted out as a shop and moving from one place to another is a", "mobile shop", "unit shop", "department store", "kiosk", "It serves villages and housing estates."],
          ["M", "A function of the retailer to the consumer is", "selling goods in convenient small units", "buying in bulk from the manufacturer", "financing the manufacturer", "exporting goods", "This is known as breaking bulk."],
          ["M", "A service that the retailer renders to the manufacturer is", "passing on information about consumers' preferences", "granting credit to consumers", "selling in small units", "opening for long hours", "This helps producers to improve their goods."],
          ["M", "A retail outlet that sells the products of one manufacturer who finances it is a", "tied shop", "mobile shop", "market stall", "co-operative shop", "Many petrol stations are of this kind."],
          ["M", "An advantage of small-scale retailing is", "personal attention to customers", "unlimited capital", "bulk buying at big discounts", "wide specialisation of staff", "The owner knows the customers individually."],
          ["H", "The most important factor in choosing where to site a retail shop is", "nearness to customers", "nearness to the factory", "nearness to the seaport", "distance from all roads", "A retailer must be easily reached by buyers."],
          ["H", "Small-scale retailers continue to survive alongside large stores mainly because they", "offer convenience and personal service", "have more capital", "advertise more widely", "sell only expensive goods", "They are close to customers and sell in tiny units."],
          ["H", "A common cause of failure of small retail businesses is", "granting too much credit and poor record keeping", "having too many customers", "excessive capital", "selling too many branded goods", "Bad debts and bad management drain the business."],
        ],
      },
      {
        week: 5,
        title: "Large-scale retailing",
        subtopics: ["Supermarkets and department stores", "Multiple shops and hypermarkets", "Mail order, online and other forms", "Advantages and disadvantages of large-scale retailing"],
        objectives: ["Describe supermarkets and department stores", "Describe multiple shops and hypermarkets", "Describe mail-order, online and other modern forms of retailing", "State the advantages and disadvantages of large-scale retailing"],
        lesson: {
          title: "Big Retail Organisations",
          summary: "Describe the forms, features, advantages and disadvantages of large-scale retailing.",
          minutes: 40,
          notes: `## Large-scale retailers
Retail organisations with **large capital**, many employees, a high turnover and often many branches.

## Supermarkets
Large **self-service** stores selling mainly **food and household goods**.
### Features
- **self-service** — customers pick goods from open shelves and pay at a **check-out**
- goods are **pre-packed, branded and price-marked**
- wide variety; attractive display; trolleys and baskets
- usually **cash sales only**; low prices from bulk buying
- few sales assistants
### Advantages
lower prices; quick shopping; wide choice; low labour cost; high turnover.
### Disadvantages
pilfering (shoplifting); no credit or personal service; customers are tempted into impulse buying; large capital needed.

## Department stores
Large stores divided into many **departments**, each selling a different class of goods — clothing, furniture, electrical goods, toys, food — **"many shops under one roof"**.
### Features
- each department has its own **manager** and operates like a separate shop
- centrally located in big cities
- wide range of goods — "**one-stop shopping**"
- services: restaurant, rest rooms, car park, delivery, credit accounts
- large capital; usually a public or private company
### Advantages
all needs met in one place; economies of bulk buying; specialist staff; each department advertises the others; comfort and services.
### Disadvantages
very high overheads (rent in city centres, staff, services) — so prices may be high; far from residential areas; hard to manage; a weak department is carried by the others.

## Multiple shops (chain stores)
A business with **many branches in different towns**, all selling the **same type of goods** under the same name.
### Features
- **central buying** by the head office; goods distributed to branches
- **uniform prices**, shop design and display
- **centralised control** — policies set at head office; branch managers have limited powers
- usually **cash sales**
- specialised: shoes, food, pharmacy, electronics
### Advantages
bulk buying at big discounts; spreading of risk — a loss at one branch is covered by others; wide market; easy transfer of stock between branches; national advertising serves all branches.
### Disadvantages
no personal touch; branch managers lack initiative; slow decisions; local tastes may be ignored; heavy cost of supervision.

## Variety chain stores
Chain stores selling a wide range of low-priced goods.

## Hypermarkets and shopping malls
A **hypermarket** is a very large self-service store on the outskirts of a town, with ample parking, selling food and non-food goods at low prices. A **shopping mall** brings many shops, banks, restaurants and cinemas into one complex.

## Mail-order business
Selling through the **post or courier**: customers choose from a **catalogue** or advertisement, order by post, telephone or internet, and the goods are delivered — often "cash on delivery" or by instalments.
- **advantages**: no need for shops; wide market, including remote areas; shopping from home
- **disadvantages**: goods cannot be inspected before buying; delays; cost of catalogues and delivery; risk of bad debts and of damage in transit; depends on reliable post and addresses

## Online retailing (e-commerce)
Selling through **websites and mobile applications**; payment by card, transfer or on delivery. It offers a huge choice at any hour, but depends on internet access, trust and efficient delivery.

## Other forms
- **consumers' co-operative societies** — owned by their customer-members; profits are shared as dividends on purchases
- **vending (automatic) machines** — dispense drinks, snacks and tickets round the clock
- **franchising** — an independent trader uses the name, products and methods of an established firm for a fee
- **discount stores**; cash-and-carry; **tele-shopping**

## Advantages of large-scale retailing in general
- **economies of scale** — bulk buying, cheaper finance, specialist management
- **lower prices** and wider choice for consumers
- modern facilities and services
- large resources for advertising
- many jobs

## Disadvantages
- very **large capital** required
- **impersonal** — little contact with customers
- high overheads
- may drive small traders out of business
- problems of management and control

## Factors behind the growth of large-scale retailing
urbanisation; rising incomes; branding and pre-packaging; car ownership; refrigeration; advertising; electronic payment.`,
          examples: `**Example 1.** What is the main feature of a supermarket? *Answer:* **Self-service** — customers select goods themselves and pay at a check-out.

**Example 2.** Distinguish a department store from a multiple shop. *Answer:* A **department store** is **one building with many departments**; a **multiple shop** has **many branches** selling similar goods.

**Example 3.** Give one advantage and one disadvantage of mail-order trading. *Answer:* **No shop is needed**; but **goods cannot be inspected** before purchase.`,
        },
        questions: [
          ["E", "A large store in which customers pick goods from shelves and pay at a check-out is a", "supermarket", "kiosk", "market stall", "mail-order house", "Self-service is its main feature."],
          ["E", "A large retail store divided into sections, each selling a different class of goods, is a", "department store", "multiple shop", "mobile shop", "tied shop", "It offers many shops under one roof."],
          ["E", "Retailing in which customers order from a catalogue and receive the goods by post is", "mail-order business", "hawking", "self-service", "franchising", "No shop premises are needed."],
          ["M", "A retail business with many branches selling similar goods under one name is a", "multiple shop", "department store", "unit shop", "co-operative society", "It is also called a chain store."],
          ["M", "A characteristic of multiple shops is", "centralised buying and control", "different prices in each branch", "one large building with many departments", "sale of goods by post only", "The head office buys for all branches."],
          ["M", "A disadvantage of supermarkets is", "pilfering by customers", "high prices", "slow service", "a narrow range of goods", "Goods on open shelves are easily stolen."],
          ["M", "An advantage of large-scale retailing is", "economies of bulk buying", "personal contact with every customer", "low capital requirement", "ease of management", "Large orders earn big discounts."],
          ["H", "A disadvantage of mail-order business to the customer is that", "the goods cannot be inspected before purchase", "the range of goods is too wide", "goods are delivered to the home", "payment may be by instalments", "What arrives may differ from the picture."],
          ["H", "Department stores tend to charge higher prices than supermarkets because of", "their high overheads and the services they provide", "their small size", "their lack of customers", "their dependence on hawkers", "City-centre rents, staff and facilities are costly."],
          ["H", "An arrangement in which an independent trader pays to use the name and methods of an established business is", "franchising", "hawking", "indigenisation", "nationalisation", "The established firm is the franchisor."],
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
        title: "Wholesale trade",
        subtopics: ["Meaning and types of wholesaler", "Functions of the wholesaler", "Channels of distribution", "Elimination of the wholesaler"],
        objectives: ["Define wholesale trade and describe the types of wholesaler", "State the functions of the wholesaler", "Describe the channels of distribution and the factors that determine the choice", "Assess the arguments for and against eliminating the wholesaler"],
        lesson: {
          title: "The Middleman Between Producer and Retailer",
          summary: "Explain the role of the wholesaler and the channels of distribution.",
          minutes: 40,
          notes: `## Wholesale trade
The **buying of goods in large quantities from producers and selling them in smaller quantities to retailers** (and sometimes to large users). The **wholesaler** is the link between the manufacturer and the retailer.

## Types of wholesaler
### Merchant wholesalers
They **buy the goods and own them**, taking the risks.
- **general wholesalers** — stock a wide range of goods
- **specialist wholesalers** — deal in one line: drugs, textiles, books
- **national** and **regional** wholesalers
- **cash-and-carry wholesalers** — retailers come, pay cash and take the goods away; no credit, no delivery, so prices are lower
- **rack jobbers** — stock and maintain display racks in retailers' shops
### Agent middlemen
They **do not own** the goods; they bring buyer and seller together for a **commission**.
- **brokers** — arrange sales without handling the goods; earn **brokerage**
- **factors** — hold and sell the goods in their own names
- **commission agents**
- **del credere agents** — guarantee payment by buyers, for an extra commission
- **auctioneers** — sell to the highest bidder

## Functions of the wholesaler
### To the manufacturer
- **buys in bulk**, allowing mass production
- **pays promptly** — providing finance
- **stores** goods, saving the manufacturer warehouse space
- bears the **risks** of price changes, damage and unsold stock
- **advertises** and promotes the goods
- supplies **market information** about demand
- **prepares goods for sale** — grading, blending, packing and branding
- relieves the manufacturer of dealing with many small retailers
### To the retailer
- **breaks bulk** — sells in the small lots the retailer can afford
- offers a **variety** of goods from many producers
- grants **credit**
- **delivers** goods
- gives **advice** on new products and trends
- keeps stock available at all times, so the retailer need not hold much
- helps to **stabilise prices** by holding stock when goods are plentiful and releasing it in times of scarcity

## Channels of distribution
The routes goods follow from producer to consumer.
1. producer → wholesaler → retailer → consumer (the traditional channel)
2. producer → retailer → consumer
3. producer → wholesaler → consumer
4. producer → consumer (direct sale)
5. producer → agent → wholesaler → retailer → consumer (often in foreign trade)

### Factors that determine the channel
- the **nature of the product** — perishable, bulky, fragile or technical goods need short channels
- the **size of the market** and how scattered the customers are
- the **financial strength** of the producer
- the **cost** of each channel
- the existence of large retailers able to buy direct
- government policy; competition; the degree of control the producer wants

## Elimination of the wholesaler
### When the wholesaler is by-passed
- **large retailers** (supermarkets, multiple shops) buy direct from manufacturers
- manufacturers open their **own retail outlets** or depots
- **perishable goods** — bread, fresh milk, newspapers
- **expensive or technical goods** needing after-sales service — cars, machinery
- goods **made to order** — furniture, tailoring
- sales through **mail order**, the internet or vending machines
- branded goods advertised directly to consumers

### Arguments for elimination
- wholesalers **raise prices** by adding their profit
- some **hoard** goods to create artificial scarcity
- they lengthen the chain and delay goods
- they may favour some brands over others

### Arguments against elimination
- the wholesaler's **functions cannot be eliminated** — someone must still store, finance, break bulk and carry risk, at a cost
- small retailers and small manufacturers **depend on him** for credit and small lots
- he saves manufacturers the cost of selling to thousands of retailers
- he steadies supply and prices
- he provides employment

## Problems of wholesalers in Nigeria
inadequate capital and credit; poor roads and storage; competition from large retailers and manufacturers' depots; bad debts; unstable prices and supply; multiple levies; insecurity.`,
          examples: `**Example 1.** State three services of the wholesaler to the manufacturer. *Answer:* **Buying in bulk, prompt payment and warehousing**.

**Example 2.** Why may bread be sold direct by the baker to retailers or consumers? *Answer:* It is **perishable**, so a short channel is needed.

**Example 3.** Give one argument against eliminating the wholesaler. *Answer:* His **functions must still be performed** by someone, at a cost.`,
        },
        questions: [
          ["E", "The trader who buys goods in bulk from manufacturers and sells in smaller quantities to retailers is the", "wholesaler", "retailer", "consumer", "hawker", "He is the link between producer and retailer."],
          ["E", "A wholesaler who sells for cash only and does not deliver the goods is a", "cash-and-carry wholesaler", "specialist wholesaler", "broker", "factor", "Retailers collect the goods themselves."],
          ["E", "The route through which goods pass from the producer to the final consumer is the", "channel of distribution", "bill of lading", "balance of trade", "chain of command", "It may be long or short."],
          ["M", "A function of the wholesaler to the manufacturer is", "buying in bulk and paying promptly", "selling in small units to consumers", "granting credit to consumers", "opening shops near consumers", "This finances continued production."],
          ["M", "A function of the wholesaler to the retailer is", "granting credit and breaking bulk", "manufacturing the goods", "fixing government taxes", "transporting consumers", "Retailers can buy small lots and pay later."],
          ["M", "An agent who brings buyers and sellers together without handling the goods is a", "broker", "factor", "cash-and-carry wholesaler", "retailer", "His reward is called brokerage."],
          ["M", "An agent who guarantees that buyers will pay for goods sold on credit is a", "del credere agent", "broker", "auctioneer", "rack jobber", "He earns an extra commission for bearing the risk."],
          ["H", "The wholesaler is most likely to be by-passed when the goods are", "perishable or made to the customer's order", "cheap and in wide demand", "durable and standardised", "imported in very small lots", "A short channel avoids delay."],
          ["H", "The strongest argument against the elimination of the wholesaler is that", "his functions would still have to be carried out by someone", "he sells directly to consumers", "he produces the goods", "he lowers the quality of goods", "Storage, finance and risk bearing cannot be avoided."],
          ["H", "By holding stocks when goods are plentiful and releasing them when they are scarce, the wholesaler helps to", "stabilise prices", "increase hoarding", "reduce production", "abolish retailing", "Supply to the market is evened out."],
        ],
      },
      {
        week: 2,
        title: "Documents and terms of payment in home trade",
        subtopics: ["Documents used in the purchase and sale of goods", "Trade discount and cash discount", "Terms of payment and delivery", "Abbreviations used in trade"],
        objectives: ["Describe the documents used in home trade in their order", "Distinguish and calculate trade and cash discounts", "Explain common terms of payment and delivery", "Interpret common trade abbreviations"],
        lesson: {
          title: "Paperwork of Buying and Selling",
          summary: "Describe the documents, discounts and terms used in home trade.",
          minutes: 40,
          notes: `## Documents in the order they are used
| Document | Sent by | Purpose |
|---|---|---|
| **letter of inquiry** | buyer | asks about goods, prices and terms |
| **quotation** | seller | states the price and terms at which the seller will supply |
| **catalogue** | seller | an illustrated booklet describing the goods |
| **price list** | seller | lists current prices |
| **order** | buyer | a written request to supply specified goods; acceptance makes a contract |
| **invoice** | seller | sent when goods are sold on credit: description, quantity, unit price, trade discount, total and terms of payment |
| **pro-forma invoice** | seller | sent **before** the goods — as a quotation, when payment is required in advance, or for goods on approval |
| **advice note** | seller | tells the buyer that the goods have been dispatched |
| **delivery note** | seller | accompanies the goods; the buyer signs it as proof of receipt |
| **consignment note (waybill)** | seller / carrier | contract with the transporter; details of goods carried |
| **debit note** | seller | corrects an **undercharge** on the invoice — increases the amount owed |
| **credit note** | seller | corrects an **overcharge**, or allows for **goods returned**, damaged or short-delivered — reduces the amount owed; usually printed in red |
| **statement of account** | seller | a periodic summary of all transactions with the buyer, showing the **balance owed** |
| **receipt** | seller | acknowledges payment |

### Contents of an invoice
names and addresses of seller and buyer; date; invoice and order numbers; quantity, description and unit price; trade discount; total; terms of payment; and often **E & O.E.** (errors and omissions excepted) — the seller reserves the right to correct mistakes.

## Discounts
### Trade discount
An **allowance off the list (catalogue) price** given by the seller to a trader.
- to give the trader a **profit margin**
- to encourage **bulk buying**
- to allow prices to be changed without reprinting catalogues
It is deducted **on the invoice**.
### Cash discount
An allowance to encourage **prompt payment** — for example "5% one month" means 5% off if paid within one month.
### Quantity discount
For buying a large quantity; **seasonal discount** for buying out of season.

### Worked example
Goods with a list price of ₦50,000 are subject to a **trade discount of 20%** and a **cash discount of 5%** for prompt payment.
- trade discount: 20% × 50,000 = ₦10,000; invoice price = **₦40,000**
- cash discount: 5% × 40,000 = ₦2,000; amount paid = **₦38,000**
The cash discount is calculated on the price **after** trade discount.

## Terms of payment
- **cash with order (CWO)** — payment sent with the order
- **cash on delivery (COD)** — payment when the goods are delivered
- **spot cash** — immediate payment on purchase
- **prompt cash** — payment within a few days
- **net** or "terms net" — no cash discount allowed
- "**2½% one month**" — a cash discount of 2½% if paid within one month
- **credit** — payment at a later agreed date; **monthly account**
- **hire purchase** and instalment credit
- payment by cheque, bank transfer or card

## Terms of delivery
- **ex-works (ex-warehouse)** — the price covers the goods at the seller's premises only; the buyer pays all carriage
- **carriage paid** — the seller pays the carriage
- **carriage forward** — the buyer pays the carriage on delivery
- **free on rail (FOR)** — the price includes delivery to the railway station and loading
- **franco (free delivered)** — the price includes all costs to the buyer's premises

## Common abbreviations
| Abbreviation | Meaning |
|---|---|
| **E & O.E.** | errors and omissions excepted |
| **COD** | cash on delivery |
| **CWO** | cash with order |
| **c/f; b/f** | carried forward; brought forward |
| **C/N; D/N** | credit note; debit note |
| **@** | at (the rate of) |
| **a/c** | account |
| **p.a.** | per annum |
| **IOU** | "I owe you" — a written acknowledgement of a debt |

## Importance of documents
they are **evidence** of the transaction; they prevent disputes; they are the source for bookkeeping entries; they help in control and audit.`,
          examples: `**Example 1.** Which document is sent to correct an overcharge? *Answer:* A **credit note**.

**Example 2.** List price ₦120,000; trade discount 25%. Find the invoice price. *Solution:* 120,000 − 30,000 = **₦90,000**.

**Example 3.** What does "carriage forward" mean? *Answer:* The **buyer pays** the cost of carriage.`,
        },
        questions: [
          ["E", "The document sent by a buyer asking a seller about goods and prices is", "a letter of inquiry", "an invoice", "a receipt", "a credit note", "It is the first document in a transaction."],
          ["E", "The document that acknowledges the receipt of payment is the", "receipt", "order", "quotation", "advice note", "It is issued by the seller."],
          ["E", "An allowance given to a buyer to encourage prompt payment is", "cash discount", "trade discount", "quantity discount", "commission", "It is taken only if payment is made in time."],
          ["M", "The document sent by a seller to correct an undercharge on an invoice is a", "debit note", "credit note", "delivery note", "receipt", "It increases the amount owed by the buyer."],
          ["M", "A periodic summary sent by a seller showing all transactions with a customer and the balance owed is a", "statement of account", "pro-forma invoice", "price list", "catalogue", "It reminds the customer to pay."],
          ["M", "The abbreviation 'E & O.E.' on an invoice means", "errors and omissions excepted", "export and overseas enterprise", "each and other expenses", "early or on-time entry", "The seller may correct any mistake found later."],
          ["M", "The term 'carriage forward' means that the cost of transport is paid by", "the buyer", "the seller", "the carrier", "the government", "It is paid when the goods are delivered."],
          ["H", "Goods listed at ₦50,000 are sold subject to a trade discount of 20%. The invoice price is", "₦40,000", "₦10,000", "₦60,000", "₦45,000", "₦10,000 is deducted."],
          ["H", "Goods invoiced at ₦40,000 after trade discount are subject to a cash discount of 5% for prompt payment. The amount paid is", "₦38,000", "₦35,000", "₦42,000", "₦39,500", "5% of ₦40,000 is ₦2,000."],
          ["H", "A pro-forma invoice differs from an ordinary invoice in that it is", "sent before the goods, for information or when payment is required in advance", "sent only after payment has been made", "used to correct an overcharge", "issued by the buyer", "It is not a demand for payment for goods already supplied."],
        ],
      },
      {
        week: 3,
        title: "Foreign trade",
        subtopics: ["Meaning, types and reasons for foreign trade", "Differences between home trade and foreign trade", "Balance of trade and balance of payments", "Barriers to foreign trade and tools of protection"],
        objectives: ["Explain foreign trade, its branches and the reasons for it", "Distinguish home trade from foreign trade", "Explain and calculate the balance of trade", "Describe the barriers to foreign trade and the tools of trade protection"],
        lesson: {
          title: "Trade Between Countries",
          summary: "Explain why countries trade, the balance of trade and the barriers to foreign trade.",
          minutes: 40,
          notes: `## Foreign trade
The **exchange of goods and services between countries**.
- **import trade** — buying goods from other countries
- **export trade** — selling goods to other countries
- **entrepôt trade** — importing goods and **re-exporting** them
- **visible trade** — trade in **goods**; **invisible trade** — trade in **services** (shipping, insurance, banking, tourism)
- **bilateral trade** — between two countries; **multilateral trade** — among many

## Reasons for foreign trade
- **uneven distribution of natural resources**
- differences in **climate and soil**
- differences in **skills and technology**
- differences in the **cost of production**
- the desire for **variety** and a higher standard of living
- to dispose of **surplus** production and widen markets
- to earn **foreign exchange**
- **specialisation** — each country concentrates on what it produces best (comparative cost advantage)

## Advantages
goods that cannot be produced at home become available; specialisation and economies of scale; wider markets; foreign exchange and revenue; friendship among nations; transfer of technology; employment; competition improves quality.

## Disadvantages
**dumping**; collapse of **infant industries**; over-dependence on other countries; import of harmful goods; imported inflation; balance of payments problems; unemployment in uncompetitive industries.

## Home trade and foreign trade compared
| Home trade | Foreign trade |
|---|---|
| within one country | between countries |
| one **currency** | **different currencies** — foreign exchange needed |
| few documents | **many documents** |
| no customs duties | **tariffs** and other barriers |
| one language and legal system | different languages, laws and customs |
| short distances; lower transport cost | long distances; high transport and insurance costs |
| lower risk | higher risks — of loss, non-payment, exchange rate changes |
| payment is simple | payment needs banks, letters of credit and bills of exchange |

## Balance of trade
The **difference between the value of a country's visible exports and visible imports** over a period.
- **favourable (surplus)** — exports exceed imports
- **unfavourable (adverse, deficit)** — imports exceed exports
*Example:* visible exports ₦900 million; visible imports ₦750 million: balance of trade = **+₦150 million** — favourable.

## Balance of payments
A **record of all the financial transactions between a country and the rest of the world** in a year — covering visible **and** invisible trade and capital movements. It has a **current account**, a **capital account** and a monetary (official settlements) account.

## Terms of trade
The rate at which a country's exports exchange for its imports — the ratio of export prices to import prices.

## Barriers to foreign trade
- **language** differences
- **currency** differences and exchange control
- **distance** — high transport cost and delay
- **tariffs**, quotas and embargoes
- differences in **weights, measures and standards**
- differences in **laws** and business practices
- **political instability** and wars
- many **documents** and procedures
- risks of non-payment and of loss in transit
- cultural and religious differences

## Tools of trade protection
- **tariffs (customs duties)** — taxes on imports (import duties) or exports
- **quotas** — limits on the quantity that may be imported
- **embargo** — a complete ban
- **import licences**
- **exchange control** — restricting foreign currency
- **devaluation** of the currency
- **subsidies** to local producers
- **preferential duties** — lower rates for friendly countries

### Reasons for protection
to protect infant industries; to prevent dumping; to raise revenue; to correct an adverse balance of payments; to protect employment; to discourage harmful goods; for strategic reasons.

## Customs and excise duties
- **import duties** — on goods entering the country
- **export duties** — on goods leaving
- **excise duties** — on certain goods **made within** the country
Duties may be **specific** (a fixed amount per unit) or **ad valorem** (a percentage of value).`,
          examples: `**Example 1.** Exports ₦420 million; imports ₦500 million. Find the balance of trade. *Solution:* **−₦80 million** — unfavourable.

**Example 2.** Give three differences between home trade and foreign trade. *Answer:* Foreign trade involves **different currencies**, **customs duties** and **more documents**.

**Example 3.** What is an embargo? *Answer:* A **complete ban** on the import or export of certain goods.`,
        },
        questions: [
          ["E", "The buying of goods from other countries is", "import trade", "export trade", "home trade", "retail trade", "Export trade is selling to other countries."],
          ["E", "Trade in services such as shipping, insurance and tourism between countries is", "invisible trade", "visible trade", "entrepôt trade", "barter trade", "Visible trade is trade in goods."],
          ["E", "A tax imposed on goods imported into a country is", "a tariff", "a quota", "an embargo", "a subsidy", "It is also called an import duty."],
          ["M", "A main reason for foreign trade is", "the uneven distribution of natural resources among countries", "the use of the same currency by all countries", "the absence of transport", "the similarity of all countries' products", "No country has everything it needs."],
          ["M", "The difference between the value of a country's visible exports and visible imports is its", "balance of trade", "balance of payments", "terms of trade", "exchange rate", "It concerns goods only."],
          ["M", "A limit on the quantity of a commodity that may be imported in a period is", "a quota", "a tariff", "an excise duty", "a subsidy", "It restricts volume rather than taxing value."],
          ["M", "A difference between home trade and foreign trade is that foreign trade involves", "the use of different currencies", "buying and selling", "the use of transport", "the earning of profit", "Foreign exchange is needed."],
          ["H", "A country has visible exports of ₦900 million and visible imports of ₦750 million. Its balance of trade is", "favourable by ₦150 million", "unfavourable by ₦150 million", "favourable by ₦1,650 million", "in balance", "Exports exceed imports."],
          ["H", "The selling of goods in a foreign market at prices below their cost of production is", "dumping", "smuggling", "re-exporting", "hoarding", "It can destroy local industries."],
          ["H", "A duty charged as a percentage of the value of imported goods is described as", "ad valorem", "specific", "excise", "preferential in all cases", "A specific duty is a fixed amount per unit."],
        ],
      },
      {
        week: 4,
        title: "Procedures and documents in foreign trade",
        subtopics: ["Procedure for exporting and importing", "Documents used in foreign trade", "Price quotations in foreign trade", "Ports, customs and export promotion"],
        objectives: ["Outline the procedure for exporting and importing goods", "Describe the documents used in foreign trade", "Explain the price quotations used in foreign trade", "Describe the roles of the ports authority, customs and export promotion agencies"],
        lesson: {
          title: "Importing and Exporting in Practice",
          summary: "Describe the procedures, documents and price terms used in foreign trade.",
          minutes: 40,
          notes: `## Export procedure
1. the importer sends an **inquiry**; the exporter replies with a quotation or pro-forma invoice
2. the importer places an **indent** (order) and arranges payment, often by a **letter of credit**
3. the exporter obtains any **export licence**, packs and marks the goods
4. he books **shipping space** and insures the goods
5. the goods are sent to the port; **customs** formalities are completed
6. the goods are loaded; the ship's master issues a **bill of lading**
7. the exporter sends the shipping documents (bill of lading, invoice, insurance certificate) through his bank
8. the importer pays or accepts a bill of exchange and receives the documents

## Import procedure
1. obtain any import permit and foreign exchange (in Nigeria, through a bank using **Form M**)
2. place an **indent**; open a **letter of credit**
3. receive the shipping documents
4. on arrival, a **clearing agent** presents the documents to customs
5. pay **customs duty** and port charges
6. obtain release; transport the goods to the warehouse

## Agents in foreign trade
- **export agents** and **import agents** — act for a commission
- **clearing and forwarding agents (freight forwarders)** — handle documents, customs clearance and transport
- **confirming houses** — buy on behalf of overseas importers and guarantee payment
- **brokers**; **del credere agents**; shipping agents

## Documents
| Document | Purpose |
|---|---|
| **indent** | an **order** for goods from abroad, sent by the importer; **open** (the agent chooses the supplier) or **closed** (the supplier is named) |
| **bill of lading** | issued by the shipping company: a **receipt** for goods shipped, **evidence of the contract of carriage** and a **document of title** — the holder can claim the goods |
| **airway bill** | the equivalent for air freight (not a document of title) |
| **commercial invoice** | details of goods, prices and terms |
| **consular invoice** | an invoice certified by the consul of the importing country, to prevent under-invoicing and help assess duty |
| **certificate of origin** | states the country where the goods were produced — used for preferential duties |
| **certificate of insurance** | evidence that the goods are insured |
| **letter of credit** | the importer's bank **guarantees payment** to the exporter on presentation of the documents; **irrevocable** and **confirmed** credits are safest |
| **bill of exchange** | the exporter's written order to the importer to pay; **documentary bill** when attached to the shipping documents |
| **ship's manifest** | a list of all cargo on board |
| **freight note** | the shipping company's bill for carriage |
| **dock (mate's) receipt** | acknowledges goods received at the dock for loading |
| **customs bill of entry** | details of imported goods declared to customs, for assessing duty |
| **bill of sight** | used when the importer lacks full details; goods are inspected by customs |
| **export / import licence** | government permission |
| **charter party** | the contract for hiring a whole ship |
| **shipping note; calling forward notice** | instructions for delivering goods to the port |
| **weight note; certificate of inspection** | weight and quality of goods |

## Price quotations
| Term | Price covers |
|---|---|
| **loco (ex-works, ex-warehouse)** | the goods at the seller's premises only |
| **FOR (free on rail)** | goods delivered to and loaded on the railway |
| **FAS (free alongside ship)** | goods delivered to the quay beside the ship |
| **FOB (free on board)** | all costs until the goods are **loaded on the ship** |
| **C & F (cost and freight)** | FOB plus **freight** to the port of destination |
| **CIF (cost, insurance and freight)** | cost of goods plus **insurance** and **freight** to the port of destination |
| **landed** | CIF plus unloading and landing charges |
| **in bond** | landed and placed in a bonded warehouse; duty not yet paid |
| **duty paid** | also includes customs duty |
| **franco (free delivered)** | all costs to the importer's warehouse |
*Example:* FOB price ₦500,000; freight ₦60,000; insurance ₦15,000: **CIF price = ₦575,000**.

## Means of payment
letter of credit; bill of exchange; bank draft; telegraphic or electronic transfer (SWIFT); open account; cash with order.

## The ports authority
The **Nigerian Ports Authority (NPA)** provides and maintains **docks, wharves and harbours**; supplies cranes, **warehouses** and transit sheds; provides **pilotage** and towage; dredges channels and maintains lights and buoys; collects port dues.

## Customs and excise
The **Nigeria Customs Service** collects **import, export and excise duties**; prevents **smuggling**; enforces bans and licences; keeps **trade statistics**; supervises **bonded warehouses**; examines goods and documents.

## Bonded warehouse
A warehouse where **imported goods are kept under customs control until the duty is paid**. Goods may be sold or re-exported while in bond; duty is paid only when they are taken out for home use.

## Export promotion
The **Nigerian Export Promotion Council** and the **Nigerian Export-Import Bank (NEXIM)** give information, incentives, credit and guarantees; export processing zones and trade fairs also help.`,
          examples: `**Example 1.** State three functions of a bill of lading. *Answer:* It is a **receipt** for the goods, **evidence of the contract of carriage** and a **document of title**.

**Example 2.** FOB ₦2,000,000; freight ₦250,000; insurance ₦50,000. Find the CIF price. *Solution:* **₦2,300,000**.

**Example 3.** What is a bonded warehouse? *Answer:* A warehouse where imported goods are **held under customs control until duty is paid**.`,
        },
        questions: [
          ["E", "An order for goods sent by an importer to a supplier or agent abroad is", "an indent", "a manifest", "a consular invoice", "a freight note", "It may be open or closed."],
          ["E", "The document issued by a shipping company as a receipt for goods and a document of title is the", "bill of lading", "certificate of origin", "bill of entry", "charter party", "Its holder can claim the goods."],
          ["E", "The document that shows the country in which goods were produced is the", "certificate of origin", "certificate of insurance", "ship's manifest", "dock receipt", "It is used in applying preferential duties."],
          ["M", "A price quotation that covers all costs until the goods are loaded on the ship is", "FOB", "CIF", "loco", "franco", "FOB means free on board."],
          ["M", "The price quotation that covers the cost of the goods, insurance and freight to the port of destination is", "CIF", "FOB", "FAS", "ex-works", "The buyer pays landing charges and duty."],
          ["M", "An undertaking by an importer's bank to pay the exporter on presentation of the shipping documents is", "a letter of credit", "a bill of sight", "a ship's manifest", "an indent", "It reduces the exporter's risk of non-payment."],
          ["M", "A warehouse in which imported goods are kept until customs duty is paid is a", "bonded warehouse", "wholesaler's warehouse", "cold store", "transit shed for exports only", "It is under the control of the customs authorities."],
          ["H", "The FOB price of goods is ₦500,000, freight is ₦60,000 and insurance ₦15,000. The CIF price is", "₦575,000", "₦560,000", "₦515,000", "₦425,000", "Freight and insurance are added to the FOB price."],
          ["H", "An invoice certified by the consul of the importing country in the exporter's country is a", "consular invoice", "pro-forma invoice", "commercial invoice", "freight note", "It helps customs to check values and assess duty."],
          ["H", "A function of the Nigerian Ports Authority is to", "provide and maintain docks, wharves and harbour facilities", "collect import duties", "issue letters of credit", "insure cargo", "Duties are collected by the customs service."],
        ],
      },
      {
        week: 5,
        title: "Business units: sole proprietorship and partnership",
        subtopics: ["Sole proprietorship: features, merits and demerits", "Partnership: features and formation", "Types of partner and partnership", "Dissolution and sources of capital"],
        objectives: ["Describe the sole proprietorship with its advantages and disadvantages", "Describe the features and formation of a partnership", "Distinguish the types of partner and partnership", "State the causes of dissolution and the sources of capital of both units"],
        lesson: {
          title: "One-Man Businesses and Partnerships",
          summary: "Describe the sole proprietorship and the partnership.",
          minutes: 40,
          notes: `## Business units
A **business unit** is an organisation set up to produce or distribute goods and services, usually for profit. Units differ in **ownership, capital, control, liability and continuity**.

## Sole proprietorship (sole trader, one-man business)
A business **owned, financed and controlled by one person**.
### Features
- one owner, who provides the **capital** and takes all **decisions**
- the owner bears all **risks** and takes all the **profit**
- **unlimited liability**
- no separate legal existence from the owner
- small in size; easy to form
### Sources of capital
personal savings; loans from friends, relatives and banks; **trade credit**; ploughed-back profit; grants; hire purchase.
### Advantages
- **easy to establish** — few formalities, little capital
- **quick decisions**
- the owner **keeps all the profit** — strong incentive
- **privacy** — accounts are not published
- **close contact** with customers and employees
- **flexible** — easy to change the line of business
- the owner is his own boss
### Disadvantages
- **unlimited liability** — private property may be taken to pay business debts
- **limited capital** — expansion is difficult
- **lack of continuity** — illness or death may end the business
- the owner bears all losses and all the work — long hours
- limited specialisation and managerial skill
- cannot enjoy economies of scale

## Partnership
The relationship between **two to twenty persons carrying on a business in common with a view to making profit** (the maximum is ten for banking partnerships; professional firms may be exempt).
### Features
- **two to twenty** members
- capital contributed by the partners
- **unlimited liability** of general partners, who are **jointly and severally liable** for the firm's debts
- each partner is an **agent** of the firm — his acts bind the others
- no separate legal personality
- profits shared as agreed
### Formation
By agreement — oral, implied or, best, written in a **partnership deed (articles of partnership)**, containing:
the name of the firm and of the partners; the nature and place of business; the **capital** of each; the **ratio for sharing profits and losses**; **interest on capital and drawings**; **salaries**; duties and powers; how accounts are kept; admission and retirement; dissolution; arbitration of disputes.
Where there is no agreement, the **Partnership Act of 1890** applies: profits and losses shared **equally**; no interest on capital; no salaries; 5% interest on partners' loans.

### Types of partner
- **active (general)** — takes part in management; unlimited liability
- **sleeping (dormant)** — contributes capital and shares profit but takes no part in management
- **limited** — liability limited to the capital contributed; may not manage
- **nominal (quasi)** — lends only his name and reputation
- **secret** partner — active, but not known to the public

### Types of partnership
- **ordinary (general) partnership** — all partners have unlimited liability
- **limited partnership** — at least one general partner with unlimited liability, and one or more limited partners

### Advantages
- **more capital** than a sole trader
- **shared responsibilities** and risks
- **specialisation** — partners bring different skills
- **better decisions** from joint consultation
- greater continuity; privacy; easy to form
### Disadvantages
- **unlimited liability**
- **disagreements** may ruin the business
- **slow decisions**
- each partner is bound by the acts of the others
- limited to twenty members — capital is still restricted
- **lack of continuity** — death or withdrawal of a partner may dissolve the firm
- profits must be shared

### Dissolution
A partnership ends by: **agreement**; expiry of the agreed period or completion of the venture; **death, bankruptcy or insanity** of a partner; the business becoming **illegal**; a **court order**; notice by a partner.

## Sole proprietorship and partnership compared
| | Sole proprietorship | Partnership |
|---|---|---|
| owners | one | 2–20 |
| capital | owner's | partners' contributions |
| decisions | owner alone | jointly |
| liability | unlimited | unlimited (except limited partners) |
| profit | all to owner | shared |
| continuity | ends with the owner | may end with any partner |`,
          examples: `**Example 1.** What does unlimited liability mean? *Answer:* The owner's **private property can be used to pay the debts** of the business.

**Example 2.** State four contents of a partnership deed. *Answer:* **Capital of each partner, profit-sharing ratio, interest on capital and partners' salaries**.

**Example 3.** Who is a sleeping partner? *Answer:* One who **contributes capital but takes no part in management**.`,
        },
        questions: [
          ["E", "A business owned and controlled by one person is a", "sole proprietorship", "partnership", "public corporation", "co-operative society", "The owner provides the capital and takes all the profit."],
          ["E", "The maximum number of members in an ordinary partnership is", "twenty", "seven", "fifty", "two", "The minimum is two."],
          ["E", "The written agreement that governs a partnership is the", "partnership deed", "prospectus", "memorandum of association", "bill of lading", "It is also called the articles of partnership."],
          ["M", "A major disadvantage of the sole proprietorship is", "unlimited liability", "slow decision making", "lack of privacy", "too many owners", "The owner's private property is at risk."],
          ["M", "A partner who contributes capital but takes no part in the running of the business is", "a sleeping partner", "an active partner", "a nominal partner", "a general partner", "He is also called a dormant partner."],
          ["M", "An advantage of a partnership over a sole proprietorship is that it has", "more capital and a wider range of skills", "a separate legal personality", "limited liability for all partners", "shares quoted on the stock exchange", "Several people contribute money and ideas."],
          ["M", "A partner who only lends his name to the firm, without capital or management, is", "a nominal partner", "a secret partner", "a limited partner", "an active partner", "His reputation attracts business."],
          ["H", "In the absence of a partnership agreement, profits and losses are shared", "equally", "in the ratio of capital", "by seniority", "in the ratio of sales made", "This is laid down by the Partnership Act."],
          ["H", "A limited partnership must have", "at least one general partner with unlimited liability", "only limited partners", "more than twenty partners", "shares sold to the public", "Limited partners may not take part in management."],
          ["H", "The statement that partners are 'jointly and severally liable' means that", "each partner may be made to pay the whole of the firm's debts", "partners owe nothing beyond their capital", "only the senior partner pays debts", "debts are paid by the government", "Creditors can sue the partners together or individually."],
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
        title: "Business units: limited liability companies",
        subtopics: ["Features of a company", "Private and public companies", "Formation of a company", "Shares, debentures and company meetings"],
        objectives: ["State the features of a limited liability company", "Distinguish private from public companies", "Describe the procedure and documents for forming a company", "Distinguish shares from debentures and describe company meetings"],
        lesson: {
          title: "Companies",
          summary: "Describe the features, formation, capital and control of limited liability companies.",
          minutes: 40,
          notes: `## Limited liability company (joint-stock company)
An association of persons who contribute capital, in the form of **shares**, to carry on a business; it is **registered by law as a separate legal person**. In Nigeria companies are registered with the **Corporate Affairs Commission (CAC)** under the **Companies and Allied Matters Act**.

## Features
- **separate legal entity** — distinct from its members: it can own property, sue and be sued
- **limited liability** — members can lose only what they invested
- **perpetual existence** — it survives the death or withdrawal of members
- capital divided into **shares**; owned by **shareholders**
- managed by a **board of directors** elected by the shareholders
- formation is governed by law; accounts must be **audited**

## Private and public companies
| | Private limited company (Ltd) | Public limited company (Plc) |
|---|---|---|
| members | limited — up to **50** | no maximum |
| shares | **not offered to the public**; transfer restricted | **offered to the public**; freely transferable |
| stock exchange | not quoted | may be quoted |
| accounts | not published | **published** |
| capital | smaller | very large |
| control | owners usually manage | ownership separated from management |

## Formation
### Promoters
Those who conceive the idea and take the steps to form the company.
### Documents filed with the CAC
- **Memorandum of Association** — the charter governing the company's **relations with the outside world**: the **name** (ending in Ltd or Plc), the **registered office**, the **objects**, the **liability** of members, the **share capital**, and the subscribers (association clause)
- **Articles of Association** — the **internal rules**: issue and transfer of shares, meetings and voting, appointment and powers of directors, dividends, accounts and audit
- statement of share capital; list of directors and their consent; particulars of the secretary; notice of the registered office; declaration of compliance
### Certificates
- **Certificate of Incorporation** — proof that the company exists as a legal person; a private company may then start business
- a public company issues a **prospectus** — an invitation to the public to subscribe for shares — and traditionally needed a **certificate of trading** before commencing business

## Capital
- **authorised (nominal)** capital — the maximum the company may issue
- **issued** capital — the part offered and taken up
- **called-up** and **paid-up** capital
### Shares
- **ordinary shares (equities)** — the real owners; **voting rights**; dividends vary with profit and are paid last; greatest risk and greatest possible reward
- **preference shares** — a **fixed dividend**, paid before ordinary shares; usually no vote; may be **cumulative** (arrears carried forward), participating or redeemable
- **deferred (founders') shares** — paid last, held by promoters
### Debentures
**Loans** to the company at **fixed interest**, payable whether or not profit is made. Debenture holders are **creditors**, not owners; debentures may be secured on the company's assets.
### Other sources of finance
retained profits; bank loans and overdrafts; trade credit; hire purchase and leasing; rights and bonus issues.

## Control and meetings
- **shareholders** elect the **directors**, who appoint managers
- **statutory meeting** — held by a public company soon after formation
- **annual general meeting (AGM)** — held every year: to receive the accounts and reports, declare dividends, elect directors and appoint auditors
- **extraordinary general meeting** — for urgent business
Shareholders who cannot attend may vote by **proxy**.

## Advantages
- **large capital** from many shareholders
- **limited liability** encourages investment
- **continuity**
- **expert management**; specialisation
- economies of scale
- shares are transferable; easier borrowing
- democratic control through voting

## Disadvantages
- costly and complicated to form
- **separation of ownership from control** — managers may not act in owners' interest
- slow decisions; red tape
- **no privacy** — public companies publish their accounts
- company profits are taxed, and dividends taxed again
- impersonal relations with staff and customers
- a few large shareholders may dominate

## Winding up (liquidation)
The ending of a company's life — **voluntarily**, by the members or creditors, or **compulsorily**, by order of the court (for example when it cannot pay its debts). A **liquidator** sells the assets and pays the creditors.

## Amalgamation
- **merger** — two companies combine to form one
- **takeover (acquisition)** — one company buys control of another
- **holding company** — owns more than half the shares of a **subsidiary**
- integration: horizontal, vertical, lateral`,
          examples: `**Example 1.** State two differences between a private and a public company. *Answer:* A private company has **limited membership** and **cannot invite the public** to buy shares; a public company can.

**Example 2.** Which document sets out a company's internal rules? *Answer:* The **Articles of Association**.

**Example 3.** Distinguish a shareholder from a debenture holder. *Answer:* A **shareholder is an owner** who receives dividends; a **debenture holder is a creditor** who receives fixed interest.`,
        },
        questions: [
          ["E", "The owners of a limited liability company are called", "shareholders", "directors", "debenture holders", "promoters", "They contribute the share capital."],
          ["E", "Companies in Nigeria are registered by the", "Corporate Affairs Commission", "Central Bank of Nigeria", "Nigerian Ports Authority", "Standards Organisation of Nigeria", "It issues the certificate of incorporation."],
          ["E", "A company whose shares can be offered to the general public is a", "public limited company", "private limited company", "partnership", "sole proprietorship", "Its name ends in Plc."],
          ["M", "Limited liability means that a shareholder", "can lose only the amount he invested in the company", "is responsible for all the debts of the company", "must manage the company himself", "cannot sell his shares", "His private property is safe."],
          ["M", "The document that sets out a company's name, objects and share capital is the", "Memorandum of Association", "Articles of Association", "prospectus", "certificate of trading", "It governs the company's relations with outsiders."],
          ["M", "Shares that carry a fixed rate of dividend are", "preference shares", "ordinary shares", "deferred shares", "bonus shares", "They are paid before ordinary shares."],
          ["M", "The meeting at which shareholders receive the accounts and elect directors each year is the", "annual general meeting", "statutory meeting", "board meeting", "creditors' meeting", "Dividends are also declared there."],
          ["H", "A document issued by a public company inviting the public to subscribe for its shares is a", "prospectus", "memorandum", "debenture", "proxy", "It gives details of the company and the offer."],
          ["H", "A disadvantage of the public limited company is", "the separation of ownership from control", "unlimited liability of members", "lack of continuity", "limited capital", "Managers who are not owners run the business."],
          ["H", "Debenture holders differ from shareholders in that debenture holders are", "creditors who receive fixed interest", "owners who receive dividends", "directors of the company", "entitled to vote at meetings", "Interest must be paid whether or not there is profit."],
        ],
      },
      {
        week: 2,
        title: "Co-operative societies and public enterprises",
        subtopics: ["Meaning and principles of co-operation", "Types of co-operative society", "Public corporations", "Advantages and problems of co-operatives and public enterprises"],
        objectives: ["Explain co-operative societies and their principles", "Describe the types of co-operative society", "Describe the features of public corporations", "Assess the advantages and problems of co-operatives and public enterprises"],
        lesson: {
          title: "Co-operatives and Government-Owned Businesses",
          summary: "Describe co-operative societies and public enterprises, their features, merits and problems.",
          minutes: 40,
          notes: `## Co-operative societies
A **voluntary association of persons who pool their resources to promote their common economic interests** on a basis of **self-help and mutual aid**, rather than to maximise profit.
The modern movement began with the **Rochdale Pioneers** in England in **1844**.

### Principles
- **open and voluntary membership**
- **democratic control** — **one member, one vote**, whatever the shareholding
- **limited interest on capital**
- **surplus (dividend) shared in proportion to patronage** — how much each member bought or supplied
- political and religious **neutrality**
- **cash trading**
- **education** of members
- co-operation among co-operatives

### Features
registered with the Registrar (Director) of Co-operatives; limited liability; managed by an elected committee; capital from members' shares, savings and entrance fees.

### Types
| Type | Purpose |
|---|---|
| **consumers' (retail) co-operative** | members buy goods in bulk and sell to themselves at fair prices; profit returned as dividend on purchases |
| **producers' co-operative** | farmers, fishermen or craftsmen pool resources to produce and market goods and buy inputs |
| **wholesale co-operative** | formed by retail societies to buy in bulk and supply them |
| **thrift and credit (credit and loan) society** | members save regularly and obtain cheap loans |
| **marketing co-operative** | sells members' produce collectively |
| **multipurpose society** | combines several functions |
| housing, transport and consumers' societies | special needs |

### Advantages
- goods at **lower prices**; no exploitation by middlemen
- encourages **saving** and gives **cheap loans**
- **democratic** management
- members share the surplus
- bulk buying and selling; better prices for producers
- education and training of members
- government support — loans, tax relief

### Problems
- **inadequate capital**
- **poor management** — committee members lack business training
- **embezzlement** of funds
- members' **disloyalty** — buying elsewhere
- illiteracy; political interference
- cash-only trading drives away customers needing credit
- limited range of goods

## Public enterprises (public corporations)
Business organisations **established, owned and financed by the government**, usually by an **Act of Parliament or decree**, to provide **essential services**.
*Examples (past and present):* the Nigerian Railway Corporation; the Nigerian Ports Authority; the Federal Radio Corporation; the Nigerian Television Authority; the former NEPA and NITEL; water boards.

### Features
- **owned and financed** by the government; capital from **grants, subventions and loans**
- set up by **statute**
- run by a **board of directors appointed by the government**
- aim: **service** to the public rather than profit
- often **monopolies**
- a separate legal entity; accounts audited and reported to the legislature
- answerable to a minister

### Reasons for government ownership
- to provide **essential services** at prices people can afford
- projects needing **capital too large** for private investors
- to prevent **private monopoly** and exploitation
- **strategic and security** reasons
- to create employment and spread development
- to control key sectors of the economy; to raise revenue

### Advantages
essential services provided cheaply; large capital available; no exploitation; uniform services nationwide; employment; profits go to the public purse; continuity.

### Disadvantages
- **inefficiency** — little competition, no profit motive
- **political interference** in appointments and policy
- **bureaucracy (red tape)** and slow decisions
- **corruption** and waste
- losses borne by **taxpayers**
- poor service

### Public corporation and public company compared
| Public corporation | Public limited company |
|---|---|
| owned by the **government** | owned by **shareholders** |
| set up by statute | registered under company law |
| capital from government | capital from sale of shares |
| aims at service | aims at profit |
| board appointed by government | board elected by shareholders |

## Nationalisation, privatisation and commercialisation
- **nationalisation** — the government takes over private enterprises
- **privatisation** — selling public enterprises to private owners
- **commercialisation** — running public enterprises on profit-making lines while government keeps ownership

## Joint ventures between government and private investors
Some enterprises are jointly owned — common in oil and gas.`,
          examples: `**Example 1.** State the voting principle of co-operative societies. *Answer:* **One member, one vote**.

**Example 2.** Give two reasons why governments set up public corporations. *Answer:* To provide **essential services** and to undertake projects needing **very large capital**.

**Example 3.** How is the surplus of a consumers' co-operative shared? *Answer:* **In proportion to members' purchases** (patronage).`,
        },
        questions: [
          ["E", "An association of people who pool resources to promote their common economic interest is", "a co-operative society", "a public corporation", "a partnership of two", "a holding company", "It is based on self-help and mutual aid."],
          ["E", "The voting principle in a co-operative society is", "one member, one vote", "one share, one vote", "votes according to age", "votes for directors only", "Control is democratic."],
          ["E", "A business organisation owned and financed by the government is a", "public corporation", "public limited company", "private company", "partnership", "It is set up by an Act of Parliament."],
          ["M", "A co-operative society whose members save regularly and obtain loans at low interest is a", "thrift and credit society", "consumers' society", "producers' society", "wholesale society", "It encourages saving."],
          ["M", "In a consumers' co-operative society, the surplus is shared among members according to", "the value of their purchases", "the number of their shares", "their length of membership", "their ages", "This is the principle of dividend on patronage."],
          ["M", "The main aim of a public corporation is to", "provide essential services to the public", "maximise profit for shareholders", "pay dividends to members", "avoid government control", "Profit is not its chief objective."],
          ["M", "The board of directors of a public corporation is appointed by", "the government", "the shareholders", "the customers", "the trade unions", "The corporation answers to a minister."],
          ["H", "A common problem of co-operative societies in Nigeria is", "inadequate capital and poor management", "excessive capital", "too few members allowed by law", "the payment of high dividends on capital", "Committee members often lack business training."],
          ["H", "A public corporation differs from a public limited company in that a public corporation", "is owned by the government and established by statute", "is owned by shareholders", "sells shares on the stock exchange", "is registered under company law only", "A public company belongs to private shareholders."],
          ["H", "The sale of government-owned enterprises to private individuals and organisations is", "privatisation", "nationalisation", "commercialisation", "indigenisation", "Ownership passes to the private sector."],
        ],
      },
      {
        week: 3,
        title: "Trade associations and chambers of commerce",
        subtopics: ["Trade associations", "Chambers of commerce", "Employers' associations and consumers' associations", "Cartels and other business combinations"],
        objectives: ["Explain trade associations and their functions", "Explain chambers of commerce and their functions", "Describe employers' associations and consumers' associations", "Describe cartels and other forms of business combination"],
        lesson: {
          title: "Organisations That Serve Business",
          summary: "Describe trade associations, chambers of commerce and business combinations.",
          minutes: 40,
          notes: `## Trade associations
An association of **firms or persons engaged in the same trade or line of business**, formed to protect and promote their common interests.
*Examples:* the **Manufacturers Association of Nigeria (MAN)**; the Nigerian Association of Road Transport Owners; the Association of Nigerian Licensed Customs Agents; market traders' associations; the bankers' committee; the pharmaceutical manufacturers' group.

### Functions
- **protect members' interests** and speak for the trade to the government
- **collect and share information** — on prices, markets, new methods
- settle **disputes** among members
- undertake **research** for the benefit of members
- **advertise** the product of the trade collectively
- set **standards** of quality and conduct
- sometimes regulate **prices and output**
- provide education, training and legal advice
- negotiate with trade unions

## Chambers of commerce
An association of **business people of all kinds — traders, manufacturers, bankers, transporters — in a town or area**, formed to promote and protect commerce and industry there.
*Examples:* the **Lagos Chamber of Commerce and Industry** (founded 1888); the Kano, Port Harcourt and Aba chambers; the national umbrella body, the **Nigerian Association of Chambers of Commerce, Industry, Mines and Agriculture (NACCIMA)**.

### Functions
- **promote trade and industry** in the area
- **advise the government** on commercial matters and comment on proposed laws
- provide **information** — trade statistics, markets, sources of supply
- organise **trade fairs and exhibitions**
- **arbitrate** in commercial disputes
- issue **certificates of origin** and other trade documents
- promote **foreign trade** — receiving trade missions, linking members with overseas buyers
- provide **education and training** — courses, seminars, examinations
- publish journals and directories

### Trade association and chamber of commerce compared
| Trade association | Chamber of commerce |
|---|---|
| members are in the **same trade** | members come from **different trades** |
| concerned with one industry | concerned with business in an **area** |
| often national | usually based in a town or region |

## Employers' associations
Organisations of employers formed to deal jointly with **trade unions** and government on labour matters — the **Nigeria Employers' Consultative Association (NECA)**. They negotiate wages and conditions, advise members and settle disputes.

## Consumers' associations
Voluntary bodies formed to **protect consumers** against exploitation — high prices, fake and substandard goods, short weight, false advertising.
### Functions
educate consumers on their rights; investigate complaints; test and compare products; press for consumer-protection laws; boycott offending traders.

## Professional associations
Bodies of members of a profession — accountants, lawyers, doctors, engineers — that regulate entry, standards and conduct.

## Business combinations
Firms may join together to reduce competition and gain economies.
- **cartel** — an association of independent producers who agree to **control output and prices** in order to maximise profit — OPEC is a cartel of oil-producing countries
- **trust** — firms place their shares in the hands of trustees who run them as one
- **syndicate** — firms selling through a joint agency
- **consortium** — firms joining for a large project
- **holding company** — a company that controls others (**subsidiaries**) by owning most of their shares
- **merger (amalgamation)** — two or more firms unite into one
- **takeover (acquisition)** — one firm buys another

### Types of integration
- **horizontal** — firms at the **same stage** of production: two breweries
- **vertical** — firms at **different stages**: **backward** (towards raw materials — a brewery buying a bottle factory) and **forward** (towards the market — a brewery buying hotels)
- **lateral (conglomerate)** — firms in **unrelated** lines

### Reasons for combining
economies of scale; reduced competition; control of supplies and outlets; spreading of risk; more capital; research.
### Dangers
monopoly power — higher prices and less choice; loss of jobs; inefficiency. Governments therefore regulate mergers through competition laws.

## Trade fairs and exhibitions
Events where producers display their goods to buyers — the Lagos and Kaduna International Trade Fairs. They introduce new products, win orders, allow comparison and promote exports.`,
          examples: `**Example 1.** Distinguish a trade association from a chamber of commerce. *Answer:* A **trade association** unites firms in the **same trade**; a **chamber of commerce** unites business people of **all trades in an area**.

**Example 2.** State three functions of a chamber of commerce. *Answer:* **Promoting trade, advising government and organising trade fairs**.

**Example 3.** A textile mill buys a cotton farm. What type of integration is this? *Answer:* **Backward vertical** integration.`,
        },
        questions: [
          ["E", "An association of firms engaged in the same line of business is", "a trade association", "a chamber of commerce", "a co-operative society", "a trade union", "It protects the interests of that trade."],
          ["E", "An association of business people of different trades in a town or area is", "a chamber of commerce", "a trade association", "a cartel", "a holding company", "It promotes commerce and industry in the area."],
          ["E", "The Manufacturers Association of Nigeria is an example of", "a trade association", "a chamber of commerce", "a consumers' association", "a public corporation", "Its members are all manufacturers."],
          ["M", "A function of a chamber of commerce is to", "organise trade fairs and exhibitions", "fix the wages of all workers", "collect customs duties", "issue currency", "It also advises government on commercial matters."],
          ["M", "An association of independent producers formed to control output and prices is", "a cartel", "a chamber of commerce", "a consumers' association", "a co-operative", "OPEC is an example among countries."],
          ["M", "A voluntary body formed to protect buyers against high prices and substandard goods is", "a consumers' association", "an employers' association", "a trade association", "a syndicate", "It educates consumers on their rights."],
          ["M", "A company that controls other companies by owning most of their shares is", "a holding company", "a subsidiary company", "a private company", "a partnership", "The companies it controls are subsidiaries."],
          ["H", "The merger of two firms at the same stage of production, such as two breweries, is", "horizontal integration", "vertical integration", "lateral integration", "backward integration", "They produce the same kind of goods."],
          ["H", "A brewery that acquires a chain of hotels to sell its drinks is engaged in", "forward vertical integration", "backward vertical integration", "horizontal integration", "lateral integration", "It moves towards its market."],
          ["H", "A trade association differs from a chamber of commerce in that its members", "belong to the same trade", "come from all types of business", "are consumers", "are government officials", "A chamber covers business generally in an area."],
        ],
      },
      {
        week: 4,
        title: "Business capital, turnover and profit",
        subtopics: ["Types of capital", "Turnover and rate of turnover", "Gross and net profit and their percentages", "Factors affecting turnover and profit"],
        objectives: ["Define and calculate the types of business capital", "Calculate turnover and the rate of turnover", "Calculate gross profit, net profit and their percentages", "State the factors that affect turnover and profit"],
        lesson: {
          title: "Measuring a Business",
          summary: "Calculate capital, turnover, rate of turnover and profit and explain their importance.",
          minutes: 40,
          notes: `## Capital
The money and other resources used to run a business.
### Types
- **fixed capital (fixed assets)** — durable assets kept for use, not for resale: land, buildings, machinery, vehicles, furniture
- **current (circulating) assets** — assets that change form in the course of trading: **stock**, **debtors**, **cash** at bank and in hand
- **liquid capital** — cash and assets quickly turned into cash: cash, bank balances, debtors
- **current liabilities** — debts payable within a year: **creditors**, bank overdraft, accrued expenses
- **long-term liabilities** — loans, mortgages, debentures
- **capital owned (owner's equity, net worth)** = **total assets − total liabilities**
- **capital employed** = total assets used in the business (or fixed assets + working capital)
- **working capital** = **current assets − current liabilities**
- **authorised, issued, called-up and paid-up capital** — for companies

### Worked examples
- total assets ₦500,000; total liabilities ₦180,000: **capital owned = ₦320,000**
- current assets ₦250,000; current liabilities ₦100,000: **working capital = ₦150,000**

### Importance of working capital
- to pay creditors and running expenses as they fall due
- to buy stock in bulk and take **cash discounts**
- to give **credit** to customers
- to meet emergencies and seize opportunities
A business short of working capital may fail even if it is profitable.

## Turnover
The **total net sales** of a business in a period.
**turnover = sales − returns inwards**
*Example:* sales ₦800,000; returns inwards ₦20,000: **turnover = ₦780,000**.

## Rate of turnover (stock turn)
The **number of times the average stock is sold** in a period.
**rate of turnover = cost of goods sold ÷ average stock**
**average stock = (opening stock + closing stock) ÷ 2**
*Example:* opening stock ₦40,000; closing stock ₦60,000: average stock = ₦50,000. Cost of goods sold ₦600,000: rate of turnover = **12 times** — stock is sold about once a month.
A high rate means goods sell quickly; perishable and cheap goods turn over fast, while luxury goods and furniture turn over slowly.

## Profit
- **cost of goods sold** = opening stock + purchases − closing stock
- **gross profit** = turnover − cost of goods sold
- **net profit** = gross profit − expenses

### Percentages
- **gross profit percentage (margin)** = gross profit ÷ turnover × 100
- **net profit percentage** = net profit ÷ turnover × 100
- **mark-up** = gross profit ÷ cost of goods sold × 100
*Example:* turnover ₦720,000; cost of goods sold ₦540,000; expenses ₦108,000.
- gross profit = ₦180,000; gross profit percentage = 180,000 ÷ 720,000 × 100 = **25%**
- net profit = 180,000 − 108,000 = ₦72,000; net profit percentage = **10%**
- mark-up = 180,000 ÷ 540,000 × 100 = 33⅓%

### Return on capital
net profit ÷ capital employed × 100 — the reward for investing.

## Factors affecting turnover
- the **type of goods** — necessities sell faster than luxuries
- **price** — lower prices raise sales
- **location** of the business
- **advertising** and sales promotion
- **quality** and reputation
- **credit** facilities and after-sales service
- the **season** and fashion
- competition; customers' incomes; government policy

## Ways of increasing turnover
advertising; price reductions and discounts; better service; credit; wider variety; improved quality and packaging; longer opening hours; opening branches.

## Ways of increasing profit
increase turnover; buy more cheaply (bulk discounts); reduce expenses; cut waste and pilfering; raise prices where demand allows.

## Relationship between turnover and profit
A high turnover with a low margin (supermarkets) can give as much profit as a low turnover with a high margin (jewellers).

## Importance of profit
reward for risk; source of capital for expansion; measure of efficiency; attracts investors and lenders; provides tax revenue.`,
          examples: `**Example 1.** Assets ₦900,000; liabilities ₦350,000. Find the capital owned. *Solution:* **₦550,000**.

**Example 2.** Opening stock ₦30,000; closing stock ₦50,000; cost of goods sold ₦320,000. Find the rate of turnover. *Solution:* average stock ₦40,000; **8 times**.

**Example 3.** Turnover ₦400,000; gross profit ₦100,000. Find the gross profit percentage. *Solution:* **25%**.`,
        },
        questions: [
          ["E", "The total net sales of a business in a period is its", "turnover", "capital", "working capital", "gross profit", "It is sales less returns inwards."],
          ["E", "Current assets less current liabilities gives", "working capital", "capital owned", "fixed capital", "turnover", "It shows the ability to meet short-term debts."],
          ["E", "Buildings and machinery kept for use in a business are", "fixed capital", "circulating capital", "liquid capital", "current liabilities", "They are not bought for resale."],
          ["M", "A business has total assets of ₦500,000 and total liabilities of ₦180,000. Its capital owned is", "₦320,000", "₦680,000", "₦500,000", "₦180,000", "Assets less liabilities."],
          ["M", "Current assets are ₦250,000 and current liabilities ₦100,000. The working capital is", "₦150,000", "₦350,000", "₦250,000", "₦100,000", "250,000 − 100,000."],
          ["M", "Sales for a year are ₦800,000 and returns inwards ₦20,000. The turnover is", "₦780,000", "₦820,000", "₦800,000", "₦20,000", "Returns inwards are deducted from sales."],
          ["M", "Opening stock is ₦40,000 and closing stock is ₦60,000. The average stock is", "₦50,000", "₦100,000", "₦20,000", "₦60,000", "Half the sum of opening and closing stock."],
          ["H", "The cost of goods sold is ₦600,000 and the average stock is ₦50,000. The rate of turnover is", "12 times", "6 times", "30 times", "0.08 times", "600,000 ÷ 50,000."],
          ["H", "A trader has a turnover of ₦720,000 and a cost of goods sold of ₦540,000. The gross profit as a percentage of turnover is", "25%", "33⅓%", "75%", "20%", "Gross profit of ₦180,000 on turnover of ₦720,000."],
          ["H", "A trader has a turnover of ₦720,000, a gross profit of ₦180,000 and expenses of ₦108,000. The net profit as a percentage of turnover is", "10%", "15%", "25%", "40%", "Net profit of ₦72,000 on turnover of ₦720,000."],
        ],
      },
      {
        week: 5,
        title: "Credit and hire purchase",
        subtopics: ["Meaning and types of credit", "Hire purchase and deferred payment", "Advantages and disadvantages of credit", "Sources of credit and credit control"],
        objectives: ["Explain credit and describe its types", "Distinguish hire purchase from deferred payment (credit sale)", "State the advantages and disadvantages of credit to buyers and sellers", "Describe the sources of credit and the ways of reducing bad debts"],
        lesson: {
          title: "Buy Now, Pay Later",
          summary: "Explain credit sales, hire purchase and deferred payment and their effects on trade.",
          minutes: 40,
          notes: `## Credit
An arrangement under which a buyer **obtains goods, services or money now and pays later**. It rests on **trust** in the buyer's ability and willingness to pay.

## Types of credit
- **trade credit** — a supplier allows a trader time to pay for goods: "30 days net"
- **consumer credit** — retailers sell to final consumers on credit: monthly accounts, budget accounts, credit cards
- **bank credit** — **loans** and **overdrafts**
- **hire purchase** and **deferred payment (credit sale)**
- **credit cards** — the card company pays the trader and the holder pays the company later
- **club trading** and instalment schemes
- informal credit — from friends, money-lenders and thrift (esusu) groups
By period: **short-term** (up to a year), **medium-term** (one to five years) and **long-term** (over five years).

## Hire purchase
A system in which the buyer pays a **deposit**, takes **possession** of the goods and pays the balance by **instalments**, but **ownership passes only when the last instalment is paid**.
- the buyer is a **hirer** until the final payment; he may not sell the goods
- on default, the seller may **repossess** the goods (subject to the law)
- the **hire purchase price** exceeds the cash price by the **interest (hire purchase charge)**
- often financed by a **finance house**, to which the instalments are paid

## Deferred payment (credit sale)
The buyer also pays by instalments, but **ownership passes immediately** on the first payment or delivery.
- the buyer may resell the goods
- on default, the seller **cannot repossess**; he can only **sue for the balance**

| | Hire purchase | Deferred payment |
|---|---|---|
| ownership passes | on the **last** instalment | **at once** |
| seller's remedy on default | repossession | suing for the debt |
| resale by buyer before full payment | not allowed | allowed |

### Calculation
*Example:* a generator has a cash price of ₦200,000. On hire purchase the terms are a deposit of 20% and 12 monthly instalments of ₦15,000.
- deposit = 20% × 200,000 = **₦40,000**
- instalments = 12 × 15,000 = ₦180,000
- **hire purchase price = ₦220,000**
- extra paid (interest) = 220,000 − 200,000 = **₦20,000**

## The law
The **Hire Purchase Act of 1965** protects hirers: the agreement must be **in writing**, stating the cash price, the hire purchase price, the instalments and the goods; the hirer must receive a copy; once a substantial proportion of the price has been paid (one-half, or three-fifths for motor vehicles), the owner **cannot repossess without a court order**; the hirer may end the agreement on stated terms.

## Advantages of credit
### To the buyer
- **use of goods at once**, before having the full price
- expensive goods become affordable — raising living standards
- traders can stock goods and pay from sales
- payment spread out of income
- convenient — no need to carry cash
### To the seller
- **higher sales** and turnover
- attracts and keeps customers
- **interest** earned on hire purchase
- clears stock faster
### To the economy
more demand, production and employment.

## Disadvantages
### To the buyer
- goods cost **more** (interest; loss of cash discount)
- temptation to **overspend** and fall into debt
- goods may be **repossessed** and instalments lost
- tied to one seller
### To the seller
- risk of **bad debts**
- **capital is tied up**
- extra cost of record keeping and debt collection
- goods repossessed are worth less
- may need to borrow, paying interest

## Factors to consider before granting credit
the customer's **character**, **capacity** to pay (income), **capital** and **collateral**; references from banks and other suppliers; the amount and period of credit; the state of trade.

## Credit control and reducing bad debts
- investigate customers' **creditworthiness**
- set **credit limits** and periods
- send invoices and **statements promptly**
- offer **cash discounts**
- follow up overdue accounts; stop supplies to defaulters
- use **factoring** — selling debts to a factor for immediate cash
- take out **credit insurance**
- legal action as a last resort

## Leasing
Hiring an asset for a rental without ever owning it — common for equipment and vehicles.`,
          examples: `**Example 1.** When does ownership pass under hire purchase? *Answer:* On payment of the **last instalment**.

**Example 2.** Cash price ₦90,000; deposit ₦18,000; 10 instalments of ₦8,000. Find the hire purchase price. *Solution:* 18,000 + 80,000 = **₦98,000**.

**Example 3.** State two disadvantages of credit sales to the seller. *Answer:* **Bad debts** and **capital tied up** in debtors.`,
        },
        questions: [
          ["E", "An arrangement under which goods are obtained now and paid for later is", "credit", "barter", "cash sale", "auction", "It depends on trust in the buyer."],
          ["E", "Under hire purchase, the goods become the property of the buyer", "when the last instalment is paid", "when the deposit is paid", "on delivery", "when the agreement is signed", "Until then he is only a hirer."],
          ["E", "A debt that a customer fails to pay is called", "a bad debt", "a cash discount", "a deposit", "a premium", "It is a loss to the seller."],
          ["M", "Under a deferred payment (credit sale) agreement, ownership of the goods passes to the buyer", "immediately", "after the last instalment", "after half the price is paid", "never", "The seller can only sue for the unpaid balance."],
          ["M", "A seller's remedy when a hire purchase buyer defaults is to", "repossess the goods", "increase the price", "sell the buyer's house without notice", "cancel all his other customers", "Ownership has not yet passed to the buyer."],
          ["M", "An advantage of credit sales to the seller is", "increased turnover", "bad debts", "capital tied up", "extra record keeping", "More customers can afford to buy."],
          ["M", "A disadvantage of hire purchase to the buyer is that", "the total price is higher than the cash price", "he cannot use the goods until fully paid", "no deposit is required", "ownership passes at once", "Interest is added to the cash price."],
          ["H", "A generator with a cash price of ₦200,000 is sold on hire purchase for a 20% deposit and 12 monthly instalments of ₦15,000. The hire purchase price is", "₦220,000", "₦180,000", "₦240,000", "₦200,000", "Deposit of ₦40,000 plus instalments of ₦180,000."],
          ["H", "For the generator with a cash price of ₦200,000 and a hire purchase price of ₦220,000, the hire purchase charge is", "₦20,000", "₦40,000", "₦15,000", "₦420,000", "The difference between the two prices."],
          ["H", "Selling a firm's book debts to a specialist company in return for immediate cash is known as", "factoring", "franchising", "hoarding", "underwriting", "The factor then collects the debts."],
        ],
      },
    ],
  },
];
