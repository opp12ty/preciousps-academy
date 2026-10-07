import type { TermPlan } from "../types";

/** JSS3 Business Studies — original Precious PS content following the national Basic Education structure. */
export const jss3: TermPlan[] = [
  {
    classCode: "JSS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The trading account",
        subtopics: ["Meaning and purpose of the trading account", "Cost of goods sold", "Gross profit and gross loss", "Preparing a simple trading account"],
        objectives: ["Explain the purpose of the trading account", "Calculate cost of goods sold", "Calculate gross profit or gross loss", "Prepare a simple trading account"],
        lesson: {
          title: "Finding Gross Profit",
          summary: "Prepare a trading account and calculate gross profit.",
          minutes: 45,
          notes: `## Meaning and purpose
The **trading account** is the first part of the **final accounts** of a trader. It is prepared at the end of a period to find the **gross profit** or **gross loss** from buying and selling goods.

## Key terms
- **opening stock** — goods on hand at the start of the period
- **purchases** — goods bought for resale
- **closing stock** — goods unsold at the end of the period
- **carriage inwards** — cost of transporting goods bought (added to cost of goods)
- **returns inwards** — deducted from sales; **returns outwards** — deducted from purchases
- **net sales (turnover)** = sales − returns inwards

## Formulas
**Cost of goods sold (COGS) = opening stock + net purchases + carriage inwards − closing stock**
**Gross profit = net sales − cost of goods sold**
If COGS is larger than net sales, the result is a **gross loss**.

## Example: Trading account of Uche Stores for the year ended 31 December
| | ₦ | | ₦ |
|---|---|---|---|
| Opening stock | 20,000 | Sales | 150,000 |
| Add purchases | 90,000 | Less returns inwards | 5,000 |
| Add carriage inwards | 3,000 | **Net sales** | **145,000** |
| | 113,000 | | |
| Less closing stock | 18,000 | | |
| **Cost of goods sold** | **95,000** | | |
| **Gross profit c/d** | **50,000** | | |
Check: 145,000 − 95,000 = **₦50,000** gross profit.

The gross profit is carried down to the **profit and loss account**.`,
          examples: `**Example 1.** Opening stock ₦10,000; purchases ₦60,000; closing stock ₦15,000. Find COGS. *Answer:* 10,000 + 60,000 − 15,000 = **₦55,000**.

**Example 2.** Net sales ₦80,000; COGS ₦55,000. Find gross profit. *Answer:* **₦25,000**.

**Example 3.** Is carriage inwards added to or subtracted from cost of goods? *Answer:* It is **added**, because it is part of the cost of buying the goods.`,
        },
        questions: [
          ["E", "The account prepared to find gross profit is the", "trading account", "cash book", "petty cash book", "balance sheet", "It compares sales with cost of goods sold."],
          ["E", "Goods unsold at the end of a trading period are called", "closing stock", "opening stock", "purchases", "drawings", "They remain on hand at the end."],
          ["E", "Goods on hand at the start of a trading period are called", "opening stock", "closing stock", "returns outwards", "capital", "They were carried over from the last period."],
          ["M", "Opening stock ₦10,000, purchases ₦60,000 and closing stock ₦15,000 give a cost of goods sold of", "₦55,000", "₦85,000", "₦45,000", "₦70,000", "10,000 + 60,000 − 15,000 = 55,000."],
          ["M", "Net sales of ₦80,000 and cost of goods sold of ₦55,000 give a gross profit of", "₦25,000", "₦135,000", "₦55,000", "₦80,000", "80,000 − 55,000 = 25,000."],
          ["M", "Net sales are calculated as", "sales minus returns inwards", "sales plus returns inwards", "purchases minus returns outwards", "sales plus closing stock", "Returned sales are removed."],
          ["M", "Carriage inwards in the trading account is", "added to the cost of goods", "deducted from sales", "added to sales", "ignored", "It is part of buying cost."],
          ["H", "When cost of goods sold is greater than net sales, the trader makes a", "gross loss", "gross profit", "net profit", "capital gain", "Costs exceed sales revenue."],
          ["H", "Sales ₦150,000, returns inwards ₦5,000 and cost of goods sold ₦95,000 give a gross profit of", "₦50,000", "₦55,000", "₦45,000", "₦60,000", "145,000 − 95,000 = 50,000."],
          ["H", "The gross profit from the trading account is transferred to the", "profit and loss account", "cash book", "sales day book", "petty cash book", "Expenses are deducted there."],
        ],
      },
      {
        week: 2,
        title: "The profit and loss account",
        subtopics: ["Meaning of the profit and loss account", "Expenses and other income", "Net profit and net loss", "Preparing a simple profit and loss account"],
        objectives: ["Explain the purpose of the profit and loss account", "Distinguish expenses from other income", "Calculate net profit or net loss", "Prepare a simple profit and loss account"],
        lesson: {
          title: "Finding Net Profit",
          summary: "Prepare a profit and loss account and calculate net profit.",
          minutes: 45,
          notes: `## Meaning
The **profit and loss account** is the second part of the final accounts. It starts with the **gross profit** from the trading account, adds **other income** and deducts **expenses** to find the **net profit** or **net loss**.

## Items
**Expenses (debit side):** rent and rates, salaries and wages, electricity, telephone, carriage outwards, advertising, insurance, stationery, discount allowed, repairs, bad debts, depreciation.
**Other income (credit side):** discount received, commission received, rent received, interest received.

## Formula
**Net profit = gross profit + other income − total expenses**
If expenses are larger, the result is a **net loss**.

## Example: Profit and loss account of Uche Stores for the year ended 31 December
| Expenses | ₦ | Income | ₦ |
|---|---|---|---|
| Rent | 12,000 | Gross profit b/d | 50,000 |
| Wages | 15,000 | Commission received | 4,000 |
| Electricity | 5,000 | | |
| Carriage outwards | 2,000 | | |
| **Net profit** | **20,000** | | |
| | 54,000 | | 54,000 |
Check: 50,000 + 4,000 − 34,000 = **₦20,000**.

## Carriage inwards vs outwards
- **carriage inwards** (on goods bought) → trading account
- **carriage outwards** (on goods delivered to customers) → profit and loss account

Net profit is added to **capital** in the balance sheet; a net loss reduces capital.`,
          examples: `**Example 1.** Gross profit ₦40,000; expenses ₦28,000. Find net profit. *Answer:* **₦12,000**.

**Example 2.** Where is carriage outwards shown? *Answer:* in the **profit and loss account** as an expense.

**Example 3.** Is commission received an expense or income? *Answer:* **income** — it is added to gross profit.`,
        },
        questions: [
          ["E", "The account prepared to find net profit is the", "profit and loss account", "trading account", "sales day book", "cash book", "Expenses are deducted from gross profit."],
          ["E", "Which item is an expense of a business?", "salaries and wages", "sales", "commission received", "capital", "Wages are a running cost."],
          ["E", "Which item is other income of a business?", "discount received", "rent paid", "electricity", "advertising", "It is added to gross profit."],
          ["M", "Gross profit of ₦40,000 and expenses of ₦28,000 give a net profit of", "₦12,000", "₦68,000", "₦28,000", "₦40,000", "40,000 − 28,000 = 12,000."],
          ["M", "Carriage outwards is shown in the", "profit and loss account", "trading account", "balance sheet as an asset", "sales day book", "It is a selling expense."],
          ["M", "Net profit equals", "gross profit plus other income minus expenses", "sales plus purchases", "capital minus drawings", "assets plus liabilities", "All income less all expenses."],
          ["M", "When expenses exceed gross profit and other income, the result is a", "net loss", "net profit", "gross profit", "turnover", "Costs are greater than income."],
          ["H", "Gross profit ₦50,000, commission received ₦4,000 and expenses ₦34,000 give a net profit of", "₦20,000", "₦16,000", "₦24,000", "₦88,000", "50,000 + 4,000 − 34,000 = 20,000."],
          ["H", "The net profit for a period is added to the owner's", "capital", "stock", "creditors", "petty cash", "Profit belongs to the owner."],
          ["H", "Discount allowed to customers appears in the profit and loss account as", "an expense", "other income", "an asset", "a liability", "It reduces what the business receives."],
        ],
      },
      {
        week: 3,
        title: "The balance sheet",
        subtopics: ["Meaning of the balance sheet", "Assets: fixed and current", "Liabilities: long-term and current", "Preparing a simple balance sheet"],
        objectives: ["Explain the balance sheet", "Classify assets into fixed and current", "Classify liabilities into long-term and current", "Prepare a simple balance sheet"],
        lesson: {
          title: "The Financial Position of a Business",
          summary: "Classify assets and liabilities and prepare a simple balance sheet.",
          minutes: 45,
          notes: `## Meaning
A **balance sheet** is a **statement** (not an account) showing the **assets**, **liabilities** and **capital** of a business **on a particular date**. It shows the **financial position** of the business.

## The accounting equation
**Assets = Capital + Liabilities**

## Assets
- **fixed (non-current) assets**: kept for long-term use, not for resale — land and buildings, machinery, motor vehicles, furniture and fittings, equipment
- **current assets**: change frequently; held for less than a year — closing stock, debtors, cash at bank, cash in hand, prepayments

## Liabilities
- **long-term liabilities**: due after more than one year — bank loans, debentures
- **current liabilities**: due within a year — creditors, bank overdraft, accrued expenses

## Example: Balance sheet of Uche Stores as at 31 December
| Capital and liabilities | ₦ | Assets | ₦ |
|---|---|---|---|
| Capital | 100,000 | **Fixed assets** | |
| Add net profit | 20,000 | Furniture | 40,000 |
| | 120,000 | Equipment | 30,000 |
| Less drawings | 10,000 | | 70,000 |
| | 110,000 | **Current assets** | |
| **Long-term liability** | | Closing stock | 18,000 |
| Bank loan | 20,000 | Debtors | 25,000 |
| **Current liability** | | Cash at bank | 22,000 |
| Creditors | 15,000 | Cash in hand | 10,000 |
| | **145,000** | | **145,000** |

## Working capital
**Working capital = current assets − current liabilities** (here 75,000 − 15,000 = **₦60,000**). It shows the ability to pay short-term debts.`,
          examples: `**Example 1.** Is a delivery van a fixed or current asset? *Answer:* a **fixed asset**.

**Example 2.** Assets ₦200,000; liabilities ₦50,000. Find capital. *Answer:* **₦150,000** (Capital = Assets − Liabilities).

**Example 3.** Current assets ₦75,000; current liabilities ₦15,000. Find working capital. *Answer:* **₦60,000**.`,
        },
        questions: [
          ["E", "A statement showing the assets, liabilities and capital of a business on a date is the", "balance sheet", "trading account", "cash book", "invoice", "It shows financial position."],
          ["E", "Things owned by a business are its", "assets", "liabilities", "expenses", "drawings", "Assets have value to the business."],
          ["E", "Debts owed by a business are its", "liabilities", "assets", "sales", "incomes", "Liabilities must be paid."],
          ["M", "Which of these is a fixed asset?", "motor vehicle", "cash in hand", "debtors", "closing stock", "It is kept for long-term use."],
          ["M", "Which of these is a current asset?", "debtors", "buildings", "machinery", "land", "Debtors pay within a short period."],
          ["M", "The accounting equation is", "assets = capital + liabilities", "assets = capital − liabilities", "capital = assets + liabilities", "liabilities = assets + capital", "Both sides must balance."],
          ["M", "Assets of ₦200,000 and liabilities of ₦50,000 give a capital of", "₦150,000", "₦250,000", "₦50,000", "₦200,000", "200,000 − 50,000 = 150,000."],
          ["H", "Working capital is", "current assets minus current liabilities", "fixed assets minus capital", "sales minus purchases", "capital plus drawings", "It measures short-term liquidity."],
          ["H", "A bank loan repayable in five years is a", "long-term liability", "current liability", "current asset", "fixed asset", "It is due after more than one year."],
          ["H", "Current assets of ₦75,000 and current liabilities of ₦15,000 give a working capital of", "₦60,000", "₦90,000", "₦15,000", "₦75,000", "75,000 − 15,000 = 60,000."],
        ],
      },
      {
        week: 4,
        title: "Capital and drawings",
        subtopics: ["Meaning of capital", "Types of capital", "Meaning and forms of drawings", "Effect of profit, loss and drawings on capital"],
        objectives: ["Explain the meaning of capital", "Distinguish types of capital", "Explain drawings and their forms", "Calculate closing capital"],
        lesson: {
          title: "The Owner's Stake in the Business",
          summary: "Explain capital and drawings and calculate closing capital.",
          minutes: 40,
          notes: `## Capital
**Capital** is the **money or other resources the owner invests** in a business. In accounting it is what the business **owes the owner**.

## Types of capital
| Type | Meaning |
|---|---|
| **capital owned** | resources put in by the owner (opening capital) |
| **borrowed capital** | loans from banks or others |
| **fixed capital** | invested in fixed assets |
| **circulating (working) capital** | used for day-to-day operations — stock, cash, debtors |
| **working capital** (in accounts) | current assets − current liabilities |

## Drawings
**Drawings** are **money or goods taken out of the business by the owner for private use**.
Forms: cash withdrawn; goods taken for personal use; business money used to pay private bills (e.g. school fees of the owner's children).
Double entry for cash drawings: **debit Drawings, credit Cash**.
Drawings are **not** business expenses; they reduce capital.

## Effect on capital
**Closing capital = opening capital + net profit (or − net loss) + additional capital − drawings**
Example: opening capital ₦100,000, net profit ₦20,000, drawings ₦10,000 → closing capital **₦110,000**.

## Why separate owner and business?
Under the **business entity concept**, the business is treated as separate from its owner, so private spending must be recorded as drawings.`,
          examples: `**Example 1.** The owner takes ₦5,000 from the till to buy food for his family. What is this? *Answer:* **drawings**.

**Example 2.** Opening capital ₦80,000; net loss ₦6,000; drawings ₦4,000. Find closing capital. *Answer:* 80,000 − 6,000 − 4,000 = **₦70,000**.

**Example 3.** Which concept treats the business as separate from its owner? *Answer:* the **business entity concept**.`,
        },
        questions: [
          ["E", "Money invested in a business by the owner is", "capital", "drawings", "wages", "discount", "It starts the business."],
          ["E", "Money or goods taken from the business by the owner for private use are", "drawings", "sales", "purchases", "wages", "They reduce capital."],
          ["E", "Drawings reduce the owner's", "capital", "expenses", "sales", "stock records", "They are withdrawn from the business."],
          ["M", "Cash drawings are recorded by", "debiting Drawings and crediting Cash", "debiting Cash and crediting Drawings", "debiting Sales and crediting Cash", "debiting Capital and crediting Sales", "Cash leaves the business."],
          ["M", "Capital used for day-to-day operations such as buying stock is", "circulating capital", "fixed capital", "loan capital only", "social capital", "It circulates in trading."],
          ["M", "Loans from banks used in a business are", "borrowed capital", "drawings", "sales", "owner's profit", "They must be repaid."],
          ["M", "Opening capital ₦100,000, net profit ₦20,000 and drawings ₦10,000 give a closing capital of", "₦110,000", "₦130,000", "₦90,000", "₦120,000", "100,000 + 20,000 − 10,000 = 110,000."],
          ["H", "Opening capital ₦80,000, net loss ₦6,000 and drawings ₦4,000 give a closing capital of", "₦70,000", "₦90,000", "₦78,000", "₦74,000", "80,000 − 6,000 − 4,000 = 70,000."],
          ["H", "Paying the owner's children's school fees with business money is treated as", "drawings", "a business expense", "sales", "a fixed asset", "It is a private payment."],
          ["H", "The concept that treats the business as separate from its owner is the", "business entity concept", "going concern concept", "double entry concept", "cost concept only", "Owner and business are separate."],
        ],
      },
      {
        week: 5,
        title: "Stock and store records",
        subtopics: ["Meaning of stock", "Store records and documents", "Stock control and stocktaking", "Valuation of stock"],
        objectives: ["Explain stock and its types", "Identify store records and documents", "Describe stock control and stocktaking", "Explain simple methods of stock valuation"],
        lesson: {
          title: "Keeping Track of Goods",
          summary: "Keep store records and control stock effectively.",
          minutes: 40,
          notes: `## Meaning of stock
**Stock (inventory)** is goods held by a business. Types: **raw materials**, **work-in-progress**, **finished goods** and **goods for resale**.

## The store and storekeeper
The **storekeeper** receives, keeps, issues and records goods in the store.

## Store records and documents
| Record | Use |
|---|---|
| **goods received note (GRN)** | records goods received into the store |
| **stores requisition** | request by a department for goods from the store |
| **stores issue note** | records goods issued out |
| **bin card** | kept with each item; records quantity received, issued and balance |
| **stores ledger** | kept by the accounts office; records quantity and value |
| **stock sheet** | used during stocktaking |

## Stock control
Maintaining the **right quantity** of stock — not too much (waste, theft, tied-up money) and not too little (stock-outs, lost sales).
Terms:
- **maximum stock level** — highest quantity to be held
- **minimum stock level** — lowest safe quantity
- **re-order level** — when a new order should be placed
- **re-order quantity** — how much to order

## Stocktaking
**Stocktaking** is **physically counting** goods in the store and comparing with records, usually at the end of the year. Differences may show theft, damage or recording errors.

## Valuation
Stock is valued at **cost or net realisable value, whichever is lower**. Methods include **FIFO** (first in, first out) and **average cost**.`,
          examples: `**Example 1.** Which card is kept with each item in the store? *Answer:* the **bin card**.

**Example 2.** What is stocktaking? *Answer:* **Physically counting stock** and comparing it with records.

**Example 3.** A bin card shows 50 units received and 32 issued from an opening balance of 10. What is the balance? *Answer:* 10 + 50 − 32 = **28 units**.`,
        },
        questions: [
          ["E", "Goods held by a business are called", "stock", "capital", "drawings", "liabilities", "Stock is also called inventory."],
          ["E", "The person in charge of the store is the", "storekeeper", "receptionist", "cashier", "messenger", "He receives and issues goods."],
          ["E", "Physically counting goods in the store is", "stocktaking", "franking", "filing", "hawking", "It checks the records."],
          ["M", "The card kept with each item showing receipts, issues and balance is the", "bin card", "credit card", "identity card", "report card", "It stays with the bin or shelf."],
          ["M", "A request by a department for goods from the store is a", "stores requisition", "goods received note", "bin card", "stock sheet", "It requests items."],
          ["M", "A document recording goods received into the store is the", "goods received note", "stores requisition", "credit note", "cheque", "It records arrivals."],
          ["M", "The stock level at which a new order should be placed is the", "re-order level", "maximum level", "zero level", "closing level", "It prevents stock-outs."],
          ["H", "A bin card shows opening balance 10, received 50 and issued 32. The balance is", "28 units", "92 units", "72 units", "32 units", "10 + 50 − 32 = 28."],
          ["H", "A problem of holding too much stock is", "money is tied up and goods may spoil", "customers cannot buy", "sales always rise", "no storage is needed", "Excess stock is costly."],
          ["H", "The method that assumes goods received first are issued first is", "FIFO", "LIFO only", "barter", "double entry", "First in, first out."],
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
        title: "Forms of business ownership",
        subtopics: ["Sole proprietorship", "Partnership", "Limited liability companies", "Co-operative societies and public enterprises"],
        objectives: ["Describe the features of a sole proprietorship", "Explain partnership and its features", "Distinguish private and public limited companies", "Describe co-operative societies and public enterprises"],
        lesson: {
          title: "Who Owns the Business?",
          summary: "Compare the main forms of business ownership in Nigeria.",
          minutes: 45,
          notes: `## Sole proprietorship
Owned and controlled by **one person**.
**Advantages:** easy to start; owner keeps all profit; quick decisions; personal contact with customers; secrecy.
**Disadvantages:** **unlimited liability** (owner's private property can be used to pay business debts); limited capital; business may end when the owner dies; heavy workload.

## Partnership
Owned by **2 to 20 persons** who agree to carry on business together and share profit. The agreement is the **partnership deed**.
Types of partners: **active** (takes part in management), **sleeping/dormant** (contributes capital only), **limited** (liability limited to capital), **nominal** (lends name only).
**Advantages:** more capital; shared skills and workload. **Disadvantages:** disagreements; unlimited liability (for general partners); profits shared.

## Limited liability companies
Registered with the **CAC**; a **separate legal entity**; owned by **shareholders**; managed by a **board of directors**; **limited liability** (shareholders lose only what they invested).
| Private limited company (Ltd) | Public limited company (Plc) |
|---|---|
| shares not sold to the public | shares sold to the public, e.g. on the stock exchange |
| minimum 1 member | larger membership |
| name ends with "Ltd" | name ends with "Plc" |

## Co-operative societies
Voluntary associations of people with common interests who pool resources for **mutual benefit**, e.g. consumer, producer, thrift and credit co-operatives. Principle: **one member, one vote**.

## Public enterprises
Owned and controlled by **government** to provide essential services, e.g. **NNPC** (as originally established), **NIPOST**, **Nigerian Railway Corporation**.`,
          examples: `**Example 1.** What is unlimited liability? *Answer:* The owner's **private property can be used to pay business debts**.

**Example 2.** A partner who contributes capital but takes no part in management is a **sleeping (dormant) partner**.

**Example 3.** A company whose shares are sold to the public ends its name with **"Plc"**.`,
        },
        questions: [
          ["E", "A business owned and controlled by one person is a", "sole proprietorship", "partnership", "public company", "co-operative society", "One owner controls it."],
          ["E", "The written agreement between partners is the", "partnership deed", "invoice", "receipt", "bin card", "It states the terms of partnership."],
          ["E", "Owners of a limited liability company are called", "shareholders", "debtors", "hawkers", "creditors", "They hold shares."],
          ["M", "Where the owner's private property can be used to pay business debts, there is", "unlimited liability", "limited liability", "no liability", "public ownership", "Sole traders bear this risk."],
          ["M", "A partner who contributes capital but takes no part in management is a", "sleeping partner", "active partner", "nominal partner", "general manager", "He is dormant in management."],
          ["M", "The name of a public limited company ends with", "Plc", "Ltd", "Co-op", "Enterprise", "Plc stands for public limited company."],
          ["M", "A company is managed on behalf of shareholders by the", "board of directors", "storekeeper", "customers", "creditors", "Directors are elected by shareholders."],
          ["H", "The co-operative principle of democratic control is", "one member, one vote", "one share, many votes", "richest member decides", "no voting", "Members are equal."],
          ["H", "Which is an advantage of a sole proprietorship?", "quick decision-making", "unlimited capital", "limited liability", "continuity after death", "The owner decides alone."],
          ["H", "A business owned and controlled by government to provide essential services is a", "public enterprise", "sole proprietorship", "partnership", "private limited company", "Government owns it."],
        ],
      },
      {
        week: 2,
        title: "Sources of business finance",
        subtopics: ["Meaning of business finance", "Internal sources of finance", "External sources of finance", "Choosing a source of finance"],
        objectives: ["Explain business finance", "Identify internal sources of finance", "Identify external sources of finance", "State factors in choosing a source of finance"],
        lesson: {
          title: "Raising Money for Business",
          summary: "Identify sources of finance and choose suitable ones.",
          minutes: 40,
          notes: `## Meaning
**Business finance** is the **money needed to start, run and expand** a business — to buy equipment, stock, pay wages and meet expenses.

## Internal sources
| Source | Meaning |
|---|---|
| **personal savings** | owner's own money |
| **retained (ploughed-back) profit** | profits kept in the business instead of being withdrawn |
| **sale of unused assets** | selling equipment no longer needed |
| **reducing stock / collecting debts faster** | releases cash |

## External sources
| Source | Meaning |
|---|---|
| **bank loans and overdrafts** | borrowed from banks with interest |
| **trade credit** | buying goods now and paying later |
| **family and friends** | informal loans or gifts |
| **co-operative societies** | loans to members |
| **esusu / ajo / adashe** (rotating savings) | members contribute regularly and take turns collecting |
| **microfinance banks** | small loans to small businesses |
| **sale of shares** | for companies |
| **debentures** | long-term loans to companies at fixed interest |
| **government grants and development banks** | e.g. Bank of Industry, Bank of Agriculture |
| **hire purchase and leasing** | using assets while paying in instalments |

## Factors in choosing a source
amount needed; cost (interest); period of repayment; collateral (security) required; purpose; control (selling shares shares ownership); availability; risk.`,
          examples: `**Example 1.** Profits kept in the business for expansion are **retained (ploughed-back) profit**.

**Example 2.** Buying goods now and paying the supplier after 30 days is **trade credit**.

**Example 3.** Name one factor in choosing a source of finance. *Answer:* **cost of the finance (interest)**.`,
        },
        questions: [
          ["E", "Money needed to start and run a business is", "business finance", "drawings", "stock", "barter", "Finance funds operations."],
          ["E", "The owner's own money used in the business is", "personal savings", "a bank loan", "trade credit", "a debenture", "It is an internal source."],
          ["E", "Borrowing money from a bank with interest is a", "bank loan", "grant", "gift", "drawing", "Loans must be repaid with interest."],
          ["M", "Profits kept in the business instead of being withdrawn are", "retained profits", "drawings", "debentures", "dividends paid", "They are ploughed back."],
          ["M", "Buying goods now and paying the supplier later is", "trade credit", "cash sale", "barter", "dividend", "Suppliers give time to pay."],
          ["M", "A rotating savings scheme where members take turns collecting contributions is", "esusu (ajo)", "an overdraft", "a debenture", "a share issue", "It is a traditional savings scheme."],
          ["M", "A trader who needs a small loan without big collateral would most likely approach", "microfinance banks", "the stock exchange", "insurance companies", "customs offices", "They serve small enterprises."],
          ["H", "Security pledged to obtain a loan is called", "collateral", "a dividend", "a premium", "a drawing", "It protects the lender."],
          ["H", "A disadvantage of raising funds by selling shares is that", "ownership and control are shared", "no money is raised", "interest must always be paid", "the business closes", "Shareholders become owners."],
          ["H", "Which is an internal source of finance?", "sale of unused assets", "a bank overdraft", "trade credit", "government grant", "Money comes from within the business."],
        ],
      },
      {
        week: 3,
        title: "Marketing and salesmanship",
        subtopics: ["Meaning of marketing", "The marketing mix", "Salesmanship and qualities of a salesperson", "After-sales services"],
        objectives: ["Explain marketing", "Describe the marketing mix (4 Ps)", "State the qualities of a good salesperson", "Explain after-sales services"],
        lesson: {
          title: "Getting Customers to Buy",
          summary: "Apply the marketing mix and good salesmanship.",
          minutes: 40,
          notes: `## Meaning
**Marketing** is all activities involved in **identifying customers' needs** and **satisfying them profitably** — from market research to product design, pricing, promotion and distribution.

## The marketing mix (4 Ps)
| P | Meaning |
|---|---|
| **product** | the good or service — quality, design, packaging, brand |
| **price** | amount charged — affordable, competitive, profitable |
| **place** | where and how it is sold — channels, location, delivery |
| **promotion** | communicating with customers — advertising, sales promotion, personal selling, publicity |

## Market research
Collecting information about customers, competitors and the market through **questionnaires, interviews, observation** and sales records.

## Salesmanship
**Salesmanship** is the art of **persuading customers to buy** goods or services through personal contact.
Qualities of a good salesperson: good **product knowledge**; courtesy and patience; neat appearance; good communication and listening skills; honesty; confidence; persuasiveness; tact; enthusiasm.

## Steps in personal selling
approach the customer → identify needs → present and demonstrate the product → handle objections → close the sale → follow up.

## After-sales services
Services provided **after** a sale: **delivery**, **installation**, **warranty/guarantee**, **repairs and maintenance**, supply of spare parts, customer support. They build **customer loyalty**.`,
          examples: `**Example 1.** Name the 4 Ps of marketing. *Answer:* **product, price, place, promotion**.

**Example 2.** A shop installs an air conditioner free after sale. What is this? *Answer:* an **after-sales service**.

**Example 3.** Give one quality of a good salesperson. *Answer:* good **product knowledge**.`,
        },
        questions: [
          ["E", "Identifying customers' needs and satisfying them profitably is", "marketing", "auditing", "warehousing", "taxation", "Marketing focuses on customers."],
          ["E", "Which is one of the 4 Ps of marketing?", "price", "people only", "profit", "production", "The 4 Ps are product, price, place, promotion."],
          ["E", "The art of persuading customers to buy through personal contact is", "salesmanship", "book-keeping", "filing", "stocktaking", "It relies on personal selling."],
          ["M", "The 'place' element of the marketing mix refers to", "where and how the product is sold", "the price charged", "the brand name", "the advertisement", "It covers distribution."],
          ["M", "Communicating with customers through advertising and sales promotion is", "promotion", "place", "price", "packaging only", "Promotion informs and persuades."],
          ["M", "Collecting information about customers and competitors is", "market research", "stocktaking", "hoarding", "franking", "It guides decisions."],
          ["M", "Which is a quality of a good salesperson?", "good product knowledge", "rudeness", "dishonesty", "impatience", "Customers trust informed sellers."],
          ["H", "Free installation of an air conditioner after purchase is an example of", "after-sales service", "market research", "hoarding", "barter", "It is given after the sale."],
          ["H", "A warranty given on a product assures the customer that", "faults within a period will be repaired or replaced", "the price will fall", "the product can never break", "no receipt is needed", "It protects the buyer."],
          ["H", "The final step of closing a sale in personal selling is followed by", "follow-up", "approaching the customer", "identifying needs", "product design", "Follow-up builds loyalty."],
        ],
      },
      {
        week: 4,
        title: "Communication services",
        subtopics: ["Postal services", "Courier services", "Telecommunication services", "Internet and digital communication"],
        objectives: ["Describe postal services", "Explain courier services", "Identify telecommunication services", "Explain the uses of internet communication in business"],
        lesson: {
          title: "Services That Connect Businesses",
          summary: "Describe postal, courier, telecommunication and internet services.",
          minutes: 40,
          notes: `## Postal services (NIPOST)
The **Nigerian Postal Service (NIPOST)** provides:
- ordinary and **registered mail** (proof of posting and delivery)
- **EMS/Speedpost** (express mail)
- **parcel post**
- **post office boxes and bags** (private mail collection)
- **poste restante** (mail held at the post office for travellers)
- postal orders and money orders (money transfer)
- sale of stamps; franking services

## Courier services
Private companies that deliver letters and parcels quickly, often door to door, with **tracking**. They are faster than ordinary post but more expensive.

## Telecommunication services
Regulated by the **Nigerian Communications Commission (NCC)**:
- **mobile telephone** and SMS
- **fixed telephone** lines
- **voice and video calls**
- **toll-free lines** for customer service
- teleconferencing

## Internet and digital communication
- **email** for letters and documents
- **websites** and **social media** for advertising and customer contact
- **video conferencing** for meetings
- **e-commerce** and online payments
- **cloud storage** for sharing files

## Importance to business
fast exchange of information; reaching wider markets; reducing travel costs; quick orders and payments; better customer service.

## Challenges
poor network coverage, high data costs, cyber fraud, power supply problems.`,
          examples: `**Example 1.** Which mail service gives proof of posting and delivery? *Answer:* **registered mail**.

**Example 2.** Which body regulates telecommunications in Nigeria? *Answer:* the **Nigerian Communications Commission (NCC)**.

**Example 3.** Give one business use of video conferencing. *Answer:* holding **meetings with distant staff or clients** without travelling.`,
        },
        questions: [
          ["E", "The government body that provides postal services in Nigeria is", "NIPOST", "NCC", "CAC", "NAICOM", "Nigerian Postal Service."],
          ["E", "Private companies that deliver parcels quickly door to door are", "courier services", "banks", "insurers", "wholesalers", "They offer fast delivery."],
          ["E", "The body that regulates telecommunications in Nigeria is the", "NCC", "NIPOST", "NAFDAC", "CBN", "Nigerian Communications Commission."],
          ["M", "Mail sent with proof of posting and delivery is", "registered mail", "ordinary mail", "junk mail", "poste restante", "It is recorded and signed for."],
          ["M", "Mail held at the post office for travellers to collect is", "poste restante", "registered mail", "courier", "parcel post", "It 'remains' at the post office."],
          ["M", "A private box at the post office for collecting mail is a", "post office box", "bin card", "vending machine", "warehouse", "It is rented for mail."],
          ["M", "Holding a meeting with distant people through live video on the internet is", "video conferencing", "franking", "hawking", "stocktaking", "It saves travel."],
          ["H", "A telephone line that customers call without paying is a", "toll-free line", "private line", "party line", "fax line", "The business pays for the call."],
          ["H", "A challenge of digital communication in Nigeria is", "poor network coverage", "unlimited free data", "no fraud", "constant power everywhere", "Network gaps affect service."],
          ["H", "An advantage of courier services over ordinary post is", "faster delivery with tracking", "they are always cheaper", "they never lose items", "no charges", "Speed and tracking are key."],
        ],
      },
      {
        week: 5,
        title: "Consumer protection",
        subtopics: ["Meaning of consumer protection", "Consumer rights and responsibilities", "Consumer protection agencies", "Seeking redress"],
        objectives: ["Explain consumer protection", "State consumer rights and responsibilities", "Identify consumer protection agencies in Nigeria", "Describe ways consumers can seek redress"],
        lesson: {
          title: "Protecting the Buyer",
          summary: "Identify consumer rights and the agencies that protect them.",
          minutes: 40,
          notes: `## Meaning
**Consumer protection** means **measures that safeguard consumers** from unfair trade practices such as selling fake, adulterated or expired goods, false advertising, overcharging, short measures and hoarding.

## Consumer rights
right to **safety**; right to **information**; right to **choose**; right to be **heard**; right to **redress** (compensation); right to **consumer education**; right to a **healthy environment**.

## Consumer responsibilities
check expiry dates and quality; demand and keep **receipts**; read labels and instructions; report fake products; buy from reliable sellers; avoid buying smuggled or stolen goods.

## Agencies
| Agency | Role |
|---|---|
| **FCCPC** (Federal Competition and Consumer Protection Commission) | protects consumers and promotes fair competition |
| **NAFDAC** | regulates food, drugs, cosmetics and chemicals |
| **SON** (Standards Organisation of Nigeria) | sets and enforces product standards |
| **NCC** | protects telecom consumers |
| **CBN** consumer protection department | handles banking complaints |
| **NERC** | electricity consumers |
Others: consumer associations, the courts, the media.

## Seeking redress
1. complain to the seller with the receipt
2. write to the manufacturer
3. report to the relevant agency (e.g. FCCPC, NAFDAC)
4. use consumer associations or the media
5. go to court as a last resort`,
          examples: `**Example 1.** Which agency regulates food and drugs in Nigeria? *Answer:* **NAFDAC**.

**Example 2.** A consumer buys a faulty blender and wants a replacement. Which right is this? *Answer:* the right to **redress**.

**Example 3.** Why should consumers keep receipts? *Answer:* As **proof of purchase** when complaining.`,
        },
        questions: [
          ["E", "Measures that safeguard buyers from unfair trade practices are", "consumer protection", "hoarding", "adulteration", "smuggling", "They protect consumers."],
          ["E", "A consumer finds a packaged drink without a registration number. The agency to inform is", "NAFDAC", "NIPOST", "CAC", "NCC", "It checks food and drug safety."],
          ["E", "Consumers should keep receipts as", "proof of purchase", "decoration", "waste paper", "advertisements", "Receipts support complaints."],
          ["M", "The agency that sets and enforces product standards is", "SON", "NIPOST", "INEC", "NDLEA", "Standards Organisation of Nigeria."],
          ["M", "The federal commission that protects consumers and promotes fair competition is the", "FCCPC", "NAICOM", "NERC", "NIPOST", "It handles consumer complaints."],
          ["M", "A consumer's right to compensation for faulty goods is the right to", "redress", "vote", "silence", "privacy", "Redress corrects the wrong."],
          ["M", "Mixing a product with inferior substances is", "adulteration", "grading", "packaging", "branding", "It deceives buyers."],
          ["H", "The first step in seeking redress for a faulty product is usually to", "complain to the seller with the receipt", "go straight to court", "destroy the product", "post insults online", "Sellers can resolve it quickly."],
          ["H", "Which is a consumer responsibility?", "checking expiry dates before buying", "buying smuggled goods", "throwing away receipts", "ignoring labels", "Consumers must be careful."],
          ["H", "A consumer's right to accurate details about a product's content is the right to", "information", "redress", "silence", "hoard", "Labels provide information."],
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
        title: "BECE revision: office practice",
        subtopics: ["Office, office workers and equipment", "Documents, filing and mail", "Reception and correspondence", "Practice questions"],
        objectives: ["Recall key facts on the office and office workers", "Revise office documents, filing and mail handling", "Apply knowledge of reception and correspondence", "Answer BECE-style office practice questions"],
        lesson: {
          title: "Revising Office Practice",
          summary: "Consolidate office practice topics for the BECE.",
          minutes: 45,
          notes: `## The office
A place where **clerical and administrative work** is done: receiving, recording, arranging, giving and safeguarding information.

## Key office workers
| Worker | Main duty |
|---|---|
| secretary | correspondence, diary, meetings |
| receptionist | visitors and calls |
| typist/computer operator | producing documents |
| filing clerk | keeping records |
| messenger | delivering documents and mail |
| cashier | receiving and paying cash |

## Equipment
computers and printers, photocopiers, scanners, shredders (destroy confidential papers), franking machines (print postage), calculators, filing cabinets, telephones.

## Documents
invoice (bill for credit sale); receipt (proof of payment); credit note (reduces amount owed); debit note (increases amount owed); delivery note; statement of account; memo (internal message).

## Filing
methods: **alphabetical**, **numerical**, **geographical**, **subject**, **chronological**. Qualities: simple, secure, compact, flexible, easy retrieval. Electronic filing uses folders on computers and cloud storage.

## Mail and correspondence
incoming: sort → open → date-stamp → register → distribute. Outgoing: check → fold → stamp/frank → register → dispatch.
Business letter parts: letterhead, reference, date, inside address, salutation, subject, body, complimentary close, signature.

## Exam tips
read each option carefully; eliminate clearly wrong answers; watch for words like **NOT** and **EXCEPT**.`,
          examples: `**Example 1.** Which machine destroys confidential documents? *Answer:* the **shredder**.

**Example 2.** Which document is sent by a seller to reduce the amount a buyer owes? *Answer:* a **credit note**.

**Example 3.** Filing documents by date order is **chronological** filing.`,
        },
        questions: [
          ["E", "The office machine used to destroy confidential papers is the", "shredder", "photocopier", "scanner", "calculator", "It cuts paper into strips."],
          ["E", "An internal written message within an organisation is a", "memo", "invoice", "bill of lading", "cheque", "Memos are used internally."],
          ["E", "A document that serves as proof of payment is a", "receipt", "quotation", "requisition", "memo", "It confirms payment."],
          ["M", "A document sent by a seller to reduce the amount owed by a buyer is a", "credit note", "debit note", "delivery note", "statement", "It credits the buyer's account."],
          ["M", "A document sent to increase the amount owed by a buyer is a", "debit note", "credit note", "receipt", "memo", "It corrects undercharges."],
          ["M", "Arranging files in order of dates is", "chronological filing", "alphabetical filing", "geographical filing", "subject filing", "Chronos refers to time."],
          ["M", "The office worker mainly responsible for delivering documents within the office is the", "messenger", "accountant", "manager", "auditor", "Messengers carry documents."],
          ["H", "Which sequence correctly handles incoming mail?", "sort, open, date-stamp, register, distribute", "distribute, open, sort, stamp", "register, destroy, sort", "frank, seal, dispatch", "Mail must be recorded before distribution."],
          ["H", "A summary sent to a customer showing transactions and the balance owed is a", "statement of account", "delivery note", "memo", "goods received note", "It summarises the account."],
          ["H", "Which quality should a good filing system have?", "easy retrieval of documents", "high cost", "complexity", "no security", "Files must be found quickly."],
        ],
      },
      {
        week: 2,
        title: "BECE revision: book-keeping",
        subtopics: ["Double entry and the ledger", "Books of original entry and the cash book", "Trial balance", "Final accounts"],
        objectives: ["Apply the double-entry rules", "Recall books of original entry and their uses", "Prepare and interpret a trial balance", "Calculate gross profit, net profit and capital"],
        lesson: {
          title: "Revising Book-keeping",
          summary: "Consolidate book-keeping for the BECE.",
          minutes: 45,
          notes: `## Double entry
Every transaction: one **debit**, one **credit**, same amount.
| Increase in | Recorded on |
|---|---|
| assets, expenses, drawings | debit |
| liabilities, capital, income | credit |

## Books of original entry
sales day book (credit sales); purchases day book (credit purchases); returns inwards and outwards day books; cash book (cash and bank); petty cash book (small payments); journal proper (other transactions).

## Cash book reminders
receipts on the debit side; payments on the credit side; contra entries (c) affect both cash and bank columns.

## Trial balance
list of balances; debit total should equal credit total. Errors not revealed: omission, commission, principle, original entry, complete reversal, compensating errors.

## Final accounts formulas
- **COGS** = opening stock + purchases (+ carriage inwards) − closing stock
- **Gross profit** = net sales − COGS
- **Net profit** = gross profit + other income − expenses
- **Assets = capital + liabilities**
- **Closing capital** = opening capital + net profit − drawings
- **Working capital** = current assets − current liabilities

## Worked revision
Sales ₦120,000; opening stock ₦15,000; purchases ₦70,000; closing stock ₦10,000; expenses ₦20,000.
COGS = 15,000 + 70,000 − 10,000 = **₦75,000**; gross profit = **₦45,000**; net profit = **₦25,000**.`,
          examples: `**Example 1.** Sales ₦120,000 and COGS ₦75,000. Find gross profit. *Answer:* **₦45,000**.

**Example 2.** Where is a credit purchase of goods first recorded? *Answer:* in the **purchases day book**.

**Example 3.** Paid electricity by cheque. *Answer:* **Debit Electricity; credit Bank**.`,
        },
        questions: [
          ["E", "Every transaction has a debit entry and a", "credit entry of the same amount", "debit entry of double the amount", "memo", "receipt only", "That is double entry."],
          ["E", "An increase in an expense is recorded on the", "debit side", "credit side", "cover page", "balance line only", "Expenses are debited."],
          ["E", "Small office payments are recorded in the", "petty cash book", "sales day book", "journal proper", "purchases day book", "Petty cash covers minor expenses."],
          ["M", "Paying electricity by cheque is recorded by", "debiting Electricity and crediting Bank", "debiting Bank and crediting Electricity", "debiting Cash and crediting Sales", "debiting Capital and crediting Bank", "Expense up, bank down."],
          ["M", "Sales ₦120,000 and cost of goods sold ₦75,000 give a gross profit of", "₦45,000", "₦195,000", "₦75,000", "₦120,000", "120,000 − 75,000 = 45,000."],
          ["M", "Opening stock ₦15,000, purchases ₦70,000 and closing stock ₦10,000 give a cost of goods sold of", "₦75,000", "₦95,000", "₦85,000", "₦65,000", "15,000 + 70,000 − 10,000 = 75,000."],
          ["M", "Gross profit ₦45,000 and expenses ₦20,000 give a net profit of", "₦25,000", "₦65,000", "₦20,000", "₦45,000", "45,000 − 20,000 = 25,000."],
          ["H", "An error in which a transaction is left out of the books completely is NOT revealed by the trial balance because", "neither debit nor credit is recorded", "only the debit is recorded", "only the credit is recorded", "it doubles the totals", "Both sides are equally affected."],
          ["H", "Capital ₦90,000, net profit ₦30,000 and drawings ₦12,000 give a closing capital of", "₦108,000", "₦132,000", "₦120,000", "₦102,000", "90,000 + 30,000 − 12,000 = 108,000."],
          ["H", "In a two-column cash book, withdrawing cash from the bank for office use is", "a contra entry", "an error of principle", "a credit sale", "a journal proper entry", "It affects both columns."],
        ],
      },
      {
        week: 3,
        title: "BECE revision: commerce",
        subtopics: ["Trade, distribution and middlemen", "Aids to trade", "Business ownership and finance", "Consumer protection"],
        objectives: ["Recall the branches of trade and channels of distribution", "Explain aids to trade", "Compare forms of business ownership and sources of finance", "Apply knowledge of consumer protection"],
        lesson: {
          title: "Revising Commerce",
          summary: "Consolidate commerce topics for the BECE.",
          minutes: 45,
          notes: `## Trade
**Home trade**: retail and wholesale. **Foreign trade**: import, export, entrepôt (re-export).
Channels: producer → consumer; producer → retailer → consumer; producer → wholesaler → retailer → consumer.

## Aids to trade
| Aid | Removes hindrance of |
|---|---|
| **transport** | place (distance) |
| **warehousing** | time |
| **banking** | finance/payment |
| **insurance** | risk |
| **advertising** | ignorance (lack of information) |
| **communication** | distance in information exchange |

## Business ownership
sole proprietorship (1 owner, unlimited liability); partnership (2–20, deed); limited companies (Ltd, Plc; shareholders; limited liability); co-operatives (one member, one vote); public enterprises (government).

## Sources of finance
internal: savings, retained profit, sale of assets. External: loans, overdrafts, trade credit, esusu, co-operatives, microfinance, shares, grants.

## Consumer protection
rights: safety, information, choice, to be heard, redress, education. Agencies: FCCPC, NAFDAC, SON, NCC.

## Insurance principles
utmost good faith, insurable interest, indemnity, subrogation, contribution, proximate cause.`,
          examples: `**Example 1.** Which aid to trade removes the hindrance of risk? *Answer:* **insurance**.

**Example 2.** Which aid to trade removes the hindrance of time? *Answer:* **warehousing**.

**Example 3.** Importing goods in order to re-export them is **entrepôt trade**.`,
        },
        questions: [
          ["E", "The aid to trade that removes the hindrance of risk is", "insurance", "transport", "advertising", "warehousing", "Insurance compensates losses."],
          ["E", "The aid to trade that removes the hindrance of distance is", "transport", "insurance", "banking", "hoarding", "Transport moves goods."],
          ["E", "Trade between countries is", "foreign trade", "home trade", "retail trade only", "barter only", "It crosses national borders."],
          ["M", "Importing goods in order to re-export them is", "entrepôt trade", "retail trade", "home trade", "barter", "It is re-export trade."],
          ["M", "The aid to trade that removes the hindrance of time is", "warehousing", "transport", "communication", "advertising", "Storage bridges time gaps."],
          ["M", "The aid to trade that removes the hindrance of ignorance about products is", "advertising", "warehousing", "insurance", "banking", "It informs consumers."],
          ["M", "A business with between 2 and 20 owners sharing profits is a", "partnership", "sole proprietorship", "public enterprise", "public company", "Partners share profit."],
          ["H", "Shareholders of a limited company can lose only the amount they invested because of", "limited liability", "unlimited liability", "drawings", "indemnity", "Their liability is limited."],
          ["H", "The insurance principle that prevents the insured from profiting from a loss is", "indemnity", "subrogation", "contribution", "good faith", "Loss is restored, not exceeded."],
          ["H", "A consumer who reports expired drugs on sale should contact", "NAFDAC", "NIPOST", "CAC", "INEC", "NAFDAC regulates drugs."],
        ],
      },
      {
        week: 4,
        title: "BECE revision: keyboarding and entrepreneurship",
        subtopics: ["Keyboard and posture", "Word processing and documents", "Entrepreneurship and business plans", "Mixed practice test"],
        objectives: ["Recall keyboarding rules and home keys", "Apply word-processing skills", "Recall key ideas of entrepreneurship", "Complete a mixed BECE-style practice test"],
        lesson: {
          title: "Revising Keyboarding and Entrepreneurship",
          summary: "Consolidate keyboarding and entrepreneurship for the BECE.",
          minutes: 45,
          notes: `## Keyboarding
- **home keys**: left hand **A S D F**, right hand **J K L ;**; F and J have raised bumps to guide the index fingers
- correct posture: sit upright, feet flat, wrists level, eyes on the copy, screen at eye level
- **touch typing**: typing without looking at the keys
- space bar: struck with the thumb; Enter key: new line/paragraph; Shift: capital letters; Caps Lock: all capitals; Backspace: deletes to the left; Delete: deletes to the right

## Word processing
shortcuts: Ctrl + C (copy), Ctrl + X (cut), Ctrl + V (paste), Ctrl + Z (undo), Ctrl + S (save), Ctrl + P (print), Ctrl + B/I/U (bold/italic/underline).
documents: business letters (blocked style), memos (To/From/Date/Subject), notices.

## Entrepreneurship
- entrepreneur: identifies opportunities, takes risks, starts and manages a business
- qualities: creativity, risk-taking, hard work, integrity, perseverance
- business plan: product, market, competitors, costs, prices, profit
- registration: **CAC**
- profit = sales − costs

## Final exam checklist
bring your pencil, eraser and exam number; shade answers neatly; manage time; answer every question.`,
          examples: `**Example 1.** Which keys are the left-hand home keys? *Answer:* **A, S, D, F**.

**Example 2.** Which key deletes the character to the left of the cursor? *Answer:* **Backspace**.

**Example 3.** Sales ₦45,000; costs ₦31,000. Find profit. *Answer:* **₦14,000**.`,
        },
        questions: [
          ["E", "The left-hand home keys are", "A S D F", "J K L ;", "Q W E R", "Z X C V", "Fingers rest on them."],
          ["E", "The key used to type capital letters one at a time is", "Shift", "Enter", "Tab", "Esc", "Hold Shift while typing."],
          ["E", "Typing without looking at the keyboard is", "touch typing", "hunt-and-peck", "franking", "copying", "Fingers find keys by position."],
          ["M", "A typist wants to remove the letter just typed before the cursor. The key to press is", "Backspace", "Delete", "Enter", "Shift", "Backspace moves back."],
          ["M", "The raised bumps on the keyboard are found on the keys", "F and J", "A and L", "Q and P", "Z and M", "They guide the index fingers."],
          ["M", "The keyboard shortcut to print a document is", "Ctrl + P", "Ctrl + S", "Ctrl + B", "Ctrl + X", "P stands for print."],
          ["M", "Sales of ₦45,000 and costs of ₦31,000 give a profit of", "₦14,000", "₦76,000", "₦31,000", "₦45,000", "45,000 − 31,000 = 14,000."],
          ["H", "Which is correct typing posture?", "sitting upright with feet flat on the floor", "slouching with crossed legs", "looking at the keys always", "resting wrists on the desk edge while typing", "Good posture prevents strain."],
          ["H", "An entrepreneur who continues after early failures shows", "perseverance", "laziness", "dishonesty", "impatience", "Perseverance leads to success."],
          ["H", "A document stating a business idea, target customers, costs and expected profit is called a", "business plan", "memo", "bin card", "credit note", "It guides a new business."],
        ],
      },
    ],
  },
];
