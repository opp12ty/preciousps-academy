import type { TermPlan } from "../types";

/** SS3 Agricultural Science — original Precious PS content aligned to the senior secondary syllabus (WAEC/NECO). */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Demand, supply and prices of farm produce",
        subtopics: ["Demand and its determinants", "Supply and its determinants", "Price determination", "Price fluctuation and control"],
        objectives: ["State the law of demand and factors affecting demand", "State the law of supply and factors affecting supply", "Explain how equilibrium price is determined", "Explain price fluctuation in agriculture and how it is controlled"],
        lesson: {
          title: "How Prices of Farm Produce Are Decided",
          summary: "Apply demand and supply to agricultural prices.",
          minutes: 45,
          notes: `## Demand
**Demand** is the quantity of a commodity that consumers are **willing and able to buy** at a given price in a given period.
**Law of demand:** other things being equal, the **higher the price, the lower the quantity demanded**, and vice versa. The demand curve slopes **downward** from left to right.
**Factors affecting demand:** price of the commodity; **income** of consumers; prices of **substitutes** (rice and yam) and **complements**; taste and fashion; population; season and festivals; expectation of price changes.

## Supply
**Supply** is the quantity that producers are **willing and able to offer for sale** at a given price in a given period.
**Law of supply:** other things being equal, the **higher the price, the higher the quantity supplied**. The supply curve slopes **upward**.
**Factors affecting supply:** price; **cost of production**; **weather**; technology; number of producers; pests and diseases; storage facilities; government policy (subsidies, taxes); prices of other crops.

## Equilibrium price
the price at which **quantity demanded equals quantity supplied**.
| Price (₦ per kg) | Quantity demanded (kg) | Quantity supplied (kg) |
|---|---|---|
| 200 | 500 | 100 |
| 300 | 400 | 200 |
| **400** | **300** | **300** |
| 500 | 200 | 400 |
Equilibrium price = **₦400**; equilibrium quantity = **300 kg**. Above this price there is a **surplus (glut)**; below it there is a **shortage (scarcity)**.

## Elasticity
- **elasticity of demand** — the responsiveness of quantity demanded to a change in price; demand for **staple foods** is usually **inelastic**
- **elasticity of supply** — agricultural supply is **inelastic in the short run** because production takes time

## Price fluctuation in agriculture
caused by **seasonality** (glut at harvest, scarcity later), perishability, weather, pests, poor storage, inelastic demand and many small producers.

## Price control and stabilisation
**buffer stock** (strategic grain reserves — government buys at harvest and releases later); **guaranteed minimum prices**; **storage and processing**; **subsidies**; co-operative marketing; commodity exchanges; improved market information.`,
          examples: `**Example 1.** State the law of demand. *Answer:* The **higher the price, the lower the quantity demanded**, other things being equal.

**Example 2.** From the table, what is the equilibrium price? *Answer:* **₦400 per kg**.

**Example 3.** Why are prices low at harvest? *Answer:* Supply is very high — a **glut**.`,
        },
        questions: [
          ["E", "The quantity of a commodity that consumers are willing and able to buy at a price is", "demand", "supply", "production", "consumption cost", "Demand needs ability to pay."],
          ["E", "The quantity that producers are willing to offer for sale at a price is", "supply", "demand", "surplus", "output loss", "Sellers supply the market."],
          ["E", "According to the law of demand, when price rises, quantity demanded", "falls", "rises", "stays the same", "doubles", "Price and demand move in opposite directions."],
          ["M", "The price at which quantity demanded equals quantity supplied is the", "equilibrium price", "floor price", "ceiling price", "cost price", "The market clears at this price."],
          ["M", "A situation in which supply greatly exceeds demand is a", "glut", "scarcity", "monopoly", "famine", "Prices fall. Answer: glut."],
          ["M", "Which factor mainly affects the supply of farm produce?", "weather", "consumers' taste", "consumers' income", "fashion", "Rainfall determines yields."],
          ["M", "The supply curve slopes", "upward from left to right", "downward from left to right", "horizontally", "vertically downward", "More is supplied at higher prices."],
          ["H", "In the short run, the supply of most farm produce is inelastic because", "production takes time to adjust", "farmers dislike profit", "prices never change", "demand is unlimited", "Crops need a season to grow."],
          ["H", "Government buying grain at harvest and releasing it during scarcity operates a", "buffer stock", "price ceiling", "quota", "tariff", "It stabilises prices."],
          ["H", "If demand is 400 kg and supply is 200 kg at ₦300, there is a", "shortage of 200 kg", "surplus of 200 kg", "glut of 600 kg", "balance", "Demand exceeds supply."],
        ],
      },
      {
        week: 2,
        title: "Production economics",
        subtopics: ["Production function", "Law of diminishing returns", "Total, average and marginal product", "Costs of production"],
        objectives: ["Explain the production function", "State and illustrate the law of diminishing returns", "Calculate average and marginal products", "Distinguish fixed, variable and total costs"],
        lesson: {
          title: "Inputs, Outputs and Costs",
          summary: "Apply the law of diminishing returns and classify farm costs.",
          minutes: 45,
          notes: `## Production function
the relationship between **inputs** (land, labour, fertiliser, feed) and **output** (yield).

## Law of diminishing returns
if **increasing quantities of a variable input are added to a fixed input**, a point is reached after which each additional unit adds **less and less** to total output.

## Products
- **total product (TP)** — total output
- **average product (AP)** = TP ÷ units of variable input
- **marginal product (MP)** = change in TP ÷ change in input

| Fertiliser (bags) | TP (bags of maize) | AP | MP |
|---|---|---|---|
| 1 | 10 | 10 | 10 |
| 2 | 24 | 12 | 14 |
| 3 | 36 | 12 | 12 |
| 4 | 44 | 11 | 8 |
| 5 | 48 | 9.6 | 4 |
| 6 | 48 | 8 | 0 |
| 7 | 45 | 6.4 | −3 |
- MP rises at first (**increasing returns**), then falls (**diminishing returns** from the 3rd bag), reaches **zero** when TP is at its **maximum**, then becomes negative.
- a rational farmer stops adding input before MP becomes zero — where the value of the extra output equals the cost of the extra input.

## Costs
- **fixed costs (FC)** — do not change with output: rent, depreciation of machines, interest on loans, salaries of permanent staff, insurance
- **variable costs (VC)** — change with output: seeds, fertiliser, feed, fuel, casual labour, drugs
- **total cost (TC) = FC + VC**
- **average cost** = TC ÷ output
- **marginal cost** = change in TC ÷ change in output

## Revenue and profit
- **total revenue (TR)** = price × quantity sold
- **gross margin** = TR − total variable cost
- **net farm income (profit)** = TR − TC

## Example
a farmer sells 200 crates of eggs at ₦3,000: TR = ₦600,000. Variable costs ₦350,000; fixed costs ₦100,000.
gross margin = 600,000 − 350,000 = **₦250,000**; net income = 600,000 − 450,000 = **₦150,000**.

## Economies of scale
as farm size increases, **cost per unit falls** through bulk buying, mechanisation and specialisation.`,
          examples: `**Example 1.** TP rises from 36 to 44 bags when a fourth bag of fertiliser is added. Find MP. *Answer:* 44 − 36 = **8 bags**.

**Example 2.** TR ₦600,000; variable cost ₦350,000. Find the gross margin. *Answer:* **₦250,000**.

**Example 3.** Is rent a fixed or variable cost? *Answer:* a **fixed cost**.`,
        },
        questions: [
          ["E", "Costs that do not change with the level of output are", "fixed costs", "variable costs", "marginal costs", "total revenue", "Rent is an example."],
          ["E", "Total cost is the sum of", "fixed cost and variable cost", "revenue and profit", "price and quantity", "average and marginal cost", "TC = FC + VC. Answer: fixed cost and variable cost."],
          ["E", "Total revenue is calculated as", "price multiplied by quantity sold", "cost minus profit", "fixed cost plus profit", "quantity divided by price", "Sales value equals price times quantity."],
          ["M", "The cost of feed on a poultry farm is a", "variable cost", "fixed cost", "sunk cost", "capital reserve", "It changes with flock size."],
          ["M", "Average product is obtained by dividing total product by", "units of the variable input", "total cost", "price", "marginal product", "AP is output per unit of input."],
          ["M", "If total product rises from 36 to 44 bags when one more bag of fertiliser is added, the marginal product is", "8 bags", "44 bags", "80 bags", "11 bags", "It is the change in output."],
          ["M", "Gross margin equals total revenue minus", "total variable cost", "total fixed cost", "total output", "marginal cost", "Fixed costs are not deducted."],
          ["H", "When total product is at its maximum, marginal product is", "zero", "at its maximum", "negative", "equal to average product", "No extra output is added."],
          ["H", "With total revenue of ₦600,000, variable costs of ₦350,000 and fixed costs of ₦100,000, the net farm income is", "₦150,000", "₦250,000", "₦450,000", "₦500,000", "600,000 minus 450,000."],
          ["H", "The law of diminishing returns applies when", "a variable input is increased while another input is fixed", "all inputs are increased together", "no input is used", "prices are falling", "At least one factor must be fixed."],
        ],
      },
      {
        week: 3,
        title: "Farm management and accounts",
        subtopics: ["Farm management decisions", "Farm records and inventory valuation", "Depreciation", "Profit and loss account and balance sheet"],
        objectives: ["Explain farm management decisions", "Value farm inventory", "Calculate depreciation by the straight-line method", "Prepare a simple profit and loss account and balance sheet"],
        lesson: {
          title: "Measuring the Farm's Performance",
          summary: "Calculate depreciation and prepare simple farm accounts.",
          minutes: 45,
          notes: `## Farm management
the application of **economic principles** to organise land, labour and capital for **maximum profit**.
Decisions: **what** to produce, **how much**, **how** (methods and input combinations), **when** to buy and sell, and **where** to market.
Functions of the manager: planning, organising, directing, controlling, evaluating.
Tools: farm records, budgets, accounts, market information.

## Inventory and valuation
an **inventory** lists all assets and their values at a date. Valuation methods: **cost price**, **market price**, **net selling price**, and **cost less depreciation** for machines.

## Depreciation
the **loss in value of an asset** through wear, tear, age and obsolescence.
**Straight-line method:**
**annual depreciation = (cost − salvage value) ÷ useful life**
Example: a tractor bought for ₦12,000,000, salvage value ₦2,000,000, useful life 10 years:
depreciation = (12,000,000 − 2,000,000) ÷ 10 = **₦1,000,000 per year**.
Value after 3 years = 12,000,000 − 3,000,000 = **₦9,000,000**.
**Appreciation** is a gain in value (e.g. land, growing livestock).

## Profit and loss account
shows income and expenditure for a period.
| Expenditure | ₦ | Income | ₦ |
|---|---|---|---|
| feed | 400,000 | sale of eggs | 900,000 |
| labour | 150,000 | sale of old layers | 200,000 |
| drugs | 50,000 | sale of manure | 50,000 |
| depreciation | 100,000 | | |
| **net profit** | **450,000** | | |
| | 1,150,000 | | 1,150,000 |
**Net profit = total income − total expenditure**; if expenditure is greater, the difference is a **net loss**.

## Balance sheet
a statement of **assets** and **liabilities** on a particular date.
- **assets**: **fixed** (land, buildings, machinery, breeding stock) and **current** (cash, stock of feed and produce, debtors)
- **liabilities**: **long-term** (bank loans) and **current** (creditors, overdraft)
- **net worth (owner's equity) = total assets − total liabilities**
Example: assets ₦8,000,000; liabilities ₦3,000,000 → net worth **₦5,000,000**.
A farm is **solvent** when its assets exceed its liabilities.`,
          examples: `**Example 1.** A sprayer costs ₦120,000, has a salvage value of ₦20,000 and lasts 5 years. Find the annual depreciation. *Answer:* (120,000 − 20,000) ÷ 5 = **₦20,000**.

**Example 2.** Assets ₦8,000,000; liabilities ₦3,000,000. Find the net worth. *Answer:* **₦5,000,000**.

**Example 3.** Is a bank loan an asset or a liability? *Answer:* a **liability**.`,
        },
        questions: [
          ["E", "The loss in value of a farm machine over time is", "depreciation", "appreciation", "salvage", "inventory", "Machines wear out."],
          ["E", "A statement of the assets and liabilities of a farm on a given date is the", "balance sheet", "cash book", "farm diary", "payroll", "It shows financial position."],
          ["E", "What a farm owes to others is its", "liabilities", "assets", "net worth", "income", "Debts are liabilities."],
          ["M", "A sprayer bought for ₦120,000 with a salvage value of ₦20,000 and a life of 5 years depreciates each year by", "₦20,000", "₦24,000", "₦28,000", "₦100,000", "100,000 divided by 5."],
          ["M", "Net worth is calculated as", "total assets minus total liabilities", "income minus expenditure", "fixed assets plus loans", "revenue plus cost", "It is the owner's equity."],
          ["M", "Which of these is a current asset?", "cash in hand", "farm buildings", "tractor", "land", "It is readily usable."],
          ["M", "An account showing income and expenditure for a period is the", "profit and loss account", "balance sheet", "inventory", "valuation", "It reveals profit or loss."],
          ["H", "A tractor costing ₦12,000,000 with a salvage value of ₦2,000,000 and a life of 10 years is worth, after 3 years,", "₦9,000,000", "₦10,000,000", "₦3,000,000", "₦8,400,000", "It loses ₦1,000,000 each year."],
          ["H", "A farm with assets of ₦8,000,000 and liabilities of ₦3,000,000 has a net worth of", "₦5,000,000", "₦11,000,000", "₦3,000,000", "₦8,000,000", "8,000,000 minus 3,000,000."],
          ["H", "A farm whose total assets exceed its total liabilities is said to be", "solvent", "bankrupt", "insolvent", "liquidated", "It can meet its debts."],
        ],
      },
      {
        week: 4,
        title: "Marketing of agricultural produce",
        subtopics: ["Marketing channels and agents", "Marketing functions and margins", "Commodity boards and co-operatives", "Export marketing and problems"],
        objectives: ["Analyse marketing channels and agents", "Explain marketing functions and calculate marketing margins", "Evaluate the roles of commodity boards and co-operatives", "Discuss export marketing and marketing problems"],
        lesson: {
          title: "Marketing Farm Produce Efficiently",
          summary: "Analyse marketing channels, margins and institutions.",
          minutes: 45,
          notes: `## Marketing
all activities that move produce **from the farm to the final consumer** in the form, place and time required.

## Channels and agents
**producer → local assembler (bulker) → wholesaler → retailer → consumer**; or producer → co-operative → processor/exporter.
Agents: producers, **middlemen** (assemblers, wholesalers, retailers, commission agents, brokers), **processors**, **co-operatives**, **exporters**, government agencies.
**Advantages of middlemen:** bulk-breaking; transport; storage; credit to farmers; market information. **Disadvantages:** they raise consumer prices, may hoard, and may underpay farmers.

## Marketing functions
- **exchange functions**: buying and selling; pricing
- **physical functions**: assembling, **processing**, **storage**, **transportation**, packaging
- **facilitating functions**: **grading and standardisation**, financing, **risk bearing**, market information, advertising

## Marketing margin
**marketing margin = retail price − farm-gate price**.
Example: a farmer sells yam at ₦1,500 per tuber and the consumer pays ₦2,400. Margin = **₦900**; the farmer's share = 1,500 ÷ 2,400 × 100 = **62.5%**.
A large margin may reflect high transport and storage costs or excessive middlemen's profit.

## Commodity (marketing) boards
set up from the 1940s for **cocoa, groundnut, palm produce, cotton**, etc.
Functions: fixed **producer prices**; bought produce through licensed buying agents; graded and exported; stabilised prices; funded research.
Criticisms: paid farmers far below world prices; inefficiency. They were **abolished in 1986** under the Structural Adjustment Programme.

## Co-operative marketing
members' produce is pooled, graded, stored and sold in bulk, giving **bargaining power**, lower transport costs and access to credit.

## Export marketing
main agricultural exports: **cocoa, sesame, cashew nuts, rubber, ginger, shea products, hibiscus**. Requirements: **grading** and quality standards; **phytosanitary certificates** from quarantine services; proper packaging; export documentation.

## Problems
poor roads and transport; inadequate storage and processing; **perishability**; price fluctuation; lack of standard measures and grades; poor market information; multiple levies on the roads; inadequate credit; rejection of exports for failing standards.

## Improving marketing
rural roads; storage and cold chains; processing; standard weights and grades; market information by phone and radio; co-operatives; commodity exchanges.`,
          examples: `**Example 1.** The farm-gate price is ₦1,500 and the retail price ₦2,400. Find the marketing margin. *Answer:* **₦900**.

**Example 2.** In what year were the commodity boards abolished? *Answer:* **1986**.

**Example 3.** Give one advantage of co-operative marketing. *Answer:* Greater **bargaining power** through bulk sales.`,
        },
        questions: [
          ["E", "The difference between the retail price and the farm-gate price is the", "marketing margin", "net worth", "gross margin", "depreciation", "It covers marketing costs and profits."],
          ["E", "People who link producers with consumers in marketing are", "middlemen", "extension agents", "surveyors", "breeders", "They buy and resell."],
          ["E", "Sorting produce into classes of similar quality is", "grading", "bulking", "hoarding", "financing", "Grades help pricing."],
          ["M", "If a farmer receives ₦1,500 for a tuber sold to consumers at ₦2,400, the marketing margin is", "₦900", "₦3,900", "₦1,500", "₦2,400", "2,400 minus 1,500."],
          ["M", "Commodity marketing boards in Nigeria were abolished in", "1986", "1960", "1977", "1999", "Under the Structural Adjustment Programme."],
          ["M", "Storage, transportation and processing are classified as", "physical functions of marketing", "exchange functions", "facilitating functions", "production functions", "They handle the produce physically."],
          ["M", "A certificate showing that exported plant produce is free from pests and diseases is a", "phytosanitary certificate", "certificate of occupancy", "bill of lading", "invoice", "Quarantine services issue it."],
          ["H", "In the yam example, the farmer's share of the consumer price is", "62.5%", "37.5%", "160%", "50%", "1,500 divided by 2,400, times 100."],
          ["H", "A major criticism of the commodity boards was that they", "paid farmers far below world prices", "paid farmers too much", "refused to grade produce", "exported no produce", "Surpluses were taken from farmers."],
          ["H", "Financing, risk bearing and market information are", "facilitating functions", "physical functions", "exchange functions", "storage functions", "They support the marketing process."],
        ],
      },
      {
        week: 5,
        title: "Agricultural insurance",
        subtopics: ["Meaning and importance of agricultural insurance", "Insurance terms", "Types of agricultural insurance", "Problems of agricultural insurance in Nigeria"],
        objectives: ["Explain agricultural insurance and its importance", "Define key insurance terms", "Identify types of agricultural insurance policies", "Discuss problems of agricultural insurance"],
        lesson: {
          title: "Protecting the Farmer Against Loss",
          summary: "Explain how agricultural insurance works and its problems.",
          minutes: 45,
          notes: `## Risks and uncertainties in agriculture
**natural**: drought, flood, storms, fire, pests and disease outbreaks; **economic**: price falls, rising input costs, loss of markets; **social**: theft, conflict; **technical**: machine breakdown.

## Agricultural insurance
an arrangement in which a farmer pays a small, regular sum (**premium**) to an insurer, who undertakes to **compensate (indemnify)** the farmer for specified losses.
It works by **pooling of risks** — many farmers contribute and the few who suffer losses are compensated.

## Importance
- **compensates** farmers and helps them return to production after a loss
- gives **confidence to invest** in new technology
- serves as **security** for bank loans, encouraging lending to agriculture
- stabilises farm income
- promotes large-scale farming

## Terms
| Term | Meaning |
|---|---|
| **insurer** | the insurance company |
| **insured** | the farmer who takes the policy |
| **premium** | the regular payment made by the insured |
| **policy** | the written contract |
| **indemnity** | compensation paid for a loss, restoring the farmer to the earlier position — no profit |
| **claim** | the request for compensation |
| **sum insured** | the maximum amount payable |
| **insurable interest** | the insured must stand to lose financially from the damage |

## Types of policies
- **crop insurance** — against fire, flood, drought, storm, pests and diseases
- **livestock insurance** — death from disease, accident or fire
- **farm buildings and machinery insurance**
- **produce in store and in transit**
- **farm workers' insurance** (accident, life)
- **weather-index insurance** — pays out when rainfall or temperature passes a set level

## Agricultural insurance in Nigeria
the **Nigerian Agricultural Insurance Scheme** began in **1987**, operated by the **Nigerian Agricultural Insurance Corporation (NAIC)**. Government **subsidises** part of the premium for small farmers. Bank loans to agriculture are often required to be insured.

## Example
a poultry farmer insures 1,000 layers valued at ₦5,000,000 at a premium rate of 5%: premium = 5% of 5,000,000 = **₦250,000**.

## Problems
low awareness among farmers; inability to pay premiums; small, scattered farms that are costly to assess; lack of records; delays in settling claims; fraud (false claims); few trained assessors; difficulty measuring losses.`,
          examples: `**Example 1.** What is a premium? *Answer:* The **regular payment** made by the insured to the insurer.

**Example 2.** Which body operates agricultural insurance in Nigeria? *Answer:* the **Nigerian Agricultural Insurance Corporation (NAIC)**.

**Example 3.** A flock valued at ₦5,000,000 is insured at 5%. Find the premium. *Answer:* **₦250,000**.`,
        },
        questions: [
          ["E", "The regular payment made by an insured farmer is the", "premium", "indemnity", "claim", "dividend", "It buys the cover."],
          ["E", "Compensation paid to a farmer for an insured loss is", "indemnity", "premium", "interest", "subsidy", "It restores the farmer's position."],
          ["E", "The written contract of insurance is the", "policy", "invoice", "receipt", "inventory", "It states the terms."],
          ["M", "The corporation that operates agricultural insurance in Nigeria is", "NAIC", "NAFDAC", "NIFOR", "NCRI", "Nigerian Agricultural Insurance Corporation."],
          ["M", "Insurance works on the principle of", "pooling of risks", "price fixing", "land consolidation", "diminishing returns", "Many contribute; few are compensated."],
          ["M", "A flock valued at ₦5,000,000 insured at a premium rate of 5% attracts a premium of", "₦250,000", "₦25,000", "₦500,000", "₦2,500,000", "5% of 5,000,000."],
          ["M", "Insurance that pays out when rainfall falls below a set level is", "weather-index insurance", "livestock mortality insurance", "fire insurance", "transit insurance", "The payout is tied to weather data."],
          ["H", "Agricultural insurance encourages banks to lend to farmers because", "an insured farm serves as security for the loan", "it removes the need for repayment", "it raises interest rates", "it replaces collateral law", "The bank's risk is reduced."],
          ["H", "The Nigerian Agricultural Insurance Scheme started in", "1987", "1977", "1960", "2001", "NAIC was set up to run it."],
          ["H", "A problem of agricultural insurance in Nigeria is", "delays in the settlement of claims", "too many trained assessors", "excessive awareness", "very large uniform farms", "Farmers wait long for compensation."],
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
        title: "Agricultural extension in detail",
        subtopics: ["Objectives of extension", "Extension teaching methods compared", "Adoption of innovations", "Problems and prospects of extension"],
        objectives: ["State the objectives of agricultural extension", "Compare individual, group and mass extension methods", "Explain the adoption process and adopter categories", "Discuss problems of extension and ways forward"],
        lesson: {
          title: "Spreading Innovations to Farmers",
          summary: "Explain extension methods and how farmers adopt new practices.",
          minutes: 45,
          notes: `## Objectives of extension
to **teach farmers improved practices**; increase production and income; raise living standards; link **research, farmers and input agencies**; help farmers identify and solve their problems; encourage farmer organisations and co-operatives; promote resource conservation.

## Extension methods
| Category | Methods | Advantages | Disadvantages |
|---|---|---|---|
| **individual** | farm and home visits, office calls, letters, phone calls | personal attention; builds trust; specific advice | slow; costly; few farmers reached |
| **group** | **method demonstration**, **result demonstration**, field days, lectures, group discussions, excursions, **farmer field schools**, agricultural shows | more farmers reached; farmers learn from one another; "seeing is believing" | individual problems may be missed; needs organisation |
| **mass media** | radio, television, posters, leaflets, newspapers, film, mobile phones, social media | reaches very many people quickly and cheaply | no feedback; needs literacy or equipment; general messages |

## The adoption process
farmers pass through five stages before taking up an innovation:
1. **awareness** — first hears of the idea
2. **interest** — seeks more information
3. **evaluation** — weighs its benefits and risks mentally
4. **trial** — tries it on a small scale
5. **adoption** — uses it fully

## Adopter categories
**innovators** (first to try), **early adopters**, **early majority**, **late majority**, **laggards** (last). Extension workers often work first with **contact farmers** who influence others.

## Factors affecting adoption
cost and profitability of the innovation; simplicity; compatibility with culture; education, age and income of the farmer; farm size; access to credit and inputs; risk; contact with extension.

## Qualities of an extension worker
sound technical knowledge; communication and teaching skill; patience; honesty; respect for farmers' culture; leadership; initiative.

## Problems
too few agents (high farmer-to-agent ratio); poor funding and mobility; weak research–extension links; illiteracy; language barriers; conservatism; late or unavailable inputs; poor rural infrastructure.

## Prospects
ICT-based advisory services; farmer field schools; private and NGO extension; training and visit systems; youth and women-focused programmes.`,
          examples: `**Example 1.** List the stages of adoption in order. *Answer:* **awareness, interest, evaluation, trial, adoption**.

**Example 2.** Which extension method reaches the most people quickly? *Answer:* **mass media** (radio, television).

**Example 3.** Who are laggards? *Answer:* The **last group to adopt** an innovation.`,
        },
        questions: [
          ["E", "The first stage in the adoption of an innovation is", "awareness", "trial", "adoption", "evaluation", "The farmer first hears of it."],
          ["E", "A farm visit by an extension agent is", "an individual method", "a mass method", "a group method", "a demonstration plot", "One farmer is advised."],
          ["E", "Radio programmes for farmers are a", "mass media method", "group method", "individual method", "trial method", "Many listeners are reached."],
          ["M", "The stage at which a farmer tries an innovation on a small scale is", "trial", "interest", "awareness", "adoption", "It is tested before full use."],
          ["M", "The last group of farmers to adopt an innovation are the", "laggards", "innovators", "early adopters", "early majority", "They are slow to change."],
          ["M", "A disadvantage of mass media methods is that they", "give little opportunity for feedback", "reach very few people", "are too slow", "need one-to-one contact", "Communication is one-way."],
          ["M", "Showing farmers the outcome of an improved practice beside the old one is a", "result demonstration", "method demonstration", "home visit", "office call", "Results convince farmers."],
          ["H", "The correct order of the adoption process is", "awareness, interest, evaluation, trial, adoption", "interest, awareness, trial, evaluation, adoption", "trial, awareness, interest, adoption, evaluation", "awareness, trial, interest, evaluation, adoption", "Mental evaluation comes before trial."],
          ["H", "An innovation is more readily adopted when it is", "simple, profitable and compatible with farmers' culture", "complex and costly", "risky and unfamiliar", "against local beliefs", "Farmers weigh benefits and fit."],
          ["H", "A high farmer-to-extension-agent ratio means that", "each agent serves too many farmers", "there are too many agents", "farmers are few", "extension is well funded", "Coverage is inadequate."],
        ],
      },
      {
        week: 2,
        title: "Crop improvement and plant genetics",
        subtopics: ["Aims of crop improvement", "Methods of crop improvement in detail", "Application of Mendel's laws to crops", "Biotechnology in crop improvement"],
        objectives: ["State the aims of crop improvement", "Evaluate introduction, selection and hybridisation", "Apply Mendel's laws to simple crop crosses", "Explain the use of biotechnology in crop improvement"],
        lesson: {
          title: "Breeding Better Crops",
          summary: "Evaluate crop improvement methods and apply genetics to crops.",
          minutes: 45,
          notes: `## Aims
higher yield; improved quality (nutrient content, taste, colour); resistance to pests, diseases and lodging; early maturity; tolerance of drought, heat, salinity and poor soils; adaptation to mechanised harvesting; uniformity; better storage and processing quality.

## Methods
| Method | Advantages | Disadvantages |
|---|---|---|
| **introduction** | quick and cheap way to obtain superior varieties; widens the genetic base | may not adapt; may introduce new pests, diseases and weeds — must pass **quarantine** |
| **selection** — **mass**, **pure line**, **pedigree**, **progeny** | simple; retains adapted material | slow; cannot create new characters |
| **hybridisation** — **intra-specific** (within a species), **inter-specific** (between species), **inter-varietal** | combines desirable characters of two parents; **hybrid vigour** | technical and costly; hybrid seed must be bought each season; takes years to stabilise |
| **mutation breeding** | creates new variation using radiation or chemicals | most mutations are harmful |
| **polyploidy** | larger plants and fruits | often reduced fertility |

## Steps in hybridisation
select parents → **emasculate** the female parent (remove anthers before they shed pollen) → **bag** the flower → **pollinate** with pollen from the male parent → re-bag and label → harvest seed → grow and **select** over generations → test in multi-location trials → release and **multiply seed**.

## Mendel's laws applied
cross pure **tall (TT)** × pure **dwarf (tt)** maize: F₁ all **Tt (tall)**; F₂ ratio **3 tall : 1 dwarf**.
**Back-cross**: crossing a hybrid to one of its parents — used to transfer a single trait such as disease resistance into a good variety.
**Self-pollinated** crops (rice, cowpea, groundnut, tomato) breed true; **cross-pollinated** crops (maize, oil palm, cocoa) are variable and suited to hybrid production.

## Biotechnology
- **tissue culture (micropropagation)** — rapid multiplication of disease-free plantlets from small pieces of tissue (banana, cassava, yam)
- **genetic engineering** — transferring a gene from one organism to another to produce **genetically modified (GM)** crops, e.g. insect-resistant (Bt) cotton and cowpea
- **marker-assisted selection** — using DNA markers to speed up breeding
Regulation: Nigeria's **National Biosafety Management Agency** oversees GM crops.

## Achievements in Nigeria
improved cassava (mosaic-resistant, vitamin A "yellow" varieties), early-maturing maize, Striga-tolerant maize, pod-borer-resistant cowpea, improved rice (e.g. FARO varieties, NERICA), tenera oil palm, hybrid cocoa.`,
          examples: `**Example 1.** Why are introduced varieties quarantined? *Answer:* To prevent the **entry of new pests and diseases**.

**Example 2.** What is a back-cross? *Answer:* Crossing a **hybrid with one of its parents**.

**Example 3.** What is tissue culture used for? *Answer:* **Rapid multiplication of disease-free plants**.`,
        },
        questions: [
          ["E", "A crop improvement method that brings varieties in from other countries is", "introduction", "selection", "mutation", "polyploidy", "The variety is imported."],
          ["E", "Offspring from a cross between two genetically different parents is a", "hybrid", "clone", "mutant", "pure line", "It combines parental characters."],
          ["E", "Maize is naturally", "cross-pollinated", "self-pollinated", "propagated by cuttings", "seedless", "Wind carries its pollen."],
          ["M", "Rapid multiplication of plantlets from small pieces of tissue is", "tissue culture", "grafting", "layering", "mass selection", "It gives disease-free plants."],
          ["M", "Crossing a hybrid with one of its parents is a", "back-cross", "test for dormancy", "pure line", "mutation", "It transfers a trait to a good variety."],
          ["M", "A disadvantage of hybrid seed is that", "it must be bought every season", "it yields less than local seed", "it cannot germinate", "it has no vigour", "Saved seed does not breed true."],
          ["M", "Selection as a breeding method cannot", "create new characters", "identify good plants", "retain adapted plants", "improve uniformity", "It only picks from existing variation."],
          ["H", "Transferring a gene from one organism into a crop to give it a new trait is", "genetic engineering", "mass selection", "introduction", "polyploidy", "It produces GM crops."],
          ["H", "In hybridisation, flowers are bagged after emasculation in order to", "prevent unwanted pollen from reaching the stigma", "increase the temperature", "kill insects", "speed up ripening", "Only chosen pollen is used."],
          ["H", "A self-pollinated crop that breeds true is", "cowpea", "maize", "oil palm", "cocoa", "Its flowers pollinate themselves."],
        ],
      },
      {
        week: 3,
        title: "Agricultural policies and programmes in Nigeria",
        subtopics: ["Objectives of agricultural policy", "Past programmes and their impact", "Recent programmes and agencies", "Evaluation of policies"],
        objectives: ["State the objectives of agricultural policy", "Describe past agricultural programmes", "Describe recent programmes and agencies", "Evaluate reasons for success and failure of programmes"],
        lesson: {
          title: "Government and Agricultural Development",
          summary: "Describe and evaluate Nigeria's agricultural policies and programmes.",
          minutes: 45,
          notes: `## Objectives of agricultural policy
self-sufficiency in **food**; raw materials for **industry**; **export** earnings; rural **employment** and income; conservation of natural resources; improved rural living standards; modernisation of production, storage, processing and marketing.

## Past programmes
| Programme | Year | Main features |
|---|---|---|
| **Farm Settlement Scheme** | from 1959 | young school-leavers settled on planned farms |
| **National Accelerated Food Production Programme (NAFPP)** | 1972 | improved seeds and practices for rice, maize, sorghum, millet, cassava |
| **Agricultural Development Projects (ADPs)** | from 1975 | World Bank-assisted; extension, inputs, rural roads and water |
| **River Basin Development Authorities (RBDAs)** | 1976 | dams, irrigation, flood control |
| **Operation Feed the Nation (OFN)** | 1976 | mass mobilisation; everyone encouraged to farm |
| **Land Use Decree** | 1978 | land vested in state governors |
| **Green Revolution** | 1980 | self-sufficiency through inputs and mechanisation |
| **Directorate of Food, Roads and Rural Infrastructure (DFRRI)** | 1986 | rural roads, water and electricity |
| **National Agricultural Land Development Authority (NALDA)** | 1991 | land clearing and development for small farmers |
| **National Fadama Development Project** | from 1990s | small-scale irrigation in flood plains |
| **National Special Programme for Food Security** | 2002 | |

## Recent initiatives
**Agricultural Transformation Agenda** (2011 — agriculture as a business; e-wallet for inputs); **Anchor Borrowers' Programme** (2015 — CBN input loans linked to processors); **Agriculture Promotion Policy** (2016); youth and women agripreneur schemes.

## Supporting agencies
research institutes; **National Agricultural Seeds Council**; **NAFDAC** and **SON** (standards); quarantine service; **Bank of Agriculture**; **NAIC**; strategic grain reserves.

## Why many programmes failed
- **policy inconsistency** — programmes changed with each government
- inadequate **funding** and late release of funds
- **corruption** and diversion of inputs
- poor **planning, monitoring and evaluation**
- little involvement of **real farmers**; benefits captured by non-farmers
- poor infrastructure and marketing
- shortage of skilled personnel

## Ways forward
continuity of policy; timely inputs; farmer participation; investment in roads, storage and irrigation; credit and insurance; research and extension; transparency.`,
          examples: `**Example 1.** Which programme of 1976 encouraged everyone to farm? *Answer:* **Operation Feed the Nation**.

**Example 2.** Which bodies manage dams and irrigation? *Answer:* the **River Basin Development Authorities**.

**Example 3.** Give one reason agricultural programmes failed. *Answer:* **policy inconsistency** (or poor funding).`,
        },
        questions: [
          ["E", "An objective of agricultural policy in Nigeria is", "self-sufficiency in food production", "reducing food output", "increasing food imports", "discouraging farming", "The nation should feed itself."],
          ["E", "The Green Revolution programme was launched in", "1980", "1976", "1986", "1972", "It followed Operation Feed the Nation."],
          ["E", "The World Bank-assisted state projects that provide extension and inputs are the", "ADPs", "RBDAs", "NALDA", "DFRRI", "Agricultural Development Projects."],
          ["M", "DFRRI, established in 1986, was mainly concerned with", "rural roads, water and electricity", "cocoa exports", "livestock vaccination only", "fish imports", "It provided rural infrastructure."],
          ["M", "The programme that links small farmers to processors with CBN input loans is the", "Anchor Borrowers' Programme", "Farm Settlement Scheme", "NAFPP", "Green Revolution", "It began in 2015."],
          ["M", "The National Fadama Development Project promotes", "small-scale irrigation in flood plains", "deep-sea fishing", "forest reserves", "cattle ranching only", "Fadama are flood-plain lands."],
          ["M", "The National Accelerated Food Production Programme was introduced in", "1972", "1980", "1991", "1959", "It promoted improved cereals and cassava."],
          ["H", "A major reason for the failure of many agricultural programmes in Nigeria is", "policy inconsistency between governments", "too much farmer participation", "excess funding released early", "perfect monitoring", "Programmes were often abandoned."],
          ["H", "NALDA was set up in 1991 mainly to", "develop land for small-scale farmers", "regulate drugs", "insure crops", "build universities", "It cleared and prepared farmland."],
          ["H", "The e-wallet system for delivering subsidised inputs to farmers was introduced under the", "Agricultural Transformation Agenda", "Operation Feed the Nation", "Farm Settlement Scheme", "Land Use Decree", "It used mobile phones from 2011."],
        ],
      },
      {
        week: 4,
        title: "Environmental degradation and climate-smart agriculture",
        subtopics: ["Forms of land degradation", "Pollution from agriculture", "Climate change and agriculture", "Climate-smart and conservation agriculture"],
        objectives: ["Describe forms of land degradation", "Explain agricultural sources of pollution", "Explain the links between climate change and agriculture", "Describe climate-smart and conservation practices"],
        lesson: {
          title: "Farming for the Future",
          summary: "Explain land degradation, pollution and climate-smart agriculture.",
          minutes: 45,
          notes: `## Land degradation
the **decline in the productive capacity of land**.
| Form | Causes |
|---|---|
| **soil erosion** | deforestation, overgrazing, tillage on slopes, bush burning |
| **desertification** | overgrazing, fuel-wood cutting, drought — advancing in the far north |
| **nutrient depletion** | continuous cropping without replacement; leaching |
| **soil acidification** | acid-forming fertilisers; leaching |
| **salinisation** | poor irrigation practice |
| **compaction** | heavy machinery; trampling |
| **oil pollution** | spills in the Niger Delta |
| **mining damage** | pits and tailings (e.g. Jos Plateau) |

## Pollution from agriculture
- **fertiliser run-off** → **eutrophication** (excess nutrients cause algal blooms that use up oxygen and kill fish)
- **pesticide residues** in food, soil and water; harm to bees and other non-target organisms
- **livestock wastes** → odour, water contamination, **methane**
- **bush burning** → smoke and loss of soil carbon
- processing wastes (cassava effluent, palm oil mill effluent)

## Climate change and agriculture
- **agriculture is affected by** climate change: erratic rains, drought, floods, heat stress, new pests, shrinking Lake Chad, sea-level rise in coastal areas
- **agriculture contributes to** climate change through **methane** (ruminants, flooded rice), **nitrous oxide** (nitrogen fertilisers), and **carbon dioxide** (deforestation, burning, fuel use)

## Climate-smart agriculture
farming that **increases productivity sustainably**, **adapts** to climate change and **reduces greenhouse-gas emissions**.
Practices:
- **drought-tolerant, early-maturing** and flood-tolerant varieties; heat-tolerant breeds
- **water harvesting**, efficient (drip) irrigation, mulching
- **agroforestry** and tree planting (carbon storage)
- improved pasture and feeding to reduce methane
- **integrated soil fertility management** (organic + moderate inorganic fertiliser)
- weather forecasts and early-warning information; crop insurance
- diversification of crops and income

## Conservation agriculture
three principles: **minimum soil disturbance** (zero or minimum tillage), **permanent soil cover** (mulch, cover crops), and **crop rotation/diversification**.

## Organic farming
production without synthetic fertilisers and pesticides, relying on compost, rotation and biological pest control.`,
          examples: `**Example 1.** What is eutrophication? *Answer:* **Enrichment of water with nutrients**, causing algal blooms that use up oxygen.

**Example 2.** Name a greenhouse gas produced by ruminants. *Answer:* **methane**.

**Example 3.** State one principle of conservation agriculture. *Answer:* **Minimum soil disturbance** (zero tillage).`,
        },
        questions: [
          ["E", "The decline in the productive capacity of land is", "land degradation", "land reclamation", "land consolidation", "land tenure", "The land loses productivity."],
          ["E", "The spread of desert-like conditions into formerly productive land is", "desertification", "afforestation", "irrigation", "eutrophication", "It advances in the far north."],
          ["E", "A greenhouse gas released by ruminant animals is", "methane", "oxygen", "nitrogen", "argon", "It is produced in the rumen."],
          ["M", "Excess nutrients in water bodies causing algal blooms and fish deaths is", "eutrophication", "salinisation", "compaction", "acidification", "Fertiliser run-off is a cause."],
          ["M", "Farming without synthetic fertilisers and pesticides is", "organic farming", "intensive farming", "plantation farming", "monoculture", "It relies on natural inputs."],
          ["M", "The greenhouse gas mainly associated with nitrogen fertilisers is", "nitrous oxide", "ozone", "helium", "carbon monoxide", "It is released from fertilised soils."],
          ["M", "A principle of conservation agriculture is", "permanent soil cover", "frequent deep ploughing", "bush burning", "bare fallow", "Mulch and cover crops protect soil."],
          ["H", "Climate-smart agriculture aims to raise productivity, adapt to climate change and", "reduce greenhouse-gas emissions", "increase deforestation", "expand bush burning", "use more fossil fuel", "It has three goals."],
          ["H", "Flooded rice fields contribute to climate change mainly by releasing", "methane", "oxygen", "chlorine", "neon", "Anaerobic decay produces methane."],
          ["H", "Soil salinisation is most often caused by", "poor irrigation practices", "organic manure", "cover cropping", "zero tillage", "Salts accumulate as water evaporates."],
        ],
      },
      {
        week: 5,
        title: "Agricultural research and technology",
        subtopics: ["Agricultural research institutes and mandates", "The research–extension–farmer link", "ICT and precision agriculture", "Post-harvest technology"],
        objectives: ["Match research institutes with their mandates", "Explain the research–extension–farmer linkage", "Describe ICT and precision agriculture", "Explain post-harvest technology and loss reduction"],
        lesson: {
          title: "Research and Innovation in Agriculture",
          summary: "Relate research institutes, ICT and post-harvest technology to farm productivity.",
          minutes: 45,
          notes: `## Research institutes and mandates
| Institute | Location | Mandate |
|---|---|---|
| **IITA** — International Institute of Tropical Agriculture | Ibadan | cassava, yam, maize, cowpea, soya bean, banana/plantain |
| **CRIN** — Cocoa Research Institute of Nigeria | Ibadan | cocoa, kola, coffee, cashew, tea |
| **NIFOR** — Nigerian Institute for Oil Palm Research | near Benin City | oil palm, coconut, raffia, date palm |
| **RRIN** — Rubber Research Institute of Nigeria | Iyanomo, Benin | rubber |
| **NCRI** — National Cereals Research Institute | Badeggi | rice, soya bean, sugar cane, benniseed |
| **NRCRI** — National Root Crops Research Institute | Umudike | cassava, yam, cocoyam, potato, ginger |
| **IAR** — Institute for Agricultural Research | Zaria | sorghum, maize, cowpea, groundnut, cotton |
| **IAR&T** — Institute of Agricultural Research and Training | Ibadan | maize, kenaf, soils |
| **NIHORT** — National Horticultural Research Institute | Ibadan | fruits and vegetables |
| **LCRI** — Lake Chad Research Institute | Maiduguri | wheat, millet, barley |
| **NAPRI** — National Animal Production Research Institute | Zaria | livestock, pasture |
| **NVRI** — National Veterinary Research Institute | Vom | animal diseases and vaccines |
| **NIFFR** — National Institute for Freshwater Fisheries Research | New Bussa | freshwater fish |
| **NIOMR** — Nigerian Institute for Oceanography and Marine Research | Lagos | marine fisheries |
| **FRIN** — Forestry Research Institute of Nigeria | Ibadan | forestry |
| **NSPRI** — Nigerian Stored Products Research Institute | Ilorin | storage and post-harvest |
| **NAERLS** | Zaria | extension research and liaison |

## Research–extension–farmer linkage
researchers develop technologies → extension agents adapt and teach them → farmers adopt and give **feedback** on problems → researchers refine. Weak links slow adoption.

## ICT and precision agriculture
- **mobile phones** for market prices, weather alerts, advisory messages and payments
- **GPS and GIS** mapping of fields; **soil sensors**; **drones** for crop scouting and spraying; **satellite imagery**
- **precision agriculture** — applying inputs (seed, fertiliser, water) **at the right place, time and rate**, reducing waste and cost
- farm management software, e-extension, online marketplaces
- challenges: cost, connectivity, power, digital skills

## Post-harvest technology
**post-harvest losses** occur during harvesting, threshing, drying, storage, transport and marketing.
Reduction measures: timely harvesting; proper **drying** to safe moisture content; improved stores (**silos, hermetic bags**); **cold chain** for perishables; careful handling and packaging; processing (drying, canning, milling); pest control in stores; good roads.
**Aflatoxin**, a poison from the mould *Aspergillus flavus* on poorly dried groundnut and maize, is a major food-safety concern — prevented by rapid drying and dry storage.`,
          examples: `**Example 1.** Which institute researches oil palm? *Answer:* **NIFOR**.

**Example 2.** What is precision agriculture? *Answer:* Applying inputs at the **right place, time and rate** using technology.

**Example 3.** What produces aflatoxin? *Answer:* The mould ***Aspergillus flavus*** on poorly dried grains and groundnuts.`,
        },
        questions: [
          ["E", "The institute responsible for research on rubber in Nigeria is", "RRIN", "NIFOR", "CRIN", "NCRI", "Rubber Research Institute of Nigeria."],
          ["E", "The veterinary research institute that produces animal vaccines is located at", "Vom", "Umudike", "Badeggi", "Ilorin", "NVRI is in Plateau State."],
          ["E", "Losses that occur between harvesting and consumption are", "post-harvest losses", "pre-planting losses", "nursery losses", "breeding losses", "They occur after harvest."],
          ["M", "The institute with the mandate for rice research is", "NCRI, Badeggi", "NRCRI, Umudike", "NIHORT, Ibadan", "LCRI, Maiduguri", "National Cereals Research Institute."],
          ["M", "The institute concerned with storage of farm produce is", "NSPRI, Ilorin", "FRIN, Ibadan", "NAPRI, Zaria", "NIOMR, Lagos", "Nigerian Stored Products Research Institute."],
          ["M", "Applying inputs at the right place, time and rate using technology is", "precision agriculture", "shifting cultivation", "subsistence farming", "nomadism", "Waste is reduced."],
          ["M", "The institute responsible for wheat, millet and barley research is", "LCRI, Maiduguri", "CRIN, Ibadan", "RRIN, Benin", "NIFFR, New Bussa", "Lake Chad Research Institute."],
          ["H", "Aflatoxin contamination of groundnut and maize is caused by", "a mould growing on poorly dried produce", "a virus spread by aphids", "nematodes in the soil", "over-drying of grain", "Aspergillus flavus produces it."],
          ["H", "In the research–extension–farmer linkage, farmers contribute mainly by", "giving feedback on problems and results", "funding the institutes", "breeding new varieties in laboratories", "writing policies", "Feedback guides research."],
          ["H", "Airtight (hermetic) storage bags control storage insects by", "depriving them of oxygen", "adding moisture", "raising the temperature greatly", "feeding the insects", "Insects suffocate in sealed bags."],
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
        title: "WAEC revision: soil science and farm power",
        subtopics: ["Rocks, soil formation and properties", "Soil fertility, pH and nutrient cycles", "Farm power, machinery and surveying", "Irrigation and drainage"],
        objectives: ["Recall rock types, soil formation and physical properties", "Recall soil pH, nutrients and nutrient cycles", "Recall farm power, tractor systems and surveying equipment", "Recall irrigation and drainage systems"],
        lesson: {
          title: "Revising Soil Science and Mechanisation",
          summary: "Consolidate soil science and farm mechanisation for WAEC/NECO.",
          minutes: 45,
          notes: `## Rocks and soil
igneous (granite, basalt), sedimentary (sandstone, limestone, shale — strata, fossils), metamorphic (marble, slate, quartzite, gneiss). Factors of soil formation: parent material, climate, organisms, topography, time. Weathering: physical, chemical (hydrolysis, oxidation, carbonation), biological.
Texture: sand, silt, clay proportions (clay below 0.002 mm). Structure: crumb best. Water: gravitational, **capillary (available)**, hygroscopic; available water = field capacity − wilting point.

## Soil chemistry
pH scale 0–14; most crops 6–7. Acidity from leaching and acid fertilisers; corrected by **liming** (limestone, quicklime, slaked lime, dolomite). CEC: clay and humus hold cations.
Macro-nutrients N, P, K, Ca, Mg, S; micro-nutrients Fe, Zn, Mn, Cu, B, Mo.

## Nutrient cycles
nitrogen fixation (*Rhizobium*, *Azotobacter*, *Clostridium*, lightning); ammonification; nitrification (*Nitrosomonas* then *Nitrobacter*); denitrification (waterlogged soils). Carbon cycle: photosynthesis, respiration, decay, combustion. Water cycle.

## Farm power and machinery
human, animal, mechanical, electrical, solar, wind, water, biogas. Four-stroke cycle: induction, compression, power, exhaust; diesel ignites by compression. Tractor systems: fuel, cooling, lubrication, electrical, transmission, hydraulic; PTO. Implements: plough (primary tillage), harrow (secondary), ridger, planter, cultivator, sprayer, combine harvester.

## Surveying
ranging poles, tape, Gunter's chain (100 links), arrows, pegs, beacons, prismatic compass (bearings), theodolite (angles). 1 ha = 10,000 m².

## Irrigation and drainage
surface (flood, basin, furrow), sprinkler, drip (most efficient), sub-surface. Problems: salinisation, waterlogging, bilharzia. Drainage: surface ditches and underground pipes.

## Land
tenure systems: communal, inheritance, leasehold, freehold; Land Use Act 1978 — Governor holds land in trust; rights of occupancy.`,
          examples: `**Example 1.** Which bacteria convert nitrite to nitrate? *Answer:* ***Nitrobacter***.

**Example 2.** A field is 250 m by 80 m. Find its area in hectares. *Answer:* 20,000 m² = **2 ha**.

**Example 3.** Which stroke follows compression? *Answer:* the **power** stroke.`,
        },
        questions: [
          ["E", "Limestone is an example of", "a sedimentary rock", "an igneous rock", "a metamorphic rock", "a volcanic rock", "It is formed from deposits."],
          ["E", "A soil with pH 5 is", "acidic", "neutral", "alkaline", "saline only", "Values below 7 are acidic."],
          ["E", "The implement used after ploughing to break clods is the", "harrow", "ridger", "planter", "sprayer", "It does secondary tillage."],
          ["M", "The bacteria that convert nitrite to nitrate are", "Nitrobacter", "Nitrosomonas", "Azotobacter", "Clostridium", "They complete nitrification."],
          ["M", "A field measuring 250 m by 80 m has an area of", "2 hectares", "20 hectares", "0.2 hectare", "200 hectares", "20,000 m² divided by 10,000."],
          ["M", "Quartzite is a metamorphic rock formed from", "sandstone", "limestone", "shale", "granite", "Heat and pressure change sandstone."],
          ["M", "The stroke that follows the compression stroke in an engine is the", "power stroke", "induction stroke", "exhaust stroke", "idle stroke", "Fuel burns and drives the piston."],
          ["H", "A soil has a field capacity of 28% and a wilting point of 10%. The available water is", "18%", "38%", "10%", "28%", "28 minus 10. Answer: 18%."],
          ["H", "An anaerobic free-living nitrogen-fixing bacterium is", "Clostridium", "Azotobacter", "Rhizobium", "Nitrobacter", "It works without oxygen."],
          ["H", "Under the Land Use Act, a statutory right of occupancy is granted by the", "Governor", "Local Government", "village head", "federal minister", "It applies to urban land."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: crop production",
        subtopics: ["Husbandry of selected crops", "Pests, diseases and weeds", "Crop improvement", "Horticulture, forestry and pasture"],
        objectives: ["Recall the husbandry of selected crops", "Recall pests, diseases, weeds and their control", "Recall methods of crop improvement and genetics", "Recall horticulture, forestry and pasture management"],
        lesson: {
          title: "Revising Crop Production",
          summary: "Consolidate crop production topics for WAEC/NECO.",
          minutes: 45,
          notes: `## Husbandry outline
botanical name → varieties → climate and soil → land preparation → planting (date, method, spacing) → cultural practices → pests and diseases → harvesting → processing and storage → uses.
maize *Zea mays*; rice *Oryza sativa*; sorghum *Sorghum bicolor*; millet *Pennisetum glaucum*; cowpea *Vigna unguiculata*; groundnut *Arachis hypogaea*; yam *Dioscorea* spp.; cassava *Manihot esculenta*; cotton *Gossypium hirsutum*; cocoa *Theobroma cacao*; oil palm *Elaeis guineensis* (dura × pisifera = tenera); tomato *Solanum lycopersicum*; onion *Allium cepa*.

## Pests
complete (egg, larva, pupa, adult) and incomplete (egg, nymph, adult) metamorphosis. Stem borer *Busseola fusca*; grasshopper *Zonocerus variegatus*; mealybug *Phenacoccus manihoti*; mirid *Sahlbergella singularis*; cotton stainer *Dysdercus*; weevil *Sitophilus zeamais*; bruchid *Callosobruchus maculatus*. Control: cultural, physical, chemical, biological, IPM, quarantine.

## Diseases
black pod *Phytophthora palmivora*; smut *Ustilago maydis*; rice blast *Pyricularia oryzae*; cassava mosaic (whitefly); groundnut rosette (aphid); maize streak (leafhopper); swollen shoot (mealybug); bacterial blight; root knot *Meloidogyne*. Principles: exclusion, eradication, protection, resistance.

## Weeds
*Imperata cylindrica*, *Chromolaena odorata*, *Tridax procumbens*, *Cyperus rotundus*, *Striga*. Herbicides: selective/non-selective; pre-/post-emergence; contact/systemic.

## Crop improvement
introduction, selection, hybridisation (emasculation, bagging), mutation, tissue culture, genetic engineering. Mendel: segregation, independent assortment; F₂ 3 : 1; dihybrid 9 : 3 : 3 : 1.

## Horticulture
nursery practices: shading, watering, pricking out, hardening off, transplanting. Budding (citrus), grafting (mango).

## Forestry and agroforestry
regeneration (natural, artificial); thinning, beating up, pruning; taungya; alley cropping (*Leucaena*, *Gliricidia*); game reserves.

## Pasture
grasses: *Panicum maximum*, *Pennisetum purpureum*, *Andropogon gayanus*; legumes: *Centrosema pubescens*, *Stylosanthes gracilis*, *Pueraria phaseoloides*. Hay and silage; rotational grazing; carrying capacity.`,
          examples: `**Example 1.** Give the causal organism of rice blast. *Answer:* ***Pyricularia oryzae***.

**Example 2.** In a cross Tt × tt, what proportion of offspring are tall? *Answer:* **half** (1 Tt : 1 tt).

**Example 3.** What is the vector of groundnut rosette? *Answer:* the **aphid**.`,
        },
        questions: [
          ["E", "The botanical name of pearl millet is", "Pennisetum glaucum", "Sorghum bicolor", "Zea mays", "Oryza sativa", "It is a Sahel cereal."],
          ["E", "A herbicide applied before weeds emerge is a", "pre-emergence herbicide", "post-emergence herbicide", "contact insecticide", "fumigant", "It acts on germinating weeds."],
          ["E", "The practice of supporting tomato plants with sticks is", "staking", "pricking out", "budding", "thinning", "It keeps fruits off the soil."],
          ["M", "The cocoa mirid is", "Sahlbergella singularis", "Busseola fusca", "Sitophilus zeamais", "Dysdercus superstitiosus", "It sucks sap from cocoa pods."],
          ["M", "A cross between a heterozygous tall plant (Tt) and a dwarf plant (tt) gives offspring in the ratio", "1 tall : 1 dwarf", "3 tall : 1 dwarf", "all tall", "all dwarf", "Half receive T and half receive t."],
          ["M", "The cassava mealybug was successfully controlled in Africa by", "a parasitic wasp (biological control)", "burning all cassava", "flooding farms", "quarantine alone", "A natural enemy was released."],
          ["M", "A leguminous shrub used in alley cropping is", "Gliricidia", "Imperata", "Panicum", "Pennisetum", "It fixes nitrogen and gives mulch."],
          ["H", "The dihybrid F₂ phenotypic ratio is", "9 : 3 : 3 : 1", "3 : 1", "1 : 2 : 1", "1 : 1 : 1 : 1", "Two gene pairs assort independently."],
          ["H", "Planting disease-free cuttings and enforcing quarantine apply the control principle of", "exclusion", "protection", "eradication", "therapy", "The pathogen is kept out."],
          ["H", "The pasture legume Pueraria phaseoloides is commonly called", "tropical kudzu", "stylo", "centro", "calopo", "It is a vigorous cover crop."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: animal production",
        subtopics: ["Anatomy and physiology", "Nutrition and reproduction", "Management and health", "Fisheries, apiculture and products"],
        objectives: ["Recall the anatomy and physiology of farm animals", "Recall animal nutrition and reproduction", "Recall livestock management and health", "Recall fisheries, apiculture and livestock products"],
        lesson: {
          title: "Revising Animal Production",
          summary: "Consolidate animal production topics for WAEC/NECO.",
          minutes: 45,
          notes: `## Anatomy and physiology
ruminant stomach: rumen (fermentation), reticulum (cud), omasum (water absorption), abomasum (true stomach). Poultry: crop, proventriculus, gizzard, caeca, cloaca. Enzymes: pepsin, trypsin, amylase, lipase; bile from the liver. End products: glucose, amino acids, fatty acids and glycerol.
Male: testes (sperm, testosterone), epididymis (storage), vas deferens. Female: ovaries (ova, oestrogen, progesterone), oviduct (fertilisation), uterus. Hen: infundibulum, magnum (albumen), isthmus (membranes), uterus (shell); about 25 hours.

## Nutrition
energy and protein concentrates, roughages, supplements. Rations: balanced, maintenance, production. **Pearson square**; FCR = feed ÷ weight gain. Disorders: rickets, milk fever, bloat, grass tetany, anaemia.

## Reproduction
hormones: FSH, LH (ovulation), oestrogen (heat), progesterone (pregnancy), oxytocin (milk let-down), prolactin (milk production). Oestrus cycle: cow 21 days, ewe 17, doe 21, sow 21. Gestation: cow 283, ewe/doe 150, sow 114, rabbit 31 days.
Genetics and breeding: in-breeding (depression), cross-breeding (hybrid vigour), upgrading, AI, progeny testing.

## Management
colostrum; weaning; castration (burdizzo); dehorning; docking; flushing; steaming up; creep feeding; culling. Systems: extensive, semi-intensive, intensive. Heat stress lowers intake, growth, eggs and fertility.

## Health
anthrax *Bacillus anthracis*; brucellosis *Brucella abortus*; tuberculosis; Newcastle (virus); foot-and-mouth (virus); trypanosomiasis (*Trypanosoma*; tsetse fly); coccidiosis (*Eimeria*); aspergillosis (fungus). Parasites: *Taenia saginata* / *solium*, *Fasciola* (snail host), *Ascaris*, ticks. Control: vaccination, quarantine, sanitation, deworming, dipping.

## Range and pasture
carrying capacity; rotational, strip, deferred and zero grazing; reseeding; hay and silage.

## Fisheries and apiculture
monoculture, polyculture, integrated farming; fry and fingerlings; mesh size and closed season. Queen, drones, workers; Langstroth and top-bar hives.

## Products
dressing percentage = carcass ÷ live weight × 100; pasteurisation; candling; tanning; by-products (blood meal, bone meal).`,
          examples: `**Example 1.** Which hormone brings a female on heat? *Answer:* **oestrogen**.

**Example 2.** A pig weighing 80 kg gives a 60 kg carcass. Find the dressing percentage. *Answer:* 60 ÷ 80 × 100 = **75%**.

**Example 3.** Which organism causes coccidiosis? *Answer:* ***Eimeria*** (a protozoan).`,
        },
        questions: [
          ["E", "The hormone that brings a female animal on heat is", "oestrogen", "progesterone", "prolactin", "relaxin", "It is produced by ovarian follicles."],
          ["E", "The part of the hen's oviduct where the shell is formed is the", "uterus", "magnum", "isthmus", "infundibulum", "It is the shell gland."],
          ["E", "Draining marshy grazing land helps to control liver fluke because it removes the", "water snail", "tick", "tsetse fly", "earthworm", "Larval stages develop in it."],
          ["M", "An 80 kg pig that yields a 60 kg carcass has a dressing percentage of", "75%", "60%", "133%", "20%", "60 divided by 80, times 100."],
          ["M", "The hormone responsible for milk production is", "prolactin", "oxytocin", "testosterone", "FSH", "Oxytocin causes let-down."],
          ["M", "Mating a local cow repeatedly to a superior exotic bull over generations is", "upgrading", "in-breeding", "line-breeding", "culling", "Superior blood increases each generation."],
          ["M", "Brooder pneumonia (aspergillosis) in chicks is caused by a", "fungus", "virus", "bacterium", "protozoan", "Aspergillus grows on mouldy litter."],
          ["H", "To make an 18% crude protein ration from maize (9%) and soya bean meal (45%), the parts of maize required are", "27", "9", "36", "18", "45 minus 18. Answer: 27."],
          ["H", "In that ration, the percentage of soya bean meal is", "25%", "75%", "18%", "50%", "9 parts out of 36."],
          ["H", "Reduced fertility and vigour from mating close relatives is", "in-breeding depression", "heterosis", "hybrid vigour", "upgrading", "Harmful recessives appear."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: agricultural economics and extension",
        subtopics: ["Demand, supply and production economics", "Farm accounts, finance and insurance", "Marketing and policies", "Extension and examination technique"],
        objectives: ["Recall demand, supply and production principles", "Calculate depreciation, margins, interest and net worth", "Recall marketing institutions and agricultural policies", "Apply examination techniques to practical and theory questions"],
        lesson: {
          title: "Revising Agricultural Economics",
          summary: "Consolidate agricultural economics and practise examination technique.",
          minutes: 45,
          notes: `## Demand and supply
law of demand (price up, demand down); law of supply (price up, supply up); equilibrium where demand = supply; glut and scarcity; inelastic supply in the short run; buffer stocks and guaranteed prices.

## Production economics
factors: land (rent), labour (wages), capital (interest), management (profit). Law of diminishing returns. AP = TP ÷ input; MP = change in TP ÷ change in input; MP = 0 when TP is maximum. Fixed and variable costs; TC = FC + VC; TR = price × quantity; **gross margin = TR − TVC**; **net farm income = TR − TC**.

## Accounts
**depreciation = (cost − salvage value) ÷ useful life**; inventory; profit and loss account; balance sheet; **net worth = assets − liabilities**.

## Finance and insurance
short-, medium-, long-term credit; institutional and non-institutional sources; Bank of Agriculture; ACGSF (1977); **simple interest = P × R × T ÷ 100**. Insurance: premium, indemnity, policy; NAIC (1987).

## Marketing
channels; functions (exchange, physical, facilitating); **marketing margin = retail price − farm-gate price**; commodity boards (abolished 1986); co-operatives; export standards.

## Policies and programmes
NAFPP 1972; ADPs 1975; OFN and RBDAs 1976; Land Use Decree 1978; Green Revolution 1980; DFRRI 1986; NALDA 1991; ATA 2011; Anchor Borrowers' Programme 2015. Failures: inconsistency, poor funding, corruption.

## Extension
methods: individual, group, mass. Adoption: awareness, interest, evaluation, trial, adoption. Adopters: innovators … laggards.

## Environment
degradation, eutrophication, greenhouse gases, climate-smart and conservation agriculture.

## Examination technique
- **objective paper**: read every option; eliminate; mind NOT/EXCEPT; do not leave blanks
- **theory**: answer the number of questions required; use headings; give **botanical names**, examples and labelled diagrams; show working in calculations with units
- **practical (test of practical)**: identify specimens by correct name; state observable features, uses, maintenance or control; be precise and brief`,
          examples: `**Example 1.** A machine costs ₦900,000, has a salvage value of ₦100,000 and lasts 8 years. Find the annual depreciation. *Answer:* **₦100,000**.

**Example 2.** TR ₦800,000; TVC ₦500,000. Find the gross margin. *Answer:* **₦300,000**.

**Example 3.** Find the simple interest on ₦300,000 at 8% for 3 years. *Answer:* **₦72,000**.`,
        },
        questions: [
          ["E", "The reward for capital as a factor of production is", "interest", "rent", "wages", "profit", "Capital earns interest."],
          ["E", "When the price of a commodity falls, the quantity supplied normally", "falls", "rises", "doubles", "is unchanged", "Producers offer less at lower prices."],
          ["E", "The stage of adoption that follows awareness is", "interest", "trial", "adoption", "evaluation", "The farmer seeks more information."],
          ["M", "A machine costing ₦900,000 with a salvage value of ₦100,000 and a life of 8 years depreciates annually by", "₦100,000", "₦112,500", "₦125,000", "₦800,000", "800,000 divided by 8."],
          ["M", "With total revenue of ₦800,000 and total variable cost of ₦500,000, the gross margin is", "₦300,000", "₦1,300,000", "₦500,000", "₦800,000", "Revenue minus variable cost."],
          ["M", "The simple interest on ₦300,000 at 8% per year for 3 years is", "₦72,000", "₦24,000", "₦372,000", "₦7,200", "300,000 × 8 × 3 ÷ 100."],
          ["M", "The Agricultural Development Projects (ADPs) began in", "1975", "1986", "1991", "1960", "They were World Bank-assisted."],
          ["H", "If labour rises from 4 to 5 units and total product rises from 60 to 68 bags, the marginal product of the fifth unit is", "8 bags", "13.6 bags", "68 bags", "15 bags", "Change in output for one extra unit."],
          ["H", "A farm has fixed assets of ₦6,000,000, current assets of ₦1,500,000 and total liabilities of ₦2,500,000. Its net worth is", "₦5,000,000", "₦10,000,000", "₦3,500,000", "₦7,500,000", "7,500,000 minus 2,500,000."],
          ["H", "Supply of tomatoes rises sharply at harvest while demand is unchanged. The market price will", "fall", "rise", "remain fixed", "double", "A glut depresses prices."],
        ],
      },
    ],
  },
];
