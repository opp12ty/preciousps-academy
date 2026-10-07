import type { TermPlan } from "../types";

/** JSS1 Business Studies — original Precious PS content following the national Basic Education structure. */
export const jss1: TermPlan[] = [
  {
    classCode: "JSS1",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Introduction to Business Studies",
        subtopics: ["Meaning of Business Studies", "Components of Business Studies", "Importance of Business Studies", "Career opportunities"],
        objectives: ["Explain the meaning of Business Studies", "Identify the components of Business Studies", "State the importance of Business Studies", "Name careers related to Business Studies"],
        lesson: {
          title: "What Is Business Studies?",
          summary: "Understand the subject, its components and the careers it leads to.",
          minutes: 40,
          notes: `## Meaning
**Business Studies** is the study of how **businesses are organised and run**, how goods and services are produced and distributed, and the skills needed in offices and commerce.
A **business** is any lawful activity carried out to produce or distribute goods and services in order to make a **profit**.

## Components
| Component | What it covers |
|---|---|
| **office practice** | office work, staff, equipment, records, correspondence |
| **commerce** | trade and aids to trade (banking, transport, insurance, communication, advertising, warehousing) |
| **book-keeping** | recording business transactions |
| **keyboarding** | typing skills on keyboards |
| **consumer education** | rights and responsibilities of consumers |
| **entrepreneurship** | starting and managing a business |

## Importance
- prepares students for **careers** in business and offices
- teaches **self-reliance** and entrepreneurship
- develops good attitudes to work (honesty, punctuality)
- helps students become **wise consumers**
- provides a foundation for Commerce, Accounting, Economics and Office Practice in senior school

## Careers
accountant, banker, secretary/office administrator, insurance agent, marketer/salesperson, entrepreneur, auditor, cashier, store keeper, transport manager, customs and tax officer.`,
          examples: `**Example 1.** Name three components of Business Studies. *Answer:* **office practice, commerce, book-keeping** (also keyboarding, consumer education).

**Example 2.** Give one importance of Business Studies. *Answer:* It **prepares students for careers** and self-employment.

**Example 3.** Name two careers related to Business Studies. *Answer:* **accountant** and **banker**.`,
        },
        questions: [
          ["E", "The study of how businesses are organised and run is", "Business Studies", "Basic Science", "Physical Education", "Fine Art", "It covers business and office skills."],
          ["E", "A lawful activity carried out to make profit is a", "business", "hobby", "punishment", "festival", "Businesses aim at profit."],
          ["E", "Which is a component of Business Studies?", "book-keeping", "chemistry", "biology", "geography", "Book-keeping records transactions."],
          ["M", "The component of Business Studies that deals with typing skills is", "keyboarding", "commerce", "book-keeping", "consumer education", "It teaches use of keyboards."],
          ["M", "Recording business transactions is called", "book-keeping", "advertising", "warehousing", "insurance", "Records show a business's position."],
          ["M", "Which is a career related to Business Studies?", "accountant", "surgeon", "pilot", "geologist", "Accountants work with financial records."],
          ["M", "Trade and aids to trade such as banking and transport are studied under", "commerce", "keyboarding", "book-keeping only", "office equipment", "Commerce covers trade and its aids."],
          ["H", "How does Business Studies promote self-reliance?", "It teaches entrepreneurship and practical business skills.", "It discourages work.", "It teaches only theory.", "It prevents saving.", "Skills enable self-employment."],
          ["H", "The component that teaches rights and responsibilities of buyers is", "consumer education", "keyboarding", "office practice", "warehousing", "It protects buyers."],
          ["H", "Business Studies in JSS provides a foundation for which senior subjects?", "Commerce, Accounting and Economics", "Physics and Chemistry only", "Biology and Agriculture only", "Fine Art and Music", "They build on business concepts."],
        ],
      },
      {
        week: 2,
        title: "The office",
        subtopics: ["Meaning of an office", "Types of offices", "Functions of an office", "Office layout"],
        objectives: ["Define an office", "Identify types of offices", "State the functions of an office", "Distinguish open from closed office layouts"],
        lesson: {
          title: "Understanding the Office",
          summary: "Describe offices, their functions and their layout.",
          minutes: 40,
          notes: `## Meaning
An **office** is a place where **clerical and administrative work** is done — information is received, recorded, processed, stored and communicated — to help an organisation achieve its goals.

## Types of offices
- **government (public) offices**: ministries, local government offices
- **private offices**: companies, banks, shops
- **professional offices**: lawyers, doctors, accountants
- **home offices**
- **virtual offices** (work done online)

## Functions of an office
1. **receiving information** (letters, calls, emails)
2. **recording information** (writing, typing, entering data)
3. **processing/arranging information** (calculating, sorting)
4. **storing information** (filing)
5. **communicating/giving information**
6. **safeguarding assets** and records

## Office layout
| Open office | Closed (private) office |
|---|---|
| many workers in one large room | separate rooms for individuals or small groups |
| easy supervision and communication | privacy and confidentiality |
| cheaper to build and light | quiet, fewer distractions |
| noisy; little privacy | more expensive; harder supervision |

A good office should be well lit, ventilated, clean, secure and arranged so that work flows smoothly.`,
          examples: `**Example 1.** What is an office? *Answer:* A place where **information is received, recorded, processed, stored and communicated**.

**Example 2.** Name two functions of an office. *Answer:* **receiving information** and **storing information** (filing).

**Example 3.** Give one advantage of an open office. *Answer:* **easy supervision**.`,
        },
        questions: [
          ["E", "A place where clerical and administrative work is done is an", "office", "farm", "factory floor", "stadium", "Offices handle information."],
          ["E", "Storing documents in an orderly way is", "filing", "typing", "advertising", "banking", "Filing keeps records safe."],
          ["E", "Which is a function of an office?", "receiving information", "manufacturing cars", "growing crops", "mining", "Offices handle information."],
          ["M", "An office layout where many workers share one large room is", "an open office", "a closed office", "a private office", "a virtual office", "Workers are together."],
          ["M", "An advantage of a closed office is", "privacy and confidentiality", "cheap construction", "easy supervision", "more noise", "Separate rooms protect privacy."],
          ["M", "A lawyer's chambers is an example of a", "professional office", "government office", "factory", "warehouse", "Professionals provide services."],
          ["M", "Which is a disadvantage of an open office?", "noise and lack of privacy", "easy supervision", "low cost", "good communication", "Many people share one space."],
          ["H", "Calculating and sorting information in an office is the function of", "processing information", "receiving information", "storing information", "safeguarding assets", "Information is arranged for use."],
          ["H", "An office where work is done mainly online without a fixed location is a", "virtual office", "closed office", "government office", "open office", "It relies on the internet."],
          ["H", "Why should an office be well ventilated and lit?", "to promote health and efficiency of workers", "to waste electricity", "to reduce privacy", "to increase noise", "Good conditions improve productivity."],
        ],
      },
      {
        week: 3,
        title: "Office workers",
        subtopics: ["Categories of office workers", "Duties of office workers", "Qualities of a good office worker", "Office ethics"],
        objectives: ["Identify categories of office workers", "State the duties of office workers", "Describe the qualities of a good office worker", "Explain office ethics"],
        lesson: {
          title: "People Who Work in Offices",
          summary: "Identify office workers, their duties and the qualities expected of them.",
          minutes: 40,
          notes: `## Categories of office workers
| Worker | Duties |
|---|---|
| **manager / head of department** | plans, directs and supervises work |
| **secretary / personal assistant** | handles correspondence, appointments, meetings, filing |
| **clerk** (e.g. filing clerk, accounts clerk) | records, files and processes documents |
| **typist / data-entry operator** | types documents and enters data |
| **receptionist** | welcomes visitors, answers calls, directs enquiries |
| **messenger / office assistant** | delivers mail and documents; runs errands |
| **cashier** | receives and pays out money |
| **store keeper** | receives, stores and issues goods |
| **security staff** | protects people and property |
| **cleaner** | keeps the office clean |

## Qualities of a good office worker
punctuality, honesty and integrity, neat appearance, good manners and courtesy, loyalty, **confidentiality**, accuracy, initiative, good communication skills, ability to use office equipment, hard work, teamwork.

## Office ethics
**Office ethics** are moral principles that guide behaviour at work:
- keep official **secrets**
- do not use office property for private purposes
- respect superiors and colleagues
- avoid gossip and lateness
- dress decently
- avoid bribery and corruption`,
          examples: `**Example 1.** Who welcomes visitors and answers calls? *Answer:* the **receptionist**.

**Example 2.** Name one quality of a good office worker. *Answer:* **punctuality** (or honesty, confidentiality).

**Example 3.** What does confidentiality mean? *Answer:* **Keeping official information secret** from unauthorised people.`,
        },
        questions: [
          ["E", "The office worker who welcomes visitors and answers calls is the", "receptionist", "cashier", "store keeper", "cleaner", "Receptionists are the first contact."],
          ["E", "Which is a quality of a good office worker?", "punctuality", "lateness", "gossip", "dishonesty", "Punctuality shows discipline."],
          ["E", "The worker who receives and pays out money is the", "cashier", "messenger", "typist", "receptionist", "Cashiers handle cash."],
          ["M", "Keeping official information secret from unauthorised people is", "confidentiality", "gossip", "publicity", "advertising", "Office secrets must be protected."],
          ["M", "The worker who receives, stores and issues goods is the", "store keeper", "receptionist", "secretary", "typist", "Store keepers manage stock."],
          ["M", "The worker who handles correspondence and arranges appointments for a manager is the", "secretary", "cleaner", "messenger", "security guard", "Secretaries support managers."],
          ["M", "Moral principles guiding behaviour at work are called", "office ethics", "office equipment", "office layout", "office documents", "Ethics govern conduct."],
          ["H", "Using office stationery for private business is", "a breach of office ethics", "a sign of loyalty", "encouraged", "a duty", "Office property is for official use."],
          ["H", "Why is accuracy important for office workers?", "Errors in records can cause losses and wrong decisions.", "Accuracy wastes time.", "Errors are always harmless.", "It is not important.", "Correct records support decisions."],
          ["H", "A worker who plans, directs and supervises others is a", "manager", "messenger", "cleaner", "typist", "Managers lead departments."],
        ],
      },
      {
        week: 4,
        title: "Office equipment",
        subtopics: ["Meaning of office equipment", "Types of office equipment and their uses", "Advantages of office equipment", "Care and maintenance of office equipment"],
        objectives: ["Explain office equipment", "Identify office equipment and state their uses", "State advantages of using office equipment", "Describe care and maintenance of office equipment"],
        lesson: {
          title: "Tools of the Office",
          summary: "Identify office equipment, their uses and how to care for them.",
          minutes: 40,
          notes: `## Meaning
**Office equipment** are **machines and devices** used to make office work faster, easier and more accurate.

## Types and uses
| Equipment | Use |
|---|---|
| **computer** | typing, calculations, storing data, email, internet |
| **printer** | producing paper copies of documents |
| **photocopier** | making copies of documents |
| **scanner** | converting paper documents into digital images |
| **telephone** | voice communication |
| **calculator** | quick and accurate calculations |
| **franking machine** | printing postage on mail |
| **shredder** | destroying confidential documents |
| **filing cabinet** | storing files |
| **stapler, perforator (punch)** | fastening and punching papers |
| **projector** | displaying presentations |
| **cash register / POS terminal** | recording sales and card payments |
| **binding machine** | binding documents into booklets |

## Advantages
speed, accuracy, neatness, reduced fatigue, better storage and retrieval, improved communication, security of information.

## Care and maintenance
- follow the **manufacturer's instructions**
- cover machines after use to keep out dust
- switch off and unplug after use
- use stabilisers and surge protectors
- clean regularly; service by qualified technicians
- use correct paper and consumables
- use strong passwords and antivirus on computers`,
          examples: `**Example 1.** Which equipment destroys confidential documents? *Answer:* the **shredder**.

**Example 2.** Which equipment converts paper documents into digital images? *Answer:* the **scanner**.

**Example 3.** Give one way of caring for office machines. *Answer:* **Cover them after use** to keep out dust.`,
        },
        questions: [
          ["E", "Machines used to make office work faster and easier are", "office equipment", "office furniture only", "office staff", "office rules", "They improve efficiency."],
          ["E", "Which machine makes copies of documents?", "photocopier", "shredder", "calculator", "stapler", "It duplicates documents."],
          ["E", "A device used for quick and accurate calculations is a", "calculator", "stapler", "shredder", "perforator", "It computes figures."],
          ["M", "Which machine destroys confidential documents?", "shredder", "scanner", "printer", "projector", "It cuts documents into strips."],
          ["M", "A device that converts paper documents into digital images is a", "scanner", "franking machine", "binding machine", "stapler", "Scanned files can be stored digitally."],
          ["M", "A machine that prints postage on letters is a", "franking machine", "photocopier", "printer only", "calculator", "It replaces stamps."],
          ["M", "Which is an advantage of office equipment?", "speed and accuracy", "more errors", "slower work", "more fatigue", "Machines work faster."],
          ["H", "Covering office machines after use helps to", "protect them from dust", "increase dust", "reduce their life", "make them heavier", "Dust damages machines."],
          ["H", "A tool used to punch holes in papers for filing is a", "perforator", "stapler", "shredder", "scanner", "It makes holes for files."],
          ["H", "Why should computers have antivirus and strong passwords?", "to protect data from damage and unauthorised access", "to slow them down", "to increase errors", "to share data with strangers", "Security protects information."],
        ],
      },
      {
        week: 5,
        title: "Office documents and records",
        subtopics: ["Meaning of office records", "Types of office documents", "Importance of records", "Keeping records safe"],
        objectives: ["Explain office records", "Identify common office documents", "State the importance of keeping records", "Describe ways of keeping records safe"],
        lesson: {
          title: "Documents and Records in the Office",
          summary: "Identify office documents and explain why records are kept.",
          minutes: 40,
          notes: `## Meaning
**Office records** are **written or electronic documents** that contain information about the activities of an organisation, kept for future reference.

## Common office documents
| Document | Purpose |
|---|---|
| **letter** | formal communication with people outside |
| **memorandum (memo)** | internal communication within an organisation |
| **circular** | a message sent to many people at once |
| **minutes** | written record of what was discussed and decided at a meeting |
| **agenda** | list of items to be discussed at a meeting |
| **report** | account of an activity or investigation |
| **invoice** | bill showing goods supplied and amount due |
| **receipt** | proof of payment |
| **register** (attendance, visitors) | record of people present or visiting |
| **forms** (application, leave) | standard documents for collecting information |

## Importance of records
- provide **information** for decision-making
- serve as **evidence** in disputes
- help **planning** and control
- show the **history** of the organisation
- meet **legal** requirements (e.g. tax records)
- help **continuity** when staff change

## Keeping records safe
proper **filing**; fire-proof cabinets; backups for electronic records; passwords; restricted access; protection from damp, pests and dust; regular review and disposal of outdated records (by shredding confidential ones).`,
          examples: `**Example 1.** Which document is used for internal communication? *Answer:* a **memorandum (memo)**.

**Example 2.** What is the difference between an agenda and minutes? *Answer:* An agenda lists items **to be discussed**; minutes record **what was discussed and decided**.

**Example 3.** Give one importance of keeping records. *Answer:* They serve as **evidence** in disputes.`,
        },
        questions: [
          ["E", "Written or electronic documents kept for future reference are", "records", "rumours", "advertisements", "taxes", "Records preserve information."],
          ["E", "A document used for internal communication within an organisation is a", "memorandum", "invoice", "receipt", "passport", "Memos are internal."],
          ["E", "Proof of payment is a", "receipt", "memo", "agenda", "circular", "It confirms payment."],
          ["M", "A list of items to be discussed at a meeting is the", "agenda", "minutes", "invoice", "receipt", "The agenda guides the meeting."],
          ["M", "A written record of what was discussed and decided at a meeting is the", "minutes", "agenda", "circular", "invoice", "Minutes record decisions."],
          ["M", "A message sent to many people at the same time is a", "circular", "receipt", "invoice", "voucher", "It circulates widely."],
          ["M", "Which is an importance of keeping records?", "they serve as evidence", "they cause disputes", "they waste space only", "they confuse workers", "Records prove what happened."],
          ["H", "Backing up electronic records helps to", "prevent loss of data if a computer fails", "delete records", "slow down work", "expose data", "Backups protect information."],
          ["H", "Confidential outdated records should be disposed of by", "shredding", "throwing them in the street", "selling them", "giving them to visitors", "Shredding prevents misuse."],
          ["H", "Records help continuity in an organisation because", "new staff can understand past activities", "they stop work", "they replace staff", "they are secret from everyone", "Records preserve institutional memory."],
        ],
      },
      {
        week: 6,
        title: "Filing and filing systems",
        subtopics: ["Meaning of filing", "Methods of classification", "Filing equipment", "Qualities of a good filing system"],
        objectives: ["Explain filing", "Describe methods of classifying files", "Identify filing equipment", "State the qualities of a good filing system"],
        lesson: {
          title: "Keeping Documents in Order",
          summary: "Describe filing methods and qualities of a good filing system.",
          minutes: 40,
          notes: `## Meaning
**Filing** is the **systematic arrangement and storage of documents** so that they can be **found quickly** when needed.

## Methods of classification
| Method | Arrangement | Example |
|---|---|---|
| **alphabetical** | by names A–Z | customers' files by surname |
| **numerical** | by numbers | invoice numbers, staff numbers |
| **geographical** | by place | branches by state or town |
| **subject** | by topic | "Salaries", "Transport", "Maintenance" |
| **chronological** | by date | correspondence by date received |
| **alpha-numeric** | letters and numbers combined | A01, A02, B01 |

## Filing equipment
filing cabinets (vertical and lateral), box files, lever-arch files, folders, index cards, card index boxes, computers (electronic filing), shelves.

## Electronic filing
documents are saved in folders on computers or cloud storage; advantages: saves space, fast search, easy sharing, backups.

## Qualities of a good filing system
- **simple** to understand and operate
- **quick retrieval** of documents
- **secure** and confidential
- **economical** (low cost, saves space)
- **flexible** (can expand)
- **cross-referencing** where needed
- suitable for the organisation's needs

## Rules
file documents promptly; use a **tracer/out card** when a file is removed; return files after use; keep files neat.`,
          examples: `**Example 1.** Arranging customers' files by surname is **alphabetical** filing.

**Example 2.** Name one quality of a good filing system. *Answer:* **quick retrieval** (or security, simplicity).

**Example 3.** What is an out card (tracer)? *Answer:* A card placed where a file has been **removed**, showing who took it and when.`,
        },
        questions: [
          ["E", "The systematic arrangement and storage of documents is", "filing", "typing", "franking", "shredding", "Filing keeps documents in order."],
          ["E", "Arranging files by surnames from A to Z is", "alphabetical filing", "numerical filing", "geographical filing", "chronological filing", "It follows the alphabet."],
          ["E", "A cabinet used to store files is a", "filing cabinet", "franking machine", "shredder", "projector", "It keeps files safe."],
          ["M", "Arranging files by date is", "chronological filing", "subject filing", "geographical filing", "alphabetical filing", "It follows time order."],
          ["M", "Arranging branch files by state or town is", "geographical filing", "numerical filing", "subject filing", "chronological filing", "It follows location."],
          ["M", "Which is a quality of a good filing system?", "quick retrieval of documents", "slow search", "high cost", "confusion", "Documents must be found fast."],
          ["M", "Saving documents in computer folders is", "electronic filing", "manual shredding", "franking", "photocopying", "It uses digital storage."],
          ["H", "A card placed where a file has been removed, showing who took it, is", "an out card (tracer)", "a receipt", "an invoice", "a memo", "It tracks borrowed files."],
          ["H", "Files arranged by invoice numbers use", "numerical classification", "alphabetical classification", "geographical classification", "subject classification", "Numbers determine order."],
          ["H", "An advantage of electronic filing over manual filing is that it", "saves space and allows fast search", "needs more cabinets", "is always slower", "cannot be backed up", "Digital files are compact and searchable."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 2,
    topics: [
      {
        week: 1,
        title: "Production and factors of production",
        subtopics: ["Meaning of production", "Factors of production", "Rewards of factors of production", "Types of production"],
        objectives: ["Define production", "Identify the factors of production", "State the reward for each factor", "Distinguish types of production"],
        lesson: {
          title: "How Goods and Services Are Produced",
          summary: "Explain production, its factors and their rewards.",
          minutes: 40,
          notes: `## Meaning
**Production** is the **creation of goods and services** to satisfy human wants. It is complete only when goods reach the **final consumer**.

## Factors of production and their rewards
| Factor | Meaning | Reward |
|---|---|---|
| **land** | natural resources: land, minerals, water, forests | **rent** |
| **labour** | human effort, physical or mental | **wages/salaries** |
| **capital** | man-made goods used in production: machines, tools, buildings | **interest** |
| **entrepreneur** | the person who organises the other factors and bears risks | **profit** |

## Types of production
| Type | Meaning | Examples |
|---|---|---|
| **primary (extractive)** | obtaining raw materials from nature | farming, fishing, mining, lumbering |
| **secondary** | changing raw materials into finished goods (manufacturing) and **construction** | textile mills, bakeries, building |
| **tertiary** | providing **services**: commercial services (trade, banking, insurance, transport, advertising, warehousing, communication) and direct services (teachers, doctors, lawyers) | banks, hospitals |

## Chain of production
**primary → secondary → tertiary**: e.g. cotton farming → textile factory → shops selling clothes.`,
          examples: `**Example 1.** What is the reward for labour? *Answer:* **wages or salaries**.

**Example 2.** Which factor of production organises the others? *Answer:* the **entrepreneur**.

**Example 3.** Is a bakery primary, secondary or tertiary production? *Answer:* **secondary**.`,
        },
        questions: [
          ["E", "The creation of goods and services to satisfy wants is", "production", "consumption", "saving", "taxation", "Production makes goods and services."],
          ["E", "The reward for land is", "rent", "wages", "interest", "profit", "Landowners receive rent."],
          ["E", "The reward for labour is", "wages", "rent", "interest", "profit", "Workers earn wages."],
          ["M", "The factor of production that organises the others and bears risks is the", "entrepreneur", "labour", "land", "capital", "The entrepreneur earns profit."],
          ["M", "The reward for capital is", "interest", "rent", "wages", "profit", "Capital earns interest."],
          ["M", "Farming and fishing are examples of", "primary production", "secondary production", "tertiary production", "commercial services", "They obtain raw materials."],
          ["M", "Machines, tools and buildings used in production are", "capital", "land", "labour", "entrepreneurship", "Capital is man-made."],
          ["H", "Production is complete only when goods", "reach the final consumer", "leave the farm", "are manufactured", "are advertised", "Distribution completes production."],
          ["H", "A bank provides", "tertiary production (commercial services)", "primary production", "secondary production", "extractive production", "Banking is a service."],
          ["H", "Which sequence shows the chain of production correctly?", "cotton farming, textile factory, clothing shop", "clothing shop, cotton farming, textile factory", "textile factory, clothing shop, cotton farming", "clothing shop, textile factory, cotton farming", "Primary, then secondary, then tertiary."],
        ],
      },
      {
        week: 2,
        title: "Occupation",
        subtopics: ["Meaning of occupation", "Types of occupation", "Factors affecting choice of occupation", "Importance of occupation"],
        objectives: ["Define occupation", "Classify occupations into industrial, commercial and services", "Identify factors affecting choice of occupation", "State the importance of occupation"],
        lesson: {
          title: "How People Earn a Living",
          summary: "Classify occupations and explain factors affecting occupational choice.",
          minutes: 40,
          notes: `## Meaning
An **occupation** is the **work a person does regularly to earn a living**.

## Types of occupation
| Type | Sub-types | Examples |
|---|---|---|
| **industrial** | **extractive** (from nature), **manufacturing**, **construction** | farmer, miner, fisherman; factory worker; builder |
| **commercial** | **trade** and **aids to trade** | trader, banker, insurer, transporter, advertiser, warehouse keeper |
| **services** | **direct** (personal) services and **indirect** services | doctor, teacher, lawyer, hairdresser; police, civil servants |

## Factors affecting choice of occupation
interest and talent; level of education and training; income expected; environment (e.g. fishing in riverine areas); family background; job availability; capital required; health and physical ability; prestige; government policy.

## Importance of occupation
- provides **income** to meet needs
- produces goods and services for society
- gives **dignity** and a sense of purpose
- contributes to **national development** and tax revenue
- reduces crime and dependence

## Occupational choices for students
Choose subjects wisely, seek **career guidance**, develop skills and consider self-employment.`,
          examples: `**Example 1.** Is a trader in a commercial or industrial occupation? *Answer:* **commercial**.

**Example 2.** Is a teacher providing direct or indirect services? *Answer:* **direct services**.

**Example 3.** Name one factor affecting choice of occupation. *Answer:* **interest and talent** (or education).`,
        },
        questions: [
          ["E", "The work a person does regularly to earn a living is an", "occupation", "hobby", "holiday", "punishment", "It provides income."],
          ["E", "A farmer is engaged in", "an industrial (extractive) occupation", "a commercial occupation", "direct services only", "a hobby", "Farming obtains produce from nature."],
          ["E", "A trader is engaged in", "a commercial occupation", "an extractive occupation", "construction", "manufacturing", "Trade is commercial."],
          ["M", "A doctor who treats patients provides", "direct services", "manufacturing", "extractive work", "construction", "Services are rendered directly to people."],
          ["M", "Building houses and roads is", "construction", "trade", "banking", "direct services", "It is part of industrial occupation."],
          ["M", "Which factor affects choice of occupation?", "interest and talent", "the day of the week", "the colour of one's shoes", "the weather only", "People choose what suits them."],
          ["M", "Police officers and civil servants provide", "indirect services", "direct personal services only", "extractive work", "manufacturing", "They serve the public generally."],
          ["H", "Why do many people in riverine areas choose fishing?", "The environment favours it.", "Fishing needs no water.", "It is required by law.", "It is the only job in Nigeria.", "Environment influences occupation."],
          ["H", "Banking, insurance and transport are", "aids to trade", "extractive industries", "construction", "direct services only", "They help trade to take place."],
          ["H", "How does occupation contribute to national development?", "Workers produce goods and pay taxes.", "It increases crime.", "It reduces production.", "It has no effect.", "Productive work builds the nation."],
        ],
      },
      {
        week: 3,
        title: "Introduction to trade",
        subtopics: ["Meaning of trade", "Home trade: retail and wholesale", "Foreign trade: imports, exports and entrepôt", "Importance of trade"],
        objectives: ["Define trade", "Distinguish home trade from foreign trade", "Distinguish retail from wholesale trade", "State the importance of trade"],
        lesson: {
          title: "Buying and Selling",
          summary: "Classify trade into home and foreign trade and explain its importance.",
          minutes: 40,
          notes: `## Meaning
**Trade** is the **buying and selling of goods and services** with the aim of making profit.

## Classification
**Home (domestic) trade** — within a country:
- **Wholesale trade**: buying in **large quantities** from producers and selling in smaller quantities to retailers.
- **Retail trade**: selling in **small quantities** to final consumers.

**Foreign (international) trade** — between countries:
- **Import trade**: buying goods from other countries.
- **Export trade**: selling goods to other countries.
- **Entrepôt (re-export) trade**: importing goods and re-exporting them.

## Chain of distribution
**producer → wholesaler → retailer → consumer**

## Importance of trade
- satisfies **wants** by bringing goods to consumers
- encourages **specialisation** and production
- creates **jobs** and income
- earns government **revenue** (taxes and duties)
- promotes **international relations**
- makes goods not produced locally available

## Barter and money
Early trade was by **barter** (exchange of goods for goods). Money replaced barter because barter required a **double coincidence of wants**.`,
          examples: `**Example 1.** Is selling cocoa to Europe an import or export? *Answer:* **export**.

**Example 2.** Who buys in bulk from producers and sells to retailers? *Answer:* the **wholesaler**.

**Example 3.** Give one importance of trade. *Answer:* It **creates jobs** (or earns revenue).`,
        },
        questions: [
          ["E", "The buying and selling of goods and services is", "trade", "production", "saving", "farming", "Trade exchanges goods for money."],
          ["E", "Trade within a country is", "home trade", "foreign trade", "entrepôt trade", "export trade", "It is domestic."],
          ["E", "Selling goods in small quantities to final consumers is", "retail trade", "wholesale trade", "import trade", "export trade", "Retailers serve consumers."],
          ["M", "Buying goods in large quantities from producers and selling to retailers is", "wholesale trade", "retail trade", "barter", "export only", "Wholesalers deal in bulk."],
          ["M", "Buying goods from other countries is", "import trade", "export trade", "retail trade", "barter", "Goods come into the country."],
          ["M", "Importing goods and re-exporting them is", "entrepôt trade", "retail trade", "home trade", "barter", "Goods pass through."],
          ["M", "The correct chain of distribution is", "producer, wholesaler, retailer, consumer", "consumer, retailer, wholesaler, producer", "retailer, producer, consumer, wholesaler", "wholesaler, consumer, producer, retailer", "Goods flow from producer to consumer."],
          ["H", "Barter was replaced by money mainly because barter required", "a double coincidence of wants", "banks", "printed receipts", "computers", "Each party must want the other's goods."],
          ["H", "How does trade earn revenue for government?", "through taxes and customs duties", "by printing money", "through gifts only", "it does not", "Trade is taxed."],
          ["H", "Trade encourages specialisation because", "producers can sell their surplus and buy what they lack", "everyone produces everything", "it stops production", "it reduces exchange", "Exchange allows focus."],
        ],
      },
      {
        week: 4,
        title: "Consumer education",
        subtopics: ["Meaning of consumer and consumer education", "Rights of consumers", "Responsibilities of consumers", "Consumer protection agencies"],
        objectives: ["Define consumer and consumer education", "State the rights of consumers", "State the responsibilities of consumers", "Identify consumer protection agencies"],
        lesson: {
          title: "Becoming a Wise Consumer",
          summary: "Know your rights and responsibilities as a consumer.",
          minutes: 40,
          notes: `## Meanings
- A **consumer** is a person who **buys or uses goods and services** to satisfy personal needs.
- **Consumer education** is teaching people to **buy wisely**, know their rights and responsibilities, and protect themselves from exploitation.

## Rights of consumers
| Right | Meaning |
|---|---|
| **safety** | goods must not endanger health |
| **information** | correct labels, prices, ingredients, expiry dates |
| **choice** | variety of goods at fair prices |
| **redress** | compensation or replacement for faulty goods |
| **to be heard** | complaints should be attended to |
| **consumer education** | right to learn about wise buying |
| **healthy environment** | goods and services should not harm the environment |

## Responsibilities of consumers
- read **labels** and check **expiry dates** and **NAFDAC** numbers
- demand and keep **receipts**
- compare prices and quality before buying
- use goods according to instructions
- report fake or harmful products
- avoid wasteful buying; make a **budget**

## Consumer protection agencies
**FCCPC** (Federal Competition and Consumer Protection Commission), **NAFDAC** (food and drugs), **SON** (standards), **NCC** (telecommunications), **CBN** (banking consumers).`,
          examples: `**Example 1.** Name one right of consumers. *Answer:* the **right to safety** (or information, redress).

**Example 2.** Why should consumers keep receipts? *Answer:* As **proof of purchase** for complaints or refunds.

**Example 3.** Which agency regulates food and drugs? *Answer:* **NAFDAC**.`,
        },
        questions: [
          ["E", "A person who buys or uses goods and services is a", "consumer", "producer", "wholesaler", "manufacturer", "Consumers use products."],
          ["E", "Consumers should check products for", "expiry dates", "the seller's age", "the shop's paint colour", "the day of the week", "Expired goods may be harmful."],
          ["E", "Proof of purchase is a", "receipt", "memo", "agenda", "circular", "Receipts support complaints."],
          ["M", "The right of consumers to accurate labels is the right to", "information", "choice", "redress", "safety only", "Labels inform buyers."],
          ["M", "Compensation or replacement for faulty goods is the right to", "redress", "information", "choice", "education", "Redress corrects wrongs."],
          ["M", "The agency that regulates food and drugs in Nigeria is", "NAFDAC", "NCC", "CBN", "FRSC", "It registers food and drugs."],
          ["M", "Which is a responsibility of consumers?", "comparing prices and quality before buying", "buying fake goods", "ignoring labels", "throwing away receipts", "Wise buying saves money."],
          ["H", "The agency that protects consumers and promotes fair competition is the", "FCCPC", "NAFDAC", "INEC", "NDLEA", "It was created in 2018."],
          ["H", "Teaching people to buy wisely and know their rights is", "consumer education", "advertising only", "smuggling", "wholesaling", "It empowers buyers."],
          ["H", "Making a budget before shopping helps consumers to", "avoid wasteful buying", "spend more than they have", "buy fake goods", "lose receipts", "Budgets guide spending."],
        ],
      },
      {
        week: 5,
        title: "Ethics and honesty in business",
        subtopics: ["Meaning of business ethics", "Ethical business practices", "Unethical business practices", "Benefits of ethical business"],
        objectives: ["Explain business ethics", "Identify ethical business practices", "Identify unethical business practices", "Explain the benefits of ethical behaviour in business"],
        lesson: {
          title: "Doing Business the Right Way",
          summary: "Explain business ethics and why honesty pays in business.",
          minutes: 40,
          notes: `## Meaning
**Business ethics** are **moral principles** that guide how businesses and business people behave towards customers, workers, competitors, government and the environment.

## Ethical business practices
- honest **weights and measures**
- fair **pricing**
- truthful **advertising**
- selling **quality**, safe and genuine goods
- keeping **promises** and contracts
- paying **taxes**
- fair treatment and payment of workers
- protecting the **environment**
- respecting customers' **privacy**

## Unethical business practices
| Practice | Meaning |
|---|---|
| **adulteration** | mixing goods with inferior substances (e.g. palm oil mixed with dye) |
| **short measures** | selling less than the stated quantity (tampered scales, "congo" measures) |
| **hoarding** | keeping goods off the market to cause scarcity and raise prices |
| **selling fake or expired goods** | endangering consumers |
| **misleading advertising** | false claims about products |
| **tax evasion** | illegally avoiding taxes |
| **bribery** | giving gifts to obtain unfair advantage |
| **exploitation of workers** | poor pay, unsafe conditions |

## Benefits of ethical business
customer **trust** and loyalty; good **reputation**; repeat sales; fewer legal problems; better staff morale; long-term success; contribution to national development.`,
          examples: `**Example 1.** Mixing palm oil with dye is an example of **adulteration**.

**Example 2.** Keeping goods in the store to cause scarcity is **hoarding**.

**Example 3.** Name one benefit of ethical business. *Answer:* **customer trust** (or good reputation).`,
        },
        questions: [
          ["E", "Moral principles that guide business behaviour are", "business ethics", "business profits", "business loans", "business taxes", "Ethics guide conduct."],
          ["E", "Which is an ethical business practice?", "honest weights and measures", "short measures", "adulteration", "hoarding", "Honesty builds trust."],
          ["E", "Selling expired drugs is", "unethical and dangerous", "a good practice", "required by law", "ethical", "It endangers consumers."],
          ["M", "Mixing goods with inferior substances is", "adulteration", "hoarding", "advertising", "wholesaling", "It reduces quality."],
          ["M", "Keeping goods off the market to cause scarcity and raise prices is", "hoarding", "retailing", "advertising", "exporting", "Hoarders exploit scarcity."],
          ["M", "Making false claims about a product in adverts is", "misleading advertising", "consumer education", "fair pricing", "redress", "It deceives buyers."],
          ["M", "Using a tampered scale to cheat customers is", "short measure", "fair trade", "discount", "credit sale", "Buyers get less than paid for."],
          ["H", "Which is a benefit of ethical business?", "customer trust and loyalty", "legal problems", "loss of customers", "bad reputation", "Honest businesses keep customers."],
          ["H", "Illegally avoiding the payment of taxes is", "tax evasion", "tax planning", "tax payment", "tax refund", "Tax evasion is a crime."],
          ["H", "Paying workers fairly and providing safe working conditions shows", "ethical treatment of workers", "exploitation", "hoarding", "adulteration", "Workers deserve fairness."],
        ],
      },
      {
        week: 6,
        title: "Communication in business",
        subtopics: ["Meaning of communication", "Process of communication", "Forms of communication", "Barriers to effective communication"],
        objectives: ["Define communication", "Describe the communication process", "Identify forms of communication in business", "Explain barriers to effective communication"],
        lesson: {
          title: "Communicating Effectively in Business",
          summary: "Explain the communication process, its forms and barriers.",
          minutes: 40,
          notes: `## Meaning
**Communication** is the **transfer of information, ideas or messages** from one person (or place) to another so that it is understood.

## The communication process
**sender → message (encoding) → medium/channel → receiver (decoding) → feedback**
- **sender**: originates the message
- **encoding**: putting ideas into words, symbols or signals
- **channel**: the means (letter, phone, email, meeting)
- **receiver**: the person who gets the message
- **decoding**: interpreting the message
- **feedback**: the response showing the message was understood

## Forms of communication
| Form | Examples |
|---|---|
| **oral (verbal)** | face-to-face talk, telephone, meetings |
| **written** | letters, memos, reports, emails, SMS |
| **visual** | charts, graphs, pictures, signs |
| **non-verbal** | gestures, facial expressions, body language |
| **electronic** | email, social media, video calls |
Communication may be **internal** (within the organisation) or **external** (with customers, suppliers, government).

## Barriers to effective communication
noise; language differences; poor listening; wrong choice of channel; unclear message; distance; poor network; emotions and prejudice; information overload; lack of feedback.

## Overcoming barriers
use clear, simple language; choose suitable channels; listen actively; seek feedback; reduce noise.`,
          examples: `**Example 1.** Put in order: receiver, sender, message, feedback, channel. *Answer:* **sender → message → channel → receiver → feedback**.

**Example 2.** Name one barrier to communication. *Answer:* **noise** (or language differences).

**Example 3.** Is a memo oral or written communication? *Answer:* **written**.`,
        },
        questions: [
          ["E", "The transfer of information from one person to another is", "communication", "production", "taxation", "saving", "Messages are shared."],
          ["E", "The person who originates a message is the", "sender", "receiver", "channel", "decoder", "The sender starts communication."],
          ["E", "A telephone conversation is an example of", "oral communication", "written communication", "visual communication", "non-verbal only", "It uses spoken words."],
          ["M", "The response showing that a message was understood is", "feedback", "noise", "encoding", "channel", "Feedback completes the process."],
          ["M", "The means through which a message is sent is the", "channel (medium)", "sender", "receiver", "feedback", "Examples include email and letters."],
          ["M", "Gestures and facial expressions are", "non-verbal communication", "written communication", "electronic mail", "reports", "They communicate without words."],
          ["M", "Which is a barrier to effective communication?", "noise", "clear language", "active listening", "feedback", "Noise distorts messages."],
          ["H", "Interpreting a message by the receiver is called", "decoding", "encoding", "transmitting", "franking", "The receiver makes sense of it."],
          ["H", "Communication between a company and its customers is", "external communication", "internal communication", "non-verbal only", "encoding", "It goes outside the organisation."],
          ["H", "Which helps to overcome barriers to communication?", "using clear, simple language", "using jargon with strangers", "ignoring feedback", "choosing noisy channels", "Clarity aids understanding."],
        ],
      },
    ],
  },
  {
    classCode: "JSS1",
    term: 3,
    topics: [
      {
        week: 1,
        title: "Keyboarding: the keyboard",
        subtopics: ["Meaning of keyboarding", "Parts of the computer keyboard", "Functions of special keys", "Care of the keyboard"],
        objectives: ["Explain keyboarding", "Identify the sections of the computer keyboard", "State the functions of special keys", "Describe how to care for the keyboard"],
        lesson: {
          title: "Getting to Know the Keyboard",
          summary: "Identify parts of the keyboard and the functions of special keys.",
          minutes: 40,
          notes: `## Meaning
**Keyboarding** is the skill of **entering text and data** into a computer or other device using a **keyboard**, accurately and quickly, usually by **touch** (without looking at the keys).

## Sections of the computer keyboard
| Section | Keys |
|---|---|
| **alphanumeric keys** | letters A–Z, numbers 0–9, punctuation |
| **function keys** | F1–F12 (special tasks, e.g. F1 for help) |
| **numeric keypad** | calculator-style numbers on the right |
| **navigation (cursor) keys** | arrow keys, Home, End, Page Up, Page Down |
| **special/control keys** | Enter, Shift, Caps Lock, Tab, Backspace, Delete, Ctrl, Alt, Esc, Space bar |

## Functions of special keys
| Key | Function |
|---|---|
| **Enter** | starts a new line or confirms a command |
| **Shift** | types capital letters and upper symbols while held down |
| **Caps Lock** | types all letters in capitals until switched off |
| **Space bar** | inserts a space between words |
| **Backspace** | deletes the character to the **left** of the cursor |
| **Delete** | deletes the character to the **right** of the cursor |
| **Tab** | moves the cursor to the next tab stop (indent) |
| **Esc** | cancels an action |
| **Ctrl / Alt** | used with other keys for shortcuts (e.g. Ctrl + C to copy) |

## Care of the keyboard
keep it clean and dry; do not eat or drink near it; do not bang the keys; cover it when not in use; clean with a slightly damp cloth when switched off.`,
          examples: `**Example 1.** Which key deletes the character to the left of the cursor? *Answer:* **Backspace**.

**Example 2.** Which key types all letters in capitals until switched off? *Answer:* **Caps Lock**.

**Example 3.** What does Ctrl + C do? *Answer:* **copies** selected text.`,
        },
        questions: [
          ["E", "The skill of entering text into a computer with a keyboard is", "keyboarding", "filing", "franking", "shredding", "It uses the keyboard."],
          ["E", "The key used to insert spaces between words is the", "space bar", "Enter key", "Tab key", "Esc key", "It is the longest key."],
          ["E", "The key that starts a new line is", "Enter", "Shift", "Esc", "Alt", "Enter moves to a new line."],
          ["M", "The key that deletes the character to the left of the cursor is", "Backspace", "Delete", "Tab", "Home", "Backspace moves back."],
          ["M", "The key that types all letters in capitals until switched off is", "Caps Lock", "Shift", "Tab", "Ctrl", "It locks capitals on."],
          ["M", "Keys F1 to F12 are called", "function keys", "arrow keys", "alphanumeric keys", "numeric keys", "They perform special tasks."],
          ["M", "The shortcut Ctrl + C is used to", "copy", "paste", "cut", "print", "C stands for copy."],
          ["H", "Holding Shift while pressing a letter key produces", "a capital letter", "a number", "a space", "a new line", "Shift gives upper case."],
          ["H", "The key that deletes the character to the right of the cursor is", "Delete", "Backspace", "Enter", "Caps Lock", "Delete removes forward."],
          ["H", "Typing without looking at the keys is called", "touch typing", "hunt and peck", "shredding", "franking", "Touch typists use finger memory."],
        ],
      },
      {
        week: 2,
        title: "Keyboarding: posture and home keys",
        subtopics: ["Correct sitting posture", "Home row keys", "Finger positions", "Accuracy and speed"],
        objectives: ["Demonstrate correct sitting posture for keyboarding", "Identify the home row keys", "Place fingers correctly on the keyboard", "Explain the importance of accuracy before speed"],
        lesson: {
          title: "Typing the Right Way",
          summary: "Use correct posture and finger placement to type accurately.",
          minutes: 40,
          notes: `## Correct posture
- sit **upright** with your back against the chair
- feet **flat** on the floor
- eyes level with the top of the screen, about an arm's length away
- elbows close to the body, bent at about **90°**
- wrists straight and **not resting** on the keyboard while typing
- fingers **curved** lightly over the keys
Good posture prevents **backache, eye strain and wrist pain** and improves speed.

## Home row keys
The **home row** is the middle row of letters where the fingers rest:
- **left hand**: **A S D F** (little finger on A, index on F)
- **right hand**: **J K L ;** (index on J, little finger on ;)
- **thumbs** rest on the **space bar**
The **F** and **J** keys have small **bumps** so that you can find them without looking.

## Finger reach
Each finger is responsible for keys above and below its home key. The index fingers also cover **G** (left) and **H** (right).

## Accuracy and speed
- aim for **accuracy first**, then build speed
- keep your eyes on the **copy (text)**, not the keys
- type with a steady **rhythm**
- practise regularly with drills
Speed is measured in **words per minute (wpm)**; a standard word is counted as five keystrokes.`,
          examples: `**Example 1.** Name the home row keys for the left hand. *Answer:* **A, S, D, F**.

**Example 2.** Why do F and J have bumps? *Answer:* So you can **find the home row by touch**.

**Example 3.** Which should come first when learning to type: speed or accuracy? *Answer:* **accuracy**.`,
        },
        questions: [
          ["E", "When typing, you should sit", "upright with feet flat on the floor", "slouching", "with legs crossed on the chair", "standing on one leg", "Good posture prevents strain."],
          ["E", "The left-hand home row keys are", "A S D F", "J K L ;", "Q W E R", "Z X C V", "The left fingers rest there."],
          ["E", "When typing, the thumbs rest on the", "space bar", "Enter key", "Shift key", "Tab key", "Thumbs press the space bar."],
          ["M", "The right-hand home row keys are", "J K L ;", "A S D F", "U I O P", "M , . /", "The right fingers rest there."],
          ["M", "The keys with small bumps to help locate the home row are", "F and J", "A and ;", "D and K", "G and H", "Index fingers find them."],
          ["M", "When learning to type, you should aim for", "accuracy first, then speed", "speed first, then accuracy", "neither", "only speed", "Accuracy builds good habits."],
          ["M", "Typing speed is measured in", "words per minute", "pages per day", "keys per hour", "letters per week", "wpm is standard."],
          ["H", "Poor posture at the keyboard can cause", "backache and wrist pain", "faster typing always", "better eyesight", "stronger backs", "Strain injures the body."],
          ["H", "While typing, your eyes should be on", "the text you are copying", "your fingers", "the ceiling", "the floor", "Touch typists look at the copy."],
          ["H", "In typing speed calculations, a standard word is counted as", "five keystrokes", "one keystroke", "ten keystrokes", "one line", "This allows fair comparison."],
        ],
      },
      {
        week: 3,
        title: "Introduction to book-keeping",
        subtopics: ["Meaning of book-keeping", "Importance of book-keeping", "Qualities of a good book-keeper", "Business transactions: cash and credit"],
        objectives: ["Define book-keeping", "State the importance of book-keeping", "Describe the qualities of a good book-keeper", "Distinguish cash from credit transactions"],
        lesson: {
          title: "Recording Business Transactions",
          summary: "Explain book-keeping and distinguish cash and credit transactions.",
          minutes: 40,
          notes: `## Meaning
**Book-keeping** is the **systematic recording of business transactions** in books of account so that the financial position of the business can be known.
A **business transaction** is any exchange of goods, services or money that affects the business (e.g. buying goods, paying rent, selling goods).

## Importance
- shows **profit or loss**
- shows what the business **owns** (assets) and **owes** (liabilities)
- helps **control** cash and prevent fraud
- provides information for **decisions** and planning
- helps in calculating **tax**
- serves as **evidence** in disputes
- helps in obtaining **loans** (banks request records)

## Qualities of a good book-keeper
honesty, accuracy, neatness, good knowledge of arithmetic, confidentiality, punctuality, orderliness, knowledge of accounting software.

## Types of transactions
| Cash transaction | Credit transaction |
|---|---|
| payment is made **immediately** | payment is made **later** |
| e.g. buying a bag of rice for ₦45,000 paid on the spot | e.g. buying goods from a supplier to pay next month |
A person who owes the business is a **debtor**; a person the business owes is a **creditor**.`,
          examples: `**Example 1.** Is buying goods to pay next month a cash or credit transaction? *Answer:* **credit transaction**.

**Example 2.** A customer who owes a business money is a **debtor**.

**Example 3.** Give one importance of book-keeping. *Answer:* It **shows profit or loss**.`,
        },
        questions: [
          ["E", "The systematic recording of business transactions is", "book-keeping", "advertising", "warehousing", "shredding", "Records show financial position."],
          ["E", "A transaction in which payment is made immediately is a", "cash transaction", "credit transaction", "loan", "donation", "Cash is paid at once."],
          ["E", "Which is a quality of a good book-keeper?", "accuracy", "carelessness", "dishonesty", "untidiness", "Records must be correct."],
          ["M", "A transaction in which payment is made later is a", "credit transaction", "cash transaction", "barter", "gift", "Credit allows later payment."],
          ["M", "A person who owes the business money is a", "debtor", "creditor", "proprietor", "manager", "Debtors must pay the business."],
          ["M", "A person to whom the business owes money is a", "creditor", "debtor", "customer only", "cashier", "Creditors are owed."],
          ["M", "Which is an importance of book-keeping?", "it shows profit or loss", "it hides fraud", "it wastes time", "it replaces sales", "Records reveal performance."],
          ["H", "Why do banks often ask for business records before giving loans?", "to assess the business's ability to repay", "to delay the loan", "to charge more", "records are not needed", "Records show financial health."],
          ["H", "Paying rent for the shop is an example of a", "business transaction", "personal hobby", "donation", "tax refund", "It affects the business."],
          ["H", "Good book-keeping helps to prevent fraud because", "every transaction is recorded and can be checked", "records are secret", "no one checks them", "fraud is legal", "Records allow verification."],
        ],
      },
      {
        week: 4,
        title: "Source documents",
        subtopics: ["Meaning of source documents", "Invoice and receipt", "Credit note and debit note", "Cheque, voucher and other documents"],
        objectives: ["Explain source documents", "Describe the uses of the invoice and receipt", "Distinguish credit notes from debit notes", "Identify other source documents"],
        lesson: {
          title: "Documents Behind Every Record",
          summary: "Identify source documents and explain their uses.",
          minutes: 40,
          notes: `## Meaning
**Source documents** are the **original documents** that provide evidence of business transactions and from which entries are made in books of account.

## Common source documents
| Document | Purpose | Prepared by |
|---|---|---|
| **invoice** | bill for goods sold on **credit**, showing quantity, price and amount due | seller |
| **receipt** | acknowledges **payment** | person receiving money |
| **credit note** | reduces the amount the buyer owes (for returned or overcharged goods) | seller |
| **debit note** | requests the seller to reduce the amount owed, or notifies an undercharge | buyer (or seller for undercharge) |
| **cash sales slip / sales receipt** | records cash sales | seller |
| **cheque** | written order to a bank to pay money | account holder |
| **payment voucher** | authorises payment of money | the business |
| **petty cash voucher** | supports small cash payments | the business |
| **statement of account** | summary of transactions with a customer over a period | seller |
| **pro-forma invoice** | quotation sent before goods are supplied | seller |

## Importance
provide **evidence**; basis for **accurate** entries; help **audit**; settle **disputes**; prevent fraud.`,
          examples: `**Example 1.** Which document is issued by the seller for goods sold on credit? *Answer:* the **invoice**.

**Example 2.** A buyer returns damaged goods. Which document does the seller issue? *Answer:* a **credit note**.

**Example 3.** Which document acknowledges payment? *Answer:* a **receipt**.`,
        },
        questions: [
          ["E", "Original documents that provide evidence of transactions are", "source documents", "novels", "newspapers", "posters", "Entries come from them."],
          ["E", "A document that acknowledges payment is a", "receipt", "invoice", "credit note", "pro-forma invoice", "It proves payment was made."],
          ["E", "A bill for goods sold on credit is an", "invoice", "receipt", "cheque", "voucher", "It shows amount due."],
          ["M", "When a buyer returns damaged goods, the seller issues a", "credit note", "debit note", "receipt", "cheque", "It reduces the amount owed."],
          ["M", "A written order to a bank to pay money is a", "cheque", "invoice", "receipt", "memo", "Account holders issue cheques."],
          ["M", "A document sent before goods are supplied, like a quotation, is a", "pro-forma invoice", "receipt", "credit note", "statement of account", "It shows expected charges."],
          ["M", "A summary of transactions with a customer over a period is a", "statement of account", "receipt", "cheque", "memo", "It shows balance due."],
          ["H", "A document that authorises small cash payments is a", "petty cash voucher", "invoice", "credit note", "pro-forma invoice", "It supports petty cash."],
          ["H", "Why are source documents important in auditing?", "They provide evidence to verify entries.", "They replace books.", "They hide transactions.", "They are not needed.", "Auditors check records against them."],
          ["H", "A buyer who has been overcharged may send the seller a", "debit note", "receipt", "cheque book", "memo only", "It notifies the seller to reduce the charge."],
        ],
      },
      {
        week: 5,
        title: "Advertising",
        subtopics: ["Meaning of advertising", "Types of advertising", "Media of advertising", "Advantages and disadvantages of advertising"],
        objectives: ["Define advertising", "Distinguish types of advertising", "Identify media of advertising", "Evaluate advantages and disadvantages of advertising"],
        lesson: {
          title: "Telling People About Products",
          summary: "Explain advertising, its types, media and effects.",
          minutes: 40,
          notes: `## Meaning
**Advertising** is the process of **informing and persuading** the public to buy goods or use services, or to accept ideas, through paid messages.

## Types of advertising
| Type | Purpose | Example |
|---|---|---|
| **informative** | gives information about a product or service | school admission notice, product features |
| **persuasive** | convinces people to buy | "Best noodles in town!" |
| **competitive** | compares with rival products | "Twice as strong as brand X" (must be truthful) |
| **reminder** | keeps an existing product in people's minds | billboards of well-known drinks |
| **public service/institutional** | promotes ideas or public causes | anti-drug campaigns |

## Media of advertising
television, radio, newspapers and magazines, billboards and posters, **internet and social media**, handbills and flyers, cinema, vehicle branding, trade fairs and exhibitions, sponsorship of events, SMS.

## Advantages
creates **awareness**; increases **sales**; supports mass production and lower costs; informs consumers of choices; creates **jobs**; funds media.

## Disadvantages
can be **misleading**; increases prices (cost added to goods); encourages wasteful spending; may promote harmful products; causes environmental clutter (billboards).
Advertising in Nigeria is regulated by the **Advertising Regulatory Council of Nigeria (ARCON)**.`,
          examples: `**Example 1.** An advert that says "Brand A cleans better than Brand B" is **competitive** advertising.

**Example 2.** Name two media of advertising. *Answer:* **radio** and **billboards** (or social media, newspapers).

**Example 3.** Which body regulates advertising in Nigeria? *Answer:* **ARCON**.`,
        },
        questions: [
          ["E", "Informing and persuading the public to buy goods through paid messages is", "advertising", "warehousing", "banking", "insurance", "It promotes products."],
          ["E", "Which is a medium of advertising?", "radio", "warehouse", "filing cabinet", "shredder", "Radio reaches many listeners."],
          ["E", "Which is an advantage of advertising?", "it creates awareness", "it always lowers quality", "it stops sales", "it hides products", "People learn about products."],
          ["M", "Advertising that compares a product with rival products is", "competitive advertising", "informative advertising", "reminder advertising", "public service advertising", "It highlights superiority."],
          ["M", "Advertising that keeps an established product in people's minds is", "reminder advertising", "competitive advertising", "informative advertising", "misleading advertising", "It reinforces brand memory."],
          ["M", "An anti-drug campaign on television is an example of", "public service advertising", "competitive advertising", "reminder advertising", "persuasive product advertising", "It promotes a public cause."],
          ["M", "Which is a disadvantage of advertising?", "it can be misleading", "it creates jobs", "it informs consumers", "it increases awareness", "False claims deceive buyers."],
          ["H", "The body that regulates advertising in Nigeria is", "ARCON", "NAFDAC only", "INEC", "NDLEA", "Advertising Regulatory Council of Nigeria."],
          ["H", "Why can advertising increase the prices of goods?", "The cost of advertising is added to the price.", "It reduces production.", "It removes competition.", "It stops mass production.", "Advertising costs are recovered from buyers."],
          ["H", "How does advertising support mass production?", "It increases demand, allowing large-scale production at lower unit cost.", "It reduces demand.", "It stops factories.", "It has no link.", "Higher demand supports economies of scale."],
        ],
      },
      {
        week: 6,
        title: "Introduction to money and banking",
        subtopics: ["Meaning and functions of money", "Qualities of good money", "Meaning and types of banks", "Services of commercial banks"],
        objectives: ["Define money and state its functions", "State the qualities of good money", "Identify types of banks", "Describe services of commercial banks"],
        lesson: {
          title: "Money and Banks in Business",
          summary: "Explain money, its qualities and the services banks provide to businesses.",
          minutes: 40,
          notes: `## Money
**Money** is anything **generally accepted** as a means of payment for goods and services and for settling debts. Nigeria's currency is the **naira (₦)** and **kobo**, issued by the **Central Bank of Nigeria (CBN)**.

## Functions of money
- **medium of exchange**
- **measure (unit) of value**
- **store of value**
- **standard of deferred payment**

## Qualities of good money
general acceptability, durability, portability, divisibility, homogeneity (uniformity), relative scarcity, stability of value, difficulty to forge.

## Types of banks
| Bank | Main role |
|---|---|
| **Central Bank of Nigeria** | issues currency; banker to government and banks; controls money supply |
| **commercial (deposit money) banks** | accept deposits; give loans; payments |
| **microfinance banks** | small loans to small businesses and individuals |
| **development banks** (e.g. Bank of Industry, Bank of Agriculture) | long-term finance for industry and agriculture |
| **merchant banks** | services to large businesses (e.g. financing big projects) |
| **mortgage banks** | housing loans |

## Services of commercial banks to businesses
accepting deposits (savings, current and fixed accounts); loans and **overdrafts**; transfers and payments (cheques, electronic transfers, POS); safe custody of valuables; foreign exchange; financial advice; issuing **debit cards**.`,
          examples: `**Example 1.** Which bank issues the naira? *Answer:* the **Central Bank of Nigeria**.

**Example 2.** Name one function of money. *Answer:* **medium of exchange** (or store of value).

**Example 3.** Which bank gives small loans to small businesses? *Answer:* a **microfinance bank**.`,
        },
        questions: [
          ["E", "Anything generally accepted as a means of payment is", "money", "barter", "a receipt", "an invoice", "Money is accepted by all."],
          ["E", "Nigeria's currency is the", "naira", "cedi", "dollar", "pound", "The naira and kobo."],
          ["E", "The bank that issues Nigeria's currency is the", "Central Bank of Nigeria", "a microfinance bank", "a mortgage bank", "a merchant bank", "The CBN issues currency."],
          ["M", "Using money to buy goods shows its function as a", "medium of exchange", "store of value", "standard of deferred payment", "unit of weight", "Money eases exchange."],
          ["M", "Which is a quality of good money?", "portability", "perishability", "heaviness", "easy forgery", "Money must be easy to carry."],
          ["M", "Banks that give small loans to small businesses are", "microfinance banks", "central banks", "merchant banks only", "mortgage banks", "They support small enterprises."],
          ["M", "An arrangement allowing a customer to withdraw more than his balance is an", "overdraft", "invoice", "credit note", "receipt", "It is short-term credit."],
          ["H", "Banks that provide long-term finance for industry and agriculture are", "development banks", "commercial banks only", "microfinance banks", "central banks", "Examples include the Bank of Industry."],
          ["H", "Money serving as a store of value means it", "can be saved for future use", "cannot be saved", "loses value immediately", "is only for trade", "People keep money for later."],
          ["H", "Banks that provide housing loans are", "mortgage banks", "merchant banks", "microfinance banks", "central banks", "They finance homes."],
        ],
      },
    ],
  },
];
