import type { TermPlan } from "../types";

/** JSS2 Business Studies — original Precious PS content following the national Basic Education structure. */
export const jss2: TermPlan[] = [
  {
    classCode: "JSS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "The double-entry principle",
        subtopics: ["Meaning of double entry", "Debit and credit", "Rules for recording transactions", "Analysing transactions"],
        objectives: ["Explain the double-entry principle", "Distinguish debit from credit entries", "Apply the rules of debit and credit", "Analyse simple transactions into debit and credit entries"],
        lesson: {
          title: "Every Transaction Has Two Sides",
          summary: "Apply the double-entry principle to simple business transactions.",
          minutes: 45,
          notes: `## Meaning
The **double-entry principle** states that **every transaction affects two accounts**: one account is **debited** and another is **credited** with the **same amount**.
"For every debit there is a corresponding credit."

## Debit and credit
- **Debit (Dr)** — the **left-hand** side of an account.
- **Credit (Cr)** — the **right-hand** side of an account.

## Basic rules
| Account type | Increase | Decrease |
|---|---|---|
| **assets** (cash, bank, furniture, stock) | debit | credit |
| **expenses** (rent, wages, electricity) | debit | credit |
| **liabilities** (loans, creditors) | credit | debit |
| **capital** | credit | debit |
| **income** (sales, commission received) | credit | debit |

A simple memory aid: **debit the receiver, credit the giver**.

## Analysing transactions
| Transaction | Debit | Credit |
|---|---|---|
| started business with cash ₦100,000 | Cash | Capital |
| bought goods for cash ₦20,000 | Purchases | Cash |
| sold goods for cash ₦15,000 | Cash | Sales |
| paid rent in cash ₦5,000 | Rent | Cash |
| bought furniture on credit from Ade ₦30,000 | Furniture | Ade (creditor) |
| sold goods on credit to Bisi ₦12,000 | Bisi (debtor) | Sales |`,
          examples: `**Example 1.** Paid wages in cash ₦8,000. *Answer:* **Debit Wages; Credit Cash** (₦8,000).

**Example 2.** Received a loan from the bank ₦50,000 (paid into the bank account). *Answer:* **Debit Bank; Credit Loan**.

**Example 3.** Sold goods on credit to Musa ₦9,000. *Answer:* **Debit Musa; Credit Sales**.`,
        },
        questions: [
          ["E", "The principle that every transaction affects two accounts is", "double entry", "single entry", "filing", "franking", "One debit, one credit."],
          ["E", "The left-hand side of an account is the", "debit side", "credit side", "balance side", "total side", "Dr is on the left."],
          ["E", "The right-hand side of an account is the", "credit side", "debit side", "cash side", "stock side", "Cr is on the right."],
          ["M", "When cash is paid for rent, the account debited is", "Rent", "Cash", "Capital", "Sales", "Expenses increase on the debit side."],
          ["M", "When a business starts with cash as capital, the account credited is", "Capital", "Cash", "Purchases", "Sales", "Capital increases on the credit side."],
          ["M", "Goods sold for cash: the account credited is", "Sales", "Cash", "Purchases", "Rent", "Income is credited."],
          ["M", "An increase in an asset is recorded on the", "debit side", "credit side", "both sides", "no side", "Assets increase by debit."],
          ["H", "Furniture bought on credit from Ade: the accounts affected are", "Debit Furniture, Credit Ade", "Debit Ade, Credit Furniture", "Debit Cash, Credit Furniture", "Debit Furniture, Credit Cash", "Ade becomes a creditor."],
          ["H", "Goods sold on credit to Bisi: the accounts affected are", "Debit Bisi, Credit Sales", "Debit Sales, Credit Bisi", "Debit Cash, Credit Sales", "Debit Bisi, Credit Cash", "Bisi becomes a debtor."],
          ["H", "A loan received into the bank account is recorded as", "Debit Bank, Credit Loan", "Debit Loan, Credit Bank", "Debit Capital, Credit Bank", "Debit Bank, Credit Sales", "Liabilities increase on the credit side."],
        ],
      },
      {
        week: 2,
        title: "Ledger accounts",
        subtopics: ["Meaning of the ledger", "Format of a ledger account", "Posting transactions", "Balancing accounts"],
        objectives: ["Explain the ledger and its divisions", "Draw the format of a ledger account", "Post transactions to ledger accounts", "Balance ledger accounts"],
        lesson: {
          title: "Posting to the Ledger",
          summary: "Record transactions in ledger accounts and balance them.",
          minutes: 45,
          notes: `## Meaning
The **ledger** is the **main book of account** in which all accounts are kept. It is called the **book of final entry**.
Divisions: **sales ledger** (debtors), **purchases ledger** (creditors), **general (nominal) ledger** (other accounts).

## Format (T-account)
| Dr | | | Cr | | |
|---|---|---|---|---|---|
| Date | Details | ₦ | Date | Details | ₦ |
Each entry states the **date**, the **name of the other account** (details) and the **amount**.

## Posting example
Transactions of Ade Stores:
1. Started business with cash ₦50,000
2. Bought goods for cash ₦20,000
3. Sold goods for cash ₦12,000
4. Paid rent in cash ₦4,000

**Cash account**
| Dr | ₦ | Cr | ₦ |
|---|---|---|---|
| Capital | 50,000 | Purchases | 20,000 |
| Sales | 12,000 | Rent | 4,000 |
| | | Balance c/d | 38,000 |
| **Total** | **62,000** | **Total** | **62,000** |
| Balance b/d | 38,000 | | |

## Balancing an account
1. add both sides
2. find the difference (**balance**)
3. enter the balance on the **smaller** side as **balance c/d** (carried down)
4. total both sides (they are now equal)
5. bring the balance down on the opposite side as **balance b/d** (brought down)
A **debit balance** means the debit side was larger (e.g. cash in hand).`,
          examples: `**Example 1.** In the cash account above, what is the balance? *Answer:* **₦38,000** debit balance (cash in hand).

**Example 2.** Why is the ledger called the book of final entry? *Answer:* Transactions are **finally recorded** there after the books of original entry.

**Example 3.** On which side is "Balance c/d" written if the debit side is larger? *Answer:* on the **credit side** (the smaller side).`,
        },
        questions: [
          ["E", "The main book of account in which all accounts are kept is the", "ledger", "invoice", "receipt book", "diary", "It is the book of final entry."],
          ["E", "The ledger is also called the book of", "final entry", "original entry", "prime entry only", "minutes", "Entries end there."],
          ["E", "A T-account has a debit side and a", "credit side", "cash side", "balance side", "total side only", "Two sides show double entry."],
          ["M", "The ledger that contains debtors' accounts is the", "sales ledger", "purchases ledger", "general ledger", "cash book", "Debtors arise from credit sales."],
          ["M", "The ledger that contains creditors' accounts is the", "purchases ledger", "sales ledger", "nominal ledger", "petty cash book", "Creditors arise from credit purchases."],
          ["M", "In balancing an account, 'balance c/d' means balance", "carried down", "cash deposit", "credit double", "counted daily", "It is carried to the next period."],
          ["M", "A cash account shows debits of ₦62,000 and credits of ₦24,000. The balance is", "₦38,000", "₦86,000", "₦24,000", "₦62,000", "₦62,000 − ₦24,000 = ₦38,000."],
          ["H", "When the debit side of an account is larger, the account has a", "debit balance", "credit balance", "nil balance", "negative total", "The excess is on the debit side."],
          ["H", "The balance c/d is entered on the", "smaller side of the account", "larger side of the account", "top of the account", "cover of the ledger", "It makes both sides equal."],
          ["H", "The general ledger contains", "accounts such as rent, wages and capital", "only debtors' accounts", "only creditors' accounts", "only cash receipts", "It is the nominal ledger."],
        ],
      },
      {
        week: 3,
        title: "The cash book",
        subtopics: ["Meaning of the cash book", "Single-column cash book", "Two-column cash book", "Contra entries"],
        objectives: ["Explain the cash book", "Prepare a single-column cash book", "Prepare a two-column (cash and bank) cash book", "Explain contra entries"],
        lesson: {
          title: "Recording Cash and Bank Transactions",
          summary: "Record cash and bank transactions in the cash book.",
          minutes: 45,
          notes: `## Meaning
The **cash book** records **all cash and bank receipts and payments**. It is both a **book of original entry** and a **ledger account** (it replaces the cash and bank accounts in the ledger).
- **Receipts** (money in) — **debit** side.
- **Payments** (money out) — **credit** side.

## Single-column cash book
Records **cash only**.
| Dr | ₦ | Cr | ₦ |
|---|---|---|---|
| Capital | 40,000 | Purchases | 15,000 |
| Sales | 8,000 | Wages | 3,000 |
| | | Balance c/d | 30,000 |
| | 48,000 | | 48,000 |

## Two-column cash book
Has **cash** and **bank** columns on each side.
| Dr | Cash ₦ | Bank ₦ | Cr | Cash ₦ | Bank ₦ |
|---|---|---|---|---|---|
| Capital | 20,000 | 80,000 | Rent (cheque) | | 10,000 |
| Sales | 5,000 | | Bank (c) | 10,000 | |
| Cash (c) | | 10,000 | Balance c/d | 15,000 | 80,000 |
| | 25,000 | 90,000 | | 25,000 | 90,000 |

## Contra entries
A **contra entry** is a transaction that affects **both** columns of the cash book, marked **(c)**:
- **paying cash into the bank**: credit cash column, debit bank column
- **withdrawing cash from the bank for office use**: debit cash column, credit bank column
Both entries appear in the cash book only; nothing is posted to another ledger account.`,
          examples: `**Example 1.** On which side of the cash book are receipts recorded? *Answer:* the **debit** side.

**Example 2.** Cash ₦10,000 paid into the bank. How is it recorded? *Answer:* **Credit cash column, debit bank column** — a contra entry marked (c).

**Example 3.** A single-column cash book has receipts of ₦48,000 and payments of ₦18,000. Find the balance. *Answer:* **₦30,000**.`,
        },
        questions: [
          ["E", "The book that records cash and bank receipts and payments is the", "cash book", "sales ledger", "purchases day book", "journal proper only", "It handles money in and out."],
          ["E", "Receipts are recorded on the", "debit side of the cash book", "credit side of the cash book", "cover of the book", "balance line only", "Money in is debited."],
          ["E", "Payments are recorded on the", "credit side of the cash book", "debit side of the cash book", "invoice", "receipt", "Money out is credited."],
          ["M", "A cash book with cash and bank columns is a", "two-column cash book", "single-column cash book", "petty cash book", "sales day book", "It records both cash and bank."],
          ["M", "A transaction that affects both the cash and bank columns is a", "contra entry", "credit sale", "discount", "journal proper entry", "It is marked (c)."],
          ["M", "Paying cash into the bank is recorded by", "crediting the cash column and debiting the bank column", "debiting the cash column and crediting the bank column", "debiting both columns", "crediting both columns", "Cash decreases, bank increases."],
          ["M", "Receipts of ₦48,000 and payments of ₦18,000 give a cash balance of", "₦30,000", "₦66,000", "₦18,000", "₦48,000", "₦48,000 − ₦18,000 = ₦30,000."],
          ["H", "Withdrawing cash from the bank for office use is recorded by", "debiting cash and crediting bank", "crediting cash and debiting bank", "debiting sales", "crediting capital", "Cash increases, bank decreases."],
          ["H", "The cash book serves both as a book of original entry and as", "a ledger account", "a receipt", "an invoice", "a memo", "It replaces cash and bank accounts."],
          ["H", "A payment by cheque for rent is entered in the", "bank column on the credit side", "cash column on the debit side", "bank column on the debit side", "sales ledger", "Money leaves the bank."],
        ],
      },
      {
        week: 4,
        title: "The petty cash book",
        subtopics: ["Meaning of petty cash", "The imprest system", "Analysis columns", "Advantages of the petty cash book"],
        objectives: ["Explain petty cash", "Describe the imprest system", "Prepare a simple analytical petty cash book", "State advantages of keeping a petty cash book"],
        lesson: {
          title: "Recording Small Payments",
          summary: "Keep a petty cash book using the imprest system.",
          minutes: 45,
          notes: `## Meaning
**Petty cash** is a **small amount of money** kept to pay for **small, day-to-day expenses** such as transport fares, postage, stationery, cleaning materials and refreshments.
The **petty cashier** keeps the money and records payments in the **petty cash book**, supported by **petty cash vouchers**.

## The imprest system
- A fixed amount called the **imprest (float)** is given to the petty cashier at the start of a period, e.g. **₦20,000**.
- At the end of the period, the main cashier **reimburses** the exact amount spent, restoring the float to ₦20,000.
Example: float ₦20,000; spent ₦14,500; balance ₦5,500; reimbursement = **₦14,500**, bringing cash back to ₦20,000.

## Analytical petty cash book
| Receipts ₦ | Date | Details | Voucher | Total ₦ | Postage ₦ | Transport ₦ | Stationery ₦ | Cleaning ₦ |
|---|---|---|---|---|---|---|---|---|
| 20,000 | 1 Mar | Cash (imprest) | | | | | | |
| | 3 Mar | Bus fare | 1 | 2,000 | | 2,000 | | |
| | 5 Mar | Stamps | 2 | 1,500 | 1,500 | | | |
| | 8 Mar | Pens and paper | 3 | 3,000 | | | 3,000 | |
| | 12 Mar | Detergent | 4 | 2,500 | | | | 2,500 |
Total spent = **₦9,000**; balance = **₦11,000**; reimbursement = **₦9,000**.

## Advantages
saves the main cashier's time; controls small expenses; easy to check (imprest restored); analysis columns show spending by type; reduces misuse of cash; trains junior staff.`,
          examples: `**Example 1.** What is the imprest system? *Answer:* A fixed float is given, and the **exact amount spent is reimbursed** at the end of the period.

**Example 2.** Float ₦20,000; spent ₦9,000. How much is reimbursed? *Answer:* **₦9,000**.

**Example 3.** Name one expense paid from petty cash. *Answer:* **transport fares** (or postage, stationery).`,
        },
        questions: [
          ["E", "A small amount of money kept for small daily expenses is", "petty cash", "capital", "a loan", "a dividend", "It covers minor costs."],
          ["E", "The person who keeps petty cash is the", "petty cashier", "managing director", "auditor", "customer", "The petty cashier records payments."],
          ["E", "Which expense is usually paid from petty cash?", "postage stamps", "buying a factory", "paying annual salaries", "buying a delivery van", "It is a small expense."],
          ["M", "The system in which a fixed float is restored at the end of each period is the", "imprest system", "double entry system", "single entry system", "barter system", "The amount spent is reimbursed."],
          ["M", "The fixed amount given to the petty cashier is called the", "imprest (float)", "capital", "overdraft", "dividend", "It is restored periodically."],
          ["M", "A float of ₦20,000 with ₦9,000 spent requires a reimbursement of", "₦9,000", "₦20,000", "₦11,000", "₦29,000", "Reimburse what was spent."],
          ["M", "Documents supporting petty cash payments are", "petty cash vouchers", "invoices only", "cheques", "memos", "Vouchers prove each payment."],
          ["H", "A float of ₦20,000 with ₦14,500 spent leaves a balance of", "₦5,500", "₦14,500", "₦34,500", "₦20,000", "₦20,000 − ₦14,500 = ₦5,500."],
          ["H", "Analysis columns in the petty cash book help to", "show spending by type of expense", "hide expenses", "increase expenses", "replace vouchers", "They classify spending."],
          ["H", "An advantage of the petty cash book is that it", "saves the main cashier's time", "increases large payments", "removes the need for records", "encourages misuse", "Small payments are handled separately."],
        ],
      },
      {
        week: 5,
        title: "Books of original entry",
        subtopics: ["Meaning of books of original entry", "Sales and purchases day books", "Returns day books", "The journal proper"],
        objectives: ["Explain books of original entry", "Record credit sales and purchases in day books", "Record returns in returns day books", "Explain uses of the journal proper"],
        lesson: {
          title: "Where Transactions Are First Recorded",
          summary: "Record transactions in the books of original entry.",
          minutes: 45,
          notes: `## Meaning
**Books of original (prime) entry** are books in which transactions are **first recorded** from source documents **before** being posted to the ledger.

## The books
| Book | Records | Source document |
|---|---|---|
| **sales day book** | **credit sales** of goods | invoices sent |
| **purchases day book** | **credit purchases** of goods | invoices received |
| **returns inwards (sales returns) day book** | goods returned **by customers** | credit notes sent |
| **returns outwards (purchases returns) day book** | goods returned **to suppliers** | credit notes received / debit notes sent |
| **cash book** | cash and bank receipts and payments | receipts, cheque stubs |
| **petty cash book** | small cash payments | petty cash vouchers |
| **journal proper** | transactions not recorded elsewhere | various |

## Sales day book example
| Date | Customer | Invoice no. | ₦ |
|---|---|---|---|
| 2 Apr | Bisi | 101 | 12,000 |
| 5 Apr | Musa | 102 | 9,000 |
| | **Total (credit Sales account)** | | **21,000** |
Posting: debit each customer's account; credit **Sales account** with the total.

## Journal proper
used for: **opening entries**, purchase or sale of **fixed assets on credit**, **correction of errors**, transfers and adjustments. Each entry shows debit, credit and a short **narration** explaining it.`,
          examples: `**Example 1.** Where are credit sales first recorded? *Answer:* in the **sales day book**.

**Example 2.** Goods returned by a customer are recorded in the **returns inwards day book**.

**Example 3.** Where would a credit purchase of a motor van be recorded? *Answer:* in the **journal proper** (it is a fixed asset).`,
        },
        questions: [
          ["E", "Books in which transactions are first recorded are books of", "original entry", "final entry", "minutes", "attendance", "They precede the ledger."],
          ["E", "Credit sales of goods are first recorded in the", "sales day book", "purchases day book", "cash book", "petty cash book", "It lists credit sales."],
          ["E", "Credit purchases of goods are first recorded in the", "purchases day book", "sales day book", "returns inwards day book", "cash book", "It lists credit purchases."],
          ["M", "Goods returned by customers are recorded in the", "returns inwards day book", "returns outwards day book", "purchases day book", "petty cash book", "Returns come in from customers."],
          ["M", "Goods returned to suppliers are recorded in the", "returns outwards day book", "returns inwards day book", "sales day book", "cash book", "Returns go out to suppliers."],
          ["M", "The source document for entries in the sales day book is the", "invoice sent to customers", "receipt", "cheque", "petty cash voucher", "Invoices show credit sales."],
          ["M", "The total of the sales day book is credited to the", "Sales account", "Purchases account", "Cash account", "Capital account", "Sales income is credited."],
          ["H", "A credit purchase of a motor van for business use is recorded in the", "journal proper", "purchases day book", "sales day book", "petty cash book", "Fixed assets go through the journal."],
          ["H", "A short explanation written under a journal entry is called a", "narration", "folio", "voucher", "receipt", "It explains the entry."],
          ["H", "Correction of errors in the books is recorded first in the", "journal proper", "sales day book", "petty cash book", "returns outwards day book", "The journal handles adjustments."],
        ],
      },
      {
        week: 6,
        title: "The trial balance",
        subtopics: ["Meaning and purpose of the trial balance", "Preparing a trial balance", "Errors not revealed by the trial balance", "Uses of the trial balance"],
        objectives: ["Explain the trial balance and its purpose", "Prepare a simple trial balance", "Identify errors not revealed by the trial balance", "State uses of the trial balance"],
        lesson: {
          title: "Checking the Arithmetical Accuracy of Accounts",
          summary: "Prepare a trial balance and understand its limitations.",
          minutes: 45,
          notes: `## Meaning
A **trial balance** is a **list of all ledger account balances** at a particular date, arranged in **debit** and **credit** columns. If double entry has been done correctly, the **two totals should agree**.

## Rules
- **debit balances**: assets and expenses (cash, bank, furniture, purchases, rent, wages, debtors, drawings)
- **credit balances**: liabilities, capital and income (capital, loans, creditors, sales, commission received)

## Example: Trial balance of Ngozi Stores as at 31 March
| Account | Dr ₦ | Cr ₦ |
|---|---|---|
| Capital | | 100,000 |
| Cash | 25,000 | |
| Bank | 40,000 | |
| Furniture | 30,000 | |
| Purchases | 60,000 | |
| Sales | | 75,000 |
| Rent | 8,000 | |
| Wages | 12,000 | |
| **Totals** | **175,000** | **175,000** |

## Errors not revealed by the trial balance
| Error | Meaning |
|---|---|
| **omission** | transaction completely left out |
| **commission** | correct amount, wrong personal account of the same class |
| **principle** | entry in the wrong class of account (e.g. furniture treated as purchases) |
| **original entry** | wrong amount in the source record, posted on both sides |
| **complete reversal** | debit and credit accounts reversed |
| **compensating errors** | two errors that cancel each other |

## Uses
checks **arithmetical accuracy**; helps locate errors; summarises balances; basis for preparing **final accounts**.`,
          examples: `**Example 1.** On which side of the trial balance does capital appear? *Answer:* **credit** side.

**Example 2.** Recording the purchase of furniture in the Purchases account is an error of **principle**.

**Example 3.** Give one use of the trial balance. *Answer:* It checks the **arithmetical accuracy** of the ledger.`,
        },
        questions: [
          ["E", "A list of all ledger balances in debit and credit columns is a", "trial balance", "cash book", "invoice", "receipt", "Totals should agree."],
          ["E", "Capital appears on the", "credit side of the trial balance", "debit side of the trial balance", "cash book only", "invoice", "Capital has a credit balance."],
          ["E", "Cash in hand appears on the", "debit side of the trial balance", "credit side of the trial balance", "sales day book", "credit note", "Assets have debit balances."],
          ["M", "Sales appear on the", "credit side", "debit side", "both sides", "neither side", "Income has a credit balance."],
          ["M", "Expenses such as rent and wages appear on the", "debit side", "credit side", "cover page", "narration", "Expenses have debit balances."],
          ["M", "A transaction left out of the books completely is an error of", "omission", "commission", "principle", "compensation", "Nothing is recorded."],
          ["M", "The main purpose of a trial balance is to", "check the arithmetical accuracy of the ledger", "record sales", "pay wages", "file invoices", "Totals should agree."],
          ["H", "Recording the purchase of furniture in the Purchases account is an error of", "principle", "omission", "original entry", "compensation", "Wrong class of account."],
          ["H", "Two errors that cancel each other out are", "compensating errors", "errors of omission", "errors of principle", "errors of reversal", "The totals still agree."],
          ["H", "Debit and credit entries recorded in the opposite accounts is an error of", "complete reversal", "omission", "commission", "principle", "Both entries are swapped."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Channels of distribution",
        subtopics: ["Meaning of distribution", "Channels of distribution", "Factors affecting choice of channel", "Middlemen and their functions"],
        objectives: ["Explain distribution", "Identify channels of distribution", "State factors affecting choice of channel", "Describe the functions of middlemen"],
        lesson: {
          title: "How Goods Reach Consumers",
          summary: "Identify channels of distribution and the role of middlemen.",
          minutes: 40,
          notes: `## Meaning
**Distribution** is the **movement of goods from producers to consumers**.
A **channel of distribution** is the **route** goods take.

## Channels
| Channel | Example |
|---|---|
| **producer → consumer** (direct) | a farmer selling tomatoes at the farm gate; online sales by manufacturers |
| **producer → retailer → consumer** | bakery supplying shops |
| **producer → wholesaler → retailer → consumer** | beverages, detergents |
| **producer → agent → wholesaler → retailer → consumer** | imported goods |

## Factors affecting choice
nature of the product (perishable goods need short channels); cost of distribution; size and location of the market; producer's resources; competition; services required (e.g. installation).

## Middlemen
**Middlemen** are people or firms between producers and consumers: **wholesalers**, **retailers**, **agents**, **brokers**, **distributors**.

## Functions of middlemen
- **bulk breaking** (buying in large quantities and selling in small units)
- **storage** (warehousing)
- **transportation**
- **financing** (giving credit)
- **advertising** and promotion
- **grading, packaging and branding**
- **market information** (feedback to producers)

## Elimination of middlemen
Some argue middlemen raise prices; producers may sell directly (online stores, factory outlets), but they must then perform the middlemen's functions themselves.`,
          examples: `**Example 1.** A farmer sells tomatoes at the farm gate. Which channel is this? *Answer:* **producer → consumer** (direct).

**Example 2.** What is bulk breaking? *Answer:* **Buying in large quantities and selling in small units**.

**Example 3.** Name one factor affecting the choice of channel. *Answer:* **perishability of the product**.`,
        },
        questions: [
          ["E", "The movement of goods from producers to consumers is", "distribution", "production", "consumption", "saving", "Goods reach users."],
          ["E", "People between producers and consumers are called", "middlemen", "producers", "auditors", "shareholders", "They distribute goods."],
          ["E", "A farmer selling directly to consumers at the farm gate uses a", "direct channel", "long channel with agents", "wholesaler only", "foreign trade channel", "No middlemen are involved."],
          ["M", "Buying in large quantities and selling in small units is", "bulk breaking", "hoarding", "adulteration", "advertising", "Wholesalers and retailers break bulk."],
          ["M", "Perishable goods usually require", "a short channel of distribution", "a very long channel", "no channel", "storage for years", "They must reach consumers quickly."],
          ["M", "Which is a function of middlemen?", "storage of goods", "mining raw materials", "printing currency", "making laws", "They warehouse goods."],
          ["M", "The channel producer → wholesaler → retailer → consumer is used mainly for", "goods like beverages and detergents", "only farm-gate sales", "services only", "illegal goods", "Mass-produced goods pass through several middlemen."],
          ["H", "Why do producers who eliminate middlemen not always reduce prices?", "They must perform the middlemen's functions themselves at a cost.", "Middlemen cost nothing.", "Consumers pay less always.", "Distribution becomes free.", "Functions still cost money."],
          ["H", "Middlemen provide market information by", "passing consumers' feedback to producers", "hiding information", "stopping production", "setting laws", "They connect markets."],
          ["H", "Which factor would favour a direct channel?", "a small local market near the producer", "a nationwide market", "goods needing wide storage", "imported goods", "Proximity allows direct sales."],
        ],
      },
      {
        week: 2,
        title: "Retail trade",
        subtopics: ["Meaning of retail trade", "Functions of retailers", "Types of retail outlets", "Modern trends in retailing"],
        objectives: ["Explain retail trade", "State the functions of retailers", "Identify types of retail outlets", "Describe modern trends in retailing"],
        lesson: {
          title: "Selling to the Final Consumer",
          summary: "Describe retailers, their functions and types of retail outlets.",
          minutes: 40,
          notes: `## Meaning
**Retail trade** is the **sale of goods in small quantities to final consumers**. A **retailer** is the last link in the chain of distribution.

## Functions of retailers
**to consumers:** sell in small quantities; stock a variety of goods; locate near consumers; give credit to trusted customers; give advice and information; provide after-sales services; deliver goods.
**to wholesalers/producers:** buy in bulk; bear risks; give market information; advertise and display goods.

## Types of retail outlets
| Type | Features |
|---|---|
| **hawkers and pedlars** | move about selling small items |
| **market traders / stall holders** | sell in open markets |
| **kiosks** | small fixed structures by roadsides |
| **unit (single) shops** | small shops owned by one person |
| **chain (multiple) stores** | many branches under one owner selling similar goods |
| **departmental stores** | large stores with many departments under one roof |
| **supermarkets** | large self-service stores for food and household goods |
| **mail-order and online retailers** | orders placed by post, phone or internet; goods delivered |
| **vending machines** | automatic sale of drinks, snacks |
| **mobile shops / street vendors** | vans or carts that move |

## Modern trends
**e-commerce** and online marketplaces, mobile payments and POS, **self-service**, branding and packaging, home delivery, loyalty cards, shopping malls.`,
          examples: `**Example 1.** Who is the last link in the chain of distribution? *Answer:* the **retailer**.

**Example 2.** A large store where customers serve themselves is a **supermarket**.

**Example 3.** Name one modern trend in retailing. *Answer:* **e-commerce** (online shopping).`,
        },
        questions: [
          ["E", "The sale of goods in small quantities to final consumers is", "retail trade", "wholesale trade", "import trade", "export trade", "Retailers serve consumers."],
          ["E", "The last link in the chain of distribution is the", "retailer", "wholesaler", "producer", "agent", "Retailers sell to consumers."],
          ["E", "People who move about selling goods are", "hawkers", "wholesalers", "bankers", "insurers", "They carry goods around."],
          ["M", "A large self-service store selling food and household goods is a", "supermarket", "kiosk", "hawker's tray", "warehouse", "Customers serve themselves."],
          ["M", "Many branches under one owner selling similar goods form", "chain stores", "unit shops", "kiosks", "vending machines", "They are multiple shops."],
          ["M", "A large store with many departments under one roof is a", "departmental store", "kiosk", "hawker", "unit shop", "Departments sell different goods."],
          ["M", "Which is a function of retailers to consumers?", "selling in small quantities", "mining raw materials", "printing money", "making laws", "Consumers need small quantities."],
          ["H", "Buying goods through websites and having them delivered is", "online retailing (e-commerce)", "hawking", "wholesale trade", "barter", "The internet enables sales."],
          ["H", "How do retailers help producers?", "by providing market information about consumer tastes", "by stopping sales", "by hiding complaints", "by reducing demand", "Feedback improves products."],
          ["H", "A small fixed structure by the roadside selling goods is a", "kiosk", "supermarket", "departmental store", "warehouse", "Kiosks are common in towns."],
        ],
      },
      {
        week: 3,
        title: "Wholesale trade",
        subtopics: ["Meaning of wholesale trade", "Functions of wholesalers", "Types of wholesalers", "Arguments for and against wholesalers"],
        objectives: ["Explain wholesale trade", "State the functions of wholesalers to producers and retailers", "Identify types of wholesalers", "Evaluate arguments for and against wholesalers"],
        lesson: {
          title: "Buying and Selling in Bulk",
          summary: "Explain the role of wholesalers in distribution.",
          minutes: 40,
          notes: `## Meaning
**Wholesale trade** is **buying goods in large quantities from producers** and **selling in smaller quantities to retailers** (and sometimes large consumers).

## Functions of wholesalers
**to producers:**
- buy in **bulk**, reducing producers' storage problems
- give **advance orders** and sometimes finance
- give **market information**
- bear **risks** of price changes and damage
- advertise goods
**to retailers:**
- **bulk breaking**
- give **credit**
- offer **variety** of goods
- **transport** goods to retailers
- give advice on new products
- maintain **steady supply** through storage

## Types of wholesalers
| Type | Features |
|---|---|
| **general wholesalers** | deal in many kinds of goods |
| **specialised wholesalers** | deal in one line (e.g. pharmaceuticals, building materials) |
| **cash-and-carry wholesalers** | retailers pay cash and carry goods themselves |
| **regional wholesalers** | serve a particular region |
| **merchant wholesalers** | own the goods they sell |

## Arguments for and against
**For:** perform essential functions; steady supply; bulk breaking; storage and credit.
**Against:** raise prices (profit margins); may **hoard**; may favour certain products; functions can be done by large retailers or producers.`,
          examples: `**Example 1.** What is cash-and-carry wholesaling? *Answer:* **Retailers pay cash and carry the goods away themselves.**

**Example 2.** Name one function of a wholesaler to a producer. *Answer:* **buying in bulk** (or bearing risks).

**Example 3.** Give one argument against wholesalers. *Answer:* They **increase prices**.`,
        },
        questions: [
          ["E", "The branch of trade in which goods are bought in bulk from producers and sold to retailers is", "wholesale trade", "retail trade", "hawking", "barter", "Wholesalers deal in bulk."],
          ["E", "Which is a function of wholesalers to retailers?", "bulk breaking", "mining", "farming", "manufacturing only", "They sell in smaller lots."],
          ["E", "Wholesalers help producers by", "buying goods in bulk", "stopping production", "hiding products", "refusing orders", "Bulk purchases help producers."],
          ["M", "A wholesaler where retailers pay cash and carry goods away is a", "cash-and-carry wholesaler", "merchant bank", "hawker", "chain store", "No credit or delivery is given."],
          ["M", "A wholesaler dealing in only one line of goods is a", "specialised wholesaler", "general wholesaler", "retailer", "hawker", "It focuses on one product line."],
          ["M", "Wholesalers bear risks for producers by", "holding stock that may lose value", "refusing goods", "closing factories", "fixing taxes", "They absorb market risks."],
          ["M", "Which is an argument against wholesalers?", "they increase prices", "they break bulk", "they store goods", "they give credit", "Their profits add to costs."],
          ["H", "Keeping goods off the market to create scarcity is a criticism of wholesalers known as", "hoarding", "bulk breaking", "warehousing", "grading", "Hoarding raises prices unfairly."],
          ["H", "Wholesalers ensure steady supply to retailers mainly through", "storage (warehousing)", "advertising only", "barter", "taxation", "Stored goods can be released when needed."],
          ["H", "A wholesaler who owns the goods he sells is a", "merchant wholesaler", "broker", "agent", "consumer", "He takes ownership before resale."],
        ],
      },
      {
        week: 4,
        title: "Warehousing",
        subtopics: ["Meaning of warehousing", "Types of warehouses", "Functions of warehouses", "Qualities of a good warehouse"],
        objectives: ["Explain warehousing", "Identify types of warehouses", "State the functions of warehouses", "Describe the qualities of a good warehouse"],
        lesson: {
          title: "Storing Goods Safely",
          summary: "Explain warehouses, their types and functions.",
          minutes: 40,
          notes: `## Meaning
**Warehousing** is the **storage of goods** from the time they are produced or imported until they are needed by buyers. A **warehouse** is a building used for this purpose.

## Types of warehouses
| Type | Owner / user |
|---|---|
| **private warehouses** | owned by manufacturers, wholesalers or retailers for their own goods |
| **public warehouses** | owned by individuals or government and rented to users |
| **bonded warehouses** | owned or approved by **Customs**; imported goods are stored **without paying duty** until they are removed |
| **cold stores / cold rooms** | for perishable goods (fish, meat, drugs) |
| **silos** | for grains |
| **co-operative warehouses** | owned by co-operative societies |

## Functions of warehouses
- **storage** until goods are needed
- **price stabilisation** (release goods when supply is low)
- enable **seasonal goods** to be available all year
- **protection** against theft, weather and damage
- **grading, packaging and branding**
- create **time utility**
- **bonded warehouses** allow payment of duty in instalments and re-export without duty

## Qualities of a good warehouse
located near transport routes and markets; secure (guards, locks, alarms); well ventilated and dry; fire-fighting equipment; adequate space; loading facilities; proper record keeping; pest control.`,
          examples: `**Example 1.** What is a bonded warehouse? *Answer:* A warehouse where **imported goods are stored without paying customs duty** until they are removed.

**Example 2.** Which type of warehouse stores fish and meat? *Answer:* a **cold store**.

**Example 3.** Name one function of warehousing. *Answer:* **price stabilisation** (or protection of goods).`,
        },
        questions: [
          ["E", "The storage of goods until they are needed is", "warehousing", "advertising", "banking", "hawking", "Warehouses keep goods safe."],
          ["E", "A building used for storing goods is a", "warehouse", "classroom", "church", "stadium", "Goods are stored there."],
          ["E", "Grains are usually stored in", "silos", "kiosks", "offices", "banks", "Silos store grain in bulk."],
          ["M", "A warehouse where imported goods are stored without paying duty is a", "bonded warehouse", "private warehouse", "cold store", "silo", "Duty is paid on removal."],
          ["M", "Perishable goods such as fish are stored in", "cold stores", "silos", "open fields", "bonded offices", "Low temperatures preserve them."],
          ["M", "A warehouse owned by a manufacturer for its own goods is a", "private warehouse", "public warehouse", "bonded warehouse", "co-operative bank", "It is for the owner's use."],
          ["M", "Warehousing helps to stabilise prices by", "releasing goods when supply is low", "destroying goods", "hiding goods permanently", "raising all prices", "Stored goods smooth supply."],
          ["H", "Making seasonal goods available all year creates", "time utility", "place utility", "form utility", "no utility", "Storage adds value over time."],
          ["H", "Which is a quality of a good warehouse?", "security and good ventilation", "damp and dark conditions", "no fire equipment", "far from transport routes", "Goods must be protected."],
          ["H", "Bonded warehouses benefit importers by allowing them to", "pay duty only when goods are removed", "avoid duty forever", "sell without licences", "hide goods from customs", "Duty is deferred."],
        ],
      },
      {
        week: 5,
        title: "Transport in business",
        subtopics: ["Meaning and importance of transport", "Modes of transport", "Choosing a mode of transport", "Transport documents"],
        objectives: ["Explain the importance of transport to business", "Compare modes of transport", "State factors in choosing a mode of transport", "Identify transport documents"],
        lesson: {
          title: "Moving Goods for Business",
          summary: "Compare transport modes and choose suitable ones for business.",
          minutes: 40,
          notes: `## Importance
**Transport** moves goods and people from where they are to where they are needed. It creates **place utility**, widens markets, supports specialisation and mass production, links producers and consumers, and creates jobs.

## Modes of transport
| Mode | Advantages | Disadvantages |
|---|---|---|
| **road** | door-to-door; flexible; good for short distances | congestion, accidents, bad roads |
| **rail** | cheap for bulky goods over long distances | fixed routes; limited network |
| **water** (sea, inland waterways) | cheapest for bulky, heavy goods internationally | slow; needs ports |
| **air** | fastest; good for perishable and valuable goods | most expensive; limited capacity |
| **pipeline** | cheap and continuous for liquids and gases | expensive to build; vandalism |

## Factors in choosing a mode
cost; speed/urgency; nature of goods (perishable, fragile, bulky, valuable); distance; safety and security; availability; convenience; insurance.

## Transport documents
| Document | Used in |
|---|---|
| **consignment note / waybill** | road and rail transport |
| **bill of lading** | sea transport (receipt for goods, contract of carriage, document of title) |
| **air waybill** | air transport |
| **delivery note** | accompanying goods to the buyer |`,
          examples: `**Example 1.** Which mode is best for sending fresh flowers abroad quickly? *Answer:* **air transport**.

**Example 2.** Which transport document is used for sea transport? *Answer:* the **bill of lading**.

**Example 3.** Name one factor in choosing a mode of transport. *Answer:* **cost** (or speed, nature of goods).`,
        },
        questions: [
          ["E", "The movement of goods and people from one place to another is", "transport", "warehousing", "banking", "advertising", "Transport moves goods."],
          ["E", "The fastest mode of transport over long distances is", "air", "road", "water", "rail", "Aircraft are fastest."],
          ["E", "Which mode offers door-to-door service?", "road", "air", "sea", "pipeline", "Vehicles reach premises directly."],
          ["M", "The document used in sea transport is the", "bill of lading", "air waybill", "consignment note", "invoice only", "It covers goods shipped by sea."],
          ["M", "The document used in air transport is the", "air waybill", "bill of lading", "delivery note only", "receipt", "It accompanies air cargo."],
          ["M", "The cheapest mode for transporting heavy goods internationally is", "sea transport", "air transport", "road transport", "motorcycles", "Ships carry large loads cheaply."],
          ["M", "Crude oil is best transported over land by", "pipeline", "motorcycle", "air", "bicycle", "Pipelines move liquids continuously."],
          ["H", "Fresh flowers to be sold abroad the next day should be sent by", "air", "sea", "rail", "pipeline", "Perishable goods need speed."],
          ["H", "Transport creates place utility because it", "makes goods available where they are needed", "stores goods over time", "changes the form of goods", "reduces goods", "Location adds value."],
          ["H", "A document that serves as a receipt, contract of carriage and document of title for sea cargo is the", "bill of lading", "air waybill", "delivery note", "credit note", "It has three functions."],
        ],
      },
      {
        week: 6,
        title: "Introduction to insurance",
        subtopics: ["Meaning of insurance", "Principles of insurance", "Types of insurance", "Importance of insurance to business"],
        objectives: ["Explain insurance", "State the principles of insurance", "Identify types of insurance", "Explain the importance of insurance to business"],
        lesson: {
          title: "Protecting Against Risk",
          summary: "Explain insurance, its principles and types.",
          minutes: 40,
          notes: `## Meaning
**Insurance** is an arrangement in which a person or business (the **insured**) pays a regular sum called a **premium** to an **insurer** (insurance company), which agrees to **compensate** the insured for specified losses.
It works by **pooling of risks**: many people contribute, and the few who suffer losses are compensated.
The contract document is the **policy**.

## Principles of insurance
| Principle | Meaning |
|---|---|
| **utmost good faith (uberrimae fidei)** | both parties must disclose all important facts truthfully |
| **insurable interest** | the insured must suffer financial loss if the insured item is damaged |
| **indemnity** | the insured is restored to the financial position before the loss — no profit from insurance |
| **subrogation** | after compensation, the insurer takes over the insured's rights against third parties |
| **contribution** | where property is insured with several insurers, they share the compensation |
| **proximate cause** | the loss must be caused directly by an insured risk |

## Types of insurance
- **life assurance** (whole life, endowment, term)
- **motor insurance** (third-party is compulsory in Nigeria)
- **fire insurance**
- **marine insurance** (ships and cargo)
- **burglary/theft insurance**
- **health insurance**
- **fidelity guarantee** (against dishonest employees)
- **goods-in-transit** insurance

## Importance to business
protection against losses; confidence to invest; security for loans; continuity after disasters; encourages trade; insurers invest premiums in the economy.
Insurance in Nigeria is regulated by **NAICOM** (National Insurance Commission).`,
          examples: `**Example 1.** What is a premium? *Answer:* The **regular payment** made by the insured to the insurer.

**Example 2.** Which principle prevents the insured from making a profit from insurance? *Answer:* **indemnity**.

**Example 3.** Which type of motor insurance is compulsory in Nigeria? *Answer:* **third-party** insurance.`,
        },
        questions: [
          ["E", "The regular payment made by the insured to the insurer is the", "premium", "policy", "claim", "dividend", "Premiums fund the pool."],
          ["E", "The document containing the insurance contract is the", "policy", "invoice", "receipt", "bill of lading", "It sets out the terms."],
          ["E", "Insurance protects businesses against", "financial losses from risks", "all profits", "taxes", "competition", "It compensates losses."],
          ["M", "The principle that requires both parties to disclose all important facts is", "utmost good faith", "indemnity", "subrogation", "contribution", "Honesty is essential."],
          ["M", "The principle that restores the insured to the position before the loss is", "indemnity", "subrogation", "insurable interest", "proximate cause", "No profit from insurance."],
          ["M", "A person must suffer financial loss from damage to the insured item. This is", "insurable interest", "subrogation", "contribution", "good faith", "Only those with an interest can insure."],
          ["M", "The type of motor insurance that is compulsory in Nigeria is", "third-party insurance", "comprehensive insurance only", "marine insurance", "life assurance", "It covers damage to others."],
          ["H", "After compensating the insured, the insurer takes over his rights against third parties. This is", "subrogation", "contribution", "indemnity", "utmost good faith", "The insurer steps into the insured's shoes."],
          ["H", "Insurance against losses caused by dishonest employees is", "fidelity guarantee", "marine insurance", "fire insurance", "life assurance", "It covers staff fraud."],
          ["H", "The body that regulates insurance in Nigeria is", "NAICOM", "NAFDAC", "NCC", "CBN only", "National Insurance Commission."],
        ],
      },
    ],
  },
  {
    classCode: "JSS2",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Business correspondence",
        subtopics: ["Meaning of business correspondence", "Parts of a business letter", "Types of business letters", "Qualities of a good business letter"],
        objectives: ["Explain business correspondence", "Identify the parts of a business letter", "Identify types of business letters", "State the qualities of a good business letter"],
        lesson: {
          title: "Writing Business Letters",
          summary: "Write clear, correctly laid-out business letters.",
          minutes: 45,
          notes: `## Meaning
**Business correspondence** is **written communication** between a business and other parties (customers, suppliers, banks, government) through letters, emails and memos.

## Parts of a business letter
1. **letterhead** (name, address, phone, email, logo of the business)
2. **reference** (e.g. Our Ref: SAL/23/045)
3. **date**
4. **inside address** (receiver's name and address)
5. **salutation** (Dear Sir/Madam, Dear Mr Obi)
6. **subject heading** (e.g. ORDER FOR OFFICE CHAIRS)
7. **body** (introduction, details, conclusion)
8. **complimentary close** (Yours faithfully / Yours sincerely)
9. **signature**, **name** and **designation**
10. **enclosures** (Encl.) and **copies** (cc), where needed

## Types of business letters
enquiry, quotation (reply to enquiry), order, acknowledgement, complaint, adjustment (reply to complaint), collection (demand for payment), circular letters, application letters, sales letters.

## Qualities of a good business letter (the 7 Cs)
**clear**, **concise**, **correct**, **complete**, **courteous**, **considerate**, **concrete** (specific).
Also: neat layout, good paper, correct spelling and grammar, prompt reply.

## Layout styles
**blocked** (all lines start at the left margin; most common) and **semi-blocked/indented**.`,
          examples: `**Example 1.** A letter asking a supplier for prices of goods is a **letter of enquiry**.

**Example 2.** Name two parts of a business letter. *Answer:* **letterhead** and **subject heading** (or salutation).

**Example 3.** In which layout style do all lines start at the left margin? *Answer:* **blocked** style.`,
        },
        questions: [
          ["E", "Written communication between a business and other parties is", "business correspondence", "warehousing", "insurance", "retailing", "It includes letters and emails."],
          ["E", "The printed name, address and logo at the top of a business letter is the", "letterhead", "salutation", "complimentary close", "enclosure", "It identifies the sender."],
          ["E", "A letter asking a supplier for prices is a letter of", "enquiry", "complaint", "collection", "adjustment", "It seeks information."],
          ["M", "A letter written in reply to an enquiry, stating prices and terms, is a", "quotation", "collection letter", "complaint", "circular", "It quotes prices."],
          ["M", "A letter demanding payment from a debtor is a", "collection letter", "letter of enquiry", "order letter", "sales letter", "It collects debts."],
          ["M", "The layout style in which all lines start at the left margin is", "blocked", "indented", "centred", "diagonal", "It is the most common style."],
          ["M", "'Yours faithfully' is part of the", "complimentary close", "salutation", "letterhead", "subject heading", "It ends the letter."],
          ["H", "A reply to a letter of complaint that offers a solution is an", "adjustment letter", "enquiry", "quotation", "order", "It adjusts the problem."],
          ["H", "The abbreviation 'Encl.' at the end of a letter indicates", "that documents are enclosed", "the date", "the reference", "the salutation", "Attachments are included."],
          ["H", "Which is one of the 7 Cs of a good business letter?", "concise", "confusing", "careless", "contradictory", "Letters should be brief and clear."],
        ],
      },
      {
        week: 2,
        title: "Handling mail",
        subtopics: ["Incoming mail procedure", "Outgoing mail procedure", "Mail registers", "Electronic mail etiquette"],
        objectives: ["Describe the procedure for handling incoming mail", "Describe the procedure for handling outgoing mail", "Explain the use of mail registers", "Practise good email etiquette"],
        lesson: {
          title: "Managing Office Mail",
          summary: "Handle incoming and outgoing mail efficiently and use email properly.",
          minutes: 40,
          notes: `## Incoming mail procedure
1. **collect** mail from the post office box, courier or dispatch
2. **sort** mail: private/confidential (unopened), urgent, ordinary
3. **open** ordinary mail with a letter opener
4. **check** enclosures; note missing items
5. **date-stamp** each letter (date received)
6. **record** in the **incoming mail register**
7. **distribute** to the right departments/officers
8. **file** after action

## Outgoing mail procedure
1. **collect** letters from departments
2. **check** signatures, addresses and enclosures
3. **fold and insert** into envelopes; seal
4. **weigh** and **stamp** or **frank**
5. **record** in the **outgoing mail (dispatch) register**
6. **dispatch** by post, courier or dispatch rider; keep **copies** on file

## Mail registers
**Incoming mail register**: date received, sender, subject, department, signature of receiver.
**Outgoing mail register**: date, addressee, subject, postage cost, mode of dispatch.
They provide a **record** and help **trace** mail.

## Mail room equipment
letter opener, date stamp, franking machine, weighing scale, sorting trays, folding and inserting machine, envelope sealer.

## Email etiquette
clear **subject line**; polite greeting and closing; short, clear message; check spelling; do not use all capitals (it looks like shouting); attach files correctly; reply promptly; use **cc** for copies and **bcc** to hide recipients' addresses; do not forward confidential messages.`,
          examples: `**Example 1.** What should be done with mail marked "confidential"? *Answer:* It should be **delivered unopened** to the addressee.

**Example 2.** Why is incoming mail date-stamped? *Answer:* To show **when it was received**.

**Example 3.** Why should emails not be typed in all capitals? *Answer:* It looks like **shouting**.`,
        },
        questions: [
          ["E", "Mail marked 'confidential' should be", "delivered unopened to the addressee", "opened and read by the clerk", "thrown away", "posted on the notice board", "Confidential mail is private."],
          ["E", "Stamping the date on incoming letters shows", "when they were received", "who wrote them", "their cost", "their weight", "It records receipt."],
          ["E", "Mail sent out of an office is called", "outgoing mail", "incoming mail", "petty cash", "stock", "It leaves the office."],
          ["M", "The book in which received letters are recorded is the", "incoming mail register", "outgoing mail register", "cash book", "sales day book", "It logs incoming mail."],
          ["M", "Printing postage on letters by machine is", "franking", "filing", "shredding", "scanning", "A franking machine replaces stamps."],
          ["M", "Before dispatching letters, the mail clerk should check", "signatures, addresses and enclosures", "the weather", "staff salaries", "the stock level", "Errors must be corrected."],
          ["M", "In email, 'cc' is used to", "send a copy to other recipients", "delete the message", "hide the subject", "encrypt the message", "Carbon copy informs others."],
          ["H", "The email feature that hides recipients' addresses from one another is", "bcc", "cc", "subject line", "reply-all", "Blind carbon copy protects privacy."],
          ["H", "Why should the mail clerk check enclosures when opening letters?", "to note any missing documents", "to remove them permanently", "to keep them for himself", "it is not necessary", "Missing items must be reported."],
          ["H", "The outgoing mail register helps to", "trace letters sent and control postage costs", "record sales", "pay wages", "file receipts", "It is a dispatch record."],
        ],
      },
      {
        week: 3,
        title: "Reception and telephone skills",
        subtopics: ["Duties of a receptionist", "Qualities of a good receptionist", "Handling visitors", "Telephone techniques"],
        objectives: ["State the duties of a receptionist", "Describe the qualities of a good receptionist", "Handle visitors correctly", "Use correct telephone techniques"],
        lesson: {
          title: "First Impressions Count",
          summary: "Receive visitors and handle telephone calls professionally.",
          minutes: 40,
          notes: `## Duties of a receptionist
- **welcome** visitors and attend to their enquiries
- keep the **visitors' register** and issue visitor passes
- **direct** visitors to the right officers
- answer and **transfer** telephone calls; take **messages**
- keep the **appointments diary**
- receive parcels and letters
- keep the reception area tidy
- provide information about the organisation

## Qualities of a good receptionist
pleasant personality and **smile**, courtesy and patience, neat appearance, good **communication** skills, tact and discretion, good memory for names and faces, honesty, **confidentiality**, calmness under pressure, knowledge of the organisation.

## Handling visitors
greet promptly and politely; ask for name, organisation and purpose; check appointments; record details in the register; inform the officer; offer a seat while waiting; handle difficult visitors calmly; never give confidential information.

## Telephone techniques
- answer promptly (within three rings)
- greet and identify the organisation: *"Good morning, Precious Stores, Ada speaking. How may I help you?"*
- speak **clearly** and politely
- **listen** carefully; take notes
- take **messages** accurately: caller's name, number, date, time, message, and who took it
- confirm details by reading them back
- transfer calls properly; do not leave callers on hold for long
- end politely and let the caller hang up first`,
          examples: `**Example 1.** How should a receptionist answer the phone? *Answer:* **"Good morning, [organisation], [name] speaking. How may I help you?"**

**Example 2.** Name two details to include in a telephone message. *Answer:* **caller's name** and **phone number** (or date, time, message).

**Example 3.** Where are visitors' details recorded? *Answer:* in the **visitors' register**.`,
        },
        questions: [
          ["E", "The office worker who welcomes visitors is the", "receptionist", "store keeper", "cashier", "accountant", "Receptionists are the first contact."],
          ["E", "Visitors' details are recorded in the", "visitors' register", "cash book", "sales ledger", "petty cash book", "It records visits."],
          ["E", "A telephone call should be answered", "promptly and politely", "rudely", "after many rings", "without greeting", "Courtesy creates a good image."],
          ["M", "Which is a quality of a good receptionist?", "tact and discretion", "rudeness", "untidiness", "impatience", "Tact handles visitors well."],
          ["M", "A telephone message should include", "the caller's name and number", "the receptionist's hobbies", "the weather", "unrelated gossip", "The officer needs to call back."],
          ["M", "The book used to schedule meetings for officers is the", "appointments diary", "cash book", "stock book", "petty cash book", "It records appointments."],
          ["M", "When a visitor must wait, the receptionist should", "offer a seat politely", "ignore the visitor", "send the visitor away", "give confidential files to read", "Hospitality matters."],
          ["H", "Reading back a telephone message to the caller helps to", "confirm accuracy", "waste time", "annoy the caller", "end the call quickly", "Errors can be corrected."],
          ["H", "A receptionist asked for confidential information by a visitor should", "politely decline and refer to the appropriate officer", "give all details", "shout at the visitor", "ask the visitor to leave rudely", "Confidentiality must be kept."],
          ["H", "A good greeting when answering a business call is", "\"Good morning, Precious Stores, Ada speaking. How may I help you?\"", "\"Yes? What do you want?\"", "\"Hello, who is this?\"", "\"I'm busy, call later.\"", "It is polite and identifies the organisation."],
        ],
      },
      {
        week: 4,
        title: "Banking services and accounts",
        subtopics: ["Types of bank accounts", "Opening a bank account", "Cheques and their types", "Electronic banking"],
        objectives: ["Distinguish types of bank accounts", "Describe the procedure for opening a bank account", "Identify types of cheques", "Describe electronic banking services"],
        lesson: {
          title: "Using Banks in Business",
          summary: "Describe bank accounts, cheques and electronic banking.",
          minutes: 45,
          notes: `## Types of bank accounts
| Account | Features |
|---|---|
| **current account** | for businesses; cheque book; overdraft possible; usually no interest |
| **savings account** | for saving; earns **interest**; limited withdrawals |
| **fixed (time) deposit** | money kept for a fixed period; higher interest; penalty for early withdrawal |
| **domiciliary account** | foreign currency |

## Opening an account
fill an account-opening form; provide **identification** (NIN, passport, driver's licence, voter's card); **BVN**; passport photographs; utility bill (proof of address); references for current accounts; business registration documents (CAC) for businesses; initial deposit.

## Cheques
A **cheque** is a **written order** by an account holder (**drawer**) to a bank (**drawee**) to pay a stated sum to a named person (**payee**).
| Type | Feature |
|---|---|
| **open (bearer) cheque** | can be cashed over the counter |
| **crossed cheque** | two parallel lines; must be paid into a bank account (safer) |
| **order cheque** | payable to the named payee or as ordered |
| **post-dated cheque** | dated in the future; cannot be paid until that date |
| **stale cheque** | presented after the validity period (usually 6 months) |
| **dishonoured (bounced) cheque** | refused due to insufficient funds or errors |

## Electronic banking
ATMs; **POS** terminals; internet and **mobile banking**; USSD codes; electronic transfers (NIP); debit cards; direct debits; online payment gateways.
Safety: never share **PIN, OTP or passwords**; use secure networks; beware of fraudsters.`,
          examples: `**Example 1.** Which account is best for a business that issues cheques? *Answer:* a **current account**.

**Example 2.** What makes a cheque crossed? *Answer:* **Two parallel lines** drawn across it; it must be paid into a bank account.

**Example 3.** Who is the drawer of a cheque? *Answer:* the **account holder** who writes and signs it.`,
        },
        questions: [
          ["E", "A bank account mainly for saving that earns interest is a", "savings account", "current account", "domiciliary account only", "cheque account", "Savings earn interest."],
          ["E", "An account holder instructs his bank in writing to pay a named person. The document used is a", "cheque", "receipt", "invoice", "memo", "The drawer signs it."],
          ["E", "A device used to pay with a card in shops is a", "POS terminal", "photocopier", "shredder", "franking machine", "Point of sale terminals accept cards."],
          ["M", "The account usually used by businesses and which comes with a cheque book is the", "current account", "savings account", "fixed deposit", "school account", "It allows frequent transactions."],
          ["M", "The person who writes and signs a cheque is the", "drawer", "payee", "drawee", "bank manager", "The drawer orders payment."],
          ["M", "The person to whom a cheque is payable is the", "payee", "drawer", "drawee", "teller", "The payee receives the money."],
          ["M", "A cheque with two parallel lines across it is a", "crossed cheque", "open cheque", "stale cheque", "post-dated cheque", "It must be paid into an account."],
          ["H", "A cheque presented after its validity period is", "stale", "crossed", "post-dated", "open", "Banks refuse stale cheques."],
          ["H", "A cheque refused by the bank because of insufficient funds is", "dishonoured", "crossed", "certified", "stale", "The cheque bounces."],
          ["H", "A deposit kept for a fixed period at a higher interest rate is a", "fixed deposit", "current account", "savings account with daily withdrawals", "overdraft", "Early withdrawal attracts a penalty."],
        ],
      },
      {
        week: 5,
        title: "Keyboarding: typing business documents",
        subtopics: ["Word processing basics", "Formatting a business letter", "Typing a memo", "Proofreading and correction"],
        objectives: ["Use basic word-processing features", "Format a business letter on a computer", "Type a memorandum correctly", "Proofread and correct typed documents"],
        lesson: {
          title: "Producing Business Documents on a Computer",
          summary: "Use a word processor to produce correctly formatted business documents.",
          minutes: 45,
          notes: `## Word processing basics
A **word processor** (e.g. Microsoft Word, Google Docs, LibreOffice Writer) is software for creating, editing, formatting, saving and printing documents.
Common features:
- **editing**: cut (Ctrl + X), copy (Ctrl + C), paste (Ctrl + V), undo (Ctrl + Z)
- **formatting**: bold (Ctrl + B), italic (Ctrl + I), underline (Ctrl + U), font type and size, alignment (left, centre, right, justify), line spacing
- **page setup**: margins, paper size (A4), orientation (portrait/landscape)
- **spell check** and grammar check
- **save** (Ctrl + S) and **print** (Ctrl + P)
- tables, bullets and numbering, headers and footers

## Formatting a business letter (blocked style)
- use A4 paper, margins of about 25 mm
- single line spacing within paragraphs; one blank line between paragraphs
- all lines start at the left margin
- use a clear font (e.g. Arial or Times New Roman, 11–12 point)
- subject heading in **bold** or capitals

## Typing a memo
**MEMORANDUM**
To: … From: … Date: … Subject: …
(then the message; no salutation or complimentary close)

## Proofreading
read the document carefully after typing; check spelling, figures, names, dates, punctuation and layout; use spell check but do not rely on it alone; common proofreading marks: insert (^), delete, new paragraph, capital letter.`,
          examples: `**Example 1.** Which shortcut saves a document? *Answer:* **Ctrl + S**.

**Example 2.** Does a memo have a salutation? *Answer:* **No** — it has To, From, Date and Subject.

**Example 3.** Why should you proofread even after using spell check? *Answer:* Spell check **misses correct words used wrongly** (e.g. "their" for "there").`,
        },
        questions: [
          ["E", "Software for creating and editing documents is a", "word processor", "calculator", "franking machine", "shredder", "It handles text documents."],
          ["E", "The shortcut to save a document is", "Ctrl + S", "Ctrl + P", "Ctrl + B", "Ctrl + Z", "S stands for save."],
          ["E", "The shortcut to make text bold is", "Ctrl + B", "Ctrl + U", "Ctrl + I", "Ctrl + C", "B stands for bold."],
          ["M", "The shortcut to undo the last action is", "Ctrl + Z", "Ctrl + X", "Ctrl + V", "Ctrl + A", "It reverses the last step."],
          ["M", "A memo does NOT usually include a", "salutation", "date", "subject", "To and From lines", "Memos are internal and brief."],
          ["M", "The standard paper size for business letters in Nigeria is", "A4", "A0", "A6", "B8", "A4 is 210 mm × 297 mm."],
          ["M", "Aligning text evenly along both margins is called", "justification", "centring", "indenting", "underlining", "Justify aligns both edges."],
          ["H", "Why should typists proofread even after using spell check?", "Spell check may miss correct words used wrongly.", "Spell check changes every word.", "Proofreading is never needed.", "Spell check adds errors deliberately.", "Homophones can pass spell check."],
          ["H", "Changing a page from portrait to landscape changes its", "orientation", "font", "margin only", "spelling", "Orientation affects page direction."],
          ["H", "The shortcut Ctrl + V is used to", "paste", "cut", "copy", "print", "It inserts copied content."],
        ],
      },
      {
        week: 6,
        title: "Introduction to entrepreneurship",
        subtopics: ["Meaning of entrepreneurship", "Qualities of an entrepreneur", "Identifying business opportunities", "Starting a small business"],
        objectives: ["Explain entrepreneurship", "Describe the qualities of an entrepreneur", "Identify business opportunities in the environment", "Outline steps in starting a small business"],
        lesson: {
          title: "Becoming an Entrepreneur",
          summary: "Identify business opportunities and outline how to start a small business.",
          minutes: 45,
          notes: `## Meaning
**Entrepreneurship** is the process of **identifying a business opportunity**, gathering resources and **starting and managing a business** while bearing risks, in order to make profit and meet needs.
An **entrepreneur** is a person who does this.

## Qualities of an entrepreneur
creativity and innovation, **risk-taking**, initiative, self-confidence, hard work, perseverance, good **financial management**, integrity, **customer focus**, leadership, ability to learn from failure.

## Identifying opportunities
Look for **problems people want solved** or **needs not met** in your environment:
- food: snacks, catering, packaged water, fruit juice
- services: hairdressing, laundry, phone repair, tutoring, event decoration
- agriculture: poultry, fish farming, vegetable gardening
- technology: graphic design, web design, social media management
- crafts: tailoring, bead making, shoe making, soap making
Sources of ideas: hobbies and skills, customers' complaints, market surveys, trends, government programmes.

## Steps in starting a small business
1. identify the idea and **survey the market**
2. write a simple **business plan** (product, customers, competitors, costs, prices, profit)
3. raise **capital** (savings, family, cooperative societies, microfinance loans, grants)
4. **register** the business with the **CAC** (Corporate Affairs Commission)
5. choose a **location** and obtain equipment
6. **market** the product
7. keep **records** and manage finances
8. review and grow the business

## Simple profit calculation
**Profit = sales (revenue) − total costs**
*Example: selling 100 bottles of zobo at ₦300 = ₦30,000; costs ₦18,000; profit = ₦12,000.*`,
          examples: `**Example 1.** A student notices classmates want affordable snacks and starts selling homemade chin-chin. What is this? *Answer:* **identifying a business opportunity** (entrepreneurship).

**Example 2.** Sales ₦30,000; costs ₦18,000. Find the profit. *Answer:* **₦12,000**.

**Example 3.** Which body registers businesses in Nigeria? *Answer:* the **Corporate Affairs Commission (CAC)**.`,
        },
        questions: [
          ["E", "The process of identifying an opportunity and starting a business is", "entrepreneurship", "retirement", "taxation", "consumption", "Entrepreneurs start businesses."],
          ["E", "Which is a quality of an entrepreneur?", "creativity", "laziness", "fear of all risk", "dishonesty", "Entrepreneurs create solutions."],
          ["E", "Businesses in Nigeria are registered with the", "Corporate Affairs Commission", "INEC", "NDLEA", "FRSC", "The CAC registers businesses."],
          ["M", "A document that describes a business idea, costs, customers and expected profit is a", "business plan", "receipt", "memo", "invoice", "It guides the business."],
          ["M", "Sales of ₦30,000 and costs of ₦18,000 give a profit of", "₦12,000", "₦48,000", "₦18,000", "₦30,000", "₦30,000 − ₦18,000 = ₦12,000."],
          ["M", "Finding out what customers want before starting a business is", "market survey", "hoarding", "adulteration", "shredding", "It reduces risk."],
          ["M", "Which is a source of capital for a small business?", "personal savings", "stealing", "gambling", "evading tax", "Savings fund start-ups lawfully."],
          ["H", "Why is risk-taking a quality of entrepreneurs?", "Starting a business involves uncertainty about success.", "Businesses never fail.", "Risk guarantees profit.", "Entrepreneurs avoid all decisions.", "Profit rewards risk."],
          ["H", "A good business idea usually", "solves a problem or meets an unmet need", "copies a failing business exactly", "ignores customers", "has no market", "Needs create demand."],
          ["H", "Keeping records in a small business helps the owner to", "know whether the business is making profit", "hide money", "avoid customers", "stop sales", "Records show performance."],
        ],
      },
    ],
  },
];
