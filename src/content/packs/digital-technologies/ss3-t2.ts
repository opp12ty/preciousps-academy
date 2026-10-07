import type { TermPlan } from "../types";

/** SS3 Digital Technologies, Second and Third Terms — NERDC 2025 scheme. */
export const ss3t2: TermPlan = {
  classCode: "SS3",
  term: 2,
  topics: [
    {
      week: 1,
      title: "Advanced Web Design: JavaScript Interactivity and Responsive Design",
      subtopics: ["The three languages of the web", "JavaScript basics and the DOM", "Events and interactivity", "Responsive design"],
      objectives: ["Distinguish the roles of HTML, CSS and JavaScript", "Write simple JavaScript using variables, functions and conditions", "Use events to make a page interactive", "Explain and apply the principles of responsive design"],
      lesson: {
        title: "Pages That Respond",
        summary: "Adding behaviour to web pages with JavaScript and making them fit every screen.",
        minutes: 80,
        notes: `## The three languages of the web
| Language | Role |
|---|---|
| **HTML** | **structure and content** — headings, paragraphs, images, forms |
| **CSS** | **presentation** — colours, fonts, layout |
| **JavaScript** | **behaviour** — interactivity and logic |

## JavaScript
**JavaScript** is a **scripting language that runs in the browser** (client side). It is written between script tags or in a separate file with the extension **.js**.

### Basics
- **variables:** let score = 75; const PI = 3.14;
- **data types:** number, string, boolean, array, object
- **operators:** + − * / ; comparison === , < , > ; logical && , ||
- **output:** alert("Hello"); console.log(score);
- **comments:** // single line

### Conditions and loops
if (score >= 50) { result = "Pass"; } else { result = "Fail"; }

for (let i = 1; i <= 5; i++) { console.log(i); }

### Functions
function greet(name) { return "Welcome, " + name; }

## The DOM
The browser turns a page into a tree of objects called the **Document Object Model (DOM)**. JavaScript reads and changes the page through it.
- document.getElementById("msg") — find an element by its id
- element.innerHTML = "New text" — change its content
- element.style.color = "red" — change its style

## Events and interactivity
An **event** is something that happens on the page; an **event handler** is the code that responds.
| Event | When it fires |
|---|---|
| onclick | an element is clicked |
| onmouseover | the pointer moves over an element |
| onchange | the value of a form field changes |
| onsubmit | a form is submitted |
| onload | the page finishes loading |
| onkeyup | a key is released |

*Example:* a button written with onclick="showTime()" runs the function showTime when clicked.

### Uses of interactivity
**form validation** (checking that fields are filled and e-mail addresses are well formed before sending); image sliders; drop-down menus; pop-ups; calculators; quizzes; showing and hiding content; loading data without refreshing the page.

## Responsive design
**Responsive web design** makes a page **adjust its layout automatically to the screen size** of the device — phone, tablet or desktop.

### Techniques
1. the **viewport meta tag** in the head of the page: name="viewport" content="width=device-width, initial-scale=1"
2. **fluid layouts** — widths in **percentages** or relative units (em, rem, vw) rather than fixed pixels
3. **flexible images** — max-width: 100%
4. **media queries** — CSS rules that apply only at certain widths:
@media (max-width: 600px) { .menu { display: none; } }
5. **CSS Flexbox and Grid** for layouts that wrap
6. **mobile-first** design — design for small screens, then enlarge
7. frameworks such as **Bootstrap**

### Why it matters
most users browse on **phones**; one site serves all devices; better user experience; search engines rank mobile-friendly sites higher; cheaper than building separate sites.

## Good practice
keep structure, style and behaviour in **separate files**; test on several browsers and devices; use meaningful names; make pages **accessible** (alternative text for images, readable contrast); validate input on the **server** as well as in the browser.`,
        examples: `**Example 1.** Which language adds interactivity to a web page? *Solution:* **JavaScript**.

**Example 2.** What does document.getElementById("total") do? *Solution:* It **selects the page element whose id is "total"**.

**Example 3.** What is a media query? *Solution:* A **CSS rule that applies only when the screen meets a stated condition**, such as a maximum width.`,
      },
      questions: [
        ["E", "The language that controls the behaviour and interactivity of a web page is", "JavaScript", "HTML", "CSS", "SQL", "HTML gives structure and CSS gives style."],
        ["E", "A web page that adjusts its layout to different screen sizes is said to be", "responsive", "static", "compiled", "encrypted", "It works on phones, tablets and desktops."],
        ["E", "The file extension of an external JavaScript file is", ".js", ".html", ".css", ".jpg", "Scripts are saved with the .js extension."],
        ["M", "The event that occurs when a user clicks a button is", "onclick", "onload", "onchange", "onsubmit", "Its handler runs when the element is clicked."],
        ["M", "The tree of objects through which JavaScript accesses and changes a page is the", "DOM", "URL", "ISP", "CPU", "Document Object Model."],
        ["M", "Checking that a form has been filled correctly before it is sent is called", "form validation", "compilation", "hosting", "indexing", "JavaScript can check fields in the browser."],
        ["M", "CSS rules that apply only at particular screen widths are written using", "media queries", "hyperlinks", "meta keywords", "cookies", "They begin with @media."],
        ["H", "Which technique helps to make a page layout fluid?", "Setting widths in percentages", "Fixing all widths in pixels", "Using tables for every layout", "Removing the viewport tag", "Relative units scale with the screen."],
        ["H", "In JavaScript, the statement that changes the text inside a selected element is", "element.innerHTML = 'text'", "element.print('text')", "element.href = 'text'", "element.load('text')", "innerHTML sets the content of the element."],
        ["H", "Designing first for small screens and then enlarging for bigger ones is the", "mobile-first approach", "waterfall approach", "desktop-only approach", "legacy approach", "It suits an audience that browses mainly on phones."],
      ],
      jamb: [
        ["M", "Which of the following is a front-end framework used for responsive design?", "Bootstrap", "MySQL", "Oracle", "Linux", "Bootstrap supplies a responsive grid and components."],
        ["H", "JavaScript that runs in the user's browser is described as", "client-side scripting", "server-side scripting", "machine language", "markup", "It executes on the client rather than the server."],
      ],
    },
    {
      week: 2,
      title: "Advanced Database Management: SQL Basics, Queries and Reports",
      subtopics: ["Relational database concepts", "SQL data definition and manipulation", "Queries with SELECT", "Reports and good database design"],
      objectives: ["Explain tables, keys and relationships", "Write SQL statements to create tables and insert, update and delete records", "Write SELECT queries with conditions, sorting and aggregate functions", "Explain reports and the basics of good database design"],
      lesson: {
        title: "Talking to Databases with SQL",
        summary: "The structured query language for creating, changing and questioning relational databases.",
        minutes: 80,
        notes: `## Relational databases
A **database** is an organised collection of related data; a **database management system (DBMS)** — MySQL, PostgreSQL, Oracle, Microsoft Access, SQL Server, SQLite — manages it.

- A **table (relation)** holds data about one kind of thing.
- A **record (row, tuple)** is one entry; a **field (column, attribute)** is one item of data.
- A **primary key** uniquely identifies each record (e.g. AdmissionNo).
- A **foreign key** is a field that refers to the primary key of another table, creating a **relationship** (one-to-one, one-to-many, many-to-many).

## SQL
**SQL (Structured Query Language)** is the standard language for relational databases.

| Group | Statements | Purpose |
|---|---|---|
| **DDL** — data definition | CREATE, ALTER, DROP | define structures |
| **DML** — data manipulation | INSERT, UPDATE, DELETE, SELECT | work with data |
| **DCL** — data control | GRANT, REVOKE | permissions |

### Creating a table
CREATE TABLE Students (AdmNo INT PRIMARY KEY, Name VARCHAR(50), Class VARCHAR(5), Score INT);

### Changing data
INSERT INTO Students VALUES (101, 'Ada Obi', 'SS3', 78);
UPDATE Students SET Score = 82 WHERE AdmNo = 101;
DELETE FROM Students WHERE AdmNo = 101;

**Warning:** UPDATE or DELETE without WHERE affects **every** record.

## Queries
A **query** retrieves data that meet stated conditions.

SELECT Name, Score FROM Students WHERE Score >= 50 ORDER BY Score DESC;

| Clause | Purpose |
|---|---|
| SELECT | the fields wanted (* means all) |
| FROM | the table |
| WHERE | the condition |
| ORDER BY | sorting — ASC (default) or DESC |
| GROUP BY | groups rows for aggregate functions |
| HAVING | a condition on groups |

### Conditions
=, <>, <, >, <=, >=; **AND**, **OR**, **NOT**; **BETWEEN** 40 AND 60; **IN** ('SS1', 'SS2'); **LIKE** 'A%' (names starting with A; % stands for any characters); IS NULL.

### Aggregate functions
**COUNT**, **SUM**, **AVG**, **MAX**, **MIN**.
SELECT Class, AVG(Score) FROM Students GROUP BY Class;

### Joining tables
SELECT Students.Name, Fees.Amount FROM Students INNER JOIN Fees ON Students.AdmNo = Fees.AdmNo;

**DISTINCT** removes duplicate values: SELECT DISTINCT Class FROM Students;

## Reports
A **report** is a **formatted, printable presentation** of data from tables or queries, often with **grouping, totals and headings** — class lists, result sheets, fee statements, sales summaries. Report tools in a DBMS (or spreadsheet and business-intelligence software) build them from queries.

## Forms
A **form** is a screen for entering and editing records conveniently.

## Good design
- one table per subject; avoid repeating data — **normalisation** reduces **redundancy** and **anomalies**
- choose correct **data types** and a primary key for every table
- enforce **integrity** — validation rules; referential integrity between tables
- control **access** with user accounts and permissions
- **back up** regularly
- **indexes** speed up searching

## Advantages of a DBMS
less duplication; consistency; shared access; security; fast retrieval; easier backup and reporting.`,
        examples: `**Example 1.** Write a query to list the names of all students in SS3. *Solution:* **SELECT Name FROM Students WHERE Class = 'SS3';**

**Example 2.** Which SQL statement changes existing records? *Solution:* **UPDATE**.

**Example 3.** What does SELECT COUNT(*) FROM Students return? *Solution:* The **number of records** in the Students table.`,
      },
      questions: [
        ["E", "SQL stands for", "Structured Query Language", "Simple Question Logic", "System Quality Level", "Sequential Query Link", "It is the standard language for relational databases."],
        ["E", "The SQL statement used to retrieve data from a table is", "SELECT", "INSERT", "DROP", "GRANT", "SELECT returns the records that match a query."],
        ["E", "A field that uniquely identifies each record in a table is the", "primary key", "foreign key", "report", "form", "No two records share its value."],
        ["M", "The SQL clause used to state a condition is", "WHERE", "ORDER BY", "FROM", "INTO", "It filters the records returned."],
        ["M", "The SQL statement that adds a new record to a table is", "INSERT INTO", "UPDATE", "ALTER TABLE", "SELECT", "It supplies values for a new row."],
        ["M", "To arrange query results from highest to lowest score, use", "ORDER BY Score DESC", "GROUP BY Score", "WHERE Score DESC", "SORT Score", "DESC sorts in descending order."],
        ["M", "The aggregate function that returns the mean of a numeric field is", "AVG", "SUM", "COUNT", "MAX", "AVG calculates the average."],
        ["H", "The query SELECT Name FROM Students WHERE Name LIKE 'A%'; returns", "names beginning with A", "names ending with A", "names containing exactly one A", "all names", "The percent sign stands for any characters after A."],
        ["H", "A field in one table that refers to the primary key of another table is a", "foreign key", "candidate key", "composite report", "query", "It creates a relationship between the tables."],
        ["H", "Running DELETE FROM Students; without a WHERE clause will", "remove every record in the table", "delete the table structure", "delete only the first record", "produce no effect", "All rows are deleted but the table remains."],
      ],
      jamb: [
        ["M", "CREATE, ALTER and DROP belong to the group of SQL statements known as", "data definition language", "data manipulation language", "data control language", "transaction control language", "They define and change database structures."],
        ["H", "The process of organising tables to reduce redundancy and avoid update anomalies is", "normalisation", "indexing", "encryption", "replication", "Data are split into related tables."],
      ],
    },
    {
      week: 3,
      title: "Networking III: Network Security and VPNs",
      subtopics: ["Threats to networks", "Security measures and devices", "Encryption and authentication", "Virtual private networks"],
      objectives: ["Identify common threats to networks", "Describe measures and devices used to secure networks", "Explain encryption and authentication", "Explain how a VPN works and its uses"],
      lesson: {
        title: "Defending the Network",
        summary: "The dangers that networks face and the tools — including VPNs — used to protect them.",
        minutes: 40,
        notes: `## Network security
**Network security** is the protection of a network and its data from **unauthorised access, misuse, damage and disruption**. Its goals are the **CIA triad**:
- **Confidentiality** — only authorised people can see the data
- **Integrity** — data are not altered wrongly
- **Availability** — systems are there when needed

## Threats
| Threat | Description |
|---|---|
| **malware** | viruses, worms, Trojan horses, spyware, ransomware |
| **phishing** | fake messages or sites that trick users into revealing passwords or bank details |
| **hacking** | gaining unauthorised access |
| **denial of service (DoS / DDoS)** | flooding a server with traffic so that it cannot serve real users |
| **man-in-the-middle attack** | secretly intercepting communication between two parties |
| **sniffing / eavesdropping** | capturing data travelling on a network |
| **spoofing** | pretending to be a trusted device or person |
| **brute-force attack** | trying many passwords until one works |
| **social engineering** | manipulating people into breaking security |
| **insider threats** | misuse by staff |

## Security measures
- **firewall** — hardware or software that **filters traffic** between a trusted network and an untrusted one according to rules
- **antivirus / anti-malware** software, kept up to date
- **strong passwords** and **multi-factor authentication** (something you know, have or are)
- **encryption**
- **intrusion detection and prevention systems (IDS / IPS)**
- **access control** — user accounts, permissions, the principle of least privilege
- **software updates and patches**
- **secure Wi-Fi** — WPA2 or WPA3 encryption; change default router passwords; hide or limit the network
- **network segmentation** — VLANs separate groups
- **backups**; physical security of equipment
- **user education**

## Encryption and authentication
**Encryption** converts readable **plaintext** into unreadable **ciphertext** using a **key**; **decryption** reverses it.
- **Symmetric** encryption uses the **same key** to encrypt and decrypt (fast; e.g. AES).
- **Asymmetric (public-key)** encryption uses a **public key** to encrypt and a **private key** to decrypt (e.g. RSA).
- **HTTPS** uses **SSL/TLS** to encrypt web traffic — shown by a padlock in the browser.
- A **digital certificate** proves the identity of a website; a **digital signature** proves who sent a message and that it has not been altered.

**Authentication** confirms **who** a user is; **authorisation** decides **what** the user may do.

## Virtual private networks
A **virtual private network (VPN)** creates a **secure, encrypted "tunnel"** across a public network such as the internet, so that data travel as if on a private network.

### How it works
1. The VPN client on the device connects to a **VPN server**.
2. The user is **authenticated**.
3. All traffic is **encrypted** and sent through the tunnel.
4. The server forwards it; outsiders see only the server's address.

### Types
- **remote-access VPN** — connects an individual to an organisation's network (working from home)
- **site-to-site VPN** — joins two offices' networks
Protocols include IPsec, OpenVPN, WireGuard and SSL/TLS.

### Uses and advantages
secure **remote working**; safe use of **public Wi-Fi**; linking branches cheaply; **privacy** — hides the user's IP address.

### Limitations
may **slow** the connection; depends on the trustworthiness of the provider; does not stop malware or phishing; can be misused to hide wrongdoing.

## Law and ethics
Unauthorised access, identity theft and online fraud are offences under Nigeria's **Cybercrimes Act (2015)**. An **ethical hacker** tests systems **with permission** to find weaknesses.`,
        examples: `**Example 1.** What is the function of a firewall? *Solution:* It **filters traffic** entering and leaving a network according to security rules.

**Example 2.** Distinguish authentication from authorisation. *Solution:* **Authentication** verifies identity; **authorisation** determines permitted actions.

**Example 3.** State one use of a VPN. *Solution:* **Secure remote access** to an organisation's network over the internet.`,
      },
      questions: [
        ["E", "A device or program that filters traffic between a trusted and an untrusted network is a", "firewall", "modem", "hub", "repeater", "It blocks traffic that breaks its rules."],
        ["E", "VPN stands for", "Virtual Private Network", "Verified Public Node", "Visual Protocol Network", "Variable Packet Number", "It creates a secure tunnel over a public network."],
        ["E", "Fraudulent messages designed to trick users into revealing passwords are", "phishing", "patching", "pinging", "parsing", "They imitate trusted organisations."],
        ["M", "The security goal that ensures data is seen only by authorised persons is", "confidentiality", "availability", "integrity", "scalability", "It is one part of the CIA triad."],
        ["M", "An attack that floods a server with traffic so that legitimate users cannot reach it is", "a denial-of-service attack", "phishing", "sniffing", "a brute-force attack", "The server is overwhelmed."],
        ["M", "Encryption that uses the same key to encrypt and decrypt is", "symmetric", "asymmetric", "public-key", "hashing", "Both parties share one secret key."],
        ["M", "A padlock in the browser's address bar indicates that the site uses", "HTTPS", "FTP", "Telnet", "POP3", "Traffic is encrypted with SSL/TLS."],
        ["H", "A VPN that connects the networks of two branch offices over the internet is", "a site-to-site VPN", "a remote-access VPN", "a personal hotspot", "a peer-to-peer LAN", "It joins whole networks rather than single users."],
        ["H", "Confirming the identity of a user before granting access is", "authentication", "authorisation", "accounting", "auditing", "Authorisation then decides what the user may do."],
        ["H", "In public-key encryption, a message encrypted with the recipient's public key is decrypted with", "the recipient's private key", "the sender's public key", "the sender's private key", "any public key", "Only the matching private key can decrypt it."],
      ],
      jamb: [
        ["M", "Software that secretly monitors a user's activities and sends the information to someone else is", "spyware", "firmware", "freeware", "middleware", "It is a form of malware."],
        ["H", "Requiring a password together with a code sent to the user's phone is an example of", "two-factor authentication", "symmetric encryption", "packet filtering", "port forwarding", "Two different kinds of proof are demanded."],
      ],
    },
    {
      week: 4,
      title: "Digital Project Management",
      subtopics: ["Meaning and stages of project management", "Project planning tools and techniques", "Digital tools: Trello and Microsoft Project", "Teamwork and collaboration"],
      objectives: ["Explain project management and its stages", "Describe planning tools such as the Gantt chart and work breakdown structure", "Describe the features of Trello and Microsoft Project", "Explain the principles of effective teamwork"],
      lesson: {
        title: "Managing Projects with Digital Tools",
        summary: "Planning, organising and tracking work so that a project finishes on time, within budget and to standard.",
        minutes: 40,
        notes: `## Project management
A **project** is a **temporary piece of work with a definite start and end**, undertaken to produce a **unique** product or result — a website, a school database, a mobile app. **Project management** is the **planning, organising and controlling of resources** to achieve the project's goals.

### The triple constraint
Every project balances **scope** (what is to be done), **time** and **cost**; changing one affects the others, and all affect **quality**.

### Stages (project life cycle)
1. **Initiation** — define the goal; check feasibility; appoint the project manager
2. **Planning** — break down tasks; estimate time and cost; assign people; identify risks
3. **Execution** — carry out the work
4. **Monitoring and control** — track progress; manage changes and problems
5. **Closure** — hand over; review lessons learnt

## Planning tools and techniques
| Tool | Purpose |
|---|---|
| **work breakdown structure (WBS)** | divides the project into smaller, manageable tasks |
| **Gantt chart** | a horizontal bar chart showing **tasks against time** — start, duration, overlap |
| **milestones** | key points or deliverables that mark progress |
| **critical path method (CPM) / PERT** | finds the longest chain of dependent tasks, which fixes the shortest possible project time |
| **Kanban board** | cards moved through columns such as To Do, Doing, Done |
| **budget** | planned costs |
| **risk register** | lists risks, their likelihood, impact and responses |
| **SMART goals** | Specific, Measurable, Achievable, Relevant, Time-bound |

A task that must finish before another can start is a **dependency**.

## Digital tools
### Trello
A web-based tool built on the **Kanban** method.
- **boards** for projects; **lists** for stages; **cards** for tasks
- cards carry descriptions, **checklists**, **due dates**, attachments, labels and comments
- cards are **dragged** from list to list as work progresses
- members are **assigned** to cards; everyone sees updates in real time
- simple, visual and free for small teams

### Microsoft Project
A fuller **scheduling** application.
- task lists with durations and **dependencies**
- automatic **Gantt charts** and **critical path**
- **resource** allocation and levelling
- **cost** tracking and **baselines** to compare plan with actual
- reports and dashboards
- suited to large, complex projects

### Other tools
Asana, Jira (popular for agile software teams), Monday.com, ClickUp, Notion; spreadsheets; communication tools — Slack, Microsoft Teams, Zoom, WhatsApp; file sharing — Google Drive, OneDrive; version control — Git and GitHub.

## Teamwork
### Roles
**project manager**, team members (analysts, designers, developers, testers), **client / sponsor**, and other **stakeholders**.

### Principles of effective teamwork
- clear **goals** and **roles**
- open **communication**; regular meetings and updates
- **trust** and respect
- fair **division of labour** according to strengths
- **accountability** for tasks and deadlines
- constructive handling of **conflict**
- shared documents and a single source of truth
- recognising contributions

### Benefits of digital tools for teams
real-time collaboration from different places; transparency of who is doing what; automatic reminders; records of decisions; easier reporting.

## Why projects fail
unclear requirements; poor planning; **scope creep** (uncontrolled additions); weak communication; inadequate resources; unrealistic deadlines; lack of user involvement.`,
        examples: `**Example 1.** What does a Gantt chart show? *Solution:* **Tasks plotted as bars against time**, with their start dates and durations.

**Example 2.** Name the three elements of a Trello workspace. *Solution:* **Boards, lists and cards**.

**Example 3.** What is scope creep? *Solution:* The **uncontrolled growth of a project's requirements** after work has begun.`,
      },
      questions: [
        ["E", "A temporary piece of work with a definite start and end, producing a unique result, is a", "project", "routine", "process", "procedure", "It is not a continuing operation."],
        ["E", "A bar chart that shows project tasks against time is a", "Gantt chart", "pie chart", "scatter diagram", "flowchart", "Each bar shows a task's start and duration."],
        ["E", "In Trello, an individual task is represented by a", "card", "cell", "slide", "record", "Cards sit in lists on a board."],
        ["M", "The stage of a project in which tasks, time and costs are worked out is", "planning", "closure", "execution", "initiation", "Planning follows initiation."],
        ["M", "Breaking a project into smaller, manageable tasks produces a", "work breakdown structure", "risk register", "balance sheet", "data dictionary", "It is the basis for scheduling."],
        ["M", "The three constraints that every project must balance are", "scope, time and cost", "hardware, software and people", "input, process and output", "planning, coding and testing", "They form the project management triangle."],
        ["M", "Trello is based on the method known as", "Kanban", "waterfall", "PERT", "prototyping", "Cards move across columns showing their status."],
        ["H", "The longest sequence of dependent tasks, which determines the minimum duration of a project, is the", "critical path", "baseline", "milestone", "backlog", "Any delay on it delays the whole project."],
        ["H", "The uncontrolled addition of new requirements to a project after it has started is", "scope creep", "resource levelling", "risk transfer", "version control", "It is a common cause of delay and overspending."],
        ["H", "A feature of Microsoft Project that Trello's basic boards do not provide automatically is", "critical path and resource scheduling", "cards and lists", "comments on tasks", "due dates", "MS Project is a full scheduling tool."],
      ],
      jamb: [
        ["M", "In SMART goals, the letter M stands for", "Measurable", "Manageable", "Mandatory", "Minimal", "Progress must be capable of being measured."],
        ["H", "A system such as Git that records changes to files so that earlier versions can be recovered is a", "version control system", "database management system", "content delivery network", "firewall", "It lets a team work on the same code safely."],
      ],
    },
    {
      week: 6,
      title: "Emerging Technologies III: Quantum Computing and Nanotechnology",
      subtopics: ["Meaning of quantum computing", "Qubits, superposition and entanglement", "Meaning of nanotechnology", "Applications, benefits and concerns"],
      objectives: ["Explain quantum computing and how it differs from classical computing", "Explain qubits, superposition and entanglement in simple terms", "Explain nanotechnology and the nanoscale", "State applications, benefits and concerns of both technologies"],
      lesson: {
        title: "Computing and Engineering at the Smallest Scales",
        summary: "Two frontier technologies: computers that use quantum effects, and materials engineered atom by atom.",
        minutes: 40,
        notes: `## Quantum computing
**Quantum computing** is a kind of computing that uses the **principles of quantum mechanics** — the physics of atoms and sub-atomic particles — to process information.

### Classical bits and qubits
| | Classical computer | Quantum computer |
|---|---|---|
| unit | **bit** | **qubit** (quantum bit) |
| states | 0 **or** 1 | 0, 1, or a **combination of both at once** |
| processing | one state at a time | many possibilities explored together |

### Key ideas
- **Superposition** — a qubit can be in a blend of 0 and 1 **simultaneously** until it is measured. With n qubits, 2 to the power n states can be represented at once.
- **Entanglement** — two qubits become linked so that the state of one **instantly relates** to the state of the other, however far apart.
- **Interference** — used to strengthen correct answers and cancel wrong ones.
- **Decoherence** — qubits are fragile; heat and vibration destroy their quantum state, causing errors.

### How qubits are made
superconducting circuits cooled to near **absolute zero**, trapped ions, photons. Machines are built by IBM, Google and others, and reached through the cloud.

### Potential applications
- **cryptography** — could break today's public-key encryption; hence research into **quantum-safe** encryption
- **drug discovery and chemistry** — simulating molecules
- **optimisation** — logistics, traffic, finance
- **artificial intelligence** — faster machine learning
- **weather and climate modelling**
- materials science

### Limitations
very **expensive**; need extreme cooling; **error-prone**; few qubits so far; not suited to everyday tasks — they will **complement**, not replace, ordinary computers.

## Nanotechnology
**Nanotechnology** is the **study, design and manipulation of matter at the nanoscale** — roughly **1 to 100 nanometres**. One **nanometre (nm)** is **one billionth of a metre** (10 to the power −9 m); a human hair is about 80 000 nm wide.

At this scale materials show **new properties** — strength, colour, conductivity and reactivity change.

### Nanomaterials
**carbon nanotubes** (very strong, light and conductive); **graphene** (a sheet of carbon one atom thick); **nanoparticles** of silver, gold and titanium dioxide; **quantum dots**.

### Applications
| Field | Use |
|---|---|
| **electronics and computing** | ever-smaller transistors in processor chips (a few nanometres); denser memory; flexible displays |
| **medicine** | targeted drug delivery; cancer treatment; diagnostic sensors; antibacterial dressings (nano-silver) |
| **energy** | more efficient solar cells; better batteries |
| **materials** | stronger, lighter composites; scratch- and stain-resistant coatings; self-cleaning glass |
| **environment** | water purification filters; pollution sensors |
| **agriculture and food** | nano-fertilisers; smart packaging |
| **cosmetics** | sunscreens |

### Benefits
smaller, faster, cheaper devices; better health care; cleaner energy and water; stronger materials.

### Concerns
possible **toxicity** of nanoparticles to health and the environment; high cost; lack of regulation; ethical and privacy issues (tiny sensors); unequal access.

## Other emerging technologies (recap)
artificial intelligence; blockchain; 5G; robotics; augmented and virtual reality; 3-D printing; biotechnology.

## Skills for the future
mathematics and physics; programming; data science; critical thinking; lifelong learning.`,
        examples: `**Example 1.** How does a qubit differ from a bit? *Solution:* A bit is **0 or 1**; a qubit can be in a **superposition of 0 and 1 at the same time**.

**Example 2.** What is a nanometre? *Solution:* **One billionth of a metre** (10 to the power −9 m).

**Example 3.** Give one application each of quantum computing and nanotechnology. *Solution:* Quantum computing — **drug discovery by simulating molecules**; nanotechnology — **targeted drug delivery**.`,
      },
      questions: [
        ["E", "The basic unit of information in a quantum computer is the", "qubit", "byte", "pixel", "packet", "It is short for quantum bit."],
        ["E", "Nanotechnology deals with matter at the scale of about", "1 to 100 nanometres", "1 to 100 metres", "1 to 100 kilometres", "1 to 100 centimetres", "A nanometre is a billionth of a metre."],
        ["E", "One nanometre is equal to", "one billionth of a metre", "one thousandth of a metre", "one millionth of a metre", "one hundredth of a metre", "It is 10 to the power −9 m."],
        ["M", "The ability of a qubit to be in a combination of 0 and 1 at the same time is", "superposition", "entanglement", "decoherence", "encryption", "The state is fixed only when measured."],
        ["M", "The quantum phenomenon in which two qubits remain linked however far apart they are is", "entanglement", "superposition", "interference", "tunnelling in transistors", "The state of one is related to that of the other."],
        ["M", "A sheet of carbon one atom thick is called", "graphene", "silicon", "graphite rod", "fibreglass", "It is extremely strong and conductive."],
        ["M", "An application of nanotechnology in medicine is", "targeted drug delivery", "bone setting by plaster", "blood transfusion", "X-ray film development", "Nanoparticles carry drugs to diseased cells."],
        ["H", "A register of 3 qubits in superposition can represent how many states at once?", "8", "3", "6", "9", "2 to the power 3."],
        ["H", "Quantum computers are a concern for today's internet security because they could", "break widely used public-key encryption", "delete all websites", "slow down the internet", "replace all routers", "Some encryption relies on problems quantum computers could solve quickly."],
        ["H", "The loss of a qubit's quantum state through interaction with its surroundings is", "decoherence", "superposition", "interference", "compilation", "It is why qubits need extreme cooling and isolation."],
      ],
      jamb: [
        ["M", "Which of the following is a nanomaterial?", "Carbon nanotube", "Copper cable", "Glass sheet", "Steel rod", "Carbon nanotubes are cylinders a few nanometres wide."],
        ["H", "Many quantum computers must be operated at temperatures near", "absolute zero", "room temperature", "the boiling point of water", "1000 °C", "Extreme cold keeps superconducting qubits stable."],
      ],
    },
  ],
};

export const ss3t3: TermPlan = {
  classCode: "SS3",
  term: 3,
  topics: [
    {
      week: 1,
      title: "Comprehensive Revision: Hardware, Software and Data",
      subtopics: ["Computer systems and hardware", "Software and operating systems", "Data representation and logic", "Data management"],
      objectives: ["Summarise the components of a computer system", "Summarise the types and functions of software", "Carry out number-base conversions and evaluate logic gates", "Recall the key ideas of data management"],
      lesson: {
        title: "Revising the Major Areas I",
        summary: "An overview of hardware, software, data representation and data management for the final examinations.",
        minutes: 40,
        notes: `## Computer systems
**Input → Process → Output**, with **storage** and **control**.
- **Generations:** vacuum tubes → transistors → integrated circuits → microprocessors (VLSI) → artificial intelligence.
- **Classification:** by size (micro, mini, mainframe, super); by purpose (general, special); by type (analogue, digital, hybrid).
- **CPU:** control unit, ALU, registers; speed in GHz.
- **Memory:** RAM (volatile), ROM (non-volatile), cache; **secondary storage** — HDD, SSD, flash, optical discs, cloud.
- **Ports and peripherals;** the **motherboard**; the **booting** process (cold and warm boot).

## Software
- **System software:** operating systems (Windows, Linux, macOS, Android), utilities (antivirus, backup, disk tools), translators, device drivers.
- **Functions of an operating system:** memory, process, file and device management; user interface (GUI, command line); security.
- **Application software:** word processing, spreadsheets (cells, formulas such as =SUM(A1:A5), charts), databases, presentation, graphics, browsers.
- **Licences:** proprietary, open-source, freeware, shareware.

## Data representation
| Conversion | Method |
|---|---|
| decimal → binary | divide by 2 repeatedly; read remainders upward |
| binary → decimal | add place values 1, 2, 4, 8, 16 … |
| binary → octal | group in threes |
| binary → hexadecimal | group in fours |
- Binary arithmetic: 1 + 1 = 10; 1 + 1 + 1 = 11.
- **ASCII**, **Unicode**; bits, bytes, KB, MB, GB.

## Logic gates
| Gate | Output is 1 when |
|---|---|
| **AND** | all inputs are 1 |
| **OR** | at least one input is 1 |
| **NOT** | the input is 0 |
| **NAND** | not all inputs are 1 |
| **NOR** | all inputs are 0 |
| **XOR** | the inputs differ |
Truth tables list every combination of inputs with the output.

## Data management
- **Data** are raw facts; **information** is processed data.
- **File organisation:** serial, sequential, indexed-sequential, random (direct).
- **Data processing cycle:** collection, preparation, input, processing, output, storage.
- **Database terms:** field, record, table, key, query, form, report.
- **Data security:** backup, passwords, encryption; **data integrity** and validation.

## Examination hints
define terms exactly; give two or three points for "state" questions; label diagrams; show the working in conversions.`,
        examples: `**Example 1.** Convert binary 110110 to decimal. *Solution:* 32 + 16 + 4 + 2 = **54**.

**Example 2.** What is the output of an AND gate with inputs 1 and 0? *Solution:* **0**.

**Example 3.** Distinguish data from information. *Solution:* **Data** are raw facts; **information** is data processed into meaningful form.`,
      },
      questions: [
        ["E", "Processed data that is meaningful to the user is", "information", "a bit", "a program", "hardware", "Data become information after processing."],
        ["E", "The output of an OR gate is 0 only when", "all inputs are 0", "all inputs are 1", "the inputs differ", "one input is 1", "Any 1 input gives an output of 1."],
        ["E", "Which of these is an example of an operating system?", "Linux", "Microsoft Excel", "Google Chrome", "CorelDRAW", "It manages hardware and software resources."],
        ["M", "The binary number 110110 is equal to decimal", "54", "46", "58", "27", "32 + 16 + 4 + 2 = 54."],
        ["M", "The logic gate whose output is 1 only when both inputs are 1 is", "AND", "OR", "NOR", "XOR", "Both conditions must be true."],
        ["M", "Starting a computer that was completely switched off is called", "cold booting", "warm booting", "formatting", "debugging", "A warm boot restarts a running computer."],
        ["M", "The spreadsheet formula =SUM(A1:A5) will", "add the values in cells A1 to A5", "count the cells A1 and A5", "multiply A1 by A5", "find the average of A1 and A5", "SUM adds a range of cells."],
        ["H", "The hexadecimal equivalent of binary 10111100 is", "BC", "CB", "B4", "5E", "1011 is B and 1100 is C."],
        ["H", "The output of a NAND gate with both inputs equal to 1 is", "0", "1", "2", "undefined", "NAND is the inverse of AND."],
        ["H", "In binary arithmetic, 1011 + 110 equals", "10001", "1101", "10101", "1111", "11 + 6 = 17, which is 10001 in binary."],
      ],
      jamb: [
        ["M", "The generation of computers that used integrated circuits was the", "third", "first", "second", "fifth", "Transistors marked the second and microprocessors the fourth."],
        ["H", "An XOR gate gives an output of 1 when", "the two inputs are different", "both inputs are 1", "both inputs are 0", "the inputs are the same", "Exclusive OR is true for unequal inputs."],
      ],
    },
    {
      week: 2,
      title: "Comprehensive Revision: Programming, Networks and Digital Society",
      subtopics: ["Algorithms and programming", "Networks and the internet", "Cybersecurity and ethics", "ICT in society and emerging technologies"],
      objectives: ["Trace simple algorithms and programs", "Recall the key ideas of networking and the internet", "Recall the principles of cybersecurity and digital ethics", "Discuss the effects of ICT and emerging technologies on society"],
      lesson: {
        title: "Revising the Major Areas II",
        summary: "An overview of programming, networking, security and the social side of ICT for the final examinations.",
        minutes: 40,
        notes: `## Algorithms and programming
- **Algorithm**, **pseudocode**, **flowchart**; properties — finite, clear, effective, with input and output.
- **Program development:** define the problem → design → code → test and debug → document → maintain.
- **Languages:** machine language, assembly (low level); high-level (Python, Java, C++, BASIC); **translators** — compiler, interpreter, assembler.
- **Constructs:** sequence, selection, iteration.
- **Errors:** **syntax** (breaking the rules of the language), **logic** (wrong result), **run-time** (failure during execution, e.g. division by zero).
- **Data structures:** variables, arrays/lists; **functions**; **OOP** — class, object, inheritance, encapsulation, polymorphism.

### Tracing a loop
total = 0
for i in range(1, 5):
  total = total + i
print(total)
range(1, 5) gives 1, 2, 3, 4, so the output is **10**.

## Networks and the internet
- **Types:** PAN, LAN, MAN, WAN; client–server and peer-to-peer.
- **Topologies:** bus, star, ring, mesh, tree.
- **Media:** twisted pair, coaxial, fibre-optic; wireless — Wi-Fi, Bluetooth, microwave, satellite.
- **Devices:** NIC, hub, switch, router, modem, access point, repeater.
- **Addressing:** IP (IPv4, IPv6), MAC, DNS, DHCP; subnetting.
- **Protocols:** TCP/IP, HTTP/HTTPS, FTP, SMTP, POP3/IMAP.
- **Internet services:** WWW, e-mail, search engines, e-commerce, cloud, social media, video conferencing.
- **Web:** HTML tags, CSS, JavaScript; URL parts; browsers.

## Cybersecurity and ethics
- **Threats:** malware, phishing, hacking, identity theft, cyber-bullying, piracy.
- **Protection:** antivirus, firewalls, encryption, strong passwords, two-factor authentication, updates, backups, VPNs.
- **Laws:** Cybercrimes Act (2015); Nigeria Data Protection Act (2023); copyright law.
- **Ethics:** respect privacy; avoid plagiarism and piracy; netiquette; responsible use of social media and AI tools.
- **Health and safety:** ergonomics, eye strain, repetitive strain injury; e-waste.

## ICT in society
| Area | Use |
|---|---|
| education | e-learning, CBT, digital libraries |
| banking | ATMs, mobile and internet banking, fintech |
| health | telemedicine, electronic records |
| commerce | e-commerce, online payments |
| government | e-government, digital identity |
| agriculture | precision farming, market information |
**Effects:** new jobs and lost jobs; faster communication; the **digital divide**; privacy concerns.

## Emerging technologies
artificial intelligence and machine learning; **IoT**; **cloud** and virtualization; blockchain; robotics; 5G; augmented and virtual reality; quantum computing; nanotechnology.

## Careers
software developer, network engineer, database administrator, cybersecurity analyst, data analyst, web and UI/UX designer, cloud engineer, IT support.`,
        examples: `**Example 1.** What type of error is a missing colon in a Python if statement? *Solution:* a **syntax error**.

**Example 2.** Which network device forwards packets between different networks? *Solution:* a **router**.

**Example 3.** What is the digital divide? *Solution:* The **gap between those who have access to digital technology and those who do not**.`,
      },
      questions: [
        ["E", "An error caused by breaking the rules of a programming language is a", "syntax error", "logic error", "run-time error", "hardware fault", "The translator detects it."],
        ["E", "A network that covers a single building or school is a", "LAN", "WAN", "MAN", "satellite network", "Local area network."],
        ["E", "The device that connects different networks and directs packets between them is a", "router", "hub", "repeater", "monitor", "It chooses the route for each packet."],
        ["M", "A program that runs but gives a wrong result contains a", "logic error", "syntax error", "compile error", "power fault", "The reasoning of the program is faulty."],
        ["M", "The network topology in which every device is connected to a central device is", "star", "bus", "ring", "mesh", "A switch or hub is at the centre."],
        ["M", "The output of the Python code: total = 0; for i in range(1, 5): total = total + i; print(total) is", "10", "15", "4", "5", "range(1, 5) gives 1, 2, 3 and 4."],
        ["M", "Copying and using software without the owner's permission is", "piracy", "phishing", "debugging", "encryption", "It violates copyright."],
        ["H", "Division by zero during the execution of a program produces a", "run-time error", "syntax error", "logic design", "compile-time warning only", "The program fails while running."],
        ["H", "The transmission medium that carries data as pulses of light is", "fibre-optic cable", "twisted-pair cable", "coaxial cable", "microwave", "It offers very high speed over long distances."],
        ["H", "The gap between people who have access to digital technology and those who do not is the", "digital divide", "digital signature", "digital footprint", "data redundancy", "It separates the connected from the unconnected."],
      ],
      jamb: [
        ["M", "A network in which each computer can act as both client and server is", "peer-to-peer", "client–server", "mainframe-based", "a star backbone", "No dedicated server is needed."],
        ["H", "How many times will the loop for i in range(2, 11, 2) execute?", "5", "4", "9", "10", "The values of i are 2, 4, 6, 8 and 10."],
      ],
    },
    {
      week: 3,
      title: "Practical Project I: Building a Website, App or Database",
      subtopics: ["Choosing and planning a project", "Building a website", "Building a simple app or database", "Testing, documentation and presentation"],
      objectives: ["Plan a digital project from a clear problem statement", "Outline the steps in building a small website", "Outline the steps in building a simple app or database", "Test, document and present a project"],
      lesson: {
        title: "From Idea to Working Product",
        summary: "A guide to carrying out the final practical project: planning, building, testing and presenting.",
        minutes: 80,
        notes: `## Choosing a project
Pick a **real problem** in the school or community that a small digital product can solve.
- a **school or club website**
- a **student-records or library database**
- a **quiz, calculator or timetable app**
- an inventory system for a small shop

Write a **problem statement** and **objectives**: who will use it, and what it must do.

## Planning (apply the SDLC)
1. **Requirements** — list features ("must have" and "nice to have").
2. **Design** — sketch screens (**wireframes**); draw a **site map** or **flowchart**; design tables.
3. **Schedule** — a simple Gantt chart or Trello board with tasks and deadlines.
4. **Resources** — computer, software, internet, data.
5. **Roles** in a team — leader, designer, coder, tester, writer.

## Building a website
1. Create a **project folder** with sub-folders for images, CSS and scripts.
2. Write the **HTML** pages — index.html as the home page; use headings, paragraphs, lists, images, links, tables and forms.
3. Add a **CSS** file for colours, fonts and layout; make it **responsive**.
4. Add **JavaScript** for interactivity — menus, form validation.
5. Link the pages with a **navigation bar**.
6. **Test** in different browsers and on a phone.
7. **Publish** — upload to a web host and connect a **domain name** (optional).

**Qualities of a good site:** clear purpose; easy navigation; consistent design; readable text; fast loading; accurate content; accessibility.

## Building a simple app
- Use a language you know (Python) or a block-based builder (MIT App Inventor, Scratch).
- Design the **interface**; write **functions** for each feature; validate inputs; handle errors.
- Example: a CGPA or BMI calculator; a quiz that stores scores in a list and reports the total.

## Building a database
1. Identify the **entities** (e.g. Students, Classes, Fees).
2. Define **fields**, **data types** and a **primary key** for each table.
3. Create **relationships** with foreign keys.
4. Enter sample **records**; apply **validation rules**.
5. Create **queries** (e.g. students owing fees), **forms** for data entry and **reports**.
Tools: Microsoft Access, LibreOffice Base, MySQL, SQLite.

## Testing
- Prepare **test data**: **normal** (valid), **boundary/extreme** (at the limits) and **erroneous/abnormal** (invalid).
- Record a **test plan**: test, expected result, actual result, action.
- Fix bugs and retest.
- Let real users try it (**user acceptance testing**).

## Documentation
- **User documentation** — how to install and use.
- **Technical documentation** — design, code listing, table structures, test results.
- A **project report**: title, introduction and problem, objectives, design, implementation, testing, conclusion, references.

## Presentation
Demonstrate the product; explain the problem, the design choices and what you learnt; answer questions; acknowledge sources.

## Assessment criteria
functionality; design and usability; originality; correctness of code or structure; testing; documentation; teamwork; presentation.

## Integrity
Do your own work; credit any code, images or templates used; respect copyright and licences.`,
        examples: `**Example 1.** What is a wireframe? *Solution:* A **simple sketch of a screen's layout**, made before building.

**Example 2.** Name the three kinds of test data. *Solution:* **Normal, boundary (extreme) and erroneous (abnormal)** data.

**Example 3.** What file is normally the home page of a website? *Solution:* **index.html**.`,
      },
      questions: [
        ["E", "The home page of a website is usually saved as", "index.html", "home.doc", "main.xls", "start.ppt", "Web servers look for the index file first."],
        ["E", "A simple sketch showing the layout of a screen before it is built is a", "wireframe", "firewall", "framework licence", "spreadsheet", "It is a design aid."],
        ["E", "Instructions that tell people how to use a finished product are", "user documentation", "source code", "test data", "wire diagrams", "They are written for the end user."],
        ["M", "Test data that lie at the very limits of what is acceptable are", "boundary data", "normal data", "erroneous data", "random data", "They check the edges of the valid range."],
        ["M", "In a database project, the first step is to", "identify the entities and their fields", "print the reports", "enter all the records", "back up the data", "Design comes before data entry."],
        ["M", "Testing a product with the people who will actually use it is", "user acceptance testing", "unit testing", "white-box testing", "compilation", "Users confirm that it meets their needs."],
        ["M", "A statement that describes the need a project is meant to meet is the", "problem statement", "test plan", "conclusion", "bibliography", "It guides the whole project."],
        ["H", "Entering the age '-5' to check that a form rejects it is a test using", "erroneous data", "normal data", "boundary data", "live data", "Invalid input should be refused."],
        ["H", "The name by which a website is found on the internet, such as example.com, is its", "domain name", "IP class", "protocol", "wireframe", "It is linked to the site's host."],
        ["H", "Using another person's code or images in a project without acknowledgement is", "plagiarism", "debugging", "collaboration", "prototyping", "Sources must be credited."],
      ],
      jamb: [
        ["M", "Which of the following is a database management system suitable for a school records project?", "Microsoft Access", "Adobe Photoshop", "Microsoft PowerPoint", "Notepad", "Access provides tables, queries, forms and reports."],
        ["H", "A test plan normally records, for each test, the test data, the expected result and the", "actual result", "programmer's age", "cost of the computer", "name of the school", "Comparing expected with actual results reveals errors."],
      ],
    },
    {
      week: 4,
      title: "Practical Project II: Cybersecurity Simulation and IoT Demonstration",
      subtopics: ["Planning a cybersecurity simulation", "Simulated attacks and defences", "Planning an IoT demonstration", "Building and presenting an IoT prototype"],
      objectives: ["Plan a safe and ethical cybersecurity simulation", "Demonstrate common attacks and the corresponding defences", "Plan a simple IoT system", "Build, test and present an IoT prototype"],
      lesson: {
        title: "Security and IoT in Practice",
        summary: "Two hands-on projects: simulating attacks and defences safely, and demonstrating a simple connected device.",
        minutes: 80,
        notes: `## Part A — Cybersecurity simulation
A **simulation** imitates a real situation in a **safe, controlled environment** so that learners can practise without causing harm.

### Ethics and rules
- Work only on **systems you own or have written permission to test** — unauthorised access is an offence under the **Cybercrimes Act**.
- Use an **isolated lab**: virtual machines or a network simulator (e.g. Cisco Packet Tracer), not the school's live network.
- Do not use real personal data.
- Report weaknesses responsibly.

### Possible activities
| Activity | What it shows | Defence demonstrated |
|---|---|---|
| **phishing awareness exercise** | how fake e-mails and websites deceive — spotting wrong addresses, urgent language, suspicious links | checking the URL; never sharing passwords; reporting |
| **password strength test** | weak passwords are guessed in seconds | long passphrases; mixed characters; two-factor authentication |
| **firewall rules** in a simulator | blocking and allowing traffic by port and address | least-privilege rules |
| **Caesar-cipher encryption** | scrambling and recovering a message with a key | importance of encryption and key secrecy |
| **malware scan** of a test file | how antivirus detects threats | updates and scanning |
| **backup and restore drill** | recovery after simulated ransomware or deletion | the 3-2-1 rule |
| **Wi-Fi configuration** | securing a router | WPA2/WPA3; changing default passwords |
| **social-engineering role play** | manipulation by telephone or in person | verification procedures |

### The Caesar cipher
Each letter is shifted a fixed number of places. With a shift of 3, A becomes D, B becomes E: "CAT" becomes "FDW". To decrypt, shift back.

### The security cycle
**identify** assets and risks → **protect** → **detect** → **respond** → **recover**.

### Report
aim; set-up; steps; observations; lessons; recommendations for the school.

## Part B — IoT demonstration
### Planning
Choose a simple problem:
- automatic **street or security light** (light-dependent resistor)
- **temperature and humidity monitor**
- **water-tank level alarm**
- **motion-activated alarm** (PIR sensor)
- **smart irrigation** (soil-moisture sensor and pump)

Draw a **block diagram**: sensor → microcontroller → actuator / display → (internet dashboard).

### Components
| Component | Example |
|---|---|
| microcontroller | Arduino Uno, ESP32, Raspberry Pi |
| sensors | LDR, DHT11 (temperature/humidity), ultrasonic, PIR, soil moisture |
| actuators / outputs | LED, buzzer, relay, servo motor, LCD |
| connectivity | Wi-Fi (ESP32), Bluetooth module |
| others | breadboard, jumper wires, resistors, power supply |
Where hardware is unavailable, use a **simulator** such as Tinkercad Circuits or Wokwi.

### Building steps
1. Connect the circuit on a breadboard following the diagram.
2. Write the program: **read** the sensor; **compare** with a threshold; **switch** the output; **send** the reading to a dashboard.
3. Upload and **test**; adjust the threshold.
4. Observe, record readings and tabulate them.

### Logic of an automatic light
IF light level < threshold THEN switch LED ON ELSE switch LED OFF.

### Safety
low voltages only; check polarity; avoid short circuits; disconnect power before rewiring; secure the device's password and network.

### Presentation
explain the problem; show the block diagram; demonstrate the working device; discuss limitations, cost and possible improvements; relate it to **smart homes and smart cities**.`,
        examples: `**Example 1.** Encrypt "BAD" with a Caesar cipher of shift 2. *Solution:* **"DCF"**.

**Example 2.** Why must a cybersecurity simulation be done in an isolated lab? *Solution:* To **avoid harming real systems** and breaking the law.

**Example 3.** Which sensor suits an automatic street light? *Solution:* A **light-dependent resistor (LDR)**.`,
      },
      questions: [
        ["E", "A safe imitation of a real situation for practice is a", "simulation", "virus", "breach", "patch", "It allows learning without causing harm."],
        ["E", "A sensor commonly used to detect movement in an alarm project is the", "PIR sensor", "LDR", "thermistor", "microphone", "Passive infra-red sensors detect motion."],
        ["E", "Testing a computer system's security without permission is", "illegal and unethical", "recommended practice", "required by law", "a form of backup", "It is an offence under the Cybercrimes Act."],
        ["M", "Using a Caesar cipher with a shift of 3, the word CAT becomes", "FDW", "DBU", "ZXQ", "FCW", "C→F, A→D, T→W. Answer: FDW."],
        ["M", "A suitable tool for building and testing networks virtually is", "Cisco Packet Tracer", "Microsoft Word", "CorelDRAW", "Windows Media Player", "It simulates routers, switches and firewalls."],
        ["M", "In an automatic street-light project, the component that senses darkness is the", "light-dependent resistor", "buzzer", "relay", "servo motor", "Its resistance changes with light level."],
        ["M", "A sign that an e-mail may be a phishing attempt is", "an urgent demand to click a link and enter your password", "a known sender's correct address", "the absence of any link", "a greeting using your full name from your bank's app", "Urgency and suspicious links are warning signs."],
        ["H", "The correct order of the security cycle is", "identify, protect, detect, respond, recover", "recover, respond, detect, protect, identify", "protect, identify, recover, detect, respond", "detect, recover, identify, protect, respond", "Assets and risks are identified before protection."],
        ["H", "In an IoT irrigation prototype, the pump is switched on by the microcontroller through a", "relay", "light-dependent resistor", "soil-moisture sensor", "LCD screen", "A relay lets a low-power signal control a higher-power device."],
        ["H", "The diagram that shows the main parts of a system and how they connect, without circuit detail, is a", "block diagram", "truth table", "Gantt chart", "pie chart", "It is drawn at the planning stage."],
      ],
      jamb: [
        ["M", "Decrypt 'KHOOR', which was encrypted with a Caesar cipher of shift 3.", "HELLO", "JGNNQ", "NKRRU", "HOLLA", "Each letter is moved back three places."],
        ["H", "In a temperature-monitoring IoT system, the comparison of a reading with a set limit in the program is called a", "threshold check", "loop counter", "handshake", "checksum", "The output changes when the reading crosses the threshold."],
      ],
    },
  ],
};
