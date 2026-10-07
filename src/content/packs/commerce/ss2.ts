import type { TermPlan } from "../types";

/** SS2 Commerce — original Precious PS content following the national senior secondary curriculum. */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Money",
        subtopics: ["Trade by barter and its problems", "Evolution and forms of money", "Functions of money", "Qualities of good money"],
        objectives: ["Explain barter and its problems", "Trace the evolution of money and describe its forms", "State the functions of money", "State the qualities of good money"],
        lesson: {
          title: "Money in Commerce",
          summary: "Explain why money replaced barter and describe its forms, functions and qualities.",
          minutes: 40,
          notes: `## Trade by barter
The **direct exchange of goods and services for other goods and services** without money.
### Problems
- **double coincidence of wants** — a yam seller wanting cloth must find a cloth seller who wants yams
- **no common measure of value** — how many yams equal one goat?
- **indivisibility** of some goods
- goods are **bulky** to carry and **perishable** to store
- **no standard for deferred payment** — credit dealings are difficult
- time is wasted searching for trading partners
- it discourages specialisation and large-scale trade

## Money
**Anything generally accepted as a means of payment** for goods and services and in settlement of debts.

## Evolution
1. **barter**
2. **commodity money** — goods valued by all: **cowries**, salt, cattle, manillas, beads, tobacco
3. **metallic money** — gold and silver, weighed and later stamped into **coins**
4. **paper money** — goldsmiths' receipts for deposited gold became **bank notes**, at first convertible into gold, later **fiat money** backed only by law and public confidence
5. **bank money** — deposits transferred by **cheque**
6. **electronic money** — cards, online and mobile transfers
In Nigeria, the **West African Currency Board** issued the West African pound from 1912; the **Central Bank of Nigeria** took over in 1959; the **naira and kobo** replaced the pound on **1 January 1973**.

## Forms of money
- **coins** — token money for small payments
- **bank notes** — paper currency issued by the central bank
- **bank deposits** — transferred by cheque or electronically; the largest part of money in a modern economy
- **legal tender** — money that must by law be accepted in settlement of a debt: notes and coins
- **near money (quasi-money)** — assets easily converted into cash: savings deposits, treasury bills, postal orders
- **electronic money**

## Functions of money
1. **medium of exchange** — it is accepted in payment, ending the need for a double coincidence of wants
2. **measure of value (unit of account)** — the values of goods are expressed and compared in prices
3. **store of value** — wealth can be held for future use
4. **standard of deferred payment** — makes lending, borrowing and credit sales possible
Money also allows value to be **transferred** from place to place.

## Qualities (characteristics) of good money
| Quality | Meaning |
|---|---|
| **general acceptability** | everyone is willing to take it |
| **portability** | easy to carry |
| **durability** | lasts long without spoiling |
| **divisibility** | can be divided into smaller units without loss of value |
| **homogeneity** | every unit is identical |
| **scarcity** | limited in supply, so it keeps its value |
| **stability of value** | its purchasing power does not change violently |
| **recognisability** | easily identified and hard to forge |

## Importance of money to commerce
- makes **exchange quick and easy**
- allows **specialisation** and division of labour
- makes **saving and investment** possible
- permits **credit** and the growth of banking
- prices can be fixed and compared
- wages and taxes can be paid conveniently
- trade over long distances and between countries is possible

## Value of money
What a unit of money can buy — its **purchasing power**. It **falls when prices rise** (inflation) and rises when prices fall (deflation).

## Supply of and demand for money
- **money supply** — notes and coins in circulation plus bank deposits; controlled by the central bank
- people hold money for **transactions**, as a **precaution** and for **speculation**

## Dangers of too much money
A rapid increase in money without a matching increase in goods leads to **inflation** — rising prices and loss of confidence in the currency.`,
          examples: `**Example 1.** What is the main problem of barter? *Answer:* The need for a **double coincidence of wants**.

**Example 2.** List the four functions of money. *Answer:* **Medium of exchange, measure of value, store of value and standard of deferred payment**.

**Example 3.** Which quality of money allows a ₦1,000 note to be changed into smaller notes? *Answer:* **Divisibility**.`,
        },
        questions: [
          ["E", "The direct exchange of goods for goods is known as", "trade by barter", "hire purchase", "foreign exchange", "mail order", "No money is used."],
          ["E", "Anything generally accepted as a means of payment is", "money", "credit", "capital", "a cheque book", "General acceptability is its key feature."],
          ["E", "The naira and kobo became Nigeria's currency in", "1973", "1959", "1960", "1986", "They replaced the Nigerian pound."],
          ["M", "The greatest difficulty of trade by barter is", "the double coincidence of wants", "the use of coins", "the existence of banks", "the high rate of interest", "Each trader must want what the other has."],
          ["M", "The function of money that enables goods to be sold on credit is its use as a", "standard of deferred payment", "medium of exchange", "store of value", "unit of weight", "A future payment can be fixed in money."],
          ["M", "The quality of money that makes it easy to carry from place to place is", "portability", "durability", "homogeneity", "scarcity", "Bulky money would be inconvenient."],
          ["M", "Cowries, salt and manillas once used in trade are examples of", "commodity money", "bank money", "electronic money", "fiat money", "They were goods valued by everyone."],
          ["H", "Money that must by law be accepted in settlement of a debt is", "legal tender", "near money", "a postal order", "a share certificate", "Notes and coins have this status."],
          ["H", "The purchasing power of money falls when", "the general price level rises", "prices fall", "output rises faster than money", "the money supply is reduced", "Each unit of money buys less."],
          ["H", "The quality of money that requires every unit of the same denomination to be identical is", "homogeneity", "divisibility", "portability", "acceptability", "It is also called uniformity."],
        ],
      },
      {
        week: 2,
        title: "Commercial banks and their services",
        subtopics: ["Meaning and functions of commercial banks", "Types of bank account", "Loans, overdrafts and other services", "Electronic banking"],
        objectives: ["State the functions of commercial banks", "Distinguish the types of bank account", "Distinguish loans from overdrafts and describe other banking services", "Describe electronic banking services"],
        lesson: {
          title: "Banking Services for Business",
          summary: "Describe the functions, accounts and services of commercial banks.",
          minutes: 40,
          notes: `## Commercial banks
Financial institutions, owned by shareholders, that **accept deposits from the public, lend money and provide payment services**, with the aim of making a profit. They are also called **deposit money banks**.

## Functions
- **accepting deposits** — safekeeping of money in current, savings and fixed deposit accounts
- **lending** — loans, overdrafts, discounting bills of exchange
- providing **means of payment** — cheques, bank drafts, standing orders, transfers, cards
- **agency services** — collecting cheques and dividends; paying bills; acting as **executor and trustee**
- **foreign exchange** and help with imports and exports — letters of credit, travellers' cheques
- **safe custody** of valuables — documents, jewellery — in strong rooms
- **business advice**; **status inquiries** and references on customers
- **night safe** facilities for traders to deposit takings after hours
- issuing shares for companies; investment management
- **creating credit (money)** through lending

## Types of account
| | Current account | Savings account | Fixed deposit account |
|---|---|---|---|
| purpose | day-to-day business payments | small savings | lump sums not needed for a time |
| withdrawal | **on demand, by cheque** | by withdrawal slip, card or transfer | only after the agreed period or notice |
| interest | usually none; charges may be made | interest paid | **higher** interest |
| cheque book | **yes** | usually no | no |
| overdraft | **allowed** | not allowed | not allowed |
| statement | bank statement sent regularly | passbook or statement | deposit receipt or certificate |
Also: **domiciliary accounts** (in foreign currency) and joint accounts.

### Opening a current account
complete an application form; provide **identification**, a specimen **signature**, passport photographs, proof of address, **references** and an initial deposit; the customer receives a cheque book and paying-in slips.

## Lending
### Loan
A **fixed sum** lent for an agreed period at an agreed rate of interest; **interest is charged on the whole amount** from the start; repaid by instalments or in a lump sum; usually requires **collateral security**.
### Overdraft
Permission to **draw more than the balance in a current account**, up to an agreed limit. **Interest is charged only on the amount overdrawn**, day by day. It is flexible and meant for short-term needs.
### Collateral security
An asset pledged against a loan — land and buildings (title deeds), share certificates, life assurance policies, fixed deposit receipts, a guarantor.
### Factors a bank considers before lending
the **purpose** and amount; the **security** offered; the borrower's **character and record**; **ability to repay**; the period; government and central bank policy.

## Other services
- **standing order** — the bank makes regular fixed payments on the customer's instruction (rent, insurance)
- **direct debit** — the payee collects varying amounts with the customer's authority
- **credit transfer (bank giro)** — paying into another person's account
- **bank draft** — a cheque drawn by a bank on itself; safe, because payment is guaranteed
- **travellers' cheques**; **letters of credit**
- **bank statement** — a record of the customer's account

## Electronic banking
- **automated teller machines (ATMs)** — cash withdrawal, balance inquiry and transfers at any hour
- **debit and credit cards**; **point-of-sale (POS)** terminals in shops
- **internet banking** and **mobile banking** (apps and USSD codes)
- **electronic funds transfer**; agency banking
### Advantages
speed; convenience; round-the-clock access; less need to carry cash; lower costs.
### Risks
fraud and identity theft; network failures; errors in transfers. Customers must protect their PINs and passwords.

## Relationship between banker and customer
Mainly that of **debtor and creditor** — the bank owes the customer the money deposited (and the customer owes the bank when overdrawn). The bank must keep the customer's affairs **secret** and obey his lawful instructions.

## Importance of banks to business
safe keeping of money; easy payment; finance for trade and expansion; help with foreign trade; advice; encouragement of saving.

## Types of bank
commercial; merchant (wholesale and investment banking for large firms); development banks (the Bank of Industry, the Bank of Agriculture); microfinance banks; mortgage banks; non-interest (Islamic) banks.`,
          examples: `**Example 1.** Which account allows payment by cheque and overdrafts? *Answer:* The **current account**.

**Example 2.** Distinguish a loan from an overdraft. *Answer:* A **loan** is a fixed sum with interest on the **whole amount**; an **overdraft** lets a current account be overdrawn, with interest only on the **amount overdrawn**.

**Example 3.** Name three forms of collateral security. *Answer:* **Title deeds, share certificates and life assurance policies**.`,
        },
        questions: [
          ["E", "A bank account from which money can be withdrawn on demand by cheque is a", "current account", "savings account", "fixed deposit account", "loan account", "It is used for day-to-day payments."],
          ["E", "A main function of commercial banks is", "accepting deposits and lending money", "issuing bank notes", "controlling the money supply", "printing postage stamps", "They also provide means of payment."],
          ["E", "A machine that allows customers to withdraw cash at any time with a card is", "an automated teller machine", "a cash register", "a franking machine", "a photocopier", "It is commonly called an ATM."],
          ["M", "Permission to draw more than the balance in a current account is", "an overdraft", "a fixed deposit", "a standing order", "a bank draft", "Interest is charged on the amount overdrawn."],
          ["M", "The account that earns the highest rate of interest is usually the", "fixed deposit account", "current account", "savings account", "domiciliary current account", "Money is left for an agreed period."],
          ["M", "An instruction to a bank to make regular fixed payments on behalf of a customer is", "a standing order", "an overdraft", "a bank statement", "a night safe", "Rent and insurance premiums are often paid this way."],
          ["M", "An asset pledged by a borrower to a bank as security for a loan is", "collateral", "an overdraft", "a cheque", "a dividend", "The bank may sell it if the loan is not repaid."],
          ["H", "A difference between a loan and an overdraft is that with an overdraft", "interest is charged only on the amount actually overdrawn", "interest is charged on a fixed sum from the start", "no interest is charged", "collateral is always land", "It is flexible and suited to short-term needs."],
          ["H", "A cheque drawn by a bank on itself, which guarantees payment to the payee, is", "a bank draft", "a crossed cheque", "a post-dated cheque", "a credit note", "It is safer than a personal cheque."],
          ["H", "The basic legal relationship between a bank and a customer whose account is in credit is that of", "debtor and creditor", "principal and agent only", "landlord and tenant", "employer and employee", "The bank owes the customer the money deposited."],
        ],
      },
      {
        week: 3,
        title: "The central bank and other financial institutions",
        subtopics: ["Functions of the central bank", "Control of commercial banks and credit", "Development, merchant and microfinance banks", "Insurance companies and other non-bank institutions"],
        objectives: ["State the functions of the central bank", "Explain how the central bank controls credit", "Describe development, merchant and microfinance banks", "Describe other non-bank financial institutions"],
        lesson: {
          title: "The Financial System",
          summary: "Describe the central bank and the other financial institutions that serve business.",
          minutes: 40,
          notes: `## The central bank
The **apex bank** of a country, owned by the government and responsible for the monetary system. The **Central Bank of Nigeria (CBN)** was established by an Act of **1958** and began operations on **1 July 1959**.

### Functions
- **issues currency** — the sole right to issue notes and coins
- **banker to the government** — keeps its accounts, lends to it, manages the national debt, issues treasury bills and bonds
- **bankers' bank** — holds the reserves of commercial banks and clears their cheques
- **lender of last resort** — lends to banks in difficulty
- **controls credit and the money supply** (monetary policy)
- **supervises and licenses** banks and other financial institutions
- manages **external reserves** and the **foreign exchange** rate
- **adviser** to the government on economic and financial matters
- promotes the development of the financial system
- represents the country in international financial bodies (IMF, World Bank)

### Instruments of credit control
- **bank rate (monetary policy rate)** — the rate at which it lends to banks; raising it makes credit dearer
- **open market operations** — buying and selling government securities; selling reduces the money in circulation
- **cash reserve ratio** and **liquidity ratio** — the share of deposits banks must keep in cash or liquid assets
- **special deposits** — banks must deposit extra funds with the central bank
- **directives** — instructions on how much and to whom to lend
- **moral suasion** — persuasion
- selective credit controls

### Central bank and commercial banks compared
| Central bank | Commercial banks |
|---|---|
| owned by the **government** | owned by **private shareholders** |
| does **not** aim at profit | aim at **profit** |
| **issues** currency | do not issue currency |
| deals with government and banks, not the public | deal with the **public** |
| controls the banks | are controlled |
| one in the country | many |

## Other banks
### Merchant banks
Serve **companies and large customers**: medium- and long-term loans; **issuing house** services — helping companies to issue shares; accepting bills of exchange; advice on mergers; portfolio management; equipment leasing.
### Development banks
Provide **medium- and long-term finance** for development: the **Bank of Industry** (industry), the **Bank of Agriculture** (farmers), the **Federal Mortgage Bank** (housing), the **Nigerian Export-Import Bank** (exports), the Development Bank of Nigeria (small businesses).
### Microfinance banks
Accept small savings and give **small loans** to low-income earners and small traders, often without conventional collateral.
### Mortgage banks (primary mortgage institutions)
Accept savings and lend for **building or buying houses**.
### Non-interest banks
Operate on profit-sharing principles.

## Non-bank financial institutions
- **insurance companies** — pool risks and invest premiums
- **pension fund administrators** — invest retirement contributions
- **finance houses** — finance hire purchase and leasing
- **discount houses** — deal in short-term securities
- **bureaux de change** — buy and sell foreign currency
- **the stock exchange** and stockbrokers
- **the Nigeria Deposit Insurance Corporation (NDIC)**, 1988 — insures bank deposits and helps to resolve failing banks
- **the Securities and Exchange Commission** — regulates the capital market
- co-operative thrift and credit societies; traditional **esusu / ajo / adashi** contribution groups

## The money market and the capital market
- **money market** — the market for **short-term** funds: treasury bills, commercial papers, call money, bills of exchange
- **capital market** — the market for **long-term** funds: shares, debentures, bonds

## Importance of financial institutions
mobilising savings; providing credit; easing payments; supporting trade and industry; promoting economic development; managing risk.`,
          examples: `**Example 1.** State three functions of the central bank. *Answer:* **Issuing currency, acting as banker to the government and controlling credit**.

**Example 2.** How does the central bank reduce the money supply through open market operations? *Answer:* By **selling government securities**.

**Example 3.** Which institution insures bank deposits in Nigeria? *Answer:* The **Nigeria Deposit Insurance Corporation**.`,
        },
        questions: [
          ["E", "The apex bank that controls the monetary system of Nigeria is the", "Central Bank of Nigeria", "Bank of Industry", "Federal Mortgage Bank", "Nigerian Export-Import Bank", "It began operations in 1959."],
          ["E", "The institution with the sole right to issue notes and coins in a country is the", "central bank", "commercial bank", "merchant bank", "stock exchange", "This is one of its main functions."],
          ["E", "A bank that gives small loans to low-income earners and small traders is a", "microfinance bank", "central bank", "merchant bank", "development bank for exports", "It often lends without conventional collateral."],
          ["M", "As 'lender of last resort', the central bank lends to", "commercial banks in difficulty", "private individuals", "market traders", "foreign companies only", "It supports the banking system."],
          ["M", "The Central Bank of Nigeria started operations in", "1959", "1973", "1988", "1912", "The Act setting it up was passed in 1958."],
          ["M", "The bank that provides long-term finance for industrial projects in Nigeria is the", "Bank of Industry", "Federal Mortgage Bank", "microfinance bank", "bureau de change", "It is a development bank."],
          ["M", "The body that insures the deposits of bank customers in Nigeria is the", "Nigeria Deposit Insurance Corporation", "Securities and Exchange Commission", "Corporate Affairs Commission", "Nigerian Ports Authority", "It was established in 1988."],
          ["H", "To reduce the amount of credit in the economy, the central bank will", "raise the bank rate", "lower the cash reserve ratio", "buy securities in the open market", "print more notes", "Borrowing becomes more expensive."],
          ["H", "The market for long-term funds, such as shares and debentures, is the", "capital market", "money market", "commodity market", "foreign exchange market", "The stock exchange is its main institution."],
          ["H", "A merchant bank differs from a commercial bank in that it mainly", "serves companies and large customers with wholesale banking", "accepts small savings from the public", "issues currency", "supervises other banks", "It also acts as an issuing house for shares."],
        ],
      },
      {
        week: 4,
        title: "Means of payment",
        subtopics: ["Cheques: parties and types", "Crossings, endorsement and dishonour", "Other bank means of payment", "Post office and electronic means of payment"],
        objectives: ["Describe a cheque, its parties and types", "Explain crossings, endorsement and the reasons for dishonour", "Describe bank drafts, standing orders, transfers and bills of exchange", "Describe post office and electronic means of payment"],
        lesson: {
          title: "How Payments Are Made",
          summary: "Describe cheques and the other means of settling debts in home and foreign trade.",
          minutes: 40,
          notes: `## Legal tender
**Notes and coins** — convenient for small payments, but risky and bulky for large ones.

## The cheque
A **written order by a customer to his bank to pay a stated sum of money on demand to a named person or to the bearer**.
### Parties
- the **drawer** — the account holder who writes and signs the cheque
- the **drawee** — the **bank** on which it is drawn
- the **payee** — the person to be paid

### Types
- **open cheque** — can be cashed over the counter
- **crossed cheque** — bears two parallel lines; it must be **paid into a bank account**
- **bearer cheque** — payable to whoever presents it
- **order cheque** — payable to the named payee or to his order; needs endorsement to transfer
- **post-dated cheque** — bears a future date; cannot be paid before then
- **stale cheque** — presented more than **six months** after its date
- **certified (marked) cheque** — the bank certifies that funds are available

### Crossings
- **general crossing** — two parallel lines, with or without "& Co." — payable through any bank account
- **special crossing** — the name of a **particular bank** is written between the lines — payable only through that bank
- **"not negotiable"** — anyone who takes the cheque gets no better title than the person who gave it
- **"account payee only"** — to be paid only into the payee's account

### Endorsement
The payee's **signature on the back**, transferring the cheque to another person.
- **blank** endorsement — signature only; **special** — "pay to X", then the signature; **restrictive** — "pay X only"

### Dishonoured cheques
A cheque the bank **refuses to pay** — marked "refer to drawer" (R/D). Reasons:
- **insufficient funds**
- signature differs from the specimen
- amounts in **words and figures differ**
- the cheque is **stale** or **post-dated**
- an alteration not signed by the drawer
- the drawer has **stopped payment**
- death, bankruptcy or insanity of the drawer
- the account is closed or frozen; the cheque is mutilated
Issuing a "dud" cheque knowingly is an offence in Nigeria.

### Advantages of cheques
safe — no need to carry cash; convenient for large or exact amounts; can be sent by post; the cheque stub and statement are a record and proof of payment; payment can be stopped; crossings add safety.
### Disadvantages
not legal tender — may be refused; risk of dishonour; only for those with current accounts; delay in clearing; bank charges.

## Other bank means of payment
- **bank draft (banker's draft)** — a cheque drawn by a bank on itself or another bank; virtually certain to be paid; used for large payments and for strangers
- **standing order** — the bank pays a **fixed sum at regular intervals**
- **direct debit** — the payee collects amounts due, with the payer's authority
- **credit transfer (bank giro)** — payment into another's account; one instruction can pay many people (salaries)
- **bill of exchange** — the creditor's written order requiring the debtor to pay a sum on demand or at a future date
- **promissory note** — the debtor's written promise to pay
- **letter of credit** — a bank's undertaking to pay an exporter on behalf of an importer
- **travellers' cheques** — for people travelling abroad
- **telegraphic / electronic transfer** — fast transfer between banks, at home and abroad

## Electronic means
**debit and credit cards**; **ATMs**; **point-of-sale terminals**; **internet and mobile banking** transfers; mobile money wallets; online payment platforms.
- quick, convenient and usable at any hour
- reduce the risks of carrying cash
- but exposed to fraud and network failure

## Post office means of payment
- **postal order** — bought at a post office for small fixed amounts; the sender pays a small fee (poundage)
- **money order** — for larger sums; the payee is named and must identify himself
- **stamps** — for very small amounts
- cash on delivery; registered letters for sending cash
These have largely given way to bank and electronic transfers.

## Choosing a means of payment
Consider the **amount**, the **distance**, **safety**, **speed**, **cost**, whether **proof of payment** is needed, and whether the payee has a bank account.

## The clearing system
Cheques drawn on different banks are settled through a **clearing house**, where banks exchange cheques and pay only the net differences through their accounts at the central bank.`,
          examples: `**Example 1.** Name the three parties to a cheque. *Answer:* The **drawer**, the **drawee (bank)** and the **payee**.

**Example 2.** What is a stale cheque? *Answer:* One presented **more than six months** after the date on it.

**Example 3.** Give three reasons why a bank may dishonour a cheque. *Answer:* **Insufficient funds, an irregular signature, and words and figures that differ**.`,
        },
        questions: [
          ["E", "The person who writes and signs a cheque is the", "drawer", "drawee", "payee", "endorsee", "He is the account holder."],
          ["E", "The drawee of a cheque is the", "bank on which it is drawn", "person to be paid", "person who signs it", "cashier's assistant", "The bank is ordered to pay."],
          ["E", "A cheque with two parallel lines drawn across its face is", "a crossed cheque", "an open cheque", "a stale cheque", "a bearer cheque", "It must be paid into a bank account."],
          ["M", "A cheque that bears a date later than the day on which it is issued is", "a post-dated cheque", "a stale cheque", "a certified cheque", "an open cheque", "It cannot be paid before the date shown."],
          ["M", "A cheque presented for payment more than six months after its date is described as", "stale", "post-dated", "crossed", "certified", "The bank will refuse to pay it."],
          ["M", "The signature of the payee on the back of a cheque in order to transfer it is", "an endorsement", "a crossing", "a counterfoil", "a dishonour", "It passes the cheque to another person."],
          ["M", "A bank is likely to dishonour a cheque when", "the amounts in words and figures differ", "the drawer has sufficient funds", "the cheque is correctly signed", "the cheque is dated today", "The bank cannot tell which amount is intended."],
          ["H", "A crossing in which the name of a particular bank is written between the parallel lines is a", "special crossing", "general crossing", "blank endorsement", "restrictive endorsement", "The cheque can be paid only through that bank."],
          ["H", "The safest way to send a large payment to a stranger who will not accept a personal cheque is by", "bank draft", "open cheque", "bearer cheque", "postage stamps", "It is drawn by a bank on itself, so payment is assured."],
          ["H", "An advantage of paying by cheque rather than cash is that", "it provides a record and proof of payment", "it is legal tender", "it can never be dishonoured", "it requires no bank account", "The cheque stub and bank statement serve as evidence."],
        ],
      },
      {
        week: 5,
        title: "The stock exchange",
        subtopics: ["Meaning and functions of the stock exchange", "Securities traded", "Members and procedure of dealing", "Speculation and the second-tier market"],
        objectives: ["Explain the stock exchange and state its functions", "Describe the securities traded on the stock exchange", "Describe the members of the exchange and how dealing takes place", "Explain speculation and the terms bull, bear and stag"],
        lesson: {
          title: "The Market for Shares",
          summary: "Explain the functions, securities, members and procedures of the stock exchange.",
          minutes: 40,
          notes: `## The stock exchange
A **highly organised market where existing (second-hand) securities — shares, stocks, debentures and bonds — are bought and sold**. It is the centre of the **capital market**.
The **Lagos Stock Exchange** was founded in **1960** and began trading in 1961; it became the **Nigerian Stock Exchange** in 1977 and is now the **Nigerian Exchange Group**. The **Securities and Exchange Commission (SEC)** is the regulator.

### Primary and secondary markets
- **primary market** — where **new** securities are issued to raise fresh capital
- **secondary market** — where **existing** securities are traded: the stock exchange

## Functions
- provides a **ready market** for buying and selling securities — making shares **liquid**
- helps companies and governments to **raise long-term capital**
- encourages **saving and investment**
- shows the **prices (value)** of securities through the daily official list — a guide for valuation
- **protects investors** by regulating members and requiring quoted companies to disclose information
- acts as a **barometer** of the economy
- makes it possible to assess the performance of companies
- helps the government to borrow and to privatise enterprises
- spreads ownership of companies widely

## Securities traded
- **ordinary shares (equities)** — variable dividend; voting rights; highest risk
- **preference shares** — fixed dividend
- **debentures (loan stock)** — company loans at fixed interest
- **government stocks and bonds** — "**gilt-edged**" securities: very safe, fixed interest
- **stock** — bundles of fully paid shares, transferable in any amounts

## Members
- **stockbrokers** — agents who **buy and sell securities on behalf of the public** for a commission (**brokerage**); they also advise investors
- **jobbers (dealers)** — in the traditional system, **wholesalers of securities** who dealt on their own account with brokers only; their profit was the **jobber's turn** — the difference between buying and selling prices
- today dealing members usually act as both broker and dealer, trading through an automated electronic system

## Procedure
1. the investor instructs a **stockbroker**
2. the broker executes the order on the trading system at the best price
3. a **contract note** is sent to the client, showing the price, brokerage and other charges
4. payment and delivery are completed on **settlement day**
5. ownership is recorded — in Nigeria electronically, through the **Central Securities Clearing System (CSCS)**

## Terms
- **quoted (listed) company** — one whose shares are admitted to dealing on the exchange
- **par (nominal) value** — the face value of a share; **market value** — its current price
- **at a premium** — above par; **at a discount** — below par
- **dividend** — the shareholder's share of profit
- **yield** — the return on the money actually invested:
  **yield = (nominal value × dividend rate) ÷ market price**
  *Example:* a ₦1 share pays a 15% dividend and its market price is ₦1.50: yield = 0.15 ÷ 1.50 = **10%**
- **cum dividend** — the price includes the right to the coming dividend; **ex dividend** — it does not
- **blue chips** — shares of large, well-established companies
- **bonus issue**; **rights issue**

## Speculators
People who buy and sell hoping to profit from **changes in price**.
| Speculator | Expectation | Action |
|---|---|---|
| **bull** | prices will **rise** | **buys** now to sell later at a higher price |
| **bear** | prices will **fall** | **sells** now to buy back later at a lower price |
| **stag** | a **new issue** will open at a higher price | applies for new shares to sell at once at a profit |
A **bull market** is one of rising prices; a **bear market**, of falling prices.

## Factors affecting share prices
the company's profits and dividends; demand and supply; interest rates; government policy and taxation; political stability; rumours of takeovers; the general state of the economy.

## The second-tier securities market
Opened in **1985** with easier listing requirements, to enable **small and medium-sized companies** to raise capital on the exchange.

## How companies raise capital on the exchange
- **offer for subscription** (public issue) by prospectus
- **offer for sale** — an issuing house buys the shares and resells them to the public
- **placing** — shares sold privately to selected investors
- **rights issue** — to existing shareholders
An **issuing house** (merchant bank) manages the issue; **underwriters** guarantee to take up unsold shares.

## Importance to the economy
mobilising savings for productive investment; supporting industrial growth; attracting foreign investment; aiding indigenisation and privatisation.`,
          examples: `**Example 1.** Who is a stockbroker? *Answer:* An **agent who buys and sells securities for the public** in return for a commission.

**Example 2.** A ₦1 share paying a 20% dividend sells at ₦2. Find the yield. *Solution:* 0.20 ÷ 2 = **10%**.

**Example 3.** What does a bull expect? *Answer:* That share prices will **rise**.`,
        },
        questions: [
          ["E", "The market where existing shares and other securities are bought and sold is the", "stock exchange", "commodity market", "money market", "foreign exchange market", "It is the centre of the capital market."],
          ["E", "An agent who buys and sells securities on behalf of the public for a commission is a", "stockbroker", "jobber only", "underwriter", "registrar", "His commission is called brokerage."],
          ["E", "Government stocks and bonds, regarded as very safe, are known as", "gilt-edged securities", "ordinary shares", "deferred shares", "blue chips", "They carry fixed interest."],
          ["M", "A function of the stock exchange is to", "provide a ready market for securities", "issue bank notes", "collect customs duties", "insure cargo", "Shareholders can turn their shares into cash."],
          ["M", "A speculator who buys shares expecting their price to rise is a", "bull", "bear", "stag", "jobber", "He hopes to sell later at a profit."],
          ["M", "A speculator who sells shares expecting their price to fall is a", "bear", "bull", "stag", "broker", "He hopes to buy them back more cheaply."],
          ["M", "The body that regulates the Nigerian capital market is the", "Securities and Exchange Commission", "Corporate Affairs Commission", "Nigeria Deposit Insurance Corporation", "Nigerian Ports Authority", "It protects investors."],
          ["H", "A speculator who applies for new shares hoping to sell them at a profit as soon as dealings begin is a", "stag", "bull", "bear", "broker", "He gambles on the opening price of a new issue."],
          ["H", "A share with a nominal value of ₦1 pays a dividend of 15% and has a market price of ₦1.50. The yield is", "10%", "15%", "22.5%", "1.5%", "Dividend of 15 kobo on an outlay of ₦1.50."],
          ["H", "The second-tier securities market was introduced in Nigeria mainly to", "help small and medium-sized companies raise capital", "replace the central bank", "trade in foreign currencies", "sell agricultural produce", "Its listing requirements are less strict."],
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
        title: "Insurance: meaning and principles",
        subtopics: ["Meaning and importance of insurance", "Insurable and non-insurable risks", "Principles of insurance", "Procedure for taking out a policy and making a claim"],
        objectives: ["Explain insurance and its importance to business", "Distinguish insurable from non-insurable risks", "Explain the principles of insurance", "Describe how a policy is taken out and a claim made"],
        lesson: {
          title: "Pooling of Risks",
          summary: "Explain the principles of insurance and the procedure for insuring and claiming.",
          minutes: 40,
          notes: `## Insurance
A **contract in which one party (the insurer) undertakes, in return for a payment (the premium), to compensate another party (the insured) for a specified loss** if it occurs.
It works by the **pooling of risks**: many people pay small premiums into a common fund, from which the few who suffer loss are compensated — "the losses of the few are borne by the many".

### Terms
- **insurer (underwriter)** — the insurance company
- **insured (assured)** — the person covered
- **premium** — the payment made by the insured
- **policy** — the document containing the terms of the contract
- **sum insured** — the maximum the insurer will pay
- **risk** — the event insured against
- **proposal form** — the application for insurance
- **cover note** — a temporary document giving cover until the policy is issued
- **claim** — the request for compensation
- **actuary** — the expert who calculates premiums from statistics
- **insurance broker** — an independent agent who arranges insurance for clients

## Importance
- **security** — businesses can take risks, knowing losses will be compensated
- encourages **investment** and enterprise
- **mobilises savings** — premiums are invested in the economy
- helps **foreign trade** — goods in transit are covered
- provides **employment**
- life assurance is a form of **saving**
- protects employees and the public (compulsory insurances)
- loans are easier to get against insured assets

## Insurable and non-insurable risks
### Insurable
Risks whose likelihood can be **calculated from past records**: fire, theft, accident, death, marine losses.
### Non-insurable
Risks that **cannot be measured**, so no premium can be fixed:
- loss of profit through **bad management** or competition
- changes in **fashion and demand**
- **gambling** and speculation
- losses from war, or deliberately caused by the insured
- illegal activities

## Principles of insurance
### 1. Utmost good faith (*uberrimae fidei*)
Both parties must **disclose all material facts** truthfully. If the insured conceals or misstates a material fact, the insurer may **avoid the policy**.
### 2. Insurable interest
The insured must stand to **suffer financial loss** if the event occurs. One can insure one's own house, life or goods — not a stranger's.
### 3. Indemnity
The insured is **restored to the financial position he was in before the loss** — no more, no less. He must not **profit** from a loss. (It does not apply to **life assurance** and personal accident, since life cannot be valued.)
### 4. Subrogation
After paying the claim, the insurer **takes over the insured's rights** — to the damaged property (salvage) and against any third party who caused the loss.
### 5. Contribution
If the same risk is insured with **more than one insurer**, they **share the loss in proportion** to the sums insured; the insured cannot recover more than the loss.
*Example:* a building is insured for ₦300,000 with company A and ₦600,000 with company B; a loss of ₦90,000 occurs. A pays ⅓ = **₦30,000**; B pays ⅔ = **₦60,000**.
### 6. Proximate cause
The loss must result **directly** from the risk insured against.

### Under-insurance and the average clause
If property is insured for **less than its value**, the insured bears part of any loss:
**compensation = (sum insured ÷ actual value) × loss**
*Example:* goods worth ₦800,000 are insured for ₦600,000; fire causes a loss of ₦200,000.
Compensation = 600,000 ÷ 800,000 × 200,000 = **₦150,000**.
### Over-insurance
Insuring for more than the value brings no gain — only the **actual loss** is paid.

## Premium
Calculated according to the degree of risk and the sum insured.
*Example:* a rate of 2% on a sum insured of ₦1,500,000 gives a premium of **₦30,000**.

## Taking out a policy
1. **inquiry** — to the company, an agent or a broker
2. **proposal form** completed with utmost good faith
3. **premium** calculated and paid
4. **cover note** issued
5. **policy** issued

## Making a claim
1. **notify** the insurer promptly (and the police, for theft or accidents)
2. complete a **claim form**
3. the insurer's **assessor (loss adjuster)** investigates and values the loss
4. **payment** — compensation in cash, repair or replacement

## Other terms
- **re-insurance** — an insurer passes part of a large risk to another insurer
- **co-insurance** — several insurers share one risk
- **surrender value** — the amount paid if a life policy is given up early
- **renewal notice**; **endorsement** — a change to the policy
- **no-claim bonus** — a discount for not claiming

## Insurance and gambling
Insurance protects against a loss that would occur anyway and requires an insurable interest; gambling creates a risk for the sake of gain.`,
          examples: `**Example 1.** What is the principle of indemnity? *Answer:* The insured is **restored to his position before the loss** — he must not make a profit.

**Example 2.** A shop worth ₦1,000,000 is insured for ₦750,000; a fire causes damage of ₦400,000. Find the compensation. *Solution:* 750,000 ÷ 1,000,000 × 400,000 = **₦300,000**.

**Example 3.** Give two examples of non-insurable risks. *Answer:* **Losses from bad management** and **changes in fashion**.`,
        },
        questions: [
          ["E", "The payment made by the insured to the insurer for cover is the", "premium", "claim", "policy", "dividend", "It is paid at regular intervals."],
          ["E", "The document that contains the terms of an insurance contract is the", "policy", "cover note only", "proposal form", "claim form", "It is evidence of the contract."],
          ["E", "The basic idea behind insurance is the", "pooling of risks", "making of profit from loss", "avoidance of all premiums", "abolition of risk", "The losses of the few are met from the contributions of many."],
          ["M", "The principle that requires both parties to disclose all material facts is", "utmost good faith", "indemnity", "subrogation", "contribution", "Concealment may make the policy void."],
          ["M", "The principle that the insured must stand to suffer financial loss if the insured event occurs is", "insurable interest", "proximate cause", "contribution", "indemnity", "A person cannot insure a stranger's property."],
          ["M", "The principle that the insured should be restored to his former financial position, without making a profit, is", "indemnity", "subrogation", "utmost good faith", "insurable interest", "It does not apply to life assurance."],
          ["M", "Which of the following is a non-insurable risk?", "loss due to a change in fashion", "loss by fire", "theft of stock", "damage in a road accident", "Its likelihood cannot be calculated."],
          ["H", "Goods worth ₦800,000 are insured for ₦600,000. A fire causes a loss of ₦200,000. Under the average clause, the compensation payable is", "₦150,000", "₦200,000", "₦600,000", "₦50,000", "600,000 ÷ 800,000 × 200,000."],
          ["H", "A building is insured for ₦300,000 with company A and ₦600,000 with company B. For a loss of ₦90,000, company A contributes", "₦30,000", "₦45,000", "₦60,000", "₦90,000", "A bears one-third of the loss."],
          ["H", "The right of an insurer, after paying a claim, to take over the insured's rights against a third party is", "subrogation", "contribution", "re-insurance", "indemnity", "It prevents the insured from recovering twice."],
        ],
      },
      {
        week: 2,
        title: "Types of insurance",
        subtopics: ["Life assurance", "Fire and accident insurance", "Marine insurance", "Motor and other business insurances"],
        objectives: ["Describe the types of life assurance", "Describe fire and accident insurance policies", "Describe marine insurance and its losses", "Describe motor insurance and other insurances used in business"],
        lesson: {
          title: "Classes of Insurance Business",
          summary: "Describe life, fire, accident, marine and motor insurance.",
          minutes: 40,
          notes: `## Assurance and insurance
- **assurance** covers events that are **certain** to happen — death
- **insurance** covers events that **may or may not** happen — fire, theft, accident

## 1. Life assurance
The insurer pays a sum on the **death** of the assured or at the **end of an agreed period**. Indemnity does not apply.
- **whole life policy** — the sum assured is paid **on death**, whenever it occurs
- **endowment policy** — the sum is paid at the **end of a fixed period** (say 20 years) **or on earlier death** — both protection and saving
- **term assurance** — pays only if death occurs within a stated term
- **annuity** — in return for a lump sum, the insurer pays a regular income for life
- **with-profits** policies share in the insurer's profits (bonuses)
- **group life** — covers the employees of an organisation
A life policy has a **surrender value** and can serve as **collateral** for a loan.

## 2. Fire insurance
Covers loss or damage to buildings, stock and contents caused by **fire**; often extended to lightning, explosion, storm, flood and riot ("special perils").
- **consequential loss (loss of profits) insurance** — covers the profit lost and the standing charges while the business is closed after a fire

## 3. Accident insurance
- **burglary and theft** insurance
- **personal accident** — injury or death by accident
- **fidelity guarantee** — covers an employer against loss through the **dishonesty of employees** who handle cash or goods
- **employers' liability (workmen's compensation)** — compensation for employees injured at work
- **public liability** — claims by members of the public injured on the premises or by the firm's activities
- **cash (goods) in transit** — money or goods lost while being moved
- **plate glass** insurance; **professional indemnity** — for negligence by professionals
- **bad debts (credit) insurance**
- **all-risks** and **householders' comprehensive** policies

## 4. Marine insurance
Covers ships and their cargoes against the **perils of the sea** — storms, collision, stranding, fire, piracy, jettison.
### Types
- **hull insurance** — the ship itself
- **cargo insurance** — the goods carried
- **freight insurance** — the shipowner's loss of freight if the cargo is not delivered
- **shipowner's liability** — damage to other ships, ports and people
### Policies
- **voyage policy** — for one voyage
- **time policy** — for a period (usually a year)
- **mixed policy** — a voyage within a period
- **floating policy** — a large sum covering many shipments, each declared as it is made
- **valued** and **unvalued** policies
### Marine losses
- **total loss** — **actual** (the ship or cargo is destroyed) or **constructive** (the cost of recovery exceeds its value, so it is abandoned)
- **partial loss**:
  - **particular average** — an **accidental** partial loss, borne by the owner of the property affected (and his insurer)
  - **general average** — a loss **deliberately incurred** to save the whole venture, such as **jettison** of cargo in a storm; it is **shared by all parties** in proportion to the value of their interests
**Lloyd's of London** is the famous market where marine risks are underwritten.

## 5. Motor insurance
- **third-party** insurance — **compulsory by law**: covers injury to or death of other people (and damage to their property) caused by the vehicle
- **third-party, fire and theft** — adds loss of the vehicle by fire or theft
- **comprehensive** — covers the third party, fire, theft **and** accidental damage to the insured's own vehicle and injury to the owner
A **no-claim bonus** reduces the premium for careful drivers.

## 6. Other insurances
- **aviation** insurance — aircraft, passengers and cargo
- **agricultural** insurance — crops and livestock (the Nigerian Agricultural Insurance Corporation)
- **export credit** insurance — against non-payment by foreign buyers
- **health insurance** (the National Health Insurance scheme)
- oil and gas insurance; engineering insurance

## Compulsory insurances in Nigeria
motor third-party; builders' liability; occupiers' liability for public buildings; group life for employees; health-care professional indemnity; marine insurance on imports with local insurers.

## Regulation
The **National Insurance Commission (NAICOM)** licenses and supervises insurers.

## Choosing cover for a business
A trader typically needs fire, burglary, goods-in-transit, fidelity guarantee, employers' liability, public liability and motor policies.`,
          examples: `**Example 1.** Distinguish a whole life policy from an endowment policy. *Answer:* A **whole life** policy pays **on death** only; an **endowment** policy pays at the **end of a fixed term or on earlier death**.

**Example 2.** Which policy protects an employer against theft by his cashier? *Answer:* **Fidelity guarantee** insurance.

**Example 3.** What is general average? *Answer:* A loss **deliberately incurred to save a ship and its cargo**, shared by all the parties.`,
        },
        questions: [
          ["E", "Insurance against the death of a person is properly called", "life assurance", "fire insurance", "marine insurance", "fidelity guarantee", "Assurance covers an event that is certain to happen."],
          ["E", "The motor insurance that is compulsory by law is", "third-party insurance", "comprehensive insurance", "hull insurance", "fidelity guarantee", "It covers injury to other people."],
          ["E", "Insurance of ships and their cargoes against the perils of the sea is", "marine insurance", "aviation insurance", "accident insurance", "life assurance", "It includes hull, cargo and freight insurance."],
          ["M", "A life policy under which the sum assured is paid at the end of a fixed period or on earlier death is", "an endowment policy", "a whole life policy", "a time policy", "a floating policy", "It combines protection with saving."],
          ["M", "The policy that protects an employer against loss caused by the dishonesty of his employees is", "fidelity guarantee", "public liability", "employers' liability", "consequential loss", "It covers staff who handle cash or goods."],
          ["M", "Insurance that compensates a business for profits lost while it is closed after a fire is", "consequential loss insurance", "burglary insurance", "hull insurance", "third-party insurance", "It is also called loss of profits insurance."],
          ["M", "The marine policy that covers a ship for a stated period, such as twelve months, is a", "time policy", "voyage policy", "floating policy", "endowment policy", "A voyage policy covers a single journey."],
          ["H", "A loss deliberately incurred to save a ship and its cargo, such as throwing goods overboard in a storm, is", "general average", "particular average", "constructive total loss", "actual total loss", "It is shared by all parties to the voyage."],
          ["H", "A motor policy that also covers accidental damage to the insured's own vehicle is", "comprehensive", "third-party only", "third-party, fire and theft", "fidelity guarantee", "It gives the widest cover."],
          ["H", "The principle of indemnity does not apply to life assurance because", "the value of a human life cannot be measured in money", "life policies are free", "death is uncertain", "premiums are not paid", "An agreed sum is paid instead."],
        ],
      },
      {
        week: 3,
        title: "Transport",
        subtopics: ["Meaning and importance of transport", "Road and rail transport", "Water, air and pipeline transport", "Choice of transport and transport documents"],
        objectives: ["Explain the importance of transport to commerce", "Compare road and rail transport", "Compare water, air and pipeline transport", "State the factors affecting the choice of transport and describe transport documents"],
        lesson: {
          title: "Moving Goods and People",
          summary: "Compare the modes of transport and explain how a mode is chosen.",
          minutes: 40,
          notes: `## Transport
The **movement of goods and people from one place to another**. It creates **utility of place**.

## Importance to commerce
- makes goods available **where they are needed**
- **widens markets** and allows large-scale production and specialisation
- links producers to raw materials and consumers
- makes **foreign trade** possible
- steadies prices by moving goods from areas of plenty to areas of scarcity
- provides **employment**; promotes tourism and mobility of labour
- opens up remote areas for development

## Road transport
Lorries, vans, buses, cars, motorcycles.
| Advantages | Disadvantages |
|---|---|
| **door-to-door** delivery | limited carrying capacity |
| **flexible** — routes and times can be changed | **traffic congestion** and delays |
| quick over **short distances** | high **accident** rate |
| reaches remote areas | expensive over long distances |
| cheap to start; little handling of goods | affected by bad roads and weather; pollution |

## Rail transport
| Advantages | Disadvantages |
|---|---|
| carries **bulky and heavy goods** cheaply over **long distances** | **inflexible** — fixed routes and timetables |
| large carrying capacity | **not door-to-door** — needs road transport at each end |
| relatively **safe**; little congestion | very high cost of construction and maintenance |
| not much affected by weather | slow for short journeys; uneconomic for small loads |

## Water transport
### Inland waterways
Rivers, lakes, creeks and canals — canoes, barges, ferries. Cheap for bulky goods, but slow and affected by seasonal water levels.
### Sea (ocean) transport
- **liners** — sail on **fixed routes to a regular timetable**; **passenger liners** and **cargo liners**
- **tramp steamers** — have **no fixed route or timetable**; they go wherever cargo is available and are hired under a **charter party**
- **coasters** — trade between ports of the same coast
- **tankers** — oil and liquids; **bulk carriers** — grain, ore; **container ships**; refrigerated ships
| Advantages | Disadvantages |
|---|---|
| **cheapest** for bulky goods over long distances | the **slowest** mode |
| very large carrying capacity | affected by storms and tides |
| the "road" is free; suits international trade | ports are costly; risk of pilferage and piracy |

## Air transport
| Advantages | Disadvantages |
|---|---|
| the **fastest** | the **most expensive** |
| suits **perishable, light and valuable** goods, mail and urgent items | limited capacity — unsuitable for bulky goods |
| less handling and pilferage | airports are far from towns; affected by weather |
| crosses seas and mountains | accidents are usually fatal |

## Pipelines
Carry **crude oil, petroleum products, gas and water**. Continuous, cheap to run and unaffected by weather or traffic; but costly to lay, limited to fluids, and exposed to leakage and vandalism.

## Containerisation
Packing goods into large **standard steel boxes (containers)** that pass unopened from factory to destination by lorry, train and ship.
- **advantages**: faster loading and unloading; less handling; less damage and **pilferage**; lower insurance and packing costs; easy transfer between modes
- **disadvantages**: expensive cranes and terminals; unsuitable for some goods; empty containers must be returned; fewer dock jobs

## Factors affecting the choice of transport
- the **nature of the goods** — perishable, bulky, fragile, valuable, dangerous
- **cost**
- **speed (urgency)**
- **distance**
- **safety and reliability**
- **availability** and convenience of the mode
- the **value** of the goods in relation to the cost of carriage

## Transport documents
| Document | Used in |
|---|---|
| **waybill (consignment note)** | road and rail — details of goods and consignee |
| **delivery note** | signed on receipt of the goods |
| **bill of lading** | sea transport — receipt, contract of carriage and document of title |
| **charter party** | the contract for hiring a ship: **voyage charter** (one voyage) or **time charter** (a period) |
| **airway bill** | air freight |
| **ship's manifest** | list of all cargo on a ship |
| **freight note** | the carrier's bill |

## Terms
- **freight** — the charge for carrying goods by sea or air (also the cargo itself)
- **demurrage** — a charge for delay in loading or unloading, or for leaving goods at the port beyond the free period
- **common carrier** — one who offers to carry for anyone; **private carrier** — one who carries only his own or selected customers' goods
- **carriage** — the charge for transporting goods by land

## Organisations
the Nigerian Railway Corporation; the Nigerian Ports Authority; the Federal Airports Authority of Nigeria; the Nigerian Maritime Administration and Safety Agency; the Federal Road Safety Corps.

## Problems of transport in Nigeria
bad roads; old vehicles and trains; congestion at ports and in cities; high cost of fuel and spare parts; accidents; insecurity; inadequate funding.`,
          examples: `**Example 1.** Which mode of transport is best for fresh flowers needed urgently abroad? *Answer:* **Air** transport — they are perishable and urgent.

**Example 2.** Distinguish a liner from a tramp steamer. *Answer:* A **liner** follows a **fixed route and timetable**; a **tramp** has none and goes where cargo is available.

**Example 3.** What is demurrage? *Answer:* A **charge for delay** in loading, unloading or removing goods.`,
        },
        questions: [
          ["E", "The mode of transport that provides door-to-door service is", "road transport", "rail transport", "air transport", "sea transport", "Vehicles can reach the customer's premises."],
          ["E", "The fastest means of transport is", "air", "road", "rail", "water", "It is also the most expensive."],
          ["E", "Crude oil and gas are best transported over land by", "pipeline", "aeroplane", "motorcycle", "passenger train", "The flow is continuous."],
          ["M", "The cheapest means of carrying bulky goods over long distances between continents is", "sea transport", "air transport", "road transport", "rail transport", "Ships have very large capacity."],
          ["M", "A ship that sails on a fixed route according to a regular timetable is a", "liner", "tramp steamer", "coaster only", "barge", "Tramps have no fixed route."],
          ["M", "The document used when a whole ship is hired for a voyage or a period is the", "charter party", "bill of lading", "waybill", "airway bill", "It may be a voyage or a time charter."],
          ["M", "A charge made for delay in unloading or removing goods from a port is", "demurrage", "freight", "brokerage", "premium", "It encourages prompt clearance."],
          ["H", "The packing of goods into large standard steel boxes that move unopened by lorry, rail and ship is", "containerisation", "warehousing", "branding", "palletising only", "It reduces handling, damage and pilferage."],
          ["H", "The most suitable means of transporting a small consignment of urgently needed vaccines to a distant country is", "air transport", "sea transport", "rail transport", "pipeline", "The goods are light, valuable, perishable and urgent."],
          ["H", "A disadvantage of rail transport is that it", "is inflexible and does not give door-to-door service", "cannot carry heavy goods", "is the most expensive for bulky goods", "is the most affected by traffic jams", "Goods must be moved to and from stations by road."],
        ],
      },
      {
        week: 4,
        title: "Communication",
        subtopics: ["Meaning and importance of communication", "Postal services", "Telecommunication services", "Modern information and communication technology"],
        objectives: ["Explain communication and its importance to business", "Describe the services of the post office", "Describe telecommunication services", "Describe modern information technology used in business communication"],
        lesson: {
          title: "Passing Information in Business",
          summary: "Describe the means of communication used in commerce and their importance.",
          minutes: 40,
          notes: `## Communication
The **process of transmitting information, ideas and messages from one person or place to another**. It has a **sender**, a **message**, a **medium (channel)**, a **receiver** and **feedback**.

## Importance to commerce
- links **buyers and sellers** — inquiries, orders, payments
- speeds up **business decisions**
- helps **advertising** and market information
- co-ordinates branches and departments
- aids **foreign trade**
- supports banking, transport and insurance
- reduces the need to travel; saves time and cost
- promotes good relations with customers and the public

## Types
- **oral (verbal)** — face-to-face talks, meetings, telephone calls: quick, with instant feedback, but leaves no record
- **written** — letters, memoranda, reports, e-mails, notices: a permanent record, but slower
- **visual** — charts, signs, pictures, films
- **non-verbal** — gestures, signals
- **internal** communication — within an organisation; **external** — with outsiders

## Traditional means
town criers, drums, gongs, messengers, smoke signals — limited in range and speed.

## Postal services
In Nigeria, provided by the **Nigerian Postal Service (NIPOST)** and by private **courier** companies.
- **letters** and postcards; **parcel post**
- **registered post** — for valuable items; a receipt is given and compensation paid for loss
- **recorded delivery** — proof of posting and of delivery, for documents of little money value
- **express delivery / Expedited Mail Service (EMS Speedpost)** — fast delivery
- **poste restante** — letters kept at a post office "to be called for" by a person with no fixed address, such as a traveller
- **post office box** and **private mail bag** — private receptacles from which mail is collected
- **business reply service** — the addressee, not the sender, pays the postage; used to encourage replies
- **franking machine** — prints postage on envelopes, saving the use of stamps
- **cash on delivery (COD)** — the postman collects the price of goods on delivery
- **airmail**; postal and money orders; sale of stamps; savings and agency services

## Telecommunication services
Regulated by the **Nigerian Communications Commission (NCC)**. Mobile (GSM) telephony was introduced in **2001**.
- **telephone** — fixed and mobile: instant two-way conversation
- **text messages (SMS)** and multimedia messages
- **telegram / cable** and **telex** — older services for written messages sent over wires
- **fax (facsimile)** — sends an exact copy of a document over telephone lines
- **radio and television** — mass communication and advertising
- **satellite** communication
- **intercom** and public-address systems for internal use

## Modern information and communication technology
- **the internet** — a worldwide network of computers
- **electronic mail (e-mail)** — fast, cheap, written messages with attachments
- **websites** — online information, catalogues and shops
- **video-conferencing** — meetings between people in different places
- **social media** and messaging applications — marketing and customer service
- **cloud storage**; intranets
- **teleconferencing**; voicemail

### Advantages
speed; low cost; worldwide reach; large amounts of information; records are kept; work can be done from anywhere.
### Disadvantages
dependence on electricity and networks; cost of equipment; **cyber-crime**, viruses and loss of privacy; information overload; need for skills.

## Factors affecting the choice of a means of communication
- **speed (urgency)**
- **cost**
- **distance**
- need for a **written record**
- **confidentiality (secrecy)**
- the **nature and length** of the message
- need for immediate **feedback**
- **availability** of the service to both parties
- safety and reliability

## Barriers to effective communication
language differences; noise; poor network; unclear messages; distance; wrong channel; distrust.

## Courier services
Private firms (and EMS) offering fast, door-to-door delivery of letters and parcels, with tracking.

## The mass media
newspapers, magazines, radio, television and the internet — channels that reach large audiences; important for advertising and public information.`,
          examples: `**Example 1.** Which postal service keeps letters at the post office for a traveller to collect? *Answer:* **Poste restante**.

**Example 2.** Give three factors that affect the choice of a means of communication. *Answer:* **Speed, cost and the need for a written record**.

**Example 3.** State two advantages of e-mail over ordinary post. *Answer:* It is **faster** and **cheaper**.`,
        },
        questions: [
          ["E", "The transmission of information from one person or place to another is", "communication", "transportation", "warehousing", "insurance", "It needs a sender, a message and a receiver."],
          ["E", "The organisation responsible for postal services in Nigeria is", "NIPOST", "NAFDAC", "NPA", "NAICOM", "It is the Nigerian Postal Service."],
          ["E", "A message sent electronically from one computer or phone to another over the internet is", "an e-mail", "a telegram", "a postal order", "a parcel", "It is fast and cheap."],
          ["M", "The postal service by which valuable items are sent and compensation is paid if they are lost is", "registered post", "poste restante", "business reply service", "ordinary post", "A receipt is given to the sender."],
          ["M", "Letters addressed to a post office to be collected by a person with no fixed address are sent by", "poste restante", "recorded delivery", "private mail bag", "franking", "It is useful for travellers."],
          ["M", "A service under which the addressee, not the sender, pays the postage is", "business reply service", "registered post", "cash on delivery", "express delivery", "Firms use it to encourage replies from customers."],
          ["M", "A machine that sends an exact copy of a document over telephone lines is a", "fax machine", "franking machine", "typewriter", "cash register", "Fax is short for facsimile."],
          ["H", "The most important factor in choosing a means of communication for an urgent message is", "speed", "the colour of the paper", "the age of the sender", "the weight of the envelope", "Delay may cost the business an opportunity."],
          ["H", "Oral communication has the disadvantage that it", "leaves no permanent record", "gives no feedback", "is always slow", "cannot be used within an office", "A written message can be kept for reference."],
          ["H", "The body that regulates telecommunication services in Nigeria is the", "Nigerian Communications Commission", "Nigerian Postal Service", "National Insurance Commission", "Corporate Affairs Commission", "It licenses and supervises network operators."],
        ],
      },
      {
        week: 5,
        title: "Warehousing",
        subtopics: ["Meaning and importance of warehousing", "Types of warehouse", "Bonded warehouses", "Features of a good warehouse and warehouse documents"],
        objectives: ["Explain warehousing and its importance to commerce", "Describe the types of warehouse", "Explain the bonded warehouse and its advantages", "State the features of a good warehouse and the documents used"],
        lesson: {
          title: "Storing Goods Until They Are Needed",
          summary: "Explain the functions and types of warehouse and their importance to trade.",
          minutes: 40,
          notes: `## Warehousing
The **storage of goods from the time they are produced until they are needed** for use or sale. A **warehouse** is a building used for this purpose. Warehousing creates **utility of time**.

## Importance (functions)
- makes goods **available throughout the year** — especially seasonal produce
- allows **production ahead of demand** — manufacturers can produce continuously in large quantities
- helps to **stabilise prices** — goods are held when plentiful and released when scarce
- **protects** goods from theft, weather and damage
- goods are **prepared for sale** — sorted, graded, blended, packed, branded and bottled
- some goods **improve or mature** with storage — wine, tobacco, timber
- allows **breaking of bulk** and assembling of orders
- goods awaiting **transport** or **payment of customs duty** can be kept
- buyers may **inspect** goods before purchase
- goods in a warehouse can be used as **security for a loan**
- supports the smooth flow of trade — importers, exporters and wholesalers depend on it

## Types of warehouse
### Manufacturers' warehouses
Kept by producers near their factories — for raw materials and finished goods awaiting dispatch.
### Wholesalers' warehouses
Where wholesalers hold stock for supply to retailers; the heart of the wholesale trade.
### Retailers' warehouses (store rooms)
Kept by large retailers — supermarkets, department stores, multiple shops — to supply their shops and branches.
### Public warehouses
Owned by individuals, companies or port and railway authorities and **let out to the public** for a rent. Useful to traders who cannot afford their own; found at ports, railway stations and industrial centres.
### Private warehouses
Owned and used by a firm for **its own goods** only.
### Bonded warehouses
For **imported goods on which customs duty has not yet been paid** (see below).
### Special warehouses
- **cold stores (refrigerated warehouses)** — for perishable goods: fish, meat, fruit, drugs
- **silos** — for grain; **tank farms** — for oil and liquids
- **queen's (state) warehouses** — government warehouses at ports for seized or unclaimed goods
- **transit sheds** — short-term storage at ports

## Bonded warehouse
A warehouse, at or near a port, in which **dutiable imported goods are stored under the supervision of customs officers until the duty is paid**. The owner gives a **bond** (guarantee) to the customs that goods will not be removed without payment.

### Features
- under **customs control** — goods are released only on payment of duty or for re-export
- goods may be removed **in instalments**, duty being paid on each lot
- goods may be **prepared for sale** in bond — blended, bottled, repacked
- goods may be **sold while still in bond** — the buyer pays the duty
- goods **re-exported** from bond pay **no duty**

### Advantages
- the importer need **not pay duty at once** — his capital is not tied up
- duty is paid **only on goods actually taken out**
- goods can be **re-exported without paying duty** — aiding entrepôt trade
- safe storage near the port
- goods can be sold or used as **security** while in bond (by means of a **dock warrant** or warehouse warrant)
- no duty on goods that evaporate or deteriorate in store
- government is sure of collecting its revenue

## Features of a good (ideal) warehouse
- **good location** — near producers, markets and transport (roads, railway, port)
- **spacious** — enough room for goods and for movement
- **security** — strong doors, guards, alarms against theft
- **fire protection** — extinguishers, sprinklers, hydrants
- suitable **equipment** — shelves, pallets, forklifts, cranes, weighing machines
- special facilities — **cold rooms** for perishables
- well **ventilated**, dry and protected from pests
- good **record keeping** and trained staff
- loading bays, parking and easy access
- insurance cover

## Warehouse documents
- **warehouse (dock) warrant** — a **document of title** to goods stored in a warehouse; goods can be sold or pledged by transferring it
- **warehouse keeper's receipt** — acknowledges goods received (not a document of title)
- **delivery order** — the owner's written instruction to the warehouse keeper to release goods to the named person
- **goods received note**; **stock (bin) cards**; **stores requisition**

## Warehousing and the other aids to trade
Warehousing works with **transport** (to and from the store), **insurance** (cover against fire and theft) and **banking** (loans against warehouse warrants).

## Problems of warehousing in Nigeria
inadequate and poorly equipped warehouses; high rents; pilferage; fire; pests and spoilage; poor power supply for cold stores; congestion at the ports.`,
          examples: `**Example 1.** Which utility does warehousing create? *Answer:* **Utility of time** — goods are available when needed.

**Example 2.** State two advantages of a bonded warehouse to an importer. *Answer:* **Duty is paid only when goods are removed**, and goods can be **re-exported without duty**.

**Example 3.** What is a warehouse warrant? *Answer:* A **document of title** to goods held in a warehouse.`,
        },
        questions: [
          ["E", "The storage of goods from the time of production until they are needed is", "warehousing", "advertising", "transport", "insurance", "It creates utility of time."],
          ["E", "A warehouse fitted with refrigeration for storing perishable goods is a", "cold store", "bonded warehouse", "silo", "transit shed", "Fish and meat are kept in it."],
          ["E", "A warehouse owned by a firm and used only for its own goods is a", "private warehouse", "public warehouse", "bonded warehouse", "state warehouse", "Public warehouses are let to anyone for rent."],
          ["M", "A warehouse let out to members of the public for the storage of their goods on payment of rent is a", "public warehouse", "private warehouse", "retailer's store room", "manufacturer's warehouse", "Traders without their own stores make use of it."],
          ["M", "A function of warehousing is to", "make seasonal goods available all year round", "increase the price of goods", "replace transport", "collect customs duty", "Goods are stored until they are in demand."],
          ["M", "A feature of a good warehouse is", "nearness to transport facilities", "distance from all roads", "absence of fire-fighting equipment", "poor ventilation", "Goods must move in and out easily."],
          ["M", "The document of title to goods stored in a warehouse is the", "warehouse warrant", "delivery note", "invoice", "receipt for rent", "Goods can be sold or pledged by transferring it."],
          ["H", "An advantage of a bonded warehouse to an importer is that", "duty is paid only on the goods actually removed", "no duty is ever payable on goods sold locally", "goods are stored free of charge", "customs officers are not involved", "His capital is not tied up in duty paid in advance."],
          ["H", "Goods re-exported directly from a bonded warehouse", "pay no customs duty", "pay double duty", "must first be sold locally", "are seized by customs", "This encourages entrepôt trade."],
          ["H", "By holding stocks in times of plenty and releasing them in times of scarcity, warehousing helps to", "stabilise prices", "cause inflation", "create shortages", "eliminate retailers", "Supply to the market is evened out over time."],
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
        title: "Advertising",
        subtopics: ["Meaning and purposes of advertising", "Types of advertising", "Advertising media", "Advantages, disadvantages and regulation of advertising"],
        objectives: ["Explain advertising and its purposes", "Describe the types of advertising", "Compare the media of advertising", "Assess the advantages and disadvantages of advertising and how it is regulated"],
        lesson: {
          title: "Making Goods Known",
          summary: "Explain the purposes, types and media of advertising and assess its effects.",
          minutes: 40,
          notes: `## Advertising
Any **paid form of non-personal communication** through the media by which a business **informs** the public about its goods and services and **persuades** them to buy.

## Purposes (functions)
- to **inform** the public of a product — its existence, uses, price and where to buy
- to **introduce new products**
- to **persuade** people to buy and to **increase sales**
- to **remind** customers and maintain demand
- to build the **image and goodwill** of the firm
- to meet **competition**
- to educate consumers on how to use a product
- to announce changes — new prices, branches or opening hours

## Types
- **informative advertising** — gives **facts** about a product; useful for new products and public notices
- **persuasive advertising** — appeals to **emotions** to convince people that one product is better or necessary
- **competitive advertising** — aims to draw customers from rival brands ("the best in the market")
- **mass (generic or collective) advertising** — promotes a **type of product** in general, usually by a trade association ("drink more milk")
- **direct advertising** — aimed at **selected individuals**: letters, e-mails, catalogues, text messages
- **indirect advertising** — aimed at the **general public** through the mass media
- **institutional (corporate) advertising** — promotes the **name and image** of the organisation rather than a product
- **reminder advertising**

## Advertising media
The channels through which advertisements reach the public.
| Medium | Advantages | Disadvantages |
|---|---|---|
| **newspapers and magazines** | wide readership; detail can be given; can be kept and re-read; magazines reach special groups in colour | useless to illiterates; newspapers have a short life; magazines are costly and slow |
| **radio** | reaches literates and illiterates, in local languages; cheap; reaches remote areas | no pictures; the message is short-lived; listeners may be inattentive |
| **television** | sound, colour and movement; products can be demonstrated; very persuasive | very expensive; needs electricity; brief; limited to set owners |
| **posters and billboards (outdoor)** | seen repeatedly by passers-by; colourful; long-lasting | little detail; affected by weather; may be defaced |
| **cinema** | captive audience; sound and vision | small audience |
| **handbills, leaflets and catalogues** | cheap; can target an area | often thrown away |
| **internet and social media** | worldwide; interactive; can be targeted; cheap; results measurable | needs internet access; easily ignored; fraud |
| **neon signs; transport advertising; window displays; trade fairs and exhibitions; sponsorship; free samples** | attract attention at the point of sale or to special audiences | limited reach |

### Factors affecting the choice of medium
- the **cost** and the firm's budget
- the **target audience** — age, sex, literacy, income, location
- the **nature of the product**
- the **coverage** required — local, national or international
- the **message** — need for colour, movement or detail
- the medium used by **competitors**
- how long the message should last

## Advertising agencies
Specialist firms that **plan, design and place** advertisements for clients: market research, choice of media, copywriting and artwork, booking space and time, and measuring results.

## Advantages of advertising
### To producers and traders
increased sales and turnover; mass production and lower unit costs; new products are introduced quickly; brand loyalty; faster stock turnover.
### To consumers
information about goods available, their uses and prices; wider choice; may lead to lower prices through large-scale production; better quality through competition.
### To the economy
employment in the media and agencies; revenue for newspapers, radio and television; growth of industry.

## Disadvantages (criticisms)
- the **cost is passed on** to consumers in higher prices
- it may be **misleading or exaggerated**
- it persuades people to buy what they do **not need** — waste and debt
- it may encourage harmful products
- it creates brand monopolies and wasteful competition
- it can lower moral standards and clutter the environment

## Regulation
In Nigeria, the **Advertising Regulatory Council of Nigeria (ARCON)** — formerly the Advertising Practitioners Council (APCON) — vets advertisements, which must be **legal, decent, honest and truthful**. Other bodies: NAFDAC (food and drug advertisements), the broadcasting commission, and the consumer protection commission.

## Branding, packaging and trade marks
- a **brand name** identifies a product and builds loyalty
- **packaging** protects and promotes the product
- a registered **trade mark** gives the legal right to exclusive use of a name or symbol`,
          examples: `**Example 1.** Distinguish informative from persuasive advertising. *Answer:* **Informative** advertising gives **facts**; **persuasive** advertising appeals to **emotions** to induce buying.

**Example 2.** Which medium is best for reaching illiterate rural dwellers? *Answer:* **Radio**, especially in local languages.

**Example 3.** Give two criticisms of advertising. *Answer:* It **raises prices** and may be **misleading**.`,
        },
        questions: [
          ["E", "The paid, non-personal communication by which a firm informs the public about its goods and persuades them to buy is", "advertising", "warehousing", "insurance", "banking", "It is carried through the media."],
          ["E", "The channels through which advertisements reach the public are called", "advertising media", "trade discounts", "bills of lading", "trade marks", "Radio, television and newspapers are examples."],
          ["E", "An advertising medium that combines sound, colour and movement is", "television", "radio", "a handbill", "a newspaper", "Products can be demonstrated on it."],
          ["M", "Advertising that simply gives facts about a product and where to buy it is", "informative advertising", "persuasive advertising", "competitive advertising", "generic advertising", "It is common for new products and public notices."],
          ["M", "Advertising by a trade association to promote a type of product in general, rather than a brand, is", "mass (generic) advertising", "direct advertising", "competitive advertising", "institutional advertising", "'Eat more fish' is an example."],
          ["M", "The most suitable medium for reaching illiterate people in remote villages is", "radio", "newspapers", "magazines", "the internet", "Messages can be broadcast in local languages."],
          ["M", "A specialist firm that plans and places advertisements for clients is", "an advertising agency", "a chamber of commerce", "a confirming house", "a discount house", "It designs the message and chooses the media."],
          ["H", "A criticism of advertising is that it", "increases the cost of goods to the consumer", "informs consumers about new products", "creates employment", "widens the market", "The cost of advertising is included in the price."],
          ["H", "Advertising aimed at building the name and reputation of a company rather than selling a particular product is", "institutional advertising", "informative advertising", "direct advertising", "reminder advertising", "It is also called corporate advertising."],
          ["H", "A factor to be considered in choosing an advertising medium is", "the target audience to be reached", "the colour of the factory", "the number of directors", "the age of the product's inventor", "The medium must be one the intended buyers use."],
        ],
      },
      {
        week: 2,
        title: "Marketing",
        subtopics: ["Meaning and importance of marketing", "The marketing concept and marketing mix", "Market research and market segmentation", "Pricing and distribution policies"],
        objectives: ["Explain marketing and its importance", "Explain the marketing concept and the elements of the marketing mix", "Explain market research and market segmentation", "Describe pricing and distribution policies"],
        lesson: {
          title: "Meeting Customers' Needs Profitably",
          summary: "Explain the marketing concept, the marketing mix and market research.",
          minutes: 40,
          notes: `## Marketing
All the **activities involved in identifying, anticipating and satisfying customers' needs profitably** — from finding out what customers want, through designing, pricing, promoting and distributing the product, to after-sales service.
Marketing is wider than **selling**, which is only the exchange of the product for money.

## Importance
- finds out and **satisfies consumers' needs**
- creates and increases **demand**
- makes goods available at the right **place, time and price**
- helps firms to grow and earn profit
- introduces new and better products; raises living standards
- provides **employment**
- links production with consumption

## Functions of marketing
**market research**; product planning and development; **buying**; standardisation and grading; **pricing**; branding and packaging; **promotion** (advertising, selling); **distribution** (transport and storage); financing; risk bearing; after-sales service.

## The marketing concept
A business philosophy holding that the key to success is to **find out what customers want and supply it**, rather than to make goods and then look for buyers — "**the customer is king**".
| Production / selling orientation | Marketing orientation |
|---|---|
| starts with the product | starts with the **customer's needs** |
| relies on heavy selling | relies on **customer satisfaction** |
| profit through sales volume | profit through satisfied customers |

## The marketing mix — the "four Ps"
The combination of controllable factors a firm uses to influence buyers.
1. **Product** — the good or service: its quality, design, features, brand name, packaging, range and after-sales service
2. **Price** — the amount charged: list price, discounts, credit terms
3. **Place (distribution)** — how the product reaches the customer: channels, outlets, transport, warehousing, stock levels
4. **Promotion** — communicating with the market: advertising, sales promotion, personal selling, public relations
For services, three more are often added: people, process and physical evidence.

## Market research
The **systematic collection and analysis of information about the market** for a product.
### What it finds out
who the customers are and what they want; the size of the market; competitors and their prices; the best price, package and channel; the effectiveness of advertising; reasons for falling sales.
### Methods
- **desk (secondary) research** — using existing records, publications and statistics
- **field (primary) research** — collecting new data by **questionnaires**, **interviews**, **observation**, consumer panels and test marketing
### Importance
reduces the risk of failure; guides production, pricing and promotion; reveals new opportunities.

## Market segmentation
Dividing a market into **groups of buyers with similar needs** — by **age, sex, income, location, occupation or lifestyle** — so that products and messages can be aimed at each group (the **target market**).

## The product life cycle
**introduction → growth → maturity → saturation → decline.** Sales and profits change at each stage, and so does the marketing mix.

## Branding and packaging
- a **brand** is a name, symbol or design that identifies a product and distinguishes it from competitors'
- **packaging** protects the product, makes handling easy, carries information and attracts buyers
- a **trade mark** is a legally registered brand

## Pricing policies
- **cost-plus pricing** — cost plus a percentage for profit
- **market (competitive) pricing** — the going rate
- **penetration pricing** — a **low** price to enter a market and win a large share
- **skimming** — a **high** price at first for a new product, lowered later
- **psychological pricing** — ₦999 rather than ₦1,000
- **price discrimination** — different prices for different buyers
- **loss leader** — an item sold at or below cost to attract customers who will buy other goods
### Factors affecting price
cost of production; demand; competitors' prices; the firm's objectives; government policy and taxes; the stage of the product's life.

## Distribution policy
Choosing the channel — through wholesalers and retailers, direct to retailers, or direct to consumers — according to the product, the market and the cost.

## Promotion
advertising; sales promotion; personal selling; public relations and publicity; direct and digital marketing.

## Customer service
Courtesy, reliability, prompt delivery and the handling of complaints build **loyalty** and repeat sales.`,
          examples: `**Example 1.** Name the four Ps of the marketing mix. *Answer:* **Product, price, place and promotion**.

**Example 2.** What is market research? *Answer:* The **systematic collection and analysis of information about the market** for a product.

**Example 3.** A firm sets a very low price to capture a new market. Which pricing policy is this? *Answer:* **Penetration pricing**.`,
        },
        questions: [
          ["E", "The activities involved in identifying and satisfying customers' needs at a profit make up", "marketing", "auditing", "warehousing", "underwriting", "It is wider than selling."],
          ["E", "The 'four Ps' of the marketing mix are product, price, place and", "promotion", "profit", "people only", "production", "Promotion communicates with the market."],
          ["E", "A name or symbol that identifies a product and distinguishes it from those of competitors is", "a brand", "a quota", "a tariff", "a premium", "A registered brand is a trade mark."],
          ["M", "The systematic collection and analysis of information about the market for a product is", "market research", "market segmentation", "personal selling", "sales promotion", "It reduces the risk of failure."],
          ["M", "The business philosophy that a firm should first find out what customers want and then supply it is the", "marketing concept", "production concept", "law of supply", "principle of indemnity", "The customer is regarded as king."],
          ["M", "Dividing a market into groups of buyers with similar characteristics is", "market segmentation", "market research", "price discrimination", "branding", "Groups may be based on age, sex or income."],
          ["M", "In the marketing mix, the element concerned with channels of distribution is", "place", "product", "price", "promotion", "It deals with getting the product to the customer."],
          ["H", "Setting a low price for a new product in order to win a large share of the market quickly is", "penetration pricing", "skimming", "cost-plus pricing", "price discrimination", "The price may be raised later."],
          ["H", "Collecting new information from consumers by means of questionnaires and interviews is", "field research", "desk research", "branding", "sales forecasting from accounts", "It gathers primary data."],
          ["H", "An item sold at or below cost in order to attract customers who will then buy other goods is", "a loss leader", "a trade mark", "a premium offer", "a blue chip", "Supermarkets often use this method."],
        ],
      },
      {
        week: 3,
        title: "Sales promotion, personal selling and public relations",
        subtopics: ["Sales promotion and its methods", "Personal selling", "Public relations and publicity", "Customer service and after-sales service"],
        objectives: ["Explain sales promotion and describe its methods", "Explain personal selling and the qualities of a good salesperson", "Explain public relations and publicity", "Explain the importance of customer service and after-sales service"],
        lesson: {
          title: "Other Ways of Promoting Sales",
          summary: "Describe sales promotion, personal selling, public relations and customer service.",
          minutes: 40,
          notes: `## Promotion
The part of the marketing mix that **communicates with customers**. Its tools — the **promotional mix** — are **advertising**, **sales promotion**, **personal selling** and **public relations**.

## Sales promotion
**Short-term incentives** offered to encourage customers to buy **now**, and to support advertising and personal selling.
### Methods aimed at consumers
- **free samples** — to try a new product
- **price reductions** — "cents-off" deals, clearance and seasonal sales
- **free gifts (premiums)** — an item given free with a purchase
- **bonus packs** — "buy one, get one free"; extra quantity at the same price
- **coupons and vouchers** — entitling the holder to a discount
- **competitions, raffles and promos** — prizes for buyers
- **trading stamps and loyalty cards** — points collected and exchanged for goods
- **demonstrations** — showing how the product works
- **point-of-sale displays** and attractive shop windows
- **trade fairs and exhibitions**
- **after-sales service** and guarantees
- credit facilities; free delivery
### Methods aimed at traders
trade discounts and bonuses; display materials; sales contests; credit; training of dealers' staff.

### Advantages
quick increase in sales; attracts new customers; helps to introduce new products; clears old stock; rewards loyal customers.
### Disadvantages
effects are short-lived; costly; frequent offers may cheapen the brand; customers may wait for the next promotion.

### Advertising and sales promotion compared
| Advertising | Sales promotion |
|---|---|
| gives a **reason to buy** | gives an **incentive to buy now** |
| long-term building of demand | short-term boost |
| through mass media | at the point of sale or directly |

## Personal selling
**Face-to-face communication** between a salesperson and a prospective buyer, aimed at making a sale.
### Forms
shop assistants; travelling **sales representatives**; door-to-door selling; telephone selling; sales presentations at fairs.
### Steps
finding prospects → approaching → presenting and demonstrating → answering objections → closing the sale → follow-up.
### Qualities of a good salesperson
- good **knowledge of the product**
- **courtesy**, patience and tact
- **honesty**
- neat appearance; cheerful personality
- good **communication** and listening skills
- persuasiveness and confidence
- knowledge of customers and competitors
### Advantages
two-way communication; the message is tailored to the customer; objections are answered at once; products are demonstrated; a relationship is built; orders are taken on the spot.
### Disadvantages
expensive per customer; reaches few people; depends on the skill of the salesperson.

## Public relations (PR)
The **deliberate, planned and sustained effort to establish and maintain goodwill and mutual understanding between an organisation and its public** — customers, employees, shareholders, suppliers, government and the community.
### Activities
- **press releases** and press conferences
- **sponsorship** of sports, education and cultural events
- **donations** and community projects — corporate social responsibility
- **open days** and factory visits
- house journals, annual reports and newsletters
- handling **complaints** and crises
- lobbying
### Publicity
News about a firm or its products carried by the media **without payment** by the firm. It is more believable than advertising, but the firm cannot control it — and it may be favourable or unfavourable.
### Importance
builds a good **image** and reputation; wins the confidence of customers, investors and government; supports sales; helps to recruit staff; guards against rumours.

### Public relations and advertising compared
| Public relations | Advertising |
|---|---|
| aims at **goodwill** | aims at **sales** |
| long-term image | products and immediate demand |
| often unpaid publicity | paid media space |
| addressed to all "publics" | addressed mainly to buyers |

## Customer service
Everything a business does to **satisfy customers before, during and after a sale**: prompt and polite attention; accurate information; reliable delivery; easy payment; fair treatment of complaints.

## After-sales service
Services given **after purchase**: **delivery and installation**; **repairs and maintenance**; supply of **spare parts**; **guarantees (warranties)**; exchange of faulty goods; advice on use.
- important for technical and durable goods — vehicles, generators, electronics
- builds confidence and **repeat sales**; a strong weapon against competitors

## Choosing the promotional mix
It depends on the nature of the product, the market, the budget, the stage of the product's life and what competitors do — advertising suits mass consumer goods; personal selling suits costly and technical goods.`,
          examples: `**Example 1.** Give four methods of sales promotion. *Answer:* **Free samples, price reductions, free gifts and competitions**.

**Example 2.** State three qualities of a good salesperson. *Answer:* **Product knowledge, courtesy and honesty**.

**Example 3.** What is the aim of public relations? *Answer:* To build and maintain **goodwill** between an organisation and its public.`,
        },
        questions: [
          ["E", "Short-term incentives offered to encourage customers to buy a product immediately are known as", "sales promotion", "public relations", "warehousing", "market research", "Free samples and price cuts are examples."],
          ["E", "Face-to-face communication between a seller and a prospective buyer is", "personal selling", "advertising", "publicity", "branding", "The salesperson can answer questions at once."],
          ["E", "The effort of an organisation to build goodwill with the public is called", "public relations", "sales promotion", "hire purchase", "price control", "It aims at a good image."],
          ["M", "'Buy one, get one free' is an example of", "sales promotion", "personal selling", "public relations", "market research", "It gives an incentive to buy now."],
          ["M", "A quality expected of a good salesperson is", "good knowledge of the product", "rudeness to customers", "ignorance of prices", "impatience", "He must be able to explain the product."],
          ["M", "News about a firm carried by the media without payment by the firm is", "publicity", "advertising", "sales promotion", "sponsorship", "It may be favourable or unfavourable."],
          ["M", "Repairs, installation and supply of spare parts provided after a purchase are", "after-sales service", "sales promotion only", "public relations", "trade discount", "It is important for technical goods."],
          ["H", "A difference between advertising and sales promotion is that sales promotion", "gives a short-term incentive to buy immediately", "is carried only on television", "builds long-term demand through the mass media", "is never used for new products", "Advertising gives a reason to buy over the long term."],
          ["H", "The sponsorship of a football competition by a company is mainly an example of", "public relations", "personal selling", "market segmentation", "price discrimination", "It builds goodwill and a favourable image."],
          ["H", "Personal selling is most suitable for goods that are", "expensive and technical", "cheap and bought daily", "sold only by vending machines", "identical and unbranded", "Buyers need explanation and demonstration."],
        ],
      },
      {
        week: 4,
        title: "Tourism",
        subtopics: ["Meaning and types of tourism", "Tourist attractions in Nigeria", "Importance of tourism", "Problems and promotion of tourism"],
        objectives: ["Explain tourism and describe its types", "Identify tourist attractions in Nigeria", "State the importance of tourism to the economy", "Discuss the problems of tourism and how it can be promoted"],
        lesson: {
          title: "Travel for Leisure and Business",
          summary: "Explain tourism, its attractions, benefits and problems in Nigeria.",
          minutes: 40,
          notes: `## Tourism
The **temporary movement of people to places outside their usual place of residence and work**, for **leisure, business, culture, religion or other purposes**, and the services provided for them. A **tourist** stays away at least one night; an **excursionist** (day tripper) returns the same day.

## Types
### By origin
- **domestic tourism** — residents travelling **within their own country**
- **international tourism** — **inbound** (foreigners visiting) and **outbound** (residents travelling abroad)
### By purpose
- **leisure (holiday) tourism** — rest and recreation: beaches, resorts
- **cultural tourism** — festivals, museums, monuments, arts
- **business tourism** — conferences, trade fairs, meetings
- **religious tourism (pilgrimage)** — to Mecca and Jerusalem; to religious camps and crusades within the country
- **educational tourism** — excursions, study tours
- **eco-tourism (wildlife tourism)** — nature reserves and national parks
- **medical (health) tourism** — travel for treatment
- **sports tourism** — tournaments and games
- adventure tourism — mountain climbing, safaris

## Tourist attractions in Nigeria
| Type | Examples |
|---|---|
| **wildlife and nature** | **Yankari Game Reserve** (Bauchi), Kainji Lake National Park, Cross River National Park, Old Oyo and Gashaka-Gumti National Parks |
| **highlands and resorts** | **Obudu Mountain Resort** (Cross River), Mambilla Plateau, Jos Plateau |
| **rocks and hills** | **Olumo Rock** (Abeokuta), Zuma Rock (near Abuja), Idanre Hills (Ondo) |
| **waterfalls and springs** | Erin-Ijesha (Olumirin) Falls, Gurara Falls, Agbokim Falls, Ikogosi Warm Springs, Wikki Warm Springs |
| **beaches** | Lagos beaches (Tarkwa Bay, Elegushi), Badagry |
| **festivals** | **Argungu Fishing Festival** (Kebbi), **Osun-Osogbo Festival**, the Calabar Carnival, the Eyo Festival (Lagos), Durbar festivals in the north, New Yam festivals |
| **historical and cultural sites** | the **Osun-Osogbo Sacred Grove** and **Sukur Cultural Landscape** (UNESCO World Heritage Sites), Badagry slave-trade relics, the ancient Kano city walls, Benin moat, museums at Lagos, Jos, Benin and Ife |
| **others** | zoos, the National Theatre, Tinapa, stadiums |

## Importance
- **foreign exchange** earnings
- **employment** — hotels, transport, guides, crafts, restaurants
- **government revenue** — taxes, fees and licences
- growth of related industries — **hospitality**, transport, banking, handicrafts
- development of **infrastructure** — roads, airports, electricity, water — which also serves residents
- **diversifies** the economy
- promotes **cultural exchange** and international understanding
- preserves **culture, monuments and wildlife**
- improves the country's image
- encourages rural development and local enterprise

## Possible disadvantages
spread of diseases and social vices; erosion of local culture; damage to the environment; leakage of earnings to foreign firms; seasonal employment; higher local prices.

## The tourist industry
- **accommodation**: hotels, guest houses, resorts
- **transport**: airlines, car hire, coaches
- **travel agents** and **tour operators** — arrange tickets, hotels and package tours
- **attractions**; restaurants; souvenir and craft sellers; **tour guides**

## Agencies
The **Nigerian Tourism Development Corporation (NTDC)**, set up in **1992**, promotes and regulates tourism — registering and grading hotels, publicising attractions, and advising government; state tourism boards; the National Commission for Museums and Monuments; the National Park Service.

## Problems of tourism in Nigeria
- **insecurity**
- **poor infrastructure** — roads, electricity, water
- inadequate and costly **hotels** of good standard
- poor **maintenance** of tourist sites
- weak **publicity** and marketing
- difficult visa procedures; poor image abroad
- inadequate funding; little private investment
- lack of trained personnel
- low incomes, which limit domestic tourism
- political instability; health concerns

## Ways of promoting tourism
improving security; building and maintaining roads, airports and facilities; developing and preserving sites; publicity at home and abroad; training staff; encouraging private investors with incentives; easier visas; clean environment; festivals and events calendars; affordable domestic packages.

## Tourism and the other aids to trade
Tourism depends on **transport**, **communication**, **banking** (foreign exchange, cards, travellers' cheques), **insurance** (travel insurance) and **advertising**.`,
          examples: `**Example 1.** Distinguish domestic from international tourism. *Answer:* **Domestic** tourism is travel **within one's own country**; **international** tourism involves **crossing national borders**.

**Example 2.** Name three tourist attractions in Nigeria. *Answer:* **Yankari Game Reserve, Obudu Mountain Resort and Olumo Rock**.

**Example 3.** State two economic benefits of tourism. *Answer:* **Foreign exchange** and **employment**.`,
        },
        questions: [
          ["E", "The temporary movement of people to places outside their normal residence for leisure or business is", "tourism", "migration for settlement", "commuting to work", "smuggling", "Visitors return home afterwards."],
          ["E", "Travel by residents within their own country for leisure is", "domestic tourism", "outbound tourism", "inbound tourism", "medical tourism abroad", "No national border is crossed."],
          ["E", "Yankari Game Reserve is located in", "Bauchi State", "Ogun State", "Cross River State", "Kebbi State", "It is famous for wildlife and the Wikki Warm Springs."],
          ["M", "Travel to Mecca or Jerusalem for pilgrimage is an example of", "religious tourism", "eco-tourism", "sports tourism", "business tourism", "The purpose is worship."],
          ["M", "The Argungu Fishing Festival is held in", "Kebbi State", "Osun State", "Lagos State", "Plateau State", "It is a major cultural attraction."],
          ["M", "An economic benefit of tourism to a country is", "the earning of foreign exchange", "the spread of diseases", "the erosion of local culture", "damage to the environment", "Foreign visitors spend money in the country."],
          ["M", "The agency set up in 1992 to promote and regulate tourism in Nigeria is the", "Nigerian Tourism Development Corporation", "Nigerian Ports Authority", "Corporate Affairs Commission", "National Insurance Commission", "It registers and grades hotels."],
          ["H", "Visits to national parks and game reserves to see wildlife are classified as", "eco-tourism", "religious tourism", "medical tourism", "business tourism", "It is based on nature and conservation."],
          ["H", "A major problem hindering the growth of tourism in Nigeria is", "insecurity and poor infrastructure", "too many tourists", "an excess of good roads", "over-publicity of attractions", "Visitors need safety and good facilities."],
          ["H", "A firm that puts together transport, accommodation and sightseeing into a package holiday for sale is a", "tour operator", "clearing agent", "stockbroker", "loss adjuster", "Travel agents sell such packages to the public."],
        ],
      },
      {
        week: 5,
        title: "Consumer protection",
        subtopics: ["Need for consumer protection", "Rights of the consumer", "Instruments and laws of consumer protection", "Agencies of consumer protection"],
        objectives: ["Explain why consumers need protection", "State the rights of the consumer", "Describe the laws that protect consumers", "Describe the agencies responsible for consumer protection in Nigeria"],
        lesson: {
          title: "Safeguarding the Buyer",
          summary: "Explain consumers' rights and the laws and agencies that protect them.",
          minutes: 40,
          notes: `## The consumer
A person who **buys or uses goods and services** to satisfy personal needs.

## Consumer protection (consumerism)
The **measures taken by government, organisations and consumers themselves to safeguard consumers against unfair trade practices** and exploitation.

## Why consumers need protection
- **adulterated, fake, expired and substandard goods**
- **dangerous** products — unsafe drugs, foods and appliances
- **short weight and measure**
- **high (exploitative) prices**; **hoarding** to create artificial scarcity
- **misleading advertisements** and false descriptions
- poor **after-sales service**; refusal to honour guarantees
- unfair conditions of sale and hire purchase
- consumers' **ignorance** and weak bargaining power against large producers
- monopoly

## Rights of the consumer
- the right to **safety** — protection from hazardous goods
- the right to **be informed** — true facts about products
- the right to **choose** — a variety of goods at competitive prices
- the right to **be heard** — to have complaints considered
- the right to **redress** — compensation, repair, replacement or refund
- the right to **consumer education**
- the right to the satisfaction of **basic needs**
- the right to a **healthy environment**

## Responsibilities of the consumer
to be alert and ask questions; to read labels and check expiry dates; to keep receipts; to report unfair practices; to use products as directed; to avoid buying from doubtful sources.

## Means (instruments) of protection
### Government legislation
| Law | What it does |
|---|---|
| **Sale of Goods Act** | implied conditions that goods must **correspond with their description**, be of **merchantable quality** and be **fit for the purpose** made known to the seller |
| **Hire Purchase Act (1965)** | written agreements; limits on repossession; protection of hirers |
| **Food and Drugs Act** | forbids the sale of adulterated, harmful or falsely labelled food and drugs |
| **Weights and Measures Act** | standard, verified weights and measures; penalties for short measure |
| **Trade Descriptions / Merchandise Marks laws** | forbid false descriptions of goods |
| **Standards Organisation Act** | quality standards for products |
| **Price Control Act (1977)** | maximum prices for specified goods |
| **Federal Competition and Consumer Protection Act (2018)** | consumer rights; controls on monopolies and unfair practices |
| consumer credit and money-lenders' laws | control interest rates and terms |

### The doctrine of *caveat emptor*
"**Let the buyer beware**" — the buyer must examine goods before purchase. The laws above limit this old rule.

## Agencies in Nigeria
- the **Federal Competition and Consumer Protection Commission (FCCPC)** — replaced the **Consumer Protection Council** in 2019: receives and investigates **complaints**, orders redress, bans hazardous products, checks unfair and anti-competitive practices, and educates consumers
- the **Standards Organisation of Nigeria (SON)** — established in **1971**: sets and enforces **quality standards**; certifies products; awards the **NIS mark** to products meeting the Nigerian Industrial Standard; inspects factories and imports
- the **National Agency for Food and Drug Administration and Control (NAFDAC)** — established in **1993**: regulates and registers **food, drugs, cosmetics, medical devices, chemicals and packaged water**; issues **NAFDAC registration numbers**; seizes fake and expired products
- the **Nigerian Communications Commission**, the Central Bank, the electricity regulator and the insurance commission — protect consumers in their sectors
- the **weights and measures** inspectorate of the Ministry of Trade
- the **Public Complaints Commission** (the ombudsman) — investigates complaints against public bodies
- the **National Drug Law Enforcement Agency**; public health and environmental officers who inspect markets, abattoirs and food premises
- the **courts** — consumers can sue for damages; small claims courts

## Non-governmental protection
- **consumers' associations** — educate consumers, test products, publish findings, press for laws, organise boycotts
- **trade associations** and **professional bodies** — codes of practice for members
- the **mass media** — exposing malpractices
- the advertising regulator — vetting advertisements
- manufacturers' own measures — guarantees, quality control, customer-care lines, tamper-proof packaging

## How a consumer can seek redress
1. complain to the **seller**, with the receipt
2. write to the **manufacturer**
3. report to the relevant **agency** (FCCPC, SON, NAFDAC)
4. use a consumers' association or the media
5. go to **court**

## Problems of consumer protection in Nigeria
ignorance of rights; illiteracy; poverty — buying the cheapest goods; weak enforcement and corruption; slow, costly court processes; smuggling and porous borders; inadequate funding of agencies.`,
          examples: `**Example 1.** State four rights of the consumer. *Answer:* The rights to **safety, information, choice and redress**.

**Example 2.** What does NAFDAC regulate? *Answer:* **Food, drugs, cosmetics, medical devices, chemicals and packaged water**.

**Example 3.** What does *caveat emptor* mean? *Answer:* "**Let the buyer beware**."`,
        },
        questions: [
          ["E", "Measures taken to safeguard buyers against unfair trade practices are known as", "consumer protection", "sales promotion", "trade protection by tariffs", "underwriting", "They cover laws, agencies and consumer bodies."],
          ["E", "The agency that regulates and registers food and drugs in Nigeria is", "NAFDAC", "NIPOST", "NPA", "NEPC", "It was established in 1993."],
          ["E", "The Latin phrase 'caveat emptor' means", "let the buyer beware", "let the seller beware", "goods once sold are free", "the customer is king", "The buyer should examine goods before purchase."],
          ["M", "The body responsible for setting and enforcing quality standards for products in Nigeria is the", "Standards Organisation of Nigeria", "Nigerian Ports Authority", "Central Bank of Nigeria", "Nigerian Stock Exchange", "It awards the NIS mark of quality."],
          ["M", "The right of a consumer to obtain compensation, repair or replacement for faulty goods is the right to", "redress", "choose", "be informed", "safety", "Complaints must be remedied."],
          ["M", "The law that makes it an offence to sell goods using false weights is the", "Weights and Measures Act", "Hire Purchase Act", "Companies and Allied Matters Act", "Partnership Act", "Measuring instruments must be standard and verified."],
          ["M", "A reason why consumers need protection is", "the sale of fake and expired goods", "the abundance of honest traders", "the low prices of all goods", "the perfect knowledge consumers have", "Such goods endanger health and waste money."],
          ["H", "The Federal Competition and Consumer Protection Commission replaced the", "Consumer Protection Council", "Standards Organisation of Nigeria", "Public Complaints Commission", "Price Control Board only", "It was created by an Act of 2018."],
          ["H", "Under the Sale of Goods Act, goods sold must", "correspond with their description and be fit for their purpose", "always be sold on credit", "be delivered within one hour", "carry no guarantee", "These are implied conditions in a contract of sale."],
          ["H", "A voluntary organisation formed by buyers to educate members and campaign against unfair trade practices is a", "consumers' association", "chamber of commerce", "cartel", "trade union", "It may test products and organise boycotts."],
        ],
      },
    ],
  },
];
