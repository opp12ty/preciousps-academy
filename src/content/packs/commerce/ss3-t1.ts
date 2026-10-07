import type { TermPlan } from "../types";

/** SS3 Commerce, First Term — NERDC 2025 scheme. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "History of the Nigerian Capital Market",
      subtopics: ["Meaning of the capital market", "Origin and development of the Nigerian capital market", "The Lagos Stock Exchange and the Nigerian Stock Exchange", "Role and importance of the Securities and Exchange Commission"],
      objectives: ["Explain the capital market and distinguish it from the money market", "Trace the origin and development of the Nigerian capital market", "Describe the growth of the Lagos Stock Exchange into the Nigerian Stock Exchange", "State the roles of the Securities and Exchange Commission"],
      lesson: {
        title: "How Nigeria's Capital Market Grew",
        summary: "The market for long-term funds in Nigeria: its beginnings, its institutions and its regulator.",
        minutes: 40,
        notes: `## The capital market
The **capital market** is the market for **long-term funds** — where governments and companies raise money for periods of **more than one year** by issuing **securities** (shares, stocks, bonds), and where those securities are bought and sold.

| | Money market | Capital market |
|---|---|---|
| **funds** | short-term (up to one year) | medium- and long-term |
| **instruments** | treasury bills, call money, commercial papers, bills of exchange | shares, debentures, bonds, development stocks |
| **institutions** | commercial banks, discount houses, CBN | stock exchange, issuing houses, stockbrokers, SEC, development banks, insurance and pension funds |

### Segments
- **Primary market** — where **new** securities are issued to the public for the first time (e.g. an initial public offer).
- **Secondary market** — where **existing** securities are traded among investors: the **stock exchange**.

## Origin and development
| Year | Event |
|---|---|
| **1946** | the colonial government floated the first **development loan stock** under a local loans ordinance to finance its ten-year plan |
| **1959** | **Central Bank of Nigeria** began operations; the Barback Committee recommended a stock market |
| **1960** | the **Lagos Stock Exchange** was incorporated |
| **1961** | the Lagos Stock Exchange **began operations** in Lagos with 19 securities |
| **1962** | **Capital Issues Committee** set up within the Central Bank to oversee public issues |
| **1972, 1977** | **indigenisation decrees** made foreign firms sell shares to Nigerians, greatly enlarging the market |
| **1973** | Capital Issues Committee became the **Capital Issues Commission** |
| **1977** | on the advice of the Okigbo financial system review, the Lagos Stock Exchange became the **Nigerian Stock Exchange (NSE)**, with trading floors opened later in Kaduna, Port Harcourt, Kano, Onitsha, Ibadan, Abuja and Yola |
| **1979** | the **Securities and Exchange Commission (SEC)** replaced the Capital Issues Commission |
| **1985** | the **Second-Tier Securities Market (SSM)** was introduced for smaller companies |
| **1988 onward** | **privatisation** of public enterprises brought many new shares to the market |
| **1997–1999** | the **Central Securities Clearing System (CSCS)** and the **Automated Trading System** replaced the open "call-over" method |
| **1999, 2007** | **Investments and Securities Acts** strengthened regulation |
| **2021** | the NSE was demutualised and became the **Nigerian Exchange Group (NGX)** |

## The Securities and Exchange Commission
The **SEC** is the **apex regulatory body** of the Nigerian capital market, with headquarters in Abuja.

### Roles
1. **Regulates and supervises** the capital market and all its operators.
2. **Registers** securities to be offered to the public, and **registers and licenses** stock exchanges, stockbrokers, issuing houses, registrars and fund managers.
3. **Approves** the timing and the terms of public issues.
4. **Protects investors** against fraud and unfair practices; maintains surveillance against **insider dealing** and price manipulation.
5. **Approves mergers, acquisitions and takeovers**.
6. Promotes the **development** of the market and educates investors.
7. **Investigates** and sanctions offenders.
8. Advises the government on capital-market matters.

### Importance
The SEC builds **confidence** in the market, ensures **fair and orderly dealing**, and encourages savings to flow into productive investment.

## Importance of the capital market
- provides **long-term finance** for industry and government projects
- **mobilises savings** for investment
- lets investors **convert** securities to cash (liquidity)
- aided **indigenisation and privatisation**, spreading ownership among Nigerians
- attracts **foreign investment**
- serves as a **barometer** of the economy`,
        examples: `**Example 1.** In what year did the Lagos Stock Exchange begin operations? *Answer:* **1961**.

**Example 2.** Distinguish the primary from the secondary market. *Answer:* The **primary** market deals in **new issues**; the **secondary** market deals in **existing** securities.

**Example 3.** Name the apex regulator of the Nigerian capital market. *Answer:* the **Securities and Exchange Commission (SEC)**.`,
      },
      questions: [
        ["E", "The market for long-term funds is the", "capital market", "money market", "commodity market", "foreign exchange market", "It deals in shares, bonds and other long-term securities."],
        ["E", "The Lagos Stock Exchange commenced operations in", "1961", "1946", "1977", "1985", "It was incorporated in 1960 and began trading in 1961."],
        ["E", "The apex regulatory body of the Nigerian capital market is the", "Securities and Exchange Commission", "Central Bank of Nigeria", "Nigerian Deposit Insurance Corporation", "Corporate Affairs Commission", "The SEC regulates the market and its operators."],
        ["M", "The Lagos Stock Exchange was renamed the Nigerian Stock Exchange in", "1977", "1961", "1985", "1999", "The change followed the financial system review of the 1970s."],
        ["M", "The market in which new securities are first offered to the public is the", "primary market", "secondary market", "money market", "second-tier market", "New issues are sold in the primary market."],
        ["M", "Which of these is an instrument of the capital market?", "Debenture", "Treasury bill", "Call money", "Commercial paper", "Debentures are long-term loan securities."],
        ["M", "The body that the Securities and Exchange Commission replaced in 1979 was the", "Capital Issues Commission", "Lagos Stock Exchange", "Nigerian Industrial Development Bank", "Bankers' Committee", "It grew out of the Capital Issues Committee of 1962."],
        ["H", "The indigenisation decrees of the 1970s enlarged the Nigerian capital market because they", "required foreign firms to sell shares to Nigerians", "abolished public companies", "closed the stock exchange", "banned the issue of shares", "Many companies had to offer equity to the Nigerian public."],
        ["H", "Which of these is NOT a function of the Securities and Exchange Commission?", "Accepting deposits from the public", "Registering securities offered to the public", "Protecting investors", "Approving mergers and acquisitions", "Deposit-taking is the work of banks."],
        ["H", "The electronic depository that clears and settles transactions on the Nigerian stock market is the", "Central Securities Clearing System", "Nigerian Inter-Bank Settlement System only", "Capital Issues Committee", "Second-Tier Securities Market", "The CSCS holds shares electronically and settles trades."],
      ],
      jamb: [
        ["M", "The first development loan stock in Nigeria was floated by the colonial government in", "1946", "1959", "1961", "1972", "It financed the ten-year development plan."],
        ["H", "Dealing in a company's shares by persons using confidential information not available to the public is", "insider dealing", "underwriting", "arbitrage", "jobbing", "The SEC prohibits and punishes it."],
      ],
    },
    {
      week: 2,
      title: "Stock Exchange",
      subtopics: ["Meaning and functions of a stock exchange", "Members of the stock exchange", "Types of securities traded", "Importance to investors, companies and the economy"],
      objectives: ["Define a stock exchange and state its functions", "Identify the members and operators of the stock exchange", "Describe the types of securities traded", "Explain the importance of the stock exchange"],
      lesson: {
        title: "The Market for Securities",
        summary: "What a stock exchange does, who operates in it, what is traded and why it matters.",
        minutes: 40,
        notes: `## Meaning
A **stock exchange** is a **highly organised market** where **existing (second-hand) securities** — shares, stocks, debentures and bonds — are bought and sold through licensed dealers under agreed rules.

## Functions
1. Provides a **ready market** for buying and selling securities.
2. Enables companies and governments to **raise long-term capital**.
3. Gives investors **liquidity** — securities can be turned into cash.
4. **Fixes and publishes prices** of securities through demand and supply (the **Daily Official List**).
5. **Protects investors** through listing rules and disclosure of information.
6. **Mobilises savings** and channels them into productive use.
7. Serves as a **barometer** of the economy and of companies' performance.
8. Encourages **wider share ownership**.

## Members and operators
| Operator | Role |
|---|---|
| **stockbrokers (dealing members)** | licensed agents who buy and sell securities **on behalf of investors** for a **commission (brokerage)**; they also advise clients |
| **jobbers (dealers / market makers)** | deal in securities **on their own account** as principals; their profit is the **jobber's turn** (difference between buying and selling prices) |
| **issuing houses** | merchant or investment banks that **sponsor and manage new issues** and advise companies |
| **underwriters** | guarantee to take up shares not subscribed by the public |
| **registrars** | keep the register of shareholders, issue certificates and pay dividends |
| **the Council of the Exchange** | governs the exchange and enforces its rules |
| **authorised clerks** | assist members on the trading floor |

### Speculators
| Speculator | Behaviour |
|---|---|
| **bull** | **buys** expecting prices to **rise**, to sell later at a profit |
| **bear** | **sells** expecting prices to **fall**, to buy back cheaper |
| **stag** | applies for **new issues** hoping to sell at once at a premium |
A rising market is a **bull market**; a falling one a **bear market**.

## Securities traded
| Security | Features |
|---|---|
| **ordinary shares (equities)** | owners of the company; voting rights; dividend varies with profit; paid last; highest risk |
| **preference shares** | fixed rate of dividend; paid before ordinary shareholders; usually no vote. May be **cumulative**, **participating** or **redeemable** |
| **debentures** | **loans** to a company at fixed **interest**, payable whether or not profit is made; holders are **creditors**, often secured on assets |
| **government stocks and bonds** ("gilt-edged") | loans to government at fixed interest; very safe |
| **corporate and state bonds; unit trusts; rights** | |

### Terms
- **nominal (par) value** — the face value of a share; **market value** — its price on the exchange
- **at par / at a premium / at a discount** — sold at, above or below nominal value
- **cum dividend / ex dividend** — with or without the right to the next dividend
- **blue chips** — shares of large, reliable companies
- **quotation (listing)** — admission of a security to trading
- **yield** $= \\dfrac{\\text{dividend per share}}{\\text{market price}} \\times 100$

## How a deal is made
An investor instructs a **stockbroker** → the broker executes the order on the trading system → a **contract note** is issued → payment and transfer are settled through the clearing system → the investor's account is credited with the shares.

## Importance
**To investors:** a safe and regulated place to invest; ready sale of holdings; income from dividends and capital gains; information for decisions.
**To companies:** access to long-term funds; prestige and publicity from listing; a market value for the business; ease of mergers.
**To the economy:** capital formation and industrial growth; finance for government projects; employment; attraction of foreign investment; efficient allocation of resources.`,
        examples: `**Example 1.** A share with a nominal value of ₦1 pays a dividend of 20 kobo and sells at ₦4. Find the yield. *Answer:* $\\dfrac{0.20}{4} \\times 100 = \\mathbf{5\\%}$.

**Example 2.** Distinguish a broker from a jobber. *Answer:* A **broker** acts as an **agent** for investors and earns commission; a **jobber** deals **on his own account** and earns the jobber's turn.

**Example 3.** Who is a bull? *Answer:* A speculator who **buys** securities expecting the price to **rise**.`,
      },
      questions: [
        ["E", "A market where existing shares and stocks are bought and sold is a", "stock exchange", "commodity exchange", "money market", "trade fair", "It is the secondary market for securities."],
        ["E", "An agent who buys and sells securities on behalf of investors is a", "stockbroker", "jobber", "registrar", "underwriter", "He earns a commission called brokerage."],
        ["E", "A speculator who buys shares expecting their prices to rise is a", "bull", "bear", "stag", "broker", "He hopes to sell later at a profit."],
        ["M", "Holders of debentures in a company are its", "creditors", "owners", "directors", "promoters", "Debentures are loans carrying fixed interest."],
        ["M", "A speculator who sells securities expecting prices to fall is a", "bear", "bull", "stag", "jobber", "He hopes to buy back at a lower price."],
        ["M", "The profit of a jobber is known as", "the jobber's turn", "brokerage", "dividend", "premium", "It is the difference between his buying and selling prices."],
        ["M", "Shareholders who receive a fixed rate of dividend before others are paid hold", "preference shares", "ordinary shares", "debentures", "bonus shares", "Preference shares rank before ordinary shares for dividend."],
        ["H", "A share with a nominal value of ₦2 is sold on the exchange for ₦5. It is being sold at", "a premium", "a discount", "par", "ex dividend", "The price is above the nominal value."],
        ["H", "A company declares a dividend of 50 kobo on a share whose market price is ₦10. The dividend yield is", "5%", "50%", "2%", "20%", "0.50 ÷ 10 × 100."],
        ["H", "A speculator who applies for a new issue of shares hoping to sell them immediately at a profit is a", "stag", "bull", "bear", "registrar", "Stags deal in new issues."],
      ],
      jamb: [
        ["M", "Institutions that guarantee to buy any shares not taken up by the public in a new issue are", "underwriters", "registrars", "jobbers", "auditors", "Underwriters bear the risk of under-subscription."],
        ["H", "Shares quoted 'ex dividend' are sold", "without the right to the dividend just declared", "with the right to the next dividend", "below their nominal value", "to directors only", "The seller keeps the declared dividend."],
      ],
    },
    {
      week: 3,
      title: "Second-Tier Securities Market (SSM) I",
      subtopics: ["Meaning of the SSM", "Objectives of establishing the SSM", "Listing requirements for companies", "Role in promoting indigenous enterprises"],
      objectives: ["Explain the Second-Tier Securities Market", "State the objectives of its establishment", "State the listing requirements for companies", "Explain its role in promoting indigenous enterprises"],
      lesson: {
        title: "A Stock Market for Smaller Companies",
        summary: "Why the second-tier market was created and what a company needs to be listed on it.",
        minutes: 40,
        notes: `## Meaning
The **Second-Tier Securities Market (SSM)** is a segment of the Nigerian Stock Exchange created in **1985** for **small and medium-sized, mainly indigenous, companies** that cannot meet the stringent requirements for listing on the **first-tier (main) market**. Requirements were deliberately made **less demanding** so that such companies could raise long-term capital from the public.

(In recent years the Exchange has reorganised its listing segments into boards — Premium, Main and Growth; the Growth Board now serves much the same purpose as the SSM.)

## Background
After the indigenisation decrees, many Nigerian-owned companies needed capital to grow but relied on costly short-term bank loans. They were too small or too young to qualify for a full quotation. The SSM was introduced to close this gap.

## Objectives of establishing the SSM
1. To help **small and medium-sized indigenous companies raise long-term capital** at lower cost.
2. To **reduce dependence** on short-term bank borrowing.
3. To **widen and deepen** the capital market by increasing the number of quoted companies.
4. To encourage **private, family-owned companies to go public**, spreading ownership.
5. To give investors a **wider choice** of securities.
6. To provide a **nursery** from which companies can graduate to the first tier.
7. To promote **indigenous entrepreneurship** and industrial development.
8. To enable owners to **value** their businesses and realise part of their investment.

## Listing requirements
| Requirement | Second-tier market | First-tier market |
|---|---|---|
| **status** | must be a registered **public limited company** | public limited company |
| **trading record** | at least **3 years** | at least **5 years** |
| **shares offered to the public** | at least **10%** of issued share capital | at least **25%** |
| **number of shareholders** | at least **100** | at least **300** |
| **single shareholding** | no shareholder may hold more than **75%** | — |
| **accounts** | audited accounts for the past 3 years | audited accounts for the past 5 years |
| **listing fees** | **lower**, flat annual fee | higher, graduated fees |
| **amount that may be raised** | limited | unlimited |
| **financial statements** | half-yearly | quarterly, half-yearly and annual |

Other conditions: the company must be sponsored by a **dealing member (stockbroker)** of the Exchange; it must sign an undertaking to obey the rules of the Exchange; its memorandum and articles must permit the free transfer of shares; and it must obtain **SEC** approval.

## Role in promoting indigenous enterprises
- gives indigenous firms **access to the capital market**
- provides **cheaper, permanent capital** for expansion
- raises their **public profile and credibility** with banks, suppliers and customers
- introduces **discipline** — proper accounts, audit and disclosure
- allows Nigerians to **share in the ownership** of local businesses
- helps **family businesses survive** their founders
- creates **employment** as firms expand
- prepares firms for **promotion to the first tier**`,
        examples: `**Example 1.** In what year was the SSM introduced in Nigeria? *Answer:* **1985**.

**Example 2.** What minimum proportion of its shares must an SSM company offer to the public? *Answer:* **10%**.

**Example 3.** State one objective of the SSM. *Answer:* To help **small and medium-sized indigenous companies raise long-term capital**.`,
      },
      questions: [
        ["E", "The Second-Tier Securities Market was introduced in Nigeria in", "1985", "1961", "1977", "1999", "It was created as a segment of the Nigerian Stock Exchange."],
        ["E", "The SSM was established mainly to serve", "small and medium-sized indigenous companies", "foreign multinational companies only", "government ministries", "commercial banks only", "They could not meet first-tier requirements."],
        ["E", "The SSM is a segment of the", "Nigerian Stock Exchange", "Central Bank of Nigeria", "Corporate Affairs Commission", "Nigerian Ports Authority", "It operates under the Exchange's rules."],
        ["M", "To be listed on the SSM, a company must have a trading record of at least", "3 years", "5 years", "10 years", "1 year", "The first tier requires five years."],
        ["M", "The minimum percentage of equity that an SSM company must offer to the public is", "10%", "25%", "51%", "75%", "The first tier requires at least 25%."],
        ["M", "The minimum number of shareholders required for an SSM listing is", "100", "300", "50", "1000", "The first tier requires at least 300."],
        ["M", "Which of these is an objective of the SSM?", "To help small companies raise long-term capital", "To regulate commercial banks", "To print currency", "To collect company tax", "It widens access to the capital market."],
        ["H", "Compared with the first-tier market, listing fees on the SSM are", "lower", "higher", "the same", "not charged at all by law", "Lower costs encourage small firms to list."],
        ["H", "Under SSM rules, no single shareholder may hold more than", "75% of the issued share capital", "10% of the issued share capital", "25% of the issued share capital", "100 shares", "This ensures some spread of ownership."],
        ["H", "A company seeking admission to the SSM must be", "a public limited company", "a sole proprietorship", "a partnership", "a public corporation", "Only public companies may offer shares to the public."],
      ],
      jamb: [
        ["M", "The SSM helps indigenous firms mainly by", "reducing their dependence on short-term bank loans", "exempting them from audit", "guaranteeing them profits", "removing all competition", "It gives access to permanent capital."],
        ["H", "A successful SSM company that grows and meets stricter requirements may", "be promoted to the first-tier market", "be converted to a private company", "be exempted from SEC regulation", "stop publishing accounts", "The SSM serves as a nursery for the main market."],
      ],
    },
    {
      week: 4,
      title: "Second-Tier Securities Market (SSM) II",
      subtopics: ["Procedures for dealing in SSM securities", "Advantages of the SSM", "Challenges of the SSM", "Comparison between the main exchange and the SSM"],
      objectives: ["Describe the procedure for listing and dealing on the SSM", "State the advantages of the SSM", "Discuss the challenges of the SSM", "Compare the main stock exchange with the SSM"],
      lesson: {
        title: "Operating on the Second-Tier Market",
        summary: "How securities are brought to and traded on the second-tier market, with its benefits and difficulties.",
        minutes: 40,
        notes: `## Procedure for admission
1. **Decision to go public** — the board and shareholders resolve to seek a listing; a private company first **converts to a public company**.
2. **Appointment of advisers** — an **issuing house**, a sponsoring **stockbroker**, **reporting accountants**, **solicitors** and **registrars**.
3. **Valuation and pricing** — the issuing house assesses the company and proposes a price.
4. **Preparation of the prospectus** — stating the company's history, directors, accounts, purpose of the issue and terms.
5. **Application to the SEC** for registration of the securities, and to the **Council of the Stock Exchange** for approval to list.
6. **Signing the general undertaking** to observe the rules of the Exchange.
7. **Public offer** — an offer for subscription or offer for sale; or a **placing** with selected investors; or an **introduction** if shares are already widely held.
8. **Allotment** of shares and return of excess application money.
9. **Listing** — the shares are admitted to the Daily Official List and trading begins.

## Procedure for dealing
1. The investor opens an account with a **stockbroker** and a securities account in the clearing system.
2. He gives a **buy or sell order**, stating the quantity and price limit.
3. The broker **executes** the order on the trading system of the Exchange.
4. A **contract note** is issued showing the price, commission and fees.
5. **Settlement** — money and shares are exchanged through the clearing system within the settlement period.
6. The **registrar** updates the register of members; the buyer becomes entitled to dividends.

## Advantages of the SSM
**To companies**
- access to **long-term capital** at lower cost than bank loans
- **less stringent** entry requirements and **lower fees**
- **enhanced status**, publicity and creditworthiness
- shares acquire a **market value** and become transferable
- owners can **realise** part of their investment while keeping control (up to 75%)
- discipline of proper accounting and management
- a stepping stone to the first tier

**To investors**
- wider choice; chance to invest early in **growing companies**; possible capital gains

**To the economy**
- growth of small and medium enterprises; employment; wider share ownership; a deeper capital market

## Challenges of the SSM
- **Few listings** — many owners **fear losing control** and dislike disclosing their affairs.
- **Cost** of going public (advisers' fees, printing, advertising) is still heavy for small firms.
- **Low liquidity** — shares are thinly traded; investors may find it hard to sell.
- **Higher risk** — young companies with short records may fail.
- **Limit** on the amount of capital that can be raised.
- **Poor record keeping** and weak corporate governance in many small firms.
- **Low public awareness** and investor apathy.
- Burden of **continuing obligations** — audited and half-yearly accounts.
- Unstable economic conditions and high interest rates that draw funds to the money market.

## Main exchange and SSM compared
| Feature | Main (first-tier) market | Second-tier market |
|---|---|---|
| **size of companies** | large, well established | small and medium-sized |
| **trading record** | 5 years | 3 years |
| **public float** | at least 25% | at least 10% |
| **shareholders** | at least 300 | at least 100 |
| **fees** | higher | lower |
| **capital raised** | no limit | limited |
| **reporting** | more frequent and detailed | less demanding |
| **liquidity** | high | low |
| **risk to investors** | lower | higher |

### Similarities
Both are regulated by the **SEC** and the Council of the Exchange; both require **public companies**; trading in both is through **stockbrokers**; both give companies access to public funds.`,
        examples: `**Example 1.** Name the document issued by a broker to confirm a deal. *Answer:* a **contract note**.

**Example 2.** Give one reason why few companies listed on the SSM. *Answer:* Owners **fear losing control** and dislike public disclosure of their affairs.

**Example 3.** State one similarity between the first tier and the SSM. *Answer:* Both are **regulated by the SEC** and traded through **stockbrokers**.`,
      },
      questions: [
        ["E", "The document that invites the public to subscribe for a company's shares is the", "prospectus", "contract note", "memorandum of satisfaction", "debit note", "It gives details of the company and the offer."],
        ["E", "Orders to buy shares on the SSM are placed through a", "stockbroker", "bank cashier", "registrar of companies", "tax officer", "Only dealing members can trade on the Exchange."],
        ["E", "Compared with the main market, companies on the SSM are generally", "smaller", "larger", "older", "foreign-owned", "The SSM serves small and medium-sized firms."],
        ["M", "The document a stockbroker sends to a client to confirm a purchase or sale is the", "contract note", "prospectus", "share warrant", "letter of allotment", "It shows price, commission and fees."],
        ["M", "A major reason why few indigenous companies sought SSM listing is", "fear of loss of control by owners", "absence of stockbrokers", "a ban by the SEC", "excessive demand for their shares", "Owners are reluctant to share ownership and disclose information."],
        ["M", "An advantage of the SSM to a company is", "access to long-term capital at lower cost", "freedom from all regulation", "exemption from audit", "guaranteed share price", "Equity capital replaces costly short-term borrowing."],
        ["M", "Before a private company can be listed on the SSM it must", "convert to a public company", "become a partnership", "close its business", "be nationalised", "Private companies cannot invite the public to subscribe."],
        ["H", "Shares on the SSM are said to have low liquidity because", "they are thinly traded", "their prices are fixed by law", "they cannot be transferred", "dividends are forbidden", "Few buyers and sellers make them hard to sell quickly."],
        ["H", "Selling a company's shares to a limited number of selected investors rather than to the general public is", "a placing", "an offer for subscription", "a rights issue", "a bonus issue", "Placing is cheaper than a full public offer."],
        ["H", "Which of these is a similarity between the first-tier market and the SSM?", "Both are regulated by the SEC", "Both require a five-year trading record", "Both require 300 shareholders", "Both charge the same fees", "The SEC supervises all segments of the market."],
      ],
      jamb: [
        ["M", "The institution that manages a company's public issue and advises on its price is the", "issuing house", "registrar", "clearing house", "trade union", "Issuing houses sponsor new issues."],
        ["H", "From an investor's point of view, shares listed on the SSM compared with first-tier shares usually carry", "higher risk", "no risk", "a guaranteed dividend", "lower growth prospects in all cases", "Young, small companies are more likely to fail."],
      ],
    },
    {
      week: 6,
      title: "Economic Grouping in West Africa",
      subtopics: ["Meaning and forms of economic grouping", "Examples: ECOWAS, WAEC and the Mano River Union", "Objectives of ECOWAS", "Achievements and challenges of economic groupings"],
      objectives: ["Explain economic grouping and its forms", "Identify the economic and co-operative groupings in West Africa", "State the objectives of ECOWAS", "Discuss the achievements and challenges of economic groupings in West Africa"],
      lesson: {
        title: "Co-operation among West African States",
        summary: "Why countries join together economically, the West African groupings, and their record.",
        minutes: 40,
        notes: `## Meaning
An **economic grouping (economic integration)** is an association of countries, usually in the same region, that agree to **co-operate in trade and economic matters** by removing barriers among themselves and adopting common policies.

## Forms (stages) of economic integration
| Form | Features |
|---|---|
| **preferential trade area** | lower tariffs on selected goods from members |
| **free trade area** | no tariffs or quotas among members; each keeps its own tariffs against outsiders |
| **customs union** | free trade among members + a **common external tariff** |
| **common market** | customs union + **free movement of labour and capital** |
| **economic union** | common market + harmonised economic policies, common currency |

## Reasons for economic groupings
larger **market**; **specialisation** and economies of scale; stronger **bargaining power**; **pooling of resources** for joint projects; faster industrialisation; reduction of dependence on former colonial powers; regional peace.

## Groupings and co-operative bodies in West Africa
| Body | Founded | Members and purpose |
|---|---|---|
| **ECOWAS** — Economic Community of West African States | 1975 (Treaty of Lagos) | West African states; economic integration. Commission in **Abuja** |
| **MRU** — Mano River Union | 1973 | **Liberia and Sierra Leone**, joined by **Guinea** (1980) and **Côte d'Ivoire** (2008); customs union and joint development. Secretariat in **Freetown** |
| **UEMOA / WAEMU** — West African Economic and Monetary Union | 1994 | French-speaking states (plus Guinea-Bissau) sharing the **CFA franc**; headquarters in Ouagadougou |
| **WAEC** — West African Examinations Council | 1952 | Nigeria, Ghana, Sierra Leone, The Gambia and Liberia; a co-operative **educational** body that conducts common examinations — an example of functional co-operation rather than a trade bloc |
| **Niger Basin Authority; Lake Chad Basin Commission** | 1960s | joint management of shared rivers and lakes |
| **West African Clearing House / West African Monetary Agency** | 1975 | settles payments among central banks |

## Objectives of ECOWAS
1. Promote **co-operation and integration** in all fields of economic activity.
2. **Eliminate customs duties** and other barriers to trade among members.
3. Establish a **common external tariff** and common commercial policy.
4. Ensure **free movement of persons, goods, services and capital**.
5. **Harmonise** agricultural, industrial, transport, communication, energy and monetary policies.
6. Set up a **fund** for co-operation, compensation and development.
7. Work towards a **common currency**.
8. Raise the **standard of living** and maintain economic stability.

### Institutions
Authority of Heads of State and Government; Council of Ministers; the Commission; Community Parliament; Community Court of Justice; **ECOWAS Bank for Investment and Development** (Lomé).

## Achievements
- **Free movement** of citizens — no visa for stays up to 90 days; the ECOWAS passport.
- **Trade liberalisation scheme**; common external tariff.
- Joint **infrastructure**: trans-West African highways, the West African Gas Pipeline, power pool, telecommunications links.
- The **brown card** motor insurance scheme; travellers' cheques.
- **Peace-keeping** through ECOMOG.
- **Trade fairs** and business forums; ECOBANK (a regional bank promoted by West African chambers of commerce).
- WAEC has maintained common educational standards for decades; the MRU built the Mano River bridge and joint training institutes.

## Challenges
- **political instability**, coups and wars
- **similar primary products** — little to trade among members
- **different currencies** and exchange controls
- **language barriers** and colonial ties (Anglophone, Francophone, Lusophone)
- **multiple memberships** of rival groupings
- **fear of domination** by larger states
- **non-payment of contributions**; weak implementation of decisions
- poor **transport and communication**
- reliance on **customs revenue**, making governments reluctant to remove tariffs
- border harassment and smuggling

## Significance for commerce
Wider markets for Nigerian manufacturers and traders; easier movement of business people; regional banking and insurance; joint ventures.`,
        examples: `**Example 1.** Name the original members of the Mano River Union. *Answer:* **Liberia and Sierra Leone**.

**Example 2.** Distinguish a free trade area from a customs union. *Answer:* A **free trade area** removes tariffs among members only; a **customs union** adds a **common external tariff** against non-members.

**Example 3.** State two problems of economic groupings in West Africa. *Answer:* **Political instability** and **different currencies**.`,
      },
      questions: [
        ["E", "An association of countries that agree to co-operate in trade and economic matters is", "an economic grouping", "a cartel of firms", "a chamber of commerce", "a trade union", "Members reduce barriers among themselves."],
        ["E", "The treaty establishing ECOWAS was signed in", "Lagos", "Accra", "Freetown", "Monrovia", "It was signed on 28 May 1975."],
        ["E", "The Mano River Union was originally formed by Liberia and", "Sierra Leone", "Ghana", "Nigeria", "Senegal", "Guinea and Côte d'Ivoire joined later."],
        ["M", "A grouping in which members remove tariffs among themselves and adopt a common external tariff is a", "customs union", "free trade area", "preferential trade area", "monetary agency", "The common external tariff distinguishes it from a free trade area."],
        ["M", "The West African Examinations Council is best described as", "a co-operative educational body", "a customs union", "a regional bank", "a military alliance", "It conducts common examinations for member countries."],
        ["M", "Which of these is an objective of ECOWAS?", "Elimination of customs duties among member states", "Establishment of a single political party", "Adoption of one official language", "Abolition of national armies", "It aims at a free trade area and beyond."],
        ["M", "The secretariat of the Mano River Union is in", "Freetown", "Abuja", "Lomé", "Ouagadougou", "It is in the capital of Sierra Leone."],
        ["H", "A customs union that also allows free movement of labour and capital among members is a", "common market", "free trade area", "preferential trade area", "cartel", "It is the stage after a customs union."],
        ["H", "The ECOWAS 'brown card' scheme relates to", "motor vehicle insurance across member states", "visa-free travel", "a common currency", "customs clearance of ships", "It covers third-party liability for motorists travelling in the region."],
        ["H", "Intra-West African trade remains small mainly because member states", "produce similar primary products", "have identical currencies", "have excellent rail links", "speak one language", "They have little to exchange with one another."],
      ],
      jamb: [
        ["M", "The West African grouping whose members share the CFA franc is", "UEMOA", "MRU", "WAEC", "OPEC", "The West African Economic and Monetary Union."],
        ["H", "Which of the following correctly orders the stages of economic integration from the loosest to the closest?", "Free trade area, customs union, common market, economic union", "Customs union, free trade area, economic union, common market", "Common market, customs union, free trade area, economic union", "Economic union, common market, customs union, free trade area", "Each stage adds further integration to the one before."],
      ],
    },
    {
      week: 8,
      title: "Business Law",
      subtopics: ["Meaning of business law", "Sources of business law", "Importance of business law in commerce", "Branches: contract, company, sale of goods and agency law"],
      objectives: ["Define business law", "Identify the sources of Nigerian business law", "Explain the importance of business law in commerce", "Outline contract law, company law, sale of goods law and agency law"],
      lesson: {
        title: "Law in Business Life",
        summary: "The rules that govern commercial dealings, where they come from, and their main branches.",
        minutes: 40,
        notes: `## Meaning
**Business (commercial or mercantile) law** is the body of **rules that govern business transactions** and the rights and duties of those who take part in them — traders, companies, agents, employers, consumers.

## Sources of business law in Nigeria
| Source | Explanation |
|---|---|
| **the Constitution** | the supreme law; other laws must conform to it |
| **legislation (statutes)** | Acts of the National Assembly and Laws of state Houses of Assembly — e.g. the **Companies and Allied Matters Act**, **Sale of Goods Act 1893** (a statute of general application) and state sale-of-goods laws, **Hire Purchase Act**, **Bills of Exchange Act**, **Labour Act**, Federal Competition and Consumer Protection Act |
| **received English law** | the **common law**, the doctrines of **equity** and statutes of general application in force in England on 1 January 1900 |
| **judicial precedent (case law)** | decisions of superior courts that bind lower courts |
| **customary law** | the customs of the people, including Islamic law, where not repugnant to natural justice |
| **mercantile custom (law merchant)** | long-established usages of traders |
| **international conventions and treaties** | where adopted into Nigerian law |

## Importance of business law in commerce
- makes agreements **enforceable**, giving **certainty and confidence** in dealings
- **protects** the rights of buyers, sellers, creditors, employees and consumers
- provides means of **settling disputes** — courts, arbitration
- regulates the **formation and conduct** of business organisations
- prevents **fraud and unfair practices**
- encourages **credit** and investment
- defines **liability** when things go wrong

## Branches
### 1. Law of contract
A **contract** is an agreement that the law will **enforce**. Essentials of a valid contract:
- **offer** and **acceptance**
- **consideration** — something of value given by each side
- **intention to create legal relations**
- **capacity** of the parties (not minors, the insane or the drunk, with exceptions)
- **legality** of the object
- **genuine consent** — no mistake, misrepresentation, duress or undue influence
- proper **form** where the law requires writing

A contract is **discharged** by performance, agreement, breach or frustration. **Remedies for breach:** damages, specific performance, injunction, rescission.

### 2. Company law
Governs the **formation, management and winding up** of companies — the **Companies and Allied Matters Act (CAMA)**, administered by the **Corporate Affairs Commission (CAC)**. Key ideas: **incorporation** creates a **separate legal person**; **limited liability**; the **memorandum and articles of association**; duties of **directors**; rights of shareholders; meetings; audit; liquidation.

### 3. Sale of goods law
A contract of sale is one by which the seller **transfers the property (ownership) in goods** to the buyer for a **money consideration called the price**.
**Implied terms** protecting the buyer:
- the seller has the **right to sell** (title);
- goods **correspond with their description**;
- goods are of **merchantable quality**;
- goods are **fit for the purpose** made known to the seller;
- in a sale by sample, the bulk corresponds with the **sample**.
The maxim ***caveat emptor*** ("let the buyer beware") applies where the buyer relies on his own judgement. ***Nemo dat quod non habet*** — no one gives what he does not have.
**Remedies of an unpaid seller:** lien on the goods, stoppage in transit, right of resale, action for the price.

### 4. Agency law
**Agency** is the relationship in which one person, the **agent**, is authorised to act **on behalf of another, the principal**, so as to bind the principal in contracts with third parties.
- **Creation:** by express agreement, by implication, by **necessity**, by **estoppel**, by **ratification**.
- **Duties of an agent:** obey instructions; use care and skill; act in good faith; not make secret profit; account for money; not delegate without authority.
- **Duties of a principal:** pay agreed commission; reimburse expenses; indemnify the agent.
- **Types:** general, special and universal agents; brokers, factors, auctioneers, del credere agents.
- **Termination:** by performance, agreement, expiry of time, death, insanity or bankruptcy.

### Other laws affecting business
hire purchase law; insurance law; banking and negotiable instruments law; labour law; consumer protection law; tax law; intellectual property (patents, trade marks, copyright).`,
        examples: `**Example 1.** List four essentials of a valid contract. *Answer:* **offer, acceptance, consideration** and **intention to create legal relations**.

**Example 2.** What does *caveat emptor* mean? *Answer:* **"Let the buyer beware"** — the buyer must examine goods before buying.

**Example 3.** Which body administers company law in Nigeria? *Answer:* the **Corporate Affairs Commission**.`,
      },
      questions: [
        ["E", "The body of rules governing business transactions is known as", "business law", "criminal law", "family law", "constitutional convention", "It is also called commercial or mercantile law."],
        ["E", "An agreement that is enforceable by law is a", "contract", "promise", "proposal", "gift", "Not every agreement is a contract."],
        ["E", "The supreme source of law in Nigeria, to which all business laws must conform, is the", "Constitution", "law merchant", "customary law", "case law", "Any law inconsistent with the Constitution is void."],
        ["M", "The price paid by each party for the promise of the other in a contract is", "consideration", "offer", "acceptance", "capacity", "Each side must give something of value."],
        ["M", "The statute that governs the formation and management of companies in Nigeria is the", "Companies and Allied Matters Act", "Sale of Goods Act", "Hire Purchase Act", "Bills of Exchange Act", "CAMA is administered by the Corporate Affairs Commission."],
        ["M", "The maxim 'caveat emptor' means", "let the buyer beware", "let the seller beware", "the customer is always right", "no one gives what he has not", "The buyer should inspect before buying."],
        ["M", "Decisions of superior courts that bind lower courts in later cases are known as", "judicial precedents", "statutes", "customs", "treaties", "Case law is a source of business law."],
        ["H", "Under the law of sale of goods, the condition that goods must be reasonably fit for normal use is the implied condition of", "merchantable quality", "title", "quiet possession", "sample only", "Goods must be of a saleable standard."],
        ["H", "An agency that arises when a principal later approves an act done without his authority is agency by", "ratification", "necessity", "estoppel", "express appointment", "Approval after the act makes it binding on the principal."],
        ["H", "Which of these is a remedy of an unpaid seller against the goods?", "Lien", "Specific performance", "Injunction", "Rescission by the buyer", "He may retain goods still in his possession until paid."],
      ],
      jamb: [
        ["M", "Which of the following persons lacks full capacity to enter into a binding contract?", "A minor", "A sole trader", "A company director", "A married woman", "Contracts with infants are generally not enforceable against them, except for necessaries."],
        ["H", "The rule 'nemo dat quod non habet' means that", "a person cannot pass a better title than he has", "the buyer must beware", "silence amounts to acceptance", "a contract must be in writing", "A seller without ownership cannot give ownership."],
      ],
    },
    {
      week: 9,
      title: "Contract of Employment and Government Regulation of Business",
      subtopics: ["Meaning and features of a contract of employment", "Rights and duties of employer and employee", "Government regulation: taxes and labour laws", "Environmental and consumer protection"],
      objectives: ["Explain a contract of employment and its features", "State the rights and duties of employers and employees", "Explain why and how government regulates business", "Describe labour, tax, environmental and consumer-protection regulation"],
      lesson: {
        title: "Employment and the Regulation of Business",
        summary: "The legal relationship between employer and employee, and the ways government controls business.",
        minutes: 40,
        notes: `## Contract of employment
A **contract of employment (contract of service)** is an agreement by which one person, the **employee**, agrees to **serve** another, the **employer**, in return for **wages or salary**.

### Features
- it may be **oral or written**; the **Labour Act** requires the employer to give the worker **written particulars within three months**
- parties: **employer and employee**
- contains terms on **nature of work, wages, hours, leave, notice** and discipline
- the employee works under the employer's **control and direction**
- it contains **express** and **implied** terms
- it requires the usual essentials of a contract — offer, acceptance, consideration, capacity, legality

### Contract of service and contract for services
An **employee** works under a **contract of service** and is controlled as to *how* the work is done. An **independent contractor** works under a **contract for services** and is told only *what* to do.

## Duties of the employer (rights of the employee)
1. **pay** the agreed wages as and when due
2. **provide work**
3. provide a **safe system and place of work**, tools and protective equipment
4. **indemnify** the employee for expenses and liabilities properly incurred
5. grant **leave** — annual, sick, maternity — and rest periods
6. give proper **notice** of termination
7. pay **compensation** for injury at work; contribute to **pension**
8. treat the employee with respect; not discriminate

## Duties of the employee (rights of the employer)
1. give **personal service** — he cannot send a substitute
2. **obey** lawful and reasonable orders
3. exercise **care and skill**
4. act in **good faith**: no secret profits, no competing with the employer
5. keep the employer's **secrets** confidential
6. **account** for money and property
7. be punctual and of good conduct
8. give proper **notice** before leaving

## Termination
By notice; expiry of a fixed term; mutual agreement; **dismissal** for misconduct; **redundancy**; retirement; death; frustration.

## Government regulation of business
**Reasons:** to protect **consumers**, **workers** and the **environment**; to raise **revenue**; to prevent **monopoly** and unfair competition; to promote economic development and indigenous participation; to maintain standards, public health and safety.

### 1. Taxes
| Tax | On |
|---|---|
| **companies income tax** | profits of companies |
| **personal income tax (PAYE)** | income of individuals and sole traders |
| **value added tax (VAT)** | goods and services |
| **customs and excise duties** | imports and locally made goods |
| **capital gains tax; stamp duties; withholding tax** | |
Taxes raise revenue, redistribute income and encourage or discourage activities. Administered by the federal and state **revenue services**.

### 2. Labour laws
- the **Labour Act** — terms of employment, hours, protection of wages
- **National Minimum Wage** law
- **Factories Act** — health, safety and welfare in factories
- **Employees' Compensation Act** — compensation for injury at work
- **Pension Reform Act** — contributory pensions
- **Trade Unions Act** and **Trade Disputes Act** — unions, strikes, arbitration; the **National Industrial Court**
- rules against child labour and discrimination

### 3. Environmental protection
Businesses must control **pollution and waste**. The **National Environmental Standards and Regulations Enforcement Agency (NESREA)** enforces standards; **environmental impact assessments** are required before major projects; **NOSDRA** deals with oil spills; state agencies handle sanitation.

### 4. Consumer protection
- **Standards Organisation of Nigeria (SON)** — sets and enforces product standards
- **NAFDAC** — regulates food, drugs, cosmetics and bottled water
- **Federal Competition and Consumer Protection Commission (FCCPC)** — handles complaints, unfair practices and monopolies
- weights and measures laws; price control of some items; sale of goods and hire purchase laws

### 5. Other regulation
**registration and licensing** (Corporate Affairs Commission, professional bodies); **Central Bank** control of banks; **SEC** control of the capital market; import and export regulations; location and town-planning rules.

## Effects of regulation
It protects the public and promotes fair trade; but excessive regulation can raise costs, delay business and encourage evasion.`,
        examples: `**Example 1.** State two duties of an employee to his employer. *Answer:* To **obey lawful orders** and to **act in good faith** (e.g. not disclose trade secrets).

**Example 2.** Which agency sets product standards in Nigeria? *Answer:* the **Standards Organisation of Nigeria (SON)**.

**Example 3.** Distinguish a contract of service from a contract for services. *Answer:* An **employee** is under a contract **of service** and is controlled in how he works; an **independent contractor** is under a contract **for services**.`,
      },
      questions: [
        ["E", "An agreement by which a person agrees to serve another in return for wages is a contract of", "employment", "sale", "agency by necessity", "hire purchase", "It is also called a contract of service."],
        ["E", "A basic duty of an employer to an employee is to", "pay the agreed wages", "obey the employee's orders", "keep the employee's secrets only", "render personal service", "Remuneration is the employer's main obligation."],
        ["E", "The agency that regulates food and drugs in Nigeria is", "NAFDAC", "NESREA", "SEC", "CAC", "The National Agency for Food and Drug Administration and Control."],
        ["M", "Which of these is a duty of an employee?", "To obey lawful and reasonable orders", "To provide a safe place of work", "To pay pension contributions for the employer", "To grant annual leave", "The others are duties of the employer."],
        ["M", "The body responsible for setting and enforcing product standards in Nigeria is the", "Standards Organisation of Nigeria", "Nigerian Ports Authority", "Corporate Affairs Commission", "Central Bank of Nigeria", "SON certifies the quality of goods."],
        ["M", "A tax levied on the profits of companies is", "companies income tax", "value added tax", "excise duty", "stamp duty", "It is charged on taxable profit."],
        ["M", "A reason why government regulates business is to", "protect consumers from exploitation", "increase the profits of monopolies", "abolish competition", "discourage employment", "Regulation promotes fair dealing and safety."],
        ["H", "An independent contractor differs from an employee in that the contractor", "is not controlled as to how the work is done", "must be paid a monthly salary", "is entitled to annual leave", "cannot work for other people", "He works under a contract for services."],
        ["H", "The agency that enforces environmental standards against industrial pollution in Nigeria is", "NESREA", "SON", "FCCPC", "NDIC", "The National Environmental Standards and Regulations Enforcement Agency."],
        ["H", "An employee who secretly uses his employer's customer list to run a rival business is in breach of the duty of", "good faith", "personal service", "punctuality", "skill only", "He must not compete with or profit secretly at the expense of his employer."],
      ],
      jamb: [
        ["M", "The law that provides for compensation to workers injured in the course of employment is the", "Employees' Compensation Act", "Hire Purchase Act", "Sale of Goods Act", "Companies and Allied Matters Act", "It replaced the Workmen's Compensation Act."],
        ["H", "A study required by law before a major industrial project is approved, to show its likely effect on the surroundings, is", "an environmental impact assessment", "a feasibility budget", "an audit report", "a prospectus", "It guards against environmental damage."],
      ],
    },
    {
      week: 10,
      title: "Negotiable Instruments",
      subtopics: ["Definition of negotiable instruments", "Cheques", "Bills of exchange", "Promissory notes; features and importance"],
      objectives: ["Define a negotiable instrument", "Describe cheques, bills of exchange and promissory notes and their parties", "State the features of negotiable instruments", "Explain the importance of negotiable instruments in business"],
      lesson: {
        title: "Cheques, Bills and Notes",
        summary: "Documents that pass from hand to hand like money, carrying the right to payment.",
        minutes: 40,
        notes: `## Definition
A **negotiable instrument** is a **written document** embodying a right to the payment of money which can be **transferred from one person to another by mere delivery, or by endorsement and delivery**, so that a person who takes it **in good faith and for value** obtains a **good title**, even if the transferor's title was defective.

The main examples are **cheques, bills of exchange and promissory notes**. Others include bank notes, treasury bills, dividend warrants, bearer bonds and share warrants. **Postal orders, money orders, bills of lading and share certificates are not negotiable instruments.**

## Features
1. **Transferable** by delivery (if payable to bearer) or by endorsement and delivery (if payable to order).
2. The transferee takes it **free from defects** in the title of previous holders, provided he is a **holder in due course**.
3. The holder can **sue in his own name**.
4. **No notice** of transfer need be given to the party liable.
5. **Consideration is presumed**.
6. It must be **in writing** and **signed**.
7. It must be for a **sum certain in money**, and **unconditional**.

A **holder in due course** is one who took the instrument, complete and regular on its face, **before it was overdue**, **in good faith**, **for value**, and **without notice** of any defect or previous dishonour.

## Bill of exchange
> An **unconditional order in writing**, addressed by one person to another, **signed by the person giving it**, requiring the person to whom it is addressed to pay **on demand or at a fixed or determinable future time** a **sum certain in money** to, or to the order of, a specified person, or to bearer.

### Parties
| Party | Role |
|---|---|
| **drawer** | the creditor who draws (writes) the bill |
| **drawee** | the debtor on whom it is drawn; on signing "accepted" he becomes the **acceptor** |
| **payee** | the person to be paid — may be the drawer or a third party |

### Life of a bill
drawn → **accepted** by the drawee → held until maturity, or **discounted** with a bank (sold for less than face value), or **negotiated** (endorsed to a creditor) → presented for payment → **honoured** or **dishonoured**. A dishonoured bill may be **noted and protested** by a notary public. Three **days of grace** are traditionally added to a time bill.

- **Sight (demand) bill** — payable on presentation. **Usance (time) bill** — payable after a period, e.g. 90 days.
- **Inland bill** — drawn and payable within the country; **foreign bill** — otherwise.

## Cheque
A **cheque** is a **bill of exchange drawn on a banker, payable on demand**.

### Parties
**drawer** — the account holder; **drawee** — the bank; **payee** — the person named to receive payment.

### Types
- **open cheque** — can be cashed over the counter; **bearer** or **order**
- **crossed cheque** — two parallel lines across its face; must be paid **into a bank account**. A **general crossing** has the lines alone or with "& Co."; a **special crossing** names a bank. "**Not negotiable**" and "**account payee only**" give extra protection.
- **post-dated**, **stale** (presented after six months) and **certified / bank** cheques (drafts)

### Dishonour
A bank may refuse payment for: insufficient funds; irregular signature; words and figures differing; stale or post-dated cheque; the drawer's countermand, death, insanity or bankruptcy; a court order.

### Endorsement
Signing on the back to transfer the cheque: **blank**, **special** ("pay X or order") or **restrictive** ("pay X only").

## Promissory note
> An **unconditional promise in writing**, made by one person to another, **signed by the maker**, engaging to pay on demand or at a fixed or determinable future time a sum certain in money to, or to the order of, a specified person or to bearer.

Parties: the **maker** (debtor) and the **payee** (creditor). It needs **no acceptance**. A bank note is a promissory note payable to bearer on demand.

## Comparison
| | Bill of exchange | Cheque | Promissory note |
|---|---|---|---|
| **nature** | order to pay | order to pay | promise to pay |
| **parties** | three | three (drawee is a bank) | two |
| **drawn by** | creditor | debtor (account holder) | debtor |
| **acceptance** | needed (time bills) | not needed | not needed |
| **payable** | on demand or later | on demand | on demand or later |
| **crossing** | cannot be crossed | can be crossed | cannot be crossed |

## Importance in business
- **safe and convenient** means of payment — no need to carry cash
- provide **evidence** of debt and payment
- allow **credit**: the buyer pays later while the seller can discount the bill for cash at once
- **finance** home and foreign trade
- easily **transferable** to settle other debts
- reduce the need for currency in circulation
- legally enforceable`,
        examples: `**Example 1.** Name the three parties to a cheque. *Answer:* the **drawer** (account holder), the **drawee** (bank) and the **payee**.

**Example 2.** Why is a promissory note different from a bill of exchange? *Answer:* A note is a **promise** by the debtor with **two parties**; a bill is an **order** by the creditor with **three parties**.

**Example 3.** What is the effect of crossing a cheque? *Answer:* It can only be **paid into a bank account**, not cashed over the counter.`,
      },
      questions: [
        ["E", "A bill of exchange drawn on a banker and payable on demand is a", "cheque", "promissory note", "postal order", "treasury bill", "This is the legal definition of a cheque."],
        ["E", "The person who makes the written promise to pay in a promissory note is the", "maker", "drawee", "acceptor", "endorsee", "The maker is the debtor who signs the note."],
        ["E", "A promissory note has", "two parties", "three parties", "four parties", "one party", "The maker and the payee."],
        ["M", "Which of these is NOT a negotiable instrument?", "Postal order", "Cheque", "Bill of exchange", "Promissory note", "A postal order cannot be freely negotiated."],
        ["M", "In a bill of exchange, the creditor who writes out the bill is the", "drawer", "drawee", "acceptor", "payee's banker", "The drawer orders the debtor to pay."],
        ["M", "A crossing on a cheque that includes the name of a particular bank is a", "special crossing", "general crossing", "blank endorsement", "restrictive covenant", "The cheque can be collected only through the named bank."],
        ["M", "When the drawee signs his agreement to pay on the face of a bill of exchange, the bill is said to be", "accepted", "discounted", "dishonoured", "endorsed", "The drawee then becomes the acceptor."],
        ["H", "Selling a bill of exchange to a bank before maturity for less than its face value is", "discounting", "negotiating by gift", "noting", "protesting", "The bank's charge is the discount."],
        ["H", "A person who takes a negotiable instrument in good faith, for value, before it is overdue and without notice of any defect is", "a holder in due course", "a drawee in case of need", "an acceptor for honour", "a mere bearer", "He obtains a title free from prior defects."],
        ["H", "A bank will dishonour a customer's cheque if", "the amount in words differs from that in figures", "the account is in credit", "the signature is regular", "the cheque is presented within a week", "An irregular cheque is returned unpaid."],
      ],
      jamb: [
        ["M", "A cheque presented for payment more than six months after its date is", "a stale cheque", "a post-dated cheque", "a certified cheque", "a crossed cheque", "Banks normally refuse cheques that are out of date."],
        ["H", "An endorsement that reads 'Pay Musa Bello only' is", "a restrictive endorsement", "a blank endorsement", "a special endorsement payable to order", "a conditional acceptance", "It prevents further negotiation of the instrument."],
      ],
    },
  ],
};
