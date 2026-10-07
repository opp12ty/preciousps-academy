import type { TermPlan } from "../types";

/** SS3 Financial Accounting — original Precious PS content following the national senior secondary curriculum. */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Purchase of business accounts",
        subtopics: ["Meaning of purchase of business and purchase consideration", "Goodwill and capital reserve on purchase", "Entries in the purchaser's books", "Settlement of the purchase consideration"],
        objectives: ["Explain the purchase of a business and the purchase consideration", "Calculate goodwill or capital reserve on purchase", "Record the purchase in the books of the buyer", "Record the settlement of the purchase consideration"],
        lesson: {
          title: "Buying an Existing Business",
          summary: "Record the purchase of a business and calculate goodwill or capital reserve.",
          minutes: 40,
          notes: `## Purchase of business
An existing business may be bought by a sole trader, a partnership or — most often — a **limited company**. The seller is the **vendor**; the buyer is the **purchaser**.
The purchaser takes over some or all of the **assets** and may take over the **liabilities**, at values agreed between the parties (which may differ from the vendor's book values).

## Purchase consideration
The **price paid by the purchaser** to the vendor for the business. It may be settled in **cash**, **shares**, **debentures** or a combination.

## Net assets
**net assets taken over = agreed value of assets taken over − liabilities taken over**
*Example:* assets ₦120,000; liabilities ₦20,000: net assets = **₦100,000**.

## Goodwill
If the **purchase consideration exceeds the net assets** acquired, the excess is **goodwill** — the price paid for the reputation and connections of the business. It is an **intangible fixed asset**.
**goodwill = purchase consideration − net assets taken over**
*Examples:*
- price ₦130,000; net assets ₦100,000: goodwill = **₦30,000**
- premises ₦80,000, stock ₦30,000 and debtors ₦20,000 are taken over, with creditors of ₦15,000; the price is ₦140,000. Net assets = 130,000 − 15,000 = ₦115,000; goodwill = **₦25,000**

## Capital reserve
If the purchase consideration is **less** than the net assets acquired, the difference is a **capital reserve** (sometimes called negative goodwill) — a gain to the purchaser, not available for dividend.
*Example:* price ₦100,000; net assets ₦115,000: capital reserve = **₦15,000**.

## Entries in the purchaser's books
A **business purchase account** and a **vendor's account** are used.
1. **for the consideration agreed**: debit Business purchase account; credit Vendor
2. **for the assets taken over**: debit the individual asset accounts (at agreed values) and **Goodwill** (if any); credit Business purchase account
3. **for the liabilities taken over**: debit Business purchase account; credit the individual liability accounts
4. **for a capital reserve**: credit Capital reserve
5. **for settlement**: debit Vendor; credit Bank, Share capital (and Share premium) or Debentures

### Short method (journal)
Debit all the assets and goodwill; credit the liabilities and the vendor.

## Settlement by shares
If the vendor is paid in shares issued **at a premium**, the excess over the nominal value is credited to **share premium**.
*Example:* a consideration of ₦140,000 is settled by 100,000 ordinary shares of ₦1 each issued at **₦1.40**: share capital ₦100,000; share premium ₦40,000.

## The new balance sheet
After the purchase, the purchaser's balance sheet includes the assets and liabilities taken over at their **agreed values**, goodwill (or capital reserve), and the shares or debentures issued.

## Assets and liabilities not taken over
Items retained by the vendor — often cash, bank and sometimes debtors and creditors — are excluded. Where debtors and creditors are **not** taken over, the purchaser may still collect and pay them **on behalf of the vendor**, recording the transactions in a debtors' and creditors' suspense (vendor's) account, for a commission.

## In the vendor's books
The vendor closes his books through a **realisation account**: assets are transferred to it at book value; the purchase consideration is credited; the difference is the profit or loss on the sale of the business, taken to the capital account(s).

## Reasons for purchasing a business
to gain an established market and goodwill; to obtain assets, staff and a site ready for use; to remove a competitor; to expand quickly.

## Conversion of a partnership into a company
A common case: the partners sell the business to a new company formed by them, receiving shares in the proportions of their capitals.`,
          examples: `**Example 1.** Assets taken over are valued at ₦500,000 and liabilities at ₦120,000; the price is ₦450,000. Find the goodwill. *Solution:* net assets ₦380,000; goodwill = **₦70,000**.

**Example 2.** A business with net assets of ₦260,000 is bought for ₦240,000. What arises? *Solution:* a **capital reserve of ₦20,000**.

**Example 3.** A consideration of ₦300,000 is settled by 200,000 shares of ₦1 each. Find the premium per share. *Solution:* ₦1.50 − ₦1 = **50 kobo**.`,
        },
        questions: [
          ["E", "The price paid by a buyer to acquire an existing business is the", "purchase consideration", "share premium", "working capital", "net book value", "It may be settled in cash, shares or debentures."],
          ["E", "The person or firm that sells a business is called the", "vendor", "purchaser", "debtor", "underwriter", "The buyer is the purchaser."],
          ["E", "When the purchase price of a business exceeds the value of the net assets acquired, the excess is", "goodwill", "capital reserve", "share premium", "revenue reserve", "It is paid for the reputation of the business."],
          ["M", "A business has assets valued at ₦120,000 and liabilities of ₦20,000. The net assets taken over are", "₦100,000", "₦140,000", "₦120,000", "₦20,000", "Assets less liabilities."],
          ["M", "Net assets of ₦100,000 are acquired for a purchase consideration of ₦130,000. Goodwill is", "₦30,000", "₦230,000", "₦100,000", "₦130,000", "Price less net assets."],
          ["M", "When the purchase consideration is less than the net assets acquired, the difference is credited to", "capital reserve", "goodwill", "profit and loss account", "share capital", "It is a gain not available for dividend."],
          ["M", "In the purchaser's books, the agreed purchase price is debited to the", "business purchase account", "vendor's account", "share capital account", "goodwill account only", "The vendor's account is credited."],
          ["H", "A company takes over premises ₦80,000, stock ₦30,000 and debtors ₦20,000, together with creditors of ₦15,000, for a consideration of ₦140,000. Goodwill is", "₦25,000", "₦10,000", "₦40,000", "₦15,000", "Net assets are ₦115,000."],
          ["H", "A business with net assets valued at ₦115,000 is purchased for ₦100,000. The transaction gives rise to", "a capital reserve of ₦15,000", "goodwill of ₦15,000", "a share premium of ₦15,000", "a loss of ₦15,000 in the profit and loss account", "The price is below the net assets."],
          ["H", "A purchase consideration of ₦140,000 is settled by issuing 100,000 ordinary shares of ₦1 each. The share premium arising is", "₦40,000", "₦140,000", "₦100,000", "₦14,000", "Each share is issued at ₦1.40."],
        ],
      },
      {
        week: 2,
        title: "Interpretation of accounts: ratio analysis",
        subtopics: ["Purpose and users of ratio analysis", "Profitability ratios", "Liquidity ratios", "Activity (efficiency) ratios and limitations"],
        objectives: ["Explain the purpose of interpreting accounts", "Calculate and interpret profitability ratios", "Calculate and interpret liquidity ratios", "Calculate activity ratios and state the limitations of ratio analysis"],
        lesson: {
          title: "Reading the Accounts",
          summary: "Calculate and interpret the main accounting ratios.",
          minutes: 40,
          notes: `## Interpretation of accounts
The **analysis of financial statements to assess the performance and financial position** of a business. Figures are turned into **ratios** so that they can be compared — with previous years, with other firms in the industry, and with targets.

### Users
owners and shareholders (profitability); management (control); creditors and banks (liquidity and security); investors; government; employees.

## Profitability ratios
They measure how well the business earns profit.
### Gross profit percentage (margin)
**gross profit ÷ sales × 100**
*Example:* gross profit ₦40,000; sales ₦160,000: **25%**.
A fall may be due to lower selling prices, higher cost of goods, stock losses or a change in the sales mix.

### Mark-up
gross profit ÷ cost of sales × 100.

### Net profit percentage
**net profit ÷ sales × 100**
*Example:* net profit ₦12,000; sales ₦160,000: **7.5%**.
It reflects control of expenses.

### Return on capital employed (ROCE)
**net profit ÷ capital employed × 100**
*Example:* net profit ₦30,000; capital employed ₦150,000: **20%**.
The most important measure of overall performance; it is compared with the return available elsewhere.

### Expenses to sales
expenses ÷ sales × 100.

## Liquidity (solvency) ratios
They measure the ability to pay short-term debts.
### Current ratio (working capital ratio)
**current assets ÷ current liabilities**
*Example:* current assets ₦60,000; current liabilities ₦30,000: **2 : 1**.
About 2 : 1 is often regarded as satisfactory; too low suggests difficulty in paying debts; too high suggests idle resources.

### Quick ratio (acid-test or liquid ratio)
**(current assets − stock) ÷ current liabilities**
*Example:* current assets ₦60,000; stock ₦24,000; current liabilities ₦30,000: 36,000 ÷ 30,000 = **1.2 : 1**.
Stock is excluded because it is the least liquid current asset. About 1 : 1 is the usual guide.

### Working capital
current assets − current liabilities.

## Activity (efficiency) ratios
They show how effectively assets are used.
### Rate of stock turnover (stock turn)
**cost of goods sold ÷ average stock**, where average stock = (opening stock + closing stock) ÷ 2
*Example:* cost of goods sold ₦120,000; average stock ₦20,000: **6 times** a year — stock is held for about two months.
A high rate means goods sell quickly.

### Debtors' collection period
**debtors ÷ credit sales × 365 days**
*Example:* debtors ₦30,000; credit sales ₦219,000: **50 days**.
It is compared with the credit period allowed; a long period suggests poor credit control.

### Creditors' payment period
creditors ÷ credit purchases × 365 days.

### Asset turnover
sales ÷ capital employed (or fixed assets).

## Long-term solvency and investment ratios
- **gearing** — long-term fixed-interest capital ÷ total capital employed; a highly geared company carries more risk
- **earnings per share** — profit after tax and preference dividend ÷ number of ordinary shares
- **dividend per share**; dividend yield; price–earnings ratio; dividend cover

## Using ratios
A single ratio means little; look for **trends** and compare with similar businesses. Link ratios together — a falling net profit percentage with a steady gross profit percentage points to rising expenses.

## Limitations of ratio analysis
- based on **past (historical)** figures; no guarantee of the future
- **inflation** distorts comparisons over time
- different firms use **different accounting policies** — depreciation, stock valuation
- the balance sheet shows the position on **one day**, which may not be typical; figures can be "window-dressed"
- **non-financial factors** — quality of management, staff morale, reputation — are ignored
- ratios show symptoms, not causes
- firms differ in size, age and nature

## Other tools
comparative statements; common-size statements; cash flow and funds flow statements.`,
          examples: `**Example 1.** Current assets ₦84,000; current liabilities ₦42,000. Find the current ratio. *Solution:* **2 : 1**.

**Example 2.** Opening stock ₦18,000; closing stock ₦22,000; cost of sales ₦160,000. Find the rate of stock turnover. *Solution:* average stock ₦20,000; **8 times**.

**Example 3.** Net profit ₦45,000; capital employed ₦300,000. Find the ROCE. *Solution:* **15%**.`,
        },
        questions: [
          ["E", "The ratio of current assets to current liabilities is the", "current ratio", "gross profit ratio", "stock turnover ratio", "gearing ratio", "It measures short-term solvency."],
          ["E", "Gross profit expressed as a percentage of sales is the", "gross profit margin", "mark-up", "return on capital employed", "quick ratio", "It shows the profit on trading."],
          ["E", "The ratio that measures the overall return earned on the funds invested in a business is the", "return on capital employed", "current ratio", "acid-test ratio", "debtors' collection period", "Net profit is compared with capital employed."],
          ["M", "A business has current assets of ₦60,000 and current liabilities of ₦30,000. Its current ratio is", "2 : 1", "1 : 2", "3 : 1", "0.5 : 1", "60,000 ÷ 30,000."],
          ["M", "Current assets are ₦60,000, including stock of ₦24,000, and current liabilities are ₦30,000. The quick ratio is", "1.2 : 1", "2 : 1", "0.8 : 1", "2.8 : 1", "(60,000 − 24,000) ÷ 30,000."],
          ["M", "Gross profit is ₦40,000 and sales are ₦160,000. The gross profit percentage is", "25%", "40%", "20%", "4%", "40,000 ÷ 160,000 × 100."],
          ["M", "Cost of goods sold is ₦120,000 and average stock is ₦20,000. The rate of stock turnover is", "6 times", "20 times", "12 times", "0.17 times", "120,000 ÷ 20,000."],
          ["H", "Debtors are ₦30,000 and credit sales for the year are ₦219,000. The debtors' collection period is", "50 days", "73 days", "30 days", "137 days", "30,000 ÷ 219,000 × 365."],
          ["H", "Net profit is ₦30,000 and capital employed is ₦150,000. The return on capital employed is", "20%", "5%", "30%", "15%", "30,000 ÷ 150,000 × 100."],
          ["H", "Stock is excluded in calculating the acid-test ratio because it", "is the least liquid of the current assets", "is a fixed asset", "is always overvalued", "belongs to creditors", "It may take time to turn into cash."],
        ],
      },
      {
        week: 3,
        title: "Public sector accounting: principles and terminology",
        subtopics: ["Meaning and objectives of public sector accounting", "Differences from private sector accounting", "Bases of accounting and fund accounting", "Government funds and key officers"],
        objectives: ["Explain public sector accounting and its objectives", "Distinguish public sector from private sector accounting", "Explain the bases of accounting and the idea of fund accounting", "Describe the main government funds and the officers responsible for them"],
        lesson: {
          title: "Government Accounting",
          summary: "Explain the principles, funds and officers involved in public sector accounting.",
          minutes: 40,
          notes: `## Public sector accounting
The process of **recording, classifying, summarising and reporting the financial transactions of governments and their agencies** — federal, state and local governments, ministries, departments, parastatals.

## Objectives
- to show that public funds were **received and spent according to law** (**accountability and stewardship**)
- to **control** revenue and expenditure and prevent fraud and waste
- to provide information for **planning and budgeting**
- to show the **financial position** of the government
- to enable the legislature and the public to assess performance
- to meet constitutional and legal requirements

## Public and private sector accounting compared
| Public sector | Private sector |
|---|---|
| aim: **service** to the public | aim: **profit** |
| mainly the **cash basis** | **accruals** basis |
| **fund accounting** | proprietary accounting — capital and profit |
| revenue from **taxes**, royalties, grants | revenue from sales |
| governed by the constitution and financial regulations | governed by company law and standards |
| the budget is a legal authority to spend | the budget is a management guide |
| accountable to the legislature and citizens | accountable to owners and shareholders |
| no profit and loss account | profit and loss account prepared |

## Bases of accounting
- **cash basis** — revenue is recorded only when **cash is received** and expenditure only when **cash is paid**. Simple and easy to check against the budget, but it ignores debtors, creditors and fixed assets
- **accrual basis** — revenue is recorded when **earned** and expenditure when **incurred**, whether or not cash has moved; assets and liabilities are fully shown
- **modified cash** and **modified accrual** bases — combinations of the two
- **commitment basis** — an order or contract is recorded as soon as it is placed, to prevent overspending
Governments traditionally used the cash basis and have been moving towards **International Public Sector Accounting Standards (IPSAS)** on the accrual basis.

## Fund accounting
A **fund** is a **separate accounting entity with its own set of accounts**, set up to carry out specific activities. Money in each fund may be used only for its stated purpose.

## The main funds in Nigeria
- **Federation Account** — into which all **federally collected revenue** is paid, to be shared among the federal, state and local governments
- **Consolidated Revenue Fund (CRF)** — the main fund of each government, into which its revenues are paid and from which **recurrent expenditure** and statutory payments are met; no money may be withdrawn except as authorised by law
- **Development (Capital) Fund** — for **capital projects**; financed by transfers from the CRF, loans and grants
- **Contingencies Fund** — for **urgent and unforeseen expenditure**, later regularised by a supplementary appropriation
- special and trust funds — pensions, education

## Key officers and bodies
- **Minister (Commissioner) of Finance** — overall control of public finances
- **Accountant-General** — the chief accounting officer of the government's receipts and payments; head of the **Treasury**; prepares the government's financial statements
- **Auditor-General** — **audits** the accounts of government and reports to the **legislature**
- **accounting officers** — permanent secretaries and heads of agencies, responsible for the funds of their ministries
- the **Public Accounts Committee** of the legislature — examines the Auditor-General's report
- the Revenue Mobilisation, Allocation and Fiscal Commission; revenue-collecting agencies (the federal revenue service, customs)

## Terminology
- **vote** — the amount authorised for a ministry or purpose in the approved budget
- **head** and **sub-head** — classifications of revenue and expenditure in the estimates
- **warrant** — the written **authority to incur expenditure** issued by the Minister of Finance to the Accountant-General and accounting officers
- **Authority to Incur Expenditure (AIE)** — passed down to officers who actually spend
- **virement** — the authorised **transfer of funds from one sub-head to another** within the same head
- **appropriation** — the legislature's approval of spending (the Appropriation Act)
- **imprest** — an advance to an officer for small payments, to be accounted for
- **payment voucher** — the document supporting every payment
- **Treasury Single Account** — a unified structure of government bank accounts

## Users
the legislature; the executive; the public and taxpayers; lenders and donors; rating agencies; researchers.`,
          examples: `**Example 1.** State two differences between public and private sector accounting. *Answer:* The public sector aims at **service** and commonly uses the **cash basis**; the private sector aims at **profit** and uses the **accruals basis**.

**Example 2.** Into which fund is the revenue of a government paid for meeting recurrent expenditure? *Answer:* The **Consolidated Revenue Fund**.

**Example 3.** What is virement? *Answer:* The authorised **transfer of funds between sub-heads** of the same head.`,
        },
        questions: [
          ["E", "The recording and reporting of the financial transactions of governments and their agencies is", "public sector accounting", "cost accounting", "partnership accounting", "branch accounting", "It emphasises accountability for public funds."],
          ["E", "The main objective of government activities, unlike those of private firms, is", "service to the public", "profit maximisation", "payment of dividends", "issue of shares", "Public bodies are not run for profit."],
          ["E", "The fund into which a government's revenues are paid and from which recurrent expenditure is met is the", "Consolidated Revenue Fund", "Contingencies Fund", "share premium account", "accumulated fund", "Withdrawals must be authorised by law."],
          ["M", "The officer who audits government accounts and reports to the legislature is the", "Auditor-General", "Accountant-General", "Minister of Finance", "Permanent Secretary", "He is independent of the executive."],
          ["M", "The chief accounting officer for the receipts and payments of government, who heads the Treasury, is the", "Accountant-General", "Auditor-General", "Speaker", "Chief Justice", "He prepares the government's financial statements."],
          ["M", "Under the cash basis of accounting, revenue is recorded when", "cash is received", "it is earned", "an invoice is issued", "the budget is approved", "Expenditure is likewise recorded when paid."],
          ["M", "The written authority issued by the Minister of Finance permitting expenditure to be incurred is a", "warrant", "virement", "voucher", "debenture", "No money may be spent without it."],
          ["H", "The authorised transfer of funds from one sub-head of expenditure to another under the same head is", "virement", "appropriation", "imprest", "derivation", "It allows flexibility within an approved vote."],
          ["H", "Urgent and unforeseen government expenditure is met from the", "Contingencies Fund", "Development Fund", "Federation Account", "pension fund", "The spending is later regularised by the legislature."],
          ["H", "A separate accounting entity with its own set of accounts, established to carry out specific government activities, is", "a fund", "a vote", "a warrant", "a sub-head", "This is the basis of fund accounting."],
        ],
      },
      {
        week: 4,
        title: "Public sector accounting: revenue, expenditure and the budget",
        subtopics: ["Sources of government revenue", "Recurrent and capital expenditure", "The budget and budgetary control", "Government financial statements and audit"],
        objectives: ["Describe the sources of revenue of the three tiers of government", "Classify government expenditure", "Explain the government budget and how spending is controlled", "Describe government financial statements and the audit process"],
        lesson: {
          title: "Government Revenue, Spending and Accounts",
          summary: "Describe government revenue and expenditure, the budget process and financial statements.",
          minutes: 40,
          notes: `## Sources of government revenue
### Federal
- **petroleum profits tax**, royalties and other oil revenue
- **companies income tax**
- **customs and excise duties**
- **value added tax** (shared with the states and local governments)
- fees, licences, earnings from government property, interest and dividends
- loans and grants
### State
- the **statutory allocation** from the Federation Account
- **internally generated revenue**: personal income tax (PAYE), road taxes and vehicle licences, land fees, stamp duties, fines, earnings of state enterprises
- share of value added tax; loans and grants
### Local government
- statutory allocation from the Federation Account and from the state
- **tenement rates**, market and motor-park fees, shop and kiosk licences, marriage, birth and death registration fees, radio and television licences, fines

## Classification of revenue
- **recurrent revenue** — arises regularly: taxes, fees, rents
- **capital receipts** — loans, grants, sale of government assets

## Government expenditure
### Recurrent expenditure
Day-to-day costs of running government, repeated every year:
- **personnel costs** — salaries, wages, allowances, pensions
- **overhead costs** — maintenance, stationery, travel, utilities
- debt servicing; subventions to agencies
### Capital expenditure
Spending on **projects of a permanent nature**: roads, bridges, schools, hospitals, dams, power stations, purchase of land, buildings and equipment.

## The budget
A **statement of the government's estimated revenue and proposed expenditure for a financial year**, expressing its policies and priorities. When passed by the legislature and signed, it becomes the **Appropriation Act** — the **legal authority** to spend.

### Budget cycle
1. **preparation** — call circular; ministries submit estimates; consideration by the budget office and the executive council
2. **approval (authorisation)** — presentation to the legislature; debate; committee hearings; passage and assent
3. **implementation (execution)** — release of funds by warrants; spending by ministries
4. **monitoring, audit and evaluation**

### Types
balanced, surplus and deficit budgets; a **supplementary budget** provides for additional spending during the year.

### Budgetary control
- no expenditure without **legislative approval** and a **warrant**
- spending limited to the **approved vote** for each head and sub-head
- **virement** only with authority
- **vote books** record each payment and the balance of the vote remaining
- **unspent balances lapse** at the end of the financial year
*Example:* approved vote ₦2,000,000; expenditure for the year ₦1,650,000: unspent balance **₦350,000**, which lapses.
*Example:* estimated revenue ₦500 million; actual revenue ₦460 million: a **shortfall of ₦40 million**.

## Books and documents
cash book; vote book (departmental vote expenditure account book); payment vouchers; receipt booklets; store ledgers; imprest and advances registers; the main ledger and transcripts kept by the Treasury.

## Government financial statements
Prepared by the **Accountant-General**:
- statement of the **Consolidated Revenue Fund** — revenue and recurrent expenditure
- statement of the **Development (Capital) Fund**
- **statement of assets and liabilities** — the government's equivalent of a balance sheet
- cash flow statement; statement of the public debt; notes
Under IPSAS accrual: statements of financial position, financial performance, changes in net assets and cash flows, and a comparison of budget and actual amounts.

## Audit and accountability
- the **Auditor-General** examines the accounts and reports to the legislature on whether money was spent as approved and with due economy
- the **Public Accounts Committee** considers the report and may summon accounting officers
- internal audit units in ministries; due process and procurement rules
- anti-corruption agencies; public access to information

## Problems of public sector accounting in Nigeria
late preparation and audit of accounts; poor record keeping; shortage of qualified staff; corruption and weak enforcement; extra-budgetary spending; slow adoption of modern systems.
## Reforms
the Treasury Single Account; integrated payroll and financial management information systems; adoption of IPSAS; fiscal responsibility and public procurement laws.`,
          examples: `**Example 1.** Classify the payment of teachers' salaries and the building of a bridge. *Answer:* Salaries are **recurrent** expenditure; the bridge is **capital** expenditure.

**Example 2.** A ministry's vote is ₦5,000,000 and it has spent ₦4,200,000. What is the balance of the vote? *Solution:* **₦800,000**.

**Example 3.** Who prepares and who audits the government's financial statements? *Answer:* The **Accountant-General** prepares them; the **Auditor-General** audits them.`,
        },
        questions: [
          ["E", "Payment of the salaries of civil servants is an example of", "recurrent expenditure", "capital expenditure", "capital receipts", "internally generated revenue", "It recurs every year."],
          ["E", "The construction of a new hospital by the government is", "capital expenditure", "recurrent expenditure", "recurrent revenue", "a statutory allocation", "It creates a permanent asset."],
          ["E", "Tenement rates and market fees are sources of revenue for", "local governments", "the federal government only", "the central bank", "limited companies", "They are collected at the local level."],
          ["M", "The share of federally collected revenue paid to states and local governments from the Federation Account is the", "statutory allocation", "internally generated revenue", "tenement rate", "imprest", "It is the largest source of revenue for most states."],
          ["M", "When passed by the legislature and signed, the budget becomes the", "Appropriation Act", "Finance Warrant", "Auditor-General's report", "Federation Account", "It gives legal authority to spend."],
          ["M", "The committee of the legislature that examines the Auditor-General's report on government accounts is the", "Public Accounts Committee", "Revenue Allocation Committee", "Board of Directors", "Budget Office", "It may summon accounting officers to explain."],
          ["M", "The government's equivalent of a balance sheet is the", "statement of assets and liabilities", "Consolidated Revenue Fund statement", "vote book", "payment voucher", "It shows the financial position at the year end."],
          ["H", "A ministry had an approved vote of ₦2,000,000 for a sub-head and spent ₦1,650,000 during the year. The unspent balance, which lapses at the year end, is", "₦350,000", "₦3,650,000", "₦1,650,000", "₦2,000,000", "2,000,000 − 1,650,000."],
          ["H", "A government estimated its revenue at ₦500 million but actually collected ₦460 million. The result is", "a revenue shortfall of ₦40 million", "a revenue surplus of ₦40 million", "a budget surplus of ₦460 million", "a virement of ₦40 million", "Actual revenue fell below the estimate."],
          ["H", "The book kept by a ministry to record each payment against an approved sub-head and show the balance remaining is the", "vote book", "sales day book", "share register", "petty cash voucher", "It prevents overspending of the vote."],
        ],
      },
      {
        week: 5,
        title: "Consignment accounts",
        subtopics: ["Meaning and parties to a consignment", "Documents and commission", "Accounts in the consignor's books", "Valuation of unsold stock"],
        objectives: ["Explain consignment and identify the parties", "Describe the pro-forma invoice and account sales and calculate commission", "Prepare the consignment account in the consignor's books", "Value unsold stock on consignment"],
        lesson: {
          title: "Goods Sent to an Agent for Sale",
          summary: "Record consignment transactions and calculate the profit on a consignment.",
          minutes: 40,
          notes: `## Consignment
The sending of goods by their owner to an **agent** in another place, who **sells them on the owner's behalf** for a commission.
- the **consignor** — the **owner (principal)** who sends the goods
- the **consignee** — the **agent** who receives and sells them
The goods **remain the property of the consignor** until sold; the consignee does not buy them. A consignment is therefore **not a sale**.

## Consignment and sale compared
| Consignment | Sale |
|---|---|
| ownership stays with the consignor until the goods are sold | ownership passes to the buyer |
| relationship of **principal and agent** | relationship of seller and buyer (debtor and creditor) |
| unsold goods may be returned | goods are not normally returnable |
| the consignor bears the risk and expenses | the buyer bears the risk |
| a pro-forma invoice is sent | a sales invoice is sent |

## Documents
- **pro-forma invoice** — sent by the consignor with the goods, showing quantities and the suggested prices; it is **for information only**, not a demand for payment
- **account sales** — the statement sent by the **consignee to the consignor**, showing the goods sold, the **expenses** paid, the **commission** charged and the **net amount due**
- bill of lading, insurance certificate

## Commission
- **ordinary commission** — a percentage of **gross sales**, for selling the goods
- **del credere commission** — an **extra** commission paid to a consignee who **guarantees payment** by the customers; he then **bears any bad debts**
- over-riding commission — for sales above a set price
*Examples:*
- commission of 5% on sales of ₦200,000 = **₦10,000**
- commission of 5% plus del credere 2% on sales of ₦300,000 = 7% × 300,000 = **₦21,000**

## Accounts in the consignor's books
1. **Goods sent on consignment account** — credited with the cost of goods sent; transferred to the trading account
2. **Consignment account** (one for each consignment) — a nominal account showing the **profit or loss**
3. **Consignee's personal account**

### Consignment account
| Debit | Credit |
|---|---|
| cost of **goods sent** | **sales** (per the account sales) |
| **consignor's expenses** — freight, insurance, packing | **unsold stock** c/d |
| **consignee's expenses** — landing charges, duty, storage, selling expenses | |
| consignee's **commission** | |
| **profit** → profit and loss account | (loss) |

### Consignee's account
Debited with sales; credited with his expenses, commission and remittances. The balance is what he owes.

### Worked example
Goods costing ₦100,000 are consigned. The consignor pays freight and insurance of ₦5,000. The consignee pays expenses of ₦3,000, sells **all** the goods for ₦150,000 and charges 10% commission.
- commission = 10% × 150,000 = ₦15,000
- **profit** = 150,000 − 100,000 − 5,000 − 3,000 − 15,000 = **₦27,000**
- **amount remitted** by the consignee = 150,000 − 3,000 − 15,000 = **₦132,000**

## Unsold stock
If some goods remain unsold, they are valued at **cost plus a proportion of the non-recurring expenses** incurred in getting them to the consignee's premises — the consignor's freight and insurance and the consignee's landing charges and duty. **Selling expenses, storage and commission are excluded.**
*Example:* goods cost ₦100,000; consignor's expenses ₦5,000; consignee's landing charges ₦3,000; **one-quarter** of the goods is unsold.
Value of unsold stock = ¼ × (100,000 + 5,000 + 3,000) = **₦27,000**.
It is credited to the consignment account and carried down as the opening balance for the next period.

## Losses
- **normal loss** (evaporation, leakage) — spread over the remaining good units
- **abnormal loss** (fire, theft) — valued like stock, credited to the consignment account and charged to the profit and loss account or claimed from insurers

## In the consignee's books
He does **not** record the goods as purchases. He keeps a **consignor's account**: credited with sales made; debited with expenses paid, commission earned and remittances. His income is the **commission**.

## Advance by the consignee
A consignee may send money or accept a bill of exchange in advance; it is deducted when he remits the balance.

## Goods invoiced above cost
If goods are sent at an invoice price above cost, the loading is removed by adjustment so that the true profit is shown.`,
          examples: `**Example 1.** Who is the consignee? *Answer:* The **agent** who receives the goods and sells them for the owner.

**Example 2.** Sales on consignment were ₦400,000; commission is 6%. Find the commission. *Solution:* **₦24,000**.

**Example 3.** Goods cost ₦60,000 with ₦6,000 of freight; one-third is unsold. Value the stock. *Solution:* ⅓ × 66,000 = **₦22,000**.`,
        },
        questions: [
          ["E", "The owner who sends goods to an agent for sale on his behalf is the", "consignor", "consignee", "underwriter", "drawee", "The agent is the consignee."],
          ["E", "The agent who receives goods on consignment and sells them for a commission is the", "consignee", "consignor", "vendor", "debenture holder", "He does not own the goods."],
          ["E", "The statement sent by the consignee to the consignor showing sales, expenses, commission and the balance due is the", "account sales", "pro-forma invoice", "debit note", "bill of lading", "It is the basis for the consignor's entries."],
          ["M", "A consignee is entitled to commission of 5% on sales of ₦200,000. The commission is", "₦10,000", "₦1,000", "₦40,000", "₦190,000", "5% of ₦200,000."],
          ["M", "The extra commission paid to a consignee who guarantees payment by customers is", "del credere commission", "over-riding commission", "underwriting commission", "ordinary commission", "He then bears any bad debts."],
          ["M", "Goods sent on consignment remain the property of the", "consignor until they are sold", "consignee from the date of receipt", "shipping company", "customer before sale", "A consignment is not a sale."],
          ["M", "The document sent by the consignor with the goods, for information only, is the", "pro-forma invoice", "account sales", "receipt", "credit note", "It is not a demand for payment."],
          ["H", "Goods costing ₦100,000 are consigned. The consignor pays expenses of ₦5,000; the consignee pays ₦3,000, sells all the goods for ₦150,000 and charges 10% commission. The profit on the consignment is", "₦27,000", "₦42,000", "₦30,000", "₦35,000", "150,000 − 100,000 − 5,000 − 3,000 − 15,000."],
          ["H", "A consignee sells goods for ₦150,000, having paid expenses of ₦3,000, and is entitled to 10% commission. The amount he remits to the consignor is", "₦132,000", "₦147,000", "₦135,000", "₦150,000", "150,000 − 3,000 − 15,000."],
          ["H", "A consignee earns 5% ordinary commission and 2% del credere commission on sales of ₦300,000. His total commission is", "₦21,000", "₦15,000", "₦6,000", "₦30,000", "7% of ₦300,000."],
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
        title: "Hire purchase accounts",
        subtopics: ["Meaning and features of hire purchase", "Hire purchase price, cash price and interest", "Entries in the buyer's books", "Hire purchase and credit sale compared"],
        objectives: ["Explain hire purchase and its features", "Calculate hire purchase interest", "Record hire purchase transactions in the buyer's books", "Distinguish hire purchase from a credit sale and explain repossession"],
        lesson: {
          title: "Buying by Instalments",
          summary: "Calculate hire purchase interest and record the transactions in the buyer's books.",
          minutes: 40,
          notes: `## Hire purchase
An agreement under which the buyer (the **hirer**) takes **possession** of goods immediately, pays an initial **deposit** and the balance by **instalments**, but **ownership passes only when the final instalment is paid**. Until then the goods legally belong to the seller (or finance company), who may **repossess** them if the hirer defaults.

## Terms
- **cash price** — the price if the goods were bought outright for cash
- **hire purchase (HP) price** — the total payable under the agreement: **deposit + all instalments**
- **hire purchase interest** — the charge for paying over time:
  **HP interest = HP price − cash price**
- **deposit (down payment)** — paid at the start
- **instalments** — the periodic payments

*Example:* cash price ₦100,000; deposit ₦20,000; four instalments of ₦25,000.
HP price = 20,000 + 100,000 = **₦120,000**; HP interest = 120,000 − 100,000 = **₦20,000**.

## Interest on the outstanding balance
Interest is often charged at a stated rate **on the cash price still owing** at the start of each period.
*Example:* cash price ₦100,000; deposit ₦20,000; interest at 10% a year on the balance outstanding; annual instalment ₦30,000.
- balance after the deposit: ₦80,000
- year 1 interest: 10% × 80,000 = **₦8,000**
- balance at the end of year 1: 80,000 + 8,000 − 30,000 = **₦58,000**
- year 2 interest: 10% × 58,000 = ₦5,800; balance: 58,000 + 5,800 − 30,000 = ₦33,800

## Entries in the buyer's (hirer's) books
The asset is brought in at its **cash price**, since that is its true cost; the **interest is a finance expense**.
1. **on acquisition**: debit the **Asset account**; credit the **HP company (vendor) account** — with the **cash price**
2. **deposit paid**: debit HP company; credit Bank
3. **interest for the period**: debit **HP interest account**; credit HP company
4. **instalment paid**: debit HP company; credit Bank
5. **year end**: transfer **HP interest** to the **profit and loss account**
6. **depreciation**: calculated on the **cash price** — debit Profit and loss; credit Provision for depreciation
*Example:* depreciation at 20% straight line on a cash price of ₦100,000 = **₦20,000** a year.

### Balance sheet
The asset is shown at **cash price less depreciation**; the balance still owing to the HP company (excluding future interest) is a **liability** — the part due within a year as a current liability.

## Entries in the seller's books
The seller records the sale at **cash price** and treats the interest as income **spread over the period of the agreement**, as instalments fall due. A provision is made for **unrealised profit and interest** on instalments not yet due.

## Hire purchase and credit sale compared
| Hire purchase | Credit (instalment) sale |
|---|---|
| ownership passes on payment of the **last instalment** | ownership passes **at once** |
| the seller may **repossess** on default | the seller can only **sue for the debt** |
| the hirer cannot sell the goods before final payment | the buyer may resell the goods |
| the hirer is a bailee until the final payment | the buyer is a debtor |

## Repossession
If the hirer defaults, the seller may take back the goods. The hirer loses the goods and (usually) the payments already made, which are treated as hire charges. Laws protect hirers who have already paid a substantial part of the price.

## Advantages of hire purchase
- to the **buyer**: use of the asset immediately without paying the full price; payment spread out of earnings from the asset
- to the **seller**: more sales; interest income; security through the right to repossess

## Disadvantages
- the total cost is **higher** than the cash price
- the risk of repossession and loss of instalments paid
- buyers may over-commit themselves
- the seller's capital is tied up and bad debts may arise`,
          examples: `**Example 1.** Cash price ₦250,000; deposit ₦50,000; 10 instalments of ₦24,000. Find the HP interest. *Solution:* HP price = 50,000 + 240,000 = ₦290,000; interest = **₦40,000**.

**Example 2.** At what value does the hirer record the asset? *Answer:* At its **cash price**.

**Example 3.** When does ownership pass under hire purchase? *Answer:* On payment of the **final instalment**.`,
        },
        questions: [
          ["E", "Under a hire purchase agreement, ownership of the goods passes to the buyer", "when the final instalment is paid", "when the deposit is paid", "on delivery of the goods", "when the agreement is signed", "Until then the seller remains the owner."],
          ["E", "The initial payment made at the start of a hire purchase agreement is the", "deposit", "premium", "dividend", "royalty", "The balance is paid by instalments."],
          ["E", "Hire purchase interest is the difference between the hire purchase price and the", "cash price", "deposit", "first instalment", "scrap value", "It is the charge for paying over time."],
          ["M", "An asset with a cash price of ₦100,000 is bought on hire purchase for a deposit of ₦20,000 and four instalments of ₦25,000. The hire purchase interest is", "₦20,000", "₦25,000", "₦120,000", "₦5,000", "Hire purchase price of ₦120,000 less cash price."],
          ["M", "In the books of the buyer, an asset acquired on hire purchase is debited at its", "cash price", "hire purchase price", "deposit only", "scrap value", "The interest is treated separately as an expense."],
          ["M", "A feature that distinguishes hire purchase from a credit sale is that under hire purchase the seller", "may repossess the goods if the buyer defaults", "transfers ownership immediately", "cannot charge interest", "receives no deposit", "Ownership has not yet passed to the buyer."],
          ["M", "In the buyer's books, hire purchase interest for the year is charged to the", "profit and loss account", "asset account", "trading account as purchases", "capital account", "It is a finance expense."],
          ["H", "An asset with a cash price of ₦100,000 is acquired for a deposit of ₦20,000, with interest at 10% per annum on the balance outstanding. The interest for the first year is", "₦8,000", "₦10,000", "₦2,000", "₦12,000", "10% of the ₦80,000 outstanding."],
          ["H", "After a deposit, ₦80,000 of the cash price is outstanding. Interest for the year is ₦8,000 and an instalment of ₦30,000 is paid at the year end. The balance outstanding is", "₦58,000", "₦50,000", "₦42,000", "₦88,000", "80,000 + 8,000 − 30,000."],
          ["H", "A machine bought on hire purchase has a cash price of ₦100,000 and a hire purchase price of ₦120,000. Depreciation at 20% per annum on the straight-line basis is", "₦20,000", "₦24,000", "₦4,000", "₦16,000", "Depreciation is based on the cash price."],
        ],
      },
      {
        week: 2,
        title: "Contract accounts",
        subtopics: ["Nature of contract accounts", "Costs charged to a contract", "Work certified, retention and work in progress", "Profit on uncompleted contracts"],
        objectives: ["Explain the nature and purpose of contract accounts", "Identify the costs charged to a contract account", "Explain work certified, retention money and work in progress", "Calculate the profit to be taken on an uncompleted contract"],
        lesson: {
          title: "Accounting for Long-Term Contracts",
          summary: "Prepare a contract account and calculate the profit to be recognised on an uncompleted contract.",
          minutes: 40,
          notes: `## Contract accounts
Used by builders, civil engineers and shipbuilders whose jobs are **large, carried out on the customer's site and often last more than one accounting year**. A separate **contract account** is opened for **each contract**, so that its cost and profit can be found.
- the **contractor** carries out the work
- the **contractee (client)** is the customer for whom it is done
- the **contract price** is the amount agreed

## Costs debited to the contract account
- **direct materials** sent to the site (from stores or bought directly)
- **direct wages** of site workers
- **direct expenses** — hire of special equipment, architects' fees, site electricity
- **plant and machinery** sent to the site, at cost or book value
- **sub-contractors'** charges
- a share of **head office overheads**
- accrued expenses at the period end

## Items credited
- **materials returned** to stores or transferred to other contracts
- **materials on site** at the end of the period (carried down)
- **plant on site** at its written-down value at the end (carried down) — so that the difference between the two plant figures is the **depreciation** charged
- materials sold or lost (abnormal losses go to profit and loss)
- the **value of work certified** and the **cost of work not yet certified**

### Example of cost to date
Materials issued ₦200,000; wages ₦150,000; plant depreciation ₦30,000; overheads ₦40,000; materials on site at the end ₦20,000.
Cost of work to date = 200,000 + 150,000 + 30,000 + 40,000 − 20,000 = **₦400,000**.

## Work certified
At intervals an **architect or surveyor** inspects the work and issues a **certificate** stating the **value of work satisfactorily completed** (at contract prices). The contractor is paid on the basis of the certificates.

## Retention money
The contractee **holds back a percentage** of the value certified (commonly 10%) until the end of a **defects liability period**, as security against faulty work.
*Example:* work certified ₦500,000; retention 10%: **cash received = ₦450,000**; retention ₦50,000.

## Work not yet certified
Work done since the last certificate, valued **at cost**.

## Work in progress
In the balance sheet: the value of work certified plus the cost of work uncertified, less profit not yet taken (in reserve) and less cash received on account.

## Profit on uncompleted contracts
Prudence requires that **not all** the apparent profit be taken before the contract is finished; but taking no profit until completion would distort results from year to year.

### Notional (apparent) profit
**notional profit = value of work certified − cost of work certified**
(cost of work certified = cost to date − cost of work not yet certified)
*Example:* work certified ₦500,000; cost of work certified ₦420,000: notional profit = **₦80,000**.

### Profit to be taken to the profit and loss account
A common rule when the contract is well advanced:
**profit taken = ⅔ × notional profit × (cash received ÷ work certified)**
*Example:* notional profit ₦80,000; retention 10%, so cash received is 90% of work certified:
profit taken = ⅔ × 80,000 × 0.9 = **₦48,000**. The remaining ₦32,000 is carried forward as a **reserve (profit in suspense)**.

### Guidelines
- **early stages** (say under one-third complete): take **no profit**
- **well advanced**: take a proportion, as above
- **nearly complete**: estimate the total profit and take the proportion earned to date
- an expected **loss** must be provided for **in full** at once

## Completed contracts
On completion the contract account is credited with the contract price (debit the contractee), and the whole balance is the profit or loss.

## Other features
- **escalation clause** — allows the contract price to rise if costs of materials or labour rise
- **cost-plus contracts** — the contractee pays actual cost plus an agreed percentage of profit
- **penalty clause** — damages for late completion
- **progress payments** — instalments received as work proceeds

## Contract and job costing
A contract is a large job, usually done on site and over a long period, with most costs direct.`,
          examples: `**Example 1.** Work certified ₦800,000; retention 5%. Find the cash received. *Solution:* 95% × 800,000 = **₦760,000**.

**Example 2.** Value of work certified ₦600,000; cost of work certified ₦510,000. Find the notional profit. *Solution:* **₦90,000**.

**Example 3.** Why is only part of the notional profit taken to the profit and loss account? *Answer:* **Prudence** — the contract is unfinished and unforeseen losses may arise.`,
        },
        questions: [
          ["E", "In contract accounting, a separate account is opened for", "each contract", "each employee", "each supplier", "each month", "Its costs and profit can then be found."],
          ["E", "The customer for whom a contract is carried out is called the", "contractee", "contractor", "consignor", "underwriter", "The contractor does the work."],
          ["E", "The part of the value of work certified that the client holds back until the work is proved satisfactory is", "retention money", "a premium", "a del credere commission", "a dividend", "It is released after the defects liability period."],
          ["M", "The value of work certified on a contract is ₦500,000 and the retention is 10%. The cash received by the contractor is", "₦450,000", "₦50,000", "₦550,000", "₦500,000", "90% of the value certified."],
          ["M", "The certificate stating the value of work completed on a contract is issued by", "an architect or surveyor", "the contractor's cashier", "the bank manager", "the site labourers", "Payments are made on the basis of the certificates."],
          ["M", "Plant sent to a contract site is recorded in the contract account by", "debiting the contract account", "crediting the contract account", "debiting the client's account", "ignoring it", "Its written-down value at the end is credited back."],
          ["M", "Materials returned from a contract site to the stores are", "credited to the contract account", "debited to the contract account", "treated as sales", "written off as a loss", "They reduce the cost of the contract."],
          ["H", "The value of work certified is ₦500,000 and the cost of work certified is ₦420,000. The notional profit is", "₦80,000", "₦920,000", "₦420,000", "₦8,000", "Value certified less cost of work certified."],
          ["H", "The notional profit on a contract is ₦80,000 and cash received is 90% of work certified. Using two-thirds of notional profit adjusted for cash received, the profit taken to the profit and loss account is", "₦48,000", "₦53,333", "₦72,000", "₦80,000", "⅔ × 80,000 × 0.9."],
          ["H", "On a contract, materials issued were ₦200,000, wages ₦150,000, plant depreciation ₦30,000 and overheads ₦40,000; materials on site at the end were ₦20,000. The cost of work to date is", "₦400,000", "₦420,000", "₦440,000", "₦380,000", "Total costs of ₦420,000 less materials still on site."],
        ],
      },
      {
        week: 3,
        title: "Bills of exchange",
        subtopics: ["Meaning, parties and features of a bill of exchange", "Bills receivable and bills payable", "Discounting and dishonour of bills", "Promissory notes and advantages of bills"],
        objectives: ["Define a bill of exchange and identify its parties", "Record bills receivable and bills payable", "Record the discounting and dishonour of bills", "Distinguish a bill of exchange from a promissory note"],
        lesson: {
          title: "Bills of Exchange",
          summary: "Explain bills of exchange and record bills receivable and payable.",
          minutes: 40,
          notes: `## Bill of exchange
An **unconditional order in writing, addressed by one person to another, signed by the person giving it, requiring the person to whom it is addressed to pay on demand, or at a fixed or determinable future time, a certain sum of money to, or to the order of, a specified person or to the bearer**.
In trade, a seller who gives credit **draws** a bill on the buyer; the buyer **accepts** it by signing, promising to pay on the due date.

## Parties
- the **drawer** — the person who **writes (draws)** the bill: the creditor or seller
- the **drawee** — the person **on whom it is drawn**: the debtor or buyer. On signing "accepted" across it, he becomes the **acceptor**
- the **payee** — the person to whom the money is to be paid; often the drawer himself

## Features
in writing; an unconditional order; a certain sum of money; signed by the drawer; payable on demand or at a fixed future date; a **negotiable instrument** — it can be transferred by endorsement.

## Terms
- **tenor** — the period of the bill (say three months)
- **due date (maturity)** — the date of payment; traditionally **three days of grace** are added to the period of the bill
  *Example:* a bill drawn on 1 March for three months matures on 1 June + 3 days = **4 June**
- **sight (demand) bill** — payable on presentation; **time (usance) bill** — payable at a future date
- **trade bill** — arises from a sale of goods; **accommodation bill** — drawn to help someone raise money, with no underlying sale

## What the holder can do with a bill
1. **hold it until maturity** and collect the money
2. **discount** it with a bank — sell it for cash before maturity
3. **endorse (negotiate)** it to a creditor in settlement of a debt

## Bills receivable and bills payable
- to the **drawer** the accepted bill is a **bill receivable** — an **asset** (a current asset)
- to the **acceptor** it is a **bill payable** — a **liability** (a current liability)

## Entries in the drawer's books
| Event | Debit | Credit |
|---|---|---|
| goods sold on credit | Debtor | Sales |
| bill accepted by the debtor | **Bills receivable** | Debtor |
| bill paid at maturity | Bank | Bills receivable |
| bill **discounted** | Bank (proceeds) and **Discounting charges** | Bills receivable |
| bill endorsed to a creditor | Creditor | Bills receivable |

## Entries in the acceptor's books
| Event | Debit | Credit |
|---|---|---|
| goods bought on credit | Purchases | Creditor |
| bill accepted | Creditor | **Bills payable** |
| bill paid at maturity | Bills payable | Bank |

## Discounting
The bank pays the **face value less a discount** — interest for the period the bill still has to run.
**discount = face value × rate × time**
*Example:* a bill for ₦100,000 with three months to run is discounted at 12% a year:
discount = 100,000 × 12% × ³⁄₁₂ = **₦3,000**; proceeds = **₦97,000**.
The discounting charge is an expense in the profit and loss account. Until the bill is paid, the drawer has a **contingent liability** — he must pay the bank if the acceptor fails.

## Dishonour
A bill is **dishonoured** when the acceptor fails to pay on the due date. The holder may have it **noted** by a notary public as evidence; the fee is the **noting charge**, recoverable from the acceptor.
### Drawer's entries on dishonour
- if he **held** the bill: debit the **Debtor**; credit Bills receivable
- if it was **discounted**: debit the **Debtor**; credit **Bank** (the bank reclaims the money)
- if it was endorsed: debit the Debtor; credit the Creditor
- noting charges: debit the Debtor; credit Bank
### Acceptor's entries
debit Bills payable; credit the Creditor (restoring the debt), plus noting charges.

## Renewal
The acceptor may ask for more time: the old bill is cancelled and a **new bill** drawn for the amount plus **interest**.

## Retiring a bill
Paying a bill **before** its due date, usually with a rebate of interest.

## Promissory note
An **unconditional written promise** by one person (the **maker**) to pay a certain sum to another (the **payee**).
| Bill of exchange | Promissory note |
|---|---|
| an **order** to pay | a **promise** to pay |
| drawn by the **creditor** | made by the **debtor** |
| three parties: drawer, drawee, payee | two parties: maker and payee |
| needs acceptance | needs no acceptance |

## Advantages of bills of exchange
- the creditor can obtain cash at once by **discounting**
- the debtor gets **time to pay**
- it is written **evidence of the debt** and fixes the date of payment
- it is **negotiable** — can be passed on in payment
- legal action on a dishonoured bill is straightforward`,
          examples: `**Example 1.** Who is the acceptor of a bill? *Answer:* The **drawee (debtor)** after he has signed to accept it.

**Example 2.** A bill for ₦60,000 with two months to run is discounted at 15% a year. Find the proceeds. *Solution:* discount = 60,000 × 15% × ²⁄₁₂ = ₦1,500; proceeds = **₦58,500**.

**Example 3.** How does a promissory note differ from a bill of exchange? *Answer:* It is a **promise by the debtor** to pay, with **two parties**, and needs **no acceptance**.`,
        },
        questions: [
          ["E", "The person who draws a bill of exchange is the", "drawer", "drawee", "acceptor", "endorsee", "He is the creditor."],
          ["E", "The person on whom a bill of exchange is drawn, and who accepts it, is the", "drawee", "drawer", "payee only", "notary public", "He is the debtor."],
          ["E", "To the drawer, an accepted bill of exchange is", "a bill receivable", "a bill payable", "a debenture", "a contingent asset only", "It is an asset in his books."],
          ["M", "Selling a bill of exchange to a bank for cash before its due date is called", "discounting", "dishonouring", "noting", "retiring", "The bank deducts a discount charge."],
          ["M", "The fee paid to a notary public for recording the dishonour of a bill is the", "noting charge", "discounting charge", "commission", "premium", "It is recoverable from the acceptor."],
          ["M", "In the books of the acceptor, an accepted bill is recorded as", "a bill payable", "a bill receivable", "a fixed asset", "capital", "It is a current liability."],
          ["M", "The number of days of grace traditionally added to the period of a bill of exchange is", "three", "seven", "one", "thirty", "They are added to find the due date."],
          ["H", "A bill of ₦100,000 with three months to run is discounted at 12% per annum. The proceeds received from the bank are", "₦97,000", "₦88,000", "₦99,000", "₦103,000", "The discount is ₦3,000."],
          ["H", "A bill drawn on 1 March for three months, allowing three days of grace, falls due on", "4 June", "1 June", "29 May", "4 July", "Three months takes it to 1 June, plus three days."],
          ["H", "A bill that the drawer had discounted with his bank is dishonoured on maturity. In the drawer's books the entry is", "debit the debtor, credit Bank", "debit Bank, credit the debtor", "debit Bills receivable, credit Bank", "debit Bills payable, credit the debtor", "The bank recovers the money from the drawer."],
        ],
      },
      {
        week: 4,
        title: "Accounting standards and professional ethics",
        subtopics: ["Need for accounting standards", "Standard-setting bodies", "Professional accountancy bodies in Nigeria", "Ethics of the accounting profession"],
        objectives: ["Explain the need for accounting standards", "Identify the bodies that set accounting standards", "Describe the professional accountancy bodies in Nigeria", "Explain the ethical principles that guide accountants"],
        lesson: {
          title: "Standards and Ethics",
          summary: "Explain accounting standards, the bodies that regulate accounting and the ethics of the profession.",
          minutes: 40,
          notes: `## Accounting standards
**Authoritative statements of how particular types of transactions and events should be recognised, measured, presented and disclosed** in financial statements.

### Why standards are needed
- to make financial statements **comparable** between firms and between years
- to reduce the variety of accounting treatments and prevent **manipulation** of figures
- to make accounts **reliable** and **understandable**
- to give a **true and fair view**
- to protect investors, lenders and the public
- to guide accountants and auditors
- to support cross-border investment — the same "language" of accounting

## International standards
- the **International Accounting Standards Board (IASB)**, based in London, issues **International Financial Reporting Standards (IFRS)**; older standards are called International Accounting Standards (IAS)
- the International Public Sector Accounting Standards Board issues **IPSAS** for governments
Examples: IAS 1 Presentation of financial statements; IAS 2 Inventories; IAS 16 Property, plant and equipment.

### Terminology under IFRS
| Traditional term | IFRS term |
|---|---|
| balance sheet | **statement of financial position** |
| profit and loss account | **statement of profit or loss** (income statement) |
| stock | **inventory** |
| debtors | **trade receivables** |
| creditors | **trade payables** |
| fixed assets | **non-current assets** |
| turnover / sales | **revenue** |

## Standards in Nigeria
- the **Nigerian Accounting Standards Board (NASB)**, set up in 1982, issued Statements of Accounting Standard (SAS)
- it was replaced in **2011** by the **Financial Reporting Council (FRC) of Nigeria**, which sets and enforces accounting, auditing and corporate governance standards
- Nigeria **adopted IFRS from 2012**, starting with listed and significant public-interest entities

## Regulatory framework
- the **Companies and Allied Matters Act (CAMA)** — requires companies to keep proper books, prepare annual financial statements and have them audited
- the **Corporate Affairs Commission** — registers companies
- the **Securities and Exchange Commission** and the stock exchange — rules for listed companies
- the **Central Bank of Nigeria** — rules for banks
- tax laws and the revenue services

## Professional accountancy bodies in Nigeria
- the **Institute of Chartered Accountants of Nigeria (ICAN)** — established by an Act of Parliament in **1965**; its members are chartered accountants (ACA, FCA)
- the **Association of National Accountants of Nigeria (ANAN)** — founded in 1979 and chartered in **1993**; members are certified national accountants
- the Chartered Institute of Taxation of Nigeria
### Their functions
- set **entry standards** and conduct examinations
- **register and license** members
- enforce a **code of conduct** and discipline erring members
- provide **continuing professional education**
- advise government on financial matters
- promote the profession and protect the public interest

## The audit
An **independent examination** of the financial statements by a qualified **auditor**, who expresses an **opinion** on whether they give a **true and fair view**.
- **external auditors** are appointed by the shareholders and report to them
- **internal auditors** are employees who review controls for management

## Professional ethics
The moral principles that govern accountants' conduct.
| Principle | Meaning |
|---|---|
| **integrity** | being straightforward and **honest** in all professional and business relationships |
| **objectivity** | not allowing **bias, conflict of interest** or the influence of others to override professional judgment |
| **professional competence and due care** | maintaining the knowledge and skill required and acting diligently |
| **confidentiality** | **not disclosing** information acquired in the course of work without proper authority |
| **professional behaviour** | complying with laws and avoiding conduct that **discredits** the profession |
**Independence** — an auditor must be, and be seen to be, free of any interest in the client.

### Threats to ethics
self-interest (a financial stake in a client); self-review; advocacy; familiarity (close relationships); intimidation.

### Unethical practices
falsifying records; "window dressing" the accounts; evading tax for clients; accepting bribes; disclosing clients' secrets; certifying accounts one knows to be false.

### Consequences
loss of public trust; fines and imprisonment; suspension or withdrawal of the practising licence; collapse of businesses.

## Qualities of an accountant
honesty; accuracy; diligence; confidentiality; good judgment; up-to-date knowledge.`,
          examples: `**Example 1.** What does IFRS stand for? *Answer:* **International Financial Reporting Standards**.

**Example 2.** Which body now sets accounting standards in Nigeria? *Answer:* The **Financial Reporting Council of Nigeria**.

**Example 3.** An accountant refuses to reveal a client's affairs to a friend. Which principle is this? *Answer:* **Confidentiality**.`,
        },
        questions: [
          ["E", "IFRS stands for", "International Financial Reporting Standards", "Internal Financial Recording System", "International Fund for Revenue Services", "Institute of Financial Reporting Students", "They are issued by the IASB."],
          ["E", "The Institute of Chartered Accountants of Nigeria was established in", "1965", "1993", "1979", "2011", "It was set up by an Act of Parliament."],
          ["E", "The body that currently sets accounting standards in Nigeria is the", "Financial Reporting Council of Nigeria", "Corporate Affairs Commission", "Nigeria Labour Congress", "National Bureau of Statistics", "It replaced the Nigerian Accounting Standards Board in 2011."],
          ["M", "A main reason for having accounting standards is to", "make financial statements comparable and reliable", "increase the profit of every company", "abolish auditing", "reduce the number of accountants", "They limit the variety of accounting treatments."],
          ["M", "Under IFRS terminology, the balance sheet is called the", "statement of financial position", "statement of cash flows", "statement of affairs", "trial balance", "The profit and loss account becomes the statement of profit or loss."],
          ["M", "The ethical principle that forbids an accountant from disclosing a client's information without authority is", "confidentiality", "objectivity", "competence", "independence of mind only", "Information gained at work must be kept private."],
          ["M", "The international body that issues International Financial Reporting Standards is the", "International Accounting Standards Board", "International Monetary Fund", "World Trade Organization", "World Bank", "It is based in London."],
          ["H", "Nigeria began the adoption of International Financial Reporting Standards in", "2012", "1982", "1965", "2001", "Listed and significant public-interest entities adopted first."],
          ["H", "An accountant who refuses to let a personal relationship with a client influence his professional judgment is observing the principle of", "objectivity", "confidentiality", "professional behaviour", "due care", "Bias and conflict of interest must not override judgment."],
          ["H", "An auditor's report on a company's financial statements expresses an opinion on whether they", "give a true and fair view", "guarantee future profits", "contain no figures", "were prepared by the shareholders", "The opinion is formed after an independent examination."],
        ],
      },
      {
        week: 5,
        title: "Budgeting and cash budgets",
        subtopics: ["Meaning and purposes of budgets", "Types of budget", "The cash budget", "Budgetary control and variances"],
        objectives: ["Explain the meaning and purposes of budgets", "Describe the main types of budget", "Prepare a simple cash budget", "Explain budgetary control and calculate simple variances"],
        lesson: {
          title: "Planning with Budgets",
          summary: "Explain budgets and budgetary control and prepare a simple cash budget.",
          minutes: 40,
          notes: `## Budget
A **financial plan, expressed in quantities and money, prepared in advance for a definite future period**, showing what the business intends to achieve and how.

## Purposes
- **planning** — forces management to think ahead
- **co-ordination** — brings the activities of departments into line
- **control** — a standard against which actual results are compared
- **communication** of targets
- **motivation** of managers and staff
- helps to obtain finance and to allocate resources

## Types of budget
- **sales budget** — expected sales in units and value; usually the **starting point**, since sales are normally the **principal budget (limiting) factor**
- **production budget** — units to be made = sales + closing stock − opening stock
- **purchases (materials) budget**
- **labour budget**; **overheads budgets**
- **capital expenditure budget** — planned spending on fixed assets
- **cash budget**
- **master budget** — the budgeted profit and loss account and balance sheet, bringing all the others together
By behaviour: a **fixed budget** is prepared for one level of activity; a **flexible budget** is adjusted to the actual level.

## The cash budget
A forecast of **cash receipts and payments**, period by period, showing the expected **cash balance** at the end of each.

### Format
| | Jan (₦) | Feb (₦) | Mar (₦) |
|---|---|---|---|
| **Receipts** | | | |
| cash sales | x | x | x |
| collections from debtors | x | x | x |
| other receipts (loans, sale of assets) | x | x | x |
| **Total receipts** | x | x | x |
| **Payments** | | | |
| payments to creditors | x | x | x |
| wages and salaries | x | x | x |
| rent and other expenses | x | x | x |
| purchase of fixed assets | x | x | x |
| **Total payments** | x | x | x |
| **Net cash flow** (receipts − payments) | x | x | x |
| Opening balance | x | x | x |
| **Closing balance** | x | x | x |
The closing balance of one month is the opening balance of the next.
**closing balance = opening balance + receipts − payments**

### Examples
- opening cash ₦20,000; receipts ₦80,000; payments ₦70,000: closing balance **₦30,000**
- opening cash ₦5,000; receipts ₦40,000; payments ₦52,000: closing balance **−₦7,000** — an **overdraft** will be needed

### Timing of receipts
*Example:* credit sales are ₦100,000 in January and ₦120,000 in February; **60% is collected in the month of sale and 40% in the following month**.
February receipts = 40% of January (₦40,000) + 60% of February (₦72,000) = **₦112,000**.
Payments to creditors are treated in the same way, according to the credit period taken.

### Items excluded
**Non-cash items** — **depreciation**, provisions for doubtful debts, discounts — do not appear, because no cash moves.

### Uses
- reveals expected **shortages** in time to arrange an overdraft or delay spending
- reveals **surpluses** that can be invested
- helps to plan the timing of large payments
- supports applications for bank loans

## Cash and profit
A profitable business may still run out of cash — if customers pay slowly, stock builds up or fixed assets are bought. Cash budgets guard against this.

## Budgetary control
The process of **comparing actual results with the budget**, finding the differences (**variances**) and taking corrective action.
### Steps
set objectives → prepare budgets → record actual results → compare → investigate variances → act → revise.

### Variances
**variance = budgeted figure − actual figure** (interpreted according to the item)
- **favourable** — better than budget: costs lower, or revenue higher
- **adverse (unfavourable)** — worse than budget
*Examples:*
- budgeted cost ₦50,000; actual cost ₦45,000: **₦5,000 favourable**
- budgeted sales ₦200,000; actual sales ₦185,000: **₦15,000 adverse**

## Advantages of budgeting
clear targets; better use of resources; control of costs; early warning of problems; delegation with responsibility.
## Limitations
based on **estimates** that may prove wrong; time-consuming and costly; may cause rigidity and conflict; managers may build in "slack".`,
          examples: `**Example 1.** Opening cash ₦12,000; receipts ₦95,000; payments ₦88,000. Find the closing balance. *Solution:* **₦19,000**.

**Example 2.** Why is depreciation left out of a cash budget? *Answer:* It is a **non-cash expense** — no money is paid out.

**Example 3.** Budgeted wages ₦300,000; actual wages ₦320,000. State the variance. *Solution:* **₦20,000 adverse**.`,
        },
        questions: [
          ["E", "A financial plan prepared in advance for a definite future period is", "a budget", "a balance sheet", "a bank statement", "an invoice", "It expresses targets in quantities and money."],
          ["E", "A statement of expected cash receipts and payments for a future period is a", "cash budget", "sales budget", "trial balance", "cash book", "It shows the expected cash balance."],
          ["E", "The comparison of actual results with budgeted figures in order to take corrective action is", "budgetary control", "bank reconciliation", "depreciation", "apportionment", "Differences are called variances."],
          ["M", "A business expects opening cash of ₦20,000, receipts of ₦80,000 and payments of ₦70,000. The budgeted closing cash balance is", "₦30,000", "₦10,000", "₦170,000", "₦50,000", "20,000 + 80,000 − 70,000."],
          ["M", "Which of the following is NOT included in a cash budget?", "depreciation", "payment of wages", "cash sales", "purchase of a van for cash", "It involves no movement of cash."],
          ["M", "The budget that is normally prepared first, because it usually limits the others, is the", "sales budget", "cash budget", "capital expenditure budget", "master budget", "Sales are usually the principal budget factor."],
          ["M", "The difference between a budgeted figure and the actual figure is called", "a variance", "a provision", "a reserve", "a premium", "It may be favourable or adverse."],
          ["H", "Credit sales are ₦100,000 in January and ₦120,000 in February. 60% is collected in the month of sale and 40% in the following month. Cash collected in February is", "₦112,000", "₦120,000", "₦108,000", "₦132,000", "40% of January plus 60% of February."],
          ["H", "A business expects opening cash of ₦5,000, receipts of ₦40,000 and payments of ₦52,000. The cash budget shows", "an overdraft of ₦7,000", "a surplus of ₦7,000", "a balance of ₦17,000", "an overdraft of ₦12,000", "5,000 + 40,000 − 52,000."],
          ["H", "The budgeted cost of materials was ₦50,000 and the actual cost was ₦45,000. The variance is", "₦5,000 favourable", "₦5,000 adverse", "₦95,000 favourable", "₦45,000 adverse", "Actual cost was below the budget."],
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
        title: "Final accounts with year-end adjustments",
        subtopics: ["The extended trial balance approach", "Adjustments for stock, accruals and prepayments", "Adjustments for depreciation and doubtful debts", "Drawings of goods and other adjustments"],
        objectives: ["Outline the steps in preparing final accounts from a trial balance with adjustments", "Adjust for closing stock, accruals and prepayments", "Adjust for depreciation, bad debts and provisions", "Treat goods taken by the owner and other special adjustments"],
        lesson: {
          title: "Putting the Final Accounts Together",
          summary: "Prepare the final accounts of a sole trader from a trial balance with year-end adjustments.",
          minutes: 40,
          notes: `## The task
Examination questions give a **trial balance** followed by **notes (adjustments)**. Every adjustment has a **double effect** — one in the trading or profit and loss account, and one in the balance sheet.

## Steps
1. read the trial balance and mark each item **T** (trading), **P** (profit and loss) or **B** (balance sheet)
2. deal with each adjustment, noting **both** effects
3. prepare the **trading account** → gross profit
4. prepare the **profit and loss account** → net profit
5. prepare the **balance sheet**, checking that it balances

## Common adjustments
| Adjustment | Trading / profit and loss account | Balance sheet |
|---|---|---|
| **closing stock** | credited in the trading account (deducted from cost of sales) | current asset |
| **accrued expense** | added to the expense | current liability |
| **prepaid expense** | deducted from the expense | current asset |
| **accrued income** | added to the income | current asset |
| **income received in advance** | deducted from the income | current liability |
| **depreciation** | charged in the profit and loss account | deducted from the fixed asset |
| **bad debts written off** | charged in the profit and loss account | deducted from debtors |
| **provision for doubtful debts** | the increase is charged (a decrease credited) | whole provision deducted from debtors |
| **goods taken by the owner** | deducted from purchases | added to drawings |
| **interest on loan owing** | charged in the profit and loss account | current liability |
| **stock of stationery unused** | deducted from the stationery expense | current asset |

## Worked figures
- **wages**: paid ₦50,000; owing ₦4,000 → charge **₦54,000**; accrual ₦4,000
- **debtors**: ₦80,000 less provision of 5% (₦4,000) → **₦76,000** in the balance sheet
- **drawings of goods**: the owner takes goods costing ₦3,000 → debit Drawings, credit Purchases; purchases of ₦60,000 become **₦57,000**
- **depreciation**: fixtures costing ₦50,000 depreciated at 10% on cost for three years → accumulated depreciation ₦15,000; net book value **₦35,000**

## A full example
Gross profit ₦90,000. Expenses paid ₦40,000, with ₦2,000 accrued and ₦1,000 prepaid. Depreciation ₦8,000.
- expenses for the year = 40,000 + 2,000 − 1,000 = ₦41,000
- **net profit = 90,000 − 41,000 − 8,000 = ₦41,000**

## Special adjustments
- **goods destroyed by fire or stolen** — credit the trading account (or purchases) with the cost; debit the **insurance claim** (a current asset) for the amount recoverable and the profit and loss account for any uninsured loss
- **goods on sale or return** still with customers — not yet sales; include them in stock at cost
- **goods in transit** — include in purchases and stock if ownership has passed
- **carriage inwards** in the trading account; **carriage outwards** in the profit and loss account
- **manager's commission** on net profit — calculated on profit before or after charging the commission, as stated
  - on profit **before** commission: profit × rate
  - on profit **after** commission: profit × rate ÷ (100 + rate)
- **errors found after the trial balance** — correct the affected figures before preparing the accounts
- **capital expenditure wrongly charged to revenue** — transfer it to the asset account

## Presentation
- use the **vertical format** with clear headings: "Trading, profit and loss account **for the year ended** …" and "Balance sheet **as at** …"
- show **workings** separately and neatly
- in the balance sheet, show fixed assets at cost, accumulated depreciation and net book value; current assets in order (stock, debtors, prepayments, bank, cash); then current liabilities and working capital
- show capital: opening balance + net profit − drawings

## Checks
- every trial balance item is used **once**; every adjustment is used **twice**
- the balance sheet totals agree
- provisions are deducted from the related assets
- drawings never appear in the profit and loss account

## Common mistakes
treating opening stock as an asset in the balance sheet; putting the full provision (not just the change) in the profit and loss account; forgetting the second effect of an adjustment; adding instead of deducting prepayments.`,
          examples: `**Example 1.** Rent paid is ₦90,000, of which ₦15,000 is prepaid. State both effects. *Answer:* Charge **₦75,000** in the profit and loss account; show **₦15,000** as a **current asset**.

**Example 2.** The owner took goods costing ₦8,000 for personal use. State the entry. *Answer:* **Debit Drawings; credit Purchases** with ₦8,000.

**Example 3.** Gross profit ₦120,000; expenses ₦70,000 plus ₦5,000 accrued; depreciation ₦10,000. Find the net profit. *Solution:* 120,000 − 75,000 − 10,000 = **₦35,000**.`,
        },
        questions: [
          ["E", "In the final accounts, closing stock appears in", "both the trading account and the balance sheet", "the profit and loss account only", "the balance sheet only", "the appropriation account", "It reduces cost of sales and is a current asset."],
          ["E", "Depreciation for the year is charged in the", "profit and loss account", "trading account as purchases", "capital account", "cash book", "It is also deducted from the asset in the balance sheet."],
          ["E", "Goods taken from the business by the owner for private use are deducted from", "purchases", "sales", "closing stock", "creditors", "They are added to drawings."],
          ["M", "Wages paid during the year were ₦50,000 and ₦4,000 was owing at the year end. The wages charged in the profit and loss account are", "₦54,000", "₦46,000", "₦50,000", "₦4,000", "The accrual is added."],
          ["M", "Debtors are ₦80,000 and a provision for doubtful debts of 5% is to be maintained. Debtors in the balance sheet will be shown at", "₦76,000", "₦84,000", "₦80,000", "₦4,000", "₦80,000 less ₦4,000."],
          ["M", "The owner takes goods costing ₦3,000 for personal use. The correct entry is", "debit Drawings, credit Purchases", "debit Purchases, credit Drawings", "debit Sales, credit Drawings", "debit Drawings, credit Cash", "No cash is involved, and the goods were bought, not sold."],
          ["M", "Purchases in the trial balance are ₦60,000, and the owner took goods costing ₦3,000 for private use. Purchases in the trading account are", "₦57,000", "₦63,000", "₦60,000", "₦3,000", "The goods withdrawn are deducted."],
          ["H", "Gross profit is ₦90,000. Expenses paid were ₦40,000, with ₦2,000 accrued and ₦1,000 prepaid, and depreciation is ₦8,000. The net profit is", "₦41,000", "₦42,000", "₦39,000", "₦49,000", "90,000 − 41,000 − 8,000."],
          ["H", "Stock costing ₦5,000 is destroyed by fire and is fully covered by insurance. The correct treatment is to", "credit the trading account and debit an insurance claim account", "debit the trading account and credit capital", "charge ₦5,000 to the profit and loss account as a loss", "ignore the loss completely", "The amount recoverable is a current asset."],
          ["H", "Fixtures costing ₦50,000 have been depreciated at 10% per annum on cost for three years. Their net book value is", "₦35,000", "₦15,000", "₦36,450", "₦45,000", "50,000 − 15,000."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: bookkeeping and final accounts",
        subtopics: ["Books of original entry and the ledger", "Cash book, bank reconciliation and errors", "Adjustments: depreciation, provisions, accruals", "Final accounts of a sole trader"],
        objectives: ["Recall the books of original entry and double entry", "Solve problems on the cash book, bank reconciliation and errors", "Solve problems on depreciation, provisions and accruals", "Prepare and interpret the final accounts of a sole trader"],
        lesson: {
          title: "Revision of Basic Bookkeeping",
          summary: "Revise double entry, subsidiary books, adjustments and final accounts.",
          minutes: 40,
          notes: `## 1. Foundations
- **Assets = Capital + Liabilities**
- concepts: entity, going concern, accruals, consistency, prudence, materiality, historical cost, duality
- **double entry**: debit the receiver / what comes in / expenses; credit the giver / what goes out / income
- accounts: **personal**, **real**, **nominal**

## 2. Books of original entry
| Book | Records |
|---|---|
| sales day book | credit sales |
| purchases day book | credit purchases |
| returns inwards / outwards books | returns |
| cash book and petty cash book | cash and bank |
| general journal | opening entries, fixed assets on credit, corrections, transfers |
- **trade discount** is deducted on the invoice, not recorded; **cash discount** is recorded
- **imprest**: reimbursement = amount spent

## 3. Trial balance and errors
- debit: assets, expenses, drawings, purchases; credit: liabilities, capital, income, sales
- errors not revealed: **omission, commission, principle, original entry, compensating, complete reversal**
- errors revealed are corrected through the **suspense account**
- effect on profit: sales undercast → profit understated; expense omitted → profit overstated

## 4. Bank reconciliation
- update the cash book for bank charges, standing orders, direct credits, dishonoured cheques
- **bank statement balance = cash book balance + unpresented cheques − uncredited lodgements**

## 5. Depreciation
- straight line = (cost − residual value) ÷ life
- reducing balance = rate × net book value
- disposal: profit = proceeds − net book value
- entry: debit Profit and loss; credit Provision for depreciation

## 6. Bad debts and provisions
- write off: debit Bad debts; credit Debtor
- provision = % × (debtors − bad debts); only the **change** goes to profit and loss
- balance sheet: debtors less provision

## 7. Accruals and prepayments
- expense = paid + closing accrual − opening accrual − closing prepayment + opening prepayment
- accruals — current liabilities; prepayments — current assets

## 8. Capital and revenue
- capital expenditure: buying or improving fixed assets, including installation and legal costs
- revenue expenditure: running costs and repairs
- capital treated as revenue → profit understated

## 9. Final accounts
- **cost of goods sold** = opening stock + purchases − returns outwards + carriage inwards − closing stock
- **gross profit** = net sales − cost of goods sold
- **net profit** = gross profit + other income − expenses
- **balance sheet**: fixed assets (net) + working capital = capital + long-term liabilities
- **working capital** = current assets − current liabilities
- capital = opening capital + net profit − drawings
- mark-up (on cost) and margin (on sales)

## 10. Control accounts and incomplete records
- sales ledger control: opening debtors + credit sales − receipts − discounts allowed − returns inwards − bad debts
- purchases ledger control: opening creditors + credit purchases − payments − discounts received − returns outwards
- profit = closing capital − opening capital + drawings − new capital

## 11. Stock valuation
FIFO, LIFO, weighted average; lower of cost and net realisable value.

## Examination technique
Head every account correctly (with "for the year ended" or "as at"); show workings; write narrations for journal entries; balance accounts and bring balances down; keep figures in neat columns; attempt every part — method marks are awarded.`,
          examples: `**Example 1.** Cash book balance ₦30,000; unpresented cheques ₦7,000; uncredited lodgements ₦5,000. Find the bank statement balance. *Solution:* 30,000 + 7,000 − 5,000 = **₦32,000**.

**Example 2.** A van costing ₦900,000 with a scrap value of ₦100,000 and a life of 4 years: find the annual depreciation. *Solution:* **₦200,000**.

**Example 3.** Sales ₦200,000; cost of sales ₦130,000; expenses ₦45,000. Find the net profit. *Solution:* **₦25,000**.`,
        },
        questions: [
          ["E", "The book of original entry for goods bought on credit is the", "purchases day book", "sales day book", "cash book", "general journal", "Its total is debited to the purchases account."],
          ["E", "If total assets are ₦90,000 and total liabilities are ₦35,000, the capital is", "₦55,000", "₦125,000", "₦35,000", "₦90,000", "Capital = assets − liabilities."],
          ["E", "The financial position of a business at a given date is shown by the", "balance sheet", "trading account", "cash book", "sales day book", "It lists assets, liabilities and capital."],
          ["M", "The cash book shows a balance of ₦15,000. Unpresented cheques are ₦4,000 and uncredited lodgements ₦1,000. The balance on the bank statement is", "₦18,000", "₦12,000", "₦20,000", "₦10,000", "15,000 + 4,000 − 1,000."],
          ["M", "A machine costs ₦60,000, has a residual value of ₦6,000 and a useful life of 6 years. The annual straight-line depreciation is", "₦9,000", "₦10,000", "₦11,000", "₦1,000", "(60,000 − 6,000) ÷ 6."],
          ["M", "Opening stock ₦8,000; purchases ₦42,000; closing stock ₦10,000. The cost of goods sold is", "₦40,000", "₦60,000", "₦44,000", "₦24,000", "8,000 + 42,000 − 10,000."],
          ["M", "A petty cashier with an imprest of ₦8,000 spent ₦5,400 during the month. The amount reimbursed to restore the imprest is", "₦5,400", "₦2,600", "₦8,000", "₦13,400", "The reimbursement equals the amount spent."],
          ["H", "Debtors are ₦90,000 and a provision for doubtful debts of 5% is required. The existing provision is ₦3,800. The charge to the profit and loss account is", "₦700", "₦4,500", "₦8,300", "₦3,800", "The increase from ₦3,800 to ₦4,500."],
          ["H", "Sales ₦120,000; cost of goods sold ₦70,000; expenses ₦28,000; discount received ₦2,000. The net profit is", "₦24,000", "₦22,000", "₦20,000", "₦50,000", "Gross profit ₦50,000 plus ₦2,000 less ₦28,000."],
          ["H", "A motor vehicle costing ₦120,000 is depreciated at 25% per annum on the reducing balance. Its net book value after two years is", "₦67,500", "₦60,000", "₦90,000", "₦52,500", "120,000 → 90,000 → 67,500."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: partnership, company and other accounts",
        subtopics: ["Partnership accounts", "Company accounts", "Non-profit organisations", "Manufacturing accounts"],
        objectives: ["Solve problems on the appropriation of partnership profit, goodwill and dissolution", "Solve problems on share capital, share issues and company appropriation", "Solve problems on subscriptions and the accumulated fund", "Solve problems on prime cost and cost of production"],
        lesson: {
          title: "Revision of Partnership, Company and Other Accounts",
          summary: "Revise partnership, company, non-profit and manufacturing accounts.",
          minutes: 40,
          notes: `## 1. Partnership
- agreement: capital, profit-sharing ratio, interest on capital and drawings, salaries
- no agreement (Partnership Act): **equal** shares; no interest on capital or drawings; no salaries; **5%** on partners' loans
- **appropriation account**: net profit + interest on drawings − interest on capital − salaries = residual profit, shared in the agreed ratio
- **current account**: credit — interest on capital, salary, share of profit; debit — drawings, interest on drawings
- interest on a partner's **loan** is a charge in the profit and loss account

### Goodwill and admission
- goodwill = years' purchase × average profit
- raised in the **old ratio**; written off in the **new ratio**
- **revaluation** profit or loss → old partners, old ratio

### Dissolution
- **realisation account**: debit book values and expenses; credit proceeds
- order of payment: creditors → partners' loans → capital
- **Garner v Murray**: an insolvent partner's deficiency is borne in the ratio of **capitals**

## 2. Companies
- separate legal entity; limited liability; perpetual succession
- **authorised**, **issued**, **called-up**, **paid-up** capital; calls in arrears
- **ordinary shares** — variable dividend, votes; **preference shares** — fixed dividend, priority; cumulative or not
- issue at a **premium**: excess → share premium (a **capital reserve**)
- **debentures** — loans; interest is a **charge** against profit
- charges in profit and loss: directors' fees, auditors' fees, debenture interest
- **appropriation**: profit after tax + retained b/f − transfers to reserves − dividends = retained c/f
- dividend = rate × paid-up nominal capital
- **shareholders' funds** = share capital + reserves
- reserves: capital (share premium, revaluation) and revenue (general reserve, retained profit)

## 3. Non-profit organisations
- **receipts and payments account** — cash summary; capital and revenue items
- **income and expenditure account** — accruals basis; revenue items only; result is a **surplus or deficit**
- **accumulated fund** = assets − liabilities
- subscriptions: received − opening arrears + closing arrears + opening advance − closing advance
- arrears — current asset; advance — current liability
- bar trading account → profit to income and expenditure

## 4. Manufacturing accounts
- raw materials consumed = opening stock + purchases + carriage inwards − closing stock
- **prime cost** = materials consumed + direct labour + direct expenses
- **cost of production** = prime cost + factory overheads + opening WIP − closing WIP
- cost of production → trading account
- manufacturing profit = market value − cost of production

## 5. Departmental and branch accounts
- apportion: rent by floor area; advertising by sales; canteen by number of employees
- branch: invoice at cost plus a percentage; loading in closing stock = unrealised profit

## 6. Joint venture and consignment
- joint venture: memorandum account gives the profit; each venturer keeps an account with the other
- consignment: consignor (owner), consignee (agent); account sales; commission and del credere; unsold stock at cost plus a share of non-recurring expenses

## 7. Purchase of business
- goodwill = purchase consideration − net assets; if negative, a capital reserve

## Technique
Label each account clearly; show ratios and workings; for partnership and company questions, prepare the appropriation account before the balance sheet; check that current and capital accounts are carried correctly into the balance sheet.`,
          examples: `**Example 1.** P and Q share profits 3 : 2. Net profit ₦75,000; salary to Q ₦15,000. Find P's share. *Solution:* ⅗ × 60,000 = **₦36,000**.

**Example 2.** 200,000 shares of ₦1 issued at ₦1.30. Find the share premium. *Solution:* **₦60,000**.

**Example 3.** Prime cost ₦150,000; factory overheads ₦45,000; opening WIP ₦10,000; closing WIP ₦15,000. Find the cost of production. *Solution:* **₦190,000**.`,
        },
        questions: [
          ["E", "A non-profit organisation prepares an income and expenditure account in place of a", "profit and loss account", "balance sheet", "cash book", "trial balance", "Its result is a surplus or deficit."],
          ["E", "Holders of preference shares are entitled to", "a fixed rate of dividend", "the largest share of profit", "the right to manage the company", "repayment before debenture holders", "They are paid before ordinary shareholders."],
          ["E", "Interest on partners' capital is debited to the", "profit and loss appropriation account", "trading account", "realisation account", "bank account", "It is credited to the partners' current accounts."],
          ["M", "A factory has direct materials consumed of ₦40,000, direct labour of ₦25,000 and direct expenses of ₦5,000. Its prime cost is", "₦70,000", "₦65,000", "₦45,000", "₦30,000", "The three direct costs are added."],
          ["M", "X and Y share profits 2 : 1. The net profit is ₦60,000 and Y is entitled to a salary of ₦6,000. X's share of the residual profit is", "₦36,000", "₦40,000", "₦18,000", "₦54,000", "Two-thirds of ₦54,000."],
          ["M", "A club received subscriptions of ₦30,000 during the year, including ₦2,000 paid in advance for next year. Subscription income for the year is", "₦28,000", "₦32,000", "₦30,000", "₦2,000", "The advance belongs to next year."],
          ["M", "A company issues 40,000 ordinary shares of ₦1 each at ₦1.25. The share premium is", "₦10,000", "₦50,000", "₦40,000", "₦1,250", "25 kobo on each of 40,000 shares."],
          ["H", "A firm's profits for three years were ₦20,000, ₦25,000 and ₦30,000. Goodwill valued at three years' purchase of the average profit is", "₦75,000", "₦25,000", "₦225,000", "₦50,000", "Average profit of ₦25,000 multiplied by 3."],
          ["H", "A company's profit after tax is ₦200,000. It pays 8% on ₦250,000 of preference shares and 10% on ₦500,000 of ordinary shares. The profit retained for the year is", "₦130,000", "₦150,000", "₦180,000", "₦70,000", "200,000 − 20,000 − 50,000."],
          ["H", "Prime cost is ₦70,000, factory overheads ₦20,000, opening work in progress ₦5,000 and closing work in progress ₦7,000. The cost of production is", "₦88,000", "₦92,000", "₦90,000", "₦102,000", "70,000 + 20,000 + 5,000 − 7,000."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: specialised accounts, ratios and public sector accounting",
        subtopics: ["Control accounts and incomplete records", "Branch, hire purchase, joint venture and consignment", "Interpretation of accounts", "Public sector accounting and information technology"],
        objectives: ["Solve problems on control accounts and incomplete records", "Solve problems on branch, hire purchase, joint venture and consignment accounts", "Calculate and interpret accounting ratios", "Recall the principles of public sector accounting and computerised accounting"],
        lesson: {
          title: "Revision of Specialised Accounts",
          summary: "Revise specialised accounts, ratio analysis and public sector accounting.",
          minutes: 40,
          notes: `## 1. Control accounts
- **sales ledger control**: debit — opening debtors, credit sales, dishonoured cheques; credit — receipts, discounts allowed, returns inwards, bad debts, contras
- **purchases ledger control**: credit — opening creditors, credit purchases; debit — payments, discounts received, returns outwards, contras
- cash sales and provisions for doubtful debts do **not** appear
- uses: check accuracy, locate errors, deter fraud, supply totals quickly

## 2. Incomplete records
- **profit = closing capital − opening capital + drawings − capital introduced**
- credit sales = receipts + closing debtors − opening debtors (+ discounts and bad debts)
- credit purchases = payments + closing creditors − opening creditors (+ discounts received)
- mark-up ¼ = margin ⅕; mark-up ⅓ = margin ¼

## 3. Branch accounts
- goods at **cost plus x%**: invoice = cost × (100 + x) ÷ 100; cost = invoice × 100 ÷ (100 + x)
- branch gross profit = sales − (opening stock + goods received − closing stock), at cost
- unrealised profit in closing stock is provided for

## 4. Hire purchase
- **HP interest = HP price − cash price**; HP price = deposit + instalments
- buyer records the asset at **cash price**; interest to profit and loss; depreciation on cash price
- ownership passes with the **last instalment**; the seller may repossess

## 5. Joint venture
- temporary partnership; memorandum joint venture account; profit shared in the agreed ratio
- each venturer: debit own costs and profit share; credit sales received; settle the balance

## 6. Consignment
- consignor (principal), consignee (agent); pro-forma invoice; **account sales**
- commission on gross sales; **del credere** for guaranteeing debts
- profit = sales − cost − both parties' expenses − commission
- unsold stock = proportion × (cost + non-recurring expenses)

## 7. Contract and bills
- retention money; notional profit; profit taken = ⅔ × notional profit × cash received ÷ work certified
- bill of exchange: drawer, drawee/acceptor, payee; bills receivable (asset) and payable (liability); discounting; dishonour and noting charges

## 8. Ratios
| Ratio | Formula |
|---|---|
| gross profit % | gross profit ÷ sales × 100 |
| net profit % | net profit ÷ sales × 100 |
| ROCE | net profit ÷ capital employed × 100 |
| current ratio | current assets ÷ current liabilities |
| quick (acid-test) ratio | (current assets − stock) ÷ current liabilities |
| stock turnover | cost of goods sold ÷ average stock |
| debtors' collection period | debtors ÷ credit sales × 365 |
| creditors' payment period | creditors ÷ credit purchases × 365 |
Limitations: historical data, inflation, different policies, window dressing, non-financial factors ignored.

## 9. Public sector accounting
- aim: accountability and stewardship; mainly **cash basis**; **fund accounting**
- **Consolidated Revenue Fund**, Development Fund, Contingencies Fund, Federation Account
- **Accountant-General** (prepares accounts); **Auditor-General** (audits, reports to the legislature); Public Accounts Committee
- **warrant** (authority to spend); **vote**; **virement**; Appropriation Act
- recurrent and capital expenditure; statutory allocation and internally generated revenue

## 10. Information technology and standards
- hardware, software, accounting packages; batch and real-time processing; passwords and backups; GIGO
- IFRS (IASB); Financial Reporting Council of Nigeria (2011); ICAN (1965), ANAN (1993)
- ethics: integrity, objectivity, competence, confidentiality, professional behaviour

## 11. Budgets
closing cash = opening cash + receipts − payments; depreciation excluded; favourable and adverse variances.

## Final checklist
formulas memorised; formats practised; workings shown; time shared sensibly between theory and practice questions.`,
          examples: `**Example 1.** Goods are invoiced to a branch at ₦72,000, being cost plus 20%. Find the cost. *Solution:* 72,000 × 100 ÷ 120 = **₦60,000**.

**Example 2.** Current assets ₦120,000 (stock ₦50,000); current liabilities ₦50,000. Find the quick ratio. *Solution:* 70,000 ÷ 50,000 = **1.4 : 1**.

**Example 3.** Capital at start ₦200,000; at end ₦230,000; drawings ₦24,000; new capital ₦10,000. Find the profit. *Solution:* 30,000 + 24,000 − 10,000 = **₦44,000**.`,
        },
        questions: [
          ["E", "In a consignment, the agent who sells the goods on behalf of the owner is the", "consignee", "consignor", "drawer", "contractee", "He earns a commission."],
          ["E", "The fund from which a government meets urgent and unforeseen expenditure is the", "Contingencies Fund", "accumulated fund", "sinking fund", "share premium account", "Such spending is later approved by the legislature."],
          ["E", "The current ratio is a measure of a firm's", "liquidity", "profitability", "stock turnover", "gearing", "It compares current assets with current liabilities."],
          ["M", "Sales ledger control account: opening balance ₦12,000; credit sales ₦70,000; cash received ₦60,000; returns inwards ₦2,000. The closing balance is", "₦20,000", "₦24,000", "₦18,000", "₦22,000", "12,000 + 70,000 − 60,000 − 2,000."],
          ["M", "Goods costing ₦50,000 are invoiced to a branch at cost plus 20%. The invoice price is", "₦60,000", "₦70,000", "₦40,000", "₦52,000", "20% of ₦50,000 is added."],
          ["M", "The hire purchase price of a machine is ₦150,000 and its cash price is ₦126,000. The hire purchase interest is", "₦24,000", "₦276,000", "₦126,000", "₦12,000", "The difference between the two prices."],
          ["M", "A joint venture has sales of ₦120,000 and total costs of ₦95,000. A and B share profits 3 : 2. A's share of the profit is", "₦15,000", "₦10,000", "₦25,000", "₦12,500", "Three-fifths of ₦25,000."],
          ["H", "A firm has current assets of ₦90,000, including stock of ₦30,000, and current liabilities of ₦40,000. Its acid-test ratio is", "1.5 : 1", "2.25 : 1", "0.75 : 1", "3 : 1", "(90,000 − 30,000) ÷ 40,000."],
          ["H", "A trader's capital was ₦60,000 at the start of the year and ₦75,000 at the end. Drawings were ₦9,000 and he introduced additional capital of ₦5,000. His profit for the year was", "₦19,000", "₦24,000", "₦15,000", "₦29,000", "15,000 + 9,000 − 5,000."],
          ["H", "A consignee receives ordinary commission of 5% and del credere commission of 3% on sales of ₦250,000. His total commission is", "₦20,000", "₦12,500", "₦7,500", "₦25,000", "8% of ₦250,000."],
        ],
      },
    ],
  },
];
