import type { TermPlan } from "../types";

/** SS3 Digital Technologies, First Term — NERDC 2025 scheme. Code samples are in Python. */
export const ss3t1: TermPlan = {
  classCode: "SS3",
  term: 1,
  topics: [
    {
      week: 1,
      title: "Review of Key Digital Technology Concepts",
      subtopics: ["Hardware and software", "Data representation", "Algorithms and basic programming", "Networks, the internet and digital safety"],
      objectives: ["Classify hardware and software", "Convert between number bases and state units of storage", "Recall the basic constructs of programming", "Recall the fundamentals of networks and digital safety"],
      lesson: {
        title: "Foundations Revisited",
        summary: "A recap of the core ideas from earlier classes on which the SS3 work builds.",
        minutes: 40,
        notes: `## Hardware and software
- **Hardware** — the physical parts: **input** (keyboard, mouse, scanner, sensors), **processing** (the **CPU**: control unit, arithmetic and logic unit, registers), **memory** (**RAM** — volatile; **ROM** — non-volatile), **storage** (hard disk, solid-state drive, flash), **output** (monitor, printer, speakers).
- **Software** — the programs: **system software** (operating systems, utilities, translators) and **application software** (word processors, spreadsheets, browsers, games).

## Data representation
Computers store everything in **binary** (base 2).
| Unit | Size |
|---|---|
| bit | a single 0 or 1 |
| byte | 8 bits |
| kilobyte (KB) | 1024 bytes |
| megabyte (MB) | 1024 KB |
| gigabyte (GB) | 1024 MB |
| terabyte (TB) | 1024 GB |

- Decimal 13 = binary **1101** (8 + 4 + 1).
- Binary 1010 = decimal **10**.
- **Hexadecimal** (base 16) uses 0–9 and A–F: binary 1111 = F = decimal 15.
- Characters are coded in **ASCII** or **Unicode**.

## Algorithms and programming
An **algorithm** is a finite sequence of steps for solving a problem, expressed as **pseudocode** or a **flowchart** (oval — start/stop; parallelogram — input/output; rectangle — process; diamond — decision).

The three basic control structures:
1. **sequence** — steps in order
2. **selection** — if … else
3. **iteration (looping)** — for, while

A **variable** is a named storage location; common **data types** are integer, float, string and Boolean. A **translator** converts source code to machine code: **compiler** (whole program at once), **interpreter** (line by line), **assembler** (assembly language).

## Networks and the internet
- **LAN**, **MAN**, **WAN**; the **internet** is the global network of networks.
- **Topologies:** bus, star, ring, mesh.
- **Devices:** router, switch, hub, modem, access point.
- **WWW**, browsers, URLs, e-mail, search engines.

## Digital safety and ethics
strong passwords and two-factor authentication; antivirus and updates; beware of phishing; respect copyright; protect personal data; netiquette.`,
        examples: `**Example 1.** Convert decimal 25 to binary. *Solution:* 16 + 8 + 1 = **11001**.

**Example 2.** How many bytes are in 2 KB? *Solution:* 2 × 1024 = **2048 bytes**.

**Example 3.** Which translator converts a whole program at once? *Solution:* a **compiler**.`,
      },
      questions: [
        ["E", "The part of the computer that carries out arithmetic and logical operations is the", "ALU", "control unit", "RAM", "hard disk", "The arithmetic and logic unit is part of the CPU."],
        ["E", "One byte is equal to", "8 bits", "4 bits", "16 bits", "1024 bits", "A byte is a group of eight bits."],
        ["E", "Which of these is system software?", "Operating system", "Word processor", "Web browser", "Spreadsheet", "It manages the hardware and other programs."],
        ["M", "The binary equivalent of decimal 13 is", "1101", "1011", "1110", "1001", "8 + 4 + 1 = 13."],
        ["M", "A translator that converts a program one line at a time is", "an interpreter", "a compiler", "an assembler", "a linker", "It translates and executes line by line."],
        ["M", "In a flowchart, a decision is represented by a", "diamond", "rectangle", "oval", "parallelogram", "It has two exits, yes and no."],
        ["M", "Memory that loses its contents when power is switched off is", "RAM", "ROM", "a hard disk", "a flash drive", "RAM is volatile."],
        ["H", "The decimal equivalent of the hexadecimal number 2F is", "47", "31", "215", "32", "2 × 16 + 15 = 47."],
        ["H", "The control structure that repeats a block of statements is", "iteration", "sequence", "selection", "declaration", "Loops such as for and while repeat."],
        ["H", "How many megabytes are in 4 gigabytes?", "4096", "4000", "1024", "400", "4 × 1024 = 4096 MB."],
      ],
      jamb: [
        ["M", "The binary number 101101 in decimal is", "45", "43", "53", "37", "32 + 8 + 4 + 1 = 45."],
        ["H", "Which of the following is NOT a function of an operating system?", "Compiling application source code", "Memory management", "File management", "Process scheduling", "Compilation is done by a translator, not the operating system."],
      ],
    },
    {
      week: 2,
      title: "Advanced Programming I: Functions, Arrays and Lists",
      subtopics: ["Functions: definition, parameters and return values", "Scope of variables", "Arrays and lists", "List operations and traversal"],
      objectives: ["Define and call functions with parameters and return values", "Distinguish local from global variables", "Create and index arrays or lists", "Traverse and manipulate lists with loops"],
      lesson: {
        title: "Functions and Lists",
        summary: "Breaking programs into reusable functions and storing many values in a single list.",
        minutes: 80,
        notes: `## Functions
A **function** (subprogram, procedure) is a **named block of code that performs one task** and can be called whenever needed.

### Why use functions?
- **reuse** — write once, call many times
- **modularity** — a big problem is split into small parts
- easier **testing and debugging**
- programs are shorter and more readable

### Defining and calling (Python)
def add(a, b):
  return a + b

total = add(3, 5)

- **def** introduces the definition; **add** is the name.
- **a** and **b** are **parameters** (placeholders); 3 and 5 are **arguments** (actual values).
- **return** sends a result back to the caller; total becomes 8.
- A function with no return statement returns nothing (None).

### Built-in and user-defined functions
Built-in: print(), input(), len(), int(), max(), sum(). **User-defined** functions are written by the programmer.

### Scope
- A **local variable** is created inside a function and exists only there.
- A **global variable** is created outside all functions and can be read anywhere.

### Recursion
A function that **calls itself**, with a **base case** to stop, e.g. factorial: n! = n × (n − 1)!, with 0! = 1.

## Arrays and lists
An **array** is a collection of items stored under **one name**, each identified by an **index**. In Python the usual structure is the **list**.

scores = [45, 67, 89, 72]

| Expression | Result |
|---|---|
| scores[0] | 45 — indexing starts at **0** |
| scores[3] | 72 |
| scores[-1] | 72 — the last item |
| len(scores) | 4 |
| scores[1:3] | [67, 89] — a slice |

### Operations
- scores.append(90) — add to the end
- scores.insert(1, 50) — insert at position 1
- scores.remove(67) — delete a value
- scores.pop() — remove and return the last item
- scores.sort() — arrange in order
- scores[2] = 95 — change an element (lists are **mutable**)

### Traversal
for s in scores:
  print(s)

total = 0
for s in scores:
  total = total + s
average = total / len(scores)

### Searching and sorting
- **Linear search** checks each element in turn.
- **Binary search** repeatedly halves a **sorted** list — much faster.
- **Bubble sort** repeatedly swaps adjacent items that are out of order.

### Two-dimensional arrays
A list of lists represents a table: grid[row][column].

## Arrays versus simple variables
One list of 40 marks replaces 40 separate variables and can be processed with a loop.`,
        examples: `**Example 1.** What is printed by: nums = [4, 9, 2]; print(nums[1])? *Solution:* **9** — index 1 is the second item.

**Example 2.** A function is defined as def square(n): return n * n. What is square(6)? *Solution:* **36**.

**Example 3.** State two advantages of functions. *Solution:* **Code reuse** and **easier debugging**.`,
      },
      questions: [
        ["E", "A named block of code that performs a specific task is a", "function", "variable", "comment", "constant", "It can be called whenever needed."],
        ["E", "In most programming languages, the index of the first element of an array is", "0", "1", "-1", "10", "Indexing starts from zero."],
        ["E", "The keyword used to define a function in Python is", "def", "func", "define", "sub", "For example, def add(a, b):"],
        ["M", "The values passed to a function when it is called are", "arguments", "indexes", "comments", "operators", "Parameters are the placeholders in the definition."],
        ["M", "Given scores = [45, 67, 89, 72], the value of scores[2] is", "89", "67", "72", "45", "Index 2 is the third element."],
        ["M", "The statement that sends a result from a function back to the caller is", "return", "print", "input", "break", "Return hands a value back."],
        ["M", "A variable declared inside a function is", "a local variable", "a global variable", "a constant", "an array", "It exists only within that function."],
        ["H", "Given nums = [3, 8, 5, 1], the value of len(nums) + nums[-1] is", "5", "4", "9", "12", "Length 4 plus the last item 1."],
        ["H", "A function that calls itself is described as", "recursive", "iterative", "global", "built-in", "It needs a base case to stop."],
        ["H", "A search method that repeatedly halves a sorted list is", "binary search", "linear search", "bubble sort", "sequential access", "It is far faster than checking every item."],
      ],
      jamb: [
        ["M", "Which list method adds an item to the end of a Python list?", "append()", "insert(0, x)", "pop()", "remove()", "append places the item at the end."],
        ["H", "A function is defined as def f(x): return 2 * x + 1. The value of f(f(2)) is", "11", "9", "5", "10", "f(2) = 5 and f(5) = 11."],
      ],
    },
    {
      week: 3,
      title: "Advanced Programming II: Object-Oriented Programming Basics",
      subtopics: ["Classes and objects", "Attributes and methods", "Encapsulation and inheritance", "Polymorphism and abstraction"],
      objectives: ["Explain the object-oriented approach", "Define a class and create objects from it", "Explain encapsulation and inheritance", "Explain polymorphism and abstraction"],
      lesson: {
        title: "Thinking in Objects",
        summary: "Organising programs around objects that combine data with the operations on that data.",
        minutes: 80,
        notes: `## The object-oriented approach
**Object-oriented programming (OOP)** organises a program around **objects** — units that bundle **data** and the **functions that act on the data** — instead of a long list of instructions (procedural programming). OOP languages include **Python, Java, C++ and C#**.

## Classes and objects
- A **class** is a **blueprint or template** that describes a kind of thing.
- An **object** is an **instance** of a class — one actual thing built from the blueprint.

*Class:* Student. *Objects:* Ada, Musa, Tolu — each a student with its own details.

## Attributes and methods
- **Attributes (properties)** — the data an object holds: name, age, score.
- **Methods** — the functions an object can perform: display(), update_score().

### A class in Python
class Student:
  def __init__(self, name, score):
    self.name = name
    self.score = score

  def passed(self):
    return self.score >= 50

s1 = Student("Ada", 72)
print(s1.name)
print(s1.passed())

- **__init__** is the **constructor**: it runs automatically when an object is created and sets its attributes.
- **self** refers to the object itself.
- s1 = Student("Ada", 72) **instantiates** an object.
- s1.passed() calls a method using **dot notation**; it gives True.

## The four pillars of OOP
| Pillar | Meaning | Example |
|---|---|---|
| **encapsulation** | wrapping data and methods together and **hiding** the data from direct outside access | a bank account's balance can be changed only through deposit() and withdraw() |
| **inheritance** | a new class (**child / subclass**) takes over the attributes and methods of an existing class (**parent / superclass**) | class Prefect(Student) has everything a Student has, plus a post |
| **polymorphism** | "many forms": the same method name behaves differently for different classes | area() for a Circle and for a Rectangle |
| **abstraction** | showing only essential features and hiding complex detail | you call car.start() without knowing how the engine works |

### Inheritance in Python
class Prefect(Student):
  def duty(self):
    return "Supervises the class"

A Prefect object can use name, score, passed() and duty().

## Advantages of OOP
- **reusability** through inheritance
- **modularity** — each class is developed and tested separately
- **security** of data through encapsulation
- easier **maintenance** and extension
- models **real-world** things naturally
- suits **large** projects and teamwork

## Disadvantages
more planning needed; programs can be larger and slower; a steeper learning curve for small tasks.

## Procedural versus object-oriented
| | Procedural | Object-oriented |
|---|---|---|
| organised around | functions | objects |
| data | often global, shared | hidden inside objects |
| reuse | by calling functions | by inheritance |
| examples | C, Pascal, BASIC | Java, Python, C++ |`,
        examples: `**Example 1.** Distinguish a class from an object. *Solution:* A **class** is a blueprint; an **object** is an instance created from it.

**Example 2.** Which OOP feature allows a class Car to reuse the code of a class Vehicle? *Solution:* **inheritance**.

**Example 3.** What is the purpose of the __init__ method in Python? *Solution:* It is the **constructor** that sets up a new object's attributes.`,
      },
      questions: [
        ["E", "In object-oriented programming, a blueprint for creating objects is a", "class", "method", "loop", "variable", "Objects are instances of a class."],
        ["E", "An instance of a class is called", "an object", "a function", "a compiler", "a module", "It is one actual thing built from the class."],
        ["E", "Which of these is an object-oriented programming language?", "Java", "HTML", "SQL", "Machine code", "Java is built around classes and objects."],
        ["M", "The functions defined inside a class are called", "methods", "attributes", "constructors only", "packages", "Methods describe what an object can do."],
        ["M", "The OOP feature by which a subclass acquires the properties of a parent class is", "inheritance", "encapsulation", "polymorphism", "abstraction", "It promotes reuse of code."],
        ["M", "Bundling data and methods together and restricting direct access to the data is", "encapsulation", "inheritance", "iteration", "recursion", "It protects the data of an object."],
        ["M", "In Python, the special method that runs when an object is created is", "__init__", "__main__", "start()", "create()", "It is the constructor."],
        ["H", "The ability of the same method name to behave differently in different classes is", "polymorphism", "encapsulation", "instantiation", "compilation", "The word means 'many forms'."],
        ["H", "In the Python statement s1 = Student('Ada', 72), the process taking place is", "instantiation", "inheritance", "recursion", "abstraction", "An object is being created from the class."],
        ["H", "Hiding complex implementation details and showing only essential features is", "abstraction", "inheritance", "iteration", "polymorphism", "The user need not know how a method works inside."],
      ],
      jamb: [
        ["M", "In a class, the data items that describe an object are known as", "attributes", "methods", "arguments", "operators", "Attributes hold the object's state."],
        ["H", "Which of the following is an advantage of object-oriented programming over procedural programming?", "Code reuse through inheritance", "Programs always run faster", "No planning is required", "It needs no translator", "A subclass reuses and extends existing code."],
      ],
    },
    {
      week: 4,
      title: "Software Development Life Cycle (SDLC)",
      subtopics: ["Meaning of the SDLC", "Phases of the SDLC", "The waterfall model", "The agile model"],
      objectives: ["Explain the software development life cycle", "Describe each phase of the SDLC", "Describe the waterfall model with its advantages and disadvantages", "Describe the agile model and compare it with waterfall"],
      lesson: {
        title: "How Software Is Built",
        summary: "The ordered stages through which software is planned, built, tested and maintained, and two models for organising them.",
        minutes: 40,
        notes: `## Meaning
The **software development life cycle (SDLC)** is the **structured process** followed to produce high-quality software, from the first idea to retirement. It helps teams deliver software that meets users' needs on time and within budget.

## Phases
| Phase | Activities | Output |
|---|---|---|
| **1. Planning / feasibility** | define the problem; estimate cost, time and resources; check technical, economic and operational feasibility | feasibility report; project plan |
| **2. Requirements analysis** | gather what users need by interviews, questionnaires, observation | **requirements specification (SRS)** |
| **3. Design** | plan the architecture, database, screens and algorithms — flowcharts, data-flow diagrams, UML | design document |
| **4. Implementation (coding)** | programmers write the code | source code |
| **5. Testing** | find and fix errors — unit, integration, system and **user acceptance testing** | tested software; test reports |
| **6. Deployment** | install and release to users; train them; convert data | working system |
| **7. Maintenance** | fix bugs (**corrective**), adjust to new environments (**adaptive**), add features (**perfective**) | updates |

### Testing terms
- **Alpha testing** — by the developers in-house; **beta testing** — by selected real users.
- **Black-box testing** checks outputs without looking at the code; **white-box testing** examines the code's internal logic.
- A **bug** is an error in a program; **debugging** is finding and removing it.

### Changeover methods
**direct** (stop the old, start the new), **parallel** (run both together), **pilot** (one branch first), **phased** (part by part).

## The waterfall model
The phases are completed **strictly one after another**; each must finish before the next begins, like water flowing down steps.

*Advantages:* simple and easy to manage; clear milestones and documentation; suits small projects with **stable, well-understood requirements**.
*Disadvantages:* **rigid** — hard to go back and change; working software appears only late; errors in requirements are costly; poor for long or uncertain projects.

## The agile model
Software is built in **small increments** through repeated short cycles called **iterations or sprints** (1–4 weeks). Each sprint plans, designs, codes and tests a small piece and delivers working software; the **customer gives feedback** continually.

- Common frameworks: **Scrum** (product owner, scrum master, team; daily stand-up meetings; sprint review) and **Kanban** (a board of cards: To do, Doing, Done).
- Values: individuals and interactions; working software; customer collaboration; responding to change.

*Advantages:* **flexible** to changing requirements; early and frequent delivery; close customer involvement; problems found early.
*Disadvantages:* less documentation; harder to predict final cost and time; needs experienced, committed teams and an available customer.

## Comparison
| | Waterfall | Agile |
|---|---|---|
| approach | linear, sequential | iterative, incremental |
| requirements | fixed at the start | may change |
| delivery | once, at the end | frequent, in small parts |
| customer involvement | mainly at start and end | throughout |
| documentation | heavy | light |

## Other models
**prototyping**, **spiral** (adds risk analysis), **V-model**, **rapid application development**.`,
        examples: `**Example 1.** In which SDLC phase are users' needs collected? *Solution:* **Requirements analysis**.

**Example 2.** Give one advantage and one disadvantage of the waterfall model. *Solution:* **Simple to manage**; but **rigid** — changes are hard once a phase is finished.

**Example 3.** What is a sprint? *Solution:* A **short, fixed cycle** (1–4 weeks) in agile development that delivers a working piece of software.`,
      },
      questions: [
        ["E", "SDLC stands for Software Development", "Life Cycle", "Logic Code", "Language Compiler", "Layer Control", "It is the structured process for building software."],
        ["E", "The SDLC phase in which programmers write the code is", "implementation", "planning", "maintenance", "requirements analysis", "It is also called coding."],
        ["E", "Finding and removing errors in a program is called", "debugging", "compiling", "formatting", "booting", "A bug is an error."],
        ["M", "The SDLC model in which each phase must be completed before the next begins is the", "waterfall model", "agile model", "spiral model", "prototype model", "It is linear and sequential."],
        ["M", "In agile development, a short time-boxed cycle of work is called a", "sprint", "phase gate", "waterfall", "milestone review", "Each sprint delivers working software."],
        ["M", "Correcting faults and adding features after software has been released takes place during", "maintenance", "design", "feasibility study", "coding", "Maintenance continues for the life of the software."],
        ["M", "Testing of software by selected real users before general release is", "beta testing", "alpha testing", "unit testing", "white-box testing", "Alpha testing is done in-house by developers."],
        ["H", "A disadvantage of the waterfall model is that", "changes to requirements are difficult once a phase is complete", "it produces too little documentation", "customers are involved every week", "it has no defined phases", "Its rigidity makes late changes costly."],
        ["H", "Running the old and the new systems side by side for a period is", "parallel changeover", "direct changeover", "pilot changeover", "phased changeover", "It is safe but costly."],
        ["H", "Testing that examines the internal logic and structure of the code is", "white-box testing", "black-box testing", "acceptance testing", "beta testing", "Black-box testing looks only at inputs and outputs."],
      ],
      jamb: [
        ["M", "The document that states what a proposed system must do, produced after analysis, is the", "requirements specification", "user manual", "test report", "source code listing", "It guides design and testing."],
        ["H", "Which of the following is a characteristic of the agile model?", "Frequent delivery of working software with customer feedback", "A single delivery at the end of the project", "Requirements frozen at the start", "Heavy documentation before coding", "Agile is iterative and responsive to change."],
      ],
    },
    {
      week: 6,
      title: "Networking II: IP Addressing, Subnetting and Protocols",
      subtopics: ["IP addresses: IPv4 and IPv6", "Address classes, public and private addresses", "Subnetting and subnet masks", "Network protocols and the TCP/IP model"],
      objectives: ["Explain IP addressing and distinguish IPv4 from IPv6", "Identify address classes and private address ranges", "Explain subnetting and calculate hosts in a subnet", "Describe common protocols and the layers of TCP/IP"],
      lesson: {
        title: "Addresses and Rules of the Network",
        summary: "How devices are identified on a network and the protocols that let them communicate.",
        minutes: 80,
        notes: `## IP addresses
An **IP (Internet Protocol) address** is a **unique numerical label** identifying a device on a network.

### IPv4
- **32 bits**, written as four decimal numbers (**octets**) from 0 to 255 separated by dots: **192.168.1.10**.
- About 4.3 billion addresses (2 to the power 32).

### IPv6
- **128 bits**, written as eight groups of **hexadecimal** digits separated by colons: 2001:0db8:85a3:0000:0000:8a2e:0370:7334.
- Created because IPv4 addresses are running out.

### Parts of an address
Every address has a **network part** and a **host part**. The **subnet mask** shows which is which: in 255.255.255.0 the first three octets are the network.

## Address classes (IPv4)
| Class | First octet | Default mask | Use |
|---|---|---|---|
| **A** | 1–126 | 255.0.0.0 (/8) | very large networks |
| **B** | 128–191 | 255.255.0.0 (/16) | medium networks |
| **C** | 192–223 | 255.255.255.0 (/24) | small networks |
| **D** | 224–239 | — | multicasting |
| **E** | 240–255 | — | experimental |
127.0.0.1 is the **loopback** address (the device itself).

### Private addresses (not routed on the internet)
10.0.0.0 – 10.255.255.255; 172.16.0.0 – 172.31.255.255; 192.168.0.0 – 192.168.255.255. **NAT** (network address translation) lets many private devices share one public address.

### Static and dynamic addresses
A **static** address is set manually and does not change; a **dynamic** address is assigned automatically by a **DHCP** server.

## Subnetting
**Subnetting** divides a large network into smaller **subnetworks (subnets)** by **borrowing bits from the host part**.

**Why?** efficient use of addresses; less congestion; better security; easier management.

### CIDR notation
The number after the slash is the number of **network bits**: 192.168.1.0**/24** means mask 255.255.255.0.

### Calculating
- usable hosts per subnet = 2 to the power h, minus 2 (h = host bits; the first address is the **network address** and the last the **broadcast address**)
- number of subnets = 2 to the power n (n = borrowed bits)

| Prefix | Mask | Host bits | Usable hosts |
|---|---|---|---|
| /24 | 255.255.255.0 | 8 | 254 |
| /25 | 255.255.255.128 | 7 | 126 |
| /26 | 255.255.255.192 | 6 | 62 |
| /27 | 255.255.255.224 | 5 | 30 |
| /28 | 255.255.255.240 | 4 | 14 |

*Example:* 192.168.1.0/26 gives 4 subnets (two borrowed bits) of 62 usable hosts each: .0, .64, .128, .192.

## Protocols
A **protocol** is a **set of rules** governing communication between devices.

| Protocol | Function | Port |
|---|---|---|
| **TCP** | reliable, connection-oriented delivery | — |
| **UDP** | fast, connectionless delivery (streaming, games) | — |
| **IP** | addressing and routing of packets | — |
| **HTTP / HTTPS** | web pages / secure web pages | 80 / 443 |
| **FTP** | file transfer | 21 |
| **SMTP** | sending e-mail | 25 |
| **POP3 / IMAP** | receiving e-mail | 110 / 143 |
| **DNS** | translates domain names to IP addresses | 53 |
| **DHCP** | assigns IP addresses automatically | 67, 68 |
| **SSH** | secure remote login | 22 |

## The TCP/IP model
| Layer | Role | Examples |
|---|---|---|
| **application** | services to user programs | HTTP, FTP, SMTP, DNS |
| **transport** | end-to-end delivery | TCP, UDP |
| **internet** | addressing and routing | IP, ICMP |
| **network access (link)** | physical transmission | Ethernet, Wi-Fi |

The seven-layer **OSI model** (physical, data link, network, transport, session, presentation, application) is the reference model. A **MAC address** is the 48-bit hardware address of a network card.`,
        examples: `**Example 1.** To which class does the address 172.16.5.4 belong? *Solution:* **Class B** (first octet between 128 and 191).

**Example 2.** How many usable hosts are in a /27 subnet? *Solution:* 2 to the power 5, minus 2 = **30**.

**Example 3.** Which protocol translates www.example.com to an IP address? *Solution:* **DNS**.`,
      },
      questions: [
        ["E", "An IPv4 address consists of", "32 bits", "16 bits", "64 bits", "128 bits", "It is written as four octets."],
        ["E", "A set of rules governing communication between devices is a", "protocol", "topology", "packet", "port", "Devices must follow the same rules."],
        ["E", "The protocol used for transferring web pages is", "HTTP", "FTP", "SMTP", "DHCP", "HyperText Transfer Protocol."],
        ["M", "The IP address 192.168.10.5 belongs to class", "C", "A", "B", "D", "First octets 192 to 223 are class C."],
        ["M", "The service that automatically assigns IP addresses to devices is", "DHCP", "DNS", "FTP", "NAT", "Dynamic Host Configuration Protocol."],
        ["M", "The default subnet mask of a class B network is", "255.255.0.0", "255.0.0.0", "255.255.255.0", "255.255.255.255", "The first two octets are the network part."],
        ["M", "The protocol that translates domain names into IP addresses is", "DNS", "HTTP", "TCP", "POP3", "Domain Name System."],
        ["H", "The number of usable host addresses in a /26 subnet is", "62", "64", "30", "126", "2 to the power 6, minus 2."],
        ["H", "Which of these is a private IP address?", "10.20.30.40", "8.8.8.8", "172.50.1.1", "200.10.5.3", "The 10.0.0.0/8 range is reserved for private use."],
        ["H", "Subnetting a /24 network into /27 subnets produces", "8 subnets", "4 subnets", "16 subnets", "2 subnets", "Three borrowed bits give 2 to the power 3."],
      ],
      jamb: [
        ["M", "An IPv6 address is made up of", "128 bits", "32 bits", "48 bits", "64 bits", "It is written in hexadecimal groups separated by colons."],
        ["H", "In the TCP/IP model, the layer responsible for routing packets between networks is the", "internet layer", "application layer", "transport layer", "network access layer", "The Internet Protocol operates at this layer."],
      ],
    },
    {
      week: 8,
      title: "Cloud Computing and Virtualization",
      subtopics: ["Meaning of cloud computing", "Service and deployment models", "Virtual machines and hypervisors", "Remote servers; advantages and risks"],
      objectives: ["Explain cloud computing", "Distinguish the service and deployment models of the cloud", "Explain virtualization, virtual machines and hypervisors", "State the advantages and risks of cloud services"],
      lesson: {
        title: "Computing as a Service",
        summary: "Using computing power, storage and software over the internet, and running many virtual computers on one machine.",
        minutes: 40,
        notes: `## Cloud computing
**Cloud computing** is the delivery of **computing services — servers, storage, databases, networking, software — over the internet** ("the cloud"), on demand and usually paid for by use. The services run on **remote servers** in large **data centres**.

Everyday examples: Google Drive, OneDrive, iCloud, Gmail, Zoom, online banking, streaming services.

## Service models
| Model | What is provided | Examples |
|---|---|---|
| **IaaS** — Infrastructure as a Service | virtual machines, storage, networks; the user installs and manages the rest | Amazon EC2, Microsoft Azure VMs, Google Compute Engine |
| **PaaS** — Platform as a Service | a ready platform for developing and deploying applications | Google App Engine, Heroku |
| **SaaS** — Software as a Service | complete applications used through a browser | Gmail, Microsoft 365, Google Docs, Zoom |

## Deployment models
- **public cloud** — owned by a provider and shared by many customers
- **private cloud** — used by one organisation only
- **hybrid cloud** — a combination of the two
- **community cloud** — shared by organisations with common concerns

## Characteristics
on-demand self-service; access from anywhere; pooled resources; **scalability (elasticity)**; measured, pay-as-you-go service.

## Virtualization
**Virtualization** is the creation of a **software-based (virtual) version** of a computer, server, storage device or network.

- A **virtual machine (VM)** is a software computer that runs its own operating system and applications as if it were a physical computer.
- The **hypervisor** is the software that creates and manages VMs and shares the hardware among them.
  - **Type 1 (bare-metal)** runs directly on the hardware: VMware ESXi, Microsoft Hyper-V, KVM.
  - **Type 2 (hosted)** runs on top of an operating system: Oracle VirtualBox, VMware Workstation.
- The physical computer is the **host**; each VM is a **guest**.

### Uses and benefits
- **server consolidation** — many servers on one machine, saving cost, space and power
- running **different operating systems** on one computer
- safe **testing** of software and malware analysis (isolation)
- easy **backup**: a VM can be copied (snapshot) and restored
- the foundation of cloud computing

**Containers** (e.g. Docker) are a lighter form of virtualization that share the host's operating system.

## Remote servers
A **remote server** is located elsewhere and accessed over a network. Users connect through browsers, remote desktop or SSH. Web hosting, e-mail and cloud storage all run on remote servers.

## Advantages of the cloud
lower cost — no need to buy and maintain servers; **scalability**; access from any device and place; automatic updates; easy collaboration; built-in backup and disaster recovery.

## Risks and disadvantages
dependence on a reliable **internet connection**; **security and privacy** concerns; limited control; possible downtime; recurring subscription costs; **vendor lock-in**; data may be stored in another country.

## In Nigeria
Uses include school portals, CBT platforms, fintech and e-government; challenges are broadband cost, power supply and data-protection compliance.`,
        examples: `**Example 1.** Classify Gmail by cloud service model. *Solution:* **SaaS** — Software as a Service.

**Example 2.** What is a hypervisor? *Solution:* Software that **creates and manages virtual machines** and shares hardware among them.

**Example 3.** State two advantages of cloud computing. *Solution:* **Scalability** and **access from anywhere**.`,
      },
      questions: [
        ["E", "The delivery of computing services over the internet is", "cloud computing", "batch processing", "desktop publishing", "data logging", "Services run on remote servers."],
        ["E", "A software-based computer that runs its own operating system is a", "virtual machine", "peripheral", "motherboard", "modem", "It behaves like a physical computer."],
        ["E", "Google Drive is an example of", "cloud storage", "a compiler", "an operating system kernel", "a hardware device", "Files are kept on remote servers."],
        ["M", "The software that creates and manages virtual machines is a", "hypervisor", "browser", "compiler", "firewall", "It shares hardware among the guests."],
        ["M", "Web-based e-mail such as Gmail is an example of", "SaaS", "IaaS", "PaaS", "LAN", "The complete application is delivered through a browser."],
        ["M", "A cloud owned by a provider and shared by many customers is a", "public cloud", "private cloud", "hybrid cloud", "local area network", "Anyone may subscribe to it."],
        ["M", "The ability of a cloud service to grow or shrink with demand is", "scalability", "portability", "compatibility", "redundancy", "It is also called elasticity."],
        ["H", "A hypervisor that runs directly on the hardware without a host operating system is", "Type 1 (bare-metal)", "Type 2 (hosted)", "a container", "a browser plug-in", "ESXi and Hyper-V are examples."],
        ["H", "Renting virtual servers and storage from a provider and installing your own software on them is", "IaaS", "SaaS", "PaaS", "peer-to-peer networking", "The provider supplies only the infrastructure."],
        ["H", "A major risk of cloud computing is", "dependence on internet connectivity", "the need to buy large servers", "inability to share files", "lack of scalability", "Without a connection the services cannot be reached."],
      ],
      jamb: [
        ["M", "In virtualization, the physical computer on which virtual machines run is called the", "host", "guest", "client", "node zero", "The virtual machines are guests."],
        ["H", "A combination of public and private clouds is known as a", "hybrid cloud", "community cloud", "distributed LAN", "virtual private network", "Sensitive work stays private while other work uses the public cloud."],
      ],
    },
    {
      week: 9,
      title: "Internet of Things (IoT) Applications",
      subtopics: ["Meaning and components of the IoT", "Smart homes", "Smart cities", "Other applications, benefits and challenges"],
      objectives: ["Explain the Internet of Things and its components", "Describe IoT applications in smart homes", "Describe IoT applications in smart cities", "State the benefits and challenges of the IoT"],
      lesson: {
        title: "Connected Things",
        summary: "Everyday objects fitted with sensors and connected to the internet, and what they make possible.",
        minutes: 40,
        notes: `## Meaning
The **Internet of Things (IoT)** is the **network of physical objects** — "things" — embedded with **sensors, software and connectivity** so that they can **collect and exchange data** over the internet, often without human intervention.

## Components of an IoT system
| Component | Role | Examples |
|---|---|---|
| **sensors** | detect conditions | temperature, motion, light, humidity, gas, GPS |
| **actuators** | carry out actions | motors, relays, valves, alarms |
| **microcontroller / processor** | reads sensors, runs the program | Arduino, ESP32, Raspberry Pi |
| **connectivity** | carries the data | Wi-Fi, Bluetooth, cellular (4G/5G), LoRa, Zigbee, RFID |
| **cloud / platform** | stores and analyses data | IoT dashboards and servers |
| **user interface** | lets people monitor and control | mobile app, web dashboard |

**How it works:** sense → send → process and decide → act → report.

## Smart homes
A **smart home** has devices that can be **monitored and controlled remotely or automatically**.
- **smart lighting** — lights that switch by motion, schedule or phone
- **smart thermostats and air conditioners**
- **smart security** — cameras, doorbells, smart locks, motion alarms
- **smart meters** and plugs — track and cut energy use
- **voice assistants** — control by speech
- **smart appliances** — fridges, TVs, washing machines
- **water-tank level monitors**; generator and **solar-inverter monitoring**
- smoke and gas-leak detectors

Benefits: convenience, safety, energy saving, help for the elderly.

## Smart cities
A **smart city** uses IoT and data to improve services and quality of life.
- **smart traffic lights** and traffic monitoring; smart parking
- **smart street lighting** that dims when roads are empty
- **waste management** — bins that signal when full
- **smart grids** and prepaid meters
- **water management** — leak detection
- **air-quality and flood monitoring**
- **public safety** — CCTV, emergency response
- **public transport tracking** and e-ticketing

## Other applications
- **agriculture** — soil-moisture sensors, automatic irrigation, livestock tracking
- **health** — wearable devices monitoring heart rate; remote patient monitoring
- **industry** — predictive maintenance of machines (the Industrial IoT)
- **logistics** — tracking vehicles and goods; cold-chain monitoring
- **retail** — smart shelves, contactless payment
- **environment** — weather stations

## Benefits
automation and convenience; real-time information; efficiency and cost saving; better decisions from data; improved safety and health.

## Challenges
- **security** — many devices are poorly protected and can be hacked
- **privacy** — constant data collection
- **cost** of devices and connectivity
- need for reliable **power and internet**
- **interoperability** — devices from different makers may not work together
- large volumes of data to manage
- electronic waste

## Staying safe
change default passwords; update firmware; use secure Wi-Fi; buy from reputable makers; switch off features not needed.`,
        examples: `**Example 1.** Define the Internet of Things. *Solution:* A **network of physical objects with sensors and connectivity** that collect and exchange data over the internet.

**Example 2.** Distinguish a sensor from an actuator. *Solution:* A **sensor detects** a condition; an **actuator acts** on a command (e.g. a motor).

**Example 3.** Give two smart-city applications. *Solution:* **Smart traffic lights** and **bins that report when full**.`,
      },
      questions: [
        ["E", "IoT stands for", "Internet of Things", "Input of Text", "Integration of Technology", "Internal Operating Tool", "Physical objects are connected to the internet."],
        ["E", "A device that detects temperature, motion or light is a", "sensor", "actuator", "router", "compiler", "Sensors collect data from the environment."],
        ["E", "A home in which lights and locks can be controlled from a phone is a", "smart home", "data centre", "cybercafé", "server farm", "Devices are connected and remotely controlled."],
        ["M", "The IoT component that carries out a physical action such as opening a valve is", "an actuator", "a sensor", "a dashboard", "a database", "Actuators convert signals into action."],
        ["M", "Which of these is an example of a smart-city application?", "Traffic lights that adjust to traffic flow", "A printed newspaper", "A manual typewriter", "A paper ledger", "Sensors and data improve city services."],
        ["M", "A common microcontroller board used in IoT projects is the", "Arduino", "abacus", "plotter", "scanner", "It reads sensors and controls actuators."],
        ["M", "A soil-moisture sensor that switches on irrigation automatically is an IoT application in", "agriculture", "banking", "broadcasting", "publishing", "It is part of precision farming."],
        ["H", "A major security weakness of many IoT devices is", "unchanged default passwords", "large screens", "high processing power", "the use of sensors", "Attackers exploit default credentials."],
        ["H", "The difficulty of making devices from different manufacturers work together is a problem of", "interoperability", "scalability", "virtualization", "encryption", "Common standards are needed."],
        ["H", "Using sensor data to service a machine before it breaks down is", "predictive maintenance", "corrective maintenance", "data mining only", "debugging", "It is a key use of the industrial IoT."],
      ],
      jamb: [
        ["M", "Which of the following technologies is commonly used for short-range communication between IoT devices?", "Bluetooth", "Fibre-optic submarine cable", "Satellite television", "Microfilm", "Bluetooth links nearby devices at low power."],
        ["H", "The correct sequence of operation in an IoT system is", "sense, transmit, process, act", "act, process, sense, transmit", "process, act, transmit, sense", "transmit, sense, act, process", "Data is collected, sent, analysed and then acted upon."],
      ],
    },
    {
      week: 10,
      title: "Data Protection and Backup Systems",
      subtopics: ["Data protection and privacy", "Types and methods of backup", "Redundancy", "Disaster recovery"],
      objectives: ["Explain data protection and the principles of data privacy", "Describe types and strategies of backup", "Explain redundancy, including RAID", "Explain disaster recovery planning"],
      lesson: {
        title: "Keeping Data Safe and Recoverable",
        summary: "Protecting information from loss, damage and misuse, and restoring it when things go wrong.",
        minutes: 40,
        notes: `## Data protection
**Data protection** covers the **measures and laws that keep data safe from loss, corruption and unauthorised access**, and that protect people's **privacy**.

### Threats to data
hardware failure; accidental deletion; malware and **ransomware**; hacking and theft; power failure; fire, flood and other disasters; human error.

### Security measures
- **passwords**, biometrics and **two-factor authentication**
- **encryption** — scrambling data so only holders of the key can read it
- **firewalls** and **antivirus** software; regular updates
- **access control** — users see only what they need
- physical security — locks, CCTV
- **uninterruptible power supply (UPS)**
- staff training

### Data protection law
Nigeria's **Data Protection Act (2023)**, enforced by the **Nigeria Data Protection Commission**, builds on the earlier regulation (NDPR, 2019). Principles: personal data must be processed **lawfully and fairly**, for a **stated purpose**, kept **accurate**, **secure**, no longer than necessary, and with the **consent** of the person concerned. Europe's equivalent is the **GDPR**.

## Backup
A **backup** is a **copy of data kept separately** so that the original can be restored if lost.

### Types
| Type | What is copied | Speed and space | Restore |
|---|---|---|---|
| **full** | everything | slowest; most space | simplest — one set |
| **incremental** | only changes since the **last backup of any type** | fastest; least space | needs the last full and every incremental since |
| **differential** | all changes since the **last full backup** | moderate | needs the last full and the latest differential |

### Storage media and locations
external hard drives, flash drives, optical discs, magnetic tape, network-attached storage, **cloud backup**. Backups may be **on-site** or **off-site**.

### The 3-2-1 rule
Keep **3** copies of data, on **2** different types of media, with **1** copy **off-site**.

### Good practice
back up **regularly and automatically**; **test** that backups can be restored; label and secure the media; encrypt sensitive backups.

## Redundancy
**Redundancy** means having **duplicate components or data** so that a failure does not stop the system.
- **RAID** (redundant array of independent disks): **RAID 0** — striping, speed but no protection; **RAID 1** — **mirroring** onto two disks; **RAID 5** — striping with parity, survives one disk failure.
- duplicate power supplies and **UPS / generators**
- **backup servers** and **failover** — a standby takes over automatically
- duplicate network links
- **data replication** to a second site

## Disaster recovery
**Disaster recovery (DR)** is the **plan and process for restoring ICT systems and data after a serious disruption**.

### A disaster recovery plan includes
1. **risk assessment** — what could go wrong
2. identification of **critical systems and data**
3. **backup** and redundancy arrangements
4. **recovery procedures** and responsibilities
5. an alternative site — **hot site** (fully equipped, ready at once), **warm site**, **cold site** (space only)
6. contact lists and communication
7. regular **testing and updating**

### Key measures
- **RTO (recovery time objective)** — how quickly service must be restored
- **RPO (recovery point objective)** — how much recent data may be lost (the gap since the last backup)

**Business continuity** is the wider plan for keeping the whole organisation running.`,
        examples: `**Example 1.** Explain the 3-2-1 backup rule. *Solution:* **3 copies** of data, on **2 types of media**, with **1 copy off-site**.

**Example 2.** Which backup copies only data changed since the last backup of any kind? *Solution:* an **incremental** backup.

**Example 3.** What does RAID 1 do? *Solution:* It **mirrors** data on two disks, so one can fail without loss.`,
      },
      questions: [
        ["E", "A copy of data kept separately so that it can be restored after loss is a", "backup", "virus", "firewall", "cookie", "It protects against data loss."],
        ["E", "Scrambling data so that only authorised persons can read it is", "encryption", "compression", "formatting", "defragmentation", "A key is needed to decrypt it."],
        ["E", "A device that keeps a computer running for a short time during a power cut is a", "UPS", "USB", "CPU", "GPU", "Uninterruptible power supply."],
        ["M", "A backup that copies every file each time is a", "full backup", "incremental backup", "differential backup", "mirror image only", "It takes the most time and space."],
        ["M", "A backup that copies only the data changed since the last backup of any type is", "incremental", "full", "differential", "archival", "It is the quickest to make."],
        ["M", "In RAID 1, data is", "mirrored on two disks", "striped without protection", "compressed onto one disk", "stored on tape", "Each disk holds an identical copy."],
        ["M", "In the 3-2-1 backup rule, the '1' stands for", "one copy kept off-site", "one type of medium", "one backup a year", "one user only", "An off-site copy survives a local disaster."],
        ["H", "The maximum acceptable time for restoring a system after a disaster is the", "recovery time objective", "recovery point objective", "mean time between failures", "service level index", "RTO measures how quickly service must return."],
        ["H", "A fully equipped standby facility that can take over operations immediately is a", "hot site", "cold site", "warm backup", "data mart", "A cold site provides space only."],
        ["H", "The law that governs the handling of personal data in Nigeria, passed in 2023, is the", "Nigeria Data Protection Act", "Cybercrimes Act", "Freedom of Information Act", "Evidence Act", "It is enforced by the Nigeria Data Protection Commission."],
      ],
      jamb: [
        ["M", "Malicious software that encrypts a victim's files and demands payment is", "ransomware", "spyware", "adware", "a cookie", "Good backups are the best defence against it."],
        ["H", "To restore from a differential backup scheme, a technician needs", "the last full backup and the latest differential backup", "only the latest differential backup", "the last full backup and every differential backup made", "only the first full backup ever made", "Each differential holds all changes since the last full backup."],
      ],
    },
  ],
};
