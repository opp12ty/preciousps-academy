import type { TermPlan } from "../types";

/** SS3 Financial Accounting, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Consignment Account: Meaning and Features",
      subtopics: ["Meaning of consignment and parties involved", "Features of consignment", "Pro forma invoice and account sales", "Terms: commission, del credere, normal and abnormal loss"],
      objectives: ["Define consignment, consignor and consignee", "State the features of a consignment and distinguish it from a sale", "Explain the pro forma invoice and the account sales", "Explain ordinary and del credere commission and normal and abnormal losses"],
      lesson: {
        title: "Understanding Consignment",
        summary: "The nature of goods sent to an agent for sale, and the documents and terms involved.",
        minutes: 40,
        notes: `## Meaning
A **consignment** is the sending of goods by their owner to an **agent**, who sells them on the owner's behalf for a **commission**.

- **Consignor** — the **owner (principal)** who sends the goods.
- **Consignee** — the **agent** who receives and sells them.
- The goods sent are **consignment outward** to the consignor and **consignment inward** to the consignee.

## Features of consignment
1. The relationship is that of **principal and agent**, not seller and buyer.
2. **Ownership** of the goods remains with the **consignor** until they are sold to a third party.
3. The **risk** of loss remains with the consignor.
4. The consignee sells at the consignor's risk and is rewarded by **commission**.
5. The consignee is reimbursed for expenses incurred on the goods.
6. **Unsold goods** belong to the consignor and may be returned.
7. The consignee renders an **account sales** periodically.
8. Profit or loss on the consignment belongs to the consignor.

## Consignment and sale compared
| | Consignment | Sale |
|---|---|---|
| **relationship** | principal and agent | seller and buyer |
| **ownership** | stays with consignor | passes to buyer |
| **risk** | borne by consignor | borne by buyer |
| **document** | pro forma invoice | invoice |
| **unsold goods** | returnable | not returnable (normally) |
| **reward** | consignee earns commission | buyer earns profit on resale |
| **account sales** | rendered | not rendered |

## Documents
### Pro forma invoice
Sent by the **consignor** with the goods. It shows the description, quantity and the price at which the goods should be sold. It is **not a demand for payment** — it does not make the consignee a debtor.

### Account sales
A statement sent by the **consignee** to the consignor showing
- **gross proceeds** of sales,
- less **expenses** paid by the consignee,
- less **commission**,
- less any advance or remittance already made,
- the **balance due** to the consignor.

**Illustration**
| Account sales | ₦ | ₦ |
|---|---|---|
| Gross proceeds: 80 bags at ₦5,000 | | 400,000 |
| Less: landing charges | 12,000 | |
| storage | 8,000 | |
| commission 5% of ₦400,000 | 20,000 | 40,000 |
| **Net proceeds due to consignor** | | **360,000** |

## Terms
- **Ordinary commission** — the agent's reward, usually a percentage of **gross sales**.
- **Del credere commission** — an **extra** commission paid to a consignee who **guarantees payment** by credit customers. A del credere agent **bears any bad debts**.
- **Over-riding commission** — extra commission for selling above a set price.
- **Recurring expenses** — incurred after the goods reach the consignee's premises (storage, selling costs). **Non-recurring expenses** — incurred in getting the goods there (freight, insurance, carriage, customs duty); these are added to cost when valuing unsold stock.
- **Normal loss** — unavoidable loss from the nature of the goods (evaporation, leakage, shrinkage). It is **absorbed** by the remaining good units.
- **Abnormal loss** — avoidable or accidental loss (fire, theft, accident in transit). It is valued and **credited to the consignment account**, then charged to profit and loss (less any insurance claim).`,
        examples: `**Example 1.** A consignee sells goods for ₦600,000 and is entitled to 5% ordinary commission and 2% del credere commission. Find the total commission. *Answer:* $7\\% \\times 600\\,000 = \\mathbf{₦42,000}$.

**Example 2.** Who owns consigned goods that remain unsold? *Answer:* the **consignor**.

**Example 3.** Who bears a bad debt when a del credere commission is paid? *Answer:* the **consignee**.`,
      },
      questions: [
        ["E", "The owner who sends goods to an agent for sale is the", "consignor", "consignee", "debtor", "underwriter", "The consignor is the principal."],
        ["E", "The agent who receives goods on consignment is the", "consignee", "consignor", "creditor", "drawer", "The consignee sells on behalf of the owner."],
        ["E", "The statement sent by the consignee to the consignor showing sales, expenses and commission is the", "account sales", "pro forma invoice", "debit note", "bill of lading", "It shows the net proceeds due."],
        ["M", "The document sent by the consignor with the goods, which is not a demand for payment, is the", "pro forma invoice", "account sales", "credit note", "statement of account", "It informs the agent of particulars and expected price."],
        ["M", "The relationship between a consignor and a consignee is that of", "principal and agent", "seller and buyer", "debtor and creditor", "partners", "Ownership does not pass to the consignee."],
        ["M", "A commission paid to a consignee for guaranteeing payment by credit customers is", "del credere commission", "ordinary commission", "over-riding commission", "underwriting commission", "The del credere agent bears bad debts."],
        ["M", "Loss of goods on consignment through evaporation is", "a normal loss", "an abnormal loss", "a bad debt", "a commission", "It is unavoidable and absorbed by the good units."],
        ["H", "A consignee sold goods for ₦800,000, paid expenses of ₦30,000 and is entitled to 5% commission on gross sales. The net proceeds due to the consignor are", "₦730,000", "₦760,000", "₦770,000", "₦731,500", "800,000 − 30,000 − 40,000."],
        ["H", "Where a consignee receives del credere commission, bad debts arising from credit sales are borne by the", "consignee", "consignor", "customer's banker", "insurer", "That is what the extra commission pays for."],
        ["H", "Which of these is a non-recurring expense on a consignment?", "Freight to the consignee's port", "Storage at the consignee's warehouse", "Selling expenses", "Advertising by the consignee", "It is incurred in getting the goods to the consignee."],
      ],
      jamb: [
        ["M", "Goods on consignment that remain unsold at the end of the period are the property of the", "consignor", "consignee", "customers", "carrier", "Ownership stays with the principal until sale."],
        ["H", "A consignee is entitled to 4% ordinary commission and 1% del credere commission on gross sales of ₦1,200,000. The total commission is", "₦60,000", "₦48,000", "₦12,000", "₦72,000", "5% of ₦1,200,000."],
      ],
    },
    {
      week: 2,
      title: "Consignment Account: Accounting Treatment",
      subtopics: ["Entries in the consignor's books", "Valuation of unsold stock", "Treatment of abnormal loss", "Entries in the consignee's books"],
      objectives: ["Prepare the consignment account, consignee's account and goods sent on consignment account", "Value unsold stock on consignment", "Account for abnormal loss", "Record a consignment in the consignee's books"],
      lesson: {
        title: "Recording Consignments",
        summary: "The ledger accounts kept by consignor and consignee, with stock valuation and losses.",
        minutes: 40,
        notes: `## Accounts in the consignor's books
1. **Consignment account** — a **nominal** account (a special trading and profit and loss account) for each consignment; it shows the profit or loss.
2. **Consignee's account** — a **personal** account showing what the agent owes.
3. **Goods sent on consignment account** — a **real** account; its balance is transferred to the **credit of the trading account**.

## Journal entries (consignor)
| Transaction | Debit | Credit |
|---|---|---|
| goods sent, at cost | Consignment a/c | Goods sent on consignment a/c |
| expenses paid by consignor | Consignment a/c | Bank / Cash |
| sales reported by consignee | Consignee's a/c | Consignment a/c |
| expenses paid by consignee | Consignment a/c | Consignee's a/c |
| commission due to consignee | Consignment a/c | Consignee's a/c |
| remittance received | Bank / Bills receivable | Consignee's a/c |
| unsold stock | Stock on consignment a/c | Consignment a/c |
| abnormal loss | Abnormal loss (P & L) a/c | Consignment a/c |
| profit on consignment | Consignment a/c | Profit and loss a/c |

## Valuation of unsold stock
Unsold stock is valued at **cost plus a proportion of the non-recurring expenses** (those incurred in getting the goods to the consignee — freight, insurance, carriage, landing charges, duty). Selling expenses and commission are **excluded**.

$$\\text{value of unsold stock} = \\frac{\\text{units unsold}}{\\text{total units}} \\times (\\text{cost} + \\text{non-recurring expenses})$$

If market value is lower, use the lower figure.

## Abnormal loss
Valued on the same basis as stock — cost plus a proportion of expenses incurred **up to the point of loss**. Credit the consignment account; debit the insurance company with any claim admitted and profit and loss with the rest.

**Normal loss** is not valued separately: the total cost is spread over the **remaining good units**, which raises the cost per unit.

## Worked illustration
Ade of Lagos consigned **100 cartons** costing **₦10,000 each** to Bala of Kano. Ade paid freight and insurance of **₦50,000**. Bala paid landing charges **₦30,000** and selling expenses **₦20,000**, and sold **80 cartons at ₦15,000** each. His commission is **5%** of sales. He remitted the balance.

**Stock:** $\\dfrac{20}{100} \\times (1\\,000\\,000 + 50\\,000 + 30\\,000) = ₦216,000$

**Consignment to Kano account**
| Dr | ₦ | Cr | ₦ |
|---|---|---|---|
| Goods sent on consignment | 1,000,000 | Bala — sales | 1,200,000 |
| Bank — freight and insurance | 50,000 | Stock on consignment c/d | 216,000 |
| Bala — landing charges | 30,000 | | |
| Bala — selling expenses | 20,000 | | |
| Bala — commission | 60,000 | | |
| Profit to P & L | 256,000 | | |
| | **1,416,000** | | **1,416,000** |

**Bala's account**
| Dr | ₦ | Cr | ₦ |
|---|---|---|---|
| Consignment — sales | 1,200,000 | Consignment — landing charges | 30,000 |
| | | Consignment — selling expenses | 20,000 |
| | | Consignment — commission | 60,000 |
| | | Bank — remittance | 1,090,000 |
| | **1,200,000** | | **1,200,000** |

## Consignee's books
The consignee makes **no entry for the receipt** of the goods (he does not own them) — only a memorandum record. He keeps a **consignor's account**:
- **credit** it with sales (debit cash or debtors);
- **debit** it with expenses paid, commission earned (credit commission account) and remittances.`,
        examples: `**Example 1.** 200 units costing ₦500 each were consigned; non-recurring expenses were ₦10,000. If 50 units are unsold, value the stock. *Answer:* $\\dfrac{50}{200} \\times (100\\,000 + 10\\,000) = \\mathbf{₦27,500}$.

**Example 2.** What entry records goods sent on consignment? *Answer:* **Dr Consignment a/c; Cr Goods sent on consignment a/c**.

**Example 3.** Where is the balance on the goods sent on consignment account transferred? *Answer:* to the **credit of the trading account**.`,
      },
      questions: [
        ["E", "In the consignor's books, the consignment account is a", "nominal account", "personal account", "real account", "suspense account", "It shows the profit or loss on the consignment."],
        ["E", "Goods sent on consignment are recorded by debiting the consignment account and crediting the", "goods sent on consignment account", "consignee's account", "sales account", "bank account", "The goods leave the consignor's stock at cost."],
        ["E", "Commission due to the consignee is debited to the", "consignment account", "consignee's account", "goods sent on consignment account", "bank account", "It is an expense of the consignment."],
        ["M", "Sales made by the consignee are recorded in the consignor's books by debiting", "the consignee's account", "the consignment account", "the bank account", "the sales ledger control account", "The consignee owes the proceeds."],
        ["M", "Unsold stock on consignment is valued at cost plus a proportion of", "non-recurring expenses", "selling expenses", "commission", "all expenses and expected profit", "Only expenses of getting the goods to the consignee are included."],
        ["M", "The balance on the goods sent on consignment account is transferred to the", "trading account", "balance sheet", "consignee's account", "profit and loss appropriation account", "It is credited there so that normal purchases are not overstated."],
        ["M", "On receiving goods on consignment, the consignee", "makes no ledger entry", "debits purchases", "credits the consignor with their cost", "debits stock", "He does not own the goods."],
        ["H", "400 units costing ₦1,000 each were consigned. The consignor paid freight of ₦40,000 and the consignee paid selling expenses of ₦20,000. If 100 units are unsold, the value of the stock is", "₦110,000", "₦100,000", "₦115,000", "₦105,000", "A quarter of (400,000 + 40,000)."],
        ["H", "Goods costing ₦500,000 were consigned with ₦50,000 freight. The consignee sold all for ₦750,000, paid ₦25,000 expenses and earned 10% commission. The profit on consignment is", "₦100,000", "₦175,000", "₦125,000", "₦200,000", "750,000 − (500,000 + 50,000 + 25,000 + 75,000)."],
        ["H", "The entry for an abnormal loss of goods on consignment in the consignor's books is", "Dr Abnormal loss a/c; Cr Consignment a/c", "Dr Consignment a/c; Cr Abnormal loss a/c", "Dr Consignee's a/c; Cr Consignment a/c", "Dr Goods sent on consignment a/c; Cr Bank", "The loss is taken out of the consignment account so that true profit is shown."],
      ],
      jamb: [
        ["M", "In the books of the consignee, the commission earned is credited to the", "commission account", "consignor's account", "consignment account", "cash account", "It is income of the consignee; the consignor's account is debited."],
        ["H", "500 units at ₦200 each were consigned; carriage was ₦5,000. A normal loss of 20 units occurred and 380 units were sold. The value of the unsold stock is", "₦21,875", "₦21,000", "₦20,000", "₦26,250", "Cost of ₦105,000 is spread over 480 good units; 100 unsold units are worth ₦21,875."],
      ],
    },
    {
      week: 3,
      title: "Joint Venture Account",
      subtopics: ["Meaning and features of a joint venture", "Joint venture and partnership compared", "Separate set of books method", "Memorandum joint venture account method"],
      objectives: ["Define a joint venture and state its features", "Distinguish a joint venture from a partnership", "Prepare accounts where a separate set of books is kept", "Prepare a memorandum joint venture account and the co-venturers' accounts"],
      lesson: {
        title: "Accounting for Joint Ventures",
        summary: "A temporary partnership for one undertaking, and the two methods of recording it.",
        minutes: 40,
        notes: `## Meaning
A **joint venture** is a **temporary partnership** in which two or more persons agree to carry out **one particular business undertaking** and share the profit or loss in an agreed ratio. The parties are **co-venturers**. Examples: buying and selling a shipload of rice; constructing one building; underwriting a share issue.

## Features
1. Formed for a **specific venture**; it ends when the venture ends.
2. **No firm name** is required.
3. Profits and losses are shared in an **agreed ratio** (equally if none is stated).
4. Each venturer may continue his **own separate business**.
5. Co-venturers contribute goods, cash or skill.
6. There is usually **no separate set of books**; each records his own transactions.
7. Profit is normally determined **at the end of the venture**.

## Joint venture and partnership
| | Joint venture | Partnership |
|---|---|---|
| **duration** | temporary — one venture | continuing |
| **name** | no firm name | has a firm name |
| **scope** | a single undertaking | general business |
| **books** | usually no separate books | separate set of books |
| **profit** | ascertained at the end of the venture | ascertained annually |
| **accounting** | mostly on a cash/liquidation basis | going-concern basis |
| **competition** | venturers may run competing businesses | partners normally may not |

## Method 1 — Separate set of books
Used for large ventures. Three accounts are opened:
1. **Joint bank account** — contributions in; payments out; final distribution.
2. **Joint venture account** — a nominal account: debit purchases and expenses; credit sales; the balance is profit or loss shared between the venturers.
3. **Co-venturers' (capital) accounts** — credit contributions and share of profit; debit stock taken over and final cash paid.

## Method 2 — No separate books (memorandum method)
Each venturer records **only his own** transactions in a **"Joint venture with …" account** in his own books:
- **debit** — goods he supplied and expenses he paid; his share of profit;
- **credit** — sales proceeds he received; stock he took over.

Since no single book shows the whole picture, a **memorandum joint venture account** is prepared by **combining** both venturers' accounts. It is **not part of the double entry**; it is drawn up only to find the profit or loss.

Each venturer then debits his joint venture account with **his share of profit** (crediting his profit and loss account). The balances on the two accounts are equal and opposite — one venturer **pays** the other to settle.

## Worked illustration
Chike and Dayo entered a joint venture to trade in cement, sharing profits **equally**.
- Chike bought cement for **₦600,000** and paid carriage **₦40,000**.
- Dayo paid storage **₦20,000** and selling expenses **₦10,000**.
- Dayo sold all the cement for **₦900,000**.

**Memorandum joint venture account**
| Dr | ₦ | Cr | ₦ |
|---|---|---|---|
| Purchases (Chike) | 600,000 | Sales (Dayo) | 900,000 |
| Carriage (Chike) | 40,000 | | |
| Storage (Dayo) | 20,000 | | |
| Selling expenses (Dayo) | 10,000 | | |
| Profit: Chike ½ | 115,000 | | |
| Profit: Dayo ½ | 115,000 | | |
| | **900,000** | | **900,000** |

**In Chike's books — Joint venture with Dayo:** Dr purchases 600,000, carriage 40,000, share of profit 115,000 = 755,000; no credits, so the **balance of ₦755,000 is receivable from Dayo**.

**In Dayo's books — Joint venture with Chike:** Dr storage 20,000, expenses 10,000, profit 115,000 = 145,000; Cr sales 900,000; balance **₦755,000 payable to Chike**.

## Unsold stock
Stock taken over by a venturer is **credited to the joint venture** at the agreed value and charged to that venturer.`,
        examples: `**Example 1.** In a joint venture, purchases were ₦300,000, expenses ₦50,000 and sales ₦450,000. Find each venturer's share if profit is shared 3 : 2. *Answer:* profit ₦100,000 → **₦60,000 and ₦40,000**.

**Example 2.** Is the memorandum joint venture account part of the double-entry system? *Answer:* **No** — it is prepared only to ascertain profit.

**Example 3.** State one difference between a joint venture and a partnership. *Answer:* A joint venture is **temporary, for one undertaking**; a partnership is continuing.`,
      },
      questions: [
        ["E", "A joint venture is best described as a", "temporary partnership for a specific undertaking", "limited liability company", "permanent partnership", "co-operative society", "It ends when the venture is completed."],
        ["E", "The parties to a joint venture are known as", "co-venturers", "consignors", "shareholders", "directors", "Each is a venturer in the undertaking."],
        ["E", "In the absence of agreement, profits of a joint venture are shared", "equally", "in the ratio of capital", "in the ratio of sales", "according to age", "The partnership rule applies."],
        ["M", "The memorandum joint venture account is prepared to", "ascertain the profit or loss on the venture", "record cash received only", "show the bank balance", "replace the trading account of each venturer", "It combines the transactions of all the venturers."],
        ["M", "Which of these is NOT a feature of a joint venture?", "It must have a registered firm name", "It is for a limited period", "Venturers share profit in an agreed ratio", "It is formed for a particular transaction", "No firm name is required."],
        ["M", "Where a separate set of books is kept for a joint venture, contributions by the venturers are debited to the", "joint bank account", "joint venture account", "venturers' accounts", "memorandum account", "Cash received goes into the joint bank account."],
        ["M", "Where no separate books are kept, each venturer records in his own books", "only his own transactions", "all transactions of the venture", "only the other venturer's transactions", "nothing until the venture ends", "A memorandum account then combines them."],
        ["H", "Musa and Obi shared joint venture profits 2 : 1. Purchases were ₦480,000, expenses ₦60,000 and sales ₦720,000. Obi's share of profit is", "₦60,000", "₦120,000", "₦90,000", "₦180,000", "Profit of ₦180,000 × ⅓."],
        ["H", "In a joint venture, A paid ₦500,000 for goods and ₦50,000 expenses. B received all the sales of ₦800,000 and paid ₦30,000 expenses. Profit is shared equally. The amount B pays A in settlement is", "₦660,000", "₦550,000", "₦770,000", "₦110,000", "Profit is ₦220,000; A is owed 550,000 + 110,000."],
        ["H", "Unsold stock taken over by a venturer at the end of the venture is", "credited to the joint venture account", "debited to the joint venture account", "ignored", "credited to that venturer's account", "It reduces the cost of the venture and is charged to the venturer."],
      ],
      jamb: [
        ["M", "A joint venture differs from a partnership in that a joint venture", "terminates on completion of the undertaking", "must be registered as a company", "has unlimited duration", "requires a firm name", "It exists only for the particular venture."],
        ["H", "X and Y in a joint venture share profits 3 : 2. X bought goods for ₦200,000; Y paid expenses of ₦20,000 and sold the goods for ₦320,000. Y's share of profit is", "₦40,000", "₦60,000", "₦50,000", "₦100,000", "Profit is ₦100,000; two-fifths is ₦40,000."],
      ],
    },
    {
      week: 4,
      title: "Contract Account",
      subtopics: ["Meaning and features of contract accounts", "Contract costing and job costing", "Retention money, progress payments, work certified and notional profit", "Profit on incomplete contracts"],
      objectives: ["Explain contract accounts and their features", "Distinguish contract costing from job costing", "Explain the terms used in contract accounts", "Prepare a contract account and calculate the profit to be taken on an incomplete contract"],
      lesson: {
        title: "Accounting for Long-Term Contracts",
        summary: "How builders and engineers record the costs of a contract and decide how much profit to recognise.",
        minutes: 40,
        notes: `## Meaning
A **contract account** is kept by a **contractor** to record the costs and revenue of each contract, such as building a bridge, road or block of flats. The **contractee** is the client for whom the work is done.

## Features
- each contract is a **separate cost unit** with its own account;
- work is usually done **on site**, away from the contractor's premises;
- contracts are **large** and often run for **more than one accounting year**;
- most costs are **direct** (materials, wages, plant, sub-contractors);
- payment is made by **instalments** as the work proceeds;
- a contract price is **agreed in advance**.

## Contract costing and job costing
| | Contract costing | Job costing |
|---|---|---|
| **size and duration** | large; long-term | small; short-term |
| **place of work** | on site | in the workshop |
| **payment** | progress payments on certificates | on completion |
| **profit** | may be taken on incomplete work | taken on completion |
| **costs** | mostly direct | direct plus absorbed overheads |

## Terms
| Term | Meaning |
|---|---|
| **work certified** | value of work completed and **approved by the architect or engineer**, who issues a certificate |
| **work uncertified** | work done but not yet approved; carried forward **at cost** |
| **progress payment** | instalment paid by the contractee against work certified |
| **retention money** | the part of the certified value **held back** by the contractee (e.g. 10%) until the end of the **defects-liability period**, as security for good work |
| **work-in-progress** | the incomplete contract at the year end: work certified + uncertified |
| **notional profit** | the apparent profit on an incomplete contract: value of work certified − cost of work certified |
| **plant at site** | debited at cost or book value when sent; credited at written-down value at the year end — the difference is depreciation |
| **materials returned / on site** | credited to the contract account |
| **escalation clause** | allows the price to rise if costs rise |

## The contract account
**Debit:** materials issued; wages; direct expenses; plant sent to site; sub-contract charges; overheads; accrued expenses c/d.
**Credit:** materials returned or transferred; materials on site c/d; plant c/d; **work certified**; work uncertified c/d.
The balance is the **notional profit** (or loss).

## Profit on incomplete contracts
Prudence requires that not all the notional profit be taken, since the contract may still run into loss.

- **Early stage** (little work certified): take **no profit**.
- **Reasonably advanced:**
$$\\text{profit to P \\& L} = \\frac23 \\times \\text{notional profit} \\times \\frac{\\text{cash received}}{\\text{work certified}}$$
(some examiners specify $\\tfrac13$ for contracts less advanced).
- The remainder is carried forward as a **reserve (profit in suspense)**.
- **Any foreseeable loss is written off in full at once.**

## Worked illustration
A contract with a price of ₦20,000,000 shows at the year end:
materials ₦5,000,000; wages ₦3,000,000; expenses ₦800,000; plant sent ₦2,000,000, valued at ₦1,600,000 at year end; materials on site ₦300,000; work certified ₦10,000,000; work uncertified ₦500,000; cash received 90% of work certified.

- **Costs:** 5,000,000 + 3,000,000 + 800,000 + 2,000,000 = **₦10,800,000**
- **Credits:** 1,600,000 + 300,000 + 10,000,000 + 500,000 = **₦12,400,000**
- **Notional profit:** **₦1,600,000**
- **Profit taken:** $\\tfrac23 \\times 1\\,600\\,000 \\times \\tfrac{90}{100} = ₦960,000$
- **Reserve carried forward:** ₦640,000
- **Retention money:** 10% × 10,000,000 = ₦1,000,000`,
        examples: `**Example 1.** Work certified is ₦8,000,000 and the contractee retains 15%. Find the cash received. *Answer:* $85\\% \\times 8\\,000\\,000 = \\mathbf{₦6,800,000}$.

**Example 2.** Notional profit is ₦900,000 and cash received is 80% of work certified. Find the profit to take using the two-thirds rule. *Answer:* $\\tfrac23 \\times 900\\,000 \\times 0.8 = \\mathbf{₦480,000}$.

**Example 3.** Plant costing ₦1,500,000 was sent to site and valued at ₦1,200,000 at the year end. What is the depreciation charged to the contract? *Answer:* $\\mathbf{₦300,000}$.`,
      },
      questions: [
        ["E", "The person for whom contract work is carried out is the", "contractee", "contractor", "architect", "sub-contractor", "The contractee is the client."],
        ["E", "The amount withheld by the contractee from the value of work certified is", "retention money", "progress payment", "notional profit", "work uncertified", "It is security for the satisfactory completion of the work."],
        ["E", "Work certified is the value of work approved by the", "architect or engineer", "contractor's cashier", "auditor", "bank manager", "A certificate is issued for the work done."],
        ["M", "Work done but not yet approved by the architect is valued at", "cost", "contract price", "selling price", "cost plus full profit", "Uncertified work carries no profit."],
        ["M", "The difference between the value of work certified and the cost of work certified is the", "notional profit", "retention money", "reserve", "progress payment", "It is the apparent profit to date."],
        ["M", "Materials returned to store from a contract site are", "credited to the contract account", "debited to the contract account", "ignored", "debited to the contractee", "They reduce the cost of the contract."],
        ["M", "Work certified on a contract is ₦5,000,000 and retention is 10%. The cash received from the contractee is", "₦4,500,000", "₦5,500,000", "₦500,000", "₦5,000,000", "90% of the certified value is paid."],
        ["H", "The notional profit on a contract is ₦1,200,000 and cash received is 75% of work certified. Using the two-thirds rule, the profit taken to profit and loss is", "₦600,000", "₦800,000", "₦900,000", "₦400,000", "⅔ × 1,200,000 × ¾."],
        ["H", "Plant costing ₦3,000,000 was sent to a site on 1 January and valued at ₦2,400,000 on 31 December. The contract account is", "debited with ₦3,000,000 and credited with ₦2,400,000", "debited with ₦2,400,000 only", "credited with ₦3,000,000 and debited with ₦600,000", "debited with ₦600,000 and credited with ₦3,000,000", "The net charge of ₦600,000 is depreciation."],
        ["H", "A loss foreseen on an incomplete contract should be", "written off in full immediately", "spread over the remaining years", "ignored until completion", "added to work-in-progress", "The prudence concept requires immediate provision."],
      ],
      jamb: [
        ["M", "Which of the following is debited to a contract account?", "Wages paid to site workers", "Work certified", "Materials returned to store", "Plant at site at the end of the year", "Wages are a direct cost of the contract."],
        ["H", "Costs to date on a contract are ₦6,400,000. Work certified is ₦7,500,000 and work uncertified ₦400,000. The notional profit is", "₦1,500,000", "₦1,100,000", "₦700,000", "₦1,900,000", "(7,500,000 + 400,000) − 6,400,000."],
      ],
    },
    {
      week: 6,
      title: "Departmental Account",
      subtopics: ["Meaning and purpose of departmental accounts", "Reasons for departmental accounts", "Allocation and apportionment of expenses", "Departmental trading, profit and loss account"],
      objectives: ["Explain departmental accounts and their purpose", "Distinguish allocation from apportionment of expenses", "Apportion common expenses on suitable bases", "Prepare a departmental trading, profit and loss account in columnar form"],
      lesson: {
        title: "Accounts by Department",
        summary: "Finding the profit or loss of each section of a business under one roof.",
        minutes: 40,
        notes: `## Meaning
**Departmental accounts** are accounts prepared to show the **trading results of each department** of a business separately, as well as the result of the business as a whole. They are used by stores and firms whose sections (e.g. Provisions, Textiles, Electronics) operate **under one roof** and one management.

## Purpose and reasons
- to find the **gross and net profit of each department**;
- to **compare** the performance of departments;
- to identify **unprofitable** departments for improvement or closure;
- to reward **departmental managers** (commission on departmental profit);
- to **control costs** and stock;
- to guide **policy** — expansion, pricing, allocation of space;
- to detect waste and fraud.

## Method
The trading and profit and loss account is drawn up in **columnar form**, with a column for each department and a total column. Sales, purchases, stocks and wages are **analysed by department** in the books (analysis columns in the day books).

## Allocation and apportionment
- **Allocation** — charging an expense that can be **identified wholly** with one department directly to it (e.g. the salary of the Textiles sales staff).
- **Apportionment** — **sharing** a common expense among departments on a **fair basis**.

### Bases of apportionment
| Expense | Usual basis |
|---|---|
| rent, rates, lighting, heating, building insurance and repairs | **floor area** occupied |
| selling expenses, advertising, carriage outwards, discounts allowed, bad debts, sales commission | **sales (turnover)** |
| carriage inwards, discount received | **purchases** |
| depreciation and insurance of fixtures and equipment | **value of the assets** in each department |
| canteen, welfare, staff supervision | **number of employees** |
| power | horse-power or machine hours |
| general administration expenses | sales, or equally |

Expenses that cannot be fairly apportioned (e.g. interest on loans, directors' fees, audit fees) may be charged in the **general profit and loss account**.

## Inter-departmental transfers
Goods passed from one department to another are **credited** to the supplying department and **debited** to the receiving department — at cost, or at selling price where agreed (unrealised profit in closing stock must then be eliminated).

## Worked illustration
A store has departments **A** and **B**.
| | A (₦) | B (₦) |
|---|---|---|
| Sales | 600,000 | 400,000 |
| Purchases | 350,000 | 250,000 |
| Opening stock | 50,000 | 40,000 |
| Closing stock | 60,000 | 30,000 |
Floor area: A 300 m², B 200 m². Rent ₦100,000; advertising ₦50,000.

**Departmental trading, profit and loss account**
| | A (₦) | B (₦) | Total (₦) |
|---|---|---|---|
| Sales | 600,000 | 400,000 | 1,000,000 |
| Cost of sales (opening + purchases − closing) | 340,000 | 260,000 | 600,000 |
| **Gross profit** | **260,000** | **140,000** | **400,000** |
| Rent (3 : 2 by area) | 60,000 | 40,000 | 100,000 |
| Advertising (3 : 2 by sales) | 30,000 | 20,000 | 50,000 |
| **Net profit** | **170,000** | **80,000** | **250,000** |

## Should a loss-making department be closed?
Not automatically. Closing it removes its **contribution** (gross profit less its own avoidable expenses), while its share of **fixed common costs** such as rent falls on the remaining departments. Close it only if its contribution is negative.

## Departmental and branch accounts
Departments are under **one roof**; branches are at **different locations**.`,
        examples: `**Example 1.** Rent of ₦240,000 is to be apportioned to departments X, Y and Z occupying 400, 500 and 300 m². Find Y's share. *Answer:* $\\dfrac{500}{1200} \\times 240\\,000 = \\mathbf{₦100,000}$.

**Example 2.** On what basis is advertising usually apportioned? *Answer:* **sales (turnover)**.

**Example 3.** Distinguish allocation from apportionment. *Answer:* **Allocation** charges a whole expense to the department that incurred it; **apportionment** shares a common expense among departments.`,
      },
      questions: [
        ["E", "Departmental accounts are prepared mainly to", "show the profit or loss of each department", "record transactions with branches", "account for goods on consignment", "calculate retention money", "Each department's result is shown separately."],
        ["E", "A departmental trading account is usually presented in", "columnar form", "narrative form only", "ledger T-form for each customer", "single-entry form", "There is a column for each department and a total."],
        ["E", "Rent and rates are best apportioned among departments on the basis of", "floor area", "sales", "purchases", "number of employees", "They relate to space occupied."],
        ["M", "Charging the whole of an expense directly to the department that incurred it is", "allocation", "apportionment", "absorption", "amortisation", "No sharing is involved."],
        ["M", "Advertising and selling expenses are usually apportioned on the basis of", "sales", "floor area", "number of employees", "value of fixtures", "They are incurred to generate turnover."],
        ["M", "Insurance of fixtures and fittings is best apportioned among departments on the basis of", "value of the fixtures in each department", "sales", "purchases", "number of employees", "The premium depends on the value of the assets insured."],
        ["M", "Goods transferred from Department A to Department B are", "credited to A and debited to B", "debited to A and credited to B", "debited to both", "ignored in departmental accounts", "A supplies and B receives."],
        ["H", "Rent of ₦360,000 is shared among departments P, Q and R with floor areas of 200, 300 and 400 m². R's share is", "₦160,000", "₦120,000", "₦80,000", "₦144,000", "400 ÷ 900 × 360,000."],
        ["H", "Department A has sales ₦900,000, opening stock ₦80,000, purchases ₦520,000 and closing stock ₦100,000. Its gross profit is", "₦400,000", "₦380,000", "₦300,000", "₦500,000", "Cost of sales is 80,000 + 520,000 − 100,000 = 500,000."],
        ["H", "A department shows a net loss after apportioned rent but a positive contribution. Closing it would", "reduce the total profit of the business", "increase total profit by the amount of its loss", "eliminate the rent", "have no effect on total profit", "Its contribution is lost while fixed common costs remain."],
      ],
      jamb: [
        ["M", "Carriage inwards is apportioned among departments on the basis of", "purchases", "sales", "floor area", "number of employees", "It is a cost of bringing in goods bought."],
        ["H", "Advertising of ₦90,000 is apportioned between departments X and Y with sales of ₦1,200,000 and ₦600,000. X's share is", "₦60,000", "₦45,000", "₦30,000", "₦72,000", "Sales ratio 2 : 1; two-thirds of ₦90,000."],
      ],
    },
    {
      week: 8,
      title: "Branch Account",
      subtopics: ["Meaning and types of branches", "Systems of branch accounting", "Branch accounts under the debtors system", "Goods invoiced at cost and at selling price"],
      objectives: ["Explain branch accounts and distinguish dependent from independent branches", "Describe the debtors, stock and debtors and final accounts systems", "Prepare a branch account under the debtors system", "Treat goods invoiced to a branch at selling price"],
      lesson: {
        title: "Accounting for Branches",
        summary: "How a head office records the transactions and profit of its branches.",
        minutes: 40,
        notes: `## Meaning
A **branch** is a section of a business established at a **different location** from the head office. **Branch accounts** are kept to ascertain the **profit or loss of each branch** and to control its stock, cash and debtors.

## Types of branches
| | Dependent branch | Independent branch |
|---|---|---|
| **books** | head office keeps all the records; the branch keeps only memorandum records | the branch keeps a **full double-entry set** of books |
| **goods** | supplied mainly by head office | may buy locally as well |
| **cash** | banked daily for head office; expenses paid by head office (petty cash on imprest) | manages its own cash |
| **profit** | computed by head office | computed by branch; linked by **head office current account** and **branch current account** |

(There are also **foreign branches**, whose accounts must be converted into the home currency.)

## Systems of accounting for dependent branches
### 1. Debtors system
Used for **small** branches. The head office opens one **branch account** for each branch — treated like a debtor — which acts as a combined trading and profit and loss account.

**Branch account**
| Dr | Cr |
|---|---|
| Opening balances: stock, debtors, petty cash | Cash and cheques remitted by branch (cash sales, receipts from debtors) |
| Goods sent to branch | Goods returned by branch |
| Expenses paid by head office (rent, salaries) | Closing balances: stock, debtors, petty cash |
| Petty cash sent | |
| **Profit** (balancing figure) → general P & L | **Loss** (balancing figure) |

Goods sent are credited to **goods sent to branches account**, later transferred to the head office trading account.

### 2. Stock and debtors system
Used for **larger** branches where goods are invoiced at **selling price**. Separate accounts are kept: branch **stock** account, branch **debtors** account, branch **expenses** account, branch **adjustment** account (which shows the gross profit) and goods sent to branch account. It gives tighter **control over stock** — shortages show up.

### 3. Final accounts system
A **memorandum branch trading and profit and loss account** is prepared at cost, like any trader's final accounts.

## Goods invoiced at selling price
To control stock, head office may invoice goods at **cost plus a mark-up ("loading")**. The loading is **unrealised profit** and must be removed:
- on **goods sent** (credit branch account with the loading),
- on **opening stock** (credit) and **closing stock** (debit — a stock reserve).

**Converting:** if goods are invoiced at cost plus 25%, loading $= \\dfrac{25}{125} = \\dfrac15$ of invoice price. If invoiced at a gross profit of 20% on selling price, loading $= \\dfrac15$ of invoice price.

## Worked illustration (debtors system, goods at cost)
Kano branch for the year:
opening stock ₦100,000; opening debtors ₦60,000; goods sent ₦800,000; rent and salaries paid by head office ₦120,000; cash remitted ₦1,150,000; closing stock ₦140,000; closing debtors ₦90,000.

**Kano branch account**
| Dr | ₦ | Cr | ₦ |
|---|---|---|---|
| Stock b/d | 100,000 | Bank — remittances | 1,150,000 |
| Debtors b/d | 60,000 | Stock c/d | 140,000 |
| Goods sent to branch | 800,000 | Debtors c/d | 90,000 |
| Bank — expenses | 120,000 | | |
| **Profit to general P & L** | **300,000** | | |
| | **1,380,000** | | **1,380,000** |

## Independent branches
The branch prepares its own trial balance. In head office books the **branch current account** (a debit balance) should equal the **head office current account** (a credit balance) in the branch books. Differences arise from **goods in transit** and **cash in transit**, which are adjusted before the accounts are combined.

## Branch and department compared
A branch is at a **separate location**; a department is a section **within the same premises**.`,
        examples: `**Example 1.** Goods are invoiced to a branch at cost plus 25%. If the invoice price is ₦500,000, find the cost. *Answer:* $500\\,000 \\times \\dfrac{100}{125} = \\mathbf{₦400,000}$.

**Example 2.** Under the debtors system, on which side of the branch account are remittances from the branch entered? *Answer:* the **credit** side.

**Example 3.** Which branch keeps a full set of double-entry books? *Answer:* an **independent** branch.`,
      },
      questions: [
        ["E", "A section of a business located away from the head office is a", "branch", "department", "consignment", "joint venture", "Departments are within the same premises."],
        ["E", "A branch whose accounting records are kept entirely by the head office is", "a dependent branch", "an independent branch", "a foreign subsidiary", "a joint venture", "It sends returns and cash to the head office."],
        ["E", "Under the debtors system, goods sent to a branch are", "debited to the branch account", "credited to the branch account", "debited to the head office trading account", "credited to the branch debtors account", "The branch is charged with goods received."],
        ["M", "Under the debtors system, cash remitted by the branch to head office is", "credited to the branch account", "debited to the branch account", "debited to goods sent to branch account", "ignored", "It reduces what the branch owes."],
        ["M", "The system of branch accounting that keeps separate branch stock, branch debtors and branch adjustment accounts is the", "stock and debtors system", "debtors system", "final accounts system", "single-entry system", "It gives detailed control over branch stock."],
        ["M", "Goods are invoiced to a branch at selling price mainly to", "control branch stock", "increase branch profit", "avoid tax", "reduce head office purchases", "Stock shortages are revealed at selling value."],
        ["M", "In the books of an independent branch, the account that records its indebtedness to head office is the", "head office current account", "branch current account", "branch adjustment account", "goods sent to branch account", "It mirrors the branch current account in head office books."],
        ["H", "Goods are invoiced to a branch at cost plus 25%. On goods invoiced at ₦750,000, the loading is", "₦150,000", "₦187,500", "₦125,000", "₦600,000", "One-fifth of the invoice price."],
        ["H", "A branch had opening stock ₦50,000, goods received ₦400,000 and expenses paid by head office ₦60,000. It remitted ₦560,000 and had closing stock ₦70,000. The branch profit is", "₦120,000", "₦160,000", "₦100,000", "₦50,000", "(560,000 + 70,000) − (50,000 + 400,000 + 60,000)."],
        ["H", "A difference between the branch current account and the head office current account may be caused by", "goods or cash in transit", "depreciation of branch assets", "branch net profit already recorded by both", "identical postings", "Items sent by one but not yet received by the other cause the difference."],
      ],
      jamb: [
        ["M", "Which of the following is credited to the branch account under the debtors system?", "Closing stock at the branch", "Goods sent to branch", "Opening branch debtors", "Rent paid by head office", "Closing balances appear on the credit side."],
        ["H", "Branch closing stock is ₦240,000 at invoice price, goods being invoiced at cost plus 20%. The stock reserve required is", "₦40,000", "₦48,000", "₦20,000", "₦200,000", "One-sixth of the invoice price."],
      ],
    },
    {
      week: 9,
      title: "Public Sector Accounting: Meaning, Structure and Simple Accounts",
      subtopics: ["Meaning and objectives of public sector accounting", "Sources of revenue and types of expenditure", "Public and private sector accounting compared", "Structure of government accounting and simple accounts"],
      objectives: ["Explain public sector accounting and its objectives", "Classify government revenue and expenditure", "Distinguish public sector from private sector accounting", "Describe the funds and officers of government accounting and prepare a simple statement"],
      lesson: {
        title: "Government Accounting",
        summary: "How governments record, control and report the use of public money.",
        minutes: 40,
        notes: `## Meaning
**Public sector (government) accounting** is the process of **recording, analysing, summarising, communicating and interpreting** the financial transactions of **government** — federal, state and local — and its ministries, departments and agencies.

## Objectives
- **accountability** and **stewardship** — showing how public funds were received and spent;
- **control** of public funds and prevention of fraud;
- providing information for **planning and budgeting**;
- ensuring spending is **in accordance with the law** (appropriation);
- evaluating the **performance** of government;
- providing information to the legislature, citizens, creditors and donors.

## Sources of revenue
| Class | Examples |
|---|---|
| **statutory (federation account) revenue** | petroleum profits tax, oil royalties, companies income tax, customs and excise duties |
| **value added tax (VAT)** | shared among the tiers of government |
| **internally generated revenue (IGR)** | personal income tax (PAYE), licences, fees, fines, rates, rents, earnings of ministries |
| **capital receipts** | internal and external loans, grants and aid, sale of government property |

- **Recurrent revenue** arises regularly (taxes, fees).
- **Capital receipts** are irregular (loans, grants).

## Types of expenditure
- **Recurrent expenditure** — day-to-day running costs: **personnel costs** (salaries, pensions) and **overheads** (stationery, maintenance, travel).
- **Capital expenditure** — on **projects** that give lasting benefit: roads, schools, hospitals, equipment.

## Public and private sector accounting
| | Public sector | Private sector |
|---|---|---|
| **objective** | service and welfare | profit |
| **basis** | traditionally **cash basis** (now moving to accrual under IPSAS) | **accrual basis** |
| **funds** | **fund accounting** (Consolidated Revenue Fund, etc.) | proprietary / capital accounting |
| **budget** | a legal instrument — spending must follow appropriation | an internal planning tool |
| **final accounts** | statements of revenue and expenditure, assets and liabilities | profit and loss account, balance sheet |
| **fixed assets** | traditionally written off when bought | capitalised and depreciated |
| **audit** | Auditor-General; reports to the legislature | external auditors; report to shareholders |
| **regulation** | constitution, Finance (Control and Management) Act, financial regulations | company law and accounting standards |

## Structure of government accounting
### The funds
- **Federation Account** — all federally collected revenue, shared among federal, state and local governments.
- **Consolidated Revenue Fund (CRF)** — the main fund of each government, into which revenue is paid and from which recurrent spending is met.
- **Development (Capital) Fund** — for capital projects.
- **Contingencies Fund** — for urgent, unforeseen expenditure.
- special and trust funds.

### The officers
| Officer | Duty |
|---|---|
| **Minister / Commissioner of Finance** | overall control of public finance |
| **Accountant-General** | chief accounting officer of receipts and payments; keeps the government's accounts and prepares the annual financial statements |
| **Auditor-General** | audits the accounts and reports to the legislature |
| **Accounting officer** (Permanent Secretary) | responsible for a ministry's funds |
| **Public Accounts Committee** | legislative committee that examines the Auditor-General's report |

### Documents and terms
**budget / appropriation act**; **warrant** (authority to spend); **vote** (amount approved for a head); **virement** (transfer between sub-heads with approval); **payment voucher**; **vote book** (records spending against a vote); **treasury receipt**; **head and sub-head**.

## A simple statement
**Statement of revenue and expenditure of Okuta Local Government for the year**
| | ₦ |
|---|---|
| Statutory allocation | 400,000,000 |
| Internally generated revenue | 60,000,000 |
| **Total revenue** | **460,000,000** |
| Personnel costs | 250,000,000 |
| Overheads | 90,000,000 |
| **Total recurrent expenditure** | **340,000,000** |
| **Surplus transferred to capital development fund** | **120,000,000** |`,
        examples: `**Example 1.** A local government had a statutory allocation of ₦300 million and IGR of ₦40 million. Recurrent expenditure was ₦270 million. Find the surplus. *Answer:* $340 - 270 = \\mathbf{₦70}$ **million**.

**Example 2.** Classify the construction of a hospital. *Answer:* **capital expenditure**.

**Example 3.** Which officer audits government accounts? *Answer:* the **Auditor-General**.`,
      },
      questions: [
        ["E", "The main objective of public sector organisations is", "provision of services", "profit maximisation", "payment of dividends", "growth of share price", "Government exists for service and welfare."],
        ["E", "Payment of civil servants' salaries is an example of", "recurrent expenditure", "capital expenditure", "capital receipt", "statutory revenue", "It is a regular running cost."],
        ["E", "The officer who audits the accounts of government is the", "Auditor-General", "Accountant-General", "Minister of Finance", "Permanent Secretary", "He reports to the legislature."],
        ["M", "The fund into which all federally collected revenue is paid for sharing among the tiers of government is the", "Federation Account", "Contingencies Fund", "Development Fund", "Petty Cash Fund", "It is shared among federal, state and local governments."],
        ["M", "Government accounting has traditionally been kept on the", "cash basis", "accrual basis", "going-concern basis only", "replacement-cost basis", "Revenue and expenditure were recorded when cash moved."],
        ["M", "The construction of a new road is classified as", "capital expenditure", "recurrent expenditure", "overhead cost", "personnel cost", "It gives lasting benefit."],
        ["M", "The transfer of funds from one sub-head to another with proper approval is", "virement", "a warrant", "a vote", "an imprest", "Virement reallocates approved funds."],
        ["H", "The chief accounting officer for the receipts and payments of government, who prepares its annual financial statements, is the", "Accountant-General", "Auditor-General", "Chairman of the Public Accounts Committee", "Governor of the Central Bank", "The Accountant-General heads the treasury."],
        ["H", "Which of these is a capital receipt of government?", "External loan", "Personal income tax", "Court fines", "Motor licence fees", "Loans are irregular, non-recurring receipts."],
        ["H", "A state had statutory allocation of ₦900m, IGR of ₦150m, personnel costs of ₦520m and overheads of ₦230m. Its recurrent surplus was", "₦300m", "₦380m", "₦150m", "₦530m", "(900 + 150) − (520 + 230)."],
      ],
      jamb: [
        ["M", "The authority given to an officer to incur expenditure from an approved vote is a", "warrant", "virement", "voucher", "receipt", "No spending may be made without a warrant."],
        ["H", "The legislative committee that examines the Auditor-General's report on government accounts is the", "Public Accounts Committee", "Appropriation Committee", "Finance and General Purposes Committee", "Tenders Board", "It holds accounting officers to account."],
      ],
    },
  ],
};
