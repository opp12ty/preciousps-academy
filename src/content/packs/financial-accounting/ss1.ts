import type { TermPlan } from "../types";

/** SS1 Financial Accounting — original Precious PS content following the national senior secondary curriculum. */
export const ss1: TermPlan[] = [
  {
    classCode: "SS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Introduction to bookkeeping and accounting",
        subtopics: ["Meaning and history of bookkeeping and accounting", "Objectives and users of accounting information", "Branches of accounting", "Accounting concepts and conventions"],
        objectives: ["Define bookkeeping and accounting and outline their history", "State the objectives of accounting and identify the users of accounting information", "Describe the branches of accounting", "Explain the basic accounting concepts and conventions"],
        lesson: {
          title: "What Accounting Is",
          summary: "Explain the purpose, users, branches and basic concepts of accounting.",
          minutes: 40,
          notes: `## Bookkeeping and accounting
- **Bookkeeping** is the **systematic recording of business transactions** in the books of account, in money terms.
- **Accounting** is the process of **recording, classifying, summarising, analysing and interpreting** financial information and **communicating** the results to those who need them.
Bookkeeping is the recording stage; accounting goes further, to reporting and interpretation.

## History
Record keeping is as old as trade — clay tablets in Babylon, tally sticks, knotted cords. The **double-entry system** was first set out in print in **1494** by the Italian monk **Luca Pacioli**, the "father of accounting", in his book *Summa de Arithmetica*. The industrial revolution, the growth of companies and taxation increased the need for accountants. In Nigeria, the **Institute of Chartered Accountants of Nigeria (ICAN)** was established in **1965** and the Association of National Accountants of Nigeria (ANAN) was chartered in 1993.

## Objectives of accounting
- to keep a **permanent record** of transactions
- to ascertain the **profit or loss** of a period
- to show the **financial position** (assets and liabilities) at a date
- to provide information for **decision making** and planning
- to **control** assets and prevent fraud
- to provide a basis for **taxation**
- to meet legal requirements

## Users of accounting information
| User | Interest |
|---|---|
| **owners / shareholders** | profit and the safety of their investment |
| **management** | planning, control and decision making |
| **creditors and suppliers** | ability of the business to pay |
| **banks and lenders** | security and ability to repay loans |
| **government (tax authorities)** | assessing tax; economic planning |
| **employees and trade unions** | job security; wage bargaining |
| **investors and financial analysts** | whether to buy or sell shares |
| **customers; the public** | continuity of supply; social responsibility |

## Branches of accounting
- **financial accounting** — recording transactions and preparing final accounts for external users
- **cost accounting** — finding the cost of products and services
- **management accounting** — information for internal planning and control
- **auditing** — the **independent examination** of accounts to report whether they show a true and fair view
- **taxation**
- **public sector (government) accounting**
- forensic accounting; financial management

## Accounting concepts and conventions
The rules that guide the preparation of accounts.
- **business entity** — the business is **separate from its owner**; private affairs are kept out of its books
- **going concern** — the business is assumed to continue in operation for the foreseeable future
- **money measurement** — only transactions measurable in money are recorded
- **historical cost** — assets are recorded at what they cost
- **dual aspect (duality)** — every transaction has two effects: the basis of double entry
- **accruals (matching)** — income and expenses are recognised in the period to which they **relate**, not when cash moves
- **realisation** — revenue is recognised when a sale is made, not when cash is received
- **periodicity** — the life of a business is divided into accounting periods, usually a year
- **consistency** — the same methods are used from year to year
- **prudence (conservatism)** — anticipate no profit; provide for all likely losses
- **materiality** — insignificant items need not be treated strictly
- **objectivity** — records are based on verifiable evidence

## Qualities of good accounting information
relevance; reliability; comparability; understandability; timeliness.

## The accounting cycle
source documents → books of original entry → ledger → trial balance → adjustments → final accounts.`,
          examples: `**Example 1.** Distinguish bookkeeping from accounting. *Answer:* **Bookkeeping** records transactions; **accounting** also **summarises, interprets and reports** them.

**Example 2.** Why are banks interested in a firm's accounts? *Answer:* To judge its **ability to repay loans**.

**Example 3.** Which concept requires a trader's private expenses to be kept out of the business books? *Answer:* The **business entity** concept.`,
        },
        questions: [
          ["E", "The systematic recording of business transactions in the books of account is", "bookkeeping", "auditing", "budgeting", "costing", "It is the recording stage of accounting."],
          ["E", "The person regarded as the father of accounting is", "Luca Pacioli", "Adam Smith", "Isaac Newton", "Henry Fayol", "He published the double-entry system in 1494."],
          ["E", "The users of accounting information most concerned with assessing tax are", "government tax authorities", "customers", "employees", "suppliers", "Tax is based on reported profit."],
          ["M", "Accounting differs from bookkeeping because accounting also involves", "interpreting and communicating financial information", "writing invoices", "counting cash only", "issuing receipts", "Bookkeeping stops at recording."],
          ["M", "The independent examination of the accounts of a business is known as", "auditing", "cost accounting", "bookkeeping", "budgeting", "The auditor reports whether the accounts give a true and fair view."],
          ["M", "The branch of accounting concerned with finding the cost of products and services is", "cost accounting", "financial accounting", "auditing", "taxation", "It helps in pricing and cost control."],
          ["M", "Banks and other lenders examine a firm's accounts mainly to assess its", "ability to repay loans", "number of employees", "advertising methods", "choice of suppliers", "They want assurance that their money is safe."],
          ["H", "The concept that treats a business as separate and distinct from its owner is the", "business entity concept", "going concern concept", "consistency concept", "materiality concept", "The owner's private affairs are excluded."],
          ["H", "The assumption that a business will continue to operate for the foreseeable future is the", "going concern concept", "prudence concept", "realisation concept", "money measurement concept", "Assets are therefore not valued at break-up prices."],
          ["H", "Recognising expenses in the period to which they relate, whether or not cash has been paid, applies the", "accruals concept", "historical cost concept", "entity concept", "duality concept", "It is also called the matching concept."],
        ],
      },
      {
        week: 2,
        title: "The accounting equation and double entry",
        subtopics: ["Assets, liabilities and capital", "The accounting equation", "Effects of transactions on the equation", "The principle of double entry"],
        objectives: ["Define assets, liabilities and capital", "State and apply the accounting equation", "Show the effects of transactions on the equation", "State the rules of double entry"],
        lesson: {
          title: "Assets = Capital + Liabilities",
          summary: "Apply the accounting equation and the rules of double entry.",
          minutes: 40,
          notes: `## Key terms
- **assets** — resources **owned** by the business: premises, machinery, motor vehicles, stock, debtors, cash
  - **fixed (non-current) assets** — held for long-term use, not for resale
  - **current assets** — cash and items that will become cash within a year: stock, debtors, bank, cash
- **liabilities** — amounts **owed** by the business to outsiders: creditors, loans, overdrafts
- **capital** — the amount **invested by the owner**; what the business owes its owner

## The accounting equation
**Assets = Capital + Liabilities**
so **Capital = Assets − Liabilities**.
The two sides are always equal, because every asset must be financed either by the owner or by outsiders.
*Examples:*
- assets ₦50,000; liabilities ₦20,000: capital = **₦30,000**
- capital ₦80,000; liabilities ₦25,000: assets = **₦105,000**

## Effects of transactions
Every transaction changes at least two items, but the equation still balances.
| Transaction | Effect |
|---|---|
| owner starts business with ₦100,000 cash | cash +100,000; capital +100,000 |
| buys a van for ₦40,000 cash | van +40,000; cash −40,000 |
| buys goods on credit ₦15,000 | stock +15,000; creditors +15,000 |
| pays a creditor ₦5,000 | cash −5,000; creditors −5,000 |
| owner withdraws ₦2,000 cash | cash −2,000; capital −2,000 |
After the first three transactions: cash ₦60,000 + van ₦40,000 + stock ₦15,000 = **₦115,000** assets; capital ₦100,000 + creditors ₦15,000 = ₦115,000.

## Capital, profit and drawings
- **profit** increases capital; a **loss** reduces it
- **drawings** — cash or goods taken by the owner for private use — reduce capital
**closing capital = opening capital + profit − drawings (+ additional capital)**
*Example:* opening capital ₦50,000; profit ₦12,000; drawings ₦5,000: closing capital = **₦57,000**.

## Double entry
Every transaction has a **two-fold effect**: one account **receives** value and another **gives** value.
**For every debit entry there must be a corresponding credit entry of equal amount.**
- **debit (Dr)** — the left-hand side of an account; the account that receives
- **credit (Cr)** — the right-hand side; the account that gives

### Rules
| Type of account | Debit | Credit |
|---|---|---|
| **assets** | increase | decrease |
| **expenses** and drawings | increase | decrease |
| **liabilities** | decrease | increase |
| **capital** | decrease | increase |
| **income (revenue)** | decrease | increase |

### Examples
| Transaction | Debit | Credit |
|---|---|---|
| started business with cash | Cash | Capital |
| bought goods for cash | Purchases | Cash |
| bought goods on credit from Bola | Purchases | Bola (creditor) |
| sold goods for cash | Cash | Sales |
| sold goods on credit to Chidi | Chidi (debtor) | Sales |
| paid rent by cheque | Rent | Bank |
| bought furniture by cheque | Furniture | Bank |
| owner took cash for private use | Drawings | Cash |
| received cash from Chidi | Cash | Chidi |

## Advantages of double entry
- a complete record of every transaction
- arithmetical accuracy can be checked by a **trial balance**
- profit or loss and the financial position can be found
- errors and fraud are more easily detected
- amounts owed to and by the business are known at any time`,
          examples: `**Example 1.** A business has assets of ₦240,000 and liabilities of ₦90,000. Find the capital. *Solution:* 240,000 − 90,000 = **₦150,000**.

**Example 2.** State the double entry for goods bought on credit from Musa. *Answer:* **Debit Purchases; credit Musa**.

**Example 3.** Opening capital ₦70,000; profit ₦18,000; drawings ₦6,000. Find the closing capital. *Solution:* **₦82,000**.`,
        },
        questions: [
          ["E", "The accounting equation is", "Assets = Capital + Liabilities", "Assets = Capital − Liabilities", "Capital = Assets + Liabilities", "Liabilities = Assets + Capital", "Assets are financed by the owner and by outsiders."],
          ["E", "Resources owned by a business are called", "assets", "liabilities", "drawings", "expenses", "Premises, stock and cash are examples."],
          ["E", "Amounts owed by a business to outsiders are", "liabilities", "assets", "capital", "revenue", "Creditors and loans are examples."],
          ["M", "A business has assets of ₦50,000 and liabilities of ₦20,000. Its capital is", "₦30,000", "₦70,000", "₦20,000", "₦50,000", "Capital = assets − liabilities."],
          ["M", "A business has capital of ₦80,000 and liabilities of ₦25,000. Its total assets are", "₦105,000", "₦55,000", "₦80,000", "₦25,000", "Assets = capital + liabilities."],
          ["M", "The principle that every debit entry must have a corresponding credit entry is", "double entry", "single entry", "the imprest system", "the going concern concept", "Each transaction affects two accounts."],
          ["M", "When goods are bought and paid for by cheque, the effect is that", "stock increases and bank decreases", "stock decreases and bank increases", "creditors increase and stock increases", "capital increases and bank increases", "One asset is exchanged for another."],
          ["H", "A trader starts business with ₦100,000 cash, buys a van for ₦40,000 cash and buys goods on credit for ₦15,000. Total assets are now", "₦115,000", "₦100,000", "₦155,000", "₦75,000", "Cash ₦60,000, van ₦40,000 and stock ₦15,000."],
          ["H", "When the owner withdraws cash from the business for private use, the effect is to", "reduce assets and reduce capital", "increase assets and increase capital", "reduce liabilities and reduce assets", "increase liabilities and reduce capital", "Withdrawals by the owner are drawings."],
          ["H", "A trader's opening capital was ₦50,000. Profit for the year was ₦12,000 and drawings were ₦5,000. The closing capital is", "₦57,000", "₦67,000", "₦43,000", "₦62,000", "50,000 + 12,000 − 5,000."],
        ],
      },
      {
        week: 3,
        title: "Source documents and subsidiary books",
        subtopics: ["Source documents", "The sales and purchases day books", "The returns books", "The general journal"],
        objectives: ["Identify the source documents and their uses", "Record credit sales and purchases in the day books", "Record returns in the returns books", "Explain the uses of the general journal"],
        lesson: {
          title: "Books of Original Entry",
          summary: "Identify source documents and record transactions in the subsidiary books.",
          minutes: 40,
          notes: `## Source documents
Written evidence of transactions, from which the books are written up.
| Document | Use |
|---|---|
| **invoice** | sent by the **seller to the buyer** for goods sold on credit, showing quantity, price, trade discount and amount due. It is a **sales invoice** to the seller and a **purchase invoice** to the buyer |
| **credit note** | sent by the **seller** to the buyer when goods are **returned**, or when there was an overcharge — it reduces the amount owed (often printed in red) |
| **debit note** | sent by the **buyer** to the seller when returning goods, or by the seller to correct an **undercharge** |
| **receipt** | evidence that cash has been received |
| **cheque counterfoil / stub** | record of a cheque issued |
| **paying-in slip (teller)** | record of money paid into the bank |
| **payment voucher** | authority for and record of a payment |
| **bank statement** | the bank's record of the customer's account |
| **cash register tally roll** | record of cash sales |

## Discounts
- **trade discount** — an allowance off the **list price** given by a manufacturer or wholesaler to a trader, for buying in bulk or to allow a profit margin. It is **deducted on the invoice** and **not recorded in the ledger**
- **cash discount** — an allowance for **prompt payment**; it **is** recorded — discount allowed (an expense) and discount received (an income)
*Example:* 20 items at ₦500 each less 10% trade discount: ₦10,000 − ₦1,000 = **₦9,000** — the amount entered in the books.

## Subsidiary books (books of original or prime entry)
The books in which transactions are **first recorded** before being posted to the ledger.
| Book | Records | Source document |
|---|---|---|
| **sales day book (sales journal)** | **credit sales** of goods | copies of sales invoices |
| **purchases day book (purchases journal)** | **credit purchases** of goods for resale | purchase invoices |
| **returns inwards book (sales returns)** | goods returned **by customers** | copies of credit notes issued |
| **returns outwards book (purchases returns)** | goods returned **to suppliers** | credit notes received (or debit notes issued) |
| **cash book** | all cash and bank receipts and payments | receipts, cheque stubs, tellers |
| **petty cash book** | small cash payments | petty cash vouchers |
| **general journal (journal proper)** | transactions that fit none of the others | various |

### Posting
- **sales day book**: each customer's (debtor's) account is **debited**; the **total** is **credited** to the **sales account**
- **purchases day book**: each supplier's (creditor's) account is **credited**; the **total** is **debited** to the **purchases account**
- **returns inwards book**: each customer is **credited**; the total is **debited** to the returns inwards account
- **returns outwards book**: each supplier is **debited**; the total is **credited** to the returns outwards account
Cash sales and cash purchases go through the **cash book**, not the day books.

## The general journal
Layout: date; particulars (the account to be debited first, then the account to be credited, slightly indented); folio; debit and credit columns; and a **narration** — a brief explanation of the entry.
### Uses
- **opening entries** — assets, liabilities and capital at the start of a business or period
- **purchase and sale of fixed assets on credit**
- **correction of errors**
- **transfers** between accounts
- **closing entries** at the year end
- adjustments — depreciation, bad debts written off, provisions
*Example:* bought office furniture on credit from Ade Stores for ₦60,000: debit Furniture ₦60,000; credit Ade Stores ₦60,000 — "being furniture bought on credit".

## Advantages of subsidiary books
they reduce the number of entries in the ledger; work can be divided among staff; transactions of the same kind are grouped; they provide a chronological record and a reference for errors.`,
          examples: `**Example 1.** Which document does a seller issue when a customer returns goods? *Answer:* A **credit note**.

**Example 2.** 50 shirts at ₦2,000 each are sold less 20% trade discount. What amount is entered in the sales day book? *Solution:* 100,000 − 20,000 = **₦80,000**.

**Example 3.** In which book is the credit purchase of a motor van recorded? *Answer:* The **general journal**.`,
        },
        questions: [
          ["E", "The document sent by a seller to a buyer giving details of goods sold on credit is", "an invoice", "a receipt", "a credit note", "a cheque", "It shows the quantity, price and amount due."],
          ["E", "Credit sales of goods are first recorded in the", "sales day book", "purchases day book", "cash book", "general journal", "It is also called the sales journal."],
          ["E", "Goods returned by customers are recorded in the", "returns inwards book", "returns outwards book", "purchases day book", "petty cash book", "It is also known as the sales returns book."],
          ["M", "A credit note is issued by a seller when", "goods are returned by the customer", "goods are sold for cash", "the customer is undercharged", "payment is received", "It reduces the amount owed by the customer."],
          ["M", "The purchase of a fixed asset on credit is first recorded in the", "general journal", "purchases day book", "sales day book", "returns outwards book", "The purchases day book is for goods bought for resale."],
          ["M", "An allowance deducted from the list price on an invoice and not recorded in the ledger is", "trade discount", "cash discount", "discount received", "discount allowed", "Only the net amount is entered in the books."],
          ["M", "The source document for entries in the purchases day book is the", "purchase invoice", "sales invoice", "receipt", "cheque stub", "It is received from the supplier."],
          ["H", "A trader buys 20 items at ₦500 each less 10% trade discount. The amount entered in the purchases day book is", "₦9,000", "₦10,000", "₦1,000", "₦11,000", "₦10,000 less ₦1,000 trade discount."],
          ["H", "The total of the purchases day book is posted to the", "debit side of the purchases account", "credit side of the purchases account", "debit side of the sales account", "credit side of the cash book", "Individual suppliers' accounts are credited."],
          ["H", "The brief explanation written below each entry in the general journal is called the", "narration", "folio", "particulars", "voucher", "It usually begins with the word 'being'."],
        ],
      },
      {
        week: 4,
        title: "The ledger",
        subtopics: ["Meaning and divisions of the ledger", "Classification of accounts", "Posting to the ledger", "Balancing accounts"],
        objectives: ["Explain the ledger and its divisions", "Classify accounts as personal, real or nominal", "Post transactions to ledger accounts", "Balance ledger accounts and interpret the balances"],
        lesson: {
          title: "The Principal Book of Accounts",
          summary: "Post transactions to the ledger, classify accounts and balance them.",
          minutes: 40,
          notes: `## The ledger
The **principal book of accounts**, in which all transactions are finally recorded under separate **accounts**. An **account** is a record of the transactions relating to one person, asset, liability, expense or income.

### The T-account
| Debit (Dr) side | Credit (Cr) side |
|---|---|
| date, particulars, folio, amount | date, particulars, folio, amount |
The particulars column names the **other account** involved in the double entry.

## Divisions of the ledger
- **sales ledger (debtors' ledger)** — accounts of **credit customers**
- **purchases ledger (creditors' or bought ledger)** — accounts of **credit suppliers**
- **general (nominal) ledger** — assets, liabilities, capital, expenses and income
- **private ledger** — confidential accounts: capital, drawings, loans
- the **cash book** is both a book of original entry and a ledger for cash and bank

## Classification of accounts
### Personal accounts
Accounts of **persons, firms and companies** — debtors, creditors, the bank as a lender, and the owner's capital and drawings.
### Impersonal accounts
- **real accounts** — accounts of **assets (property)**: premises, machinery, furniture, motor vehicles, stock, cash
- **nominal accounts** — accounts of **expenses, losses, income and gains**: rent, wages, discounts, commission, sales, purchases, interest

### The traditional rules
| Class | Debit | Credit |
|---|---|---|
| personal | the **receiver** | the **giver** |
| real | what **comes in** | what **goes out** |
| nominal | **expenses and losses** | **income and gains** |

## Posting
Transferring entries from the books of original entry to the ledger.
*Example:*
| Date | Transaction |
|---|---|
| 1 May | started business with ₦200,000 cash |
| 3 May | bought goods for cash ₦50,000 |
| 5 May | sold goods for cash ₦5,000 |
| 8 May | paid rent ₦10,000 cash |
- 1 May: debit Cash; credit Capital
- 3 May: debit Purchases; credit Cash
- 5 May: debit Cash; credit Sales
- 8 May: debit Rent; credit Cash
Goods are never entered in a "goods account": **purchases, sales, returns inwards and returns outwards** each have their own account.

## Balancing an account
1. add up both sides
2. find the difference
3. enter the difference on the **smaller** side as **balance carried down (c/d)**
4. write the equal totals on both sides
5. bring the balance down on the **opposite** side as **balance brought down (b/d)** at the start of the next period
*Example:* an account has debit entries totalling ₦8,500 and credit entries totalling ₦6,200. The balance c/d of ₦2,300 goes on the credit side and is brought down on the debit side — a **debit balance** of ₦2,300.

### Meaning of balances
- a **debit balance** on a personal account — the person **owes** the business (a **debtor**)
- a **credit balance** on a personal account — the business owes the person (a **creditor**)
- asset and expense accounts normally have **debit** balances
- liability, capital and income accounts normally have **credit** balances

## Folio columns
They give cross-references — the page or code of the other book — so that entries can be traced.

## The running-balance format
Computerised ledgers show debit, credit and balance columns, updating the balance after each entry.`,
          examples: `**Example 1.** Classify the wages account and the motor vehicle account. *Answer:* Wages is a **nominal** account; motor vehicle is a **real** account.

**Example 2.** State the double entry for cash sales of ₦12,000. *Answer:* **Debit Cash ₦12,000; credit Sales ₦12,000**.

**Example 3.** Okon's account in a trader's books shows a debit balance of ₦4,000. What does this mean? *Answer:* Okon **owes** the trader ₦4,000 — he is a **debtor**.`,
        },
        questions: [
          ["E", "The principal book of accounts in which transactions are finally recorded is the", "ledger", "journal", "invoice", "voucher", "It contains all the accounts."],
          ["E", "The left-hand side of a ledger account is the", "debit side", "credit side", "folio side", "balance side", "The right-hand side is the credit side."],
          ["E", "Accounts of persons and firms with whom a business deals are", "personal accounts", "real accounts", "nominal accounts", "impersonal accounts", "Debtors' and creditors' accounts are examples."],
          ["M", "Accounts of expenses, losses, income and gains are classified as", "nominal accounts", "real accounts", "personal accounts", "private accounts", "Rent, wages and sales are examples."],
          ["M", "The machinery account is an example of a", "real account", "nominal account", "personal account", "suspense account", "It records an asset."],
          ["M", "The accounts of credit customers are kept in the", "sales ledger", "purchases ledger", "general ledger", "private ledger", "It is also called the debtors' ledger."],
          ["M", "The balance of an account entered at the end of a period on the smaller side is the", "balance carried down", "balance brought down", "opening balance", "folio", "It is brought down on the opposite side for the next period."],
          ["H", "An account has debit entries totalling ₦8,500 and credit entries totalling ₦6,200. The account shows a", "debit balance of ₦2,300", "credit balance of ₦2,300", "debit balance of ₦14,700", "credit balance of ₦6,200", "The debit side is larger by ₦2,300."],
          ["H", "The double entry for cash sales of ₦5,000 is", "debit Cash, credit Sales", "debit Sales, credit Cash", "debit Purchases, credit Cash", "debit Cash, credit Purchases", "Cash comes in and sales is the income."],
          ["H", "A credit balance on a supplier's personal account means that the", "business owes the supplier", "supplier owes the business", "account is closed", "supplier has been overpaid", "The supplier is a creditor."],
        ],
      },
      {
        week: 5,
        title: "The trial balance",
        subtopics: ["Meaning and purpose of the trial balance", "Preparing a trial balance", "Errors not revealed by the trial balance", "Errors that affect the trial balance"],
        objectives: ["Explain the meaning and purposes of the trial balance", "Prepare a trial balance from ledger balances", "Describe the errors that the trial balance does not reveal", "Identify errors that cause the trial balance to disagree"],
        lesson: {
          title: "Testing the Books",
          summary: "Prepare a trial balance and explain the errors it does and does not reveal.",
          minutes: 40,
          notes: `## The trial balance
A **list of the debit and credit balances extracted from the ledger (including the cash book) at a given date**, drawn up to test the **arithmetical accuracy** of the double entry.
It is **not an account** and not part of the double-entry system; it is a statement.

## Purposes
- to check the **arithmetical accuracy** of the postings
- to provide the figures for preparing the **final accounts**
- to help in locating errors
- to give a summary of the ledger

## Which side?
| Debit balances | Credit balances |
|---|---|
| **assets** — premises, machinery, stock, debtors, cash, bank | **liabilities** — creditors, loans, bank overdraft |
| **expenses** — rent, wages, carriage, discount allowed | **income** — sales, discount received, commission received, rent received |
| **purchases**; returns inwards | returns outwards |
| **drawings** | **capital** |
| | provisions |

## Example
| Account | Dr (₦) | Cr (₦) |
|---|---|---|
| Capital | | 200,000 |
| Cash | 85,000 | |
| Purchases | 90,000 | |
| Sales | | 60,000 |
| Rent | 10,000 | |
| Furniture | 75,000 | |
| **Total** | **260,000** | **260,000** |

## If the trial balance agrees
It is good, but **not conclusive**, evidence of accuracy, because some errors do not affect the totals.

## Errors NOT revealed by the trial balance
1. **error of omission** — a transaction is **completely left out** of the books
2. **error of commission** — an entry is posted to the **wrong account of the same class**: goods sold to A. Bello debited to B. Bello's account
3. **error of principle** — an entry is posted to the **wrong class of account**: the purchase of a motor van debited to the motor expenses account (capital expenditure treated as revenue)
4. **error of original entry** — the **wrong amount** is entered in the book of original entry and posted on both sides: an invoice for ₦540 entered as ₦450
5. **compensating errors** — two or more errors that **cancel one another out**: sales overcast by ₦1,000 and wages overcast by ₦1,000
6. **complete reversal of entries** — the correct accounts and amount are used, but the debit and credit are **interchanged**

## Errors that DO affect the trial balance
- **casting (addition) errors** — a book or account overcast or undercast
- **posting to the wrong side** of an account (single entry reversed)
- **omitting one side** of the double entry
- posting **different amounts** on the two sides
- **transposition** of figures on one side only
- an **error in extracting** a balance, or omitting a balance from the trial balance
- entering a balance on the wrong side of the trial balance

## Locating errors
1. re-add the trial balance
2. check that every ledger balance has been included, on the correct side
3. look for an item equal to the difference, or to **half** the difference (an item on the wrong side)
4. if the difference is **divisible by 9**, suspect a transposition (540 written as 450)
5. re-add the ledger accounts and subsidiary books
6. check the postings from the subsidiary books

## The suspense account
If the error cannot be found at once, the difference is placed in a **suspense account** on the lighter side, so that the trial balance agrees, until the errors are traced and corrected.
*Example:* debit total ₦45,000; credit total ₦43,800: the difference of ₦1,200 is entered on the **credit** side as a suspense balance.

## Limitations
agreement does not prove that every transaction was recorded, or recorded in the right account, or at the right amount.`,
          examples: `**Example 1.** On which side of the trial balance do sales and drawings appear? *Answer:* Sales on the **credit** side; drawings on the **debit** side.

**Example 2.** A payment for repairs is debited to the machinery account. What type of error is this? *Answer:* An **error of principle**.

**Example 3.** A trial balance shows debits of ₦98,400 and credits of ₦99,000. What is done with the difference? *Answer:* **₦600 is entered on the debit side** as a suspense account balance.`,
        },
        questions: [
          ["E", "A list of debit and credit balances extracted from the ledger at a given date is a", "trial balance", "balance sheet", "bank statement", "journal", "It tests the arithmetical accuracy of the books."],
          ["E", "The main purpose of a trial balance is to", "check the arithmetical accuracy of the ledger", "show the profit of the business", "record credit sales", "calculate depreciation", "The debit and credit totals should agree."],
          ["E", "In a trial balance, assets and expenses appear on the", "debit side", "credit side", "side chosen by the bookkeeper", "last page only", "They normally have debit balances."],
          ["M", "Which of the following appears on the credit side of a trial balance?", "capital", "drawings", "purchases", "rent paid", "Capital is what the business owes its owner."],
          ["M", "A transaction that is completely left out of the books is an error of", "omission", "commission", "principle", "original entry", "Neither side is recorded, so the totals still agree."],
          ["M", "Two errors of equal amount that cancel each other out are", "compensating errors", "errors of principle", "errors of omission", "casting errors", "The trial balance still agrees."],
          ["M", "The trial balance is best described as", "a statement, not part of the double-entry system", "a ledger account", "a book of original entry", "a source document", "It merely lists the balances."],
          ["H", "The purchase of a motor van debited to the motor expenses account is an error of", "principle", "commission", "omission", "original entry", "A capital item has been treated as an expense."],
          ["H", "Goods sold to A. Bello are debited to the account of B. Bello. This is an error of", "commission", "principle", "omission", "complete reversal", "The wrong account of the same class was used."],
          ["H", "A trial balance shows a debit total of ₦45,000 and a credit total of ₦43,800. The difference is placed in a suspense account as a", "credit balance of ₦1,200", "debit balance of ₦1,200", "credit balance of ₦88,800", "debit balance of ₦43,800", "The lighter side is made up to agree."],
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
        title: "The cash book",
        subtopics: ["The single-column cash book", "The two-column cash book and contra entries", "The three-column cash book and cash discounts", "Posting from the cash book"],
        objectives: ["Prepare a single-column cash book", "Prepare a two-column cash book with contra entries", "Prepare a three-column cash book with discount columns", "Post the cash book to the ledger"],
        lesson: {
          title: "Recording Cash and Bank Transactions",
          summary: "Write up and balance single-, two- and three-column cash books.",
          minutes: 40,
          notes: `## The cash book
The book in which **all receipts and payments of cash and cheques** are recorded. It is both a **book of original entry** and a **ledger account** (the cash and bank accounts combined).
- **receipts** are entered on the **debit** side
- **payments** are entered on the **credit** side

## Single-column cash book
One amount column on each side — for cash only (or bank only). It can never have a credit balance, since one cannot pay out more cash than one has.
*Example:* opening cash ₦2,000; receipts ₦15,000; payments ₦11,500: closing balance = 2,000 + 15,000 − 11,500 = **₦5,500**.

## Two-column cash book
**Cash and bank** columns on each side.
### Contra entries
A transaction that affects **both the cash and bank columns** — both sides of the double entry are in the cash book. It is marked with a **"C"** in the folio column.
- **cash paid into the bank**: debit **bank** column; credit **cash** column
- **cash withdrawn from the bank for office use**: debit **cash** column; credit **bank** column

### Balances
- the **cash** column always has a **debit** balance (or nil)
- the **bank** column may have a **debit** balance (money in the bank) or a **credit** balance — a **bank overdraft**

## Cash discount
An allowance given for **prompt payment**.
- **discount allowed** — given **by** the business **to its debtors**; an **expense**
- **discount received** — given **to** the business **by its creditors**; an **income**
*Examples:*
- a debtor owing ₦10,000 pays within the period less 5% cash discount: cash received ₦9,500; discount allowed ₦500
- a creditor owed ₦40,000 is paid less 2½% cash discount: discount received ₦1,000; cheque paid ₦39,000

## Three-column cash book
**Discount, cash and bank** columns on each side.
- **discount allowed** is entered in the discount column on the **debit** side, beside the receipt
- **discount received** is entered in the discount column on the **credit** side, beside the payment
The discount columns are **memorandum columns** — they are **totalled, not balanced**, and are not part of the double entry.

## Posting
- each **receipt** on the debit side is posted to the **credit** of the relevant ledger account (the customer's account, sales, capital)
- each **payment** on the credit side is posted to the **debit** of the relevant account (the supplier's account, rent, wages)
- the **total of the discount allowed column** is posted to the **debit** of the **discount allowed account**; the individual amounts are credited to the debtors' accounts
- the **total of the discount received column** is posted to the **credit** of the **discount received account**; the individual amounts are debited to the creditors' accounts
- contra entries need no further posting

## Cheques
A written order to a bank to pay a stated sum. Parties: the **drawer** (who writes it), the **drawee** (the bank) and the **payee**.
- a **crossed cheque** must be paid into a bank account
- a **dishonoured cheque** is one the bank refuses to pay — for lack of funds, an irregular signature, or a stale or post-dated cheque. In the cash book it is entered on the **credit** side of the bank column, and the debtor's account is debited again

## Advantages of the cash book
the cash and bank position is known at any time; it reduces entries in the ledger; it helps control cash and detect theft.`,
          examples: `**Example 1.** State the entry when ₦20,000 cash is paid into the bank. *Answer:* **Debit the bank column; credit the cash column** — a contra entry.

**Example 2.** A customer owing ₦8,000 pays less 2½% cash discount. How much is received? *Solution:* 8,000 − 200 = **₦7,800**.

**Example 3.** What does a credit balance in the bank column represent? *Answer:* A **bank overdraft**.`,
        },
        questions: [
          ["E", "The book in which all receipts and payments of cash and cheques are recorded is the", "cash book", "sales day book", "purchases ledger", "general journal", "It is both a book of original entry and a ledger."],
          ["E", "In a three-column cash book, discount allowed is recorded on the", "debit side", "credit side", "last page", "contra side", "It is entered beside the receipt from the debtor."],
          ["E", "An entry that appears on both sides of the cash book, such as cash paid into the bank, is a", "contra entry", "compensating error", "closing entry", "suspense entry", "It is marked 'C' in the folio column."],
          ["M", "An allowance given to a debtor to encourage prompt payment is", "cash discount", "trade discount", "commission", "interest", "It is recorded in the discount column."],
          ["M", "A debtor who owes ₦10,000 pays promptly and is allowed 5% cash discount. The amount received is", "₦9,500", "₦10,500", "₦9,000", "₦500", "₦10,000 less ₦500 discount."],
          ["M", "A credit balance in the bank column of the cash book represents", "a bank overdraft", "cash in hand", "money in the bank", "discount received", "More has been drawn than was deposited."],
          ["M", "The three columns on each side of a three-column cash book are for", "discount, cash and bank", "sales, purchases and cash", "debit, credit and balance", "cash, cheques and stock", "The discount columns are memorandum columns."],
          ["H", "A cash account has an opening balance of ₦2,000, receipts of ₦15,000 and payments of ₦11,500. The closing balance is", "₦5,500", "₦28,500", "₦3,500", "₦1,500", "2,000 + 15,000 − 11,500."],
          ["H", "The total of the discount allowed column of the cash book is posted to the", "debit side of the discount allowed account", "credit side of the discount allowed account", "debit side of the sales account", "credit side of the debtors' accounts as a total", "Discount allowed is an expense."],
          ["H", "A creditor owed ₦40,000 is paid by cheque less 2½% cash discount. The amount of the cheque is", "₦39,000", "₦38,000", "₦41,000", "₦1,000", "The discount received is ₦1,000."],
        ],
      },
      {
        week: 2,
        title: "The petty cash book and the imprest system",
        subtopics: ["Purpose of the petty cash book", "The imprest system", "Analytical petty cash book", "Posting and advantages"],
        objectives: ["Explain the purpose of the petty cash book", "Explain the imprest system and calculate reimbursements", "Write up an analytical petty cash book", "Post the petty cash book and state its advantages"],
        lesson: {
          title: "Small Cash Payments",
          summary: "Record small payments in an analytical petty cash book under the imprest system.",
          minutes: 40,
          notes: `## The petty cash book
A subsidiary of the main cash book used to record **small, frequent cash payments** — postage, stationery, transport fares, cleaning, refreshments. It is kept by a **petty cashier**, who receives money from the main (chief) cashier.

## The imprest system
The petty cashier is given a **fixed sum** — the **imprest or float** — at the beginning of a period, estimated to cover that period's small expenses. At the end of the period the chief cashier **reimburses exactly the amount spent**, so that the float is **restored to its original figure**.
**amount reimbursed = amount spent**
**imprest = cash in hand + vouchers for amounts spent**
*Examples:*
- imprest ₦5,000; spent ₦3,650: balance in hand ₦1,350; reimbursement **₦3,650**
- imprest ₦10,000; postage ₦1,200, stationery ₦2,300, transport ₦1,850: total spent ₦5,350; balance **₦4,650**

## Petty cash vouchers
Each payment is supported by a **voucher** showing the date, the amount, the purpose and the signatures of the recipient and of an authorising officer. Vouchers are numbered and filed as evidence.

## The analytical petty cash book
| Receipts | Date | Details | Voucher no. | Total | Postage | Stationery | Travelling | Sundries | Ledger |
|---|---|---|---|---|---|---|---|---|---|
- the **receipts** column (debit side) shows money received from the chief cashier
- each payment is entered in the **total** column and again in the appropriate **analysis column**
- the **ledger column** is for payments to named ledger accounts (for example a small payment to a creditor)
- at the end of the period, the analysis columns are totalled; their sum must equal the total column
- the book is balanced, the balance carried down, and the reimbursement entered

### Example
Imprest ₦5,000 received on 1 June. Payments: postage ₦400; stationery ₦750; bus fares ₦600; postage ₦300; cleaning ₦500.
Total spent = ₦2,550 (postage ₦700; stationery ₦750; travelling ₦600; sundries ₦500). Balance c/d = ₦2,450. Reimbursement on 1 July = **₦2,550**, restoring the float to ₦5,000.

## Posting to the ledger
- the money given to the petty cashier is **credited in the main cash book** and debited in the petty cash book
- the **totals of the analysis columns** are posted to the **debit** of the respective **expense accounts** in the general ledger (postage, stationery, travelling)
- items in the ledger column are debited to the individual accounts named

## Advantages of the imprest system
- the **chief cashier is relieved** of many small payments
- the **main cash book** is not crowded with trivial items
- it provides a **check on petty expenditure** — cash in hand plus vouchers must always equal the float
- it reduces the opportunity for **fraud**, since the petty cashier holds a limited sum
- it trains junior staff in handling money
- analysis columns save time in posting — only totals are posted
- expenses can be controlled by fixing the size of the float

## Petty cash and the main cash book compared
| Petty cash book | Main cash book |
|---|---|
| small payments in cash | all larger receipts and payments |
| kept by a junior officer | kept by the chief cashier |
| has analysis columns | has discount, cash and bank columns |
| receives its funds from the main cash book | receives from customers and other sources |

## Control
surprise checks of the cash and vouchers; authorisation of every voucher; a limit on any single payment.`,
          examples: `**Example 1.** A petty cashier with an imprest of ₦8,000 spent ₦5,400 in the month. How much is reimbursed? *Solution:* **₦5,400**.

**Example 2.** What is the purpose of the analysis columns? *Answer:* To **classify payments by type**, so that only the totals are posted to the ledger.

**Example 3.** The float is ₦6,000 and the petty cashier holds vouchers for ₦4,250. How much cash should be in hand? *Solution:* 6,000 − 4,250 = **₦1,750**.`,
        },
        questions: [
          ["E", "The petty cash book is used to record", "small cash payments", "credit sales", "credit purchases", "the purchase of fixed assets", "Postage and fares are typical items."],
          ["E", "The fixed sum of money given to the petty cashier at the start of a period is called the", "imprest", "overdraft", "capital", "discount", "It is also called the float."],
          ["E", "The officer who keeps the petty cash book is the", "petty cashier", "auditor", "storekeeper", "sales manager", "He receives money from the chief cashier."],
          ["M", "A petty cashier has an imprest of ₦5,000 and spends ₦3,650 during the month. The amount needed to restore the imprest is", "₦3,650", "₦1,350", "₦5,000", "₦8,650", "The amount reimbursed equals the amount spent."],
          ["M", "A petty cashier with an imprest of ₦5,000 has spent ₦3,650. The cash in hand is", "₦1,350", "₦3,650", "₦8,650", "₦5,000", "5,000 − 3,650. Answer: ₦1,350."],
          ["M", "The analysis columns in a petty cash book are used to", "classify payments by type of expense", "record receipts from customers", "calculate discounts", "record credit sales", "Only the column totals are posted to the ledger."],
          ["M", "Each payment out of petty cash is supported by a", "petty cash voucher", "sales invoice", "bank statement", "credit note", "It is signed by the recipient and an authorising officer."],
          ["H", "A petty cashier starts with an imprest of ₦10,000 and pays postage ₦1,200, stationery ₦2,300 and transport ₦1,850. The balance of cash in hand is", "₦4,650", "₦5,350", "₦6,500", "₦3,650", "Total spent is ₦5,350."],
          ["H", "The totals of the analysis columns of the petty cash book are posted to the", "debit side of the respective expense accounts", "credit side of the respective expense accounts", "debit side of the main cash book", "credit side of the sales account", "They represent expenses incurred."],
          ["H", "A major advantage of the imprest system is that it", "provides a regular check on petty cash expenditure", "eliminates the need for vouchers", "allows unlimited petty spending", "replaces the main cash book", "Cash in hand plus vouchers must equal the float."],
        ],
      },
      {
        week: 3,
        title: "Bank reconciliation statements",
        subtopics: ["The bank statement and the cash book", "Causes of disagreement", "Updating the cash book", "Preparing the reconciliation statement"],
        objectives: ["Explain the relationship between the cash book and the bank statement", "State the causes of disagreement between them", "Prepare an adjusted cash book", "Prepare a bank reconciliation statement"],
        lesson: {
          title: "Agreeing the Cash Book with the Bank",
          summary: "Explain why the cash book and bank statement differ and reconcile them.",
          minutes: 40,
          notes: `## The bank statement
A copy of the customer's account **in the books of the bank**, sent to the customer periodically. Because the bank **owes** the customer the money deposited, the customer's account has a **credit balance** in the bank's books.
| Cash book (bank column) | Bank statement |
|---|---|
| deposits on the **debit** side | deposits on the **credit** side |
| payments on the **credit** side | payments on the **debit** side |
| debit balance = money in the bank | credit balance = money in the bank |
| credit balance = overdraft | debit balance = overdraft |

## Bank reconciliation statement
A statement prepared to **explain the difference** between the bank balance shown in the **cash book** and the balance shown on the **bank statement** at the same date.

## Causes of disagreement
### Items in the cash book but not yet on the bank statement
- **unpresented cheques** — cheques issued by the business that the payees have **not yet presented** to the bank for payment
- **uncredited lodgements (deposits)** — money paid into the bank but **not yet credited** by the bank

### Items on the bank statement but not yet in the cash book
- **bank charges**, commission and interest on overdraft
- **standing orders** — payments made by the bank on the customer's instruction (insurance premiums, subscriptions)
- **direct debits**
- **direct credits (credit transfers)** — amounts paid straight into the account by customers; dividends and interest received
- **dishonoured cheques** — cheques paid in but returned unpaid

### Errors
by the business in the cash book, or by the bank.

## Procedure
### Step 1: update the cash book
Enter in the cash book the items found only on the statement.
- **debit**: direct credits, interest and dividends received
- **credit**: bank charges, standing orders, direct debits, dishonoured cheques
This gives the **adjusted (corrected) cash book balance** — the figure that appears in the balance sheet.
*Example:* cash book balance ₦8,000; bank charges ₦200; direct credit from a customer ₦1,500: adjusted balance = 8,000 − 200 + 1,500 = **₦9,300**.

### Step 2: prepare the statement
**Starting from the (adjusted) cash book balance:**
| | ₦ |
|---|---|
| balance as per cash book | x |
| **add** unpresented cheques | x |
| **less** uncredited lodgements | (x) |
| balance as per bank statement | x |
*Example:* cash book balance ₦12,000; unpresented cheques ₦3,000; uncredited lodgements ₦2,000: bank statement balance = 12,000 + 3,000 − 2,000 = **₦13,000**.

**Starting from the bank statement balance:**
| | ₦ |
|---|---|
| balance as per bank statement | x |
| **less** unpresented cheques | (x) |
| **add** uncredited lodgements | x |
| balance as per cash book | x |
*Example:* statement balance ₦20,000; unpresented cheques ₦4,500; uncredited lodgements ₦2,500: cash book balance = 20,000 − 4,500 + 2,500 = **₦18,000**.

### Overdrafts
With an overdrawn balance the signs are reversed: starting from an overdraft as per cash book, **deduct** unpresented cheques and **add** uncredited lodgements to reach the overdraft as per bank statement.

## Importance
- reveals **errors** in the cash book or by the bank
- detects **fraud and theft**
- brings the cash book **up to date**
- shows the **true bank balance**
- identifies **delays** in clearing cheques and stale cheques
- provides a check on the work of the cashier`,
          examples: `**Example 1.** What are unpresented cheques? *Answer:* Cheques **issued by the business but not yet presented** to the bank for payment.

**Example 2.** The cash book shows ₦25,000. Unpresented cheques are ₦6,000 and uncredited lodgements ₦4,000. Find the bank statement balance. *Solution:* 25,000 + 6,000 − 4,000 = **₦27,000**.

**Example 3.** A cash book balance of ₦14,000 is to be adjusted for bank charges of ₦350 and a standing order of ₦1,000. Find the adjusted balance. *Solution:* **₦12,650**.`,
        },
        questions: [
          ["E", "A copy of a customer's account in the books of the bank is the", "bank statement", "cash book", "paying-in slip", "cheque book", "It is sent to the customer periodically."],
          ["E", "A bank reconciliation statement is prepared to", "explain the difference between the cash book and bank statement balances", "record credit sales", "calculate profit", "pay creditors", "The two balances seldom agree on a given date."],
          ["E", "Cheques issued by a business but not yet presented to the bank for payment are", "unpresented cheques", "dishonoured cheques", "uncredited lodgements", "standing orders", "They are in the cash book but not on the statement."],
          ["M", "Bank charges shown on the bank statement but not yet in the cash book should be", "credited in the cash book", "debited in the cash book", "added to unpresented cheques", "ignored", "They reduce the bank balance."],
          ["M", "Money paid into the bank but not yet shown on the bank statement is described as", "uncredited lodgements", "unpresented cheques", "direct credits", "bank charges", "The bank has not yet recorded the deposit."],
          ["M", "A cheque paid in by a business but returned unpaid by the bank is", "a dishonoured cheque", "an unpresented cheque", "a standing order", "a direct credit", "It must be credited in the cash book."],
          ["M", "A regular payment made by the bank on the instruction of its customer is a", "standing order", "direct credit", "lodgement", "dishonoured cheque", "Insurance premiums are often paid this way."],
          ["H", "The cash book shows a debit balance of ₦12,000. Unpresented cheques total ₦3,000 and uncredited lodgements ₦2,000. The balance as per bank statement is", "₦13,000", "₦11,000", "₦17,000", "₦7,000", "12,000 + 3,000 − 2,000."],
          ["H", "A cash book balance of ₦8,000 is to be adjusted for bank charges of ₦200 and a direct credit of ₦1,500. The adjusted cash book balance is", "₦9,300", "₦6,300", "₦9,700", "₦7,800", "8,000 − 200 + 1,500."],
          ["H", "The bank statement shows a credit balance of ₦20,000. Unpresented cheques total ₦4,500 and uncredited lodgements ₦2,500. The cash book balance is", "₦18,000", "₦22,000", "₦27,000", "₦13,000", "20,000 − 4,500 + 2,500."],
        ],
      },
      {
        week: 4,
        title: "Correction of errors and the suspense account",
        subtopics: ["Correcting errors that do not affect the trial balance", "The suspense account", "Correcting errors that affect the trial balance", "Effect of errors on profit"],
        objectives: ["Correct errors that do not affect the trial balance by journal entries", "Explain the use of the suspense account", "Correct errors that affect the trial balance", "Determine the effect of errors on reported profit"],
        lesson: {
          title: "Putting Errors Right",
          summary: "Correct accounting errors through the journal and the suspense account.",
          minutes: 40,
          notes: `## Correcting errors
Errors are **not erased**; they are corrected by **journal entries**, each with a narration, and then posted to the ledger.

## Errors that do not affect the trial balance
### Omission
A credit sale of ₦5,000 to Ada was not recorded at all.
*Correction:* debit Ada ₦5,000; credit Sales ₦5,000.
### Commission
₦3,000 received from A. Bello was credited to B. Bello.
*Correction:* debit B. Bello ₦3,000; credit A. Bello ₦3,000.
### Principle
Equipment bought for ₦30,000 was debited to the purchases account.
*Correction:* debit Equipment ₦30,000; credit Purchases ₦30,000.
### Original entry
A purchase invoice for ₦540 from Kola was entered as ₦450.
*Correction:* debit Purchases ₦90; credit Kola ₦90.
### Complete reversal
₦2,000 cash paid to Musa was debited to Cash and credited to Musa.
*Correction:* debit Musa ₦4,000; credit Cash ₦4,000 — **double** the amount, once to cancel the error and once to record the correct entry.
### Compensating errors
Sales and wages were each overcast by ₦1,000.
*Correction:* debit Sales ₦1,000; credit Wages ₦1,000.

## The suspense account
A **temporary account** opened with the **difference in the trial balance**, on the lighter side, so that the totals agree. As each error affecting the trial balance is found, it is corrected through the suspense account, which is closed when all the errors have been traced.
If the balance remains at the year end, it appears in the balance sheet — a debit balance among the assets, a credit balance among the liabilities.

## Errors that affect the trial balance
These involve **one side only**, so one half of the correcting entry is made in the **suspense account**.
| Error | Correction |
|---|---|
| sales day book **undercast** by ₦1,000 | debit Suspense; credit Sales ₦1,000 |
| purchases account **overcast** by ₦700 | debit Suspense; credit Purchases ₦700 |
| discount allowed ₦600 in the cash book **not posted** to the ledger | debit Discount allowed; credit Suspense ₦600 |
| rent paid ₦4,000 posted to the rent account as ₦400 | debit Rent ₦3,600; credit Suspense ₦3,600 |
| ₦2,500 received from Chika debited to her account | debit Suspense ₦5,000; credit Chika ₦5,000 |

### Example
A trial balance had a shortage of ₦600 on the debit side, so a **debit** balance of ₦600 was opened in suspense. It was then found that discount allowed ₦600 had not been posted.
Suspense account: debit — difference in trial balance ₦600; credit — discount allowed ₦600. The account is closed.

## Transposition
Figures written in the wrong order — 540 as 450. The difference (90) is always **divisible by 9**.

## Effect of errors on profit
Only errors involving **nominal accounts** (income and expenses), purchases, sales or stock affect profit.
| Error | Effect on profit |
|---|---|
| sales undercast | understated |
| purchases overcast or an expense overstated | understated |
| an expense omitted or understated | overstated |
| a fixed asset debited to purchases or to an expense | understated |
| an expense debited to a fixed asset account | overstated |
| closing stock overvalued | overstated |

### Statement of corrected profit
*Example:* reported net profit ₦20,000. Sales were undercast by ₦1,000 and rent of ₦500 was omitted.
Corrected profit = 20,000 + 1,000 − 500 = **₦20,500**.
*Example:* equipment costing ₦30,000 was debited to purchases: profit was **understated by ₦30,000** (ignoring depreciation).

## Errors of commission between personal accounts
They do not change profit, but they give wrong balances for individual debtors or creditors.`,
          examples: `**Example 1.** Give the journal entry to correct a van costing ₦500,000 debited to motor expenses. *Answer:* **Debit Motor van ₦500,000; credit Motor expenses ₦500,000**.

**Example 2.** The sales account was overcast by ₦2,000. State the correction. *Answer:* **Debit Sales ₦2,000; credit Suspense ₦2,000**.

**Example 3.** Reported profit is ₦64,000, but wages of ₦4,000 were omitted and discount received of ₦1,500 was not credited. Find the correct profit. *Solution:* 64,000 − 4,000 + 1,500 = **₦61,500**.`,
        },
        questions: [
          ["E", "A temporary account opened to hold the difference in a trial balance is the", "suspense account", "capital account", "control account", "drawings account", "It is closed when the errors are found."],
          ["E", "Errors in the books of account are corrected through the", "general journal", "sales day book", "petty cash book", "bank statement", "Each correction carries a narration."],
          ["E", "Which of these errors will not be revealed by a trial balance?", "an error of omission", "an error of addition in one account", "posting one side only", "entering a balance on the wrong side", "Both sides are left out, so the totals still agree."],
          ["M", "An invoice for ₦540 entered in the purchases day book as ₦450 is an error of", "original entry", "principle", "omission", "commission", "The wrong figure was used from the start on both sides."],
          ["M", "Debiting the account that should have been credited and crediting the account that should have been debited is", "a complete reversal of entries", "an error of principle", "a compensating error", "an error of omission", "The correction requires double the amount."],
          ["M", "The sales day book was undercast by ₦1,000. The correcting entry is", "debit Suspense, credit Sales", "debit Sales, credit Suspense", "debit Sales, credit Debtors", "debit Debtors, credit Suspense", "Sales must be increased by a credit."],
          ["M", "An error in which 540 is written as 450 produces a difference that is divisible by", "9", "7", "4", "11", "This is a sign of a transposition of figures."],
          ["H", "A net profit of ₦20,000 was reported. It was later found that sales had been undercast by ₦1,000 and rent of ₦500 omitted. The corrected net profit is", "₦20,500", "₦21,500", "₦19,500", "₦18,500", "Add ₦1,000 and deduct ₦500."],
          ["H", "Equipment costing ₦30,000 was debited to the purchases account. The effect on the net profit is that it is", "understated by ₦30,000", "overstated by ₦30,000", "unaffected", "overstated by ₦60,000", "Purchases, and so cost of sales, are too high."],
          ["H", "A trial balance is short by ₦600 on the debit side. Discount allowed of ₦600 is found not to have been posted to the ledger. The correcting entry is", "debit Discount allowed, credit Suspense", "debit Suspense, credit Discount allowed", "debit Discount allowed, credit Debtors", "debit Cash, credit Suspense", "The missing debit is made and the suspense balance cleared."],
        ],
      },
      {
        week: 5,
        title: "Final accounts: the trading and profit and loss account",
        subtopics: ["The trading account and gross profit", "Cost of goods sold", "The profit and loss account and net profit", "Mark-up and margin"],
        objectives: ["Prepare a trading account and calculate gross profit", "Calculate the cost of goods sold", "Prepare a profit and loss account and calculate net profit", "Explain mark-up and margin"],
        lesson: {
          title: "Measuring Profit",
          summary: "Prepare the trading and profit and loss account of a sole trader.",
          minutes: 40,
          notes: `## Final accounts
The statements prepared at the end of an accounting period: the **trading account**, the **profit and loss account** and the **balance sheet**. The first two are part of the double entry; balances of the nominal accounts are transferred to them by **closing entries**.

## The trading account
Shows the **gross profit** — the profit on buying and selling, before expenses.
**gross profit = net sales − cost of goods sold**

### Net sales (turnover)
sales − returns inwards.

### Cost of goods sold (cost of sales)
| | ₦ |
|---|---|
| opening stock | x |
| add purchases | x |
| less returns outwards | (x) |
| add carriage inwards | x |
| **cost of goods available for sale** | x |
| less closing stock | (x) |
| **cost of goods sold** | x |
- **carriage inwards** — the cost of bringing purchases to the business; it is part of the cost of the goods and goes in the **trading account**
- wages of warehouse staff, customs duty and other costs of getting goods ready for sale are also included
- **closing stock** is valued at the lower of cost and net realisable value; it becomes next year's opening stock

### Example
Sales ₦80,000; returns inwards ₦2,000; opening stock ₦10,000; purchases ₦50,000; returns outwards ₦1,000; carriage inwards ₦1,500; closing stock ₦12,000.
- net sales = 80,000 − 2,000 = ₦78,000
- cost of goods sold = 10,000 + (50,000 − 1,000) + 1,500 − 12,000 = ₦48,500
- **gross profit = 78,000 − 48,500 = ₦29,500**

A simpler case: opening stock ₦5,000; purchases ₦30,000; closing stock ₦7,000: cost of goods sold = **₦28,000**. With sales of ₦50,000, gross profit = **₦22,000**.

If the cost of sales exceeds sales, the result is a **gross loss**.

## The profit and loss account
Shows the **net profit** — the true profit after all expenses.
**net profit = gross profit + other income − expenses**
### Other income (credit side)
discount received; rent received; commission received; interest received.
### Expenses (debit side)
- **administrative**: salaries, rent and rates, insurance, stationery, lighting, telephone
- **selling and distribution**: **carriage outwards**, advertising, salesmen's commission, bad debts, discount allowed
- **financial**: bank charges, interest on loans
- **depreciation**
**Carriage outwards** — the cost of delivering goods to customers — is a selling expense and goes in the **profit and loss account**.

### Example
Gross profit ₦29,500; discount received ₦500; expenses ₦12,000: **net profit = ₦18,000**.
If expenses exceed gross profit plus other income, there is a **net loss**.
The net profit is **added to capital**; a net loss is deducted.

## Vertical presentation
| | ₦ | ₦ |
|---|---|---|
| Sales | | x |
| Less cost of sales | | (x) |
| **Gross profit** | | x |
| Add other income | | x |
| Less expenses | | (x) |
| **Net profit** | | x |

## Mark-up and margin
- **mark-up** = gross profit as a percentage of **cost** of sales
- **margin** = gross profit as a percentage of **sales**
*Example:* goods costing ₦40,000 are sold at a mark-up of 25%: gross profit ₦10,000; sales ₦50,000; margin = 10,000 ÷ 50,000 = **20%**.
A mark-up of ¼ equals a margin of ⅕; a mark-up of ⅓ equals a margin of ¼.

## Items that do NOT appear in these accounts
drawings; purchase of fixed assets; loans received or repaid; capital introduced.`,
          examples: `**Example 1.** Opening stock ₦8,000; purchases ₦42,000; closing stock ₦10,000. Find the cost of goods sold. *Solution:* 8,000 + 42,000 − 10,000 = **₦40,000**.

**Example 2.** Where do carriage inwards and carriage outwards appear? *Answer:* **Carriage inwards** in the **trading account**; **carriage outwards** in the **profit and loss account**.

**Example 3.** Gross profit ₦60,000; rent received ₦5,000; expenses ₦38,000. Find the net profit. *Solution:* 60,000 + 5,000 − 38,000 = **₦27,000**.`,
        },
        questions: [
          ["E", "Gross profit is the difference between net sales and", "cost of goods sold", "total expenses", "closing stock", "capital", "It is found in the trading account."],
          ["E", "The account prepared to find the gross profit of a business is the", "trading account", "profit and loss account", "balance sheet", "cash account", "It deals with buying and selling."],
          ["E", "Net profit is obtained by deducting from the gross profit (and other income) the", "expenses of the business", "closing stock", "drawings", "purchases", "It is found in the profit and loss account."],
          ["M", "Opening stock is ₦5,000, purchases are ₦30,000 and closing stock is ₦7,000. The cost of goods sold is", "₦28,000", "₦42,000", "₦32,000", "₦18,000", "5,000 + 30,000 − 7,000."],
          ["M", "Sales are ₦50,000 and the cost of goods sold is ₦28,000. The gross profit is", "₦22,000", "₦78,000", "₦28,000", "₦50,000", "50,000 − 28,000."],
          ["M", "Carriage inwards is shown in the", "trading account", "profit and loss account", "balance sheet", "capital account", "It is part of the cost of goods bought."],
          ["M", "Carriage outwards is treated as", "a selling expense in the profit and loss account", "part of the cost of goods sold", "a fixed asset", "a deduction from sales", "It is the cost of delivering goods to customers."],
          ["H", "Sales ₦80,000; returns inwards ₦2,000; opening stock ₦10,000; purchases ₦50,000; returns outwards ₦1,000; carriage inwards ₦1,500; closing stock ₦12,000. The gross profit is", "₦29,500", "₦31,500", "₦27,500", "₦30,500", "Net sales ₦78,000 less cost of sales ₦48,500."],
          ["H", "A business has a gross profit of ₦29,500, discount received of ₦500 and expenses of ₦12,000. Its net profit is", "₦18,000", "₦17,000", "₦17,500", "₦42,000", "29,500 + 500 − 12,000."],
          ["H", "Goods costing ₦40,000 are sold at a mark-up of 25%. The margin on sales is", "20%", "25%", "33⅓%", "80%", "Profit of ₦10,000 on sales of ₦50,000."],
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
        title: "The balance sheet",
        subtopics: ["Meaning and purpose of the balance sheet", "Classification of assets and liabilities", "Working capital and capital employed", "Preparing a balance sheet"],
        objectives: ["Explain the meaning and purpose of the balance sheet", "Classify assets and liabilities", "Calculate working capital and capital employed", "Prepare the balance sheet of a sole trader"],
        lesson: {
          title: "The Statement of Financial Position",
          summary: "Prepare a balance sheet and calculate working capital and capital employed.",
          minutes: 40,
          notes: `## The balance sheet
A **statement showing the assets, liabilities and capital of a business at a particular date** — its financial position. It is **not an account**; it is a list of the balances remaining in the ledger after the trading and profit and loss account has been prepared. It is headed "as at" a date, whereas the profit and loss account is "for the year ended" a date.

## Assets
### Fixed (non-current) assets
Acquired for **long-term use** in the business, not for resale.
- **tangible**: land and buildings, plant and machinery, fixtures and fittings, motor vehicles
- **intangible**: **goodwill**, patents, trade marks
- **investments** held for the long term
They are shown at **cost less accumulated depreciation** — the **net book value**.
### Current assets
Cash and assets expected to be turned into cash **within one year**: **stock**, **debtors** (less provision for doubtful debts), **prepayments**, **bank** and **cash**.

## Liabilities
### Current liabilities
Debts due **within one year**: **trade creditors**, **accrued expenses**, **bank overdraft**, short-term loans.
### Long-term liabilities
Debts due after more than one year: bank loans, mortgages, debentures.

## Capital
The owner's interest.
| | ₦ |
|---|---|
| opening capital | x |
| add net profit (or less net loss) | x |
| add capital introduced | x |
| less drawings | (x) |
| **closing capital** | x |
*Example:* capital ₦100,000; net profit ₦25,000; drawings ₦10,000: closing capital = **₦115,000**.

## Order of arrangement
- **order of permanence** — the most permanent items first: fixed assets (land, buildings, machinery …) then current assets (stock, debtors, bank, cash). Used by most trading firms
- **order of liquidity** — the most liquid first: cash, bank, debtors, stock … Used by banks

## Working capital
**working capital = current assets − current liabilities**
It shows the ability of the business to meet its short-term debts. A negative figure means the business may be unable to pay its way.
*Example:* current assets ₦30,000; current liabilities ₦12,000: working capital = **₦18,000**.

## Capital employed
**capital employed = fixed assets + working capital** (total assets less current liabilities).
*Example:* fixed assets ₦80,000; current assets ₦45,000; current liabilities ₦15,000: working capital ₦30,000; capital employed = **₦110,000**. If long-term liabilities are ₦20,000, the owner's capital = 110,000 − 20,000 = **₦90,000**.

## Vertical balance sheet
| | ₦ | ₦ |
|---|---|---|
| **Fixed assets** (at net book value) | | x |
| **Current assets** | x | |
| Less **current liabilities** | (x) | |
| **Working capital** | | x |
| **Net assets (capital employed)** | | x |
| Financed by: | | |
| Capital (opening + profit − drawings) | | x |
| Long-term liabilities | | x |
| | | x |

## Uses
shows the financial position; shows what the business owns and owes; basis for calculating ratios; helps lenders and investors; shows the owner's stake.

## Limitations
it is a picture at one moment only; assets are at historical cost, not current value; items such as staff skill and reputation are not shown; figures may be affected by estimates.

## Items requiring care
- **closing stock** appears in both the trading account and the balance sheet
- **drawings** are deducted from capital, never treated as an expense
- **bank overdraft** is a current liability
- **goodwill** is an intangible fixed asset`,
          examples: `**Example 1.** Classify stock, a bank loan repayable in five years, and creditors. *Answer:* **Current asset; long-term liability; current liability**.

**Example 2.** Current assets are ₦64,000 and current liabilities ₦26,000. Find the working capital. *Solution:* **₦38,000**.

**Example 3.** Opening capital ₦150,000; net loss ₦12,000; drawings ₦18,000. Find the closing capital. *Solution:* 150,000 − 12,000 − 18,000 = **₦120,000**.`,
        },
        questions: [
          ["E", "A statement showing the assets, liabilities and capital of a business at a particular date is the", "balance sheet", "trading account", "trial balance", "cash book", "It shows the financial position."],
          ["E", "Which of the following is a fixed asset?", "buildings", "stock", "debtors", "cash", "It is held for long-term use, not for resale."],
          ["E", "Trade creditors are classified in the balance sheet as", "current liabilities", "current assets", "fixed assets", "capital", "They are debts due within one year."],
          ["M", "Current assets are ₦30,000 and current liabilities are ₦12,000. The working capital is", "₦18,000", "₦42,000", "₦30,000", "₦12,000", "Current assets less current liabilities."],
          ["M", "Arranging assets in a balance sheet starting with land and buildings and ending with cash follows the order of", "permanence", "liquidity", "importance", "value", "The most permanent assets come first."],
          ["M", "Debtors are shown in the balance sheet as", "current assets", "current liabilities", "fixed assets", "long-term liabilities", "They are expected to pay within a year."],
          ["M", "In the balance sheet of a sole trader, drawings are", "deducted from capital", "added to capital", "shown as a current asset", "shown as an expense", "They reduce the owner's interest."],
          ["H", "A trader's opening capital was ₦100,000, net profit ₦25,000 and drawings ₦10,000. The closing capital is", "₦115,000", "₦135,000", "₦125,000", "₦85,000", "100,000 + 25,000 − 10,000."],
          ["H", "A business has fixed assets of ₦80,000, current assets of ₦45,000, current liabilities of ₦15,000 and long-term liabilities of ₦20,000. The owner's capital is", "₦90,000", "₦110,000", "₦125,000", "₦70,000", "Net assets of ₦110,000 less the long-term loan."],
          ["H", "A business has fixed assets of ₦80,000 and working capital of ₦30,000. Its capital employed is", "₦110,000", "₦50,000", "₦80,000", "₦30,000", "Fixed assets plus working capital."],
        ],
      },
      {
        week: 2,
        title: "Capital and revenue expenditure",
        subtopics: ["Capital expenditure", "Revenue expenditure", "Capital and revenue receipts", "Effects of wrong classification"],
        objectives: ["Define capital expenditure and give examples", "Define revenue expenditure and give examples", "Distinguish capital receipts from revenue receipts", "Explain the effects of treating capital items as revenue and vice versa"],
        lesson: {
          title: "Classifying Spending and Income",
          summary: "Distinguish capital from revenue items and explain why the distinction matters.",
          minutes: 40,
          notes: `## Capital expenditure
Money spent on **acquiring fixed assets or adding to their value or earning capacity**. The benefit lasts **more than one accounting period**. It is shown in the **balance sheet**.
### Examples
- purchase of land, buildings, machinery, vehicles, furniture
- **costs of bringing an asset into use**: carriage on the asset, **installation**, legal fees on purchase, customs duty, architects' fees, testing
- **extensions and improvements** that increase capacity or life
- purchase of goodwill, patents

*Example:* a machine is bought for ₦200,000; carriage ₦10,000; installation ₦15,000. Repairs later cost ₦5,000.
Capital expenditure = 200,000 + 10,000 + 15,000 = **₦225,000**. The repairs are revenue expenditure.

## Revenue expenditure
Money spent on the **day-to-day running** of the business and on **maintaining** fixed assets. The benefit is used up **within the accounting period**. It is charged to the **trading or profit and loss account**.
### Examples
- purchase of goods for resale
- rent, rates, wages and salaries, insurance, electricity, stationery
- **repairs and maintenance**; fuel for vehicles; renewal of licences
- carriage on goods; advertising; interest on loans
- depreciation

## Distinguishing the two
| Capital expenditure | Revenue expenditure |
|---|---|
| acquires or improves fixed assets | runs the business; maintains assets |
| benefit lasts several years | benefit lasts within the year |
| non-recurring | recurring |
| shown in the balance sheet | charged to profit and loss |
| increases earning capacity | maintains earning capacity |
The same payment may be either, depending on the business: a car is a fixed asset to a manufacturer but stock to a car dealer.

## Mixed items
- buying a van (capital) and paying its first year's licence and insurance (revenue)
- repainting premises (revenue) and building an extension (capital)
- wages of the firm's own workers used to **build or install** a fixed asset are capital

## Deferred revenue expenditure
Heavy revenue expenditure whose benefit covers several years — a large advertising campaign — may be spread over those years.

## Capital and revenue receipts
- **capital receipts** — money received that is not from ordinary trading: **capital introduced by the owner**, **loans received**, **proceeds from the sale of fixed assets**, issue of shares. They affect the balance sheet
- **revenue receipts** — income from normal operations: **sales**, rent received, commission received, discount received, interest received. They are credited to the trading or profit and loss account

## Capital and revenue profits
- **revenue profit** — from normal trading
- **capital profit** — from the sale of a fixed asset above its book value, or shares issued at a premium

## Effects of wrong classification
| Error | Profit | Fixed assets |
|---|---|---|
| **capital expenditure treated as revenue** | **understated** | understated |
| **revenue expenditure treated as capital** | **overstated** | overstated |
Either way, the final accounts fail to show a true and fair view; tax and drawings may be wrongly based.
*Example:* ₦50,000 spent on a new machine is debited to repairs: profit is understated by ₦50,000 and fixed assets are understated by ₦50,000.

## Why the distinction matters
correct measurement of profit; correct valuation of assets; correct tax; proper comparison between periods.`,
          examples: `**Example 1.** Classify: (a) buying a delivery van (b) petrol for the van (c) fitting a new engine that extends its life. *Answer:* (a) **capital** (b) **revenue** (c) **capital**.

**Example 2.** Equipment costs ₦80,000, delivery ₦4,000 and installation ₦6,000. What is the capital cost? *Solution:* **₦90,000**.

**Example 3.** What is the effect on profit of charging a new building extension to repairs? *Answer:* Profit is **understated**.`,
        },
        questions: [
          ["E", "Expenditure on acquiring fixed assets or adding to their value is", "capital expenditure", "revenue expenditure", "a revenue receipt", "a capital receipt", "Its benefit lasts more than one period."],
          ["E", "Which of the following is revenue expenditure?", "payment of wages", "purchase of a building", "purchase of machinery", "extension of the factory", "It is a day-to-day running cost."],
          ["E", "The proceeds of the sale of goods by a trader are", "revenue receipts", "capital receipts", "capital expenditure", "revenue expenditure", "They arise from normal trading."],
          ["M", "The cost of installing a new machine is treated as", "capital expenditure", "revenue expenditure", "a revenue receipt", "drawings", "It is part of the cost of bringing the asset into use."],
          ["M", "The cost of repairing a delivery van is", "revenue expenditure", "capital expenditure", "a capital receipt", "a fixed asset", "It only maintains the asset."],
          ["M", "Which of the following is a capital receipt?", "a loan received from a bank", "rent received", "commission received", "sales of goods", "It does not arise from ordinary trading."],
          ["M", "If capital expenditure is wrongly treated as revenue expenditure, the net profit will be", "understated", "overstated", "unaffected", "doubled", "Too much is charged against profit."],
          ["H", "A machine was bought for ₦200,000. Carriage on it was ₦10,000, installation ₦15,000 and repairs during the year ₦5,000. The amount to be capitalised is", "₦225,000", "₦230,000", "₦200,000", "₦210,000", "Repairs are revenue expenditure."],
          ["H", "If revenue expenditure is wrongly treated as capital expenditure, the result is that", "both profit and fixed assets are overstated", "both profit and fixed assets are understated", "profit is understated and assets overstated", "profit is overstated and assets understated", "The expense is left out of the profit and loss account and added to assets."],
          ["H", "Legal fees paid on the purchase of land for the business are", "capital expenditure", "revenue expenditure", "a revenue receipt", "deferred income", "They are part of the cost of acquiring the asset."],
        ],
      },
      {
        week: 3,
        title: "Depreciation of fixed assets",
        subtopics: ["Meaning and causes of depreciation", "The straight-line method", "The reducing-balance method", "Accounting entries and disposal of assets"],
        objectives: ["Define depreciation and state its causes", "Calculate depreciation by the straight-line method", "Calculate depreciation by the reducing-balance method", "Record depreciation and the disposal of a fixed asset"],
        lesson: {
          title: "Spreading the Cost of Fixed Assets",
          summary: "Calculate and record depreciation and the disposal of fixed assets.",
          minutes: 40,
          notes: `## Depreciation
The **permanent and gradual fall in the value of a fixed asset** over its useful life; in accounting, the **allocation of the cost of a fixed asset over the years that benefit from its use**.

## Causes
- **wear and tear** from use
- **obsolescence** — the asset becomes out of date because of new inventions or changes in demand
- **passage of time (effluxion of time)** — leases, patents
- **depletion** — the exhaustion of wasting assets such as mines, quarries and oil wells
- **inadequacy** — the asset becomes too small for the growing business
- weather and accident

## Reasons for providing depreciation
- to charge the cost of using the asset against the income it helps to earn (**matching**)
- to show a **true profit** and avoid overstating it
- to show fixed assets at a realistic value in the balance sheet
- to retain funds in the business for **replacement**
- to comply with accounting standards and the law

## Terms
- **cost** — the price plus all costs of bringing the asset into use
- **estimated useful life**
- **residual (scrap or salvage) value** — the estimated value at the end of its life
- **net book value (written-down value)** — cost less accumulated depreciation

## The straight-line (fixed instalment) method
The **same amount** is charged every year.
**annual depreciation = (cost − residual value) ÷ estimated useful life**
or a fixed percentage **of cost**.
*Example:* cost ₦100,000; scrap value ₦10,000; life 5 years: (100,000 − 10,000) ÷ 5 = **₦18,000** a year. After 2 years the net book value is 100,000 − 36,000 = **₦64,000**.
- simple; the asset can be written down to its scrap value exactly
- suits assets used evenly: buildings, furniture, leases

## The reducing-balance (diminishing-balance) method
A **fixed percentage** is applied each year to the **net book value** at the start of the year, so the charge **falls** year by year.
*Example:* cost ₦50,000; rate 20%:
| Year | Depreciation | Net book value |
|---|---|---|
| 1 | 20% of 50,000 = ₦10,000 | ₦40,000 |
| 2 | 20% of 40,000 = ₦8,000 | ₦32,000 |
| 3 | 20% of 32,000 = ₦6,400 | ₦25,600 |
- heavier charges in the early years, when repair costs are low, give a more even total cost of the asset
- suits assets that lose value quickly: motor vehicles, machinery, computers
- the asset is never written down to exactly zero

## Other methods
**revaluation** (loose tools, livestock); **sum of the years' digits**; **units of output (machine-hour)**; **depletion unit**; sinking fund and annuity methods.

## Accounting entries
At the year end:
- **debit Profit and loss account**
- **credit Provision for depreciation account**
The asset account stays at **cost**. In the balance sheet: cost **less** accumulated depreciation = net book value.

## Disposal of a fixed asset
A **disposal account** is opened.
1. debit Disposal; credit the Asset account — with the **cost**
2. debit Provision for depreciation; credit Disposal — with the **accumulated depreciation**
3. debit Cash/Bank; credit Disposal — with the **sale proceeds**
4. the balance is the **profit or loss on disposal**, transferred to the profit and loss account
**profit (loss) = proceeds − net book value**
*Example:* an asset costing ₦80,000, with accumulated depreciation of ₦50,000 (net book value ₦30,000), is sold for ₦35,000: **profit ₦5,000**. Sold for ₦24,000, there would be a loss of ₦6,000.

## Notes
- **land** is not normally depreciated — it does not wear out (except mines and quarries)
- depreciation is a **non-cash** expense
- the method chosen should be applied **consistently**
- some firms charge a full year's depreciation in the year of purchase and none in the year of sale; others charge in proportion to the months of ownership`,
          examples: `**Example 1.** A van costs ₦600,000, has a scrap value of ₦100,000 and a life of 5 years. Find the annual straight-line depreciation. *Solution:* 500,000 ÷ 5 = **₦100,000**.

**Example 2.** Equipment costing ₦200,000 is depreciated at 10% on the reducing balance. Find the depreciation for year 2. *Solution:* year 1: 20,000; net book value 180,000; year 2: **₦18,000**.

**Example 3.** A machine with a net book value of ₦45,000 is sold for ₦40,000. Find the result. *Solution:* a **loss of ₦5,000**.`,
        },
        questions: [
          ["E", "The gradual and permanent fall in the value of a fixed asset is", "depreciation", "appreciation", "amortisation of goodwill only", "revaluation", "Its cost is spread over the asset's useful life."],
          ["E", "An asset becoming out of date because of new inventions is a cause of depreciation known as", "obsolescence", "wear and tear", "depletion", "effluxion of time", "The asset loses value even if little used."],
          ["E", "The method of depreciation that charges an equal amount each year is the", "straight-line method", "reducing-balance method", "revaluation method", "depletion method", "It is also called the fixed instalment method."],
          ["M", "A machine costs ₦100,000, has an estimated scrap value of ₦10,000 and a useful life of 5 years. The annual straight-line depreciation is", "₦18,000", "₦20,000", "₦22,000", "₦9,000", "(100,000 − 10,000) ÷ 5."],
          ["M", "An asset costing ₦50,000 is depreciated at 20% per annum on the reducing balance. The depreciation for the second year is", "₦8,000", "₦10,000", "₦6,400", "₦20,000", "20% of the written-down value of ₦40,000."],
          ["M", "A machine costing ₦100,000 is depreciated by ₦18,000 a year on the straight-line basis. Its net book value after two years is", "₦64,000", "₦82,000", "₦36,000", "₦46,000", "100,000 − 36,000."],
          ["M", "The annual depreciation charge is recorded by debiting the profit and loss account and crediting the", "provision for depreciation account", "asset account at cost", "cash account", "capital account", "The asset account remains at cost."],
          ["H", "An asset costing ₦50,000 is depreciated at 20% per annum on the reducing balance. Its net book value at the end of the second year is", "₦32,000", "₦30,000", "₦40,000", "₦25,600", "50,000 less 10,000 less 8,000."],
          ["H", "A motor van that cost ₦80,000 and has accumulated depreciation of ₦50,000 is sold for ₦35,000. The result of the disposal is a", "profit of ₦5,000", "loss of ₦5,000", "profit of ₦35,000", "loss of ₦45,000", "The net book value was ₦30,000."],
          ["H", "Freehold land is not normally depreciated because it", "does not wear out and has an unlimited life", "is a current asset", "has no cost", "is always sold within a year", "Mines and quarries are exceptions."],
        ],
      },
      {
        week: 4,
        title: "Bad debts and provisions for doubtful debts",
        subtopics: ["Bad debts written off", "Provision for doubtful debts", "Adjusting the provision", "Bad debts recovered and provision for discounts"],
        objectives: ["Record bad debts written off", "Create a provision for doubtful debts", "Adjust the provision from year to year", "Record bad debts recovered and a provision for discounts on debtors"],
        lesson: {
          title: "When Debtors Do Not Pay",
          summary: "Record bad debts and create and adjust provisions for doubtful debts.",
          minutes: 40,
          notes: `## Bad debts
A **bad debt** is an amount owed by a debtor that has proved **irrecoverable** — the debtor has died, disappeared or become bankrupt. It is a loss to the business.
### Entry on writing off
- **debit Bad debts account**
- **credit the debtor's account**
At the year end the bad debts account is transferred to the **debit of the profit and loss account** as an expense.

## Doubtful debts
Debts that **may** not be paid. The prudence concept requires the business to **provide for likely losses** in the same year as the sale.

## Provision for doubtful (bad) debts
An amount **set aside out of profit** to cover debts that may prove bad. It is usually a **percentage of debtors** remaining after bad debts have been written off, based on experience or on an **ageing schedule** of debts.
*Example:* debtors ₦40,000; provision 5%: ₦2,000.

### Creating the provision (first year)
- **debit Profit and loss account**
- **credit Provision for doubtful debts account**
In the balance sheet the provision is **deducted from debtors**:
| | ₦ |
|---|---|
| Debtors | 40,000 |
| Less provision for doubtful debts | (2,000) |
| | 38,000 |

## Adjusting the provision in later years
Only the **change** in the provision goes to the profit and loss account.
### Increase
- debit Profit and loss account; credit Provision — with the **increase**
*Example:* existing provision ₦1,500; debtors now ₦50,000 at 4% = ₦2,000: the **increase of ₦500** is charged to profit and loss.
### Decrease
- debit Provision; credit Profit and loss account — with the **decrease** (it is added back as income)
*Example:* the provision falls from ₦3,000 to ₦2,400: **₦600 is credited** to the profit and loss account.

## Bad debts and provision together
Write off the bad debts **first**, then calculate the provision on the **remaining** debtors.
*Example:* debtors ₦62,000; bad debts to be written off ₦2,000; provision 5%.
Remaining debtors = ₦60,000; provision = ₦3,000; debtors in the balance sheet = 60,000 − 3,000 = **₦57,000**.
The profit and loss account is charged with the bad debts ₦2,000 and the provision (or the change in it).

## Bad debts recovered
A debt previously written off is later paid.
- debit the Debtor's account; credit **Bad debts recovered account** (to reinstate the debt)
- debit Cash/Bank; credit the Debtor's account
The bad debts recovered account is credited to the profit and loss account as **income**.

## Provision for discounts on debtors
If debtors are expected to pay promptly and take cash discounts, a provision is made — calculated on debtors **after deducting the provision for doubtful debts**, since no discount will be allowed on debts that are not paid.
*Example:* debtors ₦60,000; provision for doubtful debts ₦3,000; provision for discounts 2%: 2% of ₦57,000 = **₦1,140**.

## Provisions and reserves
- a **provision** is an amount set aside for a **known liability or loss whose amount is uncertain** (depreciation, doubtful debts); it is a **charge against profit**
- a **reserve** is an **appropriation of profit** retained to strengthen the business, not for any known liability

## Reducing bad debts
check customers' creditworthiness; set credit limits; send statements promptly; follow up overdue accounts; offer cash discounts; stop supplies to defaulters.`,
          examples: `**Example 1.** State the entry to write off ₦4,000 owed by Dele as a bad debt. *Answer:* **Debit Bad debts ₦4,000; credit Dele ₦4,000**.

**Example 2.** Debtors are ₦120,000 and a 5% provision is required; the existing provision is ₦4,500. Find the charge to profit and loss. *Solution:* 6,000 − 4,500 = **₦1,500**.

**Example 3.** Debtors ₦85,000; bad debts ₦5,000; provision 10%. Find the net debtors in the balance sheet. *Solution:* 80,000 − 8,000 = **₦72,000**.`,
        },
        questions: [
          ["E", "A debt that has proved to be irrecoverable is", "a bad debt", "a doubtful debt", "a discount", "a provision", "It is written off as a loss."],
          ["E", "An amount set aside out of profit to cover debts that may not be paid is a", "provision for doubtful debts", "general reserve", "capital reserve", "bad debt recovered", "It reflects the prudence concept."],
          ["E", "The entry to write off a bad debt is to debit the bad debts account and credit the", "debtor's account", "cash account", "sales account", "provision for depreciation account", "The debtor's balance is removed."],
          ["M", "Debtors total ₦40,000 and a provision for doubtful debts of 5% is required. The provision is", "₦2,000", "₦38,000", "₦200", "₦4,000", "5% of ₦40,000. Answer: ₦2,000."],
          ["M", "In the balance sheet, the provision for doubtful debts is", "deducted from debtors", "added to debtors", "shown as a current asset", "added to capital", "Debtors are shown at their expected realisable value."],
          ["M", "An increase in the provision for doubtful debts is", "debited to the profit and loss account", "credited to the profit and loss account", "debited to the debtors' accounts", "credited to the cash book", "It is a charge against profit."],
          ["M", "When a debt previously written off is later paid, the amount is treated in the profit and loss account as", "income", "an expense", "a drawing", "a liability", "It is credited as bad debts recovered."],
          ["H", "The existing provision for doubtful debts is ₦1,500. Debtors at the year end are ₦50,000 and the provision is to be 4%. The charge to the profit and loss account is", "₦500", "₦2,000", "₦3,500", "₦1,500", "Only the increase from ₦1,500 to ₦2,000."],
          ["H", "Debtors are ₦62,000. Bad debts of ₦2,000 are to be written off and a provision of 5% made on the remainder. Debtors in the balance sheet will be shown at", "₦57,000", "₦58,900", "₦60,000", "₦59,000", "₦60,000 less a provision of ₦3,000."],
          ["H", "The provision for doubtful debts is reduced from ₦3,000 to ₦2,400. The profit and loss account is", "credited with ₦600", "debited with ₦600", "debited with ₦2,400", "credited with ₦3,000", "The decrease is added back to profit."],
        ],
      },
      {
        week: 5,
        title: "Accruals and prepayments",
        subtopics: ["The accruals concept", "Accrued expenses and prepaid expenses", "Accrued income and income received in advance", "Balance sheet presentation"],
        objectives: ["Explain the accruals concept", "Adjust expenses for accruals and prepayments", "Adjust income for amounts due and amounts received in advance", "Show accruals and prepayments in the balance sheet"],
        lesson: {
          title: "Matching Income and Expenses to the Period",
          summary: "Adjust the final accounts for accrued and prepaid expenses and income.",
          minutes: 40,
          notes: `## The accruals (matching) concept
The profit and loss account must show the income **earned** and the expenses **incurred** during the period, **whether or not cash has been received or paid**. Adjustments are therefore made at the year end.

## Accrued expenses (expenses owing)
Expenses that **relate to the period but have not yet been paid** at its end.
- **added** to the amount paid, in the profit and loss account
- shown as a **current liability** in the balance sheet
*Example:* rent paid ₦22,000; rent owing ₦2,000: charge to profit and loss = **₦24,000**.

## Prepaid expenses (expenses paid in advance)
Payments made in the period that **relate to the next period**.
- **deducted** from the amount paid, in the profit and loss account
- shown as a **current asset** in the balance sheet
*Example:* insurance paid ₦12,000, of which ₦3,000 is for next year: charge = **₦9,000**.

## With opening balances
**expense for the year = amount paid − opening accrual + closing accrual + opening prepayment − closing prepayment**
*Examples:*
- rent: owing at start ₦1,000; paid during the year ₦13,000; owing at end ₦1,500: charge = 13,000 − 1,000 + 1,500 = **₦13,500**
- insurance: prepaid at start ₦2,000; paid ₦10,000; prepaid at end ₦2,500: charge = 2,000 + 10,000 − 2,500 = **₦9,500**

### In the ledger
In the expense account, an **accrual** is carried down as a **credit** balance and a **prepayment** as a **debit** balance.

## Accrued income (income receivable)
Income **earned in the period but not yet received** — rent receivable owed by a tenant, commission due.
- **added** to the amount received
- shown as a **current asset**

## Income received in advance
Income received in the period that **belongs to the next period**.
- **deducted** from the amount received
- shown as a **current liability**
*Example:* rent received ₦18,000, including ₦3,000 for next year: income for the year = **₦15,000**.

## Summary
| Item | Profit and loss account | Balance sheet |
|---|---|---|
| accrued expense | add to expense | current liability |
| prepaid expense | deduct from expense | current asset |
| accrued income | add to income | current asset |
| income received in advance | deduct from income | current liability |

## Other year-end adjustments
- **closing stock** — credited in the trading account; a current asset
- **depreciation** — charged in the profit and loss account; deducted from the asset
- **bad debts and provision for doubtful debts**
- **goods taken by the owner for private use** — deducted from purchases and added to drawings
- **stock of unused stationery, fuel or packing materials** — treated like a prepayment
- **interest on a loan** due but unpaid — an accrual

## Example
Wages paid ₦48,000, with ₦4,000 owing; rates paid ₦9,000, including ₦1,500 in advance; commission received ₦6,000, with ₦800 still due.
- wages charge: ₦52,000; accrual ₦4,000 (current liability)
- rates charge: ₦7,500; prepayment ₦1,500 (current asset)
- commission income: ₦6,800; accrued income ₦800 (current asset)

## Why adjustments matter
Without them, profit would be overstated or understated, and assets and liabilities misstated — the accounts would not give a true and fair view.`,
          examples: `**Example 1.** Electricity paid during the year was ₦36,000 and ₦4,500 is owing. Find the charge to profit and loss. *Solution:* **₦40,500**.

**Example 2.** Where do prepaid expenses appear in the balance sheet? *Answer:* Among the **current assets**.

**Example 3.** Rent received was ₦60,000, and a tenant still owes ₦5,000 for the year. Find the rent income. *Solution:* **₦65,000**.`,
        },
        questions: [
          ["E", "An expense that relates to the current period but has not yet been paid is", "an accrued expense", "a prepaid expense", "a bad debt", "a provision", "It is owing at the year end."],
          ["E", "An expense paid in the current period that relates to the next period is", "a prepaid expense", "an accrued expense", "accrued income", "a drawing", "It is paid in advance."],
          ["E", "In the balance sheet, accrued expenses are shown as", "current liabilities", "current assets", "fixed assets", "capital", "They are amounts owed by the business."],
          ["M", "Rent paid during the year was ₦22,000 and ₦2,000 was owing at the year end. The rent charged to the profit and loss account is", "₦24,000", "₦20,000", "₦22,000", "₦2,000", "The amount owing is added."],
          ["M", "Insurance paid during the year was ₦12,000, of which ₦3,000 relates to next year. The charge to the profit and loss account is", "₦9,000", "₦15,000", "₦12,000", "₦3,000", "The prepaid amount is deducted."],
          ["M", "In the balance sheet, prepaid expenses appear as", "current assets", "current liabilities", "long-term liabilities", "fixed assets", "The benefit is still to be received."],
          ["M", "Income earned during the period but not yet received is shown in the balance sheet as a", "current asset", "current liability", "fixed asset", "reserve", "It is owed to the business."],
          ["H", "At the start of the year rent of ₦1,000 was owing. During the year ₦13,000 was paid, and ₦1,500 was owing at the end. The rent expense for the year is", "₦13,500", "₦12,500", "₦15,500", "₦13,000", "13,000 − 1,000 + 1,500."],
          ["H", "Insurance prepaid at the start of the year was ₦2,000. Premiums of ₦10,000 were paid in the year, and ₦2,500 was prepaid at the end. The insurance expense for the year is", "₦9,500", "₦10,500", "₦14,500", "₦10,000", "2,000 + 10,000 − 2,500."],
          ["H", "Rent received during the year was ₦18,000, including ₦3,000 for the following year. The rent income for the year is", "₦15,000", "₦21,000", "₦18,000", "₦3,000", "Income received in advance is deducted."],
        ],
      },
    ],
  },
];
