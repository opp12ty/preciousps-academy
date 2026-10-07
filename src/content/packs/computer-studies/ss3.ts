import type { TermPlan } from "../types";

/** SS3 Computer Studies — original Precious PS content aligned to the senior secondary syllabus (WAEC/NECO). */
export const ss3: TermPlan[] = [
  {
    classCode: "SS3",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Boolean algebra and logic circuits",
        subtopics: ["Laws of Boolean algebra", "De Morgan's theorems", "Simplifying Boolean expressions", "Half adder and full adder"],
        objectives: ["State the laws of Boolean algebra", "Apply De Morgan's theorems", "Simplify simple Boolean expressions", "Describe the half adder and full adder circuits"],
        lesson: {
          title: "Algebra of Logic Circuits",
          summary: "Apply Boolean laws and describe adder circuits.",
          minutes: 45,
          notes: `## Notation
In this lesson, **A · B** means A AND B, **A + B** means A OR B, and **A'** means NOT A.

## Laws of Boolean algebra
| Law | AND form | OR form |
|---|---|---|
| **identity** | A · 1 = A | A + 0 = A |
| **null (annulment)** | A · 0 = 0 | A + 1 = 1 |
| **idempotent** | A · A = A | A + A = A |
| **complement** | A · A' = 0 | A + A' = 1 |
| **double negation** | (A')' = A | |
| **commutative** | A · B = B · A | A + B = B + A |
| **associative** | (A · B) · C = A · (B · C) | (A + B) + C = A + (B + C) |
| **distributive** | A · (B + C) = A · B + A · C | A + B · C = (A + B) · (A + C) |
| **absorption** | A · (A + B) = A | A + A · B = A |

## De Morgan's theorems
- **(A · B)' = A' + B'** — NOT (A AND B) = (NOT A) OR (NOT B)
- **(A + B)' = A' · B'** — NOT (A OR B) = (NOT A) AND (NOT B)
"Break the bar and change the sign."

## Simplification examples
1. A · B + A · B' = A · (B + B') = A · 1 = **A**
2. A + A · B = **A** (absorption)
3. (A + B) · (A + B') = A + B · B' = A + 0 = **A**
Simpler expressions need **fewer gates** — cheaper, faster circuits.

## Half adder
adds **two bits** A and B:
- **Sum (S) = A XOR B**
- **Carry (C) = A AND B**
| A | B | S | C |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

## Full adder
adds **three bits** — A, B and a **carry-in (Cin)** — giving Sum and Carry-out. It can be built from **two half adders and an OR gate**. Full adders are chained to add multi-bit binary numbers in the **ALU**.`,
          examples: `**Example 1.** Simplify A + A'. *Answer:* **1** (complement law).

**Example 2.** Apply De Morgan to (A + B)'. *Answer:* **A' · B'**.

**Example 3.** What are the Sum and Carry of a half adder when A = 1, B = 1? *Answer:* **S = 0, C = 1**.`,
        },
        questions: [
          ["E", "In Boolean algebra, A · 1 equals", "A", "1", "0", "A'", "Identity law. Answer: A."],
          ["E", "In Boolean algebra, A + 1 equals", "1", "A", "0", "A + A", "Null law for OR."],
          ["E", "A circuit that adds two single bits is a", "half adder", "full adder", "multiplexer", "decoder", "It has two inputs."],
          ["M", "In Boolean algebra, A · A' equals", "0", "1", "A", "A'", "Complement law."],
          ["M", "In Boolean algebra, A + A equals", "A", "2A", "1", "0", "Idempotent law."],
          ["M", "By De Morgan's theorem, (A · B)' equals", "A' + B'", "A' · B'", "A + B", "A · B", "Break the bar, change the sign."],
          ["M", "The Sum output of a half adder is given by", "A XOR B", "A AND B", "A OR B", "A NAND B", "Sum is 1 when inputs differ."],
          ["H", "The expression A · B + A · B' simplifies to", "A", "B", "1", "A · B", "B + B' = 1. Answer: A."],
          ["H", "A full adder adds", "three bits including a carry-in", "two bits only", "four bytes", "decimal numbers directly", "A, B and Cin. Answer: three bits including a carry-in."],
          ["H", "When A = 1 and B = 1, a half adder gives", "Sum 0 and Carry 1", "Sum 1 and Carry 0", "Sum 1 and Carry 1", "Sum 0 and Carry 0", "1 + 1 = 10 in binary."],
        ],
      },
      {
        week: 2,
        title: "File handling in programs",
        subtopics: ["Why programs use files", "File modes", "Writing to and reading from files", "File handling in BASIC"],
        objectives: ["Explain why programs store data in files", "Distinguish read, write and append modes", "Write and read text files in Python", "Use sequential file statements in BASIC"],
        lesson: {
          title: "Saving and Loading Data in Programs",
          summary: "Write programs that store and retrieve data in files.",
          minutes: 45,
          notes: `## Why use files?
variables in RAM are **lost when a program ends**. Files store data **permanently** on secondary storage so it can be used later — e.g. saving student scores, game progress or logs.

## Basic file operations
**open → read/write → close**. Always **close** a file so data is saved and the file is released.

## File modes (Python)
| Mode | Meaning |
|---|---|
| **"r"** | **read** — file must exist |
| **"w"** | **write** — creates a new file or **overwrites** (erases) an existing one |
| **"a"** | **append** — adds data to the **end** of an existing file |
| **"r+"** | read and write |

## Writing to a file in Python
**f = open("scores.txt", "w")**
**f.write("Ada,72\\n")**
**f.write("Musa,65\\n")**
**f.close()**
(**\\n** means a new line.)

## Reading from a file
**f = open("scores.txt", "r")**
**for line in f:**
    **print(line.strip())**
**f.close()**
Output: Ada,72 and Musa,65 on separate lines.
Using **with open("scores.txt", "r") as f:** closes the file automatically.

## Appending
**open("scores.txt", "a")** then write — existing data is kept.

## File handling in BASIC (sequential files)
10 OPEN "SCORES.DAT" FOR OUTPUT AS #1
20 WRITE #1, "ADA", 72
30 CLOSE #1
Reading:
10 OPEN "SCORES.DAT" FOR INPUT AS #1
20 INPUT #1, N, S
30 PRINT N, S
40 CLOSE #1
Mode **APPEND** adds records to the end.

## Errors to handle
**file not found** when reading; **permission denied**; disk full. Programs should check for these (e.g. try/except in Python).`,
          examples: `**Example 1.** Which Python mode erases an existing file before writing? *Answer:* **"w"** (write).

**Example 2.** Which mode adds to the end of a file? *Answer:* **"a"** (append).

**Example 3.** Why must a file be closed? *Answer:* To **save the data** and release the file.`,
        },
        questions: [
          ["E", "Data in variables is lost when a program ends, so programs use", "files", "monitors", "keyboards", "printers", "Files store data permanently."],
          ["E", "The Python file mode for reading is", "\"r\"", "\"w\"", "\"a\"", "\"x\"", "r for read. Answer: \"r\"."],
          ["E", "After using a file, a program should", "close it", "delete it", "rename it", "print it", "Closing saves and releases it."],
          ["M", "The Python mode that adds data to the end of an existing file is", "\"a\"", "\"w\"", "\"r\"", "\"d\"", "a for append. Answer: \"a\"."],
          ["M", "Opening an existing file in \"w\" mode", "erases its old contents", "keeps its contents", "only reads it", "makes it read-only", "Write mode overwrites."],
          ["M", "In Python, \\n in a string represents", "a new line", "a number", "a null value", "the letter n only", "It is the newline character."],
          ["M", "In BASIC, the statement OPEN \"SCORES.DAT\" FOR OUTPUT AS #1 opens the file for", "writing", "reading", "deleting", "printing only", "Output means writing."],
          ["H", "Opening a file that does not exist in \"r\" mode causes", "a file-not-found error", "a new empty file to be created", "the computer to restart", "the file to be appended", "Read needs an existing file."],
          ["H", "Using 'with open(...) as f:' in Python has the advantage that", "the file is closed automatically", "the file is deleted", "the file becomes encrypted", "no data can be read", "It manages the file safely."],
          ["H", "In BASIC, reading a record from file number 1 uses", "INPUT #1", "PRINT #1", "OPEN #1 FOR OUTPUT", "CLOSE #2", "INPUT # reads from a file."],
        ],
      },
      {
        week: 3,
        title: "The systems development life cycle",
        subtopics: ["Meaning of a system", "Stages of the SDLC", "Feasibility study", "Fact-finding techniques"],
        objectives: ["Explain the term system", "Describe the stages of the systems development life cycle", "Explain the types of feasibility", "Use fact-finding techniques"],
        lesson: {
          title: "Developing Information Systems",
          summary: "Describe the stages of developing a computer-based system.",
          minutes: 45,
          notes: `## Meaning
A **system** is a set of **interrelated parts working together** to achieve a goal. An **information system** collects, processes, stores and distributes information (e.g. a school result system).
The **Systems Development Life Cycle (SDLC)** is the structured process for **planning, creating, testing and deploying** an information system.

## Stages of the SDLC
1. **problem identification / preliminary investigation** — recognise the need for a new or improved system
2. **feasibility study** — decide whether the project is worth doing
3. **system analysis** — study the current system in detail; gather requirements
4. **system design** — design outputs, inputs, files/databases, processes, interfaces and security
5. **development (programming)** — write and build the system
6. **testing** — unit, integration, system and acceptance testing
7. **implementation (changeover)** — install, train users, convert data, switch to the new system
8. **documentation** — user and technical manuals
9. **evaluation and maintenance** — review performance and keep improving

## Feasibility study (TELOS)
| Type | Question |
|---|---|
| **Technical** | is the technology and expertise available? |
| **Economic** | do benefits outweigh costs (cost–benefit analysis)? |
| **Legal** | does it comply with laws (e.g. data protection)? |
| **Operational** | will users accept and use it? |
| **Schedule** | can it be completed in time? |
The result is a **feasibility report** recommending whether to proceed.

## Fact-finding techniques
| Technique | Advantage | Disadvantage |
|---|---|---|
| **interviews** | detailed, can ask follow-up questions | time-consuming |
| **questionnaires** | reach many people cheaply | low response; no follow-up |
| **observation** | see the real process | people may act differently when watched |
| **document review (record inspection)** | factual data | documents may be outdated |

## The systems analyst
the professional who leads analysis and design, acting as a **link between users and programmers**.`,
          examples: `**Example 1.** Which feasibility asks whether benefits outweigh costs? *Answer:* **economic** feasibility.

**Example 2.** Name one fact-finding technique. *Answer:* **interview** (or questionnaire, observation, document review).

**Example 3.** Which SDLC stage designs input forms and reports? *Answer:* **system design**.`,
        },
        questions: [
          ["E", "A set of interrelated parts working together to achieve a goal is a", "system", "loop", "byte", "network cable", "Parts work together."],
          ["E", "SDLC stands for", "Systems Development Life Cycle", "Software Data Link Control", "System Design Logic Code", "Simple Data Life Chart", "It guides system projects."],
          ["E", "Asking users questions face-to-face to gather facts is", "interviewing", "coding", "testing", "compiling", "A fact-finding method."],
          ["M", "The stage that decides whether a project is worth doing is the", "feasibility study", "maintenance stage", "coding stage", "documentation stage", "It assesses viability."],
          ["M", "Feasibility that asks whether benefits outweigh costs is", "economic feasibility", "technical feasibility", "legal feasibility", "schedule feasibility", "Cost–benefit analysis."],
          ["M", "Feasibility that asks whether users will accept the new system is", "operational feasibility", "economic feasibility", "technical feasibility", "legal feasibility", "Will it work in practice?"],
          ["M", "A fact-finding method that reaches many people cheaply is", "questionnaires", "interviews", "observation", "prototyping only", "Forms are sent out."],
          ["H", "A disadvantage of observation as a fact-finding method is that", "people may behave differently when watched", "it is always expensive", "it needs no time", "it gives no information", "The Hawthorne effect."],
          ["H", "The professional who links users and programmers in system development is the", "systems analyst", "data entry clerk", "computer operator", "hardware technician", "Analysts gather and design."],
          ["H", "The stage that designs outputs, inputs, files and processes is", "system design", "system analysis", "feasibility study", "evaluation", "Design follows analysis."],
        ],
      },
      {
        week: 4,
        title: "System implementation and evaluation",
        subtopics: ["Changeover methods", "User training and data conversion", "Documentation", "Evaluation and maintenance"],
        objectives: ["Compare direct, parallel, pilot and phased changeover", "Explain user training and data conversion", "Describe user and technical documentation", "Explain system evaluation and types of maintenance"],
        lesson: {
          title: "Putting a New System into Use",
          summary: "Choose changeover methods and maintain a new system.",
          minutes: 45,
          notes: `## Changeover methods
| Method | Description | Advantage | Disadvantage |
|---|---|---|---|
| **direct (big bang)** | old system stopped; new system started **at once** | fast and cheap | **high risk** — if the new system fails, there is no fallback |
| **parallel** | old and new systems run **side by side** for a period | **safest**; results can be compared | expensive; double workload |
| **pilot** | new system introduced in **one part** of the organisation first (e.g. one branch) | problems found on a small scale | slower to cover the whole organisation |
| **phased** | new system introduced **module by module** | staff adapt gradually; less risk | takes longer; interfaces between old and new parts |
Example: a bank introducing new software might **pilot** it in one branch before all branches.

## Other implementation tasks
- **installing** hardware and software
- **user training** — workshops, manuals, online tutorials, help desk
- **data conversion** — transferring data from old files to the new system, checking accuracy
- **security setup** — user accounts and permissions

## Documentation
- **user documentation** — how to use the system: logging in, entering data, printing reports, troubleshooting, FAQs
- **technical documentation** — for maintenance: system design, data dictionary, program code and comments, flowcharts, hardware and software requirements, test results

## Evaluation
after the system is in use, it is reviewed to check: does it meet its **objectives**? Is it **efficient, reliable** and **user-friendly**? Were costs and time within budget? Feedback from users is collected.

## Types of maintenance
| Type | Purpose |
|---|---|
| **corrective** | fix errors (bugs) discovered after installation |
| **adaptive** | adjust the system to changes (new laws, new hardware, new OS) |
| **perfective** | improve performance or add new features requested by users |
| **preventive** | make changes to prevent future problems |`,
          examples: `**Example 1.** Which changeover method is safest? *Answer:* **parallel** running.

**Example 2.** Updating a payroll system because tax laws changed is **adaptive** maintenance.

**Example 3.** Introducing a new system in one school branch first is **pilot** changeover.`,
        },
        questions: [
          ["E", "Moving from an old system to a new one is called", "changeover", "debugging", "fact-finding", "normalisation", "It is part of implementation."],
          ["E", "Stopping the old system and starting the new one at once is", "direct changeover", "parallel changeover", "pilot changeover", "phased changeover", "Big bang approach."],
          ["E", "Running old and new systems side by side is", "parallel changeover", "direct changeover", "pilot changeover", "phased changeover", "Both run together."],
          ["M", "Introducing a new system in one branch first is", "pilot changeover", "direct changeover", "parallel changeover", "adaptive maintenance", "A small-scale trial."],
          ["M", "Introducing a new system module by module is", "phased changeover", "pilot changeover", "direct changeover", "parallel changeover", "Gradual phases."],
          ["M", "The safest changeover method is", "parallel running", "direct changeover", "no changeover", "random changeover", "There is a fallback."],
          ["M", "Transferring data from old files into the new system is", "data conversion", "data mining", "data validation only", "data piracy", "Data is moved and checked."],
          ["H", "Modifying a system because tax laws have changed is", "adaptive maintenance", "corrective maintenance", "perfective maintenance", "direct changeover", "It adapts to change."],
          ["H", "Adding new features requested by users after installation is", "perfective maintenance", "corrective maintenance", "adaptive maintenance", "pilot running", "It perfects the system."],
          ["H", "The main disadvantage of direct changeover is", "high risk if the new system fails", "high cost of double running", "it takes years", "it needs two systems", "There is no fallback."],
        ],
      },
      {
        week: 5,
        title: "Artificial intelligence and robotics",
        subtopics: ["Meaning and history of AI", "Branches of AI", "Expert systems", "Robotics"],
        objectives: ["Explain artificial intelligence and the Turing test", "Identify branches of AI", "Describe the components of an expert system", "Describe robots and their applications"],
        lesson: {
          title: "Machines That Think and Act",
          summary: "Explain AI, expert systems and robotics.",
          minutes: 45,
          notes: `## Meaning
**Artificial intelligence (AI)** is the branch of computer science concerned with building systems that can perform tasks requiring **human-like intelligence** — learning, reasoning, problem-solving, perception and language understanding.

## History
- **Alan Turing** proposed the **Turing test** (1950): a machine is considered intelligent if a human questioner cannot reliably tell it apart from a human in conversation
- the term "artificial intelligence" was used at the **Dartmouth conference (1956)**, associated with **John McCarthy**
- recent progress comes from **machine learning**, large datasets and powerful processors

## Branches of AI
| Branch | Meaning | Example |
|---|---|---|
| **machine learning** | systems learn patterns from data | spam filters, recommendations |
| **natural language processing (NLP)** | understanding and generating human language | chatbots, translation, voice assistants |
| **computer vision** | interpreting images and video | face recognition, number-plate reading |
| **speech recognition** | converting speech to text | voice typing |
| **expert systems** | mimic human experts' decisions | medical diagnosis aids |
| **robotics** | intelligent machines that act physically | factory robots |

## Expert systems
computer programs that use **knowledge from human experts** to give advice or decisions.
Components:
- **knowledge base** — facts and rules (IF … THEN)
- **inference engine** — applies rules to the facts to reach conclusions
- **user interface** — allows users to ask questions and receive answers
- **explanation facility** — explains how a conclusion was reached
Uses: medical diagnosis, loan approval, fault diagnosis, agriculture advice.

## Robotics
a **robot** is a programmable machine that can carry out actions automatically. Parts: **sensors** (detect surroundings), **controller** (computer "brain"), **actuators** (motors that move parts), **end effector** (gripper or tool), **power supply**.
Uses: car assembly, welding, painting, packaging, surgery assistance, bomb disposal, space exploration, warehouse picking, cleaning.

## Benefits and concerns
benefits: speed, accuracy, working in dangerous places, 24-hour operation. Concerns: **job displacement**, **bias** in AI decisions, **privacy**, misuse (deepfakes, surveillance), accountability. AI should be used **ethically** and with human oversight.`,
          examples: `**Example 1.** Who proposed the Turing test? *Answer:* **Alan Turing**.

**Example 2.** Which part of an expert system applies rules to facts? *Answer:* the **inference engine**.

**Example 3.** Which part of a robot detects its surroundings? *Answer:* the **sensors**.`,
        },
        questions: [
          ["E", "Building computer systems that perform tasks needing human-like intelligence is", "artificial intelligence", "data processing", "word processing", "networking", "AI mimics intelligence."],
          ["E", "A programmable machine that carries out actions automatically is a", "robot", "router", "register", "repeater", "Robots act physically."],
          ["E", "The test for machine intelligence proposed by Alan Turing is the", "Turing test", "beta test", "parity test", "unit test", "Proposed in 1950."],
          ["M", "The branch of AI that enables computers to understand human language is", "natural language processing", "computer vision", "robotics only", "data validation", "NLP handles language."],
          ["M", "The branch of AI that interprets images and video is", "computer vision", "speech synthesis", "expert systems", "file handling", "Machines 'see'."],
          ["M", "The part of an expert system that stores facts and rules is the", "knowledge base", "inference engine", "user interface", "actuator", "It holds expertise."],
          ["M", "The parts of a robot that move its arms and wheels are", "actuators", "sensors", "registers", "buses", "Motors act. Answer: actuators."],
          ["H", "The part of an expert system that applies rules to facts to reach conclusions is the", "inference engine", "knowledge base", "explanation facility", "database administrator", "It reasons. Answer: inference engine."],
          ["H", "A concern about AI systems used to approve loans is", "bias in their decisions", "they never use data", "they are always slower than humans", "they cannot be programmed", "Biased data gives unfair results."],
          ["H", "The 1956 conference where the term 'artificial intelligence' was popularised was held at", "Dartmouth", "Oxford", "Lagos", "Geneva", "John McCarthy organised it."],
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
        title: "Data structures: stacks, queues and linked lists",
        subtopics: ["Meaning of data structures", "Stacks", "Queues", "Linked lists and trees"],
        objectives: ["Explain data structures", "Describe stack operations", "Describe queue operations", "Describe linked lists and trees"],
        lesson: {
          title: "Organising Data in Memory",
          summary: "Describe stacks, queues, linked lists and trees.",
          minutes: 45,
          notes: `## Data structures
A **data structure** is a way of **organising and storing data** so it can be used efficiently. Examples: **arrays, records, stacks, queues, linked lists, trees, graphs**.
- **static** structures have a fixed size (arrays)
- **dynamic** structures can grow and shrink (linked lists)

## Stack — LIFO
a **stack** follows **Last In, First Out**: the last item added is the first removed — like a pile of plates.
- **push** — add an item to the **top**
- **pop** — remove the item from the top
- **peek** — look at the top item without removing it
- **overflow** — pushing onto a full stack; **underflow** — popping from an empty stack
Example: push 5, push 8, push 3, pop → removes **3**; stack is now 5, 8 (8 on top).
Uses: **undo** in editors, browser **back** button, managing subroutine calls, evaluating expressions.

## Queue — FIFO
a **queue** follows **First In, First Out**: the first item added is the first removed — like people queuing at a bank.
- **enqueue** — add an item at the **rear**
- **dequeue** — remove an item from the **front**
Example: enqueue A, B, C; dequeue → removes **A**.
Uses: **printer queues**, CPU task scheduling, keyboard buffer, customer service systems.
A **circular queue** reuses empty spaces at the front.

## Linked list
a sequence of **nodes**, each containing **data** and a **pointer** to the next node. The **head** points to the first node; the last node points to **null**.
- easy **insertion and deletion** (just change pointers)
- items cannot be accessed directly by index; must follow pointers

## Trees
a **hierarchical** structure of nodes with a **root** at the top; each node may have **children**. In a **binary tree**, each node has at most **two** children. **Binary search trees** keep smaller values on the left and larger on the right for fast searching.
Uses: file directories, organisation charts, decision trees.`,
          examples: `**Example 1.** Push 2, push 7, push 9, then pop. What is removed? *Answer:* **9**.

**Example 2.** Enqueue X, Y, Z, then dequeue. What is removed? *Answer:* **X**.

**Example 3.** What does each node in a linked list contain? *Answer:* **data** and a **pointer** to the next node.`,
        },
        questions: [
          ["E", "A stack follows the principle", "Last In, First Out", "First In, First Out", "Random In, Random Out", "Largest In, First Out", "LIFO like a pile of plates."],
          ["E", "A queue follows the principle", "First In, First Out", "Last In, First Out", "First In, Last Out only", "Smallest Out First", "FIFO like a bank queue."],
          ["E", "Adding an item to the top of a stack is", "push", "pop", "dequeue", "peek", "Push adds. Answer: push."],
          ["M", "Removing an item from the top of a stack is", "pop", "push", "enqueue", "insert", "Pop removes. Answer: pop."],
          ["M", "Removing an item from the front of a queue is", "dequeue", "enqueue", "push", "peek", "Front leaves first."],
          ["M", "After push 2, push 7, push 9 and one pop, the item removed is", "9", "2", "7", "nothing", "Last in, first out."],
          ["M", "A printer handling documents in the order they were sent uses a", "queue", "stack", "tree", "linked node only", "First come, first served."],
          ["H", "Trying to pop from an empty stack causes", "underflow", "overflow", "a pointer", "a queue", "Nothing to remove."],
          ["H", "In a linked list, each node contains data and a", "pointer to the next node", "copy of every other node", "fixed index only", "printer queue", "Pointers link nodes."],
          ["H", "The undo feature in a word processor is best implemented with a", "stack", "queue", "binary tree only", "circular queue", "The latest action is undone first."],
        ],
      },
      {
        week: 2,
        title: "Information systems in organisations",
        subtopics: ["Components of an information system", "Types of information systems", "Qualities of good information", "Benefits of information systems"],
        objectives: ["Identify the components of an information system", "Distinguish TPS, MIS, DSS, EIS and expert systems", "State the qualities of good information", "Explain the benefits of information systems to organisations"],
        lesson: {
          title: "Information Systems at Work",
          summary: "Classify information systems and their uses in organisations.",
          minutes: 45,
          notes: `## Components of an information system
**hardware**, **software**, **data**, **people** (users and IT staff), **procedures** (rules and instructions) and **networks**.

## Types of information systems
| System | Users | Purpose | Example |
|---|---|---|---|
| **Transaction Processing System (TPS)** | operational staff | records **day-to-day transactions** | POS sales, ATM withdrawals, payroll, school fees payment |
| **Management Information System (MIS)** | middle managers | produces **regular summary reports** from TPS data | monthly sales reports, attendance summaries |
| **Decision Support System (DSS)** | managers | helps make **non-routine decisions** using models and "what-if" analysis | choosing where to open a new branch |
| **Executive Information System (EIS)** | top executives | provides **high-level summaries and trends** in dashboards | company-wide performance dashboard |
| **Expert System (ES)** | various | gives **expert advice** using rules | medical diagnosis support |
| **Office Automation System (OAS)** | office staff | word processing, email, scheduling | office suites |
| **Geographic Information System (GIS)** | planners | analyses **map-based data** | planning roads, tracking disease outbreaks |

## Levels of management and information
- **operational** — detailed, daily data (TPS)
- **tactical** — summaries for planning (MIS, DSS)
- **strategic** — long-term trends (EIS)

## Qualities of good information
**accurate**, **relevant**, **timely** (available when needed), **complete**, **concise**, **clear/understandable**, **reliable**, **cost-effective** (benefit greater than cost), **accessible**, **secure**.

## Benefits of information systems
faster processing; better decisions; reduced costs; improved customer service; better record keeping; competitive advantage; easier communication; monitoring and control.

## Example: a school
TPS records fees paid and scores; MIS produces termly result summaries and attendance reports; DSS helps the principal decide class sizes; an EIS dashboard shows performance trends over years.`,
          examples: `**Example 1.** A POS terminal recording each sale is part of a **TPS**.

**Example 2.** Which system helps managers with "what-if" analysis? *Answer:* a **DSS**.

**Example 3.** Name two qualities of good information. *Answer:* **accurate** and **timely**.`,
        },
        questions: [
          ["E", "A system that records day-to-day transactions is a", "transaction processing system", "decision support system", "executive information system", "geographic information system", "TPS handles transactions."],
          ["E", "Hardware, software, data, people and procedures are", "components of an information system", "types of printers", "programming languages", "network topologies", "They make up an IS."],
          ["E", "Information that is available when needed is", "timely", "outdated", "irrelevant", "incomplete", "Timeliness matters."],
          ["M", "A system that produces regular summary reports for middle managers is", "MIS", "TPS", "EIS", "GIS", "Management Information System."],
          ["M", "A system that helps managers make non-routine decisions using what-if analysis is", "DSS", "TPS", "OAS", "POS", "Decision Support System."],
          ["M", "A system that analyses map-based data is", "GIS", "TPS", "MIS", "EIS", "Geographic Information System."],
          ["M", "A dashboard showing company-wide trends for top executives is an", "EIS", "TPS", "OAS", "LAN", "Executive Information System."],
          ["H", "Information whose benefit is greater than the cost of producing it is", "cost-effective", "redundant", "irrelevant", "incomplete", "It is worth producing."],
          ["H", "Long-term planning by top management is supported mainly at the", "strategic level", "operational level", "transaction level", "data entry level", "Strategy is long-term."],
          ["H", "A POS terminal recording each sale in a supermarket is part of a", "transaction processing system", "decision support system", "executive information system", "expert system", "It records transactions."],
        ],
      },
      {
        week: 3,
        title: "Web design",
        subtopics: ["Planning a website", "HTML structure and tags", "Styling with CSS", "Publishing a website"],
        objectives: ["Plan a simple website", "Write a basic HTML page with common tags", "Apply basic CSS styles", "Explain how websites are published"],
        lesson: {
          title: "Building Web Pages",
          summary: "Plan, build, style and publish a simple website.",
          minutes: 45,
          notes: `## Planning a website
decide the **purpose** and **audience**; plan the **pages** and **navigation** (site map); gather content (text, images); sketch layouts (**wireframes**); choose colours and fonts.

## HTML structure
**HTML** uses **tags** written inside angle brackets; most come in pairs: an **opening tag** and a **closing tag** with a slash. (Below, tags are shown with ‹ › to represent the angle brackets.)
- ‹html› … ‹/html› — the whole page
- ‹head› … ‹/head› — information about the page, including ‹title›
- ‹body› … ‹/body› — the visible content

## Common tags
| Tag | Purpose |
|---|---|
| ‹h1› to ‹h6› | headings (h1 largest) |
| ‹p› | paragraph |
| ‹a href="page2.html"› | **hyperlink** — href gives the destination |
| ‹img src="logo.png" alt="School logo"› | **image** — src is the file; **alt** text describes it for accessibility |
| ‹ul›, ‹ol›, ‹li› | unordered (bulleted) list, ordered (numbered) list, list item |
| ‹table›, ‹tr›, ‹td› | table, table row, table cell |
| ‹br› | line break |
| ‹b› / ‹strong›, ‹i› / ‹em› | bold, italic |
**Attributes** give extra information inside the opening tag, e.g. href, src, alt.

## Styling with CSS
**CSS (Cascading Style Sheets)** controls appearance: colours, fonts, spacing, layout. A CSS **rule** has a **selector** and **declarations**:
**h1 { color: blue; font-size: 32px; }**
**p { font-family: Arial; line-height: 1.5; }**
CSS can be placed in an external .css file (best), in the head, or inline.
**Responsive design** makes pages adapt to phones, tablets and computers.

## JavaScript
adds **interactivity**: forms that check input, image sliders, menus.

## Publishing a website
1. register a **domain name** (e.g. myschool.com.ng)
2. get **web hosting** (a server that stores the site)
3. **upload** files (FTP or hosting control panel)
4. test on different browsers and devices
5. maintain and update content
Tools: text editors (Notepad, VS Code), website builders, content management systems (e.g. WordPress).`,
          examples: `**Example 1.** Which tag creates a hyperlink? *Answer:* the **a** (anchor) tag with an **href** attribute.

**Example 2.** What does CSS stand for? *Answer:* **Cascading Style Sheets**.

**Example 3.** Why is the alt attribute used on images? *Answer:* It **describes the image** for accessibility and when it cannot load.`,
        },
        questions: [
          ["E", "The language used to structure web pages is", "HTML", "SQL", "BASIC", "COBOL", "HyperText Markup Language."],
          ["E", "CSS is used to", "style web pages", "store databases", "compile programs", "send emails", "Cascading Style Sheets."],
          ["E", "The tag for a paragraph in HTML is", "p", "h1", "a", "img", "p stands for paragraph."],
          ["M", "The HTML tag that creates a hyperlink is", "a", "p", "li", "br", "The anchor tag."],
          ["M", "In an image tag, the attribute that gives the image file is", "src", "href", "alt", "title", "Source of the image."],
          ["M", "The part of an HTML page that contains visible content is the", "body", "head", "title", "meta", "Body holds content."],
          ["M", "The HTML tag for the largest heading is", "h1", "h6", "head", "p", "h1 is largest. Answer: h1."],
          ["H", "The alt attribute on an image is important because it", "describes the image for accessibility", "makes the image larger", "links to another page", "changes the colour", "Screen readers use it."],
          ["H", "Designing pages that adapt to phones, tablets and computers is", "responsive design", "batch design", "static coding", "parallel changeover", "Layouts respond to screen size."],
          ["H", "A server that stores a website and makes it available on the internet is provided by", "web hosting", "a compiler", "a firewall only", "a scanner", "Hosting serves the site."],
        ],
      },
      {
        week: 4,
        title: "ICT and the Nigerian digital economy",
        subtopics: ["ICT agencies and policies in Nigeria", "E-government services", "Digital financial services", "Challenges and opportunities"],
        objectives: ["Identify ICT agencies and policies in Nigeria", "Describe e-government services", "Describe digital financial services in Nigeria", "Discuss challenges and opportunities of the digital economy"],
        lesson: {
          title: "Technology and National Development",
          summary: "Describe Nigeria's digital economy and its institutions.",
          minutes: 45,
          notes: `## ICT agencies in Nigeria
| Agency | Role |
|---|---|
| **NITDA** (National Information Technology Development Agency, established 2001) | develops and regulates IT; promotes digital literacy and local content |
| **NCC** (Nigerian Communications Commission) | regulates **telecommunications** (mobile networks, internet providers) |
| **NIMC** (National Identity Management Commission) | manages the **National Identification Number (NIN)** database |
| **NDPC** (Nigeria Data Protection Commission) | regulates protection of personal data |
| **Galaxy Backbone** | provides ICT infrastructure for government |
| **CPN** | regulates computing professionals |
| **CBN** | regulates banks and payment systems |
Policy: Nigeria has national strategies for the **digital economy**, broadband expansion and digital literacy.

## E-government services
- **NIN** enrolment and verification
- online **passport** application
- **IPPIS** — integrated payroll for federal workers
- **Treasury Single Account (TSA)** and online government payments (e.g. **Remita**)
- **JAMB** online registration and **CBT** examinations
- online **tax** filing
- **voter** registration and electronic accreditation (BVAS)
Benefits: transparency, reduced corruption, faster services, convenience, better records.

## Digital financial services
**BVN** (Bank Verification Number); mobile and internet banking; **USSD** banking; **POS** agents (bringing banking to rural areas); instant transfers (**NIP**); mobile money operators and payment service banks; **fintech** start-ups providing payments, loans and savings; **cashless** policy; the **eNaira** (CBN digital currency).

## Opportunities
jobs in software development, data analysis, cybersecurity and digital marketing; start-ups and innovation hubs; remote work for global companies; e-commerce; improved education and health services; financial inclusion.

## Challenges
**unstable power supply**; high **data costs**; poor network coverage in rural areas; **cybercrime** and fraud; low digital literacy; shortage of skilled personnel; **brain drain**; high cost of devices; inadequate funding.

## Solutions
invest in power and broadband; train young people in digital skills; enforce cybercrime and data protection laws; support start-ups; reduce taxes on devices; promote local content.`,
          examples: `**Example 1.** Which agency regulates telecommunications in Nigeria? *Answer:* the **NCC**.

**Example 2.** Which agency manages the NIN database? *Answer:* **NIMC**.

**Example 3.** Name one challenge of Nigeria's digital economy. *Answer:* **unstable power supply** (or high data costs).`,
        },
        questions: [
          ["E", "The agency that regulates telecommunications in Nigeria is the", "NCC", "NIMC", "NAFDAC", "FRSC", "Nigerian Communications Commission."],
          ["E", "The agency that manages the National Identification Number is", "NIMC", "NCC", "NITDA", "CBN", "National Identity Management Commission."],
          ["E", "Online services provided by government to citizens are", "e-government services", "e-waste", "e-games", "e-books only", "Electronic government."],
          ["M", "The agency that develops and regulates information technology in Nigeria is", "NITDA", "NCC", "NIMC", "NDLEA", "Established in 2001."],
          ["M", "The 11-digit number that links a person's identity to bank accounts is the", "BVN", "NIN only", "PIN", "OTP", "Bank Verification Number."],
          ["M", "The federal government's integrated payroll system is", "IPPIS", "BVAS", "USSD", "TCP", "It pays federal workers."],
          ["M", "Banking with codes dialled on a mobile phone without internet is", "USSD banking", "internet banking", "branch banking", "cheque banking", "It works on basic phones."],
          ["H", "A major challenge to Nigeria's digital economy is", "unstable power supply", "too many computers", "free internet everywhere", "lack of young people", "Power affects ICT."],
          ["H", "The movement of skilled ICT professionals abroad is called", "brain drain", "brain gain", "digital literacy", "e-government", "Talent leaves the country."],
          ["H", "POS agents in rural areas mainly promote", "financial inclusion", "cybercrime", "data redundancy", "brain drain", "They bring banking closer."],
        ],
      },
      {
        week: 5,
        title: "ICT professions, certifications and entrepreneurship",
        subtopics: ["ICT job roles and specialisations", "Professional certifications", "Professional bodies and ethics", "ICT entrepreneurship"],
        objectives: ["Identify ICT specialisations and job roles", "Name common professional certifications", "Describe professional bodies and their codes of conduct", "Identify ICT business opportunities"],
        lesson: {
          title: "Building a Career in ICT",
          summary: "Plan an ICT career and identify business opportunities.",
          minutes: 45,
          notes: `## ICT specialisations
| Area | Roles |
|---|---|
| **software development** | front-end, back-end and full-stack developers; mobile app developers; game developers |
| **data** | data analysts, data scientists, database administrators, machine-learning engineers |
| **networks and cloud** | network engineers, cloud engineers, system administrators |
| **cybersecurity** | security analysts, penetration testers (ethical hackers), forensic investigators |
| **design** | UI/UX designers, graphic designers, web designers |
| **management and support** | IT project managers, systems analysts, IT support/help desk, business analysts |
| **hardware** | computer engineers, technicians, embedded systems engineers |
| **education and research** | teachers, lecturers, researchers |

## Professional certifications
industry certificates show practical skills, e.g.:
- **CompTIA A+** (hardware and support), **Network+**, **Security+**
- **Cisco CCNA** (networking)
- **Microsoft**, **AWS** and **Google Cloud** certifications (cloud and office)
- **Oracle** (databases)
- certifications in project management and data analytics
Certificates complement degrees in Computer Science, Information Technology, Software Engineering, Computer Engineering or Cybersecurity.

## Professional bodies and ethics
- **Computer Professionals (Registration Council of Nigeria) — CPN**: registers and regulates computing professionals
- **Nigeria Computer Society (NCS)**: umbrella body for IT professionals
- international bodies such as **ACM** and **IEEE Computer Society**
Codes of conduct require **integrity, competence, confidentiality, respect for law and intellectual property, and responsibility to the public**.

## ICT entrepreneurship
business ideas: computer repairs and maintenance; **cybercafé/business centre** services; **web and app development**; **graphic design** and printing; **digital marketing** and social media management; **computer training** centres; phone and accessory sales; **data analysis** services; e-commerce stores; **IT consulting**; content creation.
Steps: identify a need; acquire skills; write a business plan; register with the **CAC**; get funding; market the service; deliver quality; keep records; keep learning.`,
          examples: `**Example 1.** Who tests systems by legally trying to break into them? *Answer:* a **penetration tester (ethical hacker)**.

**Example 2.** Name a networking certification. *Answer:* **Cisco CCNA**.

**Example 3.** Give one ICT business idea. *Answer:* **web development** (or computer repairs, training centre).`,
        },
        questions: [
          ["E", "A professional who designs and builds mobile apps is a", "mobile app developer", "network cable layer", "data entry clerk", "typist", "They develop apps."],
          ["E", "A professional who protects systems from cyber attacks is a", "security analyst", "graphic designer", "web host", "salesperson", "They defend systems."],
          ["E", "The body that registers computing professionals in Nigeria is", "CPN", "NCC", "NIMC", "NAFDAC", "Computer Professionals Registration Council."],
          ["M", "A professional who legally tests systems by attempting to break in is a", "penetration tester", "systems operator", "network user", "data clerk", "An ethical hacker."],
          ["M", "Cisco CCNA is a certification in", "networking", "accounting", "music", "cooking", "It covers routing and switching."],
          ["M", "A designer who focuses on how users interact with an app is a", "UI/UX designer", "database administrator", "hardware technician", "network engineer", "User interface and experience."],
          ["M", "A professional who analyses data to find patterns for decisions is a", "data analyst", "web host", "cable technician", "typist", "Data drives decisions."],
          ["H", "Before operating legally, an ICT business in Nigeria should register with the", "CAC", "NCC only", "WAEC", "NECO", "Corporate Affairs Commission."],
          ["H", "A professional code of conduct requires ICT professionals to", "maintain confidentiality and integrity", "share client passwords", "pirate software", "ignore the law", "Ethics guide practice."],
          ["H", "An international professional body for computing is the", "ACM", "FIFA", "OPEC", "WHO", "Association for Computing Machinery."],
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
        title: "WAEC revision: hardware and data representation",
        subtopics: ["Computer architecture and hardware", "Number systems and conversions", "Data representation", "Logic gates and Boolean algebra"],
        objectives: ["Recall computer architecture and hardware facts", "Convert numbers between bases accurately", "Recall character codes, BCD and parity", "Apply logic gates and Boolean laws"],
        lesson: {
          title: "Revising Hardware and Data Representation",
          summary: "Consolidate hardware and data representation for WAEC/NECO.",
          minutes: 45,
          notes: `## Architecture
von Neumann: CPU (CU, ALU, registers), memory holding data and instructions, I/O, buses (data — two-way; address — one-way; control). Registers: PC, MAR, MDR, CIR, accumulator. Fetch–decode–execute. n address lines → 2 to the power n locations.

## Memory and storage
RAM (DRAM — refresh, main memory; SRAM — cache), ROM (PROM, EPROM — UV, EEPROM — electrical; firmware/BIOS). Virtual memory. Storage: tape (sequential), HDD, SSD, optical.

## Number systems
- decimal → base n: repeated division, read remainders upward
- base n → decimal: place values
- binary ↔ octal (groups of 3), binary ↔ hex (groups of 4)
- examples: 156 = 234₈; 254 = FE₁₆; 110101₂ = 65₈; 11010110₂ = D6₁₆
- binary addition: 1 + 1 = 10; 1 + 1 + 1 = 11

## Data representation
ASCII (7-bit; A = 65, a = 97), Unicode, EBCDIC; BCD (59 = 0101 1001); pixels and colour depth (8 bits → 256 colours; size = width × height × depth); sound sampling; parity bits (even/odd).

## Logic
AND (all 1s), OR (any 1), NOT (inverts), NAND, NOR (universal gates), XOR (inputs differ). Truth table rows = 2 to the power n.
Boolean laws: A · 1 = A; A + 0 = A; A · 0 = 0; A + 1 = 1; A + A' = 1; A · A' = 0; absorption A + A · B = A.
De Morgan: (A · B)' = A' + B'; (A + B)' = A' · B'.
Half adder: Sum = A XOR B; Carry = A AND B.`,
          examples: `**Example 1.** Convert 45 to binary. *Answer:* **101101**.

**Example 2.** What is the output of a NOR gate with inputs 0 and 0? *Answer:* **1**.

**Example 3.** Convert 7F₁₆ to decimal. *Answer:* 7 × 16 + 15 = **127**.`,
        },
        questions: [
          ["E", "The binary equivalent of 45 is", "101101", "110101", "101011", "100101", "32 + 8 + 4 + 1."],
          ["E", "A NOR gate with inputs 0 and 0 gives", "1", "0", "00", "2", "NOT of OR(0,0)."],
          ["E", "During the fetch stage, the address of the instruction to fetch is taken from the", "program counter", "accumulator", "MDR", "control bus", "PC points to the next instruction."],
          ["M", "The hexadecimal number 7F in decimal is", "127", "115", "247", "79", "7 × 16 + 15. Answer: 127."],
          ["M", "The decimal number 64 in octal is", "100", "64", "80", "1000", "1 × 64. Answer: 100."],
          ["M", "The RAM type used for cache memory is", "SRAM", "DRAM", "EPROM", "PROM", "Static RAM is faster."],
          ["M", "In BCD, the decimal number 83 is", "1000 0011", "1010011", "0011 1000", "1000 0101", "8 = 1000, 3 = 0011."],
          ["H", "The binary number 101111 in octal is", "57", "75", "47", "137", "101 = 5, 111 = 7."],
          ["H", "Applying De Morgan's theorem to NOT (A OR B) gives", "A' · B'", "A' + B'", "A · B", "A + B", "Break the bar, change the sign."],
          ["H", "An image of 200 × 100 pixels with 24-bit colour needs", "60,000 bytes", "20,000 bytes", "480,000 bytes", "2,400 bytes", "200 × 100 × 24 ÷ 8."],
        ],
      },
      {
        week: 2,
        title: "WAEC revision: software, programming and algorithms",
        subtopics: ["Operating systems and software", "Programming languages and translators", "BASIC and Python programs", "Algorithms, searching and sorting"],
        objectives: ["Recall OS types, functions and utilities", "Recall language generations, paradigms and translators", "Predict outputs of BASIC and Python programs", "Trace searching and sorting algorithms"],
        lesson: {
          title: "Revising Software and Programming",
          summary: "Consolidate software and programming topics for WAEC/NECO.",
          minutes: 45,
          notes: `## Software
system software (OS, utilities, translators, drivers) vs application software. OS types: single-user, multi-user, real-time, batch, embedded, mobile. Multitasking, multiprogramming, multiprocessing, time-sharing. Utilities: defragmenter, disk cleanup, compression, antivirus, backup.

## Languages
1GL machine, 2GL assembly, 3GL high-level, 4GL (SQL), 5GL (Prolog). Paradigms: procedural, OOP (class, object, encapsulation, inheritance, polymorphism), event-driven. Translators: compiler (whole program), interpreter (line by line), assembler. Errors: syntax, logic, runtime.

## BASIC
REM, LET, INPUT, PRINT, READ/DATA, GOTO, END; IF…THEN…ELSE; FOR…NEXT with STEP; GOSUB/RETURN; DIM arrays; SQR, ABS, INT. Operator order: ( ) → ^ → * / → \\ → MOD → + −.
2 + 3 * 4 ^ 2 = 50.

## Python
print, input, int, float; operators / // % and the power operator (two asterisks); if/elif/else; for with range; while; lists (index from 0); def and return; files with "r", "w", "a".

## Algorithms
problem solving steps; algorithm properties; flowchart symbols (oval, parallelogram, rectangle, diamond); linear search (any list), binary search (sorted, halves each time), bubble sort (swap adjacent pairs); stacks (LIFO: push, pop) and queues (FIFO: enqueue, dequeue).

## PDLC and testing
define, analyse, design, code, test, document, implement, maintain. Test data: normal, boundary, erroneous. Unit, integration, system, alpha, beta, acceptance testing.`,
          examples: `**Example 1.** In BASIC, evaluate 10 - 2 ^ 3. *Answer:* 2 ^ 3 = 8; 10 − 8 = **2**.

**Example 2.** In Python, what is 15 % 4? *Answer:* **3**.

**Example 3.** Which search halves the list each time? *Answer:* **binary search**.`,
        },
        questions: [
          ["E", "A C program is translated in full into object code before running by a", "compiler", "interpreter", "assembler only", "linker only", "It compiles before running."],
          ["E", "The BASIC keyword for a comment is", "REM", "LET", "GOTO", "DIM", "Remarks are ignored."],
          ["E", "A stack follows", "LIFO", "FIFO", "random order", "alphabetical order", "Last In, First Out."],
          ["M", "In BASIC, 10 - 2 ^ 3 evaluates to", "2", "512", "64", "-6", "Power first. Answer: 2."],
          ["M", "In Python, 15 % 4 gives", "3", "3.75", "4", "11", "Remainder of 15 ÷ 4."],
          ["M", "The search that requires a sorted list is", "binary search", "linear search", "bubble search", "sequential search", "It halves the list."],
          ["M", "The OOP concept in which a class acquires another class's properties is", "inheritance", "encapsulation", "polymorphism", "iteration", "Child from parent."],
          ["H", "In Python, for i in range(3, 10, 3) produces", "3, 6, 9", "3, 6, 9, 12", "3, 4, 5 … 10", "10, 7, 4", "Step of 3, stops before 10."],
          ["H", "After one pass of bubble sort on [7, 2, 5], the list is", "2, 5, 7", "2, 7, 5", "7, 5, 2", "5, 2, 7", "7 moves to the end."],
          ["H", "For a valid age range of 13 to 19, the test value 13 is", "boundary data", "erroneous data", "normal data only", "invalid data", "It is at the edge."],
        ],
      },
      {
        week: 3,
        title: "WAEC revision: data management, networks and security",
        subtopics: ["Files and databases", "SQL and normalisation", "Networks and the internet", "Security and ethics"],
        objectives: ["Recall file organisation and database concepts", "Write simple SQL queries and recall normal forms", "Recall network models, devices and protocols", "Recall security measures and ethical issues"],
        lesson: {
          title: "Revising Data, Networks and Security",
          summary: "Consolidate data management, networks and security for WAEC/NECO.",
          minutes: 45,
          notes: `## Files
data hierarchy: bit → byte → field → record → file → database. Master, transaction, reference, backup files. Organisation: serial, sequential, indexed sequential, random. Access: sequential, direct, indexed. Processing: batch, online, real-time, time-sharing, distributed.

## Databases
DBMS (Access, MySQL, Oracle); models: hierarchical (tree), network, relational (tables — Codd). Keys: primary, candidate, composite, foreign. Relationships 1:1, 1:M, M:N (link table). Referential integrity. Validation: presence, range, type, length, format, lookup, check digit.

## SQL
SELECT … FROM … WHERE … ORDER BY; INSERT INTO; UPDATE … SET … WHERE; DELETE FROM … WHERE; aggregate COUNT, SUM, AVG, MAX, MIN; LIKE 'A%'. DDL, DML, DCL.

## Normalisation
1NF atomic values; 2NF no partial dependency; 3NF no transitive dependency. Anomalies: insertion, update, deletion.

## Networks
PAN, LAN, MAN, WAN; topologies (bus, star, ring, mesh); devices (NIC, hub, switch, router, modem, access point, repeater). Transmission: simplex, half-duplex, full-duplex; serial vs parallel. OSI 7 layers (Application, Presentation, Session, Transport, Network, Data Link, Physical); TCP/IP 4 layers. IPv4 32-bit, IPv6 128-bit, MAC address; DNS, DHCP; HTTP/HTTPS, FTP, SMTP, POP3, IMAP. TCP reliable, UDP fast.

## Security and ethics
malware types; firewall, IDS/IPS; encryption (symmetric — one key; asymmetric — public/private); VPN; TLS/HTTPS; 2FA; backups (full, incremental). Ethics: copyright, patent, trademark; piracy; Nigeria Data Protection Act 2023; Cybercrimes Act 2015; green computing; e-waste.`,
          examples: `**Example 1.** Write SQL to list all records sorted by Score from highest. *Answer:* **SELECT * FROM Students ORDER BY Score DESC;**

**Example 2.** At which OSI layer do switches operate? *Answer:* **Data Link** (layer 2).

**Example 3.** Which encryption uses a public and private key? *Answer:* **asymmetric**.`,
        },
        questions: [
          ["E", "A file of permanent main records is a", "master file", "transaction file", "temporary file", "log file only", "It is updated periodically."],
          ["E", "The SQL keyword that sorts results is", "ORDER BY", "WHERE", "SET", "FROM", "ASC or DESC. Answer: ORDER BY."],
          ["E", "A network linking the offices of a state government across one city is a", "MAN", "LAN", "PAN", "WAN only", "Metropolitan Area Network."],
          ["M", "A field in one table that links to the primary key of another is a", "foreign key", "candidate key", "composite key", "secondary index", "It creates relationships."],
          ["M", "Switches operate at the OSI", "Data Link layer", "Network layer", "Application layer", "Session layer", "They use MAC addresses."],
          ["M", "The protocol used to receive email that keeps messages on the server is", "IMAP", "SMTP", "FTP", "DHCP", "IMAP syncs mail."],
          ["M", "Encryption using one shared secret key is", "symmetric", "asymmetric", "hashing", "compression", "Same key both ways."],
          ["H", "A table in which non-key fields depend only on the key and not on other non-key fields is in", "third normal form", "first normal form only", "unnormalised form", "zero normal form", "No transitive dependency."],
          ["H", "Airline seat booking systems mainly use", "real-time processing with direct access files", "batch processing with tape", "manual processing", "serial files only", "Immediate updates are needed."],
          ["H", "The Nigerian law that set up the Nigeria Data Protection Commission was passed in", "2023", "2015", "2001", "1999", "Nigeria Data Protection Act 2023."],
        ],
      },
      {
        week: 4,
        title: "WAEC revision: systems, applications and mixed practice",
        subtopics: ["Systems development and information systems", "Application packages", "Emerging technologies and AI", "Examination techniques and mixed practice"],
        objectives: ["Recall the SDLC, changeover and maintenance", "Recall features of application packages", "Recall facts on AI, robotics and emerging technologies", "Apply examination techniques to mixed questions"],
        lesson: {
          title: "Final Revision and Exam Technique",
          summary: "Consolidate remaining topics and practise examination technique.",
          minutes: 45,
          notes: `## Systems
SDLC: identification, feasibility (TELOS), analysis (interviews, questionnaires, observation, document review), design, development, testing, implementation, documentation, evaluation and maintenance.
Changeover: direct (risky), parallel (safest, costly), pilot (one site first), phased (module by module).
Maintenance: corrective, adaptive, perfective, preventive.
Information systems: TPS, MIS, DSS, EIS, ES, GIS; qualities of information — accurate, timely, relevant, complete.

## Application packages
- word processing: mail merge, headers/footers, styles and table of contents, track changes
- spreadsheets: relative vs absolute references, IF, COUNTIF, VLOOKUP, RANK, charts, filters, conditional formatting
- presentation: transitions vs animations
- DTP: frames, master pages, leading, kerning, CMYK
- databases: tables, queries, forms, reports
- web design: HTML tags (p, h1, a with href, img with src and alt), CSS styling, hosting and domains
- multimedia: lossy (JPEG, MP3, MP4) vs lossless (PNG, ZIP, FLAC)

## Emerging technologies
AI (Turing test; machine learning; NLP; computer vision; expert systems — knowledge base, inference engine, user interface), robotics (sensors, controller, actuators), cloud (SaaS, PaaS, IaaS), IoT, blockchain, VR/AR.
Nigeria: NITDA, NCC, NIMC, NDPC, CPN; e-government (NIN, IPPIS, TSA, JAMB CBT); BVN, USSD, POS; challenges — power, data cost, cybercrime.

## Examination technique
- read **all instructions**; note the number of questions to answer
- for objectives, **eliminate** wrong options; watch for **NOT** and **EXCEPT**
- in theory questions, **define terms**, give **examples**, and draw labelled **diagrams** (flowcharts, truth tables, topologies) where useful
- show **working** in number conversions and program tracing
- write programs neatly with correct syntax and indentation
- manage time; review answers`,
          examples: `**Example 1.** Which changeover runs old and new systems together? *Answer:* **parallel**.

**Example 2.** Which compression is used by JPEG? *Answer:* **lossy**.

**Example 3.** Which part of an expert system contains the rules? *Answer:* the **knowledge base**.`,
        },
        questions: [
          ["E", "The changeover method that runs old and new systems together is", "parallel", "direct", "pilot", "phased", "Both systems run."],
          ["E", "JPEG images use", "lossy compression", "lossless compression", "no compression", "encryption only", "Some data is discarded."],
          ["E", "Producing personalised letters from one letter and a data list is", "mail merge", "track changes", "conditional formatting", "kerning", "It merges data into letters."],
          ["M", "Feasibility that asks whether the technology and skills are available is", "technical feasibility", "economic feasibility", "legal feasibility", "schedule feasibility", "Can it be built?"],
          ["M", "A system that helps managers with what-if analysis is a", "decision support system", "transaction processing system", "office automation system", "payroll file", "DSS supports decisions."],
          ["M", "In cloud computing, renting servers and storage is", "Infrastructure as a Service", "Software as a Service", "Platform as a Service", "Desktop as a Device", "IaaS provides infrastructure."],
          ["M", "The spreadsheet function that returns a student's position in a class is", "RANK", "VLOOKUP", "COUNTIF", "ROUND", "RANK orders values."],
          ["H", "Fixing bugs discovered after a system has been installed is", "corrective maintenance", "adaptive maintenance", "perfective maintenance", "pilot changeover", "It corrects errors."],
          ["H", "In HTML, the attribute that gives the destination of a hyperlink is", "href", "src", "alt", "style", "Hypertext reference."],
          ["H", "When a question says 'All the following are input devices EXCEPT', you should choose", "the option that is not an input device", "any input device", "the first option", "the longest option", "EXCEPT reverses the task."],
        ],
      },
    ],
  },
];
