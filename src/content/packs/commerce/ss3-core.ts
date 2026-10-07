import type { TermPlan } from "../types";

/** SS3 Commerce — original Precious PS content following the national senior secondary curriculum. */
export const ss3core: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Introduction to business management",
        subtopics: ["Meaning and importance of management", "Functions of management", "Levels of management and business resources", "Principles of management and leadership styles"],
        objectives: ["Define management and state its importance", "Explain the functions of management", "Describe the levels of management and the resources of a business", "State the principles of management and describe leadership styles"],
        lesson: {
          title: "Managing a Business",
          summary: "Explain the functions, levels and principles of management.",
          minutes: 40,
          notes: `## Management
The **process of planning, organising, directing and controlling the resources of an organisation in order to achieve its objectives** efficiently — "getting things done through people".

## Business objectives
profit; survival; growth; a larger share of the market; customer satisfaction; service to society; welfare of employees.

## Business resources — the "four Ms"
- **men** — human resources: workers and managers
- **money** — capital
- **materials** — raw materials and stock
- **machines** — equipment and technology
Also: **methods**, **markets** and **management** itself. Management combines these resources to produce results.

## Functions of management
**Henri Fayol** listed planning, organising, commanding, co-ordinating and controlling. They are usually stated as:
1. **planning** — deciding in advance **what** is to be done, **how**, **when** and **by whom**; setting objectives, policies, budgets and forecasts. It comes first
2. **organising** — arranging resources and activities: grouping work into departments, assigning duties, establishing authority and relationships
3. **staffing** — recruiting, selecting, training, placing and rewarding employees
4. **directing (leading or commanding)** — guiding, instructing, **motivating** and supervising employees
5. **co-ordinating** — harmonising the work of different departments so that they pull in the same direction
6. **controlling** — setting standards, **measuring** actual performance, **comparing** it with the plan and **correcting** deviations
Also: communicating, decision making, budgeting and reporting.

## Levels of management
| Level | Who | Work |
|---|---|---|
| **top management** | board of directors, managing director, general manager | sets **objectives and policies**; long-term (strategic) plans |
| **middle management** | departmental and branch managers | carries out policies; plans and controls departments |
| **lower (supervisory) management** | supervisors, foremen | directs the **day-to-day work** of operatives |

## Principles of management
- **division of work (specialisation)**
- **authority and responsibility** — the right to give orders must be matched by accountability
- **unity of command** — each employee receives orders from **one superior only**
- **unity of direction** — one head and one plan for activities with the same objective
- **scalar chain** — a clear line of authority from top to bottom
- **span of control** — the number of subordinates a manager can supervise effectively
- **delegation** — passing authority to subordinates to carry out tasks
- **discipline**; **equity**; **order**
- **remuneration** — fair pay
- **centralisation** and decentralisation in proper balance
- **esprit de corps** — team spirit
- initiative; stability of staff

## Authority, responsibility and accountability
- **authority** — the right to command and take decisions
- **responsibility** — the obligation to perform a duty
- **accountability** — answerability for results
Authority can be **delegated**; ultimate responsibility cannot.

## Delegation
Assigning part of one's work and authority to a subordinate.
- **advantages**: relieves the manager; quicker decisions; develops and motivates subordinates
- requires clear instructions, capable subordinates and control

## Leadership styles
- **autocratic (authoritarian)** — the leader decides alone and gives orders; quick, but lowers morale
- **democratic (participative)** — subordinates are consulted; better morale and ideas, but slower
- **laissez-faire (free-rein)** — subordinates are left to decide; suits experts, but may lack direction

## Motivation
Whatever makes people willing to work well: fair pay, bonuses, promotion, recognition, job security, good conditions, training and participation.

## Decision making
identify the problem → gather information → develop alternatives → evaluate them → choose the best → implement → review.

## Communication in management
Downward (instructions), upward (reports and suggestions) and horizontal (between departments); formal and informal (the "grapevine").

## Importance of management
achieves objectives; uses scarce resources efficiently; co-ordinates activities; adapts the business to change; motivates staff; ensures survival and growth.

## Qualities of a good manager
knowledge and experience; ability to plan and decide; good communication; honesty and fairness; leadership; initiative; ability to delegate.`,
          examples: `**Example 1.** List the main functions of management. *Answer:* **Planning, organising, staffing, directing, co-ordinating and controlling**.

**Example 2.** What does unity of command mean? *Answer:* Each employee takes orders from **only one superior**.

**Example 3.** Which level of management sets company policy? *Answer:* **Top management**.`,
        },
        questions: [
          ["E", "The process of planning, organising, directing and controlling resources to achieve objectives is", "management", "marketing", "warehousing", "auditing", "It gets things done through people."],
          ["E", "The management function of deciding in advance what is to be done is", "planning", "controlling", "staffing", "directing", "It comes before all the other functions."],
          ["E", "The board of directors and the managing director belong to", "top management", "middle management", "supervisory management", "the operative level", "They set objectives and policies."],
          ["M", "Comparing actual performance with planned standards and correcting deviations is the function of", "controlling", "planning", "organising", "staffing", "It keeps the business on course."],
          ["M", "Recruiting, selecting and training employees is the management function of", "staffing", "directing", "co-ordinating", "planning", "It provides the human resources needed."],
          ["M", "The principle that each employee should receive orders from only one superior is", "unity of command", "span of control", "division of work", "esprit de corps", "It avoids conflicting instructions."],
          ["M", "The number of subordinates that a manager can effectively supervise is the", "span of control", "scalar chain", "unity of direction", "line of credit", "It should not be too wide."],
          ["H", "A leader who takes all decisions alone and simply issues orders practises", "autocratic leadership", "democratic leadership", "laissez-faire leadership", "participative leadership", "Subordinates are not consulted."],
          ["H", "When a manager assigns part of his authority to a subordinate, the manager", "remains ultimately responsible for the results", "is no longer accountable", "loses his position", "transfers all his responsibility", "Authority can be delegated but ultimate responsibility cannot."],
          ["H", "Harmonising the activities of different departments so that they work towards the same goals is", "co-ordinating", "staffing", "controlling", "delegating", "It prevents departments from working at cross purposes."],
        ],
      },
      {
        week: 2,
        title: "Organisational structure and business departments",
        subtopics: ["Meaning of organisational structure", "Types of organisational structure", "Departments of a business and their functions", "Centralisation, decentralisation and the organisation chart"],
        objectives: ["Explain organisational structure and the organisation chart", "Describe the line, line-and-staff, functional and committee structures", "State the functions of the main departments of a business", "Distinguish centralisation from decentralisation"],
        lesson: {
          title: "How a Business Is Organised",
          summary: "Describe organisational structures and the functions of business departments.",
          minutes: 40,
          notes: `## Organisational structure
The **framework of relationships among positions and people in an organisation** — who does what, who reports to whom, and how activities are grouped and co-ordinated.

## Organisation chart
A **diagram showing the structure**: the positions, the departments and the **lines of authority and communication**.
### Uses
shows each person's position and to whom he reports; clarifies authority and responsibility; reveals overlaps and gaps; helps new employees to understand the firm.
### Limitations
soon out of date; shows only formal relationships; may make the organisation rigid.

## Types of structure
### 1. Line (military) organisation
Authority flows in a **direct line from the top to the bottom**; each person has **one boss**.
- **advantages**: simple and clear; unity of command; quick decisions; strong discipline; fixed responsibility
- **disadvantages**: managers are overloaded and must know everything; no specialist advice; depends on a few key people; little room for initiative; unsuited to large firms

### 2. Line and staff organisation
The line structure plus **specialists (staff)** — accountants, lawyers, engineers, personnel officers — who **advise** line managers but have **no authority to command**.
- **advantages**: expert advice; line managers are relieved; better decisions; unity of command is kept
- **disadvantages**: conflict between line and staff; advice may be ignored; costly; confusion over authority

### 3. Functional organisation
The business is divided according to **functions**, and each **specialist head has authority over his function throughout the organisation**; a worker may receive orders from several specialists.
- **advantages**: full use of specialists; high efficiency; managers are not overburdened
- **disadvantages**: **violates unity of command**; divided responsibility; difficult co-ordination; discipline suffers

### 4. Committee organisation
A **group of people** appointed to deliberate and decide on particular matters — standing committees (permanent) and ad hoc committees (temporary).
- **advantages**: pooled knowledge; wider acceptance of decisions; co-ordination; training ground for managers
- **disadvantages**: slow and costly; compromise decisions; no single person is responsible; a few may dominate

### Others
matrix (project) organisation; divisional structure — by product, area or customer.

## Formal and informal organisation
- **formal** — the official structure of positions and rules
- **informal** — the network of personal and social relationships among employees

## Departmentation
Grouping activities into departments — by **function**, **product**, **geographical area**, **customer** or **process**.

## Departments and their functions
| Department | Functions |
|---|---|
| **production** | turns raw materials into finished goods; production planning; quality control; maintenance of machinery |
| **purchasing** | buys raw materials, equipment and supplies of the right quality, at the right price and time; stock control |
| **marketing (sales)** | market research; advertising and sales promotion; selling; distribution; customer service |
| **finance and accounts** | raises and manages funds; keeps the books; pays wages and suppliers; prepares budgets and final accounts; credit control |
| **personnel (human resources)** | recruitment, selection and training; staff records; wages policy; welfare, health and safety; discipline; industrial relations |
| **administration** | general office services; correspondence and records; secretarial work; legal matters; security |
| **research and development** | new products and methods; improvement of existing ones |
| **transport / logistics** | movement and storage of goods |
The departments are **interdependent**: marketing forecasts sales; production plans output; purchasing buys materials; finance provides funds; personnel provides staff.

## Centralisation and decentralisation
- **centralisation** — decision-making authority is **concentrated at the top (head office)**
  - *advantages*: uniform policy; tight control; economies in buying and staffing; less duplication
  - *disadvantages*: slow decisions; top managers overloaded; local needs ignored; low initiative and morale at lower levels
- **decentralisation** — authority is **dispersed to lower levels and branches**
  - *advantages*: quick decisions suited to local conditions; motivation and training of managers; top management freed for policy
  - *disadvantages*: lack of uniformity; duplication; harder to control and co-ordinate; needs capable managers

## Span of control and levels
A **wide** span gives a **flat** structure with few levels; a **narrow** span gives a **tall** structure with many levels. The right span depends on the complexity of the work, the ability of manager and staff, and the quality of communication.

## Chain of command
The line of authority from the highest to the lowest position.

## Good organisation
clear objectives; defined duties; authority matched with responsibility; unity of command; a reasonable span of control; flexibility; good communication.`,
          examples: `**Example 1.** What is an organisation chart? *Answer:* A **diagram showing the positions and lines of authority** in an organisation.

**Example 2.** Which department handles recruitment and training? *Answer:* The **personnel (human resources)** department.

**Example 3.** State the main weakness of functional organisation. *Answer:* It **violates unity of command** — a worker has several bosses.`,
        },
        questions: [
          ["E", "A diagram that shows the positions and lines of authority in an organisation is", "an organisation chart", "a balance sheet", "a bill of lading", "a flow of funds statement", "It shows who reports to whom."],
          ["E", "The department responsible for recruiting and training staff is the", "personnel department", "production department", "purchasing department", "marketing department", "It is also called human resources."],
          ["E", "The department that carries out advertising and selling is the", "marketing department", "accounts department", "personnel department", "production department", "It also conducts market research."],
          ["M", "A structure in which authority flows directly from the top to the bottom, each person having one boss, is", "line organisation", "functional organisation", "committee organisation", "matrix organisation", "It is also called military organisation."],
          ["M", "In a line and staff organisation, staff officers", "advise line managers but have no authority to command", "give orders to all workers", "replace the line managers", "own the business", "They are specialists such as accountants and lawyers."],
          ["M", "The department that buys raw materials and supplies for a firm is the", "purchasing department", "marketing department", "personnel department", "research department", "It seeks the right quality at the right price."],
          ["M", "The concentration of decision-making authority at the head office is known as", "centralisation", "decentralisation", "delegation", "departmentation", "Branches have little power to decide."],
          ["H", "A disadvantage of functional organisation is that it", "violates the principle of unity of command", "provides no specialist knowledge", "overloads the general manager with detail", "allows only one line of authority", "A worker may receive orders from several specialists."],
          ["H", "A wide span of control produces an organisation that is", "flat, with few levels of management", "tall, with many levels of management", "without any managers", "always a committee", "Each manager supervises many subordinates."],
          ["H", "An advantage of decentralisation is that", "decisions are taken quickly to suit local conditions", "policies are identical everywhere", "top management takes every decision", "there is no need for capable branch managers", "Authority is passed to those close to the problem."],
        ],
      },
      {
        week: 3,
        title: "Law of contract",
        subtopics: ["Meaning and types of contract", "Elements of a valid contract", "Void, voidable and unenforceable contracts", "Discharge of contract and remedies for breach"],
        objectives: ["Define a contract and distinguish its types", "Explain the elements of a valid contract", "Distinguish void, voidable and unenforceable contracts", "Explain how contracts are discharged and the remedies for breach"],
        lesson: {
          title: "Agreements the Law Will Enforce",
          summary: "Explain the essentials of a valid contract, how contracts end and the remedies for breach.",
          minutes: 40,
          notes: `## Contract
An **agreement between two or more parties that is intended to create legal obligations and is enforceable by law**. All contracts are agreements, but not all agreements are contracts — a promise to take a friend to lunch is not.

## Types
- **simple contract** — made **orally, in writing or by conduct**; it must be supported by **consideration**
- **specialty contract (contract by deed)** — written, **signed, sealed and delivered**; needs no consideration: conveyances of land, leases over three years
- **express** contract — terms stated; **implied** contract — inferred from conduct (boarding a bus)
- **executed** contract — fully performed; **executory** — still to be performed

## Elements (essentials) of a valid contract
### 1. Offer
A definite **proposal** made by one person (the **offeror**) to another (the **offeree**), showing willingness to be bound on stated terms.
- it must be **communicated**
- it may be made to one person, a group or the world at large
- it can be **revoked** before acceptance
- an **invitation to treat** is **not** an offer: goods **displayed** in a shop window or on shelves with price tags, **advertisements**, catalogues, auctions and tenders merely invite others to make offers
- an offer ends by revocation, rejection, **counter-offer**, lapse of time or death

### 2. Acceptance
The **unconditional assent** to all the terms of the offer.
- it must be **communicated** to the offeror (silence is not acceptance)
- it must be made by the offeree, in the manner required
- a reply that changes the terms is a **counter-offer**, which destroys the original offer

### 3. Consideration
The **price paid for the promise** — something of value given or promised by each party: money, goods, a service or forbearance.
- it must be **real** and lawful, but need **not be adequate**
- it must **move from the promisee**
- it must **not be past** — something already done before the promise is not good consideration

### 4. Intention to create legal relations
The parties must intend the agreement to be legally binding. It is presumed in **business** agreements, but not in **social and domestic** ones.

### 5. Capacity
The parties must be legally able to contract. Limited capacity:
- **minors (infants)** — bound only by contracts for **necessaries** and for beneficial training or employment
- persons of **unsound mind** and **drunken** persons — contracts may be voidable
- **companies** — within the objects in their memorandum
- undischarged bankrupts; enemy aliens

### 6. Legality
The object must be **lawful** — not a crime, a fraud or against public policy.

### 7. Genuine consent
Agreement must be free — not obtained by **mistake, misrepresentation, fraud, duress** or **undue influence**.

### 8. Form
Some contracts must be in writing or by deed — sale of land, hire purchase, insurance, guarantees.

## Validity
- **valid** — has all the elements; enforceable
- **void** — of **no legal effect** from the beginning: an illegal contract; one made under a fundamental mistake
- **voidable** — valid until **set aside at the option of the injured party**: contracts induced by misrepresentation, duress or undue influence; many contracts with minors
- **unenforceable** — valid, but cannot be enforced in court for a technical defect, such as lack of written evidence
- **illegal** — forbidden by law

## Discharge (termination) of contract
1. **performance** — both parties carry out their obligations
2. **agreement** — the parties agree to end or replace the contract
3. **breach** — one party fails or refuses to perform
4. **frustration (impossibility)** — an event beyond the parties' control makes performance impossible or illegal: destruction of the subject matter, death in a contract of personal service, a change in the law
5. **operation of law** — lapse of time (limitation), bankruptcy, merger

## Remedies for breach
- **damages** — money compensation for the loss suffered; the commonest remedy
- **specific performance** — a court order compelling the party to carry out the contract (for unique things such as land)
- **injunction** — an order restraining a party from doing something
- **rescission** — setting the contract aside and restoring the parties
- ***quantum meruit*** — payment for work already done ("as much as he has earned")
- refusal of further performance

## Privity of contract
Only the **parties** to a contract can sue or be sued on it.

## Importance of contract law to commerce
Every sale, loan, insurance policy, employment and hire is a contract; the law gives certainty and trust in business dealings.`,
          examples: `**Example 1.** Is a price tag on goods in a shop an offer? *Answer:* **No** — it is an **invitation to treat**; the customer makes the offer.

**Example 2.** State five elements of a valid contract. *Answer:* **Offer, acceptance, consideration, intention to create legal relations and capacity**.

**Example 3.** What is the usual remedy for breach of contract? *Answer:* **Damages** — money compensation.`,
        },
        questions: [
          ["E", "An agreement between parties that is enforceable by law is", "a contract", "an offer", "a tender", "an invitation to treat", "It creates legal obligations."],
          ["E", "The person who makes an offer is called the", "offeror", "offeree", "guarantor", "agent", "The person to whom it is made is the offeree."],
          ["E", "Money compensation awarded by a court for breach of contract is called", "damages", "an injunction", "a deed", "consideration", "It is the most common remedy."],
          ["M", "The price paid by one party for the promise of the other in a contract is", "consideration", "capacity", "acceptance", "frustration", "It must be real but need not be adequate."],
          ["M", "The display of goods with price tags in a shop window is regarded in law as", "an invitation to treat", "an offer", "an acceptance", "a counter-offer", "The customer makes the offer when he asks to buy."],
          ["M", "A reply to an offer that introduces new terms is", "a counter-offer", "an acceptance", "a revocation by the offeror", "consideration", "It destroys the original offer."],
          ["M", "A contract that has no legal effect from the beginning is", "void", "voidable", "valid", "executed", "An illegal contract is an example."],
          ["H", "A contract induced by misrepresentation, which the injured party may choose to set aside, is", "voidable", "void", "illegal", "discharged by performance", "It remains valid until it is avoided."],
          ["H", "A hall hired for a concert is destroyed by fire before the event, through no one's fault. The contract is discharged by", "frustration", "breach", "performance", "agreement", "Performance has become impossible."],
          ["H", "A court order compelling a party to carry out his obligations under a contract is", "specific performance", "an injunction", "damages", "quantum meruit", "It is granted where money would not be adequate, as with land."],
        ],
      },
      {
        week: 4,
        title: "Agency, sale of goods and hire purchase law",
        subtopics: ["The law of agency", "Duties of agent and principal and termination of agency", "The Sale of Goods Act", "The Hire Purchase Act"],
        objectives: ["Explain agency and how it is created", "State the duties of agent and principal and how agency ends", "Explain the main provisions of the Sale of Goods Act", "Explain the main provisions of the Hire Purchase Act"],
        lesson: {
          title: "Laws Governing Everyday Business",
          summary: "Explain the law of agency, sale of goods and hire purchase.",
          minutes: 40,
          notes: `## Agency
The relationship in which one person (the **agent**) is authorised to act **on behalf of another (the principal)** so as to create a contract between the principal and a **third party**.

### Creation of agency
- **express agreement** — oral or written (a **power of attorney** is a formal written authority)
- **implication** — from conduct or the relationship of the parties
- **necessity** — in an emergency, to protect the principal's property when he cannot be reached
- **ratification** — the principal later **adopts** an act done without authority
- **estoppel** — the principal let others believe the person was his agent

### Types of agent
- **general agent** — authority to act in all matters of a particular kind (a manager)
- **special agent** — appointed for **one particular transaction**
- **universal agent** — unlimited authority
- **broker** — brings buyer and seller together; does not hold the goods; earns **brokerage**
- **factor** — has possession of the goods and sells in his own name
- **del credere agent** — guarantees payment by buyers, for an extra commission
- **auctioneer** — sells by public auction to the highest bidder
- commission agents; estate agents; clearing and forwarding agents

### Duties of an agent
- to **obey** the principal's lawful instructions
- to act with **care, skill and diligence**
- to act in **good faith** — avoiding conflict of interest
- **not to make a secret profit** or take bribes
- to **account** for all money and property
- **not to delegate** his duties without authority
- to keep the principal's affairs confidential

### Duties of a principal
- to **pay** the agreed commission or remuneration
- to **indemnify** the agent for expenses and liabilities properly incurred
- not to prevent the agent from earning his commission

### Termination
by **agreement**; completion of the task; expiry of time; **revocation** by the principal or **renunciation** by the agent; **death, insanity or bankruptcy** of either; destruction of the subject matter; illegality.

## Sale of goods
Governed by the **Sale of Goods Act of 1893** (and state laws based on it).
- a **contract of sale** is one by which the seller **transfers the property (ownership) in goods to the buyer for a money price**
- **sale** — ownership passes at once; **agreement to sell** — ownership is to pass later or on a condition

### Conditions and warranties
- a **condition** is a term **vital** to the contract; its breach allows the buyer to **reject the goods and end the contract**
- a **warranty** is a **minor** term; its breach gives a right to **damages only**

### Implied terms
- the seller has the **right to sell (title)**
- goods sold **by description** must correspond with the description
- goods must be of **merchantable (satisfactory) quality**
- goods must be **fit for the purpose** the buyer made known
- goods sold **by sample** must correspond with the sample
- the buyer shall have quiet possession, free from undisclosed charges

### Other rules
- ***caveat emptor*** — "let the buyer beware"; limited by the implied terms
- ***nemo dat quod non habet*** — "no one can give what he does not have": a seller cannot pass a better title than his own
- **risk** normally passes with ownership

### Rights of an unpaid seller
- **lien** — to keep the goods until paid
- **stoppage in transit** — to stop goods on their way to an insolvent buyer
- **resale**; and an action for the price or for damages

### Remedies of the buyer
reject the goods; sue for damages for non-delivery or breach of warranty; specific performance.

## Hire purchase
Governed by the **Hire Purchase Act of 1965**. The hirer takes possession and pays by instalments; **ownership passes on the final payment**.
### Protection for the hirer
- the agreement must be **in writing** and signed, stating the **cash price**, the **hire purchase price**, the instalments and a description of the goods; the hirer must receive a **copy**
- before the agreement, the cash price must be stated
- the owner **cannot recover possession without a court order** once the **relevant proportion** of the price has been paid — **one-half** for most goods and **three-fifths** for motor vehicles
- the hirer may **terminate** the agreement on stated terms
- implied conditions as to title, quality and fitness
- clauses allowing the owner to enter premises to seize goods are void

### Hire purchase and credit sale
Under a **credit sale**, ownership passes immediately and the seller can only sue for the price.

## Other laws affecting business
company law; partnership law; labour law; insurance law; consumer protection; negotiable instruments; taxation.`,
          examples: `**Example 1.** Name the three parties in an agency relationship. *Answer:* The **principal**, the **agent** and the **third party**.

**Example 2.** Distinguish a condition from a warranty. *Answer:* Breach of a **condition** allows the buyer to **reject the goods**; breach of a **warranty** gives only **damages**.

**Example 3.** State two duties of an agent. *Answer:* To **obey instructions** and **not to make a secret profit**.`,
        },
        questions: [
          ["E", "A person authorised to act on behalf of another in dealings with third parties is", "an agent", "a principal", "a debtor", "a bailee only", "The person he acts for is the principal."],
          ["E", "An agent who sells goods by public bidding to the highest bidder is", "an auctioneer", "a broker", "a factor", "a del credere agent", "The fall of the hammer completes the sale."],
          ["E", "The sale of goods in Nigeria is governed mainly by the", "Sale of Goods Act", "Partnership Act", "Hire Purchase Act", "Companies and Allied Matters Act", "It dates from 1893."],
          ["M", "When a principal later adopts an act done by an agent without authority, agency is created by", "ratification", "necessity", "estoppel", "express agreement", "The act becomes binding as if authorised from the start."],
          ["M", "A duty of an agent to his principal is", "not to make a secret profit", "to pay the principal a commission", "to indemnify the principal for all losses of trade", "to compete with the principal", "He must act in good faith."],
          ["M", "In a contract of sale, a term that is vital to the contract, breach of which allows the buyer to reject the goods, is", "a condition", "a warranty", "a lien", "an indent", "A warranty gives only a claim for damages."],
          ["M", "The right of an unpaid seller to retain the goods until he is paid is", "a lien", "stoppage in transit", "resale", "ratification", "He must still be in possession of the goods."],
          ["H", "The maxim 'nemo dat quod non habet' means that", "no one can give a better title than he has", "the buyer must beware", "the agent must obey", "the contract is void for mistake", "A thief cannot pass ownership of stolen goods."],
          ["H", "Under the Hire Purchase Act, the owner cannot repossess goods without a court order once the hirer has paid", "the relevant proportion of the hire purchase price", "the first instalment", "the deposit only", "nothing at all", "It is one-half for most goods and three-fifths for motor vehicles."],
          ["H", "An agent appointed to carry out only one particular transaction is", "a special agent", "a general agent", "a universal agent", "a del credere agent", "His authority ends when the task is done."],
        ],
      },
      {
        week: 5,
        title: "Government regulation of business",
        subtopics: ["Reasons for and methods of regulating business", "Registration of businesses", "Patents, trade marks and copyright", "Regulatory agencies and taxation"],
        objectives: ["Explain why and how government regulates business", "Describe the registration of business names and companies", "Distinguish patents, trade marks and copyright", "Describe the main regulatory agencies and business taxes"],
        lesson: {
          title: "Business and the State",
          summary: "Explain how and why government regulates business and protects intellectual property.",
          minutes: 40,
          notes: `## Why government regulates business
- to **protect consumers** from harmful goods and unfair practices
- to **protect workers** — wages, safety, conditions
- to ensure **fair competition** and prevent monopoly abuse
- to protect the **environment** and public health
- to raise **revenue** through taxes and fees
- to protect **infant industries** and local enterprise
- to promote **economic development** and direct investment into priority areas
- to protect investors and creditors
- to maintain **standards** and national security

## Methods of regulation
- **legislation** — laws on companies, consumer protection, labour, the environment
- **registration and licensing** — permission to operate
- **taxation** and tariffs; **subsidies** and incentives
- **price control**; import and export controls
- **regulatory agencies** that inspect and enforce
- **nationalisation** or direct participation
- monetary and fiscal policy

## Registration of businesses
Handled by the **Corporate Affairs Commission (CAC)** under the **Companies and Allied Matters Act**.
### Business names
A sole trader or partnership trading under a name other than the owners' true names must **register the business name**. Registration requires the proposed name, the nature and address of the business and particulars of the owners; a **certificate of registration** is issued and must be displayed.
### Companies
Registration with the memorandum and articles of association and other documents gives **incorporation** — a separate legal personality and limited liability — evidenced by the **certificate of incorporation**.
### Incorporated trustees
For clubs, churches, charities and associations.
### Benefits of registration
legal recognition; protection of the name; ability to open bank accounts, obtain loans and bid for contracts; public confidence.

## Intellectual property
Legal rights over the products of the mind.
| Right | Protects | Notes |
|---|---|---|
| **patent** | a new **invention** or process | gives the inventor the **exclusive right** to make, use and sell it for a limited period (20 years); the invention must be new and industrially applicable |
| **trade mark** | a distinctive **name, word, symbol or logo** identifying a trader's goods | registered for 7 years and renewable; prevents others from passing off their goods |
| **copyright** | **literary, musical and artistic works**, films, sound recordings, broadcasts, software | arises automatically on creation; lasts for the author's life plus 70 years for literary, musical and artistic works |
| **industrial design** | the shape or appearance of a product | registered for a limited period |
- patents, trade marks and designs are registered at the **Trademarks, Patents and Designs Registry** of the federal trade ministry
- copyright is administered by the **Nigerian Copyright Commission**
- unauthorised copying is **piracy**; using another's mark is **infringement** or **passing off**

### Importance
rewards creativity and research; protects consumers from imitation goods; lets owners earn income through **licences** and royalties; attracts investment.

## Regulatory agencies in Nigeria
| Agency | Role |
|---|---|
| **Corporate Affairs Commission** | registers companies and business names |
| **Standards Organisation of Nigeria** | product quality standards |
| **NAFDAC** | food, drugs, cosmetics and chemicals |
| **Federal Competition and Consumer Protection Commission** | consumer rights; fair competition |
| **Central Bank of Nigeria** | banks and other financial institutions |
| **Securities and Exchange Commission** | the capital market |
| **National Insurance Commission** | insurance companies |
| **Nigerian Communications Commission** | telecommunications |
| **Nigeria Customs Service** | imports, exports and duties |
| **Federal Inland Revenue Service** | federal taxes |
| **National Environmental Standards and Regulations Enforcement Agency** | the environment |
| **Nigerian Investment Promotion Commission** | investment |
| Ministry of Labour; factories inspectorate | labour and safety |

## Taxes on business
- **companies income tax** — on company profits
- **personal income tax** — on sole traders, partners and employees (PAYE)
- **value added tax (VAT)** — on goods and services, collected from customers
- **customs and excise duties**
- **petroleum profits tax**; capital gains tax; education tax; stamp duties
- state and local levies — premises, signage and business permits
A business needs a **tax identification number** and must file returns; evasion is an offence.

## Licences
Certain trades need licences — banking, insurance, pharmacy, broadcasting, liquor, import of restricted goods.

## Effects of regulation
- **benefits**: safer products; fair dealing; orderly markets; public revenue
- **costs**: paperwork and delay; cost of compliance; multiple taxes; scope for corruption

## Self-regulation
Trade associations and professional bodies set codes of conduct for their members.`,
          examples: `**Example 1.** Which body registers companies in Nigeria? *Answer:* The **Corporate Affairs Commission**.

**Example 2.** Distinguish a patent from a trade mark. *Answer:* A **patent** protects an **invention**; a **trade mark** protects a **name or symbol** identifying goods.

**Example 3.** Give three reasons for government regulation of business. *Answer:* To **protect consumers**, ensure **fair competition** and raise **revenue**.`,
        },
        questions: [
          ["E", "The exclusive legal right granted to an inventor over a new invention is", "a patent", "a trade mark", "a copyright", "a franchise", "It lasts for a limited period."],
          ["E", "A distinctive name or symbol registered to identify the goods of a particular trader is", "a trade mark", "a patent", "a copyright", "a prospectus", "Others may not use it on similar goods."],
          ["E", "The legal protection given to authors, musicians and artists over their works is", "copyright", "a patent", "a quota", "a debenture", "It arises when the work is created."],
          ["M", "A sole trader who trades under a name different from his own must", "register the business name", "form a public company", "obtain a patent", "issue a prospectus", "Registration is done with the Corporate Affairs Commission."],
          ["M", "One reason why government regulates business is to", "protect consumers from harmful products", "increase monopoly power", "abolish all taxes", "discourage production", "Standards and safety are enforced."],
          ["M", "The agency responsible for collecting federal taxes from companies is the", "Federal Inland Revenue Service", "Corporate Affairs Commission", "Standards Organisation of Nigeria", "Nigerian Copyright Commission", "It collects companies income tax and VAT."],
          ["M", "The unauthorised copying and sale of books, music or films is known as", "piracy", "franchising", "dumping", "hoarding", "It infringes the owner's copyright."],
          ["H", "Copyright in a literary work normally lasts for", "the life of the author plus seventy years", "seven years only", "twenty years from registration", "one year, renewable monthly", "After that the work passes into the public domain."],
          ["H", "The body that regulates insurance companies in Nigeria is the", "National Insurance Commission", "Securities and Exchange Commission", "Nigerian Communications Commission", "Nigeria Customs Service", "It licenses and supervises insurers."],
          ["H", "A benefit of registering a business name is that", "the name is legally recognised and protected", "the owner gains limited liability automatically", "no tax is payable", "the business becomes a public corporation", "It also helps in opening bank accounts and winning contracts."],
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
        title: "Nationalisation, indigenisation, privatisation and commercialisation",
        subtopics: ["Nationalisation", "Indigenisation", "Privatisation and commercialisation", "Deregulation and their effects on business"],
        objectives: ["Explain nationalisation with its reasons, merits and demerits", "Explain indigenisation and its objectives in Nigeria", "Distinguish privatisation from commercialisation", "Explain deregulation and assess these policies"],
        lesson: {
          title: "Who Should Own Business?",
          summary: "Explain the policies of nationalisation, indigenisation, privatisation and commercialisation.",
          minutes: 40,
          notes: `## Nationalisation
The **takeover by the government of the ownership and control of privately owned enterprises**, usually with compensation to the former owners.
### Reasons
- to control **key (strategic) industries** — power, railways, steel, oil
- to prevent **private monopoly** and exploitation
- to provide **essential services** at low prices, even where unprofitable
- to save jobs in a failing industry
- to use profits for the public good
- to reduce foreign domination of the economy
- for national security and planning
### Advantages
essential services for all; large capital for development; no exploitation; co-ordinated planning; profits accrue to the nation.
### Disadvantages
inefficiency and waste; political interference; bureaucracy; losses met by taxpayers; lack of competition and innovation; corruption.

## Indigenisation
A policy of **transferring the ownership and control of businesses from foreigners to the citizens (indigenes) of a country**.
In Nigeria it was carried out by the **Nigerian Enterprises Promotion Decrees of 1972 and 1977**, which grouped enterprises into schedules:
- some **reserved exclusively for Nigerians** — small-scale and simple businesses such as retail trade, bakeries, road haulage and laundries
- others in which Nigerians must hold **at least 60%** (and, in a third group, 40%) of the equity
The **Nigerian Enterprises Promotion Board** supervised the scheme. The policy was later relaxed, and the Nigerian Investment Promotion Commission Act of 1995 opened most sectors to foreign investors.
### Objectives
- to give Nigerians **greater participation in and control of** the economy
- to reduce **foreign domination**
- to keep profits within the country
- to develop **local entrepreneurs and managers**
- to encourage foreign investors into more complex, capital-intensive industries
- to promote local technology and employment
### Problems
shortage of **capital** and managerial skill among indigenes; **fronting** — Nigerians acting as cover for foreign owners; shares concentrated in the hands of a few wealthy people; discouragement of foreign investment; inefficiency after takeover.

## Privatisation
The **transfer of ownership and control of government-owned enterprises to private individuals and organisations**, by selling shares or assets.
In Nigeria the **Technical Committee on Privatisation and Commercialisation (1988)** was succeeded by the **Bureau of Public Enterprises (BPE)** in **1999**, under the National Council on Privatisation.
### Reasons
- public enterprises were **inefficient and loss-making**
- to **reduce the burden** on government funds
- to raise **revenue** from the sale
- to promote **competition** and efficiency
- to **widen share ownership**
- to attract private and foreign investment
- to reduce corruption and political interference
### Advantages
greater efficiency and better service; revenue to government; less waste; competition and innovation; development of the capital market.
### Disadvantages
**job losses**; **higher prices**; public assets may go to a few rich people or foreigners; private monopolies; neglect of unprofitable but essential services.

## Commercialisation
The **reorganisation of a government enterprise to operate on commercial (profit-making) lines without government subsidy, while the government retains ownership**.
- **full commercialisation** — the enterprise must be profitable and raise its own capital
- **partial commercialisation** — it covers its running costs but may receive government grants for capital projects
| Privatisation | Commercialisation |
|---|---|
| **ownership is transferred** to private hands | **ownership stays** with government |
| government control ends or is reduced | government remains the owner |
| aims at efficiency through private ownership | aims at efficiency through profit orientation |

## Deregulation
The **removal of government controls and restrictions** on an industry so that market forces operate — in banking, telecommunications, aviation, broadcasting and the downstream petroleum sector. It brings competition, wider choice and investment, but prices may rise and weak firms may collapse.

## Public–private partnership
Government and private firms share the financing and operation of projects — roads, ports, power — under concessions and "build–operate–transfer" arrangements.

## Effects on commerce
These policies change who owns and controls enterprises, the degree of competition, prices, quality of service, employment and the opportunities open to local business people.`,
          examples: `**Example 1.** Define indigenisation. *Answer:* The **transfer of ownership and control of businesses from foreigners to citizens**.

**Example 2.** Distinguish privatisation from commercialisation. *Answer:* In **privatisation** ownership **passes to private hands**; in **commercialisation** the government **keeps ownership** but the enterprise must run profitably.

**Example 3.** Give two reasons for nationalisation. *Answer:* To **control strategic industries** and **prevent private monopoly**.`,
        },
        questions: [
          ["E", "The takeover of privately owned enterprises by the government is", "nationalisation", "privatisation", "indigenisation", "commercialisation", "Ownership passes to the state."],
          ["E", "The transfer of ownership of businesses from foreigners to the citizens of a country is", "indigenisation", "nationalisation", "deregulation", "liquidation", "Nigeria carried it out by decrees in 1972 and 1977."],
          ["E", "The sale of government-owned enterprises to private individuals and firms is", "privatisation", "nationalisation", "indigenisation", "amalgamation", "It reduces the role of government in business."],
          ["M", "Reorganising a public enterprise to operate profitably without subsidy, while government retains ownership, is", "commercialisation", "privatisation", "nationalisation", "indigenisation", "Ownership does not change."],
          ["M", "One objective of the indigenisation policy in Nigeria was to", "increase Nigerian participation in and control of the economy", "hand all businesses to foreigners", "abolish private enterprise", "close the stock exchange", "It aimed to reduce foreign domination."],
          ["M", "The agency responsible for the privatisation of public enterprises in Nigeria is the", "Bureau of Public Enterprises", "Corporate Affairs Commission", "Nigerian Export Promotion Council", "Standards Organisation of Nigeria", "It was established in 1999."],
          ["M", "A reason for nationalising an industry is to", "prevent private monopoly of an essential service", "increase the profits of private owners", "encourage foreign domination", "reduce government revenue", "Key services are placed under public control."],
          ["H", "A problem that arose during indigenisation in Nigeria was 'fronting', which means", "Nigerians acting as cover for foreign owners", "foreigners buying government shares openly", "workers going on strike", "banks refusing deposits", "The real control remained with foreigners."],
          ["H", "A likely disadvantage of privatisation is", "loss of jobs and higher prices", "greater political interference", "more subsidies from government", "less competition in all cases", "New owners cut costs and charge commercial prices."],
          ["H", "The removal of government controls from an industry so that market forces determine prices and entry is", "deregulation", "nationalisation", "rationing", "indigenisation", "Telecommunications and banking have been treated this way."],
        ],
      },
      {
        week: 2,
        title: "Economic groupings in West Africa",
        subtopics: ["Meaning and aims of economic integration", "The Economic Community of West African States", "The Niger Basin Authority and the Lake Chad Basin Commission", "Benefits and obstacles"],
        objectives: ["Explain economic integration and its aims", "Describe the objectives, organs and achievements of ECOWAS", "Describe the Niger Basin Authority and the Lake Chad Basin Commission", "Assess the benefits of and obstacles to economic groupings in West Africa"],
        lesson: {
          title: "Regional Co-operation",
          summary: "Describe the economic groupings of West Africa and their importance to commerce.",
          minutes: 40,
          notes: `## Economic integration
The **coming together of countries in a region to co-operate in economic matters** — removing barriers to trade and movement among themselves and co-ordinating policies.
### Forms
- **free trade area** — no tariffs among members; each keeps its own tariffs against outsiders
- **customs union** — free trade plus a **common external tariff**
- **common market** — a customs union plus **free movement of labour and capital**
- **economic union** — a common market plus common economic policies and, often, a single currency

### Aims
a **wider market**; more trade among members; larger-scale production; joint projects; stronger bargaining power; faster development; peace and unity.

## The Economic Community of West African States (ECOWAS)
Established by the **Treaty of Lagos on 28 May 1975**; headquarters in **Abuja**. It was promoted mainly by Nigeria and Togo. Fifteen states were members for most of its history: Benin, Burkina Faso, Cape Verde, Côte d'Ivoire, The Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Niger, Nigeria, Senegal, Sierra Leone and Togo (Mauritania left in 2000; Mali, Burkina Faso and Niger announced their withdrawal in 2024).

### Objectives
- to eliminate **customs duties** and other barriers to trade among members
- to establish a **common external tariff** and commercial policy
- to ensure the **free movement of persons, goods, services and capital**
- to harmonise agricultural, industrial, transport, communication, energy and monetary policies
- to establish a fund for co-operation, compensation and development
- to promote joint development projects
- to raise the standard of living of the people and maintain economic stability
- eventually to create a single currency and an economic union

### Organs
the **Authority of Heads of State and Government** (the supreme body); the **Council of Ministers**; the **Commission** (formerly the Executive Secretariat); the **Community Parliament**; the **Community Court of Justice**; the **ECOWAS Bank for Investment and Development** in Lomé; specialised technical commissions.

### Achievements
- **visa-free movement** of citizens for up to 90 days; the ECOWAS passport and "brown card" motor insurance
- the trade liberalisation scheme; a common external tariff
- **ECOMOG** — the peace-keeping force used in Liberia and Sierra Leone
- regional roads (the trans-West African highways), the **West African Gas Pipeline** and the power pool
- co-operation in health, agriculture, education and telecommunications

## The Niger Basin Authority (NBA)
Formed in **1980** from the **River Niger Commission (1964)**; headquarters in **Niamey**, Niger. Members: Benin, Burkina Faso, Cameroon, Chad, Côte d'Ivoire, Guinea, Mali, Niger and Nigeria — the countries of the Niger basin.
### Objectives
- to promote co-operation in developing the **resources of the River Niger basin**
- to co-ordinate national plans for **navigation**, **irrigation**, **hydro-electric power**, fishing and flood control
- to collect and share hydrological data
- to prevent pollution and manage the environment of the basin
- to ensure fair use of the river's water by all members

## The Lake Chad Basin Commission (LCBC)
Established in **1964** by **Cameroon, Chad, Niger and Nigeria** — the countries bordering the lake; headquarters in **N'Djamena**, Chad. (The Central African Republic and Libya joined later.)
### Objectives
- to regulate and control the use of the **water and other resources** of the Lake Chad basin
- to co-ordinate projects in **irrigation, fishing, livestock** and agriculture
- to promote co-operation and settle disputes among members
- to combat the shrinking of the lake and conserve the environment
- to promote regional security

## Other groupings
the **Mano River Union** (1973; Liberia, Sierra Leone, Guinea and Côte d'Ivoire); the West African Economic and Monetary Union of French-speaking states, sharing the CFA franc; the **African Union**; the **African Continental Free Trade Area**.

## Benefits to commerce
- a **larger market** for goods and services
- **specialisation** and economies of scale
- more trade and investment; lower prices
- free movement of traders and workers
- shared infrastructure — roads, power, telecommunications
- stronger voice in world trade

## Obstacles
- **different currencies** and exchange controls
- **language barriers** — English, French and Portuguese
- members produce **similar primary products**
- **political instability**, coups and insecurity
- poor transport and communication links
- **non-payment of dues**; lack of political will
- fear of domination by larger members
- continued ties with former colonial powers; membership of rival groupings
- **smuggling** and harassment at borders
- differences in levels of development`,
          examples: `**Example 1.** When and where was ECOWAS founded? *Answer:* On **28 May 1975**, by the **Treaty of Lagos**.

**Example 2.** Name the founding members of the Lake Chad Basin Commission. *Answer:* **Cameroon, Chad, Niger and Nigeria**.

**Example 3.** State two obstacles to economic integration in West Africa. *Answer:* **Different currencies** and **language barriers**.`,
        },
        questions: [
          ["E", "ECOWAS was established by the Treaty of Lagos in", "1975", "1964", "1980", "1991", "The treaty was signed on 28 May."],
          ["E", "The headquarters of ECOWAS is in", "Abuja", "Lomé", "Niamey", "Accra", "It is in Nigeria."],
          ["E", "The headquarters of the Lake Chad Basin Commission is in", "N'Djamena", "Abuja", "Niamey", "Yaoundé", "The city is the capital of Chad."],
          ["M", "One of the main objectives of ECOWAS is to", "remove customs duties and trade barriers among members", "create a single political party", "stop the movement of people", "nationalise all industries", "It aims at a common market."],
          ["M", "The Niger Basin Authority has its headquarters in", "Niamey", "Lagos", "Bamako", "Lomé", "It developed from the River Niger Commission."],
          ["M", "The supreme organ of ECOWAS is the", "Authority of Heads of State and Government", "Council of Ministers", "Community Court of Justice", "ECOWAS Commission", "It takes the final decisions."],
          ["M", "The Lake Chad Basin Commission was formed mainly to", "co-ordinate the use of the water and resources of the lake basin", "control trade in crude oil", "issue a common currency", "build seaports", "It covers irrigation, fishing and livestock."],
          ["H", "A grouping in which members remove tariffs among themselves and adopt a common external tariff is", "a customs union", "a free trade area", "a cartel", "a holding company", "A free trade area has no common external tariff."],
          ["H", "A major obstacle to trade among ECOWAS countries is that they", "use different currencies and produce similar goods", "have a single language", "share one government", "have excellent road and rail links", "Payments are difficult and there is little to exchange."],
          ["H", "The peace-keeping force established by ECOWAS and deployed in Liberia and Sierra Leone was", "ECOMOG", "NATO", "OPEC", "UNCTAD", "It was the community's ceasefire monitoring group."],
        ],
      },
      {
        week: 3,
        title: "Commodity exchange",
        subtopics: ["Meaning and features of a commodity exchange", "Types of commodities and methods of trading", "Benefits of commodity exchanges", "The commodity exchange in Nigeria and its constraints"],
        objectives: ["Explain the meaning and features of a commodity exchange", "Describe the commodities traded and the methods of trading", "State the benefits of commodity exchanges", "Describe the commodity exchange in Nigeria and the constraints it faces"],
        lesson: {
          title: "Markets for Commodities",
          summary: "Explain how commodity exchanges work and their role in commerce.",
          minutes: 40,
          notes: `## Commodity exchange
An **organised market where standardised commodities — agricultural produce, metals, energy products — are bought and sold according to set rules**, usually through brokers.
World examples: the Chicago Board of Trade; the London Metal Exchange. In Nigeria: the **Nigeria Commodity Exchange** in Abuja (which began as the Abuja Securities and Commodity Exchange) and private exchanges such as AFEX and the Lagos Commodities and Futures Exchange.

## Features
- a **central, organised** market with rules and a regulator (in Nigeria, the Securities and Exchange Commission)
- dealing is by **members (brokers and dealers)** on behalf of producers, merchants and manufacturers
- commodities are **graded** and **standardised** — so they can be sold **by description or sample** without being present
- contracts are for **standard quantities and qualities**
- prices are fixed by **demand and supply**, openly
- goods are stored in **approved warehouses**; ownership passes by **warehouse receipts**
- trading is by **open outcry** or electronically
- a **clearing house** guarantees that contracts are honoured

## Qualities of commodities suitable for exchange trading
- **durable** — able to be stored
- capable of being **graded** into uniform qualities
- produced and demanded in **large quantities**
- free from control by a single seller or buyer
- with prices that fluctuate

## Types of commodities
- **agricultural (soft) commodities**: cocoa, coffee, cotton, rubber, palm produce, sugar, maize, sorghum, soya beans, sesame, cashew, ginger, groundnuts, rice
- **solid minerals and metals (hard commodities)**: gold, tin, copper, zinc, lead, iron ore, coal
- **energy**: crude oil, natural gas
- currencies and financial futures

## Methods of trading
### Spot (cash, actuals) trading
Goods are bought for **immediate delivery and payment** at the current (**spot**) price.
### Forward and futures trading
A contract to buy or sell a **standard quantity at an agreed price for delivery at a future date**.
- a **forward** contract is a private arrangement between two parties
- a **futures** contract is standardised and traded on the exchange; most are closed out before delivery
### Hedging
Using futures to **protect against price changes**: a farmer who sells futures **fixes the price** of his crop in advance; a manufacturer who buys futures fixes the cost of his raw material. Loss in one market is offset by gain in the other.
### Speculation
Dealers who buy and sell hoping to profit from price changes; they take on the risk that hedgers wish to avoid and add liquidity.
### Other methods of sale
- by **auction** — to the highest bidder (tea, wool)
- by **private treaty** — negotiation between buyer and seller
- by **tender**
- by **grade or description** (wheat, cotton) or by **sample**
- **options** — the right, but not the obligation, to buy or sell at a set price

## Benefits
- a **ready market** for producers
- **fair, transparent prices** discovered openly
- **price stability** and protection against fluctuation through hedging
- **standard grades** and quality assurance
- farmers gain access to **finance** — warehouse receipts can be pledged for loans
- reduces the number of exploitative **middlemen**
- encourages storage and reduces post-harvest losses
- provides **market information**
- promotes exports and earns foreign exchange
- supports agro-industries with steady supplies
- employment for brokers, graders and warehouse operators

## Commodity exchange and stock exchange compared
| Commodity exchange | Stock exchange |
|---|---|
| deals in **goods** (produce, metals) | deals in **securities** (shares, bonds) |
| spot and futures contracts | mainly existing securities |
| goods are graded | securities are quoted |

## Constraints in Nigeria
- **poor grading and standardisation** of produce
- inadequate **storage** and warehouse facilities
- **bad roads** and high transport costs
- small-scale, scattered farmers with low and irregular output
- **low awareness** and illiteracy among producers
- shortage of capital and trained personnel
- unstable government policies; history of marketing boards
- poor communication and market information
- insecurity in producing areas
- weak legal framework for warehouse receipts

## Earlier arrangements
The **commodity (marketing) boards** — for cocoa, groundnuts, palm produce and cotton — bought export crops from farmers at fixed prices until they were abolished in **1986**; produce is now sold through licensed buying agents, co-operatives and the exchanges.

## Ways forward
grading centres and accredited warehouses; farmer co-operatives; better rural roads; public education; reliable price information; supportive laws and regulation.`,
          examples: `**Example 1.** Give three commodities traded on commodity exchanges. *Answer:* **Cocoa, cotton and tin** (also crude oil, maize, gold).

**Example 2.** Distinguish spot from futures trading. *Answer:* **Spot** trading is for **immediate delivery**; **futures** trading fixes a price now for **delivery at a later date**.

**Example 3.** What is hedging? *Answer:* Using futures contracts to **protect against changes in price**.`,
        },
        questions: [
          ["E", "An organised market where standardised agricultural produce and minerals are bought and sold is a", "commodity exchange", "stock exchange", "money market", "bureau de change", "Goods are graded and traded through brokers."],
          ["E", "Which of the following is an agricultural commodity traded on a commodity exchange?", "cocoa", "tin", "gold", "crude oil", "The others are minerals or energy products."],
          ["E", "Buying a commodity for immediate delivery and payment is known as", "spot trading", "futures trading", "hedging", "underwriting", "The price is the current market price."],
          ["M", "A contract to buy or sell a standard quantity of a commodity at an agreed price for delivery at a later date is", "a futures contract", "a spot contract", "a bill of lading", "a hire purchase agreement", "Most are closed out before delivery."],
          ["M", "Commodities suitable for trading on an exchange must be", "durable and capable of being graded", "perishable within a day", "unique and impossible to describe", "produced by only one seller", "Standard grades allow sale by description."],
          ["M", "The practice of using futures contracts to protect against changes in price is", "hedging", "hoarding", "dumping", "fronting", "A loss in one market is offset by a gain in the other."],
          ["M", "A benefit of a commodity exchange to farmers is", "a ready market at fair, transparent prices", "the abolition of grading", "the removal of all storage", "higher transport costs", "Prices are discovered openly by demand and supply."],
          ["H", "A commodity exchange differs from a stock exchange in that it deals in", "goods such as produce and metals", "shares and debentures", "government bonds only", "treasury bills", "The stock exchange deals in securities."],
          ["H", "A major constraint on commodity trading in Nigeria is", "poor grading and inadequate storage facilities", "excessive standardisation of produce", "too many accredited warehouses", "a surplus of trained brokers", "Produce must be of uniform quality and safely stored."],
          ["H", "The sale of commodities such as tea to the highest bidder at a public sale is sale by", "auction", "private treaty", "tender", "description only", "Buyers compete by bidding."],
        ],
      },
      {
        week: 4,
        title: "E-commerce and the computer in business",
        subtopics: ["The computer and its uses in business", "Meaning and types of e-commerce", "Electronic payment systems", "Benefits, challenges and security of e-commerce"],
        objectives: ["Describe the computer and its uses in business", "Explain e-commerce and its types", "Describe electronic payment systems", "Assess the benefits and challenges of e-commerce and how transactions are secured"],
        lesson: {
          title: "Business in the Digital Age",
          summary: "Explain how computers and the internet are used in commerce.",
          minutes: 40,
          notes: `## The computer
An **electronic machine that accepts data (input), processes it according to instructions, stores it and produces information (output)**.
- **hardware** — the physical parts: input devices (keyboard, mouse, scanner, barcode reader), the central processing unit, output devices (monitor, printer), storage devices
- **software** — the programs: system software (the operating system) and application software (word processors, spreadsheets, databases, accounting and stock-control packages)

## Uses of computers in business
- **word processing** — letters, reports, invoices
- **accounting** — ledgers, payroll, final accounts
- **stock control** — recording stock and re-ordering automatically
- **databases** — records of customers, suppliers and staff
- **spreadsheets** — budgets and analysis
- **communication** — e-mail, websites, video-conferencing
- **design and production** — computer-aided design; automated machines
- **banking** — ATMs, transfers
- **sales** — point-of-sale terminals and barcode scanning
- **research** and marketing analysis

### Advantages
speed; accuracy; large storage; quick retrieval; less paperwork; lower clerical cost; better decisions.
### Disadvantages
high cost; need for skilled staff and electricity; breakdowns and loss of data; viruses and fraud; loss of some jobs.

## E-commerce (electronic commerce)
The **buying and selling of goods and services through the internet and other electronic networks**.
### Types
- **business-to-business (B2B)** — firms selling to other firms: a manufacturer ordering raw materials online
- **business-to-consumer (B2C)** — firms selling to the public: online retail stores
- **consumer-to-consumer (C2C)** — individuals selling to one another through online marketplaces
- **consumer-to-business (C2B)** — individuals offering goods or services to firms
- **business-to-government (B2G)** — online tenders and tax payments
- **m-commerce** — trading through mobile phones

### How online buying works
the seller displays goods on a website or application → the buyer selects items into a "cart" → pays electronically or on delivery → the goods are delivered by courier → after-sales support.

### Related services
e-banking; e-payment; online advertising and social-media marketing; e-ticketing; e-learning; ride-hailing and delivery applications.

## Electronic payment systems
- **debit and credit cards**
- **automated teller machines (ATMs)**
- **point-of-sale (POS) terminals**
- **internet banking** and **mobile banking** (apps and USSD codes)
- **electronic funds transfer** between accounts and banks
- **mobile money** wallets; payment gateways
- **quick-response (QR) code** payments
These support the central bank's **cashless policy**.

## Benefits of e-commerce
### To businesses
- a **wider market** — national and international
- **lower costs** — no need for many shops and staff
- open **24 hours** a day
- quick processing of orders and payments
- direct contact with customers; data for marketing
- easy for small firms to start
### To consumers
- **convenience** — shopping from anywhere at any time
- **wider choice** and easy **comparison of prices**
- often lower prices; home delivery
- access to product information and reviews
### To the economy
new jobs — delivery, technology, digital marketing; growth of small businesses; efficiency; more trade.

## Challenges
- **cyber-crime** — fraud, hacking, identity theft, fake websites
- **lack of trust** — buyers cannot inspect goods; fear of non-delivery
- poor and costly **internet access**; unreliable **electricity**
- weak **delivery** systems and poor addressing
- low computer literacy
- failed transactions; delays in refunds
- inadequate laws and enforcement
- loss of personal contact; job losses in traditional retailing

## Security measures
- **passwords and PINs**, kept secret
- **one-time passwords (OTP)** and two-factor authentication
- **encryption** — secure websites (https)
- **firewalls** and anti-virus software
- biometric identification; the bank verification number
- buying only from trusted sites; checking statements regularly
- cybercrime laws and consumer-protection rules

## The internet in business
websites and online stores; e-mail; search engines for information; social media for marketing and customer care; cloud services for storing records; online meetings.

## E-commerce and traditional commerce compared
| Traditional | E-commerce |
|---|---|
| physical shop | website or application |
| limited opening hours and area | always open; worldwide reach |
| goods inspected before buying | goods seen only in pictures |
| payment in cash or by card in person | electronic payment or pay on delivery |`,
          examples: `**Example 1.** Define e-commerce. *Answer:* **Buying and selling through the internet** and other electronic networks.

**Example 2.** What does B2C stand for? *Answer:* **Business-to-consumer** — firms selling to the public online.

**Example 3.** State two challenges of e-commerce in Nigeria. *Answer:* **Cyber-fraud** and **poor internet and delivery services**.`,
        },
        questions: [
          ["E", "The buying and selling of goods and services through the internet is", "e-commerce", "barter", "hawking", "hire purchase", "It uses electronic networks."],
          ["E", "The physical parts of a computer are called", "hardware", "software", "data", "programs", "The monitor and keyboard are examples."],
          ["E", "A card-reading device used by traders to accept payment from customers' bank cards is a", "point-of-sale terminal", "franking machine", "typewriter", "cash register roll", "It is commonly called a POS."],
          ["M", "An online shop selling directly to members of the public is engaged in", "business-to-consumer e-commerce", "business-to-business e-commerce", "consumer-to-consumer e-commerce", "barter trade", "It is abbreviated B2C."],
          ["M", "A use of the computer in business is", "stock control and record keeping", "transporting goods by road", "insuring cargo", "grading cocoa by hand", "Records are updated quickly and accurately."],
          ["M", "An advantage of e-commerce to the consumer is", "the convenience of shopping at any time from anywhere", "the certainty of inspecting goods first", "freedom from all risk of fraud", "the need to visit many shops", "Online stores are always open."],
          ["M", "A code sent to a customer's phone to confirm an online payment is", "a one-time password", "a barcode", "a cheque number", "a trade mark", "It adds a second layer of security."],
          ["H", "A manufacturer ordering raw materials from a supplier through an online platform is an example of", "business-to-business e-commerce", "business-to-consumer e-commerce", "consumer-to-consumer e-commerce", "mail-order trading by post", "Both parties are firms."],
          ["H", "A major challenge to the growth of e-commerce in Nigeria is", "cyber-fraud and lack of trust", "too many delivery addresses", "an excess of electricity", "the low price of data", "Buyers fear losing money or receiving wrong goods."],
          ["H", "Coding information so that only authorised parties can read it during online transactions is", "encryption", "branding", "digitising a map", "franking", "Secure websites use it to protect card details."],
        ],
      },
      {
        week: 5,
        title: "Entrepreneurship and small business",
        subtopics: ["Meaning and importance of entrepreneurship", "Qualities of an entrepreneur", "Starting a business: the business plan and sources of finance", "Problems of small businesses and government support"],
        objectives: ["Explain entrepreneurship and its importance", "State the qualities of a successful entrepreneur", "Outline the steps in starting a business, the business plan and sources of finance", "Explain the problems of small businesses and the support available"],
        lesson: {
          title: "Starting and Running a Business",
          summary: "Explain entrepreneurship, how a small business is started and the problems it faces.",
          minutes: 40,
          notes: `## Entrepreneurship
The **process of identifying a business opportunity, gathering resources and starting and running an enterprise, taking the risks, in the hope of profit**. An **entrepreneur** is the person who does this.

## Importance
- creates **employment** — for the owner and others
- produces goods and services; raises the standard of living
- uses **local resources**
- promotes **innovation** and competition
- generates income and **tax revenue**
- reduces poverty and rural–urban migration
- develops skills and self-reliance
- diversifies the economy; earns foreign exchange through exports

## Qualities of a successful entrepreneur
- **initiative** and creativity
- willingness to take **calculated risks**
- **determination and perseverance**
- **self-confidence**; independence
- hard work and discipline
- **vision** and goal-setting
- good **management** and decision-making
- ability to spot opportunities
- honesty and good human relations
- knowledge of the business; readiness to learn

## Small- and medium-scale enterprises (SMEs)
Businesses with **small capital, few employees and a limited market**, usually owned and managed by one person or a few.
### Features
low capital; simple organisation; labour-intensive; local market; flexible; owner-managed.
### Importance
they employ most of the labour force; supply large firms; train entrepreneurs; spread development to rural areas; need little foreign exchange.

## Steps in starting a business
1. identify a **business idea** or opportunity — a need not yet met
2. carry out a **feasibility study** and **market research** — is it workable and profitable?
3. choose the **form of business** — sole proprietorship, partnership or company
4. prepare a **business plan**
5. raise **capital**
6. choose a **location**
7. **register** the business and obtain licences and tax numbers
8. acquire premises, equipment and stock; recruit staff
9. start operations; keep records; market the product

## The business plan
A **written document describing the business, its objectives and how they will be achieved**.
### Contents
- **executive summary**
- description of the business and its **products or services**
- **market analysis** — customers, competitors
- **marketing plan** — price, promotion, distribution
- **operations plan** — location, equipment, suppliers
- **management and staffing**
- **financial plan** — capital required, sources, projected sales, costs, profit and cash flow
### Uses
guides the owner; helps to **obtain loans** and attract investors; measures progress; reveals problems in advance.

## Sources of finance
- **personal savings**
- loans and gifts from **family and friends**
- **retained (ploughed-back) profit**
- **trade credit** from suppliers
- **bank loans and overdrafts**
- **microfinance banks**
- **co-operative** thrift and credit societies; esusu contributions
- **hire purchase and leasing** of equipment
- **government schemes** and development banks — the **Bank of Industry**, intervention funds
- venture capital, angel investors and grants
- partners or sale of shares

## Problems of small businesses
- **inadequate capital** and difficulty in obtaining loans — lack of collateral, high interest
- poor **power supply** and infrastructure
- **poor management** and record keeping
- mixing business money with personal money
- **stiff competition** from large firms and imports
- multiple **taxes and levies**
- shortage of skilled labour
- limited market; inflation; insecurity
- lack of continuity when the owner dies
- inability to enjoy economies of scale

## Causes of business failure
insufficient capital; poor planning; bad location; lack of experience; over-trading; too much credit; excessive drawings; poor customer service; failure to adapt.

## Government and institutional support
- the **Small and Medium Enterprises Development Agency of Nigeria (SMEDAN)**, set up in **2003** — training, advice and promotion of small businesses
- the **Bank of Industry**, the **Bank of Agriculture**, the Development Bank of Nigeria and microfinance banks — loans
- the **National Directorate of Employment** — skills and start-up support
- the **Industrial Training Fund** — skills training
- intervention funds of the central bank; tax incentives for small companies
- industrial estates, business incubators and export promotion
- entrepreneurship education in schools and youth programmes

## Keeping a small business healthy
keep proper **records**; separate business and personal funds; control credit and stock; know the customers; plough back profit; insure against risks; obey the law; keep learning.`,
          examples: `**Example 1.** Who is an entrepreneur? *Answer:* A person who **starts and runs a business, bearing the risks**, in the hope of profit.

**Example 2.** List four contents of a business plan. *Answer:* **Description of the business, market analysis, marketing plan and financial plan**.

**Example 3.** Give three sources of finance for a small business. *Answer:* **Personal savings, bank loans and trade credit**.`,
        },
        questions: [
          ["E", "A person who starts and runs a business, bearing its risks in the hope of profit, is", "an entrepreneur", "an employee", "a consumer", "an auditor", "He organises the other factors of production."],
          ["E", "A written document describing a proposed business, its objectives and how they will be achieved is a", "business plan", "bill of lading", "balance sheet", "partnership deed", "It guides the owner and helps to raise finance."],
          ["E", "The commonest source of capital for starting a very small business is", "personal savings", "the stock exchange", "debentures", "foreign loans", "The owner uses his own money first."],
          ["M", "A quality of a successful entrepreneur is", "willingness to take calculated risks", "fear of making decisions", "dislike of hard work", "dependence on others for every idea", "Business involves uncertainty."],
          ["M", "A study carried out to find whether a proposed business is workable and profitable is", "a feasibility study", "an audit", "a census", "a stocktaking", "It is done before the business plan is finalised."],
          ["M", "The agency set up in 2003 to promote small and medium enterprises in Nigeria is", "SMEDAN", "NAFDAC", "NIPOST", "NAICOM", "It gives training and advice to small businesses."],
          ["M", "A major problem of small-scale businesses in Nigeria is", "inadequate capital", "excessive capital", "too many skilled managers", "lack of competition", "Loans are hard to obtain without collateral."],
          ["H", "The section of a business plan that shows the capital required, projected sales, costs and cash flow is the", "financial plan", "executive summary", "marketing plan", "operations plan", "Lenders study it closely."],
          ["H", "A common cause of the failure of small businesses is", "mixing business funds with personal spending", "keeping accurate records", "ploughing back profits", "controlling credit to customers", "Excessive drawings drain working capital."],
          ["H", "Small and medium enterprises are important to the economy mainly because they", "create employment and use local resources", "need very large amounts of foreign exchange", "are owned by the government", "produce only for export", "They employ a large share of the labour force."],
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
        title: "Business environment and social responsibility",
        subtopics: ["The business environment", "Stakeholders of a business", "Social responsibility of business", "Business ethics"],
        objectives: ["Describe the internal and external environment of business", "Identify the stakeholders of a business and their interests", "Explain the social responsibilities of business", "Explain business ethics and give examples of unethical practices"],
        lesson: {
          title: "Business and Society",
          summary: "Explain the environment in which business operates and its responsibilities to society.",
          minutes: 40,
          notes: `## The business environment
All the **forces and conditions, inside and outside a business, that affect its operations**.

### Internal environment
Factors **within** the firm, which it can control: owners and management; employees; capital and other resources; organisational structure and culture; policies and objectives.

### External environment
Factors **outside** the firm, which it cannot control but must adapt to.
- **political** — government stability, policies, attitude to business
- **economic** — inflation, interest rates, exchange rates, incomes, taxation, unemployment
- **social and cultural** — population, tastes, education, religion, attitudes
- **technological** — new machines, methods and information technology
- **legal** — laws on companies, labour, consumer protection, the environment
- **environmental (natural)** — climate, resources, pollution
- **competitive** — rival firms, suppliers, customers
- **international** — world prices, trade agreements

### Why the environment matters
It presents **opportunities** and **threats**; firms that watch and adapt survive and grow.

## Stakeholders
Persons and groups with an **interest in the business**.
| Stakeholder | Interest |
|---|---|
| **owners / shareholders** | profit, dividends, growth and safety of their investment |
| **employees** | fair wages, job security, good conditions, training |
| **customers** | quality goods at fair prices; good service |
| **suppliers and creditors** | prompt payment; continued orders |
| **government** | taxes; obedience to law; employment |
| **the community** | jobs; a clean, safe environment; support for local projects |
| **lenders** | repayment with interest |
| competitors | fair competition |

## Social responsibility
The **obligation of a business to act in ways that benefit society at large**, beyond the pursuit of profit and the requirements of the law — **corporate social responsibility (CSR)**.

### To employees
fair pay; safe and healthy working conditions; training; welfare; job security; no discrimination.
### To customers
safe, good-quality products at fair prices; honest advertising and labelling; after-sales service; prompt handling of complaints.
### To owners
fair return on investment; honest accounts; safeguarding assets.
### To suppliers and creditors
prompt payment; fair dealing.
### To government
payment of **taxes**; obedience to laws; support for national policies.
### To the community
- **employment** of local people
- **community projects** — schools, clinics, roads, boreholes, scholarships
- **sponsorship** of sports and culture
- support in times of disaster
### To the environment
controlling **pollution**; proper disposal of waste; conservation of resources; restoring mined or damaged land; reducing emissions.

### Arguments for social responsibility
- a business depends on society and should give back
- improves the firm's **image and goodwill**
- attracts customers, good staff and investors
- prevents conflict with the community and harsher government regulation
- a healthy society is good for long-term profit

### Arguments against
- it reduces profits for the owners
- costs may be passed on in higher prices
- social welfare is the government's duty
- managers may lack the skill for social projects

## Business ethics
The **moral principles and standards that guide behaviour in business** — honesty, fairness, integrity and respect for others.
### Unethical practices
- selling **fake, adulterated or expired** goods
- **short weight** and false measures
- **hoarding** and profiteering
- **false advertising**
- **bribery** and corruption
- tax evasion; smuggling
- exploiting workers; child labour
- pollution and dumping of toxic waste
- insider dealing; falsifying accounts
- breach of contracts and of customers' confidentiality

### Importance of ethics
builds **trust** and reputation; retains customers and staff; avoids legal penalties; supports long-term success.

## Codes of conduct
Rules set by firms, trade associations and professional bodies to guide members' behaviour.

## Sustainable business
Meeting present needs without harming the ability of future generations to meet theirs — balancing profit, people and the planet.`,
          examples: `**Example 1.** Name four factors in the external environment of business. *Answer:* **Political, economic, social and technological** factors.

**Example 2.** State two social responsibilities of a business to its community. *Answer:* **Providing employment** and **supporting community projects**.

**Example 3.** Give two unethical business practices. *Answer:* **Selling expired goods** and **giving bribes**.`,
        },
        questions: [
          ["E", "All the forces inside and outside a firm that affect its operations make up the", "business environment", "trial balance", "marketing mix", "chain of distribution", "It includes political, economic and social factors."],
          ["E", "Persons and groups who have an interest in the activities of a business are its", "stakeholders", "debenture holders only", "auditors", "competitors only", "They include owners, employees and customers."],
          ["E", "The moral principles that guide behaviour in business are known as", "business ethics", "trade discounts", "business risks", "market forces", "They include honesty and fairness."],
          ["M", "Inflation and interest rates are factors in a firm's", "economic environment", "technological environment", "internal environment", "cultural environment", "They affect costs and demand."],
          ["M", "A social responsibility of a business to its customers is to", "supply safe, good-quality products at fair prices", "pay them wages", "pay them dividends", "collect taxes from them for itself", "Customers should not be cheated."],
          ["M", "A social responsibility of a business to the government is", "paying taxes and obeying the law", "paying dividends", "giving trade discounts", "granting credit", "It supports public revenue and order."],
          ["M", "Which of the following is an unethical business practice?", "selling expired goods", "paying suppliers promptly", "labelling products accurately", "training employees", "It endangers consumers."],
          ["H", "The obligation of a business to contribute to the welfare of society beyond making profit is", "corporate social responsibility", "limited liability", "caveat emptor", "the marketing concept", "Community projects and pollution control are examples."],
          ["H", "An argument against social responsibility by business is that it", "reduces the profits available to the owners", "improves the firm's image", "wins the goodwill of the community", "attracts customers", "Critics say social welfare is the government's task."],
          ["H", "Controlling pollution and disposing of waste properly are responsibilities of a business towards", "the environment", "its shareholders only", "its competitors", "its bankers", "They protect the health of the public and future generations."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: trade and business units",
        subtopics: ["Commerce, occupations and production", "Home trade: retail and wholesale", "Foreign trade", "Business units and capital"],
        objectives: ["Recall the scope of commerce, occupations and production", "Recall the functions and types of retailers and wholesalers", "Solve problems on discounts, price quotations and the balance of trade", "Compare business units and calculate capital and turnover"],
        lesson: {
          title: "Revision of Trade and Business Organisation",
          summary: "Revise trade, business units and business calculations for the final examinations.",
          minutes: 40,
          notes: `## 1. Commerce
- **commerce = trade + aids to trade**
- trade: home (wholesale, retail) and foreign (import, export, entrepôt)
- aids: banking, insurance, transport, communication, warehousing, advertising (and tourism)
- functions: bridges the gap between producer and consumer; employment; specialisation

## 2. Occupations and production
- **industry**: extractive, manufacturing, constructive
- **commerce**: trade and aids to trade
- **services**: direct (doctor, teacher) and indirect (commercial)
- production: primary, secondary, tertiary; complete only when goods reach the consumer
- factors and rewards: land — rent; labour — wages; capital — interest; entrepreneur — profit
- division of labour: advantages, disadvantages; limited by the size of the market

## 3. Retail trade
- functions: breaking bulk, variety, nearness, credit, advice, after-sales service
- small-scale: hawkers, kiosks, market stalls, unit shops, mobile shops
- large-scale: **supermarkets** (self-service), **department stores** (many departments, one roof), **multiple shops** (many branches, same goods, central control), mail order, online stores
- trends: self-service, branding, franchising, vending machines, e-commerce

## 4. Wholesale trade
- to manufacturers: bulk buying, prompt payment, storage, risk bearing, market information
- to retailers: breaking bulk, credit, variety, delivery, advice
- channels: producer → wholesaler → retailer → consumer
- elimination: arguments for (higher prices, hoarding) and against (functions must still be performed)
- agents: broker, factor, del credere agent, auctioneer

## 5. Documents and terms
inquiry → quotation → order → invoice → advice note → delivery note → debit or credit note → statement → receipt.
- **trade discount** — off the list price; **cash discount** — for prompt payment, calculated on the net invoice price
- E & O.E.; COD; CWO; carriage paid; carriage forward

## 6. Foreign trade
- reasons: unequal resources, climate, skills, costs
- **balance of trade** = visible exports − visible imports
- barriers: currency, language, distance, tariffs, documents
- protection: tariffs, quotas, embargo, exchange control
- documents: indent, **bill of lading** (receipt, contract, title), consular invoice, certificate of origin, letter of credit, bill of exchange, bill of entry
- prices: loco, FAS, **FOB**, C & F, **CIF = cost + insurance + freight**, landed, franco
- ports authority (facilities) and customs (duties, anti-smuggling); bonded warehouse

## 7. Business units
| Unit | Owners | Liability | Notes |
|---|---|---|---|
| sole proprietorship | 1 | unlimited | easy to form; limited capital |
| partnership | 2–20 | unlimited (general partners) | deed; active, sleeping, nominal partners |
| private company | up to 50 | limited | no public issue of shares |
| public company | no maximum | limited | shares on the stock exchange; published accounts |
| co-operative | members | limited | one member, one vote; dividend on patronage |
| public corporation | government | — | service motive; set up by statute |
- memorandum (external), articles (internal), certificate of incorporation, prospectus
- shares (ordinary, preference) and debentures
- trade associations (same trade) and chambers of commerce (all trades in an area)

## 8. Capital, turnover and profit
- capital owned = assets − liabilities
- **working capital = current assets − current liabilities**
- turnover = net sales
- **rate of turnover = cost of goods sold ÷ average stock**
- gross profit % = gross profit ÷ turnover × 100; net profit % likewise

## 9. Credit
hire purchase — ownership on the last instalment; credit sale — ownership at once; hire purchase price = deposit + instalments.

## Answering commerce questions
Define the key term; list points clearly; give **examples from Nigeria**; show **workings** in calculations; where asked to "distinguish", set out differences side by side.`,
          examples: `**Example 1.** List price ₦60,000; trade discount 15%. Find the net price. *Solution:* 60,000 − 9,000 = **₦51,000**.

**Example 2.** Cost of goods sold ₦360,000; opening stock ₦50,000; closing stock ₦40,000. Find the rate of turnover. *Solution:* average stock ₦45,000; **8 times**.

**Example 3.** State two differences between a private and a public company. *Answer:* A private company has **limited membership** and **cannot offer shares to the public**.`,
        },
        questions: [
          ["E", "The trader who sells goods directly to the final consumer is the", "retailer", "wholesaler", "manufacturer", "importer", "He is the last link in the chain of distribution."],
          ["E", "A business unit owned by at least two persons who share its profits and losses is a", "partnership", "sole proprietorship", "public corporation", "consumers' association", "The maximum is normally twenty."],
          ["E", "Trade between Nigeria and Ghana is an example of", "foreign trade", "home trade", "retail trade", "wholesale trade", "It takes place between two countries."],
          ["M", "Goods with a list price of ₦80,000 are sold subject to a trade discount of 25%. The net price is", "₦60,000", "₦20,000", "₦100,000", "₦55,000", "₦20,000 is deducted."],
          ["M", "The cost of goods sold by a trader is ₦480,000 and the average stock is ₦60,000. The rate of turnover is", "8 times", "6 times", "12 times", "0.125 times", "480,000 ÷ 60,000."],
          ["M", "Goods have an FOB price of ₦1,200,000. Freight is ₦150,000 and insurance ₦30,000. The CIF price is", "₦1,380,000", "₦1,350,000", "₦1,230,000", "₦1,020,000", "Insurance and freight are added."],
          ["M", "The shipping document that serves as a document of title to goods carried by sea is the", "bill of lading", "ship's manifest", "freight note", "certificate of origin", "Its holder is entitled to the goods."],
          ["H", "Goods listed at ₦100,000 carry a trade discount of 10% and a cash discount of 5% for prompt payment. The amount paid by a prompt buyer is", "₦85,500", "₦85,000", "₦90,000", "₦95,000", "5% is taken on the ₦90,000 left after trade discount."],
          ["H", "A trader has stock ₦120,000, debtors ₦80,000 and cash ₦40,000; creditors ₦90,000 and a bank overdraft of ₦30,000. The working capital is", "₦120,000", "₦240,000", "₦150,000", "₦360,000", "Current assets ₦240,000 less current liabilities ₦120,000."],
          ["H", "A country exported goods worth ₦2,400 million and imported goods worth ₦2,900 million. Its balance of trade is", "unfavourable by ₦500 million", "favourable by ₦500 million", "favourable by ₦5,300 million", "in balance", "Imports exceed exports."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: aids to trade",
        subtopics: ["Money, banking and means of payment", "Insurance", "Transport, communication and warehousing", "Advertising, marketing, tourism and the stock exchange"],
        objectives: ["Recall the functions of money and banks and the means of payment", "Apply the principles of insurance in calculations", "Compare transport, communication and warehousing services", "Recall advertising, marketing, tourism and stock exchange terms"],
        lesson: {
          title: "Revision of the Aids to Trade",
          summary: "Revise banking, insurance, transport, communication, warehousing and advertising.",
          minutes: 40,
          notes: `## 1. Money
- barter problems: double coincidence of wants, no measure of value, indivisibility
- functions: medium of exchange, measure of value, store of value, standard of deferred payment
- qualities: acceptability, portability, durability, divisibility, homogeneity, scarcity, stability

## 2. Banking
- **commercial banks**: accept deposits, lend (loans, overdrafts), provide means of payment, agency and foreign-exchange services
- accounts: **current** (cheques, overdraft), **savings** (interest), **fixed deposit** (higher interest)
- loan — fixed sum, interest on the whole; overdraft — interest on the amount overdrawn
- **central bank**: issues currency; banker to government and to banks; lender of last resort; controls credit (bank rate, open market operations, cash ratio, special deposits)
- others: merchant, development, microfinance and mortgage banks; NDIC

## 3. Means of payment
- cheque: drawer, drawee (bank), payee; open and crossed; general and special crossings; post-dated; stale (after six months)
- dishonour: insufficient funds, irregular signature, words and figures differ, stale, stopped
- bank draft, standing order, direct debit, credit transfer, bill of exchange, letter of credit
- electronic: ATM, POS, internet and mobile banking

## 4. Stock exchange
- market for existing securities; functions: ready market, raising capital, price information
- stockbrokers (agents); **bull** (expects a rise), **bear** (expects a fall), **stag** (new issues)
- **yield = nominal value × dividend rate ÷ market price**

## 5. Insurance
- pooling of risks; premium; policy; cover note
- principles: **utmost good faith**, **insurable interest**, **indemnity**, **subrogation**, **contribution**, proximate cause
- **average clause**: compensation = sum insured ÷ value × loss
- over-insurance: only the actual loss is paid
- types: life (whole life, endowment), fire, accident (fidelity guarantee, burglary, employers' liability), marine (hull, cargo, freight; general and particular average), motor (third party, comprehensive)
- non-insurable risks: fashion changes, bad management, gambling

## 6. Transport
- road (flexible, door-to-door); rail (bulky, long distance); water (cheapest, slowest); air (fastest, costliest); pipeline (fluids)
- liners (fixed routes) and tramps (no fixed route); charter party; containerisation
- choice depends on nature of goods, cost, speed, distance, safety

## 7. Communication
- postal: registered post, recorded delivery, poste restante, business reply, courier
- telecommunications: telephone, fax, e-mail, internet
- choice: speed, cost, record, secrecy, distance

## 8. Warehousing
- utility of time; price stability; preparation for sale
- manufacturers', wholesalers', public, private, **bonded** (duty unpaid; customs control), cold stores
- warehouse warrant — a document of title

## 9. Advertising and marketing
- informative, persuasive, competitive, generic, direct
- media: press, radio, television, outdoor, internet; choice by cost, audience, product
- criticisms: higher prices, misleading claims
- marketing mix: product, price, place, promotion; market research; segmentation
- sales promotion: samples, price cuts, gifts, competitions; personal selling; public relations

## 10. Tourism and consumer protection
- domestic and international; benefits: foreign exchange, jobs; problems: insecurity, poor facilities
- consumer rights: safety, information, choice, redress
- agencies: FCCPC, SON, NAFDAC; laws: Sale of Goods, Weights and Measures, Hire Purchase

## Technique
Link each aid to the **problem it solves**: finance (banking), risk (insurance), distance (transport), information (communication), time (warehousing), ignorance (advertising).`,
          examples: `**Example 1.** Goods worth ₦1,200,000 are insured for ₦900,000; loss ₦240,000. Find the compensation. *Solution:* 900 ÷ 1,200 × 240,000 = **₦180,000**.

**Example 2.** A ₦1 share pays 12% and sells at ₦2. Find the yield. *Solution:* 0.12 ÷ 2 = **6%**.

**Example 3.** Which aid to trade solves the problem of risk? *Answer:* **Insurance**.`,
        },
        questions: [
          ["E", "The aid to trade that provides cover against the risks of business is", "insurance", "advertising", "warehousing", "communication", "Losses are compensated from a common pool."],
          ["E", "Imported goods on which customs duty has not yet been paid are stored in a", "bonded warehouse", "cold store", "retailer's store room", "manufacturer's depot", "They are released when the duty is paid."],
          ["E", "A cheque crossed 'account payee only' must be", "paid into the bank account of the payee", "cashed over the counter by anyone", "endorsed to a third party", "returned to the drawer", "The crossing restricts payment."],
          ["M", "Property valued at ₦2,000,000 is insured for ₦1,500,000. A loss of ₦400,000 occurs. Under the average clause, the insurer pays", "₦300,000", "₦400,000", "₦1,500,000", "₦100,000", "1,500,000 ÷ 2,000,000 × 400,000."],
          ["M", "The premium on a sum insured of ₦4,000,000 at a rate of 1.5% is", "₦60,000", "₦6,000", "₦600,000", "₦40,000", "1.5% of ₦4,000,000."],
          ["M", "A share with a nominal value of ₦2 pays a dividend of 10% and has a market price of ₦4. The yield is", "5%", "10%", "20%", "2.5%", "Dividend of 20 kobo on an outlay of ₦4."],
          ["M", "A machine has a cash price of ₦150,000. On hire purchase the terms are a deposit of ₦30,000 and 10 instalments of ₦14,000. The hire purchase price is", "₦170,000", "₦140,000", "₦180,000", "₦150,000", "30,000 + 140,000."],
          ["H", "A building is insured for ₦400,000 with insurer A and ₦600,000 with insurer B. For a loss of ₦100,000, insurer B contributes", "₦60,000", "₦40,000", "₦50,000", "₦100,000", "B bears six-tenths of the loss."],
          ["H", "A house worth ₦500,000 is insured for ₦800,000 and is completely destroyed by fire. The insurer will pay", "₦500,000", "₦800,000", "₦300,000", "₦1,300,000", "Indemnity limits the claim to the actual loss."],
          ["H", "An importer of frozen fish needs storage that preserves the goods until sale. The most suitable facility is a", "cold store", "transit shed", "silo", "tank farm", "Perishable goods need refrigerated storage."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: business law, management and economic policies",
        subtopics: ["Law of contract, agency and sale of goods", "Management and organisation", "Government policies and regulation", "Economic groupings, commodity exchange and e-commerce"],
        objectives: ["Recall the elements of contract, agency and sale of goods", "Recall the functions and principles of management", "Recall government policies affecting business", "Recall economic groupings, commodity exchange and e-commerce"],
        lesson: {
          title: "Revision of Business Law and Management",
          summary: "Revise business law, management, government policy and modern developments in commerce.",
          minutes: 40,
          notes: `## 1. Contract
- an agreement enforceable by law
- elements: **offer, acceptance, consideration, intention to create legal relations, capacity, legality, genuine consent**
- invitation to treat (display of goods, advertisements) is not an offer
- counter-offer destroys the offer; acceptance must be communicated
- consideration: real, need not be adequate, must not be past
- **void** (no effect), **voidable** (may be set aside), **unenforceable**
- discharge: performance, agreement, breach, frustration, operation of law
- remedies: damages, specific performance, injunction, rescission, quantum meruit

## 2. Agency
- principal, agent, third party
- created by express agreement, implication, necessity, ratification, estoppel
- agents: broker, factor, del credere agent, auctioneer; general and special agents
- agent's duties: obey, care and skill, good faith, no secret profit, account, no delegation
- principal's duties: pay commission, indemnify

## 3. Sale of goods and hire purchase
- conditions (vital — buyer may reject) and warranties (minor — damages only)
- implied terms: title, description, merchantable quality, fitness, sample
- caveat emptor; nemo dat quod non habet
- unpaid seller: lien, stoppage in transit, resale
- Hire Purchase Act 1965: written agreement; no repossession without a court order after the relevant proportion (one-half; three-fifths for vehicles)

## 4. Management
- functions: planning, organising, staffing, directing, co-ordinating, controlling
- levels: top (policy), middle (departments), supervisory (daily work)
- principles: unity of command, span of control, delegation, scalar chain, division of work
- structures: line, line and staff, functional, committee
- departments: production, purchasing, marketing, finance, personnel, administration
- centralisation and decentralisation
- leadership: autocratic, democratic, laissez-faire

## 5. Government and business
- regulation: registration (Corporate Affairs Commission), licences, taxes, standards
- patent (inventions), trade mark (name or symbol), copyright (creative works)
- agencies: SON, NAFDAC, FCCPC, CBN, SEC, NAICOM, NCC, Customs, FIRS
- **nationalisation** — state takes over private firms
- **indigenisation** — ownership passes from foreigners to citizens (1972, 1977)
- **privatisation** — public enterprises sold to private owners (BPE, 1999)
- **commercialisation** — profit orientation, ownership unchanged
- **deregulation** — removal of controls

## 6. Economic groupings
- ECOWAS: 1975, Lagos treaty; Abuja; free movement and trade; ECOMOG
- Niger Basin Authority: 1980; Niamey
- Lake Chad Basin Commission: 1964; N'Djamena; Cameroon, Chad, Niger, Nigeria
- obstacles: currencies, languages, similar products, instability

## 7. Commodity exchange
graded, durable goods; spot and futures trading; hedging; benefits — fair prices, ready market; constraints — poor grading and storage.

## 8. E-commerce and entrepreneurship
- B2B, B2C, C2C; electronic payments (ATM, POS, transfers); benefits — wider market, convenience; challenges — fraud, poor infrastructure
- entrepreneur: risk-taker and organiser; business plan; sources of finance; SMEDAN; problems of small firms

## 9. Business environment and responsibility
- external factors: political, economic, social, technological, legal, environmental
- social responsibility to employees, customers, community, government and the environment
- business ethics: honesty and fair dealing

## Final advice
Learn definitions precisely; know dates and headquarters; practise the standard calculations; read each question twice; divide your time by the marks.`,
          examples: `**Example 1.** Is a newspaper advertisement of goods for sale normally an offer? *Answer:* **No** — it is an **invitation to treat**.

**Example 2.** Which management principle is broken when a worker takes orders from two bosses? *Answer:* **Unity of command**.

**Example 3.** Distinguish nationalisation from privatisation. *Answer:* **Nationalisation** transfers private firms **to the state**; **privatisation** transfers state enterprises **to private owners**.`,
        },
        questions: [
          ["E", "For a simple contract to be valid, there must be offer, acceptance and", "consideration", "a seal", "a guarantor", "a broker", "Each party must give something of value."],
          ["E", "The management function concerned with motivating and guiding employees is", "directing", "planning", "controlling", "budgeting", "It is also called leading."],
          ["E", "The economic grouping whose member states include Nigeria, Ghana and Senegal is", "ECOWAS", "OPEC", "the European Union", "the Lake Chad Basin Commission", "It covers West Africa."],
          ["M", "A catalogue of goods with prices sent by a seller to prospective buyers is regarded in law as", "an invitation to treat", "an acceptance", "a counter-offer", "a binding contract", "The buyer's order is the offer."],
          ["M", "A manager who supervises eight subordinates directly has a", "span of control of eight", "scalar chain of eight", "unity of command of eight", "line of credit of eight", "It is the number of people reporting to him."],
          ["M", "When government retains ownership of an enterprise but requires it to operate profitably without subsidy, the policy is", "commercialisation", "privatisation", "nationalisation", "indigenisation", "Ownership does not pass to private hands."],
          ["M", "The legal right that protects a new machine invented by an engineer is", "a patent", "a copyright", "a trade mark", "a prospectus", "It gives exclusive use for a limited period."],
          ["H", "A contract made by a minor for goods that are not necessaries is generally", "not binding on the minor", "fully binding on the minor", "illegal and criminal", "a specialty contract", "Minors have limited capacity to contract."],
          ["H", "An agent who secretly receives a commission from the third party, without his principal's knowledge, has breached the duty", "not to make a secret profit", "to pay remuneration", "to indemnify the principal", "to ratify the contract", "He must act in good faith and account for all benefits."],
          ["H", "The Lake Chad Basin Commission and the Niger Basin Authority are similar in that both", "manage the shared water resources of their member states", "are stock exchanges", "issue a common currency", "were founded by the Treaty of Lagos", "Each co-ordinates the use of a river or lake basin."],
        ],
      },
    ],
  },
];
