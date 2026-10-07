import type { TermPlan } from "../types";

/** SS2 Financial Accounting — original Precious PS content following the national senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Control accounts",
        subtopics: ["Meaning and purpose of control accounts", "The sales ledger control account", "The purchases ledger control account", "Contra entries and reconciliation"],
        objectives: ["Explain the meaning and purposes of control accounts", "Prepare a sales ledger control account", "Prepare a purchases ledger control account", "Treat contra entries and explain how control accounts locate errors"],
        lesson: {
          title: "Total Accounts for Debtors and Creditors",
          summary: "Prepare sales and purchases ledger control accounts and explain their uses.",
          minutes: 40,
          notes: `## Control accounts
A **control account** is a **total (summary) account** kept in the general ledger which records, in total, all the transactions posted individually to the accounts in a subsidiary ledger. Its balance should equal the **sum of the individual balances** in that ledger.
- the **sales ledger control account (total debtors account)** controls the sales ledger
- the **purchases ledger control account (total creditors account)** controls the purchases ledger

## Purposes
- to **check the arithmetical accuracy** of the ledger it controls
- to **locate errors** quickly — in the particular ledger whose control account disagrees
- to provide the **total debtors and creditors** figures quickly for the trial balance and balance sheet
- to act as a **check against fraud**, especially when kept by a different person from the ledger clerk
- to find **missing figures** (credit sales or purchases) in incomplete records

## Sources of information
| Item | Source |
|---|---|
| credit sales | sales day book |
| credit purchases | purchases day book |
| returns inwards / outwards | returns books |
| cash and cheques; discounts | cash book |
| bad debts; interest; transfers | general journal |
| opening balances | list of balances from the previous period |

## Sales ledger control account
| Debit | Credit |
|---|---|
| balance b/d (debtors at start) | cash and cheques **received** from debtors |
| **credit sales** | **discounts allowed** |
| dishonoured cheques | **returns inwards** |
| interest charged on overdue accounts | **bad debts** written off |
| | set-offs (contra) against the purchases ledger |
| | balance c/d (debtors at end) |
*Example:* opening balance ₦10,000; credit sales ₦50,000; cash received ₦42,000; discount allowed ₦1,000; returns inwards ₦2,000.
Closing balance = 10,000 + 50,000 − 42,000 − 1,000 − 2,000 = **₦15,000**.

## Purchases ledger control account
| Debit | Credit |
|---|---|
| cash and cheques **paid** to creditors | balance b/d (creditors at start) |
| **discounts received** | **credit purchases** |
| **returns outwards** | interest charged by suppliers |
| set-offs (contra) against the sales ledger | |
| balance c/d (creditors at end) | |
*Example:* opening balance ₦8,000; credit purchases ₦30,000; payments ₦25,000; discount received ₦500; returns outwards ₦1,500.
Closing balance = 8,000 + 30,000 − 25,000 − 500 − 1,500 = **₦11,000**.

## Items that do NOT appear
- **cash sales** and **cash purchases** — no debtor or creditor is involved
- **provision for doubtful debts** — it is not posted to the debtors' individual accounts
- trade discount

## Contra entries (set-offs)
When the same person is **both a customer and a supplier**, the smaller balance is set off against the larger:
- **debit** the purchases ledger control account
- **credit** the sales ledger control account

## Balances on the "wrong" side
A sales ledger may contain a few **credit** balances (customers who overpaid or returned goods after paying); a purchases ledger may contain a few **debit** balances. These are shown separately as opening and closing balances on the opposite side of the control account.

## Using the control account to find errors
If the control account balance differs from the total of the individual balances, there is an error either in the control account or in the ledger. Typical causes: a day book wrongly totalled (affects the control account only); an invoice omitted from a personal account (affects the list of balances only); a balance wrongly extracted.

## Control accounts and double entry
Where the control account is part of the double entry, the individual personal accounts are memorandum records; where the personal accounts are the double entry, the control account is a memorandum — either way, each transaction is entered **once in total and once in detail**.`,
          examples: `**Example 1.** Debtors at start ₦24,000; credit sales ₦96,000; receipts ₦88,000; bad debts ₦2,000. Find the closing debtors. *Solution:* 24,000 + 96,000 − 88,000 − 2,000 = **₦30,000**.

**Example 2.** On which side of the purchases ledger control account are discounts received entered? *Answer:* The **debit** side.

**Example 3.** Why do cash sales not appear in the sales ledger control account? *Answer:* They create **no debtor**.`,
        },
        questions: [
          ["E", "The sales ledger control account is also known as the", "total debtors account", "total creditors account", "suspense account", "trading account", "It summarises the accounts of credit customers."],
          ["E", "The purchases ledger control account summarises the accounts of", "trade creditors", "trade debtors", "employees", "shareholders", "It is also called the total creditors account."],
          ["E", "The total of credit sales for a control account is obtained from the", "sales day book", "cash book", "purchases day book", "petty cash book", "Each control account item comes from a book of original entry."],
          ["M", "Sales ledger control: opening balance ₦10,000; credit sales ₦50,000; cash received ₦42,000; discount allowed ₦1,000; returns inwards ₦2,000. The closing balance is", "₦15,000", "₦19,000", "₦17,000", "₦5,000", "10,000 + 50,000 − 42,000 − 1,000 − 2,000."],
          ["M", "In the purchases ledger control account, discounts received are entered on the", "debit side", "credit side", "balance c/d line only", "contra side of the sales ledger", "They reduce the amount owed to creditors."],
          ["M", "A set-off between a customer's account and the same person's account as a supplier is called", "a contra entry", "a compensating error", "a closing entry", "a provision", "It is debited to the purchases ledger control and credited to the sales ledger control."],
          ["M", "One purpose of a control account is to", "help locate errors in the ledger it controls", "calculate depreciation", "record petty cash payments", "show the profit of the business", "Its balance should equal the total of the individual balances."],
          ["H", "Purchases ledger control: opening balance ₦8,000; credit purchases ₦30,000; payments to creditors ₦25,000; discount received ₦500; returns outwards ₦1,500. The closing balance is", "₦11,000", "₦13,000", "₦12,000", "₦15,000", "8,000 + 30,000 − 25,000 − 500 − 1,500."],
          ["H", "Which of the following does NOT appear in a sales ledger control account?", "cash sales", "credit sales", "bad debts written off", "discounts allowed", "A cash sale creates no debtor."],
          ["H", "Bad debts written off are entered in the sales ledger control account on the", "credit side", "debit side", "opening balance line", "side of credit sales", "They reduce the total owed by debtors."],
        ],
      },
      {
        week: 2,
        title: "Single entry and incomplete records",
        subtopics: ["Meaning and disadvantages of single entry", "The statement of affairs and profit by comparison of capital", "Conversion to double entry", "Use of mark-up and margin"],
        objectives: ["Explain single entry and its disadvantages", "Calculate profit from statements of affairs", "Derive missing figures from total accounts and prepare final accounts", "Use mark-up and margin to find missing figures"],
        lesson: {
          title: "Accounts from Incomplete Records",
          summary: "Calculate profit and prepare final accounts when full double-entry records have not been kept.",
          minutes: 40,
          notes: `## Single entry
Any system of bookkeeping that **does not fully follow double entry**. Typically only a cash book and personal accounts are kept — or no proper books at all. Records are said to be **incomplete**.

### Why some traders use it
small size of business; lack of accounting knowledge; saving of time and cost.

### Disadvantages
- **no trial balance** can be extracted — arithmetical accuracy cannot be checked
- profit can only be **estimated**
- **no nominal or real accounts** — details of expenses, income and assets are lacking
- errors and **fraud** are hard to detect
- final accounts cannot be prepared directly
- unreliable for tax, loans or sale of the business

## Statement of affairs
A statement of **assets and liabilities at a date**, similar to a balance sheet but drawn up from estimates and available information rather than from ledger balances. **Capital = assets − liabilities**.

## Profit by comparison of capital
**profit = closing capital − opening capital + drawings − capital introduced**
*Examples:*
- opening capital ₦40,000; closing capital ₦55,000; drawings ₦6,000: profit = 55,000 − 40,000 + 6,000 = **₦21,000**
- if, in addition, ₦4,000 of new capital was introduced: profit = **₦17,000**
A negative answer is a loss.
Drawings are added back because they reduced closing capital without being a business loss; new capital is deducted because it increased closing capital without being profit.

## Conversion to double entry
To prepare a full trading and profit and loss account and balance sheet:
1. prepare an **opening statement of affairs** to find opening capital
2. prepare a **cash and bank summary**
3. prepare **total debtors** and **total creditors** accounts to find credit sales and credit purchases
4. adjust expenses for accruals and prepayments
5. prepare the final accounts

### Finding credit sales
**credit sales = cash received from debtors + discounts allowed + bad debts + closing debtors − opening debtors**
*Example:* opening debtors ₦5,000; cash received ₦48,000; closing debtors ₦7,000: credit sales = 48,000 + 7,000 − 5,000 = **₦50,000**.
Total sales = credit sales + cash sales.

### Finding credit purchases
**credit purchases = cash paid to creditors + discounts received + closing creditors − opening creditors**
*Example:* opening creditors ₦4,000; payments ₦30,000; closing creditors ₦6,000: purchases = 30,000 + 6,000 − 4,000 = **₦32,000**.

### Finding missing cash figures
The cash summary may reveal missing drawings or cash sales as a balancing figure.

## Mark-up and margin
- **mark-up** = gross profit ÷ **cost** of sales
- **margin** = gross profit ÷ **sales**
| Mark-up | Margin |
|---|---|
| ¼ (25%) | ⅕ (20%) |
| ⅓ (33⅓%) | ¼ (25%) |
| ½ (50%) | ⅓ (33⅓%) |
| 1 (100%) | ½ (50%) |
If the mark-up is $\\frac{a}{b}$, the margin is $\\frac{a}{a+b}$; if the margin is $\\frac{a}{b}$, the mark-up is $\\frac{a}{b-a}$.
*Examples:*
- cost of sales ₦60,000; margin 25% (so mark-up 33⅓%): gross profit ₦20,000; sales **₦80,000**
- sales ₦90,000; mark-up 50% (margin 33⅓%): gross profit ₦30,000; cost of sales ₦60,000
These relationships are used to find **missing sales, purchases or stock** — for example stock lost by fire or theft:
cost of sales (from sales and margin) compared with opening stock + purchases gives the stock that **should** remain; any shortfall from the stock actually found is the loss.

## Stock turnover
cost of goods sold ÷ average stock — sometimes used to find a missing stock figure.`,
          examples: `**Example 1.** Capital at 1 January was ₦90,000 and at 31 December ₦112,000; drawings were ₦15,000. Find the profit. *Solution:* 112,000 − 90,000 + 15,000 = **₦37,000**.

**Example 2.** Opening debtors ₦12,000; receipts ₦70,000; discounts allowed ₦1,000; closing debtors ₦15,000. Find the credit sales. *Solution:* 70,000 + 1,000 + 15,000 − 12,000 = **₦74,000**.

**Example 3.** Convert a mark-up of 25% to a margin. *Solution:* ¼ becomes ⅕ = **20%**.`,
        },
        questions: [
          ["E", "A system of bookkeeping that does not fully follow the double-entry principle is", "single entry", "the imprest system", "the journal", "the voucher system", "Records kept under it are incomplete."],
          ["E", "A statement of assets and liabilities prepared from incomplete records is a", "statement of affairs", "trial balance", "bank statement", "manufacturing account", "It resembles a balance sheet."],
          ["E", "A disadvantage of single entry is that", "a trial balance cannot be extracted", "it requires too many books", "it is too costly for small traders", "profit is always overstated", "The accuracy of the records cannot be tested."],
          ["M", "A trader's capital was ₦40,000 at the start of the year and ₦55,000 at the end. Drawings were ₦6,000. The profit for the year is", "₦21,000", "₦15,000", "₦9,000", "₦101,000", "55,000 − 40,000 + 6,000."],
          ["M", "Opening capital ₦40,000; closing capital ₦55,000; drawings ₦6,000; additional capital introduced ₦4,000. The profit is", "₦17,000", "₦21,000", "₦25,000", "₦11,000", "New capital is deducted from the increase."],
          ["M", "A mark-up of 25% on cost is equivalent to a margin on sales of", "20%", "25%", "33⅓%", "75%", "One-quarter of cost equals one-fifth of sales."],
          ["M", "In incomplete records, the figure for credit sales is usually found by preparing", "a total debtors account", "a total creditors account", "a petty cash book", "a bank reconciliation", "Credit sales appear as the balancing figure."],
          ["H", "Opening debtors were ₦5,000, cash received from debtors ₦48,000 and closing debtors ₦7,000. Credit sales for the period were", "₦50,000", "₦46,000", "₦60,000", "₦36,000", "48,000 + 7,000 − 5,000."],
          ["H", "Opening creditors were ₦4,000, payments to creditors ₦30,000 and closing creditors ₦6,000. Credit purchases for the period were", "₦32,000", "₦28,000", "₦40,000", "₦20,000", "30,000 + 6,000 − 4,000."],
          ["H", "A trader's cost of goods sold is ₦60,000 and his gross profit margin is 25% of sales. His sales are", "₦80,000", "₦75,000", "₦45,000", "₦90,000", "Cost is three-quarters of sales."],
        ],
      },
      {
        week: 3,
        title: "Accounts of non-profit-making organisations",
        subtopics: ["Features of non-profit organisations", "The receipts and payments account", "The income and expenditure account", "The accumulated fund and balance sheet"],
        objectives: ["State the features and sources of income of non-profit organisations", "Prepare a receipts and payments account", "Prepare an income and expenditure account with subscription adjustments", "Calculate the accumulated fund and prepare the balance sheet"],
        lesson: {
          title: "Clubs and Societies",
          summary: "Prepare the accounts of clubs, societies and other non-profit organisations.",
          minutes: 40,
          notes: `## Non-profit-making organisations
Bodies formed to promote the **welfare of members or a cause**, not to make profit: clubs, societies, associations, churches, mosques, charities, old students' unions.
### Sources of income
**subscriptions**; entrance (enrolment) fees; **donations**; legacies; life membership fees; **profit from the bar or canteen**; proceeds of dances, raffles and other activities; grants; interest on investments; hire of facilities.

## Terminology
| Trading concern | Non-profit organisation |
|---|---|
| cash book (summary) | **receipts and payments account** |
| profit and loss account | **income and expenditure account** |
| net profit | **surplus** (excess of income over expenditure) |
| net loss | **deficit** (excess of expenditure over income) |
| capital | **accumulated fund** |

## Receipts and payments account
A **summary of the cash book** for the period, usually prepared by the treasurer.
- **debit**: opening cash and bank balances and **all receipts**
- **credit**: **all payments**, and the closing balance
### Features
- it records **actual cash** received and paid, **whether capital or revenue**, and whether for this year, last year or next year
- it starts and ends with **cash and bank balances**
- it makes **no adjustments** for accruals, prepayments or depreciation
- it does **not** show the surplus or deficit, nor the assets and liabilities

## Income and expenditure account
The equivalent of the profit and loss account.
- **credit**: **revenue income** belonging to the period
- **debit**: **revenue expenditure** of the period, including **depreciation**
### Features
- **only revenue items** — capital receipts and capital payments (buying equipment) are excluded
- it uses the **accruals basis** — adjusted for amounts owing and paid in advance
- the balance is a **surplus or deficit**, transferred to the accumulated fund
- it has **no opening or closing cash balance**

| Receipts and payments account | Income and expenditure account |
|---|---|
| cash basis | accruals basis |
| capital and revenue items | revenue items only |
| balance = cash/bank in hand | balance = surplus or deficit |
| a real account | a nominal account |

## Subscriptions
**subscription income for the year = subscriptions received − arrears at start + arrears at end + advance at start − advance at end**
*Example:* received ₦50,000; arrears at start ₦3,000; arrears at end ₦4,000; received in advance at end ₦2,000:
income = 50,000 − 3,000 + 4,000 − 2,000 = **₦49,000**.
- **subscriptions in arrears** — owed by members: a **current asset**
- **subscriptions in advance** — paid for next year: a **current liability**

## Trading activities
A **bar or canteen trading account** is prepared separately and only the profit (or loss) is taken to the income and expenditure account.
*Example:* bar sales ₦40,000; opening stock ₦5,000; purchases ₦28,000; closing stock ₦6,000: cost of sales ₦27,000; **bar profit ₦13,000** (before bar wages).
Proceeds of a dance or raffle are shown net of their expenses.

## Special items
- **entrance fees** — treated as income, or capitalised (added to the accumulated fund), according to the club's policy
- **life membership fees** — usually capitalised and spread over a number of years
- **donations and legacies** — small, general ones are income; large ones, or those for a **specific purpose** (a building fund), are capitalised in a special fund
- **honorarium** — a payment to an officer for voluntary service; an expense

## Accumulated fund
**accumulated fund = total assets − total liabilities**
*Example:* assets ₦120,000; liabilities ₦15,000: accumulated fund = **₦105,000**.
Closing accumulated fund = opening fund + surplus (or − deficit) + items capitalised.

## Balance sheet
Fixed assets (less depreciation); current assets (bar stock, subscriptions in arrears, prepayments, cash and bank); current liabilities (subscriptions in advance, accruals, creditors); financed by the accumulated fund and any special funds.

## Steps in a typical question
1. opening statement of affairs → opening accumulated fund
2. bar trading account
3. income and expenditure account
4. balance sheet`,
          examples: `**Example 1.** What is the equivalent of capital in a club's accounts? *Answer:* The **accumulated fund**.

**Example 2.** Subscriptions received ₦80,000, including ₦6,000 for next year; ₦4,000 is still owed for this year. Find the income. *Solution:* 80,000 − 6,000 + 4,000 = **₦78,000**.

**Example 3.** Should the purchase of a generator appear in the income and expenditure account? *Answer:* **No** — it is **capital expenditure**; only its depreciation appears.`,
        },
        questions: [
          ["E", "The account of a club that is a summary of its cash book is the", "receipts and payments account", "income and expenditure account", "trading account", "appropriation account", "It records all cash received and paid."],
          ["E", "In a non-profit organisation, the income and expenditure account is the equivalent of the", "profit and loss account", "balance sheet", "cash book", "trial balance", "It shows the surplus or deficit."],
          ["E", "The excess of income over expenditure of a non-profit organisation is called", "a surplus", "a net profit", "a deficit", "a dividend", "The term profit is not used."],
          ["M", "The capital of a non-profit-making organisation is known as its", "accumulated fund", "share capital", "reserve fund", "working capital", "It is total assets less total liabilities."],
          ["M", "Subscriptions in arrears at the year end are shown in the balance sheet as", "a current asset", "a current liability", "a fixed asset", "part of the accumulated fund", "Members owe the amount to the club."],
          ["M", "Subscriptions received in advance are shown in the balance sheet as", "a current liability", "a current asset", "income for the year", "a fixed asset", "They belong to the next period."],
          ["M", "Which of the following is excluded from the income and expenditure account?", "the purchase of sports equipment", "depreciation of equipment", "subscriptions for the year", "rent of the club house", "Capital expenditure is shown in the balance sheet."],
          ["H", "Subscriptions received in the year were ₦50,000. Arrears were ₦3,000 at the start and ₦4,000 at the end, and ₦2,000 was received in advance at the end. Subscription income for the year is", "₦49,000", "₦51,000", "₦53,000", "₦47,000", "50,000 − 3,000 + 4,000 − 2,000."],
          ["H", "A club's bar had sales of ₦40,000, opening stock ₦5,000, purchases ₦28,000 and closing stock ₦6,000. The bar profit is", "₦13,000", "₦12,000", "₦7,000", "₦18,000", "Sales less a cost of sales of ₦27,000."],
          ["H", "A society has total assets of ₦120,000 and total liabilities of ₦15,000. Its accumulated fund is", "₦105,000", "₦135,000", "₦120,000", "₦15,000", "Assets less liabilities."],
        ],
      },
      {
        week: 4,
        title: "Manufacturing accounts",
        subtopics: ["Elements of cost", "Prime cost and factory overheads", "Work in progress and cost of production", "Trading and profit and loss account of a manufacturer"],
        objectives: ["Classify the costs of a manufacturing business", "Calculate prime cost and factory overheads", "Adjust for work in progress and find the cost of production", "Prepare the manufacturing, trading and profit and loss account"],
        lesson: {
          title: "Accounts of a Manufacturer",
          summary: "Prepare a manufacturing account showing prime cost and the cost of production.",
          minutes: 40,
          notes: `## Purpose
A **manufacturing account** is prepared by a business that **makes** the goods it sells, to find the **cost of production** of goods completed in the period.

## Elements of cost
### Direct costs
Costs that can be **traced directly** to the units produced.
- **direct materials** — raw materials consumed
- **direct labour** — wages of workers who actually make the product
- **direct expenses** — **royalties**, hire of special plant, patent fees
### Indirect costs (overheads)
Costs that cannot be traced to particular units.
- **factory (production) overheads**: factory rent and rates, factory power and lighting, **indirect wages** (supervisors, cleaners, storekeepers), depreciation of plant, repairs to machinery, factory insurance, indirect materials (lubricants)
- **administrative overheads**: office salaries, office rent, stationery
- **selling and distribution overheads**: advertising, carriage outwards, salesmen's salaries
Only **factory overheads** go into the manufacturing account; administrative and selling overheads go into the **profit and loss account**.

## Three kinds of stock
- **raw materials**
- **work in progress (WIP)** — partly finished goods
- **finished goods**

## Layout
| | ₦ |
|---|---|
| Opening stock of raw materials | x |
| Add purchases of raw materials | x |
| Add carriage inwards | x |
| Less closing stock of raw materials | (x) |
| **Cost of raw materials consumed** | x |
| Add direct labour (manufacturing wages) | x |
| Add direct expenses (royalties) | x |
| **PRIME COST** | x |
| Add factory overheads | x |
| **Total factory cost** | x |
| Add opening work in progress | x |
| Less closing work in progress | (x) |
| **COST OF PRODUCTION (of finished goods)** | x |

## Worked example
Opening raw materials ₦10,000; purchases ₦60,000; closing raw materials ₦15,000; direct wages ₦30,000; direct expenses ₦5,000; factory overheads ₦25,000; opening WIP ₦8,000; closing WIP ₦6,000.
- raw materials consumed = 10,000 + 60,000 − 15,000 = **₦55,000**
- prime cost = 55,000 + 30,000 + 5,000 = **₦90,000**
- cost of production = 90,000 + 25,000 + 8,000 − 6,000 = **₦117,000**
If 9,000 units were completed, the **unit cost** = 117,000 ÷ 9,000 = **₦13**.

## Trading account of a manufacturer
The **cost of production** is transferred to the trading account, where it takes the place of purchases:
| | ₦ |
|---|---|
| Sales | x |
| Opening stock of finished goods | x |
| Add **cost of production** | x |
| Less closing stock of finished goods | (x) |
| Cost of goods sold | (x) |
| **Gross profit** | x |
The profit and loss account then deducts administrative, selling and financial expenses.

## Manufacturing profit
Some firms transfer finished goods to the trading account at **market (wholesale) value** rather than cost, to see whether it is cheaper to make or to buy.
**manufacturing profit = market value of goods produced − cost of production**
*Example:* market value ₦130,000; cost of production ₦117,000: manufacturing profit **₦13,000**, credited to the profit and loss account. Any unrealised profit in the closing stock of finished goods must be provided for.

## Apportionment of expenses
Expenses shared by factory and office — rent, lighting, insurance — are split on a stated basis (for example ¾ factory, ¼ office).

## Balance sheet
The three closing stocks — raw materials, work in progress and finished goods — are all shown as current assets.`,
          examples: `**Example 1.** Direct materials ₦80,000; direct labour ₦45,000; royalties ₦5,000. Find the prime cost. *Solution:* **₦130,000**.

**Example 2.** Prime cost ₦130,000; factory overheads ₦40,000; opening WIP ₦12,000; closing WIP ₦10,000. Find the cost of production. *Solution:* 130,000 + 40,000 + 12,000 − 10,000 = **₦172,000**.

**Example 3.** Is a salesman's commission included in the manufacturing account? *Answer:* **No** — it is a **selling expense** in the profit and loss account.`,
        },
        questions: [
          ["E", "The total of direct materials, direct labour and direct expenses is called", "prime cost", "factory overhead", "cost of production", "administrative cost", "It is the direct cost of manufacture."],
          ["E", "Factory rent and depreciation of plant are examples of", "factory overheads", "direct expenses", "selling expenses", "prime cost", "They cannot be traced to particular units."],
          ["E", "Royalties paid per unit produced are classified as", "direct expenses", "factory overheads", "administrative expenses", "selling expenses", "They vary directly with production."],
          ["M", "Opening stock of raw materials ₦10,000; purchases ₦60,000; closing stock ₦15,000. The cost of raw materials consumed is", "₦55,000", "₦65,000", "₦85,000", "₦45,000", "10,000 + 60,000 − 15,000."],
          ["M", "Raw materials consumed ₦55,000; direct wages ₦30,000; direct expenses ₦5,000. The prime cost is", "₦90,000", "₦85,000", "₦60,000", "₦115,000", "The three direct costs are added."],
          ["M", "Partly finished goods at the end of a period are called", "work in progress", "finished goods", "raw materials", "loose tools", "They are adjusted for in the manufacturing account."],
          ["M", "The cost of production from the manufacturing account is transferred to the", "trading account", "balance sheet", "appropriation account", "cash book", "It replaces purchases of finished goods."],
          ["H", "Prime cost ₦90,000; factory overheads ₦25,000; opening work in progress ₦8,000; closing work in progress ₦6,000. The cost of production is", "₦117,000", "₦115,000", "₦113,000", "₦129,000", "90,000 + 25,000 + 8,000 − 6,000."],
          ["H", "A factory completes 9,000 units at a total cost of production of ₦117,000. The cost per unit is", "₦13", "₦11.70", "₦1.30", "₦130", "117,000 ÷ 9,000."],
          ["H", "Goods with a cost of production of ₦117,000 are transferred to the trading account at a market value of ₦130,000. The manufacturing profit is", "₦13,000", "₦247,000", "₦117,000", "₦1,300", "Market value less cost of production."],
        ],
      },
      {
        week: 5,
        title: "Stock valuation",
        subtopics: ["Importance of stock valuation", "First in, first out", "Last in, first out and weighted average", "Lower of cost and net realisable value"],
        objectives: ["Explain the importance of stock valuation", "Value stock by the FIFO method", "Value stock by the LIFO and weighted average methods", "Apply the rule of lower of cost and net realisable value"],
        lesson: {
          title: "Valuing Stock",
          summary: "Value stock by FIFO, LIFO and weighted average and explain the effect on profit.",
          minutes: 40,
          notes: `## Why stock valuation matters
Closing stock appears in the **trading account** (reducing the cost of sales) and in the **balance sheet** (as a current asset). An error in it changes both the profit and the financial position — and, as next year's opening stock, next year's profit too.
- closing stock **overstated** → cost of sales understated → **profit overstated**
- closing stock **understated** → **profit understated**

## The basic rule
Stock is valued at the **lower of cost and net realisable value** — an application of **prudence**.
- **cost** — purchase price plus costs of bringing the stock to its present location and condition (carriage inwards, duties)
- **net realisable value (NRV)** — estimated selling price **less** any further costs needed to complete and sell the goods
*Example:* stock that cost ₦5,000 is damaged and can be sold for only ₦4,200: it is valued at **₦4,200**.
The rule is applied to each item or group separately.

## Methods of finding cost
When identical items are bought at **different prices**, a method is needed to decide which prices apply to the issues and which to the stock left.

### Illustration
| Date | Transaction |
|---|---|
| 1 March | bought 10 units at ₦100 each |
| 8 March | bought 10 units at ₦120 each |
| 15 March | issued (sold) 12 units |
Units left: 8.

### First in, first out (FIFO)
The **earliest** purchases are assumed to be issued first; closing stock is valued at the **latest** prices.
- issue: 10 at ₦100 + 2 at ₦120 = **₦1,240**
- closing stock: 8 at ₦120 = **₦960**

### Last in, first out (LIFO)
The **latest** purchases are assumed to be issued first; closing stock is valued at the **earliest** prices.
- issue: 10 at ₦120 + 2 at ₦100 = ₦1,400
- closing stock: 8 at ₦100 = **₦800**

### Weighted average cost (AVCO)
An average cost is calculated after each purchase:
average = (1,000 + 1,200) ÷ 20 = **₦110** per unit
- issue: 12 at ₦110 = ₦1,320
- closing stock: 8 at ₦110 = **₦880**

### Simple average
The average of the prices, ignoring quantities: (100 + 120) ÷ 2 = ₦110. It is less accurate when quantities differ.

## Comparison when prices are rising
| | FIFO | AVCO | LIFO |
|---|---|---|---|
| closing stock | highest | middle | lowest |
| cost of sales | lowest | middle | highest |
| profit | **highest** | middle | **lowest** |
When prices are falling, the positions are reversed.

### FIFO
- **advantages**: realistic — matches the physical flow of most goods; closing stock is near current prices; acceptable under accounting standards
- **disadvantage**: in inflation it overstates profit, since old, low costs are matched against current revenue

### LIFO
- **advantages**: cost of sales reflects recent prices; a lower profit and tax in inflation
- **disadvantages**: closing stock is shown at out-of-date prices; not accepted by international accounting standards

### Weighted average
- smooths out price fluctuations; simple where a perpetual stock record is kept
- but the average must be recalculated after each purchase

## Stock records
- **periodic inventory** — stock is counted and valued at the end of the period (**stocktaking**)
- **perpetual inventory** — a continuous record on **bin cards** and a stores ledger, checked by continuous stocktaking

## Consistency
Whichever method is chosen should be used from year to year, so that profits can be compared.

## Stock lost or stolen
If the physical count is less than the records show, the difference is investigated; cost of missing stock can be estimated from the gross profit margin.`,
          examples: `**Example 1.** Stock cost ₦18,000 and has a net realisable value of ₦20,000. At what value is it shown? *Answer:* **₦18,000** — the lower figure.

**Example 2.** 5 units bought at ₦200 and 5 at ₦260; 6 units issued. Find the FIFO value of closing stock. *Solution:* 4 at ₦260 = **₦1,040**.

**Example 3.** In a period of rising prices, which method gives the lowest profit? *Answer:* **LIFO**.`,
        },
        questions: [
          ["E", "The stock valuation method that assumes the earliest goods bought are the first to be issued is", "FIFO", "LIFO", "weighted average", "simple average", "FIFO stands for first in, first out."],
          ["E", "LIFO stands for", "last in, first out", "last in, final out", "lowest in, first out", "latest invoice, first order", "The most recent purchases are issued first."],
          ["E", "Stock is normally valued at", "the lower of cost and net realisable value", "the higher of cost and net realisable value", "selling price", "replacement price only", "This applies the prudence concept."],
          ["M", "A trader bought 10 units at ₦100 each and then 10 units at ₦120 each, and issued 12 units. Using FIFO, the value of the closing stock is", "₦960", "₦800", "₦880", "₦1,240", "8 units remain, valued at the latest price of ₦120."],
          ["M", "A trader bought 10 units at ₦100 each and then 10 units at ₦120 each, and issued 12 units. Using LIFO, the value of the closing stock is", "₦800", "₦960", "₦880", "₦1,400", "8 units remain, valued at the earliest price of ₦100."],
          ["M", "A trader bought 10 units at ₦100 each and 10 units at ₦120 each. The weighted average cost per unit is", "₦110", "₦100", "₦120", "₦220", "₦2,200 ÷ 20 units."],
          ["M", "In a period of rising prices, the method that gives the highest reported profit is", "FIFO", "LIFO", "weighted average", "simple average", "Older, lower costs are charged against sales."],
          ["H", "Stock that cost ₦5,000 has been damaged and has a net realisable value of ₦4,200. In the balance sheet it should be shown at", "₦4,200", "₦5,000", "₦9,200", "₦800", "The lower of cost and net realisable value."],
          ["H", "A trader bought 10 units at ₦100 each and 10 at ₦120 each, then issued 12 units. Under FIFO, the cost of the units issued is", "₦1,240", "₦1,400", "₦1,320", "₦1,200", "10 at ₦100 plus 2 at ₦120."],
          ["H", "If closing stock is overstated, the effect on the net profit for the year is that it is", "overstated", "understated", "unaffected", "halved", "Cost of goods sold is understated."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Partnership accounts: formation and appropriation",
        subtopics: ["The partnership agreement and the Partnership Act", "The profit and loss appropriation account", "Partners' capital and current accounts", "The balance sheet of a partnership"],
        objectives: ["State the contents of a partnership agreement and the rules that apply in its absence", "Prepare a profit and loss appropriation account", "Prepare partners' capital and current accounts", "Prepare the balance sheet of a partnership"],
        lesson: {
          title: "Sharing Partnership Profits",
          summary: "Prepare the appropriation account and partners' current accounts.",
          minutes: 40,
          notes: `## Partnership
The relationship between **two to twenty persons carrying on a business in common with a view to profit**.

## The partnership agreement (deed)
A written agreement setting out the terms. It normally covers:
- the **capital** each partner contributes
- the **profit- and loss-sharing ratio**
- **interest on capital**
- **interest on drawings**
- **partners' salaries**
- interest on partners' loans
- the limit on drawings; the duties of partners
- the preparation of accounts; admission, retirement and dissolution

## In the absence of an agreement
The **Partnership Act of 1890** applies:
- profits and losses are shared **equally**
- **no interest on capital**
- **no interest on drawings**
- **no salaries** to partners
- interest of **5% per annum** on loans or advances made by a partner beyond his capital
- every partner may take part in management
- no new partner may be admitted without the consent of all

## The profit and loss appropriation account
Shows how the **net profit is shared**.
| | ₦ | ₦ |
|---|---|---|
| Net profit b/d | | x |
| **Add** interest on drawings | | x |
| | | x |
| **Less** interest on capital | x | |
| partners' salaries | x | |
| | | (x) |
| **Residual profit**, shared in the agreed ratio | | x |
- **interest on capital** rewards partners who contribute more capital
- **partners' salaries** reward those who do more work; they are an **appropriation of profit**, not an expense
- **interest on drawings** discourages excessive drawings; it is **added** to the profit available
- **interest on a partner's loan** is a **charge** against profit, shown in the profit and loss account, not the appropriation account

### Worked example
A and B share profits 3 : 2. Net profit ₦100,000. Interest on capital: A ₦5,000, B ₦3,000. Salary to B ₦12,000.
- total appropriations before sharing: 5,000 + 3,000 + 12,000 = ₦20,000
- residual profit: ₦80,000
- A: ⅗ × 80,000 = **₦48,000**; B: ⅖ × 80,000 = **₦32,000**
- A's total: 5,000 + 48,000 = **₦53,000**; B's total: 3,000 + 12,000 + 32,000 = **₦47,000**

*Interest on capital:* 10% on capital of ₦60,000 = ₦6,000.

## Capital accounts
- **fixed capital** — the capital account stays unchanged except when capital is introduced or withdrawn; all other items go through a **current account**
- **fluctuating capital** — everything is passed through the capital account

## Current accounts
| Debit | Credit |
|---|---|
| drawings | balance b/d |
| interest on drawings | interest on capital |
| share of loss | salary |
| | share of profit |
| balance c/d | interest on loan (if not paid) |
A **credit** balance is owed by the firm to the partner; a **debit** balance is owed by the partner to the firm.

## Balance sheet
Assets and liabilities as for a sole trader; the "financed by" section shows each partner's **capital account** and **current account** balance separately. A partner's loan is shown as a long-term liability.

## Types of partner
active (general); sleeping (dormant); nominal; limited.

## Guaranteed share
A partner may be guaranteed a minimum share of profit; any shortfall is made up by the other partners.`,
          examples: `**Example 1.** How are profits shared when there is no partnership agreement? *Answer:* **Equally**.

**Example 2.** Net profit ₦90,000; salary to Y ₦10,000; X and Y share 3 : 1. Find X's share of the residual profit. *Solution:* ¾ × 80,000 = **₦60,000**.

**Example 3.** Where is interest on a partner's loan shown? *Answer:* As a **charge in the profit and loss account**.`,
        },
        questions: [
          ["E", "The document that sets out the terms agreed among partners is the", "partnership deed", "memorandum of association", "prospectus", "certificate of incorporation", "It is also called the partnership agreement."],
          ["E", "In the absence of a partnership agreement, profits and losses are shared", "equally", "in the ratio of capital", "according to age", "in the ratio of drawings", "This is the rule of the Partnership Act."],
          ["E", "The account that shows how the net profit of a partnership is shared among the partners is the", "appropriation account", "trading account", "realisation account", "control account", "It follows the profit and loss account."],
          ["M", "A partner has capital of ₦60,000 and interest on capital is allowed at 10% per annum. The interest for the year is", "₦6,000", "₦600", "₦66,000", "₦10,000", "10% of ₦60,000."],
          ["M", "In the appropriation account, interest on drawings is", "added to the net profit", "deducted from the net profit", "ignored", "shown as a salary", "It is charged to the partners and increases the profit available."],
          ["M", "Partners' salaries are shown in the", "appropriation account", "profit and loss account as expenses", "trading account", "manufacturing account", "They are an appropriation of profit."],
          ["M", "Drawings, salaries and shares of profit of partners with fixed capital are recorded in their", "current accounts", "capital accounts", "loan accounts", "realisation accounts", "The capital accounts remain unchanged."],
          ["H", "A and B share profits 3 : 2. Net profit is ₦100,000; interest on capital is A ₦5,000 and B ₦3,000; B receives a salary of ₦12,000. A's share of the residual profit is", "₦48,000", "₦60,000", "₦32,000", "₦53,000", "Three-fifths of the residual ₦80,000."],
          ["H", "A and B share profits 3 : 2. Net profit ₦100,000; interest on capital A ₦5,000, B ₦3,000; salary to B ₦12,000. B's total entitlement for the year is", "₦47,000", "₦32,000", "₦44,000", "₦53,000", "3,000 + 12,000 + 32,000."],
          ["H", "Where there is no agreement, a partner who lends money to the firm beyond his capital is entitled to interest at", "5% per annum", "10% per annum", "the bank rate", "no interest", "This is provided by the Partnership Act."],
        ],
      },
      {
        week: 2,
        title: "Partnership accounts: admission, goodwill and revaluation",
        subtopics: ["Admission of a new partner", "Goodwill and its valuation", "Accounting treatment of goodwill", "Revaluation of assets"],
        objectives: ["Explain the changes that occur on the admission of a partner", "Define goodwill and calculate its value", "Record goodwill in the partners' accounts", "Prepare a revaluation account"],
        lesson: {
          title: "Changes in a Partnership",
          summary: "Account for goodwill and the revaluation of assets when a new partner is admitted.",
          minutes: 40,
          notes: `## Admission of a new partner
A new partner may be admitted — with the **consent of all** the existing partners — to bring in more capital, new skills or to replace a retiring partner. The old partnership legally ends and a new one begins. Adjustments are needed for:
- a new **profit-sharing ratio**
- **goodwill**
- **revaluation** of assets and liabilities
- the new partner's **capital**

## Goodwill
The **excess of the value of a business as a whole over the value of its separable net assets** — the advantage of an established business over a new one. It is an **intangible fixed asset**.
### Factors that give rise to goodwill
- good **reputation** and customer loyalty
- good **location**
- quality of products and service
- skill of management and staff
- possession of patents, trade marks or a monopoly
- good relations with suppliers
- a record of high profits

### Methods of valuation
- a number of **years' purchase of average net profits**
  *Example:* profits of ₦40,000, ₦50,000 and ₦60,000: average ₦50,000; three years' purchase = **₦150,000**. Two years' purchase of an average profit of ₦30,000 = **₦60,000**
- a number of years' purchase of **super profits** (profit above a normal return on capital)
- a number of years' purchase of average **gross receipts** or fees
- **capitalisation** of profits

### Why goodwill must be adjusted on admission
The old partners built up the goodwill; the new partner will share in future profits earned from it. The old partners must be **compensated**.

### Treatment
**1. Goodwill account opened and retained**
- debit Goodwill; credit the **old partners' capital accounts in the old ratio**
Goodwill appears in the new balance sheet.

**2. Goodwill raised and then written off**
- raise it: credit the old partners in the **old ratio**
- write it off: debit **all** partners (including the new one) in the **new ratio**
*Example:* A and B share 3 : 2; goodwill ₦50,000; new ratio A : B : C = 2 : 2 : 1.
Credited: A ₦30,000; B ₦20,000. Debited: A ₦20,000; B ₦20,000; C ₦10,000.
Net effect: A **+₦10,000**; B nil; C **−₦10,000**.

**3. Premium paid by the new partner**
The new partner pays cash for his share of goodwill; it is credited to the old partners in the ratio in which they **sacrifice** profit — either left in the business or withdrawn.

## Revaluation of assets
On admission (or retirement or death), assets and liabilities are restated at their **current values**, so that the gain or loss up to that date belongs to the **old partners**.
### Revaluation account
| Debit | Credit |
|---|---|
| **decreases** in the value of assets | **increases** in the value of assets |
| increases in liabilities; new provisions | decreases in liabilities |
| **profit** on revaluation → old partners' capital | **loss** on revaluation ← old partners' capital |
The profit or loss is shared by the **old partners in the old ratio**.
*Example:* buildings increase by ₦20,000; stock falls by ₦5,000: profit on revaluation = **₦15,000**. With A and B sharing 3 : 2, A receives **₦9,000** and B ₦6,000.

## The new partner's capital
- debit Cash/Bank (or the assets brought in); credit the new partner's capital account

## Retirement or death of a partner
The same adjustments are made. The amount due to the retiring partner — capital, current account balance, share of goodwill and of revaluation profit — is paid at once, or transferred to a **loan account** and paid by instalments with interest.

## Change in profit-sharing ratio
A partner who gains a larger share compensates the one who gives it up, by an adjustment for goodwill.

## Purchased and non-purchased goodwill
Accounting standards allow only **purchased goodwill** to be recorded as an asset, and it should be written off (amortised or tested for impairment) over time; goodwill generated internally is not recorded.`,
          examples: `**Example 1.** Profits for three years were ₦24,000, ₦30,000 and ₦36,000. Value goodwill at two years' purchase of the average. *Solution:* average ₦30,000; goodwill = **₦60,000**.

**Example 2.** On revaluation, land rises by ₦50,000 and furniture falls by ₦8,000. Find the profit. *Solution:* **₦42,000**.

**Example 3.** In which ratio is a revaluation profit shared? *Answer:* The **old profit-sharing ratio**, among the **old partners**.`,
        },
        questions: [
          ["E", "The advantage a firm enjoys from its reputation and customer connections, valued as an asset, is", "goodwill", "working capital", "a provision", "a debenture", "It is an intangible asset."],
          ["E", "A new partner can be admitted into a partnership only with the consent of", "all the existing partners", "the senior partner alone", "the firm's creditors", "the firm's bankers", "The Partnership Act requires it."],
          ["E", "The account used to record changes in the values of assets when a partner is admitted is the", "revaluation account", "realisation account", "appropriation account", "suspense account", "It shows the profit or loss on revaluation."],
          ["M", "Profit or loss on the revaluation of assets is shared by", "the old partners in the old profit-sharing ratio", "all partners in the new ratio", "the new partner only", "the partners equally in all cases", "The change in value arose before the admission."],
          ["M", "Goodwill is valued at two years' purchase of an average annual profit of ₦30,000. Its value is", "₦60,000", "₦15,000", "₦30,000", "₦90,000", "2 × ₦30,000. Answer: ₦60,000."],
          ["M", "In the balance sheet, goodwill is classified as", "an intangible fixed asset", "a current asset", "a current liability", "a reserve", "It has no physical existence."],
          ["M", "Cash paid by an incoming partner for his share of the firm's goodwill is called", "a premium", "a discount", "a dividend", "a salary", "It compensates the old partners."],
          ["H", "A and B share profits 3 : 2. Goodwill of ₦50,000 is raised in the old ratio and written off in the new ratio of A : B : C = 2 : 2 : 1. The net effect on A's capital account is", "a credit of ₦10,000", "a debit of ₦10,000", "a credit of ₦30,000", "nil", "A is credited ₦30,000 and debited ₦20,000."],
          ["H", "On the admission of a partner, buildings are revalued upwards by ₦20,000 and stock downwards by ₦5,000. A and B share profits 3 : 2. A's share of the revaluation profit is", "₦9,000", "₦6,000", "₦15,000", "₦12,000", "Three-fifths of a profit of ₦15,000."],
          ["H", "A firm's profits for three years were ₦40,000, ₦50,000 and ₦60,000. Goodwill at three years' purchase of the average profit is", "₦150,000", "₦50,000", "₦450,000", "₦100,000", "The average of ₦50,000 multiplied by 3."],
        ],
      },
      {
        week: 3,
        title: "Partnership accounts: dissolution",
        subtopics: ["Causes of dissolution", "The realisation account", "Settlement of accounts", "Insolvency of a partner"],
        objectives: ["State the circumstances in which a partnership is dissolved", "Prepare a realisation account", "Close the partners' capital accounts and the bank account", "Apply the rule in Garner v Murray"],
        lesson: {
          title: "Closing Down a Partnership",
          summary: "Prepare the accounts required when a partnership is dissolved.",
          minutes: 40,
          notes: `## Dissolution
The **termination of the partnership business**: assets are sold, liabilities paid and the partners settled.

## Causes
- **expiry of the period** fixed for the partnership, or completion of the venture
- **mutual agreement** of the partners
- **death, bankruptcy or insanity** of a partner
- **notice** by a partner (in a partnership at will)
- the business becoming **illegal**
- an **order of the court** — persistent losses, misconduct, breach of the agreement, incapacity
- retirement of a partner where the others do not continue

## The realisation account
Shows the **profit or loss on the sale of the assets** and settlement of liabilities.
| Debit | Credit |
|---|---|
| **book values of the assets** to be realised (except cash and bank) | **proceeds** from the sale of assets |
| **expenses of realisation** | assets **taken over by a partner** at an agreed value |
| payments to creditors (if liabilities were transferred) | discounts received on settling creditors |
| **profit on realisation** → partners' capital accounts | **loss on realisation** ← partners' capital accounts |
The profit or loss is shared in the **profit-sharing ratio**.

### Worked example
Assets with a book value of ₦100,000 are sold for ₦85,000; realisation expenses are ₦3,000.
Loss on realisation = 100,000 + 3,000 − 85,000 = **₦18,000**.
Shared between X and Y in the ratio 2 : 1: X **₦12,000**; Y **₦6,000**.
If X's capital was ₦40,000, he receives 40,000 − 12,000 = **₦28,000**.

## Steps
1. open a **realisation account**; transfer the assets to it at book value (debit Realisation; credit the asset accounts)
2. record the **sale proceeds** (debit Bank; credit Realisation)
3. record **assets taken over** by partners (debit the partner's capital account; credit Realisation)
4. pay **realisation expenses** (debit Realisation; credit Bank)
5. pay the **creditors** (debit Creditors; credit Bank); any discount received is credited to Realisation
6. transfer the **profit or loss** to the partners' capital accounts in the profit-sharing ratio
7. transfer **current account** balances to the capital accounts
8. repay **partners' loans**
9. pay the partners the balances on their **capital accounts** — this closes the bank account

## Order of payment
The Partnership Act requires the proceeds to be applied in this order:
1. **outside creditors** (and the costs of realisation)
2. **partners' loans** and advances
3. **partners' capital**
4. any surplus shared in the profit-sharing ratio

## A partner with a debit balance
A partner whose capital account ends with a **debit** balance must **pay that amount into the firm**.

## Insolvency of a partner: the rule in Garner v Murray
If a partner with a debit balance is **insolvent** and cannot pay, the **deficiency is borne by the solvent partners in the ratio of their capitals** — taken as their last agreed capital balances **before dissolution** — and **not** in the profit-sharing ratio. (The partnership agreement may provide otherwise.)
*Example:* C is insolvent with a deficiency of ₦6,000. A and B have capitals of ₦40,000 and ₦20,000 — a ratio of 2 : 1. A bears **₦4,000** and B **₦2,000**.

## Piecemeal realisation
Where assets are sold gradually, cash is distributed as it comes in, in the same order of priority.

## Conversion or sale to a company
If the business is sold to a limited company, the **purchase consideration** (cash, shares, debentures) is credited to the realisation account, and the shares are distributed to the partners in settlement of their capital accounts.

## Dissolution and realisation distinguished
**Dissolution** is the ending of the partnership; **realisation** is the conversion of the assets into cash.`,
          examples: `**Example 1.** Assets with a book value of ₦240,000 realise ₦260,000; expenses are ₦5,000. Find the result. *Solution:* 260,000 − 240,000 − 5,000 = **profit of ₦15,000**.

**Example 2.** In what order are payments made on dissolution? *Answer:* **Outside creditors, partners' loans, then partners' capital**.

**Example 3.** State the rule in Garner v Murray. *Answer:* An insolvent partner's deficiency is borne by the solvent partners **in the ratio of their capitals**.`,
        },
        questions: [
          ["E", "The account prepared to find the profit or loss on the sale of a partnership's assets on dissolution is the", "realisation account", "revaluation account", "appropriation account", "current account", "It records book values and sale proceeds."],
          ["E", "A partnership may be dissolved on the", "death or bankruptcy of a partner", "purchase of a new asset", "payment of salaries", "opening of a bank account", "It may also end by agreement or by court order."],
          ["E", "On dissolution, the proceeds from the sale of assets are entered in the realisation account on the", "credit side", "debit side", "balance c/d line", "side of the expenses", "The book values of the assets are on the debit side."],
          ["M", "On dissolution, the first claim on the proceeds of the assets belongs to", "outside creditors", "partners' loans", "partners' capital", "partners' current accounts", "Debts to third parties are paid first."],
          ["M", "The profit or loss on realisation is shared among the partners in", "their profit-sharing ratio", "the ratio of their capitals", "the ratio of their drawings", "equal shares in all cases", "It is treated like any other profit or loss."],
          ["M", "Expenses incurred in selling the assets on dissolution are", "debited to the realisation account", "credited to the realisation account", "debited to the creditors' accounts", "ignored", "They reduce the profit on realisation."],
          ["M", "Under the rule in Garner v Murray, the deficiency of an insolvent partner is borne by the solvent partners in the ratio of their", "capitals", "profit shares", "drawings", "salaries", "The rule applies unless the agreement says otherwise."],
          ["H", "Assets with a book value of ₦100,000 are sold for ₦85,000 and realisation expenses of ₦3,000 are paid. The result is a", "loss of ₦18,000", "loss of ₦15,000", "loss of ₦12,000", "profit of ₦18,000", "100,000 + 3,000 − 85,000."],
          ["H", "X and Y share profits 2 : 1. A loss on realisation of ₦18,000 is shared so that X bears", "₦12,000", "₦6,000", "₦9,000", "₦18,000", "Two-thirds of ₦18,000."],
          ["H", "A partner's capital is ₦40,000 and his share of the loss on realisation is ₦12,000. Assuming no other adjustments, the cash due to him is", "₦28,000", "₦52,000", "₦40,000", "₦12,000", "40,000 − 12,000."],
        ],
      },
      {
        week: 4,
        title: "Departmental accounts",
        subtopics: ["Purpose of departmental accounts", "Columnar trading and profit and loss accounts", "Apportionment of expenses", "Inter-departmental transfers and uses"],
        objectives: ["Explain the purpose of departmental accounts", "Prepare departmental trading and profit and loss accounts", "Apportion common expenses on suitable bases", "Treat inter-departmental transfers and interpret departmental results"],
        lesson: {
          title: "Profit by Department",
          summary: "Prepare departmental accounts and apportion common expenses.",
          minutes: 40,
          notes: `## Departmental accounts
Accounts prepared by a business that has **several departments under one roof** — a department store, a supermarket — to show the **trading result of each department separately**.

## Purposes
- to find the **gross and net profit of each department**
- to **compare** the performance of departments
- to identify **unprofitable** departments for improvement or closure
- to reward **departmental managers** — commission on profit
- to help in **planning and control** — pricing, stock levels, space
- to check wastage and inefficiency

## Method
The **columnar** method: the trading and profit and loss account has a separate column for each department and a total column. Sales, purchases and stocks are analysed by department in the day books.

## Expenses
### Direct expenses
Those incurred wholly for one department are **allocated** to it — wages of its staff, its own advertising.
### Common (indirect) expenses
Those shared by all departments are **apportioned** on a fair basis.
| Expense | Usual basis of apportionment |
|---|---|
| **rent and rates**, lighting, heating, building insurance and repairs | **floor area** occupied |
| **advertising**, selling expenses, carriage outwards, discount allowed, bad debts | **sales (turnover)** |
| **canteen**, welfare, staff supervision | **number of employees** |
| depreciation and insurance of fixtures | **value of the assets** in each department |
| carriage inwards, discount received | **purchases** |
| power | horsepower of machines or metered units |
| general administration | sales, or equally |

### Worked examples
- rent ₦60,000; floor areas in the ratio 3 : 2: department A = ⅗ × 60,000 = **₦36,000**; B = ₦24,000
- rent ₦40,000; A occupies 300 m² and B 100 m²: A = ¾ × 40,000 = **₦30,000**; B = ₦10,000
- advertising ₦30,000; sales A ₦200,000 and B ₦100,000: A = ⅔ × 30,000 = **₦20,000**; B = ₦10,000

### Departmental result
Department A: sales ₦200,000; cost of goods sold ₦140,000; apportioned expenses ₦25,000.
Gross profit ₦60,000; **net profit ₦35,000**.

## Inter-departmental transfers
Goods passed from one department to another are **credited to the transferring department** and **debited to the receiving department**, usually **at cost**. If transfers are made at selling price, any unrealised profit on goods still in stock must be eliminated.

## Unprofitable departments
A department showing a **net loss** should not be closed without thought:
- if it still makes a positive **contribution** — gross profit less its own direct expenses — towards the common expenses, closing it would **reduce** the total profit, because the common expenses (rent, administration) would remain
- it may attract customers who also buy in other departments

## Format
| | Dept A | Dept B | Total |
|---|---|---|---|
| Sales | x | x | x |
| Less cost of goods sold | (x) | (x) | (x) |
| **Gross profit** | x | x | x |
| Less expenses (allocated and apportioned) | (x) | (x) | (x) |
| **Net profit / (loss)** | x | x | x |

## Balance sheet
Only **one** balance sheet is prepared for the whole business; departments are not separate entities.

## Advantages
better control and decision making; fair assessment of managers; accurate pricing; early detection of losses.
## Limitations
apportionment is partly **arbitrary**, so departmental net profits are approximations; extra clerical work.

## Departmental and branch accounts compared
Departments are sections **within the same premises**; branches are **at different locations**.`,
          examples: `**Example 1.** On what basis is rent normally apportioned among departments? *Answer:* **Floor area** occupied.

**Example 2.** Canteen expenses of ₦24,000 are shared between departments with 30 and 10 employees. Find each share. *Solution:* **₦18,000** and **₦6,000**.

**Example 3.** Department B has sales ₦150,000, cost of sales ₦105,000 and expenses ₦30,000. Find its net profit. *Solution:* 45,000 − 30,000 = **₦15,000**.`,
        },
        questions: [
          ["E", "Departmental accounts are prepared mainly to", "find the profit or loss of each department", "calculate the tax of the owner", "reconcile the bank balance", "record petty cash", "The performance of departments can then be compared."],
          ["E", "The usual form of departmental trading and profit and loss accounts is", "columnar", "narrative", "single-entry", "T-shaped for each customer", "Each department has its own column."],
          ["E", "The sharing of common expenses among departments on a fair basis is called", "apportionment", "depreciation", "appropriation", "amortisation", "Direct expenses are allocated instead."],
          ["M", "Rent of ₦60,000 is apportioned between departments A and B in the ratio of their floor areas, 3 : 2. Department A's share is", "₦36,000", "₦24,000", "₦30,000", "₦40,000", "Three-fifths of ₦60,000."],
          ["M", "Advertising expenses are usually apportioned among departments on the basis of", "sales", "floor area", "number of employees", "value of fixed assets", "The benefit is related to turnover."],
          ["M", "Staff canteen expenses are best apportioned on the basis of", "number of employees", "floor area", "purchases", "sales", "The cost depends on how many staff are served."],
          ["M", "Rent of ₦40,000 is to be shared between department A (300 m²) and department B (100 m²). Department A bears", "₦30,000", "₦10,000", "₦20,000", "₦13,333", "Three-quarters of the rent."],
          ["H", "Department A has sales of ₦200,000, cost of goods sold of ₦140,000 and apportioned expenses of ₦25,000. Its net profit is", "₦35,000", "₦60,000", "₦85,000", "₦25,000", "Gross profit of ₦60,000 less expenses."],
          ["H", "Advertising of ₦30,000 is apportioned on the basis of sales: department A ₦200,000 and department B ₦100,000. Department A's share is", "₦20,000", "₦10,000", "₦15,000", "₦30,000", "Two-thirds of the expense."],
          ["H", "Goods transferred from one department to another are normally recorded", "at cost, credited to the transferring department", "at selling price, credited to the receiving department", "as sales to customers", "as drawings", "The receiving department is debited."],
        ],
      },
      {
        week: 5,
        title: "Branch accounts",
        subtopics: ["Types of branch and reasons for branch accounts", "Goods sent to branch at cost", "Goods invoiced at selling price or cost plus a percentage", "Branch stock and branch debtors"],
        objectives: ["Explain the types of branch and the purpose of branch accounts", "Prepare a branch account when goods are sent at cost", "Deal with goods invoiced above cost", "Calculate branch profit and deal with branch stock and debtors"],
        lesson: {
          title: "Accounting for Branches",
          summary: "Prepare branch accounts in the head office books and calculate branch profit.",
          minutes: 40,
          notes: `## Branches
A **branch** is a section of a business operated at a location away from the **head office**.
- **dependent branches** — sell goods supplied by head office; all their accounts are kept **at head office** (the type studied here)
- **independent branches** — keep their own full set of books
- foreign branches

## Why keep branch accounts?
- to find the **profit or loss of each branch**
- to **control** stock and cash at the branch and prevent fraud
- to compare the performance of branches
- to decide which branches to expand or close

## How a dependent branch works
- goods are supplied by head office
- the branch sells for **cash** and sometimes on **credit**
- cash received is **remitted (banked) daily** to head office
- head office pays the major expenses — rent, salaries; a petty cash float covers small local expenses

## Goods sent to the branch at cost
Head office keeps a **branch account** (or a branch stock account, branch debtors account and branch expenses account).

### The branch account (debtors system)
| Debit | Credit |
|---|---|
| opening branch stock and debtors | **cash remitted** by the branch |
| **goods sent to branch** | goods returned to head office |
| expenses paid by head office | closing branch stock and debtors |
| **branch profit** → head office profit and loss | (branch loss) |

### Branch trading result
*Example:* opening stock ₦5,000; goods sent ₦60,000; closing stock ₦8,000; sales ₦76,000; branch expenses ₦9,000.
- cost of goods sold = 5,000 + 60,000 − 8,000 = **₦57,000**
- gross profit = 76,000 − 57,000 = **₦19,000**
- net profit = 19,000 − 9,000 = **₦10,000**

The **goods sent to branch account** is credited with goods sent and its balance is transferred to the head office trading account, reducing head office purchases.

## Goods invoiced above cost
To strengthen **control**, head office often invoices goods at **selling price** or at **cost plus a percentage (the loading)**. The branch manager then does not know the true cost and profit, and at any time:
**opening stock + goods received − sales (all at selling price) = stock that should be on hand**
Any difference indicates loss, theft or error.

### Finding cost and loading
- goods costing ₦40,000 invoiced at **cost plus 25%**: invoice price = 40,000 + 10,000 = **₦50,000**
- an invoice value of ₦50,000 at cost plus 25%: the loading is 25 ÷ 125 = ⅕ of the invoice = **₦10,000**
- an invoice value of ₦90,000 at cost plus 50%: cost = 90,000 × 100 ÷ 150 = **₦60,000**

### Accounting
The branch stock account is kept at **invoice price**. A **branch adjustment (mark-up) account** takes out the loading:
- the loading on **goods sent** is credited to the adjustment account
- the loading on **closing stock** is carried down as a **provision for unrealised profit** — because profit is earned only when goods are **sold**
- the balance on the adjustment account is the branch **gross profit**

In the balance sheet, branch stock is shown at **cost** — invoice price less the unrealised profit.

## Branch debtors
For credit sales, a **branch debtors account** is kept: debit with credit sales; credit with cash received, discounts allowed, returns and bad debts.

## Deficiencies and surpluses
A shortage of stock or cash at the branch is written off to the branch profit and loss account (or charged to the manager); normal wastage is allowed for.

## Remittances
Cash sent by the branch to head office: debit head office Cash/Bank; credit the Branch account.

## Goods and cash in transit
Goods sent by head office but not yet received by the branch, or cash remitted but not yet received by head office at the year end, must be adjusted for so that the accounts agree.

## Branch and departmental accounts
Branches are in **different places**; departments are within **one building**. Both aim to show separate results.`,
          examples: `**Example 1.** Goods costing ₦80,000 are invoiced to a branch at cost plus 25%. Find the invoice price. *Solution:* 80,000 + 20,000 = **₦100,000**.

**Example 2.** Branch stock at invoice price (cost plus 25%) is ₦15,000. Find its cost. *Solution:* 15,000 × 100 ÷ 125 = **₦12,000**.

**Example 3.** Why are goods often invoiced to branches at selling price? *Answer:* To give head office **control over branch stock**.`,
        },
        questions: [
          ["E", "The accounts of a dependent branch are kept at", "the head office", "the branch itself", "the bank", "the supplier's premises", "The branch only sells and remits cash."],
          ["E", "Cash sent by a branch to its head office is called", "a remittance", "a dividend", "a premium", "a loading", "It is credited to the branch account."],
          ["E", "One reason for keeping branch accounts is to", "find the profit or loss of each branch", "avoid paying tax", "replace the cash book", "calculate partners' salaries", "Branch performance can then be assessed."],
          ["M", "Goods costing ₦40,000 are invoiced to a branch at cost plus 25%. The invoice price is", "₦50,000", "₦40,000", "₦30,000", "₦65,000", "25% of ₦40,000 is added."],
          ["M", "Goods are invoiced to a branch at ₦50,000, which is cost plus 25%. The loading included in the invoice price is", "₦10,000", "₦12,500", "₦25,000", "₦5,000", "One-fifth of the invoice price."],
          ["M", "Goods are usually invoiced to branches above cost in order to", "enable head office to control branch stock", "increase the tax payable", "reduce branch sales", "pay the manager's salary", "Stock at selling price can be checked against sales."],
          ["M", "The loading included in the closing stock of a branch is treated as", "a provision for unrealised profit", "branch sales", "a remittance", "branch expenses", "Profit is earned only when the goods are sold."],
          ["H", "A branch has opening stock ₦5,000 at cost, goods received ₦60,000 at cost, closing stock ₦8,000 at cost and sales of ₦76,000. Its gross profit is", "₦19,000", "₦16,000", "₦11,000", "₦24,000", "Sales less a cost of goods sold of ₦57,000."],
          ["H", "A branch earns a gross profit of ₦19,000 and its expenses are ₦9,000. The branch net profit is", "₦10,000", "₦28,000", "₦19,000", "₦9,000", "Gross profit less expenses."],
          ["H", "Goods are invoiced to a branch at ₦90,000, being cost plus 50%. The cost of the goods is", "₦60,000", "₦45,000", "₦135,000", "₦30,000", "90,000 × 100 ÷ 150."],
        ],
      },
    ],
  },
  {
    classCode: "SS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Company accounts: formation and share capital",
        subtopics: ["Features and types of company", "Documents of formation", "Types of share capital", "Types of shares"],
        objectives: ["State the features of a limited liability company and distinguish its types", "Describe the documents required to form a company", "Distinguish the types of share capital", "Distinguish ordinary from preference shares"],
        lesson: {
          title: "The Limited Liability Company",
          summary: "Describe how companies are formed and the kinds of share capital they have.",
          minutes: 40,
          notes: `## A limited liability company
A business organisation **incorporated by law as a legal person separate from its owners (the shareholders)**. In Nigeria companies are registered with the **Corporate Affairs Commission (CAC)** under the **Companies and Allied Matters Act (CAMA)**.

### Features
- **separate legal entity** — it can own property, sue and be sued in its own name
- **limited liability** — a shareholder's loss is limited to the amount unpaid on his shares
- **perpetual succession** — it continues despite the death or withdrawal of members
- capital divided into **shares**
- owned by **shareholders**; managed by a **board of directors**
- a common seal; accounts must be **audited**

### Types
| Private company (Ltd) | Public company (Plc) |
|---|---|
| limited number of members (up to 50) | no upper limit |
| **cannot invite the public** to subscribe for its shares | may offer shares to the public by **prospectus** |
| transfer of shares restricted | shares freely transferable, usually on the stock exchange |
Also: companies limited by guarantee (non-profit bodies) and unlimited companies.

## Documents of formation
- **Memorandum of Association** — the company's **external** charter: its name, registered office, objects, the liability of members and its **share capital**
- **Articles of Association** — the **internal** rules: issue and transfer of shares, meetings, voting, appointment and powers of directors, dividends, accounts
- statement of share capital; particulars of directors and secretary; declaration of compliance
- **Certificate of Incorporation** — issued by the CAC; the company's "birth certificate"
- a public company issues a **prospectus** inviting the public to buy its shares

## Share capital
| Term | Meaning |
|---|---|
| **authorised (nominal, registered) capital** | the **maximum** the company is allowed to issue, as stated in the memorandum |
| **issued capital** | the part of the authorised capital actually **offered and allotted** to shareholders |
| **unissued capital** | authorised capital not yet issued |
| **called-up capital** | the part of the issued capital that shareholders have been **asked to pay** |
| **uncalled capital** | the part not yet called |
| **paid-up capital** | the part of the called-up capital actually **received** |
| **calls in arrears** | amounts called but **not yet paid** |
| calls in advance | amounts paid before being called |

### Worked example
A company issues **200,000 ordinary shares of ₦1 each** and has called up **75 kobo per share**.
- called-up capital = 200,000 × ₦0.75 = **₦150,000**
- if calls of ₦5,000 are in arrears, paid-up capital = 150,000 − 5,000 = **₦145,000**
- uncalled capital = 200,000 × ₦0.25 = ₦50,000

## Types of shares
### Ordinary shares (equity)
- the holders are the **real owners** and bear the greatest risk
- **voting rights**
- **dividend varies** with profit and is paid **after** preference shareholders
- they receive what is left on winding up, after all others

### Preference shares
- a **fixed rate of dividend**, paid **before** ordinary dividends
- **priority in repayment** of capital on winding up
- usually **no voting rights**
- kinds:
  - **cumulative** — unpaid dividends are carried forward as **arrears** and paid in later years
  - **non-cumulative** — a dividend missed is lost
  - **participating** — share in further profits after the fixed dividend
  - **redeemable** — may be bought back by the company

### Deferred (founders') shares
Held by the promoters; they rank last for dividend.

## Par value and market value
The **par (nominal) value** is the face value of a share; the **market value** is its price on the stock exchange.

## Company and partnership compared
| Company | Partnership |
|---|---|
| separate legal person | no separate legal personality |
| limited liability | unlimited liability (general partners) |
| owned by shareholders, run by directors | owned and run by partners |
| perpetual existence | ends on death or bankruptcy of a partner |
| profit distributed as dividends | profit shared in an agreed ratio |`,
          examples: `**Example 1.** Distinguish authorised from issued capital. *Answer:* **Authorised** capital is the **maximum** allowed; **issued** capital is the part **actually allotted**.

**Example 2.** A company has issued 500,000 shares of ₦1, with 60 kobo called. Find the called-up capital. *Solution:* **₦300,000**.

**Example 3.** What is special about cumulative preference shares? *Answer:* **Unpaid dividends are carried forward** and paid in later years.`,
        },
        questions: [
          ["E", "The owners of a limited liability company are its", "shareholders", "directors", "debenture holders", "auditors", "They provide the share capital."],
          ["E", "The document that states the name, objects and share capital of a company is the", "Memorandum of Association", "Articles of Association", "prospectus", "share certificate", "It governs the company's dealings with outsiders."],
          ["E", "The maximum amount of share capital that a company is allowed to issue is its", "authorised capital", "paid-up capital", "called-up capital", "working capital", "It is stated in the memorandum."],
          ["M", "The part of the authorised capital that has actually been allotted to shareholders is the", "issued capital", "uncalled capital", "reserve capital", "loan capital", "It may be less than the authorised capital."],
          ["M", "Shares that carry a fixed rate of dividend and are paid before ordinary shares are", "preference shares", "ordinary shares", "deferred shares", "bonus shares", "They usually carry no voting rights."],
          ["M", "A private limited company is NOT allowed to", "invite the public to subscribe for its shares", "own property", "sue in its own name", "employ workers", "Only a public company may issue a prospectus."],
          ["M", "The internal rules for the management of a company are contained in its", "Articles of Association", "Memorandum of Association", "certificate of incorporation", "prospectus", "They cover meetings, directors and dividends."],
          ["H", "A company has issued 200,000 ordinary shares of ₦1 each, on which 75 kobo per share has been called. Calls in arrears amount to ₦5,000. The paid-up capital is", "₦145,000", "₦150,000", "₦200,000", "₦195,000", "Called-up capital of ₦150,000 less arrears."],
          ["H", "Preference shares on which unpaid dividends are carried forward to future years are described as", "cumulative", "participating", "redeemable", "non-cumulative", "Arrears must be paid before any ordinary dividend."],
          ["H", "The document issued by the Corporate Affairs Commission as evidence that a company legally exists is the", "certificate of incorporation", "prospectus", "share warrant", "debenture trust deed", "It is the company's birth certificate."],
        ],
      },
      {
        week: 2,
        title: "Company accounts: issue of shares and debentures",
        subtopics: ["Procedure for the issue of shares", "Issue at par and at a premium", "Calls, forfeiture and oversubscription", "Debentures"],
        objectives: ["Describe the procedure for issuing shares", "Record the issue of shares at par and at a premium", "Explain calls in arrears, forfeiture and oversubscription", "Describe debentures and distinguish them from shares"],
        lesson: {
          title: "Raising Capital",
          summary: "Record the issue of shares and debentures and distinguish between them.",
          minutes: 40,
          notes: `## Issue of shares
### Procedure
1. the company issues a **prospectus** inviting the public to apply
2. investors send **applications** with the application money
3. the directors **allot** shares and send **letters of allotment**; unsuccessful applicants receive **letters of regret** with a refund
4. further instalments (**calls**) are requested as needed
5. **share certificates** are issued

Shares may be payable **in full on application**, or by instalments: on **application**, on **allotment**, and on one or more **calls**.

## Issue at par
Shares are issued at their **nominal value**.
*Example:* 100,000 ordinary shares of ₦1 each issued at par, payable in full:
- debit Bank ₦100,000; credit Ordinary share capital ₦100,000

## Issue at a premium
Shares are issued at a price **above** the nominal value. The excess is credited to a **share premium account**.
*Examples:*
- 100,000 shares of ₦1 each issued at **₦1.20**: share capital ₦100,000; **share premium ₦20,000**; cash ₦120,000
- 50,000 shares of ₦2 each issued at a premium of 50 kobo: cash = 50,000 × ₦2.50 = **₦125,000**; share capital ₦100,000; share premium ₦25,000
### The share premium account
It is a **capital reserve** — it **cannot be used to pay dividends**. It may be used to issue **bonus shares**, to write off preliminary (formation) expenses and the expenses or discount on an issue of shares or debentures, and to provide the premium on redemption of shares or debentures.

Shares may not normally be issued at a **discount** (below par).

## Accounts used
- **Application and allotment account** — credited with money received; debited when the shares are allotted, the amount being transferred to share capital (and share premium)
- **Call account** — debited with the amount called; credited with cash received
- **Bank**, **Share capital** and **Share premium** accounts

## Oversubscription and undersubscription
- **oversubscription** — applications exceed the shares offered. The directors may **reject** some applications and refund the money, or allot **pro rata**, applying the excess application money towards the amount due on allotment
- **undersubscription** — fewer applications than shares offered; **underwriters** may take up the balance for a commission

## Calls in arrears and forfeiture
A shareholder who fails to pay a call is in arrears. If he still does not pay after notice, the directors may **forfeit** the shares: he loses the shares and the money already paid. Forfeited shares may be **reissued**, even at a discount, provided the total received is not less than par; any surplus is transferred to share premium.

## Bonus and rights issues
- **bonus (scrip) issue** — free shares given to existing shareholders by capitalising reserves; no cash is received
- **rights issue** — new shares offered to existing shareholders, in proportion to their holdings, usually below the market price

## Debentures
A **debenture** is a document acknowledging a **long-term loan** to a company, carrying a **fixed rate of interest**.
- debenture holders are **creditors**, not owners; they have no vote
- **interest must be paid whether or not a profit is made** — it is a **charge against profit**, shown in the profit and loss account
- they are repaid before shareholders on winding up
- **secured (mortgage) debentures** have a charge on the company's assets — **fixed** (on specific assets) or **floating** (on assets generally); **naked** debentures are unsecured
- **redeemable** debentures are repayable at a fixed date; irredeemable ones only on winding up
*Example:* 10% debentures of ₦200,000 carry interest of **₦20,000** a year.
### Entry on issue
debit Bank; credit Debentures. Debentures appear in the balance sheet as **long-term liabilities**.

## Shares and debentures compared
| Shares | Debentures |
|---|---|
| part of the **capital** | a **loan** |
| holders are **owners** | holders are **creditors** |
| receive **dividends**, out of profit | receive **interest**, a charge against profit |
| dividend depends on profit | interest is fixed and compulsory |
| voting rights (ordinary shares) | no voting rights |
| repaid last on winding up | repaid before shareholders |
| not normally redeemable | usually redeemable |`,
          examples: `**Example 1.** 80,000 shares of ₦1 are issued at ₦1.50. Find the share premium. *Solution:* 80,000 × ₦0.50 = **₦40,000**.

**Example 2.** Find the annual interest on ₦500,000 of 8% debentures. *Solution:* **₦40,000**.

**Example 3.** State two differences between shares and debentures. *Answer:* Shareholders are **owners** and receive **dividends**; debenture holders are **creditors** and receive **fixed interest**.`,
        },
        questions: [
          ["E", "When shares are issued at a price above their nominal value, they are issued at", "a premium", "par", "a discount", "cost", "The excess is credited to the share premium account."],
          ["E", "A document acknowledging a long-term loan to a company at a fixed rate of interest is", "a debenture", "an ordinary share", "a share certificate", "a prospectus", "Its holders are creditors of the company."],
          ["E", "The document by which a public company invites the public to buy its shares is the", "prospectus", "memorandum", "letter of regret", "share certificate", "It gives details of the company and the offer."],
          ["M", "A company issues 100,000 ordinary shares of ₦1 each at ₦1.20 per share. The amount credited to share premium is", "₦20,000", "₦120,000", "₦100,000", "₦1,200", "20 kobo on each of 100,000 shares."],
          ["M", "The share premium account is classified as", "a capital reserve", "a revenue reserve", "a current liability", "a current asset", "It cannot be used to pay dividends."],
          ["M", "Interest paid on debentures is treated in the company's accounts as", "a charge against profit", "an appropriation of profit", "a dividend", "a capital reserve", "It must be paid whether or not profit is made."],
          ["M", "When applications for shares exceed the number of shares offered, the issue is", "oversubscribed", "undersubscribed", "forfeited", "redeemed", "Shares may then be allotted pro rata."],
          ["H", "A company issues 50,000 ordinary shares of ₦2 each at a premium of 50 kobo per share. The total cash received is", "₦125,000", "₦100,000", "₦25,000", "₦150,000", "50,000 × ₦2.50."],
          ["H", "A company has ₦200,000 of 10% debentures in issue. The annual debenture interest is", "₦20,000", "₦2,000", "₦200,000", "₦10,000", "10% of ₦200,000."],
          ["H", "When a shareholder fails to pay a call after due notice, the directors may", "forfeit the shares", "pay him a dividend", "convert the shares to debentures", "issue him bonus shares", "He loses the shares and the money already paid."],
        ],
      },
      {
        week: 3,
        title: "Company accounts: final accounts",
        subtopics: ["The profit and loss account of a company", "The appropriation account", "Reserves and provisions", "The balance sheet of a company"],
        objectives: ["Identify the items peculiar to a company's profit and loss account", "Prepare a company's appropriation account", "Distinguish reserves from provisions and capital from revenue reserves", "Prepare the balance sheet of a company"],
        lesson: {
          title: "Final Accounts of a Company",
          summary: "Prepare the profit and loss appropriation account and balance sheet of a limited company.",
          minutes: 40,
          notes: `## Company final accounts
A company prepares a trading and profit and loss account like other businesses, with some special items, followed by an **appropriation account** and a **balance sheet**. Published accounts must give a **true and fair view** and be **audited**.

## Expenses peculiar to companies
Charged in the **profit and loss account**:
- **directors' fees and salaries** (directors' remuneration)
- **auditors' fees**
- **debenture interest**
- preliminary (formation) expenses written off

## Taxation
**Company income tax** is charged on the profit:
**profit after tax = net profit before tax − taxation**
*Example:* net profit ₦500,000; tax at 30% = ₦150,000; profit after tax = **₦350,000**. Tax owing at the year end is a **current liability**.

## The appropriation account
Shows how the **profit after tax** is used.
| | ₦ | ₦ |
|---|---|---|
| Net profit for the year before tax | | x |
| Less taxation | | (x) |
| **Profit after tax** | | x |
| Add retained profit brought forward | | x |
| | | x |
| Less appropriations: | | |
| transfer to general reserve | x | |
| preference dividend | x | |
| ordinary dividend — paid (interim) and proposed (final) | x | |
| | | (x) |
| **Retained profit carried forward** | | x |

### Dividends
The share of profit paid to shareholders — a percentage of the **nominal value of the paid-up capital**, or an amount per share.
- **interim dividend** — paid during the year
- **final (proposed) dividend** — recommended by the directors and approved at the annual general meeting; shown as a **current liability**
*Example:* a dividend of 10% on ordinary share capital of ₦1,000,000 = **₦100,000**.

### Worked example
Profit after tax ₦350,000; retained profit b/f ₦60,000; transfer to general reserve ₦50,000; preference dividend ₦40,000; ordinary dividend ₦100,000.
Retained profit c/f = 350,000 + 60,000 − 50,000 − 40,000 − 100,000 = **₦220,000**.

## Reserves
Profits **retained** in the business, belonging to the ordinary shareholders.
### Revenue reserves
Created out of trading profits; **available for dividends**.
- **general reserve**
- **retained profit** (the profit and loss account balance)
### Capital reserves
Not created out of normal trading profit; **not available for cash dividends**.
- **share premium**
- **revaluation reserve** — from the upward revaluation of fixed assets
- capital redemption reserve

### Reserves and provisions
| Reserve | Provision |
|---|---|
| an **appropriation** of profit | a **charge** against profit |
| not for any known liability | for a known liability or loss of uncertain amount |
| shown under shareholders' funds | deducted from the asset or shown as a liability |

## The balance sheet
| | ₦ |
|---|---|
| **Fixed assets** — tangible (at cost less depreciation), intangible (goodwill), investments | x |
| **Current assets** — stock, debtors, prepayments, bank, cash | x |
| Less **current liabilities** — creditors, accruals, taxation, **proposed dividends**, overdraft | (x) |
| **Net current assets (working capital)** | x |
| Total assets less current liabilities | x |
| Less **long-term liabilities** — debentures, long-term loans | (x) |
| **Net assets** | x |
| **Financed by:** | |
| **Share capital** — authorised (as a note); issued and fully paid ordinary and preference shares | x |
| **Reserves** — share premium, revaluation reserve, general reserve, retained profit | x |
| **Shareholders' funds** | x |

**shareholders' funds (equity) = share capital + reserves**
*Example:* share capital ₦1,000,000; share premium ₦100,000; general reserve ₦150,000; retained profit ₦220,000: shareholders' funds = **₦1,470,000**.

## Notes
- **authorised** capital is shown for information only and is not added in
- **debentures** are long-term liabilities, not part of shareholders' funds
- **goodwill** and **preliminary expenses** are written off over time
- **fixed assets** are shown at cost, accumulated depreciation and net book value

## Published accounts
Companies must also give a directors' report, an auditors' report, notes to the accounts and (for larger companies) a cash flow statement, in line with accounting standards.`,
          examples: `**Example 1.** A company's net profit is ₦800,000 and tax is charged at 30%. Find the profit after tax. *Solution:* 800,000 − 240,000 = **₦560,000**.

**Example 2.** Find the dividend at 15% on ordinary share capital of ₦600,000. *Solution:* **₦90,000**.

**Example 3.** Classify share premium and general reserve. *Answer:* Share premium is a **capital reserve**; general reserve is a **revenue reserve**.`,
        },
        questions: [
          ["E", "The share of a company's profit paid to its shareholders is called", "a dividend", "interest", "a premium", "a salary", "It is an appropriation of profit."],
          ["E", "The account that shows how a company's profit after tax is distributed is the", "appropriation account", "trading account", "manufacturing account", "realisation account", "It includes dividends and transfers to reserves."],
          ["E", "Profits retained in a company instead of being distributed are known as", "reserves", "debentures", "calls", "provisions for depreciation", "They belong to the ordinary shareholders."],
          ["M", "A company's net profit before tax is ₦500,000 and tax is charged at 30%. The profit after tax is", "₦350,000", "₦150,000", "₦650,000", "₦470,000", "Tax of ₦150,000 is deducted."],
          ["M", "A company declares a dividend of 10% on its ordinary share capital of ₦1,000,000. The dividend is", "₦100,000", "₦10,000", "₦1,000,000", "₦110,000", "10% of the paid-up capital."],
          ["M", "The general reserve of a company is classified as", "a revenue reserve", "a capital reserve", "a current liability", "a long-term liability", "It is created out of trading profits."],
          ["M", "Shareholders' funds consist of", "share capital and reserves", "share capital and debentures", "fixed assets and current assets", "debentures and creditors", "They represent the owners' interest."],
          ["H", "Profit after tax is ₦350,000 and retained profit brought forward is ₦60,000. ₦50,000 is transferred to general reserve, and preference and ordinary dividends are ₦40,000 and ₦100,000. The retained profit carried forward is", "₦220,000", "₦160,000", "₦270,000", "₦410,000", "350,000 + 60,000 − 50,000 − 40,000 − 100,000."],
          ["H", "A company has share capital of ₦1,000,000, share premium of ₦100,000, general reserve of ₦150,000 and retained profit of ₦220,000. Its shareholders' funds are", "₦1,470,000", "₦1,000,000", "₦1,250,000", "₦470,000", "Share capital plus all the reserves."],
          ["H", "Directors' fees are shown in a company's accounts as", "an expense in the profit and loss account", "an appropriation of profit", "a capital reserve", "a deduction from share capital", "Like auditors' fees and debenture interest, they are charges against profit."],
        ],
      },
      {
        week: 4,
        title: "Joint venture accounts",
        subtopics: ["Meaning and features of a joint venture", "Recording in each venturer's books", "The memorandum joint venture account", "Settlement between the venturers"],
        objectives: ["Explain the meaning and features of a joint venture", "Record joint venture transactions in each party's books", "Prepare a memorandum joint venture account", "Calculate the profit and the amount due in settlement"],
        lesson: {
          title: "Temporary Partnerships",
          summary: "Record joint venture transactions and calculate each party's share of the profit.",
          minutes: 40,
          notes: `## Joint venture
A **temporary partnership between two or more persons (or firms) who agree to undertake a particular business transaction or project together and share the profit or loss**. When the venture is completed, the association ends.
*Examples:* buying and selling a consignment of goods; constructing a building; organising a show; underwriting an issue of shares.

## Features
- **limited to a specific venture** — it ends when the venture is completed
- **no firm name** is normally used
- the parties (**co-venturers**) contribute money, goods or skill
- profits and losses are shared in an **agreed ratio** (equally if nothing is agreed)
- each party may continue his **own separate business**
- usually **no separate set of books** — each records his own part
- the liability of the venturers is unlimited

## Joint venture and partnership compared
| Joint venture | Partnership |
|---|---|
| temporary — for one venture | continuing business |
| no firm name | has a firm name |
| no separate books as a rule | a full set of books |
| profit found at the end of the venture | profit found each year |
| parties are co-venturers | parties are partners |

## Method of recording (no separate books)
### In each venturer's own books
Each opens a **Joint venture with [the other party] account** — a personal account.
- **debit**: goods he buys and **expenses he pays** for the venture; his **share of the profit**
- **credit**: **sales proceeds he receives**; (his share of a loss)
The balance shows what he **owes to or is owed by** the co-venturer.

### Memorandum joint venture account
A combined statement — like a trading and profit and loss account for the venture — prepared to find the **profit**. It is **not part of the double entry** in either party's books.
- **debit**: all purchases and expenses, by whoever paid
- **credit**: all sales, by whoever received; unsold stock taken over by a venturer
- the balance is the profit or loss, **shared in the agreed ratio**

## Worked example
A and B undertake a joint venture, sharing profits **equally**.
- A buys goods for ₦60,000 and pays expenses of ₦5,000
- B pays expenses of ₦3,000 and sells all the goods for ₦90,000

### Memorandum joint venture account
| | ₦ | | ₦ |
|---|---|---|---|
| Purchases (A) | 60,000 | Sales (B) | 90,000 |
| Expenses (A) | 5,000 | | |
| Expenses (B) | 3,000 | | |
| Profit: A ½ | 11,000 | | |
| Profit: B ½ | 11,000 | | |
| | 90,000 | | 90,000 |
**Profit = 90,000 − 68,000 = ₦22,000**; each takes **₦11,000**.

### In A's books: Joint venture with B
Debit: purchases 60,000; expenses 5,000; share of profit 11,000 = ₦76,000. Credit: nothing received. Balance: **₦76,000 due from B**.

### In B's books: Joint venture with A
Debit: expenses 3,000; share of profit 11,000 = ₦14,000. Credit: sales 90,000. Balance: ₦76,000 **owed to A**.

### Settlement
**B pays A ₦76,000**, closing both accounts. (Check: A spent ₦65,000 and is entitled to ₦11,000 profit.)

## Unsold stock
If goods remain at the end, a venturer may **take them over** at an agreed value: credited to the memorandum account, and debited (as purchases) in that venturer's own books.

## Commission
A venturer who sells may be allowed a **commission** on sales, treated as an expense of the venture before the profit is shared.

## Separate books method
For large ventures a separate set of books may be opened: a **joint bank account**, a **joint venture account** and personal accounts for the venturers.

## Interest
Interest may be allowed on capital contributed, if agreed.`,
          examples: `**Example 1.** Define a joint venture. *Answer:* A **temporary partnership** for a **specific business venture**.

**Example 2.** In a joint venture, purchases were ₦140,000, total expenses ₦16,000 and sales ₦200,000. Find the profit. *Solution:* **₦44,000**.

**Example 3.** Is the memorandum joint venture account part of the double entry? *Answer:* **No** — it is prepared only to find the profit.`,
        },
        questions: [
          ["E", "A temporary partnership formed to carry out a particular business transaction is", "a joint venture", "a limited company", "a co-operative society", "a sole proprietorship", "It ends when the venture is completed."],
          ["E", "The parties to a joint venture are called", "co-venturers", "shareholders", "consignors", "debenture holders", "Each contributes money, goods or skill."],
          ["E", "The combined account prepared to find the profit or loss on a joint venture is the", "memorandum joint venture account", "realisation account", "appropriation account", "control account", "It is not part of the double entry."],
          ["M", "Profits and losses of a joint venture are shared", "in the agreed ratio", "according to age", "in the ratio of sales made", "only by the party who sold the goods", "They are shared equally if nothing is agreed."],
          ["M", "A feature that distinguishes a joint venture from an ordinary partnership is that a joint venture", "is limited to a specific venture", "has a firm name", "continues indefinitely", "must be registered as a company", "It is temporary."],
          ["M", "In his own books, each venturer records his transactions in a", "joint venture with the co-venturer account", "sales ledger control account", "share capital account", "branch stock account", "It is a personal account."],
          ["M", "The memorandum joint venture account is", "not part of the double-entry system", "kept only by the bank", "the same as a balance sheet", "a book of original entry", "It combines the records of both parties."],
          ["H", "A buys goods for ₦60,000 and pays expenses of ₦5,000; B pays expenses of ₦3,000 and sells all the goods for ₦90,000. The profit on the joint venture is", "₦22,000", "₦30,000", "₦25,000", "₦27,000", "90,000 − 68,000."],
          ["H", "A buys goods for ₦60,000 and pays expenses of ₦5,000; B pays expenses of ₦3,000 and receives the sales of ₦90,000. Profit is shared equally. In settlement, B pays A", "₦76,000", "₦65,000", "₦79,000", "₦11,000", "A's outlay of ₦65,000 plus his profit share of ₦11,000."],
          ["H", "Unsold goods taken over by one venturer at the end of a joint venture are", "credited to the memorandum joint venture account at the agreed value", "ignored in the accounts", "debited to the memorandum account as an expense", "treated as a loss", "They are treated like a sale to that venturer."],
        ],
      },
      {
        week: 5,
        title: "Information technology in accounting",
        subtopics: ["Manual and computerised accounting systems", "Hardware and software for accounting", "Advantages and disadvantages of computerised accounting", "Data security and control"],
        objectives: ["Compare manual and computerised accounting systems", "Identify the hardware and software used in accounting", "State the advantages and disadvantages of computerised accounting", "Explain the measures for protecting accounting data"],
        lesson: {
          title: "Computers in Accounting",
          summary: "Explain how computers are used in accounting and how accounting data are protected.",
          minutes: 40,
          notes: `## Data processing
The **conversion of raw data into useful information**.
- **data** — unprocessed facts and figures: invoices, receipts, hours worked
- **information** — data that have been processed into a meaningful form: a debtors' list, a payroll, final accounts
### The data-processing cycle
**input → processing → output**, with **storage** and feedback.

## Methods of data processing
- **manual** — pen, paper and calculator
- **mechanical** — accounting machines
- **electronic** — computers

## Manual and computerised systems compared
| Manual | Computerised |
|---|---|
| slow | very fast |
| prone to arithmetical errors | accurate if data are entered correctly |
| ledgers posted separately | one entry updates all related records automatically |
| reports take long to prepare | reports produced instantly |
| bulky paper storage | compact electronic storage |
| cheap to set up | costly to set up |

## Hardware
The **physical parts** of a computer system.
- **input devices** — keyboard, mouse, scanner, barcode reader, point-of-sale terminal, card reader
- **central processing unit (CPU)** — the "brain": control unit, arithmetic and logic unit, memory
- **output devices** — monitor, printer
- **storage devices** — hard disk, flash drive, optical disc, cloud storage
- communication equipment — modems, routers, networks

## Software
The **programs** that instruct the computer.
- **system software** — the operating system
- **application software**:
  - **accounting packages** — Sage, QuickBooks, Peachtree, Tally and others, with modules for the sales ledger, purchases ledger, general ledger, stock control, payroll and fixed assets
  - **spreadsheets** — Microsoft Excel: budgets, schedules, analysis and "what if" calculations
  - **database** programs; word processors for reports
  - enterprise resource planning (ERP) systems

## Processing methods
- **batch processing** — transactions are collected and processed together at intervals (monthly payroll)
- **real-time (on-line) processing** — each transaction is processed immediately (automated teller machines, point-of-sale systems)

## Uses of computers in accounting
recording transactions and posting ledgers; invoicing; **payroll**; **stock control**; debtors' and creditors' ledgers and statements; bank reconciliation; preparing the trial balance and final accounts; budgeting and forecasting; tax computation; electronic banking and payments.

## Advantages of computerised accounting
- **speed**
- **accuracy** in calculation
- handles **large volumes** of data
- **automatic** posting and up-to-date balances
- instant **reports** for management
- compact **storage** and easy retrieval
- less clerical labour in the long run
- consistency; legible output

## Disadvantages
- high **cost** of hardware, software and maintenance
- need for **trained staff**
- dependence on **electricity**
- risk of **breakdown**, **viruses** and loss of data
- danger of **computer fraud** and unauthorised access
- **garbage in, garbage out (GIGO)** — wrong input gives wrong output
- possible loss of jobs; health strain from long use

## Data security and control
- **passwords** and user identification; different access levels for different staff
- regular **backup** of files, kept in a separate place
- **anti-virus** software and firewalls
- **audit trail** — a record of who entered or changed each item
- physical security — locked rooms, fire protection
- uninterruptible power supply (UPS)
- **validation checks** on data entered
- segregation of duties; regular internal audit

## Coding of accounts
In computerised systems each account is given a **code number**, arranged in a **chart of accounts** — for example 1000–1999 assets, 2000–2999 liabilities.`,
          examples: `**Example 1.** Give two examples of accounting software. *Answer:* **Sage** and **QuickBooks** (also Peachtree; spreadsheets such as Excel).

**Example 2.** State three advantages of computerised accounting. *Answer:* **Speed, accuracy and instant reports**.

**Example 3.** What does GIGO mean? *Answer:* **Garbage in, garbage out** — wrong input produces wrong output.`,
        },
        questions: [
          ["E", "The physical components of a computer system are called", "hardware", "software", "data", "programs", "The keyboard, monitor and printer are examples."],
          ["E", "Which of the following is an input device?", "keyboard", "printer", "monitor", "speaker", "It is used to enter data into the computer."],
          ["E", "A spreadsheet program such as Microsoft Excel is an example of", "application software", "hardware", "an input device", "an operating system only", "It is used for budgets and schedules."],
          ["M", "An advantage of a computerised accounting system is", "speed and accuracy in processing", "low cost of installation", "independence from electricity", "no need for trained staff", "Reports are produced quickly."],
          ["M", "Sage and QuickBooks are examples of", "accounting packages", "input devices", "storage devices", "anti-virus programs", "They have ledger, payroll and stock modules."],
          ["M", "The correct sequence in the data-processing cycle is", "input, processing, output", "output, input, processing", "processing, output, input", "storage, output, input", "Data are entered, processed and then reported."],
          ["M", "Keeping copies of accounting files in a separate place as a safeguard against loss is called", "backup", "coding", "debugging", "posting", "The data can be restored after a breakdown."],
          ["H", "Processing in which transactions are collected and processed together at intervals is", "batch processing", "real-time processing", "manual processing", "on-line banking", "A monthly payroll is an example."],
          ["H", "Unauthorised access to computerised accounting records is prevented mainly by the use of", "passwords", "larger monitors", "faster printers", "more paper files", "Each user is given a level of access."],
          ["H", "The expression 'garbage in, garbage out' means that", "incorrect input data produce incorrect output", "computers never make reports", "old computers should be thrown away", "output is always correct", "The computer cannot correct wrong data by itself."],
        ],
      },
    ],
  },
];
