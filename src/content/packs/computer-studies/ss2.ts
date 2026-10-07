import type { TermPlan } from "../types";

/** SS2 Computer Studies — original Precious PS content aligned to the senior secondary syllabus (WAEC/NECO). */
export const ss2: TermPlan[] = [
  {
    classCode: "SS2",
    term: 1,
    topics: [
      {
        week: 1,
        title: "Generations and paradigms of programming languages",
        subtopics: ["Generations of programming languages", "Procedural programming", "Object-oriented programming", "Other paradigms"],
        objectives: ["Describe the five generations of programming languages", "Explain procedural programming", "Explain the main concepts of object-oriented programming", "Identify other programming paradigms"],
        lesson: {
          title: "Kinds of Programming Languages",
          summary: "Classify programming languages by generation and paradigm.",
          minutes: 45,
          notes: `## Generations of programming languages
| Generation | Description | Examples |
|---|---|---|
| **1GL** | **machine language** — binary codes executed directly by the CPU | 10110000 |
| **2GL** | **assembly language** — mnemonics; needs an assembler | MOV, ADD |
| **3GL** | **high-level procedural languages** — English-like; need compilers or interpreters | FORTRAN, COBOL, BASIC, Pascal, C, Java, Python |
| **4GL** | **closer to human language**; say *what* is needed rather than *how* | **SQL**, report generators, MATLAB |
| **5GL** | based on **constraints and logic**; used in **AI** | **Prolog** |

## Programming paradigms
A **paradigm** is a style or approach to programming.

### Procedural (imperative) programming
the program is a sequence of instructions organised into **procedures (functions)** that operate on data. Examples: **C, Pascal, FORTRAN, BASIC**.

### Object-oriented programming (OOP)
programs are built from **objects** that combine **data (attributes)** and **behaviour (methods)**. Examples: **Java, C++, C#, Python**.
| Concept | Meaning | Example |
|---|---|---|
| **class** | a blueprint for objects | Student |
| **object** | an instance of a class | the student "Ada" |
| **encapsulation** | hiding data inside an object; access through methods | a private score attribute |
| **inheritance** | a class acquires properties of another class | Prefect inherits from Student |
| **polymorphism** | the same method name behaves differently for different objects | draw() for Circle and Square |

### Other paradigms
- **event-driven** — code runs in response to events such as clicks (e.g. Visual Basic, JavaScript in web pages)
- **functional** — built from mathematical functions (e.g. Haskell)
- **logic** — facts and rules (e.g. Prolog)
- **scripting** — automating tasks and web pages (JavaScript, Python, PHP)

## Choosing a language
consider the **task** (web, mobile, scientific, AI, games), performance, available libraries, programmer skill, and the platform.`,
          examples: `**Example 1.** Which generation does SQL belong to? *Answer:* **4GL**.

**Example 2.** In OOP, what is an object? *Answer:* An **instance of a class**.

**Example 3.** A Prefect class acquiring the properties of a Student class shows **inheritance**.`,
        },
        questions: [
          ["E", "Machine language belongs to the", "first generation", "third generation", "fourth generation", "fifth generation", "1GL is binary code."],
          ["E", "Assembly language belongs to the", "second generation", "first generation", "third generation", "fifth generation", "2GL uses mnemonics."],
          ["E", "In OOP, a blueprint for creating objects is a", "class", "loop", "array", "file", "Classes define objects."],
          ["M", "SQL is an example of a", "fourth-generation language", "first-generation language", "machine language", "assembly language", "It states what is wanted."],
          ["M", "Prolog, used in artificial intelligence, is a", "fifth-generation language", "second-generation language", "machine language", "spreadsheet", "It is logic-based."],
          ["M", "In OOP, an instance of a class is an", "object", "algorithm", "interpreter", "index", "Objects are created from classes."],
          ["M", "Hiding an object's data and allowing access only through its methods is", "encapsulation", "inheritance", "polymorphism", "compilation", "Data is enclosed."],
          ["H", "A class acquiring the attributes and methods of another class is", "inheritance", "encapsulation", "polymorphism", "iteration", "Child inherits from parent."],
          ["H", "The same method name behaving differently for different objects is", "polymorphism", "encapsulation", "inheritance", "abstraction of hardware", "Many forms. Answer: polymorphism."],
          ["H", "Programs in which code runs in response to clicks and key presses are", "event-driven", "batch only", "machine-coded", "logic-based only", "Events trigger code."],
        ],
      },
      {
        week: 2,
        title: "Arrays",
        subtopics: ["Meaning of an array", "Declaring arrays in BASIC", "Using loops with arrays", "Lists in Python"],
        objectives: ["Explain arrays and subscripts", "Declare and use arrays in BASIC with DIM", "Use loops to input, process and output array elements", "Use lists in Python"],
        lesson: {
          title: "Storing Many Values Under One Name",
          summary: "Use arrays to store and process lists of data.",
          minutes: 45,
          notes: `## Meaning
An **array** is a **data structure** that stores **many values of the same type** under **one name**. Each value (**element**) is identified by its **index (subscript)**.
Example: scores of 5 students stored as S(1), S(2), S(3), S(4), S(5).

## Advantages
fewer variable names; easy to process with **loops**; easy to sort and search.

## Declaring arrays in BASIC
the **DIM** (dimension) statement reserves space:
**10 DIM S(5)** — an array S with elements numbered (in many BASICs) from 0 or 1 to 5.

## Using loops with arrays — total and average of 5 scores
10 DIM S(5)
20 LET T = 0
30 FOR I = 1 TO 5
40 INPUT S(I)
50 LET T = T + S(I)
60 NEXT I
70 PRINT "TOTAL ="; T
80 PRINT "AVERAGE ="; T / 5
90 END
If the scores are 60, 70, 80, 50, 40, the output is TOTAL = 300 and AVERAGE = 60.

## Finding the largest element
10 LET M = S(1)
20 FOR I = 2 TO 5
30 IF S(I) > M THEN LET M = S(I)
40 NEXT I
50 PRINT "HIGHEST ="; M

## Two-dimensional arrays
store data in **rows and columns** like a table: **DIM R(3, 4)** — 3 rows and 4 columns (e.g. 3 students × 4 subjects). Element R(2, 3) is in row 2, column 3.

## Lists in Python
Python uses **lists**: **scores = [60, 70, 80, 50, 40]**
- **scores[0]** is the first element (**60**) — Python indexes start at **0**
- **len(scores)** gives 5; **sum(scores)** gives 300; **max(scores)** gives 80
- **scores.append(90)** adds an element`,
          examples: `**Example 1.** In Python, if scores = [60, 70, 80], what is scores[1]? *Answer:* **70**.

**Example 2.** What does DIM S(10) do in BASIC? *Answer:* It **declares an array S** to hold up to 10 (or 11) elements.

**Example 3.** How many elements does a 3 × 4 two-dimensional array have? *Answer:* **12**.`,
        },
        questions: [
          ["E", "A data structure that stores many values of the same type under one name is an", "array", "algorithm", "address", "assembler", "Arrays group values."],
          ["E", "The number that identifies an element in an array is its", "index (subscript)", "key field only", "pixel", "protocol", "Indexes locate elements."],
          ["E", "The BASIC statement used to declare an array is", "DIM", "LET", "REM", "END", "DIM means dimension."],
          ["M", "In Python, the first element of a list has index", "0", "1", "-1 only", "10", "Python counts from 0."],
          ["M", "If scores = [60, 70, 80], then scores[1] is", "70", "60", "80", "1", "Index 1 is the second item."],
          ["M", "In Python, len([4, 8, 15, 16]) gives", "4", "43", "16", "3", "Four elements. Answer: 4."],
          ["M", "An array that stores data in rows and columns is", "two-dimensional", "one-dimensional", "zero-dimensional", "a single variable", "Like a table. Answer: two-dimensional."],
          ["H", "A two-dimensional array declared as DIM R(3, 4) holding 3 rows and 4 columns has", "12 elements", "7 elements", "34 elements", "4 elements", "3 × 4 = 12. Answer: 12 elements."],
          ["H", "For the scores 60, 70, 80, 50 and 40, the average printed by the array program is", "60", "300", "70", "50", "300 ÷ 5 = 60. Answer: 60."],
          ["H", "In the program to find the largest element, M is first set to", "the first element", "zero always", "the last element", "the number of elements", "Then compared with the rest."],
        ],
      },
      {
        week: 3,
        title: "Searching and sorting algorithms",
        subtopics: ["Linear search", "Binary search", "Bubble sort", "Comparing algorithms"],
        objectives: ["Describe and trace a linear search", "Describe and trace a binary search", "Describe and trace a bubble sort", "Compare the efficiency of searching and sorting algorithms"],
        lesson: {
          title: "Finding and Ordering Data",
          summary: "Trace linear search, binary search and bubble sort.",
          minutes: 45,
          notes: `## Linear (sequential) search
check each item **one by one from the start** until the target is found or the list ends.
- works on **unsorted** lists
- example: search for 25 in [12, 7, 25, 3]: compare 12 (no), 7 (no), 25 (**found** at position 3)
- worst case: checks **every** item (n comparisons)

## Binary search
works only on a **sorted** list; repeatedly **halves** the search area.
1. find the **middle** item
2. if it equals the target, stop
3. if the target is smaller, search the **left half**; if larger, the **right half**
4. repeat
Example: find 23 in [3, 8, 12, 17, 23, 31, 40]:
- middle = 17 → 23 > 17 → search [23, 31, 40]
- middle = 31 → 23 < 31 → search [23]
- found **23** in **3 comparisons**
Binary search is **much faster** for large sorted lists: 1,000 items need at most about **10** comparisons.

## Bubble sort
repeatedly compares **adjacent pairs** and **swaps** them if they are in the wrong order; the largest value "bubbles" to the end after each pass.
Sort [5, 3, 8, 1] in ascending order:
- **pass 1**: (5,3) swap → 3,5,8,1; (5,8) ok; (8,1) swap → **3, 5, 1, 8**
- **pass 2**: (3,5) ok; (5,1) swap → **3, 1, 5, 8**
- **pass 3**: (3,1) swap → **1, 3, 5, 8** ✔
A pass with **no swaps** shows the list is sorted.

## Other sorts
**selection sort** (select the smallest and place it first), **insertion sort** (insert each item into its correct place), **merge sort** and **quick sort** (faster for large lists).

## Comparing
| Algorithm | Needs sorted data? | Speed on large data |
|---|---|---|
| linear search | no | slow |
| binary search | **yes** | fast |
| bubble sort | — | slow |`,
          examples: `**Example 1.** Which search requires a sorted list? *Answer:* **binary search**.

**Example 2.** After pass 1 of bubble sort on [4, 2, 6, 1], what is the list? *Answer:* **2, 4, 1, 6**.

**Example 3.** In binary search, what is checked first? *Answer:* the **middle** item.`,
        },
        questions: [
          ["E", "Checking each item one by one from the start is", "linear search", "binary search", "bubble sort", "merge sort", "Sequential checking."],
          ["E", "Arranging data in order is", "sorting", "searching", "merging only", "deleting", "Sorting orders data."],
          ["E", "The sort that repeatedly swaps adjacent items in the wrong order is", "bubble sort", "binary sort", "linear sort", "quick search", "Large values bubble up."],
          ["M", "Binary search can only be used on a list that is", "sorted", "unsorted", "empty", "very short only", "It relies on order."],
          ["M", "In binary search, the first item compared is the", "middle item", "first item", "last item", "smallest item", "The list is halved."],
          ["M", "Linear search for 25 in [12, 7, 25, 3] finds it at position", "3", "1", "2", "4", "Third item. Answer: 3."],
          ["M", "A bubble sort pass with no swaps shows that", "the list is sorted", "the list is empty", "the algorithm failed", "one more pass is needed", "Nothing was out of order."],
          ["H", "After the first pass of bubble sort on [5, 3, 8, 1] in ascending order, the list is", "3, 5, 1, 8", "1, 3, 5, 8", "3, 1, 5, 8", "5, 3, 1, 8", "8 moves to the end."],
          ["H", "Using binary search to find 23 in [3, 8, 12, 17, 23, 31, 40] takes", "3 comparisons", "5 comparisons", "1 comparison", "7 comparisons", "17, then 31, then 23."],
          ["H", "For a large sorted list, the fastest of these searches is", "binary search", "linear search", "bubble search", "random guessing", "It halves each time."],
        ],
      },
      {
        week: 4,
        title: "Modular programming: subroutines and functions",
        subtopics: ["Meaning of modular programming", "Subroutines in BASIC", "Functions in Python", "Parameters and return values"],
        objectives: ["Explain modular programming and its advantages", "Use GOSUB and RETURN in BASIC", "Define and call functions in Python", "Use parameters and return values"],
        lesson: {
          title: "Breaking Programs into Modules",
          summary: "Write programs using subroutines and functions.",
          minutes: 45,
          notes: `## Modular programming
**Modular programming** divides a large program into **smaller, independent parts (modules)** — called **subroutines, procedures or functions** — each performing one task.
Advantages:
- easier to **design, write and understand**
- modules can be **tested separately** (easier debugging)
- **reuse** — a module can be called many times or used in other programs
- **teamwork** — different programmers write different modules
- easier **maintenance**

## Subroutines in BASIC
**GOSUB** jumps to a subroutine; **RETURN** goes back to the line after the GOSUB.
10 INPUT L, B
20 GOSUB 100
30 PRINT "AREA ="; A
40 END
100 REM SUBROUTINE TO CALCULATE AREA
110 LET A = L * B
120 RETURN

## Built-in (library) functions
BASIC: **SQR(X)** square root, **ABS(X)** absolute value, **INT(X)** whole-number part, **RND** random number.
Python: **len()**, **max()**, **min()**, **round()**, **abs()**; and modules like **math** (math.sqrt).

## User-defined functions in Python
**def area(length, breadth):**
    **return length * breadth**
**print(area(6, 4))** → **24**
- **def** starts the function definition
- **length** and **breadth** are **parameters** (placeholders)
- **6** and **4** are **arguments** (actual values passed)
- **return** sends a value back to the caller

## Variables and scope
- **local variables** exist only inside the function
- **global variables** can be used throughout the program
Keeping variables local avoids accidental changes.

## Top-down design
start with the main problem, break it into smaller sub-problems (stepwise refinement), and write a module for each.`,
          examples: `**Example 1.** In BASIC, which keyword returns from a subroutine? *Answer:* **RETURN**.

**Example 2.** What does SQR(49) return? *Answer:* **7**.

**Example 3.** In def add(a, b): return a + b, what does add(3, 5) return? *Answer:* **8**.`,
        },
        questions: [
          ["E", "Dividing a program into smaller independent parts is", "modular programming", "machine programming", "batch programming", "linear search", "Modules perform tasks."],
          ["E", "The BASIC keyword that jumps to a subroutine is", "GOSUB", "GOTO only", "DIM", "REM", "GOSUB calls subroutines."],
          ["E", "The Python keyword that starts a function definition is", "def", "func", "sub", "fn", "def defines functions."],
          ["M", "The BASIC keyword that ends a subroutine and goes back is", "RETURN", "END", "STOP", "NEXT", "It returns to the caller."],
          ["M", "In BASIC, SQR(49) gives", "7", "49", "2401", "24.5", "Square root of 49."],
          ["M", "In BASIC, ABS(-12) gives", "12", "-12", "0", "144", "Absolute value."],
          ["M", "An advantage of modular programming is that", "modules can be tested separately", "programs become harder to read", "code cannot be reused", "only one person can work", "Debugging is easier."],
          ["H", "In the Python function def add(a, b): return a + b, the call add(3, 5) returns", "8", "35", "15", "a + b", "3 + 5 = 8. Answer: 8."],
          ["H", "In a function definition, the names in brackets such as length and breadth are", "parameters", "arguments", "keywords", "comments", "Arguments are the values passed."],
          ["H", "A variable that exists only inside a function is a", "local variable", "global variable", "constant", "keyword", "Its scope is the function."],
        ],
      },
      {
        week: 5,
        title: "Program development and testing",
        subtopics: ["Program development life cycle", "Program testing methods", "Types of errors and debugging", "Program documentation"],
        objectives: ["Describe the program development life cycle", "Explain methods of testing programs", "Identify types of errors and debugging techniques", "Explain the importance of program documentation"],
        lesson: {
          title: "Building Reliable Programs",
          summary: "Follow the program development life cycle and test thoroughly.",
          minutes: 45,
          notes: `## Program development life cycle (PDLC)
1. **problem definition** — understand the problem and requirements
2. **analysis** — identify inputs, processes, outputs and constraints
3. **design** — algorithm, pseudocode, flowchart; design data and screens
4. **coding** — write the program in a chosen language
5. **testing and debugging** — find and correct errors
6. **documentation** — write guides and comments
7. **implementation (deployment)** — install and put into use
8. **maintenance** — fix problems and improve over time

## Testing methods
| Method | Description |
|---|---|
| **desk checking / dry run** | tracing the program by hand with a **trace table** |
| **unit testing** | testing individual modules |
| **integration testing** | testing modules together |
| **system testing** | testing the whole program |
| **alpha testing** | testing by the developers in-house |
| **beta testing** | testing by selected real users before release |
| **acceptance testing** | the client confirms it meets requirements |

## Test data
- **normal data** — typical valid values (e.g. score 65)
- **boundary (extreme) data** — values at the edges of valid ranges (e.g. 0, 100, 49, 50)
- **erroneous (abnormal) data** — invalid values that should be rejected (e.g. −5, 150, "abc")

## Types of errors
- **syntax errors** — break language rules; found by the translator
- **logic errors** — wrong results (e.g. using + instead of *)
- **runtime errors** — occur while running (division by zero, file not found)
**Debugging** tools: error messages, breakpoints, stepping through code, printing variable values.

## Documentation
- **internal documentation** — comments (REM, #) and meaningful variable names
- **user documentation** — manuals explaining how to install and use the program
- **technical (programmer) documentation** — algorithms, flowcharts, data descriptions for maintenance`,
          examples: `**Example 1.** For a score range of 0–100, give a boundary value. *Answer:* **0** or **100**.

**Example 2.** Testing by selected real users before release is **beta testing**.

**Example 3.** A program that divides by zero while running has a **runtime error**.`,
        },
        questions: [
          ["E", "Using breakpoints and error messages to locate and remove faults in code is", "debugging", "coding", "documenting", "compiling only", "Bugs are removed."],
          ["E", "Comments written inside program code are part of", "internal documentation", "user manuals only", "hardware", "testing data", "They explain code."],
          ["E", "Testing individual modules of a program is", "unit testing", "beta testing", "acceptance testing", "system testing", "Units are tested alone."],
          ["M", "Testing by selected real users before public release is", "beta testing", "alpha testing", "desk checking", "unit testing", "Beta users test early versions."],
          ["M", "For a valid score range of 0 to 100, the value 150 is", "erroneous data", "normal data", "boundary data", "valid data", "It is outside the range."],
          ["M", "For a valid score range of 0 to 100, the value 100 is", "boundary data", "erroneous data", "invalid data", "random data", "It is at the edge."],
          ["M", "Tracing a program by hand using a trace table is", "desk checking", "beta testing", "compiling", "integration testing", "A dry run. Answer: desk checking."],
          ["H", "An error that occurs while the program is running, such as division by zero, is a", "runtime error", "syntax error", "logic error", "typing error only", "It happens at run time."],
          ["H", "The stage of the PDLC that fixes problems and improves the program after it is in use is", "maintenance", "analysis", "design", "coding", "It continues over time."],
          ["H", "Manuals that explain how to install and use a program are", "user documentation", "internal comments", "trace tables", "source code", "Written for users."],
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
        title: "Database management systems",
        subtopics: ["Database and DBMS", "Functions of a DBMS", "Database models", "Advantages and disadvantages of databases"],
        objectives: ["Distinguish a database from a DBMS", "State the functions of a DBMS", "Compare hierarchical, network and relational models", "State advantages and disadvantages of database systems"],
        lesson: {
          title: "Managing Data Efficiently",
          summary: "Explain DBMS functions and database models.",
          minutes: 45,
          notes: `## Database and DBMS
- a **database** is an organised collection of related data
- a **Database Management System (DBMS)** is **software** that creates, stores, manages and retrieves data in a database
Examples of DBMS: **Microsoft Access, MySQL, Oracle Database, Microsoft SQL Server, PostgreSQL, SQLite, MongoDB**.

## Functions of a DBMS
- **data storage, retrieval and update**
- **data definition** — creating structures (tables, fields)
- **data security** — passwords, user permissions
- **data integrity** — rules that keep data accurate and consistent
- **concurrency control** — allows many users at once without conflicts
- **backup and recovery**
- **data independence** — programs are not affected by changes in storage
- **query processing** and **report generation**

## Database models
| Model | Structure | Example |
|---|---|---|
| **hierarchical** | **tree** — each child has **one parent** (one-to-many) | organisation charts; older IBM systems |
| **network** | **graph** — records can have **many parents** (many-to-many) | older complex systems |
| **relational** | data in **tables (relations)** linked by common fields (keys) | most modern systems: MySQL, Access, Oracle |
| **object-oriented** | data stored as objects | multimedia, engineering data |
The **relational model** was proposed by **E. F. Codd** (1970).

## Relational terms
| Formal term | Common term |
|---|---|
| relation | table |
| tuple | row (record) |
| attribute | column (field) |
| domain | allowed values of an attribute |

## Advantages of databases
reduced **redundancy** (duplication); improved **consistency**; data **sharing**; better **security**; easier **backup**; data integrity; faster access.

## Disadvantages
cost of software and hardware; need for skilled staff; complexity; a failure can affect many users; security risks if poorly managed.`,
          examples: `**Example 1.** In a relational database, what is a tuple? *Answer:* a **row (record)**.

**Example 2.** Which database model uses a tree structure? *Answer:* the **hierarchical** model.

**Example 3.** Who proposed the relational model? *Answer:* **E. F. Codd**.`,
        },
        questions: [
          ["E", "Software that creates, stores and manages databases is a", "DBMS", "browser", "compiler", "spreadsheet chart", "Database Management System."],
          ["E", "MySQL is an example of a", "DBMS", "web browser", "programming language only", "operating system", "It manages databases."],
          ["E", "The database model that stores data in tables is the", "relational model", "hierarchical model", "network model", "tree model", "Tables are relations."],
          ["M", "The database model with a tree structure where each child has one parent is", "hierarchical", "relational", "network", "object", "Like a family tree."],
          ["M", "In relational terms, a row of a table is a", "tuple", "attribute", "domain", "relation", "Tuples are records."],
          ["M", "In relational terms, a column of a table is an", "attribute", "tuple", "index file", "report", "Attributes are fields."],
          ["M", "Allowing many users to access a database at the same time without conflicts is", "concurrency control", "redundancy", "defragmentation", "compression", "The DBMS coordinates access."],
          ["H", "The relational model of databases was proposed by", "E. F. Codd", "John von Neumann", "Charles Babbage", "Alan Turing", "In 1970. Answer: E. F. Codd."],
          ["H", "Unnecessary duplication of data in a database is", "redundancy", "integrity", "concurrency", "independence", "Databases reduce it."],
          ["H", "The DBMS feature that keeps programs unaffected by changes in storage structure is", "data independence", "data redundancy", "data piracy", "data mining", "Programs and storage are separated."],
        ],
      },
      {
        week: 2,
        title: "Relational database design",
        subtopics: ["Keys in relational databases", "Relationships between tables", "Entity–relationship diagrams", "Referential integrity"],
        objectives: ["Distinguish primary, candidate, composite and foreign keys", "Identify one-to-one, one-to-many and many-to-many relationships", "Draw simple entity–relationship diagrams", "Explain referential integrity"],
        lesson: {
          title: "Linking Tables Correctly",
          summary: "Design related tables using keys and relationships.",
          minutes: 45,
          notes: `## Keys
| Key | Meaning | Example |
|---|---|---|
| **primary key** | field that **uniquely identifies** each record; cannot be empty (null) | StudentID |
| **candidate key** | any field that **could** be the primary key | StudentID, NIN |
| **composite key** | primary key made of **two or more fields** | (StudentID, SubjectCode) in a Results table |
| **foreign key** | a field in one table that is the **primary key of another table**, creating a link | ClassID in Students linking to the Classes table |

## Relationships
| Type | Meaning | Example |
|---|---|---|
| **one-to-one (1:1)** | one record relates to one record | a student and his/her library card |
| **one-to-many (1:M)** | one record relates to many records | one class has many students |
| **many-to-many (M:N)** | many relate to many | students and subjects |
A many-to-many relationship is implemented using a **link (junction) table** — e.g. a **Results** table with StudentID and SubjectCode.

## Example design
- **Classes** (ClassID, ClassName, FormTeacher)
- **Students** (StudentID, Surname, FirstName, ClassID) — ClassID is a **foreign key**
- **Subjects** (SubjectCode, SubjectName)
- **Results** (StudentID, SubjectCode, Score) — composite primary key

## Entity–relationship (ER) diagrams
- **entity** — a thing about which data is stored (Student, Class), drawn as a **rectangle**
- **attribute** — property of an entity, drawn as an **oval**
- **relationship** — association between entities, drawn as a **diamond**, labelled 1, M or N

## Referential integrity
a rule that a **foreign key value must match an existing primary key** value in the related table (or be empty). It prevents "orphan" records — e.g. a student assigned to a class that does not exist. The DBMS can **cascade** updates or deletions.`,
          examples: `**Example 1.** One class has many students. What relationship is this? *Answer:* **one-to-many**.

**Example 2.** What is a foreign key? *Answer:* A field that is the **primary key of another table**, linking the tables.

**Example 3.** How is a many-to-many relationship implemented? *Answer:* with a **link (junction) table**.`,
        },
        questions: [
          ["E", "In a Students table, StudentID chosen to identify each row uniquely is the", "primary key", "foreign key", "secondary field", "sort key only", "No duplicates allowed."],
          ["E", "One class having many students is a", "one-to-many relationship", "one-to-one relationship", "many-to-many relationship", "no relationship", "One class, many students."],
          ["E", "In an ER diagram, an entity is drawn as a", "rectangle", "diamond", "oval", "circle only", "Entities are boxes."],
          ["M", "A field in one table that is the primary key of another table is a", "foreign key", "candidate key", "composite key", "secret key", "It links tables."],
          ["M", "A primary key made of two or more fields is a", "composite key", "foreign key", "candidate key", "simple key", "Fields combine."],
          ["M", "Students and subjects, where each student takes many subjects and each subject has many students, is a", "many-to-many relationship", "one-to-one relationship", "one-to-many relationship", "unary relationship", "Many on both sides."],
          ["M", "In an ER diagram, a relationship is drawn as a", "diamond", "rectangle", "oval", "triangle", "Diamonds join entities."],
          ["H", "A many-to-many relationship is implemented with a", "link (junction) table", "single field", "primary key only", "report", "It breaks M:N into two 1:M."],
          ["H", "The rule that a foreign key must match an existing primary key is", "referential integrity", "data redundancy", "normal data", "concurrency", "It prevents orphan records."],
          ["H", "Any field that could serve as the primary key is a", "candidate key", "foreign key", "dummy key", "composite field", "It is a candidate."],
        ],
      },
      {
        week: 3,
        title: "Structured Query Language (SQL)",
        subtopics: ["Meaning and uses of SQL", "Creating tables and inserting data", "Retrieving data with SELECT", "Updating and deleting data"],
        objectives: ["Explain SQL and its uses", "Write CREATE TABLE and INSERT statements", "Write SELECT queries with WHERE and ORDER BY", "Write UPDATE and DELETE statements"],
        lesson: {
          title: "Talking to Databases with SQL",
          summary: "Write basic SQL statements to manage and query data.",
          minutes: 45,
          notes: `## SQL
**SQL (Structured Query Language)** is the standard language for **managing and querying relational databases**. It is a **4GL**: you state *what* data you want.
Parts:
- **DDL (Data Definition Language)** — CREATE, ALTER, DROP
- **DML (Data Manipulation Language)** — SELECT, INSERT, UPDATE, DELETE
- **DCL (Data Control Language)** — GRANT, REVOKE (permissions)

## Creating a table
**CREATE TABLE Students (StudentID INT PRIMARY KEY, Surname VARCHAR(30), Class VARCHAR(5), Score INT);**

## Inserting data
**INSERT INTO Students VALUES (1, 'Okafor', 'SS2A', 72);**
**INSERT INTO Students VALUES (2, 'Bello', 'SS2B', 58);**
**INSERT INTO Students VALUES (3, 'Adeyemi', 'SS2A', 85);**

## Retrieving data — SELECT
- all columns, all rows: **SELECT * FROM Students;**
- specific columns: **SELECT Surname, Score FROM Students;**
- with a condition: **SELECT Surname FROM Students WHERE Class = 'SS2A';** → Okafor, Adeyemi
- combined conditions: **WHERE Class = 'SS2A' AND Score > 80** → Adeyemi
- sorting: **SELECT * FROM Students ORDER BY Score DESC;** (highest first; ASC = ascending)
- aggregate functions: **SELECT AVG(Score) FROM Students;** → 71.67; also COUNT, SUM, MAX, MIN
- **SELECT COUNT(*) FROM Students WHERE Score >= 60;** → 2

## Updating and deleting
- **UPDATE Students SET Score = 60 WHERE StudentID = 2;**
- **DELETE FROM Students WHERE StudentID = 3;**
**Warning:** UPDATE or DELETE **without WHERE** affects **every row**.

## Other features
**LIKE** for patterns (WHERE Surname LIKE 'A%' — names starting with A), **BETWEEN**, **JOIN** to combine related tables, **GROUP BY** to summarise by category.`,
          examples: `**Example 1.** Write SQL to show all students in SS2A. *Answer:* **SELECT * FROM Students WHERE Class = 'SS2A';**

**Example 2.** Which keyword sorts results? *Answer:* **ORDER BY**.

**Example 3.** What happens if you run DELETE FROM Students; with no WHERE? *Answer:* **All rows are deleted**.`,
        },
        questions: [
          ["E", "SQL stands for", "Structured Query Language", "Simple Question Language", "System Query Logic", "Standard Quick Lookup", "It queries databases."],
          ["E", "The SQL command used to retrieve data is", "SELECT", "INSERT", "DELETE", "UPDATE", "SELECT reads data."],
          ["E", "The SQL command used to add a new record is", "INSERT", "SELECT", "DROP", "ORDER", "INSERT INTO adds rows."],
          ["M", "The SQL clause that filters rows by a condition is", "WHERE", "ORDER BY", "FROM", "VALUES", "WHERE sets conditions."],
          ["M", "The SQL clause that sorts the results is", "ORDER BY", "GROUP", "WHERE", "SET", "ASC or DESC. Answer: ORDER BY."],
          ["M", "The SQL command used to change existing data is", "UPDATE", "INSERT", "CREATE", "SELECT", "UPDATE … SET. Answer: UPDATE."],
          ["M", "CREATE TABLE belongs to the part of SQL called", "Data Definition Language", "Data Manipulation Language", "Data Control Language", "Data Printing Language", "It defines structures."],
          ["H", "For scores 72, 58 and 85, SELECT AVG(Score) FROM Students returns about", "71.67", "215", "85", "58", "215 ÷ 3. Answer: 71.67."],
          ["H", "Running DELETE FROM Students; without a WHERE clause", "deletes every row", "deletes nothing", "deletes only the first row", "creates a table", "There is no condition."],
          ["H", "The query SELECT Surname FROM Students WHERE Surname LIKE 'A%' returns surnames that", "start with A", "end with A", "contain no A", "are exactly A", "% matches any characters."],
        ],
      },
      {
        week: 4,
        title: "Normalisation",
        subtopics: ["Meaning and purpose of normalisation", "Data anomalies", "First, second and third normal forms", "Normalising a sample table"],
        objectives: ["Explain the purpose of normalisation", "Identify insertion, update and deletion anomalies", "Describe the first three normal forms", "Normalise a simple table"],
        lesson: {
          title: "Organising Tables to Avoid Problems",
          summary: "Normalise tables to remove redundancy and anomalies.",
          minutes: 45,
          notes: `## Meaning
**Normalisation** is the process of **organising data into related tables** to **reduce redundancy** (duplication) and **avoid anomalies**.

## Anomalies in poorly designed tables
| Anomaly | Problem |
|---|---|
| **insertion anomaly** | cannot add data without other unrelated data (e.g. cannot add a new subject until a student takes it) |
| **update anomaly** | the same data stored in many rows must be changed everywhere; missing one causes inconsistency (e.g. a teacher's phone number) |
| **deletion anomaly** | deleting one record removes other important data (e.g. deleting the last student in a club removes the club's details) |

## Unnormalised example
| StudentID | Name | Class | FormTeacher | Subjects |
|---|---|---|---|---|
| 1 | Ada | SS2A | Mr Musa | Maths, Physics |
| 2 | Tunde | SS2A | Mr Musa | Maths, Biology |

## First Normal Form (1NF)
- each field holds **one value (atomic)** — no lists like "Maths, Physics"
- no **repeating groups**; each record unique with a primary key
→ split Subjects so each row has one subject.

## Second Normal Form (2NF)
- table is in 1NF
- every non-key field depends on the **whole primary key**, not part of it (**no partial dependency**) — matters when the key is composite
→ separate **Students (StudentID, Name, Class)** and **StudentSubjects (StudentID, Subject)**.

## Third Normal Form (3NF)
- table is in 2NF
- **no transitive dependency**: non-key fields depend **only on the key**, not on other non-key fields
→ FormTeacher depends on Class, not on StudentID, so move it: **Classes (Class, FormTeacher)**.

## Final design
- **Students** (StudentID, Name, Class)
- **Classes** (Class, FormTeacher)
- **StudentSubjects** (StudentID, Subject)
Now Mr Musa's name is stored **once** — changing it needs only one update.

## Memory aid
non-key fields depend on "**the key, the whole key, and nothing but the key**" (1NF, 2NF, 3NF).`,
          examples: `**Example 1.** A Subjects field containing "Maths, Physics" breaks which normal form? *Answer:* **1NF** (values are not atomic).

**Example 2.** FormTeacher depends on Class, which depends on StudentID. What is this? *Answer:* a **transitive dependency** (removed in 3NF).

**Example 3.** Deleting the last student in a club loses the club's details. What anomaly is this? *Answer:* a **deletion anomaly**.`,
        },
        questions: [
          ["E", "Organising data into related tables to reduce duplication is", "normalisation", "defragmentation", "compression", "encryption", "It removes redundancy."],
          ["E", "Unnecessary repetition of data is", "redundancy", "integrity", "security", "concurrency", "Normalisation reduces it."],
          ["E", "A table in which each field holds only one value is in at least", "first normal form", "third normal form only", "no normal form", "fifth normal form", "Atomic values are 1NF."],
          ["M", "Having to change the same data in many rows is an", "update anomaly", "insertion anomaly", "deletion anomaly", "integrity rule", "Inconsistency may result."],
          ["M", "Being unable to add a new subject until a student takes it is an", "insertion anomaly", "update anomaly", "deletion anomaly", "index error", "Data cannot be inserted."],
          ["M", "Losing a club's details when its last member is deleted is a", "deletion anomaly", "update anomaly", "insertion anomaly", "syntax error", "Deleting removes too much."],
          ["M", "A field containing a list like 'Maths, Physics' breaks", "1NF", "3NF only", "referential integrity only", "SQL syntax", "Values must be atomic."],
          ["H", "Second normal form removes", "partial dependencies on part of a composite key", "all primary keys", "atomic values", "foreign keys", "Non-keys depend on the whole key."],
          ["H", "A non-key field depending on another non-key field is a", "transitive dependency", "partial dependency", "full dependency", "foreign key", "Removed in 3NF."],
          ["H", "The phrase 'the key, the whole key, and nothing but the key' summarises", "1NF, 2NF and 3NF", "SQL commands", "file organisation", "network layers", "It is a memory aid."],
        ],
      },
      {
        week: 5,
        title: "Database security and integrity",
        subtopics: ["Threats to databases", "Access control and authentication", "Data integrity and validation", "Backup and recovery"],
        objectives: ["Identify threats to databases", "Explain access control and authentication methods", "Describe data integrity and validation checks", "Plan backup and recovery procedures"],
        lesson: {
          title: "Keeping Data Safe and Correct",
          summary: "Protect databases and maintain data integrity.",
          minutes: 45,
          notes: `## Threats to databases
unauthorised access (hackers, insiders); **SQL injection** (malicious code entered into input boxes); malware and ransomware; accidental deletion or wrong updates; hardware failure; fire, flood and power surges; theft of devices.

## Access control and authentication
- **authentication** — proving identity: passwords, PINs, **biometrics** (fingerprint, face), smart cards, **multi-factor authentication**
- **authorisation** — deciding what an authenticated user may do: **read-only**, edit, delete, administer (**user privileges/roles**)
- **audit trails (logs)** — records of who accessed or changed what and when
- **encryption** of stored and transmitted data
- **views** — showing users only the data they need

## Data integrity
**Integrity** means data is **accurate, complete and consistent**.
- **entity integrity** — every table has a primary key; it cannot be null
- **referential integrity** — foreign keys must match existing primary keys
- **domain integrity** — values must be valid for the field

## Validation checks
| Check | Example |
|---|---|
| **presence check** | a required field such as Surname cannot be empty |
| **range check** | score must be between 0 and 100 |
| **type check** | age must be a number |
| **length check** | phone number must have 11 digits |
| **format check** | date must be in DD/MM/YYYY form |
| **lookup (list) check** | class must be one of SS1A, SS1B, … |
| **check digit** | an extra digit calculated from the others to detect errors (e.g. in ISBNs, account numbers) |
**Verification** confirms data was entered as intended (double entry, proofreading).

## Backup and recovery
- **full backup** — copies everything; **incremental backup** — copies only changes since the last backup
- keep copies **off-site** or in the **cloud**; test restoring regularly
- **recovery** uses backups and transaction logs to restore data after failure
- use **UPS** and surge protection`,
          examples: `**Example 1.** A rule that rejects a score of 120 is a **range check**.

**Example 2.** What is an audit trail? *Answer:* A **record of who accessed or changed data** and when.

**Example 3.** Which backup copies only changes since the last backup? *Answer:* **incremental backup**.`,
        },
        questions: [
          ["E", "Proving one's identity before using a system is", "authentication", "authorisation", "normalisation", "compilation", "E.g. passwords."],
          ["E", "A check that ensures a required field is not left empty is a", "presence check", "range check", "type check", "format check", "Something must be present."],
          ["E", "A check that ensures a score is between 0 and 100 is a", "range check", "presence check", "length check", "lookup check", "Values must lie in a range."],
          ["M", "Deciding what an authenticated user is allowed to do is", "authorisation", "authentication", "validation", "backup", "Permissions are granted."],
          ["M", "A record of who accessed or changed data and when is an", "audit trail", "index", "foreign key", "SQL query", "Logs track activity."],
          ["M", "A check that a phone number has exactly 11 digits is a", "length check", "range check", "type check", "presence check", "It counts characters."],
          ["M", "A backup that copies only the changes since the last backup is", "incremental", "full", "mirror only", "manual", "Smaller and faster."],
          ["H", "Entering malicious code into a database input box to manipulate queries is", "SQL injection", "SQL normalisation", "a range check", "data independence", "A common attack."],
          ["H", "An extra digit calculated from other digits to detect entry errors is a", "check digit", "parity byte only", "primary key", "password", "Used in ISBNs and account numbers."],
          ["H", "The rule that a primary key cannot be empty is", "entity integrity", "referential integrity", "domain integrity", "concurrency control", "Each record must be identifiable."],
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
        title: "Network models: OSI and TCP/IP",
        subtopics: ["The need for network models", "The seven layers of the OSI model", "The TCP/IP model", "Devices and protocols at each layer"],
        objectives: ["Explain why network models are used", "Describe the seven OSI layers", "Compare the OSI and TCP/IP models", "Match devices and protocols to layers"],
        lesson: {
          title: "Layers of Network Communication",
          summary: "Describe the OSI and TCP/IP models.",
          minutes: 45,
          notes: `## Why models?
network communication is complex, so it is divided into **layers**, each with specific functions. Models help **standardise** equipment from different makers and make **troubleshooting** easier.

## The OSI model
**OSI (Open Systems Interconnection)** reference model has **seven layers** (from top to bottom):
| No. | Layer | Function | Examples |
|---|---|---|---|
| 7 | **Application** | services for user applications | HTTP, FTP, SMTP, DNS |
| 6 | **Presentation** | data format, **encryption**, compression | JPEG, SSL/TLS formatting |
| 5 | **Session** | sets up, manages and ends sessions | session control |
| 4 | **Transport** | reliable end-to-end delivery, error checking, segmentation | **TCP**, UDP |
| 3 | **Network** | **logical addressing and routing** | **IP**, **routers** |
| 2 | **Data Link** | physical (MAC) addressing, frames, error detection | **switches**, Ethernet, MAC addresses |
| 1 | **Physical** | transmission of raw **bits** over media | cables, hubs, repeaters, connectors |
Memory aid (top to bottom): **"All People Seem To Need Data Processing"**.

## The TCP/IP model
the practical model used by the **internet**, with **four layers**:
| TCP/IP layer | Matches OSI layers |
|---|---|
| **Application** | Application, Presentation, Session |
| **Transport** | Transport |
| **Internet** | Network |
| **Network Access (Link)** | Data Link, Physical |

## Addresses
- **MAC address** — a **physical address** burnt into a network card (48 bits, written in hex, e.g. 00:1A:2B:3C:4D:5E); used at the Data Link layer
- **IP address** — a **logical address** used for routing at the Network layer

## TCP and UDP
- **TCP** — connection-oriented, **reliable**, checks delivery (web, email, file transfer)
- **UDP** — connectionless, **faster**, no guarantee (live video, online games, voice calls)`,
          examples: `**Example 1.** At which OSI layer do routers work? *Answer:* the **Network** layer (layer 3).

**Example 2.** How many layers does the TCP/IP model have? *Answer:* **four**.

**Example 3.** Which protocol suits live video streaming, TCP or UDP? *Answer:* **UDP** (faster, tolerates loss).`,
        },
        questions: [
          ["E", "The OSI model has", "seven layers", "four layers", "five layers", "two layers", "Physical to Application."],
          ["E", "The lowest layer of the OSI model is the", "Physical layer", "Application layer", "Network layer", "Session layer", "It handles bits."],
          ["E", "The TCP/IP model has", "four layers", "seven layers", "three layers", "nine layers", "Used on the internet."],
          ["M", "Routers operate mainly at the OSI", "Network layer", "Physical layer", "Session layer", "Application layer", "They route packets by IP."],
          ["M", "Switches operate mainly at the OSI", "Data Link layer", "Network layer", "Transport layer", "Presentation layer", "They use MAC addresses."],
          ["M", "The OSI layer responsible for encryption and data formatting is the", "Presentation layer", "Physical layer", "Data Link layer", "Network layer", "It presents data."],
          ["M", "The OSI layer that provides reliable end-to-end delivery is the", "Transport layer", "Session layer", "Physical layer", "Application layer", "TCP works here."],
          ["H", "A physical address burnt into a network card is the", "MAC address", "IP address", "URL", "domain name", "Media Access Control."],
          ["H", "The protocol best suited to live video calls where speed matters more than perfect delivery is", "UDP", "TCP", "FTP", "SMTP", "Connectionless and fast."],
          ["H", "The memory aid 'All People Seem To Need Data Processing' lists the OSI layers from", "Application down to Physical", "Physical up to Application", "Network to Session", "Transport to Data Link", "Top to bottom. Answer: Application down to Physical."],
        ],
      },
      {
        week: 2,
        title: "Network security",
        subtopics: ["Network threats", "Firewalls and intrusion detection", "Encryption methods", "Secure connections and VPNs"],
        objectives: ["Identify threats to networks", "Explain firewalls and intrusion detection systems", "Distinguish symmetric and asymmetric encryption", "Explain secure connections and virtual private networks"],
        lesson: {
          title: "Protecting Networks",
          summary: "Explain network threats and protective technologies.",
          minutes: 45,
          notes: `## Network threats
- **hacking** — unauthorised access
- **malware** — worms spreading through networks, ransomware
- **denial-of-service (DoS/DDoS)** — overwhelming a server with traffic, often from many infected computers (a **botnet**)
- **eavesdropping (sniffing)** — intercepting data on the network
- **man-in-the-middle** attacks — intercepting and altering communication
- **phishing and social engineering**
- **unsecured Wi-Fi** — open networks expose data
- **insider threats**

## Firewalls
a **firewall** monitors and **filters incoming and outgoing traffic** using security rules; it can be **hardware** (in routers) or **software** (on computers). It blocks unauthorised access while allowing legitimate communication.

## Intrusion detection and prevention
- **IDS (Intrusion Detection System)** — monitors traffic and **alerts** administrators about suspicious activity
- **IPS (Intrusion Prevention System)** — also **blocks** the suspicious traffic

## Encryption
**encryption** converts readable data (**plaintext**) into unreadable form (**ciphertext**) using a **key**; **decryption** reverses it.
| Type | Keys | Notes |
|---|---|---|
| **symmetric** | the **same key** encrypts and decrypts | fast; the key must be shared secretly (e.g. AES) |
| **asymmetric (public-key)** | a **public key** encrypts; a matching **private key** decrypts | solves key sharing; used for digital signatures (e.g. RSA) |
A simple historical example is the **Caesar cipher** (shifting letters, e.g. A→D).

## Secure connections
- **HTTPS** uses **TLS** (formerly SSL) to encrypt web traffic; shown by a padlock
- **digital certificates** confirm a website's identity
- **digital signatures** confirm who sent a message and that it was not changed

## VPN
a **Virtual Private Network** creates an **encrypted "tunnel"** over the internet so remote users can connect securely to a private network (e.g. staff working from home).

## Wi-Fi security
use **WPA2/WPA3** encryption; strong Wi-Fi passwords; change default router passwords; hide or limit network access.`,
          examples: `**Example 1.** Which encryption type uses one shared key? *Answer:* **symmetric** encryption.

**Example 2.** What does a VPN create? *Answer:* an **encrypted tunnel** over the internet.

**Example 3.** Encrypt "CAT" with a Caesar shift of 3. *Answer:* **FDW**.`,
        },
        questions: [
          ["E", "A system that filters incoming and outgoing network traffic is a", "firewall", "router cable", "hub", "printer", "It applies security rules."],
          ["E", "Converting readable data into unreadable form is", "encryption", "decryption", "compression", "formatting", "Plaintext becomes ciphertext."],
          ["E", "Unreadable encrypted data is called", "ciphertext", "plaintext", "hypertext", "metadata", "It needs a key to read."],
          ["M", "Encryption in which the same key encrypts and decrypts is", "symmetric", "asymmetric", "public-key only", "hashing", "One shared key."],
          ["M", "Encryption using a public key and a private key is", "asymmetric", "symmetric", "Caesar only", "compression", "Keys come in pairs."],
          ["M", "Overwhelming a server with traffic so it stops working is a", "denial-of-service attack", "firewall", "VPN", "backup", "Service is denied."],
          ["M", "A secure encrypted tunnel over the internet for remote users is a", "VPN", "LAN", "DNS", "MAC", "Virtual Private Network."],
          ["H", "A system that monitors traffic and also blocks suspicious activity is an", "intrusion prevention system", "intrusion detection system only", "email client", "DNS server", "IPS blocks; IDS alerts."],
          ["H", "Encrypting 'CAT' with a Caesar shift of 3 gives", "FDW", "DBU", "ZXQ", "CAT", "C→F, A→D, T→W. Answer: FDW."],
          ["H", "A network of infected computers used to launch attacks is a", "botnet", "intranet", "extranet", "subnet mask", "Robots network."],
        ],
      },
      {
        week: 3,
        title: "Desktop publishing",
        subtopics: ["Meaning of desktop publishing", "DTP software and features", "Design principles for publications", "Producing a newsletter or flyer"],
        objectives: ["Explain desktop publishing", "Identify DTP software and features", "Apply design principles to publications", "Produce a simple newsletter or flyer"],
        lesson: {
          title: "Designing Publications",
          summary: "Use desktop publishing tools to design publications.",
          minutes: 45,
          notes: `## Meaning
**Desktop publishing (DTP)** is using a computer and software to **design and produce publications** that combine **text and graphics** with precise layout — newsletters, magazines, flyers, brochures, posters, certificates, business cards, books.

## DTP software
**Microsoft Publisher**, **Adobe InDesign**, **CorelDRAW**, **Scribus** (free), **Affinity Publisher**, **Canva** (online).

## DTP versus word processing
word processors focus on **text documents**; DTP gives finer control of **page layout**, **frames**, graphics placement, typography and print preparation.

## Features and terms
| Term | Meaning |
|---|---|
| **frame (text box)** | a container for text or pictures that can be moved and resized |
| **master page** | a template page whose elements (logo, page numbers) appear on all pages |
| **template** | a ready-made design |
| **text wrapping** | text flowing around a picture |
| **linked text boxes** | text flows from one box to another |
| **kerning** | adjusting space between **pairs of letters** |
| **tracking** | adjusting space across a group of letters |
| **leading** | space **between lines** of text |
| **bleed** | extending images beyond the trim edge so no white edges show after cutting |
| **gutter** | space between columns or the inner margins of facing pages |
| **drop cap** | a large first letter of a paragraph |
| **pull quote** | a quotation enlarged to attract attention |
| **CMYK** | Cyan, Magenta, Yellow, Black — colour model for **printing**; **RGB** is for screens |
| **DPI** | dots per inch; **300 dpi** is common for print quality |

## Design principles
**alignment**, **contrast**, **repetition** (consistency), **proximity** (group related items), **white space**, limited fonts (2–3), readable sizes, clear **hierarchy** of headings.

## Producing a newsletter
1. plan content and audience
2. choose page size and template
3. set up master page (masthead, date, page numbers)
4. create columns and text frames; import text
5. add pictures with captions
6. proofread
7. export as **PDF** for printing or sharing`,
          examples: `**Example 1.** Space between lines of text is called **leading**.

**Example 2.** Which colour model is used for printing? *Answer:* **CMYK**.

**Example 3.** What is a master page? *Answer:* a template page whose elements **appear on every page**.`,
        },
        questions: [
          ["E", "Designing publications that combine text and graphics on a computer is", "desktop publishing", "data processing", "database design", "programming", "DTP produces publications."],
          ["E", "Microsoft Publisher is an example of", "DTP software", "a spreadsheet", "an operating system", "a database", "It designs publications."],
          ["E", "A container for text or pictures in DTP is a", "frame", "cell", "record", "folder", "Frames can be moved."],
          ["M", "Space between lines of text is", "leading", "kerning", "tracking", "bleed", "Pronounced 'ledding'."],
          ["M", "Adjusting the space between pairs of letters is", "kerning", "leading", "bleeding", "gutter", "Pairs like AV. Answer: kerning."],
          ["M", "The colour model used for printing is", "CMYK", "RGB", "HTML", "ASCII", "Cyan, magenta, yellow, black."],
          ["M", "A page whose elements appear on every page of a publication is the", "master page", "title page only", "back cover", "index page", "It holds repeated items."],
          ["H", "Extending images beyond the trim edge so no white edges show after cutting is", "bleed", "gutter", "leading", "drop cap", "Printers trim the bleed."],
          ["H", "A common resolution for good-quality printed images is", "300 dpi", "10 dpi", "30 dpi", "3 dpi", "High resolution for print."],
          ["H", "A large first letter at the start of a paragraph is a", "drop cap", "pull quote", "kerning pair", "masthead", "It drops into the text."],
        ],
      },
      {
        week: 4,
        title: "Computer maintenance and troubleshooting",
        subtopics: ["Types of maintenance", "Maintenance tools and safety", "Troubleshooting procedure", "Common faults and solutions"],
        objectives: ["Distinguish preventive and corrective maintenance", "Identify maintenance tools and safety precautions", "Follow a systematic troubleshooting procedure", "Diagnose and fix common computer faults"],
        lesson: {
          title: "Keeping Computers Working",
          summary: "Maintain computers and troubleshoot common faults.",
          minutes: 45,
          notes: `## Types of maintenance
| Type | Meaning | Examples |
|---|---|---|
| **preventive** | regular actions to **prevent** problems | cleaning dust, updating software, antivirus scans, backups, disk cleanup, checking cables |
| **corrective (repair)** | fixing faults **after** they occur | replacing a failed hard disk, reinstalling an OS |
| **adaptive** | changing to suit new needs | upgrading RAM, installing new software |

## Tools
screwdrivers (Phillips, flat), **antistatic wrist strap** and mat, **air blower** or compressed air, **multimeter** (tests voltage and continuity), **POST card**, cable tester, thermal paste, lint-free cloth, isopropyl alcohol, **bootable USB** with recovery tools, diagnostic software.

## Safety precautions
- **switch off and unplug** before opening the system unit
- wear an **antistatic wrist strap** — **electrostatic discharge (ESD)** can destroy chips
- handle components by their edges
- do not open the **power supply unit** or **monitor** (high voltage)
- keep screws organised; work on a clean, dry surface

## Troubleshooting procedure
1. **identify the problem** — ask questions, observe symptoms, note error messages
2. **establish a theory** of probable cause (start with simple causes)
3. **test the theory**
4. **plan and implement** the solution
5. **verify** the system works fully
6. **document** the problem and solution

## Common faults and solutions
| Symptom | Possible cause | Solution |
|---|---|---|
| no power, no lights | power cable loose, faulty PSU, socket off | check cables and socket; test or replace PSU |
| beeps at start-up, no display | RAM or graphics card not seated | reseat RAM/graphics card; check **beep codes** |
| "no bootable device" | hard disk failure or wrong boot order | check BIOS boot order; check disk connections |
| very slow | malware, low RAM, full disk | scan, uninstall unused programs, disk cleanup, add RAM |
| overheating, sudden shutdowns | dust, failed fan, old thermal paste | clean dust, replace fan, reapply thermal paste |
| no internet | cable unplugged, Wi-Fi off, router fault | check connections, restart router, run network troubleshooter |
| printer not printing | offline, paper jam, driver | check connection, clear jam, reinstall driver |
| blue screen error | driver or hardware fault | note error code, update drivers, test RAM |`,
          examples: `**Example 1.** Why wear an antistatic wrist strap? *Answer:* To prevent **electrostatic discharge** damaging components.

**Example 2.** A computer beeps at start-up and shows no display. What should you check first? *Answer:* **Reseat the RAM** (and graphics card).

**Example 3.** Cleaning dust and updating antivirus regularly is **preventive maintenance**.`,
        },
        questions: [
          ["E", "Regular actions taken to prevent computer problems are", "preventive maintenance", "corrective maintenance", "piracy", "formatting", "Prevention avoids faults."],
          ["E", "Before opening a system unit, you should", "switch off and unplug it", "keep it running", "pour water on it", "remove the monitor screen", "Safety first. Answer: switch off and unplug it."],
          ["E", "A tool used to measure voltage is a", "multimeter", "scanner", "plotter", "router", "It measures electrical values."],
          ["M", "Fixing a fault after it has occurred is", "corrective maintenance", "preventive maintenance", "adaptive coding", "backup", "Repair work. Answer: corrective maintenance."],
          ["M", "An antistatic wrist strap protects components from", "electrostatic discharge", "viruses", "water", "dust", "ESD can destroy chips."],
          ["M", "A computer that shuts down suddenly and feels very hot may have", "dust build-up or a failed fan", "too much free disk space", "a new mouse", "a large monitor", "Overheating triggers shutdowns."],
          ["M", "The first step in troubleshooting is to", "identify the problem", "replace the motherboard", "format the disk", "buy a new computer", "Know the symptoms first."],
          ["H", "A computer that beeps at start-up and shows no display most likely has a problem with its", "RAM or graphics card", "speakers", "keyboard layout", "printer driver", "Beep codes indicate this."],
          ["H", "The message 'no bootable device' may be caused by", "hard disk failure or wrong boot order", "a dirty mouse", "low screen brightness", "a full Recycle Bin", "The OS cannot be found."],
          ["H", "The final step of the troubleshooting procedure is to", "document the problem and solution", "test the theory", "identify the problem", "establish a theory", "Records help next time."],
        ],
      },
      {
        week: 5,
        title: "Multimedia",
        subtopics: ["Meaning and elements of multimedia", "Audio and video formats", "Compression: lossy and lossless", "Multimedia applications"],
        objectives: ["Define multimedia and its elements", "Identify common audio, image and video formats", "Distinguish lossy and lossless compression", "Describe applications of multimedia"],
        lesson: {
          title: "Combining Text, Sound, Images and Video",
          summary: "Explain multimedia elements, formats and compression.",
          minutes: 45,
          notes: `## Meaning
**Multimedia** is the combination of **two or more media** — **text, graphics (images), audio, video and animation** — presented together, often **interactively**.

## Elements
| Element | Examples |
|---|---|
| **text** | titles, captions |
| **graphics** | photos, drawings, charts |
| **audio** | speech, music, sound effects |
| **video** | recorded moving pictures |
| **animation** | computer-generated moving images |
| **interactivity** | buttons, links, quizzes |

## File formats
| Media | Formats |
|---|---|
| images | **JPEG** (photos), **PNG** (transparency, lossless), **GIF** (simple animations), **BMP**, **SVG** (vector) |
| audio | **MP3**, **WAV** (uncompressed), **AAC**, **FLAC** (lossless), **OGG** |
| video | **MP4**, **AVI**, **MOV**, **MKV**, **WEBM** |

## Compression
**Compression** reduces file size for storage and faster transmission.
| Lossy | Lossless |
|---|---|
| **permanently removes** some data the eye/ear may not notice | **no data is lost**; original can be restored exactly |
| much smaller files | smaller savings |
| JPEG, MP3, MP4 | PNG, ZIP, FLAC, GIF |
| photos, music, video streaming | text files, programs, medical images |
Editing and re-saving lossy files repeatedly reduces quality.

## Multimedia hardware and software
- hardware: speakers, microphone, webcam, sound card, graphics card, projector, touchscreen, VR headset
- software: media players (VLC), editors (Audacity for audio; video editors), animation tools, presentation software

## Applications
**education** (e-learning, educational videos, simulations); **entertainment** (films, games, music streaming); **advertising**; **business** presentations; **medicine** (training simulations); **tourism** (virtual tours); **journalism** and social media content; **video conferencing**.

## Copyright
use your own media or properly licensed/royalty-free materials; credit creators.`,
          examples: `**Example 1.** Is MP3 lossy or lossless? *Answer:* **lossy**.

**Example 2.** Which image format supports transparency and is lossless? *Answer:* **PNG**.

**Example 3.** Name two elements of multimedia. *Answer:* **audio** and **video** (also text, graphics, animation).`,
        },
        questions: [
          ["E", "The combination of text, graphics, audio, video and animation is", "multimedia", "monomedia", "metadata", "middleware", "Many media together."],
          ["E", "MP3 is a format for", "audio", "video only", "spreadsheets", "databases", "MP3 stores music."],
          ["E", "MP4 is commonly used for", "video", "plain text", "spreadsheets", "fonts", "It stores video and audio."],
          ["M", "Compression that permanently removes some data is", "lossy compression", "lossless compression", "encryption", "normalisation", "Some quality is lost."],
          ["M", "Compression that allows the original to be restored exactly is", "lossless compression", "lossy compression", "random compression", "partial compression", "No data is lost."],
          ["M", "An image format that supports transparency and is lossless is", "PNG", "JPEG", "MP3", "AVI", "Portable Network Graphics."],
          ["M", "ZIP files use", "lossless compression", "lossy compression", "no compression", "video compression only", "Programs must be restored exactly."],
          ["H", "Repeatedly editing and re-saving a JPEG image", "gradually reduces its quality", "improves its quality", "makes it lossless", "converts it to PNG", "Lossy compression accumulates loss."],
          ["H", "An uncompressed audio format is", "WAV", "MP3", "AAC", "OGG", "WAV files are large."],
          ["H", "Lossless compression is preferred for", "computer programs and text files", "online music streaming", "video streaming", "social media photos only", "Exact data is essential."],
        ],
      },
    ],
  },
];
