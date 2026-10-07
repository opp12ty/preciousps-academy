import type { TermPlan } from "../types";

/** SS1 Economics — original Precious PS content following the national senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Meaning and basic concepts of economics",
        subtopics: ["Definitions and scope of economics", "Wants, scarcity and choice", "Scale of preference and opportunity cost", "Importance of economics"],
        objectives: ["Define economics and state its scope", "Explain wants, scarcity and choice", "Explain scale of preference and opportunity cost", "State the importance of studying economics"],
        lesson: {
          title: "What Economics Is About",
          summary: "Define economics and explain scarcity, choice, scale of preference and opportunity cost.",
          minutes: 40,
          notes: `## Definitions
- **Adam Smith** (1776), the "father of economics": economics is an inquiry into the nature and causes of the **wealth of nations**
- **Alfred Marshall**: the study of **mankind in the ordinary business of life**
- **Lionel Robbins** (1932) — the most widely accepted: *economics is the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses*

### Key ideas in Robbins' definition
- **ends** — human wants, which are unlimited
- **scarce means** — resources, which are limited
- **alternative uses** — the same resource can be used in different ways
- so **choices** must be made

## Scope
- **microeconomics** — the behaviour of individual units: a consumer, a firm, the price of one commodity
- **macroeconomics** — the economy as a whole: national income, inflation, unemployment, economic growth

## Economics as a science
It uses the **scientific method** — observation, hypothesis, collection of data, testing and generalisation. It is a **social science**, because it studies human behaviour, which cannot be controlled in a laboratory. Economists use the assumption *ceteris paribus* — "other things being equal".
- **positive economics** — statements of fact that can be tested: "a rise in price reduces quantity demanded"
- **normative economics** — value judgments about what ought to be: "the government should reduce taxes"

## Basic concepts
### Wants
The desires of people for goods and services. They are **unlimited (insatiable)**, **recurrent**, **competitive** and vary in importance.
### Scarcity
Resources — money, time, land, labour — are **limited in supply relative to the wants** they could satisfy. Scarcity is the **fundamental economic problem**; it affects individuals, firms and governments, rich and poor alike.
### Choice
Because of scarcity, we must **select** which wants to satisfy and which to leave.
### Scale of preference
A list of wants arranged **in order of importance (priority)**, with the most pressing at the top. It guides **rational** choice and helps a consumer make the best use of limited income.
### Opportunity cost
The **alternative forgone** when a choice is made — the real cost of a thing is what must be given up to get it.
*Example:* Ada has ₦5000 and wants a textbook and a pair of shoes, each costing ₦5000. If she buys the textbook, the **shoes** are her opportunity cost.
- for a **firm**: the profit from the product it decided not to make
- for a **government**: the hospital not built because a road was built instead
**Money cost** is the amount paid; **opportunity (real) cost** is the alternative forgone.

### Goods
- **free goods** — abundant, with no price: air, sunlight
- **economic goods** — scarce, with a price: food, books
- **consumer goods** satisfy wants directly; **capital (producer) goods** help to produce other goods

## Importance of economics
- helps individuals make **rational choices** and budget their income
- helps firms decide what, how and for whom to produce
- helps governments plan, allocate resources and solve problems such as inflation and unemployment
- explains everyday economic events
- prepares for careers in banking, business, administration and teaching

## The production possibility curve (PPC)
A curve showing the **combinations of two goods** an economy can produce with all its resources fully and efficiently used.
- points **on** the curve — efficient use
- points **inside** — unemployed or wasted resources
- points **outside** — unattainable with present resources
- moving along the curve shows **opportunity cost**
- the curve shifts outwards with economic growth`,
          examples: `**Example 1.** Who defined economics in terms of ends and scarce means? *Answer:* **Lionel Robbins**.

**Example 2.** A farmer can grow yams or maize on a plot. He grows yams. What is his opportunity cost? *Answer:* The **maize** he could have grown.

**Example 3.** Distinguish micro- from macroeconomics. *Answer:* **Micro** studies individual units; **macro** studies the whole economy.`,
        },
        questions: [
          ["E", "The economist who defined economics as the study of human behaviour as a relationship between ends and scarce means which have alternative uses was", "Lionel Robbins", "Adam Smith", "Alfred Marshall", "Karl Marx", "His definition of 1932 is the most widely accepted."],
          ["E", "The fundamental economic problem facing all societies is", "scarcity", "inflation", "unemployment", "taxation", "Resources are limited relative to wants."],
          ["E", "Human wants are described as", "unlimited", "limited", "fixed", "free", "They can never be fully satisfied."],
          ["M", "A list of wants arranged in order of their importance is called", "a scale of preference", "an opportunity cost", "a budget deficit", "a demand schedule", "The most pressing want comes first."],
          ["M", "The alternative that is forgone when a choice is made is known as", "opportunity cost", "money cost", "fixed cost", "marginal cost", "It is also called real cost."],
          ["M", "The branch of economics that deals with the economy as a whole is", "macroeconomics", "microeconomics", "econometrics", "positive economics", "It covers national income and inflation."],
          ["M", "Which of the following is a free good?", "air", "bread", "a textbook", "a car", "It is abundant and has no price."],
          ["H", "A student has ₦5000 and must choose between a textbook and a pair of shoes, each costing ₦5000. If she buys the textbook, her opportunity cost is", "the pair of shoes", "₦5000", "the textbook", "₦10 000", "It is the alternative forgone, not the money spent."],
          ["H", "The statement 'the government ought to reduce taxes on the poor' is an example of", "normative economics", "positive economics", "microeconomic theory", "a scientific law", "It expresses a value judgment."],
          ["H", "A point lying inside a production possibility curve shows that resources are", "not fully employed", "fully and efficiently employed", "insufficient for that output", "increasing", "More of both goods could be produced."],
        ],
      },
      {
        week: 2,
        title: "Basic tools of economic analysis",
        subtopics: ["Tables and schedules", "Graphs and charts", "Measures of central tendency", "Simple measures of dispersion"],
        objectives: ["Present data in tables", "Draw and interpret graphs and charts", "Calculate the mean, median and mode", "Calculate the range and explain other measures of dispersion"],
        lesson: {
          title: "Tools Economists Use",
          summary: "Present and analyse economic data with tables, charts and averages.",
          minutes: 40,
          notes: `## Why tools are needed
Economists handle large amounts of data. Tools help to **summarise, present, compare and interpret** them and to show relationships between variables.

## Tables
An orderly arrangement of data in **rows and columns**, with a title, headings and units. A **schedule** (for example a demand schedule) is a table showing how one variable changes with another.

## Graphs
A graph shows the relationship between **two variables**, plotted on a horizontal axis (x) and a vertical axis (y) that meet at the **origin**.
- a line sloping **upwards** shows a **direct (positive)** relationship — price and quantity supplied
- a line sloping **downwards** shows an **inverse (negative)** relationship — price and quantity demanded
- the **slope (gradient)** = change in y ÷ change in x
- the **independent variable** causes the change; the **dependent variable** responds

## Charts
- **bar chart** — bars of equal width whose heights represent the values; simple, component and multiple bar charts
- **pie chart** — a circle divided into sectors; **angle = (value ÷ total) × 360°**. A sector representing 25% has an angle of 90°
- **histogram** — bars touching one another, for grouped frequency data
- **pictogram** — pictures represent quantities
- **line graph** — points joined to show a trend over time

## Measures of central tendency (averages)
### Arithmetic mean
The sum of the values divided by their number: mean = Σx ÷ n.
*Example:* 5, 10, 15, 20, 25: 75 ÷ 5 = **15**.
For a frequency table: mean = Σfx ÷ Σf.
- uses every value; easy to calculate
- but distorted by extreme values
### Median
The **middle value** when the data are arranged in order; with an even number of values, the average of the two middle ones.
*Example:* 3, 8, 5, 10, 7 arranged: 3, 5, **7**, 8, 10.
- not affected by extreme values
### Mode
The value that **occurs most often**.
*Example:* 4, 6, 6, 7, 9, 6: mode **6**.
- easy to find; useful for sizes and popular items
- there may be none, or more than one

## Measures of dispersion
They show how **spread out** the data are.
- **range** = highest value − lowest value. For 12, 18, 25, 30, 40 the range is 28
- **mean deviation** — the average of the absolute deviations from the mean
- **variance** — the average of the squared deviations
- **standard deviation** — the square root of the variance; the most reliable measure

## Percentages and ratios
percentage = (part ÷ whole) × 100.
**Percentage change** = (new − old) ÷ old × 100. A rise in price from ₦200 to ₦250 is a 25% increase.

## Functional relationships
Economists often write one variable as a **function** of another: Qd = f(P) means that quantity demanded depends on price. An equation such as Qd = 40 − 2P gives the quantity demanded at each price: at P = 5, Qd = 30.

## Choosing a tool
- trend over time — line graph
- comparison of items — bar chart
- shares of a total — pie chart
- a typical value — an average
- variability — range or standard deviation`,
          examples: `**Example 1.** Find the mean of 12, 15, 18 and 23. *Solution:* 68 ÷ 4 = **17**.

**Example 2.** Find the median of 9, 4, 7, 12, 6, 10. *Solution:* in order 4, 6, 7, 9, 10, 12: (7 + 9) ÷ 2 = **8**.

**Example 3.** Out of a budget of ₦400 million, ₦100 million goes to education. What angle represents education on a pie chart? *Solution:* 100 ÷ 400 × 360° = **90°**.`,
        },
        questions: [
          ["E", "An orderly arrangement of data in rows and columns is called a", "table", "graph", "pie chart", "pictogram", "It has a title and headings."],
          ["E", "The value that occurs most frequently in a set of data is the", "mode", "mean", "median", "range", "A set may have more than one."],
          ["E", "A circle divided into sectors to represent data is a", "pie chart", "bar chart", "histogram", "line graph", "The whole circle is 360°."],
          ["M", "The arithmetic mean of 5, 10, 15, 20 and 25 is", "15", "75", "20", "12.5", "The total divided by 5."],
          ["M", "The median of 3, 8, 5, 10 and 7 is", "7", "5", "8", "6.6", "Arrange the numbers in order and take the middle one."],
          ["M", "The range of 12, 18, 25, 30 and 40 is", "28", "52", "25", "40", "Highest value minus lowest value."],
          ["M", "A downward-sloping line on a graph shows that the two variables are", "inversely related", "directly related", "unrelated", "equal", "One rises as the other falls."],
          ["H", "Out of a total budget of ₦400 million, ₦100 million is spent on education. On a pie chart, education is represented by an angle of", "90°", "25°", "100°", "45°", "100 ÷ 400 × 360°."],
          ["H", "The price of a commodity rises from ₦200 to ₦250. The percentage increase in price is", "25%", "20%", "50%", "125%", "50 ÷ 200 × 100."],
          ["H", "A weakness of the arithmetic mean as an average is that it", "is distorted by extreme values", "ignores most of the data", "cannot be calculated", "is always a whole number", "One very large or small value pulls it away from the centre."],
        ],
      },
      {
        week: 3,
        title: "Basic economic problems and economic systems",
        subtopics: ["The basic economic problems of society", "Capitalism", "Socialism", "Mixed and traditional economies"],
        objectives: ["State the basic economic problems of society", "Describe the features, merits and demerits of capitalism", "Describe the features, merits and demerits of socialism", "Describe mixed and traditional economies"],
        lesson: {
          title: "How Societies Organise Production",
          summary: "Explain the basic economic problems and how different economic systems solve them.",
          minutes: 40,
          notes: `## The basic economic problems
Because resources are scarce, every society must decide:
1. **what to produce** — which goods and services, and in what quantities
2. **how to produce** — the method: labour-intensive or capital-intensive
3. **for whom to produce** — how the output is shared
4. **how efficiently** resources are being used
How these are answered depends on the **economic system** — the way a society owns, controls and allocates its resources.

## Capitalism (free-market economy)
Resources are **privately owned**, and decisions are made by individuals and firms through the **price mechanism**. Examples: the USA, Japan (in broad terms).
### Features
- **private ownership** of the means of production
- **freedom of enterprise** and of choice
- the **profit motive**
- **competition**
- prices fixed by **demand and supply**; **consumer sovereignty**
- little government interference
### Merits
- efficient use of resources; incentive to work hard
- **innovation** and a wide variety of goods
- consumer choice; quick response to demand
- economic and political freedom
### Demerits
- **inequality** of income and wealth
- exploitation of workers and consumers; rise of **monopolies**
- **unemployment** and economic instability
- wasteful competition and advertising
- neglect of unprofitable essential services and of the poor
- pollution

## Socialism (centrally planned or command economy)
Resources are **owned and controlled by the state** on behalf of the people. Examples: the former Soviet Union, Cuba, North Korea.
### Features
- **collective (state) ownership** of the means of production
- **central planning** — the state decides what, how and for whom to produce
- production for **use**, not profit
- no competition; prices fixed by the state
- equality as an aim
### Merits
- more **equal distribution** of income
- **full employment**
- essential services for all
- no wasteful competition; stable prices
- planned use of resources
### Demerits
- **little incentive** to work hard or innovate
- **bureaucracy** and slow decisions
- restricted consumer choice; shortages and queues
- loss of personal freedom
- planners may misjudge needs

## Communism
The extreme form of socialism, in which all property is held in common and goods are shared "to each according to his needs".

## Mixed economy
Combines **private and public ownership**. Private firms operate freely in many fields, while the government owns or regulates key sectors and provides public services. **Nigeria**, Ghana, the United Kingdom and most countries today are mixed economies.
### Features
- co-existence of private and public sectors
- both the price mechanism and government planning
- government regulation to protect consumers and workers
### Merits
combines the efficiency of the market with the welfare aims of the state; prevents extreme inequality; provides public goods.
### Demerits
high taxation; inefficiency and corruption in public enterprises; conflict between private profit and public interest.

## Traditional (subsistence) economy
Production is guided by **custom and tradition**; people produce mainly for their own use with simple tools; trade is often by barter. Found in remote rural communities. It is stable but slow to change and yields low output.

## Deregulation and privatisation
Many mixed economies have moved towards the market by selling state enterprises (**privatisation**) and removing controls (**deregulation**) to improve efficiency.`,
          examples: `**Example 1.** State the three basic economic problems. *Answer:* **What to produce, how to produce and for whom to produce**.

**Example 2.** Give two features of capitalism. *Answer:* **Private ownership** of resources and the **profit motive**.

**Example 3.** Why is Nigeria described as a mixed economy? *Answer:* Both **private individuals** and the **government** own and control resources.`,
        },
        questions: [
          ["E", "An economic system in which the means of production are privately owned is", "capitalism", "socialism", "communism", "feudalism", "Decisions are guided by the price mechanism."],
          ["E", "Nigeria operates", "a mixed economy", "a pure capitalist economy", "a pure socialist economy", "a traditional economy only", "Both private and public sectors exist."],
          ["E", "Which of the following is a basic economic problem of society?", "what to produce", "how to import", "when to vote", "where to travel", "Scarce resources force this choice."],
          ["M", "In a socialist economy, the allocation of resources is decided mainly by", "the central planning authority", "the price mechanism", "private firms", "consumers alone", "The state owns the means of production."],
          ["M", "A major demerit of capitalism is", "wide inequality of income", "absence of consumer choice", "lack of competition", "state ownership of all firms", "Wealth tends to concentrate in few hands."],
          ["M", "The main motive of production under capitalism is", "profit", "equality", "tradition", "government directive", "Entrepreneurs seek the highest return."],
          ["M", "The question 'for whom to produce' deals with", "the distribution of output", "the method of production", "the choice of goods", "the location of firms", "It concerns who receives the goods."],
          ["H", "A disadvantage of a centrally planned economy is that", "there is little incentive for hard work and innovation", "income inequality is very wide", "unemployment is always high", "monopolies exploit consumers for private profit", "Rewards are not closely tied to effort."],
          ["H", "The term 'consumer sovereignty' means that", "consumers' choices determine what is produced", "the government fixes all prices", "producers decide what consumers must buy", "consumers pay no taxes", "It is a feature of the free-market system."],
          ["H", "The sale of government-owned enterprises to private individuals and firms is called", "privatisation", "nationalisation", "indigenisation", "commercialisation", "It moves a mixed economy towards the market."],
        ],
      },
      {
        week: 4,
        title: "Factors of production",
        subtopics: ["Land", "Labour", "Capital", "The entrepreneur"],
        objectives: ["Describe land and its characteristics", "Describe labour and its characteristics", "Describe capital and its types", "Explain the functions of the entrepreneur and the rewards of the factors"],
        lesson: {
          title: "The Resources Used in Production",
          summary: "Describe the four factors of production, their features and their rewards.",
          minutes: 40,
          notes: `## Production
The **creation of goods and services** to satisfy human wants — it is complete only when the goods reach the final consumer. It creates **utility**.
### Types
- **primary (extractive)** — farming, fishing, mining, lumbering
- **secondary** — manufacturing and construction
- **tertiary** — services: **commercial** (trade, banking, transport, insurance) and **direct** (teachers, doctors, lawyers)

## Factors of production
The resources needed for production.
| Factor | Reward |
|---|---|
| **land** | **rent** |
| **labour** | **wages** (and salaries) |
| **capital** | **interest** |
| **entrepreneur** | **profit** |

## Land
All **free gifts of nature** used in production: the soil, forests, rivers, seas, minerals, climate.
### Characteristics
- a **gift of nature** — it has no cost of production
- **fixed in supply**
- **immobile** geographically
- **variable in quality** (fertility and location)
- subject to the **law of diminishing returns**
### Importance
farming; sites for buildings and industry; source of minerals and raw materials; collateral for loans.

## Labour
All **human effort — physical and mental — directed towards production**.
### Types
**skilled** (doctors, engineers), **semi-skilled** (drivers, typists) and **unskilled** (labourers, cleaners).
### Characteristics
- it is **human** — it has feelings and cannot be separated from the worker
- it is **mobile**
- it is **perishable** — cannot be stored
- its supply and efficiency vary
- it needs motivation
### Efficiency of labour
The ability of a worker to produce more or better output in a given time. It depends on **education and training**, **health**, **working conditions**, **wages** and incentives, the quality of **tools**, and good management.

## Capital
**Man-made wealth used to produce further wealth**: machines, tools, factories, raw materials, vehicles, money for running a business.
### Types
- **fixed capital** — lasts and is used repeatedly: buildings, machinery
- **circulating (working) capital** — used up in one process: raw materials, fuel, cash
- **social capital** — roads, schools, hospitals
- **current (liquid) capital** — cash and bank balances
### Characteristics
man-made; durable; subject to **depreciation**; mobile.
### Capital formation
Setting aside part of present income (**saving**) to invest in new capital goods. It increases future production.

## The entrepreneur
The person who **organises and co-ordinates** the other factors and **bears the risks** of the business.
### Functions
- provides or raises the **capital**
- **organises** land, labour and capital
- makes **decisions** — what, how, where and how much to produce
- **bears risk** and uncertainty
- **innovates**
- manages and controls the business; pays the other factors

## Mobility of factors
- **geographical mobility** — movement from place to place
- **occupational mobility** — movement from one use or job to another
Land is geographically immobile but occupationally mobile; labour is the most mobile; specialised capital is hard to move.

## Importance of the factors
All are needed together; they are combined in different proportions — **labour-intensive** methods use more labour, **capital-intensive** methods use more machinery.`,
          examples: `**Example 1.** Match each factor with its reward. *Answer:* Land — **rent**; labour — **wages**; capital — **interest**; entrepreneur — **profit**.

**Example 2.** Give two characteristics of land. *Answer:* It is **fixed in supply** and a **gift of nature**.

**Example 3.** Distinguish fixed from circulating capital. *Answer:* **Fixed** capital is used repeatedly (machinery); **circulating** capital is used up in one process (raw materials).`,
        },
        questions: [
          ["E", "The reward for land as a factor of production is", "rent", "wages", "interest", "profit", "It is paid to the landowner."],
          ["E", "The factor of production that bears the risks of business is", "the entrepreneur", "labour", "land", "capital", "His reward is profit."],
          ["E", "Man-made wealth used in producing further wealth is", "capital", "land", "labour", "income", "Machines and tools are examples."],
          ["M", "A characteristic of land as a factor of production is that it is", "fixed in supply", "man-made", "perishable", "highly mobile geographically", "It is a free gift of nature."],
          ["M", "Farming, fishing and mining are classified as", "primary production", "secondary production", "tertiary production", "direct services", "They extract resources from nature."],
          ["M", "Raw materials and fuel used up in a single process of production are", "circulating capital", "fixed capital", "social capital", "human capital", "Fixed capital is used repeatedly."],
          ["M", "The efficiency of labour is improved by", "education and training", "poor working conditions", "low wages", "obsolete tools", "Skilled, healthy workers produce more."],
          ["H", "The process of setting aside part of current income to invest in new capital goods is", "capital formation", "depreciation", "consumption", "hoarding", "It raises a nation's productive capacity."],
          ["H", "The services of teachers and doctors are classified as", "direct services", "commercial services", "primary production", "manufacturing", "They are rendered personally to the consumer."],
          ["H", "The ability of a worker to change from one job to another is called", "occupational mobility", "geographical mobility", "efficiency of labour", "division of labour", "It depends on training and skill."],
        ],
      },
      {
        week: 5,
        title: "Division of labour and scale of production",
        subtopics: ["Division of labour and specialisation", "Advantages and disadvantages of division of labour", "Economies of scale", "Diseconomies of scale and the size of firms"],
        objectives: ["Explain division of labour and specialisation", "State the advantages, disadvantages and limitations of division of labour", "Explain internal and external economies of scale", "Explain diseconomies of scale and why small firms survive"],
        lesson: {
          title: "Specialisation and Large-Scale Production",
          summary: "Explain division of labour and the economies and diseconomies of scale.",
          minutes: 40,
          notes: `## Division of labour
The **breaking down of a production process into separate stages, each done by a different worker or group**. Adam Smith illustrated it with a pin factory, where ten men dividing the work made thousands of pins a day.

## Specialisation
The **concentration of a person, firm or region on the activity in which it has the greatest ability or advantage**.
- by **product** — a firm makes only shoes
- by **process** — division of labour
- by **area** — cocoa in the south-west, groundnuts in the north
- by **sex** in traditional societies

## Advantages of division of labour
- **increased output**
- **greater skill** — "practice makes perfect"
- **saving of time** — no moving between tasks
- **use of machinery** becomes possible
- less fatigue; shorter training
- each worker does what suits him best
- lower cost per unit; cheaper goods

## Disadvantages
- **monotony** and boredom
- **decline of craftsmanship**
- **interdependence** — a hold-up at one stage stops the whole process
- risk of **unemployment** — narrow skills, and machines replace workers
- reduced contact with the finished product; loss of pride in work

## Limitations
- the **size of the market** — a small market cannot absorb large output
- the **nature of the product** — personal services and artistic work cannot be divided far
- the availability of **capital** and labour
- the level of technology

## Scale of production
The size of a firm's operations. As a firm grows, its average cost of production at first falls.

## Economies of scale
The **advantages a firm gains from large-scale production**, which reduce the average cost per unit.
### Internal economies (within the firm)
- **technical** — large, specialised machines; division of labour
- **managerial** — specialist managers
- **marketing (commercial)** — bulk buying at a discount; cheaper selling and advertising per unit
- **financial** — loans obtained more easily and at lower interest
- **risk-bearing** — diversification of products and markets
- **research and development**
- **welfare** — canteens, clinics and housing for workers

### External economies (from the growth of the whole industry in an area)
- a pool of **skilled labour**
- **subsidiary industries** supplying parts and services
- better **infrastructure** — roads, power, water
- specialised markets, banks and training institutions
- shared information and research

## Diseconomies of scale
The **disadvantages of growing too large**, which raise the average cost.
### Internal
- **managerial difficulties** — problems of control and co-ordination
- slow decisions; **red tape**
- poor relations between management and workers
- waste
### External
- **congestion** and traffic delays
- **pollution**
- higher rents and wages as firms compete for land and labour
- strain on public utilities

## Why small firms survive
- a limited or local market
- demand for **personal service** and variety (tailors, hairdressers)
- little capital available
- the owner's wish to remain independent
- they supply parts to large firms
- luxury and hand-made goods

## How firms grow
by **internal growth** (ploughing back profit) or **integration (merger)**: **horizontal** — firms at the same stage; **vertical** — firms at different stages, backward towards raw materials or forward towards the market; **lateral (conglomerate)** — unrelated firms.`,
          examples: `**Example 1.** Give three advantages of division of labour. *Answer:* **Higher output, greater skill and saving of time**.

**Example 2.** A firm buys raw materials in bulk at a discount. Which economy of scale is this? *Answer:* A **marketing (commercial)** economy.

**Example 3.** State two reasons why small firms survive. *Answer:* A **small market** and the demand for **personal service**.`,
        },
        questions: [
          ["E", "The breaking down of a production process into separate stages handled by different workers is", "division of labour", "economies of scale", "integration", "capital formation", "Each worker concentrates on one task."],
          ["E", "A disadvantage of division of labour is", "monotony of work", "increased output", "greater skill", "saving of time", "Repeating one task becomes boring."],
          ["E", "The advantages that a firm enjoys as it expands its scale of production are", "economies of scale", "diseconomies of scale", "opportunity costs", "fixed costs", "They reduce the average cost of production."],
          ["M", "Division of labour is limited mainly by the", "size of the market", "number of managers", "price of land", "rate of tax", "A small market cannot absorb a large output."],
          ["M", "The purchase of raw materials in bulk at a discount by a large firm is", "a marketing economy", "a technical economy", "a financial economy", "an external economy", "It is also called a commercial economy."],
          ["M", "The concentration of cocoa production in south-western Nigeria is an example of specialisation by", "area", "process", "sex", "product within a factory", "A region concentrates on what it produces best."],
          ["M", "A large firm obtaining loans more easily and at lower interest rates enjoys", "financial economies", "managerial economies", "risk-bearing economies", "welfare economies", "Banks regard large firms as safer borrowers."],
          ["H", "The benefits that firms derive from the growth of the whole industry in an area are", "external economies of scale", "internal economies of scale", "internal diseconomies", "variable costs", "Examples are skilled labour and subsidiary industries."],
          ["H", "A rise in average cost because management finds a very large firm difficult to control is", "an internal diseconomy of scale", "an external economy of scale", "a marketing economy", "a technical economy", "Co-ordination problems increase with size."],
          ["H", "The merger of a textile mill with a cotton farm that supplies it is an example of", "backward vertical integration", "horizontal integration", "forward vertical integration", "lateral integration", "The firm moves towards its source of raw materials."],
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
        title: "Theory of demand",
        subtopics: ["Meaning of demand and the law of demand", "Demand schedule and demand curve", "Factors affecting demand and changes in demand", "Types of demand and exceptions to the law"],
        objectives: ["Define demand and state the law of demand", "Draw a demand schedule and curve", "Distinguish a change in quantity demanded from a change in demand", "Describe the types of demand and the exceptional demand curves"],
        lesson: {
          title: "Demand",
          summary: "Explain the law of demand, the factors affecting demand and the types of demand.",
          minutes: 40,
          notes: `## Demand
The **quantity of a commodity that consumers are willing and able to buy at a given price over a given period**. A mere desire is not demand; it must be backed by the ability to pay — **effective demand**.

## The law of demand
**Other things being equal, the higher the price of a commodity, the lower the quantity demanded; the lower the price, the higher the quantity demanded.** Price and quantity demanded are **inversely related**.

## Demand schedule
A table showing the quantities demanded at different prices.
| Price (₦) | Quantity demanded (units) |
|---|---|
| 50 | 10 |
| 40 | 20 |
| 30 | 30 |
| 20 | 40 |
| 10 | 50 |
An **individual** demand schedule refers to one consumer; a **market** demand schedule adds the demands of all consumers.

## Demand curve
The graph of the schedule, with price on the vertical axis and quantity on the horizontal. It **slopes downwards from left to right**.
### Why it slopes downwards
- the **income effect** — a lower price raises the buyer's real income
- the **substitution effect** — the good becomes cheaper relative to others
- the **law of diminishing marginal utility**
- new buyers enter the market at lower prices

## Factors affecting demand
- the **price** of the commodity
- consumers' **income**
- **prices of other goods** — substitutes and complements
- **taste and fashion**
- **population**
- **advertising**
- **expectation** of future price changes
- weather and season; government policy (taxes, subsidies); distribution of income

## Change in quantity demanded and change in demand
- a **change in quantity demanded** is caused by a change in the **price of the commodity itself**; it is a **movement along** the same curve — an **extension** (price falls) or a **contraction** (price rises)
- a **change in demand** is caused by a change in **any other factor**; the whole curve **shifts** — to the **right** for an increase, to the **left** for a decrease
*Example:* a rise in consumers' income shifts the demand curve for most goods to the right.

## Types of demand
- **joint (complementary) demand** — goods used together: car and petrol, bread and butter. A rise in the price of one reduces the demand for the other
- **competitive demand** — **substitutes**: butter and margarine, tea and coffee. A rise in the price of one increases the demand for the other
- **derived demand** — a good is wanted not for itself but for what it helps to produce: the demand for labour, or for cocoa to make chocolate
- **composite demand** — a good wanted for several uses: palm oil for cooking, soap and margarine; flour for bread and cake

## Exceptional (abnormal) demand
Cases in which more is bought at a higher price — the curve slopes upwards:
- **goods of ostentation** — luxury items bought to display wealth (jewellery, expensive cars)
- **Giffen goods** — very inferior staple foods on which the poor spend most of their income
- **expectation of further price rises** — people buy more now
- **rare commodities** and works of art
- judging quality by price

## Kinds of goods and income
- **normal goods** — demand rises as income rises
- **inferior goods** — demand falls as income rises (people switch to better goods)

## A demand function
If Qd = 40 − 2P, then at P = ₦5 the quantity demanded is 40 − 10 = 30 units; at P = ₦10 it is 20 units.`,
          examples: `**Example 1.** State the law of demand. *Answer:* **The higher the price, the lower the quantity demanded**, other things being equal.

**Example 2.** What happens to the demand for petrol if the price of cars falls sharply? *Answer:* It **increases** — the two are in **joint demand**.

**Example 3.** Given Qd = 60 − 3P, find the quantity demanded when P = ₦8. *Solution:* 60 − 24 = **36 units**.`,
        },
        questions: [
          ["E", "The law of demand states that, other things being equal, the higher the price, the", "lower the quantity demanded", "higher the quantity demanded", "higher the supply", "lower the income", "Price and quantity demanded move in opposite directions."],
          ["E", "A normal demand curve slopes", "downwards from left to right", "upwards from left to right", "vertically", "horizontally", "More is bought at lower prices."],
          ["E", "Demand that is backed by the ability to pay is called", "effective demand", "derived demand", "joint demand", "composite demand", "A mere desire is not demand."],
          ["M", "Goods that are used together, such as cars and petrol, are in", "joint demand", "competitive demand", "composite demand", "derived demand", "They are complementary goods."],
          ["M", "The demand for labour is an example of", "derived demand", "joint demand", "composite demand", "competitive demand", "Labour is wanted for the goods it helps to produce."],
          ["M", "A movement along the same demand curve is caused by a change in", "the price of the commodity", "consumers' income", "taste and fashion", "population", "Other factors shift the whole curve."],
          ["M", "Butter and margarine are examples of goods in", "competitive demand", "joint demand", "derived demand", "composite demand", "They are substitutes."],
          ["H", "A rise in consumers' income, other things being equal, will cause the demand curve for a normal good to", "shift to the right", "shift to the left", "remain unchanged", "become vertical", "More is demanded at every price."],
          ["H", "If the demand function is Qd = 40 − 2P, the quantity demanded when the price is ₦5 is", "30 units", "35 units", "10 units", "50 units", "40 − 2 × 5. Answer: 30 units."],
          ["H", "A commodity for which demand falls as consumers' income rises is", "an inferior good", "a normal good", "a luxury good", "a complementary good", "Consumers switch to better alternatives."],
        ],
      },
      {
        week: 2,
        title: "Theory of supply",
        subtopics: ["Meaning of supply and the law of supply", "Supply schedule and supply curve", "Factors affecting supply and changes in supply", "Types of supply and exceptional supply"],
        objectives: ["Define supply and state the law of supply", "Draw a supply schedule and curve", "Distinguish a change in quantity supplied from a change in supply", "Describe the types of supply and exceptional supply curves"],
        lesson: {
          title: "Supply",
          summary: "Explain the law of supply, the factors affecting supply and the types of supply.",
          minutes: 40,
          notes: `## Supply
The **quantity of a commodity that producers are willing and able to offer for sale at a given price over a given period**. It differs from the **stock**, which is the total quantity in existence.

## The law of supply
**Other things being equal, the higher the price of a commodity, the higher the quantity supplied; the lower the price, the lower the quantity supplied.** Price and quantity supplied are **directly related**.

## Supply schedule
| Price (₦) | Quantity supplied (units) |
|---|---|
| 10 | 10 |
| 20 | 20 |
| 30 | 30 |
| 40 | 40 |
| 50 | 50 |
The **market** supply schedule is the sum of the supplies of all producers.

## Supply curve
It **slopes upwards from left to right**: higher prices mean higher profits, so existing firms produce more and new firms enter.

## Factors affecting supply
- the **price** of the commodity
- the **cost of production** — wages, raw materials, rent
- the level of **technology**
- **prices of other commodities** the producer could make
- **weather and climate** — vital in agriculture
- **government policy** — taxes reduce supply; subsidies increase it
- the **number of producers**
- producers' **expectations** of future prices
- availability of factors of production; transport and storage
- the aims of the producer

## Change in quantity supplied and change in supply
- a **change in quantity supplied** results from a change in the **price of the commodity**; it is a **movement along** the curve — an extension (price rises) or a contraction (price falls)
- a **change in supply** results from a change in **other factors**; the whole curve **shifts** — to the **right** for an increase (better technology, lower costs, good weather, subsidy), to the **left** for a decrease (higher costs, tax, bad weather)

## Types of supply
- **joint (complementary) supply** — the production of one good automatically yields another: **beef and hides**, palm oil and palm kernel, petrol and kerosene
- **competitive supply** — goods that compete for the same resources: a farmer's land may grow maize **or** yams; producing more of one means less of the other
- **composite supply** — several goods that satisfy the same want: tea, coffee and cocoa as beverages

## Exceptional (abnormal) supply
- **fixed supply** — land, or a rare painting: the curve is **vertical**
- the **backward-bending supply curve of labour** — beyond a certain wage, workers prefer more leisure and offer fewer hours
- producers who need a fixed cash income may sell more when prices fall
- expectation of a further fall in price

## A supply function
If Qs = 10 + 4P, then at P = ₦5 the quantity supplied is 10 + 20 = 30 units.

## Supply in agriculture
Farm supply responds slowly to price because of the **time lag** between planting and harvest, dependence on weather, perishability and poor storage. Hence the prices of farm products fluctuate widely.

## Supply and time
- **momentary (very short) period** — supply is fixed
- **short run** — supply can be increased a little, by using existing capacity more fully
- **long run** — all factors can be varied, so supply responds fully`,
          examples: `**Example 1.** State the law of supply. *Answer:* **The higher the price, the higher the quantity supplied**, other things being equal.

**Example 2.** Give an example of goods in joint supply. *Answer:* **Beef and hides**.

**Example 3.** Given Qs = 5 + 3P, find the quantity supplied when P = ₦10. *Solution:* 5 + 30 = **35 units**.`,
        },
        questions: [
          ["E", "The law of supply states that, other things being equal, the higher the price, the", "higher the quantity supplied", "lower the quantity supplied", "lower the cost of production", "higher the quantity demanded", "Price and quantity supplied are directly related."],
          ["E", "A normal supply curve slopes", "upwards from left to right", "downwards from left to right", "horizontally", "backwards", "Producers offer more at higher prices."],
          ["E", "Beef and hides are examples of goods in", "joint supply", "competitive supply", "composite supply", "fixed supply", "Producing one automatically yields the other."],
          ["M", "An improvement in the technology of production will cause the supply curve to", "shift to the right", "shift to the left", "become vertical", "remain unchanged", "More can be produced at each price."],
          ["M", "A rise in the cost of production, other things being equal, will", "decrease supply", "increase supply", "increase demand", "leave supply unchanged", "The supply curve shifts to the left."],
          ["M", "A movement along a supply curve results from a change in", "the price of the commodity", "the level of technology", "the cost of raw materials", "the weather", "Other factors shift the whole curve."],
          ["M", "The supply curve of land is", "vertical", "horizontal", "downward-sloping", "backward-bending", "The total supply of land is fixed."],
          ["H", "The granting of a subsidy to producers by the government will", "shift the supply curve to the right", "shift the supply curve to the left", "shift the demand curve to the left", "make supply fixed", "It lowers the cost of production."],
          ["H", "If the supply function is Qs = 10 + 4P, the quantity supplied when the price is ₦5 is", "30 units", "20 units", "14 units", "50 units", "10 + 4 × 5. Answer: 30 units."],
          ["H", "The supply curve of labour may bend backwards at high wage rates because workers", "prefer more leisure to more income", "are forced to work longer hours", "become less skilled", "pay no tax", "Fewer hours of work are then offered."],
        ],
      },
      {
        week: 3,
        title: "Price determination",
        subtopics: ["Market equilibrium", "Excess demand and excess supply", "Effects of changes in demand and supply", "The price mechanism"],
        objectives: ["Explain how equilibrium price and quantity are determined", "Explain excess demand and excess supply", "Describe the effects of changes in demand and supply on equilibrium", "Explain the functions of the price mechanism"],
        lesson: {
          title: "How Prices Are Fixed in the Market",
          summary: "Determine equilibrium price and quantity and explain the effects of changes in demand and supply.",
          minutes: 40,
          notes: `## Market
Any arrangement that brings **buyers and sellers into contact** to exchange goods and services — not necessarily a physical place.

## Equilibrium
The **equilibrium price** is the price at which **quantity demanded equals quantity supplied**. The corresponding quantity is the **equilibrium quantity**. On a graph it is the point where the demand and supply curves **intersect**. At this price the market is **cleared** — there is neither a shortage nor a surplus.

### From schedules
| Price (₦) | Quantity demanded | Quantity supplied |
|---|---|---|
| 10 | 50 | 10 |
| 20 | 40 | 20 |
| **30** | **30** | **30** |
| 40 | 20 | 40 |
| 50 | 10 | 50 |
Equilibrium price ₦30; equilibrium quantity 30 units.

### From equations
Set Qd = Qs.
*Example 1:* Qd = 40 − 2P and Qs = 10 + 4P.
40 − 2P = 10 + 4P, so 30 = 6P and **P = ₦5**; Q = 40 − 10 = **30 units**.
*Example 2:* Qd = 100 − 5P and Qs = 20 + 3P.
80 = 8P, so **P = ₦10**; Q = 100 − 50 = **50 units**.

## Disequilibrium
- **above** the equilibrium price, quantity supplied exceeds quantity demanded — **excess supply (surplus)**; sellers cut prices
- **below** the equilibrium price, quantity demanded exceeds quantity supplied — **excess demand (shortage)**; buyers bid prices up
Either way, market forces push the price back towards equilibrium.
*Example:* with Qd = 40 − 2P and Qs = 10 + 4P, at P = ₦3: Qd = 34, Qs = 22 — an excess demand of 12 units. At P = ₦8: Qd = 24, Qs = 42 — an excess supply of 18 units.

## Effects of changes in demand and supply
| Change | Equilibrium price | Equilibrium quantity |
|---|---|---|
| demand **increases** (supply unchanged) | rises | rises |
| demand **decreases** | falls | falls |
| supply **increases** (demand unchanged) | **falls** | rises |
| supply **decreases** | **rises** | falls |
- when **both** increase, quantity rises; price depends on which changes more
- when demand rises and supply falls, price rises; quantity depends on the sizes of the changes

*Example:* a bumper harvest of yams increases supply: the price falls and more is sold. A successful advertising campaign increases demand: both price and quantity rise.

## The price mechanism (price system)
The way in which **the forces of demand and supply determine prices and allocate resources** in a free-market economy without central direction — Adam Smith's "invisible hand".
### Functions of price
- **allocates resources** — high prices and profits attract resources into the production of goods in demand
- **rations** scarce goods among consumers
- **signals** to producers what consumers want
- provides **incentives**
- **distributes income**
### Advantages
automatic; no cost of administration; gives consumers freedom of choice; encourages efficiency.
### Disadvantages
the poor may be unable to afford essentials; it ignores social costs such as pollution; it does not provide public goods; prices may fluctuate; monopolies may distort it.

## Other ways of fixing prices
- **haggling (bargaining)** between buyer and seller
- **auction** — sale to the highest bidder
- **resale price maintenance** — the manufacturer fixes the retail price
- **government price control** — maximum and minimum prices
- **commodity (marketing) boards** fixing producer prices`,
          examples: `**Example 1.** Define equilibrium price. *Answer:* The price at which **quantity demanded equals quantity supplied**.

**Example 2.** Given Qd = 50 − 3P and Qs = 10 + 2P, find the equilibrium price and quantity. *Solution:* 40 = 5P, so P = **₦8**; Q = 50 − 24 = **26 units**.

**Example 3.** What happens to the price of tomatoes when supply falls in the off-season? *Answer:* The price **rises**.`,
        },
        questions: [
          ["E", "The price at which quantity demanded equals quantity supplied is the", "equilibrium price", "minimum price", "maximum price", "cost price", "The market is cleared at this price."],
          ["E", "When quantity supplied exceeds quantity demanded, there is", "excess supply", "excess demand", "equilibrium", "a shortage", "It is also called a surplus."],
          ["E", "On a graph, the equilibrium price is found where the demand and supply curves", "intersect", "are parallel", "are furthest apart", "touch the price axis", "Both quantities are equal there."],
          ["M", "If demand increases while supply remains unchanged, the equilibrium price will", "rise", "fall", "remain the same", "become zero", "Buyers compete for the available goods."],
          ["M", "An increase in supply with demand unchanged will lead to", "a fall in price and a rise in quantity", "a rise in price and a fall in quantity", "a rise in both price and quantity", "a fall in both price and quantity", "More is offered, so the price must fall to clear the market."],
          ["M", "When the market price is below the equilibrium price, the result is", "excess demand", "excess supply", "a surplus", "equilibrium", "Buyers want more than sellers offer."],
          ["M", "The determination of prices by the forces of demand and supply is known as the", "price mechanism", "price control", "price discrimination", "price index", "It allocates resources without central direction."],
          ["H", "Given Qd = 40 − 2P and Qs = 10 + 4P, the equilibrium price is", "₦5", "₦6", "₦10", "₦3", "40 − 2P = 10 + 4P gives 6P = 30."],
          ["H", "Given Qd = 100 − 5P and Qs = 20 + 3P, the equilibrium quantity is", "50 units", "10 units", "80 units", "40 units", "The price is ₦10, so Q = 100 − 50."],
          ["H", "Given Qd = 40 − 2P and Qs = 10 + 4P, at a price of ₦3 there is an excess demand of", "12 units", "22 units", "34 units", "6 units", "Qd is 34 and Qs is 22."],
        ],
      },
      {
        week: 4,
        title: "Business organisations",
        subtopics: ["Sole proprietorship and partnership", "Limited liability companies", "Co-operative societies", "Public corporations"],
        objectives: ["Describe sole proprietorship and partnership with their merits and demerits", "Describe private and public limited liability companies", "Describe co-operative societies", "Describe public corporations and sources of business finance"],
        lesson: {
          title: "Forms of Business Ownership",
          summary: "Describe the types of business organisation, their features, advantages and disadvantages.",
          minutes: 40,
          notes: `## Business organisation
A unit set up to produce goods or services. Forms differ in **ownership, control, sources of capital, liability and sharing of profit**.

## Sole proprietorship (one-man business)
Owned, financed and controlled by **one person**.
- **sources of capital**: personal savings, loans from relatives and banks, trade credit, ploughed-back profit
- **advantages**: easy to start; little capital; quick decisions; the owner keeps all the profit; privacy; close contact with customers and workers; flexible
- **disadvantages**: **unlimited liability** — the owner's personal property may be seized to pay business debts; limited capital; no continuity — the business may die with the owner; the owner bears all risks; limited expansion and specialisation

## Partnership
An association of **two to twenty persons** carrying on a business together for profit, usually under a **deed of partnership** (partnership agreement) stating capital, duties, profit-sharing and how disputes are settled.
### Types of partner
- **active (general)** — takes part in management; unlimited liability
- **sleeping (dormant)** — contributes capital but takes no part in management
- **limited** partner — liability limited to the capital contributed
- **nominal** — lends only his name
### Advantages
more capital; shared risks; combined skills and specialisation; better decisions; continuity is better than in a one-man business.
### Disadvantages
unlimited liability (for general partners); disagreements; decisions may be slow; the action of one partner binds all; the death or withdrawal of a partner may end the firm.

## Limited liability companies (joint-stock companies)
Owned by **shareholders**; a **legal entity** separate from its owners — it can sue and be sued, own property and continue in spite of the death of members. Shareholders have **limited liability**: they can lose only what they invested. Registered with the **Corporate Affairs Commission**; governed by its **Memorandum** and **Articles of Association**; managed by a **board of directors**.

| | Private limited company (Ltd) | Public limited company (Plc) |
|---|---|---|
| membership | up to **50** | no upper limit |
| shares | **not** offered to the public; transfer restricted | **offered to the public**; freely transferable on the **stock exchange** |
| accounts | need not be published | must be published |
### Sources of capital
**shares** (ordinary and preference), **debentures** (long-term loans at fixed interest), bank loans, retained profit.
- **ordinary shareholders** own the company, vote, and receive **dividends** that vary with profit
- **preference shareholders** receive a fixed dividend first, usually without a vote
- **debenture holders** are creditors, not owners
### Advantages
large capital; limited liability; continuity; expert management; economies of scale; shares can be transferred.
### Disadvantages
costly and complex to form; **separation of ownership from control**; slow decisions; double taxation of profit; lack of privacy (Plc); impersonal relations.

## Co-operative societies
Formed by people who **pool resources to promote their common economic interest** rather than to maximise profit.
- **principles**: open and voluntary membership; **democratic control — one member, one vote**; limited interest on capital; surplus shared in proportion to patronage
- **types**: **consumer** co-operatives (buy in bulk and sell to members); **producer** co-operatives (farmers and craftsmen); **thrift and credit** societies (savings and loans); **multipurpose** societies
- **advantages**: cheaper goods; encourages saving; easy loans; democratic; no exploitation by middlemen
- **disadvantages**: limited capital; poor management; embezzlement; members' disloyalty

## Public corporations
Enterprises **owned and financed by the government**, set up by an Act of Parliament to provide essential services — power, railways, ports, broadcasting.
- **features**: government-owned; run by a board appointed by the government; **service** rather than profit; often monopolies; capital from government grants
- **advantages**: essential services at moderate prices; large capital; employment; prevents private monopoly and foreign domination
- **disadvantages**: inefficiency; political interference; corruption; losses borne by taxpayers; bureaucracy
Many have been **privatised** or **commercialised** to improve performance.`,
          examples: `**Example 1.** What is limited liability? *Answer:* A shareholder's loss is **limited to the amount invested** in the company.

**Example 2.** State the principle of control in a co-operative society. *Answer:* **One member, one vote**.

**Example 3.** Give two differences between a private and a public limited company. *Answer:* A private company has **at most 50 members** and **cannot sell shares to the public**; a public company has no upper limit and its shares are **freely transferable**.`,
        },
        questions: [
          ["E", "A business owned and controlled by one person is a", "sole proprietorship", "partnership", "co-operative society", "public corporation", "The owner provides the capital and takes all the profit."],
          ["E", "The owners of a limited liability company are its", "shareholders", "directors", "debenture holders", "creditors", "They receive dividends from the profit."],
          ["E", "A business enterprise owned and financed by the government is a", "public corporation", "public limited company", "partnership", "sole proprietorship", "It is set up to provide essential services."],
          ["M", "The maximum number of members in an ordinary partnership is", "twenty", "two", "fifty", "seven", "The minimum is two."],
          ["M", "A partner who contributes capital but takes no part in running the business is", "a sleeping partner", "an active partner", "a nominal partner", "a general partner", "He is also called a dormant partner."],
          ["M", "The shares of a public limited company are bought and sold on the", "stock exchange", "money market", "commodity board", "discount house", "They are freely transferable."],
          ["M", "In a co-operative society, each member has", "one vote regardless of shares held", "votes equal to the number of shares held", "no vote", "two votes", "Control is democratic."],
          ["H", "Limited liability means that a shareholder", "can lose only the amount invested in the company", "must pay all the debts of the company", "cannot receive dividends", "manages the company personally", "Personal property cannot be seized for the company's debts."],
          ["H", "Holders of debentures in a company are regarded as", "creditors of the company", "owners of the company", "directors of the company", "employees of the company", "They lend money at a fixed rate of interest."],
          ["H", "A major disadvantage of a sole proprietorship is", "unlimited liability", "slow decision making", "lack of privacy", "separation of ownership from control", "The owner's private property is at risk."],
        ],
      },
      {
        week: 5,
        title: "Population",
        subtopics: ["Population size, growth and census", "The Malthusian theory", "Optimum population, over- and under-population", "Population structure and distribution"],
        objectives: ["Explain population growth and the importance and problems of census", "State and assess the Malthusian theory", "Explain optimum population, overpopulation and underpopulation", "Describe population structure and the factors affecting distribution"],
        lesson: {
          title: "People and the Economy",
          summary: "Explain population growth, theories, structure and their economic effects.",
          minutes: 40,
          notes: `## Population
The **total number of people living in a country or area at a particular time**.

## Determinants of population size and growth
- **birth rate** — births per 1000 people per year
- **death rate** — deaths per 1000 people per year
- **migration** — immigration adds; emigration subtracts
**Natural increase** = birth rate − death rate.
Population growth rate = (births − deaths + net migration) ÷ population × 100.

## Census
The **official count** of the people of a country, with their age, sex and occupation, normally every ten years.
### Importance
- shows the size and growth of the population
- guides **economic planning** — schools, hospitals, housing, jobs
- basis for **revenue allocation** and political representation
- helps forecast the labour force and demand
- provides data for research and for international aid
### Problems in Nigeria
high cost; illiteracy; inaccessible areas; **inflation of figures** for political and financial gain; religious and traditional beliefs; shortage of trained personnel; nomadic people; poor records.

## The Malthusian theory
**Thomas Malthus** (1798) argued that
- **population grows in geometric progression** (1, 2, 4, 8, 16 …)
- **food supply grows in arithmetic progression** (1, 2, 3, 4, 5 …)
- so population will outstrip food supply unless checked
- **positive checks** — famine, disease, war — raise the death rate; **preventive checks** — late marriage and moral restraint — lower the birth rate
### Criticisms
He did not foresee improvements in **agricultural technology**, the opening up of new lands, **international trade** in food, industrialisation and modern **birth control**.
### Relevance
Many developing countries still have fast-growing populations and food shortages.

## Optimum population
The size of population which, with the available resources and technology, gives the **highest output (income) per head**.
- **overpopulation** — the population is **larger** than the resources can support at the best standard: pressure on land, food shortage, unemployment, low income per head, congestion
- **underpopulation** — the population is **too small** to use the resources fully: labour shortage, small market, unused resources

## Population structure
### Age distribution
| Age group | Description |
|---|---|
| 0–14 (or 0–17) | children — dependants |
| 15–64 (or 18–64) | the **working (active) population** |
| 65 and above | the aged — dependants |
**Dependency ratio** = dependants ÷ working population × 100.
*Example:* 40 million dependants and 80 million workers: 50%.
A **young** population (as in Nigeria) has many dependants and heavy spending on education; an **ageing** population needs pensions and health care; a large **working** population favours production.
### Sex distribution
The proportions of males and females.
### Occupational distribution
The shares of the labour force in primary, secondary and tertiary production; in Nigeria agriculture still employs the largest share.
### Geographical distribution
How people are spread — urban and rural, dense and sparse — influenced by climate, soil, minerals, employment, trade and history.

## Effects of a high population
- **advantages**: large labour force; large market; more tax revenue; stronger defence
- **disadvantages**: unemployment; pressure on social services; food shortage; housing problems; low saving; a high dependency ratio

## Population control
family planning; education, especially of girls; later marriage; public enlightenment; legislation; economic development.

## Migration
**rural–urban migration** swells cities and drains villages of labour; **emigration** of skilled people is a "brain drain".`,
          examples: `**Example 1.** State Malthus's view of population and food supply. *Answer:* **Population grows geometrically** while **food supply grows arithmetically**.

**Example 2.** A country's birth rate is 45 and its death rate 18 per thousand. Find the rate of natural increase. *Solution:* 27 per thousand = **2.7%**.

**Example 3.** Define optimum population. *Answer:* The population size that gives the **highest output per head** with the available resources.`,
        },
        questions: [
          ["E", "The official counting of the people of a country is called", "a census", "an election", "a budget", "a survey of income", "It is usually held every ten years."],
          ["E", "The economist who propounded a theory of population in 1798 was", "Thomas Malthus", "Adam Smith", "David Ricardo", "Lionel Robbins", "He feared that population would outstrip food supply."],
          ["E", "The number of live births per thousand of the population in a year is the", "birth rate", "death rate", "growth rate", "dependency ratio", "It is one determinant of population size."],
          ["M", "According to Malthus, food supply increases in", "arithmetic progression", "geometric progression", "the same ratio as population", "inverse ratio to population", "Population, he said, grows geometrically."],
          ["M", "The population size that yields the highest output per head, given the available resources, is the", "optimum population", "overpopulation", "underpopulation", "working population", "Output per head falls on either side of it."],
          ["M", "A country in which the population is too small to make full use of its resources is", "underpopulated", "overpopulated", "at its optimum", "ageing", "It suffers labour shortages and a small market."],
          ["M", "The part of the population between 15 and 64 years is known as the", "working population", "dependent population", "ageing population", "school-age population", "It supports the young and the old."],
          ["H", "A country has 40 million dependants and a working population of 80 million. Its dependency ratio is", "50%", "200%", "33%", "40%", "40 ÷ 80 × 100. Answer: 50%."],
          ["H", "A major criticism of the Malthusian theory is that it", "ignored improvements in agricultural technology", "said population never grows", "supported birth control", "predicted a surplus of food", "Food output grew far faster than he expected."],
          ["H", "A country whose birth rate is 45 per thousand and death rate 18 per thousand has a natural rate of increase of", "2.7%", "27%", "6.3%", "0.27%", "27 per thousand is 2.7 per hundred."],
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
        title: "Labour market",
        subtopics: ["Labour force and supply of labour", "Demand for labour and wage determination", "Mobility and efficiency of labour", "Unemployment"],
        objectives: ["Explain the labour force and the factors affecting the supply of labour", "Explain the demand for labour and how wages are determined", "Explain the mobility of labour", "Describe the types, causes, effects and solutions of unemployment"],
        lesson: {
          title: "Workers and Jobs",
          summary: "Explain the supply of and demand for labour, mobility and unemployment.",
          minutes: 40,
          notes: `## The labour force
The **working population** — all persons of working age (about 15–64 years) who are **able and willing to work**, whether employed or unemployed. It excludes children, full-time students, the aged, housewives not seeking work, and the disabled.

## Supply of labour
The total number of hours of work offered at a given wage rate.
### Factors
- the **size of the population** and its age and sex structure
- the **official school-leaving and retirement ages**
- the number of **working hours** and days
- the level of **wages**
- people's attitude to work; the role of women
- education and training; health
- migration

## Demand for labour
A **derived demand** — employers want labour for what it produces.
### Factors
- the **demand for the goods** labour produces
- the **wage rate**
- the **productivity** of labour
- the price and availability of substitutes such as machines
- the state of the economy

## Wage determination
- by the **forces of demand and supply** — the equilibrium wage is where the demand for and supply of labour are equal
- by **collective bargaining** between trade unions and employers
- by the **government** — a national minimum wage, salary commissions
### Why wages differ
skill and length of training; demand for the product; danger and unpleasantness of the job; trade union strength; cost of living in the area; responsibility; government policy; sex and age in some places.
- **nominal (money) wage** — the amount of money received
- **real wage** — what the money can buy; it falls when prices rise faster than money wages
Payment may be by **time rate** or **piece rate**.

## Mobility of labour
The ease with which workers move.
- **geographical mobility** — from place to place; hindered by family ties, housing, cost of moving, language and cultural differences, ignorance of opportunities
- **occupational mobility** — from job to job; hindered by long training, special skills, age, professional and union barriers
- **industrial mobility** — from one industry to another
Mobility is improved by education and retraining, information about vacancies, housing and transport.

## Unemployment
A situation in which people who are **able and willing to work at the prevailing wage cannot find jobs**.
**Unemployment rate** = unemployed ÷ labour force × 100.
*Example:* 5 million unemployed in a labour force of 50 million: 10%.

### Types
- **frictional** — the short period between leaving one job and finding another
- **structural** — a change in the structure of the economy or in demand makes some skills unwanted (the decline of an industry)
- **seasonal** — work available only at certain times of the year: farming, building, tourism
- **cyclical (mass)** — a general fall in demand during a depression
- **technological** — machines replace workers
- **residual** — people unemployable through disability
- **disguised unemployment (underemployment)** — people work, but below their capacity or with very low productivity
- voluntary unemployment — people choose not to work at the going wage

### Causes in Nigeria
rapid population growth; an education system that stresses paper qualifications over skills; rural–urban migration; slow industrial growth and closure of factories; capital-intensive methods; poor power supply; neglect of agriculture; economic recession.

### Effects
loss of output; poverty; waste of human resources; crime and social unrest; rural–urban drift and emigration; a heavier burden on the employed; loss of government revenue.

### Solutions
industrialisation and support for small businesses; technical, vocational and entrepreneurship education; development of agriculture and rural areas; population control; labour-intensive methods; better infrastructure; job information centres; public works.`,
          examples: `**Example 1.** Why is the demand for labour called a derived demand? *Answer:* Labour is wanted **for the goods and services it helps to produce**.

**Example 2.** In a labour force of 20 million, 3 million are unemployed. Find the unemployment rate. *Solution:* 3 ÷ 20 × 100 = **15%**.

**Example 3.** What type of unemployment affects farm workers in the off-season? *Answer:* **Seasonal** unemployment.`,
        },
        questions: [
          ["E", "All persons of working age who are able and willing to work make up the", "labour force", "total population", "dependent population", "trade union", "It includes both the employed and the unemployed."],
          ["E", "A situation in which people who are willing and able to work cannot find jobs is", "unemployment", "inflation", "mobility of labour", "underpopulation", "It wastes human resources."],
          ["E", "The ease with which workers move from one job or place to another is", "mobility of labour", "efficiency of labour", "division of labour", "supply of labour", "It may be geographical or occupational."],
          ["M", "Unemployment that occurs during the short period when workers are changing jobs is", "frictional unemployment", "structural unemployment", "cyclical unemployment", "seasonal unemployment", "It is temporary."],
          ["M", "Unemployment caused by a general fall in demand during a depression is", "cyclical unemployment", "frictional unemployment", "seasonal unemployment", "residual unemployment", "It is also called mass unemployment."],
          ["M", "What a worker's money wage can actually buy is known as the", "real wage", "nominal wage", "minimum wage", "piece rate", "It falls when prices rise faster than money wages."],
          ["M", "The movement of a worker from one town to another is an example of", "geographical mobility", "occupational mobility", "vertical mobility", "disguised unemployment", "Family ties and housing may hinder it."],
          ["H", "In a labour force of 50 million, 5 million people are unemployed. The unemployment rate is", "10%", "5%", "45%", "0.1%", "5 ÷ 50 × 100. Answer: 10%."],
          ["H", "A situation in which people are working but far below their capacity is called", "disguised unemployment", "frictional unemployment", "full employment", "voluntary unemployment", "It is also known as underemployment."],
          ["H", "Unemployment that results when a change in demand or technique makes workers' skills unwanted is", "structural unemployment", "seasonal unemployment", "frictional unemployment", "voluntary unemployment", "Whole industries may decline."],
        ],
      },
      {
        week: 2,
        title: "Agriculture in the Nigerian economy",
        subtopics: ["Components and systems of agriculture", "Importance of agriculture", "Problems of agriculture", "Agricultural policies and marketing"],
        objectives: ["Describe the components and systems of agriculture", "Explain the importance of agriculture to the economy", "Explain the problems of agriculture and their solutions", "Describe government agricultural policies and the marketing of produce"],
        lesson: {
          title: "Agriculture and the Economy",
          summary: "Explain the role, problems and policies of agriculture in Nigeria.",
          minutes: 40,
          notes: `## Agriculture
The **cultivation of crops and the rearing of animals** for food and raw materials.
### Components
- **crop production** — food crops (yam, cassava, maize, rice) and cash crops (cocoa, oil palm, rubber, cotton, groundnuts)
- **livestock** — cattle, sheep, goats, pigs, poultry
- **forestry** — timber and other forest products
- **fishing**

### Systems
- **peasant (subsistence) farming** — small plots, simple tools, family labour; mainly for home use
- **commercial (mechanised) farming** — large scale, for sale
- **plantation farming** — one cash crop on a large estate
- **co-operative farming** — farmers pool resources
- **mixed farming**; **pastoral farming**

## Importance to the economy
- **food** for the population
- **employment** — the largest employer of labour
- **raw materials** for industry — cotton for textiles, cocoa for beverages, rubber for tyres
- **foreign exchange** from exports
- **income** for farmers; **revenue** for government
- a **market** for industrial goods — tools, fertilisers
- contribution to **national income**
- supports rural development

## Problems
- the **land tenure system** — communal ownership and fragmentation of holdings
- **crude implements** and low mechanisation
- **inadequate finance** and credit
- **poor storage and processing** — heavy post-harvest losses
- **poor transport** and marketing; middlemen
- **pests and diseases**
- dependence on **rainfall**; drought, flood and erosion
- **rural–urban migration**; an ageing farm population
- illiteracy and resistance to new methods
- unstable prices
- inadequate extension services, seeds and fertilisers
- insecurity

## Solutions
land reform; loans through agricultural and co-operative banks; mechanisation and tractor-hire schemes; storage and processing facilities; rural roads, water and electricity; irrigation; improved seeds, fertilisers and extension services; research; price support; farmers' co-operatives.

## Government policies and programmes
| Programme | Year |
|---|---|
| National Accelerated Food Production Programme | 1972 |
| **Operation Feed the Nation (OFN)** | 1976 |
| **River Basin Development Authorities** | 1976 |
| Agricultural Development Projects (ADPs) | from 1975 |
| **Green Revolution** | 1980 |
| Directorate of Food, Roads and Rural Infrastructure (DFRRI) | 1986 |
| Agricultural Transformation Agenda | 2011 |
| Anchor Borrowers' Programme | 2015 |
Also the **Land Use Act (1978)**, which vested land in the state governors; agricultural credit guarantee schemes; and research institutes.

## Marketing of agricultural produce
- **commodity (marketing) boards** — bought export crops from farmers at fixed prices, stabilised prices and earned revenue; they were abolished in 1986
- **co-operative societies** — sell members' produce jointly
- **middlemen**, licensed buying agents and private exporters
- local markets
### Problems
poor roads; lack of storage; perishability; price fluctuations; exploitation by middlemen; lack of market information.

## Agriculture and industry
Each depends on the other: agriculture supplies food, raw materials and a market; industry supplies tools, fertilisers and processing. A decline in agriculture after the oil boom of the 1970s made Nigeria a heavy importer of food.

## Features of peasant agriculture
small holdings; hoes and cutlasses; family labour; shifting cultivation and bush fallowing; low output; little capital; dependence on nature.`,
          examples: `**Example 1.** State three ways in which agriculture contributes to the Nigerian economy. *Answer:* It provides **food, employment and raw materials for industry**.

**Example 2.** Name two government programmes aimed at increasing food production. *Answer:* **Operation Feed the Nation** and the **Green Revolution**.

**Example 3.** Give two problems of agricultural marketing. *Answer:* **Poor roads** and **inadequate storage**.`,
        },
        questions: [
          ["E", "The sector that employs the largest proportion of Nigeria's labour force is", "agriculture", "mining", "banking", "manufacturing", "Most rural people are farmers."],
          ["E", "Farming carried out mainly to feed the farmer and his family is", "subsistence farming", "commercial farming", "plantation farming", "co-operative farming", "Little is produced for sale."],
          ["E", "Cocoa, rubber and cotton are examples of", "cash crops", "food crops", "livestock", "forest reserves", "They are grown mainly for sale and export."],
          ["M", "Operation Feed the Nation was launched in Nigeria in", "1976", "1960", "1986", "1999", "It encouraged everyone to grow food."],
          ["M", "A major problem of agriculture in Nigeria is", "the use of crude implements", "excessive mechanisation", "too much credit for farmers", "a surplus of storage facilities", "Hoes and cutlasses limit output."],
          ["M", "Agriculture supports industrial development by providing", "raw materials", "machinery", "electricity", "foreign technology", "Cotton, cocoa and rubber are processed by factories."],
          ["M", "The law of 1978 that vested all land in each state in the governor is the", "Land Use Act", "Indigenisation Decree", "Companies Act", "Banking Ordinance", "It was meant to make land easier to obtain."],
          ["H", "Commodity boards in Nigeria were set up mainly to", "stabilise the prices paid to producers of export crops", "manufacture farm tools", "grant loans to banks", "control rents", "They bought the crops at fixed prices."],
          ["H", "Fragmentation of land holdings hinders agriculture because it", "makes mechanisation and large-scale farming difficult", "increases soil fertility", "attracts more credit", "raises the yield of crops", "Plots are too small and scattered for machines."],
          ["H", "The decline of agriculture in Nigeria in the 1970s was due largely to", "the oil boom and neglect of farming", "the abolition of oil exports", "a fall in population", "excessive investment in farming", "Labour and attention shifted to the oil economy."],
        ],
      },
      {
        week: 3,
        title: "Money",
        subtopics: ["Barter and its problems", "Meaning, functions and qualities of money", "Types of money", "Value of money"],
        objectives: ["Explain barter and its problems", "State the functions and qualities of money", "Describe the types of money", "Explain the value of money and how it changes"],
        lesson: {
          title: "Money and Its Functions",
          summary: "Explain why money replaced barter and describe its functions, qualities and types.",
          minutes: 40,
          notes: `## Barter
The **direct exchange of goods and services for other goods and services**, without money.
### Problems
- **double coincidence of wants** — each party must have what the other wants and want what the other has
- **no common measure of value** — difficult to fix rates of exchange
- **indivisibility** — a cow cannot be divided to buy a tuber of yam
- **difficulty of storing wealth** — goods perish or are bulky
- **no standard for deferred payment**
- waste of time; bulky goods are hard to carry

## Money
**Anything that is generally acceptable as a means of payment** for goods and services and in settlement of debts.

## Functions of money
1. **medium of exchange** — it removes the need for a double coincidence of wants
2. **measure of value (unit of account)** — prices are expressed in it
3. **store of value** — wealth can be kept for future use
4. **standard of deferred payment** — makes lending, borrowing and credit sales possible
Money also **transfers value** from place to place.

## Qualities of good money
- **general acceptability**
- **durability**
- **portability**
- **divisibility**
- **homogeneity (uniformity)**
- **scarcity** — limited in supply
- **stability of value**
- **recognisability**; difficult to forge

## History
barter → **commodity money** (cowries, salt, cattle, manillas, gold) → **coins** → **paper money** → **bank money**. In Nigeria the pound was replaced by the **naira and kobo on 1 January 1973**.

## Types of money
- **commodity money** — goods used as money
- **coins** — token money whose face value exceeds the value of the metal
- **paper money (bank notes)**
- **bank deposits (bank money)** — transferred by **cheque** or electronically; the largest part of the money supply in modern economies. A cheque is an order to pay, not money itself
- **legal tender** — money that must by law be accepted in payment of a debt: notes and coins
- **fiat money** — declared money by government order, not backed by gold
- **near money (quasi-money)** — assets easily turned into cash: savings deposits, treasury bills
- **electronic money** — cards, mobile and online transfers

## Motives for holding money (liquidity preference)
According to **J. M. Keynes**:
- **transactions motive** — for day-to-day purchases
- **precautionary motive** — for emergencies
- **speculative motive** — to take advantage of changes in the prices of securities and interest rates

## Supply of money
The total stock of money in circulation: currency outside banks plus bank deposits. It is controlled by the **central bank**.

## Value of money
The **purchasing power** of money — the quantity of goods and services a unit of money can buy. It is **inversely related to the price level**: when prices rise, the value of money falls.
### The quantity theory of money
**MV = PT** (Irving Fisher), where M is the quantity of money, V its velocity of circulation, P the general price level and T the volume of transactions.
If V and T are constant, an increase in M leads to a proportionate rise in P.
*Example:* M = ₦500, V = 4, T = 1000 units: P = (500 × 4) ÷ 1000 = **₦2**.

### Measuring changes in the value of money
By a **price index** (cost-of-living index), which compares the cost of a "basket" of goods in the current year with that in a base year (= 100).`,
          examples: `**Example 1.** What is the double coincidence of wants? *Answer:* Each trader must **have what the other wants and want what the other has**.

**Example 2.** List the four main functions of money. *Answer:* **Medium of exchange, measure of value, store of value and standard of deferred payment**.

**Example 3.** Using MV = PT, find P if M = ₦2000, V = 5 and T = 2500. *Solution:* 10 000 ÷ 2500 = **₦4**.`,
        },
        questions: [
          ["E", "The direct exchange of goods for goods without the use of money is", "barter", "credit", "hire purchase", "auction", "It was the earliest form of trade."],
          ["E", "The most important function of money is to serve as", "a medium of exchange", "a commodity", "an import licence", "a factor of production", "It is accepted in payment for goods and services."],
          ["E", "The naira and kobo were introduced as Nigeria's currency in", "1973", "1960", "1963", "1986", "They replaced the pound."],
          ["M", "The major problem of barter is the need for", "a double coincidence of wants", "legal tender", "a central bank", "paper money", "Each party must want what the other offers."],
          ["M", "The quality of money that makes it easy to carry about is", "portability", "divisibility", "durability", "homogeneity", "Bulky money would be inconvenient."],
          ["M", "The function of money that makes lending and borrowing possible is its use as a", "standard of deferred payment", "measure of value", "unit of account", "commodity", "Debts are fixed in money terms for future settlement."],
          ["M", "Holding money in order to meet unforeseen emergencies is the", "precautionary motive", "transactions motive", "speculative motive", "profit motive", "People keep cash for illness and accidents."],
          ["H", "The value of money is", "inversely related to the general price level", "directly related to the general price level", "unrelated to prices", "fixed by the weight of coins", "Money buys less when prices rise."],
          ["H", "In the equation MV = PT, if M = ₦500, V = 4 and T = 1000, the price level P is", "₦2", "₦8", "₦0.50", "₦125", "500 × 4 ÷ 1000."],
          ["H", "Money which must by law be accepted in settlement of a debt is called", "legal tender", "near money", "a cheque", "token money", "Notes and coins have this status."],
        ],
      },
      {
        week: 4,
        title: "Financial institutions",
        subtopics: ["Commercial banks and credit creation", "The central bank", "Other financial institutions", "Money and capital markets"],
        objectives: ["Describe the functions of commercial banks and how they create credit", "Describe the functions of the central bank", "Describe other financial institutions", "Distinguish the money market from the capital market"],
        lesson: {
          title: "Banks and Other Financial Institutions",
          summary: "Describe commercial banks, the central bank and other financial institutions.",
          minutes: 40,
          notes: `## Financial institutions
Organisations that **collect savings and channel them to borrowers** — the link between savers and investors.

## Commercial banks
Privately owned institutions run for **profit**.
### Functions
- **accept deposits** — current (demand), savings and fixed (time) deposit accounts
- **lend money** — loans and **overdrafts**
- provide **means of payment** — cheques, cards, electronic transfers
- **safekeeping** of valuables
- **foreign exchange** and help with international trade
- **agents of payment** — standing orders, salaries
- business and investment **advice**; references
- **discount bills** of exchange
- act as executors and trustees

### Accounts
- **current account** — withdrawn by cheque; usually no interest; overdrafts allowed
- **savings account** — interest paid; for small savers
- **fixed deposit account** — money kept for an agreed period at higher interest

### Credit creation
Banks need to keep only a fraction of deposits in cash — the **cash (reserve) ratio** — and can lend out the rest; the loans return as new deposits, from which further loans are made.
**Total deposits = initial deposit × (1 ÷ cash ratio)**
*Example:* an initial deposit of ₦1000 with a cash ratio of 10%: bank multiplier = 1 ÷ 0.1 = 10; total deposits = **₦10 000**; credit created = ₦10 000 − ₦1000 = **₦9000**.
#### Limits to credit creation
the cash and liquidity ratios; central bank policy; the public's banking habit; the demand for loans; availability of **collateral** security; leakages of cash.

## The central bank
The apex bank, owned by the government — the **Central Bank of Nigeria (CBN)**, established by an Act of **1958**, which began operations on **1 July 1959**.
### Functions
- **issues currency** — notes and coins
- **banker to the government** — keeps its accounts, lends to it, manages the public debt
- **bankers' bank** — keeps the reserves of commercial banks and settles their accounts
- **lender of last resort**
- **controls the supply of money and credit** (monetary policy)
- **supervises and regulates** banks
- manages the **external reserves** and the exchange rate
- advises the government on economic matters
- promotes the growth of the financial system

### Instruments of monetary policy
- **open market operations** — selling government securities reduces the money supply; buying them increases it
- **bank rate (monetary policy rate)** — raising it makes borrowing dearer
- **cash reserve ratio** and **liquidity ratio**
- **special deposits**
- **directives** and selective credit control
- **moral suasion** — persuasion

### Central bank and commercial banks compared
| Central bank | Commercial banks |
|---|---|
| owned by government | privately owned |
| not for profit | profit-making |
| issues currency | do not issue currency |
| deals with government and banks | deal with the public |
| controls credit | create credit |

## Other financial institutions
- **merchant banks** — wholesale banking: large loans, issuing shares for companies
- **development banks** — long-term loans for industry and agriculture: the Bank of Industry; the Bank of Agriculture
- **microfinance banks** — small loans to low-income earners
- **mortgage institutions** — loans for housing: the Federal Mortgage Bank
- **insurance companies** — pool risks; invest premiums
- **pension funds**
- **discount houses**; finance houses; bureaux de change
- traditional institutions: **esusu (ajo, adashi)** thrift groups, money-lenders
- the **Nigeria Deposit Insurance Corporation (NDIC)**, set up in 1988, protects depositors

## Financial markets
- the **money market** — for **short-term** funds: treasury bills, call money, commercial papers, bills of exchange. Institutions: the central bank, commercial banks, discount houses
- the **capital market** — for **long-term** funds: shares, stocks, debentures and bonds. Institutions: the **stock exchange**, issuing houses, the Securities and Exchange Commission (the regulator), insurance and pension funds
  - **primary market** — new issues; **secondary market** — trading in existing securities on the stock exchange`,
          examples: `**Example 1.** State three functions of commercial banks. *Answer:* **Accepting deposits, lending money and providing means of payment**.

**Example 2.** With a cash ratio of 20%, find the total deposits created from an initial deposit of ₦5000. *Solution:* 5000 × (1 ÷ 0.2) = **₦25 000**.

**Example 3.** Distinguish the money market from the capital market. *Answer:* The **money market** deals in **short-term** funds; the **capital market** in **long-term** funds.`,
        },
        questions: [
          ["E", "The apex bank in Nigeria is the", "Central Bank of Nigeria", "Bank of Industry", "Nigerian Stock Exchange", "Federal Mortgage Bank", "It controls the banking system."],
          ["E", "The sole right to issue currency notes and coins in Nigeria belongs to the", "central bank", "commercial banks", "merchant banks", "stock exchange", "This is one of its main functions."],
          ["E", "An account from which money is withdrawn by cheque and which usually earns no interest is a", "current account", "savings account", "fixed deposit account", "loan account", "Overdrafts may be allowed on it."],
          ["M", "The Central Bank of Nigeria began operations in", "1959", "1973", "1986", "1952", "The Act establishing it was passed in 1958."],
          ["M", "The market for long-term funds such as shares and debentures is the", "capital market", "money market", "commodity market", "foreign exchange market", "The stock exchange is part of it."],
          ["M", "A commercial bank allows a customer to draw more than the balance in his current account through", "an overdraft", "a fixed deposit", "a debenture", "a share issue", "Interest is charged on the amount overdrawn."],
          ["M", "As lender of last resort, the central bank lends to", "commercial banks in need of cash", "private individuals", "foreign governments only", "traders in the market", "It helps banks facing shortages of funds."],
          ["H", "A bank receives an initial deposit of ₦1000 and keeps a cash ratio of 10%. The maximum total deposits that can be created are", "₦10 000", "₦9000", "₦1100", "₦100", "₦1000 × (1 ÷ 0.1)."],
          ["H", "To reduce the supply of money through open market operations, the central bank will", "sell government securities", "buy government securities", "lower the bank rate", "reduce the cash ratio", "Buyers pay with money, which leaves circulation."],
          ["H", "A difference between a commercial bank and the central bank is that a commercial bank", "aims at making profit", "issues currency", "is banker to the government", "controls monetary policy", "It is owned by private shareholders."],
        ],
      },
      {
        week: 5,
        title: "Distributive trade",
        subtopics: ["The chain of distribution", "The wholesaler", "The retailer", "Middlemen and problems of distribution"],
        objectives: ["Describe the channels of distribution", "State the functions of the wholesaler", "State the functions and types of retailer", "Assess the role of middlemen and the problems of distribution in Nigeria"],
        lesson: {
          title: "Getting Goods to the Consumer",
          summary: "Describe the channels of distribution and the roles of wholesalers and retailers.",
          minutes: 40,
          notes: `## Distribution
The process by which goods **move from the producer to the final consumer**. Production is not complete until the goods reach the consumer.

## Channels of distribution
1. producer → **wholesaler** → **retailer** → consumer (the normal channel)
2. producer → retailer → consumer
3. producer → wholesaler → consumer
4. producer → consumer (direct sale)
The choice depends on the nature of the goods (perishable, bulky, technical), the size of the market, the producer's resources and the cost of each channel.

## The wholesaler
Buys **in bulk from producers** and sells **in smaller quantities to retailers**.
### Functions
#### To the producer
- buys in bulk, enabling large-scale production
- pays promptly, providing **finance**
- **stores (warehouses)** the goods
- bears the **risk** of price changes and damage
- gives information on market trends
- advertises and promotes the goods
#### To the retailer
- **breaks bulk** — sells in small quantities
- offers **variety** from many producers
- grants **credit**
- **transports** goods
- gives advice on new products
- keeps prices stable by holding stocks
### Types
merchant wholesalers; cash-and-carry wholesalers; agents and brokers.

## The retailer
Buys from the wholesaler (or producer) and sells **in small units to the final consumer** — the last link in the chain.
### Functions
- **breaks bulk** further and sells in convenient units
- brings goods **close to consumers**
- offers a **variety** of goods
- gives **credit** to trusted customers
- provides **after-sales service** and advice
- passes consumers' views back to wholesalers and producers
### Types
- **small-scale**: hawkers and pedlars; market stalls; kiosks; roadside traders; small shops; mobile shops
- **large-scale**: **supermarkets** (self-service); **department stores** (many departments under one roof); **multiple (chain) stores** (many branches selling the same goods); **mail-order** and **online** stores; hypermarkets; vending machines

## Middlemen
All the intermediaries between producer and consumer — wholesalers, retailers, agents and brokers.
### Arguments for eliminating them
- they add to the **final price**
- they **hoard** goods to create artificial scarcity
- some are too many, lengthening the chain
- they may sell fake or expired goods
### Arguments against eliminating them
- their **functions must still be performed** — by the producer or consumer, at a cost
- they finance production, store goods, break bulk and bear risks
- they provide employment
The wholesaler may be by-passed when the producer has many retail branches, when retailers are large enough to buy direct, or when goods are perishable or made to order.

## Problems of distribution in Nigeria
- **poor roads** and transport
- inadequate **storage** and warehousing
- **too many middlemen**
- **hoarding** and smuggling
- shortage of credit
- poor communication and market information
- government policies; multiple levies on the roads
- high cost of fuel; insecurity

## Role of government agencies
The government distributes some essential goods directly, regulates prices and standards (the Standards Organisation of Nigeria; the consumer protection agency) and builds roads and markets.

## Trade associations and co-operatives
Help members to buy in bulk, fix fair prices and settle disputes.`,
          examples: `**Example 1.** State the normal channel of distribution. *Answer:* **Producer → wholesaler → retailer → consumer**.

**Example 2.** Give two services of the wholesaler to the retailer. *Answer:* **Breaking bulk** and **granting credit**.

**Example 3.** Give one argument for and one against the elimination of middlemen. *Answer:* For: they **raise prices**; against: their **functions would still have to be performed**.`,
        },
        questions: [
          ["E", "The trader who buys in bulk from producers and sells in smaller quantities to retailers is the", "wholesaler", "consumer", "manufacturer", "hawker", "He links the producer and the retailer."],
          ["E", "The last link in the chain of distribution before the consumer is the", "retailer", "wholesaler", "producer", "agent", "He sells in small units."],
          ["E", "A large retail shop in which customers serve themselves is a", "supermarket", "kiosk", "mail-order firm", "warehouse", "Goods are displayed on open shelves."],
          ["M", "A function of the wholesaler to the manufacturer is that he", "buys in bulk and pays promptly", "sells in small units to consumers", "produces the goods", "fixes the factory's wages", "This finances further production."],
          ["M", "A retail organisation with many branches selling similar goods in different towns is a", "multiple (chain) store", "department store", "mobile shop", "co-operative farm", "Each branch is managed from a head office."],
          ["M", "The selling of goods in small quantities out of a large consignment is called", "breaking bulk", "hoarding", "bulk buying", "warehousing", "Both wholesalers and retailers do it."],
          ["M", "The practice of keeping goods off the market to create artificial scarcity is", "hoarding", "advertising", "branding", "retailing", "It forces prices up."],
          ["H", "The main argument against the elimination of middlemen is that", "their functions must still be performed by someone", "they reduce prices", "they are too few", "they produce the goods", "Storage, finance and breaking bulk cannot be avoided."],
          ["H", "A manufacturer is most likely to sell directly to consumers when the goods are", "perishable or made to order", "cheap and widely demanded", "durable and standardised", "imported in bulk", "A short channel avoids delay and suits special orders."],
          ["H", "A large shop divided into sections, each selling a different class of goods under one roof, is a", "department store", "multiple store", "kiosk", "hypermarket chain branch", "It offers one-stop shopping."],
        ],
      },
    ],
  },
];
